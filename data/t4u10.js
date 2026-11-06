/* Track 4 · Unit 10 · Writing, sharing and graduate study */
ICA.addUnit({
  id:"t4u10", track:"t4", n:10, title:"Writing, sharing and graduate study", icon:"🎓",
  blurb:"Write clear academic prose, improve it with feedback and revision, present it as a talk or a poster, take it through journal submission and peer review, and understand how master’s and doctoral study work in different parts of the world.",
  goals:[
    "Build a piece of academic writing around an arguable thesis, with paragraphs that each do one job, clear signposts and claims hedged to match the evidence",
    "Outline, draft, reverse-outline and revise a text, and ask for and use feedback well",
    "Plan a research talk and a poster that support your message, fit the time and space, and work for everyone in the audience",
    "Choose a trustworthy journal, submit a manuscript, understand peer review and respond to reviewers, and share work through preprints, open access and an ORCID iD",
    "Compare how graduate study is organised in different systems, from taught and research master’s to different doctoral models, examinations, funding and support"
  ],
  read:[
    {book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence” and Section 10.6 “Editing Focus: Paragraphs and Transitions”", note:"Thesis statements, reasoning, evidence, paragraphs and transitions."},
    {book:"owg", where:"Section 12.5 “Writing Process: Integrating Research”", note:"Thesis frames, outlining each paragraph, peer review and revising a research-based argument."},
    {book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”", note:"Outlining a talk, signpost language, visuals, peer review and a revision checklist."},
    {book:"acrl", where:"Frames “Scholarship as Conversation” and “Information Has Value”", note:"Why publishing, citing and sharing research work the way they do."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u10-l1", title:"Clear academic writing", minutes:55,
   hook:{q:"A reviewer writes “overclaimed” next to the sentence “Our survey of 40 parents proves that screen time harms sleep.” Which change fixes it best?", options:["Add more technical vocabulary so it sounds more scientific","Change “proves” to a verb that matches the evidence, such as “suggests”, and say what the survey can and can’t show","Delete the sentence: academic writing should never make claims","Make the sentence longer and more formal"], answer:1, reveal:"**Match the verb to the evidence.** A small survey can show an association, not proof of harm, so a word like “suggests” fits, plus a note on the limits. Academic writing is full of claims; the skill is making each one exactly as strong as its evidence. This lesson covers that (it’s called **hedging**), along with the thesis, paragraphs, signposts, register and concision."},
   goals:[
     "Write an arguable thesis statement and tell it apart from a topic or an announcement",
     "Build paragraphs around a topic sentence, evidence and analysis, linked by signposts",
     "Hedge claims to match the strength of the evidence, without over- or under-claiming",
     "Choose a suitable register, cut wordiness, and use phrase resources and language tools wisely"
   ],
   learn:[
    {h:"Academic writing is an argument", body:[
      {lead:"Academic writing is not a list of facts or a diary of what you read. It is an **argument**: a claim, the reasons for it and the evidence behind it, offered to other people who may disagree."},
      "“Argument” here doesn’t mean a quarrel. It means reasoning in public. When a nurse writes a report recommending a new handover routine, when a historian explains why a port city grew, or when an engineer reports that a cheaper material is strong enough, each one is saying: **here is what I think, here is why, and here is how you can check.**",
      "The heart of it is the [[thesis-statement]]: one or two sentences, usually near the start, that state the main claim the whole piece will support. Every section should serve it. If a paragraph doesn’t help the thesis, it belongs in a different piece.",
      {table:[
        ["Not yet a thesis","Why not","An arguable thesis"],
        ["Urban heat and trees","A topic, not a claim","Street trees are a cheaper way to cool bus stops than shade shelters in our city, though they take years to work"],
        ["This essay will discuss online learning","An announcement; it promises a topic, not a position","Recorded lectures helped part-time students most when paired with live weekly tutorials"],
        ["Water is essential for life","True, but nobody disputes it","Village water committees kept hand pumps working longer when they controlled the repair budget"]
      ]},
      "Notice that a good thesis is **specific**, **arguable** (a reasonable person could disagree or ask “how do you know?”) and **supportable** with the evidence you have. These examples are invented to show the shape; a real thesis has to match real evidence.",
      {tip:"Different fields frame the thesis differently. A humanities essay may say “I argue that…”. A lab report or journal article usually states the **aim** and then the **main finding** in the introduction and abstract. Both do the same job: they tell the reader what the piece claims."}
    ]},
    {h:"Paragraphs that do one job", body:[
      "A paragraph is a unit of thought, not a unit of length. A useful pattern for academic paragraphs has four moves:",
      {ol:[
        "**Topic sentence**: the paragraph’s one point, stated plainly, usually first. (A [[topic-sentence]] is a mini-thesis for the paragraph.)",
        "**Evidence**: data, examples or sources that support the point, cited properly.",
        "**Analysis**: what the evidence means and how it supports the point. This is the part writers most often skip.",
        "**Link**: a sentence connecting the point back to the thesis or forward to the next paragraph."
      ]},
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-rose" x="20" y="10" width="300" height="52" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Thesis: the main claim</text><text class="s" x="170" y="50" text-anchor="middle">stated early; every paragraph serves it</text><path class="d-ink" d="M170,62 L60,92 M170,62 L170,92 M170,62 L280,92" stroke-width="2" fill="none"/><rect class="d-lup" x="12" y="92" width="96" height="48" rx="6" stroke-width="2"/><text x="60" y="112" text-anchor="middle">Topic</text><text x="60" y="129" text-anchor="middle">sentence</text><rect class="d-lup" x="122" y="92" width="96" height="48" rx="6" stroke-width="2"/><text x="170" y="112" text-anchor="middle">Topic</text><text x="170" y="129" text-anchor="middle">sentence</text><rect class="d-lup" x="232" y="92" width="96" height="48" rx="6" stroke-width="2"/><text x="280" y="112" text-anchor="middle">Topic</text><text x="280" y="129" text-anchor="middle">sentence</text><rect class="d-sage" x="12" y="152" width="96" height="44" rx="6" stroke-width="2"/><text x="60" y="179" text-anchor="middle">Evidence</text><rect class="d-sage" x="122" y="152" width="96" height="44" rx="6" stroke-width="2"/><text x="170" y="179" text-anchor="middle">Evidence</text><rect class="d-sage" x="232" y="152" width="96" height="44" rx="6" stroke-width="2"/><text x="280" y="179" text-anchor="middle">Evidence</text><rect class="d-gold" x="12" y="208" width="96" height="44" rx="6" stroke-width="2"/><text x="60" y="235" text-anchor="middle">So what?</text><rect class="d-gold" x="122" y="208" width="96" height="44" rx="6" stroke-width="2"/><text x="170" y="235" text-anchor="middle">So what?</text><rect class="d-gold" x="232" y="208" width="96" height="44" rx="6" stroke-width="2"/><text x="280" y="235" text-anchor="middle">So what?</text><text class="s" x="60" y="274" text-anchor="middle">Paragraph 1</text><text class="s" x="170" y="274" text-anchor="middle">Paragraph 2</text><text class="s" x="280" y="274" text-anchor="middle">Paragraph 3</text><text class="s" x="170" y="302" text-anchor="middle">Each paragraph makes one point, backs it</text><text class="s" x="170" y="320" text-anchor="middle">with evidence and explains why it matters.</text></svg>', alt:"A box at the top labelled Thesis: the main claim, stated early; every paragraph serves it. Lines lead down to three columns labelled Paragraph 1, 2 and 3. Each column has three stacked boxes: Topic sentence, Evidence, and So what?. Caption: each paragraph makes one point, backs it with evidence and explains why it matters.", cap:"An argument as a tree: one thesis, and paragraphs that each support it."},
      {ex:"[Topic sentence] Shaded bus stops were noticeably cooler than unshaded ones in our measurements.\n[Evidence] Across 12 afternoons, the air under street trees averaged 3 °C below nearby open stops (Table 2).\n[Analysis] Because people often wait 10 minutes or more, that difference matters most for older riders and young children, who are more sensitive to heat.\n[Link] Shade, then, has a measurable benefit; the next question is whether trees or built shelters provide it more cheaply.", label:"Worked example: one paragraph, four moves (invented data)"},
      "The pattern is a tool, not a law. Some paragraphs open with a question, or build up to their point. But if you can’t say a paragraph’s point in one sentence, it is probably trying to do two jobs."
    ]},
    {h:"Signposts: show readers where they are", body:[
      "Readers can’t interrupt to ask “where is this going?”, so good writers answer before they’re asked. [[signposting|Signposting]] means words and sentences that show the structure of your argument. Writing guides use the term at two scales:",
      {list:[
        "**Maps**, near the start of a long piece or section: “This report first describes the clinic’s current booking system, then compares two alternatives, and finally recommends one.”",
        "**Transitions** between sentences and paragraphs, which show the relationship between ideas."
      ]},
      {table:[
        ["Relationship","Examples"],
        ["Adding a point","Furthermore, In addition, A second factor is…"],
        ["Contrast","However, In contrast, By comparison, Although…"],
        ["Cause and effect","Therefore, As a result, Consequently, This led to…"],
        ["Example","For example, For instance, This is illustrated by…"],
        ["Concession","Admittedly, While it is true that…"],
        ["Summing up","In summary, Overall, Taken together, these findings…"]
      ]},
      {warn:"Transition words must be **true**. “Therefore” claims that the next sentence follows from the last; “however” claims a contrast. Sprinkling them in for style can make your logic look wrong. If no relationship word fits, the two sentences may not belong together."},
      "The OpenStax *Writing Guide* (Section 10.6) treats paragraphs and transitions together for this reason: transitions are where your reasoning becomes visible."
    ]},
    {h:"Hedging: claims as strong as the evidence", body:[
      "[[hedging|Hedging]] means using cautious language so a claim is no stronger than the evidence allows. The University of Manchester’s free *Academic Phrasebank* explains it as avoiding absolute certainty where there may be some uncertainty, and avoiding over-generalisation. It notes that hedges are especially common in discussion sections, where writers explain what their findings might mean.",
      "Hedging tools include **modal verbs** (may, might, could), **adverbs** (probably, possibly, often, generally), **quantifiers** (many, most, some) and **tentative phrases** (“there is some evidence to suggest that…”, “one possible explanation is…”).",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Stronger claim (needs stronger evidence)</text><rect class="d-rose" x="10" y="30" width="320" height="46" rx="6" stroke-width="2"/><text x="20" y="50">X proves Y</text><text class="s" x="20" y="68">rarely justified outside maths and logic</text><rect class="d-gold" x="10" y="86" width="320" height="46" rx="6" stroke-width="2"/><text x="20" y="106">X shows / demonstrates Y</text><text class="s" x="20" y="124">strong, consistent, well-designed evidence</text><rect class="d-sage" x="10" y="142" width="320" height="46" rx="6" stroke-width="2"/><text x="20" y="162">X suggests / indicates Y</text><text class="s" x="20" y="180">good evidence with some limits</text><rect class="d-lup" x="10" y="198" width="320" height="46" rx="6" stroke-width="2"/><text x="20" y="218">X may contribute to Y</text><text class="s" x="20" y="236">early, small or indirect evidence</text><rect class="d-panel" x="10" y="254" width="320" height="46" rx="6" stroke-width="2"/><text x="20" y="274">One possible explanation is…</text><text class="s" x="20" y="292">a reasoned guess, clearly flagged</text><text x="170" y="322" text-anchor="middle">Weaker claim (fits weaker evidence)</text></svg>', alt:"A vertical scale of five claim strengths from strongest at the top to weakest at the bottom: X proves Y, rarely justified outside maths and logic; X shows or demonstrates Y, strong consistent well-designed evidence; X suggests or indicates Y, good evidence with some limits; X may contribute to Y, early, small or indirect evidence; One possible explanation is, a reasoned guess clearly flagged.", cap:"Choose the verb that matches your evidence. These pairings are guides, not fixed rules."},
      {table:[
        ["Before","After"],
        ["This study proves that the app improves reading.","In this study, children who used the app made larger reading gains than the comparison group, which suggests it may help."],
        ["Teachers dislike online marking.","Most of the 18 teachers we interviewed preferred paper marking for essays."],
        ["It might possibly be the case that rainfall could perhaps affect yields.","Lower rainfall was associated with lower yields in all three seasons."]
      ]},
      "The last row shows the opposite problem: **over-hedging**. Stacking “might possibly… could perhaps” makes a writer sound unsure even when the evidence is solid. Hedge once, in the right place, and say plainly what you did find.",
      {key:"Hedging isn’t weakness. It is precision about how sure you are, and readers trust writers who are precise."}
    ]},
    {h:"Register and concision", body:[
      "[[academic-register|Register]] is the level of formality and the kind of language that suits a situation. Academic register is generally formal, precise and impersonal in tone, but it doesn’t have to be stiff. Conventions differ by field, journal and language, so read a few recent papers in your target venue and notice what they do.",
      {list:[
        "**First person.** Many fields now accept “I” or “we” for what the authors did (APA Style, for example, recommends it for describing your own work). Others prefer impersonal forms. Check your style guide.",
        "**Contractions and slang.** Usually avoided in formal papers (“do not” rather than “don’t”), though less formal genres such as blogs may use them.",
        "**Technical terms.** Use them when they are more precise, and define each one the first time. Don’t use jargon to sound clever.",
        "**Respectful language.** Describe people the way current style guides recommend, and be specific (“adults aged 65 and over” rather than “the elderly”)."
      ]},
      "**Concision** means saying what you mean in the fewest words that stay clear. It is not the same as being short: cutting a needed definition makes writing shorter but worse.",
      {table:[
        ["Wordy","Concise"],
        ["It is important to note that the results were significant.","The results were significant."],
        ["Due to the fact that the sample was small…","Because the sample was small…"],
        ["The researchers conducted an investigation of…","The researchers investigated…"],
        ["In order to","To"],
        ["A total of 25 participants took part in the study.","Twenty-five people took part."]
      ]},
      "Look out for **nouns made from verbs** (“conducted an investigation”, “made a decision”) and **empty openers** (“It is important to note that”, “It should be mentioned that”). Turning them back into verbs usually makes a sentence shorter and clearer."
    ]},
    {h:"Writing in a second language, and tools that help", body:[
      "A great deal of research is written by people using a second or third language, most often English. Writing well in an additional language is a skill you build, not a test you pass or fail. Many scholars also publish in Spanish, Portuguese, French, Chinese and other languages, and research written in those languages is real scholarship too.",
      "Useful, free help:",
      {list:[
        "The **[Academic Phrasebank](https://www.phrasebank.manchester.ac.uk/)** from the University of Manchester, created by John Morley. It organises phrases by section of a paper (introducing work, referring to sources, describing methods, reporting results, discussing findings, writing conclusions) and by job (being cautious, being critical, comparing, defining, giving examples, signalling transition). Its homepage says it was designed primarily for writers whose first language is not English, but that native speakers use it too.",
        "**Reading in your field** with a notebook: collect the phrases good papers use to introduce a gap, report a result or admit a limitation.",
        "**Writing centres and language support** at universities, and peer writing groups, which give feedback a tool can’t.",
        "**Grammar and spelling checkers** built into word processors, and standalone tools (some free, some paid). They catch surface errors, not weak arguments."
      ]},
      {tip:"The Phrasebank itself says that reusing its general phrases is not stealing other people’s ideas and is not plagiarism. Copying a sentence that carries someone else’s **content** (their finding, idea or wording of an argument) is, unless you quote and cite it."},
      "**AI writing tools** can suggest smoother wording or explain grammar. Use them like a helpful but unreliable editor: check every change keeps your meaning, never let a tool add claims or citations you haven’t checked, don’t paste in confidential data or someone else’s unpublished work, and follow your university’s or journal’s rules on [[ai-disclosure|disclosing AI use]] (the ethics unit of this track covers this in {{ai-research-policies}}).",
      {warn:"Be wary of paid services that promise to “guarantee publication” or to write your paper for you. Language editing is legitimate; buying authorship or acceptance is not."}
    ]}
   ],
   try:[
    {id:"t4u10-l1-x1", type:"mcq", q:"Which of these is an arguable thesis statement?", options:[
      {t:"In rural clinics, text-message reminders reduced missed vaccination appointments more than paper cards, but only where phone coverage was reliable.", ok:true, why:"It makes a specific claim that someone could question (“how do you know?”, “in which clinics?”), and it can be supported with evidence. The condition about phone coverage makes it precise, not weak."},
      {t:"This essay will look at vaccination reminders.", why:"This is an announcement of a topic. It doesn’t say what the writer will argue about vaccination reminders."},
      {t:"Vaccines are an important part of public health.", why:"Nobody seriously disputes this, so there is nothing to argue. A thesis has to take a position that needs support."},
      {t:"Text messages and paper cards.", why:"This is just a topic. It doesn’t make any claim at all."}
    ]},
    {id:"t4u10-l1-x2", type:"order", q:"Kenji’s paragraph got shuffled. Put its sentences back in the usual order: topic sentence, evidence, analysis, link.", items:[
      {t:"Community radio was the main source of flood warnings in the three villages we studied.", why:"First: the topic sentence states the paragraph’s single point."},
      {t:"In interviews, 22 of 30 households said they first heard the warning on the local station.", why:"Second: evidence that supports the point (invented figures for practice)."},
      {t:"This matters because mobile coverage often fails in storms, while battery radios keep working.", why:"Third: analysis explains why the evidence is significant."},
      {t:"Any new warning system should therefore build on radio rather than replace it, as the next section argues.", why:"Last: the link connects the point back to the thesis and forward to the next section."}
    ]},
    {id:"t4u10-l1-x3", type:"match", q:"Match each signpost to the relationship it signals.", pairs:[
      ["However,","Contrast","“However” warns the reader that the next idea pulls against the last one."],
      ["As a result,","Cause and effect","It claims the next idea follows from the previous one."],
      ["For instance,","Example","It introduces a specific case of a general point."],
      ["Admittedly,","Concession","It grants a point to the other side before answering it."],
      ["Taken together,","Summing up","It signals a summary of several points."]
    ]},
    {id:"t4u10-l1-x4", type:"spot", q:"Ana is checking her draft abstract for **overclaiming**. Tap every phrase that claims more than the study could show.", ask:"overclaims", parts:[
      "We surveyed ",{t:"112 first-year students at one university", flag:false, why:"This is a plain description of the sample. Being specific is good practice, not an overclaim."}," about study habits. Students who used spaced practice ",{t:"reported higher exam confidence", flag:false, why:"This accurately describes what a survey measures: what students reported."},". This ",{t:"proves", flag:true, why:"A one-off survey at one university can show an association, not proof. “Suggests” or “is consistent with” fits the evidence."}," that spaced practice ",{t:"causes better grades in all students", flag:true, why:"Two overclaims: a survey of confidence can’t show cause, and it didn’t measure grades at all. “All students” also generalises far beyond one university."},". ",{t:"These findings may not apply to other institutions", flag:false, why:"This is an honest limitation: an appropriate hedge."},", and ",{t:"universities must immediately redesign every course", flag:true, why:"A sweeping recommendation that the data can’t support. A cautious version: “universities could consider testing spaced practice in their own courses.”"},"."
    ]},
    {id:"t4u10-l1-x5", type:"sort", q:"Sort each sentence: is the strength of the claim about right, overclaimed or over-hedged?", buckets:["About right","Overclaimed","Over-hedged"], items:[
      {t:"In our sample, tutoring was associated with higher attendance.", b:0, why:"It reports what was found, in the sample where it was found, without claiming cause."},
      {t:"Tutoring eliminates absenteeism.", b:1, why:"“Eliminates” is absolute, and no single study could show that for everyone."},
      {t:"It could perhaps possibly be the case that tutoring might help.", b:2, why:"Four hedges in one sentence. One well-placed hedge (“tutoring may help”) says the same thing more clearly."},
      {t:"These results suggest that tutoring may improve attendance, although the study was not randomised.", b:0, why:"A reasonable hedge plus an honest limitation: the strength matches the design."},
      {t:"Everyone agrees that tutoring is the best intervention.", b:1, why:"“Everyone agrees” and “the best” are over-generalisations that need evidence most papers can’t provide."},
      {t:"Attendance was maybe somewhat slightly higher, possibly.", b:2, why:"If the data show a difference, report it with its size; piling up vague words hides the finding."}
    ]},
    {id:"t4u10-l1-x6", type:"mcq", q:"Which rewrite of this sentence is the most concise **without losing meaning**? “It is important to note that, due to the fact that the survey was conducted online, a total of 12 older residents did not take part in the study.”", options:[
      {t:"Because the survey was online, 12 older residents did not take part.", ok:true, why:"It removes the empty opener (“It is important to note that”), replaces “due to the fact that” with “because”, and drops “a total of”, while keeping every piece of meaning."},
      {t:"The survey was online.", why:"This is shorter but loses the important point: 12 older residents were left out because of it. Concision keeps the meaning."},
      {t:"Notably, owing to the online nature of the survey methodology, 12 older residents did not participate.", why:"This swaps one set of wordy phrases for another (“owing to the online nature of the survey methodology”)."},
      {t:"Older people don’t use the internet, so they didn’t take part.", why:"This adds an over-generalised claim about all older people that the data don’t support, and uses an informal register."}
    ]},
    {id:"t4u10-l1-x7", type:"mcq", q:"Lucía, writing in her second language, copies the phrase “There is some evidence to suggest that…” from the Academic Phrasebank into her discussion section. Is that plagiarism?", options:[
      {t:"No. It is a general phrase that carries no one’s ideas; the Phrasebank says reusing such phrases is not plagiarism.", ok:true, why:"Plagiarism is presenting someone else’s ideas or words as your own. Stock academic phrases are shared tools of the language, which is exactly why the Phrasebank collects them."},
      {t:"Yes. Any phrase taken from a website must be quoted and cited.", why:"That rule applies to content: someone’s idea, finding or distinctive wording. General phrases like this one belong to everyone who writes in the language."},
      {t:"Yes, unless she changes every word to avoid matching software.", why:"Similarity software would flag lots of common phrases in every paper. Tutors and editors look at whether ideas and content are copied, not whether stock phrases appear."},
      {t:"Only if her paper is in English; other languages have different rules.", why:"The principle (credit others’ ideas and words; shared stock phrases are fine) applies in any language."}
    ]}
   ],
   apply:{intro:"Practise on your own writing, or on a topic you care about. Everything here is free and works on a phone.", tasks:[
    {t:"Turn a topic into a thesis", how:["Choose a topic from your work, studies or community (for example: bus routes, school lunches, a local river, how your team handles handovers).","Write it as a topic (two or three words), then as an announcement (“This report will…”).","Now write an arguable thesis: a specific claim someone could question, which you could support with evidence.","Check it against three questions: is it specific? arguable? supportable with evidence you have or could get?"], write:"Topic… Announcement… My thesis… Specific? Arguable? Supportable?"},
    {t:"Label a paragraph’s moves", how:["Pick a paragraph you’ve written, or one from a free report or open-access article.","Label each sentence: topic sentence, evidence, analysis, link (or ‘other’).","If there’s no analysis sentence, write one that explains why the evidence matters.","If the paragraph makes two points, note where you would split it."], write:"The paragraph’s point in one sentence… Labels… The analysis sentence I added…"},
    {t:"Do a hedge audit", how:["Find a news article that reports a research study, then find the study’s abstract (often free even when the full paper isn’t).","List the verbs each uses for the main finding (proves, shows, finds, suggests, may…).","Compare: did the news story make the claim stronger than the study did?","Rewrite the news headline so its strength matches the abstract."], write:"News verb… Abstract verb… Was it stronger, weaker or the same?… My rewritten headline…"},
    {t:"Start your own phrase bank", how:["Open the Academic Phrasebank (phrasebank.manchester.ac.uk) in your browser.","Visit “Being cautious” and one section that matches what you write most (for example “Reporting results” or “Referring to sources”).","Copy five phrases you would really use into your notes, under a heading for each job they do.","Add two phrases you noticed in papers from your own field."], write:"Being cautious: … Reporting results: … From my field: …"}
   ], proof:"A thesis statement you could defend, one labelled paragraph, a hedge audit of a real news story, and a short personal phrase bank."},
   read:[
     {book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”"},
     {book:"owg", where:"Section 10.6 “Editing Focus: Paragraphs and Transitions”"},
     {book:"owg", where:"Section 4.8 “Spotlight on … Multilingual Writers”", note:"Background reading on writing in more than one language."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u10-l2", title:"Drafting, feedback and revision", minutes:50,
   hook:{q:"Writing guides say the biggest improvements to a paper usually come at which stage?", options:["Typing the first draft in one perfect pass","Choosing fonts and formatting","Revising: rethinking, reorganising and rewriting drafts","Proofreading for typos"], answer:2, reveal:"Writing guides such as the OpenStax *Writing Guide* put **revision** at the centre: rethinking the argument, moving and cutting sections and rewriting paragraphs, long before polishing sentences. (No one has a precise figure for how writers split their time, so treat this as a strong pattern, not a measured rule.) This lesson gives you tools for each stage: outlines, rough drafts, reverse outlines, feedback and three kinds of revision."},
   goals:[
     "Describe writing as a cycle of planning, drafting, feedback and revision rather than one perfect pass",
     "Build an outline from a thesis, and draft without stopping to polish",
     "Use a reverse outline to find gaps, repetition and paragraphs doing two jobs",
     "Ask for useful feedback, respond to it calmly, and revise, edit and proofread as separate passes"
   ],
   learn:[
    {h:"Writing is a cycle, not a performance", body:[
      {lead:"Almost no one writes a good paper from top to bottom in one go. Good writing comes from a cycle: plan, draft, look again, get feedback, rethink, and only then polish."},
      "The OpenStax *Writing Guide* calls writing **recursive**: you loop back to earlier stages as your thinking develops. Drafting often shows you what you really think, which can change your thesis, which changes your outline.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="m4u10a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="30" y="10" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="35" text-anchor="middle">Plan and outline</text><rect class="d-sage" x="30" y="66" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="91" text-anchor="middle">Rough draft</text><rect class="d-gold" x="30" y="122" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="147" text-anchor="middle">Reverse outline</text><rect class="d-gold" x="30" y="178" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="203" text-anchor="middle">Feedback from others</text><rect class="d-rose" x="30" y="234" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="252" text-anchor="middle">Revise</text><text class="s" x="145" y="267" text-anchor="middle">argument, structure</text><rect class="d-panel" x="30" y="290" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="308" text-anchor="middle">Edit</text><text class="s" x="145" y="323" text-anchor="middle">paragraphs, sentences</text><rect class="d-panel" x="30" y="346" width="230" height="40" rx="8" stroke-width="2"/><text x="145" y="364" text-anchor="middle">Proofread</text><text class="s" x="145" y="379" text-anchor="middle">typos, references</text><path class="d-ink" d="M145,50 L145,64 M145,106 L145,120 M145,162 L145,176 M145,218 L145,232 M145,274 L145,288 M145,330 L145,344" stroke-width="2" fill="none"/><path class="d-ink" d="M260,254 L300,254 L300,86 L264,86" stroke-width="2" fill="none" marker-end="url(#m4u10a)"/><text class="s" x="304" y="160">loop</text><text class="s" x="304" y="176">back</text><text class="s" x="170" y="410" text-anchor="middle">Big changes first; polish last.</text></svg>', alt:"A vertical flow of seven boxes: Plan and outline, Rough draft, Reverse outline, Feedback from others, Revise (argument, structure), Edit (paragraphs, sentences), Proofread (typos, references). An arrow loops from Revise back up to Rough draft, labelled loop back. Caption: big changes first; polish last.", cap:"The writing cycle. Revision often sends you back to drafting, and that is normal."},
      "Two rules follow from the cycle. **Separate drafting from polishing**, because fixing commas in a paragraph you later delete wastes time. And **make big changes before small ones**: argument and structure first, sentences next, typos last."
    ]},
    {h:"Outlining: plan the argument before the sentences", body:[
      "An outline is a plan of your argument: the thesis, the main points in order, and the evidence for each. It can be a numbered list, a set of headings in a document, sticky notes on a wall or a mind map. What matters is that it shows the **logic**, not just the topics.",
      {ex:"Thesis: Village water committees kept hand pumps working longer when they controlled the repair budget.\n\n1. Background: why hand pumps break and who fixes them\n   – evidence: earlier studies (literature review)\n2. Pumps lasted longer where committees held the budget\n   – evidence: repair records, 40 villages\n3. Why: faster repairs, local mechanics, clearer responsibility\n   – evidence: interviews with committee members\n4. Limits: two regions only; committees may differ in other ways\n5. Conclusion: what this means for how funds are given", label:"Worked example: a paragraph-level outline (invented study)"},
      "Notice that each numbered point is a **claim**, not a label. “Pumps lasted longer where committees held the budget” tells you what the section argues; “Results” doesn’t. Section 12.5 of the OpenStax *Writing Guide* gives the same advice: outline each body paragraph with its topic sentence, its reasoning and its cited evidence.",
      "Empirical papers in many sciences follow a standard outline (Introduction, Methods, Results and Discussion, often shortened to [[imrad|IMRaD]]; see {{paper-structure}} in the reading-papers unit of this track). Even then, you still need an argument inside each section: what gap the introduction identifies, and what the discussion claims the results mean.",
      {tip:"If you outline in a word processor with heading styles, the navigation pane or outline view becomes your outline, and you can drag sections around. See {{styles-headings}}."}
    ]},
    {h:"Drafting: get it down, then get it right", body:[
      "A first draft has one job: to exist. It can be rough. Some practical habits help:",
      {list:[
        "**Start where it’s easiest.** In an empirical paper, many people draft the methods and results first, because they describe what was done and found, then write the introduction and discussion around them.",
        "**Leave markers instead of stopping.** Type [CITE], [CHECK NUMBER] or [EXAMPLE?] and keep going. Searching for a reference mid-sentence breaks your flow; your markers are easy to find later.",
        "**Write in short, regular sessions** if you can. Many writers find that 30 to 60 focused minutes on most days beats waiting for a free week that never comes. Find what works for you; there’s no single right rhythm.",
        "**Keep a ‘cuttings’ file.** Paste removed paragraphs there instead of deleting them. It makes cutting much less painful."
      ]},
      "Save versions as you go. Name files with the date in year-month-day form ([[iso-8601]]), such as `report-draft-2026-03-14.docx`, or rely on your app’s [[version-history]]. Then a bold revision is never a risk.",
      {warn:"If you use an AI tool to help draft, remember what it can’t do: it doesn’t know your data, it can invent sources, and pasting unpublished or confidential material into an online tool may break your institution’s rules. The ethics unit of this track covers [[ai-disclosure|disclosure]] ({{ai-research-policies}}); the short version is to check your rules and verify everything."}
    ]},
    {h:"Reverse outlining: see the draft you actually wrote", body:[
      "A [[reverse-outline]] is an outline you make **after** drafting, from the draft itself. It shows the structure you actually wrote, which is often different from the one you planned.",
      {ol:[
        "Number every paragraph.",
        "Beside each one (in a margin comment or a separate list), write its main point in one short sentence. If you can’t, note that.",
        "Read the list of points on its own, top to bottom, without the draft.",
        "Ask: does each point support the thesis? Is the order logical? Are any points repeated? Is anything missing? Does any paragraph hold two points?"
      ]},
      {table:[
        ["¶","Main point (from the draft)","What the reverse outline shows"],
        ["1","Hand pumps often break within a few years","Fine: background"],
        ["2","Committees with budgets fixed pumps faster","Fine: first main point"],
        ["3","Local mechanics were trained; also, rainy seasons affect roads","Two points: split it"],
        ["4","Committees with budgets fixed pumps faster (again)","Repeats ¶2: merge"],
        ["5","History of the funding agency","Off the thesis: cut or move"],
        ["—","(no paragraph on limits)","Gap: add the limitations"]
      ]},
      {key:"A reverse outline turns a messy draft into a short list you can see all at once. Structural problems that hide across ten pages become obvious in ten lines."}
    ]},
    {h:"Asking for, and using, feedback", body:[
      "Other readers see what you can’t, because you know what you meant. Useful readers include classmates or colleagues, a supervisor, a university writing centre, and someone **outside** your field, who will spot every undefined term.",
      "**Ask for the feedback you need.** “Any thoughts?” gets vague answers. Specific questions get useful ones:",
      {list:[
        "“Can you find my main argument? Write it in one sentence.”",
        "“Where did you get lost or bored?”",
        "“Which claim did you find least convincing?”",
        "“At this stage, please ignore typos; I’m checking structure.”"
      ]},
      "Writing centres often sort comments into **global** concerns (argument, structure, evidence, audience) and **local** ones (sentences, grammar, spelling, formatting). Ask for global feedback on early drafts and local feedback on late ones.",
      "To collect feedback in a shared file, use [[comment|comments]] and [[track-changes]] or [[suggesting-mode]] (see {{track-changes-comments}}), so every change can be accepted or rejected.",
      {h:"Receiving feedback well"},
      {list:[
        "**Read it all, then wait.** Criticism stings, even when it’s fair. A day’s distance helps you read it as information about the text, not a judgement of you.",
        "**Sort it**: things to do, things to consider, things you’ll decline (with a reason).",
        "**Look for patterns.** If two readers stumble at the same place, the problem is real even if their suggested fixes differ.",
        "**You’re still the author.** You don’t have to accept every suggestion, but you should understand why it was made."
      ]},
      {tip:"When you give feedback, be specific and kind, comment on the text rather than the person, and say what works as well as what doesn’t. “Your second paragraph convinced me; the third lost me because I couldn’t see how the survey connects to the thesis” helps far more than “Good, but unclear.”"}
    ]},
    {h:"Revise, edit, proofread: three different passes", body:[
      "These words are often used interchangeably, but they are different jobs, done best in this order:",
      {table:[
        ["Pass","Question","Examples"],
        ["Revise","Is the argument right and well organised?","Sharpen the thesis; move, merge or cut sections; add missing evidence"],
        ["Edit","Is each paragraph and sentence clear?","Topic sentences, transitions, hedging, concision, register"],
        ["Proofread","Is it correct?","Spelling, numbers, figure labels, every citation matches the reference list"]
      ]},
      "Section 12.5 of the OpenStax *Writing Guide* describes revision as large-scale rethinking that often means substantial cutting, moving and rewriting. That is why revision can feel uncomfortable: it’s supposed to change things.",
      "Practical tricks for later passes:",
      {list:[
        "**Read aloud**, or use your device’s read-aloud feature. Your ear catches clumsy sentences and missing words your eye skips.",
        "**Change the view**: print it, change the font, or read on a phone. Familiar text looks new.",
        "**Check one thing at a time**: one pass just for numbers, one just for citations.",
        "**Check references last**, against the sources themselves. Reference managers save time, but what they produce still needs checking (the citing unit of this track shows how)."
      ]},
      {lab:"cl-apa-fix", t:"Practise: proofread a flawed APA reference"}
    ]}
   ],
   try:[
    {id:"t4u10-l2-x1", type:"order", q:"Put these stages of writing a report in the most efficient order.", items:[
      {t:"Write a working thesis and an outline", why:"First: a plan of the argument guides everything that follows (and can change later)."},
      {t:"Write a rough first draft, leaving [CITE] markers", why:"Second: get the whole argument down before polishing any of it."},
      {t:"Make a reverse outline and fix the structure", why:"Third: check the structure you actually wrote before investing in sentences."},
      {t:"Edit paragraphs and sentences for clarity", why:"Fourth: once the structure is stable, make each paragraph and sentence clear."},
      {t:"Proofread spelling, numbers and references", why:"Last: polishing text that might still be cut wastes effort, so proofreading comes at the end."}
    ]},
    {id:"t4u10-l2-x2", type:"sort", q:"Sort these feedback comments: is each a **global** concern (argument, structure, evidence) or a **local** one (sentences, grammar, format)?", buckets:["Global","Local"], items:[
      {t:"I can’t tell what your main argument is.", b:0, why:"The thesis is the core of the whole piece: a global concern."},
      {t:"Section 3 seems to belong before Section 2.", b:0, why:"Order of sections is structure: global."},
      {t:"There’s a comma splice in paragraph 4.", b:1, why:"A sentence-level grammar issue: local."},
      {t:"Your claim about costs has no evidence.", b:0, why:"Missing evidence weakens the argument itself: global."},
      {t:"“Data” is used as singular and plural inconsistently.", b:1, why:"Word-level consistency: local."},
      {t:"The reference list uses two different date formats.", b:1, why:"Formatting of references: local, fixed during proofreading."}
    ]},
    {id:"t4u10-l2-x3", type:"spot", q:"Here is Mei’s reverse outline of an essay whose thesis is “Free bus passes increased older residents’ attendance at community centres.” Tap the paragraphs that show a **problem**.", ask:"shows a problem", parts:[
      {t:"¶1 Older residents can feel isolated without transport.", flag:false, why:"Background that sets up the thesis. Fine."},"\n",
      {t:"¶2 Centre attendance by over-65s rose after passes began.", flag:false, why:"The main evidence for the thesis. Fine."},"\n",
      {t:"¶3 Attendance rose; also, the centres’ heating was replaced.", flag:true, why:"Two points in one paragraph. And the heating change is a possible alternative explanation that deserves its own paragraph."},"\n",
      {t:"¶4 The history of the city’s tram network.", flag:true, why:"Interesting, but it doesn’t support the thesis about bus passes and attendance. Cut or move it."},"\n",
      {t:"¶5 Attendance by over-65s rose after passes began (again).", flag:true, why:"This repeats ¶2. Merge the two."},"\n",
      {t:"¶6 Limits: one city, no comparison group.", flag:false, why:"An honest limitations paragraph strengthens an argument. Fine."}
    ], mono:false},
    {id:"t4u10-l2-x4", type:"mcq", q:"Fatima asks a colleague to read her draft grant proposal. Which request will get her the **most useful** feedback at the early-draft stage?", options:[
      {t:"“Could you tell me in one sentence what you think I’m asking for, and where you got lost?”", ok:true, why:"Specific questions about the argument and clarity are what an early draft needs. If the reader can’t state her aim, nothing else matters yet."},
      {t:"“Any thoughts?”", why:"Vague requests get vague answers. The reader doesn’t know what kind of help is useful now."},
      {t:"“Please fix all the typos.”", why:"Proofreading an early draft wastes the reader’s time: whole paragraphs may still change or disappear."},
      {t:"“Just tell me it’s good so I can submit it.”", why:"This asks for reassurance, not feedback, and would hide problems a funder will spot."}
    ]},
    {id:"t4u10-l2-x5", type:"mcq", q:"Dmitri’s supervisor comments: “The discussion overstates what the data show.” Dmitri disagrees at first. What is the best next step?", options:[
      {t:"Reread the discussion against the results, note which claims go beyond them, and either revise or explain his reasoning in a reply.", ok:true, why:"Treat feedback as information about the text. Check it against the evidence; if he still disagrees, he can explain why, politely and with reasons."},
      {t:"Ignore it: he is the author.", why:"He is the author, but ignoring a specific concern from an expert reader risks the same objection from examiners or reviewers later."},
      {t:"Delete the whole discussion section.", why:"An overreaction. The comment is about the strength of some claims, which hedging and clearer links to the data can fix."},
      {t:"Ask a different person until someone says it’s fine.", why:"Shopping for agreement doesn’t fix the problem. If several readers disagree, he should weigh their reasons, not count votes."}
    ]},
    {id:"t4u10-l2-x6", type:"match", q:"Match each revision pass to the job it does.", pairs:[
      ["Revising","Rethinking the argument and structure","Revision is large-scale: thesis, sections, evidence."],
      ["Editing","Making paragraphs and sentences clear","Editing works on topic sentences, transitions, concision and register."],
      ["Proofreading","Catching typos, wrong numbers and citation errors","Proofreading is the final check for correctness."],
      ["Reverse outlining","Showing the structure you actually wrote","It lists each paragraph’s point so structural problems stand out."]
    ]}
   ],
   apply:{intro:"Use a piece of your own writing (an old essay, a report, a long email) or start a short new one.", tasks:[
    {t:"Outline a short argument", how:["Write a working thesis in one sentence.","List three to five points that support it, each written as a claim (a sentence), not a label.","Under each, note the evidence you have or would need.","Add one point that admits a limit or answers an objection."], write:"Thesis… Point 1 + evidence… Point 2 + evidence… Point 3 + evidence… A limit or objection…"},
    {t:"Reverse-outline a draft with comments", write:"Paragraph points… Problems found (gaps, repeats, two-point paragraphs, off-thesis)… What I’ll change…", app:{
      ms:["Open your draft in Word. Click in the first paragraph and choose **Review → New Comment**.","Type the paragraph’s main point in one short sentence. Repeat for every paragraph.","Read only the comments, top to bottom (the comments pane on the right lists them)."],
      google:["Open your draft in Google Docs. Select the first words of a paragraph and choose **Insert → Comment** ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:M]]).","Type the paragraph’s main point in one short sentence and click **Comment**. Repeat for every paragraph.","Read only the comments, top to bottom."],
      libre:["Open your draft in LibreOffice Writer. Select the first words of a paragraph and choose **Insert → Comment**.","Type the paragraph’s main point in one short sentence. Repeat for every paragraph.","Read only the comments in the margin, top to bottom."],
      apple:["Open your draft in Pages. Select the first words of a paragraph and choose **Insert → Comment**.","Type the paragraph’s main point in one short sentence. Repeat for every paragraph.","Read only the comments, top to bottom."],
      all:["No word processor? Number the paragraphs and write the points as a list in any notes app."]
    }},
    {t:"Ask for specific feedback", how:["Choose one reader: a friend, colleague, classmate or family member.","Send your draft with three specific questions (for example: “What is my main point?”, “Where did you get lost?”, “Which claim convinced you least?”).","When replies arrive, sort each comment into do / consider / decline-with-reason."], write:"My three questions… Their answers… Do / consider / decline…"},
    {t:"Do one read-aloud editing pass", how:["Read your draft aloud slowly, or use your device’s read-aloud feature.","Mark every place you stumble, run out of breath or lose the thread.","Rewrite those sentences, then note which kinds of problem you found most."], write:"Sentences I stumbled on… My rewrites… The problem I make most often…"}
   ], proof:"An outline built from claims, a reverse outline of a real draft with the problems it revealed, a short feedback log, and a list of sentences improved by reading aloud."},
   read:[
     {book:"owg", where:"Section 12.5 “Writing Process: Integrating Research”", note:"See especially “Don’t Skip the Outline”, “Peer Review: Switch Sides” and “Revising: Who’s Game?”."},
     {book:"wss", where:"Section 3.4 “Collaborative Editing and Reviewing in Microsoft Word” and Section 3.8 “Collaborative Editing and Reviewing in Google Docs”", note:"Background reading for comments, tracked changes and suggestions."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u10-l3", title:"Presenting research: talks and posters", minutes:55,
   hook:{q:"A conference gives Sione a “15-minute slot”. How long should his talk be?", options:["15 minutes: use every second","Noticeably less than 15 minutes, because the slot usually includes questions and changing speakers","About 20 minutes; chairs always allow extra time","It doesn’t matter, as long as the slides are good"], answer:1, reveal:"**Less than the slot.** At most conferences a slot includes questions and the changeover to the next speaker, and chairs keep sessions on time, often by stopping speakers who run over. The programme or the chair can tell you the split. This lesson covers planning research talks that fit their time, slides that support your message, posters and poster sessions, and making both work for everyone in the audience."},
   goals:[
     "Plan a research talk around one message that fits its time slot, including questions",
     "Design slides where each headline makes a claim and the visual shows the evidence",
     "Plan a poster and a short spoken pitch for a poster session",
     "Make talks and posters accessible: readable, described, captioned and shared in advance"
   ],
   learn:[
    {h:"What’s different about research talks", body:[
      {lead:"A research talk is a presentation with one extra duty: the audience must be able to judge whether your claims are justified. So you show not just what you found, but enough of how you found it."},
      "Everything from the Digital Foundations presentations unit still applies: start from the audience and purpose, write one [[key-message|main message]], storyboard before you open the app (see {{presentation-planning}} and {{presenting-skills}}). This lesson adds what is specific to research.",
      {table:[
        ["Format","Typical length","What it’s for"],
        ["[[conference-talk|Conference talk]]","Often 10–20 minutes, including questions","One study or result, for specialists in a related area"],
        ["Seminar or colloquium","Often 45–60 minutes, with a long discussion","A body of work, for a department or research group"],
        ["Lightning talk","A few minutes","A teaser that sends people to your poster or paper"],
        ["Three-minute thesis","3 minutes, one static slide","Explaining your research to non-specialists"],
        ["Defence or progress talk","Set by your institution","Showing examiners or a committee what you did"]
      ]},
      "Lengths vary a lot, so these are only common patterns: always check the programme. The three-minute format comes from the **Three Minute Thesis (3MT®)** competition, first held at the University of Queensland in 2008 and now run by many universities, which is excellent practice in explaining research plainly.",
      {tip:"Ask who will be in the room. A talk to your own sub-field can skip basics; a talk to a mixed department needs a slide on why the question matters and plain definitions of key terms."}
    ]},
    {h:"Fit the time you have", body:[
      "Running over is the most common, and most avoidable, problem in research talks. It takes time from other speakers and from your own questions, which are often the most useful part.",
      {fig:'<svg viewBox="0 0 340 200"><text x="170" y="20" text-anchor="middle">Example: a 15-minute slot</text><rect class="d-sage" x="10" y="36" width="220" height="50" rx="4" stroke-width="2"/><text x="120" y="58" text-anchor="middle">Talk</text><text class="s" x="120" y="76" text-anchor="middle">10 min</text><rect class="d-gold" x="230" y="36" width="88" height="50" rx="4" stroke-width="2"/><text x="274" y="58" text-anchor="middle">Q&amp;A</text><text class="s" x="274" y="76" text-anchor="middle">4 min</text><rect class="d-rose" x="318" y="36" width="12" height="50" rx="2" stroke-width="2"/><path class="d-ink" d="M324,92 L324,112 L286,112" stroke-width="1.5" fill="none"/><text class="s" x="282" y="116" text-anchor="end">1 min changeover</text><text x="10" y="150">Rehearse to about 9 minutes:</text><text class="s" x="10" y="170">nerves, a slow laptop and a late start</text><text class="s" x="10" y="188">all eat into the time on the day.</text></svg>', alt:"A horizontal bar for an example 15-minute slot: a long section labelled Talk, 10 minutes; a shorter section labelled Q and A, 4 minutes; and a thin end section labelled 1 minute changeover. Below: rehearse to about 9 minutes, because nerves, a slow laptop and a late start all eat into the time on the day.", cap:"An invented example. Your programme or chair tells you the real split."},
      {list:[
        "**Find out the real split**: how much of the slot is for questions, and whether the chair will hold up time cards.",
        "**Cut to one message.** A 10-minute talk can explain one study well. Methods get just enough detail for the audience to trust the result; the rest goes in the paper.",
        "**Rehearse aloud with a timer**, at least twice, ideally once in front of someone. Silent read-throughs are always faster than the real thing.",
        "**Know your cuts in advance.** Mark one or two slides you can skip without losing the thread if you start late."
      ]},
      {warn:"Don’t speed up to fit too much in. Fast talking with dense slides loses everyone, especially people listening in a second language, through an interpreter, or with captions."}
    ]},
    {h:"Slides that support a research story", body:[
      "Research slides tend to fail in two ways: walls of text copied from the paper, and figures copied from the paper with labels nobody can read. A helpful alternative, sometimes called the **assertion–evidence** approach (associated with the engineering communication researcher Michael Alley), is simple:",
      {list:[
        "**Headline = a full-sentence claim.** “Trees cooled bus stops more than shelters did”, not “Results”.",
        "**Body = visual evidence** for that claim: a simplified chart, a photo, a diagram, a map. Few or no bullet points.",
        "**You do the explaining**, out loud."
      ]},
      {table:[
        ["Topic headline","Assertion headline"],
        ["Methods","We measured air temperature at 24 bus stops for 12 afternoons"],
        ["Results 2","Shaded stops were about 3 °C cooler than open ones"],
        ["Limitations","One summer in one city: other climates may differ"]
      ]},
      "Redraw figures for the screen instead of pasting them from the paper: one message per chart, large axis labels, a title that states the finding, and highlight colour only on what matters. The Digital Foundations unit covers charts and pictures in {{slide-visuals}} and design in {{slide-design}}.",
      {list:[
        "**Credit sources** briefly on the slide where you use them (author and year is often enough), with full references on a final slide or handout.",
        "**Acknowledge** co-authors, participants (in general terms) and funders.",
        "**Number your slides**, so people can ask “could you go back to slide 9?”.",
        "**Prepare backup slides** after your final slide, with extra detail you expect to be asked about."
      ]}
    ]},
    {h:"Questions, and what to do when you don’t know", body:[
      "Questions are a gift: they show what people found interesting or unclear. A few habits help:",
      {list:[
        "**Repeat or rephrase the question** before answering, so the whole room (and anyone online) hears it, and so you check you understood.",
        "**Answer briefly**, then stop. If it needs a long answer, offer to talk afterwards.",
        "**“I don’t know” is allowed.** Say what you do know, what would be needed to find out, or offer to follow up. Guessing confidently in public is worse.",
        "**Treat critical questions as useful**, even when they’re put bluntly. “That’s a fair point; we couldn’t control for that, and it’s a limitation” is a strong answer.",
        "**Long comments that aren’t questions** can be thanked and left there. The chair is responsible for managing time; you can let them."
      ]},
      {tip:"Before the talk, list the five questions you’d most dread. Prepare short answers, and backup slides for the hardest."}
    ]},
    {h:"Posters and poster sessions", body:[
      "A research poster is a large visual summary of a study, displayed at a [[poster-session]]: a period when presenters stand by their posters and talk with people who walk past. It’s a conversation, not a lecture, and often a better way to meet people working on the same things than a talk.",
      {fig:'<svg viewBox="0 0 340 380"><rect class="d-panel" x="70" y="10" width="200" height="283" rx="4" stroke-width="2"/><rect class="d-rose" x="80" y="20" width="180" height="40" rx="4" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Title = the finding</text><text class="s" x="170" y="53" text-anchor="middle">authors, affiliations</text><rect class="d-lup" x="80" y="70" width="85" height="56" rx="4" stroke-width="2"/><text x="122" y="94" text-anchor="middle">Question</text><text class="s" x="122" y="112" text-anchor="middle">why it matters</text><rect class="d-lup" x="175" y="70" width="85" height="56" rx="4" stroke-width="2"/><text x="217" y="94" text-anchor="middle">Methods</text><text class="s" x="217" y="112" text-anchor="middle">brief, visual</text><rect class="d-sage" x="80" y="136" width="180" height="88" rx="4" stroke-width="2"/><text x="170" y="174" text-anchor="middle">Main result</text><text class="s" x="170" y="192" text-anchor="middle">one big, clear figure</text><rect class="d-gold" x="80" y="234" width="120" height="49" rx="4" stroke-width="2"/><text x="140" y="256" text-anchor="middle">Conclusion</text><text class="s" x="140" y="273" text-anchor="middle">+ limits</text><rect class="d-soft" x="210" y="234" width="50" height="49" rx="4" stroke-width="2"/><text class="s" x="235" y="256" text-anchor="middle">QR,</text><text class="s" x="235" y="272" text-anchor="middle">contact</text><text class="s" x="170" y="316" text-anchor="middle">Readers scan top to bottom, left to right.</text><text class="s" x="170" y="334" text-anchor="middle">Full methods, tables and references go</text><text class="s" x="170" y="352" text-anchor="middle">in a PDF linked from the QR code.</text></svg>', alt:"A portrait poster outline. At the top, a wide box: Title = the finding, with authors and affiliations. Below, two boxes side by side: Question (why it matters) and Methods (brief, visual). Then a large box: Main result, one big clear figure. At the bottom, a box for Conclusion plus limits, and a small box for a QR code and contact details. Caption: readers scan top to bottom, left to right; full methods, tables and references go in a PDF linked from the QR code.", cap:"One common poster layout. Many others work; what matters is a clear reading path and very little text."},
      {list:[
        "**Check the instructions first.** The conference sets the size and orientation. A0 (841 × 1189 mm) is one common size; others give sizes in inches, or ask for landscape. Getting this wrong is the classic poster disaster.",
        "**Make the title the finding** if your field allows it, and big enough to read from across an aisle.",
        "**Use far fewer words than you think.** Readers stand, often for a minute or two. Put detail in a linked PDF (a QR code works well) or a handout.",
        "**Plan the reading path**: columns, numbered sections or arrows. All A-series paper sizes share the same shape, so you can design on an A4 page and scale up.",
        "**Leave time to print.** Print shops and university print services can take days; fabric posters fold into luggage. Some conferences use digital e-posters on screens instead."
      ]},
      {h:"Talking at your poster"},
      "Prepare a **30-second version** (question, main finding, why it matters) and a **two- to three-minute version** for people who want more. Ask visitors what they work on, so you can pitch your explanation at the right level, and keep a notebook or contact cards for follow-ups.",
      {tip:"A quick readability check: print your poster on an ordinary sheet of paper. If the body text is still readable at arm’s length, it will be comfortable to read at full size from a step or two away."}
    ]},
    {h:"Accessible talks and posters", body:[
      "Accessibility means people with different senses, bodies, languages and devices can all follow your work. Most of it is just good communication done carefully:",
      {list:[
        "**Contrast and size.** Dark text on a light background (or the reverse) with strong [[contrast]]; large, plain fonts. See {{accessible-slides}}.",
        "**Never rely on colour alone.** Label lines directly, use patterns or shapes as well as colours, and choose colour-blind-friendly palettes.",
        "**Describe visuals aloud.** “This chart shows temperature over the day: the shaded stops, in blue, stay about three degrees cooler all afternoon.” People who can’t see the screen, or are listening online, get the point too.",
        "**Always use the microphone**, even if you have a loud voice. Hearing systems and recordings depend on it.",
        "**Captions online.** Turn on [[live-captions]] where the platform offers them, and speak at a steady pace.",
        "**Share slides or the poster PDF in advance or on the day**, with [[alt-text]] on images, so people can follow on their own device and zoom in.",
        "**Plain language** helps everyone, including the many people in the audience listening in an additional language."
      ]},
      {key:"Accessible presenting isn’t an extra step at the end. It’s choosing, from the start, slides and words that more people can follow."}
    ]}
   ],
   try:[
    {id:"t4u10-l3-x1", type:"number", q:"Sione’s slot is 15 minutes. The chair’s email says each slot includes 4 minutes for questions and about 1 minute for the next speaker to set up. How many minutes should his talk itself last, at most?", answer:10, tol:0, unit:"minutes", why:"15 − 4 (questions) − 1 (changeover) = 10 minutes. Many speakers rehearse to a little under that, because the real thing usually runs longer than rehearsal.", wrongs:[{v:15, tol:0, why:"That’s the whole slot. It includes the questions and the changeover, so talking for 15 minutes would leave no time for either."},{v:11, tol:0, why:"This takes off the 4 minutes of questions but forgets the 1-minute changeover."},{v:14, tol:0, why:"This takes off the changeover but forgets the 4 minutes for questions."}]},
    {id:"t4u10-l3-x2", type:"mcq", q:"Which slide headline follows the assertion–evidence approach?", options:[
      {t:"Rural clinics using text reminders had fewer missed vaccination appointments", ok:true, why:"It is a full-sentence claim. The audience knows the point before you speak, and the visual below can show the evidence."},
      {t:"Results", why:"A topic label, not a claim. The audience has to work out the point for themselves."},
      {t:"Figure 3 from the paper", why:"This names where the figure came from, not what it shows. And paper figures usually need redrawing for slides."},
      {t:"Some interesting findings about reminders", why:"Vague: “interesting” tells the audience nothing about what was found."}
    ]},
    {id:"t4u10-l3-x3", type:"sort", q:"Amara is designing her poster. Sort each item: put it **on the poster**, or **in the linked PDF or handout**?", buckets:["On the poster","In the linked PDF or handout"], items:[
      {t:"A title that states the main finding", b:0, why:"The title is the first, and sometimes only, thing passers-by read. It belongs on the poster, big."},
      {t:"One large, clearly labelled chart of the main result", b:0, why:"The main evidence, shown visually, is the heart of a poster."},
      {t:"The full 40-item questionnaire", b:1, why:"Far too detailed to read standing up. Link it for people who want to check the method."},
      {t:"A table of every regression coefficient", b:1, why:"Detail for specialists who will read it later. The poster can show the key effect visually."},
      {t:"A QR code and an email address", b:0, why:"These are how interested people follow up after the session."},
      {t:"The complete reference list of 35 sources", b:1, why:"Cite the few key sources briefly on the poster; the full list fits better in the linked PDF."}
    ]},
    {id:"t4u10-l3-x4", type:"mcq", q:"After Priya’s talk, someone asks about a statistical method she didn’t use and doesn’t know well. What is the best response?", options:[
      {t:"Say she isn’t familiar enough with that method to comment, explain why she chose her approach, and offer to follow up.", ok:true, why:"Honest and constructive. It keeps her credibility, explains her own choice and leaves room to learn something useful."},
      {t:"Give a confident answer anyway so she doesn’t look unprepared.", why:"A confident wrong answer in front of specialists does far more damage than an honest “I don’t know”."},
      {t:"Say the question isn’t relevant to her talk.", why:"It may well be relevant: the questioner may be pointing to a better analysis. Dismissing it closes off useful feedback."},
      {t:"Ignore it and take the next question.", why:"Ignoring a question is discourteous and suggests she has something to hide."}
    ]},
    {id:"t4u10-l3-x5", type:"mcq", q:"Which of these make a research talk more accessible? Choose all that apply.", options:[
      {t:"Describing what each chart shows out loud", ok:true, why:"People who can’t see the screen well, or are listening online or later, still get the evidence."},
      {t:"Using the microphone, even in a small room", ok:true, why:"Hearing systems, interpreters and recordings depend on the microphone. Asking “can everyone hear me?” doesn’t work: people who can’t hear may not want to say so."},
      {t:"Sharing the slides with alt text before or during the talk", ok:true, why:"People can follow on their own device, zoom in, and use screen readers."},
      {t:"Showing lines on a chart only by red and green colour", why:"Red and green are the colours most often confused by people with common forms of colour vision deficiency. Label lines directly or add patterns."},
      {t:"Speaking faster so there’s time for more slides", why:"Speed makes talks harder for everyone, especially listeners using captions, interpreters or a second language."}
    ]},
    {id:"t4u10-l3-x6", type:"order", q:"Put these steps for preparing a conference poster in a sensible order.", items:[
      {t:"Read the conference’s poster instructions (size, orientation, deadlines)", why:"First: size and orientation shape every design decision, and some conferences have early upload deadlines."},
      {t:"Write the one-sentence finding and sketch the layout on paper", why:"Next: decide the message and reading path before opening any software."},
      {t:"Build the poster with large text and redrawn figures", why:"Then build it, using the sketch as a guide."},
      {t:"Get feedback from someone outside your field and revise", why:"A non-specialist reader quickly shows what is unclear or too dense."},
      {t:"Print (or upload) with time to spare, and rehearse a 30-second pitch", why:"Last: printing can take days, and the pitch is what you’ll actually say at the session."}
    ]},
    {id:"t4u10-l3-x7", type:"match", q:"Match each presentation format to its typical purpose.", pairs:[
      ["Conference talk","One study or result for specialists, often 10–20 minutes","A focused presentation of one piece of work, usually with a short Q&A."],
      ["Seminar","A body of work with long discussion","Seminars and colloquia allow depth and extended questions."],
      ["Poster session","Conversations with people walking past your poster","A poster session is interactive and informal."],
      ["Three-minute thesis","Explaining research to non-specialists in three minutes","The format, with one static slide, trains plain explanation."]
    ]}
   ],
   apply:{intro:"These tasks work with any slide app, or with paper and a phone timer.", tasks:[
    {t:"Write and time your pitches", how:["Pick a piece of research you know: your own project, a study you read, or a report from your work.","Write its main finding as one sentence.","Write a 30-second pitch (question, finding, why it matters) and say it aloud with a timer.","Expand it into a two- to three-minute version and time that too."], write:"One-sentence finding… 30-second pitch (actual time: …)… What I added in the longer version…"},
    {t:"Turn a topic slide into an assertion–evidence slide", how:["Take a slide you’ve made, or a figure from a paper you have read.","Rewrite the headline as a full-sentence claim.","Replace any bullet points with one visual that shows the evidence: redraw the chart with large labels, or use a photo or diagram.","Write in your speaker notes what you would say about it, including a sentence describing the visual for people who can’t see it."], write:"Old headline… New headline… The visual I chose… My spoken description…"},
    {t:"Sketch a poster at A4 size", write:"Poster title (the finding)… Sections and reading path… What goes in the linked PDF…", how:{
      win:["Open a slide app or word processor and set a custom portrait page of 21 × 29.7 cm (A4). All A sizes share this shape, so the layout scales to A0.","PowerPoint: **Design → Slide Size → Custom Slide Size**. Google Slides: **File → Page setup → Custom**. LibreOffice Impress: **Slide → Slide Properties**, then set width and height on the **Slide** tab.","Block out the title, question, methods, main result, conclusion and a box for a QR code.","Print it on ordinary paper and check you can read the body text at arm’s length."],
      mac:["Open a slide app and set a custom portrait size of 21 × 29.7 cm (A4). All A sizes share this shape, so the layout scales to A0.","Keynote: click **Document** in the toolbar, then **Slide Size → Custom Slide Size**. PowerPoint: **Design → Slide Size**, then **Page Setup** or **Custom Slide Size** (the name depends on version; **File → Page Setup** also works). Google Slides: **File → Page setup → Custom**.","Block out the title, question, methods, main result, conclusion and a box for a QR code.","Print it or view it at 25% zoom and check the body text is still readable."],
      chromeos:["Open Google Slides in the browser and choose **File → Page setup → Custom**; enter 21 × 29.7 cm (A4 portrait).","Block out the title, question, methods, main result, conclusion and a box for a QR code.","Zoom out until the page is about the size of your hand and check the main finding is still readable."],
      phone:["Easiest on paper: fold an A4 or Letter sheet into a grid and sketch the boxes by hand.","Or use the Google Slides, PowerPoint or Keynote app; page-size options are more limited on phones, so set the size later on a computer if needed.","Take a photo of your sketch and look at it at thumbnail size: is the main finding the first thing you see?"]
    }},
    {t:"Do an accessibility pass", how:["Take your slide or poster sketch.","Check contrast and font sizes; make sure nothing relies on colour alone.","Write alt text for each image or chart.","Write the sentence you would say aloud to describe the main visual."], write:"Problems found… Alt text I wrote… My spoken description…"}
   ], proof:"A one-sentence finding with timed 30-second and longer pitches, an assertion–evidence slide, an A4 poster sketch, and an accessibility checklist you used on them."},
   read:[
     {book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”", note:"Outlining a talk, signpost language, visuals and accessibility, peer review with symbols, and a revision checklist."},
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”: “Key Presentation Skills” and “Spotlight on Ethics: Inclusivity and Presentations”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u10-l4", title:"Publishing: journals, peer review and sharing", minutes:60,
   hook:{q:"A researcher submits a paper to a journal. What does one large publisher’s author guide tell authors to expect after peer review?", options:["Acceptance with no changes is the usual result","Straight acceptance isn’t common; very often you’ll be asked to revise and resubmit","Rejection without reasons is the usual result","Papers are published immediately, with reviews added later"], answer:1, reveal:"**Revise and resubmit is very common.** Taylor & Francis’s guide for authors says straight acceptance “isn’t common” and that “very often” you will need to revise and resubmit (rejection is also possible). So a request for revisions is normal, and often good news. This lesson follows a paper from choosing a journal to submission, peer review and responding to reviewers, then covers preprints, open access and ORCID."},
   goals:[
     "Describe the route from manuscript to published article, including desk decisions and peer review",
     "Choose a suitable journal and check that it is trustworthy using the Think. Check. Submit. checklist",
     "Prepare a submission with a short cover letter, and explain the main types of peer review",
     "Write a calm, point-by-point response to reviewers, and share work through preprints, open access and an ORCID iD"
   ],
   learn:[
    {h:"From manuscript to published paper", body:[
      {lead:"Publishing in a journal is how research joins the scholarly conversation: other experts check it, it gets a permanent home, and others can find, cite and challenge it."},
      "A [[manuscript]] is the version of a paper you submit, before a journal accepts and publishes it. Its journey usually looks like this (the Digital Foundations unit on judging information introduced {{peer-review}} from the reader’s side, and Unit 1 of this track explained {{scholarly-publishing|how journals work}}; here you’re the author):",
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="m4u10b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="35" text-anchor="middle">Choose a journal</text><rect class="d-lup" x="10" y="66" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="84" text-anchor="middle">Submit</text><text class="s" x="110" y="99" text-anchor="middle">manuscript + cover letter</text><rect class="d-gold" x="10" y="122" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="147" text-anchor="middle">Editor screening</text><rect class="d-gold" x="10" y="178" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="196" text-anchor="middle">Peer review</text><text class="s" x="110" y="211" text-anchor="middle">usually 2+ reviewers</text><rect class="d-gold" x="10" y="234" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="259" text-anchor="middle">Editor’s decision</text><rect class="d-sage" x="10" y="290" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="315" text-anchor="middle">Accepted: production</text><rect class="d-sage" x="10" y="346" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="371" text-anchor="middle">Published</text><rect class="d-rose" x="240" y="122" width="90" height="40" rx="8" stroke-width="2"/><text class="s" x="285" y="139" text-anchor="middle">Desk</text><text class="s" x="285" y="154" text-anchor="middle">rejection</text><rect class="d-soft" x="240" y="178" width="90" height="40" rx="8" stroke-width="2"/><text class="s" x="285" y="195" text-anchor="middle">Revise and</text><text class="s" x="285" y="210" text-anchor="middle">respond</text><rect class="d-rose" x="240" y="234" width="90" height="40" rx="8" stroke-width="2"/><text class="s" x="285" y="259" text-anchor="middle">Rejection</text><path class="d-ink" d="M110,50 L110,64 M110,106 L110,120 M110,162 L110,176 M110,218 L110,232 M110,274 L110,288 M110,330 L110,344" stroke-width="2" fill="none"/><path class="d-ink" d="M210,142 L238,142" stroke-width="2" fill="none" marker-end="url(#m4u10b)"/><path class="d-ink" d="M210,254 L238,254" stroke-width="2" fill="none" marker-end="url(#m4u10b)"/><path class="d-ink" d="M200,234 L262,220" stroke-width="2" fill="none" marker-end="url(#m4u10b)"/><path class="d-ink" d="M240,198 L212,198" stroke-width="2" fill="none" marker-end="url(#m4u10b)"/><text class="s" x="170" y="408" text-anchor="middle">A preprint can be shared at almost any point:</text><text class="s" x="170" y="424" text-anchor="middle">check the journal’s preprint policy first.</text></svg>', alt:"A flowchart. Down the left: Choose a journal; Submit (manuscript plus cover letter); Editor screening; Peer review (usually 2 or more reviewers); Editor’s decision; Accepted: production; Published. Arrows to the right: from Editor screening to Desk rejection; from Editor’s decision to Rejection, and to Revise and respond, which has an arrow back to Peer review. Note: a preprint can be shared at almost any point; check the journal’s preprint policy first.", cap:"The usual route. Revision rounds can repeat, and each journal’s details differ."},
      "Journals differ in speed, in how many rounds of review they use and in what they publish, so always read the journal’s own author guidelines. The sections below take each step in turn."
    ]},
    {h:"Choosing a journal, and checking it’s trustworthy", body:[
      "Start with fit, then check trust.",
      {list:[
        "**Scope.** Read the journal’s **aims and scope** page. Does it publish your topic, method and article type (research article, short report, review)?",
        "**Audience.** Who reads it: specialists in your sub-field, a broad discipline, practitioners, a region?",
        "**Where the conversation is.** Which journals published the papers you cite most? That’s often where your readers are.",
        "**Practicalities.** Word limits, reference style, open access options and fees, and language. To estimate speed, look at the received and accepted dates printed on recent articles."
      ]},
      "Then check the journal is genuine. **[Think. Check. Submit.](https://thinkchecksubmit.org/journals/)** is a free checklist from a cross-industry group of publishing and library organisations, available in more than 50 languages. Its questions include:",
      {table:[
        ["Check","What to look for"],
        ["Do you or colleagues know it?","You’ve read articles in it; the name isn’t a copy of another journal; the ISSN checks out in the ISSN Portal"],
        ["Can you identify the publisher?","Name and real contact details are clear"],
        ["Is peer review clear?","It says how review works; it doesn’t guarantee acceptance or very fast review"],
        ["Indexed and archived?","Discoverable in databases; long-term preservation; persistent identifiers such as DOIs"],
        ["Clear fees?","What fees are for, when charged, the amount and currency, and whether waivers exist"],
        ["Member of recognised initiatives?","For example COPE membership; DOAJ listing for open access journals; regional platforms such as African Journals Online, SciELO, Latindex or Redalyc"]
      ]},
      "The checklist’s advice is to submit only if you can answer “yes” to most or all of the questions. The unit on how research works earlier in this track explains [[predatory-journal|predatory journals]] ({{predatory-journals}}): outlets that take fees without providing real peer review or editing.",
      {warn:"Flattering emails inviting you to submit (“Dear Esteemed Researcher… publication in 7 days…”) are a classic sign of a predatory outlet. Treat them like [[phishing]]: don’t click through; look the journal up independently."}
    ]},
    {h:"Preparing and submitting", body:[
      "Each journal’s **author guidelines** (sometimes called instructions for authors) set the rules: length, structure, reference style, figure formats, and the statements you must include. Common statements are:",
      {list:[
        "**Ethics approval and [[informed-consent|consent]]**, for research with people or animals.",
        "**[[conflict-of-interest|Conflicts of interest]]** (also called competing interests) and **funding**.",
        "**Data availability**: where the data can be found, or why they can’t be shared.",
        "**Author contributions**: who did what (many journals use the [[credit-taxonomy|CRediT]] roles introduced in the ethics unit of this track; see {{authorship-credit}}).",
        "**Use of AI tools**, where the journal’s policy asks for it."
      ]},
      "Submit to **one journal at a time**. Sending the same manuscript to two journals at once is a breach of publishing ethics (the ICMJE recommendations, for example, say authors should not do it), and most cover letters must state that the paper isn’t under consideration elsewhere.",
      "The **cover letter** is a short letter to the editor. Taylor & Francis’s author guide suggests including:",
      {list:[
        "The editor’s name (if known), the manuscript title and the journal name.",
        "A brief summary of the work, why it matters and why it suits **this** journal’s readers, in your own words (don’t just paste the abstract).",
        "A statement that the paper hasn’t been published and isn’t under consideration elsewhere.",
        "Any competing interests, and your contact details.",
        "One page at most, proofread."
      ]},
      "Some journals also ask you to suggest possible reviewers, or name people who shouldn’t review it because of a conflict. Suggest people with relevant expertise who aren’t close collaborators.",
      "Submission systems usually ask for your [[orcid-id|ORCID iD]] (see the last section) and those of co-authors."
    ]},
    {h:"Desk decisions and types of peer review", body:[
      "First, an editor screens the manuscript for fit with the journal’s scope, completeness and basic quality. A [[desk-rejection]] is a rejection at this stage, without external review. It can feel abrupt, but it is a normal part of publishing, and it frees you to try another journal. Springer Nature’s guidance lists what editors check first: whether the paper is within scope, novel, carefully prepared with all sections, clearly written and ethical.",
      "If it passes, the editor invites independent experts to review it, normally at least two. Journals use different models:",
      {table:[
        ["Model","Who knows whom","Where it’s common"],
        ["Single-anonymous (single-blind)","Reviewers know the authors; authors don’t know the reviewers","Common in the sciences and medicine"],
        ["Double-anonymous (double-blind)","Neither side knows the other’s identity","Common in the humanities and some social sciences"],
        ["Open peer review","Varies: reviewer names and/or reports may be published","There is no single agreed definition"]
      ]},
      "(Many publishers now say “anonymous” rather than “blind”.) Some journals publish the reports alongside the article, and some offer [[registered-report|Registered Reports]], where the study plan is reviewed before data collection and can receive “in-principle acceptance”.",
      "The editor then decides, using the reviewers’ reports as advice: **accept** (uncommon on the first round), **minor** or **major revisions**, or **reject**. Some publishers offer to transfer a rejected paper to another of their journals.",
      {tip:"Peer review is a quality filter, not a guarantee. Reviewers can miss errors and can disagree with each other. That’s one reason [[replication]] and post-publication discussion matter."}
    ]},
    {h:"Revise and resubmit: the response letter", body:[
      "A [[revise-resubmit|revise-and-resubmit]] decision means the editor will consider a revised version. You send back the revised manuscript plus a [[response-letter]] (also called a response to reviewers) that answers every comment.",
      {list:[
        "**Wait a day** before replying. Even fair criticism stings at first.",
        "**Answer every comment, point by point**: quote or number it, reply, and say exactly what you changed and where (page and line, or section).",
        "**Be polite and specific**, not defensive or grovelling. A short thank-you at the start is enough.",
        "**You may disagree**, with reasons and evidence. Editors accept a well-argued “we did not make this change because…”.",
        "**If a comment is unclear**, ask the editor."
      ]},
      {table:[
        ["Reviewer 2, comment 3","Response"],
        ["“The sample is limited to urban schools, so the conclusions may not generalise.”","Thank you; we agree. We now state this limitation in the Discussion (p. 14, lines 302–309) and have narrowed the conclusion to urban schools (p. 16, line 351)."],
        ["“Please add a control for household income.”","Income data were not collected, so we cannot add this control. We now acknowledge it as a limitation (p. 14, lines 310–313) and suggest it for future studies."]
      ]},
      "**If the paper is rejected**, read the reports for what you can fix, revise, and choose the next journal (rechecking its scope). Rejection is a normal part of research careers. If you decide not to resubmit to a journal, withdraw the paper formally before sending it anywhere else."
    ]},
    {h:"Sharing: preprints, open access and ORCID", body:[
      "A [[preprint]] is a manuscript that the authors post on a public server, usually before or alongside journal submission, without peer review. According to ASAPbio, a non-profit that promotes preprints in the life sciences:",
      {list:[
        "In many fields, most journals allow you to submit work that is already a preprint, but policies vary, so check the journal’s policy before posting.",
        "Most servers give each preprint a DOI or another permanent identifier, so it can be cited (say in the citation that it is a preprint). arXiv, for example, has given new papers DOIs since 2022.",
        "Most servers keep every version: you can post updates, but earlier versions usually can’t be removed.",
        "Readers, including journalists, may not realise a preprint hasn’t been reviewed, so state its status clearly when you share it."
      ]},
      "Servers exist for many fields, for example arXiv (physics, mathematics, computer science and more), bioRxiv and medRxiv (biology, health), SSRN (which began in the social sciences and law and now covers many fields), and regional servers such as SciELO Preprints.",
      {h:"Open access routes"},
      "Unit 1 of this track explains {{open-access}} in depth; here is the author’s view of the main routes.",
      {table:[
        ["Route","How it works","Who pays"],
        ["Gold","The journal publishes the article openly","Often an [[article-processing-charge|article processing charge (APC)]], paid by authors, funders or institutions"],
        ["Diamond","The journal publishes openly","No fees for authors or readers; supported by institutions or communities"],
        ["Green","You deposit a version (often the accepted manuscript) in a repository","Free to deposit; publishers may set an [[embargo-period|embargo]]"],
        ["Hybrid","A subscription journal makes individual articles open","An APC for that article"]
      ]},
      "APCs vary widely. Many publishers offer **waivers or discounts**, especially for authors in lower- and middle-income countries, but policies differ by publisher and even by journal, so check **before** you submit. Some universities have agreements with publishers that cover fees for their authors. To see what a journal lets you share and where, use Jisc’s free **open policy finder** (which replaced Sherpa Romeo). Open articles usually carry a [[creative-commons]] licence such as CC BY.",
      {h:"ORCID"},
      "An [[orcid-id]] is a free, permanent identifier for researchers, run by ORCID, a not-for-profit organisation. It is a 16-character number in four blocks, shown as a web address such as `https://orcid.org/0000-0002-1825-0097` (the last character is a check digit and can be X). It stays with you when you change institution, country or name, and journals and funders use it to link your work to you correctly. Registration is free and needs no university affiliation; you control what is public.",
      {lab:"cl-doi", t:"Practise: write a DOI as a link"}
    ]}
   ],
   try:[
    {id:"t4u10-l4-x1", type:"spot", q:"Hana receives this email. Tap every part that is a **warning sign** of a predatory journal, using the Think. Check. Submit. questions.", ask:"is a warning sign", parts:[
      {t:"Dear Esteemed Researcher,", flag:true, why:"A generic, flattering greeting: the sender doesn’t know who you are or what you research. Genuine editors usually write to specific people about specific work."}," We invite you to submit to the ",{t:"International Journal of Advanced Global Research Studies", flag:true, why:"A vague, grand title with no clear subject is a common sign. Check that the name isn’t a near-copy of a real journal, and that its ISSN checks out."},". ",{t:"Acceptance guaranteed within 72 hours", flag:true, why:"Think. Check. Submit. warns against journals that guarantee acceptance or very short review times. Real peer review can’t promise either."},". ",{t:"The publication fee will be confirmed after acceptance", flag:true, why:"Trustworthy journals state their fees, amount and currency upfront, and say whether waivers exist."},". Our editor-in-chief is ",{t:"named on our website, with an institutional email address", flag:false, why:"This is what a genuine journal provides. On its own it doesn’t prove trust, but it isn’t a warning sign; check that the person really is the editor."}," and ",{t:"articles carry DOIs", flag:false, why:"Persistent identifiers are one of the checklist’s positive signs (although check the DOI actually resolves)."},"."
    ]},
    {id:"t4u10-l4-x2", type:"match", q:"Match each peer review model or format to how it works.", pairs:[
      ["Single-anonymous","Reviewers know the authors; authors don’t know the reviewers","This model hides only the reviewers’ names."],
      ["Double-anonymous","Neither authors nor reviewers know each other’s identity","Both sides are anonymised."],
      ["Open peer review","Reviewer names and/or reports may be made public","Definitions vary, but openness about reviewers or reports is the common thread."],
      ["Registered Report","The study plan is reviewed before data are collected","Review of the plan can lead to in-principle acceptance."]
    ]},
    {id:"t4u10-l4-x3", type:"order", q:"Put the steps of Tomás’s first journal submission in order.", items:[
      {t:"Check the journal’s scope and run the Think. Check. Submit. checklist", why:"First: make sure the journal fits and is trustworthy before investing in formatting."},
      {t:"Format the manuscript to the author guidelines and write a cover letter", why:"Second: each journal has its own rules, and the cover letter introduces the paper to the editor."},
      {t:"Editor screens the paper (it could be desk-rejected here)", why:"Third: the editor checks scope and basic quality before inviting reviewers."},
      {t:"Independent reviewers send reports", why:"Fourth: usually at least two experts review the manuscript."},
      {t:"Tomás revises and sends a point-by-point response letter", why:"Fifth: a request for revisions is very common, and the response letter explains every change."},
      {t:"The paper is accepted and goes into production", why:"Last: after acceptance come copyediting, proofs and publication."}
    ]},
    {id:"t4u10-l4-x4", type:"mcq", q:"Reviewer 1 asks Oluwaseun to analyse a variable that his study didn’t collect. Which response is best?", options:[
      {t:"“Thank you. We did not collect this variable, so we cannot add the analysis. We now discuss it as a limitation (p. 12, lines 240–246).”", ok:true, why:"Polite, honest and specific: it explains why the change isn’t possible, shows what was done instead and says exactly where."},
      {t:"“This comment shows the reviewer did not read our paper carefully.”", why:"Defensive and personal. Even if the reviewer missed something, editors respond better to a calm explanation."},
      {t:"Leave the comment unanswered and hope the editor doesn’t notice.", why:"Every comment should be answered. Unanswered comments are a common reason for another round of revisions, or rejection."},
      {t:"Invent plausible values for the variable so the analysis can be done.", why:"That would be [[fabrication]], which is research misconduct. Never create data that weren’t collected."}
    ]},
    {id:"t4u10-l4-x5", type:"sort", q:"Sort each statement about preprints: **accurate** or **a misconception**?", buckets:["Accurate","Misconception"], items:[
      {t:"A preprint has usually not been peer reviewed.", b:0, why:"That’s the definition: servers may do quick checks, but not peer review."},
      {t:"Posting a preprint always prevents journal publication.", b:1, why:"In many fields most journals accept preprinted work, though some don’t. Check the specific journal’s policy."},
      {t:"Most preprints can be cited, often using a DOI.", b:0, why:"Most servers give preprints a DOI or another permanent identifier. Citations should say that the work is a preprint."},
      {t:"You can delete earlier versions whenever you like.", b:1, why:"Most servers keep all versions to preserve the record; withdrawal usually adds a notice rather than erasing the paper."},
      {t:"Preprint servers exist only for physics.", b:1, why:"arXiv started in physics, but there are servers for biology, medicine, social sciences, law and more, including regional ones."},
      {t:"News reports sometimes treat preprints as final findings.", b:0, why:"ASAPbio lists this as a real concern, which is why the status should be stated clearly."}
    ]},
    {id:"t4u10-l4-x6", type:"mcq", q:"Fatima wants her article to be free to read, but she has no funding for fees. Which open access route needs **no fee from authors or readers**?", options:[
      {t:"Diamond open access", ok:true, why:"Diamond journals publish openly with no fees for authors or readers; institutions or communities fund them."},
      {t:"Hybrid open access", why:"Hybrid means paying an APC to make one article open in a subscription journal."},
      {t:"Gold open access in a journal with an APC", why:"Many gold journals charge APCs. Waivers may exist, but the route itself usually involves a fee."},
      {t:"Paying a fee to a site that promises fast publication", why:"Not a route at all: that’s a warning sign of a predatory outlet."}
    ]},
    {id:"t4u10-l4-x7", type:"mcq", q:"Which statement about ORCID iDs is correct?", options:[
      {t:"It is free, stays with you if you change institution or name, and is shown as an https://orcid.org/ address.", ok:true, why:"ORCID’s own support pages confirm all three: free for researchers, yours throughout your career, and displayed as a full https address."},
      {t:"Only researchers at member universities can get one.", why:"Anyone can register free; no institutional affiliation is needed."},
      {t:"It replaces the DOI of each of your papers.", why:"A DOI identifies a work; an ORCID iD identifies a person. They work together."},
      {t:"It costs a yearly fee that publishers pay on your behalf.", why:"ORCID is funded by member organisations, but individuals register and use it free."}
    ]}
   ],
   apply:{intro:"These tasks need only a browser and are free. None requires a university login (a login may give access to more full texts and to your institution’s publishing agreements).", tasks:[
    {t:"Run Think. Check. Submit. on a real journal", how:["Pick a journal in a field you’re interested in (from a paper you’ve read, or from a search).","Open the checklist at thinkchecksubmit.org (choose your language if you like).","Go through each question using the journal’s own website, the ISSN Portal and, for open access journals, DOAJ.","Note anything you couldn’t confirm."], write:"Journal… Scope fits? … Publisher contactable? … Peer review described? … Indexed/archived? … Fees and waivers clear? … Memberships (COPE, DOAJ…)? … Verdict…"},
    {t:"Draft a one-page cover letter", how:["Use a real or imagined study (your project, or an open-access paper you know well).","Write: greeting to the editor, title and journal, two or three sentences on what you found and why this journal’s readers would care, the statement that it isn’t under consideration elsewhere, competing interests, contact details.","Check it fits on one page and doesn’t copy the abstract."], write:"Dear Dr …, …"},
    {t:"Create (or look at) an ORCID record", how:["Go to orcid.org and choose to register. It is free and needs only an email address; no university is required.","Set the visibility of each section the way you want (you can keep most things private).","Add any education, work or publications you want listed.","Prefer not to sign up yet? Search the ORCID registry for a researcher whose work you read, and note what their public record shows."], write:"My ORCID iD (or the record I looked at)… What I made public or private… What the record shows…"},
    {t:"Check a journal’s sharing policy", how:["Search for the same journal in Jisc’s open policy finder (openpolicyfinder.jisc.ac.uk).","Find which version you may share (submitted, accepted or published), where (personal page, repository), and any embargo.","Compare with the journal’s own website and its preprint policy."], write:"Version I can share… Where… Embargo… Preprint policy…"}
   ], proof:"A completed trust checklist for one journal, a one-page cover letter, an ORCID record (yours or one you studied), and a note of what one journal lets authors share."},
   read:[
     {book:"acrl", where:"Frame “Scholarship as Conversation”", note:"Why publishing, citing and responding to others is how knowledge is built."},
     {book:"acrl", where:"Frame “Information Has Value”", note:"Background on access, open access, and the economics of publishing."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u10-l5", title:"Graduate study around the world", minutes:55,
   hook:{q:"In the United Kingdom, the long piece of research written for a doctorate is usually called a thesis. What is it usually called in the United States?", options:["A thesis, the same as in the UK","A dissertation (and “thesis” is often used for a master’s)","A monograph","A capstone"], answer:1, reveal:"**A dissertation.** University of Oxford guidance points out that the two countries use the words the opposite way round: in the UK a thesis is usually for a doctorate and a dissertation for a master’s; in the US it’s the reverse. Even within one country, universities differ. This lesson compares how graduate study works in different systems, without treating any one of them as the standard."},
   goals:[
     "Tell apart taught, research and professional master’s degrees",
     "Compare doctoral models: research from the start, coursework first, and other variations",
     "Explain the roles of supervisors, advisors and committees, and the usual milestones from proposal to examination",
     "Describe vivas and defences, funding in general terms, and where to find support for wellbeing"
   ],
   learn:[
    {h:"Same words, different systems", body:[
      {lead:"Graduate study (called **postgraduate** study in the UK, Australia and many other places) means study after a first degree. The main levels are the [[masters-degree]] and the [[doctorate]], but how they are organised, named and examined differs a lot between countries, universities and even subjects."},
      "This lesson compares common patterns, using examples from systems whose rules are well documented. None of them is “normal”, and the details of your own university always win. Read its regulations (often called a code of practice, handbook or policy for graduate research) as soon as you start, or before you apply.",
      {table:[
        ["Word","Often means","But watch for"],
        ["Graduate / postgraduate","Study after a bachelor’s degree","Same idea, different country"],
        ["Thesis","UK: doctoral or research work. US: often a master’s project","Usage varies even within one country"],
        ["Dissertation","US: doctoral work. UK: often a master’s project","As above: check your regulations"],
        ["Advisor / supervisor","The academic who guides your research","Many systems use a team or committee"]
      ]},
      {tip:"When you read advice online, check which system it’s written for. A blog about North American qualifying exams, or about a UK viva, may not apply to you at all."}
    ]},
    {h:"Master’s degrees: taught, research and professional", body:[
      "The UK’s higher education quality body (QAA) describes three broad kinds of master’s. Other countries use similar ideas, with different names:",
      {table:[
        ["Kind","What it’s mostly for","Examples"],
        ["Taught (specialised or advanced study)","Deeper knowledge for a career or further study; modules, often plus a research project","MA, MSc (called MS in the US)"],
        ["Research","Preparing for a research career; mostly an individual research project","MRes, MPhil, MLitt"],
        ["Professional or practice","Entry to, or advancement in, a profession; may include placements","e.g. MBA, LLM, MSW"]
      ]},
      "In a [[taught-masters|taught master’s]], at least a third of the course is often a research project, leading to a dissertation or similar output. A [[research-masters|research master’s]] is assessed mainly on a thesis, which is commonly defended in an oral examination. An MPhil may also be linked to a doctorate, as a first stage or as an exit award.",
      "Length varies. In the UK a full-time taught master’s usually takes one year (QAA gives a typical minimum of 180 UK credits). In the European Higher Education Area, the Bologna Process organises degrees into three cycles (bachelor’s, master’s, doctorate) measured in ECTS credits, where 60 credits is about one year of full-time study: a first-cycle degree usually carries 180–240 credits and a master’s usually 90–120 (at least 60), so many European master’s take one and a half to two years. Many North American master’s take two years. Part-time and online options are common in many countries."
    ]},
    {h:"Doctoral models: research first or coursework first", body:[
      "Two broad patterns are widely described. Many countries and universities use one, the other, or a mix.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="m4u10c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="87" y="18" text-anchor="middle">Research first</text><text x="253" y="18" text-anchor="middle">Coursework first</text><rect class="d-lup" x="8" y="30" width="158" height="46" rx="6" stroke-width="2"/><text x="87" y="50" text-anchor="middle">Admitted with</text><text class="s" x="87" y="67" text-anchor="middle">a project + supervisor(s)</text><rect class="d-gold" x="8" y="96" width="158" height="46" rx="6" stroke-width="2"/><text x="87" y="116" text-anchor="middle">Early review</text><text class="s" x="87" y="133" text-anchor="middle">confirmation or transfer</text><rect class="d-sage" x="8" y="162" width="158" height="46" rx="6" stroke-width="2"/><text x="87" y="182" text-anchor="middle">Research</text><text class="s" x="87" y="199" text-anchor="middle">+ annual progress reviews</text><rect class="d-sage" x="8" y="228" width="158" height="46" rx="6" stroke-width="2"/><text x="87" y="256" text-anchor="middle">Thesis submitted</text><rect class="d-rose" x="8" y="294" width="158" height="46" rx="6" stroke-width="2"/><text x="87" y="314" text-anchor="middle">Examination</text><text class="s" x="87" y="331" text-anchor="middle">e.g. a viva</text><rect class="d-lup" x="174" y="30" width="158" height="46" rx="6" stroke-width="2"/><text x="253" y="50" text-anchor="middle">Coursework</text><text class="s" x="253" y="67" text-anchor="middle">often 1–2 years</text><rect class="d-gold" x="174" y="96" width="158" height="46" rx="6" stroke-width="2"/><text x="253" y="116" text-anchor="middle">Qualifying or</text><text class="s" x="253" y="133" text-anchor="middle">comprehensive exam</text><rect class="d-gold" x="174" y="162" width="158" height="46" rx="6" stroke-width="2"/><text x="253" y="182" text-anchor="middle">Proposal approved</text><text class="s" x="253" y="199" text-anchor="middle">→ candidacy</text><rect class="d-sage" x="174" y="228" width="158" height="46" rx="6" stroke-width="2"/><text x="253" y="248" text-anchor="middle">Research +</text><text class="s" x="253" y="265" text-anchor="middle">dissertation</text><rect class="d-rose" x="174" y="294" width="158" height="46" rx="6" stroke-width="2"/><text x="253" y="314" text-anchor="middle">Defence</text><text class="s" x="253" y="331" text-anchor="middle">before a committee</text><path class="d-ink" d="M87,76 L87,94 M87,142 L87,160 M87,208 L87,226 M87,274 L87,292 M253,76 L253,94 M253,142 L253,160 M253,208 L253,226 M253,274 L253,292" stroke-width="2" fill="none"/><text class="s" x="170" y="368" text-anchor="middle">Many systems mix the two, and names differ.</text><text class="s" x="170" y="386" text-anchor="middle">Training courses exist in both; neither</text><text class="s" x="170" y="404" text-anchor="middle">model is the “standard” one.</text></svg>', alt:"Two columns compared. Research first: admitted with a project and supervisor or supervisors; early review (confirmation or transfer); research plus annual progress reviews; thesis submitted; examination, for example a viva. Coursework first: coursework, often 1 to 2 years; qualifying or comprehensive exam; proposal approved, leading to candidacy; research plus dissertation; defence before a committee. Note: many systems mix the two and names differ; training courses exist in both; neither model is the standard one.", cap:"Two broad doctoral patterns, simplified. Real programmes vary."},
      "**Research first.** You apply with a research area or project, often to a particular supervisor, and research from the start. There may be training courses, but usually no large block of required coursework. The UK, Ireland, Australia and New Zealand are well-known examples, and many universities elsewhere, including in continental Europe and parts of Africa and Asia, also admit doctoral candidates straight to a research project, often with structured training alongside. Progress is checked at formal points: in the UK, QAA describes candidates either confirming their doctoral status at the first annual review or transferring from master’s registration around the end of year one.",
      "**Coursework first.** Common in the United States and Canada. The US Council of Graduate Schools describes a first year or two of courses and seminars, then a general, comprehensive or qualifying exam (a [[qualifying-exam]]), approval of a dissertation proposal and **admission to candidacy**, usually by the end of the second year or early in the third. Many programmes admit students straight from a bachelor’s degree, so the whole programme is longer: the Council notes that science programmes are usually designed so that well-prepared students finish in five to six years of full-time study after the bachelor’s, and that completion times vary more in other fields, particularly the humanities and social sciences.",
      "**Other variations** include structured doctoral programmes and graduate schools in many European countries (in the Netherlands and the Nordic countries, for example, many doctoral candidates are employed by the university on a contract), **professional doctorates** (QAA describes them as often chosen by mid-career professionals, with taught elements plus a research project), and the **PhD by publication**, based on peer-reviewed papers plus a linking commentary. Systems in East Asia, Latin America and Africa also combine coursework, research and examination in their own ways, varying by country and university: check the rules of the programme you are considering."
    ]},
    {h:"Supervisors, advisors and committees", body:[
      "Your [[supervisor]] (often called an **advisor** in North America) guides your research, reads your drafts and helps you meet milestones. Arrangements differ:",
      {list:[
        "**Supervisory teams.** In the UK, QAA’s guidance describes candidates working with a supervisory team (a main supervisor plus one or more others) rather than a single supervisor.",
        "**Committees.** In the US model, a [[thesis-committee|dissertation committee]] of usually three to five faculty members, chaired by the main advisor, approves the proposal and examines the final work.",
        "**Other names.** Some systems give the supervisor a formal title with a specific role at the end, such as the person who presents the candidate for the degree."
      ]},
      "A good working relationship rests on clear expectations. Early on, agree (ideally in writing) on:",
      {list:[
        "How often you’ll meet, and who sets the agenda.",
        "How quickly drafts will be read, and in what form feedback comes.",
        "[[authorship|Authorship]] of papers from the project (see {{authorship-credit}} in the ethics unit of this track).",
        "Who to go to if something goes wrong: most universities have a graduate school, a director of graduate studies, a postgraduate tutor or an ombudsperson for exactly this."
      ]},
      {tip:"Before accepting a place, ask current students how supervision works in practice. Most will tell you honestly."}
    ]},
    {h:"Proposals, milestones and the thesis", body:[
      "Most doctorates, and many research master’s, have [[research-milestones]]: formal checkpoints that show you’re on track. Common ones are:",
      {ol:[
        "A [[research-proposal-term|research proposal]] (sometimes called a prospectus): question, context, methods, timeline, ethics. The research design unit of this track shows how to write one ({{research-proposal}}).",
        "**Ethics approval** from an [[ethics-review-board|ethics committee or board]] before collecting data from people.",
        "An early review: **confirmation** or **transfer**, or a **qualifying exam** and candidacy.",
        "**Annual progress reviews**, often with someone outside your supervisory team.",
        "**Submission** of the thesis or dissertation, then **examination**."
      ]},
      "The [[thesis]] (or [[dissertation]]) itself comes in two main formats. A **monograph** is one continuous book-like argument. A **thesis by publication** (also called article-based or compilation thesis) gathers several papers with an introduction and conclusion that link them. Length varies by subject: QAA notes that in more discursive subjects a doctoral thesis may be as long as 100,000 words, while mathematics theses may be much shorter without being any less of an achievement. Your regulations set the limits.",
      {key:"Everything in this track feeds into the thesis: searching, reading, citing, {{literature-review|reviewing literature}}, choosing methods, ethics, and the writing and revision skills from this unit."}
    ]},
    {h:"Examination: vivas and defences", body:[
      "How a doctorate is examined differs strikingly between systems:",
      {table:[
        ["Format","How it works","Examples"],
        ["Closed oral exam ([[viva]])","Examiners read the thesis, then question the candidate in private. QAA notes at least two examiners are usually present, typically one internal and at least one external","UK and many systems influenced by it"],
        ["Committee defence","The candidate presents and defends the dissertation before the committee; some institutions open it to the public","United States, Canada"],
        ["Public defence","After the thesis is approved, a public event where the outcome is usually already known","Several continental European countries"],
        ["Examination by written reports","Examiners, usually mostly from outside the university, send written reports; an oral is uncommon or optional","Most Australian universities, and some other systems"]
      ]},
      "In the UK, QAA lists the possible outcomes: a pass, a pass with **minor** or **major amendments** (often three to six months for minor changes, six to twelve for major), resubmission, the award of a different degree such as an MPhil, or, for a minority, an outright fail. Most UK doctorates aren’t graded: they are pass or fail.",
      {tip:"A **mock viva** or practice defence with your supervisors or peers is common and very helpful. Prepare to explain, in plain words, what you found, why it matters, what you would do differently and what comes next."}
    ]},
    {h:"Funding, wellbeing and support", body:[
      "**Funding** varies more than anything else. In general terms, it can come from:",
      {list:[
        "**Scholarships or studentships** from universities, research councils, governments or foundations, which may cover fees, a living allowance (stipend), or both.",
        "**Assistantships**, especially common in North America: paid teaching or research work, often with fees waived.",
        "**Salaried positions**: in some countries doctoral candidates are employed on a contract.",
        "**Employers**, which sometimes support staff to study part time.",
        "**Self-funding**, often combined with part-time study and work."
      ]},
      "For any offer, check what is covered (fees, living costs, health insurance, research costs), for how long, and what happens if you need more time. Be wary of agents who charge fees to “guarantee” a scholarship: genuine funders say on their own websites how to apply.",
      "**Wellbeing.** Graduate research is long, often solitary and full of uncertainty, and struggling at times is common, not a sign that you don’t belong. Support usually exists, though names differ:",
      {list:[
        "Your supervisor or a second supervisor, and peers in your programme or a writing group.",
        "The university’s counselling, health or wellbeing service, disability service and international student office.",
        "A graduate students’ association or student union, which can advise on problems with supervision or funding.",
        "Outside the university: your doctor or local health service, and national helplines. If you or someone else is in immediate danger, contact local emergency services."
      ]},
      {tip:"Taking breaks, keeping some life outside research and asking for help early are part of doing a doctorate well, not signs of weakness."}
    ]},
    {h:"Where to next", body:[
      "That’s the end of the **Research Skills** track. Look how far you’ve come: from what research is, through searching, reading papers, citing, literature reviews, research questions and design, qualitative and survey methods and ethics, to writing, presenting, publishing and finding your way into graduate study.",
      "You don’t need to be in a university to use any of it. A nurse checking the evidence for a new procedure, a teacher planning a small classroom study, a journalist reading a preprint, a community group running a survey, a retiree writing a local history: all of them are doing research, and doing it well is a skill anyone can build.",
      "If you want to keep going, the app has more for you:",
      {list:[
        "**Digital Foundations**: how computers, files, the internet and everyday software work, including documents, spreadsheets and presentations, with the **Formula Lab** for practising spreadsheet formulas.",
        "**Making with Code**: the web, HTML, CSS, JavaScript, the command line, Git and Python, from zero, with the **Web Lab** and the **Python Lab** for practice.",
        "**The Citation Lab**: keep practising references in APA, MLA and Chicago styles whenever you need a refresher.",
        "**Social Science Primers**: the Sociology primer, with more research methods in action.",
        "**Data Literacy** comes next: reading charts critically, tidy data, statistics without fear, R and SQL."
      ]},
      {key:"Whatever you study next, keep asking the questions this track was built on: How do we know? Who says so? What’s the evidence? Thank you for learning with us."}
    ]}
   ],
   try:[
    {id:"t4u10-l5-x1", type:"mcq", q:"Sione reads an online forum saying “every PhD starts with two years of courses and a qualifying exam”. What’s the most accurate response?", options:[
      {t:"That describes a common pattern in the US and Canada; many other systems start with research from day one, so it depends on the programme.", ok:true, why:"Coursework-first doctorates are common in North America, but research-first models (for example in the UK, Australia and many other places) usually have little or no required coursework. Advice must be matched to the system."},
      {t:"It’s true everywhere: all doctorates follow the same international rules.", why:"There are no single international rules. Structure, names, length and examination all vary by country and university."},
      {t:"It’s false everywhere: no doctorate includes coursework.", why:"Many do, especially in North America, and research-first programmes often include training courses too."},
      {t:"Only professional doctorates have coursework.", why:"Professional doctorates often include taught elements, but so do many PhD programmes."}
    ]},
    {id:"t4u10-l5-x2", type:"sort", q:"Sort each feature: is it typical of the **research-first** model or the **coursework-first** model? (Real programmes can mix them.)", buckets:["Research first","Coursework first"], items:[
      {t:"Applying with a specific project, often to a named supervisor", b:0, why:"In research-first systems you usually apply to do a particular project with particular supervisors."},
      {t:"A comprehensive or qualifying exam after one or two years of courses", b:1, why:"The US Council of Graduate Schools describes this exam as the gateway to candidacy in North American programmes."},
      {t:"Confirmation of doctoral status at the first annual review", b:0, why:"QAA describes this early review in UK doctorates; similar confirmation milestones exist in other research-first systems."},
      {t:"Admission to candidacy, often around the end of the second year", b:1, why:"Candidacy follows coursework and the qualifying exam in the North American model."},
      {t:"A dissertation committee of three to five faculty", b:1, why:"The CGS describes committees of this size, chaired by the main advisor."},
      {t:"A closed viva with an internal and an external examiner", b:0, why:"QAA describes a closed oral examination with internal and external examiners as the usual UK format."}
    ]},
    {id:"t4u10-l5-x3", type:"match", q:"Match each degree or term to what it usually means.", pairs:[
      ["Taught master’s","Modules plus, often, a research project and dissertation","Taught master’s degrees are mostly coursework, often with a substantial project."],
      ["Research master’s (e.g. MRes, MPhil)","Mostly an individual research project assessed by a thesis","QAA lists MPhil, MLitt and MRes as research master’s."],
      ["Professional doctorate","Taught elements plus a research project, often for mid-career professionals","QAA describes professional doctorates this way."],
      ["PhD by publication","Published peer-reviewed papers plus a linking commentary","QAA describes this route, usually followed by an oral exam."]
    ]},
    {id:"t4u10-l5-x4", type:"order", q:"Put these milestones of a typical research-first doctorate in order. (Names and timing vary; ethics approval, where needed, fits in wherever data collection starts.)", items:[
      {t:"Write and agree a research proposal", why:"First: the proposal sets out the question, methods and plan."},
      {t:"Pass the early confirmation or transfer review", why:"Often near the end of the first year, this confirms doctoral status."},
      {t:"Complete research, with annual progress reviews", why:"The longest stage, checked by yearly reviews."},
      {t:"Submit the thesis", why:"Submission comes when the supervisors agree it’s ready (or as the regulations allow)."},
      {t:"Oral examination, then any corrections", why:"Last: examination, often followed by minor or major amendments before the award."}
    ]},
    {id:"t4u10-l5-x5", type:"mcq", q:"Mei passes her UK viva “with minor amendments”. What does that usually mean?", options:[
      {t:"She will be awarded the doctorate once she makes small corrections, usually within a few months.", ok:true, why:"QAA lists minor amendments as a common outcome, typically with three to six months to complete them."},
      {t:"She has failed and must start again.", why:"Outright failure is rare and is a different outcome. Minor amendments is a pass, subject to small fixes."},
      {t:"She receives a grade of B instead of A.", why:"UK doctorates aren’t graded; they are pass or fail."},
      {t:"She must take a year of extra coursework.", why:"Amendments are corrections to the thesis, not new coursework."}
    ]},
    {id:"t4u10-l5-x6", type:"mcq", q:"Ana receives an email from an “agency” offering a guaranteed fully funded doctoral place for a processing fee. What should she do?", options:[
      {t:"Not pay, and check funding only through the university’s or funder’s own official website.", ok:true, why:"Genuine funders explain on their own sites how to apply, and none can be “guaranteed” through a paid agent. This pattern is a common scam."},
      {t:"Pay quickly before the place goes to someone else.", why:"Urgency plus an upfront fee is a classic scam pattern."},
      {t:"Reply with her passport and bank details so they can check eligibility.", why:"Never send identity or bank documents to an unverified sender; they can be used for fraud."},
      {t:"Pay, as long as the fee is small.", why:"The size of the fee doesn’t make it genuine, and paying may lead to more demands."}
    ]},
    {id:"t4u10-l5-x7", type:"mcq", q:"Kenji, in the second year of a doctorate, feels stuck and isolated, and his meetings with his supervisor have become tense. Which step is the best place to start?", options:[
      {t:"Talk to someone: his second supervisor, the graduate school or postgraduate tutor, or the university’s wellbeing service, and agree on expectations with his supervisor.", ok:true, why:"Universities have these routes because these problems are common. Getting support early, and clarifying expectations, helps most."},
      {t:"Say nothing and work longer hours until it improves.", why:"Isolation and conflict rarely fix themselves, and overwork tends to make both worse."},
      {t:"Quit immediately without telling anyone.", why:"Leaving may sometimes be right, but it’s a big decision best made with information and support. Options such as a break, a change of supervisor or part-time study may exist."},
      {t:"Post about his supervisor by name on social media.", why:"This could harm both of them and his career, and it doesn’t use the routes designed to solve the problem."}
    ]}
   ],
   apply:{intro:"These tasks help you understand a real programme, whether you’re planning to apply or just curious. All you need is a browser.", tasks:[
    {t:"Map one real programme", how:["Choose a master’s or doctoral programme at any university (in any country) that interests you.","Find its official page and its regulations or handbook.","Note: taught or research? coursework required? milestones? how is it examined? how long, full and part time?","Compare it with the two models in this lesson: which is it closest to?"], write:"University and programme… Taught or research… Coursework… Milestones… Examination… Length… Closest model…"},
    {t:"Translate the vocabulary", how:["On the same university’s pages, find the words it uses for: the long piece of writing, the person who guides you, the early review, and the final examination.","Write each next to the terms from this lesson (thesis/dissertation, supervisor/advisor, confirmation/qualifying exam, viva/defence).","Note anything that surprised you."], write:"Their word for the thesis… the supervisor… the early review… the final exam… Surprises…"},
    {t:"Draft questions for current students or staff", how:["Write five questions you would want answered before accepting a place, covering supervision, funding, milestones, workload and support.","If you can, ask them of a current student or the programme contact (by email or at an open day). Otherwise, look for answers on the programme’s pages."], write:"My five questions… Answers I found…"},
    {t:"Find the support routes", how:["For one university you’re interested in (or your own), find: the graduate school or equivalent, the counselling or wellbeing service, the students’ union or graduate association, and the disability and international student services.","Note how to contact each.","Add one support option outside the university that applies where you live."], write:"Graduate school… Wellbeing service… Students’ union / association… Disability / international services… Outside the university…"}
   ], proof:"A one-page profile of a real programme in your own words, a vocabulary map, five questions for current students, and a list of support routes with contacts."},
   read:[
     {book:"owg", where:"Section 6.5 “Writing Process: Creating a Proposal”", note:"Background reading: a general proposal, with planning and revision habits that carry over to research proposals."},
     {book:"acrl", where:"Frame “Scholarship as Conversation”", note:"Graduate research is joining this conversation in a sustained way."}
   ]
  }
  ],
  checkpoint:["t4u10-q02","t4u10-q05","t4u10-q08","t4u10-q12","t4u10-q15","t4u10-q20","t4u10-q23","t4u10-q26","t4u10-q30","t4u10-q33","t4u10-q38","t4u10-q42"],
  codex:[
   {id:"academic-writing", title:"Academic writing", aka:["scholarly writing","writing a paper","writing for research"], tags:["writing","research"],
    summary:"Writing that makes a supported argument for readers who can check and challenge it.",
    levels:{
     starter:[
      "Academic writing is how researchers, students and professionals share what they have found and why they believe it. Think of it as talking to a careful, slightly sceptical colleague: you say what you think, why, and how they can check it.",
      "It isn’t about long words. Good academic writing is **clear**, **organised** around one main claim (the [[thesis-statement]]), **honest** about how sure you are, and **fair** to the people whose work you build on, which is why you cite them.",
      "You’ll find it in essays, reports, journal articles, theses, grant proposals and policy briefs. The shapes differ, but the core is the same: a claim, reasons, evidence and links to other work.",
      {tip:"If you can’t say what your piece argues in one or two sentences, sort that out before polishing any sentences."}
     ],
     builder:[
      "Most academic texts share a few moves:",
      {list:[
        "**Positioning**: what others have found (often in a {{literature-review}}), and the gap or problem your work addresses.",
        "**Claim**: your thesis, aim or main finding, stated early.",
        "**Support**: paragraphs that each make one point with evidence and analysis (see {{argument-structure}}).",
        "**Qualification**: limits, counter-arguments and appropriately cautious language (see {{academic-style}}).",
        "**Contribution**: what the reader should now think or do differently."
      ]},
      "Genres differ in where these moves go. Many empirical papers use the Introduction–Methods–Results–Discussion ([[imrad|IMRaD]]) shape; humanities essays usually weave argument and evidence together throughout; reports for practitioners may put recommendations first.",
      "Free help includes the University of Manchester’s Academic Phrasebank (phrases organised by section and function), the OpenStax *Writing Guide with Handbook*, university writing centres, and reading widely in your target venue. Treat writing as a process of drafts and revision ({{revision-feedback}}) rather than one perfect attempt.",
      "A useful habit is to write a **one-sentence summary** of your piece before drafting and again after: if the two differ, decide which one you now believe, and revise towards it.",
      "**Audience** decides a lot. A journal article for specialists can use field terms without definition; a report for a community group, a funder or policymakers needs plain language, a short summary up front and clear recommendations. Many researchers write both kinds about the same study."
     ],
     pro:[
      "Expert writers adapt to **discourse communities**: each field, journal and language has conventions for structure, citation density, use of “I” or “we”, hedging and even paragraph length. The fastest way to learn them is to analyse a handful of recent, well-regarded papers in your target venue: how long is the introduction, how is the gap stated, how are limitations phrased?",
      "Several points are often misunderstood:",
      {list:[
        "**Formal isn’t the same as complicated.** Long noun phrases and passive constructions can hide who did what. Many style guides now recommend active voice and first person for the authors’ own actions.",
        "**Reusing stock phrases isn’t plagiarism**, as the Academic Phrasebank itself explains; copying someone else’s content or distinctive wording without quotation and citation is.",
        "**Language polishing tools**, including AI tools, change wording but can also change meaning or introduce errors and invented references. Many publishers and universities require disclosure of some kinds of AI assistance; policies differ and change, so check the current one.",
        "**English isn’t the only language of scholarship.** Writing in an additional language is normal in research, and many journals publish in other languages or several."
      ]},
      "Finally, writing is part of thinking. Drafting often reveals that the argument needs to change, which is why experienced writers expect substantial revision."
     ]},
    related:["argument-structure","academic-style","revision-feedback","journal-submission"],
    read:[{book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”"}],
    sources:[{t:"Academic Phrasebank (University of Manchester)", url:"https://www.phrasebank.manchester.ac.uk/"},{t:"OpenStax Writing Guide with Handbook, Chapter 10", url:"https://openstax.org/books/writing-guide/pages/10-introduction"}], checked:"2026-11"},

   {id:"argument-structure", title:"Thesis, paragraphs and signposting", aka:["thesis statement","topic sentence","paragraph structure","transitions","PEEL"], tags:["writing","argument"],
    summary:"How a main claim, focused paragraphs and clear transitions turn notes into an argument.",
    levels:{
     starter:[
      "An argument in writing has a skeleton. At the top is the [[thesis-statement]]: the main claim of the whole piece. Under it are paragraphs, each making one point that supports the thesis. Between them are transitions that tell the reader how the points connect.",
      "A useful paragraph pattern: a [[topic-sentence]] that states the point, **evidence** that supports it, **analysis** explaining why the evidence matters, and a **link** to the thesis or the next point. Some teachers call versions of this PEEL or PEA.",
      "Transitions are small words with big jobs: “however” signals a contrast, “therefore” a consequence, “for example” an illustration. Used correctly, they make your reasoning visible.",
      {tip:"Test a paragraph by asking: could I say its point in one sentence? If not, it may be two paragraphs."}
     ],
     builder:[
      "**A strong thesis** is specific, arguable and supportable. “This essay discusses tourism” is a topic; “Community-run homestays kept more tourist spending in the village than hotels did” is a claim someone could test and challenge.",
      "**Outlines** make the structure explicit before drafting: thesis, main points written as claims, and evidence under each. **Reverse outlines** do the same after drafting, to check what you actually wrote.",
      "**Signposting** works at two scales:",
      {list:[
        "**Maps** near the start of long texts or sections (“First…, then…, finally…”).",
        "**Transitions** between sentences and paragraphs, which must be logically true: “therefore” claims the next point follows."
      ]},
      "**Analysis** is the most often missing move. Evidence doesn’t speak for itself: tell the reader what it shows and how it supports your claim. A paragraph that is all quotation or all data is a summary, not an argument.",
            "**Paragraph length** follows the point, not a rule. In academic prose, a paragraph often runs from about three to eight sentences, but a short paragraph that makes one sharp point is fine, and a long one is fine if it stays on one idea.",
      "A quick self-check: highlight every topic sentence in one colour and the thesis in another, and see whether each highlighted sentence clearly serves the thesis."
     ],
     pro:[
      "Real arguments are rarely a straight line. Strong academic writing also:",
      {list:[
        "**Anticipates objections** and answers them, or concedes them honestly (“Admittedly…”). Addressing counter-arguments usually increases credibility.",
        "**Separates claim types**: claims of fact (what is the case), cause (why), value (how good) and policy (what should be done) need different evidence.",
        "**Places the thesis to suit the genre.** Many empirical articles state the aim and key finding in the abstract and the last paragraph of the introduction; some humanities essays build to their thesis; reports for decision-makers often lead with recommendations."
      ]},
      "Paragraph patterns are scaffolds. Experienced writers vary them: a paragraph may open with a puzzle, or use a short one-sentence paragraph for emphasis. What stays constant is **unity** (one controlling idea) and **coherence** (each sentence connects to the next, through repeated key terms, pronouns and accurate transitions).",
      "A practical diagnostic is to read only the first sentence of each paragraph in order. If those sentences alone give a coherent summary of the argument, the structure is probably sound; if not, the topic sentences or the order need work.",
      "Transitions can also be built from **repetition of key terms**. Ending one paragraph with “cost” and opening the next with “These costs…” links them without any connective word. Readers follow ideas more easily when a key term keeps the same name throughout, so avoid swapping in synonyms just for variety."
     ]},
    related:["academic-writing","academic-style","revision-feedback"],
    read:[{book:"owg", where:"Section 10.6 “Editing Focus: Paragraphs and Transitions”"}],
    sources:[{t:"OpenStax Writing Guide with Handbook, Chapter 10", url:"https://openstax.org/books/writing-guide/pages/10-introduction"},{t:"OpenStax Writing Guide, 12.5 Writing Process: Integrating Research", url:"https://openstax.org/books/writing-guide/pages/12-5-writing-process-integrating-research"}], checked:"2026-11"},

   {id:"academic-style", title:"Hedging, register and concision", aka:["cautious language","hedges","boosters","formal register","concise writing","wordiness"], tags:["writing","style"],
    summary:"Making claims exactly as strong as the evidence, in a suitable register, with no wasted words.",
    levels:{
     starter:[
      "[[hedging|Hedging]] means choosing words that show how sure you are. “This proves…” is very strong; “this suggests…” or “this may…” is more cautious. Good researchers match the strength of the words to the strength of the evidence.",
      "[[academic-register|Register]] is how formal your language is. Academic register is usually formal and precise: “did not” rather than “didn’t”, specific terms rather than slang, and descriptions of people that are respectful and exact.",
      "**Concision** means no wasted words. “Due to the fact that” becomes “because”; “It is important to note that the results were significant” becomes “The results were significant.”",
      {tip:"Hedging isn’t being vague. “Attendance rose by 12% in the three schools studied” is precise and needs no hedge; “this may apply to other schools” hedges only the part you’re unsure about."}
     ],
     builder:[
      "The University of Manchester’s Academic Phrasebank explains hedging as avoiding absolute certainty where there may be some uncertainty, and avoiding over-generalisation. It notes that discussion sections are especially rich in hedges. Common hedging devices include:",
      {list:[
        "**Modal verbs**: may, might, could.",
        "**Adverbs**: probably, possibly, generally, often.",
        "**Quantifiers**: many, most, some, the majority of.",
        "**Tentative phrases**: “there is some evidence to suggest that…”, “one possible explanation is…”.",
        "**Verbs and nouns**: tend to, appear to, there is a tendency for."
      ]},
      "The opposite of a hedge is a **booster** (clearly, certainly, undoubtedly). Use boosters only for what is genuinely well established.",
      "Two common errors are **overclaiming** (proof or [[causation]] from a small or [[correlation|correlational]] study) and **over-hedging** (“might possibly perhaps”), which hides real findings.",
      "For concision, watch for nominalisations (“conducted an investigation” → “investigated”), empty openers (“It should be noted that”) and redundant pairs (“each and every”).",
      "**Register** checks: avoid contractions and slang in formal papers; define technical terms the first time; describe people precisely and respectfully (“adults aged 65 and over” rather than “the elderly”); and use the person (“I”, “we” or impersonal forms) your field and style guide expect.",
      {tip:"Read your discussion section and underline every verb that reports a finding (shows, suggests, proves…). Check each one against the strength of the evidence behind it."}
     ],
     pro:[
      "Hedging is about **epistemic stance**: signalling how strong your knowledge is. Linguists who study academic writing describe it as part of how writers negotiate claims with a critical expert audience. Too few hedges looks careless or arrogant to reviewers; too many looks unsure or evasive.",
      "Where to hedge:",
      {list:[
        "**Interpretations and explanations** (why something happened), rather than descriptions of what you observed.",
        "**Generalisations** beyond your sample, setting or time.",
        "**Causal claims** from non-experimental designs (“was associated with” rather than “caused”).",
        "**Implications and recommendations**, especially for policy."
      ]},
      "Conventions vary by field and by language. Some disciplines prefer impersonal constructions; many (and APA Style, for example) recommend first person for the authors’ own actions. Research writing traditions in different languages also differ in how directly claims are made, which matters for anyone writing in an additional language: following the norms of the target journal is a convention, not a judgement on other traditions.",
      "Concision has limits. Cutting a necessary definition, a limitation or a hedge to save words makes writing shorter but less accurate. Edit for **clarity first**, length second.",
      "A practical method for writers in an additional language is to build a personal **phrase bank** from papers in your field, organised by job (introducing a gap, reporting a result, admitting a limitation), alongside general resources such as the Academic Phrasebank."
     ]},
    related:["academic-writing","argument-structure","revision-feedback"],
    sources:[{t:"Academic Phrasebank: Being cautious", url:"https://www.phrasebank.manchester.ac.uk/using-cautious-language/"},{t:"About Academic Phrasebank", url:"https://www.phrasebank.manchester.ac.uk/about-academic-phrasebank/"}], checked:"2026-11"},

   {id:"revision-feedback", title:"Drafting, feedback and revision", aka:["reverse outline","peer review of drafts","editing","proofreading","writing process"], tags:["writing","process"],
    summary:"Outlining, rough drafts, reverse outlines, feedback and three kinds of revision.",
    levels:{
     starter:[
      "Good writing is rewritten writing. Most writers plan, write a rough draft, look at it again, get comments from others, and then revise, often more than once.",
      "Three kinds of later work are easy to mix up:",
      {list:[
        "**Revising**: changing the argument and structure.",
        "**Editing**: improving paragraphs and sentences.",
        "**Proofreading**: catching typos, wrong numbers and citation errors."
      ]},
      "Do them in that order. There’s no point polishing a sentence in a paragraph you’ll later cut.",
      "A [[reverse-outline]] is a powerful trick: after drafting, write each paragraph’s main point in one line. The list shows gaps, repeats and paragraphs trying to do two jobs.",
      "Feedback from other people is part of the process, not a sign that something went wrong. Ask specific questions, such as “What do you think my main point is?”, and you will get more useful answers than “Any thoughts?”."
     ],
     builder:[
      "**Feedback** is most useful when you ask for something specific. On early drafts, ask about **global** concerns: “What do you think my main argument is? Where did you get lost?” On late drafts, ask about **local** ones: sentences, grammar and formatting.",
      "Collect feedback in shared documents with comments and tracked changes or suggestions ({{track-changes-comments}}), so each change can be accepted or rejected.",
      "**Receiving feedback**: read it all, wait a day, then sort comments into do, consider, and decline (with a reason). If two readers stumble at the same place, there’s a real problem, even if their suggested fixes differ.",
      "**Giving feedback**: be specific and kind, comment on the text not the person, and say what works as well as what doesn’t.",
      "Practical habits: leave [CITE] markers instead of stopping to search; keep a file of cut paragraphs; save versions with the date in year-month-day form (for example `essay-2026-03-14.docx`) or rely on version history, so a bold revision is never a risk; read aloud on late passes; check references against the original sources at the end.",
      "**Reverse outlining step by step**: number the paragraphs; write each one’s point in a line; read the list alone; mark repeats, gaps, paragraphs with two points and anything off the thesis; then reorganise before editing sentences."
     ],
     pro:[
      "Writing research describes composing as **recursive**: drafting changes your understanding, which sends you back to planning. Experienced writers build this in by drafting early, outlining loosely and expecting large revisions, rather than trying to perfect each section in turn.",
      "Some techniques worth knowing:",
      {list:[
        "**Reverse outlining at two levels**: paragraph points for structure, and section headings plus one-line summaries for long documents such as theses.",
        "**The first-sentence test**: reading only topic sentences in order shows whether the argument flows.",
        "**Switching sides**: rewriting a paragraph from an opponent’s point of view (suggested in OpenStax *Writing Guide* Section 12.5) exposes weak reasoning.",
        "**Feedback logs**: a table of each comment, your decision and where you made the change. This becomes the basis of a response to reviewers (see {{responding-to-reviewers}})."
      ]},
      "Supervisors and editors often comment more on structure than on prose, and comments may be brief or blunt. Asking “what is the single most important thing to change?” focuses limited reading time.",
      "AI tools can flag unclear sentences or inconsistencies, but they don’t know your data or field reliably. Don’t upload confidential or unpublished material to services that may retain it, and follow your institution’s and publisher’s disclosure rules.",
      "Revision fatigue is real: after many readings you stop seeing the text. Leaving a draft for a few days, or asking a fresh reader, restores the distance you need."
     ]},
    related:["argument-structure","academic-writing","responding-to-reviewers","track-changes-comments"],
    read:[{book:"owg", where:"Section 12.5 “Writing Process: Integrating Research”"}],
    sources:[{t:"OpenStax Writing Guide, 12.5 Writing Process: Integrating Research", url:"https://openstax.org/books/writing-guide/pages/12-5-writing-process-integrating-research"},{t:"OpenStax Writing Guide, 19.5 Writing Process: Writing to Speak", url:"https://openstax.org/books/writing-guide/pages/19-5-writing-process-writing-to-speak"}], checked:"2026-11"},

   {id:"research-presentations", title:"Research talks", aka:["conference presentation","seminar talk","assertion-evidence slides","three minute thesis","Q&A"], tags:["presenting","research"],
    summary:"Planning, timing and delivering talks about research, from conference slots to seminars.",
    levels:{
     starter:[
      "A research talk shares what you studied, what you found and why it matters, in a way the audience can judge. It might be a short [[conference-talk]], a longer seminar, a lightning talk or a three-minute summary for non-specialists.",
      "The basics from any good presentation apply (see {{presentation-planning}}): know your audience, have one [[key-message|main message]], and plan the talk before building slides.",
      "Research talks add three things: **just enough method** for people to trust the result, **honest limits**, and **time for questions**.",
      {tip:"A “15-minute slot” usually includes questions and changeover. Find out the split and rehearse to a little under your talking time."},
      "Questions at the end are often the most useful part: they show what interested or puzzled people. Leave time for them, and it’s fine to say “I don’t know, but I can find out.”"
     ],
     builder:[
      "**Timing and rehearsal**: rehearse aloud with a timer at least twice; real talks run longer than silent read-throughs. Mark slides you can skip if you start late. Practise the opening and closing until you can say them without notes; if you present in an additional language, short notes are fine.",
      "**Slides**: one idea per slide. The assertion–evidence approach (associated with Michael Alley) uses a full-sentence claim as the headline and visual evidence underneath, instead of bullet lists. Redraw paper figures for the screen with large labels and one message each. Number your slides and keep backup slides for likely questions.",
      "**Credit and acknowledgement**: short citations on slides, full references at the end or in a handout; acknowledge co-authors and funders.",
      "**Questions**: repeat each question so everyone hears it; answer briefly; say “I don’t know” when you don’t, and offer to follow up.",
      "**Accessibility**: high contrast, large text, no meaning carried by colour alone, visuals described aloud, the microphone always on, captions online, and slides shared in advance (see {{accessible-slides}}).",
      "**Before the day**: send slides in the format the organisers ask for, test them on the venue’s equipment or platform if you can, bring a PDF copy as a backup, and check how the chair will signal time."
     ],
     pro:[
      "Different formats reward different skills. Conference talks reward ruthless focus on one result; seminars reward a coherent story across several studies and the ability to handle long, probing discussion; job talks add a vision of future work; three-minute formats, such as the Three Minute Thesis competition that began at the University of Queensland in 2008, reward plain-language explanation.",
      "Experienced presenters:",
      {list:[
        "**Structure around the question**, not the chronology of the project.",
        "**Show uncertainty visually**, for example [[confidence-interval|confidence intervals]] or ranges on charts, and say what they mean.",
        "**Plan for hybrid audiences**: repeat questions from the room, check the online chat, and avoid pointing at the screen with “this here”.",
        "**Treat critical questions as data.** Questions show where the argument or presentation is weak; note them down straight after the session, because they often improve the paper."
      ]},
      "Be aware that the conventions of “good” presenting are culturally variable: how much humour, how direct to be, how to address senior colleagues. Clear structure, honest limits and respect for time travel well across settings.",
      "Recording and sharing talks raises consent questions: check whether the event records sessions, and never show identifiable participant data, faces or voices without the consent your ethics approval covers."
     ]},
    related:["academic-posters","presentation-planning","presenting-skills","accessible-slides","slide-visuals"],
    read:[{book:"owg", where:"Section 19.5 “Writing Process: Writing to Speak”"}],
    sources:[{t:"OpenStax Writing Guide, 19.5 Writing Process: Writing to Speak", url:"https://openstax.org/books/writing-guide/pages/19-5-writing-process-writing-to-speak"}], checked:"2026-11"},

   {id:"academic-posters", title:"Research posters and poster sessions", aka:["conference poster","e-poster","poster pitch"], tags:["presenting","research"],
    summary:"Designing a research poster and talking about it at a poster session.",
    levels:{
     starter:[
      "A research poster is a large, visual summary of a study, displayed at a [[poster-session]] where presenters stand by their posters and chat with people who stop.",
      "A good poster is **mostly pictures and white space**: a title that states the finding, a short question, a brief visual method, one big clear result, a conclusion and a QR code or link to more detail.",
      "The session is a conversation. Prepare a 30-second explanation and a longer two- or three-minute one, and ask visitors what they work on.",
      {tip:"Always read the conference’s poster instructions first: size and orientation are set by the organisers, and mistakes are hard to fix on the day."}
     ],
     builder:[
      "**Design**:",
      {list:[
        "Design for reading from a step or two away. A rough check is to print the poster on an ordinary sheet: if body text is readable at arm’s length, it will work full size.",
        "Make a clear reading path: columns, numbered sections or arrows.",
        "Use far fewer words than a paper; move detail (full methods, large tables, the complete reference list) to a linked PDF or handout.",
        "All ISO A-series sizes share the same proportions, so a layout designed at A4 scales to A0 (841 × 1189 mm), one common poster size. Many conferences specify sizes in inches instead."
      ]},
      "**Production**: allow several days for printing; use high-resolution images; export to PDF for the printer. Fabric posters fold for travel. Some conferences use digital e-posters on screens, sometimes with a short recorded talk.",
      "**Accessibility**: strong contrast, large plain fonts, no meaning by colour alone, alt text in the digital version, and a spoken description of your main figure when you present it.",
      "**At the session**: stand beside, not in front of, your poster; greet people without pressuring them; and offer the 30-second version first, then more if they ask."
     ],
     pro:[
      "Posters are often underrated. At large conferences, poster sessions can produce more substantive conversations than talks, because people who stop are interested in your exact topic and can ask detailed questions.",
      "Approaches vary. Some fields favour a traditional layout mirroring the paper (introduction, methods, results, conclusion); others favour designs where a single, large plain-language statement of the main finding dominates the poster, with details at the sides. Choose what suits your field’s expectations and the venue.",
      "Practical points experienced presenters use:",
      {list:[
        "**A takeaway handout or QR code** to the preprint, paper or poster PDF, so interest outlasts the session.",
        "**Notebook or contact cards**, to follow up on suggestions and collaborations.",
        "**Credit**: list co-authors and affiliations, acknowledge funders, and cite key sources.",
        "**Data privacy**: never show identifiable participant information, including in photos."
      ]},
      "If you can’t attend in person, ask whether the conference accepts remote or digital presentation; policies differ. Digital or hybrid conferences may ask for an e-poster file, a short recorded walk-through, or both. Check file format, size limits and accessibility requirements (for example captions on recordings), and treat the recording like a short talk: one message, clear structure and a described main figure.",
      "After the session, upload the poster PDF to a repository or share it openly if the conference allows, so the work stays findable."
     ]},
    related:["research-presentations","accessible-slides","slide-design"],
    sources:[{t:"OpenStax Writing Guide, 19.5 Writing Process: Writing to Speak", url:"https://openstax.org/books/writing-guide/pages/19-5-writing-process-writing-to-speak"}], checked:"2026-11"},

   {id:"journal-submission", title:"Choosing a journal and submitting", aka:["where to publish","Think. Check. Submit.","cover letter","author guidelines","desk rejection"], tags:["publishing","research"],
    summary:"Finding a suitable, trustworthy journal and preparing a complete submission.",
    levels:{
     starter:[
      "To publish research in a journal, you choose a journal whose topic fits your work, check it is genuine, prepare your [[manuscript]] to its rules, and submit it through its website, usually with a short cover letter.",
      "Fit comes first: read the journal’s **aims and scope**, and look at where the work you cite was published.",
      "Then check trust. The free **Think. Check. Submit.** checklist asks questions like: do you or colleagues know the journal? Is the publisher easy to identify and contact? Is peer review described? Are fees clear? Does it promise acceptance or very fast review? (That’s a warning sign.)",
      {tip:"Ignore flattering email invitations from journals you’ve never heard of. Look journals up independently."},
      "Each journal publishes **author guidelines**: its rules on length, structure, reference style and what statements to include. Following them carefully saves time and avoids an early rejection."
     ],
     builder:[
      "**Author guidelines** set length, structure, reference style, figure formats and required statements: ethics approval, conflicts of interest, funding, data availability, author contributions and, increasingly, AI use.",
      "**Cover letter** (Taylor & Francis guidance): editor’s name if known; manuscript title and journal; a short explanation of the work, why it matters and why it suits this journal (not a copy of the abstract); a statement that it isn’t published or under consideration elsewhere; competing interests; contact details; one page at most.",
      "**One journal at a time.** Simultaneous submission breaches publication ethics; the ICMJE recommendations, for example, say the same manuscript should not be submitted to more than one journal at once.",
      "**Screening and [[desk-rejection]]**: editors first check scope, completeness and basic quality. Springer Nature lists criteria such as being within scope, novel, carefully prepared, clearly written and ethical.",
      "**Trust checks** in Think. Check. Submit. include the ISSN Portal, COPE membership, DOAJ listing for open access journals, and regional platforms (African Journals Online, SciELO, Latindex, Redalyc, INASP’s Journals Online). The checklist is available in more than 50 languages.",
      "Before you press submit, check that every co-author has seen and approved the final version, that all figures and supplementary files are attached, and that the reference style matches the journal’s.",
      "**Language**: if the journal publishes in a language you are still learning, ask a colleague to read the manuscript before submitting. Editors judge clarity, and genuine language editing is legitimate; buying authorship or “guaranteed acceptance” is not."
     ],
     pro:[
      "Journal choice involves trade-offs: readership versus selectivity, speed versus prestige, open access fees versus reach. Metrics such as [[impact-factor|impact factors]] are widely used but widely criticised as measures of individual articles; many research organisations now emphasise assessing the work itself.",
      "Estimating timelines: look at the received, revised and accepted dates printed on recent articles. Many journals publish median times on their websites; treat these as averages, not promises.",
      "Things experienced authors check before submitting:",
      {list:[
        "The journal’s **preprint policy** and what version you may later share (Jisc’s open policy finder summarises many journals’ policies).",
        "**APC amounts and waiver policies**, which can differ between journals of the same publisher, and whether your institution has an agreement covering fees.",
        "Whether the journal is **genuinely indexed** where it claims; some [[predatory-journal|predatory outlets]] list misleading indexes or metrics.",
        "Whether suggested reviewers are allowed and how conflicts are defined."
      ]},
      "If a paper is rejected and you decide to go elsewhere, reformat for the new journal and update the cover letter; if you won’t resubmit to a journal that asked for revisions, withdraw formally first. Some publishers offer transfers to sister journals, sometimes passing on the reviews.",
      "Keep copies of everything you submit, including the cover letter and any forms, and a record of dates; you will need them for revisions and, sometimes, for funders’ reports."
     ]},
    related:["responding-to-reviewers","orcid","peer-review","predatory-journals","open-access","scholarly-publishing"],
    read:[{book:"acrl", where:"Frame “Scholarship as Conversation”"}],
    sources:[{t:"Think. Check. Submit.: Journals checklist", url:"https://thinkchecksubmit.org/journals/"},{t:"Taylor & Francis: How to write a cover letter for journal article submission", url:"https://authorservices.taylorandfrancis.com/publishing-your-research/making-your-submission/writing-a-journal-article-cover-letter/"},{t:"Springer Nature: What editors want", url:"https://www.springernature.com/gp/authors/campaigns/how-to-submit-a-journal-article-manuscript/what-editors-want"}], checked:"2026-11"},

   {id:"responding-to-reviewers", title:"Peer review and responding to reviewers", aka:["revise and resubmit","response letter","rebuttal letter","single-anonymous","double-anonymous","open peer review"], tags:["publishing","peer review"],
    summary:"How peer review works from the author’s side, and how to write a response that gets papers accepted.",
    levels:{
     starter:[
      "After an editor decides a manuscript is worth reviewing, independent experts (usually at least two) read it and write reports. The editor then decides: accept, revise, or reject.",
      "Acceptance with no changes is uncommon. Very often the decision is to [[revise-resubmit|revise and resubmit]], with minor or major revisions. That is usually good news: the journal wants to see the paper again.",
      "You then send a revised manuscript and a [[response-letter]] that answers every comment: what you changed and where, or why you didn’t change something.",
      {tip:"Wait a day before replying to reviews. Criticism stings at first, even when it’s fair and useful."},
      "Reviewers are usually other researchers who volunteer their time. Their reports can feel harsh, but most are trying to help the paper become clearer and more convincing."
     ],
     builder:[
      "**Review models** (Taylor & Francis definitions):",
      {list:[
        "**Single-anonymous**: reviewers know the authors; authors don’t know reviewers. Common in the sciences and medicine.",
        "**Double-anonymous**: neither knows the other. Common in the humanities and some social sciences.",
        "**Open**: no single agreed definition; reviewer identities and/or reports are revealed at some point.",
        "**Post-publication** review and [[registered-report|Registered Reports]] (the plan is reviewed before data collection) also exist."
      ]},
      "**Writing the response**:",
      {list:[
        "Point by point: quote or number each comment, then reply.",
        "Say exactly what changed and where (page, line, section). A two-column table works well.",
        "Polite, specific, not defensive. Disagree with reasons and evidence when needed.",
        "Ask the editor if a comment is unclear, or if reviewers contradict each other."
      ]},
      "Many journals also ask for a version of the manuscript with changes highlighted or tracked.",
      "If you don’t want to revise for that journal, withdraw the manuscript formally before submitting it anywhere else. A rejection is also a chance to improve: Taylor & Francis suggests finding out why, rechecking the next journal’s aims and scope, and considering whether the feedback changes your choice.",
      "**Timing**: the decision letter usually sets a deadline for revisions. If you need more time, ask the editor before it passes."
     ],
     pro:[
      "Editors read the response letter to judge whether the concerns are resolved, often before rereading the paper, so its clarity matters as much as the revisions themselves.",
      "Handling hard cases:",
      {list:[
        "**Contradictory reviewers**: say so respectfully, explain which route you took and why, and ask the editor to adjudicate if needed.",
        "**Requests outside scope** (a new study, unavailable data): explain why it isn’t feasible and address the underlying concern another way, for example as a limitation.",
        "**Requests to cite particular papers**: add them if they are relevant. If a reviewer seems to be pressing for citations without a clear reason, you can raise this politely with the editor.",
        "**Errors by reviewers**: correct them courteously; assume misunderstanding, and consider whether your text caused it."
      ]},
      "COPE notes that no review model fully prevents bias or fraud, and that in small fields anonymity is hard to maintain. Peer review is a filter, not a guarantee, which is why post-publication discussion, corrections and [[retraction|retractions]] exist.",
      "If rejected, use the reports to improve the paper before submitting elsewhere. Don’t simply resubmit unchanged: the same reviewers may be invited again.",
      "Keep the tone professional throughout. Editors and reviewers are colleagues you may meet again, and a calm, well-organised response is far more persuasive than a long defence. Start with one short sentence of thanks, then go straight to the point-by-point replies."
     ]},
    related:["journal-submission","revision-feedback","peer-review","scholarly-publishing"],
    sources:[{t:"Taylor & Francis: Understanding peer review", url:"https://authorservices.taylorandfrancis.com/publishing-your-research/peer-review/"},{t:"COPE: Peer review models", url:"https://publicationethics.org/topic-discussions/peer-review-models"}], checked:"2026-11"},

   {id:"orcid", title:"ORCID", aka:["ORCID iD","researcher identifier","author identifier"], tags:["publishing","identity"],
    summary:"A free, permanent identifier that links researchers to their work.",
    levels:{
     starter:[
      "Many researchers share names, and people change names, institutions and countries. An [[orcid-id]] solves the mix-ups: it’s a unique number that belongs to you for your whole career.",
      "It looks like a web address with 16 characters in four blocks, for example `https://orcid.org/0000-0002-1825-0097` (ORCID’s own sample record). The last character is a check digit and can be the letter X.",
      "It’s **free** for researchers, run by ORCID, a not-for-profit organisation, and you don’t need to belong to a university to register.",
      {tip:"Journals and funders often ask for your ORCID iD when you submit. Registering takes a few minutes at orcid.org."},
      "Your ORCID record can list your education, jobs, publications and funding, and you decide what is public."
     ],
     builder:[
      "**What it does**: your ORCID record can list your education, employment, publications, peer review and funding. Organisations you authorise (publishers, funders, universities) can add trusted information to it, so you “enter once, reuse often”, as ORCID puts it.",
      "**Privacy**: you set visibility for each item: everyone, trusted parties, or only you. ORCID’s support pages note that most information is public by default, while email addresses are private by default, so check your settings.",
      "**Keeping access**: add more than one email address (personal as well as work), so you can still sign in after you change jobs.",
      "**Who uses it**: many publishers, funders and universities ask for ORCID iDs during submission, grant applications and staff profiles. ORCID members can read from or write to your record with your permission.",
      "**Starting out**: you don’t need any publications to register; students often create an iD when they first submit work or apply for funding.",
      "**Where to show it**: as the full https address, ideally with the green iD icon, on papers and preprints (publishers usually add it when you link your record during submission), your CV, web profile and email signature, so people can find all your work whatever name variations appear on it."
     ],
     pro:[
      "Technical details: the identifier is a 16-character number compatible with ISO 27729 (ISNI). The final character is a checksum calculated with ISO/IEC 7064 MOD 11-2, which is why it can be X (representing 10). All 16 characters, including leading zeros, are required, and ORCID recommends storing the iD as a full https URI.",
      "ORCID works alongside other persistent identifiers: DOIs for works, and identifiers for organisations and grants. Together they let systems connect who did what, where, with which funding, without relying on name matching.",
      "Good practice:",
      {list:[
        "**Sign in through the system** (publisher, funder) when asked to connect your record, rather than typing your iD; this verifies the link.",
        "**Avoid duplicates**: if you find you have two records, contact ORCID support rather than keeping both.",
        "**Don’t treat the record as a quality signal.** Anyone can register; an ORCID iD identifies a person, it doesn’t vouch for their work."
      ]},
      "Registering requires agreeing to ORCID’s terms, including processing of your data in the United States; read the privacy policy if that matters to you.",
      "If you leave research, the record remains as a permanent link to what you did."
     ]},
    related:["journal-submission","responding-to-reviewers"],
    sources:[{t:"ORCID: Structure of the ORCID Identifier", url:"https://support.orcid.org/hc/en-us/articles/360006897674-Structure-of-the-ORCID-Identifier"},{t:"ORCID: What is an ORCID iD and how do I use it?", url:"https://support.orcid.org/hc/en-us/articles/360006897334-What-is-an-ORCID-iD-and-how-do-I-use-it"},{t:"About ORCID", url:"https://info.orcid.org/what-is-orcid/"}], checked:"2026-11"},

   {id:"graduate-degrees", title:"Master’s and doctoral degrees around the world", aka:["graduate school","postgraduate study","PhD","MPhil","MRes","taught master's","research master's","professional doctorate"], tags:["graduate study","careers"],
    summary:"How taught and research master’s degrees and different doctoral models compare.",
    levels:{
     starter:[
      "After a first degree, you can study for a [[masters-degree]] and then a [[doctorate]] such as a PhD. Different countries organise these differently, and none is the standard.",
      "Master’s degrees can be **taught** (mostly courses, often with a research project), **research** (mostly one project and a thesis) or **professional** (preparing for a profession).",
      "Doctorates follow two broad patterns: **research from the start**, with an early review and a thesis examined at the end, or **coursework first**, with exams before candidacy and a dissertation defended before a committee. Many programmes mix the two.",
      {tip:"Read the regulations of the specific programme. They decide everything from length to how you are examined."},
      "Names differ too: “graduate study” in North America is usually “postgraduate study” in the UK, Australia and many other places, and a US “MS” is a UK “MSc”."
     ],
     builder:[
      "**Master’s (UK QAA categories, which QAA calls indicative)**: research (e.g. MPhil, MLitt, MRes), specialised or advanced study (taught; e.g. MA, MSc; frequently at least a third is a research project), and professional or practice (e.g. MBA, LLM, MSW). A UK taught master’s is usually one year full time; under the Bologna system a master’s usually carries 90–120 ECTS credits (60 credits is about a year full time), and many North American master’s take two years.",
      "**Doctorates**:",
      {list:[
        "**Research first** (e.g. UK, Ireland, Australia, New Zealand and many other systems): research begins at once; progress reviews, often a confirmation or transfer around the end of year one; thesis and examination.",
        "**Coursework first** (common in the US and Canada): one to two years of courses, a qualifying or comprehensive exam, proposal and admission to candidacy, then dissertation research and a defence. Often entered directly after a bachelor’s.",
        "**Professional doctorates**: taught elements plus a research project or portfolio, often for mid-career professionals.",
        "**PhD by publication**: peer-reviewed papers plus a linking commentary."
      ]},
      "In Europe, the Bologna Process organises degrees into three cycles (bachelor’s, usually 180–240 ECTS credits; master’s; doctorate). Systems elsewhere, including in East Asia, Latin America and Africa, combine coursework, research and examination in their own ways.",
      "**Practical differences** to compare when choosing: whether you apply to a project or a programme, whether teaching is required or paid, how long funding lasts compared with typical completion times, and whether part-time study is possible. Programme handbooks and current students are the best sources."
     ],
     pro:[
      "Comparing systems needs care, because the same words mean different things. Length is a good example: a US PhD entered from a bachelor’s often includes work that elsewhere would be a separate master’s, so headline durations aren’t directly comparable. The US Council of Graduate Schools notes that science programmes are usually designed so that well-prepared students finish in five to six years after the bachelor’s, and that completion times vary more in other fields, particularly the humanities and social sciences.",
      "Other differences that matter when choosing:",
      {list:[
        "**Status**: in some systems doctoral candidates are students; in others (the Netherlands and the Nordic countries, for example) many are employees on contracts.",
        "**Admission**: to a specific project and supervisor, or to a programme, choosing a supervisor later.",
        "**Teaching**: required, optional or paid as an assistantship.",
        "**Examination**: closed viva, committee defence, public defence, or written reports (see {{thesis-defence}}).",
        "**Recognition**: qualifications frameworks (national ones and, in Europe, the European Qualifications Framework) help compare levels, but professional recognition can still differ."
      ]},
      "Funding information is best taken from official university and funder websites, never from paid agents.",
      "When reading rankings, forums or advice, check which system they assume. Practical questions often reveal the most: Are you admitted to a project or a programme? Who funds you, and for how long? What are the milestones? How is the final work examined? What do recent graduates go on to do?"
     ]},
    related:["supervision","thesis-defence"],
    sources:[{t:"QAA Characteristics Statement: Master’s Degree (2020)", url:"https://www.qaa.ac.uk/docs/qaa/quality-code/master's-degree-characteristics-statement.pdf"},{t:"QAA Characteristics Statement: Doctoral Degree (2020)", url:"https://www.qaa.ac.uk/docs/qaa/quality-code/doctoral-degree-characteristics-statement-2020.pdf"},{t:"Council of Graduate Schools: The Doctor of Philosophy Degree", url:"https://cgsnet.org/wp-content/uploads/2022/01/doctor_of_philosophy_degree.pdf"}], checked:"2026-11"},

   {id:"supervision", title:"Supervisors, advisors, committees and milestones", aka:["PhD supervisor","doctoral advisor","supervisory team","dissertation committee","candidacy","confirmation","annual review"], tags:["graduate study"],
    summary:"Who guides a graduate researcher, and the checkpoints from proposal to submission.",
    levels:{
     starter:[
      "A [[supervisor]] (called an **advisor** in North America) is the academic who guides your research: helping you plan, reading drafts, and making sure you meet requirements. Many universities use a team of two or three supervisors, or a committee.",
      "Graduate research has [[research-milestones]]: checkpoints such as a research proposal, an early review, yearly progress reports, submission and examination.",
      "A good relationship depends on clear expectations: how often you meet, how quickly drafts are read, and who to talk to if problems arise.",
      {tip:"Ask current students how supervision really works before you accept a place."},
      "Many universities also have a graduate school or doctoral college, which sets the rules, runs training and can help if the relationship with a supervisor runs into difficulty."
     ],
     builder:[
      "**Structures**:",
      {list:[
        "**Supervisory teams**: QAA’s guidance describes UK candidates working with a supervisory team rather than a single supervisor. Annual progress reviews often involve someone independent of the team.",
        "**Committees**: in the US model, the Council of Graduate Schools describes a dissertation committee of usually three to five faculty, chaired by the main advisor, which approves the proposal and examines the final work.",
        "**Candidacy**: at the University of British Columbia, for example, doctoral students must complete the required coursework, pass a comprehensive exam and have their proposal approved by their supervisory committee, and must be admitted to candidacy within 36 months of first registering."
      ]},
      "**Agreeing expectations**: many universities provide templates for a supervision agreement covering meetings, feedback, authorship, training and leave. If yours doesn’t, write a short shared note after your first meeting.",
      "**When it goes wrong**: talk to a second supervisor, the graduate school, a director of graduate studies or postgraduate tutor, or an ombudsperson. Changing supervisor is possible in most systems.",
      "**Milestones** vary in name and timing: a proposal or prospectus, an early confirmation, transfer or qualifying exam, annual progress reviews, ethics approval, submission and examination. Your programme’s handbook lists the exact ones and their deadlines.",
      "Supervisors are also busy people with many roles. Sending a short agenda before meetings and a summary afterwards makes the most of limited time."
     ],
     pro:[
      "Supervision styles range from closely directed (common in laboratory sciences, where students join a funded project) to largely independent (common in the humanities, where students develop their own projects). Neither is better in itself; the mismatch between expected and actual style is a frequent source of difficulty, so discussing it early helps.",
      "Milestones exist to catch problems early, not to trip people up. Typical early reviews look for: a feasible question and plan, a realistic timeline, ethics and {{data-management-plan|data management}} arrangements, and evidence of writing. Treat them as structured feedback.",
      "Points experienced supervisors and students mention:",
      {list:[
        "**Keep a meeting record**: decisions, actions and deadlines, shared after each meeting.",
        "**Write from early on**: regular writing makes progress visible and gives supervisors something concrete to comment on.",
        "**Plan for disruption**: illness, caring responsibilities and fieldwork problems happen; most regulations allow suspensions or extensions if raised promptly.",
        "**Build a wider network**: other academics, peers and professional staff can offer perspectives a single supervisor can’t."
      ]},
      "Power differences shape supervision: supervisors often influence funding, references and future jobs. That is one reason universities provide independent routes for concerns, such as a graduate school, postgraduate tutor or ombudsperson, and why written records of agreements protect both sides."
     ]},
    related:["graduate-degrees","thesis-defence","research-presentations"],
    sources:[{t:"QAA Characteristics Statement: Doctoral Degree (2020)", url:"https://www.qaa.ac.uk/docs/qaa/quality-code/doctoral-degree-characteristics-statement-2020.pdf"},{t:"Council of Graduate Schools: The Doctor of Philosophy Degree", url:"https://cgsnet.org/wp-content/uploads/2022/01/doctor_of_philosophy_degree.pdf"},{t:"UBC: Comprehensive Examination and Candidacy", url:"https://www.grad.ubc.ca/policies/comprehensive-examination-candidacy"}], checked:"2026-11"},

   {id:"thesis-defence", title:"Theses, dissertations, vivas and defences", aka:["thesis","dissertation","viva voce","PhD defense","public defence","corrections","thesis by publication"], tags:["graduate study"],
    summary:"What the final written work is called in different systems, and how it is examined.",
    levels:{
     starter:[
      "At the end of a research degree you submit a long piece of original work. In the UK it is usually called a [[thesis]] for a doctorate and a [[dissertation]] for a master’s; in the US it is usually the other way round. Universities within one country can differ too.",
      "Then it is examined. In the UK the usual format is a [[viva]]: a private oral examination with examiners who have read the thesis. In the US and Canada, candidates defend the dissertation before their committee. In several European countries there is a public defence.",
      {tip:"In many systems, passing subject to corrections is a common outcome. Corrections are normal, not a failure."},
      "The final work can be one long book-like text or, in many places, a set of published papers with a linking introduction and conclusion."
     ],
     builder:[
      "**Formats of the written work**: a **monograph** (one continuous argument) or a **thesis by publication** (several papers linked by an introduction and conclusion). QAA notes doctoral theses in discursive subjects may run to 100,000 words, while mathematics theses may be much shorter.",
      "**UK viva** (QAA): usually at least two examiners, typically one internal and at least one external; normally closed; many universities let the supervisor observe, but the supervisor takes no active part in the decision, and many add an independent chair. Outcomes: pass; pass with minor amendments (often three to six months) or major amendments (often six to twelve); resubmission; a different award such as an MPhil; or, for a minority, fail. UK doctorates aren’t graded.",
      "**North American defence** (CGS): a presentation and defence of the dissertation before the committee; some institutions open it to the wider academic community.",
      "**Public defence** (some continental European systems): QAA notes the outcome is usually already known, and family and friends may attend.",
      "**Preparation** is similar everywhere: reread the thesis, list likely questions, practise explaining your contribution in plain words, and check the regulations on format and timing.",
      "**Who examines** differs too: internal and external examiners in the UK model, a committee in the North American model, and in some systems (most Australian universities, for example) examiners from outside the university, often from other countries, who report in writing, usually without an oral. Your regulations say how examiners are chosen and whether you can comment on the choice."
     ],
     pro:[
      "Examination design reflects what a system wants to test. A closed viva probes whether the candidate truly authored and understands the work; a public defence celebrates and makes visible a thesis already judged acceptable; written external reports prioritise independent expert judgement and can involve examiners far away.",
      "Preparing well:",
      {list:[
        "**Know your examiners’ work**, and anticipate questions about methods, alternative explanations, limitations and contribution.",
        "**Reread your thesis** shortly before, marking errors you’ve found; listing them yourself shows command of the work.",
        "**Practise** with a mock viva or practice defence.",
        "**Check the rules** on who may attend, how long it lasts, and the timeline for corrections."
      ]},
      "Terminology traps: “defence” (UK spelling) and “defense” (US), “viva voce” shortened to viva, “corrections” or “amendments”, “committee” or “jury”. Programmes taught in English in non-English-speaking countries may use either set of terms. Your regulations are the authority.",
      "After examination, corrections are usually checked by one or more examiners before the degree is awarded, and the final thesis is often deposited in the university’s repository, sometimes openly online. Check any embargo options if you plan to publish chapters as papers or have sensitive data.",
      "Nerves are normal. Examiners generally want to see that you understand your work and its limits, not to trip you up; it is fine to pause, ask for a question to be repeated, or say what you would need to find out."
     ]},
    related:["graduate-degrees","supervision","research-presentations"],
    sources:[{t:"QAA Characteristics Statement: Doctoral Degree (2020)", url:"https://www.qaa.ac.uk/docs/qaa/quality-code/doctoral-degree-characteristics-statement-2020.pdf"},{t:"Council of Graduate Schools: The Doctor of Philosophy Degree", url:"https://cgsnet.org/wp-content/uploads/2022/01/doctor_of_philosophy_degree.pdf"},{t:"University of Oxford: Writing theses and dissertations", url:"https://lifelong-learning.ox.ac.uk/writing-theses-dissertations/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"thesis-statement", term:"Thesis statement", def:"One or two sentences, usually near the start, that state the main claim a piece of writing will argue and support.", codex:"argument-structure"},
   {id:"topic-sentence", term:"Topic sentence", def:"A sentence, usually the first in a paragraph, that states the paragraph’s one main point.", codex:"argument-structure"},
   {id:"hedging", term:"Hedging", def:"Using cautious language (may, suggests, most) so a claim is no stronger than the evidence allows.", codex:"academic-style"},
   {id:"academic-register", term:"Academic register", def:"The formal, precise style of language expected in academic writing. Its exact conventions vary by field, journal and language.", codex:"academic-style"},
   {id:"reverse-outline", term:"Reverse outline", def:"An outline made after drafting, by writing each paragraph’s main point in one line, to check the structure you actually wrote.", codex:"revision-feedback"},
   {id:"conference-talk", term:"Conference talk", def:"A short oral presentation of research at an academic conference, often 10–20 minutes including questions. Lengths vary by conference.", codex:"research-presentations"},
   {id:"poster-session", term:"Poster session", def:"A period at a conference when researchers stand by large printed or digital posters of their work and talk with people who stop to read them.", codex:"academic-posters"},
   {id:"manuscript", term:"Manuscript", def:"The version of a paper that authors submit to a journal or publisher, before it is accepted and published.", codex:"journal-submission"},
   {id:"desk-rejection", term:"Desk rejection", def:"When a journal editor rejects a manuscript without sending it for peer review, usually because it doesn’t fit the journal’s scope or basic requirements.", codex:"journal-submission"},
   {id:"revise-resubmit", term:"Revise and resubmit", def:"A journal decision asking authors to revise their manuscript (minor or major revisions) and send it back for further consideration.", codex:"responding-to-reviewers"},
   {id:"response-letter", term:"Response letter", def:"A point-by-point reply to reviewers’ and editors’ comments, sent with a revised manuscript, saying what was changed and where, or why not. Also called a response to reviewers.", codex:"responding-to-reviewers"},
   {id:"orcid-id", term:"ORCID iD", def:"A free, permanent 16-character identifier for a researcher, shown as an https://orcid.org/ address, that links them to their work across name and job changes.", codex:"orcid"},
   {id:"masters-degree", term:"Master’s degree", def:"A graduate (postgraduate) degree after a bachelor’s. It may be taught, research-based or professional, and usually lasts one or two years full time.", codex:"graduate-degrees"},
   {id:"doctorate", term:"Doctorate", def:"The highest level of university degree, awarded for original research, such as a PhD (or DPhil) or a professional doctorate.", codex:"graduate-degrees"},
   {id:"supervisor", term:"Supervisor", def:"The academic who guides a research student’s project. Called an advisor in North America; many universities use a team or committee.", codex:"supervision"},
   {id:"thesis", term:"Thesis", def:"A long piece of original research writing submitted for a degree. In the UK usually the doctoral work; in the US often a master’s. Usage varies, so check your regulations.", codex:"thesis-defence"},
   {id:"dissertation", term:"Dissertation", def:"A long piece of research writing submitted for a degree. In the US usually the doctoral work; in the UK often a master’s project. Usage varies by university.", codex:"thesis-defence"},
   {id:"viva", term:"Viva (viva voce)", def:"An oral examination of a thesis, in which examiners who have read it question the candidate. In the UK it is usually held in private.", codex:"thesis-defence"},
   {id:"research-milestones", term:"Research milestones", def:"Formal checkpoints in a research degree, such as the proposal, an early review or qualifying exam, annual reviews, submission and examination.", codex:"supervision"},
   {id:"taught-masters", term:"Taught master’s", def:"A master’s degree made up mainly of modules or courses, often with a research project or dissertation.", codex:"graduate-degrees"},
   {id:"research-masters", term:"Research master’s", def:"A master’s degree (for example an MRes or MPhil) based mainly on an individual research project and a thesis.", codex:"graduate-degrees"},
   {id:"qualifying-exam", term:"Qualifying exam", def:"An exam, common in North American doctoral programmes, that tests a student’s grasp of their field before admission to candidacy. Also called a comprehensive or general exam.", codex:"supervision"},
   {id:"thesis-committee", term:"Dissertation committee", def:"A group of faculty, usually three to five in the US model, chaired by the main advisor, that guides and examines a doctoral dissertation.", codex:"supervision"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t4u10-q01", lesson:"t4u10-l1", level:1, q:"What is a thesis statement?", options:[
     {t:"A sentence or two stating the main claim the whole piece will support", ok:true, why:"The thesis is the central claim; every section should serve it."},
     {t:"The title of the paper", why:"A title names the piece; it may hint at the claim but isn’t the argument itself."},
     {t:"A list of the sources used", why:"That’s a reference list or bibliography."},
     {t:"The final paragraph summarising the results", why:"A conclusion may restate the thesis, but the thesis is normally stated early."}]},
   {id:"t4u10-q02", lesson:"t4u10-l1", level:2, q:"Which sentence is the most arguable thesis?", options:[
     {t:"Weekly sharing sessions between night and day shifts reduced medication errors more than written handover notes alone.", ok:true, why:"Specific, debatable and testable: someone could ask for the evidence."},
     {t:"Medication errors are bad.", why:"Nobody disputes this; there’s nothing to argue."},
     {t:"This report is about handovers.", why:"An announcement of the topic, not a claim."},
     {t:"Hospitals have day and night shifts.", why:"A fact, not an argument."}]},
   {id:"t4u10-q03", lesson:"t4u10-l1", level:1, q:"In the four-move paragraph pattern, what does the **analysis** sentence do?", options:[
     {t:"Explains what the evidence means and how it supports the point", ok:true, why:"Analysis connects evidence to the claim; without it, a paragraph is just a summary."},
     {t:"States the paragraph’s point", why:"That’s the topic sentence."},
     {t:"Gives the data or quotation", why:"That’s the evidence."},
     {t:"Lists the references", why:"References go in citations and the reference list, not an analysis sentence."}]},
   {id:"t4u10-q04", lesson:"t4u10-l1", level:2, q:"Which transition is used **incorrectly**? “Rainfall fell by 20%. **Therefore**, the village elected a new chief.”", options:[
     {t:"“Therefore”, because nothing shows the election followed from the rainfall", ok:true, why:"“Therefore” claims a consequence. Unless the text shows a causal link, it misrepresents the logic."},
     {t:"Nothing is wrong: any transition word makes writing flow", why:"Transitions carry logical claims; the wrong one makes the reasoning false."},
     {t:"The problem is the percentage sign", why:"Percentages are fine in academic writing."},
     {t:"The problem is the full stop between the sentences", why:"Punctuation isn’t the issue; the claimed relationship is."}]},
   {id:"t4u10-q05", lesson:"t4u10-l1", level:3, q:"Priya’s study of 30 small cafés in one city found that those with loyalty cards reported more repeat customers. Which sentence best fits the evidence?", options:[
     {t:"In our sample, cafés with loyalty cards reported more repeat customers, which suggests the cards may help; a larger study would be needed to test this.", ok:true, why:"It reports the finding precisely, hedges the interpretation once and names a limitation."},
     {t:"Loyalty cards cause customers to return to cafés everywhere.", why:"Overclaims twice: a correlational study can’t show cause, and one city can’t speak for “everywhere”."},
     {t:"It could perhaps possibly be that loyalty cards might maybe help.", why:"Over-hedged: stacked hedges hide the actual finding."},
     {t:"Loyalty cards are clearly the best marketing strategy.", why:"“Clearly” and “the best” go far beyond comparing cafés with and without cards."}]},
   {id:"t4u10-q06", lesson:"t4u10-l1", level:2, q:"Which rewrite is most concise while keeping the meaning of “The researchers made a decision to conduct an analysis of the data”?", options:[
     {t:"The researchers decided to analyse the data.", ok:true, why:"It turns the nouns “decision” and “analysis” back into verbs and keeps every piece of meaning."},
     {t:"The data.", why:"Too short: it loses who did what."},
     {t:"An analysis of the data was decided upon by the researchers.", why:"Still wordy, and the passive makes it longer."},
     {t:"The researchers made the decision of analysing the data.", why:"Still uses a noun (“decision”) where a verb is clearer."}]},
   {id:"t4u10-q07", lesson:"t4u10-l1", level:1, q:"According to its homepage, who was the Academic Phrasebank designed primarily for?", options:[
     {t:"Academic writers whose first language is not English (though native speakers use it too)", ok:true, why:"The homepage says this, and adds that many users are native speakers."},
     {t:"Only students in Manchester", why:"It is freely available online to anyone."},
     {t:"Only journal editors", why:"It is a general resource for academic writers."},
     {t:"People writing fiction", why:"Its phrases are organised around academic papers and functions such as being cautious."}]},
   {id:"t4u10-q08", lesson:"t4u10-l1", level:3, q:"Tomás uses an AI tool to polish the English of his discussion section. Which is the best practice?", options:[
     {t:"Check every change keeps his meaning, add no unchecked claims or citations, avoid pasting confidential data, and follow the disclosure rules that apply.", ok:true, why:"AI tools can change meaning or invent references, and institutions and journals have rules about data and disclosure."},
     {t:"Accept all changes, because the tool’s English is better.", why:"Smoother wording can still alter meaning, hedging or facts."},
     {t:"Paste in the unpublished interview transcripts so the tool understands the context.", why:"That may breach confidentiality and ethics approval."},
     {t:"Let the tool add references to support his points.", why:"AI tools can invent references; every citation must be one he has read and checked."}]},
   {id:"t4u10-q09", lesson:"t4u10-l1", level:2, q:"Which choice best fits a formal academic register in most fields?", options:[
     {t:"“Adults aged 65 and over were less likely to use the app.”", ok:true, why:"Precise, respectful and formal."},
     {t:"“Old folks didn’t really get the app.”", why:"Informal, imprecise and disrespectful wording."},
     {t:"“The elderly are bad with technology.”", why:"A sweeping stereotype with vague wording, not a finding."},
     {t:"“Seniors were, like, totally confused by it.”", why:"Slang and exaggeration have no place in a formal report."}]},
   /* ---- Lesson 2 ---- */
   {id:"t4u10-q10", lesson:"t4u10-l2", level:1, q:"What is a reverse outline?", options:[
     {t:"An outline made after drafting, listing each paragraph’s main point", ok:true, why:"It shows the structure you actually wrote, so gaps and repeats stand out."},
     {t:"An outline written backwards, conclusion first", why:"Order isn’t the point; it’s made from the finished draft."},
     {t:"The reference list sorted in reverse order", why:"It has nothing to do with references."},
     {t:"A plan made before any research", why:"That’s an ordinary outline or a proposal."}]},
   {id:"t4u10-q11", lesson:"t4u10-l2", level:1, q:"Which is the best order for later passes on a draft?", options:[
     {t:"Revise (argument, structure) → edit (sentences) → proofread (typos)", ok:true, why:"Big changes first, so you don’t polish text you’ll later cut."},
     {t:"Proofread → edit → revise", why:"Proofreading first wastes effort on text that may disappear."},
     {t:"Edit → proofread → revise", why:"Revision can change whole sections, undoing earlier editing."},
     {t:"Only proofread; revising is optional", why:"Most improvement in academic writing comes from revision."}]},
   {id:"t4u10-q12", lesson:"t4u10-l2", level:3, q:"Mei’s reverse outline shows paragraphs 3 and 7 make the same point, and paragraph 5 is about a topic unrelated to her thesis. What should she do?", options:[
     {t:"Merge 3 and 7, and cut or move paragraph 5", ok:true, why:"Repetition should be merged; material that doesn’t serve the thesis belongs elsewhere."},
     {t:"Fix the spelling in all three paragraphs first", why:"Proofreading paragraphs that will change or go is wasted effort."},
     {t:"Leave them: repetition helps readers remember", why:"Deliberate summaries can help, but accidental repetition makes the argument look disorganised."},
     {t:"Add more paragraphs about the unrelated topic", why:"That pulls the piece further away from its thesis."}]},
   {id:"t4u10-q13", lesson:"t4u10-l2", level:2, q:"Which feedback request best suits an **early** draft?", options:[
     {t:"“What do you think my main argument is, and where did you get lost?”", ok:true, why:"Early drafts need global feedback on argument and structure."},
     {t:"“Please check my commas.”", why:"Local feedback is better saved for late drafts."},
     {t:"“Does the font look professional?”", why:"Formatting is the last thing to settle."},
     {t:"“Is the reference list in perfect APA style?”", why:"Reference formatting comes during proofreading."}]},
   {id:"t4u10-q14", lesson:"t4u10-l2", level:2, q:"Why do many writers type a marker like [CITE] while drafting instead of stopping to find the reference?", options:[
     {t:"It keeps the flow of drafting; the markers are easy to find and fill in later", ok:true, why:"Searching mid-sentence breaks concentration, and a consistent marker is easy to search for."},
     {t:"Because references are optional in drafts submitted to journals", why:"Submitted manuscripts need complete references; markers are only for private drafts."},
     {t:"Because reference managers require it", why:"Reference managers don’t need markers; this is a drafting habit."},
     {t:"To hide which ideas came from other people", why:"The opposite: markers remind you to credit sources."}]},
   {id:"t4u10-q15", lesson:"t4u10-l2", level:3, q:"Two readers say Amara’s methods section is confusing, but suggest different fixes. What does this most likely mean?", options:[
     {t:"There is a real problem in that section, even though the best fix still needs her judgement", ok:true, why:"When several readers stumble at the same place, the problem is real; their suggested solutions are only options."},
     {t:"The readers are wrong because they disagree", why:"They agree on the problem; they differ only on the fix."},
     {t:"She must apply both fixes", why:"Applying contradictory fixes could make it worse. She chooses the best one."},
     {t:"She should delete the methods section", why:"Methods are needed so readers can judge the results."}]},
   {id:"t4u10-q16", lesson:"t4u10-l2", level:1, q:"Which is an example of a **global** concern in feedback?", options:[
     {t:"The conclusion makes a claim the results don’t support", ok:true, why:"It’s about the argument and evidence: a global issue."},
     {t:"A missing apostrophe", why:"A local, surface issue."},
     {t:"Inconsistent capitalisation of headings", why:"A local formatting issue."},
     {t:"A typo in a reference", why:"A local issue fixed during proofreading."}]},
   {id:"t4u10-q17", lesson:"t4u10-l2", level:2, q:"Kenji wants to cut a long section but worries he may need it later. What’s a good habit?", options:[
     {t:"Paste it into a separate ‘cuttings’ file, or rely on dated versions or version history", ok:true, why:"Saving cut text makes bold revision safe and painless."},
     {t:"Keep it in the paper in a smaller font", why:"Readers still have to wade through it; it doesn’t solve the problem."},
     {t:"Never cut anything once written", why:"Cutting is a normal and important part of revision."},
     {t:"Delete it and empty the recycle bin immediately", why:"That removes the safety net he wants."}]},
   {id:"t4u10-q18", lesson:"t4u10-l2", level:3, q:"Fatima gives a classmate feedback. Which comment is most helpful?", options:[
     {t:"“Your second paragraph convinced me. In the third, I couldn’t see how the survey supports your thesis; could you add a sentence explaining the link?”", ok:true, why:"Specific, kind, about the text, and it says both what works and what to change."},
     {t:"“Good, but unclear.”", why:"Too vague to act on."},
     {t:"“You’re not a good writer.”", why:"About the person, not the text, and gives nothing to fix."},
     {t:"“I would have chosen a different topic.”", why:"Not useful feedback on the draft they actually wrote."}]},
   /* ---- Lesson 3 ---- */
   {id:"t4u10-q19", lesson:"t4u10-l3", level:1, q:"What usually happens in a poster session?", options:[
     {t:"Presenters stand by their posters and talk with people who stop to read them", ok:true, why:"It’s an interactive, conversational format."},
     {t:"Each presenter gives a 20-minute lecture to a seated audience", why:"That describes a talk session."},
     {t:"Posters are judged with nobody present", why:"Presenters are usually expected to be there for discussion."},
     {t:"Posters are only sent to reviewers by post", why:"Posters are displayed at the conference, in print or on screens."}]},
   {id:"t4u10-q20", lesson:"t4u10-l3", level:2, q:"A conference slot is 20 minutes, including 5 minutes for questions. How long should the talk be?", options:[
     {t:"No more than 15 minutes, ideally rehearsed to a little less", ok:true, why:"20 − 5 = 15, and real talks tend to run longer than rehearsals."},
     {t:"20 minutes", why:"That leaves no time for the questions included in the slot."},
     {t:"25 minutes", why:"That overruns the slot and takes time from other speakers."},
     {t:"5 minutes", why:"That confuses the question time with the talk time."}]},
   {id:"t4u10-q21", lesson:"t4u10-l3", level:2, q:"In the assertion–evidence approach, what goes in a slide’s headline?", options:[
     {t:"A full-sentence claim, such as “Trees cooled bus stops more than shelters did”", ok:true, why:"The headline states the point; the visual below shows the evidence."},
     {t:"A one-word topic, such as “Results”", why:"Topic labels make the audience work out the point."},
     {t:"The full paragraph from the paper", why:"Walls of text compete with the speaker."},
     {t:"The slide number only", why:"Numbering is useful, but the headline should carry the message."}]},
   {id:"t4u10-q22", lesson:"t4u10-l3", level:1, q:"Why should a presenter repeat an audience member’s question before answering?", options:[
     {t:"So everyone, including people online or on a recording, hears it, and to check it was understood", ok:true, why:"Questions from the floor often aren’t audible to all, and rephrasing confirms understanding."},
     {t:"To use up time", why:"Repeating briefly is about clarity, not filling time."},
     {t:"Because it is a formal rule at every conference", why:"It’s good practice, not a universal rule."},
     {t:"To avoid answering", why:"Repeating comes before answering, not instead of it."}]},
   {id:"t4u10-q23", lesson:"t4u10-l3", level:3, q:"Dmitri’s chart shows two groups only as a red line and a green line. Which change makes it most accessible?", options:[
     {t:"Label each line directly and use different line styles or markers as well as colours", ok:true, why:"Meaning no longer depends on telling red from green, which many people with colour vision deficiency find hard."},
     {t:"Make both lines brighter", why:"Brighter red and green can still be confused."},
     {t:"Add a legend in red and green text", why:"The legend has the same colour problem."},
     {t:"Remove the axis labels to reduce clutter", why:"That makes the chart harder for everyone to read."}]},
   {id:"t4u10-q24", lesson:"t4u10-l3", level:2, q:"Which item belongs in a linked PDF rather than on the poster itself?", options:[
     {t:"The full questionnaire and every statistical table", ok:true, why:"Too detailed to read standing up; link it for those who want it."},
     {t:"A title stating the main finding", why:"The title is the most important element on the poster."},
     {t:"One large chart of the main result", why:"The key evidence belongs on the poster, big and clear."},
     {t:"A QR code and contact details", why:"These help people follow up, so they belong on the poster."}]},
   {id:"t4u10-q25", lesson:"t4u10-l3", level:1, q:"What should you check **first** when preparing a conference poster?", options:[
     {t:"The conference’s instructions on size and orientation", ok:true, why:"The organisers set these, and a wrong size is hard to fix on the day."},
     {t:"Which font is most fashionable", why:"Readability matters more than fashion, and size comes first."},
     {t:"How many colours you can fit", why:"Colour choices come later and should be restrained."},
     {t:"Whether you can include your whole paper", why:"Posters summarise; the paper can be linked."}]},
   {id:"t4u10-q26", lesson:"t4u10-l3", level:3, q:"Halfway through Lucía’s talk, she realises she will run over by about three minutes. What is the best response?", options:[
     {t:"Skip the slides she marked in advance as optional and go to her conclusion on time", ok:true, why:"Planned cuts protect the main message and the question time."},
     {t:"Speak much faster to fit everything in", why:"Rushing loses the audience, especially people using captions, interpreters or a second language."},
     {t:"Carry on and ignore the chair’s signals", why:"Overrunning takes time from others and from her own questions."},
     {t:"Stop immediately without a conclusion", why:"The audience leaves without her main message."}]},
   {id:"t4u10-q27", lesson:"t4u10-l3", level:2, q:"Which practice helps people who can’t see the slides follow a talk?", options:[
     {t:"Describing the key point of each chart or image aloud", ok:true, why:"The evidence then reaches people listening, using screen readers on shared slides, or watching later."},
     {t:"Saying “as you can see here” and pointing", why:"That assumes everyone can see the screen."},
     {t:"Adding more animation", why:"Animation doesn’t help people who can’t see it and can distract others."},
     {t:"Turning off the microphone in a small room", why:"That excludes people who rely on hearing systems or recordings."}]},
   /* ---- Lesson 4 ---- */
   {id:"t4u10-q28", lesson:"t4u10-l4", level:1, q:"What is a desk rejection?", options:[
     {t:"A rejection by the editor before the manuscript is sent to peer reviewers", ok:true, why:"Editors screen for scope, completeness and basic quality first."},
     {t:"A rejection after three rounds of peer review", why:"That’s a rejection after review, not at the desk-screening stage."},
     {t:"A rejection because the paper was submitted from a desk computer", why:"The name refers to the editor’s desk, not the device."},
     {t:"A request for minor revisions", why:"That’s a revise-and-resubmit decision."}]},
   {id:"t4u10-q29", lesson:"t4u10-l4", level:1, q:"In double-anonymous peer review, who knows whose identity?", options:[
     {t:"Neither the authors nor the reviewers know each other’s identity", ok:true, why:"Both sides are anonymised."},
     {t:"Reviewers know the authors, but not the reverse", why:"That’s single-anonymous review."},
     {t:"Everyone’s names are published with the article", why:"That describes some forms of open review."},
     {t:"Only the reader knows", why:"Not a peer review model."}]},
   {id:"t4u10-q30", lesson:"t4u10-l4", level:3, q:"Oluwaseun gets an email: “Dear Esteemed Scholar, publish in our journal with acceptance guaranteed in 5 days. Fee details on acceptance.” What should he do?", options:[
     {t:"Treat it as a likely predatory journal and check it independently with the Think. Check. Submit. checklist", ok:true, why:"Guaranteed acceptance, very fast review and hidden fees are warning signs listed by the checklist."},
     {t:"Submit quickly, since fast publication helps his career", why:"Publishing in a predatory outlet can harm his work’s credibility and may cost money."},
     {t:"Reply asking for the fee first, then decide", why:"The other warning signs already show it doesn’t provide real peer review."},
     {t:"Forward it to colleagues as a good opportunity", why:"That spreads a likely predatory invitation."}]},
   {id:"t4u10-q31", lesson:"t4u10-l4", level:2, q:"Which belongs in a journal cover letter?", options:[
     {t:"A statement that the paper isn’t published or under consideration elsewhere", ok:true, why:"Taylor & Francis’s guidance lists this; journals require exclusive submission."},
     {t:"The full abstract pasted in", why:"The guidance says not to copy the abstract; explain significance and fit in your own words."},
     {t:"Three pages of methods detail", why:"Cover letters should be one page at most."},
     {t:"A request for guaranteed acceptance", why:"No genuine journal can guarantee acceptance."}]},
   {id:"t4u10-q32", lesson:"t4u10-l4", level:2, q:"A reviewer asks Ana to add a control variable she didn’t collect. What should her response letter say?", options:[
     {t:"That the variable wasn’t collected, so the analysis isn’t possible, and where she now discusses this as a limitation", ok:true, why:"Honest, specific and points to the change made."},
     {t:"Nothing: skip that comment", why:"Every comment should be answered."},
     {t:"That the reviewer clearly doesn’t understand the field", why:"Defensive and personal; it won’t persuade the editor."},
     {t:"Invented values estimated from memory", why:"That would be fabrication."}]},
   {id:"t4u10-q33", lesson:"t4u10-l4", level:3, q:"Hana wants to post her paper on a preprint server and also submit it to a journal. What should she check first?", options:[
     {t:"The journal’s preprint policy, because most journals in many fields allow preprints but policies vary", ok:true, why:"ASAPbio advises checking each journal’s current policy before posting."},
     {t:"Nothing: no journal ever accepts preprinted work", why:"In many fields most journals do accept preprinted work."},
     {t:"Whether she can delete the preprint later if she changes her mind", why:"Most servers keep all versions; that isn’t the deciding check."},
     {t:"Whether the preprint will count as peer reviewed", why:"Preprints aren’t peer reviewed, whatever the server."}]},
   {id:"t4u10-q34", lesson:"t4u10-l4", level:1, q:"Which open access route usually charges no fee to authors or readers?", options:[
     {t:"Diamond open access", ok:true, why:"Diamond journals charge no fees to readers or authors; institutions, societies or communities fund them."},
     {t:"Hybrid open access", why:"Hybrid involves paying an APC in a subscription journal."},
     {t:"Gold open access with an APC", why:"Many gold journals fund publication through APCs."},
     {t:"Subscription-only publishing", why:"Readers or libraries pay; it isn’t open access."}]},
   {id:"t4u10-q35", lesson:"t4u10-l4", level:2, q:"What is the green route to open access?", options:[
     {t:"Depositing a version of the article, often the accepted manuscript, in an open repository, sometimes after an embargo", ok:true, why:"That’s self-archiving; publishers’ policies say which version and when."},
     {t:"Paying an APC to a fully open journal", why:"That’s typically gold."},
     {t:"Publishing only on environmental topics", why:"“Green” here has nothing to do with the topic."},
     {t:"Posting the publisher’s PDF on any website you like", why:"Many publishers restrict which version can be shared and where; check the policy."}]},
   {id:"t4u10-q36", lesson:"t4u10-l4", level:2, q:"Which statement about an ORCID iD is true?", options:[
     {t:"It identifies a person and stays the same through changes of name or institution", ok:true, why:"That’s its purpose: a persistent identifier for researchers."},
     {t:"It identifies a single article", why:"Articles have DOIs; people have ORCID iDs."},
     {t:"It is only available to professors", why:"Anyone can register free, with no affiliation needed."},
     {t:"It guarantees the quality of your research", why:"It identifies who you are, not how good your work is."}]},
   /* ---- Lesson 5 ---- */
   {id:"t4u10-q37", lesson:"t4u10-l5", level:1, q:"Which is an example of a research master’s degree, according to the UK’s QAA?", options:[
     {t:"MPhil", ok:true, why:"QAA lists the MPhil, MLitt and MRes as examples of research master’s degrees."},
     {t:"A bachelor’s degree with honours", why:"That’s an undergraduate degree."},
     {t:"A professional doctorate", why:"That is a doctoral-level degree, not a master’s."},
     {t:"A secondary-school diploma", why:"That’s pre-university."}]},
   {id:"t4u10-q38", lesson:"t4u10-l5", level:2, q:"Tomás starts a coursework-first doctorate in North America. What usually comes before admission to candidacy?", options:[
     {t:"Coursework and a qualifying (comprehensive) exam, plus approval of a proposal", ok:true, why:"The Council of Graduate Schools and UBC both describe these steps before candidacy."},
     {t:"The final dissertation defence", why:"The defence comes at the end, after candidacy and research."},
     {t:"Publication of three journal articles", why:"Not a general requirement for candidacy."},
     {t:"A UK-style viva", why:"That’s the usual final exam in the UK system, not a North American candidacy step."}]},
   {id:"t4u10-q39", lesson:"t4u10-l5", level:1, q:"How do the UK and the US typically use “thesis” and “dissertation”?", options:[
     {t:"The other way round: UK thesis = doctorate, US dissertation = doctorate (with exceptions)", ok:true, why:"Oxford guidance notes the usage is inverted between the two countries; individual universities vary."},
     {t:"Exactly the same way in both", why:"The usage is typically inverted."},
     {t:"Neither country uses the word “thesis”", why:"Both use both words, for different levels."},
     {t:"“Dissertation” always means an undergraduate essay everywhere", why:"Usage varies by country and university."}]},
   {id:"t4u10-q40", lesson:"t4u10-l5", level:2, q:"In a UK viva, who is usually present, according to QAA?", options:[
     {t:"At least two examiners, typically one internal and one external, plus the candidate", ok:true, why:"That’s QAA’s description; an independent chair, or the supervisor as observer, may also attend."},
     {t:"A public audience of family and friends", why:"That describes public defences in some other European systems; UK vivas are normally closed."},
     {t:"Only the supervisor", why:"Supervisors don’t examine their own students."},
     {t:"A committee of ten professors", why:"Not the usual UK format."}]},
   {id:"t4u10-q41", lesson:"t4u10-l5", level:1, q:"Which outcome does QAA describe as happening for only a minority of UK doctoral candidates?", options:[
     {t:"Failing the doctoral assessment outright", ok:true, why:"Most candidates pass, often with amendments."},
     {t:"Passing with minor amendments", why:"A common outcome."},
     {t:"Passing with major amendments", why:"Also a recognised and fairly common outcome."},
     {t:"Having examiners read the thesis", why:"Examiners always read the thesis."}]},
   {id:"t4u10-q42", lesson:"t4u10-l5", level:3, q:"Fatima is comparing two offers: a three-year research-first PhD and a coursework-first PhD that typically takes five to six years after a bachelor’s. What is the fairest conclusion?", options:[
     {t:"The lengths aren’t directly comparable, because the longer programme includes coursework that elsewhere might be a separate master’s; she should compare structure, funding and fit", ok:true, why:"Headline durations hide different structures; neither model is better in itself."},
     {t:"The shorter one is obviously a lower-quality degree", why:"Length reflects structure, not quality."},
     {t:"The longer one is obviously better because it takes longer", why:"More time doesn’t mean higher quality; it reflects a different design."},
     {t:"All doctorates are identical, so length doesn’t matter", why:"Structure, funding and examination differ a lot."}]},
   {id:"t4u10-q43", lesson:"t4u10-l5", level:2, q:"Which of these is a sensible thing to agree with a new supervisor?", options:[
     {t:"How often you’ll meet and how quickly drafts will be read", ok:true, why:"Clear expectations prevent many common problems."},
     {t:"That the supervisor will write the thesis", why:"The thesis must be the candidate’s own work."},
     {t:"That you will never ask questions", why:"Asking questions is part of good supervision."},
     {t:"That milestones don’t apply to you", why:"Milestones are set by regulations, not private agreement."}]},
   {id:"t4u10-q44", lesson:"t4u10-l5", level:3, q:"Sione is offered a funded place by a university. What should he check about the funding?", options:[
     {t:"What it covers (fees, living costs, insurance, research costs), for how long, and what happens if he needs more time", ok:true, why:"Funding packages vary widely; these details decide whether the offer works."},
     {t:"Only the headline amount", why:"The amount means little without knowing what it covers and for how long."},
     {t:"Nothing: all funding is the same", why:"Funding differs a lot between countries and universities."},
     {t:"Whether he can pay an agent to increase it", why:"Genuine funding isn’t increased through paid agents; this is a scam pattern."}]},
   {id:"t4u10-q45", lesson:"t4u10-l5", level:2, q:"Which is a good first source of support for a graduate student who is struggling with wellbeing?", options:[
     {t:"The university’s counselling or wellbeing service, or their doctor or local health service", ok:true, why:"These services exist for exactly this; talking early helps."},
     {t:"Nobody: struggling means they don’t belong in graduate study", why:"Struggling at times is common, not a sign of not belonging."},
     {t:"Working longer hours until it passes", why:"Overwork usually makes things worse."},
     {t:"Only an anonymous online forum", why:"Peers online can help, but they can’t replace professional support."}]}
  ]
});
