/* Academic Language · Academic English Unit 4 · Listening and speaking for study */
ICA.addUnit({
  id:"e1u4", track:"e1", n:4, title:"Listening and speaking for study", icon:"🎤",
  blurb:"Follow lectures by hearing their signposts and taking fast notes; take part in seminars with the right phrases at the right strength; present and answer questions in English; work on the parts of pronunciation that matter for being understood; and use office hours, World Englishes and free listening resources. The unit ends with a send-off to Academic Japanese.",
  goals:[
    "Follow a lecture by recognising its signposts, predicting what comes next and taking fast notes with abbreviations and symbols",
    "Join seminar discussions: take turns, agree, disagree and build on points politely, soften where it helps and ask for clarification",
    "Use the language of each stage of an academic presentation, describe charts accurately and handle questions calmly",
    "Improve intelligibility, not “native-likeness”, by working on word stress, sentence stress, chunking, pausing and intonation",
    "Make good use of office hours, explain English as a lingua franca and World Englishes, and build a free listening practice plan"
  ],
  read:[
    {book:"uefap", where:"The site’s “Listening” and “Speaking” sections", note:"Free explanations, audio clips and exercises written for students of English for academic purposes. Pick the pages that match each lesson."},
    {book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”", note:"Outlining a talk, signpost language and visuals, from the writing side."},
    {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”", note:"General presentation skills, including inclusivity."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u4-l1", title:"Understanding lectures", minutes:50,
   hook:{q:"In a lecture you hear: “Anyway, going back to what I said about water prices…” What is most likely to happen next?", options:["A completely new topic starts","The lecturer returns to an earlier point after a side comment","The lecture is about to end","The lecturer is about to tell a joke"], answer:1, reveal:"**A return to an earlier point.** “Anyway” and “going back to” are signposts: they usually close a side comment (an aside) and bring the talk back to the main line. Lecturers use dozens of these signals, and recognising them is the most useful lecture skill there is. This lesson covers signposts, how speakers show what matters, predicting, fast note-taking with symbols, and what to do when you miss something."},
   goals:[
     "Recognise signposts that preview, sequence, add, contrast, emphasise, digress, return and sum up",
     "Notice how speakers show importance with voice, repetition and questions",
     "Prepare for a lecture so you can predict its content and key words",
     "Take fast notes with abbreviations and symbols, and use recordings and captions wisely"
   ],
   learn:[
    {h:"Why lectures feel hard, and why they’re easier than they look", body:[
      {lead:"Reading lets you slow down and go back. Listening doesn’t: the lecture moves at the speaker’s speed, and each sentence is gone a second later."},
      "Spoken academic English is also different from written academic English. Speakers repeat themselves, start sentences again, add side comments and use many short words such as “so”, “right” and “now”. Lecturers speak with many different accents and at different speeds, and some use local examples or jokes.",
      "The good news: experienced lecturers know their listeners can’t re-read, so they build in help. They tell you what is coming, mark each new part, repeat the key points and sum up at the end. Learning to hear these signals is the most useful lecture skill, so this lesson starts there.",
      {table:[
        ["","Reading an article","Listening to a lecture"],
        ["Speed","You choose","The speaker chooses"],
        ["Going back","Re-read any time","Only with a recording"],
        ["Structure","Headings, paragraphs","Spoken signposts, slides, pauses"],
        ["Language","Edited and compact","Repetition, restarts, asides"]
      ]},
      {tip:"Understanding every word is not the aim. People follow lectures, in any language, by catching the structure and the key points, then filling gaps later from the slides and the reading."}
    ]},
    {h:"Signposts: the lecture’s road signs", body:[
      "A [[lecture-signpost|lecture signpost]] is a phrase that tells you where the talk is going, like the signs on a motorway (highway). It carries little content itself, but it tells you how to file the content that comes next. Writing uses [[signposting]] too. Speech uses even more of it, because listeners can’t see the headings.",
      {table:[
        ["What it signals","Typical phrases"],
        ["Preview of the lecture","“Today I’ll look at…” · “I’m going to cover three things.” · “By the end of this session you should be able to…”"],
        ["Starting or moving to a section","“First…” · “Let’s start with…” · “Moving on to…” · “Now let’s turn to…”"],
        ["Adding a point","“Another factor is…” · “In addition…” · “A further point is…”"],
        ["Contrast","“However…” · “On the other hand…” · “But…”"],
        ["An example","“For example…” · “Take the case of…” · “To give you an idea…”"],
        ["A definition","“By X, I mean…” · “X refers to…” · “So what do we mean by X?”"],
        ["Emphasis","“This is important.” · “The key point here is…” · “If you remember one thing, remember this.”"],
        ["An aside (side comment)","“By the way…” · “As an aside…” · “Incidentally…”"],
        ["Returning to the main line","“Anyway…” · “Going back to…” · “Where was I? Yes…”"],
        ["Summary or ending","“To sum up…” · “So, to recap…” · “Next week we’ll look at…”"]
      ]},
      "Short words such as **so**, **right**, **OK**, **now** and **well** are [[discourse-marker|discourse markers]]. At the start of a sentence, often after a pause, “Right. So…” or “OK, now…” usually means a new section is starting. They aren’t filler to ignore: they are punctuation for the ear.",
      {warn:"Signposts help, but not every lecturer uses them, and some use them loosely. Use the slides, pauses and changes in the speaker’s voice as extra clues."}
    ]},
    {h:"How speakers show what matters", body:[
      {lead:"Lecturers also show importance with their voice and their actions, not only with their words."},
      {list:[
        "**Slowing down and stressing words**: “the MAIN reason is…”. The stressed word is often the key word.",
        "**Repeating and rephrasing**: saying an idea twice in different words, often with “in other words…” or “that is…”.",
        "**Asking a question and answering it**: “So why does this matter? Well…”. The answer that follows is often a main point.",
        "**Writing it on the board or slide**, or pointing at it.",
        "**Saying so directly**: “You’ll need this for the assignment.”"
      ]},
      "Speakers also signal what matters **less**. Asides (“By the way…”, “I won’t go into detail, but…”) and jokes can usually be noted briefly or skipped. A good habit: when you hear an aside, write “(aside)” and wait for “Anyway…” or “Going back to…”.",
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="e1u4a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">A lecture’s spoken roadmap</text><rect class="d-lup" x="20" y="32" width="300" height="50" rx="6" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Preview</text><text class="s" x="170" y="70" text-anchor="middle">“Today I’ll look at three causes…”</text><path class="d-ink" d="M170,82 L170,100" stroke-width="2" marker-end="url(#e1u4a1)"/><rect class="d-sage" x="20" y="102" width="300" height="50" rx="6" stroke-width="2"/><text x="170" y="122" text-anchor="middle">Sections</text><text class="s" x="170" y="140" text-anchor="middle">“First…” · “Moving on to…”</text><path class="d-ink" d="M170,152 L170,170" stroke-width="2" marker-end="url(#e1u4a1)"/><rect class="d-soft" x="60" y="172" width="220" height="50" rx="6" stroke-width="2" stroke-dasharray="5 4"/><text x="170" y="192" text-anchor="middle">Aside: less central</text><text class="s" x="170" y="210" text-anchor="middle">“By the way…”</text><path class="d-ink" d="M170,222 L170,240" stroke-width="2" marker-end="url(#e1u4a1)"/><rect class="d-sage" x="20" y="242" width="300" height="50" rx="6" stroke-width="2"/><text x="170" y="262" text-anchor="middle">Back to the main line</text><text class="s" x="170" y="280" text-anchor="middle">“Anyway, going back to…”</text><path class="d-ink" d="M170,292 L170,310" stroke-width="2" marker-end="url(#e1u4a1)"/><rect class="d-gold" x="20" y="312" width="300" height="50" rx="6" stroke-width="2"/><text x="170" y="332" text-anchor="middle">Emphasis: note it!</text><text class="s" x="170" y="350" text-anchor="middle">“The key point here is…”</text><path class="d-ink" d="M170,362 L170,380" stroke-width="2" marker-end="url(#e1u4a1)"/><rect class="d-rose" x="20" y="382" width="300" height="44" rx="6" stroke-width="2"/><text x="170" y="400" text-anchor="middle">Summary</text><text class="s" x="170" y="417" text-anchor="middle">“To sum up…” · “Next week…”</text></svg>', alt:"A vertical flow of six boxes joined by arrows. Preview: Today I’ll look at three causes. Sections: First; Moving on to. A narrower dashed box, Aside, less central: By the way. Back to the main line: Anyway, going back to. Emphasis, note it: The key point here is. Summary: To sum up; Next week.", cap:"Signposts mark the route. The dashed box is a side road: note it briefly, then wait for the return."},
      {ex:"You hear: “OK. So, we’ve seen what urban heat islands are. Now, why do they matter? Well, the key point is health…”\n• “OK. So” → a new section is starting.\n• “we’ve seen…” → a one-line recap of the last section.\n• “Now, why do they matter? Well…” → a question the lecturer will answer: the section’s topic.\n• “the key point is” → emphasis: write “health” and mark it with a star.", label:"Worked example"}
    ]},
    {h:"Predict, before and during", body:[
      "Listening is much easier when you roughly know what’s coming, because your brain matches the sounds to words it already expects. You can prepare for that.",
      {h:"Before the lecture"},
      {list:[
        "Read the lecture title, the module guide (course outline) and any slides posted in advance.",
        "Do the set reading, or at least skim it (see {{reading-strategies-eap}}).",
        "List 8–10 key terms. Check how each one is **pronounced** in a [[learner-dictionary|learner dictionary]] that plays audio (see {{dictionaries-corpora}}): a word you know well on paper, such as “hypothesis” or “infrastructure”, can sound unfamiliar at first.",
        "Write two or three questions you expect the lecture to answer."
      ]},
      {h:"During the lecture"},
      {list:[
        "After a preview (“I’ll cover three causes”), write 1, 2, 3 down the page and fill them in as you go.",
        "After a contrast signal (“However…”), expect something that limits or opposes what came before.",
        "After “For example”, expect a case. Note it in a few words, next to the point it illustrates.",
        "After “So what do we mean by…?”, expect a definition: these are worth writing down exactly."
      ]},
      {tip:"Every lecturer has an accent, and so does every listener. If a lecturer’s accent is new to you, the first few lectures are the hardest, and it gets easier quickly. Listening to recordings of the same speaker, or to other speakers with a similar accent, speeds this up."}
    ]},
    {h:"Fast notes: abbreviations and symbols", body:[
      "Nobody can write as fast as people speak, so lecture notes are compressed: key words instead of sentences, symbols instead of linking words. You tidy them into proper notes later. Unit 1 covers note-making methods such as the [[cornell-notes|Cornell method]] in {{note-making}}.",
      {table:[
        ["Symbol or short form","Meaning"],
        ["→","leads to, causes, becomes"],
        ["←","is caused by, comes from"],
        ["↑ · ↓","increase, rise · decrease, fall"],
        ["∴","therefore"],
        ["∵ · b/c","because"],
        ["= · ≠","is, equals · is not, differs from"],
        ["≈","about, approximately"],
        ["vs","compared with, against"],
        ["e.g. · i.e.","for example · that is, in other words"],
        ["cf.","compare"],
        ["w/ · w/o","with · without"],
        ["NB · *","important (NB is Latin “nota bene”, note well)"],
        ["?","not sure: check later"]
      ]},
      "Make your own short forms for words that come up often in your subject, such as “gov” for government or “env” for environment. Keep a key at the front of your notebook or file: in a month, “dev” could mean development or deviation.",
      {ex:"Lecturer: “So the second cause, and this is really important, is the loss of trees. When trees are cut down, there’s less shade, and so streets get hotter. In some cities the difference can be several degrees.”\n\nNotes:\n2. Loss of trees *\n   trees ↓ → shade ↓ → street temp ↑\n   some cities: diff ≈ several °C", label:"Worked example: from speech to notes", mono:true},
      "Notice what disappeared: “So” and “and this is really important” became a star; “When… there’s… and so” became arrows. Names, numbers and technical terms stayed exact, because those are hard to rebuild later."
    ]},
    {h:"Recordings, captions and missed bits", body:[
      {list:[
        "**Recordings** are best for checking the parts you missed, not for listening to everything twice. When something confuses you, write the time (for example “12:40 ?”) so you can find it later.",
        "**Automatic captions** help many listeners, but they make mistakes, especially with names, technical terms, numbers and accents the software has heard less often. Check important words against the slides or the reading.",
        "**Don’t try to write every word.** Copying sentences leaves no attention for understanding them.",
        "**Compare notes** with a classmate after the lecture. Each of you will have caught different things.",
        "**Ask.** In a small class, “Sorry, could you repeat the last point?” is fine. Otherwise ask later, by email or in [[office-hours|office hours]] (lesson 5)."
      ]},
      {warn:"Check your institution’s rules before making your own recording of a lecture. Many require permission, and some lecturers prefer that you use the official recording."},
      {key:"Listen for the structure first and the details second. Signposts tell you where you are; your notes keep the map."}
    ]}
   ],
   try:[
    {id:"e1u4-l1-x1", type:"match", q:"Match each lecture signpost to what it signals.", pairs:[
      ["“Today I’m going to cover three things.”","A preview of the lecture","It tells you how many parts to expect, so you can number your notes."],
      ["“Take the case of Lagos.”","An example is coming","“Take the case of…” introduces a specific case that illustrates a point."],
      ["“As an aside…”","A side comment, less central","Asides can be noted briefly; wait for the return to the main line."],
      ["“The key point here is…”","Emphasis: a main point","Emphasis signals mark what you most need in your notes."],
      ["“So, to recap…”","A summary","A recap repeats the main points: a good moment to check your notes are complete."]
    ]},
    {id:"e1u4-l1-x2", type:"mcq", q:"After a short pause, the lecturer says: “Right. So, now let’s turn to the second cause.” What does “Right. So, now” mainly do here?", options:[
      {t:"It marks the start of a new section of the lecture", ok:true, why:"“Right”, “so” and “now” are discourse markers. At the start of a sentence, after a pause, they usually close one part and open the next, and “let’s turn to” confirms it."},
      {t:"It means the lecturer agrees with a student", why:"“Right” can mean “correct” in other contexts, but here nobody has said anything to agree with. At the start of a turn, after a pause, it organises the talk."},
      {t:"It is meaningless filler and can be ignored", why:"These little words do a job: they tell listeners a boundary is coming. Treating them as filler means missing the structure."},
      {t:"It shows the lecture is ending", why:"“The second cause” shows there is more to come. Endings sound like “To sum up…” or “That’s all for today.”"}
    ]},
    {id:"e1u4-l1-x3", type:"sort", q:"Sort what you hear: does it usually signal **a main point to note** or **a side comment you can note briefly or skip**?", buckets:["Main point to note","Side comment"], items:[
      {t:"“If you remember one thing from today, remember this.”", b:0, why:"An explicit emphasis signal: the lecturer is telling you this matters most."},
      {t:"“By the way, I once got lost in that city myself.”", b:1, why:"“By the way” plus a personal story: an aside that adds colour, not content."},
      {t:"“So why does this matter? Well…”", b:0, why:"A question the speaker then answers usually introduces a main point."},
      {t:"“I won’t go into detail here, but…”", b:1, why:"The speaker is telling you this part is outside the main line of the lecture."},
      {t:"“You’ll need this for the assignment.”", b:0, why:"About as direct as emphasis gets."},
      {t:"“Incidentally, the building we’re in was designed by…”", b:1, why:"“Incidentally” marks something off the main topic."}
    ]},
    {id:"e1u4-l1-x4", type:"spot", q:"Here is part of a lecture transcript. Tap every phrase that is a **signpost** (it organises the talk rather than giving content).", ask:"is a signpost", parts:[
      {t:"Today I’ll look at", flag:true, why:"A preview signpost: it announces what the lecture will cover."},
      " ",
      {t:"two ways cities manage water", flag:false, why:"This is the content: the topic itself."},
      ". ",
      {t:"First,", flag:true, why:"A sequencing signpost: it opens the first section."},
      " ",
      {t:"rainwater harvesting", flag:false, why:"Content: the name of the first method."},
      ". … ",
      {t:"However,", flag:true, why:"A contrast signpost: what follows limits or opposes what came before."},
      " ",
      {t:"tanks are expensive to install", flag:false, why:"Content: a disadvantage of the method."},
      ". … ",
      {t:"Moving on to", flag:true, why:"A signpost that opens the next section."},
      " the second method…"
    ]},
    {id:"e1u4-l1-x5", type:"mcq", q:"Ten minutes into a lecture, Priya hears: “There are three main reasons why the policy failed.” What is the most useful thing to do?", options:[
      {t:"Write 1, 2 and 3 down the page and fill in each reason as it comes", ok:true, why:"The preview tells her the structure in advance. Numbered gaps make each reason easy to catch and show at once if she missed one."},
      {t:"Stop taking notes until the lecturer has finished all three reasons", why:"Waiting means relying on memory for several minutes of detail. Notes are easier to take as each reason arrives."},
      {t:"Write the sentence down word for word", why:"The sentence itself has little content. Its value is the structure it predicts, which three numbers capture faster."},
      {t:"Expect the lecture to end soon", why:"A preview of three reasons means the main part of this section is just beginning."}
    ]},
    {id:"e1u4-l1-x6", type:"match", q:"Match each note-taking symbol to its usual meaning.", pairs:[
      ["∴","therefore","∴ links a conclusion to what came before."],
      ["∵","because","∵ (the inverted form of ∴) gives a reason."],
      ["→","leads to, causes","An arrow shows one thing producing or becoming another."],
      ["≈","approximately","≈ marks an estimate or rough figure."],
      ["w/o","without","w/o is a common short form; w/ means “with”."]
    ]},
    {id:"e1u4-l1-x7", type:"mcq", q:"The lecturer says: “Interestingly, in rural areas, the number of clinics actually fell by about a third between 2010 and 2020, mainly because of staff shortages.” Which note keeps the most meaning in the fewest words?", options:[
      {t:"rural clinics ↓ ≈ ⅓ (2010–20) ∵ staff shortages", ok:true, why:"It keeps every piece of content (where, what, how much, when, why) and turns the linking words into symbols."},
      {t:"Interestingly, in rural areas, clinics fell", why:"It keeps an empty word (“Interestingly”) and loses the size, the dates and the reason."},
      {t:"clinics ↓ ∵ staff", why:"Too short: “rural”, the size of the fall and the dates are gone, and “staff” alone could mean anything."},
      {t:"the number of clinics actually fell by about a third", why:"Long and still incomplete: it copies words like “the number of” and “actually” but loses where, when and why."}
    ]}
   ],
   apply:{intro:"You need a free lecture with a transcript (Open Yale Courses and TED both have them: see lesson 5), or a recorded lecture from your own course, plus paper or a notes app.", tasks:[
    {t:"Take notes on 15 minutes of a real lecture", how:["Choose a lecture with a transcript. Read its title and write 5–8 words you expect to hear.","Listen to 15 minutes once, without pausing, taking notes with symbols and short forms.","Now read the transcript for the same 15 minutes. Mark what you caught and what you missed.","Write down which signposts helped you most."], write:"Lecture and topic… Words I predicted… What I caught well… What I missed and why… Signposts that helped…"},
    {t:"Hunt for signposts", how:["Use the same transcript, or another one.","Find ten signposts or discourse markers.","Sort them by function: preview, sequence, addition, contrast, example, definition, emphasis, aside, return, summary."], write:"Signpost → function (×10)…"},
    {t:"Make your abbreviation key", how:["List 15 words that come up often in your subject or reading.","Invent a short form for each that you won’t confuse with another word.","Keep the key at the front of your notes and use it in your next lecture."], write:"Word → my short form (×15)…"}
   ], proof:"A set of lecture notes compared with a transcript, a list of ten signposts sorted by function, and your own abbreviation key."},
   read:[
     {book:"uefap", where:"“Listening” section", note:"Look for the pages on lectures and note-taking, for extra practice in following lecture structure."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u4-l2", title:"Seminars and discussions", minutes:50,
   hook:{q:"Researchers timed how quickly people answered yes/no questions in conversations in ten very different languages. What did they find?", options:["Each language had completely different rules for taking turns","Speakers of every language tried to avoid both overlap and long silence; the average gap differed only by a fraction of a second","English speakers answered fastest","In some languages, people usually waited several seconds before answering"], answer:1, reveal:"**Similar everywhere, with small differences.** Tanya Stivers and colleagues (2009) found that speakers in all ten languages tried to minimise both overlap and silence. Average gaps differed between languages by only about a quarter of a second either side of the overall average: Japanese speakers had among the shortest gaps, Danish speakers among the longest. Small differences can still feel big in a fast seminar. This lesson covers taking turns, agreeing and disagreeing, softening, asking for clarification and why silence doesn’t always mean someone is disengaged."},
   goals:[
     "Join, hold and hand on turns in a discussion politely",
     "Agree, disagree and build on others’ points at the right strength",
     "Soften statements without hiding your point",
     "Ask for clarification and check understanding",
     "Explain why discussion norms differ and why silence isn’t always disengagement"
   ],
   learn:[
    {h:"What happens in a seminar", body:[
      {lead:"A seminar is a small-group class where students talk through ideas, usually based on a reading or a lecture. Depending on the university it may be called a tutorial, a discussion section or a class."},
      "The tutor might ask open questions, set a task for small groups, or ask one student to start with a short summary of the reading. In many universities participation is expected, and sometimes it counts towards your grade: your course handbook will say.",
      "Good participation doesn’t mean talking the most. It means **adding something**: a point from the reading, an example, a question, a link between two people’s ideas. One thoughtful contribution is worth more than five quick ones.",
      {tip:"Before each seminar, note two or three points you could make and one question you could ask. Write the **first sentence** of each, so you don’t have to build it while everyone waits."}
    ]},
    {h:"Taking turns", body:[
      "[[turn-taking|Turn-taking]] is how speakers share a conversation: who speaks, when, and how they get in and out. In the ten-language study in the warm-up, speakers everywhere tried to avoid both long silences and talking over each other, with only small differences in timing. In a fast discussion, those small differences matter: if you are used to slightly longer pauses, it can feel as if a space never opens.",
      {table:[
        ["You want to…","Phrases"],
        ["Get in","“Can I just add something here?” · “Could I come in on that?” · “Sorry to interrupt, but…”"],
        ["Keep your turn","“Just to finish my point…” · “If I could just finish…”"],
        ["Hand over","“What do you think, Mei?” · “I’d be interested to hear other views.”"],
        ["Show you’re listening","“Mm-hm.” · “Right.” · “Yes, I see.”"],
        ["Get back on topic","“Going back to the question…” · “Can I go back to what Priya said earlier?”"]
      ]},
      "The small sounds listeners make while someone else is speaking (“mm-hm”, “yeah”, a nod) are called [[backchannel|backchannels]]. They show you are following without taking the turn. How often people use them varies between cultures and individuals.",
      "Bodies help too: leaning forward, a small intake of breath, a raised hand or catching the tutor’s eye all show you want to speak. Online, use the raise-hand button or the chat (see {{video-meetings}}).",
      {tip:"Try to speak early. The first ten minutes, before the discussion speeds up, are often the easiest time to join, and once you’ve spoken once it’s easier to speak again."}
    ]},
    {h:"Agreeing, disagreeing and building on ideas", body:[
      "Academic discussion needs disagreement: it’s how ideas get tested. The skill is to disagree with the **idea**, not the person, at a strength that fits the situation, and to give a reason.",
      {table:[
        ["Function","Phrases"],
        ["Agree","“I agree with Tomás.” · “That’s a good point.” · “Exactly.”"],
        ["Partly agree","“I agree up to a point, but…” · “That’s true, but…” · “I see what you mean; however…”"],
        ["Disagree","“I’m not sure I agree.” · “I see it differently.” · “I don’t think the evidence supports that.”"],
        ["Build on a point","“Building on what Amara said…” · “To add to that…” · “That links to the reading, where…”"],
        ["Give a reason","“The reason I say that is…” · “In the reading, the author found…”"]
      ]},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e1u4a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">Disagreeing: from softer to more direct</text><path class="d-ink" d="M22,40 L22,300" stroke-width="2.5" marker-end="url(#e1u4a2)"/><text class="s" x="30" y="44">softer</text><text class="s" x="30" y="304">more direct</text><rect class="d-sage" x="80" y="40" width="250" height="52" rx="6" stroke-width="2"/><text x="205" y="62" text-anchor="middle">“I wonder if there’s another</text><text x="205" y="80" text-anchor="middle">way to look at this.”</text><rect class="d-lup" x="80" y="104" width="250" height="40" rx="6" stroke-width="2"/><text x="205" y="129" text-anchor="middle">“I’m not sure I agree.”</text><rect class="d-gold" x="80" y="156" width="250" height="40" rx="6" stroke-width="2"/><text x="205" y="181" text-anchor="middle">“I disagree.”</text><rect class="d-rose" x="80" y="208" width="250" height="40" rx="6" stroke-width="2"/><text x="205" y="233" text-anchor="middle">“That’s simply wrong.”</text><text class="s" x="205" y="272" text-anchor="middle">Most seminars sit in the top three.</text><text class="s" x="205" y="290" text-anchor="middle">Whatever the strength, add a reason.</text></svg>', alt:"A downward arrow from softer to more direct, beside four boxes: I wonder if there’s another way to look at this; I’m not sure I agree; I disagree; That’s simply wrong. Notes: most seminars sit in the top three; whatever the strength, add a reason.", cap:"The same disagreement at four strengths. Which fits depends on the setting, the topic and the people."},
      "Always add a reason. “I disagree” on its own can stop a discussion; “I disagree, because the study only looked at one city” moves it forward, because others can now respond to the reason."
    ]},
    {h:"Softening", body:[
      "[[softening|Softening]] means making a statement, question or request less forceful so it lands politely, like padding on a sharp corner. Speech uses the same tools as written [[hedging]] (unit 2 covers those in {{hedging-and-boosting}}), plus a few of its own:",
      {list:[
        "[[modal-verb|Modal verbs]]: “That **might** not apply to rural areas.” · “**Could** we look at the second table?”",
        "**Tentative openings**: “**I wonder if**…” · “**It seems to me that**…” · “**I’m not sure, but**…”",
        "**Questions instead of statements**: “**Could it also be that** cost matters more than distance?”",
        "**Small qualifiers**: “a bit”, “slightly”, “perhaps”, “maybe”.",
        "**Recognising the other view first**: “I can see why you’d say that, but…”"
      ]},
      "Softening isn’t only politeness. It is also accuracy: if you’re not sure, “I think” or “it seems” says exactly that.",
      {warn:"Don’t over-soften. “Sorry, this is probably wrong, but maybe it could possibly be…” makes listeners doubt your point before they hear it. One or two softeners is usually enough."}
    ]},
    {h:"Asking for clarification", body:[
      "A [[clarification-request|clarification request]] asks a speaker to repeat, explain or confirm something. Everyone needs them, including people speaking their first language, and asking shows you are engaged.",
      {table:[
        ["You want to…","Phrases"],
        ["Hear it again","“Sorry, could you say that again?” · “Sorry, I didn’t catch the last part.”"],
        ["Understand a word","“What do you mean by ‘resilience’ here?”"],
        ["Check you understood","“So are you saying that…?” · “If I’ve understood correctly, you mean…”"],
        ["Get an example","“Could you give an example?”"],
        ["Repair your own point","“What I mean is…” · “Let me put that another way.”"]
      ]},
      {tip:"Checking (“So are you saying that…?”) is especially useful. It gives the speaker a chance to correct you and shows the group you are following closely."}
    ]},
    {h:"Different norms, and what silence means", body:[
      "Norms for discussion vary: between countries, but also between universities, fields, generations and personalities. In some classrooms students speak mainly when the teacher invites them, and challenging a teacher in public would be rude. In others, students are expected to jump in and challenge each other and the tutor. Neither is better: each makes sense in its setting, and many students move between both.",
      "So silence can mean many things: thinking before speaking, respect for the speaker, waiting to be invited, needing a moment to put a thought into another language, or simply a quiet personality. **It isn’t always disengagement.** And avoid stereotypes about any nationality: within every country, people vary enormously.",
      {h:"If you find it hard to get in"},
      {list:[
        "Prepare one point with its first sentence written down, and use it early.",
        "Use a bridge to an earlier moment: “Can I go back to what Priya said about cost?”",
        "Online, use the chat or the raise-hand button.",
        "If it stays hard, tell the tutor. Many tutors will invite you in, or allow written contributions."
      ]},
      {h:"If you lead or share a discussion"},
      {list:[
        "After asking a question, wait a few seconds before filling the silence.",
        "Invite people by name, gently, and accept a pass.",
        "Let people talk in pairs first, so everyone has something ready to say."
      ]},
      {key:"A good discussion has room for different rhythms. Learn the local norms, and help others into the conversation too."}
    ]}
   ],
   try:[
    {id:"e1u4-l2-x1", type:"mcq", q:"In a lively seminar, Ana is making a point. Kenji wants to add an example that supports it. Ana pauses for breath. What is the most suitable thing for Kenji to say?", options:[
      {t:"“Sorry, can I just add an example here?”", ok:true, why:"Polite, brief and clear about what he wants to do. The short “sorry” acknowledges he is taking the turn."},
      {t:"“Stop. Listen to this.”", why:"Commands like this sound rude in almost any seminar, and they don’t say what he wants to add."},
      {t:"“I’m so sorry, I know this is probably stupid, but maybe…”", why:"Over-softened. The apology and self-criticism make listeners doubt the example before they hear it."},
      {t:"He should wait silently until the tutor names him.", why:"In a lively seminar that may never happen. A short polite phrase in a pause is how people normally get in."}
    ]},
    {id:"e1u4-l2-x2", type:"sort", q:"Sort each response to a classmate’s claim by what it does.", buckets:["Agrees","Partly agrees","Disagrees"], items:[
      {t:"“Exactly, and the reading says the same.”", b:0, why:"“Exactly” is full agreement, supported by the reading."},
      {t:"“I agree up to a point, but the sample was small.”", b:1, why:"“Up to a point, but…” accepts part of the claim and limits the rest."},
      {t:"“That’s true for cities, but I’m less sure about villages.”", b:1, why:"It accepts the claim in one setting and questions it in another."},
      {t:"“I see it differently: the data suggest the opposite.”", b:2, why:"“I see it differently” is polite but clear disagreement, with a reason."},
      {t:"“I completely agree with Tomás.”", b:0, why:"“Completely agree” is full agreement."},
      {t:"“I don’t think the evidence supports that.”", b:2, why:"A clear disagreement, focused on the evidence rather than the person."}
    ]},
    {id:"e1u4-l2-x3", type:"mcq", q:"A classmate says: “Online classes are always worse than face-to-face classes.” Which reply disagrees in a way that is most likely to move an academic discussion forward?", options:[
      {t:"“I’m not sure that’s always true. The study we read found online classes worked well for students who live far from campus.”", ok:true, why:"It questions the word “always”, stays polite and gives a reason from the reading that others can respond to."},
      {t:"“No.”", why:"A bare “no” gives others nothing to discuss and can sound dismissive."},
      {t:"“You obviously haven’t done the reading.”", why:"It attacks the person, not the idea, and gives no evidence."},
      {t:"“Maybe, I don’t know, it depends, perhaps.”", why:"So softened that there is no point left. Others can’t tell whether you agree or disagree, or why."}
    ]},
    {id:"e1u4-l2-x4", type:"order", q:"In most academic English settings, put these ways of disagreeing in order from **softest** to **most direct**.", items:[
      {t:"“I wonder if there’s another way to look at this.”", why:"Softest: it doesn’t even say “disagree”; it opens a possibility with “I wonder if”."},
      {t:"“I’m not sure I agree.”", why:"It names disagreement, but softens it with “I’m not sure”."},
      {t:"“I disagree.”", why:"Direct but neutral: a plain statement with no softener and no insult."},
      {t:"“That’s simply wrong.”", why:"Most direct: “simply wrong” leaves no room for the other view and can sound dismissive in a seminar."}
    ]},
    {id:"e1u4-l2-x5", type:"spot", q:"Tap every **softening** device in Hana’s seminar turn.", ask:"is a softener", parts:[
      {t:"I wonder if", flag:true, why:"A tentative opening: it presents the point as a possibility to consider."},
      " ",
      {t:"the survey", flag:false, why:"Content: what she is talking about."},
      " ",
      {t:"might", flag:true, why:"A modal verb that makes the claim less absolute."},
      " ",
      {t:"have missed", flag:false, why:"The main verb: the content of her claim."},
      " ",
      {t:"older residents", flag:false, why:"Content: the group she thinks was missed."},
      ". The questionnaire was ",
      {t:"a bit", flag:true, why:"A small qualifier that tones down “long”."},
      " long, and it was ",
      {t:"only online", flag:false, why:"Content: a fact about the method, and her reason. It isn’t softening anything."},
      ". ",
      {t:"I can see why", flag:true, why:"Recognising the other view first is a classic softener before a disagreement."},
      " they chose that, but…"
    ]},
    {id:"e1u4-l2-x6", type:"match", q:"Match each phrase to what the speaker is doing.", pairs:[
      ["“Sorry, I didn’t catch the last part.”","Asking to hear it again","The speaker heard something but not clearly enough: a request to repeat."],
      ["“What do you mean by ‘precarity’ here?”","Asking about a word’s meaning","It targets one word and its meaning in this context."],
      ["“So are you saying that cost matters more?”","Checking understanding","It restates the point so the speaker can confirm or correct it."],
      ["“Let me put that another way.”","Repairing your own point","The speaker rephrases what they said themselves."],
      ["“Building on what Amara said…”","Developing someone else’s point","It links the new point to an earlier one."]
    ]},
    {id:"e1u4-l2-x7", type:"mcq", q:"Sione rarely speaks in seminars, but his written work shows he reads carefully. What is the most reasonable conclusion for his tutor?", options:[
      {t:"His silence could have many causes, such as different classroom norms, needing time to phrase ideas, or personality; it’s worth finding out and making room for him.", ok:true, why:"Silence isn’t always disengagement. Asking and adjusting (wait time, pair work, inviting him in) is fair and effective."},
      {t:"He isn’t interested in the subject.", why:"His careful written work suggests the opposite. Reading silence as lack of interest is a common mistake."},
      {t:"His English is too weak for the course.", why:"There is no evidence for this, and many fluent speakers are quiet in discussions for other reasons."},
      {t:"Students from his country are always quiet.", why:"This is a stereotype. People within any country vary enormously."}
    ]}
   ],
   apply:{intro:"Use these tasks before and after real seminars, or with a friend or study group.", tasks:[
    {t:"Build your own discussion phrase bank", how:["For each function (get in, agree, partly agree, disagree, build on, ask for clarification, check), choose two phrases from this lesson that feel natural to you.","Change them so they sound like you.","Say each one aloud three times, so it’s ready when you need it."], write:"Function → my two phrases…"},
    {t:"Watch how a discussion works", how:["Find a recorded panel discussion, debate or seminar (many universities publish them), or notice your next live seminar.","For ten minutes, note how people get in, hold their turn and hand over.","Note any softeners and any clarification requests."], write:"How people got in… Softeners I heard… Clarification requests… One phrase I’ll borrow…"},
    {t:"Prepare for, then reflect on, your next discussion", how:["Before: write three points with their first sentences, and one question.","During: aim to speak in the first ten minutes.","After: note what worked and what you’ll try next time."], write:"My three points and question… When I spoke… What worked… Next time I’ll…"}
   ], proof:"A personal phrase bank for discussions, notes on how one real discussion worked, and a before-and-after reflection on your own participation."},
   read:[
     {book:"uefap", where:"“Speaking” section", note:"Look for the pages on seminars and discussions, for more phrases and practice."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u4-l3", title:"Presenting in English", minutes:55,
   hook:{q:"Listeners can’t re-read a sentence they missed. Compared with a written paper, what does a good spoken presentation usually need more of?", options:["Longer, more complex sentences","Signposting, repetition of key terms and short summaries","More text on each slide","A faster pace, to fit more in"], answer:1, reveal:"**More signposting and repetition.** Things that would feel repetitive on paper, such as an outline at the start, “my second point is…” and a summary at the end, are what let listeners keep up. This lesson covers writing for the ear, a structure the audience can hear, the language of charts and change, rehearsing, and handling questions."},
   goals:[
     "Turn written-style sentences into sentences that are easy to follow by ear",
     "Use phrases for each stage of a presentation, from opening to inviting questions",
     "Describe charts and changes accurately: rise and raise, from, to and by, percent and percentage points",
     "Handle questions: check, buy time politely, admit what you don’t know and defer when needed"
   ],
   learn:[
    {h:"Writing for the ear", body:[
      {lead:"Listeners hear each sentence once, at your speed. So good spoken academic English is plainer than written academic English, without being less clever."},
      "Research Skills covers planning a research talk, slides and posters in {{research-presentations}}, and Digital Foundations covers presenting in general in {{presenting-skills}}. This lesson focuses on the **language**.",
      {table:[
        ["Written style","Spoken style"],
        ["“Notwithstanding the limited sample, the findings indicate a substantial reduction in absences following the intervention.”","“Our sample was small. But after the programme started, absences fell a lot: by about a third.”"],
        ["“This phenomenon…” (five sentences after the term was used)","Repeat the term: “This heat effect…”"],
        ["“approximately 31.7%”","Say “almost a third”, and put 31.7% on the slide"]
      ]},
      {list:[
        "**One idea per sentence.** Put the subject and the verb early.",
        "**Repeat key terms.** Written English often varies words to avoid repetition; listeners find a repeated term easier than a new synonym that might mean something else.",
        "**Round numbers when you speak**, and show the exact figure on the slide.",
        "**Say what’s coming**, and say when you’ve finished a part."
      ]},
      {tip:"Repetition that would feel heavy on paper helps in a talk. Previewing at the start and summing up at the end are not wasted time."}
    ]},
    {h:"A structure the audience can hear", body:[
      "A clear [[presentation-structure|presentation structure]] has an opening, a body in a few parts and an ending, with spoken signposts at every boundary. These are the same kind of signposts you met in lectures, now used by you.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="e1u4a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="20" y="10" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="31" text-anchor="middle">1 Opening</text><text class="s" x="170" y="50" text-anchor="middle">who you are · topic · why it matters</text><path class="d-ink" d="M170,66 L170,82" stroke-width="2" marker-end="url(#e1u4a3)"/><rect class="d-lup" x="20" y="84" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="105" text-anchor="middle">2 Outline</text><text class="s" x="170" y="124" text-anchor="middle">“I’ve divided my talk into three parts.”</text><path class="d-ink" d="M170,140 L170,156" stroke-width="2" marker-end="url(#e1u4a3)"/><rect class="d-sage" x="20" y="158" width="300" height="74" rx="6" stroke-width="2"/><text x="170" y="179" text-anchor="middle">3 Body: two to four parts</text><text class="s" x="170" y="198" text-anchor="middle">“That brings me to my second point.”</text><text class="s" x="170" y="216" text-anchor="middle">“As you can see on this graph…”</text><path class="d-ink" d="M170,232 L170,248" stroke-width="2" marker-end="url(#e1u4a3)"/><rect class="d-gold" x="20" y="250" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="271" text-anchor="middle">4 Conclusion</text><text class="s" x="170" y="290" text-anchor="middle">“To sum up…” · main message again</text><path class="d-ink" d="M170,306 L170,322" stroke-width="2" marker-end="url(#e1u4a3)"/><rect class="d-rose" x="20" y="324" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="345" text-anchor="middle">5 Questions</text><text class="s" x="170" y="364" text-anchor="middle">“I’m happy to take any questions.”</text><text class="s" x="170" y="406" text-anchor="middle">Signpost every boundary between boxes.</text></svg>', alt:"Five boxes joined by arrows. 1 Opening: who you are, topic, why it matters. 2 Outline: I’ve divided my talk into three parts. 3 Body, two to four parts: That brings me to my second point; As you can see on this graph. 4 Conclusion: To sum up, main message again. 5 Questions: I’m happy to take any questions. Note: signpost every boundary between boxes.", cap:"A common shape for a short academic presentation. Your course or conference may ask for a different one."},
      {table:[
        ["Stage","Useful phrases"],
        ["Opening","“Good morning, everyone. My name is Oluwaseun, and I’m a second-year student in public health.”"],
        ["Topic and why it matters","“Today I’m going to talk about… This matters because…”"],
        ["Outline","“I’ve divided my talk into three parts. First…, then…, and finally…”"],
        ["Moving between parts","“That brings me to my second point.” · “So far I’ve talked about… Now let’s look at…”"],
        ["Referring to slides","“As you can see on this slide…” · “This graph shows…” · “Let’s look more closely at…”"],
        ["Concluding","“To sum up…” · “The main point I’d like you to take away is…”"],
        ["Inviting questions","“Thank you for listening. I’m happy to take any questions.”"]
      ]},
      {warn:"You don’t need to begin with “Sorry for my English.” It asks the audience to listen for problems instead of ideas. If something comes out wrong, correct it calmly and keep going: speakers do this in every language."}
    ]},
    {h:"Describing charts and change", body:[
      "Talks with data need precise language for trends, and small words make big differences.",
      {table:[
        ["Meaning","Verbs (used here with no object)","Nouns"],
        ["Go up","rise, increase, grow, climb","a rise, an increase, growth"],
        ["Go down","fall, decrease, decline, drop","a fall, a decrease, a decline, a drop"],
        ["Stay the same","remain stable, level off","a plateau"],
        ["Reach the top","peak (at)","a peak"]
      ]},
      "Describe the size and speed of change with an **adverb** after a verb or an **adjective** before a noun: “rose **sharply**” = “a **sharp** rise”; also steadily/steady, slightly/slight, gradually/gradual, dramatically/dramatic.",
      {h:"Four points that often go wrong"},
      {list:[
        "**rise or raise?** “Rise” has no object: “Prices **rose**.” “Raise” needs one: “The council **raised** prices.” The forms are rise–rose–risen and raise–raised–raised. (Fall works like rise. Some other trend verbs, such as increase, decrease, grow and drop, can also take an object: “The council **increased** fees.”)",
        "**from, to, by**: “Visits rose **from** 2,000 **to** 2,500” gives the start and end. “Visits rose **by** 500” gives the size of the change. With a noun, use “of”: “a rise **of** 500”.",
        "**percent or percentage points?** If a rate goes from 20% to 30%, it has risen by **10 percentage points**, which is a **50% increase** (10 is half of 20). Say which one you mean.",
        "**“the data show” or “the data shows”?** Both are used in academic English today. Many fields and style guides prefer the plural; choose one and stay consistent."
      ]},
      {ex:"“This graph shows the share of students who cycle to campus, from 2019 to 2024. It rose steadily, from 12% to 18%, and then levelled off. That’s an increase of six percentage points.”", label:"Worked example (invented data)"}
    ]},
    {h:"Notes, rehearsal and your voice", body:[
      {list:[
        "**Speak from notes, not a script, if you can**: key words and phrases for each slide in your [[speaker-notes]], so you can look up and talk. If a script gives you confidence, which is common when presenting in another language, write it in spoken style, mark pauses (/) and stressed words (CAPITALS), and rehearse until you only glance at it.",
        "**Check the pronunciation of key terms and names** in a learner dictionary with audio, and practise them inside phrases, not alone. Lesson 4 shows how to mark stress.",
        "**Rehearse aloud with a timer**, at least twice. Recording yourself privately and listening back shows where you rush or where a key word is unclear.",
        "**Slow down at important points and pause after them.** A pause feels much longer to you than to the audience, and it gives them time to think.",
        "**Make numbers unmistakable.** “Fifteen” and “fifty” can sound alike, especially in a large room. Stress the end of fif**TEEN** clearly (FIFty stresses the start), put the number on the slide, or add a check: “fifteen, one-five”."
      ]},
      {tip:"Write the first two sentences of your talk and of your conclusion word for word, and learn them. Starting and ending smoothly calms nerves for the rest."}
    ]},
    {h:"Handling questions", body:[
      "The [[q-and-a|Q&A]] is where many people presenting in a second language feel most nervous, because they can’t prepare the exact words. But you can prepare the phrases **around** the answer.",
      {table:[
        ["You want to…","Phrases"],
        ["Welcome the question","“Thank you, that’s a good question.” · “Thanks for raising that.”"],
        ["Check you understood","“If I understand correctly, you’re asking whether…?” · “Sorry, could you repeat the question?”"],
        ["Buy a moment to think","“That’s an interesting point. Let me think about that for a moment.” · “Let me go back to the slide on…”"],
        ["Answer when unsure","“I’m not sure, but my guess would be…” · “I don’t know, but I’d be happy to look into it.”"],
        ["Defer","“That’s a bigger question than I can answer now. Could we talk after the session?”"],
        ["Respond to a comment","“Thank you, that’s a useful suggestion.”"],
        ["Check they’re satisfied","“Does that answer your question?”"]
      ]},
      "Buying time isn’t a trick: everyone does it, in every language. A short pause before answering looks thoughtful, not weak. For Q&A habits specific to research talks, such as repeating the question for the room and handling long comments, see {{research-presentations}}.",
      {tip:"List the five questions you most expect, or most fear. Write the first sentence of each answer."}
    ]},
    {h:"Confidence and your accent", body:[
      "You don’t need a “native” accent to present well. Audiences at universities and conferences are international, and many listeners use English as an additional language themselves. What helps them most is a clear structure, stressed key words, sensible pauses, a steady pace and good slides. Lesson 4 explains each one.",
      "If a word won’t come, describe it: “the… the process where cells divide.” Paraphrasing in the moment is a skill, not a failure.",
      {key:"A clear structure delivered at a calm pace does more for your audience than any particular accent."}
    ]}
   ],
   try:[
    {id:"e1u4-l3-x1", type:"mcq", q:"Which version is easiest for an audience to follow **by ear**?", options:[
      {t:"“We asked 200 nurses about night shifts. Most said they slept badly. That was our main finding.”", ok:true, why:"Short sentences, one idea each, subject and verb early, and a clear signal of what matters."},
      {t:"“Night-shift-related sleep disturbance, reported by the majority of the 200 nurses surveyed, constituted the principal finding.”", why:"Fine for a paper, hard by ear: a long noun phrase comes before the verb, so listeners must hold it all in memory."},
      {t:"“The principal finding, which, as the 200 nurses we surveyed reported, concerned their sleep, was negative.”", why:"Interruptions inside the sentence make listeners wait for the point, and “negative” is vague."},
      {t:"“The finding, with regard to the survey and its participants, was related to sleep.”", why:"Vague and roundabout: it never says what was found."}
    ]},
    {id:"e1u4-l3-x2", type:"order", q:"Put these lines from Lucía’s presentation in the order they would usually come.", items:[
      {t:"“Good afternoon. I’m Lucía, and I study urban planning.”", why:"Open by greeting the audience and introducing yourself."},
      {t:"“Today I’ll talk about shade at bus stops, and why it matters for health.”", why:"Then the topic and why it matters."},
      {t:"“I’ve divided my talk into three parts.”", why:"The outline tells listeners the shape of the talk."},
      {t:"“That brings me to my second point: the cost.”", why:"A transition inside the body, between parts."},
      {t:"“To sum up, trees cooled stops more than shelters did.”", why:"The conclusion repeats the main message."},
      {t:"“Thank you for listening. I’m happy to take questions.”", why:"Finally, thank the audience and invite questions."}
    ]},
    {id:"e1u4-l3-x3", type:"mcq", q:"Choose the correct sentence.", options:[
      {t:"“The number of applications rose sharply in 2024.”", ok:true, why:"“Rise” has no object, and its past form is “rose”. “Sharply” is an adverb describing the verb."},
      {t:"“The number of applications raised sharply in 2024.”", why:"“Raise” needs an object (someone raises something). Applications don’t raise anything here, so the verb is “rose”."},
      {t:"“The number of applications rised sharply in 2024.”", why:"“Rise” is irregular: rise–rose–risen. “Rised” is not a standard form."},
      {t:"“The number of applications rose sharp in 2024.”", why:"After a verb you need the adverb “sharply”. The adjective “sharp” goes before a noun: “a sharp rise”."}
    ]},
    {id:"e1u4-l3-x4", type:"mcq", q:"Library visits were 2,000 a month and are now 2,500 a month. Which sentence describes this correctly?", options:[
      {t:"“Monthly library visits rose by 500.”", ok:true, why:"“By” gives the size of the change: 2,500 − 2,000 = 500."},
      {t:"“Monthly library visits rose to 500.”", why:"“To” gives the end point. This says visits ended at 500, which is wrong: they ended at 2,500."},
      {t:"“Monthly library visits rose from 2,500 to 2,000.”", why:"The numbers are reversed: this would be a fall."},
      {t:"“There was a rise by 500 in monthly library visits.”", why:"After the noun “a rise”, use “of”: “a rise of 500”."}
    ]},
    {id:"e1u4-l3-x5", type:"number", q:"The share of students who walk to campus fell from 40% to 30%. By how many **percentage points** did it fall?", answer:10, tol:0, unit:"percentage points", why:"40 − 30 = 10 percentage points. (As a percentage of the starting value it is a 25% fall, because 10 is a quarter of 40. That’s why it matters to say which one you mean.)", wrongs:[
      {v:25, tol:0, why:"25 is the percentage change (10 ÷ 40 = 0.25). The question asks for percentage points, which is simply the difference between the two rates."},
      {v:30, tol:0, why:"30% is the new share, not the size of the fall."},
      {v:40, tol:0, why:"40% is where the share started. The fall is the difference between 40 and 30."}
    ]},
    {id:"e1u4-l3-x6", type:"sort", q:"After Tomás’s talk, someone asks a question he hadn’t expected. Sort each response: **helpful** or **unhelpful**?", buckets:["Helpful","Unhelpful"], items:[
      {t:"“If I understand correctly, you’re asking whether the results apply to rural schools?”", b:0, why:"Checking the question avoids answering the wrong one and gives him a moment to think."},
      {t:"“That’s an interesting point. Let me think for a moment.”", b:0, why:"An honest, normal way to buy time."},
      {t:"“I don’t know, but I’d be happy to look into it and email you.”", b:0, why:"Honest, and it offers a real follow-up."},
      {t:"A confident answer he isn’t sure is true", b:1, why:"A confident wrong answer damages trust far more than “I don’t know”."},
      {t:"“That’s not relevant to my talk.”", b:1, why:"Dismissive. The question may point to something important, and the reply closes the conversation."},
      {t:"Silence, then moving straight to the next question", b:1, why:"Ignoring a question seems discourteous and wastes a chance to learn from it."}
    ]},
    {id:"e1u4-l3-x7", type:"mcq", q:"Fatima is asked a question she understands but needs a few seconds to think about. What is the best thing to say first?", options:[
      {t:"“That’s a good question. Let me think about that for a moment.”", ok:true, why:"It welcomes the question and honestly signals a short pause. Audiences expect this."},
      {t:"“Sorry, my English is not good.”", why:"Her English isn’t the problem: she understood the question. This apology moves attention away from her ideas."},
      {t:"“Could you repeat the question?”", why:"Useful when you haven’t understood, but she has. Asking for a repeat just to gain time can confuse the questioner."},
      {t:"Start answering immediately, then change her answer halfway", why:"Rushing produces a muddled answer. A few seconds of thinking time gives a clearer one."}
    ]}
   ],
   apply:{intro:"These tasks need only paper or a notes app; a phone voice recorder helps with the second.", tasks:[
    {t:"Rewrite a written paragraph for speaking", how:["Take one paragraph from something you have written, or from an article you read.","Rewrite it to be spoken: one idea per sentence, subject and verb early, key terms repeated, numbers rounded.","Read both versions aloud. Which is easier to follow?"], write:"Original paragraph… Spoken version… What I changed…"},
    {t:"Script the signposts for a three-minute talk", how:["Choose a topic you know well.","Write only the signposts: opening, topic and why it matters, outline, transitions between two or three parts, conclusion, invitation to ask questions.","Give the talk aloud from those signposts and record it privately. Listen back: is the structure easy to hear?"], write:"My signposts, in order… What I noticed when I listened back…"},
    {t:"Describe a chart aloud", how:["Find a chart in a news article, a report or a textbook.","Write three or four sentences describing it: what it shows, the main trend, one exact figure, and the size of a change.","Check rise/raise, from/to/by and percent versus percentage points."], write:"Chart and source… My description… Language points I checked…"},
    {t:"Prepare for questions", how:["List five questions an audience might ask about your topic.","Write the first sentence of each answer, using a phrase from this lesson.","Write one phrase you will use if you don’t know the answer."], write:"Questions and my first sentences… My “I don’t know” phrase…"}
   ], proof:"A paragraph rewritten for speaking, a signpost script you have recorded and checked, a short chart description, and prepared openings for five questions."},
   read:[
     {book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”", note:"Outlining a talk, signpost language and visuals."},
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u4-l4", title:"Pronunciation for intelligibility", minutes:60,
   hook:{q:"In a well-known study, listeners wrote down exactly what second-language speakers of English said, and also rated how strong each speaker’s accent sounded. What did the researchers find?", options:["The stronger the accent, the less listeners understood, without exception","Some speakers with strong accents were still understood completely","Only speakers with no accent were understood","Accent strength and understanding turned out to be the same thing"], answer:1, reveal:"**Strongly accented speech could still be fully understood.** Murray Munro and Tracey Derwing (1995) found that accent, intelligibility and how easy speech was to follow were related but partly independent. Accent is not the problem to fix; being understood is the goal. This lesson shows which features matter most for that, how word stress, sentence stress, chunking and intonation work, and how to practise."},
   goals:[
     "Explain the difference between accent, intelligibility and comprehensibility",
     "Describe Jenkins’s Lingua Franca Core and the debate about it, including word stress",
     "Find and use word stress, including patterns in word families and noun–verb pairs",
     "Use sentence stress, chunking, pausing and intonation to make your meaning clear"
   ],
   learn:[
    {h:"Intelligible, not “native”: the goal", body:[
      {lead:"Being understood and sounding like someone from London or New York are two different goals. The first is achievable for everyone, and it is what matters for study."},
      "The researchers Murray Munro and Tracey Derwing separate three things that people often mix up:",
      {table:[
        ["Term","The question it answers"],
        ["[[accent|Accent]] (accentedness)","How different does this speech sound from the listener’s own variety?"],
        ["[[intelligibility|Intelligibility]]","How much of the message does the listener actually understand? (For example, can they write down the words?)"],
        ["[[comprehensibility|Comprehensibility]]","How easy or hard does the listener find it to understand?"]
      ]},
      "Their 1995 study, and many since, found these are related but partly independent: speech can be strongly accented and still completely intelligible. Your accent is part of who you are and where you come from; there is nothing wrong with keeping it. The things worth working on are the ones that cause misunderstanding or make listening hard work.",
      "The pronunciation researcher John Levis (2005) described two possible goals: the **nativeness principle** (try to sound like a native speaker) and the **intelligibility principle** (try to be understood). Many pronunciation researchers and teachers now favour the second, as more realistic and more useful.",
      {tip:"Understanding is a two-way job. Listeners get better at accents they hear often, so a group that talks regularly understands each other more easily over time. First-language speakers share the responsibility too."}
    ]},
    {h:"What matters most for international listeners", body:[
      "Jennifer Jenkins (2000) studied where communication broke down between speakers of English from different first languages. She proposed a [[lingua-franca-core|Lingua Franca Core]]: the pronunciation features that seemed most important for intelligibility when English is used as a [[lingua-franca|lingua franca]].",
      {table:[
        ["Core: prioritise","Non-core in Jenkins’s proposal"],
        ["Most consonant sounds","The “th” sounds in “thin” and “this”"],
        ["Consonant clusters at the start and in the middle of words (the “pr” in “product”)","Exact vowel quality, as long as you are consistent"],
        ["The difference between long and short vowels (“sheep” and “ship”)","Weak forms, such as “to” said as /tə/"],
        ["Main stress in a phrase, especially for contrast","Word stress, pitch patterns and rhythm"]
      ]},
      "The core is a guide, not a rulebook. It came from a particular set of data, Jenkins presented it as something to test further, and parts of it are debated. For example, Jenkins put word stress outside the core, but John Field (2005) found that misplaced word stress can seriously reduce intelligibility, especially when the stress moves to a later syllable than expected.",
      "So a sensible plan is to prioritise the core features **and** to learn the stress of the key words in your field.",
      {warn:"You don’t have to master “th” before you speak in public. Many established varieties of English use other sounds for it: for example, many speakers in Ireland, the Caribbean, India and Nigeria use sounds close to t and d, and many in London use f and v. Listeners understand them."}
    ]},
    {h:"Word stress", body:[
      "In a word with more than one syllable, one syllable is usually stronger than the others: longer, louder, often with a change in pitch, and with a clearer vowel. That is [[word-stress|word stress]]. In “baNAna” the middle syllable stands out. Listeners use stress to recognise words quickly, so unexpected stress can make a word sound like a different word, or like no word at all.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">One word family, three stress patterns</text><text class="s" x="170" y="38" text-anchor="middle">big circle = stressed syllable</text><text x="14" y="78">PHOtograph</text><circle class="d-rose" cx="190" cy="73" r="15" stroke-width="2"/><circle class="d-soft" cx="230" cy="73" r="7" stroke-width="2"/><circle class="d-soft" cx="260" cy="73" r="7" stroke-width="2"/><text x="14" y="138">phoTOgrapher</text><circle class="d-soft" cx="180" cy="133" r="7" stroke-width="2"/><circle class="d-rose" cx="215" cy="133" r="15" stroke-width="2"/><circle class="d-soft" cx="250" cy="133" r="7" stroke-width="2"/><circle class="d-soft" cx="280" cy="133" r="7" stroke-width="2"/><text x="14" y="198">photoGRAPHic</text><circle class="d-soft" cx="180" cy="193" r="7" stroke-width="2"/><circle class="d-soft" cx="210" cy="193" r="7" stroke-width="2"/><circle class="d-rose" cx="245" cy="193" r="15" stroke-width="2"/><circle class="d-soft" cx="280" cy="193" r="7" stroke-width="2"/><text class="s" x="170" y="246" text-anchor="middle">Adding an ending can move the stress.</text><text class="s" x="170" y="264" text-anchor="middle">Learn the stress with the word,</text><text class="s" x="170" y="282" text-anchor="middle">as you learn its spelling.</text></svg>', alt:"Three words with a circle for each syllable, large for the stressed one. PHOtograph: large, small, small. phoTOgrapher: small, large, small, small. photoGRAPHic: small, small, large, small. Caption: adding an ending can move the stress; learn the stress with the word, as you learn its spelling.", cap:"Stress patterns as shown in learner dictionaries of UK and US English."},
      "In many varieties, unstressed vowels weaken to a short, relaxed sound called schwa (/ə/, the first sound in “about”). Some varieties, including the English of many speakers in Nigeria, India and Singapore, reduce vowels less and give syllables more even length. That is a difference between varieties, not an error.",
      {h:"Patterns that help"},
      {list:[
        "**Word families often move the stress**: PHOtograph, phoTOgrapher, photoGRAPHic · eCONomy, ecoNOMic · ANalyse, aNALysis, anaLYTical.",
        "**Before some endings**, the stress usually falls on the syllable just before the ending: **-tion/-sion** (inforMAtion, deCIsion), **-ic/-ics** (scienTIFic, ecoNOMic, staTIStics), **-ity** (uniVERsity, aBILity). There are exceptions, such as ARabic, POLitics and, in UK English, TELevision.",
        "**Two-syllable noun–verb pairs** often stress the first syllable in the noun and the second in the verb: a REcord / to reCORD, a PREsent / to preSENT, an INcrease / to inCREASE. Not all pairs change: a rePLY / to rePLY, a COMment / to COMment."
      ]},
      {tip:"Learner dictionaries mark the stressed syllable with a small raised mark ˈ placed **before** it: photography is /fəˈtɒɡrəfi/ in UK transcription. Most online learner dictionaries also play UK and US audio."},
      "Some words have more than one accepted pattern. Dictionaries list both REsearch and reSEARCH, in both UK and US English. When a dictionary gives two, either is fine."
    ]},
    {h:"Sentence stress and weak forms", body:[
      "[[sentence-stress|Sentence stress]] works the same way at a larger scale. Content words (nouns, main verbs, adjectives, adverbs) are usually stressed; function words (the, a, of, to, and, is) usually aren’t. In each phrase, one word usually carries the **main stress**: often the last content word, or the word with new or contrasting information.",
      {ex:"Neutral: “We measured the temperature at twenty SCHOOLS.”\nContrast: “Did you measure humidity?” “No, we measured TEMperature.”\nCorrection: “Is the seminar on Thursday?” “No, it’s on TUESday.”", label:"The main stress moves to the new or contrasting word", mono:true},
      "Moving the main stress changes the message. “The SEMinar is on Tuesday” answers “What’s on Tuesday?”; “The seminar is on TUESday” answers “When is the seminar?”. Jenkins counted this kind of main stress as core, because getting it wrong can mislead.",
      "Many speakers shorten function words into [[weak-form|weak forms]]: “to” becomes /tə/, “and” becomes /ən/, “can” becomes /kən/. Jenkins found weak forms aren’t needed for being understood internationally, so you don’t have to produce them. **Recognising** them is a different matter: many lecturers use them, and knowing them makes fast speech much easier to follow. “We want to compare” can sound like “we wanna compare”."
    ]},
    {h:"Chunking and pausing", body:[
      "Speakers divide speech into [[thought-group|thought groups]]: short groups of words that belong together, each with one main stress, separated by small pauses or changes in pitch. Good chunking lets listeners process one piece at a time. A pause in the wrong place (“The results of the / study show”) breaks a phrase apart and makes the listener work harder.",
      {ex:"In our survey / of two hundred STUdents, / most said they CYCled / when the weather was GOOD, // but in WINter / the numbers fell SHARPly.", label:"A marked-up script: / short pause · // longer pause · CAPITALS main stress", mono:true},
      {list:[
        "Pause where writing would have a comma or full stop (period), and between clauses.",
        "Pause briefly before and after a key point, to frame it.",
        "Keep grammatical units together: “the / results” and “of / the study” split units that belong together.",
        "Slightly slower with good pauses is clearer than fast without them."
      ]}
    ]},
    {h:"Intonation", body:[
      "[[intonation|Intonation]] is the rise and fall of pitch in speech. It varies a lot between varieties and between individuals, so these are tendencies, not rules:",
      {list:[
        "A **fall** often signals “finished” or “this is a statement”.",
        "A **rise** often signals “not finished”, “more is coming” or a question.",
        "In **lists**, many varieties rise (or stay level) on each item before the last and fall on the last one: “We visited Accra ↗, Kumasi ↗ and Tamale ↘.” The fall tells listeners the list is complete.",
        "**Questions**: wh-questions (what, why, how…) often fall; yes/no questions often rise, though falls are common too.",
        "A statement said with a rise can work as a question: “You’re presenting tomorrow ↗?” In some varieties, including some Australian, New Zealand and North American speech, rises at the end of statements are common and don’t mean a question."
      ]},
      {key:"Pitch tells listeners what is finished and what is still coming. Use a clear fall to finish your important points."}
    ]},
    {h:"How to practise", body:[
      {list:[
        "**Use a learner dictionary with audio**, such as the Cambridge Dictionary or Oxford Learner’s Dictionaries, for the key words in your field. Note the stress mark and listen to the UK or US recording, whichever you hear more.",
        "**Record yourself privately** reading a paragraph. Mark it up first (pauses, main stresses), then listen back for chunks, stress and pace, not for accent.",
        "**Shadow**: play a short clip with a transcript, and speak along just behind the speaker, copying their rhythm, stress and pauses. The aim is rhythm, not their accent.",
        "**Practise long and short vowels** in pairs where length changes the word: ship/sheep, full/fool, live/leave.",
        "**Ask for feedback on clarity**: “Was anything hard to follow?” A listener with a different first language from yours is especially useful."
      ]},
      {warn:"Be cautious of courses that promise to “remove” or “eliminate” your accent. The goal research supports is being easy to understand, not sounding like someone else."}
    ]}
   ],
   try:[
    {id:"e1u4-l4-x1", type:"mcq", q:"Dmitri gives a talk. Everyone can hear he grew up speaking Russian, but when the audience later writes down what he said, they get every word right, and they say he was easy to follow. Which description fits best?", options:[
      {t:"A noticeable accent, high intelligibility and high comprehensibility", ok:true, why:"Accent is how different he sounds; intelligibility is how much listeners understood (every word); comprehensibility is how easy they found it (easy). These can differ, as here."},
      {t:"Low intelligibility, because he has an accent", why:"The audience understood every word, so intelligibility was high. An accent doesn’t by itself reduce intelligibility."},
      {t:"No accent, because he was understood", why:"Being understood doesn’t mean having no accent. The two are partly independent."},
      {t:"Low comprehensibility, because accent and comprehensibility are the same thing", why:"They aren’t the same: listeners said he was easy to follow, which is high comprehensibility."}
    ]},
    {id:"e1u4-l4-x2", type:"sort", q:"In Jenkins’s (2000) Lingua Franca Core proposal, is each feature **core** or **non-core**?", buckets:["Core","Non-core"], items:[
      {t:"Long vs short vowels, as in “sheep” and “ship”", b:0, why:"Vowel length is core: losing it can turn one word into another."},
      {t:"The “th” sounds in “thin” and “this”", b:1, why:"Jenkins found substitutes for “th” rarely caused misunderstanding, so it is non-core."},
      {t:"All the consonants at the start of “product”", b:0, why:"Keeping word-initial clusters intact is core; dropping a sound there can make a word unrecognisable."},
      {t:"Weak forms, such as “to” said as /tə/", b:1, why:"Weak forms are non-core for speaking, though recognising them helps listening."},
      {t:"Main stress for contrast (“No, on TUESday”)", b:0, why:"Main (nuclear) stress is core, because misplacing it can mislead."},
      {t:"The exact quality of vowels, if consistent", b:1, why:"Jenkins allowed varied vowel qualities if consistent; one vowel, as in “nurse”, was the exception."}
    ]},
    {id:"e1u4-l4-x3", type:"mcq", q:"In learner dictionaries of UK and US English, which syllable of “photography” carries the main stress?", options:[
      {t:"The second: phoTOgraphy", ok:true, why:"The stress mark comes before the second syllable: /fəˈtɒɡrəfi/ (UK), /fəˈtɑːɡrəfi/ (US). The ending moves the stress from PHOtograph."},
      {t:"The first: PHOtography", why:"That is the stress of “photograph”. Adding “-y” moves it to the second syllable."},
      {t:"The third: photoGRAphy", why:"The third syllable is unstressed. Stressing it is the pattern of “photographic”, not “photography”."},
      {t:"All syllables equally", why:"English words of several syllables usually have one main stress. Even varieties with more even syllables keep the stress on the second one here."}
    ]},
    {id:"e1u4-l4-x4", type:"match", q:"Match each word to its stress pattern, as given in learner dictionaries (capitals = stressed syllable).", pairs:[
      ["economy","eCONomy","Stress on the second syllable: e-CON-o-my."],
      ["economic","ecoNOMic","Words ending in -ic usually stress the syllable just before the ending."],
      ["analysis","aNALysis","Stress on the second syllable, unlike “analyse” (ANalyse)."],
      ["university","uniVERsity","Words ending in -ity usually stress the syllable just before the ending."],
      ["information","inforMAtion","Words ending in -tion usually stress the syllable just before the ending."]
    ]},
    {id:"e1u4-l4-x5", type:"sort", q:"The capitals show the stressed syllable. Is the word in capitals used as a **noun** or a **verb**?", buckets:["Noun","Verb"], items:[
      {t:"“We will preSENT our results on Friday.”", b:1, why:"Verb (to present): stress on the second syllable."},
      {t:"“She gave me a PREsent.”", b:0, why:"Noun (a gift): stress on the first syllable."},
      {t:"“There was an INcrease in fees.”", b:0, why:"Noun (an increase): first-syllable stress."},
      {t:"“Prices may inCREASE next year.”", b:1, why:"Verb (to increase): second-syllable stress."},
      {t:"“Please reCORD the interview.”", b:1, why:"Verb (to record): second-syllable stress."},
      {t:"“Keep a REcord of your sources.”", b:0, why:"Noun (a record): first-syllable stress."}
    ]},
    {id:"e1u4-l4-x6", type:"spot", q:"Ana asks: “Is the deadline on Friday the tenth?” Ben replies: “No, it’s on Friday the twelfth.” Tap the word in Ben’s reply that should carry the **main stress**.", ask:"carries the main stress", parts:[
      "No, ",
      {t:"it’s", flag:false, why:"A function word with no new information. It is usually unstressed."},
      " ",
      {t:"on", flag:false, why:"A preposition: a function word, usually unstressed."},
      " ",
      {t:"Friday", flag:false, why:"Friday was already in Ana’s question, so it isn’t new. Stressing it would suggest the day was wrong."},
      " ",
      {t:"the", flag:false, why:"An article: almost never the main stress."},
      " ",
      {t:"twelfth", flag:true, why:"This is the new, corrected information, so it takes the main stress: “No, it’s on Friday the TWELFTH.”"},
      "."
    ]},
    {id:"e1u4-l4-x7", type:"mcq", q:"Where is the most natural place for a short pause in this sentence? “The results of the study show a clear rise in attendance.”", options:[
      {t:"“The results of the study / show a clear rise in attendance.”", ok:true, why:"The pause comes between the long subject and the verb, so each chunk is a complete unit of meaning."},
      {t:"“The results of the / study show a clear rise in attendance.”", why:"This splits “the study” and leaves “of the” hanging, so listeners lose the phrase."},
      {t:"“The / results of the study show a clear rise in attendance.”", why:"A pause after “The” separates an article from its noun, which belongs with it."},
      {t:"“The results of the study show a clear / rise in attendance.”", why:"This separates the adjective “clear” from its noun “rise”, which belong in one chunk."}
    ]},
    {id:"e1u4-l4-x8", type:"mcq", q:"In many varieties of English, how does a speaker usually show that the last item of a list has arrived: “We need a laptop, a microphone and a projector”?", options:[
      {t:"The pitch falls on the last item, “projector”", ok:true, why:"Items before the last often rise or stay level (“more is coming”), and the fall on the last item signals the list is complete."},
      {t:"The pitch rises sharply on the last item", why:"A rise usually signals that more is coming, which is the opposite of what the speaker wants here."},
      {t:"They say every item at exactly the same pitch", why:"A flat pitch gives listeners no cue that the list has ended."},
      {t:"They stress the word “and”", why:"“And” is a function word and is usually unstressed. The signal is the fall on the final item."}
    ]}
   ],
   apply:{intro:"You need a phone or computer that can record audio, and a learner dictionary with audio. Your recordings are for you only: you don’t need to share them.", tasks:[
    {t:"Mark up, record and review a paragraph", how:["Choose a paragraph of about 80–100 words from your field.","Mark it: / for short pauses, // for longer ones, CAPITALS for the main stress in each chunk.","Record yourself reading it (iPhone: Voice Memos; Android: the built-in recorder app, such as Recorder on Pixel phones or Voice Recorder on Samsung phones; names vary by maker; Windows: Sound Recorder; Mac: Voice Memos).","Listen back. Did your pauses and stresses match your marks? Re-record once, then delete the files if you like."], write:"My marked paragraph… What I noticed… What I changed in the second recording…"},
    {t:"Build a stress list for your field", how:["List 15 words you will often say in your subject.","Look each one up in a learner dictionary and note the stressed syllable (the mark ˈ comes before it).","Say each word three times, then inside a short phrase.","Star any word whose stress surprised you."], write:"Word → STRESSED syllable (★ = surprised me)…"},
    {t:"Shadow a short clip", how:["Pick one minute of a talk or lecture with a transcript (TED or Open Yale Courses, for example).","Listen once while reading the transcript, and mark the main stresses and pauses.","Play it again and speak along just behind the speaker, copying rhythm and pauses, not the accent.","Do this on three different days and note what gets easier."], write:"Clip… Stresses and pauses I marked… What got easier…"}
   ], proof:"A marked-up paragraph with notes from two private recordings, a stress list of 15 words from your field, and notes from three shadowing sessions."},
   read:[
     {book:"uefap", where:"“Speaking” section", note:"Look for the pages on pronunciation, for extra practice with stress and intonation."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u4-l5", title:"Office hours, Englishes and keeping going", minutes:55,
   hook:{q:"A course page says: “Office hours: Tuesdays 2–4 pm, Room 3.12 or online.” What does this usually mean?", options:["The lecturer’s private working time, which students shouldn’t interrupt","Times when students can come and ask the lecturer questions, often without booking","The opening hours of the department’s administration office","Hours students must spend studying in Room 3.12"], answer:1, reveal:"**Times set aside for students.** Office hours are when a lecturer or teaching assistant is available to talk with students about the course, and some universities now call them “student hours” to make that clear. Whether you need to book varies, so check. This lesson covers using office hours well, then English as a lingua franca and World Englishes, free resources for practice, and what comes next in this elective."},
   goals:[
     "Prepare for and hold a short, useful office-hours conversation",
     "Choose a suitable way to address a lecturer without assuming one country’s norms",
     "Explain English as a lingua franca and Kachru’s three circles, with their critiques",
     "Build a free listening and speaking practice plan from resources you have checked"
   ],
   learn:[
    {h:"Office hours: what they are and why to go", body:[
      {lead:"[[office-hours|Office hours]] are regular times when a lecturer or teaching assistant is available to talk with students one-to-one or in small groups. Some universities call them student hours, consultation hours or drop-in hours."},
      "They may be drop-in (just turn up) or by appointment, in an office or online. The course page or syllabus usually says which.",
      "Cornell University’s Learning Strategies Center describes them as a time to get help with course material, follow up on topics that interest you, and talk about things such as your studies, internships or graduate school. It adds that most professors don’t require attendance, and that office hours are not a form of detention or punishment.",
      {list:[
        "**Clarify** something from a lecture or reading.",
        "**Check** you have understood an assignment question.",
        "**Get feedback** on a plan, an outline or a short section of a draft (if the course allows it).",
        "**Talk about the subject**: further reading, projects, further study."
      ]},
      "In some education systems students rarely see teachers one-to-one, or would go only if invited. If that is what you are used to, office hours can feel strange at first. In many universities they are an ordinary, expected part of learning."
    ]},
    {h:"Before, during and after", body:[
      {h:"Before"},
      {list:[
        "Check whether you need to book. If you do, send a short email (unit 3 covers this in {{academic-emails}}).",
        "Try the problem or reading first, and write two or three **specific** questions. “I don’t understand week 4” is hard to answer; “I don’t see why the second model needs a control group” is easy.",
        "Bring your notes or draft, and your questions on paper or screen."
      ]},
      {h:"During"},
      {table:[
        ["You want to…","Phrases"],
        ["Open","“Hello, Dr Mensah. I’m Lucía, from the Tuesday seminar on environmental policy. Do you have a few minutes?”"],
        ["State your purpose","“I wanted to ask about the essay question.” · “I’m not sure I understood the part about…”"],
        ["Ask for feedback","“Could you look at my outline and tell me whether the argument is clear?”"],
        ["Check","“So, if I understand correctly, I should focus on…?”"],
        ["Close","“Thank you, that’s really helpful.” · “I’ll try that and come back if I’m stuck.”"]
      ]},
      {h:"After"},
      "Write down what you agreed and what to do next while it is fresh. If the lecturer promised to send something, a short thank-you email can remind them politely.",
      {h:"How to address a lecturer"},
      "Forms of address vary by country, institution, field and person. “Professor Kaur”, “Dr Kaur” and “Amrita” can all be normal somewhere, and in some systems “Professor” is a specific senior rank, not a general word for a lecturer. **Follow the lecturer’s lead**: how they introduce themselves, how they sign emails, what the course page uses. If you are unsure, use their title and surname, and let them tell you otherwise.",
      {ex:"Student: “Hello, Dr Mensah. I’m Lucía, from the Tuesday seminar. Is now a good time?”\nLecturer: “Yes, come in. What can I help with?”\nStudent: “I wanted to check the essay question. Does ‘evaluate’ mean I need to give my own judgement?”\nLecturer: “Yes. Weigh the evidence and then say which view is stronger, and why.”\nStudent: “So, if I understand correctly, I should end each section with a judgement?”\nLecturer: “Exactly.”\nStudent: “Thank you, that’s really helpful.”", label:"A short office-hours conversation"}
    ]},
    {h:"English as a lingua franca", body:[
      "[[english-as-a-lingua-franca|English as a lingua franca]] (ELF) means English used for communication between people who don’t share a first language. The linguist Barbara Seidlhofer (2011) defined it broadly as any use of English among speakers of different first languages for whom English is the chosen means of communication, and often the only option.",
      "In international universities, a great deal of spoken English is ELF: a student from Brazil working with one from Korea, a supervisor from Kenya advising a student from Germany, a conference panel with five first languages. First-language speakers take part too, but they are not the yardstick.",
      "Researchers who study ELF describe successful users as good at **accommodation**: adjusting to the people they are talking to. Jenkins argued that native-speaker accents are not necessarily the most intelligible ones in international communication. Fast speech, local idioms (“a ballpark figure”, “touch base”) and jokes that depend on one culture can confuse listeners, whoever is speaking.",
      {list:[
        "**Check and confirm**: “So we meet on Thursday, is that right?”",
        "**Rephrase** when someone looks unsure, instead of repeating louder.",
        "**Prefer plain words to idioms** in mixed groups.",
        "**Slow down and pause** for key information: names, numbers, deadlines.",
        "**Let others finish**, even if they search for a word."
      ]},
      {tip:"These strategies are for everyone. First-language speakers of English often need them most, because they have had less practice adjusting."}
    ]},
    {h:"World Englishes and Kachru’s circles", body:[
      "[[world-englishes|World Englishes]] are the many established varieties of English around the world, each with its own pronunciation, vocabulary and grammar: Indian, Nigerian, Singapore, Jamaican, Kenyan, Philippine, as well as Australian, British, American, Irish and many more. Each is a full variety, not a broken version of another.",
      "The linguist Braj Kachru (1985) described the spread of English with three circles:",
      {fig:'<svg viewBox="0 0 340 400"><circle class="d-soft" cx="170" cy="175" r="165" stroke-width="2"/><circle class="d-lup" cx="170" cy="175" r="110" stroke-width="2"/><circle class="d-gold" cx="170" cy="175" r="58" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Expanding circle</text><text class="s" x="170" y="47" text-anchor="middle">e.g. China, Egypt, Japan</text><text x="170" y="84" text-anchor="middle">Outer circle</text><text class="s" x="170" y="100" text-anchor="middle">e.g. India, Nigeria,</text><text class="s" x="170" y="114" text-anchor="middle">Singapore</text><text x="170" y="170" text-anchor="middle">Inner circle</text><text class="s" x="170" y="187" text-anchor="middle">e.g. Australia,</text><text class="s" x="170" y="201" text-anchor="middle">UK, US</text><text class="s" x="170" y="366" text-anchor="middle">Kachru (1985). The borders are much</text><text class="s" x="170" y="384" text-anchor="middle">debated: see the critiques below.</text></svg>', alt:"Three concentric circles. Inner circle, for example Australia, UK, US. Outer circle, for example India, Nigeria, Singapore. Expanding circle, for example China, Egypt, Japan. Note: Kachru 1985; the borders are much debated.", cap:"Kachru’s three circles of English. The model groups countries, not individual speakers."},
      {table:[
        ["Circle","English is…","Usual examples"],
        ["Inner","the main first language of most people; Kachru described this circle as “norm-providing”","Australia, Canada, New Zealand, UK, US"],
        ["Outer","an official or widely used additional language, often from colonial history, with its own norms (“norm-developing”)","India, Kenya, Nigeria, the Philippines, Singapore"],
        ["Expanding","learned mainly as a foreign language for international use, traditionally following outside norms (“norm-dependent”)","China, Egypt, Indonesia, Japan, South Korea"]
      ]},
      "The model mattered because it treated outer-circle Englishes as legitimate varieties with their own norms, not as mistakes. It has also been widely criticised:",
      {list:[
        "**It sorts countries, not people.** A child in Singapore may grow up with English as a first language; a researcher in Japan may use English every day at an expert level.",
        "**The borders blur.** Many countries are multilingual, and the status of English changes over time.",
        "**It puts the inner circle at the centre**, which can suggest those varieties are the default.",
        "**It doesn’t capture ELF well**, where speakers from all circles meet and adjust to each other."
      ]},
      {key:"There is no single correct English. In academic work, aim to be clear, consistent and appropriate to your setting. US or UK spelling are both fine if you use one consistently and follow any style your course or journal sets."}
    ]},
    {h:"“Native speaker” is not the goal", body:[
      "The idea of the “native speaker” as the model for learners is widely questioned. Native speakers vary enormously; many people grow up with two or more languages and don’t fit either label; and expert users of English as an additional language include many of the world’s leading researchers.",
      "A realistic and respectful goal for study is to be an **effective, intelligible and confident user of academic English**: someone who follows lectures, takes part in discussions, presents clearly and knows how to adjust to different listeners. Everything in this unit serves that goal."
    ]},
    {h:"Free places to keep practising", body:[
      "Listening improves with lots of listening, especially material that interests you and comes with a transcript you can check. These were free to use when checked in November 2026; sites change, so check what is free before you rely on any of them.",
      {table:[
        ["Resource","What it offers","Good for"],
        ["[Open Yale Courses](https://oyc.yale.edu/about)","Full recorded introductory courses from Yale; free, no registration, with searchable transcripts","Long lectures, checked against a transcript"],
        ["[MIT OpenCourseWare](https://www.ocw.mit.edu/pages/get-started)","Free materials from thousands of MIT courses, no registration; some courses have complete video lectures","Lectures in science, engineering and more"],
        ["[TED](https://www.ted.com/about/programs/ted-translators)","Short talks; volunteers have subtitled them in over 100 languages","Presentation language and many accents"],
        ["Learner dictionaries (e.g. Cambridge Dictionary, Oxford Learner’s Dictionaries)","Definitions, example sentences, UK and US audio and stress marks","Checking how key words are said"],
        ["UEfAP (Using English for Academic Purposes)","A free site for students of academic English, with listening and speaking sections","Structured practice"],
        ["Online course platforms (e.g. Coursera, edX, FutureLearn)","University courses; free access options differ by platform and course, and change","A whole course in your field"]
      ]},
      "Many universities also publish public lectures and podcasts. Look for ones with transcripts or captions, and vary the speakers so you hear many accents.",
      {tip:"Captions and transcripts are often generated automatically and can contain mistakes, especially with names and technical terms. Use them to check, not as the final word."}
    ]},
    {h:"Next in this elective: Academic Japanese", body:[
      "You have now finished **Academic English**: reading academic texts, building sentences and paragraphs, writing academic texts, and, in this unit, listening and speaking for study. The skills travel with you: signposting, hedging and softening, note-making, clear presentation structure, and the habit of adjusting to your listeners.",
      "The **Academic Language** elective continues with **Academic Japanese**, for people who study, or plan to study or research, through Japanese. It follows the same lesson pattern as this course: learn, try, apply and check. If Japanese isn’t on your path, everything here stays available for review, and the Research Skills track covers the research side of academic work.",
      {key:"Whatever the language, the aim is the same: to understand others well, and to be understood. Thank you for working through Academic English, and good luck with your studies."}
    ]}
   ],
   try:[
    {id:"e1u4-l5-x1", type:"mcq", q:"Priya arrives at drop-in office hours. The lecturer, Dr Haddad, doesn’t know her yet. Which opening is best?", options:[
      {t:"“Hello, Dr Haddad. I’m Priya, from the Monday seminar on public health. Do you have a few minutes to talk about the essay?”", ok:true, why:"It greets, says who she is and which class, and states her purpose, so the lecturer can help straight away."},
      {t:"“Hi. I don’t understand anything.”", why:"Too vague to answer, and it doesn’t say who she is or which course."},
      {t:"“Can you check my whole essay now?”", why:"An unprepared, very large request. Most lecturers can give feedback on a specific question or a short section, if the course allows it."},
      {t:"She waits silently at the door until the lecturer guesses why she came.", why:"The lecturer can’t help without knowing what she needs. A short opening sentence solves this."}
    ]},
    {id:"e1u4-l5-x2", type:"order", q:"Put the steps of a useful office-hours visit in order.", items:[
      {t:"Check whether you need to book, and email if you do", why:"First: some office hours are drop-in, others by appointment."},
      {t:"Try the reading or problem and write two or three specific questions", why:"Preparing specific questions makes the short meeting useful."},
      {t:"Introduce yourself and your course, and state your purpose", why:"The opening tells the lecturer who you are and what you need."},
      {t:"Ask your questions and check your understanding (“So, if I understand correctly…?”)", why:"The main part, with checks to confirm you’ve understood."},
      {t:"Thank them, then write down the action points", why:"Close politely, and note what to do next while it’s fresh."}
    ]},
    {id:"e1u4-l5-x3", type:"mcq", q:"Kenji’s new supervisor signs her emails “Best wishes, Anna”, and in their first meeting she says, “Please call me Anna.” How should Kenji address her?", options:[
      {t:"“Anna”, as she asked", ok:true, why:"Following the person’s own lead is the safest rule. She has told him clearly what she prefers."},
      {t:"“Professor”, because supervisors must always be called Professor", why:"Not every supervisor holds the rank of professor, and she has asked for her first name."},
      {t:"“Mrs Anna”", why:"Title plus first name is normal in some places, but it isn’t what she asked for, and “Mrs” assumes she is married. She asked for just “Anna”."},
      {t:"Avoid using any name, to be safe", why:"She has already told him what to call her; avoiding her name can feel distant."}
    ]},
    {id:"e1u4-l5-x4", type:"mcq", q:"Which of these is a clear example of **English as a lingua franca**?", options:[
      {t:"A Brazilian student and a Korean student planning a project together in English", ok:true, why:"They don’t share a first language and choose English to communicate: that is ELF."},
      {t:"Two friends who grew up in Manchester chatting in English", why:"They share a first language, so English isn’t serving as a lingua franca between different first languages."},
      {t:"A student reading an English novel alone", why:"ELF is about communication between people with different first languages."},
      {t:"Two Spanish speakers from Mexico talking in Spanish", why:"They aren’t using English at all."}
    ]},
    {id:"e1u4-l5-x5", type:"sort", q:"In Kachru’s 1985 model, which circle is each country usually placed in?", buckets:["Inner","Outer","Expanding"], items:[
      {t:"New Zealand", b:0, why:"English is the main first language for most people: inner circle."},
      {t:"Nigeria", b:1, why:"English is an official, widely used additional language with colonial history: outer circle."},
      {t:"India", b:1, why:"English is an official and widely used additional language: outer circle."},
      {t:"Japan", b:2, why:"English is learned mainly as a foreign language for international use: expanding circle."},
      {t:"South Korea", b:2, why:"English is learned mainly as a foreign language there: expanding circle."},
      {t:"Australia", b:0, why:"English is the main first language for most people: inner circle."}
    ]},
    {id:"e1u4-l5-x6", type:"spot", q:"Tap every sentence in this blog post that is **a myth** about accents and Englishes.", ask:"is a myth", parts:[
      {t:"There is one correct English accent, and everyone should copy it.", flag:true, why:"Myth. Many established varieties exist, and none is the single correct one."},
      " ",
      {t:"Listeners usually find accents easier once they have heard them often.", flag:false, why:"True: familiarity makes an accent easier to understand."},
      " ",
      {t:"A strong accent always means you won’t be understood.", flag:true, why:"Myth. Munro and Derwing found that strongly accented speech can be fully intelligible."},
      " ",
      {t:"Native speakers are always the easiest to understand in international groups.", flag:true, why:"Myth. Fast speech and local idioms can make any speaker hard to follow; Jenkins argued native accents aren’t necessarily the most intelligible internationally."},
      " ",
      {t:"US and UK spelling are both acceptable if you use one consistently.", flag:false, why:"True for most academic writing, unless your course or journal sets one."}
    ]},
    {id:"e1u4-l5-x7", type:"match", q:"Match each free resource to what it offers (as checked in November 2026).", pairs:[
      ["Open Yale Courses","Full recorded courses with searchable transcripts, no registration","Its own site says lectures are free, registration isn’t required, and lectures have searchable transcripts."],
      ["MIT OpenCourseWare","Materials from thousands of courses, some with complete video lectures","OCW is free and needs no registration; video is available for some courses."],
      ["TED","Short talks with volunteer subtitles in over 100 languages","TED Translators, a volunteer community, subtitle the talks."],
      ["A learner dictionary","UK and US audio and stress marks for each word","Online learner dictionaries play recordings and mark the stressed syllable."]
    ]}
   ],
   apply:{intro:"These tasks help you use what you’ve learned in this unit in real study.", tasks:[
    {t:"Plan an office-hours visit", how:["Choose a course you are taking, or imagine one.","Find out when and how its office hours work.","Write your opening sentence, two or three specific questions and a closing sentence.","If you go, note afterwards what you learned and what to do next."], write:"Course and office-hours details… My opening… My questions… My closing… What happened…"},
    {t:"Listen across Englishes", how:["Find two talks or lectures by speakers from different parts of the world (TED makes this easy).","Listen to five minutes of each with the transcript.","Note what made each speaker easy to follow: structure, pace, pauses, stress, signposts."], write:"Speaker 1 and what helped… Speaker 2 and what helped… One habit I want to copy…"},
    {t:"Build a four-week listening plan", how:["Pick two resources from this lesson that suit your field.","Plan three short sessions a week (15–30 minutes), each with a task: notes, shadowing or a signpost hunt.","Put the sessions in your calendar, and tick them off."], write:"Resources… My weekly plan… Week 1–4 ticks and notes…"},
    {t:"Look back and look ahead", how:["List the three most useful things you learned in Academic English.","Write one thing you’ll keep practising.","If you plan to study in Japanese, write one question you hope Academic Japanese will answer."], write:"Three useful things… What I’ll keep practising… My question for Academic Japanese…"}
   ], proof:"A prepared office-hours plan, notes comparing two speakers from different parts of the world, a four-week listening plan, and a short reflection on your Academic English learning."},
   read:[
     {book:"uefap", where:"“Listening” and “Speaking” sections", note:"For the practice plan: pick the parts that match what you want to improve."}
   ]
  }
  ],
  checkpoint:["e1u4-q02","e1u4-q05","e1u4-q11","e1u4-q14","e1u4-q19","e1u4-q23","e1u4-q26","e1u4-q30","e1u4-q33","e1u4-q37","e1u4-q41","e1u4-q44"],
  codex:[
   {id:"lecture-listening", title:"Listening to lectures", aka:["lecture comprehension","lecture signposts","note-taking in lectures","abbreviations and symbols"], tags:["academic English","listening"],
    summary:"How to follow lectures in English: signposts and discourse markers, cues for importance, prediction, fast notes with symbols, and using recordings and captions.",
    levels:{
     starter:[
      "A lecture is like a car journey with road signs. You can’t stop and re-read the road, but the signs tell you where you are and what’s coming. In lectures, the signs are [[lecture-signpost|signposts]]: phrases such as “Today I’ll look at…”, “Moving on to…”, “However…” and “To sum up…”.",
      "Short words like “so”, “right”, “OK” and “now” at the start of a sentence are [[discourse-marker|discourse markers]]. After a pause they often mean a new section is starting.",
      "You don’t need to understand every word. Catch the structure and the key points, take short notes with symbols (→ for “leads to”, ↑ for “increase”, ∴ for “therefore”), and fill gaps later from slides, readings and classmates.",
      {key:"Listen for the structure first, the details second."}
     ],
     builder:[
      {h:"Signposts by function"},
      {list:[
        "**Preview**: “Today I’ll cover three things.” Write 1, 2, 3 down the page.",
        "**Sequence and addition**: “First…”, “Another factor is…”, “Moving on to…”.",
        "**Contrast**: “However…”, “On the other hand…”. Expect a limit or an opposite.",
        "**Example and definition**: “Take the case of…”, “By X, I mean…”. Note definitions exactly.",
        "**Emphasis**: “The key point here is…”. Star it.",
        "**Aside and return**: “By the way…” then “Anyway, going back to…”. Note asides briefly.",
        "**Summary**: “To sum up…”, “So, to recap…”."
      ]},
      {h:"Other cues"},
      "Speakers show importance by slowing down and stressing words, repeating or rephrasing (“in other words…”), asking a question and answering it, writing on the board, or saying so directly.",
      {h:"Prediction"},
      "Before: read the title, module guide and slides; skim the reading; list key terms and check how they sound in a learner dictionary with audio. During: use each signpost to predict what kind of content comes next.",
      {h:"Fast notes"},
      "Keep names, numbers and technical terms exact; turn linking words into symbols; use your own short forms with a key. Tidy notes within a day (see {{note-making}}).",
      {tip:"When you lose the thread, don’t stop: write “?” or the recording time, skip a line, and listen for the next signpost to find your place again."}
     ],
     pro:[
      "**Spoken vs written academic English.** Lectures contain more repetition, restarts, asides and discourse markers than written texts. Much of this is not noise: it does the organising work that headings and paragraphs do on the page. Listeners who treat “so”, “right” and “now” as filler miss boundary signals.",
      "**Variation between lecturers.** Some lecturers signpost heavily; others rely on slides, or use signposts loosely (“to sum up” followed by new material). Treat signposts as strong cues, not guarantees, and combine them with pauses, pitch, slide changes and the module outline.",
      "**Accent familiarity.** Every speaker has an accent. Understanding a new accent improves with exposure, so the first lectures with a new lecturer are usually the hardest. Repeated listening to the same speaker, with a transcript, speeds adaptation.",
      "**Recordings and captions.** Recordings work best for targeted review: note timestamps of confusing moments rather than re-listening to whole lectures. Automatic captions are useful but error-prone with names, technical terms, numbers and less-represented accents; check key words against slides and readings. Institutions have rules on personal recordings: check them and ask permission where required.",
      "**Note-taking trade-offs.** Writing verbatim leaves little attention for comprehension, while very sparse notes may be impossible to reconstruct later. A practical middle: content words, exact technical terms and numbers, symbols for relations, and a marker (“?”, a timestamp) wherever you lost the thread. Methods such as Cornell notes add a later review step that turns raw notes into questions and summaries.",
      "**Practice material.** Lectures with transcripts, such as Open Yale Courses, let you check exactly what you missed, which turns listening practice into targeted learning."
     ]
    },
    related:["seminar-discussion","note-making","reading-strategies-eap","englishes"],
    read:[{book:"uefap", where:"“Listening” section"}],
    sources:[
      {t:"About Open Yale Courses (Yale University)", url:"https://oyc.yale.edu/about"},
      {t:"Get Started with OCW (MIT OpenCourseWare)", url:"https://www.ocw.mit.edu/pages/get-started"}
    ], checked:"2026-11"},

   {id:"seminar-discussion", title:"Seminars and academic discussion", aka:["tutorials","discussion sections","turn-taking","agreeing and disagreeing","clarification"], tags:["academic English","speaking"],
    summary:"Taking part in seminars: turn-taking, agreeing and disagreeing at the right strength, softening, asking for clarification, and why norms and silence vary.",
    levels:{
     starter:[
      "A seminar is a small-group class where students discuss a reading or lecture. Taking part is like joining a game of catch: you watch for a moment to join, you catch and throw the ball, and you help others get a turn.",
      "Useful phrases: to get in, “Can I just add something?”; to agree, “That’s a good point”; to disagree politely, “I’m not sure I agree, because…”; to check, “So are you saying that…?”.",
      "Disagreement is normal and useful in academic discussion. Disagree with the idea, not the person, and always give a reason.",
      "Silence doesn’t always mean someone isn’t interested. People may be thinking, waiting to be invited, or putting a thought into another language.",
      {key:"Add something: a point, an example, a question or a link between ideas."}
     ],
     builder:[
      {h:"Turn-taking"},
      "[[turn-taking|Turn-taking]] covers getting in (“Could I come in on that?”), keeping a turn (“Just to finish my point…”), handing over (“What do you think, Mei?”) and listening signals ([[backchannel|backchannels]] such as “mm-hm”). Online, the raise-hand button and chat do the same jobs.",
      {h:"Agreement and disagreement"},
      {table:[
        ["Strength","Example"],
        ["Softer","“I wonder if there’s another way to look at this.”"],
        ["Softened","“I’m not sure I agree.”"],
        ["Direct, neutral","“I disagree.”"],
        ["Very direct","“That’s simply wrong.”"]
      ]},
      "Most seminars sit in the first three rows. Partial agreement (“I agree up to a point, but…”) and building (“Building on what Amara said…”) keep discussion moving.",
      {h:"Softening and clarification"},
      "[[softening|Softening]] uses modal verbs (might, could), tentative openings (I wonder if…), questions instead of statements and small qualifiers. One or two softeners is enough. [[clarification-request|Clarification requests]] ask to repeat (“Sorry, I didn’t catch that”), explain (“What do you mean by…?”) or confirm (“So are you saying…?”).",
      {h:"Preparing"},
      "Before a seminar, do the reading, then write two or three points and one question, each with its first sentence ready. Speaking in the first ten minutes is often easiest. If a fast discussion leaves no gaps, use a bridge back to an earlier point (“Can I go back to what Priya said?”), the chat, or a word with the tutor afterwards."
     ],
     pro:[
      "**Timing across languages.** Stivers and colleagues (2009, *PNAS*) measured response times to yes/no questions in ten languages from around the world. Speakers in all of them avoided both overlap and long silence; the average gap differed between languages by roughly a quarter of a second either side of the overall average (Japanese among the shortest, Danish among the longest). The finding supports a shared basic system with modest cultural variation, but in a fast seminar even small timing differences can make it hard to find a gap.",
      "**Classroom norms.** Expectations about who speaks, when, and whether students may challenge a teacher differ between educational traditions, institutions, fields and individuals. Avoid national stereotypes: variation within countries is large, and many students move comfortably between styles.",
      "**Reading silence.** Silence can signal reflection, respect, waiting for an invitation, language processing time or personality. Facilitators can widen participation with wait time after questions, think–pair–share, invitations by name with a right to pass, and written channels such as chat.",
      "**Assessment.** Where participation is graded, criteria usually reward quality (use of readings, building on others, questions) over quantity. Check the course handbook.",
      "**Over-softening and over-directness.** Too many hedges make a point disappear; bare disagreement (“No.”) can end a discussion. A reason attached to any disagreement gives others something to respond to, which is what makes discussion academic."
     ]
    },
    related:["lecture-listening","hedging-and-boosting","academic-presentations","video-meetings"],
    read:[{book:"uefap", where:"“Speaking” section"}],
    sources:[
      {t:"Stivers et al. (2009), Universals and cultural variation in turn-taking in conversation, PNAS 106(26) (full text, PubMed Central)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC2705608/"},
      {t:"Pregnant pauses and rapid-fire: how do different cultures take turns to talk? (National Geographic, on Stivers et al. 2009)", url:"https://www.nationalgeographic.com/science/article/pregnant-pauses-and-rapid-fire-how-do-different-cultures-take-turns-to-talk"}
    ], checked:"2026-11"},

   {id:"academic-presentations", title:"Academic presentations in English", aka:["presentation language","describing graphs","Q&A phrases","buying time"], tags:["academic English","speaking","presenting"],
    summary:"The language of presenting: writing for the ear, signposts for each stage, describing charts and change, and phrases for handling questions.",
    levels:{
     starter:[
      "Presenting is guiding a group along a path they can’t see. You tell them where you’re going (“I’ve divided my talk into three parts”), mark each turn (“That brings me to my second point”) and remind them where they’ve been (“To sum up…”).",
      "Speak in short sentences with one idea each, repeat your key terms, and round numbers when you speak while showing exact figures on the slide.",
      "In the [[q-and-a|Q&A]], it’s fine to check the question (“If I understand correctly, you’re asking…?”), to take a moment (“Let me think about that for a moment”) and to say “I don’t know, but I’d be happy to look into it.”",
      "You don’t need a particular accent. A clear structure, a calm pace and good pauses help listeners most.",
      {key:"Tell them what’s coming, tell them, then tell them what you told them."}
     ],
     builder:[
      {h:"Stages and phrases"},
      {table:[
        ["Stage","Phrase"],
        ["Opening","“Good morning. My name is…, and I study…”"],
        ["Topic","“Today I’m going to talk about… This matters because…”"],
        ["Outline","“First…, then…, and finally…”"],
        ["Transition","“That brings me to my second point.”"],
        ["Slides","“As you can see on this graph…”"],
        ["Conclusion","“The main point I’d like you to take away is…”"],
        ["Questions","“I’m happy to take any questions.”"]
      ]},
      {h:"Describing change"},
      {list:[
        "Trend verbs used with no object: rise, increase, grow, fall, decrease, decline, level off, peak (rise and fall never take an object; increase, decrease and grow can). Nouns: a rise, an increase, a fall, a decline, a peak.",
        "Adverb after a verb, adjective before a noun: rose sharply / a sharp rise.",
        "from… to… gives start and end; by gives the size of the change; a rise of 500.",
        "Percentage points are the difference between two rates; percent change is relative to the start."
      ]},
      "Write for the ear: one idea per sentence, subject and verb early, key terms repeated rather than replaced by synonyms, and numbers rounded aloud with exact figures on the slide.",
      {h:"Questions"},
      "Check the question (“If I understand correctly, you’re asking…?”), buy a moment (“Let me think about that for a moment”), answer briefly, admit uncertainty honestly (“I’m not sure, but…”) and defer big questions (“Could we talk after the session?”). End with “Does that answer your question?”",
      "See {{research-presentations}} for planning research talks and slides, and {{presenting-skills}} for general delivery."
     ],
     pro:[
      "**Spoken register.** Academic talks are more formal than conversation but less dense than writing. Long pre-verb noun phrases, embedded clauses and [[nominalisation|nominalisations]] that work on the page overload listeners’ memory. Rewriting for the ear (subject and verb early, one proposition per sentence, repeated key terms) is a register shift, not a simplification of ideas.",
      "**Rise vs raise.** “Rise” (rose, risen) is intransitive; “raise” (raised) is transitive. Learners and first-language speakers alike confuse them in data descriptions; “rised” is non-standard.",
      "**Percent vs percentage points.** A rate moving from 20% to 30% is a 10-percentage-point rise and a 50% relative increase. Ambiguous phrasing (“rose by 10%”) is common in media and talks; state which you mean.",
      "**“Data” agreement.** Both “the data show” and “the data shows” occur in academic English; many style guides and fields prefer the plural. Consistency matters more than the choice.",
      "**Q&A strategies.** Clarifying questions avoid answering the wrong question and buy processing time; formulaic time-buyers (“That’s an interesting point…”) are used by all speakers. Honest uncertainty, with an offer to follow up, protects credibility better than a confident guess. Deferring long or off-topic questions to after the session is acceptable when done politely.",
      "**Openings.** Apologising for one’s English is common among speakers of English as an additional language but rarely helps; it frames the talk around deficiency. Brief self-correction during the talk is normal in every language.",
      "**Numbers.** Pairs like fifteen/fifty are easily confused in noisy rooms; show numbers on slides or spell them out (“one-five”)."
     ]
    },
    related:["research-presentations","presenting-skills","presentation-planning","pronunciation-intelligibility","seminar-discussion"],
    read:[{book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”"},{book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”"}],
    sources:[
      {t:"TED Translators (TED)", url:"https://www.ted.com/about/programs/ted-translators"}
    ], checked:"2026-11"},

   {id:"pronunciation-intelligibility", title:"Pronunciation for intelligibility", aka:["accent","word stress","sentence stress","Lingua Franca Core","intonation","thought groups"], tags:["academic English","pronunciation","speaking"],
    summary:"Why the goal is being understood, not sounding native; what matters most for international listeners; and how word stress, sentence stress, chunking and intonation work.",
    levels:{
     starter:[
      "Think of pronunciation like handwriting. Everyone’s looks different, and that’s fine, as long as others can read it. In speech, the aim is [[intelligibility]]: being understood, not sounding like someone from a particular country.",
      "Research by Munro and Derwing (1995) showed that speech can have a strong [[accent]] and still be understood completely.",
      "The things that help listeners most include: clear consonants, the difference between long and short vowels (sheep and ship), stressing the right syllable in key words (phoTOgraphy), stressing the most important word in each phrase, and pausing between groups of words.",
      "Some things matter less than people think. Many established varieties of English say “th” with sounds close to t and d, or f and v, and listeners understand them. Recording yourself privately and checking key words in a learner dictionary are simple ways to practise.",
      {key:"Keep your accent. Work on what makes you easier to understand."}
     ],
     builder:[
      {h:"Three ideas to keep apart"},
      "**Accentedness**: how different speech sounds from the listener’s variety. **Intelligibility**: how much the listener actually understands. **Comprehensibility**: how easy the listener finds it. They are related but partly independent (Munro & Derwing, 1995). Levis (2005) contrasted the “nativeness principle” with the “intelligibility principle”; many researchers now favour the second.",
      {h:"Priorities"},
      "Jenkins’s (2000) [[lingua-franca-core|Lingua Franca Core]] lists features that mattered most when speakers of different first languages used English together: most consonants (but not the “th” sounds), initial consonant clusters, vowel length, and main (nuclear) stress. Non-core: “th”, exact vowel quality, weak forms, word stress, pitch patterns and rhythm.",
      {h:"Stress, chunks and pitch"},
      {list:[
        "[[word-stress|Word stress]] often moves within word families (PHOtograph, phoTOgrapher, photoGRAPHic) and between noun and verb (a REcord, to reCORD).",
        "[[sentence-stress|Sentence stress]]: content words are stressed; the main stress falls on new or contrasting information.",
        "[[thought-group|Thought groups]] keep grammatical units together, with pauses between them.",
        "[[intonation|Intonation]]: falls often signal “finished”, rises “more to come” or a question; lists often rise on early items and fall on the last."
      ]},
      {h:"Practice"},
      "Check the stress of key words in your field in a learner dictionary with audio; mark a script with pauses (/) and main stresses (CAPITALS); record yourself privately; shadow short clips with transcripts, copying rhythm rather than accent; and ask listeners with different first languages what, if anything, was hard to follow."
     ],
     pro:[
      "**The 1995 study.** Munro and Derwing (*Language Learning* 45(1), 73–97) had listeners transcribe speech by second-language speakers (intelligibility) and rate comprehensibility and accentedness. The dimensions correlated only partly, and some heavily accented speech was fully intelligible. Later replications report similar partial independence.",
      "**The Lingua Franca Core and its critics.** Jenkins’s *The Phonology of English as an International Language* (Oxford University Press, 2000) proposed the core from analysis of breakdowns in interactions between speakers of different first languages, as a hypothesis for further testing. Critics have challenged particular inclusions and exclusions, including the treatment of “th”, rhotic /r/, the NURSE vowel, word stress and pitch. Field (2005, *TESOL Quarterly* 39(3)) found that misplaced lexical stress, especially stress shifted rightward, can seriously reduce intelligibility, which argues for teaching word stress in key vocabulary.",
      "**Variety differences.** Vowel reduction to schwa in unstressed syllables is typical of many inner-circle varieties; varieties such as many forms of Nigerian, Indian and Singapore English reduce less and have more even syllable timing. “Th” is realised as stops in many Irish, Caribbean, Indian and Nigerian varieties and as f/v in parts of London. These are systematic features of varieties, not errors.",
      "**Stress variants.** Dictionaries list more than one pattern for some words (research: REsearch and reSEARCH, in both UK and US English). Where two are listed, both are acceptable.",
      "**Intonation.** Patterns vary widely: yes/no questions often rise but frequently fall; statement-final rises are common in some Australian, New Zealand and North American speech without signalling a question. Teach functions (finished vs not finished, highlighting new information) rather than fixed rules.",
      "**Receptive vs productive goals.** Weak forms and connected-speech features are non-core for production in ELF, but recognising them is important for listening to fast speech. Be cautious of “accent elimination” offers: the research supports intelligibility and comprehensibility as goals."
     ]
    },
    related:["englishes","academic-presentations","lecture-listening"],
    read:[{book:"uefap", where:"“Speaking” section"}],
    sources:[
      {t:"Jenkins, J. Global English and the teaching of pronunciation (article reproduced by Académie d’Orléans-Tours)", url:"https://pedagogie-archive.ac-orleans-tours.fr/fileadmin/user_upload/anglaisLP/dossier_ressources/global_english_teaching_pronunciation.pdf"},
      {t:"Munro & Derwing (1995), Foreign accent, comprehensibility, and intelligibility in the speech of second language learners, Language Learning 45(1) (DOI)", url:"https://doi.org/10.1111/j.1467-1770.1995.tb00963.x"},
      {t:"Interview with John Levis on intelligibility (Ilha do Desterro, with Levis 2005 reference)", url:"https://periodicos.ufsc.br/index.php/desterro/article/view/102641"}
    ], checked:"2026-11"},

   {id:"office-hours", title:"Office hours", aka:["student hours","consultation hours","drop-in hours","talking to lecturers"], tags:["academic English","speaking","study skills"],
    summary:"What office hours are, why they are worth using, how to prepare, what to say, and how to address lecturers without assuming one country’s norms.",
    levels:{
     starter:[
      "Office hours are times when a lecturer or teaching assistant is available for students to drop in or book a short meeting. Some universities call them student hours or consultation hours.",
      "Think of them as a help desk for your course. You can ask about something from a lecture, check an assignment question, or get advice on a plan.",
      "Prepare two or three specific questions. Open with your name, your class and your purpose: “Hello, Dr Mensah. I’m Lucía, from the Tuesday seminar. I wanted to ask about the essay question.” Close with thanks.",
      "How you address a lecturer depends on the place and the person. Follow their lead; if unsure, use their title and surname.",
      {key:"Specific questions get specific help."}
     ],
     builder:[
      {h:"Why go"},
      "Cornell University’s Learning Strategies Center describes office hours as time for help with course material, following up on interesting topics, and advice about studies, internships and graduate school; most professors don’t require attendance, and office hours are not detention or a punishment.",
      {h:"Preparation"},
      {list:[
        "Check drop-in or appointment, in person or online; email to book if needed (see {{academic-emails}}).",
        "Attempt the work first. Write specific questions.",
        "Bring notes or a short section of a draft."
      ]},
      {h:"Language"},
      {table:[
        ["Move","Phrase"],
        ["Open","“Do you have a few minutes?”"],
        ["Purpose","“I wanted to ask about…”"],
        ["Feedback","“Could you tell me whether the argument is clear?”"],
        ["Check","“So, if I understand correctly, I should…?”"],
        ["Close","“Thank you, that’s really helpful.”"]
      ]},
      "Afterwards, write down action points. If the lecturer promised to send something, a short thank-you email is a polite reminder.",
      {h:"Addressing lecturers"},
      "Follow the lecturer’s own usage: how they introduce themselves, sign emails or appear on the course page. If unsure, use title and surname (“Dr Mensah”, “Professor Kaur”) until they invite something else. Norms differ between countries, institutions and people, so no single rule works everywhere.",
      {tip:"A specific question (“Why does the second model need a control group?”) gets far more useful help than a general one (“I don’t understand week 4”)."}
     ],
     pro:[
      "**Different traditions.** In some education systems, one-to-one contact with teachers is rare or happens only by invitation, and approaching a senior academic uninvited may feel presumptuous. Many universities in other systems expect students to use office hours, and some renamed them “student hours” to signal that the time belongs to students. Students moving between systems can find either expectation surprising.",
      "**Forms of address.** Norms vary by country, institution, discipline, generation and person: “Professor” may be a general courtesy title in some places and a specific senior rank in others; first names are standard in some departments and unusual in others. The reliable rule is to follow the person’s own usage (introductions, email signatures, course pages) and, when unsure, to use title plus surname until invited otherwise. Title plus first name (“Dr Anna”) is usual in some regions and unusual in others, which is one more reason to follow the person’s own usage.",
      "**Making the most of a short meeting.** Instructors often answer questions with questions and ask to see your reasoning, to locate the difficulty. Expect this. Going before deadlines, not the day before, gives time to act on the advice.",
      "**Boundaries.** Lecturers may limit how much draft feedback they give, to be fair to all students; follow course rules on drafts and on what help is allowed for assessed work.",
      "**Online office hours.** Video meetings may use a waiting room; arrive on time, have questions and files ready, and keep the camera choice to what the course expects (see {{video-meetings}})."
     ]
    },
    related:["academic-emails","seminar-discussion","supervision","video-meetings"],
    sources:[
      {t:"Office Hours (Cornell University Learning Strategies Center)", url:"https://lsc.cornell.edu/?p=4542"}
    ], checked:"2026-11"},

   {id:"englishes", title:"World Englishes and English as a lingua franca", aka:["ELF","Kachru’s circles","inner circle","outer circle","expanding circle","native speaker"], tags:["academic English","sociolinguistics"],
    summary:"English as a lingua franca, Kachru’s three circles and their critiques, and why the “native speaker” is not the goal for academic English.",
    levels:{
     starter:[
      "English is like a big family of related recipes. Indian, Nigerian, Singapore, Australian, American and British English, and many more, are all versions of the same dish, each with its own local flavour. None is the one “correct” recipe. These varieties are called [[world-englishes|World Englishes]].",
      "Most English conversations at international universities are between people who don’t share a first language: a student from Brazil and one from Korea, for example. That is [[english-as-a-lingua-franca|English as a lingua franca]] (ELF).",
      "Good ELF users adjust to each other: they check understanding, rephrase, avoid local idioms and slow down for names and numbers. First-language speakers of English need these skills too.",
      {key:"The goal is to communicate clearly with anyone, not to sound like someone from a particular country."}
     ],
     builder:[
      {h:"Kachru’s three circles (1985)"},
      {table:[
        ["Circle","Description","Usual examples"],
        ["Inner","Main first language; “norm-providing”","Australia, Canada, New Zealand, UK, US"],
        ["Outer","Official or widely used additional language, often from colonial history; “norm-developing”","India, Kenya, Nigeria, the Philippines, Singapore"],
        ["Expanding","Foreign language for international use; “norm-dependent”","China, Egypt, Indonesia, Japan, South Korea"]
      ]},
      "Kachru’s model gave outer-circle Englishes the status of legitimate varieties with their own norms. Critics note it classifies countries rather than speakers, blurs in multilingual societies, places the inner circle at the centre, and fits ELF poorly. It is still useful as a rough map of how English spread, as long as you remember that individual speakers don’t fit neatly into circles.",
      {h:"ELF"},
      "Seidlhofer (2011) defined ELF broadly as English used among speakers of different first languages for whom it is the chosen, and often the only, means of communication. ELF research focuses on how speakers achieve understanding, such as through accommodation, rather than on how closely they match native-speaker norms.",
      {h:"Accommodation in practice"},
      {list:[
        "Check and confirm key details: “So we meet on Thursday, is that right?”",
        "Rephrase rather than repeat louder.",
        "Prefer plain words to local idioms (“estimate” rather than “ballpark figure”).",
        "Slow down and pause for names, numbers and deadlines.",
        "Let others finish, even when they search for a word."
      ]}
     ],
     pro:[
      "**Source.** Kachru, B. B. (1985). “Standards, codification and sociolinguistic realism: the English language in the outer circle.” In R. Quirk & H. G. Widdowson (eds), *English in the World*, Cambridge University Press. The circles became the best-known model of World Englishes.",
      "**Critiques.** The model is based on national history and status rather than individual use; many speakers in outer-circle countries acquire English as a first or co-first language; boundaries shift (some expanding-circle settings now use English widely in higher education); it implies inner-circle norms are central; and it does not describe interaction across circles, which is the domain of ELF. Later models (for example Schneider’s dynamic model of postcolonial Englishes) address how varieties develop over time.",
      "**ELF research.** Seidlhofer’s *Understanding English as a Lingua Franca* (Oxford University Press, 2011) and Jenkins’s work characterise ELF by accommodation, negotiation of meaning and pragmatic strategies. Jenkins argued that native-speaker accents are not necessarily the most intelligible in international settings, and proposed the Lingua Franca Core for pronunciation (see {{pronunciation-intelligibility}}).",
      "**The native-speaker model.** Its use as a learning target is questioned on several grounds: variation among native speakers, the many bilingual speakers who fit neither label, the expert status of many users of English as an additional language, and the unfairness of judging competence by origin. In academic settings, the useful standard is effectiveness: clear, accurate, appropriate English and the ability to adapt to listeners.",
      "**Spelling and standards.** In academic writing, US and UK spelling are both accepted if consistent, unless a course or publisher specifies one; some regions follow other established norms (for example Canadian or Australian conventions)."
     ]
    },
    related:["pronunciation-intelligibility","academic-english","seminar-discussion"],
    sources:[
      {t:"Review of Quirk & Widdowson (eds), English in the World (CUP, 1985), including Kachru’s chapter (English Studies in Africa)", url:"https://unisapressjournals.co.za/index.php/EUSA/article/download/5221/3090/25063"},
      {t:"Jenkins, J. Global English and the teaching of pronunciation (article reproduced by Académie d’Orléans-Tours)", url:"https://pedagogie-archive.ac-orleans-tours.fr/fileadmin/user_upload/anglaisLP/dossier_ressources/global_english_teaching_pronunciation.pdf"}
    ], checked:"2026-11"}
  ],
  terms:[
   {id:"lecture-signpost", term:"Lecture signpost", def:"A phrase a speaker uses to show the structure of a talk, such as “Today I’ll look at…”, “Moving on to…” or “To sum up…”. The spoken form of signposting.", codex:"lecture-listening"},
   {id:"discourse-marker", term:"Discourse marker", def:"A short word or phrase such as “so”, “right”, “now”, “well” or “anyway” that organises talk, for example by marking a new section, rather than adding content.", codex:"lecture-listening"},
   {id:"turn-taking", term:"Turn-taking", def:"How people share a conversation: who speaks, when, and how they get in, keep their turn and hand over to someone else.", codex:"seminar-discussion"},
   {id:"backchannel", term:"Backchannel", def:"A small signal from a listener, such as “mm-hm”, “yeah” or a nod, that shows they are following without taking the turn.", codex:"seminar-discussion"},
   {id:"softening", term:"Softening", def:"Making a statement, question or request less forceful so it sounds polite or appropriately cautious, for example with “might”, “I wonder if…” or “a bit”.", codex:"seminar-discussion"},
   {id:"clarification-request", term:"Clarification request", def:"A question asking a speaker to repeat, explain or confirm something, such as “Sorry, could you say that again?” or “So are you saying that…?”.", codex:"seminar-discussion"},
   {id:"presentation-structure", term:"Presentation structure", def:"The shape of a talk that listeners can follow: an opening, an outline, a body in a few parts, a conclusion and questions, with spoken signposts between them.", codex:"academic-presentations"},
   {id:"q-and-a", term:"Q&A", def:"Questions and answers: the part of a talk or session when the audience asks the speaker questions.", codex:"academic-presentations"},
   {id:"word-stress", term:"Word stress", def:"The extra strength on one syllable of a word: longer, louder, often with a pitch change and a clearer vowel, as in phoTOgraphy.", codex:"pronunciation-intelligibility"},
   {id:"sentence-stress", term:"Sentence stress", def:"The pattern of strong and weak words in speech. Content words are usually stressed, and one word in each phrase carries the main stress, often the new or contrasting information.", codex:"pronunciation-intelligibility"},
   {id:"weak-form", term:"Weak form", def:"A short, unstressed way of saying a function word, such as “to” as /tə/ or “and” as /ən/. Common in many varieties of English, especially in fast speech.", codex:"pronunciation-intelligibility"},
   {id:"thought-group", term:"Thought group", def:"A short group of words that belong together in speech, with one main stress, separated from the next group by a small pause or pitch change. Also called a chunk or tone unit.", codex:"pronunciation-intelligibility"},
   {id:"intonation", term:"Intonation", def:"The rise and fall of pitch in speech. It helps show, for example, whether a speaker has finished, is asking a question or is listing items. Patterns vary between varieties of English.", codex:"pronunciation-intelligibility"},
   {id:"accent", term:"Accent", def:"The way a person pronounces a language, shaped by where and how they learned it. Everyone has one. In research, “accentedness” means how different speech sounds from the listener’s own variety.", codex:"pronunciation-intelligibility"},
   {id:"intelligibility", term:"Intelligibility", def:"How much of a speaker’s message a listener actually understands, for example how many words they can write down correctly.", codex:"pronunciation-intelligibility"},
   {id:"comprehensibility", term:"Comprehensibility", def:"How easy or difficult a listener finds it to understand a speaker. Related to intelligibility, but about effort rather than the amount understood.", codex:"pronunciation-intelligibility"},
   {id:"lingua-franca-core", term:"Lingua Franca Core", def:"Jennifer Jenkins’s (2000) proposal of the pronunciation features most important for intelligibility when speakers of different first languages use English together.", codex:"pronunciation-intelligibility"},
   {id:"office-hours", term:"Office hours", def:"Regular times when a lecturer or teaching assistant is available for students to ask questions, by dropping in or booking. Also called student hours or consultation hours.", codex:"office-hours"},
   {id:"english-as-a-lingua-franca", term:"English as a lingua franca (ELF)", def:"English used for communication between people who don’t share a first language, such as a Brazilian and a Korean student working together.", codex:"englishes"},
   {id:"world-englishes", term:"World Englishes", def:"The many established varieties of English around the world, such as Indian, Nigerian, Singapore, Australian, British and American English, each with its own norms.", codex:"englishes"}
  ],
  bank:[
   /* ---------- Lesson 1 ---------- */
   {id:"e1u4-q01", lesson:"e1u4-l1", level:1, q:"What is a lecture signpost?", options:[
     {t:"A phrase that shows the structure of the talk, such as “Moving on to…”", ok:true, why:"Signposts organise the talk and tell listeners where they are."},
     {t:"A key technical term the lecturer defines", why:"Technical terms are content. Signposts organise content."},
     {t:"A slide with the lecture title", why:"Slides can help, but a signpost is something the speaker says."},
     {t:"A reading the lecturer recommends", why:"Readings are sources, not structure signals."}
   ]},
   {id:"e1u4-q02", lesson:"e1u4-l1", level:2, q:"A lecturer says: “By the way, I spent a year working in that hospital.” How should you usually treat this?", options:[
     {t:"As an aside: note it briefly or skip it, and wait for the return to the main point", ok:true, why:"“By the way” plus a personal story usually marks a side comment, not a main point."},
     {t:"As the lecture’s main point", why:"Main points are signalled by emphasis such as “The key point is…”. “By the way” signals the opposite."},
     {t:"As a definition to copy exactly", why:"Nothing is being defined here."},
     {t:"As a sign the lecture is ending", why:"Endings sound like “To sum up…” or “That’s all for today.”"}
   ]},
   {id:"e1u4-q03", lesson:"e1u4-l1", level:1, q:"In lecture notes, what does ∴ usually mean?", options:[
     {t:"therefore", ok:true, why:"∴ links a conclusion to what came before."},
     {t:"because", why:"“Because” is ∵, the same three dots upside down."},
     {t:"approximately", why:"“Approximately” is ≈."},
     {t:"leads to", why:"“Leads to” is usually an arrow, →."}
   ]},
   {id:"e1u4-q04", lesson:"e1u4-l1", level:2, q:"Which is the best way to prepare for a lecture on a topic that’s new to you?", options:[
     {t:"Skim the reading and slides, list key terms and check how they are pronounced", ok:true, why:"Knowing the words and their sounds in advance makes them much easier to recognise when you hear them."},
     {t:"Nothing: preparing spoils the surprise", why:"Prediction makes listening easier; unexpected vocabulary is what makes lectures hard."},
     {t:"Learn the whole reading by heart", why:"Too much effort for little gain. Skimming and a key-term list are enough."},
     {t:"Plan to record the lecture and listen to all of it twice", why:"Re-listening to everything takes a lot of time; preparing before is far more efficient."}
   ]},
   {id:"e1u4-q05", lesson:"e1u4-l1", level:3, q:"Fatima’s lecture notes are full sentences copied word for word, and she says she often doesn’t understand what she wrote. What is the most likely problem?", options:[
     {t:"Writing every word leaves no attention for understanding; she should note key words and use symbols", ok:true, why:"Verbatim copying overloads attention. Compressed notes free the mind to follow the argument."},
     {t:"Her handwriting is too slow, so she needs a faster pen", why:"Speed isn’t the main issue: even fast copying doesn’t lead to understanding."},
     {t:"She should stop taking notes altogether", why:"Notes help memory and review; the fix is better notes, not none."},
     {t:"The lecturer must be speaking unclearly", why:"Possibly, but her copying strategy is the clearest cause, and one she can change."}
   ]},
   {id:"e1u4-q06", lesson:"e1u4-l1", level:2, q:"In a lecture, which phrase most likely introduces a definition?", options:[
     {t:"“So what do we mean by ‘resilience’?”", ok:true, why:"“What do we mean by X?” usually leads straight into a definition, which is worth noting exactly."},
     {t:"“Moving on to the next part…”", why:"This signals a new section, not a definition."},
     {t:"“To sum up…”", why:"This signals a summary."},
     {t:"“Incidentally…”", why:"This signals an aside."}
   ]},
   {id:"e1u4-q07", lesson:"e1u4-l1", level:3, q:"Hana watches a recorded lecture with automatic captions. A key researcher’s name appears as a strange string of ordinary words. What should she do?", options:[
     {t:"Check the name against the slides or reading list, because automatic captions often get names wrong", ok:true, why:"Names, technical terms and numbers are where automatic captions most often fail."},
     {t:"Copy the caption exactly: captions are always correct", why:"Automatic captions make mistakes, especially with names."},
     {t:"Ignore the name; names never matter", why:"In academic work, names matter: they lead you to sources."},
     {t:"Turn off captions for the rest of the course", why:"Captions help many listeners. Checking key words is better than giving up a useful tool."}
   ]},
   {id:"e1u4-q08", lesson:"e1u4-l1", level:1, q:"Why do “so”, “right” and “now” at the start of a sentence matter to a lecture listener?", options:[
     {t:"They often mark the start of a new section", ok:true, why:"As discourse markers, they organise the talk."},
     {t:"They always mean the lecturer agrees with something", why:"“Right” can mean “correct”, but at the start of a sentence after a pause it usually organises talk."},
     {t:"They are filler with no function", why:"They do a job: signalling boundaries."},
     {t:"They show the lecture is informal and not important", why:"Lecturers use them in all kinds of lectures."}
   ]},
   {id:"e1u4-q09", lesson:"e1u4-l1", level:3, q:"Tomás finds his new lecturer’s accent hard to follow in week 1. What is the most realistic advice?", options:[
     {t:"It usually gets easier with exposure: listen to recordings of the same lecturer, with slides or a transcript", ok:true, why:"Familiarity with an accent grows quickly, and targeted listening speeds it up."},
     {t:"Change to a course with a lecturer who has a “standard” accent", why:"There is no single standard accent, and familiarity usually solves the problem within weeks."},
     {t:"Accept that he will never understand this lecturer", why:"Too pessimistic: listeners adapt to new accents."},
     {t:"Ask the lecturer to change their accent", why:"Unrealistic and unfair. Asking them to repeat or slow down at a specific point is reasonable."}
   ]},
   /* ---------- Lesson 2 ---------- */
   {id:"e1u4-q10", lesson:"e1u4-l2", level:1, q:"What is turn-taking?", options:[
     {t:"How people share a conversation: who speaks, when, and how they get in and out", ok:true, why:"That is the definition: the system behind who talks next."},
     {t:"Taking turns to read aloud from a textbook", why:"That is one classroom activity, not the conversational system."},
     {t:"Changing your opinion during a discussion", why:"That is changing your mind, not turn-taking."},
     {t:"A formal rule that each person speaks for exactly one minute", why:"Some activities have rules like this, but turn-taking is the general way conversations are shared."}
   ]},
   {id:"e1u4-q11", lesson:"e1u4-l2", level:2, q:"Which reply disagrees politely **and** gives others something to respond to?", options:[
     {t:"“I see it differently, because the study only looked at one city.”", ok:true, why:"Polite, clear, and the reason gives others something to discuss."},
     {t:"“No.”", why:"No reason, and it can sound dismissive."},
     {t:"“You’re wrong, obviously.”", why:"Aimed at the person, with no reason."},
     {t:"“Maybe, perhaps, I don’t know.”", why:"So soft that nobody can tell what the speaker thinks."}
   ]},
   {id:"e1u4-q12", lesson:"e1u4-l2", level:1, q:"Which of these is a softener?", options:[
     {t:"“I wonder if…”", ok:true, why:"A tentative opening that makes what follows less forceful."},
     {t:"“Obviously…”", why:"“Obviously” makes a claim stronger, not softer."},
     {t:"“Without doubt…”", why:"A booster: it strengthens a claim."},
     {t:"“Clearly…”", why:"Another booster."}
   ]},
   {id:"e1u4-q13", lesson:"e1u4-l2", level:2, q:"What does “So are you saying that cost matters more than distance?” mainly do in a discussion?", options:[
     {t:"It checks understanding by restating the other person’s point", ok:true, why:"The speaker can confirm or correct the restatement."},
     {t:"It disagrees strongly", why:"It doesn’t express disagreement; it checks meaning."},
     {t:"It changes the topic", why:"It stays on the same point."},
     {t:"It ends the discussion", why:"It invites a reply, so it keeps the discussion going."}
   ]},
   {id:"e1u4-q14", lesson:"e1u4-l2", level:3, q:"In an online seminar, Mei wants to speak but the discussion is fast and she can’t find a gap. What is the most practical option?", options:[
     {t:"Use the raise-hand button or the chat, or a short phrase like “Could I come in here?” at a pause", ok:true, why:"Online tools and short entry phrases are normal ways to get a turn."},
     {t:"Unmute and start talking over the current speaker", why:"Talking over someone online is especially confusing, because audio overlaps badly."},
     {t:"Give up and say nothing for the rest of the seminar", why:"There are easy ways in; giving up loses her contribution."},
     {t:"Leave the meeting and email her point to everyone afterwards", why:"Possible as a last resort, but she can contribute in the meeting with the tools available."}
   ]},
   {id:"e1u4-q15", lesson:"e1u4-l2", level:2, q:"Which phrase **builds on** another person’s point?", options:[
     {t:"“To add to what Amara said, the same happened in Nairobi.”", ok:true, why:"It links a new example to Amara’s point and develops it."},
     {t:"“Sorry, I didn’t catch that.”", why:"That asks for repetition."},
     {t:"“I disagree with Amara.”", why:"That disagrees rather than builds."},
     {t:"“Can we change the subject?”", why:"That moves away from the point."}
   ]},
   {id:"e1u4-q16", lesson:"e1u4-l2", level:3, q:"A student starts: “I’m sorry, this is probably a stupid idea and maybe wrong, but possibly perhaps…” What would help most?", options:[
     {t:"Use one softener at most, then state the point clearly", ok:true, why:"Over-softening makes listeners doubt the idea before they hear it. One softener keeps politeness and clarity."},
     {t:"Add more apologies to be extra polite", why:"More apologies make the point weaker, not more polite."},
     {t:"Say nothing next time", why:"The idea may be useful; the fix is how it is framed."},
     {t:"Speak louder", why:"Volume isn’t the problem; the wording is."}
   ]},
   {id:"e1u4-q17", lesson:"e1u4-l2", level:2, q:"What is a backchannel?", options:[
     {t:"A small listener signal such as “mm-hm” or a nod, showing you’re following", ok:true, why:"Backchannels show attention without taking the turn."},
     {t:"A private chat with a friend during the seminar", why:"That is a side conversation, not a backchannel in this sense."},
     {t:"A secret way to contact the tutor", why:"Not what the term means here."},
     {t:"Interrupting to change the topic", why:"Backchannels don’t take the turn or change the topic."}
   ]},
   {id:"e1u4-q18", lesson:"e1u4-l2", level:3, q:"Dmitri’s seminar group includes students from many countries. One student, Sione, waits to be invited before speaking. What is the fairest interpretation?", options:[
     {t:"He may be following a different classroom norm, such as waiting to be invited; that isn’t a lack of interest", ok:true, why:"Norms about when to speak differ; silence or waiting can show respect or reflection."},
     {t:"He has nothing to say", why:"There is no evidence for this."},
     {t:"He is being rude", why:"Waiting to be invited is polite in many settings."},
     {t:"Everyone from his country behaves this way", why:"A stereotype: people within any country vary enormously."}
   ]},
   /* ---------- Lesson 3 ---------- */
   {id:"e1u4-q19", lesson:"e1u4-l3", level:2, q:"Which sentence is correct?", options:[
     {t:"“The temperature rose steadily over the afternoon.”", ok:true, why:"“Rise” has no object; “rose” is its past form, and “steadily” is the adverb."},
     {t:"“The temperature raised steadily over the afternoon.”", why:"“Raise” needs an object (someone raises something)."},
     {t:"“The temperature rised steadily over the afternoon.”", why:"“Rised” isn’t standard: rise–rose–risen."},
     {t:"“The temperature rose steady over the afternoon.”", why:"After a verb, use the adverb “steadily”."}
   ]},
   {id:"e1u4-q20", lesson:"e1u4-l3", level:2, q:"Unemployment fell from 8% to 6%. Which statement is accurate?", options:[
     {t:"It fell by 2 percentage points.", ok:true, why:"8 − 6 = 2 percentage points (a 25% relative fall)."},
     {t:"It fell by 2%.", why:"Ambiguous at best: as a relative change, the fall is 25%, not 2%."},
     {t:"It fell by 6 percentage points.", why:"6% is the new rate, not the size of the fall."},
     {t:"It fell to 2%.", why:"“To” gives the end point, which is 6%, not 2%."}
   ]},
   {id:"e1u4-q21", lesson:"e1u4-l3", level:1, q:"Which phrase typically signals the **outline** of a presentation?", options:[
     {t:"“I’ve divided my talk into three parts.”", ok:true, why:"It previews the structure of the talk."},
     {t:"“To sum up…”", why:"This signals the conclusion."},
     {t:"“I’m happy to take any questions.”", why:"This invites questions at the end."},
     {t:"“As you can see on this graph…”", why:"This refers to a slide in the body."}
   ]},
   {id:"e1u4-q22", lesson:"e1u4-l3", level:2, q:"Why is repeating key terms often better in a talk than using many different synonyms?", options:[
     {t:"Listeners can’t re-read, and a new word might seem to mean something new", ok:true, why:"Repetition helps listeners keep track; synonyms can make them wonder whether you mean something different."},
     {t:"Synonyms are grammatically wrong in speech", why:"They aren’t wrong; they’re just harder to follow by ear."},
     {t:"Repetition makes the talk longer, which looks better", why:"Length isn’t the goal; clarity is."},
     {t:"Audiences prefer simple vocabulary at all times", why:"Technical terms are fine; the point is consistency, not avoiding them."}
   ]},
   {id:"e1u4-q23", lesson:"e1u4-l3", level:3, q:"During Q&A, Oluwaseun isn’t sure what a question means. What is the best response?", options:[
     {t:"“If I understand correctly, you’re asking whether the results apply to adults?”", ok:true, why:"Checking avoids answering the wrong question and gives a moment to think."},
     {t:"Answer what he guesses it means, at length", why:"He may answer the wrong question and waste everyone’s time."},
     {t:"“That’s a silly question.”", why:"Dismissive, and the fault may be in his understanding, not the question."},
     {t:"Pretend he didn’t hear it", why:"Discourteous, and it loses a chance to engage."}
   ]},
   {id:"e1u4-q24", lesson:"e1u4-l3", level:1, q:"Which phrase is a polite way to buy a moment to think during questions?", options:[
     {t:"“That’s an interesting point. Let me think about that for a moment.”", ok:true, why:"An honest, normal time-buyer used by speakers of every language."},
     {t:"“Next question.”", why:"This skips the question rather than answering it."},
     {t:"“Sorry for my English.”", why:"This apologises instead of buying time, and draws attention away from ideas."},
     {t:"“Obviously, the answer is…”", why:"This rushes into an answer without thinking time."}
   ]},
   {id:"e1u4-q25", lesson:"e1u4-l3", level:2, q:"Which spoken sentence is easiest to follow by ear?", options:[
     {t:"“We interviewed 30 farmers. Most had changed crops. The main reason was water.”", ok:true, why:"Short sentences, one idea each, with the key word at the end."},
     {t:"“The main reason, given by most of the 30 farmers we interviewed about crop change, was water.”", why:"The listener must hold a long noun phrase before reaching the point."},
     {t:"“Water, it was found, according to the majority of the interviewees, who were farmers, was the main reason.”", why:"Many interruptions make it hard to follow."},
     {t:"“With respect to crop changes among the farmer interviewees, the principal reason was water-related.”", why:"Dense written style and vague (“water-related”)."}
   ]},
   {id:"e1u4-q26", lesson:"e1u4-l3", level:3, q:"Ana is presenting in English for the first time and plans to begin with “Sorry, my English is not very good.” What is the best advice?", options:[
     {t:"Skip the apology and start with a clear greeting and topic; correct any slip calmly if it happens", ok:true, why:"The apology makes the audience listen for problems instead of ideas. Calm self-correction is normal for all speakers."},
     {t:"Keep it, and repeat it before every slide", why:"Repeating it would keep drawing attention away from her ideas."},
     {t:"Avoid presenting until her accent sounds native", why:"A native-like accent isn’t needed; clear structure and pace matter more."},
     {t:"Speak as fast as possible so mistakes go unnoticed", why:"Speed makes talks harder for everyone to follow."}
   ]},
   {id:"e1u4-q27", lesson:"e1u4-l3", level:2, q:"Which describes a change correctly with a noun?", options:[
     {t:"“There was a sharp rise of 15% in applications.”", ok:true, why:"Adjective “sharp” before the noun “rise”, and “of” for the size with a noun."},
     {t:"“There was a sharply rise of 15% in applications.”", why:"“Sharply” is an adverb; before a noun you need the adjective “sharp”."},
     {t:"“There was a sharp raise of 15% in applications.”", why:"With trends, the noun is usually “rise” or “increase”. (“A raise” is mainly US English for a pay increase.)"},
     {t:"“There was a sharp rise by 15% in applications.”", why:"After the noun “rise”, use “of” for the size of the change."}
   ]},
   /* ---------- Lesson 4 ---------- */
   {id:"e1u4-q28", lesson:"e1u4-l4", level:1, q:"What does intelligibility mean in pronunciation research?", options:[
     {t:"How much of the message a listener actually understands", ok:true, why:"Often measured by asking listeners to write down what they heard."},
     {t:"How native-like a speaker sounds", why:"That is about accent, a separate dimension."},
     {t:"How fast someone speaks", why:"Speed can affect understanding but isn’t the definition."},
     {t:"How large a speaker’s vocabulary is", why:"Vocabulary is a different skill."}
   ]},
   {id:"e1u4-q29", lesson:"e1u4-l4", level:2, q:"According to Munro and Derwing’s 1995 study, which statement is true?", options:[
     {t:"Speech can be strongly accented and still fully intelligible", ok:true, why:"Accent and intelligibility were related but partly independent."},
     {t:"Any accent makes speech unintelligible", why:"The study found the opposite for many speakers."},
     {t:"Only native speakers are intelligible", why:"Second-language speakers in the study were often fully understood."},
     {t:"Accent and intelligibility are the same thing", why:"The study showed they are distinct dimensions."}
   ]},
   {id:"e1u4-q30", lesson:"e1u4-l4", level:2, q:"In Jenkins’s Lingua Franca Core, which of these is a **core** feature?", options:[
     {t:"The difference between long and short vowels, as in “sheep” and “ship”", ok:true, why:"Vowel length is core: losing it can change one word into another."},
     {t:"The “th” sound in “think”", why:"Jenkins classed “th” as non-core: substitutes rarely caused misunderstanding."},
     {t:"Weak forms of function words", why:"Weak forms were non-core for speaking."},
     {t:"Stress-timed rhythm", why:"Rhythm was non-core in Jenkins’s proposal."}
   ]},
   {id:"e1u4-q31", lesson:"e1u4-l4", level:2, q:"Which word, in learner dictionaries of UK and US English, is stressed on the **second** syllable?", options:[
     {t:"economy", ok:true, why:"e-CON-o-my: /ɪˈkɒnəmi/ (UK)."},
     {t:"photograph", why:"PHO-to-graph: first-syllable stress."},
     {t:"politics", why:"POL-i-tics: first-syllable stress."},
     {t:"information", why:"in-for-MA-tion: third-syllable stress, before -tion."}
   ]},
   {id:"e1u4-q32", lesson:"e1u4-l4", level:2, q:"“We need to reCORD the interviews.” Why is “record” stressed on the second syllable here?", options:[
     {t:"It is a verb, and many two-syllable noun–verb pairs stress the second syllable in the verb", ok:true, why:"a REcord (noun) / to reCORD (verb)."},
     {t:"It is a noun", why:"Here it follows “to” and takes an object: it’s a verb. The noun is REcord."},
     {t:"All English words are stressed on the second syllable", why:"Many words are stressed on the first or later syllables."},
     {t:"Because it comes at the end of the sentence", why:"Position in the sentence doesn’t change word stress."}
   ]},
   {id:"e1u4-q33", lesson:"e1u4-l4", level:3, q:"Ana asks: “Is the exam in Room 12?” Priya answers: “No, it’s in Room 20.” Which word should Priya stress most?", options:[
     {t:"“twenty”", ok:true, why:"The main stress goes on the new, corrected information."},
     {t:"“Room”", why:"“Room” was already in the question; stressing it suggests a different kind of place is the issue."},
     {t:"“it’s”", why:"A function word with no new information."},
     {t:"“in”", why:"A preposition, usually unstressed."}
   ]},
   {id:"e1u4-q34", lesson:"e1u4-l4", level:2, q:"Which shows the most natural chunking?", options:[
     {t:"“After the workshop, / most participants / felt more confident.”", ok:true, why:"Each chunk is a complete unit: an adverbial, the subject, then the verb phrase."},
     {t:"“After the / workshop, most / participants felt more confident.”", why:"This separates “the” from “workshop” and “most” from “participants”."},
     {t:"“After / the workshop, most participants felt more / confident.”", why:"Pausing between “more” and “confident” splits a phrase that belongs together."},
     {t:"“After the workshop most participants felt / more / confident.”", why:"Pauses come in the wrong places and break the final phrase apart."}
   ]},
   {id:"e1u4-q35", lesson:"e1u4-l4", level:3, q:"Kenji says “thin” with a sound close to “t”, as many speakers of established varieties do. His tutor says he must fix this before presenting. What does the research in this lesson suggest?", options:[
     {t:"“Th” is non-core in Jenkins’s proposal; substitutes are usually understood, so other features are a better priority", ok:true, why:"Jenkins found “th” substitutes rarely caused breakdowns, and many varieties use t/d or f/v."},
     {t:"He cannot be understood until he masters “th”", why:"Listeners generally understand common substitutes for “th”."},
     {t:"He should stop presenting in English", why:"No feature of his accent requires that."},
     {t:"Only American speakers pronounce “th” correctly", why:"Many varieties pronounce “th” differently, and no single variety is the correct one."}
   ]},
   {id:"e1u4-q36", lesson:"e1u4-l4", level:2, q:"Two learner dictionaries both list REsearch and reSEARCH for the noun “research”. What should you conclude?", options:[
     {t:"Both stress patterns are accepted", ok:true, why:"When a dictionary lists two patterns, either is fine."},
     {t:"One of the dictionaries is wrong", why:"Dictionaries list both because both are widely used."},
     {t:"You must use REsearch in the UK only", why:"Dictionaries list both patterns in both UK and US English."},
     {t:"The word has no stress", why:"Each variant has a clearly stressed syllable."}
   ]},
   /* ---------- Lesson 5 ---------- */
   {id:"e1u4-q37", lesson:"e1u4-l5", level:1, q:"What are office hours?", options:[
     {t:"Regular times when a lecturer or teaching assistant is available for students’ questions", ok:true, why:"Some universities call them student hours or consultation hours."},
     {t:"The lecturer’s private time, which students should never interrupt", why:"Office hours exist precisely for students."},
     {t:"Opening times of the university’s administration office", why:"That’s a different service."},
     {t:"Compulsory extra classes", why:"Most lecturers don’t require attendance; office hours are a resource."}
   ]},
   {id:"e1u4-q38", lesson:"e1u4-l5", level:2, q:"Which question is most useful to bring to office hours?", options:[
     {t:"“I don’t see why the second model needs a control group. Could you explain?”", ok:true, why:"Specific: the lecturer can see exactly where the difficulty is."},
     {t:"“Can you explain the whole course again?”", why:"Far too broad for a short meeting."},
     {t:"“What will be on the exam?”", why:"Rarely answerable, and not a question about understanding."},
     {t:"“Is this course hard?”", why:"Too vague to help."}
   ]},
   {id:"e1u4-q39", lesson:"e1u4-l5", level:3, q:"Lucía is unsure how to address her new lecturer, Amrita Kaur. The course page says “Dr Amrita Kaur” and her emails are signed “Dr Kaur”. What should Lucía write?", options:[
     {t:"“Dear Dr Kaur”", ok:true, why:"She follows the lecturer’s own usage: title plus surname."},
     {t:"“Hey Amrita”", why:"Too informal when the lecturer uses “Dr Kaur” herself."},
     {t:"“Dear Dr Amrita”", why:"Title plus first name is common in some places, but it doesn’t follow her own usage: she signs “Dr Kaur”."},
     {t:"“Dear Sir or Madam”", why:"She knows the lecturer’s name; using it is more appropriate."}
   ]},
   {id:"e1u4-q40", lesson:"e1u4-l5", level:1, q:"What is English as a lingua franca (ELF)?", options:[
     {t:"English used for communication between people who don’t share a first language", ok:true, why:"That is the core of the definition."},
     {t:"The English spoken in England", why:"That is one variety, not ELF."},
     {t:"A simplified artificial language based on English", why:"ELF is real English in use, not a designed language."},
     {t:"English used only by native speakers", why:"ELF is defined by speakers of different first languages."}
   ]},
   {id:"e1u4-q41", lesson:"e1u4-l5", level:2, q:"In Kachru’s 1985 model, which circle is Singapore usually placed in?", options:[
     {t:"The outer circle", ok:true, why:"English is an official, widely used language there, with colonial history and its own norms."},
     {t:"The inner circle", why:"Inner-circle examples are countries such as Australia, the UK and the US."},
     {t:"The expanding circle", why:"Expanding-circle examples are countries such as China and Japan, where English is mainly foreign."},
     {t:"None: Kachru didn’t include Asian countries", why:"The outer circle is usually illustrated with Asian countries such as India and Singapore, as well as African ones such as Nigeria and Kenya."}
   ]},
   {id:"e1u4-q42", lesson:"e1u4-l5", level:2, q:"Which is a common critique of Kachru’s three circles?", options:[
     {t:"They classify countries, not individual speakers", ok:true, why:"A child in Singapore may grow up with English as a first language; a researcher in Japan may use English daily."},
     {t:"They ignore American English", why:"The US is in the inner circle."},
     {t:"They say outer-circle Englishes are mistakes", why:"The opposite: the model treated them as legitimate varieties."},
     {t:"They were invented in 2020", why:"The model dates from 1985."}
   ]},
   {id:"e1u4-q43", lesson:"e1u4-l5", level:3, q:"In an international project group, Ben (a first-language English speaker) uses idioms like “let’s touch base” and speaks fast. Others look confused. What would help most?", options:[
     {t:"Ben slows down, uses plain words instead of idioms, and checks understanding", ok:true, why:"Accommodation is an ELF skill that first-language speakers need too."},
     {t:"The others should learn all English idioms", why:"Unrealistic, and communication is a shared responsibility."},
     {t:"Ben should speak louder", why:"Volume doesn’t fix speed or idioms."},
     {t:"Nothing: native speakers are always easiest to understand", why:"Jenkins argued native accents and styles aren’t necessarily the most intelligible internationally."}
   ]},
   {id:"e1u4-q44", lesson:"e1u4-l5", level:3, q:"Hana writes her essay with US spelling, but her university is in Australia. Her course has no spelling rule. What is the best advice?", options:[
     {t:"US spelling is fine if she uses it consistently; check whether the course or any journal sets a style", ok:true, why:"Consistency matters most; both systems are accepted unless a style is set."},
     {t:"She must change to Australian spelling", why:"Not required unless the course sets a style."},
     {t:"Mixing US and UK spelling shows range", why:"Mixing looks careless; choose one."},
     {t:"Only UK spelling is academic", why:"US spelling is fully acceptable in academic writing."}
   ]},
   {id:"e1u4-q45", lesson:"e1u4-l5", level:2, q:"Which free resource offers full recorded university courses with searchable transcripts and no registration?", options:[
     {t:"Open Yale Courses", ok:true, why:"Its site says it is free, registration isn’t required, and lectures have searchable transcripts."},
     {t:"A learner dictionary", why:"Dictionaries offer word audio and stress marks, not full courses."},
     {t:"The Academic Phrasebank", why:"The Phrasebank collects written academic phrases, not lectures."},
     {t:"A grammar checker", why:"Grammar checkers help with writing, not listening."}
   ]}
  ]
});
