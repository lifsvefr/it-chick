/* Social Science Primers · Migration Studies Unit 2 (e2u10) · Why people move */
ICA.addUnit({
  id:"e2u10", track:"e2", n:10, title:"Why people move", icon:"🧭",
  blurb:"The main theories of why people migrate, and why most people stay: Ravenstein’s “laws” and Lee’s push and pull, wages, households and labour markets, world-systems views, networks and migration systems, aspirations and capabilities, the migration hump, gender and care, environment and climate, trafficking and smuggling, and brain drain and brain gain. One invented village is seen through every lens.",
  goals:[
    "Explain Ravenstein’s laws and Lee’s model of push, pull, intervening obstacles and personal factors, and give the main critiques of push–pull thinking",
    "Compare neoclassical theory, the new economics of labour migration, dual labour market theory and historical-structural views, and say what each one sees and misses",
    "Explain how networks, chain migration and cumulative causation keep migration going, what a migration system is, and how de Haas’s aspirations–capabilities framework explains both moving and staying",
    "Describe the mobility transition and the migration hump, the evidence for and against it, and the arguments about brain drain and brain gain",
    "Explain how gender shapes migration (including global care chains), why “climate refugee” is not a legal category, and the legal difference between human trafficking and migrant smuggling"
  ],
  read:[
    {book:"imis", where:"Chapter 3 “Migration Drivers: Why Do People Migrate?” (Mathias Czaika and Constantin Reinprecht), Chapter 18 “Gender and Migration” (Eleonore Kofman and Parvati Raghuram) and Chapter 19 “Migration and Development” (AKM Ahsan Ullah)", note:"Open-access chapters by migration researchers. Read each after the matching lesson: they are academic in tone, and the lessons build the background they assume."},
    {book:"wmr", where:"Chapter 1 “Report overview: migration during a time of increasing disruption and distortion”", note:"IOM’s 2026 overview of current global patterns, for real-world context to the theories in this unit."},
    {book:"soc", where:"Chapter 20 “Population, Urbanization, and the Environment”, Section 20.1 “Demography and Population”", note:"A short, US-centred sociology introduction to migration, immigration and emigration, with a feature on migration crises at the US southern border (LibreTexts numbers it 20.2). It doesn’t cover migration theories; this unit does."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u10-l1", title:"Push, pull and the first “laws” of migration", minutes:50,
   hook:{q:"In 1885 a geographer studied census records of where people in the United Kingdom were born and where they lived. What did he find most migrants had done?", options:["Crossed an ocean to another continent","Moved a short distance, often to a nearby town","Moved from cities out to villages","Moved abroad as whole families"], answer:1, reveal:"**Most had moved only a short distance.** E. G. Ravenstein found that short moves to a nearby town or county far outnumbered long journeys, and that people often moved in steps. That pattern still fits a great deal of migration today. This lesson starts with his “laws”, then Everett Lee’s push–pull model, and then the reasons researchers say these ideas are only a starting point."},
   goals:[
     "Explain why there are many theories of migration, and use a running example to compare them",
     "Describe Ravenstein’s main “laws of migration” and what data they came from",
     "Use Lee’s model: factors at the origin and destination, intervening obstacles and personal factors",
     "Explain Lee’s predictions about streams, counter-streams and selection",
     "Give the main critiques of push–pull thinking"
   ],
   learn:[
    {h:"Why theories of migration?", body:[
      {lead:"Ask ten people why someone moved and you may hear ten answers: a job, a wedding, a war, a scholarship, a drought, a dream. Theories of migration look for the patterns underneath."},
      "In Unit 9 you met the people and the numbers: who counts as a [[migrant]], the difference between [[internal-migration|internal]] and international moves, and kinds of movement such as [[labour-migration|labour migration]] and [[forced-migration|forced migration]]. This unit asks the next question: **why** do people move, and why do most people, most of the time, stay where they are?",
      "There is no single answer and no single theory. Each theory works like a lens. It brings some causes into sharp focus and leaves others blurry. Some look at individuals weighing up wages. Others look at families sharing risks, employers recruiting workers, networks of friends, empires and world markets, or what people hope for and are able to do.",
      "You will meet them roughly in the order they were developed, each with its main criticisms. None of them is “the right one”: researchers usually combine several.",
      {ex:"To see the lenses side by side, this unit keeps returning to one place: **Riverbend**, a farming village of about 2,000 people, a day’s bus ride from the capital. Riverbend and its people are **invented**. They don’t stand for any real country; their story is put together from patterns researchers have found in many places, and real cases from around the world come alongside.\n\n**Nadia** (68) farms and has lived in Riverbend all her life. Her son **Sami** (22) is restless. Her daughter **Lina** (34) has two children and is thinking about a job abroad. Her niece **Hana** (19) wants to train as a nurse. Next door, **Omar** (25) would like to leave but can’t see how.", label:"Our running example (invented)"},
      {key:"No theory explains all migration. Each one answers a slightly different question, at a different scale: the person, the family, the labour market, the world economy."}
    ]},
    {h:"Ravenstein’s “laws of migration”", body:[
      "The first systematic attempt came from **Ernst Georg Ravenstein** (1834–1913), a German-born geographer who worked in London. In 1885 he published “The Laws of Migration” in the *Journal of the Statistical Society of London*. He used the 1881 census of the United Kingdom, which recorded where each person was born and where they were living.",
      "By comparing birthplaces with places of residence, he could see who had moved and how far. A second paper with the same title followed in 1889, adding data from other countries. He summed up the patterns as a set of “laws”. Later writers number them differently (often seven to eleven), but the main ones are these:",
      {table:[["Ravenstein’s pattern","What it means"],["Most migrants move short distances","Moves to the next town or county far outnumber long journeys"],["Migration happens in steps","People move from village to town, and later from town to city"],["Long-distance migrants head for big centres","Those who travel far usually go to major cities of trade and industry"],["Every stream has a counter-stream","Each main flow produces a smaller flow back the other way"],["Country people move more than town people","People born in rural areas were more likely to move"],["Women move more over short distances","Women more often moved within the country; men more often went abroad"],["Migration grows with industry and transport","Railways, factories and trade made moving easier and more common"],["The economic motive comes first","Most people moved to better themselves materially"]]},
      "In his 1889 paper Ravenstein accepted that bad laws, heavy taxes, an unattractive climate or unwelcoming surroundings all cause people to move. But he argued that none of them matched the wish of most people to better themselves in material terms.",
      {ex:"Sami doesn’t go straight to the capital. First he takes a job at a rice mill in the market town 30 km away. Two years later a friend tells him about work in the capital, and he moves again. That is Ravenstein’s [[step-migration|step migration]]. Meanwhile a few retired factory workers move back from the city to Riverbend: a small counter-stream.", label:"Riverbend"},
      {tip:"Ravenstein called them “laws”, but they are **generalisations** from data, not laws of nature. Several still fit well: far more people move within their own country than across borders (Unit 9). Others fit less well today; the gender pattern, for example, varies a lot between regions and routes. Even his “steps” were partly a ripple: people near a growing town move into it, and their places are filled by people from farther away."}
    ]},
    {h:"Lee’s theory of migration (1966)", body:[
      "Eighty years later the American demographer **Everett S. Lee** turned these patterns into a simple model in “A Theory of Migration”, published in the journal *Demography* in 1966. It is the model most people mean when they talk about [[push-pull|push and pull factors]].",
      "Lee said every decision to move involves four sets of factors:",
      {ol:[
        "**Factors at the origin**: things about the place you live now. Some hold people there (marked **+**: family land, a good school), some repel them (marked **−**: failed harvests, violence), and many make no difference either way (marked **0**).",
        "**Factors at the destination**: the same mix of pluses, minuses and zeros at the place you might go: jobs and higher wages, perhaps, but also high rents or loneliness.",
        "**[[intervening-obstacles|Intervening obstacles]]**: things in between that make the move harder: distance, the cost of the journey, borders, visa rules, laws on leaving or entering, a dangerous route.",
        "**Personal factors**: things about the person: age, health, family situation, skills, personality, and what they know about the other place."
      ]},
      {fig:'<svg viewBox="0 0 340 348"><defs><marker id="e2u10-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="70" y="28" text-anchor="middle">Origin</text><text x="270" y="28" text-anchor="middle">Destination</text><rect class="d-sage" x="8" y="40" width="124" height="160" rx="12" stroke-width="2"/><rect class="d-lup" x="208" y="40" width="124" height="160" rx="12" stroke-width="2"/><circle class="d-panel" cx="40" cy="78" r="14" stroke-width="1.5"/><text x="40" y="83" text-anchor="middle">+</text><circle class="d-panel" cx="96" cy="92" r="14" stroke-width="1.5"/><text x="96" y="97" text-anchor="middle">−</text><circle class="d-panel" cx="48" cy="130" r="14" stroke-width="1.5"/><text x="48" y="135" text-anchor="middle">0</text><circle class="d-panel" cx="100" cy="146" r="14" stroke-width="1.5"/><text x="100" y="151" text-anchor="middle">+</text><circle class="d-panel" cx="44" cy="176" r="14" stroke-width="1.5"/><text x="44" y="181" text-anchor="middle">−</text><circle class="d-panel" cx="240" cy="80" r="14" stroke-width="1.5"/><text x="240" y="85" text-anchor="middle">+</text><circle class="d-panel" cx="298" cy="96" r="14" stroke-width="1.5"/><text x="298" y="101" text-anchor="middle">0</text><circle class="d-panel" cx="246" cy="134" r="14" stroke-width="1.5"/><text x="246" y="139" text-anchor="middle">+</text><circle class="d-panel" cx="300" cy="150" r="14" stroke-width="1.5"/><text x="300" y="155" text-anchor="middle">−</text><circle class="d-panel" cx="252" cy="180" r="14" stroke-width="1.5"/><text x="252" y="185" text-anchor="middle">+</text><path class="d-gold" d="M138 200L152 120L166 200Z" stroke-width="2"/><path class="d-gold" d="M158 200L176 96L194 200Z" stroke-width="2"/><path class="d-ink" d="M112 66C148 6 192 6 228 64" fill="none" stroke-width="2" marker-end="url(#e2u10-l1-a)"/><text class="s" x="170" y="222" text-anchor="middle">Intervening</text><text class="s" x="170" y="238" text-anchor="middle">obstacles</text><rect class="d-panel" x="8" y="254" width="324" height="58" rx="10" stroke-width="1.5"/><text x="170" y="277" text-anchor="middle">Personal factors</text><text class="s" x="170" y="297" text-anchor="middle">age, health, family, skills, what you know</text><text class="s" x="170" y="336" text-anchor="middle">+ holds or attracts · − repels · 0 makes no difference</text></svg>', alt:"Lee’s model. Two boxes, Origin on the left and Destination on the right, each holding a mix of plus, minus and zero circles. Between them are two peaks labelled intervening obstacles, and an arrow arcs from origin over the obstacles to destination. Below, a box reads Personal factors: age, health, family, skills, what you know. A key says plus holds or attracts, minus repels, zero makes no difference.", cap:"Lee (1966): both places have pluses, minuses and neutral factors; obstacles lie between; personal factors decide how each person weighs them."},
      "Two details matter. First, people know the place they live much better than a place they might go, so what counts is what people **believe** about the destination, and that may be wrong. Second, the same factor can be a plus for one person and a minus for another: a busy city attracts Sami and frightens Nadia.",
      "Notice that Lee marks pluses at the origin too. Places don’t only push people out; they also hold them, with land, family, friends, language and familiarity. That is one reason most people never move."
    ]},
    {h:"What Lee predicted", body:[
      "Lee also offered **hypotheses**: predictions that research can test.",
      {list:[
        "**Volume.** More people move when places differ a lot, when people differ a lot, when obstacles are lower and when the economy is doing well. Without new obstacles, migration tends to grow over time.",
        "**Streams and counter-streams.** Migration follows well-defined routes, and each main stream produces a counter-stream: people returning, or others moving the other way.",
        "**Selection.** Migrants are not a random sample of people. Those answering strong attractions at the destination (a job offer, a university place) tend to be **positively selected**: more educated or skilled than average. Those reacting mainly to minuses at home tend to be negatively selected, and where the minuses are overwhelming, such as war or famine, there may be hardly any selection: whole groups may have to leave.",
        "**Turning points in life.** People are most likely to move at transitions: finishing school, marrying, starting work, retiring."
      ]},
      "These ideas still guide research. Young adults are the most mobile age group in the data of many countries. In China, hundreds of millions of people, most of them young, moved from villages to cities to work after the economic reforms that began in the late 1970s. In India’s census, marriage is the reason most women give for having moved: a life-stage move Lee would have recognised.",
      {ex:"Lina hears that families in a rich city overseas pay well for childcare (a destination plus). Her children’s school in Riverbend is good (an origin plus). The recruitment fee and the visa paperwork are large intervening obstacles. Her personal factors: she is experienced with children, speaks some of the language, and her mother can look after her own children. Lee’s model doesn’t tell us what she will decide, but it lists what she is weighing.", label:"Worked example: Lina’s decision through Lee’s eyes"}
    ]},
    {h:"The critiques", body:[
      "Lee’s model is clear, and it makes a useful checklist. But researchers have criticised push–pull thinking for decades:",
      {list:[
        "**A list, not an explanation.** It names factors but doesn’t say which matter most or how they combine. The geographer Ronald Skeldon called push–pull theory “a platitude at best”, and Hein de Haas argues it can’t explain why the same conditions lead some people to move and others to stay.",
        "**The poorest rarely move furthest.** If hardship pushed people out, the poorest would migrate most. Usually they don’t: moving costs money, contacts and documents. International migrants more often come from middle-income families and middle-income countries (Lesson 4).",
        "**Structures are missing.** It treats migration as individuals reacting to conditions. It leaves out the states that recruit or block migrants, employers who advertise abroad, the recruiters and brokers who organise journeys, and histories (such as colonial ties) that link particular places.",
        "**Push and pull blur together.** Low wages at home are a “push” only because higher wages exist somewhere else. The same fact can be described either way.",
        "**People as billiard balls.** The language of forces pushing and pulling can make migrants sound passive. Real migrants choose, plan, hesitate, bargain with their families and change their minds."
      ]},
      "Each of the theories in the next lessons tries to fill one of these gaps.",
      {warn:"Watch how “push” and “pull” are used in news and politics. A claim that a policy is a “pull factor” is a claim about cause and effect. Whether a particular policy actually changes how many people come is an empirical question that needs evidence, not just a label."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Poverty is the main cause of migration, so the poorest move most.","Moving costs money and needs contacts and documents. The very poorest often can’t move far."],["Ravenstein’s laws are fixed laws of nature.","They are 19th-century generalisations from census data. Many still fit; some don’t."],["Push–pull is a full theory of migration.","It is a useful checklist, but it doesn’t explain how factors combine or why most people stay."],["Places of origin only push people away.","Lee showed that origins also hold people, through land, family, community and familiarity."]]},
      {terms:["ravensteins-laws","step-migration","push-pull","intervening-obstacles","migration"]}
    ]}
   ],
   try:[
    {id:"e2u10-l1-x1", type:"mcq", q:"A study of one province finds that most people who left its villages moved to the nearest market towns, and most of the few who travelled far went to the capital. Which of Ravenstein’s patterns does this fit best?", options:[
      {t:"Most migrants move short distances, and long-distance migrants head for big centres.", ok:true, why:"Right. Short moves dominate, and the long-distance movers go to the biggest centre of trade and industry: two of Ravenstein’s best-known patterns."},
      {t:"Every stream produces a counter-stream.", why:"The study describes only flows out of the villages. Nothing here shows people moving back the other way."},
      {t:"Women move more than men over short distances.", why:"The study says nothing about who moved by sex, so it can’t show a gender pattern."},
      {t:"Town people move more than country people.", why:"That reverses Ravenstein’s pattern (he found rural people more likely to move), and the study only looks at people leaving villages anyway."}
    ]},
    {id:"e2u10-l1-x2", type:"sort", q:"Sort each part of Riverbend’s story into the right part of Lee’s model.", buckets:["Factor at the origin","Factor at the destination","Intervening obstacle","Personal factor"], items:[
      {t:"Riverbend’s harvests have failed three years running.", b:0, why:"A condition in the place where people live now: a minus at the origin."},
      {t:"Riverbend has a good primary school that Nadia’s grandchildren attend.", b:0, why:"Also a factor at the origin, but a plus: something that holds people in place. Lee’s model includes these."},
      {t:"A garment factory in the capital is hiring.", b:1, why:"An attraction at the place someone might go: a plus at the destination."},
      {t:"Rents in the capital are very high.", b:1, why:"A minus at the destination. Destinations have drawbacks as well as attractions."},
      {t:"The bus fare and a month’s rent in advance cost more than Sami has saved.", b:2, why:"The cost of getting there and getting started stands between the two places: an intervening obstacle."},
      {t:"A neighbouring country’s work visa takes months to get.", b:2, why:"Border rules and paperwork are classic intervening obstacles."},
      {t:"Sami is 22, unmarried and enjoys new experiences.", b:3, why:"Age, family situation and personality belong to the person, not the place."},
      {t:"Nadia is 68 and has never wanted to live in a city.", b:3, why:"Her age and preferences are personal factors: they shape how she weighs the same conditions differently from Sami."}
    ]},
    {id:"e2u10-l1-x3", type:"match", q:"Match each of Ravenstein’s patterns to the Riverbend example that shows it.", pairs:[
      ["Step migration","Sami works at the mill in the market town, then moves on to the capital","He moves in stages, village to town to city."],
      ["Counter-stream","Retired factory workers move back from the city to Riverbend","A smaller flow in the opposite direction to the main stream."],
      ["Most migrants move short distances","Most people who leave Riverbend go no farther than the market town","Short moves outnumber long ones."],
      ["Migration grows with transport","A new paved road and bus service make trips to town easier, and more people go","Better transport lowers the cost of moving, so more people move."],
      ["Long-distance migrants head for big centres","The few who go abroad go to two or three very large cities","Those who travel far go to major centres of work and trade."]
    ]},
    {id:"e2u10-l1-x4", type:"mcq", q:"Which of these is an **intervening obstacle** in Lee’s model?", options:[
      {t:"A passport fee and a long wait for a visa", ok:true, why:"Right. Costs and rules that stand between origin and destination are intervening obstacles."},
      {t:"Low wages in the home village", why:"That is a factor at the origin (a minus), not something between the two places."},
      {t:"Being 22 and unmarried", why:"That is a personal factor: it belongs to the person."},
      {t:"A factory in the city that is hiring", why:"That is a factor at the destination (a plus)."}
    ]},
    {id:"e2u10-l1-x5", type:"mcq", q:"A rich country starts recruiting nurses abroad with signed job offers. According to Lee’s idea of selection, the nurses who go will probably be…", options:[
      {t:"more educated and skilled than the average person in their home country", ok:true, why:"Right. People responding to strong attractions at the destination tend to be positively selected, and these jobs require a nursing qualification."},
      {t:"a random sample of the home population", why:"Lee’s point is that migrants are almost never a random sample; selection depends on why and how people move."},
      {t:"less educated than average, because only people with no options leave", why:"Lee expected negative or weak selection when people react mainly to minuses at home, such as war. A recruitment scheme with job offers for qualified nurses selects the other way."},
      {t:"mostly people over 65", why:"Recruitment targets working-age people, and Lee noted people move most at life transitions such as starting work."}
    ]},
    {id:"e2u10-l1-x6", type:"spot", q:"A student wrote this summary. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Push–pull thinking explains every migration completely.", flag:true, why:"Misleading. Critics argue push–pull lists factors without explaining how they combine or why many people stay."},
      " ",
      {t:"Lee’s 1966 model adds intervening obstacles, such as distance and borders,", flag:false, why:"Accurate. Obstacles between origin and destination are one of Lee’s four sets of factors."},
      " ",
      {t:"and personal factors, such as age and family situation.", flag:false, why:"Accurate. These are Lee’s fourth set of factors."},
      " Because hardship pushes people out, ",
      {t:"the poorest people in any country always migrate the most.", flag:true, why:"Inaccurate. Moving costs money, contacts and documents, so the very poorest often can’t move far."},
      " ",
      {t:"Places of origin only push; nothing holds people back home.", flag:true, why:"Inaccurate. Lee marks pluses at the origin too: land, family and community hold people in place."},
      " ",
      {t:"Ravenstein’s “laws” were generalisations from 19th-century census data.", flag:false, why:"Accurate. He compared birthplaces and residences in the 1881 census of the United Kingdom, and later data from other countries."}
    ]},
    {id:"e2u10-l1-x7", type:"mcq", q:"Omar is among the poorest people in Riverbend. Conditions at home are hard and he would like to leave, but he hasn’t. Which critique of push–pull thinking does his situation show?", options:[
      {t:"Strong “push” conditions don’t mean someone can move: migration needs resources such as money, contacts and documents.", ok:true, why:"Right. Push–pull predicts the worst-off should move most, but moving has costs that the poorest often can’t meet."},
      {t:"Ravenstein’s step migration only applies to cities.", why:"Step migration is about moving in stages; it isn’t the issue in Omar’s case."},
      {t:"Lee’s model ignores destinations.", why:"Lee’s model includes destination factors explicitly. The gap Omar shows is about resources to move."},
      {t:"Personal factors never matter.", why:"Lee’s model says personal factors do matter. The critique here is about the cost of moving."}
    ]}
   ],
   apply:{
    intro:"Try Lee’s checklist and its limits on real lives. Keep your notes private unless you choose to share them, and only include other people’s stories if they are happy for you to.",
    tasks:[
     {t:"Map one move with Lee’s model", how:[
       "Choose one move you know about: your own, a relative’s or friend’s (only if they’re happy to talk about it), or a character’s in a novel or film. It can be a move within a country.",
       "List the factors at the origin (pluses and minuses), the factors at the destination, the intervening obstacles and the personal factors.",
       "Mark which one or two factors seem to have mattered most, and note anything important that doesn’t fit the four boxes (for example a recruiter, a law or a family decision)."
     ], write:"The move… Origin + / −… Destination + / −… Obstacles… Personal factors… What mattered most… What doesn’t fit…"},
     {t:"Test a Ravenstein pattern", how:[
       "Think of a town or city you know. Where did most of the people who moved there come from: nearby areas or far away?",
       "If you can, look up one fact about it from a national statistics office or census page (for example, the share of residents born elsewhere), and note the source and year.",
       "Write whether Ravenstein’s “most migrants move short distances” seems to fit, and why it might or might not."
     ], write:"The place… Where newcomers seem to come from… Fact, source and year (if found)… Does the pattern fit?"},
     {t:"Find the push–pull words", how:[
       "Find one news story or social media post about migration that uses words like “push”, “pull”, “drawn by” or “driven out”.",
       "Write down the claim it makes about cause and effect.",
       "Note what evidence it gives for that claim, if any, and one factor it leaves out."
     ], write:"The story… The claim about causes… Evidence given… What’s missing…"}
    ],
    proof:"Notes mapping one real or fictional move onto Lee’s four sets of factors (with what didn’t fit), a quick test of one Ravenstein pattern against a place you know, and one news claim about push or pull with its evidence checked."
   },
   read:[
    {book:"imis", where:"Chapter 3 “Migration Drivers: Why Do People Migrate?” (Mathias Czaika and Constantin Reinprecht)", note:"Read it after this lesson: it explains why researchers moved from lists of push and pull factors to the idea of migration drivers and how they combine."},
    {book:"soc", where:"Chapter 20 “Population, Urbanization, and the Environment”, Section 20.1 “Demography and Population”", note:"Background reading: a short textbook introduction to migration, immigration and emigration, with examples mostly from the United States. It doesn’t use the terms push and pull or discuss migration theories. LibreTexts numbers it 20.2."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u10-l2", title:"Wages, households and labour markets", minutes:55,
   hook:{q:"A farming family earns enough to live on in a normal year. According to an influential 1985 theory, why might they still send one member to work in a city far away?", options:["Because the person who leaves always earns more than the whole family put together","To spread risk: if the harvest fails, money from the city keeps the family going","Because the theory says everyone in a village wants to leave","Because the government orders them to"], answer:1, reveal:"**To spread risk.** Oded Stark and David Bloom’s “new economics of labour migration” (1985) treats the household, not the individual, as the decision-maker. Like a farmer planting several crops, a family can place members in different jobs and places, so a bad harvest doesn’t ruin everyone. This lesson compares that idea with wage-gap theories, with employers’ demand for workers, and with views that look at the whole world economy."},
   goals:[
     "Explain neoclassical theory at the macro level (wage gaps) and the micro level (migration as an investment, expected income)",
     "Calculate expected income in the simple Harris–Todaro model",
     "Explain the new economics of labour migration: households, risk, remittances and relative deprivation",
     "Explain Piore’s dual labour market theory and why rich economies recruit migrant workers",
     "Describe historical-structural and world-systems views, and give one critique of each theory"
   ],
   learn:[
    {h:"The wage-gap view: neoclassical theory", body:[
      {lead:"Imagine water in two connected tanks at different levels. Open the valve and water flows from the higher tank to the lower one until the levels are even. The oldest economic theory of migration pictures workers and wages in much the same way."},
      "**[[neoclassical-migration-theory|Neoclassical migration theory]]** starts from differences in wages. Where workers are plentiful and capital (machines, factories, money to invest) is scarce, wages are low. Where workers are scarce and capital is plentiful, wages are high. So workers move from low-wage to high-wage places, and capital tends to move the other way.",
      "At the big-picture (**macro**) level, the economist W. Arthur Lewis described in 1954 how developing economies grow as workers move from a large, low-productivity farming sector into a modern industrial sector. Later models built on this to explain rural-to-urban and international migration.",
      "The theory predicts that as workers leave, wages at the origin rise (fewer workers) and wages at the destination fall or grow more slowly (more workers). In theory, migration should continue until the wage gap is no bigger than the cost of moving, and then stop."
    ]},
    {h:"The individual as investor", body:[
      "At the level of the individual (**micro**), neoclassical economists treat migration as an **investment in [[human-capital]]**: the skills, knowledge and health that let a person earn. Larry Sjaastad (1962) argued that people move when the expected future returns (higher earnings over the years) are bigger than the costs: the journey, the time without work, learning a new language, and the pain of leaving people behind.",
      "That explains why young adults move most: they have the most working years ahead in which to earn back the cost. It also predicts that people head for places where their own skills are paid best.",
      "Michael Todaro (1969), and then John Harris and Todaro (1970), added a twist. Rural people kept moving to cities even where many city dwellers had no job, because people compare the wage they **expect**, not just the wage on offer. Expected income is the city wage multiplied by the chance of actually getting a job.",
      {ex:"In Riverbend, Sami earns about **100** a month on the farm. Factory jobs in the capital pay **300** a month, but only **40%** of newcomers find one in their first year (the rest earn almost nothing).\n\nExpected city income = 300 × 0.40 = **120** a month.\n\nBecause 120 is more than 100, the simple model predicts Sami will move, even though most newcomers end up without a factory job. Raise the chance to 50% and the expected income becomes 150; cut it to 30% and it becomes 90, so he would stay.", label:"Worked example: expected income (the numbers are invented)"},
      {tip:"This is a simplification: real people also weigh living costs, informal work, help from relatives and how long they may wait for a job. But the core idea, that people move on **expected** gains, helps explain why cities keep growing despite high unemployment."},
      "Wage and income gaps do predict a lot of migration, and the model remains a useful baseline. But critics point out that the poorest countries don’t send the most migrants. Many people stay even where wages abroad are far higher. Migration often continues after wage gaps shrink. And the theory pictures lone individuals in free markets, with little room for families, states, borders, recruiters or networks."
    ]},
    {h:"The household decides: the new economics of labour migration", body:[
      "In 1985 the economists **Oded Stark and David Bloom** published “The New Economics of Labor Migration” in the *American Economic Review*. Their approach, often shortened to **NELM**, changed the question. Decisions to migrate, they argued, are usually made not by isolated individuals but by **households and families**, acting together.",
      "Families aren’t only trying to raise income; they are also trying to **spread risk**. In many rural areas there is no crop insurance, no unemployment benefit and no bank that will lend to a small farmer. A drought, a fall in crop prices or an illness can ruin a family. Placing one member in a city or abroad, where income doesn’t depend on the same weather or the same market, works like an insurance policy.",
      "The money migrants send home, [[remittances]] (Unit 11), is central to NELM. Remittances can pay for school fees, medical bills, seeds, a water pump or a small business, doing the job of the bank loan the family couldn’t get.",
      {ex:"After two bad harvests, Nadia’s family talks it through. Lina has childcare experience and a contact abroad, so the family borrows from relatives to pay her recruitment fee. Each month Lina sends part of her wage home. When the next drought comes, the family can still buy food and keep the children in school. Through NELM’s lens, Lina’s move was a **family strategy** to spread risk, not just a personal choice.", label:"Riverbend through the NELM lens"},
      "NELM explains things neoclassical theory struggles with: why people migrate even without a big wage gap, why many migrants send money home and plan to return, and why better local insurance or credit might reduce the need to migrate.",
      "Its critics point out that it can make households sound like happy, united teams. In real families, men and women, parents and children, older and younger siblings may want different things and have very different power to decide (Lesson 5). The theory has also mostly been applied to rural areas of lower-income countries."
    ]},
    {h:"Feeling poorer than the neighbours: relative deprivation", body:[
      "NELM adds one more idea. Oded Stark and J. Edward Taylor (1989) argued that what pushes a household to send a migrant is often not how poor it is in absolute terms, but how poor it **feels compared with others** in the same community. This is **[[relative-deprivation-migration|relative deprivation]]**.",
      "When some families in a village receive remittances and build new houses, the families without migrants may feel left behind, even if their own income hasn’t changed. That feeling can encourage them to send someone too. Migration can therefore spread through a community as income gaps open up inside it.",
      {ex:"Three families on Nadia’s street have built brick houses with money from abroad. Omar’s family hasn’t, and his mother says the street makes her feel poor for the first time. Their income is the same as five years ago. What has changed is the comparison.", label:"Riverbend"}
    ]},
    {h:"Rich economies need workers: the dual labour market", body:[
      "The first theories looked mostly at why people leave. The economist **Michael Piore** turned attention to destinations. In *Birds of Passage: Migrant Labor and Industrial Societies* (1979) he argued that international migration is driven largely by **demand**: rich economies have a permanent need for workers in certain jobs, and employers and governments recruit migrants to fill them.",
      "Piore’s **[[dual-labour-market|dual labour market]]** theory says that the labour market in industrial economies is split ([[segmented-labour-market|segmented]]) into two parts:",
      {table:[["Primary sector","Secondary sector"],["Secure, well-paid jobs with careers","Insecure, low-paid jobs with few prospects"],["Skilled office, professional and technical work","Farm work, cleaning, care, construction, food processing"],["High social status","Low social status"]]},
      "Why don’t employers just raise wages in the secondary sector? Piore gave three reasons. Wages signal status, so raising pay at the bottom would push up pay all the way up the ladder. Local workers often avoid low-status jobs, because in their own society the work they do shapes how others see them. And the groups who once filled these jobs in many rich countries, such as young people and women earning a second income, became fewer as education lengthened and more women took careers.",
      "Migrants who see their stay as temporary, aiming to earn and save for life back home (Piore’s “birds of passage”), may accept such jobs because they measure status by their home community, not the host society.",
      "West Germany signed recruitment agreements for [[guest-worker|“guest workers”]] with Italy (1955) and then other countries including Turkey (1961), until recruitment stopped in 1973. Gulf states recruit large numbers of workers from South and Southeast Asia and Africa, many under sponsorship systems such as [[kafala]] (Unit 11). Canada, New Zealand and Australia run seasonal farm-worker schemes with workers from Mexico, the Caribbean and the Pacific.",
      "Critics note that Piore’s theory explains demand but not which countries migrants come from, that many “temporary” workers settle, and that similar economies have very different immigration levels because of their policies."
    ]},
    {h:"The big picture: historical-structural and world-systems views", body:[
      "A last family of theories zooms right out. **Historical-structural** approaches see migration as produced by the unequal structure of the world economy and by history, especially [[colonialism]]. They build on [[dependency-theory|dependency theory]] and on Immanuel Wallerstein’s [[world-systems-theory|world-systems theory]], which you met in Unit 3 ({{theories-global-inequality}}): a core of rich countries, a periphery of poorer ones and a semi-periphery in between.",
      "In this view, migration isn’t mainly about individual choice. When [[capitalism]] spreads into rural areas, commercial farms buy up land, machines replace farm workers and local crafts lose out to imports. This uproots people from older ways of making a living and creates a mobile pool of workers.",
      "Old colonial ties left behind shared languages, schools and transport routes, which is part of why many migrants from Algeria, Morocco and Senegal went to France; from India, Pakistan and the Caribbean to the United Kingdom; and from Suriname and Indonesia to the Netherlands. The sociologist Saskia Sassen (1988) added that foreign investment and trade build links that later carry people; in her later work on “global cities” (1991) she argued that such cities need both highly paid professionals and many low-paid service workers.",
      "Stephen Castles and Godula Kosack’s *Immigrant Workers and Class Structure in Western Europe* (1973) took a similar line, arguing that recruited migrants were used as a flexible labour reserve.",
      "The critique: these views can make migrants look like pawns moved by global forces, with no choices of their own. They are hard to test, and they struggle to explain why most people in the periphery never migrate, or why migrants come from some regions much more than others."
    ]},
    {h:"Four lenses compared", body:[
      {fig:'<svg viewBox="0 0 340 372"><rect class="d-lup" x="8" y="8" width="324" height="80" rx="10" stroke-width="2"/><text x="20" y="32">The individual</text><text class="s" x="20" y="54">Neoclassical: is the expected gain</text><text class="s" x="20" y="72">bigger than the cost of moving?</text><rect class="d-sage" x="8" y="98" width="324" height="80" rx="10" stroke-width="2"/><text x="20" y="122">The household</text><text class="s" x="20" y="144">NELM: how can the family spread</text><text class="s" x="20" y="162">risk and pay for what it needs?</text><rect class="d-gold" x="8" y="188" width="324" height="80" rx="10" stroke-width="2"/><text x="20" y="212">Labour markets</text><text class="s" x="20" y="234">Dual labour market: which jobs do</text><text class="s" x="20" y="252">employers need filled, and by whom?</text><rect class="d-rose" x="8" y="278" width="324" height="80" rx="10" stroke-width="2"/><text x="20" y="302">The world economy</text><text class="s" x="20" y="324">Historical-structural: how do capital,</text><text class="s" x="20" y="342">colonial ties and trade link places?</text></svg>', alt:"Four stacked boxes from small scale to large. The individual: neoclassical theory asks whether the expected gain is bigger than the cost of moving. The household: NELM asks how the family can spread risk and pay for what it needs. Labour markets: dual labour market theory asks which jobs employers need filled and by whom. The world economy: historical-structural views ask how capital, colonial ties and trade link places.", cap:"Each economic theory looks at a different scale and asks a different question."},
      "The four theories aren’t simply rivals: one migration can involve all of them at once.",
      {table:[["Theory","Main cause of migration","Key thinkers","Main critique"],["Neoclassical","Wage gaps; expected income","Lewis, Sjaastad, Todaro, Harris","The poorest rarely move most; ignores families and states"],["NELM","Household risk-spreading and income","Stark, Bloom, Taylor","Pictures households as united teams"],["Dual labour market","Employers’ demand for low-status jobs","Piore","Says little about origins or policies"],["Historical-structural","Unequal world economy and colonial links","Wallerstein, Sassen, Castles","Migrants look like pawns; hard to test"]]},
      {ex:"Lina earns several times more abroad than at home (neoclassical). Her family planned her move to protect itself from failed harvests (NELM). She works in childcare, a low-status job that local workers in the rich city rarely take (dual labour market). She speaks the destination’s language because of an old colonial tie, and the land her family once rented was sold to an export farm (historical-structural).", label:"Lina through all four lenses"},
      {terms:["neoclassical-migration-theory","human-capital","new-economics-of-labour-migration","relative-deprivation-migration","dual-labour-market","segmented-labour-market","world-systems-theory"]}
    ]}
   ],
   try:[
    {id:"e2u10-l2-x1", type:"mcq", q:"Neoclassical theory predicts that if many workers leave a low-wage region for a high-wage one, wages will…", options:[
      {t:"tend to rise in the origin and grow more slowly in the destination, narrowing the gap", ok:true, why:"Right. Fewer workers at the origin push wages up; more workers at the destination slow wage growth. In theory, migration stops when the gap is no bigger than the cost of moving."},
      {t:"fall in the origin and rise in the destination, widening the gap", why:"That is the opposite of the theory’s prediction. Losing workers makes labour scarcer at the origin, which pushes wages up."},
      {t:"stay the same everywhere, because migration doesn’t affect wages", why:"In neoclassical theory, migration changes the supply of workers, and supply affects wages."},
      {t:"rise everywhere by the same amount", why:"The theory predicts a narrowing gap, not equal rises everywhere."}
    ]},
    {id:"e2u10-l2-x2", type:"number", q:"In the simple Harris–Todaro model, a farm worker earns 100 a month. City jobs pay 250 a month, but only half of newcomers (0.5) find one. What is the **expected** monthly income in the city?", answer:125, tol:0, unit:"a month", why:"Expected income = city wage × chance of getting a job = 250 × 0.5 = **125**. That is more than the 100 earned on the farm, so the model predicts a move, even though half of newcomers won’t find a job.", wrongs:[
      {v:250, tol:0, why:"250 is the wage on offer. The model multiplies it by the chance of actually getting the job (0.5)."},
      {v:150, tol:0, why:"150 is the gap between the city wage and the farm wage (250 − 100). The question asks for expected city income: 250 × 0.5."},
      {v:25, tol:0, why:"25 is the expected **gain** over the farm (125 − 100). The question asks for the expected city income itself, 125."},
      {v:50, tol:0, why:"This looks like 100 × 0.5, applying the chance to the farm wage. The chance of finding a job applies to the city wage: 250 × 0.5."}
    ], hint2:"Multiply the city wage by the chance of getting a job."},
    {id:"e2u10-l2-x3", type:"sort", q:"Which theory does each statement come from?", buckets:["Neoclassical","NELM","Dual labour market","Historical-structural"], items:[
      {t:"People move when the expected lifetime gain in earnings outweighs the cost of moving.", b:0, why:"Migration as an investment in human capital, weighed by an individual: the neoclassical micro view (Sjaastad, Todaro)."},
      {t:"Workers flow from places where labour is plentiful to where it is scarce until wage gaps close.", b:0, why:"The macro neoclassical picture of wages evening out between regions."},
      {t:"A family sends one member abroad so a failed harvest won’t ruin everyone.", b:1, why:"Risk-spreading by the household is the core of NELM (Stark and Bloom)."},
      {t:"A household sends a migrant because neighbours with remittances now seem much better off.", b:1, why:"Relative deprivation (Stark and Taylor) is part of NELM."},
      {t:"Employers in rich countries recruit migrants for low-status jobs that local workers avoid.", b:2, why:"Demand from the secondary sector of a segmented labour market is Piore’s argument."},
      {t:"Raising wages at the bottom would push up pay all the way up the job ladder, so employers look for new workers instead.", b:2, why:"This “structural inflation” is one of Piore’s reasons why demand for migrant labour persists."},
      {t:"Colonial history left shared languages and routes that still channel migrants to former colonial powers.", b:3, why:"Historical links between core and periphery are central to historical-structural views."},
      {t:"Commercial farms buying up land uproot rural people and create a mobile pool of workers.", b:3, why:"Capitalism spreading into the periphery, displacing older livelihoods, is a world-systems argument."}
    ]},
    {id:"e2u10-l2-x4", type:"mcq", q:"In Riverbend, the government introduces cheap, reliable crop insurance and a rural bank that lends to small farmers. What would **NELM** predict?", options:[
      {t:"Some households would feel less need to send a migrant, because the insurance and credit do part of the job migration did.", ok:true, why:"Right. NELM sees migration partly as a way around missing insurance and credit markets. Fill those gaps and one reason to migrate weakens."},
      {t:"Migration would rise sharply, because insured farmers can afford to leave their land.", why:"NELM’s logic runs the other way: if risk is already covered, the household needs a migrant less. (Other effects are possible, but this isn’t NELM’s main prediction.)"},
      {t:"Nothing would change, because NELM only looks at wage gaps.", why:"Wage gaps are the neoclassical focus. NELM looks at household risk and missing markets, which this policy changes directly."},
      {t:"Employers abroad would stop recruiting.", why:"Recruitment is about demand at the destination (the dual labour market view). The policy changes conditions in Riverbend, not abroad."}
    ]},
    {id:"e2u10-l2-x5", type:"match", q:"Match each thinker to the idea they are best known for in this lesson.", pairs:[
      ["Michael Todaro (with John Harris)","People move on expected income: the city wage times the chance of a job","Their models explained why rural–urban migration continues despite urban unemployment."],
      ["Oded Stark and David Bloom","The household spreads risk by placing members in different labour markets","Their 1985 article launched the new economics of labour migration."],
      ["Michael Piore","Rich economies have a permanent demand for workers in a secondary sector","*Birds of Passage* (1979) set out dual labour market theory."],
      ["Saskia Sassen","Investment and trade build links that later carry people; global cities need low-paid service workers","Her 1988 book linked capital flows and labour migration."],
      ["Larry Sjaastad","Migration is an investment in human capital, with costs and returns","His 1962 article framed moving as a cost–benefit decision over a lifetime."]
    ]},
    {id:"e2u10-l2-x6", type:"spot", q:"Tap each claim in this study note that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"NELM treats the household, not only the individual, as the unit that decides.", flag:false, why:"Accurate. That is NELM’s main move away from neoclassical theory."},
      " ",
      {t:"In NELM, the only goal of migration is to earn the highest possible wage.", flag:true, why:"Inaccurate. NELM stresses spreading risk and getting around missing credit and insurance markets, not only maximising income."},
      " ",
      {t:"Piore argued that demand in rich economies drives much international migration.", flag:false, why:"Accurate. Dual labour market theory is a demand-side theory."},
      " ",
      {t:"Historical-structural theories see migrants mainly as free individuals making market choices.", flag:true, why:"Inaccurate. That describes neoclassical theory. Historical-structural views stress global inequality and history, and critics say they underplay individual choice."},
      " ",
      {t:"Harris and Todaro used expected income to explain why people keep moving to cities with high unemployment.", flag:false, why:"Accurate. Expected income is the city wage times the chance of finding a job."},
      " ",
      {t:"Neoclassical theory correctly predicts that the poorest countries send the most emigrants.", flag:true, why:"Inaccurate. That is a well-known failure of simple wage-gap thinking: the poorest countries usually don’t have the highest emigration (Lesson 4)."}
    ]},
    {id:"e2u10-l2-x7", type:"mcq", q:"Which is a fair criticism of **historical-structural** (world-systems) theories of migration?", options:[
      {t:"They can make migrants look like pawns of global forces and struggle to explain why most people in poorer regions never move.", ok:true, why:"Right. Critics say these theories are strong on structures but weak on individual choice and on variation between people and places."},
      {t:"They ignore colonial history.", why:"The opposite: colonial history is central to them."},
      {t:"They assume every migrant is a rational individual maximising income.", why:"That assumption belongs to neoclassical theory, not historical-structural views."},
      {t:"They only study households in rural villages.", why:"That focus is closer to NELM. Historical-structural theories look at the whole world economy."}
    ]}
   ],
   apply:{
    intro:"Use the four economic lenses on real lives and real jobs. Keep notes private unless you choose to share them.",
    tasks:[
     {t:"Four lenses on one move", how:[
       "Take the move you mapped in Lesson 1, or choose another (your own, a family member’s who is happy to talk about it, or a character’s in a book or film).",
       "Write one sentence about it through each lens: neoclassical (wages and expected gains), NELM (family strategy and risk), dual labour market (what jobs were waiting) and historical-structural (wider links such as colonial history, trade or investment).",
       "Note which lens seems most useful for this move, and what none of them captures."
     ], write:"The move… Neoclassical… NELM… Dual labour market… Historical-structural… Most useful lens… What’s missing…"},
     {t:"Who does these jobs?", how:[
       "Think about three kinds of work in your area that are often low-paid or insecure, such as cleaning, farm work, care work, delivery or construction.",
       "Without asking anyone about their legal status or private life, note what you already know or can find in a reliable public source about who usually does this work (for example, a national statistics office or labour ministry report).",
       "Write whether Piore’s dual labour market idea seems to fit your area, and note the source and year of any figure you use."
     ], write:"Job 1… Job 2… Job 3… What the source says, with year… Does Piore’s idea fit?"},
     {t:"Try the expected-income model", how:[
       "Invent two numbers: a monthly wage in a village and a wage in a city.",
       "Try three different chances of finding a city job (for example 0.3, 0.5 and 0.7) and calculate the expected city income each time.",
       "Find the chance at which the expected city income equals the village wage, and write one thing the model leaves out."
     ], write:"Village wage… City wage… Expected income at 0.3 / 0.5 / 0.7… Break-even chance… What the model leaves out…"}
    ],
    proof:"One move described through all four economic lenses, notes on who does three kinds of low-paid work in your area (with a source and year for any figure), and three expected-income calculations with the break-even chance."
   },
   read:[
    {book:"imis", where:"Chapter 3 “Migration Drivers: Why Do People Migrate?” (Mathias Czaika and Constantin Reinprecht)", note:"Read it after this lesson for a researcher’s overview of how economic, social and political drivers combine."},
    {book:"imis", where:"Chapter 7 “Labour Migration” (Laura Oso, Paweł Kaczmarczyk and Justyna Salamońska)", note:"Read it for more on labour markets and labour migration policies."},
    {book:"soc", where:"Chapter 10 “Global Inequality”, Section 10.3 “Theoretical Perspectives on Global Stratification”", note:"Background reading on dependency and world-systems theory, the roots of historical-structural views of migration. LibreTexts numbers it 10.4."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u10-l3", title:"Networks, systems, aspirations and capabilities", minutes:55,
   hook:{q:"In Gallup’s 2023 world survey, about 16% of adults, or over 900 million people, said they would like to move to another country permanently if they could. Roughly how many international migrants are there in total (UN DESA, mid-2024), counting children and people who moved long ago?", options:["About 30 million","About 304 million","About 900 million","About 2 billion"], answer:1, reveal:"**About 304 million**, or 3.7% of the world’s people (UN DESA, International Migrant Stock 2024). The 900 million figure is Gallup World Poll’s estimate from its 2023 surveys (published 2024). The comparison is rough (a wish to move today against everyone already living abroad), but the point is clear: far more people wish to move than actually do. This lesson looks at what makes the difference: who you know, and what you are able to do."},
   goals:[
     "Explain what migration networks are and how they lower the costs and risks of moving",
     "Describe chain migration and cumulative causation, and the limits researchers have found",
     "Explain what a migration system is, with examples from several regions",
     "Use de Haas’s aspirations–capabilities framework, including its four types of mobility and immobility",
     "Explain why staying is as important to explain as moving"
   ],
   learn:[
    {h:"Who you know: migration networks", body:[
      {lead:"Think about moving to a city where you know nobody. Now imagine your cousin already lives there, has a spare mattress, knows which employers are hiring and can explain the bus system. The move is suddenly cheaper, safer and less frightening."},
      "That is the core of **network theory**. In their 1993 review of migration theories, Douglas Massey and colleagues described [[migration-network|migration networks]] as sets of personal ties (of family, friendship and a shared home community) that connect migrants, former migrants and non-migrants in places of origin and destination.",
      "These ties are a kind of **social capital**: resources that come from relationships. Through them flow information (where the jobs are, which recruiters to trust), practical help (a place to stay, a loan for the fare, help with forms) and emotional support. Each of these lowers the costs and risks of moving.",
      "Networks explain something wage-gap theories can’t: why migrants from one village end up concentrated in one city or even one neighbourhood or trade abroad. Massey’s team found this in Mexican communities and their migrants in the United States in the 1980s. Similar patterns link particular districts of Kerala in India with particular Gulf cities, villages in Senegal with towns in Italy and Spain, and islands in the Pacific with suburbs of Auckland and Sydney."
    ]},
    {h:"Chain migration", body:[
      "When each move makes the next one easier, migration forms a chain. In 1964 John and Leatrice MacDonald defined **[[chain-migration|chain migration]]** as movement in which people learn of opportunities, get help with the journey, and have their first housing and job arranged through personal relationships with earlier migrants.",
      {ex:"Lina found her childcare job through Rosa, a woman from the next village who had worked in the same city for five years. Rosa met her at the airport and let her share a room for her first month. A year later Lina helps her cousin get a job in a neighbouring household, and recommends a trusted recruiter to Omar’s sister. One link has become a chain.", label:"Riverbend"},
      {warn:"“Chain migration” has two meanings. In research, it describes how personal ties carry migration along. In some countries’ political debates the phrase is also used for family reunification visas, often with a negative tone. When you see it, check which meaning is intended."}
    ]},
    {h:"Cumulative causation: migration that feeds itself", body:[
      "The economist Gunnar Myrdal (1957) used the term **cumulative causation** for processes that reinforce themselves. Douglas Massey (1990) applied it to migration: each act of migration changes the social context in which later migration decisions are made, usually in ways that make further migration more likely. This is **[[cumulative-causation|cumulative causation]]**.",
      {fig:'<svg viewBox="0 0 340 384"><rect class="d-sage" x="10" y="36" width="96" height="56" rx="8" stroke-width="2"/><text x="58" y="69" text-anchor="middle">Riverbend</text><rect class="d-lup" x="234" y="36" width="96" height="56" rx="8" stroke-width="2"/><text class="s" x="170" y="22" text-anchor="middle">1. One pioneer moves</text><path class="d-ink" d="M106 64L274 64" fill="none" stroke-width="1.5"/><circle class="d-inkf" cx="282" cy="64" r="7"/><rect class="d-sage" x="10" y="148" width="96" height="56" rx="8" stroke-width="2"/><text x="58" y="181" text-anchor="middle">Riverbend</text><rect class="d-lup" x="234" y="148" width="96" height="56" rx="8" stroke-width="2"/><text class="s" x="170" y="134" text-anchor="middle">2. Relatives and friends follow</text><path class="d-ink" d="M106 176L256 162M106 176L302 162M106 176L256 190M106 176L302 190" fill="none" stroke-width="1.5"/><circle class="d-inkf" cx="262" cy="162" r="6"/><circle class="d-inkf" cx="308" cy="162" r="6"/><circle class="d-inkf" cx="262" cy="190" r="6"/><circle class="d-inkf" cx="308" cy="190" r="6"/><rect class="d-sage" x="10" y="260" width="96" height="72" rx="8" stroke-width="2"/><text x="58" y="301" text-anchor="middle">Riverbend</text><rect class="d-lup" x="234" y="260" width="96" height="72" rx="8" stroke-width="2"/><text class="s" x="170" y="246" text-anchor="middle">3. A network forms</text><path class="d-ink" d="M106 296L250 274M106 296L276 274M106 296L302 274M106 296L250 296M106 296L276 296M106 296L302 296M106 296L250 318M106 296L276 318M106 296L302 318" fill="none" stroke-width="1.2"/><circle class="d-inkf" cx="254" cy="274" r="5"/><circle class="d-inkf" cx="280" cy="274" r="5"/><circle class="d-inkf" cx="306" cy="274" r="5"/><circle class="d-inkf" cx="254" cy="296" r="5"/><circle class="d-inkf" cx="280" cy="296" r="5"/><circle class="d-inkf" cx="306" cy="296" r="5"/><circle class="d-inkf" cx="254" cy="318" r="5"/><circle class="d-inkf" cx="280" cy="318" r="5"/><circle class="d-inkf" cx="306" cy="318" r="5"/><text class="s" x="170" y="356" text-anchor="middle">Along each tie: news, loans, jobs, housing</text><text class="s" x="170" y="374" text-anchor="middle">Each tie lowers the cost for the next mover</text></svg>', alt:"Three rows, each with a Riverbend box on the left and a city box on the right. Row 1: one pioneer moves, a single line to one dot. Row 2: relatives and friends follow, four lines to four dots. Row 3: a network forms, nine lines to nine dots. Notes at the bottom: along each tie flow news, loans, jobs and housing; each tie lowers the cost for the next mover.", cap:"Network growth: each migrant makes the next move cheaper and safer, so flows can grow faster than wage gaps alone would predict."},
      "Massey and colleagues described several ways this happens:",
      {list:[
        "**Networks grow**: every new migrant gives more people at home a contact abroad.",
        "**Relative deprivation spreads**: remittance-built houses make families without migrants feel poorer (Lesson 2).",
        "**A culture of migration**: in some communities, going abroad becomes a normal step into adulthood, and staying can seem like a failure.",
        "**Land and farming change**: migrants may buy land but farm it less, or switch to machines, which reduces local jobs.",
        "**Jobs get labelled**: at the destination, some jobs become known as “migrant jobs”, so local workers avoid them and demand for migrants grows."
      ]},
      "But migration doesn’t grow for ever. Elizabeth Fussell and Douglas Massey (2004) found that cumulative causation was much weaker in large Mexican cities than in rural towns, because city people had other networks and options. Hein de Haas (2010) argued that network theories explain why migration continues but not why it slows or stops. Networks can also exclude: established migrants may act as gatekeepers, charge newcomers, or decide that their community abroad is “full”."
    ]},
    {h:"Migration systems", body:[
      "Zoom out from one village to whole regions and you get **[[migration-system|migration systems]]**. The Nigerian geographer **Akin Mabogunje** (1970) studied rural–urban migration in Africa as a system: villages and cities linked not only by people but by flows of money, goods, information and ideas, with **feedback**. News from city migrants shapes who leaves next.",
      "Later researchers, such as Mary Kritz, Lin Lean Lim and Hania Zlotnik in *International Migration Systems* (1992), applied the idea to groups of countries tied together by migration, trade, history and politics. Examples include:",
      {list:[
        "**The Gulf and South and Southeast Asia**: workers from India, Nepal, Bangladesh, Pakistan, Sri Lanka and the Philippines, and money flowing back.",
        "**Southern Africa**: a long history of workers from Lesotho, Mozambique, Malawi and elsewhere going to South Africa’s mines and farms.",
        "**West Africa**: dense movement between neighbouring countries, much of it seasonal or [[circular-migration|circular]].",
        "**North and Central America**: Mexico, Central America and the United States.",
        "**The Pacific**: Pacific Island countries linked with New Zealand and Australia through family, church, work schemes and visas."
      ]},
      "The systems idea reminds you that migration is never one-way traffic. It also connects with policy: states shape systems with visas, recruitment deals and free-movement zones (Unit 11).",
      "Critics, such as Oliver Bakewell, Hein de Haas and Agnieszka Kubal (2012), say systems theory is better at describing systems that already exist than at explaining how they begin, and that it overlooks the pioneer migrants who open new routes."
    ]},
    {h:"Wanting and being able: aspirations and capabilities", body:[
      "Why do hundreds of millions of adults say they would like to move abroad while far fewer do? The sociologist **Hein de Haas** offers a framework that puts two things at the centre. In “A theory of migration: the aspirations-capabilities framework” (*Comparative Migration Studies*, 2021) he argues that human mobility is best understood as people’s **capability (freedom) to choose where to live, including the option to stay**.",
      {list:[
        "**Migration aspirations** depend on people’s general life aspirations (what they want from life) and on what they believe they could find elsewhere. Education, media and the stories of migrants all shape these.",
        "**Migration capabilities** depend on two kinds of freedom (from the philosopher Isaiah Berlin): **negative liberty**, freedom *from* obstacles such as visa rules or exit bans, and **positive liberty**, the ability *to* act: money, skills, health, contacts and documents."
      ]},
      "The idea of capability comes from the economist **Amartya Sen**, who defined development as expanding people’s freedom to live the lives they have reason to value. De Haas applies this to mobility. Combining high or low aspirations with high or low capabilities gives four types:",
      {fig:'<svg viewBox="0 0 340 330"><text x="88" y="22" text-anchor="middle">Low capabilities</text><text x="252" y="22" text-anchor="middle">High capabilities</text><text class="s" x="170" y="44" text-anchor="middle">HIGH aspirations to move</text><rect class="d-rose" x="10" y="52" width="156" height="96" rx="10" stroke-width="2"/><text x="88" y="86" text-anchor="middle">Involuntary</text><text x="88" y="104" text-anchor="middle">immobility</text><text class="s" x="88" y="126" text-anchor="middle">(feeling trapped)</text><rect class="d-sage" x="174" y="52" width="156" height="96" rx="10" stroke-width="2"/><text x="252" y="86" text-anchor="middle">Voluntary</text><text x="252" y="104" text-anchor="middle">mobility</text><text class="s" x="252" y="126" text-anchor="middle">(most migration)</text><text class="s" x="170" y="172" text-anchor="middle">LOW aspirations to move</text><rect class="d-panel" x="10" y="180" width="156" height="110" rx="10" stroke-width="2"/><text x="88" y="218" text-anchor="middle">Acquiescent</text><text x="88" y="236" text-anchor="middle">immobility</text><text class="s" x="88" y="260" text-anchor="middle">(not able, not wanting)</text><rect class="d-lup" x="174" y="180" width="156" height="110" rx="10" stroke-width="2"/><text x="252" y="210" text-anchor="middle">Voluntary</text><text x="252" y="228" text-anchor="middle">immobility, and</text><text class="s" x="252" y="252" text-anchor="middle">involuntary mobility</text><text class="s" x="252" y="270" text-anchor="middle">(e.g. refugees)</text><text class="s" x="170" y="316" text-anchor="middle">After de Haas (2021), Table 1</text></svg>', alt:"A two by two grid. Columns: low capabilities and high capabilities. Rows: high and low aspirations to move. High aspirations with low capabilities: involuntary immobility, feeling trapped. High aspirations with high capabilities: voluntary mobility, most migration. Low aspirations with low capabilities: acquiescent immobility, not able and not wanting. Low aspirations with high capabilities: voluntary immobility, and involuntary mobility such as refugees.", cap:"De Haas’s four types. Refugees sit in the bottom-right cell: they had no real option to remain, so they moved without wanting to."},
      {list:[
        "**Voluntary mobility**: people who want to move and can. Most migration fits here.",
        "**[[involuntary-immobility|Involuntary immobility]]**: people who want to move but can’t. Jørgen Carling (2002) coined the term from research in Cape Verde, where many young people wished to emigrate but couldn’t get visas or money.",
        "**Acquiescent immobility**: people who neither want to move nor could (a term from Kerilyn Schewel).",
        "**Voluntary immobility**: people who could move but choose to stay. De Haas puts **involuntary mobility** in the same cell: refugees and others forced to leave had no real option to remain, though they didn’t aspire to move."
      ]}
    ]},
    {h:"Staying is part of the story", body:[
      "The framework’s biggest lesson is that **staying needs explaining too**. Most people never migrate across a border, and many who could choose not to. Earlier theories often treated staying as the normal case and moving as the puzzle; de Haas treats both as outcomes of the same aspirations and capabilities.",
      "It also explains a pattern you will meet in Lesson 4: development often **increases** migration at first, because education, roads and incomes raise both what people aspire to and what they are able to do.",
      {ex:"**Lina** wanted to move and had a contact and a loan: voluntary mobility. **Omar** wants to leave but has no money, no passport and no contacts: involuntary immobility. **Nadia** could move in with Sami in the city, and chooses to stay: voluntary immobility. An old farmer up the valley has never thought of leaving and couldn’t afford to: acquiescent immobility. If a flood forced families out of their homes, their move would be involuntary mobility.", label:"Riverbend through the aspirations–capabilities lens"},
      "Critics of the framework say aspirations are hard to measure (people tell surveys different things at different times), and that the four boxes can hide degrees of choice: many moves are partly chosen and partly forced. De Haas himself treats the categories as a way to think, not a rigid classification.",
      {key:"Migration happens when people both **want** to move and **are able** to. Change either one and you change who moves and who stays."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Once migration starts, it grows for ever.","Cumulative causation can weaken, especially where people have other options, and networks can exclude."],["People who stay are those who lack initiative.","Many stay by choice; others want to move but can’t. Both are “immobility”, for very different reasons."],["Networks only matter for [[irregular-migration|irregular migration]].","Networks matter for every kind of move, from students and nurses to seasonal workers and family migrants."],["Aspirations are the same as push factors.","Aspirations are what people want from life and believe they could find elsewhere; they rise with education and information, not only with hardship."]]},
      {terms:["migration-network","chain-migration","cumulative-causation","migration-system","aspirations-capabilities","involuntary-immobility"]}
    ]}
   ],
   try:[
    {id:"e2u10-l3-x1", type:"mcq", q:"Two villages are equally poor and equally far from the same city. Village A has 40 former residents working there; village B has none. What does network theory predict?", options:[
      {t:"More people will move from village A, because contacts lower the costs and risks of moving.", ok:true, why:"Right. Contacts provide information, housing and job leads, so the next move is cheaper and safer."},
      {t:"Equal numbers will move from both, because wages are the same.", why:"That is what a pure wage-gap view might predict. Network theory says who you know changes the costs and risks."},
      {t:"More people will move from village B, because it has more people left to go.", why:"Network theory predicts the opposite: lacking contacts makes moving harder."},
      {t:"Nobody will move from village A, because the city is already full of its people.", why:"Networks can sometimes saturate, but the basic prediction is that existing ties make further moves more likely."}
    ]},
    {id:"e2u10-l3-x2", type:"order", q:"Put these steps of **cumulative causation** in Riverbend in a typical order.", items:[
      {t:"A few pioneers leave for jobs in one city abroad.", why:"Someone has to go first, usually facing high costs and risks without contacts."},
      {t:"They send money and news home, and help the next people find work and housing.", why:"Remittances and information flow back along the new ties."},
      {t:"Moving becomes cheaper and less risky, so relatives and friends follow.", why:"The network lowers the cost for each new migrant."},
      {t:"As more families receive remittances, those without a migrant feel poorer by comparison and send someone too.", why:"Relative deprivation spreads the motive through the village."},
      {t:"Going abroad becomes a normal step into adult life in Riverbend.", why:"A culture of migration develops once many people have gone; it comes late in the process."}
    ]},
    {id:"e2u10-l3-x3", type:"sort", q:"Sort each person into de Haas’s types of mobility and immobility.", buckets:["Voluntary mobility","Involuntary immobility","Voluntary immobility","Acquiescent immobility"], items:[
      {t:"A student wins a scholarship and chooses to study abroad.", b:0, why:"She wants to move and is able to: voluntary mobility."},
      {t:"Lina wanted work abroad, had savings and a contact, and went.", b:0, why:"High aspirations and high capabilities: voluntary mobility."},
      {t:"Omar wants to work abroad but can’t afford the fees or get a visa.", b:1, why:"He wants to move but can’t: involuntary immobility (Carling’s term)."},
      {t:"A young woman longs to join her sister abroad but has no passport and no money for the trip.", b:1, why:"High aspirations, low capabilities: involuntary immobility."},
      {t:"Nadia could move in with her son in the city but prefers her life in Riverbend.", b:2, why:"She is able to move and chooses not to: voluntary immobility."},
      {t:"A doctor with a job offer abroad decides the life she has at home is the one she wants.", b:2, why:"High capabilities, low aspirations: voluntary immobility."},
      {t:"An elderly farmer in a remote village has never wanted to leave, and couldn’t afford to.", b:3, why:"Low aspirations and low capabilities: acquiescent immobility (Schewel’s term)."},
      {t:"A man in a poor district has never considered moving and has no money or contacts to do so.", b:3, why:"Neither wanting nor able to move: acquiescent immobility."}
    ]},
    {id:"e2u10-l3-x4", type:"match", q:"Match each concept to the example that shows it best.", pairs:[
      ["Chain migration","Lina’s first job and room abroad were arranged by Rosa, who came from the next village","Housing and work arranged through personal ties with an earlier migrant."],
      ["Cumulative causation","After many leave, going abroad becomes a normal step into adulthood in the village","Each act of migration changes the context so that more migration follows."],
      ["Migration system","Workers, money, goods and news flow back and forth between South Asia and the Gulf","A set of places linked by flows of people and much else, with feedback."],
      ["Involuntary immobility","A young man wants to emigrate but can’t get a visa or raise the fare","Wanting to move but lacking the capability to do so."],
      ["Relative deprivation","A family sends a son abroad after neighbours build houses with remittances","Feeling poorer compared with others, not poorer in absolute terms."]
    ]},
    {id:"e2u10-l3-x5", type:"mcq", q:"What did Fussell and Massey (2004) find about cumulative causation in Mexico?", options:[
      {t:"It was much weaker in large cities than in rural towns, because city people had other networks and options.", ok:true, why:"Right. Their study showed limits to cumulative causation: in urban areas, migration networks mattered less."},
      {t:"It worked equally strongly everywhere.", why:"Their finding was precisely that it didn’t: it was weaker in large urban areas."},
      {t:"It only applied to refugees.", why:"Their study was about labour migration from Mexican communities, not refugees."},
      {t:"Networks had no effect anywhere.", why:"Networks mattered, especially in rural towns. The finding was about where their effect weakened."}
    ]},
    {id:"e2u10-l3-x6", type:"mcq", q:"In de Haas’s framework, why does he place refugees in the same cell as people who choose to stay (low aspirations, high capabilities)?", options:[
      {t:"Because refugees did not aspire to move but had no real option to remain, so they moved involuntarily.", ok:true, why:"Right. De Haas calls this involuntary mobility: the person moved, but not because they wanted to."},
      {t:"Because refugees don’t really need protection.", why:"Nothing in the framework says that. It only describes the mix of aspiration and capability, and stresses that refugees were forced."},
      {t:"Because refugees are usually rich.", why:"The framework isn’t about wealth. Refugees come from every income group; the point is that they had no option to stay."},
      {t:"Because all migrants are voluntary.", why:"The framework explicitly includes involuntary mobility and involuntary immobility."}
    ]},
    {id:"e2u10-l3-x7", type:"spot", q:"Tap each claim in this summary that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Migration networks are ties of family, friendship and community that link migrants and non-migrants.", flag:false, why:"Accurate. This follows Massey and colleagues’ 1993 description."},
      " ",
      {t:"Networks lower the costs and risks of moving.", flag:false, why:"Accurate. They provide information, housing, job leads and loans."},
      " ",
      {t:"Once a network exists, migration from that place always keeps growing.", flag:true, why:"Misleading. Research shows cumulative causation can weaken (for example in big cities), networks can exclude, and flows slow or stop."},
      " De Haas argues that ",
      {t:"staying is the normal case and needs no explanation.", flag:true, why:"Inaccurate. De Haas argues that staying needs explaining just as much as moving: both come from aspirations and capabilities."},
      " ",
      {t:"Mabogunje studied rural–urban migration in Africa as a system with feedback.", flag:false, why:"Accurate. His 1970 article is a founding text of migration systems theory."},
      " ",
      {t:"Carling’s term “involuntary immobility” describes people who want to move but can’t.", flag:false, why:"Accurate. Carling (2002) developed it from research in Cape Verde."}
    ]}
   ],
   apply:{
    intro:"Look for networks and for staying, not only moving. Keep notes private unless you choose to share them, and never ask anyone about their legal status.",
    tasks:[
     {t:"Draw a network", how:[
       "Pick one move you know about (your own, a family member’s who is happy to talk about it, or a character’s in a book or film).",
       "Draw the person in the middle and the people who helped them: with information, money, housing, a job or emotional support. Draw a line for each tie.",
       "Note which tie mattered most, and whether that person later helped someone else move."
     ], write:"The move… Who helped, and how… The most important tie… Did the chain continue?"},
     {t:"Place people in de Haas’s grid", how:[
       "Think of four people you know of (real people, described only in general terms, or characters from fiction).",
       "For each, ask: do they want to move? Are they able to? Place each one in a cell of the grid.",
       "Note one case that doesn’t fit neatly, and why."
     ], write:"Person 1… cell… Person 2… cell… Person 3… cell… Person 4… cell… The case that doesn’t fit…"},
     {t:"Spot a migration system", how:[
       "Choose a pair or group of places linked by migration (for example, using the examples in this lesson, or a corridor you read about).",
       "List four kinds of flow between them besides people: money, goods, ideas, media, visas, flights, religious or sports ties.",
       "Note one source you used and its date."
     ], write:"The places… Flow 1… 2… 3… 4… Source and date…"}
    ],
    proof:"A drawn network of the ties behind one move, four people placed in the aspirations–capabilities grid (with one awkward case explained), and a list of four non-human flows linking places in one migration system, with a dated source."
   },
   read:[
    {book:"imis", where:"Chapter 3 “Migration Drivers: Why Do People Migrate?” (Mathias Czaika and Constantin Reinprecht)", note:"Read its discussion of aspirations, capabilities and drivers after this lesson."},
    {book:"imis", where:"Chapter 4 “Migration Infrastructures: How Do People Migrate?” (Düvell and Preiss)", note:"Read it for how networks, brokers, transport and technology make migration possible."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u10-l4", title:"Development, the migration hump and brain drain", minutes:50,
   hook:{q:"Compare countries at different income levels today. Which group tends to have the largest share of its people living abroad?", options:["The poorest countries","Middle-income countries","The richest countries","There is no pattern at all"], answer:1, reveal:"**Middle-income countries.** Across countries, emigration is usually highest not in the poorest places but in those at middle levels of income, and lower again in the richest. Researchers call this shape the **migration hump**. Moving costs money and needs education and contacts, which the poorest often lack. This lesson explains the idea, the evidence and a live debate about what it means for any one country over time, and then looks at the arguments over brain drain and brain gain."},
   goals:[
     "Describe Zelinsky’s mobility transition and how it links to the demographic transition",
     "Explain the migration hump, the reasons behind it and the evidence for it",
     "Explain the debate between cross-country and within-country evidence on the hump",
     "Explain brain drain, brain waste, brain gain and brain circulation, with evidence on each side",
     "Describe the WHO code on recruiting health workers"
   ],
   learn:[
    {h:"A puzzle: does development reduce migration?", body:[
      {lead:"Many people assume that if poorer countries became richer, fewer of their people would leave. It sounds like common sense. Migration research suggests the story is more complicated."},
      "Think about what moving abroad requires: money for the journey and the fees, a passport, perhaps a visa, some education, information about where to go, and often a contact who is already there. The poorest households and countries are least likely to have these. As incomes, schooling and roads improve, more people gain the **capability** to move, and often the **aspiration** too (Lesson 3).",
      "So development can increase migration before it reduces it. This lesson looks at two ideas that describe that pattern, Zelinsky’s mobility transition and the migration hump, and at the evidence and the arguments about them."
    ]},
    {h:"Zelinsky’s mobility transition (1971)", body:[
      "The geographer **Wilbur Zelinsky** proposed “The Hypothesis of the Mobility Transition” in the *Geographical Review* in 1971. He linked changes in mobility to the [[demographic-transition|demographic transition]] you met in Unit 4: as societies modernise, the kinds of movement change in a regular sequence. This is the **[[mobility-transition|mobility transition]]**.",
      {table:[["Phase","What happens to mobility"],["I. Pre-modern traditional society","Little permanent migration; mostly local movement for farming, trade or religion"],["II. Early transitional society","Large moves from countryside to cities, to farming frontiers, and abroad"],["III. Late transitional society","Rural–urban migration and emigration slow down; short, repeated trips grow"],["IV. Advanced society","Most moves are between and within cities; immigrants arrive to fill jobs; lots of circulation"],["V. Future “super-advanced” society","Better communication may replace some trips; most moves are between cities"]]},
      "The model fits the history of countries such as those of western Europe in the 19th and 20th centuries reasonably well: mass emigration during industrialisation, then immigration later. Several countries, for example Italy, Spain, Ireland and the Republic of Korea, went from sending many emigrants to receiving many immigrants within a few decades.",
      "Like the demographic transition, it is a broad pattern, not a fixed law. Critics say it is based mainly on European history, suggests every country follows one path, and says little about forced migration or about how policies shape each phase."
    ]},
    {h:"The migration hump", body:[
      "In the 1990s the economist **Philip Martin**, studying how freer trade between Mexico and the United States might affect migration, used the term **[[migration-hump|migration hump]]**: development and trade could increase emigration in the short run, before reducing it in the long run.",
      {fig:'<svg viewBox="0 0 340 310"><defs><marker id="e2u10-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><path class="d-ink" d="M40 236L40 40" fill="none" stroke-width="2" marker-end="url(#e2u10-l4-a)"/><path class="d-ink" d="M40 236L326 236" fill="none" stroke-width="2" marker-end="url(#e2u10-l4-a)"/><text x="48" y="34">Emigration</text><text x="183" y="258" text-anchor="middle">Income per person</text><path class="d-rose" d="M48 226C110 218 140 76 182 76C224 76 254 176 318 204" fill="none" stroke-width="3"/><circle class="d-inkf" cx="182" cy="76" r="5"/><text x="182" y="62" text-anchor="middle">Middle income: peak</text><text class="s" x="52" y="176">Poorest: few</text><text class="s" x="52" y="192">can afford to go</text><text class="s" x="322" y="158" text-anchor="end">Richer: fewer</text><text class="s" x="322" y="174" text-anchor="end">leave, more arrive</text><text class="s" x="170" y="284" text-anchor="middle">A pattern across countries; what happens</text><text class="s" x="170" y="300" text-anchor="middle">inside one country over time is debated</text></svg>', alt:"A graph with emigration on the vertical axis and income per person on the horizontal axis. A curve starts low on the left (poorest: few can afford to go), rises to a peak in the middle (middle income: peak) and falls on the right (richer: fewer leave, more arrive). A note says it is a pattern across countries, and what happens inside one country over time is debated.", cap:"The migration hump: emigration tends to be highest at middle incomes."},
      "The evidence for the hump comes mostly from comparing countries. The economist **Michael Clemens** has studied it in detail. In a 2020 paper, “The Emigration Life Cycle”, he found that emigration tends to rise as income per person grows in poor countries, slows after roughly US$5,000 a year (measured in purchasing power parity, [[purchasing-power-parity|PPP]]), and falls after roughly US$10,000. He reported the same pattern in historical data from before 1914, at lower income levels.",
      "Why the hump? Researchers point to several things that change together as poorer countries develop:",
      {list:[
        "**Capabilities rise**: more households can afford the journey and fees.",
        "**Aspirations rise**: education, media and links abroad widen what people hope for and know about.",
        "**Demography**: falling child deaths followed later by falling births create a large generation of young adults, the age group most likely to move.",
        "**Structural change**: as farming modernises, fewer workers are needed on the land, and many move to cities or abroad.",
        "**Later, the gap narrows**: as incomes at home approach those abroad, fewer people find it worth leaving."
      ]}
    ]},
    {h:"The debate: across countries or over time?", body:[
      "There is a catch. A pattern **across countries** at one moment doesn’t automatically tell you what will happen **within one country** as it grows over time. A [[cross-sectional]] snapshot of many countries is not a record of change. Assuming it is resembles the [[ecological-fallacy|ecological fallacy]] you may have met in the Research Skills track: a pattern at one level doesn’t automatically hold at another.",
      "Researchers disagree here. Clemens (2020) argued that the hump also appears within countries over time. Claas Schneiderheinze and David Benček, in *World Development* (2024), found the hump in cross-country data, but their panel estimates, which follow countries over time, showed emigration to rich OECD countries **falling** as incomes rose, whatever the starting level. They added that slower changes, such as more education and demographic change, might still raise migration over the long run.",
      "Why does this matter? Some governments and aid programmes aim to reduce migration by addressing its “root causes” through development. If the hump holds within countries, faster growth in poor countries may increase emigration for some years. If the panel results are right, higher incomes may reduce it. Either way, the effects found are gradual, and many researchers stress that development matters for its own sake, not only for any effect on migration.",
      {tip:"When you read “aid will stop migration” or “development will increase migration”, ask: is the evidence a comparison of countries, or does it follow countries over time? Over how many years?"}
    ]},
    {h:"Brain drain", body:[
      "**[[brain-drain|Brain drain]]** means the emigration of highly skilled or educated people, seen as a loss for the country they leave. The phrase became popular in Britain in the 1960s, when many scientists left for North America. Today it is used most often about poorer countries losing doctors, nurses, engineers and teachers.",
      "The concern is real. Training a doctor costs a country a great deal, and if many leave, clinics may have no one to staff them. Small states, and countries with few health workers to begin with, feel it most. The World Health Assembly adopted the voluntary **WHO Global Code of Practice on the International Recruitment of Health Personnel** in 2010. It encourages ethical recruitment and support for health systems, and WHO publishes a list (the Health Workforce Support and Safeguards List) of countries with severe health-worker shortages, from which active international recruitment is discouraged.",
      "There is also **[[brain-waste|brain waste]]**: skilled migrants working in jobs far below their training because their qualifications aren’t recognised or they can’t get a work permit in their field. A surgeon cleaning offices is a loss to both the country she left and the one she lives in."
    ]},
    {h:"Brain gain and brain circulation", body:[
      "Since the late 1990s, economists have argued that the picture isn’t only one of loss. **[[brain-gain|Brain gain]]** is the idea that the chance to emigrate can increase the skills available at home.",
      {list:[
        "**The incentive effect.** If some people can earn far more abroad with a qualification, more people study for it. Not all of them leave, so the home country can end up with more skilled people than before. Andrew Mountford (1997) and Michel Beine, Frédéric Docquier and Hillel Rapoport (2001) set out this argument.",
        "**Evidence from nursing.** Paolo Abarcar and Caroline Theoharides (2024) studied how changes in US visa rules for nurses affected the Philippines. Nursing enrolment and graduation rose sharply, and they estimated about nine additional nurses were licensed for each nurse who emigrated. But the quality of training, measured by licensing-exam pass rates, fell.",
        "**Remittances and knowledge.** Skilled migrants send money home, and may send ideas, contacts and investment too.",
        "**Brain circulation.** Many skilled migrants return, or move back and forth. The economic geographer AnnaLee Saxenian described engineers who worked in the United States and then helped build technology industries in places such as Taiwan, India and China."
      ]},
      "So is skilled emigration good or bad for the country of origin? Researchers broadly agree that **it depends**: on how many skilled people leave compared with those who stay, on the sector (losing half of a small country’s surgeons is different from losing a share of a large country’s engineers), on whether migrants return or stay connected, and on policies in both countries.",
      {ex:"A new paved road and a secondary school reach Riverbend. Over the next decade, more young people finish school, and more of them leave for the capital and abroad, not fewer: the start of a hump. Hana trains as a nurse, partly because she knows nurses can find work abroad. Three of her classmates emigrate; she and four others stay and staff the new district clinic. For Riverbend, is that brain drain or brain gain? The honest answer is: some of each.", label:"Riverbend"},
      {terms:["mobility-transition","migration-hump","brain-drain","brain-gain","brain-waste","human-capital"]}
    ]}
   ],
   try:[
    {id:"e2u10-l4-x1", type:"order", q:"Put Zelinsky’s phases of the mobility transition in order, earliest first.", items:[
      {t:"Little permanent migration; mostly local movement", why:"Phase I, the pre-modern traditional society."},
      {t:"Large moves from countryside to cities and abroad", why:"Phase II, the early transitional society, when emigration and rural–urban migration surge."},
      {t:"Rural–urban migration and emigration slow; short repeated trips grow", why:"Phase III, the late transitional society."},
      {t:"Most moves are between cities; immigrants arrive to fill jobs", why:"Phase IV, the advanced society."},
      {t:"Better communication may replace some trips", why:"Phase V, Zelinsky’s speculative future “super-advanced” society."}
    ]},
    {id:"e2u10-l4-x2", type:"mcq", q:"A low-income country builds roads and schools, and incomes rise steadily for twenty years. According to the **migration hump** idea, what is likely in the first years?", options:[
      {t:"Emigration rises, because more people can afford to move and more aspire to.", ok:true, why:"Right. At low incomes, development raises both capabilities and aspirations, so emigration usually goes up before it comes down."},
      {t:"Emigration falls immediately, because people are better off at home.", why:"That is the common assumption the hump challenges. For poor countries, rising incomes often increase emigration at first."},
      {t:"Emigration stops completely.", why:"No theory predicts that. Even in the richest countries, some people emigrate."},
      {t:"Only immigration changes; emigration stays the same.", why:"The hump is about emigration rising and later falling as incomes grow."}
    ]},
    {id:"e2u10-l4-x3", type:"mcq", q:"A chart shows that middle-income countries today have higher emigration than poor or rich ones. Kenji concludes: “So when any poor country gets richer, its emigration will definitely rise for a while.” What is the best response?", options:[
      {t:"Not necessarily: a pattern across countries doesn’t prove what happens within one country over time, and researchers disagree on this point.", ok:true, why:"Right. Clemens (2020) argued the hump holds over time too, but Schneiderheinze and Benček (2024) found emigration falling with income in panel data. Reading within-country change off a cross-country chart is a mistake of levels, like the ecological fallacy."},
      {t:"Yes: a cross-country chart proves exactly what each country will do.", why:"Cross-country patterns can differ from what happens inside each country over time. That is why researchers also use panel data."},
      {t:"No: the chart proves emigration will fall immediately.", why:"The chart shows a pattern across countries; it can’t prove a single country’s future in either direction."},
      {t:"Charts can’t say anything about migration.", why:"The chart is real evidence about differences between countries. The issue is what it can and can’t tell you."}
    ]},
    {id:"e2u10-l4-x4", type:"sort", q:"Is each situation an example of brain drain, brain gain (or circulation), or brain waste?", buckets:["Brain drain","Brain gain or circulation","Brain waste"], items:[
      {t:"A small country loses most of its few specialist doctors to jobs abroad.", b:0, why:"Skilled people leaving faster than they can be replaced is the classic brain drain worry."},
      {t:"Rural clinics lose nurses to recruiters from rich countries and can’t replace them.", b:0, why:"A loss of skilled workers that harms services at home: brain drain."},
      {t:"The chance of working abroad leads more young people to train as nurses, and many of them stay.", b:1, why:"The incentive effect: migration prospects raise the stock of skills at home."},
      {t:"Engineers who worked abroad return and start companies at home.", b:1, why:"Brain circulation: skills and contacts gained abroad come back."},
      {t:"Migrant scientists keep collaborating with universities in their country of origin.", b:1, why:"Knowledge and contacts flowing back, even without return, are part of the gain side."},
      {t:"A trained surgeon works as a cleaner abroad because her qualification isn’t recognised.", b:2, why:"Her skills are unused in both countries: brain waste."},
      {t:"A qualified teacher drives a taxi abroad while waiting years for his certificate to be accepted.", b:2, why:"Skilled work lost while qualifications go unrecognised: brain waste."}
    ]},
    {id:"e2u10-l4-x5", type:"match", q:"Match each researcher to the idea or finding from this lesson.", pairs:[
      ["Wilbur Zelinsky","The mobility transition: types of movement change as societies modernise","His 1971 hypothesis linked mobility to the demographic transition."],
      ["Philip Martin","The term “migration hump” for a short-run rise in emigration with development and trade","He used it in the 1990s, writing about trade between Mexico and the United States."],
      ["Michael Clemens","Emigration rises with income in poor countries, slows and later falls","His 2020 “Emigration Life Cycle” paper put the turning points at roughly PPP$5,000 and PPP$10,000."],
      ["Schneiderheinze and Benček","Panel data showing emigration to the OECD falling as incomes rise","Their 2024 study challenged reading the cross-country hump as a within-country path."],
      ["Abarcar and Theoharides","More nurses were licensed in the Philippines when US demand for nurses grew","Their 2024 study found about nine additional licensed nurses per emigrant, with lower exam pass rates."]
    ]},
    {id:"e2u10-l4-x6", type:"spot", q:"Tap each claim in this opinion column that is **inaccurate or unsupported** by the research in this lesson.", ask:"inaccurate or unsupported", parts:[
      {t:"Sending more aid will quickly stop people from emigrating.", flag:true, why:"Unsupported. The hump suggests development can raise emigration at first in poor countries; even studies that find a fall over time describe slow effects."},
      " ",
      {t:"Across countries, emigration tends to be highest at middle incomes.", flag:false, why:"Accurate. That cross-country pattern is the migration hump."},
      " ",
      {t:"Skilled emigration is always pure loss for the country of origin.", flag:true, why:"Overstated. Evidence on incentive effects, remittances and circulation shows gains as well as losses; researchers say “it depends”."},
      " ",
      {t:"The WHO has a voluntary code on the ethical international recruitment of health workers.", flag:false, why:"Accurate. The World Health Assembly adopted it in 2010."},
      " ",
      {t:"Zelinsky’s model proves every country must follow the same five phases.", flag:true, why:"Inaccurate. It is a hypothesis based mostly on European history; critics stress that countries follow different paths."}
    ]},
    {id:"e2u10-l4-x7", type:"mcq", q:"What is the **WHO Global Code of Practice on the International Recruitment of Health Personnel**?", options:[
      {t:"A voluntary code adopted by the World Health Assembly in 2010 that promotes ethical recruitment and support for health systems with shortages", ok:true, why:"Right. It is voluntary, not a treaty, and WHO publishes a list of countries with severe shortages from which active international recruitment is discouraged."},
      {t:"A binding treaty that bans nurses and doctors from working abroad", why:"The Code doesn’t ban anyone from migrating; health workers keep the right to move. It guides recruiters and governments."},
      {t:"A rule that only applies to doctors in Europe", why:"The Code is global and covers health personnel of all kinds."},
      {t:"A 1951 agreement about refugee doctors", why:"It dates from 2010 and is about recruitment of health workers generally, not refugees."}
    ]}
   ],
   apply:{
    intro:"Look at the evidence behind claims about development and skills. Keep notes private unless you choose to share them.",
    tasks:[
     {t:"Look up one migration statistic", how:[
       "Go to the Migration Data Portal (migrationdataportal.org) or UN DESA’s International Migrant Stock pages and choose one country you are curious about.",
       "Note how many of its people live abroad, or how many immigrants live there, with the source and year.",
       "Where would you place the country on the migration hump? Write why, and what else you would need to know to be sure."
     ], write:"Country… Figure… Source and year… Where on the hump, and why… What else I’d need…"},
     {t:"Weigh brain drain and brain gain for one profession", how:[
       "Choose one skilled profession (for example nursing, medicine, engineering or teaching) and one country or region.",
       "List two possible losses and two possible gains from skilled emigration in that case, using the ideas in this lesson.",
       "Write what evidence would help decide which side is bigger."
     ], write:"Profession and place… Losses… Gains… Evidence that would help…"},
     {t:"Check a “root causes” claim", how:[
       "Find one news story, speech or report that says development or aid will reduce (or increase) migration.",
       "Write down the claim and any evidence it gives.",
       "Ask: is the evidence a comparison of countries, or does it follow countries over time? Over how many years?"
     ], write:"The claim… Evidence given… Cross-country or over time?… My verdict…"}
    ],
    proof:"One migration figure with its source and year and a reasoned place on the migration hump, a balanced list of losses and gains from skilled emigration in one profession, and one “root causes” claim checked for the kind of evidence behind it."
   },
   read:[
    {book:"imis", where:"Chapter 19 “Migration and Development” (AKM Ahsan Ullah)", note:"Read it after this lesson for more on remittances, brain drain and the migration–development debate."},
    {book:"wmr", where:"Part I “Key data and information on migration and migrants”", note:"Use it to look up current figures for the countries you are curious about; check the year of each figure."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u10-l5", title:"Gender, climate and coercion", minutes:60,
   hook:{q:"Is “climate refugee” a legal status under the 1951 Refugee Convention?", options:["Yes, it has been since 1951","Yes, it was added by the Paris Agreement in 2015","No: the Convention’s definition doesn’t include environmental reasons, though some people displaced in that context can still qualify on other grounds","Only for people from small island states"], answer:2, reveal:"**No.** The 1951 Convention protects people outside their country who fear persecution for reasons of race, religion, nationality, membership of a particular social group or political opinion. Environmental change isn’t on that list, so “climate refugee” is not a legal category, even though the phrase is common in the news. Some people fleeing disasters may still qualify, for example where persecution or conflict is also involved, and most people who move because of environmental change stay inside their own country. This lesson explains that, along with how gender shapes migration and the legal difference between trafficking and smuggling."},
   goals:[
     "Explain how gender shapes who migrates, why and how, and what the “feminisation of migration” does and doesn’t mean",
     "Describe global care chains and their critiques",
     "Explain how environmental change shapes mobility, why most of it is internal, why “climate refugee” is not a legal category, and what planned relocation is",
     "Tell human trafficking from migrant smuggling using the two 2000 Palermo Protocols",
     "Compare what each theory in this unit sees and misses in one community"
   ],
   learn:[
    {h:"Gender shapes who moves, how and why", body:[
      {lead:"Ask who leaves a village, who stays, who decides and who looks after whom, and you quickly find that gender is part of every answer."},
      "[[gender|Gender]] means the social roles, expectations and power that societies attach to being a woman, a man or another gender (Unit 3). It shapes migration at every step: who is expected to provide for a family and who to care for it; which jobs recruiters offer to whom; who controls the household’s money; and which visas and labour laws apply to which jobs.",
      "Some examples:",
      {list:[
        "**Marriage and family.** In India’s census, marriage is the reason most women give for having moved, usually within the country.",
        "**Gendered jobs.** Construction recruitment to the Gulf is overwhelmingly of men; domestic and care work, there and in East Asia, Europe and the Americas, employs many women from the Philippines, Indonesia, Sri Lanka, Ethiopia, Latin America and elsewhere. Many migrating nurses are women too (Lesson 4).",
        "**Those who stay.** When men migrate, women who stay often run farms and households and make decisions they didn’t make before. Migration can change gender roles at home, though not always in the same direction."
      ]},
      "Gender research also challenged NELM’s picture of the united household (Lesson 2). Who decides that a daughter will go abroad, and who spends the money she sends? Researchers found that households are places of negotiation, and sometimes conflict, as well as cooperation.",
      {warn:"Avoid two stereotypes: women migrants as passive followers of husbands, and women migrants as victims. Many women migrate on their own, as workers, students and family heads, and make bold decisions. Some face serious risks; both are true."}
    ]},
    {h:"“Feminisation” of migration, with nuance", body:[
      "From the 1990s, books such as Stephen Castles and Mark Miller’s *The Age of Migration* (first edition 1993) described a **[[feminisation-of-migration|feminisation of migration]]** as one of the big trends of the age.",
      "It does **not** mean that women suddenly became most international migrants. According to UN DESA, women and girls were just under half (48%) of all international migrants in mid-2024. Globally, the number of male migrants has recently grown faster than the number of women, mainly because of men moving for work to Northern Africa and Western Asia. In Europe, Northern America and Latin America and the Caribbean, their share has stayed at about half since 1990.",
      "What researchers mean is mostly a change in **how** women migrate and in **who notices**: more women migrating independently as workers, often as the main earner for their family, in jobs such as care, domestic work and nursing; and a research field that stopped treating migrants as men by default.",
      {tip:"When you see “feminisation of migration”, ask: does the writer mean women’s share of migrants (which has stayed close to half for decades), or women’s growing role as independent labour migrants (the better-supported meaning)?"}
    ]},
    {h:"Global care chains", body:[
      "The sociologist **Arlie Russell Hochschild** coined the term **[[global-care-chain|global care chain]]** in a 2000 essay, “Global Care Chains and Emotional Surplus Value”. She described a series of personal links between people across the globe based on the paid or unpaid work of caring.",
      "Her example drew on the research of Rhacel Salazar Parreñas, who studied Filipina domestic workers in Rome and Los Angeles (*Servants of Globalization*, 2001). A woman migrates to care for a family’s children in a rich city. Her own children are cared for by a relative, or by a poorer woman she pays at home, who may in turn leave her own children with an older daughter. Hochschild argued that the benefits of this care are unequally shared.",
      {ex:"In the rich city, Lina looks after two children so their parents can work long hours. In Riverbend, Nadia looks after Lina’s two children. Lina pays a neighbour’s teenage daughter to help Nadia with the farm. Three women, two countries, one chain of care, much of it unpaid or low-paid.", label:"Riverbend’s care chain"},
      "Critics and later researchers broadened the idea. Eleonore Kofman and Parvati Raghuram argued that care chains are wider than mothers and nannies: they include nurses, care-home workers and teachers, men as well as women, and care for older people as well as children. Others warned that focusing on “left-behind” children can make migrant mothers sound like bad mothers, when fathers’ absence is rarely judged the same way."
    ]},
    {h:"Environment and climate: how they shape movement", body:[
      "Droughts, floods, storms, rising seas, land degradation and heat all affect where people can live and work. **[[environmental-migration|Environmental migration]]** is IOM’s term for people moving, temporarily or permanently, within their country or abroad, mainly because sudden or gradual changes in the environment harm their lives or living conditions. **[[climate-mobility|Climate mobility]]** is a broad umbrella for movement linked to climate change.",
      "Three points matter most:",
      {list:[
        "**Environment rarely acts alone.** A drought becomes a reason to move when it combines with poverty, debt, lack of irrigation, insecure land rights or conflict: one driver among several.",
        "**Most movement is internal and short-distance.** People usually move to a nearby town or region, often temporarily. The Internal Displacement Monitoring Centre (IDMC) counted 29.9 million internal displacements caused by disasters in 2025, most of them from storms (GRID 2026). That figure counts movements, so one person displaced twice counts twice.",
        "**Some can’t move at all.** The UK government’s Foresight report (2011) warned of **[[trapped-population|trapped populations]]**: people too poor or too constrained to leave places that are becoming more dangerous. This is involuntary immobility again (Lesson 3)."
      ]},
      "Some people do move across borders after disasters, and low-lying atolls face very serious long-term threats. But the picture of huge waves of “climate refugees” crossing oceans is misleading: most climate-related mobility happens close to home."
    ]},
    {h:"Why “climate refugee” isn’t a legal category", body:[
      "A [[refugee]] under the [[refugee-convention|1951 Refugee Convention]] (Unit 11) is a person outside their country who has a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion. Environmental change isn’t one of those reasons, and a flood or drought is not usually persecution. That is why the Migration Data Portal calls “climate refugee” “not a legally valid term”, and why agencies prefer phrases such as “people displaced in the context of disasters and climate change”.",
      "That doesn’t mean such people have no protection. Some may qualify as refugees where a disaster combines with persecution or conflict. Regional definitions are wider: the [[oau-refugee-convention|1969 OAU Convention]] in Africa and the [[cartagena-declaration|1984 Cartagena Declaration]] in Latin America include events that seriously disturb public order, which some lawyers argue can cover some disaster situations. Human rights law also limits returning people to serious harm.",
      "In 2020 the UN Human Rights Committee published its views on the case of Ioane Teitiota, a man from Kiribati whom New Zealand had returned home. It found that New Zealand hadn’t violated his right to life in his case, but said that, without strong national and international action, the effects of climate change could expose people to rights violations that would make sending them back unlawful.",
      "Under the Falepili Union treaty between Australia and Tuvalu (signed 2023, in force since August 2024), a ballot offers Tuvaluans a pathway to permanent residence in Australia; the first ballot, in 2025, offered up to 280 places.",
      "**[[planned-relocation|Planned relocation]]** is the organised move of a whole community, usually as a last resort. In 2014 the village of Vunidogoloa in Fiji moved about two kilometres inland and uphill after seawalls failed to stop erosion and saltwater, and in 2018 Fiji adopted national Planned Relocation Guidelines. Researchers have documented hundreds of planned relocations around the world; done badly, they can break communities apart, so consultation and consent matter."
    ]},
    {h:"Trafficking and smuggling: two different crimes", body:[
      "Trafficking and smuggling are different crimes, defined in two protocols adopted by the UN General Assembly on 15 November 2000 alongside the UN Convention against Transnational Organized Crime, and often called the **Palermo Protocols**.",
      "**[[human-trafficking|Trafficking in persons]]** has three elements: an **act** (recruiting, transporting, transferring, harbouring or receiving people), a **means** (threat or use of force or other coercion, abduction, fraud, deception, abuse of power or of a position of vulnerability, or payments to someone in control of the person) and a **purpose**: **exploitation**, such as sexual exploitation, forced labour, slavery or the removal of organs.",
      {fig:'<svg viewBox="0 0 340 412"><defs><marker id="e2u10-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="4" y="4" width="332" height="236" rx="12" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">Human trafficking</text><rect class="d-rose" x="12" y="42" width="94" height="132" rx="8" stroke-width="2"/><text x="59" y="64" text-anchor="middle">Act</text><text class="s" x="59" y="86" text-anchor="middle">recruit,</text><text class="s" x="59" y="102" text-anchor="middle">transport,</text><text class="s" x="59" y="118" text-anchor="middle">transfer,</text><text class="s" x="59" y="134" text-anchor="middle">harbour or</text><text class="s" x="59" y="150" text-anchor="middle">receive</text><rect class="d-gold" x="123" y="42" width="94" height="132" rx="8" stroke-width="2"/><text x="170" y="64" text-anchor="middle">Means</text><text class="s" x="170" y="86" text-anchor="middle">force,</text><text class="s" x="170" y="102" text-anchor="middle">coercion,</text><text class="s" x="170" y="118" text-anchor="middle">fraud,</text><text class="s" x="170" y="134" text-anchor="middle">deception,</text><text class="s" x="170" y="150" text-anchor="middle">abuse of</text><text class="s" x="170" y="166" text-anchor="middle">vulnerability</text><rect class="d-lup" x="234" y="42" width="94" height="132" rx="8" stroke-width="2"/><text x="281" y="64" text-anchor="middle">Purpose</text><text class="s" x="281" y="102" text-anchor="middle">exploitation</text><path class="d-ink" d="M106 108L121 108" fill="none" stroke-width="2" marker-end="url(#e2u10-l5-a)"/><path class="d-ink" d="M217 108L232 108" fill="none" stroke-width="2" marker-end="url(#e2u10-l5-a)"/><text class="s" x="170" y="198" text-anchor="middle">For children, no “means” is needed</text><text class="s" x="170" y="218" text-anchor="middle">Can happen inside one country</text><rect class="d-panel" x="4" y="252" width="332" height="156" rx="12" stroke-width="1.5"/><text x="170" y="276" text-anchor="middle">Migrant smuggling</text><rect class="d-sage" x="12" y="288" width="316" height="62" rx="8" stroke-width="2"/><text class="s" x="170" y="310" text-anchor="middle">Procuring someone’s illegal entry into a</text><text class="s" x="170" y="326" text-anchor="middle">country they aren’t a national or resident of,</text><text class="s" x="170" y="342" text-anchor="middle">for a financial or other material benefit</text><text class="s" x="170" y="374" text-anchor="middle">Always crosses a border</text><text class="s" x="170" y="394" text-anchor="middle">Not defined by exploitation</text></svg>', alt:"Two panels. Human trafficking: three boxes linked by arrows. Act: recruit, transport, transfer, harbour or receive. Means: force, coercion, fraud, deception, abuse of vulnerability. Purpose: exploitation. Notes: for children, no means is needed; can happen inside one country. Migrant smuggling: procuring someone’s illegal entry into a country they aren’t a national or resident of, for a financial or other material benefit. Notes: always crosses a border; not defined by exploitation.", cap:"The two Palermo Protocols (2000) define trafficking by act, means and purpose, and smuggling by illegal entry for profit."},
      "Where any of those means is used, the victim’s **consent** to the intended exploitation is irrelevant. For **children** (anyone under 18), no means is needed at all: recruiting or moving a child for exploitation is trafficking. And trafficking **doesn’t require crossing a border**; it can happen entirely inside one country.",
      "**[[migrant-smuggling|Migrant smuggling]]** is defined in the Smuggling Protocol as procuring someone’s illegal entry into a country of which they are not a national or permanent resident, to obtain a financial or other material benefit. It always involves crossing a border, and the migrant usually agrees to it. The Protocol says migrants shall not become liable to criminal prosecution **under the Protocol** for having been smuggled, and asks states to protect smuggled migrants’ rights, including the right to life.",
      {table:[["","Trafficking","Smuggling"],["Core of the crime","Exploiting a person","Procuring illegal entry for profit"],["Border crossing","Not required","Always"],["Consent","Irrelevant if means are used; never relevant for children","The migrant usually agrees"]]},
      "The two can overlap. A journey that starts as smuggling can turn into trafficking if, on arrival, people are held, deceived or forced to work off an inflated debt. Neither protocol changes the right to seek asylum: the Trafficking Protocol states that it doesn’t affect states’ obligations under international law, including the principle of [[non-refoulement]] (Unit 11).",
      {warn:"Don’t call a person “illegal”, and don’t assume every irregular migrant was trafficked or every smuggled migrant is a criminal. Use the precise term, and if you or someone you know may be in danger, contact local emergency services or a trusted support organisation."}
    ]},
    {h:"Riverbend through every lens", body:[
      "Each lens in this unit is true to part of Riverbend’s story; none tells all of it.",
      {table:[["Lens","What it sees in Riverbend","What it can miss"],["Ravenstein and Lee","Sami’s short, step-by-step move; pluses and minuses","How factors combine; why Omar can’t go"],["Neoclassical","Wage gaps and expected income","Families, states, networks"],["NELM","Lina’s move as family risk-spreading","Conflict and power inside the family"],["Dual labour market","Demand for care workers abroad","Why Riverbend, and not elsewhere"],["Historical-structural","Land sold to an export farm; old colonial ties","People’s own choices"],["Networks and systems","Rosa’s help; the chain that follows","Why flows slow or stop"],["Aspirations and capabilities","Who wants to go, who can, who stays","Moves that are partly chosen, partly forced"],["Gender and care","Lina’s care chain; Nadia’s unpaid work","Needs other lenses for causes"],["Environment","Droughts as one driver among many","Isn’t a separate legal category"]]},
      {key:"Good explanations of migration combine lenses: people with hopes and abilities, inside families and networks, shaped by labour markets, history, gender, environment and the law."},
      {terms:["feminisation-of-migration","global-care-chain","environmental-migration","climate-mobility","trapped-population","planned-relocation","human-trafficking","migrant-smuggling"]}
    ]}
   ],
   try:[
    {id:"e2u10-l5-x1", type:"mcq", q:"Which statement about women in international migration is best supported by UN DESA’s figures for 2024?", options:[
      {t:"Women and girls were just under half of international migrants, and the number of male migrants has recently grown faster.", ok:true, why:"Right. UN DESA reports 48% women and girls in 2024, with male migration growing faster, mainly to Northern Africa and Western Asia."},
      {t:"Women are now a large majority of international migrants.", why:"Not according to UN DESA: women and girls were 48% in 2024. “Feminisation” mostly refers to how women migrate, not a majority."},
      {t:"Women migrate almost only as wives following husbands.", why:"Many women migrate independently as workers, students and family heads; that change is what “feminisation” usually describes."},
      {t:"Women’s share of international migrants has doubled since 1990.", why:"It has stayed close to half for decades; it hasn’t doubled."}
    ]},
    {id:"e2u10-l5-x2", type:"mcq", q:"Priya works abroad as a nurse in a care home. Her mother looks after Priya’s son at home, and pays a neighbour to help with the cooking. Which concept fits best?", options:[
      {t:"A global care chain", ok:true, why:"Right. Care work passes along a chain of people across borders: Priya cares abroad, her mother cares at home, and a neighbour is paid to help. Kofman and Raghuram stress that chains include nurses and care homes, not only nannies."},
      {t:"Brain gain", why:"Brain gain is about skills increasing at home because of migration prospects. This scenario is about who provides care, and where."},
      {t:"Planned relocation", why:"Planned relocation is the organised move of a whole community, usually because of environmental risk."},
      {t:"Migrant smuggling", why:"Nothing here involves procuring illegal entry. Priya is a care worker with a job abroad."}
    ]},
    {id:"e2u10-l5-x3", type:"sort", q:"Under the two 2000 Palermo Protocols, is each statement true of **trafficking** (not smuggling) or of **smuggling** (not trafficking)?", buckets:["Trafficking","Smuggling"], items:[
      {t:"It can happen entirely inside one country.", b:0, why:"Trafficking doesn’t require crossing a border."},
      {t:"It always involves crossing an international border.", b:1, why:"Smuggling is defined around illegal entry into another country."},
      {t:"Its purpose is always exploitation.", b:0, why:"Exploitation is the purpose element of trafficking."},
      {t:"It is defined as procuring someone’s illegal entry for a financial or other material benefit.", b:1, why:"That is the Smuggling Protocol’s definition."},
      {t:"For a child, it applies even if no force, fraud or deception was used.", b:0, why:"Under the Trafficking Protocol, no means is needed when the victim is under 18."},
      {t:"Exploitation is not part of its legal definition.", b:1, why:"The Smuggling Protocol defines smuggling by illegal entry for profit. Trafficking, by contrast, always has exploitation as its purpose."},
      {t:"Its protocol says migrants shall not be prosecuted under it for having been its object.", b:1, why:"That is Article 5 of the Smuggling Protocol. (Other rules protect trafficking victims, but this wording is the Smuggling Protocol’s.)"}
    ]},
    {id:"e2u10-l5-x4", type:"mcq", q:"A headline says: “Thousands of climate refugees granted refugee status under the 1951 Convention because of rising seas.” What is the main problem with it?", options:[
      {t:"The 1951 Convention doesn’t list environmental reasons, so rising seas alone don’t make someone a refugee under it.", ok:true, why:"Right. “Climate refugee” isn’t a legal category. Some people displaced in such contexts may qualify for other reasons (such as persecution or conflict), or get other forms of protection, but not because of rising seas alone."},
      {t:"Nothing: the Paris Agreement added climate refugees to the Convention.", why:"The Paris Agreement didn’t change the refugee definition."},
      {t:"The problem is only the number; the legal claim is correct.", why:"The legal claim is the problem: environmental change isn’t a Convention ground."},
      {t:"Only internally displaced people can be refugees.", why:"The opposite: a refugee under the Convention must be outside their country. People displaced within their country are IDPs."}
    ]},
    {id:"e2u10-l5-x5", type:"mcq", q:"Riverbend suffers a severe drought. Based on research on environmental mobility, which outcome is **most likely**?", options:[
      {t:"Some people move, mostly to nearby towns and often temporarily, while some of the poorest can’t move at all.", ok:true, why:"Right. Most environment-related movement is internal and short-distance, environmental stress combines with other drivers, and some people are trapped."},
      {t:"The whole village emigrates to another continent within weeks.", why:"Long-distance international moves are the exception. Most people move nearby, if they move."},
      {t:"Nobody moves, because the environment never affects migration.", why:"Environmental change clearly affects mobility, usually alongside other factors."},
      {t:"Everyone who leaves becomes a refugee under the 1951 Convention.", why:"A drought isn’t a Convention ground, and people who stay in their own country can’t be Convention refugees."}
    ]},
    {id:"e2u10-l5-x6", type:"match", q:"Match each lens to what it notices most in Riverbend.", pairs:[
      ["NELM","Lina’s family planned her move to protect itself from failed harvests","The household spreading risk is NELM’s focus."],
      ["Dual labour market","Families in the rich city need care workers that local workers rarely become","Demand for low-status jobs at the destination is Piore’s focus."],
      ["Networks","Rosa found Lina her first job and room","Personal ties lowering costs and risks are network theory’s focus."],
      ["Aspirations and capabilities","Omar wants to go but can’t; Nadia could go but stays","Wanting and being able, including staying, are de Haas’s focus."],
      ["Gender and care","Nadia looks after Lina’s children while Lina cares for others’ children","Care chains and gendered roles are the focus of gender research."]
    ]},
    {id:"e2u10-l5-x7", type:"spot", q:"Tap each claim in this news paragraph that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Human trafficking can take place without anyone crossing a border.", flag:false, why:"Accurate. Trafficking can happen entirely within one country."},
      " ",
      {t:"Smuggling and trafficking are just two words for the same crime.", flag:true, why:"Inaccurate. They are defined separately: trafficking by act, means and exploitative purpose; smuggling by procuring illegal entry for profit."},
      " ",
      {t:"Most people who move because of environmental change stay within their own country.", flag:false, why:"Accurate. Most environment-related movement is internal and short-distance."},
      " ",
      {t:"Under the 1951 Convention, anyone fleeing a flood is automatically a refugee.", flag:true, why:"Inaccurate. Environmental reasons aren’t Convention grounds; some people may qualify for other reasons, but not automatically."},
      " ",
      {t:"Fiji adopted national guidelines on planned relocation in 2018.", flag:false, why:"Accurate. Fiji’s Planned Relocation Guidelines date from 2018."},
      " ",
      {t:"Women have recently become a large majority of the world’s international migrants.", flag:true, why:"Inaccurate. UN DESA puts women and girls at 48% in 2024."}
    ]}
   ],
   apply:{
    intro:"Bring the whole unit together. Keep notes private unless you choose to share them, never ask anyone about their legal status, and only interview someone who agrees, who can skip any question, and without recording unless they consent.",
    tasks:[
     {t:"Spot the framing in one migration story", how:[
       "Find one news story about climate and migration, or about trafficking or smuggling.",
       "Check its words: does it say “climate refugee”, “illegal”, or mix up trafficking and smuggling? Note each term and whether it is used precisely.",
       "Write which theory or theories from this unit the story seems to assume, and one voice or fact it leaves out."
     ], write:"The story… Terms used and whether they’re precise… Theories it assumes… What’s missing…"},
     {t:"Map a care chain (optional, with consent)", how:[
       "With a friend or family member who agrees to talk about it, or using a family from a novel, film or documentary, map who cares for whom when someone moves for work.",
       "Draw the chain: who does paid care, who does unpaid care, and where each person is.",
       "Note how gender shapes the chain, and one way it could be organised differently."
     ], write:"The family (real with consent, or fictional)… The chain… Paid and unpaid care… How gender shapes it…"},
     {t:"Explain one move with three lenses", how:[
       "Choose one migration you know well (from your notes in earlier lessons, a real case you read about, or fiction).",
       "Explain it in three short paragraphs, each using a different lens from this unit.",
       "Finish with one sentence on what you understand now that one lens alone would have missed."
     ], write:"The move… Lens 1… Lens 2… Lens 3… What combining them shows…"}
    ],
    proof:"One migration news story checked for precise terms and assumed theories, a care chain map (fictional or shared with consent), and one migration explained through three lenses with a sentence on what combining them adds."
   },
   read:[
    {book:"imis", where:"Chapter 18 “Gender and Migration” (Eleonore Kofman and Parvati Raghuram)", note:"Read it after this lesson for a fuller account of gender, care and social reproduction in migration."},
    {book:"imis", where:"Chapter 12 “Irregular Migration” (Sarah Spencer and Anna Triandafyllidou)", note:"Read it for how irregularity is produced by rules and how smuggling fits in."}
   ]
  }
  ],
  checkpoint:["e2u10-q02","e2u10-q05","e2u10-q11","e2u10-q14","e2u10-q20","e2u10-q23","e2u10-q26","e2u10-q31","e2u10-q34","e2u10-q38","e2u10-q41","e2u10-q44"],
  codex:[
   {id:"why-people-move", title:"Why people move: theories of migration", aka:["migration theory","theories of migration","migration drivers"], tags:["migration","theory","foundations"],
    summary:"A map of the main theories of why people migrate and why most stay, each working at a different scale, and why researchers combine them.",
    levels:{
     starter:[
      "People move for many reasons: work, family, study, safety, love, adventure. **Theories of migration** look for the patterns behind those reasons, so we can explain who moves, where they go, and why most people stay.",
      "Think of the theories as lenses. One looks at a single person weighing up wages. Another looks at a family sharing risks. Others look at employers who need workers, at friends and relatives who help each other move, at the history that links countries, or at what people hope for and are able to do.",
      "No single theory explains every migration. A nurse recruited abroad, a student, a family fleeing a war and a farmer moving to a nearby town after a drought all need different explanations, and one move often needs several.",
      {key:"Migration theories are lenses, not rivals: each answers a different question at a different scale."}
     ],
     builder:[
      "The main families of theory, roughly in the order they were developed:",
      {table:[["Theory","Main idea","Scale"],["Ravenstein, Lee (push–pull)","Factors at origin and destination, obstacles, personal factors","Individual"],["Neoclassical","Wage gaps and expected income","Individual and economy"],["NELM","Households spread risk and raise income","Household"],["Dual labour market","Rich economies’ demand for low-status jobs","Labour market"],["Historical-structural","Unequal world economy, colonial links","World system"],["Networks, cumulative causation","Ties lower costs; migration feeds itself","Community"],["Migration systems","Places linked by many flows, with feedback","Region"],["Aspirations–capabilities","Wanting and being able, including staying","Individual in context"]]},
      "Cross-cutting lenses add gender (who moves, who cares, who decides), environment (one driver among many) and coercion (trafficking, forced displacement).",
      "**How to use them.** Start with one real move and ask a question at each scale: what did the person want and what could they do; what did the family decide and why; which jobs or rules were waiting at the destination; what history or network linked the two places. Then ask what none of the answers covers. A good explanation usually needs two or three lenses, and says which one carries most weight in that case.",
      "Researchers today often speak of **migration drivers**: conditions that combine to shape aspirations and capabilities. The open-access *Introduction to Migration Studies* (2022), Chapter 3, by Mathias Czaika and Constantin Reinprecht, is a good overview."
     ],
     pro:[
      "Douglas Massey and colleagues’ “Theories of International Migration: A Review and Appraisal” (*Population and Development Review*, 1993) is the classic comparison. It separates theories of **initiation** (why migration starts: neoclassical, NELM, dual labour market, world-systems) from theories of **perpetuation** (why it continues: networks, institutions, cumulative causation, migration systems) and argues they are complementary.",
      "Later work criticised the field for treating staying as the default and for separating “economic” from “forced” migration too sharply. Hein de Haas’s aspirations–capabilities framework (2021) and the drivers approach respond to both problems, and stress that development, states and labour markets shape mobility as much as individual choices do.",
      "Three cautions for professionals. Theories developed from one corridor (often Mexico–United States or Europe) may not travel. Cross-country patterns don’t automatically describe change within one country (the migration hump debate). And causal claims in policy (“pull factors”, “root causes”) need evidence, not only a theory that makes them plausible."
     ]
    },
    related:["push-pull-theories","economic-migration-theories","migration-networks","aspirations-capabilities","migration-and-development-hump","gender-and-migration","climate-and-mobility","trafficking-and-smuggling"],
    read:[{book:"imis", where:"Chapter 3 “Migration Drivers: Why Do People Migrate?”"}],
    sources:[{t:"Massey et al., “Theories of International Migration: A Review and Appraisal”, Population and Development Review 19(3), 1993 (DOI)", url:"https://doi.org/10.2307/2938462"},{t:"Czaika and Reinprecht, “Migration Drivers: Why Do People Migrate?”, in Introduction to Migration Studies (Springer, 2022, CC BY 4.0) (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_3"},{t:"de Haas, “A theory of migration: the aspirations-capabilities framework”, Comparative Migration Studies 9, 8 (2021)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC7902564/"}],
    checked:"2026-11"},

   {id:"push-pull-theories", title:"Ravenstein’s laws and Lee’s push–pull model", aka:["push and pull","laws of migration","Ravenstein","Everett Lee","intervening obstacles"], tags:["migration","theory","thinkers"],
    summary:"Ravenstein’s 19th-century generalisations from census data and Lee’s 1966 model of origin and destination factors, intervening obstacles and personal factors, with their critiques.",
    levels:{
     starter:[
      "In 1885 the geographer **E. G. Ravenstein** used the United Kingdom’s 1881 census, which recorded where people were born and where they lived, to find patterns in migration. He called them “laws”: most people move only short distances, they often move in steps (village to town to city), long-distance migrants head for big cities, every flow has a smaller counter-flow, and the main motive is to better oneself.",
      "In 1966 **Everett Lee** turned these ideas into a simple model. Every move involves factors at the **origin** (some holding people, some repelling them), factors at the **destination**, **intervening obstacles** in between (distance, cost, borders) and **personal factors** (age, family, skills).",
      "This is the classic “push and pull” picture. It is a useful checklist, but researchers say it lists causes without explaining how they work together."
     ],
     builder:[
      "**Ravenstein’s papers.** “The Laws of Migration” appeared in the *Journal of the Statistical Society of London* (1885) and, with data from more countries, in the *Journal of the Royal Statistical Society* (1889). Summaries number the laws differently; the main ones concern distance, steps, streams and counter-streams, rural people moving more than town people, women moving more over short distances and men more often abroad, migration growing with industry and transport, and the dominance of economic motives.",
      "**Lee’s model** (“A Theory of Migration”, *Demography*, 1966) marks factors at origin and destination as **+** (holding or attracting), **−** (repelling) or **0** (neutral). Two points are often missed: origins hold people as well as pushing them, and what matters is what people **perceive** about a destination.",
      "**Lee’s hypotheses** cover volume (more migration with greater differences between places and people, lower obstacles and good economic times), streams and counter-streams, and **selection**: migrants answering strong attractions tend to be positively selected; those escaping strong minuses less so.",
      "**Using it well.** Treat it as a checklist for one case, then ask what it leaves out: who decided, who helped, what rules applied, and why others in the same situation stayed."
     ],
     pro:[
      "**Critiques.** Ronald Skeldon called push–pull theory “a platitude at best”, and Hein de Haas argues that push–pull models list static factors without specifying how they interact, and can’t explain why the same factors produce migration in some cases and not others. Push and pull are often two descriptions of the same gap. The model is individualistic: it leaves out states, recruiters, employers and the history linking places. And it predicts that the poorest should move most, which evidence contradicts: migration needs resources.",
      "**What survives.** Several Ravenstein patterns remain robust: internal migration far outnumbers international, short moves outnumber long ones, and counter-streams (return and onward migration) are common. Step migration is harder to pin down: Ravenstein described it partly as a population-level ripple (people near a growing town move in, and their places are filled from farther away), while later writers often read it as individuals moving in stages; historical studies test both readings.",
      "**Language.** “Pull factor” is common in policy debate as a claim that a policy attracts migrants. Treat it as a causal hypothesis that needs evidence on that policy, not as an established finding of migration theory."
     ]
    },
    related:["why-people-move","economic-migration-theories","aspirations-capabilities","demography"],
    read:[{book:"soc", where:"Chapter 20, Section 20.1 “Demography and Population”"}],
    sources:[{t:"Ravenstein, “The Laws of Migration”, Journal of the Statistical Society of London 48(2), 1885 (DOI)", url:"https://doi.org/10.2307/2979181"},{t:"Ravenstein, “The Laws of Migration”, Journal of the Royal Statistical Society 52(2), 1889 (DOI)", url:"https://doi.org/10.2307/2979333"},{t:"Lee, “A Theory of Migration”, Demography 3(1), 1966, pp. 47–57 (DOI)", url:"https://doi.org/10.2307/2060063"}],
    checked:"2026-11"},

   {id:"economic-migration-theories", title:"Economic and structural theories of migration", aka:["neoclassical migration theory","NELM","new economics of labour migration","dual labour market","Harris–Todaro","world-systems and migration","historical-structural theory"], tags:["migration","theory","economics"],
    summary:"Four ways of explaining labour migration: wage gaps and expected income, household risk strategies, rich economies’ demand for workers, and the unequal world economy.",
    levels:{
     starter:[
      "Four big theories explain why people move for work.",
      {list:[
        "**Neoclassical theory**: people move from low-wage to high-wage places, if the expected gain is bigger than the cost.",
        "**The new economics of labour migration (NELM)**: families send a member away to spread risk, like planting several crops, and to raise money for things they need.",
        "**Dual labour market theory**: rich economies have jobs local workers avoid (insecure, low-paid, low-status), so employers recruit migrants.",
        "**Historical-structural views**: an unequal world economy, shaped by colonial history and trade, uproots people and links particular places."
      ]},
      "Each looks at a different level: the individual, the family, the labour market and the world. Together they explain much more than any one alone.",
      "A simple test: if you can only explain a move by saying “wages are higher there”, you are using one lens. Ask also who decided, who was hiring, and what linked the two places."
     ],
     builder:[
      "**Neoclassical.** At the macro level, W. Arthur Lewis (1954) modelled workers moving from a low-productivity farm sector into industry. At the micro level, Larry Sjaastad (1962) treated migration as an investment in human capital. Michael Todaro (1969) and John Harris and Todaro (1970) explained continued rural–urban migration despite urban unemployment with **expected income**: city wage × probability of finding a job. Worked example: a wage of 300 with a 40% chance gives 120.",
      "**NELM.** Oded Stark and David Bloom (*American Economic Review*, 1985) made the household the decision-maker, with migration as a response to risk and to missing insurance and credit markets. Remittances are central. Stark and J. Edward Taylor (1989) added **relative deprivation**: households compare themselves with others in their community.",
      "**Dual labour market.** Michael Piore’s *Birds of Passage* (1979) argued that demand drives migration: segmented labour markets have a secondary sector of insecure, low-status jobs. Employers avoid raising bottom wages because wages signal status (raising them pushes up the whole ladder), and the groups who once filled such jobs became fewer. Target-earning migrants may accept them.",
      "**Historical-structural.** Building on dependency and world-systems theory (Wallerstein), these views see capitalist penetration of rural areas uprooting people, and colonial, trade and investment links channelling them. Saskia Sassen’s *The Mobility of Labor and Capital* (1988) and Castles and Kosack (1973) are key works."
     ],
     pro:[
      "**Critiques.** Neoclassical theory can’t explain why the poorest rarely move most, why migration persists after wage convergence, or why most people with large wage gains available stay; it underplays states and networks. NELM can idealise the household, ignoring gendered and generational power, and has been tested mostly in rural, lower-income settings. Dual labour market theory explains demand but not origins, and “temporary” migrants often settle; immigration levels also vary across similar economies because of policy. Historical-structural approaches risk structural determinism (migrants as pawns) and are hard to test.",
      "**Testing and synthesis.** Massey and colleagues (1993) argued the theories work at different levels and are not necessarily contradictory. A single corridor can show wage gaps, household strategy, sectoral demand and colonial ties all at once. Empirical work tests specific predictions: for example NELM’s claim that better local insurance or credit reduces migration, or Harris–Todaro’s claim about expected income.",
      "**Terminology.** “Neoclassical” here refers to economic theory based on individual optimisation in markets; it is not the same as neoclassical realism in IR. Some textbooks group dual labour market and world-systems theory together as “structural” theories."
     ]
    },
    related:["why-people-move","push-pull-theories","migration-networks","theories-global-inequality","remittances"],
    read:[{book:"imis", where:"Chapter 7 “Labour Migration”"}],
    sources:[{t:"Massey et al., “Theories of International Migration: A Review and Appraisal”, Population and Development Review, 1993 (DOI)", url:"https://doi.org/10.2307/2938462"},{t:"Czaika and Reinprecht, “Migration Drivers: Why Do People Migrate?” (2022, CC BY 4.0) (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_3"}],
    checked:"2026-11"},

   {id:"migration-networks", title:"Networks, chain migration, cumulative causation and migration systems", aka:["migrant networks","chain migration","cumulative causation","migration systems","social capital"], tags:["migration","theory","networks"],
    summary:"How personal ties lower the costs and risks of moving, how migration can feed itself, its limits, and how places are linked into migration systems.",
    levels:{
     starter:[
      "Moving is easier when someone you know has gone before. A cousin abroad can tell you where the jobs are, lend you money, and give you a place to sleep. These links are called **migration networks**.",
      "Each person who moves makes it easier for the next. This is **chain migration**: one person helps a relative, who helps a friend, and soon many people from one village live in the same city abroad.",
      "Over time, migration can **feed itself**. Money sent home builds houses that make other families want to send someone too, and going abroad can become a normal part of growing up. Researchers call this **cumulative causation**.",
      "But it doesn’t go on for ever: networks can weaken, exclude newcomers, or stop mattering when people have other options."
     ],
     builder:[
      "**Networks.** Massey and colleagues (1993) described migrant networks as sets of interpersonal ties of kinship, friendship and shared community origin linking migrants, former migrants and non-migrants. They are a form of social capital that lowers the costs and risks of moving, which is why migrants from one place cluster in particular destinations and jobs.",
      "**Chain migration.** John and Leatrice MacDonald (1964) defined it as movement in which prospective migrants learn of opportunities, get transport and have initial housing and work arranged through personal relationships with earlier migrants. In some political debates the phrase is used for family reunification; check the meaning.",
      "**Cumulative causation.** Gunnar Myrdal (1957) developed the idea of circular and cumulative causation in development economics; Douglas Massey (1990, *Population Index*) applied it to migration: each act of migration alters the social context of later decisions. Mechanisms include network growth, relative deprivation, a culture of migration, changes in land use and farming, the spread of education, and the labelling of “migrant jobs” at destination.",
      "**Migration systems.** Akin Mabogunje (1970) analysed rural–urban migration in Africa as a system linking places through flows of people, money, goods and information, with feedback. Kritz, Lim and Zlotnik’s *International Migration Systems* (1992) extended the idea to groups of countries, for example the Gulf with South and Southeast Asia, or Pacific Island countries with New Zealand and Australia."
     ],
     pro:[
      "**Limits.** Elizabeth Fussell and Douglas Massey (2004) found cumulative causation much weaker in large Mexican cities than in rural towns, as urban dwellers had alternative networks and resources. Hein de Haas (2010, “The Internal Dynamics of Migration Processes”) argued network theories explain perpetuation but not decline, and that networks can produce negative feedback: established migrants may discourage or exploit newcomers, and information about hardship can deter.",
      "**Beyond kinship.** Later work stresses the **migration industry** and **migration infrastructure**: recruiters, brokers, lawyers, transport firms, digital platforms and smugglers who facilitate (and profit from) moves. These can substitute for kin networks or prey on those without them.",
      "**Systems critiques.** Oliver Bakewell, Hein de Haas and Agnieszka Kubal (2012) (“Migration systems, pioneer migrants and the role of agency”, *Journal of Critical Realism*) argued that migration systems theory explains how established systems continue better than how they start, and neglects the agency of pioneer migrants. Systems thinking remains useful for tracing feedback between flows of people, money and information, and for seeing policy (visas, recruitment agreements, free-movement areas) as part of the system."
     ]
    },
    related:["why-people-move","economic-migration-theories","aspirations-capabilities","transnationalism","remittances"],
    read:[{book:"imis", where:"Chapter 4 “Migration Infrastructures: How Do People Migrate?”"}],
    sources:[{t:"Massey, “Social Structure, Household Strategies, and the Cumulative Causation of Migration”, Population Index 56(1), 1990 (DOI)", url:"https://doi.org/10.2307/3644186"},{t:"Fussell and Massey, “The limits to cumulative causation: International migration from Mexican urban areas”, Demography 41(1), 2004 (DOI)", url:"https://doi.org/10.1353/dem.2004.0003"},{t:"Massey et al., “Theories of International Migration: A Review and Appraisal”, 1993 (DOI)", url:"https://doi.org/10.2307/2938462"}],
    checked:"2026-11"},

   {id:"aspirations-capabilities", title:"Aspirations and capabilities", aka:["aspirations-capabilities framework","involuntary immobility","acquiescent immobility","voluntary immobility","de Haas 2021"], tags:["migration","theory"],
    summary:"De Haas’s framework: migration depends on both wanting to move and being able to, which explains moving and staying, and why development can increase migration.",
    levels:{
     starter:[
      "Many more people say they would like to move abroad than actually do. Why? The sociologist **Hein de Haas** says migration needs two things: the **aspiration** (wanting to move) and the **capability** (being able to, with money, documents, skills and contacts).",
      "Put those together and you get four situations:",
      {list:[
        "Want to move and can: **voluntary mobility** (most migration).",
        "Want to move but can’t: **involuntary immobility** (feeling trapped).",
        "Don’t want to and couldn’t: **acquiescent immobility**.",
        "Could move but don’t want to: **voluntary immobility**. Refugees, forced to leave though they didn’t want to, are placed in this same cell as **involuntary mobility**."
      ]},
      "The big lesson: staying needs explaining just as much as moving.",
      "It also explains why development often brings **more** migration at first: schooling, roads and income raise both what people hope for and what they can do."
     ],
     builder:[
      "De Haas set out the framework in “A theory of migration: the aspirations-capabilities framework” (*Comparative Migration Studies* 9, article 8, 2021, open access under CC BY 4.0). He defines human mobility as people’s capability (freedom) to choose where to live, including the option to stay.",
      "**Aspirations** are a function of people’s general life aspirations and their perceptions of opportunities elsewhere. Education, media and migrants’ stories shape both.",
      "**Capabilities** draw on Isaiah Berlin’s two liberties: **negative liberty** (freedom from constraints such as visa rules, exit bans or border controls) and **positive liberty** (the ability to act: money, skills, health, social networks). Removing barriers isn’t enough if people lack resources. The idea of capability comes from Amartya Sen’s view of development as expanding the freedoms people have reason to value.",
      "**Using it.** For any group, ask two separate questions: how many want to move, and what stops or enables them. Policies affect both: a visa rule changes capabilities; a new local university may change aspirations. Changing one without the other may have little effect.",
      "**Origins of the cells.** Jørgen Carling (2002) developed “involuntary immobility” from research in Cape Verde; Kerilyn Schewel developed “acquiescent immobility”. De Haas also treats migration as having intrinsic value (freedom of movement as a good in itself) as well as instrumental value (a way to reach other goals)."
     ],
     pro:[
      "**Development and migration.** Because development tends to raise both capabilities and aspirations, de Haas argues it initially increases emigration, a “migration transition” drawing on Zelinsky (1971) and Skeldon. This challenges policies premised on reducing migration by reducing poverty (see the migration hump debate).",
      "**Against push–pull.** The framework replaces lists of factors with a mechanism: structural conditions shape aspirations and capabilities, which shape (im)mobility. It also bridges “voluntary” and “forced” migration by treating degrees of choice as variable.",
      "**Critiques and limits.** Aspirations are hard to measure and unstable; survey answers about wanting to emigrate don’t translate neatly into behaviour. The four-cell typology simplifies continuous variation and mixed motives. Carling and Kerilyn Schewel (*Journal of Ethnic and Migration Studies*, 2018) discuss how to study aspiration and ability empirically. The placement of refugees (low aspirations, high capabilities) surprises many readers; de Haas’s point is that refugees moved though they had no wish to, because they had no option to remain."
     ]
    },
    related:["hein-de-haas","why-people-move","migration-networks","migration-and-development-hump","push-pull-theories"],
    sources:[{t:"de Haas, “A theory of migration: the aspirations-capabilities framework”, Comparative Migration Studies 9, 8 (2021), full text", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC7902564/"},{t:"Czaika and Reinprecht, “Migration Drivers: Why Do People Migrate?” (2022) (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_3"}],
    checked:"2026-11"},

   {id:"migration-and-development-hump", title:"The mobility transition, the migration hump and brain drain", aka:["migration hump","mobility transition","Zelinsky","emigration life cycle","brain drain","brain gain","brain circulation","brain waste"], tags:["migration","development"],
    summary:"Why development often increases emigration before reducing it, the debate over the evidence, and the arguments about skilled emigration.",
    levels:{
     starter:[
      "You might expect that as poor countries get richer, fewer people leave. Often the opposite happens at first. Moving costs money and needs education and contacts, so as incomes rise, more people **can** move, and more **want** to.",
      "Comparing countries, emigration tends to be highest at **middle** incomes and lower in both the poorest and the richest. This shape is called the **migration hump**. Researchers still debate whether every country follows it over time.",
      "A related debate is about skilled people. **Brain drain** means a country losing doctors, nurses or engineers to jobs abroad. **Brain gain** means the chance of working abroad encourages more people to train, and some of them stay. **Brain waste** is when skilled migrants can’t use their skills. Which effect is bigger depends on the case."
     ],
     builder:[
      "**Mobility transition.** Wilbur Zelinsky (“The Hypothesis of the Mobility Transition”, *Geographical Review*, 1971) linked phases of mobility to the demographic transition: from little permanent migration in pre-modern societies, through mass rural–urban movement and emigration in early transition, to urban-to-urban movement, circulation and immigration in advanced societies.",
      "**Migration hump.** Philip Martin used the term in the 1990s for a short-run rise in emigration with trade liberalisation between Mexico and the United States. Michael Clemens (“The Emigration Life Cycle”, IZA Discussion Paper 13614, 2020) found emigration rising with income per person in poor countries, slowing after roughly PPP$5,000 and falling after roughly PPP$10,000, and argued the pattern holds within countries over time.",
      "**The debate.** Claas Schneiderheinze and David Benček (*World Development* 182, 2024) found the hump across countries, but their panel estimates showed emigration to OECD countries falling as incomes rise within countries, while noting slower forces such as education and demographic change could still raise migration. The lesson: distinguish cross-sectional patterns from within-country change.",
      "**Skilled emigration.** The World Health Assembly adopted the voluntary WHO Global Code of Practice on the International Recruitment of Health Personnel in 2010. On the brain-gain side, Mountford (1997) and Beine, Docquier and Rapoport (2001) modelled incentive effects; Abarcar and Theoharides (*Review of Economics and Statistics*, 2024) found that rising US demand for Filipino nurses increased nursing enrolment and licensing (about nine additional licensed nurses per emigrant), though licensing-exam pass rates fell."
     ],
     pro:[
      "**Mechanisms of the hump.** Credit constraints (capabilities), rising aspirations through education and information, demographic transition (large young cohorts), structural transformation of agriculture, and networks that build up during the rising phase. De Haas frames this as a “migration transition” within broader social transformation.",
      "**Policy relevance.** Programmes aimed at reducing emigration through development (“root causes” approaches) rest on assumptions this debate tests. Evidence on any short-run reduction is weak in either direction for poorer countries, and effects found are gradual. Many researchers argue development should be judged on its own goals rather than on migration outcomes.",
      "**Brain drain evidence.** Effects vary by country size, the share of the skilled who leave, the sector, return and diaspora links, and recognition of qualifications. Small states and health systems with acute shortages are most exposed; large countries may gain from incentive effects and circulation (AnnaLee Saxenian’s work on returning engineers). WHO publishes a health workforce support and safeguards list of countries from which active international recruitment is discouraged; check the current edition."
     ]
    },
    related:["aspirations-capabilities","why-people-move","demographic-transition","remittances","diaspora"],
    read:[{book:"imis", where:"Chapter 19 “Migration and Development”"}],
    sources:[{t:"Clemens, “The Emigration Life Cycle: How Development Shapes Emigration from Poor Countries”, IZA DP 13614, 2020", url:"https://docs.iza.org/dp13614.pdf"},{t:"Schneiderheinze and Benček, “Higher economic growth in poor countries, lower migration flows to the OECD”, World Development 182, 2024 (DOI)", url:"https://doi.org/10.1016/j.worlddev.2024.106655"},{t:"WHO Global Code of Practice on the International Recruitment of Health Personnel (2010)", url:"https://www.who.int/publications/i/item/wha6316"}],
    checked:"2026-11"},

   {id:"climate-and-mobility", title:"Environment, climate and mobility", aka:["climate migration","environmental migration","climate refugees","disaster displacement","planned relocation","trapped populations"], tags:["migration","environment","climate"],
    summary:"How environmental change shapes movement (mostly internal and short-distance, alongside other drivers), why “climate refugee” isn’t a legal category, and what planned relocation and trapped populations mean.",
    levels:{
     starter:[
      "Floods, droughts, storms, rising seas and heat can make it harder to live and work in a place, so they affect who moves and who stays.",
      "Three facts help. First, the environment rarely acts alone: a drought usually leads people to move when it combines with poverty, debt or conflict. Second, most people who move for environmental reasons stay **within their own country**, often close to home and often for a short time. Third, some people **can’t** move at all, because they are too poor or constrained: researchers call them trapped populations.",
      "You often hear the phrase “climate refugee”, but it isn’t a legal category. The 1951 Refugee Convention protects people fleeing persecution, not environmental change. Some people displaced by disasters can still get protection in other ways.",
      "Sometimes governments help whole communities move to safer ground: this is **planned relocation**."
     ],
     builder:[
      "**Definitions.** IOM describes environmental migrants as people who move, within their country or abroad, temporarily or permanently, predominantly because sudden or progressive changes in the environment adversely affect their lives or living conditions. “Climate mobility” is used as an umbrella for movement (including displacement, migration and planned relocation) linked to climate change.",
      "**Data.** IDMC’s Global Report on Internal Displacement 2026 counted 29.9 million disaster displacements in 2025 (down 35% from 2024’s very high figure), with storms about 60% of the total, and about 13.6 million people living in disaster displacement at the end of 2025. Displacements count movements, so one person can be counted more than once.",
      "**Legal status.** Environmental factors aren’t among the 1951 Convention’s grounds (race, religion, nationality, membership of a particular social group, political opinion). The Migration Data Portal calls “climate refugee” not a legally valid term. Protection may come from refugee law where disasters interact with persecution or conflict, from broader regional definitions (OAU 1969, Cartagena 1984), from human rights law on non-refoulement, or from national and bilateral arrangements.",
      "**Planned relocation.** Vunidogoloa in Fiji moved about two kilometres inland in 2014; Fiji adopted Planned Relocation Guidelines in 2018 and standard operating procedures in 2023. Researchers have documented hundreds of planned relocations in every world region."
     ],
     pro:[
      "**Teitiota.** In views published in 2020, the UN Human Rights Committee found New Zealand had not violated Ioane Teitiota’s right to life by returning him to Kiribati, but recognised that, without robust national and international efforts, climate change effects may expose people to violations that trigger non-refoulement obligations.",
      "**Bilateral arrangements.** The Australia–Tuvalu Falepili Union treaty (signed 9 November 2023, in force 28 August 2024) recognises Tuvalu’s continuing statehood despite sea-level rise and created the Falepili Mobility Pathway to permanent residence; the first ballot (opened 16 June 2025) offered up to 280 places. Numbers in later years are agreed between the two countries.",
      "**Research cautions.** Projections of future “climate migrants” vary enormously with assumptions and definitions and should be read as scenarios, not forecasts. Attribution is hard: environmental stress works through livelihoods, prices and conflict. Mobility can be adaptation (diversifying income) as well as a failure to adapt, and immobility can be a risk. The UK Government Office for Science Foresight report *Migration and Global Environmental Change* (2011) popularised the concern for trapped populations.",
      "**Regional definitions.** Whether the OAU and Cartagena wording on events seriously disturbing public order covers disasters is debated; check current UNHCR guidance before relying on it."
     ]
    },
    related:["climate-politics","refugees-and-displacement","aspirations-capabilities","why-people-move","human-security"],
    sources:[{t:"Migration Data Portal: Environmental migration (definitions and data)", url:"https://www.migrationdataportal.org/themes/environmental_migration_and_statistics"},{t:"IDMC, Global Report on Internal Displacement 2026: summary", url:"https://api.internal-displacement.org/sites/default/files/publications/documents/2026-idmc-global-report-on-internal-displacement-2026-summary-en.pdf"},{t:"Australian Government DFAT: Australia–Tuvalu Falepili Union treaty", url:"https://www.dfat.gov.au/geo/tuvalu/australia-tuvalu-falepili-union-treaty"}],
    checked:"2026-11"},

   {id:"gender-and-migration", title:"Gender and migration", aka:["feminisation of migration","global care chains","care work","women and migration"], tags:["migration","gender"],
    summary:"How gender shapes who moves, why and how; what the “feminisation of migration” does and doesn’t mean; and global care chains.",
    levels:{
     starter:[
      "Gender, the roles and expectations societies attach to being a woman, a man or another gender, shapes migration at every step: who is expected to earn and who to care, which jobs are offered to whom, and who decides in a family.",
      "You may hear about the **feminisation of migration**. It doesn’t mean women are now most migrants: UN DESA counted women and girls as just under half (48%) of international migrants in 2024. It mostly means that more women migrate **on their own as workers**, often as the main earners for their families, and that researchers stopped assuming migrants are men.",
      "A **global care chain** is a chain of care across borders: a woman cares for a family’s children abroad, while her own children are cared for by a relative or a paid helper at home."
     ],
     builder:[
      "**Patterns.** Gender shapes migration through family norms (marriage is the reason most women give for moving in India’s census), labour markets (male-dominated construction recruitment to the Gulf; female-dominated domestic, care and nursing work in many destinations), and law (some visa categories and labour protections exclude domestic work).",
      "**Feminisation, with nuance.** Castles and Miller’s *The Age of Migration* (first edition 1993) listed feminisation as a general trend. UN DESA’s 2024 estimates show women and girls at 48% globally, with male migration growing faster recently, mainly to Northern Africa and Western Asia; in Europe, Northern America and Latin America and the Caribbean the share has been about half since 1990. The better-supported meaning concerns women’s independent labour migration and their visibility in research.",
      "**Care chains.** Arlie Russell Hochschild introduced global care chains in “Global Care Chains and Emotional Surplus Value” (2000), drawing on Rhacel Salazar Parreñas’s *Servants of Globalization* (2001) on Filipina domestic workers in Rome and Los Angeles. Eleonore Kofman and Parvati Raghuram broadened the frame to social reproduction: nurses, care homes, teachers, men in care work, and care for older people.",
      "**Households.** Feminist research challenged NELM’s unified household, showing negotiation and conflict over who migrates and who controls remittances."
     ],
     pro:[
      "**Intersectionality.** Gender combines with class, race, nationality, age and legal status: a highly skilled woman doctor and a domestic worker on a tied visa face very different conditions. Researchers use [[intersectionality|intersectional]] analysis to avoid treating “women migrants” as one group.",
      "**Changing roles.** Migration can shift gender relations at origin (women managing farms and money when men leave; men taking on care when women leave) and at destination, but effects are not uniform and can reinforce norms as well as loosen them.",
      "**Cautions.** Avoid two stereotypes: women as passive dependants and women as victims. The language of “left-behind” children can stigmatise migrant mothers while fathers’ absence goes unremarked. And trafficking concerns, though real, shouldn’t be used to frame all women’s migration as dangerous, which can justify restrictions on women’s mobility; researchers debate where protection becomes paternalism.",
      "**Data.** Sex-disaggregated data are better for stocks than for flows, reasons for moving or outcomes; check what a source actually measures."
     ]
    },
    related:["sex-gender","gender-stratification","economic-migration-theories","why-people-move"],
    read:[{book:"imis", where:"Chapter 18 “Gender and Migration”"}],
    sources:[{t:"UN DESA Population Division: International Migrant Stock (2024 estimates and key facts)", url:"https://www.un.org/development/desa/pd/content/international-migrant-stock"},{t:"Kofman and Raghuram, “Gender and Migration”, in Introduction to Migration Studies (2022) (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_18"}],
    checked:"2026-11"},

   {id:"trafficking-and-smuggling", title:"Human trafficking and migrant smuggling", aka:["Palermo Protocols","trafficking in persons","smuggling of migrants","act means purpose"], tags:["migration","law"],
    summary:"Two different crimes under the 2000 Palermo Protocols: trafficking (act, means, exploitative purpose; no border needed) and smuggling (procuring illegal entry for profit; always cross-border).",
    levels:{
     starter:[
      "People often mix up trafficking and smuggling, but they are different crimes.",
      "**Human trafficking** is about **exploiting a person**: recruiting or moving someone by force, threats, fraud or deception, in order to exploit them, for example in forced labour or sexual exploitation. It can happen without crossing any border. For children, it counts as trafficking even without force or deception.",
      "**Migrant smuggling** is about **crossing a border illegally**: someone arranges another person’s illegal entry into a country, for money or another benefit. The migrant usually agrees, and the arrangement usually ends on arrival.",
      "The two can overlap: a smuggling journey can turn into trafficking if people are held or forced to work on arrival.",
      {key:"Trafficking: a crime against a person. Smuggling: a crime about crossing a border."}
     ],
     builder:[
      "Both are defined in protocols supplementing the UN Convention against Transnational Organized Crime, adopted by the UN General Assembly in resolution 55/25 on 15 November 2000 (the Palermo Protocols).",
      "**Trafficking Protocol, Article 3.** Trafficking in persons is the recruitment, transportation, transfer, harbouring or receipt of persons (**act**), by means of the threat or use of force or other forms of coercion, abduction, fraud, deception, abuse of power or of a position of vulnerability, or giving or receiving payments to a person having control over another (**means**), for the purpose of exploitation (**purpose**), which includes at a minimum sexual exploitation, forced labour or services, slavery or similar practices, servitude or the removal of organs. Consent to intended exploitation is irrelevant where any means is used; for a child (under 18), no means is required.",
      "**Smuggling Protocol, Article 3.** Smuggling of migrants is the procurement, to obtain a financial or other material benefit, of the illegal entry of a person into a State Party of which the person is not a national or permanent resident. Article 5: migrants shall not become liable to criminal prosecution under the Protocol for having been the object of smuggling. Article 16 requires measures to protect smuggled migrants’ rights, including the right to life.",
      {table:[["","Trafficking","Smuggling"],["Border","Not required","Always"],["Exploitation","Always the purpose","Not part of the definition"],["Consent","Irrelevant if means used","Usually given"]]}
     ],
     pro:[
      "**Entry into force.** The Trafficking Protocol entered into force on 25 December 2003 and the Smuggling Protocol on 28 January 2004. The parent Convention entered into force on 29 September 2003 and had 195 parties as of August 2026 (UNODC). Check the UN Treaty Collection for current party numbers of each protocol.",
      "**Saving clauses.** Article 14(1) of the Trafficking Protocol states that nothing in it affects rights and obligations under international law, including international humanitarian law, human rights law and, where applicable, the 1951 Convention, the 1967 Protocol and the principle of non-refoulement. The Smuggling Protocol has a similar saving clause. Being trafficked or smuggled doesn’t remove anyone’s right to seek asylum.",
      "**In practice.** Cases blur: debts, deception and coercion may arise mid-journey. Non-punishment of trafficking victims for offences they were compelled to commit is recognised in other instruments and guidance rather than in the Trafficking Protocol’s text. Researchers also caution that anti-smuggling and anti-trafficking measures can push people onto more dangerous routes if safe pathways are scarce; governments and researchers disagree on how to balance enforcement and protection.",
      "**Words.** Use “trafficked person” or “victim/survivor of trafficking” and “smuggled migrant”; avoid “illegal” for people."
     ]
    },
    related:["refugees-and-displacement","non-refoulement","gender-and-migration","why-people-move"],
    sources:[{t:"UNODC: Human trafficking FAQs (elements, consent, difference from smuggling)", url:"https://www.unodc.org/unodc/en/human-trafficking/faqs.html"},{t:"Protocol against the Smuggling of Migrants by Land, Sea and Air (text, University of Minnesota Human Rights Library)", url:"https://hrlibrary.umn.edu/instree/smuggling.html"},{t:"Protocol to Prevent, Suppress and Punish Trafficking in Persons (text, University of Minnesota Human Rights Library)", url:"https://hrlibrary.umn.edu/instree/trafficking.html"}],
    checked:"2026-11"},

   {id:"hein-de-haas", title:"Hein de Haas", aka:["de Haas"], tags:["migration","thinkers"],
    summary:"Dutch sociologist and geographer of migration, known for the aspirations–capabilities framework, work on migration and development, and *How Migration Really Works* (2023).",
    levels:{
     starter:[
      "**Hein de Haas** is a Dutch migration researcher, a sociologist and geographer. He is Professor of Sociology at the University of Amsterdam.",
      "His big idea is that migration depends on two things: whether people **want** to move (aspirations) and whether they **can** (capabilities). That explains why so many people who would like to move never do, why many who could move choose to stay, and why countries often see **more** emigration as they first become richer.",
      "He also writes for the general public. His book *How Migration Really Works* (2023) tests common beliefs about migration against evidence, and he is the lead author of a widely used textbook, *The Age of Migration*.",
      "Much of his research is on migration from Morocco, and he has lived and worked in the Netherlands, Morocco and the United Kingdom."
     ],
     builder:[
      "**Positions.** Professor of Sociology at the University of Amsterdam (Amsterdam Institute for Social Science Research) and Professor of Migration and Development at Maastricht University / UNU-MERIT. He was a founding member and co-director of the International Migration Institute (IMI) at the University of Oxford (2006–2015), which he now directs at the University of Amsterdam.",
      "**Key works.**",
      {list:[
        "“A theory of migration: the aspirations-capabilities framework”, *Comparative Migration Studies* 9, 8 (2021), open access.",
        "*How Migration Really Works: A Factful Guide to the Most Divisive Issue in Politics* (Penguin, 2023; US edition Basic Books).",
        "*The Age of Migration: International Population Movements in the Modern World*, 6th edition (2020), with Stephen Castles and Mark J. Miller; the book’s first edition, by Castles and Miller, appeared in 1993.",
        "*Revisiting Moroccan Migrations* (2016), co-edited with Mohamed Berriane and Katharina Natter."
      ]},
      "**Other contributions.** His 2010 article “The Internal Dynamics of Migration Processes” asked why migration flows decline as well as grow, and his empirical work tests the migration transition across countries. He often stresses the role of labour demand in destination countries.",
      "**How researchers use his work.** The aspirations–capabilities framework is widely used to study immobility, migration intentions and the migration–development link, and to move beyond push–pull lists."
     ],
     pro:[
      "**Arguments.** De Haas argues that development and social transformation tend to increase emigration initially (a migration transition); that network and systems theories explain the perpetuation but not the decline of migration (2010); and that many migration policies have limited or unintended effects because they ignore labour demand and the structural drivers of migration. *How Migration Really Works* sets out these claims for a general audience.",
      "**Reception and critique.** Supporters value the framework’s ability to explain staying and its bridge between voluntary and forced migration. Critics note that aspirations are hard to measure, that the four-cell typology simplifies mixed motives, and that some of his policy conclusions are contested by researchers and policymakers who read the evidence differently. His public writing is sometimes described as myth-busting; readers should check each claim against the evidence he cites, as with any author.",
      "**Lineage.** His work builds on Zelinsky, Skeldon, Sen, Berlin and Carling, and on the Castles–Miller tradition of linking migration to global social change."
     ]
    },
    related:["aspirations-capabilities","migration-and-development-hump","migration-networks","why-people-move"],
    sources:[{t:"University of Amsterdam: profile of Prof. dr. H.G. (Hein) de Haas", url:"https://www.uva.nl/profiel/h/a/h.g.dehaas/h.g.dehaas.html"},{t:"Guilford Press: The Age of Migration, 6th edition (2020), authors", url:"https://www.guilford.com/books/The-Age-of-Migration/Haas-Castles-Miller/9781462542895/authors"},{t:"de Haas (2021), Comparative Migration Studies, full text", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC7902564/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"ravensteins-laws", term:"Ravenstein’s laws of migration", def:"Generalisations about migration that E. G. Ravenstein drew from census data in 1885 and 1889: most migrants move short distances, often in steps; each stream has a counter-stream; long-distance migrants head for big centres; and economic motives dominate.", codex:"push-pull-theories"},
   {id:"step-migration", term:"Step migration", def:"Moving in stages, for example from a village to a nearby town and later to a big city, rather than in one long move.", codex:"push-pull-theories"},
   {id:"intervening-obstacles", term:"Intervening obstacles", def:"In Everett Lee’s 1966 model, the things between origin and destination that make moving harder, such as distance, cost, borders, visa rules or a dangerous route.", codex:"push-pull-theories"},
   {id:"neoclassical-migration-theory", term:"Neoclassical migration theory", def:"The economic theory that people move from low-wage to high-wage places when the expected gain is bigger than the cost of moving, and that this narrows wage gaps over time.", codex:"economic-migration-theories"},
   {id:"human-capital", term:"Human capital", def:"The skills, knowledge, education and health that let a person earn a living. Economists treat education, training and sometimes migration as investments in it.", codex:"economic-migration-theories"},
   {id:"new-economics-of-labour-migration", term:"New economics of labour migration (NELM)", def:"The theory, launched by Oded Stark and David Bloom in 1985, that households rather than individuals decide on migration, to spread risk and raise income where insurance and credit are missing.", codex:"economic-migration-theories"},
   {id:"relative-deprivation-migration", term:"Relative deprivation (in migration)", def:"Feeling poorer compared with others in one’s own community. Stark and Taylor (1989) argued it can motivate households to send a migrant even when their absolute income hasn’t fallen.", codex:"economic-migration-theories"},
   {id:"dual-labour-market", term:"Dual labour market theory", def:"Michael Piore’s theory (1979) that rich economies have a permanent demand for workers in a secondary sector of insecure, low-paid, low-status jobs, which employers fill by recruiting migrants.", codex:"economic-migration-theories"},
   {id:"segmented-labour-market", term:"Segmented labour market", def:"A labour market split into parts with different pay, security and status, such as a primary sector of good jobs and a secondary sector of insecure ones, with little movement between them.", codex:"economic-migration-theories"},
   {id:"migration-network", term:"Migration network", def:"Ties of family, friendship and shared home community linking migrants, former migrants and non-migrants. They pass on information, money and help, lowering the costs and risks of moving.", codex:"migration-networks"},
   {id:"chain-migration", term:"Chain migration", def:"Migration in which people learn of opportunities and get help with travel, housing and work through personal ties with earlier migrants, so each move makes the next easier. In some political debates the term is also used for family reunification visas.", codex:"migration-networks"},
   {id:"cumulative-causation", term:"Cumulative causation", def:"The idea (Massey, 1990) that each act of migration changes conditions in ways that make further migration more likely, through networks, relative deprivation and a culture of migration. It has limits.", codex:"migration-networks"},
   {id:"migration-system", term:"Migration system", def:"A group of places linked by flows of people together with money, goods, information and ideas, with feedback between them, for example the Gulf and South Asia.", codex:"migration-networks"},
   {id:"aspirations-capabilities", term:"Aspirations–capabilities framework", def:"Hein de Haas’s theory (2021) that migration depends on both wanting to move (aspirations) and being able to (capabilities), which explains moving and staying.", codex:"aspirations-capabilities"},
   {id:"involuntary-immobility", term:"Involuntary immobility", def:"Wanting to migrate but being unable to, for lack of money, documents, visas or contacts. Jørgen Carling (2002) coined the term.", codex:"aspirations-capabilities"},
   {id:"mobility-transition", term:"Mobility transition", def:"Wilbur Zelinsky’s 1971 hypothesis that the kinds and amounts of movement change in regular phases as societies modernise, alongside the demographic transition.", codex:"migration-and-development-hump"},
   {id:"migration-hump", term:"Migration hump", def:"The pattern in which emigration rises as poor countries develop and falls only at higher incomes, so emigration is highest at middle incomes. Clear across countries; debated within countries over time.", codex:"migration-and-development-hump"},
   {id:"brain-drain", term:"Brain drain", def:"The emigration of highly skilled or educated people, seen as a loss to the country they leave, for example doctors and nurses leaving health systems with shortages.", codex:"migration-and-development-hump"},
   {id:"brain-gain", term:"Brain gain", def:"The idea that the chance to emigrate can increase skills at home, because more people train and not all leave, and through returns, remittances and links abroad.", codex:"migration-and-development-hump"},
   {id:"brain-waste", term:"Brain waste", def:"When skilled migrants work in jobs far below their training, for example because their qualifications aren’t recognised, so their skills are lost to both countries.", codex:"migration-and-development-hump"},
   {id:"environmental-migration", term:"Environmental migration", def:"Movement, within a country or abroad, temporary or permanent, mainly because sudden or gradual environmental change harms people’s lives or living conditions (IOM’s working definition).", codex:"climate-and-mobility"},
   {id:"climate-mobility", term:"Climate mobility", def:"An umbrella term for movement linked to climate change, including displacement, migration and planned relocation. It is not a legal status.", codex:"climate-and-mobility"},
   {id:"trapped-population", term:"Trapped population", def:"People who are too poor or constrained to leave places affected by environmental harm, even though they may face serious risks by staying.", codex:"climate-and-mobility"},
   {id:"planned-relocation", term:"Planned relocation", def:"The organised move of a whole community to a new place, usually as a last resort against environmental risk, ideally with consultation and consent.", codex:"climate-and-mobility"},
   {id:"feminisation-of-migration", term:"Feminisation of migration", def:"The growing visibility of women as independent migrants, especially as workers and main earners. It doesn’t mean women are most migrants: UN DESA put women and girls at 48% in 2024.", codex:"gender-and-migration"},
   {id:"global-care-chain", term:"Global care chain", def:"Arlie Russell Hochschild’s term (2000) for a series of links between people across borders based on paid or unpaid care, such as a migrant nanny whose own children are cared for by relatives at home.", codex:"gender-and-migration"},
   {id:"human-trafficking", term:"Human trafficking", def:"Recruiting, moving, harbouring or receiving people by force, coercion, fraud, deception or abuse of vulnerability, for the purpose of exploitation. No border crossing is required; for children no such means is needed.", codex:"trafficking-and-smuggling"},
   {id:"migrant-smuggling", term:"Migrant smuggling", def:"Procuring someone’s illegal entry into a country of which they are not a national or permanent resident, for a financial or other material benefit. It always involves crossing a border.", codex:"trafficking-and-smuggling"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u10-q01", lesson:"e2u10-l1", level:1, q:"What data did Ravenstein use for his 1885 “laws of migration”?", options:[
     {t:"The 1881 census of the United Kingdom, comparing where people were born and where they lived", ok:true, why:"Correct. Birthplace and residence data let him see who had moved and how far."},
     {t:"Surveys asking people why they wanted to emigrate", why:"He worked from census records, not surveys of intentions."},
     {t:"Passenger lists from ships crossing the Atlantic", why:"His 1885 paper was about movement within the United Kingdom, using census data."},
     {t:"UN migration statistics", why:"The UN didn’t exist until 1945; Ravenstein wrote in the 1880s."}]},
   {id:"e2u10-q02", lesson:"e2u10-l1", level:2, q:"Mei moves from her village to the county town, and three years later from the town to the capital. Which of Ravenstein’s patterns does this show?", options:[
     {t:"Step migration", ok:true, why:"Right. She moves in stages, village to town to city."},
     {t:"A counter-stream", why:"A counter-stream is a flow back the other way. Mei keeps moving towards bigger centres."},
     {t:"Town people moving more than country people", why:"Ravenstein found the reverse: rural people moved more. And this is about one person’s stages, not a comparison."},
     {t:"Intervening obstacles", why:"That is Lee’s term for things between origin and destination, not a Ravenstein pattern about stages."}]},
   {id:"e2u10-q03", lesson:"e2u10-l1", level:1, q:"Which are the four sets of factors in Everett Lee’s 1966 model?", options:[
     {t:"Factors at the origin, factors at the destination, intervening obstacles and personal factors", ok:true, why:"Correct. These are Lee’s four sets of factors."},
     {t:"Wages, prices, taxes and interest rates", why:"These are economic variables, not Lee’s categories."},
     {t:"Push, pull, chain and network", why:"Chains and networks come from later theories (Lesson 3)."},
     {t:"Act, means, purpose and consent", why:"Act, means and purpose are the elements of trafficking (Lesson 5)."}]},
   {id:"e2u10-q04", lesson:"e2u10-l1", level:2, q:"Tomás has a job offer abroad, but the visa costs three months’ wages and takes a year to process. In Lee’s model, the visa is…", options:[
     {t:"an intervening obstacle", ok:true, why:"Right. Costs and rules that stand between origin and destination are intervening obstacles."},
     {t:"a factor at the destination", why:"The job offer is a destination factor. The visa process stands between the two places."},
     {t:"a personal factor", why:"Personal factors belong to the person (age, skills, family). The visa rules apply to everyone."},
     {t:"a counter-stream", why:"A counter-stream is a flow of people in the opposite direction."}]},
   {id:"e2u10-q05", lesson:"e2u10-l1", level:3, q:"In a poor rural district, the poorest families migrate least, and middle-income families migrate most. What does this suggest about simple push–pull thinking?", options:[
     {t:"It misses that migration needs resources: the strongest “push” doesn’t mean people are able to move.", ok:true, why:"Right. This is one of the main critiques: moving costs money, contacts and documents."},
     {t:"It proves push–pull is exactly right, because poverty pushes people out.", why:"If poverty alone pushed people out, the poorest would move most. Here they move least."},
     {t:"It shows that poverty has nothing to do with migration.", why:"Poverty matters, but through both motives and constraints. The pattern shows constraints, not irrelevance."},
     {t:"It shows Ravenstein’s step migration is wrong.", why:"The pattern is about who moves, not whether people move in steps."}]},
   {id:"e2u10-q06", lesson:"e2u10-l1", level:2, q:"For decades, young people have moved from a mountain region to a coastal city. Recently, some retired city workers have moved to the mountain villages. In Ravenstein’s and Lee’s terms this is…", options:[
     {t:"a counter-stream", ok:true, why:"Right. Each main stream tends to produce a smaller flow in the opposite direction."},
     {t:"step migration", why:"Step migration is moving in stages towards bigger places; this is a flow back the other way."},
     {t:"brain drain", why:"Brain drain is about skilled people leaving a country, not retirees returning to villages."},
     {t:"an intervening obstacle", why:"Obstacles are things that make moving harder, not a flow of people."}]},
   {id:"e2u10-q07", lesson:"e2u10-l1", level:1, q:"What does Lee’s model add by marking **pluses at the origin**?", options:[
     {t:"That places of origin also hold people, through land, family, community and familiarity", ok:true, why:"Correct. Origins don’t only push; they also keep people, which helps explain why most people stay."},
     {t:"That everyone wants to leave home", why:"The pluses at origin show the opposite: things that make people want to stay."},
     {t:"That destinations have no drawbacks", why:"Lee marks minuses at destinations too, such as high rents."},
     {t:"That only rich people migrate", why:"The pluses describe places, not who is rich."}]},
   {id:"e2u10-q08", lesson:"e2u10-l1", level:3, q:"A rich country offers jobs to engineers with degrees. According to Lee’s idea of selection, who is most likely to go?", options:[
     {t:"People more educated or skilled than the average in their country", ok:true, why:"Right. Migrants answering strong attractions tend to be positively selected."},
     {t:"A random cross-section of the population", why:"Lee argued migrants are almost never a random sample."},
     {t:"Mostly people with no education", why:"The jobs require degrees; selection runs towards the more educated."},
     {t:"Mostly retired people", why:"Working-age people at a career turning point are much more likely to answer job offers."}]},
   {id:"e2u10-q09", lesson:"e2u10-l1", level:1, q:"What is the main critique researchers such as Skeldon and de Haas make of push–pull models?", options:[
     {t:"They list factors without explaining how those factors combine or why some people move and others stay.", ok:true, why:"Correct. Skeldon called push–pull “a platitude at best”; de Haas says it lacks a mechanism."},
     {t:"They ignore distance completely.", why:"Distance is central to both Ravenstein and Lee."},
     {t:"They only apply to refugees.", why:"Push–pull models are applied to all kinds of migration."},
     {t:"They are too mathematical for most readers.", why:"Push–pull is usually criticised for being too simple, not too mathematical."}]},
   /* ---- Lesson 2 ---- */
   {id:"e2u10-q10", lesson:"e2u10-l2", level:1, q:"According to neoclassical migration theory, what mainly drives labour migration?", options:[
     {t:"Differences in wages (and expected income) between places", ok:true, why:"Correct. Workers move from low-wage to high-wage places when the expected gain outweighs the cost."},
     {t:"Household strategies to spread risk", why:"That is the core of NELM."},
     {t:"Employers’ demand for low-status jobs", why:"That is dual labour market theory."},
     {t:"Colonial history and the world economy", why:"That is the historical-structural view."}]},
   {id:"e2u10-q11", lesson:"e2u10-l2", level:2, q:"In the Harris–Todaro model, a city job pays 400 a month and 25% of newcomers find one. A farm worker earns 120. What is the expected city income, and what does the model predict?", options:[
     {t:"100; the worker stays, because 100 is less than 120", ok:true, why:"Right. 400 × 0.25 = 100, which is below the farm wage of 120."},
     {t:"400; the worker moves, because 400 is more than 120", why:"400 is the wage on offer. The model multiplies it by the 25% chance of getting a job."},
     {t:"280; the worker moves", why:"280 is the wage gap (400 − 120), not the expected income."},
     {t:"30; the worker stays", why:"30 is 120 × 0.25: the chance has been applied to the farm wage instead of the city wage."}]},
   {id:"e2u10-q12", lesson:"e2u10-l2", level:1, q:"Who launched the “new economics of labour migration” in 1985?", options:[
     {t:"Oded Stark and David Bloom", ok:true, why:"Correct. Their 1985 article in the American Economic Review set out NELM."},
     {t:"Michael Piore", why:"Piore developed dual labour market theory (*Birds of Passage*, 1979)."},
     {t:"Everett Lee", why:"Lee wrote “A Theory of Migration” (1966), the push–pull model."},
     {t:"Wilbur Zelinsky", why:"Zelinsky proposed the mobility transition (1971)."}]},
   {id:"e2u10-q13", lesson:"e2u10-l2", level:2, q:"Amara’s family farms cocoa. Prices swing wildly and there is no crop insurance, so the family pays for her brother to work in a city. Which theory fits best?", options:[
     {t:"NELM: the household spreads risk by placing a member in a different labour market", ok:true, why:"Right. Missing insurance and risk-spreading are NELM’s central ideas."},
     {t:"Dual labour market theory", why:"That theory focuses on employers’ demand at the destination, not the family’s risk at home."},
     {t:"Zelinsky’s mobility transition", why:"That describes long-run phases of mobility in a society, not one family’s risk strategy."},
     {t:"Ravenstein’s counter-stream", why:"A counter-stream is a return flow; this is a family strategy for sending someone out."}]},
   {id:"e2u10-q14", lesson:"e2u10-l2", level:3, q:"Researchers find that households in a village are more likely to send a migrant after neighbours build houses with remittances, even when their own income hasn’t changed. Which idea explains this?", options:[
     {t:"Relative deprivation", ok:true, why:"Right. Stark and Taylor argued that feeling poorer compared with others can motivate migration."},
     {t:"Absolute poverty", why:"Their income hasn’t changed, so it isn’t absolute poverty that has shifted, but the comparison."},
     {t:"Brain gain", why:"Brain gain is about skills increasing at home, not households comparing their wealth."},
     {t:"Step migration", why:"Step migration is about moving in stages, not about why households decide to send someone."}]},
   {id:"e2u10-q15", lesson:"e2u10-l2", level:1, q:"In Piore’s dual labour market theory, what is the **secondary sector**?", options:[
     {t:"Insecure, low-paid, low-status jobs with few prospects", ok:true, why:"Correct. Piore argued rich economies have a permanent demand for workers in these jobs."},
     {t:"The farming sector in poor countries", why:"Piore’s sectors are inside the labour markets of rich industrial economies."},
     {t:"Secure, well-paid professional jobs", why:"That describes the primary sector."},
     {t:"Jobs in government", why:"The split is by security, pay and status, not by public versus private employer."}]},
   {id:"e2u10-q16", lesson:"e2u10-l2", level:2, q:"Why, according to Piore, don’t employers simply raise wages in low-status jobs to attract local workers?", options:[
     {t:"Wages signal status, so raising pay at the bottom would push up pay all the way up the job ladder.", ok:true, why:"Right. Piore called this structural inflation; recruiting migrants avoids it."},
     {t:"Because the law forbids raising wages", why:"Piore’s argument is about the structure of pay and status, not a legal ban."},
     {t:"Because local workers don’t need money", why:"Local workers need income; they avoid low-status jobs for reasons of status and identity."},
     {t:"Because migrants always demand higher wages than local workers", why:"Piore argued the opposite: target-earning migrants may accept low-status jobs."}]},
   {id:"e2u10-q17", lesson:"e2u10-l2", level:2, q:"Large numbers of migrants from one country move to the country that once ruled it as a colony, sharing its language. Which theory gives this the most weight?", options:[
     {t:"Historical-structural (world-systems) theory", ok:true, why:"Right. These views stress colonial ties, language, trade and investment as links that channel migration."},
     {t:"Neoclassical micro theory", why:"It focuses on individual wage calculations, not historical links between countries."},
     {t:"NELM", why:"NELM focuses on household risk and income, not colonial history."},
     {t:"Ravenstein’s step migration", why:"Step migration is about stages of movement, not colonial links."}]},
   {id:"e2u10-q18", lesson:"e2u10-l2", level:3, q:"A critic says: “Neoclassical theory predicts that migration should stop once wages are equal, yet migration often continues after wage gaps shrink.” Which theories in this unit help explain continued migration?", options:[
     {t:"Network and cumulative causation theories, because ties built up over time keep lowering the cost of moving", ok:true, why:"Right. Once networks exist, migration can continue even when the original wage gap has narrowed (Lesson 3)."},
     {t:"Only Ravenstein’s laws, because they are laws of nature", why:"Ravenstein’s patterns are generalisations, not laws, and don’t explain persistence."},
     {t:"No theory can explain it", why:"Network theory and cumulative causation were developed partly to explain persistence."},
     {t:"The Harris–Todaro model, because it says wages never matter", why:"Harris–Todaro is about expected wages; it says wages matter a great deal."}]},
   /* ---- Lesson 3 ---- */
   {id:"e2u10-q19", lesson:"e2u10-l3", level:1, q:"What is a migration network?", options:[
     {t:"Ties of family, friendship and shared community linking migrants, former migrants and non-migrants", ok:true, why:"Correct. This follows Massey and colleagues’ 1993 description."},
     {t:"A government database of migrants", why:"A network here means personal ties, not a database."},
     {t:"A computer network used by border agencies", why:"The term is about social ties, not technology."},
     {t:"An international treaty on migration", why:"Treaties are legal agreements between states, not personal ties."}]},
   {id:"e2u10-q20", lesson:"e2u10-l3", level:2, q:"Sione moves to Auckland and stays with his aunt, who found him a job at her workplace. Next year he helps his friend do the same. This is an example of…", options:[
     {t:"chain migration", ok:true, why:"Right. Housing and work arranged through personal ties with earlier migrants, then passed on."},
     {t:"brain waste", why:"Brain waste is about skills going unused, not about how the move was arranged."},
     {t:"planned relocation", why:"Planned relocation is an organised move of a whole community, usually for environmental reasons."},
     {t:"involuntary immobility", why:"Sione did move. Involuntary immobility is wanting to move but being unable to."}]},
   {id:"e2u10-q21", lesson:"e2u10-l3", level:1, q:"Who applied the idea of cumulative causation to migration in 1990?", options:[
     {t:"Douglas Massey", ok:true, why:"Correct. Massey (1990, *Population Index*) built on Gunnar Myrdal’s 1957 concept."},
     {t:"E. G. Ravenstein", why:"Ravenstein wrote in the 1880s, about distance and steps."},
     {t:"Arlie Russell Hochschild", why:"Hochschild developed the idea of global care chains (2000)."},
     {t:"Michael Clemens", why:"Clemens is known for work on the migration hump."}]},
   {id:"e2u10-q22", lesson:"e2u10-l3", level:2, q:"Which of these is a mechanism of **cumulative causation**?", options:[
     {t:"In a village where many have left, going abroad becomes a normal step into adulthood.", ok:true, why:"Right. A culture of migration is one of the mechanisms Massey and colleagues describe."},
     {t:"A government builds a seawall that lets a village stay.", why:"That reduces the need to move; it isn’t migration feeding itself."},
     {t:"A treaty defines trafficking.", why:"That is a legal definition, not a social process that makes migration self-reinforcing."},
     {t:"A census records birthplaces.", why:"That is a way of measuring migration, not a cause of more migration."}]},
   {id:"e2u10-q23", lesson:"e2u10-l3", level:3, q:"A researcher finds that in large cities, having relatives abroad barely changes people’s chances of migrating, while in small rural towns it raises them a lot. How does this fit the research?", options:[
     {t:"It matches Fussell and Massey’s (2004) finding that cumulative causation is weaker in big cities, where people have other networks and options.", ok:true, why:"Right. Their study of Mexico found the limits of cumulative causation in urban areas."},
     {t:"It disproves network theory completely.", why:"Networks still matter strongly in rural towns; the finding shows where their effect weakens."},
     {t:"It shows Ravenstein was wrong about distance.", why:"The finding is about networks, not distance."},
     {t:"It shows that cities produce more refugees.", why:"Nothing here is about forced displacement."}]},
   {id:"e2u10-q24", lesson:"e2u10-l3", level:1, q:"Which geographer analysed rural–urban migration in Africa as a system with feedback (1970)?", options:[
     {t:"Akin Mabogunje", ok:true, why:"Correct. His 1970 article is a founding text of migration systems theory."},
     {t:"Wilbur Zelinsky", why:"Zelinsky proposed the mobility transition (1971)."},
     {t:"Everett Lee", why:"Lee wrote the 1966 push–pull model."},
     {t:"Michael Piore", why:"Piore developed dual labour market theory."}]},
   {id:"e2u10-q25", lesson:"e2u10-l3", level:1, q:"In de Haas’s framework, what are **migration capabilities**?", options:[
     {t:"People’s freedom to move: freedom from obstacles (negative liberty) and the means to act (positive liberty)", ok:true, why:"Correct. De Haas draws on Isaiah Berlin’s two liberties and on Sen’s capabilities."},
     {t:"People’s wish to move", why:"That is aspirations, the other half of the framework."},
     {t:"A country’s border controls", why:"Border rules affect capabilities, but capabilities are about people’s freedom and means to move."},
     {t:"The number of migrants a country accepts", why:"That is a policy outcome, not the concept of capability."}]},
   {id:"e2u10-q26", lesson:"e2u10-l3", level:2, q:"Kenji has a passport, savings and a job offer abroad, but decides he wants to stay near his family. In de Haas’s framework, he is an example of…", options:[
     {t:"voluntary immobility", ok:true, why:"Right. He is able to move but chooses not to."},
     {t:"involuntary immobility", why:"That would mean he wants to move but can’t. Kenji can, and chooses not to."},
     {t:"acquiescent immobility", why:"That combines low aspirations with low capabilities; Kenji’s capabilities are high."},
     {t:"voluntary mobility", why:"That would mean he wants to move and does. He stays."}]},
   {id:"e2u10-q27", lesson:"e2u10-l3", level:3, q:"Surveys suggest far more people would like to emigrate than actually do. Which explanation best uses the aspirations–capabilities framework?", options:[
     {t:"Many have aspirations to move but lack capabilities such as money, documents, visas or contacts.", ok:true, why:"Right. This gap is what Carling called involuntary immobility."},
     {t:"People who say they want to move are lying.", why:"Survey answers can be unstable, but the framework explains the gap through constraints, not dishonesty."},
     {t:"Push factors are too weak everywhere.", why:"Push–pull language misses the issue: the gap is between wanting and being able."},
     {t:"Migration networks prevent everyone from moving.", why:"Networks usually make moving easier; lacking them is one capability constraint."}]},
   /* ---- Lesson 4 ---- */
   {id:"e2u10-q28", lesson:"e2u10-l4", level:1, q:"What did Zelinsky’s 1971 “mobility transition” propose?", options:[
     {t:"That the kinds and amounts of movement change in regular phases as societies modernise, alongside the demographic transition", ok:true, why:"Correct. Zelinsky linked mobility phases to the demographic transition."},
     {t:"That migration always falls as countries develop", why:"His phases include a surge in rural–urban migration and emigration during early transition."},
     {t:"That refugees should be resettled", why:"His hypothesis is about patterns of mobility, not refugee policy."},
     {t:"That households spread risk through migration", why:"That is NELM (Stark and Bloom, 1985)."}]},
   {id:"e2u10-q29", lesson:"e2u10-l4", level:1, q:"Across countries today, where is emigration usually highest?", options:[
     {t:"In middle-income countries", ok:true, why:"Correct. This is the migration hump: lower in the poorest and the richest countries."},
     {t:"In the poorest countries", why:"The poorest often lack the money, education and contacts to emigrate in large numbers."},
     {t:"In the richest countries", why:"Emigration tends to be lower in rich countries, which usually receive more immigrants."},
     {t:"Equally everywhere", why:"Cross-country data show a clear hump shape, not an even spread."}]},
   {id:"e2u10-q30", lesson:"e2u10-l4", level:2, q:"Why might rising incomes in a poor country increase emigration at first?", options:[
     {t:"More households can afford the costs of moving, and education and information raise aspirations.", ok:true, why:"Right. Development raises both capabilities and aspirations."},
     {t:"Because richer people always dislike their home country", why:"The explanation is about resources and aspirations, not dislike of home."},
     {t:"Because rich countries stop accepting migrants", why:"That would reduce emigration, not increase it."},
     {t:"Because development makes travel more expensive", why:"Development usually makes travel more affordable."}]},
   {id:"e2u10-q31", lesson:"e2u10-l4", level:3, q:"A politician cites a chart showing middle-income countries have the highest emigration, and says: “Growth in any poor country will therefore increase emigration for years.” What is the most accurate response?", options:[
     {t:"The chart compares countries; studies that follow countries over time disagree on whether each country follows the hump.", ok:true, why:"Right. Clemens (2020) argued it holds over time; Schneiderheinze and Benček (2024) found emigration falling with income in panel data."},
     {t:"The claim is proven: cross-country charts always show what each country will do.", why:"Inferring change within a country from differences between countries is a mistake of levels, like the ecological fallacy."},
     {t:"Growth always reduces emigration immediately.", why:"That is also not established; evidence on short-run effects is mixed and effects are gradual."},
     {t:"Charts can’t tell us anything about migration.", why:"Cross-country data are real evidence; the question is what they can and can’t show."}]},
   {id:"e2u10-q32", lesson:"e2u10-l4", level:1, q:"What is **brain waste**?", options:[
     {t:"Skilled migrants working in jobs far below their training, for example because qualifications aren’t recognised", ok:true, why:"Correct. Their skills are lost to both the origin and the destination."},
     {t:"Skilled people leaving their country", why:"That is brain drain."},
     {t:"More people training because they might emigrate", why:"That is the incentive effect behind brain gain."},
     {t:"Skilled migrants returning home", why:"That is part of brain circulation."}]},
   {id:"e2u10-q33", lesson:"e2u10-l4", level:2, q:"Abarcar and Theoharides (2024) studied nurses in the Philippines. What did they find when US demand for nurses rose?", options:[
     {t:"Nursing enrolment and licensing rose, with about nine extra licensed nurses per emigrant, though exam pass rates fell", ok:true, why:"Correct. Evidence of an incentive (brain gain) effect, with a cost in measured quality."},
     {t:"Nursing schools closed because everyone emigrated", why:"Enrolment and the number of nursing programmes rose, not fell."},
     {t:"Nothing changed in the Philippines", why:"They found large changes in nursing education."},
     {t:"Quality of training rose sharply", why:"Measured quality (licensing-exam pass rates) fell."}]},
   {id:"e2u10-q34", lesson:"e2u10-l4", level:3, q:"Fatima asks whether skilled emigration is good or bad for countries of origin. What is the best summary of the research?", options:[
     {t:"It depends on how many leave, the sector, whether migrants return or stay connected, and policies in both countries.", ok:true, why:"Right. Researchers find both losses (brain drain, brain waste) and gains (incentive effects, remittances, circulation)."},
     {t:"It is always a pure loss.", why:"Evidence on incentive effects, remittances and circulation shows gains as well as losses."},
     {t:"It is always a pure gain.", why:"Losing many of a small country’s doctors or nurses can harm health services."},
     {t:"It has no effect either way.", why:"Studies find real effects in both directions."}]},
   {id:"e2u10-q35", lesson:"e2u10-l4", level:1, q:"Which statement about the WHO Global Code of Practice on the International Recruitment of Health Personnel is correct?", options:[
     {t:"It is voluntary and was adopted by the World Health Assembly in 2010.", ok:true, why:"Correct. It promotes ethical recruitment and support for health systems with shortages."},
     {t:"It bans health workers from emigrating.", why:"It guides recruiters and governments; it doesn’t remove anyone’s right to move."},
     {t:"It is part of the 1951 Refugee Convention.", why:"It is a separate WHO instrument about health worker recruitment."},
     {t:"It only covers doctors in Europe.", why:"It is global and covers health personnel generally."}]},
   {id:"e2u10-q36", lesson:"e2u10-l4", level:2, q:"Which countries are often cited as having moved from mainly sending emigrants to receiving many immigrants within a few decades, as Zelinsky’s model suggests?", options:[
     {t:"Italy, Spain, Ireland and the Republic of Korea", ok:true, why:"Right. Each went from large emigration to significant immigration as its economy grew."},
     {t:"Only countries that never had any emigration", why:"The point is that these countries did have large emigration before."},
     {t:"No country has ever made this change", why:"Several have, which is why the model is discussed."},
     {t:"The poorest countries, as soon as their incomes began to rise", why:"The hump suggests emigration from the poorest countries often rises at first as incomes grow. These four changed from emigration to immigration as they became high-income economies."}]},
   /* ---- Lesson 5 ---- */
   {id:"e2u10-q37", lesson:"e2u10-l5", level:1, q:"According to UN DESA, what share of international migrants were women and girls in mid-2024?", options:[
     {t:"Just under half (48%)", ok:true, why:"Correct. UN DESA’s 2024 estimates put women and girls at 48%."},
     {t:"About a quarter", why:"The share has been close to half for decades."},
     {t:"About 75%", why:"Women are not a large majority; they are just under half."},
     {t:"Exactly 50% in every region", why:"Shares vary by region; globally the figure was 48%."}]},
   {id:"e2u10-q38", lesson:"e2u10-l5", level:2, q:"What does “feminisation of migration” most accurately describe?", options:[
     {t:"More women migrating independently as workers and main earners, and greater attention to women in research", ok:true, why:"Right. It is about how women migrate and how visible they are, not a female majority."},
     {t:"Women becoming a large majority of all migrants", why:"UN DESA puts women and girls at 48%; male migration has recently grown faster."},
     {t:"Migration laws written only for women", why:"The term describes patterns of migration, not laws."},
     {t:"Men no longer migrating", why:"Men are still just over half of international migrants."}]},
   {id:"e2u10-q39", lesson:"e2u10-l5", level:1, q:"Who coined the term “global care chain” (2000)?", options:[
     {t:"Arlie Russell Hochschild", ok:true, why:"Correct. In “Global Care Chains and Emotional Surplus Value” (2000)."},
     {t:"Hein de Haas", why:"De Haas developed the aspirations–capabilities framework."},
     {t:"Douglas Massey", why:"Massey is known for cumulative causation and network theory."},
     {t:"Michael Piore", why:"Piore developed dual labour market theory."}]},
   {id:"e2u10-q40", lesson:"e2u10-l5", level:1, q:"Why is “climate refugee” not a legal category under the 1951 Refugee Convention?", options:[
     {t:"The Convention’s definition covers persecution for reasons of race, religion, nationality, membership of a particular social group or political opinion, not environmental change.", ok:true, why:"Correct. Environmental reasons aren’t among the Convention grounds."},
     {t:"Because the Convention only applies to Europe today", why:"The 1967 Protocol removed the original geographic and time limits."},
     {t:"Because climate change didn’t exist in 1951", why:"The issue is the definition’s grounds, not when the climate began to change."},
     {t:"Because people displaced by disasters never get any protection", why:"They may get protection in other ways, such as human rights law, regional instruments or national schemes."}]},
   {id:"e2u10-q41", lesson:"e2u10-l5", level:3, q:"After repeated floods, Ana’s district loses many families. Based on the research, where did most of them probably go?", options:[
     {t:"Within their own country, often to nearby towns, and some only temporarily", ok:true, why:"Right. Most environment-related movement is internal and short-distance."},
     {t:"Overseas to another continent", why:"Long-distance international moves are the exception, not the rule."},
     {t:"Into refugee camps abroad under the 1951 Convention", why:"Floods aren’t Convention grounds, and most people stay in their own country."},
     {t:"Nowhere: floods never cause people to move", why:"Disasters cause millions of displacements each year (IDMC)."}]},
   {id:"e2u10-q42", lesson:"e2u10-l5", level:2, q:"What is **planned relocation**?", options:[
     {t:"The organised move of a whole community to a new place, usually as a last resort against environmental risk", ok:true, why:"Correct. Vunidogoloa in Fiji (2014) is a well-known example."},
     {t:"A visa lottery for individual workers", why:"That is an individual migration pathway, not a community relocation."},
     {t:"Deporting migrants to their country of origin", why:"Planned relocation is about moving communities away from hazards, not deportation."},
     {t:"A person’s step-by-step move to a city", why:"That is step migration."}]},
   {id:"e2u10-q43", lesson:"e2u10-l5", level:1, q:"Which is true of human trafficking under the 2000 Trafficking Protocol?", options:[
     {t:"It can happen entirely within one country.", ok:true, why:"Correct. Trafficking doesn’t require crossing a border."},
     {t:"It always involves illegal entry into another country.", why:"That describes smuggling. Trafficking may involve no border at all."},
     {t:"A victim’s consent always makes it legal.", why:"Consent is irrelevant where any of the listed means is used, and for children."},
     {t:"It only concerns adults.", why:"For children, no means is needed: moving a child for exploitation is trafficking."}]},
   {id:"e2u10-q44", lesson:"e2u10-l5", level:3, q:"Dmitri pays a man to get him across a border without papers. On arrival he is locked in a house and forced to work to pay off a debt that keeps growing. How should this be described?", options:[
     {t:"It began as smuggling and became trafficking once he was held and forced to work.", ok:true, why:"Right. The journey fits smuggling; the coercion for exploitation on arrival fits trafficking. The two can overlap."},
     {t:"Only smuggling, because he agreed to the journey", why:"His agreement to the journey doesn’t cover the exploitation; once force and debt bondage are used, it is trafficking."},
     {t:"Neither, because he chose to travel", why:"Choosing to travel doesn’t remove the crimes committed against him."},
     {t:"Only planned relocation", why:"Planned relocation is an organised community move, unrelated to this case."}]},
   {id:"e2u10-q45", lesson:"e2u10-l5", level:2, q:"What does the Smuggling Protocol (2000) say about the criminal liability of smuggled migrants?", options:[
     {t:"Migrants shall not become liable to criminal prosecution under the Protocol for having been smuggled.", ok:true, why:"Correct. Article 5 says this; the Protocol targets the smugglers."},
     {t:"Migrants must always be prosecuted as smugglers.", why:"Article 5 says the opposite."},
     {t:"Migrants lose the right to seek asylum.", why:"Its saving clause keeps obligations under refugee law, including non-refoulement."},
     {t:"Only migrants who pay more than a set amount are protected.", why:"The Protocol sets no such threshold."}]}
  ]
});
