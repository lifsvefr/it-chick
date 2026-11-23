(function(){
/* How English Works · Unit 12 (e5u12) · Explaining English */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u12", track:"e5", n:12, title:"Explaining English", icon:"💬",
  blurb:"This last unit makes the Explain it skill clear and reviews the whole course. You learn to find the cause of a learner’s error, give a short explanation that works, check understanding with good questions, and answer why-questions honestly, including when the answer is “it’s usage” or “I’ll check”. The last lesson brings the course together.",
  goals:[
    "Tell a slip from an error, and name likely causes: first-language transfer, overgeneralization and developmental sequence",
    "Give a short explanation made of a rule of thumb, an example and a contrast, and avoid false rules",
    "Write concept-checking questions and use simple timelines to check meaning",
    "Answer why-questions honestly as a reason, a piece of history, a matter of usage or a difference between varieties, and check a dictionary or corpus in front of the learner",
    "Use what you learned in the whole course to answer realistic learner questions"
  ],
  read:[
    {book:"eling", where:"The Adult Language Learning chapter, sections “Adults are not children” and “Cognitive processes in language learning”", note:"Cited by topic. It describes how adults learn a later language. Use this unit’s explanations first and read the sections afterward."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u12-l1", title:"Finding the cause of an error", minutes:55,
   hook:{q:"A learner says *I buyed a ticket*. What does this error most likely show?", options:["The learner is careless and does not study.","The learner has found the regular *-ed* rule and uses it on an irregular verb.","The learner’s first language has no past tense.","The learner cannot learn irregular verbs."], answer:1, reveal:"**The learner knows the regular *-ed* rule and uses it too widely.** This is called overgeneralization, and it is a sign of learning, not of carelessness. Many errors look alike on paper but have different causes. This lesson shows how to tell them apart, because the cause decides what help works."},
   goals:[
     "Tell a *slip* from an *error*, and say what Corder (1967) meant by the two words",
     "Explain *interlanguage*, and name four common causes of an error: transfer, overgeneralization, developmental sequence and slips",
     "Use a short routine to make a working guess about the cause",
     "Describe Japanese-speaker patterns kindly, as tendencies and not as faults"
   ],
   learn:[
    {h:"An error is evidence", body:[
      {lead:"A learner’s error shows what the learner’s mind is doing with English at that moment."},
      "When someone writes *two book* or says *He go to school*, the first reaction is often “wrong, fix it”. A good explainer asks a different question first: why did this learner choose this form? Two learners can write the same sentence for different reasons, and one explanation will not help both.",
      "Researchers began to study errors in this way in the 1960s. The field is called [[hew-error-analysis|error analysis]]. Its main idea is that errors are clues about the rules the learner is using now.",
      {key:"Before you correct an error, ask what caused it. The cause tells you what kind of help to give."}
    ]},
    {h:"Slips and errors: Corder’s distinction", body:[
      "In 1967 the British applied linguist S. Pit Corder published an article called “The significance of learners’ errors”. In it he separated two things that look alike. He used the word *mistake* for one and *error* for the other.",
      {table:[["Kind","Where it comes from","Can the learner fix it?"],["Mistake (a [[hew-slip|slip]])","Tiredness, speed, nerves, a lapse of memory. The learner knows the form.","Usually yes, at once or when you point to it."],["Error","The learner’s present knowledge of English. The form seems right to the learner.","Usually no. The same form comes back again and again."]]},
      "Examples: a tired speaker says *I went to the the station* and fixes it. That is a slip. A speaker who writes *He go to school* in every text is showing an error. Native speakers make slips too. Only learners make errors of this second kind, because they are still building the system.",
      "Today many writers say *slip* for Corder’s first kind, because in everyday English *mistake* and *error* mean the same thing. Use the two labels as handy tools, not as a perfect test. Some cases are in between: a learner may fix a form on Monday and not on Friday.",
      "The distinction is useful because it tells you which question to ask. A slip needs no new teaching. An error needs an explanation."
    ]},
    {h:"Interlanguage", body:[
      "In 1972 the linguist Larry Selinker used the word [[hew-interlanguage|interlanguage]] for a learner’s own system. It is between the first language and English, and it has rules of its own. Those rules change as the learner learns.",
      "This idea changes how you hear errors. *She buyed a ticket* is not English with random damage. It follows a rule: add *-ed* for the past. The rule is real, and it is the wrong one for this verb. A learner with an interlanguage is a learner who is making progress."
    ]},
    {h:"Four common causes", body:[
      "Four causes explain most of what you will see. They often appear together, so treat each one as a guess.",
      {list:[
        "**[[hew-l1-transfer|First-language transfer]].** The learner uses a pattern from another language. It can help (*positive transfer*: Japanese *kōhī*, コーヒー, helps with *coffee*) or cause errors (*negative transfer*, also called interference).",
        "**[[hew-overgeneralization|Overgeneralization]].** The learner applies a rule too widely: *goed, childs, mans, buyed, more better*. Young children who learn English as a first language do the same.",
        "**A [[hew-developmental-sequence|developmental sequence]].** Learners with different first languages often learn features in a similar order. Third-person *-s* (*she works*) comes late, and many learners leave it out even when they know the rule. A question such as *You like coffee?* often comes before *Do you like coffee?* This order is a tendency, not a fixed timetable.",
        "**Slips.** Performance mistakes from speed, tiredness or nerves."
      ]},
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="e5u12a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="14" y="8" width="312" height="36" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">An error in a learner’s sentence</text><path class="d-ink" d="M170 46V62" stroke-width="2" marker-end="url(#e5u12a)"/><rect class="d-gold" x="14" y="66" width="312" height="46" rx="8" stroke-width="2"/><text x="170" y="87" text-anchor="middle">Can the learner fix it</text><text x="170" y="105" text-anchor="middle">when you point to it?</text><path class="d-ink" d="M82 114V136" stroke-width="2" marker-end="url(#e5u12a)"/><text class="s" x="92" y="130">yes</text><path class="d-ink" d="M258 114V136" stroke-width="2" marker-end="url(#e5u12a)"/><text class="s" x="268" y="130">no</text><rect class="d-sage" x="14" y="140" width="136" height="44" rx="8" stroke-width="2"/><text x="82" y="160" text-anchor="middle">Slip</text><text class="s" x="82" y="176" text-anchor="middle">no new teaching</text><rect class="d-lup" x="190" y="140" width="136" height="44" rx="8" stroke-width="2"/><text x="258" y="160" text-anchor="middle">Error</text><text class="s" x="258" y="176" text-anchor="middle">look at the pattern</text><path class="d-ink" d="M258 186V206" stroke-width="2" marker-end="url(#e5u12a)"/><rect class="d-soft" x="14" y="210" width="312" height="48" rx="8" stroke-width="2"/><text x="170" y="231" text-anchor="middle">Matches the first language?</text><text class="s" x="170" y="249" text-anchor="middle">Possible transfer</text><rect class="d-soft" x="14" y="268" width="312" height="48" rx="8" stroke-width="2"/><text x="170" y="289" text-anchor="middle">Regular rule on an exception?</text><text class="s" x="170" y="307" text-anchor="middle">Overgeneralization</text><rect class="d-soft" x="14" y="326" width="312" height="48" rx="8" stroke-width="2"/><text x="170" y="347" text-anchor="middle">Late-learned feature the learner knows?</text><text class="s" x="170" y="365" text-anchor="middle">Developmental sequence</text></svg>', alt:"A flow chart. An error in a learner’s sentence leads to the question: can the learner fix it when you point to it? Yes leads to slip, no new teaching. No leads to error, look at the pattern. Under error are three stacked questions: does it match the first language (possible transfer), is it a regular rule used on an exception (overgeneralization), is it a late-learned feature the learner knows (developmental sequence).", cap:"A first sort: slip or error, and then three questions about the pattern of an error."},
      {table:[["Cause","Clue","Helpful response"],["Transfer","The pattern matches the first language, and it appears often","Show the English pattern and where it differs"],["Overgeneralization","A regular rule on an irregular word; the learner sometimes says the right form","Praise the rule, then teach the exceptions as a short list"],["Developmental","The learner knows the rule but leaves the form out in free speech","Be patient; give short reminders"],["Slip","One time, and the learner fixes it","Say nothing, or nod"]]}
    ]},
    {h:"A short diagnosis routine", body:[
      "A cause is a working guess. One sentence cannot prove it. Use these steps.",
      {ol:[
        "Understand what the learner meant. Ask if you are not sure.",
        "Ask the learner to fix it. If the learner can, you probably saw a slip.",
        "Look for a pattern. Does the same error appear in other sentences?",
        "Compare with the learner’s first language, if you know it. If you do not know it, ask. Also check whether a regular rule was used on an exception.",
        "Choose one cause as your guess and give an explanation for that cause.",
        "Watch the next sentences. If the error stays, try another cause."
      ]},
      {ex:"Kaito, a first-year undergraduate in information engineering from a small mountain town in Gifu, writes to an exchange student: “Yesterday I made dinner for two friend. Is very delicious.” There are two errors and each has a different guess. *Two friend*: Japanese does not mark plural on the noun, so transfer is a good guess. *Is very delicious*: Japanese often leaves out the subject, so transfer is again likely. *Made* is correct, which shows that Kaito can mark the past. The next step is to check his other sentences before you explain.", label:"Worked example"}
    ]},
    {h:"Patterns Japanese speakers often show", body:[
      "These patterns are tendencies. Many Japanese speakers never make them, and speakers of other languages make them too. Russian and Mandarin, for example, also have no articles.",
      {table:[["Pattern","Example","Likely link to Japanese"],["Missing articles","*I bought book.*","Japanese has no articles (Unit 9)."],["No plural ending","*two book, many student*","Japanese nouns do not mark plural. Number words and counters carry the number."],["Missing subject","*Is raining. Went to Nara.*","Japanese often leaves out a subject that is clear from context (Unit 6)."],["Yes or no to a negative question","“Don’t you like natto?” “Yes.” (meaning *No, I don’t*)","Japanese *hai* often means “what you said is right”, so it agrees with the question."]]},
      {h:"Compared with Japanese"},
      "The last pattern shows how a good habit in one language can mislead in another. In Japanese, *hai* agrees with the form of the question. In English, *yes* agrees with the facts: *Yes, I do* or *No, I don’t*. A learner who answers *Yes* is not confused about the meaning. The learner is using a polite pattern from Japanese. Give a short model, such as *No, I don’t. It’s a bit sticky for me.*, and let the learner try it.",
      "Sounds work the same way. Japanese has no /l/ and /r/ contrast, so *rice* and *lice* may sound alike to a learner (Unit 2). This is transfer in the ear, and it is not a lack of effort."
    ]},
    {h:"Giving feedback kindly", body:[
      "Name one pattern at a time. A list of ten corrections is hard to use. Say what the learner did well: a learner who writes *buyed* has found a real rule. Explain the pattern in one or two sentences, then ask the learner to try a new sentence.",
      "Avoid words that sound like blame, such as “again” and “still”. Say “This is a common pattern, and here is how English handles it”. Learners who feel safe try more, and trying more is how interlanguage grows."
    ]}
   ],
   try:[
    M("e5u12-l1-x1", "What is the main idea of Corder’s 1967 distinction between mistakes and errors?", 0, [
      ["Slips come from performance and can usually be fixed by the speaker. Errors come from the learner’s present knowledge and come back systematically.","Right. The cause and the learner’s ability to self-correct separate the two kinds."],
      ["Mistakes are spoken, and errors are written.","Both kinds can be spoken or written. The distinction is about the cause."],
      ["Mistakes are serious, and errors are small.","Size does not matter here. A small form can be a systematic error."],
      ["Only native speakers make mistakes, and only learners make errors.","Learners make slips too, and native speakers also make slips. Errors in Corder’s sense are the systematic ones that show a learner’s present knowledge."]
    ]),
    {id:"e5u12-l1-x2", type:"sort", q:"What is the most likely cause of each pattern?", buckets:["Slip","Overgeneralization","First-language transfer","Late-learned feature"], items:[
      {t:"A tired learner says *I went to the the station* and fixes it at once.", b:0, why:"A repeated word, fixed at once: a slip."},
      {t:"*She buyed a ticket.* The learner has just learned the *-ed* ending.", b:1, why:"The learner applies the regular rule to an irregular verb."},
      {t:"A Japanese speaker writes *I saw movie.* Japanese has no articles.", b:2, why:"Dropping the article matches the learner’s first language. Transfer is the best guess."},
      {t:"A learner writes *-s* correctly on a grammar test but says *He work in Sendai* in a conversation.", b:3, why:"The learner knows the rule, but third-person *-s* comes late in free speech."},
      {t:"*Two mans came in.* The learner knows that plurals take *-s*.", b:1, why:"The regular plural rule is used on an irregular noun."},
      {t:"A learner writes *Is cold today.* In the learner’s first language, the subject is often left out.", b:2, why:"Subject omission is a pattern from the first language. Transfer is likely."},
      {t:"A learner asks *You like coffee?* and has not yet used *Do you like coffee?*", b:3, why:"Questions with *do* usually come after the plain rising question in the order learners follow."},
      {t:"A learner types *recieve*, sees the red line and fixes it.", b:0, why:"The learner can fix it at once: a slip."}
    ]},
    {id:"e5u12-l1-x3", type:"match", q:"Match each term with its meaning.", pairs:[
      ["Interlanguage","A learner’s own developing system, with rules that change","Selinker used this word in 1972."],
      ["Overgeneralization","A regular rule used on a word that is an exception","*Goed* and *childs* are examples."],
      ["Positive transfer","A first-language pattern that helps in English","Japanese *kōhī* (コーヒー) helps with *coffee*."],
      ["Developmental sequence","A common order in which many learners acquire features","Third-person *-s* tends to come late."],
      ["Slip","A performance mistake that the speaker can usually fix","Nerves and speed are common causes."]
    ]},
    {id:"e5u12-l1-x4", type:"spot", q:"Kaito writes to a friend. Tap each part that may come from **first-language transfer** (Japanese).", ask:"may come from transfer", parts:[
      "“Hello Sam! Yesterday I ", {t:"made dinner", flag:false, why:"This is correct. Kaito marks the past tense correctly."}, " for ", {t:"two friend", flag:true, why:"Japanese does not mark plural on the noun. The number word and counter carry the number."}, ". ", {t:"Is very delicious", flag:true, why:"Japanese often leaves out a subject that is clear. English needs *It* or *They*."}, ". We ate ", {t:"rice and fish", flag:false, why:"Both are noncount nouns used correctly with no article."}, ". Please come ", {t:"to to", flag:false, why:"A repeated word. This looks like a slip, not a pattern."}, " my house next week.”"
    ]},
    M("e5u12-l1-x5", "A learner answers “Yes.” to “Don’t you like natto?” and means “No, I don’t like it.” What is the best explanation and help?", 1, [
      ["It is overgeneralization. Teach irregular verbs.","There is no regular rule applied wrongly here. The cause is a different pattern."],
      ["It may be transfer: Japanese *hai* often agrees with what the speaker said. Explain that English *yes/no* follows the facts, and practice short answers.","Right. A short model such as *No, I don’t.* gives the learner the English pattern."],
      ["It is a slip from tiredness. Ignore it.","It will probably come back, so it is a pattern and not a slip."],
      ["It is rudeness. Tell the learner to answer politely.","The learner is being polite in Japanese terms. It is a different convention, not rudeness."]
    ]),
    {id:"e5u12-l1-x6", type:"order", q:"Put the steps of the diagnosis routine in order.", items:[
      {t:"Understand what the learner meant.", why:"You cannot find the cause of a sentence you have not understood."},
      {t:"Ask the learner to fix it.", why:"This is a quick test that finds slips."},
      {t:"Look for the same error in other sentences.", why:"A pattern points to a system, not a slip."},
      {t:"Compare with the first language and with regular rules.", why:"This finds transfer or overgeneralization."},
      {t:"Choose one cause as a guess and explain for it.", why:"One clear explanation helps more than three guesses."},
      {t:"Watch the next sentences.", why:"The next sentences tell you if your guess was good."}
    ]},
    {id:"e5u12-l1-x7", type:"number", q:"A learner writes seven sentences that need third-person *-s*. Five of them have no *-s*. What percentage of the needed *-s* endings are missing? Round to a whole number.", answer:71, tol:1, unit:"%", why:"5 ÷ 7 = 0.714, so about 71%. The error is repeated in most cases, so it is a pattern and not a slip. The learner uses *-s* in two sentences, so the learner knows the form, and a late-learned feature is the best guess.", wrongs:[{v:50, tol:1, why:"This divides by 10. Only seven sentences need *-s*, so divide by 7."},{v:29, tol:1, why:"This is the percentage that *have* the *-s* (2 ÷ 7). The question asks for the missing ones."}], hint2:"Divide the missing endings by the number of cases where *-s* was needed."},
    {id:"e5u12-l1-x8", type:"explain", q:"Hana, a learner from Japan, says: “I know that *two books* is correct. But I keep writing *two book*, and I do not see it. Why?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what is common about this pattern, link it to Japanese kindly, and give her one thing to do.", model:"This is a very common pattern and it is not carelessness. In Japanese, nouns do not change for plural, and a number word or counter shows the number. So the plural *-s* carries little new information for you when *two* is already there, and it is easy to miss. Try checking only for this: after you write, look for number words and make sure the next noun ends in *-s*.", points:["Says the pattern is common and not carelessness", "Links it to Japanese nouns having no plural marking", "Explains why the -s is easy to miss after a number word", "Gives one practical editing step"]}
   ],
   apply:{
    intro:"These tasks need only a text and a pencil or a note app. Use your own writing, or a short text that a friend gives you with permission.",
    tasks:[
     {t:"Diagnose five errors", how:[
       "Find five errors in your own recent English writing, or in a short text from a learner who agreed to share it.",
       "For each one, write the error, the correct form, and your best guess at the cause: slip, transfer, overgeneralization or developmental.",
       "For two of them, write one sentence that you could say to the learner. Check that it is kind and short."
     ], write:"Error 1… correct form… my guess… (five lines). Two sentences to say…"},
     {t:"Check the guess", how:[
       "Choose one of your five errors. Look for the same pattern in other texts by the same writer.",
       "Count how often the pattern appears and how often the right form appears.",
       "Write one sentence: does the count support your guess, or does it point to a different cause?"
     ], write:"The pattern… how often… what it suggests…"}
    ],
    proof:"A table of five errors with correct forms and guessed causes, two kind explanations, and one sentence that tests a guess against the counts."
   },
   read:[
    {book:"eling", where:"The Adult Language Learning chapter, section “Cognitive processes in language learning”", note:"It introduces interlanguage (Selinker, 1972) and explains why early learner grammars often leave out small words and endings."},
    {book:"eling", where:"The Adult Language Learning chapter, section “Learning a New Modality”", note:"Read its first paragraphs, which explain positive and negative transfer."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u12-l2", title:"Short explanations that work", minutes:55,
   hook:{q:"A learner asks: “When do I use *for* and when do I use *since*?” Which answer is the best?", options:["“*For* goes with the present perfect, and *since* goes with the past simple.”","“Use *for* with a length of time (*for two years*) and *since* with a starting point (*since 2024*).”","“There are fourteen rules. I will list them.”","“It is just usage.”"], answer:1, reveal:"**The second answer.** It is short, it is mostly true, and a learner can use it at once. The first is wrong: both are common with the present perfect (*I’ve lived here for two years*, *since 2024*). The third overloads the learner. The fourth is not true, because there is a clear pattern. This lesson shows how to build answers like the second one."},
   goals:[
     "Build an explanation from a rule of thumb, an example and a contrast",
     "Spot and replace common false rules",
     "Decide when a short, honest “it’s usage” is the right answer, and how to say it kindly",
     "Fit the size and words of an explanation to the learner"
   ],
   learn:[
    {h:"Rule, example, contrast", body:[
      {lead:"A short explanation has three parts: one rule of thumb, one example, one contrast."},
      "A [[hew-rule-of-thumb|rule of thumb]] is a short statement that is true in most cases and says so. The example shows the rule at work. The contrast shows the nearest wrong or different choice, so the learner sees the edge of the rule. Together they take about twenty seconds to say.",
      {table:[["Part","Its job","Example: *for* and *since*"],["Rule of thumb","Gives the pattern","Use *for* with a length of time and *since* with a starting point."],["Example","Shows it in a real sentence","*I’ve lived here for two years.*"],["Contrast","Shows the nearest alternative","*I’ve lived here since 2024.* The time is a point, not a length."]]},
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u12b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="14" y="10" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">1 Rule of thumb</text><text class="s" x="170" y="56" text-anchor="middle">for + a length of time</text><text class="s" x="170" y="72" text-anchor="middle">since + a starting point</text><path class="d-ink" d="M170 84V104" stroke-width="2" marker-end="url(#e5u12b)"/><rect class="d-gold" x="14" y="108" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="132" text-anchor="middle">2 Example</text><text class="s" x="170" y="158" text-anchor="middle">I’ve lived here for two years.</text><path class="d-ink" d="M170 182V202" stroke-width="2" marker-end="url(#e5u12b)"/><rect class="d-lup" x="14" y="206" width="312" height="82" rx="8" stroke-width="2"/><text x="170" y="230" text-anchor="middle">3 Contrast</text><text class="s" x="170" y="254" text-anchor="middle">I’ve lived here since 2024.</text><text class="s" x="170" y="274" text-anchor="middle">A point in time, not a length</text></svg>', alt:"Three boxes joined by arrows. The first, rule of thumb, says for plus a length of time, since plus a starting point. The second, example, says I’ve lived here for two years. The third, contrast, says I’ve lived here since 2024, a point in time and not a length.", cap:"A short explanation in three steps."},
      "Most of the time, three sentences are enough. If the learner needs more, they will ask, and then you can add."
    ]},
    {h:"What makes a good rule of thumb", body:[
      "A good rule of thumb is true often enough to be useful, and it is honest about its limits. It uses words such as *usually* or *most of the time*. It is stated in words the learner knows, not in grammar terms that the learner has not learned.",
      "Take the prepositions of time. A common rule of thumb is: *at* for clock times (*at 7:30*), *on* for days and dates (*on Monday, on June 5*), *in* for months, years and parts of the day (*in July, in 2024, in the morning*). It has exceptions: *at night*, and *on Monday morning*. Say so in one sentence, and the learner will trust you more, not less.",
      "A good rule is about the learner’s next sentence. “Use *a* or *an* by the sound of the next word” helps with the next noun. A long list of the history of articles does not.",
      {tip:"Say *usually* and give one exception. A rule that claims no exceptions will fail sooner or later, and then the learner trusts the next rule less."}
    ]},
    {h:"False rules and better ones", body:[
      "Some classroom rules are false or misleading, and learners repeat them for years. The course met several. Here they are with better versions.",
      {table:[["False or misleading rule","Why it fails","Better rule"],["Use *the* when something is important.","*A jacket* can be very important to you. The test is the listener’s knowledge.","Use *the* when the listener can tell which one you mean."],["*Some* is for positive sentences and *any* for negative ones.","*Would you like some coffee?* is a question with *some*.","Use *any* in negatives and most questions. Use *some* in offers and requests."],["Use *a* before vowel letters.","*A university*, *an hour*: sound decides.","Use *a* or *an* by the first sound of the next word."],["The present perfect is for the recent past.","*I’ve lived here for ten years* is not recent.","Use the present perfect when the time period reaches the present. Use the past simple for a finished time."],["Never start a sentence with *and* or *but*.","Careful writers do it often (Unit 1).","Start with *and* or *but* when it helps the flow, and use it in moderation in formal writing."],["A noun is a person, place or thing.","*Destruction* and *Tuesday* are nouns (Unit 4).","Test the word: can it take *the* or *a*, or a plural?"]]},
      "These rules were not made to hurt. They were attempts to make something simple, and the attempts went too far. When you notice a false rule in your learner’s head, say that it was a useful start and give the better one."
    ]},
    {h:"When “it’s usage” is the honest answer", body:[
      "Some questions have no neat rule. *Why do we say* in the morning *and* at night? *Why* make a decision *and not* do a decision? Here, the honest answer is that English speakers say it this way. This is [[hew-usage|usage]]: the way people use words and phrases in practice.",
      "“It’s usage” should not be a shrug. A good usage answer has four parts.",
      {ol:[
        "Look first for a pattern. If there is a tendency, say it, and say that it is a tendency.",
        "If there is none, say so plainly: “I don’t know a rule that predicts this.”",
        "Give the usable chunk and one example: *make a decision, make a mistake, do homework.*",
        "Say how to check: a learner dictionary, or a corpus (Unit 1, Lesson 2)."
      ]},
      {ex:"Toby, a master’s student in Japanese linguistics who taught English in the Japanese countryside for two years, is asked: “Why *on the bus* but *in the car*? I want a rule.” Toby says: “Usually we say *on* for large public vehicles that you can walk around in, such as a bus, a train or a plane, and *in* for small ones such as a car or a taxi. There are exceptions, so treat it as a tendency and learn the phrases. A quick check in a dictionary gives examples.” That is a rule of thumb, an example (*on the bus*), a contrast (*in a car*) and an honest note about limits.", label:"Worked example"},
      "A kind “it’s usage” also says that the question is a good one. The learner is looking for a pattern, and that is how language learning works."
    ]},
    {h:"Fit the answer to the learner", body:[
      "The same question needs different answers for different people. Ask first: what do you already know, and what sentence did you want to say? Then answer in words that are simpler than the topic.",
      {table:[["Too long or too technical","Works"],["“*Article choice depends on definiteness, which is a feature of the noun phrase and the shared knowledge of speaker and hearer.*”","“Use *the* when we both know which one. Use *a* when it is new.”"],["“*The verb is in the present perfect, which expresses current relevance.*”","“We use this form when the time reaches now: *since 2024*.”"],["“*That is irregular.*”","“*Go* has a special past form: *went*. Learn it as a pair.”"]]},
      "Start from the learner’s own sentence whenever you can. It shows you what the learner already controls, and the learner pays more attention to it. A grammar term can come later, if the learner will meet it in a book.",
      {h:"Compared with the learner’s first language"},
      "A comparison works only if you know the other language well. If you do not, ask: “How do you say this in your language?” That is kind, and it gives you data for the diagnosis in Lesson 1. If you do know the language, a one-line contrast can save time: *Japanese leaves out the subject, English needs one.* Keep it short, and never say that the first language is the problem."
    ]}
   ],
   try:[
    M("e5u12-l2-x1", "A learner asks: “Why do we say *on Monday* but *in July*?” Which answer is the best short explanation?", 1, [
      ["“It comes from Old English case endings, which marked days and months differently.”","This is not a usable explanation for a learner, and it is not what causes the pattern in modern English."],
      ["“*On* is usually for days and dates (*on Monday*), and *in* for longer periods such as months and years (*in July*). *At* is for clock times: *at 7:30*.”","Right. It gives a rule of thumb, an example and a contrast with *at*."],
      ["“It’s just usage. Learn it.”","There is a clear tendency here, so this answer withholds a useful pattern."],
      ["“*On* is for short times and *in* is for long times.”","This is misleading: *in the morning* is short and takes *in*, and *on Monday* covers a whole day. Length does not decide."]
    ]),
    {id:"e5u12-l2-x2", type:"sort", q:"Is each rule a useful rule of thumb or a false or misleading rule?", buckets:["Useful rule of thumb","False or misleading rule"], items:[
      {t:"Use *at* with clock times, *on* with days, *in* with months and years.", b:0, why:"A useful pattern. It has exceptions such as *at night*."},
      {t:"Use *the* when something is important.", b:1, why:"Importance does not decide. The listener’s knowledge does."},
      {t:"Choose *a* or *an* by the first sound of the next word.", b:0, why:"True and short: *a university, an hour*."},
      {t:"The present perfect is for the recent past.", b:1, why:"*I’ve lived here for ten years* is not recent. The time period reaches the present."},
      {t:"Use *for* with a length of time and *since* with a starting point.", b:0, why:"A useful pattern for the present perfect and similar sentences."},
      {t:"Use *a* before vowel letters.", b:1, why:"Letters do not decide. *A university* starts with a vowel letter and takes *a*."},
      {t:"Never start a sentence with *and* or *but*.", b:1, why:"This is a myth (Unit 1). Good writers do it."},
      {t:"Use *any* in negatives and most questions, and *some* in offers and requests.", b:0, why:"A useful pattern. *Would you like some coffee?* fits it."}
    ]},
    {id:"e5u12-l2-x3", type:"order", q:"A learner asks: “Why do we say *on the bus*?” Put the parts of a good short answer in order.", items:[
      {t:"“We usually say *on* for large public vehicles that you can walk around in, such as buses, trains and planes.”", why:"A rule of thumb first, with *usually*."},
      {t:"“For example, *I’m on the bus.*”", why:"An example makes the rule concrete."},
      {t:"“Small vehicles take *in*: *in a car, in a taxi*.”", why:"The contrast shows the edge of the rule."},
      {t:"“There are exceptions, so learn the phrases and check a dictionary if you are unsure.”", why:"An honest note about limits, and a way to check."}
    ]},
    {id:"e5u12-l2-x4", type:"match", q:"Match each learner question with the kind of answer that is most honest.", pairs:[
      ["Why do we say *on Monday* but *in July*?","A rule of thumb with exceptions","There is a clear tendency to give."],
      ["Why is *knight* spelled with a *k*?","History","The *k* was pronounced long ago and the spelling stayed."],
      ["Why do we say *make a decision* and not *do a decision*?","Usage: learn the chunk","No rule predicts it. A dictionary or corpus shows the pattern."],
      ["Why is *-ed* in *walked* pronounced /t/?","A sound rule","*-ed* follows the voicing of the last consonant (Unit 2)."]
    ]},
    {id:"e5u12-l2-x5", type:"spot", q:"A new tutor wrote this explanation sheet. Tap each statement that is **false or overclaimed**.", ask:"false or overclaimed", parts:[
      "“", {t:"We use *the* when something is important.", flag:true, why:"Importance does not decide. The listener’s knowledge does."}, " ", {t:"Use *since* with a starting point.", flag:false, why:"Correct and useful."}, " ", {t:"Use *a* before vowel letters.", flag:true, why:"Sound decides. *A university, an hour*."}, " ", {t:"Use *at* with clock times.", flag:false, why:"Correct: *at 7:30*."}, " ", {t:"The present perfect is always about the recent past.", flag:true, why:"*I’ve known her for years* is not recent. Also *always* makes it a false rule."}, " ", {t:"For *on the bus*, there is no neat rule, so learn the phrase.", flag:false, why:"A fair, honest note. It would be better with the tendency, but it does not claim anything false."}, "”"
    ]},
    M("e5u12-l2-x6", "A learner asks why we say *in the morning* but *at night*. What is the most honest answer?", 1, [
      ["“Morning is a longer time than night, so we use *in*.”","This is an invented reason. *At night* covers many hours, and *in the evening* is just as long."],
      ["“I don’t know a rule that predicts it. These are fixed phrases, so learn them as chunks. A dictionary shows more examples.”","Right. It is honest, it gives the usable chunk and it says how to check."],
      ["“You should not worry about small words.”","Small words matter, and the learner asked a fair question."],
      ["“It is because night is dark.”","This sounds like an explanation but it does not predict anything: *in the dark* uses *in* too."]
    ]),
    {id:"e5u12-l2-x7", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a learner: “When do I use *much*, and when do I use *many*?” Write the explanation he could give.", size:"3–4 sentences", prompt:"I would say: …", hint:"Use a rule of thumb, one example, one contrast and a note about limits.", model:"Use *many* with plural nouns that you can count, such as *many people*, and *much* with nouns that you cannot count, such as *much time*. So we say *How many books?* but *How much money?* One limit: in everyday positive sentences, *a lot of* usually sounds more natural than *much*, so say *I have a lot of time*. A learner dictionary shows whether a noun is countable.", points:["Gives a rule of thumb about nouns you can count and nouns you cannot", "Gives an example with many", "Gives a contrast with much", "Gives a limit, such as a lot of in positive sentences, or says how to check"]},
    {id:"e5u12-l2-x8", type:"explain", q:"A learner asks: “Why is it *interested in* and not *interested on*? Is there a reason?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Be honest that it is usage, and give her a way to learn it.", model:"This is usage: English speakers say *interested in*, and I don’t know a rule that predicts the preposition. Some words go with a fixed preposition, and it helps to learn the whole phrase: *interested in, good at, afraid of*. A learner dictionary shows the preposition in the entry, so you can check each new adjective. Asking is a good habit, because you are looking for patterns.", points:["Says honestly that it is usage", "Gives the chunk interested in", "Says how to check in a dictionary", "Is kind about the question"]}
   ],
   apply:{
    intro:"These tasks use your own questions and a free learner’s dictionary such as the Cambridge Dictionary or the Oxford Learner’s Dictionaries.",
    tasks:[
     {t:"Write three short explanations", how:[
       "Choose three questions that learners often ask: for example *for/since*, *in/on/at* for time, *some/any*.",
       "For each, write a rule of thumb, one example and one contrast, in about three sentences.",
       "Read your three explanations aloud. Cut any word that a B1 learner might not know."
     ], write:"Question 1… rule… example… contrast… (three times)"},
     {t:"Replace a false rule", how:[
       "Choose one false rule from the table in this lesson, or one that you were taught.",
       "Write why it fails, with one sentence that breaks it.",
       "Write the better rule, and check it in a learner dictionary or a grammar reference."
     ], write:"The false rule… the sentence that breaks it… the better rule… how I checked…"}
    ],
    proof:"Three short explanations in rule, example and contrast form, and one false rule with its replacement."
   },
   read:[
    {book:"eling", where:"The Adult Language Learning chapter, section “Gaining proficiency”", note:"Read it for the question “Who decides what counts as fluent?” It is a good reminder that learners set their own goals, and that a rule should serve the learner’s goal."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u12-l3", title:"Checking understanding: concept-checking questions", minutes:55,
   hook:{q:"You just explained *I used to play the piano*. Which question best checks that the learner understood the meaning?", options:["“Do you understand?”","“Do I play the piano now?”","“Can you say *used to* ten times?”","“What is the grammar name of *used to*?”"], answer:1, reveal:"**“Do I play the piano now?”** The answer (*no*) shows that the learner understands that *used to* talks about a past state that has ended. “Do you understand?” gets a polite *yes* from almost everyone. This lesson shows how to write short questions about meaning, and how to draw a timeline when a picture helps."},
   goals:[
     "Explain why “Do you understand?” does not check understanding",
     "Define a *concept-checking question* (CCQ) and write good ones for a form",
     "Draw and read a simple timeline, and say when a timeline can mislead",
     "Use CCQs one-to-one without turning an explanation into a lesson plan"
   ],
   learn:[
    {h:"Why “Do you understand?” does not work", body:[
      {lead:"People often say yes when they have not understood. A good question asks about the meaning and makes a yes or no answer useful."},
      "After an explanation, the quick check is “Does that make sense?” or “Do you understand?” Most learners say yes. They may want to be polite. They may not want to slow the conversation. Or they may believe that they understood, but they understood something different. This happens to everyone who is learning.",
      "A second problem is that a learner can repeat a sentence perfectly and still miss its meaning. A model sentence shows the form. It does not show that the learner knows what the form says about the world.",
      "So you need a check that cannot be answered by politeness. That check is a question about the situation."
    ]},
    {h:"What a concept-checking question is", body:[
      "A [[hew-ccq|concept-checking question]] (CCQ) is a short question about the **meaning** of a form, with an answer that shows whether the learner has understood the idea. The answer is usually *yes* or *no*, or a few words.",
      "A good CCQ has these properties:",
      {list:[
        "It asks about **meaning**, not about form or grammar terms. Ask *Do I play now?*, not *Is this a past form?*",
        "It is **short**, and its words are simpler than the target word.",
        "The answer is **short**: yes, no, or one or two words.",
        "It does **not** repeat the sentence, so the learner cannot answer by echoing it.",
        "It asks about **the situation**: time, duration, who, how sure, how strong."
      ]},
      "Here are CCQs for sentences from earlier units.",
      {table:[["Sentence","CCQs (expected answers)"],["*I used to live in Nara.*","Did I live in Nara before? (Yes) Do I live there now? (No)"],["*I’ve lost my keys.*","Do I have my keys now? (No) Can I open the door now? (No)"],["*You should see a doctor.*","Is it a rule? (No) Is it a good idea? (Yes)"],["*You’d better go now.*","Is something bad likely if you stay? (Yes) Is it strong advice? (Yes)"],["*I’m having lunch.*","Is lunch finished? (No) Is it happening now? (Yes)"],["*If I were you, I’d wait.*","Am I you? (No) Is this my advice? (Yes)"]]},
      "Compare weak CCQs: *What does* used to *mean?* (it is hard to answer, and it tests the learner’s skill at explaining), *Is this the present perfect?* (it asks about a term, not meaning), and *Is it past?* (a yes or no that does not show the idea).",
      {ex:"CCQs also work for words. A learner mixes up *borrow* and *lend*. After a short explanation, give one sentence, *Mei borrowed Tomás’s pen*, and ask: “Whose pen is it?” (Tomás’s.) “Who used it?” (Mei.) “Will Mei give it back?” (Yes.) Then give the contrast, *Tomás lent Mei his pen*, and ask: “Who gave the pen?” (Tomás.) The same short questions about the situation work for both words. If the learner answers “Mei” to the last question, you know exactly which part to explain again.", label:"Worked example"}
    ]},
    {h:"Use them one-to-one, in conversation", body:[
      "This unit is about explaining English, not about running a class, so keep the method small. Use CCQs in a short chat after you explain something.",
      {ol:[
        "Explain with a rule of thumb, an example and a contrast (Lesson 2).",
        "Ask one to three CCQs about the example sentence or about a new situation.",
        "Listen to the answers. A wrong answer is useful: it shows what the learner thinks the form means.",
        "Ask the learner to make a sentence about their own life. This checks that the learner can use the form, not only understand it."
      ]},
      "Ask two or three questions, not one. A yes or no question gives a right answer by luck half of the time. Two or three questions in a row make a pattern.",
      {warn:"Avoid leading questions. *It is only advice, isn’t it?* tells the learner the answer. Also avoid questions that use a word that is harder than the one you are checking."},
      {h:"Compared with Japanese"},
      "Japanese often marks duration with the *-te iru* form. 奈良に三年住んでいる (*Nara ni san-nen sunde iru*) uses a present form with a length of time. A Japanese speaker may carry this over and say *I live in Nara for three years*. A CCQ finds the gap kindly: *Do I still live in Nara? Did I start three years ago?* Then the explanation, *I’ve lived in Nara for three years*, answers a question the learner now sees (Unit 7)."
    ]},
    {h:"Timelines", body:[
      "A [[hew-timeline|timeline]] is a line that stands for time, with a mark for *now*. It shows when a situation happens and whether it reaches the present. It is the simplest drawing in explaining tenses.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u12c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">I lived in Nara in 2020.</text><path class="d-ink" d="M20 80H320" stroke-width="2" marker-end="url(#e5u12c)"/><rect class="d-gold" x="60" y="62" width="70" height="36" rx="4" stroke-width="2"/><text class="s" x="95" y="85" text-anchor="middle">2020</text><path class="d-ink" d="M230 56V100" stroke-width="3"/><text x="230" y="120" text-anchor="middle">NOW</text><text class="s" x="95" y="120" text-anchor="middle">finished</text><text x="170" y="170" text-anchor="middle">I’ve lived in Nara since 2020.</text><path class="d-ink" d="M20 232H320" stroke-width="2" marker-end="url(#e5u12c)"/><rect class="d-gold" x="60" y="214" width="170" height="36" rx="4" stroke-width="2"/><text class="s" x="145" y="237" text-anchor="middle">since 2020, continuing</text><path class="d-ink" d="M230 208V252" stroke-width="3"/><text x="230" y="272" text-anchor="middle">NOW</text><text class="s" x="95" y="272" text-anchor="middle">starts then</text></svg>', alt:"Two timelines. The first shows a short box labeled 2020 well before the NOW mark, with the label finished, for I lived in Nara in 2020. The second shows a long box that starts at 2020 and reaches the NOW mark, for I’ve lived in Nara since 2020.", cap:"The same place and a different relation to now."},
      "The picture is a CCQ in disguise: *Does the box touch now?* A timeline is quick, and learners can copy it to their notes.",
      "Timelines also mislead. They show the **time of the situation**, not the verb form. *My train leaves at six* is a present form for a future time. *If I were you* has no time at all, so a timeline would be wrong. Do not draw a line for every form (Unit 7 explained that tense is not time).",
      "When a timeline would hide the point, use a CCQ instead."
    ]},
    {h:"Reading the answers", body:[
      "If the answers are right, ask for a sentence. If they are wrong, do not repeat your explanation. Try a new example, or draw a timeline. The wrong answer tells you what the learner understood.",
      {ex:"A learner hears *I used to live in Nara* and answers *yes* to “Do I live in Nara now?” The learner may think *used to* means *am used to*, as in *I’m used to the noise*, which is a different structure. Your next step is a contrast: *I used to live in Nara, but now I live in Sendai.* Then ask again.", label:"Worked example"},
      "CCQs also teach you what to explain next time. If many learners answer one question wrongly, the explanation needs a new example."
    ]}
   ],
   try:[
    M("e5u12-l3-x1", "Which is a good CCQ for *I’m going to see a doctor tomorrow* (a plan)?", 0, [
      ["“Have I already decided?”","Right. It asks about meaning (a plan, decided before speaking), and the answer is short."],
      ["“Is *going to* a future form?”","It asks about a grammar label, not the meaning."],
      ["“Do you understand *going to*?”","This invites a polite *yes* and shows nothing."],
      ["“What does *going to* mean?”","It is hard to answer, and it tests the learner’s skill in explaining."]
    ]),
    {id:"e5u12-l3-x2", type:"sort", q:"Is each question a good CCQ or not?", buckets:["Good CCQ","Not a good CCQ"], items:[
      {t:"“Do I live in Nara now?” (after *I used to live in Nara*)", b:0, why:"A short question about the situation."},
      {t:"“Do you understand?”", b:1, why:"It gets a polite yes."},
      {t:"“Is *used to* followed by the base form?”", b:1, why:"It asks about form."},
      {t:"“Is it a rule or advice?” (after *You should see a doctor*)", b:0, why:"A short question about the strength of the meaning."},
      {t:"“What is the difference between *should* and *must*?”", b:1, why:"It is hard to answer and invites an explanation."},
      {t:"“Is lunch finished?” (after *I’m having lunch*)", b:0, why:"A short yes or no question about the situation."},
      {t:"“Is the verb in the present perfect?”", b:1, why:"It uses a grammar term and asks about form."}
    ]},
    {id:"e5u12-l3-x3", type:"match", q:"Match each sentence with a CCQ that checks its meaning.", pairs:[
      ["*I’ve lost my keys.*","Can I open the door now?","The result is true now."],
      ["*You’d better go.*","Is something bad likely if you stay?","*Had better* is a warning."],
      ["*I used to walk to school.*","Do I walk to school now?","The habit has ended."],
      ["*She’s been waiting for an hour.*","Is she still waiting?","The waiting reaches now."]
    ]},
    M("e5u12-l3-x4", "A timeline shows a box that starts in 2020 and continues up to the NOW mark. Which sentence does it match?", 1, [
      ["*I lived in Nara in 2020.*","This is a finished period in 2020. The box would stop before NOW."],
      ["*I’ve lived in Nara since 2020.*","Right. The period starts in 2020 and reaches now."],
      ["*I will live in Nara next year.*","This puts the time in the future, so the box would be to the right of NOW."],
      ["*I had lived in Nara before 2020.*","This is a period that ended before 2020, so the box would be far to the left."]
    ]),
    {id:"e5u12-l3-x5", type:"spot", q:"A tutor wrote these questions to check *You should see a doctor*. Tap each question that is **weak** as a CCQ.", ask:"is weak", parts:[
      "“", {t:"Is it a rule or advice?", flag:false, why:"A short question about the meaning."}, " ", {t:"Do you understand *should*?", flag:true, why:"A polite yes will come back whatever the learner knows."}, " ", {t:"Is *should* a modal verb followed by the base form?", flag:true, why:"It asks about form and uses grammar terms."}, " ", {t:"Will I be in trouble if I don’t go?", flag:false, why:"A short question about the strength of *should*."}, " ", {t:"What is the difference between *should* and *must*?", flag:true, why:"It is hard to answer, and it invites a long reply."}, "”"
    ]},
    {id:"e5u12-l3-x6", type:"number", q:"A learner guesses the answers to three yes or no CCQs. What is the chance, as a percentage, that all three guesses are right?", answer:12.5, tol:0.1, unit:"%", why:"Each guess has a 1 in 2 chance. For three in a row: ½ × ½ × ½ = 1/8 = 12.5%. This is why two or three CCQs in a row are more reliable than one.", wrongs:[{v:50, tol:0.1, why:"This is the chance for one question. The question asks for three in a row."},{v:25, tol:0.1, why:"This is the chance for two questions in a row. There are three."}], hint2:"Multiply the chance for one question by itself three times."},
    {id:"e5u12-l3-x7", type:"explain", q:"A new tutor says: “I always ask *Do you understand?* and my learners say yes. But the next week they make the same error again. What should I do?” Explain what you would suggest.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say why the yes is not a good check and give a better check.", model:"People often say yes to be polite, or because they believe they understood something different. A learner can also repeat a sentence perfectly without knowing what it means. Try a short question about the meaning, such as *Do I play the piano now?* after *I used to play the piano*. Ask two or three of these, and then ask the learner to make a sentence about their own life.", points:["Explains why the yes is not reliable", "Suggests a short question about meaning", "Gives a concrete example of a CCQ", "Adds a production check or asks for more than one question"]},
    {id:"e5u12-l3-x8", type:"explain", q:"Write two or three concept-checking questions, with the expected answers, to check the meaning of *I used to play the piano*.", size:"3–5 lines", prompt:"My questions: …", hint:"Ask about now and about the past. Use short words.", model:"Did I play the piano in the past? (Yes.) Do I play the piano now? (No.) Did I play it often, or one time? (Often.) These questions check that *used to* talks about a past habit or state that has ended.", points:["Asks about the past", "Asks about now", "Uses short questions with short answers", "Does not ask about grammar terms"]}
   ],
   apply:{
    intro:"These tasks need paper or a note app. A friend who is willing to be the learner makes the second task better.",
    tasks:[
     {t:"Write CCQs for four forms", how:[
       "Choose four forms from the course, for example *had better*, the present perfect, *if I were*, *be going to*.",
       "For each, write one example sentence and two or three CCQs with expected answers.",
       "Check each CCQ against the five properties in this lesson: meaning, short, short answer, no echo, situation."
     ], write:"Form 1… example sentence… CCQs and answers… (four times)"},
     {t:"Try one with a friend", how:[
       "Explain one form to a friend in three sentences (rule, example, contrast).",
       "Ask your CCQs, and then ask the friend to say a sentence about their own life with the form.",
       "Write what the answers showed you. Change one CCQ if it was unclear."
     ], write:"What the friend answered… what I would change…"}
    ],
    proof:"Four forms with example sentences and CCQs, and a short note about how one check went."
   },
   read:[
    {book:"eling", where:"The Adult Language Learning chapter, section “Adults are not children”", note:"Its part on socioemotional differences explains why adults can feel embarrassed to make mistakes. That is one reason a polite “yes” is so common."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u12-l4", title:"Answering “why?”", minutes:60,
   hook:{q:"A learner asks: “Why *an hour* but *a university*? Both start with a vowel letter.” Which answer is best?", options:["“*An* goes before vowel letters. *University* is an exception, so memorize it.”","“We choose *a* or *an* by the first **sound** of the next word. *Hour* starts with a vowel sound, and *university* starts with a /j/ sound, like *y*.”","“It’s just usage.”","“*An* is only for formal words.”"], answer:1, reveal:"**The second answer.** *A* or *an* depends on the sound, not the letter. In *hour* the *h* is silent, so the first sound is a vowel. In *university* the *u* is pronounced /j/, a consonant sound. A real reason exists here, and it explains many cases at once, so “memorize the exception” is the weaker answer. This lesson looks at which why-questions have reasons, which have history, and which have only usage."},
   goals:[
     "Sort a why-question into a reason, a piece of history, a matter of usage or a difference between varieties",
     "Explain *a university / an hour* by sound, with examples and an IPA check",
     "Explain *I’m loving it* as a marked use of a stative verb",
     "Explain *Do you have / Have you got* as a difference of variety and register",
     "Check a dictionary or a corpus in front of the learner, and say “I’ll check” without embarrassment"
   ],
   learn:[
    {h:"Four kinds of why", body:[
      {lead:"Learners ask “why?” all the time. The honest answer depends on what kind of question it is."},
      {table:[["Kind of answer","What you say","Example"],["A reason or pattern","There is a rule or process that explains it","*A university, an hour*: the sound decides. *Walked* ends in /t/ because of voicing."],["History","The form comes from the past, and the reason is no longer visible","*Knight* has a *k* because the letter was once pronounced. *Oxen* keeps an old plural ending."],["Usage","Speakers say it this way and no rule predicts it","*In the morning* but *at night*; *make a decision*."],["Variety","Different groups of speakers choose differently","*Do you have* and *Have you got*; US *in the hospital* and UK *in hospital*."]]},
      "Say which kind of answer you are giving. Learners can then decide how much effort to spend: a reason is worth understanding, usage is worth memorizing, and a variety difference is worth choosing once and noticing in others.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-sage" x="14" y="8" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Reason or pattern</text><text class="s" x="170" y="54" text-anchor="middle">a university, an hour</text><text class="s" x="170" y="70" text-anchor="middle">Understand it, then use it</text><rect class="d-gold" x="14" y="86" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="110" text-anchor="middle">History</text><text class="s" x="170" y="132" text-anchor="middle">knight, oxen</text><text class="s" x="170" y="148" text-anchor="middle">Interesting, and it does not predict the next word</text><rect class="d-lup" x="14" y="164" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="188" text-anchor="middle">Usage</text><text class="s" x="170" y="210" text-anchor="middle">in the morning, at night</text><text class="s" x="170" y="226" text-anchor="middle">Learn the chunk, and say so</text><rect class="d-soft" x="14" y="242" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="266" text-anchor="middle">Variety</text><text class="s" x="170" y="288" text-anchor="middle">Do you have / Have you got</text><text class="s" x="170" y="304" text-anchor="middle">Both are English. Choose, and notice</text></svg>', alt:"Four stacked boxes. Reason or pattern: a university, an hour; understand it, then use it. History: knight, oxen; interesting, and it does not predict the next word. Usage: in the morning, at night; learn the chunk and say so. Variety: Do you have, Have you got; both are English, choose and notice.", cap:"Four kinds of answer to a why-question."},
      "Sometimes a full reason exists but is too long for the moment. Then say: “There is a reason, and the short version is…”. You can give the long version later."
    ]},
    {h:"Case 1: a university, an hour", body:[
      "The choice between *a* and *an* follows the first **sound** of the next word, not the first letter. *A* goes before a consonant sound. *An* goes before a vowel sound.",
      {table:[["Word","First sound","Article","Why"],["*university*","/j/ (GA /ˌjunəˈvɝsəti/, SSBE /ˌjuːnɪˈvɜːsəti/)","a university","The letter *u* sounds like *y*, a consonant sound."],["*hour*","vowel (GA /aʊr/, SSBE /aʊə/)","an hour","The *h* is silent."],["*honest*","vowel","an honest person","The *h* is silent."],["*European*","/j/","a European city","The *eu* sounds like *y*."],["*one-time*","/w/","a one-time offer","*One* starts with /w/."],["*MBA*","vowel (*em*)","an MBA","A letter name: the first sound is *em*."],["*hotel*","/h/","a hotel","The *h* is pronounced."]]},
      "Why does English do this? *A* and *an* come from the Old English word *ān*, which also became *one*. In Middle English the *n* was lost before consonant sounds. It stayed before vowel sounds, where it keeps two vowel sounds apart. So this is both a reason (sound) and a bit of history.",
      "Some cases vary. The word *herb* has a silent *h* in much American speech, so many Americans say *an herb*, and British speakers pronounce the *h* and say *a herb*. Some writers use *an* before *historic* and *hotel*, but *a historic* and *a hotel* are the usual choice today. When a case varies, say that it varies and give the main choice.",
      "The short explanation that works: **“Use *a* or *an* by the first sound of the next word. *A university*, *an hour*.”** Learners who think in letters can hear the difference if they say the word out loud."
    ]},
    {h:"Case 2: I’m loving it", body:[
      "Unit 7 explained that verbs of state, such as *know*, *own* and *love*, usually do not take the progressive. We say *I love this song*, not *I’m loving this song*. But native speakers do say *I’m loving this show*. Is that wrong?",
      "No. The stative-verb pattern is a tendency, not a law. A [[hew-marked-use|marked use]] is a less usual choice that carries extra meaning. The progressive *I’m loving it* adds the idea that the feeling is **new, temporary or still developing**, and it sounds informal and lively. *I’m really liking this new city* works the same way.",
      "The McDonald’s slogan *i’m lovin’ it*, used since 2003, uses this pattern to sound fresh and fun. Advertisers may choose it because it is a little unexpected, and that gets attention. This is also why you should not copy it into a formal essay.",
      {table:[["Sentence","Meaning","Comment"],["*I love this song.*","A general, stable feeling","The usual form"],["*I’m loving this song.*","A feeling that is strong now, perhaps new","Informal and expressive"],["*I’m knowing the answer.*","Not used","*Know* does not take the progressive in this sense"]]},
      "The short explanation: **“Verbs of state usually don’t take *-ing*. But in informal speech, *love* and *like* can, to say that the feeling is new or in progress right now. You can understand it, and you do not need to use it.”**"
    ]},
    {h:"Case 3: Do you have, Have you got", body:[
      "Both questions ask about possession. The difference is variety and register.",
      {table:[["Form","Typical use","Register"],["*Do you have a pen?*","The usual question in American English. Also used in British English.","Neutral"],["*Have you got a pen?*","The usual question in British English. Also heard in American English, but less often in questions.","More informal"],["*I’ve got a cold.*","Common in both varieties.","Informal"],["*I don’t have time.* / *I haven’t got time.*","The first is the usual American form. The second is more British.","Neutral / more informal"]]},
      "There are two limits. First, *have got* is used for possession and similar states, not for actions. Say *I have a shower every morning*. *I’ve got a shower* would mean that you own one. Second, *have got* is informal, so formal writing prefers *have*.",
      "For a learner, the short explanation is: **“Both are fine. *Do you have…?* works in the US and the UK and is the neutral choice. *Have you got…?* is common in British English and sounds informal. You will hear both.”** Do not say that one is correct and the other wrong."
    ]},
    {h:"Checking live, and saying “I’ll check”", body:[
      "Experts do not know everything. A teacher who says “I’m not sure, let me check” teaches the learner a habit that lasts: look at the evidence.",
      {ol:[
        "Say what you do know, and what you are not sure about.",
        "Open a learner dictionary: the Cambridge Dictionary, the Oxford Learner’s Dictionaries or Merriam-Webster. Look at the labels (*informal*, *US*, *UK*), the example sentences and the usage notes.",
        "Open a corpus: the Corpus of Contemporary American English (COCA) at english-corpora.org is free with registration, and the same site has corpora of British English. Search the phrase, and read ten lines.",
        "Look at who uses it: spoken or academic, fiction or news. Do not trust the count alone.",
        "Report back in short form: rule of thumb, example, note on register."
      ]},
      {ex:"A learner asks if *a historic* or *an historic* is right. You say: “I think *a historic* is the usual form today, but I’m not sure about *an*. Let me check.” You search COCA for *a historic* and *an historic* and read the lines. Suppose that *a historic* is much more common, and *an historic* appears mostly in formal writing. Then you report exactly that. The answer is honest, and it shows the learner the method.", label:"Worked example"},
      {tip:"Useful phrases: “I’m not sure, so let’s check.” “My guess is…, but let me confirm.” “Dictionaries say…” “In this corpus, the usual form is…”"}
    ]}
   ],
   try:[
    {id:"e5u12-l4-x1", type:"ipa", q:"Transcribe the word *hour* in General American. Then think: does it start with a vowel sound or a consonant sound?", answer:["aʊr","aʊɚ","aʊər"], stress:false, why:"*Hour* begins with the vowel sound /aʊ/ because the *h* is silent. That is why we say *an hour*.", wrongs:[{v:"haʊr", why:"The *h* is not pronounced in *hour*. Compare *how*, which does start with /h/."}]},
    {id:"e5u12-l4-x2", type:"sort", q:"Does each word take *a* or *an*?", buckets:["a","an"], items:[
      {t:"university", b:0, why:"It starts with /j/, a consonant sound."},
      {t:"hour", b:1, why:"The *h* is silent, so it starts with a vowel sound."},
      {t:"honest", b:1, why:"The *h* is silent."},
      {t:"European", b:0, why:"It starts with /j/."},
      {t:"MBA", b:1, why:"The first sound is the letter name *em*, a vowel sound."},
      {t:"unit", b:0, why:"It starts with /j/."},
      {t:"umbrella", b:1, why:"It starts with a vowel sound /ʌ/."},
      {t:"hotel", b:0, why:"The *h* is pronounced: /h/ is a consonant sound."}
    ]},
    M("e5u12-l4-x3", "Which statement about *I’m loving it* is accurate?", 1, [
      ["It is an error, because *love* is a stative verb and never takes the progressive.","The stative pattern is a tendency. *Love* can take the progressive in informal speech."],
      ["It is a marked use: informal, with the added idea of a new or in-progress feeling. It is fine in speech and rare in formal writing.","Right. The extra meaning is the reason the speaker chooses it."],
      ["It is only used in British English.","It is used by speakers of many varieties of English."],
      ["It is only used in advertisements.","Speakers also say it in ordinary conversation, for example *I’m loving this weather*."]
    ]),
    M("e5u12-l4-x4", "A learner asks: “My British teacher says *Have you got a pen?* and my American friend says *Do you have a pen?* Who is right?” Which answer is best?", 2, [
      ["The British teacher, because *have got* is traditional.","Both are good English. Neither is the only correct form."],
      ["The American friend, because *have got* is a mistake.","*Have got* is normal in British English and informal in American English."],
      ["Both. *Do you have…?* is the usual American form and is also used in Britain, and *Have you got…?* is common in British English and sounds more informal.","Right. It names both varieties and the difference in register."],
      ["Neither. You should use *own* in formal English.","*Own* is about ownership. *Do you own a pen?* is not how people ask to use one."]
    ]),
    {id:"e5u12-l4-x5", type:"match", q:"Match each why-question with the kind of answer that fits best.", pairs:[
      ["Why do we say *a university*?","Reason: the sound at the start","The first sound is /j/, a consonant."],
      ["Why is the plural of *ox* *oxen*?","History: an old plural ending survived","It is a relic of an older plural pattern."],
      ["Why *at night* but *in the morning*?","Usage: learn them as chunks","No rule predicts it."],
      ["Why *Do you have* and *Have you got*?","Variety: both are used, with different frequency and register","US and UK habits differ."]
    ]},
    {id:"e5u12-l4-x6", type:"order", q:"A learner asks a question and you are not sure of the answer. Put the steps in order.", items:[
      {t:"Say what you are sure about.", why:"This keeps the learner’s trust."},
      {t:"Say that you are not sure and will check.", why:"Honesty is better than an invented reason."},
      {t:"Look in a learner dictionary for labels, examples and notes.", why:"A dictionary is quick and shows the label."},
      {t:"Search a corpus and read about ten lines.", why:"The corpus shows real use and register."},
      {t:"Report back with a rule of thumb, an example and a note on register.", why:"The answer is short and checked."}
    ]},
    {id:"e5u12-l4-x7", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, says: “In practice I said *a hour*, and my partner smiled. My textbook says *a* before consonants, and *h* is a consonant. What did I do wrong?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say that sound decides, not letters, and be kind to her.", model:"Your textbook is right about consonants, but it means consonant sounds, not letters. In *hour*, the *h* is silent, so the word starts with a vowel sound, and we say *an hour*. A quick check is to say the word and listen to the first sound. Many learners do the same, because textbooks often say *letters*, so you can feel good that you noticed it.", points:["Says that sound decides, not letters", "Explains that the h in hour is silent", "Gives a quick method such as listening to the first sound", "Is kind and reassures her"]},
    {id:"e5u12-l4-x8", type:"explain", q:"A learner says: “Why can people say *I’m loving it* when my grammar book says *love* is a stative verb?” Explain what you would tell him.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what the book is right about, what the exception adds, and when to use it.", model:"Your book is right that verbs of state usually do not take *-ing*, and *I love it* is the normal form. But this is a tendency. In informal speech, *I’m loving it* adds the idea that the feeling is new or happening right now. It is not a mistake, but it sounds informal, so you can understand it and you do not need to use it in formal writing.", points:["Agrees with the book as a tendency", "Says the progressive adds a new or in-progress feeling", "Says it is informal", "Advises on when to use it"]}
   ],
   apply:{
    intro:"These tasks use free tools. The Cambridge Dictionary and the Oxford Learner’s Dictionaries need no account. COCA at english-corpora.org is free with a registered account, and daily search limits apply.",
    tasks:[
     {t:"Corpus check: do you have or have you got", how:[
       "Open COCA and search *do you have a*. Read ten lines from different genres (spoken, fiction, academic).",
       "Search *have you got a* and read ten lines. Where does it appear? Does the speaker sound informal?",
       "Write two sentences: what you found about the two forms, and how sure you can be from ten lines."
     ], write:"Do you have a… Have you got a… What I found…"},
     {t:"Dictionary check: a or an", how:[
       "Open a learner dictionary. Look up *herb, hour, university, honest, historic* and listen to the US and UK pronunciations if the dictionary has audio.",
       "For each word, write whether it starts with a vowel sound or a consonant sound, and the article that goes with it.",
       "Write one word where US and UK speakers may choose differently, and say why."
     ], write:"herb… hour… university… honest… historic… the word that varies…"},
     {t:"Write three honest answers", how:[
       "Choose three why-questions, one for each: reason, history, usage.",
       "For each, write a short answer in three sentences that says which kind of answer it is.",
       "Add one sentence that says how you would check, in case you are unsure."
     ], write:"Question 1… kind… answer… how to check… (three times)"}
    ],
    proof:"A short report of a corpus check with two sentences about what you found, a dictionary table for five words, and three honest answers."
   },
   read:[
    {book:"eling", where:"The Language Variation and Change chapter, section “Language varies”", note:"Use it for the idea that variation is normal. It helps with variety questions such as US and UK differences."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u12-l5", title:"Putting it together: a course review", minutes:60,
   hook:{q:"Hana writes: “I have visited Nara last year.” Which short explanation is both true and usable?", options:["“Use the past simple with a finished time such as *last year*: *I visited Nara last year*.”","“English has no past tense.”","“The present perfect is only for the recent past.”","“It is just usage.”"], answer:0, reveal:"**The first answer.** It gives a rule of thumb and a corrected sentence. The present perfect connects a time period to the present, so a finished time such as *last year* needs the past simple (Unit 7). The second is false, because English does mark the past in the verb (Unit 7: it is the future that has no tense ending of its own). The third is a false rule, and the fourth hides a real pattern. This lesson puts the whole course to work."},
   goals:[
     "Follow one routine from the learner’s sentence to an honest, short answer",
     "Recall the main idea of each unit in the course, with a typical learner question",
     "Answer mixed learner questions with a rule of thumb, an example and a contrast, and say which kind of why you are giving",
     "Plan how to keep learning, and know where to go next in the course"
   ],
   learn:[
    {h:"The explainer’s routine", body:[
      {lead:"Good explaining is a small routine that you can repeat for any question."},
      {ol:[
        "**Listen.** What did the learner mean? What sentence did they want to say?",
        "**Diagnose.** Is it a slip or an error? If it is an error, is it transfer, overgeneralization or a late-learned feature? (Lesson 1)",
        "**Choose the kind of answer.** Is it a reason, history, usage or a difference between varieties? If you are not sure, check. (Lesson 4)",
        "**Explain briefly.** One rule of thumb, one example, one contrast. (Lesson 2)",
        "**Check.** Ask one to three questions about the meaning, and ask for a sentence. (Lesson 3)",
        "**Follow up.** Write down what you did not know, and look it up later."
      ]},
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e5u12d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="14" y="6" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="26" text-anchor="middle">1 Listen</text><text class="s" x="170" y="43" text-anchor="middle">What did they mean?</text><path class="d-ink" d="M170 52V60" stroke-width="2" marker-end="url(#e5u12d)"/><rect class="d-sage" x="14" y="62" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="82" text-anchor="middle">2 Diagnose</text><text class="s" x="170" y="99" text-anchor="middle">Slip, transfer, overgeneralization, sequence</text><path class="d-ink" d="M170 108V116" stroke-width="2" marker-end="url(#e5u12d)"/><rect class="d-gold" x="14" y="118" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="138" text-anchor="middle">3 Choose the kind of answer</text><text class="s" x="170" y="155" text-anchor="middle">Reason, history, usage, variety</text><path class="d-ink" d="M170 164V172" stroke-width="2" marker-end="url(#e5u12d)"/><rect class="d-gold" x="14" y="174" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="194" text-anchor="middle">4 Explain briefly</text><text class="s" x="170" y="211" text-anchor="middle">Rule of thumb, example, contrast</text><path class="d-ink" d="M170 220V228" stroke-width="2" marker-end="url(#e5u12d)"/><rect class="d-lup" x="14" y="230" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="250" text-anchor="middle">5 Check</text><text class="s" x="170" y="267" text-anchor="middle">CCQs, then the learner’s own sentence</text><path class="d-ink" d="M170 276V284" stroke-width="2" marker-end="url(#e5u12d)"/><rect class="d-lup" x="14" y="286" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="306" text-anchor="middle">6 Follow up</text><text class="s" x="170" y="323" text-anchor="middle">Look up what you did not know</text></svg>', alt:"Six boxes in a vertical chain: 1 Listen (what did they mean?), 2 Diagnose (slip, transfer, overgeneralization, sequence), 3 Choose the kind of answer (reason, history, usage, variety), 4 Explain briefly (rule of thumb, example, contrast), 5 Check (CCQs, then the learner’s own sentence), 6 Follow up (look up what you did not know).", cap:"The explainer’s routine in six steps."}
    ]},
    {h:"The course in one page", body:[
      "Each unit gave you one big idea. If a learner’s question seems hard, find the unit that it belongs to.",
      {table:[["Unit","The idea to remember","A typical question"],["1 Rules, usage and myths","Grammar describes how people use English. Check evidence, not slogans.","“Is *ain’t* a word?”"],["2 Sounds","Letters are not sounds. Use IPA and minimal pairs.","“Why do *ship* and *sheep* sound the same to me?”"],["3 Stress and rhythm","Stress and weak forms make English sound like English.","“Why does *record* sound different as a noun?”"],["4 Word classes and word building","Test words by what they do, not by meaning.","“Is *destruction* a noun?”"],["5 Vocabulary in use","Words come in chunks, and register matters.","“Why *make a mistake* and not *do*?”"],["6 How a sentence is built","Phrases have heads, and English needs a subject.","“Why must I say *It’s cold*?”"],["7 Tense and aspect","Time is not tense. Aspect shows how a situation is seen.","“Why not *I have visited Nara last year*?”"],["8 Modality, conditionals and voice","Modals show strength and politeness. The passive hides or shows the doer.","“Is *You’d better* rude?”"],["9 Nouns, articles, determiners","Count or noncount is a grammar fact. Articles depend on what the listener knows.","“Why *information* and not *informations*?”"],["10 Joining ideas","Link ideas with clear structure and cohesion.","“Is a comma splice always wrong?”"],["11 Spelling, punctuation and style","Spelling carries history. Punctuation marks structure.","“Why is *knight* spelled that way?”"],["12 Explaining English","Diagnose, explain briefly, check, and be honest.","“Why?”"]]}
    ]},
    {h:"Worked questions", body:[
      "Toby, a master’s student in Japanese linguistics who taught English in the Japanese countryside for two years, answers five questions with the routine. Each answer names the kind of why.",
      {table:[["Question","Kind of why","Toby’s short answer"],["“Why is it *The news is good* and not *are*?”","Pattern (grammar)","*News* ends in *-s* but is a noncount noun, so it takes a singular verb. *Some news, a piece of news.* (Unit 9)"],["“Is *You’d better stop* rude?”","Pattern (meaning and politeness)","It can sound like a warning or a threat. For friendly advice, *you should* or *I think you should* is softer. (Unit 8)"],["“Why can’t I say *I have visited Nara last year*?”","Reason","The present perfect connects a time to now. *Last year* is a finished time, so use *I visited*. (Unit 7)"],["“My teacher wrote *comma splice*. Is that always wrong?”","Usage (a writing convention)","In formal writing, join two full sentences with a period, a semicolon or a joining word. Writers of fiction sometimes break the convention on purpose. (Unit 10)"],["“Why is it *colour* in my book and *color* in this app?”","Variety and history","British and American spelling sets differ. Choose one for each text and stay with it. (Units 1 and 11)"]]},
      "Look at what Toby does not do. He does not invent reasons, he does not list every exception, and he gives a usable sentence each time. He also names the unit, because the next step for a curious learner is to read more.",
      {ex:"Kaito, a first-year undergraduate in information engineering, writes: “I am interesting in programming.” **Listen:** he means that he likes programming. **Diagnose:** he writes it this way in several texts, so it is a pattern, not a slip. Learners with many different first languages mix up these adjectives, so transfer is not the best guess. **Choose the kind of answer:** there is a clear pattern. **Explain briefly:** “An *-ed* adjective says how a person feels. An *-ing* adjective describes the thing that causes the feeling. So *I’m interested in programming*, and *Programming is interesting*.” **Check:** “Who feels the interest, you or programming?” (Me.) “Is programming boring for you?” (No.) Then Kaito writes a new sentence about his own life. **Follow up:** note that *bored/boring* and *tired/tiring* work the same way, for the next question.", label:"Worked example"}
    ]},
    {h:"Habits that keep you improving", body:[
      "A course ends, but explaining improves with practice. These habits take little time.",
      {list:[
        "**Keep a question notebook.** Write each why-question you could not answer well, with a short answer after you check.",
        "**Use evidence.** Check a learner dictionary and a corpus before you say “always” or “never”.",
        "**Explain aloud.** Say a three-sentence explanation to a friend. If you stumble, shorten it.",
        "**Listen to more kinds of English.** The English of other regions teaches you about variety.",
        "**Stay kind.** Errors show learning, and your tone teaches as much as your words."
      ]},
      "If you speak more than one language, that knowledge is a strength for explaining. You know from the inside how a rule of another language can feel."
    ]},
    {h:"Course wrap-up", body:[
      {lead:"You started with the idea that grammar describes and does not make laws. You end with a way to answer almost any learner’s question honestly."},
      "In twelve units you met the sounds of English, its words and its grammar, then spelling and style, and finally the skill of explaining. You do not need to remember every term. You need to remember how to find out: ask what the learner meant, look for a pattern, check the evidence and say what you do not know.",
      "If you want to go further, the **Academic Language** elective is already on the site. It helps you read, write and speak English for study, and its Unit 4 gives a short introduction to World Englishes and English as a lingua franca. A full **World Englishes** elective is planned (coming). It is the next step after the US and UK comparisons in this course.",
      "Thank you for working through this course. Whether you explain English to a class, a friend or yourself, be patient and curious. Learners remember kindness, and a short honest answer helps them more than a long one."
    ]}
   ],
   try:[
    {id:"e5u12-l5-x1", type:"sort", q:"Which kind of why-answer fits each question best?", buckets:["Reason or pattern","History","Usage (learn the chunk)","Variety (US/UK)"], items:[
      {t:"Why *a university* and *an hour*?", b:0, why:"The first sound decides."},
      {t:"Why does *knight* start with *k*?", b:1, why:"The *k* was pronounced in Middle English, and the spelling stayed."},
      {t:"Why *make a decision* and not *do a decision*?", b:2, why:"No rule predicts it. Learn the chunk."},
      {t:"Why *in the hospital* in the US and *in hospital* in the UK?", b:3, why:"A difference between varieties (Unit 9)."},
      {t:"Why *in the morning* but *at night*?", b:2, why:"Fixed phrases. Learn them as chunks."},
      {t:"Why *an herb* for many Americans and *a herb* for many British speakers?", b:3, why:"The *h* is pronounced in British speech and often silent in American speech."},
      {t:"Why is *-ed* in *walked* pronounced /t/?", b:0, why:"A sound rule: *-ed* follows the voicing of the last consonant (Unit 2)."},
      {t:"Why is the plural of *ox* *oxen*?", b:1, why:"An old plural ending survived."}
    ]},
    {id:"e5u12-l5-x2", type:"match", q:"Match each learner question with the best short answer.", pairs:[
      ["“Is *advice* countable?”","No. Say *some advice* or *a piece of advice*.","Unit 9: a noncount noun."],
      ["“Is *You’d better go* a rude thing to say?”","It can sound like a warning. For friendly advice, *you should* is softer.","Unit 8: strength and politeness."],
      ["“Why do I hear *ship* and *sheep* the same?”","English separates /ɪ/ and /i/ by vowel quality and length. Practice with minimal pairs.","Unit 2: a hard contrast for many learners."],
      ["“Why do I say *I have visited Nara last year* and get corrected?”","*Last year* is a finished time, so use the past simple: *I visited Nara last year*.","Unit 7: the present perfect reaches now."]
    ]},
    M("e5u12-l5-x3", "Hana, a learner from Japan, always writes *She don’t like coffee*, but she gets *-s* right on grammar tests. What is the best explanation to give?", 2, [
      ["She is careless and should concentrate more.","This ignores the pattern. A learner who passes the test knows the rule."],
      ["Her first language marks the third person on the verb, so this is transfer.","Japanese verbs do not change for the third person. This does not fit."],
      ["Third-person *-s* is a late-learned feature, so it often goes missing in free writing and speech even when the learner knows the rule. Short reminders and patient practice help.","Right. It is a developmental pattern, and kind, short reminders suit it."],
      ["It is overgeneralization of the *-ed* rule.","The *-ed* rule is about the past tense. This error is about *-s* and the negative."]
    ]),
    {id:"e5u12-l5-x4", type:"spot", q:"A study sheet from the course has some statements. Tap each statement that is **false or misleading**.", ask:"false or misleading", parts:[
      {t:"English has only two tenses marked on the verb: present and past.", flag:false, why:"This is the descriptive view (Unit 7). The future is expressed with other forms."}, " ", {t:"A noun is a person, place or thing.", flag:true, why:"*Destruction* and *Tuesday* are nouns and neither is a person, place or thing (Unit 4)."}, " ", {t:"Singular *they* is a new invention.", flag:true, why:"It has been used for centuries, since at least the 1300s (Unit 1)."}, " ", {t:"Use *an* before vowel letters.", flag:true, why:"Sound decides: *a university, an hour*."}, " ", {t:"*Information* is noncount, so we say *a piece of information*.", flag:false, why:"Correct (Unit 9)."}, " ", {t:"*I’m loving it* is informal and adds the idea of a new or developing feeling.", flag:false, why:"Correct (Lesson 4)."}
    ]},
    {id:"e5u12-l5-x5", type:"order", q:"Put the explainer’s routine in order.", items:[
      {t:"Listen: what did the learner mean?", why:"Everything starts from the learner’s sentence."},
      {t:"Diagnose: slip, transfer, overgeneralization or sequence?", why:"The cause decides the help."},
      {t:"Choose the kind of answer: reason, history, usage or variety.", why:"This tells you whether to explain, tell a story or give a chunk."},
      {t:"Explain briefly: rule of thumb, example, contrast.", why:"Three sentences are usually enough."},
      {t:"Check with questions about meaning and a sentence from the learner.", why:"This tests whether the explanation worked."},
      {t:"Follow up: look up what you did not know.", why:"This is how your own knowledge grows."}
    ]},
    M("e5u12-l5-x6", "A learner says: “I make so many errors. I am bad at English.” Which reply fits what you learned in this unit?", 1, [
      ["“You should be more careful.”","This blames the learner and ignores that errors have causes."],
      ["“Errors are part of learning. Many of yours show rules that you have found, and we can work on one pattern at a time.”","Right. This is kind, it is true (interlanguage) and it gives a next step."],
      ["“Don’t worry. Native speakers make the same errors.”","Native speakers make slips. They do not make the same errors that learners make, so this is not accurate."],
      ["“Stop speaking until you are sure.”","Practice is how interlanguage grows. This advice would slow learning."]
    ]),
    {id:"e5u12-l5-x7", type:"explain", q:"Hana, a learner from Japan, writes: “Yesterday I go to the museum. Is very big.” and asks: “Please tell me everything that is wrong.” What do you do?", size:"3–5 sentences", prompt:"I would say: …", hint:"Choose one or two patterns, name the cause kindly, give a short explanation and a way to check.", model:"First I would say what she did well: the message is clear, and she used *very big* correctly. Then I would choose two patterns and not a long list. *Yesterday I go* shows that the past form is missing. Japanese marks the past too, so transfer is unlikely. It may be a slip, or a form that she does not use yet in free writing, so I would check her other sentences. *Is very big* needs a subject: *It is very big*, because English needs one in every sentence. Then I would ask her to write one more sentence about the museum.", points:["Praises what works and does not list everything", "Chooses one or two patterns", "Names the cause as a guess, kindly", "Gives a short explanation and asks for a new sentence"]},
    {id:"e5u12-l5-x8", type:"explain", q:"A friend says: “English has no logic. Nothing in it has a reason.” Write a short, honest reply.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what is true in the view, and then show the kinds of why-answers.", model:"Some of it is true: many things in English are usage, and no rule predicts them, such as *in the morning* but *at night*. But many things have reasons. We say *a university* and *an hour* because of the first sound, and *knight* has a *k* because of history. Some things differ between varieties, such as *Do you have* and *Have you got*. It helps to ask what kind of why a question is, and to learn the chunks that have no reason.", points:["Admits that much is usage", "Gives a case with a reason, for example a/an by sound", "Mentions history or variety", "Suggests learning chunks or checking sources"]}
   ],
   apply:{
    intro:"These tasks bring the course together. Use a learner’s dictionary such as the Cambridge Dictionary or the Oxford Learner’s Dictionaries, and COCA at english-corpora.org if you have an account.",
    tasks:[
     {t:"Answer six questions with the routine", how:[
       "Choose six learner questions from any units, or from your own experience as a learner or teacher.",
       "For each, write the cause or kind of why, a three-sentence explanation (rule, example, contrast) and one concept-checking question.",
       "Check each answer against the table in this lesson. Add the unit number."
     ], write:"Question 1… kind… explanation… CCQ… unit… (six times)"},
     {t:"Start your question notebook", how:[
       "Open a note app or a notebook. Write the date and three why-questions that you could not answer well in the past.",
       "For each, check a dictionary or corpus and write a short answer and the source.",
       "Write which kind of why each one is: reason, history, usage or variety."
     ], write:"Question… what I found… source… kind of why… (three times)"},
     {t:"Explain to a person", how:[
       "Choose one idea from the course. Explain it to a friend or colleague in three or four sentences.",
       "Ask one concept-checking question and ask for a sentence of their own.",
       "Write one thing that went well and one thing that you would change."
     ], write:"The idea… what the person said… what I would change…"}
    ],
    proof:"Six answers in the routine format, a notebook page with three checked questions, and a short note on one real explanation."
   },
   read:[
    {book:"eling", where:"The Language Variation and Change chapter, section “Language varies”", note:"A good bridge to the World Englishes elective (coming)."}
   ]
  }
  ],
  checkpoint:["e5u12-q03","e5u12-q08","e5u12-q12","e5u12-q17","e5u12-q21","e5u12-q26","e5u12-q30","e5u12-q35","e5u12-q38","e5u12-q41","e5u12-q43","e5u12-q45"],
  cpBank:[
   Q("e5u12-cp01","e5u12-l1",1,"Which learner behavior is the clearest sign of a slip rather than an error?",2,[
     ["The same form appears in every text.","A repeated form shows a pattern, which is an error in Corder’s sense."],
     ["The learner cannot say why the form is right.","Not knowing why does not make it a slip. Many errors have no explanation in the learner’s mind."],
     ["The learner notices and fixes it when you point to it.","Right. A slip can usually be fixed at once."],
     ["The form matches the first language.","A match with the first language points to transfer."]]),
   Q("e5u12-cp02","e5u12-l1",2,"A learner writes *I have two sister* and *three book* in one text, and correct plurals after *a lot of*. What is the best working guess?",1,[
     ["A slip, because the learner is in a hurry.","A repeated pattern with number words is not a one-time slip."],
     ["Transfer from a first language that does not mark plural on nouns, after a number word.","Right. The pattern is systematic, and *a lot of* shows that the learner knows the form."],
     ["Overgeneralization of the *-ed* rule.","This error is about plurals, not the past tense."],
     ["The learner has never met plurals.","The correct plurals after *a lot of* show the learner knows them."]]),
   Q("e5u12-cp03","e5u12-l2",1,"What does a good short explanation contain?",3,[
     ["The full history of the form and all exceptions.","This is too long for a short explanation."],
     ["A grammar term and its definition.","A term alone does not help the learner use the form."],
     ["Only an example.","An example without a rule does not show how to choose."],
     ["A rule of thumb, an example and a contrast.","Right. The three parts give a pattern, a model and an edge."]]),
   Q("e5u12-cp04","e5u12-l2",3,"A learner says: “My last teacher told me that *the* is for important things.” What is the best reply?",0,[
     ["“That was a useful start. The test is whether the listener knows which one you mean. *A jacket* can be important and still take *a*.”","Right. It respects the earlier teacher, gives the better rule and gives an example."],
     ["“That is wrong. Forget it.”","It is true that the rule is wrong, but this reply is unkind and gives no better rule."],
     ["“It is just usage.”","There is a clear pattern, so this withholds it."],
     ["“Yes, and *a* is for unimportant things.”","This repeats the false rule and adds a second one."]]),
   Q("e5u12-cp05","e5u12-l3",1,"Why is “Do you understand?” a weak check?",2,[
     ["It is rude in English.","It is not rude. It simply does not give reliable information."],
     ["It is a question about grammar.","It is not about grammar. It asks for a general feeling."],
     ["Learners often say yes for polite or other reasons, so the answer shows little.","Right. Ask about the meaning instead."],
     ["It has too many words.","The length is not the problem. The answer is."]]),
   Q("e5u12-cp06","e5u12-l3",2,"Which pair of CCQs best checks *I’ve lost my keys*?",1,[
     ["“Is it the present perfect? Is *lost* irregular?”","These ask about form and terms."],
     ["“Do I have my keys now? Can I open the door?”","Right. They ask about the situation now and have short answers."],
     ["“What does *lost* mean? Can you explain?”","They are hard to answer and test explaining skills."],
     ["“Do you understand? Is that clear?”","Learners say yes to these."]]),
   Q("e5u12-cp07","e5u12-l4",1,"Which phrase takes *an*?",0,[
     ["*an hour*","Right. The *h* is silent, so the first sound is a vowel."],
     ["*an university*","*University* starts with /j/, a consonant sound, so it takes *a*."],
     ["*an one-time offer*","*One* starts with /w/, a consonant sound."],
     ["*an hotel*","The *h* in *hotel* is pronounced, so *a hotel* is the usual form."]]),
   Q("e5u12-cp08","e5u12-l4",3,"A learner asks why English says *I’m loving this show*, when a stative verb should not take *-ing*. Which reply is the most accurate?",2,[
     ["“It is a mistake that has become common. Avoid it.”","It is not a mistake. It is a recognized informal use."],
     ["“It is only used in advertisements.”","People use it in ordinary talk too."],
     ["“The stative pattern is a tendency. The progressive adds a new or in-progress feeling, and it is informal.”","Right. It names the exception and its meaning."],
     ["“*Love* is not a stative verb.”","*Love* is usually stative. The point is that the pattern has marked exceptions."]]),
   Q("e5u12-cp09","e5u12-l4",2,"Which source shows how often a phrase appears in real texts and speech?",1,[
     ["A thesaurus.","A thesaurus lists related words. It does not give frequency."],
     ["A corpus such as COCA.","Right. A corpus lets you search and read real examples."],
     ["A spelling checker.","It checks spelling, not usage."],
     ["An encyclopedia.","It gives facts about topics, not about how phrases are used."]]),
   Q("e5u12-cp10","e5u12-l5",1,"What is the first step in the explainer’s routine?",0,[
     ["Listen, and understand what the learner meant.","Right. You need the meaning before you can find the cause."],
     ["Give the rule of thumb.","This comes after you know the cause."],
     ["Ask a concept-checking question.","This comes after your explanation."],
     ["Look up the answer in a corpus.","This is for when you are not sure, later in the routine."]]),
   Q("e5u12-cp11","e5u12-l5",2,"Which kind of why-answer fits *Why is the *k* in *knight* there?*",2,[
     ["A usage answer: learn the chunk.","Spelling has a history, and it is not a chunk to learn."],
     ["A variety answer: US and UK differ.","Both varieties spell it the same way."],
     ["A history answer: the *k* was pronounced long ago and the spelling stayed.","Right. The history explains it, but does not predict other words."],
     ["A reason answer: a sound rule explains it.","There is no sound rule today. The spelling reflects older pronunciation."]]),
   Q("e5u12-cp12","e5u12-l5",2,"Why does the explainer’s routine end with a follow-up step?",1,[
     ["To make the learner repeat the answer.","The follow-up is for the explainer, not a drill."],
     ["To look up what you did not know, so your next answer is better.","Right. Experts keep learning, and the notebook turns a gap into knowledge."],
     ["To show that the explanation was long enough.","Length is not the aim. Short explanations are better."],
     ["To give the learner a test.","A test is not part of the routine."]])
  ],
  bank:[
   /* ---- Lesson 1: finding the cause ---- */
   Q("e5u12-q01","e5u12-l1",1,"What is a slip, in the sense of this lesson?",1,[
     ["A rule that the learner has built wrongly and uses every time.","That is an error in Corder’s sense."],
     ["A performance mistake in a form that the learner knows, for example from speed or tiredness.","Right. The learner can usually fix it."],
     ["A pattern from the learner’s first language.","That is transfer."],
     ["A feature that comes late in a learning order.","That is a developmental pattern."]]),
   Q("e5u12-q02","e5u12-l1",1,"Who wrote “The significance of learners’ errors”, and in which year?",2,[
     ["Larry Selinker, 1972","Selinker introduced the term *interlanguage* in 1972."],
     ["Noam Chomsky, 1957","Chomsky wrote *Syntactic Structures* in 1957, a different work."],
     ["S. Pit Corder, 1967","Right. This is the article that separates mistakes from errors."],
     ["No one: the distinction has no author.","The distinction is attributed to Corder’s 1967 article."]]),
   Q("e5u12-q03","e5u12-l1",1,"What is an interlanguage?",0,[
     ["A learner’s own developing system of the new language, with rules that change over time.","Right. It is a system, and it follows rules."],
     ["A language that mixes two others for trade.","That is a different idea (a pidgin)."],
     ["A list of the learner’s errors.","The errors are evidence of the system, not the system."],
     ["The first language of a learner.","The interlanguage is between the first language and the new one."]]),
   Q("e5u12-q04","e5u12-l1",2,"Mei writes *three childs*. What is the best guess about the cause?",1,[
     ["Transfer from a first language.","It could be, but the regular *-s* rule on an irregular noun fits better."],
     ["Overgeneralization of the regular plural rule.","Right. She knows the plural rule and uses it too widely."],
     ["A slip from tiredness.","It would need to be a one-time form that she fixes at once."],
     ["The learner has never seen the plural *children*.","This could be true, but the guess that fits best is the rule."]]),
   Q("e5u12-q05","e5u12-l1",2,"A learner from Japan writes *She is teacher.* What is the most likely cause?",3,[
     ["Overgeneralization of a rule about *be*.","There is no rule that is being applied too widely."],
     ["A slip from speed.","A repeated article omission points to a pattern."],
     ["A developmental sequence that has nothing to do with the first language.","Both may play a part, but the pattern fits the first language well."],
     ["Possible transfer, because Japanese has no articles.","Right. It is a good first guess, and you can test it on other sentences."]]),
   Q("e5u12-q06","e5u12-l1",2,"A learner says *I went to the the station* and fixes it at once. What is the best response?",0,[
     ["Say nothing, or nod. It was a slip and the learner fixed it.","Right. Extra teaching would add nothing."],
     ["Explain the rules for articles for five minutes.","The learner knows the article, so this is not helpful."],
     ["Write the sentence on the board as an error.","Treating a slip as an error is unkind and unneeded."],
     ["Tell the learner to speak more slowly in all situations.","This is general advice that does not match one small slip."]]),
   Q("e5u12-q07","e5u12-l1",3,"A learner leaves out third-person *-s* in conversation but uses it correctly in a grammar test. Which statement fits best?",2,[
     ["The learner does not know the rule.","The test shows that the learner knows it."],
     ["The learner is careless and should try harder.","The pattern is well known, and effort alone does not remove it."],
     ["The feature is a late-learned one, and knowing the rule does not make the form automatic in speech.","Right. Patience and short reminders help."],
     ["The error is overgeneralization.","The learner is not using a rule too widely. A form is missing."]]),
   Q("e5u12-q08","e5u12-l1",3,"Why is one wrong sentence not enough to name the cause of an error?",1,[
     ["Because all errors have the same cause.","Errors have different causes. That is the point of the lesson."],
     ["Because the same sentence can come from different causes, and you need to see a pattern.","Right. Check other sentences and ask the learner to fix it."],
     ["Because a sentence cannot be an error.","A sentence can contain an error, but one example cannot tell you the cause."],
     ["Because only a teacher can decide the cause.","You can make a working guess, and then test it."]]),
   Q("e5u12-q09","e5u12-l1",2,"Which feedback is both kind and useful?",1,[
     ["A list of ten corrections in red.","Ten at once are hard to use and can discourage the learner."],
     ["Praise for what works, then one pattern with a short explanation, then a new sentence to try.","Right. One pattern at a time is easier to use."],
     ["“You make the same mistake again and again.”","This blames the learner and gives no help."],
     ["No feedback, so that the learner stays confident.","The learner needs some information to improve."]]),
   /* ---- Lesson 2: short explanations ---- */
   Q("e5u12-q10","e5u12-l2",1,"What are the three parts of the short explanation in this lesson?",2,[
     ["A definition, a history and a list.","None of these is the three-part pattern."],
     ["A grammar term, an example and a quiz.","A term and a quiz are not part of the pattern."],
     ["A rule of thumb, an example and a contrast.","Right. This is the three-part pattern."],
     ["A story, a joke and a question.","These do not explain the pattern."]]),
   Q("e5u12-q11","e5u12-l2",1,"What is a rule of thumb?",0,[
     ["A short statement that is true in most cases and says so.","Right. It is useful and honest about limits."],
     ["A rule that is true in every case.","That is a law. Rules of thumb allow exceptions."],
     ["A rule that a dictionary publishes.","A dictionary may help, but the idea is about how general the statement is."],
     ["A false rule that teachers use.","False rules are a different problem. A rule of thumb is true often enough to help."]]),
   Q("e5u12-q12","e5u12-l2",2,"A learner asks: “*Some* is for positive sentences, but a waiter asked me *Would you like some coffee?* Why?” Which reply is best?",1,[
     ["“The waiter made a mistake.”","The waiter spoke normal English."],
     ["“Use *any* in negatives and most questions. Use *some* in offers and requests, such as *Would you like some coffee?*”","Right. It fixes the false rule with a better one and an example."],
     ["“It is just usage.”","There is a pattern, so this answer is incomplete."],
     ["“Always use *some*.”","This is another false rule: *any* is normal in negatives."]]),
   Q("e5u12-q13","e5u12-l2",2,"Why does “Use *the* when something is important” fail?",3,[
     ["Because important things never take articles.","Important things can take any article."],
     ["Because *the* is only for names.","*The* is not only for names."],
     ["Because *the* is only used in formal writing.","It is used in all registers."],
     ["Because the test is whether the listener can identify the noun, not how important it is.","Right. *A jacket* can be important and still takes *a*."]]),
   Q("e5u12-q14","e5u12-l2",2,"A learner asks why we say *make a mistake* and not *do a mistake*. What is the most honest answer?",0,[
     ["“I don’t know a rule that predicts it. English speakers say *make a mistake*, so learn the chunk. A dictionary shows the pattern.”","Right. It is honest, gives a chunk and a way to check."],
     ["“*Make* is for things that you create, and a mistake is created.”","This is an invented reason. It fails for *make the bed*, where nothing is created, and for *do a drawing*, where something is."],
     ["“You are wrong to ask.”","The question is a good one."],
     ["“It is because of Latin.”","This is a false history that sounds like an explanation."]]),
   Q("e5u12-q15","e5u12-l2",3,"A tutor answers the question “Why *a university*?” with five minutes about vowel and consonant sounds in English. What is the best advice?",2,[
     ["Keep going: more detail is always better.","Too much detail overloads the learner."],
     ["Say that it is usage.","There is a reason, so this is not honest."],
     ["Give a short answer: “Use *a* or *an* by the first sound. *University* starts with /j/, so *a university*.” Offer more if asked.","Right. Rule of thumb, example and contrast, in about twenty seconds."],
     ["Give the learner a textbook.","This avoids the question."]]),
   Q("e5u12-q16","e5u12-l2",1,"Which word helps to make a rule of thumb honest?",1,[
     ["*always*","*Always* claims there are no exceptions, which is rarely true."],
     ["*usually*","Right. It signals a tendency."],
     ["*never*","*Never* has the same problem as *always*."],
     ["*obviously*","It does not say anything about exceptions and it can sound dismissive."]]),
   Q("e5u12-q17","e5u12-l2",3,"A learner who does not know grammar terms asks when to use *a* and *an*. Which explanation fits best?",1,[
     ["“*A* is the indefinite article for singular count nouns with an initial consonant phoneme.”","This uses terms the learner does not know."],
     ["“Say the next word. If it starts with a vowel sound, use *an*. Otherwise use *a*. *An apple, a university.*”","Right. It is plain, short and tied to sound."],
     ["“Use *an* before the letters a, e, i, o and u.”","This is the false letter rule."],
     ["“It depends on the noun phrase.”","This does not help the learner choose."]]),
   Q("e5u12-q18","e5u12-l2",2,"You do not know a learner’s first language. What is a good way to use it in your explanation?",3,[
     ["Guess and say how it differs from English.","A wrong guess could confuse the learner and may be unkind."],
     ["Do not mention it, ever.","Asking can help and is kind."],
     ["Tell the learner that the first language causes the problem.","This blames the language and may be false."],
     ["Ask the learner how the same idea is said in their language.","Right. It is kind, and it gives you evidence for your diagnosis."]]),
   /* ---- Lesson 3: concept checking ---- */
   Q("e5u12-q19","e5u12-l3",1,"What is a concept-checking question?",1,[
     ["A question that tests the learner’s grammar terms.","It checks meaning, not terms."],
     ["A short question about the meaning of a form, with a short answer that shows understanding.","Right. Meaning plus a short answer is what makes it work."],
     ["A question that asks the learner to explain the rule.","This is hard to answer and tests explaining skill."],
     ["A question about the learner’s feelings.","It is about the meaning of the language."]]),
   Q("e5u12-q20","e5u12-l3",1,"Which is NOT a property of a good CCQ?",3,[
     ["It is short.","A good CCQ is short."],
     ["The answer is yes, no or a few words.","A good CCQ has a short answer."],
     ["It asks about the situation.","A good CCQ asks about the situation."],
     ["It uses grammar terms such as *present perfect*.","Right. A good CCQ avoids terms and asks about meaning."]]),
   Q("e5u12-q21","e5u12-l3",2,"Which CCQ checks the meaning of *I’ve been to Nara*? (The speaker means that the experience is part of life up to now.)",0,[
     ["“Am I in Nara now?”","Right. The answer is no, and it shows that the sentence is about an experience, not a place now."],
     ["“Is *been* the past participle?”","This asks about form."],
     ["“Do you understand *been to*?”","A polite yes tells you nothing."],
     ["“What is the difference between *been to* and *gone to*?”","It is too hard as a check."]]),
   Q("e5u12-q22","e5u12-l3",2,"Which of these is the weakest CCQ for *You should see a doctor*?",2,[
     ["“Is it a rule?”","A good CCQ about strength."],
     ["“Is it a good idea?”","A good CCQ about the meaning."],
     ["“Is *should* a modal verb?”","Right: this asks about a grammar label, so it is the weakest."],
     ["“Will I be in trouble if I don’t go?”","A good CCQ about the consequence."]]),
   Q("e5u12-q23","e5u12-l3",2,"What does a simple timeline show?",1,[
     ["The spelling of a verb form.","It shows time, not spelling."],
     ["The time of a situation and whether it reaches the present.","Right. It shows time relations with a mark for *now*."],
     ["The sound of a word.","A timeline does not show sound."],
     ["Which verbs are regular.","A timeline does not show this."]]),
   Q("e5u12-q24","e5u12-l3",3,"Why can a timeline mislead for *My train leaves at six*?",2,[
     ["Because the sentence is not about time.","It is about time. The problem is the form."],
     ["Because trains have no tense.","This is not the issue."],
     ["Because a timeline shows when the situation is, not the verb form. The form is present, and the time is future.","Right. A timeline for time does not explain why the form is present."],
     ["Because timelines only work for the past.","Timelines work for any time."]]),
   Q("e5u12-q25","e5u12-l3",3,"A learner answers “Yes” to “Do I live in Nara now?” after you explained *I used to live in Nara*. What is the best next step?",3,[
     ["Repeat the same explanation more slowly.","The explanation did not work, so repeating it is unlikely to help."],
     ["Say that the learner is not paying attention.","This blames the learner."],
     ["Move on to the next topic.","The wrong answer shows that the learner has not understood."],
     ["Give a contrast: *I used to live in Nara, but now I live in Sendai.* Then ask again.","Right. A new example and a contrast help."]]),
   Q("e5u12-q26","e5u12-l3",2,"Why ask two or three CCQs and not one?",1,[
     ["Because the learner needs practice with yes and no.","The goal is to check understanding."],
     ["Because a single yes or no answer can be right by luck, and a pattern of answers is more reliable.","Right. A pattern of answers is more reliable."],
     ["Because one question is impolite.","One question is not impolite."],
     ["Because the rule says to ask three.","There is no such rule. The reason is reliability."]]),
   Q("e5u12-q27","e5u12-l3",1,"What does the timeline for *I’ve lived in Nara since 2020* show?",0,[
     ["A period that starts in 2020 and reaches now.","Right. It matches the picture."],
     ["A single point in 2020.","That would match *I moved to Nara in 2020*."],
     ["A period that ended in 2020.","That would match *I lived in Nara until 2020*."],
     ["A future plan.","The sentence is not about the future."]]),
   /* ---- Lesson 4: why? ---- */
   Q("e5u12-q28","e5u12-l4",1,"Which is correct?",1,[
     ["*a hour*","The *h* in *hour* is silent, so it takes *an*."],
     ["*an hour*","Right. The h is silent, so the first sound is a vowel."],
     ["*an university*","*University* starts with /j/, a consonant sound."],
     ["*a honest answer*","The *h* in *honest* is silent, so it takes *an*."]]),
   Q("e5u12-q29","e5u12-l4",2,"Which phrase is correct?",2,[
     ["*an European city*","*European* starts with /j/, a consonant sound."],
     ["*an one-time offer*","*One* starts with /w/."],
     ["*a European city*","Right. The first sound is /j/."],
     ["*a MBA program*","The name of the letter *M* starts with a vowel sound, so *an MBA*."]]),
   Q("e5u12-q30","e5u12-l4",1,"Why does *knight* begin with *k*? Which kind of answer is it?",3,[
     ["A usage answer: learn the chunk.","It is a spelling matter with a known history."],
     ["A variety answer: US and UK differ.","Both varieties spell it the same way."],
     ["A reason answer: a sound rule explains it.","No sound rule today explains it."],
     ["A history answer: the *k* was once pronounced, and the spelling stayed.","Right. The history explains it."]]),
   Q("e5u12-q31","e5u12-l4",2,"What does the word *marked* mean in *a marked use of a stative verb*?",1,[
     ["Marked wrong by a teacher.","It is a technical word, not a grade."],
     ["A less usual choice that carries extra meaning.","Right. In *I’m loving it* the progressive adds the idea of a new or developing feeling."],
     ["A use that only appears in writing.","*I’m loving it* appears in speech."],
     ["A use with a special spelling.","The word is about meaning, not spelling."]]),
   Q("e5u12-q32","e5u12-l4",2,"Which statement about *have got* is accurate?",0,[
     ["It is informal, and it is used for possession and similar states, not for actions like *have a shower*.","Right. It is informal and for states."],
     ["It is only used in American English.","It is common in British English, and used in American English too."],
     ["It is a mistake in all varieties.","It is normal English."],
     ["It is more formal than *have*.","It is more informal."]]),
   Q("e5u12-q33","e5u12-l4",3,"A learner asks why we say *at night*. A tutor replies: “Because night is dark, and *at* is for points.” What is wrong with this answer?",1,[
     ["Nothing. It is a good reason.","It sounds good but it does not predict other phrases such as *in the dark*."],
     ["It invents a reason for a usage pattern, and it does not predict other phrases.","Right. It is better to say that it is a fixed phrase."],
     ["It is too short.","Short is good. The problem is that it is invented."],
     ["It uses grammar terms.","It uses few terms. The problem is the invented reason."]]),
   Q("e5u12-q34","e5u12-l4",2,"Which resource lets you read real examples of a phrase in different kinds of text?",2,[
     ["A thesaurus","It lists words with similar meanings."],
     ["A spell checker","It checks spelling."],
     ["A corpus such as COCA","Right. You can search the phrase and read the lines."],
     ["A pronunciation guide","It shows sounds, not use in text."]]),
   Q("e5u12-q35","e5u12-l4",3,"A learner asks whether *an historic* is right. You are not sure. What is the best reply?",3,[
     ["“Yes, always.”","You are not sure, so a firm claim is not honest."],
     ["“No, never.”","You are not sure, so this is also not honest."],
     ["“Ask someone else.”","This avoids the question."],
     ["“I’m not sure. *A historic* is the usual form today, I think, but let me check a dictionary and a corpus.”","Right. It is honest and models how to check."]]),
   Q("e5u12-q36","e5u12-l4",1,"Where do *a* and *an* come from?",2,[
     ["From the word *and*.","They are not related to *and*."],
     ["From the word *the*.","They are not related to *the*."],
     ["From the Old English word that became *one*.","Right. The *n* stayed before vowel sounds."],
     ["From French.","They come from Old English."]]),
   /* ---- Lesson 5: putting it together ---- */
   Q("e5u12-q37","e5u12-l5",1,"Which step comes after you diagnose the cause in the explainer’s routine?",1,[
     ["Listen","Listening comes first."],
     ["Choose the kind of answer: reason, history, usage or variety.","Right. Choosing the kind of answer comes next."],
     ["Follow up","Following up is the last step."],
     ["Check with CCQs","Checking comes after you explain."]]),
   Q("e5u12-q38","e5u12-l5",2,"Which unit’s main idea is “time is not tense”?",2,[
     ["Unit 2, the sounds of English","Unit 2 is about sounds."],
     ["Unit 5, vocabulary in use","Unit 5 is about words."],
     ["Unit 7, tense and aspect","Right. Unit 7 makes this point."],
     ["Unit 10, joining ideas","Unit 10 is about linking ideas."]]),
   Q("e5u12-q39","e5u12-l5",3,"Aya says: “Why do I say *a university* but my teacher says *an umbrella*? I thought both started with a vowel.” Which reply uses the routine well?",1,[
     ["“Memorize the list of exceptions.”","A list does not give the pattern."],
     ["“It depends on the first sound. *University* starts with /j/, like *y*, so *a*. *Umbrella* starts with a vowel sound, so *an*. Say the word and listen.”","Right. It is a rule of thumb, an example and a contrast, and it gives a way to check."],
     ["“It is just usage.”","There is a reason, so this is not honest."],
     ["“Your teacher is wrong.”","The teacher is right, and the reply is unkind."]]),
   Q("e5u12-q40","e5u12-l5",2,"*Center* and *centre* are an example of which kind of why-answer?",2,[
     ["A usage answer with no pattern","There is a clear pattern between US and UK spelling."],
     ["A sound rule","The sound is the same."],
     ["A variety answer: US and UK spelling sets differ","Right. Choose one set for each text."],
     ["An answer about learners’ errors","Both are correct in their varieties."]]),
   Q("e5u12-q41","e5u12-l5",3,"A new tutor asks: “I want to give my learners a list of all the English article rules.” Which advice fits the unit?",0,[
     ["Give short explanations in rule, example and contrast form for the questions that come up, and check understanding.","Right. This keeps explanations short and useful."],
     ["Give the full list on the first day.","A long list overloads the learner and hides the most useful rules."],
     ["Do not explain articles, because they are usage.","Many article choices follow patterns that can be explained."],
     ["Explain articles only with grammar terms.","Terms alone do not help the learner choose."]]),
   Q("e5u12-q42","e5u12-l5",2,"What is a benefit of saying “I’m not sure, let me check”?",3,[
     ["It makes the learner doubt you.","Honest checking builds trust."],
     ["It lets you avoid the question.","You do come back with an answer."],
     ["It means you do not need to learn more.","You learn from the check."],
     ["It models the habit of using evidence, and it keeps your answer true.","Right. It keeps your answer true."]]),
   Q("e5u12-q43","e5u12-l5",3,"Sione, a learner, says: “I live in Nara since 2020.” Which reply fits the unit?",1,[
     ["“It is a slip, so ignore it.”","A repeated pattern is more likely than a slip."],
     ["Make a working guess (many languages use a present form here, so transfer is possible), give a rule of thumb (*I’ve lived in Nara since 2020*), and check meaning with *Do I still live there?*","Right. It is a guess, a short explanation and a check."],
     ["List all the English tenses.","This is too long for one question."],
     ["Tell him it is wrong and move on.","This gives no help."]]),
   Q("e5u12-q44","e5u12-l5",2,"Which planned elective continues from this course with the many varieties of English?",0,[
     ["The World Englishes elective (coming)","Right. It is planned as the next step after the US and UK comparisons."],
     ["The Japanese Foundations elective","This is a Japanese course."],
     ["The International Studies elective","This is about politics and society."],
     ["The Academic Language elective","This is about English for study. Its Unit 4 introduces World Englishes, but the planned World Englishes elective is the one about varieties."]]),
   Q("e5u12-q45","e5u12-l5",1,"Which attitude to learners’ errors fits this unit?",2,[
     ["Errors are carelessness.","Many errors show a rule that the learner has found."],
     ["Errors should be corrected immediately, all at once.","This overloads the learner."],
     ["Errors are evidence of learning, and the cause tells you what help to give.","Right. The cause tells you what help to give."],
     ["Errors do not matter.","Some errors affect meaning, so they matter."]])
  ],
  codex:[
   {id:"error-analysis-interlanguage", title:"Learner errors, error analysis and interlanguage", aka:["error analysis","mistakes and errors","L1 transfer"], tags:["learning","explaining"],
    summary:"Learner errors are evidence of a developing system (an interlanguage), and their cause (transfer, overgeneralization, developmental sequence or a slip) decides what help works.",
    levels:{
     starter:[
      "When a learner writes *two book* or *I goed*, the error shows what the learner knows now. A good explainer asks what caused the error before correcting it.",
      "A **slip** (Corder’s *mistake*) is a performance error that the learner can usually fix. An **error** comes from the learner’s present knowledge and comes back again and again.",
      "Four causes are common: **first-language transfer** (a pattern from another language), **overgeneralization** (a regular rule used on an exception, such as *goed*), a **developmental sequence** (features learned in a common order, such as third-person *-s* late) and **slips**.",
      "A learner’s system is called an **interlanguage**. It has rules, and the rules change as the learner learns.",
      {key:"Find the cause first. Then explain for that cause, kindly, one pattern at a time."}
     ],
     builder:[
      "Error analysis grew in the 1960s. In 1967 S. Pit Corder published “The significance of learners’ errors”, arguing that errors give evidence of the learner’s strategies and knowledge. He separated mistakes (performance, fixable) from errors (systematic, from the learner’s present knowledge). Many writers now use *slip* for the first kind.",
      "In 1972 Larry Selinker named the learner’s own system *interlanguage*. It is not a bad copy of English, but a system with its own rules that moves toward English.",
      {table:[["Cause","Example","Helpful response"],["Transfer","*I bought book.* (no articles in the first language)","Show the English pattern and the difference"],["Overgeneralization","*She buyed a ticket.*","Praise the rule, teach the exceptions"],["Developmental","Missing third-person *-s* in speech","Short reminders, patience"],["Slip","*the the station*, fixed at once","Do nothing"]]},
      "Use a routine: understand the meaning, ask the learner to fix it, look for a pattern, compare with the first language and with regular rules, choose a guess and explain, then watch what happens."
     ],
     pro:[
      "Error analysis was a response to **contrastive analysis**, which predicted errors from the differences between the first and second languages (for example in Lado’s 1957 *Linguistics Across Cultures*). Studies found that many predicted errors do not occur and many errors that do occur were not predicted. Corder’s article moved attention to what the learner is doing, and away from a list of differences between two languages.",
      "Limits of error analysis are well known. It looks only at errors and so misses the correct forms that a learner uses. It cannot see **avoidance**, where learners avoid a structure they find hard and so produce no error. Error categories overlap, and one sentence can have several causes. The mistake–error line is a useful idealization, and in real data it is fuzzy: a learner may self-correct on one day and not on another.",
      "Developmental sequences come from studies that followed which features learners produce correctly over time. In the 1970s the morpheme-order studies measured how accurately learners supplied English grammatical morphemes. Dulay and Burt (1973, 1974) studied children, and Bailey, Madden and Krashen (1974) studied adults. They reported similar orders across learners with different first languages: progressive *-ing* and plural *-s* came early, and third-person *-s* and possessive *’s* came late. Later work questioned the methods and found that the first language does affect some morphemes, such as articles. Treat sequences as tendencies. Selinker also used the term **fossilization** for a learner’s system that stops changing before it reaches the target, and the idea is debated.",
      "For an explainer, the practical point is modest. Causes are hypotheses. Use a few sentences and the learner’s own corrections as evidence, ask about the first language when you do not know it, and revise the guess when the next sentences disagree."
     ]},
    related:["short-explanations-english","concept-checking-questions","articles-japanese-speakers"], read:[{book:"eling", where:"The Adult Language Learning chapter, section “Cognitive processes in language learning”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},
   {id:"short-explanations-english", title:"Short explanations that work", aka:["rule of thumb","explaining grammar","false rules"], tags:["explaining","grammar"],
    summary:"A good short explanation has a rule of thumb, an example and a contrast, avoids false rules, and says honestly when the answer is usage.",
    levels:{
     starter:[
      "A short explanation is about three sentences: a **rule of thumb** (true in most cases, with *usually*), an **example**, and a **contrast** that shows the nearest alternative.",
      "Example: *Use for with a length of time and since with a starting point. I’ve lived here for two years. I’ve lived here since 2024.*",
      "Some classroom rules are false: “use *the* for important things”, “use *a* before vowel letters”, “never start with *and*”. Replace them with true ones: *the* when the listener can tell which one, *a* or *an* by sound, and start with *and* when it helps the flow.",
      "Some questions have no neat rule. *In the morning* but *at night* is usage. Say so, give the chunk and say how to check.",
      {key:"Short, true enough, honest about limits."}
     ],
     builder:[
      "Start from the learner’s own sentence, and use words that are simpler than the topic. Add a grammar term only if the learner will meet it in a book.",
      "A good **usage** answer has four parts: look for a pattern; say plainly if there is none; give the chunk and an example; say how to check a learner dictionary or a corpus.",
      "A comparison with the learner’s first language helps only if you know it well. Otherwise, ask how the learner says the idea. Never say that the first language is the problem.",
      {table:[["Too long","Works"],["*Article choice depends on definiteness.*","*Use the when we both know which one.*"],["*That is irregular.*","*Go has a special past form: went. Learn them as a pair.*"]]}
     ],
     pro:[
      "A rule of thumb is a **heuristic**: it is chosen for usefulness, not for completeness. A good heuristic fails in predictable places, and a good explainer names one of them. This keeps trust and prepares the learner for exceptions.",
      "False rules persist because they are short and they cover many easy cases. Corpus work often shows that a rule that sounds right fails in speech: *some* in questions, *much* in positive sentences, *an* before *historic*. Use a corpus before you say “always” or “never”.",
      "Not every *why* has the same status. Some answers are principled (sound and grammar), some are historical (spelling and irregular plurals), some are conventional (collocation and fixed prepositions) and some reflect differences between varieties. Name the kind. The same learner’s question may mix two kinds.",
      "A short explanation is not a simplified lie. It is a true statement about a part of the pattern, and it is meant to be followed by more if the learner asks."
     ]},
    related:["error-analysis-interlanguage","concept-checking-questions","descriptive-prescriptive"], read:[{book:"eling", where:"The Adult Language Learning chapter, section “Gaining proficiency”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},
   {id:"concept-checking-questions", title:"Concept-checking questions and timelines", aka:["CCQs","checking understanding","timelines"], tags:["explaining"],
    summary:"A concept-checking question is a short question about meaning with a short answer. A timeline shows when a situation happens and whether it reaches now.",
    levels:{
     starter:[
      "When you explain something, “Do you understand?” gets a polite yes. A **concept-checking question** (CCQ) asks about the meaning instead.",
      "After *I used to play the piano*: *Do I play the piano now?* (No.) *Did I play in the past?* (Yes.) The answers show that the learner understands that the habit has ended.",
      "A good CCQ is short, asks about the situation, has a short answer and does not use grammar terms or repeat the sentence.",
      "A timeline is a line of time with a mark for *now*. It helps with sentences such as *I’ve lived here since 2020*, where the period reaches now.",
      {key:"Ask about the meaning, in short words, with short answers."}
     ],
     builder:[
      "Ask two or three CCQs. One yes or no question is right by luck half of the time. A wrong answer is useful: it shows what the learner thinks the form means. Then give a new example or a contrast and ask again.",
      "Avoid leading questions (*It is just advice, isn’t it?*), weak questions (*Do you understand?*), questions about form (*Is this the present perfect?*) and questions that are harder than the target.",
      "Use a timeline when the meaning is about time, not for every form. Tense is not time: *My train leaves at six* has a present form for a future time, and *If I were you* has no time. Instruction-checking questions are a different thing: they check that learners know what to do in an activity, not what a form means.",
      "Finish with production: ask the learner for a sentence about their own life."
     ],
     pro:[
      "CCQs come from teaching practice, and this course presents them as a practical tool and not as a research result. The idea fits a general principle: understanding a form means connecting it with a meaning, and a question about a situation tests that connection.",
      "A CCQ set can be written from a **meaning analysis** of the form: time, duration, completion, certainty, strength and attitude. For *had better*, the dimensions are warning, consequence and speaker’s authority; for the present perfect of experience, the dimensions are time period, reach to now and relevance.",
      "Timelines map the relation between the **time of the situation** and the **reference time**. They fit simple and perfect meanings well, and they fit progressive and modal meanings less well. When a timeline needs many exceptions, a CCQ is a better tool."
     ]},
    related:["short-explanations-english","tense-and-time-english","perfect-present-perfect-english"], read:[{book:"eling", where:"The Adult Language Learning chapter, section “Adults are not children”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},
   {id:"why-questions-english", title:"Answering why: a/an, I’m loving it, have got", aka:["a or an","stative verbs with -ing","have got"], tags:["explaining","usage"],
    summary:"Three common why-questions have different answers: a/an follows sound, I’m loving it is a marked informal use, and have got differs by variety and register.",
    levels:{
     starter:[
      "Why-questions have four kinds of answers: a reason, history, usage, or a difference between varieties.",
      "**A or an.** Choose by the first sound of the next word, not the first letter. *A university* (starts with /j/), *an hour* (the *h* is silent).",
      "**I’m loving it.** Verbs of state such as *love* usually take the simple form (*I love it*). The progressive adds the idea of a new or developing feeling and sounds informal. It is not wrong, and it is rare in formal writing.",
      "**Do you have / Have you got.** Both are good English. *Do you have…?* is the usual American question and also works in Britain. *Have you got…?* is common in British English and sounds informal.",
      {key:"Name the kind of why, then give a short answer."}
     ],
     builder:[
      {table:[["Word","First sound","Article"],["*university*, *European*, *unit*","/j/","a"],["*hour*, *honest*","vowel","an"],["*MBA*, *FBI*","a letter name starting with a vowel sound","an"],["*one-time*","/w/","a"]]},
      "*A* and *an* come from the Old English word that became *one*. Some words vary: Americans often say *an herb* (silent *h*), while British speakers say *a herb*.",
      "Stative verbs are a tendency. A **marked** use is a less usual choice that carries extra meaning, which is why an advertising slogan can use *I’m lovin’ it*. Note *I’m having lunch* (an action) and *I’m having a car* (not possible).",
      "*Have got* is used for possession and similar states, not for actions: *I’m having a shower*. In formal writing, *have* is more usual.",
      "To check, use a learner dictionary for labels and examples, and a corpus such as COCA to read real lines."
     ],
     pro:[
      "The article rule is phonological, not orthographic. Old English *ān* meant “one”. In Middle English the unstressed article lost its *n* before consonant sounds and kept it before vowel sounds, so the split into *a* and *an* is conditioned by sound. Some variation remains where stress and an initial /h/ interact (*a historic*, *an historic*) and in abbreviations that can be read two ways (*an SQL query* if you say the letters, *a SQL query* if you say “sequel”).",
      "The progressive with stative verbs is explained in several ways. One analysis treats the progressive as adding a **limited duration** or **changing** meaning that a state does not normally have. Under that analysis, *I’m loving it* is a reinterpretation of *love* as an event or a developing experience. How often such uses appear depends on the verb and the register, and they are most common in informal speech and writing.",
      "*Have got* is best seen as a variety and register difference. British usage favors it in spoken questions and negatives, and American usage favors *do*-support with *have*, while *I’ve got* statements are widespread in American speech. The two forms differ in some contexts: *have* is the normal form for actions and in the past (*Did you have…?*)."
     ]},
    related:["articles-english","aspect-progressive-stative-english","descriptive-prescriptive"], read:[{book:"eling", where:"The Language Variation and Change chapter, section “Language varies”"}],
    sources:[{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-error-analysis", term:"Error analysis", def:"The study of learners’ errors to find out what rules the learner is using and what causes the errors. It grew in the 1960s.", codex:"error-analysis-interlanguage"},
   {id:"hew-slip", term:"Slip", def:"A performance mistake in a form that the speaker knows, caused by speed, tiredness or nerves. The speaker can usually fix it. Corder called this kind a *mistake*.", codex:"error-analysis-interlanguage"},
   {id:"hew-interlanguage", term:"Interlanguage", def:"A learner’s own developing system of the new language, with rules that change as the learner learns. Larry Selinker used the term in 1972.", codex:"error-analysis-interlanguage"},
   {id:"hew-l1-transfer", term:"First-language transfer", def:"The use of a pattern from the first language in the new language. It can help (positive transfer) or cause errors (negative transfer).", codex:"error-analysis-interlanguage"},
   {id:"hew-overgeneralization", term:"Overgeneralization", def:"Using a regular rule on a word that is an exception, such as *goed* or *childs*.", codex:"error-analysis-interlanguage"},
   {id:"hew-developmental-sequence", term:"Developmental sequence", def:"A common order in which many learners acquire features of a language. It is a tendency and not a fixed timetable.", codex:"error-analysis-interlanguage"},
   {id:"hew-rule-of-thumb", term:"Rule of thumb", def:"A short statement that is true in most cases and says so. It is chosen because it is useful.", codex:"short-explanations-english"},
   {id:"hew-usage", term:"Usage", def:"The way speakers use words and phrases in practice. In an explanation, “it’s usage” means that no rule predicts the choice.", codex:"short-explanations-english"},
   {id:"hew-ccq", term:"Concept-checking question (CCQ)", def:"A short question about the meaning of a form, with a short answer, that shows whether a learner has understood. Example: *Do I play the piano now?* after *I used to play the piano*.", codex:"concept-checking-questions"},
   {id:"hew-timeline", term:"Timeline", def:"A line that stands for time, with a mark for *now*. It shows when a situation happens and whether it reaches the present.", codex:"concept-checking-questions"},
   {id:"hew-marked-use", term:"Marked use", def:"A less usual choice that carries extra meaning. For example, *I’m loving it* uses the progressive with a stative verb to suggest a new or developing feeling.", codex:"why-questions-english"}
  ]
});
})();
