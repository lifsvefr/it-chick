/* Research Skills · Unit 1 · How research works */
ICA.addUnit({
  id:"t4u1", track:"t4", n:1, title:"How research works", icon:"🔬",
  blurb:"What research is, the kinds of sources it produces, how journals and peer review work, why some papers are free and others cost money, and how to judge whether a scholarly source deserves your trust.",
  goals:[
    "Explain what makes research systematic, and recognise research in many fields, not only laboratories",
    "Classify sources as primary, secondary or tertiary for a given question, and as scholarly, popular, trade or grey literature",
    "Describe the path of a paper from submission to publication, what peer review checks and what it can’t",
    "Tell the open access routes and the versions of a paper apart, and find legal free copies",
    "Check a journal for warning signs of predatory publishing, and check whether a paper has been corrected or retracted"
  ],
  read:[
    {book:"acrl", where:"The six frames, especially “Research as Inquiry”, “Scholarship as Conversation”, “Information Creation as a Process”, “Information Has Value” and “Authority Is Constructed and Contextual”", note:"Written for teachers, so read it after the lessons. Each frame is a one-paragraph definition followed by lists of practices and dispositions."},
    {book:"bhatt", where:"Chapter 1, “Science and Scientific Research”, and Chapter 3, “The Research Process”", note:"Background reading from a social science point of view. Published in 2012, before preprints and open access became as common as they are now; the lessons cover those changes."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u1-l1", title:"What research is", minutes:45,
   hook:{q:"Fatima reads twenty websites about solar panels and writes a careful summary for her family. A university team installs panels on 200 homes, measures their output for two years and publishes the method and data. Which of these is research?", options:["Only the university team’s","Only Fatima’s, because she read more sources","Both, in different senses of the word","Neither, because neither was a laboratory experiment"], answer:2, reveal:"**Both, in different senses.** Fatima did research in the everyday sense: finding out what is already known. The team did research in the academic sense: creating new knowledge with a systematic method and sharing it so others can check it. This lesson is about that second sense, and why it matters even when you only ever do the first."},
   goals:[
     "Tell everyday “looking things up” from systematic research that creates new knowledge",
     "Describe the research cycle and the idea of scholarship as a conversation",
     "Recognise empirical and non-empirical, basic and applied research in many fields",
     "Correct common misconceptions, such as “research proves” and “one study settles it”"
   ],
   learn:[
    {h:"Two meanings of “research”", body:[
      {lead:"People use the word “research” for two quite different activities, and mixing them up causes a lot of confusion."},
      "In everyday speech, research means **finding out what is already known**: comparing phones before buying one, reading about a diagnosis, checking a company before a job interview. Students do this when they gather sources for an essay. It’s a real skill, and Units 2–5 of this track teach it properly.",
      "In universities, hospitals, government agencies and many workplaces, [[research-term|research]] usually means something narrower: **systematic inquiry that creates new knowledge and shares it so others can check it.**",
      "Think of a city map that many surveyors draw together. Looking up the map is everyday research. Walking a street nobody has measured, recording how you measured it and adding it to the shared map for others to verify is research in the academic sense.",
      {table:[
        ["","Everyday research","Systematic research"],
        ["Goal","Learn what others already know","Add something new to what is known"],
        ["Method","Search, read, compare","A stated method chosen to fit the question"],
        ["Output","Notes, a decision, a summary","A paper, report, book, dataset or other output that others can examine"],
        ["Checked by","You","Other experts, and anyone who reads it later"]
      ]},
      "The two are linked. Every researcher starts with everyday research (finding out what has already been done), and every careful reader of research needs to understand how it was made."
    ]},
    {h:"What makes research systematic", body:[
      "Research isn’t defined by lab coats or equipment. It’s defined by **how** the answer is reached. Four features show up across fields:",
      {list:[
        "**A clear question.** Not “I want to learn about rivers” but “Has the dry-season flow of this river changed since the dam was built?”",
        "**A method chosen to fit the question,** described so someone else could follow or repeat it. Measuring, interviewing, reading archives and building a prototype are all methods.",
        "**Evidence handled honestly.** Results that don’t fit are reported, not hidden; limits are stated.",
        "**Sharing for scrutiny.** The work is made public so other people can check, challenge and build on it. Research that nobody can examine is hard to trust, however clever it is."
      ]},
      "Sociology’s version of this, with [[hypothesis|hypotheses]], [[variable|variables]] and [[empirical-evidence|empirical evidence]], is in {{scientific-method-sociology|Thinking sociologically}}. The same pattern works far beyond the social sciences.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="t4a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="10" width="140" height="44" rx="8" stroke-width="2"/><text x="78" y="37" text-anchor="middle">1 Ask a question</text><rect class="d-lup" x="192" y="10" width="140" height="44" rx="8" stroke-width="2"/><text x="262" y="30" text-anchor="middle">2 Learn what’s</text><text x="262" y="46" text-anchor="middle">already known</text><rect class="d-sage" x="192" y="90" width="140" height="44" rx="8" stroke-width="2"/><text x="262" y="117" text-anchor="middle">3 Choose a method</text><rect class="d-sage" x="192" y="170" width="140" height="44" rx="8" stroke-width="2"/><text x="262" y="197" text-anchor="middle">4 Gather evidence</text><rect class="d-gold" x="8" y="170" width="140" height="44" rx="8" stroke-width="2"/><text x="78" y="190" text-anchor="middle">5 Analyse and</text><text x="78" y="206" text-anchor="middle">state limits</text><rect class="d-rose" x="8" y="90" width="140" height="44" rx="8" stroke-width="2"/><text x="78" y="110" text-anchor="middle">6 Share it for</text><text x="78" y="126" text-anchor="middle">others to check</text><path class="d-ink" d="M150 32H188" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><path class="d-ink" d="M262 56V86" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><path class="d-ink" d="M262 136V166" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><path class="d-ink" d="M190 192H152" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><path class="d-ink" d="M78 168V138" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><path class="d-ink" d="M78 88V58" stroke-width="2" fill="none" marker-end="url(#t4a1)"/><rect class="d-panel" x="8" y="236" width="324" height="56" rx="8" stroke-width="1.5"/><text x="170" y="258" text-anchor="middle">Others test, cite and challenge it,</text><text x="170" y="278" text-anchor="middle">which raises the next questions</text></svg>', alt:"A loop of six steps: 1 ask a question, 2 learn what’s already known, 3 choose a method, 4 gather evidence, 5 analyse and state limits, 6 share it for others to check, then back to 1. Below: others test, cite and challenge it, which raises the next questions.", cap:"The research cycle. Step 6 is what turns private work into research others can rely on, and it feeds the next turn of the loop."},
      {tip:"Real projects loop back constantly: a pilot study changes the method, an odd result sends you back to the literature. The ACRL Framework calls this “Research as Inquiry”: research is iterative, and answers lead to new questions."}
    ]},
    {h:"Many kinds of research", body:[
      "Research looks very different across fields, because **the method follows the question**. Two distinctions help you place almost any study.",
      {h:"Empirical or non-empirical?"},
      "[[empirical-research|Empirical research]] collects or analyses observations of the world: measurements, interviews, surveys, experiments, records. Non-empirical research works mainly with ideas: a mathematical proof, a philosophical argument, a new theory, a legal analysis, a close reading of a novel. Both are research; they are judged by different standards (does the evidence support the claim? does the argument hold together?).",
      "Empirical evidence itself comes in two broad kinds: [[quantitative-data|quantitative data]] (numbers you can count and analyse statistically, such as [[survey]] results or measurements) and [[qualitative-data|qualitative data]] (words, observations and images, such as interview answers or fieldnotes). Many studies use both.",
      {h:"Basic or applied?"},
      "**Basic research** aims to understand how something works, with no immediate use in mind. [[applied-research|Applied research]] aims to solve a practical problem. Many projects mix both, and basic research often turns out to be useful decades later.",
      {table:[
        ["Field","Example question","Typical method"],
        ["Ecology","Do mangrove plantings survive better with local seedlings?","Field trial, measurements over years"],
        ["Nursing","How do night-shift nurses experience handovers?","Qualitative interviews"],
        ["Economics","Did a fuel subsidy change bus use?","Quantitative analysis of existing records"],
        ["History","How did a port city’s trade change after 1850?","Archives, letters, customs records"],
        ["Engineering","Can this bridge joint survive 10 million load cycles?","Design, build, test"],
        ["Literature","How does a poet use the image of the sea?","Close reading, comparison"],
        ["Arts","What can sound installations show about city noise?","Practice-based research: making work and reflecting on it"]
      ]},
      {key:"No method is “the scientific one” for every question. A good method is one that can actually answer the question being asked."}
    ]},
    {h:"Who does research, and where it ends up", body:[
      "Research happens in many places, not only universities:",
      {list:[
        "**Universities and research institutes**, funded by governments, charities and companies.",
        "**Government agencies and national statistics offices**, which run censuses and surveys, monitor health and the environment, and evaluate policies.",
        "**International organisations** such as UN agencies, the World Bank and the OECD.",
        "**Non-governmental organisations and think tanks**, which often research a cause they campaign on.",
        "**Companies**, from drug trials to user research for apps.",
        "**Communities and volunteers**, through citizen science (for example counting birds or measuring rainfall) and community-led research."
      ]},
      "The results take many forms: [[journal-article|journal articles]], books, [[conference-proceedings|conference papers]], reports, theses, datasets, software, maps, even exhibitions. Lesson 2 sorts these out. Where research ends up affects how it was checked, who can read it for free, and how you should judge it."
    ]},
    {h:"Scholarship is a conversation", body:[
      "A single research paper is less like a verdict and more like **one turn in a long conversation**. The ACRL Framework, written by the US-based Association of College and Research Libraries and used by librarians in many countries, calls this “Scholarship as Conversation”: communities of scholars engage in sustained discussion, and new insights emerge over time from varied perspectives and interpretations.",
      {ex:"An imaginary but typical sequence:\n1. A team reports that a new teaching method raised maths scores in 12 schools.\n2. A second team tries it in 40 schools in another country and finds a smaller effect.\n3. A third paper argues the first study’s schools also got extra teacher training, which may explain part of the effect.\n4. A review combines all the studies and concludes the method helps a little, mainly for younger pupils.\nEach paper cites the earlier ones. The review, not paper 1, is the best summary of what’s known.", label:"Worked example: a conversation in four papers"},
      "This has practical consequences for you as a reader:",
      {list:[
        "**Find where a paper sits in the conversation.** Who does it respond to? Who has responded to it since? (Unit 2 shows how, with {{citation-chasing|citation chasing}}.)",
        "**Expect disagreement.** Debate among experts is normal and healthy; it isn’t a sign that “nobody knows anything”.",
        "**Look for summaries of many studies** (review articles, [[systematic-review|systematic reviews]], statements from expert bodies) before trusting any single result.",
        "**Know that you can join in.** A student essay, a practitioner’s report or a letter to a journal is also a turn in the conversation."
      ]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["“Research proves…”","Research gives evidence that supports or weakens a claim. Researchers usually write “suggests”, “is consistent with” or “provides evidence that”."],
        ["“One study settles it”","Findings become reliable when different teams, using different methods, reach similar results."],
        ["“If it’s published, it’s true”","Publication means it passed some checks. Lesson 3 shows what those checks can and can’t catch."],
        ["“Research only happens in labs”","Archives, interviews, fieldwork, proofs and design work are research too."],
        ["“Researchers are perfectly neutral”","Researchers have values, funders and careers. Transparent methods and criticism from others are how the system manages that, imperfectly."],
        ["“Changing conclusions means science failed”","Updating conclusions when new evidence arrives is the system working."]
      ]},
      {warn:"Be careful with the opposite mistake too. “Scientists keep changing their minds, so I’ll believe what I like” ignores that some conclusions rest on decades of consistent evidence from many independent teams. Uncertainty comes in degrees."}
    ]},
    {h:"Why this matters to you", body:[
      "You don’t need to become a professional researcher for this to be useful. A nurse deciding whether a new wound dressing is worth trying, a teacher reading about a reading programme, a small-business owner looking at a market report, a voter hearing “studies show…”: all of them are reading the output of research and deciding how much to trust it.",
      "Knowing how research is made lets you ask the right questions: **What was the question? What was the method? Has anyone checked it? What do other studies say?** The rest of this unit gives you the background to answer them: the kinds of sources (Lesson 2), how journals check work (Lesson 3), why access costs money (Lesson 4), and how to judge authority (Lesson 5)."
    ]}
   ],
   try:[
    {id:"t4u1-l1-x1", type:"sort", q:"Is each activity everyday research (finding out what is known) or systematic research (creating new knowledge others can check)?", buckets:["Everyday research","Systematic research"], items:[
      {t:"Reading reviews of three laptops before buying one", b:0, why:"Useful, but it gathers what others already know; nothing new is created and shared for checking."},
      {t:"A health agency surveying 5,000 households about clean water access and publishing its method and results", b:1, why:"A stated method, new data and public reporting: systematic research."},
      {t:"Searching a library catalogue to find books about the history of your town", b:0, why:"This is the first step of research (learning what’s known), not yet new knowledge."},
      {t:"A historian reading unpublished letters in an archive and publishing a new account of a strike, with sources cited", b:1, why:"Archival research is systematic: new evidence, a method others can follow, and a public account with citations."},
      {t:"A mathematician publishing a new proof", b:1, why:"Non-empirical, but still research: it creates new knowledge, and other mathematicians can check every step."},
      {t:"Asking a chatbot to summarise what is known about sleep and memory", b:0, why:"A summary of existing knowledge (which must be checked). Nothing new is created or tested."}
    ]},
    {id:"t4u1-l1-x2", type:"order", q:"Put the steps of a typical research cycle in order.", items:[
      {t:"Ask a focused question", why:"Everything else depends on the question: it decides what evidence and which method you need."},
      {t:"Find out what is already known about it", why:"Before collecting anything, researchers check what others have done, so they don’t repeat it and can build on it."},
      {t:"Choose a method that can answer the question", why:"The method comes after the question and the background reading, because both shape what will work."},
      {t:"Gather the evidence", why:"Only once the method is planned do you collect data or examine sources."},
      {t:"Analyse it and state the limits", why:"Analysis turns evidence into findings; honest limits tell readers how far to trust them."},
      {t:"Share it so others can check and respond", why:"Publishing for scrutiny comes last in one turn of the cycle, and starts the next."}
    ]},
    {id:"t4u1-l1-x3", type:"match", q:"Match each research question to the method that fits it best.", pairs:[
      ["How do refugees describe their first year in a new city?","In-depth interviews","Experiences and meanings call for qualitative methods such as interviews."],
      ["Did school attendance change after free lunches began?","Analysis of attendance records before and after","A change in a measurable quantity over time can be studied with existing records."],
      ["Is this new mortar stronger than the standard one?","Laboratory tests on samples","Material strength is measured directly under controlled conditions."],
      ["How did newspapers in 1919 report a pandemic?","Reading archived newspapers","The evidence is historical documents, so archival research fits."],
      ["Is every even number greater than 2 the sum of two primes?","Mathematical proof","This needs a proof. No number of examples would settle it (and nobody has proved it yet)."]
    ]},
    {id:"t4u1-l1-x4", type:"mcq", q:"Kenji’s company asks him whether a four-day week would reduce staff burnout in their own offices. A university team is studying how workload affects the hormones involved in stress. Which statement is accurate?", options:[
      {t:"Kenji’s project is applied research; the university’s is closer to basic research", ok:true, why:"Kenji wants to solve a specific practical problem. The university team wants to understand a general mechanism, which may only be useful later."},
      {t:"Only the university’s project counts as research", why:"Applied projects are research too, if they use a systematic method and are shared for checking."},
      {t:"Both are basic research because both involve stress", why:"The topic doesn’t decide it; the purpose does. Kenji’s question is about a practical decision."},
      {t:"Kenji’s is basic research because it is small", why:"Size has nothing to do with it. Basic versus applied is about whether the aim is understanding or solving a practical problem."}
    ]},
    {id:"t4u1-l1-x5", type:"spot", q:"Lucía wrote this paragraph in a report. Tap each claim that **misunderstands how research works**.", ask:"misunderstands research", parts:[
      "Our team reviewed the evidence on school gardens. ",
      {t:"A 2021 study proves that gardens improve children’s diets, so the question is settled.", flag:true, why:"One study can’t settle a question, and research provides evidence rather than proof. Look for other studies and reviews."},
      " ",
      {t:"Several later studies in different countries found smaller effects.", flag:false, why:"Fine. Reporting how later work responded is exactly how to read scholarship as a conversation."},
      " ",
      {t:"Because the researchers disagreed, the evidence is worthless.", flag:true, why:"Disagreement is normal. Differences between studies are information: they show where and for whom an effect is stronger."},
      " ",
      {t:"A 2023 review combined 18 studies and found a small average benefit.", flag:false, why:"Fine. A review of many studies is usually a better summary than any single study."},
      " ",
      {t:"Interview studies with teachers don’t count, because they aren’t experiments.", flag:true, why:"Qualitative research is research. Interviews answer different questions from experiments (for example, why a garden worked in one school and not another)."}
    ]},
    {id:"t4u1-l1-x6", type:"mcq", q:"Which of these is the best reason that sharing work for others to check is part of what makes research “research”?", options:[
      {t:"Other people can find mistakes, repeat the work and build on it, which is how claims become reliable", ok:true, why:"Scrutiny by others is the error-correcting step. Private work, however careful, can’t benefit from it."},
      {t:"Researchers are required to become famous", why:"Fame isn’t the point; plenty of solid research is read by few people. The point is that it can be checked."},
      {t:"Publishing makes the results true", why:"Publishing doesn’t make anything true. It makes the work open to checking, which is different."},
      {t:"Only published work is protected by copyright", why:"Unpublished work is protected by copyright too in most countries; copyright isn’t the reason research is shared."}
    ]}
   ],
   apply:{intro:"Try the research mindset on topics you care about. These are reading and thinking tasks; nobody else is involved.", tasks:[
     {t:"Turn a curiosity into a research question", how:["Pick something you’ve wondered about: at work, at home, in your community or in the news.","Write it as a broad topic (“traffic near schools”).","Rewrite it as a focused question that evidence could answer (“Did the 30 km/h limit near our schools change how many children walk to school?”).","Note what kind of method might answer it: records, a survey, interviews, archives, an experiment, a proof."], write:"Topic… Focused question… A method that could answer it… What I’d need access to…"},
     {t:"Find research in an unexpected place", how:["Search for a report from a national statistics office, a UN agency, a city council or a charity on a topic you care about.","Find its methods section (it may be called “Methodology”, “About the data” or “Technical notes”).","Write one sentence on what they did and one on what they say the limits are."], write:"Organisation and report… What they did… Limits they mention… Was it easy to find the method?"},
     {t:"Trace a tiny conversation", how:["Find a news article that mentions “a new study”.","Find the study itself (the article may link to it, or search its title).","Look for one earlier study it builds on (in its introduction or reference list).","Write two sentences on how the new study adds to, or disagrees with, the earlier one."], write:"News article… The study… An earlier study it cites… How they relate…"}
   ], proof:"Notes with one focused research question and a fitting method, one real report’s method and limits in your own words, and a short description of how two studies relate."},
   read:[
     {book:"bhatt", where:"Chapter 1, “Science and Scientific Research”", note:"Explains scientific knowledge, the scientific method and types of research from a social science point of view."},
     {book:"acrl", where:"Frames “Research as Inquiry” and “Scholarship as Conversation”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u1-l2", title:"Kinds of sources", minutes:50,
   hook:{q:"A school hygiene textbook printed in 1955. Is it a primary, secondary or tertiary source?", options:["Always tertiary: textbooks summarise","Always secondary: it explains other work","Always primary: it’s old","It depends on the question you’re asking"], answer:3, reveal:"**It depends on your question.** If you want to learn about hygiene, it’s an out-of-date tertiary source. If you’re a historian studying how schools taught hygiene in the 1950s, it’s a primary source: original evidence of exactly what you’re studying. Source types describe the relationship between a source and your question, which is the main idea of this lesson."},
   goals:[
     "Classify a source as primary, secondary or tertiary relative to a specific question",
     "Tell scholarly, popular and trade sources apart by their features",
     "Name the main kinds of scholarly output: research and review articles, monographs, edited books, conference papers, theses",
     "Explain what grey literature is, why researchers value it, and how to judge it"
   ],
   learn:[
    {h:"Primary, secondary, tertiary: it depends on the question", body:[
      {lead:"In {{evaluating-sources|Judging a source}} you met [[primary-source|primary]] and [[secondary-source|secondary]] sources. Researchers add a twist: the same item can be either, depending on what you are studying."},
      "A [[tertiary-source|tertiary source]] summarises and organises many secondary sources: encyclopedias, textbooks, handbooks, guides, bibliographies. Use it to get your bearings, then move closer to the evidence.",
      "Fields also use “primary” a little differently:",
      {table:[
        ["Field","Usually primary","Usually secondary"],
        ["Sciences, health","The original study reporting new data","Review articles, news about studies"],
        ["History","Documents from the time: letters, diaries, records, photos","Historians’ books and articles about them"],
        ["Literature, arts","The novel, poem, painting or performance","Criticism and analysis of the work"],
        ["Law","Laws, regulations and court decisions","Commentaries and law journal articles"],
        ["Social sciences","Interviews, survey data, official statistics","Studies that analyse others’ findings"]
      ]},
      {ex:"Question A: “What did people in Lagos think of the new railway in 1901?”\n→ A 1901 newspaper editorial is PRIMARY.\n\nQuestion B: “How did the railway affect Lagos’s economy?”\n→ The same editorial is weak evidence (one opinion); a modern economic history is the key SECONDARY source.\n\nQuestion C: “How have historians’ views of the railway changed?”\n→ The modern economic histories themselves become PRIMARY: they are now the thing you are studying.", label:"Worked example: one source, three questions"},
      {key:"Before labelling a source, finish this sentence: “My question is about…”. The label follows from the answer."}
    ]},
    {h:"How information appears after an event", body:[
      "Different kinds of sources appear at different speeds. Librarians sometimes call this the **information cycle**. Knowing it tells you where to look, and what you **can’t** find yet.",
      {fig:'<svg viewBox="0 0 340 400"><path class="d-ink" d="M30 46V384" stroke-width="2"/><circle class="d-rose" cx="30" cy="22" r="12" stroke-width="2"/><text x="52" y="27">A major flood happens</text><circle class="d-inkf" cx="30" cy="66" r="6"/><text x="48" y="64">Hours</text><text class="s" x="48" y="81">Social media posts, live news, photos</text><circle class="d-inkf" cx="30" cy="116" r="6"/><text x="48" y="114">Days to weeks</text><text class="s" x="48" y="131">News reports, analysis, opinion pieces</text><circle class="d-inkf" cx="30" cy="166" r="6"/><text x="48" y="164">Weeks to months</text><text class="s" x="48" y="181">Agency and NGO reports, official data</text><text class="s" x="48" y="197">(grey literature), magazines</text><circle class="d-inkf" cx="30" cy="232" r="6"/><text x="48" y="230">Months to years</text><text class="s" x="48" y="247">Preprints, then peer-reviewed journal</text><text class="s" x="48" y="263">articles and conference papers</text><circle class="d-inkf" cx="30" cy="298" r="6"/><text x="48" y="296">Years</text><text class="s" x="48" y="313">Books, review articles, inquiry reports</text><circle class="d-inkf" cx="30" cy="348" r="6"/><text x="48" y="346">Later still</text><text class="s" x="48" y="363">Encyclopedias, textbooks, handbooks</text><text class="s" x="48" y="379">(tertiary sources)</text></svg>', alt:"A vertical timeline after a major flood: hours, social media and live news; days to weeks, news reports and analysis; weeks to months, agency and NGO reports, official data and magazines; months to years, preprints then peer-reviewed articles and conference papers; years, books, review articles and inquiry reports; later still, encyclopedias and textbooks.", cap:"The information cycle. Timings are typical, not fixed: some journals publish urgent research in weeks, and some reports take years."},
      "Two consequences:",
      {list:[
        "**Early sources are fast but less checked.** The first reports of any event often contain errors that later sources correct.",
        "**Scholarly sources are slower but more checked.** If something happened last month, there may be no peer-reviewed research on it yet. Looking for some is a waste of time; looking for agency reports and data may not be."
      ]}
    ]},
    {h:"Scholarly, popular and trade sources", body:[
      "Another way to sort sources is by **who writes them, for whom, and how they are checked**.",
      {table:[
        ["Feature","Scholarly","Popular","Trade"],
        ["Written by","Researchers, experts","Journalists, writers","Practitioners, industry journalists"],
        ["For","Other experts, students","The general public","People in one profession"],
        ["Checked by","Editors and usually [[peer-review|peer review]]","Editors, fact-checkers (varies)","Editors"],
        ["References","Full reference list","Rarely; may link","Some"],
        ["Purpose","Report research, argue","Inform, entertain, persuade","Practical news, products, how-to"]
      ]},
      "A [[scholarly-source|scholarly source]] is written by experts for experts and documents its evidence. A [[popular-source|popular source]] (a newspaper, a general magazine, a blog) explains things for a broad audience. A [[trade-publication|trade publication]] serves one profession: a news magazine for nurses, a construction weekly, a magazine for librarians.",
      "None is simply “better”. A scholarly article is the right source for evidence about a treatment. A popular explainer may be the best way to understand it first. A trade magazine may be the only place that reports how a new tool works in practice.",
      {warn:"“Scholarly-looking” isn’t the same as scholarly. Some websites copy the look (abstracts, footnotes, a “journal” name) without the checking. Lesson 5 covers how to tell."}
    ]},
    {h:"Inside the scholarly family", body:[
      "Scholarly work comes in several formats. Each is useful for different things.",
      {list:[
        "**[[journal-article|Journal articles]]** are the most common format in most fields. A research article reports original work (new data, a new analysis or a new argument). A [[review-article|review article]] summarises and assesses many earlier studies, which makes it a great starting point. Journals also publish short communications, editorials, commentaries, letters and book reviews; these are not peer-reviewed research in the same way, so check the article type.",
        "**[[monograph|Monographs]]** are scholarly books on one subject, by one author or a small team. In the humanities and many social sciences they are a main form of research output.",
        "**Edited books** collect chapters by different authors on a theme, chosen by one or more editors.",
        "**[[conference-proceedings|Conference proceedings]]** publish papers presented at academic meetings. In computer science and some engineering fields, peer-reviewed conference papers are often the main place new results appear. In many other fields, a conference abstract is a short early report that may never become a full paper.",
        "**Theses and dissertations** are the long research reports written for a research degree. Many universities post them free online. They are detailed and often have long literature reviews, but quality varies more than in journals."
      ]},
      "Most scholarly articles start with an [[abstract-paper|abstract]]: a short summary of the question, method, findings and conclusion. It helps you decide whether to read on, but it isn’t the whole story; Unit 3 shows how to read the rest.",
      {tip:"In a database or on a journal page, look for the article type (often a small label such as “Research article”, “Review”, “Editorial” or “Letter”). It tells you what kind of evidence you’re looking at."}
    ]},
    {h:"Grey literature", body:[
      "[[grey-literature-term|Grey literature]] is research and information produced outside traditional commercial and academic publishing. A widely cited definition from the international grey literature community (the Luxembourg definition, later extended in Prague in 2010) describes it as material produced by governments, academics, business and industry, **where publishing is not the producer’s main activity**.",
      {table:[
        ["Kind","Example producer"],
        ["Government and agency reports","A ministry of health, an environment agency"],
        ["Official statistics","National statistics offices, UN agencies"],
        ["Reports by NGOs and think tanks","Charities, research institutes"],
        ["Working papers and discussion papers","University departments, central banks"],
        ["Theses and dissertations","Universities"],
        ["Conference abstracts and posters","Academic societies"],
        ["Standards, patents, technical reports","Standards bodies, companies"],
        ["Clinical trial registrations and results","Trial registries"]
      ]},
      {h:"Why researchers value it"},
      {list:[
        "**It’s often faster and more local** than journals: last year’s data, one district’s results.",
        "**It may be the only source** for policy details, programme evaluations or practical know-how.",
        "**It can reduce [[publication-bias|publication bias]].** Studies with disappointing or null results are less likely to be published in journals, but they may appear in reports, theses or trial registries. That’s why careful {{systematic-reviews|systematic reviews}} search grey literature too."
      ]},
      {h:"How to judge it"},
      "Grey literature isn’t automatically peer-reviewed, and some is produced to support a cause or sell a product. Ask: Who produced it, and what is their interest? Is the method described? Was it reviewed (some agencies have strong internal review)? Is the data available? Does it agree with other sources?"
    ]},
    {h:"Matching the source to the job", body:[
      {table:[
        ["You need…","Start with…"],
        ["Your bearings on a new topic","A tertiary source: an encyclopedia, a textbook, a good explainer"],
        ["What the evidence says overall","A recent review article, systematic review or expert body statement"],
        ["The details of one finding","The original research article (primary)"],
        ["Recent figures for one country or city","Official statistics and agency reports (grey literature)"],
        ["How practitioners use something","Trade publications and professional guidance"],
        ["How people at the time saw an event","Documents from that time (primary, for a historical question)"]
      ]},
      {key:"Good research uses a mix. The skill is knowing which kind of source answers which part of your question."}
    ]}
   ],
   try:[
    {id:"t4u1-l2-x1", type:"sort", q:"Hana’s question is: **“How did newspapers in her country report the 1990s debate about women’s right to vote in local elections?”** Is each source primary or secondary **for her question**?", buckets:["Primary for Hana’s question","Secondary for Hana’s question"], items:[
      {t:"A 1994 newspaper editorial opposing the change", b:0, why:"Her question is about how newspapers reported the debate, so newspaper pieces from the time are the evidence itself."},
      {t:"A 2019 journal article analysing media coverage of the debate", b:1, why:"It analyses the primary sources. It’s a valuable secondary source (and may point her to more newspapers)."},
      {t:"A 1995 newspaper report on a parliamentary vote", b:0, why:"Coverage from the time: exactly what she is studying."},
      {t:"A history textbook chapter on the period", b:1, why:"It summarises and interprets events. For her question it’s secondary background (some would call a textbook tertiary)."},
      {t:"A 1993 letter to the editor from a reader", b:0, why:"Published in a newspaper at the time, it’s part of the coverage she’s studying."}
    ]},
    {id:"t4u1-l2-x2", type:"mcq", q:"A 2020 encyclopedia article on a famous 19th-century novelist would be a primary source for which question?", options:[
      {t:"“How do current reference works present this novelist?”", ok:true, why:"When the question is about how reference works describe someone, the encyclopedia article itself is the evidence: primary."},
      {t:"“What was the novelist’s childhood like?”", why:"For the novelist’s life, the encyclopedia is a tertiary summary. Primary sources would be letters, diaries and records from the time."},
      {t:"“What themes appear in the novelist’s books?”", why:"Here the novels themselves are primary; the encyclopedia is a tertiary overview."},
      {t:"“When did the novelist die?”", why:"For this fact the encyclopedia is a tertiary source; a death record or contemporary report would be primary."}
    ]},
    {id:"t4u1-l2-x3", type:"sort", q:"Sort each source into the best category.", buckets:["Scholarly","Popular","Trade","Grey literature"], items:[
      {t:"A peer-reviewed article in a soil science journal, with 60 references", b:0, why:"Written by researchers for researchers, peer-reviewed and fully referenced."},
      {t:"A newspaper feature about a family farm’s switch to drip irrigation", b:1, why:"Written by a journalist for the general public."},
      {t:"A monthly magazine for farm equipment dealers", b:2, why:"Written for people in one industry: a trade publication."},
      {t:"A ministry of agriculture report on this year’s harvest, published on its website", b:3, why:"A government report outside commercial and academic publishing: grey literature."},
      {t:"A working paper from a university economics department", b:3, why:"Working papers are shared before formal publication, without journal peer review: grey literature."},
      {t:"A general science magazine’s explainer on soil carbon", b:1, why:"It explains research for a broad audience: popular."}
    ]},
    {id:"t4u1-l2-x4", type:"match", q:"Match each scholarly format to its description.", pairs:[
      ["Review article","Summarises and assesses many earlier studies on a topic","Reviews synthesise existing work rather than reporting new data."],
      ["Research article","Reports a new study’s methods and findings","This is the primary report of original work."],
      ["Monograph","A scholarly book on one subject by one author or a small team","Common in the humanities and many social sciences."],
      ["Conference paper","Presented at an academic meeting; a main venue in computer science","Peer-reviewed conference papers are central in computing and some engineering fields."],
      ["Editorial","A journal editor’s short opinion or introduction","Editorials are opinion or commentary, not peer-reviewed research."]
    ]},
    {id:"t4u1-l2-x5", type:"mcq", q:"Tomás is writing a report on how well a clean-cooking-stove programme worked in his region last year. A database search finds no peer-reviewed articles about it. What should he do next?", options:[
      {t:"Look for grey literature: the programme’s own evaluation, government or NGO reports, and official data, judging each carefully", ok:true, why:"Recent, local programmes are often only documented in grey literature, which appears much sooner than journal articles."},
      {t:"Conclude there is no evidence and stop", why:"No journal articles yet doesn’t mean no evidence. The information cycle says reports and data come first."},
      {t:"Use only news stories, because they’re more recent", why:"News may help, but it usually summarises reports. Go to the reports and data themselves."},
      {t:"Cite peer-reviewed articles about stove programmes in other countries as if they described his region", why:"They can give context, but presenting them as evidence about his region would be misleading."}
    ]},
    {id:"t4u1-l2-x6", type:"spot", q:"Amara listed sources for an essay on air pollution and asthma. Tap each description that is **wrong**.", ask:"wrong", parts:[
      {t:"A systematic review in a medical journal: a good summary of many studies.", flag:false, why:"Correct. Reviews that combine many studies are an excellent place to start."},
      " ",
      {t:"A city’s air-quality monitoring report: not usable because it isn’t peer-reviewed.", flag:true, why:"Grey literature is often the best source of local data. Judge its method and producer instead of rejecting it."},
      " ",
      {t:"An editorial in a medical journal: peer-reviewed research evidence.", flag:true, why:"Editorials are opinion pieces, usually not peer-reviewed research, even in a scholarly journal. Check the article type."},
      " ",
      {t:"A newspaper explainer: helpful background, but I should find the studies it mentions.", flag:false, why:"Correct. Popular sources are useful for understanding; trace key claims to the original research."},
      " ",
      {t:"An encyclopedia entry: a tertiary source for getting my bearings.", flag:false, why:"Correct. Encyclopedias are tertiary and good for orientation."}
    ]}
   ],
   apply:{intro:"Practise classifying real sources on a topic you choose. Free sources are fine; you don’t need a library login.", tasks:[
     {t:"One topic, four kinds of source", how:["Choose a topic you care about (for example, school meals, coral bleaching, remote work).","Find one scholarly article (Google Scholar or a free database), one popular article, one trade or professional publication and one piece of grey literature (a government, UN or NGO report).","For each, note who wrote it, for whom, and how it was checked."], write:"Topic… Scholarly… Popular… Trade… Grey literature… Who checked each…"},
     {t:"Change the question, change the label", how:["Pick one source from the previous task.","Write two different research questions: one for which it is a primary source and one for which it is secondary or tertiary.","Explain the difference in one sentence."], write:"Source… Question where it’s primary… Question where it’s secondary or tertiary… Why…"},
     {t:"Find the article type", how:["Open three items from a journal’s website (any field).","Find the article type label on each page (Research article, Review, Editorial, Letter, Commentary…).","Note which ones are reports of original research."], write:"Journal… Item 1 type… Item 2 type… Item 3 type… Which report original research…"}
   ], proof:"Notes with four labelled sources on one topic, two questions showing how one source’s label can change, and three article types from a real journal."},
   read:[
     {book:"owg", where:"Chapter 13, Section 13.1 “The Research Process: Where to Look for Existing Sources” (the parts “Locating Sources” and “Evaluating Sources”)"},
     {book:"acrl", where:"Frame “Information Creation as a Process”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u1-l3", title:"Peer review and how journals work", minutes:55,
   hook:{q:"Peer reviewers spend hours checking a paper for a journal. Who usually pays them for it?", options:["The journal, per review","The authors, through a fee","Usually no one: most reviewers are unpaid","A government agency"], answer:2, reveal:"**Usually no one.** At most journals, peer review is unpaid work that researchers do for each other as part of their profession (some journals offer small rewards or discounts). That surprises many people, and it helps explain both the strengths of peer review (experts volunteering their judgement) and its limits (busy people with little time). This lesson follows a paper through the whole system."},
   goals:[
     "Describe who runs a journal and the path of a manuscript from submission to publication",
     "Compare the main kinds of peer review",
     "Explain what peer review usually checks, and what it can’t",
     "Calculate a journal impact factor and explain why it shouldn’t be used to judge a single article"
   ],
   learn:[
    {h:"What a journal is", body:[
      {lead:"An [[academic-journal|academic journal]] is a regular publication of scholarly articles in a field, run by experts in that field."},
      "Journals started as printed issues; today almost all publish online, many article by article as soon as each is ready. Behind each one are several roles:",
      {table:[
        ["Role","What they do"],
        ["Editor-in-chief","Sets the journal’s scope and standards; makes or approves final decisions"],
        ["Handling (associate) editors","Manage individual papers: choose reviewers, weigh their reports, decide"],
        ["Editorial board","Experts who advise, review and lend the journal credibility"],
        ["Peer reviewers","Experts who assess a manuscript and recommend a decision"],
        ["Publisher","Runs the production and website: a scholarly society, a university press, a non-profit or a commercial company"]
      ]},
      "Most journals have an **ISSN** (International Standard Serial Number), and each article usually gets a {{doi-identifiers|DOI}}, a permanent identifier that keeps working even if the website changes. Unit 4 uses DOIs heavily for citing.",
      "Editors and reviewers are usually working researchers who do this alongside their own jobs. That’s why the system is often described as self-governing: the research community checks its own work.",
      {lab:"cl-doi", t:"Practise: write a DOI as a link"}
    ]},
    {h:"The life of a manuscript", body:[
      "In Track 1 you saw the short version of [[peer-review|peer review]]. Here is the full path, which explains a lot about what you see in published papers.",
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="t4a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="10" y="8" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="33" text-anchor="middle">Authors submit</text><rect class="d-lup" x="10" y="78" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="103" text-anchor="middle">Editor screens it</text><rect class="d-rose" x="236" y="78" width="96" height="40" rx="8" stroke-width="2"/><text x="284" y="96" text-anchor="middle" class="s">Desk</text><text x="284" y="110" text-anchor="middle" class="s">rejection</text><rect class="d-sage" x="10" y="148" width="200" height="52" rx="8" stroke-width="2"/><text x="110" y="170" text-anchor="middle">Peer reviewers</text><text x="110" y="188" text-anchor="middle" class="s">often two or three experts</text><rect class="d-lup" x="10" y="230" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="255" text-anchor="middle">Editor decides</text><rect class="d-rose" x="236" y="230" width="96" height="40" rx="8" stroke-width="2"/><text x="284" y="255" text-anchor="middle" class="s">Reject</text><rect class="d-gold" x="236" y="160" width="96" height="44" rx="8" stroke-width="2"/><text x="284" y="178" text-anchor="middle" class="s">Authors</text><text x="284" y="194" text-anchor="middle" class="s">revise</text><rect class="d-sage" x="10" y="300" width="200" height="40" rx="8" stroke-width="2"/><text x="110" y="325" text-anchor="middle">Accepted</text><rect class="d-panel" x="10" y="370" width="200" height="40" rx="8" stroke-width="1.5"/><text x="110" y="395" text-anchor="middle">Copyediting, proofs</text><rect class="d-gold" x="10" y="420" width="322" height="44" rx="8" stroke-width="2"/><text x="171" y="438" text-anchor="middle">Published: version of record</text><text x="171" y="455" text-anchor="middle" class="s">gets a DOI; later corrections or retractions possible</text><path class="d-ink" d="M110 50V74" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M212 98H232" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M110 120V144" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M110 202V226" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M212 250H232" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M212 238L250 208" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M260 158C260 136 236 140 214 160" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M110 272V296" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M110 342V366" stroke-width="2" fill="none" marker-end="url(#t4a3)"/><path class="d-ink" d="M110 412V416" stroke-width="2" fill="none"/></svg>', alt:"Flowchart: authors submit; the editor screens it, which can end in desk rejection; peer reviewers, often two or three experts; the editor decides: reject, ask authors to revise (which goes back to reviewers), or accept; then copyediting and proofs; then published as the version of record with a DOI, after which corrections or retractions are possible.", cap:"The path of a manuscript. Many papers go round the “revise” loop more than once, and rejected papers are often revised and sent to another journal."},
      {ol:[
        "**Submission.** Authors send the manuscript to one journal at a time; most journals forbid submitting the same paper to several at once (US law reviews are a well-known exception).",
        "**Editorial screening.** An editor checks scope, quality and basic integrity (for example, with plagiarism-checking software). Many papers are rejected here without review: a [[desk-rejection|desk rejection]].",
        "**Peer review.** The editor invites experts, often two or three, who write reports and recommend accept, minor revisions, major revisions or reject.",
        "**Decision and revision.** The editor weighs the reports. Authors usually revise and reply point by point; revised papers may go back to the same reviewers.",
        "**Acceptance and production.** Copyediting, typesetting and proofs, then publication as the [[version-of-record|version of record]].",
        "**After publication.** Readers cite, discuss and test the work. If serious problems appear, the journal may publish a correction or a retraction (Lesson 5)."
      ]},
      "This takes time: months is common, and a year or more is not unusual, especially when a paper is rejected and resubmitted elsewhere. That delay is one reason preprints exist (Lesson 4)."
    ]},
    {h:"Kinds of peer review", body:[
      "Journals hide or reveal identities in different ways. Older guides say “blind” instead of “anonymous”; many publishers have switched to “anonymous” or “anonymised”.",
      {table:[
        ["Model","Who knows whom","Aims to"],
        ["Single-anonymous","Reviewers know the authors; authors don’t know the reviewers","Let reviewers speak freely"],
        ["Double-anonymous","Neither side knows the other","Reduce bias about authors’ fame, gender or country"],
        ["Triple-anonymous","Editors don’t know the authors either","Reduce bias further"],
        ["Open","Authors and reviewers know each other’s names","Make reviewers accountable"],
        ["Transparent","Reports (and sometimes names) are published with the article","Let readers see how it was checked"]
      ]},
      "Some journals and platforms also add **post-publication review**: comments and assessments after a paper is public. As Wiley’s guidance notes, this is usually in addition to, not instead of, review before publication.",
      {tip:"Anonymity is never perfect. In a small field, reviewers can often guess who wrote a paper from its topic, methods or self-citations."}
    ]},
    {h:"What peer review checks, and what it can’t", body:[
      "Reviewers usually ask: Is the question important and new? Is the method suitable? Do the conclusions follow from the results? Is earlier work fairly described? Is anything important missing?",
      "But reviewers usually see only the manuscript (sometimes with data and code), over a few hours, unpaid. So peer review is **weak at catching**:",
      {list:[
        "**Fabricated or manipulated data** that looks plausible. Reviewers rarely see raw data, and even then can’t check everything.",
        "**Errors in analysis or code** that aren’t visible in the text.",
        "**Whether the result will hold up** when someone repeats the study. That needs [[replication]]: new studies by other teams.",
        "**Bias across the whole literature.** Exciting, positive results are more likely to be published than null results ([[publication-bias|publication bias]]), so the published record can look more certain than the evidence is."
      ]},
      {ex:"In a project published in Science in 2015, the Open Science Collaboration repeated about 100 studies from three psychology journals. 97% of the original studies had reported [[statistical-significance|statistically significant]] results; 36% of the repetitions did. That doesn’t mean the other studies were wrong (a single repeat can fail for many reasons), but it showed that passing peer review is no guarantee a finding will replicate. It helped prompt reforms such as sharing data and registering study plans in advance ([[preregistration]]).", label:"Evidence: a large replication project"},
      {key:"Peer review asks “Is this paper reasonable and well done?” Only time, replication and other studies can answer “Is it true?”"}
    ]},
    {h:"Journal metrics and the impact factor", body:[
      "Journals are often compared by citation counts. The best known is the [[impact-factor|Journal Impact Factor]] (JIF), calculated by the company Clarivate for journals in its Web of Science Core Collection.",
      {ex:"JIF for year Y =\n  citations in year Y to items published in Y−1 and Y−2\n  ÷ number of citable items (articles and reviews) published in Y−1 and Y−2\n\nExample: in 2025, a journal’s 2023 and 2024 items were cited 600 times.\nIt published 110 articles and reviews in 2023 and 90 in 2024.\n600 ÷ (110 + 90) = 600 ÷ 200 = 3.0", label:"How the impact factor is calculated", mono:true},
      "So a JIF of 3.0 means that, roughly, items from the previous two years were cited about three times each in that year. Since the 2023 release, Clarivate gives every Web of Science Core Collection journal an impact factor and shows it with one decimal place instead of three, partly to encourage people to look at other indicators rather than tiny differences in one number.",
      {h:"Why you shouldn’t judge an article by it"},
      {list:[
        "**It’s an average for a whole journal.** Citations are very uneven: a few papers get many, most get few. A paper in a high-JIF journal may be rarely cited, or wrong.",
        "**Fields differ hugely.** Citation habits in mathematics or history are very different from those in cell biology, so comparing JIFs across fields is meaningless.",
        "**Not every good journal has one.** Many reputable journals, especially outside English-language publishing, aren’t indexed in Web of Science.",
        "**It can be gamed**, for example by encouraging authors to cite the journal."
      ]},
      "The **San Francisco Declaration on Research Assessment (DORA)**, written in 2012, recommends not using journal-based metrics such as impact factors as a stand-in for the quality of individual articles, or to judge individual researchers in hiring, promotion or funding. Many universities and funders have signed it.",
      {warn:"Predatory journals sometimes advertise invented “impact factors” from unrelated companies with similar names. Lesson 5 shows how to check."}
    ]},
    {h:"Being indexed", body:[
      "Journals are also listed (indexed) in databases that researchers search. Being indexed in a selective database means someone checked the journal against criteria. Examples include **Web of Science** and **Scopus** (subscription databases with selection criteria), **PubMed/MEDLINE** (biomedicine), **ERIC** (education), **SciELO** (open access journals mainly from Latin America and the Caribbean, Portugal, Spain and South Africa) and the **DOAJ** (open access journals that meet its criteria). Unit 2 shows how to search them.",
      "Indexing is a useful signal, not a guarantee. Some good journals aren’t in a given index, and indexes occasionally remove journals that stop meeting standards. A journal’s own website claiming “indexed in…” should be checked against the index itself."
    ]}
   ],
   try:[
    {id:"t4u1-l3-x1", type:"order", q:"Put the stages of publishing a journal article in order.", items:[
      {t:"Authors submit the manuscript to one journal", why:"Everything starts with a submission, to one journal at a time."},
      {t:"An editor screens it for scope and basic quality", why:"Editors check first; many papers are desk-rejected at this stage without review."},
      {t:"Peer reviewers assess it and write reports", why:"Only papers that pass screening go out to reviewers."},
      {t:"The editor decides, often asking for revisions", why:"The editor weighs the reviewers’ reports and decides; revision is the most common outcome for papers that aren’t rejected."},
      {t:"Copyediting and proofs", why:"Production happens only after acceptance."},
      {t:"Publication as the version of record, with a DOI", why:"The final, published version comes last. Corrections or retractions can still follow."}
    ]},
    {id:"t4u1-l3-x2", type:"match", q:"Match each peer review model to its description.", pairs:[
      ["Single-anonymous","Reviewers know who the authors are, but not the other way round","The authors don’t know the reviewers’ identities."],
      ["Double-anonymous","Authors and reviewers don’t know each other’s identities","Both sides are hidden to reduce bias about who the authors are."],
      ["Open","Authors and reviewers know each other’s names","Openness aims at accountability."],
      ["Transparent","The review reports are published alongside the article","Readers can see what reviewers said and how the authors responded."],
      ["Post-publication","Comments and assessment after the paper is public","Usually in addition to review before publication."]
    ]},
    {id:"t4u1-l3-x3", type:"sort", q:"Which of these can ordinary peer review usually catch, and which is it poor at catching?", buckets:["Usually catches","Often misses"], items:[
      {t:"A method that can’t answer the research question", b:0, why:"Judging whether the design fits the question is reviewers’ core job."},
      {t:"Conclusions that go beyond what the results show", b:0, why:"Reviewers compare the claims with the evidence presented and often ask authors to tone them down."},
      {t:"Data that was invented but looks plausible", b:1, why:"Reviewers rarely see raw data and aren’t investigators; skilled fabrication often slips through."},
      {t:"A coding error inside the analysis software", b:1, why:"Reviewers usually don’t rerun the analysis, so errors hidden in code can pass."},
      {t:"Ignoring an important earlier study on the same question", b:0, why:"Experts in the field usually know the key literature and point out gaps."},
      {t:"Whether the result will hold up when another team repeats the study", b:1, why:"Only replication can show that; reviewers can’t know in advance."}
    ]},
    {id:"t4u1-l3-x4", type:"number", q:"In 2025, items that a journal published in 2023 and 2024 were cited 840 times. The journal published 130 citable items in 2023 and 110 in 2024. It also published 100 items in 2025, which were cited 50 times in 2025. What is its 2025 Journal Impact Factor?", answer:3.5, tol:0.05, unit:"", why:"The 2025 JIF uses citations in 2025 to items from the two previous years (2023 and 2024), divided by the citable items from those two years: 840 ÷ (130 + 110) = 840 ÷ 240 = 3.5. The 2025 items and their citations are not part of the 2025 JIF.", wrongs:[
      {v:6.5, tol:0.1, why:"That’s 840 ÷ 130: you used only the 2023 items. The denominator includes both previous years."},
      {v:7.6, tol:0.1, why:"That’s 840 ÷ 110: you used only the 2024 items. Add both years’ citable items."},
      {v:2.6, tol:0.1, why:"That includes the 2025 items and citations: (840 + 50) ÷ (240 + 100). The JIF for a year counts only items from the two previous years."},
      {v:420, tol:1, why:"That’s 840 ÷ 2: dividing by the number of years. The JIF divides by the number of citable items."}
    ], hint2:"Use only the two years before 2025 for both the citations and the items."},
    {id:"t4u1-l3-x5", type:"mcq", q:"A hiring panel ranks two applicants by the average impact factor of the journals they published in. Which response best reflects the San Francisco Declaration on Research Assessment (DORA)?", options:[
      {t:"Judge the applicants’ actual work and contributions, not the impact factors of the journals it appeared in", ok:true, why:"DORA’s main recommendation is not to use journal-based metrics as a stand-in for the quality of individual articles or to judge individuals in hiring, promotion or funding."},
      {t:"Use the impact factor, because it measures the quality of each article", why:"It’s an average for a journal over two years. Individual articles in the same journal vary enormously."},
      {t:"Use the impact factor, but only for applicants from different fields", why:"Comparing across fields is the worst use: citation habits differ greatly between fields."},
      {t:"Count only papers in journals with an impact factor above 10", why:"That rewards where someone published, not what they found, and excludes good journals in fields with low citation rates."}
    ]},
    {id:"t4u1-l3-x6", type:"mcq", q:"Priya reads: “This study was peer-reviewed, so its results are correct.” What’s the most accurate correction?", options:[
      {t:"Peer review checks that the work is reasonable and well done; whether the results are correct depends on later testing and other studies", ok:true, why:"Peer review is a quality filter. Replication and the wider body of evidence decide whether a finding holds."},
      {t:"Peer review is meaningless, so the study is probably wrong", why:"Overcorrecting. Peer review catches many problems and is a real quality signal; it just isn’t proof."},
      {t:"Peer-reviewed results are always correct unless the paper is retracted", why:"Many findings turn out to be wrong or overstated without any retraction; retraction is for serious problems."},
      {t:"Only double-anonymous review makes results correct", why:"No review model guarantees correctness; they differ in how they handle bias, not in producing truth."}
    ]},
    {id:"t4u1-l3-x7", type:"mcq", q:"A journal’s website says “Indexed in Scopus and Web of Science”. What should you do with that claim?", options:[
      {t:"Check it by searching for the journal in the index’s own master list or search", ok:true, why:"Claims on a journal’s own site are easy to fake. The index itself is the authority on what it includes."},
      {t:"Trust it: journals can’t legally say this unless it’s true", why:"Predatory journals do make false indexing claims. Verify with the index."},
      {t:"Ignore it: indexing tells you nothing", why:"Indexing in a selective database is a useful signal, once it’s confirmed."},
      {t:"Assume the journal’s articles are all correct", why:"Even a confirmed index listing says the journal met criteria, not that every article is right."}
    ]}
   ],
   apply:{intro:"Look at the publishing system from the inside, using free websites.", tasks:[
     {t:"Read a journal’s peer review policy", how:["Choose a journal in a field that interests you (search “[field] journal” or use one from an earlier task).","Find its pages for authors or reviewers (often “For authors”, “About”, “Editorial policies” or “Peer review”).","Note which review model it uses, who the editor-in-chief is, and whether it publishes review reports."], write:"Journal… Review model… Editor-in-chief… Are reports published?… Anything surprising…"},
     {t:"Find a paper’s timeline", how:["Open any recent research article on a journal website.","Look near the title or at the end for dates: received, revised, accepted, published.","Work out how long it took from submission to publication."], write:"Article… Received… Accepted… Published… Total time…"},
     {t:"See peer review in action", how:["Find a journal that publishes review reports with articles (transparent review). Search for “published peer review reports” or look for a “Peer review history” or “Review reports” link on an article page.","Read one reviewer’s report and the authors’ response.","Note one change the reviewer asked for and how the authors handled it."], write:"Journal and article… What the reviewer asked for… How the authors responded… What this tells me about peer review…"}
   ], proof:"Notes on one journal’s review model, one article’s submission-to-publication timeline, and one real reviewer request with the authors’ response."},
   read:[
     {book:"wlsf", where:"Part IV, Chapter 21 “Finding a Journal’s Impact Factor”", note:"Short and practical; Caulfield shows how to use journal metrics as one clue among several."},
     {book:"acrl", where:"Frame “Scholarship as Conversation”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u1-l4", title:"Open access, preprints and paywalls", minutes:50,
   hook:{q:"A researcher publishes an article in a traditional subscription journal, and readers pay to read it. How much is the author usually paid for the article?", options:["Nothing","A flat fee per article","A share of each sale","A fee based on citations"], answer:0, reveal:"**Nothing.** Journal authors are normally paid by their employer or funder to do research, not by the journal for the article, and reviewers are usually unpaid too. Readers or their libraries pay the publisher. Who pays, who profits and who can read is the subject of this lesson, and the ACRL Framework sums it up in one frame: “Information Has Value”."},
   goals:[
     "Explain how the subscription model creates paywalls",
     "Tell gold, green, hybrid, diamond and bronze open access apart",
     "Name the versions of a paper, from preprint to version of record, and know which one you’re reading",
     "Use preprints sensibly, and find legal free copies of paywalled work"
   ],
   learn:[
    {h:"Why some research costs money to read", body:[
      {lead:"Most research is paid for by governments, universities and charities. Yet many articles cost money to read. The reason is the subscription model."},
      "In the traditional model, authors give the publisher the right to publish (often by transferring copyright). The publisher organises peer review, produces the article and sells access, mainly as **subscriptions to libraries**. People without a subscription meet a [[paywall]]: a page offering the article for a fee.",
      "Universities often pay large sums for subscriptions, frequently bundled in deals covering many journals at once. If you have a university login, you reach many paywalled articles through those subscriptions without noticing. If you don’t (an independent learner, a small business, a clinic, a researcher in a country with little library funding), you notice immediately.",
      "The ACRL frame **“Information Has Value”** names this tension: information is a commodity, a means of education, a means of influence and a way of understanding the world, and legal and economic interests shape who gets to produce and read it.",
      {tip:"Publishing does cost money (editing, managing review, production, hosting, preservation). The debate is about who should pay, how much, and whether readers should be shut out."}
    ]},
    {h:"What open access means", body:[
      "[[open-access-term|Open access]] (OA) means research that is free to read online, ideally with permission to reuse it. The Budapest Open Access Initiative of 2002, which gave the term its best-known definition, describes it as free availability on the public internet, letting anyone read, download, copy, distribute, print, search or link to full texts, without financial, legal or technical barriers beyond getting online, and with authors keeping control over the integrity of their work and the right to be properly acknowledged and cited.",
      "In practice, “free to read” and “free to reuse” are different. Reuse depends on the **licence**. Many OA articles use a [[creative-commons|Creative Commons]] licence: CC BY lets anyone reuse the work, even commercially, as long as they credit the authors; licences with NC (non-commercial) or ND (no derivatives) are more restrictive. See {{creative-commons}} for the details.",
      {h:"The routes to open access"},
      {table:[
        ["Route","How it works","Who pays"],
        ["Gold","The publisher makes the article free on its site as soon as it is published","Often authors or their funders, through an [[article-processing-charge|APC]]"],
        ["Green","The author deposits a version in a repository (self-archiving), sometimes after an [[embargo-period|embargo]]","Usually no fee to authors"],
        ["Hybrid","A subscription journal makes single articles OA for a fee","Authors or funders pay an APC"],
        ["Diamond","An OA journal charges neither readers nor authors","Funded by universities, societies, governments or foundations"],
        ["Bronze","Free to read on the publisher’s site, but with no open licence","The publisher, for now; access can be withdrawn"]
      ]},
      "APCs vary widely: from a few hundred US dollars to several thousand at many journals, and more than ten thousand at a few prestigious ones. Many publishers offer waivers or discounts, for example for authors from lower-income countries, and many institutions have agreements that cover the fees.",
      {warn:"“Open access” describes how an article can be read, not how well it was checked. Many excellent journals are fully OA, and many poor or predatory ones are too (Lesson 5). Judge the journal and the article, not the access model."}
    ]},
    {h:"The versions of a paper", body:[
      "One article can exist in several versions. Knowing which one you’re reading matters, because they can differ. A recommended set of names comes from the NISO/ALPSP Journal Article Versions guidance (2008); the main ones are below.",
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="t4a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="10" y="8" width="320" height="62" rx="8" stroke-width="2"/><text x="20" y="30">Author’s original / preprint</text><text class="s" x="20" y="48">Before peer review. Free on a preprint</text><text class="s" x="20" y="63">server or the author’s page</text><path class="d-ink" d="M60 72V106" stroke-width="2" fill="none" marker-end="url(#t4a4)"/><text class="s" x="74" y="94">peer review, revisions</text><rect class="d-sage" x="10" y="110" width="320" height="78" rx="8" stroke-width="2"/><text x="20" y="132">Accepted manuscript</text><text class="s" x="20" y="150">Final text after review, before the</text><text class="s" x="20" y="165">publisher’s editing and layout. Often in</text><text class="s" x="20" y="180">repositories (green open access)</text><path class="d-ink" d="M60 190V224" stroke-width="2" fill="none" marker-end="url(#t4a4)"/><text class="s" x="74" y="212">copyediting, typesetting</text><rect class="d-gold" x="10" y="228" width="320" height="78" rx="8" stroke-width="2"/><text x="20" y="250">Version of record</text><text class="s" x="20" y="268">The publisher’s final version, with a DOI.</text><text class="s" x="20" y="283">Free (gold, diamond, hybrid, bronze) or</text><text class="s" x="20" y="298">behind a paywall</text><path class="d-ink" d="M60 308V342" stroke-width="2" fill="none" marker-end="url(#t4a4)"/><text class="s" x="74" y="330">if errors are found</text><rect class="d-rose" x="10" y="346" width="320" height="76" rx="8" stroke-width="2"/><text x="20" y="368">Corrected version or retraction</text><text class="s" x="20" y="386">A correction notice is linked to the</text><text class="s" x="20" y="401">article; a retracted article stays</text><text class="s" x="20" y="416">visible but clearly marked</text></svg>', alt:"Four stacked boxes. Author’s original or preprint: before peer review, free on a preprint server or author’s page. After peer review and revisions: accepted manuscript, final text before the publisher’s editing, often in repositories (green open access). After copyediting and typesetting: version of record, the publisher’s final version with a DOI, free or behind a paywall. If errors are found: a corrected version or a retraction.", cap:"The main versions of a journal article and where each is usually found."},
      {list:[
        "A **[[preprint]]** (the author’s original, or a version under review) hasn’t passed peer review. Its conclusions may change.",
        "An accepted manuscript has the content of the peer-reviewed article, but not the publisher’s copyediting, layout or page numbers. Repositories often hold this version legally.",
        "The [[version-of-record|version of record]] is the publisher’s final, formally published version. When you cite, you normally cite this one."
      ]},
      {tip:"Repository copies usually say which version they are on the cover page or the repository record (“accepted manuscript”, “postprint”, “author’s final version”). If you quote from one, check that the wording matches the published version, or say which version you used."}
    ]},
    {h:"Preprints: fast, useful and unreviewed", body:[
      "A preprint server is a website where researchers post papers before (or while) they go through peer review. Some long-standing examples:",
      {list:[
        "**arXiv** (started in 1991): physics, mathematics, computer science and related fields. In some of these fields, posting to arXiv is routine.",
        "**bioRxiv** (2013) and **medRxiv** (2019): biology and health sciences. Since 2025 both are run by a non-profit organisation, openRxiv.",
        "Others include SSRN and SocArXiv (social sciences), PsyArXiv (psychology), EarthArXiv (earth sciences), Research Square (many fields) and regional servers such as SciELO Preprints and AfricArXiv."
      ]},
      "Servers screen submissions (for example, rejecting non-research or obviously dangerous material), but **screening is not peer review**. medRxiv, for instance, displays a warning on its papers that they have not been certified by peer review and should not guide clinical practice or be reported as established information.",
      "Preprints let results spread in days instead of months, let other researchers comment early, and are free to read. During the COVID-19 pandemic they were central to sharing results quickly, and some preprints later changed substantially or were never published in a journal.",
      {h:"Reading a preprint sensibly"},
      {ol:[
        "Check whether it’s a preprint (the server name, a “preprint” label, a DOI from the server).",
        "Look for a link to a published version; many servers add one automatically. Search the title too, since the published title may differ slightly.",
        "If it was published, use the published version, and notice what changed.",
        "If not, treat its conclusions as provisional and look for what other experts say about it."
      ]}
    ]},
    {h:"Getting past the paywall legally", body:[
      "Unit 2 covers this in depth ({{full-text-access}}). The short version: a legal free copy often exists.",
      {list:[
        "**Search the title** in Google Scholar and check “All versions”, or in open repository search engines such as CORE or BASE; browser tools such as Unpaywall look for legal OA copies automatically.",
        "**Check the authors’ pages** and their university repository.",
        "**Ask a library.** Public libraries may offer some databases with a library card; many university libraries allow visitors to use resources on site; [[interlibrary-loan|interlibrary loan]] can get almost anything (sometimes for a fee). Programmes such as Research4Life provide free or low-cost access to institutions in many lower-income countries.",
        "**Email the author.** Authors are usually allowed to share a copy for personal research and are often pleased to be asked."
      ]},
      {warn:"Websites that offer millions of paywalled papers for free without permission (sometimes called [[shadow-library|shadow libraries]]) infringe copyright in most countries, whatever you think of the subscription system. Use the legal routes above; they work more often than people expect."}
    ]},
    {h:"Policies are pushing towards open access", body:[
      "Many research funders now require the work they pay for to be open access. Two examples:",
      {list:[
        "**Plan S**, launched in 2018 by cOAlition S (a group of mainly European national funders and charities), requires funded publications from 2021 onwards to be open access immediately, in OA journals, on OA platforms or in repositories without an embargo.",
        "**In the United States**, a 2022 guidance memo from the White House Office of Science and Technology Policy asked federal agencies to make publications from research they fund free to read without an embargo, with updated agency policies due by the end of 2025 (the National Institutes of Health brought its policy forward to July 2025). Each agency sets its own details."
      ]},
      "Policies differ by country, funder and institution, and they change, so researchers check their own funder’s current rules. For you as a reader, the trend means more research is free to read every year, and more of it is available as accepted manuscripts in repositories.",
      {key:"Free to read isn’t the same as reliable, and paywalled isn’t the same as better. Access tells you who can read it; Lessons 3 and 5 tell you how far to trust it."}
    ]}
   ],
   try:[
    {id:"t4u1-l4-x1", type:"match", q:"Match each open access route to how it works.", pairs:[
      ["Gold","The publisher makes the article free on publication, often funded by an author fee","Gold OA is free on the publisher’s site immediately, frequently paid for by an APC."],
      ["Green","The author deposits a version in a repository","Green OA is self-archiving, often the accepted manuscript."],
      ["Diamond","Free for readers and authors; costs covered by an institution or society","Diamond journals charge no APC and no subscription."],
      ["Hybrid","A subscription journal makes single articles free for a fee","Hybrid mixes paywalled and paid-OA articles in one journal."],
      ["Bronze","Free to read on the publisher’s site, with no open licence","Bronze articles can be read but not freely reused, and access may be withdrawn."]
    ]},
    {id:"t4u1-l4-x2", type:"order", q:"Put these versions of one article in the order they come into existence.", items:[
      {t:"Preprint posted to a server", why:"The author’s original comes first, before or during peer review."},
      {t:"Accepted manuscript after peer review", why:"Peer review and revisions produce the accepted text."},
      {t:"Version of record published with a DOI", why:"The publisher copyedits and typesets the accepted text and publishes it."},
      {t:"Correction notice linked to the article", why:"Corrections can only follow publication, when readers spot an error."}
    ]},
    {id:"t4u1-l4-x3", type:"mcq", q:"Dmitri finds a diagram in an open access article and wants to reuse it in a training booklet his company will sell. What does he need to check first?", options:[
      {t:"The article’s licence: CC BY allows commercial reuse with credit; a licence with NC or no open licence does not", ok:true, why:"Free to read doesn’t automatically mean free to reuse. The licence sets the terms."},
      {t:"Nothing: open access means anyone can reuse it for anything", why:"Only some OA licences (such as CC BY) allow commercial reuse, and bronze OA has no open licence at all."},
      {t:"Whether the article has an impact factor", why:"The impact factor is about citations to the journal; it says nothing about reuse rights."},
      {t:"Whether the article was peer-reviewed", why:"Peer review affects how much to trust the content, not whether he may reuse it."}
    ]},
    {id:"t4u1-l4-x4", type:"mcq", q:"Mei sees a news story: “Scientists discover that a common spice prevents dementia.” The link goes to a medRxiv paper posted ten days ago. What is the most sensible reading?", options:[
      {t:"It’s an unreviewed early report; check for a published version and what other experts say, and treat the claim as provisional", ok:true, why:"medRxiv papers haven’t been peer-reviewed, and the server itself warns they shouldn’t be reported as established information."},
      {t:"It’s established, because it’s on a scientific website", why:"Preprint servers screen submissions but don’t peer-review them."},
      {t:"It must be false, because preprints are unreliable", why:"Preprints are legitimate research, just not yet checked. Many are later published with few changes."},
      {t:"It’s reliable if the news story quotes the author", why:"The author’s confidence doesn’t replace review by independent experts."}
    ]},
    {id:"t4u1-l4-x5", type:"spot", q:"Ana asked a group chat how to read a paywalled article. Tap each suggestion that is **illegal or wrong**.", ask:"illegal or wrong", parts:[
      {t:"“Search the title in Google Scholar and check ‘All versions’.”", flag:false, why:"Legal and often successful: Scholar links to repository and author copies."},
      " ",
      {t:"“Email the author and ask for a copy.”", flag:false, why:"Legal and usually welcome. Authors can generally share for personal research."},
      " ",
      {t:"“Use one of those sites with millions of free paywalled papers; it’s legal because research is publicly funded.”", flag:true, why:"Public funding doesn’t change copyright. Shadow libraries infringe copyright in most countries."},
      " ",
      {t:"“Check the university repository of the first author.”", flag:false, why:"Legal: repositories often hold the accepted manuscript."},
      " ",
      {t:"“A repository copy is useless because it’s not peer-reviewed.”", flag:true, why:"Many repository copies are accepted manuscripts, which have passed peer review and lack only the publisher’s editing and layout. Even a preprint isn’t useless; it just needs more caution. Check which version it is."},
      " ",
      {t:"“Ask at a library about interlibrary loan.”", flag:false, why:"Legal: libraries can borrow or buy copies from other libraries."}
    ]},
    {id:"t4u1-l4-x6", type:"sort", q:"Is each statement true or false?", buckets:["True","False"], items:[
      {t:"Open access articles can be peer-reviewed in exactly the same way as subscription articles", b:0, why:"The access model is separate from the review process; many OA journals have rigorous review."},
      {t:"If an article is free to read, you may reuse it however you like", b:1, why:"Reuse depends on the licence. Bronze OA has no open licence; NC and ND licences restrict reuse."},
      {t:"Diamond open access journals charge authors a fee", b:1, why:"Diamond journals charge neither authors nor readers."},
      {t:"An accepted manuscript has the same content as the peer-reviewed article", b:0, why:"It’s the reviewed text, without the publisher’s copyediting and layout (so small wording differences are possible)."},
      {t:"Preprints have been checked by peer reviewers", b:1, why:"They are posted before or during review; servers only screen them."},
      {t:"Funder policies on open access differ between countries and funders", b:0, why:"Plan S, US agency policies and others set different rules, and they change over time."}
    ]}
   ],
   apply:{intro:"Find out how much research you can reach for free, legally. No university login needed (if you have one, note what it adds).", tasks:[
     {t:"Find a legal free copy", how:["Find a research article on a topic you care about that is behind a paywall on the publisher’s site.","Search its exact title in Google Scholar and open “All versions”, or search it in CORE or BASE.","Note whether you found a free copy, where, and which version it is (preprint, accepted manuscript or version of record)."], write:"Article… Paywalled where… Free copy found at… Which version… How I could tell…"},
     {t:"Read a licence", how:["Open any open access article (a DOAJ-listed journal is a good place to look).","Find its licence (often near the top, in “Rights”, or at the end).","Write what it lets you do and what it doesn’t, in your own words."], write:"Article… Licence… What I may do… What I may not do…"},
     {t:"Follow a preprint", how:["Open a preprint server in your area of interest (arXiv, bioRxiv, medRxiv, SocArXiv, EarthArXiv…).","Find a preprint at least a year old.","Check whether it was later published (look for a “Now published in” link or search the title). If so, compare the abstracts and note any change."], write:"Preprint… Posted… Published version found? Where… What changed…"}
   ], proof:"Notes with one paywalled article and the legal free copy you found (or where you looked), one licence explained in your own words, and the history of one preprint."},
   read:[
     {book:"acrl", where:"Frame “Information Has Value”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u1-l5", title:"Judging authority: predatory journals and retractions", minutes:55,
   hook:{q:"In 1998 a respected medical journal, The Lancet, published a small study that was later used to claim a link between the MMR vaccine and autism. How long was it before the journal fully retracted it?", options:["About a month","About two years","About twelve years","It was never retracted"], answer:2, reveal:"**About twelve years.** The Lancet retracted the paper in February 2010, days after the UK’s General Medical Council found that the lead author had acted dishonestly and breached ethics rules. By then the claim had spread widely. Peer review in a famous journal didn’t stop it, and retraction didn’t erase it. This lesson shows how to judge authority, spot predatory journals and check whether a paper still stands."},
   goals:[
     "Explain why authority depends on the community and the question (“Authority Is Constructed and Contextual”)",
     "Evaluate a scholarly source with a set of practical questions",
     "Recognise the warning signs of predatory and hijacked journals without unfairly dismissing new, small or non-Western journals",
     "Tell corrections, expressions of concern and retractions apart, and check a paper’s status"
   ],
   learn:[
    {h:"Authority is constructed and contextual", body:[
      {lead:"Why trust a source at all? Because someone has authority on the question. But authority isn’t a fixed badge."},
      "The ACRL Framework puts it this way: information resources reflect their creators’ expertise and credibility, and are evaluated based on the information need and the context in which the information will be used. Authority is **constructed** because different communities recognise different kinds of authority, and **contextual** because the question decides how much authority you need.",
      {list:[
        "**Subject expertise:** a hydrologist on river flows, a historian on an archive.",
        "**Position:** a statistics office on official figures, a court on what the law requires.",
        "**Lived experience:** people living with a condition, or residents of a flooded town, have authority on what it is like, which researchers need too."
      ]},
      "So a famous physician is an authority on medicine but not on economics, and a community health worker’s account may be the best source on how a clinic actually runs, while an epidemiologist’s study is the best source on how common a disease is. Neither replaces the other.",
      {tip:"This is why [[lateral-reading|lateral reading]] works for scholarly sources too: you find out what the relevant community says about an author, a journal or a claim, instead of trusting the source’s description of itself."}
    ]},
    {h:"Questions to ask of a scholarly source", body:[
      "Lesson 3 showed that peer review is a filter, not a guarantee. These questions help you judge a specific article. You won’t need all of them every time; the more that rides on a decision, the more you ask.",
      {table:[
        ["Ask","Look for"],
        ["Who wrote it?","Relevant expertise; affiliations; other work on the topic (an author profile or [[orcid-id|ORCID]] record helps)"],
        ["Where was it published?","A journal recognised in the field; a real publisher; the article type (research, review, editorial)"],
        ["How was it done?","A method suited to the question; enough detail to repeat it; [[sample]] size; stated limitations"],
        ["When?","Date of publication and of the data; whether newer work has changed the picture"],
        ["Who paid, and who gains?","Funding and [[conflict-of-interest|conflict-of-interest]] statements (usually near the end)"],
        ["How have others responded?","Later studies, reviews, published comments. Note that a high citation count can include citations that criticise it"],
        ["Is it still standing?","Corrections, expressions of concern or a retraction (see below)"]
      ]},
      {ex:"Oluwaseun finds an article claiming a herbal extract cures malaria.\n• Who: two authors; one works for a company selling the extract (funding statement).\n• Where: a journal he can’t find in DOAJ, Scopus or PubMed; its site promises review in 72 hours.\n• How: 20 patients, no comparison group.\n• Others: no later studies; national malaria guidelines don’t mention it.\nConclusion: not evidence he should rely on. The weaknesses pile up; any one alone would be a reason to look harder, not proof the claim is false.", label:"Worked example: judging one article"},
      {key:"No single feature proves a source good or bad. Look for a pattern across several questions."}
    ]},
    {h:"Predatory journals", body:[
      "In 2019, a group that included researchers, publishers, funders and librarians agreed a consensus definition, published in *Nature* (Grudniewicz and colleagues): [[predatory-journal|predatory journals]] and publishers are entities that prioritise self-interest at the expense of scholarship and are characterised by false or misleading information, deviation from best editorial and publication practices, a lack of transparency, and/or the use of aggressive and indiscriminate solicitation practices.",
      "In plain words: they take fees from authors and offer little or no real editing or peer review, while pretending otherwise. Common warning signs:",
      {list:[
        "**Unsolicited emails** flattering you and inviting a submission, often outside your field.",
        "**Promises of very fast review** or guaranteed acceptance.",
        "**Fees that are hidden** until after acceptance, or unclear.",
        "**Names that imitate** a well-known journal, or a very broad scope (“Journal of Science, Engineering and Humanities”).",
        "**Fake or misleading metrics**: invented “impact factors” from unknown companies, false claims of indexing.",
        "**Editorial boards** with people who didn’t agree to be listed, or no named editors at all; no clear address for the publisher.",
        "**Poor quality** articles, many spelling errors, broken links, no clear peer review policy."
      ]},
      "A related trap is the **[[hijacked-journal|hijacked journal]]**: a fake website that copies the name and ISSN of a real journal (often one with no strong web presence) and collects fees from authors who think they are submitting to the real one.",
      {warn:"Be fair. A journal is not predatory just because it is new, small, charges an APC, publishes in a language other than English, or is based in a lower-income country. Many excellent journals are all of those. Judge the practices, not the label or the location."}
    ]},
    {h:"Checking a journal", body:[
      "The **Think. Check. Submit.** initiative, launched in 2015 by scholarly communication organisations including DOAJ, OASPA, INASP, STM and the ISSN International Centre, publishes a checklist for authors choosing a journal. It works just as well for readers judging one.",
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="t4a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="10" y="8" width="236" height="48" rx="8" stroke-width="2"/><text x="20" y="28">Do people in the field</text><text x="20" y="46">know and publish in it?</text><rect class="d-lup" x="10" y="78" width="236" height="48" rx="8" stroke-width="2"/><text x="20" y="98">Is the publisher named,</text><text x="20" y="116">with real contact details?</text><rect class="d-lup" x="10" y="148" width="236" height="48" rx="8" stroke-width="2"/><text x="20" y="168">Is peer review described,</text><text x="20" y="186">with no guaranteed acceptance?</text><rect class="d-lup" x="10" y="218" width="236" height="48" rx="8" stroke-width="2"/><text x="20" y="238">Indexed where it claims?</text><text class="s" x="20" y="255">Check the index itself</text><rect class="d-lup" x="10" y="288" width="236" height="48" rx="8" stroke-width="2"/><text x="20" y="308">Are fees and licences</text><text x="20" y="326">stated clearly?</text><path class="d-ink" d="M128 58V74" stroke-width="2" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M128 128V144" stroke-width="2" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M128 198V214" stroke-width="2" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M128 268V284" stroke-width="2" fill="none" marker-end="url(#t4a5)"/><text class="s" x="136" y="70">yes</text><text class="s" x="136" y="140">yes</text><text class="s" x="136" y="210">yes</text><text class="s" x="136" y="280">yes</text><rect class="d-rose" x="262" y="78" width="70" height="188" rx="8" stroke-width="2"/><text x="297" y="150" text-anchor="middle" class="s">Any “no”:</text><text x="297" y="166" text-anchor="middle" class="s">warning</text><text x="297" y="182" text-anchor="middle" class="s">sign. Dig</text><text x="297" y="198" text-anchor="middle" class="s">deeper</text><path class="d-ink" d="M248 32H297V74" stroke-width="1.5" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M248 102H258" stroke-width="1.5" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M248 172H258" stroke-width="1.5" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M248 242H258" stroke-width="1.5" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M248 312H297V270" stroke-width="1.5" fill="none" marker-end="url(#t4a5)"/><path class="d-ink" d="M128 338V356" stroke-width="2" fill="none" marker-end="url(#t4a5)"/><rect class="d-sage" x="10" y="360" width="322" height="62" rx="8" stroke-width="2"/><text x="171" y="383" text-anchor="middle">All yes: probably a real journal.</text><text x="171" y="403" text-anchor="middle" class="s">Still judge the article itself:</text><text x="171" y="417" text-anchor="middle" class="s">good journals publish weak papers too</text></svg>', alt:"A checklist flow with five questions in a column: do people in the field know and publish in it; is the publisher named with real contact details; is peer review described with no guaranteed acceptance; is it indexed where it claims (check the index itself); are fees and licences stated clearly. Each yes leads down to the next; any no leads to a box saying warning sign, dig deeper. All yes leads to: probably a real journal, but still judge the article itself.", cap:"A quick journal check based on the Think. Check. Submit. questions. It flags journals to look into; it doesn’t prove anything on its own."},
      "Other useful checks:",
      {list:[
        "**For an open access journal, is it in the DOAJ?** DOAJ lists OA journals that meet its criteria. Being listed is a good sign; not being listed is not proof of anything (subscription journals aren’t in DOAJ at all, and some good OA journals never apply).",
        "**Does the ISSN check out** in the ISSN Portal, and does it match the website you are on?",
        "**Is the publisher a member of COPE** (the Committee on Publication Ethics) or OASPA (for OA publishers)? Membership can be checked on their websites.",
        "**Ask a librarian.** Librarians assess journals all the time, and many will help members of the public."
      ]}
    ]},
    {h:"Corrections, expressions of concern and retractions", body:[
      "Published research can be fixed or withdrawn. Journals use three main kinds of notice:",
      {table:[
        ["Notice","What it means","The article…"],
        ["Correction (erratum, corrigendum)","An error that doesn’t undermine the main findings","Stands, with the fix linked"],
        ["[[expression-of-concern|Expression of concern]]","The editors have serious doubts, often while an investigation is under way","Stands, with a warning"],
        ["[[retraction|Retraction]]","The findings can’t be relied on, or the work breached research or publication ethics","Stays visible but clearly marked as retracted"]
      ]},
      "COPE (the Committee on Publication Ethics) publishes retraction guidelines that many journals follow; it updated them in 2025. They treat retraction as a way to correct the record, not to punish authors. Editors should consider retraction when the findings can’t be relied on, whether because of [[research-misconduct|misconduct]] (such as fabricated data) or **honest error** (such as a major miscalculation), and also for problems such as plagiarism, unethical research and manipulated peer review. The retraction notice should explain clearly why the article is being retracted and be linked to the article.",
      {key:"A retraction for honest error is the system working. Researchers who retract their own flawed work deserve credit, not suspicion."},
      "Problems also come from organised fraud. **[[paper-mill|Paper mills]]** are businesses that produce fake or low-quality manuscripts and sell authorship on them; publishers have retracted large batches of such papers in recent years. Unit 9 covers research integrity in more depth ({{research-integrity}})."
    ]},
    {h:"Checking whether a paper still stands", body:[
      "Retracted papers keep being cited, partly because people find them in old downloads or through other papers’ reference lists. Before relying on a paper, especially an important or older one:",
      {ol:[
        "**Open its page on the publisher’s site** (follow the DOI). Retractions, corrections and expressions of concern are normally shown there. Many journals use a Crossmark button that shows the current status.",
        "**Search the Retraction Watch Database.** Crossref acquired it in 2023 and made it openly available; it lists tens of thousands of retractions.",
        "**Let your tools help.** The free reference manager Zotero (Unit 4) has flagged retracted items in your library since 2019, using Retraction Watch data, for items with a DOI or PubMed ID. PubMed also labels retracted articles.",
        "**Search the title with the word “retraction”** or “correction”.",
        "**If you have already cited a retracted paper,** don’t panic: check whether the retraction affects the point you made, then remove or replace the citation, or cite it explicitly as retracted if you are discussing the retraction itself."
      ]},
      {warn:"A PDF you downloaded years ago won’t update itself. The publisher’s page is the source of truth for a paper’s status."},
      "Finally, remember the Lancet case from the start of this lesson: one well-placed paper, peer-reviewed in a famous journal, was retracted only after twelve years and still circulates. The skills in this unit (placing a paper in the conversation, checking the journal, checking the status, and looking for the weight of evidence) are how careful readers avoid being misled by a single source."
    ]}
   ],
   try:[
    {id:"t4u1-l5-x1", type:"mcq", q:"Sione is researching how a coastal village rebuilt after a cyclone. Whose account has the most authority on **what residents experienced during the rebuilding**?", options:[
      {t:"Residents who lived through it, gathered and reported carefully", ok:true, why:"For lived experience, the people who lived it have authority. A careful method (such as interviews) makes their accounts usable as evidence."},
      {t:"A famous engineer who has never visited the village", why:"An engineer has authority on structures, not on residents’ experiences. Authority depends on the question."},
      {t:"A viral video’s comment section", why:"Anonymous comments give no way to tell who was actually there."},
      {t:"An encyclopedia article on cyclones in general", why:"A tertiary overview of cyclones can’t tell you about one village’s experience."}
    ]},
    {id:"t4u1-l5-x2", type:"spot", q:"Kenji received this email. Tap each part that is a **warning sign of a predatory journal**.", ask:"a warning sign", parts:[
      {t:"Dear Esteemed Professor, we were very impressed by your outstanding work", flag:true, why:"Generic flattery from strangers, often sent in bulk, is a classic sign of indiscriminate solicitation."},
      " ",
      {t:"and invite you to submit to the Global Journal of Advanced Sciences and Humanities,", flag:true, why:"An extremely broad scope and a generic, grand name are common in predatory journals."},
      " ",
      {t:"which uses peer review by experts in your field.", flag:false, why:"Real journals say this too. On its own it isn’t a warning sign; check whether the review process is described in detail."},
      " ",
      {t:"Acceptance is guaranteed within 72 hours.", flag:true, why:"Real peer review takes weeks or months and can’t guarantee acceptance."},
      " ",
      {t:"Our impact factor is 6.8 (Universal Impact Factor).", flag:true, why:"The Journal Impact Factor comes only from Clarivate. Look-alike “impact factors” from unknown companies are a common trick."},
      " ",
      {t:"Articles are published under a CC BY licence.", flag:false, why:"Many reputable OA journals use CC BY. It isn’t a warning sign by itself."},
      " ",
      {t:"The publication fee will be sent after acceptance.", flag:true, why:"Fees should be stated clearly before you submit. Hidden fees revealed after acceptance are a warning sign."}
    ]},
    {id:"t4u1-l5-x3", type:"sort", q:"Is each feature a warning sign worth investigating, or not a problem in itself?", buckets:["Warning sign","Not a problem in itself"], items:[
      {t:"The journal is two years old", b:1, why:"Every journal was new once. Judge its practices, not its age."},
      {t:"The journal charges an article processing charge", b:1, why:"Many reputable OA journals charge APCs. Hidden or unclear fees are the problem, not fees as such."},
      {t:"The editorial board lists a famous scientist who says she never agreed to it", b:0, why:"Listing people without consent is deception: a strong warning sign."},
      {t:"The journal publishes mainly in Spanish", b:1, why:"Language says nothing about quality. Many strong journals publish in languages other than English."},
      {t:"The website gives no physical address or named publisher", b:0, why:"Real publishers are identifiable and contactable; hiding who runs a journal is a warning sign."},
      {t:"The journal claims to be in Web of Science, but a search there doesn’t find it", b:0, why:"False indexing claims are a common deception. The index itself is the authority."},
      {t:"The journal is based in a lower-income country", b:1, why:"Location is not evidence of quality either way; judge the practices."}
    ]},
    {id:"t4u1-l5-x4", type:"match", q:"Match each notice to its meaning.", pairs:[
      ["Correction","An error that doesn’t change the main conclusions has been fixed","The article stands, with the fix linked to it."],
      ["Expression of concern","Editors have serious doubts and may be investigating","It’s a warning while the outcome is uncertain."],
      ["Retraction","The findings can’t be relied on, or the work breached ethics","The article stays visible but is marked as retracted."],
      ["Version of record","The publisher’s final published version","Not a notice at all: this is the formally published article."]
    ]},
    {id:"t4u1-l5-x5", type:"order", q:"Fatima wants to rely on a 2014 paper for a policy brief. Put sensible checks in order, from first to last.", items:[
      {t:"Find the paper’s DOI (in her notes or by searching the title)", why:"She needs the DOI first, because it leads reliably to the publisher’s current page."},
      {t:"Follow the DOI to the publisher’s page and look for notices", why:"The publisher’s page is the quickest and most authoritative place to see corrections or retractions."},
      {t:"If no notice appears there, double-check in the Retraction Watch Database", why:"A second check, done after the first, in case a notice is hard to spot or the page isn’t updated."},
      {t:"Once she knows the paper still stands, look for newer studies and reviews on the same question", why:"Even a paper that stands may have been overtaken by later evidence."},
      {t:"Decide how much weight the paper can carry in her brief", why:"Only after checking status and newer evidence can she judge how far to rely on it."}
    ]},
    {id:"t4u1-l5-x6", type:"mcq", q:"A research team discovers a coding error that reverses the main finding of their own published paper. They ask the journal to retract it. What does this tell you?", options:[
      {t:"The team is behaving with integrity; retraction for honest error is how the record is corrected", ok:true, why:"COPE’s guidelines include honest error as a reason to retract. Self-correction is good practice."},
      {t:"The team committed misconduct", why:"An honest error isn’t misconduct. Misconduct means fabrication, falsification or plagiarism."},
      {t:"All their other papers are unreliable", why:"One error doesn’t make all their work unreliable; their willingness to correct is a good sign."},
      {t:"The journal should quietly delete the paper", why:"Retracted papers stay visible and clearly marked, with a notice explaining why, so the record stays complete."}
    ]},
    {id:"t4u1-l5-x7", type:"mcq", q:"Lucía cited a paper in her thesis draft. She now learns it was retracted last month because the data couldn’t be verified. What should she do?", options:[
      {t:"Check what she used it for, then remove or replace the citation, or cite it as retracted if she discusses the retraction", ok:true, why:"A retracted finding shouldn’t support an argument. Citing it as retracted is fine when the retraction itself is relevant."},
      {t:"Keep it: it was valid when she found it", why:"What matters is whether the finding can be relied on now. It can’t."},
      {t:"Keep it, but use the PDF she downloaded before the retraction", why:"The old PDF doesn’t change the paper’s status; it just hides the notice."},
      {t:"Delete her whole thesis chapter", why:"An overreaction. Usually only the claims that depended on that paper need attention."}
    ]}
   ],
   apply:{intro:"Practise judging authority and checking status on real sources.", tasks:[
     {t:"Run the journal check", how:["Pick two journals: one you already trust (a well-known journal in a field you know) and one you know nothing about (for example, from a search result or an email invitation).","For each, answer the five questions from the diagram: known in the field? publisher identifiable? peer review described? indexed where it claims (check the index)? fees and licences clear?","For an OA journal, search for it in the DOAJ; check its ISSN in the ISSN Portal."], write:"Journal 1… answers… Journal 2… answers… What I concluded, and how confident I am…"},
     {t:"Find a real retraction notice", how:["Search for “Lancet 1998 Wakefield retraction”, or search the Retraction Watch Database for any topic you know.","Open one retraction notice on the publisher’s site.","Note who retracted the article, the reason given, and how the article page shows its status."], write:"Paper… Retracted by… Reason… How the page shows it… Was it easy to find?"},
     {t:"Map the authority on a question", how:["Choose a question with several sides, such as “Should our town build a seawall?”","List three kinds of people or organisations with authority on parts of it (for example, coastal engineers, residents, an environment agency, economists).","For each, write which part of the question they have authority on, and which part they don’t."], write:"Question… Source 1: authority on… not on… Source 2… Source 3…"}
   ], proof:"Notes with two journals checked against five questions, one real retraction notice summarised, and an authority map for one question."},
   read:[
     {book:"acrl", where:"Frame “Authority Is Constructed and Contextual”"},
     {book:"wlsf", where:"Part IV, Chapter 20 “Stupid Journal Tricks”", note:"Caulfield’s short guide to how weak or predatory journals imitate real ones."}
   ]
  }
  ],
  checkpoint:["t4u1-q02","t4u1-q05","t4u1-q10","t4u1-q13","t4u1-q15","t4u1-q19","t4u1-q22","t4u1-q24","t4u1-q28","t4u1-q31","t4u1-q35","t4u1-q38"],
  codex:[
   {id:"what-is-research", title:"What research is", aka:["research","scholarly research","inquiry","basic and applied research","empirical research"], tags:["research"],
    summary:"Research as systematic inquiry that creates new knowledge and shares it for checking, in every field, not only laboratories.",
    levels:{
     starter:[
      "Picture a shared map drawn by many surveyors. Reading the map is everyday research. Measuring a new street carefully, writing down how you measured it and adding it to the map for others to check is research in the academic sense.",
      "Systematic research has four features: a clear question, a method that fits the question, evidence handled honestly (including results that don’t fit), and sharing the work so others can examine it.",
      {key:"Research gives evidence, not proof. Findings become reliable when different people, using different methods, reach similar results."},
      "The word [[research-term|research]] has two meanings. In everyday life it means finding out what is already known: comparing products, reading about a health condition. In universities, agencies and many jobs it means **systematic inquiry that creates new knowledge and shares it so others can check it**."
     ],
     builder:[
      "Research looks different across fields because **the method follows the question**:",
      {list:[
        "**[[empirical-research|Empirical]]** research collects or analyses observations: experiments, surveys, interviews, field measurements, archives, records.",
        "**Non-empirical** research works with ideas: proofs, theories, philosophical and legal arguments, close readings of texts.",
        "**Basic** research aims to understand; **[[applied-research|applied]]** research aims to solve a practical problem. Many projects do both.",
        "Evidence can be [[quantitative-data|quantitative]] (numbers: how many, how much) or [[qualitative-data|qualitative]] (words, observations, images: what it means, how it works); mixed methods combine the two."
      ]},
      "Research is done by universities, government agencies and statistics offices, international organisations, NGOs and think tanks, companies, and communities (citizen science). It is shared as journal articles, books, conference papers, reports, theses, datasets and more.",
      "The ACRL Framework describes two habits of mind that help: **Research as Inquiry** (research is iterative; answers raise new questions) and **Scholarship as Conversation** (communities of scholars discuss and build on each other’s work over time). A single study is one turn in that conversation, so readers look for reviews of many studies and for how later work responded.",
      "A useful test for any project, including your own: could someone else follow what you did, check your evidence and reach their own judgement? If the answer is yes, it has the core of research, whatever the field or setting. If the method is hidden or the evidence can’t be examined, it may still be interesting, but it can’t be checked in the same way."
     ],
     pro:[
      "Fields differ in what counts as a contribution and how it is checked. In experimental sciences, replication by independent teams is the gold standard; in history, other historians re-examine the sources and the interpretation; in mathematics, a proof is checked step by step; in practice-based arts research, the work is assessed together with a written reflection on what it shows.",
      "Different research paradigms also disagree about what knowledge is. Positivist approaches look for general, measurable patterns; interpretive approaches look for meaning and context (see {{scientific-method-sociology}}). Many researchers combine them.",
      "Common errors when people talk about research:",
      {list:[
        "**Treating one study as settled.** Effects found in one sample, place or time often shrink or vary elsewhere.",
        "**Treating disagreement as failure.** Disagreement often marks the frontier of what is known, and differences between studies carry information.",
        "**Treating uncertainty as all-or-nothing.** Some conclusions rest on decades of consistent evidence; others on one small study. Good readers weigh the body of evidence.",
        "**Assuming neutrality or assuming bias.** Researchers have values and funders; transparent methods, disclosure of interests and criticism from others are how the system manages that."
      ]},
      "Bhattacherjee’s textbook (2012) remains a clear introduction to these ideas from a social science angle; it predates the spread of preprints, open data and preregistration, which are now common parts of how research is shared and checked."
     ]
    },
    related:["source-types","scholarly-publishing","scientific-method-sociology"],
    read:[{book:"bhatt", where:"Chapter 1, “Science and Scientific Research”, and Chapter 3, “The Research Process”"},{book:"acrl", where:"Frames “Research as Inquiry” and “Scholarship as Conversation”"}],
    sources:[{t:"ACRL: Framework for Information Literacy for Higher Education", url:"https://www.ala.org/acrl/standards/ilframework"},{t:"Open Textbook Library: Social Science Research: Principles, Methods, and Practices", url:"https://open.umn.edu/opentextbooks/textbooks/social-science-research-principles-methods-and-practices"}], checked:"2026-11"},

   {id:"source-types", title:"Kinds of sources", aka:["primary, secondary and tertiary sources","scholarly vs popular","trade publications","information cycle","article types"], tags:["research","sources"],
    summary:"Primary, secondary and tertiary sources relative to a question; scholarly, popular and trade sources; and the formats scholarly work takes.",
    levels:{
     starter:[
      "Sources sit at different distances from the evidence. A [[primary-source|primary source]] is the evidence itself; a [[secondary-source|secondary source]] analyses primary sources; a [[tertiary-source|tertiary source]] (an encyclopedia, a textbook) summarises many secondary ones.",
      "The label depends on your question. A 1955 hygiene textbook is an out-of-date tertiary source about hygiene, but a primary source for a historian studying how schools taught hygiene in the 1950s.",
      "Sources also differ by audience. A [[scholarly-source|scholarly source]] is written by experts for experts, with references, and usually peer-reviewed. A [[popular-source|popular source]] explains things for the public. A [[trade-publication|trade publication]] serves one profession.",
      {key:"First say what your question is about. Then label the source."},
      "None of these is simply “better”. Tertiary sources orient you, secondary sources explain and weigh evidence, and primary sources let you check the details. Good research uses all three."
     ],
     builder:[
      {table:[
        ["Field","Usually primary","Usually secondary"],
        ["Sciences, health","Original research article with new data","Reviews, news about studies"],
        ["History","Documents from the time","Historians’ analyses"],
        ["Literature, arts","The work itself","Criticism"],
        ["Law","Laws, court decisions","Commentaries"]
      ]},
      "**The information cycle.** After an event, social posts and live news come first (hours), then news reports and analysis (days), agency reports and data (weeks to months), journal articles (months to years), books and reviews (years), and encyclopedias and textbooks (later). Fast sources are less checked; scholarly sources are slower and more checked.",
      "**Scholarly formats:**",
      {list:[
        "[[journal-article|Journal articles]]: research articles report new work; [[review-article|review articles]] summarise many studies; editorials, letters and commentaries are opinion or discussion.",
        "[[monograph|Monographs]] and edited books, central in the humanities and many social sciences.",
        "[[conference-proceedings|Conference proceedings]], central in computer science and some engineering fields.",
        "Theses and dissertations.",
        "[[grey-literature-term|Grey literature]]: reports, working papers and data from outside commercial and academic publishing (see {{grey-literature}})."
      ]},
      "**Scholarly, popular and trade compared.** Scholarly sources are written by researchers for other experts, cite their evidence in full and are usually peer-reviewed. Popular sources are written by journalists or writers for the public and are checked by editors (to varying degrees). Trade publications are written for one profession and mix news, practical advice and product information. Each is the right choice for some jobs: evidence, understanding, and practice respectively."
     ],
     pro:[
      "Experienced researchers use source types strategically:",
      {list:[
        "**Start broad, then go deep.** A tertiary source gives vocabulary and key names; a recent review or systematic review maps the evidence; primary studies give the details that matter for your question.",
        "**Check the article type, not just the venue.** A journal publishes editorials, letters, corrections and news as well as research. Databases often let you filter by publication type.",
        "**Know your field’s main venues.** In computer science, a top conference paper may carry more weight than a journal article; in history, a monograph from a respected press may be the main output of years of work.",
        "**Mind the time lag.** For very recent events, scholarly sources may not exist yet; agency reports, data releases and preprints may be all there is, and each needs judging on its own terms.",
        "**Treat secondary accounts as claims about primary sources.** When a review or news story summarises a study, check the original for the detail you rely on; summaries often lose caveats."
      ]},
      "Some fields, especially history and law, have their own detailed conventions about sources (for example, distinguishing published from archival primary sources, or binding from persuasive legal authority). When writing in a field, follow its conventions."
     ]
    },
    related:["what-is-research","grey-literature","evaluating-sources","evaluating-scholarly-sources"],
    read:[{book:"owg", where:"Chapter 13, Section 13.1 “The Research Process: Where to Look for Existing Sources”"}],
    sources:[{t:"OpenStax Writing Guide with Handbook, 13.1 The Research Process: Where to Look for Existing Sources", url:"https://openstax.org/books/writing-guide/pages/13-1-the-research-process-where-to-look-for-existing-sources"}], checked:"2026-11"},

   {id:"grey-literature", title:"Grey literature", aka:["gray literature","reports","working papers","official publications"], tags:["research","sources"],
    summary:"Reports, working papers, theses, data and other research produced outside commercial and academic publishing: valuable, fast, and variable in quality.",
    levels:{
     starter:[
      "[[grey-literature-term|Grey literature]] is research and information published by organisations whose main job isn’t publishing: governments, agencies, universities, charities, companies and international organisations.",
      "Examples: a ministry’s report on hospital waiting times, a national statistics release, an NGO’s evaluation of a school programme, a university working paper, a thesis, a conference poster, a technical standard.",
      "It’s called “grey” because it sits outside the usual publishing channels, so it can be harder to find and hasn’t necessarily been peer-reviewed. But it is often the most up-to-date, most local and most practical evidence available.",
      {key:"Grey literature isn’t second-rate. Judge each item on who made it, how, and why."},
      "A good habit: when you find a report, note who published it and whether it describes how the information was gathered."
     ],
     builder:[
      "A widely cited definition is the Luxembourg definition (1997, updated 2004): material produced on all levels of government, academics, business and industry, in print and electronic formats, but not controlled by commercial publishers, that is, where publishing is not the primary activity of the producing body. The Prague definition (2010) extends this to stress that such documents are protected by intellectual property rights and are of sufficient quality to be collected and preserved by libraries or repositories.",
      {h:"Why it matters"},
      {list:[
        "**Speed and locality:** last year’s figures, one city’s evaluation.",
        "**Unique content:** programme evaluations, technical details and policy documents that never reach journals.",
        "**Balance:** studies with null or disappointing results are less likely to be published in journals ([[publication-bias|publication bias]]), but may appear in reports, theses or trial registries. Systematic reviews search grey literature for this reason."
      ]},
      {h:"How to judge it"},
      {list:[
        "Who produced it, and what is their interest (a regulator, a campaign group, a company selling a product)?",
        "Is the method described, and is the data available?",
        "Was it reviewed? Some statistics offices and agencies have strong internal review; others none.",
        "Does it agree with other sources? If not, why?"
      ]},
      "Spelling varies: “grey” in British English and “gray” in American English; both appear in databases, so search for both."
     ],
     pro:[
      "**Finding it** takes different tools from finding journal articles. Search government and agency sites directly (a `site:` search in a web search engine helps), national statistics portals, the publication pages of international organisations (UN agencies, the World Bank, the OECD), institutional repositories, thesis collections, and trial registries for health research. Unit 2 covers the techniques.",
      "**Preserving it** is a real problem: reports disappear when websites are reorganised. Save a copy, note the URL and the date you accessed it, and look for a persistent identifier (some organisations assign DOIs or handles). Web archives can sometimes recover vanished pages.",
      "**Citing it** follows the style’s rules for reports or web pages with an organisation as author (Unit 4).",
      "**Advocacy and commercial reports** deserve particular care. A report from an industry body or a campaigning NGO may be methodologically sound, but its question, framing and choice of what to publish can reflect its interests. Compare it with independent sources, and read the methodology and funding sections before the executive summary.",
      "In evidence synthesis, grey literature searching is a recognised part of good practice because leaving it out can bias results towards published, positive findings. How much to search depends on the review’s question and resources."
     ]
    },
    related:["source-types","evaluating-scholarly-sources","what-is-research"],
    sources:[{t:"Schöpfel (2010), Towards a Prague Definition of Grey Literature (12th International Conference on Grey Literature)", url:"https://lilloa.univ-lille.fr/handle/20.500.12210/71858"}], checked:"2026-11"},

   {id:"scholarly-publishing", title:"How journals and peer review work", aka:["academic publishing","peer review process","impact factor","journal metrics","editorial board"], tags:["research","publishing"],
    summary:"Who runs a journal, the path of a manuscript, the kinds of peer review, what review can and can’t catch, and how journal metrics such as the impact factor work.",
    levels:{
     starter:[
      "An [[academic-journal|academic journal]] publishes scholarly articles in a field. Editors, who are usually working researchers, decide what to publish. They send promising manuscripts to other experts (peer reviewers), who check the methods and reasoning and recommend accepting, revising or rejecting.",
      "Reviewers are usually unpaid. Review often takes months, and most papers are revised at least once before acceptance.",
      "Peer review is a quality filter. It catches many weak methods and overstated claims, but it rarely catches skilful fraud, and it can’t tell whether a finding will hold up when someone repeats the study. That takes [[replication]] and time.",
      "For what [[peer-review|peer review]] means for everyday readers, see Track 1’s entry {{peer-review|Peer review and scientific publishing}}.",
      "Journals are run by publishers of several kinds: scholarly societies, university presses, non-profits and commercial companies. Most journals have an ISSN, and each article usually has a DOI that keeps working even if the website changes."
     ],
     builder:[
      "**The path of a manuscript:** submission (to one journal at a time) → editorial screening (many papers are desk-rejected) → peer review (often two or three reviewers) → decision (accept, minor or major revisions, reject) → revision and re-review → acceptance → copyediting and proofs → publication as the [[version-of-record|version of record]], with a DOI → corrections or retractions if needed.",
      {table:[
        ["Review model","Identities"],
        ["Single-anonymous","Authors don’t know reviewers"],
        ["Double-anonymous","Neither knows the other"],
        ["Triple-anonymous","Editors don’t know authors either"],
        ["Open","Everyone knows"],
        ["Transparent","Reports published with the article"]
      ]},
      "**The [[impact-factor|Journal Impact Factor]]** (Clarivate) for year Y is the number of citations in Y to items the journal published in the two previous years, divided by the number of citable items (articles and reviews) from those two years. Since the 2023 release it is given to all Web of Science Core Collection journals and shown to one decimal place.",
      "**Indexing** in selective databases (Web of Science, Scopus, PubMed/MEDLINE, ERIC, SciELO, DOAJ for OA journals) means a journal met someone’s criteria. Verify claims in the index itself.",
      "**Who does what.** The editor-in-chief sets scope and standards; handling editors manage individual papers and make decisions; the editorial board advises and often reviews; reviewers assess manuscripts; the publisher handles production, hosting and preservation. Most of these people are researchers working alongside their own jobs."
     ],
     pro:[
      "**Limits of the impact factor.** It is a journal-level average of a highly skewed distribution, so it says little about any single article. It varies greatly between fields and article types (reviews attract more citations). The numerator counts citations to all items published in the two years, while the denominator counts only articles and reviews, which is why Clarivate calls it an approximation rather than a strict mean. Clarivate also publishes a version without journal self-citations. Other metrics exist (for example CiteScore, based on Scopus data), with similar limits.",
      "**DORA.** The San Francisco Declaration on Research Assessment (developed in December 2012 at the American Society for Cell Biology’s meeting) recommends not using journal-based metrics such as impact factors as a surrogate for the quality of individual articles, or to assess individual scientists in hiring, promotion or funding.",
      "**Known weaknesses of peer review:** reviewer fatigue and variable quality; bias related to authors’ prestige, gender, country or language (double-anonymous review aims to reduce this); limited access to data and code; [[publication-bias|publication bias]] towards positive results. Large replication projects, such as the Open Science Collaboration’s 2015 attempt to repeat about 100 psychology studies (97% of originals significant, 36% of replications), prompted reforms: data and code sharing, [[registered-report|registered reports]] and [[preregistration]] (Unit 9), and transparent review.",
      "**Terminology** is shifting from “blind” to “anonymous/anonymised” review, and some journals now publish reviewer reports as standard."
     ]
    },
    related:["open-access","evaluating-scholarly-sources","retractions"],
    read:[{book:"wlsf", where:"Part IV, Chapter 21 “Finding a Journal’s Impact Factor”"}],
    sources:[{t:"Clarivate InCites Indicators Handbook: Journal Impact Factor", url:"https://incites.help.clarivate.com/Content/Indicators-Handbook/ih-journal-impact-factor.htm"},{t:"Wiley: Types of peer review", url:"https://authors.wiley.com/Reviewers/journal-reviewers/what-is-peer-review/types-of-peer-review.html"},{t:"San Francisco Declaration on Research Assessment (DORA)", url:"https://sfdora.org/read/"}], checked:"2026-11"},

   {id:"open-access", title:"Open access, preprints and paywalls", aka:["OA","gold open access","green open access","diamond open access","APC","preprint servers","article versions"], tags:["research","publishing"],
    summary:"Why paywalls exist, the routes to open access, licences, the versions of an article, preprint servers and funder policies.",
    levels:{
     starter:[
      "[[open-access-term|Open access]] (OA) research is free for anyone to read online, and often free to reuse under a licence such as Creative Commons CC BY.",
      "Articles can be OA in different ways: the publisher makes it free (gold), the author posts a copy in a repository (green), or the journal is free for both readers and authors (diamond).",
      "A **preprint** is a version posted before peer review, on a server such as arXiv, bioRxiv or medRxiv. It’s free and fast, but unchecked.",
      {key:"Free to read isn’t the same as trustworthy, and paywalled isn’t the same as better."},
      "Many research articles sit behind a [[paywall]], because traditional journals earn money by selling subscriptions, mostly to libraries. Authors usually aren’t paid for their articles."
     ],
     builder:[
      "**Why paywalls exist.** In the subscription model, authors usually transfer copyright or grant a licence to the publisher, which sells access, mostly to libraries. Readers without a subscription hit a paywall. OA models move the cost elsewhere: to authors or funders (APCs), to institutions and societies (diamond), or to repositories run by universities and others (green).",
      {table:[
        ["Route","Free where","Typical cost to authors"],
        ["Gold","Publisher’s site, immediately","Often an [[article-processing-charge|APC]]"],
        ["Green","A repository, sometimes after an [[embargo-period|embargo]]","Usually none"],
        ["Hybrid","Single articles in a subscription journal","APC"],
        ["Diamond","Publisher’s site","None"],
        ["Bronze","Publisher’s site, no open licence","None; access may be withdrawn"]
      ]},
      "**Versions** (NISO/ALPSP Journal Article Versions, 2008): Author’s Original, Submitted Manuscript Under Review, Accepted Manuscript, Proof, Version of Record, Corrected Version of Record, Enhanced Version of Record. Repositories usually hold preprints or accepted manuscripts; cite the [[version-of-record|version of record]] when you can.",
      "**Preprint servers:** arXiv (1991; physics, maths, computer science and more), bioRxiv (2013) and medRxiv (2019), run since 2025 by the non-profit openRxiv, plus servers for social sciences, psychology, earth sciences and regional servers. Servers screen submissions but don’t peer-review them.",
      "**Legal free copies:** search the title in Google Scholar (“All versions”), CORE or BASE; check author and repository pages; ask a library or the author. Shadow libraries infringe copyright. More in {{full-text-access}}."
     ],
     pro:[
      "**Definitions.** The Budapest Open Access Initiative (2002) defined OA as free availability on the public internet permitting any users to read, download, copy, distribute, print, search or link to full texts and use them for any lawful purpose, without financial, legal or technical barriers other than internet access, with authors keeping control over the integrity of their work and the right to be acknowledged and cited. That is closer to CC BY than to “free to read”.",
      "**Policy.** Plan S (cOAlition S, announced September 2018) requires funded publications from 2021 to be OA immediately via OA journals, OA platforms or repositories with no embargo. In the US, the 2022 OSTP memo asked federal agencies to make funded publications and supporting data freely available on publication, with updated agency policies due by the end of 2025 (NIH’s took effect in July 2025); each agency sets the details. Many other countries and funders have their own rules; check the current version for any project.",
      "**Economics.** APCs shift costs from readers to authors, which can exclude researchers without funding; waivers, institutional agreements and diamond OA respond to that. Hybrid OA has been criticised for letting publishers charge both subscriptions and APCs. These debates are live, and reasonable people disagree on the best model.",
      "**Licences matter for reuse**, including text and data mining and AI training. Check the specific licence of each article rather than the journal’s general policy.",
      "**Preprints in practice:** look for “now published in” links, compare versions, and note that health preprints in particular should not be treated as established findings."
     ]
    },
    related:["scholarly-publishing","creative-commons","evaluating-scholarly-sources"],
    read:[{book:"acrl", where:"Frame “Information Has Value”"}],
    sources:[{t:"Budapest Open Access Initiative (2002)", url:"https://www.budapestopenaccessinitiative.org/?p=492"},{t:"cOAlition S: About (Plan S)", url:"https://coalition-s.org/about/"},{t:"NISO RP-8-2008: Journal Article Versions (JAV)", url:"https://niso.org/publications/niso-rp-8-2008-jav"}], checked:"2026-11"},

   {id:"evaluating-scholarly-sources", title:"Judging scholarly sources", aka:["authority","source evaluation","credibility of research","Authority Is Constructed and Contextual"], tags:["research","evaluation"],
    summary:"Why authority depends on the question and the community, and the practical questions to ask of any scholarly source.",
    levels:{
     starter:[
      "Being published in a journal doesn’t make a source right, and being a blog doesn’t make it wrong. Judging a scholarly source means asking a few questions: **Who wrote it? Where was it published? How was it done? When? Who paid? How have others responded? Is it still standing?**",
      "Authority also depends on the question. A hydrologist is an authority on river flows, not on what residents felt during a flood; residents are the authority on that.",
      {key:"Look for a pattern across several questions. No single feature proves a source good or bad."},
      "For general (non-scholarly) sources, start with {{evaluating-sources}} and {{lateral-reading}}.",
      "Being careful doesn’t mean being cynical. Most published research is done in good faith; the questions help you decide how much weight a source can carry for your purpose."
     ],
     builder:[
      "The ACRL frame **Authority Is Constructed and Contextual**: information resources reflect their creators’ expertise and credibility, and are evaluated based on the information need and the context of use. Different communities recognise different kinds of authority (subject expertise, official position, lived experience), and the question decides how much you need.",
      {table:[
        ["Question","What to check"],
        ["Who?","Expertise in this topic; affiliation; ORCID or profile"],
        ["Where?","Journal recognised in the field; real publisher; article type"],
        ["How?","Method fits question; sample; limitations stated"],
        ["When?","Publication and data dates; newer evidence"],
        ["Who paid?","Funding and conflict-of-interest statements"],
        ["Response?","Later studies, reviews, comments (citations can be critical)"],
        ["Status?","Corrections, expressions of concern, retraction"]
      ]},
      "Use lateral reading on the journal, the authors and the claim: what do independent sources and the relevant expert community say?",
      "**Put it together.** A source rarely fails or passes on one question. A small study in a reputable journal with a clear method may be useful but limited; a large, well-funded study with an undeclared conflict of interest needs extra checking; a grey-literature report from a statistics office may be the most authoritative source available for a local figure. Write down your reasons, so you can explain your judgement to others and revisit it if new evidence appears."
     ],
     pro:[
      "Professionals weigh evidence rather than sources one by one:",
      {list:[
        "**Hierarchies of evidence** (common in health) rank designs, such as systematic reviews of randomised trials above single observational studies. They are useful defaults, but a well-done observational study can beat a poor trial, and some questions (experiences, meanings) need qualitative evidence that such hierarchies don’t rank well.",
        "**Consistency and independence:** results from different teams, methods and places count for more than many papers from one group.",
        "**Plausibility and mechanism:** an extraordinary claim needs more evidence; ask what would have to be true for it to hold.",
        "**Conflicts of interest** don’t make work wrong, but they justify extra scrutiny of design and reporting.",
        "**Citation counts** measure attention, not correctness. Retracted papers can be highly cited.",
        "**Metrics and prestige** (impact factors, famous universities) are weak proxies; DORA advises against using them to judge individual work."
      ]},
      "When the stakes are high, also check the status of key papers ({{retractions}}) and the journal ({{predatory-journals}}).",
      "**Reading the reporting itself.** Many fields have [[reporting-guideline|reporting guidelines]] that list what a good paper of a given design should include (for example, guidelines for randomised trials, observational studies or qualitative research). Checking a paper against the relevant guideline is a quick way to spot missing information. Unit 3 covers critical appraisal in depth ({{critical-appraisal}})."
     ]
    },
    related:["evaluating-sources","lateral-reading","predatory-journals","retractions","source-types"],
    read:[{book:"acrl", where:"Frame “Authority Is Constructed and Contextual”"},{book:"owg", where:"Chapter 13, Section 13.1, “Evaluating Sources”"}],
    sources:[{t:"ACRL: Framework for Information Literacy for Higher Education", url:"https://www.ala.org/acrl/standards/ilframework"},{t:"OpenStax Writing Guide with Handbook, 13.1 (Evaluating Sources)", url:"https://openstax.org/books/writing-guide/pages/13-1-the-research-process-where-to-look-for-existing-sources"}], checked:"2026-11"},

   {id:"predatory-journals", title:"Predatory and hijacked journals", aka:["predatory publishing","fake journals","hijacked journals","Think. Check. Submit."], tags:["research","publishing","integrity"],
    summary:"Journals that take authors’ fees while faking editorial standards: the consensus definition, warning signs, fair checks, and hijacked look-alikes.",
    levels:{
     starter:[
      "[[predatory-journal|Predatory journals]] look like real academic journals but don’t do the job of one. They charge authors to publish, promise peer review, and then do little or none.",
      "Warning signs: flattering emails inviting you to submit, promises of acceptance in days, hidden fees, fake “impact factors”, editorial boards of people who never agreed to be listed, and no clear information about who runs the journal.",
      "A [[hijacked-journal|hijacked journal]] is a fake website that copies the name and ISSN of a real journal.",
      {warn:"Don’t judge by appearance or location. New, small, non-English or APC-charging journals can be excellent. Judge the practices."},
      "If you’re unsure about a journal, ask a librarian, or check whether researchers you trust in that field publish there."
     ],
     builder:[
      "In 2019, a group of researchers, publishers, funders and librarians agreed a consensus definition (Grudniewicz and colleagues, *Nature*, 12 December 2019): predatory journals and publishers are entities that prioritise self-interest at the expense of scholarship and are characterised by false or misleading information, deviation from best editorial and publication practices, a lack of transparency, and/or the use of aggressive and indiscriminate solicitation practices.",
      "**Checking a journal** (based on Think. Check. Submit.):",
      {ol:[
        "Do you or colleagues know it? Is its name easily confused with another? Does the ISSN check out in the ISSN Portal?",
        "Is the publisher named, with real contact details?",
        "Is peer review described, without guaranteed acceptance or unrealistic speed?",
        "Is it indexed or archived where it claims (check the index itself)? Does it use DOIs?",
        "Are fees stated clearly, with any waivers?",
        "Are licences, copyright and conflict-of-interest policies clear?",
        "Is the publisher a member of recognised initiatives (COPE; OASPA for OA publishers; DOAJ for OA journals)?"
      ]},
      "Ask a librarian if you are unsure.",
      "**Why it matters to readers, not just authors.** Articles in predatory journals may look like peer-reviewed research and turn up in web searches and some search engines. Treat them as unreviewed: they can still be correct, but the journal’s name gives you no assurance."
     ],
     pro:[
      "The 2019 consensus definition deliberately left out three things: journal quality (too subjective), intent to deceive (hard to assess, and unnecessary when the other features are present) and the quality of peer review (currently impossible to assess from outside), which its authors called the most controversial omission.",
      "Practical implications:",
      {list:[
        "**Lists are blunt tools.** Lists of suspect publishers can be out of date or unfair; lists of approved journals (indexes, DOAJ) are more defensible but incomplete. Use them as evidence, not verdicts.",
        "**The harm runs both ways.** Authors lose fees and their work’s credibility; readers may be misled by unreviewed claims dressed up as scholarship; and work by honest researchers in such venues is often ignored.",
        "**Hijacked journals** exploit legitimate journals with weak web presence. Reach the journal from its publisher’s or an index’s link rather than from an email or search ad, and compare the ISSN and URL with the index record.",
        "**Paper mills** are a related problem on the supply side: they sell manuscripts and authorship, sometimes into legitimate journals. See {{research-integrity}}.",
        "**Grey zones exist.** Some journals have weak but not fraudulent practices. The question for a reader is how much weight an article can bear, which the article’s own quality must also answer."
      ]}
     ]
    },
    related:["evaluating-scholarly-sources","scholarly-publishing","retractions","open-access"],
    read:[{book:"wlsf", where:"Part IV, Chapter 20 “Stupid Journal Tricks”"}],
    sources:[{t:"Grudniewicz et al., Predatory journals: no definition, no defence, Nature 576, 210–212 (2019)", url:"https://media.nature.com/original/magazine-assets/d41586-019-03759-y/d41586-019-03759-y.pdf"},{t:"EASE: Another step towards defining predatory journals", url:"https://ease.org.uk/2019/12/another-step-towards-defining-predatory-journals/"}], checked:"2026-11"},

   {id:"retractions", title:"Corrections and retractions", aka:["retracted papers","expression of concern","erratum","corrigendum","Retraction Watch"], tags:["research","publishing","integrity"],
    summary:"How published research is corrected or withdrawn, what each notice means, and how to check whether a paper still stands.",
    levels:{
     starter:[
      "Sometimes problems are found in a paper after it’s published. Journals then publish a notice:",
      {list:[
        "A **correction** fixes an error that doesn’t change the main findings.",
        "An **[[expression-of-concern|expression of concern]]** warns readers that the editors have serious doubts.",
        "A **[[retraction]]** withdraws the paper because its findings can’t be relied on or it broke research or publishing rules. The paper usually stays online, clearly marked."
      ]},
      "Retraction isn’t always about cheating. Honest mistakes can lead to retraction, and researchers who retract their own flawed work are doing the right thing.",
      {key:"Before relying on an important paper, check its page on the publisher’s site for notices."},
      "Retracted papers can keep circulating for years in downloads, reference lists and social media, so checking the publisher’s page is worth the minute it takes."
     ],
     builder:[
      "COPE (the Committee on Publication Ethics) retraction guidelines say editors should consider retraction when there is clear evidence that findings are unreliable, through misconduct (such as data fabrication) or honest error (such as a major miscalculation or experimental error), and also for problems such as plagiarism, unethical research and compromised peer review. Retraction is usually not appropriate when the main findings are still reliable and a correction would fix the problem. A notice should explain the reason factually, be freely available and be clearly linked to the article.",
      {h:"How to check a paper’s status"},
      {list:[
        "Follow the DOI to the publisher’s page; look for notices or a Crossmark status button.",
        "Search the Retraction Watch Database (acquired by Crossref in September 2023 and made openly available).",
        "Use tools: Zotero has flagged retracted items with a DOI or PubMed ID since version 5.0.67 (June 2019); PubMed labels retracted publications.",
        "Search the title with “retraction” or “correction”."
      ]},
      "**Not every problem leads to a notice.** Many weak or wrong findings are simply overtaken by later research without any correction. Checking for notices tells you whether the journal has acted; looking for newer studies and reviews tells you whether the field has moved on."
     ],
     pro:[
      "**A well-documented case.** The Lancet published a paper by Wakefield and colleagues in 1998 that was later used to link the MMR vaccine with autism. On 28 January 2010 the UK General Medical Council found that the lead author had acted dishonestly and breached ethics committee approval; days later, in early February 2010, the Lancet retracted the paper, stating that several elements of it were incorrect. The claim had spread widely in the meantime, showing why retraction alone doesn’t undo harm.",
      "**Why retracted work keeps being cited:** old PDFs and reference lists don’t update, notices can be hard to see, and authors may cite from memory. Reference managers that check status help.",
      "**Scale and data.** When Crossref acquired the Retraction Watch Database in 2023, the combined data covered roughly 50,000 retractions. The dataset is downloadable, and retraction information is increasingly included in Crossref metadata.",
      "**Paper mills and mass retractions:** publishers have retracted large batches of papers linked to organised fraud in recent years. See {{research-integrity}}.",
      "**If you cited a retracted paper:** check whether your argument depended on it; remove or replace the citation, or cite it explicitly as retracted when discussing the retraction. Citation styles have rules for marking retracted works (Unit 4).",
      "COPE updated its retraction guidelines in September 2025 (replacing the 2019 version), adding detail on paper mills, batch retractions and information from third parties, and issued separate guidance on expressions of concern. Journals’ own policies vary, so read the specific journal’s policy when it matters."
     ]
    },
    related:["predatory-journals","scholarly-publishing","evaluating-scholarly-sources"],
    sources:[{t:"Crossref: News: Crossref and Retraction Watch (2023)", url:"https://crossref.org/blog/news-crossref-and-retraction-watch"},{t:"Zotero blog: Retracted item notifications with Retraction Watch integration (2019)", url:"https://www.zotero.org/blog/retracted-item-notification/"},{t:"BMJ (2010): Lancet retracts Wakefield’s MMR paper", url:"https://www.bmj.com/content/340/bmj.c696.extract"}], checked:"2026-11"}
  ],
  terms:[
   {id:"research-term", term:"Research", def:"In the academic sense: systematic inquiry that creates new knowledge and shares it so others can check it. In everyday speech it also means finding out what is already known.", codex:"what-is-research"},
   {id:"empirical-research", term:"Empirical research", def:"Research based on observation or measurement of the world, such as experiments, surveys, interviews, fieldwork or records.", codex:"what-is-research"},
   {id:"applied-research", term:"Applied research", def:"Research aimed at solving a practical problem. Basic research, by contrast, aims to understand how something works.", codex:"what-is-research"},
   {id:"tertiary-source", term:"Tertiary source", def:"A source that summarises and organises many secondary sources, such as an encyclopedia, textbook or handbook. Good for getting your bearings.", codex:"source-types"},
   {id:"scholarly-source", term:"Scholarly source", def:"Writing by experts for experts that documents its evidence with references, usually checked by peer review, such as a journal article or academic book.", codex:"source-types"},
   {id:"popular-source", term:"Popular source", def:"Writing for the general public, such as a newspaper, general magazine or blog. Useful for understanding; trace key claims to the original research.", codex:"source-types"},
   {id:"trade-publication", term:"Trade publication", def:"A magazine or journal written for people in one profession or industry, with practical news and advice.", codex:"source-types"},
   {id:"grey-literature-term", term:"Grey literature", def:"Research and information from organisations whose main job isn’t publishing, such as government reports, statistics, working papers and theses. Also spelled gray literature.", codex:"grey-literature"},
   {id:"academic-journal", term:"Academic journal", def:"A regular publication of scholarly articles in a field, run by expert editors, usually with peer review.", codex:"scholarly-publishing"},
   {id:"journal-article", term:"Journal article", def:"A piece published in an academic journal. A research article reports new work; a review article summarises many studies; editorials and letters are opinion or discussion.", codex:"source-types"},
   {id:"review-article", term:"Review article", def:"A journal article that summarises and assesses many earlier studies on a topic. A good place to start; systematic reviews follow a strict, documented method.", codex:"source-types"},
   {id:"monograph", term:"Monograph", def:"A scholarly book on a single subject, usually by one author or a small team. A main form of research output in the humanities and many social sciences.", codex:"source-types"},
   {id:"conference-proceedings", term:"Conference proceedings", def:"A published collection of papers presented at an academic conference. In computer science and some engineering fields they are often peer-reviewed and a main publication venue.", codex:"source-types"},
   {id:"abstract-paper", term:"Abstract (of a paper)", def:"A short summary at the start of a scholarly article giving its question, method, main findings and conclusion. Useful for deciding whether to read on; not a substitute for the paper.", codex:"source-types"},
   {id:"impact-factor", term:"Journal Impact Factor", def:"A Clarivate metric: citations in one year to a journal’s items from the two previous years, divided by its articles and reviews from those years. Describes a journal, not a single article.", codex:"scholarly-publishing"},
   {id:"publication-bias", term:"Publication bias", def:"The tendency for studies with positive or exciting results to be published more often than studies with null or disappointing results, which can distort the published evidence.", codex:"scholarly-publishing"},
   {id:"replication", term:"Replication", def:"Repeating a study, usually by a different team, to see whether the original result holds up.", codex:"scholarly-publishing"},
   {id:"version-of-record", term:"Version of record", def:"The final, formally published version of an article on the publisher’s site, usually with a DOI. The version you normally cite.", codex:"open-access"},
   {id:"open-access-term", term:"Open access", def:"Research that is free for anyone to read online, ideally with a licence (such as CC BY) that allows reuse with credit.", codex:"open-access"},
   {id:"paywall", term:"Paywall", def:"A barrier that asks for payment or a subscription before you can read an article. University logins often get through it silently.", codex:"open-access"},
   {id:"article-processing-charge", term:"Article processing charge (APC)", def:"A fee some open access journals charge, usually to the author, funder or institution, to publish an article. Waivers are often available.", codex:"open-access"},
   {id:"embargo-period", term:"Embargo (open access)", def:"A delay set by a publisher before an author may make a version of an article freely available in a repository.", codex:"open-access"},
   {id:"predatory-journal", term:"Predatory journal", def:"A journal that puts its own profit ahead of scholarship: it takes authors’ fees while giving false or misleading information, skipping proper editorial practice, hiding details or spamming for submissions.", codex:"predatory-journals"},
   {id:"hijacked-journal", term:"Hijacked journal", def:"A fake website that copies the name and ISSN of a real journal to collect fees from authors.", codex:"predatory-journals"},
   {id:"retraction", term:"Retraction", def:"Formal withdrawal of a published paper because its findings can’t be relied on or it breached research or publication ethics. The paper usually stays online, marked as retracted.", codex:"retractions"},
   {id:"expression-of-concern", term:"Expression of concern", def:"A notice from a journal’s editors warning readers of serious doubts about a paper, often while an investigation is under way.", codex:"retractions"},
   {id:"paper-mill", term:"Paper mill", def:"A business that produces fake or low-quality research manuscripts and sells authorship on them.", codex:"retractions"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t4u1-q01", lesson:"t4u1-l1", level:1, q:"In the academic sense, what makes something research?", options:[
     {t:"Systematic inquiry that creates new knowledge and is shared so others can check it", ok:true, why:"A clear question, a fitting method, honest evidence and sharing for scrutiny are the defining features."},
     {t:"Reading many sources on a topic", why:"That’s everyday research: learning what is known, not creating something new."},
     {t:"Any work done in a laboratory", why:"Labs are one setting. Archives, interviews, proofs and fieldwork are research too, and lab work isn’t research unless it’s systematic and shared."},
     {t:"Any article with a reference list", why:"References show the writer used sources; they don’t make the work new or systematic."}
   ]},
   {id:"t4u1-q02", lesson:"t4u1-l1", level:2, q:"Which of these is non-empirical research?", options:[
     {t:"A philosopher’s published argument about what fairness requires", ok:true, why:"It works with ideas and reasoning rather than observations, and others can check the argument."},
     {t:"A survey of 2,000 bus passengers", why:"Surveys collect observations: empirical."},
     {t:"Measuring river levels for ten years", why:"Measurement is empirical."},
     {t:"Interviews with nurses about night shifts", why:"Interviews collect qualitative observations: empirical."}
   ]},
   {id:"t4u1-q03", lesson:"t4u1-l1", level:2, q:"A water utility studies which of three pipe coatings lasts longest in its own network. What kind of research is this mainly?", options:[
     {t:"Applied research", ok:true, why:"It aims to solve a specific practical problem for the utility."},
     {t:"Basic research", why:"Basic research aims at general understanding without an immediate use; this has a clear practical aim."},
     {t:"Not research, because a company is doing it", why:"Companies do research too, if it is systematic. Who does it doesn’t decide whether it counts."},
     {t:"Tertiary research", why:"“Tertiary” describes sources that summarise others, not a kind of study."}
   ]},
   {id:"t4u1-q04", lesson:"t4u1-l1", level:1, q:"What does the ACRL idea of “Scholarship as Conversation” mean for a reader?", options:[
     {t:"A single paper is one contribution in an ongoing discussion, so look at how it relates to other work", ok:true, why:"Scholars respond to and build on each other’s work over time; a single paper is rarely the last word."},
     {t:"Researchers should write in a chatty style", why:"The frame is about how knowledge develops, not about writing style."},
     {t:"Only spoken conference talks count as scholarship", why:"Articles, books and reports are all part of the conversation."},
     {t:"The newest paper always overrides the older ones", why:"Newer isn’t automatically better. The conversation weighs all the evidence."}
   ]},
   {id:"t4u1-q05", lesson:"t4u1-l1", level:3, q:"Tomás hears: “Scientists keep changing their advice on this, so research can’t be trusted.” What is the best response?", options:[
     {t:"Updating conclusions when new evidence arrives is how research corrects itself; ask how strong the current evidence is", ok:true, why:"Change is the system working. Some conclusions are well established, others provisional; the strength of evidence varies."},
     {t:"He’s right: if advice changes, none of it is reliable", why:"This ignores that many conclusions rest on consistent evidence from many independent teams."},
     {t:"Research never changes its conclusions once published", why:"It does, and should, when new evidence appears."},
     {t:"Only trust the very first study on any topic", why:"Early studies are often the least reliable; later work refines or corrects them."}
   ]},
   {id:"t4u1-q06", lesson:"t4u1-l1", level:3, q:"Mei wants to know whether a new reading programme helps children. She finds one exciting study from a single school. What should she do before recommending it?", options:[
     {t:"Look for other studies and any review that combines them, and check where this study sits among them", ok:true, why:"One study is one turn in the conversation; reviews of many studies give a better picture."},
     {t:"Recommend it: one positive study is proof", why:"Research gives evidence, not proof, and results from one school may not generalise."},
     {t:"Reject it because it’s only one study", why:"One study is weak evidence, not no evidence. Look for more before deciding."},
     {t:"Ask a chatbot whether the programme works and use its answer", why:"A chatbot may summarise or invent; she still needs to check the actual studies."}
   ]},
   {id:"t4u1-q07", lesson:"t4u1-l1", level:2, q:"Which question would interviews answer best?", options:[
     {t:"How do new teachers describe their first month in the classroom?", ok:true, why:"Experiences and meanings are what qualitative interviews are designed to explore."},
     {t:"What percentage of teachers leave within five years nationally?", why:"A national percentage needs records or a large survey, not in-depth interviews."},
     {t:"Is a new classroom ventilation system quieter than the old one?", why:"Noise is measured directly with instruments."},
     {t:"Did exam results change after class sizes fell?", why:"That needs analysis of results data over time."}
   ]},
   {id:"t4u1-q08", lesson:"t4u1-l1", level:1, q:"Why is “sharing the work for others to check” part of what makes research reliable?", options:[
     {t:"Others can find errors, repeat the work and build on it", ok:true, why:"Scrutiny by other people is the error-correcting step in the research cycle."},
     {t:"Shared work is automatically correct", why:"Sharing makes checking possible; it doesn’t make anything correct by itself."},
     {t:"It makes the researcher famous, which proves expertise", why:"Fame isn’t evidence of correctness."},
     {t:"Unshared work is illegal", why:"It isn’t illegal; it just can’t benefit from others’ checking."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t4u1-q09", lesson:"t4u1-l2", level:1, q:"Which is a tertiary source?", options:[
     {t:"An encyclopedia entry on volcanoes", ok:true, why:"Encyclopedias summarise many secondary sources: tertiary."},
     {t:"A geologist’s report of new measurements at a volcano", why:"Original data: a primary source."},
     {t:"A review article comparing 40 volcano studies", why:"It analyses primary studies: secondary."},
     {t:"Photos taken by a witness of an eruption", why:"Original evidence from the time: primary."}
   ]},
   {id:"t4u1-q10", lesson:"t4u1-l2", level:3, q:"Ana is studying **how television news in the 1980s portrayed farmers**. For her, a 1984 TV news report about a drought is…", options:[
     {t:"A primary source, because it is the evidence of how TV news portrayed farmers", ok:true, why:"Her question is about the news coverage itself, so the coverage is primary evidence."},
     {t:"A secondary source, because news reports describe events", why:"For a question about the drought, yes; but her question is about portrayal in the news, so the report is the thing studied."},
     {t:"A tertiary source, because it is broadcast", why:"Format doesn’t decide the label; the relationship to the question does."},
     {t:"Not a source, because it isn’t written", why:"Recordings, images and objects are sources too."}
   ]},
   {id:"t4u1-q11", lesson:"t4u1-l2", level:1, q:"Which feature best identifies a scholarly source?", options:[
     {t:"Written by experts for experts, with full references, usually peer-reviewed", ok:true, why:"Audience, documentation and expert checking are the defining features."},
     {t:"Long and hard to read", why:"Difficulty isn’t a defining feature; some scholarly articles are short and clear."},
     {t:"Has an impressive title", why:"Titles can imitate scholarly style; look at authors, references and review."},
     {t:"Appears in search results first", why:"Ranking says nothing about whether a source is scholarly."}
   ]},
   {id:"t4u1-q12", lesson:"t4u1-l2", level:2, q:"Which is grey literature?", options:[
     {t:"A national statistics office’s annual report on household income", ok:true, why:"Produced by a government body whose main job isn’t publishing: grey literature."},
     {t:"An article in a peer-reviewed economics journal", why:"That’s formal scholarly publishing."},
     {t:"A book from a commercial publisher", why:"Commercial publishing is the opposite of grey literature."},
     {t:"A newspaper column", why:"That’s a popular source from a commercial publisher."}
   ]},
   {id:"t4u1-q13", lesson:"t4u1-l2", level:3, q:"Kenji is writing about a flood that happened three weeks ago. He finds no journal articles about it. Why?", options:[
     {t:"Journal articles usually take months or years to appear; for now, look for agency reports, data and news", ok:true, why:"The information cycle: scholarly sources come later. Grey literature and news come first."},
     {t:"The flood wasn’t important enough for research", why:"Timing, not importance, explains the gap."},
     {t:"Journals don’t publish on natural disasters", why:"They do, once research has been done and reviewed."},
     {t:"He needs a paid database; free searches never show journal articles", why:"Free tools do show journal articles; there just aren’t any yet."}
   ]},
   {id:"t4u1-q14", lesson:"t4u1-l2", level:2, q:"Why do careful systematic reviews also search grey literature such as reports, theses and trial registries?", options:[
     {t:"Studies with null or disappointing results are less likely to appear in journals, so leaving them out can bias the review", ok:true, why:"This is publication bias; grey literature helps balance the evidence."},
     {t:"Grey literature is always more reliable than journals", why:"It varies in quality; it’s searched for completeness, not because it’s better."},
     {t:"Journals forbid reviews from citing other journals", why:"They don’t. Reviews cite many journal articles."},
     {t:"Grey literature is peer-reviewed more strictly", why:"Much grey literature isn’t peer-reviewed at all."}
   ]},
   {id:"t4u1-q15", lesson:"t4u1-l2", level:2, q:"In which field are peer-reviewed conference papers often the main way new results are published?", options:[
     {t:"Computer science", ok:true, why:"In computing (and some engineering fields), major conferences are central, selective, peer-reviewed venues."},
     {t:"History", why:"History relies mostly on monographs and journal articles."},
     {t:"Law", why:"Legal scholarship appears mainly in journals and books."},
     {t:"Literary studies", why:"Monographs and journal articles dominate."}
   ]},
   {id:"t4u1-q16", lesson:"t4u1-l2", level:3, q:"Priya finds an editorial in a top medical journal arguing for a new screening test. What should she keep in mind?", options:[
     {t:"An editorial is opinion, usually not peer-reviewed research; look for the studies it relies on", ok:true, why:"Article type matters. Editorials argue; research articles and reviews provide the evidence."},
     {t:"Everything in a top journal is peer-reviewed research", why:"Journals publish editorials, letters, news and commentary as well as research."},
     {t:"Editorials are tertiary sources and can be ignored", why:"They can be useful, as opinions from experts; they just aren’t research evidence."},
     {t:"It must be wrong because it’s opinion", why:"Opinions can be well informed. She should check the evidence behind it."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t4u1-q17", lesson:"t4u1-l3", level:1, q:"What is a desk rejection?", options:[
     {t:"A journal editor rejects a paper without sending it to peer reviewers", ok:true, why:"Editors screen submissions first; many are rejected at this stage for scope or quality."},
     {t:"Reviewers reject a paper after reading it", why:"That’s rejection after review, not desk rejection."},
     {t:"An author withdraws a paper", why:"That’s a withdrawal by the author."},
     {t:"A paper is retracted after publication", why:"Retraction happens after publication; desk rejection happens at the very start."}
   ]},
   {id:"t4u1-q18", lesson:"t4u1-l3", level:1, q:"In double-anonymous peer review…", options:[
     {t:"Neither the authors nor the reviewers know each other’s identities", ok:true, why:"Both sides are hidden, mainly to reduce bias about who the authors are."},
     {t:"Two reviewers are used", why:"The number of reviewers is a separate matter."},
     {t:"Everyone’s names are published", why:"That describes open or transparent review."},
     {t:"Reviewers know the authors, but authors don’t know the reviewers", why:"That’s single-anonymous review."}
   ]},
   {id:"t4u1-q19", lesson:"t4u1-l3", level:2, q:"In 2025 a journal’s 2023 and 2024 items received 450 citations. It published 80 citable items in 2023 and 70 in 2024. What is its 2025 impact factor?", options:[
     {t:"3.0", ok:true, why:"450 ÷ (80 + 70) = 450 ÷ 150 = 3.0."},
     {t:"5.6", why:"That’s 450 ÷ 80: only the 2023 items. Use both years."},
     {t:"6.4", why:"That’s 450 ÷ 70: only the 2024 items. Use both years."},
     {t:"225", why:"That’s 450 ÷ 2: dividing by years instead of items."}
   ]},
   {id:"t4u1-q20", lesson:"t4u1-l3", level:2, q:"Why is a journal’s impact factor a poor guide to the quality of one article in it?", options:[
     {t:"It’s a journal-wide average of very uneven citation counts, so it says little about any single paper", ok:true, why:"A few highly cited papers can raise the average; most papers in the journal may be cited far less."},
     {t:"It’s calculated by reviewers of each article", why:"It’s calculated by Clarivate from citation data, not by reviewers."},
     {t:"It counts only citations from the same journal", why:"It counts citations from across the indexed literature."},
     {t:"It is random", why:"It follows a defined formula; the problem is what it measures, not randomness."}
   ]},
   {id:"t4u1-q21", lesson:"t4u1-l3", level:2, q:"Which problem is ordinary peer review **least** likely to catch?", options:[
     {t:"Data that was fabricated but looks plausible", ok:true, why:"Reviewers rarely see raw data and aren’t investigators; skilful fabrication often passes."},
     {t:"A conclusion that goes far beyond the results", why:"Overclaiming is exactly what reviewers look for."},
     {t:"A method that can’t answer the question", why:"Judging the design is reviewers’ core job."},
     {t:"Ignoring the most important earlier study", why:"Experts in the field usually notice missing key literature."}
   ]},
   {id:"t4u1-q22", lesson:"t4u1-l3", level:3, q:"A university promotion committee plans to score staff by the impact factors of the journals they published in. Which statement reflects DORA?", options:[
     {t:"They should assess the work itself, not use journal metrics as a stand-in for its quality", ok:true, why:"DORA’s general recommendation is not to use journal-based metrics such as impact factors to judge individual articles or researchers."},
     {t:"Impact factors are fine for individuals if averaged over many papers", why:"Averaging journal averages still measures venues, not the person’s work."},
     {t:"DORA requires all journals to stop calculating impact factors", why:"DORA is about how metrics are used in assessment, not a ban on calculating them."},
     {t:"DORA applies only to journals, not universities", why:"Its recommendations are addressed to funders, institutions, publishers, metric providers and researchers."}
   ]},
   {id:"t4u1-q23", lesson:"t4u1-l3", level:1, q:"What does a reviewer typically recommend at the end of a peer review?", options:[
     {t:"Accept, minor revisions, major revisions or reject", ok:true, why:"These are the usual recommendations; the editor makes the final decision."},
     {t:"The paper’s impact factor", why:"Impact factors are journal-level metrics calculated by Clarivate."},
     {t:"How much the authors should pay", why:"Fees aren’t the reviewer’s concern."},
     {t:"Whether the paper is true", why:"Review judges whether the work is sound; whether findings hold needs replication."}
   ]},
   {id:"t4u1-q24", lesson:"t4u1-l3", level:3, q:"In a 2015 project, about 100 psychology studies were repeated; 97% of the originals had significant results but only 36% of the repetitions did. What is the most accurate lesson?", options:[
     {t:"Passing peer review doesn’t guarantee a result will replicate, so look for repeated findings", ok:true, why:"The project showed that published, reviewed findings often didn’t repeat, which is why replication matters."},
     {t:"64% of psychology is fraud", why:"Failed replications have many causes (chance, small samples, differences in setting); they aren’t evidence of fraud."},
     {t:"Peer review is useless and should be abolished", why:"The project prompted reforms to strengthen research, not to abandon review."},
     {t:"The repeated studies must have been done badly", why:"The replications were carefully planned; dismissing them misses the point."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t4u1-q25", lesson:"t4u1-l4", level:1, q:"What is green open access?", options:[
     {t:"The author deposits a version of the article in a repository", ok:true, why:"Green OA is self-archiving, often of the accepted manuscript."},
     {t:"The publisher makes the article free immediately for a fee", why:"That’s gold OA."},
     {t:"Research about the environment", why:"The colour names describe access routes, not topics."},
     {t:"A journal that charges neither readers nor authors", why:"That’s diamond OA."}
   ]},
   {id:"t4u1-q26", lesson:"t4u1-l4", level:1, q:"What is a version of record?", options:[
     {t:"The publisher’s final, formally published version of an article", ok:true, why:"It’s the copyedited, typeset version, usually with a DOI, that you normally cite."},
     {t:"The first draft an author posts online", why:"That’s the author’s original or preprint."},
     {t:"The text after peer review but before copyediting", why:"That’s the accepted manuscript."},
     {t:"A recording of a conference talk", why:"Not a version of a journal article."}
   ]},
   {id:"t4u1-q27", lesson:"t4u1-l4", level:2, q:"An article is free to read on the publisher’s site but has no open licence. What kind of access is this?", options:[
     {t:"Bronze", ok:true, why:"Bronze OA is free to read without an open licence; the publisher can withdraw access."},
     {t:"Diamond", why:"Diamond journals are fully OA, usually with open licences, and charge no APCs."},
     {t:"Green", why:"Green OA is in a repository, not on the publisher’s site."},
     {t:"Hybrid", why:"Hybrid OA articles are paid-for OA in subscription journals, normally with an open licence."}
   ]},
   {id:"t4u1-q28", lesson:"t4u1-l4", level:3, q:"Oluwaseun reads a medRxiv paper claiming a common drug halves hospital stays. A friend says, “It’s on a science website, so it’s been checked.” What’s accurate?", options:[
     {t:"medRxiv screens papers but doesn’t peer-review them, and warns they shouldn’t guide clinical practice", ok:true, why:"Preprint servers do basic screening only; the findings are unchecked by reviewers."},
     {t:"Everything on medRxiv has passed peer review", why:"medRxiv is a preprint server: papers are posted before peer review."},
     {t:"medRxiv papers are fake", why:"They are genuine research reports, just not yet reviewed."},
     {t:"It’s reliable once it has been shared widely", why:"Popularity isn’t a check on quality."}
   ]},
   {id:"t4u1-q29", lesson:"t4u1-l4", level:2, q:"Which is a legal way to read a paywalled article for free?", options:[
     {t:"Find the accepted manuscript in the author’s university repository", ok:true, why:"Repositories legally hold accepted manuscripts under publisher policies (green OA)."},
     {t:"Download it from a site offering millions of copied paywalled papers", why:"Shadow libraries infringe copyright in most countries."},
     {t:"Use a friend’s university password", why:"Sharing login credentials usually breaks the university’s licence terms and its rules."},
     {t:"Screenshot the abstract and assume that’s the paper", why:"The abstract isn’t the paper, and reading only it can mislead."}
   ]},
   {id:"t4u1-q30", lesson:"t4u1-l4", level:3, q:"Hana wants to reuse a chart from an open access article in a workshop handout she will sell. The article uses CC BY-NC. What applies?", options:[
     {t:"NC means non-commercial, so selling the handout isn’t covered; she needs permission or another source", ok:true, why:"CC BY-NC allows reuse with credit only for non-commercial purposes."},
     {t:"Open access means any reuse is allowed", why:"Reuse depends on the licence; NC rules out commercial use."},
     {t:"She can reuse it if she doesn’t credit the authors", why:"All CC licences require credit (attribution)."},
     {t:"Charts are never covered by licences", why:"Figures in articles are covered by the article’s licence and copyright."}
   ]},
   {id:"t4u1-q31", lesson:"t4u1-l4", level:2, q:"What does Plan S, launched in 2018 by a group of research funders, require?", options:[
     {t:"Publications from research they fund must be open access immediately, from 2021", ok:true, why:"Plan S requires immediate OA via OA journals, platforms or repositories with no embargo."},
     {t:"All journals worldwide must stop charging fees", why:"Plan S applies to research funded by its members, not to all journals."},
     {t:"Preprints must replace journals", why:"Plan S is about open access, not abolishing journals."},
     {t:"Researchers must pay to read research", why:"The opposite: it aims to make funded research free to read."}
   ]},
   {id:"t4u1-q32", lesson:"t4u1-l4", level:1, q:"Who usually pays for subscriptions to academic journals?", options:[
     {t:"Libraries, mainly at universities and research institutions", ok:true, why:"The subscription model relies on library budgets."},
     {t:"The authors of the articles", why:"In the subscription model, authors usually pay nothing to publish and aren’t paid."},
     {t:"Peer reviewers", why:"Reviewers usually work unpaid and don’t fund subscriptions."},
     {t:"Nobody: subscriptions are free", why:"Subscriptions cost money; that’s what creates paywalls."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t4u1-q33", lesson:"t4u1-l5", level:1, q:"What does “Authority Is Constructed and Contextual” mean?", options:[
     {t:"Communities recognise different kinds of authority, and the question decides how much authority you need", ok:true, why:"Authority depends on expertise relevant to the question and on the context of use."},
     {t:"Only people with doctorates have authority", why:"Lived experience and official position can also carry authority, for the right question."},
     {t:"Authority is the same for every question", why:"A specialist in one field isn’t an authority in another."},
     {t:"No one has more authority than anyone else", why:"Authority varies; the frame asks you to judge it in context, not to deny it."}
   ]},
   {id:"t4u1-q34", lesson:"t4u1-l5", level:2, q:"Which is the strongest warning sign of a predatory journal?", options:[
     {t:"It guarantees acceptance within 72 hours", ok:true, why:"Real peer review takes time and can’t guarantee acceptance."},
     {t:"It charges an article processing charge", why:"Many reputable OA journals charge APCs; hidden or unclear fees are the warning sign."},
     {t:"It was founded three years ago", why:"New journals can be excellent."},
     {t:"It publishes in Portuguese", why:"Language says nothing about quality."}
   ]},
   {id:"t4u1-q35", lesson:"t4u1-l5", level:3, q:"Amara gets an email inviting her to submit to a journal with the same name as a well-known one, but the website address is different from the one in Scopus. What is this most likely to be?", options:[
     {t:"A hijacked journal: a fake site copying a real journal’s identity", ok:true, why:"Matching name, different site: compare the ISSN and URL with the index record and reach the journal from the index or publisher."},
     {t:"A preprint server", why:"Preprint servers don’t pose as journals or invite submissions this way."},
     {t:"A normal second website the journal uses", why:"Possible but unlikely; the mismatch with the index record is a classic hijacking sign that needs checking."},
     {t:"A diamond open access version of the journal", why:"Access models don’t create a separate site with a different address under the same name."}
   ]},
   {id:"t4u1-q36", lesson:"t4u1-l5", level:1, q:"What usually happens to a retracted article?", options:[
     {t:"It stays online, clearly marked as retracted, with a notice explaining why", ok:true, why:"Keeping it visible but marked keeps the record complete and warns readers."},
     {t:"It is deleted without trace", why:"Deleting it would confuse anyone who cited it; journals mark it instead."},
     {t:"Its authors are automatically banned from publishing", why:"Retraction isn’t a punishment and can result from honest error."},
     {t:"It is moved to a preprint server", why:"Retracted articles aren’t turned into preprints."}
   ]},
   {id:"t4u1-q37", lesson:"t4u1-l5", level:2, q:"According to COPE’s guidelines, which can be a reason to retract a paper?", options:[
     {t:"An honest error, such as a miscalculation, that makes the findings unreliable", ok:true, why:"COPE lists honest error as well as misconduct when findings are unreliable."},
     {t:"The authors changed jobs", why:"Job changes have nothing to do with the reliability of findings."},
     {t:"A later study found a slightly different result", why:"Different later results are part of normal science, not grounds for retraction."},
     {t:"The paper has few citations", why:"Citation counts aren’t a reason to retract."}
   ]},
   {id:"t4u1-q38", lesson:"t4u1-l5", level:3, q:"Fatima is citing a 2012 paper in a report. What is the best way to check it hasn’t been retracted?", options:[
     {t:"Open the publisher’s page through the DOI and also search the Retraction Watch Database", ok:true, why:"The publisher’s page shows current notices; the database is a second, independent check."},
     {t:"Check the PDF she downloaded in 2015", why:"Old PDFs don’t update; they won’t show a later retraction."},
     {t:"Count its citations: highly cited papers can’t be retracted", why:"Highly cited papers can be, and have been, retracted."},
     {t:"Assume a paper in a good journal is safe", why:"Retractions happen in famous journals too, as the Lancet case shows."}
   ]},
   {id:"t4u1-q39", lesson:"t4u1-l5", level:2, q:"What is an expression of concern?", options:[
     {t:"A notice warning readers that editors have serious doubts about a paper, often during an investigation", ok:true, why:"It flags a possible problem while the outcome is uncertain."},
     {t:"A reviewer’s comment before publication", why:"Reviewer comments are part of peer review, not public notices about published papers."},
     {t:"A correction of a typo", why:"That’s a correction (erratum or corrigendum)."},
     {t:"The final step of a retraction", why:"An expression of concern may come before a retraction, a correction or no further action."}
   ]},
   {id:"t4u1-q40", lesson:"t4u1-l5", level:3, q:"Sione is judging a study that a company funded about its own product. What is the most reasonable approach?", options:[
     {t:"Funding doesn’t make it wrong, but check the design, the conflict-of-interest statement and whether independent studies agree", ok:true, why:"Conflicts of interest justify extra scrutiny, not automatic rejection."},
     {t:"Reject it: company-funded research is always false", why:"Much industry-funded research is sound; judge the evidence."},
     {t:"Accept it: if a journal published it, funding doesn’t matter", why:"Funding can shape questions, design and reporting; it’s worth checking."},
     {t:"Ignore the funding statement; it’s just a formality", why:"Funding and conflict-of-interest statements are key information for judging a study."}
   ]}
  ]
});
