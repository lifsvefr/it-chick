(function(){
/* How English Works · Unit 11 (e5u11) · Spelling, punctuation and style */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u11", track:"e5", n:11, title:"Spelling, punctuation and style", icon:"✍️",
  blurb:"Why English spelling looks so odd, and which patterns still help. You learn the short history behind silent letters and the Great Vowel Shift, the spelling rules that work and their real exceptions, and how US and UK spelling differ. Then you look at commas, quotation marks, apostrophes and capital letters as grammar and as style choices, and at how speech and writing follow different rules.",
  goals:[
    "Explain, with accurate history, why English spelling and pronunciation disagree: Old English, French and Latin influence, printing, the Great Vowel Shift and dictionaries",
    "Use spelling patterns (magic e, doubling, -tion/-sion, soft and hard c and g) together with their common exceptions, and compare US and UK spelling sets",
    "Place commas, semicolons, colons, hyphens and quotation marks in US style, treat the serial comma as a style choice, and compare UK practice",
    "Use apostrophes, capital letters, title case and sentence case correctly, and explain the greengrocer’s apostrophe kindly",
    "Describe how spoken grammar (fragments, markers, vague language, heads and tails) differs from written grammar, and choose a register for a reader"
  ],
  read:[
    {book:"eling", where:"The Historical Linguistics chapter, section “Phonological change”; the Language Variation and Change chapter, section “Language varies”", note:"Cited by topic. The book is written for linguistics students, so use this unit first and read the sections afterward."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u11-l1", title:"Why English spelling is irregular", minutes:55,
   hook:{q:"Why is the word *knight* spelled with a *k* and *gh* when we say it /naɪt/?", options:["English spelling was designed badly.","The spelling kept the sounds that people used to say, and the sounds changed later.","Teachers added the letters to make the word look more serious.","The letters are a mistake that dictionaries forgot to fix."], answer:1, reveal:"**The spelling kept the old sounds.** A long time ago people said the *k* and a rough sound for *gh*. The pronunciation changed, but the written word stayed. This lesson tells the story, and it shows that most of the oddness has a reason."},
   goals:[
     "Explain, in plain words, why English spelling and pronunciation often disagree",
     "Describe the main steps: Old English, French and Latin influence, the printing press, the Great Vowel Shift, and later dictionaries",
     "Tell silent letters that were once pronounced (*knight*, *write*) from letters added later (*debt*, *doubt*)",
     "Say that spelling also keeps meaning visible, and give Noah Webster’s role in US spelling"
   ],
   learn:[
    {h:"Spelling is a record of old sounds", body:[
      {lead:"Spelling is not a recording of how we speak today. It is closer to a photograph of how people spoke several hundred years ago."},
      "Many learners meet English in writing first. They then expect each letter to have one sound, as in *kana*. Unit 2 showed that this does not work. This lesson explains why.",
      "Here is the basic story. When people first wrote English down, they used the Latin alphabet and tried to match letters to sounds. Over the centuries, the **sounds** of English changed a great deal. The **spelling** changed much more slowly, because printed books and dictionaries made it stable. So today the spelling shows an older pronunciation. This is called an [[hew-orthography|orthography]] (a writing system) that is far from the speech it describes.",
      {fig:'<svg viewBox="0 0 340 290"><defs><marker id="e5u11a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">One word, three stages</text><rect class="d-sage" x="20" y="32" width="300" height="62" rx="8" stroke-width="2"/><text x="34" y="56">Old English, about 900: cniht</text><text class="s" x="34" y="80">Said with k, n, i and a rough sound</text><path class="d-ink" d="M170 96V122" stroke-width="2" marker-end="url(#e5u11a)"/><rect class="d-gold" x="20" y="126" width="300" height="62" rx="8" stroke-width="2"/><text x="34" y="150">Middle English, about 1400: knyght</text><text class="s" x="34" y="174">Spelling changes, but k and gh still said</text><path class="d-ink" d="M170 190V216" stroke-width="2" marker-end="url(#e5u11a)"/><rect class="d-rose" x="20" y="220" width="300" height="62" rx="8" stroke-width="2"/><text x="34" y="244">Today: knight</text><text class="s" x="34" y="268">Said /naɪt/. The letters stayed, the sounds went.</text></svg>', alt:"Three boxes from top to bottom show the word knight: cniht in Old English with k, n and a rough sound; knyght in Middle English still with k and gh; and knight today, said with no k and no gh.", cap:"The letters in knight record an older pronunciation. The dates are approximate."},
      {key:"Spelling changes slowly and sound changes continue, so the two drift apart. The odd spellings are mostly old pronunciations that the letters kept."}
    ]},
    {h:"Four layers of history", body:[
      "English spelling is a stack of layers. Each layer left marks. Dates below are approximate, because the changes were slow and different in different places.",
      {table:[["Period","What happened","What it left in spelling"],["Old English (about 450–1100)","Germanic language, written first with the Latin alphabet, plus a few extra letters.","Letters were mostly pronounced: *cniht* had a *k* and an *h*-like sound."],["Middle English (about 1100–1500)","After 1066, French became the language of the Norman rulers. Scribes (writers) used French habits.","*qu-* in *queen* (Old English *cwēn*), *ou* in *house*, *c* for /s/ in *city*."],["Early Modern English (about 1500–1700)","Printing, new Latin and Greek loanwords, and the Great Vowel Shift.","Fixed spellings. Latin-style letters such as the *b* in *debt*."],["Modern English (1700 on)","Dictionaries, schools and standard printing.","Spellings were mostly set. In the US, Webster changed some of them."]]},
      "French brought more than words. Scribes who knew French wrote *qu* for the sound /kw/ and *ou* for the long /uː/ sound, so Old English *hūs* became *house*. They also used *c* for /s/ before *e* and *i*: *ice*, *city*. A common explanation says that scribes wrote *o* instead of *u* next to letters made of short strokes (*m, n, v, w*), because a row of strokes was hard to read. That may be why we write *love*, *son* and *come*.",
      "Spelling also stayed varied for a long time. A writer in the 1400s could spell the same word two ways on one page. There was no national standard, no school system with spelling tests, and no single dictionary.",
      "**Printing** changed this. In Europe, movable-type printing began about 1450 with Johannes Gutenberg. William Caxton set up the first printing press in England in 1476, at Westminster. Printers wanted books that readers across the country could use, and they favored habits that repeated. Over the next two centuries, spelling became more fixed. But it was not fixed in one moment, and no printer or king ordered it.",
      "Two dictionaries matter for the later story. Samuel Johnson published *A Dictionary of the English Language* in 1755, and it was widely used as a reference for spelling in Britain. Noah Webster published *An American Dictionary of the English Language* in 1828. Webster wanted simpler and more “American” spellings. Many of his choices won, such as *color, center* and *defense*. Some of his bolder ideas did not last. Dictionaries and schools made a settled standard, and later writers copied it.",
      {tip:"You can say all this in one sentence to a student: “Our spelling mostly froze about 400 years ago, and our speech has changed since.”"}
    ]},
    {h:"The Great Vowel Shift", body:[
      "The biggest sound change is the [[hew-great-vowel-shift|Great Vowel Shift]]. It changed the long vowels of English, roughly between 1400 and 1700. It was gradual, it did not happen at the same speed in all dialects, and scholars still discuss why it began. Do not think of it as one event with a date.",
      "In general, long vowels moved up in the mouth. The vowels that could not move up any more became diphthongs, which are vowels that glide from one sound to another. The spelling stayed. Here are some examples, with sounds shown in simple, approximate form.",
      {table:[["Word","Before the shift (approximate)","After the shift (GA)"],["*bite*","like *bee-teh*","/baɪt/"],["*meet*","like the vowel in *mate*, but with no glide","/mit/"],["*house*","like *hoose*","/haʊs/"],["*goose*","like *go-ss*, with a long *o*","/gus/"],["*name*","like *nah-meh*","/neɪm/"]]},
      "This is why the vowel letters of English often have different values from the same letters in Italian, Spanish or Japanese romaji. In *bite*, the letter *i* once stood for the sound we now spell *ee*. Words borrowed from other languages after the shift, or spelled by writers who knew those languages, kept the continental values: *machine*, *police* and *pizza* have *i* said /i/.",
      {ex:"**GA:** bite, meet, house, goose, name.", label:"Listen (GA)", listen:"e5u11-l1-a1"},
      {ex:"**SSBE:** bite, meet, house, goose, name.", label:"Listen (SSBE)", listen:"e5u11-l1-a2"},
      "Not every irregularity comes from the shift. The next section looks at letters that are silent."
    ]},
    {h:"Silent letters: two different stories", body:[
      "A [[hew-silent-letter|silent letter]] is a letter that you see but do not say. Silent letters have two very different origins.",
      {h:"Story 1: the letter was once pronounced"},
      "In Old and Middle English, people said the *k* in *knight* and *knee*, the *w* in *write* and *wrong*, the *g* in *gnat* and *gnaw*, and the *b* in *lamb*. Later these sounds disappeared in speech, but the spelling stayed. The silent letter is a fossil.",
      {h:"Story 2: the letter was added later"},
      "In the 1500s, some scholars changed spellings to show a Latin origin. Middle English had *dette* and *doute*, from French. The Latin words were *debitum* and *dubitare*, so writers added a *b*: *debt* and *doubt*. The *b* was never said in English. Another example is *island*. It comes from Old English, and the *s* was added by writers who wrongly linked the word to *isle*, which comes from Latin *insula*.",
      {table:[["Word","Silent letter","Story"],["*knee, knight*","*k*","Once pronounced. Pronunciation changed, spelling stayed."],["*write, wrong*","*w*","Once pronounced."],["*lamb, comb*","*b*","The *b* was once said after *m*. It was later lost."],["*debt, doubt*","*b*","Added later to look like Latin. Never said."],["*island*","*s*","Added later by mistake. Never said."]]},
      "You cannot tell the two stories from the spelling alone, so use a dictionary of word history, such as the etymology notes in the *Merriam-Webster* online dictionary or *Etymonline*. We call this an [[hew-etymology|etymology]]. It is a good way to make an odd spelling easier to remember.",
      {ex:"**GA and SSBE:** knight, knee, write, gnat, lamb, debt, doubt, island.", label:"Listen (GA and SSBE)", listen:"e5u11-l1-a3"},
      {h:"Loanwords keep their spelling"},
      "English also borrowed words from many languages and often kept the source spelling, or a version of it: *ballet* and *restaurant* (French), *pizza* (Italian), *karaoke* and *tsunami* (Japanese, written in romaji), *psychology* (Greek). That adds more patterns: *ph* for /f/ in Greek-origin words, *ch* for /k/ in *chemistry*, *-tion* from Latin.",
      {ex:"**GA and SSBE:** ballet, restaurant, pizza, tsunami, psychology.", label:"Listen (GA and SSBE)", listen:"e5u11-l1-a4"}
    ]},
    {h:"What the odd spelling still does well", body:[
      "It is easy to see only the problems. But the same system keeps meaning visible. The spelling *-ed* marks the past in *walked*, *played* and *wanted*, although it is said /t/, /d/ and /ɪd/. If English spelled each sound, the three endings would look different, and the link to the past would be harder to see. In the same way, *sign* and *signature*, *bomb* and *bombard*, and *nation* and *national* look alike because they are related, even if the sound changes.",
      "This means English spelling is a compromise between two jobs: showing sound, and showing the relation between words. Many spelling systems do the same, to different degrees.",
      {h:"Compared with Japanese"},
      "Japanese had a similar gap and closed it by a reform. In older kana spelling, the word for “today” was written *けふ*, but it was said *kyō*. In 1946, the government introduced a modern kana system, *現代かなづかい* (*gendai kanazukai*, “modern kana usage”), that follows pronunciation more closely, so it is now written *きょう*. English has never had such an official reform. There is no academy that decides English spelling, so the gap between writing and speech has stayed open. Kanji has its own difficulty: one character can have several readings (*生* is read many ways), a little like *ough*.",
      {h:"Why not simply reform it?"},
      "People have proposed spelling reforms for centuries, and only small changes have lasted. A reform would have to choose one accent, because GA and SSBE say many words differently. It would make old books harder to read. It would hide the links between related words. And there is no body with the power to enforce it. So, for now, the practical answer is to learn the patterns that exist (Lesson 2), and to look up the rest.",
      {key:"English spelling is irregular because the language kept changing after printing and dictionaries held the spelling in place. Most irregular spellings have a reason."}
    ]}
   ],
   try:[
    M("e5u11-l1-x1","Which statement about the Great Vowel Shift is the most accurate?",1,[
      ["It happened in 1476 when Caxton opened his printing press.","The shift took place over about three centuries and was not caused by a single event. Caxton’s date belongs to printing."],
      ["It changed English long vowels gradually, roughly between 1400 and 1700, while spelling stayed the same.","Right. The sounds moved, the letters stayed, and so *bite* still has an *i* that once stood for a different sound."],
      ["It changed all English words in the same way at the same speed in every dialect.","The shift was uneven. Different places changed at different speeds, and some words kept older sounds."],
      ["It only affected words from French.","It affected native English words such as *bite*, *house* and *meet*."]
    ]),
    {id:"e5u11-l1-x2", type:"sort", q:"For each silent letter, say whether it was once pronounced or was added later to look like Latin or to suggest a word origin.", buckets:["Once pronounced","Added later"], items:[
      {t:"the k in *knight*", b:0, why:"People said /k/ in this word in Old and Middle English."},
      {t:"the b in *debt*", b:1, why:"Writers added it in the 1500s to match Latin *debitum*. It was never said in English."},
      {t:"the w in *write*", b:0, why:"The /w/ was said in Old English *wrītan*."},
      {t:"the s in *island*", b:1, why:"Writers linked the word to *isle* by mistake. The *s* was never said."},
      {t:"the g in *gnat*", b:0, why:"Old English *gnæt* had a pronounced /g/."},
      {t:"the b in *doubt*", b:1, why:"Added to match Latin *dubitare*. Never said."}
    ]},
    {id:"e5u11-l1-x3", type:"order", q:"Put these events in order, from earliest to latest.", items:[
      {t:"Old English is written with the Latin alphabet (about the year 700).", why:"This is the first layer. The letters mostly matched the sounds."},
      {t:"The Norman Conquest (1066) brings French scribes and spelling habits.", why:"French habits such as *qu-* and *ou* enter English spelling after this."},
      {t:"William Caxton sets up a printing press in England (1476).", why:"Printing helped to stabilize spelling over the next two centuries."},
      {t:"Samuel Johnson publishes his dictionary (1755).", why:"A widely used reference for British spelling."},
      {t:"Noah Webster publishes his American dictionary (1828).", why:"It made American spellings such as *color* and *center* standard in the US."}
    ]},
    {id:"e5u11-l1-x4", type:"match", q:"Match each spelling puzzle to the best explanation.", pairs:[
      ["the *k* in *knee*","It was pronounced in older English.","The sound was lost, but the spelling stayed."],
      ["the *b* in *debt*","It was added to look like Latin.","Writers in the 1500s changed the spelling. Nobody ever said it."],
      ["*qu* in *queen*","French scribes’ spelling habit.","It replaced the older Old English *cw-*."],
      ["the *i* in *bite*","The Great Vowel Shift.","The vowel sound changed, but the spelling did not follow."],
      ["*-ed* in *walked*","It keeps the past ending visible.","It is said /t/ but written *-ed*, so the link to the past stays clear."]
    ]},
    {id:"e5u11-l1-x5", type:"ipa", q:"Transcribe *bite* (GA). The letter *i* now stands for a diphthong.", answer:["baɪt"], why:"GA /baɪt/. The vowel glides from /a/ to /ɪ/. Before the Great Vowel Shift, the word had a long /iː/ sound.", wrongs:[{v:"bit", why:"This is *bit*, with a short vowel. The vowel in *bite* is a diphthong."},{v:"beɪt", why:"This is *bait*. The vowel of *bite* glides from /a/, not from /e/."}], stress:false},
    {id:"e5u11-l1-x6", type:"number", q:"William Caxton set up his press in England in 1476. Samuel Johnson’s dictionary appeared in 1755. How many years are between the two?", answer:279, tol:0, unit:"years", why:"1755 − 1476 = 279. English spelling became more fixed during these years, but it was slow, with no single decisive date.", wrongs:[{v:289, tol:0, why:"This is an arithmetic slip of ten years. Subtract carefully: 1755 − 1476 = 279."}], hint2:"Subtract the earlier year from the later one."},
    {id:"e5u11-l1-x7", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a student: “Why is *debt* spelled with a *b*? Nobody says it.” Write the explanation Toby could give.", size:"3–5 sentences", prompt:"Toby could say: …", hint:"Say where the b came from, and that it is not a pronunciation clue.", model:"The *b* is a sound that English never had in this word. In the Middle Ages the word was spelled *dette*, from French. In the 1500s, some writers changed it to *debt* so that it looked more like the Latin word *debitum*. The pronunciation did not change, but the spelling stayed. *Doubt* has the same history. So the silent *b* is not a mistake you made. It is a decision some writers made hundreds of years ago, and now it is part of the standard spelling.", points:["Says the b was added later and was never pronounced", "Mentions the Latin source (debitum or dubitare)", "Says that the pronunciation did not change", "Reassures the learner that it is not their error"]},
    {id:"e5u11-l1-x8", type:"explain", q:"A tutor says to a learner: “English should reform its spelling, so that every word matches its sound.” The learner asks: “Why hasn’t it happened?” Write a short explanation.", size:"3–5 sentences", prompt:"I would say: …", hint:"Give two or three reasons: accents, older books, related words, no authority.", model:"Many people have suggested reforms, but only small changes have lasted. One problem is accent: a spelling that matches General American does not match Southern British, or Australian, or Indian English. Another problem is that a reform would make all older books and documents harder to read. Spelling also shows links between related words, such as *sign* and *signature*. Finally, no organization has the authority to decide for all English speakers.", points:["Mentions accents and regional differences", "Mentions older writing or the cost of change", "Mentions that spelling shows word relations or meaning", "Mentions that no authority controls English spelling"]}
   ],
   apply:{
    intro:"These tasks use a free online dictionary. Nothing needs an account. Use Merriam-Webster (merriam-webster.com) or Etymonline (etymonline.com) for word history.",
    tasks:[
     {t:"Look up the history of four odd spellings", how:[
       "Look up *debt, island, knight* and *vegetable* in Merriam-Webster or Etymonline.",
       "For each, write one sentence: the source language and one reason for the spelling.",
       "Say which word you will now find easier to remember, and why."
     ], write:"debt… island… knight… vegetable… The word I will remember…"},
     {t:"Find your own Great Vowel Shift pairs", how:[
       "List five English words that have the letter *i* said /aɪ/ (for example *time*, *five*).",
       "Say each one. Then say the same letter *i* as in Italian or Spanish (/i/).",
       "Write a two-sentence note that explains the change in your own words."
     ], write:"My five words… My two-sentence note…"}
    ],
    proof:"Four short word histories in your own words, and a two-sentence explanation of why the letter i is said differently in English."
   },
   read:[
    {book:"eling", where:"The Historical Linguistics chapter, section “Phonological change”", note:"Look for how sound change works in general. The Great Vowel Shift is one famous example."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u11-l2", title:"Spelling patterns that help", minutes:55,
   hook:{q:"Which pair is spelled correctly?", options:["hoping and hopping, for hope and hop","hopeing and hoping, for hope and hop","hoping and hoping, for hope and hop","hopping and hopping, for hope and hop"], answer:0, reveal:"**Hoping (from hope) and hopping (from hop).** One tiny pattern tells the two words apart: a final *e* is dropped before *-ing*, but a short vowel before one consonant makes the consonant double. English spelling has many rules like this. They have exceptions, but they work more often than they fail."},
   goals:[
     "Use the magic *e* pattern, doubling rules and the *e*-drop rule to spell *-ing* and *-ed* forms",
     "Choose *-tion*, *-sion* and *-cian* by the usual tendencies, and read soft and hard *c* and *g*",
     "Know the real exceptions (*have, give, get, weird*) and why they are not “rules broken”",
     "Compare US and UK spelling sets (*-or/-our, -ize/-ise, -er/-re, -l-/-ll-*), and hear words spelled the same but said differently in GA and SSBE"
   ],
   learn:[
    {h:"Patterns, not laws", body:[
      {lead:"English spelling is irregular, but not random. Many patterns help you to spell and to read a new word."},
      "A spelling [[hew-spelling-pattern|pattern]] is a regular link between letters and sounds, or between a word and its suffix. These patterns work most of the time. They have exceptions, and that is normal. Many exceptions are old words that people use often, so they kept an older spelling (*have, give, said, was*). New and rare words usually follow the pattern.",
      "When you learn a pattern, also learn two or three exceptions. A good teacher says, “This is the pattern. These are the common words that do not follow it.” This is more honest and more useful than saying “English has no rules”.",
      {h:"Magic e"},
      "A final *e* that is not said can show that the vowel before it is long. This is often called “magic *e*” (or silent *e*). Compare these pairs:",
      {table:[["Short vowel (GA)","Long vowel with final e (GA)"],["*cap* /kæp/","*cape* /keɪp/"],["*kit* /kɪt/","*kite* /kaɪt/"],["*hop* /hɑp/","*hope* /hoʊp/"],["*cut* /kʌt/","*cute* /kjut/"],["*pet* /pɛt/","*Pete* /pit/"]]},
      "The pattern is **vowel + one consonant + e**. The long vowel is the “name” of the letter, with the changes from Lesson 1. There are exceptions: *have, give, live* (the verb), *come, some, done, gone, love, one, none*. All are common words that keep old vowels or old spellings.",
      {h:"Doubling and dropping letters"},
      "When you add *-ing* or *-ed* (or *-er, -est, -y*), two rules interact.",
      {list:[
        "**Drop the final *e* before a vowel ending:** *hope → hoping, hoped; make → making; write → writing.* Keep the *e* after soft *c* or *g* before *-able* or *-ous*: *noticeable, courageous*.",
        "**Double the final consonant** when the word ends in one vowel plus one consonant and the stress is on the last syllable: *hop → hopping, hopped; stop → stopping; plan → planning; begin → beginning; refer → referring.* The doubled letter keeps the vowel short.",
        "**Do not double** when the stress is not on the last syllable: *visit → visiting, open → opening, listen → listening.* **Do not double** *w, x* or *y*: *fixing, showing, playing.*",
        "**Change *y* to *i* after a consonant:** *try → tries, tried; happy → happiness.* But keep the *y* before *-ing* (*trying*) and after a vowel (*played, enjoys*)."
      ]},
      {ex:"**GA and SSBE:** hopping, hoping, hopped, hoped.", label:"Listen (GA and SSBE)", listen:"e5u11-l2-a1"},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e5u11b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Adding -ing to a verb</text><rect class="d-panel" x="40" y="32" width="260" height="38" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">Does the verb end in -e?</text><path class="d-ink" d="M100 72V100" stroke-width="2" marker-end="url(#e5u11b)"/><text class="s" x="108" y="92">yes</text><path class="d-ink" d="M240 72V100" stroke-width="2" marker-end="url(#e5u11b)"/><text class="s" x="248" y="92">no</text><rect class="d-lup" x="14" y="104" width="172" height="46" rx="8" stroke-width="2"/><text x="100" y="124" text-anchor="middle">Drop the e</text><text class="s" x="100" y="142" text-anchor="middle">hope → hoping</text><rect class="d-panel" x="196" y="104" width="130" height="46" rx="8" stroke-width="2"/><text x="261" y="124" text-anchor="middle">One vowel +</text><text x="261" y="142" text-anchor="middle">one consonant?</text><path class="d-ink" d="M261 152V180" stroke-width="2" marker-end="url(#e5u11b)"/><text class="s" x="269" y="172">yes</text><rect class="d-panel" x="160" y="184" width="166" height="46" rx="8" stroke-width="2"/><text x="243" y="204" text-anchor="middle">Is the last syllable</text><text x="243" y="222" text-anchor="middle">stressed?</text><path class="d-ink" d="M200 232V260" stroke-width="2" marker-end="url(#e5u11b)"/><text class="s" x="208" y="252">yes</text><rect class="d-gold" x="104" y="264" width="118" height="46" rx="8" stroke-width="2"/><text x="163" y="284" text-anchor="middle">Double it</text><text class="s" x="163" y="302" text-anchor="middle">hop → hopping</text><path class="d-ink" d="M290 232V260" stroke-width="2" marker-end="url(#e5u11b)"/><text class="s" x="298" y="252">no</text><rect class="d-sage" x="232" y="264" width="98" height="46" rx="8" stroke-width="2"/><text x="281" y="284" text-anchor="middle">Just add it</text><text class="s" x="281" y="302" text-anchor="middle">visit → visiting</text></svg>', alt:"A flowchart for adding -ing. If the verb ends in e, drop it (hope, hoping). If not, ask whether the word ends in one vowel and one consonant. If yes, ask whether the last syllable is stressed. If it is, double the consonant (hop, hopping). If not, just add -ing (visit, visiting).", cap:"A simple decision path for -ing. Other words (play, fix) just add -ing."},
      {warn:"The doubling rule is for words that end in one vowel and one consonant, such as *hop, plan, begin*. Words that end in two consonants (*help, start*) just add *-ing*: *helping, starting*."}
    ]},
    {h:"-tion, -sion, and the soft and hard sounds", body:[
      {h:"-tion, -sion and -cian"},
      "Most English words that end in the sound /ʃən/ are spelled *-tion*: *nation, station, action, information*. This is by far the most common spelling, so when you do not know, choose *-tion*. There are tendencies for the other spellings.",
      {table:[["Ending","When it is likely","Examples"],["*-tion*","The default. After most vowels and many consonants.","*nation, action, option, solution*"],["*-sion* (said /ʃən/)","After a consonant.","*tension, expansion, mansion, pension*"],["*-sion* (said /ʒən/)","After a vowel. The sound is the one in *measure*.","*vision, television, confusion, decision* (from *decide*)"],["*-ssion*","Said /ʃən/. Often from verbs such as *permit* and *discuss*.","*mission, session, discussion, permission*"],["*-cian*","A person with a skill. Based on *-ic* words.","*musician, electrician* (from *music, electric*)"]]},
      "Exceptions exist: in GA, *question* is said /ˈkwɛstʃən/ and *suggestion* /səɡˈdʒɛstʃən/, even though they end in *-tion*. These are the ones to learn separately.",
      {ex:"**GA and SSBE:** nation, vision, mission, musician, question.", label:"Listen (GA and SSBE)", listen:"e5u11-l2-a2"},
      {h:"Soft and hard c and g"},
      "The letters *c* and *g* each have two sounds. **Before *e, i* or *y*, they are usually soft:** *c* is /s/ (*city, cent, cycle*) and *g* is often /dʒ/ (*gem, giant, gym*). **Before other letters, they are hard:** *c* is /k/ (*cat, cot, cup*) and *g* is /ɡ/ (*go, gum, gate*).",
      "The *c* rule is very reliable. The *g* rule has more exceptions. Many common words keep a hard *g* before *e* and *i*, often because they come from Old English or Old Norse: *get, give, gift, begin, together*. Others, such as *girl* and *tiger*, have a hard *g* too. So, for *g* before *e, i, y*, learn the hard-*g* words as a short list.",
      {ex:"**GA and SSBE:** cat, city, go, giant, get, gem.", label:"Listen (GA and SSBE)", listen:"e5u11-l2-a3"},
      {h:"The “i before e” rule"},
      "Many people learn: “*i* before *e*, except after *c*.” It works for the long *ee* sound (GA /i/, SSBE /iː/) after a consonant: *believe, field, achieve* (ie) and *receive, ceiling, deceive* (cei). It fails often: *weird, seize, protein, caffeine*, and words where the sound is different (*science, species, neighbor, weigh, foreign, their*). Use it only for /iː/ and keep a short list of exceptions. Good dictionaries and a spellchecker are still your friends.",
      {h:"Compared with Japanese"},
      "In kana, you can almost always spell a word from its sound. English asks you to remember patterns as well. A practical tip: when you learn a new word, say it, spell it aloud letter by letter, and write it. Notice the pattern and note any exception in the margin. For *-ing* words, say them aloud: *hopping* has a short vowel, *hoping* has a long vowel."
    ]},
    {h:"US and UK spelling sets", body:[
      "The two main standards differ in a small number of systematic ways. This site uses US spelling, and shows UK spelling as a comparison. Most differences fall into a few sets. Knowing the sets helps you to guess hundreds of words.",
      {table:[["Set","US","UK"],["*-or / -our*","*color, neighbor, favorite, honor*","*colour, neighbour, favourite, honour*"],["*-ize / -ise*","*organize, realize, recognize*","*organise, realise, recognise* (or *-ize*, see below)"],["*-er / -re*","*center, theater, meter* (unit)","*centre, theatre, metre*"],["*-l- / -ll-*","*traveling, canceled, modeling*","*travelling, cancelled, modelling*"],["*-ense / -ence*","*defense, license* (noun and verb)","*defence, licence* (noun), *license* (verb)"],["Other single words","*gray, program, check* (bank), *tire, aluminum, judgment*","*grey, programme* (but *program* for computer software), *cheque, tyre, aluminium, judgement*"]]},
      "Some notes make these sets more accurate.",
      {list:[
        "**-ize / -ise.** In the UK, *-ise* is very common, but the Oxford University Press house style uses *-ize* in many words, as the US does. Both are found in British writing. A few words end in *-ise* everywhere: *advertise, exercise, surprise, revise, supervise, compromise.* And *analyze* is *analyse* in UK English.",
        "**-l- / -ll-.** The US doubles *l* only in words stressed on the last syllable (*control → controlling*). The UK doubles it after a single vowel letter whatever the stress (*travelling*). The two sets also differ in *fulfill/fulfil*, *enroll/enrol* and *skillful/skilful* (US first).",
        "**-er / -re.** US English keeps *-re* in words such as *acre* and *mediocre*, and uses *theater* and *theatre* both, especially in names.",
        "**Other places.** Canada writes *colour* and *centre* like the UK, but often uses *-ize* like the US. Australia follows UK spelling in most words. A learner who mixes sets will be understood. Mixing in one document looks careless, so choose one set and keep it."
      ]},
      {h:"Same spelling, different sound"},
      "Some words have one spelling in both countries, but GA and SSBE say them differently. These are good words to check in a dictionary that gives both.",
      {table:[["Word","GA","SSBE"],["*schedule*","/ˈskɛdʒul/","/ˈʃedjuːl/ (also /ˈskedʒuːl/)"],["*tomato*","/təˈmeɪtoʊ/","/təˈmɑːtəʊ/"],["*vase*","/veɪs/ or /veɪz/","/vɑːz/"],["*herb*","/ɝb/ (usually)","/hɜːb/"],["*leisure*","/ˈliʒɚ/","/ˈleʒə/"]]},
      {ex:"**GA and SSBE:** schedule, tomato, vase, herb, leisure.", label:"Listen (GA and SSBE)", listen:"e5u11-l2-a4"},
      "Neither accent is wrong. They are two normal sets of habits. Use the ones that belong with your spelling set: if you write *schedule* in a US text, the GA pronunciation is the matching one."
    ]},
    {h:"Habits that help you spell", body:[
      {list:[
        "**Group words by pattern, not by alphabet.** Learn *-tion* words together, or magic-*e* words together. Your memory likes families.",
        "**Learn word parts.** *Un-, dis-, mis-, -ful, -ness* keep their spelling: *unnecessary* has *nn*, because *un-* + *necessary*. *Disappear* has one *s*, because *dis-* + *appear*.",
        "**Make a personal list.** Write the five words that you misspell most. Check them once a week.",
        "**Look at the whole word, not letter by letter.** Most skilled spellers see a word as a shape. Reading widely helps more than drilling.",
        "**Use the dictionary and spellchecker as tools.** A spellchecker will not catch *their / there*, so read your text once more, or have a friend read it."
      ]},
      "Many native speakers also find spelling hard. It is normal to check a word. The goal is a text where the spelling does not distract your reader, and a quick way to fix it when it does."
    ]}
   ],
   try:[
    M("e5u11-l2-x1","Listen to or say these words. Which pair shows the right spelling of the *-ing* forms of *hope* and *hop*?",1,[
      ["*hopeing* and *hoping*","*Hope* drops its final *e* before *-ing*: *hoping*. *Hopeing* is not a word."],
      ["*hoping* and *hopping*","Right. *Hope* drops the *e*. *Hop* has one vowel and one consonant and is stressed on the last syllable, so the *p* doubles."],
      ["*hopping* and *hopping*","These are two different words, and the spellings must differ to show the difference. *Hoping* has a long vowel."],
      ["*hoping* and *hoping*","They must be spelled differently, because the vowels differ. *Hop* has a short vowel, so the consonant doubles."]
    ],{listen:"e5u11-l2-a1"}),
    {id:"e5u11-l2-x2", type:"sort", q:"Which words double the final consonant before *-ing*?", buckets:["Doubles","Does not double"], items:[
      {t:"stop → stopping", b:0, why:"One vowel + one consonant, and *stop* has one syllable (stressed)."},
      {t:"visit → visiting", b:1, why:"The stress is on the first syllable, not the last."},
      {t:"begin → beginning", b:0, why:"The last syllable is stressed, with one vowel and one consonant."},
      {t:"open → opening", b:1, why:"The last syllable is not stressed."},
      {t:"fix → fixing", b:1, why:"*x* is never doubled."},
      {t:"plan → planning", b:0, why:"One vowel + one consonant, stressed."},
      {t:"help → helping", b:1, why:"The word ends in two consonants, so nothing doubles."}
    ]},
    {id:"e5u11-l2-x3", type:"sort", q:"Which spelling set does each word belong to? Sort by the US spelling used on this site.", buckets:["US spelling","UK spelling"], items:[
      {t:"color", b:0, why:"US *-or*."},
      {t:"centre", b:1, why:"UK *-re*."},
      {t:"traveling", b:0, why:"US single *l*."},
      {t:"defence", b:1, why:"UK *-ence*."},
      {t:"gray", b:0, why:"US *gray*. UK *grey*."},
      {t:"cheque (for money)", b:1, why:"UK. The US writes *check*."},
      {t:"organize", b:0, why:"US *-ize*. It is also used in some British house styles, but it is the US standard."}
    ]},
    {id:"e5u11-l2-x4", type:"match", q:"Match each word to the spelling idea that explains it.", pairs:[
      ["*cute* (not *cut*)","Magic e: the final e makes the vowel long.","*Cut* has a short vowel; *cute* has a long one."],
      ["*stopped*","Doubling: one vowel + one consonant, stressed.","The doubled *p* keeps the vowel short."],
      ["*hoping*","The e is dropped before a vowel ending.","The *e* of *hope* goes before *-ing*."],
      ["*city* /s/ and *cat* /k/","Soft c before e, i, y; hard c elsewhere.","*I* is a front vowel, so *c* is soft."],
      ["*have* (not *hav*)","A common word that does not follow the pattern.","It is an exception, kept from older spelling."]
    ]},
    {id:"e5u11-l2-x5", type:"spot", q:"Tap each word that is **not** US spelling. The writer is using US spelling throughout the paragraph.", ask:"not US spelling", parts:[
      "“The ", {t:"colour", flag:true, why:"US spelling is *color*. *Colour* is the UK form."}, " of the new ", {t:"theater", flag:false, why:"US spelling. UK writes *theatre*."}, " is gray. We ", {t:"organise", flag:true, why:"US spelling is *organize*. *Organise* is the UK form."}, " a ", {t:"program", flag:false, why:"US spelling. UK writes *programme* for events."}, " there every week. Last year, I ", {t:"traveled", flag:false, why:"US spelling, with one *l*."}, " a long way for a ", {t:"defence", flag:true, why:"US spelling is *defense*."}, " lecture.”"
    ]},
    {id:"e5u11-l2-x6", type:"ipa", q:"Transcribe *tomato* in SSBE. Mark the stress.", answer:["təˈmɑːtəʊ"], why:"SSBE /təˈmɑːtəʊ/. The GA form is /təˈmeɪtoʊ/. The spelling is the same, but the vowels differ.", wrongs:[{v:"təˈmeɪtoʊ", why:"This is the GA pronunciation."}], stress:true},
    {id:"e5u11-l2-x7", type:"number", q:"How many of these words double the final consonant before *-ing*? *stop, visit, begin, open, plan, fix, refer, listen*", answer:4, tol:0, unit:"words", why:"*Stop, begin, plan* and *refer* double (*stopping, beginning, planning, referring*). *Visit, open* and *listen* are stressed on the first syllable, and *fix* ends in *x*.", wrongs:[{v:5, tol:0, why:"One of your five does not double. Check the stress: *visit, open* and *listen* are stressed on the first syllable."},{v:3, tol:0, why:"You missed one. *Refer* is stressed on the last syllable (*reFER*), so it doubles: *referring*."}], hint2:"Say each word and listen for the stressed syllable. Is it the last one? Does the word end in one vowel and one consonant?"},
    {id:"e5u11-l2-x8", type:"explain", q:"Hana, who is learning English, writes: “My book says *magic e* makes the vowel say its name. Then why do *have* and *give* have an e but a short vowel?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say that patterns have exceptions, and give a reason.", model:"The magic *e* pattern is a tendency, not a law, and *have* and *give* are common exceptions. Words like these are very old and very frequent, so they kept older spellings. In English, a word does not usually end in *v*, so *have* and *give* get an *e* to avoid that. It does not show a long vowel here. I would teach the pattern and the exceptions together: *cake, bike, home*, but *have, give, love*. Learning them as a short list is easier than looking for a rule.", points:["Says the pattern is a tendency with exceptions", "Names the common exceptions (have, give, love)", "Gives a reason (old, frequent words; no word ends in v)", "Suggests learning the exceptions as a short list"]}
   ],
   apply:{
    intro:"These tasks use a free dictionary that shows both US and UK spelling. Nothing needs an account. Use Merriam-Webster or Cambridge Dictionary.",
    tasks:[
     {t:"Check US and UK spelling", how:[
       "Look up *color, organize, center, traveling, defense, judgment* in the Cambridge Dictionary. Note how it shows the US and UK spelling.",
       "Write each word in the other spelling set.",
       "Check in Merriam-Webster whether *judgement* is also given as a US spelling."
     ], write:"US and UK pairs… The note on judgment…"},
     {t:"Test the doubling rule on ten verbs", how:[
       "Choose ten verbs that you use. Include some with one syllable and some with two or three.",
       "Write the *-ing* form of each, using the rules in this lesson.",
       "Check each form in a dictionary. Mark any that you got wrong and note why."
     ], write:"My ten verbs and their -ing forms… The ones I got wrong and why…"}
    ],
    proof:"A table of six words in US and UK spelling, and ten -ing forms with the rule you used for each."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, section “What is morphology?”", note:"Background reading. Many spelling rules work when a suffix is added to a word, which is a morphology topic."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u11-l3", title:"Commas and other marks", minutes:55,
   hook:{q:"Which sentence says that the writer has more than one sister?", options:["My sister, who lives in Nara, is a nurse.","My sister who lives in Nara is a nurse.","Both sentences say the same thing.","Neither sentence says anything about the number of sisters."], answer:1, reveal:"**My sister who lives in Nara is a nurse.** Without commas, the clause *who lives in Nara* identifies which sister, so there are others. With commas, the clause only adds extra information, and it suggests that there is one sister. Two commas can change the meaning."},
   goals:[
     "Use commas for lists, introductory phrases, joined clauses and extra information, and know when a comma changes meaning",
     "Treat the serial comma as a style choice (Chicago uses it, AP generally does not) and stay consistent",
     "Use semicolons, colons, hyphens and dashes for their main jobs",
     "Place quotation marks and other punctuation in US style, and compare UK style"
   ],
   learn:[
    {h:"What commas do", body:[
      {lead:"A comma is a small mark with five main jobs. It separates, it joins, and it sets apart."},
      "Many comma questions have one answer: grammar. A comma follows the structure of the sentence. Unlike a breath mark, it is not placed where you pause to take a breath. People often say “put a comma where you pause”, but pauses and commas do not always match. Use grammar first.",
      {table:[["Job","Example"],["Separate items in a list","*We bought tea, rice, and bread.*"],["After an introductory phrase or clause","*After the meeting, we went home.* / *If it rains, we will stay.*"],["Before a conjunction that joins two full clauses","*I called Mei, but she did not answer.*"],["Around extra information","*My brother, who lives in Sendai, is a pilot.*"],["Between adjectives that equally describe a noun","*a long, difficult climb* (but not *a small red car*)"]]},
      "Avoid a comma between a subject and its verb (*The students in my class, are tired*) and between a verb and its object. A comma alone cannot join two full sentences; that is a [[hew-comma-splice|comma splice]] (Unit 10, Lesson 1). Use a period, a semicolon, or a comma with *and*, *but* or *so*.",
      {h:"Commas that change meaning"},
      "Look at *non-defining* and *defining* clauses from Unit 10. A comma-marked clause adds extra information that is not needed to identify the noun. A clause without commas identifies which noun.",
      {table:[["Sentence","Meaning"],["*Students who study hard pass the exam.*","Only the students who study hard pass. Others may not."],["*Students, who study hard, pass the exam.*","All students study hard, and all pass."],["*My sister who lives in Nara is a nurse.*","I have more than one sister. The one in Nara is a nurse."],["*My sister, who lives in Nara, is a nurse.*","I have one sister, and she lives in Nara."]]},
      {ex:"**GA and SSBE:** My sister who lives in Nara is a nurse. My sister, who lives in Nara, is a nurse.", label:"Listen (GA and SSBE)", listen:"e5u11-l3-a1"},
      "In speech, the voice marks the difference with pauses and intonation. In writing, only the commas do it.",
      {tip:"Test a clause with commas: if you can remove it and the sentence still makes sense and still points to the same person or thing, the commas are right. If removing it changes who or what you mean, do not use commas."},
      {h:"Compared with Japanese"},
      "The Japanese comma 、 follows few strict rules, and writers use it for readability. In English, a comma follows the grammar. A common error is a comma after a topic, where Japanese writers would use 、 after *wa*: *Mei, likes tea.* English needs *Mei likes tea.* with no comma."
    ]},
    {h:"The serial comma: a style choice", body:[
      "A [[hew-serial-comma|serial comma]] (also called the Oxford comma) is the comma before *and* or *or* in a list of three or more items: *tea, rice, **and** bread*. Without it: *tea, rice and bread*. Both are correct, in different styles. This is a style choice. It is not a rule of English.",
      {table:[["Style","Serial comma?","Example"],["Chicago Manual of Style","Yes","*apples, oranges, and bananas*"],["APA (the psychology style guide)","Yes","*apples, oranges, and bananas*"],["AP Stylebook (news writing)","Usually not, except for clarity","*apples, oranges and bananas*"],["UK publishers","Varies: many omit it, and Oxford University Press uses it","Either form"]]},
      "The reasons are practical. A serial comma makes a list clearer when an item has *and* inside it: *I had bread, ham and cheese, and tea* (the serial comma shows that *ham and cheese* is one item). A style without it saves a character and looks lighter. In some lists, each style creates an ambiguity.",
      {ex:"We thank our parents, Sam and Dr. Rivera.   (Without the serial comma, this could mean that the parents are Sam and Dr. Rivera.)\nWe thank our parents, Sam, and Dr. Rivera.   (With it, there are three groups: the parents, Sam and Dr. Rivera.)", label:"Worked example"},
      "A real case shows the same problem. In *O’Connor v. Oakhurst Dairy* (2017), a US federal appeals court (the First Circuit) looked at a Maine law on overtime pay. The law listed jobs that get no overtime, and the list had no serial comma before its last item. The court said that the law was unclear, and the missing comma was part of the problem. It decided for the delivery drivers, and the dairy later agreed to pay them $5 million. For a writer, the lesson is simple: one comma can change what a list means.",
      {key:"Choose a style, such as the serial comma or no serial comma, and use it throughout a document. Change only when a particular sentence would be unclear."}
    ]},
    {h:"Semicolons, colons, hyphens and dashes", body:[
      {h:"The semicolon ;"},
      "A [[hew-semicolon|semicolon]] has two jobs. First, it joins two full sentences that are closely related: *I like tea; my brother prefers coffee.* This is stronger than a comma and softer than a period. Second, it separates list items that already contain commas: *We visited Nara, Japan; Busan, Korea; and Taipei, Taiwan.*",
      "Do not use a semicolon before a list or after a greeting. Do not join a full sentence to a fragment.",
      {h:"The colon :"},
      "A colon introduces something that the first part prepares: a list, an explanation, or a quotation. The part before the colon should be a full clause. *You need three things: a pen, paper, and time.* Style guides differ on whether to capitalize after a colon. AP and APA capitalize the first word when a full sentence follows. Chicago capitalizes it only when two or more full sentences, or a quotation, follow.",
      {h:"Hyphens and dashes"},
      "A hyphen (-) joins words and parts of words. It is short and has no spaces. In a compound adjective before a noun, a hyphen shows which words belong together: *a well-known author* but *The author is well known*; *a small-business owner* (an owner of a small business) versus *a small business owner* (a small owner of a business). Numbers 21 to 99 are hyphenated when written in words: *twenty-one*.",
      "A dash (—) is longer. An **em dash** marks a sudden break, and a pair of em dashes sets apart an extra idea, like a pair of commas or brackets. US style usually writes the em dash with no spaces. Many UK publishers use a spaced en dash ( – ) for the same job. Use dashes sparingly, because a text full of them reads in a breathless way. An **en dash** (–) is for ranges: *pages 10–20*, *2020–2026*.",
      {h:"Quotation marks"},
      "In US style, **double quotation marks** are the default for speech and quoted words. A quotation inside a quotation takes single marks: *She said, “Read ‘Spring’ first.”*",
      {table:[["Rule","US style","UK style (common)"],["First marks","Double: *“Hello,” she said.*","Single: *‘Hello,’ she said.*"],["Period and comma","Always inside the marks: *“Come in.”*","Inside only if they belong to the quotation"],["Question mark, exclamation mark","Inside if they belong to the quotation, outside if they belong to the whole sentence","Same"],["Colon and semicolon","Outside the marks","Outside the marks"]]},
      "The US rule for periods and commas is a convention, not logic. It is often said to have begun as a printing habit, and it is the same in most American style guides. In UK style, many publishers place the period inside only when it is part of the quoted words. So when the quotation is a full sentence of its own (*She said, ‘I’m tired.’*), UK style also puts the period inside. Some British publishers use double marks, so UK practice varies by publisher.",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="20" text-anchor="middle">Where does the period go?</text><rect class="d-lup" x="14" y="32" width="312" height="94" rx="8" stroke-width="2"/><text x="28" y="56">US style</text><text x="28" y="82">He called it “a small problem.”</text><text class="s" x="28" y="106">Period inside the double marks, always</text><rect class="d-rose" x="14" y="136" width="312" height="94" rx="8" stroke-width="2"/><text x="28" y="160">UK style (common)</text><text x="28" y="186">He called it ‘a small problem’.</text><text class="s" x="28" y="210">Period outside: it is not part of the quotation</text></svg>', alt:"Two panels compare quotation style. US style: He called it “a small problem.” with the period inside the double marks. UK style: He called it ‘a small problem’. with the period outside the single marks, because it is not part of the quoted words.", cap:"US punctuation inside, UK often outside. Practice varies; follow your reader’s style."},
      {tip:"Check your target. A US journal, a UK newspaper and a company website may each have a house style. Ask for it, or copy the examples in the instructions."},
      {warn:"Do not mix systems in one document. If you start with double marks and the period inside, keep them for the whole text."}
    ]}
   ],
   try:[
    M("e5u11-l3-x1","Which sentence says that all the students in the class passed?",1,[
      ["*Students who study hard pass the exam.*","Without commas, the clause picks out some students: those who study hard."],
      ["*Students, who study hard, pass the exam.*","Right. With commas, *who study hard* is extra information about all the students."],
      ["*Students who study, hard pass the exam.*","This comma splits the verb phrase and is wrong."],
      ["*Students who study hard, pass the exam.*","A comma between the subject and the verb is wrong."]
    ]),
    {id:"e5u11-l3-x2", type:"sort", q:"Does the sentence need the comma, or is it wrong with one? Sort the sentences.", buckets:["Comma is correct","Comma is wrong"], items:[
      {t:"After the lesson, we had tea.", b:0, why:"A comma follows an introductory phrase."},
      {t:"The teacher, is waiting for us.", b:1, why:"A comma between the subject and its verb is wrong."},
      {t:"I like tea, but my brother likes coffee.", b:0, why:"A comma before *but* joins two full clauses."},
      {t:"She bought a small, red car.", b:1, why:"*Small* and *red* are not equal adjectives (size and color are in a fixed order), so no comma."},
      {t:"It was a long, difficult climb.", b:0, why:"Both adjectives describe the climb equally. You can say *difficult, long* or *long and difficult*."},
      {t:"He said that, he was late.", b:1, why:"A comma after *that* in reported speech is wrong."}
    ]},
    {id:"e5u11-l3-x3", type:"spot", q:"Tap each comma that does **not** belong in this paragraph. Assume US style with the serial comma.", ask:"does not belong", parts:[
      "“In April", {t:",", flag:false, why:"Right. A comma follows an introductory phrase."}, " we visited Sendai", {t:",", flag:false, why:"Right. A comma before *and* when two full clauses join: *we visited Sendai, and we had…*"}, " and we had fish", {t:",", flag:false, why:"Right. A comma between list items."}, " rice", {t:",", flag:false, why:"Right. This is the serial comma, used in this style."}, " and tea. The hotel", {t:",", flag:true, why:"A comma between a subject and its verb is wrong."}, " was small", {t:",", flag:false, why:"Right. A comma before *but* between two clauses."}, " but it was clean. We took a bus", {t:",", flag:true, why:"No comma is needed here. *To the station* is part of the verb phrase."}, " to the station.”"
    ]},
    {id:"e5u11-l3-x4", type:"match", q:"Match each mark to its main job.", pairs:[
      ["semicolon","Joins two closely related full sentences.","*I like tea; my brother prefers coffee.*"],
      ["colon","Introduces a list or an explanation after a full clause.","*You need three things: a pen, paper, and time.*"],
      ["hyphen","Joins words in a compound adjective before a noun.","*a well-known author*"],
      ["en dash","Shows a range.","*pages 10–20*"],
      ["em dash","Sets off an extra idea or a sudden break.","*My answer—as you know—is no.*"]
    ]},
    {id:"e5u11-l3-x5", type:"number", q:"How many commas does this sentence need in Chicago style (with the serial comma)? “We bought tea coffee milk and sugar.”", answer:3, tol:0, unit:"commas", why:"Four items need three commas, because the serial comma goes before *and*: *tea, coffee, milk, and sugar*. In AP style the answer would be 2.", wrongs:[{v:2, tol:0, why:"That is the answer for a style without the serial comma, such as AP. The question asks for Chicago style."},{v:4, tol:0, why:"There are four items, so there are three gaps between them, and each gap gets one comma."}], hint2:"Count the gaps between the four items."},
    M("e5u11-l3-x6","Which sentence is correct in US punctuation?",0,[
      ["*He called it “a small problem.”*","Right. In US style the period goes inside the double marks, even though it is not part of the quoted words."],
      ["*He called it ‘a small problem’.*","This is a common UK pattern: single marks, and the period outside because it is not part of the quotation."],
      ["*He called it “a small problem”.*","Double marks are US style, but US style puts the period inside the marks."],
      ["*He called it ‘a small problem.’*","US style uses double marks first. Single marks are for a quotation inside a quotation."]
    ]),
    {id:"e5u11-l3-x7", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, writes in a practice email: “My teacher says the period goes inside the quotation marks. But the period is not part of the quotation, so why?” Write the answer you would give.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say that this is a convention, and give the UK comparison.", model:"Your logic is good, and some style guides follow it. But in US style, this is a convention: the period and the comma go inside the closing quotation marks, even when they are not part of the quotation. British style often uses logic: the period goes inside only if it belongs to the quoted sentence. For this reason, both *He called it “a small problem.”* (US) and *He called it ‘a small problem’.* (UK) are correct in their own systems. Choose the one that matches your reader, and be consistent.", points:["Agrees that the logic makes sense", "Says that the US rule is a convention", "Compares the UK practice", "Advises choosing the reader’s style and being consistent"]},
    {id:"e5u11-l3-x8", type:"explain", q:"A colleague writes in an email: “I will send the report tomorrow, please check it.” A new tutor asks you what is wrong, and how to explain it kindly. Write your explanation.", size:"3–5 sentences", prompt:"I would explain: …", hint:"Name the error, give two ways to fix it, and say why it matters.", model:"This is a comma splice: two full sentences are joined by only a comma. Many people do it in emails, so it is a very common habit and easy to fix. You can use a period (*…tomorrow. Please check it.*), a semicolon, or a comma with *and* (*…tomorrow, and please check it*). The first fix is the simplest. It matters a little more in formal writing, where readers may notice it.", points:["Names the error (comma splice)", "Says it is common and not serious", "Gives at least two fixes", "Notes that it matters more in formal writing"]}
   ],
   apply:{
    intro:"These tasks use short pieces of your own writing and a free style guide. Nothing needs an account.",
    tasks:[
     {t:"Check commas in your own writing", how:[
       "Choose one paragraph that you wrote in English, with about 100 words.",
       "Mark every comma. For each one, write the job from the table in this lesson.",
       "Circle any comma that has no job and remove it. Check for comma splices."
     ], write:"The paragraph with commas marked… The commas I removed or added…"},
     {t:"Compare two styles of quotation", how:[
       "Find a short news article from a US source and one from a UK source.",
       "Look at how each uses quotation marks and where the period goes.",
       "Write two sentences: one in US style and one in UK style, using the same quotation."
     ], write:"What I found in each article… My two sentences…"}
    ],
    proof:"A paragraph with every comma labeled, and the same quotation written in US and in UK style."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Structure within the sentence: Phrases, heads, and selection”", note:"Commas follow sentence structure. This section shows how phrases and clauses are built."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u11-l4", title:"Apostrophes and capitals", minutes:55,
   hook:{q:"Which sentence is correct?", options:["The dog wagged it’s tail.","The dog wagged its tail.","The dog wagged its’ tail.","The dog wagged it tail."], answer:1, reveal:"**The dog wagged its tail.** *Its* with no apostrophe is the possessive, like *his* and *her*. *It’s* means *it is* or *it has*. The two look almost the same, and even experienced writers mix them up, so this lesson gives you a quick test."},
   goals:[
     "Place the apostrophe in singular and plural possessives (*the student’s, the students’, the children’s*)",
     "Tell *its/it’s*, *whose/who’s*, *your/you’re* and *their/there/they’re* apart, and use contractions in the right register",
     "Explain the “greengrocer’s apostrophe” kindly, and know when plurals do take an apostrophe",
     "Use capital letters for names, days, languages and titles, and compare US title case, sentence case and date order"
   ],
   learn:[
    {h:"Two jobs for the apostrophe", body:[
      {lead:"The apostrophe has only two main jobs. It shows that letters are missing, and it shows possession."},
      "An [[hew-apostrophe|apostrophe]] (’) is not a plural mark. Almost every apostrophe error comes from forgetting this. Here are the two jobs, side by side.",
      {table:[["Job","Examples","What to check"],["Missing letters (contraction)","*it’s* (it is), *don’t* (do not), *I’ve* (I have), *they’re* (they are)","Can you replace it with the full words?"],["Possession","*the student’s book, Mei’s idea, the children’s toys*","Does the noun own or have something?"]]},
      "A contraction is a short form of two words. A [[hew-contraction|contraction]] is common in speech and in informal and neutral writing. Many formal academic styles prefer the full forms, but this is a style choice, so follow your reader’s guide. *Won’t* (will not) and *can’t* (cannot) look irregular, but they are standard.",
      {h:"Possessives: singular, plural, irregular"},
      "The [[hew-possessive|possessive]] form of a noun shows who owns or has something. The rule has two steps. First, write the noun in the form that you mean (singular or plural). Second, add *’s*. If the plural already ends in *-s*, add only the apostrophe.",
      {table:[["Noun","Singular possessive","Plural possessive"],["*student*","*the student’s book* (one student)","*the students’ books* (two or more)"],["*child*","*the child’s toy*","*the children’s toys* (the plural is irregular, so add *’s*)"],["*woman*","*the woman’s car*","*the women’s cars*"],["*boss*","*the boss’s office*","*the bosses’ offices*"]]},
      {ex:"**GA:** The student’s book. The students’ book.   (They sound the same.)", label:"Listen (GA)", listen:"e5u11-l4-a1"},
      "These two sound the same. So the apostrophe is a writing signal only. Ask yourself: how many owners are there? Then write the noun and add the apostrophe after it.",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="20" text-anchor="middle">Where does the apostrophe go?</text><rect class="d-sage" x="14" y="32" width="312" height="58" rx="8" stroke-width="2"/><text x="28" y="56">one student → the student’s book</text><text class="s" x="28" y="78">Singular noun, then ’s</text><rect class="d-gold" x="14" y="100" width="312" height="58" rx="8" stroke-width="2"/><text x="28" y="124">two students → the students’ book</text><text class="s" x="28" y="146">Plural ending in -s, then ’ only</text><rect class="d-lup" x="14" y="168" width="312" height="58" rx="8" stroke-width="2"/><text x="28" y="192">children → the children’s toys</text><text class="s" x="28" y="214">Plural without -s, then ’s</text></svg>', alt:"Three boxes. One student: the student’s book. Two students: the students’ book. Children: the children’s toys.", cap:"First decide the noun and its number. Then add the apostrophe."},
      {h:"Some details that depend on style"},
      {list:[
        "**Names ending in -s.** Chicago style writes *James’s book*. AP style writes *James’ book*. Both are accepted. Choose one and keep it. For classical names, many writers use *Socrates’ ideas*.",
        "**Shared and separate possession.** One thing owned together: *Tom and Mei’s house*. Separate things: *Tom’s and Mei’s houses*.",
        "**Family names.** The plural has no apostrophe: *the Okafors*, *the Smiths*. Possessive: *the Okafors’ house*.",
        "**No apostrophe in possessive pronouns.** *Hers, ours, yours, theirs* and *its* never take one."
      ]}
    ]},
    {h:"Look-alike words", body:[
      "Some words sound the same (they are [[hew-homophone|homophones]]) but are spelled differently. The apostrophe versions are contractions. Use the “full words” test: replace the word with the full form. If the sentence still makes sense, use the apostrophe.",
      {table:[["Possessive (no apostrophe)","Contraction (apostrophe)","Test"],["*its* (the dog wagged its tail)","*it’s* (it is / it has)","*It is raining.* works, so *It’s raining.*"],["*whose* (Whose bag is this?)","*who’s* (who is / who has)","*Who is there?* works, so *Who’s there?*"],["*your* (your book)","*you’re* (you are)","*You are late.* works, so *You’re late.*"],["*their* (their house)","*they’re* (they are)","*There* is a place: *over there*."]]},
      {ex:"**GA:** its. it’s. their. there. they’re. your. you’re.", label:"Listen (GA)", listen:"e5u11-l4-a2"},
      "The words *its, hers, ours* and *theirs* look like they should take an apostrophe, because nouns do (*the dog’s tail*). Pronouns do not. There is one more trap: *it’s* can also mean *it has* (*It’s been a long day*). The full-words test still works.",
      {h:"The greengrocer’s apostrophe"},
      "Signs such as *Apple’s 50p* or *Tomato’s* have given this error its name in British English: the *greengrocer’s apostrophe*. It is an apostrophe in a plain plural. It is also very common in signs, menus and social media, even from native speakers. It is no sign of weak language skills. It happens because the plural *-s* and the possessive *-’s* sound the same, and because some foreign words and abbreviations look odd with a bare *-s* (*CDs, PCs*).",
      "When you point it out, be kind and short: “A plural only needs *s*. The apostrophe is for owners and missing letters.”",
      {h:"When plurals do take an apostrophe"},
      "There are a few accepted cases, and style guides do not all agree. Lowercase single letters: *Mind your p’s and q’s.* Some guides also use *A’s and B’s* for grades. But numbers and abbreviations usually do not: *the 1990s, CDs, two PhDs* (Chicago style). If you are unsure, check your guide, or rephrase.",
      {ex:"Right: *We have two kinds of apples.*   Wrong: *We have two kind’s of apple’s.*", label:"Worked example"}
    ]},
    {h:"Capital letters", body:[
      "In English, a capital letter marks the start of a sentence, the pronoun *I*, and proper names. A [[hew-proper-noun|proper noun]] names a particular person, place or thing. Japanese has no capital letters, so this habit takes effort.",
      {table:[["Capitalize","Examples","Do not capitalize"],["Names of people, places, organizations","*Amara, Nara, Kobe University*","common nouns: *the city, the university*"],["Days, months, holidays","*Monday, March, New Year’s Day*","seasons: *spring, autumn* (US: also *fall*)"],["Languages, nationalities, adjectives made from proper names","*English, Japanese, Filipino, Victorian*","school subjects (except languages): *biology, math*"],["A title before a name","*Professor Lee, Dr. Silva*","a title after a name or alone: *Ana Silva, a doctor*; *the professor*"],["Compass directions as regions or names","*the South, Southeast Asia*","directions: *go north*"]]},
      "Days, months and languages are lowercase in Spanish and French but capitalized in English, and this is a frequent error for speakers of those languages. Also, job titles are lowercase in general use: *She is a professor.*, but capitalized before a name: *Professor Lee*.",
      {h:"Title case and sentence case"},
      "A [[hew-title-case|title case]] heading capitalizes the main words. [[hew-sentence-case|Sentence case]] capitalizes only the first word and proper nouns. Both are styles.",
      {table:[["Style","Example","Where you see it"],["Title case (Chicago)","*Walking through the Rain: A Study of City Life*","Book titles; many US headlines"],["Title case (AP)","*Walking Through the Rain: A Study of City Life*","Titles of books, films and songs in AP-style news stories"],["Sentence case","*Walking through the rain: A study of city life*","AP-style news headlines; APA article titles in reference lists; many websites; this site’s lesson titles"]]},
      "The title-case rules differ. In all of them, capitalize the first and last word and major words such as nouns, verbs and adjectives. Chicago style lowercases prepositions whatever their length, and AP capitalizes prepositions and conjunctions of four or more letters. So *through* is lowercase in Chicago but capitalized in AP. If your reader gives you a style, use it, and in all other cases, choose one and be consistent.",
      "Do not write whole sentences in ALL CAPITALS. Readers often take them as shouting, and capitals are slower to read.",
      {h:"Dates, titles and abbreviations"},
      "US and UK writers also differ in date order and some abbreviations. In US style the date is month/day/year: *11/23/2026* means 23 November 2026. In UK style it is day/month/year: *23/11/2026*. The date *03/04/2026* is therefore 4 March in the US and 3 April in the UK. For international readers, write the month in words (*November 23, 2026* or *23 November 2026*).",
      "US style puts a period after most abbreviations of titles (*Mr., Mrs., Dr.*). UK style often leaves it out (*Mr, Dr*). Both are correct in their own systems."
    ]}
   ],
   try:[
    M("e5u11-l4-x1","Which sentence is correct?",2,[
      ["*The cat licked it’s paws.*","*It’s* means *it is*. The sentence needs the possessive *its*."],
      ["*The cat licked its’ paws.*","*Its’* is never correct."],
      ["*The cat licked its paws.*","Right. *Its* is a possessive pronoun, like *his* and *her*, and it has no apostrophe."],
      ["*The cat licked it paws.*","The possessive form of *it* is *its*."]
    ]),
    {id:"e5u11-l4-x2", type:"sort", q:"Does the phrase need an apostrophe, or not?", buckets:["Needs an apostrophe","No apostrophe"], items:[
      {t:"it’s raining (= it is raining)", b:0, why:"A contraction of *it is*: *it’s*."},
      {t:"the dog wagged its tail", b:1, why:"*Its* is a possessive pronoun."},
      {t:"the children’s toys", b:0, why:"A plural without *-s* takes *’s* for possession."},
      {t:"hers, ours, theirs", b:1, why:"Possessive pronouns never take an apostrophe."},
      {t:"the 1990s", b:1, why:"A plural of a number. Chicago style uses no apostrophe."},
      {t:"the Okafors’ house (the house of the Okafor family)", b:0, why:"A plural possessive. The family name has no apostrophe by itself (*the Okafors*), then one is added for possession."}
    ]},
    {id:"e5u11-l4-x3", type:"spot", q:"Kaito, a first-year undergraduate in information engineering, writes a note for the shared fridge in his house. Tap each place that needs a **change** in standard English.", ask:"needs a change", parts:[
      "“Please ", {t:"dont", flag:true, why:"A contraction needs an apostrophe: *don’t*."}, " take other ", {t:"peoples", flag:true, why:"A plural without *-s* takes *’s* for possession: *people’s*."}, " food. The blue box is ", {t:"mine", flag:false, why:"Correct. Possessive pronouns have no apostrophe."}, ". ", {t:"Its", flag:true, why:"This means *It is*, so it needs an apostrophe: *It’s*."}, " my lunch for ", {t:"Monday", flag:false, why:"Correct. Days of the week have a capital letter."}, ". Thank you ", {t:"all", flag:false, why:"Correct. No change is needed."}, "!”"
    ]},
    {id:"e5u11-l4-x4", type:"match", q:"Match each phrase to what it tells you.", pairs:[
      ["the student’s book","One student owns the book.","The apostrophe comes before the *s*."],
      ["the students’ book","Two or more students own it.","The apostrophe comes after the plural *-s*."],
      ["the children’s toys","The plural has no *-s*, so add *’s*.","*Children* is an irregular plural."],
      ["Tom and Mei’s house","Tom and Mei own one house together.","Only the last name takes the *’s*."],
      ["Tom’s and Mei’s houses","Each owns a different house.","Each name takes its own *’s*."]
    ]},
    {id:"e5u11-l4-x5", type:"number", q:"How many words need a capital letter in this sentence? “on friday, amara and tomás spoke spanish with dr. lee in nara.”", answer:8, tol:0, unit:"capitals", why:"*On* (sentence start), *Friday*, *Amara*, *Tomás*, *Spanish*, *Dr.*, *Lee* and *Nara* are eight.", wrongs:[{v:7, tol:0, why:"You missed one. The first word of the sentence also needs a capital."},{v:6, tol:0, why:"You missed two. Check the language, the title *Dr.* and the first word."}], hint2:"Check the first word, the day, the people’s names, the language, the title, and the place."},
    M("e5u11-l4-x6","A US teacher and a UK teacher both write the date *03/04/2026*. What can a reader conclude?",1,[
      ["Both mean 3 April 2026.","This is the UK reading. In the US the first number is the month."],
      ["It could mean 4 March (US) or 3 April (UK), so write the month in words for an international reader.","Right. The numeric order differs, so the safe choice is a word for the month."],
      ["It must be a mistake.","Both orders are normal in their own systems."],
      ["It means 2026 March 4.","This is the year-first order of ISO dates, which is written *2026-03-04*."]
    ]),
    M("e5u11-l4-x7","Which title is in sentence case?",3,[
      ["*WALKING THROUGH THE RAIN*","All capitals is not sentence case."],
      ["*Walking Through the Rain* (main words capitalized)","This is title case (AP style), with the major words capitalized."],
      ["*walking through the rain* (no capitals at all)","This is all lowercase."],
      ["*Walking through the rain* (only the first word)","Right. Only the first word and proper nouns have capital letters."]
    ]),
    {id:"e5u11-l4-x8", type:"explain", q:"A learner sees a market sign that says *Fresh tomato’s, 3 for $1* and asks: “Why do people write *tomato’s*? Is it correct?” Write a short, kind explanation.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what the apostrophe is for, and why the mistake is common.", model:"In standard English, a plural needs only *s*, so the sign should say *tomatoes*. The apostrophe is for missing letters (*it’s*) and for owners (*the farmer’s tomatoes*). This mistake is common in signs and menus, even among native speakers, because the plural *s* and the possessive *’s* sound the same. It is called the greengrocer’s apostrophe. It is not a serious problem, but a careful writer would write *Fresh tomatoes, 3 for $1*.", points:["Says a plain plural needs only s", "Names the two jobs of the apostrophe", "Says the error is common and gives a reason", "Stays kind and short"]}
   ],
   apply:{
    intro:"These tasks use your own writing and a free dictionary or style guide. Nothing needs an account.",
    tasks:[
     {t:"Find and fix the apostrophes in your own writing", how:[
       "Choose an email or a paragraph that you wrote in English.",
       "Underline every apostrophe and every *s* ending. For each apostrophe, decide: contraction or possession?",
       "Use the full-words test for *its, whose, your, their*, and fix any that are wrong."
     ], write:"My text with apostrophes marked… The corrections…"},
     {t:"Check a house style for titles", how:[
       "Choose a short title, such as *how to write a good email*.",
       "Write it in Chicago title case, in AP title case, and in sentence case.",
       "Look up the capitalization rules for prepositions in one guide (for example, the Chicago Manual of Style site or the APA Style site) and note the rule."
     ], write:"My three forms of the title… The rule I found…"}
    ],
    proof:"A short text with every apostrophe labeled, and one title written in three styles."
   },
   read:[
    {book:"eling", where:"Background reading: the Morphology chapter, section “What is morphology?”", note:"The possessive ’s and the plural -s are small word parts (morphemes), a good way to see why they sound the same."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u11-l5", title:"Spoken and written grammar", minutes:55,
   hook:{q:"A friend says: “That new café on the corner, have you been there?” What is the best description of this sentence?", options:["It is a grammar mistake that a careful speaker avoids.","It is a normal spoken pattern, with the topic named first and then talked about.","It is a rare pattern that only learners use.","It is correct only in writing."], answer:1, reveal:"**It is a normal spoken pattern.** The speaker names the topic first (*That new café on the corner*), then asks about it with a pronoun (*there*). Corpus studies of everyday conversation describe this as a regular feature of speech. It is not wrong. It belongs to speaking, and in writing you would usually say it in one clause."},
   goals:[
     "Describe how speech and writing differ and why (planning time, shared context, voice and gesture)",
     "Recognize spoken features: fragments, ellipsis, fillers, discourse markers, *like*, vague language, and heads and tails",
     "Say why both speech and writing are real English, and avoid calling spoken grammar “bad”",
     "Write for a particular reader by choosing the right register, and move a spoken message into written form"
   ],
   learn:[
    {h:"Two kinds of English, one language", body:[
      {lead:"People speak and write English in very different ways. Neither way is the “real” one. Each fits its job."},
      "Speech is made on the spot. The speaker has no time to edit, the listener is usually present, and the two share a place and a topic. A speaker also has voice, face and hands to help. Writing is made slowly. The writer can plan and edit, but the reader is often far away and has only the page. These conditions shape the grammar.",
      {table:[["","Speech (conversation)","Writing (for example, an essay)"],["Planning","None. It happens in real time.","Time to plan, edit and rewrite."],["Shared context","Often high: *that, here, you know*.","Low: the writer must explain."],["Extra signals","Voice, pauses, face, gestures.","Punctuation and layout."],["Typical sentence","Short; often added piece by piece.","Longer; built with careful structure."]]},
      "Corpus research, such as the work of Douglas Biber and colleagues, shows a pattern. Conversation tends to use more short clauses, pronouns and everyday verbs. Academic writing tends to pack information into longer noun phrases. These are tendencies of whole groups of texts, and a single speaker or writer may differ.",
      {key:"Speech and writing follow different norms. A feature that is natural in conversation may look odd on the page, and the reverse is also true. Neither is “better”."},
      "This also means that a learner who “speaks like a book” can sound stiff, and a learner who “writes like a conversation” can sound too casual. Good English users switch."
    ]},
    {h:"Features of spoken grammar", body:[
      "Many learners met English mostly in written form, such as textbooks, so spoken grammar can surprise them. Here are the main features. All are normal in native and fluent speech.",
      {table:[["Feature","Example","What it does"],["Fragment","*Coffee?* *Sounds good.* *Not yet.*","Leaves out words that the listener can supply."],["Ellipsis","*Want some?* *Seen it.*","Drops the subject and an auxiliary at the start."],["Fillers","*um, uh, er*","Gives the speaker thinking time."],["Discourse markers","*well, so, anyway, I mean, you know*","Organize the conversation and show attitude."],["Vague language","*and stuff, or something, kind of, sort of, a bit, and things like that*","Gives a general idea, softens, or shows shared knowledge."],["Repetition and restart","*It’s a, it’s a really good one.*","Shows planning in real time."],["*like*","*It was, like, ten people.* *I was like, no way.*","Marks approximation, a pause, or a quotation of thoughts."]]},
      "A [[hew-discourse-marker|discourse marker]] such as *well* or *anyway* does not add to the main meaning. It manages the talk: *well* can show a slight disagreement, and *anyway* can return to a topic. [[hew-vague-language|Vague language]] is very common and has real jobs. If you say *We bought milk and eggs and things like that*, you tell the listener that the list is not complete and that they will understand the general idea. In a careful essay, you would usually be exact.",
      "*Like* needs a note. Linguists describe several uses, and they are well recorded in conversation. Some people dislike them, but the dislike is a style opinion. It is not a grammar rule. In formal speech and in writing, many speakers use *like* less, which shows how a speaker chooses a register.",
      {h:"Heads and tails"},
      "Two spoken patterns have interesting names. The linguists Ronald Carter and Michael McCarthy described them, using corpus data from everyday conversation. Their *Cambridge Grammar of English* (2006) calls them **headers** and **tails**, and many teachers say *heads and tails*. A **head** (or header) is a noun phrase at the start that sets the topic before the main clause; the clause then uses a pronoun for it. A **tail** is a noun phrase at the end that adds or clarifies what a pronoun has already referred to.",
      {table:[["Pattern","Example","Written version"],["Head","*That new café on the corner, have you been there?*","*Have you been to the new café on the corner?*"],["Head","*My brother, he lives in Sendai.*","*My brother lives in Sendai.*"],["Tail","*It was really good, that film.*","*That film was really good.*"],["Tail","*He’s a nice guy, your brother.*","*Your brother is a nice guy.*"]]},
      {ex:"**GA and SSBE:** That new café on the corner, have you been there?", label:"Listen: a head (GA and SSBE)", listen:"e5u11-l5-a1"},
      {ex:"**GA and SSBE:** It was really good, that film.", label:"Listen: a tail (GA and SSBE)", listen:"e5u11-l5-a2"},
      "Heads help the listener to get ready for the topic. Tails check or clarify, often with a friendly tone. Both are common in informal conversation. Do not overstate the claim: they are frequent in the speech of many people, but they are not found in every conversation, and the exact numbers depend on the corpus. They are tools for describing talk. They are not a list of errors, and they do not belong in a formal essay.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Head and tail in speech</text><rect class="d-lup" x="14" y="34" width="312" height="44" rx="8" stroke-width="2"/><text x="28" y="54">HEAD: My brother,</text><text x="28" y="72" class="s">names the topic first</text><rect class="d-panel" x="14" y="86" width="312" height="44" rx="8" stroke-width="2"/><text x="28" y="106">MAIN CLAUSE: he lives in Sendai.</text><text x="28" y="124" class="s">a pronoun takes the head’s place</text><rect class="d-panel" x="14" y="158" width="312" height="44" rx="8" stroke-width="2"/><text x="28" y="178">MAIN CLAUSE: It was really good,</text><text x="28" y="196" class="s">a pronoun comes first</text><rect class="d-gold" x="14" y="210" width="312" height="44" rx="8" stroke-width="2"/><text x="28" y="230">TAIL: that film.</text><text x="28" y="248" class="s">names the topic after the clause</text></svg>', alt:"Four boxes. First example: head My brother, then main clause he lives in Sendai. Second example: main clause It was really good, then tail that film.", cap:"A head comes before the main clause. A tail comes after it."},
      {h:"Compared with Japanese"},
      "Japanese speech does something close to a tail. In *Oishii yo, kore.* (“It’s tasty, this.”), the speaker says the comment first and the thing after. Japanese linguists call this *tōchi* (inversion). Spoken Japanese also drops subjects and particles, as spoken English drops words. So the idea that speech is “looser” is not a feature of English only."
    ]},
    {h:"Writing for different readers", body:[
      "Knowing both styles gives you a choice. The question is not “speech or writing?” It is “who is my reader, and what do they expect?”",
      {table:[["Situation","Typical choices"],["Text to a friend","Fragments, contractions, markers such as *so* and *anyway*, a casual tone."],["Email to a teacher","Full sentences, a clear request, contractions are fine, polite markers such as *Could you…*."],["Report or essay","Longer sentences, exact words, few contractions, little vague language, a careful structure."],["Speech to an audience","Written in advance but made to be heard: short sentences, repetition, direct address."]]},
      "Turning a spoken message into a written one is a useful skill. Here is an example.",
      {ex:"Spoken: “So, the meeting, it’s, like, next Tuesday, I think, and we need the slides and stuff.”\nWritten: “The meeting is on Tuesday. Please prepare the slides and send any supporting documents.”", label:"Worked example"},
      "In the second version, the head and the *like* are gone. The doubt (*I think*) is checked and replaced by a fact. The vague phrase *and stuff* is replaced by a clear request. The meaning is the same, and the second version is better for a reader who cannot ask a follow-up question.",
      {h:"Speaking like a book"},
      "The reverse also happens. Someone who reads a written text aloud, or who says *I shall be very pleased if you would care to join us* in conversation, can sound distant. You can build spoken fluency by listening to real talk and noticing fragments, markers and contractions. For academic writing, the Academic English units on this site show how written norms work.",
      {tip:"When you correct a learner’s speech, say what you hear in plain words: “This is natural in speech, but in an essay I would write it as one sentence.” This is more helpful than just saying “wrong”."}
    ]}
   ],
   try:[
    M("e5u11-l5-x1","A tutor says: “Heads and tails are errors that learners should avoid.” What would you reply?",1,[
      ["The tutor is right. They are grammar mistakes.","Heads and tails are described as normal in conversation, including among native speakers."],
      ["They are normal features of informal speech, but a formal essay would usually use one clause.","Right. The same sentence can be natural in conversation and unnatural in a report."],
      ["They are found in every conversation, so students must use them.","They are common, but not used in every conversation, and no learner has to use them."],
      ["They only appear in writing.","They are a spoken pattern."]
    ],{listen:"e5u11-l5-a1"}),
    {id:"e5u11-l5-x2", type:"sort", q:"Is each sentence more typical of conversation or of formal writing?", buckets:["Conversation","Formal writing"], items:[
      {t:"Coffee? Sounds good.", b:0, why:"Fragments are normal in conversation."},
      {t:"The committee will review all applications received before the deadline.", b:1, why:"A long noun phrase and careful structure are typical of formal writing."},
      {t:"It was, like, ten people or something.", b:0, why:"*Like* and *or something* are vague language of speech."},
      {t:"It was really good, that film.", b:0, why:"A tail is a spoken pattern."},
      {t:"The results indicate a significant increase in participation.", b:1, why:"Abstract nouns and exact language are typical of research writing."},
      {t:"Want some?", b:0, why:"Ellipsis: the first words are dropped."}
    ]},
    {id:"e5u11-l5-x3", type:"match", q:"Match each feature to its example.", pairs:[
      ["head","*My brother, he lives in Sendai.*","The topic comes first, and a pronoun follows."],
      ["tail","*He’s a nice guy, your brother.*","The clarifying noun phrase comes after."],
      ["vague language","*and things like that*","Gives a general idea instead of an exact list."],
      ["discourse marker","*anyway*","Organizes the conversation."],
      ["fragment","*Not yet.*","A short reply without a full clause."]
    ]},
    {id:"e5u11-l5-x4", type:"spot", q:"Tap each part of this spoken message that you would **change** if you turned it into a formal email.", ask:"would change", parts:[
      "“", {t:"So, ", flag:true, why:"A discourse marker of speech. A formal email usually starts with a greeting or the main point."}, "the report, ", {t:"it’s ", flag:true, why:"This is the pronoun of a head (*the report, it…*). Write *The report is…*."}, "due ", {t:"like", flag:true, why:"*Like* as an approximator is spoken. Write *due on* or *due by*."}, " on Friday, ", {t:"and stuff", flag:true, why:"Vague language. Name the items, or delete the phrase."}, ". Please send me ", {t:"your section", flag:false, why:"Fine. A clear, exact request."}, " by Thursday.”"
    ]},
    {id:"e5u11-l5-x5", type:"order", q:"Put these steps in a sensible order for turning a spoken message into a formal written one.", items:[
      {t:"Read the spoken version and find the main point.", why:"You need the main point before you can organize the rest."},
      {t:"Remove fillers, markers and vague phrases.", why:"They have a job in speech, but a reader cannot ask what *stuff* means."},
      {t:"Rewrite heads and tails as one clause.", why:"The topic goes in the subject, and the pronoun goes."},
      {t:"Replace uncertain words with exact facts.", why:"A reader needs dates and names."},
      {t:"Read it as the recipient and check the tone.", why:"The last step checks that it fits the reader."}
    ]},
    {id:"e5u11-l5-x6", type:"number", q:"How many of these sentences contain a **head** or a **tail**? “1. My sister, she works in Kobe. 2. The train leaves at nine. 3. It’s a great place, that restaurant. 4. Coffee? 5. That book on the table, did you read it?”", answer:3, tol:0, unit:"sentences", why:"Sentence 1 has a head (*My sister*). Sentence 3 has a tail (*that restaurant*). Sentence 5 has a head (*That book on the table*). Sentence 2 is a plain clause, and sentence 4 is a fragment.", wrongs:[{v:2, tol:0, why:"You missed one. Check sentence 5: *That book on the table* is a head."},{v:4, tol:0, why:"*Coffee?* is a fragment, not a head or a tail. *The train leaves at nine* has neither."}], hint2:"Look for a noun phrase that is repeated by a pronoun in the clause."},
    {id:"e5u11-l5-x7", type:"explain", q:"A student says: “My teacher says that *like* is bad grammar. I hear people use it a lot. Which is right?” Write a short answer you could give.", size:"3–5 sentences", prompt:"I would say: …", hint:"Separate grammar from style, and mention the reader.", model:"People use *like* in several ways, and linguists describe them as normal features of everyday speech. Calling it “bad grammar” mixes grammar with style. In a formal essay or an interview, many speakers use it less, because the setting calls for a more careful register. So your teacher may be right about a school essay, and what you hear in conversation is also real English. I would suggest that you notice it and decide when to use it.", points:["Separates grammar from style or register", "Says that like is a normal feature of speech", "Says that formal settings often avoid it", "Offers a practical suggestion"]},
    {id:"e5u11-l5-x8", type:"explain", q:"A teacher asks: “A student wrote *The film, it was very good.* in an essay. Is this wrong?” Write an explanation you could give to the teacher and the student.", size:"3–5 sentences", prompt:"I would say: …", hint:"Name the pattern, say where it fits, and give the formal version.", model:"This is a spoken pattern, sometimes called a head: the topic *The film* is named first, and the pronoun *it* repeats it. It is normal in conversation, but in an academic essay it is better to write one clause: *The film was very good.* So it is not a grammar error as such. It is a register mismatch, which is common when speakers write the way they talk. I would show the student both versions and explain when each one fits.", points:["Names the pattern (a head, or topic repetition)", "Says it is normal in speech", "Gives the formal version as one clause", "Calls it a register choice, not a plain error"]}
   ],
   apply:{
    intro:"These tasks use a short recording or a transcript and a free corpus. Nothing needs an account, except COCA, which is free with registration and has daily search limits.",
    tasks:[
     {t:"Spot spoken features in a short talk", how:[
       "Find a short video or podcast of a conversation in English, with a transcript if possible.",
       "Listen for two minutes. Write down three fragments, two discourse markers and one example of vague language.",
       "Write each one as it would look in a formal email."
     ], write:"My examples and their formal versions…"},
     {t:"Check a usage in a corpus", how:[
       "Open COCA at english-corpora.org and search for *sort of* and *kind of*. Use the spoken and academic sections if the free version shows them.",
       "Note which genre has more of each.",
       "Write one sentence about what this tells you about register."
     ], write:"What I searched… the numbers I saw… my sentence…"}
    ],
    proof:"A list of spoken features with formal rewrites, and a one-sentence note on what a corpus search showed about register."
   },
   read:[
    {book:"eling", where:"The Language Variation and Change chapter, section “Language varies”", note:"Background reading on how language varies by situation, as speech and writing do."}
   ]
  }
  ],
  checkpoint:["e5u11-q01","e5u11-q03","e5u11-q07","e5u11-q11","e5u11-q14","e5u11-q19","e5u11-q22","e5u11-q25","e5u11-q29","e5u11-q33","e5u11-q38","e5u11-q43"],
  bank:[
   /* ---- Lesson 1: why spelling is irregular ---- */
   Q("e5u11-q01","e5u11-l1",1,"Which statement best explains why English spelling and pronunciation often disagree?",1,[
     ["English spelling was never planned, so it is random.","It is not random. Most irregular spellings have a historical reason."],
     ["Spelling became fairly fixed while pronunciation kept changing.","Right. The letters kept older pronunciations, such as the *k* in *knight*."],
     ["Speakers pronounce words wrongly.","Pronunciation changes naturally. It is not an error."],
     ["The English alphabet has too few letters.","The number of letters is only one small factor. The history of the spelling matters more."]]),
   Q("e5u11-q02","e5u11-l1",1,"Roughly when did the Great Vowel Shift take place?",2,[
     ["In a single year, 1066.","1066 is the Norman Conquest, not the vowel shift."],
     ["In 1476, with the first English printing press.","1476 is the date of Caxton’s press, which is a separate event."],
     ["Gradually, roughly between 1400 and 1700.","Right. It was a slow change, and not at the same speed in every dialect."],
     ["After 1900, with the arrival of radio.","The shift was complete long before the 20th century."]]),
   Q("e5u11-q03","e5u11-l1",1,"Which of these silent letters was **added later** to look like the Latin source word?",1,[
     ["The *k* in *knee*.","The *k* was once pronounced."],
     ["The *b* in *debt*.","Right. Writers added it to match Latin *debitum*. It was never said in English."],
     ["The *w* in *write*.","The *w* was once pronounced."],
     ["The *g* in *gnat*.","The *g* was once pronounced."]]),
   Q("e5u11-q04","e5u11-l1",1,"Who set up the first printing press in England, and in which year?",0,[
     ["William Caxton, in 1476, at Westminster.","Right. Printing made spelling more stable over the following centuries."],
     ["Samuel Johnson, in 1755.","1755 is the date of Johnson’s dictionary, not a press."],
     ["Noah Webster, in 1828.","1828 is the date of Webster’s American dictionary."],
     ["Johannes Gutenberg, in 1476.","Gutenberg worked in Mainz, Germany, from about 1450. He never had a press in England."]]),
   Q("e5u11-q05","e5u11-l1",2,"A learner says, “English spelling makes no sense.” Which answer is the most accurate and helpful?",3,[
     ["“You are right. Just memorize every word.”","This is discouraging and not accurate."],
     ["“It is easy once you learn the alphabet.”","This hides the real difficulty."],
     ["“It is a mistake. Nobody can explain it.”","Many oddities can be explained by history."],
     ["“It looks that way, but many oddities have reasons, such as old sounds and Latin spellings, and there are also useful patterns.”","Right. It respects the learner’s experience and gives hope."]]),
   Q("e5u11-q06","e5u11-l1",2,"Mei notices that *sign* and *signature* look alike though the *g* is silent in one of them. What does this show?",2,[
     ["The spelling is wrong in one of the words.","Both spellings are standard."],
     ["Spelling only records sounds.","If it did, the two would not look alike."],
     ["Spelling also keeps related words visible, even when the sounds change.","Right. Spelling is a compromise between sound and meaning."],
     ["The word *signature* is a recent invention.","It is not recent, and this does not explain the spelling."]]),
   Q("e5u11-q07","e5u11-l1",3,"Toby, a master’s student in Japanese linguistics who used to teach English, is asked: “Did Noah Webster invent American spelling?” Which answer is the most accurate?",1,[
     ["Yes, he invented every American spelling in 1828.","Many differences were already present or developed in other ways."],
     ["He helped to make some spellings, such as *color* and *center*, standard in the US through his dictionaries, but not all his ideas were adopted.","Right. His role was important but limited."],
     ["No, he had no influence.","His dictionary and spelling book were widely used."],
     ["He changed all English spelling worldwide.","His influence was mostly in the US."]]),
   Q("e5u11-q08","e5u11-l1",3,"A student asks why the Japanese word for “today” changed its written form in 1946 but English never made such a change. Which is the best part of an answer?",0,[
     ["Japan introduced a modern kana system by government decision, while no body controls English spelling.","Right. English has no official authority that can order a reform."],
     ["English speakers do not care about spelling.","Many care a great deal, and reforms have been proposed."],
     ["English spelling is already perfectly regular.","It is not. Many spellings are irregular, and this lesson shows why."],
     ["Japanese does not change.","It did change, in 1946."]]),
   Q("e5u11-q09","e5u11-l1",2,"Why do *bite*, *meet* and *house* have letters that stand for different sounds than in Italian or Spanish?",3,[
     ["Because the words are borrowed from French.","They are native English words."],
     ["Because English teachers changed the rules in school.","The change was a natural change in speech."],
     ["Because the letters were chosen at random.","The letters had regular values at first."],
     ["Because the Great Vowel Shift changed the long vowels, while the spellings changed much less.","Right. The sounds moved, the spellings stayed."]]),
   /* ---- Lesson 2: spelling patterns ---- */
   Q("e5u11-q10","e5u11-l2",1,"What does a final silent *e* usually show in a word such as *kite*?",0,[
     ["The vowel before the consonant is long.","Right. Compare *kit* and *kite*."],
     ["The word is a verb.","The final *e* does not show word class."],
     ["The word is a loanword.","It is a native English pattern."],
     ["The consonant is doubled.","A final *e* does not double a consonant."]]),
   Q("e5u11-q11","e5u11-l2",1,"Which is the correct *-ing* form of *begin*?",2,[
     ["*begining*","*Begin* is stressed on the last syllable and ends in one vowel and one consonant, so the *n* doubles."],
     ["*beginnning*","Only one *n* is doubled, not two."],
     ["*beginning*","Right. The final consonant doubles because the last syllable is stressed."],
     ["*beginin*","This is not a word."]]),
   Q("e5u11-q12","e5u11-l2",1,"Which pair shows the difference between *hoping* and *hopping*?",1,[
     ["*Hoping* has a short vowel, and *hopping* a long one.","It is the other way around."],
     ["*Hoping* has a long vowel from *hope*, and *hopping* a short vowel from *hop*.","Right. The doubled *p* shows the short vowel."],
     ["They are two spellings of the same word.","They come from different verbs."],
     ["*Hopping* is the British spelling and *hoping* the American one.","They are different words in both countries."]]),
   Q("e5u11-q13","e5u11-l2",1,"Which spelling is the American one?",0,[
     ["*neighbor*","Right. UK spelling is *neighbour*."],
     ["*colour*","This is UK spelling."],
     ["*centre*","This is UK spelling."],
     ["*defence*","This is UK spelling."]]),
   Q("e5u11-q14","e5u11-l2",2,"Which word does **not** follow the “magic *e*” pattern?",1,[
     ["*cake*","It follows the pattern: long vowel."],
     ["*give*","Right. It has a final *e* but a short vowel. It is one of the common exceptions."],
     ["*home*","It follows the pattern."],
     ["*bike*","It follows the pattern."]]),
   Q("e5u11-q15","e5u11-l2",2,"Amara spells *recieve* in an email. What is the best correction and tip?",2,[
     ["*recieve* is correct, because *i* comes before *e*.","After *c*, the rule puts *e* before *i*: *receive*."],
     ["*recieve* is correct in the US.","It is not correct in the US or UK."],
     ["*receive*: “i before e, except after c” works for words with the sound /iː/, but learn the exceptions.","Right. The rule works here, although it fails in many other words."],
     ["*receve*, because the second vowel is not stressed.","The spelling *receve* is not used."]]),
   Q("e5u11-q16","e5u11-l2",2,"Which sentence uses GA and SSBE accurately about *tomato*?",3,[
     ["The spelling differs in the two countries.","The spelling is the same."],
     ["The pronunciation is the same in both.","GA and SSBE say the second vowel differently."],
     ["GA says /təˈmɑːtəʊ/ and SSBE says /təˈmeɪtoʊ/.","These are reversed."],
     ["The spelling is the same, but GA says /təˈmeɪtoʊ/ and SSBE says /təˈmɑːtəʊ/.","Right. The spelling is shared, and the vowels differ between the accents."]]),
   Q("e5u11-q17","e5u11-l2",3,"Tomás writes a US report. He uses *color* and *organize* in the first page, and *centre* and *behaviour* on the second page. What is the best advice?",1,[
     ["Leave it. Readers do not notice.","Mixed sets look careless to many readers."],
     ["Choose one set, here US, and change *centre* to *center* and *behaviour* to *behavior*.","Right. Keep one set through the whole report."],
     ["Change everything to UK spelling.","Either set is fine, but the report is meant for a US reader."],
     ["Use only words with no spelling difference.","This is impossible and not needed."]]),
   Q("e5u11-q18","e5u11-l2",3,"A teacher says, “There are no spelling rules in English.” How would you reply most accurately?",0,[
     ["There are many useful patterns, such as magic *e* and the doubling rule, with some real exceptions.","Right. Patterns help, and exceptions should be learned too."],
     ["The teacher is correct. Rules do not exist.","Many patterns work most of the time."],
     ["Every word follows a rule, with no exceptions.","There are real exceptions, such as *give*."],
     ["Only the US has spelling rules.","Both US and UK have patterns."]]),
   /* ---- Lesson 3: commas and other marks ---- */
   Q("e5u11-q19","e5u11-l3",1,"What is the serial comma?",2,[
     ["A comma before a quotation.","That is a different use of the comma."],
     ["A comma after an introductory phrase.","That is a different use."],
     ["The comma before *and* or *or* in a list of three or more items.","Right. It is also called the Oxford comma."],
     ["A comma that separates two full sentences.","That is a comma splice."]]),
   Q("e5u11-q20","e5u11-l3",1,"Which style guide generally uses the serial comma?",0,[
     ["Chicago Manual of Style","Right. Chicago recommends it. AP generally omits it unless it is needed for clarity."],
     ["AP Stylebook","AP generally does not use it."],
     ["No style guide uses it.","Chicago and APA do."],
     ["Only British guides use it.","It is used in US guides too."]]),
   Q("e5u11-q21","e5u11-l3",1,"Which sentence is correct in US style?",1,[
     ["*He said, ‘I’m ready’.*","US style uses double marks and puts the period inside them."],
     ["*He said, “I’m ready.”*","Right. Double marks, with the period inside."],
     ["*He said, “I’m ready”.*","In US style the period goes inside the marks."],
     ["*He said “I’m ready”.*","The comma is missing and the period is outside."]]),
   Q("e5u11-q22","e5u11-l3",2,"What is the difference in meaning between these sentences? *My brother who lives in Sendai is a pilot.* and *My brother, who lives in Sendai, is a pilot.*",2,[
     ["There is no difference.","Commas change the meaning here."],
     ["The first says I have no brother.","It says that I have more than one."],
     ["The first suggests more than one brother, and the second suggests one.","Right. Without commas the clause identifies which brother."],
     ["The second is incorrect.","Both are correct, with different meanings."]]),
   Q("e5u11-q23","e5u11-l3",2,"Which sentence has a comma splice?",3,[
     ["*I called Mei, but she did not answer.*","A comma before *but* joining two clauses is correct."],
     ["*After lunch, we went home.*","A comma after an introduction is correct."],
     ["*We bought tea, rice, and bread.*","This is a list."],
     ["*I will send it tomorrow, please read it.*","Right. Two full sentences are joined by only a comma."]]),
   Q("e5u11-q24","e5u11-l3",2,"Which use of a semicolon is correct?",1,[
     ["*You need three things; a pen, paper and time.*","A colon, not a semicolon, introduces a list."],
     ["*I like tea; my brother prefers coffee.*","Right. Two related full sentences."],
     ["*Dear Sam; thank you.*","A greeting takes a comma or a colon."],
     ["*Because I was late; I missed the bus.*","The first part is not a full sentence."]]),
   Q("e5u11-q25","e5u11-l3",3,"Mariya, who studies English interpreting, writes “*Mei, likes tea.*” in a practice email. What should you tell her?",0,[
     ["Remove the comma: English has no comma between a subject and its verb.","Right. Japanese 、 and English commas work differently."],
     ["The comma is correct because Mei is a name.","A comma after a subject name is not needed."],
     ["Add a comma after *likes*.","This also splits the verb and object."],
     ["Use a semicolon instead.","A semicolon is wrong here."]]),
   Q("e5u11-q26","e5u11-l3",3,"A company’s house style says “Use double quotation marks.” A writer trained in the UK writes: *The manager called it ‘a small problem’.* What should the editor change for a US audience?",2,[
     ["Nothing. Single marks are always correct.","In US style, double marks are the default."],
     ["Only the period.","Both the marks and the period change."],
     ["Use double marks and place the period inside: *The manager called it “a small problem.”*","Right. US style uses double marks, and the period goes inside them."],
     ["Delete the quotation marks.","This changes the meaning."]]),
   Q("e5u11-q27","e5u11-l3",1,"Which mark is used for a range such as *pages 10–20*?",1,[
     ["A hyphen","A hyphen joins words; a range uses an en dash."],
     ["An en dash","Right. An en dash marks a range of numbers or dates."],
     ["An em dash","An em dash sets off an extra idea."],
     ["A colon","A colon introduces something."]]),
   /* ---- Lesson 4: apostrophes and capitals ---- */
   Q("e5u11-q28","e5u11-l4",1,"What are the two main jobs of an apostrophe?",3,[
     ["To make plurals and show stress.","Plurals do not use an apostrophe, usually."],
     ["To mark questions and quotations.","These are different marks."],
     ["To show silent letters and word origin.","These are not apostrophe jobs."],
     ["To show missing letters in a contraction and to show possession.","Right. These are the two main jobs."]]),
   Q("e5u11-q29","e5u11-l4",1,"Which is the correct possessive for more than one student?",0,[
     ["*the students’ books*","Right. The plural ends in *-s*, so add only an apostrophe."],
     ["*the student’s books*","This means one student."],
     ["*the students books*","The apostrophe is missing."],
     ["*the studentses books*","This is not a form."]]),
   Q("e5u11-q30","e5u11-l4",1,"Which sentence is correct?",3,[
     ["*The cat licked it’s paws.*","*It’s* means *it is*."],
     ["*Whose there?*","*Who’s* means *who is*."],
     ["*Your late again.*","*You’re* means *you are*."],
     ["*The dog wagged its tail.*","Right. *Its* is possessive, with no apostrophe."]]),
   Q("e5u11-q31","e5u11-l4",2,"Which is the correct possessive of *children*?",1,[
     ["*childrens’*","This is not standard."],
     ["*children’s*","Right. A plural without *-s* adds *’s*."],
     ["*childrens*","The apostrophe is missing."],
     ["*childrens’s*","This is not a form."]]),
   Q("e5u11-q32","e5u11-l4",2,"Which sentence needs a capital letter that is missing?",3,[
     ["*She is a professor.*","A job title used generally is lowercase."],
     ["*We go north in spring.*","Directions and seasons are lowercase."],
     ["*I study biology.*","Most school subjects are lowercase."],
     ["*He speaks spanish.*","Right. Languages are capitalized: *Spanish*."]]),
   Q("e5u11-q33","e5u11-l4",2,"What does *03/04/2026* mean in US style?",1,[
     ["3 April 2026","This is the UK reading."],
     ["March 4, 2026","Right. US style is month/day/year."],
     ["2026 March 4","This is a year-first order."],
     ["It is not a valid date.","It is valid in both systems, with different meanings."]]),
   Q("e5u11-q34","e5u11-l4",3,"A friend’s shop sign says *Fresh egg’s*. How should you respond kindly?",2,[
     ["Tell the friend that this is a serious error.","This is harsh, and the error is common."],
     ["Say nothing and tell other people.","This is not kind."],
     ["Say that a plural needs only *s* (*eggs*), that the mistake is very common, and that the apostrophe is for owners and missing letters.","Right. It explains the rule briefly and kindly."],
     ["Say that the apostrophe is correct.","It is not standard."]]),
   Q("e5u11-q35","e5u11-l4",3,"Kaito, a first-year undergraduate, writes a note: “Dont take other peoples food.” Which two corrections are needed?",0,[
     ["*Don’t* and *people’s*","Right. A contraction needs an apostrophe, and *people* is an irregular plural that takes *’s* for possession."],
     ["*Dont’* and *peoples’*","The apostrophes are in the wrong places."],
     ["*Do not* and *peoples*","*Do not* is fine, but *peoples* still needs the apostrophe."],
     ["Only *Don’t*","*People’s* also needs correction."]]),
   Q("e5u11-q36","e5u11-l4",2,"Which title is in sentence case?",1,[
     ["*HOW TO WRITE A GOOD EMAIL*","All capitals is not sentence case."],
     ["*How to write a good email* (only the first word)","Right. Only the first word is capitalized, since there is no proper noun."],
     ["*how to write a good email* (no capitals at all)","The first word needs a capital."],
     ["*How to Write a Good Email* (main words capitalized)","This is title case."]]),
   /* ---- Lesson 5: spoken and written grammar ---- */
   Q("e5u11-q37","e5u11-l5",1,"Which pair best describes the main difference between speech and writing?",2,[
     ["Speech has no grammar, and writing does.","Speech has its own grammar."],
     ["Writing is always better than speech.","Neither is better; each fits its job."],
     ["Speech is planned in real time with shared context, and writing can be planned and edited for a distant reader.","Right. The conditions of production shape the grammar."],
     ["Speech is only for informal topics.","People also give formal speeches."]]),
   Q("e5u11-q38","e5u11-l5",1,"What is a *head* in spoken grammar?",0,[
     ["A noun phrase at the start that sets the topic, followed by a clause with a pronoun for it.","Right. For example: *My brother, he lives in Sendai.*"],
     ["A noun phrase at the end that clarifies a pronoun.","That is a tail."],
     ["A filler such as *um*.","A filler is a different feature."],
     ["The first word of a sentence.","A head is a particular spoken pattern."]]),
   Q("e5u11-q39","e5u11-l5",1,"Which sentence has a tail?",1,[
     ["*My sister, she works in Kobe.*","This has a head."],
     ["*It was really good, that film.*","Right. *That film* comes after the clause."],
     ["*Coffee?*","This is a fragment."],
     ["*The train leaves at nine.*","This is a plain clause."]]),
   Q("e5u11-q40","e5u11-l5",2,"Which statement about *like* in speech is the most accurate?",3,[
     ["It is always a grammar error.","Linguists describe it as a regular feature of speech."],
     ["It is used only by young people.","It is used in many ages and groups."],
     ["It is not used in any formal setting.","Its use varies, and speakers use it less in formal talk."],
     ["It has several uses, and it is a normal part of conversation. People may use it less in formal settings.","Right. It is a feature of speech, and its use depends on the setting."]]),
   Q("e5u11-q41","e5u11-l5",2,"Why is vague language such as *and things like that* useful in conversation?",2,[
     ["It shows that the speaker does not know the topic.","It often shows shared knowledge."],
     ["It is always a sign of poor English.","It has real jobs."],
     ["It gives a general idea and shows that the speaker assumes the listener understands.","Right. It has a real job in conversation."],
     ["It makes the sentence grammatical.","It does not do this."]]),
   Q("e5u11-q42","e5u11-l5",2,"Which version of this message is better for a formal email? Spoken: “So, the report, it’s due like Friday and stuff.”",1,[
     ["*So, the report, it’s due like Friday and stuff.*","This is the spoken version."],
     ["*The report is due on Friday.*","Right. It removes the marker, head, *like* and vague phrase."],
     ["*The report, it is due Friday.*","The head remains."],
     ["*Report due Friday and stuff.*","The vague phrase remains."]]),
   Q("e5u11-q43","e5u11-l5",3,"A student writes in an essay: “The film, it was very good.” What is the best way to explain this to the student?",0,[
     ["“This is a normal spoken pattern. In an essay, write one clause: *The film was very good.*”","Right. It names the pattern, explains the register, and gives the formal form."],
     ["“This is the worst kind of error.”","This is harsh and inaccurate."],
     ["“This is perfect for an essay.”","A formal essay usually avoids it."],
     ["“Never use a pronoun.”","This is not a rule."]]),
   Q("e5u11-q44","e5u11-l5",3,"Carter and McCarthy’s “headers and tails” (often called heads and tails) are described mainly as…",3,[
     ["rules that every speaker must use.","They are not obligatory."],
     ["errors found only in learners.","They are found in native and fluent speech."],
     ["patterns of written academic English.","They are spoken patterns."],
     ["patterns found in informal conversation, which are not wrong, and which usually become one clause in formal writing.","Right. They are spoken patterns, not errors."]]),
   Q("e5u11-q45","e5u11-l5",2,"What is the Japanese pattern that is somewhat like an English tail?",1,[
     ["Using *wa* after the subject.","This marks a topic, not a tail."],
     ["Putting the comment first and the topic after, as in *Oishii yo, kore.*","Right. This is called *tōchi* (inversion)."],
     ["Leaving out the subject.","This is ellipsis, a different thing."],
     ["Using katakana words.","This is unrelated."]])
  ],
  codex:[
   {id:"english-spelling-history", title:"Why English spelling is irregular", aka:["history of English spelling","Great Vowel Shift","silent letters"], tags:["spelling","history","writing"],
    summary:"English spelling kept older pronunciations and borrowed spellings while the sounds kept changing, so letters and sounds often disagree.",
    levels:{
     starter:[
      "Spelling is like an old photograph. It shows how English sounded several hundred years ago, but the language has kept changing since then. This is why *knight* has a *k* and *gh* that we do not say.",
      "Four events shaped the spelling. Old English was written with the Latin alphabet. After 1066, French scribes added their own habits (*queen, house*). Printing arrived in England in 1476 with William Caxton, and over the next two centuries spelling became more fixed. Then dictionaries, such as Samuel Johnson’s (1755) and Noah Webster’s (1828), made the standards stronger.",
      "Meanwhile, the long vowels moved in the Great Vowel Shift, roughly between 1400 and 1700. The letters stayed. So the *i* in *bite* once stood for a sound like *ee*.",
      "Most odd spellings have a reason. Some silent letters were once pronounced (*knee, write*). Others were added later to look like Latin (*debt, doubt*)."
     ],
     builder:[
      "A useful way to explain irregular spelling is to separate three causes: a sound change after the spelling was set (*knight, bite*), a borrowed spelling (*ballet, psychology*), and a deliberate change to show origin (*debt, island*).",
      "The Great Vowel Shift was gradual, and its causes are still debated. It raised the long vowels, and the highest ones became diphthongs. Words such as *bite* (from a long /iː/), *house* (from /uː/) and *meet* (from /eː/) show the result. Because the shift was uneven across dialects, do not describe it as a single event.",
      "Spelling also keeps meaning visible. The *-ed* ending is said /t/, /d/ or /ɪd/ but written one way, so the past stays clear. *Sign* and *signature* look alike even though the *g* is said in only one.",
      "In teaching, tell learners that many oddities are explained, and use a word-history dictionary for the memorable ones. Avoid saying that English spelling is random."
     ],
     pro:[
      "Precise points. Old English spelling was fairly phonemic. Middle English had large regional variation, and Norman scribes introduced French graphemes such as *qu* for /kw/, *ou* for /uː/, and *c* for /s/. A common explanation for *o* in *love, son, come* is that scribes avoided *u* beside letters made of minims (*m, n, v, w*). William Caxton set up a press at Westminster in 1476. Printing sped the standardization, but it was not a single act, and variation continued in print for a long time. Johnson’s dictionary (1755) and Webster’s *American Dictionary of the English Language* (1828) consolidated British and American practice. Webster’s influence explains many US forms (*color, center, defense*), though some of his proposals were not adopted.",
      "Etymological respellings of the 16th century added letters to match Latin or Greek: *debt* (Latin *debitum*), *doubt* (Latin *dubitare*), and *island*, where *s* came from a false link to *isle* (Latin *insula*) although the word is native English (Old English *īgland*). Some such letters later affected pronunciation in other words (a “spelling pronunciation”), but not in *debt* and *doubt*.",
      "Caution: popular accounts sometimes attribute all irregularity to printers or to the Great Vowel Shift. Both mattered, but most irregularities have several causes. Cite a historical dictionary or an etymology source for a specific word instead of generalizing."
     ]},
    related:["spelling-patterns-english","punctuation-us-uk","spoken-and-written-english"], read:[{book:"eling", where:"The Historical Linguistics chapter, section “Phonological change”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"},{t:"Oxford English Dictionary", url:"https://www.oed.com/"}], checked:"2026-11"},
   {id:"spelling-patterns-english", title:"Spelling patterns and US/UK spelling sets", aka:["magic e","doubling rule","US and UK spelling"], tags:["spelling","patterns"],
    summary:"English has real spelling patterns, such as magic e, doubling and soft c/g, each with common exceptions, and regular US/UK sets.",
    levels:{
     starter:[
      "English spelling has patterns that work most of the time. *Cap* becomes *cape* with a final *e*. *Hop* becomes *hopping*, but *hope* becomes *hoping*. A *c* before *e, i* or *y* usually sounds like /s/ (*city*), and a *g* often like /dʒ/ (*gem*).",
      "Every pattern has exceptions, mostly in common old words: *have, give, get, love*. Learn the pattern and its short list of exceptions together.",
      "US and UK spelling also differ in a few regular sets: *color / colour*, *center / centre*, *organize / organise*, *traveling / travelling*."
     ],
     builder:[
      "The **-ing rule**: drop a final *e* before a vowel ending (*hoping*). Double a final consonant after one vowel when the last syllable is stressed (*beginning*, *referring*). Do not double when the stress is earlier (*visiting*), or after *w, x, y*.",
      "The **-tion/-sion** tendencies: *-tion* is the default for /ʃən/; *-sion* is common after consonants (*tension*), and /ʒən/ is spelled *-sion* after vowels (*vision*). *-cian* names skilled people (*musician*).",
      "US/UK sets: *-or/-our*, *-ize/-ise* (British publishers use both), *-er/-re*, *-l-/-ll-*, *-ense/-ence*, and single words (*gray/grey, program/programme, tire/tyre*). Canada mixes (*colour, centre, -ize*), and Australia follows the UK in most. Choose one set and keep it."
     ],
     pro:[
      "Scope and caution. The doubling rule is stress-dependent in US English (*controlling* but *traveling*), but UK English doubles *l* after a single vowel letter whatever the stress (*travelling*). Some words vary within a country (*judgment/judgement*, *acknowledgment/acknowledgement*). Dictionaries show variants, and style guides choose among them.",
      "On *-ize/-ise*: the *-ize* spelling comes from Greek via Latin and French. In British usage, *-ise* is now the more common choice, but Oxford University Press keeps *-ize* (“Oxford spelling”). Some verbs end in *-ise* in all varieties because they are not from the Greek *-izein* source (*advertise, revise, supervise, surprise*), and *analyse* is the UK form of *analyze*.",
      "The popular rule “*i* before *e* except after *c*” is reliable only for the /iː/ sound after a consonant. It misses *weird, seize, protein, species, science*. A teacher who gives a rule should give the sound condition and the short list of exceptions.",
      "Same spelling, different accents: *schedule, tomato, vase, herb, leisure* differ between GA and SSBE and should be shown with both transcriptions, not marked as errors."
     ]},
    related:["english-spelling-history","punctuation-us-uk","apostrophes-and-capitals"], read:[{book:"eling", where:"The Morphology chapter, section “What is morphology?”"}],
    sources:[{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Oxford English Dictionary", url:"https://www.oed.com/"}], checked:"2026-11"},
   {id:"punctuation-us-uk", title:"Commas, quotation marks and other punctuation (US and UK)", aka:["serial comma","Oxford comma","quotation marks","semicolon"], tags:["punctuation","style"],
    summary:"Commas follow sentence structure and can change meaning; the serial comma and quotation style are style choices that differ in US and UK practice.",
    levels:{
     starter:[
      "A comma follows the grammar of a sentence. It separates list items, follows an introduction, comes before *and* or *but* when two full clauses are joined, and sets apart extra information. It does not mark a breath.",
      "Commas can change meaning: *My sister who lives in Nara is a nurse* (I have more than one sister) is different from *My sister, who lives in Nara, is a nurse* (I have one).",
      "In US style, quotation marks are double and periods and commas go inside: *She said, “I’m tired.”* In UK style, single marks are common, and the period goes outside when it is not part of the quotation: *He called it ‘a small problem’.*"
     ],
     builder:[
      "The serial comma (the comma before *and* in a list) is a style choice. Chicago and APA use it. AP news style generally does not, except for clarity. Pick one style and be consistent. Check a list for ambiguity, as in *We thank our parents, Sam and Dr. Rivera.*",
      "A semicolon joins two related full sentences or separates list items that contain commas. A colon follows a full clause and introduces a list, an explanation or a quotation. A hyphen joins words in a compound adjective (*a well-known author*). An en dash marks a range (*10–20*). An em dash sets off a break or an aside.",
      "Do not join two full sentences with only a comma (a comma splice). Do not put a comma between a subject and its verb."
     ],
     pro:[
      "Details to know when you explain or edit. US practice places periods and commas inside closing quotation marks regardless of logic. Question marks and exclamation marks go inside when they belong to the quoted matter, outside when they belong to the whole sentence. Colons and semicolons go outside. UK practice varies by publisher: single quotation marks with “logical” placement are common, but some British publishers use double marks.",
      "On the serial comma, a 2017 US appeals court decision in a Maine overtime dispute (*O’Connor v. Oakhurst Dairy*, First Circuit) turned on a list with no serial comma, which the court found ambiguous. This is a famous illustration, not evidence that one style is correct.",
      "On the capitalization after a colon, styles differ. Chicago capitalizes after a colon only when what follows is two or more sentences or a quotation. AP and APA capitalize when one full sentence follows. A learner or writer should follow the target publication’s guide."
     ]},
    related:["english-spelling-history","apostrophes-and-capitals","spoken-and-written-english"], read:[{book:"eling", where:"The Syntax chapter, section “Structure within the sentence: Phrases, heads, and selection”"}],
    sources:[{t:"The Chicago Manual of Style Online", url:"https://www.chicagomanualofstyle.org/"},{t:"APA Style", url:"https://apastyle.apa.org/"},{t:"Purdue Online Writing Lab", url:"https://owl.purdue.edu/owl/"}], checked:"2026-11"},
   {id:"apostrophes-and-capitals", title:"Apostrophes and capital letters", aka:["possessives","its and it’s","greengrocer’s apostrophe","title case","sentence case"], tags:["punctuation","capitalization"],
    summary:"The apostrophe marks missing letters and possession, never a plain plural; capital letters follow rules for names, titles and headings that depend on style.",
    levels:{
     starter:[
      "An apostrophe has two jobs. It shows missing letters (*it’s* = *it is*) and it shows possession (*the student’s book*). It does not make plurals. The sign *Apple’s 50p* is called a greengrocer’s apostrophe, and it is a very common error.",
      "For a possessive, first write the noun in the form that you mean, then add *’s*. If the plural already ends in *-s*, add only the apostrophe: *the students’ books*. For irregular plurals, add *’s*: *the children’s toys*.",
      "*Its, hers, ours, yours, theirs* and *whose* never take an apostrophe.",
      "Capitalize names, days, months, languages and nationalities, and the pronoun *I*."
     ],
     builder:[
      "Use the full-words test for *it’s, who’s, you’re, they’re*. Replace the word with the full form. If the sentence still works, use the apostrophe.",
      "Names ending in *s* vary: Chicago writes *James’s book*, and AP writes *James’ book*. Family names have no apostrophe in the plural (*the Smiths*) and one in the possessive (*the Smiths’ house*).",
      "Title case capitalizes the main words, and sentence case only the first word and proper nouns. Chicago lowercases prepositions whatever their length, and AP capitalizes prepositions and conjunctions of four or more letters. US dates are month/day/year, and UK dates are day/month/year, so write the month in words for international readers."
     ],
     pro:[
      "Edge cases. Plurals of single lowercase letters often take an apostrophe (*p’s and q’s*) to avoid confusion, but plurals of years and abbreviations usually do not in Chicago style (*the 1990s, CDs*). Joint possession takes one *’s* (*Tom and Mei’s house*), separate possession takes two.",
      "The English possessive *’s* is a clitic that attaches to the end of a noun phrase (*the King of England’s hat*), not only to a noun. This is one reason that *its* has no apostrophe: it is a possessive determiner and not a noun with a clitic.",
      "Abbreviations: US style puts a period after *Mr., Mrs., Dr.*, and UK style often does not (*Mr, Dr*). Style guides disagree on details, so check the guide used by the reader or publication."
     ]},
    related:["punctuation-us-uk","spelling-patterns-english","spoken-and-written-english"], read:[{book:"eling", where:"The Morphology chapter, section “What is morphology?”"}],
    sources:[{t:"The Chicago Manual of Style Online", url:"https://www.chicagomanualofstyle.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"},{t:"Purdue Online Writing Lab", url:"https://owl.purdue.edu/owl/"}], checked:"2026-11"},
   {id:"spoken-and-written-english", title:"Spoken and written grammar", aka:["spoken grammar","heads and tails","vague language","discourse markers"], tags:["speech","writing","register"],
    summary:"Speech and writing follow different norms; spoken features such as fragments, markers, vague language, heads and tails are normal, and each fits its setting.",
    levels:{
     starter:[
      "People speak and write English in different ways, because the conditions are different. Speech happens in real time with a listener who shares the place. Writing can be planned and edited for a reader who is far away.",
      "Normal features of speech include fragments (*Coffee?*), fillers (*um*), markers (*well, anyway*), vague language (*and stuff*), and *like*. None of them is bad grammar. They are part of how speech works.",
      "When you write, choose a register to suit the reader. A message to a friend, an email to a teacher and an essay need different choices."
     ],
     builder:[
      "Carter and McCarthy, in their *Cambridge Grammar of English*, describe *headers* (often called *heads*) and *tails* in conversation. A head names a topic first (*That café on the corner, have you been there?*). A tail adds a noun phrase at the end (*It was good, that film.*). They are informal speech patterns, and in a formal text they usually become one clause.",
      "Discourse markers manage talk. Vague language is a resource that signals shared knowledge or softens a statement. Both are common and have real jobs.",
      "A Japanese comparison: spoken Japanese can put the comment first and the topic after (*Oishii yo, kore*), a pattern called *tōchi*. Speech everywhere is “looser” in its own way."
     ],
     pro:[
      "Evidence and caution. Corpus-based studies, such as the grammar by Biber and colleagues and the spoken-grammar work of Carter and McCarthy, show tendencies: conversation uses more pronouns and short clauses, and academic prose more complex noun phrases. These are tendencies for text types, not rules, and individual speakers and writers vary.",
      "Do not overclaim about heads and tails. They are well described in informal spoken English, but their frequency depends on the corpus and the speakers, and they are not obligatory for learners. Teaching them is useful for understanding, and not needed for most learners to produce.",
      "For feedback, separate grammar from register. A spoken pattern in an essay is a register mismatch. Show the learner the formal version and when each one fits."
     ]},
    related:["punctuation-us-uk","english-spelling-history","apostrophes-and-capitals"], read:[{book:"eling", where:"The Language Variation and Change chapter, section “Language varies”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge University Press", url:"https://www.cambridge.org/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-orthography", term:"Orthography", def:"The writing system of a language: its letters, spelling rules and punctuation conventions.", codex:"english-spelling-history"},
   {id:"hew-great-vowel-shift", term:"Great Vowel Shift", def:"A gradual change in the long vowels of English, roughly between 1400 and 1700. Spelling stayed the same, so letters such as *i* in *bite* no longer match the old sound.", codex:"english-spelling-history"},
   {id:"hew-silent-letter", term:"Silent letter", def:"A letter that is written but not said, such as the *k* in *knee* or the *b* in *debt*. Some were once pronounced and some were added later.", codex:"english-spelling-history"},
   {id:"hew-etymology", term:"Etymology", def:"The history of a word: where it comes from and how its form and meaning changed.", codex:"english-spelling-history"},
   {id:"hew-spelling-pattern", term:"Spelling pattern", def:"A regular link between letters and sounds or between a word and its ending, such as the magic *e* pattern. Most patterns have a few common exceptions.", codex:"spelling-patterns-english"},
   {id:"hew-serial-comma", term:"Serial comma", def:"The comma before *and* or *or* in a list of three or more items. Also called the Oxford comma. Using it is a style choice.", codex:"punctuation-us-uk"},
   {id:"hew-semicolon", term:"Semicolon", def:"A mark (;) that joins two closely related full sentences, or separates list items that contain commas.", codex:"punctuation-us-uk"},
   {id:"hew-apostrophe", term:"Apostrophe", def:"The mark (’) that shows missing letters in a contraction and possession in a noun. It is not used for ordinary plurals.", codex:"apostrophes-and-capitals"},
   {id:"hew-contraction", term:"Contraction", def:"A short form of two words with an apostrophe for the missing letters, such as *it’s* for *it is* and *don’t* for *do not*.", codex:"apostrophes-and-capitals"},
   {id:"hew-possessive", term:"Possessive", def:"A form that shows who owns or has something, such as *the student’s book* or *hers*. Nouns add *’s* or an apostrophe. Pronouns have special forms without an apostrophe.", codex:"apostrophes-and-capitals"},
   {id:"hew-homophone", term:"Homophone", def:"A word that sounds the same as another word but is spelled differently, such as *its* and *it’s*, or *their* and *there*.", codex:"apostrophes-and-capitals"},
   {id:"hew-proper-noun", term:"Proper noun", def:"A noun that names a particular person, place or thing, such as *Nara* or *Monday*. In English it begins with a capital letter.", codex:"apostrophes-and-capitals"},
   {id:"hew-title-case", term:"Title case", def:"A style for titles that capitalizes the main words. The rules for small words differ between style guides.", codex:"apostrophes-and-capitals"},
   {id:"hew-sentence-case", term:"Sentence case", def:"A style for titles and headings that capitalizes only the first word and proper nouns.", codex:"apostrophes-and-capitals"},
   {id:"hew-discourse-marker", term:"Discourse marker", def:"A word or phrase such as *well, so* or *anyway* that organizes a conversation or shows an attitude. It adds little to the main meaning.", codex:"spoken-and-written-english"},
   {id:"hew-vague-language", term:"Vague language", def:"Words such as *and stuff, or something* and *kind of* that give a general idea and show shared knowledge. It is normal and useful in speech.", codex:"spoken-and-written-english"}
  ]
});
})();
