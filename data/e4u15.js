/* International Studies · Unit 15 · International political economy: trade, money and finance */
ICA.addUnit({
  id:"e4u15", track:"e4", n:15, title:"International political economy: trade, money and finance", icon:"💱",
  blurb:"International political economy at seminar level: how scholars study power in the world economy, from Susan Strange’s structural power to hegemonic stability and the Open Economy Politics debate; the trade regime from GATT to a WTO without an appeals court, mega-regional agreements and the tariff shifts of 2025–2026; the dollar, exchange rates, the IMF and financial crises; global value chains and geoeconomics; and sovereign debt, development banks, China’s lending and the 2025 Seville conference, all told neutrally and dated.",
  goals:[
    "Explain how IPE studies power in the world economy, using Strange’s structural power, the three traditions and the hegemonic stability debate",
    "Explain comparative advantage and its winners and losers with a worked example, and describe the trade regime from GATT to the WTO’s present crisis, regional agreements and the tariff shifts of 2025–2026",
    "Describe how the international monetary system has worked since Bretton Woods, the dollar’s role and the de-dollarisation debate, the IMF’s lending and the lessons of major financial crises",
    "Analyse global value chains and the turn to economic security, export controls, sanctions and critical minerals, giving each side’s argument and evidence",
    "Explain how sovereign debt crises are handled today, how development banks are being reformed, what the evidence says about China’s lending, and what the 2025 Seville conference agreed",
    "Use the unit’s vocabulary and key works to argue an IPE question in a seminar, with evidence and a counter-argument"
  ],
  read:[
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"A short, free overview chapter. Read it first as background; the lessons go further."},
    {book:"osecon", where:"Chapters 29 “Exchange Rates and International Capital Flows”, 33 “International Trade” and 34 “Globalization and Protectionism”", note:"The economics behind the politics, in plain words and without heavy maths. Its examples are mostly from the United States."},
    {book:"ospol", where:"Chapter 16 “International Political Economy”, sections 16.1–16.6", note:"A gentle political-science companion: origins of IPE, the liberal economy, Bretton Woods, current issues."},
    {book:"wdr2020", where:"Overview", note:"For Lesson 4: the World Bank’s account of global value chains. Read it as one institution’s view."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u15-l1", title:"IPE as a field: traditions, power and hegemony", minutes:60,
   hook:{q:"In 1970 the British scholar Susan Strange published an article in *International Affairs* about a “case of mutual neglect”. Which two fields were neglecting each other?", options:["Economics and sociology","International economics and international relations","History and political theory","International law and diplomacy"], answer:1, reveal:"**International economics and international relations.** Strange argued that economists ignored power and politics, while IR scholars treated money and trade as “low politics” beneath their notice. In the turbulent 1970s, with the end of fixed exchange rates and the oil shocks, many scholars agreed, and international political economy (IPE) grew into a field of its own. This lesson looks at how that field thinks."},
   goals:[
     "Explain why IPE emerged as a field in the 1970s and what questions it asks",
     "Compare the three traditions of IPE and the idea of embedded liberalism",
     "Distinguish relational from structural power and apply Strange’s four structures",
     "Explain hegemonic stability theory and the main criticisms of it",
     "Compare Open Economy Politics with the “British school” and say what each sees and misses"
   ],
   learn:[
    {h:"From mutual neglect to a field", body:[
      {lead:"A government bans the export of a raw mineral. An economist asks what it does to prices. An IR scholar asks what it does to relations with neighbours. IPE asks both at once, and who gains power from it."},
      "The IR primer introduced [[international-political-economy|international political economy]] (IPE) and its three classic lenses (see {{international-political-economy}}). This unit takes the field to seminar level: its debates, its key works and the cases that seminars return to.",
      "IPE became a recognised field in the 1970s. The United States ended the dollar’s link to gold in 1971, oil producers quadrupled prices in 1973–74, and newly independent states demanded a [[new-international-economic-order|New International Economic Order]] (see {{third-world-project}}). Robert Keohane and Joseph Nye’s *Power and Interdependence* (1977) argued that [[complex-interdependence|complex interdependence]] made economic ties a source of power, not a sideshow.",
      "Older IR textbooks called war and diplomacy “high politics” and trade and money “low politics”. IPE rejects that ranking: a currency crisis can topple a government as surely as a coup.",
      "Its questions are simple to state and hard to answer: **who gets what** from the world economy, **who makes the rules**, and **how wealth and power turn into each other**. This lesson gives you the field’s tools. The next four apply them to trade, money, value chains and debt.",
      {tip:"In a seminar, “IPE” and “global political economy” (GPE) are often used for the same field. Some scholars prefer GPE to signal that firms, markets and social groups matter as much as states."}
    ]},
    {h:"Three traditions, and a middle way", body:[
      "Robert Gilpin’s *The Political Economy of International Relations* (1987) organised the field around three “ideologies” that remain the standard starting point:",
      {table:[
        ["Tradition","Core claim","Echo today"],
        ["[[economic-nationalism|Economic nationalism]] ([[mercantilism]])","Economic activity should serve state power; build national industry (Hamilton 1791, List 1841)","Industrial policy, “economic security” laws, export bans"],
        ["[[economic-liberalism|Liberalism]]","Markets, specialisation and open trade raise everyone’s income; rules help states cooperate","The WTO, free trade agreements, Open Economy Politics"],
        ["Marxist and critical","The world economy is structured by class and by a core–periphery hierarchy","Critiques of value chains, debt and corporate power"]
      ]},
      "The critical tradition links to what you met in Unit 2: [[world-systems-theory|world-systems]] analysis and {{robert-cox|Robert Cox}}’s claim that theory is always “for someone”. Latin American [[structuralism]], from {{raul-prebisch|Raúl Prebisch}} onwards, is its development-economics cousin.",
      {h:"Embedded liberalism"},
      "Many scholars add a middle position. Karl Polanyi’s *The Great Transformation* (1944) argued that when markets are pushed too far, societies push back to protect themselves: a [[double-movement|double movement]]. John Ruggie’s article on [[embedded-liberalism|embedded liberalism]] (*International Organization*, 1982) used this to explain the post-1945 order: open trade abroad, **embedded** in welfare states, capital controls and full-employment policies at home. Unit 1 met a similar idea as Dani Rodrik’s “Bretton Woods compromise” (see {{post-cold-war-order}}).",
      "Newer approaches cut across all three. **Feminist IPE** asks how the world economy depends on unpaid care work and on women’s low-paid work in export factories, and why austerity and trade shocks fall differently on women and men. **Ecological political economy** asks what growth does to the planet (see {{green-theory-ir}}). **Constructivist IPE** studies how economic ideas, such as the belief that capital should flow freely, spread through institutions; Unit 9 met this in Jeffrey Chwieroth’s study of the IMF (see {{ios-as-bureaucracies}}).",
      {key:"The three traditions are lenses, not teams. Most governments mix them: open in some sectors, protective in others."}
    ]},
    {h:"Power in the world economy: Susan Strange", body:[
      "{{susan-strange|Susan Strange}} gave IPE its most cited idea of power. In *States and Markets* (1988) she distinguished two kinds:",
      {list:[
        "**[[relational-power|Relational power]]**: A gets B to do something B would not otherwise do (a threat of tariffs, an offer of a loan).",
        "**[[structural-power|Structural power]]**: the power to shape the frameworks within which others, states, firms and people, have to operate. Whoever sets the structure decides which choices are even available."
      ]},
      "She identified four primary structures:",
      {fig:'<svg viewBox="0 0 340 372"><rect class="d-panel" x="10" y="8" width="320" height="56" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Structural power</text><text class="s" x="170" y="52" text-anchor="middle">shaping the frameworks others must work in</text><rect class="d-rose" x="10" y="76" width="156" height="110" rx="8" stroke-width="2"/><text x="88" y="102" text-anchor="middle">Security</text><text class="s" x="88" y="126" text-anchor="middle">Who protects whom,</text><text class="s" x="88" y="144" text-anchor="middle">on what terms</text><text class="s" x="88" y="168" text-anchor="middle">e.g. alliances, bases</text><rect class="d-gold" x="174" y="76" width="156" height="110" rx="8" stroke-width="2"/><text x="252" y="102" text-anchor="middle">Production</text><text class="s" x="252" y="126" text-anchor="middle">What is made, where,</text><text class="s" x="252" y="144" text-anchor="middle">by whom, and how</text><text class="s" x="252" y="168" text-anchor="middle">e.g. value chains</text><rect class="d-lup" x="10" y="196" width="156" height="110" rx="8" stroke-width="2"/><text x="88" y="222" text-anchor="middle">Finance</text><text class="s" x="88" y="246" text-anchor="middle">Who creates and</text><text class="s" x="88" y="264" text-anchor="middle">controls credit</text><text class="s" x="88" y="288" text-anchor="middle">e.g. the dollar, banks</text><rect class="d-sage" x="174" y="196" width="156" height="110" rx="8" stroke-width="2"/><text x="252" y="222" text-anchor="middle">Knowledge</text><text class="s" x="252" y="246" text-anchor="middle">What is known and</text><text class="s" x="252" y="264" text-anchor="middle">who owns it</text><text class="s" x="252" y="288" text-anchor="middle">e.g. patents, chip designs</text><rect class="d-soft" x="10" y="316" width="320" height="50" rx="8" stroke-width="2"/><text x="170" y="337" text-anchor="middle">Relational power</text><text class="s" x="170" y="356" text-anchor="middle">A gets B to do what B would not otherwise do</text></svg>', alt:"A panel labelled structural power, meaning shaping the frameworks others must work in, sits above four boxes: security (who protects whom, on what terms, for example alliances and bases), production (what is made, where, by whom and how, for example value chains), finance (who creates and controls credit, for example the dollar and banks) and knowledge (what is known and who owns it, for example patents and chip designs). Below them a separate box defines relational power: A gets B to do what B would not otherwise do.", cap:"Strange’s four structures (1988). The structures interact: power in one can be used in another."},
      "The idea travels well. A country whose currency other states hold has power in the finance structure; a firm that owns key chip designs has power in the knowledge structure. In “The Persistent Myth of Lost Hegemony” (*International Organization*, 1987), Strange used it to reject the 1980s fashion for predicting US decline: Japan was rich, she argued, but the United States still shaped the structures.",
      "Her later book, *The Retreat of the State* (1996), argued that markets and firms were taking over authority once held by states, which Unit 13 discussed as [[private-authority|private authority]] (see {{private-authority}})."
    ]},
    {h:"Hegemonic stability and its critics", body:[
      "Units 1 and 2 met [[hegemonic-stability-theory|hegemonic stability theory]]. In *The World in Depression, 1929–1939* (1973) Charles Kindleberger argued that the world economy needs a **stabiliser**: one country that keeps its market open in bad times, lends when others stop, and acts as lender of last resort in a panic. In the 1930s Britain could not and the United States would not.",
      "Political scientists generalised the idea (see {{hegemonic-stability-debate}}). Stephen Krasner (“State Power and the Structure of International Trade”, *World Politics*, 1976) argued that a dominant, highly productive state prefers an open trading system and has the power to build one. {{robert-gilpin|Gilpin}} linked the rise and decline of hegemons to the opening and closing of the world economy.",
      "The critics were many:",
      {list:[
        "**Keohane** (*After Hegemony*, 1984): institutions can keep cooperation going after a hegemon declines (see {{neoliberal-institutionalism}}).",
        "**Duncan Snidal** (“The Limits of Hegemonic Stability Theory”, *International Organization*, 1985): a small group of states can provide [[global-public-good|public goods]] together, and a “hegemon” may be coercive rather than benevolent, making others pay.",
        "**Strange** (1987): the decline was a myth in the first place.",
        "**Historians** questioned whether Britain in the 19th century really imposed open trade on others."
      ]},
      "The debate is alive again. As of November 2026, some scholars read US tariffs and sanctions since 2025 as a hegemon stepping back from the system it built; others read them as a hegemon using its structural power more openly; others ask whether China, the EU or a group of states could share the stabiliser’s role. Seminars expect you to set out these readings, not to pick a prophecy."
    ]},
    {h:"Two ways of doing IPE", body:[
      "Benjamin Cohen’s *International Political Economy: An Intellectual History* (2008) described a transatlantic divide. Most seminars still use his labels, with caution.",
      {table:[
        ["","[[open-economy-politics|Open Economy Politics]] (“American school”)","[[british-school-ipe|“British school”]]"],
        ["Question","What explains a policy or outcome?","Who benefits from the system, and how could it change?"],
        ["Method","Economic theory, hypotheses, data, often statistics","History, interdisciplinary reading, normative argument"],
        ["Key names","Lake (2009), Frieden, Rogowski","Strange, Cox; journals *RIPE* (1994) and *New Political Economy* (1996)"],
        ["Strength","Clear, testable claims","Sees power, structures and change"],
        ["Critique","Takes the system as given","Claims can be hard to test"]
      ]},
      "David Lake (“Open Economy Politics: A Critical Review”, *Review of International Organizations*, 2009) set out OEP’s three-step logic:",
      {fig:'<svg viewBox="0 0 340 296"><defs><marker id="u15a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-lup" x="20" y="8" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1 Interests</text><text class="s" x="170" y="52" text-anchor="middle">Who gains or loses from a policy,</text><text class="s" x="170" y="68" text-anchor="middle">derived from economic theory</text><path class="d-ink" d="M170,80 V102" stroke-width="2" marker-end="url(#u15a1)"/><rect class="d-gold" x="20" y="108" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="132" text-anchor="middle">2 Domestic institutions</text><text class="s" x="170" y="152" text-anchor="middle">How elections, parties and lobbies</text><text class="s" x="170" y="168" text-anchor="middle">add those interests up</text><path class="d-ink" d="M170,180 V202" stroke-width="2" marker-end="url(#u15a1)"/><rect class="d-sage" x="20" y="208" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="232" text-anchor="middle">3 International bargaining</text><text class="s" x="170" y="252" text-anchor="middle">How states with these preferences</text><text class="s" x="170" y="268" text-anchor="middle">negotiate the final outcome</text></svg>', alt:"Three boxes connected by downward arrows. Box 1, interests: who gains or loses from a policy, derived from economic theory. Box 2, domestic institutions: how elections, parties and lobbies add those interests up. Box 3, international bargaining: how states with these preferences negotiate the final outcome.", cap:"The Open Economy Politics chain, after Lake (2009). Critics say it starts too late: it takes the world economy’s structure as given."},
      "Critics of Cohen’s map add a third point: both “schools” are Anglophone. Latin American structuralists, Japanese and Korean debates on the [[developmental-state|developmental state]] (see {{japan-economic-miracle}}), and Chinese, Indian and African scholarship asked IPE questions long before, and a growing “global IPE” literature, like the Global IR you met in Unit 2 (see {{global-ir}}), tries to bring them in."
    ]},
    {h:"Worked example: one export ban, several lenses", body:[
      {ex:"In January 2020 Indonesia banned exports of nickel ore, so that the ore would be processed at home. Investment in smelters followed, much of it by Chinese firms, and Indonesia is now by far the world’s largest nickel producer. The EU challenged the ban at the WTO; a panel ruled against Indonesia in 2022, and Indonesia appealed to an Appellate Body that could not hear the case (Lesson 2).\n\n• **Economic nationalism:** a legitimate way to move up the value chain, as today’s rich countries once did.\n• **Liberalism:** an export restriction that breaks WTO rules and raises costs for others.\n• **OEP:** which groups gained (smelter investors, the government) or lost (ore exporters), and how they lobbied.\n• **Strange:** who gains structural power in the production structure of batteries.\n• **Critical:** what happens to workers, forests and communities around the smelters.", label:"Worked example"},
      "Each lens notices something real. A good seminar answer names the lens it is using and the evidence each one would need.",
      {terms:["economic-nationalism","embedded-liberalism","double-movement","relational-power","structural-power","open-economy-politics","british-school-ipe"]}
    ]}
   ],
   try:[
    {id:"e4u15-l1-x1", type:"match", q:"Match each scholar to the idea.", pairs:[
      ["Susan Strange","Structural power across security, production, finance and knowledge","*States and Markets* (1988)."],
      ["Charles Kindleberger","The world economy needs a stabiliser; in the 1930s there was none","*The World in Depression, 1929–1939* (1973)."],
      ["Robert Gilpin","IPE’s three ideologies: liberalism, nationalism and Marxism","*The Political Economy of International Relations* (1987)."],
      ["John Ruggie","Embedded liberalism: open trade abroad, social protection at home","*International Organization* (1982)."],
      ["Karl Polanyi","The double movement: societies push back against unregulated markets","*The Great Transformation* (1944)."],
      ["Benjamin Cohen","A transatlantic divide between American and British schools of IPE","*International Political Economy: An Intellectual History* (2008)."]
    ]},
    {id:"e4u15-l1-x2", type:"sort", q:"Is each example mainly **relational** or **structural** power?", buckets:["Relational power","Structural power"], items:[
      {t:"A government threatens a 25% tariff unless a neighbour changes its policy", b:0, why:"A specific demand backed by a threat: A trying to get B to do something."},
      {t:"Much of the trade between other countries is invoiced in one country’s currency", b:1, why:"It shapes the framework in which everyone else trades: power in the finance structure."},
      {t:"A lender offers a loan if the borrower cuts its budget deficit", b:0, why:"A bargain between two actors over one decision."},
      {t:"A handful of firms own the designs that most of the world’s advanced chips depend on", b:1, why:"Control of the knowledge structure, which limits everyone’s options."},
      {t:"An alliance leader’s security guarantee shapes which economic partners its allies choose", b:1, why:"Power in the security structure spilling into production and trade."}
    ]},
    {id:"e4u15-l1-x3", type:"sort", q:"Which of Strange’s four structures does each example mainly concern?", buckets:["Security","Production","Finance","Knowledge"], items:[
      {t:"Who hosts foreign military bases and on what terms", b:0, why:"Protection and its price: the security structure."},
      {t:"Where cars are assembled and where their batteries are made", b:1, why:"What is made, where and by whom: production."},
      {t:"Which central banks can borrow dollars from the US Federal Reserve in a panic", b:2, why:"Access to credit and liquidity: finance."},
      {t:"Who holds the patents for a new vaccine", b:3, why:"Ownership of knowledge and technology."},
      {t:"Which banks are allowed to use an international payments network", b:2, why:"Control of the channels of credit and payment."}
    ]},
    {id:"e4u15-l1-x4", type:"mcq", q:"Which criticism of hegemonic stability theory did Duncan Snidal make in 1985?", options:[
      {t:"A small group of states can supply public goods together, and a hegemon may be coercive rather than benevolent", ok:true, why:"Right. “The Limits of Hegemonic Stability Theory” questioned both the need for one leader and the assumption that the leader is generous."},
      {t:"The United States never declined, so the theory’s puzzle is false", why:"That was Strange’s argument in 1987, about structural power."},
      {t:"Institutions persist after hegemony because they keep providing information", why:"That was Keohane’s argument in *After Hegemony* (1984)."},
      {t:"The 1930s Depression was caused by too much openness", why:"No critic cited here argued this; Kindleberger blamed the absence of a stabiliser."}
    ]},
    {id:"e4u15-l1-x5", type:"sort", q:"Which approach does each research question fit best?", buckets:["Open Economy Politics","“British school”"], items:[
      {t:"Do import-competing industries lobby harder for tariffs in countries with single-member electoral districts?", b:0, why:"A testable hypothesis linking interests and institutions to a policy."},
      {t:"How did the spread of dollar finance change who holds power in the world economy since the 1970s?", b:1, why:"A historical, structural question about power, in Strange’s style."},
      {t:"Which sectors’ firms supported a free trade agreement, and why?", b:0, why:"Preferences derived from economic interests: step 1 of the OEP chain."},
      {t:"Whose interests does the idea of “market discipline” serve?", b:1, why:"A critical, normative question in the spirit of Cox."}
    ]},
    {id:"e4u15-l1-x6", type:"spot", q:"A student summary of the field. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"Strange complained in 1970 that international economics and international relations neglected each other.", flag:false, why:"Correct."},
      " ",
      {t:"Kindleberger argued that the 1930s slump was deepened because no country acted as a stabiliser.", flag:false, why:"Correct: Britain could not, and the United States would not."},
      " ",
      {t:"Ruggie’s embedded liberalism means that states should open capital markets fully and leave employment to the market.", flag:true, why:"Wrong. Embedded liberalism combined open trade with domestic intervention, including capital controls and welfare policies."},
      " ",
      {t:"Open Economy Politics starts from interests, then domestic institutions, then international bargaining.", flag:false, why:"Correct: Lake’s (2009) three steps."},
      " ",
      {t:"Strange’s structural power is the power of one state to force another to sign a treaty.", flag:true, why:"Wrong. That is relational power. Structural power shapes the frameworks within which others choose."}
    ]},
    {id:"e4u15-l1-x7", type:"mcq", q:"Fatima studies Indonesia’s nickel ore export ban and asks: “Which domestic groups gained, which lost, and how did their lobbying shape the ban?” Which approach is she using?", options:[
      {t:"Open Economy Politics", ok:true, why:"Yes. She derives groups’ interests and traces how institutions turned them into policy."},
      {t:"Strange’s structural power", why:"That lens would ask who gains power over the framework of battery production, not which lobbies won."},
      {t:"Hegemonic stability theory", why:"That theory is about a dominant state and the openness of the whole system."},
      {t:"Polanyi’s double movement", why:"That would ask how society pushed back against market expansion."}
    ]}
   ],
   apply:{
    intro:"Use the lesson’s tools on things around you. You need only a browser and a notebook.",
    tasks:[
     {t:"Structural power in one product", how:[
       "Pick one product you use: a phone, a bag of rice, a medicine, a pair of trainers.",
       "Using public sources, note one fact for each of Strange’s four structures: security (whose protection keeps its trade routes open), production (where it is made), finance (which currency it is priced in), knowledge (who owns its key technology or brand).",
       "Decide which structure gives someone the most power over the product, and why."
     ], write:"Product… Security… Production… Finance… Knowledge… Where the most power lies, and why…"},
     {t:"Spot the school", how:[
       "Find the abstracts of two IPE articles, for example in *Review of International Political Economy* or *International Organization* (abstracts are free).",
       "For each, note the question, the method and whether it fits Open Economy Politics, the “British school” or neither.",
       "Write one sentence on what each approach would add to the other article."
     ], write:"Article 1: question, method, school… Article 2… What each would add…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is hegemonic stability theory still useful for understanding the world economy in 2026?",
       "2. Is structural power more useful than relational power for understanding today’s world economy? Use one example.",
       "3. Does the divide between Open Economy Politics and the British school help or hinder IPE?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes mapping one product onto Strange’s four structures, a classification of two IPE articles, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"Read after this lesson for a short second account of the field."},
    {book:"ospol", where:"Chapter 16, section 16.1 “The Origins of International Political Economy”", note:"A gentle account of the traditions."},
    {book:"eirt", where:"Chapter 5 “Marxism” and Chapter 6 “Critical Theory”", note:"Background on the critical tradition in IPE."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u15-l2", title:"Trade: comparative advantage, the WTO and the new tariff politics", minutes:65,
   hook:{q:"The WTO’s Appellate Body, its “supreme court” for trade disputes, is meant to have seven members. How many did it have in 2026?", options:["Seven","Five","Three","None"], answer:3, reveal:"**None.** Since December 2019 the United States has blocked new appointments, so the Body cannot hear appeals, and its last member’s term ended in 2020. A losing party can appeal a panel ruling “into the void” and the case stops there. About sixty members use a stand-in arrangement instead. This lesson explains how the trade regime was built, why it is in trouble, and what has grown up around it."},
   goals:[
     "Show with a worked example why both countries can gain from trade, and who inside each country can lose",
     "Trace the trade regime from GATT (1947) to the WTO (1995) and explain the Doha impasse",
     "Explain the Appellate Body crisis, the arguments on each side and the MPIA",
     "Compare the EU single market, the CPTPP, RCEP and the AfCFTA",
     "Give a dated, neutral account of the tariff changes of 2025–2026 and the arguments for and against them"
   ],
   learn:[
    {h:"Comparative advantage, with winners and losers", body:[
      {lead:"The primer showed why trade can pay even when one country is better at everything (see {{global-trade}}). Here are the numbers that show the gains, and the politics they hide."},
      "Two invented countries each have 100 worker-days. In **Altavia** one day makes 6 solar lamps or 3 sacks of coffee; in **Bremo**, 1 lamp or 2 sacks. Altavia is better at both: an [[absolute-advantage|absolute advantage]]. But a lamp costs Altavia only half a sack of coffee in lost output (its [[opportunity-cost|opportunity cost]]), while it costs Bremo 2 sacks. So Altavia has the [[comparative-advantage|comparative advantage]] in lamps and Bremo in coffee.",
      {table:[
        ["","Altavia (lamps, coffee)","Bremo (lamps, coffee)"],
        ["No trade: half their days on each","300, 150","50, 100"],
        ["Specialise: Altavia 80 days on lamps; Bremo all coffee","480, 60","0, 200"],
        ["Trade 95 sacks for 95 lamps","385, 155","95, 105"]
      ]},
      "World output rises from 350 lamps and 250 sacks to 480 and 260, and after trade **both** countries have more of **both** goods. Any price between half a sack and 2 sacks per lamp leaves both better off; where it settles is a matter of bargaining power.",
      {h:"Inside each country"},
      "Now look inside Bremo. Its lamp workshops close. The **[[stolper-samuelson|Stolper–Samuelson]]** theorem (1941) generalises the point: opening trade raises the returns of the factor a country has in abundance and lowers the returns of the scarce one. National gains can coexist with concentrated local losses.",
      "David Autor, David Dorn and Gordon Hanson’s “The China Syndrome” (*American Economic Review*, 2013) found that US regions more exposed to Chinese imports after 2000 suffered lasting job losses and lower wages, the [[china-shock|“China shock”]]. Others reply that the same trade cut prices for consumers, supported jobs elsewhere and lifted hundreds of millions out of poverty in China. Both findings can be true; which one you stress is a political choice.",
      {tip:"Much modern trade is between similar countries in similar goods (cars for cars). Paul Krugman’s “new trade theory” (Nobel 2008) explained it by economies of scale and consumers’ taste for variety."}
    ]},
    {h:"From GATT to the WTO", body:[
      "The [[gatt|General Agreement on Tariffs and Trade (GATT)]] was signed by 23 countries in October 1947, a provisional deal that lasted almost half a century. Members cut tariffs in eight [[trade-round|negotiating rounds]], applying the [[most-favoured-nation|most-favoured-nation]] rule. It was Ruggie’s embedded liberalism in practice: agriculture and textiles stayed largely protected, and members kept broad freedom at home.",
      {fig:'<svg viewBox="0 0 340 372"><path class="d-ink" d="M66,18 V352" stroke-width="2"/><g><circle class="d-inkf" cx="66" cy="24" r="5"/><text x="10" y="29">1947</text><text class="s" x="80" y="29">GATT signed by 23 countries</text><circle class="d-inkf" cx="66" cy="56" r="5"/><text x="10" y="61">1964</text><text class="s" x="80" y="61">Kennedy Round (to 1967)</text><circle class="d-inkf" cx="66" cy="88" r="5"/><text x="10" y="93">1973</text><text class="s" x="80" y="93">Tokyo Round (to 1979)</text><circle class="d-inkf" cx="66" cy="120" r="5"/><text x="10" y="125">1986</text><text class="s" x="80" y="125">Uruguay Round (to 1994)</text><circle class="d-inkf" cx="66" cy="152" r="5"/><text x="10" y="157">1995</text><text class="s" x="80" y="157">WTO opens on 1 January</text><circle class="d-inkf" cx="66" cy="184" r="5"/><text x="10" y="189">2001</text><text class="s" x="80" y="189">Doha Round launched</text><circle class="d-inkf" cx="66" cy="216" r="5"/><text x="10" y="221">2013</text><text class="s" x="80" y="221">Bali: Trade Facilitation deal</text><circle class="d-inkf" cx="66" cy="248" r="5"/><text x="10" y="253">2019</text><text class="s" x="80" y="253">Appellate Body stops (December)</text><circle class="d-inkf" cx="66" cy="280" r="5"/><text x="10" y="285">2020</text><text class="s" x="80" y="285">MPIA stand-in for appeals</text><circle class="d-inkf" cx="66" cy="312" r="5"/><text x="10" y="317">2025</text><text class="s" x="80" y="317">Fisheries subsidies deal in force</text><circle class="d-inkf" cx="66" cy="344" r="5"/><text x="10" y="349">2026</text><text class="s" x="80" y="349">MC14, Yaoundé: no declaration</text></g></svg>', alt:"A vertical timeline: 1947 GATT signed by 23 countries; 1964 Kennedy Round, to 1967; 1973 Tokyo Round, to 1979; 1986 Uruguay Round, to 1994; 1995 the WTO opens on 1 January; 2001 Doha Round launched; 2013 Bali, Trade Facilitation deal; 2019 the Appellate Body stops, in December; 2020 MPIA stand-in for appeals; 2025 fisheries subsidies agreement in force; 2026 MC14 in Yaoundé ends with no declaration.", cap:"Milestones of the trade regime. Most rounds are named after the place where they were launched; the Kennedy Round is named after the US president."},
      "The Uruguay Round created the [[world-trade-organization|WTO]] (1 January 1995) as a [[single-undertaking|single undertaking]]: members accepted almost all agreements as one package, including new rules on services and intellectual property (TRIPS), in exchange for gains in farm and textile trade. Many developing countries later felt they had paid a high price for those gains.",
      "The [[doha-round|Doha Round]] (2001) was meant to be a “development round”. It stalled, mainly over farm subsidies and market access, and over how much special treatment emerging economies such as China and India should keep. India and other members of the G-33 group pressed to protect public food stockholding and poor farmers; the United States and others argued that rules written in 2001 no longer fitted economies that had grown fast since. Members salvaged smaller deals, above all the Trade Facilitation Agreement (Bali, 2013). Increasingly they turned to [[plurilateral-agreement|plurilateral agreements]] among willing members, such as the Information Technology Agreement (1996) and newer texts on investment facilitation and e-commerce.",
      "The 14th Ministerial Conference (MC14) in Yaoundé, Cameroon (26–30 March 2026) showed the strain. It ended without a ministerial declaration, and the moratorium on customs duties on electronic transmissions, renewed since 1998, lapsed. Six months earlier, in September 2025, the [[fisheries-subsidies-agreement|Agreement on Fisheries Subsidies]] had entered into force: in the WTO’s words, “the first WTO agreement to focus on the environment”."
    ]},
    {h:"A WTO without an appeals court", body:[
      "Dispute settlement was the WTO’s pride: panels rule, the [[appellate-body|Appellate Body]] hears appeals, and the loser must comply or face retaliation. Since December 2019 the Body has been unable to hear appeals, because successive US administrations have blocked appointments.",
      {table:[
        ["","US criticism","Reply of most other members"],
        ["Overreach","The Body made new obligations by “gap-filling”","It interpreted texts that members agreed"],
        ["Precedent","It treated past rulings as binding","Consistency makes rules predictable"],
        ["Deadlines","It ignored the 90-day limit for appeals","Complex cases need time"],
        ["Fix","Reform first, then appointments","Appoint members now, reform in parallel"]
      ]},
      "Without the Body, a losing party can appeal **into the void**, and the ruling never becomes binding. Indonesia did this after losing the nickel case in 2022 (Lesson 1). In 2020 a group of members set up the [[mpia|Multi-Party Interim Appeal Arbitration Arrangement (MPIA)]], which uses arbitration under the WTO’s own rules. By MC14 it covered 61 WTO members (counting the EU’s 27 member states one by one), including the EU, China, Japan, Brazil and Australia; the United States is not part of it. Reform talks continue.",
      "A second fault line is national security. GATT’s [[security-exception-gatt|security exception]] (Article XXI) lets members take measures they consider necessary for their “essential security interests”. In *Russia – Traffic in Transit* (2019) a panel ruled that it could review whether such a claim was made in good faith; the United States argues that each member alone decides what its security requires. As more trade measures are justified by security, this dispute matters more."
    ]},
    {h:"Regional and mega-regional agreements", body:[
      "WTO rules allow [[regional-trade-agreement|regional trade agreements]] that go further among their members. They have multiplied, creating what Jagdish Bhagwati (1995) called a “spaghetti bowl” of overlapping [[rules-of-origin|rules of origin]]. Economists still debate whether they are building blocks towards global free trade or stumbling blocks. Four, including the largest [[mega-regional-agreement|mega-regional agreements]], dominate seminar discussion:",
      {list:[
        "**[[eu-single-market|EU single market]]** (1993): the deepest, with free movement of goods, services, capital and people, common rules and a court (see {{comparative-regionalism}}).",
        "**[[cptpp|CPTPP]]**: signed in 2018 by 11 Pacific Rim economies after the United States left the original TPP; the United Kingdom joined in December 2024. As of mid-2026 Costa Rica’s accession talks were substantially concluded and Uruguay had an accession working group; China and Taiwan both applied in 2021.",
        "**[[rcep|RCEP]]** (signed 2020, in force 2022): the ten ASEAN members plus China, Japan, Korea, Australia and New Zealand; shallower rules but a huge market, and the first free trade agreement linking China, Japan and Korea. India left the talks in 2019.",
        "**[[afcfta|AfCFTA]]** (signed 2018, in force 2019, trading from 2021): signed by 54 of the African Union’s 55 members; its secretariat in Accra listed 50 ratifications as of 2026. Many tariff schedules are still being put into practice."
      ]},
      {fig:'<svg viewBox="0 0 340 400"><text x="170" y="20" text-anchor="middle">CPTPP: 12 parties</text><rect class="d-gold" x="20" y="30" width="300" height="210" rx="14" stroke-width="2"/><rect class="d-lup" x="20" y="150" width="300" height="226" rx="14" stroke-width="2"/><rect class="d-sage" x="21" y="151" width="298" height="88" stroke-width="0"/><rect class="d-ink" x="20" y="30" width="300" height="210" rx="14" fill="none" stroke-width="2"/><rect class="d-ink" x="20" y="150" width="300" height="226" rx="14" fill="none" stroke-width="2"/><text x="170" y="56" text-anchor="middle">CPTPP only (5)</text><text class="s" x="170" y="80" text-anchor="middle">Canada, Chile, Mexico,</text><text class="s" x="170" y="98" text-anchor="middle">Peru, United Kingdom</text><text x="170" y="174" text-anchor="middle">In both (7)</text><text class="s" x="170" y="196" text-anchor="middle">Australia, Brunei, Japan, Malaysia,</text><text class="s" x="170" y="214" text-anchor="middle">New Zealand, Singapore, Viet Nam</text><text x="170" y="270" text-anchor="middle">RCEP only (8)</text><text class="s" x="170" y="294" text-anchor="middle">Cambodia, China, Indonesia,</text><text class="s" x="170" y="312" text-anchor="middle">Korea, Laos, Myanmar,</text><text class="s" x="170" y="330" text-anchor="middle">Philippines, Thailand</text><text x="170" y="394" text-anchor="middle">RCEP: 15 parties</text></svg>', alt:"Two overlapping rounded rectangles, with the overlap shaded in a third colour. The upper one is CPTPP, with 12 parties; the lower one is RCEP, with 15. CPTPP only: Canada, Chile, Mexico, Peru and the United Kingdom. In both: Australia, Brunei, Japan, Malaysia, New Zealand, Singapore and Viet Nam. RCEP only: Cambodia, China, Indonesia, Korea, Laos, Myanmar, the Philippines and Thailand.", cap:"Membership as of November 2026. Seven economies belong to both mega-regionals."}
    ]},
    {h:"Tariffs 2025–2026: a dated account", body:[
      "From 2025 the United States raised [[tariff|tariffs]] to levels not seen since the 1930s, by most estimates. The main steps, as of 12 November 2026:",
      {ol:[
        "**2025**: tariffs on Canada, Mexico and China under the International Emergency Economic Powers Act (IEEPA); on **2 April**, [[reciprocal-tariff|“reciprocal” tariffs]] on almost all partners (a 10% baseline, higher country rates from August); sector tariffs on steel, aluminium and cars under Section 232 of a 1962 law. US and Chinese tariffs on each other rose above 100% in April, then fell after talks in Geneva (May) and a one-year truce agreed in **Busan** (October).",
        "Partners chose different paths: China and Canada retaliated; the UK, Japan, the EU, Korea and several Southeast Asian states negotiated framework deals; many also deepened ties with others.",
        "**20 February 2026**: the US Supreme Court ruled 6–3 that IEEPA does not authorise tariffs. The administration imposed a temporary 10% tariff under Section 122 (from 24 February, limited to 150 days), then, from **24 July 2026**, tariffs of mostly 10–12.5% on 60 partners under Section 301, which are being challenged in court. Section 232 tariffs remain.",
        "**November 2026**: the US and China extended their truce, including China’s pause on some export controls on rare earths and other critical minerals, to 10 January 2027."
      ]},
      {table:[
        ["Supporters argue","Critics argue"],
        ["Persistent deficits reflect unfair practices abroad (Lighthizer, *No Trade Is Free*, 2023)","Overall deficits reflect national saving and investment, not trade rules"],
        ["Tariffs rebuild manufacturing and secure supply chains","Studies of the 2018–19 tariffs found the cost passed almost fully to US buyers (Amiti, Redding & Weinstein 2019; Fajgelbaum and others 2020)"],
        ["Tariffs raise revenue and win concessions","Retaliation, uncertainty and broken WTO commitments hurt exporters and the system"]
      ]},
      "For IPE the episode is a case study, not a verdict: a court and domestic law (Lesson 1’s OEP step 2) shaped trade policy as much as diplomacy did.",
      {terms:["opportunity-cost","stolper-samuelson","china-shock","gatt","trade-round","doha-round","single-undertaking","plurilateral-agreement","appellate-body","mpia","security-exception-gatt","regional-trade-agreement","mega-regional-agreement","rules-of-origin","cptpp","rcep","afcfta","eu-single-market","reciprocal-tariff"]}
    ]}
   ],
   try:[
    {id:"e4u15-l2-x1", type:"number", q:"Invented figures: one worker-day makes 10 shirts or 5 phones in Country C, and 4 shirts or 1 phone in Country D. Country D will import phones only if they cost it less than making them at home. What is the **highest** price, in shirts per phone, that D would pay?", answer:4, tol:0, unit:"shirts per phone", why:"At home D gives up 4 shirts to make 1 phone (one day makes 4 shirts or 1 phone). It will pay up to 4 shirts per phone and no more. C’s cost of a phone is 10 ÷ 5 = 2 shirts, so any price between 2 and 4 leaves both better off.", wrongs:[
      {v:2, tol:0, why:"2 shirts is C’s opportunity cost of a phone: the lowest price C would accept, not the highest D would pay."},
      {v:0.25, tol:0.01, why:"That is phones per shirt in D (1 ÷ 4). The question asks for shirts per phone."},
      {v:5, tol:0, why:"5 is how many phones C makes in a day, not a price."}
    ]},
    {id:"e4u15-l2-x2", type:"mcq", q:"A labour-abundant country opens to trade with capital-abundant partners. According to the Stolper–Samuelson theorem, what should happen to returns inside the labour-abundant country?", options:[
      {t:"Wages rise relative to returns on capital", ok:true, why:"Right. Trade raises the return to the abundant factor (here labour) and lowers it for the scarce one."},
      {t:"Returns on capital rise relative to wages", why:"That is what the theorem predicts for the capital-abundant partner, not this country."},
      {t:"Everyone gains equally", why:"The theorem’s point is that gains are not shared equally: some groups lose."},
      {t:"Nothing changes inside the country; only the trade balance moves", why:"The theorem is precisely about changes in factor returns inside countries."}
    ]},
    {id:"e4u15-l2-x3", type:"order", q:"Put these milestones of the trade regime in order.", items:[
      {t:"GATT signed by 23 countries", why:"October 1947."},
      {t:"Uruguay Round begins", why:"1986."},
      {t:"WTO opens", why:"1 January 1995."},
      {t:"Doha Round launched", why:"November 2001."},
      {t:"Appellate Body can no longer hear appeals", why:"December 2019."},
      {t:"MC14 in Yaoundé ends without a declaration", why:"March 2026."}
    ]},
    {id:"e4u15-l2-x4", type:"mcq", q:"A WTO panel rules against Country K, which is not part of the MPIA. K files an appeal. What happens?", options:[
      {t:"The appeal goes “into the void”: no Appellate Body can hear it, so the panel ruling never becomes binding", ok:true, why:"Right. This is the main effect of the Appellate Body’s paralysis since December 2019."},
      {t:"The MPIA hears the appeal automatically", why:"The MPIA covers only members that have joined it, and both parties must be participants."},
      {t:"The panel ruling becomes binding after 90 days anyway", why:"Under the WTO’s rules an appealed report cannot be adopted until the appeal is decided."},
      {t:"The International Court of Justice takes over the case", why:"The ICJ has no role in WTO disputes."}
    ]},
    {id:"e4u15-l2-x5", type:"match", q:"Match each arrangement with its feature.", pairs:[
      ["EU single market","Free movement of goods, services, capital and people, with a common court","In place since 1993."],
      ["CPTPP","Pacific Rim agreement that the United Kingdom joined in 2024","Signed in 2018 after the US left the TPP."],
      ["RCEP","The first free trade agreement linking China, Japan and Korea","In force since 2022 with 15 members."],
      ["AfCFTA","Signed by 54 of the African Union’s 55 members","Trading began in 2021."],
      ["MPIA","An arbitration stand-in for WTO appeals","Created in 2020 by a group of WTO members."]
    ]},
    {id:"e4u15-l2-x6", type:"sort", q:"Which mega-regional agreement does each economy belong to, as of November 2026?", buckets:["CPTPP only","Both","RCEP only"], items:[
      {t:"Japan", b:1, why:"A party to both."},
      {t:"China", b:2, why:"An RCEP member; it applied to the CPTPP in 2021 but is not a party."},
      {t:"Mexico", b:0, why:"A CPTPP party; RCEP is limited to ASEAN and five partners."},
      {t:"Viet Nam", b:1, why:"A party to both."},
      {t:"Indonesia", b:2, why:"An RCEP member; it was in preparatory discussions with the CPTPP in 2026."},
      {t:"United Kingdom", b:0, why:"Joined the CPTPP in December 2024."},
      {t:"Korea", b:2, why:"An RCEP member, not a CPTPP party."}
    ]},
    {id:"e4u15-l2-x7", type:"spot", q:"A news explainer from November 2026. Tap each claim that **is wrong**.", ask:"is wrong", parts:[
      {t:"In February 2026 the US Supreme Court upheld the tariffs imposed under the emergency powers law IEEPA.", flag:true, why:"Wrong. On 20 February 2026 it ruled 6–3 that IEEPA does not authorise tariffs."},
      " ",
      {t:"The administration then used other laws, first Section 122 and later Section 301.", flag:false, why:"Correct."},
      " ",
      {t:"Tariffs are paid by the foreign governments whose goods are taxed.", flag:true, why:"Wrong. Importers pay tariffs to their own customs service; who bears the cost in the end depends on the market."},
      " ",
      {t:"Section 232 tariffs on goods such as steel and cars were not affected by the ruling.", flag:false, why:"Correct: they rest on a different law."},
      " ",
      {t:"The US and China extended their truce in November 2026.", flag:false, why:"Correct: to January 2027."}
    ]},
    {id:"e4u15-l2-x8", type:"sort", q:"Is each argument about the 2025–2026 tariffs more typical of **supporters** or **critics**?", buckets:["Supporters","Critics"], items:[
      {t:"Tariffs give leverage to win concessions and investment pledges", b:0, why:"Supporters point to framework deals with partners."},
      {t:"Most of the cost of past tariffs was passed on to domestic buyers", b:1, why:"Critics cite studies of the 2018–19 tariffs."},
      {t:"Domestic production of strategic goods is a matter of national security", b:0, why:"A security argument for protection."},
      {t:"Overall trade deficits reflect saving and investment, not unfair rules", b:1, why:"A standard macroeconomic reply to deficit-based arguments."},
      {t:"Breaking most-favoured-nation commitments weakens the rules that protect smaller exporters", b:1, why:"A systemic critique, common among smaller trading nations."}
    ]}
   ],
   apply:{
    intro:"Work with real trade data and texts. Everything here is free and needs no account.",
    tasks:[
     {t:"Your country’s trade web", how:[
       "Open the WTO’s Regional Trade Agreements database (rtais.wto.org) or your government’s trade ministry website.",
       "List the regional or bilateral agreements your country (or one you choose) belongs to, and note whether it is in the CPTPP, RCEP, AfCFTA or the EU.",
       "Pick one agreement and note one thing it covers beyond tariffs (services, investment, labour, environment, digital trade)."
     ], write:"Country… Agreements… Which mega-regionals… One agreement and what it covers beyond tariffs…"},
     {t:"Read a dispute", how:[
       "On the WTO website, open the page of one dispute (for example DS592, the EU’s complaint about Indonesia’s nickel export ban).",
       "Note the parties, the measure, what the panel found, and whether the case was appealed and what happened next."
     ], write:"Dispute… Parties… Measure… Panel finding… Appeal and outcome…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Can the WTO survive as a rule-making and rule-enforcing body without the Appellate Body?",
       "2. Are mega-regional agreements building blocks or stumbling blocks for global trade rules?",
       "3. Who bears the costs of the trade shifts of 2025–2026, inside and outside the United States? Use evidence, not assertion."
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A list of one country’s trade agreements, notes on one WTO dispute, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 33 “International Trade”, sections 33.1 “Absolute and Comparative Advantage” and 33.2 “What Happens When a Country Has an Absolute Advantage in All Goods”", note:"The economics of the worked example, step by step."},
    {book:"osecon", where:"Chapter 34 “Globalization and Protectionism”, sections 34.3 “Arguments in Support of Restricting Imports” and 34.4 “How Governments Enact Trade Policy: Globally, Regionally, and Nationally”", note:"The arguments about protection and the levels at which trade policy is made."},
    {book:"ospol", where:"Chapter 16, section 16.2 “The Advent of the Liberal Economy”", note:"Background on the postwar liberal trading order."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u15-l3", title:"Money and finance: the dollar, the IMF and financial crises", minutes:65,
   hook:{q:"In April 2025, on one side of what share of all foreign-exchange trades in the world was the US dollar?", options:["About 25%","About 50%","About 70%","About 90%"], answer:3, reveal:"**About 89%**, according to the Bank for International Settlements’ survey of April 2025, when foreign-exchange trading reached 9.6 trillion dollars a day. A trader swapping Thai baht for Brazilian reais usually goes through dollars. That is one reason why debates about “de-dollarisation” are harder to settle than headlines suggest. This lesson explains how the money system works, who manages its crises and what the evidence on the dollar shows."},
   goals:[
     "Explain how the Bretton Woods monetary system worked, why it broke down and what replaced it",
     "Use the impossible trinity to explain countries’ exchange-rate choices",
     "Describe the dollar’s international roles and weigh the evidence on de-dollarisation",
     "Explain how the IMF lends and why its conditions are debated",
     "Compare four major financial crises and the lessons drawn from them"
   ],
   learn:[
    {h:"From Bretton Woods to floating", body:[
      {lead:"Money is the part of the world economy most people never see, until it breaks: savings lose value, imports cost twice as much, a government runs out of dollars."},
      "The primer described the [[bretton-woods|Bretton Woods]] institutions (see {{bretton-woods-institutions}}), and Unit 9 their governance (see {{bretton-woods-governance}}). Here we look at the money system itself. Under the [[par-value-system|par value system]] agreed in 1944, currencies were pegged to the dollar within narrow bands, and the dollar was convertible into gold at 35 dollars an ounce for foreign central banks. Governments could control capital flows: embedded liberalism (Lesson 1) in monetary form.",
      "In *Gold and the Dollar Crisis* (1960) Robert Triffin spotted a flaw, the [[triffin-dilemma|Triffin dilemma]]. The world needed more dollars as trade grew, so the United States had to run deficits; but the more dollars piled up abroad, the less credible their link to gold. On **15 August 1971** President Nixon suspended convertibility, the [[nixon-shock|“Nixon shock”]]. A patched-up deal (the Smithsonian Agreement, December 1971) failed, and by 1973 the major currencies were [[floating-exchange-rate|floating]]. Since an amendment to the IMF’s Articles (agreed in Jamaica in 1976, in force 1978) countries choose their own regimes.",
      "Today there is a spectrum: Hong Kong has pegged its dollar to the US dollar since 1983; 21 EU countries share the euro (Bulgaria joined in January 2026); China manages its currency against a basket; Japan, the United States and many others float."
    ]},
    {h:"The impossible trinity", body:[
      "Why do countries choose so differently? Economists since Robert Mundell and Marcus Fleming in the early 1960s have described the [[impossible-trinity|impossible trinity]] (or monetary trilemma): a country can have only two of three things at once.",
      {fig:'<svg viewBox="0 0 340 416"><polygon class="d-panel" points="170,42 40,230 300,230" stroke-width="2"/><text x="170" y="28" text-anchor="middle">Fixed exchange rate</text><text x="64" y="252" text-anchor="middle">Free capital</text><text x="64" y="268" text-anchor="middle">movement</text><text x="276" y="252" text-anchor="middle">Independent</text><text x="276" y="268" text-anchor="middle">monetary policy</text><text x="94" y="142" text-anchor="middle">A</text><text x="246" y="142" text-anchor="middle">B</text><text x="170" y="222" text-anchor="middle">C</text><text class="s" x="170" y="150" text-anchor="middle">Choose two</text><text class="s" x="170" y="166" text-anchor="middle">corners</text><rect class="d-rose" x="8" y="284" width="324" height="40" rx="6" stroke-width="1.5"/><text x="20" y="309">A</text><text class="s" x="40" y="300">Fixed rate + free capital: no own</text><text class="s" x="40" y="316">monetary policy (Hong Kong’s peg)</text><rect class="d-gold" x="8" y="330" width="324" height="40" rx="6" stroke-width="1.5"/><text x="20" y="355">B</text><text class="s" x="40" y="346">Fixed rate + own policy: controls on</text><text class="s" x="40" y="362">capital (the Bretton Woods era)</text><rect class="d-lup" x="8" y="376" width="324" height="34" rx="6" stroke-width="1.5"/><text x="20" y="398">C</text><text class="s" x="40" y="390">Free capital + own policy: a floating</text><text class="s" x="40" y="405">currency (Japan, United States)</text></svg>', alt:"A triangle with three corners: fixed exchange rate at the top, free capital movement at bottom left, independent monetary policy at bottom right. A note in the middle says choose two corners. Side A joins fixed rate and free capital: no monetary policy of your own, as with Hong Kong’s peg. Side B joins fixed rate and independent policy: controls on capital, as in the Bretton Woods era. Side C joins free capital and independent policy: a floating currency, as in Japan and the United States.", cap:"The monetary trilemma. Unit 1’s Rodrik trilemma is a different, political one, about globalisation, democracy and sovereignty."},
      "Hong Kong and euro area members chose side A: they cannot set interest rates to suit themselves. Bretton Woods chose B. Most large economies today choose C. China has long sat between B and C, managing its currency while limiting capital flows. In the Asian crisis Malaysia, which did not take an IMF programme, imposed [[capital-controls|capital controls]] in September 1998 to defend a fixed rate, against much expert advice at the time; in 2012 the IMF itself accepted that such controls can be appropriate in some circumstances.",
      "Hélène Rey added a twist (“Dilemma not Trilemma”, 2013): because a global financial cycle driven by US monetary policy moves money everywhere, even floating countries struggle to control their own conditions unless they also manage capital flows."
    ]},
    {h:"The dollar’s international roles", body:[
      "A [[reserve-currency|reserve currency]] is one that other governments hold as savings and use to settle trade and debts. The dollar dominates every role:",
      {table:[
        ["Role","Evidence (year of figure)"],
        ["Official reserves","56.7% of identified foreign-exchange reserves (IMF COFER, second quarter of 2026); euro 20.6%, yen 5.0%, renminbi 2.1%"],
        ["Foreign-exchange trading","On one side of 89% of trades (BIS, April 2025)"],
        ["Trade invoicing","Much trade between other countries is priced in dollars (Gopinath and others’ “dominant currency paradigm”, 2020)"]
      ]},
      "French finance minister Valéry Giscard d’Estaing called this an [[exorbitant-privilege|“exorbitant privilege”]] in the 1960s, and Barry Eichengreen used the phrase as the title of his 2011 book: the issuer borrows cheaply in its own currency, and its central bank is the world’s lender of last resort. In 2007–08 the US Federal Reserve opened [[swap-line|swap lines]] to 14 central banks, including Korea’s, Singapore’s, Brazil’s and Mexico’s, lending them dollars to stop a panic; since 2013 it has standing lines with five. In October 2025 the US Treasury agreed a 20-billion-dollar swap with Argentina. In Strange’s terms (Lesson 1), deciding who gets dollars in a crisis is structural power in the finance structure.",
      "The IMF’s own reserve asset, the [[special-drawing-rights|Special Drawing Right]] (SDR), is a basket of five currencies. It plays a modest role, although its 2021 allocation of about 650 billion dollars helped many countries through the pandemic."
    ]},
    {h:"De-dollarisation: what the evidence shows", body:[
      "[[de-dollarisation|De-dollarisation]] means reducing reliance on the dollar for reserves, trade or payments. The debate grew after 2022, when Western governments froze about half of the Russian central bank’s foreign reserves (see {{dollar-dominance-debate}}).",
      {table:[
        ["Evidence of change","Evidence of continuity"],
        ["The dollar’s reserve share fell from about 71% in 1999 to 56.7% in 2026","Most of that shift went to “non-traditional” currencies such as the Australian and Canadian dollars, not to one rival (Arslanalp, Eichengreen and Simpson-Bell, 2022)"],
        ["Central banks bought more than 1,000 tonnes of gold in 2024 and 863 tonnes in 2025, historically high levels (World Gold Council)","The renminbi’s reserve share was 2.1% in 2026; China’s capital controls limit its use"],
        ["China’s payment system CIPS (2015), local-currency deals and BRICS discussions on payments (see {{brics}})","The dollar is still on one side of 89% of foreign-exchange trades; deep markets and legal protections are hard to copy"]
      ]},
      "Eswar Prasad’s *The Dollar Trap* (2014) argued that crises tend to strengthen the dollar because investors run to it. Others argue that the use of financial sanctions, US debt and political risk give governments reasons to diversify slowly. As of November 2026, scholars disagree on the pace and the end point; the evidence supports gradual diversification more than a sudden switch, but seminars expect you to show both."
    ]},
    {h:"The IMF as crisis lender", body:[
      "When a country cannot pay for its imports or debts, the [[imf|IMF]] lends, with [[conditionality|conditions]]. Its largest programme was for Argentina in 2018 (about 57 billion dollars); in April 2025 it approved a new 20-billion-dollar arrangement for Argentina. Pakistan, Egypt, Sri Lanka, Ghana and Zambia have all had recent programmes.",
      "Critics, from Joseph Stiglitz to Alexander Kentikelenis, Thomas Stubbs and Lawrence King (*Review of International Political Economy*, 2016), argue that conditions impose austerity and limit policy choice, and that structural conditions returned after 2008 despite promises of restraint. The Fund replies that countries arrive already in crisis, that its loans make adjustment gentler than it would otherwise be, and that programmes now include floors on social spending. Unit 9 covered who decides at the Fund.",
      "The IMF is not the only lender. After 1997–98 East Asian governments built the Chiang Mai Initiative (2000), a network of currency swaps among ASEAN, China, Japan and Korea, made multilateral in 2010 and backed by a surveillance office, AMRO. Europe created the European Stability Mechanism (2012), and the BRICS a Contingent Reserve Arrangement (2014). Together with national reserves and swap lines, these form a layered **global financial safety net**. Critics note that access is uneven: many low-income countries have only the IMF to turn to.",
      {tip:"A falling currency is not simply “bad”. It makes exports cheaper and imports dearer; who gains and who loses depends on what a country sells, what it buys and what currency its debts are in."}
    ]},
    {h:"Four crises and their lessons", body:[
      {table:[
        ["Crisis","What happened","Lessons drawn"],
        ["Latin American debt, 1982","US interest rates soared; Mexico announced in August 1982 that it could not pay; a “lost decade” followed until the Brady Plan (1989)","Borrowing in dollars at floating rates is dangerous"],
        ["Asian, 1997–98","Thailand floated the baht on 2 July 1997; money fled Indonesia, Korea and others","[[sudden-stop|Sudden stops]] and [[financial-contagion|contagion]]; Asia built reserves and the Chiang Mai Initiative (2000)"],
        ["Global, 2008","US housing losses froze world credit after Lehman Brothers collapsed (see [[global-financial-crisis]])","Fed swap lines, the G20 at leaders’ level, tighter bank rules"],
        ["Euro area, 2010–12","Greece, Ireland, Portugal and others lost market access; no national currency to devalue","A monetary union needs crisis tools; ECB’s “whatever it takes” (July 2012)"]
      ]},
      "Two ideas recur. [[original-sin-debt|“Original sin”]] (Barry Eichengreen and Ricardo Hausmann, 1999) is the inability of many countries to borrow abroad in their own currency, so a fall in the currency swells their debt. [[moral-hazard|Moral hazard]] is the worry that rescues encourage reckless lending next time; critics of bailouts invoke it, defenders reply that letting panics run costs far more. Kindleberger’s *Manias, Panics, and Crashes* (1978) remains the classic history.",
      {ex:"A government owes 2 billion dollars. Before a crisis 1 dollar = 25 units of its currency, so the debt is worth 50 billion units. The currency falls to 40 per dollar. The same debt is now worth 2 × 40 = **80 billion units**: 60% more, although the government borrowed nothing new. Tax revenue, collected in local currency, has not grown.", label:"Worked example: original sin (invented figures)"},
      {terms:["par-value-system","triffin-dilemma","nixon-shock","floating-exchange-rate","impossible-trinity","capital-controls","reserve-currency","exorbitant-privilege","swap-line","special-drawing-rights","de-dollarisation","sudden-stop","financial-contagion","original-sin-debt","moral-hazard"]}
    ]}
   ],
   try:[
    {id:"e4u15-l3-x1", type:"number", q:"Invented figures: a government owes 3 billion dollars. Its currency falls from 20 to 30 per dollar. By what **percentage** does the debt rise when measured in its own currency?", answer:50, tol:0.5, unit:"%", why:"Before: 3 × 20 = 60 billion units. After: 3 × 30 = 90 billion units. Rise: 30 ÷ 60 = 0.5 = 50%. The dollar amount did not change; the currency did.", wrongs:[
      {v:0, tol:0.5, why:"In dollars nothing changed, but the question asks about the debt in the government’s own currency, which is what its tax revenue is collected in."},
      {v:33.3, tol:0.5, why:"That is 30 ÷ 90, measuring the rise against the new value instead of the old one."},
      {v:30, tol:0.5, why:"30 billion units is the increase, not the percentage."}
    ]},
    {id:"e4u15-l3-x2", type:"sort", q:"Which side of the impossible trinity does each case choose?", buckets:["A: fixed rate + free capital","B: fixed rate + own monetary policy","C: free capital + own monetary policy"], items:[
      {t:"Hong Kong’s peg to the US dollar", b:0, why:"Capital moves freely and the rate is fixed, so Hong Kong follows US interest rates."},
      {t:"A euro area member such as Portugal", b:0, why:"It shares a currency with its partners and cannot set its own interest rates."},
      {t:"Western Europe and Japan in the 1950s", b:1, why:"Pegged rates under Bretton Woods, with capital controls allowing some policy independence."},
      {t:"Malaysia after September 1998", b:1, why:"It fixed the ringgit and imposed capital controls."},
      {t:"Japan today", b:2, why:"The yen floats; capital moves freely; the Bank of Japan sets its own policy."}
    ]},
    {id:"e4u15-l3-x3", type:"order", q:"Put these monetary events in order.", items:[
      {t:"The Bretton Woods conference", why:"July 1944."},
      {t:"Triffin publishes *Gold and the Dollar Crisis*", why:"1960."},
      {t:"The Nixon shock ends dollar–gold convertibility", why:"15 August 1971."},
      {t:"Major currencies float", why:"By 1973."},
      {t:"Mexico announces it cannot pay its debts", why:"August 1982."},
      {t:"Thailand floats the baht", why:"2 July 1997."}
    ]},
    {id:"e4u15-l3-x4", type:"mcq", q:"The dollar’s share of world reserves fell from about 71% in 1999 to under 57% in 2026. Which conclusion is best supported by the evidence in the lesson?", options:[
      {t:"Reserves are diversifying gradually, mostly into a range of smaller currencies, while the dollar remains dominant", ok:true, why:"Right. Research by Arslanalp, Eichengreen and Simpson-Bell found most of the shift went to non-traditional currencies, and the dollar still leads every role."},
      {t:"The renminbi has replaced the dollar as the main reserve currency", why:"Its share was about 2.1% in 2026."},
      {t:"The dollar’s role in foreign-exchange trading has collapsed", why:"It was on one side of 89% of trades in April 2025."},
      {t:"Nothing has changed since 1999", why:"The reserve share did fall by about 14 percentage points; the question is how to read it."}
    ]},
    {id:"e4u15-l3-x5", type:"match", q:"Match each crisis with a feature.", pairs:[
      ["Latin American debt crisis","Began when Mexico said in 1982 that it could not pay; ended with the Brady Plan","A “lost decade” of slow growth followed."],
      ["Asian financial crisis","Sudden stops and contagion after the baht floated in 1997","Led to reserve building and the Chiang Mai Initiative."],
      ["Global financial crisis","Lehman Brothers collapsed in 2008; the Fed lent dollars through swap lines","The G20 began meeting at leaders’ level."],
      ["Euro area crisis","Members could not devalue a currency they shared","Ended in part by the ECB’s “whatever it takes” pledge in 2012."]
    ]},
    {id:"e4u15-l3-x6", type:"spot", q:"An opinion column. Tap each claim that **is not supported** by the evidence in the lesson.", ask:"is not supported", parts:[
      {t:"Central banks have been buying gold at historically high levels.", flag:false, why:"Supported: World Gold Council figures for 2024 and 2025."},
      " ",
      {t:"The BRICS countries have launched a common currency that now rivals the dollar.", flag:true, why:"Not supported. There is no BRICS currency; members have discussed payment systems in local currencies."},
      " ",
      {t:"The dollar’s share of reserves has fallen since 1999.", flag:false, why:"Supported by IMF COFER data."},
      " ",
      {t:"Most trades in the foreign-exchange market no longer involve the dollar.", flag:true, why:"Not supported. The dollar was on one side of 89% of trades in April 2025."},
      " ",
      {t:"The freezing of Russia’s reserves in 2022 gave some governments a reason to diversify.", flag:false, why:"Supported as a motive that governments and scholars cite."}
    ]},
    {id:"e4u15-l3-x7", type:"mcq", q:"In a 2008-style panic, the US Federal Reserve decides which foreign central banks can borrow dollars through swap lines. In Strange’s terms, this is best described as:", options:[
      {t:"Structural power in the finance structure", ok:true, why:"Right. It shapes who can survive a dollar shortage: the framework others must work in."},
      {t:"Relational power in the security structure", why:"Swap lines concern credit, not protection, and they work by setting the framework, not by a specific demand."},
      {t:"Moral hazard", why:"Moral hazard is about incentives created by rescues, not about who holds power."},
      {t:"Original sin", why:"Original sin is the inability to borrow abroad in one’s own currency."}
    ]}
   ],
   apply:{
    intro:"Look at the real numbers and documents behind the debates.",
    tasks:[
     {t:"Check the dollar yourself", how:[
       "Open the IMF’s data portal and find the Currency Composition of Official Foreign Exchange Reserves (COFER) for the latest quarter.",
       "Note the shares of the dollar, euro, yen and renminbi, and the quarter. Compare them with the lesson’s figures for the second quarter of 2026.",
       "Write two sentences on what changed and two on what you would need to know before calling it a trend."
     ], write:"Latest quarter… Dollar… Euro… Yen… Renminbi… What changed… What I would need to know…"},
     {t:"Read an IMF programme", how:[
       "Find a recent IMF press release approving or reviewing a programme for one country (imf.org, “Press releases”).",
       "List its size, its main conditions or targets, and anything it says about social spending.",
       "Note how a critic and a defender of IMF conditionality would each describe it."
     ], write:"Country and date… Size… Main conditions… Social spending… Critic’s reading… Defender’s reading…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is de-dollarisation happening, and how would you know?",
       "2. Does IMF conditionality help or hinder recovery? Use one case.",
       "3. What did Asia learn from 1997–98, and were they the right lessons?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Current COFER figures with your own reading of them, notes on one IMF programme from two perspectives, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 29 “Exchange Rates and International Capital Flows”, sections 29.1 “How the Foreign Exchange Market Works” and 29.4 “Exchange Rate Policies”", note:"How exchange rates work, and the choice between floating and fixed rates."},
    {book:"ospol", where:"Chapter 16, section 16.3 “The Bretton Woods Institutions”", note:"Background on the IMF and World Bank."},
    {book:"osecon", where:"Chapter 23 “The International Trade and Capital Flows”, section 23.3 “Trade Balances and Flows of Financial Capital”", note:"Why trade balances and capital flows are two sides of one coin."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u15-l4", title:"Global value chains and geoeconomics", minutes:65,
   hook:{q:"In 2009 an iPhone 3G assembled in China cost about 179 dollars to make. Researchers traced where that value was added. How much was added by assembly in China?", options:["Almost all of it, about 179 dollars","About half, roughly 90 dollars","About 25 dollars","About 6.50 dollars"], answer:3, reveal:"**About 6.50 dollars**, under 4% of the cost, according to Yuqing Xing and Neal Detert (2010). Most of the value came from parts made in Japan, Germany, Korea and elsewhere, and the design and brand were American. Yet trade statistics counted the whole 179 dollars as a Chinese export to the United States. This lesson is about how such chains work, who captures the value, and how governments now treat them as matters of security."},
   goals:[
     "Explain what global value chains are and why gross trade figures can mislead",
     "Use GVC governance types and the smile curve to analyse who captures value, and what upgrading means",
     "Explain offshoring, reshoring, friend-shoring and de-risking, with the evidence on what has changed",
     "Explain economic security and weaponised interdependence, from Hirschman to Farrell and Newman",
     "Describe export controls, sanctions, economic coercion and critical minerals neutrally, with each side’s argument"
   ],
   learn:[
    {h:"What a global value chain is", body:[
      {lead:"A T-shirt can be designed in Stockholm, grown as cotton in Uzbekistan, spun in Pakistan, sewn in Bangladesh and sold in Lagos. No single country “makes” it."},
      "A [[global-value-chain|global value chain]] (GVC) is the full range of activities that bring a product from idea to customer, split across countries and firms. The idea grew out of the “commodity chains” of world-systems scholars (see [[world-systems-theory]]). Gary Gereffi’s 1994 study distinguished **producer-driven** chains, run by manufacturers such as carmakers, from **buyer-driven** chains, run by retailers and brands that own no factories (see {{global-value-chains}}).",
      "Richard Baldwin’s *The Great Convergence* (2016) explains the timing. Cheap transport had allowed goods to be made far from where they were sold. From about 1990, cheap communication let firms split production itself across borders, [[offshoring|offshoring]] stages to wherever they cost least, and send their know-how with them. The World Bank’s *World Development Report 2020* found that GVCs account for almost half of world trade, and that their expansion had stalled since the 2008 crisis.",
      "Gross trade statistics count the full value of goods each time they cross a border. Value-added data, such as the OECD’s Trade in Value Added (TiVA) database, ask where the value was actually created (see {{political-economic-datasets}}). On those measures, bilateral trade balances can look very different.",
      {ex:"Xing and Detert (2010) estimated that each iPhone 3G cost about 178.96 dollars to make. Gross statistics recorded the whole amount as a Chinese export to the United States. In value-added terms, assembly in China added about 6.50 dollars (6.50 ÷ 178.96 ≈ 3.6%); parts from Japan, Germany, Korea, the United States and others made up the rest. They estimated that iPhones added about 1.9 billion dollars to the 2009 US trade deficit with China, although most of the value was not Chinese. The same logic applies to many goods assembled in one country from parts made in many.", label:"Worked example: one phone in the trade data"}
    ]},
    {h:"Who captures the value?", body:[
      "Gereffi, John Humphrey and Timothy Sturgeon (“The Governance of Global Value Chains”, *Review of International Political Economy*, 2005) identified five types of [[gvc-governance|chain governance]], from loose to tight: **market** (simple goods bought on price), **modular** (suppliers make parts to a code, as in electronics), **relational** (trust and complex know-how), **captive** (small suppliers dependent on a powerful buyer, as in much garment work) and **hierarchy** (one firm owns the stages).",
      "Acer’s founder Stan Shih drew the [[smile-curve|smile curve]] in the early 1990s to show where value lies:",
      {fig:'<svg viewBox="0 0 340 310"><path class="d-ink" d="M30,250 V24" stroke-width="2"/><path class="d-ink" d="M30,250 H330" stroke-width="2"/><text class="s" x="36" y="18">Value added</text><path class="d-ink" d="M50,80 Q180,350 310,80" fill="none" stroke-width="3"/><text x="40" y="46">R&amp;D, design,</text><text class="s" x="40" y="64">parts, patents</text><text x="324" y="46" text-anchor="end">Brand, marketing,</text><text class="s" x="324" y="64" text-anchor="end">sales, services</text><text x="180" y="240" text-anchor="middle">Assembly</text><text class="s" x="78" y="270" text-anchor="middle">Before</text><text class="s" x="78" y="286" text-anchor="middle">production</text><text class="s" x="180" y="270" text-anchor="middle">Production</text><text class="s" x="282" y="270" text-anchor="middle">After</text><text class="s" x="282" y="286" text-anchor="middle">production</text><text class="s" x="180" y="304" text-anchor="middle">Stages of the chain</text></svg>', alt:"A U-shaped curve on axes. The vertical axis is value added; the horizontal axis shows stages of the chain: before production, production, after production. The curve is high on the left, at research and development, design, parts and patents; lowest in the middle, at assembly; and high again on the right, at brand, marketing, sales and services.", cap:"The smile curve. The shape is a rule of thumb, not a law: some assembly, like advanced chip fabrication, captures high value."},
      "[[economic-upgrading|Upgrading]] means moving to higher-value positions: better processes, better products, new functions such as design, or new chains. East Asia is the classic story. Akamatsu Kaname’s **flying geese** model (published in English in 1962) pictured industries moving from leader to followers across Asia. Korea’s Samsung moved from assembling for others to its own brands and chips; Taiwan’s TSMC (founded 1987), a contract manufacturer that began with licensed technology, became the world leader in making advanced chips.",
      "Upgrading is not guaranteed. In captive garment chains, workers, most of them women, may gain jobs but little power. The collapse of the Rana Plaza factory building near Dhaka on 24 April 2013, which killed more than 1,100 people, led to a binding Accord on Fire and Building Safety between brands and unions. Critics such as Benjamin Selwyn speak of “global poverty chains”; defenders point to the jobs and rising wages that export work brought to Bangladesh, Viet Nam and others."
    ]},
    {h:"From efficiency to resilience", body:[
      "For decades firms optimised chains for cost. Then shocks exposed their fragility: the Tōhoku earthquake and the Thai floods (2011) stopped car and electronics plants worldwide; COVID-19 brought shortages of masks and chips; a ship blocked the Suez Canal in 2021. Governments and firms adopted new words:",
      {list:[
        "**[[reshoring|Reshoring]]**: bringing production home; **nearshoring**: moving it closer, as US firms have done to Mexico.",
        "**[[friend-shoring|Friend-shoring]]**: moving chains to trusted partners, a term US Treasury Secretary Janet Yellen used in April 2022.",
        "**[[de-risking|De-risking]]**: reducing specific dependencies without cutting ties, the term of European Commission President Ursula von der Leyen (March 2023), adopted by the G7 at Hiroshima (May 2023) as “de-risking, not decoupling”."
      ]},
      "What has changed? Studies such as Caroline Freund and co-authors (2024) find that after the US–China tariffs of 2018–19, US imports shifted from China to countries such as Viet Nam and Mexico, but those countries’ own imports of Chinese inputs rose. Chains got longer and more indirect, rather than less dependent on China. IMF economists (Gopinath and others, 2024) found trade and investment growing faster within geopolitical blocs than between them after 2022, with “connector” countries in between gaining."
    ]},
    {h:"Geoeconomics: when interdependence becomes a weapon", body:[
      "[[economic-security|Economic security]] treats supply chains, technology and finance as matters of national security. The idea is old. In *National Power and the Structure of Foreign Trade* (1945) {{albert-hirschman|Albert Hirschman}} showed how 1930s Germany concentrated its trade on small Southeast European partners, who came to depend on it far more than it depended on them. Asymmetric dependence is power.",
      "Henry Farrell and Abraham Newman’s [[weaponised-interdependence|“weaponized interdependence”]] (*International Security*, 2019) updated the point for networks (see {{geoeconomics}}). States that control **hubs**, such as dollar clearing, the SWIFT messaging system or chip-design software, can watch what flows through them (a **panopticon** effect) and cut others off (a **chokepoint** effect).",
      "Governments have built economic security into law: Japan’s Economic Security Promotion Act (May 2022), the US CHIPS and Science Act (August 2022), the EU’s Economic Security Strategy (June 2023) and China’s Export Control Law (in force December 2020). Officials have their own phrases: US National Security Adviser Jake Sullivan spoke of a “small yard, high fence” (tight controls on a few technologies), while China’s leaders since 2020 have stressed “dual circulation”, relying more on the domestic market and on self-reliance in key technologies. Many developing countries, from Indonesia to Brazil, combine such language with [[industrial-policy|industrial policy]] aimed at moving up value chains."
    ]},
    {h:"The tools: export controls, sanctions and coercion", body:[
      {table:[
        ["Tool","Examples (dated)"],
        ["[[export-controls|Export controls]]","US rules on advanced chips and chipmaking tools (October 2022), followed by Japanese and Dutch rules (2023); China’s controls on gallium and germanium (2023) and rare earths (April and October 2025, partly paused under the US–China truce)"],
        ["[[sanctions|Sanctions]]","Sweeping measures against Russia from 2022, including [[secondary-sanctions|secondary sanctions]] on third-country firms that deal with sanctioned targets"],
        ["Alleged [[economic-coercion|economic coercion]]","Japan’s tighter export controls on three chemicals to Korea (2019); Chinese tariffs and restrictions on Australian barley, wine and other goods (2020–2024); Chinese measures affecting Lithuania (2021–22)"]
      ]},
      "Coercion is a contested label. Japan’s government said its 2019 measures concerned export-control management; Korea’s called them retaliation for court rulings on wartime labour. China cited dumping and other trade reasons for its measures on Australia; Australia’s government called them coercion. Both disputes later eased: Japan restored Korea’s preferential status in 2023, and China lifted the duties on barley and wine in 2023–24. Neutral analysis reports each side’s stated reasons and the evidence for each.",
      "Responses include the EU’s [[anti-coercion-instrument|Anti-Coercion Instrument]] (in force December 2023) and the G7’s Coordination Platform on Economic Coercion (2023)."
    ]},
    {h:"Critical minerals and the arguments", body:[
      "[[critical-minerals|Critical minerals]] are those essential to key technologies and at risk of supply disruption: lithium, cobalt, nickel, graphite, rare earths and others. The International Energy Agency’s *Global Critical Minerals Outlook 2025* found China the leading refiner of 19 of 20 key energy minerals, with an average share of about 70%, and the top three refining countries holding 86% of supply on average in 2024. Producer countries are acting too: Indonesia’s nickel ore ban (Lesson 1), and a temporary suspension of cobalt exports by the Democratic Republic of the Congo (2025). Unit 16 looks at minerals and the energy transition (see {{energy-transition-politics}}).",
      {table:[
        ["Security case","Efficiency and openness case"],
        ["Dependence on one supplier is a vulnerability that can be used against you","Diversification is costly; duplicating chains raises prices and slows the energy transition"],
        ["Markets underprice the risk of disruption","Governments overestimate risks and protect favoured firms under a security label"],
        ["Hirschman and Farrell–Newman show dependence is power","Interdependence also restrains: the capitalist peace (see [[capitalist-peace]])"]
      ]},
      "Many governments in Southeast Asia, Africa, Latin America and the Gulf take a third position: welcome investment from all sides, avoid choosing camps, and bargain for processing at home. Unit 2 called this kind of strategy [[strategic-hedging|hedging]].",
      {terms:["global-value-chain","offshoring","gvc-governance","smile-curve","economic-upgrading","reshoring","friend-shoring","de-risking","economic-security","weaponised-interdependence","export-controls","secondary-sanctions","economic-coercion","anti-coercion-instrument","critical-minerals"]}
    ]}
   ],
   try:[
    {id:"e4u15-l4-x1", type:"number", q:"Invented figures: Country M exports a laptop for 500 dollars. It imported parts worth 410 dollars to make it. What **percentage** of the export’s value was added in M?", answer:18, tol:0.5, unit:"%", why:"Value added in M = 500 − 410 = 90 dollars. 90 ÷ 500 = 0.18 = 18%. Gross trade statistics would count all 500 dollars as M’s export.", wrongs:[
      {v:82, tol:0.5, why:"That is the imported share (410 ÷ 500), not the share added in M."},
      {v:90, tol:0.5, why:"90 dollars is the value added; the question asks for the percentage."},
      {v:22, tol:0.5, why:"That is 90 ÷ 410, measuring value added against imported parts instead of the export’s value."}
    ]},
    {id:"e4u15-l4-x2", type:"match", q:"Match each GVC governance type to an example.", pairs:[
      ["Market","A trader buys standard steel bars from whichever mill is cheapest","Simple products, price-based."],
      ["Modular","A contract manufacturer builds phones to a brand’s detailed specification","Suppliers follow codified standards."],
      ["Relational","A carmaker and a specialised supplier co-develop a new part over years","Trust and tacit know-how."],
      ["Captive","A small garment workshop sells all its output to one global brand on that brand’s terms","Dependence on a powerful buyer."],
      ["Hierarchy","A firm owns the mine, the smelter and the factory","Vertical integration inside one firm."]
    ]},
    {id:"e4u15-l4-x3", type:"mcq", q:"Using the smile curve, which move would most clearly count as **functional upgrading** for a firm that assembles bicycles for foreign brands?", options:[
      {t:"Launching its own design team and brand", ok:true, why:"Right. Functional upgrading means taking on new, higher-value functions such as design and marketing."},
      {t:"Assembling the same bicycles faster", why:"That is process upgrading: doing the same thing more efficiently."},
      {t:"Moving its assembly line to a cheaper country", why:"That is relocation, not a move up the curve."},
      {t:"Cutting wages to win more contracts", why:"That keeps the firm at the bottom of the curve."}
    ]},
    {id:"e4u15-l4-x4", type:"sort", q:"Which strategy does each move describe?", buckets:["Reshoring or nearshoring","Friend-shoring","De-risking"], items:[
      {t:"A US firm moves a plant from Asia to Mexico", b:0, why:"Closer to home: nearshoring."},
      {t:"A government subsidises chip factories so chips are made at home", b:0, why:"Bringing production back: reshoring."},
      {t:"A firm moves battery supply to countries in an allied trade agreement", b:1, why:"Choosing trusted partners: friend-shoring."},
      {t:"An economy keeps trading with a rival but caps reliance on it for a few critical inputs", b:2, why:"Targeted reduction of risk without cutting ties: de-risking."},
      {t:"A country screens foreign investment in a handful of sensitive technologies while welcoming it elsewhere", b:2, why:"Narrow, targeted measures: de-risking rather than decoupling."}
    ]},
    {id:"e4u15-l4-x5", type:"mcq", q:"Farrell and Newman describe a state using its control of a financial messaging hub to monitor transactions. Which effect is this?", options:[
      {t:"The panopticon effect", ok:true, why:"Right. Control of a hub lets a state see what flows through it."},
      {t:"The chokepoint effect", why:"That is cutting others off from the hub, not watching them."},
      {t:"The flying geese effect", why:"Akamatsu’s model is about industries moving across countries, not network power."},
      {t:"The smile curve", why:"That describes where value is added in a chain."}
    ]},
    {id:"e4u15-l4-x6", type:"spot", q:"A student’s paragraph on economic coercion. Tap each sentence that **is not neutral or not accurate**.", ask:"is not neutral or accurate", parts:[
      {t:"In 2019 Japan tightened export controls on three chemicals to Korea.", flag:false, why:"Accurate and neutral."},
      " ",
      {t:"Japan’s government said the measures concerned export-control management, while Korea’s government called them retaliation.", flag:false, why:"Attributes both positions: good practice."},
      " ",
      {t:"China’s measures against Australia were obviously pure punishment, and China’s stated reasons were lies.", flag:true, why:"Not neutral. Report China’s stated reasons and Australia’s view, and the evidence for each, without declaring motives as fact."},
      " ",
      {t:"China lifted its duties on Australian barley and wine in 2023–24.", flag:false, why:"Accurate."},
      " ",
      {t:"Hirschman first described asymmetric trade dependence in 2019.", flag:true, why:"Inaccurate. Hirschman wrote in 1945; Farrell and Newman’s article was 2019."}
    ]},
    {id:"e4u15-l4-x7", type:"mcq", q:"Studies of trade after the 2018–19 US–China tariffs found US imports shifting to Viet Nam and Mexico, while those countries imported more Chinese inputs. What does this suggest?", options:[
      {t:"Supply chains became longer and more indirect rather than less dependent on China", ok:true, why:"Right. Direct trade fell, but Chinese inputs often reached the US through third countries."},
      {t:"The US fully decoupled from China", why:"The evidence shows indirect links persisted."},
      {t:"Tariffs had no effect on trade patterns", why:"Direct US imports from China did shift."},
      {t:"Viet Nam and Mexico stopped trading with China", why:"Their imports from China rose."}
    ]}
   ],
   apply:{
    intro:"Trace the chains and the security debates around you.",
    tasks:[
     {t:"Trace one value chain", how:[
       "Pick a product with a clear label, such as clothing, a small appliance or coffee.",
       "Using the label, the brand’s supplier list (many publish one) and news sources, list at least four stages and the countries involved.",
       "Mark which stage you think captures the most value, using the smile curve, and which GVC governance type fits."
     ], write:"Product… Stages and countries… Highest-value stage… Governance type… What I could not find…"},
     {t:"Read an economic security strategy", how:[
       "Find one government’s economic security strategy or law summary (for example Japan’s, the EU’s, Australia’s, India’s or Brazil’s industrial policy plan).",
       "Note what it calls a risk, which tools it proposes and which countries or sectors it names.",
       "Write how a supporter and a critic would each assess it."
     ], write:"Document and date… Risks named… Tools… Countries or sectors named… Supporter’s view… Critic’s view…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “economic security” a new idea or Hirschman’s old one in new clothes?",
       "2. Does de-risking reduce vulnerability, or only move it?",
       "3. Can countries that host the low-value stages of value chains upgrade in a world of export controls and friend-shoring?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A traced value chain with its highest-value stage marked, notes on one economic security document from two perspectives, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"wdr2020", where:"Overview", note:"The World Bank’s account of how value chains affect growth, jobs and poverty. Read it as one institution’s view."},
    {book:"osecon", where:"Chapter 34 “Globalization and Protectionism”, section 34.2 “International Trade and Its Effects on Jobs, Wages, and Working Conditions”", note:"The economics of trade’s effects on workers, including in low-income countries."},
    {book:"ospol", where:"Chapter 16, section 16.5 “From the 1990s to the 2020s: Current Issues in IPE”", note:"A short survey of current issues."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u15-l5", title:"Debt and development finance", minutes:65,
   hook:{q:"AidData’s 2025 study tracked Chinese official-sector loans and grants worth about 2.2 trillion dollars from 2000 to 2023. Which country accepted the most official-sector credit (loans) from China?", options:["Pakistan","Angola","The United States","Sri Lanka"], answer:2, reveal:"**The United States.** AidData found that no country accepted more official-sector credit from China: more than 200 billion dollars for nearly 2,500 projects and activities. Much of it was credit from Chinese state-owned lenders to US companies and projects, such as large firms, gas export plants in Texas and Louisiana, data centres and company takeovers. The finding surprises people who picture Chinese lending only as roads and ports in poor countries. It shows why seminars ask for evidence before slogans, which is the spirit of this lesson on debt, development banks and new lenders."},
   goals:[
     "Explain why sovereign debt is hard to restructure and who the creditors are today",
     "Trace debt relief from HIPC and MDRI to the G20 Common Framework, and assess the Framework’s cases",
     "Explain what multilateral development banks do and the main reform proposals",
     "Weigh the evidence on China’s overseas lending and the “debt-trap” debate",
     "Describe what the 2025 Financing for Development conference in Seville agreed, and the reactions"
   ],
   learn:[
    {h:"Why sovereign debt is different", body:[
      {lead:"When a company cannot pay, a court divides what is left among its creditors. When a country cannot pay, there is no such court."},
      "[[sovereign-debt|Sovereign debt]] is money owed by governments. Creditors cannot seize a country, so repayment rests on reputation, legal contracts and negotiation. In 2001–03 the IMF’s Anne Krueger proposed an international bankruptcy procedure (the Sovereign Debt Restructuring Mechanism), but it was shelved after opposition from the United States, financial markets and some borrowers. Instead, contract terms do much of the work: [[collective-action-clause|collective action clauses]] let a large majority of bondholders bind the rest, limiting [[holdout-creditor|holdout creditors]] such as the funds that sued Argentina for over a decade until a 2016 settlement.",
      "Who the creditors are has changed:",
      {list:[
        "**Multilateral lenders** (the IMF, the World Bank, regional banks), which by convention are repaid first: **preferred creditor status**.",
        "**Official bilateral lenders**: the [[paris-club|Paris Club]] of mostly Western creditor governments (since 1956), and now China and other lenders outside it.",
        "**Private creditors**: bondholders and banks. Many African and Asian governments issued international bonds in the 2010s, when interest rates were low."
      ]},
      "UNCTAD’s *A World of Debt 2026* reported global public debt of 111 trillion dollars in 2025. Developing countries paid 995 billion dollars in net interest on public debt, and 3.7 billion people lived in the 51 developing countries that spend more on interest than on either health or education."
    ]},
    {h:"From HIPC to the Common Framework", body:[
      "After the Latin American debt crisis (Lesson 3) and campaigns such as Jubilee 2000, the IMF and World Bank launched the [[hipc-initiative|Heavily Indebted Poor Countries (HIPC) initiative]] (1996, enhanced 1999), followed by the Multilateral Debt Relief Initiative (2005), which cancelled debts owed to them. By the end of 2023, 37 of the 39 eligible countries had completed the process (see [[debt-relief]]).",
      "When COVID-19 struck, the G20 offered a [[dssi|Debt Service Suspension Initiative]] (May 2020 to December 2021), then in November 2020 the [[common-framework|Common Framework]], the first scheme bringing the Paris Club and newer lenders such as China to one table (see {{sovereign-debt-restructuring}}).",
      {fig:'<svg viewBox="0 0 340 392"><defs><marker id="u15a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><g stroke-width="2"><rect class="d-panel" x="10" y="8" width="320" height="42" rx="7"/><rect class="d-lup" x="10" y="62" width="320" height="42" rx="7"/><rect class="d-gold" x="10" y="116" width="320" height="42" rx="7"/><rect class="d-lup" x="10" y="170" width="320" height="42" rx="7"/><rect class="d-gold" x="10" y="224" width="320" height="42" rx="7"/><rect class="d-rose" x="10" y="278" width="320" height="42" rx="7"/><rect class="d-sage" x="10" y="332" width="320" height="42" rx="7"/></g><g class="d-ink" stroke-width="2"><path d="M170,50 V60" marker-end="url(#u15a5)"/><path d="M170,104 V114" marker-end="url(#u15a5)"/><path d="M170,158 V168" marker-end="url(#u15a5)"/><path d="M170,212 V222" marker-end="url(#u15a5)"/><path d="M170,266 V276" marker-end="url(#u15a5)"/><path d="M170,320 V330" marker-end="url(#u15a5)"/></g><text x="22" y="26">1 Debtor requests treatment</text><text class="s" x="22" y="42">under the Common Framework</text><text x="22" y="80">2 Debt sustainability analysis</text><text class="s" x="22" y="96">IMF and World Bank size the gap</text><text x="22" y="134">3 Official creditor committee</text><text class="s" x="22" y="150">Paris Club members, China and others</text><text x="22" y="188">4 Financing assurances</text><text class="s" x="22" y="204">then an IMF programme is approved</text><text x="22" y="242">5 Memorandum of understanding</text><text class="s" x="22" y="258">terms agreed with official creditors</text><text x="22" y="296">6 Comparable treatment</text><text class="s" x="22" y="312">sought from bondholders and banks</text><text x="22" y="350">7 Bilateral agreements</text><text class="s" x="22" y="366">each creditor signs and implements</text></svg>', alt:"Seven boxes linked by downward arrows. 1, the debtor requests treatment under the Common Framework. 2, a debt sustainability analysis by the IMF and World Bank sizes the gap. 3, an official creditor committee forms, with Paris Club members, China and others. 4, creditors give financing assurances, then an IMF programme is approved. 5, a memorandum of understanding sets terms with official creditors. 6, comparable treatment is sought from bondholders and banks. 7, bilateral agreements are signed and implemented by each creditor.", cap:"The Common Framework’s main steps, simplified. Each step has taken months, and in some cases years."},
      {table:[
        ["Case","Key dates"],
        ["Chad","Requested 2021; in November 2022 official creditors agreed a treatment with no debt cut, because higher oil prices had closed the financing gap; relief was to follow only if oil prices fell"],
        ["Zambia","Defaulted 2020; official creditors agreed terms in June 2023; “close to full completion” in April 2026"],
        ["Ghana","Terms agreed with official creditors in 2024; bilateral agreements still being signed in April 2026"],
        ["Ethiopia","Requested February 2021; memorandum finalised July 2025; talks with bondholders still pending in April 2026"]
      ]},
      "Critics, including many borrowers and campaigners, say the Framework is too slow, is open only to the poorer countries that were eligible for the DSSI (so Sri Lanka, which defaulted in 2022, restructured outside it) and leaves too much to creditors. Defenders note that later cases moved faster than Zambia’s and that China, as a co-chair of creditor committees, has taken part. A [[global-sovereign-debt-roundtable|Global Sovereign Debt Roundtable]] of creditors and debtors, set up in 2023, publishes a playbook to speed things up. Newer tools include [[climate-resilient-debt-clause|climate-resilient debt clauses]], which pause payments after a disaster, and [[debt-swap|debt-for-nature swaps]].",
      {ex:"A government collects 4,000 million in revenue and must pay 1,000 million a year in debt service: 25% of revenue. A restructuring lowers interest and stretches maturities, cutting annual debt service to 600 million. The share falls to 600 ÷ 4,000 = **15%**, freeing 400 million a year, more than many such governments spend on health.", label:"Worked example: why restructuring matters (invented figures)"},
      "The three traditions of Lesson 1 read debt differently. **Liberals** stress contracts, market discipline and the cost of default to future borrowing. **Nationalists** stress sovereignty and the leverage that creditors gain over policy. **Critical** scholars see debt as a channel of structural power in Strange’s finance structure, through which creditors and lenders’ conditions discipline borrowers, and ask who pays for adjustment."
    ]},
    {h:"Development banks and their reform", body:[
      "A [[multilateral-development-bank|multilateral development bank]] (MDB) borrows cheaply on markets, backed by its shareholder governments, and lends for development. The World Bank (1944; its concessional arm IDA from 1960) was followed by regional banks for Latin America (1959), Africa (1964) and Asia (1966), and more recently by the Asian Infrastructure Investment Bank (2016) and the BRICS New Development Bank (2015) (see {{multilateral-development-banks}}). The AIIB, proposed by China, drew most European and Asian economies as members; Japan and the United States stayed out.",
      "Since 2022 reform has centred on lending more from the same capital. A G20 review of the banks’ [[capital-adequacy-framework|capital adequacy frameworks]] (2022) argued that they were too cautious. The World Bank adopted an “Evolution Roadmap” (2023) and a new mission, “to end extreme poverty and boost shared prosperity on a livable planet”. An expert group led by Lawrence Summers and N. K. Singh (*The Triple Agenda*, 2023) called for much larger lending, and the G20 endorsed a roadmap for “better, bigger and more effective” MDBs in 2024. In December 2024 IDA’s 21st replenishment produced a package of about 100 billion dollars, much of it raised on markets on the strength of donors’ contributions.",
      "The debate is over priorities. Many borrowers want more lending, cheaper money and more votes (see {{bretton-woods-governance}}). Some shareholders, including the US administration since 2025, have urged the banks to focus on core missions rather than climate. Critics on the left still question conditions attached to loans."
    ]},
    {h:"China’s lending and the “debt-trap” debate", body:[
      "China became the world’s largest official bilateral lender in the 2010s, largely through state banks such as China Development Bank and the Export-Import Bank of China (see {{china-overseas-lending}}). AidData’s *Chasing China* (November 2025) tracked about 2.2 trillion dollars of official-sector loans and grants in 2000–2023 to some 200 countries and territories; it found that more than three-quarters of current lending supports upper-middle- and high-income countries. Earlier work found contracts with confidentiality clauses and collateral accounts (Gelpern and others, *How China Lends*, 2021) and large rescue loans to borrowers in distress (Horn, Parks, Reinhart and Trebesch, 2023).",
      {table:[
        ["The debt-trap thesis","Its critics"],
        ["Brahma Chellaney (2017) coined [[debt-trap-diplomacy|“debt-trap diplomacy”]]: lending designed to win strategic assets","Deborah Brautigam (2020) called it a “meme”: research found little evidence of lending designed to seize assets"],
        ["Hambantota port: in 2017 Sri Lanka leased it to a Chinese firm for 99 years","Sri Lanka’s government had proposed the port; the lease raised money that helped pay other debts (Brautigam and Rithmire, 2021)"],
        ["Opaque contracts and collateral give leverage","Lee Jones and Shahar Hameiri (Chatham House, 2020): recipient governments drive many projects"]
      ]},
      "A careful position separates questions. Was lending opaque and sometimes costly? Much evidence says yes. Was it designed to seize strategic assets? The evidence for that is weak. China’s government rejects the label and points to its part in the G20 debt initiatives. Unit 14 discusses China among [[non-dac-donors|non-DAC donors]]."
    ]},
    {h:"Financing for development: from Monterrey to Seville", body:[
      "The UN’s [[financing-for-development|Financing for Development]] process brings all the money questions together: aid, tax, trade, debt and the international financial system. Its conferences produced the Monterrey Consensus (2002), the Doha Declaration (2008) and the Addis Ababa Action Agenda (2015).",
      "The fourth conference met in **Seville, Spain, from 30 June to 3 July 2025**. Its outcome, the [[compromiso-de-sevilla|Compromiso de Sevilla]] (Sevilla Commitment), was adopted by consensus at the opening, after the United States withdrew from the process. It addresses the debt crisis, supports UN negotiations on international tax cooperation and calls for MDB reform. A Sevilla Platform for Action gathered about 130 voluntary initiatives, including a borrowers’ forum, an alliance promoting debt-pause clauses and a hub for debt swaps.",
      "Reactions divided along familiar lines. Supporters saw proof that multilateral cooperation on finance could still deliver text without the largest shareholder; many civil society groups said the debt language was too weak; others noted that the commitments are voluntary. As of November 2026, the test is implementation.",
      {tip:"Arguing a debt question in a seminar: name the creditors involved, the instrument (bond, bilateral loan, multilateral loan), the dates, and the source of every figure. Debt debates turn on details."},
      {terms:["sovereign-debt","collective-action-clause","holdout-creditor","paris-club","hipc-initiative","dssi","common-framework","global-sovereign-debt-roundtable","climate-resilient-debt-clause","debt-swap","multilateral-development-bank","capital-adequacy-framework","debt-trap-diplomacy","financing-for-development","compromiso-de-sevilla"]}
    ]}
   ],
   try:[
    {id:"e4u15-l5-x1", type:"number", q:"Invented figures: a government collects 5,000 million in revenue a year and pays 1,500 million in debt service. After restructuring, debt service falls to 1,000 million. What is debt service as a **percentage of revenue** after the restructuring?", answer:20, tol:0.5, unit:"%", why:"1,000 ÷ 5,000 = 0.2 = 20%. Before, it was 1,500 ÷ 5,000 = 30%, so the share fell by 10 percentage points.", wrongs:[
      {v:30, tol:0.5, why:"30% is the share before the restructuring."},
      {v:10, tol:0.5, why:"10 is the fall in percentage points, not the new share."},
      {v:33.3, tol:0.5, why:"That is the percentage cut in debt service (500 ÷ 1,500), not its share of revenue."}
    ]},
    {id:"e4u15-l5-x2", type:"order", q:"Put the main steps of a Common Framework case in order.", items:[
      {t:"The debtor requests treatment", why:"The process starts with the debtor’s request."},
      {t:"The IMF and World Bank analyse debt sustainability", why:"The analysis sizes the relief needed."},
      {t:"An official creditor committee gives financing assurances", why:"Assurances let the IMF approve a programme."},
      {t:"The IMF approves a programme", why:"Lending follows the assurances."},
      {t:"Official creditors sign a memorandum of understanding", why:"It sets the terms of the treatment."},
      {t:"Comparable treatment is sought from private creditors", why:"Bondholders and banks should give similar relief."}
    ]},
    {id:"e4u15-l5-x3", type:"match", q:"Match each creditor or tool with its feature.", pairs:[
      ["IMF and World Bank","Repaid first by convention: preferred creditor status","They are usually outside restructurings."],
      ["Paris Club","Group of mostly Western creditor governments, meeting since 1956","The traditional forum for official bilateral debt."],
      ["Bondholders","Private investors bound by collective action clauses","A large majority can bind the rest."],
      ["Holdout creditor","Refuses a restructuring deal and sues for full payment","The Argentina litigation ran until 2016."],
      ["Climate-resilient debt clause","Pauses payments after a natural disaster","Promoted at Seville in 2025."]
    ]},
    {id:"e4u15-l5-x4", type:"mcq", q:"Which statement best reflects Brautigam and Rithmire’s (2021) account of the Hambantota port?", options:[
      {t:"Sri Lanka’s government proposed the port, and the 2017 lease raised money that helped it pay other debts", ok:true, why:"Right. Their account challenges the claim that China designed the loan to seize the port."},
      {t:"China seized the port after Sri Lanka defaulted on its debts in 2022", why:"The lease was in 2017, five years before Sri Lanka’s default, and it was a lease, not a seizure."},
      {t:"The port was built with a World Bank loan", why:"It was financed by Chinese loans."},
      {t:"China forgave all of Sri Lanka’s debt in exchange for the port", why:"No such cancellation took place."}
    ]},
    {id:"e4u15-l5-x5", type:"sort", q:"Which area of development finance does each item mainly address?", buckets:["Debt","Tax and revenue","Development banks"], items:[
      {t:"A forum where borrowing countries share expertise before negotiating with creditors", b:0, why:"The Sevilla borrowers’ forum is about debt."},
      {t:"Clauses that pause repayments after a disaster", b:0, why:"Debt-pause clauses."},
      {t:"UN negotiations on international tax cooperation", b:1, why:"About raising revenue and taxing across borders."},
      {t:"A review of how much capital the banks hold against their loans", b:2, why:"The G20 capital adequacy review."},
      {t:"A replenishment of the World Bank’s fund for the poorest countries", b:2, why:"IDA is the World Bank’s concessional arm."}
    ]},
    {id:"e4u15-l5-x6", type:"spot", q:"A blog post on Chinese lending. Tap each claim that **is not supported** by the evidence in the lesson.", ask:"is not supported", parts:[
      {t:"AidData found that the United States received more Chinese official-sector credit than any other country in 2000–2023.", flag:false, why:"Supported by *Chasing China* (2025): more than 200 billion dollars, much of it to US companies and projects."},
      " ",
      {t:"Most of China’s current overseas lending goes to low-income African countries.", flag:true, why:"Not supported. AidData found more than three-quarters of current lending supports upper-middle- and high-income countries."},
      " ",
      {t:"Some Chinese loan contracts contain confidentiality clauses.", flag:false, why:"Supported by *How China Lends* (2021)."},
      " ",
      {t:"Research has proven that every Chinese loan is designed to seize strategic assets.", flag:true, why:"Not supported. Researchers such as Brautigam found little evidence of lending designed to seize assets."},
      " ",
      {t:"China has taken part in creditor committees under the G20 Common Framework.", flag:false, why:"Supported: it co-chaired committees for cases such as Zambia."}
    ]},
    {id:"e4u15-l5-x7", type:"mcq", q:"Sri Lanka defaulted in 2022 but did not restructure under the G20 Common Framework. Why?", options:[
      {t:"The Framework is open only to the poorer countries that were eligible for the earlier debt service suspension (DSSI), and Sri Lanka was not one of them", ok:true, why:"Right. Eligibility followed the DSSI list of mostly low-income countries; middle-income Sri Lanka was outside it. This gap is one of the main criticisms of the Framework."},
      {t:"China refused to let it join", why:"Eligibility is set by the Framework’s rules, not by one creditor."},
      {t:"Sri Lanka owed no money to official creditors", why:"It owed large sums to China, Japan, India and others."},
      {t:"The Framework closed in 2021", why:"The suspension initiative ended in 2021; the Framework continued."}
    ]}
   ],
   apply:{
    intro:"Work with the real data and documents of debt and development finance.",
    tasks:[
     {t:"One country’s debt picture", how:[
       "Choose a low- or middle-income country. Open the World Bank’s International Debt Statistics or the country’s latest IMF debt sustainability analysis (both free).",
       "Note its total external debt, the main creditor groups (multilateral, bilateral, private) and its debt service compared with revenue or exports, with the year of each figure.",
       "Write two sentences on its main risk and two on what a restructuring would need."
     ], write:"Country… Total external debt and year… Creditor groups… Debt service… Main risk… What a restructuring would need…"},
     {t:"Check a claim about Chinese lending", how:[
       "Find a news article or post that makes a claim about Chinese lending to a specific country.",
       "Check it against AidData’s Global Chinese Development Finance dataset or reports (free).",
       "Write whether the evidence supports, complicates or contradicts the claim."
     ], write:"Claim and source… What AidData shows… Supports, complicates or contradicts… Why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Has the Common Framework failed, or is it learning?",
       "2. Is “debt-trap diplomacy” a useful concept or a misleading one?",
       "3. Did the Seville conference matter? Judge it by outcomes, not declarations."
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A dated debt profile of one country, a fact-check of one claim about Chinese lending, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 16, sections 16.5 “From the 1990s to the 2020s: Current Issues in IPE” and 16.6 “Considering Poverty, Inequality, and the Environmental Crisis”", note:"Current issues, including debt and development."},
    {book:"osecon", where:"Chapter 32 “Macroeconomic Policy Around the World”, section 32.5 “Balance of Trade Concerns”", note:"Why large inflows of foreign capital can turn into crises, in plain economics."},
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"Background on the field’s view of development and finance."}
   ]
  }
  ],
  checkpoint:["e4u15-q02","e4u15-q06","e4u15-q08","e4u15-q12","e4u15-q15","e4u15-q19","e4u15-q23","e4u15-q27","e4u15-q31","e4u15-q35","e4u15-q39","e4u15-q43"],
  codex:[
   {id:"ipe-schools", title:"IPE as a field: traditions and schools", aka:["international political economy","global political economy","Open Economy Politics","British school of IPE","three traditions of IPE"], tags:["international political economy","theory"],
    summary:"How IPE emerged in the 1970s, its three classic traditions, and the debate between Open Economy Politics and the “British school”.",
    levels:{
     starter:[
      "International political economy (IPE) studies how power and wealth shape each other across borders: trade, money, finance, production and debt. The primer introduced its three classic lenses (see {{international-political-economy}}).",
      "Think of a football league. Economists study how the teams play; IPE also asks who wrote the rules, who owns the stadiums and who gets the television money.",
      "The field grew in the 1970s, when the end of fixed exchange rates, the oil shocks and demands from newly independent states made economics impossible to ignore in world politics. In 1970 Susan Strange complained of “mutual neglect” between international economics and international relations.",
      "Scholars still sort the field into three traditions (economic nationalism, liberalism and Marxist or critical approaches) and two broad styles of research: Open Economy Politics and the “British school”.",
      {key:"IPE asks who gets what from the world economy, who makes its rules, and how wealth and power turn into each other."}
     ],
     builder:[
      {table:[
        ["Tradition","Core claim","Key names"],
        ["Economic nationalism","The economy should serve the state’s power","Hamilton (1791), List (1841), Gilpin’s account (1987)"],
        ["Liberalism","Markets and open trade raise welfare; institutions help cooperation","Smith, Ricardo, Keohane"],
        ["Marxist and critical","The system is structured by class and by core–periphery hierarchy","Cox (1981), Wallerstein, Prebisch"]
      ]},
      "**Embedded liberalism** (Ruggie, 1982) describes the postwar compromise: open trade abroad combined with welfare states and capital controls at home. It draws on Karl Polanyi’s *The Great Transformation* (1944) and his **double movement**, in which societies push back against unregulated markets.",
      "**Open Economy Politics** (OEP), set out by David Lake (2009), explains policies in three steps: interests derived from economic theory, domestic institutions that aggregate them, and international bargaining. The **British school**, associated with Strange and Cox, is historical, interdisciplinary and openly concerned with power and justice. Benjamin Cohen’s *International Political Economy: An Intellectual History* (2008) popularised the contrast."
     ],
     pro:[
      "**The divide debated.** Cohen’s labels are shorthand: there are British quantitative scholars and American critical ones. A 2009 special issue of *Review of International Political Economy* debated his account; critics said OEP takes the system as given and narrows what counts as knowledge, while OEP scholars replied that clear, testable claims are what make a field cumulative.",
      "**Beyond the Anglosphere.** Latin American structuralism and dependency theory, Japanese and Korean debates on the developmental state, and scholarship in China, India and Africa asked IPE questions on their own terms. A “global IPE” literature, parallel to Global IR, tries to bring them in.",
      "**Newer strands.** Feminist IPE (care work, gendered labour in value chains, austerity), ecological political economy, and constructivist IPE (how economic ideas spread through institutions) cut across the three traditions.",
      "**Using it in a seminar.** Name your tradition and style explicitly. A good paper on, say, an export ban can combine an OEP account of who lobbied with a structural account of who gains power in the value chain."
     ]
    },
    related:["international-political-economy","susan-strange","robert-gilpin","hegemonic-stability-debate","marxism-ir","robert-cox"],
    read:[{book:"eir", where:"Chapter 8 “Global Political Economy”"},{book:"ospol", where:"Chapter 16, section 16.1 “The Origins of International Political Economy”"}],
    sources:[{t:"Lake, “Open economy politics: A critical review”, Review of International Organizations 4(3), 2009 (DOI)", url:"https://doi.org/10.1007/s11558-009-9060-y"},{t:"Strange, “International Economics and International Relations: A Case of Mutual Neglect”, International Affairs 46(2), 1970 (DOI)", url:"https://doi.org/10.2307/2613829"}],
    checked:"2026-11"},

   {id:"susan-strange", title:"Susan Strange", aka:["Strange, Susan","structural power","States and Markets","casino capitalism"], tags:["thinker","international political economy"],
    summary:"British scholar (1923–1998) who helped found IPE and defined structural power in the world economy.",
    levels:{
     starter:[
      "Susan Strange was a British journalist turned scholar who did more than almost anyone to make international political economy a field. In 1970 she argued that economists ignored power and IR scholars ignored money, a “case of mutual neglect”.",
      "Her best-known idea is **structural power**: not just getting others to do what you want, but shaping the frameworks within which everyone else must act. She found it in four structures: security, production, finance and knowledge.",
      "Picture a board game. Winning a move is relational power; writing the rules of the game is structural power.",
      {key:"Strange taught IPE to ask who shapes the structures of the world economy, not only who wins each bargain."}
     ],
     builder:[
      "**Key works.** “International Economics and International Relations: A Case of Mutual Neglect” (*International Affairs*, 1970); *Casino Capitalism* (1986), on the risks of deregulated finance; “The Persistent Myth of Lost Hegemony” (*International Organization*, 1987); *States and Markets* (1988); *The Retreat of the State* (1996); *Mad Money* (1998).",
      "**Structural power.** In *States and Markets* she defined it as the power to shape and determine the structures of the global political economy within which others have to operate. Power in one structure can be used in another: a security guarantor can shape its allies’ trade and finance.",
      "**Against the decline thesis.** In 1987 she rejected the fashionable claim that the United States had lost its hegemony: whatever its trade deficits, it still shaped the security, finance and knowledge structures.",
      "**The retreat of the state.** In 1996 she argued that markets, firms and other non-state actors were taking over authority, a theme Unit 13 met as private authority."
     ],
     pro:[
      "**Context.** Strange worked for years as a journalist before her academic career in London, and she helped found the British International Studies Association. She wrote against narrow disciplines and in a deliberately accessible style.",
      "**Legacy.** She is the founding figure of what Cohen called the British school. Her questions, “who gets what?” and “cui bono?”, are standard in critical IPE, and scholars of finance, chip supply chains and digital platforms still use her four structures.",
      "**Critiques.** Critics say structural power is hard to measure and can explain everything after the fact; others note that her account of the 1980s underplayed Japan’s and Europe’s financial weight. Defenders reply that her prediction of continued US structural power proved more accurate than the decline literature.",
      "**Today.** Debates on weaponised interdependence, dollar dominance and export controls are often framed as Strange’s structures in action."
     ]
    },
    related:["ipe-schools","hegemonic-stability-debate","dollar-dominance-debate","geoeconomics","private-authority"],
    sources:[{t:"Strange, “The Persistent Myth of Lost Hegemony”, International Organization 41(4), 1987 (DOI)", url:"https://doi.org/10.1017/S0020818300027600"},{t:"Strange, “International Economics and International Relations: A Case of Mutual Neglect”, International Affairs 46(2), 1970 (DOI)", url:"https://doi.org/10.2307/2613829"}],
    checked:"2026-11"},

   {id:"robert-gilpin", title:"Robert Gilpin", aka:["Gilpin, Robert","three ideologies of political economy","War and Change"], tags:["thinker","international political economy","realism"],
    summary:"US scholar (1930–2018) who organised IPE around three ideologies and linked hegemonic power to the openness of the world economy.",
    levels:{
     starter:[
      "Robert Gilpin was an American political scientist who brought realist thinking into international political economy. He asked how the rise and fall of great powers shapes the world economy.",
      "He is the source of the standard classroom map of IPE: three “ideologies” of political economy, **liberalism**, **nationalism** and **Marxism**, each with its own view of how states and markets relate.",
      "Think of a ship’s captain. When a strong captain keeps order, trade flows; when the captain weakens, the crew may fight. Gilpin thought the world economy worked rather like that.",
      {key:"Gilpin linked power and markets: an open world economy, he argued, rests on the power of a leading state."}
     ],
     builder:[
      "**Key works.** *US Power and the Multinational Corporation* (1975); *War and Change in World Politics* (1981), on how rising and declining powers clash; *The Political Economy of International Relations* (1987); *Global Political Economy* (2001).",
      "**Three ideologies.** In 1987 he set out liberalism (markets serve individuals and raise welfare), economic nationalism (the economy should serve state power) and Marxism (the economy is shaped by class and capitalism’s contradictions). He is usually read as a realist who nonetheless accepted much of liberal economics.",
      "**Hegemony.** With Kindleberger and Krasner he is associated with hegemonic stability theory: a liberal world economy needs a leader, and the spread of growth to others slowly erodes that leader’s position."
     ],
     pro:[
      "**Use today.** *War and Change* underlies power-transition debates, including Allison’s “Thucydides’s Trap” (Unit 2). His three ideologies remain the opening frame of many IPE syllabuses, though critics say the map is too state-centred and leaves out feminist, ecological and postcolonial perspectives.",
      "**Critiques.** Liberals argue that institutions can outlast hegemony (Keohane, 1984); critics of hegemonic stability argue that “leadership” can mean coercion. Others note that Gilpin’s concern about multinational corporations anticipated later debates on global value chains and corporate power.",
      "**In a seminar.** Use Gilpin to frame a question (“does openness depend on a leader?”), then test it against cases such as the 1930s, the 1970s and the trade shifts of 2025–2026, with attention to evidence on each side."
     ]
    },
    related:["ipe-schools","hegemonic-stability-debate","susan-strange","realism"],
    sources:[{t:"Gilpin, The Political Economy of International Relations (1987), publisher record (DOI)", url:"https://doi.org/10.1515/9781400882779"}],
    checked:"2026-11"},

   {id:"albert-hirschman", title:"Albert O. Hirschman", aka:["Hirschman, Albert","National Power and the Structure of Foreign Trade","asymmetric dependence","exit, voice and loyalty"], tags:["thinker","international political economy","development"],
    summary:"Economist (1915–2012) who showed in 1945 how trade dependence can be turned into political power.",
    levels:{
     starter:[
      "Albert Hirschman was an economist born in Berlin who fled Nazi Germany, helped refugees escape from France in 1940, and later worked on development in Latin America. His ideas cross economics, politics and history.",
      "His first book, *National Power and the Structure of Foreign Trade* (1945), asked how a big country can use trade as a weapon. His answer: if a small country depends on you for most of its exports, and you depend on it for very little, you hold power over it.",
      "Picture a corner shop that sells nearly all its bread to one hotel. If the hotel threatens to buy elsewhere, the shop has little choice but to listen.",
      {key:"Asymmetric dependence is power: the side that would lose less from cutting a tie can use the tie to influence the other."}
     ],
     builder:[
      "**The argument of 1945.** Hirschman studied 1930s Germany, which concentrated its trade on small Southeast European states. Those states came to depend on the German market far more than Germany depended on them. He distinguished the **supply effect** of trade (gaining goods) from the **influence effect** (gaining leverage over partners).",
      "**Other works.** *The Strategy of Economic Development* (1958), on backward and forward linkages and unbalanced growth; *Exit, Voice, and Loyalty* (1970), on how people respond to decline in firms and states; *The Passions and the Interests* (1977), on early arguments that commerce tames politics.",
      "**Why IPE returns to him.** Economic security policy, export controls and coercion debates (Lesson 4) all rest on his insight. Farrell and Newman’s “weaponized interdependence” (2019) extends it from bilateral trade to global networks."
     ],
     pro:[
      "**Influence and its limits.** Later research asks when dependence actually yields compliance. Coercion often fails when the target sees its sovereignty or identity at stake, or when it can find alternative partners, which is why diversification and “de-risking” matter.",
      "**Development.** His linkage ideas influenced debates on industrial policy and on whether resource exporters can build processing at home, a live issue in critical minerals.",
      "**Style.** He favoured “possibilism” over grand theory: looking for unexpected paths rather than iron laws. Seminars cite him both as a realist of trade power and as a sceptic of deterministic models."
     ]
    },
    related:["geoeconomics","global-value-chains","ipe-schools"],
    sources:[{t:"Hirschman, National Power and the Structure of Foreign Trade (1945), publisher record (DOI)", url:"https://doi.org/10.1525/9780520378179"},{t:"Farrell & Newman, “Weaponized Interdependence”, International Security 44(1), 2019 (DOI)", url:"https://doi.org/10.1162/isec_a_00351"}],
    checked:"2026-11"},

   {id:"hegemonic-stability-debate", title:"Hegemonic stability and its critics", aka:["hegemonic stability theory","HST","stabiliser","Kindleberger"], tags:["international political economy","theory","hegemony"],
    summary:"The claim that an open world economy needs a dominant stabiliser, and the arguments of its critics from Keohane to Strange.",
    levels:{
     starter:[
      "Hegemonic stability theory says that an open, stable world economy needs one leading country, a **hegemon**, willing and able to keep it running. Units 1 and 2 introduced it (see [[hegemonic-stability-theory]]).",
      "Picture a shared garden. If one neighbour waters it, mends the fence and settles quarrels, it thrives; if nobody does, it decays, even though everyone would benefit.",
      "The idea starts with Charles Kindleberger’s *The World in Depression, 1929–1939* (1973): the slump was so deep because Britain could not and the United States would not act as stabiliser.",
      {key:"The theory links openness to leadership; its critics argue that cooperation can survive without one leader, and that leaders can be coercive."}
     ],
     builder:[
      "**Kindleberger’s stabiliser** keeps its market open for others’ goods in a slump, keeps lending when others stop, and acts as lender of last resort in a panic.",
      "**Political versions.** Stephen Krasner (“State Power and the Structure of International Trade”, *World Politics*, 1976) argued that a dominant, productive state prefers openness and can impose it. Robert Gilpin tied the rise and decline of hegemons to the opening and closing of the world economy. Robert Keohane named and criticised the theory.",
      {table:[
        ["Critic","Argument"],
        ["Keohane (1984)","Institutions sustain cooperation after hegemony"],
        ["Snidal (1985)","A small group can supply public goods; hegemons may be coercive"],
        ["Strange (1987)","US structural power had not declined"],
        ["Historians","Nineteenth-century Britain did not impose openness as the theory claims"]
      ]}
     ],
     pro:[
      "**Benevolent or coercive?** Snidal distinguished a benevolent hegemon that pays for public goods from a coercive one that makes others pay. The distinction matters for reading US policy since 2025: some see a hegemon abandoning its role, others a hegemon using its power more openly.",
      "**Evidence.** Quantitative tests have found mixed links between hegemony and openness. The 1930s and the period after 1945 fit; the 1970s and 1980s, when US dominance fell but openness grew, fit less well.",
      "**Today’s versions.** Debates on “who stabilises” now include the Fed’s swap lines (Lesson 3), China’s rescue lending (Lesson 5) and groups such as the G20. As of November 2026 scholars disagree on whether the system is moving to shared leadership, rival blocs or no leadership; present these as positions with evidence, not as predictions."
     ]
    },
    related:["neoliberal-institutionalism","susan-strange","robert-gilpin","ipe-schools","dollar-dominance-debate"],
    sources:[{t:"Krasner, “State Power and the Structure of International Trade”, World Politics 28(3), 1976 (DOI)", url:"https://doi.org/10.2307/2009974"},{t:"Snidal, “The limits of hegemonic stability theory”, International Organization 39(4), 1985 (DOI)", url:"https://doi.org/10.1017/S002081830002703X"}],
    checked:"2026-11"},

   {id:"wto-in-crisis", title:"The WTO and its crisis", aka:["WTO crisis","Appellate Body crisis","MPIA","Doha Round","MC14"], tags:["trade","international organisations"],
    summary:"How the WTO negotiates and settles disputes, why its Appellate Body stopped working in 2019, and the state of play after MC14 (2026).",
    levels:{
     starter:[
      "The World Trade Organization (WTO), founded in 1995, does three jobs: it negotiates trade rules, monitors them and settles disputes (see {{global-trade}}).",
      "Two of those jobs are in trouble. Negotiations among 166 members, by consensus, rarely produce big deals: the Doha Round, launched in 2001, stalled. And since December 2019 the Appellate Body, which hears appeals in disputes, has had too few members to work, because the United States has blocked appointments.",
      "Think of a football league whose referees still make calls, but whose appeals panel has no members. A team that loses can appeal, and the result is never confirmed.",
      {key:"The WTO still matters for its rules and data, but its ability to negotiate and to enforce rulings is weaker than at any time since 1995."}
     ],
     builder:[
      "**Negotiation.** The Uruguay Round (1986–94) was a single undertaking. Doha (2001) stalled over agriculture and special treatment for emerging economies. Members have since made narrower deals: Trade Facilitation (Bali, 2013), Fisheries Subsidies (in force September 2025) and plurilateral texts on investment facilitation and e-commerce.",
      "**Disputes.** US administrations argue that the Appellate Body overreached, treated rulings as precedent and ignored deadlines. Most other members want appointments restored and reforms discussed in parallel. Appeals now go “into the void” unless both parties are in the **MPIA** (2020), which had 61 members by MC14.",
      "**MC14** (Yaoundé, 26–30 March 2026) ended without a ministerial declaration; the moratorium on duties on electronic transmissions lapsed; members agreed to keep working on fisheries and dispute settlement reform."
     ],
     pro:[
      "**Security exceptions.** GATT Article XXI lets members act for “essential security interests”. *Russia – Traffic in Transit* (2019) held that panels can review such claims for good faith; the United States regards them as self-judging. As tariffs and export controls are increasingly justified by security, this is a central fault line.",
      "**Development.** Many developing members defend special and differential treatment and food-security stockholding; some developed members argue that self-designation as “developing” lets large economies avoid obligations.",
      "**Readings of the crisis.** Liberal institutionalists see a regime in decline but still providing information and focal rules; realists see rules bending to power; others see a shift to plurilateral and regional rule-making. Keep MC14’s facts separate from forecasts about MC15."
     ]
    },
    related:["global-trade","trade-agreements-regional","tariff-politics-2025-2026","contested-multilateralism"],
    read:[{book:"osecon", where:"Chapter 34, section 34.4 “How Governments Enact Trade Policy: Globally, Regionally, and Nationally”"}],
    sources:[{t:"WTO: Fourteenth Ministerial Conference (MC14), Yaoundé", url:"https://www.wto.org/english/thewto_e/minist_e/mc14_e/mc14_e.htm"},{t:"WTO: Fisheries subsidies", url:"https://www.wto.org/english/tratop_e/rulesneg_e/fish_e/fish_e.htm"},{t:"World Economic Forum: “MC14 in Yaoundé: What the WTO delivered, what it did not” (April 2026)", url:"https://www.weforum.org/stories/2026/04/mc14-yaounde-wto-trade/"}],
    checked:"2026-11"},

   {id:"trade-agreements-regional", title:"Regional and mega-regional trade agreements", aka:["RTAs","mega-regionals","CPTPP","RCEP","AfCFTA","EU single market","spaghetti bowl"], tags:["trade","regionalism"],
    summary:"Why regional trade agreements multiplied, and how the EU single market, CPTPP, RCEP and AfCFTA compare (as of November 2026).",
    levels:{
     starter:[
      "Besides the WTO’s global rules, countries sign agreements with smaller groups of partners. These **regional trade agreements** cut tariffs further and often add rules on services, investment and standards.",
      "The largest are called **mega-regionals**: the CPTPP around the Pacific, RCEP in East Asia and the Pacific, and the African Continental Free Trade Area (AfCFTA). The EU single market is the deepest of all.",
      "Picture a city with a general speed limit (the WTO) and several gated neighbourhoods with their own extra rules (regional agreements). Some households belong to more than one.",
      {key:"Regional agreements can deepen trade among members, but overlapping rules can also complicate trade for everyone."}
     ],
     builder:[
      {table:[
        ["Agreement","Members (as of Nov 2026)","Notes"],
        ["EU single market","27 EU states (plus EEA partners)","Since 1993; free movement of goods, services, capital, people"],
        ["CPTPP","12 parties","Signed 2018; UK joined Dec 2024; Costa Rica’s talks substantially concluded May 2026"],
        ["RCEP","15 members","Signed 2020, in force 2022; links China, Japan and Korea"],
        ["AfCFTA","54 signatories, 50 ratifications","In force 2019; trading from 2021"]
      ]},
      "**Rules of origin** decide whether a product counts as “from” a member and so qualifies for lower tariffs. Jagdish Bhagwati called overlapping agreements a “spaghetti bowl”. Economists debate whether regional deals are **building blocks** (testing rules that later go global) or **stumbling blocks** (diverting trade and attention from the WTO)."
     ],
     pro:[
      "**Depth versus breadth.** CPTPP has deep rules on state-owned enterprises, labour, environment and digital trade; RCEP is shallower but covers a larger market. Analysts often describe them as complementary routes for Asia-Pacific integration.",
      "**Accession politics.** China and Taiwan both applied to the CPTPP in September 2021; as of mid-2026 neither had an accession working group, while Uruguay did and Costa Rica’s talks had been substantially concluded; Indonesia, the Philippines and the UAE were in preparatory discussions. CPTPP ministers have also launched dialogues with the EU and ASEAN.",
      "**Implementation.** AfCFTA’s challenge is putting tariff schedules and rules of origin into practice; the secretariat’s figures show fewer states trading under it than have ratified it. Seminar papers should distinguish signature, ratification, entry into force and actual use."
     ]
    },
    related:["wto-in-crisis","global-trade","comparative-regionalism","regional-organizations"],
    sources:[{t:"Australian DFAT: CPTPP Joint Ministerial Statement, 26 June 2026", url:"https://www.dfat.gov.au/trade/agreements/in-force/cptpp/commission-meetings/comprehensive-and-progressive-agreement-trans-pacific-partnership-cptpp-joint-ministerial-statement-expansion-implementation-and-cooperation-26-june-2026"},{t:"AfCFTA Secretariat", url:"https://au-afcfta.org/"}],
    checked:"2026-11"},

   {id:"tariff-politics-2025-2026", title:"Tariff politics, 2025–2026", aka:["US tariffs 2025","reciprocal tariffs","IEEPA tariffs","Learning Resources v. Trump","Section 301","US–China truce"], tags:["trade","current affairs"],
    summary:"A dated, neutral account of the US tariff changes of 2025–2026, the court ruling, partners’ responses and the arguments on each side, as of 12 November 2026.",
    levels:{
     starter:[
      "From early 2025 the United States raised tariffs on imports from almost every country, to levels not seen since the 1930s by most estimates. Partners responded in different ways: some retaliated, some negotiated, many looked for other markets.",
      "In February 2026 the US Supreme Court ruled that the emergency law used for many of these tariffs did not allow them. The government then used other trade laws to impose new tariffs.",
      "For students of IPE this is a live case of how domestic institutions (courts, laws, elections) and international bargaining shape trade policy.",
      {key:"Describe the tariffs with dates and legal bases, and report who argues what with evidence; do not predict how the story ends."}
     ],
     builder:[
      {ol:[
        "**2025**: tariffs under the International Emergency Economic Powers Act (IEEPA) on Canada, Mexico and China; on 2 April “reciprocal” tariffs on most partners (10% baseline, higher rates from August); Section 232 tariffs on steel, aluminium, cars and other sectors.",
        "**US–China**: mutual tariffs above 100% in April 2025; a Geneva deal in May; a one-year truce in Busan in October 2025, extended in November 2026 to January 2027.",
        "**20 February 2026**: *Learning Resources v. Trump*: the Supreme Court held 6–3 that IEEPA does not authorise tariffs.",
        "**24 February 2026**: a temporary 10% tariff under Section 122 (limited to 150 days).",
        "**24 July 2026**: tariffs of mostly 10–12.5% on 60 partners under Section 301, challenged in court; Section 232 tariffs remain."
      ]},
      "Partners’ responses included retaliation (China, Canada), framework deals (the UK, Japan, the EU, Korea, several Southeast Asian states) and diversification (CPTPP expansion, new bilateral deals)."
     ],
     pro:[
      "**Supporters’ case.** Robert Lighthizer’s *No Trade Is Free* (2023) argues that persistent deficits reflect partners’ policies and that tariffs can rebuild industry and bargaining power. Supporters also cite revenue and security of supply.",
      "**Critics’ case.** Studies of the 2018–19 tariffs (Amiti, Redding and Weinstein, 2019; Fajgelbaum and others, 2020) found nearly complete pass-through to US buyers. Macroeconomists argue that the overall trade balance reflects saving and investment. Many WTO members argue that the measures break most-favoured-nation commitments.",
      "**Open questions as of November 2026**: refunds of IEEPA duties, court challenges to the Section 301 measures, and the US–China truce. Keep these dated, and use the latest official sources."
     ]
    },
    related:["wto-in-crisis","global-trade","geoeconomics","trade-agreements-regional"],
    sources:[{t:"Pillsbury: “Supreme Court Invalidates IEEPA Tariffs: Implications and Next Steps” (February 2026)", url:"https://pillsburylaw.com/en/news-and-insights/supreme-court-invalidates-ieepa-tariffs-implications-next-steps.html"},{t:"Morgan Lewis: “US Administration Rebuilds Global Tariff Program Under Section 301” (July 2026)", url:"https://www.morganlewis.com/pubs/2026/07/us-administration-rebuilds-global-tariff-program-under-section-301"},{t:"The National: China extends pause on rare earth export curbs for two months (9 November 2026)", url:"https://www.thenationalnews.com/news/us/2026/11/09/china-extends-pause-on-rare-earth-export-curbs-for-two-months/"}],
    checked:"2026-11"},

   {id:"international-monetary-system", title:"The international monetary system", aka:["Bretton Woods system","par value system","Nixon shock","impossible trinity","monetary trilemma","exchange-rate regimes"], tags:["money and finance","international political economy"],
    summary:"How exchange rates and international money have been organised since 1944, and the trade-offs captured by the impossible trinity.",
    levels:{
     starter:[
      "Every international purchase needs an exchange of money. The international monetary system is the set of rules and habits that decide how currencies are valued against each other and which money the world uses for savings and trade.",
      "From 1944 to 1971 the Bretton Woods system pegged currencies to the dollar, and the dollar to gold. Since 1973 the main currencies have floated, while many countries peg or manage their rates.",
      "A useful rule of thumb is the **impossible trinity**: a country cannot have a fixed exchange rate, free movement of capital and its own monetary policy all at once. It must pick two.",
      {key:"Exchange-rate choices are political: each option gives up something, and different groups gain or lose."}
     ],
     builder:[
      "**Bretton Woods.** Par values within narrow bands; gold convertibility for foreign central banks at 35 dollars an ounce; capital controls allowed. Ruggie called the whole compromise embedded liberalism.",
      "**Breakdown.** Robert Triffin (1960) predicted the dilemma: a growing world needed dollars, but more dollars abroad undermined their gold backing. Nixon suspended convertibility on 15 August 1971; by 1973 major currencies floated; an amendment to the IMF’s Articles (in force 1978) let members choose regimes.",
      {table:[
        ["Choice","Gives up","Examples"],
        ["Fixed rate + free capital","Own monetary policy","Hong Kong (peg since 1983), euro members"],
        ["Fixed rate + own policy","Free capital movement","Bretton Woods era; China, partly"],
        ["Free capital + own policy","Fixed rate (it floats)","Japan, United States"]
      ]}
     ],
     pro:[
      "**Dilemma, not trilemma?** Hélène Rey (2013) argued that a global financial cycle driven by US monetary policy limits even floating countries’ independence unless they manage capital flows; others find that floating still gives meaningful insulation.",
      "**Capital controls.** Once seen as heresy, they were rehabilitated in part after Malaysia’s 1998 controls and the IMF’s 2012 institutional view. Debate continues over when they work and whom they protect.",
      "**Political economy of regimes.** OEP research (for example Jeffry Frieden’s work) links exchange-rate preferences to sectors: exporters often favour a weaker currency, importers and those with foreign-currency debts a stronger or stable one.",
      "**Distinguish** the monetary trilemma from Rodrik’s political trilemma (Unit 1), which concerns hyperglobalisation, democracy and national sovereignty."
     ]
    },
    related:["bretton-woods-institutions","dollar-dominance-debate","financial-crises-ipe","bretton-woods-governance"],
    read:[{book:"osecon", where:"Chapter 29, section 29.4 “Exchange Rate Policies”"}],
    sources:[{t:"Ruggie, “International regimes, transactions, and change: embedded liberalism in the postwar economic order”, International Organization 36(2), 1982 (DOI)", url:"https://doi.org/10.1017/S0020818300018993"},{t:"OpenStax, Principles of Economics 3e (Chapter 29)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},

   {id:"dollar-dominance-debate", title:"The dollar and the de-dollarisation debate", aka:["dollar dominance","reserve currency","exorbitant privilege","de-dollarization","de-dollarisation"], tags:["money and finance","current affairs"],
    summary:"The US dollar’s international roles, why they matter for power, and what the evidence says about de-dollarisation as of November 2026.",
    levels:{
     starter:[
      "The US dollar is the world’s main international currency. Governments hold it as savings, firms price trade in it, and traders use it as the bridge between other currencies.",
      "This gives the United States advantages that economists call an “exorbitant privilege”: it can borrow cheaply in its own currency, and control of dollar payments gives it leverage, for example through sanctions.",
      "**De-dollarisation** means reducing reliance on the dollar. Since 2022, when Western governments froze much of Russia’s central bank reserves, the debate has grown louder.",
      {key:"The evidence shows gradual diversification of reserves, not a sudden replacement of the dollar."}
     ],
     builder:[
      {table:[
        ["Indicator","Figure (date)"],
        ["Dollar share of FX reserves","56.7% (IMF COFER, Q2 2026); about 71% in 1999"],
        ["Euro, yen, renminbi","20.6%, 5.0%, 2.1% (Q2 2026)"],
        ["Dollar in FX trading","One side of 89% of trades (BIS, April 2025)"],
        ["Central bank gold buying","1,092 tonnes in 2024; 863 tonnes in 2025 (World Gold Council)"]
      ]},
      "**Arguments for continued dominance:** network effects, the depth and liquidity of US Treasury markets, legal protections, and the lack of an open, convertible rival (Prasad, *The Dollar Trap*, 2014; Eichengreen, *Exorbitant Privilege*, 2011).",
      "**Arguments for gradual change:** sanctions risk, US debt and political risk; growth of non-traditional reserve currencies (Arslanalp, Eichengreen and Simpson-Bell, 2022); gold buying; alternative payment systems such as China’s CIPS (2015); local-currency trade deals."
     ],
     pro:[
      "**Power.** In Strange’s terms the dollar is structural power in the finance structure; Farrell and Newman show how dollar clearing and messaging hubs enable surveillance and exclusion. Swap lines (2008; standing lines with five central banks since 2013) decide who gets dollars in a panic.",
      "**Reading COFER carefully.** Shares move with exchange rates: when the dollar rises, its share rises mechanically. The IMF now publishes notes on valuation effects; check them before calling a change a trend.",
      "**Positions.** Some governments (including in the BRICS) promote local-currency settlement; others, such as India’s, have said they do not seek to replace the dollar. As of November 2026 scholars disagree about pace and end point; present the indicators and the arguments rather than forecasts."
     ]
    },
    related:["international-monetary-system","brics","geoeconomics","susan-strange"],
    sources:[{t:"IMF Data Brief: COFER, second quarter 2026 (30 September 2026)", url:"https://data.imf.org/en/news/imf%20data%20brief%20september%2030"},{t:"BIS: Triennial Survey 2025 press release", url:"https://www.bis.org/press/p250930.htm"},{t:"World Gold Council: Gold Demand Trends, full year 2025", url:"https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025"}],
    checked:"2026-11"},

   {id:"financial-crises-ipe", title:"Financial crises in IPE", aka:["debt crisis 1982","Asian financial crisis","global financial crisis","euro crisis","sudden stop","original sin","moral hazard","contagion"], tags:["money and finance","history"],
    summary:"Four major financial crises since 1980, the concepts scholars use to explain them, and the political debates about rescues and conditions.",
    levels:{
     starter:[
      "Financial crises happen when lenders suddenly lose confidence: money stops flowing in, or rushes out, and banks, firms or governments cannot pay. The effects reach jobs, prices and politics.",
      "Four crises shape seminar debates: the Latin American debt crisis (1982), the Asian financial crisis (1997–98), the global financial crisis (2008) and the euro area crisis (2010–12).",
      "Think of a crowded hall where someone shouts “fire”. Even if there is no fire, the rush to the door can do real damage. Finance can behave like that.",
      {key:"Crises reveal who has access to emergency money, and on what terms: a core IPE question."}
     ],
     builder:[
      "**Concepts.** A **sudden stop** (Guillermo Calvo, 1998) is an abrupt halt in capital inflows. **Original sin** (Eichengreen and Hausmann, 1999) is the inability to borrow abroad in one’s own currency, so devaluation swells debts. **Contagion** is the spread of panic across countries. **Moral hazard** is the risk that rescues encourage reckless lending.",
      {table:[
        ["Crisis","Key features","Responses"],
        ["Latin America 1982","Petrodollar loans; US interest rate rise; Mexico’s August 1982 announcement","Structural adjustment; Brady Plan 1989"],
        ["Asia 1997–98","Baht floated 2 July 1997; currency mismatches","IMF programmes; Malaysia’s controls; Chiang Mai Initiative 2000"],
        ["Global 2008","US housing; Lehman Brothers","Fed swap lines; G20 summits; bank regulation"],
        ["Euro area 2010–12","No national currency; bank–sovereign loop","Bailouts; ESM; ECB pledge July 2012"]
      ]}
     ],
     pro:[
      "**Rescues and conditions.** Critics (Stiglitz, 2002; Kentikelenis, Stubbs and King, 2016) argue that IMF conditions deepened downturns and narrowed policy space; the IMF’s own evaluators criticised parts of its Asian programmes; defenders stress that countries arrive in crisis and that programmes now protect social spending.",
      "**Regional self-insurance.** Asia’s response was to hold large reserves and build the Chiang Mai Initiative and AMRO; critics call large reserves costly, supporters call them insurance against humiliation.",
      "**Classic reading.** Kindleberger’s *Manias, Panics, and Crashes* (1978) and Hyman Minsky’s financial instability hypothesis argue that stability itself breeds risk-taking. Use them to frame, then test with evidence from a specific crisis."
     ]
    },
    related:["international-monetary-system","bretton-woods-governance","post-cold-war-order","sovereign-debt-restructuring"],
    sources:[{t:"Kentikelenis, Stubbs & King, “IMF conditionality and development policy space, 1985–2014”, Review of International Political Economy 23(4), 2016 (DOI)", url:"https://doi.org/10.1080/09692290.2016.1174953"},{t:"OpenStax, Principles of Economics 3e (Chapters 29 and 32)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},

   {id:"global-value-chains", title:"Global value chains", aka:["GVCs","global commodity chains","smile curve","upgrading","GVC governance"], tags:["production","trade","development"],
    summary:"How production is split across countries and firms, who captures the value, and how countries try to upgrade.",
    levels:{
     starter:[
      "A global value chain (GVC) is all the steps that turn an idea into a product in a customer’s hands, spread across several countries: design, parts, assembly, shipping, marketing and service.",
      "The World Bank estimates that GVCs account for almost half of world trade (*World Development Report 2020*).",
      "The value is not shared evenly. Design, key parts and brands often earn much more than assembly. An iPhone 3G assembled in China in 2009 added only about 6.50 dollars of value there, out of about 179 dollars of production cost.",
      {key:"In a value chain, where you sit matters more than what your export statistics say."}
     ],
     builder:[
      "**Origins.** Gereffi (1994) contrasted producer-driven chains (carmakers) with buyer-driven chains (retailers and brands). Gereffi, Humphrey and Sturgeon (2005) proposed five governance types: market, modular, relational, captive and hierarchy.",
      "**Why now?** Baldwin’s *The Great Convergence* (2016) argues that the communication revolution from about 1990 let firms offshore stages of production with their know-how.",
      "**Upgrading** can be in process, product, function (taking on design or branding) or chain. East Asia’s “flying geese” (Akamatsu, 1962) and the rise of firms in Korea and Taiwan are the classic success stories; many garment exporters remain in captive chains.",
      "**Data.** Value-added databases such as the OECD’s TiVA show how much of an export’s value was added where."
     ],
     pro:[
      "**Debates.** The World Bank (2020) argues that GVC participation boosts income and poverty reduction; critics such as Benjamin Selwyn argue that chains can lock workers into low wages (“global poverty chains”); feminist scholars stress the gendered labour of export work.",
      "**Social upgrading.** After the Rana Plaza collapse (2013) the Accord on Fire and Building Safety bound brands to inspections; research asks whether such private regulation works.",
      "**Reconfiguration.** Since 2018, tariffs, the pandemic and security policies have encouraged nearshoring and friend-shoring. Evidence (Freund and others, 2024; Gopinath and others, 2024) suggests chains have lengthened through connector countries more than they have broken."
     ]
    },
    related:["geoeconomics","global-trade","albert-hirschman","political-economic-datasets"],
    read:[{book:"wdr2020", where:"Overview"}],
    sources:[{t:"World Bank: World Development Report 2020, Trading for Development in the Age of Global Value Chains", url:"https://www.worldbank.org/en/publication/wdr2020"},{t:"Gereffi, Humphrey & Sturgeon, “The governance of global value chains”, Review of International Political Economy 12(1), 2005 (DOI)", url:"https://doi.org/10.1080/09692290500049805"},{t:"ADBI Working Paper 257: How the iPhone Widens the United States Trade Deficit with the People’s Republic of China (2010)", url:"https://www.adb.org/publications/how-iphone-widens-united-states-trade-deficit-peoples-republic-china"}],
    checked:"2026-11"},

   {id:"geoeconomics", title:"Geoeconomics and economic security", aka:["economic security","weaponised interdependence","weaponized interdependence","export controls","economic coercion","de-risking","friend-shoring","critical minerals"], tags:["geoeconomics","security","production"],
    summary:"How states use trade, finance and technology as instruments of power, and the debates over export controls, sanctions, coercion and critical minerals.",
    levels:{
     starter:[
      "Geoeconomics is the use of economic tools for strategic ends: tariffs, sanctions, export controls, investment screening, subsidies and control of key supplies.",
      "Since the late 2010s many governments have adopted **economic security** policies, treating chips, critical minerals and supply chains as matters of national security.",
      "Think of neighbours who share a water pipe. Sharing is efficient, but whoever controls the valve has leverage. Governments now ask who controls the valves of the world economy.",
      {key:"Interdependence brings gains and vulnerabilities at once; the debate is about how to balance them."}
     ],
     builder:[
      "**Ideas.** Hirschman (1945): asymmetric trade dependence is power. Farrell and Newman (2019): states that control network hubs gain **panopticon** (surveillance) and **chokepoint** (exclusion) effects.",
      "**Policies (dated).** Japan’s Economic Security Promotion Act (2022); the US CHIPS and Science Act (2022) and chip export controls (October 2022); the EU Economic Security Strategy (2023) and Anti-Coercion Instrument (in force December 2023); China’s Export Control Law (2020) and controls on gallium and germanium (2023) and rare earths (2025, partly paused under the US–China truce to January 2027).",
      "**Critical minerals.** The IEA’s *Global Critical Minerals Outlook 2025* found China the leading refiner of 19 of 20 key energy minerals, with an average share of about 70%."
     ],
     pro:[
      "**Coercion as a contested label.** Cases such as Japan–Korea (2019), China–Australia (2020–24) and China–Lithuania (2021–22) involve competing official explanations. Report each government’s stated reasons and the evidence.",
      "**Does it work?** Research on sanctions finds frequent failure to change major policies, but effects on capabilities and costs; export controls can slow rivals while spurring their substitution efforts.",
      "**Positions.** Security advocates stress resilience and denial of sensitive technology; trade economists stress costs and fragmentation; many Global South governments hedge, courting investment from all sides and seeking processing at home. As of November 2026, seminars expect each position to be stated with its evidence."
     ]
    },
    related:["albert-hirschman","global-value-chains","tariff-politics-2025-2026","dollar-dominance-debate"],
    sources:[{t:"Farrell & Newman, “Weaponized Interdependence: How Global Economic Networks Shape State Coercion”, International Security 44(1), 2019 (DOI)", url:"https://doi.org/10.1162/isec_a_00351"},{t:"IEA: Global Critical Minerals Outlook 2025, executive summary", url:"https://www.iea.org/reports/global-critical-minerals-outlook-2025/executive-summary"}],
    checked:"2026-11"},

   {id:"sovereign-debt-restructuring", title:"Sovereign debt and its restructuring", aka:["sovereign debt","HIPC","MDRI","Common Framework","Paris Club","debt restructuring","GSDR"], tags:["debt","development finance"],
    summary:"Why government debts are hard to restructure, how relief evolved from HIPC to the G20 Common Framework, and the state of the Framework’s cases in 2026.",
    levels:{
     starter:[
      "Governments borrow to build schools, roads and power plants, and to get through crises. When they cannot pay, there is no world bankruptcy court. Instead, debtors and creditors negotiate.",
      "Creditors today include multilateral lenders (the IMF and development banks), other governments (the Paris Club and newer lenders such as China) and private investors (bondholders and banks). Getting all of them to agree is slow.",
      "UNCTAD’s *A World of Debt 2026* reported that 3.7 billion people live in countries that spend more on interest than on either health or education.",
      {key:"A debt crisis is a bargaining problem among many creditors, with the debtor’s public services at stake."}
     ],
     builder:[
      "**Relief history.** The Brady Plan (1989); HIPC (1996, enhanced 1999) and the Multilateral Debt Relief Initiative (2005); by the end of 2023, 37 of 39 eligible countries had completed HIPC.",
      "**Pandemic response.** The G20’s Debt Service Suspension Initiative (2020–21) and the Common Framework (November 2020).",
      {table:[
        ["Case","Status (2026)"],
        ["Chad","Contingent treatment agreed November 2022; no debt cut"],
        ["Zambia","Close to full completion (April 2026)"],
        ["Ghana","MoU 2024; bilateral agreements still being signed (April 2026)"],
        ["Ethiopia","MoU July 2025; bondholder talks pending (April 2026)"]
      ]}
     ],
     pro:[
      "**Comparability of treatment.** Official creditors require private creditors to give similar relief; measuring “similar” (net present value, cash-flow relief, maturity) caused long delays in Zambia. The Global Sovereign Debt Roundtable (2023) now publishes a playbook and supports publishing these parameters.",
      "**Gaps.** The Framework is limited to the countries that were eligible for the DSSI, mostly low-income; middle-income Sri Lanka restructured outside it after its 2022 default. Proposals range from a UN-based debt mechanism (backed by many developing countries) to improving existing tools (preferred by many creditors).",
      "**Contract tools.** Collective action clauses, climate-resilient debt clauses and debt-for-nature swaps are growing; critics say swaps are small relative to needs."
     ]
    },
    related:["development-ir","china-overseas-lending","multilateral-development-banks","financing-for-development","financial-crises-ipe"],
    sources:[{t:"IMF: Global Sovereign Debt Roundtable, 6th co-chairs’ progress report (April 2026)", url:"https://www.imf.org/-/media/files/about/faq/gsdr/041526-6th-gsdr-cochairs-progress-report.pdf"},{t:"Paris Club: G20 note on lessons learned from the Common Framework", url:"https://clubdeparis.org/sites/default/files/node/field_news_files/g20_note_lessons_learned_1.pdf"},{t:"UNCTAD: A World of Debt 2026", url:"https://unctad.org/publication/world-of-debt"}],
    checked:"2026-11"},

   {id:"multilateral-development-banks", title:"Multilateral development banks and their reform", aka:["MDBs","MDB reform","World Bank","AIIB","New Development Bank","IDA","capital adequacy"], tags:["development finance","international organisations"],
    summary:"What MDBs do, how they are financed, and the reform agenda since 2022 to make them lend more.",
    levels:{
     starter:[
      "A multilateral development bank (MDB) is a bank owned by many governments that lends for development: roads, power, health, education, climate adaptation.",
      "Because rich shareholders stand behind them, MDBs borrow cheaply on markets and lend on better terms than most poor countries could get alone. Their concessional windows, such as the World Bank’s IDA, give grants and very cheap loans to the poorest.",
      "The family includes the World Bank, regional banks for Latin America (1959), Africa (1964) and Asia (1966), and newer banks such as the Asian Infrastructure Investment Bank (2016) and the New Development Bank (2015).",
      {key:"MDB reform is about lending more from the same capital, and about who decides what the lending is for."}
     ],
     builder:[
      "**Capital and risk.** A G20 review of capital adequacy frameworks (2022) argued that the banks could lend more without endangering their ratings, for example by counting callable capital and using hybrid capital.",
      "**World Bank Evolution Roadmap** (2023): a new mission, “to end extreme poverty and boost shared prosperity on a livable planet”, and financial changes.",
      "**The Triple Agenda** (2023): an expert group led by Lawrence Summers and N. K. Singh called for much larger MDB lending by 2030; the G20 endorsed a roadmap for “better, bigger and more effective” MDBs in 2024.",
      "**IDA21** (December 2024): a package of about 100 billion dollars, with 23.7 billion dollars pledged by donors."
     ],
     pro:[
      "**Debates.** Borrowers ask for more and cheaper lending and greater voice (see {{bretton-woods-governance}}); some shareholders, including the US administration since 2025, have urged a focus on core missions over climate; critics question conditions and project impacts on communities.",
      "**Competition or complement?** The AIIB and NDB are often read as competitive regime creation after slow voice reform; their founders call them complements. Co-financing between old and new banks is common.",
      "**Seminar tip.** Distinguish commitments, disbursements and net flows, and check each bank’s own annual report for figures."
     ]
    },
    related:["bretton-woods-governance","bretton-woods-institutions","sovereign-debt-restructuring","financing-for-development","contested-multilateralism"],
    sources:[{t:"World Bank press release: Donors and World Bank Group boost IDA (5 December 2024)", url:"https://www.worldbank.org/en/news/press-release/2024/12/05/donors-and-world-bank-group-boost-ida-development"}],
    checked:"2026-11"},

   {id:"china-overseas-lending", title:"China’s overseas lending and the debt-trap debate", aka:["Chinese lending","debt-trap diplomacy","AidData","Belt and Road lending","Hambantota"], tags:["development finance","China","debt"],
    summary:"What the evidence shows about China’s official lending abroad, and the arguments for and against the “debt-trap” thesis.",
    levels:{
     starter:[
      "Since the 2000s China has become one of the world’s largest official lenders, through state banks such as China Development Bank and the Export-Import Bank of China.",
      "The research lab AidData tracks this lending. Its 2025 report counted about 2.2 trillion dollars of loans and grants from 2000 to 2023 to some 200 countries and territories. No country accepted more official-sector credit (loans) from China than the United States, much of it lending to US companies and projects.",
      "Some writers call Chinese lending “debt-trap diplomacy”: lending meant to trap borrowers and seize strategic assets. Others argue that the evidence does not support that claim, while agreeing that the lending is often opaque.",
      {key:"Separate two questions: was lending opaque and costly, and was it designed to seize assets? The evidence answers them differently."}
     ],
     builder:[
      "**Evidence.** *How China Lends* (Gelpern, Horn, Morris, Parks and Trebesch, 2021) studied 100 contracts and found confidentiality clauses, collateral accounts and cross-default terms. Horn, Parks, Reinhart and Trebesch (2023) documented large rescue loans to distressed borrowers. AidData (2025) found that over three-quarters of current lending supports upper-middle- and high-income countries.",
      {table:[
        ["Thesis","Critique"],
        ["Chellaney (2017): lending as a strategic trap","Brautigam (2020): a “meme” with little evidence of asset seizure design"],
        ["Hambantota leased for 99 years (2017)","Proposed by Sri Lanka; lease money helped pay other debts (Brautigam and Rithmire, 2021)"],
        ["Leverage via secrecy and collateral","Jones and Hameiri (2020): recipients drive many projects"]
      ]}
     ],
     pro:[
      "**China’s position.** The government rejects the debt-trap label and points to its part in the G20 debt initiatives; China co-chaired creditor committees in Common Framework cases.",
      "**Research cautions.** Data are compiled from many sources and revised; distinguish commitments from disbursements, and official from commercial lending. Compare with other creditors’ terms before drawing conclusions.",
      "**Wider frame.** The debate is part of the politics of non-DAC donors and South–South cooperation (see [[south-south-cooperation]]); seminar papers should give borrowers’ own agency and choices their due."
     ]
    },
    related:["sovereign-debt-restructuring","multilateral-development-banks","brics"],
    sources:[{t:"AidData: China’s massive overseas lending portfolio shifts course (18 November 2025)", url:"https://www.aiddata.org/blog/chinas-massive-overseas-lending-portfolio-shifts-course"},{t:"Brautigam, “A critical look at Chinese ‘debt-trap diplomacy’: the rise of a meme”, Area Development and Policy 5(1), 2020 (DOI)", url:"https://doi.org/10.1080/23792949.2019.1689828"},{t:"Chatham House: Debunking the Myth of ‘Debt-trap Diplomacy’ (Jones and Hameiri, 2020)", url:"https://www.chathamhouse.org/2020/08/debunking-myth-debt-trap-diplomacy"}],
    checked:"2026-11"},

   {id:"financing-for-development", title:"Financing for development: Monterrey to Seville", aka:["FfD","FfD4","Compromiso de Sevilla","Sevilla Commitment","Addis Ababa Action Agenda","Monterrey Consensus"], tags:["development finance","United Nations"],
    summary:"The UN process that brings aid, tax, trade, debt and financial reform together, and what the 2025 Seville conference agreed.",
    levels:{
     starter:[
      "Development needs money: from taxes, aid, investment, trade and loans. The UN’s Financing for Development (FfD) process brings all these sources together in one negotiation.",
      "There have been four conferences: Monterrey (2002), Doha (2008), Addis Ababa (2015) and Seville (2025).",
      "The Seville conference, held from 30 June to 3 July 2025, adopted the **Compromiso de Sevilla** (Sevilla Commitment) by consensus, after the United States withdrew from the process.",
      {key:"FfD outcomes are political commitments; their value depends on what governments and institutions do afterwards."}
     ],
     builder:[
      "**What Seville addressed.** The debt crisis (including a borrowers’ forum and support for debt-pause clauses), international tax cooperation (support for UN tax negotiations), reform of development banks and of the financial architecture, and private finance.",
      "**The Sevilla Platform for Action** gathered about 130 voluntary initiatives, including a global hub for debt swaps launched by Spain and the World Bank, a Debt Pause Clause Alliance, and a coalition on solidarity levies on premium flights and private jets.",
      "**Reactions.** Many civil society groups said debt and tax language was diluted; supporters saw proof that multilateral agreement on finance was still possible without the largest shareholder; sceptics noted that the commitments are voluntary."
     ],
     pro:[
      "**Continuity.** Monterrey (2002) framed shared responsibility between developing and developed countries; Addis (2015) linked finance to the SDGs; Seville addressed a world of high debt and falling aid.",
      "**Analytical lenses.** Liberal institutionalists read Seville as regime maintenance under strain; realists note the absence of the largest shareholder; critical scholars ask whether the architecture of debt and tax was changed or only described.",
      "**Using it.** Compare the outcome text with what follows: implementation of the platform’s initiatives, MDB reform, and the UN tax negotiations. Date every claim."
     ]
    },
    related:["sovereign-debt-restructuring","multilateral-development-banks","development-ir","pact-for-the-future"],
    sources:[{t:"UN DESA: Fourth International Conference on Financing for Development (FfD4)", url:"https://financing.desa.un.org/ffd4"},{t:"Down To Earth: FFD4 Seville key outcomes (July 2025)", url:"https://www.downtoearth.org.in/economy/ffd4-seville-key-outcomes-show-some-hope-but-wider-systems-remain-paralysed"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"open-economy-politics", term:"Open Economy Politics (OEP)", def:"The dominant US approach to IPE, which explains policies by deriving actors’ interests from economic theory, then tracing how domestic institutions and international bargaining turn them into outcomes (Lake, 2009).", codex:"ipe-schools"},
   {id:"british-school-ipe", term:"British school of IPE", def:"Cohen’s (2008) label for a historical, interdisciplinary and openly normative style of IPE associated with Susan Strange and Robert Cox.", codex:"ipe-schools"},
   {id:"structural-power", term:"Structural power", def:"Strange’s term for the power to shape the frameworks (security, production, finance, knowledge) within which others must operate.", codex:"susan-strange"},
   {id:"relational-power", term:"Relational power", def:"The power of A to get B to do something B would not otherwise do, for example through a threat or an offer.", codex:"susan-strange"},
   {id:"economic-nationalism", term:"Economic nationalism", def:"The IPE tradition that holds that economic activity should serve the power and independence of the state; related to mercantilism.", codex:"ipe-schools"},
   {id:"embedded-liberalism", term:"Embedded liberalism", def:"Ruggie’s (1982) term for the postwar compromise of open trade abroad combined with welfare states, capital controls and full-employment policies at home.", codex:"ipe-schools"},
   {id:"double-movement", term:"Double movement", def:"Polanyi’s idea (1944) that the spread of unregulated markets provokes a counter-movement in which society seeks protection from them.", codex:"ipe-schools"},
   {id:"opportunity-cost", term:"Opportunity cost", def:"What you give up to do or make something: the value of the best alternative forgone.", codex:"global-trade"},
   {id:"stolper-samuelson", term:"Stolper–Samuelson theorem", def:"The result (1941) that opening trade raises the returns to a country’s abundant factor of production and lowers the returns to its scarce factor, creating winners and losers inside each country.", codex:"global-trade"},
   {id:"china-shock", term:"China shock", def:"The concentrated job and wage losses in regions exposed to rising imports from China after 2000, documented by Autor, Dorn and Hanson (2013).", codex:"global-trade"},
   {id:"gatt", term:"GATT (General Agreement on Tariffs and Trade)", def:"The trade agreement signed by 23 countries in 1947 that cut tariffs through eight rounds and was absorbed into the WTO in 1995.", codex:"wto-in-crisis"},
   {id:"trade-round", term:"Trade round", def:"A set of multilateral negotiations under GATT or the WTO, usually named after the place where it was launched (Tokyo, Uruguay, Doha); the Kennedy Round is named after the US president.", codex:"wto-in-crisis"},
   {id:"doha-round", term:"Doha Round", def:"The WTO negotiations launched in 2001 as a “development round”, which stalled over agriculture and special treatment for developing and emerging economies.", codex:"wto-in-crisis"},
   {id:"single-undertaking", term:"Single undertaking", def:"The principle of the Uruguay Round that members accept nearly all agreements as one package: “nothing is agreed until everything is agreed”.", codex:"wto-in-crisis"},
   {id:"appellate-body", term:"WTO Appellate Body", def:"The standing body of seven members that heard appeals in WTO disputes; since December 2019 it has been unable to hear appeals because appointments are blocked.", codex:"wto-in-crisis"},
   {id:"mpia", term:"MPIA (Multi-Party Interim Appeal Arbitration Arrangement)", def:"An arrangement set up in 2020 by a group of WTO members to hear appeals among themselves through arbitration while the Appellate Body is paralysed.", codex:"wto-in-crisis"},
   {id:"plurilateral-agreement", term:"Plurilateral agreement", def:"A WTO agreement among a subset of willing members rather than all of them, such as the Information Technology Agreement (1996).", codex:"wto-in-crisis"},
   {id:"security-exception-gatt", term:"Security exception (GATT Article XXI)", def:"The clause allowing WTO members to take measures they consider necessary for their essential security interests; whether panels can review its use is disputed.", codex:"wto-in-crisis"},
   {id:"regional-trade-agreement", term:"Regional trade agreement (RTA)", def:"A trade agreement among two or more countries that goes beyond WTO commitments, such as a free trade area or customs union.", codex:"trade-agreements-regional"},
   {id:"mega-regional-agreement", term:"Mega-regional agreement", def:"A very large regional trade agreement covering a big share of world trade, such as the CPTPP, RCEP or AfCFTA.", codex:"trade-agreements-regional"},
   {id:"cptpp", term:"CPTPP", def:"The Comprehensive and Progressive Agreement for Trans-Pacific Partnership, signed in 2018; 12 parties as of 2026, including the United Kingdom since December 2024.", codex:"trade-agreements-regional"},
   {id:"rcep", term:"RCEP", def:"The Regional Comprehensive Economic Partnership of the ten ASEAN members plus China, Japan, Korea, Australia and New Zealand; signed 2020, in force 2022.", codex:"trade-agreements-regional"},
   {id:"afcfta", term:"AfCFTA", def:"The African Continental Free Trade Area, signed in 2018 and in force since 2019, with trading under it from 2021; signed by 54 of the African Union’s 55 members.", codex:"trade-agreements-regional"},
   {id:"eu-single-market", term:"EU single market", def:"The EU’s internal market, completed in 1993, with free movement of goods, services, capital and people under common rules and a common court.", codex:"trade-agreements-regional"},
   {id:"rules-of-origin", term:"Rules of origin", def:"Rules that decide which country a product “comes from”, and so whether it qualifies for lower tariffs under a trade agreement.", codex:"trade-agreements-regional"},
   {id:"reciprocal-tariff", term:"Reciprocal tariff", def:"A tariff set to match or respond to a partner’s barriers; the label the US government gave to the country-by-country tariffs announced on 2 April 2025.", codex:"tariff-politics-2025-2026"},
   {id:"par-value-system", term:"Par value system", def:"The Bretton Woods arrangement (1944–1971) in which currencies were pegged to the US dollar within narrow bands, and the dollar to gold.", codex:"international-monetary-system"},
   {id:"nixon-shock", term:"Nixon shock", def:"President Nixon’s suspension of the dollar’s convertibility into gold on 15 August 1971, which ended the Bretton Woods par value system.", codex:"international-monetary-system"},
   {id:"floating-exchange-rate", term:"Floating exchange rate", def:"An exchange rate set mainly by supply and demand in currency markets rather than fixed by the government.", codex:"international-monetary-system"},
   {id:"impossible-trinity", term:"Impossible trinity (monetary trilemma)", def:"The principle that a country cannot have a fixed exchange rate, free capital movement and an independent monetary policy all at once.", codex:"international-monetary-system"},
   {id:"triffin-dilemma", term:"Triffin dilemma", def:"Robert Triffin’s 1960 argument that a national currency used as the world’s reserve must be supplied through deficits that eventually undermine confidence in it.", codex:"international-monetary-system"},
   {id:"reserve-currency", term:"Reserve currency", def:"A currency that other governments and central banks hold as savings and use to settle international payments; above all the US dollar.", codex:"dollar-dominance-debate"},
   {id:"exorbitant-privilege", term:"Exorbitant privilege", def:"The advantages the United States gains from issuing the main reserve currency, such as cheap borrowing in its own money; a phrase attributed to Valéry Giscard d’Estaing.", codex:"dollar-dominance-debate"},
   {id:"de-dollarisation", term:"De-dollarisation", def:"Reducing reliance on the US dollar for reserves, trade invoicing or payments.", codex:"dollar-dominance-debate"},
   {id:"special-drawing-rights", term:"Special Drawing Rights (SDRs)", def:"The IMF’s reserve asset, valued on a basket of five currencies and allocated to members in proportion to their quotas.", codex:"dollar-dominance-debate"},
   {id:"swap-line", term:"Swap line", def:"An agreement between two central banks to exchange currencies, used to supply foreign currency (often dollars) in a crisis.", codex:"dollar-dominance-debate"},
   {id:"capital-controls", term:"Capital controls", def:"Government limits on money flowing into or out of a country, such as taxes on short-term inflows or limits on taking money abroad.", codex:"international-monetary-system"},
   {id:"sudden-stop", term:"Sudden stop", def:"An abrupt halt or reversal in capital inflows to a country, which can force painful cuts in spending (Calvo, 1998).", codex:"financial-crises-ipe"},
   {id:"original-sin-debt", term:"Original sin (in finance)", def:"The inability of many countries to borrow abroad in their own currency, so that a fall in the currency increases the burden of their debt (Eichengreen and Hausmann, 1999).", codex:"financial-crises-ipe"},
   {id:"moral-hazard", term:"Moral hazard", def:"The risk that protection against losses, such as an expected rescue, encourages lenders or borrowers to take more risk.", codex:"financial-crises-ipe"},
   {id:"financial-contagion", term:"Financial contagion", def:"The spread of a financial crisis from one country or market to others, often through panic rather than shared weaknesses.", codex:"financial-crises-ipe"},
   {id:"global-value-chain", term:"Global value chain (GVC)", def:"The full range of activities, from design to sale, through which a product is made, split across firms and countries.", codex:"global-value-chains"},
   {id:"gvc-governance", term:"GVC governance", def:"How lead firms coordinate a value chain; Gereffi, Humphrey and Sturgeon (2005) distinguish market, modular, relational, captive and hierarchy types.", codex:"global-value-chains"},
   {id:"smile-curve", term:"Smile curve", def:"Stan Shih’s picture of a value chain in which design and parts at one end, and brands and services at the other, capture more value than assembly in the middle.", codex:"global-value-chains"},
   {id:"economic-upgrading", term:"Economic upgrading", def:"Moving to higher-value activities in a value chain, through better processes, better products, new functions such as design, or new chains.", codex:"global-value-chains"},
   {id:"offshoring", term:"Offshoring", def:"Moving a stage of production or a service to another country, either inside the same firm or to a foreign supplier.", codex:"global-value-chains"},
   {id:"reshoring", term:"Reshoring", def:"Bringing production back to the home country; “nearshoring” moves it to a nearby country instead.", codex:"geoeconomics"},
   {id:"friend-shoring", term:"Friend-shoring", def:"Moving supply chains to countries seen as trusted partners; a term used by US Treasury Secretary Janet Yellen in April 2022.", codex:"geoeconomics"},
   {id:"de-risking", term:"De-risking", def:"Reducing specific economic dependencies on a rival without cutting economic ties as a whole, as opposed to “decoupling”; adopted by the G7 in 2023.", codex:"geoeconomics"},
   {id:"economic-security", term:"Economic security", def:"Treating supply chains, technology, finance and critical inputs as matters of national security, protected by law and policy.", codex:"geoeconomics"},
   {id:"weaponised-interdependence", term:"Weaponised interdependence", def:"Farrell and Newman’s (2019) argument that states controlling hubs of global networks can monitor others (panopticon effect) and cut them off (chokepoint effect).", codex:"geoeconomics"},
   {id:"export-controls", term:"Export controls", def:"Government rules restricting the export of specific goods, technologies or materials, often for security reasons.", codex:"geoeconomics"},
   {id:"secondary-sanctions", term:"Secondary sanctions", def:"Penalties on third-country firms or banks that deal with a sanctioned target, extending sanctions beyond the sanctioning state’s own jurisdiction.", codex:"geoeconomics"},
   {id:"critical-minerals", term:"Critical minerals", def:"Minerals essential to key technologies, such as batteries and electronics, whose supply is at risk of disruption; for example lithium, cobalt, nickel, graphite and rare earths.", codex:"geoeconomics"},
   {id:"economic-coercion", term:"Economic coercion", def:"Using or threatening economic measures to pressure another government to change its policy; whether a given measure counts is often disputed.", codex:"geoeconomics"},
   {id:"anti-coercion-instrument", term:"Anti-Coercion Instrument", def:"The EU regulation, in force since December 2023, that lets the EU respond to economic coercion by third countries with counter-measures.", codex:"geoeconomics"},
   {id:"sovereign-debt", term:"Sovereign debt", def:"Debt owed by a national government, to other governments, multilateral lenders or private creditors.", codex:"sovereign-debt-restructuring"},
   {id:"hipc-initiative", term:"HIPC initiative", def:"The Heavily Indebted Poor Countries initiative of the IMF and World Bank (1996, enhanced 1999), which reduced the debts of the poorest countries that met policy conditions.", codex:"sovereign-debt-restructuring"},
   {id:"common-framework", term:"Common Framework", def:"The G20 framework of November 2020 for treating the debts of the poorer countries that were eligible for the DSSI, bringing Paris Club and other official creditors, including China, together.", codex:"sovereign-debt-restructuring"},
   {id:"paris-club", term:"Paris Club", def:"An informal group of mostly Western creditor governments, meeting since 1956, that coordinates the restructuring of debts owed to them.", codex:"sovereign-debt-restructuring"},
   {id:"dssi", term:"DSSI (Debt Service Suspension Initiative)", def:"The G20’s temporary suspension of official bilateral debt payments for eligible low-income countries during COVID-19, from May 2020 to December 2021.", codex:"sovereign-debt-restructuring"},
   {id:"collective-action-clause", term:"Collective action clause", def:"A bond clause that lets a qualified majority of bondholders agree a restructuring that binds all holders.", codex:"sovereign-debt-restructuring"},
   {id:"holdout-creditor", term:"Holdout creditor", def:"A creditor who refuses a restructuring agreed by others and seeks full payment, often through the courts.", codex:"sovereign-debt-restructuring"},
   {id:"global-sovereign-debt-roundtable", term:"Global Sovereign Debt Roundtable (GSDR)", def:"A forum set up in 2023 by the IMF, World Bank and G20 presidency bringing creditors and debtors together to speed up debt restructurings.", codex:"sovereign-debt-restructuring"},
   {id:"climate-resilient-debt-clause", term:"Climate-resilient debt clause", def:"A loan or bond clause that pauses debt payments for a period after a natural disaster or other severe shock.", codex:"sovereign-debt-restructuring"},
   {id:"debt-swap", term:"Debt swap (debt-for-nature, debt-for-development)", def:"A deal in which part of a country’s debt is cancelled or refinanced more cheaply in exchange for spending on nature, climate, food or other development goals.", codex:"sovereign-debt-restructuring"},
   {id:"debt-trap-diplomacy", term:"Debt-trap diplomacy", def:"The contested claim, coined by Brahma Chellaney in 2017, that a lender (usually China) lends in order to gain strategic leverage or assets when borrowers cannot pay.", codex:"china-overseas-lending"},
   {id:"multilateral-development-bank", term:"Multilateral development bank (MDB)", def:"A bank owned by many governments that borrows on markets and lends or gives grants for development, such as the World Bank, the Asian Development Bank or the AIIB.", codex:"multilateral-development-banks"},
   {id:"capital-adequacy-framework", term:"Capital adequacy framework", def:"The rules a bank uses to decide how much it can lend relative to its capital; a G20 review in 2022 argued that MDBs’ frameworks were too cautious.", codex:"multilateral-development-banks"},
   {id:"financing-for-development", term:"Financing for Development (FfD)", def:"The UN process on mobilising money for development (aid, tax, trade, debt, private finance and financial reform), with conferences in 2002, 2008, 2015 and 2025.", codex:"financing-for-development"},
   {id:"compromiso-de-sevilla", term:"Compromiso de Sevilla (Sevilla Commitment)", def:"The outcome document of the fourth Financing for Development conference, adopted by consensus in Seville on 30 June 2025.", codex:"financing-for-development"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u15-q01", lesson:"e4u15-l1", level:1, q:"Which book defined structural power in four structures: security, production, finance and knowledge?", options:[
     {t:"Susan Strange, *States and Markets* (1988)", ok:true, why:"Right. Strange’s four structures are IPE’s best-known account of power."},
     {t:"Robert Gilpin, *The Political Economy of International Relations* (1987)", why:"Gilpin set out three ideologies of political economy, not the four structures."},
     {t:"Charles Kindleberger, *The World in Depression* (1973)", why:"Kindleberger argued that the world economy needs a stabiliser."},
     {t:"Robert Keohane, *After Hegemony* (1984)", why:"Keohane argued that institutions can sustain cooperation after hegemony."}]},
   {id:"e4u15-q02", lesson:"e4u15-l1", level:2, q:"A state controls the payments messaging network that most banks use. Without making any demand, its rules decide which foreign banks can take part in international finance. Which concept fits best?", options:[
     {t:"Structural power in the finance structure", ok:true, why:"Yes. It shapes the framework others must operate in, rather than bargaining over one decision."},
     {t:"Relational power", why:"Relational power is A getting B to do something specific; here no demand is made."},
     {t:"The double movement", why:"Polanyi’s concept concerns society’s reaction against market expansion."},
     {t:"Embedded liberalism", why:"That describes the postwar compromise between open trade and domestic welfare."}]},
   {id:"e4u15-q03", lesson:"e4u15-l1", level:1, q:"What did John Ruggie (1982) mean by “embedded liberalism”?", options:[
     {t:"Open trade abroad combined with welfare states, capital controls and full-employment policies at home", ok:true, why:"Right. Liberalism was “embedded” in domestic social protection."},
     {t:"Full liberalisation of trade and capital with no domestic intervention", why:"That is closer to what critics later called neoliberal globalisation, the opposite of Ruggie’s compromise."},
     {t:"A world economy run by one hegemon", why:"That is hegemonic stability theory."},
     {t:"Free trade only within regional blocs", why:"Ruggie described the multilateral postwar order, not regional blocs."}]},
   {id:"e4u15-q04", lesson:"e4u15-l1", level:1, q:"In David Lake’s account of Open Economy Politics, what comes first in the analysis?", options:[
     {t:"Actors’ interests, derived from economic theory", ok:true, why:"Correct. OEP then turns to domestic institutions and finally to international bargaining."},
     {t:"International bargaining between states", why:"That is the final step of the OEP chain."},
     {t:"The history of world capitalism", why:"That is closer to the British school’s historical approach."},
     {t:"Norms and identities", why:"OEP is rationalist; norms are a constructivist focus."}]},
   {id:"e4u15-q05", lesson:"e4u15-l1", level:3, q:"Tomás argues in a seminar: “US tariffs and sanctions since 2025 prove the hegemon has abandoned the system.” Which reply draws most directly on Duncan Snidal’s critique of hegemonic stability theory?", options:[
     {t:"A hegemon can be coercive rather than benevolent, using its power to make others pay, so the same policies may show power being used, not abandoned", ok:true, why:"Yes. Snidal distinguished benevolent from coercive hegemony, which allows a rival reading of the evidence."},
     {t:"Institutions always collapse when a hegemon declines", why:"That is what hegemonic stability theory predicted; Snidal and Keohane questioned it."},
     {t:"The United States has never been a hegemon", why:"Snidal did not argue this."},
     {t:"Tariffs have no effect on the world economy", why:"That is an empirical claim unrelated to Snidal and not supported by evidence."}]},
   {id:"e4u15-q06", lesson:"e4u15-l1", level:2, q:"According to Kindleberger, which task belongs to a world economy’s stabiliser?", options:[
     {t:"Acting as lender of last resort in a financial panic", ok:true, why:"Right. With keeping markets open and lending counter-cyclically, this was a core stabiliser function."},
     {t:"Raising tariffs during a slump to protect its own industry", why:"That is the opposite: a stabiliser keeps its market open in bad times."},
     {t:"Cutting lending abroad when others do", why:"A stabiliser keeps lending when others stop."},
     {t:"Setting up a world government", why:"Kindleberger’s stabiliser is a leading state, not a world government."}]},
   {id:"e4u15-q07", lesson:"e4u15-l1", level:1, q:"Gilpin (1987) organised IPE around three ideologies. Which set is right?", options:[
     {t:"Liberalism, economic nationalism and Marxism", ok:true, why:"Correct: the standard three traditions."},
     {t:"Realism, constructivism and feminism", why:"These are IR theories, though they have IPE cousins."},
     {t:"Monetarism, Keynesianism and socialism", why:"These are schools of economics, not Gilpin’s three ideologies."},
     {t:"Open Economy Politics, the British school and Global IPE", why:"These are later styles of research, not Gilpin’s ideologies."}]},
   {id:"e4u15-q08", lesson:"e4u15-l1", level:3, q:"Mei is choosing a research question on the dollar’s role. Which question best fits the “British school”?", options:[
     {t:"How has the dollar’s central place in world finance shaped who holds power since the 1970s, and who benefits?", ok:true, why:"Yes: historical, structural and concerned with power and justice, in Strange’s style."},
     {t:"Do exporters in countries with proportional representation lobby more for a weak currency?", why:"A testable hypothesis about interests and institutions: Open Economy Politics."},
     {t:"What is the correlation between reserve shares and interest rates in 2010–2020?", why:"A statistical question typical of OEP or economics."},
     {t:"Which firms supported a currency peg, and why?", why:"Deriving preferences from interests: OEP step 1."}]},
   {id:"e4u15-q09", lesson:"e4u15-l1", level:2, q:"After a city privatises its water supply and prices soar, residents organise to bring it back under public control. Which concept describes this best?", options:[
     {t:"Polanyi’s double movement", ok:true, why:"Right. Society pushes back to protect itself against the spread of the market."},
     {t:"Hegemonic stability", why:"That is about a dominant state stabilising the world economy."},
     {t:"Comparative advantage", why:"That explains gains from specialisation, not social protection."},
     {t:"Relational power", why:"The story is about a social counter-movement, not one actor making a specific demand of another."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u15-q10", lesson:"e4u15-l2", level:1, q:"Since when has the WTO Appellate Body been unable to hear appeals?", options:[
     {t:"December 2019", ok:true, why:"Correct. Blocked appointments left it without a quorum."},
     {t:"January 1995", why:"That is when the WTO, and its Appellate Body, began work."},
     {t:"November 2001", why:"That is when the Doha Round was launched."},
     {t:"March 2026", why:"That is when MC14 met in Yaoundé; the Body had been paralysed for years by then."}]},
   {id:"e4u15-q11", lesson:"e4u15-l2", level:2, q:"Invented figures: one worker-day makes 8 baskets or 4 bicycles in Country X, and 2 baskets or 2 bicycles in Country Y. Who has the comparative advantage in bicycles?", options:[
     {t:"Country Y, because a bicycle costs it only 1 basket, against 2 baskets in X", ok:true, why:"Right. Comparative advantage depends on opportunity cost, not on who makes more."},
     {t:"Country X, because it makes more bicycles per day", why:"That is absolute advantage. X gives up 2 baskets per bicycle; Y gives up only 1."},
     {t:"Neither, because X is better at both goods", why:"Ricardo’s point is that trade can benefit both even when one country is better at everything."},
     {t:"Both equally", why:"Their opportunity costs differ (2 baskets versus 1), so one has the comparative advantage."}]},
   {id:"e4u15-q12", lesson:"e4u15-l2", level:3, q:"Research shows that a country gained overall from more trade with a large partner, while some manufacturing regions lost jobs for years. A minister says: “The national gain proves nobody lost.” What is the best reply?", options:[
     {t:"National gains can coexist with concentrated local losses, as the China shock research shows; whether winners compensate losers is a political choice", ok:true, why:"Yes. This is the Stolper–Samuelson logic and Autor, Dorn and Hanson’s evidence."},
     {t:"Trade never produces national gains", why:"Comparative advantage shows national gains are possible; the issue is distribution."},
     {t:"The job losses must have had nothing to do with trade", why:"Research linked them to import exposure; dismissing it is not evidence-based."},
     {t:"Only tariffs can ever help the losing regions", why:"Retraining, regional support and social insurance are among the options debated."}]},
   {id:"e4u15-q13", lesson:"e4u15-l2", level:1, q:"Which agreement was the first free trade agreement linking China, Japan and Korea?", options:[
     {t:"RCEP", ok:true, why:"Right. Signed in 2020 and in force from 2022, it brings ASEAN together with China, Japan, Korea, Australia and New Zealand."},
     {t:"CPTPP", why:"China and Korea are not CPTPP parties."},
     {t:"AfCFTA", why:"That is the African Continental Free Trade Area."},
     {t:"The EU single market", why:"It covers EU members only."}]},
   {id:"e4u15-q14", lesson:"e4u15-l2", level:2, q:"Which statement about the MPIA is accurate as of November 2026?", options:[
     {t:"It lets participating WTO members hear appeals among themselves through arbitration; the United States is not part of it", ok:true, why:"Correct. It had grown to 61 members by MC14."},
     {t:"It replaced the WTO in 2020", why:"It is a stand-in arrangement within WTO rules, not a replacement for the organisation."},
     {t:"It binds all WTO members", why:"Only participants are covered."},
     {t:"It restored the Appellate Body’s seven members", why:"The Appellate Body remains without members."}]},
   {id:"e4u15-q15", lesson:"e4u15-l2", level:3, q:"A blog post from November 2026 says: “The Supreme Court allowed the emergency tariffs, so the April 2025 tariffs are still in force unchanged.” What is the most accurate correction?", options:[
     {t:"The Court ruled 6–3 in February 2026 that IEEPA does not authorise tariffs; the administration then used Section 122 and, from July 2026, Section 301, while Section 232 tariffs remained", ok:true, why:"Yes. The legal basis and rates changed, though many tariffs continued under other laws."},
     {t:"The Court abolished all US tariffs, including those on steel", why:"Section 232 tariffs rest on another law and were not affected."},
     {t:"The Court has not yet ruled", why:"It ruled on 20 February 2026."},
     {t:"The WTO Appellate Body struck the tariffs down", why:"The Appellate Body cannot hear appeals, and the ruling came from the US Supreme Court."}]},
   {id:"e4u15-q16", lesson:"e4u15-l2", level:1, q:"Which country joined the CPTPP in December 2024, becoming its first new party?", options:[
     {t:"The United Kingdom", ok:true, why:"Right. Its accession entered into force on 15 December 2024."},
     {t:"China", why:"China applied in 2021 but is not a party."},
     {t:"Costa Rica", why:"Its accession talks were substantially concluded in May 2026; it was not yet a party."},
     {t:"The United States", why:"The US withdrew from the original TPP in 2017."}]},
   {id:"e4u15-q17", lesson:"e4u15-l2", level:2, q:"Bicycles assembled in Country A, a member of a free trade agreement, use frames and gears imported from outside the agreement. Whether they enter Country B tariff-free depends mainly on:", options:[
     {t:"The agreement’s rules of origin", ok:true, why:"Correct. They decide whether enough value or processing happened in A for the bicycles to count as A’s."},
     {t:"The most-favoured-nation rule alone", why:"MFN sets the default tariff; the agreement’s preference depends on origin."},
     {t:"The impossible trinity", why:"That concerns exchange rates and monetary policy."},
     {t:"The MPIA", why:"The MPIA concerns appeals in WTO disputes."}]},
   {id:"e4u15-q18", lesson:"e4u15-l2", level:2, q:"Why did the Doha Round stall?", options:[
     {t:"Mainly over farm subsidies and market access, and over how much special treatment fast-growing emerging economies should keep", ok:true, why:"Right. Agriculture and the status of China, India and others were central disagreements."},
     {t:"Because the WTO had no members from Asia", why:"China, India, Japan and many other Asian economies are members."},
     {t:"Because the Appellate Body ruled against it", why:"The Appellate Body hears disputes, not negotiations."},
     {t:"Because it was completed in 2005", why:"It was never completed."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u15-q19", lesson:"e4u15-l3", level:3, q:"Country Q pegs its currency firmly to the dollar and lets capital move freely. A recession hits, and its government wants the central bank to cut interest rates well below US rates. What does the impossible trinity predict?", options:[
     {t:"It cannot do so for long without giving up the peg or controlling capital flows", ok:true, why:"Yes. With a fixed rate and free capital, it has given up independent monetary policy."},
     {t:"It can cut rates freely with no side effects", why:"Capital would flow out and pressure the peg."},
     {t:"Cutting rates will strengthen the peg", why:"Lower rates make the currency less attractive, adding pressure on it."},
     {t:"The IMF will set its interest rates", why:"The IMF does not set members’ interest rates."}]},
   {id:"e4u15-q20", lesson:"e4u15-l3", level:1, q:"What happened on 15 August 1971?", options:[
     {t:"The United States suspended the dollar’s convertibility into gold", ok:true, why:"Correct: the Nixon shock."},
     {t:"The Bretton Woods conference opened", why:"That was July 1944."},
     {t:"The euro was launched", why:"The euro was launched in 1999."},
     {t:"Thailand floated the baht", why:"That was 2 July 1997."}]},
   {id:"e4u15-q21", lesson:"e4u15-l3", level:1, q:"What is the Triffin dilemma?", options:[
     {t:"A reserve currency must be supplied through deficits that eventually undermine confidence in it", ok:true, why:"Right. Triffin (1960) saw this flaw in the dollar–gold system."},
     {t:"A country cannot have a fixed rate, free capital and its own monetary policy at once", why:"That is the impossible trinity."},
     {t:"Governments cannot borrow abroad in their own currency", why:"That is original sin."},
     {t:"Rescues encourage reckless lending", why:"That is moral hazard."}]},
   {id:"e4u15-q22", lesson:"e4u15-l3", level:2, q:"According to IMF COFER data, roughly what share of identified foreign-exchange reserves was held in US dollars in the second quarter of 2026?", options:[
     {t:"About 57%", ok:true, why:"Correct: 56.7%, down from about 71% in 1999."},
     {t:"About 89%", why:"That is the share of foreign-exchange trades with the dollar on one side (BIS, April 2025)."},
     {t:"About 21%", why:"That is close to the euro’s share."},
     {t:"About 2%", why:"That is close to the renminbi’s share."}]},
   {id:"e4u15-q23", lesson:"e4u15-l3", level:3, q:"An analyst writes: “The dollar’s reserve share fell from 71% to 57%, so the renminbi will replace the dollar soon.” What is the strongest evidence-based critique?", options:[
     {t:"Most of the shift went to a range of non-traditional currencies, the renminbi’s share is about 2%, and the dollar still dominates trading", ok:true, why:"Yes. The evidence points to gradual diversification, not replacement by one rival."},
     {t:"The dollar’s reserve share has not fallen at all", why:"It has fallen; the issue is how to interpret it."},
     {t:"Reserve shares never change", why:"They have changed over decades."},
     {t:"The renminbi already holds a larger share than the dollar", why:"Its share was about 2.1% in 2026."}]},
   {id:"e4u15-q24", lesson:"e4u15-l3", level:2, q:"A government owes 5 billion dollars. Its currency falls from 10 to 20 per dollar. What happens to the debt measured in its own currency?", options:[
     {t:"It doubles, from 50 to 100 billion units", ok:true, why:"Right: 5 × 10 = 50 before and 5 × 20 = 100 after. This is the danger of original sin."},
     {t:"It halves", why:"A weaker currency makes foreign-currency debt more expensive, not less."},
     {t:"It stays the same because the dollar amount is unchanged", why:"The dollar amount is unchanged, but the government’s revenue is in its own currency."},
     {t:"It rises by 10 billion units", why:"The rise is 50 billion units (from 50 to 100)."}]},
   {id:"e4u15-q25", lesson:"e4u15-l3", level:1, q:"Which regional arrangement did East Asian governments build after the 1997–98 crisis?", options:[
     {t:"The Chiang Mai Initiative, a network of currency swaps", ok:true, why:"Correct. Launched in 2000 and made multilateral in 2010."},
     {t:"The European Stability Mechanism", why:"That is the euro area’s crisis fund (2012)."},
     {t:"The Paris Club", why:"That is a group of creditor governments, founded in 1956."},
     {t:"The MPIA", why:"That concerns WTO appeals."}]},
   {id:"e4u15-q26", lesson:"e4u15-l3", level:2, q:"A critic says: “If lenders know the IMF will rescue a country, they will lend carelessly next time.” Which concept is this?", options:[
     {t:"Moral hazard", ok:true, why:"Right. Rescues may encourage risk-taking; defenders reply that letting panics run costs far more."},
     {t:"Contagion", why:"Contagion is the spread of a crisis between countries."},
     {t:"A sudden stop", why:"That is an abrupt halt in capital inflows."},
     {t:"The double movement", why:"That is Polanyi’s concept of society’s reaction against markets."}]},
   {id:"e4u15-q27", lesson:"e4u15-l3", level:3, q:"In a debate on IMF conditionality, which argument would the IMF itself most likely make?", options:[
     {t:"Countries arrive already in crisis; Fund loans make adjustment gentler than it would otherwise be, and programmes now include social spending floors", ok:true, why:"Yes. This is the Fund’s standard defence."},
     {t:"Structural conditions returned after 2008 despite promises of restraint", why:"That is Kentikelenis, Stubbs and King’s critique."},
     {t:"Conditions impose austerity that deepens downturns", why:"That is the critics’ case, associated with Stiglitz and others."},
     {t:"Countries should never borrow from the IMF", why:"Neither side argues this as a general rule."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u15-q28", lesson:"e4u15-l4", level:1, q:"In Gereffi’s 1994 distinction, which is a buyer-driven chain?", options:[
     {t:"A clothing brand that owns no factories and sources from many suppliers", ok:true, why:"Right. Retailers and brands drive these chains through their buying power."},
     {t:"A carmaker that designs and coordinates production of its own vehicles", why:"That is a producer-driven chain."},
     {t:"A government-owned oil company", why:"That is not Gereffi’s category of buyer-driven chains."},
     {t:"A central bank swap line", why:"That is a financial arrangement, not a value chain."}]},
   {id:"e4u15-q29", lesson:"e4u15-l4", level:2, q:"Amara’s small workshop sews shirts only for one global brand, which sets the designs, prices and deadlines. Which GVC governance type is this?", options:[
     {t:"Captive", ok:true, why:"Yes. A small supplier dependent on a powerful buyer."},
     {t:"Market", why:"Market governance involves simple goods bought on price from many sellers."},
     {t:"Relational", why:"Relational chains rest on mutual dependence and complex know-how."},
     {t:"Hierarchy", why:"Hierarchy means one firm owns the stages."}]},
   {id:"e4u15-q30", lesson:"e4u15-l4", level:1, q:"On the smile curve, which stage usually captures the least value?", options:[
     {t:"Assembly", ok:true, why:"Correct. The bottom of the “smile”."},
     {t:"Research and design", why:"Design sits high on the left of the curve."},
     {t:"Branding and marketing", why:"Brands sit high on the right of the curve."},
     {t:"After-sales services", why:"Services sit on the right, higher-value side."}]},
   {id:"e4u15-q31", lesson:"e4u15-l4", level:3, q:"Gross trade statistics recorded each iPhone 3G’s full production cost of about 179 dollars as a Chinese export to the United States in 2009. What does value-added accounting show?", options:[
     {t:"Only about 6.50 dollars was added by assembly in China; most of the value came from parts made elsewhere and from US design", ok:true, why:"Yes. Bilateral balances in gross terms can mislead about who earns what."},
     {t:"China added almost all of the value", why:"Xing and Detert found assembly in China added under 4%."},
     {t:"The United States added nothing", why:"US firms supplied design, brand and some parts."},
     {t:"Value-added data and gross data always give the same balance", why:"The example shows they can differ greatly."}]},
   {id:"e4u15-q32", lesson:"e4u15-l4", level:1, q:"Who popularised the term “friend-shoring” in April 2022?", options:[
     {t:"US Treasury Secretary Janet Yellen", ok:true, why:"Right. She used it for moving supply chains to trusted partners."},
     {t:"European Commission President Ursula von der Leyen", why:"She popularised “de-risking” in March 2023."},
     {t:"Albert Hirschman", why:"Hirschman wrote about trade dependence in 1945."},
     {t:"Stan Shih", why:"He drew the smile curve."}]},
   {id:"e4u15-q33", lesson:"e4u15-l4", level:2, q:"A state controls software that nearly all advanced chip designers need, and bars a rival’s firms from using it. In Farrell and Newman’s terms, this is:", options:[
     {t:"A chokepoint effect", ok:true, why:"Correct. Control of a hub is used to cut others off."},
     {t:"A panopticon effect", why:"That is using a hub to monitor others."},
     {t:"Original sin", why:"That concerns borrowing in foreign currency."},
     {t:"Embedded liberalism", why:"That describes the postwar economic compromise."}]},
   {id:"e4u15-q34", lesson:"e4u15-l4", level:1, q:"What did Albert Hirschman argue in *National Power and the Structure of Foreign Trade* (1945)?", options:[
     {t:"A large state can gain power over small partners that depend on it far more than it depends on them", ok:true, why:"Right. Asymmetric dependence is power, as in 1930s Germany’s trade with Southeast Europe."},
     {t:"Trade always makes war impossible", why:"Hirschman showed how trade could be used for power, not that it ends war."},
     {t:"The world economy needs one stabiliser", why:"That is Kindleberger’s argument."},
     {t:"Value chains have five governance types", why:"That is Gereffi, Humphrey and Sturgeon (2005)."}]},
   {id:"e4u15-q35", lesson:"e4u15-l4", level:3, q:"Hana is writing about Japan’s 2019 export controls on chemicals to Korea. Which sentence meets the standard of neutral analysis?", options:[
     {t:"Japan’s government said the measures concerned export-control management; Korea’s government called them retaliation for court rulings on wartime labour", ok:true, why:"Yes. It attributes each position and states no motive as fact."},
     {t:"Japan obviously punished Korea and lied about its reasons", why:"This states a motive as fact and is not neutral."},
     {t:"Korea’s complaints were obviously exaggerated", why:"This takes a side without evidence."},
     {t:"Nothing important happened between the two countries in 2019", why:"Inaccurate: the measures were significant and widely debated."}]},
   {id:"e4u15-q36", lesson:"e4u15-l4", level:2, q:"What did the IEA’s *Global Critical Minerals Outlook 2025* find about refining?", options:[
     {t:"China was the leading refiner of 19 of 20 key energy minerals, with an average share of about 70%", ok:true, why:"Correct. The top three refiners held 86% of supply on average in 2024."},
     {t:"Refining is evenly spread across dozens of countries", why:"The report found high and rising concentration."},
     {t:"The United States refines most rare earths", why:"The report identifies China as the dominant refiner."},
     {t:"Export controls on minerals have disappeared", why:"The report notes that more than half of a broader group of energy-related minerals face some form of export control."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u15-q37", lesson:"e4u15-l5", level:1, q:"When and by whom was the Common Framework for debt treatments created?", options:[
     {t:"By the G20, in November 2020", ok:true, why:"Right. It brought Paris Club and other official creditors, including China, together."},
     {t:"By the UN General Assembly, in 2015", why:"2015 saw the Addis Ababa Action Agenda and the SDGs, not the Common Framework."},
     {t:"By the Paris Club alone, in 1956", why:"The Paris Club dates from 1956; the Common Framework is a G20 initiative."},
     {t:"By the IMF and World Bank, in 1996", why:"That was the HIPC initiative."}]},
   {id:"e4u15-q38", lesson:"e4u15-l5", level:2, q:"In a bond restructuring, 85% of bondholders accept new terms, but one fund refuses and sues for full payment. Which contract tool is designed to deal with this?", options:[
     {t:"A collective action clause, which lets a qualified majority bind all holders", ok:true, why:"Correct. It limits holdout creditors."},
     {t:"A swap line", why:"Swap lines are central-bank currency arrangements."},
     {t:"A rules-of-origin clause", why:"That concerns trade agreements."},
     {t:"A security exception", why:"That is GATT Article XXI."}]},
   {id:"e4u15-q39", lesson:"e4u15-l5", level:3, q:"A student writes: “Hambantota proves that China designs loans to seize ports.” Which evidence would a critic of the debt-trap thesis cite?", options:[
     {t:"Sri Lanka’s government proposed the port, and the 2017 lease raised money that helped it pay other debts", ok:true, why:"Yes. This is Brautigam and Rithmire’s (2021) account; it challenges the claim of design."},
     {t:"Sri Lanka defaulted in 2022, so China took the port then", why:"The lease came in 2017, before the default, and was a lease, not a seizure."},
     {t:"China has never lent to Sri Lanka", why:"China lent heavily to Sri Lanka."},
     {t:"AidData found that China lends nothing to high-income countries", why:"AidData found the opposite: most current lending goes to upper-middle- and high-income countries."}]},
   {id:"e4u15-q40", lesson:"e4u15-l5", level:1, q:"What is the outcome document of the fourth Financing for Development conference (Seville, 2025) called?", options:[
     {t:"The Compromiso de Sevilla (Sevilla Commitment)", ok:true, why:"Correct. It was adopted by consensus on 30 June 2025."},
     {t:"The Addis Ababa Action Agenda", why:"That came from the third conference, in 2015."},
     {t:"The Monterrey Consensus", why:"That came from the first conference, in 2002."},
     {t:"The Pact for the Future", why:"That was adopted at the UN Summit of the Future in 2024."}]},
   {id:"e4u15-q41", lesson:"e4u15-l5", level:2, q:"What did AidData’s *Chasing China* (2025) find about where China’s current overseas lending goes?", options:[
     {t:"More than three-quarters supports upper-middle- and high-income countries", ok:true, why:"Right. Over 2000–2023 the United States accepted more official-sector credit from China than any other country, much of it lending to US companies and projects."},
     {t:"Almost all goes to low-income African countries", why:"The report found a shift towards richer countries."},
     {t:"China stopped lending abroad in 2013", why:"It lent about 140 billion dollars in 2023 alone."},
     {t:"All Chinese lending is in the form of grants", why:"Most is lending, not grants; ODA commitments fell in 2023."}]},
   {id:"e4u15-q42", lesson:"e4u15-l5", level:2, q:"What did the G20’s 2022 review of MDB capital adequacy frameworks argue?", options:[
     {t:"The banks could lend more from their existing capital without endangering their financial strength", ok:true, why:"Correct. It recommended changes such as giving more weight to callable capital."},
     {t:"The banks should stop lending to middle-income countries", why:"That was not its recommendation."},
     {t:"The banks should be merged into the IMF", why:"No such proposal was made."},
     {t:"Capital rules should be tightened to lend less", why:"The review argued the opposite: rules were too cautious."}]},
   {id:"e4u15-q43", lesson:"e4u15-l5", level:3, q:"In a seminar, Kenji says: “The Common Framework has completely failed.” Which response is best grounded in the evidence of the lesson?", options:[
     {t:"It has been slow and limited to the poorer countries, but Zambia and Ghana reached agreements and later cases moved faster, so “learning but slow” fits the evidence better than “complete failure”", ok:true, why:"Yes. It weighs criticisms against outcomes with dated evidence."},
     {t:"It has solved the debt problem, since all cases closed in 2021", why:"Cases were still under way in 2026."},
     {t:"It never had any cases", why:"Chad, Zambia, Ghana and Ethiopia applied."},
     {t:"Only the IMF can judge it, so seminars should not discuss it", why:"Scholars, debtors and creditors all assess it."}]},
   {id:"e4u15-q44", lesson:"e4u15-l5", level:1, q:"When was the Heavily Indebted Poor Countries (HIPC) initiative launched?", options:[
     {t:"1996", ok:true, why:"Correct. It was enhanced in 1999 and followed by the MDRI in 2005."},
     {t:"1971", why:"That was the year of the Nixon shock."},
     {t:"2005", why:"That was the Multilateral Debt Relief Initiative."},
     {t:"2020", why:"That was the Common Framework."}]},
   {id:"e4u15-q45", lesson:"e4u15-l5", level:2, q:"Why are the IMF and World Bank usually not asked to cut their claims in a sovereign debt restructuring?", options:[
     {t:"By convention they have preferred creditor status, and they keep lending to the country during and after the crisis", ok:true, why:"Right. Their preferred status is a long-standing convention, though some borrowers and campaigners question it."},
     {t:"They never lend to governments", why:"Lending to governments is their core business."},
     {t:"International law forbids any restructuring of debts owed to them", why:"It rests mainly on convention and practice, not an explicit treaty ban."},
     {t:"They are private bondholders", why:"They are multilateral institutions owned by governments."}]}
  ]
});
