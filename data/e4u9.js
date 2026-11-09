/* International Studies · Unit 9 · International organisations in depth */
ICA.addUnit({
  id:"e4u9", track:"e4", n:9, title:"International organisations in depth", icon:"🏛️",
  blurb:"Why states build international organisations, how those organisations come to act on their own, and how the UN system, the world’s regional bodies and their critics work in practice. Functionalism to principal–agent theory, Barnett and Finnemore’s bureaucracies, Security Council reform and the 2026 Secretary-General race, regionalism from the EU to the SCO, and the politics of exit, funding cuts and contested multilateralism.",
  goals:[
    "Explain and compare the main theories of why states create international organisations: functionalism, neofunctionalism, rational design and principal–agent theory",
    "Analyse international organisations as actors with their own authority, power and pathologies, using the IMF and the World Bank as cases",
    "Describe how the UN system works in practice: Security Council politics and reform positions, the General Assembly, the Secretary-General’s selection and roles, and how the system is funded",
    "Compare regional organisations (EU, ASEAN, AU, OAS, SCO) by design, decision rules and norms, without treating any one region as the model",
    "Assess the legitimacy and effectiveness of an international organisation, and explain withdrawal, funding cuts, forum shopping and contested multilateralism",
    "Build a balanced, evidence-based evaluation of a real international organisation for a seminar"
  ],
  read:[
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"A short, free overview of what IOs are and do. Read it first as a refresher."},
    {book:"ospol", where:"Chapter 15, sections 15.1 “The Problem of Global Governance”, 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)” and 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"A gentle textbook account of the UN and regional bodies."},
    {book:"unhb", where:"Parts “The United Nations System – Principal Organs”, “Security Council”, “Secretariat” and “Budget and Scales of Assessment”", note:"A reference guide, updated every year, used by diplomats themselves. Look things up in it; don’t read it cover to cover."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u9-l1", title:"Why states create international organisations", minutes:60,
   hook:{q:"Which of these is usually described as the oldest international organisation still working today?", options:["The International Committee of the Red Cross (1863)","A commission that manages shipping on the river Rhine (1815)","The Universal Postal Union (1874)","The League of Nations (1920)"], answer:1, reveal:"**The Rhine commission.** The Central Commission for the Navigation of the Rhine was set up by the Congress of Vienna in 1815 to keep one busy river open to boats from every riverside state. It still meets in Strasbourg. The Red Cross committee is a private Swiss association, not an organisation of states, and the League no longer exists. The story of IOs starts with practical problems like this one, which is exactly what the first theory in this lesson builds on."},
   goals:[
     "State the puzzle: why sovereign states bind themselves to international organisations",
     "Explain Mitrany’s functionalism and Haas’s neofunctionalism, with their critics",
     "Use the rational design framework to explain why IOs differ in membership, scope, centralisation, control and flexibility",
     "Apply principal–agent theory: delegation, agency slack, control mechanisms and the collective principal",
     "Compare the four explanations on one real organisation"
   ],
   learn:[
    {h:"The puzzle of binding yourself", body:[
      {lead:"Why would a government that prizes its sovereignty sign a treaty that lets an organisation in another city check its factories, judge its trade rules or tell it how to report a disease?"},
      "A one-line reminder from the IR primer: an [[intergovernmental-organization|intergovernmental organisation]] (IGO, or simply IO) is a body whose members are states, set up by a treaty, with its own staff and meetings. You met the UN and several regional bodies in {{united-nations|Unit 7 of the primer}}, and the neorealist versus neoliberal argument about whether institutions matter in {{neoliberal-institutionalism}}.",
      "This unit goes one level deeper. A graduate seminar on IOs usually asks three separate questions:",
      {ol:["**Why create** an organisation at all, instead of cooperating case by case?","**Why this design**: why are some IOs global and others small clubs, some bound by strict rules and others loose and flexible?","**Why delegate**: why give staff in Geneva, Manila or Addis Ababa the power to act, and how do states keep them in check?"]},
      "Four families of theory answer these questions. They are not simply right or wrong; each notices different things."
    ]},
    {h:"Functionalism: Mitrany’s “working peace”", body:[
      "{{david-mitrany|David Mitrany}} (1888–1975), a Romanian-born British scholar, wrote *A Working Peace System* in 1943, in the middle of the Second World War. His argument became known as [[functionalism-io|functionalism]] (not to be confused with the sociological theory of the same name).",
      "Mitrany thought plans for a world government or a European federation were doomed, because they asked people to give up national loyalty all at once. Instead, he proposed building peace **task by task**: separate international agencies for transport, health, food, communications, each shaped by its job. In his view the function should decide the form, membership and powers of each agency. (The slogan “form follows function”, often attached to his work, came from architecture.)",
      "He expected two things to follow. Experts solving shared technical problems would build habits of cooperation, and successful cooperation in one field would spread to others, a process he called [[ramification]]. Over time, loyalty would shift from states towards the agencies that actually delivered benefits, making war less thinkable.",
      "Real cases fit the picture in part. The Rhine commission (1815), the International Telegraph Union (1865, today’s ITU) and the Universal Postal Union (1874) grew from practical needs. In Southeast Asia, the Mekong Committee of 1957, created with UN support by Cambodia, Laos, Thailand and South Vietnam, kept working, in reduced form, through decades of war, and was reborn as the Mekong River Commission in 1995.",
      {h:"The critics"},
      "Critics replied that “technical” questions are rarely free of politics. Who gets which satellite orbits, whose drugs count as essential, which rivers get dammed: each has winners and losers. Functional agencies also did not abolish national loyalty. And Mitrany had little to say about power: a great power can simply refuse to join."
    ]},
    {h:"Neofunctionalism: Haas and spillover", body:[
      "{{ernst-haas|Ernst B. Haas}} (1924–2003) took the idea and added politics. In *The Uniting of Europe* (1958) he studied the European Coal and Steel Community (1951), and in *Beyond the Nation-State* (1964) he applied his ideas to the International Labour Organization. His approach is called [[neofunctionalism]].",
      "The key mechanism is [[spillover]]. Pooling one sector creates pressure to pool neighbouring ones. Later scholars distinguished three kinds:",
      {table:[
        ["Kind","What drives it","Example"],
        ["Functional","Tasks are linked, so integrating one needs integrating another","A common coal market works badly without shared transport rules"],
        ["Political","Interest groups and parties shift their lobbying to the new centre","Business associations organise at the European level"],
        ["Cultivated","Supranational officials push for more integration","The Commission proposes the next step"]
      ]},
      "Unlike Mitrany, Haas did not think experts were enough: integration moves when self-interested groups see gains in it. The theory also explained setbacks, such as France’s “empty chair” boycott of Community meetings in 1965–66, but those setbacks dented it. Studies of Latin America and Africa in the 1960s, including Haas’s own, found that spillover, built on Western Europe, travelled poorly, and in 1975 Haas himself called the theory “obsolescent” in *The Obsolescence of Regional Integration Theory*.",
      "Two rivals now dominate debates about the EU. Andrew Moravcsik’s [[liberal-intergovernmentalism|liberal intergovernmentalism]] (*The Choice for Europe*, 1998) argues that national governments, driven by economic interests at home, bargain hard and delegate only to make their deals credible. Liesbet Hooghe and Gary Marks’s “postfunctionalism” (2009) adds that once integration became a matter of identity and public debate, voters and parties could stop it; many later read the United Kingdom’s 2016 referendum and its exit in 2020 this way."
    ]},
    {h:"Rational design: institutions as tools", body:[
      "In 2001 Barbara Koremenos, Charles Lipson and Duncan Snidal edited a special issue of *International Organization* on “The Rational Design of International Institutions”. Their claim: states design IOs deliberately, to solve specific cooperation problems, so different problems should produce different designs. This approach is called [[rational-design|rational design]] (see {{rational-design}}).",
      "They compared IOs on five dimensions:",
      {table:[
        ["Dimension","The question","An Asia-Pacific example"],
        ["Membership","Who may join?","APEC admits “member economies”, which let Hong Kong, China and Chinese Taipei take part"],
        ["Scope","Which issues are covered?","The ADB focuses on development finance"],
        ["Centralisation","Is there a central body to collect information, decide or enforce?","WTO dispute settlement versus APEC’s voluntary reviews"],
        ["Control","Who decides, and with how many votes?","Weighted votes by shares in the Asian Development Bank"],
        ["Flexibility","Can members adapt or escape the rules?","Safeguard clauses that let a state pause trade commitments"]
      ]},
      "The problems that drive design include **distribution** (who gains most), **enforcement** (the temptation to cheat), the **number of actors**, and **uncertainty** about others’ behaviour, the state of the world or each other’s preferences. For example, the more uncertain the future, the more [[flexibility-provisions|flexibility provisions]] such as escape clauses states should write in.",
      "Kenneth Abbott and Snidal had earlier asked “Why States Act through Formal International Organizations” (1998). Their answer: IOs offer **centralisation** (one place to pool information and resources) and **independence** (a neutral party that can monitor, mediate or judge).",
      {warn:"Critics, including Alexander Wendt in the same 2001 issue, warn against what is often called the “functionalist fallacy”: assuming that because an IO does something useful, it was designed to do it. Many features are accidents, compromises or leftovers from earlier crises. A good paper checks the negotiating record."}
    ]},
    {h:"Principal–agent theory: delegating and controlling", body:[
      "The last approach borrows a tool from economics. In [[principal-agent-theory|principal–agent theory]] a **principal** (here, member states) hires an **agent** (the IO and its staff) to do a job through a kind of contract (the founding treaty, a mandate, a budget). The key text is *Delegation and Agency in International Organizations* (2006), edited by Darren Hawkins, David Lake, Daniel Nielson and Michael Tierney (see {{principal-agent-io}}).",
      "Why [[delegation|delegate]]? Agents bring expertise, save time, make promises credible and let states avoid blame for unpopular decisions. The cost is [[agency-slack|agency slack]]: the agent may **shirk** (work less hard) or **slip** (pursue its own preferences).",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m9a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-soft" x="20" y="14" width="300" height="70" rx="10" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Principals: member states</text><text class="s" x="170" y="58" text-anchor="middle">often a collective principal</text><text class="s" x="170" y="74" text-anchor="middle">with clashing preferences</text><path class="d-ink" d="M110,86 V156" stroke-width="2" marker-end="url(#m9a)"/><text class="s" x="104" y="112" text-anchor="end">mandate,</text><text class="s" x="104" y="128" text-anchor="end">budget,</text><text class="s" x="104" y="144" text-anchor="end">staff picks</text><path class="d-ink" d="M230,156 V86" stroke-width="2" marker-end="url(#m9a)"/><text class="s" x="238" y="112">reports,</text><text class="s" x="238" y="128">audits,</text><text class="s" x="238" y="144">evaluation</text><rect class="d-gold" x="20" y="160" width="300" height="70" rx="10" stroke-width="2"/><text x="170" y="186" text-anchor="middle">Agent: the IO secretariat</text><text class="s" x="170" y="206" text-anchor="middle">expertise, information,</text><text class="s" x="170" y="222" text-anchor="middle">its own preferences</text><path class="d-ink" d="M170,232 V262" stroke-width="2" marker-end="url(#m9a)"/><rect class="d-rose" x="40" y="266" width="260" height="52" rx="10" stroke-width="2"/><text x="170" y="288" text-anchor="middle">Agency slack</text><text class="s" x="170" y="307" text-anchor="middle">shirking or slipping</text></svg>', alt:"Diagram: member states as principals at the top send a mandate, budget and staff appointments down to the IO secretariat as agent; the secretariat sends reports, audits and evaluations back up; below it, agency slack, meaning shirking or slipping, is what the controls try to limit.", cap:"Principals control agents through what they send down (mandates, money, appointments) and what they demand back (information)."},
      "States reduce slack with **controls**: screening and appointing leaders, tight or loose mandates, budgets, reporting rules, independent evaluation offices, and the threat to cut funds or rewrite the mandate. The World Bank’s Inspection Panel (1993), which hears complaints from people affected by Bank projects, is partly a monitoring device of this kind.",
      "A crucial twist is the [[collective-principal|collective principal]]. An IO answers to many states at once. When they disagree, they cannot agree to rein it in, so the agent gains room to act. This helps explain why secretariats are often most autonomous on the issues where members are most divided."
    ]},
    {h:"Comparing the explanations on one case", body:[
      {ex:"The Asian Development Bank (ADB) was founded in 1966 with its headquarters in Manila.\n• Functionalism: a specific task (development finance for Asia) got a specialised agency.\n• Rational design: weighted voting by capital shares gives the largest contributors, Japan and the United States, more control, which makes them willing to pay; borrowing members still sit on the board.\n• Principal–agent: the board of directors controls the president and staff through approvals, budgets and evaluation.\n• A realist would add: every ADB president so far (as of 2026) has been Japanese, a sign of whose leadership the bank reflects.", label:"Worked example: four lenses on one bank"},
      "Notice what each lens leaves out. Functionalism ignores power; rational design and principal–agent theory treat states’ preferences as given and the IO as a tool. None yet explains how IO staff come to shape what states want. That is the subject of Lesson 2.",
      {key:"Functionalism asks which tasks call for an IO; neofunctionalism, how integration spreads; rational design, why designs differ; principal–agent theory, how states delegate and control. Use the one that fits your question, and say what it cannot see."},
      {terms:["functionalism-io","ramification","spillover","liberal-intergovernmentalism","rational-design","flexibility-provisions","principal-agent-theory","delegation","agency-slack","collective-principal"]}
    ]}
   ],
   try:[
    {id:"e4u9-l1-x1", type:"sort", q:"Which theory makes each claim?", buckets:["Functionalism (Mitrany)","Neofunctionalism (Haas)","Rational design","Principal–agent theory"], items:[
      {t:"Peace grows best from separate agencies, each shaped by a practical task such as health or transport.", b:0, why:"That is Mitrany’s working peace system: task by task, with the function deciding the form."},
      {t:"Integrating coal and steel creates pressure from business groups to integrate transport and trade too.", b:1, why:"Spillover driven by self-interested groups is Haas’s neofunctionalism."},
      {t:"When the future is very uncertain, states write more escape clauses into agreements.", b:2, why:"A link between a cooperation problem (uncertainty) and a design feature (flexibility) is the rational design argument."},
      {t:"An agency’s staff may pursue their own goals unless states monitor them through reports and budgets.", b:3, why:"Agency slack and control mechanisms are the core of principal–agent theory."},
      {t:"Weighted voting gives the biggest contributors more control so that they are willing to pay.", b:2, why:"Choosing voting rules to solve a distribution and participation problem is a design choice in Koremenos, Lipson and Snidal’s sense."},
      {t:"Supranational officials actively propose the next step of integration.", b:1, why:"“Cultivated spillover” by supranational actors is a neofunctionalist mechanism."}
    ]},
    {id:"e4u9-l1-x2", type:"match", q:"Match each work to its author or editors.", pairs:[
      ["*A Working Peace System* (1943)","David Mitrany","The founding text of functionalism, written during the Second World War."],
      ["*The Uniting of Europe* (1958)","Ernst B. Haas","Haas’s study of the European Coal and Steel Community, the basis of neofunctionalism."],
      ["*The Choice for Europe* (1998)","Andrew Moravcsik","The main statement of liberal intergovernmentalism."],
      ["“The Rational Design of International Institutions” (2001)","Koremenos, Lipson & Snidal","Their special issue of *International Organization*."],
      ["*Delegation and Agency in International Organizations* (2006)","Hawkins, Lake, Nielson & Tierney","The standard edited volume applying principal–agent theory to IOs."]
    ]},
    {id:"e4u9-l1-x3", type:"mcq", q:"Negotiators of a new regional fisheries agreement cannot predict how fish stocks will respond to warming seas. Rational design theory predicts they will most likely include…", options:[
      {t:"Flexibility provisions, such as review clauses and the right to adjust catch limits", ok:true, why:"Right. Uncertainty about the state of the world is the classic reason for flexibility in Koremenos, Lipson and Snidal’s framework."},
      {t:"Universal membership open to every state in the world", why:"Membership is driven by other problems, such as who must take part for the deal to work. Uncertainty points to flexibility."},
      {t:"No secretariat at all, because experts cannot help", why:"Uncertainty is usually a reason to centralise information, for example in a scientific committee, not to abolish it."},
      {t:"A permanent ban on changing the agreement", why:"A rigid agreement is the opposite of what uncertainty calls for: it would break when conditions change."}
    ]},
    {id:"e4u9-l1-x4", type:"order", q:"Put this neofunctionalist story of integration in order.", items:[
      {t:"Six states pool their coal and steel industries under a common authority.", why:"The first sectoral step, as in the European Coal and Steel Community of 1951."},
      {t:"Firms find that different national transport rules and tariffs get in the way of the shared market.", why:"Functional spillover: the first step creates problems in linked sectors."},
      {t:"Business associations start lobbying at the new European level, not only at home.", why:"Political spillover: groups shift their expectations and activities to the new centre."},
      {t:"Responding to this pressure, supranational officials propose rules for the linked sectors and broker a deal.", why:"Cultivated spillover: the new institution pushes the process forward."},
      {t:"Governments agree to extend integration to a wider common market.", why:"The result: a deeper and wider union, as with the treaties of 1957."}
    ]},
    {id:"e4u9-l1-x5", type:"mcq", q:"Members of an international agency complain that its staff keep starting projects the governing board never approved. In principal–agent terms, which response targets the problem most directly?", options:[
      {t:"Require prior board approval for new projects and fund an independent evaluation office that reports to the board", ok:true, why:"Yes. This tightens the mandate and adds monitoring, two standard controls against slippage."},
      {t:"Double the agency’s unearmarked budget", why:"More unconditional money usually increases the agent’s room to act; it does not control slack."},
      {t:"Let the agency’s head choose who sits on the board", why:"That would let the agent pick its own principals, weakening control even further."},
      {t:"Do nothing: agents always follow their principals", why:"The whole theory starts from the risk that agents have their own preferences."}
    ]},
    {id:"e4u9-l1-x6", type:"spot", q:"A student essay explains why an international organisation exists. Tap the claims that **commit the functionalist fallacy or ignore power**.", ask:"weak reasoning", parts:[
      {t:"The organisation lowers the cost of sharing weather data among its members.", flag:false, why:"A reasonable description of a function it performs. The problem only arises if you conclude it was created for that reason without evidence."},
      " ",
      {t:"Because it lowers these costs, this must be the reason states created it.", flag:true, why:"The functionalist fallacy: a useful effect today is not proof of the founders’ intentions. Check the negotiating record."},
      " ",
      {t:"The founding conference records show that delegates argued mainly about data sharing.", flag:false, why:"This is exactly the kind of evidence that can support a functional explanation."},
      " ",
      {t:"Since the issue is technical, no state had anything to win or lose.", flag:true, why:"Technical issues still have distributional stakes (who pays, whose standards win). This is the classic critique of Mitrany."},
      " ",
      {t:"The two largest contributors insisted on weighted voting before they would join.", flag:false, why:"Evidence about power and bargaining over design: a strong point, not a flaw."}
    ]},
    {id:"e4u9-l1-x7", type:"mcq", q:"Why can an IO secretariat sometimes act more freely on the very issues where its member states disagree most?", options:[
      {t:"A divided collective principal cannot agree on new instructions or sanctions, which leaves the agent room to act", ok:true, why:"Right. With many principals, reining in the agent needs agreement among them; division weakens control."},
      {t:"Because international law gives secretariats a veto over divisive issues", why:"No secretariat has such a veto. The freedom comes from the politics of control, not from a legal power."},
      {t:"Because divided states stop paying, so the agency has more money", why:"Funding cuts usually reduce an agency’s capacity; they do not explain greater freedom."},
      {t:"Because agents only obey principals who agree with each other in advance", why:"Agents are formally bound either way; the point is that disagreement makes it hard for principals to enforce their will."}
    ]}
   ],
   apply:{
    intro:"Apply the theories to a real organisation. Everything here is free and public.",
    tasks:[
     {t:"Read a founding text as a design", how:[
       "Choose one IO with a short founding treaty or charter available online (for example the 1995 Mekong Agreement, the ASEAN Charter, the Pacific Islands Forum’s agreement, or the constitution of any UN specialised agency).",
       "Find the articles on membership, scope, decision-making and votes, any central body, and any amendment, withdrawal or escape clauses.",
       "For each of the five rational design dimensions, write one sentence and the article number."
     ], write:"Organisation… Membership (Art.)… Scope… Centralisation… Control… Flexibility… Which cooperation problem does the design seem to answer?"},
     {t:"Map a chain of delegation", how:[
       "For the same IO, find who appoints its head, who approves its budget, and whether it has an evaluation or oversight office.",
       "Draw principals, agent and controls as in the lesson’s diagram.",
       "Note one area where the agent may have room to act, and why."
     ], write:"Who appoints… Who funds… Monitoring… Where slack is possible… Why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was Mitrany naive to believe technical cooperation could build peace?",
       "2. Does the EU’s history support Haas, Moravcsik, or neither?",
       "3. Can rational design explain IOs created in a hurry during a crisis?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A five-dimension design analysis of one real IO with article numbers, a sketch of its chain of delegation, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Read it first as a refresher on what IOs are."},
    {book:"eirt", where:"Chapter 2 “Liberalism” (Jeffrey W. Meiser)", note:"The liberal tradition behind institutionalist theories of IOs."},
    {book:"ospol", where:"Chapter 15, section 15.1 “The Problem of Global Governance”", note:"Why cooperation without a world government is hard."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u9-l2", title:"IOs as actors: authority, autonomy and pathologies", minutes:60,
   hook:{q:"Major decisions at the IMF, such as changing its Articles or its quotas, need 85% of the votes. Why can the United States block them on its own?", options:["The Articles give the host country of the headquarters a formal veto","It holds about 16.5% of the votes, so the rest cannot reach 85% without it","Every one of the 191 members has a veto on major decisions","It is the largest borrower from the Fund"], answer:1, reveal:"**About 16.5% of the votes.** Votes at the IMF follow each member’s quota, which broadly reflects its economic size. With the US holding more than 15%, everyone else together cannot reach 85%. No formal veto is written anywhere: it comes from arithmetic and design. This lesson asks a different question too: once states have designed an IO, can its staff shape the world in ways states never planned?"},
   goals:[
     "Explain Barnett and Finnemore’s view of IOs as bureaucracies with authority of their own",
     "Distinguish rational-legal, delegated, moral and expert authority, and the ways IOs exercise power",
     "Identify the five bureaucratic pathologies and give an example of each",
     "Describe the role of secretariats and their leaders",
     "Analyse the IMF and the World Bank as actors, with their governance and critics"
   ],
   learn:[
    {h:"Do IOs have minds of their own?", body:[
      {lead:"An official of the UN refugee agency must decide whether a war-torn region is “safe” enough for refugees to go home. No government wrote that decision. Whose power is she exercising?"},
      "Lesson 1 treated IOs as tools of states. In 1999 Michael Barnett and {{martha-finnemore|Martha Finnemore}} challenged that view in “The Politics, Power, and Pathologies of International Organizations” (*International Organization*). Their book *Rules for the World: International Organizations in Global Politics* (2004) developed it (see {{ios-as-bureaucracies}}).",
      "Their starting point was {{max-weber|Max Weber}}’s analysis of [[bureaucracy]]. Bureaucracies are powerful because they apply impersonal rules, rely on experts and are trusted as rational and neutral. IOs, they argued, are bureaucracies too, so they have **autonomy** (they act in ways their members did not dictate) and **power** (they shape how others see the world). This is a {{constructivism|constructivist}} argument: IOs help construct the social world, not just regulate it."
    ]},
    {h:"Where IO authority comes from", body:[
      "Barnett and Finnemore traced IO [[bureaucratic-authority|bureaucratic authority]] to four sources:",
      {fig:'<svg viewBox="0 0 340 340"><rect class="d-panel" x="95" y="135" width="150" height="70" rx="12" stroke-width="2"/><text x="170" y="164" text-anchor="middle">An IO’s</text><text x="170" y="184" text-anchor="middle">authority</text><rect class="d-soft" x="20" y="14" width="300" height="56" rx="10" stroke-width="2"/><text x="170" y="37" text-anchor="middle">Rational-legal</text><text class="s" x="170" y="57" text-anchor="middle">impersonal rules, seen as neutral</text><rect class="d-gold" x="10" y="80" width="150" height="46" rx="10" stroke-width="2"/><text x="85" y="100" text-anchor="middle">Delegated</text><text class="s" x="85" y="117" text-anchor="middle">lent by states</text><rect class="d-sage" x="180" y="80" width="150" height="46" rx="10" stroke-width="2"/><text x="255" y="100" text-anchor="middle">Moral</text><text class="s" x="255" y="117" text-anchor="middle">defends shared values</text><rect class="d-lup" x="20" y="214" width="300" height="56" rx="10" stroke-width="2"/><text x="170" y="237" text-anchor="middle">Expert</text><text class="s" x="170" y="257" text-anchor="middle">specialised knowledge and data</text><rect class="d-rose" x="20" y="280" width="300" height="50" rx="10" stroke-width="2"/><text x="170" y="301" text-anchor="middle">Power: classify, fix meanings,</text><text x="170" y="320" text-anchor="middle">spread norms</text><path class="d-ink" d="M170,70 V135" stroke-width="2"/><path class="d-ink" d="M170,205 V214" stroke-width="2"/></svg>', alt:"Diagram: an IO’s authority sits at the centre, drawing on rational-legal authority (impersonal rules seen as neutral), delegated authority (lent by states), moral authority (defending shared values) and expert authority (specialised knowledge and data); below, the power this produces: to classify, fix meanings and spread norms.", cap:"Four sources of authority, and the three kinds of power they make possible (after Barnett and Finnemore 2004)."},
      {list:["**Rational-legal**: the authority of impersonal rules and procedures (see [[rational-legal-authority]]).","**Delegated**: authority lent by member states for a task.","**Moral**: the claim to defend shared values, such as protecting refugees or children, above narrow national interests ([[moral-authority]]).","**Expert**: specialised knowledge, data and professional training ([[expert-authority]])."]},
      "With that authority, IOs exercise power in three ways. They **classify**: who counts as a refugee, a least developed country, a pandemic. They **fix meanings**: what “development” or “good governance” means in practice. And they **diffuse norms**, spreading models of how a state should run elections or a central bank (compare {{norm-dynamics}}).",
      {ex:"When WHO’s Director-General declares a public health emergency of international concern under the [[international-health-regulations|International Health Regulations]], no state is ordered to do anything new. Yet the label changes what governments, airlines and markets expect, and what they will be judged against. That is the power to classify.", label:"Worked example: the power of a label"}
    ]},
    {h:"When good bureaucracies go wrong", body:[
      "The same qualities that make bureaucracies powerful can make them fail. Barnett and Finnemore named five [[io-pathologies|pathologies]]:",
      {table:[
        ["Pathology","What happens","Illustration"],
        ["Irrationality of rationalisation","Rules become ends in themselves","Following procedure when the situation calls for something else"],
        ["Universalism","One template applied everywhere","The same reform package for very different economies"],
        ["Normalisation of deviance","Small rule-bending becomes routine, then risky","Exceptions pile up until they are the norm"],
        ["Insulation","No feedback from the outside","Staff evaluate success by their own measures"],
        ["Cultural contestation","Sub-units with clashing cultures","Economists and social specialists pull in different directions"]
      ]},
      "Their book has three cases. The **IMF** gradually expanded what counted as a “balance of payments problem”, and so its own reach. **UNHCR** developed what they called a “repatriation culture”, sometimes pressing refugees to return home before it was safe. And in 1994 the **UN Secretariat**, guided by an institutional ideology of impartiality, presented Rwanda to the Security Council as a civil war between two sides, which the authors argue helped prevent a quick or strong response to the genocide against the Tutsi. The UN’s own Independent Inquiry (1999) also found serious failures by the Secretariat and the Council.",
      {warn:"“Pathology” is an analytical term, not an insult. The argument is that IO failures often come from normal bureaucratic features, not only from bad people or bad states, which also points to different remedies."}
    ]},
    {h:"How autonomous are IOs? Measuring authority", body:[
      "Barnett and Finnemore’s cases are rich but few. Other scholars have tried to measure IO authority across many organisations. Liesbet Hooghe, Gary Marks and colleagues, in *Measuring International Authority* (2017), coded dozens of IOs over six decades on two dimensions that echo Lesson 1: **delegation** (how much agenda-setting, monitoring and judging is handed to bodies that states do not control) and **pooling** (how far decisions are taken by majority rather than unanimity).",
      "Their data show that authority varies hugely, and that delegation and pooling do not simply go together. IOs with a broad agenda, which they call “general-purpose” IOs (many regional organisations, for example), tend to delegate more to secretariats and courts, because no treaty can settle every issue in advance, but pool less, because governments fear being outvoted on sensitive matters. “Task-specific” IOs with a narrower job, such as some trade and finance bodies, more often decide key questions by majority. Large memberships push towards both. Authority has also grown over time, though unevenly.",
      {list:["**Misconception: “IOs are just their members.”** States control budgets and mandates, but staff interpret rules daily, and labels such as “emergency” or “least developed” have effects of their own.","**Misconception: “IO autonomy is always bad.”** Some autonomy is the point: an impartial monitor or court is useful only if states cannot steer it.","**Misconception: “A failure proves bad intentions.”** Pathologies arise from normal bureaucratic features; diagnose before you blame."]}
    ]},
    {h:"Secretariats and their leaders", body:[
      "An IO’s [[secretariat]] is its permanent staff. Article 100 of the UN Charter says UN staff must not seek or receive instructions from any government, an ideal of an **international civil service** that is hard to live up to but matters.",
      "Leaders can use the space this creates. Dag Hammarskjöld helped invent UN peacekeeping during the Suez crisis of 1956. {{sadako-ogata|Sadako Ogata}}, UN High Commissioner for Refugees, led the agency in 1991 into helping displaced people inside northern Iraq, beyond its traditional work with refugees who had crossed borders. Gro Harlem Brundtland made tobacco control a WHO priority, leading to the Framework Convention on Tobacco Control (adopted 2003).",
      "Principal–agent scholars read these as slack that states tolerated; constructivists read them as authority in action. Both agree that the people at the top matter, which is why their selection is fought over (Lesson 3)."
    ]},
    {h:"Case: the IMF", body:[
      "The [[imf|IMF]] lends to members with balance-of-payments problems and monitors economies. Its votes follow each member’s [[imf-quota|quota]], plus a small number of basic votes per member: a form of [[weighted-voting|weighted voting]]. As of 2026 the United States held about **16.5%** of votes; major decisions need **85%**. By an informal convention its Managing Director has always been European (Kristalina Georgieva has held the post since 2019), while the World Bank’s president has always been a US national.",
      "The Fund’s handling of the 1997–98 Asian financial crisis remains a seminar classic. Its loans to Thailand, Indonesia and South Korea came with strict [[conditionality]]: budget cuts, high interest rates, bank closures and structural reforms. Joseph Stiglitz, a former World Bank chief economist, attacked this in *Globalization and Its Discontents* (2002). The IMF’s own Independent Evaluation Office, in a 2003 evaluation of the crises in Indonesia, Korea and Brazil, also found weaknesses, especially in Indonesia, while defenders argue the programmes helped restore stability.",
      "Ideas inside the Fund change. Jeffrey Chwieroth’s *Capital Ideas* (2010) traced how the training of its staff economists shaped its enthusiasm for freeing capital flows; in 2012 the Fund adopted an “institutional view” accepting that controls on capital flows can be appropriate in some circumstances.",
      "Voice reforms are slow. A 2010 reform, in force from 2016, raised the shares of China and other emerging economies. A 50% quota increase without changing shares was approved in December 2023, but as of early November 2026 it had not taken effect: it needed consent from members holding 85% of quotas, including the United States, whose Congress had not yet authorised it (the consent deadline had been extended to 15 November 2026)."
    ]},
    {h:"Case: the World Bank", body:[
      "The [[world-bank|World Bank]] was founded in 1944 to lend for post-war reconstruction and moved into development, then poverty reduction, governance, gender and climate. Critics call this [[mission-creep|mission creep]]; supporters call it learning.",
      "Catherine Weaver’s *Hypocrisy Trap* (2008) explained why reforms of the Bank often fall short. Its shareholders demand contradictory things, and its staff culture rewards lending volume, so the Bank says one thing and does another: “organised hypocrisy”.",
      "Protest has reshaped it. After controversy over the Sardar Sarovar dam on India’s Narmada river, an independent review in 1992 criticised the project; in 1993 India cancelled the rest of the Bank loan, and that year the Bank created the Inspection Panel. Since it opened in 2016, the China-led Asian Infrastructure Investment Bank has offered borrowers another lender (Lesson 5).",
      {table:[
        ["Question","Principal–agent reading","Constructivist reading"],
        ["Why did the IMF expand conditions?","Its largest shareholders wanted it to","Staff expertise redefined what “the problem” was"],
        ["Why do reforms stall?","Members cannot agree to change the contract","Staff culture resists new goals"],
        ["What is the fix?","Better monitoring and control","Change ideas, training and incentives inside"]
      ]},
      {key:"States create IOs, but IOs also create: categories, meanings and norms. The best analyses use both lenses, asking what states delegated and what the bureaucracy made of it."},
      {terms:["bureaucratic-authority","moral-authority","expert-authority","io-pathologies","secretariat","imf-quota","weighted-voting","mission-creep"]}
    ]}
   ],
   try:[
    {id:"e4u9-l2-x1", type:"sort", q:"Which source of authority does each claim mainly rest on?", buckets:["Rational-legal","Delegated","Moral","Expert"], items:[
      {t:"“Our decision followed the procedure set out in the rules, applied the same way to every member.”", b:0, why:"Authority from impersonal, impartial rules is rational-legal."},
      {t:"“The member states gave us this mandate in last year’s resolution.”", b:1, why:"Authority lent by states for a task is delegated authority."},
      {t:"“We speak for refugees, who have no state to speak for them.”", b:2, why:"Claiming to defend shared values above national interests is moral authority."},
      {t:"“Our statisticians’ model shows that the debt is unsustainable.”", b:3, why:"Specialised knowledge and data are the basis of expert authority."},
      {t:"“Our epidemiologists judge that the outbreak meets the criteria.”", b:3, why:"Professional scientific judgement is expert authority."}
    ]},
    {id:"e4u9-l2-x2", type:"match", q:"Match each pathology to the example that illustrates it.", pairs:[
      ["Irrationality of rationalisation","Staff complete every checklist step while a crisis outruns the procedure","Rules followed for their own sake, even when they defeat the mission."],
      ["Universalism","One reform template is applied to very different economies","A single general model ignoring local context."],
      ["Normalisation of deviance","Repeated small exceptions to safety rules become standard practice","Deviance turns into routine, raising risk."],
      ["Insulation","An agency judges success only by its own indicators and ignores outside criticism","No feedback from the environment."],
      ["Cultural contestation","Economists and human rights specialists inside one agency push opposite priorities","Clashing sub-cultures inside the organisation."]
    ]},
    {id:"e4u9-l2-x3", type:"mcq", q:"Mei reads that a UN agency’s new definition of “internally displaced person” changed which people received aid. Which kind of IO power does this illustrate best?", options:[
      {t:"The power to classify", ok:true, why:"Right. Defining a category decides who counts and who is helped, one of Barnett and Finnemore’s three mechanisms."},
      {t:"The power to impose sanctions", why:"Only the Security Council can impose UN sanctions; a definition works through categories, not coercion."},
      {t:"Delegated military power", why:"Nothing in the case involves force. The effect comes from a label."},
      {t:"Weighted voting", why:"Weighted voting is a rule for decisions among states, not a way of defining categories of people."}
    ]},
    {id:"e4u9-l2-x4", type:"number", q:"At the IMF, the United States holds about 16.49% of votes and major decisions need 85%. If the US votes no, what is the **largest share of votes**, in per cent, that a “yes” side could reach?", answer:83.51, tol:0.02, unit:"%", why:"100 − 16.49 = 83.51%. That is below 85%, which is why the US can block major decisions alone.", wrongs:[
      {v:68.51, tol:0.02, why:"That is 85 − 16.49. It doesn’t answer the question: the maximum “yes” share is everything except the US vote."},
      {v:16.49, tol:0.02, why:"That is the US share itself, not what the others can reach."},
      {v:1.49, tol:0.02, why:"That is 16.49 − 15, how far the US is above the 15% blocking line, not the size of the “yes” side."}
    ], hint2:"Subtract the US share from 100%."},
    {id:"e4u9-l2-x5", type:"mcq", q:"Which statement best captures Barnett and Finnemore’s argument about the UN Secretariat and Rwanda in 1994?", options:[
      {t:"An institutional culture of impartiality led it to present the situation as a two-sided civil war, which helped block a strong response to genocide", ok:true, why:"Yes. They locate part of the failure in the Secretariat’s bureaucratic culture, alongside the choices of states."},
      {t:"The Secretariat secretly wanted the genocide to happen", why:"No. Their point is that normal bureaucratic features can produce terrible outcomes without any such intention."},
      {t:"Only the Security Council’s members were to blame, never the staff", why:"They argue the Secretariat itself contributed; the UN’s 1999 inquiry also criticised both."},
      {t:"The Secretariat had the legal power to send troops but refused", why:"The Secretariat cannot deploy troops on its own; only the Council authorises missions."}
    ]},
    {id:"e4u9-l2-x6", type:"spot", q:"A briefing paper describes the World Bank. Tap the claims that are **inaccurate or unsupported**.", ask:"inaccurate or unsupported", parts:[
      {t:"The Bank began by lending for post-war reconstruction.", flag:false, why:"Correct: reconstruction was its first task in the 1940s."},
      " ",
      {t:"Every member has an equal vote on its board.", flag:true, why:"Incorrect. Votes are weighted by shareholding, so large shareholders have more."},
      " ",
      {t:"It created an Inspection Panel in 1993, after controversy over the Narmada dam project.", flag:false, why:"Correct, and a good example of protest reshaping an IO."},
      " ",
      {t:"Its move into governance and climate proves it no longer listens to shareholders.", flag:true, why:"Unsupported. Mission expansion can reflect shareholder demands, staff ideas or both; it proves nothing on its own."},
      " ",
      {t:"Critics such as Weaver argue that a gap between its rhetoric and its practice is built into its situation.", flag:false, why:"A fair summary of the “hypocrisy trap” argument, attributed to its author."}
    ]},
    {id:"e4u9-l2-x7", type:"mcq", q:"A principal–agent scholar and a constructivist both study why an IO kept recommending the same reforms after they failed. What would the constructivist most likely add?", options:[
      {t:"That shared professional ideas and the staff’s culture made the reforms look right from inside, regardless of what members wanted", ok:true, why:"Right. Constructivists look at ideas, culture and expertise inside the bureaucracy, not only at state control."},
      {t:"That the member states must have secretly ordered the failed reforms", why:"That is an extreme principal–agent reading and needs evidence; it is not what a constructivist adds."},
      {t:"That bureaucracies never have their own ideas", why:"The opposite: constructivists argue that they do."},
      {t:"That the reforms failed because the IO had no budget", why:"Budget is a control lever; it does not explain why the same advice persisted."}
    ]}
   ],
   apply:{
    intro:"Look at IOs as actors with ideas, labels and cultures. Use free official pages.",
    tasks:[
     {t:"Find a classification", how:[
       "Pick one IO list or category: the UN list of least developed countries, WHO’s list of essential medicines, the World Bank’s income groups, UNESCO’s World Heritage in Danger list, or another.",
       "Find who decides it, by what criteria, and what changes for a state that is on or off the list.",
       "Write which source of authority the classification rests on."
     ], write:"Category… Who decides… Criteria… Consequences of being listed… Source of authority…"},
     {t:"Read an evaluation", how:[
       "Open the website of an IO evaluation office (for example the IMF’s Independent Evaluation Office, the World Bank’s Independent Evaluation Group or the Inspection Panel, or a UN agency’s evaluation office).",
       "Read the summary of one recent report.",
       "Note whether it points to a pathology from the lesson, and what it recommends."
     ], write:"Office and report… Main finding… Pathology, if any… Recommendation… Who has to act on it?"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Are IOs servants of their most powerful members, or actors in their own right?",
       "2. Is “pathology” a useful lens, or does it excuse states for IO failures?",
       "3. Should the IMF and World Bank still be led by a European and an American?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one IO classification and its consequences, a summary of one evaluation report linked to the lesson’s concepts, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 16, section 16.3 “The Bretton Woods Institutions”", note:"Background on the IMF and World Bank before the cases in this lesson."},
    {book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys)", note:"The theoretical background to IOs as social actors."},
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Revisit the chapter’s discussion of what IOs can and cannot do."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u9-l3", title:"The UN system in practice", minutes:65,
   hook:{q:"The UN has had nine Secretaries-General since 1946. How many of them have been women?", options:["None","One","Two","Three"], answer:0, reveal:"**None.** All nine, from Trygve Lie of Norway to António Guterres of Portugal, have been men. In November 2025 the presidents of the General Assembly and the Security Council opened the race for the tenth, whose term starts on 1 January 2027, and their joint letter encouraged states to nominate women. This lesson looks at how that choice is really made, and at the informal rules, groups and money that run the UN behind the organ chart."},
   goals:[
     "Explain the informal practices of the Security Council: penholders, elected members, Arria-formula meetings and the veto initiative",
     "Compare the main positions on Security Council reform and explain why reform stalls",
     "Describe how the General Assembly works through regional groups and negotiating blocs",
     "Explain how the Secretary-General is selected and what the job involves, including the 2026 process",
     "Distinguish assessed, voluntary and earmarked funding, and describe the UN80 reforms as of 2026"
   ],
   learn:[
    {h:"Beyond the organ chart", body:[
      {lead:"Read the UN Charter and you learn what the UN’s bodies may do. Watch them for a month and you learn how they actually do it."},
      "The primer set out the basics: the six principal organs, the [[veto]], the Council’s 15 seats and the reform positions ({{united-nations}}, {{un-security-council}}). This lesson is about practice: the informal rules and political groups that shape outcomes.",
      "Ian Hurd’s *After Anarchy: Legitimacy and Power in the United Nations Security Council* (2007) argues that the Council’s power rests partly on its **legitimacy**: states seek its approval because others see it as the rightful voice on peace and security. That is why states fight so hard over its composition and procedures. It also explains why practice matters: procedures that look fair add to the Council’s authority, and procedures that look rigged drain it."
    ]},
    {h:"Inside the Security Council", body:[
      "The [[permanent-five|permanent five]] (P5) sit on the Council forever; the ten elected members (often called the **E10**) serve two-year terms. Several informal practices matter a great deal:",
      {list:["**Penholders.** On each country file, one member, the [[penholder]], drafts resolutions and leads negotiations. France, the United Kingdom and the United States hold most pens, which elected members have long criticised; since the late 2010s more files have had an elected co-penholder.","**The presidency** rotates every month in English alphabetical order, giving every member, large or small, a turn to shape the agenda.","**Arria-formula meetings**, named after Venezuela’s ambassador Diego Arria, who started them in 1992, let members hear from civil society and experts informally.","**The veto initiative.** Since a General Assembly resolution of April 2022 (76/262), the Assembly meets within ten working days after any veto, and the state that cast it is invited to explain."]},
      "Elected members are not passengers. Small states use their two years to champion themes such as climate and security, children in armed conflict or sanctions procedures, and some co-ordinate as a group. But they leave just as they learn the system, while the P5 accumulate decades of expertise: an informal advantage on top of the veto."
    ]},
    {h:"Reform: why it stalls", body:[
      "Since February 2009 reform has been discussed in the General Assembly’s [[intergovernmental-negotiations|intergovernmental negotiations]] (IGN), on five key issues: categories of membership, the veto, regional representation, the size of an enlarged Council and its working methods, and the Council’s relationship with the General Assembly.",
      {table:[
        ["Group","Position","Main argument"],
        ["[[g4-reform-group|G4]] (Brazil, Germany, India, Japan)","New permanent and elected seats; G4 seats for themselves","The Council should reflect today’s powers and contributors"],
        ["[[uniting-for-consensus|Uniting for Consensus]] (incl. Italy, Pakistan, Argentina, Mexico, Rep. of Korea)","No new permanent seats; more elected seats, some longer and renewable","New permanent seats would add privilege, not democracy"],
        ["African Union ([[ezulwini-consensus|Ezulwini Consensus]], 2005)","Two permanent seats for Africa with all rights, including the veto while it exists, and more elected seats","Correcting a historic injustice to a continent of 54 states"],
        ["L.69 group of developing countries","Expansion in both categories, with stronger Global South representation","Fair representation of developing regions"]
      ]},
      "Others add proposals: a permanent Arab seat, a seat for small island developing states, limits on the veto. In September 2024 the then US administration said it supported two permanent seats for Africa, without the veto. The [[pact-for-the-future|Pact for the Future]] adopted that month committed states to intensify the negotiations and work towards a consolidated model. As of November 2026, however, members had not agreed on a single model, and no amendment had been put to a vote.",
      "Why the deadlock? Any amendment needs two-thirds of all UN members **and** ratification by two-thirds including every permanent member (Article 108). Regional rivals often oppose each other’s bids. And each group would rather wait than accept a deal that locks in a rival’s gain. Defenders of the status quo add that a larger Council could be slower; reformers reply that a Council seen as unrepresentative is losing authority anyway."
    ]},
    {h:"The General Assembly: groups and blocs", body:[
      "In the General Assembly every member has one vote, but few states act alone. Elections to UN bodies run through five **regional groups**: African; Asia-Pacific; Eastern European; Latin American and Caribbean; and Western European and Others (which includes Australia, Canada, New Zealand and, for voting, the United States).",
      "Negotiations run through **blocs**. The Group of 77 and China, founded in 1964 and now with more than 130 members, speaks for developing countries on economic and budget matters; the EU’s members coordinate positions; small island states, Arab states and the Non-Aligned Movement have their own groupings. Budget decisions in the Fifth Committee are usually reached by consensus, which gives any determined group leverage.",
      "Assembly resolutions mostly recommend, but they set agendas and shape norms, and in deadlocks the Assembly can act under [[uniting-for-peace|Uniting for Peace]]. Voting records are a rich data source for researchers who study alignments between states."
    ]},
    {h:"The Secretary-General: secretary or general?", body:[
      "Under Article 97 the [[un-secretary-general|Secretary-General]] is “appointed by the General Assembly upon the recommendation of the Security Council”, for five-year terms set by a 1946 resolution. Article 98 lets organs entrust the post with tasks, and Article 99 allows it to bring threats to the peace to the Council’s attention. The old question is whether the job is more “secretary” (an administrator serving states) or “general” (an independent political leader).",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="m9b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-soft" x="30" y="10" width="280" height="50" rx="10" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Joint letter opens the race</text><text class="s" x="170" y="49" text-anchor="middle">Assembly and Council presidents</text><path class="d-ink" d="M170,60 V78" stroke-width="2" marker-end="url(#m9b)"/><rect class="d-soft" x="30" y="80" width="280" height="50" rx="10" stroke-width="2"/><text x="170" y="101" text-anchor="middle">States nominate candidates</text><text class="s" x="170" y="119" text-anchor="middle">public list, CVs, vision statements</text><path class="d-ink" d="M170,130 V148" stroke-width="2" marker-end="url(#m9b)"/><rect class="d-sage" x="30" y="150" width="280" height="50" rx="10" stroke-width="2"/><text x="170" y="171" text-anchor="middle">Public dialogues</text><text class="s" x="170" y="189" text-anchor="middle">since 2016, open to all states</text><path class="d-ink" d="M170,200 V218" stroke-width="2" marker-end="url(#m9b)"/><rect class="d-gold" x="30" y="220" width="280" height="50" rx="10" stroke-width="2"/><text x="170" y="241" text-anchor="middle">Council straw polls</text><text class="s" x="170" y="259" text-anchor="middle">later colour-coded to show P5 views</text><path class="d-ink" d="M170,270 V288" stroke-width="2" marker-end="url(#m9b)"/><rect class="d-rose" x="30" y="290" width="280" height="36" rx="10" stroke-width="2"/><text x="170" y="313" text-anchor="middle">Council recommends one name</text><path class="d-ink" d="M170,326 V334" stroke-width="2" marker-end="url(#m9b)"/><rect class="d-panel" x="30" y="336" width="280" height="36" rx="10" stroke-width="2"/><text x="170" y="359" text-anchor="middle">Assembly appoints</text></svg>', alt:"Flow diagram of the selection of the UN Secretary-General: a joint letter from the Assembly and Council presidents opens the race; states nominate candidates who publish CVs and vision statements; public dialogues open to all states, held since 2016; Security Council straw polls, later colour-coded to show the permanent members’ views; the Council recommends one name; the General Assembly appoints.", cap:"How the Secretary-General is chosen. The real decision lies with the Council, where any permanent member can block a candidate."},
      "Until 2016 the choice was made almost entirely behind closed doors. Since the Council began using them in 1981, informal [[straw-poll|straw polls]] let members “encourage” or “discourage” candidates; later rounds use coloured ballots that reveal the permanent members’ views. The United States blocked a second term for Boutros Boutros-Ghali in 1996. A 2015 Assembly resolution (69/321) brought public candidate lists and dialogues. An informal rotation among regions is often expected, but it is not a rule.",
      "The 2026 race follows this pattern. As of 5 November 2026 the Council had held eight straw polls, starting on 30 July and including a colour-coded round on 16 October; several candidates had withdrawn and others had entered late; and no recommendation had yet been made. Whoever is chosen will take office on 1 January 2027."
    ]},
    {h:"Money: assessed, voluntary and earmarked", body:[
      "The UN regular budget and peacekeeping are paid through [[assessed-contributions|assessed contributions]], legal obligations under the scale set by the Assembly. Most of the wider UN system, from UNICEF to the World Food Programme, runs on [[voluntary-contributions|voluntary contributions]], and much of that money is [[earmarking|earmarked]]: tied by donors to particular countries or projects.",
      "Earmarking lets donors steer priorities and leaves agencies chasing short-term project money. WHO is the standard example: in 2022 its members agreed to raise assessed contributions gradually to half of its base budget by the 2030–31 budget period, to reduce dependence on earmarked funds.",
      "Payment is also political. A large contributor that pays late or cuts voluntary funding can force an agency to shrink. As of 2026 the system was under severe strain: the United States had completed its withdrawal from WHO on 22 January 2026, and on 7 January 2026 announced withdrawal from 66 organisations and bodies, 31 of them UN entities. Several other donors had also cut aid budgets.",
      "The Secretary-General’s response was the [[un80-initiative|UN80 initiative]], launched in March 2025, with three workstreams: efficiency, a review of the thousands of mandates states have given the Secretariat, and structural change across the system. In December 2025 the General Assembly approved a 2026 regular budget of about US$3.45 billion. UN News reported that it largely reflected the Secretary-General’s revised proposal, with a 15% reduction in resources and a nearly 19% cut in staffing, and that about 2,900 posts would be abolished from 1 January 2026. (Other sources give somewhat different percentages, depending on what they compare with.) Supporters call UN80 overdue modernisation; critics, including human rights groups, say it is austerity that cuts core work without deeper reform. Member states have the final say on any mergers or structural changes.",
      {key:"The UN works through informal practices, groups and money as much as through the Charter. To explain an outcome, ask who held the pen, which blocs negotiated, who paid, and with what strings attached."},
      {terms:["permanent-five","penholder","intergovernmental-negotiations","g4-reform-group","uniting-for-consensus","ezulwini-consensus","straw-poll","assessed-contributions","voluntary-contributions","earmarking","un80-initiative"]}
    ]}
   ],
   try:[
    {id:"e4u9-l3-x1", type:"match", q:"Match each piece of UN vocabulary to its meaning.", pairs:[
      ["Penholder","The Council member that drafts texts on a file","Usually France, the UK or the US, sometimes with an elected co-penholder."],
      ["Arria-formula meeting","An informal Council meeting to hear outside voices","Named after Venezuela’s ambassador Diego Arria (1992)."],
      ["E10","The ten elected Council members","They serve two-year terms, elected by the General Assembly."],
      ["Veto initiative","An automatic Assembly debate after any veto","Created by resolution 76/262 in April 2022."],
      ["Straw poll","An informal Council vote to encourage or discourage a candidate","Used in Secretary-General selection since 1981."]
    ]},
    {id:"e4u9-l3-x2", type:"sort", q:"Which reform group is most likely to make each statement?", buckets:["G4","Uniting for Consensus","African Common Position"], items:[
      {t:"“We seek permanent seats for Brazil, Germany, India and Japan.”", b:0, why:"The G4 support one another’s bids for permanent seats."},
      {t:"“Adding permanent members would only multiply privilege; expand the elected seats instead.”", b:1, why:"Opposition to new permanent seats is Uniting for Consensus’s core position."},
      {t:"“Our continent must have two permanent seats with the same rights as the current five.”", b:2, why:"This is the Ezulwini Consensus of 2005."},
      {t:"“Longer, renewable elected terms are a fair compromise.”", b:1, why:"Uniting for Consensus proposes longer-term elected seats as an alternative to new permanent ones."},
      {t:"“As long as the veto exists, new permanent members should have it too.”", b:2, why:"The African position asks for all prerogatives, including the veto, while it exists."}
    ]},
    {id:"e4u9-l3-x3", type:"number", q:"Under Article 108, a Charter amendment must first be adopted by two-thirds of the **members** of the General Assembly. With 193 members, what is the **smallest number** of “yes” votes needed?", answer:129, tol:0, unit:"votes", why:"Two-thirds of 193 is 128.67. You cannot cast a fraction of a vote, so you need the next whole number: 129. Then two-thirds of members, including all five permanent members, must ratify.", wrongs:[
      {v:128, tol:0, why:"128 is less than two-thirds of 193 (128.67). Round up, not down."},
      {v:97, tol:0, why:"97 is a simple majority of 193, not two-thirds."},
      {v:9, tol:0, why:"Nine is the Security Council threshold for adopting a resolution, not the Assembly threshold for an amendment."}
    ], hint2:"Multiply 193 by 2/3 and round up to a whole vote."},
    {id:"e4u9-l3-x4", type:"order", q:"Put the steps of the Secretary-General’s selection in order.", items:[
      {t:"The presidents of the General Assembly and the Security Council send a joint letter opening the process.", why:"The formal start; in the current race it was sent in November 2025."},
      {t:"States nominate candidates, whose CVs and vision statements are made public.", why:"Public nomination has been the practice since the 2015 reforms."},
      {t:"Candidates take part in public dialogues with member states.", why:"Introduced in 2016 to make the process more transparent."},
      {t:"The Council holds straw polls, later with colour-coded ballots for the permanent members.", why:"Informal votes that reveal who might be vetoed."},
      {t:"The Council adopts a resolution recommending one candidate.", why:"Article 97: the recommendation comes from the Council."},
      {t:"The General Assembly appoints the new Secretary-General.", why:"The final, formal step."}
    ]},
    {id:"e4u9-l3-x5", type:"mcq", q:"An agency receives most of its money as voluntary contributions earmarked for donors’ chosen projects. What is the most likely consequence?", options:[
      {t:"Donors gain more say over its priorities, and core functions not chosen by donors may be underfunded", ok:true, why:"Right. Earmarking shifts control towards donors and away from the governing body’s overall plan."},
      {t:"Every member gains an equal say over how money is spent", why:"Earmarking does the opposite: the donor decides where its money goes."},
      {t:"The agency becomes legally independent of its members", why:"Funding type does not change the agency’s legal status."},
      {t:"Its budget becomes more predictable than an assessed budget", why:"Voluntary money is usually less predictable, since donors decide each year."}
    ]},
    {id:"e4u9-l3-x6", type:"spot", q:"A news story reports on the UN. Tap the claims that are **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"The UN ordered all countries to adopt the new climate targets, the Assembly resolution said.", flag:true, why:"Misleading. General Assembly resolutions on such matters are recommendations; on matters like this, only Security Council decisions can bind all members."},
      " ",
      {t:"The Secretary-General is appointed by the General Assembly on the Security Council’s recommendation.", flag:false, why:"Correct: this is Article 97."},
      " ",
      {t:"Because the US pays 22% of the regular budget, it has 22% of the votes in the Assembly.", flag:true, why:"Wrong. Every member has one vote in the Assembly, whatever it pays."},
      " ",
      {t:"Peacekeeping is financed by a separate assessed budget.", flag:false, why:"Correct, with a special scale in which the permanent members pay a premium."},
      " ",
      {t:"The UN80 initiative was launched by the Secretary-General in 2025.", flag:false, why:"Correct: it was launched in March 2025."}
    ]},
    {id:"e4u9-l3-x7", type:"mcq", q:"Why has Security Council reform made so little progress despite broad agreement that the Council should change?", options:[
      {t:"Reform needs very high thresholds, including every permanent member’s ratification, and rival groups prefer no deal to a deal that favours their neighbours", ok:true, why:"Yes. The Article 108 rules and regional rivalries together create the deadlock."},
      {t:"No state has ever proposed a reform model", why:"Many models exist (G4, Uniting for Consensus, the African position, L.69 and others)."},
      {t:"The Charter forbids any change to the Security Council", why:"The Charter can be amended; it was in 1965, when the Council grew from 11 to 15 members."},
      {t:"The Secretary-General has vetoed every proposal", why:"The Secretary-General has no vote or veto on Charter amendments."}
    ]}
   ],
   apply:{
    intro:"Watch the UN at work. All the sources here are free and public.",
    tasks:[
     {t:"Follow one Council file", how:[
       "Open Security Council Report’s monthly forecast (securitycouncilreport.org) and choose one country or theme on this month’s programme.",
       "Find who holds the pen, which elected members are active on it, and what the Council is expected to do.",
       "Then find the UN press release (press.un.org) for the meeting and note how each member voted or spoke."
     ], write:"File… Penholder… Active elected members… Expected outcome… Actual outcome and votes…"},
     {t:"Track the Secretary-General race", how:[
       "Find the official page of the President of the General Assembly on the selection of the next Secretary-General.",
       "List the current candidates, their nominating states and regions, and one theme from each vision statement.",
       "Note what has happened since this lesson was written (November 2026)."
     ], write:"Candidates and nominating states… Regions… Themes… Latest step in the process…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Would adding permanent members make the Security Council more legitimate or less effective?",
       "2. Is the Secretary-General a secretary or a general, and which should the job be?",
       "3. Is UN80 reform or retrenchment?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes tracing one Council file from forecast to outcome, an up-to-date summary of the Secretary-General race, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"unhb", where:"Part “Security Council” (the introduction and the sections on membership and procedure)", note:"Look up current members, presidencies and subsidiary bodies."},
    {book:"unhb", where:"Parts “Secretariat” and “Budget and Scales of Assessment”", note:"The Secretariat’s structure and the current scales of assessment."},
    {book:"ospol", where:"Chapter 15, section 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)”", note:"A textbook overview to set beside this lesson."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u9-l4", title:"Regionalism compared", minutes:60,
   hook:{q:"ASEAN was founded in 1967. When did it get a legally binding charter of its own?", options:["At its founding in 1967","In 1976, with its first summit","It was signed in 2007 and came into force in 2008","It has never had one"], answer:2, reveal:"**Signed in 2007, in force in 2008.** For forty years ASEAN ran on a two-page declaration, summit statements and habits of consultation. The ASEAN Charter gave it legal personality, but it kept decision-making by consultation and consensus. That choice, rules on paper but consensus in practice, is a good starting point for comparing how regions organise."},
   goals:[
     "Explain the move from “old” to “new” and comparative regionalism, and the critique of the EU as a model",
     "Analyse the EU’s supranational mechanisms and the theories that explain them",
     "Explain ASEAN’s consensus and centrality, and the debate about its effectiveness",
     "Assess the AU’s principle of non-indifference and the OAS’s democracy clause in practice",
     "Describe newer bodies such as the SCO neutrally, with the competing readings of them"
   ],
   learn:[
    {h:"From one model to many regions", body:[
      {lead:"For decades textbooks measured every region against Europe and found the others “behind”. Most specialists now reject that yardstick."},
      "The primer introduced [[regionalism]], the ladder of economic integration, and the difference between [[intergovernmentalism|intergovernmental]] and [[supranationalism|supranational]] bodies ({{regional-organizations}}). Here we compare designs more closely.",
      "Scholars distinguish an “old” regionalism of the 1950s–70s, driven by states and inward-looking development plans, from a [[new-regionalism|new regionalism]] after the Cold War: more open to world markets, with business and civil society involved and many overlapping bodies. Björn Hettne and Fredrik Söderbaum were leading voices of this approach.",
      "Today’s field is **comparative regionalism**. Key works include Amitav Acharya and Alastair Iain Johnston’s *Crafting Cooperation* (2007), which compares regional institutions across the world, Peter Katzenstein’s *A World of Regions* (2005) on Asia and Europe, and *The Oxford Handbook of Comparative Regionalism* (2016), edited by Tanja Börzel and Thomas Risse. A common message: regions differ because their histories, power structures and ideas differ, not because some are failing to become the EU (see [[eurocentrism]]).",
      "One more distinction is essential. **Regionalism** is a political project led by states; **regionalisation** is the growth of trade, investment and travel within a region, driven by firms and people. East Asia was long described as highly regionalised but lightly institutionalised: production networks linking Japan, South Korea, China and Southeast Asia grew faster than formal bodies. Formal rules followed later, for example in the Regional Comprehensive Economic Partnership (RCEP), signed by fifteen Asia-Pacific states in 2020 and in force from 2022."
    ]},
    {h:"The EU: supranationalism up close", body:[
      "The [[european-union|EU]] combines two kinds of transfer that Moravcsik distinguished: **pooling** (deciding together by majority, so a state can be outvoted) and **delegation** (giving powers to independent bodies). Both create [[pooled-sovereignty|pooled sovereignty]].",
      {list:["**Law above the state.** In *Van Gend en Loos* (1963) the Court of Justice held that Community law can give rights to individuals directly, and in *Costa v ENEL* (1964) that it takes precedence over conflicting national law.","**Majority voting.** Many laws pass in the Council by qualified majority: 55% of member states representing at least 65% of the EU’s population.","**Agenda power.** The Commission has the near-exclusive right to propose legislation.","**Limits.** Foreign and security policy, taxation and new members still need unanimity, and any state may leave under Article 50, as the United Kingdom did in 2020."]},
      "Why so much pooling? Neofunctionalists stress spillover, liberal intergovernmentalists the interests of the big states, and Hooghe and Marks’s postfunctionalism the shift from a “permissive consensus” among voters to a “constraining dissensus” in which identity politics limits integration."
    ]},
    {h:"ASEAN: consensus and centrality", body:[
      "The ASEAN Charter (signed 2007, in force 2008) gave the organisation a legal personality, a stronger secretariat and a human rights body, but Article 20 keeps **consultation and consensus** as the basic rule. For some economic commitments it allows an “ASEAN minus X” formula, letting willing members move first.",
      "The Charter also asks members to maintain [[asean-centrality|ASEAN centrality]]: ASEAN, not any great power, should sit at the heart of the region’s wider forums. Those forums include ASEAN Plus Three (with China, Japan and South Korea), the [[asean-regional-forum|ASEAN Regional Forum]] (1994) and the [[east-asia-summit|East Asia Summit]] (2005), covered in Unit 12.",
      "The debate is lively. In *Constructing a Security Community in Southeast Asia* (2001) Amitav Acharya ({{amitav-acharya}}) argued that the [[asean-way|ASEAN Way]] of informal consultation built norms of restraint that kept the peace among members. David Martin Jones and Michael Smith replied in “Making Process, Not Progress” (*International Security*, 2007) that ASEAN produces meetings rather than results and depends on outside powers. Myanmar after its 2021 military takeover tested both views: ASEAN agreed a Five-Point Consensus in April 2021, then limited Myanmar’s representation at summits, an unusual step that critics still called too weak."
    ]},
    {h:"The AU and the OAS: when principles meet practice", body:[
      "The [[african-union|AU]]’s Constitutive Act (2000) moved from the OAU’s non-interference to what officials called [[non-indifference]]. Article 4(h) gives the Union the right to intervene in grave circumstances (war crimes, genocide, crimes against humanity), and Article 4(j) lets a member request intervention. A Peace and Security Council has worked since 2004, and governments that take power unconstitutionally are suspended, as several were after coups in the 2020s.",
      "Practice is harder. No intervention has ever been launched under Article 4(h) against a government’s will. Peace operations depend heavily on outside funding, notably from the EU; a 2016 decision to fund the AU through a 0.2% levy on eligible imports has been applied only unevenly. And regional economic communities, such as ECOWAS, often act first. In January 2025 Mali, Burkina Faso and Niger left ECOWAS after disputes over its response to their military governments, having formed their own Alliance of Sahel States.",
      "The Organization of American States (OAS), founded by a charter signed in Bogotá in 1948, offers a comparison. Its Inter-American Democratic Charter, adopted in Lima on 11 September 2001, includes a [[democracy-clause|democracy clause]]: a member whose democratic order is interrupted can be suspended by a two-thirds vote. Honduras was suspended after the 2009 coup and readmitted in 2011. Venezuela (effective 2019) and Nicaragua (effective 2023) left the OAS after clashes with it. Critics in the region have long seen US influence in the OAS; alternatives such as CELAC (2011), which excludes the US and Canada, reflect that view."
    ]},
    {h:"Five bodies side by side", body:[
      "A table makes the comparison concrete. Read each row as a set of choices that members made, and could change.",
      {table:[
        ["Body","How it decides","What it can do to members","Founding norm"],
        ["EU","Qualified majority on many laws; unanimity on some","Court rulings, fines, legal primacy","“Ever closer union”"],
        ["AU","Consensus, or two-thirds if needed","Suspension; a right to intervene in grave cases","Non-indifference"],
        ["OAS","Majorities; two-thirds to suspend","Suspension under the democracy clause","Representative democracy"],
        ["ASEAN","Consultation and consensus","Very little: no sanctions or suspension","Non-interference"],
        ["SCO","Consensus","Very little","Sovereignty, the “Shanghai Spirit”"]
      ]},
      "Two lessons follow. First, rules on paper and behaviour in practice differ: the AU has strong texts and cautious practice; ASEAN has weak texts but a long record in which disputes among members have rarely turned into armed conflict (critics point to the deadly Cambodia–Thailand border clashes, most recently in 2025). Second, ideas travel between regions and are adapted on arrival: rules against coups, for example, now appear in both African and American regional texts. Acharya calls this kind of adaptation [[norm-localization|norm localisation]]: outside ideas are reshaped to fit local beliefs.",
      {list:["**Misconception: “Regional bodies compete with the UN.”** The Charter’s Chapter VIII expects them to work together, and in practice the UN and the AU, for example, co-deploy and co-fund missions.","**Misconception: “Consensus means unanimity in every vote.”** Consensus usually means no member objects strongly enough to block; it is often reached by quiet bargaining, not formal votes."]}
    ]},
    {h:"Newer bodies: the SCO and beyond", body:[
      "The **Shanghai Cooperation Organisation** (SCO) grew from the “Shanghai Five” border talks of 1996 and was founded in June 2001 by China, Russia, Kazakhstan, Kyrgyzstan, Tajikistan and Uzbekistan. India and Pakistan joined in 2017, Iran in 2023 and Belarus in 2024, giving it ten members (see {{shanghai-cooperation-organisation}}). It decides by consensus, has a Regional Anti-Terrorist Structure based in Tashkent, and describes its values as the “Shanghai Spirit” of mutual trust, equality and respect for different civilisations.",
      "Readings differ. Its members present it as a model of non-Western cooperation based on [[sovereignty]] and non-interference. Some Western scholars, such as Thomas Ambrosio (2008), have argued that it spreads authoritarian norms and shields governments from criticism, part of what others call **authoritarian regionalism**. Others see a forum where China and Russia manage their interests in Central Asia, and note that rivalries such as India–Pakistan limit what it can do.",
      "[[brics|BRICS]] is not a regional organisation but a cross-regional club; it expanded from 2024 and has a New Development Bank (agreed 2014). Unit 13 treats clubs of this kind ({{clubs-and-minilateralism}}, {{brics}}).",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="m9c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><path class="d-ink" d="M22,330 V22" stroke-width="2" marker-end="url(#m9c)"/><text class="s" x="34" y="22">more powers</text><text class="s" x="34" y="36">over members</text><text class="s" x="34" y="340">fewer powers</text><rect class="d-lup" x="60" y="48" width="270" height="50" rx="10" stroke-width="2"/><text x="195" y="69" text-anchor="middle">EU</text><text class="s" x="195" y="88" text-anchor="middle">courts, majority votes, Commission</text><rect class="d-sage" x="60" y="108" width="270" height="50" rx="10" stroke-width="2"/><text x="195" y="129" text-anchor="middle">AU</text><text class="s" x="195" y="148" text-anchor="middle">right to intervene, suspensions</text><rect class="d-gold" x="60" y="168" width="270" height="50" rx="10" stroke-width="2"/><text x="195" y="189" text-anchor="middle">OAS</text><text class="s" x="195" y="208" text-anchor="middle">democracy clause, suspensions</text><rect class="d-soft" x="60" y="228" width="270" height="50" rx="10" stroke-width="2"/><text x="195" y="249" text-anchor="middle">ASEAN</text><text class="s" x="195" y="268" text-anchor="middle">charter, consensus, no suspension</text><rect class="d-rose" x="60" y="288" width="270" height="50" rx="10" stroke-width="2"/><text x="195" y="309" text-anchor="middle">SCO</text><text class="s" x="195" y="328" text-anchor="middle">consensus, non-interference</text></svg>', alt:"Vertical scale from fewer to more formal powers over members: at the bottom the SCO (consensus, non-interference), then ASEAN (charter, consensus, no suspension), the OAS (democracy clause, suspensions), the AU (right to intervene, suspensions) and at the top the EU (courts, majority votes, Commission).", cap:"Formal powers over members, on paper. Practice can differ a great deal: the AU has never used its right to intervene against a government’s will."},
      {key:"Compare regions by their rules (decision-making, enforcement, membership) and their norms (sovereignty, non-interference, democracy), then ask why. Different designs are usually choices, not failures."},
      {terms:["new-regionalism","pooled-sovereignty","asean-centrality","non-indifference","democracy-clause"]}
    ]}
   ],
   try:[
    {id:"e4u9-l4-x1", type:"match", q:"Match each regional body to the feature that most distinguishes it.", pairs:[
      ["European Union","Court rulings that its law takes precedence over national law","*Costa v ENEL* (1964) established primacy."],
      ["ASEAN","Decisions by consultation and consensus, with a commitment to its own centrality","Article 20 of the ASEAN Charter."],
      ["African Union","A treaty right to intervene in a member for genocide or war crimes","Article 4(h) of the Constitutive Act."],
      ["Organization of American States","A democracy clause allowing suspension by a two-thirds vote","The Inter-American Democratic Charter (2001)."],
      ["Shanghai Cooperation Organisation","A Regional Anti-Terrorist Structure and the “Shanghai Spirit”","Founded in 2001; its anti-terrorism body sits in Tashkent."]
    ]},
    {id:"e4u9-l4-x2", type:"sort", q:"Is each EU feature an example of pooling or of delegation, in Moravcsik’s sense?", buckets:["Pooling (deciding together by majority)","Delegation (powers given to an independent body)"], items:[
      {t:"Ministers adopt a law by qualified majority, outvoting two governments.", b:0, why:"States decide together and can be outvoted: pooling."},
      {t:"The Commission alone may propose most legislation.", b:1, why:"An agenda power handed to an independent body is delegation."},
      {t:"The Court of Justice rules that a national law conflicts with EU law.", b:1, why:"Giving judgement to an independent court is delegation."},
      {t:"Members agree single-market rules by majority vote rather than unanimity.", b:0, why:"Majority voting among governments is pooling."}
    ]},
    {id:"e4u9-l4-x3", type:"mcq", q:"Lucía writes that “ASEAN has failed because it has not built institutions like the EU’s.” What is the strongest scholarly objection?", options:[
      {t:"It assumes the EU is the yardstick; ASEAN’s members deliberately chose a consensus design, and its success should be judged against its own aims", ok:true, why:"Right. Comparative regionalists criticise this Eurocentric yardstick; whether ASEAN meets its own goals is a separate, debatable question."},
      {t:"ASEAN actually has a supranational court more powerful than the EU’s", why:"Factually wrong: ASEAN has no supranational court."},
      {t:"ASEAN has no members, so it cannot fail", why:"ASEAN has eleven members since Timor-Leste joined in 2025."},
      {t:"No scholar has ever criticised ASEAN", why:"Jones and Smith (2007) and others criticise it sharply; the objection is to the yardstick, not to criticism."}
    ]},
    {id:"e4u9-l4-x4", type:"mcq", q:"Which statement about the AU’s Article 4(h) is accurate as of 2026?", options:[
      {t:"It gives the Union a right to intervene in grave circumstances, but it has never been used against a government’s will", ok:true, why:"Correct. The text is strong, but practice has been cautious; the AU has relied on suspensions, mediation and missions with consent."},
      {t:"It obliges the AU to intervene whenever a coup happens", why:"Coups lead to suspension under separate rules; 4(h) covers war crimes, genocide and crimes against humanity, and it is a right, not a duty."},
      {t:"It was copied from the ASEAN Charter", why:"ASEAN’s Charter has no such provision; it keeps non-interference."},
      {t:"It was removed from the Constitutive Act in 2015", why:"It remains in the Act."}
    ]},
    {id:"e4u9-l4-x5", type:"spot", q:"A comparison paragraph describes regional bodies. Tap the claims that are **inaccurate or loaded**.", ask:"inaccurate or loaded", parts:[
      {t:"The OAS’s democracy clause was adopted in 2001.", flag:false, why:"Correct: the Inter-American Democratic Charter of 11 September 2001."},
      " ",
      {t:"The SCO is obviously nothing but a club of dictators.", flag:true, why:"Loaded and one-sided. Some scholars call it authoritarian regionalism; others see a stability forum. Attribute views instead of asserting them."},
      " ",
      {t:"Belarus became the SCO’s tenth member in 2024.", flag:false, why:"Correct as of 2026."},
      " ",
      {t:"ASEAN expels members that break its rules.", flag:true, why:"Inaccurate. ASEAN has no expulsion or suspension procedure; with Myanmar it limited representation at summits instead."},
      " ",
      {t:"Mali, Burkina Faso and Niger left ECOWAS in January 2025.", flag:false, why:"Correct."}
    ]},
    {id:"e4u9-l4-x6", type:"sort", q:"Which theory of European integration does each explanation reflect?", buckets:["Neofunctionalism","Liberal intergovernmentalism","Postfunctionalism"], items:[
      {t:"A single market created pressure for a single currency.", b:0, why:"One step creating pressure for the next is spillover."},
      {t:"France and Germany agreed the deal because it suited their exporters.", b:1, why:"National economic interests driving bargains among big states is Moravcsik’s view."},
      {t:"Referendums and identity politics now block further transfers of power.", b:2, why:"Hooghe and Marks’s “constraining dissensus”."},
      {t:"The Commission brokered a compromise and pushed the next step.", b:0, why:"Cultivated spillover by supranational actors."},
      {t:"Governments delegated to a court to make each other’s promises credible.", b:1, why:"Delegation for credible commitments is a liberal intergovernmentalist argument."}
    ]},
    {id:"e4u9-l4-x7", type:"mcq", q:"Why might a newly independent group of states choose an intergovernmental, consensus-based regional body rather than a supranational one?", options:[
      {t:"States that recently won sovereignty, often after colonial rule, tend to guard it closely and prefer bodies they can each block", ok:true, why:"Right. History and identity are central explanations of design in comparative regionalism."},
      {t:"Because supranational bodies are illegal under the UN Charter", why:"The Charter does not forbid them; the EU exists alongside it, and Chapter VIII welcomes regional arrangements."},
      {t:"Because consensus bodies can never achieve anything", why:"Consensus slows decisions but does not make them impossible; this is not why states choose it."},
      {t:"Because the EU forbids other regions from copying it", why:"No such rule exists."}
    ]}
   ],
   apply:{
    intro:"Compare regional bodies from their own documents. All are free online.",
    tasks:[
     {t:"Compare two decision rules", how:[
       "Choose two regional organisations from different continents (for example ASEAN and the AU, the OAS and the Pacific Islands Forum, or the EU and Mercosur).",
       "In each founding text, find the article on how decisions are made and any article on suspension or withdrawal.",
       "Write one sentence on what each rule says about how much sovereignty members share."
     ], write:"Organisations… Decision rule (article)… Suspension or withdrawal (article)… What it says about sovereignty…"},
     {t:"Read a summit statement", how:[
       "Find the chair’s statement or declaration from the most recent ASEAN, AU or SCO summit.",
       "Note three commitments and how specific each is (dates, numbers, who acts).",
       "Decide whether the statement fits Acharya’s view (norm-building) or Jones and Smith’s (process, not progress), and why."
     ], write:"Summit and date… Three commitments… How specific… Which view it supports and why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the EU a model for other regions, or an exception?",
       "2. Has the AU moved from non-interference to non-indifference in practice, or only on paper?",
       "3. Is the SCO best understood as regional cooperation, authoritarian regionalism or great-power management?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A side-by-side note on two regional bodies’ decision rules with article numbers, an analysis of one summit statement, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 15, section 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"A textbook overview of regional bodies."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"Background to Asian thinking about order and regional cooperation."},
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Its discussion of regional organisations, as a reminder of the basics."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u9-l5", title:"Legitimacy, effectiveness and contestation", minutes:65,
   hook:{q:"Only one state has ever announced its withdrawal from the United Nations itself. Which one, and what happened next?", options:["The United States, in 1950, and it never returned","Indonesia, in 1965, and it returned in 1966","South Africa, in 1974, and it returned in 1994","Taiwan, in 1971, and it returned in 1990"], answer:1, reveal:"**Indonesia, in January 1965**, in protest at Malaysia’s election to the Security Council. After a change of government it resumed full cooperation in September 1966. South Africa was suspended from the Assembly’s work, not withdrawn, and in 1971 the General Assembly recognised the People’s Republic of China’s representatives as the only lawful representatives of China at the UN. Exit from the UN itself is almost unknown; exit from other IOs is common, and it is one of several ways states contest organisations, the subject of this lesson."},
   goals:[
     "Define legitimacy and distinguish input, throughput and output legitimacy, and sociological from normative legitimacy",
     "Explain why judging IO effectiveness is hard, and how scholars measure it",
     "Analyse withdrawal and funding cuts as exit and voice, with cases from 2017–2026",
     "Explain contested multilateralism (Morse and Keohane 2014): regime shifting, competitive regime creation, forum shopping and regime complexes",
     "Evaluate a real IO for a seminar using a structured framework"
   ],
   learn:[
    {h:"Why legitimacy matters for bodies without armies", body:[
      {lead:"An IO cannot arrest anyone or tax anyone. Why do governments, firms and citizens follow its rules at all?"},
      "Part of the answer is [[io-legitimacy|legitimacy]]: the belief that an institution has the right to rule and that its rules ought to be obeyed. Ian Hurd’s article “Legitimacy and Authority in International Politics” (1999) argued that states comply with rules they see as legitimate, not only out of fear or self-interest. Scholars distinguish **sociological** legitimacy (do people actually believe the IO is rightful?) from **normative** legitimacy (does it deserve that belief?). Allen Buchanan and Robert Keohane’s “The Legitimacy of Global Governance Institutions” (2006) proposed standards for the second.",
      "A widely used scheme, from Fritz Scharpf’s work on the EU (1999) and extended by Vivien Schmidt (2013), separates three sources:",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="m9d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-soft" x="30" y="12" width="280" height="70" rx="10" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Input legitimacy</text><text class="s" x="170" y="56" text-anchor="middle">who has a voice: representation,</text><text class="s" x="170" y="72" text-anchor="middle">participation, fair votes</text><path class="d-ink" d="M170,82 V104" stroke-width="2" marker-end="url(#m9d)"/><rect class="d-gold" x="30" y="106" width="280" height="70" rx="10" stroke-width="2"/><text x="170" y="130" text-anchor="middle">Throughput legitimacy</text><text class="s" x="170" y="150" text-anchor="middle">how it decides: transparency,</text><text class="s" x="170" y="166" text-anchor="middle">accountability, due process</text><path class="d-ink" d="M170,176 V198" stroke-width="2" marker-end="url(#m9d)"/><rect class="d-sage" x="30" y="200" width="280" height="70" rx="10" stroke-width="2"/><text x="170" y="224" text-anchor="middle">Output legitimacy</text><text class="s" x="170" y="244" text-anchor="middle">what it delivers: solving</text><text class="s" x="170" y="260" text-anchor="middle">the problems it was set up for</text></svg>', alt:"Three stacked boxes joined by arrows: input legitimacy (who has a voice: representation, participation, fair votes), throughput legitimacy (how it decides: transparency, accountability, due process) and output legitimacy (what it delivers: solving the problems it was set up for).", cap:"Three sources of legitimacy. An IO can score well on one and badly on another."},
      "The [[input-output-legitimacy|input, throughput and output]] distinction explains many debates. The Security Council is criticised on input (who sits on it), the IMF on input (votes by money) and on output (its record in crises), and many agencies on throughput (closed decisions). Jonas Tallberg and Michael Zürn (2019) shifted attention to **legitimation**: how IOs and their critics actively build or attack legitimacy through speeches, reports, protests and ratings."
    ]},
    {h:"Effectiveness: did it work?", body:[
      "Effectiveness sounds simpler than it is. Scholars ask at least three different questions: did the IO **achieve its own goals**, did it **change state behaviour** (compliance), and did it **solve the problem** (would things have been worse without it)?",
      "The third question is the hardest, because of selection effects. IOs are often sent to the hardest cases, so poor outcomes may reflect difficulty, not failure; and states often join agreements they would have kept anyway. Good studies build a [[counterfactual]] and compare similar cases (see {{case-selection}}).",
      "Large comparative projects try to make effectiveness measurable. Edward Miles, Arild Underdal and colleagues, in *Environmental Regime Effectiveness* (2002), scored environmental regimes on how far they changed behaviour compared with a no-regime counterfactual, and how close they came to a collective optimum. Their finding was mixed: regimes often made a real difference, but rarely solved problems fully, and success depended on how “malign” (conflict-laden) or “benign” the problem was.",
      "Tamar Gutner and Alexander Thompson’s “The Politics of IO Performance” (2010) warned that judgements of performance are political too: whose goals count, and over what time scale? The Montreal Protocol on ozone is widely judged effective because the problem measurably improved; many other bodies are harder to judge.",
      "Not every IO lives or dies by performance. Julia Gray (2018) showed that many economic IOs survive as **zombies**: formally alive, with meetings and staff, but doing little. Institutions are easier to create than to close."
    ]},
    {h:"Exit, voice and funding", body:[
      "Albert Hirschman’s *Exit, Voice, and Loyalty* (1970) offers a vocabulary: unhappy members can **exit** (leave), use **voice** (protest, demand reform) or stay loyal. [[io-withdrawal|Withdrawal]] from IOs is more common than often assumed; Inken von Borzyskowski and Felicity Vabulas (2019) built a dataset of more than 200 withdrawals between 1945 and 2014. They found exits linked mainly to geopolitics, above all a state’s preferences drifting away from other members’ and “contagion” (others following when a leading power leaves), rather than to nationalism.",
      {table:[
        ["Case","What happened"],
        ["United Kingdom and the EU","Left on 31 January 2020 after a 2016 referendum"],
        ["Russia and the Council of Europe","Expelled in March 2022, after it had announced its withdrawal"],
        ["Mali, Burkina Faso, Niger and ECOWAS","Left in January 2025"],
        ["United States and UNESCO","Left in 1984 and 2018, rejoined in 2003 and 2023; a new withdrawal announced in July 2025 takes effect at the end of 2026"],
        ["United States and WHO","Withdrawal completed on 22 January 2026"]
      ]},
      "On 7 January 2026 the United States also announced withdrawal from 66 international organisations and bodies, 31 of them UN entities, including the UN climate convention. The US government argued that these bodies did not serve American interests, wasted money or pursued agendas it opposed. Many other governments and the organisations themselves warned of lost capacity and influence and of harm to the people they serve.",
      "Exit has a mirror image: **entry**. States still queue to join IOs because membership brings voice, markets and status. Timor-Leste campaigned for over a decade before it became ASEAN’s eleventh member in 2025, and several states have applied to join the EU, BRICS or the OECD. Who wants in tells you as much about an IO’s legitimacy as who wants out.",
      "Funding cuts and late payment can work as **voice**: pressure for reform without leaving. They can also become exit by stealth. For a seminar, keep the analytical questions apart from the political ones: what triggered the move, how did the IO adapt (cuts, new donors, reform), and did other members step in?"
    ]},
    {h:"Contested multilateralism and forum shopping", body:[
      "Exit is not the only option. Julia Morse and Robert Keohane’s article “Contested Multilateralism” (*Review of International Organizations*, 2014) described how dissatisfied states and coalitions **use multilateral institutions to challenge others** (on [[multilateralism]] itself and its future, see Unit 13 and {{multilateralism-debates}}) (see {{contested-multilateralism}}). [[contested-multilateralism|Contested multilateralism]] takes two main forms:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m9e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="40" y="10" width="260" height="58" rx="10" stroke-width="2"/><text x="170" y="34" text-anchor="middle">A coalition is unhappy</text><text class="s" x="170" y="54" text-anchor="middle">with an existing institution</text><path class="d-ink" d="M110,68 L80,108" stroke-width="2" marker-end="url(#m9e)"/><path class="d-ink" d="M230,68 L260,108" stroke-width="2" marker-end="url(#m9e)"/><rect class="d-gold" x="10" y="112" width="152" height="96" rx="10" stroke-width="2"/><text x="86" y="136" text-anchor="middle">Regime shifting</text><text class="s" x="86" y="158" text-anchor="middle">move the issue to</text><text class="s" x="86" y="174" text-anchor="middle">another existing</text><text class="s" x="86" y="190" text-anchor="middle">institution</text><rect class="d-sage" x="178" y="112" width="152" height="96" rx="10" stroke-width="2"/><text x="254" y="136" text-anchor="middle">Competitive</text><text x="254" y="154" text-anchor="middle">creation</text><text class="s" x="254" y="174" text-anchor="middle">build a new body</text><text class="s" x="254" y="190" text-anchor="middle">with other rules</text><rect class="d-soft" x="10" y="220" width="152" height="100" rx="10" stroke-width="2"/><text class="s" x="86" y="244" text-anchor="middle">e.g. intellectual</text><text class="s" x="86" y="260" text-anchor="middle">property from WIPO</text><text class="s" x="86" y="276" text-anchor="middle">into the WTO’s</text><text class="s" x="86" y="292" text-anchor="middle">TRIPS rules (1994)</text><rect class="d-soft" x="178" y="220" width="152" height="100" rx="10" stroke-width="2"/><text class="s" x="254" y="244" text-anchor="middle">e.g. a new</text><text class="s" x="254" y="260" text-anchor="middle">development bank</text><text class="s" x="254" y="276" text-anchor="middle">beside existing</text><text class="s" x="254" y="292" text-anchor="middle">lenders</text></svg>', alt:"Decision tree: a coalition unhappy with an existing institution can choose regime shifting, moving the issue to another existing institution (for example intellectual property moved from WIPO into the WTO’s TRIPS rules in 1994), or competitive regime creation, building a new body with other rules (for example a new development bank beside existing lenders).", cap:"Two forms of contested multilateralism, after Morse and Keohane (2014)."},
      {list:["[[regime-shifting|Regime shifting]]: moving an issue to a different existing forum. Laurence Helfer (2004) showed how industrialised states moved intellectual property rules from WIPO into the trade regime, producing the WTO’s TRIPS agreement (1994), and how developing countries later shifted parts of the issue back to WHO and other bodies.","[[competitive-regime-creation|Competitive regime creation]]: building a new institution. Many observers read the Asian Infrastructure Investment Bank (opened 2016) and the BRICS New Development Bank this way, as responses to slow voice reform at the IMF and World Bank; their founders present them as complements, not rivals."]},
      "Overlap also creates workarounds when one forum stalls. Since December 2019 the WTO’s Appellate Body has been unable to hear appeals, because the United States blocked new appointments, arguing that the body had overstepped its role. In 2020 a group of members, including the EU and China (Japan joined in 2023), set up the Multi-Party Interim Appeal Arbitration Arrangement (MPIA) as a stopgap among themselves: a small case of building around a blocked institution rather than leaving it.",
      "Related terms: [[forum-shopping|forum shopping]] means choosing, case by case, the forum most likely to give you what you want; and a [[regime-complex|regime complex]] (Kal Raustiala and David Victor, 2004) is a set of overlapping institutions governing one issue, with no single centre. Overlap is not always bad: some IOs act as **orchestrators**, steering other actors towards shared goals ([[orchestration]]; Abbott, Genschel, Snidal and Zangl, 2015)."
    ]},
    {h:"How to evaluate an IO for a seminar", body:[
      "A good evaluation is structured, comparative and fair. Six questions cover most of it:",
      {ol:["**Mandate**: what was it created to do, and has that changed?","**Design**: membership, decision rules, centralisation, flexibility (Lesson 1).","**Authority and autonomy**: what can its staff do without asking (Lesson 2)?","**Performance**: which goals, measured how, compared with what counterfactual?","**Legitimacy**: input, throughput, output, and who contests it.","**Contestation**: exits, funding fights, rival bodies, forum shopping."]},
      {ex:"Mandate: the Mekong River Commission (1995 Agreement between Cambodia, Laos, Thailand and Viet Nam) promotes cooperation on the river’s sustainable use.\nDesign: consensus; prior consultation on mainstream dams, but no veto; China and Myanmar, upstream, are dialogue partners, not members.\nPerformance: strong on data and science; weak on stopping disputed projects. When members disagreed over the Xayaburi dam in 2011, Laos went ahead.\nContestation: since 2016 the China-led Lancang–Mekong Cooperation has included all six river states. Some analysts read it as competitive regime creation; its members describe it as complementary.\nVerdict, argued: useful as a knowledge body, limited as a decision-maker by its design and membership.", label:"Worked example: a short evaluation"},
      {list:["**Misconception: “Legitimate means legal.”** An IO can act within its rules and still be seen as illegitimate, or bend its rules and be widely accepted.","**Misconception: “More IOs means more cooperation.”** Overlapping bodies can help, or let states play one against another.","**Misconception: “Withdrawal kills an IO.”** Many survive the exit of large members by cutting costs, finding new donors or reforming; some become zombies."]},
      {tip:"Write the verdict last, and make it conditional: “effective at X, limited at Y, because of Z”. Attribute every contested judgement to the people who make it."},
      {key:"Legitimacy, effectiveness and contestation are linked: IOs that deliver and listen are harder to leave, and IOs that are contested must work harder to prove both. Judge them with evidence, not slogans."},
      {terms:["io-legitimacy","input-output-legitimacy","io-withdrawal","contested-multilateralism","regime-shifting","competitive-regime-creation","forum-shopping","regime-complex","orchestration"]}
    ]}
   ],
   try:[
    {id:"e4u9-l5-x1", type:"sort", q:"Which kind of legitimacy does each criticism target?", buckets:["Input","Throughput","Output"], items:[
      {t:"“A continent of 54 states has no permanent seat.”", b:0, why:"Who is represented is input legitimacy."},
      {t:"“Its board meets in secret and publishes no minutes.”", b:1, why:"Transparency of the decision process is throughput legitimacy."},
      {t:"“Its programmes have not reduced the problem they were meant to solve.”", b:2, why:"Results are output legitimacy."},
      {t:"“Votes depend on how much money a member puts in.”", b:0, why:"Who has a voice, and how much, is input legitimacy."},
      {t:"“No independent body reviews complaints about how its decisions were made.”", b:1, why:"Accountability and review of the decision process are part of throughput legitimacy."}
    ]},
    {id:"e4u9-l5-x2", type:"match", q:"Match each concept to its meaning.", pairs:[
      ["Regime shifting","Moving an issue to a different existing institution","Morse and Keohane’s first form; Helfer’s TRIPS case."],
      ["Competitive regime creation","Building a new institution with different rules","Morse and Keohane’s second form."],
      ["Forum shopping","Choosing, case by case, the forum most likely to favour you","A tactic available wherever forums overlap."],
      ["Regime complex","Overlapping institutions governing one issue","Raustiala and Victor (2004)."],
      ["Orchestration","An IO steering other actors towards shared goals","Abbott, Genschel, Snidal and Zangl (2015)."]
    ]},
    {id:"e4u9-l5-x3", type:"mcq", q:"A study finds that countries in a UN programme still had high rates of a disease, and concludes the programme failed. What is the main methodological problem?", options:[
      {t:"Selection effects: the programme may have been sent to the hardest cases, so a counterfactual comparison is needed", ok:true, why:"Right. Without asking what would have happened otherwise, a high rate cannot show failure."},
      {t:"Disease rates can never be measured", why:"They can be measured; the problem is interpreting them without a comparison."},
      {t:"UN programmes are always effective by definition", why:"No. The point is that the study’s design cannot tell either way."},
      {t:"The study should have asked only the programme’s staff", why:"Staff views would add bias, not solve the comparison problem."}
    ]},
    {id:"e4u9-l5-x4", type:"order", q:"Put these events in chronological order.", items:[
      {t:"Indonesia announces its withdrawal from the UN.", why:"January 1965."},
      {t:"The United States leaves UNESCO for the first time.", why:"1984; it rejoined in 2003."},
      {t:"The United Kingdom leaves the European Union.", why:"31 January 2020."},
      {t:"Russia is expelled from the Council of Europe.", why:"March 2022."},
      {t:"Mali, Burkina Faso and Niger leave ECOWAS.", why:"January 2025."},
      {t:"The US withdrawal from WHO is completed.", why:"22 January 2026."}
    ]},
    {id:"e4u9-l5-x5", type:"mcq", q:"Several governments, unhappy with their small voting shares at an existing development bank, create a new bank in which they hold most of the votes. In Morse and Keohane’s terms this is…", options:[
      {t:"Competitive regime creation", ok:true, why:"Yes. A dissatisfied coalition builds a new institution with different rules."},
      {t:"Regime shifting", why:"Regime shifting moves an issue to another existing body; here a new body is created."},
      {t:"Withdrawal", why:"They may stay in the old bank; creating a new one is not the same as leaving."},
      {t:"Orchestration", why:"Orchestration is an IO steering others towards shared goals, not states creating a rival body."}
    ]},
    {id:"e4u9-l5-x6", type:"spot", q:"A draft seminar paper evaluates an IO. Tap the sentences that **would weaken it**.", ask:"weakens the paper", parts:[
      {t:"The organisation was created in 1995 to promote cooperation on a shared river.", flag:false, why:"A clear statement of mandate: the right place to start."},
      " ",
      {t:"It is obviously useless and should be abolished.", flag:true, why:"Advocacy without evidence. State a conditional verdict and support it."},
      " ",
      {t:"Its data reports are widely used by governments and researchers.", flag:false, why:"Evidence of one kind of performance, clearly stated."},
      " ",
      {t:"One member built a disputed dam after consultations ended without consensus.", flag:false, why:"A concrete case that shows a design limit."},
      " ",
      {t:"Everyone agrees that the rival forum was set up to destroy it.", flag:true, why:"An unsupported claim about motives. Attribute views: “some analysts argue…; its members say…”."}
    ]},
    {id:"e4u9-l5-x7", type:"mcq", q:"Fatima argues that a government’s large cut to an agency’s voluntary funding, without leaving it, is a form of voice. Which point best supports her?", options:[
      {t:"The government stays a member and uses financial pressure to push for changes it wants", ok:true, why:"Right. In Hirschman’s terms, staying while protesting is voice; money is the lever."},
      {t:"Funding cuts are the same as formal withdrawal", why:"Withdrawal ends membership; a cut does not, which is why it can be voice."},
      {t:"Voluntary funding is a legal obligation", why:"Voluntary contributions are not legal obligations; assessed contributions are."},
      {t:"Voice means leaving quietly", why:"That describes exit; voice means staying and protesting."}
    ]}
   ],
   apply:{
    intro:"Bring the unit together by evaluating a real organisation. All sources are free.",
    tasks:[
     {t:"Evaluate an IO in six questions", how:[
       "Choose one IO you find interesting, from any region (a UN agency, a regional body, a development bank, a river or fisheries commission).",
       "Answer the six evaluation questions from the lesson in two or three sentences each, using at least one official source and one independent source (a study, an evaluation report or quality journalism).",
       "End with a conditional verdict: effective at…, limited at…, because…"
     ], write:"IO… Mandate… Design… Authority… Performance… Legitimacy… Contestation… Verdict…"},
     {t:"Trace one withdrawal or rival body", how:[
       "Choose one withdrawal from the lesson’s table, or one case of competitive regime creation.",
       "Find the official reasons given by the state or coalition, and the response of the IO or other members.",
       "Write which concept fits best (exit, voice, regime shifting, competitive creation) and what evidence would test it."
     ], write:"Case… Official reasons… IO’s response… Concept that fits… Evidence needed…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is contested multilateralism a threat to global governance or a sign of its health?",
       "2. Should IOs be judged mainly by input or by output legitimacy?",
       "3. Do withdrawals weaken IOs permanently, or do organisations adapt?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A six-question evaluation of one real IO with a conditional verdict and sources, an analysis of one withdrawal or rival institution, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Reread its conclusion with this lesson’s questions about legitimacy in mind."},
    {book:"ospol", where:"Chapter 15, section 15.1 “The Problem of Global Governance”", note:"The wider governance problem behind debates on IO legitimacy."},
    {book:"ipsrm", where:"Chapter 7, section 7.5 “Case Studies”", note:"A reminder of case study design before you evaluate an IO."}
   ]
  }
  ],
  checkpoint:["e4u9-q02","e4u9-q05","e4u9-q08","e4u9-q11","e4u9-q15","e4u9-q18","e4u9-q21","e4u9-q25","e4u9-q29","e4u9-q33","e4u9-q38","e4u9-q43"],
  codex:[
   {id:"theories-of-international-organization", title:"Theories of international organisation", aka:["why states create IOs","IO theory","functionalism and its successors"], tags:["international organisations","theory","cooperation"],
    summary:"The main answers to why states create international organisations and design them as they do: functionalism, neofunctionalism, rational design, principal–agent theory, and constructivist and realist alternatives.",
    levels:{
     starter:[
      "States are sovereign, yet they have created hundreds of international organisations (IOs) and agreed to follow their rules. Why?",
      "Think of neighbours who share a road. Each could repair their own stretch, but it is cheaper and safer to pool money and hire someone to look after the whole road. Of course, they then argue about who pays, who decides, and how to make sure the contractor does the job.",
      "Theories of international organisation ask the same three questions about states: **why create** an IO, **why design** it this way, and **why delegate** powers to its staff.",
      {key:"Different theories notice different things: tasks (functionalism), spreading integration (neofunctionalism), design choices (rational design), control of staff (principal–agent), and ideas and authority (constructivism)."}
     ],
     builder:[
      "**Functionalism** (David Mitrany, *A Working Peace System*, 1943): build peace task by task through technical agencies whose form follows their function. See {{david-mitrany}}.",
      "**Neofunctionalism** (Ernst Haas, *The Uniting of Europe*, 1958): integration in one sector spills over into others, pushed by interest groups and supranational officials. See {{ernst-haas}}.",
      "**Liberal intergovernmentalism** (Andrew Moravcsik, 1998): governments bargain according to domestic economic interests, then pool and delegate to make deals credible.",
      "**Rational design** (Koremenos, Lipson and Snidal, 2001): IOs differ in membership, scope, centralisation, control and flexibility because they solve different problems. See {{rational-design}}.",
      "**Principal–agent theory** (Hawkins, Lake, Nielson and Tierney, 2006): states delegate to IO staff and use controls to limit agency slack. See {{principal-agent-io}}.",
      "**Constructivism** (Barnett and Finnemore, 1999, 2004): IOs are bureaucracies with authority of their own that shape what states want. See {{ios-as-bureaucracies}}.",
      "**Realism**: IOs mostly reflect the interests of powerful states (Mearsheimer, “The False Promise of International Institutions”, 1994/95)."
     ],
     pro:[
      "**Choosing a theory.** The theories answer different questions, so a paper should match theory to question: creation (functional and rationalist), design (rational design), behaviour and drift (principal–agent, constructivist), change and decline (historical institutionalism, contestation).",
      "**Common critiques.** Functional explanations risk the functionalist fallacy, reading founders’ intentions from current effects (Wendt, 2001). Rationalist theories take preferences as given. Constructivist accounts can be hard to test, and rich cases do not always generalise.",
      "**Newer agendas.** Scholars now study IO authority across many organisations (Hooghe, Marks and colleagues, *Measuring International Authority*, 2017), IO death and “zombies” (Gray, 2018), withdrawal (von Borzyskowski and Vabulas, 2019) and contested multilateralism (Morse and Keohane, 2014). See {{contested-multilateralism}} and {{io-legitimacy}}.",
      {tip:"In a seminar, say which question you are answering before you name a theory. “Why was it created?” and “why does it behave like this?” often need different lenses."}
     ]
    },
    related:["david-mitrany","ernst-haas","rational-design","principal-agent-io","ios-as-bureaucracies","neoliberal-institutionalism","regional-organizations"],
    read:[{book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)"}],
    sources:[{t:"Koremenos, Lipson & Snidal, “The Rational Design of International Institutions”, International Organization 55(4), 2001 (RePEc record)", url:"https://econpapers.repec.org/RePEc:cup:intorg:v:55:y:2001:i:04:p:761-799_44"},{t:"Barnett & Finnemore, “The Politics, Power, and Pathologies of International Organizations”, International Organization 53(4), 1999 (RePEc record)", url:"https://econpapers.repec.org/RePEc:cup:intorg:v:53:y:1999:i:04:p:699-732_44"}],
    checked:"2026-11"},

   {id:"david-mitrany", title:"David Mitrany", aka:["Mitrany","functionalism’s founder"], tags:["thinker","international organisations","functionalism"],
    summary:"Romanian-born British scholar (1888–1975) whose *A Working Peace System* (1943) founded functionalism in the study of international organisation.",
    levels:{
     starter:[
      "**David Mitrany** (1888–1975) was born in Romania, moved to Britain and became one of the first theorists of international organisation. From 1933 to 1953 he was a member of the Institute for Advanced Study in Princeton.",
      "His best-known work, *A Working Peace System* (1943), was written during the Second World War. He argued that peace would not come from grand plans for a world government, but from many practical agencies, each solving one shared problem such as transport, health or food.",
      {key:"Mitrany’s big idea: build peace from the bottom up, task by task, and let each task decide the shape of its agency."}
     ],
     builder:[
      "**Key ideas.** Functionalism holds that international cooperation should be organised around functions, not territories. Each agency should have the membership and powers its task requires. Successful cooperation in one area would spread to others (**ramification**), and people’s loyalties would gradually shift towards agencies that served them.",
      "**What he opposed.** Mitrany distrusted federal schemes, including plans for a European federation, because he thought they would simply create a bigger state with the same rivalries.",
      "**Influence.** His ideas fitted the specialised agencies created around the UN after 1945, such as WHO and FAO, and inspired Ernst Haas’s neofunctionalism, which added politics and interest groups. He later collected his writings in *The Functional Theory of Politics* (1975).",
      "**Using him today.** Mitrany is cited in debates on technical cooperation across rival states, such as river commissions, disease surveillance and standards bodies."
     ],
     pro:[
      "**Critiques.** Critics argue that functionalism underrates power and politics: “technical” issues create winners and losers, great powers can stay out, and agencies did not erode national loyalty as he hoped. Haas’s neofunctionalism was partly a response.",
      "**Context.** Writing in wartime Britain, Mitrany shared the liberal internationalist search for alternatives to the League’s failure, but rejected both world federalism and a return to balance-of-power politics.",
      "**Legacy.** His influence survives in the study of specialised agencies, transnational technical networks and “functional cooperation” in regions where political integration is off the table, for example on the Mekong.",
      {warn:"The slogan “form follows function” is often attached to Mitrany, but it comes from architecture; quote his own idea that the function should determine the agency’s form."}
     ]
    },
    related:["theories-of-international-organization","ernst-haas","rational-design"],
    sources:[{t:"Wikipedia, “David Mitrany” (biographical overview; check against the scholarly literature)", url:"https://en.wikipedia.org/wiki/David_Mitrany"}],
    checked:"2026-11"},

   {id:"ernst-haas", title:"Ernst B. Haas", aka:["Haas","neofunctionalism’s founder"], tags:["thinker","international organisations","European integration"],
    summary:"German-born American political scientist (1924–2003) whose *The Uniting of Europe* (1958) founded neofunctionalism and the idea of spillover.",
    levels:{
     starter:[
      "**Ernst B. Haas** (1924–2003) was born in Germany and emigrated to the United States as a boy. He taught at the University of California, Berkeley, from 1951 until he retired in 2000.",
      "He studied how European states began to integrate after the Second World War. In *The Uniting of Europe* (1958) he argued that once states pooled one industry, coal and steel, pressures would build to pool others too. He called this **spillover**.",
      {key:"Haas added politics to functionalism: integration spreads because interest groups and officials see gains in it, not only because experts solve problems."}
     ],
     builder:[
      "**Key works.** *The Uniting of Europe* (1958); *Beyond the Nation-State: Functionalism and International Organization* (1964), a study of the International Labour Organization; *The Obsolescence of Regional Integration Theory* (1975); *When Knowledge Is Power* (1990), on how IOs learn.",
      "**Neofunctionalism.** Integration is driven by self-interested actors: firms, unions, parties and supranational officials. Spillover can be functional (linked tasks), political (groups shifting their lobbying) or cultivated (officials pushing), terms later scholars used to organise his ideas.",
      "**How it is used.** Neofunctionalism remains one of the three main theories of European integration, alongside liberal intergovernmentalism and postfunctionalism."
     ],
     pro:[
      "**Self-critique.** Setbacks such as France’s “empty chair” boycott (1965–66) led Haas in 1975 to call regional integration theory “obsolescent”. He also argued that spillover, developed from Western Europe, did not travel well to other regions.",
      "**Later work.** His later research moved to learning and knowledge in IOs, influencing constructivists and the study of [[epistemic-community|epistemic communities]]. His last major work was a two-volume study, *Nationalism, Liberalism, and Progress* (1997, 2000).",
      "**Critiques.** Liberal intergovernmentalists say he overrated supranational actors; postfunctionalists that he missed the role of identity and mass politics. Defenders reply that revived integration after 1985 looked much like spillover.",
      {tip:"Cite Haas for mechanisms (spillover) and for honesty about a theory’s limits: his own 1975 reassessment is a model of scholarly self-criticism."}
     ]
    },
    related:["theories-of-international-organization","david-mitrany","comparative-regionalism"],
    sources:[{t:"Biographical summary and bibliography of Ernst B. Haas (Indiana University page)", url:"https://hartj.pages.iu.edu/documents/haas.pdf"},{t:"“In Memoriam: Ernst Bernard Haas (1924–2003)”, International Organization", url:"https://resolve.cambridge.org/core/services/aop-cambridge-core/content/view/420C865728B589DF353367D0FD60BA86/S0020818304581080a.pdf/in-memoriam-ernst-bernard-haas-1924-2003.pdf"}],
    checked:"2026-11"},

   {id:"rational-design", title:"Rational design of international institutions", aka:["rational design","institutional design"], tags:["international organisations","theory","design"],
    summary:"The argument (Koremenos, Lipson and Snidal, 2001) that states choose IO features such as membership, scope, centralisation, control and flexibility to solve specific cooperation problems.",
    levels:{
     starter:[
      "Why do some IOs admit every state while others are small clubs? Why do some have courts and strict rules, while others rely on voluntary pledges?",
      "**Rational design** answers: states design institutions on purpose, as tools for particular problems. A builder chooses different materials for a bridge and a garden shed; states choose different rules for trade disputes and for sharing weather data.",
      "The approach was set out in a 2001 special issue of the journal *International Organization*, edited by Barbara Koremenos, Charles Lipson and Duncan Snidal.",
      {key:"Different cooperation problems call for different designs."}
     ],
     builder:[
      "**Five design dimensions:** membership (who can join), scope (which issues), centralisation (is there a central body to gather information, decide or enforce), control (how votes and decisions are allocated) and flexibility (can rules be adapted or escaped).",
      "**Four problems that drive them:** distribution (who gains), enforcement (temptation to cheat), number of actors, and uncertainty (about others’ behaviour, the state of the world or preferences).",
      "**Examples of conjectures.** More uncertainty about the state of the world leads to more flexibility; enforcement problems lead to more centralisation; serious distribution problems lead to more flexibility or restricted membership.",
      "**Related work.** Abbott and Snidal (1998) argued that formal IOs are valuable because of centralisation and independence; Abbott and Snidal (2000) explained why states choose hard or soft law."
     ],
     pro:[
      "**Critiques.** Alexander Wendt’s contribution to the same issue, “Driving with the Rearview Mirror” (2001), warned against reading intentions from outcomes and against ignoring how identities and norms shape what counts as rational. Historical institutionalists add that design is often inherited, path-dependent or improvised in crises.",
      "**Research use.** Rational design generates testable hypotheses across many agreements; Koremenos’s later work coded hundreds of agreements for features such as escape clauses and dispute settlement.",
      "**Limits in practice.** Real IOs often have design features nobody chose deliberately, and features that outlive the problems they were meant to solve.",
      {tip:"Check the negotiating record (travaux préparatoires, conference minutes, memoirs) before claiming that a feature was designed to solve a problem."}
     ]
    },
    related:["theories-of-international-organization","principal-agent-io","neoliberal-institutionalism"],
    sources:[{t:"Koremenos, Lipson & Snidal, “The Rational Design of International Institutions”, International Organization 55(4), 2001, pp. 761–799 (RePEc record)", url:"https://econpapers.repec.org/RePEc:cup:intorg:v:55:y:2001:i:04:p:761-799_44"}],
    checked:"2026-11"},

   {id:"principal-agent-io", title:"Principal–agent theory and IOs", aka:["delegation","agency slack","P-A theory"], tags:["international organisations","theory","delegation"],
    summary:"Treats member states as principals who delegate tasks to IO staff as agents, and studies how they control agency slack.",
    levels:{
     starter:[
      "When you hire a builder, you gain expertise and save time, but you also take a risk: the builder may cut corners or do things their own way. You protect yourself with a contract, payments in stages and inspections.",
      "**Principal–agent theory** applies this to IOs. Member states (**principals**) delegate tasks to an IO and its staff (the **agent**). The agent has expertise and information the principals lack, and may pursue its own goals, a problem called **agency slack**.",
      {key:"Delegation brings benefits and risks; states use controls to keep the benefits and limit the risks."}
     ],
     builder:[
      "**Why delegate?** Specialisation, efficiency, credible commitments (handing decisions to an impartial body), resolving disputes, and shifting blame for unpopular decisions.",
      "**Kinds of slack.** **Shirking** means the agent puts in less effort; **slippage** means it moves policy towards its own preferences.",
      "**Controls.** Screening and selecting leaders; precise mandates; budgets; monitoring and reporting; independent evaluation; complaint mechanisms; and the threat to cut funds or rewrite the mandate.",
      "**The collective principal.** IOs answer to many states with different preferences. When they disagree, they cannot agree to discipline the agent, which gives it more room to act.",
      "**Key text.** Hawkins, Lake, Nielson and Tierney (eds.), *Delegation and Agency in International Organizations* (Cambridge University Press, 2006)."
     ],
     pro:[
      "**Chains of delegation.** Voters delegate to governments, governments to ministries, ministries to IO boards, boards to staff. Each link can slip, which complicates democratic accountability.",
      "**Applications.** Studies of IMF conditionality, World Bank lending and EU agencies use P-A models to explain when staff follow or depart from shareholders’ wishes.",
      "**Critiques.** Constructivists, notably Barnett and Finnemore, argue that IO authority is not only delegated: rational-legal, moral and expert authority give IOs power of their own (see {{ios-as-bureaucracies}}). P-A theory can also overstate how clear and stable principals’ preferences are.",
      {tip:"Use P-A theory when your question is about control: who can rein the IO in, and why they did or did not."}
     ]
    },
    related:["theories-of-international-organization","rational-design","ios-as-bureaucracies","bretton-woods-governance"],
    sources:[{t:"Hawkins, Lake, Nielson & Tierney (eds.), Delegation and Agency in International Organizations (Cambridge University Press, 2006): book page", url:"https://www.cambridge.org/core/books/delegation-and-agency-in-international-organizations/logic-of-delegation-to-international-organizations/CFC6344F6C9560E267941FB24E8312B3"}],
    checked:"2026-11"},

   {id:"ios-as-bureaucracies", title:"IOs as bureaucracies: authority and pathologies", aka:["Rules for the World","IO autonomy","IO pathologies"], tags:["international organisations","constructivism","bureaucracy"],
    summary:"Barnett and Finnemore’s argument that IOs are bureaucracies with their own authority and power, and that the same features make them prone to pathologies.",
    levels:{
     starter:[
      "Michael Barnett and Martha Finnemore asked what IOs actually do once states create them. Their answer, in a 1999 article and the book *Rules for the World* (2004), was that IOs are **bureaucracies**: organisations run by experts applying impersonal rules.",
      "That makes them powerful. When the UN refugee agency decides who counts as a refugee, or WHO declares an emergency, its label changes what states and others do.",
      "It also makes them fallible. Bureaucracies can follow rules even when the rules defeat their purpose.",
      {key:"IOs are not only tools of states: they also make the categories and rules through which the world is governed."}
     ],
     builder:[
      "**Authority.** IOs draw on rational-legal authority (impersonal rules), delegated authority (from states), moral authority (defending shared values) and expert authority (knowledge).",
      "**Power.** They classify (refugees, least developed countries, pandemics), fix meanings (what “development” or “governance” means) and diffuse norms.",
      "**Pathologies.** The irrationality of rationalisation (rules become ends), universalism (one template everywhere), normalisation of deviance (exceptions become routine), insulation (no feedback) and cultural contestation (clashing sub-units).",
      "**Cases in the book.** The IMF’s expanding conditionality; UNHCR’s “repatriation culture”; and the UN Secretariat’s handling of Rwanda in 1994, shaped by an ideology of impartiality."
     ],
     pro:[
      "**Theory.** The argument draws on Weber’s sociology of bureaucracy and on sociological institutionalism; it is a constructivist alternative to principal–agent accounts of IOs.",
      "**Critiques.** Reviewers noted that the cases are thick descriptions rather than tests, and that the line between IO autonomy and state preferences can be hard to draw empirically. Principal–agent scholars reply that much apparent autonomy is tolerated slack.",
      "**Legacy.** The book shaped research on IO expertise, the World Bank (Weaver, *Hypocrisy Trap*, 2008), the IMF (Chwieroth, *Capital Ideas*, 2010) and humanitarian agencies. Barnett went on to write *Empire of Humanity* (2011), a history of humanitarianism.",
      {tip:"“Pathology” is analytical, not moral: it locates causes of failure in normal bureaucratic features, which suggests reforms aimed at culture, feedback and incentives."}
     ]
    },
    related:["martha-finnemore","principal-agent-io","bretton-woods-governance","constructivism","bureaucracy","max-weber"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys)"}],
    sources:[{t:"Barnett & Finnemore, “The Politics, Power, and Pathologies of International Organizations”, International Organization 53(4), 1999, pp. 699–732 (RePEc record)", url:"https://econpapers.repec.org/RePEc:cup:intorg:v:53:y:1999:i:04:p:699-732_44"},{t:"Review of Rules for the World, Central European Journal of International and Security Studies", url:"https://cejiss.org/rules-for-the-world-international-organizations-in-global-politics"}],
    checked:"2026-11"},

   {id:"martha-finnemore", title:"Martha Finnemore", aka:["Finnemore"], tags:["thinker","constructivism","international organisations"],
    summary:"American constructivist scholar of norms and international organisations, co-author of *Rules for the World* (2004) and of the norm life cycle (1998).",
    levels:{
     starter:[
      "**Martha Finnemore** is an American political scientist and a leading constructivist. As of 2026 she is a professor of political science and international affairs at the Elliott School of International Affairs, George Washington University.",
      "Her work asks how ideas and organisations shape what states want. In *National Interests in International Society* (1996) she showed how IOs such as UNESCO and the World Bank taught states new goals, such as setting up a science policy body or fighting poverty.",
      {key:"Finnemore’s big idea: state interests are not fixed; international organisations and norms help create them."}
     ],
     builder:[
      "**Key works.** *National Interests in International Society* (1996); “International Norm Dynamics and Political Change” with Kathryn Sikkink (1998), the norm life cycle (see {{norm-dynamics}}); *The Purpose of Intervention* (2003), on changing beliefs about when force is legitimate; and *Rules for the World* (2004) with Michael Barnett.",
      "**On IOs.** With Barnett she argued that IOs are bureaucracies with rational-legal, delegated, moral and expert authority, able to classify, fix meanings and diffuse norms, and prone to pathologies (see {{ios-as-bureaucracies}}).",
      "**How scholars use her work.** Her concepts appear in studies of humanitarian intervention, human rights, development and global health."
     ],
     pro:[
      "**Context.** Finnemore was part of the generation that brought constructivism into the mainstream of American IR in the 1990s, alongside Wendt, Katzenstein and Sikkink.",
      "**Critiques.** Rationalists argue that norm-based accounts struggle to predict when norms win; critical scholars ask whose norms spread and why, a question Global IR scholars such as Acharya answer with norm localisation.",
      "**Later work.** She has also written on legitimacy and US hegemony and on norms for cyberspace.",
      {tip:"Pair Finnemore with Barnett for IOs, and with Sikkink for norms; cite the 1999 article for the pathologies argument and the 2004 book for the full theory and cases."}
     ]
    },
    related:["ios-as-bureaucracies","norm-dynamics","constructivism","alexander-wendt"],
    sources:[{t:"Wikipedia, “Martha Finnemore” (overview of career and works; check against her faculty page)", url:"https://en.wikipedia.org/wiki/Martha_Finnemore"}],
    checked:"2026-11"},

   {id:"bretton-woods-governance", title:"IMF and World Bank governance", aka:["IMF quotas","World Bank voting","Bretton Woods governance"], tags:["international organisations","global economy","governance"],
    summary:"How the IMF and World Bank are governed (quotas, weighted votes, leadership conventions), and the main debates about their power, reform and legitimacy.",
    levels:{
     starter:[
      "The IMF and the World Bank were created at Bretton Woods in 1944 (see {{bretton-woods-institutions}}). Unlike the UN General Assembly, they do not give each member one vote.",
      "Votes follow money. Each IMF member has a **quota**, broadly based on the size of its economy, which sets how much it pays in, how much it can borrow and how many votes it has. As of 2026 the United States held about 16.5% of votes, and major decisions needed 85%, so it could block them alone.",
      "By an informal convention, the IMF’s Managing Director has always been European and the World Bank’s president a US national.",
      {key:"In the Bretton Woods institutions, voice depends on economic weight, which is the root of most debates about their legitimacy."}
     ],
     builder:[
      "**Structure.** A Board of Governors (usually finance ministers) delegates most work to a 25-member Executive Board. Since 2016 all directors are elected: the largest members each elect a director of their own, while most others share one in multi-country constituencies.",
      "**Decisions.** Most, such as lending programmes, need a simple majority of votes; major decisions need 85%.",
      "**Reforms.** The 2010 reform, in force from 2016, raised emerging economies’ shares; China became the third-largest shareholder at the IMF. A 50% quota increase without changes to shares was approved in December 2023, but as of early November 2026 it had not taken effect, because members with 85% of quotas, including the United States, had not yet consented.",
      "**Leaders.** Kristalina Georgieva has been IMF Managing Director since 2019 (re-appointed in 2024); Ajay Banga has been World Bank president since 2023."
     ],
     pro:[
      "**Critiques.** Critics from the Global South and elsewhere argue that weighted voting and leadership conventions give rich countries outsized control; defenders reply that those who provide the money must be able to protect it.",
      "**Crisis record.** The Asian financial crisis of 1997–98 led to sharp criticism of IMF conditionality (Stiglitz, 2002) and to self-criticism by its Independent Evaluation Office (2003); the Fund later accepted capital flow measures in some circumstances (2012 institutional view).",
      "**Alternatives.** Slow reform helped motivate new lenders such as the Asian Infrastructure Investment Bank (opened 2016) and the New Development Bank (see {{contested-multilateralism}}).",
      "**Analytical lenses.** Principal–agent scholars study shareholder control; constructivists study staff ideas and culture (Barnett and Finnemore; Chwieroth; Weaver)."
     ]
    },
    related:["bretton-woods-institutions","ios-as-bureaucracies","principal-agent-io","contested-multilateralism","io-legitimacy"],
    read:[{book:"ospol", where:"Chapter 16, section 16.3 “The Bretton Woods Institutions”"}],
    sources:[{t:"US Congressional Research Service, “The International Monetary Fund” (IF10676, December 2025)", url:"https://www.everycrsreport.com/files/2025-12-08_IF10676_7a228a2f7260ce52002fe292eff912f700492288.html"},{t:"Legis1, report on the IMF quota reform consent deadline (3 November 2026)", url:"https://legis1.com/news/us-imf-seats-vacant-as-quota-reform-deadline"}],
    checked:"2026-11"},

   {id:"un-security-council-reform", title:"Security Council reform", aka:["UNSC reform","IGN","G4","Uniting for Consensus","Ezulwini Consensus"], tags:["United Nations","reform","security"],
    summary:"The decades-long debate on enlarging and reforming the UN Security Council: the main groups, their positions, the rules for change and the state of play as of 2026.",
    levels:{
     starter:[
      "The Security Council still looks much as it did in 1965: five permanent members with a veto (China, France, Russia, the UK and the US) and ten elected members. Many states argue that it no longer reflects the world: Africa, Latin America and much of Asia have no permanent seat.",
      "Almost everyone agrees that reform is needed. They disagree about **what kind**: new permanent seats, more elected seats, or limits on the veto.",
      "Change needs a Charter amendment, which every permanent member can block.",
      {key:"Reform stalls not because nobody wants change, but because the main groups want incompatible changes and the rules require near-universal agreement."}
     ],
     builder:[
      "**Where talks happen.** The General Assembly’s intergovernmental negotiations (IGN), since February 2009, on five issues: categories of membership, the veto, regional representation, size and working methods, and the Council’s relationship with the Assembly.",
      "**Main positions.** The G4 (Brazil, Germany, India, Japan) seek new permanent and elected seats. Uniting for Consensus (including Italy, Pakistan, Argentina, Mexico and the Republic of Korea) opposes new permanent seats and proposes more elected seats, some with longer terms. The African Union’s Ezulwini Consensus (2005) asks for two permanent African seats with all prerogatives, including the veto while it exists, plus more elected seats. The L.69 group of developing countries supports expansion in both categories.",
      "**Rules.** Article 108: two-thirds of all members must adopt an amendment, and two-thirds including all five permanent members must ratify it."
     ],
     pro:[
      "**Recent steps.** The Pact for the Future (September 2024) committed states to intensify efforts and work towards a consolidated model; the co-chairs circulate “elements papers” recording where positions converge and diverge. As of November 2026 no single model had broad support and no amendment had been put to a vote.",
      "**Arguments.** Reformers stress representation, legitimacy and burden-sharing; sceptics stress effectiveness, the risk of more vetoes, and regional rivalries over who would represent each region.",
      "**Working-methods reforms** have moved faster than membership reform: the 2022 veto initiative (resolution 76/262), more open debates, Arria-formula meetings and elected co-penholders.",
      {tip:"In a seminar, separate three questions: who should sit on the Council, how it should decide, and how it should work. Progress on the third does not require a Charter amendment."}
     ]
    },
    related:["un-security-council","united-nations","un-secretary-general-selection","io-legitimacy"],
    read:[{book:"unhb", where:"Part “Security Council”"}],
    sources:[{t:"Amani Africa, IGN co-chair article on the state of the negotiations (March 2026)", url:"https://amaniafrica-et.org/?p=22949"},{t:"UN digital library: Revised Co-Chairs’ Elements Paper (2025)", url:"https://digitallibrary.un.org/record/4087016/files/Revised-Co-Chairs-Elements-Paper-2025.pdf"}],
    checked:"2026-11"},

   {id:"un-secretary-general-selection", title:"The UN Secretary-General: selection and roles", aka:["Secretary-General selection","SG race","straw polls"], tags:["United Nations","leadership"],
    summary:"How the Secretary-General is chosen under Article 97, how the process has opened up since 2016, the 2026 race, and the tension between “secretary” and “general”.",
    levels:{
     starter:[
      "The **Secretary-General** heads the UN Secretariat and is the UN’s most visible voice. Under Article 97 of the Charter, the General Assembly appoints the Secretary-General on the recommendation of the Security Council, which means any permanent member can block a candidate.",
      "There have been nine Secretaries-General since 1946, all men. The race for the tenth opened in November 2025, and the new term begins on 1 January 2027.",
      {key:"The post is chosen by states, but its holder must speak for the whole organisation: that tension shapes both the selection and the job."}
     ],
     builder:[
      "**Process.** A joint letter from the presidents of the Assembly and the Council opens the race; states nominate candidates with public CVs and vision statements; candidates take part in public dialogues; the Council holds informal straw polls (encourage, discourage, no opinion), later colour-coded so permanent members’ ballots can be identified; the Council recommends one name; the Assembly appoints.",
      "**Reforms.** Straw polls began in 1981. Assembly resolution 69/321 (2015) brought public lists and dialogues, first used in 2016. An informal rotation among regions is often expected but is not a rule.",
      "**2026.** As of 5 November 2026 the Council had held eight straw polls since 30 July, including a colour-coded round on 16 October, without yet recommending a candidate.",
      "**Roles.** Chief administrative officer (Article 97); tasks entrusted by other organs (Article 98); bringing threats to the Council’s attention (Article 99); “good offices” mediation."
     ],
     pro:[
      "**Secretary or general?** Trygve Lie and Dag Hammarskjöld took activist stances that angered great powers; Boutros Boutros-Ghali’s second term was vetoed by the United States in 1996. Since then, scholars argue, the Council has tended to favour candidates seen as acceptable to all five.",
      "**Debates.** Proposals include a single, longer, non-renewable term (to free the holder from re-election politics), more than one candidate sent to the Assembly, and a woman Secretary-General, which many states and campaigns urged in 2026.",
      "**Research angle.** The selection is a case study in informal rules, veto politics and the limits of transparency reforms.",
      {warn:"Candidate lists and poll results change quickly; check the President of the General Assembly’s official page for the current state of the race."}
     ]
    },
    related:["united-nations","un-security-council-reform","ios-as-bureaucracies","pact-for-the-future"],
    read:[{book:"unhb", where:"Part “Secretariat”"}],
    sources:[{t:"Joint letter of the Presidents of the General Assembly and the Security Council on the selection and appointment of the Secretary-General (November 2025)", url:"https://www.un.org/pga/wp-content/uploads/sites/110/2025/11/PGA-PSC-Joint-Letter_Selection-and-Appointment-Process-of-the-Secretary-General-1.pdf"},{t:"1 for 8 Billion campaign, list of 2026 straw polls", url:"https://1for8billion.org/straw-polls-2026"}],
    checked:"2026-11"},

   {id:"un-funding", title:"How the UN system is funded", aka:["UN budget","assessed contributions","earmarking","UN80"], tags:["United Nations","budget","reform"],
    summary:"Assessed, voluntary and earmarked funding across the UN system, why the mix matters for power and priorities, and the cash crisis and UN80 reforms of 2025–26.",
    levels:{
     starter:[
      "The UN has more than one wallet. The **regular budget** and **peacekeeping** are paid through **assessed contributions**: shares that every member must pay, set by the General Assembly according to ability to pay.",
      "Most of the wider UN system, from UNICEF to the World Food Programme, runs on **voluntary contributions** that donors choose to give. Much of this money is **earmarked**: tied to particular projects or countries.",
      {key:"Who pays, how, and with what strings attached shapes what the UN actually does."}
     ],
     builder:[
      "**Assessed shares.** The 2025–27 scale sets a ceiling of 22% (paid by the United States), China at about 20%, Japan at about 7%, and a floor of 0.001%; peacekeeping uses a separate scale with a premium for permanent members.",
      "**Why earmarking matters.** It lets donors steer priorities and makes agencies dependent on short-term project money. WHO’s members agreed in 2022 to raise assessed contributions gradually to half of its base budget by the 2030–31 budget period.",
      "**Liquidity.** Late or missing payments by large contributors force spending freezes, whatever the approved budget.",
      "**UN80.** Launched by the Secretary-General in March 2025, with workstreams on efficiency, mandate review and structural change. The General Assembly approved a 2026 regular budget of about US$3.45 billion in December 2025; UN News reported that it largely reflected the Secretary-General’s revised proposal of a 15% cut in resources and a nearly 19% cut in staffing (percentages vary with the baseline used)."
     ],
     pro:[
      "**2026 context.** The United States completed its withdrawal from WHO on 22 January 2026 and, on 7 January 2026, announced withdrawal from 66 organisations and bodies, 31 of them UN entities; several other donors cut aid budgets. Agencies responded with staff cuts, mergers of offices and relocation of posts to lower-cost duty stations.",
      "**Debate.** Supporters see UN80 as overdue streamlining; critics, including human rights organisations and some researchers, see austerity without deeper reform, with disproportionate cuts to human rights work. Member states have the final say on mergers and mandates.",
      "**Analytical point.** Funding rules are a control mechanism in principal–agent terms and a source of informal influence: voluntary donors buy priority, not votes.",
      {warn:"Budget figures change every year and are easy to misquote; give the year, the budget (regular, peacekeeping or system-wide) and the source."}
     ]
    },
    related:["united-nations","principal-agent-io","io-legitimacy","global-health-governance"],
    read:[{book:"unhb", where:"Part “Budget and Scales of Assessment”"}],
    sources:[{t:"UN News, “General Assembly approves $3.45 billion UN regular budget for 2026” (30 December 2025)", url:"https://news.un.org/en/story/2025/12/1166685"},{t:"UN Geneva, “UN80 initiative enters critical new phase” (May 2026)", url:"https://www.ungeneva.org/en/news-media/news/2026/05/119061/un80-initiative-critical-new-phase-un-reform-effort"},{t:"IISD SDG Knowledge Hub, “US withdraws from 65 international organizations, UN agencies” (January 2026)", url:"https://sdg.iisd.org/news/us-withdraws-from-65-international-organizations-un-agencies/"}],
    checked:"2026-11"},

   {id:"comparative-regionalism", title:"Comparative regionalism", aka:["new regionalism","regional organisations compared"], tags:["regionalism","international organisations","comparison"],
    summary:"The study of regional organisations and regional orders across the world, comparing their designs, norms and effects without treating the EU as the model.",
    levels:{
     starter:[
      "Regions organise in very different ways. The EU has courts and majority votes; ASEAN decides by consensus; the AU can suspend members after coups; the SCO stresses sovereignty and non-interference.",
      "For a long time, scholars judged every region by how close it came to Europe. **Comparative regionalism** instead asks why each region chose its design, and whether it achieves what its members want.",
      {key:"Different regional designs usually reflect different histories, power structures and ideas, not failures to copy the EU."}
     ],
     builder:[
      "**Old and new regionalism.** Post-war “old” regionalism was state-led and often inward-looking; “new regionalism” after the Cold War was more open, with markets and civil society involved (Hettne and Söderbaum).",
      "**Regionalism versus regionalisation.** State-led projects versus market- and society-driven integration; East Asia was long regionalised before it was institutionalised.",
      "**Key works.** Acharya and Johnston (eds.), *Crafting Cooperation* (2007); Katzenstein, *A World of Regions* (2005); Börzel and Risse (eds.), *The Oxford Handbook of Comparative Regionalism* (2016).",
      "**Dimensions to compare.** Decision rules (consensus, majority), enforcement (courts, suspensions), membership, scope, and founding norms (non-interference, non-indifference, democracy)."
     ],
     pro:[
      "**Explanations.** Neofunctionalism and liberal intergovernmentalism for the EU; constructivist accounts of norm-building and localisation for ASEAN (Acharya); hegemonic and power-based accounts; and accounts of regime type, such as “authoritarian regionalism” for bodies like the SCO.",
      "**Diffusion.** Regional bodies borrow and adapt from each other, for example clauses against unconstitutional changes of government in African and American texts.",
      "**Critiques.** Some argue the field still uses European concepts as the default; others that comparison across very different bodies risks comparing apples and oranges. Careful case selection helps (see {{case-selection}}).",
      {tip:"Compare paper and practice separately: strong treaty texts can sit alongside cautious behaviour, and weak texts alongside effective habits."}
     ]
    },
    related:["regional-organizations","shanghai-cooperation-organisation","ernst-haas","global-ir","amitav-acharya"],
    read:[{book:"ospol", where:"Chapter 15, section 15.4 “How Do Regional IGOs Contribute to Global Governance?”"}],
    sources:[{t:"Charter of the Association of Southeast Asian Nations (2007), text via the University of Oslo treaty library", url:"https://jus.uio.no/english/services/library/treaties/14/14-03/asean_charter.html"},{t:"Constitutive Act of the African Union (2000), text via the Centre for Human Rights, University of Pretoria", url:"https://www.chr.up.ac.za/images/centrenews/2022/Constitutive_Act_of_the_African_Union.pdf"},{t:"Inter-American Democratic Charter (2001), text via the University of Minnesota Human Rights Library", url:"https://hrlibrary.umn.edu/oasinstr/demcharter-2001.html"}],
    checked:"2026-11"},

   {id:"shanghai-cooperation-organisation", title:"Shanghai Cooperation Organisation (SCO)", aka:["SCO","Shanghai Five","Shanghai Spirit"], tags:["regionalism","Eurasia","security"],
    summary:"A Eurasian organisation founded in 2001, with ten members as of 2026, built on consensus and non-interference, and read very differently by its members and its critics.",
    levels:{
     starter:[
      "The **Shanghai Cooperation Organisation** began as the “Shanghai Five”, border talks in 1996 between China, Russia, Kazakhstan, Kyrgyzstan and Tajikistan. In June 2001 they and Uzbekistan founded the SCO.",
      "It has grown: India and Pakistan joined in 2017, Iran in 2023 and Belarus in 2024, giving it ten members. It works by consensus and emphasises sovereignty and non-interference, which it calls part of the “Shanghai Spirit”.",
      {key:"The SCO is one of the largest regional bodies by population, but how much it does, and what it is for, are debated."}
     ],
     builder:[
      "**Institutions.** A secretariat in Beijing and a Regional Anti-Terrorist Structure (RATS) in Tashkent; annual summits of heads of state; a charter adopted in 2002.",
      "**Agenda.** Security (terrorism, “separatism” and “extremism”, the three evils in SCO documents), border confidence-building, economic and connectivity cooperation, and culture.",
      "**Partners.** Observers and dialogue partners from South Asia, the Middle East and beyond have multiplied, extending its reach well beyond Central Asia."
     ],
     pro:[
      "**Competing readings.** Members present the SCO as a model of non-Western cooperation based on equality and respect for different political systems. Some Western scholars, such as Thomas Ambrosio (*Europe-Asia Studies*, 2008), argue that it promotes authoritarian norms that protect incumbent governments, a pattern others call authoritarian regionalism. Others see a forum for China and Russia to manage their interests in Central Asia, or argue that enlargement, including the India–Pakistan rivalry, has made consensus harder.",
      "**Comparisons.** Set beside ASEAN, it shares consensus and non-interference but has a stronger security focus; set beside the EU, it has no supranational bodies.",
      {warn:"Describe the SCO neutrally: attribute evaluative labels (“authoritarian club”, “alternative order”) to the people who use them."}
     ]
    },
    related:["comparative-regionalism","regional-organizations","contested-multilateralism","brics","regional-security-complex-theory"],
    sources:[{t:"SCO Secretariat, official website (about the SCO)", url:"https://eng.sectsco.org/20170109/192193.html"}],
    checked:"2026-11"},

   {id:"contested-multilateralism", title:"Contested multilateralism", aka:["regime shifting","competitive regime creation","forum shopping","regime complex"], tags:["international organisations","global governance","theory"],
    summary:"Morse and Keohane’s concept (2014) for how dissatisfied states challenge existing institutions by shifting issues to other forums or creating rival ones.",
    levels:{
     starter:[
      "When a group of students is unhappy with a club, they can complain, leave, take their issue to another club, or start a new club with different rules.",
      "States do the same with international organisations. Julia Morse and Robert Keohane called this **contested multilateralism**: using multilateral institutions to challenge other institutions.",
      {key:"Dissatisfied states rarely just leave: they shift the issue to another forum or build a rival one."}
     ],
     builder:[
      "**Two forms.** Regime shifting moves an issue to a different existing institution; competitive regime creation builds a new one with different rules.",
      "**Examples.** Intellectual property moved from WIPO into the WTO’s TRIPS agreement (1994) and later partly back towards WHO and other bodies (Helfer, 2004). The Asian Infrastructure Investment Bank (opened 2016) and the BRICS New Development Bank are often read as competitive creation after slow voice reform at the IMF and World Bank; their founders present them as complements.",
      "**Related ideas.** Forum shopping (choosing the forum most likely to favour you), regime complexes (overlapping institutions on one issue; Raustiala and Victor, 2004; Alter and Meunier, 2009) and orchestration (Abbott, Genschel, Snidal and Zangl, 2015)."
     ],
     pro:[
      "**When does it happen?** Morse and Keohane argue that dissatisfaction combined with outside options (other forums, the resources to build new ones) makes contestation likely, and that the trend grew with the rise of new powers and non-state actors.",
      "**Normative debate.** Some see contestation as fragmentation that weakens global rules; others as healthy competition that pushes old institutions to reform. Both can be true of different cases.",
      "**Asia-Pacific cases.** The Mekong River Commission and the China-led Lancang–Mekong Cooperation (2016); the Chiang Mai Initiative after the 1997–98 crisis; the WTO appeal workaround (MPIA, 2020) after the Appellate Body stopped working in 2019.",
      {tip:"To test a contested-multilateralism claim, show dissatisfaction with the old body, an outside option, and evidence that the new move was meant to change the old body’s rules or influence."}
     ]
    },
    related:["io-legitimacy","bretton-woods-governance","theories-of-international-organization","robert-keohane","clubs-and-minilateralism","global-governance-concept"],
    sources:[{t:"Morse & Keohane, “Contested multilateralism”, Review of International Organizations 9(4), 2014, pp. 385–412 (RePEc record)", url:"https://econpapers.repec.org/RePEc:spr:revint:v:9:y:2014:i:4:p:385-412"}],
    checked:"2026-11"},

   {id:"io-legitimacy", title:"Legitimacy, effectiveness and exit in IOs", aka:["IO legitimacy","legitimation","withdrawal from IOs"], tags:["international organisations","legitimacy","global governance"],
    summary:"How scholars define and study the legitimacy of IOs (input, throughput, output; sociological and normative), judge their effectiveness, and explain withdrawal and funding cuts.",
    levels:{
     starter:[
      "International organisations have no police and no taxes. They depend on **legitimacy**: the belief that they have the right to make rules that ought to be followed.",
      "People judge legitimacy in three ways: **input** (who has a voice), **throughput** (how decisions are made) and **output** (what the organisation delivers).",
      "When members lose faith, they can protest, cut funding or leave. Leaving IOs is more common than many think.",
      {key:"Legitimacy is what lets an IO without armies get things done; when it fades, exit and contestation follow."}
     ],
     builder:[
      "**Key works.** Hurd, “Legitimacy and Authority in International Politics” (1999); Buchanan and Keohane, “The Legitimacy of Global Governance Institutions” (2006), on normative standards; Scharpf (1999) on input and output, extended by Schmidt (2013) to throughput; Tallberg and Zürn (2019) on legitimation.",
      "**Effectiveness.** Distinguish goal attainment, behavioural change and problem-solving; beware selection effects and build counterfactuals (Miles, Underdal and colleagues, 2002; Gutner and Thompson, 2010).",
      "**Exit.** Hirschman’s exit, voice and loyalty (1970); von Borzyskowski and Vabulas (2019) on withdrawals from 1945 to 2014; Gray (2018) on IOs that survive as “zombies”."
     ],
     pro:[
      "**Cases, 2020–26.** The UK left the EU (2020); Russia was expelled from the Council of Europe (2022); Mali, Burkina Faso and Niger left ECOWAS (2025); the US completed its withdrawal from WHO (22 January 2026), announced withdrawal from 66 organisations and bodies (7 January 2026), and is due to leave UNESCO at the end of 2026. Governments that leave cite costs, sovereignty and policy disagreements; those that stay warn of lost influence and capacity.",
      "**Legitimation struggles.** IOs respond to challenges with reforms, new transparency rules, outreach and performance reports; challengers use speeches, ratings and protests. Studying these struggles is a growing research agenda.",
      "**Evaluating an IO.** Combine mandate, design, authority, performance, legitimacy and contestation into a conditional verdict.",
      {tip:"Keep the analytical question (why did this exit happen, and with what effects?) separate from the normative one (should it have happened?), and attribute every judgement."}
     ]
    },
    related:["contested-multilateralism","un-funding","un-security-council-reform","theories-of-international-organization","multilateralism-debates"],
    sources:[{t:"Tallberg & Zürn, “The legitimacy and legitimation of international organizations”, Review of International Organizations 14, 2019 (DOI)", url:"https://doi.org/10.1007/s11558-018-9338-z"},{t:"von Borzyskowski & Vabulas, “Hello, goodbye: When do states withdraw from international organizations?”, Review of International Organizations 14(2), 2019 (author copy)", url:"https://discovery-pp.ucl.ac.uk/10081834/1/Borzyskowski%20-Vabulas_IO-Withdrawal.pdf"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"functionalism-io", term:"Functionalism (IR)", def:"David Mitrany’s theory that peace can be built through practical international agencies, each organised around a task such as health or transport, rather than through world government.", codex:"david-mitrany"},
   {id:"ramification", term:"Ramification", def:"Mitrany’s term for the spread of successful cooperation from one functional field to others.", codex:"david-mitrany"},
   {id:"spillover", term:"Spillover", def:"In neofunctionalism, the process by which integration in one sector creates pressure for integration in linked sectors, pushed by interest groups and supranational officials.", codex:"ernst-haas"},
   {id:"liberal-intergovernmentalism", term:"Liberal intergovernmentalism", def:"Andrew Moravcsik’s theory that European integration results from bargains among governments driven by domestic economic interests, with pooling and delegation used to make deals credible.", codex:"theories-of-international-organization"},
   {id:"rational-design", term:"Rational design", def:"The view that states deliberately choose an institution’s membership, scope, centralisation, control and flexibility to solve particular cooperation problems.", codex:"rational-design"},
   {id:"flexibility-provisions", term:"Flexibility provisions", def:"Clauses that let states adapt, pause or leave commitments, such as escape clauses, safeguards, reservations and review clauses.", codex:"rational-design"},
   {id:"principal-agent-theory", term:"Principal–agent theory", def:"An approach that treats member states as principals who delegate tasks to an IO as their agent, and studies how they control it.", codex:"principal-agent-io"},
   {id:"delegation", term:"Delegation", def:"A conditional grant of authority from principals (such as states) to an agent (such as an IO) to act on their behalf.", codex:"principal-agent-io"},
   {id:"agency-slack", term:"Agency slack", def:"Behaviour by an agent that its principals did not want: shirking (doing less) or slippage (pursuing its own preferences).", codex:"principal-agent-io"},
   {id:"collective-principal", term:"Collective principal", def:"A group of principals, such as an IO’s member states, who must agree among themselves before they can instruct or discipline the agent.", codex:"principal-agent-io"},
   {id:"bureaucratic-authority", term:"Bureaucratic authority", def:"The authority IOs draw from being impersonal, rule-based and expert organisations, which Barnett and Finnemore see as the basis of their autonomy.", codex:"ios-as-bureaucracies"},
   {id:"moral-authority", term:"Moral authority (IOs)", def:"An IO’s claim to defend shared values or the interests of people without a voice, above narrow national interests.", codex:"ios-as-bureaucracies"},
   {id:"expert-authority", term:"Expert authority", def:"Authority based on specialised knowledge, data and professional training, such as an IO’s economists or epidemiologists.", codex:"ios-as-bureaucracies"},
   {id:"io-pathologies", term:"IO pathologies", def:"Dysfunctional behaviour that arises from normal bureaucratic features, such as rules becoming ends in themselves or one template applied everywhere (Barnett and Finnemore).", codex:"ios-as-bureaucracies"},
   {id:"secretariat", term:"Secretariat", def:"The permanent staff of an international organisation, headed by its executive head, which runs its day-to-day work.", codex:"ios-as-bureaucracies"},
   {id:"imf-quota", term:"IMF quota", def:"A member’s share in the IMF, broadly based on its economic size, which sets what it pays in, how much it can borrow and how many votes it has.", codex:"bretton-woods-governance"},
   {id:"weighted-voting", term:"Weighted voting", def:"A voting rule in which members have different numbers of votes, usually according to their financial contribution, as in the IMF and World Bank.", codex:"bretton-woods-governance"},
   {id:"mission-creep", term:"Mission creep", def:"The gradual expansion of an organisation’s tasks beyond its original mandate, seen by critics as overreach and by supporters as adaptation.", codex:"ios-as-bureaucracies"},
   {id:"permanent-five", term:"Permanent five (P5)", def:"The five permanent members of the UN Security Council, each with a veto: China, France, Russia, the United Kingdom and the United States.", codex:"un-security-council-reform"},
   {id:"penholder", term:"Penholder", def:"The Security Council member that drafts resolutions and leads negotiations on a particular country or theme.", codex:"un-security-council-reform"},
   {id:"intergovernmental-negotiations", term:"Intergovernmental negotiations (IGN)", def:"The General Assembly process, running since 2009, in which UN members discuss Security Council reform.", codex:"un-security-council-reform"},
   {id:"g4-reform-group", term:"G4 (UN reform)", def:"Brazil, Germany, India and Japan, which support one another’s bids for permanent Security Council seats and an enlarged Council.", codex:"un-security-council-reform"},
   {id:"uniting-for-consensus", term:"Uniting for Consensus", def:"A group of states, including Italy, Pakistan, Argentina, Mexico and the Republic of Korea, that opposes new permanent Security Council seats and proposes more elected ones.", codex:"un-security-council-reform"},
   {id:"ezulwini-consensus", term:"Ezulwini Consensus", def:"The African Union’s 2005 common position on Security Council reform: two permanent seats for Africa with all prerogatives, including the veto while it exists, and more elected seats.", codex:"un-security-council-reform"},
   {id:"straw-poll", term:"Straw poll", def:"An informal Security Council vote, used since 1981 in choosing the Secretary-General, in which members encourage or discourage each candidate.", codex:"un-secretary-general-selection"},
   {id:"assessed-contributions", term:"Assessed contributions", def:"Payments that every member of an IO is legally obliged to make, according to a scale set by its members, such as the UN regular budget.", codex:"un-funding"},
   {id:"voluntary-contributions", term:"Voluntary contributions", def:"Money that states and other donors choose to give to an IO, in amounts they decide, beyond what they must pay.", codex:"un-funding"},
   {id:"earmarking", term:"Earmarking", def:"Tying voluntary contributions to particular projects, countries or themes chosen by the donor, rather than leaving the IO to decide.", codex:"un-funding"},
   {id:"un80-initiative", term:"UN80 initiative", def:"A reform and cost-cutting effort launched by the UN Secretary-General in March 2025, covering efficiency, mandate review and structural change.", codex:"un-funding"},
   {id:"new-regionalism", term:"New regionalism", def:"The wave of regional cooperation after the Cold War, more open to world markets and involving business and civil society, as opposed to the state-led “old” regionalism of earlier decades.", codex:"comparative-regionalism"},
   {id:"pooled-sovereignty", term:"Pooled sovereignty", def:"Sovereignty shared among states that take some decisions together, often by majority, or hand them to common institutions, as in the EU.", codex:"comparative-regionalism"},
   {id:"asean-centrality", term:"ASEAN centrality", def:"The principle, written into the ASEAN Charter, that ASEAN rather than any outside power should be at the centre of the wider region’s forums.", codex:"comparative-regionalism"},
   {id:"non-indifference", term:"Non-indifference", def:"The African Union’s principle that members cannot ignore grave abuses in other members, replacing the OAU’s strict non-interference.", codex:"comparative-regionalism"},
   {id:"democracy-clause", term:"Democracy clause", def:"A rule in a regional organisation’s founding documents allowing it to suspend a member whose democratic order is interrupted, as in the OAS’s Inter-American Democratic Charter.", codex:"comparative-regionalism"},
   {id:"io-legitimacy", term:"Legitimacy (of IOs)", def:"The belief that an international organisation has the right to rule and that its rules ought to be followed.", codex:"io-legitimacy"},
   {id:"input-output-legitimacy", term:"Input, throughput and output legitimacy", def:"Three sources of legitimacy: who has a voice (input), how decisions are made (throughput) and what is delivered (output).", codex:"io-legitimacy"},
   {id:"io-withdrawal", term:"Withdrawal (from an IO)", def:"A state’s formal exit from an international organisation, usually under a procedure in the founding treaty.", codex:"io-legitimacy"},
   {id:"contested-multilateralism", term:"Contested multilateralism", def:"Morse and Keohane’s term for states and coalitions using multilateral institutions to challenge existing ones, by regime shifting or competitive regime creation.", codex:"contested-multilateralism"},
   {id:"regime-shifting", term:"Regime shifting", def:"Moving an issue from one international institution to another existing one where the mover expects better results.", codex:"contested-multilateralism"},
   {id:"competitive-regime-creation", term:"Competitive regime creation", def:"Building a new international institution to challenge the rules or practices of an existing one.", codex:"contested-multilateralism"},
   {id:"forum-shopping", term:"Forum shopping", def:"Choosing, case by case, the international forum most likely to give you the result you want.", codex:"contested-multilateralism"},
   {id:"regime-complex", term:"Regime complex", def:"A set of overlapping, partly conflicting institutions that govern one issue area without a single centre.", codex:"contested-multilateralism"},
   {id:"orchestration", term:"Orchestration", def:"An IO enlisting and steering other actors, such as NGOs, firms or other agencies, towards shared goals instead of acting directly.", codex:"contested-multilateralism"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"e4u9-q01", lesson:"e4u9-l1", level:1, q:"What is the title of David Mitrany’s 1943 work that founded functionalism?", options:[
     {t:"*A Working Peace System*", ok:true, why:"Right. Written during the Second World War, it argued for peace built task by task through functional agencies."},
     {t:"*The Uniting of Europe*", why:"That was Ernst Haas’s 1958 study, which founded neofunctionalism."},
     {t:"*After Hegemony*", why:"That was Robert Keohane’s 1984 book on institutions after US dominance."},
     {t:"*Rules for the World*", why:"That was Barnett and Finnemore’s 2004 book on IOs as bureaucracies."}]},
   {id:"e4u9-q02", lesson:"e4u9-l1", level:2, q:"Which statement best captures how Haas’s neofunctionalism differed from Mitrany’s functionalism?", options:[
     {t:"Haas argued that integration is driven by self-interested political actors, not only by technical experts", ok:true, why:"Yes. Haas added interest groups, parties and supranational officials as the engines of spillover."},
     {t:"Haas rejected any idea that cooperation could spread from one sector to another", why:"The opposite: spillover between sectors is the core of his theory."},
     {t:"Haas favoured world government over regional integration", why:"Haas studied regional integration, especially in Europe; he did not advocate world government."},
     {t:"Haas believed only great powers could create international organisations", why:"That is closer to some realist views, not neofunctionalism."}]},
   {id:"e4u9-q03", lesson:"e4u9-l1", level:1, q:"Which is **not** one of the five design dimensions in Koremenos, Lipson and Snidal’s rational design framework?", options:[
     {t:"Ideology", ok:true, why:"Right. The five are membership, scope, centralisation, control and flexibility; ideology is not one of them."},
     {t:"Membership", why:"Membership (who can join) is one of the five."},
     {t:"Centralisation", why:"Centralisation (whether a central body gathers information, decides or enforces) is one of the five."},
     {t:"Flexibility", why:"Flexibility (whether rules can be adapted or escaped) is one of the five."}]},
   {id:"e4u9-q04", lesson:"e4u9-l1", level:2, q:"In the 1980s a group of states created a commission to share scientific data on a fish stock. Today the commission is useful for data sharing, so a student concludes “states created it to share data”. What is the main weakness of this reasoning?", options:[
     {t:"It reads the founders’ intentions from a current effect without checking the historical record", ok:true, why:"Right. This is the functionalist fallacy Wendt and others warned about; the negotiating record would show the actual purpose."},
     {t:"Commissions can never share data", why:"They can and do; the problem is the inference about intentions."},
     {t:"Rational design theory forbids explaining IOs by their functions", why:"Rational design does explain IOs by the problems they solve; the weakness is assuming without evidence."},
     {t:"Only realists may study fisheries", why:"Any theory can be applied; this is not the issue."}]},
   {id:"e4u9-q05", lesson:"e4u9-l1", level:2, q:"In principal–agent theory, what is “slippage”?", options:[
     {t:"An agent moving policy towards its own preferences rather than its principals’", ok:true, why:"Right. Slippage and shirking are the two forms of agency slack."},
     {t:"An agent putting in less effort than agreed", why:"That is shirking, the other form of agency slack."},
     {t:"Principals cutting an agent’s budget", why:"That is a control mechanism, not a form of slack."},
     {t:"States leaving an organisation", why:"That is withdrawal, a different concept."}]},
   {id:"e4u9-q06", lesson:"e4u9-l1", level:3, q:"An agency’s members are deeply split over a controversial programme. Its secretariat continues the programme, and members cannot agree on a resolution to stop it. Which concept best explains the secretariat’s freedom?", options:[
     {t:"The collective principal problem", ok:true, why:"Right. With many principals who disagree, no instruction or sanction can be agreed, so the agent gains room to act."},
     {t:"Ramification", why:"Ramification is Mitrany’s idea of cooperation spreading between fields, not about controlling staff."},
     {t:"Weighted voting", why:"Voting rules matter, but the key is that divided principals cannot act together."},
     {t:"Functional spillover", why:"Spillover concerns integration spreading across sectors, not agency autonomy."}]},
   {id:"e4u9-q07", lesson:"e4u9-l1", level:3, q:"Negotiators expect large shocks in a commodity market but cannot predict when. According to rational design, which feature are they most likely to include in a new agreement?", options:[
     {t:"Safeguard or escape clauses that let members suspend commitments temporarily", ok:true, why:"Right. Uncertainty about the state of the world predicts more flexibility."},
     {t:"A ban on any future amendment", why:"Rigidity is what uncertainty argues against."},
     {t:"Membership limited to one state", why:"An agreement needs several members; uncertainty does not predict this."},
     {t:"A permanent veto for the smallest member", why:"Nothing in the uncertainty argument predicts this control rule."}]},
   {id:"e4u9-q08", lesson:"e4u9-l1", level:2, q:"Which theory of European integration would explain the 2016 UK referendum and its exit in 2020 by the rise of identity politics and mass public debate about integration?", options:[
     {t:"Postfunctionalism (Hooghe and Marks)", ok:true, why:"Right. Their “constraining dissensus” describes how politicised identity can block or reverse integration."},
     {t:"Mitrany’s functionalism", why:"Functionalism expected loyalties to shift towards agencies; it does not explain a populist exit."},
     {t:"Rational design", why:"Rational design explains institutional features, not referendum politics."},
     {t:"Neofunctionalism", why:"Neofunctionalism predicts spreading integration; Haas himself struggled to explain reversals."}]},
   {id:"e4u9-q09", lesson:"e4u9-l1", level:1, q:"Which is usually described as the oldest international organisation still working today?", options:[
     {t:"The Central Commission for the Navigation of the Rhine (1815)", ok:true, why:"Right. Created by the Congress of Vienna, it still meets in Strasbourg."},
     {t:"The United Nations (1945)", why:"The UN is much younger than several technical bodies."},
     {t:"The World Health Organization (1948)", why:"WHO was created after the Second World War."},
     {t:"The League of Nations (1920)", why:"The League was dissolved in 1946."}]},
   /* Lesson 2 */
   {id:"e4u9-q10", lesson:"e4u9-l2", level:1, q:"In which book did Barnett and Finnemore fully develop their view of IOs as bureaucracies?", options:[
     {t:"*Rules for the World* (2004)", ok:true, why:"Right. It built on their 1999 article in *International Organization*."},
     {t:"*The Anarchical Society* (1977)", why:"That is Hedley Bull’s classic of the English School."},
     {t:"*Hypocrisy Trap* (2008)", why:"That is Catherine Weaver’s study of the World Bank, which builds on their ideas."},
     {t:"*Capital Ideas* (2010)", why:"That is Jeffrey Chwieroth’s study of the IMF."}]},
   {id:"e4u9-q11", lesson:"e4u9-l2", level:2, q:"Which list gives the four sources of IO authority in Barnett and Finnemore’s account?", options:[
     {t:"Rational-legal, delegated, moral and expert", ok:true, why:"Right. Each can give an IO power beyond what states explicitly ordered."},
     {t:"Military, economic, cultural and religious", why:"These are kinds of national power resources, not their sources of IO authority."},
     {t:"Input, throughput, output and outcome", why:"These relate to legitimacy, a different scheme."},
     {t:"Coercion, inducement, agenda-setting and attraction", why:"This is Nye’s spectrum of power behaviour."}]},
   {id:"e4u9-q12", lesson:"e4u9-l2", level:3, q:"A health agency adds a country to a list of places with an “emergency”. Airlines cancel flights and investors pull out, though no state was legally ordered to act. What does this illustrate best?", options:[
     {t:"The IO’s power to classify", ok:true, why:"Right. A label changes others’ expectations and behaviour, one of the three mechanisms of IO power."},
     {t:"Weighted voting", why:"No vote among states is involved here."},
     {t:"Agency slack", why:"Nothing suggests the agency acted against its members’ wishes."},
     {t:"Competitive regime creation", why:"No new institution is being created."}]},
   {id:"e4u9-q13", lesson:"e4u9-l2", level:2, q:"Which pathology describes small departures from rules becoming routine until they create serious risk?", options:[
     {t:"Normalisation of deviance", ok:true, why:"Right. Exceptions accumulate until they are standard practice."},
     {t:"Universalism", why:"Universalism means applying one template everywhere."},
     {t:"Insulation", why:"Insulation means having no feedback from the outside world."},
     {t:"Cultural contestation", why:"That is about clashing sub-cultures inside the organisation."}]},
   {id:"e4u9-q14", lesson:"e4u9-l2", level:1, q:"By informal convention, what have the nationalities of the heads of the IMF and the World Bank been?", options:[
     {t:"A European at the IMF and a US national at the World Bank", ok:true, why:"Right. The convention dates from the 1940s and is widely criticised."},
     {t:"A US national at the IMF and a European at the World Bank", why:"It is the other way round."},
     {t:"Always from the largest borrower country", why:"No such rule exists."},
     {t:"Rotating among all regions every five years", why:"There is no formal rotation; the convention has favoured Europe and the US."}]},
   {id:"e4u9-q15", lesson:"e4u9-l2", level:3, q:"Priya argues that the IMF’s strict conditions in Asia in 1997–98 simply reflected what its largest shareholders wanted. Which response is most in the spirit of Barnett and Finnemore?", options:[
     {t:"Staff economists’ shared ideas and professional culture also shaped what conditions looked necessary", ok:true, why:"Right. Constructivists look at expertise and culture inside the IO, not only at shareholder control."},
     {t:"The IMF had no staff in 1997", why:"Factually wrong, and beside the point."},
     {t:"Shareholders have no influence on the IMF", why:"Too strong; constructivists accept state influence but add the bureaucracy’s own role."},
     {t:"The conditions were chosen by the borrowers alone", why:"Conditions were negotiated with the Fund; this does not engage the argument."}]},
   {id:"e4u9-q16", lesson:"e4u9-l2", level:2, q:"Why was the 50% IMF quota increase approved in December 2023 still not in effect in early November 2026?", options:[
     {t:"Members holding 85% of quotas, including the United States, had not yet consented", ok:true, why:"Right. Without US consent the 85% threshold cannot be reached, and Congress had not authorised it."},
     {t:"The Managing Director vetoed it", why:"The Managing Director has no veto over quota reform."},
     {t:"The Security Council blocked it", why:"The Security Council has no role in IMF quotas."},
     {t:"It needed every member’s unanimous consent", why:"It needs consent from members with 85% of quotas, not unanimity."}]},
   {id:"e4u9-q17", lesson:"e4u9-l2", level:2, q:"What did Catherine Weaver mean by the World Bank’s “hypocrisy trap”?", options:[
     {t:"Contradictory demands from shareholders and a staff culture rewarding lending create a lasting gap between what the Bank says and does", ok:true, why:"Right. She calls it organised hypocrisy, built into its situation."},
     {t:"The Bank secretly refuses to lend to anyone", why:"The Bank lends large sums; the gap is between stated goals and practice."},
     {t:"Borrowers lie about their economies", why:"Her argument is about the Bank itself, not borrowers."},
     {t:"The Bank was created by mistake", why:"Not her claim."}]},
   {id:"e4u9-q18", lesson:"e4u9-l2", level:3, q:"An agency judges its success only by indicators its own staff designed and dismisses outside evaluations as uninformed. Which pathology is this, and what reform fits it best?", options:[
     {t:"Insulation; create independent evaluation and channels for outside feedback", ok:true, why:"Right. Insulation means no feedback from the environment; independent evaluation reopens that channel."},
     {t:"Universalism; apply one template to all countries", why:"That would worsen a different pathology."},
     {t:"Cultural contestation; merge all departments", why:"The problem described is lack of outside feedback, not clashing internal cultures."},
     {t:"Mission creep; double the mandate", why:"Expanding the mandate does nothing about feedback."}]},
   /* Lesson 3 */
   {id:"e4u9-q19", lesson:"e4u9-l3", level:1, q:"Under Article 97 of the UN Charter, how is the Secretary-General appointed?", options:[
     {t:"By the General Assembly on the recommendation of the Security Council", ok:true, why:"Right. The Council’s recommendation means any permanent member can block a candidate."},
     {t:"By the Security Council alone", why:"The Council recommends; the Assembly appoints."},
     {t:"By a vote of all UN staff", why:"Staff have no vote in the selection."},
     {t:"By the International Court of Justice", why:"The Court has no role in the selection."}]},
   {id:"e4u9-q20", lesson:"e4u9-l3", level:2, q:"What is a “penholder” in the Security Council?", options:[
     {t:"The member that drafts resolutions and leads negotiations on a particular file", ok:true, why:"Right. France, the UK and the US hold most pens, sometimes with an elected co-penholder."},
     {t:"The member holding the monthly presidency", why:"The presidency rotates monthly; the pen on a file is a different role."},
     {t:"The Secretary-General’s chief of staff", why:"Penholders are Council members, not Secretariat officials."},
     {t:"The member that signs treaties for the UN", why:"No such role exists."}]},
   {id:"e4u9-q21", lesson:"e4u9-l3", level:2, q:"Which group opposes new permanent Security Council seats and prefers more elected seats, some with longer terms?", options:[
     {t:"Uniting for Consensus", ok:true, why:"Right. Members include Italy, Pakistan, Argentina, Mexico and the Republic of Korea."},
     {t:"The G4", why:"The G4 seek permanent seats for Brazil, Germany, India and Japan."},
     {t:"The African Union", why:"The AU’s Ezulwini Consensus asks for two permanent African seats."},
     {t:"The permanent five", why:"The P5 are not a reform group with this platform."}]},
   {id:"e4u9-q22", lesson:"e4u9-l3", level:3, q:"A commentator says Security Council reform will pass once two-thirds of the General Assembly votes for a model. What is missing from this account?", options:[
     {t:"Ratification by two-thirds of members, including all five permanent members, is also required", ok:true, why:"Right. Article 108 requires both adoption and ratification, giving each permanent member a veto over reform."},
     {t:"The Secretary-General must also sign it", why:"The Secretary-General has no such role."},
     {t:"The ICJ must approve it", why:"The Court plays no part in Charter amendments."},
     {t:"Nothing: an Assembly vote is enough", why:"An Assembly vote alone does not amend the Charter."}]},
   {id:"e4u9-q23", lesson:"e4u9-l3", level:2, q:"In Secretary-General selection, why do later straw polls use colour-coded ballots?", options:[
     {t:"To show which “discourage” votes come from permanent members, who could veto", ok:true, why:"Right. A discourage from a permanent member signals a likely veto."},
     {t:"To let the General Assembly vote at the same time", why:"Straw polls are held in the Council only."},
     {t:"To separate candidates by region", why:"The colours identify voters, not candidates’ regions."},
     {t:"Because the Charter requires it", why:"Straw polls are an informal practice, not a Charter rule."}]},
   {id:"e4u9-q24", lesson:"e4u9-l3", level:1, q:"Which kind of funding is a legal obligation for every UN member?", options:[
     {t:"Assessed contributions", ok:true, why:"Right. They follow the scale set by the General Assembly."},
     {t:"Voluntary contributions", why:"These are given by choice."},
     {t:"Earmarked donations", why:"Earmarked money is voluntary, tied to donor-chosen purposes."},
     {t:"Private philanthropy", why:"Private gifts are voluntary and not paid by members."}]},
   {id:"e4u9-q25", lesson:"e4u9-l3", level:3, q:"An agency finds that its emergency budget is well funded but its core research unit is starving, though members approved both. Which explanation is most likely?", options:[
     {t:"Donors earmark their voluntary money for emergencies they choose, leaving unearmarked core work underfunded", ok:true, why:"Right. Earmarking shifts priorities towards what donors want to fund."},
     {t:"Assessed contributions can only be spent on research", why:"Assessed funds are not restricted this way."},
     {t:"The Security Council has frozen research", why:"The Council does not manage agency research budgets."},
     {t:"The research unit is funded by weighted votes", why:"Weighted voting is a decision rule, not a source of money."}]},
   {id:"e4u9-q26", lesson:"e4u9-l3", level:2, q:"What did the General Assembly approve for the UN regular budget in December 2025?", options:[
     {t:"About US$3.45 billion for 2026, following a revised proposal with deep cuts to resources and posts", ok:true, why:"Right. UN News reported that it largely reflected a proposal with about 15% less in resources and nearly 19% fewer staff."},
     {t:"A doubling of the budget to fund new peace operations", why:"The opposite: 2026 brought deep cuts."},
     {t:"Abolition of assessed contributions", why:"Assessed contributions remain the basis of the regular budget."},
     {t:"A budget paid entirely by the five permanent members", why:"All members pay according to the scale of assessments."}]},
   {id:"e4u9-q27", lesson:"e4u9-l3", level:1, q:"Since a 2022 General Assembly resolution, what happens after a permanent member casts a veto?", options:[
     {t:"The General Assembly meets to debate it, and the state that vetoed is invited to explain", ok:true, why:"Right. This is the “veto initiative”, resolution 76/262 of April 2022."},
     {t:"The veto is automatically overturned", why:"Nothing overturns a veto; the debate adds accountability only."},
     {t:"The state loses its permanent seat", why:"No such rule exists."},
     {t:"The Secretary-General decides the matter", why:"The Secretary-General has no power to decide in place of the Council."}]},
   /* Lesson 4 */
   {id:"e4u9-q28", lesson:"e4u9-l4", level:1, q:"Which court rulings established that European Community law can give rights directly to individuals and takes precedence over conflicting national law?", options:[
     {t:"*Van Gend en Loos* (1963) and *Costa v ENEL* (1964)", ok:true, why:"Right. Direct effect and primacy, two foundations of EU supranationalism."},
     {t:"The *Lotus* case (1927) and *Nicaragua v United States* (1986)", why:"These are cases of the Permanent Court and the ICJ on general international law."},
     {t:"The Bangkok and Vienna Declarations (1993)", why:"These are human rights declarations, not court rulings."},
     {t:"The Maastricht and Lisbon Treaties", why:"These are treaties, not court rulings."}]},
   {id:"e4u9-q29", lesson:"e4u9-l4", level:2, q:"Under the ASEAN Charter, what is the basic rule for decision-making?", options:[
     {t:"Consultation and consensus, with an “ASEAN minus X” option for some economic commitments", ok:true, why:"Right. Article 20 sets consensus; the minus-X formula lets willing members move first in economics."},
     {t:"Qualified majority voting weighted by population", why:"That is an EU rule, not ASEAN’s."},
     {t:"Decisions by the ASEAN Secretary-General alone", why:"The Secretary-General has no such power."},
     {t:"Weighted votes according to GDP", why:"ASEAN does not weight votes."}]},
   {id:"e4u9-q30", lesson:"e4u9-l4", level:2, q:"What does “ASEAN centrality” mean?", options:[
     {t:"ASEAN, not an outside power, should be at the centre of the wider region’s forums", ok:true, why:"Right. It is written into the ASEAN Charter and underpins forums such as the East Asia Summit."},
     {t:"Jakarta is the geographical centre of Southeast Asia", why:"The term is political, not geographical."},
     {t:"ASEAN law takes precedence over national law", why:"ASEAN has no such supranational primacy."},
     {t:"All members must use one currency", why:"ASEAN has no common currency."}]},
   {id:"e4u9-q31", lesson:"e4u9-l4", level:3, q:"A military takes power in an African state. Which AU response is most consistent with its rules and practice?", options:[
     {t:"Suspension of the state from AU activities until constitutional order returns", ok:true, why:"Right. Unconstitutional changes of government lead to suspension, as several cases in the 2020s show."},
     {t:"An automatic invasion under Article 4(h)", why:"Article 4(h) concerns war crimes, genocide and crimes against humanity, needs an Assembly decision, and has never been used against a government’s will."},
     {t:"Nothing, because the AU follows strict non-interference", why:"That was the OAU’s rule; the AU moved towards non-indifference."},
     {t:"Expulsion from the United Nations", why:"The AU cannot expel anyone from the UN."}]},
   {id:"e4u9-q32", lesson:"e4u9-l4", level:1, q:"Which members joined the SCO in 2017?", options:[
     {t:"India and Pakistan", ok:true, why:"Right. Iran followed in 2023 and Belarus in 2024."},
     {t:"Japan and South Korea", why:"Neither is an SCO member."},
     {t:"Indonesia and Malaysia", why:"Neither is an SCO member."},
     {t:"Turkey and Egypt", why:"They are dialogue partners, not members."}]},
   {id:"e4u9-q33", lesson:"e4u9-l4", level:3, q:"Tomás writes that “the SCO is an authoritarian club, full stop”. How should a neutral seminar paper handle this claim?", options:[
     {t:"Attribute it (for example to scholars such as Ambrosio) and set it beside members’ own account and other readings", ok:true, why:"Right. Contested labels should be attributed and balanced with other views."},
     {t:"Repeat it as fact, since some scholars agree", why:"Agreement by some scholars does not make a contested label a fact."},
     {t:"Leave the SCO out entirely", why:"Avoiding a topic is not neutrality; describing the debate is."},
     {t:"Replace it with the members’ official view as fact", why:"That simply swaps one side for the other."}]},
   {id:"e4u9-q34", lesson:"e4u9-l4", level:2, q:"In Moravcsik’s terms, what is the difference between pooling and delegation?", options:[
     {t:"Pooling is deciding together by majority; delegation is handing powers to independent bodies", ok:true, why:"Right. EU qualified majority voting is pooling; the Commission’s agenda power and the Court are delegation."},
     {t:"Pooling is sharing money; delegation is sharing armies", why:"Neither definition matches his use of the terms."},
     {t:"Pooling happens only in ASEAN; delegation only in the AU", why:"Both concepts were developed mainly with the EU in mind."},
     {t:"They mean the same thing", why:"They are distinct ways of transferring sovereignty."}]},
   {id:"e4u9-q35", lesson:"e4u9-l4", level:2, q:"What does the OAS’s Inter-American Democratic Charter (2001) allow?", options:[
     {t:"Suspension of a member whose democratic order has been interrupted, by a two-thirds vote", ok:true, why:"Right. Honduras was suspended after its 2009 coup and readmitted in 2011."},
     {t:"Military intervention to restore democracy without any vote", why:"The Charter provides diplomatic steps and suspension, not automatic force."},
     {t:"Expulsion of any member that criticises the OAS", why:"No such rule exists."},
     {t:"A common currency for the Americas", why:"The Charter concerns democracy, not money."}]},
   {id:"e4u9-q36", lesson:"e4u9-l4", level:3, q:"East Asian trade and investment networks grew strongly for decades before formal agreements such as RCEP came into force in 2022. Which distinction does this illustrate?", options:[
     {t:"Regionalisation (market-driven integration) can run ahead of regionalism (state-led projects)", ok:true, why:"Right. East Asia was long described as highly regionalised but lightly institutionalised."},
     {t:"Pooling versus delegation", why:"That distinction concerns ways of sharing sovereignty in institutions."},
     {t:"Input versus output legitimacy", why:"That concerns how institutions are judged."},
     {t:"Regime shifting versus competitive creation", why:"That concerns contesting institutions."}]},
   /* Lesson 5 */
   {id:"e4u9-q37", lesson:"e4u9-l5", level:1, q:"Which state is the only one ever to have announced its withdrawal from the UN itself?", options:[
     {t:"Indonesia, in 1965 (it resumed cooperation in 1966)", ok:true, why:"Right. It protested at Malaysia’s election to the Security Council."},
     {t:"The United States, in 2026", why:"The US withdrew from several UN bodies and agencies in 2025–26, but not from the UN itself."},
     {t:"Russia, in 2022", why:"Russia was expelled from the Council of Europe in 2022, not the UN."},
     {t:"The United Kingdom, in 2020", why:"The UK left the EU in 2020, not the UN."}]},
   {id:"e4u9-q38", lesson:"e4u9-l5", level:2, q:"A critic says an IO’s board meets behind closed doors and publishes no minutes. Which kind of legitimacy is being questioned?", options:[
     {t:"Throughput legitimacy", ok:true, why:"Right. Throughput concerns how decisions are made: transparency, accountability and due process."},
     {t:"Input legitimacy", why:"Input concerns who has a voice, not how open the process is."},
     {t:"Output legitimacy", why:"Output concerns results."},
     {t:"Legal personality", why:"That is a legal status, not a type of legitimacy."}]},
   {id:"e4u9-q39", lesson:"e4u9-l5", level:1, q:"Who introduced the concept of “contested multilateralism” in a 2014 article?", options:[
     {t:"Julia Morse and Robert Keohane", ok:true, why:"Right, in the *Review of International Organizations*."},
     {t:"Michael Barnett and Martha Finnemore", why:"They wrote on IOs as bureaucracies."},
     {t:"Kal Raustiala and David Victor", why:"They coined the term “regime complex” (2004)."},
     {t:"Albert Hirschman", why:"He wrote *Exit, Voice, and Loyalty* (1970)."}]},
   {id:"e4u9-q40", lesson:"e4u9-l5", level:3, q:"In the 1980s, states unhappy with intellectual property rules at WIPO moved negotiations into the trade regime, producing the WTO’s TRIPS agreement. This is an example of…", options:[
     {t:"Regime shifting", ok:true, why:"Right. An issue moved to a different existing forum (Helfer, 2004)."},
     {t:"Competitive regime creation", why:"No brand-new institution was created to rival WIPO; the issue moved to the trade forum."},
     {t:"Orchestration", why:"Orchestration is an IO steering other actors, not states moving an issue."},
     {t:"Withdrawal", why:"No state left WIPO."}]},
   {id:"e4u9-q41", lesson:"e4u9-l5", level:2, q:"What did Julia Gray (2018) mean by “zombie” international organisations?", options:[
     {t:"IOs that formally continue, with meetings and staff, but do little", ok:true, why:"Right. Institutions are easier to create than to close."},
     {t:"IOs that have been formally dissolved", why:"Those are dead IOs, a different category."},
     {t:"IOs that have expanded their mandates rapidly", why:"That is closer to mission creep."},
     {t:"IOs run by former heads of state", why:"Not her meaning."}]},
   {id:"e4u9-q42", lesson:"e4u9-l5", level:3, q:"A study finds that countries in a regional disease programme still had high infection rates and concludes the programme failed. What should a careful evaluator ask first?", options:[
     {t:"What would rates have been without the programme, given that it may have targeted the hardest-hit countries?", ok:true, why:"Right. Selection effects mean you need a counterfactual comparison before judging effectiveness."},
     {t:"How many staff the programme employs", why:"Staff numbers say little about effects."},
     {t:"Whether the programme’s logo is well known", why:"Visibility is not effectiveness."},
     {t:"Whether its budget is assessed or voluntary", why:"Funding type matters for control, but it is not the first question about effects."}]},
   {id:"e4u9-q43", lesson:"e4u9-l5", level:3, q:"Ana evaluates the Mekong River Commission. Which verdict is best written for a seminar?", options:[
     {t:"“Effective as a source of shared data and science, limited in stopping disputed dams, because it has no veto and key upstream states are not members.”", ok:true, why:"Right. Conditional, specific and explained by design and membership."},
     {t:"“A useless talking shop.”", why:"Loaded and unsupported; it ignores evidence of its data role."},
     {t:"“A perfect model for every river.”", why:"Sweeping and unsupported; it ignores its known limits."},
     {t:"“Impossible to judge, so no verdict is possible.”", why:"Evaluation is hard but possible with clear criteria and evidence."}]},
   {id:"e4u9-q44", lesson:"e4u9-l5", level:2, q:"In Hirschman’s vocabulary, a member that stays in an IO but cuts its voluntary funding to press for reform is mainly using…", options:[
     {t:"Voice", ok:true, why:"Right. It stays a member and uses pressure to change the organisation."},
     {t:"Exit", why:"Exit means leaving, which the member has not done."},
     {t:"Loyalty", why:"Loyalty means staying without protest."},
     {t:"Orchestration", why:"Orchestration describes an IO steering others, not a member’s pressure."}]},
   {id:"e4u9-q45", lesson:"e4u9-l5", level:1, q:"As of November 2026, which US withdrawal had already been completed?", options:[
     {t:"Withdrawal from WHO, completed on 22 January 2026", ok:true, why:"Right. The UNESCO withdrawal announced in July 2025 takes effect only at the end of 2026."},
     {t:"Withdrawal from the United Nations itself", why:"The US remains a UN member."},
     {t:"Withdrawal from the IMF", why:"The US remains the IMF’s largest shareholder."},
     {t:"Withdrawal from the Security Council", why:"The US remains a permanent member."}]}
  ]
});
