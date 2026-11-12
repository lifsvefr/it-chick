/* International Studies · Unit 16 · Environment and climate governance */
ICA.addUnit({
  id:"e4u16", track:"e4", n:16, title:"Environment and climate governance", icon:"🌍",
  blurb:"Environmental politics at seminar level: the ideas that frame it (commons, sustainable development, the Anthropocene, planetary boundaries, environmental justice); the UN climate regime from Rio to Paris and the IPCC; climate justice, finance, loss and damage and the 2025 ICJ advisory opinion; ozone, biodiversity, oceans and plastics; and the contested politics of the energy transition, with a method for analysing a climate negotiation. Figures and treaty status as of November 2026.",
  goals:[
    "Use the commons literature (Hardin, Ostrom, polycentric governance) and the ideas of sustainable development, the Anthropocene, planetary boundaries and environmental justice accurately, with their critics",
    "Explain how the climate regime’s design changed from the UNFCCC and Kyoto to Copenhagen and Paris, and how the IPCC links science and policy",
    "Describe the main arguments about climate justice, the state of climate finance and loss and damage, and what the ICJ’s 2025 advisory opinion actually says",
    "Compare the ozone, biodiversity, ocean and plastics regimes, and explain why some environmental treaties work better than others",
    "Lay out the competing positions on the energy transition, critical minerals and green industrial policy neutrally, attributing each one",
    "Analyse a climate negotiation step by step and argue a position in a seminar, with a counter-argument"
  ],
  read:[
    {book:"eir", where:"Chapter 15 “The Environment” (Raul Pacheco-Vega)", note:"A short, free overview of global environmental politics. The lessons go further; read it as a second voice."},
    {book:"eirt", where:"Chapter 11 “Green Theory” (Hugh C. Dyer)", note:"The theory behind Lesson 1, in a few pages."},
    {book:"pilmpa", where:"Chapter 16 “International Environmental Law” and Chapter 17 “International Climate Change Law”", note:"Open-access law chapters written from several perspectives, including Global South and critical ones. Use them for Lessons 2–4."},
    {book:"ipccsyr", where:"Summary for Policymakers, sections A “Current Status and Trends”, B “Future Climate Change, Risks, and Long-Term Responses” and C “Responses in the Near Term”", note:"The governments-approved summary of the IPCC’s Sixth Assessment Report. Short headline statements in bold make it skimmable."},
    {book:"wced87", where:"Chapter 2 “Towards Sustainable Development” and Chapter 10 “Managing the Commons”", note:"The Brundtland Report: the source of the most quoted definition of sustainable development."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u16-l1", title:"Ideas: commons, sustainability, the Anthropocene and justice", minutes:60,
   hook:{q:"Elinor Ostrom’s *Governing the Commons* (1990) showed that communities can manage shared resources for centuries. Alongside a Swiss Alpine village, which country’s mountain villages did she use as a leading example of long-lasting common land?", options:["Japan","Norway","Peru","Kenya"], answer:0, reveal:"**Japan.** Drawing on Margaret McKean’s research, Ostrom described the villages of Hirano, Nagaike and Yamanoka, whose households shared forests and meadows (*iriai* land) under detailed village rules for generations. Like Törbel in Switzerland, they showed that a commons need not end in tragedy. This lesson starts there, then turns to sustainable development, the Anthropocene, planetary boundaries and environmental justice."},
   goals:[
     "Classify resources by rivalry and excludability, and separate open access from common property",
     "Explain Ostrom’s design principles and polycentric governance, and their limits at the global scale",
     "Trace the idea of sustainable development from Stockholm (1972) to Rio (1992), and compare weak and strong sustainability",
     "Describe the Anthropocene debate and the planetary boundaries framework as of 2026, with critiques",
     "Use the three dimensions of environmental justice to analyse a real case"
   ],
   learn:[
    {h:"Not every commons is a tragedy", body:[
      {lead:"A village forest, a fishing ground and the atmosphere are all “shared”. Are they the same kind of problem?"},
      "The IR primer told Garrett Hardin’s story of the [[tragedy-of-the-commons|tragedy of the commons]] (*Science*, 1968) and Ostrom’s answer (see {{collective-action-problems}}). At seminar level, the first step is to be precise about **what kind of good** is at stake. Economists sort goods by two questions: does my use reduce yours (**rivalry**)? And can people be kept out (**excludability**)?",
      {fig:'<svg viewBox="0 0 340 296"><text class="s" x="113" y="20" text-anchor="middle">Easy to exclude</text><text class="s" x="263" y="20" text-anchor="middle">Hard to exclude</text><text class="s" x="16" y="92" text-anchor="middle" transform="rotate(-90 16 92)">Rival</text><text class="s" x="16" y="222" text-anchor="middle" transform="rotate(-90 16 222)">Non-rival</text><rect class="d-soft" x="34" y="30" width="148" height="122" rx="8" stroke-width="2"/><text x="108" y="64" text-anchor="middle">Private goods</text><text class="s" x="108" y="92" text-anchor="middle">a bag of rice,</text><text class="s" x="108" y="108" text-anchor="middle">a bicycle</text><rect class="d-rose" x="190" y="30" width="144" height="122" rx="8" stroke-width="3"/><text x="262" y="56" text-anchor="middle">Common-pool</text><text x="262" y="74" text-anchor="middle">resources</text><text class="s" x="262" y="98" text-anchor="middle">fish, pastures,</text><text class="s" x="262" y="114" text-anchor="middle">groundwater, the</text><text class="s" x="262" y="130" text-anchor="middle">air as a waste sink</text><rect class="d-gold" x="34" y="160" width="148" height="122" rx="8" stroke-width="2"/><text x="108" y="194" text-anchor="middle">Club goods</text><text class="s" x="108" y="222" text-anchor="middle">a toll road,</text><text class="s" x="108" y="238" text-anchor="middle">a subscription</text><rect class="d-sage" x="190" y="160" width="144" height="122" rx="8" stroke-width="2"/><text x="262" y="194" text-anchor="middle">Public goods</text><text class="s" x="262" y="222" text-anchor="middle">a weather forecast,</text><text class="s" x="262" y="238" text-anchor="middle">a stable climate</text></svg>', alt:"A two-by-two grid. Columns: easy to exclude, hard to exclude. Rows: rival, non-rival. Private goods (rival, excludable): a bag of rice, a bicycle. Common-pool resources (rival, hard to exclude), highlighted: fish, pastures, groundwater, the air as a waste sink. Club goods (non-rival, excludable): a toll road, a subscription. Public goods (non-rival, hard to exclude): a weather forecast, a stable climate.", cap:"Environmental problems mostly sit on the right. The atmosphere’s capacity to absorb greenhouse gases behaves like a common-pool resource; the stable climate that results is a public good."},
      "Hardin’s pasture is a [[common-pool-resource|common-pool resource]] left as [[open-access-resource|open access]]: anyone may enter and no one makes rules. Each herder’s extra animal imposes an [[externality]] on the others, a cost that falls outside his own decision. Siegfried Ciriacy-Wantrup and Richard Bishop (1975) pointed out that historic commons were usually **common property**: a defined group owned them and policed them. Hardin had described the absence of property, not common property. A 1990 review by Feeny, Berkes, McCay and Acheson, “The Tragedy of the Commons: Twenty-Two Years Later”, drew the same line across many cases.",
      {warn:"Hardin’s article was mainly about population growth, and it argued for coercive limits on having children. Many scholars who use the term today reject that argument. Cite the article for the metaphor, and say so if the context matters."}
    ]},
    {h:"Ostrom’s design principles and polycentric governance", body:[
      "{{elinor-ostrom|Elinor Ostrom}} compared long-lasting commons: the Swiss village of Törbel, the Japanese villages in the hook, the *huerta* irrigation systems of Valencia and Murcia in Spain, and the *zanjera* irrigation societies of the Philippines. She drew out eight [[ostrom-design-principles|design principles]] that the lasting ones shared:",
      {ol:["Clearly defined boundaries of users and resource","Rules that fit local conditions","Users take part in making the rules","Monitoring by users or people accountable to them","Graduated sanctions for rule-breakers","Cheap, quick ways to settle conflicts","Outside authorities recognise the users’ right to organise","For large systems, nested layers of organisation"]},
      "In 2009 she shared the Nobel Prize in economics with Oliver Williamson, “for her analysis of economic governance, especially the commons”.",
      "Late in her career she applied the work to climate change. In “Polycentric systems for coping with collective action and global environmental change” (*Global Environmental Change*, 2010), she argued against waiting for one global treaty. [[polycentric-governance|Polycentric governance]] means many overlapping centres of decision (cities, states, firms, regional bodies) that experiment, learn from each other and build trust. Andrew Jordan and colleagues’ open-access book *Governing Climate Change: Polycentricity in Action?* (2018) read the Paris Agreement in this light.",
      "Critics raise two points. First, **scale**: the principles came from small groups with clear boundaries and face-to-face monitoring, which the atmosphere lacks. Second, **power**: some studies of community resource management found that village rules can exclude women, migrants or lower castes. Ostrom herself warned against treating the principles as a blueprint."
    ]},
    {h:"Sustainable development: Stockholm to Rio", body:[
      "The 1972 UN Conference on the Human Environment in Stockholm created the UN Environment Programme (UNEP), based in Nairobi. Developing countries feared that environmental rules would block their growth. India’s prime minister Indira Gandhi asked the conference: “Are not poverty and need the greatest polluters?” The same year, *The Limits to Growth* (Meadows and colleagues, for the Club of Rome) used computer models to argue that exponential growth would hit physical limits: the [[limits-to-growth|limits to growth]] debate.",
      "The World Commission on Environment and Development, chaired by Norway’s Gro Harlem Brundtland, tried to join the two concerns. Its report *Our Common Future* (1987) defined [[sustainable-development|sustainable development]] as development “that meets the needs of the present without compromising the ability of future generations to meet their own needs”. Two ideas sit inside it: priority to the needs of the world’s poor, and limits set by technology and social organisation.",
      "The 1992 Earth Summit in Rio de Janeiro turned this into texts: the climate and biodiversity conventions, Agenda 21 and the Rio Declaration, whose Principle 7 states common but differentiated responsibilities and Principle 15 the [[precautionary-principle|precautionary approach]]. Twenty years later, Rio+20 (2012) launched the process that produced the Sustainable Development Goals (see [[sustainable-development-goals]] and Unit 17).",
      {table:[
        ["Position","Core claim","Associated with"],
        ["[[weak-sustainability|Weak sustainability]]","Natural capital can be replaced by human-made capital if total capital does not fall","Neoclassical environmental economics"],
        ["[[strong-sustainability|Strong sustainability]]","Some natural capital (a stable climate, key ecosystems) has no substitute","Herman Daly; ecological economics"],
        ["[[green-growth|Green growth]]","Growth can be decoupled from environmental harm","OECD *Towards Green Growth* (2011); South Korea’s 2008 strategy"],
        ["[[degrowth|Degrowth]]","Rich economies must shrink material use, and so output, by design","Tim Jackson (2009); Jason Hickel (2020)"]
      ]},
      "Post-development critics add that “sustainable development” can carry one model of the good life worldwide (see {{post-development}} and [[buen-vivir]])."
    ]},
    {h:"The Anthropocene and planetary boundaries", body:[
      "In 2000 the atmospheric chemist Paul Crutzen and the biologist Eugene Stoermer proposed that Earth had entered the [[anthropocene|Anthropocene]], an age in which humans are the main force changing the planet. A working group of geologists later proposed a formal epoch starting in the mid-20th century. In March 2024 the relevant stratigraphy body voted the proposal down, so the Anthropocene is **not** a formal unit of the geological time scale; the geologists’ own statement says the term will remain an invaluable descriptor of human impact.",
      "Social scientists debate the word itself. Andreas Malm and Alf Hornborg (2014) argued that “humanity” is the wrong subject, because a small part of humanity caused most of the damage; Jason W. Moore proposed “Capitalocene”. Dipesh Chakrabarty’s “The Climate of History: Four Theses” (2009) asked historians to think of humans as a geological force and a political community at once.",
      "In 2009 Johan Rockström and colleagues proposed nine [[planetary-boundaries|planetary boundaries]] (*Nature*): limits on Earth-system processes that define a “safe operating space for humanity”. Updates followed in 2015 and 2023. The Planetary Health Check run by the Potsdam Institute for Climate Impact Research reported in September 2025, and again in September 2026, that seven of the nine had been transgressed:",
      {fig:'<svg viewBox="0 0 340 352"><text x="170" y="22" text-anchor="middle">Planetary Health Check 2026</text><g stroke-width="2"><circle class="d-rose" cx="34" cy="56" r="10"/><circle class="d-rose" cx="34" cy="88" r="10"/><circle class="d-rose" cx="34" cy="120" r="10"/><circle class="d-rose" cx="34" cy="152" r="10"/><circle class="d-gold" cx="34" cy="184" r="10"/><circle class="d-gold" cx="34" cy="216" r="10"/><circle class="d-gold" cx="34" cy="248" r="10"/><circle class="d-sage" cx="34" cy="280" r="10"/><circle class="d-sage" cx="34" cy="312" r="10"/></g><text x="56" y="61">Climate change</text><text x="56" y="93">Biosphere integrity</text><text x="56" y="125">Biogeochemical flows</text><text x="56" y="157">Novel entities</text><text x="56" y="189">Land-system change</text><text x="56" y="221">Freshwater change</text><text x="56" y="253">Ocean acidification</text><text x="56" y="285">Aerosol loading</text><text x="56" y="317">Stratospheric ozone</text><text class="s" x="330" y="61" text-anchor="end">high risk</text><text class="s" x="330" y="189" text-anchor="end">increasing</text><text class="s" x="330" y="205" text-anchor="end">risk</text><text class="s" x="330" y="285" text-anchor="end">within</text><text class="s" x="330" y="301" text-anchor="end">the boundary</text><path class="d-ink" d="M244,44 V164 M244,172 V260 M244,268 V324" stroke-width="2"/></svg>', alt:"A list of the nine planetary boundaries with coloured markers. High-risk zone: climate change, biosphere integrity, biogeochemical flows and novel entities. Increasing-risk zone, still transgressed: land-system change, freshwater change and ocean acidification. Within the boundary: aerosol loading and stratospheric ozone.", cap:"Status as reported by the Planetary Health Check 2026 (Potsdam Institute for Climate Impact Research, September 2026). Aerosols still show regional breaches, for example in South Asia."},
      "The framework is influential and contested. Critics say global averages hide local thresholds (a river basin can collapse while the global freshwater figure looks fine), that choosing where a boundary sits is a political judgement, and that “planetary management” can sideline the poor. Kate Raworth’s [[doughnut-economics|doughnut]] (2012 Oxfam paper; book 2017) adds an inner ring, a **social foundation** of needs such as food, water and housing, below which no one should fall."
    ]},
    {h:"Environmental justice, from Warren County to the world", body:[
      "The sociology primer covered [[environmental-racism|environmental racism]] and the US movement that began with protests in Warren County, North Carolina, in 1982 (see {{environmental-sociology}}). International studies widens the lens.",
      "Ramachandra Guha and Joan Martínez-Alier’s *Varieties of Environmentalism* (1997) and Martínez-Alier’s *The Environmentalism of the Poor* (2002) argued that the poor often defend nature as a source of livelihood, not as wilderness or leisure: the [[environmentalism-of-the-poor|environmentalism of the poor]]. Examples include the Chipko movement of village women hugging trees in the Indian Himalaya (from 1973) and the Ogoni campaign against oil pollution in Nigeria’s Niger Delta, whose leader Ken Saro-Wiwa was executed by the military government in 1995. Rob Nixon’s *Slow Violence and the Environmentalism of the Poor* (2011) named harms that unfold over years and so escape the news: [[slow-violence|slow violence]].",
      "Japan offers a defining case. Minamata disease, mercury poisoning from a chemical factory’s wastewater, was officially identified in 1956; victims spent decades seeking recognition in court. The global treaty on mercury, adopted in 2013 at a conference in Kumamoto Prefecture, is named the Minamata Convention (in force 2017).",
      "David Schlosberg’s *Defining Environmental Justice* (2007) gives a toolkit with three dimensions: **distribution** (who bears harms and benefits), **recognition** (whose identity and knowledge are respected) and **participation** (who has a say). [[environmental-justice|Environmental justice]] research uses all three; Unit 6 discussed [[indigenous-peoples|Indigenous peoples’]] rights, which touch all three."
    ]},
    {h:"Worked example: one mangrove coast, four lenses", body:[
      {ex:"A mangrove coast in Southeast Asia shelters fish nurseries, protects villages from storms and stores carbon. Shrimp farms and a port want the land.\n\n• **Commons:** the fishery is a common-pool resource. Is it open access or governed by village rules? Which of Ostrom’s principles hold?\n• **Sustainability:** weak sustainability might accept mangrove loss offset by investment elsewhere; strong sustainability treats the storm protection as irreplaceable.\n• **Planetary boundaries:** land-system change and biosphere integrity, at a local scale the global indicators may miss.\n• **Environmental justice:** who loses fish and safety, who gains profits (distribution); whose knowledge counts (recognition); who was consulted (participation).", label:"Worked example"},
      "Each lens asks a different question, and a strong seminar paper says which one it uses and why.",
      {terms:["common-pool-resource","open-access-resource","externality","ostrom-design-principles","polycentric-governance","limits-to-growth","sustainable-development","precautionary-principle","weak-sustainability","strong-sustainability","green-growth","degrowth","anthropocene","planetary-boundaries","doughnut-economics","environmentalism-of-the-poor","slow-violence","environmental-justice"]}
    ]}
   ],
   try:[
    {id:"e4u16-l1-x1", type:"sort", q:"Sort each resource by type of good.", buckets:["Common-pool resource","Public good","Club good","Private good"], items:[
      {t:"A groundwater aquifer pumped by many farms", b:0, why:"Rival (water one farm pumps is gone for others) and hard to exclude: a classic common-pool resource."},
      {t:"Tuna on the high seas", b:0, why:"Rival and, beyond national waters, hard to exclude: a common-pool resource, often open access."},
      {t:"A free public weather forecast", b:1, why:"One person’s use does not reduce anyone else’s, and no one is excluded: a public good."},
      {t:"A members-only irrigation data service with a password", b:2, why:"Non-rival (data can be shared without being used up) but excludable by password: a club good."},
      {t:"A sack of fertiliser bought by one farmer", b:3, why:"Rival and excludable: a private good."},
      {t:"A stable global climate", b:1, why:"Everyone benefits and no one can be shut out. (The atmosphere’s limited capacity to absorb emissions, by contrast, behaves like a common-pool resource.)"}
    ]},
    {id:"e4u16-l1-x2", type:"mcq", q:"Why did Ciriacy-Wantrup and Bishop (1975) say Hardin’s “tragedy of the commons” was mislabelled?", options:[
      {t:"Hardin described open access, with no rules or owners; historic commons were usually common property governed by a defined group", ok:true, why:"Right. The distinction between open access and common property is the starting point of the later commons literature, including Ostrom’s."},
      {t:"Hardin got the date of the enclosure movement wrong", why:"Their critique was conceptual, about property regimes, not historical dating."},
      {t:"Pastures are not rival goods", why:"Pastures are rival: grass one animal eats is not available to another."},
      {t:"Only private property can protect a commons", why:"That was close to Hardin’s own conclusion, which their critique questioned."}
    ]},
    {id:"e4u16-l1-x3", type:"match", q:"Match each feature of a fishing cooperative to Ostrom’s design principle.", pairs:[
      ["Only registered households from three villages may fish the lagoon","Clearly defined boundaries","Who may use the resource is clear."],
      ["Fishers take turns patrolling the lagoon at night","Monitoring by users","The users monitor, so cheating is visible."],
      ["A first offence brings a warning, a second a one-week ban","Graduated sanctions","Penalties rise step by step rather than starting at the maximum."],
      ["Disputes go to an elders’ meeting held every new moon","Cheap conflict resolution","Low-cost, local ways to settle disputes."],
      ["The provincial government recognises the cooperative’s rules in law","Recognition of the right to organise","Outside authorities do not override the users’ rules."]
    ]},
    {id:"e4u16-l1-x4", type:"order", q:"Put these steps in the history of “sustainable development” in order.", items:[
      {t:"UN Conference on the Human Environment in Stockholm; UNEP is created", why:"1972: the first UN environment conference."},
      {t:"*Our Common Future* (the Brundtland Report) defines sustainable development", why:"1987: the definition still quoted today."},
      {t:"The Earth Summit in Rio adopts the Rio Declaration and Agenda 21", why:"1992: the climate and biodiversity conventions were opened for signature there too."},
      {t:"Rio+20 launches the process that leads to the Sustainable Development Goals", why:"2012: the SDGs followed in 2015."}
    ]},
    {id:"e4u16-l1-x5", type:"mcq", q:"A government argues: “Clearing this wetland is fine, because the timber revenue will be invested in schools, so the country’s total capital rises.” Which position is this, and who would object most strongly?", options:[
      {t:"Weak sustainability; supporters of strong sustainability would object that wetland functions such as flood control have no full substitute", ok:true, why:"Right. Weak sustainability accepts swapping natural for human-made capital; strong sustainability says some natural capital is critical."},
      {t:"Strong sustainability; degrowth scholars would agree", why:"Strong sustainability rejects this kind of substitution."},
      {t:"Degrowth; green growth advocates would object", why:"The argument is about substituting capital, not shrinking the economy."},
      {t:"The precautionary principle; ecological economists would agree", why:"The precautionary principle points the other way: avoid serious, irreversible harm even under uncertainty."}
    ]},
    {id:"e4u16-l1-x6", type:"spot", q:"A student summary of the Anthropocene and planetary boundaries. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"Crutzen and Stoermer proposed the term “Anthropocene” in 2000.", flag:false, why:"Correct."},
      " ",
      {t:"In 2024 geologists formally added the Anthropocene epoch to the geological time scale.", flag:true, why:"Wrong. In March 2024 the proposal for a formal Anthropocene epoch was rejected; the term remains in informal use."},
      " ",
      {t:"Rockström and colleagues proposed nine planetary boundaries in 2009.", flag:false, why:"Correct: *Nature*, 2009, with later updates."},
      " ",
      {t:"The 2026 Planetary Health Check found all nine boundaries transgressed.", flag:true, why:"Wrong. It reported seven of nine; aerosol loading and stratospheric ozone were within their boundaries."},
      " ",
      {t:"Critics argue that global boundaries can hide local thresholds.", flag:false, why:"Correct: a common critique."}
    ]},
    {id:"e4u16-l1-x7", type:"sort", q:"Which dimension of environmental justice (Schlosberg) does each complaint mainly raise?", buckets:["Distribution","Recognition","Participation"], items:[
      {t:"Toxic waste sites are concentrated in poorer districts", b:0, why:"Who bears the harm: distribution."},
      {t:"Officials dismissed fishers’ knowledge of the river as “anecdotal”", b:1, why:"Whose knowledge counts: recognition."},
      {t:"The hearing on the new mine was held in a language most villagers do not speak", b:2, why:"Who can take part in decisions: participation."},
      {t:"Mercury victims waited decades to be officially acknowledged as patients", b:1, why:"Being recognised as harmed is a recognition issue (it also had distributional consequences)."},
      {t:"Most of a dam’s electricity goes to a distant city while upstream farmers lose land", b:0, why:"Benefits and burdens fall on different people: distribution."}
    ]}
   ],
   apply:{
    intro:"Use the lesson’s concepts on real cases. A browser and a notebook are enough.",
    tasks:[
     {t:"Test Ostrom’s principles on a global commons", how:[
       "Choose one global commons: high-seas fisheries, the atmosphere as a waste sink, Antarctica, or orbits around Earth (space debris).",
       "For each of Ostrom’s eight principles, write one line: present, partly present or absent at the global level, with an example.",
       "Finish with two sentences: which missing principle matters most, and could a polycentric approach supply it?"
     ], write:"The commons I chose… Principle 1… 2… 3… 4… 5… 6… 7… 8… The missing principle that matters most… Could polycentricity help?…"},
     {t:"Read one environmental justice conflict", how:[
       "Open the Environmental Justice Atlas (ejatlas.org, free) and choose a conflict outside your own region.",
       "Note the place, the resource, the actors and the outcome.",
       "Analyse it with Schlosberg’s three dimensions: distribution, recognition, participation."
     ], write:"Conflict and place… Resource… Actors… Distribution… Recognition… Participation… What surprised me…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Can Ostrom’s design principles work for the atmosphere, or only for village-scale commons?",
       "2. Is “sustainable development” a useful compromise or a contradiction in terms?",
       "3. Does the word “Anthropocene” hide who caused environmental change?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Notes testing Ostrom’s principles on one global commons, an environmental justice case analysed in three dimensions, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 11 “Green Theory” (Hugh C. Dyer)", note:"Read after this lesson: how green thinkers question growth and the state."},
    {book:"wced87", where:"Chapter 2 “Towards Sustainable Development”", note:"The definition and its two key concepts (needs and limitations) in the original."},
    {book:"eir", where:"Chapter 15 “The Environment” (Raul Pacheco-Vega)", note:"A short overview of global environmental politics."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u16-l2", title:"The climate regime: from Rio to Paris, and the IPCC", minutes:60,
   hook:{q:"In the World Meteorological Organization’s consolidated analysis, which was the first calendar year in which the global average temperature was more than 1.5 °C above the 1850–1900 average?", options:["2016","2020","2024","No year has yet passed 1.5 °C"], answer:2, reveal:"**2024**, at about 1.55 °C (± 0.13 °C), the warmest year on record. But the Paris Agreement’s 1.5 °C goal refers to long-term warming averaged over about two decades, so one hot year does not by itself mean the goal is missed. This lesson explains how the climate regime was built, why its design changed, and how the IPCC turns science into texts governments approve."},
   goals:[
     "Explain the UNFCCC’s objective, principles and annexes, and why the annex “firewall” mattered",
     "Compare Kyoto’s top-down targets with Paris’s bottom-up pledges, and judge Copenhagen fairly",
     "Describe the Paris cycle: NDCs, the transparency framework and the global stocktake",
     "Explain how the IPCC works and why its AR7 timeline is contested",
     "State the latest WMO and Copernicus temperature figures correctly, with what they do and do not mean"
   ],
   learn:[
    {h:"A framework built for a hard problem", body:[
      {lead:"Cutting emissions costs each country now; the benefits are shared by all and arrive later. How do you design a treaty for that?"},
      "The primer set out the basics (see {{climate-politics}}). Scholars such as Scott Barrett (*Environment and Statecraft*, 2003) and David Victor (*Global Warming Gridlock*, 2011) argue that climate is close to the hardest kind of [[collective-action-problem|collective action problem]]: every economy emits, the costs of cutting are concentrated and immediate, and no one can enforce a deal on sovereign states.",
      "The [[unfccc|UN Framework Convention on Climate Change]] (1992; in force 1994) followed the **framework–protocol** model used for ozone: agree on goals and institutions first, add commitments later. Its Article 2 objective is to stabilise greenhouse gas concentrations at a level that would prevent “dangerous anthropogenic interference with the climate system”. Article 3 sets out [[cbdr-rc|common but differentiated responsibilities and respective capabilities]] (CBDR-RC) and a precautionary approach.",
      "The Convention also split the world. [[annex-i-parties|Annex I]] listed industrialised countries and economies in transition, expected to lead; Annex II, the richer subset, was to pay for developing countries’ efforts. Everyone else was “non-Annex I”. This binary, later called the **firewall**, shaped every negotiation for twenty years."
    ]},
    {h:"Kyoto: binding targets for some", body:[
      "The [[kyoto-protocol|Kyoto Protocol]] (1997; in force 2005) gave the industrialised countries listed in its Annex B binding targets: together, emissions at least 5 per cent below 1990 levels over 2008–2012. To lower costs it created three market mechanisms: emissions trading, joint implementation and the [[clean-development-mechanism|Clean Development Mechanism]] (CDM), under which projects in developing countries, many in China and India, earned credits that rich countries could buy.",
      "Politics undercut the design. Months before Kyoto, the US Senate voted 95–0 for the Byrd–Hagel resolution, opposing any treaty that excluded binding commitments for developing countries. The United States signed but never ratified. The Protocol entered into force only after Russia ratified in 2004. Canada withdrew in 2011, and Japan, Russia and New Zealand took no targets in the second period (2013–2020).",
      "Assessments differ. Victor and other critics call Kyoto a dead end: binding targets for a shrinking share of global emissions. Defenders reply that it built the accounting and reporting systems and carbon markets that later designs relied on."
    ]},
    {h:"Copenhagen 2009: failure or turning point?", body:[
      "COP15 in Copenhagen was meant to agree a successor. It ended with the Copenhagen Accord, a short text negotiated in the final hours by a small group of leaders, including the United States and the [[basic-group|BASIC]] countries (Brazil, South Africa, India, China). Several parties objected to the process, and because UNFCCC decisions need consensus, the COP only “took note” of the Accord.",
      "Yet the Accord contained the seeds of Paris: a 2 °C goal, national pledges submitted by each country, including developing ones, and a goal for developed countries to mobilise 100 billion US dollars a year by 2020. Daniel Bodansky’s “The Copenhagen Climate Change Conference: A Postmortem” (*American Journal of International Law*, 2010) argued that it marked a shift from top-down targets to [[pledge-and-review|pledge and review]]. The Cancún Agreements (2010) brought its content into the formal process, and the Durban Platform (2011) launched talks for a new agreement “applicable to all” by 2015."
    ]},
    {h:"Who sits at the table", body:[
      "Almost 200 parties negotiate, mostly through coalitions that pool expertise and bargaining power (see {{climate-negotiating-coalitions}}):",
      {table:[
        ["Coalition","Members (examples)","Typical priorities"],
        ["[[g77-and-china|G77 and China]]","More than 130 developing countries","Finance, CBDR-RC, development"],
        ["[[aosis|AOSIS]]; Least Developed Countries","Small island states; the poorest countries","1.5 °C, adaptation, loss and damage"],
        ["[[basic-group|BASIC]]; Like-Minded Developing Countries","Brazil, South Africa, India, China; the LMDC includes China, India and Saudi Arabia","Differentiation, policy space"],
        ["EU; Umbrella Group; Environmental Integrity Group","The EU; Australia, Canada, Japan, Norway and others; Switzerland, the Republic of Korea, Mexico and others","Ambition from all major emitters, transparency"]
      ]},
      "Groups overlap and split. The G77 contains both oil exporters and low-lying islands, so it often speaks with one voice on finance and with several on emission cuts. Latin American groups such as AILAC (2012) and the African Group of Negotiators add further positions."
    ]},
    {h:"Paris 2015: the bottom-up design", body:[
      "The [[paris-agreement|Paris Agreement]] (adopted December 2015; in force November 2016) aims to hold warming “well below 2 °C” and to pursue efforts to limit it to 1.5 °C, alongside goals on adaptation and on making finance flows consistent with low emissions.",
      {table:[
        ["","Kyoto Protocol (1997)","Paris Agreement (2015)"],
        ["Who commits","Annex B industrialised countries","Every party"],
        ["Targets","Negotiated, legally binding","Self-chosen [[nationally-determined-contribution|NDCs]]; the targets are not binding, the duties to submit, explain and report are"],
        ["Differentiation","Fixed annexes","CBDR-RC “in the light of different national circumstances”"],
        ["Raising ambition","Renegotiate the next period","A five-year cycle that should ratchet up"]
      ]},
      "The phrase “in the light of different national circumstances” came from the US–China joint announcement of November 2014, a bilateral deal that made Paris possible by softening the firewall without abolishing it.",
      "The heart of Paris is a cycle, sometimes called the [[ratchet-mechanism|ratchet]]:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u16l2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-gold" x="90" y="10" width="160" height="66" rx="10" stroke-width="2"/><text x="170" y="34" text-anchor="middle">NDC submitted</text><text class="s" x="170" y="52" text-anchor="middle">every five years</text><text class="s" x="170" y="67" text-anchor="middle">(2020, 2025, 2030…)</text><rect class="d-soft" x="190" y="130" width="144" height="70" rx="10" stroke-width="2"/><text x="262" y="154" text-anchor="middle">Implement</text><text x="262" y="172" text-anchor="middle">and report</text><text class="s" x="262" y="190" text-anchor="middle">transparency rules</text><rect class="d-rose" x="90" y="254" width="160" height="66" rx="10" stroke-width="2"/><text x="170" y="278" text-anchor="middle">Global stocktake</text><text class="s" x="170" y="296" text-anchor="middle">2023, then 2028…</text><text class="s" x="170" y="311" text-anchor="middle">collective progress</text><rect class="d-sage" x="6" y="130" width="144" height="70" rx="10" stroke-width="2"/><text x="78" y="154" text-anchor="middle">Next NDC</text><text class="s" x="78" y="172" text-anchor="middle">a progression,</text><text class="s" x="78" y="188" text-anchor="middle">highest ambition</text><path class="d-ink" d="M232,78 Q262,98 262,126" fill="none" stroke-width="2" marker-end="url(#e4u16l2a)"/><path class="d-ink" d="M262,204 Q262,234 234,252" fill="none" stroke-width="2" marker-end="url(#e4u16l2a)"/><path class="d-ink" d="M106,252 Q78,234 78,204" fill="none" stroke-width="2" marker-end="url(#e4u16l2a)"/><path class="d-ink" d="M78,126 Q78,98 108,78" fill="none" stroke-width="2" marker-end="url(#e4u16l2a)"/></svg>', alt:"A cycle of four boxes joined by arrows. NDC submitted every five years (2020, 2025, 2030 and so on) leads to implement and report under transparency rules, which leads to the global stocktake (2023, then 2028) of collective progress, which leads to the next NDC, a progression reflecting highest possible ambition, which leads back to a new NDC.", cap:"The Paris cycle. Each party’s NDC should be a progression on the last (Article 4.3), informed by the stocktake (Article 14)."},
      "Under the [[enhanced-transparency-framework|enhanced transparency framework]] (Article 13) parties report emissions and progress under common rules. The first [[global-stocktake|global stocktake]] concluded at COP28 in Dubai (2023); its decision called on parties to contribute to tripling renewable energy capacity and doubling energy efficiency by 2030 and to “transitioning away from fossil fuels in energy systems”. Article 6 allows countries to trade emission reductions ([[article-6-carbon-markets|Article 6 carbon markets]]); its rules were completed at COP29 in 2024. Japan’s Joint Crediting Mechanism, a bilateral scheme with partner countries in Asia, Africa and Latin America, is one example of trading under Article 6.2.",
      "Robert Falkner (*International Affairs*, 2016) called this a “new logic”: universal participation through national pledges, with ambition raised by transparency and peer pressure. Sceptics answer that the sum of pledges still falls far short (see below). Others, following William Nordhaus’s “Climate Clubs” (*American Economic Review*, 2015), argue that a small group of ambitious states imposing penalties on outsiders would do better than universal pledges: [[climate-club|climate clubs]] (see also [[club-governance]]).",
      "Participation shifts. The United States left Paris again with effect from 27 January 2026, and its notice of withdrawal from the UNFCCC itself takes effect, under the Convention’s one-year rule, on 27 February 2027."
    ]},
    {h:"The IPCC: science that governments sign off", body:[
      "The [[ipcc|Intergovernmental Panel on Climate Change]] (IPCC), set up in 1988 by the WMO and UNEP, does no new research. Volunteer authors assess published studies in three working groups (physical science; impacts and adaptation; mitigation). Each report has a Summary for Policymakers that government delegates approve line by line with the authors, so the summary is both scientific and diplomatic. Peter Haas’s idea of an [[epistemic-community|epistemic community]] (Unit 13) fits it well.",
      "The Sixth Assessment Report (AR6, 2021–2023) concluded that it is “unequivocal” that human influence has warmed the atmosphere, ocean and land. Its 2018 special report on 1.5 °C helped make 1.5 °C the regime’s reference point, and its [[carbon-budget|carbon budget]] concept (how much more CO₂ can be emitted for a given chance of staying below a temperature limit) became a standard tool.",
      "The seventh cycle (AR7) shows the politics. Governments failed six times between 2024 and October 2026 to agree when the working-group reports should be delivered. Many developed countries, small island states and least developed countries want them by 2028 to inform the second global stocktake; Saudi Arabia, India and Russia, among others, favour a later schedule, arguing that haste would harm rigour and the inclusion of Global South authors. The 65th session (Addis Ababa, October 2026) was suspended without agreement. A special report on cities is due in March 2027 and the AR7 Synthesis Report by late 2029."
    ]},
    {h:"1.5 °C: where the numbers stand (November 2026)", body:[
      {table:[
        ["Period","WMO (vs 1850–1900)","Copernicus ERA5"],
        ["2024","1.55 °C ± 0.13 (record)","1.60 °C (record)"],
        ["2025","1.43 °C","1.47 °C"],
        ["Jan–Sep 2026","1.47 °C ± 0.13","—"]
      ]},
      "WMO’s update for COP31 (November 2026) expects 2026 to be one of the four warmest years on record and says 2015–2026 are the twelve warmest. Copernicus reported in January 2026 that 2023–2025 was the first three-year period to average more than 1.5 °C, and that at the current rate the long-term 1.5 °C level “could be reached by the end of this decade”.",
      {warn:"Datasets differ slightly, so always name the source and the year. And keep years and long-term averages apart: “2024 exceeded 1.5 °C” is correct; “2024 broke the Paris Agreement” is not."},
      "Looking forward, UNEP’s *Emissions Gap Report 2026* (October 2026) projects about 2.6–2.7 °C of warming this century if current NDCs are fully delivered and about 2.8 °C under current policies, and says the chance of holding warming below 1.5 °C with no or limited [[temperature-overshoot|overshoot]] is gone. Many countries have [[net-zero|net-zero]] targets for mid-century; the gap between those long-term targets and near-term action is a standard seminar topic.",
      {terms:["unfccc","cbdr-rc","annex-i-parties","kyoto-protocol","clean-development-mechanism","g77-and-china","basic-group","climate-club","pledge-and-review","ratchet-mechanism","enhanced-transparency-framework","global-stocktake","article-6-carbon-markets","ipcc","carbon-budget","temperature-overshoot","net-zero"]}
    ]}
   ],
   try:[
    {id:"e4u16-l2-x1", type:"match", q:"Match each text to its defining feature.", pairs:[
      ["UNFCCC (1992)","Objective of avoiding dangerous interference with the climate system; annexes of countries","The framework convention set goals and institutions."],
      ["Kyoto Protocol (1997)","Binding emission targets for industrialised countries only","Annex B targets for 2008–2012."],
      ["Copenhagen Accord (2009)","Leaders’ text of which the COP only “took note”","Some parties objected, so it was not adopted by consensus."],
      ["Paris Agreement (2015)","Every party submits a nationally determined contribution every five years","The bottom-up design."],
      ["First global stocktake decision (2023)","Call to contribute to transitioning away from fossil fuels in energy systems","COP28, Dubai."]
    ]},
    {id:"e4u16-l2-x2", type:"mcq", q:"Why is the Copenhagen Accord often described as a turning point, despite the conference’s reputation as a failure?", options:[
      {t:"It introduced national pledges from developed and developing countries alike, the approach Paris later formalised", ok:true, why:"Right. Bodansky and others see it as the move from top-down targets to pledge and review."},
      {t:"It was adopted unanimously as a binding treaty", why:"The COP only took note of it; it was neither adopted by consensus nor binding."},
      {t:"It created the IPCC", why:"The IPCC dates from 1988."},
      {t:"It set binding targets for China and India", why:"No such targets were set; pledges were voluntary."}
    ]},
    {id:"e4u16-l2-x3", type:"sort", q:"Does each feature belong to the Kyoto design or the Paris design?", buckets:["Kyoto Protocol","Paris Agreement"], items:[
      {t:"Targets negotiated internationally and legally binding", b:0, why:"Kyoto’s Annex B targets were binding commitments."},
      {t:"Each party decides its own contribution", b:1, why:"NDCs are nationally determined."},
      {t:"Only industrialised countries had emission targets", b:0, why:"Developing countries had no Kyoto targets."},
      {t:"A collective stocktake every five years", b:1, why:"Article 14 of Paris."},
      {t:"Differentiation by fixed annexes", b:0, why:"Kyoto kept the Convention’s annex firewall."},
      {t:"Differentiation “in the light of different national circumstances”", b:1, why:"Paris’s softened formula, from the 2014 US–China announcement."}
    ]},
    {id:"e4u16-l2-x4", type:"order", q:"Put the Paris cycle in order, starting with a party’s NDC.", items:[
      {t:"A party submits its NDC", why:"Every five years each party communicates a contribution."},
      {t:"It implements policies and reports progress under the transparency framework", why:"Article 13 reporting shows what is actually happening."},
      {t:"The global stocktake assesses collective progress", why:"Article 14: the first concluded in 2023."},
      {t:"The party submits a new NDC, informed by the stocktake, that should be a progression", why:"Articles 4.3 and 4.9: the ratchet."}
    ]},
    {id:"e4u16-l2-x5", type:"number", q:"Invented figures for practice: suppose the remaining carbon budget for a temperature goal were 120 billion tonnes of CO₂, and the world emitted 40 billion tonnes a year at a constant rate. How many **years** would the budget last?", answer:3, tol:0, unit:"years", why:"120 ÷ 40 = 3 years. The point of the carbon budget idea is that cumulative emissions, not the rate in any one year, set the warming, so a fixed budget is used up faster the higher annual emissions stay.", wrongs:[
      {v:80, tol:0, why:"That is 120 − 40, the budget left after one year, not the number of years."},
      {v:0.33, tol:0.01, why:"That is 40 ÷ 120: the share of the budget used each year. Invert it to get years."},
      {v:160, tol:0, why:"That adds the two numbers; budgets are divided by the annual rate."}
    ]},
    {id:"e4u16-l2-x6", type:"mcq", q:"Mei is writing about why the IPCC could not agree its AR7 timeline. Which summary is accurate and neutral?", options:[
      {t:"Many developed and vulnerable countries wanted reports by 2028 to inform the second global stocktake; some governments, including Saudi Arabia, India and Russia, favoured a later schedule, citing scientific rigour and inclusiveness", ok:true, why:"Right: it gives both positions and the reasons each side gives, without endorsing either."},
      {t:"Scientists refused to write the reports on time", why:"The disagreement was among governments in the plenary, not a refusal by authors."},
      {t:"All governments agreed but the budget ran out", why:"Funding pressures exist, but the core problem was the lack of consensus on the timeline."},
      {t:"Oil-producing states blocked science because they reject climate change", why:"That attributes motives rather than reporting stated positions; a neutral summary says what each side argues."}
    ]},
    {id:"e4u16-l2-x7", type:"spot", q:"A news paragraph about climate figures. Tap each sentence that is **wrong or misleading**.", ask:"is wrong or misleading", parts:[
      {t:"WMO estimates that 2024 was about 1.55 °C warmer than the 1850–1900 average.", flag:false, why:"Correct, with an uncertainty of ± 0.13 °C."},
      " ",
      {t:"That means the Paris Agreement’s 1.5 °C goal was officially breached in 2024.", flag:true, why:"Misleading. The Paris goal refers to long-term warming averaged over about two decades; a single year above 1.5 °C does not by itself breach it."},
      " ",
      {t:"Copernicus reported that 2023–2025 was the first three-year period to average above 1.5 °C.", flag:false, why:"Correct, per its January 2026 release."},
      " ",
      {t:"The IPCC itself carries out the temperature measurements each year.", flag:true, why:"Wrong. The IPCC assesses published research; annual temperature figures come from datasets such as those combined by WMO, including Copernicus ERA5."},
      " ",
      {t:"WMO expects 2026 to be one of the four warmest years on record.", flag:false, why:"Correct, per its November 2026 update."}
    ]}
   ],
   apply:{
    intro:"Read primary documents of the climate regime. All are free online.",
    tasks:[
     {t:"Read one NDC", how:[
       "Open the UNFCCC’s NDC Registry and choose the latest NDC of a country outside your own region (for example Indonesia, Kenya, Chile, Viet Nam or Fiji).",
       "Record: target type (absolute, intensity, below business-as-usual), base or reference year, target year, conditional and unconditional parts, sectors covered, adaptation section, finance needs.",
       "Write two sentences on how it reflects “different national circumstances”."
     ], write:"Country and date… Target type… Base year… Target year… Conditional part… Sectors… Adaptation… Finance needs… National circumstances…"},
     {t:"From science to summary", how:[
       "Open the IPCC AR6 Synthesis Report Summary for Policymakers and read the bold headline statements of section A.",
       "Find one news article that reports the IPCC. Compare one claim in it with the matching headline statement.",
       "Note any difference in wording, certainty or emphasis."
     ], write:"Headline statement… What the article says… Difference… Why it might matter…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was the shift from Kyoto’s binding targets to Paris’s pledges a necessary compromise or a loss of ambition?",
       "2. Is CBDR-RC still a fair basis for differentiation in a world where some developing countries are among the largest emitters?",
       "3. Should the IPCC’s timetable follow the needs of the global stocktake, or should science set its own pace?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Notes on one country’s NDC, a comparison of an IPCC headline statement with its news coverage, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 17 “International Climate Change Law”", note:"Read after this lesson: the legal design of the UNFCCC, Kyoto and Paris, from several perspectives."},
    {book:"ipccsyr", where:"Summary for Policymakers, section A “Current Status and Trends”", note:"The approved headline findings on observed warming and its causes."},
    {book:"eir", where:"Chapter 15 “The Environment” (Raul Pacheco-Vega)", note:"Background on how environmental regimes are negotiated."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u16-l3", title:"Climate justice, finance and the law", minutes:60,
   hook:{q:"On 23 July 2025 the International Court of Justice gave its advisory opinion on states’ obligations in respect of climate change. How did the judges divide on its main conclusions?", options:["They were unanimous","9 votes to 6","12 votes to 3","There was no vote: the Court declined to answer"], answer:0, reveal:"**Unanimous.** The request came from the UN General Assembly in 2023, after a campaign that law students from Pacific island countries began in 2019 and Vanuatu’s government took up. The opinion is not binding, but a unanimous statement of the law by the world court carries great weight. This lesson covers who should pay for climate change, how climate finance and loss and damage evolved, and what the Court actually said."},
   goals:[
     "Distinguish historical, current, per-person and consumption-based views of responsibility, and the principles built on them",
     "Trace climate finance from the 100 billion dollar goal to the New Collective Quantified Goal and the COP30 outcome",
     "Explain how loss and damage moved from taboo to a fund, and the debate over compensation",
     "Describe the diplomacy of small island states, especially in the Pacific",
     "Summarise what the ICJ’s 2025 advisory opinion says, and what it does not say"
   ],
   learn:[
    {h:"Whose emissions?", body:[
      {lead:"Ask “who caused climate change?” and you get different answers depending on what you count."},
      "Four ways of counting compete. **Cumulative** emissions since the industrial revolution point to the United States and Europe, because CO₂ stays in the atmosphere for centuries. **Current annual** emissions point to China, today’s largest emitter, followed by the United States and India. **Per person**, emissions in many African and South Asian countries are a small fraction of those in North America, the Gulf or Australia. **Consumption-based** accounts move emissions from the country that makes goods to the country that buys them.",
      "These numbers carry moral arguments. In 1991 Anil Agarwal and Sunita Narain of India’s Centre for Science and Environment published *Global Warming in an Unequal World: A Case of Environmental Colonialism*, attacking a US research institute’s ranking for treating a poor farmer’s methane like a rich commuter’s CO₂. Henry Shue (1993) drew the line between **subsistence** emissions and **luxury** emissions.",
      {table:[
        ["Principle","Who should pay","Main objection"],
        ["[[polluter-pays-principle|Polluter pays]] / [[historical-responsibility|historical responsibility]]","Those who emitted most","People long dead did not know the harm (“excusable ignorance”)"],
        ["Beneficiary pays","Those who gained from past emissions, knowingly or not","Hard to measure benefits"],
        ["Ability to pay","Those with most resources","Ignores who caused the problem"]
      ]},
      "Simon Caney and others combine these principles. [[climate-justice|Climate justice]] also has procedural and generational sides: who decides, and what is owed to people not yet born."
    ]},
    {h:"Climate finance: from 100 billion to the NCQG", body:[
      "Under the UNFCCC and Article 9 of Paris, developed countries are to provide finance to developing countries. At Copenhagen (2009) they set a goal of mobilising 100 billion US dollars a year by 2020. The OECD reported that they first met it in 2022, two years late, with 115.9 billion dollars provided and mobilised. Critics, including NGOs such as Oxfam, argue that counting loans at face value overstates the real effort; donors reply that loans from development banks are a legitimate and efficient tool.",
      "At COP29 in Baku (November 2024) parties agreed the [[new-collective-quantified-goal|New Collective Quantified Goal]] (NCQG): developed countries “taking the lead” in mobilising **at least 300 billion dollars a year by 2035** for developing countries, from many sources, public and private. A wider call asks all actors to scale up finance to at least 1.3 trillion dollars a year by 2035. India’s delegate objected strongly in the closing plenary, and several developing-country groups called the sum far too low; developed countries called it a realistic floor.",
      {fig:'<svg viewBox="0 0 340 300"><text x="10" y="24">Finance goals for developing countries</text><text class="s" x="10" y="42">(US dollars a year; bars drawn to scale)</text><rect class="d-soft" x="10" y="80" width="23" height="28" stroke-width="2"/><text x="42" y="99">100 billion by 2020</text><text class="s" x="10" y="70">Copenhagen goal (2009)</text><text class="s" x="42" y="122">OECD: first met in 2022</text><rect class="d-gold" x="10" y="160" width="69" height="28" stroke-width="2"/><text x="88" y="179">at least 300 billion</text><text class="s" x="10" y="150">NCQG (COP29, 2024)</text><text class="s" x="88" y="202">by 2035; developed countries</text><text class="s" x="88" y="218">take the lead</text><rect class="d-sage" x="10" y="250" width="300" height="28" stroke-width="2"/><text x="160" y="269" text-anchor="middle">1.3 trillion by 2035</text><text class="s" x="10" y="240">Call to all actors, public and private</text><text class="s" x="10" y="294">Each bar’s length matches its dollar value.</text></svg>', alt:"Three horizontal bars drawn to scale. A short bar for the Copenhagen goal of 100 billion dollars a year by 2020, first met in 2022 according to the OECD. A bar three times longer for the COP29 goal of at least 300 billion dollars a year by 2035, with developed countries taking the lead. A long bar for the call to all actors, public and private, to reach 1.3 trillion dollars a year by 2035.", cap:"The step from 100 billion to 300 billion is threefold in nominal terms; inflation means the real increase is smaller."},
      "COP30 in Belém (November 2025) added a call for efforts to at least triple [[adaptation-finance|adaptation finance]] by 2035, without stating a baseline, and adopted voluntary indicators for the [[global-goal-on-adaptation|global goal on adaptation]]. Finance debates now run through other bodies too: reform of multilateral development banks, debt relief and [[debt-swap|debt-for-nature or debt-for-climate swaps]], [[climate-resilient-debt-clause|climate-resilient debt clauses]] that pause repayments after a disaster (Unit 15), and reform campaigns such as Barbados’s Bridgetown Initiative (Unit 13). Who counts as a contributor is itself disputed: some developed countries want large emerging economies such as China to join the donor base; those countries reply that the Convention places the duty on developed countries."
    ]},
    {h:"Loss and damage: from taboo to fund", body:[
      "Some harms cannot be adapted to: a cyclone that destroys an island’s crops, a coast that disappears. [[loss-and-damage|Loss and damage]] is the term for them. In 1991 Vanuatu, for the Alliance of Small Island States, proposed an international insurance pool; for two decades developed countries resisted anything that sounded like liability.",
      {ol:["2013: the Warsaw International Mechanism on loss and damage is set up (COP19).","2015: Paris Article 8 recognises loss and damage; the accompanying decision says it does not provide a basis for “liability or compensation”.","2022: COP27 in Sharm el-Sheikh agrees to establish funding arrangements, including a fund.","2023: on the first day of COP28 the fund is made operational, hosted for an interim period by the World Bank.","2025: the fund’s board approves a first 250 million dollar round of grants for 2025–2026."]},
      "Pledges stood at about 786 million dollars in April 2025, far below the losses vulnerable countries report. The core argument continues: is this compensation owed for harm caused, or solidarity with those in need? Many vulnerable states and campaigners use the first frame; most developed states prefer the second."
    ]},
    {h:"Islands at the front line", body:[
      "The Alliance of Small Island States ([[aosis|AOSIS]], 1990) gives [[sids|small island developing states]] a joint voice. They pressed for 1.5 °C long before it entered the Paris text, and the Marshall Islands’ foreign minister Tony de Brum helped build the High Ambition Coalition that pushed for it in 2015. Unit 2 covered the Pacific Islands Forum’s Boe Declaration (2018), which called climate change “the single greatest threat” to Pacific peoples, and its 2023 declaration on the continuity of statehood despite sea-level rise.",
      "Small states turned to law. In 2021 Antigua and Barbuda and Tuvalu set up a Commission of Small Island States on Climate Change and International Law, which asked the International Tribunal for the Law of the Sea ([[itlos|ITLOS]]) for an opinion. In May 2024 ITLOS advised that greenhouse gas emissions are marine pollution under [[unclos|UNCLOS]] and that states must take all necessary measures with stringent due diligence. Movement is part of the picture too: the migration primer covered Tuvalu’s Falepili Union with Australia and why “climate refugee” is not a legal category (see {{climate-and-mobility}})."
    ]},
    {h:"What the ICJ said in July 2025", body:[
      "The UN General Assembly requested the opinion by consensus in March 2023 (resolution 77/276). States and organisations filed 91 written statements, and hearings ran from 2 to 13 December 2024. On 23 July 2025 the Court answered unanimously. Its main points:",
      {list:[
        "**Treaties bind.** The UNFCCC, Kyoto and Paris impose real obligations. The Court called 1.5 °C the agreed primary temperature goal under Paris.",
        "**NDCs are not a free choice.** Their content is not entirely at a party’s discretion: each must reflect its highest possible ambition, and together they must be capable of meeting the temperature goal.",
        "**Custom binds everyone.** The [[no-harm-rule|duty to prevent significant harm]] to the environment applies to the climate system, as does a duty to cooperate; this binds states that are not parties to the climate treaties.",
        "**Other law matters.** UNCLOS and human rights law apply; the Court called a clean, healthy and sustainable environment essential to enjoying other human rights (see [[right-to-healthy-environment]]).",
        "**Fossil fuels.** Failing to take appropriate action to protect the climate system, including through fossil fuel production, consumption, exploration licences or subsidies, may constitute an internationally wrongful act, with the usual consequences: cessation, guarantees of non-repetition and reparation.",
        "**Statehood.** Once a state exists, losing territory to the sea would not necessarily end its existence ([[statehood-continuity|statehood continuity]])."
      ]},
      "What it did **not** do: it gave no binding judgment, named no state as responsible, and left causation for particular harms to future cases. Vanuatu and many vulnerable states called it a historic victory. Several large emitters had argued in the proceedings that the climate treaties are a special regime that displaces general rules; the Court did not accept that view. Scholars now debate how national courts and negotiators will use it. Regional courts are adding to the body of law: the Inter-American Court of Human Rights issued its own climate opinion in 2025 (see {{icj-in-practice}} for how the ICJ works).",
      "National courts moved earlier. In *Leghari v. Federation of Pakistan* (2015) the Lahore High Court ordered the government to implement its own climate policy; in *Urgenda* (2019) the Supreme Court of the Netherlands required deeper emission cuts; and in *KlimaSeniorinnen v. Switzerland* (2024) the European Court of Human Rights found that inadequate climate policy violated the right to respect for private and family life. Critics argue that such cases move policy choices from parliaments to judges; supporters reply that courts are applying rights and commitments governments have already accepted.",
      {terms:["climate-justice","historical-responsibility","polluter-pays-principle","new-collective-quantified-goal","adaptation-finance","global-goal-on-adaptation","loss-and-damage","aosis","sids","no-harm-rule","right-to-healthy-environment","statehood-continuity"]}
    ]}
   ],
   try:[
    {id:"e4u16-l3-x1", type:"sort", q:"Which principle of burden-sharing does each argument rely on?", buckets:["Polluter pays","Beneficiary pays","Ability to pay"], items:[
      {t:"Countries that emitted most since 1850 should pay most", b:0, why:"Responsibility follows causation: historical responsibility."},
      {t:"Today’s citizens of industrialised countries enjoy wealth built on cheap coal, so they should contribute, even if they did not emit it themselves", b:1, why:"Payment follows benefit, not personal causation."},
      {t:"The richest countries should pay simply because they can afford it", b:2, why:"Capacity, not cause."},
      {t:"A company whose products caused most of a region’s emissions should fund the clean-up", b:0, why:"The emitter pays for its harm."},
      {t:"A wealthy Gulf state with low historical emissions should still contribute", b:2, why:"Its historical share is small, so the argument rests on its capacity to pay."}
    ]},
    {id:"e4u16-l3-x2", type:"number", q:"The Copenhagen goal was 100 billion US dollars a year (by 2020). The NCQG floor is 300 billion a year (by 2035). By what **factor** is the new floor larger, in nominal dollars?", answer:3, tol:0, unit:"times", why:"300 ÷ 100 = 3: the new floor is three times the old goal in nominal terms. Because prices rose between 2020 and 2035, the real increase is smaller, a point negotiators from developing countries made at Baku.", wrongs:[
      {v:200, tol:0, why:"That is the difference in billions (300 − 100), not the factor."},
      {v:0.33, tol:0.01, why:"That is 100 ÷ 300: the old goal as a share of the new one."},
      {v:13, tol:0, why:"That compares 1.3 trillion with 100 billion. The question asks about the 300 billion floor."}
    ]},
    {id:"e4u16-l3-x3", type:"order", q:"Put these steps in the history of loss and damage in order.", items:[
      {t:"Vanuatu, for AOSIS, proposes an international insurance pool", why:"1991, during the negotiation of the Convention."},
      {t:"The Warsaw International Mechanism is set up", why:"2013, COP19."},
      {t:"Paris Article 8 recognises loss and damage, with no basis for liability or compensation", why:"2015."},
      {t:"COP27 agrees to establish a fund", why:"2022, Sharm el-Sheikh."},
      {t:"The fund is operationalised on COP28’s first day", why:"2023, Dubai."}
    ]},
    {id:"e4u16-l3-x4", type:"mcq", q:"Which statement about the New Collective Quantified Goal (COP29, 2024) is accurate?", options:[
      {t:"Developed countries are to take the lead in mobilising at least 300 billion dollars a year by 2035, with a wider call for 1.3 trillion from all actors", ok:true, why:"Right: two layers, a floor led by developed countries and a broader call."},
      {t:"Developed countries must give 1.3 trillion dollars a year in public grants", why:"1.3 trillion is a call on all actors, public and private, not a grant obligation on developed countries."},
      {t:"China and India must contribute 300 billion dollars a year", why:"Developing countries are encouraged to contribute voluntarily; they are not obliged."},
      {t:"It replaced the loss and damage fund", why:"The fund continues separately."}
    ]},
    {id:"e4u16-l3-x5", type:"spot", q:"A blog post summarises the ICJ’s 2025 advisory opinion. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"The opinion was adopted unanimously.", flag:false, why:"Correct."},
      " ",
      {t:"As an advisory opinion, it is legally binding on every UN member state.", flag:true, why:"Wrong. Advisory opinions are not binding, though they carry great legal authority."},
      " ",
      {t:"The Court said a state’s fossil fuel subsidies or licences may amount to an internationally wrongful act if it fails to protect the climate system.", flag:false, why:"Correct, in substance."},
      " ",
      {t:"The Court found the United States and China responsible for climate damage.", flag:true, why:"Wrong. The Court named no state as responsible; it set out the law in general."},
      " ",
      {t:"States outside the Paris Agreement are still bound by customary duties such as preventing significant environmental harm.", flag:false, why:"Correct: custom binds all states."}
    ]},
    {id:"e4u16-l3-x6", type:"match", q:"Match each legal step to the body that took it.", pairs:[
      ["Advised in 2024 that greenhouse gas emissions are marine pollution under UNCLOS","ITLOS","Requested by the Commission of Small Island States."],
      ["Gave a unanimous advisory opinion on states’ climate obligations in 2025","International Court of Justice","Requested by the General Assembly in 2023."],
      ["Requested the ICJ opinion by consensus","UN General Assembly","Resolution 77/276, March 2023."],
      ["Agreed to establish a loss and damage fund","COP27","Sharm el-Sheikh, 2022."]
    ]},
    {id:"e4u16-l3-x7", type:"mcq", q:"Sione argues in a seminar: “Loss and damage finance is compensation for historical harm.” Which is the strongest counter-argument a neutral discussant could raise?", options:[
      {t:"The Paris decision states that Article 8 provides no basis for liability or compensation, and many contributors frame payments as solidarity", ok:true, why:"Right. It engages his claim with the text and with the other side’s stated position, without saying who is right."},
      {t:"Loss and damage does not exist", why:"Losses beyond adaptation are well documented; this is not a serious counter-argument."},
      {t:"Small islands emit a lot, so they should pay", why:"Small island states’ emissions are tiny; this is inaccurate."},
      {t:"The ICJ banned compensation in 2025", why:"The Court said breaches can entail reparation; it did not ban compensation."}
    ]}
   ],
   apply:{
    intro:"Work with primary legal and financial sources.",
    tasks:[
     {t:"Read the ICJ’s own summary", how:[
       "On the ICJ website, open the case “Obligations of States in respect of Climate Change” and its summary of the advisory opinion of 23 July 2025.",
       "Pick three findings and restate each in one plain sentence.",
       "Note one question the Court left open."
     ], write:"Finding 1… Finding 2… Finding 3… A question left open…"},
     {t:"Two positions on climate finance", how:[
       "Find a statement on the NCQG or on loss and damage from a small island or least developed country, and one from a developed country or the EU (closing plenary speeches and press releases are good sources).",
       "Summarise each in one neutral sentence beginning “X’s government argues that…”, with the date.",
       "List the words each uses that the other avoids (for example “compensation”, “solidarity”, “contributor base”)."
     ], write:"Statement 1, date, position… Statement 2, date, position… Words each uses…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Should historical responsibility or ability to pay decide who funds climate action?",
       "2. Will the ICJ’s advisory opinion change state behaviour, or mainly change arguments?",
       "3. Is loss and damage finance better framed as compensation or as solidarity?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Three findings of the ICJ opinion in plain words, two attributed positions on climate finance, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 17 “International Climate Change Law”", note:"Read after this lesson for the legal arguments on responsibility and finance."},
    {book:"ipccsyr", where:"Summary for Policymakers, section C “Responses in the Near Term”", note:"Includes the IPCC’s statements on finance, equity and climate justice."},
    {book:"eir", where:"Chapter 15 “The Environment” (Raul Pacheco-Vega)", note:"Background on North–South divides in environmental politics."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u16-l4", title:"Beyond climate: ozone, biodiversity, oceans and plastics", minutes:60,
   hook:{q:"The Montreal Protocol was built to protect the ozone layer. Its Kigali Amendment (2016) phases down HFCs, chemicals that do not harm ozone but are powerful greenhouse gases. How much warming by 2100 does the Protocol’s scientific panel estimate Kigali will avoid?", options:["None: it is only an ozone measure","About 0.3–0.5 °C","About 2 °C","About 0.01 °C"], answer:1, reveal:"**About 0.3–0.5 °C**, according to the Montreal Protocol’s Scientific Assessment Panel (2022 assessment, reported by WMO in January 2023). An ozone treaty has become one of the most effective climate measures. This lesson asks why the ozone regime worked so well, and compares it with the regimes for biodiversity, the oceans and plastics."},
   goals:[
     "Explain why the ozone regime succeeded, using epistemic communities and an interest-based model",
     "Describe the Convention on Biological Diversity and the Kunming-Montreal framework, including “30 by 30” and the 2026 global review",
     "Summarise the BBNJ Agreement’s status, fisheries rules and the deep-seabed debate as of 2026",
     "Describe the plastics treaty negotiations and the divisions within them, neutrally",
     "Compare regimes by legal form, finance and results"
   ],
   learn:[
    {h:"Ozone: the success story and why", body:[
      {lead:"Few environmental treaties can show that the problem is actually being fixed. The ozone treaties can."},
      "In 1974 Mario Molina and Sherwood Rowland showed that chlorofluorocarbons (CFCs), used in fridges and sprays, could destroy stratospheric ozone. In 1985 British Antarctic Survey scientists reported a deep seasonal loss over Antarctica, soon called the “ozone hole”. The Vienna Convention (1985) set a framework; the [[montreal-protocol|Montreal Protocol]] (1987; in force 1989) set phase-out schedules, which parties tightened repeatedly as the science firmed. A [[multilateral-fund|Multilateral Fund]] (agreed in 1990) pays developing countries’ agreed extra costs, and parties restrict trade in controlled substances with non-parties. In 2009 it became the first treaty in UN history ratified by every country.",
      "The results, in the WMO’s January 2023 release of the panel’s assessment: nearly 99 per cent of the banned substances phased out, and the ozone layer on track to return to 1980 values around 2066 over Antarctica, 2045 over the Arctic and 2040 elsewhere. The [[kigali-amendment|Kigali Amendment]] (2016; in force 2019) extended the treaty to HFCs.",
      "Why did it work? Three explanations, which can be combined:",
      {list:[
        "**Knowledge.** Peter Haas (1992) traced how an [[epistemic-community|epistemic community]] of atmospheric scientists framed the problem for governments. US negotiator Richard Benedick’s *Ozone Diplomacy* (1991) is the insider account.",
        "**Interests.** Detlef Sprinz and Tapani Vaahtoranta (*International Organization*, 1994) argued that states’ positions follow two things: how vulnerable they are to the harm, and how costly it is to cut. When substitutes appeared, the costs fell for the main producers.",
        "**Design.** Few producers, available substitutes, money for developing countries and trade measures that made staying out unattractive."
      ]},
      {fig:'<svg viewBox="0 0 340 330"><path class="d-ink" d="M44,288 V22" stroke-width="2"/><path class="d-ink" d="M44,288 H332" stroke-width="2"/><path class="d-inkf" d="M44,12 L38,24 H50 Z"/><path class="d-inkf" d="M338,288 L326,282 V294 Z"/><rect class="d-sage" x="54" y="26" width="132" height="122" rx="8" stroke-width="2"/><text x="120" y="70" text-anchor="middle">Pushers</text><text class="s" x="120" y="94" text-anchor="middle">push for strong</text><text class="s" x="120" y="110" text-anchor="middle">rules</text><rect class="d-gold" x="194" y="26" width="134" height="122" rx="8" stroke-width="2"/><text x="261" y="70" text-anchor="middle">Intermediates</text><text class="s" x="261" y="94" text-anchor="middle">want rules, fear</text><text class="s" x="261" y="110" text-anchor="middle">the cost</text><rect class="d-soft" x="54" y="156" width="132" height="122" rx="8" stroke-width="2"/><text x="120" y="200" text-anchor="middle">Bystanders</text><text class="s" x="120" y="224" text-anchor="middle">little at stake</text><text class="s" x="120" y="240" text-anchor="middle">either way</text><rect class="d-rose" x="194" y="156" width="134" height="122" rx="8" stroke-width="2"/><text x="261" y="200" text-anchor="middle">Draggers</text><text class="s" x="261" y="224" text-anchor="middle">resist costly</text><text class="s" x="261" y="240" text-anchor="middle">rules</text><text class="s" x="120" y="310" text-anchor="middle">Low abatement cost</text><text class="s" x="261" y="310" text-anchor="middle">High abatement cost</text><text class="s" x="24" y="88" text-anchor="middle" transform="rotate(-90 24 88)">High vulnerability</text><text class="s" x="24" y="218" text-anchor="middle" transform="rotate(-90 24 218)">Low vulnerability</text></svg>', alt:"A two-by-two grid. The horizontal axis runs from low to high abatement cost; the vertical axis from low to high ecological vulnerability. High vulnerability and low cost: pushers, who push for strong rules. High vulnerability and high cost: intermediates, who want rules but fear the cost. Low vulnerability and low cost: bystanders, with little at stake. Low vulnerability and high cost: draggers, who resist costly rules.", cap:"Sprinz and Vaahtoranta’s interest-based model (1994). In ozone, cheap substitutes moved key producers out of the dragger box; in climate, many economies remain there."},
      "Compliance still needs watching. Scientists detected unexpected CFC-11 emissions in 2018, traced largely to eastern China; China’s government acted against illegal production, and the emissions fell."
    ]},
    {h:"Biodiversity: from Rio to Kunming-Montreal", body:[
      "The [[convention-on-biological-diversity|Convention on Biological Diversity]] (CBD; 1992, in force 1993) has three objectives: conservation, sustainable use, and fair sharing of the benefits from genetic resources. Almost every state is a party; the United States signed but has not ratified. Protocols followed on biosafety (Cartagena, 2000) and on [[access-and-benefit-sharing|access and benefit-sharing]] (Nagoya, 2010).",
      "Biodiversity is harder to govern than ozone. Its main drivers, land-use change, overexploitation, pollution, invasive species and climate change, run through farming, trade and everyday consumption, and there is no single unit to count, like tonnes of CO₂. The record is sobering. None of the twenty Aichi Biodiversity Targets agreed in 2010 was fully met by 2020. The response was the [[kunming-montreal-gbf|Kunming-Montreal Global Biodiversity Framework]], adopted in December 2022 at COP15, held in Montreal under China’s presidency: four goals for 2050 and 23 targets for 2030.",
      {table:[
        ["Target","What it asks"],
        ["2","At least 30% of degraded ecosystems under effective restoration by 2030"],
        ["3 (“[[thirty-by-thirty|30 by 30]]”)","At least 30% of land, inland waters and coastal and marine areas effectively conserved by 2030, recognising Indigenous and traditional territories"],
        ["18","Identify harmful subsidies by 2025 and cut them by at least 500 billion dollars a year by 2030"],
        ["19","At least 200 billion dollars a year from all sources by 2030, including international finance to developing countries"]
      ]},
      "Two debates stand out. Some Indigenous organisations and human rights researchers warn that 30 by 30 could revive “fortress conservation” that expels people; supporters point to the text’s recognition of Indigenous and traditional territories. And countries argue over [[digital-sequence-information|digital sequence information]]: genetic data used without sharing benefits. COP16 (Cali, 2024) created the Cali Fund for this and a permanent body for Indigenous peoples and local communities.",
      "COP17 in Yerevan, Armenia (October 2026) held the first global review. The CBD reported that the world is “off track” to meet the 23 targets; parties adopted the Yerevan Pathway, with priorities to 2030 such as reforming harmful subsidies and more support for developing countries. Japan’s Satoyama Initiative, launched with UN partners at COP10 in Nagoya (2010), is one example of the landscapes-shaped-by-people approach the framework now encourages."
    ]},
    {h:"Oceans: high seas, fish and the seabed", body:[
      "Unit 10 covered UNCLOS and the [[bbnj-agreement|BBNJ Agreement]] (see {{law-of-the-sea}}). Its four parts cover marine genetic resources, area-based tools such as high-seas marine protected areas, environmental impact assessments, and capacity-building and technology transfer. It entered into force on 17 January 2026, passed 100 parties in September 2026, and its first Conference of the Parties is scheduled for 11–22 January 2027 in New York. Climate and ocean law meet here too: sea-level rise could shift the baselines from which maritime zones are measured, and in 2021 Pacific Islands Forum leaders declared that their zones, once established, would not be reduced by it (Unit 10 lists this among open questions).",
      "Fisheries are governed in layers: regional fisheries management organisations such as the Western and Central Pacific Fisheries Commission (Unit 13), the FAO’s Port State Measures Agreement (2009) against [[iuu-fishing|illegal, unreported and unregulated (IUU) fishing]], and the WTO’s [[fisheries-subsidies-agreement|Agreement on Fisheries Subsidies]], adopted in 2022 and in force since 15 September 2025, which bans subsidies to IUU fishing, to fishing overfished stocks and to fishing on the unregulated high seas.",
      "The deep seabed beyond national jurisdiction is managed by the International Seabed Authority, whose rules for commercial mining were still unfinished as of November 2026. A group of states calls for a precautionary pause; others, and some companies, want mining to start, to supply minerals for batteries. In April 2025 the US government ordered faster permits under its own law, which many ISA members criticised as bypassing the international system; the US argues its law is consistent with international law."
    ]},
    {h:"Plastics: a treaty still being negotiated", body:[
      "In March 2022 the UN Environment Assembly (resolution 5/14) launched talks on a legally binding [[plastics-treaty|instrument on plastic pollution]], “including in the marine environment”, covering the full life cycle of plastic. The plan was to finish by the end of 2024.",
      {ol:["2022–2024: five sessions, from Punta del Este to Busan.","August 2025: the resumed session in Geneva ends without agreement.","October 2025: the chair resigns.","February 2026: a one-day session in Geneva elects Julio Cordano of Chile as chair.","June–September 2026: informal heads-of-delegation meetings in Nairobi (30 June–3 July) and Bangkok (27–30 September), using a chair’s paper to aid the negotiations; no treaty text agreed as of November 2026."]},
      "The divisions are clear and should be attributed. A group of countries, including a High Ambition Coalition co-chaired by Norway and Rwanda, wants global limits on plastic production and controls on harmful chemicals. Other countries, many of them oil and petrochemical producers such as Saudi Arabia, argue that the treaty should focus on waste management and recycling and leave production to national choices. Parties also disagree on whether to decide by consensus or allow voting, and on finance. Plastics are hard to govern because production is tied to the petrochemical industry, most plastic is cheap and short-lived, and waste systems differ hugely between countries; millions of informal waste pickers in Asia, Africa and Latin America, who collect much of what is recycled, have asked for a just transition of their own."
    ]},
    {h:"Comparing regimes", body:[
      {table:[
        ["Regime","Legal form","Status (Nov 2026)"],
        ["Ozone","Binding treaty with trade measures and a fund","Universal; recovery on track"],
        ["Biodiversity (GBF)","Non-binding framework under a binding convention","First review: off track"],
        ["High seas (BBNJ)","Binding agreement","In force since January 2026"],
        ["Plastics","Binding instrument planned","Still under negotiation"]
      ]},
      "These bodies overlap with the climate regime (forests, oceans and HFCs sit in several), forming what Unit 9 called a [[regime-complex|regime complex]]. A good seminar comparison asks the same questions of each: how hard is the problem, who are the pushers and draggers, what does the design offer reluctant states, and how is compliance checked?",
      "Judging success is itself a research problem. Edward Miles, Arild Underdal and colleagues (*Environmental Regime Effectiveness*, 2002) help separate questions such as: did behaviour change, did the environment improve, and would either have happened anyway? The ozone regime is widely judged to score well on all three; for most others the honest answer is “partly” or “too early to tell”, which is why careful comparison matters more than league tables.",
      {terms:["montreal-protocol","multilateral-fund","kigali-amendment","convention-on-biological-diversity","access-and-benefit-sharing","kunming-montreal-gbf","thirty-by-thirty","digital-sequence-information","iuu-fishing","fisheries-subsidies-agreement","plastics-treaty"]}
    ]}
   ],
   try:[
    {id:"e4u16-l4-x1", type:"sort", q:"Invented countries in a negotiation on a new pollutant. Place each in Sprinz and Vaahtoranta’s model.", buckets:["Pusher","Intermediate","Bystander","Dragger"], items:[
      {t:"Country A is badly harmed by the pollutant and has cheap alternatives", b:0, why:"High vulnerability, low cost: it pushes for strong rules."},
      {t:"Country B is badly harmed but its main industry depends on the pollutant", b:1, why:"High vulnerability, high cost: it wants rules but fears their price."},
      {t:"Country C is barely affected and barely uses the pollutant", b:2, why:"Low vulnerability, low cost: little at stake."},
      {t:"Country D is barely affected and is the world’s largest producer", b:3, why:"Low vulnerability, high cost: it resists costly rules."}
    ]},
    {id:"e4u16-l4-x2", type:"order", q:"Put the ozone story in order.", items:[
      {t:"Molina and Rowland show that CFCs can destroy stratospheric ozone", why:"1974: the scientific warning."},
      {t:"British scientists report the Antarctic ozone loss", why:"1985, the same year as the Vienna Convention."},
      {t:"The Montreal Protocol is signed", why:"1987."},
      {t:"The Protocol becomes the first treaty ratified by every country", why:"2009."},
      {t:"The Kigali Amendment adds HFCs", why:"2016; in force 2019."}
    ]},
    {id:"e4u16-l4-x3", type:"mcq", q:"Which factors help explain why the Montreal Protocol worked better than climate treaties so far? Choose all that apply.", options:[
      {t:"Substitutes for CFCs became available, lowering costs for major producers", ok:true, why:"Yes: lower abatement costs moved producers from draggers towards pushers."},
      {t:"A fund paid developing countries’ agreed extra costs of switching", ok:true, why:"Yes: the Multilateral Fund brought developing countries in."},
      {t:"Trade restrictions with non-parties made staying out unattractive", ok:true, why:"Yes: trade measures discouraged free riding."},
      {t:"The ozone layer is not a shared resource, so no one could free-ride", why:"Wrong: it is a global commons; the treaty succeeded despite the free-rider problem."}
    ]},
    {id:"e4u16-l4-x4", type:"match", q:"Match each Kunming-Montreal target to its content.", pairs:[
      ["Target 2","At least 30% of degraded ecosystems under effective restoration by 2030","Restoration."],
      ["Target 3","At least 30% of land and sea effectively conserved by 2030","“30 by 30”."],
      ["Target 18","Cut harmful incentives, including subsidies, by at least 500 billion dollars a year by 2030","Harmful subsidies."],
      ["Target 19","Mobilise at least 200 billion dollars a year from all sources by 2030","Finance."]
    ]},
    {id:"e4u16-l4-x5", type:"mcq", q:"Fatima writes in November 2026: “The High Seas Treaty is still waiting for ratifications.” What should she write instead?", options:[
      {t:"It entered into force on 17 January 2026, passed 100 parties in September 2026, and its first COP is scheduled for January 2027", ok:true, why:"Right: the dated, accurate status."},
      {t:"It was abandoned in 2023", why:"It was adopted in June 2023, not abandoned."},
      {t:"It entered into force in 1994 with UNCLOS", why:"1994 is UNCLOS; BBNJ is a separate, later agreement."},
      {t:"It only covers fishing quotas", why:"It covers genetic resources, protected areas, impact assessments and capacity-building; fishing quotas stay with fisheries bodies."}
    ]},
    {id:"e4u16-l4-x6", type:"spot", q:"A briefing on the plastics talks. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"UNEA resolution 5/14 (2022) launched negotiations covering the full life cycle of plastic.", flag:false, why:"Correct."},
      " ",
      {t:"The treaty was adopted in Busan in December 2024.", flag:true, why:"Wrong. Busan (INC-5) ended without agreement, as did the resumed session in Geneva in August 2025."},
      " ",
      {t:"In February 2026 delegates elected a new chair, Julio Cordano of Chile.", flag:false, why:"Correct."},
      " ",
      {t:"All countries agree that the treaty should cap plastic production.", flag:true, why:"Wrong. Production limits are the central disagreement: some countries want them, others want the focus on waste management."},
      " ",
      {t:"Parties also disagree on whether decisions should be taken by consensus or by vote.", flag:false, why:"Correct: decision-making rules are contested."}
    ]},
    {id:"e4u16-l4-x7", type:"sort", q:"What is the status of each instrument as of November 2026?", buckets:["Binding and in force","Adopted, but not a binding treaty","Still under negotiation"], items:[
      {t:"Montreal Protocol", b:0, why:"In force since 1989, ratified by every country."},
      {t:"BBNJ Agreement", b:0, why:"In force since 17 January 2026."},
      {t:"WTO Agreement on Fisheries Subsidies", b:0, why:"In force since 15 September 2025."},
      {t:"Kunming-Montreal Global Biodiversity Framework", b:1, why:"A COP decision under the CBD: politically agreed, not a separate binding treaty."},
      {t:"Global plastics instrument", b:2, why:"No text agreed as of November 2026."},
      {t:"International Seabed Authority rules for commercial mining", b:2, why:"Still unfinished as of November 2026."}
    ]}
   ],
   apply:{
    intro:"Check treaty status and national follow-up yourself.",
    tasks:[
     {t:"Check a treaty’s status at the source", how:[
       "Open the UN Treaty Collection (treaties.un.org) and find the BBNJ Agreement or the Minamata Convention on Mercury.",
       "Note the dates of adoption and entry into force and the current number of parties, with today’s date.",
       "Pick three countries from different regions and note whether each is a party."
     ], write:"Treaty… Adopted… In force… Parties as of [date]… Country 1… Country 2… Country 3…"},
     {t:"Follow one country’s biodiversity plan", how:[
       "On the CBD website, find the national biodiversity strategy and action plan (NBSAP) or national targets of one country.",
       "Find its version of Target 3 (30 by 30). Does it set a national percentage? Does it mention Indigenous or traditional territories?",
       "Write two sentences comparing it with the global target."
     ], write:"Country… Its Target 3… Percentage… Indigenous and traditional territories… Comparison…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. What can climate negotiators learn from the Montreal Protocol, and what cannot be copied?",
       "2. Is “30 by 30” a conservation breakthrough or a risk to Indigenous land rights?",
       "3. Should a plastics treaty limit production, or focus on waste?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"A dated treaty-status note, one country’s Target 3 compared with the global target, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 16 “International Environmental Law”", note:"Read after this lesson: principles and regimes of environmental law, from several perspectives."},
    {book:"wced87", where:"Chapter 6 “Species and Ecosystems: Resources for Development” and Chapter 10 “Managing the Commons”", note:"How the Brundtland Commission saw biodiversity, the oceans and other commons in 1987."},
    {book:"eir", where:"Chapter 15 “The Environment” (Raul Pacheco-Vega)", note:"A short overview of environmental regimes."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u16-l5", title:"The politics of the energy transition", minutes:60,
   hook:{q:"At COP28 in Dubai (2023), parties agreed text on fossil fuels in energy systems for the first time. Which verb did the agreed text use?", options:["“Phase out”","“Phase down”","“Transition away from”","“Ban”"], answer:2, reveal:"**“Transitioning away from fossil fuels in energy systems, in a just, orderly and equitable manner”.** Many countries had pushed for “phase out”; others refused. Two years earlier, at Glasgow, a last-minute change backed by India and China turned “phase-out” of unabated coal power into “phasedown”. Single words carry huge stakes, which is why this lesson ends with a method for reading negotiations."},
   goals:[
     "Explain the position of fossil-fuel producers, the idea of stranded assets and the supply-side turn in climate politics",
     "Describe just transition and the Just Energy Transition Partnerships, with their status as of 2026",
     "Explain the politics of critical minerals and clean-technology supply chains, attributing each position",
     "Compare green industrial policies, including the EU’s carbon border adjustment, neutrally",
     "Analyse a climate negotiation with a step-by-step method, using COP31 as a live example"
   ],
   learn:[
    {h:"Producers, rents and the supply side", body:[
      {lead:"For some states, oil and gas pay for the government itself. What does an [[energy-transition|energy transition]] mean for them?"},
      "Political economists call states that live mainly on external resource rents **rentier states** (Hossein Mahdavy, 1970; Hazem Beblawi and Giacomo Luciani, 1987), an idea linked to the [[resource-curse|resource curse]] debate of Unit 12. For such states a fast transition threatens revenue, jobs and the social contract.",
      "Investors face a parallel problem. If the Paris goals are met, some fossil reserves can never be burned and some plants will close early: [[stranded-assets|stranded assets]]. Christophe McGlade and Paul Ekins (*Nature*, 2015) estimated that, to keep warming below 2 °C, about a third of oil reserves, half of gas reserves and over 80 per cent of coal reserves should remain unused. In 2015 Mark Carney, then Governor of the Bank of England, called climate change a “tragedy of the horizon”: its costs fall beyond the time frames of markets and politicians.",
      "Producers’ arguments deserve an accurate hearing. Many say the regime should target **emissions, not production**, through carbon capture and efficiency; that developing countries have a right to use their resources, as the African Union argued in its 2022 common position on energy access and just transition; and that demand, not supply, drives emissions. Producers also diversify, as in Saudi Arabia’s Vision 2030. Three recent COPs were hosted by major oil and gas producers (the United Arab Emirates in 2023, Azerbaijan in 2024 and Brazil in 2025); critics questioned the choice, while the hosts argued that producers must be part of the solution.",
      "Climate politics has nonetheless turned to the supply side: Glasgow’s coal “phasedown” (2021), Dubai’s [[transition-away-from-fossil-fuels|transitioning away]] (2023), and calls by Vanuatu, Tuvalu and others since 2022 for a fossil fuel non-proliferation treaty. At COP30 in Belém (2025), over 80 countries backed a roadmap away from fossil fuels, but it was left out of the agreed decision; Saudi Arabia and other producers opposed it. The Brazilian presidency launched roadmaps outside the formal text. In April 2026, 57 countries met in Santa Marta, Colombia, at the First Conference on Transitioning Away from Fossil Fuels, co-hosted by Colombia, the Netherlands, Tuvalu and Ireland; a second is planned for early 2027."
    ]},
    {h:"Just transition and the JETPs", body:[
      "[[just-transition|Just transition]] began in trade unions: workers in coal, oil and heavy industry should not bear the cost of change. The ILO adopted guidelines in 2015, the Paris preamble mentions it, and COP30 agreed to develop a just transition mechanism.",
      "[[jetp|Just Energy Transition Partnerships]] (JETPs) put the idea into finance: a group of donor governments and banks backs one emerging economy’s plan to move off coal.",
      {table:[
        ["Country","Announced","Initial package"],
        ["South Africa","COP26, 2021","8.5 billion US dollars"],
        ["Indonesia","G20 Bali, 2022","20 billion US dollars"],
        ["Viet Nam","December 2022","15.5 billion US dollars"],
        ["Senegal","June 2023","2.5 billion euros"]
      ]},
      "In March 2025 the United States withdrew from the partner groups for South Africa, Indonesia and Viet Nam and cancelled its pledges; Germany and other partners said the work would continue. Each country published an investment plan (South Africa in 2022, Indonesia in 2023). Debates cover the mix of loans and grants, coal workers in places such as South Africa’s Mpumalanga province, Indonesia’s coal plants that power industrial parks, and who sets the pace."
    ]},
    {h:"Critical minerals and clean-technology supply chains", body:[
      "Solar panels, wind turbines, batteries and grids need copper, lithium, nickel, cobalt, graphite and rare earths. Unit 15 covered [[critical-minerals|critical minerals]] as geoeconomics (see {{geoeconomics}}); here the question is what they mean for the transition.",
      "The International Energy Agency’s *Global Critical Minerals Outlook 2026* reports that, excluding rare earths, the top refining country’s average share of key minerals rose to 72 per cent in 2025. China is the leading refiner for most of them and Indonesia for nickel; China also holds over three-quarters of global battery pre-treatment capacity. The IEA counts a tripling since 2023 of mineral tariff codes under Chinese export controls.",
      "Producer countries want more of the value. Indonesia banned exports of nickel ore from 2020 to attract processing at home; the Democratic Republic of the Congo, the main source of cobalt, and Chile, with large lithium reserves, have also tightened state control. Communities near mines raise water, land and labour concerns (see {{business-and-human-rights}}).",
      "Positions on China’s role differ and should be attributed. The IEA and many developing-country governments note that low-cost Chinese panels and batteries have made clean energy cheaper worldwide. US, EU and some Asian governments warn of overcapacity and dependence. China’s government rejects the “overcapacity” label and says its industries reflect competitiveness and help the world meet climate goals."
    ]},
    {h:"Green industrial policy", body:[
      "[[green-industrial-policy|Green industrial policy]] means governments steering investment into clean industries with subsidies, tax credits, public procurement, local-content rules or trade measures (see [[industrial-policy]]). Dani Rodrik (2014) argued that it can correct market failures in new technologies; critics warn of subsidy races, waste and protectionism.",
      {list:[
        "**China**: long-running support for solar, batteries and electric vehicles.",
        "**United States**: the Inflation Reduction Act (2022) offered large clean-energy tax credits; a 2025 law cut many of them back.",
        "**European Union**: the Green Deal Industrial Plan (2023), the Net-Zero Industry Act (2024) and the [[cbam|Carbon Border Adjustment Mechanism]] (CBAM), whose definitive period began on 1 January 2026 for cement, iron and steel, aluminium, fertilisers, electricity and hydrogen.",
        "**Japan**: the GX (Green Transformation) Promotion Act (2023), with 20 trillion yen of GX transition bonds over a decade and a mandatory emissions trading scheme from fiscal year 2026 for companies emitting 100,000 tonnes of CO₂ or more a year.",
        "**India**: production-linked incentives for solar modules and batteries."
      ]},
      "CBAM shows the clash. The EU says it puts a [[carbon-pricing|carbon price]] on imports to prevent [[carbon-leakage|carbon leakage]], with production moving to countries with weaker rules. India, China, South Africa and others call it unilateral and inconsistent with CBDR-RC. COP30 launched a dialogue on climate and trade, with the WTO, UNCTAD and the International Trade Centre.",
      "A Global South argument cuts across these debates. Governments such as India’s and Indonesia’s note that rich countries now subsidise their own clean industries heavily while trade rules and conditions on finance limit the **policy space** of poorer countries to do the same. Supporters of open trade reply that subsidy races divert scarce public money and that cheap imports, wherever they come from, speed up the transition."
    ]},
    {h:"How to analyse a climate negotiation", body:[
      "Robert Putnam’s **two-level game** (*International Organization*, 1988) is a good start. Negotiators bargain abroad (Level I) while every deal must win approval at home (Level II). The set of deals each side could ratify is its **win-set**; agreement is possible only where win-sets overlap.",
      {fig:'<svg viewBox="0 0 340 320"><text x="170" y="22" text-anchor="middle">Level I: negotiators at the COP</text><ellipse class="d-sage" cx="126" cy="130" rx="96" ry="72" stroke-width="2"/><ellipse class="d-gold" cx="214" cy="130" rx="96" ry="72" stroke-width="2" fill-opacity="0.55"/><text x="84" y="126" text-anchor="middle">A’s</text><text x="84" y="144" text-anchor="middle">win-set</text><text x="256" y="126" text-anchor="middle">B’s</text><text x="256" y="144" text-anchor="middle">win-set</text><text class="s" x="170" y="120" text-anchor="middle">possible</text><text class="s" x="170" y="136" text-anchor="middle">deals</text><text class="s" x="170" y="152" text-anchor="middle">overlap</text><path class="d-ink" d="M84,220 V202" stroke-width="2"/><path class="d-ink" d="M256,220 V202" stroke-width="2"/><rect class="d-soft" x="10" y="222" width="150" height="86" rx="8" stroke-width="2"/><rect class="d-soft" x="180" y="222" width="150" height="86" rx="8" stroke-width="2"/><text x="85" y="244" text-anchor="middle">Level II: A</text><text class="s" x="85" y="264" text-anchor="middle">parliament, industry,</text><text class="s" x="85" y="280" text-anchor="middle">unions, voters,</text><text class="s" x="85" y="296" text-anchor="middle">courts</text><text x="255" y="244" text-anchor="middle">Level II: B</text><text class="s" x="255" y="264" text-anchor="middle">parliament, industry,</text><text class="s" x="255" y="280" text-anchor="middle">unions, voters,</text><text class="s" x="255" y="296" text-anchor="middle">courts</text></svg>', alt:"Two overlapping ovals labelled A’s win-set and B’s win-set under the heading Level I: negotiators at the COP. The overlap is labelled possible deals. Below each oval a box for Level II at home: parliament, industry, unions, voters, courts.", cap:"Putnam’s two-level game. Domestic politics sets the size of each win-set; a deal is possible only in the overlap."},
      "A seven-step checklist for a seminar paper:",
      {ol:["**Text.** Which agenda item and draft decision? Track the [[bracketed-text|brackets]] (unagreed wording) from draft to final text.","**Coalitions.** Which groups spoke (see {{climate-negotiating-coalitions}})?","**Interests.** Vulnerability and costs: pushers, draggers and the rest.","**Domestic politics.** Elections, industries, courts: what limits each win-set?","**Institutions.** The UNFCCC never adopted its voting rule, so decisions need [[consensus-rule|consensus]]; the [[cop-presidency|presidency]] drafts compromise texts, and “nothing is agreed until everything is agreed”.","**Ideas and science.** IPCC findings, the 1.5 °C norm, justice frames.","**Outcome.** Ambition, legal force, finance, follow-up: who gained what?"]},
      {ex:"COP31 opened on 9 November 2026 in Antalya, Türkiye, and is scheduled to close on 20 November. Under a compromise reached in 2025, Türkiye holds the presidency (COP31 President Murat Kurum, its environment minister) and Australia’s climate minister Chris Bowen leads the negotiations. The partners call it an “implementation COP”. The US administration sent no officials, though a congressional delegation was due to attend. As of 12 November its outcomes are not known: an analysis written now can map the agenda, coalitions and win-sets, and must wait for the final decisions to judge results.", label:"Live case: COP31 (as of 12 November 2026)"},
      "Good sources are the decision texts on the UNFCCC website, the daily *Earth Negotiations Bulletin* (IISD) and statements by each group. Read at least one statement from a group you disagree with.",
      {terms:["energy-transition","stranded-assets","transition-away-from-fossil-fuels","just-transition","jetp","green-industrial-policy","cbam","carbon-pricing","carbon-leakage","two-level-game","consensus-rule","cop-presidency"]}
    ]}
   ],
   try:[
    {id:"e4u16-l5-x1", type:"sort", q:"Is each measure aimed at the **demand** for fossil fuels or their **supply**?", buckets:["Demand side","Supply side"], items:[
      {t:"A carbon tax on fuel use", b:0, why:"It raises the cost of burning fuel, cutting demand."},
      {t:"A ban on new oil and gas exploration licences", b:1, why:"It limits future production."},
      {t:"Efficiency standards for buildings", b:0, why:"They reduce energy use."},
      {t:"A proposed fossil fuel non-proliferation treaty", b:1, why:"It aims to stop expansion of production."},
      {t:"Subsidies for electric buses", b:0, why:"They reduce oil demand in transport."},
      {t:"Ending public finance for new coal mines", b:1, why:"It constrains new supply."}
    ]},
    {id:"e4u16-l5-x2", type:"match", q:"Match each Just Energy Transition Partnership to its initial package.", pairs:[
      ["South Africa (2021)","8.5 billion US dollars","Announced at COP26 in Glasgow."],
      ["Indonesia (2022)","20 billion US dollars","Announced at the G20 summit in Bali."],
      ["Viet Nam (2022)","15.5 billion US dollars","Announced in December 2022."],
      ["Senegal (2023)","2.5 billion euros","Announced in June 2023."]
    ]},
    {id:"e4u16-l5-x3", type:"mcq", q:"Why does the Glasgow Climate Pact (2021) speak of a “phasedown” of unabated coal power rather than a “phase-out”?", options:[
      {t:"India and China pressed for the softer word in the final hours, and other parties accepted it to keep consensus", ok:true, why:"Right. Under the consensus rule, a few major parties could insist on the change."},
      {t:"Scientists recommended a slower path for coal", why:"The wording was a political compromise, not a scientific recommendation."},
      {t:"The EU proposed it to protect its own coal plants", why:"The EU was among those disappointed by the change."},
      {t:"It was a translation error", why:"It was a deliberate, much-reported amendment."}
    ]},
    {id:"e4u16-l5-x4", type:"mcq", q:"According to the IEA’s *Global Critical Minerals Outlook 2026*, what happened to supply concentration in mineral refining?", options:[
      {t:"Excluding rare earths, the top refining country’s average share rose to 72 per cent in 2025", ok:true, why:"Right: concentration increased, from 70 per cent in 2023."},
      {t:"Refining spread evenly across all continents", why:"The report found the opposite: more concentration."},
      {t:"China’s share fell below 20 per cent", why:"China remains the top refiner for most key minerals."},
      {t:"The report gives no figures on concentration", why:"Concentration is one of its headline findings."}
    ]},
    {id:"e4u16-l5-x5", type:"sort", q:"Attribute each statement on the EU’s Carbon Border Adjustment Mechanism to the side that makes it.", buckets:["EU’s stated case","Critics’ stated case"], items:[
      {t:"It prevents carbon leakage by pricing the carbon in imports", b:0, why:"The EU’s main justification."},
      {t:"It treats domestic producers and importers alike under the same carbon price", b:0, why:"The EU argues CBAM mirrors its own emissions trading costs."},
      {t:"It is a unilateral trade measure that ignores CBDR-RC", b:1, why:"Argued by India, China, South Africa and others."},
      {t:"It shifts the cost of Europe’s climate policy onto exporters in developing countries", b:1, why:"A common complaint from exporting countries."}
    ]},
    {id:"e4u16-l5-x6", type:"order", q:"Put the steps in the fight over fossil fuel language in order.", items:[
      {t:"Glasgow: “phasedown of unabated coal power”", why:"COP26, 2021."},
      {t:"Dubai: “transitioning away from fossil fuels in energy systems”", why:"COP28, 2023, the first global stocktake."},
      {t:"Belém: a roadmap is left out of the decision; the presidency launches roadmaps outside it", why:"COP30, 2025."},
      {t:"Santa Marta: 57 countries meet at the first conference on transitioning away from fossil fuels", why:"April 2026."}
    ]},
    {id:"e4u16-l5-x7", type:"spot", q:"A draft seminar paper, written on 12 November 2026. Tap each sentence that is **wrong or premature**.", ask:"is wrong or premature", parts:[
      {t:"COP31 opened in Antalya, Türkiye, on 9 November 2026.", flag:false, why:"Correct."},
      " ",
      {t:"Türkiye holds the presidency, while Australia leads the negotiations.", flag:false, why:"Correct: the compromise reached in 2025."},
      " ",
      {t:"COP31 has already adopted a global phase-out of fossil fuels.", flag:true, why:"Premature and unsupported. As of 12 November the conference was under way and its outcomes were not known."},
      " ",
      {t:"Because UNFCCC decisions are taken by majority vote, producer states cannot block outcomes.", flag:true, why:"Wrong. The UNFCCC never adopted its voting rule, so decisions are taken by consensus, which gives any determined group leverage."},
      " ",
      {t:"A two-level-game analysis would look at what each government can sell at home.", flag:false, why:"Correct: that is the Level II question."}
    ]}
   ],
   apply:{
    intro:"Apply the method to live negotiations.",
    tasks:[
     {t:"Analyse one negotiation day", how:[
       "Open an *Earth Negotiations Bulletin* daily report from COP31 (or from COP30 if you prefer a finished case).",
       "Choose one agenda item and fill in the seven steps: text, coalitions, interests, domestic politics, institutions, ideas, outcome so far.",
       "Mark which steps the report could not answer and where you would look next."
     ], write:"Agenda item… Text and brackets… Coalitions… Interests… Domestic politics… Institutions… Ideas… Outcome so far… Gaps…"},
     {t:"Producer and importer: two positions", how:[
       "Find one official statement on the energy transition from a major fossil-fuel producer and one from a large energy importer (for example a G20 or COP statement).",
       "Summarise each neutrally in two sentences beginning “X’s government argues that…”, with the date.",
       "Note where their win-sets might overlap."
     ], write:"Producer, date, position… Importer, date, position… Possible overlap…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Should climate policy target fossil fuel supply, or only demand?",
       "2. Is green industrial policy a tool for the transition or a new form of protectionism?",
       "3. Can JETPs work without the largest donor? What would success look like by 2030?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"A seven-step analysis of one negotiation item, two attributed positions on the energy transition, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ipccsyr", where:"Summary for Policymakers, section C “Responses in the Near Term”", note:"Read after this lesson: the IPCC’s statements on energy-system transitions and their feasibility."},
    {book:"pilmpa", where:"Chapter 17 “International Climate Change Law”", note:"Background on the legal form of COP decisions and the consensus practice."},
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"The political economy background for producers, trade and industrial policy."}
   ]
  }
  ],
  checkpoint:["e4u16-q02","e4u16-q06","e4u16-q08","e4u16-q11","e4u16-q15","e4u16-q19","e4u16-q22","e4u16-q26","e4u16-q30","e4u16-q34","e4u16-q38","e4u16-q43"],
  codex:[
   {id:"commons-governance", title:"Governing the commons: from Hardin to polycentricity", aka:["common-pool resources","tragedy of the commons","polycentric governance","common property"], tags:["environment","theory","cooperation"],
    summary:"How shared resources are used up or sustained, from Hardin’s open-access tragedy to Ostrom’s design principles and polycentric governance of global problems.",
    levels:{
     starter:[
      "A **commons** is a resource many people use and no one can easily shut others out of: a fishing ground, a forest, groundwater, the air.",
      "Garrett Hardin’s famous 1968 article told the story of a pasture open to everyone. Each herder gains from adding one more animal, and the damage is shared, so the pasture is ruined: the tragedy of the commons.",
      "Elinor Ostrom showed that this is not the only ending. Many communities around the world, from Swiss and Japanese mountain villages to irrigation societies in Spain and the Philippines, have looked after shared resources for centuries by making and enforcing their own rules.",
      {key:"A commons fails when it is open to all with no rules. It can last when users have clear rights, rules that fit, and ways to watch and punish cheats."}
     ],
     builder:[
      "**Types of goods.** Goods differ in **rivalry** (does my use reduce yours?) and **excludability** (can others be kept out?). Common-pool resources are rival and hard to exclude; public goods are non-rival and hard to exclude.",
      "**Open access versus common property.** Ciriacy-Wantrup and Bishop (1975) and later Feeny, Berkes, McCay and Acheson (1990) showed that Hardin described open access. Many historic commons were common property: owned and managed by a defined group.",
      "**Ostrom’s design principles** (*Governing the Commons*, 1990): clear boundaries; rules that fit local conditions; users take part in making rules; monitoring; graduated sanctions; cheap conflict resolution; recognition by outside authorities; nested layers for large systems.",
      "**Polycentricity.** Ostrom (2010) argued that climate change can be tackled by many overlapping centres of decision (cities, regions, states, firms), not only by one global treaty. Jordan and colleagues (2018) read the Paris Agreement as a step in that direction.",
      "**In a paper**, say which kind of good you study and which property regime governs it before applying any theory."
     ],
     pro:[
      "**Scale.** The design principles came mostly from small, bounded, face-to-face systems. Scholars debate how far they scale up: global commons lack clear boundaries, the users are states, and monitoring and sanctions are weak. Some argue that international regimes reproduce some principles (reporting as monitoring, trade measures as sanctions), as in the ozone regime.",
      "**Power and equity.** Studies of community forestry and irrigation in South Asia and elsewhere found that community rules can exclude women, migrants or lower-caste households. Ostrom herself warned against “panaceas”.",
      "**Hardin’s other arguments.** The 1968 article was mainly about population and called for coercive limits on reproduction; Hardin later wrote on “lifeboat ethics” against food aid and on restricting immigration. Many scholars who use his metaphor reject those positions. When citing him, separate the analytical metaphor from his policy views.",
      "**Global commons today** include the atmosphere as a waste sink, the high seas, Antarctica and outer space. The BBNJ Agreement and space-debris guidelines are attempts to write rules for them.",
      {tip:"Pair the commons literature with institutional analysis: who sets the rules, who monitors, and what happens to cheats?"}
     ]
    },
    related:["elinor-ostrom","collective-action-problems","climate-politics","ocean-governance","green-theory-ir"],
    read:[{book:"wced87", where:"Chapter 10 “Managing the Commons”"}],
    sources:[{t:"The Nobel Prize in Economic Sciences 2009: Elinor Ostrom, facts", url:"https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/"}],
    checked:"2026-11"},

   {id:"elinor-ostrom", title:"Elinor Ostrom", aka:["Ostrom","Lin Ostrom","Bloomington School"], tags:["thinkers","environment","political economy"],
    summary:"The US political scientist (1933–2012) who showed that communities can govern shared resources, and the first woman to win the Nobel Prize in economics (2009).",
    levels:{
     starter:[
      "Elinor Ostrom (1933–2012) was an American political scientist who spent her career asking how people manage things they share: water, forests, fish, pastures.",
      "The common view in the 1960s and 1970s, after Hardin, was that shared resources are always overused unless a government takes control or they are privatised. Ostrom went and looked. She found many communities that had managed commons sustainably for generations, by making their own rules.",
      "In 2009 she shared the Nobel Prize in economics with Oliver Williamson, “for her analysis of economic governance, especially the commons”. She was the first woman to win it.",
      {key:"Ostrom’s message: neither the state nor the market is the only answer. People can and do govern commons themselves, under the right conditions."}
     ],
     builder:[
      "**Key work.** *Governing the Commons: The Evolution of Institutions for Collective Action* (1990) compared long-lasting and failed commons in Switzerland, Japan, Spain, the Philippines, Turkey, Sri Lanka and elsewhere, and drew out eight design principles.",
      "**Method.** She combined fieldwork, game theory, laboratory experiments and large comparative databases, and built the Institutional Analysis and Development (IAD) framework to compare rules across cases.",
      "**Where she worked.** With her husband Vincent Ostrom she founded the Workshop in Political Theory and Policy Analysis at Indiana University, Bloomington; the group is often called the Bloomington School.",
      "**Climate.** Her later papers argued for **polycentric** approaches to climate change: action at many levels that does not wait for a single global agreement."
     ],
     pro:[
      "**Legacy.** Ostrom’s work is a foundation of commons studies, environmental governance and much research on community-based natural resource management, including in South and Southeast Asia and Africa. The International Association for the Study of the Commons grew from this research community.",
      "**Critiques.** Political ecologists argue that the institutional approach can underplay power, markets and the state’s role in dispossession; others question how well small-scale lessons transfer to global problems. Defenders reply that Ostrom insisted on context and warned against blueprints.",
      "**In IR.** Her ideas inform debates on regime design, the Paris Agreement’s bottom-up architecture and transnational climate governance by cities and firms.",
      {tip:"In a seminar, cite *Governing the Commons* (1990) for the design principles and her 2010 article in *Global Environmental Change* for polycentric climate governance."}
     ]
    },
    related:["commons-governance","collective-action-problems","robert-keohane"],
    sources:[{t:"The Nobel Prize in Economic Sciences 2009: Elinor Ostrom, facts", url:"https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/"}],
    checked:"2026-11"},

   {id:"sustainable-development-idea", title:"Sustainable development: the idea and its critics", aka:["Brundtland definition","weak and strong sustainability","green growth","degrowth"], tags:["environment","development","concepts"],
    summary:"The 1987 idea that development should meet present needs without compromising future generations, how it entered law and policy, and the debates over growth.",
    levels:{
     starter:[
      "In the 1970s many people saw environmental protection and economic development as enemies: rich countries worried about pollution, poor countries about poverty.",
      "The Brundtland Commission’s report *Our Common Future* (1987) tried to join them. It defined **sustainable development** as development “that meets the needs of the present without compromising the ability of future generations to meet their own needs”.",
      "The idea was written into the 1992 Rio Earth Summit texts and, much later, into the Sustainable Development Goals (2015).",
      {key:"Sustainable development links three things: meeting people’s needs, especially the poorest; protecting the environment; and fairness to future generations."}
     ],
     builder:[
      "**Milestones.** Stockholm Conference and UNEP (1972); *The Limits to Growth* (1972); *Our Common Future* (1987); Rio Earth Summit (1992: UNFCCC, CBD, Rio Declaration, Agenda 21); Johannesburg (2002); Rio+20 (2012); the 2030 Agenda and SDGs (2015).",
      "**Two key concepts** in Brundtland: “needs”, especially of the world’s poor, and “limitations” imposed by technology and social organisation on the environment’s ability to meet present and future needs.",
      "**Weak versus strong sustainability.** Weak: total capital (natural plus human-made) should not fall; substitution is allowed. Strong: some natural capital is critical and cannot be replaced.",
      "**Growth debates.** Green growth (OECD 2011; South Korea’s 2008 strategy; the Global Green Growth Institute) holds that growth can be decoupled from emissions and resource use. Degrowth scholars (Tim Jackson, *Prosperity without Growth*, 2009; Jason Hickel, *Less is More*, 2020; Giorgos Kallis) argue that rich countries cannot decouple fast enough."
     ],
     pro:[
      "**Critiques from the South.** Post-development writers (Unit 14) argue that “sustainable development” keeps a Western model of progress and adds environmental management on top. Latin American ideas such as *buen vivir* propose other goals.",
      "**Critiques from ecology.** Ecological economists such as Herman Daly called “sustainable growth” an oxymoron for physical throughput, while accepting qualitative development.",
      "**Evidence on decoupling.** Many countries have cut territorial emissions while their economies grew; the debate is over whether absolute decoupling can be fast enough and global enough, including consumption-based emissions and material use.",
      "**In law.** Sustainable development appears in many treaties and judgments as an objective or a principle of integration (balancing development and environment); its legal force is debated.",
      {tip:"In a paper, say which version you mean: the Brundtland definition, weak or strong sustainability, or the SDGs’ broader agenda."}
     ]
    },
    related:["planetary-boundaries-framework","environmental-justice","green-theory-ir","commons-governance"],
    read:[{book:"wced87", where:"Chapter 2 “Towards Sustainable Development”"}],
    sources:[{t:"UN Digital Library: Report of the World Commission on Environment and Development (A/42/427), 4 August 1987", url:"https://digitallibrary.un.org/record/139811"}],
    checked:"2026-11"},

   {id:"planetary-boundaries-framework", title:"The Anthropocene and planetary boundaries", aka:["Anthropocene","planetary boundaries","safe operating space","Planetary Health Check","doughnut economics"], tags:["environment","Earth system","concepts"],
    summary:"The idea that humans now drive Earth-system change, the 2024 decision not to make it a formal geological epoch, and the nine planetary boundaries, seven of which were reported transgressed in 2025 and 2026.",
    levels:{
     starter:[
      "In 2000 Paul Crutzen and Eugene Stoermer suggested that Earth had entered the **Anthropocene**, an age in which human activity is the main force changing the planet.",
      "Scientists then asked: where are the limits? In 2009 Johan Rockström and colleagues proposed nine **planetary boundaries**, such as climate change, biodiversity loss and ocean acidification. Staying inside them keeps humanity in a “safe operating space”.",
      "The Planetary Health Check by the Potsdam Institute for Climate Impact Research reported in September 2025 and September 2026 that seven of the nine boundaries had been crossed.",
      {key:"The Anthropocene names the problem; planetary boundaries try to measure it."}
     ],
     builder:[
      "**The epoch question.** An Anthropocene Working Group of geologists proposed a formal epoch beginning in the mid-20th century. In March 2024 the Subcommission on Quaternary Stratigraphy voted it down, with the backing of the International Commission on Stratigraphy and the International Union of Geological Sciences. Their statement says the term will remain an invaluable descriptor of human impact.",
      "**The nine boundaries:** climate change, biosphere integrity, land-system change, freshwater change, biogeochemical flows (nitrogen and phosphorus), ocean acidification, atmospheric aerosol loading, stratospheric ozone depletion, and novel entities (synthetic chemicals and plastics).",
      "**Updates.** 2009 (*Nature*), 2015 (*Science*), 2023 (*Science Advances*: six of nine crossed), the 2025 Planetary Health Check (seven, adding ocean acidification) and its 2026 edition (still seven, with worsening trends).",
      "**The doughnut.** Kate Raworth combined boundaries (an outer ecological ceiling) with a social foundation of human needs (an inner ring) in her 2012 Oxfam paper and *Doughnut Economics* (2017)."
     ],
     pro:[
      "**Critiques of the word.** Malm and Hornborg (2014) and Moore (“Capitalocene”) argue that “Anthropocene” blames humanity in general for damage caused mainly by some societies and economic systems. Chakrabarty (2009) argues that historians must now think of humans as both a political and a geological agent.",
      "**Critiques of boundaries.** Global aggregates can hide local tipping points; boundary positions involve value judgements about acceptable risk; and the language of a planetary “safe space” can support top-down management that ignores justice. Proposals for “safe and just” Earth-system boundaries respond by adding justice criteria.",
      "**Use in IR.** The framework appears in UN reports, in arguments for an integrated approach to climate, biodiversity and pollution, and in green theory. It is a scientific framing, not a legal standard.",
      {tip:"Cite the year and edition when you give a count of boundaries crossed: the number has changed with each update."}
     ]
    },
    related:["sustainable-development-idea","green-theory-ir","biodiversity-governance","ozone-regime"],
    sources:[
      {t:"Stockholm University: Seven of nine planetary boundaries now breached (25 September 2025)", url:"https://www.su.se/english/news/articles/2025-09-25-seven-of-nine-planetary-boundaries-now-breached"},
      {t:"Joint statement by the IUGS and ICS on the vote by the ICS Subcommission on Quaternary Stratigraphy", url:"https://stratigraphy.org/news/152"},
      {t:"Down To Earth: Seven of nine planetary boundaries transgressed with worsening trends (Planetary Health Check 2026), 22 September 2026", url:"https://www.downtoearth.org.in/climate-change/seven-of-nine-planetary-boundaries-transgressed-with-worsening-trends"}
    ],
    checked:"2026-11"},

   {id:"environmental-justice", title:"Global environmental justice", aka:["environmentalism of the poor","slow violence","distribution, recognition, participation","EJAtlas"], tags:["environment","justice","inequality"],
    summary:"Who bears environmental harm and who decides, from the US movement to the “environmentalism of the poor” in the Global South, with Schlosberg’s three dimensions.",
    levels:{
     starter:[
      "Pollution, dams, mines and waste dumps are not spread evenly. They tend to land near people with less money and less power.",
      "The sociology primer described how the environmental justice movement began in the United States in the 1980s (see {{environmental-sociology}}). Around the world, similar struggles have a long history: village women in the Indian Himalaya hugging trees to stop logging (the Chipko movement, from 1973), communities in Nigeria’s Niger Delta campaigning against oil pollution, and victims of mercury poisoning in Minamata, Japan.",
      "Environmental justice asks two questions: who gets the harms and benefits, and who gets a say?",
      {key:"Environmental problems are also justice problems: about distribution, respect and power."}
     ],
     builder:[
      "**Schlosberg’s three dimensions** (*Defining Environmental Justice*, 2007): distribution (who bears harms and benefits), recognition (whose identities, cultures and knowledge are respected) and participation (who takes part in decisions). He later added capabilities: what people are able to do and be.",
      "**The environmentalism of the poor.** Guha and Martínez-Alier (*Varieties of Environmentalism*, 1997) and Martínez-Alier (2002) argued that the poor often defend nature as livelihood. Many conflicts are “ecological distribution conflicts” over access to land, water and clean air.",
      "**Slow violence.** Rob Nixon (2011) described harm that unfolds over years or generations (toxic exposure, soil loss, sea-level rise) and so rarely makes the news.",
      "**Data.** The Environmental Justice Atlas (EJAtlas) maps thousands of conflicts worldwide and is free to search."
     ],
     pro:[
      "**Minamata.** Mercury from a chemical factory poisoned Minamata Bay; the disease was officially identified in 1956. Recognition of victims and compensation took decades of litigation and protest. The 2013 global mercury treaty bears the town’s name, and many treat the case as a classic of slow violence and recognition injustice.",
      "**Climate justice** extends the field to the global scale (see {{climate-justice}}). Indigenous movements add claims about land, self-determination and different relationships with nature (see {{minority-and-indigenous-rights}}).",
      "**Debates.** Scholars ask whether justice claims should be universal or rooted in local values; whether “recognition” can be achieved inside state processes; and how to weigh jobs from a polluting project against health risks, when both matter to the same community.",
      {tip:"For a case study, use the three dimensions as headings and add a timeline of how the conflict evolved."}
     ]
    },
    related:["environmental-sociology","climate-justice","sustainable-development-idea","business-and-human-rights","minority-and-indigenous-rights"],
    sources:[{t:"Environmental Justice Atlas (EJAtlas)", url:"https://ejatlas.org/"}],
    checked:"2026-11"},

   {id:"unfccc-regime", title:"The UN climate regime in depth: UNFCCC, Kyoto, Copenhagen, Paris", aka:["UNFCCC","Kyoto Protocol","Copenhagen Accord","Paris Agreement","NDCs","global stocktake","ratchet"], tags:["climate","international law","regimes"],
    summary:"How the climate regime moved from a framework convention and binding targets for some to universal, self-determined pledges with a five-year review cycle.",
    levels:{
     starter:[
      "The primer covered the three main climate treaties (see {{climate-politics}}). This entry explains why their design changed.",
      "The **UNFCCC** (1992) set the goal and split countries into groups. The **Kyoto Protocol** (1997) gave binding targets to industrialised countries only. The United States never joined, and emissions from developing countries grew fast.",
      "At **Copenhagen** (2009) a new treaty failed, but leaders agreed that every major country would make its own pledge. The **Paris Agreement** (2015) built on that: every party sets a nationally determined contribution (NDC), reports on it and updates it every five years.",
      {key:"The regime traded binding targets for universal participation, and now relies on transparency and review to raise ambition."}
     ],
     builder:[
      {table:[
        ["Step","Key design feature"],
        ["UNFCCC 1992 (in force 1994)","Objective (Article 2); CBDR-RC; Annex I / non-Annex I"],
        ["Kyoto 1997 (in force 2005)","Annex B targets for 2008–2012; market mechanisms (CDM, JI, trading)"],
        ["Copenhagen 2009","Accord “taken note of”; pledges from all major emitters; 100 billion dollar goal"],
        ["Paris 2015 (in force 2016)","NDCs every five years; transparency framework; global stocktake; Article 6 markets"]
      ]},
      "**Paris cycle.** NDCs are communicated every five years and should be a progression (Article 4). The enhanced transparency framework (Article 13) sets common reporting rules. The global stocktake (Article 14) assesses collective progress; the first concluded at COP28 (2023) and the second is due in 2028. The compliance committee (Article 15) is facilitative, not punitive.",
      "**Differentiation.** Paris keeps CBDR-RC but adds “in the light of different national circumstances”, wording from the 2014 US–China joint announcement.",
      "**Membership.** The United States’ second withdrawal from Paris took effect on 27 January 2026; its withdrawal from the UNFCCC takes effect on 27 February 2027, one year after notification."
     ],
     pro:[
      "**Legal form.** Paris is a treaty, but many provisions use “should” rather than “shall”; parties must prepare and maintain NDCs and pursue domestic measures, but are not legally bound to achieve them. The ICJ’s 2025 opinion added that NDC content is not entirely discretionary (see {{icj-climate-advisory-opinion}}).",
      "**Theories of the design.** Falkner (2016) calls it a “new logic” of pledge and review; Hale (2020) describes “catalytic cooperation”, where early movers lower costs for others; Keohane and Victor (2011) describe climate governance as a regime complex. Sceptics, including advocates of climate clubs (Nordhaus 2015), doubt that voluntary pledges can close the gap.",
      "**The gap.** UNEP’s *Emissions Gap Report 2026* projects about 2.6–2.7 °C of warming with full NDC delivery and about 2.8 °C under current policies.",
      "**Decision-making.** The UNFCCC’s rules of procedure were never adopted because parties could not agree on the voting rule, so decisions are taken by consensus, which gives determined minorities leverage (see {{analysing-climate-negotiations}}).",
      {tip:"When you cite a COP outcome, name the decision (for example the first global stocktake decision of COP28), not just the conference."}
     ]
    },
    related:["climate-politics","ipcc-science-policy","climate-negotiating-coalitions","climate-finance","analysing-climate-negotiations"],
    read:[{book:"pilmpa", where:"Chapter 17 “International Climate Change Law”"}],
    sources:[
      {t:"E&E News: Clock starts ticking for US withdrawal from climate treaty (2 March 2026)", url:"https://www.eenews.net/articles/clock-starts-ticking-for-us-withdrawal-from-climate-treaty/"},
      {t:"Health Policy Watch: UNEP Emissions Gap Report 2026 (21 October 2026)", url:"https://healthpolicy-watch.news/global-emissions-must-halve-within-decade/"}
    ],
    checked:"2026-11"},

   {id:"ipcc-science-policy", title:"The IPCC and the 1.5 °C debate", aka:["IPCC","Intergovernmental Panel on Climate Change","AR6","AR7","1.5 degrees","carbon budget"], tags:["climate","science","expertise"],
    summary:"How the IPCC assesses science for governments, why its AR7 timeline stalled, and what the latest temperature figures mean for the 1.5 °C goal.",
    levels:{
     starter:[
      "The **Intergovernmental Panel on Climate Change** (IPCC) was set up in 1988 by the World Meteorological Organization and the UN Environment Programme. It does not do its own research: thousands of volunteer scientists read and assess published studies.",
      "Its big reports come every six to seven years. The Sixth Assessment Report (2021–2023) said it is “unequivocal” that human influence has warmed the planet.",
      "Each report has a **Summary for Policymakers**, which government delegates approve line by line with the scientists.",
      {key:"The IPCC is where climate science and diplomacy meet: the science comes from authors, the summary’s wording is agreed with governments."}
     ],
     builder:[
      "**Structure.** Working Group I (physical science), II (impacts, adaptation, vulnerability), III (mitigation), a Task Force on greenhouse gas inventories, and a synthesis report. The IPCC shared the 2007 Nobel Peace Prize with Al Gore.",
      "**AR7 deadlock.** Governments failed six times between 2024 and October 2026 to agree when AR7’s working-group reports should appear. Supporters of a 2028 timeline want the science to inform the second global stocktake; Saudi Arabia, India, Russia and others favoured a later schedule, citing rigour and inclusiveness. The 65th session in Addis Ababa (12–16 October 2026) was suspended without agreement. A special report on cities is scheduled for March 2027 and the Synthesis Report for late 2029.",
      {table:[
        ["Year","WMO (vs 1850–1900)","Copernicus ERA5"],
        ["2024","1.55 °C ± 0.13","1.60 °C"],
        ["2025","1.43 °C","1.47 °C"],
        ["Jan–Sep 2026","1.47 °C ± 0.13","—"]
      ]},
      "WMO’s November 2026 update expects 2026 to be among the four warmest years; Copernicus reported that 2023–2025 was the first three-year period above 1.5 °C."
     ],
     pro:[
      "**Long-term versus single years.** The Paris goals refer to long-term warming, which the IPCC assesses with averages over about twenty years. Single years above 1.5 °C do not by themselves mean the goal has been missed, but they show how close the world is. Copernicus said in January 2026 that the long-term 1.5 °C level could be reached by the end of this decade.",
      "**Co-production.** Scholars of science and politics describe the summary-approval process as co-production: it gives findings political ownership, but critics argue that it can soften conclusions or let governments shape emphasis.",
      "**Epistemic authority.** The IPCC fits Haas’s idea of an epistemic community; it also faces debates about the under-representation of Global South authors and literature in other languages, which the AR7 timeline dispute brought into the open.",
      {warn:"Name your dataset and its reference period. WMO combines several datasets; Copernicus ERA5 is one of them. Small differences between them are normal."}
     ]
    },
    related:["unfccc-regime","climate-politics","transnational-networks-governance"],
    read:[{book:"ipccsyr", where:"Summary for Policymakers"}],
    sources:[
      {t:"WMO: State of the climate in 2026 (update for COP31), November 2026", url:"https://wmo.int/node/39188"},
      {t:"Copernicus/ECMWF: 2025 was the third-warmest year on record (14 January 2026)", url:"https://www.ecmwf.int/en/about/media-centre/news/2025/2025-third-warmest-year"},
      {t:"IPCC: IPCC wraps up 64th plenary session in Bangkok (March 2026)", url:"https://www.ipcc.ch/?p=49849"},
      {t:"Down To Earth: IPCC fails to agree on climate science report timeline for sixth time (October 2026)", url:"https://www.downtoearth.org.in/climate-change/ipcc-fails-to-agree-on-climate-science-report-timeline-for-sixth-time-drawing-criticism-from-vulnerable-nations"}
    ],
    checked:"2026-11"},

   {id:"climate-negotiating-coalitions", title:"Climate negotiating coalitions", aka:["G77 and China","AOSIS","BASIC","LMDC","Umbrella Group","High Ambition Coalition","AILAC"], tags:["climate","diplomacy","coalitions"],
    summary:"Who negotiates with whom in the UN climate talks, what each group typically wants, and how coalitions shape outcomes under consensus.",
    levels:{
     starter:[
      "Nearly 200 parties take part in the UN climate talks. Few can follow every issue alone, so they work in **coalitions**.",
      "The largest is the **G77 and China**, more than 130 developing countries. Inside and alongside it are smaller groups: the **Alliance of Small Island States** (AOSIS), the **Least Developed Countries**, the **African Group of Negotiators**, the **Arab Group** and others. Developed countries include the **European Union**, the **Umbrella Group** (including Australia, Canada, Japan and Norway) and the **Environmental Integrity Group** (including Switzerland, the Republic of Korea and Mexico).",
      {key:"To follow a COP, learn who speaks for whom."}
     ],
     builder:[
      "**BASIC** (Brazil, South Africa, India, China) formed before Copenhagen in 2009 and helped write the Copenhagen Accord with the United States.",
      "**The Like-Minded Developing Countries** (LMDC, from 2012), including China, India and Saudi Arabia, defend strong differentiation between developed and developing countries.",
      "**AILAC** (2012) groups several Latin American states seeking ambitious outcomes; **ALBA** countries take more critical positions on markets and finance.",
      "**The High Ambition Coalition**, built in 2015 with the Marshall Islands’ Tony de Brum among its leaders, joined vulnerable and developed countries to push for 1.5 °C in Paris.",
      "Coalitions shift by issue: in Belém (2025), for example, some Latin American states and the EU objected to the adaptation indicators, while Saudi Arabia, Russia and India criticised Latin American states for disrupting proceedings."
     ],
     pro:[
      "**Theory.** Coalitions reduce transaction costs and add bargaining power, especially for small delegations; in a consensus system, a cohesive group can block. The G77’s unity on finance often coexists with deep divisions on mitigation between oil exporters and vulnerable states.",
      "**Interest-based reading.** Sprinz and Vaahtoranta’s pushers and draggers help explain stable alignments (see {{ozone-regime}}); constructivists add identity, for example the shared “developing country” identity that keeps large emerging economies inside the G77.",
      "**Methods.** Positions can be traced through group statements, submissions and *Earth Negotiations Bulletin* reports, and through network analysis of joint statements.",
      {tip:"When a news report says “developing countries”, ask which group: the G77 rarely speaks with one voice on emission cuts."}
     ]
    },
    related:["unfccc-regime","analysing-climate-negotiations","small-island-climate-diplomacy","clubs-and-minilateralism"],
    sources:[{t:"Climate Home News: COP30 deal fails on fossil fuel transition, triples adaptation finance (22 November 2025)", url:"https://www.climatechangenews.com/2025/11/22/cop30-brazil-deal-fossil-fuel-transition-fails-triples-finance-climate-adaptation/"}],
    checked:"2026-11"},

   {id:"climate-finance", title:"Climate finance", aka:["100 billion dollar goal","NCQG","New Collective Quantified Goal","adaptation finance","Baku to Belém Roadmap"], tags:["climate","finance","development"],
    summary:"Money for climate action in developing countries: the 100 billion dollar goal, the 300 billion dollar NCQG agreed at COP29, adaptation finance after Belém, and the accounting debates.",
    levels:{
     starter:[
      "Developing countries need money to cut emissions and to adapt to climate impacts. Under the climate treaties, developed countries are to provide finance.",
      "In 2009 developed countries promised to mobilise 100 billion US dollars a year by 2020. The OECD reported that the goal was first met in 2022, two years late, with 115.9 billion dollars.",
      "At COP29 in Baku (2024) countries agreed a new goal: at least 300 billion dollars a year by 2035, with developed countries taking the lead, and a wider call to reach 1.3 trillion dollars a year from all sources.",
      {key:"Climate finance is about how much, from whom, in what form (grants or loans), and for what (cutting emissions or adapting)."}
     ],
     builder:[
      "**Sources.** Public budgets, multilateral development banks, climate funds (the Green Climate Fund, the Global Environment Facility, the Adaptation Fund) and private finance mobilised by public money.",
      "**Accounting disputes.** NGOs such as Oxfam argue that counting loans at face value, and relabelling existing aid, overstate the effort; donors argue that development-bank loans are efficient and that private finance must be counted to reach the scale needed.",
      "**Adaptation.** Glasgow (2021) urged a doubling of adaptation finance by 2025; Belém (2025) called for efforts to at least triple it by 2035, without a clear baseline figure.",
      "**Who pays.** Some developed countries want large emerging economies to join the contributor base; those countries reply that the Convention places the duty on developed countries. The NCQG encourages voluntary contributions from developing countries."
     ],
     pro:[
      "**Beyond the UNFCCC.** Finance debates run through MDB reform, IMF facilities, debt relief and swaps, and proposals such as the Bridgetown Initiative (see {{multilateralism-debates}}).",
      "**Political economy.** Finance is the main bargaining chip for developing countries’ support for mitigation outcomes; disappointment at Baku shaped the Belém negotiations.",
      "**Measurement.** Look for the source, year and method of every figure: “provided and mobilised” (OECD) differs from “climate-specific net assistance” (used by some NGOs).",
      {tip:"Always state whether a figure is a goal, a pledge, an approval or a disbursement: they differ a lot."}
     ]
    },
    related:["loss-and-damage","climate-justice","unfccc-regime","bretton-woods-governance"],
    sources:[
      {t:"OECD: Developed countries materially surpassed their USD 100 billion climate finance commitment in 2022 (May 2024)", url:"https://www.oecd.org/en/about/news/press-releases/2024/05/developed-countries-materially-surpassed-their-usd-100-billion-climate-finance-commitment-in-2022-oecd.html"},
      {t:"COP30 Presidency: COP30 approves Belém Package", url:"https://cop30.br/en/news-about-cop30/cop30-approves-belem-package"}
    ],
    checked:"2026-11"},

   {id:"loss-and-damage", title:"Loss and damage", aka:["Fund for responding to Loss and Damage","FRLD","Warsaw International Mechanism","Article 8"], tags:["climate","finance","justice"],
    summary:"Harms from climate change that cannot be avoided by cutting emissions or adapting, and the long road from a 1991 proposal to a fund made operational in 2023.",
    levels:{
     starter:[
      "Cutting emissions (**mitigation**) and preparing for impacts (**adaptation**) cannot prevent everything. Some harms happen anyway: homes destroyed by a stronger cyclone, farmland ruined by salt water, cultures lost when a community must move. These are called **loss and damage**.",
      "Vulnerable countries asked for help with these harms for decades. In 2022 countries agreed to set up a fund, and in 2023 it was made operational.",
      {key:"Loss and damage is the third pillar of climate policy, after mitigation and adaptation, and the most politically sensitive."}
     ],
     builder:[
      {ol:["1991: Vanuatu, for AOSIS, proposes an international insurance pool.","2013: Warsaw International Mechanism (COP19).","2015: Paris Article 8; the decision adopting Paris says Article 8 gives no basis for liability or compensation.","2019: the Santiago network is created to provide technical assistance.","2022: COP27 agrees new funding arrangements and a fund.","2023: COP28 operationalises the fund on its first day, with the World Bank as interim trustee and host.","2025: the fund’s board approves a first 250 million dollar round of grants (the Barbados Implementation Modalities), covering 2025–2026."]},
      "**Economic and non-economic losses.** Non-economic losses include lives, health, cultural heritage, biodiversity and a sense of place: hard to price, and central for Pacific and Indigenous communities."
     ],
     pro:[
      "**Compensation or solidarity?** Many vulnerable states, scholars and campaigners frame loss and damage as compensation owed for harm caused, drawing on the polluter-pays principle. Most developed states frame it as solidarity and cooperation, and secured the 2015 “no liability” clause. The ICJ’s 2025 opinion, which says breaches of climate obligations can entail reparation, reopened the debate (see {{icj-climate-advisory-opinion}}).",
      "**Scale.** Pledges to the fund stood at about 786 million dollars in April 2025 (Climate Funds Update), far below estimates of losses. Who contributes (including whether large emerging economies should) is contested.",
      "**Design questions.** Direct access for local actors, speed after disasters, grants versus insurance, and links with humanitarian aid all shape whether the fund helps the people most affected.",
      {tip:"Separate three things in a paper: the political norm (loss and damage is recognised), the institutions (mechanism, network, fund) and the money (pledged, deposited, approved, disbursed)."}
     ]
    },
    related:["climate-finance","climate-justice","small-island-climate-diplomacy","icj-climate-advisory-opinion"],
    sources:[{t:"Climate Funds Update: Fund for responding to Loss and Damage", url:"https://climatefundsupdate.org/the-funds/fund-for-responding-to-loss-and-damage/"}],
    checked:"2026-11"},

   {id:"icj-climate-advisory-opinion", title:"The ICJ advisory opinion on climate change (2025)", aka:["Obligations of States in respect of Climate Change","Vanuatu ICJ initiative","resolution 77/276"], tags:["climate","international law","courts"],
    summary:"What the International Court of Justice said, unanimously, on 23 July 2025 about states’ climate obligations, and what it left open.",
    levels:{
     starter:[
      "In 2019 law students from Pacific island countries began a campaign to ask the world’s highest court for its view on climate change. Vanuatu’s government took it up, and in March 2023 the UN General Assembly, by consensus, asked the International Court of Justice two questions: what are states’ obligations to protect the climate system, and what follows if they breach them?",
      "On 23 July 2025 the Court answered **unanimously**. It said climate obligations are real legal duties, under the climate treaties and under general international law, and that breaking them can make a state legally responsible.",
      "Advisory opinions are not binding judgments, but they are authoritative statements of the law.",
      {key:"The opinion turned many climate arguments from politics into law, without naming any state as responsible."}
     ],
     builder:[
      "**Sources of obligation.** The UNFCCC, Kyoto and Paris; UNCLOS; human rights law; and customary law, including the duty to prevent significant harm to the environment, which the Court applied to the climate system, and a duty to cooperate. Customary duties bind states outside the climate treaties.",
      "**1.5 °C and NDCs.** The Court treated 1.5 °C as the agreed primary temperature goal. NDC content is not entirely at a party’s discretion: each NDC must reflect the party’s highest possible ambition, and together NDCs must be capable of achieving the goal.",
      "**Fossil fuels.** Failure to take appropriate action to protect the climate system, including through fossil fuel production, consumption, the granting of exploration licences or subsidies, may constitute an internationally wrongful act. States may also be responsible for failing to regulate private emitters.",
      "**Consequences.** The full range of state responsibility: cessation, guarantees of non-repetition and reparation, subject to proof of causation in particular cases.",
      "**Statehood.** Once a state is established, the loss of one of its constituent elements, such as territory, would not necessarily mean the loss of its statehood."
     ],
     pro:[
      "**Process.** 91 written statements were filed and hearings ran from 2 to 13 December 2024, among the largest participation in the Court’s advisory history. Several large emitters argued that the climate treaties form a special regime (*lex specialis*) displacing general rules; the Court did not accept this.",
      "**Separate opinions.** Judges attached twelve declarations and separate opinions (individual and joint), which show differences of emphasis among the judges.",
      "**Effects.** The opinion is already cited in domestic litigation and negotiations. Its effect depends on courts, governments and negotiators; sceptics note that advisory opinions have not always changed state behaviour.",
      "**Related opinions.** ITLOS (May 2024) on UNCLOS and greenhouse gases; the Inter-American Court of Human Rights (2025) on the climate emergency and human rights.",
      {tip:"Quote the Court’s own summary or paragraphs, not press headlines: many reports overstated or understated what it said."}
     ]
    },
    related:["icj-in-practice","small-island-climate-diplomacy","climate-justice","unfccc-regime","law-of-the-sea"],
    sources:[
      {t:"ICJ: Obligations of States in respect of Climate Change (case 187), documents", url:"https://www.icj-cij.org/case/187"},
      {t:"IISD Earth Negotiations Bulletin: ICJ Advisory Opinion on climate change, 23 July 2025", url:"https://enb.iisd.org/international-court-justice-advisory-opinion-climate-change-23Jul2025"},
      {t:"Lawfare: ICJ releases advisory opinion on states’ obligations to address climate change", url:"https://www.lawfaremedia.org/article/icj-releases-advisory-opinion-on-states--obligations-to-address-climate-change"}
    ],
    checked:"2026-11"},

   {id:"climate-justice", title:"Climate justice", aka:["historical responsibility","polluter pays","subsistence and luxury emissions","burden-sharing"], tags:["climate","justice","ethics"],
    summary:"The ethical and political arguments about who should bear the costs of climate change, who decides, and what is owed to future generations.",
    levels:{
     starter:[
      "Climate change is caused mostly by the emissions of some countries and people, while its worst effects often fall on others who emitted little: farmers in the Sahel, fishers in Bangladesh, islanders in the Pacific, and people not yet born.",
      "**Climate justice** asks what is fair: who should cut emissions, who should pay for adaptation and losses, and who should have a say.",
      {key:"Climate justice turns the numbers on emissions into questions of responsibility, capacity and voice."}
     ],
     builder:[
      "**Counting.** Cumulative, current, per-person and consumption-based emissions point to different responsible parties.",
      "**Principles.** Polluter pays (historical responsibility), beneficiary pays, and ability to pay; most proposals combine them. CBDR-RC in the UNFCCC is a political compromise among them.",
      "**Classic interventions.** Agarwal and Narain’s *Global Warming in an Unequal World* (1991) accused a US research institute of “environmental colonialism” for treating subsistence and luxury emissions alike; Henry Shue (1993) developed the subsistence/luxury distinction; Simon Caney and others argued for combining principles.",
      "**Procedural and generational justice.** Who is represented at negotiations and in national decisions; what present generations owe future ones (an argument also used in youth climate litigation)."
     ],
     pro:[
      "**Objections.** The “excusable ignorance” objection says past emitters could not know the harm (a common cut-off is around 1990, the IPCC’s first report); the “non-identity” problem complicates duties to specific future people; critics of per-capita equality note different needs and circumstances.",
      "**From ethics to law.** The ICJ’s 2025 opinion and national cases (Leghari 2015, Urgenda 2019, KlimaSeniorinnen 2024) translate some justice claims into legal duties; critics warn of courts making policy.",
      "**Movements.** Climate justice is also a social movement linking Indigenous, labour, feminist and youth groups; scholars study how its frames travel between the streets and the negotiating room.",
      {tip:"Name the principle you rely on and answer its strongest objection: that is what examiners look for."}
     ]
    },
    related:["environmental-justice","climate-finance","loss-and-damage","icj-climate-advisory-opinion"],
    sources:[{t:"United Nations University (UNU-EHS): Delivering climate justice: the ICJ advisory opinion and its significance for climate action", url:"https://unu.edu/ehs/article/delivering-climate-justice-icj-advisory-opinion-and-its-significance-climate-action"}],
    checked:"2026-11"},

   {id:"small-island-climate-diplomacy", title:"Small island states and Pacific climate diplomacy", aka:["AOSIS","SIDS","1.5 to stay alive","COSIS","Boe Declaration","continuity of statehood"], tags:["climate","Pacific","small states","diplomacy"],
    summary:"How small island developing states, especially in the Pacific, turned extreme vulnerability into diplomatic and legal influence.",
    levels:{
     starter:[
      "Small island developing states (SIDS) emit very little but face rising seas, stronger storms and ocean warming. For low-lying atoll states such as Tuvalu, Kiribati and the Marshall Islands, the stakes are existential.",
      "Since 1990 they have negotiated together in the **Alliance of Small Island States** (AOSIS). They pushed the 1.5 °C goal, loss and damage, and the ICJ advisory opinion onto the agenda.",
      {key:"Small states with little power have used moral authority, coalitions and international law to shape the climate regime."}
     ],
     builder:[
      "**1.5 °C.** AOSIS and least developed countries campaigned for 1.5 °C from the late 2000s; the High Ambition Coalition, with the Marshall Islands’ Tony de Brum among its leaders, helped put it in the Paris Agreement.",
      "**Pacific regional diplomacy.** The Pacific Islands Forum’s Boe Declaration (2018) calls climate change “the single greatest threat” to Pacific peoples (Unit 2); its 2021 declaration says maritime zones, once established, will not be reduced by sea-level rise, and its 2023 declaration affirms the continuity of statehood.",
      "**Law.** The Commission of Small Island States on Climate Change and International Law (COSIS, 2021) obtained an ITLOS advisory opinion (2024); Vanuatu led the request for the ICJ opinion (2023–2025).",
      "**Mobility.** Arrangements such as the Australia–Tuvalu Falepili Union combine migration pathways with recognition of continuing statehood (see {{climate-and-mobility}})."
     ],
     pro:[
      "**Explaining influence.** Small-state studies stress coalition-building, moral leadership, expertise from allies and NGOs, and choosing venues (courts, the General Assembly) where votes or arguments count more than power.",
      "**Limits.** Small delegations struggle to cover parallel negotiations; finance access is slow and complex; and island states differ among themselves (for example on deep-sea mining or fossil-fuel exports from larger Pacific neighbours).",
      "**Security framing.** Pacific leaders’ “expanded concept of security” (Boe) treats climate as a security issue; scholars debate whether securitisation helps or risks military responses (Unit 2, {{securitization-theory}}).",
      {tip:"Use primary documents: Pacific Islands Forum communiqués and declarations are short, public and quotable."}
     ]
    },
    related:["climate-negotiating-coalitions","loss-and-damage","icj-climate-advisory-opinion","climate-and-mobility","law-of-the-sea"],
    sources:[{t:"ICJ: Obligations of States in respect of Climate Change (case 187), written statements and comments, including those of Vanuatu, Tuvalu and the Pacific Islands Forum", url:"https://www.icj-cij.org/case/187"}],
    checked:"2026-11"},

   {id:"ozone-regime", title:"The ozone regime: why it worked", aka:["Montreal Protocol","Vienna Convention","Kigali Amendment","Multilateral Fund","pushers and draggers"], tags:["environment","regimes","success"],
    summary:"The Vienna Convention and Montreal Protocol, their results, and the main explanations for their success: science, interests and design.",
    levels:{
     starter:[
      "In the 1970s scientists warned that chemicals called CFCs, used in fridges and spray cans, could destroy the ozone layer that shields life from ultraviolet radiation. In 1985 scientists reported a dramatic seasonal “hole” over Antarctica.",
      "Governments acted fast: the Vienna Convention (1985), then the Montreal Protocol (1987). Every country in the world has joined it.",
      "According to the scientific panel’s 2022 assessment, nearly 99 per cent of the banned substances have been phased out and the ozone layer is on track to recover to 1980 values around 2066 over Antarctica.",
      {key:"The ozone regime shows that global environmental treaties can work."}
     ],
     builder:[
      "**Design.** Phase-out schedules that parties tightened as the science firmed; a Multilateral Fund (agreed 1990) paying developing countries’ agreed incremental costs; trade restrictions with non-parties; regular scientific, environmental and technology assessment panels.",
      "**Kigali Amendment** (2016; in force 2019): phases down HFCs, substitutes that are powerful greenhouse gases; the panel estimates it will avoid 0.3–0.5 °C of warming by 2100.",
      "**Explanations.** Haas: an epistemic community of scientists framed the problem. Benedick’s *Ozone Diplomacy* (1991): skilful diplomacy. Sprinz and Vaahtoranta (1994): states’ vulnerability and abatement costs; once substitutes existed, producers’ costs fell."
     ],
     pro:[
      "**Limits of the analogy.** Ozone involved a few chemicals made by a few firms with substitutes; climate involves energy for the whole economy. Some lessons transfer (finance for developing countries, trade measures, adjustable schedules); others do not.",
      "**Compliance.** Unexpected CFC-11 emissions detected in 2018 were traced largely to eastern China; after Chinese enforcement they fell, showing both the value of atmospheric monitoring and the need for vigilance.",
      "**Legacy.** The regime is widely counted among the most effective environmental treaties on tests of behaviour change, environmental outcome and the counterfactual of the kind Miles and colleagues (2002) propose.",
      {tip:"Use the pushers–draggers grid to explain why a state changed position: look for shifts in vulnerability or in costs."}
     ]
    },
    related:["commons-governance","unfccc-regime","biodiversity-governance","transnational-networks-governance"],
    sources:[{t:"WMO: Ozone layer recovery is on track, helping avoid global warming by 0.5°C (9 January 2023)", url:"https://wmo.int/news/media-centre/ozone-layer-recovery-track-helping-avoid-global-warming-05degc"}],
    checked:"2026-11"},

   {id:"biodiversity-governance", title:"Biodiversity governance: the CBD and the Kunming-Montreal framework", aka:["CBD","Kunming-Montreal Global Biodiversity Framework","30 by 30","Aichi targets","Cali Fund","Yerevan Pathway"], tags:["environment","biodiversity","regimes"],
    summary:"The Convention on Biological Diversity, the failure of the Aichi targets, the 2022 framework with its 23 targets, and the first global review in Yerevan (2026).",
    levels:{
     starter:[
      "Species and ecosystems are disappearing because of land clearing, overfishing, pollution, invasive species and climate change.",
      "The **Convention on Biological Diversity** (1992) aims to conserve biodiversity, use it sustainably and share fairly the benefits of genetic resources. Almost every country is a party; the United States is not.",
      "In 2022 countries adopted the **Kunming-Montreal Global Biodiversity Framework**, with 23 targets for 2030, including protecting at least 30 per cent of land and sea (“30 by 30”).",
      {key:"Biodiversity has clear global targets but weak tools to enforce them."}
     ],
     builder:[
      "**From Aichi to Kunming-Montreal.** None of the 20 Aichi targets (2010) was fully met by 2020. The 2022 framework (COP15, Montreal, China presiding) has four goals for 2050 and 23 targets for 2030.",
      "**Key targets.** Target 2 (restore 30 per cent of degraded ecosystems), Target 3 (30 by 30, recognising Indigenous and traditional territories), Target 18 (cut harmful incentives by at least 500 billion dollars a year by 2030), Target 19 (at least 200 billion dollars a year from all sources).",
      "**Genetic data.** COP16 (Cali, 2024) created the Cali Fund for benefits from digital sequence information and a permanent subsidiary body on Indigenous peoples and local communities.",
      "**Yerevan (October 2026).** COP17 held the first global review, found the world “off track” on the 23 targets, adopted the Yerevan Pathway and the Sevan Guidelines for the new subsidiary body. COP18 will be in Ecuador."
     ],
     pro:[
      "**30 by 30 debates.** Supporters see area-based conservation as essential; Indigenous organisations and researchers warn against “fortress conservation” and stress rights-based approaches and “other effective area-based conservation measures” (OECMs) such as community-managed land.",
      "**Why biodiversity is hard.** Drivers are diffuse and tied to agriculture, trade and consumption; there is no single metric like CO₂; benefits are local while costs are often borne by developing countries rich in biodiversity.",
      "**Asia-Pacific examples.** Japan’s Satoyama Initiative (2010) promotes landscapes shaped by long human use; China presided over COP15; Southeast Asian countries host several megadiverse ecosystems and the ASEAN Centre for Biodiversity.",
      {tip:"For a case study, compare one country’s national targets with the global ones and check its national report."}
     ]
    },
    related:["ozone-regime","ocean-governance","planetary-boundaries-framework","minority-and-indigenous-rights"],
    sources:[
      {t:"CBD: The Kunming-Montreal Global Biodiversity Framework targets", url:"https://www.cbd.int/gbf/targets/"},
      {t:"CBD: COP 17 closes (31 October 2026)", url:"https://www.cbd.int/article/cop-17-closes"}
    ],
    checked:"2026-11"},

   {id:"ocean-governance", title:"Ocean governance: high seas, fisheries, seabed and plastics", aka:["BBNJ","High Seas Treaty","fisheries subsidies","IUU fishing","deep-sea mining","plastics treaty","INC"], tags:["environment","oceans","regimes"],
    summary:"How the oceans beyond national control are governed in 2026: the BBNJ Agreement, fisheries rules, the unfinished seabed mining code and the plastics negotiations.",
    levels:{
     starter:[
      "Nearly two-thirds of the ocean lies beyond any country’s exclusive economic zone. For decades it was governed by a patchwork of rules for shipping, fishing and the seabed.",
      "Three newer efforts stand out: the **BBNJ Agreement** (High Seas Treaty), in force since January 2026; the WTO’s agreement banning harmful **fisheries subsidies**, in force since September 2025; and talks on a **plastics treaty**, still unfinished as of November 2026.",
      {key:"Ocean governance is layered: one convention (UNCLOS), many specialised bodies, and gaps where new rules are still being written."}
     ],
     builder:[
      "**BBNJ.** Adopted June 2023; in force 17 January 2026; more than 100 parties by September 2026; first COP scheduled for January 2027 in New York. It covers marine genetic resources, area-based tools including high-seas protected areas, environmental impact assessments, and capacity-building and technology transfer.",
      "**Fisheries.** Regional fisheries management organisations set catch limits; the FAO Port State Measures Agreement (2009) targets IUU fishing; the WTO Agreement on Fisheries Subsidies (in force 15 September 2025) bans subsidies to IUU fishing, overfished stocks and the unregulated high seas, with talks continuing on further rules.",
      "**Seabed.** The International Seabed Authority’s commercial mining rules were still unfinished as of November 2026. Some states call for a precautionary pause; others and some companies want mining for battery minerals. A US executive order of April 2025 sought faster permits under US law, which many ISA members criticised.",
      "**Plastics.** UNEA resolution 5/14 (2022) launched talks; sessions in Busan (2024) and Geneva (2025) ended without agreement; a new chair, Julio Cordano (Chile), was elected in February 2026; informal meetings followed in Nairobi and Bangkok."
     ],
     pro:[
      "**Plastics divides.** A High Ambition Coalition (co-chaired by Norway and Rwanda) seeks production limits and chemical controls; many oil and petrochemical producers, including Saudi Arabia, prefer a focus on waste management. Decision rules (consensus or voting) and finance are also contested.",
      "**Ocean–climate links.** Acidification, warming and sea-level rise affect fisheries, coral reefs and maritime boundaries; ITLOS (2024) treated greenhouse gas emissions as marine pollution.",
      "**Regime complex.** BBNJ must work alongside fisheries bodies, the ISA and the IMO without undermining them, a classic coordination problem.",
      {tip:"Always check treaty status on the UN Treaty Collection and give the date: party numbers change monthly."}
     ]
    },
    related:["law-of-the-sea","biodiversity-governance","commons-governance","small-island-climate-diplomacy"],
    sources:[
      {t:"WTO: Agreement on Fisheries Subsidies", url:"https://www.wto.org/english/tratop_e/rulesneg_e/fish_e/fish_e.htm"},
      {t:"IISD Earth Negotiations Bulletin: INC-5.3 on plastic pollution, 7 February 2026", url:"https://enb.iisd.org/plastic-pollution-marine-environment-negotiating-committee-inc5.3-07Feb2026"},
      {t:"IISD SDG Knowledge Hub: Chair of plastic pollution treaty talks updates on intersessional progress (July 2026)", url:"https://sdg.iisd.org/news/chair-of-plastic-pollution-treaty-talks-updates-on-intersessional-progress/"},
      {t:"UN: BBNJ Agreement (entry into force and first COP)", url:"https://www.un.org/bbnjagreement/en"},
      {t:"Africa Sustainability Matters: High Seas Treaty reaches 100 parties (5 October 2026)", url:"https://africasustainabilitymatters.com/high-seas-treaty-reaches-100-parties-as-africa-gains-greater-stake-in-global-ocean-governance/"}
    ],
    checked:"2026-11"},

   {id:"energy-transition-politics", title:"The politics of the energy transition", aka:["fossil fuel producers","stranded assets","transitioning away from fossil fuels","just transition","JETP","Santa Marta conference"], tags:["climate","energy","political economy"],
    summary:"How producers, consumers, workers and investors contest the move away from fossil fuels, from the supply-side turn to Just Energy Transition Partnerships.",
    levels:{
     starter:[
      "Most of the world’s energy still comes from coal, oil and gas. Moving away from them changes who earns money, who has jobs and which countries have power.",
      "Fossil-fuel exporters worry about lost revenue; coal workers worry about their jobs; importers see a chance to gain energy security; developing countries ask who will pay.",
      "Since 2021 COP texts have started to name fossil fuels: a “phasedown” of unabated coal power (Glasgow, 2021) and “transitioning away from fossil fuels in energy systems” (Dubai, 2023).",
      {key:"The energy transition is not only technical. It redistributes wealth and power, so it is deeply political."}
     ],
     builder:[
      "**Producers.** Rentier-state theory (Mahdavy 1970; Beblawi and Luciani 1987) explains why revenue loss threatens some governments’ social contracts. Producers argue for targeting emissions rather than production, for carbon capture and for the right to develop resources.",
      "**Stranded assets.** McGlade and Ekins (2015) estimated that, for 2 °C, about a third of oil, half of gas and over 80 per cent of coal reserves should stay unused.",
      "**Supply-side initiatives.** Calls for a fossil fuel non-proliferation treaty (from 2022, led by Vanuatu and Tuvalu among others); the First Conference on Transitioning Away from Fossil Fuels in Santa Marta, Colombia (April 2026: 57 countries; co-hosts Colombia, the Netherlands, Tuvalu and Ireland; a second in early 2027).",
      "**JETPs.** South Africa (2021, 8.5 billion dollars), Indonesia (2022, 20 billion), Viet Nam (2022, 15.5 billion), Senegal (2023, 2.5 billion euros). The United States withdrew from the first three in March 2025; Germany and other partners said they would continue."
     ],
     pro:[
      "**COP30.** More than 80 countries backed a fossil-fuel roadmap in Belém, but it was left out of the decision; the presidency launched roadmaps outside the formal process.",
      "**Just transition.** From trade-union roots to ILO guidelines (2015), the Paris preamble and the COP30 decision to develop a mechanism. Debates concern who is covered (formal workers only, or informal workers and communities too) and who pays.",
      "**Evidence.** JETP research asks how much is grant versus loan, whether plans match national politics, and how coal-dependent regions fare. Results so far are mixed and early.",
      {tip:"In any transition case, list winners and losers at home and abroad: that is where the politics lies."}
     ]
    },
    related:["green-industrial-policy","analysing-climate-negotiations","unfccc-regime","geoeconomics"],
    sources:[
      {t:"Government of the Netherlands: Transitioning away from fossil fuels conference concludes with 5 key deliverables (29 April 2026)", url:"https://www.government.nl/latest/news/2026/04/29/transitioning-away-from-fossil-fuels-conference-concludes-with-5-key-deliverables"},
      {t:"South Africa DIRCO: South Africa notes the decision by the United States to withdraw from the JETP (6 March 2025)", url:"https://dirco.gov.za/south-africa-notes-the-decision-by-the-united-states-government-to-withdraw-from-the-just-energy-transition-partnership/"},
      {t:"UN News: COP30 outcome (November 2025)", url:"https://news.un.org/en/story/2025/11/1166433"}
    ],
    checked:"2026-11"},

   {id:"green-industrial-policy", title:"Green industrial policy, critical minerals and carbon border measures", aka:["IRA","CBAM","GX","clean-tech supply chains","carbon leakage"], tags:["climate","political economy","trade"],
    summary:"How governments use subsidies, trade measures and mineral strategies to build clean industries, and why this divides opinion, as of November 2026.",
    levels:{
     starter:[
      "Many governments now pay or push companies to make solar panels, batteries, electric cars and clean steel at home. This is **green industrial policy**.",
      "Supporters say it speeds up clean technology and creates jobs. Critics say it wastes money, sparks subsidy races and can become protectionism.",
      "The EU’s **Carbon Border Adjustment Mechanism** (CBAM) charges importers for the carbon in some goods. The EU says this stops “carbon leakage”; many developing countries call it unfair.",
      {key:"Climate policy and trade policy are now tightly linked."}
     ],
     builder:[
      "**Cases.** China’s long-running support for solar, batteries and EVs; the US Inflation Reduction Act (2022), much of it cut back by a 2025 law; the EU Green Deal Industrial Plan (2023) and Net-Zero Industry Act (2024); Japan’s GX Promotion Act (2023), with 20 trillion yen of transition bonds over a decade and a mandatory emissions trading scheme from fiscal 2026 for firms emitting 100,000 tonnes of CO₂ or more; India’s production-linked incentives.",
      "**CBAM.** Transitional reporting from 2023 to 2025; the definitive period began on 1 January 2026, covering cement, iron and steel, aluminium, fertilisers, electricity and hydrogen.",
      "**Minerals.** The IEA’s 2026 outlook: excluding rare earths, the top refining country’s average share of key minerals reached 72 per cent in 2025; China leads most refining, Indonesia leads nickel.",
      "**Trade dialogue.** COP30 launched a climate and trade dialogue with the WTO, UNCTAD and the International Trade Centre."
     ],
     pro:[
      "**Theory.** Rodrik (2014) argues that green industrial policy can address learning spillovers and coordination failures if governments keep discipline (clear goals, sunset clauses, monitoring). Critics in the trade-law community see risks to WTO rules on subsidies and national treatment.",
      "**Global South view.** India, China, South Africa and others call CBAM unilateral and inconsistent with CBDR-RC, and argue that rich countries’ subsidies shrink the policy space of poorer ones; the EU replies that CBAM mirrors its domestic carbon price.",
      "**China’s role.** The IEA and many importers credit Chinese manufacturing with cutting clean-energy costs; US, EU and some Asian governments warn of overcapacity and dependence; China’s government rejects the “overcapacity” label.",
      {tip:"Unit 15 covers the geoeconomics of export controls and critical minerals; combine both units for a paper on clean-tech supply chains."}
     ]
    },
    related:["energy-transition-politics","geoeconomics","unfccc-regime"],
    sources:[
      {t:"European Commission: Carbon Border Adjustment Mechanism", url:"https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en"},
      {t:"IEA: Global Critical Minerals Outlook 2026, executive summary", url:"https://www.iea.org/reports/global-critical-minerals-outlook-2026/executive-summary"},
      {t:"RIETI: Japanese emissions trading system set to launch (Arimura Toshi H., 2026)", url:"https://www.rieti.go.jp/en/papers/contribution/arimura-toshihide/02.html"}
    ],
    checked:"2026-11"},

   {id:"analysing-climate-negotiations", title:"How to analyse a climate negotiation", aka:["two-level games","win-sets","consensus","COP presidency","bracketed text","COP31"], tags:["climate","diplomacy","methods"],
    summary:"A seven-step method for analysing a COP outcome, built on two-level games and the UNFCCC’s consensus practice, with COP31 as a live case.",
    levels:{
     starter:[
      "A COP is a two-week meeting where nearly 200 parties negotiate texts word by word. Outcomes often hinge on a single verb.",
      "To analyse one, ask: what was on the table, who wanted what, why, what limited them at home, how the rules shaped the result, and what was finally agreed.",
      {key:"Read the texts, not only the headlines: the brackets and the final wording tell the story."}
     ],
     builder:[
      {ol:["Text: agenda item, draft decisions and brackets.","Coalitions: who spoke for whom.","Interests: vulnerability and costs.","Domestic politics: what each government can sell at home.","Institutions: consensus, the presidency, package deals.","Ideas and science: IPCC findings, 1.5 °C, justice frames.","Outcome: ambition, legal force, finance and follow-up."]},
      "**Two-level games.** Putnam (1988): negotiators bargain abroad while every deal must be ratified at home; the overlap of win-sets defines possible deals. A narrow win-set can be a bargaining asset (“my parliament will never accept that”).",
      "**Consensus.** The UNFCCC’s rules of procedure were never adopted because parties could not agree on the voting rule, so decisions are taken by consensus; presidencies sometimes gavel through texts over objections, which then become controversies (as in Belém, 2025)."
     ],
     pro:[
      "**COP31 (as of 12 November 2026).** Opened on 9 November in Antalya, Türkiye, scheduled to end on 20 November; Türkiye holds the presidency (Murat Kurum) and Australia’s Chris Bowen leads the negotiations under a 2025 compromise; billed as an “implementation COP”. The US administration sent no officials, though a congressional delegation was due to attend. Outcomes were not yet known.",
      "**Sources.** Decision texts and submissions on the UNFCCC website; the IISD *Earth Negotiations Bulletin*; group statements; national delegations’ press releases; specialist media. Triangulate, and quote at least one position you disagree with.",
      "**Pitfalls.** Treating announcements as decisions; ignoring what happens outside the COP (G20, courts, markets); reading outcomes only as wins and losses rather than as steps in a long cycle.",
      {tip:"Write the analysis in the past tense only after the closing plenary; before that, describe positions and possible outcomes."}
     ]
    },
    related:["climate-negotiating-coalitions","unfccc-regime","energy-transition-politics"],
    sources:[
      {t:"Khaleej Times (AFP): COP31 opens with leaders told to “get serious” (9 November 2026)", url:"https://www.khaleejtimes.com/world/cop31-opens-leaders-pressure-tackle-climate-crisis"},
      {t:"Austrian Federal Ministry (BMLUK): Weltklimakonferenz 2026 (COP31, 9–20 November 2026, Antalya)", url:"https://www.bmluk.gv.at/service/veranstaltungen/klima-und-umwelt/weltklimakonferenz-2026.html"},
      {t:"UN News: COP30 outcome (November 2025)", url:"https://news.un.org/en/story/2025/11/1166433"}
    ],
    checked:"2026-11"}
  ],
  terms:[
   {id:"common-pool-resource", term:"Common-pool resource", def:"A resource that is rival (one person’s use reduces what is left for others) and hard to exclude people from, such as a fishery, a pasture or groundwater.", codex:"commons-governance"},
   {id:"open-access-resource", term:"Open access", def:"A situation in which anyone may use a resource and no one makes or enforces rules, the condition Hardin’s “tragedy” actually describes.", codex:"commons-governance"},
   {id:"ostrom-design-principles", term:"Ostrom’s design principles", def:"Eight features shared by long-lasting commons, from clear boundaries and user-made rules to monitoring, graduated sanctions and nested layers (Ostrom, 1990).", codex:"elinor-ostrom"},
   {id:"polycentric-governance", term:"Polycentric governance", def:"Governance by many overlapping centres of decision (cities, states, firms, regional bodies) rather than one central authority; Ostrom applied it to climate change.", codex:"commons-governance"},
   {id:"externality", term:"Externality", def:"A cost or benefit of an activity that falls on people outside the transaction, such as pollution from a factory; greenhouse gas emissions are the largest example.", codex:"commons-governance"},
   {id:"limits-to-growth", term:"Limits to growth", def:"The argument, made famous by a 1972 report for the Club of Rome, that exponential growth in population and production will hit physical limits.", codex:"sustainable-development-idea"},
   {id:"sustainable-development", term:"Sustainable development", def:"Development “that meets the needs of the present without compromising the ability of future generations to meet their own needs” (Brundtland Report, 1987).", codex:"sustainable-development-idea"},
   {id:"precautionary-principle", term:"Precautionary principle", def:"The idea that a lack of full scientific certainty should not be used to postpone measures against serious or irreversible environmental harm (Rio Declaration, Principle 15).", codex:"sustainable-development-idea"},
   {id:"weak-sustainability", term:"Weak sustainability", def:"The view that natural capital can be replaced by human-made capital, so development is sustainable if total capital does not fall.", codex:"sustainable-development-idea"},
   {id:"strong-sustainability", term:"Strong sustainability", def:"The view that some natural capital, such as a stable climate or key ecosystems, is critical and cannot be replaced by other capital.", codex:"sustainable-development-idea"},
   {id:"green-growth", term:"Green growth", def:"Economic growth that is decoupled from environmental harm, promoted by the OECD (2011) and by South Korea’s 2008 strategy.", codex:"sustainable-development-idea"},
   {id:"degrowth", term:"Degrowth", def:"The position that rich economies should deliberately reduce material and energy use, and so output, while protecting well-being.", codex:"sustainable-development-idea"},
   {id:"anthropocene", term:"Anthropocene", def:"A proposed name for the period in which human activity is the main force changing Earth’s systems; widely used, but rejected as a formal geological epoch in 2024.", codex:"planetary-boundaries-framework"},
   {id:"planetary-boundaries", term:"Planetary boundaries", def:"Nine limits on Earth-system processes, proposed by Rockström and colleagues in 2009, within which humanity can operate safely; seven were reported transgressed in 2025 and 2026.", codex:"planetary-boundaries-framework"},
   {id:"doughnut-economics", term:"Doughnut economics", def:"Kate Raworth’s model of a safe and just space between a social foundation of human needs and an ecological ceiling of planetary boundaries.", codex:"planetary-boundaries-framework"},
   {id:"environmental-justice", term:"Environmental justice", def:"The fair distribution of environmental harms and benefits, recognition of affected people’s identities and knowledge, and their participation in decisions.", codex:"environmental-justice"},
   {id:"environmentalism-of-the-poor", term:"Environmentalism of the poor", def:"Martínez-Alier’s term for struggles in which poor communities defend land, water and forests as sources of livelihood.", codex:"environmental-justice"},
   {id:"slow-violence", term:"Slow violence", def:"Rob Nixon’s term (2011) for environmental harm that unfolds gradually over years or generations and so receives little attention.", codex:"environmental-justice"},
   {id:"cbdr-rc", term:"Common but differentiated responsibilities and respective capabilities (CBDR-RC)", def:"The UNFCCC principle that all states share responsibility for climate change but should act according to their different responsibilities and capacities; Paris adds “in the light of different national circumstances”.", codex:"unfccc-regime"},
   {id:"annex-i-parties", term:"Annex I parties", def:"The industrialised countries and economies in transition listed in Annex I of the UNFCCC, expected to lead on cutting emissions; the richer Annex II subset was to provide finance.", codex:"unfccc-regime"},
   {id:"clean-development-mechanism", term:"Clean Development Mechanism (CDM)", def:"A Kyoto Protocol scheme under which emission-reduction projects in developing countries earned credits that industrialised countries could use towards their targets.", codex:"unfccc-regime"},
   {id:"pledge-and-review", term:"Pledge and review", def:"A treaty design in which each state sets its own commitment and international review and transparency encourage it to deliver and raise ambition.", codex:"unfccc-regime"},
   {id:"ratchet-mechanism", term:"Ratchet mechanism", def:"The Paris Agreement’s five-year cycle in which each new NDC should be more ambitious than the last, informed by the global stocktake.", codex:"unfccc-regime"},
   {id:"enhanced-transparency-framework", term:"Enhanced transparency framework", def:"The Paris Agreement’s common rules (Article 13) for reporting emissions, progress on NDCs and support provided or received.", codex:"unfccc-regime"},
   {id:"global-stocktake", term:"Global stocktake", def:"The Paris Agreement’s five-yearly assessment of collective progress (Article 14); the first concluded at COP28 in 2023 and the second is due in 2028.", codex:"unfccc-regime"},
   {id:"article-6-carbon-markets", term:"Article 6 carbon markets", def:"Paris Agreement rules that let countries cooperate to meet NDCs, including trading emission reductions between countries (6.2) and a UN-supervised crediting mechanism (6.4).", codex:"unfccc-regime"},
   {id:"carbon-pricing", term:"Carbon pricing", def:"Putting a price on greenhouse gas emissions through a tax or an emissions trading system, so that polluters pay for the harm.", codex:"green-industrial-policy"},
   {id:"ipcc", term:"IPCC", def:"The Intergovernmental Panel on Climate Change, set up in 1988 by WMO and UNEP to assess climate science for governments; its summaries are approved line by line by governments.", codex:"ipcc-science-policy"},
   {id:"carbon-budget", term:"Carbon budget", def:"The total amount of CO₂ that can still be emitted for a given chance of keeping warming below a temperature limit.", codex:"ipcc-science-policy"},
   {id:"temperature-overshoot", term:"Overshoot", def:"Warming that temporarily exceeds a temperature limit such as 1.5 °C before being brought back down, which would require removing CO₂ from the atmosphere.", codex:"ipcc-science-policy"},
   {id:"net-zero", term:"Net zero", def:"A state in which greenhouse gas emissions are balanced by removals, so that the net addition to the atmosphere is zero.", codex:"ipcc-science-policy"},
   {id:"g77-and-china", term:"G77 and China", def:"The largest negotiating group in the UN, made up of more than 130 developing countries; in climate talks it often unites on finance but divides on emission cuts.", codex:"climate-negotiating-coalitions"},
   {id:"aosis", term:"AOSIS", def:"The Alliance of Small Island States (1990), the coalition of small island and low-lying coastal states that pushed for 1.5 °C and loss and damage.", codex:"small-island-climate-diplomacy"},
   {id:"basic-group", term:"BASIC", def:"Brazil, South Africa, India and China, a climate negotiating group formed in 2009 that helped write the Copenhagen Accord.", codex:"climate-negotiating-coalitions"},
   {id:"climate-club", term:"Climate club", def:"A group of countries that agree ambitious climate policies and penalise outsiders, for example with border charges (Nordhaus, 2015).", codex:"climate-negotiating-coalitions"},
   {id:"climate-justice", term:"Climate justice", def:"The ethical and political questions of who should bear the costs of climate change, who decides, and what is owed to the most affected and to future generations.", codex:"climate-justice"},
   {id:"historical-responsibility", term:"Historical responsibility", def:"The argument that countries should contribute in proportion to their cumulative past emissions.", codex:"climate-justice"},
   {id:"polluter-pays-principle", term:"Polluter pays principle", def:"The principle that those who cause pollution should bear the cost of preventing it or repairing the damage.", codex:"climate-justice"},
   {id:"climate-finance", term:"Climate finance", def:"Money for cutting emissions and adapting to climate change, especially flows from developed to developing countries under the climate treaties.", codex:"climate-finance"},
   {id:"new-collective-quantified-goal", term:"New Collective Quantified Goal (NCQG)", def:"The climate finance goal agreed at COP29 (2024): at least 300 billion US dollars a year by 2035, developed countries taking the lead, with a wider call to reach 1.3 trillion from all actors.", codex:"climate-finance"},
   {id:"adaptation-finance", term:"Adaptation finance", def:"Money to help countries and communities prepare for climate impacts, such as sea walls, drought-resistant crops and early-warning systems.", codex:"climate-finance"},
   {id:"global-goal-on-adaptation", term:"Global goal on adaptation", def:"The Paris Agreement’s collective goal of strengthening adaptation (Article 7); COP30 adopted voluntary indicators to track it.", codex:"climate-finance"},
   {id:"loss-and-damage", term:"Loss and damage", def:"Harm from climate change that is not avoided by mitigation or adaptation, such as destroyed homes, lost land or lost cultural heritage.", codex:"loss-and-damage"},
   {id:"sids", term:"Small island developing states (SIDS)", def:"A UN-recognised group of small island and low-lying coastal developing countries facing particular economic and environmental vulnerabilities.", codex:"small-island-climate-diplomacy"},
   {id:"no-harm-rule", term:"No-harm rule (prevention principle)", def:"The customary duty of states to use due diligence to prevent significant harm to the environment of other states or areas beyond national control; the ICJ applied it to the climate system in 2025.", codex:"icj-climate-advisory-opinion"},
   {id:"right-to-healthy-environment", term:"Right to a clean, healthy and sustainable environment", def:"A human right recognised by the UN General Assembly in 2022; the ICJ in 2025 called such an environment essential to enjoying other human rights.", codex:"icj-climate-advisory-opinion"},
   {id:"statehood-continuity", term:"Statehood continuity", def:"The position that a state continues to exist even if sea-level rise takes its territory; affirmed by Pacific leaders in 2023 and supported by the ICJ’s 2025 opinion.", codex:"small-island-climate-diplomacy"},
   {id:"montreal-protocol", term:"Montreal Protocol", def:"The 1987 treaty (in force 1989) that phases out ozone-depleting substances; the first treaty ratified by every country.", codex:"ozone-regime"},
   {id:"multilateral-fund", term:"Multilateral Fund", def:"The fund set up under the Montreal Protocol in 1990 to pay developing countries’ agreed extra costs of phasing out ozone-depleting substances.", codex:"ozone-regime"},
   {id:"kigali-amendment", term:"Kigali Amendment", def:"The 2016 amendment to the Montreal Protocol (in force 2019) that phases down HFCs, powerful greenhouse gases.", codex:"ozone-regime"},
   {id:"convention-on-biological-diversity", term:"Convention on Biological Diversity (CBD)", def:"The 1992 treaty (in force 1993) aiming at conservation, sustainable use and fair sharing of benefits from genetic resources.", codex:"biodiversity-governance"},
   {id:"access-and-benefit-sharing", term:"Access and benefit-sharing", def:"Rules under the CBD and its Nagoya Protocol (2010) on how genetic resources are accessed and how the benefits from using them are shared with the countries and communities that provide them.", codex:"biodiversity-governance"},
   {id:"kunming-montreal-gbf", term:"Kunming-Montreal Global Biodiversity Framework", def:"The CBD’s 2022 plan with four goals for 2050 and 23 targets for 2030, including “30 by 30”.", codex:"biodiversity-governance"},
   {id:"thirty-by-thirty", term:"30 by 30", def:"Target 3 of the Kunming-Montreal framework: at least 30 per cent of land, inland waters and coastal and marine areas effectively conserved by 2030.", codex:"biodiversity-governance"},
   {id:"digital-sequence-information", term:"Digital sequence information (DSI)", def:"Genetic sequence data stored digitally; countries disagree on how benefits from using it should be shared, and COP16 created the Cali Fund for this.", codex:"biodiversity-governance"},
   {id:"iuu-fishing", term:"IUU fishing", def:"Illegal, unreported and unregulated fishing, which undermines fisheries management and is targeted by port-state controls and WTO subsidy rules.", codex:"ocean-governance"},
   {id:"fisheries-subsidies-agreement", term:"WTO Agreement on Fisheries Subsidies", def:"A WTO agreement adopted in 2022 and in force since 15 September 2025 that bans subsidies to IUU fishing, overfished stocks and the unregulated high seas.", codex:"ocean-governance"},
   {id:"plastics-treaty", term:"Plastics treaty negotiations", def:"Talks launched by UNEA resolution 5/14 (2022) on a legally binding instrument on plastic pollution across its life cycle; no text had been agreed as of November 2026.", codex:"ocean-governance"},
   {id:"energy-transition", term:"Energy transition", def:"The shift of energy systems from fossil fuels to low-carbon sources such as renewables, with changes in grids, industry and consumption.", codex:"energy-transition-politics"},
   {id:"stranded-assets", term:"Stranded assets", def:"Fossil-fuel reserves, plants or infrastructure that lose their value early because climate policy or market change means they can no longer be used profitably.", codex:"energy-transition-politics"},
   {id:"transition-away-from-fossil-fuels", term:"Transitioning away from fossil fuels", def:"Wording agreed in the first global stocktake decision (COP28, 2023): parties are called on to contribute to transitioning away from fossil fuels in energy systems in a just, orderly and equitable manner.", codex:"energy-transition-politics"},
   {id:"just-transition", term:"Just transition", def:"A shift to a low-carbon economy that protects workers and communities who depend on high-carbon industries, an idea that began in trade unions.", codex:"energy-transition-politics"},
   {id:"jetp", term:"Just Energy Transition Partnership (JETP)", def:"A finance package from a group of donor governments and banks supporting one emerging economy’s plan to move away from coal, as in South Africa, Indonesia, Viet Nam and Senegal.", codex:"energy-transition-politics"},
   {id:"green-industrial-policy", term:"Green industrial policy", def:"Government measures, such as subsidies, tax credits, procurement and trade rules, to build clean-technology industries.", codex:"green-industrial-policy"},
   {id:"cbam", term:"CBAM", def:"The EU’s Carbon Border Adjustment Mechanism, which charges importers for the embedded emissions of certain goods; its definitive period began on 1 January 2026.", codex:"green-industrial-policy"},
   {id:"carbon-leakage", term:"Carbon leakage", def:"The shift of production and emissions to countries with weaker climate policies, which carbon border measures aim to prevent.", codex:"green-industrial-policy"},
   {id:"two-level-game", term:"Two-level game", def:"Putnam’s model (1988) in which negotiators bargain internationally while any deal must also win approval at home.", codex:"analysing-climate-negotiations"},
   {id:"consensus-rule", term:"Consensus (UNFCCC practice)", def:"Decision-making without formal objection; the UNFCCC uses it because its rules of procedure, including a voting rule, were never adopted.", codex:"analysing-climate-negotiations"},
   {id:"cop-presidency", term:"COP presidency", def:"The host government (or, for COP31, a shared arrangement) that chairs a Conference of the Parties, consults parties and proposes compromise texts.", codex:"analysing-climate-negotiations"},
   {id:"bracketed-text", term:"Bracketed text", def:"Wording in a draft negotiating text placed in square brackets because it is not yet agreed.", codex:"analysing-climate-negotiations"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u16-q01", lesson:"e4u16-l1", level:1, q:"Which pair of features defines a common-pool resource?", options:[
     {t:"Rival and hard to exclude", ok:true, why:"Right: one user’s take reduces what is left, and keeping others out is difficult."},
     {t:"Non-rival and hard to exclude", why:"That describes a public good, such as a weather forecast."},
     {t:"Rival and easy to exclude", why:"That describes a private good."},
     {t:"Non-rival and easy to exclude", why:"That describes a club good, such as a subscription service."}]},
   {id:"e4u16-q02", lesson:"e4u16-l1", level:2, q:"A lake’s fish are taken by anyone with a boat, with no rules and no owner, and stocks are collapsing. A neighbouring lake is fished only by members of two villages under their own rules, and stocks are stable. What concept best explains the difference?", options:[
     {t:"The first lake is open access; the second is common property governed by a defined group", ok:true, why:"Right: the distinction Ciriacy-Wantrup and Bishop drew, and the core of Ostrom’s work."},
     {t:"The first lake is a public good; the second is a private good", why:"Both lakes’ fish are rival and hard to exclude: common-pool resources. The difference is the property regime."},
     {t:"The second lake must have been privatised", why:"Nothing suggests private ownership; the villages hold and govern it in common."},
     {t:"Fish are non-rival, so the collapse must have another cause", why:"Fish are rival: a fish caught by one boat cannot be caught by another."}]},
   {id:"e4u16-q03", lesson:"e4u16-l1", level:1, q:"Which is one of Elinor Ostrom’s design principles for long-lasting commons?", options:[
     {t:"Graduated sanctions for those who break the rules", ok:true, why:"Right: penalties that start mild and rise with repeated or serious offences."},
     {t:"Immediate privatisation of the resource", why:"Ostrom showed that commons can be governed without privatisation."},
     {t:"Rules imposed by a distant central government without user input", why:"She found that users taking part in making rules was a feature of success."},
     {t:"No monitoring, to build trust", why:"Monitoring by users or accountable monitors was one of her principles."}]},
   {id:"e4u16-q04", lesson:"e4u16-l1", level:2, q:"Kenji argues: “Ostrom proves that the climate can be governed like a village pasture.” Which response best reflects the scholarly debate?", options:[
     {t:"Ostrom herself argued for polycentric climate action, but critics note that her principles came from small, bounded groups and are hard to scale to the atmosphere", ok:true, why:"Right: it credits her polycentric argument and states the scale critique."},
     {t:"Ostrom never wrote about climate change", why:"She did, notably in a 2010 article in *Global Environmental Change*."},
     {t:"Ostrom argued only states can govern commons", why:"She argued the opposite: communities often govern commons without the state or the market."},
     {t:"The atmosphere is a private good, so Ostrom’s work is irrelevant", why:"The atmosphere as a waste sink is a common-pool resource."}]},
   {id:"e4u16-q05", lesson:"e4u16-l1", level:1, q:"Which report defined sustainable development as meeting “the needs of the present without compromising the ability of future generations to meet their own needs”?", options:[
     {t:"*Our Common Future* (the Brundtland Report, 1987)", ok:true, why:"Right: the World Commission on Environment and Development, chaired by Gro Harlem Brundtland."},
     {t:"*The Limits to Growth* (1972)", why:"That report modelled physical limits to growth; it did not give this definition."},
     {t:"The Paris Agreement (2015)", why:"Paris concerns climate change; the definition is much older."},
     {t:"The Rio Declaration (1992)", why:"Rio built on the concept, but the classic definition comes from Brundtland."}]},
   {id:"e4u16-q06", lesson:"e4u16-l1", level:3, q:"An economist says: “If we invest all the revenue from logging this forest in factories and schools, the country is no poorer.” An ecologist replies that the forest’s water regulation cannot be replaced. What debate are they having?", options:[
     {t:"Weak versus strong sustainability", ok:true, why:"Right: whether natural capital can be substituted by human-made capital."},
     {t:"Realism versus liberalism", why:"Those are IR theories of state behaviour, not views on natural capital."},
     {t:"Open access versus common property", why:"That debate is about property regimes for shared resources."},
     {t:"Mitigation versus adaptation", why:"Those are climate policy strategies, not views on substitution."}]},
   {id:"e4u16-q07", lesson:"e4u16-l1", level:1, q:"What happened to the proposal to make the Anthropocene a formal geological epoch?", options:[
     {t:"It was rejected in March 2024, though the term remains widely used informally", ok:true, why:"Right: the stratigraphy bodies voted it down; their statement says the term remains a valuable descriptor."},
     {t:"It was adopted in 2024, starting in the 1950s", why:"The proposal was rejected, not adopted."},
     {t:"It was adopted in 2000 by Crutzen and Stoermer", why:"They proposed the term; formal adoption is up to geological bodies."},
     {t:"It is still awaiting a vote", why:"The vote took place in 2024."}]},
   {id:"e4u16-q08", lesson:"e4u16-l1", level:2, q:"A report says: “Seven of nine planetary boundaries have been crossed.” What should a careful student add?", options:[
     {t:"The source and year (for example the Planetary Health Check 2026), since the count has changed with each update", ok:true, why:"Right: 2009, 2015, 2023, 2025 and 2026 assessments differ."},
     {t:"Nothing: the number has been the same since 2009", why:"It has changed: six of nine in 2023, seven in 2025 and 2026."},
     {t:"That all nine are legally binding limits", why:"Planetary boundaries are a scientific framework, not legal limits."},
     {t:"That ozone depletion is the worst boundary", why:"Ozone is one of the two boundaries reported within the safe zone."}]},
   {id:"e4u16-q09", lesson:"e4u16-l1", level:3, q:"Villagers are told a mine’s environmental review is complete, but the hearing was held far away, in a language few of them speak, and officials dismissed their knowledge of the river. Which two dimensions of environmental justice are most at stake?", options:[
     {t:"Participation and recognition", ok:true, why:"Right: they could not take part (participation), and their knowledge was not respected (recognition)."},
     {t:"Distribution only", why:"Distribution may also matter later, but the scenario centres on voice and respect."},
     {t:"Weak and strong sustainability", why:"Those are views on substituting natural capital, not dimensions of justice."},
     {t:"Mitigation and adaptation", why:"Those are climate policy categories."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u16-q10", lesson:"e4u16-l2", level:1, q:"What is the objective in Article 2 of the UNFCCC?", options:[
     {t:"To stabilise greenhouse gas concentrations at a level that would prevent dangerous anthropogenic interference with the climate system", ok:true, why:"Right: the Convention’s ultimate objective."},
     {t:"To limit warming to 1.5 °C", why:"The 1.5 °C goal is from the Paris Agreement (2015)."},
     {t:"To cut emissions 5 per cent below 1990 levels", why:"That was Kyoto’s target for Annex B countries."},
     {t:"To ban fossil fuels by 2050", why:"No climate treaty contains such a ban."}]},
   {id:"e4u16-q11", lesson:"e4u16-l2", level:2, q:"Why do many scholars describe the Paris Agreement as a reversal of Kyoto’s design?", options:[
     {t:"Kyoto set negotiated binding targets for some countries; Paris lets every party set its own target and relies on transparency and review", ok:true, why:"Right: top-down and partial versus bottom-up and universal."},
     {t:"Kyoto had no market mechanisms; Paris introduced them", why:"Kyoto created emissions trading, joint implementation and the CDM."},
     {t:"Kyoto covered all countries; Paris only developed ones", why:"It is the other way round."},
     {t:"Paris makes every target legally binding", why:"The targets in NDCs are not binding; the procedural duties are."}]},
   {id:"e4u16-q12", lesson:"e4u16-l2", level:1, q:"What did the US Senate’s Byrd–Hagel resolution of 1997 oppose?", options:[
     {t:"Any climate treaty that did not include binding commitments for developing countries", ok:true, why:"Right: passed 95–0 months before Kyoto, it signalled that ratification was unlikely."},
     {t:"The creation of the IPCC", why:"The IPCC dated from 1988 and was not its target."},
     {t:"The Montreal Protocol", why:"The resolution concerned climate negotiations."},
     {t:"The Paris Agreement", why:"Paris came 18 years later."}]},
   {id:"e4u16-q13", lesson:"e4u16-l2", level:2, q:"Which description of the Copenhagen Accord (2009) is accurate?", options:[
     {t:"A leaders’ text with national pledges and a 100 billion dollar finance goal, of which the COP only took note because some parties objected", ok:true, why:"Right: it lacked consensus but contained the seeds of Paris."},
     {t:"A binding protocol adopted unanimously", why:"It was not adopted by consensus, and it was not binding."},
     {t:"The agreement that created the Green Climate Fund’s first replenishment", why:"The Fund was set up later, under the Cancún Agreements."},
     {t:"A treaty that set binding targets for China and India", why:"It set no binding targets for anyone."}]},
   {id:"e4u16-q14", lesson:"e4u16-l2", level:1, q:"When did the first global stocktake under the Paris Agreement conclude?", options:[
     {t:"At COP28 in Dubai, 2023", ok:true, why:"Right: its decision included the call to transition away from fossil fuels in energy systems."},
     {t:"At COP21 in Paris, 2015", why:"Paris created the stocktake; the first one came later."},
     {t:"At COP26 in Glasgow, 2021", why:"Glasgow agreed the Paris rulebook items and the coal “phasedown”, not the stocktake outcome."},
     {t:"It has not yet happened", why:"It concluded in 2023; the second is due in 2028."}]},
   {id:"e4u16-q15", lesson:"e4u16-l2", level:3, q:"A minister says: “The planet passed 1.5 °C in 2024, so the Paris goal is dead and our country need not try.” Which reply is accurate?", options:[
     {t:"WMO estimates 2024 at about 1.55 °C, but the Paris goal refers to long-term warming over about two decades; each increment of warming avoided still matters", ok:true, why:"Right: it gets the figure and the distinction right without exaggerating either way."},
     {t:"2024 was below 1.5 °C, so there is no problem", why:"WMO and Copernicus both put 2024 above 1.5 °C."},
     {t:"The Paris goal was formally abandoned at COP30", why:"No such decision exists."},
     {t:"The IPCC declared the goal impossible in 2026", why:"The IPCC made no such declaration; its AR7 reports were not yet published."}]},
   {id:"e4u16-q16", lesson:"e4u16-l2", level:1, q:"Which group formed before Copenhagen in 2009 and helped write the Copenhagen Accord with the United States?", options:[
     {t:"BASIC (Brazil, South Africa, India, China)", ok:true, why:"Right: its leaders drafted the Accord with the US president in the final hours."},
     {t:"AOSIS", why:"AOSIS dates from 1990 and was critical of the Accord’s 2 °C goal."},
     {t:"The Umbrella Group", why:"The United States belongs to it, but BASIC was the group that wrote the Accord with the US."},
     {t:"The EU", why:"The EU was largely sidelined in the final drafting."}]},
   {id:"e4u16-q17", lesson:"e4u16-l2", level:2, q:"How does the IPCC’s Summary for Policymakers differ from its underlying reports?", options:[
     {t:"Governments approve it line by line with the authors, so it is both scientific and diplomatic", ok:true, why:"Right: the full reports are accepted, while the summary is approved word by word."},
     {t:"Scientists write it alone with no government role", why:"Government delegates take part in approving every line."},
     {t:"It contains new research not in the reports", why:"The IPCC does no new research, and the summary must be consistent with the underlying report."},
     {t:"It is legally binding on governments", why:"IPCC reports are assessments, not legal instruments."}]},
   {id:"e4u16-q18", lesson:"e4u16-l2", level:3, q:"Priya writes: “The IPCC failed to agree its AR7 timeline because scientists could not finish their work.” How should she correct it?", options:[
     {t:"The deadlock was among governments: some wanted reports by 2028 to inform the second global stocktake, others favoured a later schedule citing rigour and inclusiveness", ok:true, why:"Right: it locates the dispute and gives each side’s stated reasons."},
     {t:"The IPCC was abolished in 2026", why:"The IPCC continues; its 65th session was suspended, not the panel."},
     {t:"There was no disagreement; the timeline was agreed in 2024", why:"Governments failed six times from 2024 to October 2026 to agree it."},
     {t:"The United Nations Security Council blocked it", why:"The Security Council has no role in IPCC decisions."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u16-q19", lesson:"e4u16-l3", level:2, q:"Which way of counting emissions most strengthens the argument that the United States and Europe bear special responsibility?", options:[
     {t:"Cumulative emissions since the industrial revolution", ok:true, why:"Right: CO₂ persists for centuries, and these economies emitted most over time."},
     {t:"Current annual emissions", why:"By that measure China is the largest emitter today."},
     {t:"Emissions in the year 2025 only", why:"A single recent year is a version of current annual emissions."},
     {t:"Emissions from small island states", why:"These are very small and do not bear on this argument."}]},
   {id:"e4u16-q20", lesson:"e4u16-l3", level:1, q:"Who distinguished “subsistence emissions” from “luxury emissions”?", options:[
     {t:"Henry Shue (1993)", ok:true, why:"Right; Agarwal and Narain had made a related argument in 1991."},
     {t:"Garrett Hardin (1968)", why:"Hardin wrote on the tragedy of the commons."},
     {t:"Robert Putnam (1988)", why:"Putnam developed two-level games."},
     {t:"Paul Crutzen (2000)", why:"Crutzen proposed the term Anthropocene."}]},
   {id:"e4u16-q21", lesson:"e4u16-l3", level:1, q:"According to the OECD, when did developed countries first meet the goal of 100 billion dollars a year in climate finance?", options:[
     {t:"In 2022, two years after the 2020 target date", ok:true, why:"Right: 115.9 billion dollars provided and mobilised, by the OECD’s count."},
     {t:"In 2009, when the goal was set", why:"2009 was when the goal was set at Copenhagen."},
     {t:"In 2020, on time", why:"The OECD found it was met two years late."},
     {t:"It has never been met", why:"The OECD reports it was met in 2022; some NGOs dispute how it is counted."}]},
   {id:"e4u16-q22", lesson:"e4u16-l3", level:2, q:"Which statement about the New Collective Quantified Goal agreed at COP29 in Baku is accurate?", options:[
     {t:"At least 300 billion dollars a year by 2035, with developed countries taking the lead, plus a call for 1.3 trillion a year from all actors", ok:true, why:"Right: the two layers of the goal."},
     {t:"1.3 trillion dollars a year in grants from developed countries", why:"The 1.3 trillion is a wider call on all actors and sources."},
     {t:"100 billion dollars a year by 2025", why:"That was the old goal, extended to 2025 pending the NCQG."},
     {t:"A binding obligation on China to pay 300 billion dollars", why:"Developing countries’ contributions are voluntary."}]},
   {id:"e4u16-q23", lesson:"e4u16-l3", level:1, q:"What does the decision adopting the Paris Agreement say about Article 8 on loss and damage?", options:[
     {t:"It does not involve or provide a basis for any liability or compensation", ok:true, why:"Right: a clause developed countries insisted on."},
     {t:"It creates strict liability for major emitters", why:"The decision says the opposite."},
     {t:"It abolishes the Warsaw International Mechanism", why:"Article 8 builds on the Warsaw Mechanism."},
     {t:"It sets a 100 billion dollar loss and damage fund", why:"The fund came in 2022–2023, with no such sum."}]},
   {id:"e4u16-q24", lesson:"e4u16-l3", level:2, q:"Which body advised in May 2024 that greenhouse gas emissions are marine pollution under UNCLOS?", options:[
     {t:"The International Tribunal for the Law of the Sea (ITLOS)", ok:true, why:"Right: at the request of the Commission of Small Island States on Climate Change and International Law."},
     {t:"The International Court of Justice", why:"The ICJ gave its climate opinion in July 2025."},
     {t:"The UN Security Council", why:"The Council gives no such advisory opinions."},
     {t:"The IPCC", why:"The IPCC assesses science; it does not interpret UNCLOS."}]},
   {id:"e4u16-q25", lesson:"e4u16-l3", level:1, q:"How did the ICJ treat the 1.5 °C goal in its 2025 advisory opinion?", options:[
     {t:"As the agreed primary temperature goal under the Paris Agreement", ok:true, why:"Right, drawing on later decisions of the parties."},
     {t:"As an unscientific target with no legal relevance", why:"The Court gave it central legal relevance."},
     {t:"As replaced by a 2 °C goal", why:"The Court said the opposite."},
     {t:"It did not mention temperature goals", why:"Temperature goals were central to its reasoning on NDCs."}]},
   {id:"e4u16-q26", lesson:"e4u16-l3", level:3, q:"A headline reads: “World court orders oil producers to pay climate damages.” What is wrong with it?", options:[
     {t:"The ICJ gave a non-binding advisory opinion that named no state; it said breaches, including through fossil fuel policies, may be wrongful acts with consequences such as reparation", ok:true, why:"Right: it corrects the overstatement while keeping what the Court did say."},
     {t:"Nothing: the Court ordered specific payments", why:"An advisory opinion orders no payments and names no state."},
     {t:"The Court said fossil fuels are irrelevant to climate obligations", why:"The Court explicitly mentioned fossil fuel production, consumption, licences and subsidies."},
     {t:"The opinion was given by the International Criminal Court", why:"It was the International Court of Justice."}]},
   {id:"e4u16-q27", lesson:"e4u16-l3", level:2, q:"What did the ICJ’s 2025 opinion say about statehood and sea-level rise?", options:[
     {t:"Once a state is established, the loss of a constituent element such as territory would not necessarily end its statehood", ok:true, why:"Right: important for low-lying atoll states."},
     {t:"States lose their UN membership when half their land is submerged", why:"The Court said nothing of the kind."},
     {t:"Statehood questions were outside the request, so it said nothing", why:"The Court addressed the question in its reasoning."},
     {t:"Island states must merge with larger neighbours", why:"No such finding exists."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u16-q28", lesson:"e4u16-l4", level:1, q:"What does the Montreal Protocol’s Multilateral Fund do?", options:[
     {t:"Pays developing countries’ agreed extra costs of phasing out ozone-depleting substances", ok:true, why:"Right: agreed in 1990, it helped bring developing countries in."},
     {t:"Fines countries that miss climate targets", why:"It is a funding mechanism under the ozone regime, not a penalty system."},
     {t:"Funds the IPCC", why:"The IPCC has its own trust fund."},
     {t:"Buys carbon credits", why:"It is not a carbon market."}]},
   {id:"e4u16-q29", lesson:"e4u16-l4", level:2, q:"In Sprinz and Vaahtoranta’s model, how would you classify a country barely harmed by a pollutant but heavily dependent on producing it?", options:[
     {t:"A dragger", ok:true, why:"Right: low vulnerability and high abatement costs."},
     {t:"A pusher", why:"Pushers are highly vulnerable with low abatement costs."},
     {t:"An intermediate", why:"Intermediates are highly vulnerable but face high costs."},
     {t:"A bystander", why:"Bystanders have low vulnerability and low costs."}]},
   {id:"e4u16-q30", lesson:"e4u16-l4", level:3, q:"Ana argues that climate negotiators should simply copy the Montreal Protocol. What is the strongest qualification?", options:[
     {t:"Ozone involved a few chemicals with available substitutes made by few firms; climate involves energy for the whole economy, so costs and draggers are far greater, though finance and trade measures may still transfer", ok:true, why:"Right: it names what transfers and what does not."},
     {t:"The Montreal Protocol failed, so nothing can be learned", why:"It is widely judged a success."},
     {t:"Ozone depletion was never a real problem", why:"The science and the Antarctic ozone loss are well established."},
     {t:"Montreal has no funding mechanism", why:"Its Multilateral Fund is one of its key features."}]},
   {id:"e4u16-q31", lesson:"e4u16-l4", level:1, q:"What is “30 by 30” in the Kunming-Montreal Global Biodiversity Framework?", options:[
     {t:"Target 3: at least 30 per cent of land, inland waters and coastal and marine areas effectively conserved by 2030", ok:true, why:"Right, recognising Indigenous and traditional territories."},
     {t:"Cutting emissions 30 per cent by 2030", why:"That is not a biodiversity framework target."},
     {t:"Thirty new protected species by 2030", why:"The target concerns areas, not a species count."},
     {t:"30 billion dollars of finance by 2030", why:"International finance targets are in Target 19; “30 by 30” refers to area."}]},
   {id:"e4u16-q32", lesson:"e4u16-l4", level:2, q:"What did the first global review of the Kunming-Montreal framework at COP17 (Yerevan, October 2026) conclude?", options:[
     {t:"The world is off track to meet the 23 targets by 2030; parties adopted the Yerevan Pathway to speed up action", ok:true, why:"Right, per the CBD’s closing release."},
     {t:"All 23 targets had already been met", why:"The review found the world off track."},
     {t:"The framework was abandoned", why:"Parties reaffirmed and prioritised it."},
     {t:"The United States joined the CBD", why:"The United States remains outside the Convention."}]},
   {id:"e4u16-q33", lesson:"e4u16-l4", level:1, q:"When did the BBNJ Agreement (High Seas Treaty) enter into force?", options:[
     {t:"17 January 2026", ok:true, why:"Right; its first COP is scheduled for January 2027."},
     {t:"19 June 2023", why:"That was the date of adoption."},
     {t:"1994", why:"1994 is when UNCLOS entered into force."},
     {t:"It has not entered into force", why:"It passed the ratification threshold in 2025 and entered into force in January 2026."}]},
   {id:"e4u16-q34", lesson:"e4u16-l4", level:3, q:"A minister says: “The plastics treaty failed because countries disagree about recycling technology.” Which description of the divisions is more accurate and neutral?", options:[
     {t:"Some countries want global limits on production and harmful chemicals; others, many of them petrochemical producers, want the treaty to focus on waste management; parties also disagree on decision rules and finance", ok:true, why:"Right: it names the main divisions and attributes positions without taking sides."},
     {t:"All countries want production caps but cannot agree on the date", why:"Production limits are themselves the central disagreement."},
     {t:"The talks were cancelled in 2024", why:"Talks continued after Busan and Geneva, with a new chair elected in 2026."},
     {t:"Only NGOs oppose production limits", why:"The positions in the negotiations are those of governments."}]},
   {id:"e4u16-q35", lesson:"e4u16-l4", level:2, q:"What does the WTO Agreement on Fisheries Subsidies, in force since September 2025, prohibit?", options:[
     {t:"Subsidies to illegal, unreported and unregulated fishing, to fishing overfished stocks and to fishing on the unregulated high seas", ok:true, why:"Right: its core prohibitions."},
     {t:"All fishing on the high seas", why:"It disciplines subsidies, not fishing itself."},
     {t:"Fish imports from developing countries", why:"It does not restrict trade in fish."},
     {t:"Aquaculture", why:"Aquaculture is not its subject."}]},
   {id:"e4u16-q36", lesson:"e4u16-l4", level:2, q:"Why is the Kunming-Montreal framework weaker legally than the Montreal Protocol?", options:[
     {t:"It is a COP decision under the CBD, politically agreed but not a separate binding treaty with trade measures", ok:true, why:"Right: its targets rely on national plans and review."},
     {t:"It was rejected by most countries", why:"It was adopted at COP15 in December 2022."},
     {t:"It has no targets", why:"It has 23 targets for 2030."},
     {t:"It covers only the oceans", why:"It covers land, freshwater and marine biodiversity."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u16-q37", lesson:"e4u16-l5", level:1, q:"What wording on fossil fuels did parties agree in the first global stocktake decision at COP28 (2023)?", options:[
     {t:"Transitioning away from fossil fuels in energy systems, in a just, orderly and equitable manner", ok:true, why:"Right: the first COP decision to call for moving away from fossil fuels in general, not only coal."},
     {t:"A full phase-out of fossil fuels by 2040", why:"No phase-out date was agreed."},
     {t:"A ban on new oil exploration", why:"No such ban was agreed."},
     {t:"Phasedown of unabated coal power only", why:"That was Glasgow’s wording in 2021."}]},
   {id:"e4u16-q38", lesson:"e4u16-l5", level:2, q:"What are “stranded assets” in climate politics?", options:[
     {t:"Fossil-fuel reserves or infrastructure that lose value early because climate policy or market change prevents their profitable use", ok:true, why:"Right: the risk Carney called a “tragedy of the horizon”."},
     {t:"Aid money that never reaches developing countries", why:"That is a finance-delivery problem, not stranded assets."},
     {t:"Ships stuck in ports during storms", why:"The term is financial, not literal."},
     {t:"Carbon credits that cannot be sold", why:"Those may lose value, but the term usually refers to fossil assets."}]},
   {id:"e4u16-q39", lesson:"e4u16-l5", level:1, q:"Which country was the first to receive a Just Energy Transition Partnership, announced at COP26 in 2021?", options:[
     {t:"South Africa", ok:true, why:"Right, with an initial package of 8.5 billion dollars."},
     {t:"Indonesia", why:"Indonesia’s JETP was announced in 2022."},
     {t:"Viet Nam", why:"Viet Nam’s JETP was announced in December 2022."},
     {t:"Senegal", why:"Senegal’s JETP was announced in 2023."}]},
   {id:"e4u16-q40", lesson:"e4u16-l5", level:2, q:"What happened to US participation in the JETPs in March 2025?", options:[
     {t:"The United States withdrew from the partner groups for South Africa, Indonesia and Viet Nam; Germany and other partners said the work would continue", ok:true, why:"Right, per South African and German government statements."},
     {t:"The United States doubled its pledges", why:"It withdrew its pledges."},
     {t:"All JETPs were dissolved", why:"Other partners continued."},
     {t:"The United States became the lead partner for Senegal", why:"No such change occurred."}]},
   {id:"e4u16-q41", lesson:"e4u16-l5", level:2, q:"What did the IEA’s *Global Critical Minerals Outlook 2026* report about refining?", options:[
     {t:"Excluding rare earths, the top refining country’s average share rose to 72 per cent in 2025, with China leading most minerals and Indonesia leading nickel", ok:true, why:"Right: concentration increased."},
     {t:"Refining is now spread evenly worldwide", why:"The report found greater concentration."},
     {t:"Indonesia leads refining of all minerals", why:"Indonesia leads nickel; China leads most others."},
     {t:"Export controls on minerals have disappeared", why:"The report found that mineral codes under Chinese export controls had tripled since 2023."}]},
   {id:"e4u16-q42", lesson:"e4u16-l5", level:3, q:"An Indian trade official and an EU official debate CBAM. Which summary attributes their positions accurately?", options:[
     {t:"The EU says CBAM prevents carbon leakage by pricing imports like domestic production; India and others call it a unilateral measure inconsistent with CBDR-RC", ok:true, why:"Right: each side’s stated case, without judging."},
     {t:"Both sides agree CBAM is a tax on developing countries", why:"The EU rejects that description."},
     {t:"India supports CBAM as a model for its own exports", why:"India has criticised CBAM."},
     {t:"The EU says CBAM is temporary and will end in 2026", why:"Its definitive period began in 2026."}]},
   {id:"e4u16-q43", lesson:"e4u16-l5", level:2, q:"In Putnam’s two-level game, why can a narrow domestic win-set be a bargaining asset?", options:[
     {t:"A negotiator can credibly say a concession would be rejected at home, pushing the other side to concede more", ok:true, why:"Right: “my parliament will never accept that” can strengthen one’s hand, at the risk of no deal."},
     {t:"It means the government can sign anything", why:"That would be a broad win-set, which weakens bargaining leverage."},
     {t:"Domestic politics plays no role in Putnam’s model", why:"Domestic ratification is the second level of the game."},
     {t:"It guarantees agreement", why:"Narrow win-sets make agreement less likely."}]},
   {id:"e4u16-q44", lesson:"e4u16-l5", level:1, q:"Why are UNFCCC decisions taken by consensus?", options:[
     {t:"Because its rules of procedure, including a voting rule, were never adopted", ok:true, why:"Right: parties never agreed the voting rule, so consensus is the practice."},
     {t:"Because the UN Charter requires consensus for all treaties", why:"The Charter sets no such rule for COPs."},
     {t:"Because the Paris Agreement bans voting", why:"Paris says nothing to that effect."},
     {t:"Because the COP president decides alone", why:"The president facilitates, but decisions need consensus."}]},
   {id:"e4u16-q45", lesson:"e4u16-l5", level:3, q:"On 12 November 2026 a student writes about COP31. Which sentence is accurate and appropriately dated?", options:[
     {t:"COP31 opened in Antalya on 9 November 2026 under a Turkish presidency, with Australia leading the negotiations; its outcomes are not yet known", ok:true, why:"Right: settled facts only, with the outcome left open."},
     {t:"COP31 agreed a fossil fuel phase-out on 10 November 2026", why:"No such outcome had been agreed; the conference was under way."},
     {t:"COP31 is being held in Australia", why:"It is held in Antalya, Türkiye; Australia leads the negotiations."},
     {t:"COP31 was cancelled", why:"It opened on 9 November 2026."}]}
  ]
});
