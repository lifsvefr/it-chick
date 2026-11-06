/* Academic Language · Academic English Unit 1 (e1u1) · Reading academic English */
ICA.addUnit({
  id:"e1u1", track:"e1", n:1, title:"Reading academic English", icon:"📖",
  blurb:"What English for Academic Purposes is and how this elective works; the kinds of academic text you will meet; skimming, scanning and close reading; academic vocabulary and how to make it stick; long noun phrases and the writer’s stance; and making notes in your own words with the help of learner dictionaries and corpora.",
  goals:[
    "Explain what English for Academic Purposes is, how this elective is organised, and what the BALEAP Can Do Framework and the CEFR levels describe",
    "Recognise the main academic genres (research article, textbook, report, essay, abstract) and what each is for",
    "Choose between skimming, scanning and intensive reading for a task, and use an article’s structure and signposts to find what you need",
    "Learn academic words as families and collocations, use the Academic Word List and the Academic Vocabulary List sensibly, and review words with spaced practice",
    "Unpack nominalisations and long noun phrases, and read a writer’s stance in hedges, boosters and reporting verbs",
    "Make notes in your own words with the Cornell, outline or mind-map method, and check word use in learner dictionaries and corpora"
  ],
  read:[
    {book:"uefap", where:"The site’s introductory pages on EAP, its Reading section (reading strategies and note taking) and its Vocabulary section", note:"Andy Gillett’s free site for EAP students. Use it for extra explanations and practice exercises after each lesson."},
    {book:"phrasebank", where:"“Referring to sources” and “Being cautious” (in “General Functions”)", note:"Written mainly for writers, but excellent for readers too: it collects the phrases academic texts use to report other work and to hedge claims."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u1-l1", title:"What academic English is, and the texts you will meet", minutes:50,
   hook:{q:"Who grows up speaking academic English as their first language?", options:["Children of university teachers","Everyone raised in an English-speaking country","Nobody: everyone has to learn it","Only people who went to private schools"], answer:2, reveal:"**Nobody.** Academic English is a style of English (a register) used for study and research: long noun phrases, careful claims, special kinds of text such as the research article. People who grew up with English have a head start with everyday words and grammar, but everyone learns the academic style through reading and practice. That is why university writing courses are taken by students with many different first languages, English included. This lesson explains what academic English is, how this elective works and which kinds of text you will read."},
   goals:[
     "Explain what English for Academic Purposes (EAP) is and how academic English differs from everyday English",
     "Describe English’s role as a lingua franca of research, and treat different varieties and spellings of English with respect",
     "Explain how this elective is organised and what the CEFR levels and the BALEAP Can Do Framework describe",
     "Recognise the main academic genres and say what each one is for"
   ],
   learn:[
    {h:"A kind of English for study", body:[
      {lead:"You already use different kinds of English for different situations. A text message to a friend and a letter to a bank do not sound the same. Academic English is one more of these kinds."},
      "[[english-for-academic-purposes|English for Academic Purposes]] (EAP) means teaching and learning the English that people need for study and research: reading articles and textbooks, writing essays and reports, following lectures and taking part in seminars. Many universities run EAP courses, before a degree starts or alongside it.",
      "Academic English is not a separate language. It uses the same grammar as everyday English. What changes is the **register**: the level of formality and the kind of words and sentences that suit the situation. The research skills track calls this [[academic-register]].",
      "Compare two sentences about the same idea:",
      {table:[["Everyday English","Academic English"],["Lots of people are moving to cities these days, and it’s causing big problems with housing.","Rapid urbanisation has placed considerable pressure on housing supply in many low- and middle-income countries."]]},
      "The academic version is not just “longer words”. It is **more precise** (which countries? what kind of problem?), **more compact** (“rapid urbanisation” packs a whole clause, “people are moving to cities quickly”, into two words) and **more careful** (“in many low- and middle-income countries”, not everywhere). You will learn to read each of these features in this unit.",
      {table:[["Feature","What it looks like"],["Vocabulary","Words such as *analyse*, *significant*, *indicate*; fixed pairs such as *conduct research*"],["Noun phrases","Long, packed phrases: *the rapid growth of informal settlements*"],["Claims","Careful: *may*, *suggests*, *in most cases*"],["Sources","Other writers are named and cited: *Okafor (2021) argues that…*"],["Structure","Predictable shapes: an abstract, an introduction, headings, a conclusion"]]},
      {key:"Academic English is a register: everyday grammar used in a more precise, compact and careful way, inside predictable kinds of text."}
    ]},
    {h:"Whose English? A language shared by many", body:[
      "A [[lingua-franca]] is a language that people use to communicate when they don’t share a first language. In much of today’s research, English plays that role: many international journals publish in English, and many international conferences use it. Most people who read and write academic English learned it as an additional language.",
      "That does not make research in other languages less valuable. Scholars publish important work in Spanish, Chinese, Arabic, French, Portuguese, Japanese and many other languages. Learning academic English adds a language to your toolkit; it doesn’t replace the ones you have.",
      "There is also no single “correct” English. Academic English is written well in Nigeria, India, Singapore, Australia, the United States, the United Kingdom and many other places. Unit 4 of this elective looks at {{englishes|World Englishes}} and [[english-as-a-lingua-franca|English as a lingua franca]] in more depth.",
      {h:"Spelling: pick one and be consistent"},
      "The main written difference you will notice is spelling. American spelling and British spelling (also used, with small differences, in Australia, New Zealand, India, Nigeria, South Africa and elsewhere) differ in some common words:",
      {table:[["American spelling","British spelling"],["color, behavior","colour, behaviour"],["center, theater","centre, theatre"],["analyze, organize","analyse, organise (organize is also used in British English)"],["traveled, modeling","travelled, modelling"]]},
      "Both are correct. What matters is **consistency**: choose one and use it throughout a text, unless your university, journal or style guide tells you which to use. You will see both spellings in your reading, and this elective uses both in its examples.",
      {tip:"Set your word processor’s proofing language to the variety you choose (for example English (United States) or English (United Kingdom)). Its spelling checker will then flag the other variety’s spellings for you."}
    ]},
    {h:"How this elective works", body:[
      "This is the first of four Academic English units. Each one builds a part of the skill set:",
      {table:[["Unit","Focus"],["1 Reading academic English","Kinds of text, reading strategies, vocabulary, dense sentences, stance, notes"],["2 Sentences and paragraphs","Formal choices, grammar trouble spots, paragraphs, cohesion, hedging in your own writing"],["3 Writing academic texts","Essay types, arguments, using sources in your sentences, abstracts, emails, editing"],["4 Listening and speaking for study","Lectures, seminars, presentations, pronunciation for being understood"]]},
      "The lessons are written in plain English with short sentences, so you can follow them at an intermediate level. The *examples* show the academic English you are learning, which is often harder. That gap is deliberate: you read about the language in easy English, then practise on the real thing.",
      "Language teachers often describe levels with the [[cefr|CEFR]], the Common European Framework of Reference for Languages, published by the Council of Europe. It has six levels, from A1 (beginner) to C2. B1 and B2 are “independent user” levels; C1 and C2 are “proficient user” levels. These units are written for people at roughly **B1–B2 who are working towards C1**, but anyone is welcome.",
      {h:"A map of what students need to do"},
      "The **BALEAP Can Do Framework** (2013) is a list of things students need to be able to do in English at postgraduate level in UK universities. BALEAP, an association of EAP teachers, drew partly on interviews: abilities that more than one interviewee called important are marked with a star. It is organised by the four skills (reading, writing, listening and speaking) and groups abilities under headings such as the academic context, academic discourse (the language of academic texts), discipline-related skills and practical skills.",
      "Teachers use it to plan courses. It is not a test and has no scores. This elective uses it as a map: for example, it lists reading abilities such as reading widely across kinds of source and scanning texts to decide what to read, which Lesson 2 teaches.",
      "This elective focuses on **language**. For the research side of academic work, such as how to cite, how to search for sources and how to avoid plagiarism, use the Research Skills track, especially {{quote-paraphrase-summary}} and {{academic-writing}}."
    ]},
    {h:"Genres: the kinds of text you will read", body:[
      "A [[genre-academic|genre]] is a type of text that a group of people uses again and again for a shared purpose, so it develops a typical shape and typical language. A recipe is an everyday genre: you expect a list of ingredients, then numbered steps. Academic communities have their own genres, and knowing what to expect makes reading much faster.",
      {table:[["Genre","What it is for","What to expect"],["Research article","Reports new research to other researchers","Abstract; often Introduction, Methods, Results, Discussion; many citations"],["Review article","Summarises and assesses many earlier studies","Sections by theme; very long reference list"],["Textbook","Teaches a field to students","Definitions, examples, summaries, review questions"],["Report","Informs a decision for an organisation or the public","Executive summary, findings, recommendations"],["Essay","Argues a position (often a student genre)","Thesis statement, paragraphs of argument, conclusion"],["Abstract","Summarises a paper in one paragraph","Purpose, method, main result, meaning"]]},
      "Research articles are a kind of [[journal-article]], and many follow the [[imrad|IMRaD]] shape. An [[abstract-paper|abstract]] is both a genre of its own and part of an article. Other genres you may meet include books by one author on one subject ([[monograph|monographs]]), book chapters, theses and conference papers.",
      {fig:'<svg viewBox="0 0 340 404"><text x="170" y="18" text-anchor="middle">Who writes it, for whom, and why</text><rect class="d-lup" x="8" y="30" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="53">Research article</text><text class="s" x="20" y="73">researchers → researchers: here is new evidence</text><rect class="d-sage" x="8" y="96" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="119">Review article</text><text class="s" x="20" y="139">researchers → researchers: here is what we know</text><rect class="d-gold" x="8" y="162" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="185">Textbook</text><text class="s" x="20" y="205">experts → students: here is the field, step by step</text><rect class="d-rose" x="8" y="228" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="251">Report</text><text class="s" x="20" y="271">organisation → decision-makers: here is what to do</text><rect class="d-panel" x="8" y="294" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="317">Essay</text><text class="s" x="20" y="337">student → lecturer: here is my argument</text><rect class="d-lup" x="8" y="360" width="324" height="40" rx="8" stroke-width="2"/><text x="20" y="385">Abstract: the whole paper in one paragraph</text></svg>', alt:"Six stacked boxes. Research article: researchers write to researchers to present new evidence. Review article: researchers write to researchers to say what is known. Textbook: experts write to students to teach a field step by step. Report: an organisation writes to decision-makers to say what to do. Essay: a student writes to a lecturer to make an argument. Abstract: the whole paper in one paragraph.", cap:"Each genre has a writer, a reader and a purpose. Ask “who wrote this, for whom, and why?” before you start reading."}
    ]},
    {h:"One topic, five genres", body:[
      "Here is one topic, the extra heat in cities, as it might appear in five genres. All five extracts are invented for this lesson.",
      {ex:"**Textbook:** Cities are often warmer than the countryside around them. This is called the *urban heat island effect*. It happens mainly because roads and buildings absorb heat during the day and release it at night.\n\n**Research article (results):** Mean night-time temperatures at the six city-centre stations were 2.1 °C higher than at the rural stations (Table 2).\n\n**Report:** Recommendation 3: The city should plant shade trees along its twelve busiest bus routes by 2030.\n\n**Student essay:** This essay argues that tree planting is a more cost-effective response to urban heat than air conditioning.\n\n**Abstract:** This study examines night-time temperatures in one coastal city. Data from twelve weather stations were analysed. City-centre stations were consistently warmer than rural stations. These findings suggest that building materials may play a key role.", label:"Worked example: the same topic in five genres"},
      "Notice what changes. The textbook **defines** a term and explains it simply. The article **reports** a precise number and points to a table. The report **recommends** an action. The essay **argues** a position. The abstract **summarises** a whole study in a few sentences, moving from purpose to method to result to meaning.",
      "Each genre also uses different verbs and different levels of caution. The textbook states things confidently because they are well established. The abstract says “suggest” and “may” because one study is limited. Lesson 4 shows you how to read this caution."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Academic English means using long, rare words.","It means precise, compact and careful language. Clear, common words are often best when they are precise."],["I must sound like a native speaker.","The goal is to be clear and accurate. Accents and varieties of English are all fine; academic readers expect writers from everywhere."],["I need perfect grammar before I can read academic texts.","Reading is how you learn the patterns. Start now, with texts slightly above your level."],["Every academic text should be read from start to finish.","Experienced readers read selectively. Lesson 2 shows how."],["American spelling (or British spelling) is the correct one.","Both are correct. Be consistent and follow your institution’s or journal’s style."]]}
    ]},
    {h:"Why this matters", body:[
      "Knowing the register and the genre tells you what to expect before you read a word. That saves time, helps you guess meaning, and helps you notice when a text does something unusual, such as a report that never gives its evidence or an essay with no clear position.",
      "The rest of this unit builds the reading toolkit: strategies for reading ({{reading-strategies-eap}}) and for finding your way around an article ({{reading-an-article}}), academic vocabulary ({{academic-vocabulary}}), dense noun phrases ({{noun-phrases-nominalisation}}), the writer’s stance ({{reading-critically-language}}), and making notes with dictionaries and corpora to help ({{note-making}}, {{dictionaries-corpora}}). The big picture is in {{academic-english}}.",
      {terms:["english-for-academic-purposes","lingua-franca","cefr","genre-academic"]}
    ]}
   ],
   try:[
    {id:"e1u1-l1-x1", type:"mcq", q:"Which sentence is the most suitable for a formal academic essay?", options:[
      {t:"Recent studies suggest that regular exercise may reduce symptoms of anxiety in adults.", ok:true, why:"Right. It is precise (“adults”, “symptoms of anxiety”), careful (“suggest”, “may”) and mentions its evidence (“recent studies”)."},
      {t:"Exercise is really great for getting rid of anxiety, everyone knows that.", why:"“Really great”, “getting rid of” and “everyone knows” are informal and vague, and the claim is far stronger than any evidence allows."},
      {t:"It is an indisputable and universally acknowledged fact that physical exertion eradicates anxiety.", why:"Long words don’t make a sentence academic. This claim is overstated (“indisputable”, “eradicates”), and academic writing is careful about how sure it is."},
      {t:"I reckon working out probably helps with feeling anxious and stuff.", why:"“Reckon”, “working out” and “and stuff” are casual. The sentence is also vague about who is helped and how."}
    ]},
    {id:"e1u1-l1-x2", type:"match", q:"Match each invented extract to the genre it most likely comes from.", pairs:[
      ["“A *market* is any place or system where buyers and sellers meet. For example, a weekly vegetable market…”","Textbook","It defines a term simply and gives an everyday example: teaching students a field."],
      ["“Table 3 shows the mean scores for each group. As the second column indicates, scores rose in all four schools.”","Research article (Results section)","It reports detailed numbers and refers to a table: typical of the Results section of an article."],
      ["“We recommend that the ministry extend the school meals programme to all rural districts by 2028.”","Report","It recommends an action to decision-makers, which is what reports are for."],
      ["“This essay argues that remote learning widened, rather than narrowed, the gap between students.”","Student essay","It states the writer’s position at the start: the thesis statement of an essay."],
      ["“This study examines… Data from 1,200 households were analysed… Results show… These findings suggest…”","Abstract","It moves through purpose, method, results and meaning in a few sentences: the shape of an abstract."]
    ]},
    {id:"e1u1-l1-x3", type:"mcq", q:"Which statement about the BALEAP Can Do Framework is accurate?", options:[
      {t:"It lists what students need to be able to do in English at postgraduate level in UK universities, and teachers use it to plan EAP courses.", ok:true, why:"Right. It describes abilities for postgraduate study, organised by reading, writing, listening and speaking."},
      {t:"It is an English test that gives you a score for university entry.", why:"It has no scores and is not a test. It is a framework for planning teaching and assessment."},
      {t:"It is a list of the 570 most important academic words.", why:"That describes the Academic Word List (Lesson 3), a different thing. The Can Do Framework lists abilities, not words."},
      {t:"It replaces the six CEFR levels from A1 to C2.", why:"It doesn’t replace the CEFR. It describes academic abilities at one level of study; the CEFR describes general language levels."}
    ]},
    {id:"e1u1-l1-x4", type:"sort", q:"Sort these spellings: which is the usual American spelling and which the usual British spelling?", buckets:["Usual American spelling","Usual British spelling"], items:[
      {t:"color", b:0, why:"American English drops the u in words like color and behavior."},
      {t:"colour", b:1, why:"British English keeps the u: colour, behaviour, labour."},
      {t:"center", b:0, why:"American English usually writes -er: center, theater."},
      {t:"centre", b:1, why:"British English usually writes -re: centre, theatre."},
      {t:"behavior", b:0, why:"The American spelling, without the u."},
      {t:"behaviour", b:1, why:"The British spelling, with the u."},
      {t:"traveled", b:0, why:"American English usually doesn’t double the l before -ed when the stress is not on the last syllable."},
      {t:"travelled", b:1, why:"British English doubles the l: travelled, modelling."}
    ]},
    {id:"e1u1-l1-x5", type:"mcq", q:"Priya learned British spelling at school, but most articles she reads use American spelling. She is writing an essay for a university that has no spelling rule. What is the best advice?", options:[
      {t:"Choose one spelling system and use it consistently throughout the essay.", ok:true, why:"Right. Both systems are correct; mixing them (colour on one page, color on the next) looks careless."},
      {t:"Switch to American spelling, because it is the correct one for research.", why:"Neither system is “the correct one”. Many journals and universities accept either if it is consistent."},
      {t:"Use whichever spelling the article she is reading at the moment uses.", why:"That would mix systems across the essay. Quotations keep their original spelling, but her own text should be consistent."},
      {t:"Avoid all words that are spelled differently.", why:"That is impossible in practice and unnecessary. Just pick one system."}
    ]},
    {id:"e1u1-l1-x6", type:"spot", q:"Kenji wrote down his beliefs about academic English before starting this unit. Tap each belief that is **a misconception**.", ask:"a misconception", parts:[
      {t:"Academic English uses the same grammar as everyday English.", flag:false, why:"True. The grammar is the same; the register (word choice, compactness, caution) changes."},
      " ",
      {t:"To sound academic, I should use the longest words I can find.", flag:true, why:"A misconception. Precision matters more than length; a short, exact word is often better than a long, vague one."},
      " ",
      {t:"Knowing the genre helps me predict what a text will contain.", flag:false, why:"True. A report will have recommendations; an abstract will summarise purpose, method and results."},
      " ",
      {t:"My goal should be to write exactly like a native speaker from one particular country.", flag:true, why:"A misconception. The goal is clear, accurate academic English. Many varieties are correct, and most academic English users learned it as an additional language."},
      " ",
      {t:"Research published in languages other than English can be valuable scholarship.", flag:false, why:"True. Important research is published in many languages."},
      " ",
      {t:"I can’t start reading research until my grammar is perfect.", flag:true, why:"A misconception. Reading is one of the main ways you learn the grammar and vocabulary of academic texts."}
    ]}
   ],
   apply:{
    intro:"Start with the texts and goals in your own field or interest. Everything here is free; keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Find three genres on one topic", how:[
       "Choose a topic you care about (for example clean water, music education, small businesses, diabetes, migration, artificial intelligence).",
       "Find three free texts about it in different genres: for example a textbook section (OpenStax and other open textbooks are free), a report from a government, a UN agency or a non-profit organisation, and an open-access research article or its abstract.",
       "For each one, write who wrote it, who it is for, what it is trying to do, and two features of its shape (headings, tables, a summary, recommendations…)."
     ], write:"Text 1: genre… writer… reader… purpose… shape… Text 2… Text 3… The biggest difference I noticed…"},
     {t:"Check yourself against a few “can do” statements", how:[
       "Read each statement and mark it ✔ (I can already), ~ (sometimes) or ✘ (not yet): I can decide quickly whether an article is relevant. I can find a specific fact in a long text. I can follow the main argument of a journal article. I can work out the meaning of unknown words from context. I can tell how certain a writer is about a claim. I can make notes in my own words.",
       "Choose the two statements you most want to improve. Lessons 2–5 of this unit teach all six.",
       "Come back at the end of the unit and mark them again."
     ], write:"✔ / ~ / ✘ for each statement… The two I most want to improve… After the unit…"},
     {t:"Choose your spelling and set it up", how:[
       "Decide whether you will write in American or British spelling (or check whether your university or journal says which to use).",
       "In your word processor, find the proofing or document language setting (in many programs it is under **Review** or **File → Language**) and choose the matching variety of English.",
       "Type “colour” and “color” to check that the spelling checker now flags the other variety."
     ], write:"I chose… because… The setting was under…"}
    ],
    proof:"Notes on three texts in different genres, your self-check against six reading abilities with two to improve, and your chosen spelling system set up in your word processor."
   },
   read:[
    {book:"uefap", where:"The site’s introductory pages on what EAP is", note:"A short introduction to the field from a long-running free EAP site."},
    {book:"owg", where:"Section 4.8 “Spotlight on … Multilingual Writers”", note:"Background reading: OpenStax’s short section for writers who use more than one language."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u1-l2", title:"Skim, scan or read closely: reading with a purpose", minutes:55,
   hook:{q:"You have 20 minutes and a list of 12 articles from a library search. What should you do first?", options:["Read the first article carefully from start to finish","Skim the titles and abstracts of all twelve to decide which matter","Translate the first article into your first language","Read the reference lists to see who is cited most"], answer:1, reveal:"**Skim all twelve first.** In 20 minutes you can’t read twelve articles, and careful reading of the first one may waste your time on something you don’t need. Skimming the titles and abstracts lets you choose the two or three that matter, then read those properly. Experienced readers match **how** they read to **why** they are reading. This lesson teaches three ways of reading and how to find your way around an article."},
   goals:[
     "Choose a reading strategy (skimming, scanning or intensive reading) to match your purpose",
     "Skim a text for its main idea and scan it for specific information, including different wordings of the same idea",
     "Read a difficult passage closely, guessing unknown words from context before reaching for a dictionary",
     "Use an article’s structure and its signpost phrases to find purpose, methods, findings and limitations"
   ],
   learn:[
    {h:"Start with a purpose", body:[
      {lead:"Before you read, ask yourself one question: what do I need from this text?"},
      "Think about how you read a train timetable. You don’t read every line; you look for your station and your time. You read a letter from a doctor differently: slowly, every word. Academic reading works the same way. Your purpose decides how you read.",
      {table:[["Your purpose","How to read"],["Decide whether a text is relevant","Skim: read only the parts that show the main idea"],["Find one fact, number or name","Scan: search for the target and ignore the rest"],["Understand an argument or method in detail","Read intensively: every sentence, sometimes twice"],["Get the general picture before a lecture","Skim first, then read the key sections closely"]]},
      "Most real reading mixes these. You might skim a chapter to see its shape, scan it for a definition you need, and then read two pages intensively. Lessons on reading sometimes make it sound as if you must read everything closely. You don’t, and good readers don’t.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Three ways to read the same page</text><rect class="d-panel" x="8" y="32" width="100" height="196" rx="6" stroke-width="2"/><rect class="d-panel" x="120" y="32" width="100" height="196" rx="6" stroke-width="2"/><rect class="d-panel" x="232" y="32" width="100" height="196" rx="6" stroke-width="2"/><rect class="d-lup" x="16" y="42" width="84" height="12" rx="2"/><path class="d-soft" d="M16 66 H100 M16 78 H92 M16 90 H96 M16 102 H88" stroke-width="2"/><rect class="d-lup" x="16" y="116" width="84" height="10" rx="2"/><path class="d-soft" d="M16 138 H96 M16 150 H90 M16 162 H98 M16 174 H84" stroke-width="2"/><rect class="d-lup" x="16" y="186" width="84" height="10" rx="2"/><path class="d-soft" d="M16 208 H94" stroke-width="2"/><path class="d-soft" d="M128 46 H212 M128 58 H204 M128 70 H208 M128 82 H200 M128 94 H210 M128 106 H202 M128 118 H206 M128 130 H198 M128 154 H206 M128 166 H200 M128 178 H210 M128 190 H202 M128 202 H208 M128 214 H196" stroke-width="2"/><rect class="d-gold" x="150" y="136" width="44" height="12" rx="2" stroke-width="2"/><rect class="d-sage" x="240" y="40" width="84" height="180" rx="2" stroke-width="1"/><path class="d-ink" d="M246 50 H318 M246 64 H312 M246 78 H316 M246 92 H308 M246 106 H318 M246 120 H310 M246 134 H316 M246 148 H306 M246 162 H318 M246 176 H312 M246 190 H314 M246 204 H300" stroke-width="2"/><text x="58" y="250" text-anchor="middle">Skim</text><text x="170" y="250" text-anchor="middle">Scan</text><text x="282" y="250" text-anchor="middle">Intensive</text><text class="s" x="58" y="268" text-anchor="middle">headings and</text><text class="s" x="58" y="284" text-anchor="middle">first lines</text><text class="s" x="170" y="268" text-anchor="middle">one target,</text><text class="s" x="170" y="284" text-anchor="middle">ignore the rest</text><text class="s" x="282" y="268" text-anchor="middle">every line,</text><text class="s" x="282" y="284" text-anchor="middle">slowly</text></svg>', alt:"Three identical pages side by side. On the first, only the heading and the first line of each section are highlighted: skimming. On the second, a single word in the middle is highlighted and the rest is ignored: scanning. On the third, every line is highlighted: intensive reading.", cap:"Skimming reads the parts that carry the main idea; scanning hunts for one target; intensive reading takes in every line."}
    ]},
    {h:"Skimming: the shape and the gist", body:[
      "[[skimming|Skimming]] means reading quickly and selectively to get the main idea (the **gist**) and the overall shape of a text. You read the parts where writers put their main points and let your eyes pass over the rest.",
      "For an academic text, read these parts:",
      {ol:["The **title** and any subtitle.","The **abstract** or summary, if there is one.","The **headings** and subheadings, to see the structure.","The **first paragraph** (or the end of the introduction, where many writers state their aim).","The **first sentence of each paragraph**: in much academic writing this is the [[topic-sentence]], which states the paragraph’s main point.","**Figures and tables**, with their captions.","The **last paragraph** or conclusion."]},
      "After skimming, you should be able to say in one or two sentences what the text is about and whether you need it. If you can’t, skim the introduction and conclusion again.",
      {warn:"Skimming tells you what a text *says it does*. It doesn’t tell you whether the evidence is good. For anything you will rely on, follow skimming with closer reading."}
    ]},
    {h:"Scanning: find one thing fast", body:[
      "[[scanning|Scanning]] means searching a text for one specific piece of information, such as a date, a number, a name or a definition, without reading the rest. It is how you use a dictionary or a phone book.",
      "Scanning works best when you know what your target looks like:",
      {list:["**Numbers** stand out: years, percentages, sample sizes (look for “n =” or “participants”).","**Names** start with capital letters.","**Definitions** often follow words such as “is defined as”, “refers to” or “that is”.","**Different wordings**: writers vary their words, so think of synonyms before you start. If you need information about older people, also look for “older adults”, “elderly”, “aged 65 and over” and “later life”."]},
      "On screen, use your device’s search. On a computer, press [[kbd:Ctrl]] + [[kbd:F]] (or [[kbd:Cmd]] + [[kbd:F]] on a Mac). On a phone, look for **Find in page** in the browser’s menu or share menu; PDF readers have a search too. Search for a short part of the word (for example “migra” finds migrant, migrants, migration and migratory).",
      {tip:"When a search finds nothing, don’t assume the information isn’t there. Try a synonym, a shorter word stem, or the word in another form (“analyse”, “analysis”, “analytical”)."}
    ]},
    {h:"Intensive reading: every sentence counts", body:[
      "[[intensive-reading|Intensive reading]] means reading slowly and carefully to understand every point, often more than once. You use it for the key sections of the most important sources: a theory you must explain, a method you might copy, a result you will discuss.",
      "A practical routine for a hard paragraph:",
      {ol:["Read it once, all the way through, without stopping.","Find the **main verb** and its **subject** in each long sentence. Everything else adds detail. (Lesson 4 shows how to unpack long noun phrases.)","Notice the **connectors**: *however* signals a contrast, *therefore* a result, *for example* an illustration.","Guess unknown words from context first (next section), and look up only the words that block the meaning.","Say the main point to yourself in your own words. If you can’t, read it again."]},
      {h:"How many unknown words is too many?"},
      "Researchers have studied how the share of words you know (your **coverage**) affects understanding. A 2011 study by Norbert Schmitt, Xiangying Jiang and William Grabe with 661 learners found that comprehension rose steadily as coverage rose, with no sudden cut-off point. They concluded that knowing about **98%** of the words is a reasonable target for academic texts: about one unknown word in every fifty.",
      "That has two practical lessons. First, a text where you know only 90% of the words (one unknown word in ten) will feel very hard, and that is normal. Second, you don’t need every word: most of the time you can understand a passage while a few words stay fuzzy."
    ]},
    {h:"Guessing meaning from context", body:[
      "Before you reach for a dictionary, look for clues around the word. Academic writers often help readers with new terms.",
      {table:[["Clue","Signal words","Example"],["Definition","is, refers to, that is, i.e., brackets","Many herders practise *transhumance*, that is, moving their animals between summer and winter pastures."],["Example","such as, for example, including","*Pulses*, such as lentils, chickpeas and beans, are rich in protein."],["Contrast","unlike, whereas, but, however","Unlike *perennial* crops, which grow back each year, wheat must be sown again."],["Word parts","un-, re-, -tion, -ity, -ise/-ize","*Re-urbanisation*: re- (again) + urban + -isation (the process of)"]]},
      "After guessing, check your guess against the next sentence. If the meaning still fits, keep reading. If the word appears again and again, or the sentence makes no sense without it, look it up.",
      {ex:"“Many coastal communities depend on *mangroves*, salt-tolerant trees that grow in shallow tidal water, for fish, firewood and protection from storms.”\n\nClue type: definition (the phrase after the comma explains the word).\nGuess: a kind of tree that grows in salty water at the coast.\nCheck: “fish, firewood and protection from storms” fits trees along a coast. No dictionary needed.", label:"Worked example: guessing from context"}
    ]},
    {h:"Reading an article’s structure", body:[
      "Research articles have a predictable structure, so you can go straight to what you need. Many follow [[imrad|IMRaD]]: Introduction, Methods, Results and Discussion. The Research Skills track explains each part in {{paper-structure}} and gives a full reading routine in {{reading-strategies}}. Here the focus is the **language** that tells you where you are.",
      "Writers use signpost phrases (sometimes called [[signposting]]) to announce what each part is doing. Learn to spot them and you can scan for them:",
      {table:[["What you want","Where to look","Phrases that signal it"],["The aim or question","End of the introduction","The aim of this study was to… / This paper examines…"],["The gap the study fills","Introduction","However, little is known about… / Few studies have…"],["What was done","Methods","Participants were recruited… / Data were collected…"],["What was found","Results; abstract","The results show… / There was a significant increase in…"],["What it means","Discussion","These findings suggest… / One explanation is…"],["Weaknesses","Discussion, near the end","One limitation of this study is… / Caution is needed…"]]},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e1u1a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="18" text-anchor="middle">A common first-reading route</text><rect class="d-lup" x="60" y="30" width="220" height="36" rx="6" stroke-width="2"/><text x="170" y="53" text-anchor="middle">1 Title and abstract</text><rect class="d-sage" x="60" y="82" width="220" height="36" rx="6" stroke-width="2"/><text x="170" y="105" text-anchor="middle">2 End of the introduction</text><rect class="d-gold" x="60" y="134" width="220" height="36" rx="6" stroke-width="2"/><text x="170" y="157" text-anchor="middle">3 Headings, figures, tables</text><rect class="d-rose" x="60" y="186" width="220" height="36" rx="6" stroke-width="2"/><text x="170" y="209" text-anchor="middle">4 Discussion and conclusion</text><rect class="d-panel" x="60" y="238" width="220" height="36" rx="6" stroke-width="2"/><text x="170" y="261" text-anchor="middle">5 Methods and results, closely</text><path class="d-ink" d="M170 66 V80" stroke-width="2" marker-end="url(#e1u1a1)"/><path class="d-ink" d="M170 118 V132" stroke-width="2" marker-end="url(#e1u1a1)"/><path class="d-ink" d="M170 170 V184" stroke-width="2" marker-end="url(#e1u1a1)"/><path class="d-ink" d="M170 222 V236" stroke-width="2" marker-end="url(#e1u1a1)"/><text class="s" x="170" y="296" text-anchor="middle">Stop after any step if the article</text><text class="s" x="170" y="314" text-anchor="middle">turns out not to be useful.</text></svg>', alt:"Five boxes in a column joined by arrows: 1 title and abstract; 2 end of the introduction; 3 headings, figures and tables; 4 discussion and conclusion; 5 methods and results, read closely. A note says to stop after any step if the article is not useful.", cap:"You don’t have to read an article in printed order. Many readers skim the frame first and read the methods and results closely only when the article matters."}
    ]},
    {h:"Reading in a second language: be fair to yourself", body:[
      "Reading academic texts in an additional language takes longer, often much longer, than reading in your first language. That is normal, not a sign that you are failing. Speed comes with practice and vocabulary.",
      {list:["**Background knowledge helps.** If a topic is new to you, reading a short, simple introduction first (a textbook section, an encyclopedia entry, even one in your first language) makes the academic text easier.","**Translation tools** can help you check a difficult sentence, but they make mistakes with technical terms and with careful words such as *may* and *suggest*. Use them to check your understanding, not to replace reading.","**Read a little every day.** Regular short sessions build vocabulary and speed better than rare long ones."]},
      {table:[["Misconception","Closer to the truth"],["Good readers read every word.","Good readers choose: they skim, scan and read closely as needed."],["I must look up every unknown word.","Guess from context first; look up the words that block meaning."],["Skimming is lazy.","Skimming is how researchers decide what deserves careful reading."],["If I read slowly, my English is bad.","Reading academic texts slowly is normal for everyone at first, in any language."]]},
      {terms:["skimming","scanning","intensive-reading"]}
    ]}
   ],
   try:[
    {id:"e1u1-l2-x1", type:"sort", q:"Which reading strategy fits each task best?", buckets:["Skim","Scan","Read intensively"], items:[
      {t:"Decide which of fifteen abstracts are relevant to your essay question.", b:0, why:"You need the main idea of each, quickly: skimming."},
      {t:"Find the number of people who took part in a study.", b:1, why:"You need one number: scan the methods for “participants” or “n =”."},
      {t:"Find the year a law was passed in a long textbook chapter.", b:1, why:"One specific fact, and years stand out on the page: scanning."},
      {t:"Work out exactly how a researcher measured stress, so you can use the same method.", b:2, why:"You need every detail of the method: read that section intensively."},
      {t:"Get a general idea of what a 200-page report covers before choosing a chapter.", b:0, why:"Contents, headings and the executive summary give the shape: skimming."},
      {t:"Understand how a theory explains a result you must discuss in your essay.", b:2, why:"You need to understand the argument step by step: intensive reading."}
    ]},
    {id:"e1u1-l2-x2", type:"mcq", q:"Amara is scanning a report for information about **older people**. The search for “older people” finds nothing. What should she do next?", options:[
      {t:"Search for other wordings such as “older adults”, “elderly”, “aged 65” and “later life”.", ok:true, why:"Right. Writers vary their words. Thinking of synonyms and related forms is a key part of scanning."},
      {t:"Conclude that the report says nothing about older people.", why:"Too soon. The report may use different words for the same group."},
      {t:"Read the whole report intensively from the first page.", why:"That would take a long time for one piece of information. Try other search terms first."},
      {t:"Search for “people”, which will find every mention.", why:"“People” is so common that the search will return hundreds of results. Choose specific alternatives."}
    ]},
    {id:"e1u1-l2-x3", type:"number", q:"You are reading a 400-word page and you know 95% of the words. About how many words on the page are unknown to you?", answer:20, tol:0, unit:"words", why:"Unknown words = 100% − 95% = 5% of 400 = 0.05 × 400 = **20 words**. That is one word in twenty, which most readers find hard work. At 98% coverage it would be 8 words, one in fifty.", wrongs:[
      {v:380, tol:0, why:"380 is the number of words you **know** (95% of 400). The question asks for the unknown words."},
      {v:5, tol:0, why:"5 is the percentage of unknown words, not the number. Multiply: 5% of 400 = 20."},
      {v:8, tol:0, why:"8 would be the unknown words at 98% coverage (2% of 400). Here coverage is 95%."},
      {v:40, tol:0, why:"40 would be 10% of 400, which is 90% coverage. At 95% coverage, 5% are unknown: 20 words."}
    ], hint2:"Unknown share = 100% − 95%. Then take that share of 400."},
    {id:"e1u1-l2-x4", type:"mcq", q:"“Many families in the region practise *transhumance*, that is, moving their herds between summer and winter pastures each year.” What does *transhumance* mean here?", options:[
      {t:"Moving livestock between different grazing areas with the seasons", ok:true, why:"Right. The phrase after “that is” defines the word: herds move between summer and winter pastures."},
      {t:"Selling animals at a market", why:"Nothing in the sentence mentions selling. The definition clue is about moving herds."},
      {t:"Building permanent farms in one place", why:"The opposite: the herds move between two places each year."},
      {t:"Moving from the countryside to a city to find work", why:"That would be rural–urban migration. Here the herds and families move between pastures."}
    ]},
    {id:"e1u1-l2-x5", type:"order", q:"Put the parts of a typical IMRaD research article in the order they usually appear, from the top.", items:[
      {t:"Title and author information", why:"The title and authors come first."},
      {t:"Abstract", why:"The abstract follows the title: a one-paragraph summary of the whole study."},
      {t:"Introduction", why:"The introduction sets out the background, the gap and the aim."},
      {t:"Methods", why:"Methods explain how the study was done."},
      {t:"Results", why:"Results report what was found."},
      {t:"Discussion", why:"The discussion explains what the results mean, their limits and their implications."},
      {t:"References", why:"The reference list comes at the end (sometimes followed by appendices)."}
    ]},
    {id:"e1u1-l2-x6", type:"match", q:"Match each signpost phrase to what it tells the reader.", pairs:[
      ["“The aim of this study was to…”","The purpose of the research","Aim statements usually come at the end of the introduction."],
      ["“However, little is known about…”","A gap in what is already known","“However” plus “little is known” signals the gap the study will fill."],
      ["“Participants were recruited from…”","How the study was done","Recruiting participants is part of the method."],
      ["“These findings suggest that…”","What the results might mean","Interpretation belongs in the discussion, often with a hedge such as “suggest”."],
      ["“One limitation of this study is…”","A weakness the authors admit","Limitations usually appear near the end of the discussion."]
    ]},
    {id:"e1u1-l2-x7", type:"mcq", q:"Tomás has skimmed an article and decided it is central to his essay. Which statement about what skimming has told him is accurate?", options:[
      {t:"He knows what the article claims to do and find, but he still needs to read the key sections closely to judge the evidence.", ok:true, why:"Right. Skimming shows the main idea and shape. Judging methods and evidence needs intensive reading."},
      {t:"He now knows the article’s evidence is strong, because the abstract says so.", why:"An abstract is written by the authors and may overstate results. Check the methods and results yourself."},
      {t:"He has read enough to quote its methods in detail.", why:"Skimming rarely covers the methods in detail. Read that section closely before describing it."},
      {t:"Skimming was a waste of time; he should have read it all closely from the start.", why:"Skimming is how he found out the article matters. Now close reading is worth the time."}
    ]}
   ],
   apply:{
    intro:"Practise the three strategies on a real academic text in your field or interest. Any free, open-access article, report or textbook chapter works.",
    tasks:[
     {t:"Skim an article in five minutes", how:[
       "Find a free research article (many are open access; a free textbook chapter also works).",
       "Set a timer for five minutes. Read only the title, abstract, headings, the end of the introduction, the first sentence of each section and the conclusion.",
       "When the timer ends, write two sentences: what the article is about, and whether it would be useful to you and why."
     ], write:"Title… What it is about (one sentence)… Useful or not, and why…"},
     {t:"Scan for three things", how:[
       "In the same article, scan for: (1) one number (a sample size, a percentage or a year), (2) the sentence that states the aim, (3) one limitation.",
       "Use Find in page or Ctrl+F (Cmd+F on a Mac). Try at least two search words for each target, for example “aim”, “purpose”, “this study”; “limitation”, “caution”.",
       "Copy what you found with the page or section, and note which search words worked."
     ], write:"Number… (where) Aim sentence… Limitation… Search words that worked…"},
     {t:"Read one paragraph intensively", how:[
       "Choose the hardest paragraph in the discussion section.",
       "For each long sentence, underline the subject and the main verb. Circle the connectors (however, therefore, in contrast…).",
       "Guess two unknown words from context before checking them. Then write the paragraph’s main point in one sentence of your own."
     ], write:"Unknown word 1: my guess… dictionary meaning… Word 2… The paragraph’s main point in my words…"}
    ],
    proof:"A two-sentence summary from skimming, three items found by scanning with the search words that worked, and one paragraph read intensively with two guessed words checked and its main point in your own words."
   },
   read:[
    {book:"uefap", where:"Reading section: the pages on reading efficiently (including skimming and scanning)", note:"More explanation of reading speed and strategies, with practice exercises."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u1-l3", title:"Academic vocabulary: families, collocations and word lists", minutes:55,
   hook:{q:"The Academic Word List has only 570 word families. In the 3.5-million-word collection of academic texts it was built from, roughly what share of all the words came from those 570 families?", options:["About 1%","About 10%","About 30%","About 60%"], answer:1, reveal:"**About 10%.** Averil Coxhead, who published the list in 2000, found that her 570 families covered 10.0% of the running words in her academic corpus, but only about 1.4% of a collection of fiction. That is roughly one word in ten: a small list with a big effect on academic reading. This lesson explains word families, word lists and collocations, and how to learn words so they stay."},
   goals:[
     "Describe the layers of vocabulary (high-frequency, academic, technical and low-frequency) and why academic vocabulary is worth learning",
     "Use word families, while noticing members that differ in meaning such as economic and economical",
     "Recognise and learn common academic collocations",
     "Describe the Academic Word List (Coxhead 2000) and the Academic Vocabulary List (Gardner & Davies 2014) accurately, and use them sensibly",
     "Review new words with spaced, self-testing practice"
   ],
   learn:[
    {h:"Four layers of words", body:[
      {lead:"Not all words are equally useful. Some appear in almost every text; some only in one field; some hardly ever."},
      "Vocabulary researchers, such as Paul Nation, often divide English words into layers:",
      {table:[["Layer","What it is","Examples"],["High-frequency words","The few thousand most common words, used in all kinds of text","make, people, because, water, important"],["Academic words","Words common across many academic fields but less common elsewhere","analyse, concept, indicate, significant"],["Technical words","Words specific to one field","photosynthesis, tariff, morpheme, litigation"],["Low-frequency words","All the rest: rare words of any kind","ubiquitous, quixotic, lugubrious"]]},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Which words to learn first?</text><rect class="d-sage" x="20" y="32" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="56" text-anchor="middle">High-frequency words</text><text class="s" x="170" y="76" text-anchor="middle">most of any text · learn first</text><rect class="d-lup" x="45" y="98" width="250" height="56" rx="6" stroke-width="2"/><text x="170" y="122" text-anchor="middle">Academic words</text><text class="s" x="170" y="142" text-anchor="middle">across fields · this lesson</text><rect class="d-gold" x="70" y="164" width="200" height="56" rx="6" stroke-width="2"/><text x="170" y="188" text-anchor="middle">Technical words</text><text class="s" x="170" y="208" text-anchor="middle">your field · from your courses</text><rect class="d-panel" x="95" y="230" width="150" height="56" rx="6" stroke-width="2"/><text x="170" y="254" text-anchor="middle">Low-frequency</text><text class="s" x="170" y="274" text-anchor="middle">look up as needed</text></svg>', alt:"Four stacked bars getting narrower from top to bottom: high-frequency words (most of any text, learn first), academic words (across fields, this lesson), technical words (your field, learned from your courses), low-frequency words (look up as needed).", cap:"Not to scale. High-frequency words make up most of any text; the other layers each make up a much smaller share, and the exact shares vary by field. Academic words are a small set that pays off in every field."},
      "Academic words are worth special attention because they appear in textbooks and articles in every subject, yet everyday conversation and fiction rarely teach them. Technical words, by contrast, are usually taught by your subject itself: a biology course explains *photosynthesis*."
    ]},
    {h:"Word families and lemmas", body:[
      "A [[word-family]] is a base word together with the forms made from it: its inflected forms (such as plurals and past tenses) and its derived forms (new words made with prefixes and suffixes). Learning one member gives you a head start on the others.",
      {table:[["Part of speech","Members of the family"],["Verb","analyse (US: analyze), analyses, analysed, analysing"],["Noun","analysis (plural: analyses), analyst"],["Adjective","analytical, analytic"],["Adverb","analytically"]]},
      "A [[lemma]] is a smaller group: a headword and its inflected forms with the same part of speech. *Analyse, analyses, analysed* and *analysing* are one lemma; *analysis* belongs to a different lemma in the same family. Dictionaries are usually organised by lemma.",
      {h:"Family members are not always twins"},
      "Be careful: some members of a family have different meanings, and using the wrong one is a common mistake.",
      {table:[["Word","Meaning","Example"],["economic","relating to the economy","economic growth"],["economical","using little money or fuel; not wasteful","an economical car"],["historic","important in history","a historic agreement"],["historical","relating to history or the past","historical records"]]},
      "Notice also that some words change form across the family in unexpected ways: *able* → *ability*; *decide* → *decision*; *fail* → *failure*; *grow* → *growth*. A learner dictionary (Lesson 5) shows the family members and their meanings."
    ]},
    {h:"Collocations: words that keep company", body:[
      "A [[collocation]] is a combination of words that occur together more often than you would expect by chance, and that sound natural to expert users. In English you *conduct* or *carry out* research, but you don’t *make* research. You *play a role*, *draw a conclusion* and *raise a question*.",
      "Collocations matter because grammar alone can’t tell you which word to choose. *Make research* breaks no grammar rule; it just isn’t what English speakers say. (*Do research* is common and fine, especially in speech.)",
      {table:[["Pattern","Academic examples"],["verb + noun","conduct research, play a key role, draw a conclusion, raise a question, fill a gap, shed light on"],["adjective + noun","a significant difference, a key factor, a wide range, a growing body of evidence"],["adverb + adjective","widely used, closely related, statistically significant, highly unlikely"],["noun + preposition","an increase in, the impact on, a reason for, the effect of X on Y"],["verb + preposition","depend on, consist of, focus on, result in, result from"]]},
      {h:"Small words, big differences"},
      "Prepositions in collocations can change the meaning completely. Compare:",
      {ex:"Poverty can **result in** poor health.  (poverty → poor health)\nPoor health can **result from** poverty.  (same cause, same effect, said the other way round)\n\nThe study found an **increase in** prices.  (prices went up)\nThe study found an **increase of** 5%.  (the size of the rise)", label:"Worked example: prepositions that matter"},
      {tip:"When you meet a useful word in your reading, copy the **whole chunk**, not just the word: not “impact” but “have a significant impact on”. The chunk is what you will need when you write."}
    ]},
    {h:"The Academic Word List", body:[
      "The [[academic-word-list|Academic Word List]] (AWL) was published by Averil Coxhead in 2000, in the journal *TESOL Quarterly*. It is probably the best-known list of academic vocabulary.",
      {list:["**The corpus.** Coxhead collected 414 academic texts, about 3.5 million running words, from 28 subject areas grouped into four broad fields: arts, commerce, law and science.","**What was left out.** She excluded the 2,000 most common general English words, as listed in Michael West’s *General Service List* (1953), so the AWL adds words beyond everyday vocabulary.","**What was kept.** Word families that appeared across many subjects (at least 10 times in each of the four fields, and in at least 15 of the 28 subject areas) and often enough (at least 100 times in the whole corpus).","**The result.** 570 word families, divided into 10 sublists by frequency. Sublists 1–9 have 60 families each and Sublist 10 has 30. Sublist 1 holds the most frequent, such as the family of *analyse*.","**Coverage.** The 570 families made up 10.0% of the running words in the academic corpus, but only about 1.4% of a fiction collection: strong evidence that they are typically academic."]},
      "The AWL is based on word families, so *analyse* stands for *analysis*, *analytical* and the other members too. It is also more than 25 years old, and its texts came from a limited set of sources, so later researchers have built other lists."
    ]},
    {h:"The Academic Vocabulary List and other lists", body:[
      "The [[academic-vocabulary-list|Academic Vocabulary List]] (AVL) was published by Dee Gardner and Mark Davies in *Applied Linguistics* in 2014 (it appeared online in 2013). It was built from a much larger collection: the 120-million-word academic part of the *Corpus of Contemporary American English* (COCA), covering nine broad disciplines.",
      {table:[["","Academic Word List","Academic Vocabulary List"],["Published","Coxhead, 2000","Gardner & Davies, 2014"],["Corpus","About 3.5 million words","About 120 million words (American English)"],["Unit counted","Word families","Lemmas (a word-family version of the top 570 was made to compare with the AWL)"],["Size","570 families","About 3,000 core lemmas"],["Common words","Excluded the General Service List’s first 2,000 words","No exclusion list; some common words are included because they are used often in academic texts (such as rate)"]]},
      "Gardner and Davies argue that lemmas suit learners better than whole families, because family members can differ in meaning and grammar (as *economic* and *economical* do). In their comparison, the top 570 AVL word families covered about 14% of the academic texts in COCA, while the AWL covered about 7% of the same texts. Coverage always depends on which texts you measure, so treat both lists as useful guides rather than rivals.",
      "Another list is **OPAL**, the *Oxford Phrasal Academic Lexicon*, which you can browse on the Oxford Learner’s Dictionaries website. It has four lists: written words, spoken words, written phrases and spoken phrases, built from academic writing and recorded university speech.",
      {h:"Using a word list sensibly"},
      {list:["**Don’t memorise it alphabetically.** Use it to check which useful words you don’t know yet.","**Learn words in context.** Find each new word in your own reading and note its collocations.","**Start with the earlier sublists** (or the top of the AVL): they are the most frequent.","**Add your field’s technical words** from your courses and reading: no general list covers them."]}
    ]},
    {h:"Making words stay: spaced review", body:[
      "Seeing a word once is rarely enough. Psychologists since Hermann Ebbinghaus in 1885 have shown that we forget new material quickly unless we review it. Two findings are especially useful for learning vocabulary.",
      {list:["**Spacing beats cramming.** A large 2006 review by Nicholas Cepeda and colleagues, covering 317 experiments, found that spreading study sessions out improves long-term memory compared with studying all at once. The best gap between reviews grows the longer you need to remember.","**Testing yourself works.** Trying to recall a word’s meaning before you check it strengthens memory more than simply reading the word again."]},
      "[[spaced-review|Spaced review]] puts both ideas together. A simple paper version is the **Leitner box**: a set of boxes for cards. New cards start in box 1, which you review often. When you remember a card, it moves to the next box, which you review less often. When you forget it, it goes back to box 1.",
      {fig:'<svg viewBox="0 0 340 260"><defs><marker id="e1u1a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="18" text-anchor="middle">Leitner boxes</text><rect class="d-rose" x="8" y="60" width="72" height="72" rx="6" stroke-width="2"/><text x="44" y="92" text-anchor="middle">Box 1</text><text class="s" x="44" y="112" text-anchor="middle">every day</text><rect class="d-gold" x="92" y="60" width="72" height="72" rx="6" stroke-width="2"/><text x="128" y="92" text-anchor="middle">Box 2</text><text class="s" x="128" y="112" text-anchor="middle">every 3 days</text><rect class="d-lup" x="176" y="60" width="72" height="72" rx="6" stroke-width="2"/><text x="212" y="92" text-anchor="middle">Box 3</text><text class="s" x="212" y="112" text-anchor="middle">weekly</text><rect class="d-sage" x="260" y="60" width="72" height="72" rx="6" stroke-width="2"/><text x="296" y="92" text-anchor="middle">Box 4</text><text class="s" x="296" y="112" text-anchor="middle">monthly</text><path class="d-ink" d="M82 50 C100 36 116 36 126 54" fill="none" stroke-width="2" marker-end="url(#e1u1a2)"/><path class="d-ink" d="M166 50 C184 36 200 36 210 54" fill="none" stroke-width="2" marker-end="url(#e1u1a2)"/><path class="d-ink" d="M250 50 C268 36 284 36 294 54" fill="none" stroke-width="2" marker-end="url(#e1u1a2)"/><text x="170" y="40" text-anchor="middle" class="s">remembered: move right</text><path class="d-ink" d="M296 134 C296 190 60 190 46 140" fill="none" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#e1u1a2)"/><text x="170" y="206" text-anchor="middle" class="s">forgotten: back to box 1</text><text class="s" x="170" y="240" text-anchor="middle">Example gaps only: any steadily growing gaps work.</text></svg>', alt:"Four boxes in a row: box 1 reviewed every day, box 2 every three days, box 3 weekly, box 4 monthly. Arrows over the top show a remembered card moving one box to the right. A dashed arrow underneath shows a forgotten card going back to box 1.", cap:"A remembered card waits longer before its next review; a forgotten card starts again. Words you know well stop taking up your time."},
      "This app’s **Arcade** has a Flashcards mode that works the same way. After each card you choose **Again** (back to the first box: the card returns tomorrow), **Good** (the next box) or **Easy** (skip a box); the boxes have gaps of one, three, seven, fourteen and thirty days. It uses the units’ Check questions, so you can use it to review this unit. For your own words, use paper cards or any flashcard app that schedules reviews.",
      {ex:"Front: *significant* (adj.)\nBack: important, or large enough to matter. (In statistics it also has a technical meaning: see {{statistical-significance-basics}}.)\nFamily: significance (n.), significantly (adv.), signify (v.)\nCollocations: a significant difference / increase / role; statistically significant\nFrom my reading: “There was a significant difference between the two groups.”", label:"Worked example: a good word card"},
      {table:[["Misconception","Closer to the truth"],["Learning a list by heart means I know the words.","Knowing a word includes its meaning, family, collocations, grammar and pronunciation. Learn words in context."],["The Academic Word List is the official list of academic English.","It is one well-researched list. The AVL, OPAL and field-specific lists are alternatives."],["Reviewing every word every day is best.","Spreading reviews out, with growing gaps, is more efficient."],["If two words are in the same family, I can swap them.","Not always: economic and economical mean different things."]]},
      {terms:["word-family","lemma","collocation","academic-word-list","academic-vocabulary-list","spaced-review"]}
    ]}
   ],
   try:[
    {id:"e1u1-l3-x1", type:"sort", q:"Sort these members of two word families by part of speech.", buckets:["Noun","Verb","Adjective","Adverb"], items:[
      {t:"significance", b:0, why:"The suffix -ance often makes nouns: significance, importance, performance."},
      {t:"signify", b:1, why:"The suffix -ify often makes verbs: signify, clarify, classify."},
      {t:"significant", b:2, why:"An adjective: a significant result."},
      {t:"significantly", b:3, why:"Adding -ly to the adjective makes an adverb: increased significantly."},
      {t:"economy", b:0, why:"A noun: the national economy."},
      {t:"economise (US: economize)", b:1, why:"The suffix -ise/-ize makes verbs: to economise on fuel."},
      {t:"economic", b:2, why:"An adjective: economic growth."},
      {t:"economically", b:3, why:"An adverb: economically important."}
    ]},
    {id:"e1u1-l3-x2", type:"mcq", q:"Choose the correct word: “The report found the new buses more ______: they use 30% less fuel than the old ones.”", options:[
      {t:"economical", ok:true, why:"Right. *Economical* means using little money or fuel, which is exactly the point here."},
      {t:"economic", why:"*Economic* means relating to the economy (economic policy, economic growth). It doesn’t mean “saving fuel”."},
      {t:"economically", why:"*Economically* is an adverb. After “more” describing the buses, the sentence needs an adjective."},
      {t:"economy", why:"*Economy* is a noun. “More economy” doesn’t describe the buses."}
    ]},
    {id:"e1u1-l3-x3", type:"match", q:"Match each verb to the phrase it usually goes with in academic writing.", pairs:[
      ["reach","a conclusion","You reach (or draw) a conclusion after weighing evidence."],
      ["pay","close attention to","Pay attention is a fixed collocation; close is a common addition."],
      ["play","a key role in","Something plays a role in a process or outcome."],
      ["raise","a question about","A finding or argument raises a question. (Note: *rise* has no object, so “rise a question” is wrong.)"],
      ["fill","a gap in the literature","Studies often say they aim to fill a gap: something not yet researched."],
      ["shed","light on","To shed light on something means to help explain it."]
    ]},
    {id:"e1u1-l3-x4", type:"mcq", q:"Which sentence says, correctly, that cutting down forests causes soil erosion?", options:[
      {t:"Deforestation can result in soil erosion.", ok:true, why:"Right. *X results in Y* means X causes Y."},
      {t:"Deforestation can result from soil erosion.", why:"*X results from Y* means Y causes X. This sentence says erosion causes deforestation: the reverse."},
      {t:"Soil erosion can result in deforestation.", why:"This says erosion causes deforestation, which reverses the cause and effect."},
      {t:"Deforestation can result to soil erosion.", why:"“Result to” is not standard English. The verb takes *in* (for the effect) or *from* (for the cause)."}
    ]},
    {id:"e1u1-l3-x5", type:"mcq", q:"Which description of the Academic Word List is accurate?", options:[
      {t:"570 word families that appeared across arts, commerce, law and science texts, excluding the 2,000 most common general words.", ok:true, why:"Right. Coxhead (2000) selected families by range and frequency from a 3.5-million-word corpus, outside West’s General Service List."},
      {t:"The 3,000 most common words in English, published by Oxford.", why:"That mixes up several lists. The AWL has 570 families, excludes the most common words and was published by Coxhead in a journal."},
      {t:"All the technical words a student needs in any one subject.", why:"The AWL deliberately leaves out field-specific technical words: it keeps only words used across many fields."},
      {t:"A list built from the academic part of the Corpus of Contemporary American English.", why:"That describes the Academic Vocabulary List (Gardner & Davies 2014), not the AWL."}
    ]},
    {id:"e1u1-l3-x6", type:"number", q:"Suppose words from the Academic Word List made up 10% of the running words in a 2,000-word article. About how many running words in the article would come from the list?", answer:200, tol:0, unit:"words", why:"10% of 2,000 = 0.10 × 2,000 = **200 running words**. Repeated words count each time they appear, which is what “running words” means.", wrongs:[
      {v:570, tol:0, why:"570 is the number of word families on the list, not how many of an article’s words come from it."},
      {v:20, tol:0, why:"20 would be 1% of 2,000. Check the decimal: 10% is 0.10."},
      {v:1800, tol:0, why:"1,800 is the 90% of words that would **not** come from the list."},
      {v:57, tol:0, why:"57 is 10% of 570. The question asks for 10% of the article’s 2,000 words."}
    ]},
    {id:"e1u1-l3-x7", type:"order", q:"Put the steps of reviewing one card in a Leitner box in order.", items:[
      {t:"Take a card from the box that is due for review today.", why:"Start with the cards whose review day has come."},
      {t:"Look at the front and try to recall the meaning, family and a collocation.", why:"Recall before checking: the effort of remembering strengthens memory."},
      {t:"Turn the card over and check your answer.", why:"Only after trying to recall do you check."},
      {t:"Move the card to the next box if you remembered it, or back to box 1 if you didn’t.", why:"The move sets when you will see the card next: later if known, soon if forgotten."}
    ]}
   ],
   apply:{
    intro:"Build a small, personal vocabulary system from your own reading. A notebook, index cards or a notes app all work.",
    tasks:[
     {t:"Collect ten collocations from an article", how:[
       "Choose an article or textbook section in your field or interest.",
       "Find ten useful word combinations, such as verb + noun (*conduct a survey*), adjective + noun (*a key factor*) or noun + preposition (*an increase in*).",
       "Copy each one with the sentence it came from, so you have the context."
     ], write:"1. collocation… sentence… 2… 3… (up to 10)"},
     {t:"Map one word family", how:[
       "Pick one academic word from your reading (for example *define*, *occur*, *vary*, *assume*).",
       "Look it up in a learner dictionary and list the family members you can find: noun, verb, adjective, adverb.",
       "Write one sentence for two of the members, and note any member whose meaning is different from the others."
     ], write:"Word… Family members… Sentence 1… Sentence 2… Any surprise in meaning…"},
     {t:"Start a spaced review routine", how:[
       "Make cards for five of your collocations, using the worked-example card in this lesson as a model.",
       "Review them tomorrow, then in three days, then in a week. Move each card forward or back as in a Leitner box.",
       "Also try the Arcade’s Flashcards with this unit’s questions once you have finished the lessons."
     ], write:"Cards made… Day 1 result… Day 3… Day 7… Which words keep coming back…"}
    ],
    proof:"Ten collocations with their sentences, one word family mapped with two example sentences, and five word cards with a record of at least two spaced reviews."
   },
   read:[
    {book:"uefap", where:"Vocabulary section", note:"The site’s vocabulary section, with explanations and practice for EAP students."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u1-l4", title:"Dense sentences and the writer’s stance", minutes:55,
   hook:{q:"Compared with everyday conversation, does academic writing use more or fewer dependent clauses of most kinds (for example parts beginning with “because” or “if”, or “that” after verbs such as “think”)?", options:["Many more: that is what makes it complex","About the same","Fewer: it packs information into long noun phrases instead","Academic writing never uses them"], answer:2, reveal:"**Fewer.** Corpus research by Douglas Biber and Bethany Gray (2010) found that most kinds of dependent clause, such as clauses with *because* or *if* and *that*-clauses after verbs, are more common in conversation. (Relative clauses, with *which* or *who*, are an exception: they are common in writing.) Academic writing is complex in a different way: it is **compressed**, packing information into long noun phrases such as “the rapid growth of informal settlements on the edges of large cities”. Experts read these quickly; newcomers have to unpack them. This lesson shows you how, and then how to read how sure a writer is and what they think of other people’s work."},
   goals:[
     "Recognise nominalisations and turn them back into actions to understand a sentence",
     "Find the head noun of a long noun phrase and unpack its modifiers",
     "Identify hedges, boosters and attitude markers, and say what they show about the writer’s stance",
     "Distinguish neutral reporting verbs from evaluative ones, and read what each choice says about the writer’s view of a source"
   ],
   learn:[
    {h:"Why academic sentences feel heavy", body:[
      {lead:"Many learners expect academic sentences to be long chains of clauses. Often they are short sentences with very heavy nouns."},
      "Compare these two ways of saying the same thing:",
      {table:[["Everyday style","Academic style"],["Because prices rose quickly, families bought less food.","The rapid rise in prices led to a reduction in household food purchases."]]},
      "The everyday version uses two clauses and two verbs (*rose*, *bought*). The academic version has one main verb (*led to*), and the information has moved into nouns: *rise*, *reduction*, *purchases*. Douglas Biber and Bethany Gray describe this academic style as **compressed**: it is efficient for expert readers, but it leaves the links between ideas unstated, so newcomers must work them out.",
      "Two skills help: recognising **nominalisations** and unpacking **long noun phrases**."
    ]},
    {h:"Nominalisation: actions turned into things", body:[
      "[[nominalisation|Nominalisation]] means expressing an action or quality as a noun. A verb or an adjective becomes a noun:",
      {table:[["Verb or adjective","Noun"],["analyse","analysis"],["fail","failure"],["decide","decision"],["grow","growth"],["increase","an increase"],["important","importance"],["difficult","difficulty"],["able","ability"]]},
      "Writers nominalise for good reasons:",
      {list:["**To sum up an earlier idea in one word.** “Prices rose sharply in 2022. *This rise* hit poorer households hardest.”","**To make a process the topic of the sentence.** “*The analysis of the samples* took six months.”","**To be general and impersonal.** “*Participation* was voluntary” instead of naming each person who chose to take part.","**To pack information.** Several clauses can become one noun phrase."]},
      "The cost is that nominalisations can hide **who did what**. “The introduction of the fee led to a decline in enrolment” doesn’t say who introduced the fee or who stopped enrolling. When a sentence is hard, unpack it: turn the nouns back into verbs and ask who did each action.",
      {ex:"Academic: “The introduction of the new fee led to a decline in enrolment.”\n\nStep 1, find the nominalisations: introduction (← introduce), decline (← decline).\nStep 2, ask who did each action: someone (the university? the government?) introduced a fee; students enrolled less.\nStep 3, rewrite with verbs: “After [someone] introduced the new fee, fewer students enrolled.”\nStep 4, check the link: “led to” means the first caused the second.", label:"Worked example: unpacking a nominalisation"},
      {tip:"Unpacking is for reading. When you write, a few well-chosen nominalisations are normal in academic English, but too many make writing heavy. Unit 2 covers that side in {{concise-writing}}."}
    ]},
    {h:"Finding the head of a long noun phrase", body:[
      "A [[noun-phrase]] is a group of words built around one main noun, the **head noun**. Everything else in the phrase describes or limits that head. To understand a long noun phrase, find its head first.",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="18" text-anchor="middle">Inside a long noun phrase</text><rect class="d-sage" x="8" y="34" width="120" height="44" rx="6" stroke-width="2"/><text x="68" y="61" text-anchor="middle">the rapid</text><rect class="d-rose" x="140" y="34" width="72" height="44" rx="6" stroke-width="3"/><text x="176" y="61" text-anchor="middle">growth</text><rect class="d-lup" x="224" y="34" width="108" height="44" rx="6" stroke-width="2"/><text x="278" y="61" text-anchor="middle">of informal</text><rect class="d-lup" x="8" y="92" width="324" height="44" rx="6" stroke-width="2"/><text x="170" y="119" text-anchor="middle">settlements on the edges of large cities</text><text x="68" y="166" text-anchor="middle">before the head</text><text class="s" x="68" y="184" text-anchor="middle">words such as the,</text><text class="s" x="68" y="200" text-anchor="middle">a, adjectives, nouns</text><text x="176" y="166" text-anchor="middle">head</text><text class="s" x="176" y="184" text-anchor="middle">what the phrase</text><text class="s" x="176" y="200" text-anchor="middle">is about</text><text x="278" y="166" text-anchor="middle">after the head</text><text class="s" x="278" y="184" text-anchor="middle">of…, in…, which…,</text><text class="s" x="278" y="200" text-anchor="middle">-ing or -ed phrases</text><rect class="d-panel" x="8" y="220" width="324" height="60" rx="6" stroke-width="2"/><text x="170" y="244" text-anchor="middle">Plain version: informal settlements</text><text x="170" y="264" text-anchor="middle">at city edges are growing fast</text></svg>', alt:"The noun phrase “the rapid growth of informal settlements on the edges of large cities” split into parts. “The rapid” comes before the head; “growth” is the head, highlighted; “of informal settlements on the edges of large cities” comes after it. Labels explain that words before the head include articles, adjectives and nouns; the head is what the phrase is about; words after the head start with of, in, which, or are -ing or -ed phrases. A plain version reads: informal settlements at city edges are growing fast.", cap:"The head noun is what the phrase is about. Here the topic is growth: everything else says what kind of growth and of what."},
      "Two quick rules for finding the head:",
      {list:["**Look just before the first “of”, “in”, “on”, “that” or “which”.** The head is usually there. In “a significant increase in the number of students who study abroad”, the head is *increase*: it comes just before *in*.","**In a stack of nouns, the last one is usually the head.** In “rural household water use”, the head is *use*. Read the stack from right to left: the use of water by households in rural areas."]},
      "Then find the main verb of the sentence. In most statements, the subject noun phrase comes just before it. A sentence such as “The rapid growth of informal settlements on the edges of large cities **has increased** demand for clean water” is really “Growth has increased demand”, with a lot of detail attached.",
      {ex:"“The limited availability of reliable data on informal employment in small island states makes comparison difficult.”\n\nMain verb: makes.\nSubject noun phrase: The limited availability of reliable data on informal employment in small island states.\nHead noun: availability (just before the first “of”).\nCore sentence: “Limited availability [of data] makes comparison difficult.”\nPlain version: “There is not much reliable data on informal work in small island states, so comparisons are difficult.”", label:"Worked example: unpacking a subject"}
    ]},
    {h:"Stance: how sure, and what the writer thinks", body:[
      "Academic writing is not neutral. Writers constantly show their [[stance]]: how certain they are about a claim, and what they think of it. The linguist Ken Hyland, in a widely cited 2005 article, describes four main ways writers do this:",
      {table:[["Stance feature","What it shows","Examples"],["Hedges","Caution: the claim may not be certain or universal","may, might, suggest, appear to, possibly, in most cases"],["Boosters","Confidence: the writer is sure","clearly, demonstrate, it is evident that, certainly"],["Attitude markers","Feelings or judgements","unfortunately, surprisingly, importantly, remarkable"],["Self-mention","The writer’s own presence","I, we, my, our"]]},
      "[[hedging|Hedges]] are the most common. They are not weakness: they make a claim exactly as strong as the evidence. [[booster|Boosters]] show where a writer is confident, and a careful reader asks whether that confidence is earned. Unit 2 teaches you to *use* hedges and boosters in your own writing ({{hedging-and-boosting}}); here the focus is reading them.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">One finding, five levels of certainty</text><rect class="d-rose" x="8" y="30" width="324" height="44" rx="6" stroke-width="2"/><text x="18" y="57">Tree cover clearly reduces street heat.</text><rect class="d-gold" x="8" y="84" width="324" height="44" rx="6" stroke-width="2"/><text x="18" y="111">Tree cover reduces street heat.</text><rect class="d-sage" x="8" y="138" width="324" height="44" rx="6" stroke-width="2"/><text x="18" y="165">Tree cover appears to reduce street heat.</text><rect class="d-lup" x="8" y="192" width="324" height="44" rx="6" stroke-width="2"/><text x="18" y="219">Tree cover may reduce street heat.</text><rect class="d-panel" x="8" y="246" width="324" height="44" rx="6" stroke-width="2"/><text x="18" y="267">It is possible that tree cover</text><text x="18" y="283">reduces street heat in some cases.</text></svg>', alt:"Five boxes from most to least certain: tree cover clearly reduces street heat (booster); tree cover reduces street heat (plain statement); tree cover appears to reduce street heat; tree cover may reduce street heat; it is possible that tree cover reduces street heat in some cases.", cap:"The same claim from booster (top) to heavy hedging (bottom). When you read, notice which level the writer chose, and ask whether the evidence supports it."}
    ]},
    {h:"Reporting verbs: neutral or evaluative", body:[
      "When writers describe other people’s work, they use a [[reporting-verb]]: *X states that…*, *Y found that…*. The verb they choose often shows what they think of the source. Reading these verbs tells you whether the writer agrees, is unsure, or is keeping a distance.","The four groups below are a simple teaching grouping, not fixed categories: researchers group reporting verbs in different ways, and the same verb can work differently in different fields and contexts.",
      {table:[["Kind","Common verbs","What the choice usually signals"],["Neutral","states, reports, describes, notes, observes, explains","Reports the source without judging it"],["Accepting","shows, demonstrates, establishes, confirms","The writer treats the claim as true"],["Tentative","suggests, proposes, hypothesises","The source itself offers the idea cautiously"],["Distancing","claims, alleges","The writer reports the idea without accepting it, or doubts it"]]},
      {ex:"Okafor (2021) **shows** that the scheme reduced costs.  → The writer accepts the finding.\nOkafor (2021) **reports** that the scheme reduced costs.  → Neutral: this is what Okafor says.\nOkafor (2021) **suggests** that the scheme may have reduced costs.  → Okafor is cautious.\nOkafor (2021) **claims** that the scheme reduced costs.  → The writer is keeping a distance and may go on to disagree.", label:"Worked example: four verbs, four messages"},
      "*Argue* is common and fairly neutral: it says the source makes a case, which others might dispute. Conventions also differ between fields: in some humanities fields *argues* is the standard verb for almost any source. So read the verb together with what follows. A writer who says “Okafor claims…” and then “However…” is clearly preparing to disagree.",
      "The University of Manchester’s *Academic Phrasebank* (section “Referring to sources”) collects many reporting phrases, and Unit 3 of this elective shows how to use them, with their grammar, in your own writing ({{using-sources-in-language}})."
    ]},
    {h:"Putting it together: reading a paragraph for stance", body:[
      "Here is an invented paragraph from a literature review. The stance markers are in bold.",
      {ex:"“Several studies have examined school gardens. Mensah (2018) **reports** that pupils in garden schools ate more vegetables, and Lee (2020) **demonstrates** a similar effect in a larger sample. Haddad (2019) **claims** that gardens also raise test scores, but this study had no comparison group. **It seems likely** that gardens improve diet; their effect on learning **remains unclear**.”", label:"Worked example: a stance-rich paragraph"},
      {list:["*reports*: neutral; the writer passes on Mensah’s finding.","*demonstrates*: accepting; the writer trusts Lee’s larger study.","*claims*, followed by a criticism: distancing; the writer doubts Haddad.","*It seems likely*: a hedge; fairly confident about diet.","*remains unclear*: the writer won’t commit about learning."]},
      "In four sentences, the writer has told you which studies they trust and how sure they are. Reading stance like this is a core part of critical reading, and it is how you know which sources to rely on.",
      {table:[["Misconception","Closer to the truth"],["Hedging shows the writer is unsure of their English.","Hedging shows the writer is precise about evidence. Expert writers hedge a lot."],["Boosters make writing stronger, so more is better.","Boosters are only convincing when the evidence is strong. Too many look like overclaiming."],["All reporting verbs mean “says”.","The verb often shows the writer’s view: claims and demonstrates send very different messages."],["Nominalisation is always bad style.","It is normal in academic English and useful. Problems start when there is too much of it."]]},
      {terms:["nominalisation","noun-phrase","stance","reporting-verb"]}
    ]}
   ],
   try:[
    {id:"e1u1-l4-x1", type:"mcq", q:"What is the head noun of this phrase: “a significant increase in the number of students who study abroad”?", options:[
      {t:"increase", ok:true, why:"Right. *Increase* comes just before the first preposition (*in*). The phrase is about an increase; the rest says what increased."},
      {t:"number", why:"*Number* is inside the post-modifier “in the number of students…”. It tells you what increased, but it isn’t the head."},
      {t:"students", why:"*Students* is further inside the phrase, after “the number of”. The whole phrase is not about students; it is about an increase."},
      {t:"significant", why:"*Significant* is an adjective describing the head. Heads of noun phrases are nouns."}
    ]},
    {id:"e1u1-l4-x2", type:"mcq", q:"Which plain sentence has the **same meaning** as “The introduction of the new fee led to a decline in enrolment”?", options:[
      {t:"After the new fee was introduced, fewer students enrolled.", ok:true, why:"Right. *Introduction* becomes “was introduced”, *decline in enrolment* becomes “fewer students enrolled”, and *led to* keeps the order: fee first, then fewer students."},
      {t:"The new fee was introduced because fewer students were enrolling.", why:"This reverses cause and effect. “X led to Y” means X came first and caused Y."},
      {t:"Enrolment declined, and a new fee was also introduced at some point.", why:"This loses the causal link that “led to” expresses."},
      {t:"More students enrolled after the new fee was introduced.", why:"A *decline* means a fall, not a rise."}
    ]},
    {id:"e1u1-l4-x3", type:"match", q:"Match each word to its nominalisation (the noun form).", pairs:[
      ["fail","failure","The suffix -ure makes the noun: failure, closure, exposure."],
      ["grow","growth","An irregular noun: grow → growth."],
      ["decide","decision","The -de ending changes to -sion: decide → decision, conclude → conclusion."],
      ["able","ability","An adjective becomes a noun with -ity: able → ability, possible → possibility."],
      ["analyse","analysis","The noun ends in -sis: analysis (plural: analyses)."]
    ]},
    {id:"e1u1-l4-x4", type:"sort", q:"In academic writing, is each word or phrase usually a **hedge** (shows caution) or a **booster** (shows certainty)?", buckets:["Hedge","Booster"], items:[
      {t:"may", b:0, why:"A modal verb of possibility: the claim might not hold in every case."},
      {t:"appears to", b:0, why:"Presents the claim as how things seem, not as certain."},
      {t:"possibly", b:0, why:"An adverb that marks the claim as one possibility."},
      {t:"tend to", b:0, why:"Says something is usually, not always, true."},
      {t:"clearly", b:1, why:"Tells the reader there is no doubt: a booster."},
      {t:"demonstrate", b:1, why:"As a reporting verb it presents a claim as proven."},
      {t:"it is evident that", b:1, why:"Presents the claim as obvious from the evidence."},
      {t:"undoubtedly", b:1, why:"Removes doubt completely: a strong booster."}
    ]},
    {id:"e1u1-l4-x5", type:"spot", q:"Tap every word or phrase in this invented abstract sentence that **hedges** (signals caution).", ask:"hedges", parts:[
      "The results ",
      {t:"suggest", flag:true, why:"A hedge: “suggest” presents the result as evidence for an interpretation, not proof."},
      " that shorter commutes ",
      {t:"may", flag:true, why:"A modal hedge: the effect is possible, not certain."},
      " improve sleep, ",
      {t:"at least among", flag:true, why:"A hedge that limits the claim to the group studied."},
      " city workers. The survey ",
      {t:"clearly", flag:false, why:"Not a hedge: “clearly” is a booster that shows confidence."},
      " shows that sleep complaints ",
      {t:"were", flag:false, why:"A plain past-tense verb reporting a result, neither hedge nor booster."},
      " common, and this pattern ",
      {t:"appears to", flag:true, why:"A hedge: the pattern is presented as how things look."},
      " be ",
      {t:"strongest", flag:false, why:"An ordinary comparison of the results, not a hedge."},
      " among night-shift workers."
    ]},
    {id:"e1u1-l4-x6", type:"sort", q:"In most academic writing, does each reporting verb usually report a source **neutrally**, or does it **show the writer’s judgement** (accepting or doubting the source)?", buckets:["Usually neutral","Shows the writer’s judgement"], items:[
      {t:"describes", b:0, why:"Simply says what the source contains."},
      {t:"reports", b:0, why:"Passes on what the source found, without judging it."},
      {t:"states", b:0, why:"Repeats what the source says."},
      {t:"notes", b:0, why:"Reports a point the source makes, without evaluating it."},
      {t:"demonstrates", b:1, why:"The writer accepts the claim as established."},
      {t:"confirms", b:1, why:"The writer treats the result as true, and as agreeing with earlier evidence."},
      {t:"claims", b:1, why:"Usually signals distance: the writer reports the idea without accepting it."},
      {t:"alleges", b:1, why:"Strongly signals doubt; it suggests the claim is unproven."}
    ]},
    {id:"e1u1-l4-x7", type:"mcq", q:"A literature review says: “Rahman (2021) **claims** that remote work raises productivity.” In academic writing, what does choosing *claims* rather than *shows* usually signal?", options:[
      {t:"The writer is reporting the idea without accepting it as established, and may go on to question it.", ok:true, why:"Right. *Claims* usually marks distance. Read on: a “However…” often follows."},
      {t:"The writer agrees strongly with Rahman.", why:"Strong agreement would be signalled by *shows* or *demonstrates*, which present the finding as true."},
      {t:"Nothing: claims and shows mean exactly the same.", why:"They differ in stance. *Shows* accepts the finding; *claims* keeps a distance."},
      {t:"Rahman’s study used no data.", why:"The verb tells you about the writer’s attitude, not about Rahman’s methods. You would need to check the study."}
    ]}
   ],
   apply:{
    intro:"Work with a real academic text: an article, a literature review or a textbook chapter in your field or interest.",
    tasks:[
     {t:"Unpack three heavy sentences", how:[
       "Find three sentences with long subjects or several nominalisations.",
       "For each one, mark the main verb, the head noun of the subject, and any nominalisations.",
       "Rewrite each sentence in plain English with more verbs, saying who did what."
     ], write:"Sentence 1… main verb… head noun… plain version… Sentence 2… Sentence 3…"},
     {t:"Track the stance in one paragraph", how:[
       "Choose a paragraph that discusses other studies (the introduction or a literature review is a good place).",
       "List every hedge, booster, attitude marker and reporting verb you find.",
       "Write two sentences: which sources the writer seems to trust, and how sure the writer is about their own main claim."
     ], write:"Hedges… Boosters… Attitude markers… Reporting verbs (neutral / accepting / distancing)… Who the writer trusts… How sure the writer is…"},
     {t:"Collect reporting verbs from your field", how:[
       "Scan two or three articles in your field for “that” after a name and a year, for example “(2019) argues that”.",
       "Collect ten reporting verbs and sort them into neutral, accepting, tentative and distancing.",
       "Note any verb your field uses very often: that is your field’s convention."
     ], write:"Neutral… Accepting… Tentative… Distancing… Most common in my field…"}
    ],
    proof:"Three sentences unpacked into plain English, one paragraph’s stance markers listed with a short reading of the writer’s view, and ten reporting verbs from your field sorted by stance."
   },
   read:[
    {book:"phrasebank", where:"“Referring to sources” and, under “General Functions”, “Being cautious”", note:"Read these as a reader: they show the reporting phrases and hedges you will meet most often in articles."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u1-l5", title:"Notes in your own words, with dictionaries and corpora", minutes:55,
   hook:{q:"In the Cornell note-taking method, a page has a wide column for notes and a narrow column on the left. What goes in the narrow column?", options:["The date and the lecturer’s name","Questions and cue words, added after the lecture or reading","Exact quotations to copy into your essay","Drawings and diagrams"], answer:1, reveal:"**Questions and cue words, added afterwards.** Walter Pauk, who developed the method at Cornell University in the 1950s and described it in his book *How to Study in College* (1962), advised leaving the cue column empty while you take notes and filling it in soon afterwards, while the material is fresh. Later you cover the notes and use the cues to test yourself. This lesson covers three note-making methods, how to keep notes in your own words, and the dictionaries and corpora that help you use words correctly."},
   goals:[
     "Explain the difference between copying notes and making notes, and why notes in your own words matter",
     "Use the Cornell, outline and mind-map methods, and choose one to suit a text",
     "Turn a passage into notes in your own words without patchwriting, and keep quotations clearly marked",
     "Use a learner dictionary to check meaning, grammar, collocations and pronunciation",
     "Use a free corpus tool to see how expert writers actually use a word"
   ],
   learn:[
    {h:"Making notes, not just taking them", body:[
      {lead:"A photocopy of a page is not a set of notes. Neither is a page of sentences copied from it."},
      "Study-skills teachers often distinguish **note-taking** (recording what a text or lecture says) from [[note-making]] (selecting what matters, organising it, putting it in your own words and connecting it to your own questions). Note-making takes more thought, and that thought is what helps you understand and remember.",
      "Notes in your own words have a second benefit. When you later write an essay from notes full of copied sentences, it is easy to forget which words were yours, and copied wording can slip into your writing without quotation marks. The Research Skills track calls a close copy with a few words swapped [[patchwriting]], and treats it in {{plagiarism}}. Good notes prevent it from the start.",
      "This lesson gives three note-making methods, a routine for writing notes in your own words, and two tools that help you check words: learner dictionaries and corpora. For keeping literature notes on whole papers, see {{research-notes}}."
    ]},
    {h:"Cornell notes", body:[
      "The [[cornell-notes|Cornell method]] was developed by Walter Pauk at Cornell University in the 1950s and described in his book *How to Study in College* (first published in 1962 and still in print in later editions). It divides each page into three areas.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-panel" x="8" y="8" width="324" height="314" rx="6" stroke-width="2"/><rect class="d-gold" x="16" y="16" width="96" height="210" rx="4" stroke-width="2"/><rect class="d-lup" x="120" y="16" width="204" height="210" rx="4" stroke-width="2"/><rect class="d-sage" x="16" y="234" width="308" height="80" rx="4" stroke-width="2"/><text x="64" y="40" text-anchor="middle">Cues</text><text class="s" x="64" y="62" text-anchor="middle">questions and</text><text class="s" x="64" y="78" text-anchor="middle">key words,</text><text class="s" x="64" y="94" text-anchor="middle">added after</text><text class="s" x="64" y="122" text-anchor="middle">What causes</text><text class="s" x="64" y="138" text-anchor="middle">urban heat?</text><text x="222" y="40" text-anchor="middle">Notes</text><text class="s" x="222" y="62" text-anchor="middle">main ideas in your words,</text><text class="s" x="222" y="78" text-anchor="middle">during the reading or lecture</text><text class="s" x="128" y="106">• roads, roofs absorb heat</text><text class="s" x="128" y="124">  by day → release at night</text><text class="s" x="128" y="142">• city ≈ 2 °C warmer at night</text><text class="s" x="128" y="160">  (one study, 6 stations)</text><text class="s" x="128" y="178">• trees: shade + cooling</text><text x="170" y="258" text-anchor="middle">Summary</text><text class="s" x="170" y="280" text-anchor="middle">one or two sentences on the page’s</text><text class="s" x="170" y="298" text-anchor="middle">main point, written after</text></svg>', alt:"A notebook page divided into three areas. A narrow left column labelled cues, for questions and key words added afterwards, with the example question what causes urban heat. A wide right column labelled notes, for main ideas in your own words written during the reading or lecture, with example bullet points about roads absorbing heat, cities being about two degrees warmer at night in one study, and trees giving shade. A strip across the bottom labelled summary, for one or two sentences written afterwards.", cap:"A Cornell page: notes on the right during reading, cues on the left and a summary at the bottom afterwards."},
      "Using it is a cycle:",
      {ol:["**Record.** During the lecture or reading, write the main ideas in the wide notes column, in short phrases.","**Add cues.** Soon afterwards, write questions or key words in the narrow left column, next to the notes they point to.","**Summarise.** Write one or two sentences at the bottom of the page about its main point.","**Recite.** Later, cover the notes column, read each cue and answer it aloud in your own words. Then check.","**Reflect and review.** Note what was hard, and repeat the recital regularly, focusing on the difficult parts."]},
      "The cue column turns your notes into a self-test, which is the same retrieval practice that makes word cards work (Lesson 3)."
    ]},
    {h:"Outline notes and mind maps", body:[
      "[[outline-notes|Outline notes]] arrange ideas in a hierarchy: main points at the left margin, supporting points indented below them, often numbered. They suit well-organised texts such as textbook chapters, where the headings already give you the structure.",
      {ex:"1. Urban heat island effect\n   1.1 Definition: cities warmer than nearby countryside\n   1.2 Causes\n       a. dark surfaces absorb heat\n       b. fewer trees → less shade\n2. Responses\n   2.1 Tree planting\n   2.2 Light-coloured (“cool”) roofs", label:"Worked example: outline notes", mono:true},
      "A [[mind-map]] puts the main topic in the centre of the page, with branches for the main ideas and smaller branches for details. Mind maps were popularised by the writer Tony Buzan in the 1970s. They show **connections** well, so they suit brainstorming, revision and topics where ideas link in many directions; they show **sequence** less well.",
      {table:[["Method","Works well for","Less good for"],["Cornell","Lectures and readings you need to revise and test yourself on","Very visual topics"],["Outline","Textbooks and well-structured articles","Ideas that connect in many directions"],["Mind map","Brainstorming, seeing links, revision overviews","Step-by-step processes and long arguments"]]},
      "No method is best for everyone. Many students use more than one: outline notes while reading a chapter, then a mind map to review the whole unit.",
      {h:"Abbreviations and symbols"},
      "Short forms save time, as long as you will understand them later. Common ones include *e.g.* (for example), *i.e.* (that is), *cf.* (compare), *vs* (versus), → (leads to), ↑ (rises), ↓ (falls) and ≈ (about). Keep a key at the front of your notebook for any you invent. Unit 4 adds more for lectures."
    ]},
    {h:"From the source to your own words", body:[
      "A simple routine keeps notes accurate and your own:",
      {ol:["Write the **source details** first: author, year, title and page.","Read the section until you understand it. Use Lesson 4’s unpacking skills on hard sentences.","**Look away** from the source (cover it or close the tab).","Write the main idea from memory, in your own words and your own sentence structure.","**Check** against the source: is the meaning right? Did any of its phrases creep in?","If you want the exact words, copy them inside quotation marks with the page number, so you can quote them correctly later."]},
      {ex:"Original (invented): “Urban gardens provide residents with fresh produce, opportunities for physical activity and a space for social interaction, particularly in neighbourhoods with few green areas.” (Ortiz, 2022, p. 14)\n\nPatchwritten note ✘: Urban gardens give residents fresh produce, chances for physical activity and a place for social interaction, especially in neighbourhoods with few green areas.\n\nNote in own words ✔: Ortiz 2022, p. 14: city gardens → food + exercise + meeting people; benefits greatest where there’s little green space.", label:"Worked example: patchwriting versus your own words"},
      "The patchwritten note swaps a few words (*give* for *provide*, *chances* for *opportunities*) but keeps the original’s sentence shape and most of its phrases. The good note is shorter, uses different structure and symbols, and still records the source and page.",
      "Turning a note into a full paraphrase in an essay is covered in the Research Skills track ({{quote-paraphrase-summary}}, with [[paraphrase]] and [[summary-writing]]). Unit 3 of this elective covers the language of reporting sources in your sentences."
    ]},
    {h:"Learner dictionaries", body:[
      "A [[learner-dictionary]] is a dictionary written for people learning a language. Compared with a dictionary for first-language users, it uses simpler definitions and gives much more help with **using** a word:",
      {list:["**Example sentences** showing the word in context.","**Grammar**: whether a noun is countable or uncountable (often marked [C] and [U]), whether a verb needs an object (transitive, often [T]) or not (intransitive, often [I]); some dictionaries write these words out instead of using codes; and the patterns a word takes (*discuss something*, not *discuss about something*).","**Collocations**: the words it usually goes with.","**Register labels** such as *formal*, *informal* or *specialist*.","**Pronunciation**, often with audio in both American and British accents, and the stressed syllable marked."]},
      "Several major learner dictionaries are free to use online, with advertising: the **Cambridge Dictionary**, **Oxford Learner’s Dictionaries** (which also hosts the OPAL academic word lists from Lesson 3), the **Longman Dictionary of Contemporary English Online** and **Collins COBUILD**. Their symbols differ a little, so check each dictionary’s key.",
      "A **bilingual** dictionary or a translation tool is quick for a first idea of meaning, and that is a good use for it. A monolingual learner dictionary is better for checking how to *use* the word in English. Translation tools can be useful but often handle cautious words (*may*, *suggest*) and technical terms poorly, so check important sentences.",
      {tip:"When you look a word up, read past the first meaning. Academic words often have a general meaning and a specialist one: *significant* means “important” in general but has a technical meaning in statistics."}
    ]},
    {h:"Corpora: how experts really use a word", body:[
      "A [[corpus-language|corpus]] (plural *corpora*) is a large collection of real texts stored so a computer can search it. The Academic Word List and the Academic Vocabulary List were both built from corpora. You can use corpora yourself to answer questions a dictionary may not: which preposition follows *impact*? Is *conduct a survey* more common than *make a survey*?",
      "The basic view is a [[concordance]]: every example of a word, each shown on one line with the search word in the middle and a few words either side. Reading down the lines shows its patterns quickly.",
      {ex:"…had a significant  impact  on  student attendance in…\n…assess the likely  impact  on  local water supplies…\n…the economic  impact  of  the new tariffs was…\n…little  impact  on  overall levels of…\n…the environmental  impact  of  mining in the…", label:"Invented concordance lines for “impact” (made up for this lesson)", mono:true},
      "Even five lines show a pattern: *impact on* something, and *the (economic, environmental) impact of* something. A real corpus shows hundreds of lines and counts them for you.",
      {h:"Free tools to try"},
      {list:["**SkELL** (Sketch Engine for Language Learning) at skell.sketchengine.eu: free, with no registration. Type a word to see example sentences, a **word sketch** (its typical collocations, sorted by grammar) and similar words. It draws on a very large collection of web, news, academic and other texts.","**English-Corpora.org**, which hosts the *Corpus of Contemporary American English* (COCA) and others: free basic access with daily limits (as of November 2026, 20 searches a day), and paid licences for more. COCA has an academic section, so you can see how a word behaves in academic texts specifically."]},
      "Use corpus evidence for **patterns**, not for copying sentences: note that *impact* takes *on*, then write your own sentence.",
      {table:[["Misconception","Closer to the truth"],["Good notes are complete copies of the text.","Good notes are selective, organised and mostly in your own words, with quotations clearly marked."],["Changing a few words makes a note my own.","Swapping synonyms but keeping the structure is patchwriting. Look away and write from memory."],["A translation app is all the dictionary I need.","Translation gives a quick meaning; a learner dictionary shows grammar, collocations and register."],["Corpora are only for linguists.","Free tools such as SkELL let any learner check how a word is used."]]},
      {terms:["note-making","cornell-notes","outline-notes","mind-map","learner-dictionary","corpus-language","concordance"]}
    ]}
   ],
   try:[
    {id:"e1u1-l5-x1", type:"mcq", q:"Which description of note-making matches this lesson?", options:[
      {t:"Selecting the important points, organising them and writing them mostly in your own words, linked to your own questions.", ok:true, why:"Right. Note-making adds thinking: choosing, organising and rephrasing."},
      {t:"Copying as many sentences from the source as possible, so nothing is missed.", why:"That is copying, and it makes accidental plagiarism more likely later."},
      {t:"Highlighting most of each page in different colours.", why:"Highlighting marks a text but doesn’t organise or rephrase it. Heavy highlighting often shows little selection."},
      {t:"Recording a lecture so you never need notes.", why:"A recording keeps everything but selects nothing. You still need to make notes from it."}
    ]},
    {id:"e1u1-l5-x2", type:"order", q:"Put the Cornell method’s steps in the order this lesson describes.", items:[
      {t:"Write the main ideas in the wide notes column during the lecture or reading.", why:"Record first, in short phrases, in the wide column."},
      {t:"Soon afterwards, add questions and key words in the narrow cue column.", why:"Pauk advised leaving the cue column empty while taking notes and filling it in afterwards."},
      {t:"Write a one- or two-sentence summary at the bottom of the page.", why:"The summary pulls the page together once the notes and cues are done."},
      {t:"Cover the notes, read each cue and answer it aloud from memory.", why:"Recitation uses the cues as a self-test."},
      {t:"Note what was hard and repeat the review regularly.", why:"Regular review, focused on the hardest parts, keeps the material fresh."}
    ]},
    {id:"e1u1-l5-x3", type:"spot", q:"The original says: “Urban gardens provide residents with fresh produce, opportunities for physical activity and a space for social interaction, particularly in neighbourhoods with few green areas.” Ana’s note says the sentence below. Tap each part she copied **word for word** from the original.", ask:"copied word for word", parts:[
      "Urban gardens ",
      {t:"give", flag:false, why:"Changed: the original says “provide”."},
      " residents ",
      {t:"fresh produce", flag:true, why:"Copied exactly from the original."},
      ", ",
      {t:"chances", flag:false, why:"Changed: the original says “opportunities”. Swapping one word, though, doesn’t make the note her own."},
      " ",
      {t:"for physical activity", flag:true, why:"Copied exactly: “for physical activity”."},
      " and ",
      {t:"a place", flag:false, why:"Changed: the original says “a space”."},
      " ",
      {t:"for social interaction", flag:true, why:"Copied exactly: “for social interaction”."},
      ", ",
      {t:"especially", flag:false, why:"Changed: the original says “particularly”."},
      " ",
      {t:"in neighbourhoods with few green areas", flag:true, why:"Copied exactly. With the same sentence shape and only a few synonyms swapped, the whole note is patchwriting: look away and write it from memory instead."},
      "."
    ]},
    {id:"e1u1-l5-x4", type:"mcq", q:"Hana is making notes on a well-organised textbook chapter with clear headings and numbered sections. She wants notes that keep the chapter’s structure. Which method fits best?", options:[
      {t:"Outline notes", ok:true, why:"Right. Outline notes are built as a hierarchy of main points and sub-points, which matches a chapter with clear headings."},
      {t:"A mind map, because it shows sequence best", why:"Mind maps show connections well but sequence and hierarchy less well. This chapter’s structure suits an outline."},
      {t:"Copying the chapter’s key sentences word for word", why:"That isn’t note-making, and it risks patchwriting later."},
      {t:"No notes: highlighting the chapter is enough", why:"Highlighting doesn’t organise or rephrase the ideas, so it does little for understanding."}
    ]},
    {id:"e1u1-l5-x5", type:"match", q:"In many learner dictionaries, what does each label or symbol tell you?", pairs:[
      ["[C] next to a noun","The noun is countable: it can be plural and take “a/an”","Countable nouns: a study, two studies."],
      ["[U] next to a noun","The noun is uncountable: no plural, no “a/an”","For example, *information* [U]: “some information”, not “an information”."],
      ["[T] next to a verb","The verb is transitive: it needs an object","For example, *discuss* [T]: “discuss the results”, not “discuss about the results”."],
      ["formal","The word is mainly used in formal writing or speech","Register labels help you choose words for an essay."],
      ["/əˈnæləsɪs/","How the word is pronounced, with the stressed syllable marked","IPA symbols; the mark ˈ comes before the stressed syllable: a-NAL-y-sis."]
    ]},
    {id:"e1u1-l5-x6", type:"mcq", q:"Dmitri writes “In this essay I will discuss about the causes of inflation.” He checks *discuss* in a learner dictionary and sees it marked [T], with examples such as “discuss the problem”. What should he write?", options:[
      {t:"In this essay I will discuss the causes of inflation.", ok:true, why:"Right. *Discuss* is transitive: it takes a direct object with no preposition. (The noun is different: “a discussion **about** inflation” is fine.)"},
      {t:"In this essay I will discuss about the causes of inflation.", why:"[T] means the verb takes an object directly, so “about” is not needed after *discuss*."},
      {t:"In this essay I will discuss on the causes of inflation.", why:"*Discuss* takes no preposition at all; changing *about* to *on* doesn’t fix it."},
      {t:"In this essay I will discuss to the causes of inflation.", why:"There is no preposition after *discuss*. The object follows the verb directly."}
    ]},
    {id:"e1u1-l5-x7", type:"mcq", q:"Fatima wants to know which adjectives most often go with *evidence* in real English (strong evidence? clear evidence?). Which free tool, used as this lesson describes, answers that most directly?", options:[
      {t:"A corpus tool such as SkELL, using its word sketch for *evidence*", ok:true, why:"Right. A word sketch lists a word’s typical collocations, including the adjectives that modify it, from a large corpus."},
      {t:"A bilingual pocket dictionary", why:"It gives a translation of *evidence*, but rarely shows which adjectives typically go with it."},
      {t:"A spelling checker", why:"A spelling checker finds misspelled words; it says nothing about which words go together."},
      {t:"The Academic Word List", why:"The AWL lists word families. It doesn’t show which words a given word combines with."}
    ]}
   ],
   apply:{
    intro:"Put the methods and tools to work on one real text from your field or interest.",
    tasks:[
     {t:"Make Cornell notes on one section", how:[
       "Choose a section of a textbook or an article (two or three pages).",
       "Draw the three areas on a page (or set them up in a notes app). Make notes in the wide column as you read, mostly in your own words.",
       "Afterwards, add at least three cue questions and a two-sentence summary. Tomorrow, cover the notes and answer the cues from memory."
     ], write:"Source details… Cue questions… Summary… Tomorrow: which cues I could answer…"},
     {t:"Turn one passage into notes in your own words", how:[
       "Copy one important sentence from your source, with quotation marks and the page number.",
       "Look away and write the idea from memory as a short note, using symbols if you like.",
       "Compare the two. Underline any phrase in your note that matches the original. If there are several, try again."
     ], write:"Original (in quotation marks, with page)… My note… Phrases that matched… Second try…"},
     {t:"Check five words in a dictionary and a corpus", how:[
       "Choose five academic words from your reading.",
       "Look each one up in a free learner dictionary: note its part of speech, countable or uncountable (for nouns), one collocation and the stressed syllable.",
       "Search two of them in SkELL (skell.sketchengine.eu) and note the most common patterns from its word sketch."
     ], write:"Word 1… part of speech… [C]/[U]… collocation… stress… Word 2… SkELL patterns for…"}
    ],
    proof:"One page of Cornell notes with cues and a summary, one passage turned into your own words and checked for copied phrases, and dictionary and corpus notes on five words."
   },
   read:[
    {book:"uefap", where:"Reading section: the pages on note taking", note:"More on making notes from reading, with practice exercises."},
    {book:"owg", where:"Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”", note:"Background reading on notes during a research project."}
   ]
  }
  ],
  checkpoint:["e1u1-q02","e1u1-q06","e1u1-q11","e1u1-q15","e1u1-q19","e1u1-q22","e1u1-q25","e1u1-q29","e1u1-q32","e1u1-q35","e1u1-q39","e1u1-q43"],
  codex:[
   {id:"academic-english", title:"Academic English and EAP", aka:["English for Academic Purposes","EAP","academic register"], tags:["academic english","foundations"],
    summary:"The English used for study and research, and the field (EAP) that teaches it: same grammar as everyday English, used in a more precise, compact and careful way.",
    levels:{
     starter:[
      "**Academic English** is the kind of English used in universities and research: in textbooks, articles, essays, lectures and seminars. It isn’t a separate language. It uses everyday grammar, but in a more precise, compact and careful way.",
      "**English for Academic Purposes** (EAP) is the teaching of that English. Many universities run EAP courses before or during a degree, for students of every first language.",
      "Nobody grows up speaking academic English. Everyone learns it, mainly by reading and writing academic texts. Many different varieties of English are used well in academic work, and both American and British spelling are correct if you use one consistently.",
      {key:"Academic English is a register: everyday grammar used precisely, compactly and carefully, inside predictable kinds of text."}
     ],
     builder:[
      "Academic English differs from everyday English in a few recurring ways:",
      {table:[["Feature","Example"],["Academic vocabulary and collocations","analyse, significant; conduct research"],["Long, compressed noun phrases","the rapid growth of informal settlements"],["Careful claims (hedging)","These findings suggest that… may…"],["Reference to sources","Okafor (2021) argues that…"],["Predictable genres","research article, report, essay, abstract"]]},
      "English works as a **lingua franca** of much international research: a shared language for people with different first languages. Research in other languages remains valuable, and most users of academic English learned it as an additional language.",
      "Teachers often describe language levels with the **CEFR** (Council of Europe): A1–A2 basic user, B1–B2 independent user, C1–C2 proficient user. EAP courses often aim to take students from around B2 towards C1.",
      "The **BALEAP Can Do Framework** (2013) lists what students need to be able to do in English at postgraduate level in UK universities, organised by reading, writing, listening and speaking. It draws partly on interviews; teachers use it to plan courses. It is not a test.",
      {tip:"A quick way to feel the register of your own field: open two recent articles from a journal you will cite, and note how they begin, which reporting verbs they use, whether the authors write “we”, and how cautious their conclusions are. Those habits are your field’s version of academic English."}
     ],
     pro:[
      "EAP is usually divided into **English for General Academic Purposes** (skills shared across fields, such as summarising or hedging) and **English for Specific Academic Purposes** (the language of one discipline, such as law or nursing). Research on genres and on discipline-specific language (for example by John Swales and Ken Hyland) shows that fields differ a lot: in reporting verbs, in the use of “I” and “we”, and in how claims are hedged. Good EAP teaching therefore moves from general patterns to the learner’s own field.",
      "Corpus studies have changed how academic English is described. Douglas Biber and Bethany Gray (2010, *Journal of English for Academic Purposes*) show that academic writing is not marked by more clauses but by **phrasal compression**: dense noun phrases that are efficient for experts and hard for novices.",
      "The BALEAP Can Do Framework’s competencies are grouped under academic context, academic discourse, discipline-related skills and practical skills. It describes UK postgraduate expectations; expectations differ elsewhere (for example in how much independent reading is expected or how critical students should be of sources), so use it as one map among several.",
      "Two cautions for learners. First, “sounding academic” is not the same as using rare words: precision and clarity matter more. Second, there is no single correct English. Spelling (American or British), vocabulary and some grammar vary between varieties; academic readers expect consistency and clarity, not one national standard. See {{englishes}} in Unit 4."
     ]
    },
    related:["reading-strategies-eap","academic-vocabulary","reading-critically-language","academic-style","englishes"],
    read:[{book:"uefap", where:"The site’s introductory pages on what EAP is"}],
    sources:[{t:"BALEAP: Can Do Framework for EAP syllabus design and assessment (April 2013, PDF)", url:"https://www.baleap.org/wp-content/uploads/2016/04/Can_Do_Framework__with_sample_activities_April_2013.pdf"},{t:"Council of Europe: The CEFR levels", url:"https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"},{t:"Biber & Gray (2010), “Challenging stereotypes about academic writing”, Journal of English for Academic Purposes 9(1) (DOI)", url:"https://doi.org/10.1016/j.jeap.2010.01.001"}],
    checked:"2026-11"},

   {id:"reading-strategies-eap", title:"Skimming, scanning and intensive reading", aka:["reading strategies","reading skills","speed reading"], tags:["academic english","reading"],
    summary:"Three ways of reading, chosen by purpose: skim for the main idea, scan for one piece of information, read intensively to understand every point.",
    levels:{
     starter:[
      "Good readers don’t read everything the same way. They choose a way of reading to fit their purpose.",
      {list:["**Skimming**: reading quickly and selectively for the main idea, like glancing over a newspaper’s headlines.","**Scanning**: searching for one specific thing, like finding your train in a timetable.","**Intensive reading**: reading slowly and carefully, every sentence, like reading a contract before you sign it."]},
      "In academic work you often combine them: skim to decide whether an article is useful, scan it for a definition, then read the key pages intensively.",
      {key:"Decide what you need from a text before you start; then choose how to read it."},
      "None of these is better than the others. Reading slowly is not more “serious” than skimming; it is simply the right tool for a different job."
     ],
     builder:[
      "**Skimming** an academic text means reading the title, abstract, headings, the first and last paragraphs, the first sentence of each paragraph (often the topic sentence), and figures with captions. Afterwards you should be able to say in one or two sentences what the text is about and whether you need it.",
      "**Scanning** works best when you know what the target looks like: numbers, capital letters for names, definition signals (“is defined as”, “refers to”). Think of synonyms first: a report may say “older adults” rather than “older people”. On screen, use Find in page or Ctrl+F (Cmd+F on a Mac), and search for word stems (“migra”).",
      "**Intensive reading** suits key sections of important sources. Read the paragraph once through; find the subject and main verb of long sentences; notice connectors (*however*, *therefore*); guess unknown words from context; restate the main point in your own words.",
      {table:[["Context clue","Signals"],["Definition","is, refers to, that is, i.e., brackets"],["Example","such as, for example, including"],["Contrast","unlike, whereas, however"],["Word parts","prefixes and suffixes: re-, un-, -tion, -ity"]]},
      "After guessing a word, check the guess against the next sentence. Look a word up when it appears again and again, or when the sentence makes no sense without it."
     ],
     pro:[
      "How many unknown words can a reader cope with? Norbert Schmitt, Xiangying Jiang and William Grabe (2011, *Modern Language Journal*) tested 661 learners and found a roughly **linear** relationship between vocabulary coverage (the percentage of words known) and comprehension, with no sudden threshold. Earlier work had suggested 95% (Laufer, 1989) or 98% (Hu & Nation, 2000); Schmitt and colleagues concluded that **98%** is a more reasonable target for academic texts, about one unknown word in fifty.",
      "Two practical consequences follow. A text at 90% coverage (one word in ten unknown) will be hard work; that is normal, not failure. And because comprehension rises gradually, every word learned helps.",
      "Background knowledge also matters. Readers who know about a topic understand texts about it more easily, so reading a simpler introduction first (a textbook section, an encyclopedia entry, even one in another language) is a legitimate strategy, not a shortcut.",
      "Translation tools can check a hard sentence, but they often flatten stance: *may suggest* and *shows* can come out the same in another language, and technical terms are often mistranslated. Use them to check understanding, not to replace reading. For a full reading routine for research papers, see {{reading-strategies}} in the Research Skills track."
     ]
    },
    related:["reading-an-article","academic-vocabulary","reading-strategies","academic-english"],
    read:[{book:"uefap", where:"Reading section: the pages on reading efficiently"}],
    sources:[{t:"Schmitt, Jiang & Grabe (2011), “The percentage of words known in a text and reading comprehension”, Modern Language Journal 95(1) (DOI)", url:"https://doi.org/10.1111/j.1540-4781.2011.01146.x"},{t:"BALEAP: Can Do Framework for EAP syllabus design and assessment (April 2013, PDF)", url:"https://www.baleap.org/wp-content/uploads/2016/04/Can_Do_Framework__with_sample_activities_April_2013.pdf"}],
    checked:"2026-11"},

   {id:"reading-an-article", title:"Finding your way around a research article", aka:["article structure","reading a paper","signposts in articles"], tags:["academic english","reading"],
    summary:"How to use an article’s structure and its signpost phrases to find the aim, gap, method, findings and limitations quickly.",
    levels:{
     starter:[
      "Research articles have a predictable structure, a bit like a building where every floor has the same layout. Many follow **IMRaD**: Introduction, Methods, Results and Discussion, after a title and an abstract.",
      "Because the structure is predictable, you don’t have to read in printed order. Many readers start with the title and abstract, then the end of the introduction (where the aim is stated), then the figures and the discussion, and only then the methods and results in detail. You can stop at any step if the article turns out not to be useful.",
      {key:"Know where each kind of information lives in an article, and you can go straight to it."},
      "Look out for **signpost phrases** too: “The aim of this study was to…” announces the purpose; “One limitation…” announces a weakness."
     ],
     builder:[
      "Writers signal what each part is doing with recurring phrases. Learn them and you can scan for them:",
      {table:[["What you want","Usually found in","Typical phrases"],["Aim or question","End of introduction","The aim of this study was to… / This paper examines…"],["Gap","Introduction","However, little is known about… / Few studies have…"],["Method","Methods","Participants were recruited… / Data were collected…"],["Findings","Results, abstract","The results show… / There was a significant increase in…"],["Interpretation","Discussion","These findings suggest… / One possible explanation is…"],["Limitations","Late in the discussion","One limitation of this study is… / Caution is needed…"]]},
      "Not every article uses IMRaD. Humanities articles and theoretical papers are often organised by argument, with descriptive headings or none. There, the introduction usually states the thesis (“This article argues that…”), and topic sentences carry the structure.",
      {ex:"Want to know if a study is relevant? → title, abstract, end of introduction.\nWant the main finding? → abstract, first paragraph of the discussion, figures.\nWant to judge the evidence? → methods and results, read closely.\nWant to know the weaknesses? → scan for “limitation”, “caution”, “further research”.", label:"Worked example: where to look for what"},
      "A good habit is to note, for each article you read, the aim, the method in one line, the main finding and one limitation. Those four lines are the core of a literature note."
     ],
     pro:[
      "The structure of introductions has been studied in detail. John Swales’s **CARS** model (“Create a Research Space”, 1990) describes how introductions establish a territory, show a niche (a gap) and occupy it; Unit 3 of this elective covers it ({{using-sources-in-language}} and [[cars-model]]). Knowing those moves helps you find the gap and aim quickly.",
      "Abstracts follow a similar logic in miniature: background or purpose, method, results, conclusion. Some journals require **structured abstracts** with labelled headings; others use one paragraph. Either way, an abstract is the authors’ own summary and may overstate results, so check the results and limitations sections before relying on a claim.",
      "Verb tense also signals location. Methods and results are usually in the past tense (“Participants completed…”), while general claims and interpretations are often in the present (“These findings suggest…”). Conventions vary by field, so treat this as a clue, not a rule. For the full anatomy of a paper and a three-pass reading method, see {{paper-structure}} and {{reading-strategies}}.",
      "Review articles and book chapters have different shapes. Reviews are usually organised by theme or by method, and their introductions explain how sources were chosen; book chapters follow the argument of the book. In every genre, the introduction and the conclusion are the best places to find the writer’s main claim, and headings are the quickest map of the rest."
     ]
    },
    related:["reading-strategies-eap","paper-structure","reading-strategies","reading-critically-language"],
    read:[{book:"phrasebank", where:"“Introducing work”, “Reporting results” and “Discussing findings”"}],
    sources:[{t:"University of Manchester: Academic Phrasebank (home page and section list)", url:"https://www.phrasebank.manchester.ac.uk/"}],
    checked:"2026-11"},

   {id:"academic-vocabulary", title:"Academic vocabulary and word lists", aka:["Academic Word List","AWL","Academic Vocabulary List","AVL","OPAL","word families","collocations"], tags:["academic english","vocabulary"],
    summary:"The words common across academic fields, how researchers have listed them (AWL, AVL, OPAL), and how to learn them as families and collocations with spaced review.",
    levels:{
     starter:[
      "Some words appear in textbooks and articles in almost every subject but rarely in everyday conversation: *analyse*, *concept*, *indicate*, *significant*. These are **academic words**, and learning them pays off in every field.",
      "Learn each word with its **family** (analyse, analysis, analytical, analytically) and its **collocations**, the words it usually goes with (*conduct research*, *play a key role*, *a significant difference*).",
      "Researchers have made lists of academic words. The best known is the **Academic Word List** (570 word families, Coxhead 2000). A newer, larger one is the **Academic Vocabulary List** (Gardner & Davies 2014).",
      {key:"Learn academic words in chunks (with their families and collocations), and review them at growing intervals."},
      "Your own field adds its **technical words** (*tariff*, *photosynthesis*), which your courses will teach."
     ],
     builder:[
      "**The Academic Word List (AWL).** Averil Coxhead (*TESOL Quarterly*, 2000) built it from 414 texts, about 3.5 million words, in 28 subject areas across arts, commerce, law and science. She excluded the 2,000 most frequent general words (West’s *General Service List*, 1953) and kept families that occurred widely (at least 10 times in each of the four fields and in at least 15 subject areas) and often (at least 100 times). Result: 570 families in 10 sublists, covering 10.0% of the academic corpus and about 1.4% of fiction.",
      "**The Academic Vocabulary List (AVL).** Dee Gardner and Mark Davies (*Applied Linguistics*, 2014) used the 120-million-word academic part of the Corpus of Contemporary American English, across nine disciplines. They counted **lemmas** (a headword and its inflections) rather than families, used no exclusion list, and selected words that are more frequent in academic than other texts and spread evenly across disciplines. The core list has about 3,000 lemmas.",
      "**OPAL** (Oxford Phrasal Academic Lexicon) offers four lists, which you can browse on the Oxford Learner’s Dictionaries site: written words, spoken words, written phrases and spoken phrases.",
      "**Using lists well:** check which words you don’t know, learn them in context from your own reading, start with the most frequent sublists, and add your own field’s technical words."
     ],
     pro:[
      "**Word families versus lemmas.** A family groups derivations (analyse, analyst, analytical), which assumes learners can recognise all members once they know one. Gardner and Davies argue that lemmas suit learners below advanced level better, because family members can differ in meaning and part of speech (*economic* and *economical*; *historic* and *historical*). In their comparison, the top 570 AVL families covered about 14% of COCA’s academic texts and the AWL about 7%; both lists are useful, and coverage always depends on the texts measured.",
      "**Coverage targets.** Schmitt, Jiang and Grabe (2011) suggest about 98% vocabulary coverage as a reasonable target for reading academic texts. Paul Nation (2006) estimated that 98% coverage of written texts needs a vocabulary of roughly 8,000–9,000 word families. Academic lists are one efficient step towards that, not the whole journey.",
      "**Spaced review.** A meta-analysis by Cepeda and colleagues (2006, *Psychological Bulletin*; 317 experiments) confirms that spaced study beats massed study for long-term recall, and that the best gap between sessions grows with how long you need to remember. Combine spacing with **retrieval** (try to recall before you check). Leitner boxes and flashcard apps that schedule reviews implement both; this app’s Arcade Flashcards use boxes with gaps of 1, 3, 7, 14 and 30 days.",
      "**Collocation lists** exist too, and field-specific lists (for example for medicine or engineering) can serve specialists better than general academic lists. A corpus tool ({{dictionaries-corpora}}) lets you check any word’s collocations yourself."
     ]
    },
    related:["reading-strategies-eap","dictionaries-corpora","noun-phrases-nominalisation","academic-english"],
    read:[{book:"uefap", where:"Vocabulary section"}],
    sources:[{t:"Coxhead (2000), “A New Academic Word List”, TESOL Quarterly 34(2) (author’s PDF, Victoria University of Wellington)", url:"https://www.wgtn.ac.nz/__data/assets/pdf_file/0020/1626131/Coxhead-2000.pdf"},{t:"EAP Foundation: the Academic Vocabulary List (summary of Gardner & Davies 2014)", url:"https://eapfoundation.com/vocab/academic/other/avl"},{t:"Cepeda et al. (2006), “Distributed practice in verbal recall tasks”, Psychological Bulletin 132(3) (PubMed)", url:"https://pubmed.ncbi.nlm.nih.gov/16719566/"}],
    checked:"2026-11"},

   {id:"noun-phrases-nominalisation", title:"Long noun phrases and nominalisation", aka:["nominalization","noun phrase","head noun","grammatical metaphor","compressed style"], tags:["academic english","grammar","reading"],
    summary:"Why academic sentences pack information into nouns, and how to unpack them: find the head noun, then turn nominalisations back into actions.",
    levels:{
     starter:[
      "Academic sentences often feel heavy because a lot of information is packed into **nouns**. “Because prices rose quickly, families bought less food” becomes “The rapid rise in prices led to a reduction in household food purchases.”",
      "Turning an action or quality into a noun is called **nominalisation** (US spelling: nominalization): *analyse* → *analysis*, *grow* → *growth*, *important* → *importance*.",
      "To understand a heavy sentence, find its **main verb**, then the **head noun** of the subject (the noun the phrase is really about). Then turn the nominalisations back into verbs and ask who did what.",
      {key:"Find the main verb, find the head noun, then unpack the nouns back into actions."},
      "Nominalisation isn’t bad: it is normal in academic English. It just takes practice to read."
     ],
     builder:[
      "A noun phrase has a **head noun** with words before it (articles, adjectives, other nouns) and words after it (prepositional phrases, relative clauses, -ing and -ed phrases).",
      {table:[["Part","Example"],["Before the head","the rapid"],["Head","growth"],["After the head","of informal settlements on the edges of large cities"]]},
      "Two rules of thumb find the head: it is usually the noun just before the first *of*, *in*, *on*, *that* or *which*; and in a stack of nouns (*rural household water use*) it is usually the last one. Read noun stacks from right to left: the use of water by households in rural areas.",
      "Writers nominalise to sum up an earlier idea (“This rise…”), to make a process the topic, to sound general and impersonal, and to pack information. The cost is that nominalisations can hide who acted: “The introduction of the fee led to a decline in enrolment” names no one.",
      {ex:"“The limited availability of reliable data on informal employment in small island states makes comparison difficult.”\nMain verb: makes. Head of the subject: availability.\nCore: “Limited availability makes comparison difficult.”\nPlain: “There is not much reliable data on informal work in small island states, so comparisons are difficult.”", label:"Worked example"},
      "When a phrase is still unclear, ask what kind of link each preposition stands for: *of* often means “belonging to” or “done to”; *on* often means “about”; *in* often marks place or the thing that changed (“an increase in prices”)."
     ],
     pro:[
      "Corpus research by Douglas Biber and Bethany Gray (2010, *Journal of English for Academic Purposes*) challenges the stereotype that academic writing is complex because of many dependent clauses. Most kinds of finite dependent clause (adverbial clauses and complement clauses such as *that*-clauses after verbs) are in fact more frequent in conversation; relative clauses are the main exception. Academic prose is complex through **phrasal compression**: noun phrases with adjectives, nouns and prepositional phrases as modifiers. This style is efficient for experts but less explicit, because the relationships between the parts (cause? purpose? location?) are left for the reader to infer.",
      "In systemic functional linguistics, M. A. K. Halliday called nominalisation a kind of **grammatical metaphor**: a process (normally a verb) is expressed as a thing (a noun). This lets writers build chains of reasoning (“Prices rose. This rise…”) and treat processes as objects that can be measured, compared and explained.",
      "For readers, the useful habit is to ask of every nominalisation: *who did this, to what, and how does it relate to the rest of the sentence?* For writers, a few nominalisations are normal and useful; overloading a sentence with them makes it heavy and vague. Unit 2 covers that side in {{concise-writing}}.",
      "Noun stacks deserve special care because English leaves their internal relationships unstated: “student support services” are services that support students, but “student protest leaders” are leaders of protests by students. Context, not grammar, decides."
     ]
    },
    related:["reading-critically-language","academic-vocabulary","concise-writing","academic-english"],
    sources:[{t:"Biber & Gray (2010), “Challenging stereotypes about academic writing: Complexity, elaboration, explicitness”, Journal of English for Academic Purposes 9(1) (DOI)", url:"https://doi.org/10.1016/j.jeap.2010.01.001"}],
    checked:"2026-11"},

   {id:"reading-critically-language", title:"Reading stance: hedges, boosters and reporting verbs", aka:["stance","metadiscourse","evaluative language","reporting verbs","hedges","boosters"], tags:["academic english","reading","critical reading"],
    summary:"How writers show how sure they are and what they think of other work, through hedges, boosters, attitude markers and reporting verbs, and how to read those signals.",
    levels:{
     starter:[
      "Academic writing isn’t neutral. Writers show how sure they are and what they think. This is their **stance**.",
      {list:["**Hedges** show caution: *may*, *suggest*, *appear to*, *in most cases*.","**Boosters** show confidence: *clearly*, *demonstrate*, *it is evident that*.","**Reporting verbs** show what the writer thinks of a source: “Lee (2020) **demonstrates**…” (the writer accepts it) versus “Lee (2020) **claims**…” (the writer keeps a distance)."]},
      "Reading these small words tells you which sources a writer trusts and how strong their own claims are. That is a big part of reading critically.",
      {key:"Notice how sure the writer is, and ask whether the evidence justifies it."},
      "Stance words are small, so they are easy to miss in an additional language. Translating them can also flatten the difference between *may* and *will*, so read them in English."
     ],
     builder:[
      "Ken Hyland’s widely cited 2005 article in *Discourse Studies* describes four main **stance** features: hedges, boosters, attitude markers (*unfortunately*, *surprisingly*, *remarkable*) and self-mention (*I*, *we*, *our*).",
      {table:[["Kind of reporting verb","Examples","Usual signal"],["Neutral","states, reports, describes, notes, observes","No judgement"],["Accepting","shows, demonstrates, establishes, confirms","Treated as true"],["Tentative","suggests, proposes, hypothesises","The source is cautious"],["Distancing","claims, alleges","Reported without acceptance; often doubted"]]},
      "*Argue* is common and fairly neutral: it presents a position that others could dispute. In some humanities fields it is the default verb. So read reporting verbs together with what follows: “X claims… However…” clearly prepares a disagreement.",
      "When you read a literature review, list who is reported with which verb. In a few sentences you will see which studies the writer relies on.",
      {ex:"Mensah (2018) **reports** that pupils in garden schools ate more vegetables, and Lee (2020) **demonstrates** a similar effect in a larger sample. Haddad (2019) **claims** that gardens also raise test scores, but this study had no comparison group. **It seems likely** that gardens improve diet; their effect on learning **remains unclear**.\n\nReading: reports = neutral; demonstrates = accepted; claims + criticism = doubted; it seems likely = hedge; remains unclear = no commitment.", label:"Worked example (invented)"},
      "Hedges also come in several grammatical forms: modal verbs (*may*, *might*, *could*), lexical verbs (*suggest*, *appear*, *seem*, *tend*), adverbs (*possibly*, *probably*, *often*), adjectives (*likely*, *possible*) and limiting phrases (*in most cases*, *to some extent*)."
     ],
     pro:[
      "Stance markers are part of what Hyland calls **metadiscourse**: language through which writers manage their relationship with readers and with their claims. His research shows that their frequency and form vary across disciplines: in his studies, “soft” fields such as philosophy and sociology used stance markers, hedges among them, more often than “hard” fields such as physics and engineering.",
      "Reporting verbs differ in what they presuppose. Verbs such as *show*, *demonstrate* and *establish* present the reported claim as true (if a writer says a study *demonstrated* X, they accept X). Verbs such as *claim* and *allege* report the claim without that commitment. Neutral verbs (*state*, *report*) leave the writer’s view open, so look elsewhere in the paragraph for it.",
      "Two cautions. First, stance words are signals, not proof: a writer who writes *clearly* may be overconfident, and a heavily hedged claim may still be important. Check the evidence. Second, conventions are not universal; reading many papers in your own field is the best guide to what its verbs and hedges normally mean. For writing with hedges and boosters, see {{hedging-and-boosting}} and {{academic-style}}; for reporting sources in your own sentences, see {{using-sources-in-language}}.",
      "Tense in reporting carries meaning too. The Academic Phrasebank notes that general references to the literature often use the present perfect (“Several studies have shown…”), specific past studies the simple past (“Lee (2020) found…”), and still-relevant ideas the present (“Lee argues…”), while stressing that these patterns are not rigid."
     ]
    },
    related:["noun-phrases-nominalisation","reading-an-article","hedging-and-boosting","using-sources-in-language","academic-style","critical-appraisal"],
    read:[{book:"phrasebank", where:"“Referring to sources” and “Being cautious”"}],
    sources:[{t:"University of Manchester: Academic Phrasebank, “Referring to sources”", url:"https://www.phrasebank.manchester.ac.uk/referring-to-sources/"},{t:"Hyland (2005), “Stance and engagement: a model of interaction in academic discourse”, Discourse Studies 7(2) (DOI)", url:"https://doi.org/10.1177/1461445605050365"},{t:"University of Alberta: Framing your research for readers (quick guide summarising Hyland 2005 on stance)", url:"https://ualberta.ca/en/centre-for-teaching-and-learning/media-library/wac/quick-guides/wacuofaframingyourresearchforreadersinteractionengagementstance.pdf"}],
    checked:"2026-11"},

   {id:"note-making", title:"Note-making: Cornell, outline and mind maps", aka:["note-taking","Cornell notes","outline notes","mind map"], tags:["academic english","study skills","reading"],
    summary:"Making notes that are selective, organised and in your own words, with three common methods and a routine that prevents patchwriting.",
    levels:{
     starter:[
      "**Note-making** means choosing the important points from a text or lecture, organising them and writing them mostly in your own words. It is more than copying, and that extra thinking is what helps you understand and remember.",
      "Three common methods:",
      {list:["**Cornell notes**: notes on the right, questions in a narrow left column added afterwards, a summary at the bottom.","**Outline notes**: main points and indented sub-points, like a numbered list.","**Mind maps**: the topic in the middle with branches for ideas and details."]},
      "Whatever method you use, write the source details first, look away from the text when you write a note, and put any exact words in quotation marks with the page number.",
      {key:"Look away, then write: notes from memory are notes in your own words."}
     ],
     builder:[
      "**Cornell notes** were developed by Walter Pauk at Cornell University in the 1950s and described in *How to Study in College* (1962). The cycle: record notes in the wide column; add cue questions in the narrow column soon afterwards; write a summary at the bottom; later, cover the notes and answer the cues aloud; reflect on what was hard and review regularly.",
      "**Outline notes** suit well-structured texts such as textbook chapters: the hierarchy of headings becomes the hierarchy of your notes.",
      "**Mind maps**, popularised by Tony Buzan in the 1970s, show connections well and suit brainstorming and revision, but show sequence less well.",
      "**Abbreviations and symbols** save time: e.g., i.e., cf., vs, → (leads to), ↑, ↓, ≈. Keep a key for any you invent.",
      "**Avoiding patchwriting:** a note that keeps the original’s sentence shape and swaps a few synonyms is a patchwrite. Writing from memory, then checking against the source, prevents it.",
      {table:[["Method","Best for"],["Cornell","Lectures and readings you will revise and self-test"],["Outline","Textbooks and well-structured articles"],["Mind map","Brainstorming, links, revision overviews"]]},
      "Many students mix methods: outline notes while reading a chapter, a mind map to review a whole unit, and Cornell pages for lectures."
     ],
     pro:[
      "Notes do two jobs: **encoding** (the processing you do while writing them) and **external storage** (a record to review later). Selective, rephrased notes help with the first; complete, accurate notes with clear source details help with the second. Good systems balance both.",
      "The Cornell cue column turns notes into **retrieval practice**: covering the notes and answering the cues is self-testing, which supports long-term memory better than re-reading. Pair it with spaced review ({{academic-vocabulary}}).",
      "For research, keep three things visibly separate in your notes: **quotations** (exact words, in quotation marks, with page), **paraphrase or summary** (the source’s ideas in your words, with citation) and **your own ideas** (marked, for example, with your initials). This prevents accidental plagiarism months later. The Research Skills track covers literature notes in {{research-notes}} and paraphrase, quotation and summary in {{quote-paraphrase-summary}}.",
      "Digital or paper? Both work. Choose what you will actually review, and make sure your notes, wherever they are, record the source details you will need to cite.",
      "Notes from AI summaries need extra care. A tool’s summary is not your own understanding, it can misstate or invent details, and copying its wording into an essay raises the same problems as copying a source. If you use one, check it against the original and still write your notes from memory; see {{ai-reading-tools}} in the Research Skills track."
     ]
    },
    related:["research-notes","quote-paraphrase-summary","plagiarism","academic-vocabulary","dictionaries-corpora"],
    read:[{book:"uefap", where:"Reading section: the pages on note taking"},{book:"owg", where:"Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"}],
    sources:[{t:"Cornellians (Cornell alumni magazine): the Cornell note-taking system and Walter Pauk", url:"https://alumni.cornell.edu/cornellians/?p=9965"},{t:"University of Wisconsin–Eau Claire: The Cornell System (adapted from Pauk, How to Study in College, PDF)", url:"https://www.uwec.edu/sites/default/files/documents/Cornell-System-Overview.pdf"}],
    checked:"2026-11"},

   {id:"dictionaries-corpora", title:"Learner dictionaries and corpus tools", aka:["learner's dictionary","corpus","corpora","concordance","SkELL","COCA"], tags:["academic english","vocabulary","tools"],
    summary:"Free learner dictionaries for meaning, grammar, collocations and pronunciation, and free corpus tools for seeing how expert writers actually use a word.",
    levels:{
     starter:[
      "A **learner dictionary** is written for people learning a language. It gives simple definitions, example sentences, grammar (is this noun countable?), collocations and pronunciation with audio. Several are free online, such as the Cambridge Dictionary, Oxford Learner’s Dictionaries, the Longman Dictionary of Contemporary English Online and Collins COBUILD.",
      "A **corpus** (plural *corpora*) is a large collection of real texts that a computer can search. A corpus tool shows you hundreds of real examples of a word, so you can see which words go with it and which prepositions follow it.",
      "Use a dictionary to learn what a word means and how to use it; use a corpus to check patterns.",
      {key:"Dictionaries tell you about a word; corpora show you the word at work."}
     ],
     builder:[
      "**Reading a learner dictionary entry:** most mark nouns countable or uncountable (often [C] and [U]) and verbs transitive or intransitive ([T], [I]); show patterns (*discuss something*, not *discuss about something*); give register labels (*formal*, *informal*); and show pronunciation in IPA, with ˈ before the stressed syllable. Symbols differ a little between dictionaries, so check each one’s key.",
      "**Bilingual versus monolingual:** a bilingual dictionary or translation tool gives a quick first meaning; a monolingual learner dictionary shows how the word behaves in English.",
      "**Concordances:** the basic corpus view lists every example of a word on its own line, with the word in the middle (sometimes called KWIC, key word in context). Reading down the lines reveals patterns such as *impact on* and *the impact of*.",
      "**Free tools (as of November 2026):** **SkELL** (skell.sketchengine.eu) is free with no registration and shows example sentences, a word sketch of typical collocations, and similar words. **English-Corpora.org** hosts COCA and other corpora with free basic access (20 searches a day) and paid licences for more; COCA’s academic section shows academic usage specifically.",
      "**A routine for an unfamiliar word:** guess from context; check the learner dictionary for meaning, grammar and collocations; if you need to use the word, check its patterns in a corpus; then write your own sentence and put the word on a review card."
     ],
     pro:[
      "Corpus-based dictionaries and word lists changed English teaching: definitions and examples now come from real usage rather than from lexicographers’ intuition alone, and lists such as the AWL and AVL are corpus-derived. The same tools are open to learners.",
      "Good corpus habits: search for the **lemma** or a word stem, not just one form; look at the most frequent patterns, not single striking examples; compare sections (academic versus fiction or news) where the tool allows; and remember each corpus reflects its sources. COCA is American English; SkELL’s English corpus mixes many kinds of text (web pages, news, forums, academic papers and more), so check academic usage against academic texts in your field.",
      "SkELL is a free, simplified interface to the commercial Sketch Engine; English-Corpora.org was created by Mark Davies, co-author of the Academic Vocabulary List. Free limits and features change, so check the sites’ own pages.",
      "Use corpus evidence for **patterns**, not sentences: copying a corpus sentence into an essay would still be copying. Note the pattern (*have an impact on*), then write your own sentence.",
      "Dictionaries and corpora sometimes disagree with what a teacher or a style guide prefers, because they describe how people do write, not how they should. For academic writing, prefer examples from academic sections or academic corpora, and follow your institution’s or journal’s style guide where it makes a rule."
     ]
    },
    related:["academic-vocabulary","note-making","reading-strategies-eap"],
    sources:[{t:"Sketch Engine: SkELL, examples, collocations and thesaurus", url:"https://sketchengine.eu/skell"},{t:"English-Corpora.org: limits for basic and licensed access", url:"https://www.english-corpora.org/limits.asp"},{t:"Oxford Learner’s Dictionaries: about OPAL (Oxford Phrasal Academic Lexicon)", url:"https://www.oxfordlearnersdictionaries.com/about/wordlists/opal"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"english-for-academic-purposes", term:"English for Academic Purposes (EAP)", def:"Teaching and learning the English people need for study and research: reading academic texts, writing essays and reports, following lectures and taking part in seminars.", codex:"academic-english"},
   {id:"lingua-franca", term:"Lingua franca", def:"A language used for communication between people who don’t share a first language. English plays this role in much international research.", codex:"academic-english"},
   {id:"cefr", term:"CEFR", def:"The Common European Framework of Reference for Languages, from the Council of Europe. It describes language ability in six levels: A1–A2 (basic user), B1–B2 (independent user) and C1–C2 (proficient user).", codex:"academic-english"},
   {id:"genre-academic", term:"Genre (academic)", def:"A type of text that a community uses repeatedly for a shared purpose, so it has a typical shape and typical language, such as the research article, the report or the abstract.", codex:"academic-english"},
   {id:"skimming", term:"Skimming", def:"Reading quickly and selectively (title, abstract, headings, first and last paragraphs, first sentences) to get the main idea of a text.", codex:"reading-strategies-eap"},
   {id:"scanning", term:"Scanning", def:"Searching a text quickly for one specific piece of information, such as a number, name or definition, without reading the rest.", codex:"reading-strategies-eap"},
   {id:"intensive-reading", term:"Intensive reading", def:"Reading slowly and carefully to understand every point of a passage, often more than once.", codex:"reading-strategies-eap"},
   {id:"word-family", term:"Word family", def:"A base word with its inflected forms and the words derived from it, such as analyse, analysis, analyst, analytical and analytically.", codex:"academic-vocabulary"},
   {id:"lemma", term:"Lemma", def:"A headword and its inflected forms with the same part of speech, such as analyse, analyses, analysed and analysing. Dictionaries are usually organised by lemma.", codex:"academic-vocabulary"},
   {id:"collocation", term:"Collocation", def:"Words that go together more often than chance would predict and sound natural to expert users, such as conduct research or a significant difference.", codex:"academic-vocabulary"},
   {id:"academic-word-list", term:"Academic Word List (AWL)", def:"Averil Coxhead’s list (2000) of 570 word families common across academic texts in many fields, excluding the 2,000 most frequent general English words.", codex:"academic-vocabulary"},
   {id:"academic-vocabulary-list", term:"Academic Vocabulary List (AVL)", def:"Dee Gardner and Mark Davies’s list (2014) of about 3,000 core academic lemmas, built from the 120-million-word academic part of the Corpus of Contemporary American English.", codex:"academic-vocabulary"},
   {id:"spaced-review", term:"Spaced review", def:"Reviewing material at growing intervals (for example after one day, three days, a week) and testing yourself each time, instead of studying it all at once.", codex:"academic-vocabulary"},
   {id:"nominalisation", term:"Nominalisation", def:"Expressing an action or quality as a noun, such as analyse → analysis or important → importance. US spelling: nominalization.", codex:"noun-phrases-nominalisation"},
   {id:"noun-phrase", term:"Noun phrase", def:"A group of words built around one main noun (the head noun), such as “the rapid growth of informal settlements”, where the head is growth.", codex:"noun-phrases-nominalisation"},
   {id:"stance", term:"Stance", def:"How a writer shows how certain they are about a claim and what they think of it, for example through hedges, boosters, attitude markers and reporting verbs.", codex:"reading-critically-language"},
   {id:"reporting-verb", term:"Reporting verb", def:"A verb used to report what a source says or found, such as states, shows, suggests or claims. The choice often shows what the writer thinks of the source.", codex:"reading-critically-language"},
   {id:"note-making", term:"Note-making", def:"Selecting the important points from a text or lecture, organising them and writing them mostly in your own words, rather than copying.", codex:"note-making"},
   {id:"cornell-notes", term:"Cornell notes", def:"A note-making method developed by Walter Pauk: notes in a wide column, cue questions in a narrow left column added afterwards, and a summary at the bottom of the page.", codex:"note-making"},
   {id:"outline-notes", term:"Outline notes", def:"Notes arranged as a hierarchy of main points and indented, often numbered, sub-points.", codex:"note-making"},
   {id:"mind-map", term:"Mind map", def:"A diagram with the main topic in the centre and branches for ideas and details, good for showing connections.", codex:"note-making"},
   {id:"learner-dictionary", term:"Learner dictionary", def:"A dictionary written for people learning a language, with simple definitions, example sentences, grammar information, collocations and pronunciation.", codex:"dictionaries-corpora"},
   {id:"corpus-language", term:"Corpus (plural: corpora)", def:"A large collection of real texts stored so a computer can search it, used to see how words are actually used.", codex:"dictionaries-corpora"},
   {id:"concordance", term:"Concordance", def:"A list of every example of a word in a corpus, each shown on one line with the word in the middle and its context on either side.", codex:"dictionaries-corpora"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e1u1-q01", lesson:"e1u1-l1", level:1, q:"What does EAP stand for?", options:[
     {t:"English for Academic Purposes", ok:true, why:"EAP is the teaching and learning of English for study and research."},
     {t:"English as an Additional Practice", why:"Not a real term. The A stands for Academic, the P for Purposes."},
     {t:"Exam of Academic Proficiency", why:"EAP is a field of teaching, not an exam."},
     {t:"European Academic Programme", why:"EAP isn’t tied to Europe and isn’t a single programme."}]},
   {id:"e1u1-q02", lesson:"e1u1-l1", level:2, q:"Which sentence best shows typical features of academic English?", options:[
     {t:"Rapid urbanisation has placed considerable pressure on housing supply in many low-income countries.", ok:true, why:"It is precise, compact (“rapid urbanisation” packs a whole clause) and careful (“in many low-income countries”, not everywhere)."},
     {t:"Loads of people are moving to cities and it’s a total disaster for housing.", why:"“Loads of”, “total disaster” and the contraction make this informal and overstated."},
     {t:"Cities are getting bigger everywhere and nobody can find a house.", why:"“Everywhere” and “nobody” overgeneralise; academic English limits claims to what evidence supports."},
     {t:"The utilisation of metropolitan agglomerations is indubitably catastrophic.", why:"Long words alone don’t make good academic English; this is vague and overclaimed (“indubitably catastrophic”)."}]},
   {id:"e1u1-q03", lesson:"e1u1-l1", level:1, q:"What is a lingua franca?", options:[
     {t:"A language used between people who don’t share a first language", ok:true, why:"That is the meaning. English plays this role in much international research."},
     {t:"The language of France", why:"Despite the name, a lingua franca can be any shared language; the term is not about French."},
     {t:"A simplified language with no grammar", why:"A lingua franca is a full language used for shared communication."},
     {t:"The official language of a university", why:"An institution’s official language may or may not be a lingua franca. The term is about communication between speakers of different first languages."}]},
   {id:"e1u1-q04", lesson:"e1u1-l1", level:2, q:"Sione writes “colour” on page 1 of his essay and “color” on page 4. His university has no spelling rule. What is the problem?", options:[
     {t:"The spelling is inconsistent; he should choose one system and use it throughout.", ok:true, why:"Both spellings are correct, but mixing them looks careless. Consistency is the rule."},
     {t:"“Colour” is wrong in academic writing.", why:"British spelling is fully accepted in academic writing, as is American spelling."},
     {t:"“Color” is wrong in academic writing.", why:"American spelling is fully accepted too. The issue is mixing the two."},
     {t:"There is no problem; mixing spellings is normal.", why:"Readers notice inconsistency. Choose one system for your own text."}]},
   {id:"e1u1-q05", lesson:"e1u1-l1", level:1, q:"What are CEFR levels B1 and B2 called?", options:[
     {t:"Independent user", ok:true, why:"The CEFR groups B1–B2 as independent user, between basic (A1–A2) and proficient (C1–C2)."},
     {t:"Basic user", why:"Basic user is A1–A2."},
     {t:"Proficient user", why:"Proficient user is C1–C2."},
     {t:"Native speaker", why:"The CEFR doesn’t use native speaker as a level; it describes what learners can do."}]},
   {id:"e1u1-q06", lesson:"e1u1-l1", level:2, q:"Mei is shown a document called the BALEAP Can Do Framework. What will she find in it?", options:[
     {t:"Statements of what students need to be able to do in English at postgraduate level in UK universities, grouped by reading, writing, listening and speaking", ok:true, why:"Right. It describes academic abilities and is used to plan EAP courses; it is not a test."},
     {t:"An English test with a score from 0 to 9", why:"It isn’t a test and has no scores."},
     {t:"A list of 570 academic word families", why:"That is the Academic Word List, a different resource."},
     {t:"Rules for American and British spelling", why:"The framework is about academic abilities, not spelling."}]},
   {id:"e1u1-q07", lesson:"e1u1-l1", level:3, q:"Oluwaseun reads: “Recommendation 2: The ministry should train 500 additional community health workers by 2028.” Which genre is this most likely from, and why?", options:[
     {t:"A report, because reports give recommendations to decision-makers", ok:true, why:"A numbered recommendation addressed to a decision-maker is typical of a report."},
     {t:"A textbook, because it explains a concept to students", why:"It doesn’t explain a concept; it recommends an action."},
     {t:"An abstract, because it summarises a study", why:"An abstract summarises purpose, method and findings; it doesn’t usually issue numbered recommendations."},
     {t:"A student essay, because it argues a position", why:"Essays argue a thesis; a numbered recommendation to a ministry is a report convention."}]},
   {id:"e1u1-q08", lesson:"e1u1-l1", level:1, q:"Which genre is mainly written by experts to teach a field to students, with definitions, examples and review questions?", options:[
     {t:"Textbook", ok:true, why:"Textbooks teach; they define terms, give examples and often end chapters with questions."},
     {t:"Research article", why:"Research articles report new research to other researchers."},
     {t:"Report", why:"Reports inform decisions, often with recommendations."},
     {t:"Abstract", why:"An abstract summarises a single paper in one paragraph."}]},
   {id:"e1u1-q09", lesson:"e1u1-l1", level:3, q:"Ana says: “I can’t start reading research articles until my grammar is perfect.” What is the most helpful response?", options:[
     {t:"Reading is one of the main ways you learn academic grammar and vocabulary, so start now with texts a little above your level.", ok:true, why:"Grammar and vocabulary grow through reading; waiting for perfection delays the main source of learning."},
     {t:"She’s right: research articles are only for people with perfect grammar.", why:"Most readers of academic English learned it as an additional language and are still learning."},
     {t:"She should read only textbooks written for children first.", why:"Simpler texts can help as background, but academic reading itself is how academic language is learned."},
     {t:"She should translate every article fully before reading it.", why:"Translation can check difficult sentences, but replacing reading with translation slows learning of the English."}]},
   /* ---- Lesson 2 ---- */
   {id:"e1u1-q10", lesson:"e1u1-l2", level:1, q:"What is scanning?", options:[
     {t:"Searching a text quickly for one specific piece of information", ok:true, why:"Scanning targets one thing, such as a number, name or definition."},
     {t:"Reading every sentence slowly and carefully", why:"That is intensive reading."},
     {t:"Reading headings and first sentences for the main idea", why:"That is skimming."},
     {t:"Copying a text into your notes", why:"That isn’t a reading strategy at all."}]},
   {id:"e1u1-q11", lesson:"e1u1-l2", level:2, q:"Kenji must decide by tomorrow which of 20 articles to read for his essay. Which strategy should he use first?", options:[
     {t:"Skim the titles and abstracts of all 20", ok:true, why:"Skimming shows the main idea of each quickly, so he can choose the few worth reading closely."},
     {t:"Read the first article intensively", why:"He would spend his time on one article that may not even be relevant."},
     {t:"Scan each article for the word “essay”", why:"Searching for one word won’t tell him whether an article fits his question."},
     {t:"Read all 20 intensively", why:"That isn’t possible in the time, and isn’t needed to decide relevance."}]},
   {id:"e1u1-q12", lesson:"e1u1-l2", level:1, q:"When skimming an academic paragraph, which sentence is often most useful to read?", options:[
     {t:"The first sentence, which is often the topic sentence", ok:true, why:"In much academic writing, the first sentence states the paragraph’s main point."},
     {t:"The longest sentence", why:"Length doesn’t show importance; long sentences are often detail."},
     {t:"The sentence with the most numbers", why:"Numbers are details; useful when scanning, not for the main idea."},
     {t:"Any sentence in the middle", why:"Middle sentences usually support the main point rather than state it."}]},
   {id:"e1u1-q13", lesson:"e1u1-l2", level:2, q:"According to Schmitt, Jiang and Grabe (2011), about what share of the words in an academic text should a reader know for comfortable reading?", options:[
     {t:"About 98%", ok:true, why:"They concluded 98% (one unknown word in fifty) is a reasonable target for academic texts."},
     {t:"About 50%", why:"With half the words unknown, a text would be almost impossible to follow."},
     {t:"About 80%", why:"At 80%, one word in five is unknown: far too many for comfortable reading."},
     {t:"Exactly 100%; any unknown word blocks understanding", why:"They found comprehension rises gradually; readers can understand texts with a few unknown words."}]},
   {id:"e1u1-q14", lesson:"e1u1-l2", level:2, q:"“*Pulses*, such as lentils, chickpeas and beans, are an important source of protein.” Which context clue helps you guess what *pulses* means?", options:[
     {t:"An example clue: “such as” introduces examples", ok:true, why:"The examples (lentils, chickpeas, beans) show that pulses are edible seeds of this kind."},
     {t:"A contrast clue: “such as” signals the opposite", why:"“Such as” introduces examples, not a contrast."},
     {t:"A word-part clue: the prefix “pul-”", why:"“Pul-” is not a prefix with a useful meaning here."},
     {t:"There is no clue; you must use a dictionary", why:"The examples give a strong clue, so you can guess first."}]},
   {id:"e1u1-q15", lesson:"e1u1-l2", level:2, q:"Lucía wants to know what a study found and what the authors think it means. In an IMRaD article, where should she look?", options:[
     {t:"The results and the discussion", ok:true, why:"Results report what was found; the discussion interprets it."},
     {t:"The methods only", why:"Methods describe how the study was done, not what it found."},
     {t:"The reference list", why:"References list sources the authors cited, not their findings."},
     {t:"The title only", why:"A title rarely gives the findings and never the full interpretation."}]},
   {id:"e1u1-q16", lesson:"e1u1-l2", level:1, q:"Which phrase most likely signals a **gap** in previous research?", options:[
     {t:"However, little is known about…", ok:true, why:"“Little is known” points to something not yet researched: the gap the study will fill."},
     {t:"Participants were recruited from…", why:"This describes the method."},
     {t:"Table 2 shows…", why:"This points to results."},
     {t:"In conclusion,…", why:"This signals a conclusion, not a gap."}]},
   {id:"e1u1-q17", lesson:"e1u1-l2", level:3, q:"Priya searches a PDF for “migrant” and gets no results, though the report is about migration. What is the best next step?", options:[
     {t:"Search for a shorter stem such as “migra” and for related words such as “refugee” or “mobility”", ok:true, why:"A stem finds migration, migrants and migratory, and synonyms catch other wordings."},
     {t:"Decide the report has nothing about migrants", why:"Too early: the report may use other forms or other words."},
     {t:"Read the whole report intensively", why:"That takes far longer than trying better search terms first."},
     {t:"Search for “the”", why:"That would match almost every line and find nothing useful."}]},
   {id:"e1u1-q18", lesson:"e1u1-l2", level:3, q:"Hana skims an abstract that says a new teaching method “greatly improves” results, and she wants to cite this in her essay. What should she do next?", options:[
     {t:"Read the methods and results closely to check the evidence before relying on the claim", ok:true, why:"An abstract is the authors’ own summary and may overstate; close reading checks whether the evidence supports it."},
     {t:"Cite the claim as proven, since abstracts are checked by experts", why:"Peer review doesn’t guarantee an abstract’s wording is fully supported. Check the evidence."},
     {t:"Ignore the article, because abstracts always exaggerate", why:"Not always. The answer is to check, not to dismiss."},
     {t:"Copy the abstract into her essay", why:"That would be copying text without checking it, and without her own words."}]},
   /* ---- Lesson 3 ---- */
   {id:"e1u1-q19", lesson:"e1u1-l3", level:1, q:"How many word families are on the Academic Word List (Coxhead 2000)?", options:[
     {t:"570", ok:true, why:"The AWL has 570 families in 10 sublists."},
     {t:"2,000", why:"2,000 is the size of the general word list (West’s GSL) that the AWL excluded."},
     {t:"3,000", why:"About 3,000 lemmas is the core of the Academic Vocabulary List."},
     {t:"60", why:"60 is the size of each of sublists 1–9."}]},
   {id:"e1u1-q20", lesson:"e1u1-l3", level:1, q:"What is a collocation?", options:[
     {t:"Words that often go together and sound natural to expert users, such as “conduct research”", ok:true, why:"Collocations are frequent, natural combinations."},
     {t:"A word with the same meaning as another", why:"That is a synonym."},
     {t:"A word made from another by adding a suffix", why:"That is a derived form, part of a word family."},
     {t:"A grammar rule about word order", why:"Collocations are about which words go together, not grammar rules."}]},
   {id:"e1u1-q21", lesson:"e1u1-l3", level:2, q:"Which sentence uses the correct word?", options:[
     {t:"The government’s economic policy changed after the election.", ok:true, why:"*Economic* means relating to the economy: economic policy."},
     {t:"The government’s economical policy changed after the election.", why:"*Economical* means saving money or fuel; “economical policy” would mean a cheap policy."},
     {t:"This historical agreement ended a long war.", why:"An agreement that is important in history is *historic*. *Historical* means relating to the past."},
     {t:"The new car is very economic: it uses little fuel.", why:"Using little fuel is *economical*, not *economic*."}]},
   {id:"e1u1-q22", lesson:"e1u1-l3", level:2, q:"Tomás writes: “We made a research on water use.” Which correction uses a standard collocation?", options:[
     {t:"We conducted research on water use.", ok:true, why:"*Conduct research* (or *carry out* or *do research*) is standard; *research* is also usually uncountable, so no “a”."},
     {t:"We made researches on water use.", why:"*Make* doesn’t collocate with research, and *researches* is unusual in this sense."},
     {t:"We did a research on water use.", why:"*Do research* is fine, but *research* is usually uncountable, so “a research” is not standard."},
     {t:"We produced a research about water use.", why:"*Produce* doesn’t collocate naturally here, and “a research” is not standard."}]},
   {id:"e1u1-q23", lesson:"e1u1-l3", level:2, q:"Which sentence says that poverty causes poor health?", options:[
     {t:"Poor health can result from poverty.", ok:true, why:"*Y results from X* means X causes Y: poverty causes poor health."},
     {t:"Poor health can result in poverty.", why:"This says poor health causes poverty: the reverse."},
     {t:"Poverty can result from poor health.", why:"This also says poor health causes poverty."},
     {t:"Poverty can result to poor health.", why:"“Result to” isn’t standard English; use *result in* or *result from*."}]},
   {id:"e1u1-q24", lesson:"e1u1-l3", level:1, q:"How does the Academic Vocabulary List (Gardner & Davies 2014) mainly differ from the Academic Word List?", options:[
     {t:"It was built from a much larger corpus (about 120 million words) and counts lemmas rather than word families.", ok:true, why:"The AVL used COCA’s academic texts and lemmas; the AWL used 3.5 million words and families."},
     {t:"It is older, from 1953.", why:"1953 is West’s General Service List. The AVL is from 2014."},
     {t:"It contains only technical words for science.", why:"Like the AWL, it lists words common across many disciplines."},
     {t:"It is a list of phrases only.", why:"The AVL is a word list. OPAL includes phrase lists."}]},
   {id:"e1u1-q25", lesson:"e1u1-l3", level:3, q:"Fatima plans to learn the AWL by reading it alphabetically, ten words a day, once each. What is the best advice?", options:[
     {t:"Find the words she doesn’t know, learn them in context with their collocations, and review them at growing intervals.", ok:true, why:"Context, collocations and spaced retrieval make words usable and memorable."},
     {t:"Her plan is ideal: one reading per word is enough.", why:"A single exposure is rarely enough; spaced review is needed."},
     {t:"Learn the list in one weekend by repeating it many times.", why:"Cramming helps briefly; spaced review works better for long-term memory."},
     {t:"Skip the list; academic words aren’t worth learning.", why:"Academic words appear in every field; the list is a useful guide when used well."}]},
   {id:"e1u1-q26", lesson:"e1u1-l3", level:2, q:"In a Leitner box system, what happens to a card you forget?", options:[
     {t:"It goes back to box 1, so you review it soon.", ok:true, why:"Forgotten cards restart, so you see them often until you know them."},
     {t:"It moves to the next box.", why:"That happens to cards you remember."},
     {t:"It is thrown away.", why:"Forgotten cards need more practice, not less."},
     {t:"It stays in the same box forever.", why:"Cards move: back to box 1 when forgotten, forward when remembered."}]},
   {id:"e1u1-q27", lesson:"e1u1-l3", level:3, q:"Dmitri, a law student, finds that many words in his textbook (*tort*, *plaintiff*, *jurisdiction*) are not on the Academic Word List. Why?", options:[
     {t:"They are technical words of one field, and the AWL only includes words common across many fields.", ok:true, why:"The AWL selected families used across arts, commerce, law and science; field-specific terms come from your subject."},
     {t:"The AWL leaves out all words longer than eight letters.", why:"There is no length rule; selection was by range and frequency."},
     {t:"Law texts were not included in the AWL corpus.", why:"Law was one of the four fields in Coxhead’s corpus."},
     {t:"These words are too common to be on the list.", why:"They are specialist, not common; the AWL excluded very common general words."}]},
   /* ---- Lesson 4 ---- */
   {id:"e1u1-q28", lesson:"e1u1-l4", level:1, q:"What is nominalisation?", options:[
     {t:"Expressing an action or quality as a noun, such as analyse → analysis", ok:true, why:"Turning verbs or adjectives into nouns is nominalisation."},
     {t:"Naming the author of a source", why:"That is citation, not nominalisation."},
     {t:"Turning a noun into a verb", why:"That is the opposite direction."},
     {t:"Using names of people as examples", why:"Nominalisation is a grammar process, not about personal names."}]},
   {id:"e1u1-q29", lesson:"e1u1-l4", level:2, q:"What is the head noun in “the limited availability of reliable data on informal employment”?", options:[
     {t:"availability", ok:true, why:"It comes just before the first “of”; the phrase is about availability."},
     {t:"data", why:"*Data* is inside the post-modifier “of reliable data…”: it says what is (not) available."},
     {t:"employment", why:"*Employment* is deep in the phrase, inside “on informal employment”."},
     {t:"limited", why:"*Limited* is an adjective describing the head."}]},
   {id:"e1u1-q30", lesson:"e1u1-l4", level:2, q:"In the noun stack “rural household water use”, what is the head noun?", options:[
     {t:"use", ok:true, why:"In a stack of nouns, the last noun is usually the head: the use of water by rural households."},
     {t:"rural", why:"*Rural* is an adjective at the start of the stack."},
     {t:"household", why:"*Household* modifies what follows; it says whose water use."},
     {t:"water", why:"*Water* says what kind of use; the head is *use*."}]},
   {id:"e1u1-q31", lesson:"e1u1-l4", level:1, q:"Which word is a booster?", options:[
     {t:"clearly", ok:true, why:"*Clearly* shows the writer is certain."},
     {t:"may", why:"*May* is a hedge: it shows caution."},
     {t:"possibly", why:"*Possibly* is a hedge."},
     {t:"appears", why:"*Appears* presents a claim as how things seem: a hedge."}]},
   {id:"e1u1-q32", lesson:"e1u1-l4", level:3, q:"A review says: “Lee (2020) demonstrates that the programme reduced costs, while Park (2019) claims it also improved quality.” What can you infer about the writer’s view?", options:[
     {t:"The writer accepts Lee’s finding but keeps a distance from Park’s claim.", ok:true, why:"*Demonstrates* presents the finding as established; *claims* reports without accepting."},
     {t:"The writer trusts both studies equally.", why:"Different verbs send different signals: *demonstrates* accepts, *claims* distances."},
     {t:"The writer doubts Lee and trusts Park.", why:"It’s the other way round."},
     {t:"Reporting verbs carry no information about the writer’s view.", why:"They often do; the choice of verb is a key stance signal."}]},
   {id:"e1u1-q33", lesson:"e1u1-l4", level:2, q:"Which reporting verb is usually **neutral**?", options:[
     {t:"describes", ok:true, why:"*Describes* reports what a source contains without judging it."},
     {t:"alleges", why:"*Alleges* signals doubt."},
     {t:"demonstrates", why:"*Demonstrates* signals that the writer accepts the claim."},
     {t:"claims", why:"*Claims* usually signals distance."}]},
   {id:"e1u1-q34", lesson:"e1u1-l4", level:2, q:"Which plain version keeps the meaning of “The rapid rise in prices led to a reduction in food purchases”?", options:[
     {t:"Because prices rose quickly, people bought less food.", ok:true, why:"*Rise* → rose, *reduction in purchases* → bought less, and *led to* → because. The cause stays first."},
     {t:"Because people bought less food, prices rose quickly.", why:"This reverses cause and effect."},
     {t:"Prices rose quickly, and people bought more food.", why:"A *reduction* means less, not more."},
     {t:"Prices fell quickly, so people bought less food.", why:"A *rise* means prices went up."}]},
   {id:"e1u1-q35", lesson:"e1u1-l4", level:3, q:"Sione reads: “These results clearly prove that the drug works for everyone.” The study had 30 participants. What is the best critical reading?", options:[
     {t:"The boosters (“clearly prove”, “everyone”) claim more than a 30-person study can support.", ok:true, why:"Strong boosters need strong evidence. A small study rarely proves anything for everyone."},
     {t:"The claim must be right, because the writer is confident.", why:"Confidence is a signal to check, not evidence."},
     {t:"The sentence is well hedged.", why:"It has no hedges; “clearly prove” and “everyone” are boosters."},
     {t:"Boosters are never allowed in academic writing.", why:"Boosters are fine when evidence is strong; here they overreach."}]},
   {id:"e1u1-q36", lesson:"e1u1-l4", level:1, q:"According to Biber and Gray (2010), what mainly makes academic writing complex?", options:[
     {t:"Compressed noun phrases that pack in information", ok:true, why:"They found academic writing relies on phrasal compression rather than many dependent clauses."},
     {t:"Many more dependent clauses than conversation", why:"They found most kinds of finite dependent clause are more common in conversation."},
     {t:"Very long words", why:"Their point is about grammar (noun phrases), not word length."},
     {t:"Frequent use of slang", why:"Slang is rare in academic writing."}]},
   /* ---- Lesson 5 ---- */
   {id:"e1u1-q37", lesson:"e1u1-l5", level:1, q:"In Cornell notes, when do you fill in the narrow cue column?", options:[
     {t:"Soon afterwards, with questions and key words", ok:true, why:"Pauk advised leaving it empty during note-taking and adding cues soon afterwards."},
     {t:"Before the lecture, with the date only", why:"The cue column is for questions and key words added after."},
     {t:"During the lecture, with full sentences", why:"Notes go in the wide column during the lecture."},
     {t:"Never: it stays empty", why:"The cues are what make the method a self-test."}]},
   {id:"e1u1-q38", lesson:"e1u1-l5", level:1, q:"What is a mind map especially good at showing?", options:[
     {t:"Connections between ideas", ok:true, why:"Branches from a central topic show how ideas link."},
     {t:"The exact order of steps in a process", why:"Mind maps show sequence less well than outlines or numbered lists."},
     {t:"Exact quotations with page numbers", why:"Any method can hold quotations; it isn’t what mind maps are best at."},
     {t:"Statistical results", why:"Mind maps organise ideas; they aren’t designed for numbers."}]},
   {id:"e1u1-q39", lesson:"e1u1-l5", level:3, q:"Kenji’s note reads: “Urban gardens give residents fresh produce, chances for physical activity and a place for social interaction.” The original said: “Urban gardens provide residents with fresh produce, opportunities for physical activity and a space for social interaction.” What is the problem?", options:[
     {t:"It is patchwriting: the structure and most phrases are copied with a few synonyms swapped.", ok:true, why:"Swapping a few words keeps the original’s wording and shape. He should look away and write from memory."},
     {t:"There is no problem; he changed several words.", why:"Changing a few words isn’t enough to make a note his own."},
     {t:"The note is too short.", why:"Length isn’t the issue; copying is."},
     {t:"He should have used more synonyms.", why:"More synonyms would still be patchwriting. Rewrite from understanding, not word by word."}]},
   {id:"e1u1-q40", lesson:"e1u1-l5", level:2, q:"Which step most directly helps you write notes in your own words?", options:[
     {t:"Look away from the source and write the idea from memory, then check it", ok:true, why:"Writing from memory forces your own words and structure; checking catches errors and copied phrases."},
     {t:"Keep the source open and change every third word", why:"That produces patchwriting."},
     {t:"Copy the sentence and add quotation marks later", why:"Quotation marks added later are easily forgotten; copy quotations with marks from the start."},
     {t:"Use a synonym tool to rewrite the sentence", why:"Automatic synonym swapping produces patchwriting, and often changes the meaning."}]},
   {id:"e1u1-q41", lesson:"e1u1-l5", level:1, q:"In many learner dictionaries, what does [U] next to a noun mean?", options:[
     {t:"Uncountable: no plural and no “a/an”", ok:true, why:"For example, *information* [U]: some information, not an information."},
     {t:"Unusual: rarely used", why:"[U] is a grammar code, not a frequency label."},
     {t:"Used only in the United States", why:"Regional labels are written as words (for example US or UK), not [U]."},
     {t:"Uppercase: always starts with a capital letter", why:"[U] marks uncountable nouns."}]},
   {id:"e1u1-q42", lesson:"e1u1-l5", level:2, q:"Which sentence is correct?", options:[
     {t:"This chapter discusses the causes of inflation.", ok:true, why:"*Discuss* is transitive: it takes a direct object with no preposition."},
     {t:"This chapter discusses about the causes of inflation.", why:"*Discuss* doesn’t take *about*. (The noun can: “a discussion about…”.)"},
     {t:"This chapter discusses on the causes of inflation.", why:"*Discuss* takes no preposition at all."},
     {t:"This chapter discusses for the causes of inflation.", why:"*Discuss* takes its object directly."}]},
   {id:"e1u1-q43", lesson:"e1u1-l5", level:3, q:"Amara isn’t sure which preposition follows *impact* in academic writing. Which approach gives her the most reliable answer?", options:[
     {t:"Search *impact* in a corpus tool and look at the most frequent patterns", ok:true, why:"A corpus shows many real examples, so the common pattern (*impact on*) stands out."},
     {t:"Choose the preposition that sounds best to her", why:"Intuition in an additional language can mislead; check real usage."},
     {t:"Use the first preposition a translation app gives", why:"Translation tools may follow the patterns of her first language."},
     {t:"Avoid the word *impact* completely", why:"It is a useful word; checking its pattern is easy."}]},
   {id:"e1u1-q44", lesson:"e1u1-l5", level:1, q:"What is a concordance?", options:[
     {t:"A list of a word’s examples from a corpus, one per line, with the word in the middle and context either side", ok:true, why:"This key-word-in-context view shows patterns quickly."},
     {t:"An agreement between two authors", why:"In everyday English concordance can mean agreement, but in corpus work it is a list of examples."},
     {t:"A dictionary of synonyms", why:"That is a thesaurus."},
     {t:"A list of a book’s chapters", why:"That is a table of contents."}]},
   {id:"e1u1-q45", lesson:"e1u1-l5", level:2, q:"Which description of SkELL is accurate as of November 2026?", options:[
     {t:"A free corpus tool with no registration that shows example sentences, a word sketch of collocations and similar words", ok:true, why:"That is what the SkELL page describes."},
     {t:"A paid dictionary app for American English only", why:"SkELL is free and is not a dictionary app."},
     {t:"A list of 570 academic word families", why:"That is the Academic Word List."},
     {t:"A grammar checker for essays", why:"SkELL shows how words are used; it doesn’t check your text."}]}
  ]
});
