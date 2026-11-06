/* Social Science Primers · Migration Studies Unit 1 (e2u9) · Who moves, and how we count them */
ICA.addUnit({
  id:"e2u9", track:"e2", n:9, title:"Who moves, and how we count them", icon:"🧳",
  blurb:"What migration studies looks at, who counts as a migrant (and why the definitions differ), the many kinds of movement, the precise words for refugees, asylum seekers, internally displaced and stateless people, how migration is counted and where the numbers fall short, and a short history of human movement told from every region.",
  goals:[
    "Explain what migration studies is, name the disciplines it draws on, and tell UN DESA’s statistical definition of an international migrant from IOM’s broad working definition and from everyday use",
    "Classify movements as internal or international, by main purpose (work, family, study, safety) and by time pattern (temporary, circular, return, permanent), and use “irregular” rather than “illegal”",
    "Define refugee, asylum seeker, internally displaced person and stateless person precisely, and describe the latest UNHCR figures with their source and date",
    "Tell migrant stocks from flows, calculate net migration, name the main data sources and their gaps, and read a migration statistic critically",
    "Describe major migrations in history across all regions, from early human dispersal and the transatlantic slave trade to Gulf labour migration and today’s mostly regional movement"
  ],
  read:[
    {book:"imis", where:"Chapter 1 “An Introduction to Migration Studies: The Rise and Coming of Age of a Research Field” (Scholten, Pisarevskaya & Levy), Chapter 2 “Migration Histories” (Schrover), Chapter 6 “Migration Forms: What Forms of Migration Can Be Distinguished?” (Talleraas), Chapter 9 “Humanitarian Migration” (Talleraas, Brekke & Buhr) and Chapter 27 “Migration Statistics” (Kraler & Reichel)", note:"Academic chapters written for university students. Read each one after the matching lesson: the lessons build the background the chapters assume."},
    {book:"wmr", where:"Chapter 1 “Report overview: migration during a time of increasing disruption and distortion” and Part I “Key data and information on migration and migrants”", note:"The latest global and regional figures, explained by IOM’s research team. Good for checking any number you meet in the news."},
    {book:"soc", where:"Chapter 20, Section 20.1 “Demography and Population”", note:"A short sociology view of migration as one of the three forces (with births and deaths) that change a population."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u9-l1", title:"What migration studies is, and who counts as a migrant", minutes:50,
   hook:{q:"According to the United Nations’ latest estimate (mid-2024), roughly what share of the world’s people were international migrants, living in a country other than the one where they were born?", options:["About 1 in 100 (1%)","About 1 in 27 (3.7%)","About 1 in 10 (10%)","About 1 in 4 (25%)"], answer:1, reveal:"**About 1 in 27, or 3.7 per cent.** UN DESA estimated 304 million international migrants in mid-2024. That is more people than ever before, yet still a small share of humanity: most people live in the country where they were born. Many more people move *within* their own country. This lesson explains who counts as a migrant, and why different organisations answer that question differently."},
   goals:[
     "Describe migration studies as an interdisciplinary field and name the questions different disciplines ask",
     "Explain UN DESA’s statistical definition of an international migrant, including long-term and short-term migrants",
     "Explain IOM’s broad working definition of “migrant”, how it differs from the UN statistical one and from everyday use",
     "Tell internal from international migration, and use emigration, immigration, country of origin, transit and destination correctly"
   ],
   learn:[
    {h:"One street, many journeys", body:[
      {lead:"Walk down almost any street in the world and you will pass people who have moved."},
      "Picture one apartment building. Lucía grew up in a farming village and moved to the capital city of her own country for a job in a hospital. Kenji’s grandmother crossed an ocean fifty years ago and never went back. Amara is spending two years abroad for a master’s degree. Sione works on farms in another country for a few months each year, then goes home. Fatima’s family fled fighting and now waits for a decision on their request for protection.",
      "Are they all migrants? Most people would say some of them are and some aren’t, and they wouldn’t agree on which. Lucía never crossed a border. Amara plans to go home. Sione keeps coming and going. Fatima’s family didn’t choose to leave. Kenji’s grandmother has been a citizen of her new country for decades.",
      "These are exactly the questions migration studies asks. Before we can explain why people move, or what happens when they arrive, we need to be clear about **who** we are talking about. And as you’ll see, the answer depends on who is asking and why.",
      {key:"“Migrant” is not one fixed thing. It is a word that different people define in different ways, for different purposes."}
    ]},
    {h:"A field built from many subjects", body:[
      "[[migration-studies|Migration studies]] is the study of [[migration|human movement from place to place]], and of what that movement means for the people who move, the people they leave and the people they join. It is **interdisciplinary**: no single subject owns it. Researchers from many fields bring their own questions and methods.",
      {table:[["Discipline","A typical question"],["Sociology","How do migrants and their children find a place in a new society?"],["Geography","Where do people move, along which routes, and why there?"],["Economics","How does moving change people’s earnings, and what do sending and receiving places gain or lose?"],["Law","Who has the right to enter, stay or be protected, and what do treaties require of states?"],["Politics and IR","How do governments decide migration policy, and how do states cooperate or clash over it?"],["Anthropology","How do people keep family life, faith and culture going across borders?"],["History","How did past migrations shape today’s populations and cities?"],["Demography","How does migration change a population’s size and age structure?"]]},
      "The field has old roots. In 1885 and 1889 the geographer Ernst Georg Ravenstein used census records of where people were born, first for Britain and then for many other countries, to propose “laws of migration” (you’ll meet them in {{push-pull-theories|Unit 10}}). Between 1918 and 1920 the sociologists William I. Thomas and Florian Znaniecki published *The Polish Peasant in Europe and America*, a famous study built partly from letters migrants wrote home.",
      "Migration studies grew fast from the 1990s. Stephen Castles and Mark Miller’s textbook *The Age of Migration* (first edition 1993) argued that migration had become central to how societies change. Large research networks formed, such as IMISCOE in Europe, which began in 2004 and later produced this unit’s companion book. Migration research centres now exist on every continent.",
      {tip:"When you read migration research, ask which discipline it comes from. An economist and an anthropologist can study the same village and ask completely different, equally useful questions."}
    ]},
    {h:"Who counts as a migrant? The statistical answer", body:[
      "Statisticians need a definition they can count. The [[united-nations|United Nations]] Department of Economic and Social Affairs (UN DESA) set one out in its 1998 *Recommendations on Statistics of International Migration*: an [[international-migrant|international migrant]] is “any person who changes his or her country of usual residence”.",
      "**Usual residence** means the place where you normally live and sleep, not where you happen to be today. So a tourist, a business traveller or someone visiting family abroad is not an international migrant, however far they travel.",
      "The recommendations then split migrants by how long they stay:",
      {list:[
        "A **[[long-term-migrant|long-term migrant]]** moves to another country for at least a year, so that the new country becomes their country of usual residence.",
        "A **[[short-term-migrant|short-term migrant]]** moves for at least three months but less than a year. Trips for holidays, visits to friends and relatives, business, medical treatment or religious pilgrimage don’t count."
      ]},
      "In practice, UN DESA’s global estimates count people living in a country other than their **country of birth**. Where a country doesn’t record birthplace, they use **country of citizenship** instead, so foreign citizens are counted. This means a person who became a citizen of their new country decades ago, like Kenji’s grandmother, still counts as an international migrant in most of the statistics.",
      {ex:"Amara’s two-year master’s abroad makes her a long-term international migrant in the statistics, even though she plans to go home. Sione’s four-month farm season makes him a short-term migrant. Lucía is not counted at all in international migration figures, because she never left her country.", label:"Worked example: applying the statistical definition"}
    ]},
    {h:"IOM’s broad definition, and everyday use", body:[
      "The International Organization for Migration (IOM), the UN’s migration agency, uses a much wider working definition. In its *Glossary on Migration* (2019) it calls “migrant” “an umbrella term, not defined under international law, reflecting the common lay understanding of a person who moves away from his or her place of usual residence, whether within a country or across an international border, temporarily or permanently, and for a variety of reasons.”",
      "Notice three things in that sentence. It says outright that international law has **no** agreed legal definition of “migrant”. It includes people who move **within** their own country, like Lucía. And it covers people who move for **any** reason, including people forced to flee.",
      "Everyday use is different again. In news stories and conversation, “migrant” often suggests someone poorer, foreign-looking or recently arrived. A wealthy professional from a rich country who moves abroad is often called an “expat” instead, even though they have done exactly the same thing (Lesson 2 looks at these words).",
      {table:[["Who is asking","Definition","Includes moves within a country?"],["UN DESA (statistics)","Changed country of usual residence; long-term = 1 year or more","No"],["IOM (working definition)","Anyone who moves from their usual residence, within or across borders, for any reason","Yes"],["Everyday speech","Varies; often loaded with ideas about wealth, origin or race","Usually not"]]},
      {warn:"Don’t assume two sources mean the same thing by “migrant”. A figure of 304 million international migrants (UN DESA) and a claim about “migrants” in a speech may be counting quite different people. Always check which definition is in use."},
      "One more distinction matters a great deal. UNHCR, the UN Refugee Agency, stresses that **refugees** have a specific legal status and protection under international law. IOM’s umbrella term includes refugees; UNHCR prefers to speak of “refugees and migrants” as two groups. Lesson 3 explains why that difference has real consequences."
    ]},
    {h:"Internal and international migration", body:[
      "[[internal-migration|Internal migration]] is movement within one country: from a village to a city, from one province or state to another. **International migration** means crossing an international border to live in another country.",
      "Internal migration is much larger. The UN Development Programme’s *Human Development Report 2009* estimated about 740 million internal migrants worldwide, more than twice the number of international migrants today. Two countries show the scale:",
      {list:[
        "**China.** The 2020 census counted about 376 million people living away from the place where their household is registered (the *hukou* system): the so-called “floating population”, many of them rural workers in cities.",
        "**India.** The 2011 census recorded roughly 450 million people, over a third of the population, as migrants: people counted somewhere other than their last place of residence. Most women recorded as migrants had moved on marriage."
      ]},
      "The line between internal and international can move, even when people don’t. When the Soviet Union broke up in 1991, millions of people who had moved inside one country (for example from Russia to Kazakhstan) suddenly lived in a different independent state. In the statistics they became international migrants without taking a single step.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e2u9-l1-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-panel" x="6" y="6" width="328" height="104" rx="12" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">Country A: country of origin</text><rect class="d-sage" x="20" y="42" width="96" height="40" rx="8" stroke-width="2"/><text x="68" y="67" text-anchor="middle">Village</text><rect class="d-sage" x="224" y="42" width="96" height="40" rx="8" stroke-width="2"/><text x="272" y="67" text-anchor="middle">City</text><path class="d-ink" d="M120 62 L218 62" stroke-width="2" marker-end="url(#e2u9-l1-ar)"/><text class="s" x="170" y="100" text-anchor="middle">internal migration: no border crossed</text><path class="d-ink" d="M170 112 L170 140" stroke-width="2" marker-end="url(#e2u9-l1-ar)"/><text class="s" x="180" y="131">emigration from A</text><rect class="d-gold" x="40" y="144" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="166" text-anchor="middle">Country B: transit</text><text class="s" x="170" y="184" text-anchor="middle">passed through; some stay for years</text><path class="d-ink" d="M170 198 L170 226" stroke-width="2" marker-end="url(#e2u9-l1-ar)"/><text class="s" x="180" y="217">immigration to C</text><rect class="d-lup" x="40" y="230" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="252" text-anchor="middle">Country C: destination</text><text class="s" x="170" y="270" text-anchor="middle">where the person now lives</text><text class="s" x="170" y="304" text-anchor="middle">Crossing a border to live elsewhere</text><text class="s" x="170" y="322" text-anchor="middle">makes it international migration.</text></svg>', alt:"Top panel: Country A, the country of origin, with an arrow from a village to a city labelled internal migration, no border crossed. An arrow leads down, labelled emigration from A, to Country B, transit, passed through, where some stay for years. Another arrow, labelled immigration to C, leads to Country C, the destination, where the person now lives.", cap:"One journey seen from several places. The same move is emigration from the country of origin and immigration to the country of destination."}
    ]},
    {h:"Emigration, immigration and the places in between", body:[
      "The same move has different names depending on where you stand. [[emigration|Emigration]] is leaving your country to live in another; the person is an **emigrant** from the country they left. [[immigration|Immigration]] is arriving in a country to live there; the same person is an **immigrant** in their new country.",
      "Three words describe the places involved. The [[country-of-origin|country of origin]] is the country a migrant comes from (their country of nationality or former usual residence). The [[country-of-destination|country of destination]] is where they are going or now live. A **country of transit** is one they pass through on the way.",
      "[[transit-migration|Transit migration]] is rarely as simple as the word suggests. People sometimes spend months or years in a “transit” country, working to pay for the next stage, waiting for papers, or deciding to stay. Countries such as Mexico, Morocco, Türkiye and Libya are often described as transit countries, and each is also a country of origin and a destination for others. Most countries are all three at once.",
      {ex:"Oluwaseun leaves Nigeria and spends a year working in Ghana to save for the next stage, then moves on to the United Kingdom. Seen from Nigeria, he is an emigrant. In the United Kingdom he is an immigrant. Ghana was a country of transit for him, though for co-workers of his who decided to stay it became a country of destination.", label:"Worked example: one person, three viewpoints"}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["There is one legal definition of “migrant”.","International law has no agreed general definition. UN DESA has a statistical one; IOM a broad working one."],["Migrants are only people who cross borders.","IOM’s definition and most research include internal migrants, who far outnumber international ones."],["Once you become a citizen you stop being a migrant.","In most international statistics you still count, because they use country of birth."],["Most of the world’s people are on the move.","About 3.7% of people were international migrants in 2024; most live in the country where they were born."],["Migration studies is part of economics.","It is interdisciplinary: sociology, geography, economics, law, politics, anthropology, history and demography all contribute."]]},
      {terms:["migration-studies","migrant","international-migrant","long-term-migrant","short-term-migrant","internal-migration","emigration","immigration","country-of-origin","country-of-destination","transit-migration"]}
    ]}
   ],
   try:[
    {id:"e2u9-l1-x1", type:"sort", q:"Which discipline would most naturally ask each research question?", buckets:["Economics","Law","Sociology or anthropology"], items:[
      {t:"How much more do people earn, on average, after moving to another country?", b:0, why:"Earnings and income gains are the core of economic questions about migration."},
      {t:"What does a treaty oblige a state to do when someone asks for protection at its border?", b:1, why:"Treaty obligations and rights are legal questions."},
      {t:"How do families keep their festivals and language alive across two countries?", b:2, why:"Everyday culture, family life and identity across borders are classic sociology and anthropology topics."},
      {t:"Do money transfers from abroad reduce poverty in the villages migrants come from?", b:0, why:"Remittances and poverty are measured and analysed mainly by economists."},
      {t:"Which residence rights does a long-term resident without citizenship hold?", b:1, why:"Rights attached to a legal status are a question for law."},
      {t:"How do the children of migrants describe where they belong?", b:2, why:"Belonging and identity are studied mainly through sociological and anthropological methods such as interviews."}
    ]},
    {id:"e2u9-l1-x2", type:"mcq", q:"Using UN DESA’s 1998 statistical definition, which of these people is an international migrant?", options:[
      {t:"Tomás, who moved from Bolivia to Argentina three years ago and lives and works there", ok:true, why:"Right. He changed his country of usual residence for more than a year, so he is a long-term international migrant."},
      {t:"Priya, who moved from Chennai to Delhi for a new job", why:"Chennai and Delhi are both in India. Priya is an internal migrant, which the UN’s *international* definition doesn’t cover."},
      {t:"Hana, who spent two weeks abroad on holiday", why:"A holiday doesn’t change your country of usual residence, and holidays are explicitly excluded even from short-term migration."},
      {t:"Dmitri, who flies abroad for a three-day business meeting every month", why:"Business trips are excluded. Dmitri’s country of usual residence never changes."}
    ]},
    {id:"e2u9-l1-x3", type:"sort", q:"Under the UN’s 1998 recommendations, is each person a long-term international migrant, a short-term international migrant, or neither?", buckets:["Long-term migrant","Short-term migrant","Neither"], items:[
      {t:"A nurse who moves abroad on a three-year hospital contract", b:0, why:"At least a year in a new country of usual residence makes a long-term migrant."},
      {t:"A student on a six-month exchange at a university abroad", b:1, why:"Study abroad for three months to a year is short-term migration. (Holidays, visits, business, medical treatment and pilgrimage are excluded; study is not.)"},
      {t:"A tourist on a three-week trip", b:2, why:"Tourism doesn’t change usual residence and is excluded from short-term migration too."},
      {t:"A worker who moves from a rural province to the capital of the same country", b:2, why:"No border was crossed, so this is internal migration, outside the international definition."},
      {t:"A seasonal fruit picker who works abroad for five months, then returns home", b:1, why:"Five months abroad for work is between three months and a year: short-term."},
      {t:"A woman who moved abroad twenty years ago and still lives there", b:0, why:"She changed her country of usual residence long ago and is counted in the migrant stock, even if she has since become a citizen."}
    ]},
    {id:"e2u9-l1-x4", type:"mcq", q:"Which statement correctly compares IOM’s working definition of “migrant” with UN DESA’s statistical definition of “international migrant”?", options:[
      {t:"IOM’s definition includes people who move within their own country; UN DESA’s international definition does not.", ok:true, why:"Correct. IOM’s umbrella term covers moves “within a country or across an international border”; UN DESA’s counts only changes of country of usual residence."},
      {t:"They are the same definition written in different words.", why:"They differ in scope: IOM includes internal movement and any length of stay."},
      {t:"IOM’s definition is binding international law; UN DESA’s is only advice.", why:"IOM itself says “migrant” is “not defined under international law”. Neither definition is a binding legal rule."},
      {t:"UN DESA counts only people who moved for work.", why:"The statistical definition is about changing country of usual residence, whatever the reason."}
    ]},
    {id:"e2u9-l1-x5", type:"match", q:"Match each term to the example that shows it.", pairs:[
      ["Emigration","Mei leaves her country to take a job abroad, as seen from the country she leaves","Emigration is leaving, viewed from the country of origin."],
      ["Immigration","A country’s statistics office records Mei’s arrival as a new resident","Immigration is arrival to live, viewed from the destination."],
      ["Country of transit","The country where Mei changes planes and spends one night on the way","She passes through it without settling."],
      ["Internal migration","Mei’s brother moves from their home town to the capital of the same country","No international border is crossed."],
      ["Country of origin","The country where Mei was born and held citizenship before leaving","The country a migrant comes from."]
    ]},
    {id:"e2u9-l1-x6", type:"mcq", q:"In the early 1990s the number of international migrants recorded in Central Asia and Eastern Europe jumped, though few people had moved that year. What is the best explanation?", options:[
      {t:"The Soviet Union broke up, so people who had moved inside one country now lived in a different independent state.", ok:true, why:"Right. Borders moved across people. Someone born in Russia and living in Kazakhstan became an international migrant in the statistics."},
      {t:"Statisticians started counting tourists as migrants.", why:"Tourists are excluded from every UN definition of migrant."},
      {t:"Millions of people crossed borders in a single year.", why:"The question says few people moved. The jump came from new borders, not new journeys."},
      {t:"The UN changed the definition to include internal migrants.", why:"The UN’s international migrant definition still excludes internal migrants."}
    ]},
    {id:"e2u9-l1-x7", type:"spot", q:"Kenji wrote this summary for a study group. Tap each claim that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"Migration studies draws on sociology, geography, economics, law, politics, anthropology and history.", flag:false, why:"Accurate: the field is interdisciplinary."},
      " ",
      {t:"International law gives one clear legal definition of “migrant”.", flag:true, why:"Inaccurate. IOM itself says the term is “not defined under international law”. Refugees and stateless people have legal definitions; “migrant” in general does not."},
      " ",
      {t:"Far more people move within their own country than across borders.", flag:false, why:"Accurate. The UNDP estimated about 740 million internal migrants (2009), against 304 million international migrants (2024)."},
      " In the UN figures, ",
      {t:"you only count as an international migrant if you hold a foreign passport.", flag:true, why:"Inaccurate. UN DESA mostly uses country of birth, so people who have become citizens of their new country still count."},
      " And ",
      {t:"the same person can be an emigrant and an immigrant at once, depending on the country’s viewpoint.", flag:false, why:"Accurate: emigrant from the country left, immigrant in the country joined."}
    ]}
   ],
   apply:{
    intro:"These tasks help you see migration in your own world. They are optional and private: keep your notes to yourself unless you choose to share them.",
    tasks:[
     {t:"Map the moves in a family", how:[
       "Choose a family: your own, if you’re comfortable, or a family from a novel, film or published memoir.",
       "Go back two or three generations if you can. For each person, note where they were born and where they live (or lived) as adults.",
       "Mark each move as internal or international, and roughly how long the person stayed.",
       "If you want to ask a relative, ask only someone who agrees, let them skip any question, and don’t record without their permission. Never ask anyone about their legal or immigration status."
     ], write:"Person… born in… moved to… internal or international… how long… What surprised me…"},
     {t:"Check which definition a statistic uses", how:[
       "Find one migration figure for your country or region: on your national statistics office’s website, or on the Migration Data Portal (migrationdataportal.org).",
       "Look for the small print: does it count people by country of birth, by citizenship, or something else? Does it include internal migrants?",
       "Write down the figure, the source, the year and the definition used."
     ], write:"The figure… source… year… counts people by… includes internal migration? …"}
    ],
    proof:"Notes on one family’s moves, each marked internal or international, and one migration statistic with its source, year and definition."
   },
   read:[
    {book:"imis", where:"Chapter 1 “An Introduction to Migration Studies: The Rise and Coming of Age of a Research Field” (Peter Scholten, Asya Pisarevskaya and Nathan Levy)", note:"Read it after this lesson: it traces how the field grew and maps its main topics and disciplines."},
    {book:"wmr", where:"Chapter 1 “Report overview: migration during a time of increasing disruption and distortion”", note:"IOM’s own overview of the report and its main findings."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u9-l2", title:"Many ways to move: work, family, study, safety and time", minutes:50,
   hook:{q:"Each year New Zealand’s Recognised Seasonal Employer scheme brings workers from Pacific Island countries to pick and pack fruit for a few months, after which they go home, and many come back the next season. What do migration researchers call this pattern?", options:["Permanent migration","Circular migration","Transit migration","Return migration"], answer:1, reveal:"**Circular migration.** People move back and forth between two places, again and again, often for seasonal work. Schemes like this one (running since 2007) are designed that way. Circular migration is easy to miss in the statistics, because each stay is short. This lesson sorts movement by its main purpose and by its pattern over time, and looks at the words we use for it."},
   goals:[
     "Classify a move as mainly labour, family, study or forced migration, and explain why real motives are often mixed",
     "Tell temporary, circular, return and permanent migration apart, and explain why plans change",
     "Explain what mixed migration and forced migration mean",
     "Explain irregular migration, why “illegal” is not a status of a person, and how words such as “expat” carry assumptions"
   ],
   learn:[
    {h:"Reasons are usually mixed", body:[
      {lead:"Ask ten people why they moved and you will rarely get a one-word answer."},
      "Researchers sort movement into kinds so that they can count it, compare it and make rules for it. The most common sorting is by **main purpose**: work, family, study or safety. A second sorting is by **time**: how long people stay and whether they come back.",
      "These categories are tools, not boxes people live in. A young woman may move to study, find a job, marry and stay; in one life she passes through three categories. A man may leave because his farm failed in a drought *and* because armed groups were threatening his village *and* because his cousin abroad offered him work. Researchers call this **mixed motives**.",
      "Governments also sort people, through visas and permits: a work visa, a family visa, a student visa, a protection status. The category on the paper shapes a person’s rights, but it is not the whole story of why they moved. IOM’s *World Migration Report* notes that most people who migrate internationally do so for reasons related to work, family and study.",
      {key:"Kinds of migration are lenses for seeing patterns, not labels that capture a whole person."}
    ]},
    {h:"Labour migration", body:[
      "[[labour-migration|Labour migration]] is moving, within a country or across borders, for work. Work is one of the main reasons people migrate internationally, and labour migration covers the whole range of jobs and incomes.",
      {list:[
        "Construction and domestic workers from Nepal, Bangladesh, India, Pakistan, the Philippines, Kenya and many other countries working in the Gulf states.",
        "Software engineers from India and China working in North America and Europe.",
        "Workers from Poland and other countries that joined the European Union in 2004 using the right to work elsewhere in the EU.",
        "Farm and mine workers from Zimbabwe, Mozambique and Lesotho in South Africa; workers from Burkina Faso and Mali on plantations in Côte d’Ivoire.",
        "Nurses and care workers from the Philippines, India, Nigeria and the Caribbean in hospitals and care homes in many richer countries."
      ]},
      "Labour migration can be highly skilled or less skilled, regular or irregular, short or long. Many schemes tie a worker’s visa to one employer; you’ll look at those systems (such as [[kafala]] in several Gulf states) and at migrant workers’ rights in {{migrant-workers-rights|Unit 11}}.",
      "Researchers avoid the shortcut “economic migrant” as if it were a separate kind of person. Wanting a better income is one of the oldest human reasons to move, and it often sits alongside family, safety and ambition."
    ]},
    {h:"Family and study", body:[
      "[[family-migration|Family migration]] means moving to join, or move with, family members: a spouse joining a partner abroad, children joining parents, parents joining adult children, or a family moving together. In many richer countries family reunification is one of the largest routes for long-term immigrants. Marriage migration is a big part of it: many marriages link South Korea or Taiwan with Viet Nam or the Philippines, for example. Inside India, as Lesson 1 showed, marriage is the main reason women are recorded as migrants.",
      "[[student-migration|Student migration]] means moving to study. China and India are among the largest countries of origin for international students. Students go to the United States, the United Kingdom, Australia, Canada and Germany, and also to Malaysia, the United Arab Emirates, Russia, South Africa and Japan, among others. Study is often the start of a longer journey: many students later work in the country where they studied, and some return home with new skills.",
      {tip:"Family and study migration show why “temporary” and “permanent” are tricky. A student visa is temporary, but a student who meets a partner may end up staying for life."}
    ]},
    {h:"Forced migration and mixed movements", body:[
      "[[forced-migration|Forced migration]] is movement that involves force, compulsion or coercion. People flee armed conflict, persecution, violence or disasters; they are displaced by development projects such as dams (China’s Three Gorges Dam relocated more than a million people); or they are moved by traffickers ([[human-trafficking]], Unit 10).",
      "“Forced” and “voluntary” are better seen as two ends of a scale than as two boxes. Almost every move involves some choice and some constraint. People who flee still make choices (where to go, when, with whom), and people who move “voluntarily” for work may have had very few options at home. Showing both the constraint and the choice treats people as agents, not just victims or calculators.",
      "Refugees, asylum seekers and internally displaced people are forced migrants with specific legal definitions. Lesson 3 is devoted to them.",
      "[[mixed-migration|Mixed migration]] describes people with different reasons and different legal situations travelling together along the same routes, often with the same smugglers: refugees, people seeking work, unaccompanied children, victims of trafficking. Routes across the Mediterranean Sea, the Bay of Bengal and Andaman Sea, the Gulf of Aden and the Darién region between Colombia and Panama are well-studied examples. Mixed movements are one reason officials can’t tell who needs protection just by looking."
    ]},
    {h:"Time: temporary, circular, return and permanent", body:[
      "The second way to sort movement is by its shape over time.",
      {list:[
        "**[[temporary-migration|Temporary migration]]**: a stay for a limited period, often tied to a contract, a course or a visa, after which the person plans to leave.",
        "**[[circular-migration|Circular migration]]**: repeated moves back and forth between places, such as seasonal farm work or rotating contracts.",
        "**Return migration**: going back to the country of origin after a long stay abroad ([[return-migration]], Unit 12).",
        "**Permanent migration**: settling for good, often with permanent residence or citizenship."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><text class="s" x="330" y="18" text-anchor="end">time →</text><text x="8" y="50">Temporary</text><path class="d-ink" d="M110 46 L330 46" stroke-width="2"/><rect class="d-lup" x="160" y="38" width="90" height="16" rx="3" stroke-width="1.5"/><text class="s" x="110" y="72">one stay abroad, then home</text><text x="8" y="112">Circular</text><path class="d-ink" d="M110 108 L330 108" stroke-width="2"/><rect class="d-lup" x="120" y="100" width="40" height="16" rx="3" stroke-width="1.5"/><rect class="d-lup" x="190" y="100" width="40" height="16" rx="3" stroke-width="1.5"/><rect class="d-lup" x="260" y="100" width="40" height="16" rx="3" stroke-width="1.5"/><text class="s" x="110" y="134">back and forth, again and again</text><text x="8" y="174">Return</text><path class="d-ink" d="M110 170 L330 170" stroke-width="2"/><rect class="d-lup" x="120" y="162" width="150" height="16" rx="3" stroke-width="1.5"/><text class="s" x="110" y="196">long stay abroad, then back home</text><text x="8" y="236">Permanent</text><path class="d-ink" d="M110 232 L150 232" stroke-width="2"/><rect class="d-lup" x="150" y="224" width="180" height="16" rx="3" stroke-width="1.5"/><text class="s" x="110" y="258">settles abroad for good</text><rect class="d-lup" x="110" y="276" width="22" height="12" rx="2" stroke-width="1.5"/><text class="s" x="140" y="287">= living abroad; line = at home</text></svg>', alt:"Four timelines running left to right. Temporary: one block abroad in the middle, then home. Circular: three short blocks abroad separated by time at home. Return: one long block abroad followed by time at home. Permanent: a short time at home, then living abroad to the end of the line. A key says blocks mean living abroad and the line means living at home.", cap:"Four time patterns. Real lives often switch from one pattern to another."},
      "Plans change. Many people who planned a short stay end up settling, and many who planned to settle go home. When West Germany recruited “guest workers” from the 1950s to 1973, the scheme assumed workers would rotate home; many did return, but many others stayed, and their families joined them (Lesson 5). Statistics based on intentions or visa types can therefore mislead."
    ]},
    {h:"Irregular, not “illegal”", body:[
      "[[irregular-migration|Irregular migration]] is, in IOM’s words, movement “that takes place outside the laws, regulations, or international agreements” governing entry into or exit from a country. A person can come to have irregular status in several ways:",
      {list:[
        "entering a country without authorisation, for example away from an official border crossing;",
        "**overstaying** a visa that was valid when they arrived (in many countries this is a common route into irregular status);",
        "losing status, for example when a work permit tied to one employer ends, or a permit isn’t renewed in time;",
        "being born to parents with irregular status, in a country that doesn’t give citizenship by birth: the child never migrated at all."
      ]},
      "Status can change in the other direction too. Many countries have run **regularisation** programmes that give legal status to people already living there.",
      "Most migration research, the UN and many news organisations avoid calling people “illegal”. An action, such as crossing a border without permission, can break a law; a person cannot *be* illegal. As early as 1975 the UN General Assembly (resolution 3449) asked UN bodies to use “non-documented or irregular migrant workers”, and in 2013 the AP Stylebook, which many English-language newsrooms follow, stopped using “illegal immigrant”. “Undocumented” is also common, though some people with irregular status do hold documents, such as an expired visa.",
      {warn:"Asylum seekers are a special case. A person who crosses a border without papers to ask for protection is using a right recognised in international law. Article 31 of the 1951 Refugee Convention says refugees who come directly from a place where their life or freedom was threatened, present themselves to the authorities without delay and show good cause should not be penalised for entering or being present without authorisation."}
    ]},
    {h:"Words that carry assumptions", body:[
      "Words for people who move are never quite neutral. Researchers have noticed that **“expat”** (short for [[expatriate]]) tends to be used for professionals from richer countries, often white or Western, while people doing the same thing from poorer countries are called “migrants” or “immigrants”. The move is the same; the word signals status.",
      "Other words frame migration as danger: “flood”, “wave”, “swarm”, “invasion”. Water and war metaphors make people sound like a natural disaster or an enemy rather than individuals. You’ll study [[framing]] in {{migration-narratives|Unit 12}}.",
      "A simple habit helps: put the person first. “A person with irregular status”, “people on the move”, “a woman seeking asylum” keep the human being in view and describe a situation rather than an identity.",
      {table:[["Instead of","Many researchers and style guides use","Why"],["Illegal immigrant, “illegals”","Irregular migrant, undocumented migrant, a person with irregular status","Acts can be unlawful; people can’t be illegal."],["Flood, wave of migrants","An increase in arrivals (with the number and source)","Facts instead of disaster imagery."],["Expat (for some) / migrant (for others)","Migrant, or the specific status (student, worker), for everyone","The same move gets the same word."]]},
      {terms:["labour-migration","family-migration","student-migration","forced-migration","mixed-migration","temporary-migration","circular-migration","irregular-migration","expatriate"]}
    ]}
   ],
   try:[
    {id:"e2u9-l2-x1", type:"sort", q:"What is the **main** kind of movement described in each case?", buckets:["Labour","Family","Study","Forced"], items:[
      {t:"Ana accepts a job offer as an engineer in another country.", b:0, why:"Moving to take up a job is labour migration."},
      {t:"Kwame’s wife moves to join him in the country where he has lived for five years.", b:1, why:"Joining a spouse is family migration (family reunification)."},
      {t:"Mei enrols in a three-year degree programme abroad.", b:2, why:"Moving to study is student migration."},
      {t:"A family flees across the border after armed groups burn their village.", b:3, why:"Fleeing violence involves force and compulsion: forced migration."},
      {t:"Hana’s elderly parents move abroad to live with her and her children.", b:1, why:"Parents moving to live with adult children is family migration."},
      {t:"Thousands of people are moved from a valley before it is flooded by a new dam.", b:3, why:"Development-induced displacement is a form of forced migration."},
      {t:"Dmitri signs a two-year contract on a building site in another country.", b:0, why:"A work contract abroad is labour migration, here also temporary."}
    ]},
    {id:"e2u9-l2-x2", type:"match", q:"Match each time pattern to the example that fits it best.", pairs:[
      ["Circular migration","Sione picks fruit abroad every season, going home between seasons","Repeated back-and-forth moves."],
      ["Return migration","After twenty years working abroad, Fatima moves back to her home town","Going back to the country of origin after a long stay."],
      ["Temporary migration","Kenji takes a one-year research post abroad and then goes home as planned","A single stay for a limited period."],
      ["Permanent migration","Lucía moves abroad, buys a home, becomes a citizen and settles for good","Settling permanently."]
    ]},
    {id:"e2u9-l2-x3", type:"mcq", q:"Oluwaseun moves abroad to study, then gets a work permit, then marries a local citizen and stays. What does his story best show?", options:[
      {t:"One person can pass through several migration categories, so kinds of migration describe situations, not fixed types of people.", ok:true, why:"Right. He was a student migrant, then a labour migrant, then a family migrant. The categories are tools for patterns, not labels for a whole life."},
      {t:"He was secretly a labour migrant from the start, and the student visa was a cover.", why:"Nothing in the story suggests that. Plans commonly change as lives change; reading bad faith into it is an assumption, not evidence."},
      {t:"Student migration is always permanent.", why:"Many students return home or move on. His case is one possible path, not a rule."},
      {t:"He stopped being a migrant when he married.", why:"In the statistics he remains an international migrant (born abroad). Marriage changed his legal route, not that fact."}
    ]},
    {id:"e2u9-l2-x4", type:"mcq", q:"Which of these are ways a person can come to have **irregular** status in a country? Choose all that apply.", options:[
      {t:"Staying on after their visa has expired", ok:true, why:"Yes. Overstaying a visa that was valid on arrival is a common route into irregular status."},
      {t:"Entering the country without authorisation", ok:true, why:"Yes. Entry outside the rules is irregular entry."},
      {t:"Losing a work permit that was tied to one employer, and not finding another route to stay", ok:true, why:"Yes. People can fall out of status without moving at all."},
      {t:"Studying abroad on a valid student visa", why:"A valid visa means regular status, as long as its conditions are met."},
      {t:"Becoming a naturalised citizen of the country", why:"Naturalisation is the most secure status there is: a citizen can’t be an irregular migrant in their own country."}
    ]},
    {id:"e2u9-l2-x5", type:"spot", q:"Tap each phrase in this news paragraph that the lesson’s advice on careful language would **change**.", ask:"should be changed", parts:[
      "Officials said ",
      {t:"2,300 people", flag:false, why:"Fine: a specific number, attributed to officials."},
      " arrived by boat last month, ",
      {t:"a flood of illegals", flag:true, why:"Two problems: “flood” is disaster imagery, and “illegals” labels people rather than describing a status. Better: “an increase in irregular arrivals”."},
      " according to ",
      {t:"the interior ministry’s monthly figures", flag:false, why:"Fine: the source of the number is named."},
      ". Some of those arriving ",
      {t:"have applied for asylum", flag:false, why:"Fine: an accurate description of a legal step."},
      ", and ",
      {t:"all of them sneaked across the border", flag:true, why:"An overgeneralisation with a loaded verb. It claims to know how every single person entered, without evidence, and some of them have just been described as asylum seekers, who have a recognised right to seek protection."},
      ". Meanwhile ",
      {t:"expats from wealthy countries", flag:true, why:"Using “expats” for some migrants and “illegals” for others gives the same act different moral weight. Use the same word, or the specific status, for everyone."},
      " continue to move into the old town."
    ]},
    {id:"e2u9-l2-x6", type:"mcq", q:"Why do researchers prefer to see “forced” and “voluntary” migration as ends of a scale rather than two separate boxes?", options:[
      {t:"Most moves combine some choice with some constraint, and a scale captures both people’s agency and the pressures on them.", ok:true, why:"Right. People who flee still make choices, and people who move “voluntarily” may have had few real options."},
      {t:"Because forced migration doesn’t really exist.", why:"It certainly does: millions flee conflict and persecution. The scale view refines the categories, it doesn’t deny them."},
      {t:"Because the law treats everyone the same, whatever their reason for moving.", why:"The law treats people very differently: refugees have specific protections. The scale view is an analytical tool, not a legal rule."},
      {t:"Because voluntary migrants always face more danger than forced migrants.", why:"There’s no such rule. Risks vary by route and situation, not by a neat category."}
    ]},
    {id:"e2u9-l2-x7", type:"mcq", q:"Why do many researchers question the word “expat”?", options:[
      {t:"It is often reserved for wealthier, often Western, professionals, while others doing the same thing are called migrants, so it signals status rather than describing a different act.", ok:true, why:"Correct. The move is the same; the word changes with the person’s origin and class."},
      {t:"Because expats never stay longer than a year.", why:"Many people called expats stay for decades. Length of stay isn’t what decides who gets the word."},
      {t:"Because “expat” is a legal status that only some countries give.", why:"It isn’t a legal status anywhere. It’s an everyday word."},
      {t:"Because expats are not counted as international migrants in UN statistics.", why:"They are counted. Anyone who changes country of usual residence counts, whatever they call themselves."}
    ]}
   ],
   apply:{
    intro:"Two short tasks on kinds of movement and the language used to describe them.",
    tasks:[
     {t:"Sort the moves you mapped", how:[
       "Take the family moves you noted in Lesson 1 (or a family from a book or film).",
       "For each move, write the main purpose (work, family, study, safety, or a mix) and the time pattern (temporary, circular, return, permanent).",
       "Mark any move whose category changed over time, and note what changed it."
     ], write:"Move… main purpose… time pattern… did it change? why…"},
     {t:"Listen for the words", how:[
       "Read or listen to one news story about migration from any source you use.",
       "Note every word used for the people who move (migrants, refugees, expats, illegals, workers, families…).",
       "For each word, ask: does it describe a situation, or label a person? Does it carry an image (water, war, numbers)?",
       "Rewrite one sentence in person-first, specific language."
     ], write:"The story… words used… which label people… my rewritten sentence…"}
    ],
    proof:"Each family move tagged by purpose and time pattern, and a list of words from one news story with one sentence rewritten in careful language."
   },
   read:[
    {book:"imis", where:"Chapter 6 “Migration Forms: What Forms of Migration Can Be Distinguished?” (Talleraas)", note:"Read it after this lesson: it discusses how categories of migration are made and why they blur. Chapters 7 “Labour Migration”, 8 “Family Migration”, 11 “Student Mobilities” and 12 “Irregular Migration” go deeper into each kind."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u9-l3", title:"Refugees, asylum seekers, internally displaced and stateless people", minutes:55,
   hook:{q:"At the end of 2025, UNHCR estimated that 117.8 million people worldwide had been forced from their homes by persecution, conflict, violence or human rights violations. Where were most of them?", options:["In Europe and North America","In refugee camps run by the UN","Still inside their own country","In countries far from their own"], answer:2, reveal:"**Still inside their own country.** About 68.7 million of them were internally displaced: they had fled their homes but not crossed an international border, so they are not refugees in law. Of those who did cross a border, most stayed in a neighbouring country, and most lived in low- and middle-income countries. This lesson sets out the precise words for people who are forced to move, and for people who have no nationality at all."},
   goals:[
     "State the 1951 Refugee Convention definition of a refugee and break it into its parts",
     "Explain what an asylum seeker is, and why a refused claim doesn’t mean someone lied",
     "Define internally displaced people using the 1998 Guiding Principles, and explain why they are not refugees",
     "Define statelessness using the 1954 Convention, describe its causes, and explain how these groups overlap",
     "Describe the latest UNHCR figures with their source and date"
   ],
   learn:[
    {h:"Four situations, four words", body:[
      {lead:"Imagine four people. None of them is defined by the word that follows; each word describes a legal situation they are in right now."},
      {list:[
        "**Daniel** fled his country after being jailed and beaten for his political writing. Another country has examined his case and recognised him as a [[refugee]].",
        "**Ana** fled threats from an armed group and has asked for protection in a neighbouring country. Her case hasn’t been decided yet. She is an [[asylum-seeker|asylum seeker]].",
        "**Kwame** fled fighting near his town and now lives with relatives in another region of the same country. He is an [[internally-displaced-person|internally displaced person]] (IDP).",
        "**Nadia** was born and has always lived in the same country, but no state, including that one, recognises her as a citizen. She is a [[stateless-person|stateless person]]."
      ]},
      "The differences are not about who suffered more or who deserves sympathy. They decide which laws apply, which organisation is responsible and what rights a person can claim. That is why journalists, lawyers and researchers take care to get them right.",
      {key:"Refugee, asylum seeker, IDP and stateless person are legal situations, not identities. A person can move from one to another."}
    ]},
    {h:"Refugee: the 1951 definition, piece by piece", body:[
      "The 1951 Convention relating to the Status of Refugees, Article 1A(2), defines a refugee as a person who, “owing to well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion, is outside the country of his nationality and is unable or, owing to such fear, is unwilling to avail himself of the protection of that country”. People without a nationality who are outside their country of former habitual residence are covered in the same way.",
      "It helps to break the definition into parts. A person must meet **all** of them:",
      {fig:'<svg viewBox="0 0 340 392"><rect class="d-lup" x="10" y="8" width="320" height="64" rx="8" stroke-width="2"/><text x="24" y="34">1. Outside their own country</text><text class="s" x="24" y="56">of nationality (or former home, if stateless)</text><rect class="d-sage" x="10" y="84" width="320" height="64" rx="8" stroke-width="2"/><text x="24" y="110">2. A well-founded fear</text><text class="s" x="24" y="132">a real risk, judged on the evidence</text><rect class="d-gold" x="10" y="160" width="320" height="64" rx="8" stroke-width="2"/><text x="24" y="186">3. Of being persecuted</text><text class="s" x="24" y="208">serious harm, such as threats to life or freedom</text><rect class="d-rose" x="10" y="236" width="320" height="76" rx="8" stroke-width="2"/><text x="24" y="260">4. For one of five reasons</text><text class="s" x="24" y="280">race, religion, nationality, a particular</text><text class="s" x="24" y="298">social group, or political opinion</text><rect class="d-soft" x="10" y="324" width="320" height="64" rx="8" stroke-width="2"/><text x="24" y="350">5. Unable or unwilling to seek</text><text class="s" x="24" y="372">their own state’s protection, owing to that fear</text></svg>', alt:"Five stacked boxes listing the parts of the refugee definition: 1, outside their own country of nationality, or former home if stateless; 2, a well-founded fear, a real risk judged on the evidence; 3, of being persecuted, serious harm such as threats to life or freedom; 4, for one of five reasons: race, religion, nationality, a particular social group, or political opinion; 5, unable or unwilling to seek their own state’s protection, owing to that fear.", cap:"The 1951 refugee definition in five parts. All five must be met."},
      "The 1951 Convention originally covered only events before 1 January 1951, and let states limit it to events in Europe. The **1967 Protocol** removed those time and geographic limits, so the definition now applies worldwide. You’ll look at the Convention’s other key rules, such as [[non-refoulement]] (not sending a refugee back to danger), in {{refugee-law|Unit 11}}.",
      "Two details matter. First, refugee status is **declaratory**: UNHCR’s *Handbook* explains that a person is a refugee as soon as they meet the definition, and recognition by a state or UNHCR *declares* that fact rather than creating it. Second, some regions use wider definitions. The OAU (now African Union) Convention of 1969 and the Latin American Cartagena Declaration of 1984 also include people fleeing generalised violence or events seriously disturbing public order ([[oau-refugee-convention]], [[cartagena-declaration]], Unit 11).",
      "Palestine refugees are a separate case. About 6 million are registered with UNRWA, a UN agency created for them in 1949, and while they receive its help they fall outside the 1951 Convention under its Article 1D."
    ]},
    {h:"Asylum seekers", body:[
      "An **asylum seeker** is a person who is seeking international protection and whose claim has not yet been finally decided. Article 14 of the [[universal-declaration-human-rights|Universal Declaration of Human Rights]] (1948) says “Everyone has the right to seek and to enjoy in other countries asylum from persecution.”",
      "States decide claims through **refugee status determination** ([[refugee-status-determination]], Unit 11): officials or courts examine the person’s account and the evidence about their country. In some large emergencies, people fleeing a particular conflict are recognised as a group (*prima facie*), without individual interviews.",
      "Not every asylum seeker is recognised as a refugee. A refusal can mean the person’s situation doesn’t fit the five-part definition, for example because the danger they fled isn’t linked to one of the five reasons. Some refused applicants receive another form of protection instead ([[complementary-protection]], Unit 11). A refusal is a legal finding about the definition; it isn’t proof that someone lied.",
      {tip:"“Bogus asylum seeker” is a contradiction worth noticing: seeking asylum is a lawful act. What a decision tests is whether the person meets the legal definition."}
    ]},
    {h:"Internally displaced people", body:[
      "The UN’s *Guiding Principles on Internal Displacement* (1998) describe internally displaced persons as people “who have been forced or obliged to flee or to leave their homes or places of habitual residence, in particular as a result of or in order to avoid the effects of armed conflict, situations of generalized violence, violations of human rights or natural or human-made disasters, and who have not crossed an internationally recognized State border.”",
      "The last phrase is the key. Because IDPs are still inside their own country, they are **not refugees** in law, however similar their experience. Their own government has the main responsibility for protecting them, even when that government is a party to the conflict they fled. That is one reason IDPs can be especially hard to reach.",
      "The Guiding Principles are not a treaty, but they draw on binding human rights and humanitarian law. Africa has gone further: the African Union’s **Kampala Convention** (adopted 2009, in force 2012) is the first binding treaty on internal displacement to cover a whole continent.",
      "The Internal Displacement Monitoring Centre (IDMC) counts IDPs worldwide. It reports displacement by conflict and violence separately from displacement by disasters such as floods, storms and earthquakes, which forces millions of people from their homes every year, most of them for a short time."
    ]},
    {h:"Stateless people", body:[
      "Article 1 of the 1954 Convention relating to the Status of Stateless Persons defines a stateless person as “a person who is not considered as a national by any State under the operation of its law.” A second treaty, the 1961 Convention on the Reduction of Statelessness, sets rules to prevent it.",
      "Many stateless people have never moved. Statelessness has several causes:",
      {list:[
        "**Discrimination** in nationality laws, against ethnic or religious groups or against women. In some countries a mother cannot pass her nationality to her children on the same terms as a father.",
        "**Gaps between laws**: a child born in a country that gives nationality only by descent, to parents whose country gives nationality only by birth there, may fall between the two.",
        "**New states and changed borders**, when some residents are left out of the new state’s citizenship rules.",
        "**Missing documents**, such as an unregistered birth, which can make it impossible to prove a nationality."
      ]},
      "Without nationality, people can be shut out of school, health care, legal work, bank accounts, marriage registration and travel, sometimes for generations. The Rohingya, most of whom were left without nationality under Myanmar’s 1982 citizenship law, are one of the largest stateless populations; many are also refugees in Bangladesh and elsewhere.",
      "UNHCR’s #IBelong campaign (2014–2024) aimed to end statelessness. Over that decade about half a million stateless people acquired a nationality, and several countries changed their laws. UNHCR reported 4.5 million stateless people at the end of 2025, and stresses that the true number is likely to be much higher, because many countries have no data.",
      {fig:'<svg viewBox="0 0 340 348"><rect class="d-panel" x="6" y="6" width="328" height="250" rx="14" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">People who have moved home</text><rect class="d-sage" x="16" y="40" width="122" height="200" rx="10" stroke-width="2"/><text x="77" y="62" text-anchor="middle">Within their</text><text x="77" y="80" text-anchor="middle">own country</text><ellipse class="d-rose" cx="77" cy="160" rx="50" ry="36" stroke-width="2"/><text x="77" y="165" text-anchor="middle">IDPs</text><rect class="d-lup" x="146" y="40" width="178" height="200" rx="10" stroke-width="2"/><text x="235" y="62" text-anchor="middle">Across a border</text><text class="s" x="235" y="80" text-anchor="middle">(international migrants)</text><rect class="d-gold" x="156" y="94" width="158" height="132" rx="24" stroke-width="2"/><text class="s" x="235" y="114" text-anchor="middle">forcibly displaced</text><ellipse class="d-panel" cx="196" cy="168" rx="36" ry="30" stroke-width="1.5"/><text x="196" y="173" text-anchor="middle">Refugees</text><ellipse class="d-panel" cx="276" cy="168" rx="34" ry="30" stroke-width="1.5"/><text x="276" y="164" text-anchor="middle">Asylum</text><text x="276" y="182" text-anchor="middle">seekers</text><ellipse class="d-soft" cx="170" cy="266" rx="118" ry="32" stroke-width="2" stroke-dasharray="6 4" fill-opacity="0.7"/><text x="170" y="272" text-anchor="middle">Stateless people</text><text class="s" x="170" y="318" text-anchor="middle">Stateless people can be in any group,</text><text class="s" x="170" y="336" text-anchor="middle">and many have never moved at all.</text></svg>', alt:"A large panel labelled people who have moved home, split into two areas. Left: within their own country, containing an oval for IDPs. Right: across a border, international migrants, containing a box labelled forcibly displaced with two ovals, refugees and asylum seekers. A dashed oval labelled stateless people overlaps the bottom edge of the panel, partly inside and partly outside it. Text below: stateless people can be in any group, and many have never moved at all.", cap:"How the groups relate. Refugees and asylum seekers are international migrants in UN statistics, but they hold a distinct legal status; stateless people may or may not have moved."}
    ]},
    {h:"How the groups overlap, and the numbers", body:[
      "In UN DESA’s statistics, refugees and asylum seekers living abroad are counted among international migrants: in mid-2024, about 51.7 million of the 304 million international migrants (roughly one in six) had been forcibly displaced across borders. So **most international migrants are not refugees**: people displaced across borders are a minority of all international migrants.",
      "UNHCR adds an important caution. Refugees are defined and protected by international law in ways other migrants are not, so mixing the words up can weaken that protection. That is why UNHCR usually says “refugees and migrants” when both are involved.",
      "UNHCR’s annual report *Global Trends: Forced Displacement in 2025* (published June 2026) gives these estimates for the **end of 2025**:",
      {table:[["Group (end of 2025)","Estimate"],["All forcibly displaced people","117.8 million"],["Internally displaced by conflict and violence (IDMC)","68.7 million"],["Refugees under UNHCR’s mandate (including about 1.5 million in refugee-like situations)","28.5 million"],["Palestine refugees under UNRWA’s mandate","6 million"],["Asylum seekers","about 9 million"],["Other people in need of international protection","7.2 million"],["Stateless people (reported)","4.5 million"]]},
      "The parts don’t add up exactly to the total, because of rounding and because some people (for example internally displaced Palestine refugees in Gaza) are counted only once. The same report found that 2025 saw the first fall in global forced displacement in a decade, that about two-thirds of refugees and other people needing international protection lived in neighbouring countries (65%), and that 68% lived in low- and middle-income countries.",
      {warn:"These numbers change every year and are revised as new data arrive. When you quote one, give the group, the date it refers to (here, the end of 2025) and the source (UNHCR Global Trends)."},
      {terms:["refugee","asylum-seeker","internally-displaced-person","stateless-person","forced-migration"]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Refugee and migrant mean the same thing.","Refugees meet a specific legal definition and have specific protections. UNHCR speaks of “refugees and migrants”."],["Asylum seekers are breaking the law.","Seeking asylum is a right (UDHR Article 14). Refugees who enter irregularly to seek protection shouldn’t be penalised (1951 Convention, Article 31)."],["Most refugees go to rich countries.","At the end of 2025, 68% lived in low- and middle-income countries and 65% in neighbouring countries."],["People fleeing war inside their country are refugees.","Without crossing a border they are internally displaced people, with a different legal framework."],["Stateless people are all migrants.","Many stateless people live in the country where they were born and have never moved."]]}
    ]}
   ],
   try:[
    {id:"e2u9-l3-x1", type:"sort", q:"Which word describes each person’s **current** legal situation?", buckets:["Refugee","Asylum seeker","Internally displaced","Stateless"], items:[
      {t:"Ana fled across the border and applied for protection last month; her interview is next week.", b:1, why:"She has asked for international protection and her claim hasn’t been decided: an asylum seeker."},
      {t:"Daniel fled persecution for his political writing and has been recognised by another country under the 1951 Convention.", b:0, why:"He meets the definition and has been recognised: a refugee."},
      {t:"Kwame fled fighting in the north and lives in a camp in the south of his own country.", b:2, why:"Forced from his home but still inside his own country: an IDP."},
      {t:"Nadia has always lived in the country where she was born, but no state recognises her as a national.", b:3, why:"Not considered a national by any state under its law: stateless, though she never moved."},
      {t:"After a flood destroyed her town, Hana stays with relatives in a city 200 km away, in the same country.", b:2, why:"The Guiding Principles include people displaced by disasters who haven’t crossed a border."},
      {t:"A man who fled religious persecution was recognised by UNHCR in the country where he sheltered.", b:0, why:"Recognised as meeting the refugee definition, here by UNHCR rather than the state: a refugee."}
    ]},
    {id:"e2u9-l3-x2", type:"match", q:"Match each part of the 1951 refugee definition to what it rules in or out.", pairs:[
      ["Outside their country","Someone still inside their own country is not a refugee, however serious the danger","This is what separates refugees from IDPs."],
      ["Well-founded fear","The fear must be backed by a real risk, judged on the evidence","It’s not just a feeling: decision-makers look at facts about the person and their country."],
      ["One of five reasons","The persecution must be linked to race, religion, nationality, a particular social group or political opinion","Danger with no link to these grounds may call for other protection, but not 1951 refugee status."],
      ["Unable or unwilling to seek protection","Their own state can’t or won’t protect them, or they fear it","If their own state can and will protect them, they don’t need refugee protection."]
    ]},
    {id:"e2u9-l3-x3", type:"mcq", q:"Tomás left his country because a long drought ruined his farm. Nobody threatened or targeted him. Under the **1951 Convention’s** definition, is he a refugee?", options:[
      {t:"Not under the 1951 definition: there is no persecution linked to one of the five reasons, though other forms of protection or help may apply.", ok:true, why:"Correct. Environmental hardship alone isn’t persecution for a Convention reason. That doesn’t mean his need is unreal; it means the 1951 definition doesn’t cover it (Unit 10 looks at climate and mobility)."},
      {t:"Yes, because he is outside his country and cannot go home.", why:"Being outside your country is only one of the five parts. All five must be met."},
      {t:"Yes, because anyone who crosses a border in hardship is a refugee.", why:"The legal definition is narrower: it requires a well-founded fear of persecution for one of five reasons."},
      {t:"No, because only people from Europe can be refugees.", why:"That limit was removed by the 1967 Protocol. The definition applies worldwide."}
    ]},
    {id:"e2u9-l3-x4", type:"mcq", q:"Why are internally displaced people not refugees in international law?", options:[
      {t:"Because they have not crossed an internationally recognised border, so they are still under their own state’s jurisdiction and protection.", ok:true, why:"Right. Being outside your country is part of the refugee definition; the Guiding Principles define IDPs by the fact that they haven’t crossed a border."},
      {t:"Because their danger is always less serious than refugees’.", why:"Many IDPs face severe danger. The difference is legal and geographic, not about how much someone has suffered."},
      {t:"Because IDPs moved voluntarily.", why:"IDPs were “forced or obliged to flee” by definition."},
      {t:"Because only disasters, never conflict, cause internal displacement.", why:"Conflict and violence displaced about 68.7 million people internally (end of 2025). Disasters displace many others."}
    ]},
    {id:"e2u9-l3-x5", type:"number", q:"UNHCR estimated 117.8 million forcibly displaced people at the end of 2025, of whom 68.7 million were internally displaced by conflict and violence. What percentage were internally displaced? Round to the nearest whole number.", answer:58, tol:1, unit:"%", why:"Divide the part by the whole and multiply by 100: 68.7 ÷ 117.8 = 0.583…, × 100 ≈ **58%**. More than half of all forcibly displaced people were still inside their own country.", wrongs:[
      {v:42, tol:0.6, why:"That’s the share who were **not** internally displaced (100 − 58). The question asks for the internally displaced share."},
      {v:171, tol:2, why:"You divided the whole by the part (117.8 ÷ 68.7). Put the part on top: 68.7 ÷ 117.8."},
      {v:0.58, tol:0.01, why:"That’s the fraction. Multiply by 100 to turn it into a percentage."}
    ]},
    {id:"e2u9-l3-x6", type:"spot", q:"Tap each claim in this blog post that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"A person meets the refugee definition before any official recognises them; recognition confirms it.", flag:false, why:"Accurate: UNHCR’s Handbook says refugee status is declaratory."},
      " ",
      {t:"Asylum seekers are illegal migrants until their case is decided.", flag:true, why:"Inaccurate. Seeking asylum is a recognised right, and asylum seekers are in a legal procedure. “Illegal” isn’t a status of a person anyway."},
      " ",
      {t:"Most of the world’s refugees live in wealthy countries far from home.", flag:true, why:"Inaccurate. At the end of 2025, 68% lived in low- and middle-income countries and 65% in neighbouring countries (UNHCR)."},
      " ",
      {t:"People who flee fighting but stay in their own country are internally displaced, not refugees.", flag:false, why:"Accurate: they haven’t crossed an international border."},
      " ",
      {t:"Stateless people are always people who have crossed a border.", flag:true, why:"Inaccurate. Many stateless people live in the country where they were born and have never moved."}
    ]},
    {id:"e2u9-l3-x7", type:"mcq", q:"Nadia’s parents come from Country X, which gives nationality only to children born on its territory. Nadia was born in Country Y, which gives nationality only to children of its own citizens. Neither country considers her a national. What best explains her situation?", options:[
      {t:"A gap between two nationality laws has left her stateless, even though she has never moved.", ok:true, why:"Right. X’s law needs birth in X; Y’s law needs a parent from Y. She meets neither, so no state considers her a national under its law: the 1954 definition."},
      {t:"She is a refugee, because she has no country.", why:"Refugee status needs a well-founded fear of persecution and being outside one’s country. Statelessness is a different situation, though some people are both."},
      {t:"She is an internally displaced person.", why:"She hasn’t been forced from her home. IDP status is about displacement, not nationality."},
      {t:"She is automatically a citizen of Country Y because she lives there.", why:"Living somewhere doesn’t make you a national. Country Y’s law gives nationality only by descent."}
    ]}
   ],
   apply:{
    intro:"Practise using the precise words, and the numbers, the way a careful researcher would.",
    tasks:[
     {t:"Read the latest UNHCR figures yourself", how:[
       "Open UNHCR’s Global Trends page (unhcr.org/global-trends) or its Refugee Data Finder.",
       "Find three figures: total forcibly displaced people, the number of refugees, and the number of internally displaced people.",
       "For each one, write the date it refers to (for example “end of 2025”) and the exact name of the report or page."
     ], write:"Figure 1… date… source… Figure 2… Figure 3… Anything that surprised me…"},
     {t:"Check the words in one story", how:[
       "Find one news story about people forced to move.",
       "List every term it uses: refugee, asylum seeker, migrant, displaced, stateless, or others.",
       "For each, decide whether the term fits the situation described, using this lesson’s definitions. Note any place where the story mixes them up."
     ], write:"The story… terms used… correct or mixed up… what a better word would be…"}
    ],
    proof:"Three UNHCR figures with their dates and sources, and one news story’s terms checked against the definitions."
   },
   read:[
    {book:"imis", where:"Chapter 9 “Humanitarian Migration” (Talleraas, Brekke & Buhr)", note:"Read it after this lesson: it covers refugee and asylum research, protection categories and their debates."},
    {book:"wmr", where:"Part I “Key data and information on migration and migrants”", note:"Look for the global figures on refugees and internally displaced people, and compare them with UNHCR’s Global Trends."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u9-l4", title:"How migration is counted, and what the numbers say", minutes:55,
   hook:{q:"Which of these do many countries’ statistics offices find hardest to count?", options:["Babies born each year","Deaths each year","People leaving the country to live abroad","People arriving to live in the country"], answer:2, reveal:"**People leaving.** Arrivals usually need a visa, a residence permit or a registration, so they leave a paper trail. People who leave rarely tell anyone: few deregister, and many plan to come back. So emigration is often estimated from the *destination* countries’ data instead. This lesson shows where migration numbers come from, what they can and can’t tell you, and what the latest global figures are."},
   goals:[
     "Tell a migrant stock from a migration flow, and explain net migration",
     "Calculate net migration and a net migration rate per 1,000 people",
     "Describe censuses, population registers, surveys and administrative data, with a strength and a weakness of each",
     "Explain the main gaps in migration data",
     "Quote the latest global figures with their source and year, and read any migration statistic critically"
   ],
   learn:[
    {h:"A bathtub of people", body:[
      {lead:"Picture a bathtub with a tap and a drain."},
      "The water in the tub at any moment is a **stock**: how much is there right now. The water running in through the tap and out through the drain are **flows**: how much moves in or out over a period of time. If more runs in than out, the level rises; if more runs out, it falls.",
      "Migration statistics work the same way. An [[international-migrant-stock|international migrant stock]] is the number of international migrants living in a place **at one point in time**, such as census day or 1 July. A [[migration-flow|migration flow]] is the number of people moving in or out **during a period**, usually a year. Immigration is the inflow; emigration is the outflow.",
      {fig:'<svg viewBox="0 0 340 336"><defs><marker id="e2u9-l4-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="10" y="22">Inflow: immigration</text><text class="s" x="10" y="40">people arriving during a year</text><path class="d-ink" d="M70 50 L118 106" stroke-width="3" marker-end="url(#e2u9-l4-ar)"/><path class="d-ink" d="M70 112 L70 224 L270 224 L270 112" fill="none" stroke-width="3"/><rect class="d-lup" x="72" y="150" width="196" height="72" stroke-width="0"/><text x="170" y="180" text-anchor="middle">Stock</text><text class="s" x="170" y="200" text-anchor="middle">migrants living here on one day</text><path class="d-ink" d="M240 226 L292 268" stroke-width="3" marker-end="url(#e2u9-l4-ar)"/><text x="330" y="290" text-anchor="end">Outflow: emigration</text><text class="s" x="330" y="306" text-anchor="end">people leaving during a year</text><text x="10" y="330">Net migration = inflow − outflow</text></svg>', alt:"A bathtub drawn as a U shape, partly filled. The water is labelled stock: migrants living here on one day. An arrow pours in from the top left, labelled inflow: immigration, people arriving during a year. An arrow leaves from the bottom right, labelled outflow: emigration, people leaving during a year. Below: net migration equals inflow minus outflow.", cap:"Stocks are levels; flows are movements over time. Net migration is the difference between the two flows."},
      "UN DESA’s famous global figure (304 million in 2024) is a **stock**. A headline such as “1.2 million people moved to Country X last year” is a **flow**. Mixing them up is one of the commonest mistakes in migration reporting."
    ]},
    {h:"Net migration", body:[
      "[[net-migration|Net migration]] is the difference between the two flows: **immigrants minus emigrants** over a period. It is positive when more people arrive than leave, negative when more leave than arrive.",
      "To compare countries of different sizes, demographers turn it into a **net migration rate per 1,000 people**: net migration ÷ population × 1,000 (the same idea as the birth and death rates you met in {{demography|Sociology Unit 4}}).",
      {ex:"An imaginary country has 4.6 million people. In one year 85,000 people move in to live there and 62,000 of its residents move abroad.\nNet migration = 85,000 − 62,000 = **+23,000**.\nNet migration rate = 23,000 ÷ 4,600,000 × 1,000 = **5 per 1,000 people**.", label:"Worked example (invented figures)"},
      "Net migration is useful, but it hides a lot. A net figure of zero could mean nobody moved, or that 500,000 arrived and 500,000 left. The people arriving may be very different from those leaving: young graduates leaving and retirees arriving, say. Always ask for the **gross** flows (in and out separately) when you can get them.",
      {warn:"In some countries, official net migration isn’t measured directly. It is calculated as what’s left over after births and deaths are subtracted from the change in population. Errors in the population count then show up as “migration”."}
    ]},
    {h:"Where the numbers come from", body:[
      "No country has one perfect source. Statisticians piece together several, each with strengths and weaknesses.",
      {table:[["Source","What it gives","Main weakness"],["[[census|Census]]","Everyone counted on one day, with country of birth and citizenship; the main source for UN DESA’s stock estimates","Usually only every ten years; people with irregular status may avoid it"],["[[population-register|Population register]]","A continuous list of residents (Nordic countries, the Netherlands and others); good for flows","Relies on people registering arrivals and, harder, departures"],["Household and labour force [[survey|surveys]]","Details such as reasons for moving, jobs and earnings","Samples are small, so rare groups and small areas are uncertain"],["[[administrative-data|Administrative data]]","Visas, residence and work permits, asylum applications, border crossings","Counts documents and events, not people; one person can hold several permits"],["New digital sources","Mobile phone and social media data can show movement quickly","Privacy risks, and not everyone has a phone or account"]]},
      "Censuses also ask about **internal** migration, usually with questions such as “Where did you live five years ago?” or “Where did you live before you came here?” India’s and China’s internal migration figures in Lesson 1 come from such questions.",
      "International organisations then combine national sources. UN DESA builds its migrant stock estimates mainly from censuses, supplemented by registers and surveys. For the 2024 edition, 60 countries and areas got a full reassessment; for the rest, the 2024 figures are extrapolated from the 2020 edition. UNHCR relies largely on governments’ and its own registration of refugees and asylum seekers, and IDMC on many field sources for internal displacement."
    ]},
    {h:"Gaps and traps", body:[
      "Migration is one of the hardest things in demography to measure well. The [[migration-data-gap|migration data gap]] is the distance between what policymakers and researchers need to know and what the data can tell them. The 2018 Global Compact for Migration made better data its first objective ([[global-compact-migration]], Unit 11). The main gaps:",
      {list:[
        "**Different definitions.** Some countries count people by country of birth, others by citizenship. A person who naturalises vanishes from a citizenship-based count but not from a birth-based one. And in countries without citizenship by birth, children born locally to foreign parents can be counted as foreign citizens though they never migrated.",
        "**Emigration is undercounted.** People rarely deregister when they leave, so analysts often use **mirror statistics**: other countries’ counts of arrivals from that country.",
        "**Irregular migration is estimated, not counted.** By definition it is outside official records, so figures are ranges built from indirect methods.",
        "**Short and circular moves slip through.** Annual statistics built on 12-month stays miss seasonal workers and people who come and go.",
        "**Data get old.** A census every ten years can’t show a sudden displacement; that’s why UN DESA extrapolates for many countries.",
        "**Missing breakdowns.** Data by sex, age, disability or reason for moving are often missing, which makes some groups invisible."
      ]},
      {tip:"An honest migration statistic often comes with a range or a note on uncertainty. That isn’t a weakness of the source; it’s a sign the source is being careful."}
    ]},
    {h:"The world in numbers", body:[
      "Here are the latest global estimates, each with its source and date. They will change; check the source for updates.",
      {table:[["Figure","Estimate","Source"],["International migrants (mid-2024)","304 million, 3.7% of world population","UN DESA, International Migrant Stock 2024"],["International migrants in 1990","154 million, 2.9% of world population","UN DESA, International Migrant Stock 2024"],["Women and girls among international migrants (2024)","48%","UN DESA"],["Displaced across borders (mid-2024)","51.7 million refugees, asylum seekers and others needing protection","UN DESA, using UNHCR data"],["All forcibly displaced (end of 2025)","117.8 million, including 68.7 million IDPs","UNHCR, Global Trends 2025"]]},
      "UN DESA’s 2024 figures give a few more patterns. Europe hosted the most international migrants of any region (94 million), followed by Northern America (61 million) and Northern Africa and Western Asia (54 million). The countries with the most international migrants were the United States (52.4 million), Germany (16.8 million), Saudi Arabia (13.7 million) and the United Kingdom (11.8 million). The largest corridors between world regions ran from Latin America and the Caribbean to Northern America (27 million) and from Central and Southern Asia to Northern Africa and Western Asia (20 million), much of it to the Gulf.",
      "Much migration stays within a region: 64% of international migrants born in sub-Saharan Africa lived in another country of sub-Saharan Africa in 2024. IOM’s *World Migration Report 2026*, published on 5 May 2026, uses these UN DESA figures and adds others, such as remittances (money migrants send home) of about USD 905 billion in 2024 ([[remittances]], Unit 11).",
      {key:"International migrants are a growing number but a small share of humanity, and refugees and other people displaced across borders are a minority of them."}
    ]},
    {h:"Reading a migration number like a researcher", body:[
      "Whenever you meet a migration figure, in a report, a speech or a social media post, run through these questions:",
      {ol:[
        "**Who is counted?** Which definition: born abroad, foreign citizens, refugees only, internal migrants too?",
        "**Stock or flow?** People living somewhere on one date, or people moving during a year?",
        "**Where and when?** Which country or region, and what reference date (UN DESA uses 1 July; UNHCR often uses 31 December)?",
        "**What source?** A statistics office, a UN agency, a research team, a campaign group?",
        "**How exact?** Is it a count, an estimate or a projection? Is there a range?",
        "**Compared with what?** A share of the population, an earlier year, another country?"
      ]},
      {ex:"A post says “Migrants are now 3.7%!” Researchers would ask: 3.7% of what? (The world’s population, not any one country’s.) Of whom? (International migrants, by UN DESA’s definition, which is mostly people born abroad.) When? (Mid-2024.) Source? (UN DESA, International Migrant Stock 2024.) With those four answers, the number becomes meaningful.", label:"Worked example: unpacking a statistic"},
      {table:[["Misconception","Closer to the truth"],["Migration numbers are exact counts.","Most are estimates, built from several sources, with gaps."],["A stock and a flow are the same kind of number.","A stock is a level on one date; a flow is movement over a period."],["Zero net migration means no one moved.","It can hide large movements in both directions."],["Most of the world’s migrants live in Europe.","Europe hosts the most of any region (94 million), but that’s under a third of the total."]]},
      {terms:["international-migrant-stock","migration-flow","net-migration","census","population-register","administrative-data","migration-data-gap"]}
    ]}
   ],
   try:[
    {id:"e2u9-l4-x1", type:"sort", q:"Is each figure a **stock** or a **flow**?", buckets:["Stock","Flow"], items:[
      {t:"The number of foreign-born residents counted on census day", b:0, why:"A level on one date: a stock."},
      {t:"The number of people who moved abroad to live during 2025", b:1, why:"Movement during a period: a flow (emigration)."},
      {t:"UN DESA’s 304 million international migrants in mid-2024", b:0, why:"People living outside their country of birth or citizenship on 1 July 2024: a stock."},
      {t:"Asylum applications lodged in a country last year", b:1, why:"Events during a period: a flow."},
      {t:"Foreign citizens registered as living in a country on 1 January", b:0, why:"A count on one date: a stock."},
      {t:"First residence permits issued in 2025", b:1, why:"Permits issued during a year measure an inflow (with the caveat that they count documents, not people)."}
    ]},
    {id:"e2u9-l4-x2", type:"number", q:"In one year, 85,000 people move to an (imaginary) country to live there, and 62,000 of its residents move abroad. What is its net migration for the year?", answer:23000, tol:0, unit:"people", why:"Net migration = immigrants − emigrants = 85,000 − 62,000 = **+23,000**. More people arrived than left.", wrongs:[
      {v:147000, why:"You added the two flows. That gives **gross** migration (total movement), not net. Net is in minus out."},
      {v:-23000, why:"You subtracted the wrong way round (emigrants − immigrants). Net migration is immigrants minus emigrants, so it’s positive here."}
    ]},
    {id:"e2u9-l4-x3", type:"number", q:"The same country has a population of 4.6 million and net migration of 23,000. What is its net migration rate **per 1,000 people**?", answer:5, tol:0.05, unit:"per 1,000", why:"Rate = net migration ÷ population × 1,000 = 23,000 ÷ 4,600,000 × 1,000 = **5 per 1,000**.", wrongs:[
      {v:0.5, tol:0.01, why:"That’s the rate per 100 (a percentage, 0.5%). The question asks per 1,000, so multiply by 1,000, not 100."},
      {v:0.005, tol:0.0005, why:"That’s the raw fraction (23,000 ÷ 4,600,000). Multiply by 1,000 to get a rate per 1,000 people."},
      {v:50, tol:0.5, why:"Check the population: 4.6 million is 4,600,000, not 460,000."}
    ]},
    {id:"e2u9-l4-x4", type:"match", q:"Match each data source to its main weakness.", pairs:[
      ["Census","Usually held only once every ten years","So stock figures can be years out of date."],
      ["Population register","Depends on people reporting when they leave","Departures are often missed, so emigration is undercounted."],
      ["Visa and permit records","Count documents and events, not people","One person can hold several permits, and permits don’t show who actually stayed."],
      ["Household survey","Small samples make rare groups and small areas uncertain","Migrants may be too few in a sample for reliable detail."]
    ]},
    {id:"e2u9-l4-x5", type:"mcq", q:"Why do analysts often estimate a country’s **emigration** using other countries’ data (mirror statistics)?", options:[
      {t:"Because people leaving rarely deregister, while destination countries usually record arrivals through visas, permits or registration.", ok:true, why:"Right. Arrivals leave a paper trail in the destination; departures often leave none at home."},
      {t:"Because emigration is illegal in most countries, so it is hidden.", why:"Leaving your own country is a right in international human rights law (UDHR Article 13). The problem is recording, not legality."},
      {t:"Because emigrants are not counted as migrants anywhere.", why:"They are counted, as immigrants, in the country they move to. That’s exactly what mirror statistics use."},
      {t:"Because statistics offices are not allowed to count people who leave.", why:"There’s no such rule. Departures are simply hard to observe."}
    ]},
    {id:"e2u9-l4-x6", type:"mcq", q:"A town reports net migration of zero last year. Which conclusion is justified?", options:[
      {t:"The same number of people arrived as left; there could still have been a lot of movement in both directions.", ok:true, why:"Correct. Net zero says the flows balanced, not that they were small."},
      {t:"Nobody moved in or out.", why:"Net migration can be zero with large gross flows, for example 5,000 in and 5,000 out."},
      {t:"The people arriving were similar to those leaving.", why:"Net figures say nothing about who moved. Young people could be leaving while older people arrive."},
      {t:"The town’s population stayed exactly the same.", why:"Births and deaths also change population. Net migration is only one of the three parts."}
    ]},
    {id:"e2u9-l4-x7", type:"spot", q:"A social media post makes these claims about global migration. Tap each one that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"UN DESA estimated about 304 million international migrants in mid-2024,", flag:false, why:"Accurate (UN DESA, International Migrant Stock 2024)."},
      " ",
      {t:"about 3.7% of the world’s population.", flag:false, why:"Accurate, according to the same source."},
      " ",
      {t:"About half of them are refugees.", flag:true, why:"Inaccurate. About 51.7 million of the 304 million (roughly one in six) had been forcibly displaced across borders."},
      " ",
      {t:"Women and girls make up just under half.", flag:false, why:"Accurate: 48% in 2024."},
      " ",
      {t:"Most of the world’s international migrants live in Europe.", flag:true, why:"Inaccurate. Europe hosts more than any other region (94 million), but that’s under a third of 304 million."},
      " ",
      {t:"These are exact head counts taken in 2024.", flag:true, why:"Inaccurate. They are estimates: 60 countries were fully reassessed and the rest extrapolated from the 2020 edition."}
    ]}
   ],
   apply:{
    intro:"Look at real migration data yourself, and practise reading it carefully. No accounts are needed.",
    tasks:[
     {t:"Find one statistic and take it apart", how:[
       "Open the Migration Data Portal (migrationdataportal.org) or your national statistics office’s website.",
       "Pick one migration figure for your country or region.",
       "Answer the six questions from the lesson: who is counted, stock or flow, where and when, what source, how exact, compared with what."
     ], write:"The figure… who… stock or flow… where and when… source… how exact… compared with…"},
     {t:"Compare two sources", how:[
       "Find the number of international migrants (or foreign-born people) for one country from two different sources, for example UN DESA and the country’s own statistics office.",
       "Note whether the numbers differ, and look for reasons: different years, birthplace or citizenship, who is included."
     ], write:"Source 1… figure and year… Source 2… figure and year… why they might differ…"}
    ],
    proof:"One migration statistic taken apart with the six questions, and two sources for the same country compared with reasons for any difference."
   },
   read:[
    {book:"imis", where:"Chapter 27 “Migration Statistics” (Albert Kraler & David Reichel)", note:"Read it after this lesson: a clear account of definitions, sources and their limits. Chapter 26 “Quantitative Methods in Migration Research” (Salamońska) goes further."},
    {book:"wmr", where:"Part I “Key data and information on migration and migrants”", note:"Brings together the latest global and regional figures from UN agencies, the World Bank and others."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u9-l5", title:"Migration through history, around the world", minutes:55,
   hook:{q:"Between 1846 and 1940, tens of millions of Europeans crossed the Atlantic. How did long-distance migration from India and southern China in the same years compare?", options:["It was tiny: a few hundred thousand people","About a tenth of the European total","Roughly similar in size","About ten times bigger"], answer:2, reveal:"**Roughly similar in size.** The historian Adam McKeown (2004) estimated about 55–58 million long-distance migrants from Europe, mostly to the Americas, and about 48–52 million from India and southern China, mostly to South-East Asia and around the Indian Ocean, plus another 46–51 million moving into Manchuria, Siberia and Central Asia. The European story is the one most textbooks tell. This lesson looks at migration history from every region."},
   goals:[
     "Outline early human dispersal and the great early migrations across Africa, Asia and the Pacific, with the uncertainty in the evidence",
     "Explain the transatlantic slave trade as forced migration, and indentured labour as the system that followed slavery in many colonies",
     "Describe the age of mass migration (1846–1940) as three great systems, not one",
     "Describe partition and post-colonial migration, guest-worker schemes and Gulf labour migration",
     "Explain why most migration today stays within world regions, with examples from several continents"
   ],
   learn:[
    {h:"Humans have always moved", body:[
      {lead:"Migration is not a modern problem or a modern invention. It is one of the oldest things humans do."},
      "Our species, *Homo sapiens*, first appeared in Africa: some of the oldest known fossils, from Jebel Irhoud in Morocco, are around 300,000 years old. Genetic and archaeological evidence suggests that the ancestors of most people living outside Africa today left the continent roughly 50,000 to 70,000 years ago, after earlier smaller movements.",
      "From there, people reached Australia at least 50,000 years ago (some researchers argue earlier) and the Americas at least 15,000 years ago, with some evidence, still debated, of earlier arrivals. Exact dates keep changing as new sites are found, so treat them as ranges.",
      "Later migrations reshaped whole continents. Over the last few thousand years, Bantu-speaking farmers spread from west-central Africa across much of central, eastern and southern Africa. Austronesian-speaking seafarers moved through Island South-East Asia and across the Pacific: people of the Lapita culture began settling the islands of Remote Oceania about 3,000 years ago, Austronesian speakers reached Madagascar, and Polynesian voyagers settled Aotearoa New Zealand around 1250–1300 CE, one of the last large land masses people reached.",
      {tip:"What *is* new is not movement but borders. Passports, visas and border controls of the modern kind are only about a century old (you’ll meet their history in {{borders-and-sovereignty|Unit 11}})."}
    ]},
    {h:"The transatlantic slave trade: forced migration on a vast scale", body:[
      "In the [[transatlantic-slave-trade|transatlantic slave trade]], from the early 1500s to the 1860s, traders based in Europe and the Americas forcibly carried enslaved Africans across the Atlantic to the Americas. The SlaveVoyages database, built by historians from shipping records, estimates that about **12.5 million** people were embarked on slave ships between 1501 and 1866, and about **10.7 million** survived the crossing, known as the Middle Passage.",
      "This was [[forced-migration|forced migration]] in its most brutal form: people were captured, sold and transported against their will, and their descendants were born into enslavement. It shaped the populations, economies and cultures of Brazil, the Caribbean, the United States and much of Latin America, and it devastated societies in West and Central Africa. The African diaspora in the Americas today traces much of its history to it ([[diaspora]], Unit 12).",
      "It was not the only slave trade. Over many centuries, enslaved people were also carried across the Sahara, the Red Sea and the Indian Ocean.",
      {warn:"Language matters here too. Many historians now write “enslaved people” rather than “slaves”, to keep the person in view and make clear that slavery was something done to them."}
    ]},
    {h:"Indentured labour after slavery", body:[
      "When the British Empire abolished slavery (by an 1833 law that took effect in 1834), plantation owners looked for new workers. The answer was [[indentured-labour|indentured labour]]: workers signed contracts, typically for about five years, binding them to one employer in a distant colony in return for passage, wages and sometimes a ticket home.",
      {list:[
        "More than a million people from India went to Mauritius, Trinidad, British Guiana (now Guyana), Fiji, Natal in South Africa, East Africa and elsewhere, from 1834 until the system ended around 1917–1920.",
        "More than 200,000 Chinese contract workers went to Cuba and Peru between the late 1840s and the 1870s.",
        "Javanese workers went to Suriname, and tens of thousands of Pacific Islanders were recruited, often by deception or force (“blackbirding”), to work in Queensland and Fiji."
      ]},
      "Indenture was legally different from slavery, and many workers chose to sign. But conditions were often harsh, contracts were enforced with penalties, and recruiters frequently misled people. Historians still debate how free the choice was. Its legacy is visible today in the large Indo-Fijian, Indo-Mauritian, Indo-Caribbean and Chinese-Caribbean communities."
    ]},
    {h:"The age of mass migration: three great systems", body:[
      "Between the mid-1800s and the Second World War, steamships and railways made long journeys cheaper and faster. Historians call it the **age of mass migration**. Adam McKeown’s 2004 article “Global Migration, 1846–1940” showed that it had three great systems of similar size, not one:",
      {fig:'<svg viewBox="0 0 340 312"><text x="10" y="22">Europe → the Americas</text><rect class="d-lup" x="10" y="32" width="275" height="24" rx="4" stroke-width="1.5"/><rect class="d-soft" x="285" y="32" width="15" height="24" rx="2" stroke-width="1.5"/><text x="20" y="49">55–58 million</text><text x="10" y="92">India, southern China → South-East</text><text class="s" x="10" y="110">Asia, Indian Ocean rim, South Pacific</text><rect class="d-sage" x="10" y="118" width="240" height="24" rx="4" stroke-width="1.5"/><rect class="d-soft" x="250" y="118" width="20" height="24" rx="2" stroke-width="1.5"/><text x="20" y="135">48–52 million</text><text x="10" y="178">North-east Asia, Russia → Manchuria,</text><text class="s" x="10" y="196">Siberia, Central Asia, Japan</text><rect class="d-gold" x="10" y="204" width="230" height="24" rx="4" stroke-width="1.5"/><rect class="d-soft" x="240" y="204" width="25" height="24" rx="2" stroke-width="1.5"/><text x="20" y="221">46–51 million</text><text class="s" x="10" y="262">Long-distance migrants, 1846–1940,</text><text class="s" x="10" y="280">estimated by Adam McKeown (2004).</text><text class="s" x="10" y="298">Pale ends show the range of estimates.</text></svg>', alt:"Three horizontal bars of similar length. Europe to the Americas: 55 to 58 million. India and southern China to South-East Asia, the Indian Ocean rim and the South Pacific: 48 to 52 million. North-east Asia and Russia to Manchuria, Siberia, Central Asia and Japan: 46 to 51 million. Pale ends on each bar show the range of estimates.", cap:"The age of mass migration had three systems of similar size. Most textbooks describe only the first."},
      "Europeans went mainly to the United States, Canada, Argentina and Brazil, and smaller numbers to Australia, New Zealand and southern Africa. Indians and southern Chinese went mainly to Burma, Malaya, Ceylon (now Sri Lanka), Thailand, the Dutch East Indies and the Philippines, many as contract workers who later returned. Russians, Chinese, Koreans and Japanese moved into Manchuria, Siberia and Central Asia.",
      "This era also built the first modern immigration restrictions, often openly racist: the United States’ Chinese Exclusion Act of 1882, and Australia’s Immigration Restriction Act of 1901, the start of the “White Australia” policy.",
      {key:"The age of mass migration was global. Telling it only as a European story leaves out about two-thirds of it."}
    ]},
    {h:"Partition and the end of empires", body:[
      "The end of empires in the 20th century ([[decolonization]]) moved millions of people, often violently.",
      {list:[
        "**The Partition of British India (1947).** When India and Pakistan became independent, around 15 million people crossed the new borders, Hindus and Sikhs moving to India and Muslims to Pakistan, in one of the largest displacements in history. Estimates of the deaths in the violence range from about 200,000 to 2 million.",
        "**Palestine (1948).** In the fighting of 1947–1949 around the creation of the State of Israel in 1948, more than 700,000 Palestinians fled or were expelled from their homes; Palestinians call this the *Nakba* (“catastrophe”). They and their descendants are the core of the Palestine refugees registered with UNRWA, about 6 million people today (Lesson 3).",
        "**Europe after the Second World War.** Millions of displaced people needed new homes, and an estimated 12 to 14 million ethnic Germans fled or were expelled from central and eastern Europe.",
        "**Post-colonial migration.** People moved from former [[colonialism|colonies]] to the former colonial countries, often as citizens or subjects of the empire: from the Caribbean, India and Pakistan to the United Kingdom (the ship *Empire Windrush* arrived in 1948); from Algeria and West Africa to France; from Indonesia and Suriname to the Netherlands; from Angola and Mozambique to Portugal."
      ]},
      "After the wars in Viet Nam, Laos and Cambodia ended in 1975, hundreds of thousands of people fled by boat and over land; many were resettled in North America, Australia, Europe and elsewhere through international agreements. Episodes like these shaped the refugee system you’ll study in Unit 11."
    ]},
    {h:"Guest workers and the Gulf", body:[
      "After the Second World War, booming economies recruited workers abroad on purpose. The United States’ **Bracero Program** (1942–1964) issued millions of short-term work contracts to Mexican farm workers. West Germany signed recruitment agreements with Italy (1955), Spain and Greece (1960), Türkiye (1961), Morocco (1963), Portugal (1964), Tunisia (1965) and Yugoslavia (1968). These [[guest-worker|guest workers]] (*Gastarbeiter*) were expected to rotate home. Recruitment stopped in 1973; many workers returned, but many stayed, and their families joined them. Other Western European countries had similar schemes.",
      "From the 1970s, oil wealth in the Gulf states (Saudi Arabia, Kuwait, the United Arab Emirates, Qatar, Bahrain and Oman) drew huge numbers of workers, first mainly from other Arab countries such as Egypt and Yemen, then increasingly from South and South-East Asia. In 2024 international migrants were about two-thirds of the residents of Kuwait and about three-quarters in Qatar and the United Arab Emirates (UN DESA), and Saudi Arabia had the third-largest number of international migrants of any country in 2024 (13.7 million, UN DESA). Most are on temporary, employer-linked contracts ([[kafala]], Unit 11).",
      {ex:"A carpenter from Kerala in southern India works in the United Arab Emirates for eight years on renewed contracts, sending money home that pays for his daughters’ schooling, then returns to open a workshop. Millions of similar stories link South Asia and the Gulf, one of the world’s largest migration corridors.", label:"A typical Gulf story (invented, based on research patterns)"}
    ]},
    {h:"Today: most movement stays in its region", body:[
      "Long-distance moves get the most attention, but much migration is regional.",
      {list:[
        "**Africa.** In 2024, 64% of international migrants born in sub-Saharan Africa lived in another country of sub-Saharan Africa (UN DESA): for example from Burkina Faso and Mali to Côte d’Ivoire, or from Zimbabwe and Mozambique to South Africa. Free-movement agreements such as ECOWAS’s support this ([[free-movement]], Unit 11).",
        "**Asia.** Large corridors run from Myanmar to Thailand, Indonesia to Malaysia and Bangladesh to India; citizens of Nepal and India can live and work in each other’s country under a 1950 treaty.",
        "**Latin America.** Millions of people have left Venezuela since the mid-2010s, and most live in other Latin American and Caribbean countries; at the end of 2025 Colombia hosted more refugees and other people needing protection than any other country (UNHCR).",
        "**The Pacific.** Many more Cook Islanders and Niueans live in New Zealand, whose citizenship they hold, than in their home islands, and Samoan, Tongan and Fijian communities are part of life in New Zealand and Australia.",
        "**Europe.** Citizens of European Union countries can live and work in other EU countries, so many moves are within Europe, such as from Poland or Romania to Germany.",
        "**Inside countries.** The largest movements of all are internal, such as rural–urban migration in China and India (Lesson 1; see [[urbanization]])."
      ]},
      {table:[["Misconception","Closer to the truth"],["Migration is a modern crisis.","Humans have always moved; modern borders and passports are what’s new."],["The age of mass migration was European.","Asian systems were of similar size (McKeown, 2004)."],["Most African migrants go to Europe.","In 2024, 64% of migrants born in sub-Saharan Africa lived in another country of the region."],["Temporary worker schemes are always temporary.","Many guest workers stayed and their families joined them."]]},
      {terms:["transatlantic-slave-trade","indentured-labour","guest-worker"]}
    ]}
   ],
   try:[
    {id:"e2u9-l5-x1", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"People of the Lapita culture begin settling the islands of Remote Oceania", why:"About 3,000 years ago: by far the earliest event here."},
      {t:"The transatlantic slave trade begins", why:"Early 1500s. It lasted until the 1860s."},
      {t:"Indentured workers from India begin arriving in Mauritius", why:"From 1834, after the British Empire’s abolition of slavery took effect."},
      {t:"The United States passes the Chinese Exclusion Act", why:"1882, one of the first modern immigration restrictions."},
      {t:"The Partition of British India displaces around 15 million people", why:"1947, at independence."},
      {t:"West Germany signs a recruitment agreement with Türkiye", why:"1961, one of a series of guest-worker agreements."},
      {t:"West Germany stops recruiting guest workers", why:"1973, the year of the oil price shock."}
    ]},
    {id:"e2u9-l5-x2", type:"match", q:"Match each episode to the description that fits it best.", pairs:[
      ["Transatlantic slave trade","Forced migration: people captured, sold and transported against their will","About 12.5 million people embarked, 1501–1866 (SlaveVoyages)."],
      ["Indentured labour","Contract workers bound to one employer in a distant colony for several years","The system that replaced slavery on many plantations after 1834."],
      ["Partition of British India","Mass displacement across new borders at the end of empire","Around 15 million people crossed the new borders in 1947."],
      ["Guest-worker schemes","Recruitment of workers expected to rotate home, many of whom stayed","West Germany’s agreements, 1955–1968, ended in 1973."],
      ["Windrush generation","Post-colonial migration from the Caribbean to the United Kingdom","Named after the ship that arrived in 1948."]
    ]},
    {id:"e2u9-l5-x3", type:"mcq", q:"What did Adam McKeown’s 2004 research show about long-distance migration between 1846 and 1940?", options:[
      {t:"There were three great migration systems of similar size: from Europe, from India and southern China, and from north-east Asia and Russia.", ok:true, why:"Correct. Each moved roughly 46–58 million people."},
      {t:"Almost all long-distance migration was from Europe to the Americas.", why:"That’s the traditional story McKeown challenged. Asian migration was of similar scale."},
      {t:"Asian migration began only after 1945.", why:"Tens of millions moved within and from Asia in 1846–1940."},
      {t:"Migration in this period was mostly forced, like the slave trade.", why:"Some was coerced (for example under some indenture contracts), but most of these movements were not slave trades."}
    ]},
    {id:"e2u9-l5-x4", type:"sort", q:"Using the UN’s world regions (sub-Saharan Africa; Northern Africa and Western Asia; Central and Southern Asia; Eastern and South-Eastern Asia; Latin America and the Caribbean; Northern America; Europe; Oceania), does each move stay **within** one region or go **between** regions?", buckets:["Within one region","Between regions"], items:[
      {t:"Burkina Faso → Côte d’Ivoire", b:0, why:"Both are in sub-Saharan Africa."},
      {t:"Myanmar → Thailand", b:0, why:"Both are in Eastern and South-Eastern Asia."},
      {t:"Venezuela → Colombia", b:0, why:"Both are in Latin America and the Caribbean."},
      {t:"India → United Arab Emirates", b:1, why:"From Central and Southern Asia to Northern Africa and Western Asia."},
      {t:"Mexico → United States", b:1, why:"From Latin America and the Caribbean to Northern America."},
      {t:"Philippines → Saudi Arabia", b:1, why:"From Eastern and South-Eastern Asia to Northern Africa and Western Asia."},
      {t:"Poland → Germany", b:0, why:"Both are in Europe."}
    ]},
    {id:"e2u9-l5-x5", type:"spot", q:"Tap each claim in this short history that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"Migration is a recent phenomenon that began with industrialisation.", flag:true, why:"Inaccurate. Humans have migrated since our species began; people reached Australia at least 50,000 years ago."},
      " ",
      {t:"The transatlantic slave trade was a form of forced migration.", flag:false, why:"Accurate: people were captured and transported against their will."},
      " ",
      {t:"Indentured labour was a contract system that replaced slavery on many plantations.", flag:false, why:"Accurate, though conditions were often harsh and coercive."},
      " ",
      {t:"Migration from Asia in 1846–1940 was tiny compared with migration from Europe.", flag:true, why:"Inaccurate. McKeown estimated about 48–52 million from India and southern China alone, similar to Europe’s 55–58 million."},
      " ",
      {t:"West Germany stopped recruiting guest workers in 1973.", flag:false, why:"Accurate."},
      " ",
      {t:"After that, all the guest workers went home as planned.", flag:true, why:"Inaccurate. Many returned, but many stayed and were joined by their families."}
    ]},
    {id:"e2u9-l5-x6", type:"mcq", q:"UN DESA reports that 64% of international migrants born in sub-Saharan Africa lived in another sub-Saharan African country in 2024. Which conclusion does this support?", options:[
      {t:"Most international migrants from sub-Saharan Africa stay within the region.", ok:true, why:"Right. 64% is a clear majority."},
      {t:"Most people in sub-Saharan Africa are international migrants.", why:"The 64% is a share of migrants, not of the whole population. Most people in the region have never migrated internationally."},
      {t:"No one from sub-Saharan Africa migrates to Europe.", why:"About a third of the region’s international migrants live outside it, including many in Europe."},
      {t:"Migration within Africa is mostly forced.", why:"The figure says nothing about reasons. Much intra-African migration is for work, trade, family and study."}
    ]}
   ],
   apply:{
    intro:"Connect the big history to a place you know. All of these can be done with a library or a web browser.",
    tasks:[
     {t:"The migrations behind a place", how:[
       "Choose a town, city or region you know (where you live, where you grew up, or one you’re curious about).",
       "Using a local museum website, a library, an encyclopedia or a local history society, find out which migrations shaped it: who arrived, who left, when and why.",
       "Place each one on a simple timeline and label it with the kinds of movement from this unit (labour, family, forced, internal, international…)."
     ], write:"Place… migration 1: who, when, why, kind… migration 2… migration 3… what surprised me…"},
     {t:"Read one first-person account", how:[
       "Find a published first-person account of migration: an oral history from a museum or archive, a memoir, or a letter collection.",
       "Note the person’s reasons for moving, the obstacles they met and what they did about them.",
       "Write how their story fits, or doesn’t fit, the categories in this unit."
     ], write:"Whose account… reasons… obstacles… choices they made… how the categories fit…"}
    ],
    proof:"A timeline of migrations that shaped one place, labelled by kind, and notes on one first-person account compared with the unit’s categories."
   },
   read:[
    {book:"imis", where:"Chapter 2 “Migration Histories” (Marlou Schrover)", note:"Read it after this lesson: it explains how historians study migration and why the past is often misremembered."},
    {book:"soc", where:"Chapter 20, Section 20.1 “Demography and Population”", note:"Background reading on how migration fits with births and deaths in population change."}
   ]
  }
  ],
  checkpoint:["e2u9-q02","e2u9-q05","e2u9-q08","e2u9-q12","e2u9-q16","e2u9-q20","e2u9-q23","e2u9-q26","e2u9-q30","e2u9-q34","e2u9-q38","e2u9-q43"],
  codex:[
   {id:"migration-studies-field", title:"Migration studies (the field)", aka:["migration research","migration and diversity studies","mobility studies"], tags:["migration","foundations"],
    summary:"The interdisciplinary study of human movement and of what it means for the people who move, the places they leave and the places they join.",
    levels:{
     starter:[
      "**Migration studies** looks at why people move from place to place, how they do it, and what happens to them, their families and the places they leave and join. It covers moves within a country as well as across borders, and moves of every length, from a seasonal job to a whole lifetime.",
      "No single subject owns it. Sociologists, geographers, economists, lawyers, political scientists, anthropologists, historians and demographers all study migration, each asking different questions. That mix is a strength: a move that looks like a simple job change to an economist may look like a family strategy to an anthropologist and a question of rights to a lawyer.",
      "The field also studies the words and numbers we use. Who counts as a migrant depends on who is asking, and migration studies helps you notice that.",
      {key:"Migration studies = many disciplines looking at one very human activity: moving to live somewhere else."}
     ],
     builder:[
      {table:[["Discipline","Typical focus"],["Sociology","Integration, networks, identity, inequality"],["Geography","Routes, places, distance, cities"],["Economics","Wages, labour markets, remittances, public finances"],["Law","Status, rights, treaties, citizenship"],["Politics and IR","Policy making, borders, cooperation between states"],["Anthropology","Everyday life, culture, family across borders"],["History","Past migrations and how they are remembered"],["Demography","Population size, age structure, measurement"]]},
      "Early landmarks include E. G. Ravenstein’s “laws of migration” (1885, 1889), based on census birthplace data, first British and then from many countries, and W. I. Thomas and Florian Znaniecki’s *The Polish Peasant in Europe and America* (1918–1920). Stephen Castles and Mark Miller’s *The Age of Migration* (first edition 1993; later editions with Hein de Haas) helped define the modern field.",
      "Since the 1990s the field has grown rapidly, with dedicated journals, degree programmes and research networks such as IMISCOE in Europe (since 2004), and research centres in Africa, Asia, Latin America and elsewhere. Its main themes include why people move (Unit 10), how states govern movement (Unit 11) and how migrants and societies change each other (Unit 12).",
      "Methods are just as varied. Researchers analyse censuses and large surveys, interview migrants about their life histories, spend months doing fieldwork in neighbourhoods, workplaces or along routes, read archives and court decisions, and compare laws across countries. Many projects mix several methods: numbers to show a pattern, interviews to explain it.",
      "Because some people who move are in vulnerable situations, ethics are central. Researchers ask for [[informed-consent|informed consent]], protect people’s identities, never put anyone’s legal status at risk and think about their own position in relation to the people they study ([[positionality]]) ({{researching-migration-ethically}}, Unit 12)."
     ],
     pro:[
      "Scholten, Pisarevskaya and Levy, in the opening chapter of *Introduction to Migration Studies* (2022), describe the field as having “come of age”: once scattered across disciplines, it now has its own institutions and a growing body of shared concepts. They also note its limits, including a historical focus on Europe and North America.",
      "Two critiques shape current work. **Methodological nationalism** (Wimmer and Glick Schiller, 2002) is the habit of treating the [[nation-state]] as the natural unit of analysis, so that migrants appear as anomalies. And researchers warn against the field taking over policy categories (“economic migrant”, “illegal”) without questioning them. Many therefore study **mobility** broadly, and ask how categories are made.",
      "Brettell and Hollifield’s *Migration Theory: Talking across Disciplines* (first edition 2000) remains a good map of how each discipline frames migration. Because data, laws and politics change fast, migration research leans heavily on official sources (UN DESA, UNHCR, IOM, the World Bank, national statistics offices), always read with their definitions in mind.",
      "Another debate concerns geography. Much research has focused on migration into Europe and North America, partly because that is where many research funds and universities are. Yet a great deal of migration happens between countries of the [[global-south|Global South]], and within them. Researchers based in Africa, Asia, Latin America and the Pacific increasingly lead work on these movements, and some argue that concepts built on Northern cases (such as “integration” or “irregularity”) don’t travel well without adjustment.",
      "A practical rule for reading the field: check the place, period and population a study covers before applying its findings elsewhere."
     ]
    },
    related:["who-is-a-migrant","measuring-migration","migration-in-history","why-people-move"],
    read:[{book:"imis", where:"Chapter 1 “An Introduction to Migration Studies: The Rise and Coming of Age of a Research Field”"}],
    sources:[{t:"Scholten (ed.), Introduction to Migration Studies (Springer, open access, 2022)", url:"https://doi.org/10.1007/978-3-030-92377-8"},{t:"IOM: Key migration terms", url:"https://www.iom.int/key-migration-terms"}],
    checked:"2026-11"},

   {id:"who-is-a-migrant", title:"Who is a migrant?", aka:["migrant","international migrant","definition of migrant","long-term migrant","short-term migrant"], tags:["migration","definitions"],
    summary:"UN DESA counts people who change their country of usual residence; IOM uses a broad umbrella term that includes internal moves; everyday use differs again.",
    levels:{
     starter:[
      "There is no single answer to “who is a migrant?”, and that surprises many people.",
      "For **statistics**, the UN counts an international migrant as anyone who changes their country of usual residence: the country where they normally live. A tourist or business traveller doesn’t count. Someone who moves abroad for a year or more is a long-term migrant; three months to a year makes a short-term migrant.",
      "The **International Organization for Migration** (IOM) uses a wider working definition: anyone who moves away from their usual home, within their own country or across a border, for any reason and for any length of time.",
      "In **everyday speech**, “migrant” often carries extra ideas about wealth, origin or race, and some people who move are called “expats” instead.",
      {key:"Always ask which definition a number or a claim is using."}
     ],
     builder:[
      "**UN DESA (1998 Recommendations on Statistics of International Migration, Rev. 1):** an international migrant is “any person who changes his or her country of usual residence”. Long-term: at least one year. Short-term: at least three months but less than a year, excluding recreation, holidays, visits to friends and relatives, business, medical treatment and religious pilgrimage.",
      "In practice, UN DESA’s stock estimates use **country of birth**, or **country of citizenship** where birthplace isn’t recorded. So naturalised citizens usually still count, and children born in a country to foreign parents may count where citizenship is used.",
      "**IOM (Glossary on Migration, 2019):** “An umbrella term, not defined under international law, reflecting the common lay understanding of a person who moves away from his or her place of usual residence, whether within a country or across an international border, temporarily or permanently, and for a variety of reasons.”",
      {table:[["","UN DESA (statistics)","IOM (working)"],["Internal moves","No","Yes"],["Minimum stay","3 months (short-term) or 1 year (long-term)","None"],["Refugees","Counted in the stock","Included in the umbrella"],["Legal status","Not a legal definition","Says it is not a legal definition"]]},
      "Several related categories appear in statistics, and they are not the same:",
      {list:["**Foreign-born population**: people living in a country who were born in another one (the basis of most UN figures).","**Foreign population**: residents who hold another country’s citizenship, whether or not they were born abroad.","**People with a migrant background**: a term used in some European statistics for residents with at least one parent born abroad. Many of them were born in the country and have never migrated."]}
     ],
     pro:[
      "The two definitions reflect a debate. An **inclusive** view (IOM) uses “migrant” for everyone who moves, including refugees, and stresses shared rights. A **residual** view, associated with UNHCR, keeps “migrant” for people who are not refugees, to protect the distinct legal status refugees have under the 1951 Convention; UNHCR therefore says “refugees and migrants”.",
      "Statistical definitions are being refined. A revised UN conceptual framework for international migration statistics, endorsed by the UN Statistical Commission in 2021, aims to capture temporary and circular mobility better and to link migration with population statistics.",
      "Edge cases show why definitions matter: borders that move (the break-up of the Soviet Union in 1991 turned many internal migrants into international ones), cross-border commuters, seafarers, nomadic and pastoralist peoples, and people who move frequently between two homes. Each can be counted, or missed, depending on the rules used.",
      "Definitions also have consequences beyond statistics. They decide who is covered by a policy target, a programme or a set of rights, and who is left out. That is one reason organisations argue over them so carefully, and why a careful writer says which definition they are using.",
      "Some groups are counted very differently from country to country. International students may be included in long-term migration if they stay a year or more, or left out as temporary residents. Asylum seekers may or may not appear in census counts. Before comparing two countries, check how each treats these groups."
     ]
    },
    related:["migration-studies-field","measuring-migration","refugees-and-displacement","words-and-migration"],
    read:[{book:"imis", where:"Chapter 6 “Migration Forms: What Forms of Migration Can Be Distinguished?”"}],
    sources:[{t:"IOM: Key migration terms (definitions of migrant and international migrant)", url:"https://www.iom.int/key-migration-terms"},{t:"Migration Data Portal: International migrant stocks (definitions and data)", url:"https://www.migrationdataportal.org/themes/international-migrant-stocks-overview"},{t:"UN DESA Population Division: International Migrant Stock", url:"https://www.un.org/development/desa/pd/content/international-migrant-stock"}],
    checked:"2026-11"},

   {id:"refugees-and-displacement", title:"Refugees, asylum seekers and displaced people", aka:["refugee","asylum seeker","IDP","internally displaced person","forcibly displaced","1951 Refugee Convention definition"], tags:["migration","law","displacement"],
    summary:"A refugee meets the 1951 Convention definition; an asylum seeker’s claim is undecided; an IDP fled but stayed inside their country.",
    levels:{
     starter:[
      "These words describe different legal situations of people forced to move.",
      {list:[
        "A **refugee** has fled their country because of a well-founded fear of persecution for one of five reasons, and cannot get protection from their own state.",
        "An **asylum seeker** has asked another country for protection and is waiting for a decision.",
        "An **internally displaced person (IDP)** has fled their home but stayed inside their own country."
      ]},
      "The difference isn’t about who suffered more. It decides which laws apply and who is responsible. Refugees are protected by international refugee law; IDPs are mainly the responsibility of their own government.",
      "Most people forced from their homes never cross a border: at the end of 2025, UNHCR counted 68.7 million IDPs out of 117.8 million forcibly displaced people.",
      {key:"Refugee = crossed a border + meets the 1951 definition. Asylum seeker = claim pending. IDP = displaced but still at home in their own country."}
     ],
     builder:[
      "**1951 Convention, Article 1A(2):** a refugee is a person who, “owing to well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion, is outside the country of his nationality and is unable or, owing to such fear, is unwilling to avail himself of the protection of that country”. The **1967 Protocol** removed the original time limit (events before 1951) and the optional limit to Europe.",
      "Refugee status is **declaratory**: recognition confirms that someone already meets the definition. Regional instruments widen it: the 1969 OAU Convention and the 1984 Cartagena Declaration also cover people fleeing generalised violence or events seriously disturbing public order.",
      "**Asylum seekers** use the right in Article 14 of the Universal Declaration of Human Rights to seek asylum. A refused claim means the person didn’t meet the legal definition; some receive complementary protection instead.",
      "**IDPs** are defined in the *Guiding Principles on Internal Displacement* (1998): forced or obliged to flee because of armed conflict, generalised violence, human rights violations or disasters, without crossing an internationally recognised border. The AU’s Kampala Convention (2009, in force 2012) is the first binding continent-wide treaty on IDPs.",
      "**Who is responsible?** States are responsible for protecting refugees on their territory. UNHCR, created in 1950, supervises the refugee treaties and helps states; it also works with stateless people and, in many emergencies, with IDPs. UNRWA assists Palestine refugees in its areas of operation. For IDPs, the main duty lies with their own government."
     ],
     pro:[
      {table:[["UNHCR, Global Trends: Forced Displacement in 2025 (end of 2025)","Estimate"],["All forcibly displaced","117.8 million"],["IDPs (conflict and violence, IDMC)","68.7 million"],["Refugees under UNHCR’s mandate","28.5 million"],["Palestine refugees under UNRWA’s mandate","6 million"],["Other people in need of international protection","7.2 million"],["Asylum seekers","about 9 million"]]},
      "The report found the first fall in global forced displacement in a decade (5.4 million fewer than at the end of 2024), 14.7 million refugee and IDP returns during 2025, 68% of refugees and others in need of international protection hosted in low- and middle-income countries and 65% in neighbouring countries. Components overlap slightly and are rounded.",
      "Palestine refugees assisted by UNRWA fall outside the 1951 Convention under Article 1D while they receive that assistance. “Other people in need of international protection” is a UNHCR reporting category for people outside their country who need protection but haven’t been formally recognised; most of them (about 6 million at the end of 2025) are Venezuelans.",
      "Debates continue over whether the 1951 definition fits today’s displacement (generalised violence, gang persecution, climate-related harm), and over the gap between the legal concept and the much larger group of people who are forced to move. These are taken up in {{refugee-law}} and {{climate-and-mobility}}.",
      "For refugees, UNHCR and states seek three **durable solutions**: voluntary return home in safety and dignity, local integration in the country of asylum, or resettlement to a third country ([[durable-solutions]], Unit 11). In practice many refugees live for years, even decades, in “protracted” situations without any of the three."
     ]
    },
    related:["statelessness","who-is-a-migrant","refugee-law","non-refoulement","measuring-migration"],
    read:[{book:"imis", where:"Chapter 9 “Humanitarian Migration”"}],
    sources:[{t:"UNHCR: The 1951 Refugee Convention", url:"https://www.unhcr.org/about-unhcr/who-we-are/1951-refugee-convention"},{t:"UNHCR: Global Trends: Forced Displacement in 2025 (PDF, June 2026)", url:"https://www.unhcr.org/sites/default/files/2026-06/global-trends-report-2025.pdf"},{t:"UNHCR: Internally displaced people", url:"https://www.unhcr.org/about-unhcr/who-we-protect/internally-displaced-people"}],
    checked:"2026-11"},

   {id:"statelessness", title:"Statelessness", aka:["stateless person","stateless people","nationality","#IBelong"], tags:["migration","law","rights"],
    summary:"A stateless person is not considered a national by any state under the operation of its law; many have never moved.",
    levels:{
     starter:[
      "Most people have a nationality from birth and never think about it. A **stateless person** has none: no country recognises them as a citizen.",
      "Many stateless people have never left the country where they were born. They may have been left out by a nationality law, belong to a group that a state refuses to recognise, or lack the documents to prove where they belong.",
      "Without nationality, everyday life can be very hard: going to school, seeing a doctor, getting a legal job, opening a bank account, registering a marriage or travelling can all be blocked. The problem can pass from parents to children.",
      "UNHCR reported 4.5 million stateless people at the end of 2025, and says the true number is likely much higher.",
      {key:"Statelessness is about nationality, not movement. A person can be stateless without ever crossing a border."}
     ],
     builder:[
      "**Definition.** Article 1 of the 1954 Convention relating to the Status of Stateless Persons: “a person who is not considered as a national by any State under the operation of its law.” The 1961 Convention on the Reduction of Statelessness sets rules to prevent new cases, for example by giving nationality to children born on a state’s territory who would otherwise be stateless.",
      {list:[
        "**Discrimination** in nationality laws against ethnic or religious groups, or against women passing nationality to their children.",
        "**Conflicts of laws**, when a child falls between a country that grants nationality only by birth on its territory and one that grants it only by descent.",
        "**State succession**: new states or changed borders leaving some residents out.",
        "**Lack of documentation**, such as unregistered births."
      ]},
      "The Rohingya, most of whom were left without nationality under Myanmar’s 1982 citizenship law, are among the largest stateless populations; many are also refugees.",
      "**Protection.** The 1954 Convention gives stateless people certain rights, such as identity and travel documents and access to courts, schools and work on terms set out in the treaty. Some countries have **statelessness determination procedures** to identify stateless people on their territory and grant them a protected status, and some offer a route to naturalisation.",
      "Statelessness can also overlap with forced displacement: some refugees are stateless, and lacking a nationality can make it impossible to return home."
     ],
     pro:[
      "UNHCR’s **#IBelong** campaign (2014–2024) sought to end statelessness within ten years. It didn’t reach that goal, but about half a million stateless people acquired nationality, more states joined the 1954 and 1961 Conventions and laws improved in every region. A **Global Alliance to End Statelessness**, bringing together states, UN agencies, civil society and stateless-led groups, was launched in 2024 to continue the work. Fewer than half of UN member states are party to both conventions.",
      "Counting is hard. Statelessness is often invisible in censuses, and many countries report no data at all, so UNHCR’s figures (4.4 million at mid-2024; 4.5 million at the end of 2025) are a floor, not an estimate of the total.",
      "Researchers distinguish people who are stateless *in situ* (in their own country of long residence) from stateless migrants and refugees, and stress the difference between **de jure** statelessness (no nationality under any law, the 1954 definition) and situations where people have a nationality on paper but cannot prove or use it.",
      "Prevention is often simpler than cure. Universal birth registration, laws that give nationality to children born on a state’s territory who would otherwise be stateless (as the 1961 Convention requires), and gender-equal nationality laws close most of the gaps through which statelessness arises. Reforms in several countries over the past decade have allowed mothers to pass on nationality equally."
     ]
    },
    related:["refugees-and-displacement","citizenship","who-is-a-migrant"],
    read:[{book:"imis", where:"Chapter 22 “Citizenship & Migration” (Džankić & Vink)"}],
    sources:[{t:"UNHCR: Ending statelessness", url:"https://www.unhcr.org/what-we-do/protect-human-rights/ending-statelessness"},{t:"IOM: Key migration terms (stateless person)", url:"https://www.iom.int/key-migration-terms"},{t:"UNHCR: Global Trends: Forced Displacement in 2025 (PDF)", url:"https://www.unhcr.org/sites/default/files/2026-06/global-trends-report-2025.pdf"}],
    checked:"2026-11"},

   {id:"measuring-migration", title:"Measuring migration", aka:["migration statistics","migrant stock","migration flow","net migration","migration data"], tags:["migration","data","methods"],
    summary:"Stocks count migrants on a date; flows count movements over a period; net migration is inflow minus outflow. All rest on imperfect sources.",
    levels:{
     starter:[
      "Think of a bathtub. The water in it is a **stock**; the water running in and out is a **flow**.",
      "A **migrant stock** is how many migrants live in a place on one date (UN DESA: 304 million international migrants worldwide in mid-2024). A **migration flow** is how many people move in or out during a period, usually a year. **Net migration** is arrivals minus departures.",
      "The numbers come from **censuses**, **population registers**, **surveys** and **administrative records** such as visas and permits. Each has gaps. People leaving rarely tell anyone, people with irregular status may avoid being counted, and censuses happen only about once a decade.",
      {key:"Before trusting a migration number, ask: who is counted, stock or flow, where, when, and according to whom?"}
     ],
     builder:[
      {table:[["Source","Strength","Weakness"],["Census","Covers everyone in principle; birthplace and citizenship","About every 10 years; may miss irregular migrants"],["Population register","Continuous; good for flows","Depends on people registering departures"],["Surveys","Reasons, jobs, earnings","Small samples"],["Administrative data","Timely; visas, permits, asylum claims","Counts documents and events, not people"]]},
      "**Net migration rate** = net migration ÷ population × 1,000. Example (invented): 85,000 in, 62,000 out, population 4.6 million → +23,000, or 5 per 1,000.",
      "UN DESA’s International Migrant Stock 2024 combines national sources: 60 countries and areas were fully reassessed and the rest extrapolated from the 2020 edition. It uses country of birth where possible, otherwise citizenship, and refers to 1 July. Key figures: 304 million (3.7%) in 2024, up from 154 million (2.9%) in 1990; 48% women and girls; Europe 94 million, Northern America 61 million.",
      "**Internal migration** is measured differently. Censuses ask where people lived a fixed number of years ago (often one or five), or where they lived before, and some countries use registers. Because countries draw their internal boundaries differently, internal migration rates are hard to compare.",
      "**Reference dates** matter: UN DESA’s stock refers to 1 July of each year, while UNHCR reports at mid-year and at the end of each year. Always quote the date the number refers to, not just the year a report came out."
     ],
     pro:[
      "Common traps: **definitions** (birthplace versus citizenship; naturalisation; children of foreign citizens), **emigration undercounts** (handled with mirror statistics from destination countries), **irregular migration** (only indirect estimates), **short and circular moves** missed by 12-month thresholds, **residual net migration** that absorbs errors in population counts, and **missing breakdowns** by sex, age or disability.",
      "Global flow data are especially weak: only some countries publish annual flow statistics, and researchers such as Abel and Sander (2014) have estimated global flows indirectly from changes in stocks. New sources (mobile phone records, social media advertising audiences, satellite imagery for displacement) are promising but raise privacy and bias concerns.",
      "The 2018 Global Compact for Migration made data its first objective, and a revised UN statistical framework was endorsed in 2021. Kraler and Reichel’s chapter in *Introduction to Migration Studies* is a clear guide to these issues. See also {{survey-research}} and {{demography}}.",
      "Estimates of **irregular migration** use indirect methods, such as comparing a census count of the foreign-born with the number of people holding residence permits (the residual method), or working back from regularisation programmes. They come with wide ranges and should be quoted as such.",
      "Displacement data have their own traps: IDMC counts both **displacements** (movements, which one person can make several times in a year) and the number of **people** displaced at the end of the year. Mixing the two gives very different numbers."
     ]
    },
    related:["who-is-a-migrant","refugees-and-displacement","survey-research","demography"],
    read:[{book:"imis", where:"Chapter 27 “Migration Statistics” (Kraler & Reichel)"},{book:"wmr", where:"Part I “Key data and information on migration and migrants”"}],
    sources:[{t:"UN DESA: International Migrant Stock 2024, Key facts and figures (PDF)", url:"https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2025_intlmigstock_2024_key_facts_and_figures_advance-unedited.pdf"},{t:"Migration Data Portal: International migrant stocks", url:"https://www.migrationdataportal.org/themes/international-migrant-stocks-overview"},{t:"Kraler & Reichel, “Migration Statistics”, in Introduction to Migration Studies (2022)", url:"https://doi.org/10.1007/978-3-030-92377-8_27"}],
    checked:"2026-11"},

   {id:"migration-in-history", title:"Migration in history", aka:["history of migration","age of mass migration","transatlantic slave trade","indentured labour","guest workers","Partition"], tags:["migration","history"],
    summary:"From early human dispersal to Gulf labour migration: a global history in which Asia, Africa and the Pacific matter as much as Europe.",
    levels:{
     starter:[
      "People have always moved. *Homo sapiens* first appeared in Africa, and over tens of thousands of years people spread to every continent except Antarctica. Pacific voyagers settled islands across thousands of kilometres of ocean.",
      "Some of history’s largest movements were forced. In the **transatlantic slave trade** (1500s–1860s) about 12.5 million enslaved Africans were put on ships to the Americas. After slavery was abolished in the British Empire, more than a million Indians and many Chinese, Javanese and Pacific Islanders went to distant plantations as **indentured labourers**.",
      "From the 1840s to 1940, tens of millions moved from Europe *and* from India, China, Russia and north-east Asia. In the 20th century, the end of empires (such as the Partition of India in 1947), guest-worker schemes and the Gulf oil boom all moved millions.",
      {key:"Migration history is global. Most of it isn’t European, and much of it stayed within regions."}
     ],
     builder:[
      {table:[["Period","Examples"],["Deep past","Dispersal from Africa (roughly 50,000–70,000 years ago for most non-African ancestry); Australia by at least 50,000 years ago; Americas by at least 15,000 years ago; Bantu expansion; Austronesian and Polynesian voyaging"],["1500s–1860s","Transatlantic slave trade (SlaveVoyages: about 12.5 million embarked, 10.7 million disembarked)"],["1834–1930s","Indentured and contract labour from India, China, Java and the Pacific"],["1846–1940","Three systems of mass migration (McKeown 2004)"],["1940s–1970s","Partition (1947); displacement after the Second World War; post-colonial migration; Bracero Program; Western European guest workers"],["1970s–today","Gulf labour migration; regional corridors in Africa, Asia and Latin America"]]},
      "The age of mass migration also produced the first modern race-based restrictions, such as the US Chinese Exclusion Act (1882) and Australia’s Immigration Restriction Act (1901).",
      "The end of empires moved millions: around 15 million people crossed the new borders at the Partition of British India in 1947; more than 700,000 Palestinians fled or were expelled in 1947–1949; an estimated 12 to 14 million ethnic Germans fled or were expelled from central and eastern Europe after 1945; and people from former colonies moved to Britain, France, the Netherlands and Portugal.",
      "Postwar economies recruited workers on purpose: the US Bracero Program (1942–1964) for Mexican farm workers, and West Germany’s agreements with Italy (1955), Spain and Greece (1960), Türkiye (1961), Morocco (1963), Portugal (1964), Tunisia (1965) and Yugoslavia (1968), ended in 1973. From the 1970s the Gulf states recruited workers, first mainly from other Arab countries and then from South and South-East Asia."
     ],
     pro:[
      "Adam McKeown’s “Global Migration, 1846–1940” (*Journal of World History*, 2004) estimated 55–58 million long-distance migrants from Europe, 48–52 million from India and southern China and 46–51 million from north-east Asia and Russia, challenging Atlantic-centred histories. Historians such as Marlou Schrover also stress that migration was often temporary and circular, and that the line between “free” and “unfree” migration was blurry (indenture, debt bondage, convict transportation).",
      "Dates for early human dispersal are ranges that shift with new evidence from archaeology and ancient DNA; claims of very early arrivals in Australia and the Americas are actively debated.",
      "Today’s geography carries this history: Gulf–South Asia corridors, intra-African mobility (64% of migrants born in sub-Saharan Africa lived elsewhere in the region in 2024, UN DESA), and diasporas formed by slavery, indenture and empire.",
      "How migration is remembered is itself a research topic. National stories often celebrate some migrations (founding settlers, a “nation of immigrants”) and forget others (forced removals, indenture, expulsions). Museums, monuments and school curricula in many countries have been revised as historians and descendants have pressed for fuller accounts, for example of slavery, indenture and the Windrush generation.",
      "Historians also question the line between “migration history” and “national history”. Many places that now think of themselves as long-settled were shaped by repeated arrivals and departures, and many diasporas (African, Indian, Chinese, Irish, Lebanese and others) were formed by the movements described here ({{diaspora}}, Unit 12)."
     ]
    },
    related:["migration-studies-field","refugees-and-displacement","diaspora","decolonization"],
    read:[{book:"imis", where:"Chapter 2 “Migration Histories” (Schrover)"}],
    sources:[{t:"McKeown, “Global Migration, 1846–1940”, Journal of World History 15(2), 2004 (DOI)", url:"https://doi.org/10.1353/jwh.2004.0026"},{t:"SlaveVoyages: Trans-Atlantic Slave Trade estimates", url:"https://www.slavevoyages.org/assessment/estimates"},{t:"UN DESA: International Migrant Stock 2024, Key facts and figures (PDF)", url:"https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2025_intlmigstock_2024_key_facts_and_figures_advance-unedited.pdf"}],
    checked:"2026-11"},

   {id:"words-and-migration", title:"Words and migration", aka:["illegal immigrant","irregular migrant","undocumented","expat","language about migrants"], tags:["migration","language","media"],
    summary:"Why researchers say “irregular” rather than “illegal”, why “expat” carries assumptions, and why refugee and migrant shouldn’t be mixed up.",
    levels:{
     starter:[
      "The words we use for people who move shape how we think about them.",
      {list:[
        "**“Illegal” vs “irregular”.** An act, such as crossing a border without permission, can break a law. A person can’t *be* illegal. Researchers, the UN and many newsrooms say “irregular” or “undocumented”.",
        "**“Expat” vs “migrant”.** The two words describe the same move, but “expat” is often used for wealthier people from richer countries.",
        "**“Refugee” vs “migrant”.** Refugees have a specific legal status. Calling everyone “migrants”, or everyone “refugees”, blurs important differences."
      ]},
      "A good habit is to put the person first: “a person with irregular status”, “a woman seeking asylum”.",
      {key:"Describe the situation, not the person: status can change, people remain people."}
     ],
     builder:[
      "**Irregular migration** is movement outside the rules governing entry, stay or exit (IOM). People can become irregular by entering without authorisation, overstaying a visa or losing a permit, and can become regular again through regularisation.",
      "Early official guidance: UN General Assembly resolution 3449 (1975) asked UN bodies to use “non-documented or irregular migrant workers”. In 2013 the AP Stylebook stopped using “illegal immigrant”. The PICUM network’s “Words Matter” campaign promotes “undocumented” and person-first language.",
      "**Asylum seekers** are a special case: seeking asylum is a right (UDHR Article 14), and Article 31 of the 1951 Convention protects refugees who enter without authorisation from penalties, under conditions.",
      "Metaphors matter too: “flood”, “wave”, “swarm” and “invasion” frame people as a disaster or an enemy. Specific numbers with sources say more and frame less.",
      "Some useful contrasts:",
      {table:[["Loaded or vague","More precise"],["Illegal immigrant","Irregular or undocumented migrant; a person with irregular status"],["Bogus asylum seeker","Asylum seeker (whose claim was refused, if that is the case)"],["Flood, wave, swarm","An increase in arrivals, with the number, the period and the source"],["Expat (for some only)","Migrant, or the specific status, for everyone"]]},
      "Even “undocumented” isn’t perfect: some people with irregular status hold documents, such as an expired visa or a passport, and the word can hide that they once had legal status. “Irregular” describes the status more exactly; many writers use both, depending on context."
     ],
     pro:[
      "The “refugee or migrant” debate has two positions. UNHCR keeps the terms apart to protect refugee status, and speaks of “refugees and migrants”. IOM treats “migrant” as an umbrella that includes refugees and stresses rights common to all. Both are defensible; careful writers say which sense they use.",
      "Researchers on “expat” language (for example studies of professionals in Asian and Gulf cities) show how the term marks class, race and nationality, and how it shapes access to housing, social life and status. Some people adopt it, others reject it.",
      "Language changes, and preferences differ between communities and countries. Follow the self-description of the people involved where you can, prefer precise legal terms where they apply, and avoid words that turn a status into an identity. Framing and its effects are covered in {{migration-narratives}}.",
      "Researchers also study how these words travel: from politicians and campaigners to headlines, and from headlines into everyday speech. Studies of media coverage in several countries have found that coverage often concentrates on borders, crises and numbers, and less often quotes migrants themselves; Unit 12 looks at that evidence and its limits.",
      "Other languages have their own debates. French activists popularised *sans-papiers* (“without papers”) as a self-chosen name for undocumented people, and similar discussions exist in Spanish, German, Japanese and other languages. When writing in or translating from another language, check which terms the people concerned and specialist organisations use there."
     ]
    },
    related:["who-is-a-migrant","refugees-and-displacement","migration-narratives"],
    read:[{book:"imis", where:"Chapter 12 “Irregular Migration” (Spencer & Triandafyllidou)"}],
    sources:[{t:"IOM: Key migration terms (irregular migration)", url:"https://www.iom.int/key-migration-terms"},{t:"PICUM: Words Matter", url:"https://picum.org/words-matter/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"migration-studies", term:"Migration studies", def:"The interdisciplinary field that studies human movement and what it means for the people who move and the places they leave and join.", codex:"migration-studies-field"},
   {id:"migrant", term:"Migrant", def:"In IOM’s broad working definition, anyone who moves away from their usual place of residence, within a country or across a border, for any reason. It has no agreed definition in international law.", codex:"who-is-a-migrant"},
   {id:"international-migrant", term:"International migrant", def:"In UN statistics, any person who changes their country of usual residence. Estimates usually count people living outside their country of birth (or citizenship).", codex:"who-is-a-migrant"},
   {id:"long-term-migrant", term:"Long-term migrant", def:"In UN statistics, a person who moves to another country for at least a year, so that it becomes their country of usual residence.", codex:"who-is-a-migrant"},
   {id:"short-term-migrant", term:"Short-term migrant", def:"In UN statistics, a person who moves to another country for at least three months but less than a year, not counting holidays, visits, business, medical treatment or pilgrimage.", codex:"who-is-a-migrant"},
   {id:"internal-migration", term:"Internal migration", def:"Moving to live in another place within the same country, such as from a village to a city. It involves far more people than international migration.", codex:"who-is-a-migrant"},
   {id:"emigration", term:"Emigration", def:"Leaving one’s country to live in another, seen from the country being left. The person is an emigrant from that country.", codex:"who-is-a-migrant"},
   {id:"immigration", term:"Immigration", def:"Moving into a country to live there, seen from the country of arrival. The person is an immigrant in that country.", codex:"who-is-a-migrant"},
   {id:"country-of-origin", term:"Country of origin", def:"The country a migrant comes from: their country of nationality or former usual residence.", codex:"who-is-a-migrant"},
   {id:"country-of-destination", term:"Country of destination", def:"The country a migrant is going to, or now lives in.", codex:"who-is-a-migrant"},
   {id:"transit-migration", term:"Transit migration", def:"Passing through one or more countries on the way to another. Stays in “transit” countries can last months or years, and some people settle there.", codex:"who-is-a-migrant"},
   {id:"labour-migration", term:"Labour migration", def:"Moving, within a country or across borders, for work.", codex:"who-is-a-migrant"},
   {id:"family-migration", term:"Family migration", def:"Moving to join or accompany family members, such as a spouse, parents or children; includes family reunification and marriage migration.", codex:"who-is-a-migrant"},
   {id:"student-migration", term:"Student migration", def:"Moving to another place, often another country, to study. It is often the first step of a longer stay or a return with new skills.", codex:"who-is-a-migrant"},
   {id:"forced-migration", term:"Forced migration", def:"Movement that involves force, compulsion or coercion, for example because of conflict, persecution, disasters, development projects or trafficking.", codex:"refugees-and-displacement"},
   {id:"mixed-migration", term:"Mixed migration", def:"People with different reasons and legal situations (refugees, workers, children travelling alone, trafficking victims) moving together along the same routes.", codex:"refugees-and-displacement"},
   {id:"temporary-migration", term:"Temporary migration", def:"Migration for a limited period, often tied to a contract, course or visa, after which the person plans to leave. Plans often change.", codex:"who-is-a-migrant"},
   {id:"circular-migration", term:"Circular migration", def:"Repeated movement back and forth between places, such as seasonal work abroad followed by time at home.", codex:"who-is-a-migrant"},
   {id:"irregular-migration", term:"Irregular migration", def:"Movement or stay outside the laws and rules governing entry, stay or exit, for example entry without authorisation or overstaying a visa. Researchers avoid calling people “illegal”.", codex:"words-and-migration"},
   {id:"expatriate", term:"Expatriate (expat)", def:"Someone living outside their country of origin. In practice the word is often reserved for wealthier people from richer countries, which researchers question.", codex:"words-and-migration"},
   {id:"refugee", term:"Refugee", def:"Under the 1951 Convention, a person outside their country who has a well-founded fear of persecution for reasons of race, religion, nationality, a particular social group or political opinion, and cannot or will not seek that country’s protection.", codex:"refugees-and-displacement"},
   {id:"asylum-seeker", term:"Asylum seeker", def:"A person seeking international protection whose claim has not yet been finally decided. Seeking asylum is a human right.", codex:"refugees-and-displacement"},
   {id:"internally-displaced-person", term:"Internally displaced person (IDP)", def:"A person forced to flee their home, for example by conflict, violence, human rights violations or disaster, who has not crossed an international border.", codex:"refugees-and-displacement"},
   {id:"stateless-person", term:"Stateless person", def:"A person who is not considered as a national by any state under the operation of its law (1954 Convention). Many stateless people have never moved.", codex:"statelessness"},
   {id:"international-migrant-stock", term:"International migrant stock", def:"The number of international migrants living in a place at one point in time, such as census day or 1 July.", codex:"measuring-migration"},
   {id:"migration-flow", term:"Migration flow", def:"The number of people moving into (immigration) or out of (emigration) a place during a period, usually a year.", codex:"measuring-migration"},
   {id:"net-migration", term:"Net migration", def:"Immigrants minus emigrants over a period. Positive when more arrive than leave; it can hide large movements both ways.", codex:"measuring-migration"},
   {id:"census", term:"Census", def:"An official count of a whole population at one time, usually every ten years, often asking country of birth, citizenship and previous residence.", codex:"measuring-migration"},
   {id:"population-register", term:"Population register", def:"A continuously updated official list of a country’s residents, recording arrivals, departures, births and deaths.", codex:"measuring-migration"},
   {id:"administrative-data", term:"Administrative data", def:"Records kept for running a service, such as visas, residence permits or asylum applications, that can also be used for statistics. They count documents and events, not people.", codex:"measuring-migration"},
   {id:"migration-data-gap", term:"Migration data gap", def:"The distance between what we need to know about migration and what the available data can tell us, because of differing definitions, missing sources and hard-to-count groups.", codex:"measuring-migration"},
   {id:"transatlantic-slave-trade", term:"Transatlantic slave trade", def:"The forced transport of enslaved Africans across the Atlantic to the Americas, from the early 1500s to the 1860s; about 12.5 million people were embarked (SlaveVoyages).", codex:"migration-in-history"},
   {id:"indentured-labour", term:"Indentured labour", def:"Work under a contract binding a worker to one employer for several years, often in a distant colony, in return for passage and wages; widely used on plantations after slavery was abolished.", codex:"migration-in-history"},
   {id:"guest-worker", term:"Guest worker", def:"A worker recruited from abroad under a scheme that expects them to stay only temporarily, as in West Germany’s Gastarbeiter recruitment (1955–1973).", codex:"migration-in-history"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u9-q01", lesson:"e2u9-l1", level:1, q:"Which best describes migration studies?", options:[
     {t:"An interdisciplinary field that draws on sociology, geography, economics, law, politics, anthropology, history and demography", ok:true, why:"Correct. Migration is studied from many angles, and the field brings them together."},
     {t:"A branch of economics about wages", why:"Economics is one contributor, but the field is much broader."},
     {t:"The legal study of visas", why:"Law is one part; the field also studies history, culture, identity and data."},
     {t:"A government department that sets migration policy", why:"It is an academic field of research, not a government body."}]},
   {id:"e2u9-q02", lesson:"e2u9-l1", level:2, q:"Kenji’s grandmother moved abroad fifty years ago and became a citizen of her new country long ago. In UN DESA’s international migrant figures, is she usually counted?", options:[
     {t:"Yes, because the estimates mostly use country of birth, which naturalisation doesn’t change", ok:true, why:"Right. UN DESA uses birthplace where available, so naturalised citizens usually remain in the migrant stock."},
     {t:"No, because citizens are never counted as migrants", why:"That is true only of citizenship-based counts. Most UN figures are birthplace-based."},
     {t:"No, because she moved more than 30 years ago", why:"There is no time limit. Anyone living outside their country of birth is counted."},
     {t:"Only if she still holds her original passport", why:"Passports don’t decide it; country of birth (or, where unavailable, citizenship) does."}]},
   {id:"e2u9-q03", lesson:"e2u9-l1", level:1, q:"Under the UN’s 1998 recommendations, how long must someone move abroad for to count as a **long-term** international migrant?", options:[
     {t:"At least one year", ok:true, why:"Correct. Long-term migrants change their country of usual residence for at least a year."},
     {t:"At least three months", why:"Three months to a year makes a short-term migrant."},
     {t:"At least five years", why:"No; the threshold is one year."},
     {t:"For the rest of their life", why:"Plans don’t matter; a stay of a year or more is enough."}]},
   {id:"e2u9-q04", lesson:"e2u9-l1", level:1, q:"What does IOM say about the legal status of the word “migrant”?", options:[
     {t:"It is an umbrella term, not defined under international law", ok:true, why:"Correct. IOM’s Glossary says exactly that."},
     {t:"It is defined in the 1951 Refugee Convention", why:"That Convention defines refugees, not migrants in general."},
     {t:"It is defined in the UN Charter", why:"The UN Charter doesn’t define migrants."},
     {t:"It means the same as asylum seeker in law", why:"Asylum seeker is a specific situation; “migrant” is a broad, non-legal term."}]},
   {id:"e2u9-q05", lesson:"e2u9-l1", level:2, q:"Lucía moves from a farming village to the capital city of her own country. Which statement is correct?", options:[
     {t:"She is an internal migrant: included in IOM’s broad definition, but not an international migrant in UN DESA’s figures", ok:true, why:"Right. She crossed no international border."},
     {t:"She is an international migrant because she moved more than 100 km", why:"Distance doesn’t matter. International migration means crossing an international border."},
     {t:"She isn’t a migrant under any definition", why:"IOM’s definition includes moves within a country."},
     {t:"She is a transit migrant", why:"Transit means passing through a country on the way to another."}]},
   {id:"e2u9-q06", lesson:"e2u9-l1", level:1, q:"Roughly how many internal migrants did the UNDP’s Human Development Report 2009 estimate worldwide?", options:[
     {t:"About 740 million", ok:true, why:"Correct, more than twice today’s number of international migrants."},
     {t:"About 30 million", why:"Far too low. China’s 2020 census alone counted about 376 million in its “floating population”."},
     {t:"About 304 million", why:"That’s UN DESA’s 2024 figure for international migrants."},
     {t:"About 4 billion", why:"That would be about half of humanity; the estimate was about 740 million."}]},
   {id:"e2u9-q07", lesson:"e2u9-l1", level:2, q:"Oluwaseun leaves Nigeria, stays a year in Ghana, then settles in the United Kingdom. From the UK’s point of view, what is he?", options:[
     {t:"An immigrant", ok:true, why:"Right. Seen from the country he arrives in, he is an immigrant."},
     {t:"An emigrant", why:"He is an emigrant from Nigeria’s point of view, not the UK’s."},
     {t:"An internal migrant", why:"He crossed international borders."},
     {t:"A short-term migrant, since he stayed in Ghana only a year", why:"His time in Ghana doesn’t decide his status in the UK, where he has settled."}]},
   {id:"e2u9-q08", lesson:"e2u9-l1", level:3, q:"A speech claims “migrants are 3.7% of people”, and a report claims “migrants are over 10% of people”. What is the most likely reason they differ?", options:[
     {t:"They use different definitions: 3.7% is UN DESA’s international migrants; a larger figure probably includes internal migrants", ok:true, why:"Right. Including internal migrants (about 740 million in 2009) gives a much larger share."},
     {t:"One of them must be lying", why:"Different definitions can give different, honest numbers. Check the definition before assuming bad faith."},
     {t:"The world population changed by a factor of three", why:"It didn’t. The difference comes from who is counted."},
     {t:"The 3.7% figure counts only refugees", why:"UN DESA’s 3.7% covers all international migrants, refugees included."}]},
   {id:"e2u9-q09", lesson:"e2u9-l1", level:2, q:"In his first paper on the “laws of migration” (1885), which source did E. G. Ravenstein use?", options:[
     {t:"British census records of where people were born", ok:true, why:"Correct. Birthplace data from censuses showed who had moved where."},
     {t:"Satellite images of cities", why:"Satellites didn’t exist in the 1880s."},
     {t:"Mobile phone records", why:"These are a 21st-century data source."},
     {t:"Interviews with refugees under the 1951 Convention", why:"The 1951 Convention came more than 60 years later."}]},
   /* ---- Lesson 2 ---- */
   {id:"e2u9-q10", lesson:"e2u9-l2", level:1, q:"What is circular migration?", options:[
     {t:"Repeated movement back and forth between places, such as seasonal work abroad", ok:true, why:"Correct. Circular migrants come and go again and again."},
     {t:"Moving once and settling permanently", why:"That is permanent migration."},
     {t:"Moving within a single city", why:"That is local residential mobility, not circular migration."},
     {t:"Returning home after a single long stay", why:"That is return migration."}]},
   {id:"e2u9-q11", lesson:"e2u9-l2", level:2, q:"Hana moves abroad to join her husband, who has worked there for six years. What is the main kind of migration?", options:[
     {t:"Family migration", ok:true, why:"Right. Joining a spouse is family reunification."},
     {t:"Student migration", why:"She isn’t moving to study."},
     {t:"Forced migration", why:"Nothing in the case involves force or coercion."},
     {t:"Transit migration", why:"She is settling, not passing through."}]},
   {id:"e2u9-q12", lesson:"e2u9-l2", level:2, q:"Which is the most accurate description of a person whose visa has expired but who stays on?", options:[
     {t:"A person with irregular status, who overstayed a visa", ok:true, why:"Correct. Overstaying is one of the commonest routes into irregular status; “irregular” describes the situation, not the person."},
     {t:"An illegal person", why:"A person can’t be illegal; an act or a status can be irregular."},
     {t:"A refugee", why:"Refugee status depends on the 1951 definition, not on visa status."},
     {t:"A stateless person", why:"An expired visa doesn’t remove anyone’s nationality."}]},
   {id:"e2u9-q13", lesson:"e2u9-l2", level:1, q:"What did UN General Assembly resolution 3449 (1975) ask UN bodies to do?", options:[
     {t:"Use the terms “non-documented or irregular migrant workers”", ok:true, why:"Correct. It was an early official move away from labelling people “illegal”."},
     {t:"Close all borders to migrant workers", why:"The resolution concerned human rights and terminology, not closing borders."},
     {t:"Create the 1951 Refugee Convention", why:"That Convention was adopted in 1951, 24 years earlier."},
     {t:"Count internal migrants in every census", why:"The resolution wasn’t about census methods."}]},
   {id:"e2u9-q14", lesson:"e2u9-l2", level:3, q:"A newspaper calls British professionals in Dubai “expats” and Indian construction workers in Dubai “migrants”. What would a migration researcher point out?", options:[
     {t:"Both groups made the same kind of move; the different words signal status, class or origin rather than a real difference in what they did", ok:true, why:"Right. Researchers note that “expat” is often reserved for wealthier people from richer countries."},
     {t:"Expats are not counted in migration statistics", why:"Both groups are international migrants in UN statistics."},
     {t:"Construction workers are forced migrants, so “migrant” is correct", why:"Nothing in the case shows force. The point is the uneven use of words."},
     {t:"“Expat” is a legal status given only to professionals", why:"“Expat” isn’t a legal status anywhere."}]},
   {id:"e2u9-q15", lesson:"e2u9-l2", level:2, q:"Which is an example of forced migration?", options:[
     {t:"Thousands of people relocated before a valley is flooded for a new dam", ok:true, why:"Correct. Development-induced displacement is forced migration."},
     {t:"A student moving abroad for a degree", why:"That is voluntary student migration."},
     {t:"An engineer accepting a job offer abroad", why:"That is labour migration by choice."},
     {t:"A retired couple moving to the coast", why:"That is a voluntary internal move."}]},
   {id:"e2u9-q16", lesson:"e2u9-l2", level:3, q:"On one boat crossing, there are people fleeing persecution, people seeking work, two unaccompanied teenagers and a woman who was deceived by traffickers. What concept describes this?", options:[
     {t:"Mixed migration", ok:true, why:"Right. People with different reasons and legal situations travel the same route together, so each person’s situation must be assessed."},
     {t:"Circular migration", why:"Circular migration is repeated back-and-forth movement."},
     {t:"Internal migration", why:"They are crossing a sea between countries."},
     {t:"Guest-worker migration", why:"Guest workers are recruited under official schemes."}]},
   {id:"e2u9-q17", lesson:"e2u9-l2", level:2, q:"West Germany’s guest-worker schemes assumed workers would go home. What actually happened?", options:[
     {t:"Many returned, but many stayed and were joined by their families", ok:true, why:"Correct. Temporary schemes often lead to some permanent settlement."},
     {t:"Every worker returned exactly as planned", why:"Many stayed, and their families joined them."},
     {t:"No worker ever returned", why:"Many did return. Both happened."},
     {t:"The schemes were cancelled before any workers arrived", why:"Millions of workers came between 1955 and 1973."}]},
   {id:"e2u9-q18", lesson:"e2u9-l2", level:1, q:"According to Article 31 of the 1951 Refugee Convention, refugees who come directly from danger and present themselves to the authorities without delay should not be…", options:[
     {t:"penalised for entering or being present without authorisation", ok:true, why:"Correct, provided they meet the article’s conditions."},
     {t:"allowed to apply for asylum", why:"The opposite: the Convention exists to protect people who seek refuge."},
     {t:"given any documents", why:"The Convention provides for identity and travel documents for refugees."},
     {t:"counted in migration statistics", why:"The Convention says nothing about statistics; refugees are counted."}]},
   /* ---- Lesson 3 ---- */
   {id:"e2u9-q19", lesson:"e2u9-l3", level:1, q:"Which of these is one of the five reasons for persecution in the 1951 refugee definition?", options:[
     {t:"Membership of a particular social group", ok:true, why:"Correct. The five are race, religion, nationality, membership of a particular social group and political opinion."},
     {t:"Poverty", why:"Poverty alone isn’t one of the five grounds."},
     {t:"Natural disaster", why:"Disasters aren’t a Convention ground, though they displace many people."},
     {t:"Unemployment", why:"Not one of the five grounds."}]},
   {id:"e2u9-q20", lesson:"e2u9-l3", level:2, q:"Kwame fled fighting and lives in a camp in another region of his own country. What is he?", options:[
     {t:"An internally displaced person", ok:true, why:"Right. He was forced from home but hasn’t crossed an international border."},
     {t:"A refugee", why:"Refugees are outside their own country."},
     {t:"An asylum seeker", why:"He hasn’t applied for protection in another country."},
     {t:"A stateless person", why:"Nothing suggests he has lost his nationality."}]},
   {id:"e2u9-q21", lesson:"e2u9-l3", level:1, q:"What did the 1967 Protocol change?", options:[
     {t:"It removed the 1951 Convention’s time limit and optional geographic limit, so the definition applies worldwide", ok:true, why:"Correct. Before 1967, the Convention covered events before 1951 and could be limited to Europe."},
     {t:"It added climate change as a sixth ground", why:"No such ground was added."},
     {t:"It created the office of UNHCR", why:"UNHCR was established in 1950, before the Convention."},
     {t:"It defined internally displaced persons", why:"IDPs are described in the 1998 Guiding Principles."}]},
   {id:"e2u9-q22", lesson:"e2u9-l3", level:2, q:"Ana’s asylum claim is refused because the danger she fled was not linked to one of the five Convention reasons. What does the refusal show?", options:[
     {t:"That her situation didn’t fit the legal definition, not that she lied; she may still qualify for another form of protection", ok:true, why:"Right. A refusal is a finding about the definition. Complementary protection may apply."},
     {t:"That she invented her story", why:"Nothing in the case suggests that. The danger was real but not linked to a Convention ground."},
     {t:"That she was never an asylum seeker", why:"She was an asylum seeker while her claim was pending."},
     {t:"That she is now stateless", why:"A refused asylum claim doesn’t affect nationality."}]},
   {id:"e2u9-q23", lesson:"e2u9-l3", level:3, q:"A headline says “Most refugees head for rich countries.” What do UNHCR’s figures for the end of 2025 show?", options:[
     {t:"68% of refugees and others needing international protection lived in low- and middle-income countries, and 65% in neighbouring countries", ok:true, why:"Right. The headline contradicts UNHCR’s data."},
     {t:"90% lived in Europe and North America", why:"The figures show the opposite pattern."},
     {t:"Refugees are spread equally across all countries", why:"They are concentrated in neighbouring and lower-income countries."},
     {t:"No data exist on where refugees live", why:"UNHCR publishes host-country data every year."}]},
   {id:"e2u9-q24", lesson:"e2u9-l3", level:1, q:"How does the 1954 Convention define a stateless person?", options:[
     {t:"A person who is not considered as a national by any State under the operation of its law", ok:true, why:"Correct, word for word."},
     {t:"A person who has left their country", why:"Many stateless people never move."},
     {t:"A refugee without a passport", why:"Lacking a passport isn’t the same as lacking a nationality."},
     {t:"A person living in a country that isn’t a UN member", why:"Statelessness is about nationality law, not UN membership."}]},
   {id:"e2u9-q25", lesson:"e2u9-l3", level:2, q:"In some countries a mother cannot pass her nationality to her children on the same terms as a father. Why does this matter for statelessness?", options:[
     {t:"If the father is stateless, unknown or can’t pass on his nationality, the child may be left with no nationality", ok:true, why:"Right. Gender-discriminatory nationality laws are a known cause of statelessness."},
     {t:"It makes the child a refugee automatically", why:"Refugee status needs persecution and being outside one’s country."},
     {t:"It has no effect, because every child gets the nationality of where they are born", why:"Many countries don’t give nationality by birth on their territory."},
     {t:"It only matters for adults who emigrate", why:"It affects children from birth, wherever they live."}]},
   {id:"e2u9-q26", lesson:"e2u9-l3", level:3, q:"A student writes: “Refugees, asylum seekers and IDPs are all just migrants, so the words don’t matter.” What is the best reply?", options:[
     {t:"The words mark different legal situations: refugees have Convention protections, asylum seekers have a pending claim, and IDPs are protected mainly by their own state", ok:true, why:"Right. UNHCR warns that blurring the terms can weaken refugee protection."},
     {t:"You’re right: in law they are identical", why:"In law they are quite different."},
     {t:"Only IDPs are migrants; refugees aren’t people who moved", why:"Refugees have moved across borders; the point is their distinct status."},
     {t:"The words only matter for statistics, not for people’s rights", why:"They decide which rights and protections apply."}]},
   {id:"e2u9-q27", lesson:"e2u9-l3", level:1, q:"Which treaty is the first binding agreement on internal displacement to cover a whole continent?", options:[
     {t:"The African Union’s Kampala Convention (2009, in force 2012)", ok:true, why:"Correct. The 1998 Guiding Principles came first, but they are not a treaty."},
     {t:"The 1951 Refugee Convention", why:"It covers refugees, who are outside their country, not IDPs."},
     {t:"The 1954 Statelessness Convention", why:"That concerns stateless people."},
     {t:"The UN Charter", why:"The Charter doesn’t deal with internal displacement."}]},
   /* ---- Lesson 4 ---- */
   {id:"e2u9-q28", lesson:"e2u9-l4", level:1, q:"What is a migrant stock?", options:[
     {t:"The number of migrants living in a place at one point in time", ok:true, why:"Correct, like the water level in a bathtub."},
     {t:"The number of people who moved during a year", why:"That is a flow."},
     {t:"Arrivals minus departures", why:"That is net migration."},
     {t:"Money sent home by migrants", why:"That is remittances."}]},
   {id:"e2u9-q29", lesson:"e2u9-l4", level:2, q:"A country records 40,000 immigrants and 55,000 emigrants in a year. What is its net migration?", options:[
     {t:"−15,000", ok:true, why:"Right: 40,000 − 55,000 = −15,000. More people left than arrived."},
     {t:"+15,000", why:"You subtracted the wrong way round. Net migration is immigrants minus emigrants."},
     {t:"95,000", why:"That’s the total (gross) movement, not net."},
     {t:"55,000", why:"That’s just the emigrant figure."}]},
   {id:"e2u9-q30", lesson:"e2u9-l4", level:2, q:"Why is emigration often harder to count than immigration?", options:[
     {t:"People leaving rarely deregister, while arrivals usually need visas, permits or registration", ok:true, why:"Correct. That’s why analysts use destination countries’ data (mirror statistics)."},
     {t:"Because emigration is forbidden in most countries", why:"The right to leave any country is in the UDHR (Article 13)."},
     {t:"Because emigrants are counted twice", why:"The problem is that they are often not counted at all at home."},
     {t:"Because censuses don’t exist in most countries", why:"Most countries hold censuses; they just can’t count people who have gone."}]},
   {id:"e2u9-q31", lesson:"e2u9-l4", level:1, q:"According to UN DESA, how many international migrants were there in mid-2024?", options:[
     {t:"About 304 million (3.7% of the world population)", ok:true, why:"Correct (International Migrant Stock 2024)."},
     {t:"About 154 million", why:"That was the 1990 figure."},
     {t:"About 1 billion", why:"Far too high for international migrants."},
     {t:"About 117.8 million", why:"That is UNHCR’s figure for all forcibly displaced people at the end of 2025."}]},
   {id:"e2u9-q32", lesson:"e2u9-l4", level:2, q:"Which source is the main basis of UN DESA’s migrant stock estimates?", options:[
     {t:"National population censuses, supplemented by registers and surveys", ok:true, why:"Correct. Censuses record country of birth or citizenship for the whole population."},
     {t:"Airline passenger lists", why:"Passenger lists count trips, not residents."},
     {t:"Social media posts", why:"Digital sources are experimental, not the main basis."},
     {t:"UNHCR refugee registrations only", why:"Those cover refugees, a minority of all migrants."}]},
   {id:"e2u9-q33", lesson:"e2u9-l4", level:3, q:"Country A counts migrants by citizenship; Country B by country of birth. Country A has a high naturalisation rate. What should you expect when comparing their figures?", options:[
     {t:"Country A’s count will look lower, because naturalised migrants drop out of a citizenship-based count", ok:true, why:"Right. Definitions, not just reality, shape the numbers."},
     {t:"The figures will be directly comparable", why:"Different definitions make direct comparison misleading."},
     {t:"Country B’s count will exclude everyone born abroad", why:"A birth-based count includes everyone born abroad."},
     {t:"Country A will count tourists", why:"Neither definition counts tourists."}]},
   {id:"e2u9-q34", lesson:"e2u9-l4", level:3, q:"A post says “Migration to our country fell to zero last year!” based on a net migration figure of zero. What is the key problem?", options:[
     {t:"Net zero means arrivals equalled departures; many people may still have arrived", ok:true, why:"Right. Net migration can hide large gross flows in both directions."},
     {t:"Net migration can’t be zero", why:"It can, when inflows and outflows balance."},
     {t:"Net migration only counts refugees", why:"It counts all migrants arriving and leaving."},
     {t:"Zero means the data are missing", why:"Zero is a real possible value; missing data would be reported differently."}]},
   {id:"e2u9-q35", lesson:"e2u9-l4", level:1, q:"Which world region hosted the most international migrants in 2024, according to UN DESA?", options:[
     {t:"Europe (94 million)", ok:true, why:"Correct, though that is still under a third of the 304 million total."},
     {t:"Oceania", why:"Oceania hosted about 10 million."},
     {t:"Latin America and the Caribbean", why:"About 17.5 million lived there."},
     {t:"Sub-Saharan Africa", why:"About 24 million lived there."}]},
   {id:"e2u9-q36", lesson:"e2u9-l4", level:2, q:"Visa records show 200,000 work visas issued last year. Why can’t you say 200,000 workers arrived?", options:[
     {t:"Administrative data count documents, not people: some people hold several visas and some never travel", ok:true, why:"Right. Permits and visas are events and documents, not head counts."},
     {t:"Because work visas are secret", why:"Many countries publish visa statistics."},
     {t:"Because visas only cover tourists", why:"Work visas are for workers; the issue is counting documents."},
     {t:"Because 200,000 is a stock, not a flow", why:"Visas issued during a year are a flow measure; the issue is that they count documents."}]},
   /* ---- Lesson 5 ---- */
   {id:"e2u9-q37", lesson:"e2u9-l5", level:1, q:"About how many enslaved Africans were embarked on ships in the transatlantic slave trade (1501–1866), according to SlaveVoyages?", options:[
     {t:"About 12.5 million", ok:true, why:"Correct; about 10.7 million survived the crossing."},
     {t:"About 125,000", why:"Far too low; the trade lasted over three centuries."},
     {t:"About 125 million", why:"Far too high; the estimate is about 12.5 million."},
     {t:"No estimates exist", why:"Historians have built detailed estimates from shipping records."}]},
   {id:"e2u9-q38", lesson:"e2u9-l5", level:2, q:"After the British Empire’s abolition of slavery took effect in 1834, how did many plantation colonies such as Mauritius, Trinidad and Fiji get workers?", options:[
     {t:"Through indentured labour, especially from India", ok:true, why:"Correct. More than a million Indians went as indentured workers between 1834 and about 1917–1920."},
     {t:"Through guest-worker agreements with Türkiye", why:"Those were West German agreements in the 1960s."},
     {t:"Through the EU’s free movement rules", why:"The EU didn’t exist until the 20th century."},
     {t:"By hiring only local workers", why:"Plantation owners recruited workers from far away."}]},
   {id:"e2u9-q39", lesson:"e2u9-l5", level:1, q:"Which event in 1947 displaced around 15 million people?", options:[
     {t:"The Partition of British India", ok:true, why:"Correct. People crossed the new borders between India and Pakistan."},
     {t:"The end of West Germany’s guest-worker scheme", why:"That was in 1973 and didn’t displace millions."},
     {t:"The Chinese Exclusion Act", why:"That was a US law of 1882."},
     {t:"The arrival of the Empire Windrush", why:"That ship arrived in 1948 with around a thousand passengers."}]},
   {id:"e2u9-q40", lesson:"e2u9-l5", level:3, q:"A textbook describes the “age of mass migration” only as Europeans crossing the Atlantic. What would McKeown’s research add?", options:[
     {t:"Two other systems of similar size: from India and southern China to South-East Asia and the Indian Ocean, and from north-east Asia and Russia to Manchuria, Siberia and Central Asia", ok:true, why:"Right. He estimated each system at roughly 46–58 million people (1846–1940)."},
     {t:"Nothing: European migration was the only large movement", why:"McKeown’s whole point was that it wasn’t."},
     {t:"That the European figure was exaggerated tenfold", why:"He didn’t claim that; he added the Asian systems."},
     {t:"That migration stopped entirely between 1846 and 1940", why:"This was a period of very high migration."}]},
   {id:"e2u9-q41", lesson:"e2u9-l5", level:2, q:"Which description of Gulf labour migration is accurate?", options:[
     {t:"From the 1970s, oil wealth drew workers first mainly from other Arab countries, then increasingly from South and South-East Asia", ok:true, why:"Correct. Today migrants are most residents in several Gulf states."},
     {t:"It began in the 1500s with the slave trade", why:"Modern Gulf labour migration grew from the 1970s oil boom."},
     {t:"Gulf migrants are mostly refugees", why:"Most are workers on contracts."},
     {t:"Migrants are a small minority in every Gulf state", why:"They are the majority of residents in Kuwait, Qatar and the United Arab Emirates."}]},
   {id:"e2u9-q42", lesson:"e2u9-l5", level:1, q:"When did people of the Lapita culture begin settling the islands of Remote Oceania?", options:[
     {t:"About 3,000 years ago", ok:true, why:"Correct, one of the great seafaring migrations in history."},
     {t:"In the 1800s, on steamships", why:"Pacific islands were settled by voyaging canoe thousands of years earlier."},
     {t:"About 300,000 years ago", why:"That is about when *Homo sapiens* appears in the fossil record in Africa."},
     {t:"In 1947", why:"That is the year of Partition in South Asia."}]},
   {id:"e2u9-q43", lesson:"e2u9-l5", level:3, q:"Someone says: “African migration means people leaving Africa for Europe.” Which fact best corrects this?", options:[
     {t:"In 2024, 64% of international migrants born in sub-Saharan Africa lived in another sub-Saharan African country (UN DESA)", ok:true, why:"Right. Most international migration from sub-Saharan Africa stays within the region."},
     {t:"No Africans live in Europe", why:"Many do. The point is that most African migrants live within Africa."},
     {t:"Africa has no internal migration", why:"Africa has large internal and intra-regional migration."},
     {t:"Most Africans are international migrants", why:"Most Africans have never migrated internationally."}]},
   {id:"e2u9-q44", lesson:"e2u9-l5", level:2, q:"Which was one of the first modern immigration restrictions based openly on race?", options:[
     {t:"The United States’ Chinese Exclusion Act of 1882", ok:true, why:"Correct. Australia’s Immigration Restriction Act of 1901 is another example."},
     {t:"The 1951 Refugee Convention", why:"That treaty protects refugees; it isn’t a restriction based on race."},
     {t:"The 1967 Protocol", why:"It extended refugee protection worldwide."},
     {t:"The Kampala Convention", why:"It protects internally displaced people in Africa."}]},
   {id:"e2u9-q45", lesson:"e2u9-l5", level:3, q:"Many more Cook Islanders and Niueans live in New Zealand than in their home islands. What helps explain this?", options:[
     {t:"They hold New Zealand citizenship, so they can live and work there freely", ok:true, why:"Right. Free movement through citizenship makes migration much easier."},
     {t:"They are refugees under the 1951 Convention", why:"Nothing suggests persecution; this is migration under citizenship rights."},
     {t:"They are stateless", why:"They hold New Zealand citizenship."},
     {t:"Their islands were never settled", why:"The islands were settled by Polynesian voyagers centuries ago."}]}
  ]
});
