/* International Studies · Unit 14 · Development: ideas, measures and debates */
ICA.addUnit({
  id:"e4u14", track:"e4", n:14, title:"Development: ideas, measures and debates", icon:"🌱",
  blurb:"Development studies at seminar level: what “development” means and how it is measured, from GDP and the international poverty line to Sen’s capabilities, the Human Development Index, multidimensional poverty and the “beyond GDP” agenda; the rival theories, from modernisation and dependency to post-development; the East Asian developmental state and the Washington Consensus; whether aid works, from the Sachs–Easterly debate to randomised trials and new donors; and the deep causes of prosperity and inequality, told neutrally with the evidence on each side.",
  goals:[
    "Explain the difference between growth and human development, and use Sen’s capability approach to analyse a real case",
    "Read the main development measures (GDP and GNI, the international poverty line, the HDI and the MPI) critically, with their current figures as of November 2026 and what each one leaves out",
    "Compare modernisation, structuralist and dependency, world-systems and post-development theories, with their key works and critics",
    "Weigh the rival explanations of East Asia’s growth and the debate over the Washington Consensus and what replaced it",
    "Assess the evidence and arguments on aid effectiveness, randomised trials and South–South cooperation without taking sides",
    "Use the institutions, geography and culture debates and the evidence on global inequality to argue a development question in a seminar"
  ],
  read:[
    {book:"robeyns", where:"Chapter 2 “Core Ideas and the Framework” and Chapter 4 “Critiques and Debates”", note:"An open-access guide to the capability approach by one of its leading scholars. Read it alongside Lessons 1 and 5."},
    {book:"hdr25", where:"The Overview, and the statistical annex tables on the HDI and its companion indices", note:"The current edition of the report that introduced the HDI in 1990. The 2026 report is due on 1 December 2026."},
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"A short, free background chapter. The lessons go further; read it as a second voice."},
    {book:"osecon", where:"Chapter 20 “Economic Growth” (especially 20.4 “Economic Convergence”) and Chapter 32, section 32.2 “Improving Countries’ Standards of Living”", note:"The economics behind growth and catching up, explained without heavy maths."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u14-l1", title:"What “development” means: growth, freedom and measurement", minutes:60,
   hook:{q:"In June 2025 the World Bank’s count of people in extreme poverty in 2022 rose from about 713 million to about 838 million, without anyone’s life changing. Why?", options:["A famine struck several countries in 2025","The World Bank adopted new price data and raised its poverty line from $2.15 to $3.00 a day","Population growth was revised sharply upwards","Several countries stopped sending data"], answer:1, reveal:"**The measuring stick changed.** New 2021 price comparisons and updated national poverty lines in the poorest countries moved the international line from $2.15 to $3.00 a day, and about 125 million more people fell below it for the same year. Measures are not neutral windows on reality: they embody choices about what development is. This lesson looks at those choices, from GDP to capabilities."},
   goals:[
     "Distinguish economic growth from development, and say what GDP and GNI measure and miss",
     "Explain Sen’s capability approach: resources, conversion factors, capabilities, functionings and agency",
     "Describe how the HDI is built, why Mahbub ul Haq designed it, and its main critiques",
     "Apply the international poverty line and the Multidimensional Poverty Index correctly, with current figures",
     "Summarise the “beyond GDP” agenda as of November 2026"
   ],
   learn:[
    {h:"Development of what, and for whom?", body:[
      {lead:"Two countries have the same income per person. In one, most children finish secondary school and people live into their late seventies; in the other, many children leave school early and life is much shorter. Are they equally “developed”?"},
      "For most of the twentieth century the answer was, roughly, yes: development meant [[economic-growth|economic growth]], a rising output of goods and services per person. The primer introduced a different answer, Amartya Sen’s idea of development as freedom and the [[human-development-index|Human Development Index]] (see {{development-ir}} and {{measuring-inequality}}). This unit takes the argument to seminar level.",
      "Keep three questions apart. **What is development?** (a definition, which is partly a value judgement). **How do we measure it?** (indicators, each with blind spots). **What causes it?** (theories, Lessons 2 to 5). Many seminar arguments go wrong because people answer the third question while disagreeing, without noticing, about the first.",
      {key:"Every development measure is a theory of the good life in disguise. Ask what it counts, what it leaves out, and who chose."}
    ]},
    {h:"Growth as development, and its limits", body:[
      "[[gdp|Gross domestic product]] (GDP) is the market value of final goods and services produced in a country in a year; [[gni|gross national income]] (GNI) adds income residents earn abroad and subtracts income sent out. The World Bank’s income groups use GNI per person. Both are averages, measured in money.",
      "The case for growth is strong. Poverty fell fastest where economies grew fastest, in East and then South Asia. David Dollar and Aart Kraay’s much-cited paper “Growth Is Good for the Poor” (2002) found that, on average across countries, incomes of the poorest fifth rose in step with average incomes. Growth also pays for schools, clinics and pensions.",
      "The case against equating the two is just as old. Simon Kuznets, who built the first US national accounts, warned in his 1934 report to the US Senate that the welfare of a nation can scarcely be inferred from a measure of national income. GDP counts output, not who gets it; it ignores unpaid care work, mostly done by women; it counts the cleanup after a disaster as a gain; and it says nothing about depleting forests, fish or the climate.",
      "One of Sen’s best-known illustrations in *Development as Freedom* (1999) is about survival: he noted that African American men in the United States, though far richer in income than people in China or the Indian state of Kerala, had a lower chance of reaching advanced ages than men there. Income was not turning into the most basic freedom, staying alive."
    ]},
    {h:"Sen’s capability approach", body:[
      "Amartya Sen ({{amartya-sen}}), who received the 1998 economics Nobel prize for contributions to welfare economics, built the [[capability|capability]] approach from the late 1970s, notably in *Commodities and Capabilities* (1985) and *Development as Freedom* (1999). Its vocabulary is now standard in seminars:",
      {table:[
        ["Term","Meaning","Example"],
        ["Resources (means)","Income, goods, services","A bicycle; a school place"],
        ["[[conversion-factor|Conversion factors]]","Personal, social and environmental conditions that turn resources into freedoms","Health; roads; norms about who may ride"],
        ["[[capability|Capabilities]]","Real freedoms: the combinations of beings and doings a person could achieve","Being able to reach the market or attend school"],
        ["[[functioning|Functionings]]","What a person actually is and does","Riding to market today; being literate"],
        ["Agency","The freedom to pursue goals one has reason to value, including for others","Choosing to fast, or to campaign"]
      ]},
      "Development, for Sen, is the **expansion of capabilities**, and freedom is both its end and its main means. He named five instrumental freedoms that reinforce each other: political freedoms, economic facilities, social opportunities (such as schooling and health care), transparency guarantees and protective security.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="e4u14-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="20" y="10" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Resources</text><text class="s" x="170" y="54" text-anchor="middle">income, goods and services</text><path class="d-ink" d="M60 70 V114" stroke-width="2" marker-end="url(#e4u14-l1-a)"/><text class="s" x="76" y="88">conversion factors: personal,</text><text class="s" x="76" y="104">social and environmental</text><rect class="d-gold" x="20" y="120" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="144" text-anchor="middle">Capabilities</text><text class="s" x="170" y="164" text-anchor="middle">real freedoms: what you can be and do</text><path class="d-ink" d="M60 180 V224" stroke-width="2" marker-end="url(#e4u14-l1-a)"/><text class="s" x="76" y="206">choice: the person’s agency</text><rect class="d-sage" x="20" y="230" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="254" text-anchor="middle">Functionings</text><text class="s" x="170" y="274" text-anchor="middle">what you actually are and do</text><rect class="d-panel" x="20" y="304" width="300" height="108" rx="8"/><text class="s" x="32" y="326">Example: a bicycle is a resource. It gives</text><text class="s" x="32" y="344">mobility only if the rider is healthy, there</text><text class="s" x="32" y="362">are roads and norms let her ride. Being able</text><text class="s" x="32" y="380">to reach the market is a capability; riding</text><text class="s" x="32" y="398">there today is a functioning.</text></svg>', alt:"Three boxes stacked from top to bottom with arrows between them. Resources (income, goods and services) lead, through conversion factors that are personal, social and environmental, to capabilities, the real freedoms of what you can be and do. Capabilities lead, through the person’s choice or agency, to functionings, what you actually are and do. A panel below gives an example: a bicycle is a resource; it gives mobility only if the rider is healthy, there are roads and norms let her ride; being able to reach the market is a capability; riding there today is a functioning.", cap:"The capability approach separates means (resources) from ends (capabilities and functionings). Conversion factors explain why equal incomes can mean unequal freedoms."},
      "Two debates follow. Martha Nussbaum (*Women and Human Development*, 2000; *Creating Capabilities*, 2011) proposed a list of ten central capabilities, from life and bodily health to play and control over one’s environment, as a basis for constitutional guarantees. Sen refuses to fix a list, arguing that public reasoning in each society should choose. Scholars working within the approach, such as Ingrid Robeyns, note the cost of that openness: the approach is a framework, not a full theory, and needs to be specified before it can guide a study."
    ]},
    {h:"From an idea to an index: Haq and the HDI", body:[
      "The Pakistani economist {{mahbub-ul-haq|Mahbub ul Haq}} turned the idea into a tool. His team at the UN Development Programme published the first [[human-development-report|Human Development Report]] in 1990, which states that “human development is a process of enlarging people’s choices”. Haq wanted a single number simple enough to compete with GDP for headlines.",
      "The HDI today combines three dimensions: a long and healthy life (life expectancy at birth), knowledge (mean years of schooling of adults and expected years of schooling of children) and a decent standard of living (the logarithm of GNI per person, in PPP dollars). Since 2010 the three normalised indices are combined by a **geometric mean**, so a very low score in one dimension can’t be fully offset by a high score in another.",
      "Critics raise three points. The weights and caps are arbitrary; Martin Ravallion showed that they imply contestable trade-offs, for example between longevity and income. The three components are highly correlated with income, so the HDI adds less than it seems. And it leaves out freedom, inequality and environmental damage, which UNDP partly answers with companion indices (inequality-adjusted, gender-related and planetary pressures-adjusted). Defenders reply that the HDI did what Haq intended: it changed the conversation.",
      "As of November 2026 the latest edition is the *Human Development Report 2025*, “A matter of choice: People and possibilities in the age of AI” (May 2025). UNDP lists the 2026 report for release on 1 December 2026."
    ]},
    {h:"Counting the poor: lines and dimensions", body:[
      "The primer showed how to apply the [[international-poverty-line|international poverty line]] in [[purchasing-power-parity|PPP]] dollars. Its history matters for seminars: each new round of global price data has moved it.",
      {fig:'<svg viewBox="0 0 340 340"><text x="170" y="20" text-anchor="middle">The World Bank’s extreme poverty line</text><text x="10" y="55">1990</text><rect class="d-soft" x="70" y="40" width="70" height="20" rx="3" stroke-width="2"/><text class="s" x="70" y="76">$1.00 a day · 1985 PPP</text><text x="10" y="107">2008</text><rect class="d-soft" x="70" y="92" width="88" height="20" rx="3" stroke-width="2"/><text class="s" x="70" y="128">$1.25 a day · 2005 PPP</text><text x="10" y="159">2015</text><rect class="d-lup" x="70" y="144" width="133" height="20" rx="3" stroke-width="2"/><text class="s" x="70" y="180">$1.90 a day · 2011 PPP</text><text x="10" y="211">2022</text><rect class="d-lup" x="70" y="196" width="151" height="20" rx="3" stroke-width="2"/><text class="s" x="70" y="232">$2.15 a day · 2017 PPP</text><text x="10" y="263">2025</text><rect class="d-gold" x="70" y="248" width="210" height="20" rx="3" stroke-width="2"/><text class="s" x="70" y="284">$3.00 a day · 2021 PPP (current)</text><text class="s" x="170" y="312" text-anchor="middle">Each line is in its own round of PPP dollars,</text><text class="s" x="170" y="328" text-anchor="middle">so the numbers are not directly comparable.</text></svg>', alt:"Five horizontal bars of increasing length, one for each year the World Bank set a new extreme poverty line: 1990, one dollar a day in 1985 PPP; 2008, 1.25 dollars in 2005 PPP; 2015, 1.90 dollars in 2011 PPP; 2022, 2.15 dollars in 2017 PPP; 2025, 3.00 dollars in 2021 PPP, the current line. A note says each line is in its own round of PPP dollars, so the numbers are not directly comparable.", cap:"Simplified: an interim line of about $1.08 (1993 PPP) around 2000 is left out. Each rise reflects new price data and, in 2025, also higher national poverty lines in the poorest countries."},
      "In June 2025 the Bank set the line at **$3.00 a day in 2021 PPP dollars**, the rounded median of national poverty lines in 23 low-income countries, with higher lines of $4.20 and $8.30 for lower-middle and upper-middle-income countries. Its September 2026 update estimates that about **824 million people (10.1%) lived in extreme poverty in 2024**, with a nowcast of 9.8% for 2026, and its *Poverty, Prosperity and Planet Report 2026* warns that progress has stalled. The Bank also tracks a [[societal-poverty-line|societal poverty line]] that rises with a country’s median income, and a “prosperity gap” measured against $28 a day.",
      "Money lines miss deprivations that money can’t easily buy. The global [[multidimensional-poverty-index|Multidimensional Poverty Index]] (MPI), built by Sabina Alkire and colleagues at Oxford with UNDP and first published in 2010, counts ten indicators at the household level:",
      {table:[
        ["Dimension (weight)","Indicators"],
        ["Health (1/3)","Nutrition; child mortality"],
        ["Education (1/3)","Years of schooling; school attendance"],
        ["Living standards (1/3)","Cooking fuel; sanitation; drinking water; electricity; housing; assets"]
      ]},
      "A person is MPI-poor if deprived in at least a third of the weighted indicators. The index multiplies the **incidence** (H, the share who are poor) by the **intensity** (A, the average share of indicators in which poor people are deprived): MPI = H × A. The 2026 global MPI (October 2026) finds **1.2 billion people, 18.9%** of 6.3 billion in 108 countries, in acute multidimensional poverty. Money-poor and MPI-poor people overlap only partly, which is the point of measuring both.",
      {warn:"Don’t compare a poverty count made on one line or PPP round with a count made on another. Ask for the line, the price base and the year of the data."}
    ]},
    {h:"Beyond GDP, as of November 2026", body:[
      "The search for better compasses has a long history. Bhutan’s fourth king is credited with the idea of [[gross-national-happiness|Gross National Happiness]] in the 1970s, and Bhutan’s 2008 constitution asks the state to promote conditions for it. In 2009 the [[stiglitz-sen-fitoussi-commission|Stiglitz–Sen–Fitoussi Commission]], set up by France’s president, recommended dashboards of well-being and sustainability alongside GDP.",
      "The UN took the idea up in the Pact for the Future (2024; see {{pact-for-the-future}}). On 7 May 2026 the Secretary-General’s independent High-Level Expert Group on Beyond GDP, co-chaired by Kaushik Basu and Nora Lustig, presented its report *Counting what counts: A compass of progress for people and planet*, proposing a dashboard of 31 indicators, about half drawn from the SDGs. Intergovernmental consultations followed; an elements paper was finalised in September 2026, and governments remain divided over whether the framework should include a single headline number.",
      "Sceptics argue that dashboards spread attention thinly and that no single rival number has dethroned GDP because GDP answers a narrower question well. Supporters reply that what is measured is what gets managed, and that GDP alone rewards depleting nature (Unit 16 takes up the environmental side; Unit 17 the SDG indicators).",
      {terms:["economic-growth","gdp","gni","capability","functioning","conversion-factor","human-development","human-development-report","multidimensional-poverty-index","poverty-headcount","societal-poverty-line","gross-national-happiness","stiglitz-sen-fitoussi-commission"]}
    ]}
   ],
   try:[
    {id:"e4u14-l1-x1", type:"mcq", q:"Hana compares two countries with the same GNI per person. In one, life expectancy is nine years higher. Which statement fits the lesson best?", options:[
      {t:"Income is a means; how far it turns into longer, freer lives depends on other conditions, such as health systems and who gets the income", ok:true, why:"Right. That is the core of the capability approach, and the reason the HDI adds health and education to income."},
      {t:"The measurements must be wrong, because equal income means equal development", why:"That assumes what is in question. Countries with similar incomes really do differ widely in health and schooling."},
      {t:"The country with longer lives must have higher GDP growth", why:"Growth rates and income levels are different things, and neither guarantees longer lives."},
      {t:"Life expectancy is not a development indicator", why:"It is one of the HDI’s three dimensions and one of Sen’s favourite examples of a basic capability."}
    ]},
    {id:"e4u14-l1-x2", type:"sort", q:"In the capability approach, is each item a **resource**, a **capability** or a **functioning**?", buckets:["Resource (means)","Capability (real freedom)","Functioning (achieved)"], items:[
      {t:"A monthly cash transfer of a fixed amount", b:0, why:"Money is a means; what it becomes depends on conversion factors."},
      {t:"Being able to attend secondary school if she chooses", b:1, why:"A real, effective opportunity: a capability."},
      {t:"Being well nourished this year", b:2, why:"A state of being actually achieved: a functioning."},
      {t:"A sack of rice from a food bank", b:0, why:"A good, so a resource; whether it becomes being well nourished depends on conversion factors such as health and cooking fuel."},
      {t:"Being free to take part in the life of the community", b:1, why:"An opportunity the person may or may not use: a capability."},
      {t:"Voting in last month’s election", b:2, why:"Something actually done: a functioning (the freedom to vote is the capability)."}
    ]},
    {id:"e4u14-l1-x3", type:"mcq", q:"Why has the HDI combined its three dimension indices with a geometric mean since 2010, rather than a simple average?", options:[
      {t:"So that a very low score in one dimension can’t be fully offset by a high score in another", ok:true, why:"Right. With a geometric mean, a country with high income but very poor health scores lower than a simple average would give it."},
      {t:"To give income twice the weight of health and education", why:"The three dimensions are treated symmetrically; income is already logged to reduce its weight."},
      {t:"Because geometric means are always higher, making progress look better", why:"A geometric mean is never higher than the simple average of the same numbers."},
      {t:"To add inequality and the environment to the index", why:"Those are handled by companion indices (inequality-adjusted and planetary pressures-adjusted HDIs), not by the mean."}
    ]},
    {id:"e4u14-l1-x4", type:"match", q:"Match each measure to what it counts.", pairs:[
      ["International poverty line","Whether a person’s daily consumption or income is below $3.00 in 2021 PPP dollars","The World Bank’s extreme poverty line since June 2025."],
      ["Multidimensional Poverty Index","Overlapping household deprivations in health, education and living standards","Ten indicators; poor if deprived in a third or more of them (weighted)."],
      ["Human Development Index","A country’s average achievement in health, knowledge and living standards","Three dimensions combined by a geometric mean."],
      ["GNI per person","Average income of a country’s residents in money terms","The basis of the World Bank’s income groups."],
      ["Societal poverty line","A poverty line that rises with a country’s median income","It reflects the idea that needs grow as societies get richer."]
    ]},
    {id:"e4u14-l1-x5", type:"number", q:"In a district survey, 30% of people are multidimensionally poor (H), and on average they are deprived in 50% of the weighted indicators (A). What is the district’s MPI value? (Give it as a decimal between 0 and 1.)", answer:0.15, tol:0.005, unit:"", why:"MPI = H × A = 0.30 × 0.50 = **0.15**. The index rises if more people are poor (H) or if the poor are more deprived (A), which is why it is called an adjusted headcount.", wrongs:[
      {v:0.8, tol:0.005, why:"That adds H and A (0.30 + 0.50). The MPI multiplies them."},
      {v:15, tol:0.5, why:"That mixes a percentage with a decimal (30 × 0.5). Use 0.30 × 0.50."},
      {v:0.6, tol:0.005, why:"That divides H by A (0.30 ÷ 0.50). The formula multiplies incidence by intensity."}
    ], hint2:"Write both as decimals, then multiply."},
    {id:"e4u14-l1-x6", type:"spot", q:"A news story reports the World Bank’s poverty update. Tap each sentence that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      {t:"The World Bank now draws the extreme poverty line at $3.00 a day.", flag:false, why:"Correct, since June 2025, in 2021 PPP dollars."},
      " ",
      {t:"When the line rose in 2025, the count for 2022 jumped by about 125 million, which shows that poverty got much worse that year.", flag:true, why:"Misleading. The jump came from a new line and new price data applied to the same year, not from changes in people’s lives."},
      " ",
      {t:"The $3.00 is converted at market exchange rates, so it buys the same everywhere.", flag:true, why:"Wrong. The line is in purchasing power parity dollars, which adjust for price levels; market exchange rates would not."},
      " ",
      {t:"Its September 2026 update puts extreme poverty at about one person in ten in 2024.", flag:false, why:"Correct: about 824 million people, 10.1%."},
      " ",
      {t:"Measures such as the MPI count deprivations in health, schooling and living standards that a money line can miss.", flag:false, why:"Correct. That is why the two counts identify partly different people."}
    ]},
    {id:"e4u14-l1-x7", type:"order", q:"Put these milestones in the search for measures beyond GDP in order, from earliest to latest.", items:[
      {t:"Kuznets warns that a nation’s welfare can scarcely be inferred from national income", why:"1934, in the report that founded US national accounts."},
      {t:"Bhutan’s king is credited with the idea of Gross National Happiness", why:"The 1970s."},
      {t:"The first Human Development Report introduces the HDI", why:"1990, led by Mahbub ul Haq."},
      {t:"The Stiglitz–Sen–Fitoussi Commission recommends well-being dashboards", why:"2009."},
      {t:"A UN expert group proposes a 31-indicator Beyond GDP dashboard", why:"Presented on 7 May 2026."}
    ]}
   ],
   apply:{
    intro:"Turn the measures into analysis. You need only a browser and a notebook; all the data are free.",
    tasks:[
     {t:"One country, three measures", how:[
       "Choose a country (not necessarily your own).",
       "Find its GNI per person and income group in the World Bank’s country classifications, its HDI value and rank on hdr.undp.org, and, if it is covered, its global MPI on ophi.org.uk.",
       "Write three sentences: what each measure says, where they disagree, and what all three miss (for example inequality, freedom or the environment)."
     ], write:"Country… GNI per person and group… HDI value and rank… MPI and share poor… Where they disagree… What all three miss…"},
     {t:"A capability map", how:[
       "Pick one resource that a government or NGO provides, such as a public library, a clinic, a bus route or a cash transfer.",
       "Imagine three different users (for example an older man with poor eyesight, a girl in a rural area, a migrant worker without local papers).",
       "For each, list the conversion factors that help or block turning the resource into a capability."
     ], write:"Resource… User 1 and conversion factors… User 2… User 3… What a fair policy would add…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Should development be defined by income growth, by capabilities, or by something else?",
       "2. Is a single index such as the HDI more useful than a dashboard of 31 indicators?",
       "3. Who should decide what counts as poverty: experts, governments or poor people themselves?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing one country on three measures, a capability map for one resource and three users, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"robeyns", where:"Chapter 2 “Core Ideas and the Framework”", note:"Read after this lesson: the clearest open guide to functionings, capabilities and conversion factors."},
    {book:"hdr25", where:"The Overview and the statistical annex tables on the HDI and its companion indices", note:"Current HDI values and the companion indices, in UNDP’s own presentation."},
    {book:"osecon", where:"Chapter 19, section 19.5 “How Well GDP Measures the Well-Being of Society”", note:"The economist’s view of what GDP misses, in plain words."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u14-l2", title:"Theories of development: modernisation, dependency and beyond", minutes:60,
   hook:{q:"In 1969 the Brazilian sociologist Fernando Henrique Cardoso co-wrote one of the classics of dependency theory. What did he go on to become?", options:["President of Brazil, from 1995 to 2002","Managing Director of the IMF","UN Secretary-General","President of the World Bank"], answer:0, reveal:"**President of Brazil (1995–2002)**, after serving as finance minister while the Real Plan, which stabilised the currency in 1994, was prepared. His governments privatised several state firms and opened the economy, and people still argue over how far that departed from his earlier analysis, which had always said that growth was possible inside dependency. Theories of development are not just academic: their authors have run ministries, banks and countries. This lesson maps the main theories and their critics."},
   goals:[
     "Explain how “development” became a global project after 1945",
     "Summarise modernisation theory (Rostow, Lewis) and its critics",
     "Explain the Prebisch–Singer thesis and the dependency school, including Cardoso and Faletto’s “dependent development”",
     "Describe post-development (Ferguson, Escobar) and the main replies to it",
     "Read one real economy through several theories"
   ],
   learn:[
    {h:"Inventing “development” after 1945", body:[
      {lead:"On 20 January 1949, in his inaugural address, US President Harry Truman announced a “bold new program” to make scientific and industrial progress available for the “improvement and growth of underdeveloped areas”. It became known as [[point-four|Point Four]]."},
      "Historians and critics often date the modern development project from that speech. Writing in *The Development Dictionary* (1992), the Mexican activist Gustavo Esteva put it sharply: on that day some two billion people became “underdeveloped”, defined by what they lacked. Decolonisation (Unit 1, {{third-world-project}}), the Cold War competition for allies and the new Bretton Woods institutions all made development a matter of world politics.",
      "A new field, **development economics**, offered the first recipes. Paul Rosenstein-Rodan (1943) argued for a coordinated [[big-push|big push]] of investment, because a single factory fails when nobody nearby can afford its goods. W. Arthur Lewis, born in Saint Lucia, described a [[dual-sector-model|dual economy]] in 1954: workers move from a low-productivity traditional sector into a modern one, and growth continues as long as the modern sector can draw on surplus labour. Lewis shared the 1979 economics Nobel prize."
    ]},
    {h:"Modernisation theory", body:[
      "The primer listed Walt Rostow’s five [[stages-of-growth|stages of growth]] (see {{theories-global-inequality}}). Read the book’s full title: *The Stages of Economic Growth: A Non-Communist Manifesto* (1960). Rostow, later national security adviser to President Lyndon Johnson, offered a Cold War alternative to Marxism: every society could follow the path of the first industrialisers, and the critical moment was [[take-off|take-off]], when investment rose sharply and new leading industries drove growth.",
      "Modernisation theory was broader than economics. Sociologists and political scientists linked development to changing values, urbanisation, literacy and mass media (Daniel Lerner’s *The Passing of Traditional Society*, 1958, studied the Middle East), and Seymour Martin Lipset (1959) argued that richer societies were more likely to sustain democracy. Nils Gilman’s history *Mandarins of the Future* (2003) shows how closely this scholarship was tied to US foreign policy.",
      "Critics made four points that still recur in seminars:",
      {list:[
        "**Ethnocentrism:** it treated the West’s path as the universal model and “traditional” societies as obstacles ([[eurocentrism]]; see [[modernization-theory|modernisation theory]] in the primer).",
        "**History:** latecomers face a world in which others have already industrialised, so the path can’t simply be repeated (Lesson 3 takes this up).",
        "**Internal causes only:** it looked for obstacles inside poor countries and ignored colonialism, trade and finance.",
        "**Politics:** “modernising” regimes, often authoritarian, received aid in its name."
      ]},
      "Defenders reply that the core claim, that rising productivity, schooling and urbanisation go together, has held up well, and that East Asia’s rise looks more like modernisation than its critics expected."
    ]},
    {h:"Structuralism and dependency from Latin America", body:[
      "The strongest challenge came from Latin America. {{raul-prebisch|Raúl Prebisch}}, who led the UN Economic Commission for Latin America (ECLA) from 1950 to 1963, argued in his 1949 report (published in English in 1950 as *The Economic Development of Latin America and its Principal Problems*) that the world economy has a **centre** that makes manufactures and a **periphery** that exports raw materials. Hans Singer reached a similar conclusion in 1950. The [[prebisch-singer-thesis|Prebisch–Singer thesis]] holds that the prices of primary commodities tend to fall over time relative to the prices of manufactures, so the [[terms-of-trade|terms of trade]] move against the periphery.",
      {ex:"Suppose a coffee exporter needs to buy tractors. At first a tractor costs $20,000 and a bag of coffee sells for $200: one tractor costs 100 bags. Years later the tractor costs $25,000 and coffee $125 a bag: the same tractor now costs **200 bags**. The farmers work as hard as before, but each bag buys half as much machinery. (Invented figures.)", label:"Worked example"},
      "The policy answer was [[import-substitution|import substitution]] industrialisation, regional integration and, through UNCTAD (Prebisch was its first head, 1964–69), demands for fairer trade rules that fed the [[new-international-economic-order|New International Economic Order]] (Unit 1).",
      "**[[dependency-theory|Dependency theory]]** radicalised the argument in the 1960s. Andre Gunder Frank’s essay “The Development of Underdevelopment” (*Monthly Review*, 1966) argued that underdevelopment is not an original state but a product of the same world capitalism that developed the core: a chain of metropolis and satellite drains surplus upward. Walter Rodney’s *How Europe Underdeveloped Africa* (1972) and Samir Amin’s work extended the argument to Africa.",
      "Fernando Henrique Cardoso and Enzo Faletto’s *Dependency and Development in Latin America* (Spanish 1969, English 1979) offered a subtler version: [[dependent-development|dependent development]]. Growth and industrialisation can happen in dependent countries, through alliances of the state, local business and multinational firms, but on terms shaped by outsiders and by local class coalitions. Peter Evans’s *Dependent Development* (1979) applied it to Brazil.",
      "How has the theory fared? Long-run studies of commodity prices generally support a downward trend for many commodities, with long swings and booms, such as the 2000s. But East Asia’s export-led growth, and later China’s, sat badly with the strong claim that ties to the core block development. Critics also noted that “delinking” strategies rarely worked."
    ]},
    {h:"World-systems: a reminder", body:[
      "Immanuel Wallerstein’s [[world-systems-theory|world-systems theory]] (from 1974) turned dependency into a historical sociology of the capitalist world-economy since the sixteenth century, with a core, a periphery and a **semi-periphery** in between (see {{theories-global-inequality}} and Unit 2’s {{marxism-ir|Marxist and critical theory}}). The semi-periphery is its answer to the East Asian puzzle: countries can move up, though the hierarchy itself remains.",
      "The timeline puts the main works of this lesson in order.",
      {fig:'<svg viewBox="0 0 340 446"><rect class="d-lup" x="14" y="11" width="14" height="14" rx="3" stroke-width="2"/><text class="s" x="34" y="22">Modernisation</text><rect class="d-rose" x="14" y="35" width="14" height="14" rx="3" stroke-width="2"/><text class="s" x="34" y="46">Structuralism, dependency</text><rect class="d-gold" x="214" y="11" width="14" height="14" rx="3" stroke-width="2"/><text class="s" x="234" y="22">World-systems</text><rect class="d-sage" x="214" y="35" width="14" height="14" rx="3" stroke-width="2"/><text class="s" x="234" y="46">Post-development</text><path class="d-ink" d="M62 86 V426" stroke-width="2"/><text x="12" y="91">1949</text><circle class="d-lup" cx="62" cy="86" r="8" stroke-width="2"/><text class="s" x="78" y="90">Truman’s “Point Four” speech</text><text x="12" y="125">1950</text><circle class="d-rose" cx="62" cy="120" r="8" stroke-width="2"/><text class="s" x="78" y="124">Prebisch and Singer: terms of trade</text><text x="12" y="159">1954</text><circle class="d-lup" cx="62" cy="154" r="8" stroke-width="2"/><text class="s" x="78" y="158">Lewis: the dual economy</text><text x="12" y="193">1960</text><circle class="d-lup" cx="62" cy="188" r="8" stroke-width="2"/><text class="s" x="78" y="192">Rostow: five stages of growth</text><text x="12" y="227">1966</text><circle class="d-rose" cx="62" cy="222" r="8" stroke-width="2"/><text class="s" x="78" y="226">Frank: development of underdevelopment</text><text x="12" y="261">1969</text><circle class="d-rose" cx="62" cy="256" r="8" stroke-width="2"/><text class="s" x="78" y="260">Cardoso &amp; Faletto: dependent development</text><text x="12" y="295">1972</text><circle class="d-rose" cx="62" cy="290" r="8" stroke-width="2"/><text class="s" x="78" y="294">Rodney: How Europe Underdeveloped Africa</text><text x="12" y="329">1974</text><circle class="d-gold" cx="62" cy="324" r="8" stroke-width="2"/><text class="s" x="78" y="328">Wallerstein: The Modern World-System</text><text x="12" y="363">1990</text><circle class="d-sage" cx="62" cy="358" r="8" stroke-width="2"/><text class="s" x="78" y="362">Ferguson: The Anti-Politics Machine</text><text x="12" y="397">1992</text><circle class="d-sage" cx="62" cy="392" r="8" stroke-width="2"/><text class="s" x="78" y="396">Sachs (ed.): The Development Dictionary</text><text x="12" y="431">1995</text><circle class="d-sage" cx="62" cy="426" r="8" stroke-width="2"/><text class="s" x="78" y="430">Escobar: Encountering Development</text></svg>', alt:"A vertical timeline of key works in development theory, colour-coded by school. Modernisation: 1949 Truman’s Point Four speech; 1954 Lewis, the dual economy; 1960 Rostow, five stages of growth. Structuralism and dependency: 1950 Prebisch and Singer on the terms of trade; 1966 Frank, the development of underdevelopment; 1969 Cardoso and Faletto, dependent development; 1972 Rodney, How Europe Underdeveloped Africa. World-systems: 1974 Wallerstein, The Modern World-System. Post-development: 1990 Ferguson, The Anti-Politics Machine; 1992 Sachs (editor), The Development Dictionary; 1995 Escobar, Encountering Development.", cap:"Key works by school. The schools overlapped in time and argued with each other; modernisation ideas did not end in 1960, nor dependency in 1974."}
    ]},
    {h:"Post-development", body:[
      "From around 1990 a different critique asked not how to achieve development but what the idea itself does. It drew on Michel Foucault’s analysis of [[discourse]] (see {{poststructuralism}}).",
      {table:[
        ["Work","Argument"],
        ["James Ferguson, *The Anti-Politics Machine* (1990)","A World Bank-backed project in Lesotho largely failed at its stated aims, but expanded state bureaucratic power while presenting political questions as technical ones: an [[anti-politics-machine|anti-politics machine]]"],
        ["Wolfgang Sachs (ed.), *The Development Dictionary* (1992)","Key words of development (needs, poverty, progress) carry Western assumptions"],
        ["Arturo Escobar, *Encountering Development* (1995)","Development is a [[development-discourse|discourse]] that made Asia, Africa and Latin America into a “Third World” defined by lack, and made peasants, women and nature objects of expert planning; his case is Colombia"],
        ["James C. Scott, *Seeing Like a State* (1998)","“High-modernist” schemes, such as Tanzania’s forced villagisation in the 1970s, fail when states impose simplified plans on complex lives"]
      ]},
      "Post-development writers look for **alternatives to development** rather than alternative development, often in social movements and indigenous ideas. Ecuador’s 2008 constitution (*sumak kawsay*) and Bolivia’s 2009 constitution wrote [[buen-vivir|buen vivir]], “living well” in harmony with community and nature, into law; degrowth thinkers in rich countries make a parallel argument (Unit 16). The critique also has older Asian roots: Mohandas Gandhi’s *Hind Swaraj* (1909) rejected industrial civilisation as a goal, and Vandana Shiva’s *Staying Alive* (1988) argued that “maldevelopment” in India harmed women and ecosystems together.",
      "The replies are pointed. Ray Kiely (1999) and Jan Nederveen Pieterse (2000) argued that post-development romanticises the local, treats “development” as one monolithic thing, and has little to say to people who want clean water, vaccines and schooling, which, the critics note, many poor people say they want. Escobar’s 2011 edition answered some critics by reframing the project as “pluriversal” studies."
    ]},
    {h:"Using the theories today", body:[
      {ex:"Bangladesh’s garment industry grew from a few factories around 1980 into one of the world’s largest export industries, employing millions, many of them women.\n\n• **Modernisation:** a textbook take-off through light manufacturing, with rising female employment and schooling.\n• **Structuralist or dependency:** a low-value niche in chains controlled by foreign brands, with constant price pressure; the Rana Plaza collapse of April 2013, which killed more than 1,100 workers, showed who bore the risks.\n• **World-systems:** a peripheral or semi-peripheral position, with mobility possible but not guaranteed.\n• **Post-development:** who defined this as progress, and what do workers’ own organisations demand?", label:"Worked example: one economy, four theories"},
      "A good seminar paper does not crown one theory. It says which question each theory answers best and what evidence would tell them apart.",
      {terms:["point-four","big-push","dual-sector-model","stages-of-growth","take-off","prebisch-singer-thesis","terms-of-trade","development-of-underdevelopment","dependent-development","development-discourse","anti-politics-machine","buen-vivir"]}
    ]}
   ],
   try:[
    {id:"e4u14-l2-x1", type:"mcq", q:"Why do critics such as Escobar and Esteva treat Truman’s 1949 Point Four speech as a turning point?", options:[
      {t:"It framed much of the world as “underdeveloped”, defined by what it lacked, and made development a programme run by outside experts", ok:true, why:"Right. Post-development writers date the development era from this framing, not from any change in people’s lives."},
      {t:"It created the World Bank", why:"The World Bank was agreed at Bretton Woods in 1944."},
      {t:"It announced the end of colonial empires", why:"Decolonisation was a separate, longer process driven largely by independence movements."},
      {t:"It introduced the Human Development Index", why:"The HDI dates from 1990."}
    ]},
    {id:"e4u14-l2-x2", type:"sort", q:"Which theory would make each claim?", buckets:["Modernisation","Structuralism or dependency","Post-development"], items:[
      {t:"Poor countries need higher savings, new technology and modern values to reach take-off.", b:0, why:"Rostow’s internal obstacles and stages."},
      {t:"Falling commodity prices relative to manufactures drain gains from exporters of raw materials.", b:1, why:"The Prebisch–Singer thesis."},
      {t:"Underdevelopment was produced by the same world capitalism that developed the core.", b:1, why:"Frank’s “development of underdevelopment”."},
      {t:"“Development” is a discourse that defines people by lack and hands their lives to experts.", b:2, why:"Escobar’s argument in *Encountering Development*."},
      {t:"Mass literacy, urbanisation and media turn traditional societies into modern ones.", b:0, why:"Sociological modernisation theory, for example Lerner (1958)."},
      {t:"Alternatives to development can be found in social movements and ideas such as buen vivir.", b:2, why:"Post-development looks for alternatives to development, not alternative development."}
    ]},
    {id:"e4u14-l2-x3", type:"number", q:"A country exports cocoa to buy trucks. At first a truck costs $40,000 and a tonne of cocoa sells for $2,000. Later the truck costs $45,000 and cocoa $1,500 a tonne. How many tonnes of cocoa does one truck cost now? (Invented figures.)", answer:30, tol:0.1, unit:"tonnes", why:"$45,000 ÷ $1,500 = **30 tonnes**, up from $40,000 ÷ $2,000 = 20 tonnes. The terms of trade have moved against the cocoa exporter: each tonne buys less machinery, the Prebisch–Singer worry.", wrongs:[
      {v:20, tol:0.1, why:"That is the original price in tonnes. Use the new prices."},
      {v:22.5, tol:0.1, why:"That divides the new truck price by the old cocoa price ($45,000 ÷ $2,000). Both prices changed."},
      {v:26.7, tol:0.1, why:"That divides the old truck price by the new cocoa price ($40,000 ÷ $1,500). Use the new truck price too."}
    ], hint2:"Divide the new truck price by the new cocoa price."},
    {id:"e4u14-l2-x4", type:"match", q:"Match each author to the argument.", pairs:[
      ["Raúl Prebisch","The world economy has a centre and a periphery, and the periphery’s terms of trade tend to decline","ECLA, 1949–50."],
      ["Andre Gunder Frank","Underdevelopment is produced by a chain of metropolis–satellite exploitation","“The Development of Underdevelopment” (1966)."],
      ["Cardoso and Faletto","Industrial growth can happen inside dependency, shaped by alliances of state, local and foreign capital","*Dependency and Development in Latin America* (1969)."],
      ["Walt Rostow","Societies pass through five stages, with a decisive take-off","*The Stages of Economic Growth* (1960)."],
      ["James Ferguson","A failing project can still expand state power while presenting politics as technical problems","*The Anti-Politics Machine* (1990), on Lesotho."]
    ]},
    {id:"e4u14-l2-x5", type:"mcq", q:"Cardoso and Faletto’s “dependent development” differs from Frank’s version of dependency mainly because it…", options:[
      {t:"accepts that industrial growth can happen in dependent countries, and stresses local class alliances and the state", ok:true, why:"Right. They rejected the idea that dependency simply blocks growth, and looked at how internal coalitions shape it."},
      {t:"denies that the world economy has a core and a periphery", why:"They kept the structural picture; they changed what it predicts."},
      {t:"argues that free trade will make all countries converge", why:"That is closer to liberal economics than to any dependency writer."},
      {t:"was written by Wallerstein", why:"Wallerstein developed world-systems theory from 1974."}
    ]},
    {id:"e4u14-l2-x6", type:"spot", q:"A student’s essay summarises the theories. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"Rostow subtitled his book “A Non-Communist Manifesto”, signalling its Cold War purpose.", flag:false, why:"Correct."},
      " ",
      {t:"Dependency theory was founded by Immanuel Wallerstein in the 1980s.", flag:true, why:"Wrong. Dependency grew from Latin American structuralism in the 1950s–60s (Prebisch, Frank, Cardoso and Faletto); Wallerstein’s world-systems theory came from 1974."},
      " ",
      {t:"The Prebisch–Singer thesis predicts that raw-material prices tend to fall relative to manufactures.", flag:false, why:"Correct."},
      " ",
      {t:"Post-development scholars argue that poor countries should simply copy Western growth more quickly.", flag:true, why:"Wrong. Post-development questions the whole idea of catching up and looks for alternatives to development."},
      " ",
      {t:"Critics of post-development say it romanticises the local and offers little to people who want health care and schooling.", flag:false, why:"Correct: the critique made by Kiely (1999) and Nederveen Pieterse (2000)."}
    ]},
    {id:"e4u14-l2-x7", type:"mcq", q:"Which fact sits most uncomfortably with the strong form of dependency theory?", options:[
      {t:"South Korea and Taiwan industrialised rapidly while closely tied to the US and Japanese economies", ok:true, why:"Right. Strong dependency predicted that close ties to the core would block development; East Asia grew through them (though with heavy state guidance)."},
      {t:"Many Latin American countries exported raw materials in the 1950s", why:"That is consistent with the theory’s starting point."},
      {t:"Commodity prices have fluctuated with booms and busts", why:"Booms complicate the trend but don’t refute the structural argument."},
      {t:"UNCTAD was created in 1964", why:"That was an institutional success for structuralist ideas, not a test of them."}
    ]}
   ],
   apply:{
    intro:"Read founding texts and test the theories on a real economy. All sources are free online.",
    tasks:[
     {t:"Read Point Four in the original", how:[
       "Find the text of Harry Truman’s inaugural address of 20 January 1949 (the Truman Library and the Avalon Project at Yale publish it free).",
       "Read the section that begins “Fourth”. Copy three words or phrases that describe the people it is about.",
       "Write two sentences: how would a modernisation theorist read the passage, and how would Escobar?"
     ], write:"Three words or phrases… A modernisation reading… Escobar’s reading…"},
     {t:"One economy, four theories", how:[
       "Choose a country and its main export (for example copper in Zambia, garments in Cambodia, soybeans in Paraguay, palm oil in Malaysia, or remittances in Tonga).",
       "Write one sentence on how each theory in this lesson would explain the country’s position.",
       "Name one piece of evidence that would help you decide between two of them."
     ], write:"Country and export… Modernisation… Structuralism or dependency… World-systems… Post-development… Evidence that would decide…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was dependency theory refuted by East Asia, or only its strongest version?",
       "2. Is post-development a useful critique or a dead end for practical policy?",
       "3. Does modernisation theory deserve a second look today?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on the Point Four text read two ways, one economy analysed through four theories with a deciding piece of evidence, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 5 “Marxism” and Chapter 9 “Postcolonialism”", note:"The IR theory background to dependency, world-systems and post-development."},
    {book:"eirt", where:"Chapter 17 “Global South Perspectives”", note:"How Latin American, African and Asian scholars have theorised the world economy and development."},
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"A short overview of poverty, wealth and the theories that explain them."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u14-l3", title:"States, markets and the East Asian experience", minutes:65,
   hook:{q:"The World Bank’s *World Development Report 2024* looked at how many middle-income economies have reached high-income status since 1990. Roughly how many?", options:["About 3","34","About 100","All but a handful"], answer:1, reveal:"**34**, while 108 economies were still middle income at the end of 2023. Climbing from middle to high income is rare, which is why the handful of East Asian economies that did it fast, such as South Korea and Taiwan, became the most argued-over cases in development. This lesson asks what states and markets each did there, and what the Washington Consensus and its successors drew from the story."},
   goals:[
     "Explain Gerschenkron’s idea of late development and why latecomers may need a bigger role for the state",
     "Compare Amsden, Wade and Evans on how East Asian states guided growth",
     "Explain the debate over why developmental states emerged where they did",
     "Summarise the World Bank’s *East Asian Miracle* (1993) and its critics",
     "Describe the Washington Consensus, the post-Washington Consensus and later alternatives, neutrally"
   ],
   learn:[
    {h:"The latecomer problem", body:[
      {lead:"In 1960 South Korea’s income per person was below that of several Latin American countries. A generation later it was an industrial exporter of ships, cars and chips. Unit 1 and Unit 4 told the outline; this lesson goes into the scholarly fight."},
      "The economic historian Alexander Gerschenkron gave the debate its starting point in *Economic Backwardness in Historical Perspective* (1962). He argued that [[late-development|late developers]] industrialise differently from Britain, the first: the further behind a country is, the larger the role of big banks or the state in mobilising capital and the faster the spurt when it comes. Germany used banks; Russia, the state.",
      "That challenged both modernisation theory (there is no single path) and laissez-faire economics (markets alone may not coordinate a leap). East Asia became the test case for a newer question: can a state deliberately steer a market economy towards industries it can’t yet compete in, without wasting resources or feeding corruption? Governments call this [[industrial-policy|industrial policy]]."
    ]},
    {h:"Three classics of the developmental state", body:[
      "Chalmers Johnson coined the [[developmental-state|developmental state]] for Japan in 1982 ({{chalmers-johnson}}). Three books then made the idea comparative:",
      {table:[
        ["Work","Case","Core argument"],
        ["Alice Amsden, *Asia’s Next Giant* (1989)","South Korea","Late industrialisers grow by **learning** borrowed technology. The state deliberately set some prices “wrong” (cheap credit, protection) to make new industries profitable ([[getting-prices-wrong|getting prices wrong]]), but in exchange imposed **performance standards**, above all export targets, on the big business groups. In later work (*The Rise of “the Rest”*, 2001) she called this two-way exchange a “reciprocal control mechanism”, or **reciprocity**"],
        ["Robert Wade, *Governing the Market* (1990)","Taiwan","A [[governed-market|governed market]]: the state sometimes **led** the market into new sectors and sometimes **followed** firms that were already moving, using public enterprises, credit and trade controls"],
        ["Peter Evans, *Embedded Autonomy* (1995)","Korea, Brazil, India, Zaire","Effective states combine a coherent, merit-based bureaucracy (**autonomy**) with dense ties to business (**embeddedness**): [[embedded-autonomy|embedded autonomy]]"]
      ]},
      "Evans placed states on a spectrum. A [[predatory-state|predatory state]], his example being Mobutu’s Zaire, extracts resources without producing anything in return; a developmental state such as Korea transforms industry; **intermediate** states such as Brazil and India have pockets of competence among patronage. He also named the roles a state can play: custodian (regulator), demiurge (producer), midwife (helping new firms emerge) and husbandry (nursing existing firms), studying them through the computer industries of the 1970s and 1980s.",
      "All three insist that discipline mattered as much as support. Korean firms that missed export targets could lose credit; that, they argue, is why East Asian protection did not breed the complacent firms that critics saw in some import-substituting economies.",
      {fig:'<svg viewBox="0 0 340 350"><defs><marker id="e4u14-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><path class="d-ink" d="M29 330 V18" stroke-width="2" marker-end="url(#e4u14-l3-a)"/><text class="s" x="16" y="174" text-anchor="middle" transform="rotate(-90 16 174)">more state direction</text><rect class="d-rose" x="40" y="10" width="294" height="72" rx="8" stroke-width="2"/><text x="52" y="34">Developmental state</text><text class="s" x="52" y="54">Johnson 1982, Amsden 1989: the state</text><text class="s" x="52" y="71">picks sectors and disciplines firms</text><rect class="d-gold" x="40" y="92" width="294" height="72" rx="8" stroke-width="2"/><text x="52" y="116">Governed market</text><text class="s" x="52" y="136">Wade 1990 (Taiwan): the state leads in</text><text class="s" x="52" y="153">some sectors, follows the market in others</text><rect class="d-lup" x="40" y="174" width="294" height="72" rx="8" stroke-width="2"/><text x="52" y="198">Market-friendly, with some help</text><text class="s" x="52" y="218">World Bank 1993: fundamentals did most;</text><text class="s" x="52" y="235">a few interventions worked, hard to copy</text><rect class="d-soft" x="40" y="256" width="294" height="72" rx="8" stroke-width="2"/><text x="52" y="280">Washington Consensus</text><text class="s" x="52" y="300">Williamson 1989: stabilise, open up,</text><text class="s" x="52" y="317">privatise, secure property rights</text></svg>', alt:"A vertical arrow labelled “more state direction” runs up the left side, next to four stacked boxes. Top: developmental state, Johnson 1982 and Amsden 1989, the state picks sectors and disciplines firms. Second: governed market, Wade 1990 on Taiwan, the state leads in some sectors and follows the market in others. Third: market-friendly with some help, World Bank 1993, fundamentals did most of the work and a few interventions worked but are hard to copy. Bottom: the Washington Consensus, Williamson 1989, stabilise, open up, privatise and secure property rights.", cap:"Positions in the debate, from more to less state direction. A simplification: each author made careful qualifications."}
    ]},
    {h:"Why there? The origins debate", body:[
      "If developmental states work, why are they rare? Richard Doner, Bryan Ritchie and Dan Slater’s article “Systemic Vulnerability and the Origins of Developmental States” (*International Organization*, 2005) offered an influential answer for Asia. Leaders build capable developmental institutions when they face three pressures at once: the threat of mass unrest that forces them to deliver broad benefits, serious external security threats, and hard budget constraints such as few natural resources. South Korea, Taiwan and Singapore faced all three; Thailand, Malaysia, Indonesia and the Philippines faced fewer and built weaker versions. They call this [[systemic-vulnerability|systemic vulnerability]].",
      "Other scholars stress history. Atul Kohli (*State-Directed Development*, 2004) traces Korea’s state partly to the Japanese colonial period; others reply that this underplays colonial violence and the break after 1945. Many point to the Cold War: US aid, land reform and open US markets. And most of these states were authoritarian at their fastest growth, repressing labour and dissent; South Korea and Taiwan democratised from the late 1980s. A seminar paper should keep both facts in view without treating one as the price of the other."
    ]},
    {h:"The World Bank’s East Asian Miracle", body:[
      "In 1993 the World Bank published [[east-asian-miracle|*The East Asian Miracle: Economic Growth and Public Policy*]], studying eight [[high-performing-asian-economies|high-performing Asian economies]] from 1965 to 1990: Japan; the four “tigers” (Hong Kong, South Korea, Singapore, Taiwan); and Indonesia, Malaysia and Thailand.",
      "Its verdict was a compromise. Most of the growth, it argued, came from getting the **fundamentals** right: macroeconomic stability, high saving and investment, broad schooling, agricultural development and openness to foreign technology. Some selective interventions, such as directed credit and export promotion, had worked in Japan, Korea and Taiwan, but only under conditions (capable bureaucracies, strict performance tests) that were hard to copy elsewhere. Its recommended model was “market-friendly”.",
      "Robert Wade read the report as “paradigm maintenance” (*New Left Review*, 1996). In his account, Japan’s government, which had pressed the Bank to take industrial policy seriously and paid for the study, got an acknowledgement, but the Bank’s market-led framework survived. Amsden and others said the report’s own evidence supported a bigger role for the state than its conclusions admitted. From the other side, Paul Krugman’s “The Myth of Asia’s Miracle” (1994) argued that growth came mostly from more inputs, not rising efficiency. The 1997–98 Asian financial crisis (Unit 1; Unit 15 covers financial crises) then reopened every argument."
    ]},
    {h:"The Washington Consensus and after", body:[
      "John Williamson coined the phrase [[washington-consensus|Washington Consensus]] in a paper for a 1989 conference, published in 1990 as “What Washington Means by Policy Reform”. By “Washington” he meant the technocratic Washington of the IMF, the World Bank and the US Treasury, and he listed ten reforms they broadly agreed Latin America needed:",
      {ol:["Fiscal discipline","Reordering public spending towards health, education and infrastructure","Tax reform (broad base, moderate rates)","Market-determined interest rates","Competitive exchange rates","Trade liberalisation","Openness to foreign direct investment","Privatisation","Deregulation","Secure property rights"]},
      "The term soon became shorthand for [[structural-adjustment|structural adjustment]] and “neoliberalism”, which Williamson objected to: his list did not include full liberalisation of short-term capital flows. Supporters credit the reforms with ending hyperinflation and debt crises in parts of Latin America; critics point to slow growth, rising inequality and crises in the 1990s.",
      "What came next was less a new consensus than a set of corrections:",
      {list:[
        "The [[post-washington-consensus|post-Washington Consensus]] associated with Joseph Stiglitz, then World Bank chief economist, in a 1998 lecture: markets need strong institutions, regulation, competition and social protection; financial liberalisation without regulation is dangerous.",
        "Dani Rodrik’s “one economics, many recipes” (2007): sound principles can be met by very different policies, so countries should diagnose their own binding constraints on growth.",
        "The Commission on Growth and Development, chaired by Michael Spence, whose *Growth Report* (2008) studied 13 economies that had grown at 7% a year or more for at least 25 years, and found pragmatism rather than one model.",
        "Ha-Joon Chang’s *Kicking Away the Ladder* (2002): today’s rich countries used protection and subsidies when they were catching up, and now deny those tools to others.",
        "The [[beijing-consensus|“Beijing Consensus”]] (Joshua Cooper Ramo, 2004): China’s gradual, experimental, state-heavy path as a model. Many scholars doubt that China’s path can be copied or that a single “China model” exists."
      ]},
      "As of November 2026, industrial policy is back in the mainstream: many governments, rich and poor, subsidise strategic sectors such as semiconductors and clean energy (Unit 15 and Unit 16). Economists still disagree about when it works. The World Bank’s *World Development Report 2024* frames the challenge as escaping a [[middle-income-trap|middle-income trap]] by moving from investment to adopting foreign technology and then to innovation."
    ]},
    {h:"Beyond East Asia", body:[
      "The Malawian economist Thandika Mkandawire (2001) challenged the common view that developmental states were impossible in Africa: Botswana and Mauritius had grown fast for decades, and many African states had grown well in the 1960s and 1970s before the debt crisis. Since the 2000s Ethiopia and Rwanda have often been debated as would-be developmental states, praised for growth and service delivery and criticised for authoritarian rule. Vietnam’s Đổi Mới reforms (from 1986) and India’s 1991 liberalisation are other cases where scholars disagree about how much credit belongs to the state and how much to markets.",
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["The World Bank said East Asia grew by free markets alone.","*The East Asian Miracle* credited fundamentals but accepted that some interventions worked in special conditions."],["The Washington Consensus told countries to cut health and education.","Williamson’s list asked to redirect spending towards them; adjustment programmes in practice varied."],["Developmental states were simply strong dictatorships.","Scholars stress capable bureaucracies and performance discipline; many dictatorships were predatory."],["Industrial policy always fails.","The evidence is mixed: it depends on capacity, discipline and competition."]]},
      {terms:["late-development","industrial-policy","getting-prices-wrong","governed-market","embedded-autonomy","predatory-state","systemic-vulnerability","east-asian-miracle","high-performing-asian-economies","post-washington-consensus","beijing-consensus","middle-income-trap"]}
    ]}
   ],
   try:[
    {id:"e4u14-l3-x1", type:"match", q:"Match each scholar to the idea.", pairs:[
      ["Alexander Gerschenkron","The more backward a country, the bigger the role of banks or the state in its industrial spurt","*Economic Backwardness in Historical Perspective* (1962)."],
      ["Alice Amsden","Subsidies in exchange for performance standards, especially export targets","*Asia’s Next Giant* (1989), on South Korea."],
      ["Robert Wade","A governed market, in which the state sometimes leads and sometimes follows","*Governing the Market* (1990), on Taiwan."],
      ["Peter Evans","Embedded autonomy: a coherent bureaucracy with close ties to business","*Embedded Autonomy* (1995)."],
      ["Doner, Ritchie and Slater","Developmental states emerge under systemic vulnerability","*International Organization* (2005)."]
    ]},
    {id:"e4u14-l3-x2", type:"mcq", q:"In Evans’s terms, a government whose officials are appointed through patronage and which extracts wealth from society while providing little in return is…", options:[
      {t:"a predatory state", ok:true, why:"Right. Evans’s example was Mobutu’s Zaire."},
      {t:"a developmental state", why:"Developmental states have coherent, merit-based bureaucracies that pursue transformation."},
      {t:"an intermediate state", why:"Intermediate states such as Brazil and India have pockets of competence mixed with patronage; they do sometimes help development."},
      {t:"a governed market", why:"That is Wade’s description of how Taiwan’s state worked with markets, not a type of failed state."}
    ]},
    {id:"e4u14-l3-x3", type:"sort", q:"Which reading of East Asia’s growth does each piece of evidence support more?", buckets:["A strong state role","Market fundamentals"], items:[
      {t:"Korean business groups lost cheap credit when they missed export targets.", b:0, why:"Discipline tied to subsidies is Amsden’s central evidence."},
      {t:"Saving and investment rates were very high.", b:1, why:"High saving and investment are among the World Bank’s fundamentals."},
      {t:"Taiwan used public enterprises to enter petrochemicals and steel.", b:0, why:"Wade’s state leading the market."},
      {t:"Inflation and budget deficits were mostly kept low.", b:1, why:"Macroeconomic stability, a core fundamental in *The East Asian Miracle*."},
      {t:"Schooling spread quickly, first at primary and then at secondary level.", b:1, why:"Broad-based education is one of the fundamentals in *The East Asian Miracle*."},
      {t:"Planners chose target industries in successive five-year plans.", b:0, why:"Deliberate sectoral targeting is industrial policy."}
    ]},
    {id:"e4u14-l3-x4", type:"mcq", q:"According to Doner, Ritchie and Slater, why did South Korea and Taiwan build stronger developmental institutions than Thailand or the Philippines?", options:[
      {t:"Their leaders faced at once the threat of mass unrest, serious external security threats and tight resource constraints", ok:true, why:"Right. Systemic vulnerability gave elites strong reasons to build capable institutions that delivered broad growth."},
      {t:"Their cultures valued hard work more", why:"The article deliberately explains the difference through political conditions, not cultural traits."},
      {t:"They followed the Washington Consensus more closely", why:"The Washington Consensus came much later (1989) and these states were interventionist."},
      {t:"They had larger natural resource exports", why:"The opposite: scarce resources were one of the pressures."}
    ]},
    {id:"e4u14-l3-x5", type:"sort", q:"Was each policy on Williamson’s original 1989–90 list?", buckets:["On the list","Not on the list"], items:[
      {t:"Fiscal discipline", b:0, why:"Item 1."},
      {t:"Competitive exchange rates", b:0, why:"Item 5."},
      {t:"Full, rapid opening to short-term capital flows", b:1, why:"Williamson listed openness to foreign direct investment only and later stressed that capital account liberalisation was not part of his list."},
      {t:"Secure property rights", b:0, why:"Item 10."},
      {t:"Targeted subsidies for chosen industries", b:1, why:"Industrial policy was not on the list; deregulation and trade liberalisation were."},
      {t:"Redirecting public spending towards health, education and infrastructure", b:0, why:"Item 2, often forgotten by critics and supporters alike."}
    ]},
    {id:"e4u14-l3-x6", type:"order", q:"Put these events in the states-versus-markets debate in order.", items:[
      {t:"Williamson names the Washington Consensus", why:"1989 conference paper, published 1990."},
      {t:"The World Bank publishes *The East Asian Miracle*", why:"1993."},
      {t:"The Asian financial crisis begins in Thailand", why:"July 1997."},
      {t:"Ramo describes a “Beijing Consensus”", why:"2004."},
      {t:"The Growth Commission publishes *The Growth Report*", why:"2008."},
      {t:"The World Bank’s World Development Report focuses on the middle-income trap", why:"2024."}
    ]},
    {id:"e4u14-l3-x7", type:"spot", q:"An op-ed draws lessons from East Asia. Tap each sentence that is **wrong or unsupported**.", ask:"wrong or unsupported", parts:[
      {t:"East Asia proves that free markets alone, with no state guidance, produce miracles.", flag:true, why:"Unsupported. Even the World Bank’s market-friendly account acknowledged selective interventions; Amsden and Wade documented extensive state guidance."},
      " ",
      {t:"Most of the high-performing economies kept inflation and deficits under control.", flag:false, why:"Broadly accepted by all sides."},
      " ",
      {t:"The Washington Consensus told governments to cut all spending on health and education.", flag:true, why:"Wrong. Williamson’s list called for reordering spending towards health, education and infrastructure, though adjustment programmes in practice sometimes cut them."},
      " ",
      {t:"Scholars disagree about whether the developmental state can be copied today.", flag:false, why:"Correct: one of the live questions."},
      " ",
      {t:"Because Korea grew under authoritarian rule, dictatorship causes growth.", flag:true, why:"Unsupported. Many authoritarian states stagnated; one case can’t establish a general causal claim."}
    ]}
   ],
   apply:{
    intro:"Read the original texts and test the ideas on a case. Everything is free online.",
    tasks:[
     {t:"Williamson in the original", how:[
       "Open “What Washington Means by Policy Reform” on the Peterson Institute’s website (piie.com).",
       "Choose one country you know something about. For each of the ten items, note whether it adopted the reform in the 1990s or 2000s, partly, or not at all.",
       "Write two sentences on what the list leaves out compared with Amsden’s or Wade’s account."
     ], write:"Country… The ten items, adopted or not… What the list leaves out…"},
     {t:"Autonomy and embeddedness check", how:[
       "Pick a government agency that promotes industry or investment in any country (for example an export promotion board, a development bank or a special economic zone authority).",
       "Using its website and one news report, find evidence on how staff are recruited (merit or patronage) and how it consults business.",
       "Place it on Evans’s spectrum, and say what evidence would change your mind."
     ], write:"Agency and country… Recruitment… Ties to business… Predatory, intermediate or developmental?… What would change my mind…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Can the East Asian developmental state be copied today, under WTO rules and in democracies?",
       "2. Was the Washington Consensus wrong, or wrongly applied?",
       "3. Is the “middle-income trap” a useful idea or a misleading metaphor?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A ten-item check of one country against Williamson’s list, an evidence-based placement of one agency on Evans’s spectrum, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 32, section 32.2 “Improving Countries’ Standards of Living”", note:"A textbook account of how East Asian economies grew, to set against the political economy debate."},
    {book:"ospol", where:"Chapter 16, section 16.5 “From the 1990s to the 2020s: Current Issues in IPE”", note:"Background on the post-Cold War policy consensus and its critics."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"How Asian ideas and experience have entered IR and political economy."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u14-l4", title:"Aid and its effectiveness", minutes:65,
   hook:{q:"According to the OECD’s preliminary data, by how much did official development assistance from its Development Assistance Committee members fall in 2025?", options:["About 2%","About 9%","About 23%","About 50%"], answer:2, reveal:"**23.1%**, to US$174.3 billion: the OECD calls it the largest annual contraction on record, and says the United States alone drove three-quarters of the decline. Germany became the largest provider for the first time. Whether those cuts matter depends on a question economists have fought over for decades: does aid work? This lesson follows that fight, from grand plans to randomised trials and new donors."},
   goals:[
     "Define official development assistance and describe the 2025 fall in aid accurately",
     "Compare the arguments of Sachs, Easterly and Moyo, and what cross-country evidence shows",
     "Explain the aid effectiveness agenda from Paris (2005) to Busan (2011)",
     "Explain how randomised controlled trials work in development, and the main criticisms of them",
     "Describe South–South cooperation and new donors neutrally, with each side’s arguments"
   ],
   learn:[
    {h:"What aid is, and what happened in 2025", body:[
      {lead:"Aid is a small river compared with trade, investment and the money migrants send home, yet it carries large hopes and larger arguments."},
      "The primer defined [[official-development-assistance|official development assistance]] (ODA) and the UN target of 0.7% of national income (see {{development-ir}}). ODA is counted by the OECD’s [[development-assistance-committee|Development Assistance Committee]] (DAC), the club of mostly rich donors that adopted it as the “gold standard” of aid in 1969. Grants and concessional loans count; military aid does not.",
      "Aid fell sharply in 2025. On the OECD’s preliminary figures (April 2026), DAC members gave **US$174.3 billion, 23.1% less than in 2024**, the largest annual contraction on record. The OECD attributes about three-quarters of the fall to the United States, where the US Agency for International Development stopped implementing foreign assistance on 1 July 2025 and remaining programmes moved to the State Department. Most other members also gave less: only eight increased their ODA. Germany became the largest DAC provider, with US$29.1 billion.",
      "Supporters of the cuts argue that aid should serve donors’ national interests, that recipients should rely more on their own taxes and trade, or that budgets are needed at home. Critics point to health and humanitarian programmes that lost funding. Both sides often invoke the research below, which is more mixed than either side’s slogans."
    ]},
    {h:"The big debate: Sachs, Easterly and Moyo", body:[
      "Three books defined the argument of the 2000s:",
      {table:[
        ["Book","Core argument","Main criticism"],
        ["Jeffrey Sachs, *The End of Poverty* (2005)","The poorest are caught in a [[poverty-trap|poverty trap]]: too poor to save, invest or fight disease. A large, coordinated [[big-push|big push]] of aid for health, farming, schooling and infrastructure can lift them out; he championed the Millennium Villages","Top-down; the Millennium Villages were launched without a rigorous comparison design, so their effects were hard to judge"],
        ["William Easterly, *The White Man’s Burden* (2006)","[[planners-and-searchers|Planners]] announce grand goals and answer to donors; **searchers** find what works by trial and feedback from the people served. Aid should be small, specific and accountable","Underplays aid’s clear successes, such as vaccination and disease control"],
        ["Dambisa Moyo, *Dead Aid* (2009)","Large, open-ended aid to African governments fosters [[aid-dependency|aid dependency]], corruption and weak accountability to citizens. Governments should phase it out over years and turn to bond markets, trade and investment","Generalises from budget support to all aid; humanitarian and health aid are different"]
      ]},
      "Behind the books lay a statistical debate. Craig Burnside and David Dollar (*American Economic Review*, 2000) found that aid raised growth in countries with good policies, an influential result that encouraged donors to be selective. William Easterly, Ross Levine and David Roodman (2004) added more data and the result disappeared. Later studies disagree about whether aid’s average effect on growth is small and positive or close to zero; most agree that growth is the wrong yardstick for aid aimed at health or schooling.",
      {key:"“Does aid work?” is too big a question. Ask: which aid, for what goal, delivered how, and compared with what?"}
    ]},
    {h:"From Paris to Busan", body:[
      "Donors also asked how aid is delivered. A recipient ministry might host dozens of donor missions a year, each with its own reports, and a share of aid was [[tied-aid|tied]] to buying goods from the donor’s own firms. A series of high-level forums tried to fix this. The [[paris-declaration|Paris Declaration on Aid Effectiveness]] (2005) set five principles with monitored targets:",
      {list:[
        "**Ownership:** recipient governments set their own strategies ([[country-ownership|country ownership]]).",
        "**Alignment:** donors support those strategies and use the country’s own systems.",
        "**Harmonisation:** donors coordinate and simplify.",
        "**Managing for results.**",
        "**Mutual accountability** of donors and recipients."
      ]},
      "The Accra Agenda for Action (2008) added a role for parliaments and civil society. The fourth forum, in Busan, South Korea (29 November–1 December 2011), produced the [[busan-partnership|Busan Partnership for Effective Development Co-operation]], built on four principles: ownership by developing countries, a focus on results, inclusive partnerships and transparency and mutual accountability. Crucially, it brought in South–South providers, though only “on a voluntary basis”, and it led to the Global Partnership for Effective Development Co-operation.",
      "Monitoring showed progress on some targets and little on others, and critics on both sides note that donors’ attention shifted from aid effectiveness to “development effectiveness” and private finance (Unit 15)."
    ]},
    {h:"The randomista turn", body:[
      "While macro-level studies stalled, a group of economists asked smaller questions with a method borrowed from medicine. A [[randomised-controlled-trial|randomised controlled trial]] (RCT) assigns a programme by lottery, so the treated and untreated groups differ only by chance; the difference in outcomes then estimates the programme’s effect (see [[random-assignment|random assignment]]).",
      {fig:'<svg viewBox="0 0 340 452"><defs><marker id="e4u14-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="20" y="8" width="300" height="50" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Eligible schools, villages</text><text x="170" y="48" text-anchor="middle">or households</text><path class="d-ink" d="M170 60 V84" stroke-width="2" marker-end="url(#e4u14-l4-a)"/><rect class="d-gold" x="60" y="88" width="220" height="40" rx="20" stroke-width="2"/><text x="170" y="113" text-anchor="middle">Random assignment</text><path class="d-ink" d="M130 130 L90 156" stroke-width="2" marker-end="url(#e4u14-l4-a)"/><path class="d-ink" d="M210 130 L250 156" stroke-width="2" marker-end="url(#e4u14-l4-a)"/><rect class="d-sage" x="14" y="160" width="150" height="62" rx="8" stroke-width="2"/><text x="89" y="184" text-anchor="middle">Treatment</text><text class="s" x="89" y="204" text-anchor="middle">gets the programme</text><rect class="d-soft" x="176" y="160" width="150" height="62" rx="8" stroke-width="2"/><text x="251" y="184" text-anchor="middle">Control</text><text class="s" x="251" y="204" text-anchor="middle">does not (yet)</text><path class="d-ink" d="M89 224 L130 250" stroke-width="2" marker-end="url(#e4u14-l4-a)"/><path class="d-ink" d="M251 224 L210 250" stroke-width="2" marker-end="url(#e4u14-l4-a)"/><rect class="d-lup" x="20" y="254" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="278" text-anchor="middle">Compare average outcomes</text><text class="s" x="170" y="298" text-anchor="middle">difference = the programme’s effect here</text><rect class="d-rose" x="20" y="328" width="300" height="116" rx="8" stroke-width="2"/><text x="32" y="352">What the trial can’t tell you alone</text><text class="s" x="32" y="374">• Would it work in another place or year?</text><text class="s" x="32" y="394">• Would it work at scale, run by government?</text><text class="s" x="32" y="414">• Did it affect people outside the trial?</text><text class="s" x="32" y="434">• Why did it work, and for whom?</text></svg>', alt:"A flow diagram. Eligible schools, villages or households go through random assignment into two groups: a treatment group that gets the programme and a control group that does not, or not yet. Both feed into a comparison of average outcomes, where the difference is the programme’s effect in that setting. A panel below lists what the trial can’t tell you alone: would it work in another place or year; would it work at scale, run by government; did it affect people outside the trial; and why did it work, and for whom.", cap:"The logic of a randomised controlled trial, and the questions it leaves open."},
      "In the mid-1990s Michael Kremer and colleagues ran field experiments on schooling in western Kenya. Abhijit Banerjee and Esther Duflo, with Sendhil Mullainathan, founded the Poverty Action Lab at MIT in 2003 (now the Abdul Latif Jameel Poverty Action Lab, J-PAL), and their *Poor Economics* (2011) argued for testing specific interventions one by one. In 2019 the three shared the economics Nobel prize “for their experimental approach to alleviating global poverty”; the Nobel committee noted that more than five million Indian children had benefited from remedial tutoring programmes evaluated this way.",
      "Some results changed practice: free distribution of bed nets, remedial teaching at the right level for each child, and cash transfers. Others overturned hopes, such as the 2015 set of microcredit trials, which found modest average effects (Unit 17 covers microfinance)."
    ]},
    {h:"Critics of the trials", body:[
      "The critics include other Nobel laureates. Angus Deaton (Nobel 2015) and the philosopher Nancy Cartwright argued in “Understanding and Misunderstanding Randomized Controlled Trials” (2018) that RCTs are not automatically the gold standard. Their main points, with others’:",
      {list:[
        "**[[external-validity|External validity]]:** a result from one district and year may not hold elsewhere. In one Kenyan study, contract teachers raised test scores when an NGO ran the programme but not when the government did.",
        "**Averages hide variation:** a programme can help some people and harm others.",
        "**Small questions:** trials can test a bed net but not a land reform, a trade policy or an institution; Lant Pritchett and others argue that the big gains come from growth, which RCTs can’t study.",
        "**Ethics and power:** researchers from rich countries randomising the lives of poor people raise questions of consent, withholding benefits and who sets the research agenda.",
        "**Contested results:** Edward Miguel and Michael Kremer’s deworming findings (2004) were re-analysed in 2015, setting off the “worm wars” over what the data showed."
      ]},
      "Defenders reply that trials now come with theory, replication across countries and long follow-ups, and that the alternative is often no evidence at all."
    ]},
    {h:"New and returning donors", body:[
      "[[south-south-cooperation|South–South cooperation]] is not new: the Kuwait Fund (1961), the Abu Dhabi Fund (1971) and the Saudi Fund for Development (1974) are decades old, and India’s technical cooperation programme dates from 1964. South Korea, once a major aid recipient, joined the DAC in 2010. Japan’s aid, with its loans for infrastructure and stress on recipients’ self-help, is covered in Unit 4 ({{japan-development-cooperation}}).",
      "China is now a major provider. Its 2021 white paper, *China’s International Development Cooperation in the New Era*, presents its aid as South–South cooperation based on equality and non-interference, overseen since 2018 by the China International Development Cooperation Agency. Much of its finance comes as loans rather than grants, so researchers such as AidData estimate it from project records (Unit 15 covers {{china-overseas-lending|China’s overseas lending}} and the debt debate).",
      "Views on these [[non-dac-donors|non-DAC providers]] differ. Recipient governments often value speed, infrastructure, fewer policy conditions and the language of partnership. Critics, including some DAC donors and civil society groups, point to less transparency, loans tied to the provider’s own firms, and weaker attention to governance and the environment. Researchers stress that DAC donors also tie aid and pursue interests, so comparisons need the same yardstick for both.",
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["Aid is a large share of rich countries’ spending.","Most DAC donors give well under the 0.7% of national income target; only a few meet it."],["A randomised trial shows what works everywhere.","It shows what worked in one setting; whether it travels is a separate question."],["China’s development finance is mostly grants like DAC aid.","Much of it is loans, often at near-commercial terms, which is why it is counted differently."],["Aid effectiveness means giving more aid.","The Paris and Busan agendas are mainly about how aid is delivered and who leads."]]},
      {terms:["development-assistance-committee","poverty-trap","planners-and-searchers","aid-dependency","tied-aid","paris-declaration","country-ownership","busan-partnership","randomised-controlled-trial","non-dac-donors"]}
    ]}
   ],
   try:[
    {id:"e4u14-l4-x1", type:"spot", q:"A blog post comments on the 2025 aid figures. Tap each sentence that is **wrong or unsupported**.", ask:"wrong or unsupported", parts:[
      {t:"The OECD’s preliminary data show DAC aid fell by about 23% in 2025.", flag:false, why:"Correct: 23.1%, to US$174.3 billion."},
      " ",
      {t:"Aid fell because extreme poverty had ended.", flag:true, why:"Wrong. About one person in ten was still in extreme poverty in 2024; the fall reflects donors’ budget and policy decisions, above all in the United States."},
      " ",
      {t:"The OECD says the United States accounted for about three-quarters of the decline.", flag:false, why:"Correct."},
      " ",
      {t:"Research has proved that all aid is wasted, so the cuts will make no difference.", flag:true, why:"Unsupported. The evidence is mixed at the macro level and strongly positive for some specific programmes, such as vaccination."},
      " ",
      {t:"Germany became the largest DAC provider for the first time.", flag:false, why:"Correct, with US$29.1 billion."}
    ]},
    {id:"e4u14-l4-x2", type:"match", q:"Match each author to the argument.", pairs:[
      ["Jeffrey Sachs","The poorest are in a poverty trap that a coordinated big push of aid can break","*The End of Poverty* (2005)."],
      ["William Easterly","Searchers who get feedback from the people served beat planners with grand goals","*The White Man’s Burden* (2006)."],
      ["Dambisa Moyo","Open-ended aid to African governments breeds dependency and should be phased out","*Dead Aid* (2009)."],
      ["Banerjee and Duflo","Test specific interventions, one at a time, with field experiments","*Poor Economics* (2011)."],
      ["Deaton and Cartwright","Randomised trials are not automatically the gold standard; results may not travel","Their 2018 article."]
    ]},
    {id:"e4u14-l4-x3", type:"mcq", q:"A donor funds a national health plan, sends one joint mission with other donors a year, and channels money through the recipient’s own budget. Which Paris principles does this mostly illustrate?", options:[
      {t:"Ownership, alignment and harmonisation", ok:true, why:"Right. The plan is the recipient’s (ownership), the donor uses its systems (alignment) and coordinates with others (harmonisation)."},
      {t:"Tied aid", why:"Tied aid requires buying from the donor’s firms, the opposite of using country systems."},
      {t:"A big push", why:"The big push is Sachs’s argument about scale, not about delivery."},
      {t:"Conditionality", why:"Conditionality attaches policy demands; the scenario is about who leads and how aid is channelled."}
    ]},
    {id:"e4u14-l4-x4", type:"number", q:"In a school trial, children in randomly chosen treatment schools attended 82% of school days and children in control schools 76%. What is the estimated effect of the programme on attendance, in percentage points?", answer:6, tol:0.1, unit:"percentage points", why:"82 − 76 = **6 percentage points**. Because schools were assigned by lottery, the groups differ only by chance, so the difference estimates the programme’s effect in this setting.", wrongs:[
      {v:7.9, tol:0.1, why:"That is the relative increase (6 ÷ 76 = 7.9%), not the difference in percentage points."},
      {v:82, tol:0.1, why:"That is the treatment group’s attendance, not the effect. You need the comparison with the control group."},
      {v:158, tol:0.1, why:"That adds the two groups. The effect is the difference."}
    ], hint2:"Subtract the control group’s rate from the treatment group’s rate."},
    {id:"e4u14-l4-x5", type:"mcq", q:"A tutoring programme run by an NGO raised test scores in a randomised trial in one region. A ministry wants to roll it out nationally with its own staff. Which concern from the RCT critics matters most?", options:[
      {t:"External validity: the result may not hold when a different organisation runs it at scale in other places", ok:true, why:"Right. In one Kenyan study, contract teachers raised scores under an NGO but not under the government."},
      {t:"Internal validity: random assignment means the trial’s own result can’t be trusted", why:"Randomisation is what makes the trial’s internal comparison credible; the worry is about transferring it."},
      {t:"The programme can’t have worked because aid never works", why:"The trial showed an effect; the question is whether it travels."},
      {t:"Trials only measure growth, not test scores", why:"Trials measure specific outcomes such as test scores; it is growth they can’t easily study."}
    ]},
    {id:"e4u14-l4-x6", type:"sort", q:"Is each claim about non-DAC providers, such as China or Gulf funds, more often made by **supporters** or by **critics**?", buckets:["Supporters often say","Critics often say"], items:[
      {t:"They build roads, ports and power plants quickly.", b:0, why:"Speed and infrastructure are the most common praise from recipient governments."},
      {t:"They publish less information about loan terms.", b:1, why:"Transparency is a frequent criticism, which AidData’s work tries to address."},
      {t:"They attach fewer policy conditions and respect sovereignty.", b:0, why:"Non-interference is a central theme of South–South cooperation."},
      {t:"Projects are often tied to the provider’s own firms.", b:1, why:"A common criticism, though researchers note DAC donors also tie aid."},
      {t:"They treat recipients as equal partners with shared experience of development.", b:0, why:"The language of partnership is central to South–South cooperation."},
      {t:"They pay less attention to environmental and social safeguards.", b:1, why:"A criticism made by some civil society groups and DAC donors."}
    ]},
    {id:"e4u14-l4-x7", type:"mcq", q:"What did the Busan Partnership (2011) do that earlier aid effectiveness agreements had not?", options:[
      {t:"It brought South–South providers into the framework, on a voluntary basis", ok:true, why:"Right. Busan’s outcome document is a reference for South–South partners on a voluntary basis, and it led to the Global Partnership for Effective Development Co-operation."},
      {t:"It created the 0.7% target", why:"The 0.7% target dates from a UN General Assembly resolution of 1970."},
      {t:"It abolished tied aid worldwide", why:"No agreement abolished tied aid; the DAC has recommendations to untie parts of it."},
      {t:"It set up the OECD’s Development Assistance Committee", why:"The DAC dates from the early 1960s."}
    ]}
   ],
   apply:{
    intro:"Work with real aid data and real evaluations. All the tools are free and need no account.",
    tasks:[
     {t:"Follow the money", how:[
       "Choose a recipient country. Use the IATI d-portal (d-portal.org) or the OECD Data Explorer to find its largest donors and the sectors they fund.",
       "Note which donors are DAC members and which are not, and whether you can find data on the non-DAC ones.",
       "Write two sentences on what the data show and what they leave out."
     ], write:"Country… Largest donors… Main sectors… DAC and non-DAC… What the data leave out…"},
     {t:"Read an evaluation", how:[
       "Open the J-PAL website (povertyactionlab.org) or the 3ie Development Evidence Portal and choose one randomised evaluation from a region you are interested in.",
       "Summarise the programme, the outcome measured and the result in three sentences.",
       "List two external-validity questions you would ask before recommending it elsewhere."
     ], write:"Programme and place… Outcome and result… Two external-validity questions…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Easterly or Sachs: who was more right about aid?",
       "2. Have randomised trials improved development policy, or narrowed it?",
       "3. Should South–South providers follow the DAC’s rules, or should the DAC learn from them?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one country’s main aid flows and the data gaps, a summary of one randomised evaluation with two external-validity questions, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"Read after this lesson: how aid fits into the wider politics of poverty and wealth."},
    {book:"osecon", where:"Chapter 32, section 32.2 “Improving Countries’ Standards of Living”", note:"The textbook’s short discussion of whether foreign aid supports growth."},
    {book:"ospol", where:"Section 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"A political science overview of global poverty and the responses to it."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u14-l5", title:"Institutions, geography and inequality", minutes:65,
   hook:{q:"Acemoglu, Johnson and Robinson compared places colonised by Europeans. Those that were relatively prosperous around 1500 (for example, the Aztec and Inca lands or Mughal India) are, on average, now…", options:["Relatively richer than places that were poor in 1500","Relatively poorer: a “reversal of fortune”","About the same as the others","Impossible to compare"], answer:1, reveal:"**Relatively poorer.** In their 2002 article “Reversal of Fortune”, they argued that Europeans set up extractive institutions where there were dense populations and wealth to seize, and settler institutions where there were not. Geography had not changed, so they took the reversal as evidence that institutions matter most. Their work won the 2024 economics Nobel prize; this lesson weighs it against geography, culture and inequality arguments."},
   goals:[
     "Distinguish proximate from fundamental causes of prosperity",
     "Explain the institutions argument of Acemoglu, Johnson and Robinson, and its main critics",
     "Weigh geography and culture arguments, handling culture without national-character claims",
     "Describe the elephant curve, its critics and Piketty’s argument in brief",
     "Build a seminar argument on a development question with evidence and a counter-argument"
   ],
   learn:[
    {h:"Why are some countries rich?", body:[
      {lead:"Growth accounting can tell you that a country got richer because it had more machines, more schooling and better technology. It can’t tell you why one country accumulated them and its neighbour didn’t."},
      "Economists distinguish **proximate** causes (capital, labour, skills, technology) from **fundamental** causes: the deeper conditions that explain why some societies invest and innovate. Three families of answer compete, often in combination: **institutions** (the rules of the game), **geography** (climate, disease, location) and **culture** (shared values and norms). A fourth strand, history and colonialism, runs through all three.",
      "Remember Lesson 1: “rich” here usually means GDP per person, one measure of development. Many of these studies would look different with life expectancy or capabilities as the outcome."
    ]},
    {h:"Institutions: Acemoglu, Johnson and Robinson", body:[
      "Daron Acemoglu, Simon Johnson and James Robinson’s article “The Colonial Origins of Comparative Development” (*American Economic Review*, 2001) is one of the most cited papers in economics. Its puzzle: institutions and income go together, but rich countries may simply afford better institutions (reverse causation; see [[reverse-causality]]). They needed something that shaped institutions but did not directly affect income today: an [[instrumental-variable|instrumental variable]].",
      "Their answer was the death rate of early European settlers. Where settlers died in large numbers from malaria and yellow fever, Europeans set up colonies to extract resources, with few protections for most people; where settlers survived, they built institutions with property rights and checks on power for themselves. Those early institutions persisted.",
      {fig:'<svg viewBox="0 0 340 388"><defs><marker id="e4u14-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="8" y="8" width="190" height="48" rx="8" stroke-width="2"/><text x="103" y="29" text-anchor="middle">Settler mortality</text><text class="s" x="103" y="47" text-anchor="middle">disease risk for Europeans</text><path class="d-ink" d="M103 57 V75" stroke-width="2" marker-end="url(#e4u14-l5-a)"/><rect class="d-soft" x="8" y="78" width="190" height="48" rx="8" stroke-width="2"/><text x="103" y="99" text-anchor="middle">Type of colony</text><text class="s" x="103" y="117" text-anchor="middle">settle or extract?</text><path class="d-ink" d="M103 127 V145" stroke-width="2" marker-end="url(#e4u14-l5-a)"/><rect class="d-gold" x="8" y="148" width="190" height="48" rx="8" stroke-width="2"/><text x="103" y="169" text-anchor="middle">Early institutions</text><text class="s" x="103" y="187" text-anchor="middle">rules on property and power</text><path class="d-ink" d="M103 197 V215" stroke-width="2" marker-end="url(#e4u14-l5-a)"/><rect class="d-gold" x="8" y="218" width="190" height="48" rx="8" stroke-width="2"/><text x="103" y="239" text-anchor="middle">Institutions today</text><text class="s" x="103" y="257" text-anchor="middle">inclusive or extractive</text><path class="d-ink" d="M103 267 V285" stroke-width="2" marker-end="url(#e4u14-l5-a)"/><rect class="d-lup" x="8" y="288" width="190" height="48" rx="8" stroke-width="2"/><text x="103" y="309" text-anchor="middle">Income per person</text><text class="s" x="103" y="327" text-anchor="middle">today: the outcome</text><rect class="d-sage" x="210" y="70" width="106" height="86" rx="8" stroke-width="2"/><text x="263" y="92" text-anchor="middle">Geography</text><text class="s" x="263" y="110" text-anchor="middle">(Sachs): disease,</text><text class="s" x="263" y="126" text-anchor="middle">soils, distance</text><text class="s" x="263" y="142" text-anchor="middle">to the sea</text><rect class="d-rose" x="210" y="176" width="106" height="86" rx="8" stroke-width="2"/><text x="263" y="198" text-anchor="middle">Human</text><text x="263" y="214" text-anchor="middle">capital</text><text class="s" x="263" y="232" text-anchor="middle">(Glaeser et al.):</text><text class="s" x="263" y="248" text-anchor="middle">settlers’ skills</text><path class="d-ink" d="M316 113 H328 V324 H202" stroke-width="2" fill="none" stroke-dasharray="5 4" marker-end="url(#e4u14-l5-a)"/><path class="d-ink" d="M263 262 V302 H202" stroke-width="2" fill="none" stroke-dasharray="5 4" marker-end="url(#e4u14-l5-a)"/><text class="s" x="170" y="362" text-anchor="middle">Solid: the colonial-origins chain (2001).</text><text class="s" x="170" y="380" text-anchor="middle">Dashed: routes their critics propose.</text></svg>', alt:"Left: a vertical chain of five boxes joined by solid arrows. Settler mortality (disease risk for Europeans) leads to the type of colony (settle or extract), then to early institutions (rules on property and power), then to institutions today (inclusive or extractive), then to income per person today, the outcome. Right: two boxes for rival explanations, each with a dashed arrow straight to income per person: geography (Sachs), meaning disease, soils and distance to the sea; and human capital (Glaeser and co-authors), meaning settlers’ skills. A note says solid arrows show the colonial-origins chain from 2001 and dashed arrows show routes their critics propose.", cap:"The colonial-origins argument as a causal chain, with two rival routes. Each arrow is a claim that can be tested."},
      "*Why Nations Fail* (2012), by Acemoglu and Robinson, generalised the argument. [[inclusive-institutions|Inclusive institutions]] spread political power and economic opportunity widely and protect property and contracts; [[extractive-institutions|extractive institutions]] concentrate power and wealth in a narrow elite. Paths diverge at [[critical-juncture|critical junctures]] such as the Black Death or colonisation, and small initial differences then grow. A [[natural-experiment|natural experiment]] they highlight is Korea: one people, divided in 1945, under very different institutions. In 2024 the three authors shared the economics Nobel prize “for studies of how institutions are formed and affect prosperity”."
    ]},
    {h:"Critics and rivals", body:[
      "The argument has drawn strong criticism from several directions:",
      {list:[
        "**Data:** David Albouy (*American Economic Review*, 2012) argued that many settler-mortality figures were assigned from other places or from soldiers on campaign, and that the results weaken when this is corrected. The authors replied and defended their estimates.",
        "**Human capital:** Edward Glaeser and co-authors (“Do Institutions Cause Growth?”, 2004) argued that settlers brought skills and schooling as well as institutions, and that growth often comes first and better institutions later.",
        "**Geography:** Jeffrey Sachs, with John Gallup and Andrew Mellinger (1999), argued that tropical disease, poor soils and distance from the sea directly hold incomes down; reviewing *Why Nations Fail* in 2012, Sachs called its account of institutions too narrow. Jared Diamond’s *Guns, Germs, and Steel* (1997) told a very long-run geographical story. Dani Rodrik and co-authors answered with a paper titled “Institutions Rule” (2004).",
        "**China:** fast growth under a single-party state is hard to fit. Acemoglu and Robinson predicted that “extractive growth” would run out; Yuen Yuen Ang (*How China Escaped the Poverty Trap*, 2016) argued instead that China’s institutions adapted through directed improvisation.",
        "**Colonialism:** some postcolonial scholars say the theory turns colonial violence into a story about “institutions”, with European settler societies as the benchmark. Economists have used similar tools to trace colonial extraction directly: Nathan Nunn (2008) linked Africa’s slave trades, and Melissa Dell (2010) Peru’s colonial forced-labour system (the *mita*), to lower incomes today."
      ]}
    ]},
    {h:"Culture arguments, handled with care", body:[
      "Cultural explanations have a long history, from Max Weber’s *The Protestant Ethic and the Spirit of Capitalism* (1904–05) to David Landes’s *The Wealth and Poverty of Nations* (1998). They need special care in seminars.",
      "Consider one cautionary tale. In *The Religion of China* (1915), Weber argued that Confucianism held back capitalist development. Decades later, as East Asian economies boomed, some writers credited “Confucian values” with the boom (the [[asian-values|“Asian values”]] debate, see Unit 11). When the same culture explains both stagnation and success, it may be explaining neither.",
      "Better research measures specific, changeable traits rather than national characters. Nathan Nunn and Leonard Wantchekon (2011) found lower trust today in African ethnic groups that were more heavily exposed to the slave trades: culture as a product of history, not an essence. Unit 4 warned against [[nihonjinron|nihonjinron]]-style claims; the same rule applies to every region."
    ]},
    {h:"Global inequality: the elephant and its critics", body:[
      "[[global-inequality|Global inequality]] can mean inequality **between** countries (comparing average incomes), **within** them, or among all the world’s people as if they lived in one country. For most of the past two centuries the gap between countries grew (Lant Pritchett’s “Divergence, Big Time”, 1997); since about 2000, many poorer countries have grown faster than rich ones, so [[convergence]] has become a live question. Small differences in growth compound: a handy rule is that income doubles in roughly 70 ÷ (growth rate in %) years, so about 10 years at 7% a year but 35 years at 2%.",
      "Christoph Lakner and Branko Milanovic’s study of 1988–2008, popularised in Milanovic’s *Global Inequality* (2016) and already met in Unit 1, produced the [[elephant-curve|elephant curve]]:",
      {fig:'<svg viewBox="0 0 340 352"><path class="d-ink" d="M40 230 H324" stroke-width="2"/><path class="d-ink" d="M40 230 V24" stroke-width="2"/><path class="d-ink" d="M50 186 C80 168 115 112 150 92 C172 80 188 70 200 72 C216 76 228 120 244 168 C254 198 262 214 272 216 C288 216 300 190 318 96" stroke-width="3" fill="none"/><circle class="d-gold" cx="200" cy="72" r="7" stroke-width="2"/><circle class="d-rose" cx="270" cy="216" r="7" stroke-width="2"/><circle class="d-sage" cx="318" cy="96" r="7" stroke-width="2"/><text x="200" y="56" text-anchor="middle">A</text><text x="270" y="204" text-anchor="middle">B</text><text x="318" y="80" text-anchor="middle">C</text><text class="s" x="182" y="250" text-anchor="middle">global income percentile</text><text class="s" x="182" y="266" text-anchor="middle">(poorest → richest)</text><text class="s" x="22" y="128" text-anchor="middle" transform="rotate(-90 22 128)">real income growth</text><text class="s" x="14" y="294">A: the global middle, much of it in Asia</text><text class="s" x="14" y="314">B: many in rich countries’ lower middle class</text><text class="s" x="14" y="334">C: the global top 1%</text></svg>', alt:"A stylised curve shaped like an elephant’s back and trunk. The horizontal axis is global income percentile from poorest to richest; the vertical axis is real income growth. Growth is moderate for the poorest, rises to a peak in the middle (point A, the global middle, much of it in Asia), falls to near zero at around the 80th percentile (point B, many in rich countries’ lower middle class), then rises steeply at the very top (point C, the global top 1%).", cap:"Stylised, after Lakner and Milanovic (2016): real income growth by global income percentile, 1988–2008. Not drawn to scale."},
      "Critics urge caution. Adam Corlett of the Resolution Foundation (2016) argued that the chart is easily over-read: each point mixes different countries, and population growth and weak performers such as Japan and former communist economies shape the dip, while lower and middle incomes in most rich Western countries did not generally stagnate. Others note that in **absolute** dollars the top gained far more than the middle.",
      "Thomas Piketty’s *Capital in the Twenty-First Century* (French 2013, English 2014) looked within countries. His summary inequality, [[r-greater-than-g|r > g]], says that when the return on wealth exceeds the growth rate of the economy, inherited wealth tends to grow faster than incomes from work, so wealth concentrates unless policy intervenes; he proposed a global wealth tax. Critics, including Acemoglu and Robinson (2015), replied that institutions and politics, not a general law, drive inequality."
    ]},
    {h:"Arguing a development question", body:[
      "A strong seminar answer on “why did X develop?” does five things:",
      {ol:["**Defines the outcome:** income, poverty, capabilities or something else.","**Names a mechanism**, not just a factor: how did institutions or geography produce the result?","**Uses more than one kind of evidence:** cross-country statistics, case studies, history, experiments.","**Tests rivals:** what would we expect to see if geography, not institutions, mattered most?","**Answers a counter-argument** fairly, then says what remains uncertain."]},
      {ex:"**Question:** Why did Botswana grow so fast after independence in 1966?\n\n• **Institutions:** Acemoglu, Johnson and Robinson (2003) credited pre-colonial institutions that limited chiefs’ power, and leaders who kept them.\n• **Resources:** diamonds, discovered soon after independence, gave revenue; the question is why they didn’t become a [[resource-curse|resource curse]].\n• **Geography:** landlocked and dry, which makes it a hard case for simple geographic stories.\n• **Counter-argument:** high inequality and dependence on diamonds remain; growth is not the whole of development.", label:"Worked example"},
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["The 2024 Nobel prize settled the debate: institutions explain everything.","The prize recognised influential research; geography, human capital and history arguments remain active."],["Geography is destiny.","Geography’s effects change with technology and policy: malaria can be controlled, and landlocked Botswana grew fast."],["Culture is fixed and explains national success.","Traits such as trust are shaped by history and can change; the same culture has been used to explain opposite outcomes."],["Global inequality has risen everywhere.","Many poorer countries have grown faster than rich ones since about 2000, while inequality within many countries rose from the 1980s."]]},
      {terms:["inclusive-institutions","extractive-institutions","critical-juncture","geography-hypothesis","culture-hypothesis","global-inequality","convergence","elephant-curve","r-greater-than-g"]}
    ]}
   ],
   try:[
    {id:"e4u14-l5-x1", type:"sort", q:"Which family of explanation does each claim belong to?", buckets:["Institutions","Geography","Culture"], items:[
      {t:"Secure property rights and limits on rulers encourage people to invest.", b:0, why:"The core institutional mechanism."},
      {t:"Malaria and tropical diseases reduce productivity and life spans.", b:1, why:"Sachs’s geography argument (though disease also affected colonial institutions)."},
      {t:"Higher levels of trust make trade and cooperation cheaper.", b:2, why:"A cultural trait, measured as a changeable norm."},
      {t:"Landlocked countries pay more to reach world markets.", b:1, why:"Location and transport costs are geographical."},
      {t:"Elites who control both politics and the economy block new competitors.", b:0, why:"Extractive institutions in Acemoglu and Robinson’s sense."},
      {t:"Religious ideas shape attitudes to work and saving.", b:2, why:"Weber’s classic cultural argument."}
    ]},
    {id:"e4u14-l5-x2", type:"order", q:"Put the links in Acemoglu, Johnson and Robinson’s colonial-origins chain in order.", items:[
      {t:"Disease risk for European settlers", why:"The starting point, measured by settler mortality."},
      {t:"Whether Europeans settled or set up extractive colonies", why:"High mortality discouraged settlement."},
      {t:"Early institutions, with or without protections for most people", why:"Settlers built institutions that protected themselves; extractive colonies did not."},
      {t:"Institutions today", why:"Early institutions persisted."},
      {t:"Income per person today", why:"The outcome to be explained."}
    ]},
    {id:"e4u14-l5-x3", type:"mcq", q:"Glaeser and co-authors (2004) accept that former settler colonies are richer today. What alternative explanation do they offer?", options:[
      {t:"Settlers brought human capital (skills and schooling), and better institutions often followed growth", ok:true, why:"Right. If skills, not institutions, travelled with settlers, the settler-mortality evidence can’t separate the two."},
      {t:"Settler colonies had better climates for crops", why:"That is closer to the geography argument of Sachs."},
      {t:"Settler mortality figures were invented", why:"Albouy questioned how the figures were assembled; Glaeser and co-authors made a different point."},
      {t:"Culture determines everything", why:"Their argument is about human capital and the order of causation."}
    ]},
    {id:"e4u14-l5-x4", type:"match", q:"On the stylised elephant curve for 1988–2008, match each point to the group it mainly represents.", pairs:[
      ["The high point in the middle","The global middle, much of it in China and elsewhere in Asia","Large real gains for hundreds of millions of people."],
      ["The dip near the 80th percentile","Many in rich countries’ lower middle class, plus some weak performers","Corlett (2016) stresses that this point mixes different countries."],
      ["The rising trunk at the far right","The global top 1%","Strong relative gains and very large absolute gains."],
      ["The far left","The world’s poorest","Gains there were smaller than in the middle, in percentage terms."]
    ]},
    {id:"e4u14-l5-x5", type:"mcq", q:"In plain words, what does Piketty’s inequality r > g imply?", options:[
      {t:"When the return on wealth exceeds the economy’s growth rate, inherited wealth tends to grow faster than incomes from work, so wealth concentrates", ok:true, why:"Right. Piketty argues policy, such as progressive taxes on wealth, is needed to counter the tendency."},
      {t:"Rich countries always grow faster than poor ones", why:"r > g compares the return on capital with growth inside an economy, not growth across countries."},
      {t:"Interest rates should always be higher than growth", why:"It is a description of a tendency, not a policy rule."},
      {t:"Inequality between countries must rise", why:"His book focuses mainly on inequality within countries."}
    ]},
    {id:"e4u14-l5-x6", type:"spot", q:"A seminar paragraph argues about development. Tap each sentence that has a **flaw in its reasoning**.", ask:"a flaw in its reasoning", parts:[
      {t:"Country A is poor because its people are naturally less hard-working.", flag:true, why:"A national-character claim with no evidence; it explains nothing that can be tested and repeats an old stereotype."},
      " ",
      {t:"Countries with stronger property rights are richer, so property rights always cause growth.", flag:true, why:"Correlation read as causation: richer countries may afford better institutions, the reverse causation problem settler mortality was meant to solve."},
      " ",
      {t:"To test the institutions argument, I compare it with geography and human-capital explanations.", flag:false, why:"Good practice: testing rivals."},
      " ",
      {t:"I define development here as income per person, while noting that capabilities might give a different answer.", flag:false, why:"Good practice: define the outcome and its limits."},
      " ",
      {t:"Because Korea’s two halves differ, institutions explain the whole of every country’s income.", flag:true, why:"Over-generalisation from one natural experiment; Korea is strong evidence for one case, not a universal law."}
    ]},
    {id:"e4u14-l5-x7", type:"number", q:"Using the rule of 70, roughly how many years does it take for income per person to double if it grows at 3.5% a year?", answer:20, tol:1, unit:"years", why:"70 ÷ 3.5 = **20 years** (the exact figure with compounding is about 20.1). Small differences in growth rates matter: at 7% a year, income doubles in about 10 years.", wrongs:[
      {v:28.6, tol:0.6, why:"That is 100 ÷ 3.5, which ignores compounding (growth on growth). The rule of 70 accounts for it."},
      {v:35, tol:1, why:"That is 70 ÷ 2, the doubling time at 2% a year. Divide by the growth rate given, 3.5."},
      {v:245, tol:2, why:"That multiplies 70 by 3.5. Divide instead."}
    ], hint2:"Divide 70 by the growth rate in per cent."}
   ],
   apply:{
    intro:"Test the big explanations on real cases and data. Everything is free online.",
    tasks:[
     {t:"Two neighbours, three explanations", how:[
       "Choose two neighbouring countries with different incomes today (for example Haiti and the Dominican Republic, Botswana and Zimbabwe, Costa Rica and Nicaragua, or Malaysia and Indonesia).",
       "Find their GDP per person on the World Bank’s data site and one measure of institutions (for example the Worldwide Governance Indicators).",
       "Write one sentence each on what institutions, geography and culture or history would say about the gap, and which evidence would decide."
     ], write:"The pair… Incomes… Institutional measure… Institutions say… Geography says… Culture or history says… Deciding evidence…"},
     {t:"Read the elephant", how:[
       "Find a version of the elephant curve (Milanovic’s or a reputable news explainer) and Corlett’s 2016 critique on the Resolution Foundation website.",
       "List two things the chart shows and two things it can’t show.",
       "Write one sentence a careful seminar speaker would say about it."
     ], write:"What it shows… What it can’t show… A careful sentence…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument, using the five steps from the lesson.",
       "1. Do institutions rule, or are they a result of growth?",
       "2. Can China’s growth be explained by the institutions framework?",
       "3. Which matters more for justice: inequality between countries or within them?"
     ], write:"My question… Outcome defined… Mechanism… Evidence… Rival tested… Counter-argument…"}
    ],
    proof:"A three-explanation comparison of two neighbouring countries with deciding evidence, notes on what the elephant curve can and can’t show, and a five-step seminar paragraph."
   },
   read:[
    {book:"osecon", where:"Chapter 20, section 20.4 “Economic Convergence”", note:"The textbook’s account of why poorer countries may or may not catch up."},
    {book:"robeyns", where:"Chapter 4 “Critiques and Debates”", note:"How the capability approach answers critics, useful when you define “development” in a paper."},
    {book:"eirt", where:"Chapter 17 “Global South Perspectives”", note:"Perspectives from the Global South on inequality and the world economy."}
   ]
  }
  ],
  checkpoint:["e4u14-q02","e4u14-q06","e4u14-q09","e4u14-q12","e4u14-q15","e4u14-q20","e4u14-q23","e4u14-q27","e4u14-q31","e4u14-q36","e4u14-q39","e4u14-q44"],
  codex:[
   {id:"capability-approach", title:"The capability approach", aka:["capabilities approach","development as freedom","functionings and capabilities"], tags:["development","theory","well-being"],
    summary:"Sen’s framework that judges development by people’s real freedoms to be and do what they have reason to value, not by income alone.",
    levels:{
     starter:[
      "Two people have the same income. One is healthy and lives near a good school and a clinic; the other has a disability, lives far from services and faces rules that keep her at home. Are they equally well off?",
      "The **capability approach**, developed by the economist Amartya Sen, says no. What matters is not what people own but what they are actually free to be and do: to be healthy, educated, safe, and able to take part in community life. These real freedoms are called **capabilities**; the things people actually achieve are **functionings**.",
      "Income still matters, but as a means. Whether it turns into freedom depends on **conversion factors**: health, skills, roads, laws and social norms.",
      {key:"Development is the expansion of people’s real freedoms, and income is one tool among several."}
     ],
     builder:[
      "**Key works.** Sen’s Tanner Lecture “Equality of What?” (1979), *Commodities and Capabilities* (1985) and *Development as Freedom* (1999). Martha Nussbaum developed a philosophical version in *Women and Human Development* (2000) and *Creating Capabilities* (2011). Ingrid Robeyns’s open-access *Wellbeing, Freedom and Social Justice* (2017) is the standard guide.",
      {table:[["Concept","Meaning"],["Functionings","Beings and doings achieved: being nourished, reading, taking part"],["Capabilities","The set of functionings a person could achieve: real freedom of choice"],["Conversion factors","Personal (health, skills), social (norms, laws) and environmental (climate, infrastructure) conditions"],["Agency","Pursuing goals one values, including goals beyond one’s own well-being"]]},
      "**Instrumental freedoms.** In *Development as Freedom* Sen lists political freedoms, economic facilities, social opportunities, transparency guarantees and protective security, which reinforce each other.",
      "**Uses.** The approach underpins the Human Development Index (1990), the Multidimensional Poverty Index (2010), studies of disability, gender and education, and migration research such as de Haas’s aspirations–capabilities framework (see {{aspirations-capabilities}})."
     ],
     pro:[
      "**The list debate.** Nussbaum proposes ten central capabilities (life; bodily health; bodily integrity; senses, imagination and thought; emotions; practical reason; affiliation; other species; play; control over one’s environment) as thresholds a just constitution should guarantee. Sen refuses a fixed list, arguing that democratic public reasoning should select and weight capabilities in each context. Critics of Nussbaum see paternalism; critics of Sen see indeterminacy.",
      "**Operationalising it.** Capabilities are freedoms, which are hard to observe; most studies measure functionings and infer capabilities. Researchers must choose dimensions, indicators, thresholds and weights, each a value judgement that should be stated.",
      "**Other critiques.** Some argue the approach is too individualistic (replies stress “collective capabilities” and social conversion factors); some Marxist and feminist critics say it underplays power and structure; libertarians object to its redistributive implications. Robeyns calls it a framework that must be combined with other theories to explain anything.",
      {tip:"In a thesis, say which capabilities you study, why, how you measure them, and whether you measure freedoms or achieved functionings."}
     ]
    },
    related:["amartya-sen","human-development-paradigm","poverty-measurement","beyond-gdp","aspirations-capabilities","measuring-inequality"],
    read:[{book:"robeyns", where:"Chapter 2 “Core Ideas and the Framework”"}],
    sources:[{t:"Nobel Prize: press release, Sveriges Riksbank Prize in Economic Sciences 1998", url:"https://www.nobelprize.org/prizes/economic-sciences/1998/press-release/"},{t:"Open Book Publishers: Robeyns, Wellbeing, Freedom and Social Justice (2017)", url:"https://www.openbookpublishers.com/books/10.11647/obp.0130"},{t:"UNDP Human Development Reports: About human development", url:"https://hdr.undp.org/about/human-development"}],
    checked:"2026-11"},

   {id:"human-development-paradigm", title:"Human development and the HDI", aka:["human development approach","Human Development Report","HDI","Mahbub ul Haq"], tags:["development","measurement","UN"],
    summary:"UNDP’s people-centred view of development, launched with the first Human Development Report and the Human Development Index in 1990.",
    levels:{
     starter:[
      "In 1990 the UN Development Programme published the first **Human Development Report**. Its opening message: development is about people, and about enlarging their choices, not only about the size of the economy.",
      "The report introduced the **Human Development Index (HDI)**, which combines three things: a long and healthy life, knowledge and a decent standard of living. Countries with similar incomes can have very different HDI values, which is the point.",
      "The idea came from the Pakistani economist Mahbub ul Haq, working with Amartya Sen and others.",
      {key:"The HDI was designed to rival GDP for attention, not to measure everything."}
     ],
     builder:[
      "**How it is built (current method).** Health: life expectancy at birth. Knowledge: mean years of schooling (adults 25+) and expected years of schooling (children). Standard of living: the logarithm of GNI per person in PPP dollars. Each is normalised between a minimum and maximum, and the three indices are combined by a **geometric mean**, used since 2010 so that weak performance in one dimension is not fully offset by another.",
      "**Companion indices.** UNDP publishes an inequality-adjusted HDI, a gender development index, a gender inequality index, a planetary pressures-adjusted HDI and, with Oxford’s OPHI, the global Multidimensional Poverty Index.",
      "**As of November 2026.** The latest edition is the *Human Development Report 2025*, “A matter of choice: People and possibilities in the age of AI” (6 May 2025). UNDP lists the 2026 report for release on 1 December 2026.",
      "**Using it.** Compare a country’s HDI rank with its GNI rank: a large gap points to unusually good or poor conversion of income into health and schooling."
     ],
     pro:[
      "**Critiques.** (1) Weights and caps are arbitrary; Martin Ravallion showed that the HDI’s functional form implies contestable valuations, for example of extra years of life in poor versus rich countries. (2) Components correlate strongly with income, so the index adds less than it seems. (3) It leaves out political freedom, security, inequality and environmental sustainability, though companion indices address some of these. (4) Data for some countries are modelled or old.",
      "**Defence.** Haq’s aim was political: a simple number that would make ministries talk about health and schooling. On that test it succeeded; the national and regional human development reports it spawned are a major source of data.",
      "**In research.** Treat the HDI as a summary, not a variable with a clear causal meaning. For explanation, use its components or richer data; for description, report the HDI with its components and the inequality-adjusted value."
     ]
    },
    related:["capability-approach","mahbub-ul-haq","poverty-measurement","beyond-gdp","measuring-inequality"],
    read:[{book:"hdr25", where:"The Overview and the statistical annex"}],
    sources:[{t:"UNDP: Human Development Index (data center)", url:"https://hdr.undp.org/data-center/human-development-index"},{t:"UNDP: Human Development Report 1990", url:"https://hdr.undp.org/content/human-development-report-1990"},{t:"UNDP: Human Development Report 2025", url:"https://hdr.undp.org/content/human-development-report-2025"}],
    checked:"2026-11"},

   {id:"poverty-measurement", title:"Measuring poverty: lines and dimensions", aka:["international poverty line","$3.00 a day","Multidimensional Poverty Index","MPI","prosperity gap"], tags:["development","measurement","poverty"],
    summary:"How the World Bank’s poverty lines and the global Multidimensional Poverty Index count the poor, with figures as of November 2026.",
    levels:{
     starter:[
      "To count the world’s poor you need a line. Since June 2025 the World Bank’s **international poverty line** has been **$3.00 a day** per person, in 2021 purchasing power parity (PPP) dollars: what $3.00 would buy in the United States, adjusted to local prices.",
      "On that line, the Bank’s September 2026 update estimates that about **824 million people, roughly one in ten**, lived in extreme poverty in 2024.",
      "Money is not everything. The **Multidimensional Poverty Index (MPI)** counts people who lack several basics at once, such as nutrition, schooling, clean water and electricity. Its 2026 edition finds **1.2 billion people** in acute multidimensional poverty.",
      {key:"Always ask which line, which price base and which year a poverty figure uses."}
     ],
     builder:[
      "**The lines.** Roughly $1 a day (1990, 1985 PPP); $1.25 (2008, 2005 PPP); $1.90 (2015, 2011 PPP); $2.15 (2022, 2017 PPP); $3.00 (June 2025, 2021 PPP). The $3.00 line is the rounded median of national poverty lines in 23 low-income countries. Higher lines of $4.20 and $8.30 a day are used for lower-middle and upper-middle-income countries. The 2025 change raised the 2022 extreme poverty count from about 713 million to about 838 million, mainly because of new price data and higher national lines.",
      "**Latest figures.** The September 2026 update estimates 824.3 million people (10.1%) in extreme poverty in 2024 and a nowcast of 9.8% for 2026. The Bank also reports a societal poverty line that rises with median income and a prosperity gap measured against $28 a day.",
      "**The MPI.** Ten indicators in three equally weighted dimensions: health (nutrition, child mortality), education (years of schooling, attendance) and living standards (cooking fuel, sanitation, drinking water, electricity, housing, assets). A person is poor if deprived in at least a third of the weighted indicators. MPI = H × A, where H is the share of people who are poor and A the average intensity of their deprivation. The 2026 global MPI covers 108 countries: 1.2 billion of 6.3 billion people (18.9%)."
     ],
     pro:[
      "**Why lines move.** PPP rounds change relative prices; the 2021 PPPs raised measured consumption by about 13% on average, more in low-income countries, so the line had to rise to keep its meaning. The World Bank attributes about $0.35 of the 2025 increase to the new PPPs and the remaining $0.50 to higher national poverty lines in low-income countries. Comparisons across lines and rounds are invalid without recalculation.",
      "**Debates.** Some scholars (for example Robert Allen, Sanjay Reddy and Thomas Pogge in different ways) have criticised the PPP-based lines as too low or too disconnected from the cost of basic needs. Others defend them as transparent and anchored in poor countries’ own lines. Household surveys measure consumption in some countries and income in others, and miss people outside households, such as many refugees or homeless people.",
      "**MPI debates.** Critics question its weights and cut-off and the mixing of inputs (school attendance) with outcomes (nutrition); defenders note that it identifies who is deprived in what, which guides policy. Many countries publish their own national MPIs with locally chosen indicators.",
      {warn:"Global poverty figures are estimates with modelling for years and countries without surveys. Cite the vintage (for example “September 2026 update”)."}
     ]
    },
    related:["capability-approach","human-development-paradigm","measuring-inequality","beyond-gdp"],
    read:[{book:"osecon", where:"Chapter 19, section 19.5 “How Well GDP Measures the Well-Being of Society”"}],
    sources:[{t:"World Bank: June 2025 update to global poverty lines (factsheet)", url:"https://www.worldbank.org/en/news/factsheet/2025/06/05/june-2025-update-to-global-poverty-lines"},{t:"World Bank Data Blog: September 2026 global poverty update", url:"https://blogs.worldbank.org/en/opendata/september-2026-global-poverty-update-from-the-world-bank--one-in"},{t:"UNDP: 2026 Global Multidimensional Poverty Index", url:"https://hdr.undp.org/content/2026-global-multidimensional-poverty-index-mpi"}],
    checked:"2026-11"},

   {id:"beyond-gdp", title:"Beyond GDP", aka:["measuring progress","well-being measurement","Gross National Happiness","Stiglitz–Sen–Fitoussi Commission"], tags:["development","measurement","UN"],
    summary:"The long effort to measure progress by well-being, fairness and sustainability as well as output, up to the UN expert group’s 2026 dashboard.",
    levels:{
     starter:[
      "GDP measures how much an economy produces. It doesn’t say whether people are healthy, whether gains are shared, or whether a country is using up its forests and climate.",
      "“**Beyond GDP**” is the name for efforts to add those missing pieces. Bhutan’s idea of **Gross National Happiness**, the UN’s Human Development Index and many national well-being dashboards are examples.",
      "In May 2026 a UN expert group proposed a global dashboard of 31 indicators to sit alongside GDP.",
      {key:"The aim is not to abolish GDP but to stop it being the only compass."}
     ],
     builder:[
      {table:[["Year","Milestone"],["1934","Simon Kuznets warns that national income can’t measure a nation’s welfare"],["1970s","Bhutan’s fourth king is credited with the idea of Gross National Happiness"],["1990","First Human Development Report and the HDI"],["2009","Stiglitz–Sen–Fitoussi Commission report recommends well-being and sustainability dashboards"],["2024","Pact for the Future asks for measures that complement GDP"],["May 2026","UN High-Level Expert Group report *Counting what counts*: a 31-indicator dashboard"]]},
      "**The 2026 report.** Co-chaired by Kaushik Basu and Nora Lustig, the group defined progress as equitable, inclusive and sustainable well-being grounded in peace, human rights and respect for the planet. About half of its 31 indicators come from the SDGs; countries can adapt the dashboard. It was presented at UN headquarters on 7 May 2026, launching intergovernmental consultations; an elements paper was finalised on 4 September 2026."
     ],
     pro:[
      "**The headline-number question.** As of November 2026, governments are divided over whether the framework should include a single headline index. Advocates of one number say only a number can compete with GDP in the news; advocates of dashboards say any single index hides trade-offs and smuggles in weights.",
      "**Other approaches.** Composite indices (HDI, the Genuine Progress Indicator), subjective well-being surveys (life satisfaction, as in the World Happiness Report), wealth accounting (natural, produced and human capital) and the UN System of Environmental-Economic Accounting each answer different questions.",
      "**Critiques.** Some economists argue that GDP is a well-defined measure of market output and should simply be used for what it is; others warn that well-being indices can be manipulated or used to distract from poor economic performance. Statistical capacity in many low-income countries is a binding constraint.",
      "**Links.** See {{sustainable-development-idea}} for the environmental side and the SDG indicator framework ({{sdg-indicator-framework}})."
     ]
    },
    related:["human-development-paradigm","capability-approach","pact-for-the-future","sustainable-development-idea","sdg-indicator-framework"],
    sources:[{t:"United Nations: Beyond GDP events and news (report presented 7 May 2026)", url:"https://www.un.org/en/node/236425"},{t:"UNCTAD: Counting what counts – A compass of progress for people and planet (2026)", url:"https://unctad.org/publication/counting-what-counts-compass-progress-people-and-planet"}],
    checked:"2026-11"},

   {id:"dependency-debates", title:"Structuralism and dependency", aka:["dependency theory","dependencia","Prebisch–Singer thesis","ECLA school","dependent development"], tags:["development","theory","Latin America"],
    summary:"The Latin American-born theories that explained underdevelopment by a country’s position in the world economy, from Prebisch’s structuralism to dependency and its critics.",
    levels:{
     starter:[
      "Modernisation theory looked for the causes of poverty inside poor countries. **Structuralists** and **dependency** theorists looked outside, at how poor countries are linked to rich ones.",
      "The Argentine economist Raúl Prebisch argued around 1950 that the world economy has a **centre** making manufactured goods and a **periphery** exporting raw materials, and that the prices of raw materials tend to fall compared with manufactures. Exporters of coffee, copper or cocoa must sell more and more to buy the same machines.",
      "In the 1960s dependency theorists went further: underdevelopment was produced by the same world system that enriched the core.",
      {key:"Dependency asks not “what is wrong with poor countries?” but “how are they connected to rich ones?”."}
     ],
     builder:[
      {table:[["Strand","Key works","Claim"],["Structuralism","Prebisch (1949/1950); Singer (1950)","Declining terms of trade; industrialise through import substitution"],["Radical dependency","Frank (1966); Rodney (1972); Amin (1970s)","Underdevelopment is produced by capitalist exploitation; delinking may be needed"],["Dependent development","Cardoso & Faletto (1969); Evans (1979)","Growth is possible inside dependency, shaped by alliances of state, local and foreign capital"],["World-systems","Wallerstein (from 1974)","A single capitalist world-economy with core, semi-periphery and periphery"]]},
      "**Policy influence.** ECLA (now ECLAC) and UNCTAD carried structuralist ideas into import substitution industrialisation, regional integration and the 1974 call for a New International Economic Order.",
      "**In Asia and Africa.** Rodney’s and Amin’s work shaped African debates; in Asia, dependency ideas influenced critiques of plantation and mineral economies, though East Asia’s export-led growth became the main counter-example."
     ],
     pro:[
      "**Evidence.** Long-run studies of commodity prices generally find a downward trend relative to manufactures for many commodities, with long cycles and booms (such as 2003–2011), so the Prebisch–Singer thesis is often described as broadly supported but highly variable by commodity and period.",
      "**Critiques.** (1) East Asia and later China grew through deep integration with the core. (2) Import substitution often produced inefficient, protected industries and balance-of-payments crises. (3) Radical dependency was hard to test and often treated the periphery’s own states and classes as passive. Cardoso and Faletto answered the last point, which is why their version aged best.",
      "**Afterlives.** Dependency ideas reappear in debates on global value chains (who captures value), commodity dependence, debt and “neo-extractivism”, and in critical IPE ({{ipe-schools}}). Ha-Joon Chang and others revived the structuralist case for industrial policy.",
      {tip:"In a seminar, separate the structuralist claim about prices (testable with data) from the broader dependency claim about the world system (harder to test)."}
     ]
    },
    related:["raul-prebisch","theories-global-inequality","post-development","developmental-state-debate","third-world-project","ipe-schools"],
    read:[{book:"eirt", where:"Chapter 5 “Marxism” and Chapter 17 “Global South Perspectives”"}],
    sources:[{t:"UNCTAD: Raúl Prebisch, former Secretary-General", url:"https://unctad.org/osg/former-secretaries-general-and-officers-charge/raul-prebisch"}],
    checked:"2026-11"},

   {id:"post-development", title:"Post-development", aka:["post-development theory","development as discourse","alternatives to development","anti-politics machine"], tags:["development","theory","critical"],
    summary:"The critique, from about 1990, that “development” is a discourse of Western expertise that defines people by lack, and the search for alternatives to it.",
    levels:{
     starter:[
      "Most theories ask how to achieve development. **Post-development** asks what the idea of development itself does.",
      "Its writers argue that after 1945 “development” turned much of the world into a “Third World” defined by what it lacked, and gave experts, donors and states the right to remake people’s lives. Projects often failed on their own terms but still changed who held power.",
      "They look for **alternatives to development**, often in social movements and local or indigenous ideas such as *buen vivir* (“living well”).",
      {key:"Post-development is a critique of the development project, not a plan for faster growth."}
     ],
     builder:[
      {table:[["Work","Key idea"],["James Ferguson, *The Anti-Politics Machine* (1990)","In Lesotho, a development project failed in its aims but expanded bureaucratic state power and turned political questions into technical ones"],["Wolfgang Sachs (ed.), *The Development Dictionary* (1992)","Key words such as needs, poverty and progress carry Western assumptions"],["Arturo Escobar, *Encountering Development* (1995; new edition 2011)","Development as a discourse that made the Third World; case study of Colombia"],["James C. Scott, *Seeing Like a State* (1998)","High-modernist schemes fail when states impose simplified plans, as in Tanzania’s villagisation"]]},
      "**Roots.** Michel Foucault’s analysis of discourse and power (see {{poststructuralism}}), postcolonial theory, Gandhi’s *Hind Swaraj* (1909) and ecofeminism (Vandana Shiva, *Staying Alive*, 1988).",
      "**Alternatives.** Ecuador’s 2008 constitution and Bolivia’s 2009 constitution adopted *buen vivir* / *vivir bien*; degrowth and “pluriverse” thinking continue the line."
     ],
     pro:[
      "**Critiques.** Ray Kiely (1999) and Jan Nederveen Pieterse (2000) argued that post-development (1) treats development as monolithic, ignoring real variation and improvements in health and literacy; (2) romanticises the local and “tradition”; (3) offers critique without a practical programme; and (4) can ignore what poor people themselves say they want. Some critics add that buen vivir sat alongside continued mineral extraction in Ecuador and Bolivia.",
      "**Replies.** Escobar’s 2011 introduction reframed the project as “pluriversal studies”, and many scholars now use post-development as a method (asking who defines problems and who is silenced) rather than a blanket rejection.",
      "**Using it.** Ferguson’s ethnography is a model for studying development projects as political events. Pair it with methods from {{discourse-analysis}} and fieldwork ethics ({{fieldwork-ethics}})."
     ]
    },
    related:["dependency-debates","capability-approach","poststructuralism","postcolonialism-ir","green-theory-ir","discourse-analysis"],
    read:[{book:"eirt", where:"Chapter 9 “Postcolonialism”"}],
    sources:[{t:"Princeton University Press: Escobar, Encountering Development (new edition)", url:"https://press.princeton.edu/books/paperback/9780691150451/encountering-development"}],
    checked:"2026-11"},

   {id:"developmental-state-debate", title:"The developmental state debate", aka:["East Asian miracle","governed market","embedded autonomy","industrial policy in East Asia"], tags:["development","political economy","East Asia"],
    summary:"The argument over how much East Asia’s rapid growth owed to state guidance of markets, and whether it can be repeated.",
    levels:{
     starter:[
      "From the 1950s to the 1990s, Japan, then South Korea, Taiwan, Hong Kong and Singapore, and later Southeast Asian economies and China grew faster than almost any economies in history.",
      "One school says markets did the work: saving, schooling, stable prices and trade. Another says capable states guided markets: they chose industries, steered credit to them and punished firms that failed to export. The second view gave us the idea of the **developmental state**.",
      "Most scholars now accept that both mattered and argue about the mix, and about whether any country can copy it today.",
      {key:"The question is not “state or market?” but “what kind of state, doing what, under which conditions?”."}
     ],
     builder:[
      {table:[["Work","Argument"],["Gerschenkron (1962)","Late developers need bigger roles for banks or states"],["Johnson (1982)","Japan’s plan-rational developmental state, led by MITI"],["Amsden (1989)","Korea: subsidies in return for performance; “getting prices wrong”"],["Wade (1990)","Taiwan: a governed market, leading and following"],["World Bank (1993)","Eight high-performing Asian economies, 1965–90: mainly fundamentals, some interventions"],["Evans (1995)","Embedded autonomy; predatory, intermediate and developmental states"],["Doner, Ritchie & Slater (2005)","Systemic vulnerability explains where developmental states emerged"]]},
      "**Why it mattered in IR.** The debate shaped World Bank policy, Japan’s aid philosophy ({{japan-development-cooperation}}), and today’s arguments about industrial policy and China’s model."
     ],
     pro:[
      "**Conditions.** Critics of copying point to unusual conditions: Cold War aid and market access, land reform, weak landed elites, external threats, and authoritarian control of labour. Doner, Ritchie and Slater’s “systemic vulnerability” explains why even within Asia the model was strong in Korea, Taiwan and Singapore and weaker in Southeast Asia.",
      "**Politics of the Miracle report.** Robert Wade (1996) read *The East Asian Miracle* as “paradigm maintenance”: in his account, a study that Japan had pressed for and funded acknowledged industrial policy only within a market-friendly frame.",
      "**Beyond Asia.** Thandika Mkandawire (2001) argued against dismissing African developmental states; Botswana and Mauritius are long-running successes, and Ethiopia and Rwanda were debated in the 2000s–2010s. Today’s debate also covers green industrial policy and semiconductor subsidies in rich countries ({{green-industrial-policy}}).",
      {warn:"Avoid cultural explanations (“Confucian values”) unless you can measure the trait and show the mechanism; the same culture was once blamed for stagnation."}
     ]
    },
    related:["japan-economic-miracle","chalmers-johnson","washington-consensus-debate","institutions-and-development","green-industrial-policy","third-world-project"],
    read:[{book:"osecon", where:"Chapter 32, section 32.2 “Improving Countries’ Standards of Living”"}],
    sources:[{t:"Princeton University Press: Evans, Embedded Autonomy (1995)", url:"https://press.princeton.edu/books/paperback/9780691037363/embedded-autonomy"},{t:"Princeton University Press: Wade, Governing the Market", url:"https://press.princeton.edu/books/paperback/9780691117294/governing-the-market"},{t:"World Bank Documents: The East Asian Miracle (1993)", url:"https://documents.banquemondiale.org/en/publication/documents-reports/documentdetail/975081468244550798"}],
    checked:"2026-11"},

   {id:"washington-consensus-debate", title:"The Washington Consensus and after", aka:["Washington Consensus","post-Washington Consensus","Beijing Consensus","one economics, many recipes"], tags:["development","political economy","policy"],
    summary:"Williamson’s 1989 list of market reforms, how it became a byword for neoliberalism, and the corrections and rivals that followed.",
    levels:{
     starter:[
      "In 1989 the economist John Williamson listed ten reforms that, he said, the Washington institutions (the IMF, the World Bank and the US Treasury) broadly agreed Latin America needed: control budgets, stabilise prices, open trade, privatise, deregulate and protect property rights.",
      "He called it the **Washington Consensus**. The name stuck, and came to stand for the whole market-reform package of the 1980s and 1990s, often attached to IMF and World Bank loans.",
      "After crises in the 1990s, many economists argued that markets need strong institutions, regulation and social protection too.",
      {key:"The Washington Consensus was a list of policies; “the Washington Consensus” in debate often means a whole worldview."}
     ],
     builder:[
      "**The ten items** (Williamson, “What Washington Means by Policy Reform”, 1990): fiscal discipline; reordering public spending priorities towards health, education and infrastructure; tax reform; market-determined interest rates; competitive exchange rates; trade liberalisation; openness to FDI; privatisation; deregulation; property rights.",
      "**What came after.** Stiglitz’s post-Washington Consensus (1998): institutions, regulation, competition, more goals than growth. Rodrik (2006, 2007): “one economics, many recipes”; diagnose binding constraints. The Growth Commission (2008): 13 economies with 7%+ growth for 25 years, pragmatic and varied. Chang (2002): rich countries “kicked away the ladder” of protection. Ramo (2004): a “Beijing Consensus”.",
      "**Unit links.** Structural adjustment and IMF conditionality are in the primer ({{bretton-woods-institutions}}) and Unit 9 ({{bretton-woods-governance}}); financial crises in Unit 15."
     ],
     pro:[
      "**Assessment.** Supporters credit the reforms with ending hyperinflation and debt crises in parts of Latin America; critics cite slow growth, rising inequality and financial crises in the 1990s. Rodrik’s 2006 review of the World Bank’s own retrospective noted a shift towards humility and country diagnosis.",
      "**Capital accounts.** Williamson’s list included FDI but not full capital-account liberalisation; much criticism after the 1997–98 Asian crisis targeted capital-account opening, which he had not proposed.",
      "**As of November 2026.** Industrial policy, export controls and subsidies are widespread among rich and poor countries alike (see {{geoeconomics}}), and the World Bank’s *World Development Report 2024* frames development as escaping a middle-income trap through investment, then technology infusion, then innovation. Whether this is a new consensus or the absence of one is debated.",
      {tip:"Cite Williamson’s list when you mean the list, and name the specific policies when you mean “neoliberalism”."}
     ]
    },
    related:["developmental-state-debate","bretton-woods-institutions","bretton-woods-governance","geoeconomics","financial-crises-ipe"],
    sources:[{t:"Peterson Institute: Williamson, What Washington Means by Policy Reform", url:"https://www.piie.com/commentary/speeches-papers/what-washington-means-policy-reform"},{t:"World Bank: World Development Report 2024, The Middle-Income Trap", url:"https://www.worldbank.org/en/publication/wdr2024"}],
    checked:"2026-11"},

   {id:"aid-effectiveness-debate", title:"Aid effectiveness", aka:["does aid work?","Sachs–Easterly debate","Paris Declaration","Busan Partnership","ODA cuts 2025"], tags:["development","aid","policy"],
    summary:"The long argument over whether, when and how official aid helps development, from grand plans to the Paris and Busan principles and the cuts of 2025.",
    levels:{
     starter:[
      "Rich countries’ governments give **official development assistance** (ODA): grants and cheap loans meant to help poorer countries develop. Whether it works is one of development’s oldest arguments.",
      "Optimists say aid has paid for vaccines, schools and roads and can lift people out of poverty traps. Sceptics say large aid flows can weaken governments’ accountability to their own citizens.",
      "Most researchers now say the question is too big: some aid works very well, some doesn’t, and how it is delivered matters.",
      "In 2025 aid from the OECD’s donor club fell by 23.1%, the largest annual drop on record, mainly because of US cuts.",
      {key:"Ask which aid, for what, delivered how, and compared with what."}
     ],
     builder:[
      {table:[["Position","Key work","Core claim"],["Big push","Sachs, *The End of Poverty* (2005)","Coordinated aid can break poverty traps"],["Searchers","Easterly, *The White Man’s Burden* (2006)","Small, accountable, feedback-driven aid beats grand plans"],["Phase out","Moyo, *Dead Aid* (2009)","Open-ended aid to African governments breeds dependency"],["Test it","Banerjee & Duflo, *Poor Economics* (2011)","Evaluate specific interventions rigorously"]]},
      "**Cross-country evidence.** Burnside and Dollar (2000) found aid helped growth where policies were good; Easterly, Levine and Roodman (2004) found the result fragile. Later work disagrees on whether the average effect on growth is small and positive or near zero.",
      "**Delivery.** The Paris Declaration (2005): ownership, alignment, harmonisation, managing for results, mutual accountability. Accra (2008). Busan (2011): ownership, results, inclusive partnerships, transparency and mutual accountability, with South–South providers joining on a voluntary basis."
     ],
     pro:[
      "**The 2025 contraction.** OECD preliminary data (April 2026): US$174.3 billion from DAC members, down 23.1%; the United States drove about three-quarters of the fall after USAID stopped implementing foreign assistance on 1 July 2025; Germany became the largest DAC provider (US$29.1 billion). Only eight DAC members increased their ODA.",
      "**Measurement issues.** ODA figures include in-donor refugee costs, debt relief and loan grant-equivalents under rules that took effect with 2018 data; compare like with like. Non-DAC providers report differently or not at all.",
      "**Political economy.** Aid allocation follows donors’ strategic interests as well as need (for example votes at the UN, former colonies). Recipients’ ownership is limited by donor earmarking. Localisation and humanitarian reform are covered in Unit 17 ({{participation-localisation}}).",
      "**Arguments in 2026.** Supporters of the cuts stress national interest, fiscal pressure and self-reliance; critics stress lost health and humanitarian programmes and reputational costs. Present both, with evidence on specific sectors."
     ]
    },
    related:["development-rcts","development-ir","japan-development-cooperation","china-overseas-lending","participation-localisation","financing-for-development"],
    sources:[{t:"OECD: A historic decline in foreign aid – preliminary 2025 ODA data (9 April 2026)", url:"https://www.oecd.org/en/data/insights/data-explainers/2026/04/a-historic-decline-in-foreign-aid-preliminary-2025-oda-data.html"},{t:"Busan Partnership for Effective Development Co-operation (2011), outcome document (ICNL library copy)", url:"https://www.icnl.org/resources/library/busan-partnership"},{t:"US Department of State bulletin, 3 July 2025 (USAID ceases to implement foreign assistance)", url:"https://content.govdelivery.com/accounts/USSTATEBPA/bulletins/3e7dfe0"}],
    checked:"2026-11"},

   {id:"development-rcts", title:"Randomised trials in development", aka:["RCTs","randomistas","field experiments","J-PAL","2019 Nobel prize"], tags:["development","methods","evidence"],
    summary:"How randomised controlled trials came to dominate development economics, what they can show, and the critiques of Deaton, Cartwright and others.",
    levels:{
     starter:[
      "Does giving schools free textbooks raise test scores? One way to find out is to choose schools by lottery: some get the textbooks, others don’t yet, and you compare. Because chance decided who got them, any big difference is probably caused by the textbooks.",
      "That is a **randomised controlled trial** (RCT). Since the 1990s, development economists have run thousands of them, on schooling, health, cash transfers, credit and more.",
      "In 2019 Abhijit Banerjee, Esther Duflo and Michael Kremer won the economics Nobel prize “for their experimental approach to alleviating global poverty”.",
      {key:"An RCT answers “did this programme work here?” very well, and “will it work there?” much less well."}
     ],
     builder:[
      "**History.** Kremer and colleagues’ school experiments in western Kenya (mid-1990s); Mexico’s Progresa cash transfer evaluation (late 1990s); J-PAL founded at MIT in 2003; *Poor Economics* (2011).",
      "**Findings that changed policy.** Free distribution of bed nets; remedial teaching matched to children’s level (the Nobel committee cited more than five million Indian children reached by such programmes); conditional and unconditional cash transfers.",
      "**Findings that tempered hopes.** Six microcredit trials published in 2015 found modest average effects on income (see {{microfinance}}).",
      "**Key concepts.** Internal validity (is the comparison fair?) versus [[external-validity|external validity]] (does it generalise?); average treatment effects; spillovers; general equilibrium effects."
     ],
     pro:[
      "**Critiques.** Angus Deaton and Nancy Cartwright (2018): randomisation guarantees balance only in expectation, average effects can hide harm, and results need theory to travel. Lant Pritchett and others: RCTs study small interventions, while most poverty reduction came from growth. Martin Ravallion: the method should follow the question, not the reverse.",
      "**Scaling up.** In a Kenyan contract-teacher study, gains under an NGO disappeared when the government ran the same programme; scale changes implementers, politics and prices.",
      "**Ethics and power.** Concerns about consent, withholding benefits from controls, deception, and research agendas set in rich-country universities. Responses include ethics reviews, pre-registration, local co-investigators and more research led from the Global South.",
      "**Replication disputes.** The 2015 re-analysis of Miguel and Kremer’s Kenyan deworming study (the “worm wars”) shows how results can be contested; long-run follow-ups and meta-analyses now matter as much as single trials.",
      {tip:"In a thesis, combine an RCT’s result with qualitative evidence on mechanisms and context (see {{regression-causal-inference}} and {{case-study-research}})."}
     ]
    },
    related:["aid-effectiveness-debate","regression-causal-inference","case-study-research","microfinance","validity-types"],
    sources:[{t:"Nobel Prize: press release, economic sciences 2019", url:"https://www.nobelprize.org/prizes/economic-sciences/2019/press-release/"}],
    checked:"2026-11"},

   {id:"institutions-and-development", title:"Institutions, geography and culture", aka:["fundamental causes of prosperity","Why Nations Fail","colonial origins","inclusive and extractive institutions","2024 Nobel prize"], tags:["development","political economy","history"],
    summary:"The debate over the deep causes of prosperity: Acemoglu, Johnson and Robinson’s institutions argument, its geographic, human-capital and cultural rivals, and its critics.",
    levels:{
     starter:[
      "Why are some countries rich and others poor? Three big families of answers compete.",
      "**Institutions:** the rules of the game, such as secure property, fair courts and limits on rulers. **Geography:** climate, disease, soils and distance from the sea. **Culture:** shared values and norms, such as trust.",
      "Daron Acemoglu, Simon Johnson and James Robinson argued that institutions matter most, using the history of colonisation as evidence. They shared the 2024 economics Nobel prize “for studies of how institutions are formed and affect prosperity”.",
      {key:"Most scholars combine explanations; the debate is about which comes first and how they interact."}
     ],
     builder:[
      "**Colonial origins (2001).** Where European settlers faced high death rates, colonisers built extractive institutions; where they could settle, they built protective ones. Early institutions persisted and explain much of income today.",
      "**Reversal of fortune (2002).** Colonised areas that were prosperous around 1500 are relatively poorer today, which the authors read as institutions, not geography, at work.",
      "**Why Nations Fail (2012).** Inclusive versus extractive economic and political institutions; critical junctures; the Korean peninsula as a natural experiment.",
      {table:[["Rival","Key work","Claim"],["Geography","Gallup, Sachs & Mellinger (1999); Diamond (1997)","Disease, soils and location directly shape income"],["Human capital","Glaeser et al. (2004)","Settlers brought skills; institutions often follow growth"],["Culture","Weber (1904–05); Landes (1998); Nunn & Wantchekon (2011)","Values and trust shape cooperation and investment"]]}
     ],
     pro:[
      "**Data critique.** Albouy (2012) questioned how settler-mortality data were assembled; the authors defended them. The debate is a good example of how one data series can carry a large literature.",
      "**China and the developmental state.** Fast growth under a single-party state challenges the framework; Acemoglu and Robinson predict limits to “extractive growth”, while Yuen Yuen Ang (2016) stresses adaptive institutions. Compare with the developmental state debate ({{developmental-state-debate}}).",
      "**Colonialism.** Postcolonial critics argue that the framework turns colonial violence into an institutional variable and treats settler societies as models. Work by Nunn (2008) on the slave trades and Dell (2010) on Peru’s *mita* traces colonial extraction’s lasting harm directly.",
      "**Culture with care.** Measure specific, changeable traits rather than national characters; Weber blamed Confucianism for stagnation in 1915, and others later credited it for East Asia’s boom.",
      {tip:"For a seminar, draw the causal chain and mark which arrow each piece of evidence tests."}
     ]
    },
    related:["developmental-state-debate","global-inequality-debates","regression-causal-inference","counterfactuals","postcolonialism-ir"],
    read:[{book:"osecon", where:"Chapter 20 “Economic Growth”"}],
    sources:[{t:"Nobel Prize: economic sciences 2024, summary", url:"https://www.nobelprize.org/prizes/economic-sciences/2024/summary/"}],
    checked:"2026-11"},

   {id:"global-inequality-debates", title:"Global inequality", aka:["elephant curve","between- and within-country inequality","Milanovic","Piketty","r > g","convergence"], tags:["development","inequality","globalisation"],
    summary:"How global inequality is measured, who gained from globalisation (the elephant curve and its critics) and Piketty’s argument about wealth.",
    levels:{
     starter:[
      "“Global inequality” can mean three things: the gap between rich and poor **countries**, inequality **within** each country, or inequality among all the world’s **people** treated as one population.",
      "From about 1800 to the late twentieth century, the gap between countries widened. Since about 2000, fast growth in China, India and elsewhere has narrowed some of the gaps between countries, while inequality inside many countries has grown.",
      "The famous **elephant curve** shows who gained most from 1988 to 2008: the global middle, much of it in Asia, and the very richest, while many in rich countries’ lower middle class gained little.",
      {key:"Say which inequality you mean: between countries, within them, or among all people."}
     ],
     builder:[
      "**Key works.** Lant Pritchett, “Divergence, Big Time” (1997); Christoph Lakner and Branko Milanovic (*World Bank Economic Review*, 2016); Milanovic, *Global Inequality* (2016); Thomas Piketty, *Capital in the Twenty-First Century* (2013/2014); François Bourguignon, *The Globalization of Inequality* (2015).",
      "**Elephant critics.** Adam Corlett (Resolution Foundation, 2016) argued the chart is easily over-read: points mix countries, and the dip reflects composition and weak performers as well as globalisation; lower-middle incomes in most rich Western countries did not generally stagnate. In absolute terms, the top 1% gained far more than the middle.",
      "**Piketty in brief.** When r (the return on capital) exceeds g (growth), wealth concentrates; he proposes progressive wealth taxes. Critics argue institutions and politics, not a general law, drive inequality."
     ],
     pro:[
      "**Measurement choices.** Household surveys under-record top incomes; tax data and national accounts (used by the World Inequality Lab) give higher inequality. Consumption versus income surveys, PPP rounds and population weighting all change results.",
      "**Convergence.** Unconditional convergence between countries was absent for most of history but has appeared since about 2000 in some studies; whether it lasts is debated. The middle-income trap literature (*World Development Report 2024*) asks why so few economies reach high income.",
      "**Normative debate.** Philosophers disagree about whether global inequality, as opposed to poverty, is unjust; the capability approach focuses on thresholds of freedom, while cosmopolitan egalitarians object to inequality as such."
     ]
    },
    related:["institutions-and-development","measuring-inequality","poverty-measurement","global-stratification","capability-approach"],
    read:[{book:"osecon", where:"Chapter 20, section 20.4 “Economic Convergence”"}],
    sources:[{t:"Resolution Foundation: Corlett, Examining an elephant (2016)", url:"https://www.resolutionfoundation.org/publications/examining-an-elephant-globalisation-and-the-lower-middle-class-of-the-rich-world/"},{t:"OpenStax Principles of Economics 3e, 20.4 Economic Convergence", url:"https://openstax.org/books/principles-economics-3e/pages/20-4-economic-convergence"}],
    checked:"2026-11"},

   {id:"amartya-sen", title:"Amartya Sen", aka:["Sen","Development as Freedom"], tags:["thinker","development","economics","philosophy"],
    summary:"Indian economist and philosopher (born 1933), Nobel laureate 1998, whose capability approach redefined development as the expansion of human freedoms.",
    levels:{
     starter:[
      "Amartya Sen was born in 1933 in Santiniketan, in Bengal, then part of British India. As a child he saw the Bengal famine of 1943, in which millions died, an experience that shaped his life’s work.",
      "He became one of the most influential economists and philosophers of his time, teaching in India, Britain and the United States. In 1998 he received the economics Nobel prize for his contributions to welfare economics.",
      "His big idea for development: judge it by people’s **real freedoms** to live lives they value, their **capabilities**, not just by income.",
      {key:"For Sen, freedom is both the goal of development and its most important means."}
     ],
     builder:[
      {table:[["Work","Year","Contribution"],["*Collective Choice and Social Welfare*","1970","Social choice theory"],["*Poverty and Famines*","1981","Famines as failures of entitlements, not just food supply"],["*Commodities and Capabilities*","1985","Functionings and capabilities"],["*Development as Freedom*","1999","Development as expanding freedoms"],["*The Idea of Justice*","2009","Comparative, practical approach to justice"]]},
      "**Famines.** His entitlement approach showed that famines can occur without a fall in food supply, when people lose the means to obtain food; he also argued that no major famine has occurred in a functioning democracy with a free press (Unit 17 develops this: {{famine-entitlements}}).",
      "**Human development.** With his friend Mahbub ul Haq he shaped the Human Development Report (1990) and the HDI, though he was initially sceptical of compressing development into one number."
     ],
     pro:[
      "**Influence.** The capability approach underlies the HDI, the MPI, debates on gender and disability, and the “beyond GDP” movement; Sen co-chaired the Commission on Human Security (with Ogata Sadako, report 2003) and was part of the Stiglitz–Sen–Fitoussi Commission (2009).",
      "**Critiques.** Philosophers ask whether his refusal to list capabilities leaves the approach too open; some Marxist and feminist scholars argue it underplays power and structure; empirical critics of his democracy–famine claim debate how to define “functioning democracy” and “major famine”.",
      "**Legacy in seminars.** Quote his question “equality of what?” and his distinction between means and ends; use *Development as Freedom* as a starting point, not a final authority."
     ]
    },
    related:["capability-approach","human-development-paradigm","mahbub-ul-haq","famine-entitlements","beyond-gdp"],
    read:[{book:"robeyns", where:"Chapter 1 “Introduction” and Chapter 2 “Core Ideas and the Framework”"}],
    sources:[{t:"Nobel Prize: press release, economic sciences 1998", url:"https://www.nobelprize.org/prizes/economic-sciences/1998/press-release/"}],
    checked:"2026-11"},

   {id:"mahbub-ul-haq", title:"Mahbub ul Haq", aka:["Haq","father of the Human Development Report"], tags:["thinker","development","economics","South Asia"],
    summary:"Pakistani economist (1934–1998) who created the Human Development Report and the Human Development Index at UNDP.",
    levels:{
     starter:[
      "Mahbub ul Haq was a Pakistani economist who believed that development should be measured by what happens to people, not only by what happens to the economy.",
      "Working for the UN Development Programme, he led the team that published the first **Human Development Report** in 1990 and created the **Human Development Index (HDI)**.",
      "He wanted one simple number that could compete with GDP for the attention of governments and newspapers.",
      {key:"Haq turned Sen’s philosophy into a tool that politicians could use."}
     ],
     builder:[
      "**Career.** In the 1960s Haq was chief economist of Pakistan’s Planning Commission; in the 1970s he directed the World Bank’s policy planning department; in the 1980s he held cabinet posts in Pakistan; he then became special adviser to UNDP, where he launched the Human Development Reports. He died in New York in 1998.",
      "**Ideas.** His book *The Poverty Curtain* (1976) criticised growth that left the poor behind; *Reflections on Human Development* (1995) explained the human development paradigm and its four pillars as often summarised: equity, sustainability, productivity and empowerment.",
      "**The HDR’s message.** The 1990 report defines human development as “a process of enlarging people’s choices”."
     ],
     pro:[
      "**Political entrepreneur.** Haq is a case of an idea moving from philosophy into global governance: the HDR created a recurring, independent-minded UN publication, national and regional human development reports (including South Asian reports he championed), and a vocabulary that later fed into the MDGs and SDGs.",
      "**Critiques.** Critics of the HDI (see {{human-development-paradigm}}) question its arbitrary weights and limited dimensions; Haq’s defenders reply that he always presented it as a crude but useful complement to GDP.",
      "**Seminar use.** Pair Haq with Sen to show the difference between a theory (capabilities) and an indicator (the HDI), and why the gap between them matters."
     ]
    },
    related:["human-development-paradigm","amartya-sen","capability-approach","beyond-gdp"],
    sources:[{t:"UNDP: Human Development Report 1990", url:"https://hdr.undp.org/content/human-development-report-1990"},{t:"Santa Clara University, Architects of Peace: Dr. Mahbub ul-Haq", url:"https://scu.edu/mcae/architects-of-peace/ul-Haq/homepage.html"}],
    checked:"2026-11"},

   {id:"raul-prebisch", title:"Raúl Prebisch", aka:["Prebisch","ECLA","Prebisch–Singer"], tags:["thinker","development","economics","Latin America"],
    summary:"Argentine economist (1901–1986) who led ECLA and UNCTAD and founded Latin American structuralism with the centre–periphery thesis.",
    levels:{
     starter:[
      "Raúl Prebisch was born in Tucumán, Argentina, in 1901 and died in Santiago, Chile, in 1986. He was the first director-general of Argentina’s central bank, founded in 1935.",
      "As head of the UN Economic Commission for Latin America (ECLA) from 1950 to 1963, he argued that the world economy is divided into a **centre** that exports manufactures and a **periphery** that exports raw materials, and that the terms of trade tend to move against the periphery.",
      "He then became the first Secretary-General of UNCTAD (1964–1969), giving developing countries a voice on trade.",
      {key:"Prebisch made “centre and periphery” part of the vocabulary of world politics."}
     ],
     builder:[
      "**The “manifesto”.** His 1949 report for ECLA, published in English in 1950 as *The Economic Development of Latin America and its Principal Problems*, set out the centre–periphery analysis; Hans Singer reached a similar conclusion in 1950, hence the Prebisch–Singer thesis.",
      "**Policies.** Industrialisation through import substitution, regional integration, commodity agreements and preferential access for developing countries’ exports, ideas that fed UNCTAD, the Group of 77 and the New International Economic Order ({{third-world-project}}).",
      "**Later views.** He became critical of excessive protection and inefficient industries, and late in life wrote about “peripheral capitalism”."
     ],
     pro:[
      "**Legacy.** ECLA’s structuralism was the seedbed of dependency theory, though Prebisch himself was a reformist, not a revolutionary. Debates on commodity dependence, terms of trade and industrial policy today still cite him.",
      "**Critiques.** Liberal economists blamed import substitution for inefficiency and debt; empirical work finds the terms-of-trade trend real for many commodities but uneven. Historians stress how his central-bank experience in the 1930s Depression shaped his scepticism of free trade for the periphery.",
      "**Seminar use.** Prebisch shows that influential development theory came from the Global South and from inside UN institutions, not only from Western universities."
     ]
    },
    related:["dependency-debates","third-world-project","bretton-woods-institutions","ipe-schools"],
    sources:[{t:"UNCTAD: Raúl Prebisch, former Secretary-General", url:"https://unctad.org/osg/former-secretaries-general-and-officers-charge/raul-prebisch"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"economic-growth", term:"Economic growth", def:"A rise in the output of goods and services in an economy, usually measured as the annual percentage change in real GDP or GDP per person.", codex:"beyond-gdp"},
   {id:"gdp", term:"Gross domestic product (GDP)", def:"The market value of all final goods and services produced within a country in a year; it measures output, not well-being or how output is shared.", codex:"beyond-gdp"},
   {id:"gni", term:"Gross national income (GNI)", def:"GDP plus income residents earn from abroad, minus income sent to non-residents; the World Bank’s income groups use GNI per person.", codex:"beyond-gdp"},
   {id:"capability", term:"Capability (Sen)", def:"A person’s real freedom to achieve valuable beings and doings, such as being healthy or taking part in community life; the central idea of Sen’s capability approach.", codex:"capability-approach"},
   {id:"functioning", term:"Functioning", def:"Something a person actually is or does, such as being nourished, reading or voting; capabilities are the sets of functionings a person could achieve.", codex:"capability-approach"},
   {id:"conversion-factor", term:"Conversion factor", def:"A personal, social or environmental condition (health, norms, laws, infrastructure) that affects how far resources turn into capabilities.", codex:"capability-approach"},
   {id:"human-development", term:"Human development", def:"UNDP’s definition of development as “a process of enlarging people’s choices”, focused on health, knowledge, living standards and freedoms rather than income alone.", codex:"human-development-paradigm"},
   {id:"human-development-report", term:"Human Development Report (HDR)", def:"UNDP’s flagship report, first published in 1990 under Mahbub ul Haq, which introduced the HDI; the 2025 edition is the latest as of November 2026.", codex:"human-development-paradigm"},
   {id:"multidimensional-poverty-index", term:"Multidimensional Poverty Index (MPI)", def:"An index from UNDP and Oxford’s OPHI that counts overlapping deprivations in health, education and living standards; MPI = incidence × intensity.", codex:"poverty-measurement"},
   {id:"poverty-headcount", term:"Poverty headcount", def:"The number or share of people below a poverty line; it says nothing about how far below the line they are.", codex:"poverty-measurement"},
   {id:"societal-poverty-line", term:"Societal poverty line", def:"A World Bank poverty line that rises with a country’s median income, combining absolute and relative ideas of poverty.", codex:"poverty-measurement"},
   {id:"gross-national-happiness", term:"Gross National Happiness", def:"Bhutan’s development philosophy, credited to its fourth king in the 1970s and written into its 2008 constitution, which values well-being over output.", codex:"beyond-gdp"},
   {id:"stiglitz-sen-fitoussi-commission", term:"Stiglitz–Sen–Fitoussi Commission", def:"The Commission on the Measurement of Economic Performance and Social Progress, whose 2009 report recommended measuring well-being and sustainability alongside GDP.", codex:"beyond-gdp"},
   {id:"point-four", term:"Point Four", def:"The fourth point of US President Truman’s inaugural address (20 January 1949), promising technical aid to “underdeveloped areas”; often taken as the start of the development era.", codex:"post-development"},
   {id:"big-push", term:"Big push", def:"The argument (Rosenstein-Rodan, 1943; later Sachs) that coordinated investment across many sectors at once is needed to escape low-income traps.", codex:"aid-effectiveness-debate"},
   {id:"dual-sector-model", term:"Dual-sector (Lewis) model", def:"W. Arthur Lewis’s 1954 model of growth as workers move from a low-productivity traditional sector into a modern capitalist sector.", codex:"dependency-debates"},
   {id:"stages-of-growth", term:"Stages of growth", def:"Rostow’s 1960 model in which societies pass through five stages, from traditional society to high mass consumption.", codex:"theories-global-inequality"},
   {id:"take-off", term:"Take-off", def:"In Rostow’s model, the decisive stage in which investment rises sharply and new leading industries drive self-sustaining growth.", codex:"theories-global-inequality"},
   {id:"prebisch-singer-thesis", term:"Prebisch–Singer thesis", def:"The argument (1949–50) that prices of primary commodities tend to fall over time relative to manufactures, so exporters of raw materials lose out.", codex:"dependency-debates"},
   {id:"terms-of-trade", term:"Terms of trade", def:"The price of a country’s exports relative to the price of its imports: how many imports one unit of exports can buy.", codex:"dependency-debates"},
   {id:"development-of-underdevelopment", term:"Development of underdevelopment", def:"Andre Gunder Frank’s phrase (1966) for the claim that underdevelopment is produced by the same world capitalism that developed the core.", codex:"dependency-debates"},
   {id:"dependent-development", term:"Dependent development", def:"Cardoso and Faletto’s idea (1969) that industrial growth can occur in dependent countries, shaped by alliances of state, local and foreign capital.", codex:"dependency-debates"},
   {id:"development-discourse", term:"Development discourse", def:"In post-development thought, the system of ideas, experts and institutions that defines some societies as lacking and in need of outside intervention (Escobar, 1995).", codex:"post-development"},
   {id:"anti-politics-machine", term:"Anti-politics machine", def:"Ferguson’s term (1990) for development projects that present political questions as technical ones while expanding state bureaucratic power.", codex:"post-development"},
   {id:"buen-vivir", term:"Buen vivir", def:"“Living well”: an Andean-inspired idea of well-being in harmony with community and nature, written into Ecuador’s (2008) and Bolivia’s (2009) constitutions.", codex:"post-development"},
   {id:"late-development", term:"Late development", def:"Gerschenkron’s idea (1962) that countries industrialising later rely more on banks or the state to mobilise capital and catch up.", codex:"developmental-state-debate"},
   {id:"industrial-policy", term:"Industrial policy", def:"Government measures (subsidies, credit, protection, public investment) that deliberately promote particular industries or activities.", codex:"developmental-state-debate"},
   {id:"getting-prices-wrong", term:"Getting prices wrong", def:"Alice Amsden’s phrase for South Korea’s deliberate distortion of prices (cheap credit, protection) to build industries, in return for performance standards.", codex:"developmental-state-debate"},
   {id:"governed-market", term:"Governed market", def:"Robert Wade’s description (1990) of Taiwan, where the state sometimes led and sometimes followed the market in allocating investment.", codex:"developmental-state-debate"},
   {id:"embedded-autonomy", term:"Embedded autonomy", def:"Peter Evans’s term (1995) for a state that combines a coherent, merit-based bureaucracy with close ties to business.", codex:"developmental-state-debate"},
   {id:"predatory-state", term:"Predatory state", def:"In Evans’s typology, a state that extracts resources from society without providing development in return; his example was Mobutu’s Zaire.", codex:"developmental-state-debate"},
   {id:"systemic-vulnerability", term:"Systemic vulnerability", def:"Doner, Ritchie and Slater’s explanation (2005): leaders build developmental states when they face mass pressures, external threats and scarce resources at once.", codex:"developmental-state-debate"},
   {id:"east-asian-miracle", term:"The East Asian Miracle (1993)", def:"A World Bank report on eight high-performing Asian economies (1965–90) that credited mainly sound fundamentals, with some selective interventions.", codex:"developmental-state-debate"},
   {id:"high-performing-asian-economies", term:"High-performing Asian economies (HPAEs)", def:"The World Bank’s 1993 term for Japan, Hong Kong, South Korea, Singapore, Taiwan, Indonesia, Malaysia and Thailand.", codex:"developmental-state-debate"},
   {id:"post-washington-consensus", term:"Post-Washington Consensus", def:"Ideas associated with Joseph Stiglitz from 1998: markets need institutions, regulation and social protection, and development has broader goals than growth.", codex:"washington-consensus-debate"},
   {id:"beijing-consensus", term:"Beijing Consensus", def:"Joshua Cooper Ramo’s 2004 label for China’s gradual, experimental, state-heavy development path, presented as an alternative model; its existence and copyability are debated.", codex:"washington-consensus-debate"},
   {id:"middle-income-trap", term:"Middle-income trap", def:"The pattern in which economies grow to middle income but fail to reach high income; the theme of the World Bank’s World Development Report 2024.", codex:"washington-consensus-debate"},
   {id:"development-assistance-committee", term:"Development Assistance Committee (DAC)", def:"The OECD committee of mainly rich donor governments that sets the rules for counting official development assistance.", codex:"aid-effectiveness-debate"},
   {id:"poverty-trap", term:"Poverty trap", def:"A self-reinforcing situation in which people or countries are too poor to make the investments that would lift them out of poverty.", codex:"aid-effectiveness-debate"},
   {id:"planners-and-searchers", term:"Planners and searchers", def:"Easterly’s contrast (2006) between aid officials who set grand goals and those who find what works through feedback and accountability.", codex:"aid-effectiveness-debate"},
   {id:"aid-dependency", term:"Aid dependency", def:"A situation in which a government relies on aid for a large share of its budget, which critics such as Moyo argue weakens accountability to citizens.", codex:"aid-effectiveness-debate"},
   {id:"tied-aid", term:"Tied aid", def:"Aid that must be spent on goods and services from the donor country, which usually raises costs for the recipient.", codex:"aid-effectiveness-debate"},
   {id:"paris-declaration", term:"Paris Declaration on Aid Effectiveness", def:"The 2005 agreement setting five principles for aid: ownership, alignment, harmonisation, managing for results and mutual accountability.", codex:"aid-effectiveness-debate"},
   {id:"country-ownership", term:"Country ownership", def:"The principle that recipient governments, accountable to their citizens, should set their own development strategies, with donors supporting them.", codex:"aid-effectiveness-debate"},
   {id:"busan-partnership", term:"Busan Partnership", def:"The outcome of the 2011 forum in Busan, South Korea, with four principles for effective development co-operation and voluntary participation by South–South providers.", codex:"aid-effectiveness-debate"},
   {id:"randomised-controlled-trial", term:"Randomised controlled trial (RCT)", def:"An evaluation that assigns a programme by lottery to some units and not others, so that differences in outcomes estimate the programme’s effect.", codex:"development-rcts"},
   {id:"non-dac-donors", term:"Non-DAC providers", def:"Governments that give development finance outside the OECD DAC, such as China, India and several Gulf states, often framed as South–South cooperation.", codex:"aid-effectiveness-debate"},
   {id:"inclusive-institutions", term:"Inclusive institutions", def:"In Acemoglu and Robinson’s terms, rules that spread political power and economic opportunity widely and protect property and contracts for most people.", codex:"institutions-and-development"},
   {id:"extractive-institutions", term:"Extractive institutions", def:"Rules that concentrate power and wealth in a narrow elite, extracting resources from the rest of society.", codex:"institutions-and-development"},
   {id:"critical-juncture", term:"Critical juncture", def:"A moment of upheaval, such as a plague or colonisation, when small institutional differences can send societies down diverging paths.", codex:"institutions-and-development"},
   {id:"geography-hypothesis", term:"Geography hypothesis", def:"The view that climate, disease, soils and location directly shape prosperity, associated in development economics with Jeffrey Sachs.", codex:"institutions-and-development"},
   {id:"culture-hypothesis", term:"Culture hypothesis", def:"The view that shared values and norms, such as trust or attitudes to work, explain differences in prosperity; it needs careful measurement to avoid stereotypes.", codex:"institutions-and-development"},
   {id:"global-inequality", term:"Global inequality", def:"Inequality between countries, within countries, or among all the world’s people treated as one population; each gives a different picture.", codex:"global-inequality-debates"},
   {id:"convergence", term:"Convergence (economic)", def:"The tendency of poorer economies to grow faster than richer ones and so catch up; it was rare historically and has appeared more often since about 2000.", codex:"global-inequality-debates"},
   {id:"elephant-curve", term:"Elephant curve", def:"Lakner and Milanovic’s chart of real income growth by global income percentile, 1988–2008, whose shape resembles an elephant.", codex:"global-inequality-debates"},
   {id:"r-greater-than-g", term:"r > g", def:"Piketty’s shorthand: when the return on capital exceeds economic growth, wealth tends to concentrate unless policy intervenes.", codex:"global-inequality-debates"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u14-q01", lesson:"e4u14-l1", level:1, q:"In Sen’s capability approach, what is a “capability”?", options:[
     {t:"A real freedom to achieve valuable beings and doings, such as being healthy or taking part in community life", ok:true, why:"Right. Capabilities are effective opportunities; functionings are what is actually achieved."},
     {t:"A person’s income and wealth", why:"Those are resources, the means that may or may not turn into capabilities."},
     {t:"A skill learned at school", why:"Skills can be conversion factors, but a capability is a real freedom to be or do something."},
     {t:"A government’s capacity to deliver services", why:"That is state capacity, a different idea."}]},
   {id:"e4u14-q02", lesson:"e4u14-l1", level:2, q:"Kenji and Amara receive the same monthly income. Amara uses a wheelchair and her town has no accessible transport, so she can’t reach work or the clinic. What does the capability approach call the factors that make the difference?", options:[
     {t:"Conversion factors", ok:true, why:"Right. Personal (disability), social and environmental (transport) conditions affect how far the same resources become real freedoms."},
     {t:"Functionings", why:"Functionings are what people actually achieve; the question asks what shapes the gap."},
     {t:"Terms of trade", why:"That is a concept from trade economics."},
     {t:"Instrumental freedoms", why:"Sen’s instrumental freedoms are broad social arrangements, such as political freedoms and protective security; the specific barriers here are conversion factors."}]},
   {id:"e4u14-q03", lesson:"e4u14-l1", level:1, q:"Which three dimensions does the Human Development Index combine?", options:[
     {t:"A long and healthy life, knowledge, and a decent standard of living", ok:true, why:"Right: life expectancy, schooling and GNI per person."},
     {t:"Income, inequality and the environment", why:"Inequality and environmental pressures are handled by companion indices."},
     {t:"Health, democracy and happiness", why:"The HDI does not measure democracy or happiness."},
     {t:"GDP growth, inflation and unemployment", why:"Those are macroeconomic indicators, not the HDI."}]},
   {id:"e4u14-q04", lesson:"e4u14-l1", level:1, q:"As of November 2026, what is the World Bank’s international (extreme) poverty line?", options:[
     {t:"$3.00 a day per person in 2021 PPP dollars", ok:true, why:"Right, since the June 2025 update; it replaced $2.15 in 2017 PPP dollars."},
     {t:"$1.90 a day in 2011 PPP dollars", why:"That line was used from 2015 to 2022."},
     {t:"$2.15 a day at market exchange rates", why:"$2.15 was the previous line, and it was in PPP dollars, not exchange rates."},
     {t:"$8.30 a day", why:"That is the higher line used for upper-middle-income countries."}]},
   {id:"e4u14-q05", lesson:"e4u14-l1", level:2, q:"A survey finds that 40% of people in a region are MPI-poor, and they are deprived on average in 45% of weighted indicators. What is the MPI?", options:[
     {t:"0.18", ok:true, why:"Right: MPI = H × A = 0.40 × 0.45 = 0.18."},
     {t:"0.85", why:"That adds the two numbers; the MPI multiplies them."},
     {t:"0.40", why:"That is only the incidence (H); the MPI adjusts it for intensity."},
     {t:"1.8", why:"Check the decimals: 0.40 × 0.45 = 0.18."}]},
   {id:"e4u14-q06", lesson:"e4u14-l1", level:3, q:"A newspaper says: “The World Bank admits extreme poverty rose by 125 million in 2025.” What is the best correction?", options:[
     {t:"The 2025 change raised the estimate for the same year (2022) because the Bank adopted new price data and a higher $3.00 line; it does not show that poverty rose in 2025", ok:true, why:"Right. The revision changed the measuring stick, not people’s lives."},
     {t:"The figure is correct: a global recession pushed 125 million people into poverty", why:"The jump came from revising the line and price data for the same year."},
     {t:"Poverty can’t be measured, so the figure means nothing", why:"Measures have limits, but the issue here is a specific misreading of a revision."},
     {t:"The World Bank measures poverty at market exchange rates, so currency changes caused it", why:"The line is in PPP dollars."}]},
   {id:"e4u14-q07", lesson:"e4u14-l1", level:1, q:"Who led the team that produced the first Human Development Report in 1990?", options:[
     {t:"Mahbub ul Haq", ok:true, why:"Right, the Pakistani economist working at UNDP, with Amartya Sen among his collaborators."},
     {t:"Raúl Prebisch", why:"Prebisch led ECLA and UNCTAD decades earlier."},
     {t:"Jeffrey Sachs", why:"Sachs is known for *The End of Poverty* (2005) and the Millennium Villages."},
     {t:"Esther Duflo", why:"Duflo is known for randomised trials in development."}]},
   {id:"e4u14-q08", lesson:"e4u14-l1", level:2, q:"What did the UN’s High-Level Expert Group on Beyond GDP propose in its report presented on 7 May 2026?", options:[
     {t:"A dashboard of 31 indicators of equitable, inclusive and sustainable well-being, about half drawn from the SDGs", ok:true, why:"Right. Governments then began consultations and remain divided on whether to add a headline number."},
     {t:"Abolishing GDP statistics", why:"The aim is to complement GDP, not abolish it."},
     {t:"Replacing the HDI with Gross National Happiness", why:"No such proposal was made."},
     {t:"A single global happiness score for every country", why:"The report proposed a dashboard; whether to add a headline number is still debated."}]},
   {id:"e4u14-q09", lesson:"e4u14-l1", level:3, q:"Lucía’s country ranks much higher on GNI per person than on the HDI. Which conclusion is best supported?", options:[
     {t:"Its income is converting less well than usual into health and schooling, so she should look at how income is distributed and how services work", ok:true, why:"Right. A gap between the GNI and HDI ranks points to unusually weak conversion of income into health and education."},
     {t:"The HDI must be wrong, because income determines development", why:"That assumes the conclusion; the HDI exists to show such gaps."},
     {t:"The country is in extreme poverty", why:"Neither ranking measures the extreme poverty headcount."},
     {t:"The country has high multidimensional poverty", why:"Possibly, but the ranking gap alone doesn’t show it; she would need MPI data."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u14-q10", lesson:"e4u14-l2", level:1, q:"What was the subtitle of Rostow’s *The Stages of Economic Growth* (1960)?", options:[
     {t:"A Non-Communist Manifesto", ok:true, why:"Right, signalling its Cold War purpose as an alternative to Marxism."},
     {t:"The Development of Underdevelopment", why:"That was Frank’s 1966 essay title."},
     {t:"Dependency and Development", why:"That is close to Cardoso and Faletto’s title."},
     {t:"The Making and Unmaking of the Third World", why:"That is the subtitle of Escobar’s *Encountering Development* (1995)."}]},
   {id:"e4u14-q11", lesson:"e4u14-l2", level:1, q:"What does the Prebisch–Singer thesis claim?", options:[
     {t:"The prices of primary commodities tend to fall over time relative to manufactures", ok:true, why:"Right, so the terms of trade tend to move against exporters of raw materials."},
     {t:"Free trade always benefits all countries equally", why:"Prebisch and Singer challenged that view."},
     {t:"Aid should be doubled to create a big push", why:"That is closer to Sachs or Rosenstein-Rodan."},
     {t:"Institutions are the main cause of prosperity", why:"That is Acemoglu, Johnson and Robinson."}]},
   {id:"e4u14-q12", lesson:"e4u14-l2", level:2, q:"A country exports copper. Over ten years copper prices fall by a third while the price of imported machinery rises. What has happened to its terms of trade, and which theory predicted this kind of trend?", options:[
     {t:"They have worsened; structuralism (the Prebisch–Singer thesis)", ok:true, why:"Right. Each tonne of copper now buys less machinery."},
     {t:"They have improved; modernisation theory", why:"Falling export prices and rising import prices worsen the terms of trade."},
     {t:"They are unchanged; world-systems theory", why:"Both price movements change the ratio."},
     {t:"They have worsened; post-development", why:"The terms are worse, but the prediction comes from structuralism, not post-development."}]},
   {id:"e4u14-q13", lesson:"e4u14-l2", level:1, q:"Which book studied a development project in Lesotho and called development an “anti-politics machine”?", options:[
     {t:"James Ferguson, *The Anti-Politics Machine* (1990)", ok:true, why:"Right. The project failed in its aims but expanded state bureaucratic power."},
     {t:"Arturo Escobar, *Encountering Development* (1995)", why:"Escobar’s main case was Colombia."},
     {t:"Walter Rodney, *How Europe Underdeveloped Africa* (1972)", why:"Rodney wrote a dependency history of Africa."},
     {t:"Dambisa Moyo, *Dead Aid* (2009)", why:"Moyo criticised aid to African governments, but not with this concept."}]},
   {id:"e4u14-q14", lesson:"e4u14-l2", level:2, q:"How does Cardoso and Faletto’s “dependent development” differ from Frank’s “development of underdevelopment”?", options:[
     {t:"It allows that industrial growth can happen in dependent countries, shaped by local class alliances and foreign capital", ok:true, why:"Right. Frank stressed blocked development; Cardoso and Faletto stressed growth on dependent terms."},
     {t:"It denies that colonialism mattered", why:"They kept the historical-structural view."},
     {t:"It argues that poor countries should copy Rostow’s stages", why:"That is modernisation theory."},
     {t:"It was based on studies of East Asia", why:"Their work was on Latin America."}]},
   {id:"e4u14-q15", lesson:"e4u14-l2", level:3, q:"Mei is writing about a hydropower project that was meant to supply villages with electricity but mainly expanded the national power agency’s control of a region, while officials described local protests as “technical delays”. Which concept fits best?", options:[
     {t:"The anti-politics machine (Ferguson)", ok:true, why:"Right. A project that recasts political conflict as technical problems and extends state power is Ferguson’s anti-politics machine."},
     {t:"Take-off (Rostow)", why:"Take-off describes rapid investment-led growth, not this political effect."},
     {t:"The Prebisch–Singer thesis", why:"That is about commodity prices."},
     {t:"Embedded autonomy", why:"That describes effective developmental states, not depoliticisation."}]},
   {id:"e4u14-q16", lesson:"e4u14-l2", level:2, q:"Which is a standard criticism of post-development?", options:[
     {t:"It romanticises the local and offers little to people who want health care, schooling and electricity", ok:true, why:"Right: the critique of Kiely (1999) and Nederveen Pieterse (2000)."},
     {t:"It relies too heavily on randomised trials", why:"Post-development is critical and qualitative; it doesn’t use RCTs."},
     {t:"It ignores discourse and power", why:"Discourse and power are its central themes."},
     {t:"It treats GDP growth as the only goal", why:"It rejects that view."}]},
   {id:"e4u14-q17", lesson:"e4u14-l2", level:1, q:"Which concept did W. Arthur Lewis contribute to development economics in 1954?", options:[
     {t:"A dual economy in which workers move from a traditional sector into a modern one", ok:true, why:"Right. Lewis shared the 1979 economics Nobel prize."},
     {t:"Embedded autonomy", why:"That is Peter Evans (1995)."},
     {t:"The capability approach", why:"That is Amartya Sen."},
     {t:"The elephant curve", why:"That is Lakner and Milanovic (2016)."}]},
   {id:"e4u14-q18", lesson:"e4u14-l2", level:3, q:"Tomás argues: “South Korea’s rise disproves every version of dependency theory.” What is the most accurate response?", options:[
     {t:"It sits badly with the strong claim that ties to the core block development, but Cardoso and Faletto’s version allowed growth on dependent terms, and world-systems theory allows mobility", ok:true, why:"Right. A good seminar answer distinguishes versions of a theory before declaring it refuted."},
     {t:"He is right: dependency theory has been abandoned by all scholars", why:"Dependency ideas still inform debates on value chains, commodities and debt."},
     {t:"Korea is not relevant because it was never a colony", why:"Korea was a Japanese colony from 1910 to 1945."},
     {t:"Korea grew by delinking from world markets", why:"It grew through exports to world markets."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u14-q19", lesson:"e4u14-l3", level:1, q:"Who argued that late developers need bigger roles for banks or the state, in *Economic Backwardness in Historical Perspective* (1962)?", options:[
     {t:"Alexander Gerschenkron", ok:true, why:"Right: the idea of late development."},
     {t:"Walt Rostow", why:"Rostow proposed universal stages of growth."},
     {t:"John Williamson", why:"Williamson named the Washington Consensus in 1989."},
     {t:"Chalmers Johnson", why:"Johnson coined “developmental state” for Japan in 1982."}]},
   {id:"e4u14-q20", lesson:"e4u14-l3", level:2, q:"In South Korea, a business group received cheap loans to build a shipyard but lost them when it failed to meet export targets. Which idea does this illustrate?", options:[
     {t:"Amsden’s reciprocity: subsidies in exchange for performance standards", ok:true, why:"Right. Discipline tied to support is the core of Amsden’s account of Korea."},
     {t:"Tied aid", why:"Tied aid is donor aid that must be spent in the donor country."},
     {t:"The Washington Consensus", why:"Williamson’s list did not include targeted subsidies."},
     {t:"The anti-politics machine", why:"That is Ferguson’s concept about development projects."}]},
   {id:"e4u14-q21", lesson:"e4u14-l3", level:1, q:"Which economies did the World Bank’s *East Asian Miracle* (1993) study?", options:[
     {t:"Japan, Hong Kong, South Korea, Singapore, Taiwan, Indonesia, Malaysia and Thailand", ok:true, why:"Right: eight high-performing Asian economies, 1965–1990."},
     {t:"China, India, Japan and South Korea", why:"China and India were not among the eight HPAEs."},
     {t:"Only the four tigers", why:"It also included Japan and three Southeast Asian economies."},
     {t:"All members of ASEAN", why:"It covered eight economies, three of them in Southeast Asia."}]},
   {id:"e4u14-q22", lesson:"e4u14-l3", level:2, q:"Peter Evans’s idea of “embedded autonomy” describes a state that…", options:[
     {t:"has a coherent, merit-based bureaucracy and also close ties to business", ok:true, why:"Right. Autonomy without ties is aloof; ties without autonomy invite capture."},
     {t:"is cut off from all social groups", why:"That would be autonomy without embeddedness, which Evans argued is ineffective."},
     {t:"is captured by business groups", why:"That is embeddedness without autonomy."},
     {t:"extracts resources without developing the economy", why:"That is his predatory state."}]},
   {id:"e4u14-q23", lesson:"e4u14-l3", level:3, q:"Fatima compares two Southeast Asian countries with large natural resources and few external threats, and finds weaker developmental institutions than in Taiwan. Which explanation fits best?", options:[
     {t:"Doner, Ritchie and Slater’s systemic vulnerability: without mass pressure, security threats and scarce resources together, elites had less reason to build capable institutions", ok:true, why:"Right. Their 2005 article explains exactly this Northeast–Southeast Asian contrast."},
     {t:"Rostow’s stages: they had not reached take-off", why:"Stages don’t explain institutional quality."},
     {t:"Dependency: ties to the core blocked them", why:"Taiwan was at least as tied to the core."},
     {t:"Cultural differences in work ethic", why:"The lesson warns against untested cultural claims; the systemic vulnerability argument is about political conditions."}]},
   {id:"e4u14-q24", lesson:"e4u14-l3", level:1, q:"In Williamson’s original Washington Consensus, which reform was NOT on the list?", options:[
     {t:"Full liberalisation of short-term capital flows", ok:true, why:"Right. He listed openness to foreign direct investment only."},
     {t:"Fiscal discipline", why:"Item 1 on the list."},
     {t:"Privatisation", why:"Item 8 on the list."},
     {t:"Trade liberalisation", why:"Item 6 on the list."}]},
   {id:"e4u14-q25", lesson:"e4u14-l3", level:2, q:"What is Rodrik’s “one economics, many recipes” argument?", options:[
     {t:"Sound economic principles can be met through very different policies, so countries should diagnose their own binding constraints", ok:true, why:"Right. It rejects a single blueprint while keeping common principles."},
     {t:"All countries should follow the same ten reforms", why:"That is closer to how the Washington Consensus was often applied."},
     {t:"Economics is irrelevant to development", why:"Rodrik says the opposite: the principles matter, the policies vary."},
     {t:"China’s model should be copied everywhere", why:"Rodrik is sceptical of any universal model."}]},
   {id:"e4u14-q26", lesson:"e4u14-l3", level:2, q:"How did Robert Wade read *The East Asian Miracle* in 1996?", options:[
     {t:"As “paradigm maintenance”: it acknowledged industrial policy, under Japanese pressure, but kept the market-friendly framework", ok:true, why:"Right. Wade analysed the politics behind the report."},
     {t:"As proof that free markets alone explain East Asia", why:"Wade argued for a governed market, not free markets alone."},
     {t:"As a study of China’s reforms", why:"China was not among the eight economies studied."},
     {t:"As a critique of Japan’s aid", why:"His argument was about the World Bank’s framework."}]},
   {id:"e4u14-q27", lesson:"e4u14-l3", level:3, q:"Oluwaseun’s government plans subsidies for a new electronics industry. Drawing on the developmental state literature, which design is most likely to win scholars’ approval?", options:[
     {t:"Support tied to clear performance targets, such as exports or productivity, run by a capable agency that can withdraw support", ok:true, why:"Right. Amsden and Evans stress discipline and bureaucratic capacity, not subsidies alone."},
     {t:"Open-ended subsidies to whichever firms are politically connected", why:"That risks the capture Evans and others warn against."},
     {t:"Permanent protection from all imports", why:"East Asian states pushed firms to compete in export markets."},
     {t:"No conditions, because markets will discipline firms automatically", why:"The debate is about how states create discipline when protection removes market pressure."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u14-q28", lesson:"e4u14-l4", level:1, q:"According to the OECD’s preliminary data, how much official development assistance did DAC members provide in 2025?", options:[
     {t:"US$174.3 billion, 23.1% less than in 2024", ok:true, why:"Right: the largest annual contraction on record."},
     {t:"US$174.3 billion, 23.1% more than in 2024", why:"It was a fall, not a rise."},
     {t:"US$2.3 trillion", why:"That is far above any ODA total."},
     {t:"US$29.1 billion", why:"That is Germany’s ODA, the largest single DAC provider in 2025."}]},
   {id:"e4u14-q29", lesson:"e4u14-l4", level:1, q:"Which author contrasted aid “planners” with “searchers”?", options:[
     {t:"William Easterly", ok:true, why:"Right, in *The White Man’s Burden* (2006)."},
     {t:"Jeffrey Sachs", why:"Sachs argued for a planned big push."},
     {t:"Dambisa Moyo", why:"Moyo argued for phasing out aid to African governments."},
     {t:"Esther Duflo", why:"Duflo is known for randomised trials."}]},
   {id:"e4u14-q30", lesson:"e4u14-l4", level:1, q:"Which of these is one of the five principles of the Paris Declaration (2005)?", options:[
     {t:"Harmonisation", ok:true, why:"Right. The five are ownership, alignment, harmonisation, managing for results and mutual accountability."},
     {t:"Tied procurement", why:"The aid effectiveness agenda sought to reduce tied aid."},
     {t:"Structural adjustment", why:"That was 1980s–90s lending conditionality, not a Paris principle."},
     {t:"Non-interference", why:"That is a principle of South–South cooperation, not of the Paris Declaration."}]},
   {id:"e4u14-q31", lesson:"e4u14-l4", level:2, q:"A ministry of health in a low-income country hosts 40 donor missions a year, each with its own reporting rules. Which Paris principle are the donors failing most clearly?", options:[
     {t:"Harmonisation", ok:true, why:"Right. Donors coordinating and simplifying their procedures is harmonisation."},
     {t:"Managing for results", why:"Possibly too, but the problem described is duplication among donors."},
     {t:"Ownership", why:"Ownership is about who sets the strategy."},
     {t:"Mutual accountability", why:"That is about donors and recipients holding each other to commitments."}]},
   {id:"e4u14-q32", lesson:"e4u14-l4", level:1, q:"For what did Banerjee, Duflo and Kremer receive the 2019 economics Nobel prize?", options:[
     {t:"Their experimental approach to alleviating global poverty", ok:true, why:"Right: the prize motivation."},
     {t:"Studies of how institutions are formed and affect prosperity", why:"That was the 2024 prize, to Acemoglu, Johnson and Robinson."},
     {t:"Contributions to welfare economics", why:"That was Amartya Sen’s 1998 prize."},
     {t:"Analysis of consumption, poverty and welfare", why:"That was Angus Deaton’s 2015 prize."}]},
   {id:"e4u14-q33", lesson:"e4u14-l4", level:2, q:"In a trial, 60% of households in randomly chosen treatment villages used clean cookstoves, against 45% in control villages. What is the estimated effect?", options:[
     {t:"15 percentage points", ok:true, why:"Right: 60 − 45 = 15 percentage points, attributable to the programme in this setting because of random assignment."},
     {t:"60%", why:"That is the treatment group’s rate, not the effect."},
     {t:"33%", why:"That is the relative increase (15 ÷ 45), which should be labelled as such."},
     {t:"105 percentage points", why:"That adds the two groups; the effect is the difference."}]},
   {id:"e4u14-q34", lesson:"e4u14-l4", level:3, q:"A minister wants to copy a programme that worked in a well-run NGO trial in another country. Which question, raised by critics such as Deaton and Cartwright, should come first?", options:[
     {t:"Why did it work there, and do the conditions that made it work exist here, at scale and run by government?", ok:true, why:"Right. That is the external-validity problem: the trial shows an effect in one setting, not everywhere."},
     {t:"Was the original trial randomised?", why:"It was; the question is whether the result travels."},
     {t:"Can we skip evaluation because the trial proved it works?", why:"Critics argue for local testing, especially at scale."},
     {t:"Did the trial use enough decimal places?", why:"Precision isn’t the main problem; context is."}]},
   {id:"e4u14-q35", lesson:"e4u14-l4", level:2, q:"What did the Busan Partnership (2011) say about South–South providers such as China, India and Brazil?", options:[
     {t:"Its principles were a reference for them on a voluntary basis", ok:true, why:"Right. This brought them into the framework without binding them to DAC-style commitments."},
     {t:"They were required to join the DAC", why:"No such requirement exists."},
     {t:"They were excluded from the forum", why:"They took part; the outcome document addressed them."},
     {t:"Their aid would be counted as ODA from 2012", why:"Busan did not change ODA rules."}]},
   {id:"e4u14-q36", lesson:"e4u14-l4", level:3, q:"Ana must present the debate on China’s development finance neutrally in a seminar. Which framing does that best?", options:[
     {t:"Recipients often value its speed, infrastructure and fewer policy conditions; critics point to limited transparency and loans tied to Chinese firms; researchers stress comparing it with DAC donors on the same measures", ok:true, why:"Right. Attributed positions plus a methodological point, with no side taken."},
     {t:"China’s finance is a debt trap designed to seize assets", why:"That is one contested claim; Unit 15 shows the evidence is disputed. Presenting it as fact is not neutral."},
     {t:"China’s finance is purely generous and has no strategic goals", why:"That is also one-sided; all providers pursue interests."},
     {t:"There is no information about China’s finance at all", why:"Researchers such as AidData estimate it from project records."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u14-q37", lesson:"e4u14-l5", level:1, q:"What did Acemoglu, Johnson and Robinson use to separate the effect of institutions from the effect of income in their 2001 article?", options:[
     {t:"Historical death rates of European settlers in the colonies", ok:true, why:"Right. Settler mortality shaped the type of colony and its institutions, but should not affect income today directly, they argued."},
     {t:"Randomised trials in former colonies", why:"Institutions can’t be randomised; they used history."},
     {t:"Surveys of business confidence", why:"They used historical data on settler mortality."},
     {t:"The HDI", why:"The outcome was income per person, and the HDI didn’t exist for the colonial period."}]},
   {id:"e4u14-q38", lesson:"e4u14-l5", level:1, q:"For what did Acemoglu, Johnson and Robinson receive the 2024 economics Nobel prize?", options:[
     {t:"Studies of how institutions are formed and affect prosperity", ok:true, why:"Right: the prize motivation."},
     {t:"Their experimental approach to alleviating poverty", why:"That was the 2019 prize."},
     {t:"Measuring global poverty", why:"Not the prize motivation."},
     {t:"Theories of international trade", why:"Not the prize motivation."}]},
   {id:"e4u14-q39", lesson:"e4u14-l5", level:2, q:"Which critique argues that settlers brought skills and schooling as well as institutions, so settler mortality can’t isolate the effect of institutions?", options:[
     {t:"The human capital critique of Glaeser and co-authors (2004)", ok:true, why:"Right. If settlers carried human capital, the same historical variable affects both."},
     {t:"Albouy’s data critique (2012)", why:"Albouy questioned how the mortality data were assembled."},
     {t:"Sachs’s geography critique", why:"Sachs stressed disease, soils and location."},
     {t:"Piketty’s r > g", why:"That is about wealth concentration within countries."}]},
   {id:"e4u14-q40", lesson:"e4u14-l5", level:2, q:"On the elephant curve for 1988–2008, which group is at the dip near the 80th global percentile?", options:[
     {t:"Many in rich countries’ lower middle class, together with some weak performers", ok:true, why:"Right, though Corlett (2016) warns that the point mixes different countries."},
     {t:"The global top 1%", why:"They are at the rising trunk on the far right."},
     {t:"The global middle in Asia", why:"They are at the high point in the middle."},
     {t:"The world’s poorest", why:"They are at the far left."}]},
   {id:"e4u14-q41", lesson:"e4u14-l5", level:1, q:"In Piketty’s shorthand r > g, what are r and g?", options:[
     {t:"The return on capital and the growth rate of the economy", ok:true, why:"Right. When r exceeds g, inherited wealth tends to grow faster than incomes from work."},
     {t:"The rate of inflation and government spending", why:"Neither is what the symbols stand for."},
     {t:"Remittances and grants", why:"No; r is the return on capital."},
     {t:"The poverty rate and the Gini coefficient", why:"Those are inequality and poverty measures, not Piketty’s r and g."}]},
   {id:"e4u14-q42", lesson:"e4u14-l5", level:3, q:"Dmitri writes: “Confucian culture explains East Asia’s growth.” Which reply best reflects the lesson?", options:[
     {t:"Weber once used Confucianism to explain stagnation; a cultural claim needs a measured, changeable trait and a mechanism, tested against institutional and policy explanations", ok:true, why:"Right. When the same culture explains opposite outcomes, it may be explaining neither."},
     {t:"Culture can never matter for development", why:"Some cultural traits, such as trust, have been measured and linked to outcomes; the issue is how to study them."},
     {t:"He is right because the region grew fast", why:"Correlation with growth doesn’t establish a cultural cause."},
     {t:"Culture is fixed by geography", why:"That conflates two different explanations."}]},
   {id:"e4u14-q43", lesson:"e4u14-l5", level:2, q:"Using the rule of 70, about how long does it take income per person to double at 7% growth a year?", options:[
     {t:"About 10 years", ok:true, why:"Right: 70 ÷ 7 = 10."},
     {t:"About 7 years", why:"That divides 70 by 10, not by 7."},
     {t:"About 14 years", why:"That is 100 ÷ 7, which ignores compounding."},
     {t:"About 49 years", why:"That multiplies 7 by 7."}]},
   {id:"e4u14-q44", lesson:"e4u14-l5", level:3, q:"Priya argues in a seminar that Botswana proves institutions matter more than geography. What would make her argument strongest?", options:[
     {t:"Showing the mechanism (how its institutions shaped decisions about diamond revenue), comparing with a similar neighbour, and answering the resource and inequality counter-arguments", ok:true, why:"Right: outcome, mechanism, comparison and counter-argument, the lesson’s five steps."},
     {t:"Noting that Botswana is landlocked and stopping there", why:"That only rules out one simple geographic story."},
     {t:"Citing the 2024 Nobel prize as proof", why:"A prize recognises research; it doesn’t settle a specific case."},
     {t:"Arguing that Botswana’s people are naturally more honest", why:"An untestable national-character claim, which the lesson warns against."}]},
   {id:"e4u14-q45", lesson:"e4u14-l5", level:1, q:"Which statement about global inequality is most accurate?", options:[
     {t:"For most of the last two centuries the gap between countries widened, but since about 2000 many poorer countries have grown faster than rich ones", ok:true, why:"Right: Pritchett’s “divergence, big time”, followed by more convergence in recent decades."},
     {t:"Inequality between countries has fallen steadily since 1800", why:"Between-country gaps grew for most of that period."},
     {t:"Global inequality means only inequality within countries", why:"It can mean between countries, within them, or among all the world’s people."},
     {t:"The elephant curve shows that everyone gained equally from globalisation", why:"It shows very unequal gains across the distribution."}]}
  ]
});
