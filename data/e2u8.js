/* Social Science Primers · International Relations Unit 4 (Unit 8) · War, peace and global challenges */
ICA.addUnit({
  id:"e2u8", track:"e2", n:8, title:"War, peace and global challenges", icon:"🕊️",
  blurb:"How researchers count wars and explain why they start; how states and people try to stay secure; how peace is made, kept and built; and why shared problems such as climate change and pandemics are so hard to solve together. The unit ends with a toolkit for reading world news and a bridge to Migration Studies.",
  goals:[
    "Classify armed conflicts with the UCDP definitions and read conflict statistics carefully, with sources and years",
    "Explain why wars start using the individual, state and system levels of analysis and the bargaining puzzle",
    "Explain deterrence, the NPT, human security, securitisation and why terrorism is hard to define",
    "Tell peacemaking, peacekeeping and peacebuilding apart and judge what makes peace last",
    "Explain collective action problems and use them to analyse climate change, pandemics and other global challenges",
    "Read world news like an IR student: spot the lens, count the voices and go to the primary documents"
  ],
  read:[
    {book:"eir", where:"Chapter 11 “Protecting People”, Chapter 14 “Transnational Terrorism”, Chapter 15 “The Environment”, Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” and Chapter 18 “Crossings and Candles”", note:"Chapter numbers follow the E-IR edition (and its LibreTexts copy). Read each one after the matching lesson: the lessons build the background these short chapters assume."},
    {book:"eirt", where:"Chapter 14 “Securitisation Theory” (Clara Eroukhmanoff) and Chapter 11 “Green Theory” (Hugh C. Dyer)"},
    {book:"ospol", where:"Chapter 14 “International Relations”, sections 14.1 “What Is Power, and How Do We Measure It?” and 14.4 “Using Levels of Analysis to Understand Conflict”; Chapter 15, section 15.1 “The Problem of Global Governance”; Chapter 16, section 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"The gentlest of the three books. Its examples are mostly from the United States."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u8-l1", title:"Armed conflict: what counts, and what the data shows", minutes:55,
   hook:{q:"Since 1946, which kind of armed conflict has been the most common in the records of the Uppsala Conflict Data Program (UCDP), one of the most widely used conflict datasets?", options:["Wars between two or more states","Fighting between a government and armed groups inside its own country","Colonial wars between empires and independence movements","Wars between alliances of great powers"], answer:1, reveal:"**Fighting inside countries**, between a government and one or more armed groups. Wars between states fill history books, but most armed conflicts since 1946 have been fought within a country’s borders, often with outside help. This lesson shows how researchers decide what counts as a conflict, what the numbers say, and how to read them without being misled."},
   goals:[
     "Tell apart interstate, intrastate, internationalized and extrasystemic conflicts, and recognise non-state conflict and one-sided violence",
     "Apply the UCDP thresholds of 25 and 1,000 battle-related deaths to decide what counts as an armed conflict or a war",
     "Describe what conflict data shows about long-term trends and about 2025, giving the source and year",
     "Read conflict statistics critically: counts versus deaths, coding rules, revisions and what the numbers leave out"
   ],
   learn:[
    {h:"When does violence become a “war”?", body:[
      {lead:"A scuffle outside a bar, a feud between two families, a riot, a war: all involve violence, but they are not the same thing."},
      "Imagine trying to compare football across a hundred countries when every referee uses different rules. You would need one shared rulebook first. Researchers who study war have the same problem. To compare Colombia with Cambodia, or the 1960s with today, they need clear rules for what counts.",
      "In International Relations, [[war]] means **organised**, **political** and **sustained** armed violence. Organised means armies or armed groups with some command structure, not individuals acting alone. Political means the fighting is about who governs a country or who controls a territory. Sustained means it goes beyond a single clash.",
      "Two research projects supply most of the numbers you will meet. The **Uppsala Conflict Data Program** (UCDP), at Uppsala University in Sweden, records state-based armed conflict from 1946 onwards (and its other kinds of organised violence from 1989), and works with the Peace Research Institute Oslo (PRIO). The **Correlates of War** project, started in 1963 by J. David Singer (the same Singer who wrote about [[levels-of-analysis|levels of analysis]]), uses its own, slightly different rules. Numbers built this way are called [[conflict-data|conflict data]].",
      "UCDP’s rulebook has two key thresholds:",
      {list:[
        "A **state-based armed conflict** is a dispute over government or territory in which armed force between two sides, at least one of them a state’s government, causes **at least 25 battle-related deaths in one calendar year**.",
        "A **war** is a state-based conflict that reaches **at least 1,000 battle-related deaths in one calendar year**."
      ]},
      "“Battle-related deaths” include soldiers, fighters and civilians killed in the fighting itself, such as people caught in crossfire.",
      {ex:"Three disputes, one year each:\n• A border clash kills 12 soldiers. Below 25: not recorded as an armed conflict that year.\n• A government fights a rebel group; 600 people die in battles. An armed conflict, but not a war.\n• The same fight escalates the next year to 1,400 battle deaths. Now it counts as a war for that year.", label:"Worked example"},
      {key:"In UCDP’s terms every war is an armed conflict, but most armed conflicts never reach the 1,000-death level of a war."}
    ]},
    {h:"Who is fighting whom?", body:[
      "The thresholds tell you **how much** violence there is. The next question is **who** is fighting. UCDP sorts state-based conflicts into four kinds, and records two other kinds of organised violence separately.",
      {table:[
        ["Kind","Who fights","Historical example"],
        ["Interstate","Two or more governments","Iran–Iraq War, 1980–1988"],
        ["Intrastate","A government against armed groups in its own country","Sri Lanka: government against the Tamil Tigers (LTTE), ended 2009"],
        ["Internationalized intrastate","As above, but other states send troops to help a side","Angola: Cuban troops fought beside the government from 1975"],
        ["Extrasystemic","A state against a group outside its own territory, mostly colonial wars","France in Algeria, 1954–1962"],
        ["Non-state conflict","Two organised armed groups, neither of them a government","Fighting between rival drug cartels"],
        ["One-sided violence","A government or armed group deliberately killing unarmed civilians","The genocide against the Tutsi in Rwanda, 1994"]
      ]},
      "Most of the time people call intrastate conflicts [[civil-war|civil wars]], and an [[interstate-war|interstate war]] is the classic war between countries. When outside states send troops, the conflict becomes an [[internationalized-conflict|internationalized intrastate conflict]]. Sending weapons or money alone doesn’t change the category in UCDP’s rules; sending troops who take part in the fighting does.",
      {fig:'<svg viewBox="0 0 340 452"><text x="170" y="18" text-anchor="middle">Organised armed violence (UCDP)</text><rect class="d-panel" x="8" y="28" width="324" height="232" rx="10" stroke-width="2"/><text x="170" y="50" text-anchor="middle">State-based armed conflict</text><text class="s" x="170" y="67" text-anchor="middle">a government fights; 25+ battle deaths a year</text><rect class="d-lup" x="18" y="78" width="138" height="38" rx="6" stroke-width="1.5"/><text x="87" y="102" text-anchor="middle">Interstate</text><text x="244" y="102" text-anchor="middle">Gov A ⟷ Gov B</text><rect class="d-lup" x="18" y="122" width="138" height="38" rx="6" stroke-width="1.5"/><text x="87" y="146" text-anchor="middle">Intrastate</text><text x="244" y="139" text-anchor="middle">Gov ⟷ armed group</text><text class="s" x="244" y="154" text-anchor="middle">inside the country</text><rect class="d-lup" x="18" y="166" width="138" height="38" rx="6" stroke-width="1.5"/><text x="87" y="182" text-anchor="middle">Internationalized</text><text class="s" x="87" y="197" text-anchor="middle">intrastate</text><text x="244" y="183" text-anchor="middle">as above, plus</text><text class="s" x="244" y="198" text-anchor="middle">foreign troops on a side</text><rect class="d-lup" x="18" y="210" width="138" height="38" rx="6" stroke-width="1.5"/><text x="87" y="234" text-anchor="middle">Extrasystemic</text><text x="244" y="227" text-anchor="middle">Gov ⟷ group abroad</text><text class="s" x="244" y="242" text-anchor="middle">mostly colonial wars</text><rect class="d-gold" x="8" y="272" width="324" height="68" rx="10" stroke-width="2"/><text x="170" y="298" text-anchor="middle">Non-state conflict</text><text class="s" x="170" y="320" text-anchor="middle">armed group ⟷ armed group, no government</text><rect class="d-rose" x="8" y="352" width="324" height="68" rx="10" stroke-width="2"/><text x="170" y="378" text-anchor="middle">One-sided violence</text><text class="s" x="170" y="400" text-anchor="middle">government or group → unarmed civilians</text><text class="s" x="170" y="442" text-anchor="middle">War = 1,000+ battle deaths in one calendar year</text></svg>', alt:"Diagram of UCDP’s categories. A large panel for state-based armed conflict, where a government fights and at least 25 battle deaths occur in a year, holds four kinds: interstate (government against government), intrastate (government against an armed group inside the country), internationalized intrastate (the same with foreign troops on one side) and extrasystemic (government against a group abroad, mostly colonial wars). Below are two separate panels: non-state conflict (armed group against armed group) and one-sided violence (government or group against unarmed civilians). A note says a war means 1,000 or more battle deaths in one calendar year.", cap:"UCDP records three families of organised violence. Only the first, where a government is one side, is called “armed conflict” in its strict sense."},
      {tip:"Words differ between datasets and newsrooms. Correlates of War uses its own categories; journalists often say “civil war” for any fighting inside a country. When you compare numbers, check that both sources use the same definitions."}
    ]},
    {h:"What the data shows: the long view", body:[
      "Look at UCDP’s records from 1946 to today and a few patterns stand out. Researchers describe them in broadly similar ways:",
      {list:[
        "**Wars between states became rare after 1945.** In most years there have been only a handful, sometimes none.",
        "**Conflicts inside countries dominate.** Their number grew during the [[cold-war|Cold War]], as [[decolonization|decolonisation]] created many new states, and reached a high point in the early 1990s, around the collapse of the Soviet Union and Yugoslavia.",
        "**A fall, then a rise.** The number of conflicts fell from the early 1990s to the late 2000s, then climbed again from the 2010s, passing the early-1990s high to reach new records in the 2020s.",
        "**More internationalization.** A growing share of conflicts inside countries involve troops from other states."
      ]},
      "The latest release, published by UCDP in June 2026 and covering 2025, reported:",
      {list:[
        "**65** state-based armed conflicts, the highest number since records began in 1946.",
        "**8** of them interstate, also the highest since 1946 (up from 2 in 2023).",
        "**13** wars, the most since 1992.",
        "About **244,600** people killed in organised violence of all three kinds, the second-deadliest year since 1994.",
        "About **76,500** deaths from one-sided violence, the highest since 1994, mostly linked to the war in Sudan; and about **14,500** deaths in non-state conflicts, the lowest since 2013."
      ]},
      {fig:'<svg viewBox="0 0 340 236"><text x="170" y="18" text-anchor="middle">Deaths in organised violence, 2025</text><text class="s" x="170" y="36" text-anchor="middle">UCDP, June 2026 (rounded)</text><text x="8" y="72">State-based</text><rect class="d-lup" x="100" y="56" width="180" height="24" rx="4" stroke-width="1.5"/><text class="s" x="286" y="72">≈153,600</text><text x="8" y="116">One-sided</text><rect class="d-rose" x="100" y="100" width="90" height="24" rx="4" stroke-width="1.5"/><text class="s" x="196" y="116">≈76,500</text><text x="8" y="160">Non-state</text><rect class="d-gold" x="100" y="144" width="17" height="24" rx="4" stroke-width="1.5"/><text class="s" x="123" y="160">≈14,500</text><path class="d-soft" d="M100 48 V176" stroke-width="1.5"/><text class="s" x="170" y="200" text-anchor="middle">Total ≈ 244,600. The state-based bar is the</text><text class="s" x="170" y="218" text-anchor="middle">total minus the two figures UCDP reported.</text></svg>', alt:"Horizontal bar chart of deaths in organised violence in 2025 from UCDP’s June 2026 release: state-based conflicts about 153,600 (the longest bar), one-sided violence about 76,500 (half as long) and non-state conflicts about 14,500 (a short bar). Total about 244,600.", cap:"Bar lengths are to scale. UCDP reported the total and the one-sided and non-state figures; the state-based figure here is what remains."},
      {warn:"These figures change every year, and UCDP revises earlier years as better information arrives. Always give the source and the year (“UCDP, 2025 data, released June 2026”) rather than “there are 65 wars in the world”."}
    ]},
    {h:"Reading conflict numbers like a researcher", body:[
      "Conflict statistics are some of the hardest numbers in social science to collect. Fighting happens where journalists can’t go, governments hide losses, and armed groups exaggerate. UCDP publishes a **best estimate** with lower and higher estimates for that reason. Five questions help you read any conflict figure:",
      {ol:[
        "**Which dataset and which definitions?** UCDP, Correlates of War and others draw the lines differently, so their counts differ.",
        "**Counting conflicts or counting deaths?** “A record number of conflicts” can mean many small ones. A year with fewer conflicts can still be deadlier.",
        "**Direct or indirect deaths?** UCDP counts people killed by violence. Wars also kill through hunger, disease and destroyed hospitals; studies of some wars suggest these indirect deaths can be larger, but they are much harder to measure and are not in these counts.",
        "**Absolute numbers or rates?** The world’s population is more than three times larger than in 1950. The same number of deaths is a smaller share of humanity today, so researchers often use deaths per 100,000 people.",
        "**Which year, and has it been revised?** Check the release date."
      ]},
      {ex:"Headline: “Conflicts hit record high: the world has never been more violent.”\nThe first half can be true (a record **count** of state-based conflicts in 2025). The second half doesn’t follow: UCDP called 2025 the second-deadliest year since 1994, so by deaths it was not a record, and rates per person were far higher in the world wars.", label:"Worked example"},
      {tip:"This is the same habit of mind as {{correlation-causation|reading research claims}} and {{lateral-reading|lateral reading}}: check what was measured before deciding what it means."}
    ]},
    {h:"Is war declining? A live debate", body:[
      "No [[great-power|great powers]] have fought each other directly since 1945. The historian John Lewis Gaddis called this the **“long peace”**, in a 1986 article and a 1987 book of that name. Whether it reflects a deeper change is one of the field’s big debates.",
      {list:[
        "**The decline view.** The psychologist Steven Pinker (*The Better Angels of Our Nature*, 2011) and the political scientist Joshua Goldstein (*Winning the War on War*, 2011) argued that war deaths, relative to population, fell sharply over the long run, helped by trade, democracy, international institutions and changing norms.",
        "**The sceptical view.** Bear Braumoeller (*Only the Dead*, 2019) found no clear decline in how often states start wars. Statisticians such as Pasquale Cirillo and Nassim Nicholas Taleb argued that because rare, enormous wars dominate the totals, a few quiet decades are weak evidence that the risk has really fallen."
      ]},
      {key:"Both sides use real data. They disagree about what to measure (deaths, rates or how often wars start) and how to treat rare, huge wars. That is a disagreement about method, not about facts alone."},
      "Each lens from {{ir-theory|Unit 6}} reads the long peace differently. A {{realism|realist}} credits nuclear deterrence and the balance of power. A {{liberalism-ir|liberal}} credits trade, democracy and institutions. A {{constructivism|constructivist}} points to a [[norm]] against conquest that has grown stronger. You will meet each of these explanations again in this unit."
    ]},
    {h:"Old wars, “new wars”, and the rules of war", body:[
      "In *New and Old Wars* (1999), the scholar Mary Kaldor argued that many conflicts after the Cold War were a new type: fought over identity rather than ideology, by loose networks of armed groups, mostly against civilians, and funded through global criminal economies. Critics such as Stathis Kalyvas (2001) replied that most of these features existed in earlier civil wars too, and that the “new” look partly came from better reporting. Both points are worth keeping.",
      "Whatever kind of war it is, it has rules. [[international-humanitarian-law|International humanitarian law]] (the law of armed conflict) is built on the Hague Conventions of 1899 and 1907 and the four Geneva Conventions of 1949, which every state has joined, plus their Additional Protocols of 1977. The International Committee of the Red Cross (ICRC) acts as its guardian.",
      {table:[
        ["Rule family","Question it answers","Where it comes from"],
        ["Jus ad bellum","When may a state use force at all?","UN Charter: Article 2(4) bans force; Article 51 allows self-defence; the Security Council can authorise force"],
        ["Jus in bello","How must fighting be conducted?","Hague and Geneva Conventions and customary law"]
      ]},
      "The core rules of conduct are **distinction** (attack only combatants and military targets, never civilians as such), **proportionality** (expected harm to civilians must not be excessive compared with the expected military advantage) and **precaution** (take feasible steps to spare civilians, such as warnings). These rules apply to every side, whatever the reasons for the war. Serious breaches are [[war-crimes|war crimes]], which national courts and the [[international-criminal-court|International Criminal Court]] can try; Unit 7 covers how {{international-courts|those courts}} work."
    ]}
   ],
   try:[
    {id:"e2u8-l1-x1", type:"mcq", q:"In one calendar year, fighting between the government of a country and a rebel group causes about 400 battle-related deaths. Using UCDP’s definitions, how is it recorded for that year?", options:[
      {t:"As a state-based armed conflict, but not a war", ok:true, why:"Right. It passes the 25-death threshold for an armed conflict, with a government on one side, but stays below the 1,000 deaths needed for a war."},
      {t:"As a war, because a government is fighting", why:"A government being involved makes it state-based, but a war needs at least 1,000 battle-related deaths in one calendar year. 400 is below that."},
      {t:"Not at all, because only wars between countries are counted", why:"UCDP counts fighting inside countries too. In fact, most conflicts in its data are intrastate."},
      {t:"As a non-state conflict, because rebels are not a state", why:"Non-state conflict means neither side is a government. Here the government is one side, so it is state-based."}
    ]},
    {id:"e2u8-l1-x2", type:"sort", q:"Sort these invented cases into UCDP’s categories. Assume each one causes at least 25 deaths in a year.", buckets:["Interstate","Intrastate","Internationalized intrastate","Non-state conflict"], items:[
      {t:"The armies of two neighbouring countries fight over a border valley.", b:0, why:"Two governments fighting each other is an interstate conflict."},
      {t:"A government’s army fights a separatist group in its northern provinces; no other country takes part.", b:1, why:"A government against an armed group inside its own country, with no foreign troops, is intrastate."},
      {t:"A government fights rebels at home, and a neighbouring state sends troops who fight on the government’s side.", b:2, why:"Foreign troops actively taking part make an intrastate conflict internationalized."},
      {t:"Two militias fight each other for control of a gold-mining area; the national army stays out.", b:3, why:"Neither side is a government, so it is a non-state conflict."},
      {t:"Rebels fight the government, and a foreign state sends troops who fight alongside the rebels.", b:2, why:"It doesn’t matter which side the foreign troops support: their active participation makes the conflict internationalized."},
      {t:"Two rival armed gangs fight over smuggling routes in a border region.", b:3, why:"Two organised armed groups, neither a government, fighting each other is non-state conflict."}
    ]},
    {id:"e2u8-l1-x3", type:"number", q:"UCDP reported about 244,600 deaths in organised violence in 2025, of which about 76,500 were from one-sided violence (deliberate killing of civilians). What percentage of all deaths in organised violence was one-sided? Round to a whole number.", answer:31, tol:1, unit:"%", why:"76,500 ÷ 244,600 = 0.313, and 0.313 × 100 ≈ 31%. Almost a third of the people killed in organised violence in 2025 were civilians deliberately targeted.", wrongs:[
      {v:69, tol:1, why:"That is the share that was **not** one-sided: 100 − 31. Divide the one-sided deaths by the total."},
      {v:320, tol:5, why:"That divides the wrong way round (244,600 ÷ 76,500 ≈ 3.2, then × 100). The part goes on top: 76,500 ÷ 244,600."},
      {v:0.31, tol:0.02, why:"You divided correctly (0.31) but stopped one step early. Multiply by 100 to get a percentage: 0.313 × 100 ≈ 31."}
    ], hint2:"Percentage = part ÷ whole × 100."},
    {id:"e2u8-l1-x4", type:"spot", q:"A blog post about conflict data. Tap the claims that misread or overstate the numbers.", ask:"misreads or overstates the data", parts:[
      "According to UCDP’s June 2026 release, ",
      {t:"there were 65 state-based armed conflicts in 2025, the most since 1946", flag:false, why:"This matches what UCDP reported, with the source and year. It is fine."},
      ". ",
      {t:"This proves the world has never been more violent", flag:true, why:"A record **count** of conflicts isn’t a record level of violence. UCDP itself called 2025 the second-deadliest year since 1994, and death rates per person were far higher in the world wars."},
      ". ",
      {t:"Eight of the conflicts were between states", flag:false, why:"This matches UCDP’s figure for interstate conflicts in 2025."},
      ", and ",
      {t:"since all 65 are wars, each killed at least 1,000 people", flag:true, why:"Wrong: UCDP classified 13 of the 65 as wars. The rest passed the 25-death threshold for armed conflict without reaching 1,000 battle deaths."},
      ". ",
      {t:"The figures also capture everyone who died of hunger and disease because of the fighting", flag:true, why:"UCDP counts deaths caused directly by violence. Indirect deaths from hunger, disease and destroyed services are not in these numbers."},
      ". ",
      {t:"UCDP publishes best estimates, with lower and higher figures", flag:false, why:"True. Because counting deaths in war zones is hard, UCDP gives a range around its best estimate."},
      "."
    ]},
    {id:"e2u8-l1-x5", type:"mcq", q:"A classmate says: “Pinker showed war is declining, so the debate is over.” Which reply describes the debate most fairly?", options:[
      {t:"The debate is about method: critics such as Braumoeller found no clear fall in how often wars start, and rare huge wars make short trends hard to read.", ok:true, why:"Yes. Both sides use real data; they disagree about what to measure and how much a few calm decades can tell us about the risk of rare, very large wars."},
      {t:"Pinker was simply wrong; war deaths have risen steadily since 1945.", why:"That overstates the critics. Deaths relative to population were far lower after 1945 than in the world wars; the dispute is about what this means and whether it will last."},
      {t:"The debate is over because the UCDP 2025 figures settled it.", why:"One year of data can’t settle a long-run debate in either direction. A single high year doesn’t show a trend has reversed, and calm years don’t prove it has ended."},
      {t:"Nobody disputes that great-power war has become impossible.", why:"Many scholars dispute it. Gaddis’s “long peace” describes the absence of great-power war since 1945, not proof that it cannot happen."}
    ]},
    {id:"e2u8-l1-x6", type:"match", q:"Match each rule of the law of armed conflict to what it requires.", pairs:[
      ["Jus ad bellum","Rules on when a state may use force at all","Jus ad bellum (“right to war”) governs resort to force, mainly through the UN Charter."],
      ["Jus in bello","Rules on how fighting must be conducted, by every side","Jus in bello (“law in war”) applies to everyone in a conflict, whoever started it."],
      ["Distinction","Attack only combatants and military targets, never civilians as such","Distinction separates combatants from civilians."],
      ["Proportionality","Expected harm to civilians must not be excessive compared with the military advantage expected","Proportionality weighs expected civilian harm against the anticipated military gain."],
      ["Precaution","Take feasible steps to spare civilians, such as giving warnings","Precaution means doing what is practically possible to avoid or reduce civilian harm."]
    ]}
   ],
   apply:{intro:"Look at conflict data and conflict reporting for yourself. Everything here is free and needs no account. Some of this material is upsetting; take breaks, and skip any task you would rather not do.", tasks:[
     {t:"Look up one conflict in the UCDP Conflict Encyclopedia", how:["Open ucdp.uu.se in any browser (it works on phones).","Search for a country you are curious about, ideally one whose conflict ended years ago (for example Sri Lanka, Mozambique or Guatemala).","Note the type of conflict UCDP records, the sides, the years, and the best estimate of deaths.","Notice the low and high estimates. How wide is the range? Why might it be so wide?"], write:"Country, type of conflict, sides, years, best estimate (low–high), and what surprised me…"},
     {t:"Check the numbers in one news story about a conflict", how:["Find one recent news article about any armed conflict.","Underline every number. For each, note whether the article says where it comes from and when.","Note the words the article uses: war, conflict, civil war, insurgency, clashes. Do they match UCDP’s categories?","Write one sentence the article could add to make its numbers clearer."], write:"Article, each number and its source (or none), the words used, my suggested sentence…"},
     {t:"Notice how a past war is remembered where you live", how:["Think of a memorial, public holiday, museum, street name or school lesson in your area that recalls a war.","Note which war it remembers, and who is named or pictured: soldiers, civilians, leaders?","Note who is missing: civilians, the other side, women, colonial troops?"], write:"What is remembered, who is visible, who is missing, and what this suggests…"}
   ], proof:"Notes on one conflict from the UCDP data with its type and estimate range, a check of every number in one news article, and a reflection on how one war is remembered locally."},
   read:[
     {book:"ospol", where:"Chapter 14 “International Relations”, section 14.4 “Using Levels of Analysis to Understand Conflict”", note:"Read it after this lesson as a bridge to the next one."},
     {book:"eir", where:"Chapter 11 “Protecting People”", note:"Read it after this lesson: it explains why protecting people inside states became a central concern; the chapter notes that in the twentieth century even more people were killed by their own governments than in wars between states."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u8-l2", title:"Why wars happen: causes at three levels", minutes:55,
   hook:{q:"The ancient Greek historian Thucydides gave a famous explanation for the war between Athens and Sparta (431–404 BCE). What was it?", options:["A quarrel between two royal families over a marriage","The growth of Athenian power and the fear it caused in Sparta","A dispute over grain trade routes","A religious quarrel about which gods to honour"], answer:1, reveal:"**The growth of Athenian power and the fear it caused in Sparta.** Thucydides looked past the immediate quarrels to a shift in power between rivals. That is a system-level explanation, and it is why realists claim him as an ancestor (Unit 6). This lesson sorts the causes of war by level, individual, state and system, then asks a sharper question: if war is so costly, why don’t the sides just make a deal?"},
   goals:[
     "Distinguish underlying causes from immediate triggers of a war",
     "Explain causes of war at the individual, state and system levels, with a critique of each",
     "Use the bargaining model to explain why wars happen even though they are costly, including commitment problems",
     "Compare explanations of civil war (opportunity, grievance, state weakness) and analyse 1914 through all three levels"
   ],
   learn:[
    {h:"Sparks and fuel", body:[
      {lead:"A cigarette dropped in a wet forest does nothing. The same cigarette in a forest after months of drought can start a disaster."},
      "Historians distinguish the **immediate cause** of a war (the spark: an assassination, a border incident) from its **underlying causes** (the fuel: rivalry, fear, ambitions, weak institutions). Sparks are easy to see; fuel builds up slowly. Most wars have several causes working together, which is why “the cause of the war” is almost always too simple.",
      "Unit 5 introduced the [[levels-of-analysis|levels of analysis]]: the individual, the state and the international system, which Kenneth Waltz called the “three images” in *Man, the State, and War* (1959). Waltz wrote that book to sort explanations of war, so this is the lens’s home ground. For each level, ask: **what would have to change for this war not to happen?**",
      {key:"A good explanation of a war usually combines levels: the system creates pressures, states turn them into policies, and individuals make the final choices."}
    ]},
    {h:"Level 1: the individual", body:[
      "Explanations at the first level look at people: leaders’ personalities, beliefs, health and mistakes, and, more broadly, human nature.",
      {list:[
        "**Human nature.** Classical realists such as {{hans-morgenthau|Hans Morgenthau}} traced conflict to a human drive for power. The problem: human nature is constant, but war comes and goes, so it can’t explain why war breaks out in one year and not another.",
        "**Misperception.** In *Perception and Misperception in International Politics* (1976), Robert Jervis showed how leaders read new information to fit what they already believe, exaggerate their rivals’ hostility and overrate their own chances. Many leaders who started wars expected them to be short.",
        "**Group decision-making.** Small, loyal advisory groups can slide into [[groupthink]], silencing doubts, as the psychologist Irving Janis argued about the failed US-backed invasion of Cuba at the Bay of Pigs in 1961."
      ]},
      "**Critique:** leaders act inside institutions and under pressures they didn’t choose. The same leader may choose war in one crisis and compromise in another, so the individual level rarely explains a war on its own."
    ]},
    {h:"Level 2: the state", body:[
      "Second-level explanations look inside countries: how they are governed, who has influence, what their societies believe.",
      {list:[
        "**Regime type.** Established democracies have rarely, if ever, fought each other, the pattern behind [[democratic-peace-theory|democratic peace theory]]. Democracies do fight non-democracies, though, and Unit 6 covers the critics.",
        "**Diversion.** The **diversionary war** idea says leaders in trouble at home start foreign conflicts to rally the public. Argentina’s military government, facing an economic crisis, is often cited for its 1982 invasion of the Falkland Islands (Islas Malvinas). Studies across many cases find the evidence mixed.",
        "**Nationalism and identity.** [[nationalism|Nationalist]] movements can make compromise over territory feel like betrayal.",
        "**Economic interests.** Marxist writers, from Lenin’s 1917 pamphlet on imperialism onwards, linked war to the search for markets and resources.",
        "**Military organisations.** Before 1914, several armies believed attacking first was decisive, a belief the political scientists Stephen Van Evera and Jack Snyder later called the “cult of the offensive”."
      ]},
      "**Critique:** very different kinds of states have gone to war, and similar states have made different choices, so domestic factors explain much, but not the whole picture."
    ]},
    {h:"Level 3: the international system", body:[
      "Third-level explanations look at the structure all states share. Because the system is an [[anarchy]] (no world government), each state must look after its own security. One state’s defensive build-up can look like a threat to its neighbour, which builds up in turn: the [[security-dilemma|security dilemma]] you met in Unit 6.",
      {list:[
        "**Shifts in power.** **Power transition theory**, set out by A. F. K. Organski in 1958, argues that war is most likely when a rising challenger nears the strength of the leading power. In *Destined for War* (2017), Graham Allison called this the “Thucydides trap”; in 12 of the 16 cases he studied over 500 years, the rivalry ended in war.",
        "**Balance of power.** Many realists argue that a rough [[balance-of-power|balance of power]] deters attack, and that wars come when the balance breaks down or is misjudged.",
        "**Polarity.** Waltz argued that a [[bipolarity|bipolar]] system, like the Cold War, is more stable than a [[multipolarity|multipolar]] one, because two superpowers can watch each other clearly."
      ]},
      "**Critique:** the system changes slowly, so it struggles to explain the **timing** of a particular war; and most shifts in power, including the end of the Cold War, have not ended in war between the great powers. Allison’s critics also questioned how he chose his 16 cases."
    ]},
    {h:"The bargaining puzzle: why not just make a deal?", body:[
      "Here is a puzzle that cuts across the levels. Imagine two siblings fighting over an inheritance. Going to court will cost both of them lawyers’ fees, and both can roughly guess what a judge would decide. So there should be a settlement that both prefer to going to court: split it the way the judge would, and keep the fees.",
      "War works the same way, only with far higher costs. In a famous 1995 article, “Rationalist Explanations for War”, James Fearon argued that because war destroys lives and wealth, there is almost always a deal both sides would prefer to fighting. So why do wars happen? Fearon gave three main answers:",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="18" text-anchor="middle">Dividing a disputed territory</text><text class="s" x="170" y="36" text-anchor="middle">share that State A gets</text><path class="d-ink" d="M30 120 H310" stroke-width="2"/><path class="d-ink" d="M30 112 V128 M310 112 V128" stroke-width="2"/><text class="s" x="30" y="146" text-anchor="middle">0%</text><text class="s" x="310" y="146" text-anchor="middle">100%</text><rect class="d-sage" x="170" y="108" width="56" height="24" stroke-width="1.5"/><path class="d-rose" d="M198 64 V108" stroke-width="2" stroke-dasharray="4 3"/><text x="198" y="56" text-anchor="middle">War: A expects 60%</text><text class="s" x="170" y="146" text-anchor="middle">50%</text><text class="s" x="226" y="146" text-anchor="middle">70%</text><text class="s" x="170" y="174" text-anchor="middle">War costs each side the equivalent of 10%,</text><text class="s" x="170" y="192" text-anchor="middle">so A accepts any deal from 50% and</text><text class="s" x="170" y="210" text-anchor="middle">B accepts any deal up to 70% for A.</text><text x="170" y="238" text-anchor="middle">Green zone: deals both prefer to war</text></svg>', alt:"A line from 0 to 100 percent shows State A’s share of a disputed territory. A dashed marker at 60 percent shows what A expects to win by war. Because war costs each side the equivalent of 10 percent, a green zone from 50 to 70 percent shows the deals both sides prefer to fighting.", cap:"Because war is costly, there is a range of deals better for both sides than fighting. Wars happen when something stops them finding or trusting such a deal."},
      {ol:[
        "**Private information and bluffing.** Each side knows its own strength and resolve better than its rival does, and has reasons to exaggerate both. If they misjudge each other, they can’t agree on where the deal lies.",
        "**Commitment problems.** A side may fear that any promise made today will be broken tomorrow. A declining power may fight now rather than face a stronger rival later. In civil wars, rebels asked to disarm fear the government will break the deal once they have no weapons; the political scientist Barbara Walter showed how outside guarantees help solve this.",
        "**Issues that can’t be divided**, or that people treat as indivisible, such as a sacred site. Fearon thought this rarer than the first two."
      ]},
      {tip:"Notice the logic: this model doesn’t assume leaders are mad or evil. It shows how even careful, rational actors can end up at war, and it points to cures: share information, build guarantees, find creative ways to divide what seems indivisible."}
    ]},
    {h:"Why civil wars start", body:[
      "Most wars today are fought inside countries, so researchers have asked what makes civil war likely. Three answers stand out, and they disagree in useful ways:",
      {table:[
        ["Explanation","Main idea","Who argued it"],
        ["Opportunity (“greed”)","Rebellion happens where it is feasible and can pay for itself, for example through diamonds, drugs or minerals","Paul Collier and Anke Hoeffler (2004)"],
        ["State weakness","Insurgency thrives where governments are poor, weak and far away, especially in rough terrain; ethnic diversity alone predicts little","James Fearon and David Laitin (2003)"],
        ["Grievance and exclusion","Groups shut out of power or much poorer than others are more likely to fight","Lars-Erik Cederman, Kristian Skrede Gleditsch and Halvard Buhaug (2013), building on Frances Stewart’s idea of inequality between groups"]
      ]},
      "These views can be combined: grievances give people reasons to fight, while opportunity and weak states make fighting possible. Natural resources are a clear example. Diamonds helped fund rebels in Sierra Leone’s civil war (1991–2002), which led to the Kimberley Process, a certification scheme for rough diamonds launched in 2003.",
      {warn:"Be careful with “ancient hatreds” explanations. Research generally finds that ethnic or religious difference on its own predicts civil war poorly. Conflicts are usually driven by politics: exclusion, fear, competition for power and leaders who mobilise identity."}
    ]},
    {h:"Worked example: 1914 at three levels", body:[
      "On 28 June 1914, Archduke Franz Ferdinand, heir to the throne of Austria-Hungary, was assassinated in Sarajevo by Gavrilo Princip, a young Bosnian Serb nationalist. Within six weeks most of Europe’s great powers were at war. The assassination was the spark. Here is the fuel, sorted by level:",
      {fig:'<svg viewBox="0 0 340 380"><circle class="d-sage" cx="170" cy="180" r="164" stroke-width="2"/><circle class="d-lup" cx="170" cy="180" r="116" stroke-width="2"/><circle class="d-gold" cx="170" cy="180" r="64" stroke-width="2"/><text x="170" y="38" text-anchor="middle">System</text><text class="s" x="170" y="56" text-anchor="middle">alliances, a rising Germany</text><text x="170" y="88" text-anchor="middle">State</text><text class="s" x="170" y="106" text-anchor="middle">war plans, nationalism</text><text x="170" y="172" text-anchor="middle">Individual</text><text class="s" x="170" y="192" text-anchor="middle">leaders’ fears,</text><text class="s" x="170" y="208" text-anchor="middle">misjudgements</text><text class="s" x="170" y="370" text-anchor="middle">Each ring adds part of the explanation.</text></svg>', alt:"Three nested circles. The outer ring, labelled System, notes alliances and a rising Germany. The middle ring, State, notes war plans and nationalism. The inner circle, Individual, notes leaders’ fears and misjudgements.", cap:"The levels of analysis applied to the outbreak of the First World War."},
      {list:[
        "**System:** Europe was divided into two blocs, the Triple Alliance (Germany, Austria-Hungary, Italy) and the Triple Entente (France, Russia, Britain). Germany’s rapid rise worried its neighbours, and a naval arms race had strained relations between Britain and Germany.",
        "**State:** Military plans were rigid and fast. Germany’s plan for a two-front war meant attacking France through Belgium before Russia was ready, so Russia’s mobilisation set the plan in motion. Nationalism ran high, and Austria-Hungary feared Serbian nationalism would break apart its multi-ethnic empire.",
        "**Individual:** Leaders in Vienna, Berlin and St Petersburg misjudged each other and took risks; many expected a short war."
      ]},
      "Historians still argue about weight and blame. In the 1960s Fritz Fischer argued that Germany’s leaders sought war to become a world power. Christopher Clark’s *The Sleepwalkers* (2012) spread responsibility across several capitals. Notice that the levels don’t settle that argument; they help you see what each side is claiming."
    ]}
   ],
   try:[
    {id:"e2u8-l2-x1", type:"sort", q:"At which level of analysis does each explanation of a war work?", buckets:["Individual","State","International system"], items:[
      {t:"The prime minister’s deep personal distrust of the rival leader, built up over decades, made her dismiss every peace offer.", b:0, why:"This focuses on one leader’s personal beliefs and feelings, the first level."},
      {t:"The country’s military government faced little public scrutiny, so generals could launch the attack without debate.", b:1, why:"How a country is governed and who can check its decisions is a second-level, state explanation."},
      {t:"The challenger’s economy had grown to nearly match the leading power’s, and both feared the other would strike first.", b:2, why:"A shift in the distribution of power between states is a system-level explanation."},
      {t:"The defence minister was convinced, against his intelligence services’ advice, that the enemy would collapse in a week.", b:0, why:"One person’s misperception is a classic individual-level explanation (Jervis)."},
      {t:"With no world government to appeal to, each side armed itself, and each build-up looked like a threat to the other.", b:2, why:"Anarchy and the security dilemma are features of the whole system."},
      {t:"A powerful nationalist movement made any compromise over the border look like treason.", b:1, why:"Domestic politics and national identity inside the state shape what leaders can accept: the second level."}
    ]},
    {id:"e2u8-l2-x2", type:"order", q:"Put the July Crisis of 1914 in order, from the spark to the widening war.", items:[
      {t:"28 June: Archduke Franz Ferdinand is assassinated in Sarajevo", why:"The assassination was the spark that started the crisis."},
      {t:"23 July: Austria-Hungary sends Serbia an ultimatum", why:"After weeks of consultation, including German backing, Vienna made demands it expected Serbia to reject."},
      {t:"28 July: Austria-Hungary declares war on Serbia", why:"Austria-Hungary judged Serbia’s reply inadequate and declared war."},
      {t:"30 July: Russia orders general mobilisation", why:"Russia, Serbia’s protector, mobilised its army, which triggered Germany’s war plans."},
      {t:"1 August: Germany declares war on Russia", why:"Germany responded to Russian mobilisation; it declared war on France two days later."},
      {t:"4 August: Britain declares war after Germany invades Belgium", why:"Germany’s plan meant attacking France through neutral Belgium, which brought Britain in."}
    ]},
    {id:"e2u8-l2-x3", type:"mcq", q:"According to the bargaining model, why might two rational governments fight even though war is costly for both? Choose all that apply.", options:[
      {t:"Each knows things about its own strength that the other doesn’t, and has reasons to bluff", ok:true, why:"Private information plus incentives to misrepresent it is the first of Fearon’s explanations."},
      {t:"One side fears the other will break any deal once it becomes stronger", ok:true, why:"That is a commitment problem, the second explanation."},
      {t:"The issue is treated as impossible to divide, like a sacred site", ok:true, why:"Indivisible issues are the third explanation, though Fearon thought them rarer."},
      {t:"War is usually cheaper than any negotiated deal", why:"The model starts from the opposite: war is costly, which is exactly why a deal both prefer should exist."},
      {t:"Leaders who start wars are always irrational", why:"The point of the model is that war can happen even between rational actors. It doesn’t rely on madness."}
    ]},
    {id:"e2u8-l2-x4", type:"mcq", q:"After years of civil war, a peace deal asks rebels to hand in their weapons. Their leaders refuse, saying the government could simply arrest them once they are disarmed. Which idea best describes their worry?", options:[
      {t:"A commitment problem", ok:true, why:"Yes. The government can’t credibly promise to keep the deal once the rebels have lost their power to resist. Outside guarantees, such as peacekeepers, are one solution."},
      {t:"Groupthink", why:"Groupthink is about a decision-making group silencing doubts. The rebels’ fear here is about whether promises can be trusted."},
      {t:"The democratic peace", why:"The democratic peace is about democracies rarely fighting each other. It doesn’t describe this situation."},
      {t:"Diversionary war", why:"Diversionary war is about leaders starting foreign conflicts to distract from domestic trouble. Nothing here involves distraction."}
    ]},
    {id:"e2u8-l2-x5", type:"spot", q:"An opinion column about the First World War. Tap the claims that oversimplify or go beyond the evidence.", ask:"oversimplifies or overreaches", parts:[
      "The First World War began after ",
      {t:"Archduke Franz Ferdinand was assassinated in Sarajevo on 28 June 1914", flag:false, why:"This is accurate: it was the immediate cause."},
      ". ",
      {t:"The assassination was the only real cause of the war", flag:true, why:"This confuses the spark with the fuel. Alliances, war plans, rivalry and misjudgements all mattered."},
      ". Europe was split into ",
      {t:"two alliance blocs", flag:false, why:"Accurate: the Triple Alliance and the Triple Entente."},
      ", and ",
      {t:"one man, the Kaiser, decided everything", flag:true, why:"A one-person explanation ignores the other governments, the military plans and the system-level pressures. Historians still debate how much each capital was responsible."},
      ". ",
      {t:"Historians have long debated how to share out responsibility", flag:false, why:"True: from Fischer in the 1960s to Clark in 2012, the debate continues."},
      ". ",
      {t:"Because this is how wars always start, any rising power today will certainly go to war", flag:true, why:"One case can’t show what always happens, and most power shifts haven’t ended in great-power war. Even Allison found war in 12 of his 16 cases, not all."},
      "."
    ]},
    {id:"e2u8-l2-x6", type:"match", q:"Match each thinker to the explanation of war they are known for.", pairs:[
      ["Thucydides","Fear caused by a rival’s growing power","He explained the Peloponnesian War by Athens’ rise and the fear it caused in Sparta."],
      ["Robert Jervis","Leaders’ misperceptions of each other","His 1976 book showed how leaders misread rivals’ intentions."],
      ["James Fearon","Bargaining failures: private information, commitment problems, indivisible issues","His 1995 article asked why rational states fail to find a deal."],
      ["Paul Collier and Anke Hoeffler","Rebellion where it is feasible and can pay for itself","Their work stressed opportunity factors such as lootable resources."],
      ["A. F. K. Organski","Power transition: war when a challenger nears the leading power","He set out power transition theory in 1958."]
    ]}
   ],
   apply:{intro:"Use the three levels and the bargaining puzzle on real cases and everyday disputes.", tasks:[
     {t:"Explain one war at three levels", how:["Choose a war that has ended (for example the Iran–Iraq War, the Falklands/Malvinas War, the Second Congo War or a war in your own region’s history).","Read an encyclopedia entry or a textbook chapter about how it began.","List the immediate cause (the spark).","List at least one underlying cause at each level: individual, state and system.","Decide which level you think explains the most, and why."], write:"War, spark, causes at each level, and which level I think matters most…"},
     {t:"Find the bargaining range in an everyday dispute", how:["Think of a negotiation you have seen or been part of: haggling over a price, sharing chores, a dispute between neighbours.","What would “fighting” have cost each side (time, money, friendship)?","Was there a deal both sides preferred? Did they find it?","If not, was it private information, a commitment problem or something treated as indivisible?"], write:"The dispute, the costs of fighting, the possible deal, and what got in the way…"},
     {t:"Compare two accounts of how a war began", how:["Find two short accounts of how the same war began, ideally written in or about different countries (two encyclopedias, two school textbooks or two museum websites).","Note which causes each account stresses and which level they belong to.","Note who each account treats as responsible.","Write down one thing each account leaves out."], write:"War, account 1 and account 2: causes stressed, who is blamed, what is missing…"}
   ], proof:"Notes explaining one war at three levels, one everyday dispute analysed with the bargaining model, and a comparison of two accounts of how a war began."},
   read:[
     {book:"ospol", where:"Chapter 14 “International Relations”, section 14.4 “Using Levels of Analysis to Understand Conflict”", note:"Read it after this lesson: it walks through the levels again, using the Cuban Missile Crisis."},
     {book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"Read it after this lesson for a system-level view: how the United States’ dominant role since 1945 has shaped global security, and what might come after it."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u8-l3", title:"Security, old and new", minutes:60,
   hook:{q:"According to the Stockholm International Peace Research Institute (SIPRI), how many states had nuclear weapons in January 2026?", options:["5","7","9","12"], answer:2, reveal:"**Nine.** The United States, Russia, the United Kingdom, France and China are the five the Non-Proliferation Treaty recognises; India, Pakistan, North Korea and Israel (which neither confirms nor denies it) also have them. SIPRI estimated about 12,187 warheads in total. This lesson starts with that old kind of security, deterrence and nuclear weapons, then asks who else needs security, from what, and how issues get labelled as “security” at all."},
   goals:[
     "Explain how the meaning of security has widened from states and armies to people and new threats",
     "Explain deterrence, arms races and arms control, using the Cuban Missile Crisis and the NPT",
     "Analyse an issue with the ideas of human security and securitisation",
     "Explain why terrorism has no agreed international definition, and why cyber conflict is hard to deter"
   ],
   learn:[
    {h:"Security for whom, and from what?", body:[
      {lead:"What makes you feel secure? A lock on the door, perhaps. But also a steady income, clean water, a working hospital and the freedom to speak your mind."},
      "[[security-studies|Security studies]], a central branch of IR, began with a narrow answer. For most of the 20th century, **security** meant the safety of the **state** (its territory and independence) from **military** threats posed by other states. In 1952 the scholar Arnold Wolfers called national security “an ambiguous symbol”, because it can mean very different things to different people.",
      "Since the end of the Cold War, scholars have **widened** the agenda to new threats (disease, climate change, economic collapse, crime) and **deepened** it to new referents: people, communities, even the planet.",
      {table:[
        ["Question","Traditional view","Widened view"],
        ["Security of whom?","The state","People, groups, societies, the environment"],
        ["From what?","Military attack by other states","Also hunger, disease, violence at home, climate change"],
        ["By what means?","Armed forces, alliances, deterrence","Also development, health systems, rights, cooperation"]
      ]},
      {key:"Each answer to “security of whom, from what?” leads to different policies. That is why the definition matters."}
    ]},
    {h:"Deterrence and the Cuban Missile Crisis", body:[
      "A “Beware of the dog” sign works if the burglar believes there is a dog, believes it bites, and can read the sign. [[deterrence|Deterrence]] works the same way: you prevent an attack by threatening costs the attacker won’t accept. It needs **capability** (the means to carry out the threat), **credibility** (the other side must believe you would) and **communication** (they must know about it). The economist Thomas Schelling, in *Arms and Influence* (1966), contrasted deterrence (“don’t do this”) with **compellence** (“stop doing this, or else”), which is usually harder.",
      "With nuclear weapons, deterrence came to rest on **second-strike capability**: the ability to strike back even after being attacked. When both superpowers had it, any nuclear war would destroy both, a condition nicknamed [[mutually-assured-destruction|mutually assured destruction]] (MAD).",
      "The Cuban Missile Crisis of October 1962 shows how close deterrence came to failing. After US spy planes photographed Soviet nuclear missile sites under construction in Cuba, the United States imposed a naval “quarantine” around the island. For thirteen days the world waited. The crisis ended when the Soviet Union agreed to remove the missiles, the United States promised not to invade Cuba, and Washington secretly agreed to remove its own missiles from Turkey. Cuba’s leaders were not part of the final deal, a reminder that smaller states’ security is often decided by others. Afterwards the two powers set up a direct “hotline” (1963) so leaders could talk in a crisis.",
      {tip:"Realists read the crisis as deterrence working; others stress luck, misperception and near-accidents during those days. Section 14.4 of the OpenStax book walks through it level by level."}
    ]},
    {h:"Arms races and arms control", body:[
      "An [[arms-race|arms race]] is a spiral in which rivals keep building up their forces in response to each other: the [[security-dilemma|security dilemma]] in motion. Before 1914, Britain and Germany raced to build battleships; during the Cold War, the United States and the Soviet Union built tens of thousands of nuclear warheads.",
      "**Arms control** tries to slow or limit such races by agreement; **disarmament** aims to reduce weapons or remove them altogether. Some milestones:",
      {list:[
        "**1963:** the Partial Test Ban Treaty banned nuclear tests in the atmosphere, in space and under water.",
        "**1987:** the INF Treaty between the United States and the Soviet Union eliminated a whole class of ground-launched missiles. The United States withdrew in 2019, accusing Russia of breaking it; Russia denied this.",
        "**2010:** New START limited US and Russian deployed strategic warheads. It expired in February 2026 without a replacement."
      ]}
    ]},
    {h:"Nuclear weapons and the NPT bargain", body:[
      "[[nuclear-proliferation|Nuclear proliferation]] means the spread of nuclear weapons to more states (or to armed groups). The main barrier is the [[non-proliferation-treaty|Treaty on the Non-Proliferation of Nuclear Weapons]] (NPT), opened for signature in 1968, in force since 1970 and extended indefinitely in 1995. With 191 states parties, it is one of the most widely joined arms treaties. It rests on a three-part bargain:",
      {fig:'<svg viewBox="0 0 340 292"><path class="d-gold" d="M20 70 L170 14 L320 70 Z" stroke-width="2"/><text x="170" y="52" text-anchor="middle">The NPT bargain</text><text class="s" x="170" y="66" text-anchor="middle">signed 1968, in force 1970</text><rect class="d-lup" x="24" y="82" width="92" height="130" rx="6" stroke-width="2"/><text x="70" y="104" text-anchor="middle">Non-</text><text x="70" y="120" text-anchor="middle">proliferation</text><text class="s" x="70" y="146" text-anchor="middle">States without</text><text class="s" x="70" y="162" text-anchor="middle">weapons don’t</text><text class="s" x="70" y="178" text-anchor="middle">get them;</text><text class="s" x="70" y="194" text-anchor="middle">IAEA checks</text><rect class="d-rose" x="124" y="82" width="92" height="130" rx="6" stroke-width="2"/><text x="170" y="104" text-anchor="middle">Disarma-</text><text x="170" y="120" text-anchor="middle">ment</text><text class="s" x="170" y="146" text-anchor="middle">All parties</text><text class="s" x="170" y="162" text-anchor="middle">negotiate in</text><text class="s" x="170" y="178" text-anchor="middle">good faith</text><text class="s" x="170" y="194" text-anchor="middle">(Article VI)</text><rect class="d-sage" x="224" y="82" width="92" height="130" rx="6" stroke-width="2"/><text x="270" y="104" text-anchor="middle">Peaceful</text><text x="270" y="120" text-anchor="middle">use</text><text class="s" x="270" y="146" text-anchor="middle">Nuclear energy</text><text class="s" x="270" y="162" text-anchor="middle">and science</text><text class="s" x="270" y="178" text-anchor="middle">for all</text><text class="s" x="270" y="194" text-anchor="middle">parties</text><rect class="d-panel" x="14" y="222" width="312" height="62" rx="6" stroke-width="2"/><text class="s" x="170" y="244" text-anchor="middle">191 parties. Never joined: India, Israel,</text><text class="s" x="170" y="262" text-anchor="middle">Pakistan. North Korea announced its</text><text class="s" x="170" y="278" text-anchor="middle">withdrawal in 2003.</text></svg>', alt:"A temple-like diagram. The roof reads: the NPT bargain, signed 1968, in force 1970. Three pillars: non-proliferation (states without weapons don’t get them; the IAEA checks), disarmament (all parties negotiate in good faith, Article VI) and peaceful use (nuclear energy and science for all parties). The base notes 191 parties; India, Israel and Pakistan never joined, and North Korea announced its withdrawal in 2003.", cap:"The NPT’s three pillars. Many non-nuclear states argue the disarmament pillar has been neglected."},
      "The treaty recognises five **nuclear-weapon states**, those that had tested a weapon before 1 January 1967: the United States, the Soviet Union (now Russia), the United Kingdom, France and China. SIPRI estimated that in January 2026 the nine nuclear-armed states held about **12,187** warheads, of which about 9,745 were in military stockpiles; Russia and the United States together held almost 86% of all warheads.",
      "Proliferation is not a one-way street. South Africa built nuclear weapons and then dismantled them around 1990–91, before joining the NPT. Belarus, Kazakhstan and Ukraine handed over Soviet weapons left on their territory in the 1990s. Whole regions have declared themselves **nuclear-weapon-free zones**: Latin America and the Caribbean (Treaty of Tlatelolco, 1967), the South Pacific (Rarotonga, 1985), Southeast Asia (Bangkok, 1995), Africa (Pelindaba, 1996) and Central Asia (2006). The Treaty on the Prohibition of Nuclear Weapons (adopted 2017, in force 2021) bans them outright, but none of the nine nuclear-armed states has joined.",
      "Scholars disagree about what nuclear weapons do. Kenneth Waltz argued that their spread could make war less likely, because nobody dares attack a nuclear state; Scott Sagan replied that real organisations make mistakes, so more nuclear states mean more chances of accidents and unauthorised use. Their debate was published as *The Spread of Nuclear Weapons* (1995)."
    ]},
    {h:"Human security: putting people first", body:[
      "In 1994 the UN Development Programme’s *Human Development Report*, subtitled “New Dimensions of Human Security”, proposed a security that “equates security with people rather than territories, with development rather than arms”. [[human-security|Human security]] is often summed up as **freedom from fear** and **freedom from want**. The report listed seven areas: economic, food, health, environmental, personal, community and political security.",
      "In 2012 the UN General Assembly (resolution 66/290) agreed a common understanding: human security addresses “widespread and cross-cutting challenges to the survival, livelihood and dignity” of people. The idea helped drive the 1997 treaty banning anti-personnel landmines and fed into the [[responsibility-to-protect|responsibility to protect]] (Unit 7).",
      "**Critiques:** if everything from hunger to unemployment is “security”, the word may lose meaning and fail to set priorities. Some governments in the [[global-south|Global South]] worry that “protecting people” can justify outside interference. Supporters reply that for most people, the daily threats are hunger, disease and violence, not invasion."
    ]},
    {h:"Securitisation: how issues become “security”", body:[
      "Why are some problems treated as emergencies and others as ordinary politics? The **Copenhagen School**, especially Barry Buzan, Ole Wæver and Jaap de Wilde in *Security: A New Framework for Analysis* (1998), answered: security is partly something we **say**. [[securitization|Securitisation]] happens when an actor presents an issue as an existential threat and an audience accepts that extraordinary measures are justified.",
      {fig:'<svg viewBox="0 0 340 346"><defs><marker id="e2u8-l3-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="40" y="8" width="260" height="56" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">1. Securitising actor</text><text class="s" x="170" y="51" text-anchor="middle">a leader, agency or movement</text><path class="d-ink" d="M170 64 V86" stroke-width="2" marker-end="url(#e2u8-l3-ar)"/><rect class="d-gold" x="40" y="90" width="260" height="56" rx="8" stroke-width="2"/><text x="170" y="113" text-anchor="middle">2. Speech act</text><text class="s" x="170" y="133" text-anchor="middle">“X threatens our very survival”</text><path class="d-ink" d="M170 146 V168" stroke-width="2" marker-end="url(#e2u8-l3-ar)"/><rect class="d-sage" x="40" y="172" width="260" height="56" rx="8" stroke-width="2"/><text x="170" y="195" text-anchor="middle">3. Audience accepts?</text><text class="s" x="170" y="215" text-anchor="middle">public, parliament, allies</text><path class="d-ink" d="M170 228 V250" stroke-width="2" marker-end="url(#e2u8-l3-ar)"/><rect class="d-rose" x="40" y="254" width="260" height="56" rx="8" stroke-width="2"/><text x="170" y="277" text-anchor="middle">4. Extraordinary measures</text><text class="s" x="170" y="297" text-anchor="middle">emergency powers, secrecy, force</text><text class="s" x="170" y="334" text-anchor="middle">Desecuritisation: back to normal politics</text></svg>', alt:"A vertical flow of four boxes joined by arrows: 1, a securitising actor such as a leader, agency or movement; 2, a speech act saying something threatens our very survival; 3, the audience (public, parliament, allies) accepts or not; 4, extraordinary measures such as emergency powers, secrecy or force. A note says desecuritisation means returning an issue to normal politics.", cap:"Securitisation in four steps. If the audience rejects the claim, the move fails."},
      "Each step has a name. The **referent object** is what is said to be threatened (the nation, the economy, public health). The audience matters: a claim nobody accepts is only a securitising **move**. In 2000, for example, UN Security Council resolution 1308 treated HIV/AIDS as a possible risk to international stability and security: the first Security Council resolution on a health issue.",
      "Securitisation can mobilise resources quickly, but it can also suspend normal debate and rights. Wæver argued that it is often better to **desecuritise**: to bring issues back into ordinary politics. Critics say the theory focuses on powerful speakers and overlooks groups who can’t speak publicly about their insecurity; Lene Hansen (2000) made this point about women in conflict. You will meet securitisation again in the Migration Studies primer, where it is used to analyse how migration is framed."
    ]},
    {h:"Terrorism: why the definition is contested", body:[
      "There is still **no agreed international definition** of [[terrorism]]. A UN committee set up in 1996 began work on a draft comprehensive convention in 2000, and states have yet to finish it. Instead, 19 universal legal instruments (1963–2014) each ban specific acts, such as hijacking planes, taking hostages, bombings and financing terrorism.",
      "Why so hard? Two sticking points recur: whether armed struggles for [[self-determination]] or against foreign occupation should be excluded, and whether a state’s own armed forces can commit terrorism. “One person’s terrorist is another’s freedom fighter” captures the problem. Nelson Mandela’s ANC was officially labelled terrorist by apartheid South Africa, and Mandela himself stayed on a US terrorism watch list until 2008.",
      "Most scholarly definitions share five elements: **violence or the threat of it**, a **political, religious or ideological aim**, deliberate targeting of **civilians or non-combatants**, the goal of **spreading fear** among a wider audience beyond the immediate victims, and (usually) **non-state** perpetrators. The historian David Rapoport described modern terrorism as coming in “waves”: anarchist, anti-colonial, New Left and religious.",
      {warn:"Calling an act “terrorism” is itself a political choice with consequences (legal powers, sanctions, how a group is treated in peace talks). A careful writer says who uses the label, for example “a group that the government designates as terrorist”."}
    ]},
    {h:"Cyber: a new arena", body:[
      "States and other groups now also compete through computer networks: spying, stealing data, disrupting power grids and spreading [[disinformation]]. [[cyber-conflict|Cyber conflict]] is hard to deter, for three reasons:",
      {list:[
        "**Attribution:** it can take months to show convincingly who was behind an attack, and attackers route through other countries’ machines.",
        "**Below the threshold:** most cyber operations cause disruption but no deaths, so it is unclear when, if ever, they count as an armed attack under the UN Charter.",
        "**Spillover:** malware built for one target can spread worldwide and hit hospitals and businesses (see [[ransomware]])."
      ]},
      "International responses include UN expert groups, whose 2015 report set out voluntary norms (for example, not deliberately damaging critical infrastructure that serves the public, in peacetime), and the *Tallinn Manual* (2013, second edition 2017), in which legal experts set out how they believe existing international law applies to cyber operations. It is an expert study, not a treaty."
    ]}
   ],
   try:[
    {id:"e2u8-l3-x1", type:"sort", q:"Is each concern part of the traditional security agenda, or a human security concern added by the widened view?", buckets:["Traditional security","Human security"], items:[
      {t:"A neighbouring state moves tanks to the border.", b:0, why:"A military threat from another state to the state’s territory is the classic traditional concern."},
      {t:"Drought wipes out a region’s harvest and families go hungry.", b:1, why:"Food security, a threat to people’s survival and livelihood, belongs to the widened, human security agenda."},
      {t:"A rival state tests a new long-range missile.", b:0, why:"A rival’s growing military capability is a traditional state security concern."},
      {t:"Women in a city are afraid to walk home at night because of violence.", b:1, why:"Personal security, freedom from fear in daily life, is one of the UNDP’s seven human security areas."},
      {t:"An epidemic overwhelms hospitals across a country.", b:1, why:"Health security, threats to people’s lives and wellbeing, is part of the human security agenda."},
      {t:"Two alliances compete over a strategic strait.", b:0, why:"Competition between states and alliances over strategic territory is traditional security."}
    ]},
    {id:"e2u8-l3-x2", type:"mcq", q:"Country A warns Country B: “If you attack our ally, we will respond with force.” Which change would most weaken this deterrent threat?", options:[
      {t:"Country A’s leaders say in public that they would never actually risk war for that ally", ok:true, why:"Right. Deterrence needs credibility. If B believes A won’t carry out the threat, the threat deters nothing, however strong A’s forces are."},
      {t:"Country A repeats the warning in a televised speech", why:"Repeating the threat publicly usually strengthens communication and credibility, because backing down would then be embarrassing."},
      {t:"Country A stations some troops in the ally’s territory", why:"Troops on the ground are a classic way to make a threat more credible: an attack would hit A’s own forces too."},
      {t:"Country B learns exactly how strong Country A’s armed forces are", why:"If A is strong, B knowing this supports deterrence, because capability has been communicated."}
    ]},
    {id:"e2u8-l3-x3", type:"match", q:"Match each agreement to what it does.", pairs:[
      ["Non-Proliferation Treaty (1968)","A bargain: no new nuclear-armed states, disarmament talks, peaceful nuclear use for all","The NPT’s three pillars."],
      ["Partial Test Ban Treaty (1963)","Bans nuclear tests in the atmosphere, in space and under water","It was one of the first arms control steps after the Cuban Missile Crisis."],
      ["INF Treaty (1987)","Eliminated a class of US and Soviet ground-launched missiles","It ended in 2019 after the US withdrew."],
      ["Treaty of Tlatelolco (1967)","Makes Latin America and the Caribbean a nuclear-weapon-free zone","It created the first such zone in a populated region."],
      ["Treaty on the Prohibition of Nuclear Weapons (2017)","Bans nuclear weapons outright for its parties","None of the nine nuclear-armed states has joined it."]
    ]},
    {id:"e2u8-l3-x4", type:"order", q:"Put the steps of a successful securitisation in order.", items:[
      {t:"A leader names something the nation values (the referent object)", why:"Securitisation starts with something presented as worth protecting."},
      {t:"The leader declares that it faces an existential threat", why:"The speech act frames the issue as a matter of survival."},
      {t:"The leader argues that normal rules must be set aside to deal with it", why:"The claim is that ordinary politics is too slow or too weak for this threat."},
      {t:"The public and parliament accept the claim", why:"Without the audience’s acceptance, it remains only a securitising move."},
      {t:"Emergency measures are adopted", why:"Extraordinary measures follow once the audience has accepted the threat."}
    ]},
    {id:"e2u8-l3-x5", type:"spot", q:"A student’s summary about terrorism. Tap the statements that are inaccurate.", ask:"is inaccurate", parts:[
      {t:"The United Nations adopted a single binding definition of terrorism in 1996.", flag:true, why:"No. A UN committee was set up in 1996, but the comprehensive convention with a general definition has never been finished."},
      " ",
      {t:"Many universal legal instruments instead ban specific acts, such as hijacking and hostage-taking.", flag:false, why:"Correct: 19 universal instruments (1963–2014) target specific acts."},
      " ",
      {t:"Most scholarly definitions include deliberate attacks on civilians meant to spread fear among a wider audience.", flag:false, why:"Correct: targeting non-combatants and aiming at a wider audience are common elements."},
      " ",
      {t:"States agree that national armed forces can never be accused of terrorism.", flag:true, why:"This is one of the main disagreements, not a point of agreement. Whether state forces can commit terrorism is a key sticking point."},
      " ",
      {t:"Because the label has legal and political consequences, careful writers say who applies it.", flag:false, why:"Correct: saying “designated as terrorist by…” is good practice."},
      " ",
      {t:"Nelson Mandela was never on any terrorism list.", flag:true, why:"Inaccurate: his ANC was labelled terrorist by apartheid South Africa, and he remained on a US watch list until 2008."}
    ]},
    {id:"e2u8-l3-x6", type:"number", q:"SIPRI estimated that in January 2026 there were about 12,187 nuclear warheads in the world, of which about 9,745 were in military stockpiles (the rest were retired and waiting to be dismantled). What percentage were in military stockpiles? Round to a whole number.", answer:80, tol:1, unit:"%", why:"9,745 ÷ 12,187 = 0.7996, and 0.7996 × 100 ≈ 80%. The other 20% or so were retired warheads awaiting dismantlement.", wrongs:[
      {v:20, tol:1, why:"That is the share of retired warheads (100 − 80). The question asks about those in military stockpiles."},
      {v:125, tol:2, why:"That divides the total by the stockpile (12,187 ÷ 9,745 ≈ 1.25). Put the part on top: 9,745 ÷ 12,187."},
      {v:0.8, tol:0.02, why:"You divided correctly but didn’t multiply by 100 to turn 0.80 into a percentage."}
    ]}
   ],
   apply:{intro:"Look at security in your own life and in the news around you.", tasks:[
     {t:"Map your own security", how:["List five things that make you or your community feel secure, and five that make you feel insecure.","Sort each into the UNDP’s seven areas: economic, food, health, environmental, personal, community, political.","Then look at one recent news story your government calls a “security” issue.","Compare: how much do the two lists overlap?"], write:"My secure/insecure lists sorted into the seven areas, and how they compare with the official agenda…"},
     {t:"Trace one securitising move", how:["Find a speech, statement or news report where a leader or organisation calls something a threat to national security or survival. Any topic works: disease, drugs, climate, cyber attacks, migration, a rival state.","Identify the securitising actor, the referent object and the audience.","Note what extraordinary measures, if any, are proposed.","Look for signs of whether the audience accepted or resisted the claim."], write:"Actor, referent object, audience, measures proposed, and whether the move succeeded…"},
     {t:"Read the core of the NPT yourself", how:["Find the NPT text on the UN Office for Disarmament Affairs (UNODA) or IAEA website (search “NPT treaty text”). It is short.","Read Articles I, II, IV and VI.","Summarise each article in one plain sentence.","Note which article non-nuclear states mean when they say the treaty’s bargain is unbalanced."], write:"Articles I, II, IV and VI in one sentence each, and which one is behind the “unbalanced bargain” complaint…"}
   ], proof:"Notes mapping your own security onto the seven human security areas, one securitising move analysed step by step, and a plain-language summary of four NPT articles."},
   read:[
     {book:"eirt", where:"Chapter 14 “Securitisation Theory” (Clara Eroukhmanoff)", note:"Read it after this lesson: it works through securitisation with a worked example."},
     {book:"eir", where:"Chapter 14 “Transnational Terrorism” (Katherine Brown)", note:"Read it after this lesson: it adds how terrorist groups organise, fund themselves and are countered."},
     {book:"ospol", where:"Chapter 14 “International Relations”, section 14.1 “What Is Power, and How Do We Measure It?”", note:"Gentle background on military power and deterrence."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u8-l4", title:"Making, keeping and building peace", minutes:55,
   hook:{q:"UN peacekeeping rests on three basic principles. Which of these is NOT one of them?", options:["Consent of the main parties to the conflict","Impartiality","No use of force except in self-defence and defence of the mandate","Defeating the side that started the war"], answer:3, reveal:"**Defeating the side that started the war** is not a peacekeeping principle. UN peacekeepers deploy with the parties’ consent, treat them impartially and use force only as a last resort. That makes them very different from an army sent to win. This lesson explains how peace is negotiated, kept and built, why some peace lasts and some collapses, and how both force and attraction (hard and soft power) play a part."},
   goals:[
     "Distinguish negative from positive peace, and peacemaking, peacekeeping and peacebuilding",
     "Explain how mediation works and what helps peace agreements succeed, with cases from several regions",
     "Describe the principles, history, failures and evidence of UN peacekeeping",
     "Compare transitional justice tools, and tell hard power from soft power"
   ],
   learn:[
    {h:"Two kinds of peace", body:[
      {lead:"Think of two neighbours who have stopped shouting at each other but still won’t speak, and two who share tools and look after each other’s children. Both are “at peace”, but not in the same way."},
      "The Norwegian peace researcher Johan Galtung drew this line in 1969. [[negative-peace|Negative peace]] is the absence of direct violence: the guns are silent. [[positive-peace|Positive peace]] is the presence of fair institutions and relationships that remove the reasons for violence, what Galtung called the absence of **structural violence** (harm built into unequal systems, such as poverty or exclusion).",
      "The difference matters because a ceasefire that leaves the original grievances untouched can collapse. Much of the work described in this lesson is about turning negative peace into positive peace.",
      {key:"Ending fighting is the first step towards peace, not the whole of it."}
    ]},
    {h:"Three tools, one cycle", body:[
      "In *An Agenda for Peace* (1992), UN Secretary-General Boutros Boutros-Ghali set out a vocabulary the UN still uses. Each tool fits a different moment:",
      {fig:'<svg viewBox="0 0 340 368"><defs><marker id="e2u8-l4-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-sage" x="30" y="8" width="280" height="62" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Prevention</text><text class="s" x="170" y="51" text-anchor="middle">before violence: early warning, diplomacy</text><path class="d-ink" d="M170 70 V92" stroke-width="2" marker-end="url(#e2u8-l4-ar)"/><rect class="d-gold" x="30" y="96" width="280" height="62" rx="8" stroke-width="2"/><text x="170" y="119" text-anchor="middle">Peacemaking</text><text class="s" x="170" y="139" text-anchor="middle">during conflict: talks and mediation</text><path class="d-ink" d="M170 158 V180" stroke-width="2" marker-end="url(#e2u8-l4-ar)"/><rect class="d-lup" x="30" y="184" width="280" height="62" rx="8" stroke-width="2"/><text x="170" y="207" text-anchor="middle">Peacekeeping</text><text class="s" x="170" y="227" text-anchor="middle">after a ceasefire: monitor, protect</text><path class="d-ink" d="M170 246 V268" stroke-width="2" marker-end="url(#e2u8-l4-ar)"/><rect class="d-rose" x="30" y="272" width="280" height="62" rx="8" stroke-width="2"/><text x="170" y="295" text-anchor="middle">Peacebuilding</text><text class="s" x="170" y="315" text-anchor="middle">for years: institutions, trust, jobs</text><path class="d-ink" d="M310 303 H326 V39 H314" stroke-width="2" marker-end="url(#e2u8-l4-ar)"/><text class="s" x="170" y="358" text-anchor="middle">The loop: good peacebuilding prevents relapse.</text></svg>', alt:"Four boxes in a vertical sequence joined by arrows: prevention before violence (early warning, diplomacy); peacemaking during conflict (talks and mediation); peacekeeping after a ceasefire (monitor, protect); peacebuilding for years afterwards (institutions, trust, jobs). An arrow loops from peacebuilding back up to prevention.", cap:"The stages overlap in practice: peacekeepers often deploy while talks continue, and peacebuilding starts as early as possible."},
      {table:[
        ["Tool","Aim","Typical actors"],
        ["[[peacemaking|Peacemaking]]","Get the sides to agree to stop fighting","Mediators: states, the UN, regional bodies, NGOs, religious groups"],
        ["[[peacekeeping|Peacekeeping]]","Help implement a ceasefire or agreement and protect civilians","UN or regional missions with soldiers, police and civilians"],
        ["[[peacebuilding|Peacebuilding]]","Address the causes of conflict so peace lasts","Governments, communities, the UN, donors, local organisations"]
      ]}
    ]},
    {h:"Peacemaking: getting to an agreement", body:[
      "[[mediation|Mediation]] is negotiation helped by a third party who has no power to impose a decision. Mediators carry messages, suggest compromises, offer guarantees and sometimes add incentives. They come in many kinds:",
      {list:[
        "**States:** at Camp David in 1978, US President Jimmy Carter mediated between Egypt and Israel, leading to their 1979 peace treaty.",
        "**Religious groups:** the Community of Sant’Egidio, a Catholic lay community in Rome, hosted the talks that ended Mozambique’s civil war in 1992.",
        "**Private organisations:** former Finnish President Martti Ahtisaari and his Crisis Management Initiative mediated the 2005 Helsinki agreement between Indonesia’s government and the Free Aceh Movement, after the 2004 tsunami devastated Aceh.",
        "**Regional bodies:** the African Union and sub-regional groups such as ECOWAS regularly send envoys to crises in their regions."
      ]},
      "The scholar I. William Zartman argued that conflicts become **“ripe”** for settlement when both sides feel stuck in a **mutually hurting stalemate**: neither can win, and continuing hurts. Who sits at the table matters too. In Liberia in 2003, the Women of Liberia Mass Action for Peace, led by figures such as Leymah Gbowee, staged sit-ins at the peace talks in Accra to press negotiators to reach a deal. In 2000, UN Security Council resolution 1325 called for women’s full participation in peace processes.",
      {ex:"Colombia’s government and the FARC guerrillas opened formal talks in 2012, first in Oslo and then in Havana, with Cuba and Norway as guarantors. A final deal was announced in August 2016, but voters narrowly rejected it in a referendum on 2 October. Negotiators revised it, a new agreement was signed on 24 November 2016, and Congress approved it. In 2017 the FARC handed its weapons to a UN mission. Implementation has been uneven since, which shows that signing is only the start.", label:"Case: Colombia"}
    ]},
    {h:"Peacekeeping: holding the line", body:[
      "Peacekeeping isn’t mentioned in the UN Charter. Secretary-General Dag Hammarskjöld is often credited with calling it “Chapter Six and a Half”: between peaceful settlement (Chapter VI) and enforcement (Chapter VII). The first mission, the UN Truce Supervision Organization, began in 1948 in the Middle East. In 1956 the first armed peacekeeping force went to Egypt after the Suez Crisis; Canada’s Lester Pearson, who proposed it, won the Nobel Peace Prize in 1957, and UN peacekeepers as a whole won it in 1988.",
      "The UN’s three principles are **consent** of the main parties, **impartiality**, and **no use of force except in self-defence and defence of the mandate**. Peacekeeping has changed a great deal since 1948:",
      {list:[
        "**Traditional** missions watch ceasefire lines and buffer zones, like the UN force in Cyprus since 1964.",
        "**Multidimensional** missions also help with elections, police, human rights and returning refugees, as in Namibia (1989–1990) and Cambodia (1992–1993).",
        "Since Sierra Leone in 1999, many missions have had mandates to **protect civilians**, sometimes robustly."
      ]},
      "Peacekeeping also has grave failures. In Rwanda in 1994, the [[security-council|Security Council]] cut the UN force as the genocide began. At Srebrenica in 1995, a UN-declared “safe area” fell and more than 8,000 Bosniak men and boys were killed, which international courts later ruled was genocide. The 2000 **Brahimi Report** called for clearer, achievable mandates and enough troops to carry them out. Peacekeepers have also caused harm: sexual exploitation and abuse by some personnel, and a cholera epidemic in Haiti from 2010 that was linked to a UN base; the UN apologised in 2016.",
      "Yet careful studies are fairly encouraging. Virginia Page Fortna’s *Does Peacekeeping Work?* (2008) found that peace tends to last longer where peacekeepers are deployed, and later studies found that larger missions are associated with fewer civilian deaths. Regional organisations keep peace too: the African Union led a long mission in Somalia from 2007."
    ]},
    {h:"Peacebuilding and dealing with the past", body:[
      "Peacebuilding covers the slow work of making peace last: **disarming, demobilising and reintegrating** fighters (DDR), reforming the army and police, rebuilding courts, holding elections, restarting the economy and rebuilding trust. In 2005 the UN decided to create a Peacebuilding Commission, together with a Peacebuilding Fund and a support office, for this work.",
      "One influential critique is aimed at the **“liberal peace”**: the habit of quickly exporting elections and free markets to war-torn countries. In *At War’s End* (2004), Roland Paris argued that rushed elections can inflame divisions and urged “institutionalisation before liberalisation”. Others stress **local ownership**: peace imposed from outside rarely lasts.",
      "[[transitional-justice|Transitional justice]] is how societies deal with mass abuses after war or dictatorship. Its main tools:",
      {table:[
        ["Tool","What it does","Example"],
        ["Trials","Hold individuals criminally responsible","UN tribunals for the former Yugoslavia (1993) and Rwanda (1994)"],
        ["Truth commissions","Establish and publish what happened","Argentina’s commission and its report *Nunca Más* (1984); South Africa’s Truth and Reconciliation Commission, chaired by Desmond Tutu"],
        ["Community justice","Local hearings for large numbers of cases","Rwanda’s gacaca courts (2002–2012)"],
        ["Reparations and memory","Compensate victims, remember the dead","Payments, apologies, memorials, museums"]
      ]},
      "These tools can clash. South Africa’s commission offered amnesty to people who fully disclosed politically motivated crimes, trading prosecution for truth. Some argue that amnesties help end wars; others argue that impunity invites future abuse. This **peace versus justice** dilemma has no single answer; societies choose different mixes."
    ]},
    {h:"Hard power, soft power", body:[
      "How do states get others to do what they want, in war, in peace talks or anywhere else? That is a question about [[power]]. The political scientist Joseph Nye drew a famous distinction in 1990:",
      {list:[
        "[[hard-power|Hard power]] works through **coercion and payment**: military force, threats, [[sanctions]], and rewards such as aid or trade deals (“sticks and carrots”).",
        "[[soft-power|Soft power]] works through **attraction**: getting others to want what you want. Nye named three sources: a country’s **culture**, its **political values** (when it lives up to them) and its **foreign policies** (when others see them as legitimate)."
      ]},
      "Peacemaking often uses both. At Camp David, the United States backed the deal with large aid packages for Egypt and Israel, a hard-power inducement. Norway, a small state, has built a reputation as a trusted, impartial host for talks from the Middle East to Colombia, a kind of soft power. Soft power also travels through [[popular-culture|popular culture]] (Korean pop music and television, Indian and Nigerian films, Brazilian football), international broadcasters, universities and scholarships.",
      "**Critiques:** soft power is hard to measure; it depends on the audience (what attracts one public repels another); and governments can’t fully control it, because much of it comes from artists, companies and civil society. Nye later used **smart power** for combining both kinds well."
    ]}
   ],
   try:[
    {id:"e2u8-l4-x1", type:"sort", q:"Is each activity peacemaking, peacekeeping or peacebuilding?", buckets:["Peacemaking","Peacekeeping","Peacebuilding"], items:[
      {t:"A former president shuttles between rebel leaders and the government to agree a ceasefire text.", b:0, why:"Mediating an agreement to stop fighting is peacemaking."},
      {t:"Unarmed military observers patrol a ceasefire line and report violations.", b:1, why:"Monitoring a ceasefire after the fighting stops is classic peacekeeping."},
      {t:"Former fighters join a training scheme so they can earn a living as builders and farmers.", b:2, why:"Reintegrating ex-combatants (the R in DDR) addresses causes of relapse: peacebuilding."},
      {t:"A UN mission’s troops guard a camp where displaced families shelter.", b:1, why:"Protecting civilians is part of many modern peacekeeping mandates."},
      {t:"A new national police force is trained to serve all communities fairly.", b:2, why:"Reforming the security sector to rebuild trust is long-term peacebuilding."},
      {t:"A religious community hosts secret talks between the two sides’ negotiators.", b:0, why:"Hosting and facilitating negotiations to reach an agreement is peacemaking."}
    ]},
    {id:"e2u8-l4-x2", type:"mcq", q:"A UN mission is ordered to launch offensive operations to defeat one particular armed group, while staying neutral towards the others. Which traditional peacekeeping principle does this most clearly strain?", options:[
      {t:"Impartiality", ok:true, why:"Yes. Fighting to defeat one party makes it hard to be seen as even-handed. The UN has given a few missions such offensive tasks, and the strain on impartiality is a central reason they are controversial."},
      {t:"Consent of the parties", why:"Consent may also be affected, but the defining problem is that the mission is now taking sides against one group, which is the impartiality principle."},
      {t:"Universal membership of the UN", why:"That isn’t a peacekeeping principle. The three are consent, impartiality and limited use of force."},
      {t:"The veto", why:"The veto is a Security Council voting rule, not a principle governing how peacekeepers act on the ground."}
    ]},
    {id:"e2u8-l4-x3", type:"mcq", q:"Ten years after a ceasefire, there is no fighting in a country, but one region still has no schools, its people are shut out of government jobs, and resentment is growing. How would Galtung describe the situation?", options:[
      {t:"Negative peace without positive peace", ok:true, why:"Right. Direct violence has stopped (negative peace), but structural violence, exclusion and inequality, remains, so positive peace is missing."},
      {t:"Positive peace, because there is no fighting", why:"No fighting is negative peace. Positive peace requires fair institutions that remove the reasons for violence."},
      {t:"An ongoing war", why:"With no fighting for ten years, it is not a war; the problem is the absence of positive peace."},
      {t:"A successful securitisation", why:"Securitisation is about framing issues as threats. It doesn’t describe this situation."}
    ]},
    {id:"e2u8-l4-x4", type:"match", q:"Match each transitional justice tool to an example.", pairs:[
      ["International criminal trial","The UN tribunal for Rwanda tries organisers of the 1994 genocide","Trials hold individuals criminally responsible."],
      ["Truth commission","Argentina’s commission publishes *Nunca Más* on people who disappeared under military rule","Truth commissions establish and publish what happened."],
      ["Community justice","Rwanda’s gacaca courts hear local cases in villages","Gacaca handled very large numbers of cases close to communities."],
      ["Conditional amnesty","South Africa’s commission grants amnesty for full disclosure of political crimes","It traded prosecution for truth, one side of the peace versus justice dilemma."],
      ["Memorialisation","A museum records the names and stories of victims","Memory work acknowledges victims and the past."]
    ]},
    {id:"e2u8-l4-x5", type:"sort", q:"Hard power or soft power?", buckets:["Hard power","Soft power"], items:[
      {t:"A government threatens trade sanctions unless a neighbour changes its policy.", b:0, why:"Threatening economic punishment is coercion: hard power."},
      {t:"Students worldwide apply for a country’s university scholarships because its universities have a good reputation.", b:1, why:"Attraction to a country’s institutions and opportunities is soft power."},
      {t:"A state offers a large aid package if another state signs a deal.", b:0, why:"Payment and inducement are also hard power in Nye’s terms: carrots as well as sticks."},
      {t:"A country’s films and music are popular abroad and make people curious about it.", b:1, why:"Cultural attraction is the most familiar source of soft power."},
      {t:"A navy deploys warships near a disputed coast.", b:0, why:"A show of military force is hard power."},
      {t:"A small country is trusted by both sides as an impartial host for peace talks.", b:1, why:"A reputation for fairness and legitimate foreign policy draws others to it: soft power."}
    ]},
    {id:"e2u8-l4-x6", type:"order", q:"Put the main steps of Colombia’s peace process with the FARC in order.", items:[
      {t:"2012: formal talks open in Oslo, then move to Havana", why:"Cuba and Norway acted as guarantors from the start."},
      {t:"August 2016: negotiators announce a final agreement", why:"After four years of talks, the full text was agreed."},
      {t:"2 October 2016: voters narrowly reject the deal in a referendum", why:"The “No” vote forced negotiators back to the table."},
      {t:"24 November 2016: a revised agreement is signed", why:"Changes responded to some critics’ concerns; Congress then approved it."},
      {t:"2017: the FARC hands its weapons to a UN mission", why:"Disarmament followed the signing, under UN verification."}
    ]}
   ],
   apply:{intro:"Look at how peace is made and kept, using official sources and your own experience.", tasks:[
     {t:"Read one UN peacekeeping mission’s page", how:["Open peacekeeping.un.org and choose any current or past mission.","Note where it is, when it started and what its mandate asks it to do.","Note which countries contribute troops or police, and whether the mission includes civilian staff.","Decide whether it looks traditional, multidimensional or focused on protecting civilians, and why."], write:"Mission, place, start year, mandate, contributors, and which type it looks like…"},
     {t:"Think about a conflict you have seen resolved", how:["Think of a dispute in a family, workplace, club or community that was settled.","Who helped, if anyone, and how? Did they carry messages, suggest compromises, offer guarantees?","Did the settlement bring negative peace only (people stopped fighting) or something closer to positive peace?","What would have made it last better?"], write:"The dispute, who mediated and how, negative or positive peace, and what would help it last…"},
     {t:"Do a soft power audit of your week", how:["For one week, note the films, music, food, apps, sport and news you meet that come from other countries.","Next to each, write the country and whether it changed your view of that country, even slightly.","Note one country whose government works hard at its image but whose culture you rarely meet."], write:"Item, country, effect on my view, and what this says about soft power…"}
   ], proof:"Notes on one UN mission and its type, one everyday conflict analysed for mediation and kinds of peace, and a week-long soft power audit."},
   read:[
     {book:"eir", where:"Chapter 11 “Protecting People”", note:"Read it after this lesson: its section on emerging norms of human protection connects peacekeeping, civilian protection and R2P."},
     {book:"ospol", where:"Chapter 14 “International Relations”, section 14.1 “What Is Power, and How Do We Measure It?”", note:"Read its part on soft power after this lesson. It uses the term more broadly than Nye, including diplomacy and cultural exchange."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u8-l5", title:"Shared problems, and reading the world", minutes:60,
   hook:{q:"In 2009 the Montreal Protocol, which protects the ozone layer, and its parent treaty, the Vienna Convention, became the first treaties in UN history to achieve what?", options:["Ratification by every country in the world","A complete ban on air pollution","Its own enforcement army","Adoption without any negotiation"], answer:0, reveal:"**Universal ratification**: every country joined. The Montreal Protocol is often called the most successful environmental agreement ever, and the ozone layer is on its way to recovery. Climate change involves the same atmosphere, yet cooperation has been far harder. This lesson explains why, using the idea of collective action problems, then applies it to health, and ends with a toolkit for reading world news and a bridge to Migration Studies."},
   goals:[
     "Explain collective action problems, free riders, global public goods and the tragedy of the commons, including Ostrom’s critique",
     "Trace climate cooperation from the UNFCCC to Kyoto and Paris, and explain why it is harder than protecting the ozone layer",
     "Explain how global health is governed through the WHO and the International Health Regulations, and what COVID-19 showed",
     "Read a world news story like an IR student: name the lens, count the voices, check the numbers and find the primary document"
   ],
   learn:[
    {h:"The group-project problem", body:[
      {lead:"In a group project, everyone gets the same mark. So each member is tempted to let the others do the work, and if everyone thinks that way, the project fails."},
      "That is a [[collective-action-problem|collective action problem]]: a situation where everyone would gain from cooperating, but each individual does better by holding back while others contribute. Someone who enjoys the benefit without paying is a [[free-rider|free rider]]. The economist Mancur Olson’s *The Logic of Collective Action* (1965) showed that large groups find it especially hard to cooperate, because each member’s contribution seems tiny and free riding is hard to spot.",
      "Many of the world’s biggest problems involve [[global-public-good|global public goods]]: benefits that everyone can enjoy and no one can be shut out of, such as a stable climate, the control of infectious disease or a financial system that doesn’t crash. Here is the logic for two countries deciding whether to cut emissions:",
      {table:[
        ["Choices","B cuts emissions","B doesn’t cut"],
        ["A cuts","Both pay, both get a safer climate","A pays, B free-rides: worst for A"],
        ["A doesn’t cut","A free-rides, B pays: worst for B","Nobody pays; the climate worsens for both"]
      ]},
      "Whatever B does, A saves money by not cutting, and the same is true for B. So both may end up in the bottom-right box, worse off than if both had cut. Game theorists call this structure a **[[prisoners-dilemma|prisoner’s dilemma]]**.",
      {key:"Collective action problems are not caused by bad people. They come from the structure of the situation, so the solutions are about changing the structure: rules, monitoring, rewards and trust."}
    ]},
    {h:"The tragedy of the commons, and Ostrom’s answer", body:[
      "In a famous 1968 article in *Science*, the ecologist Garrett Hardin described a pasture open to all herders. Each herder gains the full profit from adding one more animal but shares the cost of overgrazing with everyone, so all keep adding animals until the pasture is ruined. He called this the [[tragedy-of-the-commons|tragedy of the commons]]. The global commons today include the atmosphere, the high seas and their fish.",
      "Hardin thought the only answers were government control or private property. The political scientist **Elinor Ostrom** showed a third way. In *Governing the Commons* (1990) she studied communities that had managed shared resources for centuries: high Swiss pastures, irrigation systems around Valencia in Spain, farmer-run irrigation societies in the Philippines. They worked because they had clear boundaries, rules suited to local conditions, monitoring by the users themselves, gradually rising penalties for cheats and cheap ways to settle disputes. In 2009 Ostrom became the first woman to win the Nobel Prize in economics, “for her analysis of economic governance, especially the commons”.",
      "Global problems are harder than a village pasture: there are 190-plus states, no clear boundaries and no one to enforce the rules. But the same tools help. International institutions share information, make cheating visible, link issues together and build trust over repeated rounds, which is what [[neoliberal-institutionalism|neoliberal institutionalists]] argued (Unit 6). In January 2026 a treaty to protect biodiversity on the high seas (beyond any country’s waters) entered into force, an attempt to set rules for one of the largest commons."
    ]},
    {h:"Climate change: the hardest test", body:[
      "Climate change is a collective action problem with extra twists: the costs of cutting emissions come now, the benefits come later and are shared by everyone, and the countries that emitted most in the past are often not the ones most at risk today.",
      {fig:'<svg viewBox="0 0 340 352"><path class="d-ink" d="M66 16 V334" stroke-width="2"/><g class="d-lup" stroke-width="2"><circle cx="66" cy="24" r="6"/><circle cx="66" cy="64" r="6"/><circle cx="66" cy="104" r="6"/><circle cx="66" cy="144" r="6"/><circle cx="66" cy="184" r="6"/></g><g class="d-sage" stroke-width="2"><circle cx="66" cy="224" r="6"/><circle cx="66" cy="264" r="6"/><circle cx="66" cy="304" r="6"/></g><text x="50" y="29" text-anchor="end">1988</text><text x="80" y="29">IPCC set up (WMO and UNEP)</text><text x="50" y="69" text-anchor="end">1992</text><text x="80" y="69">UNFCCC agreed; signed at Rio</text><text x="50" y="109" text-anchor="end">1994</text><text x="80" y="109">UNFCCC enters into force</text><text x="50" y="149" text-anchor="end">1997</text><text x="80" y="149">Kyoto Protocol adopted</text><text x="50" y="189" text-anchor="end">2005</text><text x="80" y="189">Kyoto enters into force</text><text x="50" y="229" text-anchor="end">2015</text><text x="80" y="229">Paris Agreement adopted</text><text x="50" y="269" text-anchor="end">2016</text><text x="80" y="269">Paris enters into force</text><text x="50" y="309" text-anchor="end">2023</text><text x="80" y="309">First global stocktake</text><text class="s" x="80" y="327">(COP28, Dubai)</text></svg>', alt:"A vertical timeline: 1988, the IPCC is set up by the WMO and UNEP; 1992, the UNFCCC is agreed and signed at Rio; 1994, it enters into force; 1997, the Kyoto Protocol is adopted; 2005, Kyoto enters into force; 2015, the Paris Agreement is adopted; 2016, Paris enters into force; 2023, the first global stocktake at COP28 in Dubai.", cap:"Three decades of climate diplomacy. Note the gaps between adopting a treaty and its entering into force."},
      {list:[
        "The [[unfccc|UN Framework Convention on Climate Change]] (UNFCCC, 1992) set the goal of preventing “dangerous” human interference with the climate and the principle of **common but differentiated responsibilities and respective capabilities**: all countries should act, but richer, higher-emitting ones should lead. Its parties meet yearly at a COP (Conference of the Parties). The scientific assessments come from the Intergovernmental Panel on Climate Change (IPCC).",
        "The [[kyoto-protocol|Kyoto Protocol]] (1997) gave **binding emission targets to developed countries only**. The United States signed but never ratified it, and Canada announced its withdrawal in 2011. Critics said a treaty that excluded fast-growing emitters couldn’t solve the problem.",
        "The [[paris-agreement|Paris Agreement]] (2015) flipped the design. Its goal is to hold warming “well below 2°C” and pursue efforts to limit it to 1.5°C. **Every** party sets its own target, a [[nationally-determined-contribution|nationally determined contribution]] (NDC), and updates it every five years, ideally with more ambition. A transparency system and a **global stocktake** check collective progress. The targets themselves are not legally binding; the duties to submit and report are."
      ]},
      "Participation shifts. The United States left the Paris Agreement in 2020, rejoined in 2021 and left again with effect from 27 January 2026; in January 2026 it also announced it would withdraw from the UNFCCC itself.",
      "Smaller voices have shaped the regime. The Alliance of Small Island States, formed in 1990, pressed for the 1.5°C goal. In 2022 states agreed to set up a fund for **loss and damage** in vulnerable countries. A campaign begun in 2019 by Pacific law students and taken up by Vanuatu led the UN General Assembly to ask the [[international-court-of-justice|International Court of Justice]] for an [[advisory-opinion|advisory opinion]]; on 23 July 2025 the Court set out states’ obligations under international law in respect of climate change.",
      {tip:"Why did ozone go better? Chemicals that destroy ozone were made by relatively few companies, substitutes existed, the danger (the “ozone hole”, reported in 1985) was vivid, and the treaty offered funding for developing countries. Fossil fuels power almost everything, everywhere."}
    ]},
    {h:"Global health: disease needs no passport", body:[
      "States have cooperated on disease since the first International Sanitary Conference in Paris in 1851, called because of cholera. The World Health Organization (WHO) was founded in 1948. Its greatest success, the eradication of smallpox (declared in 1980), needed cooperation even between Cold War rivals.",
      "The legal backbone is the [[international-health-regulations|International Health Regulations]] (IHR), binding rules under which countries must detect and report health events that could spread internationally. The WHO’s Director-General can declare a **public health emergency of international concern**. Amendments adopted in 2024 entered into force on 19 September 2025 for most countries (a few rejected them), adding a higher alert level, a “pandemic emergency”.",
      "COVID-19 showed both sides of the collective action problem. The WHO declared a public health emergency of international concern on 30 January 2020 and ended it on 5 May 2023. Scientists shared virus genome data rapidly; vaccines were developed in record time; the COVAX scheme tried to share vaccines fairly. But many governments also banned exports of medical supplies and bought up vaccine doses, so poorer countries waited much longer, a pattern critics called **vaccine nationalism**.",
      "Two recent changes are worth knowing. In May 2025 the World Health Assembly adopted a **Pandemic Agreement**; it can open for signature only once an annex on sharing pathogens and their benefits is agreed, and in 2026 negotiations on that annex were extended. And the United States completed its withdrawal from the WHO in January 2026. Like many UN bodies, the WHO depends heavily on voluntary contributions, often earmarked by donors for particular projects, which limits how freely it can set priorities."
    ]},
    {h:"Reading world news like an IR student", body:[
      "You now have a toolkit that most news readers lack. Use these six questions on any story about world affairs:",
      {ol:[
        "**Which lens is the story using?** Talk of threats, strength and rivals is realist; talk of institutions, trade and rules is liberal; talk of identity, norms and reputation is constructivist; talk of inequality and whose interests are served is critical.",
        "**Which level?** Is it about one leader, one country’s politics, or the system as a whole?",
        "**Whose voices?** Count who is quoted: officials, experts, affected people, women, people from the Global South. Who is talked about but never heard?",
        "**Which words?** “Regime” or “government”, “militants” or “fighters”, “terrorist” or “armed group”: word choices carry [[framing]].",
        "**Where are the numbers from?** Every figure needs a source and a year, as in Lesson 1.",
        "**What does the primary document say?**"
      ]},
      "For that last question, go to the source. UN [[security-council|Security Council]] resolutions have symbols like `S/RES/1325 (2000)`, [[general-assembly|General Assembly]] resolutions like `A/RES/66/290`. You can read them free in the UN Digital Library (digitallibrary.un.org) and on the UN’s own pages; treaties are at treaties.un.org. The UN’s meetings coverage at press.un.org gives a fast summary of debates, but the UN notes that these summaries are not official records. Remember from Unit 7 that most General Assembly resolutions are recommendations, while Security Council decisions can bind every member.",
      "Experts quoted in the news often work at a [[think-tank|think tank]]: an organisation that researches policy and tries to influence it. Examples range from Chatham House in London and the Institute for Security Studies in Pretoria to the Observer Research Foundation in New Delhi and the Lowy Institute in Sydney. Think tanks are funded by governments, foundations, companies and individual donors in different mixes. Check the “about” or “funding” page, and read their work as you would any {{news-opinion-sponsored|opinion or sponsored content}}: useful, but from a point of view.",
      {ex:"Story: “Neighbours sign a deal to share a river’s water.”\nRealist reading: the stronger upstream state got the better terms.\nLiberal reading: a joint commission and data sharing make cheating visible.\nConstructivist reading: years of meetings built a shared identity as river partners.\nCritical reading: farmers and fishing communities downstream weren’t consulted.\nAll four can be partly true. Asking which one the article uses tells you what it may be leaving out.", label:"Worked example"}
    ]},
    {h:"Next: Migration Studies, and a send-off", body:[
      "Nearly every topic in this primer leads to people moving. Wars and persecution force people to flee; the 1951 Refugee Convention and its 1967 Protocol, overseen by the UN refugee agency UNHCR, set out who counts as a refugee. Climate change and disasters reshape where people can live. States claim [[sovereignty]] over their borders while human rights law protects people who cross them. And [[migration]] is one of the issues most often securitised. The **Migration Studies primer**, coming next, picks up these threads, building on the [[push-pull|push and pull factors]] you met in sociology. After it comes the Academic Language elective: Academic English first, then Academic Japanese.",
      "Thank you for working through the International Relations primer. You started with what IR studies and why it reaches into your shopping bag and your passport. You learned to look through realist, liberal, constructivist and critical lenses, to see how the UN, international law and the global economy work, and in this unit to think about war, peace and shared problems with evidence rather than slogans.",
      "Keep the habit: when the news breaks, ask whose lens, whose voice, which level, which source. The last chapter of the E-IR book, “Crossings and Candles”, is a scholar’s reflection on a long life in IR; it is a fine place to end, and to begin.",
      {key:"IR isn’t only about presidents and armies. It is about how billions of people, through states, organisations and their own actions, share one planet. You are part of that story."}
    ]}
   ],
   try:[
    {id:"e2u8-l5-x1", type:"mcq", q:"A regional fishing agreement caps each country’s catch. Country K secretly keeps fishing above its quota, knowing the others’ restraint will keep fish stocks healthy enough. What is Country K doing?", options:[
      {t:"Free riding", ok:true, why:"Yes. K enjoys the shared benefit (healthy stocks) without paying its share of the cost (restraint)."},
      {t:"Securitising the fish stocks", why:"Securitisation is presenting an issue as an existential threat to justify emergency measures. K is simply cheating on a shared rule."},
      {t:"Practising soft power", why:"Soft power is influence through attraction. Secret overfishing attracts no one; it exploits others’ cooperation."},
      {t:"Exercising positive peace", why:"Positive peace is about fair institutions that remove causes of violence. This is about cheating on a commons."}
    ]},
    {id:"e2u8-l5-x2", type:"mcq", q:"Why was protecting the ozone layer easier than tackling climate change? Choose all that apply.", options:[
      {t:"Ozone-destroying chemicals were made by relatively few producers", ok:true, why:"Few producers meant fewer actors to coordinate and easier monitoring."},
      {t:"Substitute chemicals were available at a manageable cost", ok:true, why:"Cheap alternatives lowered the cost of cooperating."},
      {t:"The Montreal Protocol offered funding to help developing countries switch", ok:true, why:"Support for developing countries helped bring everyone in."},
      {t:"Ozone depletion had no effect on human health", why:"The opposite: a thinner ozone layer lets in more ultraviolet radiation, which raises skin cancer risks. That visible danger helped motivate action."},
      {t:"The atmosphere is not a commons, so there were no free riders", why:"The atmosphere is a classic global commons. The ozone treaty succeeded despite this, through rules, funding and trade measures."}
    ]},
    {id:"e2u8-l5-x3", type:"order", q:"Put these steps in climate diplomacy in order.", items:[
      {t:"The IPCC is set up to assess climate science", why:"1988: the science body came first."},
      {t:"The UNFCCC is agreed and signed at the Rio Earth Summit", why:"1992: the framework treaty set the goal and principles."},
      {t:"The Kyoto Protocol sets binding targets for developed countries", why:"1997: the first protocol under the Convention."},
      {t:"The Paris Agreement asks every party for its own target (NDC)", why:"2015: the bottom-up design replaced Kyoto’s approach."},
      {t:"The first global stocktake reviews collective progress", why:"2023: concluded at COP28 in Dubai."}
    ]},
    {id:"e2u8-l5-x4", type:"match", q:"Match each agreement to its key feature.", pairs:[
      ["UNFCCC (1992)","Common but differentiated responsibilities and respective capabilities","The framework convention’s core principle."],
      ["Kyoto Protocol (1997)","Binding emission targets for developed countries only","Developing countries had no binding targets under Kyoto."],
      ["Paris Agreement (2015)","Every party sets its own target and updates it every five years","Nationally determined contributions are the heart of Paris."],
      ["Montreal Protocol (1987)","Phases out ozone-destroying chemicals; ratified by every country","It reached universal ratification in 2009."],
      ["International Health Regulations","Countries must detect and report health events that could spread abroad","The IHR are binding rules administered through the WHO."]
    ]},
    {id:"e2u8-l5-x5", type:"sort", q:"An article about a dispute over a shared river uses several lenses. Sort each sentence by the lens it reflects.", buckets:["Realist","Liberal","Constructivist","Critical"], items:[
      {t:"The upstream country, with the larger army, can dictate how much water flows downstream.", b:0, why:"Explaining the outcome by military power and relative strength is realist."},
      {t:"A joint river commission publishes water data monthly, so neither side can cheat unnoticed.", b:1, why:"Institutions that share information and make cooperation verifiable are a liberal theme."},
      {t:"Both governments now describe themselves as “river partners”, a phrase unthinkable twenty years ago.", b:2, why:"Changing identities and shared meanings are constructivist."},
      {t:"Small farmers and fishing communities were never consulted, while large agribusiness firms helped draft the deal.", b:3, why:"Asking whose interests are served and who is excluded is the critical lens."},
      {t:"Each government worries the other will gain more from the dam, even if both gain something.", b:0, why:"Concern about relative gains is a realist theme."},
      {t:"Trade between the two countries has grown, making conflict costly for both.", b:1, why:"Interdependence raising the cost of conflict is a liberal argument."}
    ]},
    {id:"e2u8-l5-x6", type:"spot", q:"A news report on a UN vote. Tap the places where an IR student should stop and check, ask for a source or notice missing voices.", ask:"needs checking or a source", parts:[
      "The UN Security Council ",
      {t:"adopted a resolution on Tuesday", flag:false, why:"A plain factual statement you can verify in the UN Digital Library; nothing to flag yet."},
      ". ",
      {t:"Experts agree it will end the conflict within months", flag:true, why:"Which experts? A sweeping prediction needs named sources, and “experts agree” hides disagreement."},
      ". The text ",
      {t:"calls for a ceasefire and humanitarian access", flag:false, why:"This is checkable against the resolution text itself, the primary document."},
      ". ",
      {t:"A senior analyst at a think tank said the vote was a triumph", flag:true, why:"Who funds that think tank, and what is its point of view? An unnamed analyst from an unnamed think tank can’t be checked."},
      ". ",
      {t:"Diplomats from the five permanent members were quoted at length", flag:true, why:"Notice whose voices are missing: no one from the affected country, its civilians or its neighbours is quoted."},
      ". ",
      {t:"Fighting has killed thousands", flag:true, why:"A casualty figure needs a source and a date, as Lesson 1 showed."},
      "."
    ]},
    {id:"e2u8-l5-x7", type:"mcq", q:"You want to know exactly what the Security Council decided in a vote yesterday. Which is the best source to read first?", options:[
      {t:"The text of the resolution itself, with its S/RES symbol, from the UN Digital Library or UN website", ok:true, why:"Right. The resolution is the primary document: the actual words the Council adopted."},
      {t:"A think tank’s commentary on the vote", why:"Commentary can help you understand it, but it is an interpretation, written from a point of view. Read the text first."},
      {t:"A social media post by a politician", why:"A post is someone’s reaction, often selective. It isn’t the decision itself."},
      {t:"The UN’s meetings coverage summary", why:"Useful and quick, but the UN notes that these summaries are not official records. The resolution text is."}
    ]}
   ],
   apply:{intro:"Practise on the real world: shared problems, primary documents and the news you read.", tasks:[
     {t:"Read one UN document yourself", how:["Search the UN Digital Library (digitallibrary.un.org) or press.un.org for a recent Security Council or General Assembly resolution on any topic.","Read the operative paragraphs: the numbered ones that begin with verbs such as “Decides”, “Calls upon” or “Urges”.","Note who adopted it, what it asks for, and whether its wording suggests a binding decision or a recommendation.","Compare it with one news report of the same vote."], write:"Document symbol, body, what it decides or asks, binding or not, and what the news report added or left out…"},
     {t:"Compare two outlets from different countries on one event", how:["Choose one international event in the news this week.","Find a report on it from two outlets based in different countries or regions.","For each, note the lens, the level, who is quoted and two key word choices.","Write what each reader would come away believing."], write:"Event; outlet 1 and outlet 2: lens, level, voices, words, and the main impression each leaves…"},
     {t:"Find a collective action problem near you", how:["Think of a shared resource where you live: a shared kitchen, a parking area, a community garden, a fishing ground, a local river.","Is there free riding? Who bears the cost?","Which of Ostrom’s features are present: clear boundaries, local rules, monitoring, gradual penalties, ways to settle disputes?","Suggest one change that would help."], write:"The shared resource, the free-riding problem, Ostrom’s features present or missing, and my suggestion…"},
     {t:"Look ahead to Migration Studies", how:["Think of one way people have moved into or out of your area, or your family’s history, if you are comfortable doing so.","Name one IR force behind it: a war, a treaty, trade, climate, a border rule.","Write one question you hope the Migration Studies primer will answer."], write:"The movement, the IR force behind it, and my question for Migration Studies…"}
   ], proof:"Notes on one UN document compared with its news coverage, a two-outlet comparison of one event, a local collective action problem analysed with Ostrom’s features, and a question for the Migration Studies primer."},
   read:[
     {book:"ospol", where:"Chapter 15 “International Law and International Organizations”, section 15.1 “The Problem of Global Governance”", note:"Read it after this lesson: a gentle account of the tragedy of the commons and why global governance is hard."},
     {book:"eir", where:"Chapter 15 “The Environment”", note:"Read it after this lesson: it adds common pool resource theory and the debate about a global environmental organisation."},
     {book:"eirt", where:"Chapter 11 “Green Theory” (Hugh C. Dyer)", note:"For going further: how green theory challenges the state-centred lenses."},
     {book:"eir", where:"Chapter 18 “Crossings and Candles”", note:"The book’s reflective final chapter: a good way to end the primer."}
   ]
  }
  ],
  checkpoint:["e2u8-q02","e2u8-q05","e2u8-q11","e2u8-q14","e2u8-q20","e2u8-q23","e2u8-q26","e2u8-q30","e2u8-q33","e2u8-q38","e2u8-q41","e2u8-q45"],
  codex:[
   {id:"war-and-conflict", title:"War and armed conflict", aka:["armed conflict","civil war","interstate war","conflict data"], tags:["international relations","war","data"],
    summary:"How researchers define and count wars and armed conflicts, the main kinds, and what the data shows about trends.",
    levels:{
     starter:[
      "To compare wars across countries and decades, researchers need a shared rulebook, the way football needs the same rules in every stadium. In International Relations, [[war]] means organised, political and sustained armed violence.",
      "The best-known rulebook comes from the Uppsala Conflict Data Program (UCDP) in Sweden. It counts a **state-based armed conflict** when fighting over government or territory, with a state’s government on at least one side, kills at least **25 people in battle in one calendar year**. It calls it a **war** at **1,000 battle-related deaths** in a year.",
      "Most conflicts since 1946 have been fought **inside** countries ([[civil-war|civil wars]]) rather than between them ([[interstate-war|interstate wars]]), often with outside states sending troops.",
      {key:"Always ask which dataset, which definition and which year before trusting a number about wars."},
      "Researchers also record violence in which no government fights, such as battles between rival armed groups, and deliberate attacks on unarmed civilians."
     ],
     builder:[
      "UCDP records three families of organised violence:",
      {list:[
        "**State-based armed conflict**, in four kinds: interstate (government against government), intrastate (government against armed groups at home), [[internationalized-conflict|internationalized intrastate]] (the same, with foreign troops fighting on a side) and extrasystemic (a state against a group outside its territory, mostly colonial wars).",
        "**Non-state conflict**: two organised armed groups, neither a government, fighting each other (for example rival cartels).",
        "**One-sided violence**: a government or organised group deliberately killing unarmed civilians."
      ]},
      "Long-term patterns in [[conflict-data|conflict data]]: interstate wars became rare after 1945; conflicts inside countries rose during decolonisation and the Cold War, reached a high point in the early 1990s, fell, then rose again from the 2010s to new records in the 2020s; and internationalization has grown.",
      "UCDP’s release of June 2026 recorded **65** state-based conflicts in 2025 (the most since 1946), **8** of them interstate (also a record), **13** wars (the most since 1992) and about **244,600** deaths in organised violence, the second-deadliest year since 1994. One-sided violence killed about 76,500 people, mostly linked to the war in Sudan.",
      {tip:"A record number of conflicts is not the same as a record number of deaths, and neither is the same as a record rate per person."},
      "Two cautions when using these figures. Numbers are revised as better information arrives, so cite the release (“UCDP, 2025 data, June 2026”). And the world’s population is more than three times what it was in 1950, so comparisons across decades are clearer as deaths per 100,000 people than as raw totals."
     ],
     pro:[
      "**Definitions drive counts.** The Correlates of War project (from 1963) uses a 1,000-death threshold per year for war and its own categories; UCDP uses 25 deaths for armed conflict and counts by calendar year. Coding a conflict also requires a stated “incompatibility” over government or territory, which is why some violence (for example much criminal violence) falls outside state-based conflict.",
      "**Measurement problems.** Deaths are reported as best estimates with low and high bounds; data for earlier years are revised as sources improve. UCDP counts direct deaths from violence. Indirect deaths from disease, hunger and collapsed services can be larger in some wars but are contested and not included.",
      "**Trend debates.** The decline thesis (Pinker, 2011; Goldstein, 2011) emphasises falling battle deaths relative to population since 1945. Critics (Braumoeller, *Only the Dead*, 2019) find no clear decline in the rate at which wars start; statisticians such as Cirillo and Taleb stress that conflict deaths have fat-tailed distributions, so rare huge wars dominate and short calm periods are weak evidence. Gaddis’s “long peace” (1986–87) describes the absence of great-power war since 1945 without settling why.",
      "**“New wars.”** Kaldor (1999) argued post-Cold War conflicts differ in goals (identity), methods (targeting civilians) and finance (globalised war economies); Kalyvas (2001) argued many of these features are old and partly reflect changed reporting.",
      "**Law.** [[international-humanitarian-law|International humanitarian law]] (Hague 1899/1907, Geneva 1949 and the 1977 Protocols) governs conduct in war (jus in bello) regardless of who started it; the UN Charter governs resort to force (jus ad bellum).",
      "**Other datasets.** ACLED (the Armed Conflict Location & Event Data project) records individual events such as battles, protests and attacks, which suits tracking violence week by week. Event data and annual conflict data answer different questions, so their counts are not directly comparable."
     ]
    },
    related:["causes-of-war","peacekeeping","levels-of-analysis","international-law","reading-world-news"],
    read:[{book:"eir", where:"Chapter 11 “Protecting People”"}],
    sources:[
      {t:"UCDP definitions (Uppsala University)", url:"https://www.uu.se/en/department/peace-and-conflict-research/research/ucdp/ucdp-definitions"},
      {t:"UCDP: record number of conflicts between states (Uppsala University press release, 9 June 2026)", url:"https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"}
    ], checked:"2026-11"},

   {id:"causes-of-war", title:"Causes of war", aka:["why wars happen","bargaining model of war"], tags:["international relations","war","theory"],
    summary:"Explanations of why wars start, sorted by level of analysis, plus the bargaining puzzle and theories of civil war.",
    levels:{
     starter:[
      "A dropped cigarette starts a fire only if the forest is dry. Wars are similar: an **immediate cause** (the spark, such as an assassination) and **underlying causes** (the fuel: rivalry, fear, ambitions, weak institutions).",
      "IR sorts underlying causes by [[levels-of-analysis|level]]: the **individual** (leaders’ beliefs and mistakes), the **state** (how a country is governed, nationalism, economic interests) and the **international system** (no world government, shifting power, alliances). Kenneth Waltz organised his 1959 book *Man, the State, and War* around these three “images”.",
      "The 1914 crisis that began the First World War is the classic case: an assassination in Sarajevo sparked a war fuelled by two alliance blocs, rigid war plans, nationalism and leaders’ misjudgements.",
      {key:"Good explanations combine levels; “the one cause of the war” is almost always too simple."},
      "A useful habit: for each explanation, ask what would have had to be different for the war not to happen, and at which level that difference sits."
     ],
     builder:[
      {table:[
        ["Level","Typical explanations","Main critique"],
        ["Individual","Human nature; misperception (Jervis, 1976); groupthink","Leaders act under constraints; can’t explain timing alone"],
        ["State","Regime type; diversionary war; nationalism; economic interests; military doctrines","Very different states have fought wars"],
        ["System","Anarchy; security dilemma; balance of power; power transition (Organski, 1958)","The system changes slowly; most power shifts don’t end in war"]
      ]},
      "**The bargaining puzzle.** Because war is costly, there is almost always a deal both sides prefer to fighting. James Fearon’s 1995 article “Rationalist Explanations for War” gave three reasons wars still happen: **private information** with incentives to bluff, **commitment problems** (promises today may be broken tomorrow, for example by a rising power or a government after rebels disarm) and **indivisible issues**.",
      "**Civil wars.** Collier and Hoeffler (2004) stressed opportunity (rebellion that can fund itself); Fearon and Laitin (2003) stressed weak states, poverty and rough terrain, finding ethnic diversity alone a poor predictor; Cederman, Gleditsch and Buhaug (2013) found political exclusion and inequality between groups matter.",
      "**Worked example, 1914.** System: two alliance blocs and Germany’s rise. State: rigid mobilisation plans and nationalism. Individual: leaders’ risky choices and misjudgements. Each level answers a different question: the system explains why tension was high, the state level why the crisis escalated so fast, and the individual level why particular choices were made in July 1914."
     ],
     pro:[
      "**Power transition and the “Thucydides trap.”** Allison (*Destined for War*, 2017) found war in 12 of 16 cases over five centuries in which a rising power challenged a ruling one. Critics question case selection and note that preventive logic can also lead to accommodation. The original line comes from Thucydides (I.23): the growth of Athenian power and the fear it caused in Sparta.",
      "**Bargaining extensions.** Commitment problems explain preventive wars, wars over rapidly shifting power and the difficulty of ending civil wars; Barbara Walter showed that third-party guarantees help rebels accept disarmament. Information problems explain why wars often end once fighting reveals true strength.",
      "**1914 historiography.** Fritz Fischer (1961) placed primary responsibility on German war aims; later scholars stressed the “cult of the offensive” (Van Evera, Snyder, 1984) and alliance dynamics; Christopher Clark’s *The Sleepwalkers* (2012) distributed responsibility across capitals. The levels of analysis help map these arguments but don’t adjudicate them.",
      "**Cautions.** Explanations from single dramatic cases generalise poorly; quantitative studies trade depth for breadth. “Ancient hatreds” accounts are generally rejected by researchers in favour of political mechanisms: exclusion, fear, elite mobilisation and opportunity.",
      {tip:"When reading a claim about why a war began, ask what would have to change for it not to happen, and at which level that change sits."},
      "**Peace as well as war.** The same levels explain why wars don’t happen: deterrence and the balance of power (system), democratic institutions and trade interests (state), cautious leaders (individual). Explanations of the absence of great-power war since 1945 draw on all three, which is why they remain contested."
     ]
    },
    related:["war-and-conflict","levels-of-analysis","realism","democratic-peace","kenneth-waltz"],
    read:[{book:"ospol", where:"Chapter 14, section 14.4 “Using Levels of Analysis to Understand Conflict”"}],
    sources:[
      {t:"OpenStax Introduction to Political Science (source repository)", url:"https://github.com/openstax/osbooks-introduction-political-science"}
    ], checked:"2026-11"},

   {id:"security-studies", title:"Security studies", aka:["security","traditional security","deterrence","arms control"], tags:["international relations","security"],
    summary:"The branch of IR that asks security for whom, from what and by what means, from deterrence and arms races to widened agendas.",
    levels:{
     starter:[
      "Feeling secure can mean a lock on the door, a steady income or a hospital nearby. [[security-studies|Security studies]] asks the same questions about the world: security **for whom**, **from what**, and **by what means**?",
      "For most of the 20th century the answer was narrow: the **state** must be safe from **military** attack by other states, using armies, alliances and [[deterrence]], the threat of punishment that stops an attack before it starts.",
      "Since the Cold War ended, scholars have widened the agenda to disease, climate, crime and economic shocks, and deepened it to the security of people and communities, not just states.",
      {key:"How you define security decides what you spend money on."},
      "Security studies now ranges from nuclear strategy to food, health and cyber security, but its core questions stay the same."
     ],
     builder:[
      "**Deterrence** needs capability, credibility and communication. Thomas Schelling (*Arms and Influence*, 1966) contrasted deterrence (“don’t do this”) with compellence (“stop, or else”). Nuclear deterrence rests on **second-strike capability**; when both sides have it, the result is [[mutually-assured-destruction|mutually assured destruction]].",
      "An [[arms-race|arms race]] is the [[security-dilemma|security dilemma]] in motion: each side’s build-up looks threatening to the other. **Arms control** limits weapons by agreement (Partial Test Ban Treaty 1963; INF Treaty 1987, ended 2019; New START 2010, expired February 2026), while **disarmament** reduces or removes them.",
      "The **Cuban Missile Crisis** (October 1962) is the classic case of deterrence under strain: Soviet missiles in Cuba, a US naval quarantine, and a deal in which the missiles were removed, the US pledged not to invade Cuba and secretly agreed to remove missiles from Turkey.",
      "**Widening** brought [[human-security|human security]], environmental security and cyber security. The Copenhagen School’s [[securitization|securitisation]] theory asks how issues get labelled as security at all.",
      "Arms control can lower costs and risks even between rivals who distrust each other, because each side gains from predictability. Verification (inspections, satellites, data exchanges) is what makes such deals credible."
     ],
     pro:[
      "Arnold Wolfers (1952) called national security “an ambiguous symbol”. Barry Buzan’s *People, States and Fear* (1983, 2nd ed. 1991) proposed sectors of security (military, political, economic, societal, environmental); with Ole Wæver and Jaap de Wilde (*Security: A New Framework for Analysis*, 1998) this became the Copenhagen School.",
      "**Securitisation** components: securitising actor, referent object, speech act, audience, extraordinary measures; a move succeeds only when the audience accepts it. Wæver favoured **desecuritisation**. Critiques: the “silent security dilemma” of those who cannot speak (Lene Hansen, 2000), a Western-centric model of politics, and difficulty identifying the audience.",
      "Other schools: the **Welsh (Aberystwyth) School** of critical security studies (Ken Booth) ties security to human emancipation; the **Paris School** studies the routine practices of security professionals (border agencies, data systems) rather than dramatic speeches.",
      "**Cyber** strains deterrence through attribution delays, effects below the threshold of armed attack, and spillover. Responses include the UN expert group norms (2015) and the expert *Tallinn Manual* (2013; 2.0 2017), which is not a treaty.",
      {tip:"Ask of any security claim: who is the referent object, who is speaking, who is the audience, and what is being justified?"},
      "**Lenses on arms control.** Defensive realists see it as a way to soften the security dilemma; offensive realists doubt states will accept limits when they could gain an advantage. Liberal institutionalists stress verification and transparency, which make cheating visible. Constructivists point to norms, such as the taboo on using nuclear weapons and the stigma attached to chemical weapons, that shape what states see as acceptable."
     ]
    },
    related:["human-security","nuclear-weapons","terrorism-ir","realism","causes-of-war"],
    read:[{book:"eirt", where:"Chapter 14 “Securitisation Theory”"}],
    sources:[
      {t:"UN: Human security", url:"https://www.un.org/humansecurity/"}
    ], checked:"2026-11"},

   {id:"human-security", title:"Human security", aka:["freedom from fear","freedom from want"], tags:["international relations","security","development"],
    summary:"An approach that puts people, not territory, at the centre of security: freedom from fear and freedom from want.",
    levels:{
     starter:[
      "For most people, the daily dangers are not foreign tanks but hunger, illness, violence on the street or losing a job. [[human-security|Human security]] puts these at the centre: it asks whether **people** are safe, not only whether borders are.",
      "The idea was launched by the UN Development Programme’s *Human Development Report 1994*, subtitled “New Dimensions of Human Security”, which equated security “with people rather than territories, with development rather than arms”.",
      "It is often summed up as **freedom from fear** (from violence) and **freedom from want** (from poverty and deprivation).",
      {key:"Human security doesn’t replace state security; it asks what states are for."},
      "It asks a simple question about any crisis: are the people affected safe from violence, and do they have what they need to live with dignity?"
     ],
     builder:[
      "The 1994 report listed seven areas of human security:",
      {list:[
        "**Economic** (secure income) and **food** (enough to eat)",
        "**Health** (protection from disease) and **environmental** (clean air, water, land)",
        "**Personal** (freedom from violence, including at home) and **community** (safety of groups and identities)",
        "**Political** (basic rights, freedom from repression)"
      ]},
      "In 2012 the UN General Assembly (resolution 66/290) agreed that human security addresses “widespread and cross-cutting challenges to the survival, livelihood and dignity” of people. States such as Canada, Japan and Norway championed the idea in the 1990s and 2000s; it helped drive the 1997 treaty banning anti-personnel landmines and informed the [[responsibility-to-protect|responsibility to protect]].",
      {tip:"Use the seven areas as a checklist when you read about any crisis: which kinds of security are at stake, and for whom?"},
      "**Example:** the 1997 Mine Ban Treaty (often called the Ottawa Treaty) came out of a campaign by NGOs, the International Campaign to Ban Landmines, working with like-minded governments. The campaign and its coordinator Jody Williams received the Nobel Peace Prize in 1997. It showed how a human security framing can change which weapons states treat as acceptable.",
      "Human security links naturally to the [[sustainable-development-goals|Sustainable Development Goals]] (Unit 7), which set targets for poverty, hunger, health and peaceful societies."
     ],
     pro:[
      "**Broad versus narrow.** A “broad” school (following the 1994 report and the 2003 Commission on Human Security co-chaired by Sadako Ogata and Amartya Sen) includes want; a “narrow” school focuses on protecting people from violence. The narrow version is easier to operationalise; the broad version reflects what people actually fear.",
      "**Critiques.** Roland Paris (2001) called human security “hot air” as an analytical concept: so wide it can’t guide research or priorities. Some Global South governments see it as a cover for intervention, at odds with [[non-interference]]; critical scholars argue it can depoliticise problems by turning them into technical tasks for donors. Supporters reply that it reorients policy towards where most deaths occur.",
      "**Relation to securitisation.** Calling poverty or disease “security” can mobilise resources, but also invites emergency logic and military actors into areas that might be better handled through ordinary politics. This tension connects the human security and securitisation literatures.",
      "**In practice**: the UN Trust Fund for Human Security (established 1999) funds integrated, people-centred projects that combine protection with empowerment.",
      "**Measurement.** Because human security covers so much, researchers usually measure its parts (food insecurity, homicide rates, access to health care) rather than one index. Debate continues about whether it is best treated as an analytical concept, a policy agenda or a moral claim."
     ]
    },
    related:["security-studies","responsibility-to-protect","development-ir","global-health-governance"],
    read:[{book:"eir", where:"Chapter 11 “Protecting People”"}],
    sources:[
      {t:"UNDP: Human Development Report 1994", url:"https://hdr.undp.org/content/human-development-report-1994"},
      {t:"UN: Human security", url:"https://www.un.org/humansecurity/"}
    ], checked:"2026-11"},

   {id:"nuclear-weapons", title:"Nuclear weapons and the NPT", aka:["NPT","nuclear proliferation","nuclear deterrence"], tags:["international relations","security","arms control"],
    summary:"Who has nuclear weapons, how deterrence works, and the bargain at the heart of the Non-Proliferation Treaty.",
    levels:{
     starter:[
      "A single nuclear weapon can destroy a city. Since 1945 they have been used in war only twice, at Hiroshima and Nagasaki, but they shape world politics every day.",
      "SIPRI estimated that in January 2026 nine states had nuclear weapons: the United States, Russia, the United Kingdom, France, China, India, Pakistan, North Korea and Israel (which neither confirms nor denies it), with about 12,187 warheads between them.",
      "The [[non-proliferation-treaty|Non-Proliferation Treaty]] (NPT) tries to stop [[nuclear-proliferation|proliferation]], the spread of these weapons. Opened for signature in 1968 and in force since 1970, it has 191 states parties.",
      {key:"The NPT is a bargain: no new nuclear-armed states, disarmament talks by all, and peaceful nuclear energy for everyone."},
      "Nuclear weapons also shaped the Cold War’s logic of [[deterrence]]: each superpower was kept from attacking by the certainty of being destroyed in return."
     ],
     builder:[
      {list:[
        "**Non-proliferation:** states without weapons promise not to acquire them and accept inspections by the International Atomic Energy Agency (IAEA).",
        "**Disarmament:** Article VI commits all parties to negotiate in good faith on ending the arms race and on nuclear disarmament.",
        "**Peaceful use:** all parties may develop nuclear energy for peaceful purposes."
      ]},
      "The treaty recognises five nuclear-weapon states, those that had exploded a nuclear device before 1 January 1967: the United States, the Soviet Union (now Russia), the United Kingdom, France and China. India, Israel and Pakistan never joined; North Korea announced its withdrawal in 2003. The treaty was extended indefinitely in 1995.",
      "SIPRI’s January 2026 estimates: about 12,187 warheads in total, about 9,745 in military stockpiles and about 4,012 deployed with missiles and aircraft; Russia and the United States held almost 86% of all warheads. New START, the last treaty limiting their strategic forces, expired in February 2026 without a replacement.",
      "**Rollback is possible:** South Africa dismantled its weapons around 1990–91; Belarus, Kazakhstan and Ukraine gave up Soviet weapons in the 1990s. Nuclear-weapon-free zones cover Latin America and the Caribbean (1967), the South Pacific (1985), Southeast Asia (1995), Africa (1996) and Central Asia (2006).",
      "**Inspections:** the International Atomic Energy Agency (IAEA) checks, through safeguards agreements, that nuclear material in non-nuclear-weapon states is not diverted to weapons."
     ],
     pro:[
      "**Deterrence debates.** Kenneth Waltz argued that the spread of nuclear weapons could stabilise relations by raising the cost of war; Scott Sagan argued that organisational routines, accidents and civil–military problems make proliferation dangerous (*The Spread of Nuclear Weapons: A Debate*, 1995). The “nuclear taboo” literature (Nina Tannenwald) argues that a norm, not only deterrence, explains non-use since 1945.",
      "**The disarmament pillar.** Many non-nuclear states argue that the nuclear-weapon states have not met Article VI. This frustration helped produce the Treaty on the Prohibition of Nuclear Weapons (adopted 2017, in force 22 January 2021), which none of the nine nuclear-armed states has joined; supporters see it as building a norm, opponents as undermining the NPT.",
      "**Review conferences** are held every five years; several have ended without an agreed final document, reflecting disputes over disarmament, the Middle East and compliance.",
      "**Data caution.** Warhead numbers are estimates based on public information; SIPRI notes that the end of New START removed treaty-based official data on US and Russian strategic forces. Always cite the source and the reference date (“SIPRI, January 2026”).",
      "**Testing’s legacy.** Nuclear testing left lasting harm far from the capitals that ordered it: in the Marshall Islands, at Semipalatinsk in Kazakhstan, in the Algerian Sahara and in French Polynesia, communities still live with its health and environmental effects."
     ]
    },
    related:["security-studies","causes-of-war","international-law","kenneth-waltz"],
    sources:[
      {t:"SIPRI Yearbook 2026, chapter 8: World nuclear forces (PDF)", url:"https://www.sipri.org/sites/default/files/YB26%2008%20World%20Nuclear%20Forces.pdf"},
      {t:"UNODA: Treaty on the Non-Proliferation of Nuclear Weapons", url:"https://disarmament.unoda.org/wmd/nuclear/npt/"}
    ], checked:"2026-11"},

   {id:"terrorism-ir", title:"Terrorism", aka:["terrorism","counter-terrorism","transnational terrorism"], tags:["international relations","security","law"],
    summary:"Why terrorism has no agreed international definition, what most definitions share, and how states respond.",
    levels:{
     starter:[
      "Everyone seems to know terrorism when they see it, yet governments have argued for decades about how to define it. “One person’s terrorist is another’s freedom fighter” sums up the problem.",
      "Most scholars agree on a core: [[terrorism]] is **violence or the threat of violence**, for a **political, religious or ideological aim**, deliberately aimed at **civilians or non-combatants**, intended to **spread fear** among a wider audience than the immediate victims. It is usually carried out by **non-state** groups.",
      "The label matters: it can bring special legal powers, sanctions and bans on talking to a group. Careful writers say who uses it.",
      {key:"There is still no single agreed definition of terrorism in international law."},
      "Terrorism is a tactic as well as a label for groups: an armed group may use it alongside other methods, which is one reason labels are argued over."
     ],
     builder:[
      "A UN committee was created in 1996 (General Assembly resolution 51/210) and began negotiating a **draft comprehensive convention** in 2000; it has not been concluded. In December 2024 the General Assembly recommended a working group to try to finalise it.",
      "Meanwhile, **19 universal legal instruments** (1963–2014) criminalise specific acts: hijacking, attacks on diplomats, hostage-taking, bombings, financing terrorism, nuclear terrorism and more.",
      "Two disputes keep the general definition stuck: whether armed struggles for **self-determination** or against **foreign occupation** are excluded, and whether acts by **state armed forces** are covered. Nelson Mandela’s ANC was labelled terrorist by apartheid South Africa; Mandela stayed on a US watch list until 2008.",
      "David Rapoport described modern terrorism in four “waves”: anarchist, anti-colonial, New Left and religious. [[globalization|Globalisation]] has made many groups transnational in funding, recruitment and reach.",
      "**Responses** range from policing, intelligence sharing and cutting off finance to military action and programmes that try to prevent radicalisation. Each raises questions about rights and effectiveness. Labelling a group or issue as terrorist is also a powerful [[securitization|securitising]] move."
     ],
     pro:[
      "**Definitional scholarship.** Alex Schmid’s work, including a revised academic consensus definition (2011), catalogues hundreds of definitions; debates include whether “state terrorism” is a useful category, whether attacks on soldiers off duty count, and how to separate terrorism from insurgency (which may use terrorism as one tactic).",
      "**Counter-terrorism trade-offs.** Measures such as surveillance, detention, listing and financial controls can conflict with human rights and humanitarian action; UN Security Council resolutions after 2001 (for example 1373) required states to criminalise terrorist financing. Critical terrorism studies question who gets labelled and why, and how “terrorism” is securitised.",
      "**Evidence on effectiveness.** Research suggests most terrorist groups end through policing or joining politics rather than military defeat (a 2008 RAND study of 648 groups, *How Terrorist Groups End* by Seth Jones and Martin Libicki, is the best-known example), though findings depend on how “ending” is coded.",
      "**Reporting practice.** Attribute labels (“designated as terrorist by…”), separate the act from the group’s cause, and avoid amplifying perpetrators’ propaganda.",
      "**Data.** Event databases such as the Global Terrorism Database (University of Maryland) record attacks using their own inclusion rules, so counts vary between sources, and trends depend on whether attacks inside ongoing wars are included.",
      "**Who gets labelled.** Studies of media coverage have found that similar attacks can receive very different coverage and labels depending on who the perpetrators and victims are, another reason to attribute labels carefully."
     ]
    },
    related:["security-studies","non-state-actors","international-law","reading-world-news"],
    read:[{book:"eir", where:"Chapter 14 “Transnational Terrorism”"}],
    sources:[
      {t:"UN Office of Counter-Terrorism: International legal instruments", url:"https://www.un.org/counterterrorism/international-legal-instruments"},
      {t:"UN Office of Legal Affairs: Ad Hoc Committee established by General Assembly resolution 51/210", url:"https://legal.un.org/committees/terrorism/"}
    ], checked:"2026-11"},
   {id:"peacekeeping", title:"Peacekeeping", aka:["UN peacekeeping","blue helmets"], tags:["international relations","peace","united nations"],
    summary:"Missions of soldiers, police and civilians that help parties keep a ceasefire or peace deal and protect civilians, under three principles.",
    levels:{
     starter:[
      "Imagine two neighbours who have agreed to stop fighting but don’t trust each other. A respected third person standing between them, watching and reporting, can help the truce hold. That is the basic idea of [[peacekeeping]].",
      "UN peacekeepers (often called “blue helmets”) are soldiers, police and civilians lent by member states. They work under three principles: **consent** of the main parties, **impartiality**, and **no use of force except in self-defence and defence of the mandate**.",
      "The first UN mission began in 1948 in the Middle East. UN peacekeepers won the Nobel Peace Prize in 1988.",
      {key:"Peacekeepers are not there to win a war; they help the parties keep the peace they have agreed."},
      "Their blue helmets and berets make them recognisable to all sides. Regional organisations such as the African Union run peace operations too."
     ],
     builder:[
      "Peacekeeping isn’t named in the UN Charter; it grew in practice, between peaceful settlement (Chapter VI) and enforcement (Chapter VII). The Security Council creates each mission and sets its **mandate**.",
      {table:[
        ["Type","Main tasks","Example"],
        ["Traditional","Monitor ceasefires, patrol buffer zones","UN force in Cyprus, since 1964"],
        ["Multidimensional","Also elections, police, human rights, returns","Namibia 1989–1990; Cambodia 1992–1993"],
        ["Protection-focused","Protect civilians, sometimes robustly","Sierra Leone from 1999 and many later missions"]
      ]},
      "**Failures** shaped reform: the UN force in Rwanda was cut as the 1994 genocide began; the Srebrenica “safe area” fell in 1995. The **Brahimi Report** (2000) called for clear, achievable mandates and adequate resources. Serious harms by personnel, including sexual exploitation and abuse and the cholera outbreak in Haiti linked to a UN base (the UN apologised in 2016), damaged trust.",
      "**Regional peacekeeping** is common too: ECOWAS forces in Liberia from 1990 and African Union missions in Somalia from 2007, for example.",
      "**How a mission is born:** the Security Council adopts a resolution setting the mandate; member states volunteer troops and police; the General Assembly approves a separate peacekeeping budget; and the mission reports back regularly so the Council can renew, change or end it. Because the Council decides, the permanent members’ [[veto]] matters."
     ],
     pro:[
      "**Evidence.** Virginia Page Fortna (*Does Peacekeeping Work?*, 2008) found that peacekeeping substantially lowers the risk of war resuming after ceasefires. Studies by Lisa Hultman, Jacob Kathman and Megan Shannon found larger UN troop and police deployments associated with fewer civilian and battlefield deaths. Effects depend on mandate, size, quality and the parties’ consent.",
      "**Tensions.** Robust mandates and offensive tasks strain impartiality and expose peacekeepers to attack; host governments can withdraw consent; troop contributors (mostly from the Global South) bear the risks while richer states pay much of the budget. Budgets are assessed separately from the regular UN budget.",
      "**Current figures change.** The number of missions and personnel shifts as missions open, shrink and close; check peacekeeping.un.org for the latest data rather than relying on remembered numbers.",
      "Hammarskjöld’s phrase “Chapter Six and a Half” is widely attributed to him, but it captures practice rather than law: missions now often operate under Chapter VII mandates for specific tasks.",
      "**Women in peacekeeping.** Following resolution 1325 (2000), the UN has set targets for more women among peacekeepers. Supporters argue mixed teams can reach more of the local population; researchers caution against assuming women are naturally more peaceful.",
      "**Exit.** Missions are hard to end well: leaving too early risks relapse, while staying too long can breed dependence and resentment."
     ]
    },
    related:["peacebuilding","united-nations","un-security-council","war-and-conflict","responsibility-to-protect"],
    read:[{book:"eir", where:"Chapter 11 “Protecting People”"}],
    sources:[
      {t:"UN Peacekeeping: Principles of peacekeeping", url:"https://peacekeeping.un.org/en/principles-of-peacekeeping"}
    ], checked:"2026-11"},

   {id:"peacebuilding", title:"Peacemaking, peacebuilding and transitional justice", aka:["peacemaking","mediation","transitional justice","positive peace"], tags:["international relations","peace"],
    summary:"How wars are ended through negotiation, how peace is made to last, and how societies deal with past abuses.",
    levels:{
     starter:[
      "Stopping a fight is one thing; making sure it never restarts is another. The Norwegian scholar Johan Galtung (1969) called the first [[negative-peace|negative peace]] (no direct violence) and the second [[positive-peace|positive peace]] (fair institutions and relationships that remove the reasons for violence).",
      "[[peacemaking|Peacemaking]] gets the sides to an agreement, often with [[mediation|mediators]]. [[peacebuilding|Peacebuilding]] is the long work that follows: disarming fighters, rebuilding courts and police, restarting the economy, restoring trust.",
      "[[transitional-justice|Transitional justice]] is how societies deal with mass abuses: trials, truth commissions, community justice, reparations and memorials.",
      {key:"Most peace agreements are the beginning of peace, not the end of the work."},
      "Peace processes in Colombia, Mozambique and Aceh show both the hope and the difficulty of this work."
     ],
     builder:[
      "UN Secretary-General Boutros Boutros-Ghali’s *An Agenda for Peace* (1992) set out preventive diplomacy, peacemaking, peacekeeping and post-conflict peacebuilding.",
      "**Mediators** include states (Camp David, 1978), religious groups (Sant’Egidio and Mozambique, 1992), private organisations (Martti Ahtisaari’s Crisis Management Initiative and Aceh, 2005) and regional bodies (the African Union, ECOWAS). I. William Zartman’s idea of a **mutually hurting stalemate** explains when conflicts are “ripe” for talks. UN Security Council resolution 1325 (2000) calls for women’s participation in peace processes.",
      "**Peacebuilding tools** include disarmament, demobilisation and reintegration (DDR), security sector reform, elections, justice reform and economic recovery. In 2005 the UN decided to establish a Peacebuilding Commission, a Peacebuilding Fund and a support office.",
      {table:[
        ["Transitional justice tool","Example"],
        ["Trials","UN tribunals for the former Yugoslavia (1993) and Rwanda (1994); the ICC"],
        ["Truth commissions","Argentina (*Nunca Más*, 1984); South Africa’s TRC"],
        ["Community justice","Rwanda’s gacaca courts (2002–2012)"],
        ["Reparations, memory, reform","Compensation, apologies, memorials, vetting officials"]
      ]},
      "**Inclusion.** Agreements made only between armed leaders can leave out the people who must live with them. Women’s groups, as in Liberia in 2003, and wider civil society often push for broader participation."
     ],
     pro:[
      "**The liberal peace debate.** Post-Cold War peacebuilding often promoted rapid elections and market reform. Roland Paris (*At War’s End*, 2004) argued for “institutionalisation before liberalisation”; others (for example Oliver Richmond) stress hybrid and local forms of peace and the risks of externally designed templates.",
      "**Peace versus justice.** Amnesties may persuade armed actors to sign; prosecutions may deter future abuse but prolong war. Practice has moved towards excluding amnesty for [[genocide]], [[war-crimes|war crimes]] and [[crimes-against-humanity|crimes against humanity]], while allowing conditional arrangements such as South Africa’s amnesty for full disclosure or Colombia’s special jurisdiction for peace created under its 2016 agreement.",
      "**What makes peace last?** Research points to credible guarantees (often third parties), power-sharing that gives former enemies a stake, inclusion of wider society, and attention to the grievances that caused the war. Implementation matters as much as text: many agreements falter in their first years.",
      "**Case: Colombia.** Talks with the FARC opened in 2012 (Oslo, then Havana); a deal rejected in the 2 October 2016 referendum was revised and signed on 24 November 2016; the FARC handed weapons to a UN mission in 2017. Implementation has been uneven, and other armed groups remain active.",
      "Galtung’s distinction gives peacebuilding a yardstick: negative peace can be measured by the absence of fighting, but positive peace needs evidence that exclusion, inequality and distrust are actually declining."
     ]
    },
    related:["peacekeeping","war-and-conflict","international-courts","human-rights-regime"],
    read:[{book:"eir", where:"Chapter 11 “Protecting People”"}],
    sources:[
      {t:"UN Peacebuilding", url:"https://www.un.org/peacebuilding/"}
    ], checked:"2026-11"},

   {id:"collective-action-problems", title:"Collective action problems", aka:["free rider problem","tragedy of the commons","global public goods"], tags:["international relations","cooperation","economics"],
    summary:"Why groups, including states, fail to cooperate even when all would gain, and how institutions help.",
    levels:{
     starter:[
      "In a group project where everyone gets the same mark, each member is tempted to let others do the work. If everyone thinks that way, the project fails. That is a [[collective-action-problem|collective action problem]]: everyone would gain from cooperating, but each does better by holding back.",
      "Someone who enjoys a shared benefit without paying for it is a [[free-rider|free rider]]. Benefits that everyone can enjoy and no one can be shut out of, like a stable climate or the control of infectious disease, are [[global-public-good|global public goods]].",
      "The ecologist Garrett Hardin’s 1968 “[[tragedy-of-the-commons|tragedy of the commons]]” tells the story of an open pasture overgrazed because each herder gains from one more animal.",
      {key:"These problems come from the structure of a situation, not from bad people, so the fixes change the structure."}
     ],
     builder:[
      "Mancur Olson’s *The Logic of Collective Action* (1965) showed that large groups cooperate less easily than small ones, because each member’s contribution seems insignificant and free riding is hard to detect. **Selective incentives** (benefits only for contributors) help.",
      "Game theorists model many such situations as a **prisoner’s dilemma**: whatever the other side does, each side is better off defecting, so both end up worse off than if both had cooperated. When the game is **repeated**, cooperation can emerge through reciprocity.",
      "Elinor Ostrom (*Governing the Commons*, 1990; Nobel Prize in economics, 2009) showed communities managing commons successfully for centuries, with clear boundaries, locally suited rules, monitoring by users, graduated sanctions, cheap conflict resolution and recognition by outside authorities.",
      "International institutions help states in similar ways: they share information, make cheating visible, lower the cost of negotiating and link issues, as [[neoliberal-institutionalism|neoliberal institutionalists]] argue. Realists reply that concern with [[relative-gains|relative gains]] limits cooperation.",
      "**Example:** fishing nations that agree catch limits but secretly exceed them are free riding on others’ restraint. Regional fisheries bodies try to prevent this with quotas, observers on boats and catch reporting."
     ],
     pro:[
      "**Global public goods** (Kaul, Grunberg and Stern, UNDP, 1999) differ in their “aggregation technology”: some depend on the sum of efforts (emission cuts), some on the weakest link (disease surveillance: one gap lets a pathogen spread), some on the best shot (one successful vaccine). The technology shapes which institutions work.",
      "**Climate versus ozone.** The Montreal Protocol (1987; universal ratification 2009) succeeded with few producers, available substitutes, a fund for developing countries and trade restrictions on non-parties. Climate change involves every economy, long time lags, unequal historical responsibility and high costs of switching.",
      "**New commons.** The Agreement on Marine Biodiversity of Areas beyond National Jurisdiction (the High Seas Treaty) entered into force in January 2026. Space debris, antimicrobial resistance and the governance of artificial intelligence are often analysed as collective action problems too.",
      "**Critiques of Hardin.** Ostrom and others showed that many historical commons were not open-access free-for-alls but regulated by communities; Hardin’s story fits open-access resources best. Some critics also note the article’s controversial population-control arguments.",
      "**Realist doubts.** Realists add that states care about relative gains: even a deal that benefits everyone can be rejected if a rival gains more. This is one reason cooperation on security is often harder than on trade or health."
     ]
    },
    related:["climate-politics","global-health-governance","liberalism-ir","international-political-economy"],
    read:[{book:"ospol", where:"Chapter 15, section 15.1 “The Problem of Global Governance”"}],
    sources:[
      {t:"The Nobel Prize: Elinor Ostrom, facts", url:"https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/"},
      {t:"UNEP Ozone Secretariat: The Montreal Protocol", url:"https://ozone.unep.org/treaties/montreal-protocol"}
    ], checked:"2026-11"},

   {id:"climate-politics", title:"Climate politics", aka:["UNFCCC","Kyoto Protocol","Paris Agreement","climate diplomacy"], tags:["international relations","environment","cooperation"],
    summary:"How states negotiate on climate change, from the 1992 UNFCCC to the Kyoto Protocol and the Paris Agreement.",
    levels:{
     starter:[
      "Every country shares one atmosphere. Cutting greenhouse gas emissions costs each country now, while the benefits are shared by all and arrive later. That makes climate change one of the hardest collective action problems in world politics.",
      "The key treaties are the [[unfccc|UN Framework Convention on Climate Change]] (1992), the [[kyoto-protocol|Kyoto Protocol]] (1997) and the [[paris-agreement|Paris Agreement]] (2015). Countries meet every year at a COP (Conference of the Parties). Scientific assessments come from the Intergovernmental Panel on Climate Change (IPCC), set up in 1988.",
      "Paris aims to keep warming “well below 2°C” and to pursue efforts to limit it to 1.5°C, with every country setting its own plan.",
      {key:"Climate diplomacy keeps searching for a design that gets everyone in and keeps them ambitious."},
      "The yearly meetings are known by number: COP21, held in Paris in 2015, adopted the Paris Agreement."
     ],
     builder:[
      {table:[
        ["Treaty","Design","In force"],
        ["UNFCCC (1992)","Framework: avoid dangerous interference with the climate; common but differentiated responsibilities","1994"],
        ["Kyoto Protocol (1997)","Binding targets for developed countries only","2005"],
        ["Paris Agreement (2015)","Every party sets a nationally determined contribution (NDC), updated every five years; transparency; global stocktake","2016"]
      ]},
      "Kyoto struggled because major emitters were outside binding targets: the United States signed but never [[ratification|ratified]], and Canada announced its withdrawal in 2011. Paris traded binding targets for universal participation, relying on transparency and peer pressure to ratchet ambition. The first global stocktake concluded at COP28 in Dubai in 2023.",
      "**Equity is central.** Small island states (the Alliance of Small Island States, formed 1990) pushed for 1.5°C; developing countries stress historical responsibility and finance. States agreed at COP27 (2022) to set up a fund for loss and damage, and at COP29 (2024) a new goal of at least 300 billion US dollars a year in climate finance for developing countries by 2035.",
      "**Participation changes.** The United States left Paris in 2020, rejoined in 2021, and left again with effect from 27 January 2026; in January 2026 it also announced withdrawal from the UNFCCC.",
      "**The ambition gap.** Bottom-up pledges bring in every country, including big emerging economies, but so far the sum of pledges has fallen short of what the 1.5°C and 2°C goals require, which is why each new round of NDCs is meant to be more ambitious."
     ],
     pro:[
      "**Law.** On 23 July 2025 the International Court of Justice delivered its advisory opinion on the *Obligations of States in respect of Climate Change*, requested by the UN General Assembly in 2023 after a campaign launched by Pacific law students and led by Vanuatu. [[advisory-opinion|Advisory opinions]] are not binding judgments, but they state the Court’s view of existing law and are widely cited.",
      "**Lenses.** Realists stress relative costs and the absence of enforcement; liberals stress institutions, transparency and linkage; constructivists track norms such as the 1.5°C target; critical and postcolonial scholars frame climate justice and unequal responsibility. Green theory (see the E-IR theory book) questions whether a state-centred system can protect the planet at all.",
      "**Beyond states.** Cities, companies, investors and NGOs make pledges and pressure governments; litigation in national courts has grown. Critics warn of “greenwashing” when pledges lack credible plans.",
      "**Status checks.** Membership, NDC updates and finance figures change often. Verify on unfccc.int and give the date.",
      "**Regimes can help each other.** The ozone treaty’s Kigali Amendment (2016) phases down HFCs, chemicals that don’t harm the ozone layer but are powerful greenhouse gases, so the Montreal Protocol now also contributes to climate goals."
     ]
    },
    related:["collective-action-problems","global-health-governance","international-law","development-ir"],
    read:[{book:"eir", where:"Chapter 15 “The Environment”"},{book:"eirt", where:"Chapter 11 “Green Theory”"}],
    sources:[
      {t:"UNFCCC: The Paris Agreement", url:"https://unfccc.int/process-and-meetings/the-paris-agreement"},
      {t:"ICJ: Obligations of States in respect of Climate Change", url:"https://www.icj-cij.org/case/187"},
      {t:"Harvard Environmental and Energy Law Program: Paris Climate Agreement tracker", url:"https://eelp.law.harvard.edu/tracker/paris-climate-agreement"}
    ], checked:"2026-11"},

   {id:"global-health-governance", title:"Global health governance", aka:["WHO","International Health Regulations","pandemic preparedness"], tags:["international relations","health","cooperation"],
    summary:"How states cooperate against cross-border disease through the WHO and the International Health Regulations, and what COVID-19 revealed.",
    levels:{
     starter:[
      "Germs don’t need passports. A virus in one city can reach every continent within weeks, so countries have strong reasons to cooperate on health, and strong temptations not to.",
      "The World Health Organization (WHO), founded in 1948, coordinates international health work. Its greatest success, the eradication of smallpox, was declared in 1980.",
      "The [[international-health-regulations|International Health Regulations]] (IHR) are binding rules: countries must detect and report health events that could spread abroad. The WHO can declare a **public health emergency of international concern**, as it did for COVID-19 on 30 January 2020.",
      {key:"Disease control is a weakest-link problem: one gap in surveillance can let a pathogen spread everywhere."},
      "The WHO is a UN specialised agency; its member states meet each year at the World Health Assembly in Geneva."
     ],
     builder:[
      "International health cooperation began with the International Sanitary Conference of 1851 in Paris, prompted by cholera. The IHR were revised in 2005 after the SARS outbreak; amendments adopted in 2024 entered into force on 19 September 2025, adding a higher “pandemic emergency” alert level.",
      "**COVID-19** showed cooperation and its limits. Genome data were shared quickly and vaccines developed in record time; COVAX tried to share vaccines fairly. But export bans and advance purchases by richer countries (“vaccine nationalism”) left poorer countries waiting. The WHO ended the emergency on 5 May 2023.",
      "In May 2025 the World Health Assembly adopted a **Pandemic Agreement**. It can open for signature only after an annex on pathogen access and benefit sharing is agreed; in 2026 those negotiations were extended. Check the WHO’s website for the current status.",
      "The United States completed its withdrawal from the WHO in January 2026.",
      "**Lenses:** realists expect states to put their own populations first in a crisis; liberals stress the value of shared rules and data; critical scholars ask why diseases that mainly affect poorer countries attract less research funding."
     ],
     pro:[
      "**Funding.** Most of the WHO’s money comes from voluntary contributions, much of it earmarked by donors, rather than from assessed membership dues. This limits the organisation’s ability to set its own priorities and is a long-standing reform issue.",
      "**Security framing.** Health has been securitised: UN Security Council resolution 1308 (2000) on HIV/AIDS was the Council’s first on a health issue. Securitisation can raise funds and attention but can also favour border controls and surveillance over long-term health systems.",
      "**Many actors.** Global health also involves Gavi, the Vaccine Alliance; the Global Fund; foundations; pharmaceutical companies; and regional bodies such as Africa CDC. Critics debate the influence of private donors and the gap between research capacity in rich countries and disease burdens elsewhere.",
      "**Compliance.** The IHR rely on states reporting honestly and quickly; the WHO has no power to enter a country or enforce compliance, which is a classic limit of international institutions.",
      "**One Health.** Many new diseases jump from animals to people, so agencies increasingly link human, animal and environmental health, an approach called One Health. Smallpox remains the only human disease to have been eradicated."
     ]
    },
    related:["collective-action-problems","human-security","united-nations","climate-politics"],
    sources:[
      {t:"WHO: International Health Regulations", url:"https://www.who.int/health-topics/international-health-regulations"},
      {t:"WHO: Member States agree to extend negotiations on Pathogen Access and Benefit Sharing annex (1 May 2026)", url:"https://www.who.int/news/item/01-05-2026-who-member-states-agree-to-extend-negotiations-on-pathogen-access-and-benefit-sharing-annex"}
    ], checked:"2026-11"},

   {id:"reading-world-news", title:"Reading world news like an IR student", aka:["news literacy","primary documents","think tanks"], tags:["international relations","media","research skills"],
    summary:"Six questions for any story about world affairs: lens, level, voices, words, numbers and the primary document.",
    levels:{
     starter:[
      "Every news story about the world is told from somewhere. Asking a few questions turns you from a passive reader into an analyst.",
      {ol:[
        "**Which lens?** Power and threats (realist), institutions and trade (liberal), identity and norms (constructivist), inequality and interests (critical).",
        "**Which level?** One leader, one country’s politics, or the system?",
        "**Whose voices?** Who is quoted, and who is talked about but never heard?",
        "**Which words?** “Regime” or “government”, “militants” or “fighters”.",
        "**Where are the numbers from?** Source and year.",
        "**What does the primary document say?**"
      ]},
      {key:"You don’t need to know everything about a country to notice what a story is assuming."},
      "You can practise on any story in a few minutes: read it once for the content, then again with the six questions."
     ],
     builder:[
      "**[[primary-source|Primary documents]].** UN Security Council resolutions have symbols such as `S/RES/1325 (2000)`; General Assembly resolutions look like `A/RES/66/290`. Read them free in the UN Digital Library (digitallibrary.un.org); treaties are at treaties.un.org. The UN’s meetings coverage (press.un.org) summarises debates quickly, but the UN notes that these summaries are not official records. Look at the **operative paragraphs**, which begin with verbs like “Decides”, “Calls upon” or “Urges”: “decides” in a Security Council resolution signals a decision, while General Assembly resolutions are mostly recommendations.",
      "**Think tanks.** A [[think-tank|think tank]] researches policy and tries to influence it. Funding comes from governments, foundations, companies and individuals; some publish donor lists. Read think tank work like any source with a point of view: who wrote it, who paid, what is the argument, what evidence.",
      "**Compare outlets.** Read the same event in outlets from different countries and notice differences in lens, voices and words. Use [[lateral-reading|lateral reading]] to check unfamiliar sources and {{fact-checkers|fact-checkers}} for viral claims.",
      {tip:"Agenda-setting matters too: which conflicts get covered at all? Some wars with high death tolls receive little attention abroad."},
      "**Who is speaking for whom?** Governments, armed groups, NGOs and UN agencies all have interests. Report what they say as claims (“the ministry said…”) rather than as facts."
     ],
     pro:[
      "**Framing and agenda-setting.** Media scholars distinguish [[agenda-setting|agenda-setting]] (what we think about) from [[framing]] (how we think about it). Research on the “CNN effect” asked whether television images drive foreign policy; findings suggest effects are real but limited and depend on policy uncertainty.",
      "**Data literacy.** For conflict figures, check dataset, definitions, counts versus deaths, direct versus indirect deaths, rates versus totals and the release date. For treaties, separate signature from ratification and entry into force, and check withdrawals.",
      "**Language and labels.** Words for territories, groups and acts can signal a political position. Neutral practice attributes contested labels (“which the government calls…”), gives dates (“as of November 2026”) and names sources.",
      "**Global perspectives.** Wire services and large outlets set much of the international agenda. Regional and national outlets, journalists based in the country, and the statements of affected communities widen the view; translation tools make many accessible, with care over accuracy.",
      "**Your own lens.** Everyone reads from somewhere, shaped by country, language and politics. [[confirmation-bias|Confirmation bias]] makes stories that fit our views feel more convincing; regularly reading one well-sourced outlet you usually disagree with is a simple corrective."
     ]
    },
    related:["evaluating-sources","news-opinion-sponsored","lateral-reading","war-and-conflict","ir-theory"],
    sources:[
      {t:"United Nations Digital Library", url:"https://digitallibrary.un.org/"},
      {t:"UN Meetings Coverage and Press Releases", url:"https://press.un.org/en"}
    ], checked:"2026-11"},

   {id:"joseph-nye", title:"Joseph S. Nye Jr.", aka:["Joseph Nye","Nye"], tags:["international relations","thinker","power"],
    summary:"The US political scientist (1937–2025) who coined “soft power” and, with Robert Keohane, developed complex interdependence.",
    levels:{
     starter:[
      "Joseph S. Nye Jr. (1937–2025) was a political scientist at Harvard University who also served in US governments. He is best known for the idea of [[soft-power|soft power]]: the ability to get what you want through **attraction** rather than through force or payment.",
      "Nye contrasted it with [[hard-power|hard power]], which works through coercion (military threats, sanctions) and inducement (aid, trade deals). A country’s culture, its political values and foreign policies that others see as legitimate can all attract.",
      "He first set out the term in print in 1990. Later he argued that the best strategies combine both kinds, which he called **smart power**.",
      {key:"Nye’s question: can you make others want what you want?"}
     ],
     builder:[
      "**Key works.** With Robert Keohane, *Power and Interdependence* (1977), which developed [[complex-interdependence|complex interdependence]] and laid groundwork for liberal institutionalism (see {{liberalism-ir|liberalism in IR}}). *Bound to Lead* (1990), which argued against claims of US decline and introduced soft power; *Soft Power: The Means to Success in World Politics* (2004); *The Future of Power* (2011).",
      "**Government service.** He held national security posts in the Carter and Clinton administrations, including chairing the National Intelligence Council and serving as an Assistant Secretary of Defense, and was dean of Harvard’s Kennedy School of Government.",
      "**How scholars use soft power.** Researchers and governments use the term for cultural diplomacy, international broadcasting, scholarships and educational exchanges, development aid and the reputation of a country’s institutions. Many governments now have strategies to build it.",
      "**Complex interdependence**, developed with Keohane, described a world of many channels between societies, no fixed hierarchy of issues and a smaller role for military force among interdependent states, a picture that challenged realism’s focus on war. Nye also wrote a widely used introductory textbook on international conflict."
     ],
     pro:[
      "**Critiques.** Soft power is hard to measure and to separate from hard power (aid can be both inducement and attraction); it depends on the audience; and much of it is generated by societies, not governments, which limits state control. Some realists see it as secondary to material power; some critical scholars see it as a polished form of cultural [[hegemony]] (compare [[cultural-imperialism|cultural imperialism]]).",
      "**Related ideas.** “Sharp power” was coined by researchers in 2017 for information operations that manipulate rather than attract; Nye distinguished it from soft power. Constructivists link soft power to identity and legitimacy.",
      "**Legacy.** Nye bridged scholarship and policy. Complex interdependence reshaped liberal IR in the 1970s, and soft power became one of the few academic concepts widely used by governments worldwide.",
      {tip:"When a news story praises a country’s “soft power”, ask: attractive to whom, and how would we know?"},
      "**Soft power and peacemaking.** Soft power helps explain why some small states, such as Norway, Switzerland or Qatar, can host or mediate negotiations: a reputation for impartiality or usefulness attracts parties that would resist a stronger state’s pressure."
     ]
    },
    related:["liberalism-ir","security-studies","peacebuilding"],
    sources:[
      {t:"Harvard Weatherhead Center: In Memoriam, Joseph S. Nye (1937–2025)", url:"https://www.wcfia.harvard.edu/news/2025/05/memoriam-joseph-s-nye-1937-2025"}
    ], checked:"2026-11"}
  ],
  terms:[
   {id:"war", term:"War", def:"Organised, political and sustained armed violence between groups, at least one usually a state. UCDP counts a war when a conflict causes at least 1,000 battle-related deaths in one calendar year.", codex:"war-and-conflict"},
   {id:"interstate-war", term:"Interstate war", def:"A war fought between the governments of two or more states, such as the Iran–Iraq War of 1980–1988.", codex:"war-and-conflict"},
   {id:"civil-war", term:"Civil war", def:"Armed conflict inside a country between its government and one or more organised armed groups; UCDP calls it intrastate conflict. Most conflicts since 1946 have been of this kind.", codex:"war-and-conflict"},
   {id:"internationalized-conflict", term:"Internationalized intrastate conflict", def:"A conflict inside a country in which other states send troops that actively take part in the fighting on one side.", codex:"war-and-conflict"},
   {id:"conflict-data", term:"Conflict data", def:"Systematic records of armed conflicts and deaths built with stated definitions and thresholds, such as those of the Uppsala Conflict Data Program (UCDP) and Correlates of War.", codex:"war-and-conflict"},
   {id:"international-humanitarian-law", term:"International humanitarian law", def:"The law of armed conflict (jus in bello): rules, mainly in the Hague and Geneva Conventions, that limit how wars are fought and protect civilians and others not fighting. It binds every side.", codex:"war-and-conflict"},
   {id:"deterrence", term:"Deterrence", def:"Preventing an action, such as an attack, by threatening costs the other side won’t accept. It needs capability, credibility and communication.", codex:"security-studies"},
   {id:"mutually-assured-destruction", term:"Mutually assured destruction (MAD)", def:"A situation in which two nuclear-armed rivals can each strike back after any attack, so a nuclear war would destroy both; this is meant to deter either from starting one.", codex:"security-studies"},
   {id:"arms-race", term:"Arms race", def:"A spiral in which rival states keep building up their weapons in response to each other, often driven by the security dilemma.", codex:"security-studies"},
   {id:"security-studies", term:"Security studies", def:"The branch of IR that asks security for whom, from what and by what means, from military threats to states to wider threats to people.", codex:"security-studies"},
   {id:"cyber-conflict", term:"Cyber conflict", def:"Competition and attacks between states or other groups through computer networks, such as spying, sabotage and disruption. It is hard to deter because attacks are hard to attribute and often fall below the threshold of war.", codex:"security-studies"},
   {id:"nuclear-proliferation", term:"Nuclear proliferation", def:"The spread of nuclear weapons, or the ability to make them, to more states or to armed groups.", codex:"nuclear-weapons"},
   {id:"non-proliferation-treaty", term:"Non-Proliferation Treaty (NPT)", def:"The 1968 treaty, in force since 1970, in which states without nuclear weapons agree not to acquire them, all parties commit to disarmament talks, and all may use nuclear energy peacefully. It has 191 states parties.", codex:"nuclear-weapons"},
   {id:"terrorism", term:"Terrorism", def:"Usually defined as violence or its threat, for a political, religious or ideological aim, deliberately aimed at civilians to spread fear among a wider audience. There is no single agreed definition in international law.", codex:"terrorism-ir"},
   {id:"human-security", term:"Human security", def:"An approach that puts people’s safety at the centre of security: freedom from fear and freedom from want. It was launched by the UNDP’s 1994 Human Development Report.", codex:"human-security"},
   {id:"securitization", term:"Securitisation", def:"The process, described by the Copenhagen School, by which an actor presents an issue as an existential threat and an audience accepts that extraordinary measures are justified.", codex:"security-studies"},
   {id:"negative-peace", term:"Negative peace", def:"Johan Galtung’s term for the absence of direct violence: the fighting has stopped, whether or not its causes have been addressed.", codex:"peacebuilding"},
   {id:"positive-peace", term:"Positive peace", def:"Johan Galtung’s term for a peace built on fair institutions and relationships that remove the causes of violence, including structural violence such as exclusion and poverty.", codex:"peacebuilding"},
   {id:"peacemaking", term:"Peacemaking", def:"Efforts to bring the sides in a conflict to an agreement to stop fighting, mainly through negotiation and mediation.", codex:"peacebuilding"},
   {id:"mediation", term:"Mediation", def:"Negotiation helped by a third party (a state, organisation, religious group or individual) who has no power to impose a decision.", codex:"peacebuilding"},
   {id:"peacekeeping", term:"Peacekeeping", def:"Missions of soldiers, police and civilians, usually authorised by the UN Security Council, that help parties keep a ceasefire or peace deal and protect civilians. They rest on consent, impartiality and limited use of force.", codex:"peacekeeping"},
   {id:"peacebuilding", term:"Peacebuilding", def:"Long-term work to make peace last by addressing the causes of conflict: disarming fighters, reforming police and courts, restarting the economy and rebuilding trust.", codex:"peacebuilding"},
   {id:"transitional-justice", term:"Transitional justice", def:"The ways societies deal with mass abuses after war or dictatorship, such as trials, truth commissions, community justice, reparations and memorials.", codex:"peacebuilding"},
   {id:"hard-power", term:"Hard power", def:"Getting others to do what you want through coercion or payment: military force, threats, sanctions, aid or trade deals (“sticks and carrots”).", codex:"joseph-nye"},
   {id:"soft-power", term:"Soft power", def:"Joseph Nye’s term for getting what you want through attraction rather than coercion or payment, drawing on a country’s culture, political values and foreign policies.", codex:"joseph-nye"},
   {id:"collective-action-problem", term:"Collective action problem", def:"A situation in which everyone would gain from cooperating, but each individual or state does better by holding back while others contribute.", codex:"collective-action-problems"},
   {id:"free-rider", term:"Free rider", def:"Someone who enjoys a shared benefit without paying their share of the cost.", codex:"collective-action-problems"},
   {id:"tragedy-of-the-commons", term:"Tragedy of the commons", def:"Garrett Hardin’s 1968 idea that a resource open to all, like a shared pasture, tends to be overused because each user gains from taking more while the costs are shared.", codex:"collective-action-problems"},
   {id:"global-public-good", term:"Global public good", def:"A benefit that everyone in the world can enjoy and no one can be shut out of, such as a stable climate, disease control or peace.", codex:"collective-action-problems"},
   {id:"unfccc", term:"UNFCCC", def:"The United Nations Framework Convention on Climate Change (1992, in force 1994): the framework treaty for climate negotiations, whose parties meet yearly at a COP.", codex:"climate-politics"},
   {id:"kyoto-protocol", term:"Kyoto Protocol", def:"The 1997 climate treaty under the UNFCCC, in force from 2005, that set binding emission targets for developed countries only.", codex:"climate-politics"},
   {id:"paris-agreement", term:"Paris Agreement", def:"The 2015 climate treaty, in force since 2016, that aims to hold warming well below 2°C and pursue 1.5°C, with every party setting its own target (NDC) and updating it every five years.", codex:"climate-politics"},
   {id:"nationally-determined-contribution", term:"Nationally determined contribution (NDC)", def:"A country’s own climate plan and emissions target under the Paris Agreement, submitted every five years and meant to become more ambitious each time.", codex:"climate-politics"},
   {id:"international-health-regulations", term:"International Health Regulations (IHR)", def:"Binding international rules, administered through the WHO, that require countries to detect and report health events that could spread internationally.", codex:"global-health-governance"},
   {id:"think-tank", term:"Think tank", def:"An organisation that researches public policy and tries to influence it. Funding comes from governments, foundations, companies or individuals, so it is worth checking who pays.", codex:"reading-world-news"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u8-q01", lesson:"e2u8-l1", level:1, q:"In UCDP’s definitions, what is the minimum for a state-based armed conflict to be recorded in a given year?", options:[
     {t:"At least 25 battle-related deaths in one calendar year, with a government on at least one side", ok:true, why:"That is UCDP’s threshold for a state-based armed conflict."},
     {t:"At least 1,000 battle-related deaths in one calendar year", why:"1,000 is the threshold for a war, not for an armed conflict."},
     {t:"A formal declaration of war by a government", why:"Formal declarations are rare today; UCDP counts deaths and parties, not declarations."},
     {t:"Fighting between two armed groups, neither of them a government", why:"That is non-state conflict, recorded separately; state-based conflict needs a government on one side."}
   ]},
   {id:"e2u8-q02", lesson:"e2u8-l1", level:2, q:"A government fights a rebel movement at home. A neighbouring state then sends troops who fight alongside the rebels. How does UCDP classify the conflict?", options:[
     {t:"Internationalized intrastate conflict", ok:true, why:"Foreign troops actively fighting on one side, whichever side, make an intrastate conflict internationalized."},
     {t:"Interstate conflict", why:"Interstate means governments fighting each other directly as the main parties. Here the core dispute is between a government and rebels."},
     {t:"Extrasystemic conflict", why:"Extrasystemic means a state fighting a group outside its own territory, mostly colonial wars."},
     {t:"Non-state conflict", why:"Non-state means neither side is a government; here the government is a main party."}
   ]},
   {id:"e2u8-q03", lesson:"e2u8-l1", level:1, q:"Which kind of armed conflict has been the most common in UCDP’s records since 1946?", options:[
     {t:"Conflicts inside countries between a government and armed groups", ok:true, why:"Intrastate conflicts, many internationalized, make up most conflicts since 1946."},
     {t:"Wars between states", why:"Interstate wars became rare after 1945, even though 2025 saw an unusually high number."},
     {t:"Colonial (extrasystemic) wars", why:"These were important until decolonisation but have been rare for decades."},
     {t:"Wars between great powers", why:"No great powers have fought each other directly since 1945."}
   ]},
   {id:"e2u8-q04", lesson:"e2u8-l1", level:2, q:"Which statement about UCDP’s figures for 2025 (released June 2026) is accurate?", options:[
     {t:"It recorded 65 state-based conflicts, the most since 1946, of which 13 were wars", ok:true, why:"Those are UCDP’s reported figures for 2025."},
     {t:"It recorded 65 wars, each with at least 1,000 deaths", why:"Only 13 of the 65 conflicts reached the 1,000-death level of a war."},
     {t:"It found 2025 was the deadliest year in human history", why:"UCDP called it the second-deadliest year since 1994; the world wars were far deadlier."},
     {t:"It found there were no wars between states", why:"UCDP recorded 8 interstate conflicts in 2025, the highest since 1946."}
   ]},
   {id:"e2u8-q05", lesson:"e2u8-l1", level:3, q:"Amara reads: “Conflict deaths in 2025 were lower than in some years of the 1980s, so the world is safer now.” What is the most important question to ask first?", options:[
     {t:"Are these absolute numbers or rates per person, and which dataset and definitions are used?", ok:true, why:"Population has grown a lot and datasets differ, so comparing years needs the same definitions and, ideally, rates."},
     {t:"Which side was right in the 1980s wars?", why:"Judging sides doesn’t help check a statistical comparison."},
     {t:"Whether the writer likes the United Nations", why:"The writer’s opinions don’t tell you whether the numbers are comparable."},
     {t:"Whether any wars have happened since 2000", why:"Obviously they have; that doesn’t test the claim about comparing death levels."}
   ]},
   {id:"e2u8-q06", lesson:"e2u8-l1", level:1, q:"What does UCDP’s count of battle-related deaths leave out?", options:[
     {t:"Deaths caused indirectly by war, such as from hunger or disease", ok:true, why:"UCDP counts deaths from violence itself; indirect deaths are much harder to measure and are not included."},
     {t:"Civilians killed in crossfire during battles", why:"Civilians caught in the fighting are included in battle-related deaths."},
     {t:"Soldiers killed in fighting", why:"Soldiers killed in battle are the core of the count."},
     {t:"Deaths in internationalized conflicts", why:"Internationalized conflicts are state-based and their battle deaths are counted."}
   ]},
   {id:"e2u8-q07", lesson:"e2u8-l1", level:2, q:"Which pair of works represents the two sides of the debate about whether war is declining?", options:[
     {t:"Pinker’s *The Better Angels of Our Nature* (2011) and Braumoeller’s *Only the Dead* (2019)", ok:true, why:"Pinker argued for a long-run decline; Braumoeller found no clear decline in how often wars start."},
     {t:"Waltz’s *Man, the State, and War* (1959) and Morgenthau’s *Politics Among Nations* (1948)", why:"Both are realist classics on the causes of war, not the two sides of the decline debate."},
     {t:"The UN Charter and the Geneva Conventions", why:"These are legal texts, not research on trends in war."},
     {t:"Kaldor’s *New and Old Wars* and Galtung’s 1969 article on peace", why:"These are about kinds of war and kinds of peace, not mainly the decline debate."}
   ]},
   {id:"e2u8-q08", lesson:"e2u8-l1", level:2, q:"In international humanitarian law, what does the principle of distinction require?", options:[
     {t:"Attacking only combatants and military targets, never civilians as such", ok:true, why:"Distinction separates those who may be targeted from those who are protected."},
     {t:"Declaring war before fighting", why:"Declarations aren’t what distinction is about; it concerns who and what may be attacked."},
     {t:"Only the side that was attacked first must follow the rules", why:"The law of armed conflict binds every side, whoever started the war."},
     {t:"Using the same weapons as the enemy", why:"Distinction doesn’t require matching weapons; it requires telling combatants from civilians."}
   ]},
   {id:"e2u8-q09", lesson:"e2u8-l1", level:3, q:"Kenji’s report says: “There were more armed conflicts in 2025 than in any year since 1946, so 2025 was also the year with the most deaths.” What is wrong with this reasoning?", options:[
     {t:"A record count of conflicts doesn’t mean record deaths: many conflicts can be small", ok:true, why:"Counts and deaths are different measures; UCDP called 2025 the second-deadliest year since 1994, not the deadliest."},
     {t:"Nothing: more conflicts always means more deaths", why:"Many conflicts pass only the 25-death threshold, so the count can rise without deaths reaching a record."},
     {t:"UCDP doesn’t publish any data on deaths", why:"UCDP publishes best estimates of deaths, with low and high figures."},
     {t:"Conflicts are only counted if they are wars", why:"UCDP counts armed conflicts from 25 deaths; wars are the subset with 1,000 or more."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u8-q10", lesson:"e2u8-l2", level:1, q:"What is the difference between the immediate and the underlying causes of a war?", options:[
     {t:"The immediate cause is the spark that sets it off; underlying causes are the conditions that made the spark dangerous", ok:true, why:"Like a cigarette in a dry forest: the spark and the fuel."},
     {t:"Immediate causes are economic; underlying causes are political", why:"Either kind of cause can be economic, political or something else; the difference is about timing and depth."},
     {t:"Immediate causes matter; underlying causes are just background", why:"Without the underlying causes, the spark would usually not have started a war."},
     {t:"They are two names for the same thing", why:"Historians distinguish them carefully, as in 1914."}
   ]},
   {id:"e2u8-q11", lesson:"e2u8-l2", level:2, q:"“The war happened because a rising power’s growth frightened the established power.” At which level of analysis is this explanation?", options:[
     {t:"The international system", ok:true, why:"A shift in the distribution of power between states is a system-level (third image) explanation."},
     {t:"The individual", why:"It isn’t about any one leader’s personality or beliefs."},
     {t:"The state", why:"It isn’t about how either country is governed inside."},
     {t:"No level: it is an immediate cause", why:"A long-term power shift is an underlying cause, at the system level."}
   ]},
   {id:"e2u8-q12", lesson:"e2u8-l2", level:1, q:"Who argued, in a 1995 article, that because war is costly there is almost always a deal both sides prefer, and asked why wars happen anyway?", options:[
     {t:"James Fearon", ok:true, why:"His “Rationalist Explanations for War” set out the bargaining puzzle."},
     {t:"Thucydides", why:"Thucydides explained one ancient war by power and fear; he didn’t write the bargaining model."},
     {t:"Johan Galtung", why:"Galtung wrote about negative and positive peace."},
     {t:"Mancur Olson", why:"Olson wrote about collective action problems in groups."}
   ]},
   {id:"e2u8-q13", lesson:"e2u8-l2", level:3, q:"A declining power knows its rival will be much stronger in ten years and fears it will then make harsh demands. It attacks now, although a deal is on the table. Which bargaining problem does this illustrate?", options:[
     {t:"A commitment problem: the rising power can’t credibly promise to stay moderate once it is stronger", ok:true, why:"Today’s deal can’t bind tomorrow’s stronger rival, so fighting now can look better. This is the logic of preventive war."},
     {t:"An indivisible issue", why:"Nothing here is said to be impossible to divide; the problem is trusting future behaviour."},
     {t:"Groupthink", why:"Groupthink is about a small group silencing doubts. The scenario is about the logic of shifting power."},
     {t:"Diversionary war", why:"There is no domestic crisis being distracted from."}
   ]},
   {id:"e2u8-q14", lesson:"e2u8-l2", level:2, q:"What did Fearon and Laitin (2003) find about civil war?", options:[
     {t:"Conditions favouring insurgency, such as poor, weak states and rough terrain, predict civil war better than ethnic diversity alone", ok:true, why:"Their study stressed state weakness and opportunity for insurgency."},
     {t:"Ethnic diversity on its own is the strongest predictor of civil war", why:"That is the view their findings challenged."},
     {t:"Civil wars only happen in democracies", why:"Their work doesn’t say this, and civil wars occur under many kinds of government."},
     {t:"Natural resources have no link to civil war", why:"Research, including Collier and Hoeffler’s, links some resources to conflict financing."}
   ]},
   {id:"e2u8-q15", lesson:"e2u8-l2", level:1, q:"Which alliance bloc did France, Russia and Britain form before 1914?", options:[
     {t:"The Triple Entente", ok:true, why:"France, Russia and Britain made up the Triple Entente."},
     {t:"The Triple Alliance", why:"The Triple Alliance was Germany, Austria-Hungary and Italy."},
     {t:"NATO", why:"NATO was founded in 1949, long after the First World War."},
     {t:"The Concert of Europe", why:"The Concert of Europe was the 19th-century system of great-power consultation after 1815."}
   ]},
   {id:"e2u8-q16", lesson:"e2u8-l2", level:3, q:"Lucía writes: “Ancient ethnic hatreds explain why this civil war started.” Based on research, what is the best response?", options:[
     {t:"Research finds ethnic difference alone predicts civil war poorly; look for political causes such as exclusion, fear and leaders mobilising identity", ok:true, why:"Most researchers reject “ancient hatreds” in favour of political mechanisms."},
     {t:"She is right; ethnic diversity is the main cause of civil wars everywhere", why:"Studies such as Fearon and Laitin’s found ethnic diversity alone a weak predictor."},
     {t:"Ethnicity never has anything to do with civil wars", why:"That overcorrects: political exclusion of ethnic groups does raise the risk (Cederman, Gleditsch and Buhaug)."},
     {t:"Only economic greed matters, never identity", why:"Grievance, identity and opportunity can combine; no single factor explains everything."}
   ]},
   {id:"e2u8-q17", lesson:"e2u8-l2", level:2, q:"Robert Jervis’s *Perception and Misperception in International Politics* (1976) mainly explains war at which level?", options:[
     {t:"The individual level", ok:true, why:"It focuses on how leaders perceive and misjudge rivals."},
     {t:"The state level", why:"Jervis’s focus is on decision-makers’ minds, not the type of government."},
     {t:"The system level", why:"Misperception is about individuals, not the distribution of power."},
     {t:"It isn’t about the causes of war", why:"Misperception is one of the best-known individual-level explanations of war."}
   ]},
   {id:"e2u8-q18", lesson:"e2u8-l2", level:3, q:"Two governments know war would cost both heavily, but each secretly believes the other is bluffing about its strength, and talks break down. Which explanation from the bargaining model fits best?", options:[
     {t:"Private information combined with incentives to bluff", ok:true, why:"Each knows its own strength better and has reasons to exaggerate, so they can’t agree on where the deal lies."},
     {t:"The tragedy of the commons", why:"That is about overusing a shared resource, not about bargaining failure between two rivals."},
     {t:"Securitisation", why:"Securitisation is about framing issues as threats to justify emergency measures."},
     {t:"Positive peace", why:"Positive peace is the presence of fair institutions; it doesn’t explain why talks broke down."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u8-q19", lesson:"e2u8-l3", level:1, q:"Which three elements does deterrence need?", options:[
     {t:"Capability, credibility and communication", ok:true, why:"The means to carry out the threat, the other side believing you would, and their knowing about it."},
     {t:"Consent, impartiality and limited force", why:"Those are the principles of UN peacekeeping."},
     {t:"Boundaries, monitoring and sanctions", why:"Those are among Ostrom’s features for managing commons."},
     {t:"Signature, ratification and entry into force", why:"Those are stages of a treaty’s life."}
   ]},
   {id:"e2u8-q20", lesson:"e2u8-l3", level:2, q:"Under the NPT, which states are recognised as nuclear-weapon states?", options:[
     {t:"Those that had exploded a nuclear device before 1 January 1967: the US, Russia (as the Soviet Union), the UK, France and China", ok:true, why:"That cut-off date defines the five nuclear-weapon states in the treaty."},
     {t:"All nine states that have nuclear weapons today", why:"India, Pakistan, Israel and North Korea are not recognised as nuclear-weapon states under the NPT."},
     {t:"The permanent members plus India", why:"India never joined the NPT and is not recognised as a nuclear-weapon state under it."},
     {t:"Any state that announces it has nuclear weapons", why:"Recognition depends on the treaty’s 1967 cut-off, not on announcements."}
   ]},
   {id:"e2u8-q21", lesson:"e2u8-l3", level:1, q:"Which report launched the idea of human security in 1994?", options:[
     {t:"The UNDP’s *Human Development Report 1994*", ok:true, why:"Its subtitle was “New Dimensions of Human Security”."},
     {t:"The Brahimi Report", why:"The Brahimi Report (2000) was about UN peacekeeping."},
     {t:"*An Agenda for Peace*", why:"That 1992 report set out peacemaking, peacekeeping and peacebuilding."},
     {t:"The SIPRI Yearbook", why:"SIPRI’s yearbook covers armaments and disarmament data."}
   ]},
   {id:"e2u8-q22", lesson:"e2u8-l3", level:3, q:"A minister declares that a new strain of disease “threatens our nation’s survival” and asks parliament for emergency powers to close borders without debate. Parliament agrees. In Copenhagen School terms, what has happened?", options:[
     {t:"A successful securitisation: an actor framed an existential threat and the audience accepted extraordinary measures", ok:true, why:"Actor, referent object, speech act, audience acceptance and extraordinary measures are all present."},
     {t:"Desecuritisation, because health is not a military issue", why:"Desecuritisation means moving an issue back to normal politics; this moved it out of normal politics."},
     {t:"Only a securitising move, because health can never be a security issue", why:"Any issue can be securitised; the audience accepted, so the move succeeded."},
     {t:"Deterrence, because the minister threatened the disease", why:"Deterrence is about threatening an actor’s choices; a disease can’t be deterred."}
   ]},
   {id:"e2u8-q23", lesson:"e2u8-l3", level:2, q:"Why is there still no agreed international definition of terrorism?", options:[
     {t:"States disagree on whether struggles against foreign occupation are excluded and whether state forces can commit terrorism", ok:true, why:"These two sticking points have blocked the comprehensive convention."},
     {t:"Because no country has ever experienced terrorism", why:"Many countries have; the problem is political disagreement about the definition."},
     {t:"Because the UN has never tried", why:"A UN committee has worked on a draft comprehensive convention since 2000."},
     {t:"Because terrorism is already fully defined in the UN Charter", why:"The UN Charter does not define terrorism."}
   ]},
   {id:"e2u8-q24", lesson:"e2u8-l3", level:2, q:"What ended the Cuban Missile Crisis of October 1962?", options:[
     {t:"The Soviet Union removed its missiles; the US pledged not to invade Cuba and secretly agreed to remove its missiles from Turkey", ok:true, why:"That deal ended the thirteen days of crisis."},
     {t:"A US invasion of Cuba", why:"The United States did not invade; it imposed a naval quarantine."},
     {t:"A UN Security Council resolution ordering both sides to disarm", why:"The crisis ended through a deal between the two superpowers, not a Council order."},
     {t:"Cuba’s leaders negotiated the settlement directly with both powers", why:"Cuba’s leaders were not part of the final deal."}
   ]},
   {id:"e2u8-q25", lesson:"e2u8-l3", level:3, q:"After a cyber attack shuts down a city’s hospitals, it takes months to show which group was behind it. Why does this make cyber conflict hard to deter?", options:[
     {t:"Deterrence needs a credible threat of punishment, which is weak if the attacker can’t be identified quickly", ok:true, why:"The attribution problem undercuts credibility: if you can’t say who did it, you can’t credibly threaten them."},
     {t:"Because cyber attacks always count as armed attacks under the UN Charter", why:"Most cyber operations fall below the threshold of armed attack, which is part of the difficulty."},
     {t:"Because there are no international norms on cyber at all", why:"There are voluntary UN norms (2015) and expert studies such as the Tallinn Manual."},
     {t:"Because hospitals are not part of critical infrastructure", why:"Hospitals are widely treated as critical infrastructure."}
   ]},
   {id:"e2u8-q26", lesson:"e2u8-l3", level:2, q:"According to SIPRI’s estimates for January 2026, which statement is accurate?", options:[
     {t:"Nine states had nuclear weapons, with about 12,187 warheads in total", ok:true, why:"Those are SIPRI’s January 2026 figures."},
     {t:"Only the five NPT nuclear-weapon states had nuclear weapons", why:"India, Pakistan, North Korea and Israel also have them, making nine."},
     {t:"All nuclear weapons had been eliminated under New START", why:"New START limited US and Russian strategic forces and expired in February 2026; it did not eliminate weapons."},
     {t:"China held most of the world’s warheads", why:"Russia and the United States together held almost 86% of all warheads."}
   ]},
   {id:"e2u8-q27", lesson:"e2u8-l3", level:1, q:"What is an arms race?", options:[
     {t:"A spiral in which rivals keep building up weapons in response to each other", ok:true, why:"It is the security dilemma in motion."},
     {t:"A treaty to reduce weapons", why:"That is arms control or disarmament, the opposite."},
     {t:"A competition to sell weapons to other countries", why:"Arms trade is a different topic; an arms race is about rivals building up against each other."},
     {t:"A UN peacekeeping operation", why:"Peacekeeping is unrelated to building up rival arsenals."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u8-q28", lesson:"e2u8-l4", level:1, q:"What did Johan Galtung mean by positive peace?", options:[
     {t:"Fair institutions and relationships that remove the causes of violence", ok:true, why:"Positive peace goes beyond the absence of fighting to address structural violence."},
     {t:"Simply the absence of fighting", why:"That is negative peace."},
     {t:"A peace imposed by the winning side", why:"An imposed peace may be only negative peace if grievances remain."},
     {t:"A peace treaty signed by the UN", why:"Positive peace is a condition of a society, not a type of document."}
   ]},
   {id:"e2u8-q29", lesson:"e2u8-l4", level:1, q:"Which is NOT one of the three basic principles of UN peacekeeping?", options:[
     {t:"Defeating the party that started the war", ok:true, why:"Peacekeepers are not sent to win; the principles are consent, impartiality and limited use of force."},
     {t:"Consent of the main parties", why:"Consent is one of the three principles."},
     {t:"Impartiality", why:"Impartiality is one of the three principles."},
     {t:"No use of force except in self-defence and defence of the mandate", why:"Limited use of force is one of the three principles."}
   ]},
   {id:"e2u8-q30", lesson:"e2u8-l4", level:2, q:"Which example shows a religious group acting as a mediator?", options:[
     {t:"The Community of Sant’Egidio hosting the talks that ended Mozambique’s civil war in 1992", ok:true, why:"Sant’Egidio, a Catholic lay community in Rome, facilitated the Mozambique peace talks."},
     {t:"Jimmy Carter at Camp David in 1978", why:"That was a state, the United States, acting as mediator."},
     {t:"Martti Ahtisaari’s Crisis Management Initiative in Aceh", why:"That was a private organisation, not a religious group."},
     {t:"An African Union envoy", why:"That is a regional intergovernmental body."}
   ]},
   {id:"e2u8-q31", lesson:"e2u8-l4", level:3, q:"Peace talks have dragged on for years. Then both sides suffer heavy losses with no prospect of winning, and suddenly both show interest in a deal. Which idea explains this?", options:[
     {t:"A mutually hurting stalemate making the conflict “ripe” for settlement", ok:true, why:"Zartman argued that when neither side can win and continuing hurts, conflicts become ripe for talks."},
     {t:"The tragedy of the commons", why:"That is about overusing shared resources."},
     {t:"Soft power", why:"Soft power is attraction; the change here comes from the costs of fighting."},
     {t:"Mutually assured destruction", why:"MAD is about nuclear deterrence, not ripeness for peace talks."}
   ]},
   {id:"e2u8-q32", lesson:"e2u8-l4", level:2, q:"What was the Brahimi Report (2000) about?", options:[
     {t:"Reforming UN peacekeeping, with clear, achievable mandates and adequate resources", ok:true, why:"It responded to failures such as Rwanda and Srebrenica."},
     {t:"Defining terrorism", why:"Terrorism definitions are handled in other UN processes."},
     {t:"Setting climate targets", why:"Climate targets come from the UNFCCC process."},
     {t:"Launching the idea of human security", why:"That was the UNDP’s 1994 report."}
   ]},
   {id:"e2u8-q33", lesson:"e2u8-l4", level:3, q:"After a dictatorship ends, a country’s new government wants an official, public account of disappearances, but courts are weak and many officials are still in post. Which transitional justice tool fits this aim best as a first step?", options:[
     {t:"A truth commission", ok:true, why:"Truth commissions establish and publish what happened, as Argentina’s did with *Nunca Más* (1984)."},
     {t:"Peacekeeping", why:"Peacekeeping helps keep a ceasefire; it doesn’t establish an account of past abuses."},
     {t:"A nationally determined contribution", why:"NDCs are climate plans under the Paris Agreement."},
     {t:"Deterrence", why:"Deterrence prevents future attacks by threatening costs; it doesn’t document past abuses."}
   ]},
   {id:"e2u8-q34", lesson:"e2u8-l4", level:2, q:"Which is an example of soft power in Joseph Nye’s sense?", options:[
     {t:"People abroad admire a country’s universities and films and become more open to its views", ok:true, why:"Influence through attraction, here culture and institutions, is soft power."},
     {t:"A state threatens sanctions", why:"Threats of economic punishment are hard power."},
     {t:"A state offers aid in return for a vote", why:"Payment or inducement is hard power in Nye’s terms."},
     {t:"A navy blockades a port", why:"Military pressure is hard power."}
   ]},
   {id:"e2u8-q35", lesson:"e2u8-l4", level:2, q:"What did Roland Paris argue in *At War’s End* (2004)?", options:[
     {t:"Rushed elections and market reforms can destabilise post-war societies; build institutions before liberalising", ok:true, why:"His phrase was “institutionalisation before liberalisation”."},
     {t:"Peacekeeping never works", why:"Paris critiqued how peacebuilding was done, not peacekeeping as such."},
     {t:"Wars are caused by ancient hatreds", why:"That isn’t his argument; he wrote about the design of peacebuilding."},
     {t:"Climate change causes all civil wars", why:"His book is about post-conflict peacebuilding, not climate."}
   ]},
   {id:"e2u8-q36", lesson:"e2u8-l4", level:3, q:"Oluwaseun reads that peace is more likely to last where UN peacekeepers deploy. A friend objects: “Peacekeepers are only sent to easy cases, so of course peace lasts.” What did Fortna’s research suggest?", options:[
     {t:"Peacekeepers tended to go to harder cases, yet peace still lasted longer where they deployed", ok:true, why:"Fortna found missions were often sent to difficult situations, which strengthens the finding that peacekeeping helps."},
     {t:"Peacekeepers make no difference anywhere", why:"Her findings, and later studies, suggest peacekeeping substantially helps."},
     {t:"Peace only lasts where there are no peacekeepers", why:"That reverses the research finding."},
     {t:"Peacekeepers only deploy to wars between states", why:"Most missions since the 1990s have been in conflicts inside countries."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u8-q37", lesson:"e2u8-l5", level:1, q:"What is a free rider?", options:[
     {t:"Someone who enjoys a shared benefit without paying their share of the cost", ok:true, why:"Free riding is the core temptation in collective action problems."},
     {t:"A mediator who works without pay", why:"Unpaid mediation isn’t free riding; free riding means taking benefits without contributing."},
     {t:"A country that leaves a treaty", why:"Leaving may enable free riding, but the term means benefiting without contributing."},
     {t:"A peacekeeper from a neutral country", why:"That has nothing to do with free riding."}
   ]},
   {id:"e2u8-q38", lesson:"e2u8-l5", level:2, q:"What did Elinor Ostrom show about the tragedy of the commons?", options:[
     {t:"Many communities manage shared resources well for centuries with their own rules, monitoring and sanctions", ok:true, why:"Her 1990 book *Governing the Commons* challenged Hardin’s view that only the state or private property could help."},
     {t:"Shared resources are always destroyed", why:"That is Hardin’s pessimistic story, which Ostrom’s evidence qualified."},
     {t:"Only governments can protect commons", why:"Ostrom showed a third way: self-governing communities."},
     {t:"Private property is the only solution", why:"Ostrom showed that community governance often works without privatisation."}
   ]},
   {id:"e2u8-q39", lesson:"e2u8-l5", level:2, q:"How does the Paris Agreement differ from the Kyoto Protocol?", options:[
     {t:"Every party sets its own target (an NDC), whereas Kyoto set binding targets for developed countries only", ok:true, why:"Paris traded binding top-down targets for universal, bottom-up pledges."},
     {t:"Paris sets binding emission targets for every country, enforced by fines", why:"Paris’s targets aren’t legally binding and there are no fines; the duties to submit and report are binding."},
     {t:"Paris covers only developed countries", why:"Paris covers all parties; it was Kyoto that set targets only for developed countries."},
     {t:"Paris replaced the UNFCCC", why:"Paris operates under the UNFCCC, which still exists."}
   ]},
   {id:"e2u8-q40", lesson:"e2u8-l5", level:1, q:"What is the temperature goal of the Paris Agreement?", options:[
     {t:"Hold warming well below 2°C above pre-industrial levels and pursue efforts to limit it to 1.5°C", ok:true, why:"That is the Agreement’s wording."},
     {t:"Stop all warming by 2020", why:"No such goal exists in the Agreement."},
     {t:"Keep warming below 4°C", why:"Paris aims much lower: well below 2°C."},
     {t:"Return to pre-industrial temperatures by 2030", why:"That isn’t a Paris goal."}
   ]},
   {id:"e2u8-q41", lesson:"e2u8-l5", level:3, q:"During a pandemic, several rich countries ban exports of vaccines and buy far more doses than they need, while poorer countries wait. Which concept best describes the problem?", options:[
     {t:"A collective action problem: each country protects itself first, though all would gain from containing the virus everywhere", ok:true, why:"Disease control is a global public good, and “vaccine nationalism” is a form of defecting from cooperation."},
     {t:"Positive peace", why:"Positive peace concerns fair institutions after conflict, not vaccine distribution."},
     {t:"Deterrence", why:"No one is threatening costs to prevent an action."},
     {t:"Mediation", why:"Mediation is third-party help in negotiation; it doesn’t describe the problem."}
   ]},
   {id:"e2u8-q42", lesson:"e2u8-l5", level:2, q:"What do the International Health Regulations require countries to do?", options:[
     {t:"Detect and report health events that could spread internationally", ok:true, why:"The IHR are binding rules on surveillance and reporting, administered through the WHO."},
     {t:"Accept WHO inspectors entering at any time without permission", why:"The WHO has no power to enter a country or enforce compliance."},
     {t:"Close borders whenever any disease appears", why:"The IHR aim to avoid unnecessary interference with travel and trade."},
     {t:"Give all their health budgets to the WHO", why:"Nothing like this is in the IHR."}
   ]},
   {id:"e2u8-q43", lesson:"e2u8-l5", level:3, q:"Priya reads an article about a river deal that stresses which country has the stronger army and how it can dictate terms. Which lens is the article mainly using?", options:[
     {t:"Realist", ok:true, why:"Explaining outcomes by power and relative strength is the realist lens."},
     {t:"Liberal", why:"A liberal article would stress institutions, interdependence or information sharing."},
     {t:"Constructivist", why:"A constructivist article would stress identities, norms and shared meanings."},
     {t:"Feminist", why:"A feminist article would ask how gender shapes the situation and whose experiences are missing."}
   ]},
   {id:"e2u8-q44", lesson:"e2u8-l5", level:2, q:"A news story quotes “a senior analyst at a leading think tank”. What is the most useful thing to check?", options:[
     {t:"Which think tank, who funds it, and what point of view its work usually takes", ok:true, why:"Think tanks are useful but have funders and perspectives; knowing them helps you weigh the quote."},
     {t:"Whether the think tank has a nice website", why:"Design says nothing about the reliability or perspective of the analysis."},
     {t:"Nothing: think tanks are always neutral", why:"Think tanks often have clear points of view and varied funding."},
     {t:"Whether the analyst agrees with you", why:"Agreement with your own view is not a test of reliability (that is confirmation bias)."}
   ]},
   {id:"e2u8-q45", lesson:"e2u8-l5", level:3, q:"Tomás wants to know exactly what the UN Security Council decided about a crisis. Which should he read first?", options:[
     {t:"The resolution text itself (with its S/RES symbol) from the UN Digital Library or UN website", ok:true, why:"The resolution is the primary document: the words the Council actually adopted."},
     {t:"A newspaper opinion column about the vote", why:"An opinion column interprets the vote from a point of view; read the text first."},
     {t:"A think tank blog post", why:"Commentary is useful after reading the source, not instead of it."},
     {t:"A summary of the debate marked “not an official record”", why:"Meetings summaries are useful but not official; the resolution text is."}
   ]}
  ]
});
