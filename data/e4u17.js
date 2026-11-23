/* International Studies · Unit 18 · The SDGs and the politics of global development */
ICA.addUnit({
  id:"e4u17", track:"e4", n:18, title:"The SDGs and the politics of global development", icon:"🎯",
  blurb:"This is the last unit of the sustainable development cluster. It covers how the world moved from the Millennium Development Goals to the 2030 Agenda, and who shaped it. It shows how progress is measured, reviewed and localized, and what the latest UN and independent reports say. It looks at gender and development, from WID to GAD, with empowerment, unpaid care and the microfinance evidence. It treats food, water and health as development issues. Last, it shows how development work and research are done, from logframes and evaluation to participation, ethics and the policy brief.",
  goals:[
    "Explain how the MDGs were made, how the SDGs were negotiated, what changed between them, and the main critiques of global goal-setting",
    "Read SDG progress figures critically. Look at targets, indicators, data gaps and composite indices. Explain how the HLPF and the voluntary national and local reviews check progress",
    "Trace gender and development thinking from WID to GAD, use Kabeer’s framework of empowerment, and weigh the evidence on unpaid care and microfinance",
    "Analyze famine, food security, water and health as development problems. Use Sen’s entitlement approach. Follow the debates over the Green Revolution and the humanitarian–development nexus",
    "Describe the project cycle, logframes and the OECD-DAC evaluation criteria. Discuss participation, localization and the ethics of working in other countries",
    "Link the four units of the sustainable development cluster in a seminar argument or a development policy brief"
  ],
  read:[
    {book:"sdgr26", where:"Foreword, Overview and the progress chart, then the goal chapters that match each lesson", note:"The UN’s own annual assessment, released on 7 July 2026. Free, short chapters with charts."},
    {book:"sdr26", where:"Executive Summary and Part 2 “The SDG Index and Dashboards”", note:"An independent assessment by the UN Sustainable Development Solutions Network (SDSN). Read it next to the UN report and compare the methods."},
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"A short, free background chapter. The lessons go further."},
    {book:"ospol", where:"Section 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"A gentle introduction to the same debates from a political science textbook."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u17-l1", title:"From the MDGs to the SDGs: how the 2030 Agenda was made", minutes:60,
   hook:{q:"The UN working group that drafted the Sustainable Development Goals had 30 seats. How many countries took part as members?", options:["30, one per seat","54","70","All 193 UN members"], answer:2, reveal:"**Seventy.** Countries shared most of the 30 seats in pairs, trios and one group of four. This creative fix let far more governments into a small room. The Open Working Group agreed its proposal of **17 goals and 169 targets** on 19 July 2014, after an all-night session. This lesson follows how the goals were made and what changed from the Millennium Development Goals. It also asks why some scholars think the result is too big to steer anything."},
   goals:[
     "Explain why governments and UN agencies set global goals, and what “governing by goals” means",
     "Describe how the MDGs were made, what they achieved by 2015 and why their record is debated",
     "Trace the SDG negotiations from Rio+20 through the Open Working Group to the 2030 Agenda",
     "Compare the MDGs and SDGs on scope, universality, integration and “leave no one behind”",
     "Weigh the main critiques of the SDGs and the replies of their defenders"
   ],
   learn:[
    {h:"Governing by goals", body:[
      {lead:"A treaty binds governments; a goal only names a destination. Why would anyone bother?"},
      "The IR primer introduced the [[millennium-development-goals|Millennium Development Goals]] and the [[sustainable-development-goals|Sustainable Development Goals]] in a few lines (see {{development-ir}}). This lesson asks the seminar questions: who wrote them, how, and with what effects.",
      "Global goals are a form of governance without law. They are not enforced by any court. Instead they work in three ways. They **set the agenda** (what counts as a development problem). They **create numbers** that let people compare countries. And they **mobilize money and attention**. Scholars call this “governing by goals”.",
      "Sakiko Fukuda-Parr and David Hulme (“International Norm Dynamics and the ‘End of Poverty’”, *Global Governance*, 2011) read the MDGs through Finnemore and Sikkink’s [[norm-life-cycle|norm life cycle]] (Unit 2). In their reading, ending poverty became a global norm, and the MDGs were the moment it “cascaded” into donors’ and governments’ plans. The numbers, they argue, helped it stick.",
      {key:"Goals have no legal force. Their power is to frame problems, set yardsticks and steer money, which is exactly why their wording is fought over."}
    ]},
    {h:"The MDGs: made in a small room", body:[
      "At the Millennium Summit, the General Assembly adopted the **Millennium Declaration** (8 September 2000). From it, a small group of officials drew up eight goals with numerical targets. They came from the UN Secretariat, UN agencies, the World Bank, the IMF and the OECD. Most targets were for 2015, measured against a 1990 baseline. Several came from targets the OECD’s donor committee had set in 1996.",
      "The eight goals covered poverty and hunger, primary schooling, gender equality, and child and maternal mortality. They also covered HIV, malaria and other diseases, the environment, and a “global partnership” for aid, trade and debt. They were short, countable and easy to put on a poster.",
      "The UN’s final *Millennium Development Goals Report 2015* recorded large gains. The number of people in extreme poverty fell from **1.9 billion in 1990 to 836 million in 2015**. The share of people in developing regions living in extreme poverty fell from **47% to 14%**. Under-five mortality fell from **90 to 43 deaths per 1,000 live births**. The report also said progress had been “uneven across regions and countries”.",
      "Three debates surround that record:",
      {list:[
        "**Attribution.** Much of the fall in poverty came from growth in China and India, driven by policies that owed little to the MDGs. Did the goals cause progress, or count it? (This is the [[attribution-problem|attribution problem]] from Unit 8.)",
        "**Fairness.** William Easterly (“How the Millennium Development Goals are Unfair to Africa”, *World Development*, 2009) argued that the targets were framed as proportional cuts from 1990. In his view, this made many African countries look like failures even when they improved fast, because they started from worse positions (higher child mortality, deeper poverty).",
        "**Narrowness.** Critics, including many feminist scholars, said the goals left out inequality, human rights, jobs and governance. They also said the goals treated development as something rich countries fund for poor ones."
      ]},
      {ex:"**Task.** Test Easterly’s fairness argument with two invented countries and MDG target 4.A, which asked for a cut of two thirds in the under-five mortality rate between 1990 and 2015.\n\n1. **First I write down the starting points**, because a proportional target depends on them. Norland: 180 deaths per 1,000 live births in 1990. Westmark: 30.\n2. **Then I work out each target.** Two thirds off 180 leaves 60; two thirds off 30 leaves 10.\n3. **Next I compare the 2015 results.** Norland reached 105, a fall of 75 deaths per 1,000 (42%). Westmark reached 10, a fall of 20 (67%).\n4. **I check the yardstick itself.** Meeting the target needed a fall of about 4.3% a year for 25 years. Norland managed about 2.1% a year; Westmark about 4.3%.\n5. **Finally I say what the numbers show and what they don’t.** Norland saved far more lives per 1,000 births, yet it is scored “off track”.\n\n**Finished paragraph:** “A proportional target rewards countries that start from low levels. In this example, Norland cut child deaths by 75 per 1,000 births but missed the target, while Westmark cut them by 20 and met it. This supports Easterly’s (2009) claim that the MDG design made many African countries look like failures. It does not show that the target caused worse policy, only that it judged progress unevenly.”\n\n**Common mistake:** reading “off track” as “did not improve”. Always check the absolute change as well as the percentage.", label:"Worked example: is a proportional target fair?"}
    ]},
    {h:"Negotiating the SDGs", body:[
      "The successor process was very different. At the Rio+20 conference (June 2012), governments agreed to develop **sustainable development goals**. Colombia and Guatemala had first pushed the idea. Governments gave the job to an [[open-working-group|Open Working Group]] of the General Assembly.",
      "Its membership was set by General Assembly decision 67/555 (22 January 2013). The five regional groups divided **30 seats among 70 countries**. Single countries held 6 seats, pairs held 9 and trios (often called “troikas”) held 14. Four North African states shared the last one. The co-chairs were the ambassadors of Kenya (Macharia Kamau) and Hungary (Csaba Kőrösi). Sessions were open to other states and to civil society.",
      "Other processes ran around it. A High-level Panel of Eminent Persons, co-chaired by the leaders of Indonesia, Liberia and the United Kingdom, reported in 2013. There were also UN-led national and thematic consultations, and an online global survey. The OWG adopted its proposal by acclamation on **19 July 2014**: 17 goals and 169 targets, 62 of them on the [[means-of-implementation|means of implementation]] (money, technology, trade, capacity).",
      "As the *Earth Negotiations Bulletin* reported, the hardest fights were over four issues. The first was over Goal 16 on peaceful societies and institutions, which some governments thought did not belong in a development agenda. The second was over how far [[cbdr-rc|common but differentiated responsibilities]] should apply beyond climate. The third was over where to put the means of implementation. The fourth was over sexual and reproductive rights, settled by a compromise in target 5.6.",
      "After another year of talks, all UN members adopted resolution 70/1, *Transforming our world: the 2030 Agenda for Sustainable Development*, on **25 September 2015**. Kamau, Pamela Chasek and David O’Connor tell the inside story in *Transforming Multilateral Diplomacy* (2018).",
      {fig:'<svg viewBox="0 0 340 420"><path class="d-ink" d="M70,24 V398" stroke-width="2"/><circle class="d-soft" cx="70" cy="30" r="8" stroke-width="2"/><text x="54" y="35" text-anchor="end">2000</text><text x="88" y="30">Millennium Declaration</text><text class="s" x="88" y="48">8 MDGs, mostly for 2015</text><circle class="d-soft" cx="70" cy="90" r="8" stroke-width="2"/><text x="54" y="95" text-anchor="end">2012</text><text x="88" y="90">Rio+20 conference</text><text class="s" x="88" y="108">launches an SDG process</text><circle class="d-gold" cx="70" cy="150" r="8" stroke-width="2"/><text x="54" y="155" text-anchor="end">2013</text><text x="88" y="150">Open Working Group</text><text class="s" x="88" y="168">30 seats shared by 70 countries</text><circle class="d-gold" cx="70" cy="210" r="8" stroke-width="2"/><text x="54" y="215" text-anchor="end">2014</text><text x="88" y="210">OWG proposal (July)</text><text class="s" x="88" y="228">17 goals, 169 targets</text><circle class="d-sage" cx="70" cy="270" r="8" stroke-width="2"/><text x="54" y="275" text-anchor="end">2015</text><text x="88" y="270">2030 Agenda adopted</text><text class="s" x="88" y="288">25 September, all UN members</text><circle class="d-sage" cx="70" cy="330" r="8" stroke-width="2"/><text x="54" y="335" text-anchor="end">2017</text><text x="88" y="330">Indicator framework</text><text class="s" x="88" y="348">adopted by the General Assembly</text><circle class="d-rose" cx="70" cy="390" r="8" stroke-width="2"/><text x="54" y="395" text-anchor="end">2030</text><text x="88" y="390">Deadline</text><text class="s" x="88" y="408">debate on what comes next</text></svg>', alt:"A vertical timeline. 2000: Millennium Declaration, eight MDGs mostly for 2015. 2012: Rio+20 conference launches an SDG process. 2013: Open Working Group, 30 seats shared by 70 countries. 2014: the OWG proposal in July, 17 goals and 169 targets. 2015: all UN members adopt the 2030 Agenda on 25 September. 2017: the General Assembly adopts the indicator framework. 2030: the deadline, with debate on what comes next.", cap:"Fifteen years from a short list drafted by officials to a long agenda negotiated by governments."}
    ]},
    {h:"What changed: universality, integration, leaving no one behind", body:[
      {table:[
        ["","MDGs (2000–2015)","SDGs (2015–2030)"],
        ["Made by","Mainly officials of the UN, the World Bank, the IMF and the OECD","Member states in an open working group, with wide consultation"],
        ["Scope","8 goals, mainly social","17 goals and 169 targets: social, economic, environmental, institutional"],
        ["Who must act","Developing countries, with donor aid","Every country: [[universality-sdgs|universality]]"],
        ["Inequality","Averages; no inequality goal","Goal 10 on inequality and the pledge to [[leave-no-one-behind|leave no one behind]]"]
      ]},
      "The preamble groups the agenda under [[five-ps|five Ps]]: people, planet, prosperity, peace and partnership. It calls the goals “integrated and indivisible”: progress on one depends on others, a feature called [[sdg-integration|integration]]. Måns Nilsson, Dave Griggs and Martin Visbeck (*Nature*, 2016) proposed a seven-point scale to map such links, from **+3 “indivisible”** through **0 “consistent”** to **−3 “canceling”**.",
      "The 2015 agenda came in a package. It included the Sendai Framework for disaster risk reduction (March) and the Addis Ababa Action Agenda on financing (July; see {{financing-for-development}} in Unit 16). It also included the Paris Agreement (December; see {{unfccc-regime}} in Unit 17). Fukuda-Parr (2016) argued that the shift was political as well as bigger. In her view, it moved from an aid agenda that donors steered to a universal agenda that developing countries had shaped."
    ]},
    {h:"Too many goals? The critiques", body:[
      "The SDGs drew criticism from several directions, and each critic wanted something different:",
      {list:[
        "**Too many to prioritize.** *The Economist* called them “The 169 commandments” (28 March 2015). The Copenhagen Consensus Center, led by Bjørn Lomborg, used cost–benefit studies to argue for a short list of the best-value targets.",
        "**Hard to measure.** Many targets lacked agreed indicators or data in 2015 (Lesson 2), and vague wording such as “substantially reduce” makes success hard to judge.",
        "**Growth versus ecology.** Target 8.1 asks for at least 7% annual GDP growth in the least developed countries, while other goals ask for less resource use. Jason Hickel (“The contradiction of the sustainable development goals”, *Sustainable Development*, 2019) argued that the goals cannot all be met without abandoning growth as a target. Supporters of [[green-growth|green growth]] reply that growth can be decoupled from environmental damage. Unit 17 covers the [[degrowth]] debate.",
        "**Voluntary and easy to claim.** Nothing obliges anyone to act, and firms and governments can attach SDG logos to business as usual, sometimes called [[sdg-washing|SDG-washing]]."
      ]},
      "Defenders answer that the length is the price of legitimacy. In their view, 193 states wrote the list together, so they own it in a way they never owned the MDGs. They add that integration is the point, since poverty, climate and institutions really are linked. A good seminar answer separates the critiques. Some attack the **content** (growth), some the **form** (too many, vague), some the **politics** (who decides, who pays).",
      {terms:["open-working-group","agenda-2030","means-of-implementation","universality-sdgs","leave-no-one-behind","five-ps","sdg-integration","sdg-washing"]}
    ]},
    {h:"Worked example: one target, two readings", body:[
      {ex:"Target 8.1: “Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 percent gross domestic product growth per annum in the least developed countries.”\n\n• **Reading as reinforcing (+2):** growth raises tax revenue for schools and clinics (Goals 3 and 4) and jobs that reduce poverty (Goal 1).\n• **Reading as constraining (−1) or worse:** growth without new technology raises emissions and material use, which works against Goals 12 and 13.\n• **What decides it:** the kind of growth (energy mix, who gains). That is a policy choice and a question for evidence, not a matter of definition.", label:"Worked example"},
      "This is the habit graduate seminars expect. Do not ask whether the SDGs are good or bad in general. Ask how a particular target interacts with others in a particular place, and what evidence would settle it.",
      {h:"Common misconceptions"},
      {list:[
        "“The SDGs are a treaty.” They are a General Assembly resolution: politically weighty, legally non-binding.",
        "“The SDGs are for poor countries.” They are universal; rich countries report on them too, and often score badly on consumption and climate.",
        "“The MDGs were a success, so the SDGs will be.” The MDG record is debated (attribution, fairness), and the SDGs are far broader.",
        "“Everyone wanted fewer goals.” Many developing countries and civil society groups fought to add goals on inequality, institutions and the environment."
      ]}
    ]}
   ],
   try:[
    {id:"e4u17-l1-x1", type:"order", q:"Put these steps in time order, earliest first.", items:[
      {t:"The General Assembly adopts the Millennium Declaration", why:"September 2000; the MDGs were drawn from it."},
      {t:"Rio+20 agrees to develop sustainable development goals", why:"June 2012."},
      {t:"General Assembly decision 67/555 sets the Open Working Group’s membership", why:"22 January 2013: 30 seats, 70 countries."},
      {t:"The Open Working Group adopts its proposal of 17 goals and 169 targets", why:"19 July 2014, by acclamation."},
      {t:"All UN members adopt the 2030 Agenda (resolution 70/1)", why:"25 September 2015."},
      {t:"The General Assembly adopts the global indicator framework", why:"6 July 2017 (resolution 71/313), the subject of Lesson 2."}
    ]},
    {id:"e4u17-l1-x2", type:"sort", q:"Does each feature describe the **MDGs**, the **SDGs**, or **both**?", buckets:["MDGs","SDGs","Both"], items:[
      {t:"Drafted mainly by officials of the UN, the World Bank, the IMF and the OECD", b:0, why:"The MDGs were drawn from the Millennium Declaration by a small group of officials."},
      {t:"Apply to every country, rich and poor", b:1, why:"Universality is one of the SDGs’ main innovations."},
      {t:"Include a goal on reducing inequality within and among countries", b:1, why:"Goal 10; the MDGs had no inequality goal."},
      {t:"Are a political commitment, not a binding treaty", b:2, why:"Neither set has legal force."},
      {t:"Have numerical targets with a deadline", b:2, why:"Both use time-bound targets: 2015 for most MDGs, 2030 for the SDGs."},
      {t:"Eight goals, mainly social", b:0, why:"The SDGs have 17, covering economic, environmental and institutional issues too."}
    ]},
    {id:"e4u17-l1-x3", type:"mcq", q:"Why did the Open Working Group share most of its 30 seats among pairs and trios of countries?", options:[
      {t:"To keep the group small enough to negotiate while letting far more governments (70) take part as members", ok:true, why:"Right. Seat-sharing within the regional groups let 70 countries in, and sessions were also open to other states and civil society."},
      {t:"Because the UN Charter limits working groups to 30 states", why:"There is no such Charter rule; the size was a political choice made at Rio+20."},
      {t:"Because only countries that had met the MDGs were allowed a seat of their own", why:"Seats were allocated through the regional groups, not by MDG performance."},
      {t:"To give the permanent members of the Security Council a veto over the goals", why:"The OWG was a General Assembly body with no veto; it adopted its proposal by acclamation."}
    ]},
    {id:"e4u17-l1-x4", type:"match", q:"Match each work to its argument.", pairs:[
      ["Fukuda-Parr & Hulme (2011)","The MDGs show how a global norm against poverty spread and stuck through numbers and targets","They used the norm life cycle to explain the MDGs’ influence."],
      ["Easterly (2009)","Proportional targets from a 1990 baseline made African progress look like failure","His “unfair to Africa” argument about how targets were framed."],
      ["Hickel (2019)","The goals’ growth target conflicts with their ecological goals","“The contradiction of the sustainable development goals”."],
      ["The Economist (2015)","169 targets are too many to set priorities","“The 169 commandments”."],
      ["Kamau, Chasek & O’Connor (2018)","An insider account of how the SDGs were negotiated","*Transforming Multilateral Diplomacy*, by a co-chair and two close observers."]
    ]},
    {id:"e4u17-l1-x5", type:"mcq", q:"Use Nilsson, Griggs and Visbeck’s scale. How would you score this link? Irrigated farmland is expanded to end hunger (Goal 2). The basin’s groundwater is already falling (Goal 6, sustainable water use).", options:[
      {t:"Negative (constraining or worse): progress on one target makes the other harder", ok:true, why:"Right. More irrigation from a falling aquifer works against sustainable water withdrawals. The exact score depends on context, which is the scale’s point."},
      {t:"+3, indivisible: one cannot happen without the other", why:"Ending hunger does not require depleting groundwater; other paths exist (rain-fed yields, efficiency, imports)."},
      {t:"0, consistent: there is no link", why:"There is a clear link through water use."},
      {t:"It cannot be scored, because the SDGs are indivisible by definition", why:"The Agenda calls the goals indivisible as a principle; Nilsson and colleagues show that in practice specific targets can conflict."}
    ]},
    {id:"e4u17-l1-x6", type:"spot", q:"A student blog summarizes the SDGs. Tap each sentence that is **wrong**.", ask:"wrong", parts:[
      {t:"The 2030 Agenda was adopted by all UN members on 25 September 2015.", flag:false, why:"Correct."},
      " ",
      {t:"Like the MDGs, the SDGs apply only to developing countries.", flag:true, why:"Wrong: universality is a key difference. The SDGs apply to every country."},
      " ",
      {t:"Countries that miss their targets can be taken to the International Court of Justice.", flag:true, why:"Wrong: the SDGs are a political commitment in a General Assembly resolution, not a treaty, and there is no court enforcement."},
      " ",
      {t:"The Open Working Group proposed 17 goals and 169 targets.", flag:false, why:"Correct (19 July 2014)."},
      " ",
      {t:"Goal 16 on peaceful societies and institutions was one of the most contested.", flag:false, why:"Correct: some governments argued it did not belong in a development agenda."}
    ]},
    {id:"e4u17-l1-x7", type:"mcq", q:"Tomás argues in a seminar: “The SDGs failed because there are too many of them.” Which reply is the most precise?", options:[
      {t:"He must show that the number of targets, not other factors, slowed progress", ok:true, why:"Right. He mixes a critique of form with a claim about outcomes. He would need to show that the number of targets caused slow progress, and not money, conflict or growth. That causal claim needs evidence."},
      {t:"He is wrong, because the SDGs are on track", why:"The UN’s own 2026 report says most targets are off track (Lesson 2); the issue is whether the number of goals explains it."},
      {t:"He is right, because the MDGs had only eight goals and all of them were met", why:"Not all MDG targets were met, and their record is itself debated."},
      {t:"The number of goals is irrelevant because the goals are integrated", why:"Integration is a reason to have many goals, but prioritization is still a fair question."}
    ]},
    {id:"e4u17-l1-x8", type:"explain", q:"Global goals have no legal force. Explain how goals such as the SDGs can still shape what governments do, and why their wording is fought over. Then give one difference between how the MDGs and the SDGs were made.", size:"3–5 sentences", hint:"Think of three things goals do without a court: agenda, numbers, money.", model:"Global goals work without courts in three ways. They set the agenda by deciding what counts as a development problem. They create numbers that let people compare countries. They also mobilize money and attention. Fukuda-Parr and Hulme argue that the MDGs helped ending poverty spread as a global norm. Goals frame problems and steer money, so governments fight over their wording. They did this over Goal 16 on institutions. The MDGs were drawn up by a small group of officials from the UN, the World Bank, the IMF and the OECD. The SDGs were negotiated by member states in an open working group, with wide consultation.", points:["Explains agenda-setting: goals decide what counts as a problem", "Explains that goals create numbers for comparison", "Explains that goals mobilize money and attention", "Links these effects to why wording is contested", "Contrasts who made the MDGs with who made the SDGs"]}
   ],
   apply:{
    intro:"Go to the primary sources. Everything here is free on the UN’s websites.",
    tasks:[
     {t:"Read the 2030 Agenda’s opening", how:[
       "Open resolution 70/1, *Transforming our world*, on the UN’s SDG website or the UN Digital Library.",
       "Read the preamble and the first ten paragraphs of the Declaration.",
       "Copy the sentences that express universality, integration and “leave no one behind”, and note one thing the text leaves vague."
     ], write:"Universality is in… Integration is in… Leave no one behind is in… What is vague…"},
     {t:"One MDG, its SDG successors", how:[
       "Pick one MDG (for example, MDG 3 on gender equality or MDG 7 on the environment).",
       "Find the SDG goals and targets that took its place.",
       "List what was added, what was dropped, and what that shows about the politics of the negotiation."
     ], write:"The MDG… Its SDG successors… Added… Dropped… What it shows…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was the SDGs’ length the price of legitimacy, or a failure of priority-setting?",
       "2. Can the growth target (8.1) and the environmental goals be reconciled? On what evidence?",
       "3. Did the MDGs change outcomes, or only measure them?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes that quote the Agenda’s key principles. A comparison of one MDG with its SDG successors. A seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"Background on poverty and global goals."},
    {book:"sdgr26", where:"Foreword and Overview", note:"How the UN itself sums up ten years of the SDGs, with the progress chart."},
    {book:"ospol", where:"Section 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"A gentle second voice on the same debates."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u17-l2", title:"Measuring progress: indicators, data, review and localization", minutes:60,
   hook:{q:"The UN’s *Sustainable Development Goals Report 2026* assessed the 139 targets that have enough trend data. What share were on track or already met?", options:["About 15%","About 36%","About 50%","About 70%"], answer:0, reveal:"**About 15%.** Another 21% showed moderate progress, so the UN’s headline is that 36% are on track or moving moderately. Of the rest, 32% show marginal progress, 17% have stagnated and 15% have gone backwards. An independent report by the UN Sustainable Development Solutions Network, using a different method, projected that only about 16% of targets will be achieved by 2030. This lesson shows where such numbers come from, why they differ, and how governments are held to account for them."},
   goals:[
     "Explain how goals, targets and indicators fit together, and who produces SDG data",
     "Summarize the headline findings of the UN SDG Report 2026 and the Sustainable Development Report 2026, and explain why they differ",
     "Identify the main data gaps and why disaggregated data matter for “leave no one behind”",
     "Evaluate composite indices such as the SDG Index",
     "Describe the HLPF, voluntary national reviews and SDG localization, with their strengths and critiques"
   ],
   learn:[
    {h:"Goals, targets, indicators", body:[
      {lead:"“End poverty” is a goal. “How many people live on less than $3.00 a day?” is a measurement. Between the two sits a long chain of choices."},
      "Each of the 17 goals breaks into [[sdg-target|targets]] (169 in all), and each target is tracked by one or more [[sdg-indicator|indicators]]. The **global indicator framework** was adopted by the General Assembly on 6 July 2017 (resolution 71/313). As of 2026 it lists **234 unique indicators** (251 in total, because some appear under more than one target).",
      "The [[iaeg-sdgs|Inter-agency and Expert Group on SDG Indicators (IAEG-SDGs)]] maintains the framework under the UN Statistical Commission. Its members are national statistical offices. It refines the framework every year, with larger comprehensive reviews (the latest in 2025). Each indicator has a [[custodian-agency|custodian agency]] that sets the method and compiles national data. Examples are the World Bank for extreme poverty, the FAO for undernourishment, WHO and UNICEF for drinking water.",
      "Indicators are classed into [[indicator-tier|tiers]]. **Tier I** means an agreed method and regular data for at least half of countries and people in every region. **Tier II** means an agreed method but irregular data. In 2015 many indicators had no agreed method at all (the old Tier III); since 2020 none remain in that group. As of 30 March 2026, 165 indicators were Tier I, 61 Tier II and 8 mixed.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="e4u17l2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><text x="82" y="22" text-anchor="middle">Measuring</text><text x="258" y="22" text-anchor="middle">Reviewing</text><rect class="d-lup" x="8" y="34" width="148" height="50" rx="8" stroke-width="2"/><text x="82" y="55" text-anchor="middle">Surveys, censuses</text><text class="s" x="82" y="73" text-anchor="middle">and admin records</text><rect class="d-lup" x="8" y="106" width="148" height="50" rx="8" stroke-width="2"/><text x="82" y="127" text-anchor="middle">National statistics</text><text class="s" x="82" y="145" text-anchor="middle">office</text><rect class="d-lup" x="8" y="178" width="148" height="50" rx="8" stroke-width="2"/><text x="82" y="199" text-anchor="middle">Custodian agency</text><text class="s" x="82" y="217" text-anchor="middle">e.g. FAO, WHO</text><rect class="d-lup" x="8" y="250" width="148" height="50" rx="8" stroke-width="2"/><text x="82" y="271" text-anchor="middle">Global SDG</text><text class="s" x="82" y="289" text-anchor="middle">database</text><rect class="d-gold" x="8" y="322" width="148" height="50" rx="8" stroke-width="2"/><text x="82" y="343" text-anchor="middle">UN SDG Report</text><text class="s" x="82" y="361" text-anchor="middle">each July</text><rect class="d-sage" x="184" y="34" width="148" height="50" rx="8" stroke-width="2"/><text x="258" y="55" text-anchor="middle">Government, cities,</text><text class="s" x="258" y="73" text-anchor="middle">civil society</text><rect class="d-sage" x="184" y="106" width="148" height="50" rx="8" stroke-width="2"/><text x="258" y="127" text-anchor="middle">Voluntary national</text><text class="s" x="258" y="145" text-anchor="middle">or local review</text><rect class="d-gold" x="184" y="178" width="148" height="50" rx="8" stroke-width="2"/><text x="258" y="199" text-anchor="middle">HLPF, New York</text><text class="s" x="258" y="217" text-anchor="middle">each July</text><rect class="d-sage" x="184" y="250" width="148" height="50" rx="8" stroke-width="2"/><text x="258" y="271" text-anchor="middle">Ministerial</text><text class="s" x="258" y="289" text-anchor="middle">declaration</text><rect class="d-rose" x="184" y="322" width="148" height="50" rx="8" stroke-width="2"/><text x="258" y="343" text-anchor="middle">SDG Summit</text><text class="s" x="258" y="361" text-anchor="middle">every four years</text><path class="d-ink" d="M82,85 V102" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M82,157 V174" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M82,229 V246" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M82,301 V318" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M258,85 V102" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M258,157 V174" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M258,229 V246" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M258,301 V318" stroke-width="2" marker-end="url(#e4u17l2a)"/><path class="d-ink" d="M157,340 L181,212" stroke-width="2" fill="none" marker-end="url(#e4u17l2a)"/><text class="s" x="170" y="392" text-anchor="middle">Data feed the review; no court enforces it</text></svg>', alt:"Two columns. Measuring, on the left: surveys, censuses and administrative records feed the national statistics office. Then comes a custodian agency such as FAO or WHO, then the global SDG database, then the UN SDG Report each July. Reviewing, on the right: governments, cities and civil society prepare a voluntary national or local review. It is presented at the HLPF in New York each July, which ends with a ministerial declaration. An SDG Summit meets every four years. An arrow runs from the UN SDG Report to the HLPF.", cap:"The two chains of SDG follow-up. Data feed the review; no court enforces it."}
    ]},
    {h:"What the reports say, as of November 2026", body:[
      "Two annual reports dominate the debate, and a seminar paper should know which one it is citing.",
      {table:[
        ["","UN *SDG Report 2026*","*Sustainable Development Report 2026*"],
        ["Who","UN DESA with the UN statistical system (released 7 July 2026)","The SDSN, an independent network (Sachs, Lafortune, Fuller & Iablonovski; released 23 June 2026)"],
        ["Unit","Each target, worldwide","Each country, through an index"],
        ["Headline","Of 139 assessable targets: 15% on track or met, 21% moderate, 32% marginal, 17% stagnant, 15% regressed","Only 16% of targets projected to be met by 2030; Finland, Sweden and Denmark top the index"]
      ]},
      "The UN report adds figures that show the stakes. About **826 million people** (10% of the world) were still in extreme poverty in 2026 at the [[international-poverty-line|$3.00-a-day line]] (see Unit 15). **645 million** were chronically undernourished in 2025. Official aid fell by a record **23.1% in 2025**, to $174.3 billion or 0.26% of donors’ combined national income, and a further fall is projected for 2026.",
      "The SDSN report finds that East and South Asia have progressed fastest since 2015, and it ranks 169 countries. It also adds an index of support for UN-based multilateralism, which in 2026 ranked Barbados first and the United States last. Any such index reflects its authors’ choice of what counts as support, so cite it as their judgment, not a neutral fact."
    ]},
    {h:"The data gap", body:[
      "Behind every global figure sit national statistics, and many are thin. The UN report looks at the goals on gender equality, cities, climate action, and peace and justice. It says that for these, **fewer than one third** of indicators have enough trend data. Of 135 national statistical plans being implemented, only **80 were fully funded**, down from 95 the year before, and the aid cuts threaten more. This is the [[sdg-data-gap|SDG data gap]].",
      "The gap matters most for the pledge to leave no one behind. National averages hide who is left out. So the framework calls for [[data-disaggregation|disaggregated data]]: by income, sex, age, race and ethnicity, migratory status, disability and location. Small groups are exactly where surveys are weakest.",
      "Statistics are also political. Morten Jerven’s *Poor Numbers* (2013) showed that GDP estimates for many African countries rested on old base years and guesswork. As a result, he showed, a technical revision could move a country into a new income group overnight. Indicators also shape behavior. [[goodharts-law|Goodhart’s law]] warns that when a measure becomes a target, it stops being a good measure. Fukuda-Parr and others have shown how the choice of targets and indicators can narrow a goal. Goal 10 promises to reduce inequality. But its first target (10.1) and that target’s indicator track income growth of the poorest 40%, not the gap between the richest and the poorest."
    ]},
    {h:"Indices and rankings", body:[
      "A composite index such as the SDSN’s [[sdg-index|SDG Index]] turns about a hundred indicators into one score per country. It rescales each indicator to 0–100 and averages them, with equal weight for each goal. Rankings are easy to report, which is why governments and media quote them.",
      "Three cautions, all familiar from Unit 8’s discussion of soft power indices:",
      {list:[
        "**Weights are choices.** Equal weighting assumes a point of clean water matters as much as a point of press freedom.",
        "**Averages hide trade-offs.** A country can score high overall while failing on climate and consumption. The SDSN reports exactly this pattern for its top-ranked countries on Goals 12–15.",
        "**Borders hide spillovers.** Rich countries’ consumption can cause deforestation, emissions or unsafe work elsewhere. The SDSN’s separate [[international-spillovers|spillover index]] tries to capture this. The SDSN reports that rich countries, which top the main index, generate the lion’s share of the negative spillovers it records."
      ]},
      {ex:"**Task.** See how a composite index is built, and how much its ranking depends on weights. Use two invented countries and three goals.\n\n1. **First I rescale one raw indicator to 0–100**, because indicators come in different units. Safe drinking water reaches 60% of people in Norland. If the index sets the lower bound at 20% and the target at 100%, the score is (60 − 20) ÷ (100 − 20) × 100 = **50**.\n2. **I do the same for every indicator.** Then I average them within each goal. Norland: water 50, schooling 80, climate 40. Southmark: water 70, schooling 60, climate 45.\n3. **Then I average the goals with equal weights**, as the SDG Index does. Norland: (50 + 80 + 40) ÷ 3 = 56.7. Southmark: (70 + 60 + 45) ÷ 3 = 58.3. Southmark ranks higher.\n4. **Now I test the weights.** If schooling counted twice as much as each other goal, Norland would score 62.5 and Southmark 58.75. The order flips.\n5. **Finally I write only what the ranking can carry.**\n\n**Finished sentence for a paper:** “Southmark ranks just above Norland on an equally weighted index (58.3 against 56.7). The order reverses if schooling is weighted more heavily. Both countries score lowest on climate action.”\n\n**Common mistake:** treating a small gap in rank as a real difference. Check how close the scores are and whether another reasonable weighting would change the order.", label:"Worked example: how weights can flip a ranking"}
    ]},
    {h:"Follow-up and review: the HLPF and voluntary reviews", body:[
      "The 2030 Agenda has no enforcement, only **follow-up and review**. Its center is the [[hlpf|High-level Political Forum on Sustainable Development (HLPF)]], created in 2013 to replace the Commission on Sustainable Development. It meets every July under the Economic and Social Council. Every four years it also meets at summit level under the General Assembly (the SDG Summits of 2019 and 2023).",
      "At each forum, governments present [[voluntary-national-review|voluntary national reviews (VNRs)]] of their progress. In 2026 (7–15 July), **36 countries** presented, and the forum reviewed Goals 6, 7, 9, 11 and 17 in depth. UN DESA counts **437 reviews since 2016** by 190 countries and the European Union.",
      "Supporters see peer learning and a reason for ministries to talk to each other and to statisticians. Critics call it “soft” accountability: governments choose what to report, presentations are short, and no one is sanctioned. Civil society groups therefore publish their own “spotlight” or shadow reports, the same move that human rights NGOs make before treaty bodies (Unit 11)."
    ]},
    {h:"Localization: cities and regions", body:[
      "Much of the agenda (water, transport, housing, waste) is delivered by local governments. [[sdg-localisation|SDG localization]] means adapting the goals to local plans and data. Its signature tool is the [[voluntary-local-review|voluntary local review (VLR)]], which has no official status but copies the VNR format.",
      "The first VLRs were released in 2018 by three Japanese municipalities, **Kitakyushu, Toyama and Shimokawa**, and by **New York City**. UN DESA’s online collection now lists over 400. Japan’s Cabinet Office has selected “SDGs FutureCities” every year since fiscal 2018 to model local SDG strategies. India’s government think tank NITI Aayog has ranked all states and union territories in an SDG India Index since 2018. Cities in every region, from Bristol in the United Kingdom to Buenos Aires, have followed with their own reviews.",
      "Supporters say local ownership makes the goals concrete. Critics warn of rebranding existing plans and of cherry-picking easy goals. They also warn of a gap between well-resourced cities and the many municipalities with no statisticians at all."
    ]},
    {h:"Worked example: reading one headline number", body:[
      {ex:"“About 826 million people still live in extreme poverty.” (UN, *SDG Report 2026*)\n\n• **Which line?** Under $3.00 a day in 2021 purchasing-power-parity dollars, the World Bank line since June 2025 (Unit 15). An older line gives a different number.\n• **Which year?** 2026, so the UN calls it an estimate. Few countries have survey data that recent, so the figure is projected forward from older surveys.\n• **Which unit?** The world. Regional and national figures can move in the opposite direction.\n• **Who measured it?** The World Bank, as custodian agency, from national household surveys of varying age and quality.\n• **What does it hide?** Who is poor within countries, by gender, age, disability or location.", label:"Worked example"},
      "Asking these five questions before quoting any SDG figure is the quickest way to sound like a graduate student rather than a press release. When the figure is a trend, add one more: is the change in percent or percentage points, and over how many years? {{growth-arithmetic}} (Unit 14) shows the calculations.",
      {terms:["sdg-target","sdg-indicator","iaeg-sdgs","custodian-agency","indicator-tier","sdg-data-gap","data-disaggregation","goodharts-law","sdg-index","international-spillovers","hlpf","voluntary-national-review","sdg-localisation","voluntary-local-review"]}
    ]}
   ],
   try:[
    {id:"e4u17-l2-x1", type:"order", q:"Put the chain from household to headline in order.", items:[
      {t:"A household survey records income, food and water use", why:"Most social indicators start with surveys, censuses or administrative records."},
      {t:"The national statistics office compiles and validates the data", why:"National systems are the primary producers."},
      {t:"A custodian agency applies the agreed method and builds comparable series", why:"For example, FAO for undernourishment."},
      {t:"The figures enter the global SDG database", why:"The UN Statistics Division hosts it."},
      {t:"The UN SDG Report states how many targets are on track", why:"The global aggregate is the last step, and every weakness upstream carries into it."}
    ]},
    {id:"e4u17-l2-x2", type:"number", q:"In the UN’s 2026 assessment of 139 targets, 15% were on track or met and 21% showed moderate progress. Roughly how many **targets** is that combined? (Round to the nearest whole target.)", answer:50, tol:1, unit:"targets", why:"15% + 21% = 36%. 36% of 139 = 0.36 × 139 = 50.04, so about 50 targets. The rest, about 89, were marginal, stagnant or regressing.", wrongs:[
      {v:36, tol:0, why:"36 is the percentage, not the number of targets. Multiply 0.36 by 139."},
      {v:21, tol:0, why:"That uses only the 15% on track (15% of 139 ≈ 21). Add the 21% with moderate progress."},
      {v:61, tol:1, why:"That would be 36% of 169, all targets. The UN assessed only the 139 with enough trend data."}
    ], hint2:"Add the two percentages, then multiply by 139."},
    {id:"e4u17-l2-x3", type:"mcq", q:"A newspaper says: “The UN says 15% of SDG targets are on track; a think tank says 16%. The two reports confirm each other.” What is the best correction?", options:[
      {t:"They measure different things in different ways", ok:true, why:"Right. The UN assesses global trends target by target; the SDSN projects country-level progress with its own index, so similar figures are partly coincidence. Always check the unit (world or country), the method and the denominator before comparing figures."},
      {t:"The SDSN report is unreliable because it is not from the UN", why:"Independence is not unreliability; the point is that the methods differ, not that one is wrong."},
      {t:"The UN figure is 36%, so the newspaper is wrong", why:"36% includes targets with moderate progress; 15% on track or met is also correct. The real issue is comparability."},
      {t:"Both reports measure the same 169 targets in the same way", why:"The UN assessed only 139 targets with trend data, and the SDSN uses a country index."}
    ]},
    {id:"e4u17-l2-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Custodian agency","The international agency that sets how an indicator is measured and collects comparable data","For example, WHO and UNICEF for drinking water."],
      ["Tier II indicator","An agreed method exists, but countries do not produce the data regularly","Tier I also requires regular data for at least half of countries and people."],
      ["Data disaggregation","Breaking figures down by sex, age, income, disability, location and other groups","Needed to see who is left behind."],
      ["Voluntary local review","A city’s or region’s self-assessment of SDG progress, with no official status","First released in 2018 by Kitakyushu, Toyama, Shimokawa and New York City."],
      ["Spillover","Effects of one country’s actions, such as consumption, on other countries’ ability to meet the goals","Measured separately by the SDSN."]
    ]},
    {id:"e4u17-l2-x5", type:"sort", q:"Is each statement a **strength** that supporters claim for the VNR and HLPF system, or a **weakness** that critics point to?", buckets:["Strength claimed by supporters","Weakness raised by critics"], items:[
      {t:"Preparing a review makes ministries and statisticians work together", b:0, why:"A common finding: the process itself builds coordination."},
      {t:"Governments choose what to report and what to leave out", b:1, why:"Self-reporting invites selective, positive accounts."},
      {t:"Countries learn from each other’s policies in an open forum", b:0, why:"Peer learning is the stated purpose."},
      {t:"No one is sanctioned for going backwards", b:1, why:"Accountability is soft; that is why shadow reports exist."},
      {t:"Civil society can comment and publish shadow reports", b:0, why:"Openness to non-state actors is a claimed strength."},
      {t:"Presentations are short and the questions are rarely hard", b:1, why:"A common critique of the forum’s format."}
    ]},
    {id:"e4u17-l2-x6", type:"mcq", q:"Mei’s country ranks fifth in the SDG Index. Which question would most improve her seminar paper?", options:[
      {t:"How does it score on spillovers and Goals 12–15?", ok:true, why:"Right. A high average can hide poor performance on consumption and climate and harm abroad; she could also test how sensitive the rank is to the weights."},
      {t:"Which country ranked first?", why:"The rank of others says nothing about the strengths and weaknesses behind her country’s score."},
      {t:"Has the government publicized the ranking abroad?", why:"Publicity is about politics, not about what the index measures."},
      {t:"Is the index produced every year?", why:"Frequency matters less than what the index includes and how it weights it."}
    ]},
    {id:"e4u17-l2-x7", type:"spot", q:"A ministry press release. Tap each claim that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      {t:"Our voluntary national review, presented at the HLPF in July, shows our progress on the SDGs.", flag:false, why:"Fine as a description of what a VNR is."},
      " ",
      {t:"The UN has certified that we are fully on track on all 17 goals.", flag:true, why:"Misleading: the UN does not certify countries; VNRs are self-assessments."},
      " ",
      {t:"Our national average poverty rate fell, so no group has been left behind.", flag:true, why:"Wrong inference: averages can fall while some groups fall behind. That is why disaggregated data are needed."},
      " ",
      {t:"We report on the indicators for which we have data and list the gaps.", flag:false, why:"Good practice: transparency about data gaps."},
      " ",
      {t:"Our rise in an SDG index proves our new policy worked.", flag:true, why:"An index rise can come from data revisions, other policies or other countries’ changes: the attribution problem."}
    ]},
    {id:"e4u17-l2-x8", type:"explain", q:"A newspaper says Country A is “more sustainable” than Country B because it ranks two places higher on the SDG Index. Explain why you should be careful with this claim, and what you would check.", size:"3–5 sentences", hint:"Think about how the index is built: rescaling, weights and averages.", model:"The SDG Index rescales about a hundred indicators to 0–100 and averages them, with equal weight for each goal. But weights are choices. Equal weighting assumes a point of clean water matters as much as a point of press freedom. Another reasonable weighting can flip the order of two close countries. Averages also hide trade-offs. A country can score high overall while failing on climate and consumption, as the SDSN reports for its own top-ranked countries. Borders also hide spillovers, such as harm caused abroad by rich countries’ consumption. So I would check how close the scores are and look at the separate goals.", points:["Explains that the index averages rescaled indicators", "Says the weights are a choice that can change the ranking", "Says an average can hide poor scores on some goals", "Mentions spillovers that a country’s own score leaves out", "Says what to check, such as the score gap or the separate goals"]}
   ],
   apply:{
    intro:"Work with the real reports and databases. All are free; none needs an account.",
    tasks:[
     {t:"Two reports, one goal", how:[
       "Choose one goal. Read its chapter in the UN *SDG Report 2026* and its global or regional dashboard in the *Sustainable Development Report 2026*.",
       "Note each report’s headline for that goal, its indicators, its years and its method.",
       "Write three sentences on why they agree or differ."
     ], write:"Goal… UN report says… SDSN report says… Why they differ…"},
     {t:"Read one VNR or VLR", how:[
       "Open the HLPF website’s list of voluntary national reviews, or UN DESA’s collection of voluntary local reviews. Pick a country or city outside your own region.",
       "Read the main messages or summary.",
       "List what it measures, what data it admits are missing, and one claim you would want to check."
     ], write:"Country or city… What it measures… Data gaps it admits… A claim to check…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is soft accountability through the HLPF a weakness, or the only realistic option for a universal agenda?",
       "2. Do indicators distort the goals they measure? Use one target as an example.",
       "3. Should rich countries be ranked on their spillovers as well as their domestic progress?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing two reports on one goal, a short critical reading of one VNR or VLR, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sdgr26", where:"The progress chart and the “Note to the reader” on data and methods", note:"How the UN assesses targets, and what it says about data gaps."},
    {book:"sdr26", where:"Part 2 “The SDG Index and Dashboards” and the Methodology section", note:"How the SDSN builds its index, weights and spillover measures."},
    {book:"datafem", where:"Chapter 1, “The Power Chapter”", note:"Background on who collects data and whose lives go uncounted."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u17-l3", title:"Gender and development: from WID to GAD, care and microfinance", minutes:65,
   hook:{q:"In 2018 the International Labour Organization estimated how much **unpaid** care work (cooking, cleaning, looking after children and older people) is done worldwide each day. Roughly how many hours?", options:["About 1.6 billion hours","About 16.4 billion hours","About 164 billion hours","About 4 billion hours"], answer:1, reveal:"**About 16.4 billion hours a day**, based on time-use data from 64 countries, with women doing **76.2%** of it, more than three times as much as men. Valued at an hourly minimum wage, the ILO put it at about 9% of global GDP, yet GDP does not count it. Making that kind of work visible is one thread of this lesson, which follows how development thinking learned to see gender."},
   goals:[
     "Distinguish Women in Development (WID), Women and Development (WAD) and Gender and Development (GAD), with their key thinkers",
     "Use Molyneux’s and Moser’s distinction between practical and strategic gender needs",
     "Apply Kabeer’s framework of resources, agency and achievements to a real case",
     "Explain why unpaid care work matters for development and how the SDGs address it",
     "Weigh the evidence on microfinance, including the 2015 randomized evaluations"
   ],
   learn:[
    {h:"Women in Development: making women visible", body:[
      {lead:"A 1960s farm project trains men to use new seeds and tools. In the region, most of the farming is done by women. What happens?"},
      "That was the pattern the Danish economist {{wid-wad-gad|Ester Boserup}} documented in *Woman’s Role in Economic Development* (1970). Colonial administrators and development planners, she argued, assumed that men were the farmers. So they gave men the land titles, training and technology. In her account, modernization therefore often lowered women’s status, especially in parts of Africa where women grew much of the food.",
      "Her book helped launch [[women-in-development|Women in Development (WID)]]. In the 1970s donors created WID offices. The UN held its first world conference on women in Mexico City (1975) and declared a Decade for Women (1976–1985). WID’s argument was largely about **efficiency**. Development fails if it ignores half the workforce, WID argued, so bring women in through projects for income, credit and skills.",
      "Critics answered that WID added women to a model it never questioned. They said “women’s projects” often became small side-activities with too little money."
    ]},
    {h:"From WAD to GAD: gender relations and power", body:[
      "Two responses followed. [[women-and-development|Women and Development (WAD)]], influenced by Marxist feminism, argued that women had always been integrated into development, but on unequal terms. In this view, they were cheap labor in a global economy that also exploited poor men. In 1984 women researchers and activists from the Global South founded DAWN (Development Alternatives with Women for a New Era). Gita Sen and Caren Grown’s *Development, Crises, and Alternative Visions* (1987) set out its view from the South.",
      "[[gender-and-development|Gender and Development (GAD)]], from the 1980s, shifted attention from women to **gender relations**. These are the power between women and men in households, markets and states, and the ways institutions reproduce it. Maxine Molyneux (*Feminist Studies*, 1985), writing on Nicaragua, distinguished practical from strategic gender interests. Caroline Moser (*World Development*, 1989) turned this into a planning tool of [[practical-strategic-gender-needs|practical and strategic gender needs]]:",
      {table:[
        ["","Practical gender needs","Strategic gender needs"],
        ["What","Needs arising from women’s current roles","Needs to change the unequal relations themselves"],
        ["Examples","Water closer to home; a health clinic; a child-care center","Land rights in women’s names; laws against violence; equal pay; a say in decisions"],
        ["Risk","Can fix women’s burdens in place","Contested, slower, politically harder"]
      ]},
      {ex:"**Task.** Use Moser’s tool to classify four SDG targets, working from their own words.\n\n1. **First I decide what to look for**: does the target ease a burden women carry now, or change the relations that create the burden? I classify by effect, not by topic.\n2. **Target 6.2** (sanitation for all, “paying special attention to the needs of women and girls”). It makes daily life safer and easier without changing who holds power. **Practical.**\n3. **Target 5.a** (reforms to give women “equal rights to economic resources, as well as access to ownership and control over land”). It changes who owns things, and so who can bargain. **Strategic.**\n4. **Target 5.5** (women’s “full and effective participation and equal opportunities for leadership at all levels of decision-making”). It changes who decides. **Strategic.**\n5. **Target 5.4** (unpaid care recognized through “public services, infrastructure and social protection” and “shared responsibility within the household”). The first half eases the burden; the second asks others to share it. **Both.**\n6. **Finally I add Moser’s warning**, because the point of the tool is consequences, not labels.\n\n**Finished paragraph:** “Goal 5 mixes practical and strategic targets. Sanitation (6.2) meets a practical need; land rights (5.a) and decision-making (5.5) address strategic ones. Target 5.4 does both, but its qualifier ‘as nationally appropriate’ lets a government stop at the practical half.”\n\n**Common mistake:** sorting by topic (“water is practical”). A water committee where women hold half the seats also serves a strategic interest.", label:"Worked example: practical or strategic?"},
      "The Beijing Platform for Action (1995) made [[gender-mainstreaming|gender mainstreaming]] official policy: checking how every policy affects women and men, and not only women’s projects. Critics later warned that mainstreaming can become box-ticking. Gender appears everywhere in reports but nowhere in budgets."
    ]},
    {h:"Empowerment: Kabeer’s framework", body:[
      "“Empowerment” became a buzzword. {{naila-kabeer|Naila Kabeer}} gave it analytical shape in “Resources, Agency, Achievements: Reflections on the Measurement of Women’s Empowerment” (*Development and Change*, 1999). She defined [[womens-empowerment|empowerment]] as the expansion of people’s ability to make **strategic life choices** in a context where this ability was previously denied. Choices about marriage, work, children and movement count; choosing between two brands of soap does not.",
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="e4u17l3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-lup" x="60" y="10" width="220" height="80" rx="10" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Resources</text><text class="s" x="170" y="56" text-anchor="middle">preconditions: land, income,</text><text class="s" x="170" y="72" text-anchor="middle">education, networks</text><rect class="d-gold" x="60" y="130" width="220" height="80" rx="10" stroke-width="2"/><text x="170" y="156" text-anchor="middle">Agency</text><text class="s" x="170" y="176" text-anchor="middle">process: deciding, bargaining,</text><text class="s" x="170" y="192" text-anchor="middle">resisting, acting together</text><rect class="d-sage" x="60" y="250" width="220" height="80" rx="10" stroke-width="2"/><text x="170" y="276" text-anchor="middle">Achievements</text><text class="s" x="170" y="296" text-anchor="middle">outcomes: well-being,</text><text class="s" x="170" y="312" text-anchor="middle">voice, valued ways of living</text><path class="d-ink" d="M170,92 V126" stroke-width="2" marker-end="url(#e4u17l3a)"/><path class="d-ink" d="M170,212 V246" stroke-width="2" marker-end="url(#e4u17l3a)"/><path class="d-ink" d="M282,290 C324,290 324,50 286,50" stroke-width="2" fill="none" marker-end="url(#e4u17l3a)"/><text class="s" x="20" y="344">Outcomes can become new resources</text></svg>', alt:"Three boxes from top to bottom joined by arrows. Resources: preconditions such as land, income, education and networks. Agency: the process of deciding, bargaining, resisting and acting together. Achievements: outcomes such as well-being, voice and valued ways of living. A curved arrow runs from achievements back up to resources, labeled: outcomes can become new resources.", cap:"Kabeer’s three dimensions. A resource only empowers if it feeds agency, and only achievements show whether it did."}
      ,"The framework warns against easy indicators. A loan in a woman’s name is a resource, but if her husband controls it, agency has not changed. A survey answer such as “I decide on household purchases” means different things in different places. Kabeer later criticized the MDG gender goal on these grounds (*Gender & Development*, 2005). In her view, school enrollment, wage jobs and parliamentary seats are resources and achievements, but they say little about agency.",
      {ex:"**Task.** Code this invented field note with Kabeer’s three dimensions: “Rehana, 34, took a small loan from a women’s savings group last year. Her husband used it to buy a second-hand rickshaw. She repays from his earnings and from selling eggs. She now goes to the group’s weekly meeting, and neighbors ask her advice.”\n\n1. **First I list the resources**, because they are the easiest part to see: the loan, membership of the group, her egg income.\n2. **Then I ask who decided**, because that is where agency shows. Her husband chose how to use the loan, so her control over money did not grow. But she now speaks in a new space, the group, and others ask her views.\n3. **Next I look for achievements.** The loan is being repaid and the household owns a rickshaw. The note says nothing about her well-being or her say over spending.\n4. **I check the links between the dimensions.** A resource only empowers if it feeds agency. Here the loan did not; the group may have.\n5. **Finally I name the missing evidence**: who controls the rickshaw income, and whether she wanted the loan.\n\n**Coded result:**\n• Resources: loan (controlled by husband); group membership; egg income.\n• Agency: low over the loan; some new voice through the group.\n• Achievements: unclear; repayment is not well-being.\n\n**Finished sentence:** “On this evidence the loan was a resource her husband controlled, so it did little for Rehana’s agency over money; the group seems to have widened her voice. Asking Rehana herself would test this reading. Kabeer (2001) did this with women borrowers in Bangladesh.”\n\n**Common mistake:** treating a high repayment rate, or a loan in a woman’s name, as proof of empowerment.", label:"Worked example: coding a case with Kabeer’s framework"}
    ]},
    {h:"Unpaid care: the work that GDP ignores", body:[
      "GDP counts a meal bought in a restaurant but not the same meal cooked at home. Marilyn Waring’s *If Women Counted* (1988) made this a classic feminist critique of national accounts. [[unpaid-care-work|Unpaid care work]] is measured instead through [[time-use-survey|time-use surveys]], in which people record what they do through the day.",
      "The ILO’s *Care Work and Care Jobs for the Future of Decent Work* (2018) found that unpaid care took 16.4 billion hours a day, 76.2% of it done by women. It also found that **606 million** working-age women, against 41 million men, were outside the labor force because of unpaid care. Care also crosses borders, as the migration primer showed with the [[global-care-chain|global care chain]].",
      "The [[triple-r-framework|“three Rs”]], associated with the feminist economist Diane Elson, became the policy shorthand. **Recognize** unpaid care (count it). **Reduce** its drudgery (water, electricity, transport). **Redistribute** it (from women to men, and from households to the state and employers through services and leave). SDG target 5.4 adopts this language. It asks countries to recognize and value unpaid care through public services, infrastructure and social protection. It also asks them to promote shared responsibility within the household, “as nationally appropriate”."
    ]},
    {h:"Microfinance: promise and evidence", body:[
      "[[microcredit|Microcredit]], small loans without collateral, became the best-known gender-and-development tool. Muhammad Yunus began lending in Bangladesh in the 1970s. The Grameen Bank became a formal bank in 1983, and Yunus and the bank shared the Nobel Peace Prize in 2006. The model used [[joint-liability|group lending]]. Borrowers, mostly women, formed small groups whose members were responsible for each other’s repayment. Peer pressure replaced collateral.",
      "The claims were large: loans would lift families out of poverty and empower women. The evidence is more modest. In 2015 the *American Economic Journal: Applied Economics* published six [[randomised-controlled-trial|randomized evaluations]] of microcredit expansion. They covered Bosnia and Herzegovina, Ethiopia, India, Mexico, Mongolia and Morocco (see {{development-rcts}} in Unit 15). Banerjee, Karlan and Zinman summarized the results as “modestly positive, but not transformative”. In their summary, some people started or expanded businesses. But there was no consistent rise in household income and little evidence of transformed women’s empowerment.",
      "Critics went further. In Andhra Pradesh, India, rapid commercial growth led to over-indebtedness and a crisis in 2010, when the state government restricted lenders. Defenders reply that credit is a useful service rather than a cure, and many now speak of broader [[microfinance]]: savings, insurance and mobile money. Kabeer’s own fieldwork (“Conflicts over Credit”, *World Development*, 2001) found both: some women lost control of their loans, while others gained standing in the household.",
      {key:"Read microfinance through Kabeer: a loan is a resource. Whether it becomes agency and achievement is an empirical question, and the answer differs by place and person."}
    ]},
    {h:"Two cases: collective agency and cash transfers", body:[
      "Two cases from the Global South show the frameworks at work.",
      "**Collective agency in India.** The Self-Employed Women’s Association (SEWA), founded by Ela Bhatt in Ahmedabad in 1972, organized women in informal work (street vendors, home-based workers, head-loaders) into a trade union. It later built its own cooperative bank. In Kabeer’s terms it works on agency directly, through collective bargaining and voice, not only through individual resources.",
      "**Cash transfers in Latin America.** Conditional cash transfers, such as Mexico’s Progresa (1997) and Brazil’s Bolsa Família (2003), pay poor families if children attend school and health checks. The money usually goes through mothers. Evaluations found gains in schooling and health. Maxine Molyneux (*Social Policy & Administration*, 2006) asked a GAD question. The programs made mothers responsible for meeting the conditions. Did this add to women’s unpaid work? And did it treat them as instruments of their children’s welfare rather than as people with their own needs?",
      "Neither case settles the debate, which is the point: GAD asks who gains voice and who carries the extra work."
    ]},
    {h:"Gender in the SDGs", body:[
      "Women’s movements and UN Women campaigned for a stand-alone goal plus gender targets in other goals, and won both. Goal 5 has nine targets, from ending violence, child marriage and female genital mutilation to unpaid care (5.4), participation in decision-making (5.5) and reproductive rights (5.6).",
      "The UN’s 2026 report shows slow change. Women hold **27.4%** of seats in national parliaments. They held **30.5%** of managerial positions in 2025, only 3.6 points more than in 2015. Nearly one in five young women was married before 18. The report also admits that fewer than a third of Goal 5’s indicators have enough trend data, a reminder of Lesson 2. Feminist critics add that the agenda says little about macroeconomic policies, such as tax and public spending. These policies, they point out, decide whether care services are funded at all.",
      {terms:["women-in-development","women-and-development","gender-and-development","practical-strategic-gender-needs","gender-mainstreaming","womens-empowerment","unpaid-care-work","time-use-survey","triple-r-framework","microcredit","joint-liability","microfinance"]}
    ]}
   ],
   try:[
    {id:"e4u17-l3-x1", type:"sort", q:"Which approach does each statement express best?", buckets:["WID","WAD","GAD"], items:[
      {t:"Projects fail when they ignore women farmers; give women credit and training so development is more efficient", b:0, why:"WID’s efficiency case: integrate women into existing development."},
      {t:"Women have always been part of development, but as cheap labor in an unequal global economy", b:1, why:"WAD’s Marxist-feminist argument."},
      {t:"Look at power between women and men in households, markets and states, and change the institutions that reproduce it", b:2, why:"GAD’s focus on gender relations."},
      {t:"Create a women’s unit in each donor agency to run income projects", b:0, why:"A typical 1970s WID measure."},
      {t:"Ask how a project changes who decides, not only who receives", b:2, why:"GAD looks at relations and decision-making."}
    ]},
    {id:"e4u17-l3-x2", type:"sort", q:"Practical or strategic gender need (Moser)?", buckets:["Practical gender need","Strategic gender need"], items:[
      {t:"A water pump closer to the village", b:0, why:"Eases a burden of women’s current role without changing who fetches the water."},
      {t:"A law giving wives equal rights to inherit land", b:1, why:"Changes the unequal relation over assets."},
      {t:"A child-care center at the market", b:0, why:"Practical support for current roles, though it can also open new options."},
      {t:"Quotas for women on village councils", b:1, why:"Changes who holds decision-making power."},
      {t:"A campaign against domestic violence", b:1, why:"Challenges the power relation itself."},
      {t:"A mobile health clinic", b:0, why:"Meets an immediate need."}
    ]},
    {id:"e4u17-l3-x3", type:"mcq", q:"Fatima receives a business loan in her own name. Her husband decides how it is spent and keeps the profits. In Kabeer’s terms, what has happened?", options:[
      {t:"She has gained a resource, but not agency, so the loan has not empowered her", ok:true, why:"Right. Resources are preconditions; empowerment needs the ability to make strategic choices with them."},
      {t:"She is empowered, because the loan is in her name", why:"That reads a resource as if it were agency, the exact error Kabeer warns against."},
      {t:"She has an achievement but no resource", why:"The loan is the resource; there is no evidence of a valued achievement for her."},
      {t:"Kabeer’s framework cannot be applied to credit", why:"Kabeer applied it to credit herself, in “Conflicts over Credit” (2001)."}
    ]},
    {id:"e4u17-l3-x4", type:"number", q:"The ILO estimated 16.4 billion hours of unpaid care work a day, 76.2% of it done by women. About how many **billion hours** a day is done by women? (One decimal place.)", answer:12.5, tol:0.1, unit:"billion hours", why:"76.2% of 16.4 = 0.762 × 16.4 = 12.50 billion hours a day. Men do the remaining 3.9 billion.", wrongs:[
      {v:3.9, tol:0.1, why:"That is men’s share (23.8% of 16.4). The question asks for women’s."},
      {v:76.2, tol:0.1, why:"76.2 is the percentage. Multiply 0.762 by 16.4."},
      {v:21.5, tol:0.2, why:"That divides instead of multiplying (16.4 ÷ 0.762). Take 76.2% of the total."}
    ], hint2:"Women’s hours = 0.762 × 16.4."},
    {id:"e4u17-l3-x5", type:"mcq", q:"What did six randomized evaluations of microcredit find overall? They were published together in 2015.", options:[
      {t:"Modestly positive but not transformative effects", ok:true, why:"Right: some business expansion, no consistent rise in household income, little evidence of transformed empowerment. That is how Banerjee, Karlan and Zinman summarized the six studies."},
      {t:"Microcredit lifted most borrowing households out of poverty within two years", why:"The studies found no consistent income gains of that size."},
      {t:"Microcredit made borrowers poorer in every country studied", why:"Effects were small and mixed, not uniformly negative."},
      {t:"The studies could not be done because microcredit cannot be randomized", why:"They randomized access, for example by area or by applicant, which is what made them possible."}
    ]},
    {id:"e4u17-l3-x6", type:"match", q:"Match each thinker to the idea.", pairs:[
      ["Ester Boserup (1970)","Modernization bypassed women farmers and could lower their status","*Woman’s Role in Economic Development*, a founding text of WID."],
      ["Caroline Moser (1989)","A planning distinction between practical and strategic gender needs","Building on Molyneux (1985)."],
      ["Naila Kabeer (1999)","Empowerment: being able to make strategic life choices, through resources, agency and achievements","*Development and Change*."],
      ["Marilyn Waring (1988)","National accounts leave out women’s unpaid work","*If Women Counted*."],
      ["Gita Sen & Caren Grown (1987)","A Global South feminist view of development and crisis, for the DAWN network","*Development, Crises, and Alternative Visions*."]
    ]},
    {id:"e4u17-l3-x7", type:"spot", q:"A charity’s appeal. Tap each claim that **overstates the evidence or misuses a concept**.", ask:"overstates or misuses", parts:[
      {t:"Women do most of the world’s unpaid care work, according to the ILO.", flag:false, why:"Supported: 76.2% in the ILO’s 2018 estimate."},
      " ",
      {t:"Research proves that a microloan lifts a woman’s family out of poverty.", flag:true, why:"Overstated: the 2015 randomized evaluations found modest effects and no consistent income rise."},
      " ",
      {t:"Every loan in a woman’s name is, by definition, empowerment.", flag:true, why:"Misuses the concept: in Kabeer’s terms a loan is a resource; empowerment needs agency and achievement."},
      " ",
      {t:"Goal 5 includes a target on recognizing and valuing unpaid care work.", flag:false, why:"Correct: target 5.4."},
      " ",
      {t:"We ask borrowers how decisions about the money are made at home.", flag:false, why:"Good practice: it looks for agency, not only resources."}
    ]},
    {id:"e4u17-l3-x8", type:"explain", q:"A program gives Lucía a small loan in her own name and reports that she has been “empowered”. Use Kabeer’s framework to explain why the loan alone does not show this, and what evidence you would look for.", size:"3–5 sentences", hint:"Kabeer has three dimensions. Which one is the loan?", model:"Kabeer defines empowerment as a bigger ability to make strategic life choices where this was denied before. Her framework has three dimensions: resources, agency and achievements. The loan is only a resource. If someone else, such as her husband, decides how it is spent, Lucía’s agency over money has not grown. Repaying the loan is also not the same as an achievement such as better well-being or more voice. So I would ask who decided how the money was used, who controls the income from it, whether she gained a say in decisions at home or in her community, and what Lucía herself says.", points:["Defines empowerment as the ability to make strategic life choices", "Names Kabeer’s three dimensions: resources, agency, achievements", "Identifies the loan as a resource only", "Explains that control by someone else means agency has not grown", "Names evidence to look for, such as who decides or Lucía’s own view"]}
   ],
   apply:{
    intro:"Observation and reading tasks. Be respectful: anyone you talk to can skip any question.",
    tasks:[
     {t:"A one-day time-use diary", how:[
       "For one ordinary day, note in half-hour blocks what you do: paid work, study, unpaid care and housework, rest.",
       "If someone in your household agrees, ask them to keep one too (they can stop at any time).",
       "Compare the totals and note what a GDP figure would count and miss."
     ], write:"My hours of paid work… unpaid care… What GDP would count… What it misses…"},
     {t:"Kabeer on a real program", how:[
       "Find the description of a women’s empowerment program by a government, an NGO or a development bank.",
       "Sort its activities and indicators into resources, agency and achievements.",
       "Note which dimension it measures least, and propose one better indicator."
     ], write:"Program… Resources… Agency… Achievements… Weakest dimension… Better indicator…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Has gender mainstreaming changed development, or diluted it?",
       "2. After the 2015 evaluations, is microfinance still a gender-equality tool?",
       "3. Should unpaid care be counted in GDP?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A one-day time-use diary with reflections. A program sorted with Kabeer’s framework. A seminar paragraph with a counter-argument."
   },
   read:[
    {book:"soc", where:"Chapter 12, Section 12.2 “Gender and Gender Inequality”", note:"Background on gender as a social relation, with mostly US examples."},
    {book:"eirt", where:"Chapter 8 “Feminism”", note:"How feminist IR asks “where are the women?”, the question GAD asks of development."},
    {book:"sdgr26", where:"The Goal 5 chapter", note:"The latest UN figures on gender equality and the data gaps behind them."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u17-l4", title:"Food, water and health as development", minutes:65,
   hook:{q:"In *Poverty and Famines* (1981), Amartya Sen re-examined the Bengal famine of 1943. How did he find the food supply in Bengal that year compared with earlier years?", options:["Far lower than in any year of the previous decade","Not exceptionally low: by his estimates, higher than in 1941, when there was no famine","About half the normal level","Impossible to know: no records survived"], answer:1, reveal:"**Not exceptionally low.** Sen’s estimates put the 1943 supply slightly below the average of the preceding years but above 1941, a year without famine. Millions died because wartime inflation sent food prices far above what rural laborers and artisans could earn. Famine, he argued, is about people losing the ability to command food, not only about too little food. This lesson starts there and moves to food security, water and health."},
   goals:[
     "Explain Sen’s entitlement approach to famine and the main critiques of it",
     "Use the IPC scale and the four dimensions of food security accurately",
     "Weigh the arguments of defenders and critics of the Green Revolution",
     "Describe the main debates in water governance, from the Dublin Principles to the human right to water",
     "Explain health as development, universal health coverage, and the humanitarian–development–peace nexus (the link between emergency aid, development and peace work)"
   ],
   learn:[
    {h:"Famine is not just a lack of food", body:[
      {lead:"A market full of rice, and people starving outside it. How can both be true?"},
      "Before Sen, famine was usually explained by **food availability decline**: drought or war shrinks the harvest, so people starve. In *Poverty and Famines: An Essay on Entitlement and Deprivation* (1981), {{amartya-sen|Amartya Sen}} argued that this view misses who can get the food. His [[entitlement-approach|entitlement approach]] asks what each person can command through legal means:",
      {fig:'<svg viewBox="0 0 340 356"><defs><marker id="e4u17l4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-lup" x="10" y="10" width="200" height="70" rx="8" stroke-width="2"/><text x="110" y="38" text-anchor="middle">Endowment</text><text class="s" x="110" y="58" text-anchor="middle">land, labor, livestock</text><rect class="d-gold" x="10" y="120" width="200" height="70" rx="8" stroke-width="2"/><text x="110" y="142" text-anchor="middle">Exchange</text><text class="s" x="110" y="160" text-anchor="middle">harvest, wages, prices,</text><text class="s" x="110" y="176" text-anchor="middle">trade, transfers</text><rect class="d-sage" x="10" y="230" width="200" height="70" rx="8" stroke-width="2"/><text x="110" y="252" text-anchor="middle">Entitlement</text><text class="s" x="110" y="270" text-anchor="middle">the food a household</text><text class="s" x="110" y="286" text-anchor="middle">can command</text><path class="d-ink" d="M110,82 V116" stroke-width="2" marker-end="url(#e4u17l4a)"/><path class="d-ink" d="M110,192 V226" stroke-width="2" marker-end="url(#e4u17l4a)"/><rect class="d-rose" x="228" y="96" width="104" height="40" rx="6" stroke-width="2"/><text class="s" x="280" y="112" text-anchor="middle">Drought:</text><text class="s" x="280" y="128" text-anchor="middle">own crop fails</text><rect class="d-rose" x="228" y="146" width="104" height="40" rx="6" stroke-width="2"/><text class="s" x="280" y="162" text-anchor="middle">Prices up,</text><text class="s" x="280" y="178" text-anchor="middle">wages down</text><rect class="d-sage" x="228" y="236" width="104" height="40" rx="6" stroke-width="2"/><text class="s" x="280" y="252" text-anchor="middle">Job schemes,</text><text class="s" x="280" y="268" text-anchor="middle">food aid</text><path class="d-ink" d="M226,116 H214" stroke-width="2" marker-end="url(#e4u17l4a)"/><path class="d-ink" d="M226,166 H214" stroke-width="2" marker-end="url(#e4u17l4a)"/><path class="d-ink" d="M226,256 H214" stroke-width="2" marker-end="url(#e4u17l4a)"/><text class="s" x="170" y="326" text-anchor="middle">Supply view: less food in total</text><text class="s" x="170" y="344" text-anchor="middle">Sen: some people lose command over food</text></svg>', alt:"On the left, three stacked boxes joined by arrows: endowment (land, labor, livestock), exchange (harvest, wages, prices, trade, transfers), and entitlement (the food a household can command). On the right, two shocks point at the exchange box: drought, when one’s own crop fails, and prices up with wages down. A protective box, job schemes and food aid, points at the entitlement box. Below: supply view, less food in total; Sen, some people lose command over food.", cap:"Sen’s entitlement approach. Famine can strike one group while food is still on sale."}
      ,"In Bengal in 1943, wartime inflation raised rice prices far faster than wages. Landless laborers, fishers and artisans lost their entitlement even though food was in the markets. In Bangladesh in 1974, floods destroyed jobs before they destroyed crops. The policy lesson is that famine relief can work through **incomes** (public works, cash) as well as food deliveries.",
      "That lesson shaped policy. India’s National Rural Employment Guarantee Act (2005) promises rural households up to 100 days of paid public work a year. This is a standing guarantee of exchange entitlement. Ethiopia’s Productive Safety Net Programme (2005) pays chronically food-insecure households for public works. Debates about such schemes turn on cost, corruption and whether they reach the poorest, not on the principle.",
      {ex:"**Task.** An invented case. In Norland’s eastern district the harvest is close to normal, yet feeding centers are filling. Use Sen’s entitlement approach to explain why. Then suggest a response.\n\n1. **First I check availability**, because the supply view is the obvious suspect. Markets are stocked and the harvest is near normal, so a fall in total food is not the main cause.\n2. **Then I trace one group’s exchange entitlement.** A day laborer used to earn 60 crowns a day when rice cost 12 crowns a kilo: 5 kg of rice for a day’s work. Rice now costs 36 crowns. With fewer farms hiring, wages have fallen to 45 crowns: 1.25 kg. Her command over food has fallen by three quarters.\n3. **Next I ask who is protected and who is not.** Farmers who grow their own rice keep a direct entitlement; traders gain from higher prices; landless laborers and artisans lose.\n4. **Then I match the response to the failure.** The problem is income, so relief should restore income. Use cash, or public works wages that keep pace with prices. Use food deliveries where markets stop working.\n\n**Finished paragraph:** “The eastern district faces an entitlement failure, not a supply failure: food is on sale, but laborers’ wages now buy a quarter of the rice they bought before. Relief should therefore protect incomes. One way is public works that pay enough to buy food at current prices.”\n\n**Common mistake:** concluding “there is enough food, so there is no crisis”. Sen’s point is that a crisis can hit one group while the market is full.", label:"Worked example: diagnosing a food crisis with Sen"}
    ]},
    {h:"Democracy, politics and the critics", body:[
      "Sen later argued that serious famines do not occur in working democracies with a free press. He made this case in *Development as Freedom* (1999) and, earlier with Jean Drèze, in *Hunger and Public Action* (1989). His reason is that governments facing elections and criticism have strong reasons to act. India, he noted, had no major famine after independence in 1947. China’s famine of 1959–61 happened under a government that faced neither.",
      "Critics refine rather than reject him. Stephen Devereux (“Sen’s Entitlement Approach: Critiques and Counter-critiques”, *Oxford Development Studies*, 2001) noted that it struggles with famines caused by war. There, he noted, force rather than markets destroys entitlements. Alex de Waal (*Mass Starvation*, 2018) argues that most modern famines are political: caused or prolonged by conflict, sieges and blocked aid.",
      "Today famine is classified, not declared by any one agency. The [[ipc-classification|Integrated Food Security Phase Classification (IPC)]] places areas in five phases. **Phase 5, Famine**, has three conditions. At least 20% of households face an extreme lack of food. At least 30% of children are acutely malnourished. And two people in every 10,000 die each day. An independent Famine Review Committee checks the evidence. Famine has been classified, among other cases, in Somalia (2011) and South Sudan (2017). It has also been classified in Sudan (Zamzam camp in North Darfur in August 2024, and El Fasher and Kadugli in November 2025). And it was classified in Gaza Governorate in August 2025, a finding Israel’s government rejected. After the October 2025 ceasefire and more aid access, the IPC’s December 2025 analysis no longer classified famine there. A classification describes a period, and later analyses can change it. Each case involved armed conflict, which supports de Waal’s point.",
      {ex:"**Task.** Decide whether two invented areas meet the IPC test for Phase 5, Famine.\n• Area A: 24% of households face an extreme lack of food; 21% of children are acutely malnourished; 1.1 deaths per 10,000 people a day.\n• Area B: 26% of households face an extreme lack of food; 33% of children are acutely malnourished. Fighting has prevented a mortality survey, but burial counts and clinic reports suggest deaths are very high.\n\n1. **First I write down the three thresholds**, because Famine is a measured finding. They are: at least 20% of households with an extreme lack of food, 30% of children acutely malnourished, and 2 deaths per 10,000 people a day.\n2. **Area A: I check each in turn.** Food: met. Malnutrition: not met (21%). Deaths: not met (1.1). Only one of three is met, so it is not Famine, although the area is clearly in a severe crisis.\n3. **Area B: two thresholds are met with clear data.** Deaths are not measured, but other evidence points above the threshold. IPC rules allow “Famine with reasonable evidence” when two thresholds are clearly met and the evidence suggests the third is probably met.\n4. **Finally I state what the finding means.** It describes an area over a period of time. The Famine Review Committee checks it. A later analysis can change it.\n\n**Finished sentence:** “On these figures Area B would meet the IPC test for Famine with reasonable evidence. Area A would not, despite widespread hunger.”\n\n**Common mistake:** using “famine” loosely for any severe hunger. In the IPC it is a threshold test, and missing data can delay a classification even when people are dying.", label:"Worked example: applying the IPC famine test"}
    ]},
    {h:"Food security and food sovereignty", body:[
      "The 1996 World Food Summit defined [[food-security|food security]]. It exists, in this definition, when all people, at all times, have physical and economic access to sufficient, safe and nutritious food for an active and healthy life. Analysts break it into four dimensions: **availability**, **access** (Sen’s question), **utilization** (nutrition, clean water, health) and **stability** over time.",
      "The UN’s 2026 report estimates that **645 million people** (7.8% of the world) were chronically undernourished in 2025. It estimates that **2.1 billion** faced moderate or severe food insecurity, 527 million more than in 2015.",
      "Farmers’ movements answer with a rival frame. The international peasant movement La Vía Campesina put forward [[food-sovereignty|food sovereignty]] in 1996. It is the right of peoples to define their own food and farming policies. It challenges trade liberalization in agriculture (see Unit 16 on the WTO) and large agribusiness. It is often set against “food security”, which says nothing about who produces the food."
    ]},
    {h:"The Green Revolution and its critics", body:[
      "From the mid-1960s, new [[high-yielding-variety|high-yielding varieties]] of wheat and rice spread across South and Southeast Asia and Latin America. Norman Borlaug’s team in Mexico bred the wheat. The rice included IR8, released by the International Rice Research Institute in the Philippines in 1966. Farmers grew them with fertilizer and irrigation. A US aid official named it the [[green-revolution|Green Revolution]] in 1968. Borlaug won the Nobel Peace Prize in 1970.",
      {table:[
        ["","Defenders","Critics"],
        ["Key voice","Prabhu Pingali, *PNAS* (2012)","Vandana Shiva, *The Violence of the Green Revolution* (1991)"],
        ["Food and poverty","Higher yields, lower food prices, less poverty, less land cleared","Benefits went first to larger farmers with water and credit"],
        ["Environment","Spared land that would otherwise have been ploughed","Falling groundwater, soil damage, lost crop diversity"],
        ["Lesson","Science and public investment work","Input-heavy models create dependence"]
      ]},
      "Most researchers now accept parts of both columns. They accept large gains in output and poverty reduction, and also real environmental costs, such as falling water tables in north-west India. A live debate asks why sub-Saharan Africa had no comparable revolution. It also asks whether foundation-backed programs such as the Alliance for a Green Revolution in Africa (founded 2006) repeat the model or adapt it."
    ]},
    {h:"Water governance", body:[
      "Goal 6 shows real progress. Between 2015 and 2024, the share of people using safely managed drinking water rose from 68% to 74%, safely managed sanitation from 48% to 58%, and basic hygiene from 66% to 80%. Even so, about **2.1 billion people** still lack safely managed drinking water. Practitioners call the field [[wash|WASH]] (water, sanitation and hygiene).",
      "The governance debate turns on what water is. The **Dublin Statement** (1992) said water has an economic value and should be recognized as an economic good, which supported pricing and private concessions. When a privatized concession in Cochabamba, Bolivia, raised bills in 2000, mass protests forced it out, and the case became a symbol for critics of privatization. In 2010 the General Assembly recognized a [[human-right-to-water|human right to water and sanitation]] (resolution 64/292), adopted by vote with a large group of abstentions.",
      "Most experts now favor [[iwrm|integrated water resources management]], which coordinates water, land and users across a whole basin. Many draw on Ostrom’s work on commons (see {{commons-governance}} in Unit 17). Shared rivers such as the Mekong (Unit 12) show the international side. On low-lying Pacific atolls, such as those of Kiribati and Tuvalu, households rely on rainwater and thin lenses of fresh groundwater. Drought and seawater can spoil these, so water security there is also climate adaptation (Unit 17)."
    ]},
    {h:"Health as development, and the nexus", body:[
      "The Alma-Ata Declaration (1978) made [[primary-health-care|primary health care]] the route to “health for all”. In the MDG era, money flowed instead to **vertical** programs for single diseases, through new funds such as the Global Fund and Gavi (Unit 13). These saved many lives. But, critics argued, they left general health systems weak. The SDGs returned to systems through target 3.8 on [[universal-health-coverage|universal health coverage]]. The UN’s 2026 report finds the coverage index up only from 68 to 71 between 2015 and 2023, with 4.6 billion people lacking essential services. Middle-income countries offer contrasting routes. Thailand’s universal coverage scheme was launched in 2001–02 and is financed mainly from taxes. It is often cited as an example of reaching near-universal coverage before becoming rich.",
      "Famine, cholera and displacement fall between emergency aid and long-term development. At the World Humanitarian Summit (Istanbul, 2016), donors and agencies signed the [[grand-bargain|Grand Bargain]]. It included a promise to work more closely across that divide. In February 2019 the OECD’s development committee adopted a Recommendation on the [[hdp-nexus|humanitarian–development–peace nexus]]. It asks for joint analysis, joint programming and multi-year financing.",
      "Supporters say crises last for years, so separating emergency relief from development wastes money. Critics, including some humanitarian NGOs, warn that working with governments on development can compromise **neutrality and independence**. In their view, these are what give humanitarians access in wars where the government is a party.",
      {h:"Common misconceptions"},
      {list:[
        "“Famine means there is no food.” Often food is on sale; some groups cannot get it.",
        "“The Green Revolution was simply good” or “simply bad”. The evidence shows large gains and real costs.",
        "“Water privatization always fails” or “always works”. Outcomes depend on regulation, contracts and capacity.",
        "“Health aid means building hospitals.” Most gains come from primary care, vaccines, clean water and sanitation."
      ]},
      {terms:["entitlement-approach","ipc-classification","food-security","food-sovereignty","green-revolution","high-yielding-variety","wash","human-right-to-water","iwrm","primary-health-care","universal-health-coverage","grand-bargain","hdp-nexus"]}
    ]}
   ],
   try:[
    {id:"e4u17-l4-x1", type:"mcq", q:"A drought hits a farming region. Food prices in the regional market stay stable because traders bring grain from elsewhere, but landless laborers lose their farm jobs and begin to starve. What does Sen’s approach say?", options:[
      {t:"An entitlement failure: they lost the wages they used to buy food", ok:true, why:"Right, even though food was available. Their endowment (labor) could no longer be exchanged for food. Public works or cash transfers would restore entitlements."},
      {t:"It cannot be a famine, because food is still on sale", why:"That is the food availability view Sen criticized."},
      {t:"The cause is overpopulation", why:"Nothing in the case concerns population; the mechanism is lost wages."},
      {t:"Only food aid can help, because the markets in the region have failed", why:"Markets supplied food; the problem is purchasing power, so income support can work."}
    ]},
    {id:"e4u17-l4-x2", type:"sort", q:"Which dimension of food security does each problem mainly concern?", buckets:["Availability","Access","Utilization","Stability"], items:[
      {t:"A national harvest falls by a third", b:0, why:"Less food is produced: availability."},
      {t:"Food is in the shops, but a family’s income has collapsed", b:1, why:"Economic access: Sen’s central question."},
      {t:"Children eat enough calories but suffer from diarrhoea from unsafe water", b:2, why:"The body cannot use the food well: utilization."},
      {t:"Every few years a price spike pushes households into hunger", b:3, why:"Food security varies over time: stability."},
      {t:"A remote village has no road, so its people cannot reach the nearest market", b:1, why:"Physical access: the food exists, but people cannot get to it."}
    ]},
    {id:"e4u17-l4-x3", type:"mcq", q:"Which statement about the IPC is accurate?", options:[
      {t:"Phase 5 needs thresholds for food gaps, malnutrition and deaths", ok:true, why:"Right: at least 20% of households with extreme food gaps, 30% of children acutely malnourished, and two deaths per 10,000 people a day. An independent review committee checks the finding."},
      {t:"Famine is declared by the UN Secretary-General", why:"No single agency declares famine; it is classified through the IPC process."},
      {t:"Famine is defined as any national harvest that falls below the average", why:"The IPC uses household, nutrition and mortality evidence, not harvest size."},
      {t:"The IPC has never classified famine since it began", why:"It has classified famine several times, for example in Somalia (2011), South Sudan (2017), parts of Sudan (2024 and 2025) and Gaza Governorate (2025)."}
    ]},
    {id:"e4u17-l4-x4", type:"sort", q:"Is each claim one that **defenders** or **critics** of the Green Revolution typically make?", buckets:["Defenders","Critics"], items:[
      {t:"Higher yields lowered food prices for poor consumers", b:0, why:"A central defense (Pingali 2012)."},
      {t:"It replaced diverse local varieties with a few uniform ones", b:1, why:"A critique of lost biodiversity (Shiva 1991)."},
      {t:"It spared forests and grasslands that would otherwise have been ploughed", b:0, why:"The land-sparing argument."},
      {t:"It drained groundwater through heavy irrigation", b:1, why:"An environmental critique, for example in north-west India."},
      {t:"Larger farmers with credit and water gained first", b:1, why:"A distributional critique."}
    ]},
    {id:"e4u17-l4-x5", type:"match", q:"Match each document or event to what it did.", pairs:[
      ["Dublin Statement (1992)","Said water should be recognized as an economic good","Used to justify pricing and private concessions."],
      ["Resolution 64/292 (2010)","Recognized a human right to water and sanitation","Adopted by vote in the General Assembly."],
      ["Alma-Ata Declaration (1978)","Made primary health care the route to “health for all”","The foundation of the systems approach."],
      ["Grand Bargain (2016)","Committed donors and agencies to reforms, including more funding for local responders","Signed at the World Humanitarian Summit in Istanbul."],
      ["La Vía Campesina (1996)","Put forward food sovereignty","A rival frame to food security."]
    ]},
    {id:"e4u17-l4-x6", type:"mcq", q:"Why are some humanitarian NGOs worried about the humanitarian–development–peace nexus?", options:[
      {t:"Working with a warring government can compromise their neutrality", ok:true, why:"Right, and their independence. Access in conflict depends on being seen as neutral; development work usually goes through the state."},
      {t:"They think crises are always short, so long-term planning is unnecessary", why:"Most agree crises are often protracted; the worry is about principles, not duration."},
      {t:"The nexus bans humanitarian aid in conflict zones", why:"It does no such thing; it seeks coordination."},
      {t:"It moves all humanitarian funding to development banks", why:"The Grand Bargain itself says the aim is not to shift funding but to work across boundaries."}
    ]},
    {id:"e4u17-l4-x7", type:"spot", q:"A seminar handout on food and water. Tap each **error**.", ask:"error", parts:[
      {t:"Sen argued that famines can occur even when food availability has not fallen much.", flag:false, why:"Correct: the core of the entitlement approach."},
      " ",
      {t:"The Green Revolution began in sub-Saharan Africa in the 1940s.", flag:true, why:"Wrong: it spread mainly across South and Southeast Asia and Latin America from the mid-1960s, and Africa’s lack of one is a debate in itself."},
      " ",
      {t:"About 2.1 billion people still lack safely managed drinking water, according to the UN’s 2026 report.", flag:false, why:"Correct."},
      " ",
      {t:"Food sovereignty and food security mean the same thing.", flag:true, why:"Wrong: food sovereignty is about who controls food and farming policy, a rival frame to food security."},
      " ",
      {t:"Universal health coverage is SDG target 3.8.", flag:false, why:"Correct."}
    ]},
    {id:"e4u17-l4-x8", type:"explain", q:"Explain to a friend how people can starve while the markets are full of food, using Sen’s entitlement approach. What does this mean for famine relief, and what do critics such as de Waal add?", size:"3–5 sentences", hint:"Ask not how much food there is, but what each person can command with what they have.", model:"Before Sen, people usually explained famine by a fall in the food supply. Sen asked instead what each person can command by legal means. This means what they own, such as land or their labor, and what they can get for it through wages, prices, trade or transfers. If food prices rise much faster than wages, landless laborers lose their command over food even while it is on sale, as in Bengal in 1943. So relief can work through incomes, such as cash or public works that pay enough to buy food. Critics such as de Waal add that most modern famines are political, caused or prolonged by conflict.", points:["Contrasts the food-supply view with Sen’s entitlement approach", "Explains entitlement: what a person owns and can exchange for food", "Gives an example of prices rising faster than wages, such as Bengal 1943", "Draws the relief lesson: protect incomes, not only deliver food", "Adds de Waal’s point that modern famines are mostly political"]}
   ],
   apply:{
    intro:"Analysis tasks with free official sources.",
    tasks:[
     {t:"Read an IPC analysis", how:[
       "Open the IPC website (ipcinfo.org) and choose a recent country analysis.",
       "Note the phases reported, the population in each, and the drivers named (conflict, prices, weather, disease).",
       "Write three sentences on which of Sen’s and de Waal’s explanations fits better, and why."
     ], write:"Country and date… Phases and numbers… Drivers… Sen or de Waal…"},
     {t:"Map one water or health system", how:[
       "Choose a city or district with data you can find. Sources include the WHO/UNICEF Joint Monitoring Programme, a national statistics office or a utility report.",
       "Note who supplies water or primary health care, who pays, and who is left out.",
       "Classify the arrangement: public, private, community or mixed."
     ], write:"Place… Supplier… Who pays… Who is left out… Type…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Does Sen’s link between democracy and famine still hold for famines caused by war?",
       "2. Was the Green Revolution a model to repeat in Africa, or a warning?",
       "3. Should humanitarian agencies join the nexus, or stay apart?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one IPC analysis read through Sen and de Waal, a map of one water or health system, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sdgr26", where:"The Goal 2, Goal 3 and Goal 6 chapters", note:"The latest figures on hunger, health coverage and water."},
    {book:"soc", where:"Sections 19.1 “The Social Construction of Health”, 19.2 “Global Health”, 19.4 “Comparative Health and Medicine” and 19.5 “Theoretical Perspectives on Health and Medicine”", note:"Background on health as a social and global issue."},
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth”", note:"Short background on poverty and hunger in IR."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u17-l5", title:"Doing development work and research", minutes:65,
   hook:{q:"In 2019 the OECD’s Development Assistance Committee revised the criteria that most aid agencies use to evaluate projects. It added one new criterion to the five it had used since 1991. Which one?", options:["Coherence","Equity","Participation","Innovation"], answer:0, reveal:"**Coherence**: how well an intervention fits with other policies and programs in the same place. These include the donor’s own trade or migration policies. The six criteria are now relevance, coherence, effectiveness, efficiency, impact and sustainability. This lesson walks through how development projects are designed, evaluated and criticized, and closes the cluster on sustainable development."},
   goals:[
     "Describe the project cycle and read or build a logframe",
     "Use the six OECD-DAC evaluation criteria and match evaluation methods to questions",
     "Explain participation and localization, and the main critiques of each",
     "Apply “do no harm”, safeguarding and research ethics to work in another country",
     "Plan a development policy brief",
     "Connect the four units of the sustainable development cluster"
   ],
   learn:[
    {h:"The project cycle", body:[
      {lead:"Most development money is spent through projects: a well-defined set of activities, with a budget, a schedule and a promise of results."},
      "Almost every agency, from development banks to small NGOs, uses a version of the [[project-cycle|project cycle]]:",
      {fig:'<svg viewBox="0 0 340 310"><defs><marker id="e4u17l5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-lup" x="108" y="8" width="124" height="46" rx="8" stroke-width="2"/><text x="170" y="27" text-anchor="middle">Identify</text><text class="s" x="170" y="44" text-anchor="middle">problem, context</text><rect class="d-lup" x="208" y="80" width="124" height="46" rx="8" stroke-width="2"/><text x="270" y="99" text-anchor="middle">Design</text><text class="s" x="270" y="116" text-anchor="middle">logframe, checks</text><rect class="d-gold" x="208" y="190" width="124" height="46" rx="8" stroke-width="2"/><text x="270" y="209" text-anchor="middle">Approve</text><text class="s" x="270" y="226" text-anchor="middle">budget, financing</text><rect class="d-gold" x="108" y="256" width="124" height="46" rx="8" stroke-width="2"/><text x="170" y="275" text-anchor="middle">Implement</text><text class="s" x="170" y="292" text-anchor="middle">with partners</text><rect class="d-sage" x="8" y="190" width="124" height="46" rx="8" stroke-width="2"/><text x="70" y="209" text-anchor="middle">Monitor</text><text class="s" x="70" y="226" text-anchor="middle">indicators, risks</text><rect class="d-sage" x="8" y="80" width="124" height="46" rx="8" stroke-width="2"/><text x="70" y="99" text-anchor="middle">Evaluate</text><text class="s" x="70" y="116" text-anchor="middle">DAC criteria</text><path class="d-ink" d="M234,40 L262,76" stroke-width="2" marker-end="url(#e4u17l5a)"/><path class="d-ink" d="M270,128 V186" stroke-width="2" marker-end="url(#e4u17l5a)"/><path class="d-ink" d="M262,238 L234,264" stroke-width="2" marker-end="url(#e4u17l5a)"/><path class="d-ink" d="M106,264 L78,238" stroke-width="2" marker-end="url(#e4u17l5a)"/><path class="d-ink" d="M70,188 V130" stroke-width="2" marker-end="url(#e4u17l5a)"/><path class="d-ink" d="M78,76 L106,40" stroke-width="2" marker-end="url(#e4u17l5a)"/><text x="170" y="150" text-anchor="middle">Lessons feed</text><text x="170" y="170" text-anchor="middle">the next project</text></svg>', alt:"A cycle of six boxes joined by arrows: identify (problem, context), design (logframe, checks), approve (budget, financing), implement (with partners), monitor (indicators, risks), evaluate (DAC criteria), and back to identify. In the center: lessons feed the next project.", cap:"The project cycle. In practice the stages overlap, and the loop from evaluation back to design is the one most often broken."}
      ,"The cycle looks neutral, but each stage has politics: who identifies the problem, whose knowledge counts in design, and who reads the evaluation."
    ]},
    {h:"Logframes and theories of change", body:[
      "The classic design tool is the [[logical-framework|logical framework (logframe)]], drawn up in 1969–70 by Leon Rosenberg and colleagues for the US Agency for International Development. Many other donors later adopted it, in versions such as Germany’s ZOPP. It is a four-by-four matrix. Here is a cut-down example for a rural water project:",
      {table:[
        ["Level","Summary","Indicator (verified by)","Assumption"],
        ["Goal","Better child health in the district","Diarrhoea cases fall (clinic records)","No major epidemic"],
        ["Purpose","Households use safe water","Share using safe water (survey)","Water is affordable"],
        ["Outputs","Wells built; committees trained","40 wells working (site visits)","Groundwater holds up"],
        ["Activities","Drill wells; train committees","Budget spent on time (accounts)","Permits granted"]
      ]},
      "Read it from the bottom: **if** the activities happen **and** the assumptions hold, **then** the outputs follow, and so on up. The assumptions column is the most important and the most neglected.",
      "Des Gasper (“Evaluating the ‘Logical Framework Approach’ toward Learning-oriented Development Evaluation”, *Public Administration and Development*, 2000) listed the critiques. They include the “lock-frame” that is frozen at approval, “tunnel vision” that ignores side effects, box-filling, and donors who force the format on partners. Many agencies now pair logframes with a [[theory-of-change|theory of change]] (Unit 8). It maps the causal pathways and assumptions more flexibly. Both belong to wider [[results-based-management|results-based management]]."
    ]},
    {h:"Evaluation: criteria and methods", body:[
      "The OECD’s Development Assistance Committee first set out evaluation criteria in 1991 and revised them in 2019. The six [[dac-criteria|DAC criteria]] each ask one question:",
      {table:[
        ["Criterion","Question"],
        ["Relevance","Is the intervention doing the right things?"],
        ["Coherence","How well does it fit with other interventions and policies?"],
        ["Effectiveness","Is it achieving its objectives?"],
        ["Efficiency","How well are resources being used?"],
        ["Impact","What difference does it make?"],
        ["Sustainability","Will the benefits last?"]
      ]},
      "The DAC adds two principles: apply the criteria **thoughtfully**, and **not mechanistically**. An evaluation need not cover all six.",
      "Methods follow the question. [[formative-summative-evaluation|Formative evaluations]] help improve a project while it runs; summative ones judge it at the end. Impact questions need a [[counterfactual]], often from a randomized trial or a quasi-experiment (see {{development-rcts}} in Unit 15 and {{regression-causal-inference}} in Unit 3). Ray Pawson and Nick Tilley’s *Realistic Evaluation* (1997) argued that the better question is “what works, for whom, in what circumstances, and why?” That question usually needs qualitative evidence as well, which is a case for {{mixed-methods|mixed methods}}."
    ]},
    {h:"Participation and localization", body:[
      "Robert Chambers’s *Rural Development: Putting the Last First* (1983) attacked “rural development tourism”. On these brief visits, he argued, experts saw villages near roads, in the dry season, and met mostly men and the better-off. So the poorest stayed unseen. In that book and in *Whose Reality Counts?* (1997) he championed {{participation-localisation|participatory}} methods. In [[participatory-rural-appraisal|participatory rural appraisal]], villagers draw their own maps, seasonal calendars and wealth rankings, so outsiders learn from them.",
      "Participation became official policy. Then it became the target of a famous critique. Bill Cooke and Uma Kothari’s edited book *Participation: The New Tyranny?* (2001) argued that participatory exercises can make decisions already taken look legitimate. They can let local elites speak for everyone. They can also hide power behind a language of consensus. James Ferguson’s idea of the [[anti-politics-machine|anti-politics machine]] (Unit 15) makes a similar point about development as a whole.",
      "The newer debate is about [[aid-localisation|localization]]: shifting money and decisions to local and national organizations. In the Grand Bargain (2016), donors and agencies committed to give at least 25% of humanitarian funding to local and national responders “as directly as possible” by 2020. Independent reviews have reported that direct funding stayed far below that level. Movements to “shift the power” and “decolonize aid” argue that the barriers are structural, from risk rules to the language of reports. Skeptics stress accountability for public money. Unit 12’s [[local-turn|local turn]] in peacebuilding is the same argument in another field."
    ]},
    {h:"Ethics of working in other countries", body:[
      "Mary B. Anderson’s *Do No Harm: How Aid Can Support Peace — or War* (1999) showed that aid entering a conflict becomes part of it. In her account, goods can be stolen to feed fighters. Hiring from one group can deepen divisions, and working through warlords can lend them legitimacy. She asked agencies to map **dividers** and **connectors** in every context. Research ethics uses the same phrase, [[do-no-harm|do no harm]], for a related principle (Unit 3).",
      "After a series of scandals, agencies adopted [[safeguarding-aid|safeguarding]] policies to prevent sexual exploitation and abuse by their own staff. The scandals are a reminder that power gaps between aid workers and recipients are large.",
      "For researchers and volunteers the practical rules are the ones from {{fieldwork-ethics}}. Get local ethics approval and permits. Protect data. Obtain [[informed-consent|informed consent]] in the local language. Think about your [[positionality|positionality]]. Pay and credit local partners as co-researchers rather than as “fixers”. And be wary of short-term volunteering that does work local people could be paid to do."
    ]},
    {h:"Writing a development policy brief", body:[
      "Unit 8 set out the structure of a [[policy-brief|policy brief]] (see {{writing-a-policy-brief}}). Development briefs add four habits:",
      {ol:[
        "**Name the decision and the decision-maker**: a ministry, a donor’s country office, an NGO board.",
        "**Grade the evidence and its context**: a trial in one country may not transfer ([[external-validity|external validity]]).",
        "**Show costs and distribution**: cost per person reached, and who gains or loses, by gender, place and income.",
        "**Test feasibility**: who must implement it, and who might block it."
      ]},
      {ex:"Title: Cash first? Responding to rising food prices in the northern districts\nKey messages:\n• Food is available in local markets, but laborers’ wages have fallen behind prices: an entitlement problem.\n• Evidence from several countries suggests cash transfers can reach people faster and more cheaply than food deliveries where markets work. Results vary.\n• We recommend cash through existing mobile-money agents, with food deliveries where markets fail, and monthly price monitoring.", label:"Worked example: the opening of a brief"},
      {ex:"**Task.** An invented case. Norland’s Ministry of Education must decide by March whether to extend a school-meals pilot from 40 to 400 rural schools. Draft the opening of a brief using the four habits.\n\n1. **First I name the decision and who makes it**, because a brief addressed to “the government” advises no one: the Minister, before the March budget round.\n2. **Then I grade the evidence.** The pilot was randomized. Attendance rose by 6 percentage points compared with similar schools without meals. That is strong evidence for those 40 schools. But they were all near roads and markets, so the result may not hold in remote schools ([[external-validity|external validity]]).\n3. **Next I show costs and who gains.** Meals cost about 25 crowns per student per school day. The largest gains in attendance were among girls and the poorest households.\n4. **Then I test feasibility.** Remote schools lack kitchens and reliable supply roads. The farmers’ union backs buying food locally. The finance ministry worries about a cost that comes back every year.\n5. **Finally I write a recommendation that follows from steps 1–4**, not from enthusiasm for the pilot.\n\n**Finished opening:**\n“Recommendation: extend school meals to 150 schools in 2027, including 50 remote schools, and evaluate before going further.\n• In the pilot, attendance rose by 6 percentage points, most for girls.\n• Remote schools differ from the pilot schools, so the gain may be smaller there.\n• Cost: about 25 crowns per student per day; buying from local farmers spreads the benefit.”\n\n**Common mistake:** recommending the full scale-up because the pilot “worked”. A good brief says where the evidence stops.", label:"Worked example: writing a brief step by step"}
    ]},
    {h:"Synthesis: the sustainable development cluster", body:[
      "This unit closes the four-unit cluster. Each unit took one angle on the same question: how can people everywhere live better lives within the planet’s limits, and who decides?",
      {fig:'<svg viewBox="0 0 340 362"><rect class="d-lup" x="8" y="10" width="156" height="100" rx="8" stroke-width="2"/><text class="s" x="86" y="32" text-anchor="middle">Unit 15</text><text x="86" y="54" text-anchor="middle">Ideas, measures</text><text class="s" x="86" y="76" text-anchor="middle">growth, capabilities,</text><text class="s" x="86" y="92" text-anchor="middle">aid, institutions</text><rect class="d-gold" x="176" y="10" width="156" height="100" rx="8" stroke-width="2"/><text class="s" x="254" y="32" text-anchor="middle">Unit 16</text><text x="254" y="54" text-anchor="middle">Trade, money, debt</text><text class="s" x="254" y="76" text-anchor="middle">who pays, on</text><text class="s" x="254" y="92" text-anchor="middle">what terms</text><rect class="d-sage" x="8" y="120" width="156" height="100" rx="8" stroke-width="2"/><text class="s" x="86" y="142" text-anchor="middle">Unit 17</text><text x="86" y="164" text-anchor="middle">Planet, climate</text><text class="s" x="86" y="186" text-anchor="middle">limits, justice,</text><text class="s" x="86" y="202" text-anchor="middle">energy transition</text><rect class="d-rose" x="176" y="120" width="156" height="100" rx="8" stroke-width="2"/><text class="s" x="254" y="142" text-anchor="middle">Unit 18</text><text x="254" y="164" text-anchor="middle">Goals, practice</text><text class="s" x="254" y="186" text-anchor="middle">SDGs, gender, food,</text><text class="s" x="254" y="202" text-anchor="middle">projects</text><rect class="d-panel" x="8" y="234" width="324" height="120" rx="8" stroke-width="2"/><text x="170" y="258" text-anchor="middle">Debates across all four</text><text class="s" x="24" y="282">1 Growth, or limits to growth?</text><text class="s" x="24" y="302">2 States, markets or communities?</text><text class="s" x="24" y="322">3 Who decides, and who pays?</text><text class="s" x="24" y="342">4 What counts as evidence?</text></svg>', alt:"Four boxes in a grid. Unit 15: ideas and measures, growth, capabilities, aid and institutions. Unit 16: trade, money and debt, who pays and on what terms. Unit 17: planet and climate, limits, justice and the energy transition. Unit 18: goals and practice, the SDGs, gender, food and projects. Below, a panel lists four debates across all four units: growth or limits to growth; states, markets or communities; who decides and who pays; what counts as evidence.", cap:"One cluster, four angles, four debates that run through all of them."}
      ,{list:[
        "**Growth or limits?** Sen’s capabilities and the HDI (Unit 15), [[planetary-boundaries|planetary boundaries]] (Unit 17) and the tension inside the SDGs between target 8.1 and Goals 12–13 (Lesson 1).",
        "**States, markets or communities?** The developmental state and the Washington Consensus (Unit 15), value chains and debt (Unit 16), Ostrom’s commons (Unit 17), water concessions and microfinance (Lessons 3–4).",
        "**Who decides and who pays?** See country ownership and new donors (Unit 15), voice in the IMF and debt talks (Unit 16), common but differentiated responsibilities and climate finance (Unit 17), and the Open Working Group and localization (this unit).",
        "**What counts as evidence?** Poverty lines and randomized trials (Unit 15), IPCC assessments (Unit 17), SDG indicators, the IPC and the DAC criteria (this unit)."
      ]},
      {key:"A strong seminar argument on development names which of these debates it joins, uses evidence from more than one unit, and says honestly what its evidence cannot show."},
      {h:"Common misconceptions about development practice"},
      {list:[
        "“A completed logframe proves the project works.” It states a hypothesis; only monitoring and evaluation test it.",
        "“Participation is always empowering.” It can be captured by local elites (Cooke and Kothari).",
        "“Local organizations are neutral.” They have their own politics, which is a reason to understand them, not to bypass them.",
        "“Randomized trials answer every question.” They answer some impact questions well and say less about why, for whom and at what scale."
      ]},
      {terms:["project-cycle","logical-framework","results-based-management","dac-criteria","formative-summative-evaluation","participatory-rural-appraisal","aid-localisation","safeguarding-aid"]}
    ]}
   ],
   try:[
    {id:"e4u17-l5-x1", type:"order", q:"Put the project cycle in order, starting from the first step.", items:[
      {t:"Identify the problem and its context", why:"Everything starts with whose problem, defined by whom."},
      {t:"Design the project, often with a logframe, and appraise it", why:"Design sets objectives, indicators and assumptions."},
      {t:"Approve the budget and financing", why:"A board or ministry signs off."},
      {t:"Implement with partners", why:"Activities happen."},
      {t:"Monitor indicators and risks", why:"Monitoring runs alongside implementation."},
      {t:"Evaluate, and feed lessons into the next project", why:"The step most often skipped or ignored."}
    ]},
    {id:"e4u17-l5-x2", type:"match", q:"A school-meals project. Match each logframe entry to its row or column.", pairs:[
      ["Goal","Better learning outcomes in the region","The long-term change the project contributes to."],
      ["Purpose","Children attend school regularly and eat a daily meal","The change the project itself is responsible for."],
      ["Output","Kitchens running in 60 schools","What the project delivers."],
      ["Activity","Buy food from local farmers; train cooks","What the project does."],
      ["Assumption","Food prices stay within the budget","A condition outside the project’s control that must hold."]
    ]},
    {id:"e4u17-l5-x3", type:"match", q:"Match each evaluation question to the DAC criterion it belongs to.", pairs:[
      ["Did the clinics still run two years after funding ended?","Sustainability","Will the benefits last?"],
      ["Did the project fit with the health ministry’s own program and other donors’ work?","Coherence","The criterion added in 2019."],
      ["Could the same results have been reached at lower cost?","Efficiency","How well resources were used."],
      ["Did child mortality fall because of the project?","Impact","What difference it made, which needs a counterfactual."],
      ["Did the project address what communities saw as their main need?","Relevance","Doing the right things."]
    ]},
    {id:"e4u17-l5-x4", type:"mcq", q:"At a participatory village meeting, the headman and two large landowners do most of the talking, and the plan agreed matches what the donor proposed beforehand. Which critique does this illustrate?", options:[
      {t:"Cooke and Kothari’s “new tyranny”", ok:true, why:"Right. Participation can legitimize decisions already made and let local elites speak for everyone; both features of “the new tyranny” appear here."},
      {t:"Chambers’s critique of rural development tourism", why:"Chambers criticized experts who never listened; here a meeting happened, but it was captured."},
      {t:"Anderson’s critique of aid feeding war", why:"There is no conflict dynamic in the case."},
      {t:"Gasper’s critique of the lock-frame", why:"That concerns rigid matrices, not who speaks in meetings."}
    ]},
    {id:"e4u17-l5-x5", type:"mcq", q:"In a district split between two communities, an agency hands out food only through the leaders of one of them, and hires all its drivers from that group. What would Anderson’s “do no harm” analysis say?", options:[
      {t:"The aid is acting as a divider and should be redesigned", ok:true, why:"Right: it may deepen grievances, so it should be redesigned to work across both groups. Anderson asks agencies to spot how distributions and hiring map onto conflict lines."},
      {t:"It is fine as long as the food reaches hungry people in the district", why:"Delivery is necessary but not enough; the side effects on the conflict matter."},
      {t:"The agency should stop all aid immediately", why:"Anderson’s approach is to redesign, not automatically to withdraw."},
      {t:"It is a question of efficiency only", why:"Efficiency does not capture the conflict effects."}
    ]},
    {id:"e4u17-l5-x6", type:"sort", q:"Does each practice **advance** localization or **work against** it?", buckets:["Advances localization","Works against it"], items:[
      {t:"Multi-year funding given directly to a local women’s organization", b:0, why:"Direct, predictable funding is the core of localization."},
      {t:"A local NGO used only as a subcontractor to carry out an international agency’s design", b:1, why:"Money passes through, but decisions stay outside."},
      {t:"Covering local partners’ overhead costs, not only project costs", b:0, why:"Lets local organizations build their own capacity."},
      {t:"Reports and meetings only in a language local partners do not use", b:1, why:"A structural barrier to local leadership."},
      {t:"Local staff in senior decision-making roles", b:0, why:"Shifts decision power."},
      {t:"Risk rules that only large international bodies can meet", b:1, why:"A common reason funding does not flow directly."}
    ]},
    {id:"e4u17-l5-x7", type:"spot", q:"A draft development policy brief. Tap each sentence that **weakens** it.", ask:"weakens it", parts:[
      {t:"This brief advises the health ministry on whether to fund community health workers in two provinces.", flag:false, why:"Good: it names the decision and the reader."},
      " ",
      {t:"A trial in one country proved this works everywhere.", flag:true, why:"Overclaims: one trial cannot show it works everywhere (external validity)."},
      " ",
      {t:"Cost per person reached is estimated from the pilot budget.", flag:false, why:"Good: costs make options comparable."},
      " ",
      {t:"Everyone will benefit equally, so distribution need not be discussed.", flag:true, why:"Weak: development briefs should show who gains and who may lose."},
      " ",
      {t:"The main risk is that trained workers leave for cities; we propose a retention allowance.", flag:false, why:"Good: names a risk and a response."}
    ]},
    {id:"e4u17-l5-x8", type:"explain", q:"Explain why Robert Chambers championed participatory methods in development, and what Cooke and Kothari warned could go wrong with them.", size:"3–4 sentences", hint:"Who did visiting experts usually meet, and who did they miss?", model:"Chambers attacked “rural development tourism”. This means brief expert visits to villages near roads, in the dry season, where experts meet mostly men and the better-off, so the poorest stay unseen. He supported participatory methods, such as villagers drawing their own maps, seasonal calendars and wealth rankings, so that outsiders learn from them. Cooke and Kothari’s book *Participation: The New Tyranny?* (2001) warned that participatory exercises can make decisions already taken look legitimate. They can let local elites speak for everyone. They can also hide power behind a language of consensus. So participation is not automatically empowering: it depends on who speaks and who decides.", points:["Explains Chambers’s critique of brief expert visits that miss the poorest", "Gives an example of a participatory method", "Gives Cooke and Kothari’s warning about decisions already taken or elite capture", "Concludes that participation depends on who speaks and who decides"]}
   ],
   apply:{
    intro:"Practical design and evaluation tasks, then the closing synthesis.",
    tasks:[
     {t:"Build a mini logframe", how:[
       "Pick a real or imagined project you know about (a community library, a clinic, a cooperative).",
       "Fill in a four-row logframe: goal, purpose, outputs, activities, each with an indicator, a source and an assumption.",
       "Underline the weakest assumption and say how you would monitor it."
     ], write:"Goal… Purpose… Outputs… Activities… Indicators and sources… Assumptions… Weakest assumption…"},
     {t:"Read a real evaluation", how:[
       "Find a published evaluation from a development agency’s evaluation office or from an NGO. Most publish summaries online.",
       "Note which DAC criteria it uses, which methods, and whether it has a counterfactual.",
       "Write two sentences on what it can and cannot show."
     ], write:"Evaluation… Criteria used… Methods… Counterfactual?… What it can and cannot show…"},
     {t:"Seminar questions for the whole cluster", how:[
       "Choose one and write 200–300 words, drawing on at least two of Units 15–18.",
       "1. Is “sustainable development” a coherent goal, or a compromise between growth and limits?",
       "2. Who should decide development priorities? National governments, donors, communities or global bodies?",
       "3. What kind of evidence should count most in development policy, and what does each kind miss?"
     ], write:"My question… Units I draw on… My position… Evidence… Counter-argument…"}
    ],
    proof:"A mini logframe with its weakest assumption marked. Notes on one real evaluation. A seminar paragraph that links several units, with a counter-argument."
   },
   read:[
    {book:"bhatt", where:"Chapter 10, “Experimental Research”, and Chapter 16, “Research Ethics”", note:"Background on experiments and research ethics, the foundations of impact evaluation and ethical fieldwork."},
    {book:"sdgr26", where:"The Goal 17 chapter", note:"Aid, finance and statistical capacity: the means of implementation behind every project."},
    {book:"eir", where:"Chapter 7 “Global Civil Society”", note:"Background on NGOs and civil society, the actors in much development practice."}
   ]
  }
  ],
  checkpoint:["e4u17-q02","e4u17-q06","e4u17-q11","e4u17-q14","e4u17-q17","e4u17-q21","e4u17-q24","e4u17-q28","e4u17-q31","e4u17-q35","e4u17-q39","e4u17-q43"],
  cpBank:[
   {id:"e4u17-cp01", lesson:"e4u17-l1", level:1, q:"No court enforces a global goal on clean cooking fuel. Yet a donor moves money toward it, and newspapers start ranking countries on it. What explains the goal’s influence?", options:[
     {t:"It is a treaty, so states must comply", why:"Global goals are General Assembly resolutions with no legal force. Their influence comes from elsewhere."},
     {t:"Goals set the agenda, create numbers to compare, and steer money", ok:true, why:"Yes. Scholars call this governing by goals: power without legal force."},
     {t:"The IMF makes its loans conditional on meeting every single goal", why:"Nothing in the lesson says this. The goals’ power is to frame problems, set yardsticks and steer money."},
     {t:"Countries that miss a goal lose their UN vote", why:"There are no such sanctions; follow-up and review are voluntary."}]},
   {id:"e4u17-cp02", lesson:"e4u17-l1", level:2, q:"A target says: “Halve child mortality from its 1990 level.” Country A cuts it from 200 to 140 per 1,000; Country B from 40 to 20. Which point would Easterly draw from this?", options:[
     {t:"B did better, because it met the target and A did not", why:"That is the judgment Easterly criticized: it ignores that A saved more lives per 1,000 children."},
     {t:"The target is fair, because every country faces exactly the same percentage cut from 1990", why:"Easterly argued that the same proportional cut is harder for countries starting from high levels, mostly in Africa."},
     {t:"Proportional targets can make high starters look like failures despite big gains", ok:true, why:"Right. A cut deaths by 60 per 1,000 but “failed”; B cut 20 and “succeeded”. This was Easterly’s case that the MDGs were unfair to Africa."},
     {t:"Neither improved, because both still have child deaths", why:"Both improved. The question is how a proportional target judges very different starting points."}]},
   {id:"e4u17-cp03", lesson:"e4u17-l1", level:2, q:"A think tank argues that the SDGs should be cut to a short list of the best-value targets, chosen by cost–benefit studies. Which kind of critique is this?", options:[
     {t:"A critique of the form: too many targets to prioritize", ok:true, why:"Yes. This is the Copenhagen Consensus line. It attacks the number of targets, not their aims or who wrote them."},
     {t:"A critique of the content: growth conflicts with ecology", why:"That is Hickel’s critique of target 8.1 against Goals 12–13, not an argument about the number of targets."},
     {t:"A critique of the politics: who decides and who pays", why:"The think tank does not question who wrote the goals; it wants fewer of them."},
     {t:"A charge of SDG-washing", why:"SDG-washing means attaching SDG logos to business as usual, not proposing a shorter list."}]},
   {id:"e4u17-cp04", lesson:"e4u17-l2", level:1, q:"An SDG indicator has an agreed international method, but regular data exist for only about a third of countries. Which tier is it in?", options:[
     {t:"Tier I", why:"Tier I needs regular data for at least half of countries and people in every region."},
     {t:"Tier III", why:"The old Tier III meant no agreed method. Since 2020 no indicator remains there, and this one has a method."},
     {t:"No tier, because it lacks data", why:"Indicators with an agreed method but irregular data still have a tier."},
     {t:"Tier II", ok:true, why:"Right. Tier II means an agreed method but irregular data."}]},
   {id:"e4u17-cp05", lesson:"e4u17-l2", level:3, q:"A country scores well on the indicator for Goal 10’s first target, which tracks income growth of the poorest 40%. Yet the gap between its richest and poorest has widened. Drawing on Lessons 1 and 2, what does this show?", options:[
     {t:"Goal 10 has been met, because the official indicator moved in the right direction", why:"This treats the indicator as the goal. The lesson warns that the choice of indicator can narrow what a goal promises."},
     {t:"The data must be wrong, because the two trends cannot happen together", why:"Both can be true: the poorest can gain while the richest gain even more."},
     {t:"Goal 10 does not mention inequality", why:"Goal 10 is the inequality goal, one of the main additions compared with the MDGs."},
     {t:"Indicators can narrow a goal: this one tracks the poorest’s growth, not the gap", ok:true, why:"Yes. Fukuda-Parr and others show how indicators can narrow goals, and Goodhart’s law warns what happens when a measure becomes a target."}]},
   {id:"e4u17-cp06", lesson:"e4u17-l2", level:3, q:"A rich country tops the SDG Index. Critics point out that its imports of beef and timber drive deforestation abroad. Drawing on Lessons 1 and 2, which ideas explain why this matters?", options:[
     {t:"Means of implementation, and the Tier system", why:"Means of implementation are money, technology and trade; tiers classify indicators by data. Neither captures harm caused abroad."},
     {t:"Universality, and the spillovers national scores hide", ok:true, why:"Right. The SDGs apply to rich countries too, and borders hide spillovers, which the SDSN tracks in a separate spillover index."},
     {t:"Food sovereignty, and the IPC famine scale", why:"These are Lesson 4 food concepts and do not explain the problem with a national index."},
     {t:"Goodhart’s law, which means the index must have been invented", why:"Goodhart’s law is about measures that become targets. The point here is what national averages leave out."}]},
   {id:"e4u17-cp07", lesson:"e4u17-l3", level:1, q:"A government pipes water close to villages, so women no longer spend hours each day carrying it. Which of the “three Rs” of unpaid care does this mainly serve?", options:[
     {t:"Recognize", why:"Recognizing care means counting and valuing it, for example in time-use surveys."},
     {t:"Redistribute", why:"Redistributing care means shifting it from women to men, or from households to the state and employers."},
     {t:"Reduce", ok:true, why:"Yes. Infrastructure such as water, electricity and transport reduces the drudgery of unpaid care."},
     {t:"Regulate", why:"This is not one of the three Rs. They are recognize, reduce and redistribute."}]},
   {id:"e4u17-cp08", lesson:"e4u17-l3", level:2, q:"A cash transfer pays mothers if their children attend health checks. Evaluations show better child health, and also that mothers spend many extra hours queuing at clinics. Which question would a GAD scholar such as Molyneux raise?", options:[
     {t:"Whether the transfers were large enough to raise GDP", why:"GDP is not the GAD question. GAD asks about gender relations, voice and who carries extra work."},
     {t:"Whether it adds to women’s unpaid work and treats them as tools for their children", ok:true, why:"Right. Molyneux asked exactly this about Progresa and Bolsa Família."},
     {t:"Whether the mothers formed groups with joint liability", why:"Joint liability belongs to group microcredit, not to cash transfers."},
     {t:"Whether the program meets a WID efficiency goal by making better use of women’s labor", why:"That is WID’s logic. GAD asks the critical question about the burden on women."}]},
   {id:"e4u17-cp09", lesson:"e4u17-l4", level:3, q:"A country has competitive elections and a free press. In one region, civil war blocks aid convoys and famine conditions appear. Which reading fits the lesson best?", options:[
     {t:"This disproves Sen entirely, so democracy and a free press have nothing to do with famine", why:"Critics refine rather than reject Sen. His argument still explains why functioning democracies usually act on hunger."},
     {t:"Famine cannot occur here, because a free press always prevents it", why:"Sen’s claim concerns functioning democracies. War can destroy entitlements by force in parts of a country."},
     {t:"The cause must be a fall in total food supply", why:"The scenario points to blocked aid in a war, not a national shortage."},
     {t:"It fits the refinement: war destroys entitlements by force, and famines are often political", ok:true, why:"Yes. Devereux notes the entitlement approach struggles with war, and de Waal argues most modern famines are caused or prolonged by conflict."}]},
   {id:"e4u17-cp10", lesson:"e4u17-l4", level:2, q:"An IPC analysis classifies famine in an invented district. Six months later, after aid access improves, a new analysis no longer does. A blogger says the first classification “was wrong”. What is the best reply?", options:[
     {t:"A classification describes a period; later analyses can change as conditions do", ok:true, why:"Right. The lesson stresses that IPC findings refer to a time, and later analyses can differ without the first being wrong."},
     {t:"The blogger is right: famine classifications can never be revised once they are made", why:"They can and are revised. Conditions change, as the Gaza Governorate case in the lesson shows."},
     {t:"Only the WFP can declare famine, so the IPC finding never counted", why:"Famine is classified through the IPC with an independent Famine Review Committee, not declared by one agency."},
     {t:"A famine classification lasts at least five years by rule", why:"There is no such rule. A classification describes the period it covers."}]},
   {id:"e4u17-cp11", lesson:"e4u17-l5", level:2, q:"A project hands out fortified flour (output) to cut child anemia (purpose). Anemia does not fall: many households lack clean water, so children keep getting infections. Drawing on Lessons 4 and 5, what went wrong?", options:[
     {t:"The activities were never carried out", why:"The flour was delivered, so the activities and outputs happened. The chain broke later."},
     {t:"An output-to-purpose assumption failed: food security also needs people to use food well, for example with clean water", ok:true, why:"Yes. The logframe’s assumptions column matters most, and utilization is one of food security’s four dimensions."},
     {t:"The project needed more flour, because availability is the only dimension of food security that matters", why:"Availability was not the problem. Utilization (nutrition, clean water, health) is a separate dimension."},
     {t:"The logframe proves the project worked, because outputs were delivered", why:"A completed logframe states a hypothesis. Only monitoring and evaluation test whether outputs led to the purpose."}]},
   {id:"e4u17-cp12", lesson:"e4u17-l5", level:3, q:"At a participatory village meeting, only men speak. The agreed plan funds a road that traders wanted, not the water point many women had asked for. Drawing on Lessons 3 and 5, which diagnosis fits best?", options:[
     {t:"Participation worked, because a plan was agreed by consensus of everyone in the room", why:"Cooke and Kothari warn that consensus language can hide power; agreement does not mean everyone had a voice."},
     {t:"The meeting met the DAC criterion of efficiency", why:"Efficiency is about how resources are used, not about whose voices shaped the plan."},
     {t:"Elites can capture participation, and gender relations shape whose needs count", ok:true, why:"Right. This combines the “new tyranny” critique with GAD’s focus on power between women and men."},
     {t:"This is a WID success, because women were invited to the meeting", why:"Being invited is not the same as having a say. GAD looks at the power relations behind the outcome."}]}
  ],
  codex:[
   {id:"sdg-negotiations", title:"From the MDGs to the SDGs: how the goals were made", aka:["post-2015 agenda","Open Working Group","2030 Agenda negotiations","Millennium Development Goals"], tags:["development","global governance","SDGs"],
    summary:"How eight goals drafted by officials in 2000 became 17 goals and 169 targets negotiated by member states and adopted in 2015.",
    levels:{
     starter:[
      "In 2000 world leaders signed the **Millennium Declaration**, and officials turned it into eight **Millennium Development Goals (MDGs)** for 2015: halve extreme poverty, get every child into primary school, cut child deaths, and so on.",
      "When 2015 approached, governments wanted a say in what came next. A working group of the UN General Assembly, with 30 seats shared by 70 countries, spent 2013–14 drafting new goals. On **25 September 2015** every UN member adopted the **2030 Agenda**, with 17 Sustainable Development Goals (SDGs) and 169 targets.",
      "Think of the MDGs as a short shopping list written by a few people, and the SDGs as a long household plan written by everyone in the house: more complete, harder to prioritize, but owned by more people.",
      {key:"The MDGs were made by officials for developing countries; the SDGs were negotiated by governments for every country."}
     ],
     builder:[
      "**The MDGs.** Drawn from the Millennium Declaration (8 September 2000) by officials of the UN, the World Bank, the IMF and the OECD, with several targets taken from the OECD donor committee’s 1996 goals. The UN’s *MDG Report 2015* recorded that extreme poverty fell from 1.9 billion people (1990) to 836 million (2015) and under-five mortality from 90 to 43 per 1,000 live births, with uneven progress.",
      "**Rio+20 and the OWG.** The 2012 Rio+20 conference launched the SDG process. General Assembly decision 67/555 (22 January 2013) set up the Open Working Group: 6 single seats, 9 pairs, 14 trios and one seat of four, 70 countries in all, co-chaired by Kenya and Hungary. It adopted its proposal by acclamation on 19 July 2014: 17 goals, 169 targets, 62 on means of implementation.",
      "**Parallel tracks.** A High-level Panel of Eminent Persons (2013), UN consultations and an online survey fed in. Intergovernmental negotiations in 2015 produced resolution 70/1, adopted on 25 September 2015.",
      "**Contested points.** Goal 16 (peace and institutions), common but differentiated responsibilities beyond climate, the means of implementation and sexual and reproductive rights (target 5.6)."
     ],
     pro:[
      "**Norm dynamics.** Fukuda-Parr and Hulme (*Global Governance*, 2011) used the norm life cycle to explain how “ending poverty” became a global norm, with the MDGs as its cascade. Their account also shows how numbers made the norm sticky and how they simplified it.",
      "**From aid agenda to universal agenda.** Fukuda-Parr (2016) argued that the SDGs moved global goal-setting from a donor-led aid framework to a universal agenda shaped by developing countries, with inequality, sustainability and institutions added.",
      "**Insider accounts.** Kamau, Chasek and O’Connor’s *Transforming Multilateral Diplomacy* (2018) and the *Earth Negotiations Bulletin*’s session summaries are primary-like sources for process tracing (Unit 3) of the negotiations.",
      "**Debates on the MDG record.** Attribution (growth in China and India), Easterly’s “unfair to Africa” critique of proportional targets (2009), and feminist critiques of the narrow gender goal (Kabeer 2005).",
      {tip:"For a thesis on the negotiations, triangulate the *Earth Negotiations Bulletin*, the OWG’s official documents and interviews or memoirs, and watch for hindsight in insiders’ accounts."}
     ]
    },
    related:["sdg-critiques","sdg-indicator-framework","development-ir","sakiko-fukuda-parr","norm-dynamics"],
    read:[{book:"sdgr26", where:"Foreword and Overview"}],
    sources:[{t:"UN DESA: The 17 Goals (history of the SDGs)", url:"https://sdgs.un.org/goals"},{t:"Earth Negotiations Bulletin: summary of the 13th session of the OWG, 14–19 July 2014", url:"https://enb.iisd.org/events/13th-session-un-general-assemblys-unga-owg-sdgs/summary-report-14-19-july-2014"},{t:"UN: The Millennium Development Goals Report 2015", url:"https://www.un.org/millenniumgoals/2015_MDG_Report/pdf/MDG%202015%20rev%20(July%201).pdf"}],
    checked:"2026-11"},

   {id:"sdg-critiques", title:"Critiques of the SDGs", aka:["169 commandments","growth versus ecology","SDG-washing","SDG interactions"], tags:["development","SDGs","debates"],
    summary:"The main criticisms of the SDGs (too many, hard to measure, growth versus ecology, voluntary) and the replies of their defenders.",
    levels:{
     starter:[
      "Nearly everyone supports the aims of the SDGs: less poverty, better health, a safer climate. The arguments are about the **design**.",
      "Some critics say 17 goals and 169 targets are too many to guide choices. Others say many targets are vague or hard to measure. Others point to a contradiction: one target asks for fast economic growth, while others ask us to use fewer resources.",
      "Defenders reply that the world’s problems really are connected, and that a long list written by all governments together is more legitimate than a short list written by experts.",
      {key:"When you criticize the SDGs, say whether you are criticizing their content, their form or their politics."}
     ],
     builder:[
      "**Too many.** *The Economist*’s “The 169 commandments” (28 March 2015) and the Copenhagen Consensus Center’s cost–benefit case for a short list of best-value targets.",
      "**Measurement.** In 2015 many indicators lacked agreed methods; vague verbs (“substantially”, “significantly”) make success hard to judge (see {{sdg-indicator-framework}}).",
      "**Growth versus ecology.** Target 8.1 asks for at least 7% GDP growth a year in the least developed countries. Hickel (*Sustainable Development*, 2019) argued that growth targets and ecological goals cannot all be met; green-growth advocates answer that decoupling is possible. See Unit 17 on degrowth and green growth.",
      "**Voluntary.** No sanctions, self-reported reviews, and “SDG-washing” by firms and governments that attach the logos to business as usual.",
      "**Interactions.** Nilsson, Griggs and Visbeck (*Nature*, 2016) proposed a seven-point scale from +3 (indivisible) to −3 (canceling) to map how targets help or hinder each other."
     ],
     pro:[
      "**Legitimacy versus priority.** The OWG’s inclusive process produced a long list partly because leaving a target out meant someone lost. Scholars of negotiation see this as the classic trade-off between input legitimacy (who decides) and output effectiveness (what gets done).",
      "**Indicator politics.** A 2019 special issue of *Global Policy* edited by Fukuda-Parr and Desmond McNeill examined how the choice of targets and indicators narrowed the agenda: Goal 10 promises to reduce inequality, but target 10.1 and its indicator track income growth of the bottom 40%, not the gap between rich and poor.",
      "**Political economy.** Some critics from the left argue the agenda avoids structural issues such as tax havens, debt and trade rules; some from the right argue it expands the role of states and international bodies. Both are positions to attribute, not facts.",
      "**After 2030.** As of November 2026, debate has begun on what should follow 2030; the SDSN’s 2026 report is titled *Implementing Sustainable Development: 2030 and Beyond*. Arguments for continuity (keep the goals, focus on implementation) compete with calls for a shorter list.",
      {tip:"A good critique proposes a test: which targets interact, in which country, and what evidence would show a trade-off?"}
     ]
    },
    related:["sdg-negotiations","sdg-indicator-framework","sustainable-development-idea","development-ir"],
    sources:[{t:"SEI: Måns Nilsson on mapping SDG interactions", url:"https://www.sei.org/featured/qa-mans-nilsson-on-mapping-sdg-interactions/"},{t:"Hickel (2019), “The contradiction of the sustainable development goals”, Sustainable Development 27(5) (RePEc record)", url:"https://ideas.repec.org/a/wly/sustdv/v27y2019i5p873-884.html"}],
    checked:"2026-11"},

   {id:"sdg-indicator-framework", title:"SDG targets, indicators and the data gap", aka:["global indicator framework","IAEG-SDGs","tier classification","SDG Report","Sustainable Development Report","SDG Index"], tags:["data","SDGs","methods"],
    summary:"How SDG progress is measured: 234 indicators, custodian agencies, tiers, the data gap, and the UN and SDSN reports.",
    levels:{
     starter:[
      "A goal like “end hunger” needs a yardstick. Each SDG target has one or more **indicators**, such as the share of people who are undernourished.",
      "Countries collect the data through surveys, censuses and records; international agencies (the **custodian agencies**) turn them into comparable figures; and the UN publishes an annual **SDG Report**. An independent network, the SDSN, publishes a **Sustainable Development Report** that ranks countries.",
      "Many countries lack good data, especially on the poorest and smallest groups. That **data gap** makes it hard to know who is being left behind.",
      {key:"Every global SDG figure is only as good as the national statistics under it."}
     ],
     builder:[
      "**The framework.** Adopted by the General Assembly on 6 July 2017 (resolution 71/313), refined each year and reviewed comprehensively in 2020 and 2025. As of 2026: 234 unique indicators, 251 listed in total.",
      "**Tiers.** Tier I: agreed method and regular data for at least 50% of countries and of the population in every relevant region. Tier II: agreed method, irregular data. As of 30 March 2026: 165 Tier I, 61 Tier II, 8 mixed; no Tier III since 2020.",
      "**UN SDG Report 2026** (7 July 2026): of 139 assessable targets, 15% on track or met, 21% moderate, 32% marginal, 17% stagnant, 15% regressed. Fewer than one third of indicators have enough trend data for Goals 5, 11, 13 and 16; only 80 of 135 national statistical plans being implemented were fully funded.",
      "**Sustainable Development Report 2026** (SDSN, 23 June 2026): only 16.5% of targets projected to be met by 2030; Finland, Sweden and Denmark top a 169-country index; East and South Asia progressed fastest since 2015."
     ],
     pro:[
      "**Different units.** The UN assesses global trends target by target; the SDSN builds a country index by rescaling indicators to 0–100 and averaging with equal weight per goal. Their headlines are not directly comparable.",
      "**Spillovers.** The SDSN’s spillover index measures harm that one country’s consumption, trade and finance cause elsewhere; the 2026 report says high-income countries generate the lion’s share of negative spillovers, though they top the main index.",
      "**Statistical politics.** Jerven’s *Poor Numbers* (2013) on African GDP estimates; Goodhart’s law on targets distorting measures; the data revolution agenda of *A World That Counts* (2014).",
      "**Funding.** The UN’s 2026 report warns that cuts to aid in 2024–25 threaten the funding for national statistical systems, after a decade of gains.",
      {tip:"Cite figures with the report, the year of the data, the unit (world, region, country) and the method. “The UN says 15%” is incomplete without “of 139 assessable targets, in its 2026 report”."}
     ]
    },
    related:["hlpf-vnr","sdg-localisation","sdg-critiques","political-economic-datasets"],
    read:[{book:"sdgr26", where:"The progress chart and the “Note to the reader”"},{book:"sdr26", where:"Part 2 “The SDG Index and Dashboards” and the Methodology"}],
    sources:[{t:"UN Statistics Division: The Sustainable Development Goals Report 2026", url:"https://unstats.un.org/sdgs/report/2026/"},{t:"UN Statistics Division: Global indicator framework (indicators list)", url:"https://unstats.un.org/sdgs/indicators/indicators-list/"},{t:"IAEG-SDGs: Tier classification for global SDG indicators", url:"https://unstats.un.org/sdgs/iaeg-sdgs/tier-classification/"}],
    checked:"2026-11"},

   {id:"hlpf-vnr", title:"Follow-up and review: the HLPF and voluntary national reviews", aka:["High-level Political Forum","VNR","SDG Summit"], tags:["global governance","SDGs","accountability"],
    summary:"The UN forum that reviews SDG progress each July, and the voluntary national reviews that governments present to it.",
    levels:{
     starter:[
      "Nobody can be fined for missing an SDG. Instead, governments **report**. Each July they meet in New York at the **High-level Political Forum on Sustainable Development (HLPF)**, and some present a **voluntary national review (VNR)**: their own account of progress and problems.",
      "It is a bit like a study group where each member presents their progress: there is no grade, but there is the pressure of being seen and the chance to learn from others.",
      {key:"SDG accountability is soft: peer review and public reporting, not enforcement."}
     ],
     builder:[
      "**The HLPF.** Created in 2013 to replace the Commission on Sustainable Development. It meets every July under the Economic and Social Council, and every four years at heads-of-state level under the General Assembly (SDG Summits in 2019 and 2023). Each year it reviews several goals in depth and adopts a ministerial declaration.",
      "**HLPF 2026.** Held 7–15 July 2026; it reviewed Goals 6, 7, 9, 11 and 17, and 36 countries presented VNRs. UN DESA counts 437 VNRs since 2016 by 190 countries and the European Union.",
      "**What a VNR contains.** Usually: how the government organized SDG work, progress goal by goal, data gaps, the role of civil society and local government, and next steps."
     ],
     pro:[
      "**Assessments.** Supporters point to coordination inside governments, peer learning and openness to civil society. Critics point to self-selection of what is reported, short presentations, few hard questions and no consequences. This is a familiar debate in compliance theory (Unit 10): managerial approaches versus enforcement.",
      "**Shadow reporting.** NGO coalitions publish “spotlight” reports that challenge official accounts, as human rights NGOs do before treaty bodies (Unit 11).",
      "**Research uses.** VNRs are rich sources for discourse analysis (how governments frame progress) and for comparing institutional arrangements. Read them as government self-presentation, and triangulate with statistics and independent reports.",
      {tip:"The HLPF’s online VNR database lets you compare a country’s successive reviews: a simple way to trace change over time."}
     ]
    },
    related:["sdg-indicator-framework","sdg-localisation","sdg-negotiations"],
    sources:[{t:"HLPF 2026", url:"https://hlpf.un.org/2026"},{t:"HLPF: Voluntary National Reviews", url:"https://hlpf.un.org/vnrs"},{t:"UN DESA: “UN forum concludes with renewed commitment to accelerate action on the SDGs” (July 2026)", url:"https://www.un.org/en/desa/un-forum-concludes-with-renewed-commitment-to-accelerate-action-on-the-sustainable-development-goals"}],
    checked:"2026-11"},

   {id:"sdg-localisation", title:"SDG localization and voluntary local reviews", aka:["localizing the SDGs","VLR","SDGs FutureCities","SDG India Index"], tags:["development","cities","SDGs"],
    summary:"How cities and regions adapt the SDGs to local plans and report on them through voluntary local reviews.",
    levels:{
     starter:[
      "Many SDG targets are delivered locally: clean water, buses, housing, garbage collection, local clinics. **Localization** means turning the global goals into local plans with local data.",
      "Some cities and regions write a **voluntary local review (VLR)**, a report on their progress that copies the national format. It has no official status, but it gives local leaders a way to set priorities and show results.",
      {key:"Localization brings the goals closer to the people who deliver them, but also risks becoming a new label for old plans."}
     ],
     builder:[
      "**Origins.** The first VLRs were released in 2018 by Kitakyushu, Toyama and Shimokawa in Japan and by New York City, for the local and regional governments’ forum at that year’s HLPF. UN DESA’s online collection lists over 400 VLR reports.",
      "**National programs.** Japan’s Cabinet Office has selected “SDGs FutureCities” every fiscal year since 2018 (nine more in fiscal 2025) to model local SDG strategies linked to regional revitalization. India’s NITI Aayog has ranked all states and union territories in an SDG India Index since its 2018 baseline report.",
      "**Guidance.** UN DESA’s global guiding elements, UCLG and UN-Habitat guidelines, regional guidelines from UNESCAP and the European Commission’s Joint Research Centre, and the handbook *Shimokawa Method for Voluntary Local Reviews* (2020) from Japan’s Institute for Global Environmental Strategies (IGES)."
     ],
     pro:[
      "**Arguments for.** Local governments control much relevant spending and regulation; local data can reveal inequalities that national averages hide; competition between cities can spread good practice.",
      "**Arguments against.** Rebranding existing plans; cherry-picking easy goals; uneven capacity, since small municipalities often lack statisticians; and the risk that rankings of regions (as in national SDG indices) reward data availability as much as progress.",
      "**Research angle.** Localization is a good case for norm localization (Unit 2) and multilevel governance: how a global norm is translated, adapted or resisted by local actors.",
      {tip:"Compare a VLR with the city’s own budget: do the priorities in the report match where the money goes?"}
     ]
    },
    related:["hlpf-vnr","sdg-indicator-framework","norm-dynamics"],
    sources:[{t:"UN DESA: Voluntary Local Reviews", url:"https://sdgs.un.org/topics/voluntary-local-reviews"},{t:"IGES VLR Lab: background", url:"https://www.iges.or.jp/projects/vlr/background"},{t:"Cabinet Office of Japan: FY2025 SDGs FutureCities selection (press materials, in Japanese)", url:"https://www.chisou.go.jp/tiiki/kankyo/teian/2025sdgs_pdf/01_puresushiryou.pdf"}],
    checked:"2026-11"},

   {id:"sakiko-fukuda-parr", title:"Sakiko Fukuda-Parr", aka:["Fukuda-Parr"], tags:["thinker","development","SDGs"],
    summary:"Development economist who directed the UNDP’s Human Development Reports and became a leading analyst of the politics of global goals and numbers.",
    levels:{
     starter:[
      "Sakiko Fukuda-Parr is a development economist who worked for the UN Development Programme from 1980, first on Africa and then as director and lead author of the *Human Development Report* from 1995 to 2004.",
      "Her big question is simple: what happens when the world governs by numbers? Global goals and indicators are powerful, she argues, because they tell governments and donors what counts, but they can also narrow what development means.",
      {key:"Fukuda-Parr studies the power of numbers: how goals and indicators shape what the world pays attention to."}
     ],
     builder:[
      "**On the MDGs.** With David Hulme, “International Norm Dynamics and the ‘End of Poverty’: Understanding the Millennium Development Goals” (*Global Governance*, 2011) applied the norm life cycle to the MDGs. With Alicia Ely Yamin she co-edited *The MDGs, Capabilities and Human Rights: The Power of Numbers to Shape Agendas* (2015).",
      "**On the SDGs.** She argued (2016) that the SDGs marked a shift in the purpose and politics of goal-setting: from a donor-led agenda for poor countries to a universal, transformative agenda, shaped more by developing countries.",
      "**Human rights and development.** With Terra Lawson-Remer and Susan Randolph she wrote *Fulfilling Social and Economic Rights* (2015), which built an index of how far states meet these rights given their resources. Her other research areas include food security and the capability approach."
     ],
     pro:[
      "**The “power of numbers”.** Her research program with colleagues examined how indicators reshape the targets they measure, for example by simplifying complex goals or leaving out hard-to-measure aims such as inequality and rights.",
      "**Critics and debates.** Some economists reply that simple, measurable goals are what made the MDGs effective at mobilizing money. Her work is often read alongside Easterly’s and Hulme’s critiques of the MDGs and alongside Sen’s capability approach (Unit 15), which shaped the human development reports she led.",
      {tip:"Use her work when your paper asks not “did the goals work?” but “what did the goals make visible, and what did they hide?”"}
     ]
    },
    related:["sdg-negotiations","sdg-critiques","amartya-sen","norm-dynamics"],
    sources:[{t:"JICA Ogata Sadako Research Institute: Sakiko Fukuda-Parr (profile)", url:"https://www.jica.go.jp/english/jica_ri/experts/fukuda-parr-sakiko.html"}],
    checked:"2026-11"},

   {id:"wid-wad-gad", title:"From WID to GAD: gender and development approaches", aka:["Women in Development","Women and Development","Gender and Development","gender mainstreaming","Ester Boserup","practical and strategic gender needs"], tags:["gender","development","theory"],
    summary:"How development thinking moved from adding women to projects (WID) to analyzing global inequality (WAD) and gender relations and power (GAD).",
    levels:{
     starter:[
      "For decades, development planners imagined farmers, workers and household heads as men. In 1970 the Danish economist **Ester Boserup** showed, in *Woman’s Role in Economic Development*, that this blindness could make women worse off.",
      "Three approaches followed. **Women in Development (WID)** said: include women in projects. **Women and Development (WAD)** said: women are already included, but on unequal terms in the world economy. **Gender and Development (GAD)** said: look at the power relations between women and men, and change them.",
      {key:"WID asks “where are the women?”; GAD asks “who has power, and how do institutions keep it that way?”"}
     ],
     builder:[
      "**WID (1970s).** Boserup (1970); donor WID offices; the first UN world conference on women (Mexico City, 1975) and the UN Decade for Women (1976–1985). Mostly an efficiency argument.",
      "**WAD (late 1970s–1980s).** Marxist-feminist: women’s labor is exploited within global capitalism alongside poor men’s. The DAWN network (founded 1984) and Sen and Grown’s *Development, Crises, and Alternative Visions* (1987) gave a Global South feminist voice.",
      "**GAD (1980s onward).** Gender as a social relation. Molyneux (1985) distinguished practical from strategic gender interests; Moser (1989) made practical and strategic gender needs a planning tool. Kabeer’s *Reversed Realities* (1994) critiqued the gender blindness of development thought.",
      "**Mainstreaming.** The Beijing Platform for Action (1995) made gender mainstreaming the official strategy: assess every policy’s effects on women and men."
     ],
     pro:[
      "**Critiques of mainstreaming.** Feminist scholars warn that it can become technocratic box-ticking, absorbing the language of GAD without its politics, and that it can make women-specific funding easier to cut.",
      "**Intersectionality.** Later work adds class, race, caste, age and disability (see [[intersectionality]]), and questions binary categories of gender.",
      "**Instrumentalism.** A long-running debate asks whether arguing for gender equality because it raises growth (“smart economics”) helps or harms the case that equality matters for its own sake.",
      {tip:"In a paper, say which approach a program reflects by looking at its indicators: counting women beneficiaries is WID; measuring changes in decision-making and rights is GAD."}
     ]
    },
    related:["womens-empowerment","unpaid-care-work","naila-kabeer","feminism-ir","gender-stratification"],
    read:[{book:"soc", where:"Chapter 12, Section 12.2 “Gender and Gender Inequality”"}],
    sources:[{t:"UN Statistics Division: SDG Report 2026 (Goal 5)", url:"https://unstats.un.org/sdgs/report/2026/"}],
    checked:"2026-11"},

   {id:"womens-empowerment", title:"Women’s empowerment: resources, agency, achievements", aka:["Kabeer’s framework","empowerment","strategic life choices"], tags:["gender","development","measurement"],
    summary:"Naila Kabeer’s definition of empowerment as the expanded ability to make strategic life choices, and her three dimensions for studying it.",
    levels:{
     starter:[
      "“Empowerment” appears in almost every development report, often without a clear meaning. Naila Kabeer gave it one: empowerment is the **expansion of people’s ability to make strategic life choices** in a context where that ability was previously denied.",
      "Strategic choices are the big ones: whether and whom to marry, whether to work for pay, how many children to have, where to live. She describes three linked dimensions: **resources** (what you have), **agency** (what you can decide and do) and **achievements** (the results).",
      {key:"A resource is not empowerment until it changes what a person can choose and do."}
     ],
     builder:[
      "**The source.** “Resources, Agency, Achievements: Reflections on the Measurement of Women’s Empowerment”, *Development and Change* 30(3), 1999.",
      "**Resources** are material, human and social: land, income, education, networks. Kabeer stresses the **terms** on which they are obtained, not only access.",
      "**Agency** includes decision-making but also bargaining, negotiation, resistance and protest, individual or collective.",
      "**Achievements** are well-being outcomes and valued ways of being and doing, an echo of Sen’s capabilities (see {{capability-approach}} in Unit 15).",
      "**Using it.** Sort a program’s indicators into the three dimensions. Most measure resources; few capture agency."
     ],
     pro:[
      "**Measurement problems.** The same answer to a survey question (“who decides on large purchases?”) can mean different things in different settings; choices can reflect internalized norms rather than free agency. Kabeer recommends combining indicators with qualitative evidence.",
      "**Applied to the MDGs.** Kabeer (2005) argued that the MDG gender goal’s indicators (girls’ schooling, women’s wage employment, parliamentary seats) captured resources and some achievements but not agency.",
      "**Successors.** Measurement tools such as the Women’s Empowerment in Agriculture Index draw on this framework; critics warn that indices risk turning a political process back into a checklist.",
      {tip:"Ask of any empowerment claim: which dimension does the evidence show, and for whom?"}
     ]
    },
    related:["naila-kabeer","wid-wad-gad","microfinance","capability-approach"],
    sources:[{t:"GSDRC summary: Kabeer, “Resources, Agency, Achievements”", url:"https://gsdrc.org/document-library/resources-agency-achievements-reflections-on-the-measurement-of-womens-empowerment/"},{t:"RePEc record: Development and Change 30(3), 1999, pp. 435–464", url:"https://ideas.repec.org/a/bla/devchg/v30y1999i3p435-464.html"}],
    checked:"2026-11"},

   {id:"unpaid-care-work", title:"Unpaid care work", aka:["care economy","three Rs","time use","SDG target 5.4"], tags:["gender","economics","development"],
    summary:"The cooking, cleaning and caring done without pay, mostly by women, which GDP leaves out and SDG target 5.4 asks countries to recognize.",
    levels:{
     starter:[
      "If you pay someone to cook, clean or look after a child, that work counts in GDP. If a family member does it for free, it doesn’t. Yet this **unpaid care work** keeps every economy running.",
      "In 2018 the International Labour Organization estimated that people do about **16.4 billion hours** of unpaid care work every day, and that women do **76.2%** of it, more than three times as much as men.",
      {key:"Unpaid care is work. Who does it shapes who can earn, study or take part in public life."}
     ],
     builder:[
      "**Measuring it.** Time-use surveys ask people to record their activities across a day. The ILO’s *Care Work and Care Jobs for the Future of Decent Work* (28 June 2018) used data from 64 countries; valued at an hourly minimum wage, unpaid care equalled about 9% of global GDP. It found 606 million working-age women, against 41 million men, outside the labor force because of unpaid care.",
      "**The three Rs.** Associated with the feminist economist Diane Elson: recognize unpaid care, reduce its drudgery (water, energy, transport), and redistribute it (to men, and to the state and employers through services and leave). The ILO adds decent work for paid care workers.",
      "**In the SDGs.** Target 5.4: recognize and value unpaid care and domestic work through public services, infrastructure and social protection, and the promotion of shared responsibility within the household, “as nationally appropriate”."
     ],
     pro:[
      "**Intellectual history.** Marilyn Waring’s *If Women Counted* (1988) challenged national accounting; feminist economics developed the idea of a “care economy”. Some statistical offices now produce satellite accounts of household production alongside GDP.",
      "**Global care chains.** Paid care increasingly moves across borders (see [[global-care-chain]] in the migration primer), shifting the burden rather than removing it.",
      "**Policy debates.** Public child care, parental leave, pensions credits for carers and infrastructure investment are all argued for on care grounds; opponents raise cost and family autonomy. Treat each as a policy choice with evidence on both sides.",
      {tip:"When you see “labor force participation” figures, ask what they leave out: they count paid work only."}
     ]
    },
    related:["wid-wad-gad","womens-empowerment","gender-and-migration"],
    sources:[{t:"ILO press release: “ILO calls for urgent action to prevent looming global care crisis” (28 June 2018)", url:"https://www.ilo.org/resource/news/ilo-calls-urgent-action-prevent-looming-global-care-crisis"},{t:"ILO: Care work and care jobs for the future of decent work (2018)", url:"https://www.ilo.org/publications/major-publications/care-work-and-care-jobs-future-decent-work"}],
    checked:"2026-11"},

   {id:"microfinance", title:"Microfinance and its evidence", aka:["microcredit","Grameen Bank","group lending","joint liability"], tags:["development","finance","gender","evidence"],
    summary:"Small loans and other financial services for people without collateral: the Grameen model, the big claims, and what randomized evaluations found.",
    levels:{
     starter:[
      "Banks usually lend only to people with property to pledge. **Microcredit** lends small sums without collateral, often to women in groups whose members back each other’s repayments.",
      "Muhammad Yunus began lending in Bangladesh in the 1970s; the Grameen Bank became a formal bank in 1983, and Yunus and the bank shared the Nobel Peace Prize in 2006. Microcredit was hailed as a way out of poverty and a tool for women’s empowerment.",
      "Careful studies later found real but modest benefits. Today most people speak of **microfinance**: savings, insurance, payments and mobile money as well as loans.",
      {key:"Microfinance is a useful financial service, not a cure for poverty."}
     ],
     builder:[
      "**Group lending.** Joint liability replaces collateral with peer screening and peer pressure. Many lenders later moved to individual liability.",
      "**The evidence.** In January 2015 the *American Economic Journal: Applied Economics* published six randomized evaluations of expanded access to microcredit (Bosnia and Herzegovina, Ethiopia, India, Mexico, Mongolia, Morocco). Banerjee, Karlan and Zinman summarized “modestly positive, but not transformative” effects: more business activity for some, no consistent rise in household income, little evidence of transformed empowerment. Rachael Meager’s pooled analysis of seven trials (2019) reached a similar conclusion.",
      "**Crisis.** In Andhra Pradesh, India, rapid commercial growth and over-indebtedness led to a crisis in 2010, when the state government restricted lenders."
     ],
     pro:[
      "**Gender.** Kabeer’s “Conflicts over Credit” (*World Development*, 2001) found that some women lost control of loans to male relatives while others gained voice: the effect depends on context and on how “empowerment” is defined.",
      "**Methods debate.** The trials measure average effects of access over one to three years; critics ask about longer-term effects, effects on the most entrepreneurial borrowers, and external validity. See {{development-rcts}} in Unit 15 for the wider debate on randomized trials.",
      "**Beyond credit.** Some studies of savings and mobile money find more encouraging effects than the credit trials did, but results vary by country and some findings are disputed, so check each study’s setting.",
      {tip:"Separate three claims: microfinance reduces poverty; it empowers women; it is a useful service. The evidence differs for each."}
     ]
    },
    related:["womens-empowerment","development-rcts","naila-kabeer"],
    sources:[{t:"Banerjee, Karlan & Zinman (2015), “Six Randomized Evaluations of Microcredit: Introduction and Further Steps”, AEJ: Applied Economics 7(1)", url:"https://www.aeaweb.org/articles?id=10.1257/app.20140287"}],
    checked:"2026-11"},

   {id:"naila-kabeer", title:"Naila Kabeer", aka:["Kabeer"], tags:["thinker","gender","development"],
    summary:"Social economist whose work on gender, empowerment, labor markets and social protection, much of it based on fieldwork in Bangladesh, shaped gender and development.",
    levels:{
     starter:[
      "Naila Kabeer is a social economist and one of the most cited scholars of gender and development. Much of her research is based on fieldwork with women in Bangladesh.",
      "She is best known for a clear definition of **empowerment**: the expansion of people’s ability to make strategic life choices where that ability had been denied, studied through **resources, agency and achievements**.",
      {key:"Kabeer insists on asking what women themselves can choose and do, not only what they receive."}
     ],
     builder:[
      "**Key works.** *Reversed Realities: Gender Hierarchies in Development Thought* (1994), a critique of gender blindness in development theory; “Resources, Agency, Achievements” (*Development and Change*, 1999); *The Power to Choose* (2000), on Bangladeshi women garment workers in Dhaka and London; “Conflicts over Credit” (*World Development*, 2001), on microcredit; and a 2005 critique of the MDG gender goal (*Gender & Development*).",
      "**Themes.** Women’s paid work and its meaning, empowerment and its measurement, social protection, and how gender interacts with class and other inequalities."
     ],
     pro:[
      "**Against simple stories.** *The Power to Choose* challenged the view that factory work simply exploits women, showing how wages could expand some choices even under poor conditions, while also documenting those conditions.",
      "**Influence and critics.** Her framework underlies many empowerment indices and evaluations. Some critics say it remains hard to operationalize; Kabeer herself warns that indicators must be read in context and combined with qualitative evidence.",
      {tip:"Pair Kabeer with Sen’s capability approach (Unit 15): her achievements dimension draws on Sen’s idea of valued ways of being and doing."}
     ]
    },
    related:["womens-empowerment","wid-wad-gad","microfinance","amartya-sen"],
    sources:[{t:"GSDRC summary: Kabeer, “Resources, Agency, Achievements”", url:"https://gsdrc.org/document-library/resources-agency-achievements-reflections-on-the-measurement-of-womens-empowerment/"}],
    checked:"2026-11"},

   {id:"famine-entitlements", title:"Famine and Sen’s entitlement approach", aka:["entitlement failure","food availability decline","IPC","Famine Review Committee","Poverty and Famines"], tags:["development","food","theory"],
    summary:"Sen’s argument that famines happen when groups lose command over food, the critiques that stress war and politics, and how famine is classified today.",
    levels:{
     starter:[
      "We often picture famine as a country running out of food. Amartya Sen showed that people can starve while food is on sale, because they can no longer **get** it: their wages fall, prices soar, or their crops or animals are lost.",
      "His **entitlement approach** (*Poverty and Famines*, 1981) asks what food each household can command through what it owns, grows, earns, trades or receives.",
      {key:"Famine is about who can command food, not only how much food exists."}
     ],
     builder:[
      "**Cases.** Bengal 1943 (wartime inflation outran rural wages; supply was not exceptionally low by Sen’s estimates), Ethiopia in the early 1970s, Bangladesh 1974 (floods destroyed jobs).",
      "**Democracy.** Sen, with Drèze (*Hunger and Public Action*, 1989) and in *Development as Freedom* (1999), argued that functioning democracies with a free press do not suffer substantial famines, because governments face pressure to act.",
      "**Classification today.** The IPC’s Phase 5 (Famine) requires at least 20% of households with extreme food gaps, 30% of children acutely malnourished and two deaths per 10,000 people a day, reviewed by an independent Famine Review Committee. Famine has been classified, among other cases, in Somalia (2011), South Sudan (2017), Sudan (Zamzam camp, August 2024; El Fasher and Kadugli, November 2025) and Gaza Governorate (August 2025; Israel’s government rejected the finding, and the IPC’s December 2025 analysis, after the October 2025 ceasefire, no longer classified famine there)."
     ],
     pro:[
      "**Critiques.** Devereux (*Oxford Development Studies*, 2001) reviewed them: the approach treats legal entitlements and underplays violence, looting and war; it says little about people choosing to go hungry to protect assets; and disease, not starvation, kills most people in famines. De Waal’s *Mass Starvation* (2018) argues that most recent famines are political, caused or prolonged by conflict and sieges.",
      "**Policy legacy.** Employment guarantee schemes, cash transfers and early-warning systems all reflect entitlement thinking: protect incomes early, not only ship food late.",
      {tip:"For any famine case, ask four questions: which groups lost entitlements, through which mechanism, who had power to prevent it, and why they did not."}
     ]
    },
    related:["amartya-sen","green-revolution","humanitarian-development-nexus"],
    sources:[{t:"IPC: Famine facts", url:"https://www.ipcinfo.org/famine-facts/"},{t:"FAO: Famine conditions confirmed in Sudan’s El Fasher and Kadugli (November 2025)", url:"https://www.fao.org/newsroom/detail/famine-conditions-confirmed-in-sudan-fasher-and-kadugli-as-hunger-and-malnutrition-ease-where-conflict-subsides/en"},{t:"UNICEF: Famine confirmed in Sudan’s North Darfur (1 August 2024)", url:"https://www.unicef.org/press-releases/famine-confirmed-sudans-north-darfur-confirming-un-agencies-worst-fears"},{t:"UN agencies on the IPC’s December 2025 Gaza analysis (19 December 2025)", url:"https://www.unicef.org/press-releases/un-agencies-welcome-news-famine-has-been-pushed-back-gaza-strip-warn-fragile-gains"},{t:"FEWS NET: Integrated Phase Classification (Famine with solid and with reasonable evidence)", url:"https://fews.net/about/integrated-phase-classification"}],
    checked:"2026-11"},

   {id:"green-revolution", title:"The Green Revolution", aka:["high-yielding varieties","Borlaug","IR8"], tags:["development","food","environment"],
    summary:"The spread of high-yielding crop varieties with fertilizer and irrigation from the 1960s, its gains, its costs, and the debate about Africa.",
    levels:{
     starter:[
      "In the 1960s, new varieties of wheat and rice that produced much more grain, when given fertilizer and water, spread across Asia and Latin America. Harvests rose sharply, and the change was called the **Green Revolution**.",
      "The plant scientist Norman Borlaug, whose wheat work began in Mexico, won the Nobel Peace Prize in 1970 “for having given a well-founded hope – the green revolution”.",
      "People still argue about it: it fed hundreds of millions, but it also damaged soils and water and favored some farmers over others.",
      {key:"The Green Revolution is a case of large gains and real costs, so the seminar question is how to weigh them."}
     ],
     builder:[
      "**Technology package.** Semi-dwarf high-yielding varieties (Borlaug’s wheat; IR8 rice, released by the International Rice Research Institute in the Philippines in 1966), plus fertilizer, irrigation, pesticides, credit and public research and extension.",
      "**Defenders.** Prabhu Pingali (*PNAS*, 2012) summarized higher yields, lower real food prices, poverty reduction and land spared from clearing.",
      "**Critics.** Vandana Shiva (*The Violence of the Green Revolution*, 1991) argued it damaged soils and diversity and created dependence on inputs; others stressed early gains to larger farmers, and falling groundwater in north-west India."
     ],
     pro:[
      "**Africa.** Why sub-Saharan Africa had no comparable revolution (diverse crops, rain-fed farming, weaker infrastructure and markets) is debated, as is whether foundation-led efforts such as the Alliance for a Green Revolution in Africa (founded 2006) repeat or adapt the Asian model.",
      "**Political economy.** Historians link the Green Revolution to Cold War aims (preventing hunger-driven unrest) and to the developmental state in South and Southeast Asia (Units 1 and 15).",
      "**Today.** Debates over agroecology, climate-resilient varieties and genetic technologies replay the same questions: who controls seeds, who bears risks, and how to count environmental costs.",
      {tip:"Use the Green Revolution to practice balanced argument: one paragraph for each side’s best evidence, then your judgment and its limits."}
     ]
    },
    related:["famine-entitlements","water-governance","developmental-state-debate"],
    sources:[{t:"Nobel Prize: Norman Borlaug, facts (Peace Prize 1970)", url:"https://www.nobelprize.org/prizes/peace/1970/borlaug/facts/"}],
    checked:"2026-11"},

   {id:"water-governance", title:"Water governance", aka:["WASH","Dublin Principles","human right to water","IWRM","water privatization"], tags:["development","environment","governance"],
    summary:"How water and sanitation are governed: progress on Goal 6, the economic-good versus human-right debate, and integrated management.",
    levels:{
     starter:[
      "Clean water and safe toilets prevent disease, save time (often women’s and girls’ time) and make schools and clinics work. Development workers call the field **WASH**: water, sanitation and hygiene.",
      "Progress is real: between 2015 and 2024 the share of people with safely managed drinking water rose from 68% to 74%. But about 2.1 billion people still lack it, according to the UN’s 2026 report.",
      {key:"Water governance is about who pays, who decides and who is left out, not only pipes."}
     ],
     builder:[
      "**Economic good.** The Dublin Statement (1992) said water has an economic value and should be recognized as an economic good, supporting pricing and private concessions in the 1990s.",
      "**Backlash.** In Cochabamba, Bolivia, in 2000, protests against price rises under a privatized concession forced the contract out; the case became a symbol for critics of privatization.",
      "**Human right.** On 28 July 2010 the General Assembly recognized a human right to water and sanitation (resolution 64/292), by vote; the Human Rights Council followed.",
      "**Goal 6 (2015–2024).** Safely managed drinking water 68% → 74%; safely managed sanitation 48% → 58%; basic hygiene 66% → 80%."
     ],
     pro:[
      "**Integrated management.** Integrated water resources management (IWRM) coordinates water, land and users across a basin. Ostrom’s work on commons (Unit 17) shows that communities can govern water well under certain design conditions.",
      "**Transboundary rivers.** Shared basins such as the Mekong, the Nile and the Indus raise questions of international law and security (Units 10 and 12).",
      "**Evidence.** Research on public versus private provision is mixed; outcomes depend more on regulation, contracts and capacity than on ownership alone. Present each side’s cases.",
      {tip:"For a case study, map the actors (ministry, utility, regulator, private operator, community groups) and follow the tariff: who pays what, and who is subsidized."}
     ]
    },
    related:["commons-governance","green-revolution","humanitarian-development-nexus"],
    sources:[{t:"UN: The human right to water and sanitation (International Decade for Action “Water for Life”)", url:"https://www.un.org/waterforlifedecade/human_right_to_water.shtml"},{t:"UN Statistics Division: SDG Report 2026", url:"https://unstats.un.org/sdgs/report/2026/"}],
    checked:"2026-11"},

   {id:"humanitarian-development-nexus", title:"The humanitarian–development–peace nexus", aka:["HDP nexus","triple nexus","New Way of Working","Grand Bargain"], tags:["development","humanitarian","peace"],
    summary:"Efforts since 2016 to join up emergency relief, long-term development and peacebuilding, and the worries about humanitarian principles.",
    levels:{
     starter:[
      "Emergency aid (food, shelter, medicine) is meant to save lives fast. Development aid builds schools, roads and institutions over years. But many crises last for a decade or more, so the two often work side by side in the same places.",
      "The **nexus** is the idea that humanitarian, development and peace actors should plan and fund together, so that emergency help also reduces future need.",
      {key:"The nexus tries to end the gap between saving lives today and building resilience for tomorrow."}
     ],
     builder:[
      "**World Humanitarian Summit (Istanbul, May 2016).** The Grand Bargain (23 May 2016) committed donors and agencies to reforms, including 25% of humanitarian funding to local and national responders “as directly as possible” by 2020, and closer engagement between humanitarian and development actors. The IASC’s Grand Bargain page lists 63 signatories (as of 2026).",
      "**OECD DAC Recommendation (22 February 2019).** Calls for joint analysis, coordinated programming that prioritizes prevention, and predictable, flexible, multi-year financing. It had 39 adherents as of March 2024: all DAC members and seven UN entities."
     ],
     pro:[
      "**The principles worry.** Humanitarian action rests on humanity, neutrality, impartiality and independence. Development and peace work usually go through governments. Where a government is party to a conflict, joining up can compromise access and trust.",
      "**Localization link.** The nexus and localization share a premise: national and local actors are present before, during and after crises.",
      "**Evidence.** Interim reviews report progress in analysis and planning, and slower change in financing. Treat these as self-assessments by the system and look for independent evaluations.",
      {tip:"In a case study, ask which actor leads, whose analysis is used, and whether money is actually pooled or only plans are."}
     ]
    },
    related:["famine-entitlements","participation-localisation","global-health-architecture","human-security"],
    sources:[{t:"OECD Legal Instruments: DAC Recommendation on the Humanitarian-Development-Peace Nexus", url:"https://legalinstruments.oecd.org/public/doc/643/643.en.pdf"},{t:"IASC: The Grand Bargain", url:"https://interagencystandingcommittee.org/grand-bargain"}],
    checked:"2026-11"},

   {id:"project-cycle-logframe", title:"Project cycles, logframes and results", aka:["logical framework approach","LFA","logframe","ZOPP","results-based management"], tags:["development practice","methods","planning"],
    summary:"The stages through which development projects pass, and the logframe matrix used to design and monitor them, with its critics.",
    levels:{
     starter:[
      "A development project usually moves through a **cycle**: identify a problem, design a response, approve the money, carry it out, monitor it, evaluate it, and learn for next time.",
      "The most common design tool is the **logframe**, a table with four rows (goal, purpose, outputs, activities) and four columns (summary, indicators, where the data come from, and assumptions). Read from the bottom up: if we do these activities and our assumptions hold, these results should follow.",
      {key:"A logframe is a chain of “if… then…” claims. Its assumptions are where projects usually fail."}
     ],
     builder:[
      "**Origins.** Prepared in 1969–70 by Leon Rosenberg and others for the US Agency for International Development; Germany’s aid agency developed a participatory variant called ZOPP (objectives-oriented project planning), and by the early 1990s versions were used by Nordic donors, the European Community and many others.",
      "**Rows.** Goal (the long-term change), purpose or outcome (what the project is responsible for), outputs (what it delivers), activities (what it does).",
      "**Columns.** Narrative summary; objectively verifiable indicators; means of verification; assumptions.",
      "**Results-based management.** The wider practice of planning, budgeting and reporting around results; logframes and theories of change (Unit 8) are its main tools."
     ],
     pro:[
      "**Critiques.** Des Gasper (2000) listed the “lock-frame” (matrices frozen at approval), “tunnel vision” (ignoring unintended effects), box-filling, and top-down imposition by donors. Others argue logframes suit simple, predictable projects but not complex social change.",
      "**Responses.** Adaptive management, outcome mapping and theory-of-change approaches allow revision as a project learns. Many agencies now require a logframe and a theory of change together.",
      {tip:"When reading a logframe, test each assumption: is it likely, can the project influence it, and is anyone monitoring it?"}
     ]
    },
    related:["dac-evaluation-criteria","participation-localisation","writing-a-policy-brief"],
    sources:[{t:"Des Gasper, “Logical Frameworks: Problems and Potentials” (2000)", url:"https://repub.eur.nl/pub/50949/Metis_165267.pdf"}],
    checked:"2026-11"},

   {id:"dac-evaluation-criteria", title:"Evaluation and the OECD-DAC criteria", aka:["DAC criteria","relevance, coherence, effectiveness, efficiency, impact, sustainability","impact evaluation","realist evaluation"], tags:["development practice","evaluation","methods"],
    summary:"The six criteria most aid agencies use to evaluate interventions, and how evaluation methods fit evaluation questions.",
    levels:{
     starter:[
      "How do you judge whether a development project was any good? Most agencies use six questions set by the OECD’s Development Assistance Committee: was it **relevant**, did it fit with other efforts (**coherence**), did it reach its objectives (**effectiveness**), did it use resources well (**efficiency**), what difference did it make (**impact**), and will the benefits last (**sustainability**)?",
      {key:"Evaluation starts with a question; the criteria help choose the question, and the question decides the method."}
     ],
     builder:[
      "**History.** First set out in 1991; revised in 2019, when coherence was added and definitions were updated.",
      "**Two principles.** Apply the criteria thoughtfully to support useful evaluation, and do not apply them mechanistically. An evaluation may focus on a few.",
      "**Types.** Formative (to improve while running) and summative (to judge at the end); process evaluations (was it implemented as planned?) and impact evaluations (did it cause the change?).",
      "**Impact needs a counterfactual.** Randomized trials, difference-in-differences and other designs estimate what would have happened without the intervention (Units 3 and 15)."
     ],
     pro:[
      "**Realist evaluation.** Pawson and Tilley’s *Realistic Evaluation* (1997) asks what works, for whom, in what circumstances and why, focusing on mechanisms and context.",
      "**Politics of evaluation.** Evaluations are commissioned by the funders whose work they judge; independence, publication and learning vary. Southern evaluators and communities increasingly ask to set the questions as well as answer them.",
      "**Using reports.** Many agencies publish evaluations online; they are excellent sources for theses, provided you note who commissioned them and what methods they used.",
      {tip:"Match criterion to method: effectiveness and impact need comparison groups; relevance and coherence need document analysis and interviews; sustainability needs follow-up after funding ends."}
     ]
    },
    related:["project-cycle-logframe","development-rcts","regression-causal-inference","mixed-methods"],
    sources:[{t:"OECD: Evaluation criteria", url:"https://www.oecd.org/en/topics/sub-issues/development-co-operation-evaluation-and-effectiveness/evaluation-criteria.html"}],
    checked:"2026-11"},

   {id:"participation-localisation", title:"Participation and localization", aka:["participatory development","participatory rural appraisal","PRA","shift the power","decolonizing aid","do no harm (aid)"], tags:["development practice","power","ethics"],
    summary:"The movements to let communities shape development and to shift money and power to local organizations, with their critics.",
    levels:{
     starter:[
      "Development projects used to be designed far away and delivered to people. **Participation** means involving the people affected in deciding what to do. **Localization** means giving local and national organizations more of the money and the decisions.",
      "Both sound obviously good, which is why scholars examine them carefully: who actually speaks, who decides, and who controls the budget?",
      {key:"Participation and localization are about power: they matter only if decisions really move."}
     ],
     builder:[
      "**Chambers.** *Rural Development: Putting the Last First* (1983) and *Whose Reality Counts? Putting the First Last* (1997) argued that outsiders’ “development tourism” missed the poorest, and promoted participatory rural appraisal: community maps, seasonal calendars and wealth rankings made by local people.",
      "**The critique.** Cooke and Kothari (eds.), *Participation: The New Tyranny?* (2001): participation can legitimize decisions already taken, reinforce local elites and silence dissent in the name of consensus.",
      "**Localization.** The Grand Bargain (2016) set a target of 25% of humanitarian funding to local and national responders “as directly as possible” by 2020; independent reviews have found direct funding far below that. “Shift the power” and “decolonizing aid” campaigns argue the barriers are structural.",
      "**Do no harm.** Mary B. Anderson’s *Do No Harm* (1999) asked agencies to map how aid acts as a divider or a connector in conflict."
     ],
     pro:[
      "**Arguments against rapid localization.** Donors cite fiduciary risk, accountability to taxpayers and the capacity of small organizations; some local actors are themselves partisan in conflicts. Supporters reply that risk rules are designed for large international bodies and that capacity grows with funding.",
      "**Links.** The local turn in peacebuilding (Unit 12), norm localization (Unit 2) and the anti-politics machine (Unit 15) offer theoretical tools.",
      {tip:"Follow the money: what share of a program’s budget reaches local organizations directly, and who sets their priorities?"}
     ]
    },
    related:["robert-chambers","humanitarian-development-nexus","project-cycle-logframe","fieldwork-ethics"],
    sources:[{t:"Grand Bargain (final text, 23 May 2016)", url:"https://gblocalisation.ifrc.org/wp-content/uploads/2018/06/grand_bargain_final_22_may_final-2_0.pdf"}],
    checked:"2026-11"},

   {id:"robert-chambers", title:"Robert Chambers", aka:["Chambers"], tags:["thinker","development practice","participation"],
    summary:"Development scholar and practitioner who championed participatory methods and asked “whose reality counts?”",
    levels:{
     starter:[
      "Robert Chambers is a development researcher, long based at the Institute of Development Studies in the United Kingdom, with a background in biology, history and public administration. He is the best-known champion of **participatory** development.",
      "His key point: outsiders, experts and officials often fail to see poverty clearly, because they visit the wrong places, at the wrong times, and talk to the wrong people. So he asked development to put “the last first”.",
      {key:"Chambers asks development professionals to learn from poor people before deciding what they need."}
     ],
     builder:[
      "**Key works.** *Rural Development: Putting the Last First* (1983) described the biases of “rural development tourism”: visiting places near roads, in the dry season, meeting men and the better-off. *Whose Reality Counts? Putting the First Last* (1997) turned the critique on professionals themselves.",
      "**Methods.** He popularized participatory rural appraisal (PRA), later participatory learning and action: villagers make maps, timelines, seasonal calendars and wealth rankings, and analyze their own situation.",
      "**Later work.** *Revolutions in Development Inquiry* (2008) reviews how the methods of development research changed from the 1970s onwards. He has also worked on rural sanitation and hygiene, power, professionalism and the personal dimension of development."
     ],
     pro:[
      "**Critics.** Cooke and Kothari’s *Participation: The New Tyranny?* (2001) argued that participatory methods can be captured by elites and used to legitimize outside agendas. Chambers accepted many of the warnings about misuse while defending the methods when done well.",
      "**Legacy.** His insistence on reflexivity (see [[reflexivity]]) and on professionals’ blind spots connects to today’s debates about localization and decolonizing aid.",
      {tip:"Use Chambers’s list of biases as a checklist for your own fieldwork plans: where, when and with whom will you be?"}
     ]
    },
    related:["participation-localisation","fieldwork-ethics"],
    sources:[{t:"Institute of Development Studies: Robert Chambers (profile)", url:"https://www.ids.ac.uk/people/robert-chambers/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"open-working-group", term:"Open Working Group (OWG) on the SDGs", def:"The General Assembly body that drafted the SDGs in 2013–14: 30 seats shared by 70 countries; it proposed 17 goals and 169 targets on 19 July 2014.", codex:"sdg-negotiations"},
   {id:"agenda-2030", term:"2030 Agenda for Sustainable Development", def:"The plan adopted by all UN members on 25 September 2015 (resolution 70/1), containing the 17 SDGs, their 169 targets, and commitments on implementation and review.", codex:"sdg-negotiations"},
   {id:"leave-no-one-behind", term:"Leave no one behind", def:"The 2030 Agenda’s pledge that no group should be excluded from progress, and that the furthest behind should be reached first.", codex:"sdg-negotiations"},
   {id:"universality-sdgs", term:"Universality (of the SDGs)", def:"The principle that the SDGs apply to every country, rich and poor, unlike the MDGs, which were aimed at developing countries.", codex:"sdg-negotiations"},
   {id:"sdg-integration", term:"Integration (of the SDGs)", def:"The idea that the goals are “integrated and indivisible”: progress on one depends on others, so targets can reinforce or constrain each other.", codex:"sdg-critiques"},
   {id:"five-ps", term:"Five Ps", def:"The 2030 Agenda’s grouping of its aims under people, planet, prosperity, peace and partnership.", codex:"sdg-negotiations"},
   {id:"means-of-implementation", term:"Means of implementation", def:"The money, technology, trade, capacity-building and partnerships needed to reach the SDGs; covered by Goal 17 and by targets within each goal.", codex:"sdg-negotiations"},
   {id:"sdg-target", term:"SDG target", def:"One of the 169 specific aims under the 17 goals, often with a date and a number, such as target 3.8 on universal health coverage.", codex:"sdg-indicator-framework"},
   {id:"sdg-indicator", term:"SDG indicator", def:"A measure used to track a target; the global framework has 234 unique indicators as of 2026.", codex:"sdg-indicator-framework"},
   {id:"iaeg-sdgs", term:"IAEG-SDGs", def:"The Inter-agency and Expert Group on SDG Indicators: national statistical offices that develop and refine the indicators under the UN Statistical Commission.", codex:"sdg-indicator-framework"},
   {id:"indicator-tier", term:"Indicator tier", def:"A classification of SDG indicators: Tier I has an agreed method and regular data for most countries; Tier II has an agreed method but irregular data.", codex:"sdg-indicator-framework"},
   {id:"custodian-agency", term:"Custodian agency", def:"The international organization responsible for an SDG indicator’s method and for compiling comparable national data, such as FAO for undernourishment.", codex:"sdg-indicator-framework"},
   {id:"data-disaggregation", term:"Data disaggregation", def:"Breaking statistics down by groups such as sex, age, income, disability, migratory status and location, to see who is left behind.", codex:"sdg-indicator-framework"},
   {id:"sdg-data-gap", term:"SDG data gap", def:"The lack of regular, reliable data for many indicators and groups, which makes progress hard to assess.", codex:"sdg-indicator-framework"},
   {id:"hlpf", term:"High-level Political Forum (HLPF)", def:"The UN forum, created in 2013, that reviews SDG progress every July under ECOSOC and every four years at summit level under the General Assembly.", codex:"hlpf-vnr"},
   {id:"voluntary-national-review", term:"Voluntary national review (VNR)", def:"A government’s self-assessment of its SDG progress, presented at the HLPF; 437 had been presented by July 2026.", codex:"hlpf-vnr"},
   {id:"voluntary-local-review", term:"Voluntary local review (VLR)", def:"A city’s or region’s self-assessment of SDG progress, with no official status; the first were released in 2018.", codex:"sdg-localisation"},
   {id:"sdg-localisation", term:"SDG localization", def:"Adapting the SDGs to local and regional plans, budgets and data, and reporting on them locally.", codex:"sdg-localisation"},
   {id:"sdg-index", term:"SDG Index", def:"The SDSN’s composite score of each country’s SDG performance, built by rescaling indicators to 0–100 and averaging them with equal weight per goal.", codex:"sdg-indicator-framework"},
   {id:"international-spillovers", term:"International spillovers", def:"Effects of one country’s consumption, trade, finance or security policies on other countries’ ability to reach the SDGs.", codex:"sdg-indicator-framework"},
   {id:"goodharts-law", term:"Goodhart’s law", def:"The observation that when a measure becomes a target, it stops being a good measure, because people change behavior to hit the number.", codex:"sdg-indicator-framework"},
   {id:"sdg-washing", term:"SDG-washing", def:"Using SDG language or logos to present business as usual as sustainable development, without real change.", codex:"sdg-critiques"},
   {id:"women-in-development", term:"Women in Development (WID)", def:"The 1970s approach, inspired by Boserup, that sought to integrate women into development projects, often on efficiency grounds.", codex:"wid-wad-gad"},
   {id:"women-and-development", term:"Women and Development (WAD)", def:"A Marxist-feminist response to WID: women were always part of development, but on unequal terms within the global economy.", codex:"wid-wad-gad"},
   {id:"gender-and-development", term:"Gender and Development (GAD)", def:"The approach, from the 1980s, that analyzes power relations between women and men and the institutions that reproduce them.", codex:"wid-wad-gad"},
   {id:"practical-strategic-gender-needs", term:"Practical and strategic gender needs", def:"Moser’s planning distinction (1989), building on Molyneux: needs arising within women’s current roles, versus needs to change unequal gender relations.", codex:"wid-wad-gad"},
   {id:"gender-mainstreaming", term:"Gender mainstreaming", def:"Assessing the effects on women and men of every policy and program; made official strategy by the Beijing Platform for Action (1995).", codex:"wid-wad-gad"},
   {id:"womens-empowerment", term:"Empowerment (Kabeer)", def:"The expansion of people’s ability to make strategic life choices where this ability was previously denied, studied through resources, agency and achievements.", codex:"womens-empowerment"},
   {id:"unpaid-care-work", term:"Unpaid care work", def:"Caring for people and households without pay (cooking, cleaning, child and elder care); not counted in GDP and done mostly by women.", codex:"unpaid-care-work"},
   {id:"triple-r-framework", term:"Recognize, reduce, redistribute (the three Rs)", def:"A policy framework, associated with Diane Elson, for unpaid care: count it, cut its drudgery, and share it more fairly.", codex:"unpaid-care-work"},
   {id:"time-use-survey", term:"Time-use survey", def:"A survey in which people record how they spend their time over a day, used to measure unpaid work.", codex:"unpaid-care-work"},
   {id:"microfinance", term:"Microfinance", def:"Financial services (loans, savings, insurance, payments) for people without access to ordinary banks.", codex:"microfinance"},
   {id:"microcredit", term:"Microcredit", def:"Small loans without collateral, often to women in groups, popularized by the Grameen Bank in Bangladesh.", codex:"microfinance"},
   {id:"joint-liability", term:"Joint liability (group lending)", def:"A lending method in which members of a small group are responsible for each other’s repayments, replacing collateral with peer pressure.", codex:"microfinance"},
   {id:"food-security", term:"Food security", def:"A situation in which all people, at all times, have physical and economic access to sufficient, safe and nutritious food for an active and healthy life (World Food Summit, 1996).", codex:"famine-entitlements"},
   {id:"food-sovereignty", term:"Food sovereignty", def:"The right of peoples to define their own food and farming policies, put forward by La Vía Campesina in 1996 as a rival to food security.", codex:"famine-entitlements"},
   {id:"entitlement-approach", term:"Entitlement approach", def:"Sen’s analysis of famine (1981): people starve when they lose command over food through what they own, produce, earn, trade or receive, not only when food runs short.", codex:"famine-entitlements"},
   {id:"ipc-classification", term:"IPC (Integrated Food Security Phase Classification)", def:"A five-phase scale for food insecurity; Phase 5, Famine, requires thresholds for food gaps, child malnutrition and deaths, checked by a Famine Review Committee.", codex:"famine-entitlements"},
   {id:"green-revolution", term:"Green Revolution", def:"The spread, from the mid-1960s, of high-yielding wheat and rice with fertilizer and irrigation across Asia and Latin America.", codex:"green-revolution"},
   {id:"high-yielding-variety", term:"High-yielding variety (HYV)", def:"A crop variety bred to produce much more grain when given fertilizer and water, such as IR8 rice (1966).", codex:"green-revolution"},
   {id:"iwrm", term:"Integrated water resources management (IWRM)", def:"Coordinated management of water, land and related resources across a basin, balancing users and ecosystems.", codex:"water-governance"},
   {id:"human-right-to-water", term:"Human right to water and sanitation", def:"Recognized by the UN General Assembly on 28 July 2010 (resolution 64/292): everyone’s right to safe, sufficient, affordable water and sanitation.", codex:"water-governance"},
   {id:"wash", term:"WASH", def:"Water, sanitation and hygiene: the field of development work on drinking water, toilets and handwashing.", codex:"water-governance"},
   {id:"universal-health-coverage", term:"Universal health coverage (UHC)", def:"Everyone getting the health services they need without financial hardship; SDG target 3.8.", codex:"global-health-architecture"},
   {id:"primary-health-care", term:"Primary health care", def:"Essential, community-based health care as the first point of contact, made the route to “health for all” by the Alma-Ata Declaration (1978).", codex:"global-health-architecture"},
   {id:"hdp-nexus", term:"Humanitarian–development–peace nexus", def:"Joint analysis, planning and financing across humanitarian, development and peace actors; the subject of an OECD DAC Recommendation (2019).", codex:"humanitarian-development-nexus"},
   {id:"grand-bargain", term:"Grand Bargain", def:"An agreement among donors and aid agencies launched at the World Humanitarian Summit (May 2016) to make humanitarian aid more efficient and more local.", codex:"humanitarian-development-nexus"},
   {id:"aid-localisation", term:"Localization (of aid)", def:"Shifting funding, decisions and leadership to local and national organizations; the Grand Bargain set a 25% target for 2020.", codex:"participation-localisation"},
   {id:"project-cycle", term:"Project cycle", def:"The stages of a development project: identification, design, approval, implementation, monitoring and evaluation, with lessons fed back.", codex:"project-cycle-logframe"},
   {id:"logical-framework", term:"Logical framework (logframe)", def:"A four-by-four matrix of goal, purpose, outputs and activities, with indicators, sources of evidence and assumptions; first prepared for USAID in 1969–70.", codex:"project-cycle-logframe"},
   {id:"results-based-management", term:"Results-based management", def:"Planning, budgeting and reporting organized around intended results rather than activities or spending.", codex:"project-cycle-logframe"},
   {id:"dac-criteria", term:"DAC evaluation criteria", def:"The OECD Development Assistance Committee’s six criteria (relevance, coherence, effectiveness, efficiency, impact, sustainability), revised in 2019.", codex:"dac-evaluation-criteria"},
   {id:"formative-summative-evaluation", term:"Formative and summative evaluation", def:"Formative evaluation improves a program while it runs; summative evaluation judges its results at the end.", codex:"dac-evaluation-criteria"},
   {id:"participatory-rural-appraisal", term:"Participatory rural appraisal (PRA)", def:"Methods, championed by Robert Chambers, in which local people map, rank and analyze their own situation so outsiders learn from them.", codex:"participation-localisation"},
   {id:"safeguarding-aid", term:"Safeguarding (in aid)", def:"Policies to prevent harm, especially sexual exploitation and abuse, by aid workers and organizations to the people they serve.", codex:"participation-localisation"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u17-q01", lesson:"e4u17-l1", level:1, q:"When did all UN members adopt the 2030 Agenda with its 17 SDGs?", options:[
     {t:"25 September 2015", ok:true, why:"Right: resolution 70/1, at the UN Sustainable Development Summit in New York."},
     {t:"8 September 2000", why:"That is the Millennium Declaration, from which the MDGs were drawn."},
     {t:"June 2012", why:"Rio+20 launched the process that led to the SDGs; it did not adopt them."},
     {t:"19 July 2014", why:"That is when the Open Working Group adopted its proposal; the Agenda itself came in 2015."}]},
   {id:"e4u17-q02", lesson:"e4u17-l1", level:2, q:"Which feature most clearly distinguishes the SDGs from the MDGs?", options:[
     {t:"They apply to every country", ok:true, why:"Right: universality. They apply to every country, not only developing ones; this is the central change, alongside a wider scope and negotiation by member states."},
     {t:"They are legally binding", why:"Neither set is legally binding; both are political commitments."},
     {t:"They have numerical targets", why:"The MDGs also had numerical targets."},
     {t:"They focus only on the environment", why:"The SDGs cover social, economic, environmental and institutional issues."}]},
   {id:"e4u17-q03", lesson:"e4u17-l1", level:1, q:"How were the Open Working Group’s 30 seats filled?", options:[
     {t:"Shared among 70 countries, mostly in pairs and trios", ok:true, why:"Right: shared within the regional groups, with 6 single seats, 9 pairs, 14 trios and one seat of four."},
     {t:"By the 30 largest economies", why:"Seats were allocated through the five regional groups, not by economic size."},
     {t:"By the permanent members of the Security Council and their allies", why:"The OWG was a General Assembly body with regional allocation."},
     {t:"By 30 experts chosen by the Secretary-General", why:"That describes an expert panel; the OWG was made up of member states."}]},
   {id:"e4u17-q04", lesson:"e4u17-l1", level:2, q:"William Easterly argued in 2009 that the MDGs were “unfair to Africa”. What was his main point?", options:[
     {t:"Proportional cuts from 1990 made countries starting low look like failures", ok:true, why:"Right: framing targets as proportional reductions from 1990 made countries starting from low levels look like failures even when they improved fast. The critique is about how targets were framed, not about African performance."},
     {t:"African governments were excluded from the Millennium Summit and its drafting", why:"African leaders attended; his point was about target design."},
     {t:"Aid to Africa was cut because of the MDGs", why:"Not his argument; aid to Africa rose in the MDG era."},
     {t:"The MDGs ignored health", why:"Three MDGs were about health."}]},
   {id:"e4u17-q05", lesson:"e4u17-l1", level:1, q:"Which work argued that the SDGs’ growth target conflicts with their ecological goals?", options:[
     {t:"Hickel, “The contradiction of the SDGs” (2019)", ok:true, why:"Right: “The contradiction of the sustainable development goals”. He argued the growth target and ecological goals cannot all be met."},
     {t:"Kabeer, “Resources, Agency, Achievements” (1999)", why:"That is about women’s empowerment."},
     {t:"Sen, *Poverty and Famines* (1981)", why:"That is about famine and entitlements."},
     {t:"Fukuda-Parr and Hulme (2011)", why:"They studied the MDGs as global norms."}]},
   {id:"e4u17-q06", lesson:"e4u17-l1", level:3, q:"Priya writes: “The MDGs cut extreme poverty from 1.9 billion to 836 million people.” What is the strongest objection a seminar tutor would raise?", options:[
     {t:"It assumes the goals caused a fall driven largely by China and India", ok:true, why:"Right: that is the attribution problem. The figures are the UN’s and record a fall during the MDG period, but much of it came from growth in China and India; causation needs separate evidence."},
     {t:"The figures are invented", why:"They come from the UN’s *MDG Report 2015*."},
     {t:"Poverty actually rose during the MDG period, so the figures are the wrong way round", why:"The UN’s figures show a large fall."},
     {t:"The MDGs had no poverty goal", why:"MDG 1 was to eradicate extreme poverty and hunger."}]},
   {id:"e4u17-q07", lesson:"e4u17-l1", level:2, q:"In Nilsson, Griggs and Visbeck’s scale, what does a score of −3 mean?", options:[
     {t:"Canceling: progress on one target makes the other impossible", ok:true, why:"Right. The scale runs from +3 (indivisible) through 0 (consistent) to −3 (canceling)."},
     {t:"Indivisible: the targets can only be achieved together", why:"That is the top of the scale, +3."},
     {t:"Consistent: no significant link", why:"That is the midpoint of the scale, 0."},
     {t:"The target has been missed by three years", why:"The scale measures interactions between targets, not delays."}]},
   {id:"e4u17-q08", lesson:"e4u17-l1", level:3, q:"A government says its new coal power plant serves the SDGs because it supports target 7.1 (access to energy) and 8.1 (growth). What is the best analytical response?", options:[
     {t:"Map the interactions: the plant may help energy and growth but harm climate and air", ok:true, why:"Right: integration means checking trade-offs, not selecting targets that fit. The plant may reinforce energy access and growth while constraining climate (Goal 13) and air quality (target 3.9)."},
     {t:"The claim is true, because supporting any one target is enough to count as serving the SDGs", why:"The Agenda calls the goals indivisible; cherry-picking ignores conflicts."},
     {t:"Coal is banned by the SDGs", why:"The SDGs do not ban specific technologies; the issue is interactions."},
     {t:"Energy is not part of the SDGs", why:"Goal 7 is on energy."}]},
   {id:"e4u17-q09", lesson:"e4u17-l1", level:2, q:"Which issue was among the most contested in the Open Working Group’s final negotiations?", options:[
     {t:"Whether Goal 16 on peaceful societies belonged", ok:true, why:"Right: these were the disputed points. One was whether a goal on peaceful societies and institutions belonged in the agenda. The others were common but differentiated responsibilities, means of implementation, and sexual and reproductive rights."},
     {t:"Whether to include a goal on poverty", why:"Ending poverty was uncontested as Goal 1."},
     {t:"Whether the goals should run to 2030", why:"The 2030 horizon was not a major dispute."},
     {t:"Whether to include any targets at all, or only goals", why:"Everyone accepted targets."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u17-q10", lesson:"e4u17-l2", level:1, q:"How many unique indicators does the SDG global indicator framework contain as of 2026?", options:[
     {t:"234", ok:true, why:"Right; 251 are listed in total because some repeat under more than one target."},
     {t:"17", why:"That is the number of goals."},
     {t:"169", why:"That is the number of targets."},
     {t:"60", why:"That is roughly the number of MDG indicators."}]},
   {id:"e4u17-q11", lesson:"e4u17-l2", level:2, q:"What does a “custodian agency” do for an SDG indicator?", options:[
     {t:"Sets how it is measured and collects comparable national data, for example FAO for undernourishment", ok:true, why:"Right: custodians link national statistics to the global database."},
     {t:"Enforces the target against countries that miss it", why:"There is no enforcement in the SDG system."},
     {t:"Funds the national statistics office", why:"Some agencies support statistics, but that is not what custodianship means."},
     {t:"Writes the voluntary national reviews", why:"Governments write their own VNRs."}]},
   {id:"e4u17-q12", lesson:"e4u17-l2", level:1, q:"According to the UN’s *SDG Report 2026*, what share of the 139 assessable targets showed regression below the 2015 baseline?", options:[
     {t:"15%", ok:true, why:"Right: 15% regressed, 17% stagnated, 32% made marginal progress, 21% moderate, and 15% were on track or met."},
     {t:"50%", why:"Nearly half were advancing only marginally or not at all, but regression alone was 15%."},
     {t:"2%", why:"Too low; the report gives 15%."},
     {t:"36%", why:"36% is the share on track or making moderate progress."}]},
   {id:"e4u17-q13", lesson:"e4u17-l2", level:2, q:"Why are the UN SDG Report and the SDSN’s Sustainable Development Report not directly comparable?", options:[
     {t:"The UN tracks global trends; the SDSN ranks countries", ok:true, why:"Right: different units and methods. The UN assesses global trends target by target; the SDSN scores and ranks countries with a composite index."},
     {t:"One covers 2015 and the other 2030", why:"Both assess progress since 2015 toward 2030."},
     {t:"The SDSN report is secret", why:"It is freely available online."},
     {t:"They use different goals", why:"Both use the same 17 goals."}]},
   {id:"e4u17-q14", lesson:"e4u17-l2", level:3, q:"Kenji’s country’s average child stunting rate fell by a third, and the minister says no group is being left behind. What should Kenji check first?", options:[
     {t:"Disaggregated data for the poorest and other groups", ok:true, why:"Right: whether rates fell for the poorest households, rural areas, minorities and children with disabilities. Averages can fall while some groups stagnate."},
     {t:"Whether the minister was elected", why:"That says nothing about the claim."},
     {t:"Whether neighboring countries did better", why:"Comparison is useful, but the claim is about groups within the country."},
     {t:"Whether stunting is an official SDG indicator at all", why:"It is (under target 2.2), but that does not test the claim."}]},
   {id:"e4u17-q15", lesson:"e4u17-l2", level:1, q:"What is the High-level Political Forum (HLPF)?", options:[
     {t:"The UN forum that reviews SDG progress each year", ok:true, why:"Right: it meets every July, and every four years at summit level. Created in 2013, it meets under ECOSOC and, every four years, the General Assembly."},
     {t:"A UN court that rules on disputes over the SDGs", why:"No court enforces the SDGs."},
     {t:"The World Bank’s board", why:"Unrelated to the HLPF."},
     {t:"An NGO coalition that monitors governments’ SDG work", why:"It is an intergovernmental UN forum, though civil society takes part."}]},
   {id:"e4u17-q16", lesson:"e4u17-l2", level:1, q:"Which municipalities released the first voluntary local reviews in 2018?", options:[
     {t:"Kitakyushu, Toyama and Shimokawa in Japan, and New York City", ok:true, why:"Right, timed for the local and regional governments’ forum at the 2018 HLPF."},
     {t:"Paris, London and Berlin", why:"European cities followed later."},
     {t:"Only national capitals", why:"None of the first four was a national capital; Shimokawa is a small town in Hokkaido."},
     {t:"No city has produced one", why:"UN DESA lists over 400."}]},
   {id:"e4u17-q17", lesson:"e4u17-l2", level:3, q:"A ministry boasts that its country rose ten places in the SDG Index this year. Which is the most important caution?", options:[
     {t:"Ranks depend on method and others’ changes, and can hide weak spots", ok:true, why:"Right: ranks depend on weights, data revisions and other countries’ changes, and a high score can hide poor results on climate or harmful spillovers. A rank change is not proof of a policy effect."},
     {t:"The SDG Index is published by the UN, so its ranking cannot be wrong", why:"It is published by the SDSN, and any index reflects methodological choices."},
     {t:"Rankings never change", why:"They change every year, partly for methodological reasons."},
     {t:"Only spillovers matter", why:"Spillovers are one caution among several."}]},
   {id:"e4u17-q18", lesson:"e4u17-l2", level:2, q:"What does Goodhart’s law warn about SDG indicators?", options:[
     {t:"Once a measure becomes a target, it may stop measuring well", ok:true, why:"Right: people may change behavior to hit the number, so it stops measuring what it was meant to. This is a reason to read indicator gains critically."},
     {t:"Indicators are unreliable, so governments should never use them at all", why:"The point is caution, not abandonment."},
     {t:"Every indicator must be Tier I", why:"Tiers concern methods and data availability."},
     {t:"Targets must have dates", why:"True of many targets, but unrelated to Goodhart’s law."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u17-q19", lesson:"e4u17-l3", level:1, q:"Which book helped launch the Women in Development (WID) approach?", options:[
     {t:"Ester Boserup, *Woman’s Role in Economic Development* (1970)", ok:true, why:"Right: it showed how modernization bypassed women farmers."},
     {t:"Naila Kabeer, *Reversed Realities* (1994)", why:"A later GAD-era critique."},
     {t:"Amartya Sen, *Poverty and Famines* (1981)", why:"About famine and entitlements."},
     {t:"Robert Chambers, *Rural Development* (1983)", why:"About participation and rural poverty."}]},
   {id:"e4u17-q20", lesson:"e4u17-l3", level:2, q:"What most distinguishes GAD from WID?", options:[
     {t:"GAD analyses gender relations of power", ok:true, why:"Right: power relations between women and men and the institutions that reproduce them, rather than only adding women to projects. The shift is from “women” to “gender relations”."},
     {t:"GAD ignores women and studies only men", why:"GAD is about women and men in relation; women’s position remains central."},
     {t:"WID was about men’s roles in development", why:"WID focused on women."},
     {t:"GAD rejects all development projects as harmful", why:"GAD changes how projects are designed, not whether they exist."}]},
   {id:"e4u17-q21", lesson:"e4u17-l3", level:3, q:"A program reports that 10,000 women opened bank accounts and calls this “10,000 women empowered”. Using Kabeer, what is the main problem?", options:[
     {t:"An account is a resource, not evidence of agency", ok:true, why:"Right: the report gives no evidence of agency (who decides about the money) or achievements. Resources are preconditions, not empowerment itself."},
     {t:"Bank accounts cannot be resources", why:"They are resources; the problem is treating them as the whole of empowerment."},
     {t:"Kabeer says only collective action counts as empowerment", why:"She includes individual and collective agency."},
     {t:"The number is too small to matter", why:"Size is not the issue; the inference is."}]},
   {id:"e4u17-q22", lesson:"e4u17-l3", level:1, q:"According to the ILO’s 2018 estimate, what share of unpaid care work is done by women?", options:[
     {t:"76.2%", ok:true, why:"Right: more than three times as much as men."},
     {t:"50%", why:"The ILO found a large gap, not an equal share."},
     {t:"25%", why:"That is roughly men’s share."},
     {t:"99%", why:"Too high; men do about 24%."}]},
   {id:"e4u17-q23", lesson:"e4u17-l3", level:2, q:"Which is a **strategic** gender need in Moser’s sense?", options:[
     {t:"Joint land titles for couples", ok:true, why:"Right: joint titles for wives and husbands change unequal relations over assets."},
     {t:"A well closer to the village", why:"A practical need within women’s current role of fetching water."},
     {t:"A clinic for mothers and babies", why:"A practical need."},
     {t:"Cheaper cooking fuel", why:"A practical need."}]},
   {id:"e4u17-q24", lesson:"e4u17-l3", level:3, q:"Lucía cites microcredit as a proven way to lift women out of poverty. Which revision best fits the evidence?", options:[
     {t:"Six 2015 trials found modest, not transformative, effects", ok:true, why:"Right: six randomized evaluations found modestly positive but not transformative effects, with no consistent income gains and limited effects on empowerment. That is the summary by Banerjee, Karlan and Zinman."},
     {t:"Microcredit has been shown to harm all borrowers", why:"The effects were small and mixed, not uniformly harmful."},
     {t:"There is no evidence either way", why:"There is substantial randomized evidence."},
     {t:"The Nobel Prize proves that microcredit ends poverty for women", why:"A prize is not evidence of impact."}]},
   {id:"e4u17-q25", lesson:"e4u17-l3", level:1, q:"Which SDG target asks countries to recognize and value unpaid care and domestic work?", options:[
     {t:"Target 5.4", ok:true, why:"Right: through public services, infrastructure, social protection and shared responsibility in the household."},
     {t:"Target 3.8", why:"Universal health coverage."},
     {t:"Target 8.1", why:"Economic growth."},
     {t:"Target 10.1", why:"Income growth of the bottom 40%."}]},
   {id:"e4u17-q26", lesson:"e4u17-l3", level:2, q:"Which description of group lending (joint liability) is correct?", options:[
     {t:"Group members are responsible for each other’s repayments", ok:true, why:"Right: it replaces collateral with peer screening and pressure, the Grameen model’s key innovation."},
     {t:"A group of banks lends together to one government borrower", why:"That is a syndicated loan."},
     {t:"Borrowers pledge their land as security", why:"Joint liability replaces collateral."},
     {t:"Loans are only given to men", why:"Most Grameen-style borrowers were women."}]},
   {id:"e4u17-q27", lesson:"e4u17-l3", level:2, q:"According to the UN’s 2026 report, what share of seats in national parliaments (lower or single houses) do women hold?", options:[
     {t:"About 27%", ok:true, why:"Right: 27.4%, and only seven countries had 50% or more."},
     {t:"About 50%", why:"Only seven countries have reached parity or more."},
     {t:"About 10%", why:"Too low for 2026."},
     {t:"About 40%", why:"Higher than the global figure."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u17-q28", lesson:"e4u17-l4", level:2, q:"What is the core claim of Sen’s entitlement approach?", options:[
     {t:"Famine is about lost access to food, not only supply", ok:true, why:"Right: famines occur when groups lose the ability to command food, even if total food supply has not fallen much. The focus moves from supply to access."},
     {t:"Famines are always caused by drought and harvest failure", why:"Sen showed that some famines occurred without major supply falls."},
     {t:"Famines are caused by overpopulation", why:"Not Sen’s argument."},
     {t:"Famines only happen in democracies", why:"Sen argued the opposite: functioning democracies avoid substantial famines."}]},
   {id:"e4u17-q29", lesson:"e4u17-l4", level:1, q:"Which of these is one of the IPC’s three thresholds for Famine (Phase 5)?", options:[
     {t:"At least 30% of children acutely malnourished", ok:true, why:"Right, together with 20% of households facing extreme food gaps and two deaths per 10,000 people a day."},
     {t:"A national harvest 10% below average", why:"The IPC uses household, nutrition and mortality evidence."},
     {t:"A declaration by the Security Council", why:"No single body declares famine; the IPC classifies it."},
     {t:"Food prices doubling", why:"Prices are a driver, not a threshold."}]},
   {id:"e4u17-q30", lesson:"e4u17-l4", level:2, q:"How does Alex de Waal’s argument in *Mass Starvation* (2018) differ from Sen’s emphasis?", options:[
     {t:"De Waal stresses that most modern famines are political, caused or prolonged by war, sieges and blocked aid", ok:true, why:"Right: entitlements destroyed by force, not only by markets."},
     {t:"De Waal says famines are caused by too little food production", why:"He does not return to the supply view."},
     {t:"De Waal denies that famines still occur", why:"He documents recent famines."},
     {t:"De Waal agrees completely with Sen and adds nothing", why:"He shifts the focus to political causes."}]},
   {id:"e4u17-q31", lesson:"e4u17-l4", level:3, q:"A minister says: “There can be no famine here; our granaries are full.” Using this lesson, what is the best reply?", options:[
     {t:"Full granaries do not guarantee access, so check incomes and prices too", ok:true, why:"Right: if wages fall or prices rise, some groups can lose their entitlement to food. Bengal 1943 is the classic case."},
     {t:"The minister is right: famine can only follow a fall in total food supply", why:"That is the view Sen criticized."},
     {t:"Granaries are irrelevant to food security", why:"Availability matters; it is just not enough."},
     {t:"Only the IPC can comment, so nothing can be said", why:"The IPC classifies famine, but analysis of risk is open to anyone."}]},
   {id:"e4u17-q32", lesson:"e4u17-l4", level:1, q:"What does food sovereignty emphasize that food security does not?", options:[
     {t:"Who controls food and farming policy", ok:true, why:"Right, and the rights of small producers: La Vía Campesina’s 1996 frame."},
     {t:"How many calories people eat each day", why:"That is part of food security."},
     {t:"Food aid from donors", why:"Food sovereignty is wary of dependence on food aid and imports."},
     {t:"Only international trade", why:"It challenges trade liberalization but is about control more broadly."}]},
   {id:"e4u17-q33", lesson:"e4u17-l4", level:2, q:"Which is a critique typically made of the Green Revolution?", options:[
     {t:"It depleted groundwater and favored larger farmers", ok:true, why:"Right: it also reduced crop diversity, and larger farmers gained first. These are environmental and distributional critiques, for example by Shiva (1991)."},
     {t:"It lowered crop yields across Asia", why:"Yields rose sharply; critics focus on costs."},
     {t:"It started in sub-Saharan Africa and stayed there", why:"It spread mainly in Asia and Latin America."},
     {t:"It used no chemical fertilizer or irrigation, only seeds", why:"The package depended on fertilizer and irrigation."}]},
   {id:"e4u17-q34", lesson:"e4u17-l4", level:1, q:"When did the UN General Assembly recognize the human right to water and sanitation?", options:[
     {t:"28 July 2010 (resolution 64/292)", ok:true, why:"Right, by vote."},
     {t:"1948, in the Universal Declaration", why:"The UDHR does not name water explicitly."},
     {t:"1992, in the Dublin Statement", why:"The Dublin Statement called water an economic good."},
     {t:"2015, in the SDGs", why:"Goal 6 came later; the right was recognized in 2010."}]},
   {id:"e4u17-q35", lesson:"e4u17-l4", level:3, q:"An agency proposes to run its health and food programs in a war zone jointly with the government’s development ministry, under the nexus. A humanitarian NGO objects. What is its most likely concern?", options:[
     {t:"Working with one party could compromise its neutrality and access", ok:true, why:"Right: working closely with one party to the conflict could compromise its neutrality and independence, and so its access to people on all sides. This is the main principled worry about the nexus."},
     {t:"Development programs are always illegal in war under humanitarian law", why:"They are not; the concern is principles and access."},
     {t:"The nexus bans cooperation with governments", why:"It encourages coordination."},
     {t:"Humanitarians never think beyond the short term", why:"Many support longer-term planning; the issue is how."}]},
   {id:"e4u17-q36", lesson:"e4u17-l4", level:2, q:"What did the UN’s 2026 report find about universal health coverage?", options:[
     {t:"Coverage rose only slightly, and billions lacked essential services", ok:true, why:"Right: the service coverage index rose only from 68 to 71 between 2015 and 2023, and 4.6 billion people lacked essential services."},
     {t:"Universal health coverage was achieved worldwide in 2025, ahead of schedule", why:"Far from it."},
     {t:"Coverage fell by half since 2015", why:"It rose slightly."},
     {t:"UHC is not an SDG target", why:"It is target 3.8."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u17-q37", lesson:"e4u17-l5", level:1, q:"Which criterion did the OECD’s Development Assistance Committee add in 2019?", options:[
     {t:"Coherence", ok:true, why:"Right: how well an intervention fits with other interventions and policies."},
     {t:"Effectiveness", why:"One of the original five."},
     {t:"Sustainability", why:"One of the original five."},
     {t:"Relevance", why:"One of the original five."}]},
   {id:"e4u17-q38", lesson:"e4u17-l5", level:2, q:"In a logframe, which column do critics say is most important and most neglected?", options:[
     {t:"Assumptions", ok:true, why:"Right: projects often fail because conditions outside their control do not hold."},
     {t:"Narrative summary", why:"Usually filled in carefully."},
     {t:"Indicators", why:"Important, but rarely ignored."},
     {t:"Activities", why:"A row, and usually the most detailed part."}]},
   {id:"e4u17-q39", lesson:"e4u17-l5", level:3, q:"An evaluation asks whether a school-meals project raised test scores. Which design gives the strongest answer?", options:[
     {t:"Comparing similar schools with and without the project, ideally assigned at random, before and after", ok:true, why:"Right: an impact question needs a counterfactual."},
     {t:"Interviewing the project manager", why:"Useful for process, but not for attributing impact."},
     {t:"Counting meals served", why:"That measures outputs, not impact."},
     {t:"Checking whether the budget was spent on time", why:"That is efficiency or process, not impact."}]},
   {id:"e4u17-q40", lesson:"e4u17-l5", level:1, q:"Who wrote *Rural Development: Putting the Last First* (1983)?", options:[
     {t:"Robert Chambers", ok:true, why:"Right: a founding text for participatory development."},
     {t:"Mary B. Anderson", why:"She wrote *Do No Harm* (1999)."},
     {t:"Bill Cooke and Uma Kothari", why:"They edited *Participation: The New Tyranny?* (2001)."},
     {t:"Des Gasper", why:"He wrote on logframes."}]},
   {id:"e4u17-q41", lesson:"e4u17-l5", level:2, q:"What was the main argument of *Participation: The New Tyranny?* (2001)?", options:[
     {t:"Participation can legitimize decisions already made and empower elites", ok:true, why:"Right: it can legitimize decisions already taken, empower local elites and hide power behind talk of consensus. A critique of how participation is practiced."},
     {t:"Participation should be made compulsory by law", why:"Not their argument."},
     {t:"Participation is unnecessary because outside experts already know best", why:"They criticized misuse of participation, not the idea of listening."},
     {t:"Only governments should participate", why:"Not their argument; they wrote about community participation."}]},
   {id:"e4u17-q42", lesson:"e4u17-l5", level:1, q:"What localization target did the Grand Bargain (2016) set?", options:[
     {t:"At least 25% to local and national responders by 2020", ok:true, why:"Right: commitment 2.4, at least 25% of humanitarian funding to local and national responders as directly as possible."},
     {t:"100% of humanitarian funding to local responders by 2016", why:"Far above the actual target."},
     {t:"0.7% of national income as aid", why:"That is the UN aid target from 1970."},
     {t:"25% of development aid to international NGOs by 2020", why:"The target was for local and national responders."}]},
   {id:"e4u17-q43", lesson:"e4u17-l5", level:3, q:"In a divided district, an agency hires guards and drivers only from the majority community and channels food through its leaders. Which framework best diagnoses the risk?", options:[
     {t:"Anderson’s “do no harm”", ok:true, why:"Right: aid may act as a divider that deepens the conflict. Map dividers and connectors and redesign distribution and hiring."},
     {t:"The DAC efficiency criterion", why:"Efficiency does not capture conflict effects."},
     {t:"Goodhart’s law", why:"That concerns measures becoming targets."},
     {t:"The logframe’s activities row", why:"A design tool, not a conflict diagnosis."}]},
   {id:"e4u17-q44", lesson:"e4u17-l5", level:2, q:"Which addition most improves a development policy brief that recommends a program based on one trial in another country?", options:[
     {t:"A discussion of whether the conditions that made it work there also hold here (external validity)", ok:true, why:"Right: evidence from one context may not transfer."},
     {t:"More adjectives describing the program’s success", why:"Style does not strengthen evidence."},
     {t:"Removing the costs to keep it short", why:"Costs are essential for decision-makers."},
     {t:"Stating that the trial proves it works everywhere", why:"That overclaims."}]},
   {id:"e4u17-q45", lesson:"e4u17-l5", level:3, q:"Oluwaseun wants a seminar argument that links the four units of the sustainable development cluster. Which plan is strongest?", options:[
     {t:"One cross-cutting debate, evidence from two units, and honest limits", ok:true, why:"Right: choose one cross-cutting debate (for example, who decides and who pays), use evidence from at least two units, and state what the evidence cannot show."},
     {t:"Summarize each unit in turn", why:"A summary is not an argument."},
     {t:"Argue that the SDGs solve every problem raised in the other three units", why:"An overclaim with no evidence."},
     {t:"Avoid counter-arguments to keep it clear", why:"Seminar arguments are judged partly on how they handle counter-arguments."}]}
  ]
});
