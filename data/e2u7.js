/* Social Science Primers · International Relations Unit 7 · Cooperation, law and the global economy */
ICA.addUnit({
  id:"e2u7", track:"e2", n:7, title:"Cooperation, law and the global economy", icon:"🤝",
  blurb:"How states cooperate without a world government: the United Nations, regional organisations, international law and courts, human rights and the responsibility to protect, and the rules, institutions and arguments that shape trade, money and development.",
  goals:[
    "Explain what the United Nations is and is not, how its main organs work, and why the Security Council veto is debated",
    "Compare regional organisations such as the EU, the African Union, ASEAN, Mercosur and the Pacific Islands Forum, and explain why they differ",
    "Name the sources of international law, tell treaties from custom, and explain why states usually comply without a world police",
    "Distinguish the International Court of Justice from the International Criminal Court, and describe the human rights system and the responsibility to protect fairly",
    "Explain comparative advantage, tariffs, the WTO, the IMF and the World Bank, compare mercantilist, liberal and structuralist views, and read development and aid figures carefully"
  ],
  read:[
    {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach), Chapter 6 “International Organisations” (Shazelina Z. Abidin), Chapter 8 “Global Political Economy” (Günter Walzenbach), Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby) and Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Short chapters that assume some background. Read each one after the matching lesson: the lessons build the basics first."},
    {book:"ospol", where:"Chapter 15 “International Law and International Organizations” and Chapter 16 “International Political Economy”", note:"A gentler textbook treatment with many examples. Section numbers are given in each lesson."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u7-l1", title:"The United Nations: what it is and how it works", minutes:55,
   hook:{q:"The UN Charter still names five permanent members of the Security Council. Two of the names in that text no longer match the governments that hold the seats. Which two?", options:["The “Republic of China” and the “Union of Soviet Socialist Republics”","France and the United Kingdom","The United States and India","None: the text is updated every time a government changes"], answer:0, reveal:"**The Republic of China and the USSR.** Article 23 was written in 1945 and has never been reworded. In 1971 a General Assembly resolution gave China’s seat to the People’s Republic of China, and in 1991 Russia took over the Soviet Union’s seat. Changing the Charter is very hard, which is one reason the United Nations still looks a lot like the world of 1945. This lesson explains how it works and why people argue about reforming it."},
   goals:[
     "Explain why the UN was created, what its Charter says about force and sovereignty, and why it is not a world government",
     "Name the six principal organs and say what each one does",
     "Work out whether a Security Council resolution passes, and explain the veto and the arguments about it",
     "Describe the wider UN system, how it is funded and the main reform debates"
   ],
   learn:[
    {h:"A club with a rulebook", body:[
      {lead:"Picture a residents’ association for a huge apartment block. Every flat is independent and nobody is the landlord, but the residents have signed a shared rulebook, meet in one hall and run some shared services."},
      "That is roughly what the **United Nations** is: an [[intergovernmental-organization|intergovernmental organisation]] whose members are [[state|states]]. Its rulebook is the [[un-charter|UN Charter]], a treaty signed in San Francisco on **26 June 1945** that came into force on **24 October 1945** (now celebrated as United Nations Day). There were 51 original members; today there are **193**.",
      "The UN was built in the shadow of the Second World War and of a failure. The **League of Nations** (founded 1920) had not stopped aggression in the 1930s, such as Japan’s invasion of Manchuria in 1931 and Italy’s invasion of Ethiopia in 1935. The United States never joined it. The UN’s designers wanted an organisation the great powers would join and stay in.",
      "Article 1 of the Charter lists the UN’s purposes: keeping international peace and security, developing friendly relations based on equal rights and the [[self-determination]] of peoples, and cooperating on economic, social and humanitarian problems and on human rights.",
      {h:"Three principles in Article 2"},
      {list:[
        "**Sovereign equality** (2.1): every member is legally equal, whatever its size. This builds on the idea of [[sovereignty]].",
        "**No threat or use of force** against another state’s territory or independence (2.4). The Charter allows two exceptions: self-defence against an armed attack (Article 51) and force authorised by the Security Council.",
        "**Non-intervention** (2.7): the UN may not interfere in matters that are essentially within a state’s domestic jurisdiction, except for enforcement measures by the Security Council."
      ]},
      {key:"The UN is not a world government. It has no army of its own, cannot tax anyone and can only do what its member states allow. In the language of {{anarchy-ir}}, it works inside anarchy rather than abolishing it."}
    ]},
    {h:"The six principal organs", body:[
      "The Charter (Article 7) sets up six main bodies. Five are in New York; the court sits in The Hague, in the Netherlands.",
      {fig:'<svg viewBox="0 0 340 352"><rect class="d-panel" x="10" y="8" width="320" height="40" rx="8" stroke-width="2"/><text x="170" y="26" text-anchor="middle">UN Charter (1945)</text><text class="s" x="170" y="41" text-anchor="middle">sets up all six organs (Article 7)</text><rect class="d-lup" x="10" y="64" width="155" height="76" rx="8" stroke-width="2"/><text x="87" y="88" text-anchor="middle">General Assembly</text><text class="s" x="87" y="106" text-anchor="middle">all 193 members</text><text class="s" x="87" y="122" text-anchor="middle">one state, one vote</text><rect class="d-rose" x="175" y="64" width="155" height="76" rx="8" stroke-width="2"/><text x="252" y="88" text-anchor="middle">Security Council</text><text class="s" x="252" y="106" text-anchor="middle">15 members, 5 permanent</text><text class="s" x="252" y="122" text-anchor="middle">decisions can bind all</text><rect class="d-gold" x="10" y="154" width="155" height="76" rx="8" stroke-width="2"/><text x="87" y="178" text-anchor="middle">Secretariat</text><text class="s" x="87" y="196" text-anchor="middle">international staff, led</text><text class="s" x="87" y="212" text-anchor="middle">by the Secretary-General</text><rect class="d-sage" x="175" y="154" width="155" height="76" rx="8" stroke-width="2"/><text x="252" y="178" text-anchor="middle">ECOSOC</text><text class="s" x="252" y="196" text-anchor="middle">54 members: economic</text><text class="s" x="252" y="212" text-anchor="middle">and social cooperation</text><rect class="d-soft" x="10" y="244" width="155" height="76" rx="8" stroke-width="2"/><text x="87" y="268" text-anchor="middle">Court of Justice</text><text class="s" x="87" y="286" text-anchor="middle">15 judges, The Hague</text><text class="s" x="87" y="302" text-anchor="middle">disputes between states</text><rect class="d-ink" x="175" y="244" width="155" height="76" rx="8" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/><text x="252" y="268" text-anchor="middle">Trusteeship Council</text><text class="s" x="252" y="286" text-anchor="middle">oversaw trust territories</text><text class="s" x="252" y="302" text-anchor="middle">suspended since 1994</text><text class="s" x="170" y="342" text-anchor="middle">Dashed: still in the Charter, no longer active.</text></svg>', alt:"The UN Charter at the top sets up six organs: the General Assembly (all 193 members, one vote each), the Security Council (15 members, 5 permanent, decisions can bind all), the Secretariat led by the Secretary-General, ECOSOC (54 members), the International Court of Justice (15 judges in The Hague) and the Trusteeship Council, shown dashed because it suspended work in 1994.", cap:"The UN’s six principal organs. Only the Security Council can make decisions that bind every member."},
      {table:[
        ["Organ","Who sits on it","What it does"],
        ["[[general-assembly|General Assembly]]","All 193 members, one vote each","Debates anything in the Charter, makes recommendations, approves the budget, elects members of other organs"],
        ["[[security-council|Security Council]]","15 members: 5 permanent, 10 elected for two years","Primary responsibility for peace and security; can impose sanctions or authorise force"],
        ["Secretariat","International civil servants","Runs the organisation day to day; headed by the [[un-secretary-general|Secretary-General]]"],
        ["Economic and Social Council (ECOSOC)","54 members elected by the Assembly","Coordinates economic, social and environmental work and talks with NGOs"],
        ["[[international-court-of-justice|International Court of Justice]]","15 judges elected for nine years","Settles legal disputes between states and gives advisory opinions"],
        ["Trusteeship Council","The permanent five, in principle","Supervised territories on the road to self-government; suspended in 1994"]
      ]},
      "The Trusteeship Council oversaw “trust territories” such as Tanganyika, Togoland and Western Samoa as they moved towards self-rule. When Palau, the last one, became independent in 1994, the council suspended its work. Its story is part of {{decolonization}}.",
      "The General Assembly is the most representative body: Tuvalu’s vote counts the same as India’s. But most of its resolutions are **recommendations**. They can carry great political weight, and some have shaped international law, but they do not bind states. The exceptions are internal matters such as the budget: members must pay what the Assembly assesses (Article 17)."
    ]},
    {h:"The Security Council and the veto", body:[
      "The Security Council is the UN’s engine room for peace and security. Under Article 25, members agree to “accept and carry out” its decisions. No other UN body has that power.",
      "Its **five permanent members** (often called the P5) are China, France, Russia, the United Kingdom and the United States, the main winning powers of 1945. The other **ten** seats are elected by the General Assembly for two-year terms, shared out by region: three for Africa, two for Asia-Pacific, one for Eastern Europe, two for Latin America and the Caribbean, and two for “Western Europe and other states”. The Council grew from 11 to 15 members in 1965, its only enlargement so far.",
      {h:"How a vote works"},
      "Under Article 27, a procedural decision (such as the agenda) needs nine “yes” votes. Every other decision needs **nine “yes” votes and no “no” vote from any permanent member**. A “no” from one of the five is the [[veto]]. Since the Council’s early years, a permanent member that **abstains** is not treated as vetoing.",
      {ex:"A draft resolution gets 13 votes in favour, 1 against and 1 abstention.\n• If the “no” came from an elected member: 13 ≥ 9 and no permanent member voted no, so it **passes**.\n• If the “no” came from a permanent member: that is a veto, so it **fails**, even with 13 in favour.\n• If instead 8 vote yes and 7 abstain: it **fails**, because it never reached nine yes votes.", label:"Worked example: counting a vote"},
      {h:"What the Council can do"},
      {list:[
        "**Chapter VI**: encourage peaceful settlement, for example by calling for talks or sending a mediator.",
        "**Chapter VII**: decide that there is a threat to the peace (Article 39), then order measures without force such as [[sanctions]], arms embargoes or travel bans (Article 41), or authorise the use of force (Article 42).",
        "Set up peace operations, which you will meet in Unit 8 as {{peacekeeping}}. The soldiers wear blue helmets but belong to national armies lent to the UN; the special agreements that would have given the Council its own forces (Article 43) were never made."
      ]},
      {h:"Why the veto exists, and why it is debated"},
      "The founders’ bargain was simple: the great powers would only join an organisation that could not act against their vital interests. A {{realism|realist}} reads this as power written into law. Defenders add that the veto keeps the strongest states inside the system instead of walking out, as several did from the League.",
      "Critics point out that the veto lets a permanent member block action on a crisis even when it, or an ally, is involved, and that its permanent membership is frozen at the shape of 1945. The General Assembly has tried workarounds. The 1950 [[uniting-for-peace|“Uniting for Peace”]] resolution says the Assembly can recommend collective action when a veto leaves the Council stuck. Since a 2022 resolution, the Assembly also meets automatically to debate any veto, so the state that used it is invited to explain itself."
    ]},
    {h:"The wider UN family", body:[
      "“The UN” often means the whole **UN system**, which is much bigger than the six organs.",
      {list:[
        "**Funds and programmes** set up by the UN itself, such as UNICEF (children), the UN Development Programme (UNDP), the World Food Programme (WFP), and the UN refugee agency UNHCR.",
        "**[[specialized-agency|Specialized agencies]]**: separate organisations with their own members, budgets and governing bodies, linked to the UN by agreements. Examples are the World Health Organization (WHO), the International Labour Organization (ILO), the Food and Agriculture Organization (FAO), UNESCO, and the [[imf|IMF]] and [[world-bank|World Bank]], which you will meet in Lesson 5."
      ]},
      "Some agencies are older than the UN: the International Telecommunication Union (ITU) dates from 1865 and the Universal Postal Union (UPU) from 1874. They touch daily life quietly: a postcard crosses borders under UPU rules, phones and satellites share radio frequencies coordinated through the ITU, and the International Civil Aviation Organization (ICAO) sets the standards that let aircraft fly safely between countries.",
      {tip:"When a news story says “the UN said…”, ask which part of the UN: the Secretary-General, the Security Council, the General Assembly, an agency like WHO, or an independent expert appointed by a UN body. They have very different authority."}
    ]},
    {h:"Who pays, and how much", body:[
      "The UN has several pots of money. The **regular budget** pays for the Secretariat and core work. Each member pays a share set by the General Assembly every three years, the **scale of assessments**, which is based mainly on each country’s share of world income, with adjustments for poorer countries.",
      {table:[
        ["Rule in the 2025–2027 scale","Share of the regular budget"],
        ["Highest share allowed (the ceiling), paid by the United States","22%"],
        ["China","20.004%"],
        ["Japan","6.930%"],
        ["Least developed countries pay no more than","0.01%"],
        ["Lowest share anyone pays (the floor)","0.001%"]
      ]},
      "Peacekeeping has a separate, larger budget, in which the permanent five pay somewhat more than their regular shares. Much of the rest of the UN system runs on **voluntary contributions**, often earmarked by donors for particular projects, which gives big donors extra influence over priorities.",
      "When large contributors pay late or cut voluntary funding, programmes shrink. In 2025 the Secretary-General launched a reform and cost-cutting effort called **UN80**, named after the organisation’s 80th anniversary, amid a serious cash shortage.",
      {warn:"Assessed shares follow ability to pay; they don’t buy votes. In the General Assembly the state paying 22% and the state paying 0.001% each have one vote."}
    ]},
    {h:"Reform: a club that kept growing", body:[
      "The UN of 1945 had 51 members, mostly from Europe and the Americas. As colonies won independence, membership soared: 17 new states joined in 1960 alone, most of them African.",
      {fig:'<svg viewBox="0 0 340 372"><text x="170" y="20" text-anchor="middle">UN member states</text><g class="s"><text x="12" y="49">1945</text><text x="12" y="83">1955</text><text x="12" y="117">1960</text><text x="12" y="151">1970</text><text x="12" y="185">1980</text><text x="12" y="219">1990</text><text x="12" y="253">2000</text><text x="12" y="287">2011</text></g><g class="d-lup" stroke-width="1.5"><rect x="56" y="34" width="61" height="20" rx="3"/><rect x="56" y="68" width="91" height="20" rx="3"/><rect x="56" y="102" width="118" height="20" rx="3"/><rect x="56" y="136" width="151" height="20" rx="3"/><rect x="56" y="170" width="184" height="20" rx="3"/><rect x="56" y="204" width="190" height="20" rx="3"/><rect x="56" y="238" width="225" height="20" rx="3"/><rect x="56" y="272" width="230" height="20" rx="3"/></g><text x="123" y="49">51</text><text x="153" y="83">76</text><text x="180" y="117">99</text><text x="213" y="151">127</text><text x="246" y="185">154</text><text x="252" y="219">159</text><text x="287" y="253">189</text><text x="292" y="287">193</text><text class="s" x="170" y="322" text-anchor="middle">Big jumps: decolonisation (1955–1980) and new</text><text class="s" x="170" y="338" text-anchor="middle">states after the Cold War (1990s). South Sudan</text><text class="s" x="170" y="354" text-anchor="middle">became the 193rd member in 2011.</text></svg>', alt:"Bar chart of UN membership: 51 in 1945, 76 in 1955, 99 in 1960, 127 in 1970, 154 in 1980, 159 in 1990, 189 in 2000 and 193 in 2011.", cap:"Source: United Nations, “Growth in United Nations membership”. Most of today’s members were colonies or parts of other states in 1945."},
      "The General Assembly changed with its members: newly independent states formed groups such as the Group of 77 (founded 1964) and pushed issues like decolonisation and development up the agenda. The Security Council changed much less. Africa, with 54 UN members, has no permanent seat.",
      {h:"The main reform positions"},
      {list:[
        "The **G4** (Brazil, Germany, India and Japan) seek permanent seats for themselves and support new permanent seats for Africa.",
        "**Uniting for Consensus** (a group including Italy, Pakistan, Argentina, Mexico and the Republic of Korea) opposes new permanent seats and prefers more elected seats, some with longer terms.",
        "The **African Union’s common position** (the 2005 Ezulwini Consensus) asks for two permanent seats with all the rights of current members, including the veto while it exists, plus more elected seats for Africa."
      ]},
      "Any change needs a Charter amendment: a two-thirds vote in the General Assembly, then ratification by two-thirds of members **including all five permanent members** (Article 108). Each of the five can therefore block reform, which is why talks have continued for decades.",
      {h:"Common misconceptions"},
      {list:[
        "“The UN ordered…” Usually only the Security Council can order; the Assembly and agencies recommend, advise or assist.",
        "“The Secretary-General runs the world.” The Secretary-General is the UN’s chief administrative officer. The job carries moral authority and can bring threats to the Council’s attention (Article 99), but has no power to command states.",
        "“The UN failed, so it is useless.” Its failures are real and well documented, but specific bodies also do work that rarely makes headlines, from vaccine programmes to air safety rules. Judging it fairly means asking which body, at what task, compared with what."
      ]},
      {key:"Realists see the UN as a stage where great powers act; {{liberalism-ir|liberals}} see an institution that lowers the cost of cooperating; {{constructivism|constructivists}} see a place where norms such as self-determination spread. Each lens notices something real."}
    ]}
   ],
   try:[
    {id:"e2u7-l1-x1", type:"mcq", q:"Article 2 of the Charter bans the threat or use of force against other states. Which situation does the Charter itself accept as an exception?", options:[
      {t:"A state defending itself against an armed attack, or force authorised by the Security Council", ok:true, why:"Right. Article 51 keeps the right of self-defence against an armed attack, and Chapter VII lets the Security Council authorise force. Those are the two exceptions the Charter names."},
      {t:"A state using force because the General Assembly passed a resolution criticising its neighbour", why:"General Assembly resolutions are recommendations. The Charter gives the Assembly no power to authorise force against a state."},
      {t:"A state using force to collect an unpaid debt from another state", why:"Using force to collect debts is exactly the kind of force Article 2.4 forbids; it is not an exception."},
      {t:"Any state using force as long as it informs the Secretary-General first", why:"Telling the Secretary-General makes nothing lawful. The Secretary-General can’t authorise force at all."}
    ]},
    {id:"e2u7-l1-x2", type:"match", q:"Match each UN organ with what it does.", pairs:[
      ["General Assembly","Every member has one vote; it debates, recommends and approves the budget","All 193 members sit in the Assembly with equal votes, and most of its resolutions are recommendations."],
      ["Security Council","Can make decisions that bind every member on peace and security","Under Article 25, members agree to carry out the Council’s decisions."],
      ["Secretariat","International staff who run the UN day to day","Led by the Secretary-General, the Secretariat is the UN’s administration."],
      ["International Court of Justice","Settles legal disputes between states","The ICJ in The Hague hears cases between states, not individuals."],
      ["Trusteeship Council","Supervised territories moving towards self-rule, now suspended","It suspended work in 1994 when Palau, the last trust territory, became independent."]
    ]},
    {id:"e2u7-l1-x3", type:"mcq", q:"A draft Security Council resolution gets 12 votes in favour. One permanent member votes against, and two elected members abstain. What happens?", options:[
      {t:"It fails, because a permanent member voted no", ok:true, why:"Correct. A substantive resolution needs nine yes votes and no “no” vote from a permanent member. The permanent member’s no vote is a veto."},
      {t:"It passes, because 12 is more than the nine votes needed", why:"Nine votes are necessary but not enough: a “no” from any of the five permanent members blocks the resolution."},
      {t:"It passes, because only abstentions by permanent members count as vetoes", why:"It’s the other way round. By long practice a permanent member’s abstention does not block a resolution; its “no” vote does."},
      {t:"It goes to the General Assembly, which decides automatically", why:"Since 2022 the Assembly meets to debate a veto, but it doesn’t take over the decision. It can only recommend."}
    ]},
    {id:"e2u7-l1-x4", type:"sort", q:"Sort each item: does it legally bind the states concerned, or is it a recommendation or opinion?", buckets:["Legally binding","Recommendation or opinion"], items:[
      {t:"A Security Council decision under Chapter VII imposing an arms embargo", b:0, why:"Chapter VII decisions bind all members under Article 25."},
      {t:"A General Assembly resolution calling on states to protect migrant workers", b:1, why:"On matters like this the Assembly makes recommendations. They carry political weight but don’t bind."},
      {t:"The General Assembly’s decision on how much each member pays to the regular budget", b:0, why:"Budget matters are the exception: Article 17 obliges members to pay what the Assembly apportions."},
      {t:"A judgment of the International Court of Justice in a case between two states", b:0, why:"A judgment binds the parties to that case (Article 94 of the Charter, Article 59 of the Court’s Statute)."},
      {t:"An advisory opinion of the International Court of Justice", b:1, why:"Advisory opinions are not binding as such, though they are treated as authoritative statements of the law."},
      {t:"A Secretary-General’s report recommending more aid for a region", b:1, why:"The Secretary-General can advise and warn, but has no power to bind states."}
    ]},
    {id:"e2u7-l1-x5", type:"number", q:"Imagine (invented figures) that the UN regular budget for a year is US$3,200 million. A country’s assessed share is 0.5%. How much does it owe, in millions of US dollars?", answer:16, tol:0.01, unit:"million US$", why:"0.5% means 0.5 ÷ 100 = 0.005. Then 0.005 × 3,200 million = 16 million US dollars.", wrongs:[
      {v:1600, tol:0.5, why:"That multiplies by 0.5 instead of 0.5%. A percentage must be divided by 100 first: 0.5% = 0.005."},
      {v:160, tol:0.5, why:"That uses 5% (0.05) instead of 0.5% (0.005). Check the decimal point."},
      {v:1.6, tol:0.01, why:"That uses 0.05% (0.0005). 0.5% is ten times larger: 0.005 × 3,200 = 16."}
    ], hint2:"Turn the percentage into a decimal by dividing by 100, then multiply by the budget."},
    {id:"e2u7-l1-x6", type:"spot", q:"A student wrote this news summary. Tap the claims that get the UN wrong.", ask:"gets the UN wrong", parts:[
      "“The UN, ",
      {t:"which acts as the world’s government,", flag:true, why:"The UN is an organisation of sovereign states with no power to tax, legislate for or command them. It is not a world government."},
      " has ",
      {t:"193 member states.", flag:false, why:"Correct: South Sudan became the 193rd member in 2011."},
      " Yesterday ",
      {t:"the General Assembly ordered both countries to withdraw their troops,", flag:true, why:"The Assembly can call on or recommend; it can’t order. Binding orders on peace and security come from the Security Council."},
      " and ",
      {t:"the Secretary-General vetoed a rival proposal.", flag:true, why:"The Secretary-General has no vote and no veto. Only the five permanent members of the Security Council have a veto."},
      " Earlier, a Security Council resolution ",
      {t:"passed with nine votes in favour while two permanent members abstained.", flag:false, why:"This can be right: nine yes votes is enough, and by long practice an abstention by a permanent member isn’t a veto."},
      " The Council’s ",
      {t:"five permanent members are China, France, Russia, the United Kingdom and the United States.", flag:false, why:"Correct. These are the P5."},
      "”"
    ]},
    {id:"e2u7-l1-x7", type:"order", q:"Put these events in the order they happened.", items:[
      {t:"The League of Nations is founded", why:"1920, after the First World War."},
      {t:"The UN Charter is signed in San Francisco", why:"26 June 1945."},
      {t:"The Charter enters into force", why:"24 October 1945, once enough states, including the five permanent members, had ratified it."},
      {t:"The Security Council grows from 11 to 15 members", why:"1965, the Council’s only enlargement so far."},
      {t:"The Trusteeship Council suspends its work", why:"1994, after Palau, the last trust territory, became independent."},
      {t:"South Sudan becomes the 193rd member", why:"2011, the most recent new member."}
    ]}
   ],
   apply:{intro:"Look at the UN as it actually works, using its free public websites. No account is needed.", tasks:[
     {t:"Read one Security Council meeting record", how:["Open the UN’s press site (press.un.org) and choose “Security Council” meetings coverage, or search the web for “Security Council meetings coverage” plus this month.","Pick one meeting that ended in a vote.","Note the vote: how many in favour, against and abstaining, and whether any permanent member voted no.","Read one or two statements: what reasons did states give for their vote?"], write:"Meeting date and topic, the vote count, whether it passed and why, and one reason a state gave…"},
     {t:"Find three UN bodies in your everyday life", how:["Think about something you used this week: a letter or parcel, a flight, a phone call, food labels, a vaccine record.","Search for which UN agency sets or coordinates international standards for it (for example ITU, UPU, ICAO, WHO, FAO).","Check on the agency’s own website what it actually does and who its members are."], write:"Three things you used, the agency linked to each, and what the agency really does (in your own words)…"},
     {t:"Compare two views of reform", how:["Search for a short official statement on Security Council reform from two different countries or groups (for example the G4, Uniting for Consensus or the African Union’s Ezulwini Consensus).","Note what each one wants: new permanent seats, more elected seats, the veto.","Note the reasons each gives. Don’t decide who is right; describe the arguments."], write:"Group 1: what it wants and why. Group 2: what it wants and why. What they agree on…"}
   ], proof:"Notes on one real Council vote and the reasons behind it, three UN agencies linked to your daily life, and a neutral summary of two reform positions."},
   read:[
     {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Read it after this lesson: it adds why states create international organisations and how much independence they have."},
     {book:"ospol", where:"Section 15.1 “The Problem of Global Governance” and Section 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)”", note:"A gentle overview of the UN’s structure with more examples."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u7-l2", title:"Regional organisations: why neighbours organise differently", minutes:50,
   hook:{q:"How many official languages does the European Union work in?", options:["2: English and French","6, the same as the UN","24","1: English"], answer:2, reveal:"**24.** EU laws are published in all of them, and anyone can write to the EU institutions in any of the 24 and get a reply in the same language. That is a sign of how much the EU’s members have built together: shared laws need to be readable by everyone they bind. Other regional organisations have chosen very different designs, and this lesson explains why."},
   goals:[
     "Explain why states form regional organisations and how regionalism relates to the UN",
     "Tell intergovernmental from supranational organisations, and place free trade areas, customs unions, common markets and monetary unions on a ladder",
     "Describe the EU, the African Union, ASEAN, Mercosur and the Pacific Islands Forum: their origins, aims and decision styles",
     "Explain why regional organisations differ, using history, power and ideas, without treating the EU as the model everyone should follow"
   ],
   learn:[
    {h:"Why neighbours organise", body:[
      {lead:"Think of the households on one street. They can’t vote on each other’s lives, but they share a road, drains and a noise problem, and together they have a louder voice at the town council."},
      "States feel the same pull towards their neighbours. [[regionalism|Regionalism]] means states in one part of the world building shared organisations and rules. The usual reasons are:",
      {list:[
        "**Trade**: a bigger market for local firms, and cheaper goods when border taxes fall.",
        "**Peace among neighbours**: many regional bodies began as ways to stop old rivals fighting.",
        "**A louder voice**: small and middle-sized states bargain better together, at the UN, at trade talks or with great powers.",
        "**Shared problems**: rivers, fisheries, migration, disease and disasters cross borders.",
        "**Identity**: a sense of being “African”, “Southeast Asian” or “Pacific” that leaders want to express and strengthen."
      ]},
      "The UN Charter welcomes this. Chapter VIII encourages “regional arrangements” to settle local disputes peacefully, while keeping the Security Council in charge of using force.",
      {h:"Two basic designs"},
      "The most important question about any regional organisation is **who has the final say**.",
      {list:[
        "**[[intergovernmentalism|Intergovernmental]]** bodies keep decisions in the hands of member governments, often by consensus, so each member can block. States cooperate but give up little [[sovereignty]].",
        "**[[supranationalism|Supranational]]** bodies have institutions above the states that can make, enforce or interpret rules binding on members, sometimes by majority vote. Members pool sovereignty: they share some decisions they used to make alone."
      ]},
      "Most organisations mix the two. The EU is the most supranational; most others are mainly intergovernmental."
    ]},
    {h:"A ladder of economic integration", body:[
      "Economists describe steps of economic integration. Each one adds a layer of shared rules on top of the one before.",
      {fig:'<svg viewBox="0 0 340 384"><defs><marker id="e2u7-l2-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><path class="d-ink" d="M22 352 L22 30" stroke-width="2" marker-end="url(#e2u7-l2-a)"/><text class="s" x="14" y="20">more pooling</text><rect class="d-sage" x="40" y="286" width="290" height="66" rx="8" stroke-width="2"/><text x="52" y="306">1 Free trade area</text><text class="s" x="52" y="324">no tariffs between members; each</text><text class="s" x="52" y="340">keeps its own tariffs on outsiders</text><rect class="d-gold" x="40" y="208" width="290" height="66" rx="8" stroke-width="2"/><text x="52" y="228">2 Customs union</text><text class="s" x="52" y="246">+ one common tariff on goods from</text><text class="s" x="52" y="262">outside (Mercosur aims for this)</text><rect class="d-lup" x="40" y="130" width="290" height="66" rx="8" stroke-width="2"/><text x="52" y="150">3 Common market</text><text class="s" x="52" y="168">+ free movement of services, money</text><text class="s" x="52" y="184">and people (the EU single market)</text><rect class="d-rose" x="40" y="52" width="290" height="66" rx="8" stroke-width="2"/><text x="52" y="72">4 Economic and monetary union</text><text class="s" x="52" y="90">+ a shared currency and central bank</text><text class="s" x="52" y="106">(the euro area, inside the EU)</text><text class="s" x="185" y="374" text-anchor="middle">Real organisations rarely fit one step exactly.</text></svg>', alt:"A ladder of four steps, from bottom to top: free trade area (no tariffs between members, each keeps its own outside tariffs); customs union (adds a common outside tariff, as Mercosur aims for); common market (adds free movement of services, money and people, as in the EU single market); economic and monetary union (adds a shared currency and central bank, as in the euro area).", cap:"Each step up means members share more decisions. Examples of free trade areas include the ASEAN Free Trade Area and the African Continental Free Trade Area."},
      "Why would anyone climb past step 1? In a [[free-trade-area|free trade area]], goods can be shipped into the member with the lowest outside tariff and then moved on to the others. Members prevent this with **rules of origin**: paperwork proving where a product was really made. A [[customs-union|customs union]] avoids the problem by agreeing one common outside tariff, but then members must negotiate trade deals with outsiders together.",
      {tip:"The steps describe economics, not success. A free trade area that works well is not a “failed” common market. Members choose the depth they want."}
    ]},
    {h:"The European Union: pooling sovereignty", body:[
      "Europe’s project began with coal and steel, the raw materials of war. On 9 May 1950 the French foreign minister Robert Schuman proposed putting French and German coal and steel under a shared authority, so that war between them would become “materially impossible”. In 1951 six states (Belgium, France, West Germany, Italy, Luxembourg and the Netherlands) created the European Coal and Steel Community.",
      {list:[
        "**1957**: the Treaties of Rome create the European Economic Community.",
        "**1979**: the first direct elections to the European Parliament.",
        "**1992**: the Maastricht Treaty creates the [[european-union|European Union]] (in force 1993).",
        "**1999–2002**: the euro is introduced; most members now use it.",
        "**2020**: the United Kingdom leaves; the EU now has **27** members."
      ]},
      "The EU has institutions with real power above its members. The European Commission proposes laws and checks that members follow them. Laws are usually adopted by the Council of the EU (ministers from each government) together with the directly elected European Parliament. The Court of Justice of the EU has ruled since the 1960s that EU law takes precedence over conflicting national law in the areas the treaties cover.",
      "Scholars still argue about **why** Europe integrated so far. [[neofunctionalism|Neofunctionalists]], following Ernst Haas’s *The Uniting of Europe* (1958), stressed **spillover**: cooperation in one sector creates pressure to cooperate in the next. **Intergovernmentalists** reply that governments stayed in charge and only pooled power when it served their national interests."
    ]},
    {h:"The African Union: from non-interference to non-indifference", body:[
      "The **Organisation of African Unity (OAU)** was founded in Addis Ababa on 25 May 1963 by 32 independent African states, a date still marked as Africa Day. Its great causes were ending colonial rule and apartheid. Having just won sovereignty, members guarded it closely, and the OAU kept a strict rule of non-interference in each other’s affairs.",
      "That rule was tested by the tragedies of the 1990s, above all the 1994 genocide against the Tutsi in Rwanda (see Lesson 4). African leaders replaced the OAU with the [[african-union|African Union (AU)]], whose Constitutive Act was adopted in Lomé in 2000; the AU was launched in Durban in 2002. It has **55** member states.",
      {list:[
        "Article 4(h) gives the Union the **right to intervene** in a member state, by decision of its Assembly, in grave circumstances: war crimes, genocide and crimes against humanity. It is one of the first treaty texts of its kind, written before the UN endorsed the responsibility to protect.",
        "Governments that take power unconstitutionally, for example in a coup, are suspended from AU activities. Several have been suspended in recent years.",
        "A Peace and Security Council (operating since 2004) manages crises and can deploy missions.",
        "The **African Continental Free Trade Area** (agreement signed 2018, trading began in 2021) aims to join most of the continent into one market. In 2023 the AU became a permanent member of the G20."
      ]},
      "The shift is often summarised as a move from **non-interference** to **non-indifference**. How far practice matches the text is debated: interventions under Article 4(h) have been rare, and the AU often depends on outside funding for its peace operations."
    ]},
    {h:"ASEAN: the “ASEAN Way”", body:[
      "The [[asean|Association of Southeast Asian Nations (ASEAN)]] was founded by the Bangkok Declaration of **8 August 1967** by Indonesia, Malaysia, the Philippines, Singapore and Thailand. The region was tense: Indonesia and Malaysia had just ended an armed confrontation, and the Cold War was raging in Vietnam. ASEAN grew to ten members by 1999, and **Timor-Leste became the eleventh in October 2025**.",
      "ASEAN is known for the **“ASEAN Way”**: quiet consultation, decisions by consensus, informal diplomacy and [[non-interference]] in members’ internal affairs. It has a secretariat in Jakarta but no supranational court or commission.",
      "Critics say consensus lets one member block action and that non-interference has meant silence about human rights abuses. Supporters point out that no two ASEAN members have fought a full-scale war against each other since 1967 (though there has been deadly border fighting, for example between Cambodia and Thailand in 2008–2011 and again in 2025) and that ASEAN brings great powers to its own meetings on its own terms. Amitav Acharya, one of the scholars you met in Unit 6 ({{global-ir}}), argues that ASEAN built a regional community through shared norms rather than shared institutions.",
      "The rules can bend. After the 2021 military takeover in Myanmar, ASEAN agreed a “Five-Point Consensus” on ending the violence, and from late 2021 invited only a non-political representative of Myanmar to its summits (still the case at its May 2026 summit, after Myanmar’s elections), an unusual step for an organisation built on non-interference."
    ]},
    {h:"Mercosur, the Pacific Islands Forum and many more", body:[
      {h:"Mercosur"},
      "[[mercosur|Mercosur]] (Mercosul in Portuguese, the “Southern Common Market”) was created by the Treaty of Asunción on 26 March 1991 by Argentina, Brazil, Paraguay and Uruguay. It grew out of a reconciliation between Argentina and Brazil, long-time rivals, after both returned to civilian rule in the 1980s. It is a customs union with a common external tariff, though with many exceptions. Bolivia became a full member in 2024; Venezuela has been suspended since 2016, and indefinitely since 2017 under the bloc’s democracy clause. Chile, Colombia and several other states are associate members.",
      {h:"The Pacific Islands Forum"},
      "The [[pacific-islands-forum|Pacific Islands Forum]] began in 1971 as the South Pacific Forum and took its current name in 2000. It has **18 members**: Australia, New Zealand, island countries from Fiji to Tuvalu, and the French territories of New Caledonia and French Polynesia. Its members are mostly small states spread across a vast ocean, so it focuses on what they share: fisheries, the ocean, nuclear testing in the past (the 1985 Treaty of Rarotonga created a nuclear-free zone) and, above all, **climate change**, which its 2018 Boe Declaration calls the single greatest threat to the region. Its 2050 Strategy speaks of a “Blue Pacific Continent”.",
      "Small states can punch above their weight together. Pacific states, led by Vanuatu, pushed the General Assembly to ask the International Court of Justice for an advisory opinion on climate change; the Court gave it, unanimously, in July 2025.",
      {table:[
        ["Organisation","Founded","Main focus"],
        ["League of Arab States","1945","Political coordination among Arab states"],
        ["Organization of American States","1948","Democracy, rights and security in the Americas"],
        ["Caribbean Community (CARICOM)","1973","Economic integration of Caribbean states"],
        ["ECOWAS (West Africa)","1975","Economic integration; also mediation and security"],
        ["SAARC (South Asia)","1985","Regional cooperation, often stalled by rivalries"]
      ]},
      "Membership can shrink as well as grow. Mali, Burkina Faso and Niger left ECOWAS in January 2025 after a dispute over the bloc’s response to military takeovers in all three; they had already formed their own Alliance of Sahel States."
    ]},
    {h:"Why they differ", body:[
      "Why is the EU so supranational and ASEAN so careful about sovereignty? Each IR lens points to different causes.",
      {table:[
        ["Factor","What it suggests"],
        ["History","States that won independence recently, often after colonial rule, tend to guard sovereignty closely (OAU, ASEAN). Western Europe’s states pooled sovereignty after two devastating wars among themselves."],
        ["Power","A {{realism|realist}} notes that the US backed European unity during the Cold War, and that a regional leader (France and Germany together, Brazil, Indonesia, Australia) shapes each body."],
        ["Economics","A {{liberalism-ir|liberal}} notes that where neighbours already trade heavily with each other, deeper rules pay off more."],
        ["Ideas and identity","A {{constructivism|constructivist}} notes that norms such as consensus, non-interference or “ever closer union” become part of how members see themselves."]
      ]},
      {h:"Common misconceptions"},
      {list:[
        "“Every region is trying to become the EU.” Many members deliberately prefer looser designs. Judging other regions by the EU’s yardstick is a form of [[eurocentrism|Eurocentrism]] that {{global-ir|Global IR}} scholars criticise.",
        "“Regional organisations replace states.” Even in the EU, states remain members of the UN, keep their own armies and decide on treaty changes.",
        "“A consensus organisation can’t achieve anything.” Consensus slows decisions but can make the ones taken more durable, because nobody was outvoted."
      ]},
      {key:"Regional organisations answer the same question in different ways: how much will we decide together, and how much stays at home? The answer reflects each region’s history, its power balance, its economy and its ideas."}
    ]}
   ],
   try:[
    {id:"e2u7-l2-x1", type:"sort", q:"Sort each feature: is it typical of an intergovernmental design or a supranational one?", buckets:["Intergovernmental","Supranational"], items:[
      {t:"Decisions are taken only when every member agrees", b:0, why:"Consensus gives each government a veto, so states keep control: the intergovernmental model."},
      {t:"A regional court whose rulings override conflicting national law", b:1, why:"A court above national law is a classic supranational institution, as with the EU’s Court of Justice."},
      {t:"A directly elected regional parliament that helps make binding laws", b:1, why:"Voters choose representatives who share in law-making above the national level: supranational."},
      {t:"Leaders meet once a year and issue a joint statement", b:0, why:"Summits and declarations keep decisions with governments. Nothing binds members against their will."},
      {t:"A regional commission that proposes laws and checks members obey them", b:1, why:"An independent body that can act against a member’s wishes is supranational, like the European Commission."},
      {t:"A small secretariat that organises meetings but cannot make rules", b:0, why:"A secretariat that serves governments without rule-making power fits the intergovernmental model, like ASEAN’s."}
    ]},
    {id:"e2u7-l2-x2", type:"order", q:"Put the steps of economic integration in order, from least to most pooling.", items:[
      {t:"Free trade area: no tariffs between members", why:"The first step: members drop tariffs on each other but keep their own outside tariffs."},
      {t:"Customs union: plus a common tariff on outsiders", why:"Adds one shared tariff wall, so members must also negotiate with outsiders together."},
      {t:"Common market: plus free movement of services, money and people", why:"Adds the free movement of the means of production, not just goods."},
      {t:"Economic and monetary union: plus a shared currency", why:"The deepest step: a common currency and central bank, as in the euro area."}
    ]},
    {id:"e2u7-l2-x3", type:"match", q:"Match each organisation with a feature that belongs to it.", pairs:[
      ["European Union","A court whose rulings on EU law take precedence over national law","The Court of Justice of the EU has held since the 1960s that EU law prevails where the treaties apply."],
      ["African Union","A treaty right to intervene in a member state over genocide, war crimes and crimes against humanity","Article 4(h) of the AU’s Constitutive Act, adopted in 2000."],
      ["ASEAN","Consensus, quiet diplomacy and non-interference, known as its “Way”","The “ASEAN Way” has guided the association since 1967."],
      ["Mercosur","A customs union with a common external tariff","Created in 1991, it applies a common outside tariff, with exceptions."],
      ["Pacific Islands Forum","Declares climate change the single greatest threat to its region","Its 2018 Boe Declaration says so."]
    ]},
    {id:"e2u7-l2-x4", type:"mcq", q:"Countries P and Q remove all tariffs on each other’s goods. P charges 5% on imported bicycles from outside; Q charges 30%. Importers start shipping foreign bicycles into P and then trucking them to Q. What is going on, and what is a standard fix?", options:[
      {t:"P and Q are a free trade area; rules of origin, or a common outside tariff, would stop it", ok:true, why:"Right. In a free trade area each member keeps its own outside tariffs, so goods enter through the cheapest door. Rules of origin limit tariff-free trade to goods really made inside; a customs union removes the gap with one common tariff."},
      {t:"P and Q are a monetary union; they should drop their shared currency", why:"Nothing here involves a shared currency. The problem is different outside tariffs."},
      {t:"P and Q are a customs union; they should raise tariffs on each other", why:"A customs union would already have a common outside tariff, so the gap couldn’t exist."},
      {t:"This is normal free trade and can’t be prevented", why:"It can be managed: that is exactly what rules of origin are for."}
    ]},
    {id:"e2u7-l2-x5", type:"mcq", q:"For decades ASEAN members avoided criticising each other in public and built habits of consultation. Four scholars explain why members still haven’t gone to war with each other. Which explanation is constructivist?", options:[
      {t:"Shared norms of consultation and restraint have become part of how members see themselves and each other", ok:true, why:"Correct. Constructivists explain behaviour through norms and identity: what states come to believe is appropriate."},
      {t:"No member is strong enough to defeat the others, and outside powers balance each other", why:"That explanation rests on the distribution of power: a realist argument."},
      {t:"Members trade so much with each other that war would be too costly", why:"Interdependence raising the cost of war is a classic liberal argument."},
      {t:"Ruling elites cooperate to protect their shared class interests and foreign investment", why:"Explaining cooperation through class and capital is a Marxist or critical argument."}
    ]},
    {id:"e2u7-l2-x6", type:"spot", q:"Tap the claims in this summary that are wrong.", ask:"is wrong", parts:[
      "“",
      {t:"ASEAN was founded in 1967 by five states", flag:false, why:"Correct: Indonesia, Malaysia, the Philippines, Singapore and Thailand signed the Bangkok Declaration."},
      " and ",
      {t:"now has a shared currency like the euro.", flag:true, why:"ASEAN has no shared currency. Its members keep their own currencies."},
      " ",
      {t:"The African Union replaced the Organisation of African Unity in 2002.", flag:false, why:"Correct: the AU was launched in Durban in 2002."},
      " ",
      {t:"Mercosur is a military alliance of South American states.", flag:true, why:"Mercosur is a trade bloc, a customs union, not a military alliance."},
      " ",
      {t:"The EU has 27 members.", flag:false, why:"Correct since the United Kingdom left in 2020."},
      " ",
      {t:"All regional organisations are slowly turning into copies of the EU.", flag:true, why:"Many deliberately keep intergovernmental designs. There is no single path all regions follow."},
      "”"
    ]}
   ],
   apply:{intro:"Look at regional cooperation from where you are. Official sites are free to read and need no account.", tasks:[
     {t:"Map your country’s regional memberships", how:["Search for your country’s foreign ministry page listing the regional organisations it belongs to, or look at the member lists on the organisations’ own sites.","Pick two of them.","For each, note when it was founded, how many members it has, and whether it works mainly by consensus or has institutions that can bind members."], write:"Organisation 1: founded, members, design, one thing it does. Organisation 2: the same…"},
     {t:"Read a founding text", how:["Choose one short founding document: the ASEAN Declaration (1967, about two pages), Articles 3 and 4 of the African Union’s Constitutive Act, or the Schuman Declaration (1950).","List the aims it states.","Find one sentence about sovereignty or interference. What does it promise?"], write:"Document, three aims it lists, and the sentence about sovereignty in your own words…"},
     {t:"Find the region in one product", how:["Pick something you own or eat that came from another country.","Check where it was made or grown.","Search whether that country and yours belong to the same free trade area or customs union, or have a trade agreement."], write:"The product, where it came from, and whether a regional or bilateral trade deal covers it…"}
   ], proof:"Notes describing two regional organisations your country belongs to and their design, the stated aims of one founding document, and one product traced to a trade arrangement."},
   read:[
     {book:"ospol", where:"Section 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"Read it after this lesson for more on the EU, the AU and ASEAN."},
     {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Its discussion of how much independence international organisations have applies to regional bodies too."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u7-l3", title:"International law and the courts", minutes:55,
   hook:{q:"Louis Henkin, a leading 20th-century scholar of international law, wrote one sentence about how often states obey it. People still quote it. What did it say?", options:["Almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time","International law is not really law, because nobody can enforce it","States obey international law only when a great power is watching","International law is whatever the strongest state says it is"], answer:0, reveal:"**“Almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time.”** It comes from his book *How Nations Behave* (first published 1968). It is an observation, not a measurement, and critics point out that the rules broken can be the most important ones. But it captures something easy to miss: violations make headlines, while everyday compliance (on mail, flights, borders, embassies, the sea) is invisible. This lesson explains where the rules come from and why states mostly follow them without a world police."},
   goals:[
     "Explain how international law differs from the law inside a country",
     "Name the sources of international law in Article 38 of the ICJ Statute, and tell treaties from customary law",
     "Put the steps of a treaty’s life cycle in order and explain what signing and ratifying mean",
     "Explain why states usually comply without a world police, as each IR lens sees it",
     "Tell the International Court of Justice from the International Criminal Court: who each one judges and how"
   ],
   learn:[
    {h:"Law without a world police", body:[
      {lead:"Imagine fishing villages sharing one lake. There is no police force on the water, but over the years they have agreed net sizes and fishing seasons. Most villages keep to them, because they want the others to keep to them too."},
      "That is the basic situation of [[international-law|international law]]: the rules that bind states (and, increasingly, international organisations and individuals) in their dealings with each other. Inside a country, [[law]] is made by a legislature, applied by courts with compulsory jurisdiction and enforced by police. Internationally, none of those exist in the same form.",
      {table:[
        ["","Inside a country","Between states"],
        ["Who makes the rules?","A parliament or other law-maker","Mostly the states themselves, by agreement and practice"],
        ["Must you go to court?","Yes, if someone sues you","Only if the state has consented to the court"],
        ["Who enforces?","Police, courts, prisons","Other states, international bodies and the costs of breaking rules"]
      ]},
      "Because states are [[sovereignty|sovereign]], the starting point is **consent**: a state is generally bound by rules it has accepted, either in writing or by its conduct. This is why some people ask whether international law is “really law”. Most international lawyers answer yes: the rules exist, states argue in their terms, courts apply them, and breaking them has costs. What is different is how they are made and enforced.",
      {tip:"This lesson is about **public international law**, the law between states. **Private international law** deals with ordinary cross-border cases, such as which country’s courts hear a dispute over an international sale."}
    ]},
    {h:"Where the rules come from", body:[
      "The standard list of sources is in Article 38(1) of the Statute of the International Court of Justice, a treaty attached to the UN Charter. It tells the Court to apply:",
      {fig:'<svg viewBox="0 0 340 352"><text x="170" y="20" text-anchor="middle">Article 38(1), ICJ Statute</text><rect class="d-lup" x="10" y="34" width="320" height="60" rx="8" stroke-width="2"/><text x="22" y="56">(a) Treaties</text><text class="s" x="22" y="76">written agreements between states</text><rect class="d-gold" x="10" y="104" width="320" height="60" rx="8" stroke-width="2"/><text x="22" y="126">(b) Customary law</text><text class="s" x="22" y="146">general practice + belief it is required</text><rect class="d-sage" x="10" y="174" width="320" height="60" rx="8" stroke-width="2"/><text x="22" y="196">(c) General principles of law</text><text class="s" x="22" y="216">shared by legal systems, e.g. good faith</text><rect class="d-ink" x="10" y="254" width="320" height="60" rx="8" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/><text x="22" y="276">(d) Helpers, not sources</text><text class="s" x="22" y="296">court decisions, writings of top scholars</text><text class="s" x="170" y="340" text-anchor="middle">Solid: sources of law. Dashed: ways to identify it.</text></svg>', alt:"Article 38(1) of the ICJ Statute: (a) treaties, written agreements between states; (b) customary law, general practice plus the belief that it is required; (c) general principles of law shared by legal systems, such as good faith; and, shown dashed, (d) court decisions and the writings of leading scholars as subsidiary means of identifying the law.", cap:"Article 38(1) lists three sources and two “subsidiary means” for working out what the law is."},
      {h:"Treaties"},
      "A [[treaty]] is a written agreement between states (or international organisations) governed by international law. Treaties have many names: convention, covenant, protocol, charter, agreement, statute. A treaty binds only its parties. The rule that treaties must be kept in good faith is called **pacta sunt servanda** (“agreements must be kept”), written into the 1969 Vienna Convention on the Law of Treaties.",
      {h:"Customary law"},
      "[[customary-international-law|Customary international law]] is unwritten law that grows from what states do. It needs **two** ingredients: a general and consistent **state practice**, and [[opinio-juris|opinio juris]], the belief that the practice is legally required, not just polite or convenient. Custom binds all states, not only those that took part in forming it (with narrow exceptions).",
      {ex:"For centuries states treated foreign ambassadors as immune from arrest, and they did so because they believed they had to. That was customary law long before the 1961 Vienna Convention on Diplomatic Relations wrote it down. By contrast, ships dipping their flags to salute each other is a courtesy: states do it, but nobody thinks it is legally required, so it is not custom.", label:"Worked example: custom or courtesy?"},
      {h:"General principles and helpers"},
      "[[general-principles-of-law|General principles of law]] fill gaps with principles found across the world’s legal systems, such as good faith or the idea that a party cannot profit from its own wrongdoing. Article 38 calls them principles “recognized by civilized nations”, a phrase from 1920 that many lawyers now see as an embarrassing colonial-era relic. Court decisions and the writings of leading scholars are not sources themselves, but help identify what the law is.",
      {h:"A small set of rules above the rest"},
      "A few norms are so fundamental that no treaty may override them. These are [[jus-cogens|jus cogens]] (peremptory) norms, defined in Article 53 of the Vienna Convention. The UN’s International Law Commission has listed widely recognised examples: the bans on aggression, genocide, crimes against humanity, slavery, torture, and racial discrimination and apartheid, plus basic rules of the [[international-humanitarian-law|law of war]] and the right of peoples to [[self-determination]]."
    ]},
    {h:"A treaty’s life cycle", body:[
      "Treaties are made in steps, and the steps matter, because a state that has only signed is usually not yet bound.",
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="e2u7-l3-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><g stroke-width="2"><rect class="d-soft" x="30" y="8" width="280" height="54" rx="8"/><rect class="d-lup" x="30" y="86" width="280" height="54" rx="8"/><rect class="d-gold" x="30" y="164" width="280" height="54" rx="8"/><rect class="d-sage" x="30" y="242" width="280" height="54" rx="8"/><rect class="d-rose" x="30" y="320" width="280" height="54" rx="8"/></g><g class="d-ink" stroke-width="2"><path d="M170 62 L170 82" marker-end="url(#e2u7-l3-a)"/><path d="M170 140 L170 160" marker-end="url(#e2u7-l3-a)"/><path d="M170 218 L170 238" marker-end="url(#e2u7-l3-a)"/><path d="M170 296 L170 316" marker-end="url(#e2u7-l3-a)"/></g><text x="170" y="30" text-anchor="middle">1 Negotiate</text><text class="s" x="170" y="50" text-anchor="middle">diplomats agree a text</text><text x="170" y="108" text-anchor="middle">2 Adopt and sign</text><text class="s" x="170" y="128" text-anchor="middle">“we intend to join”: not yet bound</text><text x="170" y="186" text-anchor="middle">3 Ratify</text><text class="s" x="170" y="206" text-anchor="middle">approved at home, then deposited</text><text x="170" y="264" text-anchor="middle">4 Enter into force</text><text class="s" x="170" y="284" text-anchor="middle">once enough states have ratified</text><text x="170" y="342" text-anchor="middle">5 Implement and review</text><text class="s" x="170" y="362" text-anchor="middle">laws changed, reports, meetings</text><text class="s" x="170" y="394" text-anchor="middle">A state may also join later by accession.</text></svg>', alt:"Five steps from top to bottom: negotiate a text; adopt and sign (intention to join, not yet bound); ratify (approved at home and deposited); enter into force once enough states have ratified; implement and review. States may also join later by accession.", cap:"The treaty life cycle. Each country decides its own ratification procedure: a parliamentary vote, a presidential decree or a referendum."},
      {list:[
        "**Signing** usually shows an intention to become bound. Under Article 18 of the Vienna Convention, a state that has signed should not act to defeat the treaty’s object and purpose until it makes clear it will not join, but it is not yet bound by the treaty’s rules.",
        "**[[ratification|Ratification]]** is the formal act of consenting to be bound, after the country’s own approval process. The state then deposits its instrument of ratification with the depositary, often the UN Secretary-General.",
        "**Entry into force** often waits for a threshold. The [[paris-agreement|Paris climate agreement]], adopted in December 2015, needed at least 55 parties covering at least 55% of global greenhouse gas emissions; it entered into force on 4 November 2016.",
        "States can sometimes attach **reservations** (opting out of particular clauses, if the treaty allows) and can **withdraw** under the treaty’s own rules."
      ]}
    ]},
    {h:"Why states comply", body:[
      "If nobody can arrest a state, why do states mostly follow the rules? Several reasons work together.",
      {list:[
        "**Reciprocity**: a state that mistreats foreign diplomats can expect its own diplomats to be mistreated.",
        "**Coordination and self-interest**: many rules, like air traffic or postal standards, simply make life easier. Breaking them would hurt the breaker.",
        "**Reputation**: a state known for breaking promises finds it harder to make deals.",
        "**Domestic law**: many countries build treaty rules into their own law, so their own courts and officials apply them.",
        "**Habit and identity**: officials are trained in the rules and see following them as what a respectable state does."
      ]},
      "When rules are broken, there are responses: protests, cases in court, **countermeasures** (lawful steps a wronged state takes to push the wrongdoer to comply), [[sanctions]] and, in the gravest cases, Security Council action. Enforcement is decentralised, slow and uneven, especially against powerful states.",
      {h:"Through the lenses"},
      {table:[
        ["Lens","How it sees international law"],
        ["{{realism|Realism}}","Law mirrors power. States obey when it suits them and break it when vital interests are at stake."],
        ["{{liberalism-ir|Liberal institutionalism}}","Law and institutions reduce uncertainty and make cooperation cheaper, so states have good reasons to keep them."],
        ["{{constructivism|Constructivism}}","Legal norms shape what states see as legitimate and who they think they are."],
        ["Critical and postcolonial views","Much international law was made when most of the world was colonised, and it is enforced selectively. Scholars in the **Third World Approaches to International Law** (TWAIL) movement, such as Antony Anghie, trace these roots while also showing how newer states used law to win independence and rights."]
      ]}
    ]},
    {h:"Two courts in The Hague", body:[
      "The two best-known international courts are often confused, partly because both sit in The Hague. The key question is **who is on trial**.",
      {fig:'<svg viewBox="0 0 340 340"><rect class="d-lup" x="8" y="8" width="158" height="322" rx="10" stroke-width="2"/><rect class="d-rose" x="174" y="8" width="158" height="322" rx="10" stroke-width="2"/><text x="87" y="34" text-anchor="middle">ICJ</text><text class="s" x="87" y="52" text-anchor="middle">Court of Justice</text><text x="253" y="34" text-anchor="middle">ICC</text><text class="s" x="253" y="52" text-anchor="middle">Criminal Court</text><g class="s"><text x="20" y="84">Judges: states</text><text x="20" y="102">State v. state</text><text x="20" y="134">Part of the UN</text><text x="20" y="152">(set up 1945)</text><text x="20" y="184">Needs both states’</text><text x="20" y="202">consent</text><text x="20" y="234">No prisons:</text><text x="20" y="252">rulings, not</text><text x="20" y="270">sentences</text><text x="20" y="302">Also: advisory</text><text x="20" y="320">opinions</text><text x="186" y="84">Judges: people</text><text x="186" y="102">Prosecutor v. person</text><text x="186" y="134">Independent of the</text><text x="186" y="152">UN (Rome Statute)</text><text x="186" y="184">Four gravest crimes</text><text x="186" y="202">(genocide, etc.)</text><text x="186" y="234">Can imprison, but</text><text x="186" y="252">relies on states</text><text x="186" y="270">to make arrests</text><text x="186" y="302">Last resort after</text><text x="186" y="320">national courts</text></g></svg>', alt:"Two columns. ICJ: judges states, state against state, part of the UN since 1945, needs both states’ consent, gives rulings not sentences, also gives advisory opinions. ICC: judges individuals, prosecutor against a person, independent of the UN under the Rome Statute, covers the four gravest crimes, can imprison but relies on states to arrest, acts only as a last resort after national courts.", cap:"Same city, different jobs: the ICJ settles disputes between states; the ICC tries individuals."},
      {h:"The International Court of Justice (ICJ)"},
      "The [[international-court-of-justice|ICJ]] is the UN’s principal judicial organ. Its 15 judges, from different regions and legal traditions, are elected for nine years by the General Assembly and the Security Council voting separately. Only **states** can be parties to its cases, and only if they have consented: by a special agreement, by a treaty clause sending disputes to the Court, or by a declaration accepting its jurisdiction in advance. UN bodies can also ask it for an [[advisory-opinion|advisory opinion]].",
      {list:[
        "**Cameroon v. Nigeria (2002)**: the Court ruled on a long-disputed land and sea boundary, including the Bakassi peninsula. Under an agreement mediated by the UN in 2006, Nigeria handed the area over, a process completed in 2008.",
        "**Nicaragua v. United States (1986)**: the Court found that US support for armed rebels in Nicaragua broke international law. The United States disputed the Court’s jurisdiction, withdrew from the main phase of the case and did not comply with the judgment, a reminder of the limits of a court without enforcement.",
        "**Climate change (2025)**: at the request of the General Assembly, the Court gave a unanimous advisory opinion on states’ legal obligations to protect the climate system."
      ]},
      {h:"The International Criminal Court (ICC)"},
      "The [[international-criminal-court|ICC]] was created by the **Rome Statute**, adopted on 17 July 1998, which entered into force on 1 July 2002. It is a separate treaty organisation, not part of the UN. It tries **individuals**, including heads of state, for four crimes: [[genocide]], [[crimes-against-humanity|crimes against humanity]], [[war-crimes|war crimes]] and the crime of aggression.",
      {list:[
        "**[[complementarity|Complementarity]]**: the ICC acts only when national courts are unwilling or unable to genuinely investigate and prosecute. It is a court of last resort.",
        "**Jurisdiction**: it can act over crimes committed on the territory of a state party or by a state party’s national, over situations the Security Council refers to it, and where a non-member accepts its jurisdiction.",
        "**Membership**: 125 states were parties as of November 2026, though several had given notice to leave in 2027 (a withdrawal takes effect one year after notice). Several major powers, including China, India, Russia and the United States, are not.",
        "**Enforcement**: it has no police. Arrests depend on states’ cooperation."
      ]},
      "The ICC is debated. The AU and others criticised its early focus on African situations; defenders note that several of those cases were referred to the Court by the African governments concerned, and that it has since opened investigations on other continents. Before the ICC, the Security Council had set up temporary tribunals for the former Yugoslavia (1993) and Rwanda (1994).",
      {h:"Common misconceptions"},
      {list:[
        "“The ICJ tries war criminals.” No: it hears cases between states. Individuals are tried by the ICC, special tribunals or national courts.",
        "“The ICC is the UN’s court.” It is an independent treaty body, though the Security Council can refer situations to it.",
        "“Signing a treaty binds a state.” Usually only ratification (or accession) does.",
        "“General Assembly resolutions are international law.” Mostly they are recommendations, though they can be evidence of what states believe the law is."
      ]},
      {key:"International law is made mainly by states, binds them mainly through consent, and is enforced mainly by states themselves. That makes it weaker than national law at stopping the powerful, and stronger than its reputation in the countless routine matters it quietly governs."}
    ]}
   ],
   try:[
    {id:"e2u7-l3-x1", type:"sort", q:"Sort each item by the category of Article 38(1) it belongs to.", buckets:["Treaty","Customary law","General principle","Helps identify the law"], items:[
      {t:"The Vienna Convention on Diplomatic Relations (1961)", b:0, why:"A written agreement between states: a treaty."},
      {t:"For centuries, states treated envoys as immune from arrest because they believed they had to", b:1, why:"General practice plus opinio juris, the belief that it is legally required: customary law."},
      {t:"Good faith, a principle found in legal systems all over the world", b:2, why:"Principles shared across legal systems are general principles of law."},
      {t:"An earlier ICJ judgment that a lawyer cites to show what the rule is", b:3, why:"Judicial decisions are subsidiary means: they help identify the law but are not a source themselves."},
      {t:"A respected book on the law of the sea by a leading scholar", b:3, why:"Writings of highly qualified scholars are also subsidiary means."},
      {t:"The UN Convention on the Law of the Sea (1982)", b:0, why:"Another written agreement: a treaty, binding on its parties."}
    ]},
    {id:"e2u7-l3-x2", type:"mcq", q:"For decades, nearly every state has sent condolence messages when another country’s head of state dies. No government thinks it is legally required. Is this customary international law?", options:[
      {t:"No: there is practice but no opinio juris, so it is a courtesy, not custom", ok:true, why:"Correct. Custom needs both general practice and the belief that the practice is legally required. Without that belief, it is international courtesy (comity)."},
      {t:"Yes: anything nearly every state does for decades becomes custom", why:"Practice alone isn’t enough. States must also act out of a sense of legal obligation."},
      {t:"Yes, but only for states that have signed a treaty on it", why:"Custom is unwritten and doesn’t depend on signing anything. The issue here is the missing belief in obligation."},
      {t:"No, because custom can only come from the General Assembly", why:"Custom comes from what states do and believe, not from Assembly votes."}
    ]},
    {id:"e2u7-l3-x3", type:"order", q:"Put the steps of a multilateral treaty’s life cycle in order.", items:[
      {t:"Diplomats negotiate the text", why:"Everything starts with agreeing what the treaty will say."},
      {t:"The text is adopted and states sign it", why:"Signing shows an intention to join; it usually doesn’t yet bind."},
      {t:"Each state approves it through its own procedure and deposits its ratification", why:"Ratification is the formal consent to be bound."},
      {t:"Enough ratifications arrive and the treaty enters into force", why:"Many treaties set a threshold, such as a minimum number of parties."},
      {t:"Parties change their laws, report and meet to review it", why:"Implementation and review keep the treaty working after it is in force."}
    ]},
    {id:"e2u7-l3-x4", type:"mcq", q:"Country K signed a treaty two years ago but its parliament has not ratified it. Which statement is most accurate?", options:[
      {t:"K is not yet bound by the treaty’s rules, but should not act to defeat its object and purpose while it remains a signatory", ok:true, why:"Correct. Signature usually expresses intent only. Article 18 of the Vienna Convention adds a limited duty not to undermine the treaty while K hasn’t made clear it won’t join."},
      {t:"K is fully bound, because signing is the same as ratifying", why:"For most treaties, signature is subject to ratification. Only ratification, accession or a similar act binds."},
      {t:"K can be taken to the ICJ for not ratifying", why:"There is no duty to ratify a treaty one has signed."},
      {t:"The treaty is invalid for everyone until K ratifies", why:"A treaty’s entry into force depends on its own threshold, not on any single signatory."}
    ]},
    {id:"e2u7-l3-x5", type:"match", q:"Which body would normally deal with each situation?", pairs:[
      ["Two states disagree about where their maritime border lies, and both accept the Court","International Court of Justice (a contentious case)","Disputes between consenting states are the ICJ’s core job."],
      ["The General Assembly wants the law on states’ climate obligations clarified","International Court of Justice (an advisory opinion)","UN organs can request advisory opinions; the Assembly did exactly this, and the Court answered in 2025."],
      ["A militia commander is accused of recruiting children under 15 as fighters, and no national court will act","International Criminal Court","It tries individuals for war crimes when national courts are unwilling or unable."],
      ["A war crimes suspect is being genuinely prosecuted by their own country’s courts","National courts, with the ICC standing back","Complementarity: a genuine national case keeps the ICC out."]
    ]},
    {id:"e2u7-l3-x6", type:"spot", q:"Tap the mistakes in this opinion piece.", ask:"is a mistake", parts:[
      "“",
      {t:"The International Criminal Court, the UN’s own court,", flag:true, why:"The ICC is an independent treaty body created by the Rome Statute, not a UN organ. The ICJ is the UN’s principal court."},
      " ",
      {t:"was created by the Rome Statute", flag:false, why:"Correct: adopted in 1998, in force since 2002."},
      " and ",
      {t:"can try anyone in the world for any crime.", flag:true, why:"It covers only four crimes, and only where it has jurisdiction (state parties’ territory or nationals, Security Council referrals or accepted jurisdiction)."},
      " ",
      {t:"It steps in only when national courts are unwilling or unable to act.", flag:false, why:"Correct: this is the principle of complementarity."},
      " Meanwhile ",
      {t:"the International Court of Justice sends convicted leaders to prison.", flag:true, why:"The ICJ judges disputes between states and has no criminal jurisdiction over people."},
      " ",
      {t:"Its judgments bind the states that are parties to a case.", flag:false, why:"Correct: under the Charter and the Court’s Statute, parties must comply, even if enforcement is weak."},
      "”"
    ]},
    {id:"e2u7-l3-x7", type:"mcq", q:"Rules for sending mail between countries are almost never broken, even by states that break other rules. What best explains this?", options:[
      {t:"The rules solve a coordination problem: every state gains from following them and would lose by breaking them", ok:true, why:"Right. When a rule makes life easier for everyone and costs little, self-interest and reciprocity keep states in line without any police."},
      {t:"A world police force inspects every post office", why:"There is no such force. Compliance here comes from shared benefit."},
      {t:"The Security Council has imposed sanctions to enforce postal rules", why:"The Council deals with threats to peace and security, not mail."},
      {t:"Postal rules are jus cogens norms that no state may break", why:"Jus cogens covers a small set of fundamental norms such as the ban on genocide. Postal rules are ordinary treaty rules."}
    ]}
   ],
   apply:{intro:"Read the law itself. The UN’s treaty and court websites are free and need no account.", tasks:[
     {t:"Look up one treaty’s status", how:["Open the UN Treaty Collection (treaties.un.org) and choose “Status of Treaties”, or search the web for the treaty’s name plus “status”.","Pick a treaty from this unit, such as the Rome Statute or the Convention on the Rights of the Child.","Find your country (or any country) in the list: did it sign, ratify or accede, and when? Did it make reservations?"], write:"Treaty, country, signed on, ratified or acceded on, any reservations, and what the difference means…"},
     {t:"Read the summary of one ICJ case", how:["Open the ICJ website (icj-cij.org) and choose “Cases”.","Pick one finished case and open the press release or summary of the judgment or opinion.","Note who the parties were, what they disagreed about, what the Court decided, and how the Court had jurisdiction."], write:"Case name, parties, the question, the decision, and the basis of jurisdiction…"},
     {t:"Spot international law in a news story", how:["Find one news story that mentions international law, a treaty or a court.","Note which source of law it relies on (a treaty, custom, a court ruling) and which body is involved.","Check whether the story confuses the ICJ and the ICC, or treats a recommendation as binding."], write:"The story, the law it mentions, the body involved, and anything it got wrong or left unclear…"}
   ], proof:"Notes on one treaty’s signature and ratification record, one ICJ case summary in your own words, and one news story checked for legal accuracy."},
   read:[
     {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach)", note:"Read it after this lesson: it adds the debate about whether international law constrains powerful states."},
     {book:"ospol", where:"Section 15.2 “International Law”", note:"A short, clear account of treaties, custom and the two courts."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u7-l4", title:"Human rights and the responsibility to protect", minutes:55,
   hook:{q:"The first draft of Article 1 of the Universal Declaration of Human Rights began “All men are born free and equal”. One delegate is widely credited with getting it changed to “All human beings”. Who?", options:["Eleanor Roosevelt of the United States","Hansa Mehta of India","René Cassin of France","Charles Malik of Lebanon"], answer:1, reveal:"**Hansa Mehta**, an Indian reformer and campaigner for women’s rights, is widely credited with the change. Eleanor Roosevelt chaired the drafting committee, and Cassin and Malik were key drafters too: the Declaration was shaped by people from many traditions, including P. C. Chang of China. This lesson follows human rights from that declaration to today’s treaties and courts, and then to the hardest question: what the world should do when a government turns on its own people."},
   goals:[
     "Explain what human rights are and why the UN’s founding made them an international matter",
     "Describe the Universal Declaration, the core human rights treaties and how the UN monitors them",
     "Compare the regional human rights systems of Europe, the Americas and Africa, and what exists in Asia",
     "Explain the responsibility to protect: where it came from, its three pillars and the debates about it"
   ],
   learn:[
    {h:"Rights you carry everywhere", body:[
      {lead:"Most rules belong to a place: the rules of a club, a school or a country. Human rights are meant to be different: rights you have simply because you are human, wherever you are and whoever governs you."},
      "Before 1945, how a government treated its own people was mostly seen as its own business, part of its [[sovereignty]]. The Holocaust and other atrocities of the Second World War changed that. The UN Charter made promoting “respect for human rights and for fundamental freedoms for all without distinction as to race, sex, language, or religion” one of the UN’s purposes.",
      "[[human-rights|Human rights]] in international law are rights that every person holds, which states have duties to **respect** (not violate them), **protect** (stop others violating them) and **fulfil** (take steps so people can enjoy them).",
      {key:"Human rights law is unusual international law: it is made by states, but it protects people, often against their own state."}
    ]},
    {h:"The Universal Declaration (1948)", body:[
      "The UN’s Commission on Human Rights, chaired by Eleanor Roosevelt, drafted the [[universal-declaration-human-rights|Universal Declaration of Human Rights (UDHR)]]. Its drafters included P. C. Chang of China, Charles Malik of Lebanon, René Cassin of France, Hansa Mehta of India and John Humphrey of Canada, who prepared the first draft.",
      "The General Assembly adopted it in Paris on **10 December 1948**, now Human Rights Day: 48 states voted in favour, none against, and 8 abstained (six communist states of Eastern Europe, including the USSR and Yugoslavia, plus Saudi Arabia and South Africa). Its 30 articles cover two broad families of rights:",
      {table:[
        ["Civil and political rights","Economic, social and cultural rights"],
        ["Life, liberty and security of person","Social security"],
        ["Freedom from torture and slavery","Work, fair pay and rest"],
        ["Fair trial and equality before the law","An adequate standard of living, including food and housing"],
        ["Freedom of thought, religion, expression and assembly","Education"],
        ["Taking part in government, through free elections","Taking part in cultural life"]
      ]},
      "The UDHR is a **declaration**, not a treaty, so it was not legally binding when adopted. It has since inspired dozens of national constitutions, and many international lawyers consider that some of its provisions, such as the ban on torture, have become [[customary-international-law|customary law]]."
    ]},
    {h:"From declaration to treaties", body:[
      "Turning the Declaration into binding law took two treaties, adopted in 1966 and in force in 1976: the **International Covenant on Civil and Political Rights** and the **International Covenant on Economic, Social and Cultural Rights**. With the UDHR they form the “International Bill of Human Rights”. Other core treaties followed:",
      {table:[
        ["Treaty (common short name)","Adopted"],
        ["Elimination of Racial Discrimination (ICERD)","1965"],
        ["Civil and Political Rights (ICCPR); Economic, Social and Cultural Rights (ICESCR)","1966"],
        ["Elimination of Discrimination against Women (CEDAW)","1979"],
        ["Against Torture (CAT)","1984"],
        ["Rights of the Child (CRC)","1989"],
        ["Rights of Migrant Workers and their Families","1990"],
        ["Rights of Persons with Disabilities; Protection from Enforced Disappearance","2006"]
      ]},
      "The Convention on the Rights of the Child is the most widely ratified human rights treaty: every UN member except the United States, which has signed it, is a party.",
      {h:"How the UN watches"},
      {list:[
        "**[[treaty-body|Treaty bodies]]**: each core treaty has a committee of independent experts. States send it regular reports, the committee questions them and issues recommendations, and some committees hear complaints from individuals if the state has accepted that procedure.",
        "**The [[human-rights-council|Human Rights Council]]**: 47 states elected by the General Assembly, created in 2006 to replace the Commission on Human Rights. Through the [[universal-periodic-review|Universal Periodic Review]], every UN member’s record is examined by other states every few years.",
        "**Independent experts** (“special rapporteurs”) investigate themes or countries, and the **Office of the High Commissioner for Human Rights** (created in 1993) supports the whole system."
      ]},
      {h:"A real debate: universal or relative?"},
      "In 1993, a meeting of Asian governments issued the Bangkok Declaration, which accepted universal rights but stressed national and regional differences and warned against using rights to interfere in states’ affairs. A few months later, the UN’s World Conference in Vienna declared that all human rights are “universal, indivisible and interdependent and interrelated”. Supporters of universality stress that the Declaration was drafted by people of many cultures and that rights protect individuals against those in power. Critics, including some postcolonial scholars, ask whose values and priorities dominate, and point out that powerful states criticise others more readily than themselves. Both points are discussed seriously by scholars from every region."
    ]},
    {h:"Regional systems", body:[
      "Some regions have built their own human rights systems, often stronger than the UN’s, because they include courts.",
      {table:[
        ["Region","Main treaty","Court or body"],
        ["Europe (46 states of the Council of Europe, a separate body from the EU)","European Convention on Human Rights, 1950","European Court of Human Rights, Strasbourg; binding judgments; individuals can apply"],
        ["The Americas (Organization of American States)","American Convention on Human Rights, 1969 (in force 1978)","Inter-American Commission (Washington) and Inter-American Court (San José, Costa Rica)"],
        ["Africa (African Union)","African Charter on Human and Peoples’ Rights, 1981 (in force 1986)","African Commission (Banjul) and African Court (Arusha, Tanzania, set up under a protocol that came into force in 2004)"],
        ["Southeast Asia (ASEAN)","ASEAN Human Rights Declaration, 2012","An intergovernmental commission (since 2009); no court"]
      ]},
      "The African Charter is distinctive: alongside individual rights it includes **peoples’ rights** (such as self-determination and development) and **duties** of individuals towards family and community. Asia and the Pacific have no region-wide human rights court; the Arab League adopted an Arab Charter on Human Rights in 2004.",
      {fig:'<svg viewBox="0 0 340 372"><defs><marker id="e2u7-l4-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><g stroke-width="2"><rect class="d-soft" x="40" y="8" width="260" height="52" rx="8"/><rect class="d-lup" x="40" y="86" width="260" height="52" rx="8"/><rect class="d-gold" x="8" y="172" width="156" height="66" rx="8"/><rect class="d-gold" x="176" y="172" width="156" height="66" rx="8"/><rect class="d-sage" x="40" y="272" width="260" height="52" rx="8"/></g><g class="d-ink" stroke-width="2" fill="none"><path d="M170 60 L170 82" marker-end="url(#e2u7-l4-a)"/><path d="M140 138 L96 168" marker-end="url(#e2u7-l4-a)"/><path d="M200 138 L244 168" marker-end="url(#e2u7-l4-a)"/><path d="M86 238 L130 268" marker-end="url(#e2u7-l4-a)"/><path d="M254 238 L210 268" marker-end="url(#e2u7-l4-a)"/></g><text x="170" y="30" text-anchor="middle">A person’s rights are violated</text><text class="s" x="170" y="48" text-anchor="middle">by their own state’s officials</text><text x="170" y="108" text-anchor="middle">National courts first</text><text class="s" x="170" y="126" text-anchor="middle">“exhaust domestic remedies”</text><text x="86" y="196" text-anchor="middle">Regional court</text><text class="s" x="86" y="214" text-anchor="middle">if the state accepts it:</text><text class="s" x="86" y="230" text-anchor="middle">a binding judgment</text><text x="254" y="196" text-anchor="middle">UN treaty body</text><text class="s" x="254" y="214" text-anchor="middle">if the state accepts it:</text><text class="s" x="254" y="230" text-anchor="middle">“views”, not binding</text><text x="170" y="294" text-anchor="middle">The state is asked to act</text><text class="s" x="170" y="312" text-anchor="middle">pay, change a law, reopen a case</text><text class="s" x="170" y="348" text-anchor="middle">Follow-up is monitored, but nobody</text><text class="s" x="170" y="364" text-anchor="middle">can force a state to comply.</text></svg>', alt:"Flow: a person’s rights are violated by their state; they go to national courts first; then, if the state has accepted it, to a regional court (binding judgment) or a UN treaty body (non-binding views); the state is asked to act, such as paying compensation, changing a law or reopening a case. Follow-up is monitored but compliance can’t be forced.", cap:"How an individual complaint usually travels. International bodies are a backstop, not a first stop."}
    ]},
    {h:"When states fail: Rwanda, Srebrenica and a hard question", body:[
      "Human rights treaties assume a government that is willing to protect its people. What if the government itself is the threat?",
      "In **Rwanda**, over about 100 days from April 1994, hundreds of thousands of people were murdered, most of them Tutsi, along with moderate Hutu and others who opposed the killing. The UN now calls it the 1994 genocide against the Tutsi in Rwanda. A small UN peacekeeping force was already in the country; instead of reinforcing it, the Security Council cut it sharply in April 1994. A UN-commissioned independent inquiry later described a failure of the whole UN system.",
      "In **Srebrenica**, in Bosnia and Herzegovina, in July 1995, more than 8,000 Bosniak men and boys were killed after Bosnian Serb forces overran a town the UN had declared a “safe area”. International courts later ruled that this was genocide.",
      "Then in 1999 NATO bombed Yugoslavia over Kosovo **without** Security Council authorisation. Some called it a necessary rescue, others an illegal use of force. An independent commission famously called it “illegal but legitimate”, which shows the tension clearly.",
      "In 2000 Secretary-General Kofi Annan put the dilemma to the world: if humanitarian intervention is an unacceptable assault on sovereignty, how should we respond to a Rwanda or a Srebrenica?"
    ]},
    {h:"The responsibility to protect (R2P)", body:[
      "One answer came from the International Commission on Intervention and State Sovereignty, set up by Canada and co-chaired by Gareth Evans of Australia and Mohamed Sahnoun of Algeria. Its 2001 report, *The Responsibility to Protect*, built on an idea developed by the Sudanese diplomat Francis Deng and colleagues: **sovereignty as responsibility**. Sovereignty, they argued, is not only a shield; it carries a duty to protect one’s people. The African Union had already written a right to intervene into its Constitutive Act in 2000.",
      "At the **2005 World Summit**, world leaders endorsed a version of the [[responsibility-to-protect|responsibility to protect]] in paragraphs 138 and 139 of the Outcome Document. It covers four things only: **genocide, war crimes, ethnic cleansing and crimes against humanity**. In 2009 Secretary-General Ban Ki-moon described it as three pillars:",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-panel" x="10" y="8" width="320" height="58" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Protect people from four crimes</text><text class="s" x="170" y="52" text-anchor="middle">genocide, war crimes, ethnic cleansing, CAH</text><g stroke-width="2"><rect class="d-lup" x="10" y="80" width="98" height="200" rx="8"/><rect class="d-gold" x="121" y="80" width="98" height="200" rx="8"/><rect class="d-rose" x="232" y="80" width="98" height="200" rx="8"/></g><text x="59" y="106" text-anchor="middle">Pillar 1</text><text x="170" y="106" text-anchor="middle">Pillar 2</text><text x="281" y="106" text-anchor="middle">Pillar 3</text><g class="s" text-anchor="middle"><text x="59" y="136">Each state</text><text x="59" y="154">protects its</text><text x="59" y="172">own people</text><text x="170" y="136">Others help</text><text x="170" y="154">states do this:</text><text x="170" y="172">advice, training,</text><text x="170" y="190">aid</text><text x="281" y="136">If a state is</text><text x="281" y="154">manifestly</text><text x="281" y="172">failing: timely,</text><text x="281" y="190">decisive action</text><text x="281" y="208">through the UN,</text><text x="281" y="226">force only with</text><text x="281" y="244">Security Council</text><text x="281" y="262">approval</text></g><text class="s" x="170" y="306" text-anchor="middle">CAH = crimes against humanity.</text><text class="s" x="170" y="322" text-anchor="middle">Most R2P work is prevention (pillars 1 and 2).</text></svg>', alt:"A roof labelled ‘protect people from four crimes: genocide, war crimes, ethnic cleansing, crimes against humanity’ rests on three pillars. Pillar 1: each state protects its own people. Pillar 2: others help states do this through advice, training and aid. Pillar 3: if a state is manifestly failing, timely and decisive collective action through the UN, with force only with Security Council approval.", cap:"The three pillars of R2P, as set out in the Secretary-General’s 2009 report."},
      {warn:"R2P is a political commitment, not a new legal right to invade. Using force still requires the Security Council under the Charter, and military action is a last resort within pillar three, which also includes diplomacy and sanctions."},
      {h:"R2P in practice"},
      {list:[
        "**Kenya, 2008**: after deadly violence following an election, mediation led by Kofi Annan on behalf of the AU helped broker a power-sharing deal. It is often cited as R2P working through diplomacy.",
        "**Libya, 2011**: Security Council Resolution 1973 authorised “all necessary measures” to protect civilians; 10 members voted for and 5 abstained (Brazil, China, Germany, India and Russia). A NATO-led air campaign followed and the government fell. Critics argued the mission went beyond protecting civilians to changing the regime; Brazil proposed a complementary idea, “responsibility while protecting”, calling for stricter rules on how such mandates are carried out.",
        "**Since then**, Security Council divisions, including vetoes, have blocked strong collective action in several crises, and supporters and critics alike describe R2P as applied unevenly."
      ]},
      {h:"Through the lenses"},
      "A {{realism|realist}} expects R2P to be used when it suits powerful states and ignored when it doesn’t. A {{constructivism|constructivist}} notes that a new norm has changed the language of debate: governments now argue about how, not whether, mass atrocities concern everyone. {{postcolonialism-ir|Postcolonial}} critics hear echoes of the colonial “civilising mission” in intervention by powerful states, while many African and Asian supporters stress pillar two and prevention.",
      {h:"Common misconceptions"},
      {list:[
        "“The UDHR is a binding treaty.” It is a declaration; the binding obligations are in the covenants and other treaties, and in custom.",
        "“R2P lets any country invade another to stop abuses.” It works within the Charter, and force needs Security Council authorisation.",
        "“Human rights are a purely Western idea.” The drafters came from many traditions and regions, and newly independent states pushed hard for the treaty against racial discrimination and for the right of peoples to self-determination in both Covenants. The debate about whose priorities dominate is real, but the simple claim is inaccurate."
      ]}
    ]}
   ],
   try:[
    {id:"e2u7-l4-x1", type:"order", q:"Put these milestones of the human rights system in order.", items:[
      {t:"The UN Charter names human rights among the UN’s purposes", why:"1945: the starting point."},
      {t:"The General Assembly adopts the Universal Declaration", why:"10 December 1948, in Paris."},
      {t:"The two International Covenants are adopted", why:"1966; they entered into force in 1976."},
      {t:"The Convention on the Elimination of Discrimination against Women is adopted", why:"1979."},
      {t:"The Convention on the Rights of the Child is adopted", why:"1989; it became the most widely ratified human rights treaty."},
      {t:"The Human Rights Council replaces the Commission on Human Rights", why:"2006."}
    ]},
    {id:"e2u7-l4-x2", type:"sort", q:"Sort each right into the family it belongs to.", buckets:["Civil and political","Economic, social and cultural"], items:[
      {t:"Freedom of expression", b:0, why:"A classic civil and political right, in the ICCPR."},
      {t:"A fair trial before an independent court", b:0, why:"Due process is a civil and political right."},
      {t:"Voting in genuine periodic elections", b:0, why:"Political participation is in the ICCPR."},
      {t:"Free primary education", b:1, why:"Education is an economic, social and cultural right, in the ICESCR."},
      {t:"Safe and healthy working conditions", b:1, why:"Rights at work belong to the ICESCR."},
      {t:"The highest attainable standard of health", b:1, why:"The right to health is in the ICESCR."}
    ]},
    {id:"e2u7-l4-x3", type:"mcq", q:"Ana lives in a member state of the Council of Europe. She believes her trial was unfair and wants to take her case to the European Court of Human Rights. What must she normally do first?", options:[
      {t:"Take her case through the available courts in her own country", ok:true, why:"Correct. International bodies normally require “exhaustion of domestic remedies”: national courts get the first chance to put things right."},
      {t:"Ask the UN Security Council to refer her case", why:"The Security Council deals with peace and security. Individuals apply to the European Court directly."},
      {t:"Persuade another state to sue her government at the ICJ for her", why:"Individuals can apply to the European Court themselves; the ICJ isn’t a human rights court for individuals."},
      {t:"Get her government’s permission to apply", why:"The whole point of the system is that individuals can complain against their state; no permission is needed."}
    ]},
    {id:"e2u7-l4-x4", type:"match", q:"Match each regional system with its feature.", pairs:[
      ["Europe","A court in Strasbourg whose judgments bind the 46 member states of the Council of Europe","The European Court of Human Rights applies the 1950 Convention."],
      ["The Americas","A commission in Washington and a court in San José","The Inter-American Commission and Court apply the American Convention."],
      ["Africa","A charter that adds peoples’ rights and individual duties","The African Charter on Human and Peoples’ Rights (1981) is distinctive in this."],
      ["Southeast Asia","A declaration and an intergovernmental commission, but no court","ASEAN adopted a Human Rights Declaration in 2012; its commission dates from 2009."]
    ]},
    {id:"e2u7-l4-x5", type:"sort", q:"Under R2P, which pillar does each action belong to?", buckets:["Pillar 1: the state’s own duty","Pillar 2: helping states","Pillar 3: collective response"], items:[
      {t:"A government passes laws against hate speech that incites violence and trains police to protect minorities", b:0, why:"A state protecting its own population is pillar one."},
      {t:"Neighbouring states fund an early-warning system that a country asked for", b:1, why:"Outside help for a state that wants to protect its people is pillar two."},
      {t:"A UN team advises a government on preventing violence before an election", b:1, why:"Assistance and capacity-building are pillar two."},
      {t:"The Security Council imposes targeted sanctions on leaders organising mass killings", b:2, why:"When a state is manifestly failing, collective measures through the UN are pillar three."},
      {t:"The Security Council authorises force to protect civilians from imminent massacre", b:2, why:"The last-resort part of pillar three, which needs Council authorisation."}
    ]},
    {id:"e2u7-l4-x6", type:"spot", q:"Tap the claims in this column that are inaccurate.", ask:"is inaccurate", parts:[
      "“",
      {t:"The responsibility to protect gives any state the right to invade a country to stop abuses.", flag:true, why:"R2P works within the Charter: force needs Security Council authorisation, and it covers only four crimes."},
      " ",
      {t:"World leaders endorsed it at the 2005 World Summit.", flag:false, why:"Correct: paragraphs 138 and 139 of the Outcome Document."},
      " ",
      {t:"It covers genocide, war crimes, ethnic cleansing and crimes against humanity.", flag:false, why:"Correct: those are its four crimes."},
      " Like ",
      {t:"the Universal Declaration of Human Rights, a binding treaty,", flag:true, why:"The UDHR is a declaration adopted by the General Assembly, not a treaty, though parts may now be customary law."},
      " R2P reflects a changed view of sovereignty. In Libya in 2011 ",
      {t:"the Security Council authorised measures to protect civilians.", flag:false, why:"Correct: Resolution 1973."},
      " ",
      {t:"Since then, R2P has been applied consistently in every crisis.", flag:true, why:"Supporters and critics agree it has been applied unevenly; Council divisions have blocked action in several crises."},
      "”"
    ]},
    {id:"e2u7-l4-x7", type:"mcq", q:"An analyst says: “Since R2P, even governments accused of atrocities argue that they are protecting civilians, not that atrocities are their own business.” Which lens is she using?", options:[
      {t:"Constructivism: a new norm has changed what states must say to be seen as legitimate", ok:true, why:"Right. Constructivists study how norms change the language and expectations of states, even when behaviour lags behind."},
      {t:"Realism: power alone decides what states say", why:"A realist would stress interests and power, not the spread of a norm changing how states justify themselves."},
      {t:"Mercantilism: states maximise their trade surplus", why:"Mercantilism is a view of the economy, not of norms about atrocities."},
      {t:"Neofunctionalism: cooperation spills over between sectors", why:"Neofunctionalism explains regional integration, not the spread of human rights norms."}
    ]}
   ],
   apply:{intro:"Read human rights texts and records directly. They are free and need no account.", tasks:[
     {t:"Read the UDHR and pick three articles", how:["Open the Universal Declaration on the UN’s website (un.org); it is available in hundreds of languages, so choose one you read comfortably.","Read all 30 articles; it takes about 15 minutes.","Pick three articles that matter most to your daily life and one you hadn’t heard of before."], write:"Three articles and why they matter to you, plus one that surprised you…"},
     {t:"Look at one country’s Universal Periodic Review", how:["Open the UN human rights office site (ohchr.org) and find “Universal Periodic Review”, then the page for any country.","Read the summary of recommendations other states made.","Note which recommendations the state accepted or only noted, and which states made them."], write:"Country, three recommendations, which were accepted or noted, and what patterns you see…"},
     {t:"Compare two views of R2P", how:["Find two short statements on R2P from different governments or regional groups, for example from a General Assembly debate on R2P (search “General Assembly debate responsibility to protect statement”).","Note what each one emphasises: prevention, sovereignty, Council action, the risks of misuse.","Summarise both fairly, without deciding which is right."], write:"Statement 1: who and main points. Statement 2: who and main points. Where they agree…"}
   ], proof:"Notes on three UDHR articles in your own words, one country’s UPR recommendations, and a balanced summary of two views on R2P."},
   read:[
     {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Read it after this lesson: written by a leading R2P scholar, it adds detail on how the norm developed and where it has struggled."},
     {book:"ospol", where:"Section 15.2 “International Law” and Section 15.5 “Non-state Actors: Nongovernmental Organizations (NGOs)”", note:"For how human rights NGOs monitor states and push for change."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u7-l5", title:"The global economy: trade, money and development", minutes:60,
   hook:{q:"A country puts a 20% tariff on imported shoes. Who actually hands the tariff money to that country’s government?", options:["The government of the country that exported the shoes","The foreign factory that made them","The business in the importing country that brings the shoes in","Nobody: tariffs are only paperwork"], answer:2, reveal:"**The importing business** pays the tariff to its own country’s customs service. Who ends up bearing the cost is a separate question: importers may pass it on to shoppers as higher prices, or foreign makers may cut their prices to stay competitive. Studies of recent tariff increases have found much of the cost passed on to buyers in the importing country. This lesson looks at why countries trade, why they sometimes protect themselves, and the institutions and arguments that shape the world economy."},
   goals:[
     "Explain comparative advantage with a worked example, and its limits",
     "Describe tools of protectionism and the arguments for and against them, and calculate a simple tariff",
     "Explain what the WTO, the IMF and the World Bank do, where they came from and why they are criticised",
     "Compare mercantilist, liberal and structuralist views of the global economy",
     "Read development, SDG and aid figures carefully, linking them to global inequality"
   ],
   learn:[
    {h:"Where politics meets money", body:[
      {lead:"Look at a phone. Its design, chips, screen, battery, minerals and assembly may come from a dozen countries, moved under trade rules, priced in currencies and taxed at borders. Every step involves political decisions."},
      "[[international-political-economy|International political economy]] (IPE) studies how politics and economics shape each other across borders: who sets the rules of trade and finance, who gains and who loses, and how wealth turns into power and power into wealth. It overlaps with what you met in sociology as [[globalization]] and {{global-stratification}}.",
      "Its big questions are old ones. Buy abroad or make at home? Who lends to countries in crisis, and on what terms? Why are some countries rich and others poor?"
    ]},
    {h:"Why trade? Comparative advantage", body:[
      "Adam Smith (*The Wealth of Nations*, 1776) argued that countries gain by specialising in what they make most efficiently and trading for the rest. David Ricardo (*On the Principles of Political Economy and Taxation*, 1817) made a more surprising point: trade can benefit both sides **even if one country is better at making everything**.",
      "The key is **opportunity cost**: what you give up to make something. Picture a skilled lawyer who also types faster than her assistant. She still hires the assistant to type, because every hour she spends typing is an hour of legal work lost.",
      {fig:'<svg viewBox="0 0 340 318"><text x="170" y="20" text-anchor="middle">One worker, one day (invented figures)</text><rect class="d-lup" x="8" y="34" width="158" height="190" rx="10" stroke-width="2"/><rect class="d-gold" x="174" y="34" width="158" height="190" rx="10" stroke-width="2"/><text x="87" y="58" text-anchor="middle">Coralia</text><text x="253" y="58" text-anchor="middle">Montaña</text><g class="s" text-anchor="middle"><text x="87" y="84">6 sacks of rice</text><text x="87" y="102">or 2 radios</text><text x="253" y="84">1 sack of rice</text><text x="253" y="102">or 1 radio</text><text x="87" y="138">1 radio costs</text><text x="87" y="156">3 sacks of rice</text><text x="253" y="138">1 radio costs</text><text x="253" y="156">1 sack of rice</text><text x="87" y="192">cheaper at: rice</text><text x="253" y="192">cheaper at: radios</text></g><path class="d-ink" d="M20 120 L154 120 M186 120 L320 120 M20 174 L154 174 M186 174 L320 174" stroke-width="1"/><rect class="d-sage" x="8" y="236" width="324" height="74" rx="10" stroke-width="2"/><text x="170" y="258" text-anchor="middle">Trade at 2 sacks of rice per radio:</text><text class="s" x="170" y="278" text-anchor="middle">Coralia gets a radio for 2 sacks, not 3.</text><text class="s" x="170" y="296" text-anchor="middle">Montaña gets 2 sacks for a radio costing it 1.</text></svg>', alt:"Coralia: one worker-day makes 6 sacks of rice or 2 radios, so 1 radio costs 3 sacks of rice; it is relatively cheaper at rice. Montaña: one worker-day makes 1 sack or 1 radio, so 1 radio costs 1 sack; it is relatively cheaper at radios. Trading at 2 sacks per radio, Coralia gets a radio for 2 sacks instead of 3, and Montaña gets 2 sacks for a radio that cost it 1.", cap:"Coralia is better at both goods (absolute advantage), but each country has a comparative advantage in one."},
      "Coralia is more productive at both goods: an [[absolute-advantage|absolute advantage]]. But for Coralia a radio costs 3 sacks of rice, while for Montaña it costs only 1. So Montaña has the [[comparative-advantage|comparative advantage]] in radios and Coralia in rice. If each specialises and they trade at any price between 1 and 3 sacks per radio, **both** end up with more than they could make alone.",
      {h:"What the model leaves out"},
      {list:[
        "**Gains for a country are not gains for everyone.** Rice farmers in Montaña and radio workers in Coralia may lose their jobs, even if the country as a whole gains. Whether winners compensate losers is a political choice.",
        "The model assumes workers can move easily between industries and that trade stays balanced. Real economies adjust slowly and painfully.",
        "Comparative advantage can change. A country that specialises in raw materials today may want to build industries tomorrow, which is the starting point for the critics below."
      ]}
    ]},
    {h:"Protectionism and tariffs", body:[
      "[[protectionism|Protectionism]] means policies that shield domestic producers from foreign competition. The main tools are:",
      {list:[
        "**[[tariff|Tariffs]]**: taxes on imports, usually a percentage of the goods’ value.",
        "**Quotas**: limits on how much can be imported.",
        "**Subsidies**: government money that helps domestic producers.",
        "**Rules and standards** that make imports harder, which may or may not be justified by safety."
      ]},
      {ex:"A shop imports jackets valued at US$40 each. The tariff is 25%.\nTariff per jacket = 25% × 40 = 0.25 × 40 = **US$10**, paid by the importer to its own customs service.\nIf the importer passes the whole cost on, the jacket now costs the shop US$50 before its own mark-up.", label:"Worked example: a tariff (invented figures)"},
      {table:[
        ["Arguments for protection","Arguments against"],
        ["**Infant industries** need time to grow before facing world competition (Alexander Hamilton, 1791; Friedrich List, 1841)","Consumers and firms that use imports pay higher prices"],
        ["Some industries matter for national security","Other countries retaliate, so exporters lose markets"],
        ["Protects jobs and communities from sudden shocks","Protected firms may stay inefficient"],
        ["A bargaining chip in negotiations","Can spiral into trade wars that hurt everyone"]
      ]},
      "The classic warning is the 1930s. The United States raised many tariffs in the Smoot–Hawley Act of 1930, other countries retaliated, and world trade fell steeply during the Great Depression. Economists still debate how much tariffs deepened the Depression, but the episode shaped the postwar drive to cut trade barriers through shared rules."
    ]},
    {h:"Rules for trade: from GATT to the WTO", body:[
      "In 1947, 23 countries signed the **General Agreement on Tariffs and Trade (GATT)**. Over eight rounds of talks, its members cut tariffs on manufactured goods dramatically. The last, the Uruguay Round, created the [[world-trade-organization|World Trade Organization (WTO)]], which opened on **1 January 1995**. It has 166 members (as of 2026; Comoros and Timor-Leste joined in 2024).",
      {list:[
        "**Non-discrimination**: the [[most-favoured-nation|most-favoured-nation]] rule says a lower tariff given to one member must be given to all, with exceptions such as free trade areas and preferences for developing countries. **National treatment** means imported goods, once inside, must be treated like local ones.",
        "**Decisions by consensus**, so new agreements are hard to reach. The Doha Round, launched in 2001 with a focus on development, stalled for years, largely over agriculture.",
        "**Dispute settlement**: members bring complaints, panels rule, and the winner may retaliate if the loser doesn’t comply. Since December 2019 the WTO’s Appellate Body, which hears appeals, has been unable to take new appeals because the appointment of its members has been blocked (it still had no members in 2026); some members use an interim appeal arrangement instead."
      ]},
      "Developing countries have used WTO rules to challenge rich countries’ farm subsidies, but also criticise rules on intellectual property. In 2001 WTO ministers declared that the rules on patents should not prevent members from protecting public health, including access to medicines."
    ]},
    {h:"Bretton Woods: the IMF and the World Bank", body:[
      "In July 1944, delegates from 44 Allied countries met at Bretton Woods, in the United States, to plan the postwar economy. With John Maynard Keynes of Britain and Harry Dexter White of the United States as the main architects, they created two [[bretton-woods|Bretton Woods]] institutions:",
      {list:[
        "The **[[imf|International Monetary Fund (IMF)]]** watches the world economy, advises governments and lends to countries that can’t pay for imports or defend their currency. It has 191 members.",
        "The **[[world-bank|World Bank]]** first financed Europe’s reconstruction and now lends for development projects and policies. Its International Development Association (1960) gives the poorest countries grants and very cheap loans."
      ]},
      "The original system fixed exchange rates to the US dollar, which was convertible into gold at US$35 an ounce. In August 1971 the United States ended that convertibility, and by 1973 the major currencies floated. The institutions survived and found new roles.",
      {h:"Who decides, and the criticisms"},
      "Voting power depends on each member’s financial contribution. The United States holds just over 16% of the votes at the IMF, and the most important decisions need 85%, so it can block them. By tradition a European leads the IMF and an American the World Bank. Many [[global-south|Global South]] governments want a larger say.",
      "IMF and World Bank loans usually come with [[conditionality|conditions]]. In the 1980s and 1990s, [[structural-adjustment|structural adjustment]] programmes required cutting budgets, selling state firms and opening markets, a package later nicknamed the [[washington-consensus|Washington Consensus]] (John Williamson, 1989). Critics say the conditions cut health and education spending and deepened crises, as many argued during the 1997–98 Asian financial crisis. Defenders reply that countries came to the Fund already in crisis, and that the institutions have since changed their approach. Newer lenders, such as the Asian Infrastructure Investment Bank and the BRICS countries’ New Development Bank, began work in the mid-2010s."
    ]},
    {h:"Three ways to see the global economy", body:[
      "IPE has three classic perspectives. As in Unit 6, each is a lens, and each notices something real.",
      {table:[
        ["View","Core belief","Cousin in IR theory"],
        ["[[mercantilism|Mercantilism]] or economic nationalism","Wealth is a source of power; the state should build national industry and guard its economic independence","{{realism|Realism}}"],
        ["[[economic-liberalism|Economic liberalism]]","Open markets and specialisation make everyone richer; institutions help states cooperate","{{liberalism-ir|Liberalism}}"],
        ["[[structuralism|Structuralism]] (Marxist, dependency and world-systems views)","The world economy is structured so that rich “core” countries gain at the expense of the poorer periphery","{{marxism-ir|Marxist and critical theory}}"]
      ]},
      "Structuralism has strong Latin American roots. In 1950 the Argentine economist **Raúl Prebisch**, working at the UN’s Economic Commission for Latin America, and the economist **Hans Singer** argued that prices of raw materials tend to fall over time compared with prices of manufactured goods, so countries exporting raw materials fall behind. Their ideas fed [[import-substitution|import substitution]] policies, the creation of UNCTAD (1964), with Prebisch as its first head, and the 1974 call for a [[new-international-economic-order|New International Economic Order]]. They connect to [[dependency-theory]] and [[world-systems-theory]] from Unit 3.",
      {fig:'<svg viewBox="0 0 340 384"><rect class="d-panel" x="10" y="8" width="320" height="60" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Event: a country raises tariffs on</text><text x="170" y="52" text-anchor="middle">imported cars to build its own industry</text><rect class="d-rose" x="10" y="84" width="320" height="86" rx="8" stroke-width="2"/><text x="22" y="106">Mercantilist</text><text class="s" x="22" y="126">Good: a national car industry brings</text><text class="s" x="22" y="142">jobs, skills and independence, as many</text><text class="s" x="22" y="158">rich countries did on their way up.</text><rect class="d-lup" x="10" y="182" width="320" height="86" rx="8" stroke-width="2"/><text x="22" y="204">Liberal</text><text class="s" x="22" y="224">Costly: drivers pay more, partners may</text><text class="s" x="22" y="240">retaliate, and resources go where the</text><text class="s" x="22" y="256">country has no comparative advantage.</text><rect class="d-sage" x="10" y="280" width="320" height="96" rx="8" stroke-width="2"/><text x="22" y="302">Structuralist</text><text class="s" x="22" y="322">Understandable: without industry the</text><text class="s" x="22" y="338">country stays a raw-material exporter,</text><text class="s" x="22" y="354">and global rules now make it harder for</text><text class="s" x="22" y="370">late developers to protect industries.</text></svg>', alt:"One event, a country raising tariffs on imported cars to build its own industry, seen three ways. Mercantilist: good, it brings jobs, skills and independence as rich countries did. Liberal: costly, drivers pay more, partners may retaliate, and resources go where the country has no comparative advantage. Structuralist: understandable, without industry the country stays a raw-material exporter, and global rules make it harder for late developers.", cap:"Same tariff, three readings. The economist Ha-Joon Chang (*Kicking Away the Ladder*, 2002) argued that rich countries protected their own industries while growing, then urged others not to."}
    ]},
    {h:"Development, aid and debt", body:[
      "What counts as “development”? For a long time it meant rising income per person. The economist Amartya Sen (*Development as Freedom*, 1999) argued that it means expanding people’s real freedoms: to be healthy, educated and able to shape their lives. His work, with Mahbub ul Haq’s, lies behind the [[human-development-index|Human Development Index]] you met in Unit 3.",
      {h:"Global goals"},
      "The UN’s eight Millennium Development Goals ([[millennium-development-goals|MDGs]], 2000–2015) were followed on **25 September 2015** by the [[sustainable-development-goals|Sustainable Development Goals]]: **17 goals and 169 targets** for 2030, from ending poverty and hunger to climate action, with the promise to “leave no one behind”. Unlike the MDGs, the SDGs apply to **every** country, rich and poor.",
      "Progress is uneven. The UN’s *Sustainable Development Goals Report 2025* found that of the 139 targets with enough data to assess, 35% were on track or making moderate progress, 31% marginal progress, 17% had stagnated and 18% had gone backwards.",
      {h:"Aid"},
      "[[official-development-assistance|Official development assistance (ODA)]] is government aid that promotes the development and welfare of developing countries, given as grants or cheap loans, as defined by the OECD’s Development Assistance Committee. In 1970 the UN General Assembly set a target for rich countries to give **0.7% of their gross national income (GNI)**. According to the OECD’s preliminary figures for 2025, aid from its committee’s members fell by 23.1% in real terms to US$174.3 billion, about 0.26% of their combined GNI, the largest one-year drop on record; four countries (Denmark, Luxembourg, Norway and Sweden) met the 0.7% target.",
      "Whether aid works is debated: some economists argue for more and better-targeted aid, others that aid can prop up poor governance or crowd out local initiative. Most agree that quality matters as much as quantity. Money sent home by migrant workers (remittances) is now larger than official aid for many low- and middle-income countries.",
      {h:"Debt"},
      "Countries borrow to build, and sometimes cannot repay. The Jubilee 2000 campaign helped push the Heavily Indebted Poor Countries initiative (1996) and the Multilateral Debt Relief Initiative (2005), which cancelled much debt of the poorest countries. In 2020 the G20 created a Common Framework for [[debt-relief|debt]] restructuring. Today’s creditors include China and private bondholders as well as Western governments and the Bretton Woods institutions, which can make agreements slower.",
      {h:"Common misconceptions"},
      {list:[
        "“Trade is a contest where one side’s gain is the other’s loss.” Comparative advantage shows both can gain, although particular groups inside each country can lose.",
        "“Foreign exporters pay tariffs.” Importers pay them; the cost is then shared in ways that depend on the market.",
        "“The IMF and World Bank are the same.” The Fund deals mainly with financial stability and short-term crises; the Bank with long-term development."
      ]},
      {key:"The global economy runs on rules that states made, and can remake. Which rules seem fair depends on your lens: national strength, shared gains, or a structure that favours some countries over others."}
    ]}
   ],
   try:[
    {id:"e2u7-l5-x1", type:"number", q:"Using the invented figures from the lesson: in Coralia one worker-day makes 6 sacks of rice or 2 radios. How many sacks of rice does Coralia give up to make one radio?", answer:3, tol:0, unit:"sacks", why:"One day makes 6 sacks or 2 radios, so 2 radios cost 6 sacks: 1 radio costs 6 ÷ 2 = 3 sacks of rice. That is Coralia’s opportunity cost of a radio.", wrongs:[
      {v:0.33, tol:0.01, why:"That is the cost of one sack of rice measured in radios (2 ÷ 6 = 1/3 radio). The question asks for the cost of one radio in sacks: 6 ÷ 2."},
      {v:6, tol:0, why:"6 sacks is what Coralia gives up for 2 radios, not one. Divide by 2."},
      {v:2, tol:0, why:"2 is the number of radios a day makes, not the rice given up per radio."}
    ], hint2:"Divide the rice a worker could make (6) by the radios the same worker could make instead (2)."},
    {id:"e2u7-l5-x2", type:"mcq", q:"In the same example, Montaña makes 1 sack of rice or 1 radio a day. Which country has the comparative advantage in radios?", options:[
      {t:"Montaña, because a radio costs it only 1 sack of rice, compared with 3 for Coralia", ok:true, why:"Correct. Comparative advantage is about the lower opportunity cost, not about being more productive."},
      {t:"Coralia, because it makes more radios per worker", why:"That is absolute advantage. Coralia gives up more rice for each radio (3 sacks), so its comparative advantage is in rice."},
      {t:"Neither: Coralia is better at everything, so trade can’t help", why:"This is the misconception Ricardo overturned. Different opportunity costs mean both can gain."},
      {t:"Both equally, since each makes radios", why:"Their opportunity costs differ (1 sack against 3), so only one has the comparative advantage in radios."}
    ]},
    {id:"e2u7-l5-x3", type:"number", q:"A café imports coffee machines valued at US$600 each. The tariff is 15%. How much tariff does the café pay on one machine, in US dollars? (Invented figures.)", answer:90, tol:0.01, unit:"US$", why:"15% = 0.15. 0.15 × 600 = US$90, paid by the importer (the café) to its own customs service.", wrongs:[
      {v:690, tol:0.5, why:"US$690 is the machine plus the tariff. The question asks only for the tariff."},
      {v:15, tol:0.01, why:"15 is the tariff rate in per cent, not the amount. Multiply 0.15 by 600."},
      {v:40, tol:0.01, why:"That divides 600 by 15. A 15% tariff means multiplying by 0.15."},
      {v:9, tol:0.01, why:"That uses 1.5% (0.015). Check the decimal point: 15% = 0.15."}
    ], hint2:"Change 15% into a decimal and multiply by the value of the machine."},
    {id:"e2u7-l5-x4", type:"match", q:"Match each institution with its main job.", pairs:[
      ["International Monetary Fund","Lends to countries that can’t pay for imports or defend their currency, and watches the world economy","The IMF deals with financial stability and balance-of-payments crises."],
      ["World Bank","Finances long-term development projects, with grants and cheap loans for the poorest","The Bank, through the IBRD and IDA, focuses on development."],
      ["World Trade Organization","Sets trade rules and settles trade disputes between members","The WTO, since 1995, runs the rules that began with GATT."],
      ["UNCTAD","A UN body on trade and development created in 1964 to voice developing countries’ concerns","Raúl Prebisch was its first Secretary-General."],
      ["OECD Development Assistance Committee","Defines what counts as official development assistance and reports donors’ figures","Its definition and data are the standard source for aid statistics."]
    ]},
    {id:"e2u7-l5-x5", type:"sort", q:"Which IPE view does each statement express?", buckets:["Mercantilist","Liberal","Structuralist"], items:[
      {t:"“We must make our own steel. A country that can’t is at the mercy of others in a crisis.”", b:0, why:"National strength and independence first: economic nationalism."},
      {t:"“Lower tariffs on both sides would let each country do what it does best, and both would be richer.”", b:1, why:"Mutual gains from specialisation and open markets: the liberal view."},
      {t:"“Countries that export only coffee and copper stay poor because the system rewards those who make the machines.”", b:2, why:"A structure that favours the industrial core over the commodity-exporting periphery: structuralism."},
      {t:"“Shared trade rules and a neutral dispute system make cooperation easier for everyone.”", b:1, why:"Institutions that reduce uncertainty and enable cooperation are a liberal theme."},
      {t:"“Rich countries protected their industries while growing, then wrote rules stopping others from doing the same.”", b:2, why:"This argument, made by Ha-Joon Chang and others, highlights how global rules can lock in an unequal structure."},
      {t:"“A trade surplus is a sign of national power, so we should export more than we import.”", b:0, why:"Treating a surplus as strength is a classic mercantilist idea."}
    ]},
    {id:"e2u7-l5-x6", type:"spot", q:"Tap the mistakes in this explainer.", ask:"is a mistake", parts:[
      "“",
      {t:"The Sustainable Development Goals, 17 goals adopted in 2015,", flag:false, why:"Correct: adopted on 25 September 2015."},
      " ",
      {t:"apply only to poor countries.", flag:true, why:"The SDGs are universal: they apply to every country. That was a key difference from the MDGs."},
      " ",
      {t:"In 1970 the UN set a target for rich countries to give 0.7% of their national income in aid,", flag:false, why:"Correct: a General Assembly resolution of 1970."},
      " ",
      {t:"and most of them now meet it.", flag:true, why:"Only a handful do: four OECD donors met it in 2025 according to preliminary OECD data."},
      " ",
      {t:"The Bretton Woods conference of 1944 created the WTO", flag:true, why:"Bretton Woods created the IMF and the World Bank. The WTO began in 1995, growing out of GATT (1947)."},
      " and ",
      {t:"IMF loans usually come with policy conditions.", flag:false, why:"Correct: this is called conditionality."},
      "”"
    ]},
    {id:"e2u7-l5-x7", type:"mcq", q:"The UN’s 2025 report found that 35% of the 139 assessable SDG targets were on track or making moderate progress, and 18% had regressed. Which conclusion does that support?", options:[
      {t:"About a third of the assessable targets are progressing well enough; most are not", ok:true, why:"Correct. 35% on track or moderate leaves 65% with marginal progress, stagnation or regression."},
      {t:"35% of the world’s people have reached the goals", why:"The figures are about targets, not people."},
      {t:"All 169 targets were measured, and most have been met", why:"Only 139 of 169 could be assessed, and only 35% were on track or making moderate progress; 18% had gone backwards."},
      {t:"The SDGs have been abandoned", why:"Slow progress isn’t abandonment: the goals remain the agreed framework to 2030."}
    ]}
   ],
   apply:{intro:"Trace the global economy in your own life and read the real data. Everything here is free and needs no account.", tasks:[
     {t:"Trace where three things you own were made", how:["Pick three everyday items: clothing, a gadget, a food product.","Check the label or packaging for the country of origin or assembly.","For one item, search for where its main materials or parts come from (for example cotton, chips or cocoa).","Note anything that suggests trade rules, tariffs or a trade agreement were involved."], write:"Item, where it was made, where its materials came from, and one trade connection you found…"},
     {t:"Read one SDG with data", how:["Open the UN SDG site (sdgs.un.org) or the UN statistics SDG report pages (unstats.un.org/sdgs).","Choose one goal that interests you.","Find one indicator for your region or country and its trend over time.","Note the source and year of the figure."], write:"Goal, indicator, value and year, trend, and source…"},
     {t:"Read a trade or aid story through three lenses", how:["Find one news story about tariffs, a trade deal, an IMF loan or aid cuts.","Write one sentence each on how a mercantilist, a liberal and a structuralist would read it.","Note whose voices the story includes: governments, businesses, workers, people in the countries affected."], write:"The story, three one-sentence readings, and whose voices are included or missing…"}
   ], proof:"Notes tracing three items to their origins, one SDG indicator with its source and year, and one economic news story read through all three IPE lenses."},
   read:[
     {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach) and Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"Read them after this lesson: they add how global finance changed after the Cold War and the debates about measuring poverty."},
     {book:"ospol", where:"Chapter 16, Sections 16.1 “The Origins of International Political Economy”, 16.2 “The Advent of the Liberal Economy”, 16.3 “The Bretton Woods Institutions” and 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"A gentle, readable history of the ideas and institutions in this lesson."}
   ]
  }
  ],
  checkpoint:["e2u7-q02","e2u7-q05","e2u7-q08","e2u7-q12","e2u7-q15","e2u7-q20","e2u7-q23","e2u7-q27","e2u7-q31","e2u7-q36","e2u7-q40","e2u7-q44"],
  codex:[
   {id:"united-nations", title:"The United Nations", aka:["UN","UN Charter","UN system"], tags:["international relations","international organisations"],
    summary:"The organisation of almost every state, founded in 1945 to keep the peace and foster cooperation, which works through six principal organs and a large family of agencies.",
    levels:{
     starter:[
      "The United Nations is an organisation whose members are countries: 193 of them. It was created at the end of the Second World War, when its founding treaty, the UN Charter, was signed in San Francisco on 26 June 1945. The Charter came into force on 24 October 1945.",
      "Think of it as a shared meeting hall plus a rulebook. Every member has a seat in the General Assembly. A smaller Security Council deals with threats to peace. A staff led by the Secretary-General runs the organisation, and many agencies, such as the World Health Organization and UNICEF, do practical work around the world.",
      {key:"The UN is not a world government. It can only do what its member states agree to let it do."},
      "Its main jobs are keeping peace, protecting human rights, helping development and coordinating action on shared problems such as disease, refugees and climate."
     ],
     builder:[
      "The Charter sets out the UN’s purposes (Article 1) and principles (Article 2): sovereign equality of members, peaceful settlement of disputes, a ban on the threat or use of force against other states (with exceptions for self-defence and Security Council action) and non-intervention in matters essentially within a state’s domestic jurisdiction.",
      {table:[
        ["Organ","Main role"],
        ["General Assembly","All members, one vote each; recommendations, budget, elections"],
        ["Security Council","15 members; binding decisions on peace and security"],
        ["Secretariat","Staff led by the Secretary-General"],
        ["ECOSOC","54 members; economic and social coordination"],
        ["International Court of Justice","Disputes between states; advisory opinions"],
        ["Trusteeship Council","Supervised trust territories; suspended in 1994"]
      ]},
      "Beyond these sit funds and programmes (UNICEF, UNDP, WFP, UNHCR) and specialized agencies with their own members and budgets (WHO, ILO, FAO, UNESCO, the IMF and World Bank, among others).",
      "Membership grew from 51 in 1945 to 193 by 2011, mostly through decolonisation. The regular budget is shared by a scale of assessments based on ability to pay; for 2025–2027 the highest share is 22% and the lowest 0.001%. Peacekeeping has its own budget, and much of the system depends on voluntary contributions.",
      "How decisions are made: in the General Assembly, “important questions”, such as recommendations on peace and security, elections to the Councils and budget questions, need a two-thirds majority of members present and voting (Article 18); others need a simple majority. Many resolutions are adopted by consensus without a vote. The Secretary-General can bring to the Security Council’s attention any matter that may threaten peace (Article 99), and also offers “good offices”: quiet mediation between parties."
     ],
     pro:[
      "Three debates recur. **Effectiveness**: the UN is criticised for failures such as Rwanda (1994) and Srebrenica (1995) and for Security Council paralysis, while defenders point to largely invisible successes in health, aviation, refugee protection and standard-setting. **Representation**: the Security Council reflects 1945, and reform requires a Charter amendment ratified by two-thirds of members including all five permanent members (Article 108). **Money**: dependence on a few large contributors and on earmarked voluntary funding shapes priorities; in 2025 the Secretary-General launched the UN80 reform initiative amid a cash shortage.",
      "Theories read the UN differently. Realists see a forum that reflects great-power interests, with the veto as power written into law. Liberal institutionalists see an institution that lowers the cost of cooperation and provides information. Constructivists see an arena where norms such as self-determination, human rights and the responsibility to protect are defined and spread. The English School sees the UN as a central institution of international society.",
      "Legal details matter when reading the news. General Assembly resolutions are generally recommendations, although budget decisions bind and some resolutions are cited as evidence of customary law. Security Council decisions bind under Article 25, but the Council also adopts non-binding statements and recommendations. The Secretary-General is appointed by the Assembly on the Council’s recommendation (Article 97), by practice for five-year terms."
     ]
    },
    related:["un-security-council","international-law","international-courts","regional-organizations","decolonization","peacekeeping"],
    read:[{book:"ospol", where:"Section 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)”"},{book:"eir", where:"Chapter 6 “International Organisations”"}],
    sources:[{t:"United Nations: UN Charter (full text)", url:"https://www.un.org/en/about-us/un-charter/full-text"},{t:"United Nations: Growth in United Nations membership", url:"https://www.un.org/en/about-us/growth-in-un-membership"}],
    checked:"2026-11"},

   {id:"un-security-council", title:"The UN Security Council and the veto", aka:["Security Council","P5","veto"], tags:["international relations","united nations"],
    summary:"The 15-member UN body with primary responsibility for peace and security, whose decisions bind all members and whose five permanent members hold a veto.",
    levels:{
     starter:[
      "The Security Council is the part of the UN that deals with wars and threats to peace. It has 15 members. Five are permanent: China, France, Russia, the United Kingdom and the United States. The other ten are elected for two years at a time.",
      "Its decisions are special: all UN members have agreed to carry them out. It can order sanctions, such as bans on selling weapons to a country, and it can authorise the use of force.",
      "Each permanent member has a **veto**: if one of them votes no, a decision fails, even if every other member votes yes. The veto was the price of getting the great powers of 1945 to join.",
      {key:"Nine yes votes, and no “no” from any permanent member: that is what a Security Council decision needs."}
     ],
     builder:[
      "Article 27 of the Charter: procedural matters need nine affirmative votes; all other matters need nine affirmative votes “including the concurring votes of the permanent members”. Since the early years, a permanent member’s abstention has not been treated as a veto, a practice the International Court of Justice accepted in 1971.",
      "Elected seats are shared by region: three for Africa, two for Asia-Pacific, one for Eastern Europe, two for Latin America and the Caribbean, and two for Western Europe and other states. Retiring members can’t be re-elected immediately. The Council grew from 11 to 15 members in 1965.",
      {list:[
        "**Chapter VI**: peaceful settlement: calling for talks, mediation, investigation.",
        "**Chapter VII**: determining a threat to the peace (Article 39), measures without force such as sanctions (Article 41), and authorising force (Article 42).",
        "Creating peace operations and, in 1993 and 1994, international criminal tribunals for the former Yugoslavia and Rwanda; referring situations to the ICC."
      ]},
      "The Charter text still names the “Republic of China” and the “Union of Soviet Socialist Republics”. General Assembly resolution 2758 (1971) gave China’s seat to the People’s Republic of China, and Russia took over the Soviet seat in 1991.",
      "The Council can meet at any time, and its presidency rotates monthly among members in English alphabetical order. Besides binding resolutions, it issues presidential statements and press statements, which signal its views but are weaker tools. Its agenda has widened from wars between states to civil wars, terrorism, the protection of civilians, and women, peace and security (Resolution 1325, 2000)."
     ],
     pro:[
      "Workarounds to deadlock: the 1950 **Uniting for Peace** resolution lets the General Assembly recommend collective measures when the Council fails because of a veto; a 2022 Assembly resolution requires the Assembly to meet and debate whenever a veto is cast. Proposals for permanent members to refrain voluntarily from vetoing in mass-atrocity situations (a French–Mexican initiative and a code of conduct backed by many states) have wide support but are not binding.",
      "Sanctions have shifted since the 1990s from comprehensive embargoes, whose humanitarian costs were heavily criticised, towards **targeted** measures such as asset freezes and travel bans on named individuals and entities, monitored by committees and expert panels.",
      "Reform positions: the G4 (Brazil, Germany, India, Japan) seek permanent seats; Uniting for Consensus opposes new permanent seats and prefers more elected or longer-term seats; the African Union’s Ezulwini Consensus (2005) asks for two permanent African seats with full prerogatives, including the veto while it exists, and more elected seats. Intergovernmental negotiations have run in the General Assembly since 2009 without agreement. Realists expect any change to follow shifts in power; others stress legitimacy: a Council seen as unrepresentative may find its decisions less respected.",
      "The pattern of vetoes has shifted over time: the Soviet Union cast most of them in the early decades, the United States many from the 1970s onward, and Russia and China more often in recent years. Counting vetoes understates their effect, because the threat of a veto often stops drafts from ever being put to a vote, sometimes called the “hidden veto”."
     ]
    },
    related:["united-nations","international-law","responsibility-to-protect","peacekeeping"],
    read:[{book:"ospol", where:"Section 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)”"}],
    sources:[{t:"United Nations: UN Charter, Chapter V (The Security Council)", url:"https://www.un.org/en/about-us/un-charter/chapter-5"}],
    checked:"2026-11"},

   {id:"regional-organizations", title:"Regional organisations", aka:["regionalism","regional IGOs","regional integration"], tags:["international relations","international organisations"],
    summary:"Organisations of states in one region, from consensus-based forums to the supranational EU, built for trade, peace, voice and shared problems.",
    levels:{
     starter:[
      "A regional organisation is a club of neighbouring states. Examples include the European Union, the African Union, the Association of Southeast Asian Nations (ASEAN), Mercosur in South America and the Pacific Islands Forum.",
      "Neighbours organise for several reasons: to trade more easily, to keep peace among themselves, to have a louder voice in the world and to tackle problems that cross borders, such as rivers, fishing or disease.",
      "They are built very differently. Some, like ASEAN, are forums where governments decide everything together by consensus. The EU has its own institutions, such as a court and a parliament, that can make rules members must follow.",
      {key:"The key question about any regional organisation is who has the final say: the member governments, or shared institutions above them."}
     ],
     builder:[
      {table:[
        ["Organisation","Founded","Design in brief"],
        ["European Union (27 members)","1951 roots; EU from 1993","Supranational: Commission, Parliament, Court of Justice; single market; euro for most members"],
        ["African Union (55 members)","OAU 1963; AU 2002","Mainly intergovernmental; right to intervene over atrocity crimes; suspends members after coups"],
        ["ASEAN (11 members)","1967","Intergovernmental; consensus and non-interference (“the ASEAN Way”)"],
        ["Mercosur","1991","Customs union with a common external tariff (with exceptions)"],
        ["Pacific Islands Forum (18 members)","1971","Intergovernmental; ocean, fisheries and climate as priorities"]
      ]},
      "Economic integration is often described in steps: a free trade area (no internal tariffs), a customs union (plus a common outside tariff), a common market (plus free movement of services, capital and people), and economic and monetary union (plus a shared currency).",
      "Chapter VIII of the UN Charter encourages regional arrangements to settle local disputes, while enforcement action needs Security Council authorisation.",
      "Regional bodies matter for security too. The AU’s Peace and Security Council and ECOWAS have deployed missions; the Organization of American States and the EU send election observers; ASEAN hosts forums such as the ASEAN Regional Forum and the East Asia Summit, where great powers meet on ASEAN’s terms (“ASEAN centrality”). In trade, the African Continental Free Trade Area (trading since 2021) covers most of Africa, and Mercosur negotiates with outsiders as a bloc. Under Chapter VIII the UN often works alongside regional bodies, as in the joint AU–UN mission in Darfur from 2007."
     ],
     pro:[
      "Theories of integration: **neofunctionalism** (Ernst Haas, *The Uniting of Europe*, 1958) emphasises spillover from one sector to another and the role of supranational actors; **intergovernmentalism** holds that governments remain in control and pool sovereignty only where it serves national interests. Constructivist accounts, such as Amitav Acharya’s work on ASEAN, stress shared norms and identity in building regional communities without strong institutions.",
      "Why designs differ: recent experience of colonial rule makes many governments protective of sovereignty; the distribution of power within a region shapes who leads; deep existing trade makes binding rules more valuable; and norms such as consensus or “ever closer union” become part of members’ identities.",
      "Membership and rules change. Timor-Leste joined ASEAN in October 2025, Bolivia became a full Mercosur member in 2024, the United Kingdom left the EU in 2020, and Mali, Burkina Faso and Niger left ECOWAS in January 2025. Democracy clauses (Mercosur’s, the AU’s rules on unconstitutional changes of government) show regional bodies taking positions on members’ internal politics. A common analytical error is to treat the EU as the yardstick for all regionalism; Global IR scholars argue that each region should be studied on its own terms.",
      "Overlapping memberships complicate the picture: many African states belong to several regional economic communities at once, each with its own trade rules: an example of what the economist Jagdish Bhagwati called the “spaghetti bowl” of overlapping trade agreements."
     ]
    },
    related:["united-nations","global-trade","global-ir","sovereignty"],
    read:[{book:"ospol", where:"Section 15.4 “How Do Regional IGOs Contribute to Global Governance?”"}],
    sources:[{t:"ASEAN: About ASEAN", url:"https://asean.org/about-asean"},{t:"African Union: Member States", url:"https://au.int/en/member_states/countryprofiles2"},{t:"MERCOSUR: Mercosur countries", url:"https://www.mercosur.int/en/about-mercosur/mercosur-countries"}],
    checked:"2026-11"},

   {id:"international-law", title:"International law", aka:["public international law","law of nations","treaties and custom"], tags:["international relations","law"],
    summary:"The rules that bind states and other international actors, made mainly by treaties and custom, and enforced without a world police.",
    levels:{
     starter:[
      "International law is the set of rules that countries have agreed to follow in their dealings with each other: how ambassadors are treated, where borders at sea lie, how prisoners of war must be treated, how planes cross borders.",
      "Unlike the law inside a country, there is no world parliament, no court everyone must attend and no world police. Most rules are made by states themselves, either by signing written agreements (treaties) or by long practice that they accept as binding (custom).",
      "Why follow rules nobody can enforce? Mostly because following them pays: a country that mistreats foreign diplomats can expect its own diplomats to be mistreated, and one that breaks promises finds it hard to make deals.",
      {key:"International law rests on consent and reciprocity: states mostly keep the rules because they want others to keep them too."}
     ],
     builder:[
      "Article 38(1) of the ICJ Statute lists the sources: (a) international conventions (treaties); (b) international custom, “as evidence of a general practice accepted as law”; (c) general principles of law; and (d), as subsidiary means, judicial decisions and the teachings of the most highly qualified scholars.",
      {list:[
        "**Treaties** bind their parties. The Vienna Convention on the Law of Treaties (1969) sets the rules, including *pacta sunt servanda*: treaties must be performed in good faith.",
        "**Customary law** needs state practice plus *opinio juris* (the belief that the practice is legally required). It binds states generally.",
        "**Jus cogens** norms, such as the bans on genocide, slavery, torture and aggression, cannot be overridden by any treaty (Vienna Convention, Article 53)."
      ]},
      "Treaty steps: negotiation, adoption and signature, ratification (or accession), entry into force, implementation. Signature usually does not bind, though a signatory should not defeat the treaty’s object and purpose (Article 18).",
      "Enforcement is decentralised: reciprocity, reputation, domestic courts applying treaty rules, countermeasures, sanctions and, in the gravest cases, Security Council action.",
      "Key branches include the law of the sea (the 1982 UN Convention on the Law of the Sea sets territorial seas of up to 12 nautical miles and exclusive economic zones of up to 200), diplomatic law, international humanitarian law (the 1949 Geneva Conventions), human rights law, trade law, environmental law and international criminal law. Each country’s constitution decides how treaties take effect at home: in some, ratified treaties apply directly in national courts; in others, a law must first turn them into domestic law."
     ],
     pro:[
      "Debates over compliance divide along theoretical lines. Realists argue law reflects power and constrains strong states little when vital interests are at stake. Liberal institutionalists argue legal rules reduce transaction costs and increase transparency. Constructivists and many legal scholars stress legitimacy and internalisation: officials come to treat rules as part of what their state is. Louis Henkin’s observation that “almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time” (*How Nations Behave*) is often quoted, and as often criticised for downplaying the importance of the violations that do occur.",
      "Third World Approaches to International Law (TWAIL), associated with scholars such as Antony Anghie (*Imperialism, Sovereignty and the Making of International Law*, 2004), argue that the discipline took shape through colonial encounters and that its application remains selective, while recognising that newer states used law, such as the right to self-determination and the law of the sea, to advance their interests. The phrase “civilized nations” in Article 38(1)(c), inherited from the 1920 Statute of the Permanent Court, is widely regarded as anachronistic.",
      "Soft law (declarations, guidelines, codes of conduct) is not formally binding but can shape behaviour and later harden into treaty or custom. General Assembly resolutions can be evidence of opinio juris when adopted with wide support and consistent practice."
     ]
    },
    related:["international-courts","human-rights-regime","united-nations","un-security-council"],
    read:[{book:"eir", where:"Chapter 5 “International Law”"},{book:"ospol", where:"Section 15.2 “International Law”"}],
    sources:[{t:"International Court of Justice: Statute of the Court", url:"https://www.icj-cij.org/statute"},{t:"OpenStax Introduction to Political Science, 15.2 International Law", url:"https://openstax.org/books/introduction-political-science/pages/15-2-international-law"}],
    checked:"2026-11"},

   {id:"human-rights-regime", title:"The international human rights system", aka:["human rights regime","UDHR","human rights treaties"], tags:["international relations","human rights","law"],
    summary:"The declarations, treaties, UN bodies and regional courts that set out and monitor the rights every person holds.",
    levels:{
     starter:[
      "Human rights are rights every person has simply by being human: to life, to be free from torture, to a fair trial, to speak freely, to education, to health and more.",
      "Before 1945, how a government treated its own people was mostly seen as its own business. After the horrors of the Second World War, the new United Nations made human rights an international concern.",
      "The founding text is the Universal Declaration of Human Rights, adopted by the UN General Assembly in Paris on 10 December 1948. It has been translated into more than 500 languages. It is a declaration, not a treaty, but later treaties turned its ideas into binding law.",
      {key:"States make human rights law, and human rights law protects people, often against their own state."}
     ],
     builder:[
      "The two Covenants (on civil and political rights, and on economic, social and cultural rights) were adopted in 1966 and entered into force in 1976. With the UDHR they form the International Bill of Human Rights. Further core treaties cover racial discrimination (1965), discrimination against women (1979), torture (1984), children (1989), migrant workers (1990), persons with disabilities (2006) and enforced disappearance (2006).",
      {list:[
        "**Treaty bodies**: expert committees review state reports and, where states accept it, individual complaints.",
        "**Human Rights Council** (2006, 47 members): debates, resolutions and the Universal Periodic Review of every UN member.",
        "**Special procedures**: independent rapporteurs on themes and countries.",
        "**OHCHR**: the UN human rights office, created in 1993."
      ]},
      "Regional systems: the European Court of Human Rights (Strasbourg), the Inter-American Commission and Court (Washington, San José), and the African Commission and Court on Human and Peoples’ Rights (Banjul, Arusha). ASEAN has a declaration (2012) and a commission (2009) but no court. Individuals usually must exhaust national remedies first.",
      "Much of the daily work is done closer to home. National human rights institutions (independent commissions or ombudspersons set up by states, guided by the UN’s 1993 Paris Principles) and NGOs, from international groups to local associations, document abuses, help victims bring cases and press governments to report honestly to treaty bodies. Reporting, review and public pressure, sometimes called “naming and shaming”, are the system’s main tools, because UN bodies can’t enforce their recommendations."
     ],
     pro:[
      "Duties are often described as respect, protect and fulfil. Civil and political rights are typically framed as immediate obligations; economic, social and cultural rights as obligations of progressive realisation, subject to available resources, though with immediate core obligations such as non-discrimination.",
      "The universality debate: the 1993 Bangkok Declaration by Asian governments stressed national and regional particularities; the Vienna Declaration of the same year affirmed that rights are “universal, indivisible and interdependent and interrelated”. Scholars from every region contribute to both sides: some emphasise that the UDHR’s drafters came from diverse traditions and that rights protect the weak; others highlight selective criticism by powerful states and ask whose priorities dominate.",
      "Effectiveness research is mixed: ratification alone does not reliably change behaviour, but treaties appear to matter more where domestic courts, civil society and democratic institutions can use them. Regional courts issue binding judgments, yet implementation can take years, and states have sometimes withdrawn from individual-petition procedures.",
      "The system keeps evolving. In 2022 the General Assembly recognised a human right to a clean, healthy and sustainable environment (a non-binding resolution), and the UN Guiding Principles on Business and Human Rights, endorsed by the Human Rights Council in 2011, set out what states and companies are expected to do. Debates continue about rights online, privacy and surveillance."
     ]
    },
    related:["responsibility-to-protect","international-law","international-courts","united-nations"],
    read:[{book:"ospol", where:"Section 15.2 “International Law”"}],
    sources:[{t:"United Nations: Universal Declaration of Human Rights", url:"https://www.un.org/en/about-us/universal-declaration-of-human-rights"},{t:"OHCHR: Universal Periodic Review", url:"https://www.ohchr.org/en/hr-bodies/upr/upr-home"}],
    checked:"2026-11"},

   {id:"international-courts", title:"International courts: the ICJ and the ICC", aka:["ICJ","ICC","World Court","Hague courts"], tags:["international relations","law"],
    summary:"The International Court of Justice settles disputes between states; the International Criminal Court tries individuals for the gravest crimes.",
    levels:{
     starter:[
      "Two famous international courts sit in The Hague, in the Netherlands, and they are easy to confuse.",
      "The **International Court of Justice (ICJ)** is the UN’s court. It settles legal disputes between **countries**, for example over a border, and gives advice on legal questions when UN bodies ask.",
      "The **International Criminal Court (ICC)** tries **people**, including leaders, accused of genocide, war crimes, crimes against humanity and aggression. It was created by a treaty, the Rome Statute, and is not part of the UN.",
      {key:"ICJ: state against state. ICC: prosecutor against a person."},
      "Neither court has its own police. The ICJ relies on states to respect its rulings, and the ICC relies on states to arrest suspects and hand them over. Both still matter: the ICJ helps states settle disputes peacefully, and the ICC exists so that people accused of the worst crimes cannot count on escaping justice."
     ],
     builder:[
      {table:[
        ["","ICJ","ICC"],
        ["Created","1945, by the UN Charter","Rome Statute adopted 1998, in force 2002"],
        ["Judges","15, nine-year terms","18, nine-year terms"],
        ["Who is judged","States","Individuals"],
        ["Jurisdiction","Only with the states’ consent","Crimes on member territory or by member nationals, Security Council referrals, or accepted jurisdiction"],
        ["Outcome","Binding judgment for the parties; advisory opinions","Conviction and prison sentence, or acquittal"]
      ]},
      "ICJ consent can come from a special agreement, a treaty clause or a declaration accepting jurisdiction in advance. Cases range from boundaries (Cameroon v. Nigeria, 2002) to the use of force (Nicaragua v. United States, 1986); its 2025 advisory opinion on climate change was unanimous.",
      "The ICC works by **complementarity**: it acts only when national courts are unwilling or unable genuinely to prosecute. 125 states were parties as of November 2026; China, India, Russia and the United States are not. It depends on states to arrest suspects.",
      "Inside the ICC, an independent Prosecutor investigates; Pre-Trial Chambers decide whether to issue arrest warrants and confirm charges; Trial and Appeals Chambers hear cases. Victims can take part and may receive reparations, supported by a Trust Fund for Victims. The Assembly of States Parties elects the judges and the Prosecutor and approves the budget. The ICJ, for its part, has decided many land and maritime disputes from every region, and compliance can come years later, as when Nigeria completed the handover of the Bakassi peninsula in 2008."
     ],
     pro:[
      "Compliance with ICJ judgments is fairly high when both parties consented to the case, and weaker when jurisdiction was contested. Under Article 94 of the Charter, a party may take non-compliance to the Security Council, where a veto can block action, as happened after the Nicaragua judgment.",
      "The ICC has faced sustained criticism: its early cases were concentrated in Africa, prompting AU objections, though several of those situations were referred by the governments concerned; its trials are long and costly; and its arrest warrants depend on cooperation from states that may have political reasons not to cooperate. Supporters point to convictions for crimes such as using child soldiers and destroying cultural heritage, and to investigations on several continents. Burundi (2017) and the Philippines (2019) withdrew. In 2026 Burkina Faso, Mali, Niger, Venezuela and Chad gave notice of withdrawal, which takes effect a year after notice, in mid-2027; Hungary reversed a planned withdrawal before it took effect. The Court can still deal with crimes committed while a state was a party.",
      "Other bodies fill gaps: ad hoc tribunals (Yugoslavia 1993, Rwanda 1994), hybrid courts mixing national and international judges (for example in Sierra Leone and Cambodia), regional human rights courts, the International Tribunal for the Law of the Sea, WTO dispute panels and arbitration. National courts also try international crimes, sometimes under universal jurisdiction."
     ]
    },
    related:["international-law","human-rights-regime","responsibility-to-protect","united-nations"],
    read:[{book:"ospol", where:"Section 15.2 “International Law”"}],
    sources:[{t:"International Court of Justice: Statute of the Court", url:"https://www.icj-cij.org/statute"},{t:"International Criminal Court: About the Court", url:"https://www.icc-cpi.int/about/the-court"},{t:"ICC Assembly of States Parties: The States Parties to the Rome Statute", url:"https://asp.icc-cpi.int/states-parties"}],
    checked:"2026-11"},

   {id:"responsibility-to-protect", title:"The responsibility to protect (R2P)", aka:["R2P","RtoP","sovereignty as responsibility"], tags:["international relations","human rights","security"],
    summary:"The 2005 commitment that states must protect their people from four mass-atrocity crimes, others should help, and the international community should act through the UN when a state manifestly fails.",
    levels:{
     starter:[
      "The responsibility to protect, often written R2P, is an answer to a hard question: what should the world do when a government fails to protect its own people from mass killing, or carries it out itself?",
      "The idea grew from the failures of the 1990s, especially the 1994 genocide against the Tutsi in Rwanda and the 1995 killings at Srebrenica, when the UN and its members did not stop atrocities.",
      "R2P says that sovereignty is not just a shield but a responsibility. Every state must protect its people from genocide, war crimes, ethnic cleansing and crimes against humanity. Other countries should help. If a state clearly fails, the international community should respond through the UN, peacefully if possible.",
      {key:"R2P is a political commitment, not a licence to invade: force still needs Security Council approval."}
     ],
     builder:[
      "The International Commission on Intervention and State Sovereignty (2001), co-chaired by Gareth Evans and Mohamed Sahnoun, developed the idea, building on Francis Deng’s concept of “sovereignty as responsibility”. The African Union’s Constitutive Act (2000) had already given the AU a right to intervene over war crimes, genocide and crimes against humanity.",
      "World leaders endorsed R2P in paragraphs 138–139 of the 2005 World Summit Outcome Document, limited to four crimes and with collective action through the Security Council “on a case-by-case basis”. In 2009 Secretary-General Ban Ki-moon set out three pillars:",
      {ol:[
        "Each state’s responsibility to protect its population.",
        "International assistance to help states meet that responsibility.",
        "Timely and decisive collective response when a state is manifestly failing, using diplomatic, humanitarian and other peaceful means first, and force only under the Charter."
      ]},
      "Cases often discussed: Kenya (2008, mediation), Côte d’Ivoire and Libya (2011, Council-authorised force), and crises where Council divisions blocked action.",
      "Prevention tools include early warning (the UN Office on Genocide Prevention and the Responsibility to Protect publishes a Framework of Analysis for Atrocity Crimes), mediation, human rights monitoring, targeted sanctions and referrals to the ICC. The General Assembly holds regular debates on R2P, and many states have appointed national focal points to coordinate their own prevention work."
     ],
     pro:[
      "Libya is the pivotal controversy. Resolution 1973 (10 votes in favour, 5 abstentions) authorised “all necessary measures” to protect civilians; critics, including several abstaining states, argued the NATO-led operation became regime change, damaging trust in later R2P debates. Brazil’s “responsibility while protecting” proposal sought stricter criteria and accountability for those carrying out mandates.",
      "Theoretical readings differ. Constructivists treat R2P as a norm that changed the terms of debate even where behaviour lags. Realists see selective application shaped by interests. Postcolonial critics see risks of renewed paternalism by powerful states; many Global South scholars and governments instead emphasise pillars one and two and the AU’s doctrine of non-indifference, arguing that prevention, not intervention, is the heart of R2P.",
      "Legally, R2P created no new exception to the ban on force: lawful force still requires self-defence or Security Council authorisation. Debate continues about whether “humanitarian intervention” without authorisation, as in Kosovo in 1999, could ever be lawful; most states and scholars say no under current law.",
      "Measuring success is hard: atrocities that are prevented leave no headlines, while failures are highly visible. Researchers therefore study near-misses and cases where early diplomacy, the presence of peacekeepers or the threat of prosecution may have changed leaders’ calculations, and debate how much credit any international action deserves."
     ]
    },
    related:["human-rights-regime","un-security-council","international-courts","peacekeeping"],
    read:[{book:"eir", where:"Chapter 11 “Protecting People”"}],
    sources:[{t:"UN Office on Genocide Prevention and the Responsibility to Protect: About R2P", url:"https://www.un.org/en/genocide-prevention/responsibility-protect/about"}],
    checked:"2026-11"},

   {id:"international-political-economy", title:"International political economy", aka:["IPE","global political economy","mercantilism, liberalism and structuralism"], tags:["international relations","economics"],
    summary:"The study of how politics and economics shape each other across borders, usually through mercantilist, liberal and structuralist lenses.",
    levels:{
     starter:[
      "International political economy (IPE) asks how money and power interact between countries. Who writes the rules of trade? Why do some countries get rich and others stay poor? Who rescues a country that can’t pay its debts, and on what terms?",
      "Everyday life is full of IPE: the price of fuel, the parts in a phone, a tax on imported cars, a loan to a government in crisis.",
      "There are three classic ways to see it. **Mercantilists** say wealth is power, so the state should build up national industry. **Liberals** say open trade lets everyone gain. **Structuralists** say the system is set up so that rich countries gain at poorer countries’ expense.",
      {key:"Economic questions between states are always also political questions: who gains, who decides, who pays."}
     ],
     builder:[
      {table:[
        ["View","Key ideas","Associated thinkers"],
        ["Mercantilism / economic nationalism","Trade surpluses, national industry, infant-industry protection","Alexander Hamilton (1791), Friedrich List (1841)"],
        ["Economic liberalism","Specialisation, comparative advantage, open markets, institutions","Adam Smith (1776), David Ricardo (1817)"],
        ["Structuralism","Core and periphery, unequal exchange, dependency","Raúl Prebisch and Hans Singer (1950), dependency and world-systems theorists"]
      ]},
      "Each view has a cousin in IR theory: mercantilism with realism, economic liberalism with liberalism, structuralism with Marxist and critical theory.",
      "Key institutions: the WTO (trade rules), the IMF (financial stability) and the World Bank (development), plus regional development banks, UNCTAD and groupings such as the G20.",
      "Three questions organise much of the field. **Trade**: who gains from opening markets and who should be protected (see {{global-trade}}). **Money and finance**: how exchange rates, capital flows and debt crises are managed, and by whom (see {{bretton-woods-institutions}}). **Development**: why income and wellbeing differ so much between countries, and what policies or rules could change that (see {{development-ir}}). [[multinational-corporation|Multinational corporations]], central banks, credit-rating agencies and investors are major actors in all three. Most real governments mix the three views, for example combining open trade in some sectors with protection or industrial policy in others. A useful habit: for any economic news story, ask which view the writer assumes."
     ],
     pro:[
      "The terms are slippery. In IR, “neoliberal” usually means [[neoliberal-institutionalism|neoliberal institutionalism]] (Keohane and others), a theory about cooperation; in economics and public debate, “neoliberalism” usually means market-oriented policies such as privatisation and deregulation. Similarly, “structuralism” covers several related traditions, from Latin American structuralist economics to Marxist and world-systems analysis.",
      "Modern IPE also studies hegemonic stability (the idea that an open world economy needs a leading power to underpin it), the politics of global finance and currencies, the developmental state (Chalmers Johnson’s 1982 study of Japan and later work on the Republic of Korea), global value chains, and the power of multinational corporations. Feminist IPE examines unpaid and care work and the gendered effects of trade and austerity.",
      "Ha-Joon Chang’s *Kicking Away the Ladder* (2002) argues that today’s rich countries used protection while industrialising and now urge others not to; liberal economists reply that many protected industries failed and that export-oriented openness worked better in East Asia. The evidence is debated, and many economists now take a middle position that context and policy design matter.",
      "Since the 2008 global financial crisis and the trade tensions of the late 2010s and 2020s, debates over industrial policy, supply-chain security and economic sanctions have revived arguments that sound mercantilist, even in countries long associated with economic liberalism."
     ]
    },
    related:["global-trade","bretton-woods-institutions","development-ir","marxism-ir","theories-global-inequality"],
    read:[{book:"ospol", where:"Section 16.1 “The Origins of International Political Economy”"},{book:"eir", where:"Chapter 8 “Global Political Economy”"}],
    sources:[{t:"OpenStax Introduction to Political Science, 16.1 The Origins of International Political Economy", url:"https://openstax.org/books/introduction-political-science/pages/16-1-the-origins-of-international-political-economy"}],
    checked:"2026-11"},

   {id:"bretton-woods-institutions", title:"The Bretton Woods institutions: IMF and World Bank", aka:["IMF","World Bank","Bretton Woods"], tags:["international relations","economics"],
    summary:"The International Monetary Fund and the World Bank, created at Bretton Woods in 1944 to stabilise money and finance reconstruction and development.",
    levels:{
     starter:[
      "In July 1944, before the Second World War had ended, delegates from 44 Allied countries met at Bretton Woods in the United States. They wanted to avoid a repeat of the 1930s, when currency chaos and trade barriers deepened the Great Depression.",
      "They created two institutions. The **International Monetary Fund (IMF)** helps keep the world’s money system stable and lends to countries in financial trouble. The **World Bank** lends money and gives grants for development: roads, schools, power, health.",
      "Both are owned by their member countries, but voting depends on how much each country contributes, so richer countries have more say.",
      {key:"IMF: short-term crises and financial stability. World Bank: long-term development."},
      "Both have their headquarters in Washington, D.C., and almost every country is a member. They are part of the wider UN family as specialized agencies, but they run independently, with their own boards and voting rules."
     ],
     builder:[
      "Under the original Bretton Woods system, currencies were pegged to the US dollar, and the dollar was convertible into gold at US$35 an ounce. The United States ended convertibility in August 1971 and major currencies floated from 1973. The IMF shifted to surveillance of members’ economies, advice and crisis lending.",
      {list:[
        "**IMF**: 191 members; funded mainly by quotas that reflect members’ economic size; lends with **conditionality** (policy conditions).",
        "**World Bank Group**: the IBRD lends to middle-income countries; the International Development Association (1960) offers grants and very cheap loans to the poorest.",
        "**Governance**: the United States holds just over 16% of IMF votes; key decisions need 85%, giving it a blocking vote. By convention a European heads the IMF and an American the World Bank."
      ]},
      "In the 1980s and 1990s, **structural adjustment** loans required budget cuts, privatisation and trade liberalisation, the “Washington Consensus” named by John Williamson in 1989.",
      "The IMF also creates Special Drawing Rights (SDRs), a reserve asset based on a basket of major currencies; in 2021 it made its largest-ever allocation, worth about US$650 billion, to help members through the COVID-19 crisis. The World Bank Group also includes the International Finance Corporation, which invests in private firms. The Bank tracks extreme poverty using the [[international-poverty-line|international poverty line]] you met in Unit 3."
     ],
     pro:[
      "Critics argue that conditionality imposed one-size-fits-all policies, cut social spending and worsened crises, a charge widely debated after the 1997–98 Asian financial crisis; that governance under-represents emerging and developing economies; and that leadership conventions lack legitimacy. Defenders reply that countries arrive in crisis, that lenders need assurance of repayment, and that the institutions have changed: more emphasis on social spending floors, debt relief for the poorest (HIPC from 1996, the Multilateral Debt Relief Initiative from 2005) and quota reforms, though reform has been slow.",
      "New institutions reflect shifting power: the Asian Infrastructure Investment Bank and the New Development Bank of the BRICS began work in the mid-2010s, and China became a major bilateral lender. Debt restructurings now involve many kinds of creditors, which the G20’s Common Framework (2020) tries to coordinate.",
      "Theoretical readings: liberals see the institutions as public goods that reduce instability; realists as tools of their most powerful members; structuralists as enforcers of a core-periphery order.",
      "Quota reviews periodically realign shares with economic weight. A 2010 reform that raised emerging economies’ shares took effect only in 2016, after long delays in approval by the United States Congress, and critics note that shares still lag behind some economies’ weight in the world economy."
     ]
    },
    related:["international-political-economy","global-trade","development-ir"],
    read:[{book:"ospol", where:"Section 16.3 “The Bretton Woods Institutions”"}],
    sources:[{t:"IMF: What is the IMF?", url:"https://www.imf.org/en/About/Factsheets/IMF-at-a-Glance"},{t:"OpenStax Introduction to Political Science, 16.3 The Bretton Woods Institutions", url:"https://openstax.org/books/introduction-political-science/pages/16-3-the-bretton-woods-institutions"}],
    checked:"2026-11"},

   {id:"global-trade", title:"Global trade and the WTO", aka:["free trade","comparative advantage","protectionism","tariffs","WTO","GATT"], tags:["international relations","economics"],
    summary:"Why countries trade, why they sometimes protect themselves, and how GATT and the WTO set shared trade rules.",
    levels:{
     starter:[
      "Countries trade because no country can make everything well and cheaply. David Ricardo showed in 1817 that two countries can both gain from trade even if one is better at making everything, as long as each specialises in what it gives up least to make. This is **comparative advantage**.",
      "Sometimes governments protect local producers with **tariffs** (taxes on imports), quotas or subsidies. The importing business pays the tariff to its own government, and the cost is often passed on to buyers.",
      "Since 1995, the **World Trade Organization (WTO)** has run the main global trade rules. Its 166 members account for most of world trade.",
      {key:"Trade can make countries better off overall, but some groups inside each country can lose, which is why trade is political."}
     ],
     builder:[
      {ex:"Invented example: one worker-day makes 6 sacks of rice or 2 radios in Coralia, and 1 sack or 1 radio in Montaña. A radio costs Coralia 3 sacks and Montaña 1. Montaña has the comparative advantage in radios, Coralia in rice. At a trade price between 1 and 3 sacks per radio, both gain.", label:"Comparative advantage"},
      "Arguments for protection include infant industries, national security, cushioning communities against shocks and bargaining leverage. Arguments against include higher prices, retaliation, inefficiency and trade wars, as in the 1930s after the US Smoot–Hawley tariffs.",
      {list:[
        "**GATT** (1947, 23 countries; in force 1948) cut tariffs through eight rounds.",
        "**WTO** (1 January 1995): most-favoured-nation treatment, national treatment, consensus decisions, binding dispute settlement.",
        "Exceptions: free trade areas and customs unions, preferences for developing countries, security and health exceptions."
      ]},
      "Much of today’s trade runs through **global value chains**: a product is designed in one country, its parts are made in several others and it is assembled somewhere else, so one phone crosses many borders. That is why tariffs on parts can raise costs for a country’s own manufacturers. Services (tourism, transport, finance, software) and digital trade are a growing share. Alongside the WTO, hundreds of regional and bilateral agreements set trade rules, some reaching far beyond tariffs into investment, labour and environmental standards."
     ],
     pro:[
      "The Doha Development Round (2001) stalled, largely over agriculture, and the WTO’s negotiating function has since produced narrower deals. Since December 2019 the Appellate Body has been unable to hear appeals because appointments have been blocked, so a panel ruling can be appealed “into the void”; some members use the Multi-Party Interim Appeal Arbitration Arrangement (MPIA) instead.",
      "Distribution matters: the Stolper–Samuelson theorem predicts that trade raises returns to a country’s abundant factor and lowers them for its scarce factor, and research on import competition has found concentrated local job losses in affected regions. Economists debate how large and lasting such effects are and what policies (retraining, regional support, social insurance) best address them.",
      "Tariff incidence depends on market conditions; studies of the 2018–2019 US–China tariff rounds found that most of the cost was passed through to buyers in the importing country. Intellectual-property rules (the TRIPS agreement) remain contested; the 2001 Doha Declaration affirmed that they should not prevent members from protecting public health.",
      "Joining the WTO means negotiating accession terms with existing members, which can take many years; Comoros and Timor-Leste joined in 2024. Developing countries receive “special and differential treatment”, such as longer transition periods, although members largely designate themselves as developing, which is itself disputed."
     ]
    },
    related:["international-political-economy","bretton-woods-institutions","regional-organizations","development-ir"],
    read:[{book:"ospol", where:"Section 16.2 “The Advent of the Liberal Economy”"},{book:"eir", where:"Chapter 8 “Global Political Economy”"}],
    sources:[{t:"WTO: What is the WTO?", url:"https://www.wto.org/english/thewto_e/whatis_e/whatis_e.htm"}],
    checked:"2026-11"},

   {id:"development-ir", title:"Development, aid and the SDGs", aka:["international development","SDGs","foreign aid","ODA","debt relief"], tags:["international relations","development","economics"],
    summary:"How the world defines and pursues development: the Sustainable Development Goals, official aid, debt and the debates about what works.",
    levels:{
     starter:[
      "“Development” is about people living longer, healthier and freer lives with enough income to meet their needs. For a long time it was measured mainly by income per person; today measures such as the Human Development Index also count health and education.",
      "In 2015 every UN member agreed the **Sustainable Development Goals**: 17 goals and 169 targets for 2030, from ending poverty and hunger to clean energy and climate action. They apply to all countries, rich and poor.",
      "Rich countries give **aid** (officially, “official development assistance”). In 1970 they were asked to give 0.7% of their national income; only a few do. Many poor countries also struggle with **debt**, which can absorb money needed for schools and clinics.",
      {key:"Development is unequal and contested: people disagree about what it means, who should pay and what works."}
     ],
     builder:[
      "The Millennium Development Goals (2000–2015) had eight goals focused on poor countries. The SDGs (adopted 25 September 2015) are broader and universal, with the pledge to “leave no one behind”. The UN’s *Sustainable Development Goals Report 2025* found that of 139 assessable targets, 35% were on track or making moderate progress, 31% marginal progress, 17% stagnant and 18% regressing.",
      "The OECD’s Development Assistance Committee defines ODA as government aid that promotes and specifically targets the economic development and welfare of developing countries. Its preliminary 2025 figures show US$174.3 billion, down 23.1% in real terms from 2024, about 0.26% of members’ combined GNI; Denmark, Luxembourg, Norway and Sweden met 0.7%.",
      "Debt relief came through the Heavily Indebted Poor Countries initiative (1996), the Multilateral Debt Relief Initiative (2005), and the G20 Common Framework (2020). Remittances from migrant workers now exceed aid for many low- and middle-income countries.",
      "Development finance comes from many sources besides aid: governments’ own tax revenues (usually the largest), private investment, remittances, development-bank loans and philanthropy. The 2015 Addis Ababa Action Agenda set out how to finance the SDGs, and the fourth UN conference on financing for development met in Seville, Spain, in 2025."
     ],
     pro:[
      "Theories of development connect directly to sociology’s theories of global inequality: [[modernization-theory|modernization theory]] (stages of growth), [[dependency-theory|dependency theory]] (underdevelopment produced by unequal ties to the core), [[world-systems-theory|world-systems theory]] (core, semi-periphery, periphery). Amartya Sen’s capability approach (*Development as Freedom*, 1999) underpins human development measures.",
      "Aid effectiveness is contested: some economists argue for scaled-up, well-targeted aid; others, including critics from aid-receiving countries, argue aid can weaken accountability or distort markets. Evidence suggests effects depend heavily on context, sector and delivery; randomised evaluations have shown strong results for some specific interventions while leaving broader questions open. South–South cooperation and lending by China and other non-DAC providers have diversified development finance.",
      "Reading figures carefully: ODA numbers are reported in real terms (adjusted for prices and exchange rates), preliminary figures are revised, and in-donor refugee costs and debt relief can count as ODA, which affects comparisons. SDG progress reports cover only targets with enough trend data.",
      "Critical, feminist and postcolonial scholars add further questions: whether growth-centred development fits within planetary limits (the “degrowth” and “post-development” debates), how unpaid care work, mostly done by women, is left out of GDP and many development measures, and who gets to define what counts as “developed”."
     ]
    },
    related:["international-political-economy","bretton-woods-institutions","global-stratification","theories-global-inequality","measuring-inequality"],
    read:[{book:"eir", where:"Chapter 10 “Global Poverty and Wealth”"},{book:"ospol", where:"Section 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”"}],
    sources:[{t:"UN Statistics Division: The Sustainable Development Goals Report 2025", url:"https://unstats.un.org/sdgs/report/2025/"},{t:"OECD: Official development assistance (ODA)", url:"https://www.oecd.org/en/topics/official-development-assistance-oda.html"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"united-nations", term:"United Nations (UN)", def:"The intergovernmental organisation of 193 member states, founded in 1945 to maintain peace and security and promote cooperation and human rights.", codex:"united-nations"},
   {id:"un-charter", term:"UN Charter", def:"The treaty that founded the United Nations, signed on 26 June 1945 and in force since 24 October 1945. It sets out the UN’s purposes, principles and organs.", codex:"united-nations"},
   {id:"general-assembly", term:"General Assembly", def:"The UN body where all 193 members sit with one vote each. Most of its resolutions are recommendations, but its budget decisions bind members.", codex:"united-nations"},
   {id:"security-council", term:"Security Council", def:"The 15-member UN body with primary responsibility for international peace and security; its decisions bind all members.", codex:"un-security-council"},
   {id:"veto", term:"veto", def:"The power of each of the Security Council’s five permanent members to block a non-procedural decision by voting against it. An abstention is not a veto.", codex:"un-security-council"},
   {id:"un-secretary-general", term:"UN Secretary-General", def:"The UN’s chief administrative officer, appointed by the General Assembly on the Security Council’s recommendation, usually for five-year terms.", codex:"united-nations"},
   {id:"specialized-agency", term:"specialized agency", def:"A separate international organisation with its own members, budget and governing body, linked to the UN by agreement, such as WHO, the ILO or the IMF.", codex:"united-nations"},
   {id:"uniting-for-peace", term:"Uniting for Peace", def:"A 1950 General Assembly resolution saying the Assembly can recommend collective measures when a veto stops the Security Council from acting on a threat to peace.", codex:"un-security-council"},
   {id:"sanctions", term:"sanctions (international)", def:"Measures short of force, such as trade bans, arms embargoes, asset freezes or travel bans, used to pressure a state, group or person. The Security Council can make them binding under Article 41 of the Charter.", codex:"un-security-council"},
   {id:"regionalism", term:"regionalism", def:"States in one part of the world building shared organisations and rules, for trade, security, a louder voice or common problems.", codex:"regional-organizations"},
   {id:"intergovernmentalism", term:"intergovernmental (design)", def:"An organisation in which member governments keep the final say, often deciding by consensus, so each can block decisions. Also a theory that governments stay in control of integration.", codex:"regional-organizations"},
   {id:"supranationalism", term:"supranational (design)", def:"An organisation with institutions above its member states that can make, enforce or interpret binding rules, so members pool some sovereignty.", codex:"regional-organizations"},
   {id:"free-trade-area", term:"free trade area", def:"A group of countries that remove tariffs on each other’s goods while each keeps its own tariffs on outsiders, usually with rules of origin.", codex:"regional-organizations"},
   {id:"customs-union", term:"customs union", def:"A free trade area whose members also apply one common tariff to goods from outside.", codex:"regional-organizations"},
   {id:"neofunctionalism", term:"neofunctionalism", def:"A theory of regional integration (Ernst Haas, 1958) holding that cooperation in one sector spills over into pressure for cooperation in others.", codex:"regional-organizations"},
   {id:"european-union", term:"European Union (EU)", def:"A union of 27 European states, created by the Maastricht Treaty (in force 1993), with supranational institutions, a single market and, for most members, the euro.", codex:"regional-organizations"},
   {id:"african-union", term:"African Union (AU)", def:"The organisation of 55 African member states, launched in 2002 to replace the Organisation of African Unity (1963).", codex:"regional-organizations"},
   {id:"asean", term:"ASEAN", def:"The Association of Southeast Asian Nations, founded in 1967 by five states and with eleven members since Timor-Leste joined in October 2025; known for consensus and non-interference.", codex:"regional-organizations"},
   {id:"mercosur", term:"Mercosur", def:"The Southern Common Market, founded in 1991 by Argentina, Brazil, Paraguay and Uruguay: a customs union with a common external tariff.", codex:"regional-organizations"},
   {id:"pacific-islands-forum", term:"Pacific Islands Forum", def:"An intergovernmental organisation of 18 Pacific countries and territories, founded in 1971 as the South Pacific Forum, focused on the ocean, fisheries and climate change.", codex:"regional-organizations"},
   {id:"non-interference", term:"non-interference", def:"The principle that states should not intervene in each other’s internal affairs; central to the UN Charter (Article 2.7) and to ASEAN.", codex:"regional-organizations"},
   {id:"international-law", term:"international law", def:"The rules that bind states and other international actors in their relations, made mainly by treaties and custom.", codex:"international-law"},
   {id:"treaty", term:"treaty", def:"A written agreement between states (or international organisations) governed by international law; also called a convention, covenant, protocol or charter. It binds only its parties.", codex:"international-law"},
   {id:"ratification", term:"ratification", def:"A state’s formal act of consenting to be bound by a treaty, usually after approval at home. Signing alone usually does not bind.", codex:"international-law"},
   {id:"customary-international-law", term:"customary international law", def:"Unwritten international law formed by general state practice that states follow because they believe it is legally required (opinio juris).", codex:"international-law"},
   {id:"opinio-juris", term:"opinio juris", def:"Latin for “opinion of law”: the belief that a practice is legally required. With state practice, it is needed to form customary law.", codex:"international-law"},
   {id:"general-principles-of-law", term:"general principles of law", def:"Principles found across the world’s legal systems, such as good faith, that international courts use to fill gaps; one of the sources in Article 38 of the ICJ Statute.", codex:"international-law"},
   {id:"jus-cogens", term:"jus cogens", def:"Peremptory norms of international law, such as the bans on genocide, slavery, torture and aggression, which no treaty may override.", codex:"international-law"},
   {id:"international-court-of-justice", term:"International Court of Justice (ICJ)", def:"The UN’s principal court, in The Hague. Its 15 judges settle legal disputes between consenting states and give advisory opinions.", codex:"international-courts"},
   {id:"advisory-opinion", term:"advisory opinion", def:"An ICJ answer to a legal question asked by an authorised UN body. Not binding as such, but treated as an authoritative statement of the law.", codex:"international-courts"},
   {id:"international-criminal-court", term:"International Criminal Court (ICC)", def:"A permanent court in The Hague, created by the Rome Statute (1998, in force 2002), that tries individuals for genocide, crimes against humanity, war crimes and aggression.", codex:"international-courts"},
   {id:"complementarity", term:"complementarity", def:"The rule that the ICC acts only when national courts are unwilling or unable to genuinely investigate or prosecute a case.", codex:"international-courts"},
   {id:"crimes-against-humanity", term:"crimes against humanity", def:"Serious acts such as murder, enslavement, torture or persecution committed as part of a widespread or systematic attack on a civilian population.", codex:"international-courts"},
   {id:"war-crimes", term:"war crimes", def:"Serious violations of the laws of armed conflict, such as deliberately attacking civilians or mistreating prisoners.", codex:"international-courts"},
   {id:"human-rights", term:"human rights", def:"Rights every person holds simply by being human, which states must respect, protect and fulfil.", codex:"human-rights-regime"},
   {id:"universal-declaration-human-rights", term:"Universal Declaration of Human Rights (UDHR)", def:"The declaration of 30 articles adopted by the UN General Assembly in Paris on 10 December 1948; not a treaty, but the foundation of later human rights law.", codex:"human-rights-regime"},
   {id:"treaty-body", term:"treaty body", def:"A committee of independent experts that monitors how states carry out a UN human rights treaty, reviewing reports and sometimes individual complaints.", codex:"human-rights-regime"},
   {id:"human-rights-council", term:"Human Rights Council", def:"The UN body of 47 elected states, created in 2006, that debates human rights and runs the Universal Periodic Review.", codex:"human-rights-regime"},
   {id:"universal-periodic-review", term:"Universal Periodic Review", def:"A process in which every UN member’s human rights record is reviewed by other states every few years, with recommendations the state accepts or notes.", codex:"human-rights-regime"},
   {id:"responsibility-to-protect", term:"responsibility to protect (R2P)", def:"The 2005 commitment that each state must protect its people from genocide, war crimes, ethnic cleansing and crimes against humanity, with international help and, if a state manifestly fails, collective action through the UN.", codex:"responsibility-to-protect"},
   {id:"international-political-economy", term:"international political economy (IPE)", def:"The study of how politics and economics shape each other across borders: trade, money, finance, development and who gains or loses.", codex:"international-political-economy"},
   {id:"mercantilism", term:"mercantilism", def:"The view that wealth is a source of national power, so the state should build domestic industry, protect it and seek trade surpluses; today often called economic nationalism.", codex:"international-political-economy"},
   {id:"economic-liberalism", term:"economic liberalism", def:"The view that open markets, specialisation and trade make all participants richer, with institutions helping states cooperate.", codex:"international-political-economy"},
   {id:"structuralism", term:"structuralism (in IPE)", def:"Views, including Marxist, dependency and world-systems approaches, holding that the world economy is structured to benefit rich core countries at the expense of the periphery.", codex:"international-political-economy"},
   {id:"import-substitution", term:"import substitution", def:"A development strategy of protecting new domestic industries so a country makes goods it used to import; widely used in Latin America and elsewhere, especially from the 1950s to the 1970s.", codex:"international-political-economy"},
   {id:"new-international-economic-order", term:"New International Economic Order (NIEO)", def:"A 1974 UN General Assembly declaration, pushed by developing countries, calling for fairer rules on trade, commodities, finance and technology.", codex:"international-political-economy"},
   {id:"absolute-advantage", term:"absolute advantage", def:"Being able to make more of a good than another producer with the same resources.", codex:"global-trade"},
   {id:"comparative-advantage", term:"comparative advantage", def:"Being able to make a good at a lower opportunity cost than another producer. Trade based on it can benefit both sides (David Ricardo, 1817).", codex:"global-trade"},
   {id:"free-trade", term:"free trade", def:"Trade between countries without tariffs, quotas or other barriers set by governments.", codex:"global-trade"},
   {id:"protectionism", term:"protectionism", def:"Government policies that shield domestic producers from foreign competition, such as tariffs, quotas and subsidies.", codex:"global-trade"},
   {id:"tariff", term:"tariff", def:"A tax on imported goods, usually a percentage of their value, paid by the importer to its own country’s customs service.", codex:"global-trade"},
   {id:"most-favoured-nation", term:"most-favoured-nation (MFN) treatment", def:"The WTO rule that a trade advantage given to one member must be given to all members, with agreed exceptions.", codex:"global-trade"},
   {id:"world-trade-organization", term:"World Trade Organization (WTO)", def:"The organisation, established on 1 January 1995, that runs global trade rules and settles trade disputes among its 166 members.", codex:"global-trade"},
   {id:"bretton-woods", term:"Bretton Woods", def:"The 1944 conference of 44 Allied countries that created the IMF and the World Bank and a system of fixed exchange rates tied to the US dollar and gold, which ended in 1971–1973.", codex:"bretton-woods-institutions"},
   {id:"imf", term:"International Monetary Fund (IMF)", def:"A Bretton Woods institution of 191 members that monitors the world economy, advises governments and lends to countries in balance-of-payments trouble.", codex:"bretton-woods-institutions"},
   {id:"world-bank", term:"World Bank", def:"A Bretton Woods institution that finances development with loans, and with grants and very cheap loans for the poorest countries.", codex:"bretton-woods-institutions"},
   {id:"conditionality", term:"conditionality", def:"The policy conditions attached to loans from the IMF, the World Bank or other lenders.", codex:"bretton-woods-institutions"},
   {id:"structural-adjustment", term:"structural adjustment", def:"IMF and World Bank lending programmes of the 1980s and 1990s that required budget cuts, privatisation and market opening.", codex:"bretton-woods-institutions"},
   {id:"washington-consensus", term:"Washington Consensus", def:"John Williamson’s 1989 name for a package of market-oriented policies promoted by Washington-based institutions, later a label for structural adjustment in general.", codex:"bretton-woods-institutions"},
   {id:"millennium-development-goals", term:"Millennium Development Goals (MDGs)", def:"Eight UN development goals for 2000–2015, focused on developing countries; replaced by the SDGs.", codex:"development-ir"},
   {id:"sustainable-development-goals", term:"Sustainable Development Goals (SDGs)", def:"The 17 goals and 169 targets for 2030 adopted by all UN members on 25 September 2015, applying to every country.", codex:"development-ir"},
   {id:"official-development-assistance", term:"official development assistance (ODA)", def:"Government aid that promotes and specifically targets the economic development and welfare of developing countries, as defined by the OECD’s Development Assistance Committee.", codex:"development-ir"},
   {id:"debt-relief", term:"debt relief", def:"Cancelling or restructuring a country’s debts, for example through the HIPC initiative (1996), the Multilateral Debt Relief Initiative (2005) or the G20 Common Framework (2020).", codex:"development-ir"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u7-q01", lesson:"e2u7-l1", level:1, q:"When did the UN Charter enter into force?", options:[
     {t:"24 October 1945", ok:true, why:"Correct. It was signed on 26 June 1945 and entered into force on 24 October, now United Nations Day."},
     {t:"26 June 1945", why:"That is when it was signed in San Francisco. It entered into force once enough states had ratified it."},
     {t:"1920", why:"1920 is when the League of Nations, the UN’s predecessor, was founded."},
     {t:"10 December 1948", why:"That is when the General Assembly adopted the Universal Declaration of Human Rights."}
   ]},
   {id:"e2u7-q02", lesson:"e2u7-l1", level:2, q:"A draft Security Council resolution on a peace operation gets 9 votes in favour, none against and 6 abstentions, including two permanent members. What happens?", options:[
     {t:"It passes: it has nine yes votes and no permanent member voted no", ok:true, why:"Correct. Abstentions by permanent members are not vetoes, so nine yes votes are enough."},
     {t:"It fails, because two permanent members abstained", why:"By long practice, a permanent member’s abstention doesn’t block a resolution. Only a “no” does."},
     {t:"It fails, because it needs a two-thirds majority of all 15", why:"The Charter requires nine yes votes, not two-thirds of the Council."},
     {t:"It passes only if the General Assembly also approves it", why:"Security Council resolutions don’t need Assembly approval."}
   ]},
   {id:"e2u7-q03", lesson:"e2u7-l1", level:1, q:"Which UN organ includes all 193 members, each with one vote?", options:[
     {t:"The General Assembly", ok:true, why:"Correct. Every member, large or small, has one vote there."},
     {t:"The Security Council", why:"The Council has only 15 members."},
     {t:"The Economic and Social Council", why:"ECOSOC has 54 members elected by the Assembly."},
     {t:"The Secretariat", why:"The Secretariat is the UN’s staff, not a body of member states."}
   ]},
   {id:"e2u7-q04", lesson:"e2u7-l1", level:2, q:"Kenji reads a headline: “UN demands ceasefire”. The article says the General Assembly passed the resolution by a large majority. What is the most accurate reading?", options:[
     {t:"It is a recommendation that carries political weight but does not legally bind the states involved", ok:true, why:"Correct. On peace and security, Assembly resolutions are recommendations; only the Security Council can bind all members."},
     {t:"The states involved are legally required to stop fighting immediately", why:"That would need a binding Security Council decision. The Assembly recommends."},
     {t:"UN troops will now enforce the ceasefire", why:"The Assembly cannot order enforcement, and the UN has no standing army of its own."},
     {t:"The resolution is meaningless because the Assembly has no power at all", why:"Assembly resolutions can matter a great deal politically and sometimes legally, as evidence of states’ views."}
   ]},
   {id:"e2u7-q05", lesson:"e2u7-l1", level:3, q:"Which explanation for giving the five permanent members a veto fits the history of the UN’s founding best?", options:[
     {t:"The great powers of 1945 would only join an organisation that could not act against their vital interests, and the League had failed partly because major powers stayed out or left", ok:true, why:"Correct. The veto was a bargain to keep the strongest states inside, a point realists stress."},
     {t:"The five were the only states that had paid their UN dues", why:"Budget payments have nothing to do with the veto; assessments don’t buy votes."},
     {t:"The five were chosen by a vote of all the world’s peoples", why:"There was no such vote; the five were the main Allied powers of the Second World War."},
     {t:"The veto was added in 1965 when the Council was enlarged", why:"The veto was in the Charter from 1945; the 1965 change only added elected seats."}
   ]},
   {id:"e2u7-q06", lesson:"e2u7-l1", level:1, q:"What happened to the Trusteeship Council?", options:[
     {t:"It suspended its work in 1994 after Palau, the last trust territory, became independent", ok:true, why:"Correct. Its job of supervising territories on the way to self-rule was finished."},
     {t:"It became the Human Rights Council", why:"The Human Rights Council replaced the Commission on Human Rights in 2006."},
     {t:"It merged with the Security Council in 1965", why:"The 1965 change enlarged the Security Council; it didn’t merge any organs."},
     {t:"It still governs about a dozen territories", why:"No trust territories remain."}
   ]},
   {id:"e2u7-q07", lesson:"e2u7-l1", level:1, q:"Which statement about the UN’s specialized agencies, such as WHO and the ILO, is accurate?", options:[
     {t:"They are separate organisations with their own members, budgets and governing bodies, linked to the UN by agreements", ok:true, why:"Correct. That is what makes them “specialized agencies” rather than parts of the Secretariat."},
     {t:"They are departments of the Security Council", why:"They are independent organisations, not parts of the Council."},
     {t:"All of them were created after 1945", why:"Some are older: the ITU dates from 1865, the UPU from 1874 and the ILO from 1919."},
     {t:"They can impose binding sanctions on states", why:"Binding sanctions on peace and security come from the Security Council."}
   ]},
   {id:"e2u7-q08", lesson:"e2u7-l1", level:3, q:"Fatima argues that adding new permanent seats to the Security Council will be very hard. Which fact supports her argument most directly?", options:[
     {t:"A Charter amendment must be ratified by two-thirds of members, including all five permanent members", ok:true, why:"Correct. Under Article 108 each of the five can block any amendment, including one that changes the Council."},
     {t:"The General Assembly has 193 members", why:"Size alone doesn’t explain the difficulty; the ratification rule does."},
     {t:"The Secretary-General is appointed for five-year terms", why:"The Secretary-General’s term has nothing to do with Charter amendments."},
     {t:"The UN’s regular budget is shared by a scale of assessments", why:"Budget rules don’t govern Council reform."}
   ]},
   {id:"e2u7-q09", lesson:"e2u7-l1", level:2, q:"Sione’s country pays the minimum share of the UN regular budget, 0.001%. What does that mean for its voice in the General Assembly?", options:[
     {t:"It still has one vote, exactly like the country paying 22%", ok:true, why:"Correct. Sovereign equality means one state, one vote, whatever a member pays."},
     {t:"Its vote counts for 0.001% of a full vote", why:"Votes aren’t weighted by payments in the Assembly. (They are at the IMF, which is a different organisation.)"},
     {t:"It cannot vote until it pays more", why:"Paying the assessed share keeps full voting rights; only serious arrears can suspend an Assembly vote (Article 19)."},
     {t:"It can only vote on budget questions", why:"Every member votes on every Assembly question."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u7-q10", lesson:"e2u7-l2", level:1, q:"Which feature makes a regional organisation supranational?", options:[
     {t:"Institutions above the member states that can make or enforce rules binding on them", ok:true, why:"Correct. Pooling sovereignty in shared institutions is what “supranational” means."},
     {t:"Annual summits where leaders issue joint statements", why:"Summits keep decisions with governments: an intergovernmental feature."},
     {t:"Decisions taken only by consensus", why:"Consensus gives each member a veto, the opposite of supranational design."},
     {t:"A secretariat that organises meetings", why:"Almost every organisation has one; a secretariat without rule-making power isn’t supranational."}
   ]},
   {id:"e2u7-q11", lesson:"e2u7-l2", level:1, q:"How was ASEAN founded?", options:[
     {t:"By the Bangkok Declaration of 1967, signed by Indonesia, Malaysia, the Philippines, Singapore and Thailand", ok:true, why:"Correct: 8 August 1967."},
     {t:"By a treaty of all ten Southeast Asian states in 1999", why:"1999 is when ASEAN reached ten members, with Cambodia joining."},
     {t:"By the UN Security Council in 1945", why:"ASEAN was created by its member states, not by the UN."},
     {t:"As part of the European Union’s expansion", why:"ASEAN is a separate Southeast Asian organisation with no link to the EU’s membership."}
   ]},
   {id:"e2u7-q12", lesson:"e2u7-l2", level:2, q:"Four countries agree to remove tariffs on each other’s goods and to charge the same tariff on all goods from outside. What have they created?", options:[
     {t:"A customs union", ok:true, why:"Correct. Free internal trade plus a common external tariff is a customs union."},
     {t:"A free trade area", why:"In a free trade area each member keeps its own outside tariffs."},
     {t:"A monetary union", why:"Nothing here involves a shared currency."},
     {t:"A military alliance", why:"Trade rules don’t create mutual defence commitments."}
   ]},
   {id:"e2u7-q13", lesson:"e2u7-l2", level:1, q:"What is distinctive about Article 4(h) of the African Union’s Constitutive Act?", options:[
     {t:"It gives the Union a right to intervene in a member state over war crimes, genocide and crimes against humanity", ok:true, why:"Correct. Adopted in 2000, it marked a move from non-interference towards non-indifference."},
     {t:"It creates a single African currency", why:"There is no single AU currency."},
     {t:"It bans members from ever suspending another member", why:"In fact the AU suspends governments that take power unconstitutionally."},
     {t:"It makes the AU part of the United Nations", why:"The AU is a separate regional organisation."}
   ]},
   {id:"e2u7-q14", lesson:"e2u7-l2", level:3, q:"A scholar argues: “Once European countries shared rules on coal and steel, they found they also needed shared rules on transport, competition and money.” Which theory is this?", options:[
     {t:"Neofunctionalism: cooperation spills over from one sector to the next", ok:true, why:"Correct. Spillover is the core idea of Ernst Haas’s neofunctionalism."},
     {t:"Intergovernmentalism: governments only pool power when it serves national interests", why:"Intergovernmentalists stress governments’ choices, not automatic spillover."},
     {t:"Mercantilism: wealth is a source of power", why:"Mercantilism is a view of national economic strategy, not of integration dynamics."},
     {t:"Structuralism: the core exploits the periphery", why:"That is about global inequality, not European integration."}
   ]},
   {id:"e2u7-q15", lesson:"e2u7-l2", level:3, q:"Priya writes: “ASEAN is a failure because it still has no parliament or court like the EU.” What is the strongest criticism of her argument?", options:[
     {t:"It judges ASEAN by an EU yardstick, when ASEAN’s members deliberately chose a consensus design for their own reasons", ok:true, why:"Correct. Regional organisations should be judged against their own aims; treating the EU as the model is a Eurocentric assumption."},
     {t:"ASEAN does have a directly elected parliament", why:"It doesn’t. The problem with the argument is its yardstick, not its facts."},
     {t:"The EU has no court either", why:"The EU has the Court of Justice of the EU."},
     {t:"ASEAN is part of the EU, so it shares its institutions", why:"ASEAN and the EU are separate organisations."}
   ]},
   {id:"e2u7-q16", lesson:"e2u7-l2", level:1, q:"What does the Pacific Islands Forum’s 2018 Boe Declaration call the single greatest threat to the region?", options:[
     {t:"Climate change", ok:true, why:"Correct. For low-lying island states, rising seas and stronger storms threaten livelihoods and security."},
     {t:"Trade tariffs", why:"Trade matters, but the Boe Declaration names climate change as the greatest threat."},
     {t:"Cyber attacks", why:"Cybersecurity is mentioned in regional security work, but climate change is named as the greatest threat."},
     {t:"Piracy", why:"Not the threat the declaration singles out."}
   ]},
   {id:"e2u7-q17", lesson:"e2u7-l2", level:1, q:"Which description of Mercosur is accurate?", options:[
     {t:"A South American customs union founded in 1991 by the Treaty of Asunción", ok:true, why:"Correct. Argentina, Brazil, Paraguay and Uruguay founded it; Bolivia joined as a full member in 2024."},
     {t:"A military alliance formed during the Cold War", why:"Mercosur is a trade bloc founded after the Cold War."},
     {t:"A currency union using one South American currency", why:"Mercosur members keep their own currencies."},
     {t:"The trade arm of the Organization of American States", why:"Mercosur is a separate organisation."}
   ]},
   {id:"e2u7-q18", lesson:"e2u7-l2", level:2, q:"Tomás is updating an old textbook that says “ASEAN has ten members”. What should the update say?", options:[
     {t:"ASEAN has eleven members since Timor-Leste joined in October 2025", ok:true, why:"Correct. Timor-Leste was admitted as the eleventh member at the October 2025 summit."},
     {t:"ASEAN has five members, its founders", why:"ASEAN grew from five founders to ten by 1999, then eleven."},
     {t:"ASEAN has 27 members", why:"27 is the EU’s membership."},
     {t:"ASEAN has 55 members", why:"55 is the African Union’s membership."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u7-q19", lesson:"e2u7-l3", level:1, q:"What two elements does customary international law require?", options:[
     {t:"General state practice and opinio juris, the belief that the practice is legally required", ok:true, why:"Correct. Without the belief in legal obligation, a practice is only courtesy."},
     {t:"A signed treaty and a Security Council vote", why:"Custom is unwritten and needs neither."},
     {t:"An ICJ judgment and a General Assembly resolution", why:"These can be evidence of custom, but custom comes from practice plus opinio juris."},
     {t:"Ratification by all five permanent members", why:"Ratification belongs to treaties, not custom."}
   ]},
   {id:"e2u7-q20", lesson:"e2u7-l3", level:2, q:"Country M signed a treaty but its parliament has never ratified it. A news report says M “broke the treaty”. What is the most accurate response?", options:[
     {t:"M is not bound by the treaty’s rules yet, though as a signatory it should not defeat the treaty’s object and purpose", ok:true, why:"Correct. Signature usually signals intent; ratification creates the binding obligation. Article 18 of the Vienna Convention adds a limited duty."},
     {t:"M is fully bound because it signed", why:"For most treaties, signature is subject to ratification."},
     {t:"Treaties bind every state whether or not it signs", why:"Treaties bind only their parties. (Custom can bind all states.)"},
     {t:"M must be tried at the ICC", why:"The ICC tries individuals for international crimes, not states for treaty disputes."}
   ]},
   {id:"e2u7-q21", lesson:"e2u7-l3", level:1, q:"Which of these is a jus cogens norm that no treaty can override?", options:[
     {t:"The ban on torture", ok:true, why:"Correct. It is among the peremptory norms widely recognised, with the bans on genocide, slavery and aggression."},
     {t:"The rule that states pay UN dues on time", why:"That is an ordinary Charter obligation, not a peremptory norm."},
     {t:"A trade agreement’s tariff schedule", why:"Treaty tariff rules can be changed by agreement; jus cogens cannot."},
     {t:"The custom of saluting foreign ships", why:"That is a courtesy, not even a legal rule."}
   ]},
   {id:"e2u7-q22", lesson:"e2u7-l3", level:1, q:"Who can be a party to a contentious case at the International Court of Justice?", options:[
     {t:"Only states", ok:true, why:"Correct. Individuals, companies and NGOs can’t bring or face cases there."},
     {t:"Any individual whose rights were violated", why:"Individuals go to regional human rights courts or UN treaty bodies, not the ICJ."},
     {t:"Individuals accused of war crimes", why:"They are tried by the ICC, special tribunals or national courts."},
     {t:"Multinational companies", why:"Companies can’t be parties at the ICJ; their home state might bring a claim on their behalf."}
   ]},
   {id:"e2u7-q23", lesson:"e2u7-l3", level:3, q:"A militia leader from a Rome Statute state party is accused of war crimes. Her own country’s courts have opened a genuine, well-run prosecution. What does this mean for the ICC?", options:[
     {t:"The ICC should not take the case, because of complementarity", ok:true, why:"Correct. The ICC is a court of last resort and steps back when national courts genuinely act."},
     {t:"The ICC must take over, because international courts always come first", why:"It’s the reverse: national courts have the first responsibility."},
     {t:"The ICJ will try her instead", why:"The ICJ hears cases between states, not criminal cases against people."},
     {t:"Nobody can try her, because she is a national of a state party", why:"Being from a state party is what gives the ICC potential jurisdiction; here the national court is acting."}
   ]},
   {id:"e2u7-q24", lesson:"e2u7-l3", level:2, q:"The Paris climate agreement was adopted in December 2015 but entered into force only on 4 November 2016. Why the gap?", options:[
     {t:"It needed at least 55 parties covering at least 55% of global emissions to ratify or join first", ok:true, why:"Correct. Many treaties set a threshold before they enter into force."},
     {t:"The Security Council had to approve it first", why:"Treaties don’t need Council approval to enter into force."},
     {t:"All UN members had to ratify it first", why:"The threshold was 55 parties and 55% of emissions, not every member."},
     {t:"The ICJ had to declare it valid", why:"Courts don’t approve treaties before they enter into force."}
   ]},
   {id:"e2u7-q25", lesson:"e2u7-l3", level:2, q:"Which statement best expresses a realist view of international law?", options:[
     {t:"States follow it when it suits them, and powerful states break it when vital interests are at stake", ok:true, why:"Correct. Realists see law as reflecting the distribution of power."},
     {t:"Legal rules reduce uncertainty, so states have good reasons to keep them", why:"That is the liberal institutionalist view."},
     {t:"Legal norms shape what states see as legitimate and who they think they are", why:"That is a constructivist view."},
     {t:"International law grew out of colonial encounters and is applied selectively", why:"That is the TWAIL and postcolonial critique."}
   ]},
   {id:"e2u7-q26", lesson:"e2u7-l3", level:2, q:"After State B harasses State A’s diplomats, State A restricts B’s diplomats in the same way until the harassment stops. Which mechanism of compliance is this?", options:[
     {t:"Reciprocity", ok:true, why:"Correct. Each state treats the other as it is treated, which gives both a reason to keep the rules."},
     {t:"Jus cogens", why:"Jus cogens is a category of fundamental norms, not a way of enforcing them."},
     {t:"Complementarity", why:"Complementarity governs when the ICC acts."},
     {t:"An advisory opinion", why:"Advisory opinions come from the ICJ, at the request of UN bodies."}
   ]},
   {id:"e2u7-q27", lesson:"e2u7-l3", level:3, q:"Which claim would a scholar in the Third World Approaches to International Law (TWAIL) movement most likely make?", options:[
     {t:"International law took shape during colonialism and is often enforced selectively, though newer states have also used it to win rights", ok:true, why:"Correct. TWAIL scholars such as Antony Anghie study these colonial roots and the uses of law by formerly colonised states."},
     {t:"International law is a neutral science untouched by history", why:"TWAIL argues precisely the opposite."},
     {t:"Only great powers should make international law", why:"TWAIL criticises great-power dominance of law-making."},
     {t:"Customary law has no role today", why:"TWAIL doesn’t claim custom is irrelevant; it examines whose practice formed it."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u7-q28", lesson:"e2u7-l4", level:1, q:"Who adopted the Universal Declaration of Human Rights, and when?", options:[
     {t:"The UN General Assembly, in Paris, on 10 December 1948", ok:true, why:"Correct: 48 votes in favour, none against, 8 abstentions."},
     {t:"The Security Council, in New York, in 1945", why:"1945 is the Charter; the Security Council didn’t adopt the UDHR."},
     {t:"The Council of Europe, in Strasbourg, in 1950", why:"In 1950 the Council of Europe adopted the European Convention on Human Rights."},
     {t:"The International Court of Justice, in 1966", why:"1966 is when the two Covenants were adopted; courts don’t adopt declarations."}
   ]},
   {id:"e2u7-q29", lesson:"e2u7-l4", level:1, q:"What is the legal status of the Universal Declaration of Human Rights?", options:[
     {t:"A declaration, not a treaty; binding obligations come from later treaties and, for some rights, customary law", ok:true, why:"Correct. Its ideas were made binding in the Covenants and other treaties."},
     {t:"A treaty ratified by every state", why:"It was never a treaty open to ratification."},
     {t:"A Security Council resolution binding all members", why:"It was adopted by the General Assembly."},
     {t:"A judgment of the ICJ", why:"The ICJ didn’t create it."}
   ]},
   {id:"e2u7-q30", lesson:"e2u7-l4", level:1, q:"Which process reviews the human rights record of every UN member state?", options:[
     {t:"The Universal Periodic Review of the Human Rights Council", ok:true, why:"Correct. Every member is reviewed by other states every few years."},
     {t:"The Security Council’s annual human rights vote", why:"There is no such vote."},
     {t:"The ICC’s annual audit of states", why:"The ICC tries individuals; it doesn’t review states’ records."},
     {t:"The World Bank’s country reports", why:"The World Bank reports on development, not a review of human rights records."}
   ]},
   {id:"e2u7-q31", lesson:"e2u7-l4", level:3, q:"Which statement describes the 1993 debate about universal human rights fairly?", options:[
     {t:"The Bangkok Declaration stressed regional differences and non-interference, while the Vienna Declaration called all rights universal, indivisible and interdependent; scholars from many regions argue both sides", ok:true, why:"Correct. It presents both positions and who held them without taking sides."},
     {t:"Asian states rejected human rights entirely in 1993", why:"The Bangkok Declaration accepted universal rights while stressing context; this overstates it."},
     {t:"The Vienna conference proved that rights are a Western idea", why:"The conference affirmed universality, and the claim ignores the many non-Western contributors."},
     {t:"The debate ended in 1993 and nobody discusses it now", why:"It remains an active discussion in scholarship and diplomacy."}
   ]},
   {id:"e2u7-q32", lesson:"e2u7-l4", level:1, q:"Which four crimes does the responsibility to protect cover?", options:[
     {t:"Genocide, war crimes, ethnic cleansing and crimes against humanity", ok:true, why:"Correct, as set out in paragraphs 138–139 of the 2005 World Summit Outcome."},
     {t:"Genocide, terrorism, corruption and piracy", why:"R2P is limited to mass-atrocity crimes; terrorism, corruption and piracy aren’t among them."},
     {t:"Any human rights violation", why:"R2P was deliberately limited to four crimes."},
     {t:"Aggression, drug trafficking, cybercrime and fraud", why:"None of these is part of R2P’s scope."}
   ]},
   {id:"e2u7-q33", lesson:"e2u7-l4", level:2, q:"A government worried about violence before an election asks neighbouring states for help training police in protecting minorities, and they agree. Under R2P, which pillar is this?", options:[
     {t:"Pillar two: international assistance to help a state protect its people", ok:true, why:"Correct. Help given at a state’s request is pillar two."},
     {t:"Pillar three: collective military action", why:"No collective action against the state is involved; it asked for help."},
     {t:"Pillar one alone: the state acting with no outside role", why:"The state’s own efforts are pillar one, but the neighbours’ help is pillar two."},
     {t:"It isn’t R2P, because only force counts", why:"Most R2P work is prevention and assistance, not force."}
   ]},
   {id:"e2u7-q34", lesson:"e2u7-l4", level:3, q:"Why is Libya in 2011 a turning point in debates about R2P?", options:[
     {t:"The Council authorised measures to protect civilians, but critics argued the operation went on to change the regime, which made several states wary of later R2P mandates", ok:true, why:"Correct. Resolution 1973 passed with five abstentions, and the debate about how it was carried out still shapes R2P discussions."},
     {t:"It was the first time R2P was used without any Council vote", why:"Resolution 1973 was a Council decision."},
     {t:"All five permanent members voted against it", why:"No permanent member voted against; China and Russia abstained."},
     {t:"It ended all debate about R2P", why:"It intensified the debate."}
   ]},
   {id:"e2u7-q35", lesson:"e2u7-l4", level:1, q:"Which region has no region-wide human rights court?", options:[
     {t:"Asia and the Pacific", ok:true, why:"Correct. ASEAN has a declaration and a commission, but there is no region-wide court in Asia or the Pacific."},
     {t:"Europe", why:"Europe has the European Court of Human Rights in Strasbourg."},
     {t:"The Americas", why:"The Americas have the Inter-American Court in San José."},
     {t:"Africa", why:"Africa has the African Court on Human and Peoples’ Rights in Arusha."}
   ]},
   {id:"e2u7-q36", lesson:"e2u7-l4", level:3, q:"Mei reads a blog claiming “NATO used the responsibility to protect to justify bombing Kosovo in 1999.” What is wrong with this?", options:[
     {t:"R2P did not exist yet: the commission’s report came in 2001 and leaders endorsed R2P in 2005; the Kosovo debate helped inspire it", ok:true, why:"Correct. The controversy over action without Council authorisation was one reason the R2P idea was developed."},
     {t:"Nothing: R2P was agreed in 1945", why:"R2P dates from 2001–2005, not the Charter."},
     {t:"Kosovo was authorised by the Security Council under R2P", why:"There was no Council authorisation, which is why the action was so debated."},
     {t:"NATO is part of the UN, so it didn’t need justification", why:"NATO is a separate alliance, and any use of force needs a legal basis."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u7-q37", lesson:"e2u7-l5", level:1, q:"What does comparative advantage depend on?", options:[
     {t:"Which producer has the lower opportunity cost of making a good", ok:true, why:"Correct. Even a less productive country can have a comparative advantage."},
     {t:"Which producer makes more of the good per worker", why:"That is absolute advantage."},
     {t:"Which country has the larger army", why:"Military power doesn’t define comparative advantage."},
     {t:"Which country has more WTO votes", why:"WTO decisions are by consensus; votes don’t define comparative advantage."}
   ]},
   {id:"e2u7-q38", lesson:"e2u7-l5", level:2, q:"Amara’s shop imports a bicycle valued at US$250. The tariff is 10%. How much tariff does her shop pay on it? (Invented figures.)", options:[
     {t:"US$25, paid to her own country’s customs service", ok:true, why:"Correct: 0.10 × 250 = 25. The importer pays the tariff."},
     {t:"US$275, paid by the foreign factory", why:"275 is the price plus tariff, and the importer, not the foreign factory, pays."},
     {t:"US$2.50", why:"That uses 1% instead of 10%."},
     {t:"US$10", why:"10 is the rate in per cent, not the amount."}
   ]},
   {id:"e2u7-q39", lesson:"e2u7-l5", level:1, q:"When did the World Trade Organization begin, and what did it grow out of?", options:[
     {t:"1 January 1995, growing out of the GATT of 1947", ok:true, why:"Correct. The Uruguay Round of GATT talks created the WTO."},
     {t:"1944, at the Bretton Woods conference", why:"Bretton Woods created the IMF and the World Bank."},
     {t:"1957, with the Treaties of Rome", why:"The Treaties of Rome created the European Economic Community."},
     {t:"2015, with the SDGs", why:"The SDGs are development goals, not the WTO."}
   ]},
   {id:"e2u7-q40", lesson:"e2u7-l5", level:3, q:"An economist argues: “The prices of coffee and copper tend to fall over time compared with the prices of machines, so countries that export raw materials keep falling behind.” Which perspective, and whose idea, is this?", options:[
     {t:"Structuralism: the Prebisch–Singer argument from 1950", ok:true, why:"Correct. Raúl Prebisch and Hans Singer argued that the terms of trade move against raw-material exporters."},
     {t:"Liberalism: Ricardo’s comparative advantage", why:"Ricardo argued both sides gain from specialisation; this argument says specialising in raw materials is a trap."},
     {t:"Mercantilism: Alexander Hamilton’s report on manufactures", why:"Hamilton argued for protecting infant industry, but the terms-of-trade argument is Prebisch and Singer’s."},
     {t:"Neofunctionalism: Ernst Haas", why:"Haas studied European integration, not commodity prices."}
   ]},
   {id:"e2u7-q41", lesson:"e2u7-l5", level:1, q:"Which institutions were created at the Bretton Woods conference in 1944?", options:[
     {t:"The International Monetary Fund and the World Bank", ok:true, why:"Correct. They are still called the Bretton Woods institutions."},
     {t:"The UN and the Security Council", why:"The UN was founded by the Charter in 1945."},
     {t:"The WTO and UNCTAD", why:"UNCTAD began in 1964 and the WTO in 1995."},
     {t:"The European Union and the euro", why:"These came much later, from European treaties."}
   ]},
   {id:"e2u7-q42", lesson:"e2u7-l5", level:2, q:"A country’s currency is collapsing and it can’t pay for essential imports. It asks for a short-term loan and is told the loan comes with policy conditions. Which institution is it most likely dealing with?", options:[
     {t:"The International Monetary Fund", ok:true, why:"Correct. Balance-of-payments crises are the IMF’s core lending role, and its loans carry conditionality."},
     {t:"The World Trade Organization", why:"The WTO sets trade rules; it doesn’t lend money."},
     {t:"The International Court of Justice", why:"The ICJ settles legal disputes; it has no money to lend."},
     {t:"The Human Rights Council", why:"The Council deals with human rights, not loans."}
   ]},
   {id:"e2u7-q43", lesson:"e2u7-l5", level:1, q:"Which statement about the Sustainable Development Goals is accurate?", options:[
     {t:"There are 17 goals and 169 targets for 2030, and they apply to every country", ok:true, why:"Correct. They were adopted by all UN members on 25 September 2015."},
     {t:"There are 8 goals, for poor countries only", why:"That describes the Millennium Development Goals (2000–2015)."},
     {t:"They are a binding treaty enforced by the ICJ", why:"The SDGs are a political commitment adopted by the General Assembly, not a treaty."},
     {t:"They were achieved in 2015", why:"2015 is when they were adopted; their deadline is 2030."}
   ]},
   {id:"e2u7-q44", lesson:"e2u7-l5", level:2, q:"Invented figures: a donor country’s gross national income is US$500 billion and it gives US$2 billion in official aid. What share of GNI is that, compared with the UN’s 0.7% target?", options:[
     {t:"0.4%, below the 0.7% target", ok:true, why:"Correct: 2 ÷ 500 = 0.004 = 0.4%."},
     {t:"4%, well above the target", why:"2 ÷ 500 is 0.004, which is 0.4%, not 4%."},
     {t:"0.04%, far below the target", why:"That is ten times too small: 0.004 × 100 = 0.4%."},
     {t:"2.5%, above the target", why:"The share is aid ÷ GNI: 2 ÷ 500 = 0.004, which is 0.4%, not 2.5%."}
   ]},
   {id:"e2u7-q45", lesson:"e2u7-l5", level:3, q:"The OECD reports that aid fell by 23.1% “in real terms” in 2025 (preliminary data). What does “in real terms” mean, and why does “preliminary” matter?", options:[
     {t:"The figure is adjusted for price changes and exchange rates, and preliminary figures may be revised later", ok:true, why:"Correct. Real terms compare like with like over time; preliminary data are first estimates."},
     {t:"It counts only aid that really arrived, and preliminary means final", why:"“Real terms” is about adjusting for prices, and preliminary means not final."},
     {t:"It is the figure in US dollars of the day, with no adjustment", why:"That would be “nominal” or “current” terms."},
     {t:"It includes private charity, and preliminary means estimated by journalists", why:"ODA is government aid, and preliminary figures come from the OECD itself."}
   ]}
  ]
});
