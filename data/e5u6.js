(function(){
/* How English Works · Unit 6 (e5u6) · How a sentence is built */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u6", track:"e5", n:6, title:"How a sentence is built", icon:"🏗️",
  blurb:"How English sentences are put together. You learn to find the head of a phrase, to name the parts of a clause, and to see the seven basic clause patterns. Then you find out why English needs a subject (even in It’s raining), how questions and negatives use auxiliary verbs, and how clauses fit inside other clauses.",
  goals:[
    "Name the five phrase types, find the head of each, and use simple tests to check your answer",
    "Label the subject, verb, object, complement and adverbial in a clause, and name the seven clause patterns (SV, SVO, SVC, SVA, SVOO, SVOC, SVOA) as a teaching tool",
    "Explain why English finite clauses need a subject, and tell dummy *it* and existential *there* from the ordinary words",
    "Use the NICE properties to tell auxiliary verbs from main verbs, and explain *do*-support, inversion and tag questions",
    "Tell main from subordinate clauses and finite from non-finite clauses (*to*-infinitive, *-ing*, *-ed*), and say what each one does in a sentence"
  ],
  read:[
    {book:"eling", where:"The Syntax chapter (sections “Structure within the sentence: Phrases, heads, and selection”, “Identifying phrases: Constituency tests”, “Clausal embedding”, “Main clause Yes-No questions” and “Main clause content questions”)", note:"Read each section after the matching lesson. The book is written for linguistics students and uses tree diagrams, so use this unit’s explanations first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u6-l1", title:"Phrases and their heads", minutes:55,
   hook:{q:"In the phrase *the old box of chocolates*, which word is the **head**, the word that the whole phrase is really about?", options:["old","box","chocolates","the"], answer:1, reveal:"**Box.** The whole phrase is a kind of *box*, not a kind of *chocolates*. You can test it: *The old box of chocolates is on the table* has a singular verb, *is*, because the verb agrees with *box*. Take away *old* or *of chocolates* and the phrase still works. Take away *box* and it does not. This lesson shows how to find the head in every kind of phrase."},
   goals:[
     "Say what a phrase is, and tell a phrase from a clause and from a single word",
     "Name noun, verb, adjective, adverb and preposition phrases",
     "Find the head of a phrase with three tests: type, omission and agreement",
     "Show how phrases can contain other phrases, and why this can make a sentence ambiguous"
   ],
   learn:[
    {h:"From words to phrases", body:[
      {lead:"A sentence is not a row of words. It is built in layers: words make phrases, phrases make clauses, and clauses make sentences."},
      "A [[hew-phrase|phrase]] is a word or a group of words that works as one unit in a sentence. Look at this sentence: *The new teacher from Kenya spoke to the students.* You can feel that *the new teacher from Kenya* belongs together. Three simple tests show it.",
      {list:[
        "**Answer test.** *Who spoke to the students?* A natural short answer is *The new teacher from Kenya.* A group of words that can answer a question on its own is usually a unit.",
        "**Pronoun test.** You can replace the whole group with one word: *She spoke to them.* Here *she* replaces the long group, and *them* replaces *the students*.",
        "**Move test.** A unit moves as a whole: *It was the new teacher from Kenya who spoke to the students.* You cannot move only a piece: *It was new teacher from who spoke…* is broken."
      ]},
      "Linguists call a unit like this a **constituent**. The book *Essentials of Linguistics* lists these as “constituency tests”. You do not need to name them every time. You need the habit: ask whether a group of words acts as one piece.",
      {tip:"A phrase can be one word. In *Mei sleeps*, both *Mei* and *sleeps* are phrases of one word each. This is useful because a long phrase and a short one do the same job."}
    ]},
    {h:"The head decides the phrase", body:[
      "Every phrase has one word that is more important than the others. This word is the [[hew-head|head]]. The head gives the phrase its type and its main meaning. The other words are **dependents**: they add detail to the head.",
      "That is why phrases are named after their heads. If the head is a noun, the phrase is a [[hew-noun-phrase|noun phrase]]. If the head is a preposition, it is a [[hew-prepositional-phrase|prepositional phrase]].",
      {table:[["Phrase type","Example","Head"],["Noun phrase","*the tall man in the old hat*","*man*"],["Verb phrase","*gave her a book* / *is waiting for the bus*","*gave* / *waiting*"],["Adjective phrase","*very proud of her son*","*proud*"],["Adverb phrase","*quite slowly*","*slowly*"],["Preposition phrase","*in the old house*","*in*"]]},
      "A [[hew-verb-phrase|verb phrase]] needs a note, because books use the term in two ways. A traditional school grammar uses it for the verbs only: *may have been waiting*. Modern descriptive grammars use it for the verb and the words that go with it: *may have been waiting for the bus*. In this course, the **verb group** is the verbs together (*may have been waiting*), and the verb phrase is the verb with its objects and other dependents. The head of the verb phrase is the main verb, *waiting*.",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="20" text-anchor="middle">A noun phrase with a phrase inside it</text><rect class="d-sage" x="10" y="32" width="320" height="188" rx="10" stroke-width="2"/><text class="s" x="170" y="52" text-anchor="middle">noun phrase: head is “man”</text><rect class="d-soft" x="22" y="62" width="54" height="30" rx="6" stroke-width="2"/><text x="49" y="82" text-anchor="middle">The</text><rect class="d-soft" x="84" y="62" width="58" height="30" rx="6" stroke-width="2"/><text x="113" y="82" text-anchor="middle">tall</text><rect class="d-gold" x="150" y="62" width="62" height="30" rx="6" stroke-width="2"/><text x="181" y="82" text-anchor="middle">man</text><rect class="d-lup" x="22" y="104" width="296" height="104" rx="8" stroke-width="2"/><text class="s" x="170" y="122" text-anchor="middle">preposition phrase: head is “in”</text><rect class="d-gold" x="34" y="136" width="44" height="30" rx="6" stroke-width="2"/><text x="56" y="156" text-anchor="middle">in</text><rect class="d-rose" x="88" y="130" width="220" height="68" rx="8" stroke-width="2"/><text class="s" x="198" y="146" text-anchor="middle">noun phrase: head is “hat”</text><rect class="d-soft" x="98" y="154" width="46" height="30" rx="6" stroke-width="2"/><text x="121" y="174" text-anchor="middle">the</text><rect class="d-soft" x="150" y="154" width="50" height="30" rx="6" stroke-width="2"/><text x="175" y="174" text-anchor="middle">old</text><rect class="d-gold" x="206" y="154" width="54" height="30" rx="6" stroke-width="2"/><text x="233" y="174" text-anchor="middle">hat</text><text class="s" x="170" y="240" text-anchor="middle">Gold boxes are heads.</text></svg>', alt:"Nested boxes. The outer box is a noun phrase, the tall man in the old hat, with the head man. Inside it is a preposition phrase, in the old hat, with the head in. Inside that is another noun phrase, the old hat, with the head hat.", cap:"Phrases are nested in other phrases. The preposition phrase is part of the big noun phrase, and it contains a noun phrase of its own."}
    ]},
    {h:"Three tests for the head", body:[
      "You can find the head with three tests. Use them together, as you did with the word-class tests in Unit 4.",
      {ol:[
        "**The type test.** The head is the word that decides what kind of phrase it is. *Very proud of her son* behaves like an adjective: it can follow *be* (*She is very proud of her son*). So the head is the adjective *proud*.",
        "**The omission test.** You can usually remove the dependents and keep a good phrase, but you cannot remove the head. *The tall man in the old hat* → *the man* → *man* all work. *The tall in the old hat* does not.",
        "**The agreement test.** In a noun phrase, the head decides whether the verb is singular or plural. *The box of chocolates **is** open.* The verb is singular because *box* is singular, even though *chocolates* is next to the verb."
      ]},
      "A fourth test works for verb phrases. The words *do so* can replace a whole verb phrase: *Mei paid the bill, and Tomás did so too.* Here *did so* stands for *paid the bill*.",
      {ex:"the key to the cabinet doors\nHead? key (singular)\nOmission: the key / key  → fine\nAgreement: The key to the cabinet doors IS lost.\nA plural noun is nearer the verb (doors), but the head is key.\n\nvery proud of her son\nHead? proud\nOmission: very proud / proud → fine\nType: She is very proud of her son. (adjective phrase after be)", label:"Worked example", mono:true},
      "The head is not always the first word or the last word. In *the man in the hat*, the head *man* is in the middle. In *in the old house*, the head *in* is the first word. Look at the job each word does, not at its position."
    ]},
    {h:"Phrases inside phrases", body:[
      "Phrases are nested, like boxes inside boxes. A preposition phrase always has a noun phrase inside it. *In the old house* = the preposition *in* + the noun phrase *the old house*. That noun phrase can contain more phrases: *in the old house on the hill*.",
      "Square brackets show this layering. Each pair of brackets is one phrase:",
      {ex:"[The tall man [in [the old hat]]] [is waiting [for [the bus]]].", label:"Worked example", mono:true},
      "Nesting explains **structural ambiguity**: one string of words with two structures and two meanings. Take *I saw the man with the telescope.*",
      {table:[["Structure","Meaning"],["*with the telescope* belongs to the noun phrase: *[the man [with the telescope]]*","The man had the telescope."],["*with the telescope* belongs to the verb phrase: *[saw [the man] [with the telescope]]*","I used the telescope to see him."]]},
      "The words are the same. The heads and their dependents are connected in two different ways. A reader chooses the structure from the context. Writers can avoid the problem by moving the phrase: *Using the telescope, I saw the man.*",
      {h:"Compared with Japanese"},
      "In English, a noun phrase often has its dependents on both sides of the head: *the **tall** man **in the hat***. In Japanese, the head noun usually comes last. Everything that describes it comes before: *bōshi o kabutta se no takai otoko* (帽子をかぶった背の高い男) is “the tall man wearing a hat”, with *otoko* (“man”) at the end. Japanese verb phrases are also head-final: *hon o yomu* (本を読む) is “read a book”, with the verb at the end. English puts the verb first and its object after it. Japanese uses particles after the noun, such as *ni* in *Tōkyō ni* (東京に, “to Tokyo”), where English puts a preposition before it: *to Tokyo*. So a learner often has to turn the order around. This is a helpful way to explain why English phrases feel “backwards”."
    ]},
    {h:"Why this matters, and common misunderstandings", body:[
      "Finding the head fixes one of the most common errors in writing, even for native speakers: **agreement with the wrong noun.** *The results of the survey is surprising* is wrong because the verb has agreed with *survey*, the noun next to it. The head is *results*, so the verb is *are*.",
      {list:[
        "**“The head is the first word.”** Not always. In *very proud of her son*, the head is the second word. In *in the garden*, it is the first.",
        "**“The head is the last noun before the verb.”** Not always. In *the key to the doors*, the head is *key*, and the last noun is *doors*.",
        "**“A phrase must have more than one word.”** A single word is a phrase when it does the job of one. *Mei* in *Mei left* is a noun phrase.",
        "**“A preposition is a small word without a phrase of its own.”** A preposition is the head of a preposition phrase, and the phrase also contains a noun phrase: *in [the garden]*.",
        "**“Descriptive grammars and school grammars disagree.”** They draw some lines in different places, such as the verb phrase above. The tests and the examples are the same."
      ]},
      "For teachers, the head idea is also a good explanation tool. When a learner makes an agreement error, you can ask: “Which word is the head?” This is easier to understand than a rule about “the subject”, and it works in the next lesson too."
    ]}
   ],
   try:[
    {id:"e5u6-l1-x1", type:"sort", q:"Sort each phrase by its type. Use the head to decide.", buckets:["Noun phrase","Verb phrase","Adjective phrase","Adverb phrase","Preposition phrase"], items:[
      {t:"the old bridge", b:0, why:"The head is the noun *bridge*."},
      {t:"after the meeting", b:4, why:"The head is the preposition *after*. The noun phrase *the meeting* is inside it."},
      {t:"extremely tired", b:2, why:"The head is the adjective *tired*. It can follow *be*: *She is extremely tired.*"},
      {t:"quite slowly", b:3, why:"The head is the adverb *slowly*. *Quite* is a dependent that makes it weaker."},
      {t:"gave her a book", b:1, why:"The head is the verb *gave*. The other words are its objects."},
      {t:"a box of chocolates", b:0, why:"The head is the noun *box*. *Of chocolates* is a dependent."},
      {t:"in the garden", b:4, why:"The head is *in*. A preposition phrase is a preposition plus a noun phrase."},
      {t:"very proud of her son", b:2, why:"The head is *proud*. *Of her son* is the thing that the pride is about."}
    ]},
    M("e5u6-l1-x2","What is the head of the noun phrase *the old box of chocolates*?",1,[
      ["*old*","*Old* is an adjective that describes the head. You can remove it and the phrase still works."],
      ["*box*","Right. The phrase is a kind of box. The verb agrees with *box* (*is*), and you can reduce the phrase to *the box* or *box*."],
      ["*chocolates*","It is closest to the verb, but it belongs to the dependent *of chocolates*. The phrase is not about the chocolates."],
      ["*the*","*The* is a determiner. It starts the phrase but does not decide its type."]
    ]),
    {id:"e5u6-l1-x3", type:"match", q:"Match each phrase to its head.", pairs:[
      ["the tall man in the old hat","man","The noun *man* decides the type. *Tall* and *in the old hat* are dependents."],
      ["very proud of her son","proud","*Proud* is the adjective. It follows *be*, so the whole phrase is an adjective phrase."],
      ["in the old house","in","A preposition phrase has a preposition as its head. The noun phrase *the old house* is inside it."],
      ["quite slowly","slowly","The adverb is the head. *Quite* only changes its degree."],
      ["waiting for the bus","waiting","The main verb is the head of the verb phrase. *For the bus* depends on it."]
    ]},
    {id:"e5u6-l1-x4", type:"spot", q:"Tap each word that is the **head of a noun phrase**.", ask:"is the head of a noun phrase", parts:[
      "The new ", {t:"teacher", flag:true, why:"The head of *the new teacher from Kenya*. The phrase is about a teacher."}, " from ", {t:"Kenya", flag:true, why:"A noun phrase of one word, inside the preposition phrase *from Kenya*. It is its own head."}, " gave the ", {t:"students", flag:true, why:"The head of *the students*, the indirect object."}, " a long ", {t:"list", flag:true, why:"The head of *a long list of rules*. The phrase is a kind of list."}, " of ", {t:"rules", flag:true, why:"The head of the small noun phrase *rules*, inside *of rules*."}, ". She ", {t:"read", flag:false, why:"The head of a verb phrase, not a noun phrase."}, " them ", {t:"quickly", flag:false, why:"An adverb. It is the head of an adverb phrase."}, "."
    ]},
    {id:"e5u6-l1-x5", type:"number", q:"How many **preposition phrases** are in this sentence? “The woman in the red coat waited for the bus near the station.”", answer:3, tol:0, unit:"preposition phrases", why:"The three preposition phrases are *in the red coat*, *for the bus* and *near the station*. Each one has a preposition as its head and a noun phrase inside it.", wrongs:[
      {v:2, tol:0, why:"This misses one phrase. *In the red coat* is easy to forget because it is inside the subject noun phrase. A preposition phrase can be inside another phrase."},
      {v:6, tol:0, why:"This also counts the noun phrases inside each preposition phrase (*the red coat, the bus, the station*). Those are noun phrases, even though they are inside preposition phrases."}
    ], hint2:"Find each preposition (*in, for, near*). Each one starts one preposition phrase."},
    {id:"e5u6-l1-x6", type:"order", q:"Put these steps in a sensible order for finding the head of a phrase.", items:[
      {t:"Decide where the phrase starts and stops, using the answer test or the pronoun test.", why:"You need to know what the phrase is before you look for its head."},
      {t:"Ask what kind of phrase it behaves like: can it follow *be* (adjective), replace *she/it* (noun), follow *will* (verb)?", why:"The type of the phrase points to the class of the head."},
      {t:"Cut words from the phrase one at a time and keep what still works.", why:"The omission test removes the dependents."},
      {t:"Find the word you cannot remove.", why:"This word is the head."},
      {t:"For a noun phrase, check that the verb agrees with this word.", why:"Agreement confirms the head and catches the nearest-noun error."}
    ]},
    M("e5u6-l1-x7","Priya writes: “The results of the survey is surprising.” What is the best correction and reason?",2,[
      ["*The results of the survey are surprising*, because *survey* is plural.","*Survey* is singular here. The verb does not agree with it."],
      ["No change. The verb should agree with the noun nearest to it.","That is a common habit in speech, but the rule uses the head, not the nearest noun."],
      ["*The results of the survey are surprising*, because the head of the subject is *results*, which is plural.","Right. The head decides agreement. *Of the survey* is a dependent."],
      ["*The result of the survey is surprising*, because the subject can only be singular.","This changes the meaning. The writer meant several results, and the plural head is correct."]
    ]),
    {id:"e5u6-l1-x8", type:"explain", q:"Hana, a learner of English, writes: “The box of chocolates are open.” She asks: “Chocolates is plural and it is next to the verb. Why is *are* wrong?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say which word is the head and what the head does to the verb.", model:"The verb agrees with the head of the subject, not with the nearest noun. In *the box of chocolates*, the head is *box*, because the phrase is about a box. *Of chocolates* is a dependent that describes what is in the box. *Box* is singular, so the verb is *is*: *The box of chocolates is open.* A quick test is to remove the dependent: *The box is open* sounds right, and *The box are open* does not.", points:["Says that the verb agrees with the head of the subject, not the nearest noun", "Names *box* as the head and *of chocolates* as a dependent", "Uses the omission test or gives the corrected sentence", "Keeps the tone kind and simple"]}
   ],
   apply:{
    intro:"These tasks use a short text of your choice and a free online dictionary. Nothing needs an account.",
    tasks:[
     {t:"Bracket five sentences", how:[
       "Copy five sentences from a news site or a textbook. Choose sentences of 10 to 20 words.",
       "Put square brackets around every noun phrase, and mark its head with an underline. Use the omission test if you are not sure.",
       "Then put parentheses around the preposition phrases. Check that each one contains a noun phrase."
     ], write:"Sentence… bracketed… heads… one place where I was not sure and what test I used…"},
     {t:"Collect ambiguous sentences", how:[
       "Search for the term “headline ambiguity” or look at newspaper headlines. Collect three sentences that have two readings because a phrase can attach in two places.",
       "For each one, write the two readings and show where the phrase attaches with brackets.",
       "Rewrite each sentence so that only one reading is possible."
     ], write:"Sentence… reading 1… reading 2… my rewrite…"},
     {t:"Head-first and head-last", how:[
       "Choose five English noun phrases with a modifier after the head (*the man in the hat*, *a book about birds*, *the girl who called*).",
       "If you know Japanese, write the Japanese phrase for each one and note where the head noun is. If you do not know Japanese, ask a speaker or use a dictionary.",
       "Write two sentences on what you notice about the order."
     ], write:"English phrase… Japanese phrase… where the head is… what I notice…"}
    ],
    proof:"Five bracketed sentences with heads marked. Three ambiguous sentences with two readings each and a rewrite. A short table of five English noun phrases with the Japanese order."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, sections “Structure within the sentence: Phrases, heads, and selection” and “Identifying phrases: Constituency tests”", note:"Look for how the book uses tests to show that a group of words is a unit."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u6-l2", title:"The parts of a clause and the seven patterns", minutes:55,
   hook:{q:"In *The window broke*, which word is the subject? And did the subject do anything?", options:["*Window* is the subject, and it did the breaking","*Window* is the subject, but it did not do anything: it was affected","*Broke* is the subject","There is no subject, because nobody acted"], answer:1, reveal:"**Window is the subject, and it did not act.** The subject is not always the “doer”. It is the phrase that agrees with the verb and comes before it in a normal statement. In *The window broke*, the window is the thing that changed. This lesson gives you tests for each part of a clause, so that you are not guided by meaning alone."},
   goals:[
     "Say the difference between a phrase type (what it is) and a clause element (what it does)",
     "Identify subject, verb, object, complement and adverbial with simple tests",
     "Tell an object from a complement, and an optional adverbial from a required one",
     "Name the seven clause patterns, and say why they are a teaching tool and not a full theory"
   ],
   learn:[
    {h:"Form and function: what a phrase is and what it does", body:[
      {lead:"Lesson 1 asked what a phrase is. This lesson asks what a phrase does in a clause."},
      "A [[hew-clause|clause]] is a group of words built around a verb. It usually has a subject and a predicate (the verb with everything that follows). In *Mei read a book on the train*, the whole group is one clause. We can cut it into five **elements**:",
      {table:[["Element","Short name","In the example"],["[[hew-subject|Subject]]","S","*Mei*"],["Verb","V","*read*"],["[[hew-object|Object]]","O","*a book*"],["[[hew-adverbial|Adverbial]]","A","*on the train*"],["[[hew-complement|Complement]]","C","(none here; see below)"]]},
      "Keep two questions apart. **Form** asks what kind of phrase it is: noun phrase, preposition phrase and so on. **Function** asks what job it does in the clause: subject, object and so on. One form can have many functions. A noun phrase can be a subject (*The teacher left*), an object (*I called the teacher*), a complement (*She is a teacher*) or an adverbial (*She left last week*).",
      {key:"Phrase type tells you what a group of words is. Clause element tells you what job it does. You need both labels."}
    ]},
    {h:"Subject and verb", body:[
      "The subject is the phrase that the verb agrees with. In a plain statement it comes before the verb. Do not rely on the idea “the subject does the action”, because it fails: *The window broke* and *The bill was paid by Ana* both have subjects that did nothing. Use these tests:",
      {list:[
        "**Agreement.** The verb changes with the subject: *The student **is** here / The students **are** here.*",
        "**Question test.** Move the subject after the auxiliary: *Did **the teacher** leave?*",
        "**Tag test.** The tag question repeats the subject as a pronoun: *The teacher left, didn’t **she**?*",
        "**Pronoun test.** A subject can be replaced by *I, he, she, we* or *they*, not by *me, him, her, us* or *them*."
      ]},
      "The verb element is the verb group: *left*, *has left*, *may have left*. It is the one element that every clause has. (Commands such as *Sit down* have no spoken subject. The next lesson comes back to this.)"
    ]},
    {h:"Objects and complements", body:[
      "After the verb, you often find a noun phrase. It can be an object or a complement. They look alike but do different jobs.",
      "An **object** names something that is affected by the verb or that takes part in it. A **direct object** can often become the subject of a passive sentence: *Mei hired a doctor* → *A doctor was hired by Mei.* The pronoun forms are *me, him, her, us, them*: *Mei hired **her**.*",
      "Some verbs have two objects. In *Tomás gave Mei a book*, *Mei* is the **indirect object** (the receiver) and *a book* is the **direct object** (the thing given).",
      "A **complement** describes or identifies another element. A subject complement belongs to the subject: *Mei is **a doctor***, *Mei is **happy***, *Mei became **a doctor***. It is about the same person, so it is not a new participant. It cannot become the subject of a passive: *A doctor was become by Mei* is impossible.",
      {table:[["","Object","Subject complement"],["Example","*Mei hired a doctor.*","*Mei became a doctor.*"],["Is it a different person or thing from the subject?","Yes: the doctor is another person","No: the doctor is Mei"],["Passive?","*A doctor was hired.*","No passive"],["Pronoun","*Mei hired her.*","*Mei became one.* (not *her*)"],["Verb type","Many action verbs","Linking verbs: *be, seem, become, look, feel*"]]},
      "A [[hew-linking-verb|linking verb]] joins the subject to a description: *be, seem, become, remain, look, feel, sound, get* (as in *get angry*). An **object complement** describes the object: *The news made Sione **happy**. They elected her **president**.*",
      {tip:"*Made* appears in two different patterns. *Tomás made Mei a cake* has two objects (Mei received the cake). *The news made Mei angry* has an object and a complement (Mei is angry). The test: can you say *Mei is angry*? If yes, *angry* is a complement."}
    ]},
    {h:"Adverbials: optional and required", body:[
      "An **adverbial** is a part of the clause that tells *when, where, how, why* or *how often*. It can be an adverb phrase (*slowly*), a preposition phrase (*at the station*), a noun phrase (*last week*) or a whole clause (*because it rained*). Note that the word *adverbial* names a function. An adverb is a word class.",
      "Most adverbials are **optional**. You can remove them, and the clause is still complete. They can also move: *On Friday, Mei met him at the station. / Mei met him at the station on Friday.*",
      "Some adverbials are **required**. The verb needs them to make a complete clause. *Mei lives in Osaka* is complete. *Mei lives* is not, in this meaning. *She put the keys on the table* needs *on the table*. Required adverbials are part of the clause patterns below.",
      {ex:"Yesterday, Mei slowly put the keys on the table at noon.\nS  = Mei\nV  = put\nO  = the keys\nA (required) = on the table\nA (optional) = yesterday, slowly, at noon\nTest: remove the optional ones → Mei put the keys on the table. (still complete)\nRemove the required one → *Mei put the keys. (not complete)", label:"Worked example", mono:true}
    ]},
    {h:"The seven clause patterns", body:[
      "The elements combine in a small number of ways, called [[hew-clause-pattern|clause patterns]]. A common teaching set, from *A Comprehensive Grammar of the English Language* (Quirk and others), has **seven clause patterns**. Required adverbials are written A. Optional adverbials are not counted.",
      {table:[["Pattern","Example"],["SV","*The baby smiled.*"],["SVO","*Priya wrote a report.*"],["SVC","*The room felt cold.*"],["SVA","*The meeting is at noon.*"],["SVOO","*Amara sent Dmitri a message.*"],["SVOC","*The news made Sione happy.*"],["SVOA","*Ana put the cake in the fridge.*"]]},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">One clause, five elements</text><rect class="d-sage" x="14" y="34" width="52" height="36" rx="6" stroke-width="2"/><text x="40" y="57" text-anchor="middle">S</text><rect class="d-soft" x="72" y="34" width="254" height="36" rx="6" stroke-width="2"/><text x="84" y="57">Mei</text><text class="s" x="318" y="57" text-anchor="end">subject</text><rect class="d-lup" x="14" y="78" width="52" height="36" rx="6" stroke-width="2"/><text x="40" y="101" text-anchor="middle">V</text><rect class="d-soft" x="72" y="78" width="254" height="36" rx="6" stroke-width="2"/><text x="84" y="101">gave</text><text class="s" x="318" y="101" text-anchor="end">verb</text><rect class="d-gold" x="14" y="122" width="52" height="36" rx="6" stroke-width="2"/><text x="40" y="145" text-anchor="middle">Oi</text><rect class="d-soft" x="72" y="122" width="254" height="36" rx="6" stroke-width="2"/><text x="84" y="145">Tomás</text><text class="s" x="318" y="145" text-anchor="end">indirect object</text><rect class="d-gold" x="14" y="166" width="52" height="36" rx="6" stroke-width="2"/><text x="40" y="189" text-anchor="middle">Od</text><rect class="d-soft" x="72" y="166" width="254" height="36" rx="6" stroke-width="2"/><text x="84" y="189">a new book</text><text class="s" x="318" y="189" text-anchor="end">direct object</text><rect class="d-rose" x="14" y="210" width="52" height="36" rx="6" stroke-width="2"/><text x="40" y="233" text-anchor="middle">A</text><rect class="d-soft" x="72" y="210" width="254" height="36" rx="6" stroke-width="2"/><text x="84" y="233">on Friday</text><text class="s" x="318" y="233" text-anchor="end">optional adverbial</text><text class="s" x="170" y="274" text-anchor="middle">Pattern: SVOO (the adverbial is not counted)</text></svg>', alt:"Five rows, each with a label and a phrase. S is Mei, the subject. V is gave, the verb. Oi is Tomás, the indirect object. Od is a new book, the direct object. A is on Friday, an optional adverbial. The pattern is SVOO.", cap:"Mei gave Tomás a new book on Friday. The five parts are labeled, and the pattern is SVOO, because the optional adverbial is not counted."},
      "The pattern depends on the **verb**, and many verbs have more than one pattern. Look at *get*:",
      {table:[["Pattern","Example with *get*"],["SVO","*She got a gift.*"],["SVC","*She got angry.*"],["SVOO","*She got me a gift.*"],["SVA","*We got to the station.*"],["SVOC","*They got the room ready.*"],["SVOA","*He got the dog into the car.*"]]},
      "That is why learner dictionaries list patterns for each sense of a verb. Treat the seven patterns as a **teaching tool**: they cover the main combinations, they are easy to learn, and they give teachers a common vocabulary. They are not a full theory. *Descriptive grammars* such as Huddleston and Pullum’s do not use the labels SVOA or SVOC. They describe the same facts using the term **complement** for anything the verb requires (object, predicative complement, or required adverbial) and **adjunct** for the optional extras. Books also differ on the *to*-version, *gave a book to Tomás*. Some call *to Tomás* an adverbial (SVOA), some call it a prepositional object, and descriptive grammars call it a complement of the verb. You will meet both sets of terms, and the tests are the same.",
      {h:"Compared with Japanese"},
      "Japanese marks the roles with particles, so the word order can change. *Mei ga Tomasu ni hon o watashita* (メイがトマスに本を渡した) is “Mei handed Tomás a book”. *Ga* marks the subject, *ni* marks the receiver, and *o* marks the direct object. You can say *Tomasu ni Mei ga hon o watashita* and keep the meaning. English has no such particles, so the position carries the roles: *Mei gave Tomás a book* and *Tomás gave Mei a book* have opposite meanings. This is why word order errors matter so much in English.",
      {h:"Habits and misconceptions"},
      {list:[
        "**“The subject does the action.”** Often, but not always: *The window broke*, *She received a letter*.",
        "**“The subject is the first word.”** Not always: *Yesterday, Mei left.* The subject is *Mei*.",
        "**“An adverbial is an adverb.”** An adverbial is a job. Preposition phrases, noun phrases and clauses do it too.",
        "**“A complement is anything after the verb.”** In the narrow sense used here, a complement describes the subject or the object.",
        "**“There are seven kinds of sentences.”** There are seven common patterns of the clause. Real sentences also add optional adverbials and clauses inside clauses."
      ]}
    ]}
   ],
   try:[
    {id:"e5u6-l2-x1", type:"sort", q:"Sort each **marked part** by its job in the clause.", buckets:["Subject","Object","Complement","Adverbial"], items:[
      {t:"“[The new teacher] smiled.”", b:0, why:"It comes before the verb, and you can replace it with *she* or *he*. Subject."},
      {t:"“She bought [a red scarf].”", b:1, why:"It names the thing bought, and it could become the subject of a passive (*A red scarf was bought*). Object."},
      {t:"“The soup tastes [delicious].”", b:2, why:"It describes the subject after the linking verb *tastes*. Subject complement."},
      {t:"“We met [at the station].”", b:3, why:"It says where, and it is a preposition phrase. Adverbial."},
      {t:"“[Heavy rain] closed the road.”", b:0, why:"It comes before the verb, and the verb agrees with it in the present: *Heavy rain closes the road.* Subject."},
      {t:"“Mei called [her mother].”", b:1, why:"A different person from the subject, and it has a passive: *Her mother was called.* Object."},
      {t:"“He became [a nurse].”", b:2, why:"It identifies the subject, *he*, after the linking verb *became*. No passive. Subject complement."},
      {t:"“She works [every Saturday].”", b:3, why:"A noun phrase that says when. Adverbial: form and function are different."}
    ]},
    {id:"e5u6-l2-x2", type:"sort", q:"Name the clause pattern of each sentence.", buckets:["SV","SVO","SVC","SVA","SVOO","SVOC","SVOA"], items:[
      {t:"The baby slept.", b:0, why:"A subject and a verb, nothing required after the verb. SV."},
      {t:"Priya wrote a report.", b:1, why:"One object. SVO."},
      {t:"The room felt cold.", b:2, why:"*Felt* is a linking verb, and *cold* describes the room. SVC."},
      {t:"The meeting is at noon.", b:3, why:"The preposition phrase is required: *The meeting is* is incomplete. SVA."},
      {t:"Amara sent Dmitri a message.", b:4, why:"Two objects: receiver and thing sent. SVOO."},
      {t:"The news made Sione happy.", b:5, why:"*Sione* is the object, and *happy* describes him. SVOC."},
      {t:"Ana put the cake in the fridge.", b:6, why:"An object and a required adverbial of place. SVOA."}
    ]},
    M("e5u6-l2-x3","Compare *Mei hired a doctor* and *Mei became a doctor*. Which statement is correct?",2,[
      ["Both sentences are SVO, because both have a noun phrase after the verb.","The form is the same, but the function is different. A noun phrase after a verb can be an object or a complement."],
      ["Both sentences are SVC, because *doctor* describes *Mei* in both.","In the first sentence the doctor is a different person from Mei."],
      ["The first is SVO, because it has a passive (*A doctor was hired*). The second is SVC, because *a doctor* is Mei and there is no passive.","Right. The passive test and the “same person?” test separate the two."],
      ["The first is SVC and the second is SVO.","This reverses them. *Hired* is a normal action verb and *became* is a linking verb."]
    ]),
    {id:"e5u6-l2-x4", type:"spot", q:"Tap each part that is an **adverbial**.", ask:"is an adverbial", parts:[
      {t:"Last year", flag:true, why:"A noun phrase that says when. Adverbial."}, ", ", {t:"Yuki", flag:false, why:"The subject of *moved*."}, " ", {t:"moved", flag:false, why:"The verb."}, " ", {t:"to Osaka", flag:true, why:"A preposition phrase that says where. Adverbial."}, ", and ", {t:"now", flag:true, why:"An adverb that says when. Adverbial."}, " she ", {t:"works", flag:false, why:"The verb of the second clause."}, " ", {t:"at a hospital", flag:true, why:"A preposition phrase that says where. Adverbial."}, " ", {t:"on weekends", flag:true, why:"A preposition phrase that says when. Adverbial."}, "."
    ]},
    {id:"e5u6-l2-x5", type:"number", q:"How many **adverbials** are in this sentence? “Yesterday Mei slowly left the office at five.”", answer:3, tol:0, unit:"adverbials", why:"The adverbials are *yesterday*, *slowly* and *at five*. *The office* is the object of *left*. *Mei* is the subject.", wrongs:[
      {v:2, tol:0, why:"This counts only the two single words. A preposition phrase such as *at five* is also an adverbial, because it says when."},
      {v:4, tol:0, why:"This counts *the office* as an adverbial. It is a noun phrase, but it is the object of *left*: you can replace it with *it* (*Mei left it at five*)."}
    ], hint2:"Ask: which parts say when, how or where, and can be left out?"},
    {id:"e5u6-l2-x6", type:"order", q:"Put these steps in a sensible order for analyzing a clause.", items:[
      {t:"Find the verb group.", why:"Everything else is described in relation to the verb."},
      {t:"Find the subject: ask *who or what* before the verb and check agreement.", why:"The subject is the easiest element to find once you have the verb."},
      {t:"Check whether the verb is a linking verb: if a word describes the subject, it is a complement.", why:"This separates complements from objects."},
      {t:"Look for an object: try the passive test and the *him/her/them* test.", why:"Do this after the linking-verb check so that you do not call a complement an object."},
      {t:"Mark the rest as adverbials, and delete each one to see whether it is required.", why:"Required ones count in the pattern, and optional ones do not."}
    ]},
    {id:"e5u6-l2-x7", type:"match", q:"Match each sentence with *get* to its clause pattern.", pairs:[
      ["She got a gift.","SVO","One object: the gift."],
      ["She got angry.","SVC","*Angry* describes the subject after the linking verb *got*."],
      ["She got me a gift.","SVOO","*Me* is the receiver and *a gift* is the thing."],
      ["We got to the station.","SVA","The preposition phrase is required: *We got* is incomplete."],
      ["They got the room ready.","SVOC","*Ready* describes the object, *the room*."],
      ["He got the dog into the car.","SVOA","An object and a required adverbial of place."]
    ]},
    {id:"e5u6-l2-x8", type:"explain", q:"A student you tutor says: “My teacher said that the subject is the one who does the action. But in *The window broke*, the window did nothing. Is *window* really the subject?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what really defines a subject, and give two tests.", model:"Yes, *window* is the subject. The rule about the doer is a rough guide that fits many sentences, but a subject is defined by its position and by what it does to the verb. The subject agrees with the verb (*The window breaks / The windows break*), it comes after the auxiliary in a question (*Did the window break?*), and it can be replaced by *it*. In *The window broke*, the window is the thing that changed. The same is true in the passive: *The window was broken by the wind*. The subject still does not do the action.", points:["Says that *window* is the subject", "Says that the doer idea is a rough guide and not the definition", "Gives at least two tests (agreement, question order, tag, pronoun)", "Gives a second sentence, such as the passive, to support the point"]}
   ],
   apply:{
    intro:"These tasks use a short text of your choice and a free learner dictionary. Nothing needs an account.",
    tasks:[
     {t:"Analyze ten clauses", how:[
       "Copy ten short clauses from a news site, a textbook or a message from a friend.",
       "Label each element: S, V, O, C or A. Mark each adverbial as optional or required, using the deletion test.",
       "Write the pattern name (SV, SVO and so on) next to each clause."
     ], write:"Clause… elements… pattern… one clause that was hard and why…"},
     {t:"Patterns in a learner dictionary", how:[
       "Look up *get*, *make* and *put* in the Cambridge Dictionary (dictionary.cambridge.org) or Merriam-Webster (merriam-webster.com).",
       "Find at least three different patterns for each verb. Dictionaries show them with labels such as *transitive* or *intransitive*, and example sentences.",
       "Name the pattern in each example (SVO, SVC and so on)."
     ], write:"Verb… example… pattern…"},
     {t:"Seven sentences on one topic", how:[
       "Choose a topic you know well, such as a hobby or your job.",
       "Write one sentence for each of the seven patterns. Use different verbs.",
       "Swap the order of two elements in one sentence. What happens to the meaning?"
     ], write:"SV… SVO… SVC… SVA… SVOO… SVOC… SVOA… what happened when I swapped…"}
    ],
    proof:"Ten labeled clauses with patterns. A list of patterns for three verbs, from a dictionary. Seven sentences, one for each pattern."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, sections “Arguments and thematic roles” and “Changing argument structure: Causatives and passives”", note:"Look for how the book describes what a verb needs. It uses terms such as arguments, which cover the same ground as objects and complements."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u6-l3", title:"Why English needs a subject", minutes:55,
   hook:{q:"In *It’s raining*, what does the word *it* refer to?", options:["The sky","The weather","The rain","Nothing: it only fills the subject position"], answer:3, reveal:"**Nothing.** *It* has no meaning of its own here. English has a strong rule: a finite clause needs a subject. When no real thing is doing anything, English fills the place with a dummy word. Japanese has no such rule. It can leave the subject out when the listener already knows it. This lesson explains both ideas and helps you teach them kindly."},
   goals:[
     "State the rule that a finite English clause needs a subject, and name the exceptions",
     "Tell dummy *it* from ordinary *it*, and say when English uses each one",
     "Explain existential *there* (*There is a bus at eight*) and show that it works as a subject",
     "Describe Japanese subject omission accurately, and give short, kind explanations for common learner errors"
   ],
   learn:[
    {h:"The rule: a finite clause needs a subject", body:[
      {lead:"In English, almost every clause with a tense needs a subject written or said out loud. This is a strong rule, and learners from many languages find it surprising."},
      "Compare two messages. A learner writes: *Went to the market. Bought some fruit.* An English reader understands the meaning but sees that the subject is missing. In standard English, the clauses are *I went to the market. I bought some fruit.*",
      "There are a few exceptions, and they are limited:",
      {list:[
        "**Commands (imperatives).** *Sit down.* The listener is the understood subject.",
        "**Informal notes and messages.** *Can’t come tonight. Hope you’re well. Looks good.* Subjects, mostly *I* and *it*, are dropped at the start of short messages and diaries. It is a register choice, and it works only when the subject is obvious.",
        "**Coordinated clauses.** *She opened the door and walked in.* The second verb shares the subject of the first."
      ]},
      "In a normal main clause with a tense, the subject must be there. Grammars say that the subject is **obligatory** in English. In a [[hew-finite|finite clause]] (a clause whose verb shows tense; Lesson 5 explains this) the rule is strong."
    ]},
    {h:"Dummy it: a subject with no meaning", body:[
      "Some clauses have nothing that could be a real subject. English still needs one, so it uses a [[hew-dummy-subject|dummy subject]]: the word *it* with no meaning. It is also called an *empty*, *expletive* or *formal* subject.",
      {table:[["Use","Example","Why *it*?"],["Weather","*It’s raining. It’s windy.*","No thing does the raining"],["Time","*It’s half past five.*","No thing “is” the time"],["Temperature, light","*It’s cold in here. It’s getting dark.*","The clause describes a situation"],["Distance","*It’s far to the station.*","The clause describes a situation"],["Moved subject","*It is important to rest. It is clear that she left.*","The real subject is later in the sentence"],["Duration","*It takes two hours to get there.*","The real subject is later in the sentence"]]},
      "How do you know that *it* is a dummy? Use two tests. First, ask what *it* means: in *It’s raining*, the answer is nothing. You cannot ask *What is raining?* and get an answer. Second, try another word. *It* can be replaced by a noun in *It was expensive* (*The phone was expensive*), but not in *It’s raining* (*The weather is raining* is impossible).",
      "Compare an ordinary, **referential** *it*: *I bought a phone. **It** was cheap.* Here *it* points back to *phone*, and the listener understands it.",
      "The last two rows of the table are a very frequent use. Instead of putting a long phrase at the front, English puts *it* at the front and moves the real subject to the end: *To get a visa takes weeks* becomes *It takes weeks to get a visa.* English prefers heavy parts near the end of a sentence. Unit 10 explains this again as “end weight”."
    ]},
    {h:"Existential there", body:[
      "To say that something exists or is present, English often begins with *there* plus a form of *be*: *There is a bus at eight. There are two cats in the garden.* This is [[hew-existential-there|existential *there*]]. It introduces something new, and it names no place.",
      "Do not confuse it with the place word *there* in *Put it there.* or *There it is!* The place word is stressed and means “at that place”. Existential *there* is usually weak in speech: GA /ðɚ/, SSBE /ðə/, compared with the full forms GA /ðɛr/, SSBE /ðeə/ (see Unit 3).",
      {key:"Existential *there* is a dummy subject. It fills the subject position, and the thing that exists comes after the verb."},
      "Descriptive grammars agree that *there* works as a subject. You can show it with two tests from Lesson 2, and one more check:",
      {list:[
        "**Question test.** *Is there a bus?* The word *there* moves after the verb, just as a subject does.",
        "**Tag test.** *There is a bus at eight, isn’t **there**?* The tag repeats *there*, the way a tag repeats a subject.",
        "**Not a place.** Existential *there* can appear with the place word in the same clause: *There’s a bus stop over there.* The first *there* is the dummy subject, and the second one names the place."
      ]},
      "The thing that exists, *a bus*, is called the **notional subject**: it is the subject by meaning. In careful writing, the verb agrees with it: *There **are** two buses.* In everyday speech, many fluent speakers say *There’s two buses*, because *there’s* works almost like a fixed chunk. Grammars of spoken English describe this as normal in informal speech. Teachers can present it as an informal spoken form, not as an error, and point to *there are* for careful writing. Existential sentences usually introduce something **new**, so a definite phrase is odd: *There is a bus at eight* is natural, *There is the bus at eight* is not (except in a list or a reminder: *Who could help? There’s the new teacher.*).",
      {ex:"There is a pond in the park.\n  there = dummy subject (weak: GA /ðɚ/, SSBE /ðə/)\n  is = verb\n  a pond = notional subject (new information)\n  in the park = adverbial (place)", label:"Worked example", mono:true}
    ]},
    {h:"Compared with Japanese: leaving the subject out", body:[
      "Japanese does have subjects. It marks them with the particle *ga* (が): *Ame ga futte iru* (雨が降っている), “Rain is falling”, has the subject *ame* (“rain”). But Japanese often leaves the subject, and many other parts, out when the listener can work them out from the situation. This is not a mistake. It is a normal feature of the grammar, and it is very common in everyday speech.",
      {table:[["Japanese","Romaji","What it says","English needs"],["寒いですね。","*Samui desu ne.*","(It is) cold, isn’t it?","*It’s cold, isn’t it?*"],["学生です。","*Gakusei desu.*","(I) am a student.","*I’m a student.*"],["昨日、東京に行った。","*Kinō, Tōkyō ni itta.*","(I/we/…) went to Tokyo yesterday.","*I went to Tokyo yesterday.*"]]},
      "Two more facts help. First, the particle *wa* (は) marks the **topic**, what the sentence is about. The topic is often, but not always, the subject: *Zō wa hana ga nagai* (象は鼻が長い) means “As for elephants, the trunk is long”. The topic is *zō* and the subject is *hana*. Second, Japanese uses special verbs for existence, *aru* and *iru*: *Kōen ni ike ga arimasu* (公園に池があります), “In the park there is a pond”. The word for pond, *ike*, takes *ga*, which marks the subject.",
      "So the teaching message is not “Japanese has no subjects”. It is: in Japanese, a speaker can say the subject or leave it out, depending on what the listener knows. English asks the speaker to put a subject in every finite clause. When there is no real subject, English adds *it* or *there*."
    ]},
    {h:"Learner errors and short explanations", body:[
      "These errors are common, and they have a simple cause. A kind explanation names the cause, gives the correct sentence, and says how the pattern works.",
      {table:[["Learner sentence","Better sentence","Short explanation"],["*Is raining today.*","*It’s raining today.*","English needs a subject. Use *it* when no real thing is doing the action."],["*Here is very hot.*","*It’s very hot here.*","Weather and temperature use *it*. *Here* is a place, not a subject."],["*Have a bus at eight.*","*There is a bus at eight.*","To say something exists, start with *there is/are*."],["*Went to Osaka last week.*","*I went to Osaka last week.*","Say who went. Japanese can leave this out. English cannot."],["*It is many people here.*","*There are many people here.*","Use *there* to say that things exist. *It* cannot do this job."]]},
      "A practical tip: ask the learner to read the sentence and then to say **who or what** the verb is about. If the answer is “nobody” (weather, time), the English word is *it*. If the answer is “a thing that exists”, the English word is *there*. If the answer is “I” or “we”, the missing word is a real subject."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“*It* always refers to something.”** Often it does, but a dummy *it* refers to nothing.",
        "**“Native speakers drop subjects freely.”** They do so mainly in informal speech, in short notes and in a few fixed phrases (*Hope to see you soon*). The same speakers always include the subject in a longer, careful sentence.",
        "**“English is illogical because *it* has no meaning.”** The rule is a structural one: English needs a subject to build a finite clause. Some other languages have dummy subjects too, such as German *es* (*Es regnet*) and French *il* (*Il pleut*), both “it rains”. Japanese works in a different way.",
        "**“*There* always means a place.”** Existential *there* names no place. It introduces something that exists.",
        "**“Japanese speakers have no sense of the subject.”** No. They manage it by context and particles. English asks them to use a different tool."
      ]}
    ]}
   ],
   try:[
    {id:"e5u6-l3-x1", type:"sort", q:"Is *it* in each sentence a **dummy** subject or an ordinary (referential) *it*?", buckets:["Dummy it","Ordinary it"], items:[
      {t:"“It’s raining.”", b:0, why:"No thing is raining. The word fills the subject position."},
      {t:"“I bought a phone. It was cheap.”", b:1, why:"*It* points back to *phone*."},
      {t:"“It takes two hours to get there.”", b:0, why:"The real subject is *to get there*, moved to the end. *It* has no meaning."},
      {t:"“It is important to sleep.”", b:0, why:"The real subject is *to sleep*. *It* is a dummy placed first."},
      {t:"“Where is my bag? It is under the chair.”", b:1, why:"*It* points back to *bag*."},
      {t:"“It’s nearly midnight.”", b:0, why:"A time expression. *It* has no meaning."},
      {t:"“The dog barked, and it ran away.”", b:1, why:"*It* is the dog."}
    ]},
    M("e5u6-l3-x2","Why do we say *It’s raining* and not *Is raining*?",2,[
      ["Because rain is a thing, and *it* is its name.","*It* is not the name of the rain. It has no meaning here."],
      ["Because it is a rule of spelling.","This is not about spelling. It is about sentence structure."],
      ["Because a finite English clause needs a subject, and when there is no real one, English uses a dummy *it*.","Right. The rule is structural. *It* fills the place that the subject must fill."],
      ["Because *rain* is a verb and verbs need *it*.","The verb *rain* does not need *it* by its meaning. The rule applies to all finite clauses."]
    ]),
    {id:"e5u6-l3-x3", type:"spot", q:"Kaito, a first-year undergraduate in information engineering, writes to a friend about his day. Tap each part that needs a change in standard English.", ask:"needs a change", parts:[
      "“Yesterday I went to the library. ", {t:"Is very quiet there", flag:true, why:"It needs a dummy subject: *It is very quiet there.*"}, ". I studied for three hours. At six, ", {t:"started raining", flag:true, why:"It needs a subject: *it started raining*."}, ", but ", {t:"there was a bus at ten past six", flag:false, why:"Correct. *There was* is the right way to say that a bus existed at that time."}, ". ", {t:"Hope you are well", flag:false, why:"Dropping *I* is acceptable in a friendly message. *Hope you are well* is a fixed informal pattern."}, ".”"
    ]},
    {id:"e5u6-l3-x4", type:"match", q:"Match each learner sentence to the best short explanation.", pairs:[
      ["“Is raining today.”","English needs a subject. Use *it* when no real thing does the action.","The weather clause has no real subject, so *it* fills the place."],
      ["“Have a bus at eight.”","To say that something exists, use *there is* or *there are*.","This is existential *there*: *There is a bus at eight.*"],
      ["“Went to Tokyo last week.”","Say who went. Japanese can leave this out, but English cannot.","The clause needs a real subject: *I went to Tokyo last week.*"],
      ["“It is many people in the room.”","For things that exist, use *there*, and not *it*.","*There are many people in the room.* Here *it* cannot introduce a plural group."]
    ]},
    {id:"e5u6-l3-x5", type:"number", q:"How many **dummy subjects** (dummy *it* or existential *there*) are in this text? “It is late, and there are two buses left. It takes an hour to get home, so I will call a taxi.”", answer:3, tol:0, unit:"dummy subjects", why:"The three dummy subjects are *It is late* (time), *there are two buses* (existential) and *It takes an hour* (duration). *I will call a taxi* has a real subject, *I*.", wrongs:[
      {v:2, tol:0, why:"This counts only the two *it* words. Existential *there* is also a dummy subject, because it fills the subject position and means no place."},
      {v:4, tol:0, why:"This counts *I* as well. *I* refers to a real person, so it is an ordinary subject."}
    ], hint2:"A dummy subject has no meaning and could not be replaced by a real noun phrase."},
    {id:"e5u6-l3-x6", type:"order", q:"Put these steps in a sensible order for explaining *Is raining* to a learner.", items:[
      {t:"Say what is good: the learner’s meaning is clear.", why:"A kind explanation starts with what works."},
      {t:"Give the corrected sentence: *It’s raining.*", why:"The learner needs the target form before the rule."},
      {t:"Name the pattern: English finite clauses need a subject.", why:"Now the learner sees why the correction is needed."},
      {t:"Explain that *it* here has no meaning: it only fills the subject place.", why:"This prevents the question “what does *it* mean?”"},
      {t:"Give two more examples, such as *It’s late* and *It’s cold*, and ask for one of the learner’s own.", why:"Practice with a new example shows that the learner has the pattern."}
    ]},
    M("e5u6-l3-x7","Which result shows that existential *there* works as a subject?",1,[
      ["It can be replaced by *here* in every sentence.","It cannot: *Here is a bus at eight* has a different meaning, and *there* names no place."],
      ["It moves in a question and is repeated in a tag: *Is there a bus? There is a bus, isn’t there?*","Right. Those are the same tests used for subjects. A subject moves after the auxiliary and is repeated in the tag."],
      ["It is always stressed and means “at that place”.","That describes the place word. Existential *there* is usually weak and names no place."],
      ["It must come after the verb *be*.","It comes before *be*: *There is*. After the verb comes the notional subject."]
    ]),
    {id:"e5u6-l3-x8", type:"explain", q:"Hana, a Japanese learner you tutor, asks: “In Japanese I can say *Samui desu ne* with no word for “it”. So why must I say *It’s cold, isn’t it?* What is that *it*?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what it is, why English needs it, and what Japanese does instead.", model:"The *it* is a dummy subject. It has no meaning, and it does not point to the weather or to anything else. English has a strong rule that a finite clause needs a subject, so when nothing real can be the subject, English puts *it* in the place. Japanese does have subjects, but it can leave one out when the situation makes it clear, so *Samui desu ne* needs no extra word. I would tell her that the English speaker is not adding meaning: the word only meets the grammar rule.", points:["Says that *it* is a dummy subject with no meaning", "Says that English requires a subject in a finite clause", "Says that Japanese can leave out what the context makes clear (not that it has no subjects)", "Keeps the tone kind and gives a contrast with English"]}
   ],
   apply:{
    intro:"These tasks use the Corpus of Contemporary American English (COCA, english-corpora.org, free with a registered account; daily search limits apply), a free dictionary, and your own writing.",
    tasks:[
     {t:"Corpus check: there’s two or there are two?", how:[
       "Open COCA at english-corpora.org and sign in. Type the phrase *there are two* in the search box. Note how many results you find.",
       "Do the same for *there is two*, and then for *there’s two*.",
       "Look at the example lines for each search. Each line shows what kind of text it comes from, such as spoken, fiction or academic. In which kinds of text do you find the *is/’s* form?",
       "Write two sentences on what the evidence says about speech and writing."
     ], write:"there are two… there is two… there ’s two… what the evidence says…"},
     {t:"Dictionary check on there and it", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org) or Merriam-Webster (merriam-webster.com). Look up *there*. Find the sense that is used with *be* to say that something exists.",
       "Look up *it*. Find the sense for weather, time or distance.",
       "Copy one example sentence for each sense. Mark which sentence has a dummy subject."
     ], write:"Entry… sense… example… dummy or ordinary?"},
     {t:"Audit your own subjects", how:[
       "Take ten messages or sentences that you wrote in English, such as emails or notes.",
       "Underline every subject. Circle any clause that has none, and circle any dummy *it* or *there*.",
       "Rewrite the clauses that have no subject, and write one sentence on when you leave the subject out."
     ], write:"Sentences… clauses with no subject… my rewrites… when I leave the subject out…"}
    ],
    proof:"A table of corpus counts for three forms with notes on speech and writing. Dictionary examples for dummy *it* and *there*. Ten audited sentences with rewrites."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Syntactic knowledge and grammaticality judgements”", note:"Look for how the book decides whether a sentence is grammatical, which is the idea behind the subject rule."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u6-l4", title:"Questions, negatives and the auxiliary", minutes:55,
   hook:{q:"We say *Can she swim?* and *She can’t swim.* Why can’t we say *Likes she tea?* or *She likes not tea?*", options:["Because those sentences are old-fashioned slang","Because *like* is not an auxiliary verb, so it cannot move or take *not* by itself","Because *like* is an irregular verb","Because questions always need *do*"], answer:1, reveal:"**Like is a main verb, not an auxiliary.** In modern English only a small group of verbs, the auxiliaries, can move before the subject or take *n’t* by themselves. A main verb such as *like* needs the helper *do*: *Does she like tea? She doesn’t like tea.* Older English could say *Likes she tea?* This lesson explains the four tests, the helper *do*, and the questions built with them."},
   goals:[
     "Use the NICE properties (Negation, Inversion, Code, Emphasis) to tell auxiliary verbs from main verbs",
     "Explain *do*-support and say when it is and is not used",
     "Build yes/no questions, wh-questions and negatives, and avoid the common word-order and verb-form errors",
     "Form and explain tag questions, including the exceptions (*aren’t I?*, *shall we?*)"
   ],
   learn:[
    {h:"Auxiliary verbs and the NICE tests", body:[
      {lead:"English has a small set of verbs that behave differently from all the others. They are the auxiliary verbs, and four tests show them."},
      "An [[hew-auxiliary|auxiliary verb]] helps a main verb. The auxiliaries are *be, have, do* and the modals (*can, could, may, might, shall, should, will, would, must*). Unit 4 introduced them. Here we use four properties, known as the [[hew-nice|NICE properties]], to separate them from main verbs.",
      {table:[["Property","Auxiliary","Main verb"],["**N**egation: add *n’t* or *not* right after the verb","*She can’t swim.*","*She doesn’t like tea.* (not *She likes not tea*)"],["**I**nversion: move before the subject to make a question","*Can she swim?*","*Does she like tea?* (not *Likes she tea?*)"],["**C**ode: stand alone and stand for the rest of the phrase","*I can swim, and so can she.*","*I like tea, and so does she.*"],["**E**mphasis: carry stress to show that the statement is true","*She CAN swim.*","*She DOES like tea.*"]]},
      "A true auxiliary passes all four tests directly. A main verb can pass them only with the help of *do*. The verb *be* is special: even as a main verb it passes the tests (*Is she here? She isn’t here.*). The main verb *have* behaves like a main verb in General American (*Do you have a pen?*). In British English, *Have you got a pen?* is very common, and *Have you a pen?* is possible but formal or old-fashioned.",
      {tip:"The four tests work as a quick check. If you can say *Verb + n’t* and *Verb + subject?* with no *do*, the verb is an auxiliary. *Can’t* and *Can she?* work, so *can* is an auxiliary. *She likes not tea* and *Likes she tea?* do not, so *like* is a main verb."}
    ]},
    {h:"Do-support: the helper that is added", body:[
      "When a clause needs an auxiliary for a question, a negative, code or emphasis, and it has none, English adds the auxiliary **do**. This is called [[hew-do-support|do-support]]. The helper carries the tense and the agreement, and the main verb goes back to its base form.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u6a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Making a question with no auxiliary</text><rect class="d-sage" x="14" y="32" width="312" height="42" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">She likes tea.</text><text class="s" x="170" y="68" text-anchor="middle">only a main verb, with tense and -s</text><path class="d-ink" d="M170 76V96" stroke-width="2" marker-end="url(#e5u6a)"/><text class="s" x="180" y="92">add do (takes tense, -s)</text><rect class="d-lup" x="14" y="100" width="312" height="42" rx="8" stroke-width="2"/><text x="170" y="120" text-anchor="middle">She does like tea.</text><text class="s" x="170" y="136" text-anchor="middle">main verb back to base form: like</text><path class="d-ink" d="M170 144V164" stroke-width="2" marker-end="url(#e5u6a)"/><text class="s" x="180" y="160">move does first</text><rect class="d-gold" x="14" y="168" width="312" height="42" rx="8" stroke-width="2"/><text x="170" y="188" text-anchor="middle">Does she like tea?</text><text class="s" x="170" y="204" text-anchor="middle">question: Inversion</text><rect class="d-rose" x="14" y="224" width="312" height="42" rx="8" stroke-width="2"/><text x="170" y="244" text-anchor="middle">She doesn’t like tea.</text><text class="s" x="170" y="260" text-anchor="middle">negative: add n’t to does</text><text class="s" x="170" y="288" text-anchor="middle">The same helper builds the negative.</text></svg>', alt:"A flow in boxes. She likes tea has only a main verb. Add do, which takes the tense and the s, to get She does like tea, with the main verb in base form. Move does before the subject to get Does she like tea. A separate box shows the negative: She doesn’t like tea.", cap:"Do-support: the helper takes the tense, and the main verb returns to its base form."},
      "Four facts make the rule easy to apply.",
      {list:[
        "**Tense is marked once.** *Did she go?* The helper *did* carries the past, so the main verb is the base form *go*. *Did she went?* marks the past twice.",
        "**The main verb is the base form.** *She doesn’t like tea.* The *-s* has moved to *does*, so it does not return on *like*.",
        "**No *do* with another auxiliary.** *Can she go?* and *She can’t go.* The modal already does the work, so *Do she can go?* is wrong.",
        "**No *do* when the question word is the subject.** *Who called you?* and *What happened?* The subject is already first, so no inversion is needed. A *do* appears only for emphasis."
      ]},
      "Do-support is a historical development. Older English could use the main verb itself in questions and negatives (*Likes she tea?*), and *do*-support spread during Early Modern English. It is now the standard way."
    ]},
    {h:"Questions: yes/no and wh-", body:[
      "A **yes/no question** moves the first auxiliary before the subject. This is called [[hew-inversion|inversion]]. *She is late* → *Is she late?* *They have left* → *Have they left?* With no auxiliary, add *do*: *You like tea* → *Do you like tea?*",
      "A **wh-question** begins with a question word (*what, who, where, when, why, how*) followed by the same inversion: *Where **is** she going? What **did** you buy?* The wh-word is followed by an auxiliary and then the subject.",
      {table:[["Type","Example","Pattern"],["Yes/no, with auxiliary","*Can you help me?*","Auxiliary + subject + main verb"],["Yes/no, with *do*","*Did you call Priya?*","*Do* + subject + base form"],["Wh-, object question","*What did you buy?*","Wh-word + auxiliary + subject + verb"],["Wh-, subject question","*Who bought this?*","Wh-word as the subject + verb (no *do*)"]]},
      "There is one more rule. **Embedded questions** do not invert. When a question is inside a longer sentence, the word order stays like a statement: *I wonder where she **is*** (not *where is she*). *Can you tell me what time it is?* (not *what time is it*). Learners often invert here because a direct question has the auxiliary first. A short rule helps: “if a question starts with *I wonder* or *Can you tell me*, use statement order.”",
      "Inversion is also used outside questions, in some formal or literary sentences. *Never have I seen such a crowd.* These share the same grammar: the auxiliary moves before the subject."
    ]},
    {h:"Tag questions", body:[
      "A [[hew-tag-question|tag question]] is a short question at the end of a statement. It is built with the same tools: an auxiliary and a pronoun subject. The rules are:",
      {list:[
        "The tag uses the **same auxiliary** as the statement. With no auxiliary, use *do*: *She likes tea, **doesn’t she**?*",
        "The tag **reverses the polarity**. After a positive statement, the tag is negative: *You can swim, **can’t you**?* After a negative statement, the tag is positive: *They haven’t arrived, **have they**?*",
        "The tag subject is a **pronoun**: *Mei is late, isn’t **she**?* *There is a bus, isn’t **there**?*"
      ]},
      "There are a few exceptions. *I am late, **aren’t I**?* is the standard tag for *I am*. *Let’s go, **shall we**?* and commands use *will you?* (*Close the door, will you?*). The tune matters too. A tag with a **falling** tune asks for agreement (*It’s cold, isn’t it?*). A tag with a **rising** tune is a real question (*You’ve met him, haven’t you?*). Unit 3 explains the tunes.",
      {h:"Compared with Japanese"},
      "Japanese makes a yes/no question by adding the particle *ka* (か) at the end of the sentence, and the word order stays the same: *Tabemasu ka?* (食べますか, “Do (you) eat?”). Japanese tag-like checks use the sentence-final *ne* (ね) or *janai* (じゃない): *Ii tenki desu ne* (いい天気ですね), “Nice weather, isn’t it?” English must build each tag from the auxiliary and pronoun of the sentence, so it is a new skill. Negatives also differ: Japanese puts *-nai* (ない) inside the verb ending (*tabenai*, “does not eat”), while English adds an auxiliary and then *not*. Learners therefore need to practice the helper *do*, which has no match in Japanese."
    ]},
    {h:"Common errors, and what to say", body:[
      "These errors come from a simple cause: the learner has not yet built the habit of the helper *do* or of inversion. Mistakes under speed are normal even for fluent speakers.",
      {table:[["Error","Correct","Cause"],["*What you want?*","*What do you want?*","No *do*, no inversion"],["*Did she went?*","*Did she go?*","Past marked twice"],["*Do you can swim?*","*Can you swim?*","*Do* with a modal"],["*She doesn’t likes tea.*","*She doesn’t like tea.*","The *-s* stays on the main verb"],["*I wonder where is she.*","*I wonder where she is.*","Inversion in an embedded question"],["*She likes tea, isn’t she?*","*She likes tea, doesn’t she?*","The tag uses the wrong auxiliary"]]},
      "A kind way to correct is to say the right form back and give one reason: “*Did she go?* The word *did* already shows the past, so the verb is *go*.”"
    ]}
   ],
   try:[
    {id:"e5u6-l4-x1", type:"sort", q:"Is the verb in capitals an **auxiliary** or a **main verb**? Use the NICE tests.", buckets:["Auxiliary","Main verb"], items:[
      {t:"“She CAN swim.”", b:0, why:"*Can* passes all four tests: *can’t*, *Can she?*, *so can he*, *She CAN swim*."},
      {t:"“She LIKES tea.”", b:1, why:"*Likes* needs *do* for the tests: *doesn’t like*, *Does she like?*."},
      {t:"“She IS waiting.”", b:0, why:"*Is* here is an auxiliary: *isn’t*, *Is she waiting?*."},
      {t:"“They HAVE left.”", b:0, why:"The perfect *have* is an auxiliary: *haven’t*, *Have they left?*."},
      {t:"“I WANT some water.”", b:1, why:"*Want* is a main verb: *I don’t want*, *Do you want?*."},
      {t:"“He MUST go.”", b:0, why:"*Must* is a modal: *mustn’t*, *Must he go?*."},
      {t:"“She WALKS to work.”", b:1, why:"*Walks* is a main verb: *doesn’t walk*, *Does she walk?*."}
    ]},
    M("e5u6-l4-x2","Which sentence is the standard negative of *She likes tea*?",2,[
      ["*She no likes tea.*","*No* is not used before a verb to make a negative in standard English."],
      ["*She likes not tea.*","This is an older pattern. Modern English puts *not* after an auxiliary."],
      ["*She doesn’t like tea.*","Right. *Does* carries the tense and the *-s*, and the main verb is the base form."],
      ["*She doesn’t likes tea.*","The *-s* moved to *does*, so it must not stay on *likes*."]
    ]),
    {id:"e5u6-l4-x3", type:"match", q:"Match each statement to its yes/no question.", pairs:[
      ["She can swim.","Can she swim?","The modal moves before the subject. No *do* is needed."],
      ["She swims.","Does she swim?","No auxiliary, so *do* is added in the present with *-es* for *she*. The main verb is the base form."],
      ["They have finished.","Have they finished?","The auxiliary *have* moves before the subject."],
      ["He was late.","Was he late?","*Be* moves before the subject, even as a main verb."],
      ["You ate lunch.","Did you eat lunch?","No auxiliary, so *did* is added, and *ate* goes back to *eat*."]
    ]},
    {id:"e5u6-l4-x4", type:"spot", q:"Tomás is practicing questions in English. Tap each question or sentence that needs a change in standard English.", ask:"needs a change", parts:[
      "Tomás says: “", {t:"What you want", flag:true, why:"A wh-question needs the helper and inversion: *What do you want?*"}, " to eat?” “", {t:"Do you like fish", flag:false, why:"Correct. *Do* + subject + base form."}, "?” “", {t:"Did she went", flag:true, why:"The past is marked twice. *Did she go?*"}, " home?” “", {t:"Can you help me", flag:false, why:"Correct. A modal moves before the subject."}, "?” “I wonder ", {t:"where is she", flag:true, why:"An embedded question keeps statement order: *where she is*."}, ".” “She asked me ", {t:"where he lives", flag:false, why:"Correct. Statement order in an embedded question."}, ".”"
    ]},
    {id:"e5u6-l4-x5", type:"number", q:"How many **auxiliary verbs** are in this sentence? “She has been working, and she can’t stop, but she doesn’t mind.”", answer:4, tol:0, unit:"auxiliary verbs", why:"The auxiliaries are *has* and *been* (perfect progressive), *can* (modal) and *does* (in *doesn’t*). The main verbs are *working*, *stop* and *mind*.", wrongs:[
      {v:3, tol:0, why:"This misses *been*, which is the auxiliary *be*. *Has been working* has two auxiliaries before the main verb."},
      {v:7, tol:0, why:"This counts every verb. *Working*, *stop* and *mind* are main verbs, not auxiliaries."}
    ], hint2:"Count the helper verbs only. Look for *have, be, do* and modals that come before another verb."},
    {id:"e5u6-l4-x6", type:"order", q:"Put these steps in order to turn *She likes tea* into *Does she like tea?*", items:[
      {t:"Check whether the statement has an auxiliary. It does not: only the main verb *likes*.", why:"This tells you that *do*-support is needed."},
      {t:"Add *do* in the same tense and person: *does*.", why:"The helper takes the present tense and the *-s*."},
      {t:"Return the main verb to its base form: *like*.", why:"The tense is marked once, on the helper."},
      {t:"Move *does* before the subject: *Does she like tea?*", why:"Inversion makes the question."},
      {t:"Say it with a rising tune.", why:"A yes/no question usually rises at the end (Unit 3)."}
    ]},
    {id:"e5u6-l4-x7", type:"match", q:"Match each statement to its tag.", pairs:[
      ["She likes tea,","doesn’t she?","No auxiliary, so the tag uses *do*. Positive statement, negative tag."],
      ["You can’t swim,","can you?","Negative statement, positive tag. Same auxiliary."],
      ["They’ve left,","haven’t they?","*They’ve* is *they have*. The tag repeats *have* and reverses the polarity."],
      ["I’m late,","aren’t I?","The standard tag for *I am*. *Amn’t I* is heard only in some Scottish and Irish English, and *ain’t I* is informal and nonstandard."],
      ["Let’s go,","shall we?","*Let’s* has a special tag."]
    ]},
    {id:"e5u6-l4-x8", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, asks: “When I speak fast I say *Did you went?* Why does *did* need *go* and not *went*? I want a rule, not only a habit.” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what *did* already does, and what happens to the main verb.", model:"The rule is that the past tense is marked once. In a question with no auxiliary, English adds *do*, and the helper carries the tense: *did* is the past. The main verb then goes back to its base form, *go*. If you also say *went*, you mark the past twice. So the pattern is *Did + subject + base form*. I would add that even fluent speakers slip when they speak fast, and that the habit becomes automatic with practice.", points:["Says that *did* already marks the past tense", "Says that the main verb returns to the base form", "States the pattern *Did + subject + base form* or gives a correct example", "Reassures her kindly that speed slips are normal"]}
   ],
   apply:{
    intro:"These tasks use a free learner dictionary, the Corpus of Contemporary American English (COCA, english-corpora.org, free with a registered account), and a short video or podcast with subtitles.",
    tasks:[
     {t:"Run the NICE tests on five verbs", how:[
       "Choose five verbs: *can, like, be, have, need*.",
       "For each verb, try Negation, Inversion, Code and Emphasis. Write a sentence for each test, or write that it does not work.",
       "Look up *have* in the Cambridge Dictionary. Which patterns does the dictionary label as British English?"
     ], write:"Verb… N… I… C… E… result: auxiliary or main verb…"},
     {t:"Corpus check: Do you have, Have you got or Have you", how:[
       "Open COCA at english-corpora.org and sign in. Search for *do you have a* and note the number of results.",
       "Search for *have you got a* and then *have you a*. Compare the numbers.",
       "Write two sentences on what the numbers say about American English. If you have access, repeat the search in the British National Corpus (BNC) at english-corpora.org and compare."
     ], write:"do you have a… have you got a… have you a… what the evidence says…"},
     {t:"Tag questions in the wild", how:[
       "Watch or listen to five minutes of an English-language show with subtitles, or read a page of a play or a script.",
       "Write down five tag questions. For each, note the statement, the tag and whether the tag rose or fell.",
       "Check each one against the rules: same auxiliary, reversed polarity, pronoun subject."
     ], write:"Statement… tag… rising or falling… did it follow the rules?"}
    ],
    proof:"A table of five verbs with the NICE results. Corpus counts for three question forms with notes. Five tag questions with notes on the tune."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, sections “Main clause Yes-No questions” and “Main clause content questions”", note:"Look for how the book describes the movement of the auxiliary. It uses tree diagrams for the same facts."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u6-l5", title:"Clause types: main, subordinate, finite and non-finite", minutes:55,
   hook:{q:"How many clauses are in this sentence? *Mei said that she wanted to leave early because she was tired.*", options:["One","Two","Three","Four"], answer:3, reveal:"**Four.** *Mei said* is the main clause. *That she wanted…*, *to leave early* and *because she was tired* are three clauses inside it. One of them, *to leave early*, has no tense and no written subject. This lesson sorts clauses in two ways: by whether they can stand alone (main or subordinate), and by whether their verb shows tense (finite or non-finite)."},
   goals:[
     "Say what a clause is, and count the clauses in a sentence",
     "Tell main clauses from subordinate clauses, and name the jobs a subordinate clause does",
     "Tell finite from non-finite verb forms and clauses, and identify *to*-infinitive, *-ing* and *-ed* clauses",
     "Explain the understood subject of a non-finite clause, and say why verbs choose different complement patterns (*enjoy swimming*, *want to swim*)"
   ],
   learn:[
    {h:"Clauses inside clauses", body:[
      {lead:"Lesson 2 described one clause. Real sentences often contain several, and clauses can be parts of other clauses."},
      "A [[hew-clause|clause]] is built around a verb. A **simple sentence** has one clause: *Mei left.* A **complex sentence** has a main clause and at least one subordinate clause: *Mei left because she was tired.*",
      "A [[hew-main-clause|main clause]] is a clause that is not part of another clause. It can stand alone as a sentence. A [[hew-subordinate-clause|subordinate clause]] is part of a larger clause. It has a job in that clause, as a subject, an object, an adverbial or a modifier of a noun. *Because she was tired* cannot stand alone. It is attached to *Mei left*.",
      {fig:'<svg viewBox="0 0 340 260"><text x="170" y="20" text-anchor="middle">Clauses inside clauses</text><rect class="d-sage" x="10" y="32" width="320" height="186" rx="10" stroke-width="2"/><text class="s" x="170" y="50" text-anchor="middle">main clause: Mei said …</text><rect class="d-soft" x="22" y="60" width="74" height="30" rx="6" stroke-width="2"/><text x="59" y="80" text-anchor="middle">Mei said</text><rect class="d-lup" x="22" y="100" width="296" height="108" rx="8" stroke-width="2"/><text class="s" x="170" y="118" text-anchor="middle">that-clause (finite): object of “said”</text><rect class="d-soft" x="32" y="126" width="110" height="30" rx="6" stroke-width="2"/><text x="87" y="146" text-anchor="middle">she wanted</text><rect class="d-gold" x="150" y="126" width="158" height="30" rx="6" stroke-width="2"/><text x="229" y="146" text-anchor="middle">to leave early</text><text class="s" x="229" y="170" text-anchor="middle">to-infinitive clause (non-finite)</text><rect class="d-rose" x="32" y="176" width="276" height="26" rx="6" stroke-width="2"/><text x="170" y="194" text-anchor="middle">because she was tired (finite)</text><text class="s" x="170" y="244" text-anchor="middle">4 clauses: one main, three subordinate</text></svg>', alt:"Nested boxes. The main clause is Mei said. Inside it, the that-clause she wanted to leave early because she was tired is the object of said. Within that, the clause to leave early is a non-finite to-infinitive clause, and the clause because she was tired is a finite clause.", cap:"Mei said that she wanted to leave early because she was tired. One main clause and three subordinate clauses, one of them non-finite."},
      "Subordinate clauses are usually introduced by a **subordinator** or a relative word, such as *that, because, although, if, when, who, which*. A *wh*-word or *whether* does the same job in a question that is embedded."
    ]},
    {h:"What subordinate clauses do", body:[
      "A subordinate clause fills a place that a phrase could fill. The table shows the main jobs, with the same element labels as in Lesson 2.",
      {table:[["Job","Example","Element"],["Subject","*[That she left] surprised us.*","S"],["Object","*I know [that she left].*","O"],["Complement","*The problem is [that she left].*","C"],["Adverbial","*[Because it rained], we stayed home.*","A"],["Modifier of a noun","*the book [that I read]*","inside a noun phrase"]]},
      "The last row is a [[hew-relative-clause|relative clause]]. Unit 10 gives it a full lesson. For now, notice the key point: a clause can be a piece of a phrase, and a phrase can contain a clause.",
      "A quick test for a subordinate clause: try to make it a whole sentence. *Because she was tired.* is not a complete thought alone, but *Mei left.* is. A better test is to look for the **job**. If a clause is inside another clause, it is subordinate.",
      {tip:"“Subordinate” describes structure. It does not mean “less important”. In *I know that the bridge is closed*, the information in the subordinate clause is the news."}
    ]},
    {h:"Finite and non-finite", body:[
      "Now sort the verb forms in a different way. A [[hew-finite|finite]] verb form shows tense (present or past), and it agrees with its subject. A [[hew-non-finite|non-finite]] verb form does not show tense. Here are the forms of *write*:",
      {table:[["Form","Examples","Finite or non-finite?"],["Present: *write, writes*","*She writes daily.*","Finite"],["Past: *wrote*","*She wrote daily.*","Finite"],["Modal + base: *can write*","*She can write.*","The modal is finite"],["Infinitive: *(to) write*","*She wants to write.*","Non-finite"],["*-ing* form: *writing*","*She enjoys writing.*","Non-finite"],["*-ed* form (past participle): *written*","*The letter written by Ana.*","Non-finite"]]},
      "Finite verbs can be the only verb in a main clause. Non-finite forms usually cannot: *She writing a letter* is not a sentence. They need a finite verb in the same sentence, or an auxiliary: *She **is** writing a letter.*",
      "The same spelling can be finite or non-finite. In *They write daily*, *write* is finite (present). In *They want to write*, it is non-finite. A good test is to change the tense: *They wrote daily* works, but *They wanted to wrote* does not. Only the finite verb changes.",
      "A **non-finite clause** is a clause with a non-finite verb. There are three common kinds, and each can be a subordinate clause with its own job:",
      {table:[["Type","Example","Job"],["*to*-infinitive","*She wants [to leave].* / *She went to Osaka [to see her aunt].*","Object / purpose adverbial"],["*-ing* clause","*She enjoys [swimming].* / *the man [standing at the door]*","Object / modifier of a noun"],["*-ed* clause","*the letter [sent yesterday]* / *[Written in a hurry], the note was unclear.*","Modifier of a noun / adverbial of reason"]]},
      {h:"Two analyses, side by side"},
      "School grammars call the *-ing* form a **gerund** when it works as a noun (*Swimming is fun*) and a **present participle** when it works as a verb or adjective (*She is swimming*). The form is the same, and the present participle has no present meaning. Descriptive grammars use one name, **gerund-participle**, for both. The *-ed* form is the **past participle**, and the base form with *to* is the **infinitive**. In descriptive grammars, *to* is an infinitival marker, not a part of the verb. This is why *to boldly go* is not a grammar problem (Unit 1). Use whichever labels your learners or exam need, and know the other set."
    ]},
    {h:"The understood subject", body:[
      "A non-finite clause usually has **no subject of its own**. We understand a subject from the main clause. In *She wants to leave*, the one who leaves is *she*. In *Standing at the door, the guard checked the tickets*, the guard is standing.",
      "This explains one writing problem. If the understood subject does not match, the sentence sounds strange: *Walking home, the rain started* seems to say that the rain was walking. A better sentence is *Walking home, I got wet in the rain.* The rule is a style rule, not a logic rule, because readers often understand the meaning anyway. Many writers allow it in informal writing, and teachers can explain it as a clarity problem (see Unit 1 on style choices).",
      "Some non-finite clauses have their own subject. *For her to leave early would be rude* and *I saw him leave* both do. These are less common, and analyses of the second one differ, so you do not need them here.",
      {h:"Compared with Japanese"},
      "In English, a subordinate clause that modifies a noun usually comes **after** it, and it begins with a relative word: *the book **that I bought** yesterday*. In Japanese, the clause comes **before** the noun and has no relative word: *Kinō katta hon* (昨日買った本), literally “yesterday (I) bought book”, is “the book I bought yesterday”. Japanese also puts the verb at the end of every clause, and it can leave out the subject. So the same idea needs a different order in English. For reported speech, Japanese uses the particle *to* (と): *Kare wa kuru to itta* (彼は来ると言った) is “He said (that) he would come”."
    ]},
    {h:"Verbs choose their complement", body:[
      "Learners often ask why we say *enjoy swimming* but *want to swim*. There is no logical reason. Each verb has its own pattern for what can follow it, which linguists call the verb’s **complement pattern**. You have to learn the pattern with the verb.",
      {table:[["Verb","Takes","Not"],["*want, decide, hope, plan*","*to*-infinitive: *She wants to swim.*","*She wants swimming.*"],["*enjoy, finish, avoid, mind*","*-ing*: *She enjoys swimming.*","*She enjoys to swim.*"],["*can, must, will*","base form: *She can swim.*","*She can to swim.*"],["*like, love, start, begin*","either, with little change","—"],["*stop, remember, try*","either, with a **change in meaning**","*stop to smoke* (pause in order to smoke) vs *stop smoking* (quit)"]]},
      "The best advice is to learn verbs with their patterns, as chunks (Unit 5). A learner dictionary shows the pattern for each verb, for example *enjoy + -ing*."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“Every clause has a subject.”** Finite clauses do. Non-finite clauses usually have an understood subject instead.",
        "**“A sentence has one verb.”** A sentence can have many verbs. *Mei said that she wanted to leave* has three.",
        "**“Subordinate clauses are less important.”** The word describes structure. A subordinate clause often carries the main news.",
        "**“*-ing* always means a continuing action.”** *-ing* forms also appear in clauses with no time meaning: *Swimming is fun.*",
        "**“*to* + verb is one word.”** The infinitive is the base form. *To* is a marker that comes before it."
      ]}
    ]}
   ],
   try:[
    {id:"e5u6-l5-x1", type:"sort", q:"Is each **bracketed clause** a main clause or a subordinate clause?", buckets:["Main clause","Subordinate clause"], items:[
      {t:"“Because it was raining, [we stayed home].”", b:0, why:"*We stayed home* can stand alone."},
      {t:"“[Because it was raining], we stayed home.”", b:1, why:"It is attached to *we stayed home*, as an adverbial of reason."},
      {t:"“[Mei called] when the train stopped.”", b:0, why:"*Mei called* is the main clause."},
      {t:"“Mei called [when the train stopped].”", b:1, why:"It is an adverbial of time inside the main clause."},
      {t:"“I know [that she left].”", b:1, why:"It is the object of *know*."},
      {t:"“[I know] that she left.”", b:0, why:"*I know* is the main clause, and the *that*-clause is inside it."}
    ]},
    {id:"e5u6-l5-x2", type:"sort", q:"Is the **capitalized verb form** finite or non-finite?", buckets:["Finite","Non-finite"], items:[
      {t:"“She WANTS to leave.”", b:0, why:"*Wants* shows present tense and agrees with *she*."},
      {t:"“She wants TO LEAVE.”", b:1, why:"The infinitive does not show tense."},
      {t:"“They enjoyed SWIMMING.”", b:1, why:"The *-ing* form has no tense."},
      {t:"“They ENJOYED swimming.”", b:0, why:"*Enjoyed* shows the past tense."},
      {t:"“The letter WRITTEN by Ana is long.”", b:1, why:"A past participle. It has no tense of its own."},
      {t:"“Ana WROTE a letter.”", b:0, why:"*Wrote* is the past tense."}
    ]},
    M("e5u6-l5-x3","In “She left early to catch the first train”, which part is a **non-finite clause**?",1,[
      ["*She left early*","This has a finite verb, *left*, and it is the main clause."],
      ["*to catch the first train*","Right. It has a *to*-infinitive and no tense. It gives the purpose of leaving."],
      ["*early*","This is an adverb, and not a clause."],
      ["*the first train*","This is a noun phrase, the object of *catch*."]
    ]),
    {id:"e5u6-l5-x4", type:"spot", q:"Tap each **non-finite verb form** (an infinitive, an *-ing* form or an *-ed* form that works as a verb).", ask:"is a non-finite verb form", parts:[
      "Tired of ", {t:"waiting", flag:true, why:"An *-ing* form after the preposition *of*. It has no tense."}, ", Priya ", {t:"decided", flag:false, why:"A finite verb in the past tense."}, " ", {t:"to leave", flag:true, why:"An infinitive. It has no tense."}, " the café. She ", {t:"hoped", flag:false, why:"A finite verb in the past tense."}, " ", {t:"to find", flag:true, why:"An infinitive."}, " a taxi ", {t:"waiting", flag:true, why:"An *-ing* form that describes the taxi. It starts a non-finite clause."}, " outside, but the street ", {t:"was", flag:false, why:"A finite verb in the past tense."}, " empty."
    ]},
    {id:"e5u6-l5-x5", type:"match", q:"Match each sentence with a non-finite clause to the job of that clause.", pairs:[
      ["She went to Osaka [to see her aunt].","Purpose adverbial","It says why she went."],
      ["She enjoys [swimming every day].","Object of the verb","The verb *enjoys* takes an *-ing* clause after it."],
      ["The man [standing at the door] is my uncle.","Modifier of a noun","It describes *man*, and it is part of the subject noun phrase."],
      ["[Written in a hurry], the note was unclear.","Adverbial of reason","It explains why the note was unclear."]
    ]},
    {id:"e5u6-l5-x6", type:"number", q:"How many **clauses** are in this sentence? “Mei said that she wanted to leave early because she was tired.”", answer:4, tol:0, unit:"clauses", why:"The clauses are *Mei said* (main), *that she wanted* (subordinate, finite), *to leave early* (subordinate, non-finite) and *because she was tired* (subordinate, finite). Each one is built around a verb.", wrongs:[
      {v:3, tol:0, why:"This misses *to leave early*. A non-finite clause is still a clause: it has a verb and a job in the sentence."},
      {v:2, tol:0, why:"This counts only the main clause and the *that*-clause. The *because*-clause and the *to*-infinitive clause are also clauses."}
    ], hint2:"Count the verbs: *said, wanted, leave, was*. Each one is the center of a clause."},
    M("e5u6-l5-x7","A student writes: “Walking home, the rain started.” What is the best comment?",1,[
      ["The sentence is correct, because *walking home* is a main clause.","*Walking home* is a non-finite clause. It cannot stand alone."],
      ["The understood subject of *walking* is *the rain*, so the sentence can seem to say that the rain was walking. A clearer sentence is *Walking home, I got wet in the rain.*","Right. The understood subject of a non-finite clause normally comes from the main clause. This is a clarity and style issue."],
      ["The sentence is wrong because *-ing* clauses must follow the main clause.","They can come first or last. *Walking home, I got wet* is fine."],
      ["The sentence needs *that* before *the rain*.","*That* would make a different structure and does not fix the problem."]
    ]),
    {id:"e5u6-l5-x8", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a former student: “*Want to swim* is correct, so *enjoy to swim* should be correct too. Why must I say *enjoy swimming*?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what decides the pattern, and how to learn it.", model:"There is no logical reason. Each verb chooses its own pattern for what can follow it. *Want* takes a *to*-infinitive, and *enjoy* takes an *-ing* form. It is like a collocation: you have to learn the verb together with its pattern. I would give her short lists (*want, decide, hope + to*; *enjoy, finish, avoid + -ing*) and tell her to check a learner dictionary, which shows the pattern.", points:["Says that each verb chooses its own complement pattern", "Says that there is no reason to work out and the pattern is learned", "Gives a pattern with *want/decide* and one with *enjoy/finish*", "Suggests a practical way to learn it, such as a dictionary or chunks"]}
   ],
   apply:{
    intro:"These tasks use a text of your choice, a free learner dictionary, and the Corpus of Contemporary American English (COCA, english-corpora.org, free with a registered account).",
    tasks:[
     {t:"Count and label the clauses", how:[
       "Copy a paragraph of about 80 words from a news site or textbook.",
       "Underline every verb. Bracket each clause and write M (main) or S (subordinate).",
       "For each subordinate clause, write its job (subject, object, adverbial, modifier of a noun) and whether it is finite or non-finite."
     ], write:"Sentence… clauses… main or subordinate… finite or non-finite…"},
     {t:"Corpus check: enjoy and want", how:[
       "Open COCA at english-corpora.org and sign in. Search for *enjoy to*, and then for *enjoy swimming* and *enjoy reading*. Compare how many results you get.",
       "Search for *want to*, and then for *want swimming* and *want reading*. What do you find?",
       "Look up *enjoy* and *want* in a learner dictionary. Does the pattern in the entry match your corpus results?"
     ], write:"enjoy to… enjoy -ing… want to… want -ing… what the dictionary says…"},
     {t:"Choose the pattern", how:[
       "Choose ten verbs that take a clause after them, for example *decide, avoid, remember, suggest, stop, try, hope, finish, like, plan*.",
       "Use a learner dictionary to find the pattern for each one: *to*-infinitive, *-ing*, *that*-clause or more than one.",
       "Write a sentence for each. For *stop* and *remember*, write two sentences that show the change in meaning."
     ], write:"Verb… pattern… my sentence…"}
    ],
    proof:"A labeled paragraph with clauses sorted by type and job. Corpus counts for four patterns with a dictionary check. A table of ten verbs with patterns and example sentences."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Clausal embedding”", note:"Look for how the book shows a clause inside another clause."}
   ]
  }
  ],
  checkpoint:["e5u6-q03","e5u6-q07","e5u6-q12","e5u6-q16","e5u6-q21","e5u6-q25","e5u6-q29","e5u6-q34","e5u6-q36","e5u6-q39","e5u6-q42","e5u6-q44"],
  cpBank:[
   Q("e5u6-cp01","e5u6-l1",1,"Which description of a phrase **head** is correct?",2,[
     ["The first word of the phrase","The head can be anywhere. In *very proud of her son*, it is the second word."],
     ["The last word of the phrase","In *in the old house*, the head is the first word, *in*."],
     ["The word that decides the type of the phrase, and that you cannot remove","Right. The other words are dependents. A noun phrase has a noun as head, and so on."],
     ["The longest word of the phrase","Length has nothing to do with it."]]),
   Q("e5u6-cp02","e5u6-l1",3,"“The list of rules are long.” What is the best explanation of the error?",1,[
     ["The verb should agree with *rules*, so *are* is correct.","*Rules* is inside a dependent, *of rules*. It is not the head."],
     ["The head of the subject is *list*, which is singular, so the verb should be *is*.","Right. The verb agrees with the head, not with the nearest noun."],
     ["The subject should be *rules*, so the sentence must be rewritten.","The subject is the whole noun phrase. The writer meant *list*."],
     ["The word *long* needs an adverb.","*Long* is a correct adjective after *be*."]]),
   Q("e5u6-cp03","e5u6-l2",1,"Which statement about subjects is correct?",1,[
     ["The subject is always the one who does the action.","*The window broke* and *She received a letter* have subjects that do not act."],
     ["The subject is the phrase that the verb agrees with, and it comes before the verb in a normal statement.","Right. Agreement and position are the tests, and meaning is only a guide."],
     ["The subject is always the first word of the sentence.","*Yesterday, Mei left* starts with an adverb."],
     ["The subject is always a person.","Subjects can be things (*The bus left*) or even clauses."]]),
   Q("e5u6-cp04","e5u6-l2",2,"What clause pattern is *Ana put the cake in the fridge*?",3,[
     ["SVO","The adverbial *in the fridge* is required, so the pattern needs an A."],
     ["SVOO","*In the fridge* is not a second object."],
     ["SVOC","*In the fridge* does not describe *the cake*. It names a place."],
     ["SVOA","Right. There is an object, *the cake*, and a required adverbial, *in the fridge*."]]),
   Q("e5u6-cp05","e5u6-l2",3,"*The news made Sione happy* and *Tomás made Sione a cake*. Which statement is correct?",0,[
     ["The first is SVOC (*happy* describes Sione), and the second is SVOO (Sione receives a cake).","Right. The test is whether you can say *Sione is happy*: you can in the first sentence."],
     ["Both are SVOO.","In the first sentence, *happy* describes Sione. It is not a second object."],
     ["Both are SVOC.","In the second sentence, *a cake* is a thing, not a description of Sione."],
     ["The first is SVO and the second is SVC.","Both sentences have two parts after the verb."]]),
   Q("e5u6-cp06","e5u6-l3",1,"In *It’s raining*, what is the status of *it*?",2,[
     ["It is a pronoun that stands for the weather.","*It* here does not stand for anything. There is no earlier noun to point to."],
     ["It is an object.","It comes before the verb, so it is the subject."],
     ["It is a dummy subject with no meaning, needed because English finite clauses need a subject.","Right. Grammars also call it an empty or expletive subject."],
     ["It is an adverb.","*It* is a pronoun, and in this clause it is the subject."]]),
   Q("e5u6-cp07","e5u6-l3",3,"Which sentence is the best correction of *Have a bus at eight*, and why?",1,[
     ["*It has a bus at eight*, because *it* is the dummy subject.","*It* is used for weather, time and moved subjects. Existence uses *there*."],
     ["*There is a bus at eight*, because existential *there* introduces something that exists.","Right. It is a dummy subject, and the bus is the notional subject."],
     ["*A bus is at eight*, because the subject must come first.","This is a possible sentence, but it has a different meaning and is unusual here."],
     ["*They have a bus at eight*, because *have* needs a subject.","This is a different sentence about *they*, not about the bus existing."]]),
   Q("e5u6-cp08","e5u6-l4",2,"Which verb passes all four NICE tests directly, with no *do*?",2,[
     ["*like*","*Likes she?* and *She likes not* are not possible. *Like* needs *do*."],
     ["*walk*","A main verb needs *do* for the tests."],
     ["*can*","Right. *Can’t*, *Can she?*, *so can he* and *She CAN swim* all work."],
     ["*want*","A main verb needs *do* for the tests."]]),
   Q("e5u6-cp09","e5u6-l4",3,"Mei asks: “Why is it *Did she go?* and not *Did she went?*” What is the best answer?",1,[
     ["*Went* is wrong in all cases.","*She went* is correct. The problem is in the question form."],
     ["*Did* already carries the past tense, so the main verb goes back to its base form, *go*.","Right. Tense is marked once, on the helper."],
     ["The rule is a spelling rule.","It is a grammar rule."],
     ["Questions never use the past tense.","Questions can use the past: *Did she go?*"]]),
   Q("e5u6-cp10","e5u6-l4",2,"What is the correct tag? *They haven’t arrived, ___?*",0,[
     ["*have they*","Right. A negative statement takes a positive tag, with the same auxiliary."],
     ["*haven’t they*","The tag should reverse the polarity, so it must be positive."],
     ["*do they*","The statement already has the auxiliary *have*, so the tag repeats it."],
     ["*aren’t they*","This uses a different auxiliary."]]),
   Q("e5u6-cp11","e5u6-l5",1,"What makes a verb form **non-finite**?",3,[
     ["It is in the past tense.","The past tense is finite."],
     ["It has no meaning.","Non-finite verbs have normal meanings."],
     ["It ends in *-s*.","The *-s* form is the present tense and is finite."],
     ["It does not show tense or agree with a subject, as in an infinitive, an *-ing* form or an *-ed* participle.","Right. These forms need a finite verb or auxiliary nearby."]]),
   Q("e5u6-cp12","e5u6-l5",3,"A learner writes “I enjoy to swim.” What is the best explanation?",2,[
     ["The sentence is correct.","*Enjoy* takes an *-ing* form."],
     ["The word *swim* is not a verb.","*Swim* is a verb. The problem is the form after *enjoy*."],
     ["Each verb chooses its own pattern. *Enjoy* takes an *-ing* form (*enjoy swimming*), and *want* takes *to* (*want to swim*).","Right. The pattern belongs to the verb and is learned with it."],
     ["*To* can never follow a verb of liking.","*Like* and *love* take *to* (*I like to swim*)."]])
  ],
  codex:[
   {id:"phrases-and-heads-english", title:"Phrases and their heads", aka:["noun phrase","verb phrase","constituents","head and dependent"], tags:["grammar","syntax"],
    summary:"A phrase is a word or group of words that acts as one unit. Its head decides the type of the phrase, and the other words are dependents.",
    levels:{
     starter:[
      "Words join to make **phrases**, phrases join to make **clauses**, and clauses make **sentences**. A phrase is a word or a group of words that works as one unit. In *The new teacher from Kenya spoke*, the group *the new teacher from Kenya* is one unit. You can replace it with *she*, and you can move it as a whole.",
      "Every phrase has a **head**. The head is the word that gives the phrase its type and its main meaning. A noun phrase has a noun as head: *the tall **man***. A preposition phrase has a preposition: ***in** the old hat*. An adjective phrase has an adjective: *very **proud** of her son*. An adverb phrase has an adverb: *quite **slowly***. A verb phrase has a main verb: ***gave** her a book*.",
      "The other words are **dependents**. They add detail, and you can often remove them. You cannot remove the head. *The tall man in the old hat* can become *the man* or *man*. It cannot become *the tall in the old hat*.",
      "The head is not always the first or the last word. It decides whether the verb is singular or plural: *The box of chocolates **is** open*.",
      {key:"The head is the word the phrase is about. It names the type of the phrase and controls agreement."}
     ],
     builder:[
      "Three tests help you to find the head. The **type test** asks what kind of phrase it behaves like: *very proud of her son* fits after *be*, like an adjective, so *proud* is the head. The **omission test** removes dependents one at a time: the head is the word you cannot remove. The **agreement test** works for noun phrases: the verb agrees with the head, so in *The key to the doors is lost* the head is *key*, not *doors*.",
      {table:[["Phrase","Head","Dependents"],["*the old box of chocolates*","*box*","*the, old, of chocolates*"],["*waiting for the bus*","*waiting*","*for the bus*"],["*very proud of her son*","*proud*","*very, of her son*"],["*quite slowly*","*slowly*","*quite*"],["*in the garden*","*in*","*the garden*"]]},
      "Phrases nest. A preposition phrase contains a noun phrase, and that can contain another preposition phrase: *[the man [in [the hat [with the feather]]]]*. Nesting explains structural ambiguity. In *I saw the man with the telescope*, the phrase *with the telescope* can attach to the noun phrase (the man has it) or to the verb phrase (I used it).",
      "The term *verb phrase* has two uses. Traditional grammars use it for the verbs alone (*may have been waiting*). Descriptive grammars use it for the verb with its objects and other dependents. A clear way to speak is *verb group* for the verbs alone.",
      "The head idea is useful in teaching. When a learner makes an agreement error (*The results of the survey is…*), ask which word is the head. It is easier to understand than a rule about the nearest noun."
     ],
     pro:[
      "In descriptive grammars (for example Huddleston and Pullum’s *Cambridge Grammar of the English Language*), a phrase has a head and may have **dependents**: complements, modifiers and determiners. A complement is required by the head, and a modifier is optional. In *proud of her son*, *of her son* is a complement of *proud*. In *the tall man*, *tall* is a modifier of *man*.",
      "Not every approach counts the same phrases. Some analyses treat the determiner as the head of the noun phrase (the **DP analysis** in generative syntax). Descriptive grammars keep the noun as the head and treat the determiner as a dependent. Essentials of Linguistics uses X-bar notation in its tree chapters. The facts of agreement and omission are the same, but the labels differ.",
      "Auxiliaries raise a question of their own. In *may have been waiting*, a descriptive grammar can treat *may* as the head of a larger verb phrase with *have been waiting* inside it, because *may* is the verb that shows tense and takes the *n’t* and inversion (Lesson 4). A simpler teaching analysis treats the whole string as a verb group whose lexical head is *waiting*. Both agree that the main verb decides what objects and complements can follow.",
      "Constituency tests (replacement, movement, answers to a question, coordination) are evidence for structure, not proof. Each can fail. Some strings pass one test and fail another, which is why analysts use several. The structural ambiguity of *the man with the telescope* is a standard example in textbooks because the two structures give the same string.",
      "Head direction is a typological property. English is mostly **head-initial** in the verb phrase and preposition phrase (verb before object, preposition before noun). Japanese is **head-final** (object before verb, noun before postposition), so a Japanese learner often has to learn a reverse order for these phrases. In noun phrases English is mixed: single adjectives come before the head, and clauses and preposition phrases come after it."
     ]},
    related:["clause-elements-patterns-english","clauses-finite-nonfinite-english"], read:[{book:"eling", where:"The Syntax chapter, section “Structure within the sentence: Phrases, heads, and selection”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"clause-elements-patterns-english", title:"Clause elements and the seven clause patterns", aka:["SVO","subject object complement adverbial","sentence patterns","valency"], tags:["grammar","syntax"],
    summary:"A clause is built from a subject, a verb and possibly objects, complements and adverbials. Seven common combinations are used as a teaching tool.",
    levels:{
     starter:[
      "A clause is built from **elements**. The **subject** (S) is the phrase the verb agrees with. The **verb** (V) is the center. An **object** (O) names something that the verb acts on. A **complement** (C) describes the subject or the object. An **adverbial** (A) says when, where, how or why.",
      "Keep two labels apart. A phrase has a **form** (noun phrase, preposition phrase) and a **function** (subject, object, adverbial). *Last week* is a noun phrase in form, and an adverbial in function.",
      "Seven patterns cover most clauses: **SV** (*The baby smiled*), **SVO** (*Priya wrote a report*), **SVC** (*The room felt cold*), **SVA** (*The meeting is at noon*), **SVOO** (*Amara sent Dmitri a message*), **SVOC** (*The news made Sione happy*) and **SVOA** (*Ana put the cake in the fridge*). Optional adverbials are not counted.",
      "The verb decides the pattern. *Get* has all six non-SV patterns: *got a gift, got angry, got me a gift, got to the station, got the room ready, got the dog into the car*.",
      {key:"Subject, object, complement and adverbial are jobs. Noun phrases and preposition phrases are forms. A phrase has one of each."}
     ],
     builder:[
      "Tests find each element. A **subject** agrees with the verb, moves in a question and is repeated in a tag. An **object** can become the subject of a passive and can be replaced by *him/her/them*. A **complement** describes another element, follows a linking verb (*be, seem, become, feel*) and has no passive. An **adverbial** answers *when, where, how, why* and can often move.",
      {table:[["Test","Object","Subject complement"],["Passive","*A doctor was hired.*","No passive"],["Same person as the subject?","No","Yes"],["Pronoun","*Mei hired her.*","*Mei became one.*"]]},
      "Adverbials are **optional** or **required**. Delete the adverbial. If the clause is no longer complete, it was required: *Mei lives in Osaka* needs the adverbial. Only required adverbials count in the patterns (SVA, SVOA).",
      "A teaching tool is not the full truth. The seven-pattern list comes from Quirk and others (*A Comprehensive Grammar of the English Language*). Descriptive grammars describe the same facts with the terms **complement** (anything the verb requires) and **adjunct** (optional extras). A verb has many patterns, and a clause can contain other clauses as elements. Use the patterns to teach and to check dictionaries, not to claim that English has exactly seven kinds of clauses.",
      "Dictionaries show patterns with labels such as *transitive* and *intransitive*, or with notes such as *give someone something*. A learner who reads these notes learns the verb together with its pattern."
     ],
     pro:[
      "Valency is the set of elements a verb requires. A verb is usually described by the complements it takes. *Put* requires an object and a place (SVOA), and *rely* requires a preposition phrase (*rely on someone*). Many verbs allow several valency patterns, and a change of pattern often changes the meaning: *She ran a shop* (SVO) and *She ran to the shop* (SVA).",
      "The line between a required adverbial and an optional one is not sharp. Tests such as deletion and the question *What did she do?* work in most cases, but some adverbials are borderline (in *She behaved badly*, removing *badly* changes the meaning: *She behaved* means “she behaved well”). A few analyses use a gradient, and teaching materials should say that the test gives a clear answer only for clear cases.",
      "The two-object pattern has a variant with *to* or *for*: *She gave Tomás a book* and *She gave a book to Tomás*. Books differ on the second: some call *to Tomás* an adverbial (SVOA), some a prepositional object, and descriptive grammars treat both sentences as a verb with two complements. The pair is called the **dative alternation**. Heavy phrases and pronouns affect the choice: *She gave it to him* is far more usual than *She gave him it*.",
      "The subject is not a semantic role. A subject can be an agent (*Mei opened the door*), an instrument (*The key opened the door*) or an affected thing (*The door opened*). Linguists use **thematic roles** (agent, patient, theme and so on) for the meaning side. Essentials of Linguistics treats them in the sections on arguments and thematic roles.",
      "Subjects have special properties beyond agreement. They are the target of **raising** (*She seems to be late*), the pivot of tag questions and the element that is dropped in imperatives. Languages differ in which of these properties they give to the subject, and some analyses of Japanese distinguish a subject from a topic for this reason."
     ]},
    related:["phrases-and-heads-english","nice-properties-do-support-english"], read:[{book:"eling", where:"The Syntax chapter, section “Arguments and thematic roles”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"subjects-dummy-it-there-english", title:"Why English needs a subject: dummy it and there", aka:["expletive it","existential there","pro-drop","subject omission"], tags:["grammar","syntax"],
    summary:"English finite clauses need a subject. When no real subject exists, English uses dummy it (It’s raining) or existential there (There is a bus).",
    levels:{
     starter:[
      "In English, a clause with a tense normally needs a subject. *Went to the market* is not a normal English sentence. You say *I went to the market*. Commands (*Sit down*) and informal notes (*Hope you’re well*) are the main exceptions.",
      "When no real thing can be the subject, English adds a **dummy subject**. In *It’s raining*, the word *it* means nothing. It only fills the subject place. English does this for weather (*It’s windy*), time (*It’s late*), distance (*It’s far*) and when a long subject moves to the end (*It is important to rest*).",
      "To say that something exists, English often starts with **existential *there***: *There is a bus at eight. There are two cats in the garden.* This *there* names no place. The thing that exists comes after the verb.",
      "Japanese is different. It marks a subject with *ga*, but it often leaves the subject out when the listener knows it: *Samui desu ne* (“It is cold, isn’t it?”). This is normal in Japanese. It is not “no subjects”.",
      {key:"English asks for a subject every time. When there is no real subject, it uses *it* or *there*."}
     ],
     builder:[
      "Dummy *it* is different from referential *it*. In *I bought a phone. It was cheap*, *it* points to the phone. In *It’s raining*, it points to nothing. A test is the question *What is raining?*, which has no answer. A second test is substitution: *It was expensive* can become *The phone was expensive*, but *It’s raining* cannot become *The weather is raining*.",
      "The moved-subject use is called **extraposition**: *To get a visa takes weeks* becomes *It takes weeks to get a visa*. English likes to place long phrases at the end of the sentence. The pattern is also used with *that*-clauses: *It is clear that she left.*",
      "Existential *there* behaves like a subject. It moves in a question (*Is there a bus?*) and is repeated in a tag (*There is a bus, isn’t there?*). The thing that exists is the **notional subject**. In careful writing the verb agrees with it (*There are two buses*). In informal speech many fluent speakers say *There’s two buses*, and this is a normal spoken form, not a learner error. The phrase is usually new information, so definite phrases are odd (*?There is the bus at eight*).",
      "Japanese distinguishes the **topic** (*wa*) from the **subject** (*ga*). *Zō wa hana ga nagai* means “As for elephants, the trunk is long”: the topic is *zō* and the subject is *hana*. Japanese expresses existence with the verbs *aru* and *iru* (*Kōen ni ike ga arimasu*, “There is a pond in the park”). English uses *there* + *be*.",
      "Common learner errors have a simple cause. *Is raining* and *Have a bus at eight* leave out the subject. *Here is very hot* and *It is many people* use a word in the wrong place. A short explanation names the pattern, gives the correct sentence and shows one more example."
     ],
     pro:[
      "Languages that allow subjects to be omitted are called **null-subject** or **pro-drop** languages. Japanese, Italian and Spanish are standard examples, but the details differ. Japanese has no verb agreement with the subject, so the listener recovers the missing subject from context and not from the verb ending. This is why “pro-drop” is a poor label for Japanese in some analyses, which prefer to say that Japanese allows many kinds of argument ellipsis.",
      "English is not a null-subject language, but it has limited subject omission in some registers. Diary style (*Went to the store. Got some fruit.*) and informal messages (*Can’t wait*) drop an initial subject, typically *I* or *it*. The omission is constrained: it is mostly the first position in the clause and mostly a pronoun that is recoverable from context.",
      "Existential sentences have a long literature. Descriptive grammars (Huddleston and Pullum) treat *there* as the subject and the post-verbal noun phrase as the **displaced subject**, while some others treat the noun phrase as the subject and *there* as an expletive. Agreement shows the tension: the verb usually agrees with the noun phrase (*There are two buses*), but singular *There’s* with plurals is frequent in speech and also appears in informal writing. The **definiteness restriction** (*There is a bus*, not *?There is the bus*) has exceptions in lists and reminders.",
      "Corpus work can settle questions of usage. A search for *there’s* and *there are* followed by a plural noun, split by spoken and written text, shows how common each form is in each register. This is an example of how a corpus can help a teacher decide whether to call a pattern an error or a register choice.",
      "Weak and strong forms matter for *there*. The existential use is usually weak (GA /ðɚ/, SSBE /ðə/) and the locative use is strong (GA /ðɛr/, SSBE /ðeə/). This is an example of how grammar and phonology interact. Learners who read *there* as the place word have trouble hearing the existential use in fast speech."
     ]},
    related:["clause-elements-patterns-english","clauses-finite-nonfinite-english"], read:[{book:"eling", where:"The Syntax chapter, section “Syntactic knowledge and grammaticality judgements”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"nice-properties-do-support-english", title:"The NICE properties, do-support, questions and tags", aka:["auxiliary verbs","do-support","inversion","tag questions"], tags:["grammar","syntax","questions"],
    summary:"Auxiliary verbs pass four tests (Negation, Inversion, Code, Emphasis). Main verbs need the helper do, which carries the tense in questions and negatives.",
    levels:{
     starter:[
      "English has a small group of verbs, the **auxiliaries**, that help other verbs: *be, have, do* and the modals (*can, will, must* and others). They behave in a special way. They can take *n’t* (*can’t*), move before the subject to make a question (*Can she swim?*), stand alone to replace the rest of a sentence (*So can he*) and carry stress for emphasis (*She CAN swim*). These are the four **NICE** properties: Negation, Inversion, Code and Emphasis.",
      "A main verb such as *like* cannot do these things. English adds the helper **do**: *Does she like tea? She doesn’t like tea.* This is called ***do*-support**. The helper carries the tense and the *-s*, and the main verb goes back to its base form. So we say *Did she go?*, not *Did she went?*",
      "Questions use inversion. A yes/no question moves the auxiliary before the subject: *Is she late?* A wh-question puts a question word first: *What did you buy?* A question inside a longer sentence keeps statement order: *I wonder where she is.*",
      "A **tag question** is a short question at the end: *She likes tea, doesn’t she?* It uses the same auxiliary, reverses the positive or negative, and repeats the subject as a pronoun.",
      {key:"Only auxiliaries can move or take n’t by themselves. For every other verb, English adds do."}
     ],
     builder:[
      "The rules for *do*-support are easy to state. Use *do* in the right tense and person when you need an auxiliary and there is none. Mark the tense once, on *do*. Put the main verb in the base form. Do not use *do* with another auxiliary (*Can she go?*), and do not use it when the question word is the subject (*Who called?*).",
      {table:[["Task","With auxiliary","With no auxiliary"],["Negative","*She can’t swim.*","*She doesn’t swim.*"],["Question","*Can she swim?*","*Does she swim?*"],["Code","*So can he.*","*So does he.*"],["Emphasis","*She CAN swim.*","*She DOES swim.*"]]},
      "*Be* behaves like an auxiliary even as a main verb (*Is she here?*). *Have* varies. In General American, main-verb *have* takes *do* (*Do you have a pen?*). In British English, *Have you got a pen?* is very common, and *Have you a pen?* is possible but formal.",
      "The tag rules have a few exceptions. *I am late, aren’t I?* is standard. *Let’s go, shall we?* and commands use *will you* (*Close the door, will you?*). A falling tune checks agreement, and a rising tune asks a real question (Unit 3).",
      "Common learner errors come from a missing helper (*What you want?*), a doubled tense (*Did she went?*), a *do* with a modal (*Do you can swim?*) or inversion in an embedded question (*I wonder where is she*). Japanese makes questions with *ka* at the end and negatives with *-nai* in the verb, so *do* has no match."
     ],
     pro:[
      "Historically, English moved every verb before the subject in questions (*Likes she tea?*), as other Germanic languages still do. *Do* began to be used in questions and negatives in late Middle English. It spread during Early Modern English (roughly 1500 to 1700) and became the standard pattern after that. Today, the auxiliaries are the remnant of the old system. They are the only verbs that still invert.",
      "Descriptive grammars treat the NICE properties as a definition of the auxiliary class. The properties are not equal in strength. Modals pass all four. Auxiliary *do* appears in the negative, the question, code and the emphatic positive only when no other auxiliary is present. It is used even when the main verb is also *do*: *Did she do the dishes? She did the dishes, and so did he.* *Dare* and *need* behave as auxiliaries in some patterns and main verbs in others (*I daren’t / I don’t dare*, *You needn’t / You don’t need to*). *Ought* is an auxiliary with *to*, and *used* behaves as a marginal one in British English (*Used she to…?* is dated).",
      "Inversion in questions is one of the syntactic operations in generative accounts. Essentials of Linguistics treats yes/no questions as movement of an auxiliary from a position after the subject to a position before it, and wh-questions as movement of the wh-phrase as well. The facts match the teaching rules: only one auxiliary moves, the first one (*Has she been waiting?*).",
      "Tag questions have functions beyond a real question. A falling tag asks for confirmation (*It’s cold, isn’t it?*), and a rising tag signals real doubt. A same-polarity tag (*So you’re leaving, are you?*) often expresses suspicion or sarcasm. Invariant tags (*right?*, *innit?*, *eh?*) are widespread in speech and vary across dialects. They are a topic for the World Englishes elective.",
      "Corpus searches let you compare *Do you have*, *Have you got* and *Have you a* in American and British data (see the apply task). Usage notes in learner dictionaries report that *have got* is more typical of British English. Treat these as tendencies of the two varieties, not rules."
     ]},
    related:["clause-elements-patterns-english","clauses-finite-nonfinite-english"], read:[{book:"eling", where:"The Syntax chapter, sections “Main clause Yes-No questions” and “Main clause content questions”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"clauses-finite-nonfinite-english", title:"Clause types: main, subordinate, finite and non-finite", aka:["subordinate clause","non-finite clause","infinitive","participle","gerund"], tags:["grammar","syntax","clauses"],
    summary:"A main clause can stand alone, and a subordinate clause is part of a larger clause. Finite clauses show tense, and non-finite clauses (to-infinitive, -ing, -ed) do not.",
    levels:{
     starter:[
      "A **clause** is built around a verb. A **main clause** is not part of another clause, and it can stand alone: *Mei left.* A **subordinate clause** is part of a larger clause and does a job in it: *Mei left [because she was tired].* Here the subordinate clause is an adverbial.",
      "Subordinate clauses can be subjects (*That she left surprised us*), objects (*I know that she left*), adverbials (*Because it rained, we stayed home*) or modifiers of nouns (*the book that I read*).",
      "Verb forms are **finite** or **non-finite**. A finite verb shows tense and agrees with its subject: *writes, wrote, can write*. A non-finite verb does not: *to write, writing, written*. There are three common non-finite clauses: the *to*-infinitive (*She wants to leave*), the *-ing* clause (*She enjoys swimming*) and the *-ed* clause (*the letter sent yesterday*).",
      "A non-finite clause usually has no written subject. We understand the subject from the main clause. In *She wants to leave*, the person who leaves is *she*.",
      {key:"Main or subordinate tells you whether a clause can stand alone. Finite or non-finite tells you whether its verb shows tense."}
     ],
     builder:[
      "Count clauses by counting main verbs (not auxiliaries), then check the structure. *Mei said that she wanted to leave early because she was tired* has four verbs and four clauses: one main clause and three subordinate clauses, one of them non-finite (*to leave early*).",
      {table:[["Clause type","Example","Job"],["*that*-clause","*I know that she left.*","Object"],["*because*-clause","*Because it rained, we stayed.*","Adverbial"],["*to*-infinitive","*She went to Osaka to see her aunt.*","Purpose adverbial"],["*-ing* clause","*She enjoys swimming.*","Object"],["*-ed* clause","*the letter sent yesterday*","Modifier of a noun"]]},
      "Two sets of labels are in use. School grammars name *-ing* as a **gerund** (a noun use) or a **present participle** (a verb or adjective use). Descriptive grammars use **gerund-participle** for both, because the form is the same. The *-ed* form is the **past participle**, even though it can have no past meaning, as in the passive *The book will be written next year*.",
      "A non-finite clause is judged by its understood subject. *Walking home, the rain started* is awkward because the understood subject is the rain. It is a style and clarity issue.",
      "Each verb chooses the clause that follows it: *want to swim*, *enjoy swimming*, *can swim*. Some verbs change meaning with the pattern (*stop to smoke* and *stop smoking*). A learner dictionary lists the patterns."
     ],
     pro:[
      "Descriptive grammars classify clauses by **finiteness** and by **function**. Finite clauses include declaratives, interrogatives and imperatives (the status of imperatives is debated, because the verb is a base form that does not show tense), and non-finite clauses include infinitival and participial clauses. A clause is **embedded** when it is part of a larger clause, and in some trees it is also a part of a phrase, as in a relative clause inside a noun phrase.",
      "The infinitival *to* is analyzed as a marker, a particle or a kind of auxiliary, depending on the grammar. Descriptive grammars treat it as an **infinitival marker** that is not part of the verb. The base form without *to* occurs after modals (*can go*), after verbs such as *make* and *let* (*She made him go*), and in imperatives (*Go!*).",
      "Some non-finite clauses have their own subject: *For her to leave early would be rude.* *Having finished the report, she went home* is a non-finite clause with a perfect auxiliary. With *-ing* clauses, analysts also separate the **gerund** from the **participle** in some contexts, because only the first can take a possessive subject (*I dislike his leaving early*). Descriptive grammars treat both as the same form with different uses.",
      "Japanese contrasts are useful. Japanese modifier clauses come before the noun and have no relative word (*kinō katta hon*), the verb is at the end of each clause, and the plain verb form in a modifier shows tense (past *katta*, non-past *kau*). The finite/non-finite contrast therefore works differently in Japanese, and *-te* clauses (Unit 10) have a different role.",
      "Complement selection has a corpus side. *Enjoy*, *finish* and *avoid* select *-ing* complements, and *want*, *hope* and *decide* select *to*-infinitives. Corpus data show that some verbs, such as *begin* and *like*, take both with little difference, and that the choice can depend on dialect, formality and meaning. A teacher can check verbs in a learner dictionary or in COCA."
     ]},
    related:["phrases-and-heads-english","subjects-dummy-it-there-english"], read:[{book:"eling", where:"The Syntax chapter, section “Clausal embedding”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-phrase", term:"Phrase", def:"A word or group of words that works as one unit in a sentence, such as *the tall man* or *in the garden*. Every phrase has a head.", codex:"phrases-and-heads-english"},
   {id:"hew-head", term:"Head", def:"The word that decides the type of a phrase and carries its main meaning. The other words in the phrase are dependents.", codex:"phrases-and-heads-english"},
   {id:"hew-noun-phrase", term:"Noun phrase", def:"A phrase whose head is a noun, such as *the old box of chocolates*. It can be a subject, an object, a complement or an adverbial.", codex:"phrases-and-heads-english"},
   {id:"hew-verb-phrase", term:"Verb phrase", def:"A main verb with its objects and other dependents, such as *gave her a book*. The verbs alone are called the verb group.", codex:"phrases-and-heads-english"},
   {id:"hew-adjective-phrase", term:"Adjective phrase", def:"A phrase whose head is an adjective, such as *very proud of her son*.", codex:"phrases-and-heads-english"},
   {id:"hew-adverb-phrase", term:"Adverb phrase", def:"A phrase whose head is an adverb, such as *quite slowly*.", codex:"phrases-and-heads-english"},
   {id:"hew-prepositional-phrase", term:"Preposition phrase", def:"A preposition plus a noun phrase, such as *in the old house*. The preposition is the head.", codex:"phrases-and-heads-english"},
   {id:"hew-clause", term:"Clause", def:"A group of words built around a verb, usually with a subject. A clause can be a whole sentence or part of a larger one.", codex:"clauses-finite-nonfinite-english"},
   {id:"hew-subject", term:"Subject", def:"The phrase that the verb agrees with. It usually comes before the verb in a statement. It is not always the doer of the action.", codex:"clause-elements-patterns-english"},
   {id:"hew-object", term:"Object", def:"A phrase that follows a verb and names something the verb acts on. A direct object can become the subject of a passive.", codex:"clause-elements-patterns-english"},
   {id:"hew-complement", term:"Complement", def:"A phrase that describes or identifies the subject (*She is a doctor*) or the object (*It made her happy*). Descriptive grammars use the word more widely for anything a word requires.", codex:"clause-elements-patterns-english"},
   {id:"hew-adverbial", term:"Adverbial", def:"A part of a clause that says when, where, how or why. It can be an adverb, a preposition phrase, a noun phrase or a clause.", codex:"clause-elements-patterns-english"},
   {id:"hew-linking-verb", term:"Linking verb", def:"A verb such as *be, seem, become, look* or *feel* that joins the subject to a complement describing it.", codex:"clause-elements-patterns-english"},
   {id:"hew-clause-pattern", term:"Clause pattern", def:"A common combination of clause elements. The seven in the Quirk tradition are SV, SVO, SVC, SVA, SVOO, SVOC and SVOA. They are a teaching tool.", codex:"clause-elements-patterns-english"},
   {id:"hew-dummy-subject", term:"Dummy subject", def:"A subject word with no meaning of its own, used because an English finite clause needs a subject: *It’s raining. There is a bus.*", codex:"subjects-dummy-it-there-english"},
   {id:"hew-existential-there", term:"Existential there", def:"The word *there* used with *be* to say that something exists, as in *There are two buses*. It names no place and works as a subject.", codex:"subjects-dummy-it-there-english"},
   {id:"hew-nice", term:"NICE properties", def:"Four tests for an auxiliary verb: it can take Negation (*n’t*), move for Inversion, stand as Code for a phrase, and carry Emphasis.", codex:"nice-properties-do-support-english"},
   {id:"hew-do-support", term:"Do-support", def:"The use of *do* as a helper in questions, negatives, code and emphasis when there is no other auxiliary. *Do* carries the tense, and the main verb is the base form.", codex:"nice-properties-do-support-english"},
   {id:"hew-inversion", term:"Inversion", def:"A change of word order in which an auxiliary moves before the subject, as in *Can she swim?*", codex:"nice-properties-do-support-english"},
   {id:"hew-tag-question", term:"Tag question", def:"A short question added to a statement, such as *isn’t it?*. It repeats the auxiliary and the subject pronoun and usually reverses the positive or negative.", codex:"nice-properties-do-support-english"},
   {id:"hew-main-clause", term:"Main clause", def:"A clause that is not part of another clause. It can stand alone as a sentence.", codex:"clauses-finite-nonfinite-english"},
   {id:"hew-subordinate-clause", term:"Subordinate clause", def:"A clause that is part of a larger clause and does a job in it, such as a subject, an object, an adverbial or a modifier of a noun.", codex:"clauses-finite-nonfinite-english"},
   {id:"hew-relative-clause", term:"Relative clause", def:"A subordinate clause that modifies a noun, such as *that I read* in *the book that I read*. Unit 10 covers it in full.", codex:"clauses-finite-nonfinite-english"},
   {id:"hew-finite", term:"Finite", def:"A verb form that shows tense and agrees with its subject, such as *writes* or *wrote*. A clause with a finite verb is a finite clause.", codex:"clauses-finite-nonfinite-english"},
   {id:"hew-non-finite", term:"Non-finite", def:"A verb form that does not show tense: the infinitive (*to write*), the *-ing* form (*writing*) and the *-ed* form (*written*).", codex:"clauses-finite-nonfinite-english"}
  ],
  bank:[
   /* ---- Lesson 1: phrases and heads ---- */
   Q("e5u6-q01","e5u6-l1",1,"What is a phrase?",1,[
     ["Any group of words that has a verb in it","A group with a verb is usually a clause. Many phrases have no verb, such as *the old house*."],
     ["A word or group of words that works as one unit in a sentence","Right. It can be replaced by one word, moved as a whole or given as an answer."],
     ["A group of two or more words","A single word can be a phrase when it does the job of one, such as *Mei* in *Mei left*."],
     ["A complete sentence","A sentence has at least one clause. A phrase is smaller."]]),
   Q("e5u6-q02","e5u6-l1",1,"What is the **head** of a phrase?",2,[
     ["The first word","The head can be anywhere in the phrase."],
     ["The word with the most letters","Length does not decide the head."],
     ["The word that decides the phrase type and that cannot be removed","Right. The other words are dependents."],
     ["The word that carries the stress","Stress is a sound feature. It does not define the head."]]),
   Q("e5u6-q03","e5u6-l1",2,"What is the head of *very proud of her son*?",0,[
     ["*proud*","Right. The phrase can follow *be*, like an adjective, and *proud* cannot be removed."],
     ["*very*","*Very* is a dependent that increases the degree."],
     ["*son*","*Son* is the head of a noun phrase inside *of her son*, not of the whole phrase."],
     ["*of*","*Of* is the head of the small phrase *of her son*."]]),
   Q("e5u6-q04","e5u6-l1",2,"Which phrase has a preposition as its head?",3,[
     ["*the tall man*","The head is the noun *man*."],
     ["*very slowly*","The head is the adverb *slowly*."],
     ["*extremely tired*","The head is the adjective *tired*."],
     ["*after the meeting*","Right. *After* is the head, and *the meeting* is a noun phrase inside it."]]),
   Q("e5u6-q05","e5u6-l1",2,"“The key to the cabinet doors is lost.” Why is *is* correct?",1,[
     ["Because the verb always agrees with the nearest noun, *doors*.","The nearest noun is plural, so this rule would give *are*, which is wrong here."],
     ["Because the head of the subject is *key*, which is singular.","Right. The verb agrees with the head, and *to the cabinet doors* is a dependent."],
     ["Because *cabinet* is singular.","*Cabinet* is a modifier inside a dependent. It does not control agreement."],
     ["Because *lost* needs a singular verb.","*Lost* has no effect on agreement."]]),
   Q("e5u6-q06","e5u6-l1",2,"Which test shows that *the man with the telescope* can be a single unit?",2,[
     ["The spelling test","Spelling does not decide this."],
     ["The stress test","Stress is not a constituency test."],
     ["The pronoun test: it can be replaced by *him*, and the answer test: it can answer *Who did you see?*","Right. These tests show that the group acts as one unit."],
     ["The length test","Length does not decide structure."]]),
   Q("e5u6-q07","e5u6-l1",3,"*I saw the man with the telescope* has two meanings. What causes this?",1,[
     ["The word *saw* has two meanings.","The ambiguity is in the structure, not in a word."],
     ["The phrase *with the telescope* can attach to the noun phrase *the man* or to the verb phrase.","Right. This is structural ambiguity: one string, two structures."],
     ["The word *telescope* is rare.","The word is not the problem."],
     ["The sentence has no verb.","The sentence has the verb *saw*."]]),
   Q("e5u6-q08","e5u6-l1",3,"Hana says: “The head is always the last noun before the verb.” Which sentence shows she is wrong?",0,[
     ["*The box of chocolates is open.* The head is *box*, but the last noun before the verb is *chocolates*.","Right. The head is the noun that the phrase is about and that the verb agrees with."],
     ["*The tall man left.* The head is *man*.","Here the head is the last noun, so this example does not show an error."],
     ["*Mei left.* The head is *Mei*.","Here too the head is the last noun."],
     ["*The dog barked.* The head is *dog*.","Here the head is the last noun, so this example does not show an error."]]),
   Q("e5u6-q09","e5u6-l1",3,"A Japanese learner writes “the in the hat man”, with the modifier before the noun. What is the most likely cause?",2,[
     ["A spelling error","The words are spelled correctly. The problem is order."],
     ["A problem with the verb tense","There is no verb in the phrase."],
     ["Japanese puts modifiers before the head noun, as in *bōshi o kabutta otoko*, so the learner has used the same order in English.","Right. English puts a preposition phrase after the head noun: *the man in the hat*."],
     ["The word *hat* is not a noun","*Hat* is a noun."]]),
   /* ---- Lesson 2: clause elements and patterns ---- */
   Q("e5u6-q10","e5u6-l2",1,"What is the difference between a phrase type and a clause element?",2,[
     ["There is no difference.","They are different. One is form, and the other is function."],
     ["Phrase types are verbs, and clause elements are nouns.","Both labels apply to many kinds of phrase."],
     ["A phrase type says what the phrase is (noun phrase). A clause element says what job it does (subject, object).","Right. One phrase type can do several jobs."],
     ["Clause elements are only used in questions.","They apply to all clauses."]]),
   Q("e5u6-q11","e5u6-l2",1,"Which is a reliable test for the subject of a clause?",1,[
     ["It names the person who does the action.","This fails for *The window broke*."],
     ["The verb agrees with it, and it moves after the auxiliary in a question.","Right. These are form tests that work for every kind of subject."],
     ["It is the first word.","*Yesterday, Mei left* starts with an adverb."],
     ["It is always a noun.","A subject can be a pronoun or a clause."]]),
   Q("e5u6-q12","e5u6-l2",2,"In *Mei became a doctor*, what is *a doctor*?",3,[
     ["The direct object, because it follows the verb","It does not behave like an object: there is no passive."],
     ["The indirect object","There is no second object."],
     ["An adverbial","It does not say when, where or how."],
     ["A subject complement, because *became* is a linking verb and *a doctor* identifies Mei","Right. It cannot become the subject of a passive."]]),
   Q("e5u6-q13","e5u6-l2",2,"Which sentence has a **required** adverbial?",0,[
     ["*Mei put the keys on the table.*","Right. *Mei put the keys* is incomplete without *on the table*."],
     ["*Mei read the book yesterday.*","*Yesterday* can be deleted, so it is optional."],
     ["*Mei slowly left.*","*Slowly* can be deleted."],
     ["*Mei smiled at noon.*","*At noon* can be deleted."]]),
   Q("e5u6-q14","e5u6-l2",2,"What is the pattern of *Amara sent Dmitri a message*?",2,[
     ["SVO","There are two objects, so SVO is too simple."],
     ["SVC","There is no complement. *Dmitri* is not described."],
     ["SVOO","Right. *Dmitri* is the indirect object and *a message* is the direct object."],
     ["SVOA","There is no adverbial."]]),
   Q("e5u6-q15","e5u6-l2",2,"Which sentence has the pattern **SVC**?",1,[
     ["*The baby slept.*","This is SV: there is nothing after the verb."],
     ["*The soup tastes delicious.*","Right. *Delicious* describes the subject after a linking verb."],
     ["*Priya wrote a report.*","This is SVO."],
     ["*The meeting is at noon.*","This is SVA. The preposition phrase is an adverbial of time."]]),
   Q("e5u6-q16","e5u6-l2",3,"Which pair shows the difference between SVOC and SVOO?",0,[
     ["*The news made Sione happy.* and *Tomás made Sione a cake.*","Right. *Happy* describes Sione (SVOC), and *a cake* is a second object (SVOO)."],
     ["*She slept.* and *She ate.*","Neither sentence has an object, so neither is SVOC or SVOO."],
     ["*I know.* and *I think.*","These have no object."],
     ["*He ran.* and *He walked.*","Both are SV."]]),
   Q("e5u6-q17","e5u6-l2",3,"A teacher says: “English has exactly seven kinds of clauses.” What is the best response?",2,[
     ["That is right. All English clauses fit one of seven patterns.","The patterns are a simplified teaching set."],
     ["The claim is wrong. English has only three patterns.","There are more than three common patterns."],
     ["The seven patterns are a useful teaching tool for the main combinations. Real clauses add optional adverbials and other clauses, and descriptive grammars use different terms.","Right. The patterns are a model, not a full theory."],
     ["Patterns do not exist in English.","Verbs do have patterns. They are an important part of grammar."]]),
   Q("e5u6-q18","e5u6-l2",3,"Why does word order matter more in English than in Japanese for the roles in a clause?",3,[
     ["English has no verbs.","English has verbs."],
     ["Japanese has no word order.","Japanese has a typical order, and the verb comes last."],
     ["English uses particles and Japanese does not.","The opposite is true."],
     ["Japanese marks roles with particles (*ga, o, ni*), so the order can change. English marks them mainly by position.","Right. *Mei gave Tomás a book* and *Tomás gave Mei a book* have opposite meanings."]]),
   /* ---- Lesson 3: subject, dummy it and there ---- */
   Q("e5u6-q19","e5u6-l3",1,"Which sentence has a **dummy** subject?",2,[
     ["*Mei bought a phone.*","*Mei* is a real subject."],
     ["*The phone was cheap.*","*The phone* is a real subject."],
     ["*It is raining.*","Right. *It* has no meaning here. It fills the subject place."],
     ["*I like tea.*","*I* refers to a real person."]]),
   Q("e5u6-q20","e5u6-l3",1,"What is existential *there*?",1,[
     ["A word that points to a place","That describes the place word, as in *Put it there*."],
     ["A dummy subject used with *be* to say that something exists, as in *There is a bus*","Right. It names no place."],
     ["A pronoun that replaces a noun","It does not replace a noun."],
     ["A conjunction","It does not join clauses."]]),
   Q("e5u6-q21","e5u6-l3",2,"Which sentence is the best correction of *Is very hot here*?",3,[
     ["*Very hot here.*","This is still missing a subject and a verb."],
     ["*There is very hot here.*","*There* is for things that exist, not for temperature."],
     ["*Here is very hot.*","*Here* is a place word, not a subject."],
     ["*It is very hot here.*","Right. Temperature takes a dummy *it*."]]),
   Q("e5u6-q22","e5u6-l3",2,"Which result shows that *there* in *There is a bus* is a subject?",0,[
     ["It is repeated in a tag: *There is a bus, isn’t there?*","Right. A tag repeats the subject."],
     ["It means a place.","Existential *there* names no place."],
     ["It is always stressed.","It is usually weak."],
     ["It follows the verb.","It comes before the verb."]]),
   Q("e5u6-q23","e5u6-l3",2,"Which statement about Japanese subjects is accurate?",1,[
     ["Japanese has no subjects.","Japanese marks subjects, often with *ga*."],
     ["Japanese has subjects, but it often leaves them out when the context makes them clear. *Wa* marks the topic.","Right. Omission depends on what the listener knows."],
     ["Japanese always repeats the subject.","Subjects are often left out."],
     ["The topic and the subject are always the same word.","They are often different: *Zō wa hana ga nagai*."]]),
   Q("e5u6-q24","e5u6-l3",3,"Kaito, a first-year undergraduate, writes “Went to the library yesterday.” How would you correct it kindly?",2,[
     ["Tell him that Japanese people never use subjects.","This is not accurate, and it is not helpful."],
     ["Tell him the sentence is fine in all cases.","In standard written English, the subject is needed."],
     ["Say that the meaning is clear, give the corrected sentence (*I went to the library yesterday*), and explain that English needs a subject in a normal sentence.","Right. This keeps the tone kind and gives the rule."],
     ["Tell him to stop writing in English.","This is unkind and unhelpful."]]),
   Q("e5u6-q25","e5u6-l3",3,"Which sentence is **informal but acceptable** in English, and not an error?",0,[
     ["*Hope you’re well.* at the start of a message","Right. Dropping *I* at the start of an informal message is a normal register choice."],
     ["*Is raining.*","This drops a dummy subject, and it is not standard."],
     ["*Have a bus at eight.*","This has no subject and no *there*, and it is not standard."],
     ["*Here is very hot.*","This is not standard English."]]),
   Q("e5u6-q26","e5u6-l3",3,"*It takes two hours to get there.* What is the *it*?",1,[
     ["A pronoun that refers to a place","It does not refer to a place. It has no meaning."],
     ["A dummy subject that stands in the subject position, with the real subject moved to the end","Right. This is the moved-subject use, like *It is important to rest*."],
     ["An object","It is before the verb, so it is a subject."],
     ["An adverbial of time","It is the subject of *takes*."]]),
   Q("e5u6-q27","e5u6-l3",3,"In careful writing, which is correct?",2,[
     ["*There is two buses.*","The verb should agree with the notional subject, *buses*."],
     ["*There was two buses.*","The same problem, in the past."],
     ["*There are two buses.*","Right. Formal writing makes the verb agree with the thing that exists, though *There’s two buses* is common in speech."],
     ["*It are two buses.*","This uses *it* where English needs *there*."]]),
   /* ---- Lesson 4: NICE, do-support, questions, tags ---- */
   Q("e5u6-q28","e5u6-l4",1,"What does NICE stand for?",3,[
     ["Noun, Infinitive, Clause, Element","These are not the NICE properties."],
     ["Negation, Inflection, Clause, Emphasis","*Inflection* and *Clause* are not part of NICE."],
     ["Negation, Inversion, Consonant, Emphasis","*Consonant* is not part of NICE."],
     ["Negation, Inversion, Code, Emphasis","Right. These are the four tests for an auxiliary verb."]]),
   Q("e5u6-q29","e5u6-l4",1,"Which verb is an auxiliary?",2,[
     ["*like*","It needs *do* for the NICE tests."],
     ["*walk*","It needs *do*."],
     ["*can*","Right. It passes the NICE tests with no *do*."],
     ["*want*","It needs *do*."]]),
   Q("e5u6-q30","e5u6-l4",2,"What does *do*-support do?",1,[
     ["It makes a verb stronger.","It does not add strength. It adds a helper."],
     ["It adds the helper *do* when there is no other auxiliary, so that a question or negative can be formed.","Right. The helper carries the tense, and the main verb is the base form."],
     ["It changes a noun into a verb.","That is conversion."],
     ["It replaces the subject.","It does not touch the subject."]]),
   Q("e5u6-q31","e5u6-l4",2,"Which sentence is correct?",0,[
     ["*Does she like tea?*","Right. *Does* carries the *-s*, and *like* is the base form."],
     ["*Does she likes tea?*","The *-s* moved to *does*, so *likes* is wrong."],
     ["*Likes she tea?*","This was possible in older English, not now."],
     ["*Do she like tea?*","*Do* must agree with *she*: *does*."]]),
   Q("e5u6-q32","e5u6-l4",2,"Which sentence is correct?",3,[
     ["*I wonder where is she.*","Embedded questions keep statement order."],
     ["*Can you tell me where is the station?*","The same problem."],
     ["*What you want to eat?*","This lacks a helper and inversion."],
     ["*I wonder where she is.*","Right. After *I wonder*, the order is subject then verb."]]),
   Q("e5u6-q33","e5u6-l4",2,"When is *do* **not** used in a question?",2,[
     ["When the main verb is *like*","*Like* needs *do*."],
     ["When the sentence is in the past","The past uses *did*."],
     ["When another auxiliary is present, or when the question word is the subject (*Who called?*)","Right. In those cases the question already has its structure."],
     ["When the question is polite","Politeness does not change this."]]),
   Q("e5u6-q34","e5u6-l4",2,"What is the tag for *They’ve left*?",1,[
     ["*don’t they?*","The tag should repeat the auxiliary *have*."],
     ["*haven’t they?*","Right. The auxiliary is *have*, and the tag is negative after a positive statement."],
     ["*have they?*","This would follow a negative statement."],
     ["*aren’t they?*","This uses a different auxiliary."]]),
   Q("e5u6-q35","e5u6-l4",3,"Mei says “Do you can swim?” Which explanation is best?",3,[
     ["The word *swim* needs *do*.","*Swim* does not need *do* here."],
     ["Questions with *can* need *did*.","The question has no need for *did*."],
     ["*Can* is a main verb, so it needs *do*.","*Can* is a modal auxiliary."],
     ["*Can* is already an auxiliary, so it moves before the subject on its own: *Can you swim?*","Right. *Do* is only used when there is no other auxiliary."]]),
   Q("e5u6-q36","e5u6-l4",3,"Why do Japanese learners often find *do*-support hard?",0,[
     ["Japanese makes questions with *ka* at the end and negatives inside the verb with *-nai*, so it has no similar helper verb.","Right. There is no direct match, so the pattern has to be learned from scratch."],
     ["Japanese has no verbs.","Japanese has verbs."],
     ["Japanese has the same *do* helper.","There is no match."],
     ["Japanese has no questions.","Japanese has questions."]]),
   /* ---- Lesson 5: clause types ---- */
   Q("e5u6-q37","e5u6-l5",1,"What is a **main clause**?",2,[
     ["A clause that is longer than others","Length does not decide this."],
     ["A clause that starts with *because*","A *because*-clause is subordinate."],
     ["A clause that is not part of another clause and can stand alone","Right. A subordinate clause is part of a larger clause."],
     ["A clause with no verb","Every clause has a verb."]]),
   Q("e5u6-q38","e5u6-l5",1,"Which is a **non-finite** verb form?",1,[
     ["*wrote*","This is the past tense, so it is finite."],
     ["*to write*","Right. The infinitive has no tense."],
     ["*writes*","This is the present tense, so it is finite."],
     ["*can write*","*Can* is finite."]]),
   Q("e5u6-q39","e5u6-l5",2,"In *I know that she left*, what is *that she left*?",0,[
     ["A subordinate clause that is the object of *know*","Right. It does the job of an object."],
     ["A main clause","It is part of the larger clause."],
     ["A non-finite clause","*Left* is a past tense verb, so it is finite."],
     ["An adverbial","It answers *what*, not *when* or *why*."]]),
   Q("e5u6-q40","e5u6-l5",2,"Which sentence contains a *to*-infinitive clause of **purpose**?",2,[
     ["*She wants to leave.*","Here the clause is the object of *wants*."],
     ["*To err is human.*","Here the clause is the subject."],
     ["*She went to Osaka to see her aunt.*","Right. *To see her aunt* says why she went."],
     ["*She likes swimming.*","This has an *-ing* clause."]]),
   Q("e5u6-q41","e5u6-l5",2,"How many clauses are in *Because it rained, we stayed home*?",1,[
     ["One","There are two verbs, so there are two clauses."],
     ["Two","Right. *Because it rained* is subordinate, and *we stayed home* is the main clause."],
     ["Three","Only two verbs appear."],
     ["Four","Only two verbs appear."]]),
   Q("e5u6-q42","e5u6-l5",2,"What do descriptive grammars call the *-ing* form that school grammars call a gerund or a present participle?",3,[
     ["An infinitive","An infinitive is the base form."],
     ["A past participle","This is the *-ed* form."],
     ["A tense form","*-ing* does not show tense."],
     ["A gerund-participle","Right. It is one form with two uses."]]),
   Q("e5u6-q43","e5u6-l5",3,"“Standing at the door, the guard checked the tickets.” What is the understood subject of *standing*?",0,[
     ["*the guard*","Right. The understood subject of a non-finite clause comes from the main clause."],
     ["*the tickets*","The tickets are the object of *checked*."],
     ["*the door*","The door is part of a preposition phrase."],
     ["*nobody*","A non-finite clause has an understood subject."]]),
   Q("e5u6-q44","e5u6-l5",3,"A learner says “I enjoy to swim.” Which statement is the best explanation?",2,[
     ["The sentence is correct.","*Enjoy* takes an *-ing* form."],
     ["*Enjoy* is not a verb.","*Enjoy* is a verb."],
     ["*Enjoy* takes an *-ing* clause, and *want* takes a *to*-infinitive. The pattern belongs to each verb and has to be learned.","Right. A learner dictionary shows the pattern."],
     ["*To* is never used after a verb.","*Want to swim* is correct."]]),
   Q("e5u6-q45","e5u6-l5",3,"Which pair of sentences shows a verb that changes its meaning with the pattern?",1,[
     ["*She enjoys swimming.* and *She likes swimming.*","These two verbs have similar meanings."],
     ["*She stopped smoking.* and *She stopped to smoke.*","Right. The first means she quit, and the second means she paused in order to smoke."],
     ["*She can swim.* and *She could swim.*","These show a change of tense, not of pattern."],
     ["*She left.* and *She leaves.*","These show a change of tense, not of pattern."]])
  ]
});
})();
