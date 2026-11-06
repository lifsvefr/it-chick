/* Social Science Primers · International Relations Unit 1 (e2u5) · What International Relations studies */
ICA.addUnit({
  id:"e2u5", track:"e2", n:5, title:"What International Relations studies", icon:"🌐",
  blurb:"What the field of International Relations looks at and why it reaches into everyday life: states, sovereignty and nations, a world with no government above states, the many other actors on the stage, three levels for explaining events, and a short history of the modern international system told from around the world.",
  goals:[
    "Explain what International Relations studies, spot it in everyday things, and describe the field’s 1919 founding story and the main critiques of that story",
    "Define state, nation, nation-state and sovereignty, apply the Montevideo criteria, and explain why recognition is debated",
    "Explain what anarchy means in IR (no world government, not chaos) and name the main non-state actors and what each can do",
    "Use the individual, state and system levels of analysis to explain one event in three different ways",
    "Tell the story of the modern international system from empires to decolonisation, the Cold War and after, and describe polarity"
  ],
  read:[
    {book:"eir", where:"“Getting Started”, Chapter 1 “The Making of the Modern World” (Erik Ringmar), Chapter 2 “Diplomacy” (Stephen McGlinchey) and Chapter 3 “One World, Many Actors” (Carmen Gebhard)", note:"Short chapters that move quickly. Read each one after the matching lesson: the lessons build the background the chapters take for granted."},
    {book:"ospol", where:"Chapter 14 “International Relations”, sections 14.2 “Understanding the Different Types of Actors in the International System”, 14.3 “Sovereignty and Anarchy” and 14.4 “Using Levels of Analysis to Understand Conflict”", note:"A gentler textbook with many United States examples. The lessons add cases from other regions."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u5-l1", title:"What IR studies, and why it reaches into your day", minutes:50,
   hook:{q:"The word “international” is younger than you might think. Roughly when was it invented?", options:["In ancient Rome","In the 1300s","In the 1780s","In 1945, with the United Nations"], answer:2, reveal:"**In the 1780s.** The English philosopher Jeremy Bentham coined “international” in a book written in 1780 and published in 1789, because he needed a word for law *between* nations. People had been thinking about war, trade and diplomacy between political communities for thousands of years; they just used other words. This lesson looks at what the field of International Relations studies, and why the story of where it began is more interesting than the textbook version."},
   goals:[
     "Spot international relations in ordinary things such as a phone, a passport, a price or a news story",
     "Explain what the field of International Relations (IR) studies and how it differs from its neighbouring subjects",
     "Tell the standard story of IR’s founding at Aberystwyth in 1919",
     "Explain why scholars criticise that story as too narrow, and name older and non-Western traditions of thought about world politics"
   ],
   learn:[
    {h:"A morning full of international relations", body:[
      {lead:"You don’t have to work at an embassy to live inside international relations. Most people do it before breakfast."},
      "Think about the phone you may be reading this on. Its chips, screen, battery and minerals usually come from several countries, assembled in another and sold in yet another. Every border those parts crossed had rules: import taxes, safety standards, trade agreements. Governments negotiated those rules with each other.",
      "Or think about a passport. Almost every passport in the world has the same size, the same photo page and the same two lines of machine-readable letters at the bottom. That isn’t a coincidence. Governments agreed the format through the International Civil Aviation Organization (ICAO), a United Nations agency, so that any border officer anywhere can read any passport.",
      "Prices tell the same story. When a war, a drought or a trade dispute happens on the other side of the world, fuel, bread or rice can cost more in your local shop a few weeks later. And most days the news brings an international story: a summit, a ceasefire, a climate conference, an election abroad that may change your country’s trade or travel rules.",
      {ex:"Amara, a nurse, wakes up and checks her phone (parts from several countries). She reads that two governments have signed a fishing agreement. On the way to work she buys bread whose price rose after a poor harvest abroad. At lunch she posts a parcel to her cousin overseas; it will arrive because almost every country belongs to the Universal Postal Union, set up by treaty in 1874. That evening she renews her passport for a family wedding in another country. None of this feels like “politics”, but every step depends on agreements between states.", label:"Worked example: one ordinary day"},
      {fig:'<svg viewBox="0 0 340 344"><rect class="d-lup" x="8" y="8" width="112" height="52" rx="8" stroke-width="2"/><text x="64" y="39" text-anchor="middle">Phone</text><text x="132" y="29">Parts from many countries,</text><text class="s" x="132" y="47">moved under trade agreements</text><rect class="d-sage" x="8" y="74" width="112" height="52" rx="8" stroke-width="2"/><text x="64" y="105" text-anchor="middle">Passport</text><text x="132" y="95">One shared format,</text><text class="s" x="132" y="113">agreed through a UN agency</text><rect class="d-gold" x="8" y="140" width="112" height="52" rx="8" stroke-width="2"/><text x="64" y="171" text-anchor="middle">Prices</text><text x="132" y="161">World markets: wars, deals</text><text class="s" x="132" y="179">and harvests abroad move them</text><rect class="d-rose" x="8" y="206" width="112" height="52" rx="8" stroke-width="2"/><text x="64" y="237" text-anchor="middle">Post</text><text x="132" y="227">A postal treaty</text><text class="s" x="132" y="245">in force since 1874</text><rect class="d-lup" x="8" y="272" width="112" height="52" rx="8" stroke-width="2"/><text x="64" y="303" text-anchor="middle">News</text><text x="132" y="293">Summits, wars, elections</text><text class="s" x="132" y="311">abroad that change your rules</text><text class="s" x="170" y="340" text-anchor="middle">Each one depends on agreements between states.</text></svg>', alt:"Five boxes down the left side, labelled phone, passport, prices, post and news. Beside each, a note on its international link: parts moved under trade agreements; one passport format agreed through a UN agency; prices moved by wars, deals and harvests abroad; a postal treaty in force since 1874; and news from abroad that changes your own rules.", cap:"International relations in one ordinary morning. The field studies the agreements, conflicts and power behind each of these."}
    ]},
    {h:"What the field studies", body:[
      "Textbooks use a small spelling trick. **international relations**, in small letters, means the relations themselves: dealings between states, organisations and people across borders. **International Relations**, with capitals, or **IR** for short, is the academic field that studies them. As the E-IR textbook puts it, IR does not describe events; it tries to understand them.",
      "So [[international-relations|International Relations]] is the study of how states and other actors deal with each other across borders: why they fight, why they cooperate, how they trade, and who wins and loses. The [[foreign-policy|foreign policy]] of a country (the goals and actions its government pursues towards the outside world) is one of IR’s main objects of study.",
      "The field asks big questions that every generation has to answer again:",
      {table:[["Big question","An example"],["Why do wars start, and how do they end?","Why did Europe’s great powers go to war in 1914?"],["Why do states cooperate when no one can force them to?","How did almost every country agree to protect the ozone layer?"],["Who gains from the world economy?","Why do some countries export raw materials while others sell finished goods?"],["Whose rights are protected, and by whom?","When, if ever, may outsiders act inside a state to stop mass killing?"],["How is power shifting?","What happens when a rising country catches up with a leading one?"]]},
      "Over time the field has widened. Early IR focused almost entirely on war, peace and diplomacy between governments. Today it also studies trade and money, the environment, [[migration]], health, human rights, technology and culture, and it looks at many actors besides states: international organisations, companies, campaign groups, armed groups, cities and individuals. You will meet all of these in this unit.",
      {key:"IR is the study of relations across borders: conflict and cooperation, [[power]] and wealth, rules and rights, between states and many other actors."}
    ]},
    {h:"IR and its neighbours", body:[
      "IR borrows from many other subjects, which is one reason it can feel big at first. History gives it cases. Law gives it treaties and courts. Economics gives it trade and money. Sociology and anthropology give it identity, culture and [[norm|norms]]. Geography gives it territory and resources.",
      "Inside political science, IR sits next to **comparative politics**, which compares what happens *inside* different countries (elections, parties, constitutions). IR looks mostly at what happens *between* them. The line is blurry, and that blur is useful: a country’s elections can change its foreign policy, and a war abroad can change who wins an election at home.",
      "IR also has two kinds of questions, and it helps to keep them apart. **Explaining** questions ask what happens and why: “Why did these two countries sign a trade deal?” **Judging** (normative) questions ask what *should* happen: “Is it right to put economic sanctions on a country whose people are already poor?” Both are part of IR. Good analysis says clearly which kind of question it is answering.",
      {tip:"A quick test for any IR claim: is it telling me **what is** (and can I check the evidence?) or **what ought to be** (and what values is it based on?)."}
    ]},
    {h:"The standard founding story: Aberystwyth, 1919", body:[
      "Most IR textbooks say the field was born in a small seaside town in Wales. After the First World War (1914–1918), which killed millions of soldiers and civilians, many people wanted to understand war in order to prevent it.",
      "In 1918 David Davies, a wealthy Welsh politician, and his sisters Gwendoline and Margaret gave £20,000 to the University College of Wales in Aberystwyth. They gave it in memory of the university’s students who had died in the war, to study the problems of law, politics, ethics and economics raised by the new League of Nations.",
      "The gift created the **Woodrow Wilson Chair of International Politics**, named after the United States president who had championed the League. In 1919 the university founded a Department of International Politics, which it describes as the first of its kind in the world. Its first professor was the classical historian Alfred Zimmern.",
      "Similar institutes, university chairs and journals soon followed in Britain, the United States and elsewhere. Because of that origin, the early field had a strong hope built in: that knowledge, international law and organisations such as the League could make war less likely. In 1936 the historian E. H. Carr became the fourth holder of the Wilson chair, and in his book *The Twenty Years’ Crisis* (1939) he attacked that hope as naive. That argument between hope and “realism” became one of the field’s first great debates (you will meet it in Unit 6, {{realism}}).",
      {ex:"Aberystwyth’s own history pages date the founding to 1919, call it the first department of its kind and name Alfred Zimmern as the first Woodrow Wilson Professor. When you see “IR was founded in 1919”, this is what it refers to: the first university department and chair with that name, not the first thinking about world politics.", label:"What the date really means"}
    ]},
    {h:"Older and wider roots: what the 1919 story leaves out", body:[
      "The 1919 story is true as far as it goes, but many scholars argue it misleads. Benjamin de Carvalho, Halvard Leira and John M. Hobson called 1919 (and 1648, which you’ll meet in Lesson 2) the field’s “big bang” myths in a 2011 article: neat origin stories that hide a longer, messier and more global past.",
      "People were thinking hard about relations between political communities long before 1919, in many parts of the world:",
      {list:[
        "**The Amarna letters** (14th century BCE) are clay tablets of diplomatic letters between Egypt’s pharaohs and rulers in Babylon, Mitanni, Hatti and elsewhere, about gifts, marriages, alliances and status. They show diplomacy as an old human practice.",
        "**Thucydides**, a Greek historian of the 5th century BCE, wrote a history of the war between Athens and Sparta that IR scholars still argue about today.",
        "**The *Arthashastra***, an ancient Indian treatise on statecraft traditionally linked to Kautilya (scholars debate when it was written), analyses alliances, rivals and spies with a cool, practical eye.",
        "**Ibn Khaldun**, a North African scholar, wrote the *Muqaddimah* (1377), a theory of how dynasties and empires rise and fall that many historians and social scientists still read.",
        "Chinese thinkers wrote about order between rulers for centuries, and East Asian states ran a long-lasting system of relations centred on the Chinese court."
      ]},
      "The founding story also hides some of the field’s early concerns. The historian Robert Vitalis, in *White World Order, Black Power Politics* (2015), shows that much early American scholarship on world politics was about empire and so-called “race development”. One of its journals, the *Journal of Race Development* (founded 1910), was renamed the *Journal of International Relations* in 1919, and in 1922 it was merged into the new journal *Foreign Affairs*, still one of the best-known magazines on world politics. Scholars at Howard University in Washington, such as Alain Locke, Rayford Logan, Ralph Bunche and Merze Tate, challenged that racial thinking, but they were long left out of the field’s history.",
      "None of this means the Aberystwyth story is false. It means it is one starting point among several, told mostly from Europe and North America (critics call this a [[eurocentrism|Eurocentric]] view). A growing movement called **Global IR**, led by scholars such as Amitav Acharya, asks the field to take ideas and histories from Asia, Africa, Latin America, the Middle East and the Pacific seriously ({{global-ir}}, Unit 6).",
      {warn:"Be careful with two opposite mistakes: thinking IR began in 1919 because no one thought about world politics before, and thinking that because people thought about it before, the 1919 founding doesn’t matter. A university field with departments, journals and debates *did* take shape after 1919; the thinking it drew on is much older and wider."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["IR is only about wars.","War and peace matter, but IR also studies trade, health, climate, migration, rights and technology."],["IR is only about governments.","States are central, but companies, organisations, campaign groups, cities and individuals also act across borders."],["IR predicts the news.","IR explains patterns and offers tools for thinking. It is weak at forecasting single events, as are most social sciences."],["IR began in 1919.","The university field took shape then; thinking about world politics is thousands of years old and found in many cultures."],["IR is just opinions about foreign policy.","IR uses evidence: archives, data, interviews and careful comparison. It also has normative debates, which it labels as such."]]}
    ]},
    {h:"Why this matters to you", body:[
      "IR gives you a set of questions to ask whenever the wider world touches your life. Who made this rule? Why did these governments agree, or fail to agree? Who gains and who pays? Whose voices are missing from the story?",
      "The rest of this unit builds the basic toolkit: what a state is ({{the-state}}), what sovereignty means ({{sovereignty}}), why a world with no government above states isn’t chaos ({{anarchy-ir}}), who the other actors are ({{non-state-actors}}), how to explain one event at three levels ({{levels-of-analysis}}) and how today’s system came to be ({{modern-international-system}}). Unit 6 then adds the big theories, Unit 7 the organisations, law and economy, and Unit 8 war, peace and global challenges.",
      {terms:["international-relations","foreign-policy"]}
    ]}
   ],
   try:[
    {id:"e2u5-l1-x1", type:"sort", q:"Does each situation, as described, cross borders (an international relations matter) or stay within one country?", buckets:["Crosses borders","Stays within one country"], items:[
      {t:"Two countries agree how to share the water of a river that flows through both.", b:0, why:"Two governments negotiating over a shared resource is a classic international relations matter."},
      {t:"A town council changes its bus timetable.", b:1, why:"One local authority deciding a local service, with no other country involved."},
      {t:"A phone maker buys chips from three countries and assembles them in a fourth.", b:0, why:"A company moving goods across several borders under trade rules: business, but international."},
      {t:"A national parliament moves the start of the school year by a week.", b:1, why:"A domestic decision about a domestic institution. Nothing here involves another country."},
      {t:"A new virus spreads from one country to dozens of others within weeks.", b:0, why:"Disease crossing borders raises questions of cooperation, travel rules and global health organisations."},
      {t:"A government puts a tax on steel imported from abroad.", b:0, why:"The decision is made at home, but it targets goods from other countries and can trigger a trade dispute. That makes it international."}
    ]},
    {id:"e2u5-l1-x2", type:"mcq", q:"Kenji writes: “I want to study International Relations so I can find out what happened at yesterday’s summit.” Which reply best describes the field?", options:[
      {t:"IR is less about reporting events and more about explaining them: why the summit happened, why states agreed or didn’t, and who gains.", ok:true, why:"Right. As the E-IR textbook puts it, IR doesn’t describe events; it seeks to understand them. Journalism reports; IR explains patterns."},
      {t:"That’s exactly it: IR is the study of the latest international news.", why:"News is raw material for IR, but the field is about explaining patterns and causes, not keeping up with headlines."},
      {t:"IR only studies events before 1945, so yesterday’s summit isn’t part of it.", why:"IR studies the past and the present. Recent events are very much part of it."},
      {t:"IR is the training course for diplomats, so only diplomats need to know about summits.", why:"Diplomats may study IR, but IR is an academic field for anyone who wants to understand world politics."}
    ]},
    {id:"e2u5-l1-x3", type:"match", q:"Match each everyday thing to the international link behind it.", pairs:[
      ["A passport any border officer can read","A shared format agreed through a UN aviation agency (ICAO)","Governments agreed common passport standards so travel documents work everywhere."],
      ["A parcel sent overseas","A postal treaty dating from 1874 (the Universal Postal Union)","The UPU lets post move between almost all countries under shared rules."],
      ["A phone in your pocket","Parts made in several countries, traded under agreements","Global supply chains depend on trade rules between states."],
      ["Bread costing more after a harvest fails abroad","World markets for grain","A shortage in one exporting region can push up prices far away."]
    ]},
    {id:"e2u5-l1-x4", type:"mcq", q:"Which statement about the founding of IR at Aberystwyth is accurate?", options:[
      {t:"In 1919 the University College of Wales founded a Department of International Politics and the Woodrow Wilson Chair, funded by the Davies family in memory of students killed in the First World War.", ok:true, why:"Correct. The Davies family’s gift (1918) created the chair; the department was founded in 1919, with Alfred Zimmern as its first professor."},
      {t:"It was founded in 1945 to train staff for the new United Nations.", why:"The date and the reason are wrong. It came after the First World War, linked to hopes for the League of Nations, not the UN."},
      {t:"Woodrow Wilson founded it personally and taught its first classes.", why:"It was *named* after Wilson, who championed the League of Nations. The Davies family funded it and Alfred Zimmern was its first professor."},
      {t:"It was the first time anyone had written about relations between political communities.", why:"That thinking is thousands of years older, from the Amarna letters to Thucydides, the Arthashastra and Ibn Khaldun. 1919 marks the first university department of its kind."}
    ]},
    {id:"e2u5-l1-x5", type:"order", q:"Put these moments in the history of thinking about world politics in time order, earliest first.", items:[
      {t:"Diplomatic letters between Egypt and other kingdoms (the Amarna letters)", why:"14th century BCE: the oldest item here, showing diplomacy between kingdoms is ancient."},
      {t:"Thucydides writes his history of the war between Athens and Sparta", why:"5th century BCE, about a thousand years after the Amarna letters."},
      {t:"Ibn Khaldun writes the *Muqaddimah* on the rise and fall of dynasties", why:"1377 CE."},
      {t:"Jeremy Bentham coins the word “international”", why:"Written 1780, published 1789."},
      {t:"The *Journal of Race Development* is founded in the United States", why:"1910. It was renamed the *Journal of International Relations* in 1919."},
      {t:"Aberystwyth founds the first Department of International Politics", why:"1919, the date in the standard founding story."}
    ]},
    {id:"e2u5-l1-x6", type:"spot", q:"Tomás wrote this paragraph for a study group. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"The first university department of international politics was founded at Aberystwyth in 1919.", flag:false, why:"Accurate: the university founded the department in 1919."},
      " ",
      {t:"Before then, nobody had thought seriously about relations between peoples.", flag:true, why:"Misleading. Diplomacy and thinking about war, alliances and empires go back thousands of years, in Egypt, Greece, India, China, North Africa and elsewhere."},
      " ",
      {t:"The chair was funded by the Davies family in memory of students who died in the First World War.", flag:false, why:"Accurate: that is how the gift was described when it was made."},
      " Today ",
      {t:"IR draws on history, law, economics and sociology.", flag:false, why:"Accurate: IR is strongly interdisciplinary."},
      " But ",
      {t:"it still only studies wars between governments.", flag:true, why:"Inaccurate. IR also studies trade, climate, health, migration and rights, and many non-state actors."},
      " Some scholars argue ",
      {t:"the field’s origin story leaves out early work on empire and race, and non-Western traditions.", flag:false, why:"Accurate: this is the critique made by scholars such as Robert Vitalis and the Global IR movement."}
    ]},
    {id:"e2u5-l1-x7", type:"mcq", q:"Which question is a **normative** (judging) question rather than an explaining one?", options:[
      {t:"Should rich countries cancel the debts of the poorest countries?", ok:true, why:"Right. “Should” asks what ought to happen, which depends on values as well as evidence."},
      {t:"Why did trade between these two countries double after their agreement?", why:"This asks for an explanation of what happened, which evidence can test."},
      {t:"How many countries attended the conference?", why:"This is a factual question with a checkable answer."},
      {t:"Which countries voted for the resolution, and what did they have in common?", why:"This asks for a description and an explanation of a pattern, not a judgement."}
    ]}
   ],
   apply:{
    intro:"Start noticing international relations in your own life. Nothing here needs an account or costs money; keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Trace three things you own", how:[
       "Pick three everyday objects: for example a piece of clothing, something electronic and a food item.",
       "Check the label, box or packaging for where it was made or grown. If it doesn’t say, note that too.",
       "For each one, write which countries it probably passed through, and one rule or agreement that had to exist for it to reach you (a trade agreement, a safety standard, a shipping route)."
     ], write:"Object 1… made in… rule it needed… Object 2… Object 3… What surprised me…"},
     {t:"Find IR in today’s news", how:[
       "Open any news source you trust and find one story that involves more than one country.",
       "Write the headline in your own words.",
       "List who is involved (governments, organisations, companies, people) and one way the story could affect ordinary people somewhere."
     ], write:"The story… Who is involved… How it might affect everyday life…"},
     {t:"Ask an explaining question and a judging question", how:[
       "Using the same story, write one question that asks *why* something happened (an explaining question).",
       "Then write one question that asks what *should* happen (a normative question).",
       "Note what kind of evidence would help with the first, and what values the second depends on."
     ], write:"Explaining question… Evidence that would help… Judging question… Values it depends on…"}
    ],
    proof:"Notes tracing three objects to the countries and rules behind them, one news story with its actors listed, and a pair of questions: one explaining, one judging."
   },
   read:[
    {book:"eir", where:"“Getting Started” (the book’s opening section, before Chapter 1)", note:"Read it after this lesson: it explains the capital-letters convention, first mentions terms such as nation-state and sovereignty (Lesson 2 explains them), and gives advice on reading sources critically."},
    {book:"ospol", where:"Chapter 14 “International Relations”, Introduction", note:"A short, gentle opening to the chapter, for a second explanation of what the field covers."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u5-l2", title:"States, sovereignty and nations", minutes:55,
   hook:{q:"A 1933 treaty, the Montevideo Convention, is the most quoted legal definition of a state. Does it say a state needs other states to recognise it before it exists?", options:["Yes, at least one other state must recognise it","Yes, most states in the world must recognise it","No: it says a state’s political existence is independent of recognition","It says only UN membership counts"], answer:2, reveal:"**No.** Article 3 of the Montevideo Convention says “the political existence of the state is independent of recognition by the other states”. In practice, though, a state that almost nobody recognises struggles to trade, travel or join organisations, so scholars still argue about how much recognition matters. (The UN didn’t exist yet in 1933.) This lesson unpacks what a state is, what sovereignty means, and how nations fit in."},
   goals:[
     "Tell a state from a nation, a government and a country, and explain what a nation-state is",
     "Apply the four Montevideo criteria and explain the declaratory and constitutive views of recognition",
     "Explain internal, external and Westphalian sovereignty, and why sovereignty is often bent in practice",
     "Describe the standard story of the Peace of Westphalia and the historians’ “Westphalian myth” critique",
     "Explain nationalism and self-determination with examples from several regions"
   ],
   learn:[
    {h:"What is a state?", body:[
      {lead:"Picture a map. Draw a line around a piece of land, add the people who live there, add an organisation that makes and enforces rules for them, and then add other countries willing to deal with that organisation. You have just sketched a state."},
      "In IR a [[state]] is a political organisation with a permanent population, a defined territory and a government that has [[authority]] over them, and that deals with other states as an independent equal. In IR, “state” and “country” mean the same thing. (In federations such as Brazil, India or Nigeria, “state” also names a region inside the country; IR doesn’t mean that.)",
      "A state is not the same as its government. The **government** is the group of people in charge at a given moment: a president, a prime minister, ministers. Governments come and go after elections, coups or revolutions; the state carries on. That is why a treaty a country signed fifty years ago still binds it today, even though everyone who signed it has left office.",
      {table:[["Word","What it means","Example of the difference"],["State","The lasting political organisation: territory, people, government, independence","The state signs a treaty"],["Government","The people running the state right now","A new government is elected"],["Nation","A people who see themselves as one community","A nation may live in several states"],["Country","Everyday word, usually the same as state","“Which country are you from?”"]]}
    ]},
    {h:"The Montevideo criteria", body:[
      "The most quoted legal checklist comes from the **Montevideo Convention on the Rights and Duties of States**, signed by American states in Montevideo, Uruguay, on 26 December 1933. Its Article 1 says a state “should possess the following qualifications”:",
      {ol:[
        "**A permanent population.** People who live there long-term. There’s no minimum size: some states have only a few thousand people.",
        "**A defined territory.** Land the state controls. Its borders don’t all have to be agreed; many states have border disputes and are still states.",
        "**Government.** An authority that actually runs things: keeps order, makes laws, provides some services.",
        "**Capacity to enter into relations with the other states.** In practice this means independence: the ability to make its own treaties and deals, rather than having another state do it for it."
      ]},
      "These are known as the [[montevideo-criteria|Montevideo criteria]]. Only countries in the Americas signed the convention, but lawyers worldwide quote it as a fair statement of what a state is in international law.",
      {fig:'<svg viewBox="0 0 340 334"><rect class="d-panel" x="6" y="6" width="328" height="210" rx="12" stroke-width="1.5"/><text x="170" y="30" text-anchor="middle">Montevideo Convention, Article 1</text><rect class="d-lup" x="18" y="44" width="146" height="74" rx="8" stroke-width="2"/><text x="91" y="72" text-anchor="middle">Permanent</text><text x="91" y="90" text-anchor="middle">population</text><rect class="d-sage" x="176" y="44" width="146" height="74" rx="8" stroke-width="2"/><text x="249" y="72" text-anchor="middle">Defined</text><text x="249" y="90" text-anchor="middle">territory</text><rect class="d-gold" x="18" y="128" width="146" height="74" rx="8" stroke-width="2"/><text x="91" y="170" text-anchor="middle">Government</text><rect class="d-rose" x="176" y="128" width="146" height="74" rx="8" stroke-width="2"/><text x="249" y="156" text-anchor="middle">Capacity to deal</text><text x="249" y="174" text-anchor="middle">with other states</text><rect class="d-soft" x="6" y="230" width="328" height="96" rx="12" stroke-width="1.5" stroke-dasharray="5 4"/><text x="170" y="254" text-anchor="middle">Recognition by other states?</text><text class="s" x="170" y="276" text-anchor="middle">Declaratory view: not required (Article 3)</text><text class="s" x="170" y="296" text-anchor="middle">Constitutive view: recognition makes the state</text><text class="s" x="170" y="316" text-anchor="middle">In practice: it decides who will deal with you</text></svg>', alt:"Four boxes inside a panel labelled Montevideo Convention, Article 1: permanent population, defined territory, government, and capacity to deal with other states. Below, a dashed box asks: recognition by other states? The declaratory view says it is not required (Article 3); the constitutive view says recognition makes the state; in practice, it decides who will deal with you.", cap:"The four Montevideo criteria, and the debate about recognition that sits just outside them."},
      {tip:"Notice what is **not** on the list: democracy, wealth, size, a particular religion or UN membership. A tiny, poor or authoritarian state is still a state."}
    ]},
    {h:"Recognition: does a state need others to say yes?", body:[
      "[[recognition-of-states|Recognition]] is when one state formally accepts another as a state, usually by saying so publicly and then exchanging ambassadors or signing treaties. It works a bit like being accepted into a group of neighbours: you can live in your house without their approval, but life is much harder if none of them will talk to you.",
      "Two classic views compete. The **declaratory view** says a state exists as soon as it meets the criteria; recognition merely *declares* a fact. Montevideo’s Article 3 takes this view: “the political existence of the state is independent of recognition by the other states.” The **constitutive view** says recognition *constitutes*, or creates, the state: without it, an entity isn’t a full member of the club.",
      "Most international lawyers lean towards the declaratory view, but practice keeps the constitutive view alive: without wide recognition, an entity usually can’t join the UN or have its passports accepted. And recognition is a political choice, shaped by governments’ interests as well as by the legal checklist.",
      {ex:"In 1931 Japan’s army occupied Manchuria in north-east China, and in 1932 Japan set up a new state there called Manchukuo. On paper it had a population, territory and a government. But in 1933 the League of Nations accepted a report finding that Manchukuo was not the product of a genuine independence movement, and called on members not to recognise it; Japan then announced it was leaving the League. Most of the world never recognised Manchukuo (the small number of governments that did were mostly Japan’s allies and partners), and it disappeared at the end of the Second World War in 1945. The case shows the Montevideo idea of “capacity” (real independence) and the power of collective non-recognition.", label:"Case: Manchukuo, 1932–1945"},
      "Joining the UN is the clearest sign of being accepted. Under Article 4 of the [[un-charter|UN Charter]], a state is admitted by the General Assembly on the recommendation of the Security Council. Because the five permanent members of the Council can block a recommendation with a [[veto]], UN membership depends on great-power politics as well as on statehood.",
      "As of 2026, a few places are recognised as states by some countries but not by others. IR textbooks often discuss Kosovo, Palestine and Taiwan, each in a different situation. Their status is politically contested, and this course takes no side; if you study one, read sources from several perspectives and check the date, because recognitions change."
    ]},
    {h:"Sovereignty", body:[
      "Think of your home. Inside it, you decide the rules: when meals happen, who visits. Outside, no one is your boss, but your neighbours expect you not to walk into their homes either. [[sovereignty|Sovereignty]] is that idea applied to states: supreme authority inside a territory, and independence from any higher authority outside it.",
      "Scholars split it into two faces. **Internal sovereignty** is the state’s final authority over its own territory and people: its laws apply, its courts decide. **External sovereignty** is independence: no other state or body ranks above it, and states are legally equal whatever their size.",
      "The UN Charter writes these ideas into its first principles. Article 2(1) says the UN “is based on the principle of the sovereign equality of all its Members.” Article 2(7) says nothing in the Charter allows the UN to intervene in matters that are “essentially within the domestic jurisdiction” of a state, except for enforcement measures ordered by the Security Council. The principle of not interfering in another state’s internal affairs is often called [[westphalian-sovereignty|Westphalian sovereignty]].",
      "In practice sovereignty is often bent. The political scientist Stephen Krasner, in *Sovereignty: Organized Hypocrisy* (1999), showed that powerful states have intervened in weaker ones for centuries, and that states regularly give up bits of control by signing treaties, joining organisations or accepting loans with conditions. Sovereignty is a strong rule that everyone claims and many break: “organized hypocrisy”.",
      "A newer idea, the Responsibility to Protect (2005), says sovereignty also brings a duty to protect one’s own people from mass atrocities ({{responsibility-to-protect}}, Unit 7).",
      {key:"Sovereignty means final authority at home and no boss abroad. It is the system’s central rule, and also one of its most often bent."}
    ]},
    {h:"Westphalia, 1648, and the “Westphalian myth”", body:[
      "The standard story says the modern system of sovereign states began in 1648. That year, peace treaties signed in the towns of Münster and Osnabrück, in the region of Westphalia in today’s Germany, ended the Thirty Years’ War in the Holy Roman Empire (a loose union of hundreds of German and central European territories under an emperor) and the Eighty Years’ War between Spain and the Dutch Republic. In this story, the **Peace of Westphalia** replaced a world of overlapping religious and imperial authorities with a world of separate, equal, sovereign states that didn’t interfere in each other’s religion or politics.",
      "Many historians and IR scholars now call this the **Westphalian myth**. In a well-known 2001 article, Andreas Osiander showed that the treaties don’t set out sovereignty in the modern sense:",
      {list:[
        "The Holy Roman Empire wasn’t dissolved; it lasted until 1806, and the treaties became part of its constitution.",
        "The treaties gave France and Sweden rights as guarantors (official protectors) of the settlement inside the Empire, which is closer to permitted *interference* than to non-interference.",
        "The rule that a ruler could choose the religion of his territory dates back to the Peace of Augsburg in 1555, not 1648.",
        "Sovereign states emerged gradually, and spread worldwide mainly through European empires and, later, decolonisation (Lesson 5)."
      ]},
      "“Westphalian” is still a handy shorthand for a system of territorial states that claim sovereignty and equality. Just remember it names an idea that grew slowly.",
      {warn:"If a source says “the Peace of Westphalia created the modern state system”, read it as the traditional textbook story, not a settled fact. A more careful version: 1648 became a *symbol* of a system that developed over centuries."}
    ]},
    {h:"Nations, nation-states and nationalism", body:[
      "A [[nation]] is a large group of people who see themselves as one community, usually sharing some mix of language, history, culture, religion or homeland, and who often want to govern themselves. The political scientist Benedict Anderson called nations “imagined communities” (1983): you will never meet most members of your nation, yet many people feel a deep bond with them. Nations are [[social-construction|socially constructed]], which doesn’t make them any less real in their effects.",
      "A [[nation-state]] is the ideal in which one nation has its own state, so that political borders and national identity line up. Few states fit it perfectly. Japan and Iceland are often given as close examples, though both have minorities and immigrants.",
      {fig:'<svg viewBox="0 0 340 384"><rect class="d-panel" x="6" y="6" width="328" height="112" rx="12" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">Close to one nation, one state</text><rect class="d-ink" x="110" y="40" width="120" height="60" rx="6" fill="none" stroke-width="2"/><circle class="d-lup" cx="170" cy="70" r="24" stroke-width="2"/><rect class="d-panel" x="6" y="130" width="328" height="112" rx="12" stroke-width="1.5"/><text x="170" y="152" text-anchor="middle">Several nations in one state</text><rect class="d-ink" x="80" y="164" width="180" height="60" rx="6" fill="none" stroke-width="2"/><circle class="d-lup" cx="122" cy="194" r="20" stroke-width="2"/><circle class="d-sage" cx="170" cy="194" r="20" stroke-width="2"/><circle class="d-gold" cx="218" cy="194" r="20" stroke-width="2"/><rect class="d-panel" x="6" y="254" width="328" height="122" rx="12" stroke-width="1.5"/><text x="170" y="276" text-anchor="middle">One nation across several states</text><rect class="d-ink" x="28" y="290" width="88" height="60" rx="6" fill="none" stroke-width="2"/><rect class="d-ink" x="126" y="290" width="88" height="60" rx="6" fill="none" stroke-width="2"/><rect class="d-ink" x="224" y="290" width="88" height="60" rx="6" fill="none" stroke-width="2"/><ellipse class="d-rose" cx="170" cy="320" rx="120" ry="18" stroke-width="2" fill-opacity="0.6"/><text class="s" x="170" y="368" text-anchor="middle">Square = state border · circle = a nation</text></svg>', alt:"Three panels. Top: one square (a state border) with one circle (a nation) inside it, labelled close to one nation, one state. Middle: one square containing three different circles, labelled several nations in one state. Bottom: three squares side by side with one long oval stretching across all three, labelled one nation across several states.", cap:"Nations and states rarely line up neatly. Squares are state borders; circles are nations."},
      "Two other patterns are much more common. Many states contain several nations or peoples: the United Kingdom brings together England, Scotland, Wales and Northern Ireland; Nigeria and India contain hundreds of [[ethnicity|ethnic]] and language groups; Bolivia’s 2009 constitution calls the country a “Plurinational State”. And some nations live across several states. Somali communities live in Somalia, Ethiopia, Kenya and Djibouti; Kurdish communities live mainly in Turkey, Iraq, Iran and Syria. The Kurds are often described as one of the largest nations without a state of their own, a **stateless nation**.",
      "[[nationalism|Nationalism]] is the belief that a nation should have its own state, or more broadly a strong loyalty to one’s nation. It powered independence movements that ended empires in Latin America, Asia, Africa and the Caribbean. It has also fuelled wars, the persecution of minorities and, at worst, [[genocide]]. IR scholars study all these faces without assuming nationalism is always good or always bad.",
      "Closely tied to it is [[self-determination]]: the principle that a people has the right to choose its own political status. The UN Charter names “self-determination of peoples” among the UN’s purposes (Article 1). It was central to decolonisation, and it is hard to apply: who counts as “a people”, and does self-determination mean independence or self-government inside an existing state? Disagreement over those questions lies behind many disputes."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["The state and the government are the same thing.","Governments change; the state, with its treaties and debts, continues."],["A state must be recognised by the UN to exist.","The Montevideo view is that statehood doesn’t depend on recognition, though recognition matters hugely in practice."],["Every country is a nation-state.","Most states contain several nations or peoples, and some nations span several states."],["Sovereignty means a state can do anything it likes.","It has rules too: states have agreed to treaties, human rights law and the UN Charter, and sovereignty is often bent."]]},
      {terms:["state","montevideo-criteria","recognition-of-states","sovereignty","westphalian-sovereignty","nation","nation-state","stateless-nation","nationalism","self-determination"]}
    ]}
   ],
   try:[
    {id:"e2u5-l2-x1", type:"sort", q:"Is each item describing a **state**, a **nation** or a **government**?", buckets:["State","Nation","Government"], items:[
      {t:"The prime minister and cabinet who took office after this year’s election", b:2, why:"These are the people running the state right now. After the next election they may be replaced, but the state continues."},
      {t:"Somali people living in Somalia, Ethiopia, Kenya and Djibouti who share a language and identity", b:1, why:"A people with a shared identity, spread across several states: a nation."},
      {t:"A legal entity with borders, a population and a government, which still honours a treaty signed 40 years ago", b:0, why:"Lasting legal identity that outlives governments is the mark of a state."},
      {t:"A community that sees itself as one people with a shared history and homeland", b:1, why:"Shared identity and a sense of belonging make a nation, whether or not it has a state."},
      {t:"The president and ministers who were removed in a coup last month", b:2, why:"A group in charge at one moment. The coup changed the government, not the existence of the state."},
      {t:"A country that joined the United Nations and signs its own trade agreements", b:0, why:"An independent political organisation dealing with other states as an equal: a state."}
    ]},
    {id:"e2u5-l2-x2", type:"mcq", q:"Which of these are among the four Montevideo criteria for statehood? Choose all that apply.", options:[
      {t:"A permanent population", ok:true, why:"Yes, criterion (a). There is no minimum size."},
      {t:"A defined territory", ok:true, why:"Yes, criterion (b). Borders can be partly disputed; there must be a territory the state controls."},
      {t:"A government", ok:true, why:"Yes, criterion (c): an authority that actually governs."},
      {t:"Capacity to enter into relations with other states", ok:true, why:"Yes, criterion (d), which in practice means independence."},
      {t:"Membership of the United Nations", why:"Not a criterion. The UN didn’t exist in 1933, and statehood comes before UN membership, not from it."},
      {t:"Democratic elections", why:"Not a criterion. The convention says nothing about how a government is chosen."}
    ]},
    {id:"e2u5-l2-x3", type:"mcq", q:"A territory has a stable population, clear borders and an effective government that collects taxes and runs schools. It conducts its own trade talks. But almost no state recognises it. What would the **declaratory** view say?", options:[
      {t:"It may already be a state, because it meets the criteria; recognition would only acknowledge that fact.", ok:true, why:"Right. The declaratory view says statehood comes from meeting the criteria, not from others’ approval (Montevideo, Article 3)."},
      {t:"It cannot be a state until most UN members recognise it.", why:"That is closer to the constitutive view, which says recognition creates statehood."},
      {t:"It is a state only if it holds democratic elections.", why:"Neither view, nor Montevideo, makes democracy a condition of statehood."},
      {t:"It becomes a state as soon as its government declares independence, whether or not it controls any territory.", why:"Declaring isn’t enough under either view: the criteria include a defined territory and an effective government."}
    ]},
    {id:"e2u5-l2-x4", type:"order", q:"Put the steps for a new state to join the United Nations in order (UN Charter, Article 4).", items:[
      {t:"The state applies for membership, accepting the Charter’s obligations", why:"Membership starts with the state’s own application."},
      {t:"The Security Council considers the application and recommends admission", why:"The Council must recommend first. A permanent member can block the recommendation with a veto."},
      {t:"The General Assembly votes to admit the state, by a two-thirds majority", why:"Admission is decided by the Assembly, on the Council’s recommendation."},
      {t:"The state takes its seat as a UN member", why:"Only after the Assembly’s decision does the state become a member."}
    ]},
    {id:"e2u5-l2-x5", type:"match", q:"Match each idea to the example that best shows it.", pairs:[
      ["Internal sovereignty","A country’s courts have the final say on crimes committed in its territory","Final authority inside the state’s own territory."],
      ["External sovereignty","A small island state has one vote in the UN General Assembly, the same as a giant","Legal equality and independence from any higher authority."],
      ["Non-interference (Westphalian sovereignty)","A government protests that a foreign power is funding one side in its election","The norm that outsiders stay out of a state’s internal affairs."],
      ["Self-determination","A colony’s people vote on whether to become independent","A people choosing its own political status."],
      ["Nationalism","A movement argues that its people must have a state of their own","The belief that a nation should govern itself, or strong loyalty to the nation."]
    ]},
    {id:"e2u5-l2-x6", type:"spot", q:"Priya found this summary online. Tap each claim that is **inaccurate or overstated**.", ask:"inaccurate or overstated", parts:[
      {t:"The Peace of Westphalia was signed in 1648 in Münster and Osnabrück.", flag:false, why:"Accurate: the treaties were negotiated and signed in those two Westphalian towns in 1648."},
      " ",
      {t:"It ended the Thirty Years’ War.", flag:false, why:"Accurate (and it also ended the Eighty Years’ War between Spain and the Dutch Republic)."},
      " ",
      {t:"It abolished the Holy Roman Empire,", flag:true, why:"Inaccurate. The Empire continued until 1806, and the treaties became part of its constitution."},
      " and ",
      {t:"from that moment on every state in the world was sovereign and equal.", flag:true, why:"Overstated. Sovereign statehood developed over centuries, and most of the world was under empires and colonial rule until the 20th century."},
      " Today, ",
      {t:"many historians call the idea that 1648 created the modern state system a myth or a simplification.", flag:false, why:"Accurate. Scholars such as Andreas Osiander have argued this."}
    ]},
    {id:"e2u5-l2-x7", type:"mcq", q:"Stephen Krasner described sovereignty as “organized hypocrisy”. What did he mean?", options:[
      {t:"States all claim sovereignty as a rule, yet powerful states often break it and states regularly give parts of it away.", ok:true, why:"Right. The rule is widely proclaimed and widely bent, by intervention, treaties and conditional loans."},
      {t:"Sovereignty is an illusion and has no effect on how states behave.", why:"Krasner didn’t say it was meaningless. It shapes behaviour, even though it is often broken."},
      {t:"Only democracies can be truly sovereign.", why:"Sovereignty has nothing to do with the type of government."},
      {t:"International organisations have replaced sovereign states.", why:"Krasner’s point is about states bending the rule, not about states disappearing."}
    ]}
   ],
   apply:{
    intro:"Use real documents and maps to see states, nations and sovereignty at work. Everything here is free and needs no account.",
    tasks:[
     {t:"Check a state against the Montevideo criteria", how:[
       "Choose any country you know a little about (not a disputed case).",
       "For each of the four criteria, write one piece of evidence that it meets it: population, territory, government, capacity to deal with other states.",
       "Then note one thing about that country that is *not* a criterion (its wealth, size, religion or political system), to remind yourself what statehood doesn’t require."
     ], write:"Country… Population… Territory… Government… Capacity… Something that isn’t a criterion…"},
     {t:"State, nation or both?", how:[
       "Think of a group you belong to or know well: a national, ethnic, language or regional community.",
       "Write whether it has its own state, shares a state with others, or lives across several states.",
       "Note one symbol, story or practice that makes people feel part of it (Anderson’s “imagined community”)."
     ], write:"The group… How it relates to states… What makes people feel they belong…"},
     {t:"Read sovereignty in the UN Charter", how:[
       "Find the UN Charter on the United Nations website (un.org) and open Chapter I.",
       "Read Article 1 (the UN’s purposes) and Article 2 (its principles).",
       "Copy one phrase about sovereignty or equality and one about self-determination, and write what each means in your own words."
     ], write:"Phrase about sovereignty… In my words… Phrase about self-determination… In my words…"}
    ],
    proof:"A Montevideo checklist for one country, notes on how one community relates to states, and two phrases from the UN Charter explained in your own words."
   },
   read:[
    {book:"ospol", where:"Chapter 14, sections 14.2 “Understanding the Different Types of Actors in the International System” (the part on states) and 14.3 “Sovereignty and Anarchy”", note:"Read it after this lesson. Its list of a state’s “four characteristics” differs from Montevideo’s (it includes the population’s allegiance and recognition); textbooks phrase this differently, and the lesson explains the legal version and the debate."},
    {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar), first half", note:"How sovereign states emerged in Europe, and the traditional Westphalian story told well."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u5-l3", title:"Anarchy, order and the many actors", minutes:55,
   hook:{q:"When IR scholars say the international system is an “anarchy”, what do they mean?", options:["The world is in chaos and constant war","There is no government above states","Anarchist movements run many countries","Most states have collapsed"], answer:1, reveal:"**There is no government above states.** In IR, anarchy is a technical word: no world government, no world police and no court that can force every state to obey. It does *not* mean chaos. Planes land on time in foreign airports and letters cross oceans, all without a world government. This lesson explains how order can exist without a ruler, and who besides states takes part in world politics."},
   goals:[
     "Explain what anarchy means in IR and why it is not the same as chaos",
     "Describe how order is kept without a world government: diplomacy, law, organisations and habits",
     "Define the international system and great powers",
     "Tell intergovernmental organisations, NGOs, multinational corporations and non-state armed groups apart, with examples",
     "Explain how individuals and cities can act in world politics"
   ],
   learn:[
    {h:"A neighbourhood with no police", body:[
      {lead:"Imagine a street of twenty households with no police, no courts and no mayor. No one can call for help if a neighbour breaks a promise. What happens?"},
      "It probably isn’t a war of all against all. Most households keep their promises, because they want others to keep theirs and because they’ll be living side by side for years. They make agreements about noise, parking and shared trees. A few households are much bigger and richer than the others, and their wishes count for more. Some families build tall fences and buy guard dogs. Now and then two households have a serious fight, and others take sides.",
      "That street is a good picture of the [[anarchy|anarchy]] IR scholars talk about. Inside a country, there is a **hierarchy**: a government above everyone that can make laws, enforce them and punish people who break them. Between countries there is no such thing. No world government passes laws for all states, no world police arrests a state that breaks a treaty, and no court can compel every state to appear.",
      "That is all “anarchy” means in IR: **the absence of a central authority above states.** It comes from Greek words meaning “without a ruler”. It doesn’t mean disorder, and it doesn’t mean that rules don’t exist.",
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="e2u5-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="6" y="6" width="328" height="176" rx="12" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">Inside a state: hierarchy</text><rect class="d-gold" x="100" y="40" width="140" height="40" rx="8" stroke-width="2"/><text x="170" y="65" text-anchor="middle">Government</text><path class="d-ink" d="M130 82 L80 116" stroke-width="2" marker-end="url(#e2u5-l3-a)"/><path class="d-ink" d="M170 82 L170 116" stroke-width="2" marker-end="url(#e2u5-l3-a)"/><path class="d-ink" d="M210 82 L260 116" stroke-width="2" marker-end="url(#e2u5-l3-a)"/><circle class="d-soft" cx="74" cy="134" r="16" stroke-width="1.5"/><circle class="d-soft" cx="170" cy="134" r="16" stroke-width="1.5"/><circle class="d-soft" cx="266" cy="134" r="16" stroke-width="1.5"/><text class="s" x="170" y="172" text-anchor="middle">laws, police and courts above everyone</text><rect class="d-panel" x="6" y="194" width="328" height="202" rx="12" stroke-width="1.5"/><text x="170" y="216" text-anchor="middle">Between states: anarchy</text><rect class="d-soft" x="90" y="228" width="160" height="34" rx="8" stroke-width="1.5" stroke-dasharray="5 4"/><text class="s" x="170" y="250" text-anchor="middle">no world government</text><circle class="d-lup" cx="58" cy="306" r="24" stroke-width="2"/><circle class="d-sage" cx="134" cy="306" r="18" stroke-width="2"/><circle class="d-rose" cx="206" cy="306" r="30" stroke-width="2"/><circle class="d-gold" cx="282" cy="306" r="16" stroke-width="2"/><path class="d-soft" d="M82 306 L116 306 M152 306 L176 306 M236 306 L266 306" stroke-width="2" stroke-dasharray="3 3"/><text class="s" x="170" y="360" text-anchor="middle">states side by side, of unequal size,</text><text class="s" x="170" y="378" text-anchor="middle">linked by deals, law and diplomacy</text></svg>', alt:"Two panels. Top, labelled inside a state, hierarchy: a box marked government with arrows pointing down to three people, captioned laws, police and courts above everyone. Bottom, labelled between states, anarchy: an empty dashed box marked no world government above four circles of different sizes standing side by side, joined by dotted lines, captioned states side by side, of unequal size, linked by deals, law and diplomacy.", cap:"Hierarchy inside a state, anarchy between states. Anarchy means nobody is above the states, not that nothing connects them."}
    ]},
    {h:"What anarchy does, and doesn’t, imply", body:[
      "Because no one is above them, states in the end have to look after their own safety. Some scholars call this [[self-help]]. It can lead to worry and arms build-ups: when one state strengthens its army for defence, its neighbour may see a threat and do the same, leaving both less safe. Unit 6 calls this the [[security-dilemma|security dilemma]].",
      "But anarchy doesn’t decide everything. The same anarchic system holds bitter rivals and close friends. Norway and Sweden have shared a long border in peace for over two centuries, and France and Germany, which fought three major wars between 1870 and 1945, now treat war between them as unthinkable. The political scientist Alexander Wendt summed up one school of thought in a 1992 article title: “anarchy is what states make of it.” How dangerous anarchy is depends partly on how states see each other.",
      {tip:"Textbooks differ here. OpenStax’s *Introduction to Political Science* describes anarchy as a lack of “a general sense of order”. Most IR scholars use the narrower meaning in this lesson: no authority above states. Order can and does exist inside an anarchy."},
      "Two more terms help describe the setting. The [[international-system|international system]] is the whole set of states and other actors and the patterns of interaction between them, from trade to war. A [[great-power|great power]] is a state with enough military, economic and political strength to shape events far beyond its own region. The term became common in 19th-century Europe; when one or two powers tower over the rest, people sometimes call them **superpowers**, as with the United States and the Soviet Union during the Cold War."
    ]},
    {h:"Order without a government", body:[
      "If no one can force states to behave, why does so much of international life run smoothly? Several things keep order:",
      {list:[
        "**Diplomacy.** [[diplomacy|Diplomacy]] is the practice of managing relations between states by negotiation, through official representatives. Its rules are among the oldest in world politics. The Vienna Convention on Diplomatic Relations (1961) protects embassies and gives diplomats immunity from arrest in the country where they work, so even enemies can keep talking.",
        "**Treaties and law.** States sign agreements and mostly keep them. The legal scholar Louis Henkin wrote in *How Nations Behave* that “almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time.” ({{international-law}}, Unit 7.)",
        "**Organisations.** Bodies such as the UN, the World Health Organization or regional organisations give states places to meet, rules to follow and help in enforcing them.",
        "**Reciprocity and reputation.** A state that breaks deals finds others reluctant to deal with it, and the state it cheated may cheat back. Like households on the street, states expect to live together for a long time.",
        "**Habits and norms.** Some rules become so normal that breaking them is rare and shocking, such as treating ambassadors as untouchable."
      ]},
      {ex:"In 1944, during the Second World War, governments meeting in Chicago signed the Convention on International Civil Aviation. It set shared rules for flying over and landing in other countries and later created the International Civil Aviation Organization (ICAO). Today a pilot from one country can land in dozens of others using the same procedures and, on international flights, a shared language (English) for radio calls. There is no world aviation police: states follow the rules because everyone gains from safe, predictable flights.", label:"Worked example: order in the sky"},
      {key:"Anarchy means no ruler above states. Order still comes from diplomacy, law, organisations, reciprocity and shared habits."}
    ]},
    {h:"Not only states: intergovernmental organisations", body:[
      "States are still the main actors in IR. They have the biggest armies, sign treaties and hold seats at the UN. But many other actors also cross borders and shape what happens. The E-IR textbook calls this “one world, many actors”.",
      "An [[intergovernmental-organization|intergovernmental organisation]] (IGO) is a body whose members are states, set up by an agreement between them to work on shared problems. The UN, the African Union, ASEAN, the World Trade Organization and the World Health Organization are all IGOs. They are older than many people think: the Central Commission for Navigation on the Rhine dates from 1815, the International Telegraph Union (today’s ITU) from 1865 and the Universal Postal Union from 1874.",
      "IGOs have a double nature. They are tools of their member states, especially the most powerful ones, which often pay the most and shape the rules. But once created, they can also act with some independence: their staff gather data, write reports, set standards and sometimes criticise members. Units 6 and 7 look at how much IGOs really change state behaviour."
    ]},
    {h:"NGOs, companies and armed groups", body:[
      "A [[ngo|non-governmental organisation]] (NGO) is a private, not-for-profit group that is independent of governments and works on a cause. Some work across borders: the International Committee of the Red Cross (founded in Geneva in 1863), Amnesty International (1961) and Médecins Sans Frontières (Doctors Without Borders, 1971). NGOs deliver aid, monitor human rights, campaign for new rules and give states expert advice. Together with social movements, they are often called **global civil society**.",
      "A [[multinational-corporation|multinational corporation]] (MNC) is a company that owns or controls operations in more than one country. Companies have long shaped world politics: the English East India Company, chartered in 1600, came to rule large parts of South Asia with its own army. Today’s multinationals decide where factories go, move money between countries and lobby governments on trade and tax rules. Their choices can matter as much to a small country as those of a foreign government.",
      "A [[non-state-armed-group|non-state armed group]] uses or threatens violence but isn’t part of a state’s armed forces: rebel movements, militias, warlords’ forces, some criminal organisations and terrorist groups. Some control territory, collect taxes and run courts. Many civil wars end only when such a group signs a peace deal, as when Colombia’s government and the FARC rebels signed a peace agreement in 2016. The ICRC talks with armed groups so that it can reach civilians and detainees, which doesn’t mean it approves of them.",
      {table:[["Actor","Who belongs","Examples"],["IGO","States","UN, African Union, ASEAN, WHO"],["NGO","Private people and groups, not for profit","Red Cross (ICRC), Amnesty, MSF"],["Multinational corporation","Owners and shareholders, for profit","Car makers, mining, tech, shipping firms"],["Non-state armed group","Fighters outside state forces","Rebel groups, militias"]]}
    ]},
    {h:"Individuals and cities", body:[
      "Individuals can matter too. The Kenyan environmentalist Wangari Maathai founded the Green Belt Movement, which planted millions of trees, and in 2004 became the first African woman to win the Nobel Peace Prize. Malala Yousafzai, shot by the Pakistani Taliban for campaigning for girls’ education, shared the 2014 Nobel Peace Prize with India’s Kailash Satyarthi, who campaigns against child labour. Leaders, diplomats, whistle-blowers, investors and ordinary people posting online can all affect events across borders.",
      "Cities increasingly act abroad as well, a practice called **city diplomacy**. Mayors sign partnership agreements, join networks such as C40 (a network of large cities working on climate change, founded in 2005) and speak at UN climate conferences. Cities can’t sign treaties as states do, but they run transport, buildings and waste, where much of the action on climate happens.",
      {ex:"In 1992 six NGOs launched the International Campaign to Ban Landmines. Working with a group of supportive governments, it pushed for a treaty outside the usual negotiating forums. The Mine Ban Treaty was signed in Ottawa in December 1997 and entered into force on 1 March 1999, after 40 states had ratified it. The campaign and its coordinator, Jody Williams, received the 1997 Nobel Peace Prize. Not every state has joined the treaty, and in 2025 some members announced they would withdraw, which shows the limits as well as the reach of non-state campaigns. One event, many actors: NGOs, individuals and middle-sized states, working together to create law that binds states.", label:"Case: many actors, one treaty"},
      "So who matters most? Most IR scholars would say states remain central, especially great powers, but that the others increasingly shape the agenda, the information and the rules. Scholars describe a shift from a purely *inter-national* picture (between states) to a *trans-national* one, in which people, money, ideas and organisations cross borders on their own.",
      {terms:["anarchy","international-system","great-power","diplomacy","intergovernmental-organization","ngo","multinational-corporation","non-state-armed-group"]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Anarchy means chaos.","It means no authority above states. There is a lot of order and cooperation inside it."],["The UN is a world government.","The UN is an IGO whose members are states. It has no general power to make laws for them or police them."],["NGOs are just charities with no political role.","Many NGOs set agendas, monitor states and help write treaties."],["Only states matter in IR.","States are central, but IGOs, NGOs, companies, armed groups, cities and individuals all act across borders."]]}
    ]}
   ],
   try:[
    {id:"e2u5-l3-x1", type:"mcq", q:"Lucía’s friend says: “The world is an anarchy, so nothing stops countries from attacking each other whenever they like, and international rules don’t exist.” What is the best correction?", options:[
      {t:"Anarchy in IR means there is no government above states. Rules, treaties and diplomacy still exist, and most states follow most of them most of the time.", ok:true, why:"Right. Anarchy describes the lack of a central authority, not the lack of rules or order."},
      {t:"Your friend is right: anarchy means constant disorder.", why:"That is the everyday meaning of anarchy, not the IR meaning. Air travel, post and trade show a great deal of order."},
      {t:"The world isn’t an anarchy, because the UN is a world government.", why:"The UN is an organisation of states; it isn’t a government above them."},
      {t:"Anarchy means anarchist movements govern most countries.", why:"In IR the word has nothing to do with anarchist political movements."}
    ]},
    {id:"e2u5-l3-x2", type:"mcq", q:"Why do most states keep most of their treaties, even though no world police can force them to? Choose the **best** explanation.", options:[
      {t:"Keeping deals usually serves their interests: others keep their side in return, and a state that cheats loses trust and partners.", ok:true, why:"Right. Reciprocity, reputation and the gains from cooperation give states strong reasons to comply even without enforcement from above."},
      {t:"The UN Secretary-General can arrest leaders who break treaties.", why:"No such power exists. The Secretary-General is the UN’s chief official, not a police chief."},
      {t:"States don’t actually keep their treaties; it only looks that way.", why:"The evidence points the other way. Henkin’s famous observation is that almost all nations keep almost all of their obligations almost all of the time."},
      {t:"Every treaty is enforced by the world’s strongest state.", why:"Powerful states sometimes push others to comply, but most treaties are kept without any outside enforcer."}
    ]},
    {id:"e2u5-l3-x3", type:"sort", q:"Which kind of actor is each one?", buckets:["IGO","NGO","Multinational corporation","Non-state armed group"], items:[
      {t:"The World Health Organization, whose members are states", b:0, why:"An organisation set up by and made of states: an IGO."},
      {t:"Médecins Sans Frontières, a private medical charity working in many countries", b:1, why:"Private, not-for-profit and independent of governments: an NGO."},
      {t:"A mining company with mines in five countries and its headquarters in a sixth", b:2, why:"A for-profit firm controlling operations in several countries: a multinational corporation."},
      {t:"A rebel movement that controls a mountain region and fights the national army", b:3, why:"It uses violence and isn’t part of the state’s forces: a non-state armed group."},
      {t:"ASEAN, the Association of Southeast Asian Nations", b:0, why:"Its members are states in Southeast Asia, so it is an IGO."},
      {t:"Amnesty International, a human rights campaign group", b:1, why:"A private, not-for-profit group independent of governments: an NGO."},
      {t:"A car maker with factories in Mexico, Thailand and Morocco", b:2, why:"A company operating in several countries."}
    ]},
    {id:"e2u5-l3-x4", type:"match", q:"Match each actor to the way it shaped world politics.", pairs:[
      ["An individual","Wangari Maathai’s tree-planting movement and 2004 Nobel Peace Prize","One person can shift agendas and inspire movements across borders."],
      ["A coalition of NGOs","The campaign that led to the 1997 Mine Ban Treaty","NGOs pushed governments to negotiate and sign a new treaty."],
      ["A network of cities","Mayors working together on climate action through C40","Cities act abroad on issues they control, such as transport and buildings."],
      ["An IGO","Shared postal rules that let parcels cross almost every border","The Universal Postal Union (1874) sets common rules for its member states."],
      ["A multinational corporation","Choosing which country gets a new factory and its jobs","Companies’ investment decisions affect governments and workers far away."]
    ]},
    {id:"e2u5-l3-x5", type:"order", q:"Put the steps of the Mine Ban Treaty’s story in order, from campaign to law.", items:[
      {t:"Six NGOs launch the International Campaign to Ban Landmines", why:"1992: the campaign starts outside governments."},
      {t:"Supportive governments join the campaign and negotiate a treaty text", why:"NGOs needed states: only states can make a treaty."},
      {t:"States sign the treaty in Ottawa", why:"December 1997. Signing shows intent to be bound but doesn’t yet make the treaty law."},
      {t:"Forty states ratify, the number the treaty requires", why:"Ratification is each state’s formal consent to be bound, usually after approval at home."},
      {t:"The treaty enters into force", why:"1 March 1999: from then on it binds the states that have ratified it."}
    ]},
    {id:"e2u5-l3-x6", type:"spot", q:"Mei wrote this paragraph about world politics. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"In IR, anarchy means there is no authority above states.", flag:false, why:"Correct: that is the technical meaning."},
      " ",
      {t:"That is why there is no cooperation between countries at all.", flag:true, why:"Wrong. Anarchy coexists with a great deal of cooperation: trade agreements, alliances, aviation and postal rules, and more."},
      " ",
      {t:"Diplomats are protected by the 1961 Vienna Convention on Diplomatic Relations.", flag:false, why:"Correct: it protects embassies and gives diplomats immunity."},
      " ",
      {t:"The UN is a world government that passes laws every country must obey.", flag:true, why:"Wrong. The UN is an organisation of states. Its General Assembly mostly makes recommendations; only some Security Council decisions are binding, and there is no general law-making power."},
      " ",
      {t:"Non-state actors such as NGOs and companies also influence international affairs.", flag:false, why:"Correct: IR increasingly studies them alongside states."}
    ]},
    {id:"e2u5-l3-x7", type:"mcq", q:"A country’s government expels a foreign diplomat for spying, but doesn’t put him on trial. Why not?", options:[
      {t:"Under the Vienna Convention on Diplomatic Relations, diplomats have immunity from arrest and trial; the host can only declare them unwelcome and send them home.", ok:true, why:"Right. Immunity lets diplomats work even between hostile states; the host’s remedy is expulsion (declaring them “persona non grata”)."},
      {t:"Spying is allowed under the host country’s own laws.", why:"Host countries’ laws forbid spying on them. The diplomat escapes trial because of immunity, not because spying is allowed."},
      {t:"The UN must approve any trial of a foreign national.", why:"There is no such rule; states try foreigners in their courts all the time. Diplomats are a special case."},
      {t:"Only the diplomat’s home country can expel him.", why:"It is the host country that expels a diplomat it no longer accepts."}
    ]}
   ],
   apply:{
    intro:"Find order and many actors in the world around you. Everything here can be done with a phone and a free news site.",
    tasks:[
     {t:"Spot order without a government", how:[
       "Think of one thing that works across borders every day without a world government: flights, post, phone calls between countries, shipping, sports competitions.",
       "Write who made the rules (governments, an IGO, a private body) and why most participants follow them.",
       "Note what happens to those who break the rules."
     ], write:"The thing that works… Who made the rules… Why people follow them… What happens to rule-breakers…"},
     {t:"Map the actors in one news story", how:[
       "Choose one international news story from this week.",
       "List every actor mentioned and label each one: state, IGO, NGO, company, armed group, city or individual.",
       "Circle the one you think has the most influence in the story, and write one sentence on why."
     ], write:"The story… Actors and their types… Most influential and why…"},
     {t:"Look up an NGO or IGO you’ve heard of", how:[
       "Pick one organisation, such as the Red Cross or Red Crescent, the WHO or a regional organisation near you.",
       "On its official website, find who its members or funders are and what it says it does.",
       "Decide whether it is an IGO or an NGO, and note one thing it can do that a single state can’t, and one thing it can’t do."
     ], write:"Organisation… IGO or NGO, and why… Something it can do… Something it can’t…"}
    ],
    proof:"Notes on one example of order without a government, a labelled list of the actors in a news story, and a short profile of one IGO or NGO."
   },
   read:[
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard)", note:"Read it after this lesson: it shows how the field widened beyond states, from IGOs to individuals."},
    {book:"eir", where:"Chapter 2 “Diplomacy” (Stephen McGlinchey)", note:"What diplomacy is, told through nuclear negotiations from the Cuban Missile Crisis to Iran."},
    {book:"ospol", where:"Chapter 14, sections 14.2 “Understanding the Different Types of Actors in the International System” and 14.3 “Sovereignty and Anarchy”", note:"A second, gentler explanation of actors and anarchy. Note its broader definition of anarchy, discussed in this lesson."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u5-l4", title:"Levels of analysis: three ways to explain one event", minutes:55,
   hook:{q:"In 1959 the political scientist Kenneth Waltz asked a simple question: where should we look for the causes of war? What was his answer?", options:["Only in human nature","Only in what kind of government a country has","Only in the international system","In all three, which he called three “images”, while stressing that the system makes war possible"], answer:3, reveal:"**All three.** In *Man, the State, and War* (1959) Waltz sorted explanations of war into three “images”: human nature and individuals, the internal make-up of states, and the international system. He argued the third matters most for understanding why war is always *possible*: with no authority above states, nothing stops it. This lesson turns his images into a tool you can use on any event."},
   goals:[
     "Explain what levels of analysis are and why IR uses them",
     "Describe the individual, state and system levels, and what evidence each looks at",
     "Summarise Waltz’s three images and Singer’s level-of-analysis problem",
     "Explain the outbreak of the First World War and the Cuban Missile Crisis at three levels",
     "Choose a level that fits a question, and spot explanations that mix levels carelessly"
   ],
   learn:[
    {h:"Zooming in and out", body:[
      {lead:"Imagine a satellite photo of a city, then a photo of one street, then a close-up of one face. All three are true pictures of the same place. Each shows things the others can’t."},
      "Explaining a world event works the same way. You can zoom in on the people who made the decisions, zoom out to the country they led, or zoom all the way out to the whole system of states. IR scholars call these [[levels-of-analysis|levels of analysis]]: the scale at which you look for the causes of what happens.",
      "Why bother? Because the same event can have causes at every scale, and people often argue past each other because they are looking at different levels without noticing. One person says a war happened because a leader was reckless; another says it happened because the country was a dictatorship; a third says rising powers always clash. They might all be partly right.",
      "Most introductory textbooks use three levels, as OpenStax does: the **individual**, the **state** and the **system**. Some add a fourth, such as the **group** level (organisations, parties, lobbies) used in the E-IR textbook. The number matters less than being clear which level you are using."
    ]},
    {h:"The three levels", body:[
      {fig:'<svg viewBox="0 0 340 470"><circle class="d-lup" cx="170" cy="168" r="160" stroke-width="2"/><circle class="d-sage" cx="170" cy="198" r="110" stroke-width="2"/><circle class="d-gold" cx="170" cy="226" r="60" stroke-width="2"/><text x="170" y="34" text-anchor="middle">System level</text><text class="s" x="170" y="52" text-anchor="middle">power between states, anarchy,</text><text class="s" x="170" y="68" text-anchor="middle">alliances, world economy</text><text x="170" y="112" text-anchor="middle">State level</text><text class="s" x="170" y="130" text-anchor="middle">government type, elections,</text><text class="s" x="170" y="146" text-anchor="middle">economy, identity, agencies</text><text x="170" y="216" text-anchor="middle">Individual</text><text class="s" x="170" y="234" text-anchor="middle">beliefs, character,</text><text class="s" x="170" y="250" text-anchor="middle">perceptions</text><rect class="d-panel" x="6" y="344" width="328" height="118" rx="12" stroke-width="1.5"/><text x="18" y="368">Ask at each level:</text><text class="s" x="18" y="392">Individual: what did the leaders believe and want?</text><text class="s" x="18" y="416">State: what pushed from inside the country?</text><text class="s" x="18" y="440">System: what did the distribution of power</text><text class="s" x="18" y="456">and the lack of a world authority push states to do?</text></svg>', alt:"Three nested circles. The outer circle is the system level: power between states, anarchy, alliances and the world economy. Inside it, the state level: government type, elections, economy, identity and agencies. At the centre, the individual: beliefs, character and perceptions. Below, a box gives the question to ask at each level: what did the leaders believe and want; what pushed from inside the country; and what did the distribution of power and the lack of a world authority push states to do.", cap:"The three levels of analysis, nested inside each other like rings. Each ring asks a different question about the same event."},
      {table:[["Level","Where it looks","A typical question"],["Individual","Leaders and decision-makers: their beliefs, personalities, health, mistakes and perceptions","Would this have happened with a different leader?"],["State","Inside the country: type of government, elections, public opinion, economy, national identity, the military and other agencies, interest groups","What pressures at home pushed the government this way?"],["System","Between states: how power is spread among them, anarchy, alliances, the world economy, international norms","What would almost any state have done in this position?"]]},
      "The **individual level** treats people as the key. Leaders misjudge rivals, take risks, hold grudges or fall under the influence of advisers. Psychology matters here: research on **misperception** shows that leaders often see others’ actions as more hostile and more planned than they are.",
      "The **state level** treats what happens inside countries as the key. Are democracies different from dictatorships in how they go to war? Does an election, an economic crisis or a powerful army lobby push a government towards a decision? Does a country’s sense of its own identity, as a great nation or a victim of empire, shape its foreign policy?",
      "The **system level** treats the setting as the key. If there is no authority above states, and power is spread unevenly, then states in similar positions may act similarly whoever leads them. The number of great powers (its [[polarity]], covered in Lesson 5) and the pattern of alliances can make some outcomes far more likely than others."
    ]},
    {h:"Waltz’s three images and Singer’s problem", body:[
      "Kenneth Waltz ({{kenneth-waltz}}, Unit 6) organised a whole book around this idea. In *Man, the State, and War* (1959) he surveyed centuries of thinking about war and sorted it into three **images**:",
      {ol:[
        "**First image: human nature and individuals.** War comes from selfishness, aggression or foolishness in people, especially leaders. (The title’s “man”, the language of the 1950s, means human beings.)",
        "**Second image: the internal structure of states.** War comes from bad kinds of states: some thinkers blamed monarchies, others capitalism, others dictatorships.",
        "**Third image: the international system.** War comes from anarchy itself. With no authority above states, each must judge its own interests and defend itself, and nothing guarantees peace."
      ]},
      "Waltz didn’t say the first two images were useless. He argued that they help explain *particular* wars, while the third explains why war is always *possible*: in an anarchy, wars can happen simply because nothing exists to prevent them. He later built his systemic theory of neorealism on this foundation (Unit 6).",
      "Two years later, in 1961, J. David Singer published “The Level-of-Analysis Problem in International Relations” in the journal *World Politics*. He compared two levels, the **international system** and the **national state**, and showed that each gives a different picture. The system level gives the big, comparable view, but tends to treat all states as alike. The state level gives rich detail, but tends to exaggerate how different each state is. His “problem” is that you can’t simply add the two pictures together: you need to choose a level for your question, and be clear when you move between them.",
      {tip:"Levels are not theories. They are places to look. Theories (Unit 6) make claims about which level matters most: neorealism stresses the system, for example, while some liberal and constructivist theories look closely at what happens inside states."}
    ]},
    {h:"Worked example: why did war break out in 1914?", body:[
      "On 28 June 1914, Gavrilo Princip, a young Bosnian Serb nationalist, shot dead Archduke Franz Ferdinand, heir to the throne of Austria-Hungary, in Sarajevo. Within about six weeks most of Europe’s great powers were at war. Why did one assassination lead to a world war? Each level gives part of the answer.",
      {table:[["Level","One explanation"],["Individual","Leaders misjudged each other and expected a short war. Germany’s Kaiser Wilhelm II and his government promised Austria-Hungary unconditional support (the so-called “blank cheque”), encouraging a hard line against Serbia."],["State","Austria-Hungary feared that Serb nationalism would break up its many-nation empire. Military leaders in several states had rigid plans: Germany’s plan for war against Russia began with a swift attack on France through Belgium, which brought Britain in."],["System","Europe was split into two alliance blocs, so a local crisis drew in all the great powers. Germany’s rising power worried Britain, France and Russia. In a multipolar balance of power, each state feared being left alone."]]},
      "Each row is plausible, and historians still debate how to weigh them. In the 1960s the German historian Fritz Fischer argued that Germany’s leaders bore most of the responsibility; Christopher Clark’s *The Sleepwalkers* (2012) spread responsibility much more widely among the powers. The levels don’t settle that argument. They organise it, so you can see what each side is claiming.",
      {key:"A good explanation of a big event usually combines levels, but says clearly what each level adds."}
    ]},
    {h:"Worked example: the Cuban Missile Crisis, 1962", body:[
      "In October 1962 an American spy plane photographed Soviet nuclear missile sites under construction in Cuba, about 150 kilometres from Florida. For thirteen days the world feared a nuclear war. On 22 October President John F. Kennedy announced a naval “quarantine” of Cuba; on 28 October the Soviet leader Nikita Khrushchev announced that the missiles would be removed. The United States promised not to invade Cuba and, secretly, agreed to remove its own Jupiter missiles from Turkey, which it did in April 1963.",
      {list:[
        "**Individual:** Kennedy chose a blockade rather than air strikes, despite advice from some military leaders; Khrushchev took the gamble of sending missiles and then chose to back down. Their personalities, fears and private letters mattered.",
        "**State:** Kennedy faced pressure at home to look tough after a failed US-backed invasion of Cuba in 1961 (the Bay of Pigs). The political scientist Graham Allison, in *Essence of Decision* (1971), showed how the routines and rivalries of government agencies (the [[bureaucracy]]) on both sides shaped what leaders could do.",
        "**System:** The Cold War was a two-superpower rivalry. US missiles near the Soviet Union, in Turkey, and Soviet missiles near the United States, in Cuba, were moves in a wider balance. Both sides’ fear of nuclear war, the logic of [[deterrence]], pushed them towards a deal."
      ]},
      "The OpenStax textbook opens its levels-of-analysis section with this same crisis, so you can compare its account with this one."
    ]},
    {h:"Using the levels well", body:[
      "A few habits make the levels useful rather than confusing:",
      {list:[
        "**Match the level to the question.** “Why did this leader decide on Tuesday?” points to the individual. “Why do rising powers and leading powers so often clash?” points to the system.",
        "**Name the level you are using.** If you move from leaders to alliances halfway through an argument, say so. Singer’s warning was about sliding between levels without noticing.",
        "**Beware one-cause stories.** “The war happened because of one bullet” or “because of human nature” usually hides other levels at work.",
        "**Remember who is missing.** Feminist and postcolonial scholars point out that a focus on leaders, states and great powers can leave out soldiers, civilians, women, colonised peoples and the everyday work that keeps states running ({{feminism-ir}}, {{postcolonialism-ir}}, Unit 6)."
      ]},
      {warn:"A level of analysis is not a verdict. Saying “the system made war likely” doesn’t excuse the leaders who chose it, and saying “a leader chose war” doesn’t mean the system played no part."},
      {table:[["Misconception","Closer to the truth"],["Only one level can be right.","Most big events have causes at several levels; the question is how much each matters."],["The system level ignores people.","It deliberately sets them aside to see patterns that hold whoever is in charge."],["Levels and theories are the same thing.","Levels are where you look; theories claim which level matters most and why."]]},
      {terms:["levels-of-analysis","foreign-policy"]}
    ]}
   ],
   try:[
    {id:"e2u5-l4-x1", type:"sort", q:"At which level of analysis is each explanation of a war pitched?", buckets:["Individual","State","System"], items:[
      {t:"The leader was overconfident after early victories and ignored warnings from advisers.", b:0, why:"It points to one person’s judgement and personality: the individual level."},
      {t:"An election was coming, and the governing party wanted to look tough.", b:1, why:"Domestic politics inside the country: the state level."},
      {t:"Two rival alliance blocs had formed, so a local quarrel pulled in every great power.", b:2, why:"The pattern of alliances between states is a feature of the system."},
      {t:"With no authority above states, each prepared for the worst and armed itself.", b:2, why:"Anarchy, the lack of a world authority, is the classic system-level cause (Waltz’s third image)."},
      {t:"The foreign minister wrongly believed the rival would back down.", b:0, why:"A misperception in one decision-maker’s mind: the individual level."},
      {t:"The army’s generals had a single rigid mobilisation plan and pressed the government to use it.", b:1, why:"An organisation inside the state shaping its choices: the state level (some textbooks would call it a group level)."},
      {t:"A rising power was quickly catching up with the leading power.", b:2, why:"A shift in the distribution of power among states: the system level."}
    ]},
    {id:"e2u5-l4-x2", type:"match", q:"Match each of Waltz’s three images to the cause of war it points to.", pairs:[
      ["First image","Human nature and the choices of individual leaders","Waltz’s first image looks at people: selfishness, aggression, foolishness."],
      ["Second image","The internal structure of states, such as their type of government","The second image blames certain kinds of states."],
      ["Third image","International anarchy: no authority above states","The third image looks at the system itself."]
    ]},
    {id:"e2u5-l4-x3", type:"mcq", q:"According to Waltz, what does the third image (the international system) explain best?", options:[
      {t:"Why war is always possible: with no authority above states, nothing prevents it.", ok:true, why:"Right. Waltz saw anarchy as the permissive cause of war, while the first two images help explain particular wars."},
      {t:"Exactly which leader started each war.", why:"That is a first-image question about individuals."},
      {t:"Why democracies never fight anyone.", why:"That is a second-image claim about kinds of states, and it isn’t what Waltz argued."},
      {t:"Why war will end once every state has the same government.", why:"Waltz was sceptical of such second-image hopes: even good states live in anarchy."}
    ]},
    {id:"e2u5-l4-x4", type:"mcq", q:"What was J. David Singer’s “level-of-analysis problem” (1961)?", options:[
      {t:"The system level and the state level give different pictures of world politics, so analysts must choose a level for their question and be careful when moving between them.", ok:true, why:"Right. Singer compared the two levels, showed what each reveals and hides, and warned against mixing them without noticing."},
      {t:"Only the individual level can explain anything in IR.", why:"Singer compared the system and the national state; he didn’t claim individuals explain everything."},
      {t:"There are exactly seven levels, and all must always be used together.", why:"Singer discussed two main levels and stressed choosing between them."},
      {t:"Levels of analysis are useless and should be abandoned.", why:"He wanted the levels used carefully, not dropped."}
    ]},
    {id:"e2u5-l4-x5", type:"mcq", q:"Which explanation of the Cuban Missile Crisis is pitched at the **system** level?", options:[
      {t:"In a two-superpower rivalry, each side’s missiles near the other’s territory were moves in a wider balance, and fear of nuclear war pushed both towards a deal.", ok:true, why:"Right. Bipolar rivalry and nuclear deterrence describe the relationship between states, the system level."},
      {t:"Kennedy chose a blockade because of his personal caution after the Bay of Pigs failure.", why:"A leader’s personal judgement points to the individual level."},
      {t:"US government agencies’ routines shaped which options reached the president.", why:"Agencies inside the government are a state-level (or group-level) explanation, as in Allison’s work."},
      {t:"Khrushchev gambled because he thought Kennedy was weak.", why:"One leader’s perception of another is an individual-level explanation."}
    ]},
    {id:"e2u5-l4-x6", type:"spot", q:"Dmitri wrote this for an essay. Tap each claim that is **wrong or oversimplified**.", ask:"wrong or oversimplified", parts:[
      {t:"Archduke Franz Ferdinand was assassinated in Sarajevo on 28 June 1914.", flag:false, why:"Correct: the date and place are right."},
      " ",
      {t:"That single shot is the whole explanation of the First World War.", flag:true, why:"Oversimplified. The assassination triggered the crisis, but alliances, military plans, nationalism and leaders’ choices explain why it became a world war."},
      " ",
      {t:"Waltz sorted explanations of war into three images: individuals, states and the international system.", flag:false, why:"Correct: that is the structure of *Man, the State, and War* (1959)."},
      " ",
      {t:"Historians all agree that one country alone caused the war.", flag:true, why:"Wrong. The debate continues: Fritz Fischer stressed Germany’s responsibility, while Christopher Clark spread it among several powers."},
      " ",
      {t:"Using several levels helps organise the debate about causes.", flag:false, why:"Correct: the levels show what each explanation is claiming."}
    ]},
    {id:"e2u5-l4-x7", type:"mcq", q:"Hana asks: “Why have wars between powerful states happened again and again over centuries, under very different leaders and governments?” Which level fits her question best?", options:[
      {t:"The system level, because the pattern repeats whoever leads and whatever kind of state they run.", ok:true, why:"Right. A pattern that survives changes of leaders and regimes points to something about the system itself."},
      {t:"The individual level, because each war had particular leaders.", why:"Leaders differ from war to war, so they can’t explain a pattern that repeats across all of them."},
      {t:"The state level, because each country had a different government.", why:"If many kinds of government all ended up at war, the type of government can’t be the main explanation of the pattern."},
      {t:"No level can help, because wars have no causes.", why:"IR assumes wars have causes that can be studied, even if they are complex."}
    ]}
   ],
   apply:{
    intro:"Practise switching levels on events you choose. Work from news reports or history pages you can read for free.",
    tasks:[
     {t:"Explain one news event at three levels", how:[
       "Choose a recent international decision: a summit, a sanction, a trade deal, a peace agreement.",
       "Write one sentence explaining it at the individual level, one at the state level and one at the system level.",
       "Decide which explanation you find most convincing, and say what evidence would test it."
     ], write:"The event… Individual… State… System… Most convincing, and how I’d test it…"},
     {t:"Find the level in an article", how:[
       "Read one analysis or opinion piece about international affairs.",
       "Underline or note the main explanation it gives.",
       "Name the level it works at, and one level it leaves out. What might that missing level add?"
     ], write:"The article… Main explanation… Its level… Missing level and what it might add…"},
     {t:"A historical event of your choice", how:[
       "Pick a historical event that matters where you live or to your family: an independence day, a treaty, a war, a migration.",
       "Write a short explanation at the level you think matters most.",
       "Then add one sentence at another level that complicates your first explanation."
     ], write:"The event… Main explanation and its level… A complicating sentence at another level…"}
    ],
    proof:"Three-level explanations of one current event and one historical event, plus notes naming the level an article uses and the one it leaves out."
   },
   read:[
    {book:"ospol", where:"Chapter 14, section 14.4 “Using Levels of Analysis to Understand Conflict”", note:"Read it after this lesson: it uses the individual, state and system levels, starting from the Cuban Missile Crisis."},
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard), the sections on levels of analysis", note:"Uses four levels (system, state, group, individual) and the 2008 financial crisis as its example, and discusses Waltz and Singer."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u5-l5", title:"From empires to today: how the modern international system took shape", minutes:60,
   hook:{q:"The United Nations started in 1945 with 51 member states. About how many members does it have today?", options:["About 75","About 120","193","About 250"], answer:2, reveal:"**193.** Membership almost quadrupled, and most of the growth came from decolonisation: dozens of former colonies in Asia, Africa, the Caribbean and the Pacific became independent states and joined. (South Sudan, in 2011, was the latest.) This lesson tells that story, from a world of empires to the Cold War and after, seen from many regions rather than only from Europe."},
   goals:[
     "Describe how empires and other forms of rule organised much of the world before the modern state system",
     "Explain how Europe’s state system spread through colonialism, and how independence movements reshaped it",
     "Outline the two world wars, the League of Nations and the founding of the UN",
     "Explain decolonisation, the Bandung Conference and non-alignment, and what “Global South” means",
     "Describe the Cold War and its end, and use polarity to describe the system then and now"
   ],
   learn:[
    {h:"A world of empires", body:[
      {lead:"For most of recorded history, the world wasn’t divided into equal, sovereign states. It was a patchwork of empires, kingdoms, city-states, nomadic confederations and peoples living outside any state."},
      "An [[empire]] is a large political unit in which one centre rules over many different peoples and territories, usually unequally. Empires were the most common big political form for thousands of years: think of Rome, the successive Chinese dynasties, the Mali Empire in West Africa, the Inca in the Andes, the Ottoman Empire (from around 1300 until 1922) or the Mughal Empire in South Asia (1526–1857).",
      "These worlds had their own international relations and rules. In East Asia, for centuries, neighbouring kingdoms sent missions and gifts to the Chinese court and received recognition and trading rights in return. Historians call this the **tributary system**, though they debate how much it was real hierarchy and how much ritual. Around the Indian Ocean, merchants linked East Africa’s Swahili coast, Arabia, India and Southeast Asia in trade networks that no single ruler controlled.",
      "What these systems shared was **hierarchy**: rulers and peoples were openly ranked, not treated as equals. The idea that every state, big or small, is legally equal and sovereign is comparatively new, and it spread unevenly."
    ]},
    {h:"Europe’s state system goes global", body:[
      "In Europe, sovereign territorial states took shape gradually between about the 15th and 18th centuries (Lesson 2 discussed the debate about 1648). After the Napoleonic Wars, Europe’s great powers met at the Congress of Vienna (1814–1815). For several decades afterwards Austria, Prussia, Russia and Britain, later joined by France, met in conferences to manage crises and keep a balance among themselves, a practice known as the **Concert of Europe**.",
      "At the same time, European states were building empires overseas. [[colonialism|Colonialism]] is the rule of one people’s territory by a foreign power, usually with settlement, economic exploitation and the claim that the colonised are inferior. It began with Spanish and Portuguese conquests in the Americas from the 1490s and grew with the Atlantic slave trade, which forcibly carried millions of enslaved Africans across the ocean.",
      "In 1884–1885, at the **Berlin Conference**, European powers, joined by the Ottoman Empire and the United States, agreed rules among themselves for claiming African territory. No African rulers were invited. Within a few decades almost the whole continent was under European control, with borders drawn in European capitals, often cutting across existing communities and kingdoms.",
      "Not everywhere was colonised, and resistance was constant. Ethiopia defeated an Italian invasion at the Battle of Adwa in 1896. Siam (today’s Thailand) stayed independent between British and French colonies. Japan, after the Meiji Restoration of 1868, modernised rapidly, became a great power and built its own empire in East Asia. And the first great wave of decolonisation came in the Americas: the United States declared independence in 1776; Haiti in 1804 became the first independent state founded after a successful revolt of enslaved people; and most of Spanish America and Brazil won independence in the 1810s and 1820s.",
      {key:"The modern state system didn’t simply spread because others copied Europe. It spread through conquest and colonial rule, and then through peoples using the idea of sovereignty to win their freedom."}
    ]},
    {h:"World wars and the first world organisations", body:[
      "The First World War (1914–1918) destroyed four empires: the German, Austro-Hungarian, Russian and Ottoman. In January 1918 the US president Woodrow Wilson set out his “Fourteen Points” for peace, including a new association of nations. In speeches that year he also argued that peoples should consent to how they are governed, an idea known as “self-determination”.",
      "Many people across the colonised world heard Wilson’s words as a promise. The historian Erez Manela calls 1919 “the Wilsonian moment”: nationalists in Egypt, India, China and Korea appealed to [[self-determination]] at the peace conference. They were largely ignored, since the victors applied the principle mainly to Europe, and protests erupted across Asia and North Africa in 1919. Japan’s proposal to write racial equality into the League’s founding document was also rejected.",
      "The **League of Nations** began work in 1920, the first organisation that aimed to keep peace worldwide. The United States never joined. The League settled some disputes but failed to stop aggression in the 1930s: Japan’s invasion of Manchuria (1931) and Italy’s invasion of Ethiopia (1935). The Second World War followed, in Europe from 1939 and in Asia from earlier, with fighting between Japan and China from 1937. It ended in 1945, after tens of millions of deaths, including the Holocaust and the atomic bombings of Hiroshima and Nagasaki.",
      "The **United Nations** was designed to do better. Its Charter was signed in San Francisco on 26 June 1945 and entered into force on 24 October 1945, with 51 original members. Unlike the League, it gave the most powerful states permanent seats and a veto in the Security Council ({{united-nations}}, Unit 7)."
    ]},
    {h:"Decolonisation", body:[
      "[[decolonization|Decolonisation]] is the process by which colonies became independent states, roughly from the 1940s to the 1970s, with later cases into the 1990s and beyond. The United Nations says that some 80 former colonies have gained independence since it was created.",
      {list:[
        "**Asia, late 1940s:** the Philippines (1946), India and Pakistan (1947, with a partition that uprooted millions of people and killed hundreds of thousands or more; estimates vary widely), Burma and Sri Lanka (1948), and Indonesia, which declared independence in 1945 and won Dutch recognition in 1949 after years of fighting.",
        "**Africa, 1950s–1970s:** Ghana (1957) was one of the first in sub-Saharan Africa. So many states became independent in 1960 that it is called “the Year of Africa”. Algeria won independence in 1962 after a long war against France; Angola and Mozambique in 1975 after wars against Portugal; Zimbabwe in 1980 and Namibia in 1990.",
        "**The Caribbean and the Pacific:** Jamaica and Trinidad and Tobago became independent in 1962, the same year Samoa became the first Pacific Islands country to win independence from colonial rule. Fiji (1970), Papua New Guinea (1975) and Vanuatu (1980) followed."
      ]},
      "In 1960 the UN General Assembly adopted the Declaration on the Granting of Independence to Colonial Countries and Peoples (resolution 1514), which said that all peoples have the right to self-determination. Today the UN still lists 17 Non-Self-Governing Territories, home to fewer than two million people.",
      {fig:'<svg viewBox="0 0 340 366"><text x="170" y="22" text-anchor="middle">UN member states</text><text x="8" y="57">1945</text><rect class="d-lup" x="56" y="40" width="61" height="24" rx="4" stroke-width="1.5"/><text x="123" y="57">51</text><text x="8" y="91">1955</text><rect class="d-lup" x="56" y="74" width="91" height="24" rx="4" stroke-width="1.5"/><text x="153" y="91">76</text><text x="8" y="125">1960</text><rect class="d-gold" x="56" y="108" width="119" height="24" rx="4" stroke-width="1.5"/><text x="181" y="125">99</text><text x="8" y="159">1970</text><rect class="d-lup" x="56" y="142" width="152" height="24" rx="4" stroke-width="1.5"/><text x="214" y="159">127</text><text x="8" y="193">1980</text><rect class="d-lup" x="56" y="176" width="185" height="24" rx="4" stroke-width="1.5"/><text x="247" y="193">154</text><text x="8" y="227">1990</text><rect class="d-lup" x="56" y="210" width="191" height="24" rx="4" stroke-width="1.5"/><text x="253" y="227">159</text><text x="8" y="261">2000</text><rect class="d-sage" x="56" y="244" width="227" height="24" rx="4" stroke-width="1.5"/><text x="289" y="261">189</text><text x="8" y="295">2011</text><rect class="d-lup" x="56" y="278" width="232" height="24" rx="4" stroke-width="1.5"/><text x="294" y="295">193</text><text class="s" x="8" y="328">Gold: 1960, 17 joined (16 African states)</text><text class="s" x="8" y="350">Green: the 1990s rise includes new states from</text><text class="s" x="8" y="364">the Soviet and Yugoslav break-ups (1991–1992)</text></svg>', alt:"Horizontal bar chart of UN member states: 51 in 1945, 76 in 1955, 99 in 1960, 127 in 1970, 154 in 1980, 159 in 1990, 189 in 2000 and 193 in 2011. Notes: in 1960, 17 states joined, 16 of them African; the jump between 1990 and 2000 includes new states after the Soviet Union and Yugoslavia broke up in 1991–1992.", cap:"UN membership by year, from the UN’s own figures. The steepest climbs came with decolonisation in the 1950s–70s and the break-up of the Soviet Union and Yugoslavia."},
      "Most new states kept the borders drawn under colonial rule. In 1964 the Organisation of African Unity agreed that African states would respect the borders they had at independence, because redrawing them could have set off endless wars. The new states joined the UN, used its General Assembly to push against colonialism and racism, and changed the organisation’s agenda."
    ]},
    {h:"Bandung, non-alignment and the Global South", body:[
      "In April 1955, leaders of 29 Asian and African governments met in Bandung, Indonesia, at a conference sponsored by Burma, India, Indonesia, Pakistan and Sri Lanka. The **Bandung Conference** called for economic and cultural cooperation, human rights and self-determination, an end to racial discrimination and peaceful coexistence. Many newly independent states wanted to avoid being forced to choose sides between the superpowers.",
      "That aim led to the **Non-Aligned Movement**, whose first summit met in Belgrade, Yugoslavia, in 1961. Its founding leaders included Josip Broz Tito of Yugoslavia, Jawaharlal Nehru of India, Gamal Abdel Nasser of Egypt, Sukarno of Indonesia and Kwame Nkrumah of Ghana. In 1964 developing countries also formed the Group of 77 (G77) at the UN to coordinate on economic issues.",
      "Today people often speak of the [[global-south|Global South]]: the countries of Africa, Latin America and the Caribbean, much of Asia and the Pacific, many of which share a history of colonialism and a position outside the richest economies. It is a political and economic idea, not a strict map: Australia and New Zealand lie in the south but aren’t usually counted, while some countries north of the equator are. Its members differ hugely from each other, so the label is a starting point, not a description of any one country."
    ]},
    {h:"The Cold War", body:[
      "After 1945 the wartime allies split. The [[cold-war|Cold War]] (roughly 1947–1991) was a rivalry between the United States and the Soviet Union and their allies, fought mainly through politics, economics, propaganda, spying and arms races rather than direct war between the two. The US-led alliance NATO was founded in 1949; the Soviet-led Warsaw Pact in 1955. Both sides built huge nuclear arsenals, and [[deterrence]] (the threat of unacceptable retaliation) became central to their strategy.",
      "It was called “cold” because the two superpowers never fought each other directly. But it was hot in many places: the Korean War (1950–1953), wars in Vietnam, Angola, Afghanistan and Central America, and many coups and civil wars in which the superpowers backed opposing sides. For millions of people in the Global South the Cold War meant real wars.",
      "With two superpowers far stronger than everyone else, the system was **bipolar**. It ended surprisingly peacefully. The Soviet leader Mikhail Gorbachev introduced reforms in the late 1980s; in 1989 communist governments across Eastern Europe fell, and on 9 November 1989 the Berlin Wall was opened. Germany reunified in 1990, and at the end of 1991 the Soviet Union dissolved into 15 independent states. UN membership jumped from 159 in 1990 to 179 by 1992.",
      {ex:"Bipolar: two poles, the United States and the Soviet Union, each leading a bloc. Most other states either joined a bloc, tried to stay non-aligned, or became places where the rivalry was fought by others.", label:"The Cold War in one sentence"}
    ]},
    {h:"After the Cold War: polarity and its debates", body:[
      "[[polarity|Polarity]] describes how power is spread among the strongest states, the “poles” of the system:",
      {list:[
        "[[multipolarity|Multipolarity]]: several great powers of roughly similar strength, as in Europe before 1914.",
        "[[bipolarity|Bipolarity]]: two dominant powers, as in the Cold War.",
        "[[unipolarity|Unipolarity]]: one power far ahead of all others, as many scholars described the United States in the 1990s. The commentator Charles Krauthammer called it “the unipolar moment” in an essay in *Foreign Affairs* (1990/91)."
      ]},
      {fig:'<svg viewBox="0 0 340 352"><rect class="d-panel" x="6" y="6" width="328" height="104" rx="12" stroke-width="1.5"/><text x="18" y="28">Multipolar</text><text class="s" x="322" y="28" text-anchor="end">several great powers</text><circle class="d-lup" cx="62" cy="72" r="22" stroke-width="2"/><circle class="d-sage" cx="126" cy="72" r="20" stroke-width="2"/><circle class="d-gold" cx="188" cy="72" r="23" stroke-width="2"/><circle class="d-rose" cx="250" cy="72" r="19" stroke-width="2"/><circle class="d-soft" cx="304" cy="76" r="10" stroke-width="1.5"/><rect class="d-panel" x="6" y="122" width="328" height="104" rx="12" stroke-width="1.5"/><text x="18" y="144">Bipolar</text><text class="s" x="322" y="144" text-anchor="end">two superpowers</text><circle class="d-lup" cx="90" cy="186" r="32" stroke-width="2"/><circle class="d-rose" cx="250" cy="186" r="32" stroke-width="2"/><circle class="d-soft" cx="170" cy="200" r="9" stroke-width="1.5"/><circle class="d-soft" cx="148" cy="176" r="7" stroke-width="1.5"/><circle class="d-soft" cx="194" cy="174" r="8" stroke-width="1.5"/><rect class="d-panel" x="6" y="238" width="328" height="106" rx="12" stroke-width="1.5"/><text x="18" y="260">Unipolar</text><text class="s" x="322" y="260" text-anchor="end">one power far ahead</text><circle class="d-gold" cx="110" cy="302" r="38" stroke-width="2"/><circle class="d-soft" cx="196" cy="310" r="12" stroke-width="1.5"/><circle class="d-soft" cx="236" cy="300" r="10" stroke-width="1.5"/><circle class="d-soft" cx="272" cy="314" r="11" stroke-width="1.5"/><circle class="d-soft" cx="306" cy="300" r="9" stroke-width="1.5"/></svg>', alt:"Three panels of circles, where circle size stands for power. Multipolar: four large circles of similar size and one small one. Bipolar: two large circles with a few small ones between them. Unipolar: one very large circle and several small ones.", cap:"Polarity: the number of “poles”, or leading powers. Circle size stands for power."},
      "Which word fits today is a live debate, and this course takes no side. Some scholars argue the United States is still the single leading power; some see a new bipolar rivalry between the United States and China; others describe a multipolar world with India, Russia, the European Union and others as poles. Amitav Acharya suggests a “multiplex” world, like a cinema showing many films at once, in which many kinds of actors and regions shape order.",
      "Other changes since 1991 cut across polarity: [[globalization|globalisation]]; the attacks of 11 September 2001 by al-Qaeda, a non-state group; the 2008 financial crisis, after which leaders of the Group of Twenty (G20) economies began meeting regularly; and shared problems such as climate change and pandemics. Units 6 to 8 give you the tools to analyse them.",
      {table:[["Misconception","Closer to the truth"],["The world has always been made of equal sovereign states.","Empires and other hierarchies were the norm for most of history; equal sovereignty spread mainly in the 20th century."],["Decolonisation happened all at once in 1945.","It came in waves, from the Americas around 1800 to Asia in the 1940s, Africa from the 1950s and the Pacific into the 1980s."],["The Cold War involved no fighting.","The superpowers didn’t fight each other directly, but many wars around the world were linked to their rivalry."],["Global South is a geographic term.","It is a political and economic grouping, not a line on the map."]]},
      {terms:["empire","colonialism","decolonization","self-determination","global-south","non-aligned-movement","cold-war","polarity","bipolarity","unipolarity","multipolarity"]}
    ]}
   ],
   try:[
    {id:"e2u5-l5-x1", type:"mcq", q:"What did the Berlin Conference of 1884–1885 do?", options:[
      {t:"Outside powers, almost all of them European, agreed rules among themselves for claiming African territory, with no African rulers present.", ok:true, why:"Right. It set terms for the “scramble for Africa” among outsiders, without the people whose land was being divided."},
      {t:"It ended colonial rule in Africa.", why:"The opposite: it helped speed up European colonisation of Africa. Most African independence came in the 1950s–1970s."},
      {t:"It founded the League of Nations.", why:"The League began in 1920, after the First World War."},
      {t:"African kingdoms agreed their borders with each other.", why:"African rulers weren’t invited; the borders were drawn by Europeans."}
    ]},
    {id:"e2u5-l5-x2", type:"sort", q:"Sort these events into the right period.", buckets:["Before 1914","1914–1945","1945–1991","After 1991"], items:[
      {t:"Haiti becomes independent after a revolt of enslaved people", b:0, why:"1804."},
      {t:"The League of Nations begins work", b:1, why:"1920, after the First World War."},
      {t:"Japan sets up Manchukuo in north-east China", b:1, why:"1932."},
      {t:"Leaders of 29 Asian and African governments meet at Bandung", b:2, why:"April 1955."},
      {t:"The Cuban Missile Crisis", b:2, why:"October 1962."},
      {t:"European powers meet in Berlin to set rules for claiming Africa", b:0, why:"1884–1885."},
      {t:"South Sudan becomes the 193rd member of the UN", b:3, why:"2011."}
    ]},
    {id:"e2u5-l5-x3", type:"number", q:"UN membership grew from 51 states in 1945 to 99 in 1960. By what **percentage** did it grow over those fifteen years? (Round to the nearest whole number.)", answer:94, tol:1, unit:"%", why:"Change = 99 − 51 = 48 new members. Percentage growth = change ÷ starting value × 100 = 48 ÷ 51 × 100 ≈ 94%. Membership nearly doubled in fifteen years, mostly because of decolonisation.", wrongs:[
      {v:48, tol:0.2, why:"48 is the number of new members, not the percentage. Divide it by the starting value, 51, and multiply by 100."},
      {v:48.5, tol:0.25, why:"That divides the change by the 1960 figure (99). Percentage growth always divides by the *starting* value, 51."},
      {v:194, tol:1, why:"That is 99 as a percentage of 51 (the new total is 194% of the old). The *growth* is that minus 100%: 94%."}
    ], hint2:"Find the change first (99 − 51), then divide by the 1945 figure."},
    {id:"e2u5-l5-x4", type:"match", q:"Match each term to the example that best fits it.", pairs:[
      ["Bipolarity","The United States and the Soviet Union leading rival blocs, 1947–1991","Two dominant powers: the Cold War system."],
      ["Unipolarity","The United States as the only superpower in the 1990s","One power far ahead of all others."],
      ["Multipolarity","Several European great powers of similar strength before 1914","Several roughly equal great powers."],
      ["Non-alignment","Newly independent states refusing to join either Cold War bloc","The aim of the Non-Aligned Movement, founded in 1961."],
      ["Decolonisation","Seventeen new states joining the UN in 1960","Colonies becoming independent states."]
    ]},
    {id:"e2u5-l5-x5", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"The Congress of Vienna reorganises Europe after Napoleon", why:"1814–1815."},
      {t:"The League of Nations begins work", why:"1920."},
      {t:"The UN Charter enters into force with 51 members", why:"24 October 1945."},
      {t:"The Bandung Conference meets in Indonesia", why:"April 1955."},
      {t:"The UN adopts its Declaration on decolonisation (resolution 1514)", why:"1960."},
      {t:"The Berlin Wall is opened", why:"9 November 1989."},
      {t:"The Soviet Union dissolves into 15 states", why:"End of 1991."}
    ]},
    {id:"e2u5-l5-x6", type:"spot", q:"Ana is checking a classmate’s paragraph. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"In 1960, seventeen new states joined the UN, sixteen of them African.", flag:false, why:"Correct, according to the UN’s membership records."},
      " ",
      {t:"Decolonisation happened all at once, in 1945.", flag:true, why:"Wrong. It came in waves: the Americas around 1800, Asia in the late 1940s, Africa from the 1950s, the Pacific into the 1980s."},
      " ",
      {t:"Most new states redrew their borders to match their nations.", flag:true, why:"Wrong. Most kept colonial-era borders; in 1964 the Organisation of African Unity agreed to respect the borders inherited at independence."},
      " ",
      {t:"The Bandung Conference of 1955 brought together 29 Asian and African governments.", flag:false, why:"Correct."},
      " ",
      {t:"Because the Cold War was “cold”, no wars were fought during it.", flag:true, why:"Wrong. The superpowers didn’t fight each other directly, but Korea, Vietnam, Angola, Afghanistan and other wars were tied to their rivalry."}
    ]},
    {id:"e2u5-l5-x7", type:"mcq", q:"A news article describes Australia as part of the Global South because it lies south of the equator. What is the problem?", options:[
      {t:"“Global South” is a political and economic grouping, mostly of countries with colonial histories outside the richest economies, not a geographic line; Australia usually isn’t counted.", ok:true, why:"Right. The term describes shared histories and positions in the world economy, not latitude."},
      {t:"There is no problem: every country south of the equator is in the Global South.", why:"Geography isn’t the test. Many Global South countries lie north of the equator, such as India and most of West Africa."},
      {t:"The term only covers Africa.", why:"It is usually used for much of Africa, Asia, Latin America, the Caribbean and the Pacific."},
      {t:"The term means the Cold War’s Soviet bloc.", why:"The Soviet bloc was sometimes called the “Second World”; Global South is a different idea."}
    ]}
   ],
   apply:{
    intro:"Connect the big story to places you know. Use free, official sources such as the UN’s website or a national archive.",
    tasks:[
     {t:"Find your country (or a country you know) in the UN’s membership list", how:[
       "Search for the UN page “Growth in United Nations membership” on un.org.",
       "Find the year a country you know joined the UN and the other states that joined the same year.",
       "Write what was happening in the world that year, and whether the country was newly independent."
     ], write:"The country… Year it joined… Others that joined that year… What was happening…"},
     {t:"Trace one border", how:[
       "Choose one international border you know or can see on a free online map.",
       "Find out when it was drawn and by whom (a treaty, a colonial agreement, a war, a referendum).",
       "Note whether it follows a natural feature, a straight line or a people’s homeland, and what that suggests about its origin."
     ], write:"The border… When and how it was drawn… What it follows… What that suggests…"},
     {t:"Polarity today: collect the arguments", how:[
       "Find two short articles or explainers that describe today’s world as unipolar, bipolar or multipolar.",
       "For each, write the claim and the evidence given.",
       "Without picking a winner, note what each author counts as power (military, economic, technology, alliances)."
     ], write:"Article 1: claim… evidence… what counts as power… Article 2: claim… evidence… what counts as power…"}
    ],
    proof:"Notes on when one country joined the UN, the history of one border, and two competing descriptions of today’s polarity with their evidence."
   },
   read:[
    {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar)", note:"Read it after this lesson: it tells the European story from the sovereign state to the world wars and the Cold War, and how decolonisation spread the European model of the state."}
   ]
  }
  ],
  checkpoint:["e2u5-q02","e2u5-q06","e2u5-q11","e2u5-q14","e2u5-q17","e2u5-q20","e2u5-q24","e2u5-q28","e2u5-q31","e2u5-q35","e2u5-q39","e2u5-q43"],
  codex:[
   {id:"international-relations-field", title:"International Relations (the field)", aka:["IR","international politics","world politics","global politics"], tags:["international relations","foundations"],
    summary:"The study of relations across borders, between states and many other actors: conflict and cooperation, power, wealth, rules and rights.",
    levels:{
     starter:[
      "**International Relations** (IR) is the study of how countries and other groups deal with each other across borders. It asks why wars start and end, why countries cooperate, who gains from trade, and how shared problems such as disease or climate change are handled.",
      "Textbooks often write the field with capital letters (International Relations) and the thing it studies in small letters (international relations). The relations themselves are all around you: the parts of your phone, the format of your passport, the price of fuel and much of the news depend on agreements, conflicts and power between states.",
      "IR isn’t only about governments. It also studies international organisations such as the UN, campaign groups, companies, armed groups, cities and individuals.",
      {key:"IR is the study of relations across borders: who does what to whom, why, and with what results."}
     ],
     builder:[
      "IR asks two kinds of question. **Explaining** questions ask what happened and why (why did these states sign a treaty?). **Normative** questions ask what should happen (should rich countries cancel poor countries’ debts?). Good work says which kind it is doing.",
      {table:[["Main area","Examples of questions"],["Security","Why do wars start? How do arms races end?"],["International political economy","Who gains from trade? Why do debt crises happen?"],["Global governance","How do the UN and regional bodies work?"],["Rights and justice","Who protects human rights, and how?"],["Global challenges","Climate, health, migration, technology"]]},
      "IR draws on history, law, economics, sociology, geography and philosophy. Inside political science it sits next to comparative politics, which compares what happens *inside* countries. The two overlap, because domestic politics shapes foreign policy and the outside world shapes domestic politics.",
      "The standard founding story dates the university field to 1919, when the University College of Wales, Aberystwyth, founded a Department of International Politics and the Woodrow Wilson Chair, funded by David Davies and his sisters Gwendoline and Margaret in memory of students killed in the First World War. Its first professor was Alfred Zimmern.",
      "IR uses many methods: historical case studies built from archives and memoirs, statistics on wars, trade or votes at the UN, interviews with officials, analysis of speeches and documents, and simple game models of bargaining. Its big theories (Unit 6) work like lenses: each brings some features of world politics into focus and blurs others."
     ],
     pro:[
      "Historians of the discipline treat the 1919 story as a useful date, not a full account. Benjamin de Carvalho, Halvard Leira and John M. Hobson (“The Big Bangs of IR”, *Millennium*, 2011) argue that 1919, like 1648, works as a founding myth that hides continuity with earlier thinking and with imperial concerns.",
      "Robert Vitalis (*White World Order, Black Power Politics*, 2015) shows that much early US scholarship on world politics centred on empire and “race development”: the *Journal of Race Development* (founded 1910) was renamed the *Journal of International Relations* in 1919 and merged into the new *Foreign Affairs* in 1922. Scholars at Howard University, among them Alain Locke, Rayford Logan, Ralph Bunche and Merze Tate, challenged that thinking and were long written out of disciplinary histories.",
      "Thinking about relations between political communities is far older and more global: the Amarna letters (14th century BCE), Thucydides (5th century BCE), the *Arthashastra* traditionally linked to Kautilya (date debated), Ibn Khaldun’s *Muqaddimah* (1377) and Chinese thought on order between rulers. Jeremy Bentham coined the word “international” in 1780 (published 1789).",
      "The **Global IR** agenda, associated with Amitav Acharya’s 2014 presidential address to the International Studies Association, asks the field to draw on histories and ideas from all regions ({{global-ir}}). Debates about the field’s “great debates” (idealism versus realism, then later ones) are themselves contested: some historians argue the first great debate was partly constructed after the fact.",
      "The E-IR textbook’s line is a good working motto: IR doesn’t describe events; it seeks to understand them."
     ]
    },
    related:["the-state","anarchy-ir","levels-of-analysis","modern-international-system","global-ir","ir-theory"],
    read:[{book:"eir", where:"“Getting Started”"}],
    sources:[{t:"Aberystwyth University: International Politics centenary timeline of events", url:"https://www.aber.ac.uk/en/interpol/about/centenary/interpollegacy/timelineofevents/"},{t:"E-International Relations: International Relations (ed. Stephen McGlinchey)", url:"https://www.e-ir.org/p/international-relations"},{t:"Carvalho, Leira and Hobson, “The Big Bangs of IR”, Millennium 39(3), 2011 (DOI)", url:"https://doi.org/10.1177/0305829811401459"}],
    checked:"2026-11"},

   {id:"the-state", title:"The state", aka:["country","state","Montevideo criteria","recognition"], tags:["international relations","states"],
    summary:"A political organisation with a permanent population, a defined territory, a government and the capacity to deal with other states; recognition by others is debated.",
    levels:{
     starter:[
      "In IR a **state** means a country: a political organisation with people, land, a government and independence. It isn’t the same as the government, which is the group of people running the state at a given moment. Governments change; the state continues, keeping its treaties and debts.",
      "The best-known legal checklist comes from the **Montevideo Convention** (1933). It says a state should have a permanent population, a defined territory, a government and the capacity to enter into relations with other states.",
      "Notice what isn’t required: a minimum size, wealth, democracy, a particular religion or UN membership.",
      "Recognition is when other states formally accept a state as a state. The Montevideo Convention says a state’s existence doesn’t depend on recognition, but in practice a state that nobody recognises finds it very hard to trade, travel or join organisations.",
      {key:"State = population + territory + government + independence. Recognition is debated, but it matters in practice."}
     ],
     builder:[
      {table:[["Montevideo criterion","What it means in practice"],["Permanent population","People living there long-term; no minimum size"],["Defined territory","Land the state controls; some borders may be disputed"],["Government","Effective authority that keeps order and runs services"],["Capacity to enter into relations","Independence: making its own treaties and deals"]]},
      "**Recognition** has two classic theories. The **declaratory** view (Montevideo, Article 3) says statehood is a fact; recognition only acknowledges it. The **constitutive** view says recognition creates statehood in the eyes of other states. Most lawyers lean declaratory; practice gives recognition great weight, because without it an entity usually can’t join the UN, borrow from international banks or have its passports accepted.",
      "UN membership is the clearest form of collective acceptance. Under Article 4 of the UN Charter, the General Assembly admits a state on the recommendation of the Security Council, where a permanent member’s veto can block it.",
      "Max Weber’s sociological definition ({{max-weber}}), from a 1919 lecture, adds another angle: a state is a community that successfully claims the monopoly of the legitimate use of physical force within a territory. When that claim weakens, IR scholars speak of fragile states.",
      "States differ enormously, from Pacific island states with fewer than 20,000 people to India and China with over a billion each, yet all are legally equal: each has one vote in the UN General Assembly. Size, wealth and military strength shape what a state can do, not whether it is a state."
     ],
     pro:[
      "The Montevideo Convention on the Rights and Duties of States was signed on 26 December 1933 at the Seventh International Conference of American States. Only states of the Americas are parties, but its Article 1 is widely quoted as reflecting customary international law. Other provisions matter too: Article 3 (existence independent of recognition), Article 6 (recognition is “unconditional and irrevocable”) and Article 8 (“No state has the right to intervene in the internal or external affairs of another”).",
      "Textbooks phrase the criteria differently. OpenStax’s *Introduction to Political Science* (section 14.2) lists land with boundaries, a government, a population that willingly gives its allegiance, and recognition as an equal among states. That list mixes legal and political ideas; it’s worth comparing with Montevideo.",
      "Practice has added conditions the convention doesn’t contain. When Yugoslavia and the Soviet Union broke up in 1991, the European Community issued guidelines making recognition depend on commitments to democracy, minority rights and existing borders. And the case of Manchukuo (1932) shows the reverse principle: collective non-recognition of an entity created by force, which later became a widely accepted rule.",
      "Recognition of **states** differs from recognition of **governments**. When a government takes power unconstitutionally, other states may keep recognising the state while hesitating over the new government, which affects who can sit in the UN, access the state’s money abroad or sign treaties in its name.",
      "A few entities are today recognised by some states and not others. Their status is politically contested; analysis should describe positions and dates neutrally."
     ]
    },
    related:["sovereignty","modern-international-system","international-relations-field","united-nations","international-law"],
    read:[{book:"ospol", where:"Chapter 14, section 14.2 “Understanding the Different Types of Actors in the International System”"}],
    sources:[{t:"Montevideo Convention on the Rights and Duties of States (1933), Avalon Project, Yale Law School", url:"https://avalon.law.yale.edu/20th_century/intam03.asp"},{t:"United Nations Charter, full text", url:"https://www.un.org/en/about-us/un-charter/full-text"}],
    checked:"2026-11"},

   {id:"sovereignty", title:"Sovereignty", aka:["Westphalian sovereignty","sovereign equality","non-interference","Peace of Westphalia"], tags:["international relations","states"],
    summary:"Final authority inside a territory and independence from any higher authority outside it; the central rule of the state system, and often bent.",
    levels:{
     starter:[
      "Think of your home: inside, you decide the rules; outside, no one is your boss, and you don’t walk into your neighbours’ homes. **Sovereignty** is that idea for states.",
      "**Internal sovereignty** is a state’s final authority over its own territory: its laws apply and its courts decide. **External sovereignty** is independence: no other state or body ranks above it, and all states are legally equal, whatever their size.",
      "The rule that states shouldn’t interfere in each other’s internal affairs is often called **Westphalian sovereignty**, after the Peace of Westphalia of 1648.",
      "The UN Charter is built on it: the UN “is based on the principle of the sovereign equality of all its Members” (Article 2(1)).",
      {key:"Sovereignty: the final say at home, and no boss abroad."}
     ],
     builder:[
      "The French jurist Jean Bodin gave an early systematic account of sovereignty in *Six Books of the Commonwealth* (1576). Later, sovereignty came to belong to states and, in democratic thought, to peoples.",
      "The UN Charter writes sovereignty into its principles: sovereign equality (Article 2(1)), no threat or use of force against other states’ territorial integrity or political independence (Article 2(4)) and no UN intervention in matters “essentially within the domestic jurisdiction” of a state, except Security Council enforcement measures (Article 2(7)).",
      "The standard story says the Peace of Westphalia (1648), signed in Münster and Osnabrück, ended the Thirty Years’ War and the Eighty Years’ War and created a system of sovereign, equal states. Many historians call this the **Westphalian myth**: the Holy Roman Empire continued until 1806; the treaties gave France and Sweden rights as guarantors inside the Empire; and the principle that rulers choose their territory’s religion dates from 1555. Sovereign statehood developed gradually.",
      "Stephen Krasner’s *Sovereignty: Organized Hypocrisy* (1999) shows that powerful states often intervene in weaker ones, and that states regularly trade away control through treaties and loans.",
      "States can also choose to share or pool sovereignty. Members of the European Union make joint decisions in many areas, and members of the World Trade Organization accept its dispute rulings. Lawyers often describe such choices as exercises of sovereignty rather than losses of it, because the state consented and can, in principle, leave."
     ],
     pro:[
      "Krasner distinguishes four meanings: **domestic sovereignty** (the organisation and effectiveness of authority inside a state), **interdependence sovereignty** (control over flows across borders, such as goods, money, people and pollution), **international legal sovereignty** (recognition as a juridically independent equal) and **Westphalian sovereignty** (the exclusion of external actors from domestic authority structures). A state can have one without the others: a weak state may be fully recognised yet unable to control its territory.",
      "Andreas Osiander’s “Sovereignty, International Relations, and the Westphalian Myth” (*International Organization*, 2001) is the classic critique of 1648 as the birth of sovereignty. Britannica’s account likewise presents the “foundation of the modern state system” as something some scholars credit the treaties with, rather than settled fact.",
      "Since the 1990s, sovereignty has been reinterpreted as carrying responsibilities. The 2005 World Summit endorsed the Responsibility to Protect: states must protect their populations from genocide, war crimes, ethnic cleansing and crimes against humanity, and the international community may act through the Security Council when a state manifestly fails ({{responsibility-to-protect}}).",
      "For most of the world, sovereignty arrived through decolonisation. Robert Jackson, in *Quasi-States* (1990), argued that many new states gained legal independence without strong internal control; critics, including postcolonial scholars, reply that the label overlooks how colonial rule and the world economy produced those weaknesses. Others note that many new states valued non-interference especially highly, as protection against former colonial powers, which is one reason the principle remains strongly defended in the Global South."
     ]
    },
    related:["the-state","anarchy-ir","modern-international-system","responsibility-to-protect","international-law"],
    read:[{book:"ospol", where:"Chapter 14, section 14.3 “Sovereignty and Anarchy”"},{book:"eir", where:"Chapter 1 “The Making of the Modern World”"}],
    sources:[{t:"United Nations Charter, full text", url:"https://www.un.org/en/about-us/un-charter/full-text"},{t:"Britannica: Peace of Westphalia", url:"https://www.britannica.com/event/Peace-of-Westphalia"},{t:"Osiander, “Sovereignty, International Relations, and the Westphalian Myth”, International Organization 55(2), 2001 (DOI)", url:"https://doi.org/10.1162/00208180151140577"}],
    checked:"2026-11"},

   {id:"anarchy-ir", title:"Anarchy in IR", aka:["international anarchy","anarchy","no world government"], tags:["international relations","concepts"],
    summary:"The absence of any central authority above states. It describes the structure of the system, not chaos.",
    levels:{
     starter:[
      "In everyday speech “anarchy” means chaos. In IR it has a narrower meaning: **there is no government above states**. No world government makes laws for all countries, no world police arrests a state that breaks a treaty, and no court can force every state to appear.",
      "Picture a street with no police or mayor. Most neighbours still keep their promises, make agreements and get along, because they’ll live side by side for years. But each family also has to look after its own safety, and the biggest households have the most say.",
      "Inside a country there is **hierarchy**: a government above everyone. Between countries there is anarchy. Yet planes land safely in foreign airports and letters cross borders every day, because states make rules together and mostly keep them.",
      {key:"Anarchy = no ruler above states. It doesn’t mean no rules or no order."}
     ],
     builder:[
      "Because no one stands above them, states must in the end rely on themselves for security, a condition realists call **self-help**. This can produce a **security dilemma**: one state’s defensive build-up looks threatening to its neighbour, which builds up too, leaving both less safe ({{realism}}).",
      "But anarchy coexists with a lot of order. Order comes from:",
      {list:["**diplomacy**, protected by the Vienna Convention on Diplomatic Relations (1961);","**treaties and international law**, which, in Louis Henkin’s words, almost all nations observe almost all of the time;","**organisations** such as the UN and regional bodies;","**reciprocity and reputation**, since cheaters lose partners;","**norms and habits**, such as the inviolability of embassies."]},
      "Different theories read anarchy differently. Realists stress danger and competition; liberals stress how institutions reduce uncertainty; constructivists, following Alexander Wendt’s 1992 article, argue that “anarchy is what states make of it”: the same structure can hold enemies, rivals or friends ({{constructivism}}). The English School speaks of an “anarchical society” with shared rules ({{english-school}}).",
      "The neighbourhood analogy has limits. There are only about two hundred states, not millions of people; they differ in size far more than households do; and they can rarely be wiped out entirely. Those differences are one reason scholars argue about how dangerous international anarchy really is."
     ],
     pro:[
      "The term comes from the Greek *anarchia*, “without a ruler”. Its use as the defining feature of the international system was sharpened by Kenneth Waltz: in *Theory of International Politics* (1979) he contrasted the **hierarchic** ordering of domestic politics with the **anarchic** ordering of international politics, and argued that anarchy pushes states to balance power and look to their relative position.",
      "Definitions in textbooks vary. OpenStax’s *Introduction to Political Science* (section 14.3) describes anarchy as a lack of “a general sense of order” as well as of overarching authority; most IR scholarship separates the two, treating anarchy as the absence of a central authority and leaving the amount of order as an open question.",
      "Critics question how “anarchic” the system really is. Some point to hierarchies within anarchy: empires and spheres of influence, alliance leaders, and the special powers of the Security Council’s permanent members. Others, from postcolonial perspectives, note that for much of history European states treated each other as equals under anarchy while ruling colonies through hierarchy, so the image of a world of equal sovereign units fits only part of the past.",
      "A useful habit: when someone argues “because of anarchy, X must happen”, ask which other factors (power, institutions, identities, domestic politics) the argument is quietly relying on."
     ]
    },
    related:["sovereignty","realism","constructivism","english-school","international-law","non-state-actors"],
    read:[{book:"ospol", where:"Chapter 14, section 14.3 “Sovereignty and Anarchy”"}],
    sources:[{t:"OpenStax, Introduction to Political Science, 14.3 Sovereignty and Anarchy", url:"https://openstax.org/books/introduction-political-science/pages/14-3-sovereignty-and-anarchy"},{t:"United Nations Charter, full text", url:"https://www.un.org/en/about-us/un-charter/full-text"}],
    checked:"2026-11"},

   {id:"non-state-actors", title:"Non-state actors", aka:["IGOs","NGOs","multinational corporations","armed groups","city diplomacy","transnational actors"], tags:["international relations","actors"],
    summary:"The actors besides states that shape world politics: intergovernmental organisations, NGOs, companies, armed groups, cities and individuals.",
    levels:{
     starter:[
      "States are the main players in IR, but they aren’t alone on the stage.",
      {list:[
        "**Intergovernmental organisations (IGOs)** are made of states: the UN, the African Union, ASEAN, the World Health Organization.",
        "**Non-governmental organisations (NGOs)** are private, not-for-profit groups: the Red Cross, Amnesty International, Médecins Sans Frontières.",
        "**Multinational corporations** are companies operating in several countries.",
        "**Non-state armed groups** fight outside state armies: rebels, militias, some criminal and terrorist groups.",
        "**Cities and individuals** act across borders too: mayors on climate, campaigners, leaders, ordinary people online."
      ]},
      "Strictly, IGOs are made of states rather than being “non-state”; textbooks group them with the others because they are actors besides individual states.",
      {key:"One world, many actors: states remain central, but many others shape the rules and the news."}
     ],
     builder:[
      {table:[["Actor","Members or owners","What it can do"],["IGO","States","Set standards, host talks, gather data, deploy missions"],["NGO","Private people and groups","Deliver aid, monitor rights, campaign for treaties"],["Multinational corporation","Shareholders","Invest, employ, lobby, move money and goods"],["Non-state armed group","Fighters","Control territory, fight, negotiate peace"],["Cities","Local governments","City diplomacy, climate networks such as C40"]]},
      "IGOs are older than many people think: the Central Commission for Navigation on the Rhine (1815), the International Telegraph Union (1865, today’s ITU) and the Universal Postal Union (1874).",
      "NGOs can change law. The International Campaign to Ban Landmines, launched by six NGOs in 1992, worked with supportive governments to produce the Mine Ban Treaty, signed in Ottawa in 1997 and in force from 1 March 1999; the campaign and Jody Williams won the 1997 Nobel Peace Prize.",
      "Companies have long shaped world politics; the English East India Company, chartered in 1600, came to rule much of South Asia with its own army.",
      "To analyse any actor, ask four questions: Who are its members or owners? What resources does it have (money, expertise, legitimacy, numbers, the capacity for violence)? To whom is it accountable? And in which arenas does it act: the UN, markets, the media, the battlefield?"
     ],
     pro:[
      "Scholars debate how much non-state actors matter relative to states. Realists argue they mostly operate within limits set by powerful states; liberal and constructivist scholars show NGOs and transnational networks changing norms, framing issues and supplying information that states rely on. Carmen Gebhard’s E-IR chapter describes a shift from an “inter-national” to a “trans-national” view of the world.",
      "IGOs have a double nature: they are instruments of their members, especially the powerful ones that fund them and shape their rules, and they are also bureaucracies with their own expertise and some autonomy.",
      "Non-state armed groups raise hard questions for international law. International humanitarian law binds parties to armed conflicts, including such groups, and the ICRC engages with them to reach civilians and detainees, which doesn’t imply approval or recognition. Peace processes often depend on them, as with the 2016 agreement between Colombia’s government and the FARC.",
      "Watch definitions: “NGO” sometimes covers business associations and religious bodies; some groups called NGOs are in fact created or funded by governments (sometimes nicknamed GONGOs). When assessing an organisation’s influence, ask who funds it, whom it represents and to whom it is accountable.",
      "Data on actors change quickly: the number of IGOs and NGOs, or companies’ size relative to states’ economies, depends heavily on definitions. Quote such figures only with a named source and year."
     ]
    },
    related:["anarchy-ir","the-state","international-relations-field","united-nations","regional-organizations"],
    read:[{book:"eir", where:"Chapter 3 “One World, Many Actors”"},{book:"eir", where:"Chapter 7 “Global Civil Society”"}],
    sources:[{t:"E-International Relations: “Introducing International Relations: One World, Many Actors” (Carmen Gebhard)", url:"https://www.e-ir.org/p/one-world-many-actors"},{t:"OpenStax, Introduction to Political Science, 14.2 Understanding the Different Types of Actors in the International System", url:"https://openstax.org/books/introduction-political-science/pages/14-2-understanding-the-different-types-of-actors-in-the-international-system"}],
    checked:"2026-11"},

   {id:"levels-of-analysis", title:"Levels of analysis", aka:["individual, state and system levels","Waltz’s three images","level-of-analysis problem"], tags:["international relations","method"],
    summary:"Explaining an event at different scales: the individual, the state and the international system (sometimes also the group).",
    levels:{
     starter:[
      "A satellite photo, a street photo and a close-up of a face can all show the same city. **Levels of analysis** do the same for world events: they let you explain one event at different scales.",
      {list:["**Individual:** the leaders and decision-makers: their beliefs, personalities and mistakes.","**State:** what happens inside the country: its type of government, elections, economy, identity and agencies.","**System:** the relations between states: how power is spread, alliances, the lack of a world government."]},
      "People often argue past each other because they are looking at different levels. One blames a reckless leader; another blames a dictatorship; a third says rising powers always clash. Each may be partly right.",
      {key:"Ask: which level is this explanation using, and what would another level add?"}
     ],
     builder:[
      "Kenneth Waltz, in *Man, the State, and War* (1959), sorted explanations of war into three **images**: human nature and individuals (first), the internal structure of states (second) and international anarchy (third). He argued the first two help explain particular wars, while the third explains why war is always possible ({{kenneth-waltz}}).",
      "J. David Singer’s article “The Level-of-Analysis Problem in International Relations” (*World Politics*, 1961) compared the **international system** and the **national state** as levels. The system view is comprehensive but tends to treat states as alike; the state view is detailed but tends to exaggerate their differences. Analysts should choose a level for the question and be explicit when they shift.",
      {table:[["Event","Individual","State","System"],["1914","Leaders’ misjudgements; Germany’s “blank cheque”","Austria-Hungary’s fear of nationalism; rigid war plans","Two alliance blocs; rising German power"],["Cuba 1962","Kennedy’s and Khrushchev’s choices","Domestic pressure; agencies’ routines","Bipolar rivalry; nuclear deterrence"]]},
      "A practical method: write the event at the top of a page, draw three columns, and put each proposed cause in the column for its level. Gaps show where you need more evidence; a crowded column may show that one level dominates, or that your sources only look at one level. Then ask how the levels interact: leaders act within the constraints of their states, and states within the system."
     ],
     pro:[
      "Textbooks vary in how many levels they use. OpenStax (section 14.4) uses three; Carmen Gebhard’s E-IR chapter uses four (system, state, group, individual), illustrated with the 2008 financial crisis. Foreign policy analysis adds bureaucratic and small-group levels; Graham Allison’s *Essence of Decision* (1971) read the Cuban Missile Crisis through rational-actor, organisational-process and governmental-politics models.",
      "Levels are not theories. Theories make claims about which level carries most causal weight: Waltz’s neorealism is systemic; democratic peace arguments work largely at the state level; studies of misperception (for example Robert Jervis’s *Perception and Misperception in International Politics*, 1976) work at the individual level.",
      "Critics argue that the levels picture, with its neat nested rings, can hide connections that cross scales. Feminist scholars such as Cynthia Enloe show how the personal and everyday sustain international politics; postcolonial scholars show how a focus on great-power systems leaves out colonised peoples. Gebhard also notes the contrast between seeing IR as an *arena* of levels and as a web of *processes*.",
      "Historians’ debates map onto the levels: Fritz Fischer stressed German leaders’ aims in 1914, while Christopher Clark’s *The Sleepwalkers* (2012) spread responsibility across the powers. The levels organise such debates rather than settle them.",
      "Finally, beware “level slippage” in your own writing: an argument that starts by explaining one leader’s decision and ends by claiming a law of the whole system has changed its question halfway through."
     ]
    },
    related:["kenneth-waltz","realism","neorealism","causes-of-war","international-relations-field","cold-war"],
    read:[{book:"ospol", where:"Chapter 14, section 14.4 “Using Levels of Analysis to Understand Conflict”"},{book:"eir", where:"Chapter 3 “One World, Many Actors”"}],
    sources:[{t:"Singer, “The Level-of-Analysis Problem in International Relations”, World Politics 14(1), 1961 (DOI)", url:"https://doi.org/10.2307/2009557"},{t:"OpenStax, Introduction to Political Science, 14.4 Using Levels of Analysis to Understand Conflict", url:"https://openstax.org/books/introduction-political-science/pages/14-4-using-levels-of-analysis-to-understand-conflict"},{t:"Office of the Historian (US Department of State): The Cuban Missile Crisis, October 1962", url:"https://history.state.gov/milestones/1961-1968/cuban-missile-crisis"}],
    checked:"2026-11"},

   {id:"modern-international-system", title:"The modern international system", aka:["state system","Westphalian system","Concert of Europe","polarity"], tags:["international relations","history"],
    summary:"How a world of empires became a world of nearly 200 sovereign states, and how power has been spread among them: multipolar, bipolar, unipolar.",
    levels:{
     starter:[
      "For most of history the world was a patchwork of empires, kingdoms, city-states and peoples outside any state. Empires such as the Ottoman, the Mughal, the successive Chinese dynasties, Mali and the Inca ruled many peoples unequally.",
      "Europe’s system of sovereign states grew gradually and then spread across the world, first through conquest and colonial rule and then through decolonisation, as colonised peoples used the idea of sovereignty to win independence.",
      "The UN started in 1945 with 51 members; it now has 193. The latest, South Sudan, joined in 2011.",
      "**Polarity** describes how many leading powers there are: several (**multipolar**, Europe before 1914), two (**bipolar**, the Cold War) or one (**unipolar**, as many described the 1990s).",
      {key:"From empires to nearly 200 states in a few centuries, with most of the growth after 1945."}
     ],
     builder:[
      {table:[["Period","Key features"],["Before 1800s","Empires and regional orders, such as the East Asian tributary system and Indian Ocean trade"],["1815–1914","Concert of Europe; European empires expand (Berlin Conference 1884–1885); independence in the Americas (Haiti 1804, Spanish America 1810s–20s)"],["1914–1945","Two world wars; four empires collapse; League of Nations (1920); UN Charter (1945)"],["1945–1991","Decolonisation; Bandung (1955); Cold War bipolarity"],["1991–","Unipolar moment; globalisation; debates about multipolarity"]]},
      "UN membership tells the story in numbers (UN figures): 51 in 1945, 76 in 1955, 99 in 1960, 127 in 1970, 154 in 1980, 159 in 1990, 179 in 1992, 189 in 2000 and 193 in 2011.",
      "The **Concert of Europe** (after the Congress of Vienna, 1814–1815) was an early experiment in great powers managing crises together. The League of Nations and then the UN tried to make such management global and lasting.",
      "Empires fell in clusters. The First World War ended the German, Austro-Hungarian, Russian and Ottoman empires (the Ottoman sultanate was abolished in 1922), and China’s Qing dynasty had fallen in 1912. After the Second World War, the British, French, Dutch, Belgian and Portuguese empires largely ended over the following three decades, mostly through decolonisation (a few small territories stayed under their rule longer)."
     ],
     pro:[
      "Accounts of the system’s expansion differ. The English School story (Hedley Bull and Adam Watson, *The Expansion of International Society*, 1984) describes European international society widening to include others. Critics argue this underplays coercion, colonial violence and the agency of non-Europeans, who reshaped the rules: Japan proposed racial equality at the 1919 peace conference; Bandung (1955) and the Non-Aligned Movement asserted new principles; newly independent states used the UN General Assembly against colonialism.",
      "Polarity is a central variable in neorealism. Waltz argued bipolar systems are more stable than multipolar ones because responsibility and threats are clearer. The long absence of direct war between the superpowers (1947–1991), often called the “Long Peace” after John Lewis Gaddis, is cited for this view; critics note the many “hot” proxy wars in the Global South and the role of nuclear weapons.",
      "Measuring polarity today is contested: it depends on what counts as power (military, economic, technological, alliances, soft power) and how gaps are judged. Positions range from continued US unipolarity to US–China bipolarity to multipolarity; Amitav Acharya’s “multiplex world” rejects the single-axis picture. Treat confident claims about today’s polarity as arguments to be weighed.",
      "After 1919 the League of Nations’ **mandate system** placed former German colonies and Ottoman territories under the rule of victorious powers, supervised by the League, and graded by how soon they were thought ready for self-government. Critics then and now saw it as colonialism under a new name; supporters saw the first international oversight of colonial rule."
     ]
    },
    related:["decolonization","cold-war","sovereignty","the-state","english-school","united-nations"],
    read:[{book:"eir", where:"Chapter 1 “The Making of the Modern World”"}],
    sources:[{t:"United Nations: Growth in United Nations membership", url:"https://www.un.org/en/about-us/growth-in-un-membership"},{t:"Britannica: Peace of Westphalia", url:"https://www.britannica.com/event/Peace-of-Westphalia"}],
    checked:"2026-11"},

   {id:"decolonization", title:"Decolonisation", aka:["decolonization","independence movements","Bandung Conference","Non-Aligned Movement"], tags:["international relations","history"],
    summary:"The process by which colonies became independent states, mostly from the 1940s to the 1970s, reshaping the UN and world politics.",
    levels:{
     starter:[
      "**Decolonisation** is how colonies became independent states. Colonialism meant rule by a foreign power, usually with economic exploitation and claims that the colonised were inferior.",
      "It came in waves. In the Americas, independence came from 1776 (the United States), 1804 (Haiti) and the 1810s–1820s (most of Spanish America and Brazil). In Asia, a wave came in the late 1940s; in Africa, mainly from the late 1950s, with 1960 called “the Year of Africa”; in the Caribbean and the Pacific, mostly from the 1960s to the 1980s.",
      "The UN says some 80 former colonies have gained independence since 1945. It still lists 17 Non-Self-Governing Territories.",
      {key:"Decolonisation turned a world of empires into a world of many sovereign states, mostly within one lifetime."}
     ],
     builder:[
      {table:[["Region","Examples"],["South and Southeast Asia","Philippines 1946; India and Pakistan 1947; Burma, Sri Lanka 1948; Indonesia 1945/1949"],["Africa","Ghana 1957; 16 African states joined the UN in 1960; Algeria 1962; Angola, Mozambique 1975; Zimbabwe 1980; Namibia 1990"],["Caribbean","Jamaica, Trinidad and Tobago 1962"],["Pacific","Samoa 1962; Fiji 1970; Papua New Guinea 1975; Vanuatu 1980"]]},
      "Paths differed: negotiation in some places, long wars of independence in others (Indonesia, Algeria, Angola, Mozambique), and violent partition in South Asia in 1947. Methods ranged from Gandhi’s non-violent resistance to armed liberation struggles, and many leaders knew each other through student networks, pan-African congresses and the UN itself.",
      "In 1960 the UN General Assembly adopted the Declaration on the Granting of Independence to Colonial Countries and Peoples (resolution 1514), affirming the right of all peoples to self-determination.",
      "At Bandung, Indonesia, in April 1955, 29 Asian and African governments called for cooperation, human rights and self-determination, an end to racial discrimination and peaceful coexistence. The Non-Aligned Movement followed in 1961 (first summit in Belgrade).",
      "The UN also supervised **trust territories**, mostly former League of Nations mandates, through its Trusteeship Council. The last of them, Palau, became independent in 1994, and the Council then suspended its operations."
     ],
     pro:[
      "Most new states kept colonial borders. The Organisation of African Unity’s 1964 Cairo resolution committed members to respect the borders existing at independence, a version of the legal principle *uti possidetis*. Supporters saw it as preventing endless wars; critics argue it locked in borders that divided peoples and grouped rivals.",
      "Historians debate why empires ended when they did: the strength of nationalist movements, the costs of war, the weakening of European powers after 1945, Cold War pressures and the changing norms expressed at the UN all played parts, in proportions that varied by case.",
      "Formal independence did not end all inequality. Dependency and world-systems scholars argue that economic patterns set under colonialism persisted ({{theories-global-inequality}}); postcolonial scholars study how colonial ideas lived on in knowledge and culture ({{postcolonialism-ir}}). Others stress the agency of new states, which used their numbers in the General Assembly to put racism, apartheid, development and trade on the agenda, for example through the Group of 77 (1964).",
      "Decolonisation is unfinished in the UN’s formal sense, with 17 territories on its list. Whether particular territories should become independent, integrate with another state or keep an association is decided case by case and is often politically contested.",
      "Language note: British and most Commonwealth spelling is “decolonisation”; US spelling is “decolonization”. Both mean the same thing, and UN documents use the “z” form."
     ]
    },
    related:["modern-international-system","cold-war","sovereignty","postcolonialism-ir","theories-global-inequality","global-ir"],
    read:[{book:"eir", where:"Chapter 1 “The Making of the Modern World”, section “The Europeans and the rest of the world”"}],
    sources:[{t:"United Nations: Decolonization (global issues)", url:"https://www.un.org/en/global-issues/decolonization"},{t:"Office of the Historian (US Department of State): Bandung Conference (Asian-African Conference), 1955", url:"https://history.state.gov/milestones/1953-1960/bandung-conf"},{t:"United Nations: Growth in United Nations membership", url:"https://www.un.org/en/about-us/growth-in-un-membership"}],
    checked:"2026-11"},

   {id:"cold-war", title:"The Cold War", aka:["Cold War","bipolarity","superpower rivalry","East–West conflict"], tags:["international relations","history"],
    summary:"The rivalry between the United States and the Soviet Union and their allies, roughly 1947–1991: a bipolar system with nuclear deterrence and many proxy wars.",
    levels:{
     starter:[
      "The **Cold War** was the rivalry between the United States and the Soviet Union, and their allies, from the late 1940s to 1991. It was a contest of political systems (liberal capitalism and communism), fought with alliances, money, propaganda, spies and huge nuclear arsenals.",
      "It was “cold” because the two superpowers never fought each other directly. But it was hot in many places: Korea, Vietnam, Angola, Afghanistan, Central America and elsewhere, where each side backed opposing forces.",
      "It ended peacefully and fast: communist governments in Eastern Europe fell in 1989, the Berlin Wall was opened on 9 November 1989, Germany reunified in 1990 and the Soviet Union dissolved into 15 states at the end of 1991.",
      {key:"Two superpowers, two blocs, nuclear fear, and many wars fought by others."}
     ],
     builder:[
      {table:[["Year","Event"],["1947","US aid to Western Europe and containment of Soviet influence take shape"],["1949","NATO founded"],["1950–1953","Korean War"],["1955","Warsaw Pact founded"],["1962","Cuban Missile Crisis"],["1979–1989","Soviet war in Afghanistan"],["1989","Berlin Wall opened; Eastern European revolutions"],["1991","Soviet Union dissolves"]]},
      "The Cuban Missile Crisis (October 1962) was the closest the superpowers came to nuclear war. A US spy plane photographed missile sites on 14 October; Kennedy announced a naval “quarantine” on 22 October; on 28 October Khrushchev announced the missiles would be removed. The US pledged not to invade Cuba and secretly agreed to remove its Jupiter missiles from Turkey (done in April 1963).",
      "The system was **bipolar**. Many states joined a bloc; others, through the Non-Aligned Movement (1961), tried to stay out.",
      "The rivalry also produced arms control: the Partial Test Ban Treaty (1963), the Nuclear Non-Proliferation Treaty (signed 1968, in force 1970), the first Strategic Arms Limitation agreements (1972) and the Intermediate-Range Nuclear Forces Treaty (1987). In the 1970s a period of relaxed tensions, **détente**, included the Helsinki Final Act (1975), whose human rights commitments were later used by dissidents in Eastern Europe."
     ],
     pro:[
      "Historians debate the Cold War’s origins: traditional accounts blamed Soviet expansion; revisionists stressed US economic and strategic ambitions; post-revisionists and later archive-based work emphasise mutual misperception and the security dilemma. Odd Arne Westad’s *The Global Cold War* (2005) shifted attention to the Third World, arguing the rivalry’s deadliest effects were felt there.",
      "Why it ended peacefully is also debated: Soviet economic stagnation, Gorbachev’s choices (individual level), Western pressure and arms racing, popular movements in Eastern Europe, and changing ideas among Soviet elites (a constructivist emphasis) are all cited.",
      "For IR theory the Cold War was both laboratory and puzzle. Neorealists such as Waltz saw bipolarity and nuclear deterrence as sources of stability; the system’s sudden peaceful end, which few predicted, encouraged constructivist and liberal arguments about ideas, institutions and domestic change.",
      "Graham Allison’s *Essence of Decision* (1971) made the Cuban Missile Crisis the classic case for comparing levels of analysis and decision models.",
      "Terms differ between sources. The Cold War’s start is dated anywhere from 1945 to 1947 (some historians trace tensions back to 1917), and its end to 1989 (the opening of the Berlin Wall), 1990 (German reunification) or December 1991 (the Soviet Union’s dissolution). The labels “First”, “Second” and “Third World” also come from this period; many writers now prefer “Global South” for the third."
     ]
    },
    related:["modern-international-system","decolonization","levels-of-analysis","nuclear-weapons","realism","constructivism"],
    read:[{book:"eir", where:"Chapter 2 “Diplomacy”"},{book:"ospol", where:"Chapter 14, section 14.4 “Using Levels of Analysis to Understand Conflict”"}],
    sources:[{t:"Britannica: Cold War", url:"https://www.britannica.com/event/Cold-War"},{t:"Office of the Historian (US Department of State): The Cuban Missile Crisis, October 1962", url:"https://history.state.gov/milestones/1961-1968/cuban-missile-crisis"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"international-relations", term:"International Relations (IR)", def:"The academic field that studies relations across borders between states and other actors: conflict and cooperation, power, wealth, rules and rights. In small letters, “international relations” means the relations themselves.", codex:"international-relations-field"},
   {id:"foreign-policy", term:"Foreign policy", def:"The goals a government pursues towards the outside world, and the actions it takes to reach them.", codex:"levels-of-analysis"},
   {id:"state", term:"State", def:"A political organisation with a permanent population, a defined territory, a government and the capacity to deal with other states; in IR, the same as a country.", codex:"the-state"},
   {id:"nation", term:"Nation", def:"A large group of people who see themselves as one community, usually sharing some mix of language, history, culture or homeland, and who often want to govern themselves.", codex:"the-state"},
   {id:"nation-state", term:"Nation-state", def:"The ideal of a state whose borders match one nation. Few states fit it exactly: most contain several peoples, and some nations live across several states.", codex:"the-state"},
   {id:"stateless-nation", term:"Stateless nation", def:"A nation that doesn’t have a state of its own, whose members live as citizens or residents of one or more other states.", codex:"the-state"},
   {id:"sovereignty", term:"Sovereignty", def:"Final authority over a territory (internal sovereignty) and independence from any higher authority outside it (external sovereignty).", codex:"sovereignty"},
   {id:"westphalian-sovereignty", term:"Westphalian sovereignty", def:"The principle that outside powers should not interfere in a state’s internal affairs. Named after the Peace of Westphalia (1648), though historians debate how much the treaties really created it.", codex:"sovereignty"},
   {id:"recognition-of-states", term:"Recognition (of states)", def:"One state’s formal acceptance of another as a state. The declaratory view says recognition only acknowledges statehood; the constitutive view says it creates it.", codex:"the-state"},
   {id:"montevideo-criteria", term:"Montevideo criteria", def:"The four qualifications for statehood in the 1933 Montevideo Convention: a permanent population, a defined territory, a government and the capacity to enter into relations with other states.", codex:"the-state"},
   {id:"anarchy", term:"Anarchy (in IR)", def:"The absence of any central authority, such as a world government, above states. It describes the structure of the system, not chaos.", codex:"anarchy-ir"},
   {id:"international-system", term:"International system", def:"The whole set of states and other actors, and the patterns of interaction between them, from trade and diplomacy to war.", codex:"modern-international-system"},
   {id:"great-power", term:"Great power", def:"A state with enough military, economic and political strength to shape events well beyond its own region. The strongest of all are sometimes called superpowers.", codex:"modern-international-system"},
   {id:"intergovernmental-organization", term:"Intergovernmental organisation (IGO)", def:"An organisation whose members are states, set up by agreement between them, such as the UN, the African Union or ASEAN.", codex:"non-state-actors"},
   {id:"ngo", term:"Non-governmental organisation (NGO)", def:"A private, not-for-profit group independent of governments that works on a cause, such as the Red Cross, Amnesty International or Médecins Sans Frontières.", codex:"non-state-actors"},
   {id:"multinational-corporation", term:"Multinational corporation (MNC)", def:"A company that owns or controls operations, such as factories, mines or offices, in more than one country.", codex:"non-state-actors"},
   {id:"non-state-armed-group", term:"Non-state armed group", def:"A group that uses or threatens armed violence but is not part of a state’s forces, such as a rebel movement or militia.", codex:"non-state-actors"},
   {id:"levels-of-analysis", term:"Levels of analysis", def:"The scale at which an event is explained: usually the individual (leaders), the state (what happens inside countries) and the system (relations between states).", codex:"levels-of-analysis"},
   {id:"diplomacy", term:"Diplomacy", def:"Managing relations between states by negotiation, through official representatives such as ambassadors.", codex:"anarchy-ir"},
   {id:"empire", term:"Empire", def:"A large political unit in which one centre rules over many different peoples and territories, usually unequally.", codex:"modern-international-system"},
   {id:"colonialism", term:"Colonialism", def:"Rule over a people’s territory by a foreign power, usually with economic exploitation and claims that the colonised are inferior; often with settlement.", codex:"decolonization"},
   {id:"decolonization", term:"Decolonisation", def:"The process by which colonies became independent states, especially from the 1940s to the 1970s.", codex:"decolonization"},
   {id:"self-determination", term:"Self-determination", def:"The principle that a people has the right to choose its own political status, named in the UN Charter and central to decolonisation.", codex:"decolonization"},
   {id:"nationalism", term:"Nationalism", def:"The belief that a nation should have its own state, or more broadly strong loyalty to one’s nation. It has powered both independence movements and wars.", codex:"the-state"},
   {id:"cold-war", term:"Cold War", def:"The rivalry between the United States and the Soviet Union and their allies, roughly 1947–1991, fought mainly without direct war between the two superpowers.", codex:"cold-war"},
   {id:"polarity", term:"Polarity", def:"How power is spread among the leading states (the “poles”) of the international system: one, two or several.", codex:"modern-international-system"},
   {id:"bipolarity", term:"Bipolarity", def:"A system with two dominant powers, as in the Cold War.", codex:"cold-war"},
   {id:"unipolarity", term:"Unipolarity", def:"A system with one power far ahead of all others, as many scholars described the United States in the 1990s.", codex:"modern-international-system"},
   {id:"multipolarity", term:"Multipolarity", def:"A system with several great powers of roughly similar strength, as in Europe before 1914.", codex:"modern-international-system"},
   {id:"non-aligned-movement", term:"Non-Aligned Movement", def:"A group of states, founded at a summit in Belgrade in 1961, that aimed to stay out of the Cold War blocs.", codex:"decolonization"},
   {id:"global-south", term:"Global South", def:"A political and economic term for countries of Africa, Latin America and the Caribbean, much of Asia and the Pacific, many with colonial histories and outside the richest economies. It is not a strict geographic line.", codex:"decolonization"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u5-q01", lesson:"e2u5-l1", level:1, q:"What is the difference between “international relations” and “International Relations” in textbooks?", options:[
     {t:"The small-letter version means the relations themselves; the capitalised version means the academic field that studies them.", ok:true, why:"That is the convention the E-IR textbook explains: IR, the field, studies international relations, the activity."},
     {t:"There is no difference; it’s a matter of style.", why:"Textbooks use the capitals deliberately to separate the field from what it studies."},
     {t:"The capitalised version means only relations between great powers.", why:"Capitals mark the academic field, not a subset of states."},
     {t:"The small-letter version means relations inside one country.", why:"Both versions are about relations across borders."}]},
   {id:"e2u5-q02", lesson:"e2u5-l1", level:2, q:"Fatima notices that nearly all passports have the same size and two lines of machine-readable letters. What best explains this?", options:[
     {t:"Governments agreed common passport standards through the International Civil Aviation Organization, a UN agency.", ok:true, why:"Right. States cooperated to set a shared format, an everyday example of international relations."},
     {t:"One company prints every passport in the world.", why:"Each country issues its own passports; the shared format comes from an agreement between states."},
     {t:"It is a coincidence of design.", why:"The match is deliberate: the format was agreed internationally so any border officer can read any passport."},
     {t:"A world government requires it.", why:"There is no world government. The standard comes from cooperation between states."}]},
   {id:"e2u5-q03", lesson:"e2u5-l1", level:1, q:"Where and when was the first university Department of International Politics founded, according to the standard story?", options:[
     {t:"Aberystwyth, Wales, in 1919", ok:true, why:"Correct. The University College of Wales founded it in 1919, with the Woodrow Wilson Chair funded by the Davies family."},
     {t:"Geneva, in 1945", why:"Geneva hosted the League of Nations from 1920, but the first department was in Wales, in 1919."},
     {t:"Paris, in 1648", why:"1648 is the date of the Peace of Westphalia, signed in Münster and Osnabrück, not the founding of a university department."},
     {t:"New York, in 1961", why:"Far too late, and the wrong place."}]},
   {id:"e2u5-q04", lesson:"e2u5-l1", level:1, q:"Who funded the Woodrow Wilson Chair of International Politics, and why?", options:[
     {t:"David Davies and his sisters Gwendoline and Margaret, in memory of the university’s students killed in the First World War", ok:true, why:"Correct. Their gift was made after the 1918 Armistice to study the problems raised by the League of Nations."},
     {t:"President Woodrow Wilson, to train American diplomats", why:"The chair was named after Wilson, who championed the League, but the Davies family funded it."},
     {t:"The United Nations, to train its staff", why:"The UN didn’t exist until 1945."},
     {t:"The British army, to study military tactics", why:"The aim was to study law, politics, ethics and economics to help prevent war, not tactics."}]},
   {id:"e2u5-q05", lesson:"e2u5-l1", level:2, q:"Which of these is the best evidence that thinking about relations between political communities is older than 1919?", options:[
     {t:"The Amarna letters, diplomatic correspondence between Egypt and other kingdoms in the 14th century BCE", ok:true, why:"Right. They show organised diplomacy, with alliances, gifts and status, thousands of years before 1919."},
     {t:"The founding of the United Nations in 1945", why:"That comes after 1919, so it can’t show earlier thinking."},
     {t:"The Cold War", why:"The Cold War began after 1945."},
     {t:"The invention of the internet", why:"That is much later and isn’t about thinking on world politics."}]},
   {id:"e2u5-q06", lesson:"e2u5-l1", level:3, q:"A student says: “The 1919 founding story is false, so it doesn’t matter.” Which response best reflects the scholarly critique?", options:[
     {t:"The story is accurate about the first university department, but it hides older and non-Western thought and the early field’s concern with empire and race.", ok:true, why:"Right. Critics such as Carvalho, Leira and Hobson, and Vitalis, call it a myth because of what it leaves out, not because nothing happened in 1919."},
     {t:"The student is right: nothing important happened in 1919.", why:"The department and chair were real, and the field did take shape as a university subject after 1919."},
     {t:"The critique says IR was actually founded in 1945.", why:"No. The critique is that origins are older and wider, not that a different date is correct."},
     {t:"The critique says only European thinkers matter.", why:"The opposite: the critique asks the field to include thinkers and histories from outside Europe and North America."}]},
   {id:"e2u5-q07", lesson:"e2u5-l1", level:2, q:"Which question is a normative (judging) question?", options:[
     {t:"Should wealthy states accept more refugees?", ok:true, why:"“Should” asks what ought to happen, which depends on values as well as evidence."},
     {t:"How many refugees did each state accept last year?", why:"That is a factual question with a checkable answer."},
     {t:"Why did refugee numbers rise after the war began?", why:"That asks for an explanation, which evidence can test."},
     {t:"Which states have signed the 1951 Refugee Convention?", why:"That is a factual question."}]},
   {id:"e2u5-q08", lesson:"e2u5-l1", level:3, q:"Oluwaseun reads that bread prices in his city rose after a drought in a major grain-exporting country. Which IR idea does this best illustrate?", options:[
     {t:"Events in one country can affect daily life far away through world markets, which is one reason IR studies the global economy.", ok:true, why:"Right. Interdependence through trade links distant events to local prices."},
     {t:"Prices are set by a world government.", why:"There is no world government; prices move through markets."},
     {t:"It has nothing to do with international relations, because it’s about bread.", why:"Trade between countries is a core IR topic."},
     {t:"It proves that every country produces all its own food.", why:"It shows the opposite: many countries depend on imports."}]},
   {id:"e2u5-q09", lesson:"e2u5-l1", level:1, q:"Who coined the word “international”?", options:[
     {t:"Jeremy Bentham, in a book written in 1780 and published in 1789", ok:true, why:"Correct. He needed a word for law between nations."},
     {t:"Woodrow Wilson, in 1919", why:"The word was already over a century old by then."},
     {t:"Thucydides, in ancient Greece", why:"Thucydides wrote in Greek about the war between Athens and Sparta; the English word came much later."},
     {t:"The UN, in 1945", why:"The word predates the UN by over 150 years."}]},
   /* ---- Lesson 2 ---- */
   {id:"e2u5-q10", lesson:"e2u5-l2", level:1, q:"Which list gives the four Montevideo criteria for statehood?", options:[
     {t:"Permanent population, defined territory, government, capacity to enter into relations with other states", ok:true, why:"Correct: Article 1 of the 1933 Montevideo Convention."},
     {t:"Population, territory, democracy, UN membership", why:"Democracy and UN membership aren’t criteria."},
     {t:"Army, currency, flag, national anthem", why:"These are common features of states, but they aren’t the legal criteria."},
     {t:"Recognition by most states, territory, wealth, a capital city", why:"Montevideo says existence is independent of recognition, and wealth isn’t a criterion."}]},
   {id:"e2u5-q11", lesson:"e2u5-l2", level:2, q:"After an election, a country gets a new president and cabinet. A treaty the country signed 30 years ago still binds it. Why?", options:[
     {t:"Treaties bind the state, which continues when governments change.", ok:true, why:"Right. The government is the group in charge now; the state, with its obligations, carries on."},
     {t:"The new government must sign every old treaty again.", why:"No. Treaty obligations stay with the state unless it withdraws according to the treaty’s rules."},
     {t:"Treaties bind only the people who signed them.", why:"Treaties are made by states, not by the individuals who sign them on the state’s behalf."},
     {t:"Because the UN re-signs all treaties after each election.", why:"There is no such procedure."}]},
   {id:"e2u5-q12", lesson:"e2u5-l2", level:2, q:"Which statement matches the **constitutive** view of recognition?", options:[
     {t:"An entity becomes a state, in the eyes of other states, when they recognise it.", ok:true, why:"Right. On this view, recognition creates (constitutes) statehood."},
     {t:"An entity is a state as soon as it meets the criteria, whatever others say.", why:"That is the declaratory view, which Montevideo’s Article 3 takes."},
     {t:"Recognition is impossible under international law.", why:"States recognise each other all the time."},
     {t:"Only the UN Secretary-General can recognise states.", why:"Recognition is done by individual states. The UN admits members, a separate step."}]},
   {id:"e2u5-q13", lesson:"e2u5-l2", level:1, q:"What does Article 2(1) of the UN Charter say the UN is based on?", options:[
     {t:"The principle of the sovereign equality of all its Members", ok:true, why:"Correct. It is the Charter’s first principle."},
     {t:"The leadership of the five permanent members", why:"They have special powers in the Security Council, but Article 2(1) states sovereign equality."},
     {t:"A world government over all states", why:"The UN isn’t a world government; it is built on sovereign states."},
     {t:"Democratic elections in every member state", why:"The Charter doesn’t require members to be democracies."}]},
   {id:"e2u5-q14", lesson:"e2u5-l2", level:3, q:"A textbook says: “The Peace of Westphalia in 1648 created the system of sovereign states we have today.” How would historians who speak of the “Westphalian myth” respond?", options:[
     {t:"The treaties didn’t set out modern sovereignty: the Holy Roman Empire continued until 1806, outside powers gained guarantor rights, and the state system developed gradually and spread through empire and decolonisation.", ok:true, why:"Right. This is the core of Osiander’s critique and of later historians’ work."},
     {t:"The treaties were never signed.", why:"They were signed in Münster and Osnabrück in 1648; the debate is about what they did."},
     {t:"Sovereign states were actually created by the UN in 1945.", why:"The critique doesn’t replace 1648 with 1945; it says the system grew over centuries."},
     {t:"The treaties abolished all empires.", why:"They didn’t; empires dominated much of the world for centuries afterwards."}]},
   {id:"e2u5-q15", lesson:"e2u5-l2", level:1, q:"What did Benedict Anderson mean by calling nations “imagined communities”?", options:[
     {t:"Members will never meet most of the others, yet feel bound together through shared stories, symbols and media.", ok:true, why:"Right. “Imagined” doesn’t mean fake: the bond is real in its effects."},
     {t:"Nations don’t exist and have no effects.", why:"Anderson’s point is the opposite: imagined bonds are powerful."},
     {t:"Nations are invented by novelists.", why:"He studied how print and media helped people imagine the nation, not fiction writers inventing them."},
     {t:"Only small villages count as communities.", why:"His point is precisely about large groups that can’t all meet."}]},
   {id:"e2u5-q16", lesson:"e2u5-l2", level:2, q:"Which example best shows one nation living across several states?", options:[
     {t:"Somali communities living in Somalia, Ethiopia, Kenya and Djibouti", ok:true, why:"Right. One people with a shared identity spread across several states."},
     {t:"A country with one dominant language and few minorities", why:"That is closer to the nation-state ideal."},
     {t:"A state whose constitution calls it plurinational", why:"That is several nations in one state, the reverse pattern."},
     {t:"A city with residents from many countries", why:"That is diversity inside one place, not a nation spread across states."}]},
   {id:"e2u5-q17", lesson:"e2u5-l2", level:3, q:"Stephen Krasner called sovereignty “organized hypocrisy”. Which situation best illustrates his point?", options:[
     {t:"A powerful state insists on non-interference for itself while funding opposition groups in a weaker neighbour.", ok:true, why:"Right. The rule is proclaimed by all and broken by some when it suits them."},
     {t:"Two equal states respect each other’s borders for centuries.", why:"That shows sovereignty working as intended, not hypocrisy."},
     {t:"A state holds an election.", why:"Elections are domestic politics and say nothing about breaking the sovereignty rule."},
     {t:"A small state joins the UN.", why:"Joining the UN is a voluntary act consistent with sovereignty."}]},
   {id:"e2u5-q18", lesson:"e2u5-l2", level:2, q:"Lucía reads that a movement wants its people to decide by vote whether to become independent. Which principle is the movement appealing to?", options:[
     {t:"Self-determination", ok:true, why:"Right. Self-determination is the principle that a people chooses its own political status."},
     {t:"Sovereign equality", why:"Sovereign equality concerns relations between existing states, not a people choosing its status."},
     {t:"Non-interference", why:"Non-interference protects existing states from outsiders; it isn’t a claim to independence."},
     {t:"Recognition", why:"Recognition is what other states may do afterwards; the movement’s claim rests on self-determination."}]},
   /* ---- Lesson 3 ---- */
   {id:"e2u5-q19", lesson:"e2u5-l3", level:1, q:"In IR, what does “anarchy” mean?", options:[
     {t:"There is no central authority, such as a world government, above states.", ok:true, why:"Correct. It describes the structure of the system."},
     {t:"Constant chaos and war", why:"That is the everyday meaning, not the IR one. There is much order inside anarchy."},
     {t:"Rule by anarchist parties", why:"The IR term has nothing to do with anarchist movements."},
     {t:"The collapse of a country’s government", why:"That is state failure, a different idea."}]},
   {id:"e2u5-q20", lesson:"e2u5-l3", level:2, q:"Pilots from dozens of countries use the same procedures to land at foreign airports, though no world police enforces them. What does this best show?", options:[
     {t:"Order can exist inside anarchy, because states agree rules and follow them for mutual benefit.", ok:true, why:"Right. Aviation rules, set through the 1944 Chicago Convention and ICAO, are kept because everyone gains."},
     {t:"The world has a government for aviation.", why:"ICAO is an IGO of states, not a government above them."},
     {t:"Anarchy means chaos in the skies.", why:"The example shows the opposite."},
     {t:"Only great powers fly planes.", why:"Airlines from many countries use the shared rules."}]},
   {id:"e2u5-q21", lesson:"e2u5-l3", level:1, q:"Which is an intergovernmental organisation (IGO)?", options:[
     {t:"The African Union", ok:true, why:"Correct. Its members are African states."},
     {t:"Amnesty International", why:"Amnesty is an NGO: private and independent of governments."},
     {t:"A car company with factories in five countries", why:"That is a multinational corporation."},
     {t:"A rebel movement", why:"That is a non-state armed group."}]},
   {id:"e2u5-q22", lesson:"e2u5-l3", level:2, q:"Médecins Sans Frontières delivers medical care in conflict zones, funded mostly by private donors. What kind of actor is it?", options:[
     {t:"An NGO", ok:true, why:"Right. It is private, not-for-profit and independent of governments."},
     {t:"An IGO", why:"IGOs have states as members; MSF doesn’t."},
     {t:"A multinational corporation", why:"MSF isn’t a for-profit company."},
     {t:"A government agency", why:"It is independent of governments."}]},
   {id:"e2u5-q23", lesson:"e2u5-l3", level:1, q:"What does the 1961 Vienna Convention on Diplomatic Relations do?", options:[
     {t:"Protects embassies and gives diplomats immunity, so states can keep talking even when relations are bad", ok:true, why:"Correct. It is one of the most widely respected treaties."},
     {t:"Creates a world government", why:"It sets rules for diplomacy between sovereign states; it creates no government."},
     {t:"Bans all spying", why:"It deals with diplomatic missions and immunity, not a spying ban."},
     {t:"Founded the United Nations", why:"The UN was founded by its Charter in 1945."}]},
   {id:"e2u5-q24", lesson:"e2u5-l3", level:3, q:"A commentator argues: “Because there is no world government, cooperation between states is impossible.” Which is the strongest counter-example?", options:[
     {t:"Almost every country belongs to the Universal Postal Union, and post has crossed borders under its shared rules since 1874.", ok:true, why:"Right. Long-lasting, near-universal cooperation inside anarchy refutes the claim."},
     {t:"Some wars have happened.", why:"Wars don’t refute the claim; they are consistent with it. A counter-example must show cooperation."},
     {t:"Some states are larger than others.", why:"Size differences don’t address whether cooperation happens."},
     {t:"The UN is a world government.", why:"That is false, so it can’t be a counter-example."}]},
   {id:"e2u5-q25", lesson:"e2u5-l3", level:2, q:"Which case best shows NGOs helping to create international law?", options:[
     {t:"The International Campaign to Ban Landmines, which worked with governments to produce the 1997 Mine Ban Treaty", ok:true, why:"Right. NGOs pushed for the treaty; states then negotiated, signed and ratified it."},
     {t:"The Congress of Vienna in 1815", why:"That was a meeting of great-power governments."},
     {t:"The founding of NATO in 1949", why:"NATO was created by states as a military alliance."},
     {t:"The Berlin Conference of 1884–1885", why:"That was a conference of governments, almost all European, setting rules for claiming Africa; no NGOs were involved."}]},
   {id:"e2u5-q26", lesson:"e2u5-l3", level:3, q:"Several big-city mayors from different continents agree to cut emissions from buses and buildings, through a network such as C40. How should an IR student classify this?", options:[
     {t:"City diplomacy: sub-state actors working across borders on issues they control", ok:true, why:"Right. Cities can’t sign treaties as states do, but they act internationally in their own areas of responsibility."},
     {t:"A treaty between states", why:"Mayors aren’t making a treaty on behalf of their states."},
     {t:"The work of an IGO of states", why:"The members are cities, not states."},
     {t:"It isn’t international at all, because cities are local.", why:"Local governments cooperating across borders is international activity."}]},
   {id:"e2u5-q27", lesson:"e2u5-l3", level:2, q:"What is a great power?", options:[
     {t:"A state strong enough militarily, economically and politically to shape events well beyond its own region", ok:true, why:"Correct. Great powers have reach as well as strength; the very strongest are sometimes called superpowers."},
     {t:"Any state that is a member of the UN", why:"Almost every state is a UN member; few are great powers."},
     {t:"A state with a large population", why:"Population alone doesn’t make a great power; reach and capability do."},
     {t:"A state with the oldest government", why:"Age of government has nothing to do with it."}]},
   /* ---- Lesson 4 ---- */
   {id:"e2u5-q28", lesson:"e2u5-l4", level:1, q:"What are the three most common levels of analysis in IR?", options:[
     {t:"Individual, state and system", ok:true, why:"Correct. Some textbooks add a group level."},
     {t:"Local, regional and national", why:"Those are levels of government inside a country."},
     {t:"Past, present and future", why:"Those are time periods, not levels of analysis."},
     {t:"Economic, military and cultural", why:"Those are kinds of power or issue areas."}]},
   {id:"e2u5-q29", lesson:"e2u5-l4", level:1, q:"In Waltz’s *Man, the State, and War* (1959), what is the “second image”?", options:[
     {t:"The internal structure of states, such as their type of government", ok:true, why:"Correct. The first image is individuals; the third is the international system."},
     {t:"Human nature", why:"That is the first image."},
     {t:"International anarchy", why:"That is the third image."},
     {t:"The weather and geography", why:"Waltz’s images don’t include these."}]},
   {id:"e2u5-q30", lesson:"e2u5-l4", level:2, q:"“The war happened because the general secretary believed, wrongly, that his rival would back down.” At which level is this explanation?", options:[
     {t:"Individual", ok:true, why:"Right. A misperception in one decision-maker’s mind is an individual-level cause."},
     {t:"State", why:"Nothing about the country’s institutions or domestic politics is mentioned."},
     {t:"System", why:"The explanation is about one leader’s belief, not the structure of the system."},
     {t:"None: beliefs don’t count as causes", why:"Leaders’ beliefs are a classic individual-level cause."}]},
   {id:"e2u5-q31", lesson:"e2u5-l4", level:3, q:"Kenji explains a trade war by pointing to an upcoming election in which the governing party wanted to look tough. Mei explains it by pointing to a rising economy catching up with the leading one. What is happening?", options:[
     {t:"They are working at different levels (state and system), and both explanations could be partly true.", ok:true, why:"Right. Seeing the levels shows the two aren’t necessarily rivals."},
     {t:"One of them must be wrong, because only one level can explain an event.", why:"Most big events have causes at several levels."},
     {t:"Both are using the individual level.", why:"Elections are state-level politics; shifting power between economies is system-level."},
     {t:"Neither is using a level of analysis.", why:"Both are, without naming them."}]},
   {id:"e2u5-q32", lesson:"e2u5-l4", level:1, q:"What did J. David Singer’s 1961 article argue?", options:[
     {t:"The system level and the state level give different pictures, so analysts must choose a level and be careful when switching.", ok:true, why:"Correct. That is the level-of-analysis problem."},
     {t:"Only individuals matter in IR.", why:"Singer compared the system and the national state."},
     {t:"Levels of analysis should be abandoned.", why:"He wanted them used carefully."},
     {t:"Wars are caused only by economics.", why:"His article is about method, not a single cause of war."}]},
   {id:"e2u5-q33", lesson:"e2u5-l4", level:2, q:"Which explanation of the First World War is pitched at the system level?", options:[
     {t:"Europe was divided into two alliance blocs, so a local crisis drew in all the great powers.", ok:true, why:"Right. The pattern of alliances among states is a system-level feature."},
     {t:"Austria-Hungary feared Serb nationalism would break up its empire.", why:"That concerns one state’s internal situation: the state level."},
     {t:"Germany’s Kaiser promised unconditional support to Austria-Hungary.", why:"One leader’s decision points to the individual level."},
     {t:"Military plans pushed governments to mobilise early.", why:"Military organisations inside states are a state-level (or group-level) cause."}]},
   {id:"e2u5-q34", lesson:"e2u5-l4", level:1, q:"In the Cuban Missile Crisis, what did the United States secretly agree to do?", options:[
     {t:"Remove its Jupiter missiles from Turkey", ok:true, why:"Correct. It was done in April 1963, while the public deal was a US pledge not to invade Cuba."},
     {t:"Invade Cuba", why:"The US pledged *not* to invade Cuba."},
     {t:"Leave NATO", why:"Nothing of the kind was agreed."},
     {t:"Give the Soviet Union a seat on the Security Council", why:"The Soviet Union already had a permanent seat from 1945."}]},
   {id:"e2u5-q35", lesson:"e2u5-l4", level:3, q:"Priya’s essay says: “The First World War happened because of human nature: people are aggressive.” What is the main weakness?", options:[
     {t:"Human nature is roughly constant, so it can’t on its own explain why war broke out in 1914 rather than at other times; state and system factors are needed too.", ok:true, why:"Right. Waltz made exactly this point about first-image explanations: a constant can’t explain variation."},
     {t:"Human nature is a system-level explanation.", why:"It is a first-image, individual-level explanation."},
     {t:"Historians agree completely on the causes, so no essay is needed.", why:"Historians still debate the causes of 1914."},
     {t:"Human nature has nothing to do with IR.", why:"It is one level IR considers; the problem is relying on it alone."}]},
   {id:"e2u5-q36", lesson:"e2u5-l4", level:2, q:"Which statement about levels and theories is accurate?", options:[
     {t:"Levels are places to look for causes; theories claim which level matters most and why.", ok:true, why:"Correct. Neorealism, for example, stresses the system level."},
     {t:"Levels and theories are the same thing.", why:"A level is a scale of analysis; a theory makes a causal argument."},
     {t:"Each theory must use all levels equally.", why:"Theories usually emphasise one level."},
     {t:"Only the individual level has theories.", why:"There are theories at every level."}]},
   /* ---- Lesson 5 ---- */
   {id:"e2u5-q37", lesson:"e2u5-l5", level:1, q:"How many members did the UN have when it began in 1945, and how many does it have now?", options:[
     {t:"51 then; 193 now", ok:true, why:"Correct, according to the UN’s own membership records. South Sudan joined in 2011."},
     {t:"193 then; 251 now", why:"193 is today’s figure; the UN began with 51."},
     {t:"25 then; 150 now", why:"Both figures are wrong."},
     {t:"51 then; 99 now", why:"The UN reached 99 members in 1960; it is 193 today."}]},
   {id:"e2u5-q38", lesson:"e2u5-l5", level:1, q:"What was the Concert of Europe?", options:[
     {t:"A practice, after the Congress of Vienna (1814–1815), of Europe’s great powers meeting to manage crises and keep a balance", ok:true, why:"Correct. Austria, Prussia, Russia and Britain, later joined by France, met in conferences for several decades."},
     {t:"A music festival celebrating the end of the Napoleonic Wars", why:"It was a diplomatic practice, not a musical event."},
     {t:"The European Union’s first name", why:"The EU and its predecessors came after 1950."},
     {t:"A treaty dividing Africa", why:"No. The closest match is the Berlin Conference of 1884–1885, which set rules for outside powers claiming African territory."}]},
   {id:"e2u5-q39", lesson:"e2u5-l5", level:2, q:"Why did UN membership jump between 1955 and 1970?", options:[
     {t:"Decolonisation: dozens of former colonies in Africa, Asia and the Caribbean became independent and joined.", ok:true, why:"Right. Membership rose from 76 to 127; 17 states joined in 1960 alone."},
     {t:"The Soviet Union broke up.", why:"That happened in 1991, raising membership in the early 1990s."},
     {t:"Many states merged into larger ones.", why:"Mergers would reduce the number of members."},
     {t:"The UN started admitting cities.", why:"Only states can be UN members."}]},
   {id:"e2u5-q40", lesson:"e2u5-l5", level:1, q:"What happened at the Bandung Conference in April 1955?", options:[
     {t:"Leaders of 29 Asian and African governments called for cooperation, self-determination, an end to racial discrimination and peaceful coexistence.", ok:true, why:"Correct. It laid foundations for the Non-Aligned Movement."},
     {t:"The superpowers divided Asia between them.", why:"Bandung was a meeting of Asian and African states, many aiming to avoid superpower blocs."},
     {t:"The UN Charter was signed.", why:"That was in San Francisco on 26 June 1945."},
     {t:"European powers agreed rules for colonising Africa.", why:"That was the Berlin Conference of 1884–1885."}]},
   {id:"e2u5-q41", lesson:"e2u5-l5", level:2, q:"Which description of the Cold War is most accurate?", options:[
     {t:"A US–Soviet rivalry in which the superpowers never fought each other directly, but many wars elsewhere were linked to it", ok:true, why:"Right. It was “cold” between the superpowers, hot in many other places."},
     {t:"A period with no wars anywhere in the world", why:"Korea, Vietnam, Angola, Afghanistan and others were fought during it."},
     {t:"A direct war between the United States and the Soviet Union", why:"They never fought each other directly."},
     {t:"A dispute about weather and climate", why:"“Cold” refers to the absence of direct war between the superpowers."}]},
   {id:"e2u5-q42", lesson:"e2u5-l5", level:2, q:"Several European powers of roughly similar strength competed before 1914. What is the term for this distribution of power?", options:[
     {t:"Multipolarity", ok:true, why:"Correct: several poles of similar strength."},
     {t:"Bipolarity", why:"Bipolarity has two dominant powers, as in the Cold War."},
     {t:"Unipolarity", why:"Unipolarity has one power far ahead of all others."},
     {t:"Non-alignment", why:"Non-alignment was a policy of staying out of blocs, not a distribution of power."}]},
   {id:"e2u5-q43", lesson:"e2u5-l5", level:3, q:"Tomás says: “The modern state system spread because the rest of the world freely copied Europe.” What is missing from this account?", options:[
     {t:"Conquest and colonial rule spread it first, and colonised peoples then used the idea of sovereignty to win independence.", ok:true, why:"Right. The spread was shaped by coercion and by resistance, not by free copying alone."},
     {t:"Nothing: that is exactly what happened.", why:"It leaves out colonialism, which drew most of the world into the European system by force."},
     {t:"The state system was invented in Asia and copied by Europe.", why:"That reverses the story without evidence; Asia had its own systems, such as the tributary system, but the sovereign-state model spread from Europe."},
     {t:"Every country was already a sovereign state in 1648.", why:"Most of the world was ruled by empires long after 1648."}]},
   {id:"e2u5-q44", lesson:"e2u5-l5", level:2, q:"What does “Global South” refer to?", options:[
     {t:"A political and economic grouping of countries, many with colonial histories and outside the richest economies, not a strict geographic line", ok:true, why:"Correct. Some southern-hemisphere countries aren’t usually included, and many northern-hemisphere ones are."},
     {t:"Every country south of the equator", why:"India and most of West Africa lie north of the equator and are usually counted; Australia lies south and usually isn’t."},
     {t:"The former Soviet bloc", why:"That bloc was sometimes called the Second World; it is a different idea."},
     {t:"Only the countries of South America", why:"The term covers much of Africa, Asia, Latin America, the Caribbean and the Pacific."}]},
   {id:"e2u5-q45", lesson:"e2u5-l5", level:3, q:"Two articles disagree: one calls today’s world unipolar, the other multipolar. What is the most useful first question for an IR student?", options:[
     {t:"What does each author count as power, and what evidence do they give?", ok:true, why:"Right. Polarity judgements depend on how power is measured (military, economic, technological, alliances)."},
     {t:"Which author is from a more powerful country?", why:"An author’s nationality doesn’t settle an argument; their evidence and definitions do."},
     {t:"Which article is longer?", why:"Length says nothing about accuracy."},
     {t:"Which answer the student would prefer to be true?", why:"Preference isn’t evidence. Weigh the definitions and data."}]}
  ]
});
