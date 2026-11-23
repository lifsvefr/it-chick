(function(){
/* How English Works · Unit 4 (e5u4) · Word classes and word building */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u4", track:"e5", n:4, title:"Word classes and word building", icon:"🧱",
  blurb:"How English words are sorted and how they are made. You learn to find a word’s class by what it does, not by what it means. You meet the small grammar words that learners cannot skip. Then you see how words are built from smaller parts, and how new words appear through compounds, conversion, clipping and blending.",
  goals:[
    "Use form tests and function tests to decide a word’s class, and explain why meaning-based definitions such as “a noun is a person, place or thing” fail",
    "Tell the open classes (nouns, verbs, adjectives, adverbs) from the closed classes, and handle tricky cases such as fast, hard and hardly, well, friendly, and gradable adjectives",
    "Recognize determiners, pronouns, prepositions, conjunctions and auxiliary verbs, and explain what each small word does",
    "Break a word into morphemes (root, base, prefix, suffix), separate inflection from derivation, and predict how suffixes change a word’s class and stress",
    "Describe compounds, conversion, clipping, blending, acronyms and initialisms, and explain how new words enter a dictionary"
  ],
  read:[
    {book:"eling", where:"The Morphology chapter (sections “What is morphology?”, “Roots, bases, and affixes”, “Lexical categories”, “Derivational morphology”, “Inflectional morphology” and “Compounding”) and the Syntax chapter (section “Functional categories”)", note:"Read each section after the matching lesson. The book is written for linguistics students, so use this unit’s explanations first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u4-l1", title:"Word classes by what words do", minutes:55,
   hook:{q:"Is the word *light* a noun, a verb or an adjective?", options:["A noun","A verb","An adjective","It depends on the sentence"], answer:3, reveal:"**It depends on the sentence.** In *The light is on*, it is a noun. In *Please light the candle*, it is a verb. In *a light bag*, it is an adjective. A word class is not a label that belongs to a word forever. It is the job the word does in a sentence. This lesson gives you tests to find that job."},
   goals:[
     "Explain why meaning-based definitions (“a noun is a person, place or thing”) fail",
     "Use form tests and function tests to find the class of a word",
     "Say that one word can belong to more than one class, and decide which class it has in a sentence",
     "Tell open classes from closed classes, and say why the difference matters"
   ],
   learn:[
    {h:"Why the school definitions fail", body:[
      {lead:"Many of us learned that a noun is a person, place or thing, and a verb is an action word. These rules work for easy cases. They break on ordinary words."},
      "A [[hew-word-class|word class]] is a group of words that behave in the same way in sentences. The traditional name is **part of speech**. Linguists also say **lexical category**. All three mean the same idea here.",
      "Look at what the old definitions say about real words.",
      {table:[["Word","Is it a person, place or thing?","What it is"],["destruction","No. It names an event.","noun: *the destruction of the bridge*"],["kindness","No. It names a quality.","noun: *Her kindness helped us.*"],["Tuesday","No. It names a time.","noun: *Tuesday is busy.*"],["seem, know, own","No action at all.","verbs: *She seems tired.*"],["a walk, a run","These name actions.","nouns: *We took a walk.*"]]},
      "So meaning is a poor guide. *Destruction* is about an action, but it behaves like a noun. *Seem* is about no action, but it behaves like a verb. In grammar, **behavior** decides the class. Behavior means two things: what **forms** a word can take, and what **job** it does in a phrase.",
      {key:"A word’s class is decided by how it behaves in sentences, not by what it means. Meaning is a rough clue. Behavior is the test."},
      "The old definitions are not useless. They describe the most typical members of each class. Most words for people and objects are nouns. Most words for actions are verbs. But the typical cases are only the center of each class. The tests below also work on the edges."
    ]},
    {h:"Form tests and function tests", body:[
      "Descriptive grammars, such as the *Cambridge Grammar of the English Language* by Rodney Huddleston and Geoffrey Pullum, use two kinds of test. A **form test** asks which endings a word can take. A **function test** asks where the word can go and what it does there.",
      {table:[["Class","Form test","Function test"],["Noun","Can take a plural *-s* or possessive *’s*: *books, Maria’s*","Can follow *the* or *a* and head a phrase; can be the subject: *The book fell.*"],["Verb","Has forms such as *walk, walks, walked, walking*","Can follow *to* or *will*: *to walk, will walk*; shows tense"],["Adjective","Many take *-er* and *-est*: *taller, tallest*","Can come before a noun (*a tall man*) or after *be* (*He is tall.*); can follow *very*"],["Adverb","Few endings. Many end in *-ly*, but this is not a test.","Changes a verb, an adjective, another adverb or a whole clause; can often move: *Slowly, she left. / She left slowly.*"]]},
      "Use the tests together. No single test works for every word. Here are three reasons.",
      {list:[
        "**Some nouns have no plural.** *Information*, *advice* and *rice* are nouns, but you cannot say *informations*. They pass the function test instead: *the information, this advice*.",
        "**Some adjectives have no *-er* form.** *Beautiful* and *wooden* are adjectives. They pass the function test: *a beautiful day, The box is wooden.*",
        "**Many words end in the same letters.** *Friendly* ends in *-ly* but is an adjective. *Quickly* is an adverb. The ending alone does not decide."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u4a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">One word, three jobs: light</text><rect class="d-sage" x="14" y="36" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">The light in the hall is on.</text><text class="s" x="170" y="73" text-anchor="middle">follows “The”, is the subject</text><path class="d-ink" d="M170 82V100" stroke-width="2" marker-end="url(#e5u4a)"/><text x="170" y="116" text-anchor="middle">noun (plural: lights)</text><rect class="d-lup" x="14" y="130" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="150" text-anchor="middle">Please light the candle.</text><text class="s" x="170" y="167" text-anchor="middle">has -s, -ed, -ing forms; follows “Please”</text><path class="d-ink" d="M170 176V194" stroke-width="2" marker-end="url(#e5u4a)"/><text x="170" y="210" text-anchor="middle">verb (lights, lit, lighting)</text><rect class="d-gold" x="14" y="224" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="244" text-anchor="middle">She carries a light bag.</text><text class="s" x="170" y="261" text-anchor="middle">comes before a noun; can follow “very”</text><text x="170" y="290" text-anchor="middle">adjective (lighter, lightest)</text></svg>', alt:"Three boxes, each with a sentence using the word light. In The light in the hall is on, light follows The and is the subject, so it is a noun. In Please light the candle, it has verb forms, so it is a verb. In She carries a light bag, it comes before a noun and can follow very, so it is an adjective.", cap:"The same spelling does three different jobs. The tests look at the form and the position, not the meaning."}
    ]},
    {h:"Testing real words", body:[
      "Here is how the tests settle the hard cases from the table above.",
      {ex:"destruction\nForm: the destruction, two destructions (as in “the destructions of war”)\nFunction: follows the; can be a subject: The destruction was complete.\nResult: noun, although it names an event.\n\nseem\nForm: seem, seems, seemed, seeming\nFunction: follows will: She will seem tired.\nResult: verb, although nothing happens.", label:"Worked example", mono:true},
      "Now try a word that has two jobs. Take *walk*. In *We walk to school*, it follows *we*, and it takes *-s* and *-ed*: *she walks, she walked*. It is a verb. In *We took a walk*, it follows *a*, and it takes a plural: *two walks*. It is a noun. The spelling is the same, but the behavior is different.",
      "This is common in English. Many words have the same form in two or more classes, with no change in spelling. Lesson 5 explains how this happens, and it has a name: **conversion**.",
      {tip:"To test an unknown word, put it into a **frame**: a short sentence with a gap. *The ___ was interesting* accepts nouns (*book, destruction*). *She will ___ it* accepts verbs (*read, finish*). *It is very ___* accepts gradable adjectives (*tall, strange*). Learner dictionaries use the same kind of check."}
    ]},
    {h:"Open classes and closed classes", body:[
      "Word classes also differ in how easily they take new members. Nouns, verbs, adjectives and adverbs are **open classes**. People add new members all the time: *podcast* (noun), *to text* (verb), *cringe* (adjective).",
      "Determiners, pronouns, prepositions, conjunctions and auxiliary verbs are **closed classes**. They have few members, and new ones almost never join. A language can add *selfie* in a year. It does not add a new word like *the* or *of* in a lifetime.",
      {table:[["","Open classes","Closed classes"],["Members","Very many, always growing","Few (tens or hundreds), almost fixed"],["Examples","*podcast, finish, strange, quickly*","*the, she, in, because, can*"],["Meaning","Name things, events, qualities","Do grammar work"],["Unit 3 name","Content words","Function words"]]},
      "This links to Unit 3. Open-class words are mostly content words, and they carry stress. Closed-class words are mostly function words, and they have weak forms. A speaker uses closed-class words all the time, so they are the most frequent words in any large collection of English text: *the, of, and, to, a, in*.",
      {h:"Compared with Japanese"},
      "Japanese also has a closed set of grammar words: particles such as *wa*, *ga*, *o* and *ni*. New words enter Japanese mostly as nouns, often from English, and then take *suru* (“do”) to work as verbs: *dēto suru* (デートする) “go on a date”. English does it differently. A new noun can often be used as a verb with no change at all: *to text*, *to google*.",
      {h:"Why this matters"},
      "Word classes explain many learner errors. *I am boring* (for *bored*) is a mix-up between two adjective forms. *She is a engineer* is an article problem. A dictionary label such as *noun* or *adverb* tells you where the word can go. Teachers need the tests so they can explain *why* a sentence is wrong, not only that it is wrong."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“A word belongs to one class forever.”** Many words belong to two or more. Check the class in the sentence you have.",
        "**“Class depends on meaning.”** Meaning is a clue only. *Destruction* is a noun and *seem* is a verb, whatever they mean.",
        "**“Words ending in *-ly* are adverbs.”** Many are, but *friendly* and *lovely* are adjectives. Lesson 2 has more.",
        "**“Closed classes are minor.”** They are the smallest classes and the most frequent words. A learner who skips *the*, *of* and *can* cannot build a sentence.",
        "**“Different books give different class lists, so the whole idea is unreliable.”** Books count in different ways: some treat pronouns as a kind of noun and auxiliary verbs as a kind of verb. The tests are the same, and the grouping is a choice."
      ]},
      "Dictionaries mark each use of a word with its class: the Cambridge Dictionary shows *noun*, *verb*, *adjective* or *adverb* before each sense. Read the labels. They are the quickest check you have."
    ]}
   ],
   try:[
    {id:"e5u4-l1-x1", type:"sort", q:"Sort each use of a word by its class in the sentence. The word to test is in capitals.", buckets:["Noun","Verb","Adjective"], items:[
      {t:"“The LIGHT in the hall is broken.”", b:0, why:"It follows *the* and is the subject. It has a plural (*lights*). Noun."},
      {t:"“Please LIGHT the candle.”", b:1, why:"It has verb forms (*lit, lighting*) and comes after *please*, where a verb goes. Verb."},
      {t:"“She carries a LIGHT bag.”", b:2, why:"It comes before a noun and can follow *very* (*a very light bag*). Adjective."},
      {t:"“We took a WALK after dinner.”", b:0, why:"It follows *a* and can be plural (*two walks*). Noun, although it names an action."},
      {t:"“We WALK to school.”", b:1, why:"It follows *we* and can take *-s* and *-ed*. Verb."},
      {t:"“The ROUND table is old.”", b:2, why:"It comes before *table*, and it can take *-er* (*rounder*). Adjective."}
    ]},
    M("e5u4-l1-x2","*Destruction* names an event, not a person, place or thing. What is the best reason to call it a noun?",2,[
      ["Because it ends in *-ion*.","An ending is a clue, not a test. Most nouns do not end in *-ion* (*teacher, table*), so the ending cannot be the reason."],
      ["Because the old definition says an event can be a thing.","That stretches the old definition until it means nothing. Grammar uses behavior instead."],
      ["Because it behaves like a noun: it follows *the*, can be a subject, and has a plural form.","Right. These are function and form tests, and *destruction* passes them."],
      ["Because a dictionary says so, and dictionaries are always right.","A dictionary label is based on this evidence. The evidence is the behavior of the word."]
    ]),
    {id:"e5u4-l1-x3", type:"match", q:"Match each test to the class it helps to identify.", pairs:[
      ["Can follow *the* and be the subject","Noun","These are function tests for nouns: *the destruction was complete*."],
      ["Can follow *to* or *will*, and takes *-ed* and *-ing*","Verb","*To walk*, *will walk*, *walked* and *walking* are verb frames and verb forms. Nouns and adjectives do not fit them."],
      ["Can come before a noun and follow *very*","Adjective","*A very tall man* works. Many adverbs also follow *very* (*very slowly*), so use this together with the other tests."],
      ["Often movable; changes a verb or a whole clause","Adverb","*Slowly, she left. / She left slowly.* An adverb can often move in the sentence."]
    ]},
    {id:"e5u4-l1-x4", type:"spot", q:"Mei writes this sentence. Tap each word that is a **noun**.", ask:"is a noun", parts:[
      "On ", {t:"Tuesday", flag:true, why:"A noun: it names a time, and it can be the subject (*Tuesday is busy*)."}, ", the ", {t:"old", flag:false, why:"An adjective: it comes before a noun and can follow *very*."}, " ", {t:"teacher", flag:true, why:"A noun: it follows *the* and has a plural (*teachers*)."}, " ", {t:"gave", flag:false, why:"A verb: it has a past form (*give, gave, given*)."}, " a quick ", {t:"talk", flag:true, why:"A noun here: it follows *a quick* and could be plural (*talks*). In *They talk*, it would be a verb."}, " about ", {t:"kindness", flag:true, why:"A noun: it names a quality, but it follows a preposition and behaves like other nouns."}, "."
    ]},
    {id:"e5u4-l1-x5", type:"sort", q:"Open class or closed class? Think about whether new words of this type are often added.", buckets:["Open class","Closed class"], items:[
      {t:"podcast", b:0, why:"A noun. New nouns appear all the time, so nouns are an open class."},
      {t:"the", b:1, why:"A determiner. Determiners are a small, almost fixed set."},
      {t:"selfie", b:0, why:"A new noun. It shows how an open class grows."},
      {t:"because", b:1, why:"A conjunction. Conjunctions form a closed class."},
      {t:"cringe (as in *a cringe moment*)", b:0, why:"An adjective use. Adjectives are an open class."},
      {t:"under", b:1, why:"A preposition. Prepositions are a closed class."}
    ]},
    {id:"e5u4-l1-x6", type:"number", q:"How many **nouns** are in this sentence? “My brother and his friend watch a film after work on Tuesday.”", answer:5, tol:0, unit:"nouns", why:"The nouns are *brother, friend, film, work* and *Tuesday*. *My* and *his* are determiners, *and* is a conjunction, *watch* is a verb, *a* is a determiner, and *after* and *on* are prepositions.", wrongs:[
      {v:3, tol:0, why:"This counts only people and things (*brother, friend, film*). *Work* and *Tuesday* are nouns too, even though one names an activity and the other a time."},
      {v:7, tol:0, why:"This counts *my* and *his* as nouns because they point to people. They are determiners. They come before a noun."}
    ], hint2:"Test each word: can it follow *the* or *a* and have a plural? *Work* can follow *the*. *Tuesday* can follow *this*."},
    {id:"e5u4-l1-x7", type:"order", q:"Put these steps in a sensible order for finding the class of an unfamiliar word in a sentence.", items:[
      {t:"Read the whole sentence and find the word’s position.", why:"Start with the evidence in front of you. Class depends on the sentence."},
      {t:"Look at the words next to it: what comes before and after?", why:"Neighbors such as *the*, *to* or *very* show the class."},
      {t:"Try the form tests: does it take *-s*, *-ed*, *-ing*, *-er*?", why:"Endings give extra evidence, but they are not enough alone."},
      {t:"Try a frame, or swap the word for a known word of the same class.", why:"If *thing* or *walk* fits where the word is, the class is probably the same."},
      {t:"Check a dictionary label for that use of the word.", why:"The dictionary confirms the result. It comes last so that you learn the method."}
    ]},
    {id:"e5u4-l1-x8", type:"explain", q:"Hana says: “My school taught that a noun is a person, place or thing. But my dictionary says *destruction* is a noun. Is the dictionary wrong?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what grammar uses instead of meaning, and give two tests.", model:"The dictionary is right. The school rule describes typical nouns, such as *teacher* or *table*, but it does not decide the class. Grammar decides the class by behavior. *Destruction* follows *the* (*the destruction of the bridge*), can be a subject, and has a plural form (*destructions*), so it passes the noun tests, even though it names an event. I would show her the same tests on *Tuesday* and *kindness*.", points:["Says that the dictionary is right and the school rule is only a rough guide", "Says that class is decided by behavior (form and function), not meaning", "Gives at least one test that *destruction* passes (follows *the*, subject, plural)", "Gives or hints at another example, such as *Tuesday* or *kindness*"]}
   ],
   apply:{
    intro:"These tasks use a free online dictionary and any text you like. Nothing needs an account.",
    tasks:[
     {t:"Test five words", how:[
       "Choose five words from a text you are reading. Include one that you think has more than one class.",
       "For each word, write the sentence it was in. Then write one form test and one function test, and say what the result is.",
       "Open the Cambridge Dictionary (dictionary.cambridge.org) or Merriam-Webster (merriam-webster.com). Look up each word and check the class label for your sentence. Did the dictionary agree with your tests?"
     ], write:"Word 1: sentence… form test… function test… result… dictionary label…"},
     {t:"Hunt for words with several classes", how:[
       "Look up *round*, *back*, *right*, *light* and *fast* in the Cambridge Dictionary. Note every class that each word has.",
       "Write one short sentence for each class of each word. You should have at least ten sentences.",
       "Choose one word and write two sentences, one for each of two classes. Explain in one line which test shows the difference."
     ], write:"Word… class… my sentence… The test that shows the difference is…"},
     {t:"Sort a paragraph into open and closed classes", how:[
       "Copy a paragraph of about 60 words from a news site or a textbook.",
       "Underline every closed-class word (*the, of, and, in, she, can, because* …). Count them.",
       "Count the words in the paragraph. Which group is bigger, and which carries more of the meaning? Write two sentences."
     ], write:"Closed-class words: … out of … words. The meaning is carried by…"}
    ],
    proof:"A table of five words with form test, function test, result and dictionary label. Ten sentences showing several classes for common words. One marked paragraph with the closed-class count."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, section “Lexical categories”", note:"Look for how the book uses form and function to decide a word’s category."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u4-l2", title:"The big four and the tricky cases", minutes:55,
   hook:{q:"Which sentence is correct? (a) *She drives fast.* (b) *She drives fastly.*", options:["Only (a)","Only (b)","Both are correct","Neither is correct"], answer:0, reveal:"**Only (a).** The word *fast* is an adjective (*a fast car*) and also an adverb (*She drives fast*). English has no everyday word *fastly*. Many learners add *-ly* by habit, because *quick* becomes *quickly*. But *-ly* is a common clue, not a rule. This lesson looks at the four open classes and the words that do not follow the pattern."},
   goals:[
     "Describe nouns, verbs, adjectives and adverbs by form and function",
     "Separate count nouns from mass nouns, and gradable adjectives from non-gradable ones",
     "Handle tricky words: fast, hard and hardly, late and lately, well, and adjectives that end in -ly",
     "Explain why the adverb class has been called a catch-all, and use a corpus to check a usage"
   ],
   learn:[
    {h:"Nouns and verbs", body:[
      {lead:"Nouns and verbs are the two biggest classes. Nearly every sentence has at least one of each."},
      "A **noun** names something: a person, an object, an idea, a time or an event. Its form tests are plural *-s* and possessive *’s*. Its function is to head a noun phrase: *the old bridge*, *her quick answer*. English nouns divide into two groups that learners need to know.",
      {table:[["Kind","What it does","Examples"],["[[hew-count-noun|Count noun]]","Can be counted. Has a plural. Takes *a/an*, *many*, *few*.","*chair, idea, student*: a chair, three chairs, many ideas"],["[[hew-mass-noun|Mass noun]]","Is not counted one by one. Has no plural. Takes *much*, *a little*.","*information, advice, rice, furniture*: much information, a little advice"]]},
      "Some words are count in one sense and mass in another: *two coffees* (cups) and *some coffee* (the drink). The class depends on the use, as in Lesson 1. A common learner error is to add *-s* to a mass noun: *informations, furnitures, advices*. The standard forms are *information, furniture, advice*, or *a piece of advice*.",
      {h:"Compared with Japanese"},
      "Japanese nouns are usually not marked for plural. *Hon* (本) can mean “a book” or “books”, and the context decides. So the count/mass choice in English, and the *-s*, are new things to learn. This is a normal difficulty and not a sign of poor English.",
      "A **verb** names an action, an event or a state, and it has the most forms of any class. A regular verb has four forms. An irregular verb can have five.",
      {table:[["Form","Regular verb: *walk*","Irregular verb: *sing*","Used in"],["Base","walk","sing","*to walk*, *They walk*"],["-s form","walks","sings","*She walks*"],["Past","walked","sang","*She walked*"],["-ing form","walking","singing","*She is walking*"],["Past participle","walked","sung","*She has walked*"]]},
      "In regular verbs the past and the past participle look the same. In irregular verbs they are often different (*sang, sung*), and *be* has the most forms: *be, am, is, are, was, were, been, being*. Verbs also divide into **main verbs** (*walk, seem, own*) and **auxiliary verbs** (*can, have, do*). Lesson 3 covers auxiliaries."
    ]},
    {h:"Adjectives", body:[
      "An **adjective** says something about a noun. It has two positions, and that is a useful test.",
      {list:[
        "**Before a noun** (attributive use): *a tall man, an interesting idea.*",
        "**After *be*, *seem* or *become*** (predicative use): *The man is tall. The idea seems interesting.*"
      ]},
      "Most adjectives can do both. A few are limited to one position. *Main* works before a noun (*the main reason*) but not after *be* (*The reason is main*). *Asleep* works after *be* (*The child is asleep*) but not before a noun (*the asleep child*). These are small facts, but they help to separate adjectives from other classes.",
      {h:"Gradable and non-gradable adjectives"},
      "A [[hew-gradable|gradable]] adjective names a quality that can have more or less of it. You can put *very* before it, and you can compare it: *very tall, taller, the tallest, more expensive*. A **non-gradable** adjective names a quality that is a yes-or-no matter: *dead, wooden, Japanese, daily, main*. Normally you do not say *very wooden*. If a noun is made of wood, it is wooden or it is not.",
      {table:[["Gradable","Non-gradable"],["tall, expensive, clever, warm","dead, wooden, Japanese, daily"],["*very tall, taller, the tallest*","*completely dead, a wooden box, a daily visit*"]]},
      "The rule for *-er* and *-est* is a tendency. Short adjectives usually take the endings (*taller, tallest*). Long adjectives take *more* and *most* (*more expensive*). Two-syllable adjectives vary: *happier* but *more careful*. When a form feels wrong, check a dictionary.",
      {h:"-ing and -ed adjectives"},
      "Many learners mix up *boring/bored*, *interesting/interested* and *tiring/tired*. The *-ing* form describes the **cause**. The *-ed* form describes the **person who has the feeling**.",
      {ex:"The film is boring.        (the film causes boredom)\nI am bored.                (I feel boredom)\nThe news is surprising.    (it causes surprise)\nWe were surprised.         (we felt surprise)", label:"Cause and feeling", mono:true},
      {h:"Compared with Japanese"},
      "Japanese has two kinds of adjectives. An *i*-adjective such as *takai* (高い, “tall, high, expensive”) changes for tense, like a verb: *takakatta* (高かった) “was tall”. A *na*-adjective such as *kirei* (きれい, “pretty, clean”) is followed by *da* or *na*. English adjectives do not change for tense or number. The verb *be* carries the tense: *was tall*. So *He was tall* is correct."
    ]},
    {h:"Adverbs: a catch-all class", body:[
      "An **adverb** changes a verb (*runs quickly*), an adjective (*very tall*), another adverb (*quite slowly*), or a whole clause (*Probably, it will rain*). Adverbs have the weakest form tests, so the function test matters most. An adverb can often move in the sentence: *Slowly, he left. He slowly left. He left slowly.*",
      "The adverb class holds many different words. Grammarians have long called it a catch-all class: traditional grammars put there any word that did not fit another class. Here are the main kinds.",
      {table:[["Kind","Examples","What it tells you"],["Manner","*slowly, carefully, well, hard*","how"],["Time and frequency","*soon, yesterday, often, never*","when, how often"],["Place","*here, abroad, upstairs*","where"],["Degree","*very, quite, too, almost*","how much"],["Sentence adverbs","*probably, luckily, however*","the speaker’s view, or a link to the last sentence"]]},
      "Many adverbs end in *-ly*, made from an adjective: *quick → quickly*, *careful → carefully*. But the ending is not a test. *Soon, here, never* and *very* have no *-ly*, and *friendly* has *-ly* but is an adjective.",
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="e5u4b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="50" y="14" width="240" height="40" rx="8" stroke-width="2"/><text x="170" y="39" text-anchor="middle">What does the word change?</text><path class="d-ink" d="M120 56L89 90" stroke-width="2" marker-end="url(#e5u4b)"/><path class="d-ink" d="M220 56L251 90" stroke-width="2" marker-end="url(#e5u4b)"/><rect class="d-lup" x="14" y="94" width="150" height="62" rx="8" stroke-width="2"/><text class="s" x="89" y="118" text-anchor="middle">a noun</text><text x="89" y="140" text-anchor="middle">adjective</text><rect class="d-gold" x="176" y="94" width="150" height="62" rx="8" stroke-width="2"/><text class="s" x="251" y="112" text-anchor="middle">a verb, adjective,</text><text class="s" x="251" y="128" text-anchor="middle">adverb or clause</text><text x="251" y="147" text-anchor="middle">adverb</text><text class="s" x="89" y="182" text-anchor="middle">a fast car</text><text class="s" x="251" y="182" text-anchor="middle">drives fast</text><text class="s" x="170" y="222" text-anchor="middle">Some words do both: fast, hard, early, late</text></svg>', alt:"A decision chart. A box asks what the word changes. If it changes a noun, the word is an adjective, as in a fast car. If it changes a verb, adjective, adverb or clause, it is an adverb, as in drives fast. A note says some words do both, such as fast, hard, early and late.", cap:"The class comes from what the word changes. Fast changes a noun in one sentence and a verb in the other."}
    ]},
    {h:"The tricky cases", body:[
      "These are the words that cause most learner questions. Each has a reason, so you do not need to memorize a list blindly.",
      {table:[["Word","As adjective","As adverb","Note"],["fast","*a fast car*","*She drives fast.*","No *fastly*."],["hard","*a hard test*","*He works hard.*","*Hardly* is a different word."],["hardly","","*She hardly slept.*","Means “almost not”."],["late","*a late bus*","*We arrived late.*","*Lately* means “recently”."],["well","*I am well.* (healthy)","*She plays well.*","The adverb of *good*."],["early","*an early train*","*They left early.*","Ends in *-ly* but is both."]]},
      "Pairs such as *high/highly* and *near/nearly* also have different meanings. *She jumped high* is about height. *A highly paid job* means “very well paid”. *It is nearly noon* means “almost noon”, and *come near* means “come close”. When a word has both a plain adverb and an *-ly* adverb, the meanings often differ. Check a dictionary.",
      {h:"Adjectives that end in -ly"},
      "*Friendly, lovely, lonely, lively, silly, ugly, elderly* and *costly* are adjectives. A few large dictionaries list the adverb *friendlily*, but it is very rare, and most speakers avoid it. To express the idea, use a phrase: *She spoke in a friendly way* or *She spoke in a friendly manner*. Some words, such as *daily, weekly* and *early*, are both adjectives and adverbs: *a daily visit, They meet daily.*",
      {warn:"Do not add *-ly* to every adjective and do not remove it from every adverb. *Hard* and *fast* are adverbs without it. *Hardly* and *lately* are adverbs with a new meaning."},
      {h:"A corpus check"},
      "A **corpus** is a large collection of real texts that you can search. The Corpus of Contemporary American English (COCA) at english-corpora.org is free after you register. It can search by class. A search for *hard* in the adverb class shows phrases such as *work hard* and *try hard*. A search for *hard* in the adjective class shows *hard work* and *hard time*. You will use this in the Apply tasks.",
      {h:"Habits and misconceptions"},
      {list:[
        "**“-ly makes an adverb.”** Often, but not always. *Friendly* and *lovely* are adjectives. *Fast* and *hard* are adverbs with no *-ly*.",
        "**“Adverbs only change verbs.”** They also change adjectives (*very tall*), other adverbs (*quite slowly*) and whole clauses (*Luckily, nobody was hurt*).",
        "**“*Good* and *well* are the same.”** *Good* is an adjective (*a good player*). *Well* is usually its adverb (*She plays well*). *Well* is also an adjective meaning “healthy”.",
        "**“All adjectives can follow *very*.”** Only gradable ones can. *Very dead* and *very wooden* are not normal."
      ]}
    ]}
   ],
   try:[
    {id:"e5u4-l2-x1", type:"sort", q:"Is the word in capitals an adjective or an adverb in its sentence?", buckets:["Adjective","Adverb"], items:[
      {t:"“It is a FAST car.”", b:0, why:"It comes before the noun *car* and tells us about it. Adjective."},
      {t:"“She drives FAST.”", b:1, why:"It changes the verb *drives*. Adverb. There is no *fastly*."},
      {t:"“I did a HARD test.”", b:0, why:"It comes before *test*. Adjective."},
      {t:"“He works HARD.”", b:1, why:"It changes the verb *works*. Adverb with no *-ly*."},
      {t:"“They left on an EARLY train.”", b:0, why:"It comes before *train*. Adjective, although it ends in *-ly*."},
      {t:"“They left EARLY.”", b:1, why:"It changes the verb *left*. Adverb."},
      {t:"“She plays WELL.”", b:1, why:"It changes the verb *plays* and tells us how. Adverb."},
      {t:"“I don’t feel WELL today.”", b:0, why:"It follows *feel* and describes the speaker, like *I feel ill*. Adjective meaning “healthy”."}
    ]},
    M("e5u4-l2-x2","Which word is **not** an adverb in the sentence?",1,[
      ["“She spoke quickly.” (*quickly*)","An adverb: it changes the verb *spoke*."],
      ["“Her answer was friendly.” (*friendly*)","Right. It ends in *-ly* but follows *was* and describes *answer*. It is an adjective."],
      ["“We often walk home.” (*often*)","An adverb: it tells how often. It has no *-ly*."],
      ["“It is very warm.” (*very*)","An adverb of degree: it changes the adjective *warm*."]
    ]),
    {id:"e5u4-l2-x3", type:"match", q:"Match each word to its meaning in the sentence.", pairs:[
      ["hardly (She hardly slept.)","almost not","*Hardly* is not the adverb of *hard*. It has a different meaning."],
      ["lately (I have been busy lately.)","recently","*Late* means “not on time”, and *lately* means “in the past few weeks”."],
      ["nearly (It is nearly noon.)","almost","*Near* means “close”, and *nearly* means “almost”."],
      ["highly (a highly paid job)","to a great degree","*High* is about height, and *highly* is about degree."]
    ]},
    {id:"e5u4-l2-x4", type:"spot", q:"Kaito, a first-year undergraduate in information engineering, writes about his English study. Tap each word that needs a **change** in standard written English.", ask:"needs a change", parts:[
      "“My English is improving ", {t:"fastly", flag:true, why:"There is no standard modern *fastly*. The adverb is *fast*: *improving fast*. (*Quickly* is also fine.)"}, ". I study ", {t:"hard", flag:false, why:"Correct. *Hard* is an adverb here. *Hardly* would mean “almost not”, which is the opposite."}, " every day, and my teacher is very ", {t:"friendly", flag:false, why:"Correct. It is an adjective after *is*, and it can follow *very*."}, ". Last week I did the test ", {t:"good", flag:true, why:"*Good* is an adjective. The adverb for *did the test* is *well*: *did the test well*. (Informal speech often uses *good*, but writing should use *well*.)"}, ", but I arrived ", {t:"late", flag:false, why:"Correct. *Late* is an adverb here, meaning “after the time”. *Lately* would mean “recently”."}, ".”"
    ]},
    {id:"e5u4-l2-x5", type:"sort", q:"Can the adjective follow *very* and be compared (*taller*, *more*)? Sort the adjectives.", buckets:["Gradable","Non-gradable"], items:[
      {t:"tall", b:0, why:"*Very tall, taller, tallest* all work."},
      {t:"expensive", b:0, why:"*Very expensive, more expensive, the most expensive.*"},
      {t:"dead", b:1, why:"Dead is an all-or-nothing quality. People say *completely dead*, not *very dead*, in normal use."},
      {t:"wooden", b:1, why:"A box is made of wood or it is not. *Very wooden* is not normal for the material meaning."},
      {t:"Japanese", b:1, why:"A nationality adjective is not gradable in its usual sense."},
      {t:"clever", b:0, why:"*Very clever, cleverer, the cleverest.*"}
    ]},
    {id:"e5u4-l2-x6", type:"number", q:"How many **adverbs** are in this sentence? “She probably worked very hard, and she never complained loudly.”", answer:5, tol:0, unit:"adverbs", why:"The adverbs are *probably* (a sentence adverb), *very* (degree, changing *hard*), *hard* (manner, changing *worked*), *never* (frequency) and *loudly* (manner).", wrongs:[
      {v:2, tol:0, why:"This counts only the words that end in *-ly* (*probably, loudly*). Many adverbs do not end in *-ly*."},
      {v:4, tol:0, why:"This misses one adverb. Check *very*, which changes the adverb *hard*, and *never*, which tells how often."}
    ], hint2:"Test each word: what does it change? *Very* changes *hard*. *Never* changes *complained*."},
    M("e5u4-l2-x7","In which sentence is *well* an **adjective**?",2,[
      ["“She plays the piano well.”","Here *well* changes the verb *plays*. It is an adverb of manner."],
      ["“He cooks very well.”","*Well* changes *cooks* and follows the adverb *very*. Adverb."],
      ["“I don’t feel well today.”","Right. *Well* follows *feel* and describes the speaker’s health. It is an adjective."],
      ["“Well done!”","*Well* changes the participle *done*. It is an adverb."]
    ]),
    {id:"e5u4-l2-x8", type:"explain", q:"Sione, a learner of English, asks: “*Quick* becomes *quickly*, so *friendly* must be the adverb of *friend*. How do I say that she talked in a friendly way, with one word?” Explain what you would tell him.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what class *friendly* is, then give a useful alternative.", model:"*Friendly* already ends in *-ly*, but it is an adjective, made from the noun *friend* plus *-ly*. The adverb *friendlily* is very rare, so there is no natural one-word form. The usual solution is a phrase, such as *She talked in a friendly way* or *She talked in a friendly manner*. So the *-ly* ending is a clue for many adverbs, but it is not a test, and *fast* and *hard* show the opposite pattern.", points:["Says that friendly is an adjective, not an adverb", "Explains that -ly is a clue, not a test (it can make adjectives from nouns)", "Gives a way to say the idea, such as in a friendly way", "Mentions or hints at a contrasting case, such as fast or hard"]}
   ],
   apply:{
    intro:"These tasks use the Corpus of Contemporary American English (COCA, english-corpora.org, free with a registered account; daily search limits apply) and a free dictionary.",
    tasks:[
     {t:"Corpus check: hard as adjective and adverb", how:[
       "Go to english-corpora.org and open COCA. Sign in or register with the free account.",
       "Search for *hard*, and use the part-of-speech (POS) list on the search page to choose adjective. In the example lines, note three words that often come right after it. Then search again with adverb chosen, and note three words that often come right before it. (The search syntax changes between versions of the site, so use the POS list or the site’s help page.)",
       "Do the same for *hardly*. Write what you see: which meaning does each word have?",
       "Write two sentences of your own for each of the three searches."
     ], write:"hard (adjective) next to… hard (adverb) next to… hardly means…"},
     {t:"Fix the -ly habit", how:[
       "Write six sentences that use *fast, hard, early, late, friendly* and *lovely*.",
       "For each sentence, decide whether the word is an adjective or an adverb. Check the Cambridge Dictionary label.",
       "Rewrite any sentence that you wrote as *fastly*, *friendlily* or similar. Do not use *-ly* where the dictionary does not."
     ], write:"My six sentences, with the class of each word…"},
     {t:"Count and sort in a paragraph", how:[
       "Take a paragraph of about 80 words from a news site.",
       "Circle every adverb. For each, note what it changes (a verb, an adjective, another adverb or a clause).",
       "Count how many end in *-ly* and how many do not. Write one sentence on what you found."
     ], write:"Adverbs I found… With -ly: … Without: …"}
    ],
    proof:"A short table of the corpus results for *hard* and *hardly* with your own sentences. Six sentences with word classes checked in a dictionary. One paragraph with its adverbs circled and counted."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, section “Lexical categories”", note:"Look for how the book describes nouns, verbs, adjectives and adverbs by form and position."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u4-l3", title:"The small words", minutes:55,
   hook:{q:"Which kind of word is the **most frequent** in a large collection of English text?", options:["Nouns, such as *time* and *people*","Main verbs, such as *go* and *make*","Small grammar words, such as *the*, *of*, *and* and *to*","Adjectives, such as *good* and *new*"], answer:2, reveal:"**Small grammar words.** In large English corpora, the most frequent words are function words: *the, of, and, to, a, in*. They carry little meaning alone, and they are weak in speech (Unit 3). But nobody can build an English sentence without them. This lesson sorts these words into their classes and shows what each class does."},
   goals:[
     "Identify determiners, pronouns, prepositions, conjunctions and auxiliary verbs, and say what each does",
     "Tell a determiner (*my*) from a pronoun (*mine*)",
     "Use the four auxiliary tests (negation, inversion, code, emphasis) to separate auxiliary verbs from main verbs",
     "Explain why articles and prepositions are hard to learn and what helps"
   ],
   learn:[
    {h:"Small words, big jobs", body:[
      {lead:"Five closed classes hold the words that build phrases and join them into sentences."},
      "In Lesson 1 you met the idea of a closed class: a small group of words that almost never gets a new member. Unit 3 called most of these words function words. Here we look at what each class does, using the same kind of test as before.",
      {table:[["Class","What it does","Examples"],["[[hew-determiner|Determiner]]","Comes at the start of a noun phrase and says which one or how many","*the, a, this, my, some, every, two*"],["[[hew-pronoun|Pronoun]]","Stands in place of a whole noun phrase","*she, them, mine, someone, who*"],["[[hew-preposition|Preposition]]","Begins a phrase that shows a relation (place, time, cause …)","*in, on, at, by, for, after*"],["[[hew-conjunction|Conjunction]]","Joins words, phrases or clauses","*and, but, or, because, although*"],["[[hew-auxiliary|Auxiliary verb]]","Helps a main verb: tense, questions, negatives, possibility","*be, have, do, can, will, must*"]]},
      {fig:'<svg viewBox="0 0 340 196"><text x="170" y="20" text-anchor="middle">Small words build phrases</text><rect class="d-rose" x="8" y="36" width="76" height="36" rx="6" stroke-width="2"/><text x="46" y="59" text-anchor="middle">in</text><rect class="d-lup" x="90" y="36" width="76" height="36" rx="6" stroke-width="2"/><text x="128" y="59" text-anchor="middle">the</text><rect class="d-sage" x="172" y="36" width="76" height="36" rx="6" stroke-width="2"/><text x="210" y="59" text-anchor="middle">old</text><rect class="d-gold" x="254" y="36" width="76" height="36" rx="6" stroke-width="2"/><text x="292" y="59" text-anchor="middle">house</text><text class="s" x="46" y="92" text-anchor="middle">preposition</text><text class="s" x="128" y="92" text-anchor="middle">determiner</text><text class="s" x="210" y="92" text-anchor="middle">adjective</text><text class="s" x="292" y="92" text-anchor="middle">noun</text><path class="d-ink" d="M92 108V116H330V108" stroke-width="2"/><text x="211" y="136" text-anchor="middle">noun phrase: the old house</text><path class="d-ink" d="M8 150V158H330V150" stroke-width="2"/><text x="169" y="178" text-anchor="middle">prepositional phrase: in the old house</text></svg>', alt:"Four word boxes in a row: in, the, old, house, labeled preposition, determiner, adjective and noun. A bracket under the last three words marks the noun phrase the old house. A longer bracket under all four marks the prepositional phrase in the old house.", cap:"The determiner opens the noun phrase. The preposition opens a bigger phrase that contains it."}
    ]},
    {h:"Determiners and pronouns", body:[
      "A determiner comes at the start of a noun phrase, before any adjectives: *the old house, my two best friends*. The main kinds are articles (*a, an, the*), demonstratives (*this, that, these, those*), possessives (*my, your, her, our, their*) and quantity words (*some, any, many, much, every, each, no*). Numbers such as *two* often work in the same position.",
      "A simple test: you normally cannot use two of the main determiners together. *The my book* and *a this house* are not possible. Some words can come before a determiner, such as *all the books* and *both my parents*, but that is a special pattern.",
      "A pronoun does something different. It replaces a whole noun phrase. *The tall girl who lives next door* can become *she*. This is why *my* and *mine* are in different classes.",
      {table:[["","Determiner (before a noun)","Pronoun (alone)"],["I","*my book*","*mine*: The book is mine."],["you","*your bag*","*yours*: The bag is yours."],["they","*their house*","*theirs*: The house is theirs."]]},
      {ex:"This is my book.         (my + noun: determiner)\nThe book is mine.        (mine stands alone: pronoun)\nThis is mine book.       (not possible: mine cannot go before a noun)", label:"Worked example", mono:true},
      "Pronouns come in several kinds: personal (*she, them*), possessive (*mine, yours*), reflexive (*herself, themselves*), demonstrative (*this is mine*), indefinite (*someone, nothing*), and question or relative words (*who, which*). The same word can be in two classes: *this* is a determiner in *this book* and a pronoun in *I like this*.",
      {h:"Articles and the choice of *a* and *the*"},
      "Choose *the* when the speaker and the listener both know which one is meant: *Please close the door.* Choose *a* when the thing is new or one of many: *I saw a dog.* After the first mention, the noun is known, so it takes *the*: *I saw a dog. The dog was big.* Plural and mass nouns often have no article: *Dogs bark. Rice is cheap.*",
      {h:"Compared with Japanese"},
      "Japanese has no articles. *Hon o yonda* (本を読んだ) can mean “I read a book”, “I read the book” or “I read books”. A Japanese learner has to decide, for every noun, whether it is known, new or general. This is a real difficulty for many learners, and it is the reason that *a/the* mistakes stay for a long time. Reading texts and noticing the choice helps more than learning a long rule list."
    ]},
    {h:"Prepositions and conjunctions", body:[
      "A preposition usually comes before a noun phrase and forms a phrase with it: *in the box, after lunch, by bus, for her*. It shows a relation: place (*in, on, under*), time (*at, after, during*), means (*by*), purpose (*for*) and others. Some words work both as prepositions and in other roles: *in the house* but *Come in!*",
      "Prepositions are hard because the choice is often a fixed habit. We say *in the morning* but *at night*. We say *on Monday* but *in May* and *at 6:00*. There are some patterns (*on* for days and dates, *in* for months and years), but the exceptions are many. You cannot work them out from meaning. Unit 5 shows how chunks and collocations help.",
      {h:"Compared with Japanese"},
      "Japanese uses particles that come *after* the noun. One particle often covers many English prepositions. *Ni* (に) is “to” in *Tōkyō ni iku* (東京に行く, “go to Tokyo”) and “in” in *Tōkyō ni sumu* (東京に住む, “live in Tokyo”). *De* (で) is “at” in *eki de* (駅で, “at the station”) and “by” in *densha de* (電車で, “by train”), but English also has *on the train*. So there is no one-to-one match, and a translation habit leads to errors.",
      {h:"Conjunctions"},
      "A **coordinating conjunction** joins two things of the same kind: *and, but, or*. It must stand between the two parts. A **subordinating conjunction** introduces a dependent clause: *because, although, if, when, that*. The dependent clause can often move to the front.",
      {ex:"We stayed home because it rained.\nBecause it rained, we stayed home.      (the clause moves: subordinating)\n\nWe stayed home, but it was fun.\nBut it was fun, we stayed home.            (not possible: coordinating)", label:"A test: can the clause move?", mono:true},
      "This test does not cover every case, but it is a good start. Learners often use a coordinator where English needs a subordinator, or add both: *Although it rained, but we went out.* Choose one. The connecting word is enough."
    ]},
    {h:"Auxiliary verbs", body:[
      "Auxiliary verbs are verbs that help a main verb. The list is short: *be, have* and *do*, and the **modal verbs** *can, could, may, might, will, would, shall, should* and *must*. A modal adds an idea such as ability, possibility or obligation. It has no *-s* form (*she can*, not *she cans*) and it is followed by the base verb (*she can swim*).",
      "How do you tell an auxiliary from a main verb? Use the four properties that descriptive grammars call NICE. An auxiliary can do all four. A main verb cannot.",
      {table:[["Property","Auxiliary: *can* / *has*","Main verb: *like*"],["**N**egation: add *n’t* directly","*She can’t swim. She hasn’t left.*","*She likes it* → not *She likesn’t*. English adds *do*: *She doesn’t like it.*"],["**I**nversion: move before the subject for a question","*Can she swim? Has she left?*","*Likes she it?* is not normal. English adds *do*: *Does she like it?*"],["**C**ode: stand for the whole verb phrase","*She can swim, and so can he.*","*She likes tea, and so does he.*"],["**E**mphasis: carry the stress","*She CAN swim.*","*She DOES like it.*"]]},
      "When there is no other auxiliary, English uses **do** as a helper. This is called *do*-support: *Does she like it? She doesn’t like it.* The main verb then returns to its base form (*like*, not *likes*). Learners who write *Does she likes it?* or *She don’t like it* are applying part of the rule. Notice that **be** and **have** can be main verbs too. *She has a car* has *have* as a main verb. *She has finished* has *have* as an auxiliary.",
      {h:"Compared with Japanese"},
      "Japanese has no helper like *do*. The negative is part of the verb: *tabenai* (食べない, “do not eat”), and a question is formed with the particle *ka* (か). So English *do*-support is new, and it is normal to forget it when speaking fast."
    ]},
    {h:"Why learners cannot skip them", body:[
      "A learner can skip many nouns and still be understood. A learner who skips *the*, *of*, *can* and *to* gets a message like a telegram. These words show the shape of the sentence: who does what, what belongs to whom, when, and how sure we are.",
      {list:[
        "**They are weak in speech.** Unit 3 showed that *to* is /tə/ and *of* is /əv/. You cannot easily hear them, so you must learn them from text and from careful listening.",
        "**They have few meanings, many uses.** *To* works in *go to school*, *want to go* and *give it to her*. Learn each use as a pattern.",
        "**They rarely translate one to one.** Articles, particles and *do*-support differ between English and Japanese, so a word-by-word translation fails.",
        "**They are learned best in chunks.** *In the morning, a cup of tea, I don’t think so, as soon as.* Chunks keep the small word with its neighbors."
      ]},
      {tip:"When you read, notice the small words that come before and after the main words. Copy useful phrases into a notebook with the preposition and the article included, for example *depend on, interested in, at the moment*."}
    ]}
   ],
   try:[
    {id:"e5u4-l3-x1", type:"sort", q:"Sort each small word into its class.", buckets:["Determiner","Pronoun","Preposition","Conjunction"], items:[
      {t:"the", b:0, why:"It starts a noun phrase: *the house*. Determiner."},
      {t:"she", b:1, why:"It replaces a whole noun phrase (*the tall girl*). Pronoun."},
      {t:"under", b:2, why:"It begins a phrase that shows place: *under the table*. Preposition."},
      {t:"because", b:3, why:"It introduces a dependent clause: *because it rained*. Conjunction."},
      {t:"my", b:0, why:"It comes before a noun: *my book*. Determiner."},
      {t:"mine", b:1, why:"It stands alone, with no noun after it: *The book is mine*. Pronoun."},
      {t:"after", b:2, why:"In *after lunch*, it begins a phrase with a noun phrase. Preposition."},
      {t:"but", b:3, why:"It joins two clauses of equal rank. Conjunction."}
    ]},
    M("e5u4-l3-x2","Which sentence is correct, and why?",1,[
      ["“This book is my.”","*My* is a determiner. It needs a noun after it, so it cannot stand alone."],
      ["“This book is mine.”","Right. *Mine* is a possessive pronoun, and it can stand alone."],
      ["“This is mine book.”","*Mine* is a pronoun. It cannot come before a noun. Use *my book*."],
      ["“This is the my book.”","Two determiners (*the* and *my*) cannot go together in this way."]
    ]),
    {id:"e5u4-l3-x3", type:"match", q:"Match each auxiliary test to a sentence that shows it.", pairs:[
      ["Negation with *n’t*","She hasn’t left.","The auxiliary *has* takes *n’t* directly."],
      ["Inversion for a question","Can she swim?","The auxiliary *can* moves in front of the subject."],
      ["Code (the verb is not repeated)","She can swim, and so can he.","*So can he* means *he can swim*. The auxiliary *can* stands in for the whole verb phrase, so *swim* is not repeated."],
      ["Emphasis","She CAN swim.","The auxiliary carries the stress."]
    ]},
    {id:"e5u4-l3-x4", type:"spot", q:"Ana is learning English. Tap each word that needs a **change** in standard English.", ask:"needs a change", parts:[
      "“I will meet her ", {t:"in", flag:true, why:"*On* goes with days: *on Monday*. *In* goes with months and years."}, " Monday. She is ", {t:"a", flag:true, why:"*Engineer* starts with a vowel sound, so the article is *an*: *an engineer*."}, " engineer and she works ", {t:"at", flag:false, why:"Correct. *At a hospital* is the usual way to give a workplace."}, " a hospital. She ", {t:"don’t", flag:true, why:"With *she*, the auxiliary is *doesn’t*: *She doesn’t like coffee*."}, " like coffee, but she ", {t:"can", flag:false, why:"Correct. A modal is followed by the base verb: *she can drink tea*."}, " drink tea.”"
    ]},
    {id:"e5u4-l3-x5", type:"number", q:"How many **function words** (closed-class words) are in this sentence? “She can speak English and she will teach it to her friends in the evening.”", answer:10, tol:0, unit:"words", why:"The function words are *she, can, and, she, will, it, to, her, in, the*: three pronouns, two auxiliaries, one conjunction, two prepositions and two determiners. The content words are *speak, English, teach, friends* and *evening*.", wrongs:[
      {v:5, tol:0, why:"This counts the content words (*speak, English, teach, friends, evening*). The question asks for the function words."},
      {v:7, tol:0, why:"This forgets the three pronouns (*she, she, it*). Pronouns are a closed class and are function words."}
    ], hint2:"Mark the open-class words first (nouns, main verbs). Every other word is closed class."},
    {id:"e5u4-l3-x6", type:"sort", q:"Is the conjunction coordinating (joins equals, cannot move to the front) or subordinating (starts a dependent clause)?", buckets:["Coordinating","Subordinating"], items:[
      {t:"and", b:0, why:"It joins equal parts and must stand between them."},
      {t:"because", b:1, why:"It starts a dependent clause that can move: *Because it rained, we left.*"},
      {t:"but", b:0, why:"It joins two clauses of equal rank. *But it was fun, we stayed* is not possible."},
      {t:"although", b:1, why:"It starts a dependent clause: *Although it rained, we went out.*"},
      {t:"or", b:0, why:"It joins equal parts: *tea or coffee*."},
      {t:"if", b:1, why:"It starts a dependent clause: *If it rains, we will stay.*"}
    ]},
    M("e5u4-l3-x7","In which sentence is *have* an **auxiliary verb**?",1,[
      ["“They have a new house.”","Here *have* means “own” and is a main verb. In American English the question is *Do they have a new house?*"],
      ["“They have finished.”","Right. It helps the main verb *finished*, and it passes the tests: *They haven’t finished. Have they finished?*"],
      ["“They have lunch at noon.”","Here *have* means “eat” and is a main verb. The question is *Do they have lunch?*"],
      ["“They have a good time.”","*Have* is a main verb in this expression. It needs *do* in questions: *Do they have a good time?*"]
    ]),
    {id:"e5u4-l3-x8", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, asks: “Why do we say *in the morning* but *at night*? I cannot find a reason, and it makes me worry before I speak.” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say whether there is a reason, and give her a way to learn them.", model:"There is no meaning-based reason, so it is not a problem with her thinking. Preposition choices are often fixed habits of the language, and they are learned with the words around them. The best method is to learn them in chunks, such as *in the morning, in the afternoon, at night, on the weekend* (British English: *at the weekend*), and to say them aloud until they feel natural. Japanese particles such as *ni* do not match English prepositions one to one, so translating word by word does not help here. A mistake in a small word like this almost never stops a listener from understanding, so she can relax a little when she speaks.", points:["Says that there is no logical reason; it is a fixed habit of the language", "Suggests learning prepositions in chunks, with the nouns they go with", "Mentions that Japanese particles do not map one to one onto English prepositions, or that a translation habit does not help", "Is kind and reassures her that such errors rarely stop understanding"]}
   ],
   apply:{
    intro:"These tasks use a free dictionary and a short text or recording. Nothing needs an account.",
    tasks:[
     {t:"Run the NICE tests", how:[
       "Choose five verbs: *can, have, do, like, be*. For each one, write a negative, a question and an emphasis sentence, in standard English.",
       "Look at your sentences. Mark each verb as auxiliary (passes all four tests directly) or main (needs *do*).",
       "Find one verb that works as both an auxiliary and a main verb. Write one sentence for each use."
     ], write:"Verb… negative… question… emphasis… auxiliary or main… My dual-use verb: …"},
     {t:"Keep a chunk notebook for prepositions", how:[
       "Read a page of any English text. Find ten phrases that have a preposition: *depend on, in the morning, at the end, interested in*.",
       "Write each phrase whole, with the article. Do not write the preposition alone.",
       "Look up two of the phrases in the Cambridge Dictionary and copy one example sentence for each."
     ], write:"My ten chunks… The two examples…"},
     {t:"Count the small words in a transcript", how:[
       "Take 100 words from a transcript of a talk or a news story.",
       "Count the determiners, pronouns, prepositions, conjunctions and auxiliaries. Write each total.",
       "Compare: which class had the most? Write two sentences on what you found."
     ], write:"Determiners… Pronouns… Prepositions… Conjunctions… Auxiliaries… What I found…"}
    ],
    proof:"A table showing five verbs with the NICE results. A notebook page of ten chunks, with two dictionary examples. A count of the five small-word classes in a 100-word text."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Functional categories”", note:"Look for how the book describes determiners, auxiliaries and other small categories, and how they differ from the open classes."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u4-l4", title:"Building words: morphemes, roots and affixes", minutes:55,
   hook:{q:"How many meaningful parts (morphemes) are in the word *unhappiness*?", options:["One","Two","Three","Four"], answer:2, reveal:"**Three:** *un-* (“not”), *happy* (the core) and *-ness* (which makes a noun). The word has four syllables (*un-hap-pi-ness*) and eleven letters, but only three meaningful parts. A morpheme is not the same as a syllable. This lesson shows how to cut words into morphemes, how to tell the two kinds of word-building apart, and how endings change a word’s class and stress."},
   goals:[
     "Define morpheme, root, base, prefix and suffix, and cut a word into morphemes",
     "Separate inflection from derivation with simple tests",
     "Choose among *un-*, *in-*, *im-*, *il-* and *ir-* by pattern, and compare *-ness* with *-ity*",
     "Predict how a suffix changes the class of a word, and whether it moves the stress"
   ],
   learn:[
    {h:"Morphemes: the smallest meaningful parts", body:[
      {lead:"A word can have parts, and each part can carry meaning. The study of these parts is called morphology."},
      "A [[hew-morpheme|morpheme]] is the smallest piece of a word that has a meaning or a grammatical job. The word *cats* has two: *cat* (the animal) and *-s* (more than one). The word *unhappiness* has three: *un-*, *happy* and *-ness*.",
      "A morpheme is not the same as a syllable. *Cats* has one syllable and two morphemes. *Banana* has three syllables and one morpheme, because *ba-*, *-na-* and *-na* mean nothing alone. To find a morpheme, ask whether the piece appears in other words with the same meaning: *un-* appears in *unkind*, *unlock* and *unclear*, and *-s* appears in *dogs*, *books* and *ideas*.",
      {table:[["Word","Morphemes","How many"],["cats","cat + -s","2"],["unhappiness","un- + happy + -ness","3"],["rewriting","re- + write + -ing","3"],["teachers","teach + -er + -s","3"],["banana","banana","1"]]},
      "Spelling can change when morphemes join. *Happy* becomes *happi-* in *happiness*, and *write* loses its *e* in *writing*. The spelling changes, but the morpheme is the same. Some morphemes can stand alone as words. They are **free** morphemes: *happy, cat, write*. Others cannot. They are **bound** morphemes: *un-, -ness, -s, -ing*.",
      {key:"A morpheme is a piece of meaning or grammar, not a piece of sound. Count the meanings, not the syllables or the letters."}
    ]},
    {h:"Roots, bases and affixes", body:[
      "An **[[hew-affix|affix]]** is a bound morpheme added to a word. If it comes before, it is a **prefix** (*un-, re-, dis-*). If it comes after, it is a **suffix** (*-ness, -er, -ly*). English has many prefixes and suffixes, and very few other kinds.",
      "The [[hew-root|root]] is the core morpheme that carries the main meaning, with no affixes. In *unhappiness*, the root is *happy*. A **[[hew-base|base]]** is any form that an affix is added to. The base can be a root or a larger word. In *unfriendliness*, the root is *friend*. The base for *-ly* is *friend*. The base for *un-* is *friendly*. The base for *-ness* is *unfriendly*.",
      {fig:'<svg viewBox="0 0 340 304"><defs><marker id="e5u4c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Building a word step by step</text><rect class="d-sage" x="14" y="30" width="170" height="38" rx="8" stroke-width="2"/><text x="99" y="55" text-anchor="middle">friend</text><text class="s" x="196" y="54">noun (the root)</text><path class="d-ink" d="M99 70V96" stroke-width="2" marker-end="url(#e5u4c)"/><text class="s" x="112" y="88">+ -ly</text><rect class="d-lup" x="14" y="98" width="170" height="38" rx="8" stroke-width="2"/><text x="99" y="123" text-anchor="middle">friendly</text><text class="s" x="196" y="122">adjective</text><path class="d-ink" d="M99 138V164" stroke-width="2" marker-end="url(#e5u4c)"/><text class="s" x="112" y="156">+ un-</text><rect class="d-gold" x="14" y="166" width="170" height="38" rx="8" stroke-width="2"/><text x="99" y="191" text-anchor="middle">unfriendly</text><text class="s" x="196" y="190">adjective</text><path class="d-ink" d="M99 206V232" stroke-width="2" marker-end="url(#e5u4c)"/><text class="s" x="112" y="224">+ -ness</text><rect class="d-rose" x="14" y="234" width="170" height="38" rx="8" stroke-width="2"/><text x="99" y="259" text-anchor="middle">unfriendliness</text><text class="s" x="196" y="258">noun</text><text class="s" x="170" y="294" text-anchor="middle">Four morphemes: un + friend + ly + ness</text></svg>', alt:"Four boxes joined by downward arrows. Friend, a noun and the root. Add -ly to get friendly, an adjective. Add un- to get unfriendly, an adjective. Add -ness to get unfriendliness, a noun. A note says there are four morphemes.", cap:"Each step adds one affix to a base. Two steps change the class (noun to adjective, adjective to noun). One keeps it."},
      "Not every root can stand alone. Some **bound roots** appear in many words but are not words themselves. *-ject* is in *reject, inject, project* and *object*. *-ceive* is in *receive, perceive* and *conceive*. They come from Latin, and a dictionary with word histories shows the link.",
      {warn:"Do not cut a word just because its last letters look like an affix. *Corner* is not *corn + -er*. *Finger* is not *fing + -er*. Test whether the shorter part has the right meaning and shows up in related words."},
      {h:"Compared with Japanese"},
      "Japanese builds long words by adding endings to a verb stem. *Tabe-sase-rare-ta* (食べさせられた) means “was made to eat”: the stem *tabe-* (“eat”), the causative *-sase-*, the passive *-rare-* and the past *-ta*. English uses separate words for the same idea. Japanese also has affixes from Chinese-origin words that work like English ones: *fu-* (不) in *fukanō* (不可能, “impossible”), and *-sei* (性) in *kanōsei* (可能性, “possibility”). So the idea of an affix is not new to a Japanese learner."
    ]},
    {h:"Inflection and derivation", body:[
      "Suffixes do two different jobs. [[hew-inflection|Inflection]] gives a **grammatical form** of the same word. [[hew-derivation|Derivation]] makes a **new word** with a new meaning, and often a new class.",
      {table:[["","Inflection","Derivation"],["Job","Gives another form of the same word","Makes a new word"],["Class","Stays the same: *walk, walked* (both verbs)","Often changes: *kind* (adjective), *kindness* (noun)"],["Meaning","Grammar only: past, plural, comparison","New meaning: *teach*, *teacher*"],["Pattern","Regular, and it applies to almost all words in the class","Less regular: only some words take it"],["Position","Last, on the outside: *teach-er-s*","Inside, next to the root"],["Dictionary","Not listed as separate words","Often listed as a separate entry"]]},
      "English has only **eight** inflectional suffixes, which is a small number compared with many languages.",
      {table:[["Class","Inflectional suffixes","Examples"],["Nouns","plural *-s*, possessive *’s*","books, Maria’s"],["Verbs","*-s*, *-ed*, *-ing*, *-en/-ed* (participle)","walks, walked, walking, taken"],["Adjectives and adverbs","comparative *-er*, superlative *-est*","taller, tallest, faster"]]},
      "Many other suffixes are derivational: *-ness, -ity, -er* (a person who does it), *-ment, -ize, -ful, -less, -ly, -able*. Some suffixes look the same but do different jobs. The *-er* in *taller* is inflection, because it compares and the word stays an adjective. The *-er* in *teacher* is derivation, because it makes a noun meaning “a person who teaches”.",
      {tip:"A useful test: if the dictionary has a separate entry for the new form, and the meaning is more than grammar, it is probably derivation. *Walked* has no entry. *Walker* has one."},
      "Derivational affixes can stack on each other, but the inflection goes last. We say *teachers*, with the plural last, and *unhappier*, with *-er* on the outside. Prefixes also derive new words: *do/undo*, *agree/disagree*, *write/rewrite*."
    ]},
    {h:"un-, in-, im-, il- and ir-", body:[
      "English has several prefixes that mean “not”. The main ones are *un-*, *in-* and its variants, *dis-* and *non-*. A learner cannot choose by meaning, but there are patterns.",
      {list:[
        "**un-** is the most common and the most open. It attaches to many adjectives: *unhappy, unkind, unclear, unable*. It also attaches to verbs, with a different meaning, “reverse the action”: *untie, undo, unlock*.",
        "**in-** is a Latin prefix. It attaches to many adjectives of Latin origin: *inactive, incorrect, indirect, incomplete*.",
        "**im-**, **il-**, **ir-** are the same prefix, with the end changed to match the next sound. It is *im-* before *p, b, m* (*impossible, imbalance, immature*), *il-* before *l* (*illegal, illogical*) and *ir-* before *r* (*irregular, irrelevant*)."
      ]},
      "This change is an example of **assimilation**, the same kind of process you met in Unit 3 (*ten pounds* said as /tɛm paʊndz/). It happened in Latin, before these words came into English. The /n/ of *in-* became /m/ before /p/, /l/ before /l/ and /r/ before /r/. English kept these spellings, so *impossible* has *m* and *illegal* has *ll*.",
      {table:[["Prefix","Before","Examples"],["in-","most sounds","inactive, incorrect, indirect"],["im-","p, b, m","impossible, imbalance, immature"],["il-","l","illegal, illogical, illiterate"],["ir-","r","irregular, irrelevant, irresponsible"]]},
      "Which prefix a word takes is mostly a fact about that word, so check a dictionary. We say *unhappy*, not *inhappy*, and *impossible*, not *unpossible*. *Un-* tends to go with everyday words, and *in-* with words from Latin and French. Both are tendencies. A word to watch is *inflammable*: here *in-* is the Latin “in, into”, not “not”, so it means the same as *flammable*. Use *flammable* for safety.",
      {tip:"Some words with *un-* have two readings. *Unlockable* can mean “cannot be locked” (*un-* + *lockable*) or “can be unlocked” (*unlock* + *-able*). The same morphemes can join in two orders, and the order changes the meaning."}
    ]},
    {h:"-ness, -ity and the class and stress of suffixes", body:[
      "Two suffixes make nouns from adjectives: *-ness* and *-ity*. *Happy* gives *happiness*. *Active* gives *activity*. *-ness* is the more open one. It attaches to almost any adjective, native or borrowed: *kindness, politeness, sadness*. *-ity* is choosier. It goes mostly with adjectives from Latin and French: *possibility, activity, nationality*. For many adjectives, only one is normal in everyday use: *kindness* (not *kindity*), *possibility* (the form *possibleness* is rare).",
      "Suffixes also change the class of the base. A few common patterns:",
      {table:[["Suffix","Makes","Examples"],["-er, -or","noun (a person or thing that does it), from a verb","teacher, actor, printer"],["-ment, -tion","noun, from a verb","movement, education"],["-ness, -ity","noun, from an adjective","happiness, activity"],["-ize, -ify, -en","verb, from an adjective or noun","modernize, simplify, widen"],["-ful, -less, -ous, -able, -al","adjective","useful, careless, famous, readable, national"],["-ly","adverb from an adjective, or adjective from a noun","slowly (adverb), friendly (adjective)"]]},
      "Remember Unit 3: some suffixes move the stress and some do not. This is partly predictable from the suffix.",
      {table:[["Suffix","Stress","Examples (GA)"],["-ness, -ful, -er, -ly, -ize","stays where it was","ˈhappy → ˈhappiness; ˈmodern → ˈmodernize"],["-ity, -ic, -ion","moves to the syllable before the suffix","ˈactive → acˈtivity; ˈorganize → ˌorganiˈzation"],["-ify","moves to the syllable before the suffix","ˈsolid → soˈlidify; ˈhumid → huˈmidify"]]},
      "Suffixes can also change the vowels. *Sane* is /ˈseɪn/ in GA, but *sanity* is /ˈsænəti/, with a short vowel. *Nation* is /ˈneɪʃən/ and *national* is /ˈnæʃənəl/. Check a dictionary when it matters, because there are exceptions.",
      {h:"Why this matters"},
      "Word-building lets you guess new words. If you know *happy*, *un-* and *-ness*, you can understand *unhappiness* without a dictionary. It also lets you predict class (*-ize* makes a verb) and stress (*-ity* moves it). Teachers use the same ideas to explain why a learner’s *informations* or *inpossible* is wrong."
    ]}
   ],
   try:[
    {id:"e5u4-l4-x1", type:"sort", q:"Is the ending **inflection** (a grammatical form of the same word) or **derivation** (a new word)?", buckets:["Inflection","Derivation"], items:[
      {t:"-s in *books*", b:0, why:"Plural: a grammatical form of *book*. The class stays a noun."},
      {t:"-ness in *kindness*", b:1, why:"It makes a new noun from an adjective. Derivation."},
      {t:"-ed in *walked*", b:0, why:"Past tense of the same verb. Inflection."},
      {t:"-er in *teacher*", b:1, why:"It makes a new noun meaning “a person who teaches”. Derivation."},
      {t:"-er in *taller*", b:0, why:"Comparative of the same adjective, with the same class. Inflection."},
      {t:"un- in *unhappy*", b:1, why:"It makes a new word with the opposite meaning. Derivation."},
      {t:"-ing in *walking* (*She is walking*)", b:0, why:"A verb form that helps to build the progressive. Inflection."},
      {t:"-ize in *modernize*", b:1, why:"It makes a verb from an adjective. Derivation."}
    ]},
    {id:"e5u4-l4-x2", type:"match", q:"Match each word to its morphemes.", pairs:[
      ["unhappiness","un- + happy + -ness","The root is *happy*. The spelling changes to *happi-* before *-ness*."],
      ["rewriting","re- + write + -ing","A prefix, the root, and an inflectional suffix. The *e* of *write* is lost in spelling."],
      ["teachers","teach + -er + -s","A derivational suffix (*-er*), then the plural. The inflection comes last."],
      ["banana","banana","One morpheme. The parts *ba*, *na* and *na* have no meaning alone."]
    ]},
    {id:"e5u4-l4-x3", type:"number", q:"How many **morphemes** are in *unbreakable*?", answer:3, tol:0, unit:"morphemes", why:"*Un-* (not), *break* (the root) and *-able* (can be). The word has four syllables (*un-break-a-ble*), but three morphemes.", wrongs:[
      {v:4, tol:0, why:"This counts the four syllables. A morpheme is a unit of meaning, not of sound."},
      {v:2, tol:0, why:"This treats *breakable* as one piece. But *break* and *-able* are separate parts, and *-able* also appears with other roots (*readable, washable*)."}
    ], hint2:"Find the root first (*break*). Then look for the prefix and the suffix."},
    M("e5u4-l4-x4","Which set of words is spelled correctly, and why?",0,[
      ["impossible, illegal, irregular","Right. The prefix *in-* changes to *im-* before *p*, to *il-* before *l*, and to *ir-* before *r*."],
      ["inpossible, inlegal, inregular","This uses *in-* everywhere. Before *p*, *l* and *r* the prefix takes a different form."],
      ["unpossible, unlegal, unregular","*Un-* does not go with these words. The usual forms use *in-* and its variants."],
      ["impossible, unlegal, irregular","The first and third are correct, but *unlegal* is not the usual form. *Illegal* is."]
    ]),
    {id:"e5u4-l4-x5", type:"ipa", q:"Transcribe *activity* in GA. Mark the stress. (Hint: *active* is /ˈæktɪv/.)", answer:["ækˈtɪvəti","ækˈtɪvɪti"], stress:true, why:"The suffix *-ity* moves the main stress to the syllable just before it: /ækˈtɪvəti/. The first vowel keeps its full sound, but it no longer has the main stress.", wrongs:[{v:"ˈæktɪvəti", why:"This keeps the stress on the first syllable, as in *active*. The suffix *-ity* moves it."},{v:"æktɪvəti", why:"The sounds are right, but there is no stress mark. This exercise tests stress."}]},
    {id:"e5u4-l4-x6", type:"order", q:"Build the word *unfriendliness* one step at a time. Put the forms in the order that matches the affixes being added.", items:[
      {t:"friend", why:"The root, with no affix. It is a noun."},
      {t:"friendly", why:"Add *-ly* to the noun and you get an adjective. The spelling stays *friend-ly*."},
      {t:"unfriendly", why:"Add *un-* to the adjective *friendly*. The class stays the same, and the meaning becomes “not friendly”."},
      {t:"unfriendliness", why:"Add *-ness* to *unfriendly* to make a noun. The spelling changes from *y* to *i*."}
    ]},
    {id:"e5u4-l4-x7", type:"spot", q:"Tap each word that has at least one **derivational** affix. (Inflection alone does not count.)", ask:"has a derivational affix", parts:[
      "The ", {t:"teachers", flag:true, why:"*Teach + -er + -s*. The *-er* is derivational (it makes a noun), and the *-s* is inflection."}, " were ", {t:"unhappy", flag:true, why:"*Un-* + *happy* is a derived adjective."}, " about the ", {t:"slower", flag:false, why:"*Slow + -er*. The comparative *-er* is inflection. The word stays an adjective."}, ", ", {t:"noisier", flag:true, why:"*Noise + -y* gives the adjective *noisy*, which is derivation. Then *-er* is inflection."}, " ", {t:"classes", flag:false, why:"*Class + -es*. Only the plural inflection is added."}, "."
    ]},
    {id:"e5u4-l4-x8", type:"explain", q:"A student you tutor writes *inpossible* and *unlegal*. Explain what is wrong and how to learn the right forms.", size:"3–5 sentences", prompt:"I would say: …", hint:"Think about which prefix, the sound change, and a practical way to learn it.", model:"Both words use the idea of a negative prefix, which is correct. But the prefix has to match the word. Before *p*, the prefix *in-* becomes *im-* (*impossible*), and before *l* it becomes *il-* (*illegal*). This is the same kind of sound change as in *ten pounds*, where the /n/ moves toward the next sound. *Un-* is common for everyday adjectives, but it does not go with these words. The student can learn the pairs as whole words (*impossible, illegal, irregular*) and check a dictionary when unsure.", points:["Says that the idea (a negative prefix) is right but the form is wrong", "Gives the rule for im-, il- (and ir-) before p/b/m, l (and r)", "Mentions that un- and in- are chosen word by word, with tendencies", "Suggests a practical way to learn, such as whole words or dictionary checks"]}
   ],
   apply:{
    intro:"These tasks use a free dictionary with audio, such as the Cambridge Dictionary or Merriam-Webster. Nothing needs an account.",
    tasks:[
     {t:"Break down ten words", how:[
       "Choose ten long words from a text you are reading, such as *international, misunderstanding, reorganization*.",
       "Cut each into morphemes. Mark the root, each prefix and suffix, and say whether each suffix is inflection or derivation.",
       "Check one or two in the dictionary and see whether the entry lists the related words."
     ], write:"Word… morphemes… inflection or derivation…"},
     {t:"Find the prefix pattern", how:[
       "Collect ten adjectives with a negative prefix, from reading or from a dictionary: *impossible, unhappy, illegal, irregular, inactive, dishonest …*",
       "Sort them by prefix. For each *im-*, *il-* or *ir-* word, write the first letter of the root.",
       "Write the rule that you see, in one sentence. Then find one word that does not fit and check it."
     ], write:"My ten words by prefix… My rule… A word that does not fit…"},
     {t:"Check stress in a word family", how:[
       "Look up *active, activity, nation, national, nationality* in a dictionary with audio. Play the US audio.",
       "Write each word in IPA with the stress mark (GA).",
       "Say what *-ity* and *-al* do to the stress and to the first vowel. Record yourself saying the five words."
     ], write:"Words with stress marks… What -ity does… What I will practice…"}
    ],
    proof:"Ten words cut into morphemes. A sorted list of ten prefixed adjectives with your rule. Five words in IPA with stress marks, and a short recording."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, sections “Roots, bases, and affixes”, “Derivational morphology” and “Inflectional morphology”", note:"Look for how the book defines root, base and affix, and what it says about the order of derivation and inflection."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u4-l5", title:"Compounds, conversion and new words", minutes:55,
   hook:{q:"Which of these everyday words began as a shortened form of a longer word: *phone*, *flu* or *exam*?", options:["Only *phone*","Only *flu*","Only *exam*","All three"], answer:3, reveal:"**All three.** *Phone* is short for *telephone*, *flu* for *influenza*, and *exam* for *examination*. People shorten long words all the time, and the short forms often become the normal ones. Shortening is one of several ways in which English makes new words. This lesson covers compounds, conversion, clipping, blending and abbreviations, and how a new word gets into a dictionary."},
   goals:[
     "Describe a compound, name its head, and use stress to separate a compound from a phrase",
     "Explain conversion and give examples such as *to google* and *a must*",
     "Tell clipping, blending, acronyms and initialisms apart",
     "Explain how a new word enters a dictionary, and compare English clipping with Japanese katakana clipping"
   ],
   learn:[
    {h:"Compounds", body:[
      {lead:"A compound is a word made by joining two words. *Toothbrush* is *tooth* + *brush*. *Bookshelf* is *book* + *shelf*."},
      "A [[hew-compound|compound]] puts two or more roots (often free morphemes) together to make a new word. English has many types: noun + noun (*toothbrush*), adjective + noun (*blackboard*), verb + noun (*pickpocket*), noun + verb (*haircut*), and others. Noun + noun is the most common.",
      "In most English compounds, the word on the **right** is the **head**. The head decides the class and the basic kind of thing. A *toothbrush* is a kind of *brush*, so it is a noun. A *blackboard* is a kind of *board*. The plural also goes on the head: *toothbrushes*, *blackboards*. A compound made from a phrase, such as *mother-in-law*, is an exception. Its head is the first word, so the plural is *mothers-in-law*.",
      {table:[["Type","Examples","Head and class"],["noun + noun","toothbrush, bookshelf, bathroom","the second noun: a noun"],["adjective + noun","blackboard, greenhouse, high school","the noun: a noun"],["verb + noun","pickpocket, scarecrow","a noun (the compound as a whole)"],["noun + verb","haircut, sunrise","a noun"]]},
      "Not every compound has a head that names its own kind. A *redhead* is a person with red hair, not a kind of head. A *pickpocket* is not a kind of pocket. These are compounds in which the meaning comes from the whole word.",
      {h:"Spelling and stress"},
      "Compounds are written in three ways: one word (*toothbrush*), with a hyphen (*mother-in-law*) or as two words (*ice cream, high school*). Writers and dictionaries do not agree on every one, so the spelling does not define a compound. **Stress** gives a better clue, as you saw in Unit 3: in most noun compounds the first part is stressed. A *ˈgreenhouse* is a compound. A *green ˈhouse* is a phrase.",
      "The meaning of a compound is not always the sum of its parts. A *butterfly* is not made of butter. A *honeymoon* is not a moon. A new compound is often easy to guess (*smartphone*), but an older one may have lost the link.",
      {h:"Compared with Japanese"},
      "Compounding is very productive in Japanese. *Hondana* (本棚, “bookshelf”) is *hon* (“book”) + *tana* (“shelf”). The *t* of *tana* becomes *d* inside the compound, a sound change called *rendaku* (連濁). English compounds do not change sounds in this way, but the pattern of putting two nouns together is the same, and the head is on the right in both languages for most compounds."
    ]},
    {h:"Conversion: a new class with no change", body:[
      "Sometimes a word moves to a new class with no affix and no change of form. This is **[[hew-conversion|conversion]]** (also called *zero derivation*). The verb *google* comes from the company name. The noun *a must* comes from the modal verb *must*, as in *This book is a must*.",
      {table:[["From","To","Examples"],["noun → verb","verb","*to text, to email, to bottle, to chair a meeting, to google*"],["verb → noun","noun","*a run, a walk, a download, a guess*"],["adjective → verb","verb","*to empty, to clean, to open*"],["other → noun","noun","*a must, a maybe, the ups and downs*"]]},
      "How do you know it is conversion and not a new word? The new class behaves in the new way. A noun that has become a verb takes verb endings: *emailed, emailing*. A verb that has become a noun takes a plural and can follow *a*: *two downloads*. The class test from Lesson 1 settles it.",
      {ex:"We will text you the time.       (verb: texted, texting)\nShe sent me a text.             (noun: two texts)\n\nPlease google the address.       (verb: googled, googling)\nThat meeting is a must.         (noun: musts)", label:"Worked example", mono:true},
      "Conversion is common in English because the language has so few endings. Many noun/verb pairs also change stress (*ˈrecord* and *reˈcord*, Unit 3), but many do not (*a ˈtext* and *to ˈtext*). Dictionaries now list *google* as a verb. The company name stays a trademark, written with a capital letter. People sometimes object to a new conversion, but this is a normal way for English to grow, and many words that people now use without a thought began this way, such as *to host* and *to access*.",
      {tip:"If a word is new and you cannot find it, try another class. A new verb may be an old noun, or the other way around. Look up the noun form in the dictionary, then ask whether the new use has verb or noun endings."}
    ]},
    {h:"Clipping, blending and abbreviations", body:[
      "Three more ways of making new words work on the form of existing words.",
      {table:[["Process","What happens","Examples"],["[[hew-clipping|Clipping]]","Part of a word is cut off","*phone* (telephone), *exam, ad, lab, fridge, flu*"],["[[hew-blend|Blending]]","Parts of two words are joined, usually the start of one and the end of the other","*brunch* (breakfast + lunch), *smog* (smoke + fog), *motel* (motor + hotel)"],["[[hew-acronym|Acronym]]","Initial letters make a word that is said as a word","*NASA, laser, radar*"],["[[hew-initialism|Initialism]]","Initial letters are said one by one","*BBC, USB, FBI*"]]},
      "**Clipping** has two types. A *back-clipping* removes the end (*exam* from *examination*). A *fore-clipping* removes the beginning (*phone* from *telephone*, *plane* from *airplane*). The clipped form is usually informal at first, and it may become standard.",
      "**Blending** is not the same as a compound. In a compound, both parts are whole words (*tooth* + *brush*). In a blend, at least one part is cut (*smoke* + *fog* gives *smog*). A blend takes sounds from both words but does not follow the morpheme boundaries. Some recent blends are *podcast* (from *iPod* and *broadcast*) and *Brexit* (from *British* and *exit*).",
      "**Acronym or initialism?** Many people use *acronym* for both. A stricter use, common in linguistics and in many style guides, separates them. An *acronym* is said as a word: *NASA* /ˈnæsə/, and *laser*, which is now an ordinary word in lowercase. An *initialism* is said letter by letter: *B-B-C*. Some can be both: *FAQ* is said as letters or as *fack*. The stricter use is not universal, so you may see the broad use in other books.",
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="18" text-anchor="middle">Six ways to make a new word</text><rect class="d-sage" x="8" y="30" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="52">compound</text><text x="110" y="52">tooth + brush → toothbrush</text><rect class="d-lup" x="8" y="74" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="96">clipping</text><text x="110" y="96">telephone → phone</text><rect class="d-gold" x="8" y="118" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="140">blend</text><text x="110" y="140">breakfast + lunch → brunch</text><rect class="d-rose" x="8" y="162" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="184">conversion</text><text x="110" y="184">text (noun) → to text (verb)</text><rect class="d-panel" x="8" y="206" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="228">acronym</text><text x="110" y="228">NASA: said as one word</text><rect class="d-panel" x="8" y="250" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="272">initialism</text><text x="110" y="272">BBC: said letter by letter</text></svg>', alt:"Six rows, each naming a way to make a new word with an example: compound, tooth plus brush gives toothbrush; clipping, telephone gives phone; blend, breakfast plus lunch gives brunch; conversion, text as a noun becomes to text as a verb; acronym, NASA said as one word; initialism, BBC said letter by letter.", cap:"Different processes work on different things: whole words, parts of words, a word’s class, or the first letters."},
      {h:"Other routes"},
      "A **back-formation** works backward from a longer word. The verb *edit* is usually described as formed from the noun *editor*, and *burgle* from *burglar*. Other words come from names (*sandwich*) or are borrowed from other languages (Unit 5, Lesson 5).",
      {h:"Compared with Japanese"},
      "Japanese clips English-origin words very often, and the short forms are the normal ones. *Pasokon* (パソコン) comes from *pāsonaru konpyūtā*, “personal computer”. *Sumaho* (スマホ) comes from *sumātofon*, “smartphone”. *Konbini* (コンビニ) is a clipped *konbiniensu sutoa*, “convenience store”. *Terebi* (テレビ) is *terebijon*, “television”, and *rimokon* (リモコン) is “remote control”. Japanese clippings are often only three or four morae long.",
      "English clips too (*phone, fridge, fax*), but it clips in its own way and often uses initials instead (*PC, TV*). So a Japanese clipping is a normal word-making process, the same kind of process as *phone*. It is not a mistake. Some Japanese short forms have no English equivalent, and Unit 5 returns to this."
    ]},
    {h:"How a word gets into a dictionary", body:[
      "People often ask whether a new word is “real”. A dictionary does not make a word real. It records the words that people already use. Editors watch large collections of text, such as news, books, blogs and speech, and look for evidence.",
      "They look for use that is **widespread** (by many writers and speakers, not one person), **sustained** (it lasts for years, not a few weeks) and **clear** (it has a meaning that readers can understand). When a word meets these tests, the editors write a definition and add examples. New editions or online updates add the entries. Dictionaries also use labels such as *informal* or *slang* to mark where the word is used.",
      {list:[
        "**A word that is not in a dictionary is not necessarily wrong.** It may be new, or rare, or too informal. A search in a corpus can show how common it is.",
        "**A word that is in a dictionary is not necessarily formal.** Many entries have labels such as *informal*.",
        "**Different dictionaries make different choices.** One may add a word years before another."
      ]},
      "This connects to Unit 1, Lesson 2. The same evidence drives the entries: a corpus, a lexicographer who reads the examples, and a decision. If you have a question about a new word, check one of the corpora, such as COCA, and a current dictionary.",
      {h:"Habits and misconceptions"},
      {list:[
        "**“Clipped words are lazy or wrong.”** Many standard words began as clips (*bus, plane, flu, pub*). Clipping is a normal process.",
        "**“Compounds are always one word.”** They can be one word, hyphenated, or two words. Check the stress and a dictionary.",
        "**“Turning a noun into a verb is bad English.”** It is conversion, one of the oldest ways that English adds words. Some conversions are better in informal writing, and you can choose.",
        "**“A new word is not real until it is in the dictionary.”** The dictionary follows the use."
      ]}
    ]}
   ],
   try:[
    {id:"e5u4-l5-x1", type:"sort", q:"How was each word made? Sort them by process.", buckets:["Compound","Clipping","Blend","Conversion"], items:[
      {t:"toothbrush", b:0, why:"Two whole words, *tooth* and *brush*, joined. The head is *brush*."},
      {t:"phone", b:1, why:"A fore-clipping of *telephone*."},
      {t:"brunch", b:2, why:"*Br-* from *breakfast* and *-unch* from *lunch*. Parts of both words, not the whole words."},
      {t:"to email (as in “Please email me.”)", b:3, why:"A noun used as a verb with no change of form. The class changed."},
      {t:"bookstore", b:0, why:"*Book* + *store*, two whole words."},
      {t:"exam", b:1, why:"A back-clipping of *examination*."},
      {t:"smog", b:2, why:"*Sm-* from *smoke* and *-og* from *fog*."},
      {t:"a download", b:3, why:"A verb (*to download*) used as a noun with no change of form."}
    ]},
    {id:"e5u4-l5-x2", type:"sort", q:"Is the abbreviation said as a word (**acronym**) or letter by letter (**initialism**)?", buckets:["Acronym","Initialism"], items:[
      {t:"NASA", b:0, why:"Said as one word, /ˈnæsə/."},
      {t:"BBC", b:1, why:"Said as three letters: B-B-C."},
      {t:"laser", b:0, why:"From *light amplification by stimulated emission of radiation*. Said as a word, and now written in lowercase."},
      {t:"USB", b:1, why:"Said as three letters: U-S-B."},
      {t:"radar", b:0, why:"Said as a word. It is now an ordinary word in lowercase."},
      {t:"FBI", b:1, why:"Said as three letters: F-B-I."}
    ]},
    {id:"e5u4-l5-x3", type:"match", q:"Match each word with the longer form or forms it comes from.", pairs:[
      ["brunch","breakfast + lunch","A blend: the start of one word and the end of the other."],
      ["smog","smoke + fog","A blend of two words."],
      ["fridge","refrigerator","A clipping. Only part of the long word is kept."],
      ["motel","motor + hotel","A blend of *motor* and *hotel*."]
    ]},
    M("e5u4-l5-x4","*This book is a must.* Why is *must* in this sentence an example of conversion?",1,[
      ["Because *must* got a new ending.","There is no new ending. *Must* is spelled the same."],
      ["Because *must* is normally a modal verb, and here it works as a noun with no change of form.","Right. It follows *a*, and it can take a plural (*musts*). The class has changed, and the form has not."],
      ["Because *must* is clipped from a longer word.","*Must* is not a clipping. It has not lost any letters."],
      ["Because *must* is a compound of two words.","There is only one root in *must*, so it is not a compound."]
    ]),
    {id:"e5u4-l5-x5", type:"number", q:"How many **morphemes** are in *bookshelves*?", answer:3, tol:0, unit:"morphemes", why:"*Book* + *shelf* + plural *-s*. The compound has two roots, and the plural is a third morpheme. The spelling changes (*f* to *v*, and *-es*), but the plural is still one morpheme.", wrongs:[
      {v:2, tol:0, why:"This counts only the two roots, or the two syllables. The plural *-s* is a separate morpheme and counts."},
      {v:4, tol:0, why:"This counts the spelling change (*f* to *v*) and *-es* as separate morphemes. The plural is one morpheme with a spelling change."}
    ], hint2:"First find the two roots of the compound. Then ask what the ending adds."},
    {id:"e5u4-l5-x6", type:"spot", q:"Tap each word that is a **compound** (two or more whole words joined).", ask:"is a compound", parts:[
      "The ", {t:"toothbrush", flag:true, why:"*Tooth* + *brush*. A noun compound."}, " is next to the ", {t:"bookshelf", flag:true, why:"*Book* + *shelf*. A noun compound."}, " in the ", {t:"bathroom", flag:true, why:"*Bath* + *room*. A noun compound."}, ", but my ", {t:"brother", flag:false, why:"A single root. It has no smaller parts that make it up."}, " left his ", {t:"phone", flag:false, why:"A clipping of *telephone*, not a compound. It is one root."}, " on the ", {t:"table", flag:false, why:"A single root."}, "."
    ]},
    M("e5u4-l5-x7","Hana hears the word *hangry* (hungry + angry) and cannot find it in her small dictionary. What is the best conclusion?",2,[
      ["It is not a real word, because the dictionary does not have it.","A dictionary records use. A small one may leave out informal or new words."],
      ["It is a compound, so it must be written as two words.","It is a blend, not a compound. The parts are cut, and it is written as one word."],
      ["It is probably a blend that is new or informal. She can check a larger dictionary or a corpus to see how common it is.","Right. The evidence for a new word is its use, so a corpus or a current dictionary is the next check."],
      ["She should not use it in any situation.","Informal blends are fine in informal speech, with a label such as *informal*."]
    ]),
    {id:"e5u4-l5-x8", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a former student: “My teacher said never to use a brand name as a verb. Is *to google* really English?” Explain what Toby could say.", size:"3–5 sentences", prompt:"Toby could say: …", hint:"Name the process, give a test, and say what a dictionary does.", model:"Yes, it is English. It is an example of conversion: a word that was a name (and a noun) is used as a verb, with no change in form. You can tell it is a real verb because it takes verb endings (*googled, googling*). Dictionaries record words that many people use over time, and several now list *google* as a verb, though the company name stays a trademark. Her teacher may mean that it can sound informal in formal writing, and in careful writing *search* is an alternative. English has done this for a long time with words like *to host* and *to text*.", points:["Names the process as conversion (a name or noun used as a verb)", "Gives evidence that it behaves like a verb (googled, googling)", "Says that dictionaries record use over time, not permission", "Notes that register matters, such as informal vs formal writing"]}
   ],
   apply:{
    intro:"These tasks use the Corpus of Contemporary American English (COCA, english-corpora.org, free with a registered account; daily search limits apply), a free dictionary, and your own reading.",
    tasks:[
     {t:"Corpus check: google, text and download", how:[
       "Open COCA at english-corpora.org and sign in. Search for *google*, and use the part-of-speech (POS) list on the search page to choose verb. Note the verb forms you find (*googled, googling, googles*).",
       "Search for *text* twice: once with verb chosen in the POS list, and once with noun chosen. Compare the first ten example lines for each.",
       "Look up the same three words in the Cambridge Dictionary or Merriam-Webster. Does the dictionary list each class?",
       "Write two sentences on what the evidence says about conversion."
     ], write:"google as a verb… text noun and verb… The dictionary shows… What the evidence says…"},
     {t:"Sort ten new words", how:[
       "Collect ten words or short forms that you met recently: from news, social media, school or work. Try *podcast, selfie, hangry, WFH, to DM* or your own.",
       "For each, decide how it was made: compound, clipping, blend, conversion, acronym or initialism. Write the longer form if there is one.",
       "Check two of them in a dictionary and note the label (*informal*, *slang* or none)."
     ], write:"Word… process… longer form… dictionary label…"},
     {t:"Japanese clippings", how:[
       "Write eight katakana words that you know from English, such as *pasokon, sumaho, konbini, terebi, rimokon*.",
       "For each, write the full English phrase it comes from, and the English short form, if there is one (*PC, TV, remote*).",
       "Count the morae in each Japanese clipping. Write one sentence on what you notice."
     ], write:"Katakana word… full phrase… English short form… morae… What I notice…"}
    ],
    proof:"A short table of corpus results for three words, with notes on conversion. Ten words sorted by process with dictionary labels. Eight Japanese clippings with their full forms."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, section “Compounding”; and the Historical Linguistics chapter, section “Lexical change”", note:"Look for how the book describes compounds and heads, and how new words enter a language."}
   ]
  }
  ],
  checkpoint:["e5u4-q03","e5u4-q07","e5u4-q12","e5u4-q16","e5u4-q22","e5u4-q25","e5u4-q31","e5u4-q34","e5u4-q36","e5u4-q39","e5u4-q43","e5u4-q44"],
  cpBank:[
   Q("e5u4-cp01","e5u4-l1",1,"Which statement about word classes is correct?",2,[
     ["A word belongs to one class forever, whatever sentence it is in.","Many words belong to several classes. *Light* can be a noun, a verb or an adjective."],
     ["A word’s class is decided by its meaning alone.","Meaning is only a clue. *Destruction* names an event but behaves as a noun."],
     ["A word’s class is decided by how it behaves: the forms it takes and the job it does in a phrase.","Right. This is why form tests and function tests are used."],
     ["A word’s class is decided by its spelling.","Spelling can help with endings, but *friendly* ends in *-ly* and is an adjective."]]),
   Q("e5u4-cp02","e5u4-l1",2,"In “They will walk home”, which test shows that *walk* is a verb?",1,[
     ["It follows *the*.","*The walk* would make it a noun. Here it follows *will*."],
     ["It follows *will* and has verb forms (*walks, walked*).","Right. A word after a modal such as *will* in this way is a verb."],
     ["It names an action.","Meaning is not the test. *A walk* also names an action but is a noun."],
     ["It ends in *k*.","Spelling does not decide class."]]),
   Q("e5u4-cp03","e5u4-l2",1,"Which pair of words shows a mass noun and a count noun?",3,[
     ["quickly and slowly","Both are adverbs."],
     ["happy and sad","Both are adjectives."],
     ["run and walk","Both are verbs in this use."],
     ["information and idea","Right. *Information* is mass (no plural: *much information*), and *idea* is count (*two ideas*)."]]),
   Q("e5u4-cp04","e5u4-l2",3,"Kaito writes: “She speaks English very good.” What is the best correction and reason?",0,[
     ["*Very well*, because *well* is the adverb that changes the verb *speaks*.","Right. *Good* is an adjective and describes a noun, as in *good English*."],
     ["*Very goodly*, because adverbs end in *-ly*.","There is no standard adverb *goodly*, so the *-ly* habit does not help here."],
     ["No change. *Good* works as an adverb in all writing.","In informal speech it is common, but writing should use *well*."],
     ["*Very goods*, because the word needs a plural.","*Goods* is a noun meaning products. It does not fit here."]]),
   Q("e5u4-cp05","e5u4-l3",2,"Which word in “The book is mine” is a pronoun?",2,[
     ["The","An article, so a determiner."],
     ["book","A noun. It can follow *the* and has a plural, so it is not a pronoun."],
     ["mine","Right. It stands alone and replaces a noun phrase (*my book*)."],
     ["is","An auxiliary or main verb. Here *is* links the subject to *mine*."]]),
   Q("e5u4-cp06","e5u4-l3",3,"A learner writes “Did you went to the market?” Which explanation is best?",1,[
     ["The learner should use *do* instead of *did*.","*Did* is correct as the helper. The error is elsewhere in the sentence."],
     ["After *did*, the main verb must be the base form: *Did you go to the market?*","Right. With *do*-support the helper carries the tense, so the main verb goes back to *go*."],
     ["The word *the* must be removed.","*The market* is correct."],
     ["The sentence is correct in standard English.","*Did you went* is not standard."]]),
   Q("e5u4-cp07","e5u4-l4",2,"What is the root of *unforgettable*?",3,[
     ["*un-*","This is a prefix. It is bound."],
     ["*-able*","This is a suffix. It is bound."],
     ["*forgettable*","This is a base, an intermediate form. It is not the root."],
     ["*forget*","Right. The root is the core morpheme with no affixes: *un- + forget + -able*."]]),
   Q("e5u4-cp08","e5u4-l4",3,"Mei says: “The *-er* in *taller* and the *-er* in *teacher* are the same, so they do the same job.” What is the best reply?",2,[
     ["She is right. Both make a new word.","Only one of them does."],
     ["She is right. Both are comparisons.","Only *taller* is a comparison."],
     ["The spelling is the same, but they are different morphemes: *taller* is inflection, and *teacher* is derivation.","Right. *Taller* is the same adjective in comparative form. *Teacher* is a new noun."],
     ["She is wrong. Neither is a morpheme.","Both are bound morphemes."]]),
   Q("e5u4-cp09","e5u4-l4",2,"Which word keeps the stress on the same syllable as its base?",0,[
     ["*happiness* (from *happy*)","Right. *-ness* does not move the stress: ˈhappy, ˈhappiness."],
     ["*activity* (from *active*)","*-ity* moves the stress: ˈactive, acˈtivity."],
     ["*photographic* (from *photograph*)","*-ic* moves the stress to the syllable before it."],
     ["*electricity* (from *electric*)","*-ity* moves the stress: eˈlectric, elecˈtricity."]]),
   Q("e5u4-cp10","e5u4-l5",1,"Which of these words was made by **blending** parts of two words?",1,[
     ["*phone*","This is a clipping of *telephone*."],
     ["*smog*","Right. It joins parts of *smoke* and *fog*."],
     ["*toothbrush*","This is a compound of two whole words."],
     ["*BBC*","This is an initialism."]]),
   Q("e5u4-cp11","e5u4-l5",2,"Why is the verb in “Please email me” an example of conversion?",2,[
     ["It has a new suffix.","There is no new suffix. The form is the same as the noun."],
     ["It is shortened from a longer word.","That would be clipping. *Email* is not a shortened verb."],
     ["It is the noun *email* used as a verb with no change of form, and it takes verb endings (*emailed*).","Right. The class changes, and the form does not."],
     ["It joins two words, *e* and *mail*.","It does come from *electronic mail*, but the change here is class, not compounding."]]),
   Q("e5u4-cp12","e5u4-l5",3,"A learner notices that Japanese *sumaho* and English *phone* are both short forms. What is the best description?",1,[
     ["Both are blends of two words.","Each is a cut form of one longer word or phrase, so they are clippings."],
     ["Both are clippings: parts of a longer form (*sumātofon*, *telephone*) were cut.","Right. The processes are similar, though the languages cut the words in different places."],
     ["Only the Japanese one is a real word.","Both are normal words in their languages."],
     ["Both are acronyms.","Neither is made from the first letters of a phrase."]])
  ],
  codex:[
   {id:"word-classes-english", title:"Word classes (parts of speech) in English", aka:["parts of speech","lexical categories","form and function tests"], tags:["grammar","word classes"],
    summary:"A word’s class is decided by how it behaves in sentences, through form tests and function tests, and not by what it means.",
    levels:{
     starter:[
      "A **word class**, also called a **part of speech**, is a group of words that behave in the same way in sentences. The main open classes are nouns, verbs, adjectives and adverbs. The smaller closed classes are determiners, pronouns, prepositions, conjunctions and auxiliary verbs.",
      "School definitions use meaning: a noun is a person, place or thing, and a verb is an action. These are rough guides. They fail for *destruction* (a noun that names an event), *Tuesday* (a noun that names a time) and *seem* (a verb with no action).",
      "Grammar uses **behavior** instead. A noun can follow *the*, can be a subject and usually has a plural. A verb has forms such as *walk, walks, walked, walking* and can follow *will* or *to*. An adjective can come before a noun or after *be*, and many take *-er* and *-est*. An adverb changes a verb, an adjective, another adverb or a whole clause.",
      "The same spelling can belong to different classes in different sentences. *Light* is a noun in *the light*, a verb in *light the candle* and an adjective in *a light bag*. Check the class in the sentence you have, not in the word alone.",
      {key:"Class is behavior, not meaning. Use a form test and a function test together."}
     ],
     builder:[
      "Descriptive grammars, such as the *Cambridge Grammar of the English Language* (Huddleston and Pullum), define classes by their **morphosyntactic** properties: the inflectional forms a word has (form) and the places it can fill in phrases (function). No single test works for every word, so you combine them.",
      {table:[["Class","Form clue","Function clue"],["Noun","plural *-s*, possessive *’s*","follows *the/a*; head of a noun phrase; subject"],["Verb","*-s, -ed, -ing*, participle","follows *will/to*; core of the clause; shows tense"],["Adjective","*-er/-est* for many","before a noun; after *be/seem*; follows *very* if gradable"],["Adverb","few; many end in *-ly*","changes a verb, adjective, adverb or clause; often movable"]]},
      "Open classes take new words all the time (*podcast, to text, cringe*). Closed classes almost never do (*the, of, can, because*). Closed-class words are the most frequent words in any large text, and in speech they are usually weak (Unit 3).",
      "Different books count the classes differently. Some treat pronouns as a kind of noun and auxiliary verbs as a kind of verb, or separate *determiners* from adjectives in their own class. The tests are the same. The grouping is a choice about where to draw lines.",
      "Practical use: a learner dictionary labels each use of a word with its class. Read the label, because a word that appears twice with different labels (*walk* noun, *walk* verb) has two sets of patterns to learn."
     ],
     pro:[
      "Classes are best seen as groups with a clear center and fuzzy edges. A typical noun names a thing, takes a plural and follows a determiner. Less typical nouns lose some of these properties: mass nouns lack plurals (*information*), proper names often lack determiners (*Tuesday, Maria*). Words at the edges can share properties with two classes. *Near* behaves like an adjective in *the near side* and like a preposition in *near the door*.",
      "Words ending in *-ing* are a good example of why tests must be applied in context. In *Walking is healthy* the word behaves like a noun. In *She is walking* it is part of a verb. In *a walking stick* it modifies a noun like an adjective. Dictionaries and grammars handle this in different ways, and the choice affects how many classes a word seems to have.",
      "In generative grammar, the open classes are the **lexical categories** (N, V, A, P in some accounts) and the closed classes are **functional categories** (determiner, tense, complementizer). The distinction fits the open/closed difference. Details differ between theories, and the Essentials of Linguistics chapters on morphology (“Lexical categories”) and syntax (“Functional categories”) give an introduction.",
      "Corpus work uses part-of-speech tagging, which labels each word in a text with a tag. Tagsets differ in size, from a few dozen tags to over a hundred, because analysts disagree on how finely to split the classes. Tag counts in a corpus can depend on the tagger, so a search by class is a good guide but not a perfect one."
     ]},
    related:["adjectives-adverbs-english","small-words-english"], read:[{book:"eling", where:"The Morphology chapter, section “Lexical categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"adjectives-adverbs-english", title:"Adjectives and adverbs, and the tricky cases", aka:["fast and hard","-ly adverbs","gradable adjectives","flat adverbs"], tags:["grammar","adjectives","adverbs"],
    summary:"Adjectives describe nouns and adverbs change other words. The -ly ending is a clue, not a test, and several common words (fast, hard, early, well) work in both classes.",
    levels:{
     starter:[
      "An **adjective** says something about a noun: *a tall man, The man is tall.* An **adverb** changes a verb, an adjective, another adverb or a whole clause: *runs quickly, very tall, Probably it will rain.*",
      "Many adverbs end in *-ly* (*quickly, carefully*). But some adjectives end in *-ly* too: *friendly, lovely, lonely, elderly*. The adverb *friendlily* is very rare. To express the idea, say *in a friendly way*.",
      "Some words are both: *fast* (*a fast car, She drives fast*), *hard* (*a hard test, He works hard*), *early* and *late*. Do not add *-ly* to these. And note that *hardly* and *lately* are different words: *hardly* means “almost not”, and *lately* means “recently”.",
      "*Good* is an adjective (*a good player*). Its adverb is *well* (*She plays well*). *Well* is also an adjective meaning “healthy” (*I don’t feel well*).",
      {key:"The ending -ly is a clue, not a test. Ask what the word changes."}
     ],
     builder:[
      "A **gradable** adjective names a quality that has degrees. It can follow *very* and can be compared: *very tall, taller, the tallest*. A non-gradable adjective names a yes-or-no quality: *dead, wooden, Japanese, daily*. Gradable adjectives take *-er/-est* if short and *more/most* if long. Two-syllable adjectives vary (*happier, more careful*).",
      {table:[["Word","Adjective","Adverb","Warning"],["fast","a fast car","drives fast","no *fastly*"],["hard","a hard test","works hard","*hardly* = barely"],["late","a late bus","arrived late","*lately* = recently"],["well","I am well (healthy)","plays well","adverb of *good*"],["early","an early train","left early","ends in *-ly*, both classes"]]},
      "Pairs like *high/highly* and *near/nearly* have different meanings. *She jumped high* is about height. *A highly paid job* means “very well paid”. *It is nearly noon* means “almost noon”. When both forms exist, expect different meanings and check a dictionary.",
      "Learners confuse *-ing* and *-ed* adjectives: *The film is boring* (it causes boredom), *I am bored* (I feel it). The *-ing* form describes the cause, and the *-ed* form describes the person who feels.",
      "The adverb class is the most mixed. Manner (*slowly*), time (*soon*), place (*here*), frequency (*often*), degree (*very*) and sentence adverbs (*probably, however*) all differ in behavior. Grammarians have called it a catch-all class for this reason."
     ],
     pro:[
      "Most adjectives can be **attributive** (before a noun) and **predicative** (after a linking verb). Some are restricted. *Main, mere* and *utter* are normally attributive only (*the main reason*, not *The reason is main*). *Asleep, afraid* and *alive* are normally predicative (*The child is asleep*, not *the asleep child*). A few postpose after the noun: *something strange, the people involved*.",
      "**Flat adverbs** have the same form as the adjective: *fast, hard, early, late, slow* (*drive slow*). Historically the *-ly* of adjectives like *friendly* and of adverbs like *quickly* comes from related Old English endings. Flat adverbs without *-ly* are common in many varieties. Standard written English usually keeps *slowly* in formal writing, while road signs and speech often use *slow*.",
      "Some adverbs of degree work with limited classes. *Very* goes with gradable adjectives (*very tall*) but not with non-gradable ones (*very dead* is not normal), while *completely* goes with non-gradable ones (*completely dead*). Gradability is a property of a particular sense, and it can change with context: *a very wooden performance* is figurative and gradable.",
      "Huddleston and Pullum treat many words that traditional grammars call adverbs differently, but the main point is stable: the adverb class is defined mostly by what the word modifies, and it is not defined by *-ly*. Corpus searches by class (for example *hard* tagged as an adjective or as an adverb) are a quick way to see the difference in real use."
     ]},
    related:["word-classes-english","small-words-english"], read:[{book:"eling", where:"The Morphology chapter, section “Lexical categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Corpus of Contemporary American English (COCA)", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"small-words-english", title:"Determiners, pronouns, prepositions, conjunctions and auxiliaries", aka:["function words","closed-class words","NICE properties","do-support"], tags:["grammar","function words"],
    summary:"The small closed classes hold the most frequent words. Determiners open noun phrases, pronouns replace them, prepositions relate them, conjunctions join, and auxiliaries help verbs.",
    levels:{
     starter:[
      "Small words build the shape of a sentence. A **determiner** (*the, my, some*) starts a noun phrase. A **pronoun** (*she, mine, someone*) replaces a whole noun phrase. A **preposition** (*in, on, at, after*) forms a phrase that shows a relation. A **conjunction** (*and, but, because*) joins words or clauses. An **auxiliary verb** (*be, have, do, can, will*) helps a main verb.",
      "*My* and *mine* are in different classes. *My* comes before a noun (*my book*). *Mine* stands alone (*The book is mine*).",
      "The choice of preposition is often a fixed habit: *in the morning* but *at night*, *on Monday* but *in May*. You cannot work it out from meaning, so learn the whole chunk.",
      "To make a question or a negative, English uses an auxiliary. If there is none, it adds *do*: *Does she like tea? She doesn’t like tea.* After *do*, the main verb is in its base form.",
      {key:"These words are hard to hear and easy to forget, and sentences cannot be built without them."}
     ],
     builder:[
      "Determiners include articles, demonstratives (*this, those*), possessives (*my, their*) and quantity words (*some, every, no*). Two main determiners do not normally come together (*the my book* is not possible). Use *the* when the speaker and listener know which one is meant, and *a* for something new. Many plural and mass nouns have no article: *Dogs bark.*",
      "A coordinating conjunction (*and, but, or*) joins equal parts and must stand between them. A subordinating conjunction (*because, although, if*) starts a dependent clause that can often move to the front. A learner error is to use both: *Although it rained, but we went out.*",
      {table:[["Property (NICE)","Auxiliary: can","Main verb: like"],["Negation: add *n’t*","can’t","doesn’t like"],["Inversion: question","Can she swim?","Does she like it?"],["Code: stands for the verb phrase","so can he","so does he"],["Emphasis","She CAN swim","She DOES like it"]]},
      "*Be* and *have* work as auxiliaries (*She is working, She has finished*) and as main verbs (*She is tired, She has a car*). Modal verbs (*can, could, may, might, will, would, shall, should, must*) have no *-s* form and take the base verb.",
      "Compared with Japanese: Japanese has no articles, so a noun such as *hon* can mean “a book”, “the book” or “books”. Japanese particles follow the noun, and one particle can match several English prepositions (*ni* is “to” and “in”). Negation is part of the Japanese verb (*tabenai*), so English *do*-support is new."
     ],
     pro:[
      "The Cambridge Grammar of the English Language uses the term *determinative* for the class and *determiner* for the function. It also includes words such as *after* and *before* among the prepositions, even when a clause follows (*after we ate*), where traditional grammars use the term subordinating conjunction. This is one modern analysis, and many teaching grammars and dictionaries keep the traditional label. It shows that class lists depend on the analysis.",
      "The NICE properties (Negation, Inversion, Code, Emphasis) are the standard test for auxiliaries. The auxiliary *do* is a late development: *do*-support spread through Early Modern English, and it is now the way to form questions and negatives with main verbs. Earlier English could say *Know you him?* Modern English cannot.",
      "The articles come from older words. The indefinite *a(n)* comes from the Old English word for *one*, and *the* comes from a demonstrative. This is typical of closed classes: their members often come from older content or demonstrative words by a long process of change. New members are rare because that process is slow.",
      "Some forms are ambiguous between classes: *that* is a determiner (*that book*), a pronoun (*I like that*), a conjunction (*I know that she left*) and a relative word (*the book that I read*). Dictionaries give each use its own label. A teacher should show learners the frame for each use."
     ]},
    related:["word-classes-english","adjectives-adverbs-english"], read:[{book:"eling", where:"The Syntax chapter, section “Functional categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"word-building-morphology", title:"Morphemes, roots and affixes", aka:["morphology","inflection vs derivation","word formation","prefixes and suffixes"], tags:["morphology","word building"],
    summary:"Words are built from morphemes, the smallest parts that carry meaning or grammar. Inflection gives forms of one word. Derivation makes new words.",
    levels:{
     starter:[
      "A **morpheme** is the smallest piece of a word with a meaning or a grammatical job. *Cats* has two morphemes: *cat* and *-s*. *Unhappiness* has three: *un-*, *happy* and *-ness*. A morpheme is not a syllable: *banana* has three syllables and one morpheme.",
      "The **root** is the core of a word. An **affix** is a part added to it: a **prefix** before (*un-, re-*) or a **suffix** after (*-ness, -er, -s*).",
      "There are two kinds of suffix. **Inflection** gives a grammatical form of the same word: *walk, walked, walking*. **Derivation** makes a new word: *teach, teacher*. English has only eight inflectional suffixes (plural *-s*, possessive *’s*, verb *-s*, *-ed*, *-ing*, participle *-en*, comparative *-er*, superlative *-est*). Many more are derivational.",
      "Knowing the parts helps you guess new words: *unfriendliness* is *un- + friend + -ly + -ness*.",
      {key:"Count meanings, not syllables. Inflection stays in the same class, and derivation can change it."}
     ],
     builder:[
      "A **base** is any form that an affix is added to. In *unfriendliness*, the base for *-ly* is *friend*, the base for *un-* is *friendly*, and the base for *-ness* is *unfriendly*. Affixes are added one at a time, and inflection comes last: *teach-er-s*.",
      {table:[["","Inflection","Derivation"],["Class","same","often changes"],["Meaning","grammar only","new meaning"],["Regularity","very regular","less regular"],["Examples","walked, taller, books","teacher, kindness, unhappy"]]},
      "The prefix meaning “not” has several forms. *Un-* is open and common (*unhappy, unclear*). *In-* is a Latin prefix that changes to *im-* before *p, b, m* (*impossible*), *il-* before *l* (*illegal*) and *ir-* before *r* (*irregular*). The change is **assimilation**, like the /n/ of *ten* becoming /m/ in *ten pounds*.",
      "*-ness* attaches to almost any adjective (*kindness*), and *-ity* to many adjectives of Latin and French origin (*possibility*). Suffixes also change class: *-er* makes a noun from a verb, *-ize* a verb from an adjective, *-ful* an adjective from a noun. Some suffixes move stress (*-ity, -ic, -ion*), and some do not (*-ness, -ful, -ize*).",
      "Careful: not every word that ends like an affix is built from one. *Corner* is not *corn + -er*, and *finger* is not *fing + -er*."
     ],
     pro:[
      "The same morpheme can have different forms, called **allomorphs**. The plural *-s* is /s/ in *cats*, /z/ in *dogs* and /ɪz/ in *buses*. The past *-ed* is /t/ in *walked*, /d/ in *played* and /ɪd/ in *wanted*. The choice depends on the final sound of the base, and speakers apply it to new words.",
      "Not all word formation is adding a piece at the end. *Sing, sang, sung* change a vowel. *Go, went* uses a different form. *Sheep* has the same form in singular and plural. Textbooks call these irregular, suppletive or non-concatenative patterns. English also has rare infixing in informal speech (*abso-bloody-lutely*), where a word is inserted into a longer word.",
      "Productivity measures how freely an affix makes new words. *-ness* and *un-* are highly productive. *-th* (as in *warmth, growth*) is not: speakers rarely make new words with it. Productivity is a matter of degree. Latinate suffixes such as *-ity* tend to attach to Latinate bases, while native suffixes such as *-ness* are more open, and this explains why some adjectives take only one.",
      "Complex words can have structural ambiguity. *Unlockable* can be *[un-lock]-able* (“able to be unlocked”) or *un-[lockable]* (“not able to be locked”). The Essentials of Linguistics chapter shows how to draw trees to represent these differences. Morpheme boundaries and meanings must be examined together, which is why a list of letters is not enough."
     ]},
    related:["word-classes-english","compounds-conversion-new-words"], read:[{book:"eling", where:"The Morphology chapter, sections “Roots, bases, and affixes”, “Derivational morphology” and “Inflectional morphology”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"compounds-conversion-new-words", title:"Compounds, conversion and new words", aka:["word formation","clipping and blending","acronyms and initialisms","how words enter dictionaries"], tags:["morphology","vocabulary","new words"],
    summary:"English makes new words by joining words (compounds), changing a word’s class with no change in form (conversion), cutting (clipping), blending, and abbreviating.",
    levels:{
     starter:[
      "A **compound** joins two words: *toothbrush, bookshelf, high school*. The right-hand word is usually the head, so a *toothbrush* is a kind of *brush*. In most noun compounds, the first part is stressed (*ˈgreenhouse*).",
      "**Conversion** moves a word to a new class with no change of form: *a text* and *to text*, *to google*, *a must*, *a run*. The new use takes the endings of its new class (*googled, musts*).",
      "**Clipping** cuts a long word: *phone, exam, fridge*. **Blending** joins parts of two words: *brunch, smog, motel*. An **acronym** is said as a word (*NASA, laser*). An **initialism** is said letter by letter (*BBC, USB*).",
      "A dictionary records words that people already use. Editors look for use that is widespread, lasts over time and has a clear meaning.",
      {key:"A word is real when people use it, and a dictionary follows the use."}
     ],
     builder:[
      "Compounds can be written solid (*toothbrush*), hyphenated (*mother-in-law*) or open (*ice cream*). Writing conventions vary between dictionaries, so use stress and the dictionary entry. The plural goes on the head (*toothbrushes*), except in phrase compounds such as *mothers-in-law*.",
      {table:[["Process","What changes","Examples"],["Compound","two whole words join","toothbrush, blackboard"],["Conversion","class changes, form stays","to text, a download, a must"],["Clipping","part cut off","phone, exam, flu"],["Blend","parts of two words join","brunch, smog, podcast"],["Back-formation","an apparent ending is removed","edit (from editor), burgle (from burglar)"]]},
      "Many acronyms become ordinary words and lose their capital letters: *laser, radar, scuba*. Some abbreviations can be said either way (*FAQ*). Some people use *acronym* for both kinds, and a stricter use separates them.",
      "Conversion is easy in English because it has few endings, so a new word can be used in more than one class at once. Some noun/verb pairs also change stress (*ˈrecord, reˈcord*), and others do not (*a ˈtext, to ˈtext*).",
      "Japanese clips English-origin words freely: *pasokon* (personal computer), *sumaho* (smartphone), *konbini* (convenience store). These are normal word-making, like English *phone*. English often uses initials (*PC, TV*) where Japanese clips."
     ],
     pro:[
      "Most English compounds follow the Right-hand Head Rule: the head, which gives the class and the basic category, is the last element. Exceptions include compounds from phrases (*mother-in-law*) and exocentric compounds (*redhead, pickpocket*), whose meaning refers to something outside the compound. Synthetic compounds such as *truck driver* contain a derived word (*driver*) as the head. The stress rule for compounds also has exceptions: *apple ˈpie* is a compound with stress on the second part.",
      "Conversion is also called zero derivation, because it works like derivation with a zero affix. Researchers disagree about whether to call it derivation or a different process. The direction of change can often be tested by meaning: *a text* (a written thing) comes first, and *to text* (to send a text) is derived from it.",
      "Clipping, blending and abbreviation work on the form of words and often show patterns. A blend usually keeps the start of the first word and the end of the second. Japanese clippings are often short, and linguists have noted a preference for forms of about three or four morae. This is a tendency, and different words follow different patterns.",
      "Inclusion in a dictionary is a matter of editorial judgment based on evidence. Lexicographers use large corpora and monitor how often a word appears, in how many sources and over what period. A word may appear first in a specialized glossary or an informal label. Different dictionaries have different policies, and a word’s absence from one dictionary is weak evidence on its own."
     ]},
    related:["word-building-morphology","word-classes-english"], read:[{book:"eling", where:"The Morphology chapter, section “Compounding”; the Historical Linguistics chapter, section “Lexical change”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-word-class", term:"Word class (part of speech)", def:"A group of words that behave in the same way in sentences, such as nouns or prepositions. Class is decided by form and function, not by meaning.", codex:"word-classes-english"},
   {id:"hew-open-class", term:"Open class", def:"A word class that takes new members easily: nouns, verbs, adjectives and adverbs.", codex:"word-classes-english"},
   {id:"hew-closed-class", term:"Closed class", def:"A word class with few members that almost never takes new ones: determiners, pronouns, prepositions, conjunctions and auxiliary verbs.", codex:"word-classes-english"},
   {id:"hew-noun", term:"Noun", def:"A word that can follow *the* or *a*, head a noun phrase and be a subject. Most nouns have a plural.", codex:"word-classes-english"},
   {id:"hew-verb", term:"Verb", def:"A word that has forms such as *walk, walks, walked, walking*, can follow *will* or *to*, and is the core of a clause.", codex:"word-classes-english"},
   {id:"hew-adjective", term:"Adjective", def:"A word that describes a noun. It can come before a noun or after *be*, and many take *-er/-est*.", codex:"adjectives-adverbs-english"},
   {id:"hew-adverb", term:"Adverb", def:"A word that changes a verb, an adjective, another adverb or a whole clause. Many end in *-ly*, but the ending is not a test.", codex:"adjectives-adverbs-english"},
   {id:"hew-count-noun", term:"Count noun", def:"A noun that can be counted and has a plural, such as *chair* or *idea*.", codex:"adjectives-adverbs-english"},
   {id:"hew-mass-noun", term:"Mass noun", def:"A noun that is not counted one by one and has no plural, such as *information, advice* or *rice*.", codex:"adjectives-adverbs-english"},
   {id:"hew-gradable", term:"Gradable adjective", def:"An adjective that names a quality with degrees. It can follow *very* and be compared: *very tall, taller*.", codex:"adjectives-adverbs-english"},
   {id:"hew-determiner", term:"Determiner", def:"A small word at the start of a noun phrase that says which one or how many: *the, a, this, my, some, every*.", codex:"small-words-english"},
   {id:"hew-pronoun", term:"Pronoun", def:"A word that replaces a whole noun phrase, such as *she, them, mine* or *someone*.", codex:"small-words-english"},
   {id:"hew-preposition", term:"Preposition", def:"A word such as *in, on, at* or *after* that forms a phrase with a noun phrase and shows a relation of place, time and so on.", codex:"small-words-english"},
   {id:"hew-conjunction", term:"Conjunction", def:"A word that joins words, phrases or clauses. A coordinating one (*and, but, or*) joins equals. A subordinating one (*because, although*) starts a dependent clause.", codex:"small-words-english"},
   {id:"hew-auxiliary", term:"Auxiliary verb", def:"A verb that helps a main verb: *be, have, do* and the modals such as *can* and *will*. It can take *n’t* and move before the subject in a question.", codex:"small-words-english"},
   {id:"hew-morpheme", term:"Morpheme", def:"The smallest piece of a word that has a meaning or a grammatical job. *Cats* has two morphemes, *cat* and *-s*.", codex:"word-building-morphology"},
   {id:"hew-root", term:"Root", def:"The core morpheme of a word, with no affixes. The root of *unhappiness* is *happy*.", codex:"word-building-morphology"},
   {id:"hew-base", term:"Base", def:"Any form that an affix is added to. In *unfriendly*, the base for *un-* is *friendly*.", codex:"word-building-morphology"},
   {id:"hew-affix", term:"Affix", def:"A bound morpheme added to a word: a prefix before it (*un-*) or a suffix after it (*-ness*).", codex:"word-building-morphology"},
   {id:"hew-inflection", term:"Inflection", def:"The use of an ending to make a grammatical form of the same word, such as *walk, walked*. The class does not change.", codex:"word-building-morphology"},
   {id:"hew-derivation", term:"Derivation", def:"The making of a new word by adding an affix, such as *teach, teacher*. The class and the meaning often change.", codex:"word-building-morphology"},
   {id:"hew-compound", term:"Compound", def:"A word made by joining two or more words, such as *toothbrush* or *high school*. The head is usually the last part.", codex:"compounds-conversion-new-words"},
   {id:"hew-conversion", term:"Conversion", def:"A change of word class with no change of form, such as *a text* and *to text*. It is also called zero derivation.", codex:"compounds-conversion-new-words"},
   {id:"hew-clipping", term:"Clipping", def:"The shortening of a word by cutting part of it off, such as *phone* from *telephone* or *exam* from *examination*.", codex:"compounds-conversion-new-words"},
   {id:"hew-blend", term:"Blend", def:"A word made from parts of two words, such as *brunch* (breakfast + lunch) or *smog* (smoke + fog).", codex:"compounds-conversion-new-words"},
   {id:"hew-acronym", term:"Acronym", def:"An abbreviation made from first letters and said as a word, such as *NASA* or *laser*.", codex:"compounds-conversion-new-words"},
   {id:"hew-initialism", term:"Initialism", def:"An abbreviation said letter by letter, such as *BBC* or *USB*. Some writers use *acronym* for both kinds.", codex:"compounds-conversion-new-words"}
  ],
  bank:[
   /* ---- Lesson 1: word classes ---- */
   Q("e5u4-q01","e5u4-l1",1,"What is a word class (a part of speech)?",1,[
     ["A list of words that share the same meaning","Words in one class can have very different meanings. *Table* and *idea* are both nouns."],
     ["A group of words that behave in the same way in sentences","Right. They take the same forms and fill the same places in phrases."],
     ["A group of words that have the same spelling","Spelling does not decide class. *Light* has one spelling and three classes."],
     ["A group of words that begin with the same letter","The first letter has nothing to do with class."]]),
   Q("e5u4-q02","e5u4-l1",1,"What is wrong with the school definition “a noun is a person, place or thing”?",2,[
     ["It is completely false, and no noun names a person, place or thing.","It describes the typical nouns well. The problem is that it does not cover every noun."],
     ["It applies only to proper nouns.","It was meant for all nouns, and it fails for many of them."],
     ["It fails for nouns such as *destruction* and *Tuesday*, which are nouns but name an event and a time.","Right. These words behave like nouns, so behavior is the test."],
     ["It is correct, but only in written English.","Class is the same in speech and in writing."]]),
   Q("e5u4-q03","e5u4-l1",1,"Which is a **function test** for a noun?",0,[
     ["It can follow *the* or *a* and be the subject of a sentence.","Right. This is where a noun can go and what it does."],
     ["It ends in *-ing*.","An ending is a clue to form, and many nouns do not have this ending."],
     ["It names a person.","This is meaning, not behavior."],
     ["It has four letters.","Length has nothing to do with class."]]),
   Q("e5u4-q04","e5u4-l1",2,"In “We took a walk”, which class is *walk*?",1,[
     ["Verb","*Walk* follows *a* and has a plural (*walks*, as in *two walks*), so it behaves as a noun."],
     ["Noun","Right. It names an action but behaves like a noun."],
     ["Adjective","It does not describe a noun here."],
     ["Preposition","Prepositions are a closed class, and *walk* is not one."]]),
   Q("e5u4-q05","e5u4-l1",2,"*Seem* names no action. Why is it a verb?",3,[
     ["Because it is a short word.","Length does not decide class."],
     ["Because it is an action word in disguise.","*Seem* names no action, so the definition does not help."],
     ["Because dictionaries say so, and there is no other reason.","Dictionaries follow the evidence of behavior."],
     ["Because it has verb forms (*seems, seemed*) and follows *will* (*will seem*).","Right. Form and function show the class."]]),
   Q("e5u4-q06","e5u4-l1",2,"Which group contains only closed-class words?",0,[
     ["the, of, because, can","Right. A determiner, a preposition, a conjunction and an auxiliary. All are closed classes."],
     ["table, run, happy, slowly","A noun, a verb, an adjective and an adverb. These are open classes."],
     ["the, run, in, happy","*Run* and *happy* are open-class words."],
     ["she, idea, and, quick","*Idea* and *quick* are open-class words."]]),
   Q("e5u4-q07","e5u4-l1",3,"Mei says: “*Information* has no plural, so it is not a noun.” Which reply is best?",2,[
     ["She is right, because every noun needs a plural.","Many nouns have no plural, such as *advice* and *rice*."],
     ["She is right, because it does not name a thing.","Meaning is not the test."],
     ["It is a noun, because it passes the function test: it follows *the* or *this* and can be a subject. The plural test is one clue, not a rule for all nouns.","Right. No single test works for every word."],
     ["It is an adjective, because it has no plural.","It does not describe a noun and cannot follow *very*."]]),
   Q("e5u4-q08","e5u4-l1",3,"Kenji looks up *round* and sees three entries: adjective, noun and verb. He says the dictionary is confused. What is the best reply?",1,[
     ["He is right, and the dictionary should have only one class.","Many words belong to several classes, and a good dictionary lists each."],
     ["The dictionary is correct: *round* is used in three ways (*a round table, a round of drinks, to round a corner*), and class depends on the sentence.","Right. Check the use in the sentence you have."],
     ["Only the first entry is correct.","All three uses are real."],
     ["The dictionary has made an error that a corpus would remove.","A corpus would confirm that all three uses are common."]]),
   Q("e5u4-q09","e5u4-l1",3,"Two grammar books give different lists of word classes. One treats pronouns as a kind of noun, and the other lists them separately. What explains this?",3,[
     ["One book has made an error.","Both can be correct, because they make different choices."],
     ["Pronouns behave differently in different books.","Pronouns behave in the same way. The books group them differently."],
     ["English has changed between the two books.","The difference is in analysis, not in the language."],
     ["The same tests apply, but the books draw the boundaries of the classes in different ways.","Right. Grouping is a choice about where to draw the line, and the evidence is the same."]]),

   /* ---- Lesson 2: the big four ---- */
   Q("e5u4-q10","e5u4-l2",1,"Which of these is a **mass noun**?",2,[
     ["chair","A count noun: *one chair, two chairs*."],
     ["idea","A count noun: *an idea, many ideas*."],
     ["advice","Right. It is not counted one by one and has no plural: *a piece of advice*."],
     ["student","A count noun: *one student, ten students*."]]),
   Q("e5u4-q11","e5u4-l2",1,"Which adjective is **non-gradable**?",3,[
     ["tall","It can follow *very* and be compared: *very tall, taller*."],
     ["clever","It is gradable: *very clever, cleverer*."],
     ["expensive","It is gradable: *very expensive, more expensive*."],
     ["wooden","Right. A thing is made of wood or it is not, so *very wooden* is not normal for the material meaning."]]),
   Q("e5u4-q12","e5u4-l2",1,"Which word is both an adjective and an adverb, with the same spelling?",0,[
     ["fast","Right. *A fast car* (adjective) and *She drives fast* (adverb)."],
     ["quick","*Quick* is an adjective. The adverb is *quickly*."],
     ["friendly","An adjective in normal use. The adverb *friendlily* is very rare, so people say *in a friendly way*."],
     ["careful","An adjective. The adverb is *carefully*."]]),
   Q("e5u4-q13","e5u4-l2",2,"What is the difference between “He works hard” and “He hardly works”?",1,[
     ["There is no difference.","The two sentences have almost opposite meanings."],
     ["The first says he works with great effort. The second says he works very little.","Right. *Hardly* is not the adverb of *hard*. It means “almost not”."],
     ["The first is formal and the second is informal.","The difference is in meaning, not in register."],
     ["The first uses an adjective and the second uses a noun.","Both words are adverbs here."]]),
   Q("e5u4-q14","e5u4-l2",2,"What is the usual adverb for the adjective *good*?",2,[
     ["goodly","There is no ordinary modern adverb *goodly*."],
     ["goodness","This is a noun formed from *good*."],
     ["well","Right. *She plays well.* (*Well* can also be an adjective meaning “healthy”.)"],
     ["gooder","This is not a standard comparative form. The comparative of *good* is *better*."]]),
   Q("e5u4-q15","e5u4-l2",2,"Which sentence is correct?",3,[
     ["“The lesson was bored, so I was boring.”","The two forms are swapped. The cause is *boring*, and the person who feels is *bored*."],
     ["“I am very interesting in music.”","*Interesting* describes the cause. The person who feels uses *interested*."],
     ["“The news was surprised.”","The news causes surprise, so it is *surprising*."],
     ["“The film was boring, so I was bored.”","Right. The *-ing* form describes the cause, and the *-ed* form describes the person who feels."]]),
   Q("e5u4-q16","e5u4-l2",3,"Mei writes “He ran quick.” She says: “*Fast* has no *-ly*, so *quick* should work too.” What is the best reply?",1,[
     ["She is right. Any adjective can act as an adverb.","*Fast* is a special case that is both. *Quick* is an adjective in standard English."],
     ["*Fast* is both an adjective and an adverb, but *quick* is an adjective only. The adverb is *quickly* (or *fast*).","Right. *Fast* is an exception, so it is not a pattern to copy."],
     ["She is wrong because adverbs must end in *-ly*.","*Fast*, *hard* and *early* are adverbs without *-ly*."],
     ["Both forms are equally standard.","Standard English uses *quickly* or *fast* here."]]),
   Q("e5u4-q17","e5u4-l2",3,"A learner asks whether *lovely* is an adverb, because it ends in *-ly*. Which check is best?",0,[
     ["See what it describes and how it behaves: *a lovely day* (before a noun) and *The day is lovely* (after *be*). It is an adjective.","Right. Position and function decide, and the ending does not."],
     ["Count the letters.","Length has nothing to do with class."],
     ["Check if it ends in *-ly*. If it does, it is an adverb.","Many *-ly* words are adjectives (*friendly, lonely, lovely*)."],
     ["Translate it into the learner’s language.","Translation can mislead. The tests are about English behavior."]]),
   Q("e5u4-q18","e5u4-l2",3,"Why have grammarians called the adverb class a catch-all?",2,[
     ["Because it has more words than any other class.","Nouns are a larger class. The problem is the variety of the words."],
     ["Because every adverb ends in *-ly*.","Many do not (*soon, here, very, never*)."],
     ["Because it holds many words that behave in very different ways (manner, time, place, degree, sentence adverbs).","Right. Traditional grammars put there words that did not fit another class."],
     ["Because adverbs can be used in place of any other word.","They cannot. They have their own jobs."]]),

   /* ---- Lesson 3: the small words ---- */
   Q("e5u4-q19","e5u4-l3",1,"Which of these classes is **closed** (almost never takes new members)?",2,[
     ["nouns","Nouns are an open class. New ones appear all the time."],
     ["verbs","Verbs are an open class."],
     ["determiners","Right. *The, a, this, my, some* and others form a small, nearly fixed set."],
     ["adjectives","Adjectives are an open class."]]),
   Q("e5u4-q20","e5u4-l3",1,"Which word is a **possessive pronoun**?",3,[
     ["my","A possessive determiner. It comes before a noun."],
     ["me","A personal pronoun, not a possessive."],
     ["myself","A reflexive pronoun."],
     ["mine","Right. It stands alone and replaces a noun phrase: *The book is mine.*"]]),
   Q("e5u4-q21","e5u4-l3",1,"What does a preposition do?",1,[
     ["It replaces a noun phrase.","That is the job of a pronoun."],
     ["It forms a phrase with a noun phrase and shows a relation such as place or time.","Right. *In the box* and *after lunch* are examples."],
     ["It helps a main verb to form a question.","That is the job of an auxiliary verb."],
     ["It tells us how much of something there is.","That is the job of a quantity determiner such as *some* or *many*."]]),
   Q("e5u4-q22","e5u4-l3",2,"Which sentence contains a **subordinating** conjunction?",2,[
     ["“We bought tea and coffee.”","*And* is coordinating. It joins two nouns of equal rank."],
     ["“She was tired, but she kept working.”","*But* is coordinating. It joins two clauses of equal rank."],
     ["“We left because it was late.”","Right. *Because* starts a dependent clause, which can move: *Because it was late, we left.*"],
     ["“Do you want tea or juice?”","*Or* is coordinating."]]),
   Q("e5u4-q23","e5u4-l3",2,"Which sentence shows that *can* is an auxiliary verb?",0,[
     ["“Can she swim?” (it moves before the subject with no *do*)","Right. Inversion without *do* is an auxiliary property."],
     ["“She swims every day.”","This shows a main verb with an *-s* form."],
     ["“She is a good swimmer.”","This has no *can*."],
     ["“Swimming is healthy.”","This shows *swimming* as a noun use. It has no *can*."]]),
   Q("e5u4-q24","e5u4-l3",2,"Which of these is a **modal** verb?",3,[
     ["be","An auxiliary, but not a modal."],
     ["have","An auxiliary and a main verb, but not a modal."],
     ["do","An auxiliary that helps in *do*-support. It is not a modal."],
     ["must","Right. Modals such as *can, will, must* have no *-s* form and take the base verb."]]),
   Q("e5u4-q25","e5u4-l3",3,"Ana writes “She don’t like tea.” Which explanation is best?",1,[
     ["*Don’t* should be *doesn’t* because the main verb *like* needs an *-s*.","The main verb after *do* stays in its base form. It is the auxiliary that changes."],
     ["With *she*, the auxiliary must be *does*: *She doesn’t like tea*. The main verb stays in its base form.","Right. The auxiliary carries the person, and the main verb is *like*, with no *-s*."],
     ["*Don’t* is correct, and the sentence has no error.","Standard English uses *doesn’t* with *she*."],
     ["The sentence needs *can* instead of *do*.","That would change the meaning, and *do*-support is the usual way to form this negative."]]),
   Q("e5u4-q26","e5u4-l3",3,"A Japanese learner writes “I read book yesterday.” Which explanation is most useful?",2,[
     ["The learner does not know the word *book*.","The word is fine. The problem is the missing article."],
     ["The sentence is correct because Japanese has no articles.","The sentence is not standard English. English needs *a book* or *the book*."],
     ["Japanese *hon o yonda* can mean “read a book”, “read the book” or “read books”, so there is no habit of choosing. English needs *a book* or *the book*.","Right. Naming the contrast helps the learner see the choice."],
     ["The learner should use *books* in every sentence.","Plural is not always the right choice, and the question is about articles."]]),
   Q("e5u4-q27","e5u4-l3",3,"Ana says: “I will learn every preposition by its meaning, and then I will not make mistakes.” What is the best reply?",3,[
     ["She is right. Every preposition has one meaning.","Most prepositions have several uses."],
     ["She is right if she studies the Japanese particles first.","Particles do not map one to one onto English prepositions."],
     ["She should stop learning prepositions, because they are random.","They are not random. They are best learned in chunks."],
     ["Meaning helps with some, but many choices are fixed habits (*in the morning, at night*), so she should learn them in chunks.","Right. Chunks keep the preposition with the words that go with it."]]),

   /* ---- Lesson 4: building words ---- */
   Q("e5u4-q28","e5u4-l4",1,"What is a morpheme?",0,[
     ["The smallest piece of a word with a meaning or a grammatical job","Right. *Un-, happy* and *-ness* are three morphemes in *unhappiness*."],
     ["A syllable of a word","A morpheme is a unit of meaning. *Cats* has one syllable and two morphemes."],
     ["A letter of the alphabet","Letters write sounds, and they are not units of meaning."],
     ["A word that has a plural","Many morphemes are not words, and many words have no plural."]]),
   Q("e5u4-q29","e5u4-l4",1,"What is the root of *teachers*?",2,[
     ["*-er*","This is a derivational suffix."],
     ["*-s*","This is the plural suffix, an inflection."],
     ["*teach*","Right. It is the core of the word, with no affixes."],
     ["*teachers*","This is the whole word, which has three morphemes."]]),
   Q("e5u4-q30","e5u4-l4",1,"Which affix is an **inflection**?",1,[
     ["*-ness* in *kindness*","It makes a new noun from an adjective, so it is derivation."],
     ["*-ed* in *walked*","Right. It gives the past form of the same verb."],
     ["*un-* in *unhappy*","It makes a new word with an opposite meaning, so it is derivation."],
     ["*-er* in *teacher*","It makes a new noun meaning “a person who teaches”, so it is derivation."]]),
   Q("e5u4-q31","e5u4-l4",2,"How many morphemes are in *disagreements*?",3,[
     ["2","This misses the prefix and the plural."],
     ["3","This misses one affix. Check each part of the word."],
     ["5","This is too many. The word has four meaningful parts."],
     ["4","Right. *Dis-* + *agree* + *-ment* + *-s*."]]),
   Q("e5u4-q32","e5u4-l4",2,"Which form is correct?",1,[
     ["inlegal","Before *l*, the prefix *in-* changes to *il-*."],
     ["illegal","Right. In Latin, the /n/ of *in-* became /l/ before /l/, and the English spelling keeps it."],
     ["unlegal","*Un-* does not go with this word in standard English."],
     ["imlegal","*Im-* is used before *p, b* and *m*, not before *l*."]]),
   Q("e5u4-q33","e5u4-l4",2,"What happens to the word class when *-ness* is added to *kind*?",0,[
     ["An adjective becomes a noun (*kindness*).","Right. *-ness* is a derivational suffix that makes nouns from adjectives."],
     ["A noun becomes an adjective.","*Kind* is already an adjective."],
     ["A verb becomes a noun.","*Kind* is not a verb."],
     ["Nothing changes, because it is an inflection.","*-ness* is derivation, and it changes the class."]]),
   Q("e5u4-q34","e5u4-l4",2,"Which suffix is most likely to **move the main stress** of a word?",2,[
     ["*-ness*","It leaves the stress where it was: ˈhappy, ˈhappiness."],
     ["*-ful*","It leaves the stress where it was: ˈwonder, ˈwonderful."],
     ["*-ity*","Right. It moves the stress to the syllable before it: ˈactive, acˈtivity."],
     ["*-ly*","It leaves the stress where it was: ˈslow, ˈslowly."]]),
   Q("e5u4-q35","e5u4-l4",3,"Tomás says: “*Corner* has two morphemes: *corn* and *-er*.” What is the best reply?",1,[
     ["He is right, because every *-er* is a suffix.","Not every *-er* is a suffix. Some are part of the root."],
     ["He is wrong. *Corner* has no connection with *corn*, so it is a single morpheme.","Right. Test whether the shorter part has the right meaning and appears in related words."],
     ["He is right, and *corn* here means a kind of grain.","The word *corner* does not mean “a person or thing related to grain”."],
     ["He is wrong, because a word cannot have two morphemes.","Many words have two or more morphemes."]]),
   Q("e5u4-q36","e5u4-l4",3,"*Unlockable* can mean “cannot be locked” or “can be unlocked”. What explains the two meanings?",2,[
     ["The word has two roots.","It has one root, *lock*."],
     ["The prefix *un-* has no meaning.","*Un-* has a clear meaning. It means “not” or “reverse”."],
     ["The affixes can be joined in two orders: *un-* + *lockable* or *unlock* + *-able*.","Right. The order of attachment changes the meaning."],
     ["One reading is a spelling mistake.","Both readings are real."]]),

   /* ---- Lesson 5: compounds, conversion and new words ---- */
   Q("e5u4-q37","e5u4-l5",1,"Which word is a **blend**?",3,[
     ["toothbrush","A compound of two whole words."],
     ["exam","A clipping of *examination*."],
     ["BBC","An initialism."],
     ["brunch","Right. It takes the start of *breakfast* and the end of *lunch*."]]),
   Q("e5u4-q38","e5u4-l5",1,"What is the **head** of the compound *toothbrush*?",1,[
     ["tooth","The first part is not the head in this kind of compound."],
     ["brush","Right. A toothbrush is a kind of brush, and the last part is the head."],
     ["There is no head.","Most compounds have a head, and here it is clear."],
     ["The letter *s*.","There is no *s* in *toothbrush*."]]),
   Q("e5u4-q39","e5u4-l5",1,"What is **conversion**?",0,[
     ["A word moves to a new class with no change of form, such as *a text* and *to text*.","Right. The form stays, and the class changes."],
     ["Two words are joined into one, such as *tooth + brush*.","That is a compound."],
     ["A long word is cut short, such as *telephone* to *phone*.","That is clipping."],
     ["First letters make a word, such as *NASA*.","That is an acronym."]]),
   Q("e5u4-q40","e5u4-l5",2,"In the stricter use of the terms, which is an **acronym**?",2,[
     ["BBC","It is said letter by letter, so it is an initialism."],
     ["USB","It is said letter by letter, so it is an initialism."],
     ["NASA","Right. It is said as one word, /ˈnæsə/."],
     ["FBI","It is said letter by letter, so it is an initialism."]]),
   Q("e5u4-q41","e5u4-l5",2,"Which word is a **fore-clipping** (the beginning is cut off)?",1,[
     ["exam (from *examination*)","This is a back-clipping, because the end is cut off."],
     ["phone (from *telephone*)","Right. The beginning, *tele-*, is cut off."],
     ["lab (from *laboratory*)","This is a back-clipping."],
     ["ad (from *advertisement*)","This is a back-clipping."]]),
   Q("e5u4-q42","e5u4-l5",2,"How is Japanese *pasokon* (パソコン) best described?",3,[
     ["A blend of *pasu* and *kon*, which are two Japanese words.","The parts are not words with these meanings. They are cut from English-origin words."],
     ["An acronym of the English phrase *personal computer*.","It is not made of initials. It is made of the first parts of the Japanese forms."],
     ["A mistake that English speakers do not understand.","It is a normal Japanese word."],
     ["A clipping of *pāsonaru konpyūtā* (“personal computer”)","Right. The first parts of the two words are kept."]]),
   Q("e5u4-q43","e5u4-l5",3,"Mei hears a colleague say “I will trash that report.” She asks what kind of word *trash* is here. What is the best answer?",2,[
     ["It is a clipping of *trash can*.","*Trash* is an older word, and *trash can* is built from it. Nothing has been cut off."],
     ["It is an acronym.","It is not made of first letters."],
     ["It is the noun *trash* used as a verb with no change of form, so it is conversion.","Right. It takes verb endings (*trashed, trashing*)."],
     ["It is a blend of *trash* and *crash*.","Nothing is blended. There is only the one word."]]),
   Q("e5u4-q44","e5u4-l5",3,"A friend says: “*Hangry* is not a real word, because it is not in my dictionary.” Which reply is best?",1,[
     ["She is right. If a dictionary does not list a word, nobody uses it.","A dictionary records use. It may not list new or informal words."],
     ["A word is real when many people use it, and a dictionary follows that use. A newer or bigger dictionary, or a corpus, can show whether *hangry* is common.","Right. The evidence is use over time."],
     ["She is wrong, because every blend is automatically a word.","A new blend becomes a word only through use."],
     ["She is right, because blends are never words.","Many blends, such as *brunch* and *smog*, are ordinary words."]]),
   Q("e5u4-q45","e5u4-l5",3,"Which pair shows the stress difference between a **compound** and a **phrase**?",0,[
     ["a ˈblackbird (a kind of bird) and a black ˈbird (any bird that is black)","Right. First-part stress marks the compound, and the second part is stressed in the phrase."],
     ["ˈrecord (noun) and reˈcord (verb)","This shows a noun and verb pair, not a compound and a phrase."],
     ["ˈhappy and ˈhappiness","This shows a suffix that does not move stress."],
     ["acˈtivity and ˈactive","This shows a suffix that moves stress."]])
  ]
});
})();
