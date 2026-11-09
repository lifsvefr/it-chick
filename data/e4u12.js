/* International Studies · Unit 12 · Security, conflict and peacebuilding */
ICA.addUnit({
  id:"e4u12", track:"e4", n:12, title:"Security, conflict and peacebuilding", icon:"🛡️",
  blurb:"Security studies at seminar level: what “security” means and for whom, from traditional strategic studies to critical and human security; why civil wars start, last and end; whether peacekeeping works and what the critics of the liberal peace say; nuclear, conventional and autonomous weapons and the treaties that try to govern them; and the Asia-Pacific security architecture, from hub-and-spoke alliances to ASEAN forums, told neutrally.",
  goals:[
    "Compare traditional, critical and human security approaches, and say what each one counts as a threat and whose security it puts first",
    "Explain the main research programmes on civil war onset, duration, termination and recurrence, with the key works and their critics",
    "Weigh the evidence on whether peacekeeping works, and the debate between defenders and critics of the liberal peace, including the local turn and Women, Peace and Security",
    "Describe the nuclear non-proliferation regime, the ban treaty, conventional arms treaties and the autonomous weapons talks accurately and as of November 2026",
    "Map the Asia-Pacific security architecture and describe the Korean Peninsula, cross-Strait relations and the South China Sea neutrally, attributing each position",
    "Use the unit’s vocabulary and works to argue a position in a seminar, with a counter-argument"
  ],
  read:[
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy), Chapter 14 “Transnational Terrorism” (Katherine Brown) and Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"Short, free background chapters. The lessons go further than they do; read them as a second voice."},
    {book:"eirt", where:"Chapter 14 “Securitisation Theory” (Clara Eroukhmanoff) and Chapter 8 “Feminism”", note:"For Lesson 1: two of the critical approaches to security in a theory textbook."},
    {book:"sipri26", where:"The free summary, and the free full Chapter 8 “World nuclear forces”", note:"The standard annual reference on armed conflict, peace operations, arms and arms control. Summaries are free in many languages, including Chinese, Japanese and Korean."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u12-l1", title:"Rethinking security: traditional, critical and human", minutes:60,
   hook:{q:"In December 2021 the UN Security Council voted on a draft resolution that would have treated climate change as a risk to international peace and security. What happened?", options:["It was adopted unanimously","It was vetoed by Russia, with India also voting against","It was withdrawn before any vote","It was adopted, but only with China’s support"], answer:1, reveal:"**Russia vetoed it, India voted against and China abstained**, while 12 members voted in favour. Supporters argued that climate change multiplies threats such as hunger and displacement; opponents argued that the Council was the wrong body and that framing climate as security could justify outside interference. That is a live argument about what “security” covers and who decides, which is what this lesson is about."},
   goals:[
     "Use Baldwin’s questions to pin down what any security claim means",
     "Explain why traditional security studies kept a narrow, military focus, and what its defenders argue",
     "Distinguish the main critical approaches: Copenhagen, Welsh (Aberystwyth), Paris, feminist and postcolonial",
     "Compare the “freedom from fear” and “freedom from want” versions of human security, and the roles of Canada and Japan",
     "Weigh the critiques of human security",
     "Apply regional security complex theory to a region"
   ],
   learn:[
    {h:"Security: a contested concept", body:[
      {lead:"A border guard, a farmer in a drought and a woman walking home at night can all say “I don’t feel secure”. Are they talking about the same thing?"},
      "The IR primer showed that [[security-studies|security studies]] began with the safety of the state from military attack, then **widened** to new threats and **deepened** to new referents such as people and the planet (see {{security-studies}}). This lesson takes that argument to seminar level.",
      "Start with a tool. In “The Concept of Security” (*Review of International Studies*, 1997), David Baldwin argued that a security claim is empty until it answers seven questions:",
      {ol:["Security **for whom**?","Security **for which values**?","**How much** security?","From **what threats**?","By **what means**?","At **what cost**?","In **what time period**?"]},
      "Two people can both be “for security” and disagree on every one of these. That is why scholars call security an **essentially contested concept**: its meaning is part of the political argument, not settled before it.",
      {tip:"In a seminar, when someone says “X is a security issue”, ask Baldwin’s first two questions out loud. It usually reveals which school they belong to."}
    ]},
    {h:"Traditional security studies and its defenders", body:[
      "[[traditional-security-studies|Traditional security studies]] grew out of Cold War **strategic studies**: deterrence, arms races and the use of force, the world of Brodie and Schelling that Unit 1 introduced. Its referent is the state; its threats are mainly military; its theory is mostly [[realism]].",
      "The classic defence of this focus is Stephen Walt’s “The Renaissance of Security Studies” (*International Studies Quarterly*, 1991). Walt defined the field as “the study of the threat, use, and control of military force”. He warned that adding pollution, disease and poverty would destroy the field’s “intellectual coherence” and make solutions harder to find.",
      "Barry Buzan’s *People, States and Fear* (1983; second edition 1991) was a bridge. It kept the state central but argued that security has military, political, economic, societal and environmental sectors, the seed of the later Copenhagen School.",
      {key:"The traditionalist case is not that other harms don’t matter. It is that calling them all “security” blurs analysis and invites military solutions to non-military problems."},
      "Traditionalists also point to the data. In 2025, the Uppsala Conflict Data Program (UCDP) recorded eight interstate conflicts, the highest number since its records begin in 1946. Wars between states have not disappeared."
    ]},
    {h:"Critical security studies: the schools", body:[
      "From the 1990s, scholars who rejected the state-and-military focus came to be grouped as [[critical-security-studies|critical security studies]], a label made popular by Keith Krause and Michael Williams’s edited book *Critical Security Studies* (1997). It is a family, not one theory:",
      {table:[
        ["School","Key works","Core claim"],
        ["[[copenhagen-school|Copenhagen]]","Buzan, Wæver & de Wilde (1998)","Security is a speech act; study how issues are securitised"],
        ["[[welsh-school|Welsh (Aberystwyth)]]","Booth, “Security and Emancipation” (1991); Wyn Jones (1999)","Real security means **emancipation**: freeing people from constraints such as war, poverty and oppression"],
        ["[[paris-school|Paris]]","Bigo and others","Security is made by the everyday practices of police, border and intelligence professionals"],
        ["[[feminist-security-studies|Feminist]]","Tickner (1992); Enloe; Hansen (2000)","Ask where women and gender are; the state can be a source of insecurity"],
        ["Postcolonial","Ayoob, *The Third World Security Predicament* (1995)","For many postcolonial states, the main threats are internal, born of unfinished state-building"]
      ]},
      "Unit 2 covered securitisation in depth ({{securitization-theory}}). Ken Booth’s Welsh School is different: it is openly normative. Following Frankfurt School [[critical-theory-ir|Critical Theory]], Booth defined security as [[emancipation-ir|emancipation]] and asked scholars to take the side of the insecure. Copenhagen scholars, by contrast, often prefer [[desecuritization|desecuritisation]], because securitising an issue can suspend normal politics.",
      "Mohammed Ayoob’s point matters for Asia and Africa. He argued that Western theories assumed states secure at home and threatened from outside, while many states in the [[global-south|Global South]] face insurgency, contested borders and weak institutions. Unit 2 called related ideas [[subaltern-realism|subaltern realism]].",
      {fig:'<svg viewBox="0 0 340 330"><path class="d-ink" d="M30,292 V22" stroke-width="2"/><path class="d-ink" d="M30,292 H332" stroke-width="2"/><path class="d-inkf" d="M30,14 L24,26 H36 Z"/><path class="d-inkf" d="M338,292 L326,286 V298 Z"/><rect class="d-rose" x="40" y="30" width="138" height="122" rx="8" stroke-width="2"/><text x="109" y="62" text-anchor="middle">Welsh School,</text><text x="109" y="80" text-anchor="middle">feminist</text><text class="s" x="109" y="104" text-anchor="middle">people facing war</text><text class="s" x="109" y="120" text-anchor="middle">and state violence</text><rect class="d-sage" x="188" y="30" width="142" height="122" rx="8" stroke-width="2"/><text x="259" y="62" text-anchor="middle">Human security</text><text class="s" x="259" y="86" text-anchor="middle">UNDP 1994: fear</text><text class="s" x="259" y="102" text-anchor="middle">and want, people</text><text class="s" x="259" y="118" text-anchor="middle">first</text><rect class="d-soft" x="40" y="162" width="138" height="122" rx="8" stroke-width="2"/><text x="109" y="194" text-anchor="middle">Traditional</text><text x="109" y="212" text-anchor="middle">security studies</text><text class="s" x="109" y="236" text-anchor="middle">Walt 1991: threat,</text><text class="s" x="109" y="252" text-anchor="middle">use, control of force</text><rect class="d-gold" x="188" y="162" width="142" height="122" rx="8" stroke-width="2"/><text x="259" y="194" text-anchor="middle">Copenhagen</text><text x="259" y="212" text-anchor="middle">School</text><text class="s" x="259" y="236" text-anchor="middle">five sectors; states</text><text class="s" x="259" y="252" text-anchor="middle">and societies</text><text class="s" x="109" y="312" text-anchor="middle">Military threats</text><text class="s" x="259" y="312" text-anchor="middle">Many kinds of threat</text><text class="s" x="20" y="230" text-anchor="middle" transform="rotate(-90 20 230)">State</text><text class="s" x="20" y="90" text-anchor="middle" transform="rotate(-90 20 90)">People</text></svg>', alt:"A two-by-two grid. The horizontal axis runs from military threats to many kinds of threat; the vertical axis from the state at the bottom to people at the top. Bottom left: traditional security studies, Walt 1991, the threat, use and control of force. Bottom right: the Copenhagen School, five sectors, states and societies. Top left: the Welsh School and feminist approaches, people facing war and state violence. Top right: human security, UNDP 1994, fear and want, people first.", cap:"Widening (what counts as a threat) and deepening (whose security). The placements are a simplification: each school argues about its own box."}
    ]},
    {h:"Human security: two versions, two champions", body:[
      "The primer introduced [[human-security|human security]] from the UNDP’s 1994 *Human Development Report*, with its seven areas and the slogan of [[freedom-from-fear|freedom from fear]] and [[freedom-from-want|freedom from want]] (see {{human-security}}). In practice, governments took up the two freedoms differently.",
      {table:[
        ["","Narrow: freedom from fear","Broad: freedom from want"],
        ["Champion","Canada (Foreign Minister Lloyd Axworthy) with Norway","Japan (Prime Minister Obuchi Keizō)"],
        ["Focus","Violence against civilians: landmines, child soldiers, small arms, mass atrocities","Poverty, disease, disasters, livelihoods, as well as violence"],
        ["Landmarks","Mine Ban Convention (1997); Lysøen Declaration (1998) and the Human Security Network; ICISS report on the responsibility to protect (2001)","UN Trust Fund for Human Security (1999); Commission on Human Security, co-chaired by {{sadako-ogata|Ogata Sadako}} and Amartya Sen, report *Human Security Now* (2003)"]
      ]},
      "Japan’s Foreign Ministry records that Obuchi spoke on human security in December 1998, announcing in Hanoi a contribution of about 500 million yen for a UN trust fund, which was set up in March 1999. Japan has kept human security as a guiding idea of its aid ([[development-cooperation-charter|Development Cooperation Charter]]); scholars note that it has generally kept clear of the interventionist edge of the Canadian version.",
      "UN Secretary-General Kofi Annan’s report *In Larger Freedom* (2005) added a third freedom, to live in dignity. In 2012 the General Assembly agreed a common understanding (resolution 66/290) that human security does **not** entail the threat or use of force and does not replace state security. In 2022 the UNDP returned to the idea in a special report, *New Threats to Human Security in the Anthropocene*."
    ]},
    {h:"Is human security useful? The debate", body:[
      "Roland Paris’s article “Human Security: Paradigm Shift or Hot Air?” (*International Security*, 2001) is the standard critique. He argued that the concept is so broad it gives no guide to priorities or research: if everything is a threat, nothing can be tested. Its vagueness, he noted, was also why so many governments and NGOs could sign up to it. Yuen Foong Khong (2001) added that labelling every misery “security” cannot tell policymakers what to do first.",
      "Defenders reply that the concept is a **political agenda**, not a hypothesis, and that it changed practice: the landmine ban, child-soldier protocols, the protection of civilians in peacekeeping. Shahrbanou Tadjbakhsh and Anuradha Chenoy (*Human Security: Concepts and Implications*, 2007) argued that the broad version reflects how insecurity is lived in much of the Global South.",
      "Critics from other directions add two points. Some governments, in Asia and elsewhere, welcomed “freedom from want” but distrusted “freedom from fear”, fearing it could justify intervention and erode [[non-interference]]. Some critical theorists warn that human security can be absorbed by states as a label for business as usual."
    ]},
    {h:"Regional security complexes", body:[
      "Most threats travel more easily over short distances than long ones. From this simple point Barry Buzan and Ole Wæver built {{regional-security-complex-theory|regional security complex theory}} in *Regions and Powers* (2003).",
      "A [[regional-security-complex|regional security complex]] is a group of states whose security concerns are so linked that they cannot be analysed apart from each other: South Asia around India and Pakistan, the Gulf, or East Asia, where Buzan and Wæver argued that Northeast and Southeast Asia were merging into one complex. Each complex has patterns of **amity and enmity**, and great powers can **penetrate** it from outside. Between complexes sit **insulator** states, such as Afghanistan, which in their account separates South Asia from the Middle East and Central Asia.",
      "The theory is useful because it stops two errors: treating every regional crisis as a sideshow of great-power rivalry, and treating a region as if outsiders did not matter. Critics say its regional borders can be arbitrary and that it underplays transnational threats such as pandemics and climate change."
    ]},
    {h:"Worked example: one river, four lenses", body:[
      {ex:"The Mekong rises in China (where it is called the Lancang) and flows through Myanmar, Laos, Thailand, Cambodia and Vietnam. Dams upstream and downstream have changed its flow.\n\n• **Traditional:** is water a source of interstate conflict? So far it has led to diplomacy, not war.\n• **Human security:** fisheries, rice farming and the river’s sediment support the livelihoods of millions of people downstream.\n• **Securitisation:** who calls the river’s changes a “threat”, to which audience, and with what measures?\n• **Regional security complex:** two bodies coexist, the Mekong River Commission (1995: Cambodia, Laos, Thailand, Vietnam) and the China-led Lancang–Mekong Cooperation (2016).", label:"Worked example"},
      "Positions differ and should be attributed. China’s government says its dams generate clean power and can release water in dry seasons; some downstream researchers and communities argue that upstream dams alter flows and fisheries. A seminar paper says who argues what, and what evidence each side uses.",
      {terms:["traditional-security-studies","critical-security-studies","copenhagen-school","welsh-school","paris-school","feminist-security-studies","freedom-from-fear","freedom-from-want","non-traditional-security","regional-security-complex"]}
    ]}
   ],
   try:[
    {id:"e4u12-l1-x1", type:"sort", q:"Would a **traditional** security scholar such as Walt accept each topic as security studies, or is it a **widened** agenda?", buckets:["Traditional security studies","Widened agenda"], items:[
      {t:"How missile defences affect a rival’s willingness to attack first", b:0, why:"The threat and use of military force between states: Walt’s core."},
      {t:"Whether alliances deter invasion", b:0, why:"Alliances and deterrence are classic strategic studies."},
      {t:"How drought threatens farmers’ livelihoods in a river basin", b:1, why:"A non-military threat to people: human security, a widening Walt warned against."},
      {t:"How a government framed migration as an existential threat to national identity", b:1, why:"Societal security and securitisation: the Copenhagen School’s widened agenda."},
      {t:"How arms control agreements reduce the risk of accidental war", b:0, why:"The control of military force is part of Walt’s definition."},
      {t:"How women experience insecurity in refugee camps", b:1, why:"A deepened referent (people, gender), central to feminist security studies."}
    ]},
    {id:"e4u12-l1-x2", type:"match", q:"Match each approach to its core claim.", pairs:[
      ["Copenhagen School","Security is a speech act: issues are securitised when an audience accepts a claim of existential threat","Buzan, Wæver and de Wilde (1998)."],
      ["Welsh (Aberystwyth) School","Security means emancipation: freeing people from war, poverty and oppression","Booth (1991), drawing on Critical Theory."],
      ["Paris School","Security is produced by routine practices of police, border and intelligence agencies","Bigo and others: practices, not only speeches."],
      ["Postcolonial approaches","Many states’ main threats are internal, from incomplete state-building","Ayoob (1995), the Third World security predicament."],
      ["Traditional security studies","The field studies the threat, use and control of military force","Walt (1991)."]
    ]},
    {id:"e4u12-l1-x3", type:"mcq", q:"A minister says: “Food is now a national security priority.” Which of Baldwin’s questions would best expose what the minister means?", options:[
      {t:"Security for whom, and for which values: the state’s stability, farmers’ incomes, or poor households’ access to food?", ok:true, why:"Right. Baldwin’s first two questions identify the referent and the values, which decide what policy follows."},
      {t:"Whether food is more important than military power", why:"That is a ranking, not a clarification. Baldwin’s point is that the claim is empty until its terms are specified."},
      {t:"Whether the minister belongs to a realist party", why:"Labels say little; the questions are about the content of the claim."},
      {t:"How much the defence budget is", why:"The means and cost questions matter later, but first you need to know whose security, from what."}
    ]},
    {id:"e4u12-l1-x4", type:"sort", q:"Which version of human security does each initiative fit best?", buckets:["Freedom from fear (narrow)","Freedom from want (broad)"], items:[
      {t:"A treaty banning anti-personnel landmines", b:0, why:"Protection from violence: the Canadian-led agenda that produced the 1997 Mine Ban Convention."},
      {t:"A fund for community health and livelihoods after a disaster", b:1, why:"Livelihoods and health: the broad, Japanese-backed approach of the Trust Fund for Human Security."},
      {t:"A campaign to end the recruitment of child soldiers", b:0, why:"Protection of civilians from violence."},
      {t:"A report linking human security to poverty, education and migration", b:1, why:"*Human Security Now* (2003) took this broad view."},
      {t:"A principle that states and the world have a responsibility to protect people from mass atrocities", b:0, why:"The ICISS report (2001) grew from the freedom-from-fear agenda."}
    ]},
    {id:"e4u12-l1-x5", type:"mcq", q:"What was Roland Paris’s main criticism of human security in 2001?", options:[
      {t:"It is so broad that it gives no guide to priorities or testable research", ok:true, why:"Yes. “Paradigm shift or hot air?” argued that its expansiveness was both its political strength and its analytical weakness."},
      {t:"It is a Japanese idea that does not travel", why:"Paris did not argue this; and the idea had several champions, including Canada and the UNDP."},
      {t:"It ignores violence against civilians", why:"The narrow version focuses on exactly that; Paris’s complaint was breadth, not omission."},
      {t:"It requires military intervention", why:"The UN’s 2012 understanding says human security does not entail the threat or use of force; Paris’s point was conceptual."}
    ]},
    {id:"e4u12-l1-x6", type:"spot", q:"A student essay summarises the debate. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"The 1994 Human Development Report popularised human security as freedom from fear and freedom from want.", flag:false, why:"Correct: that is the report’s framing."},
      " ",
      {t:"Critical security studies is a single theory founded by Barry Buzan.", flag:true, why:"Wrong. It is a family of approaches (Copenhagen, Welsh, Paris, feminist, postcolonial). Buzan is linked to the Copenhagen School, and Booth to the Welsh School."},
      " ",
      {t:"Walt argued that widening security to every harm would cost the field its coherence.", flag:false, why:"Correct summary of “The Renaissance of Security Studies” (1991)."},
      " ",
      {t:"The UN General Assembly agreed in 2012 that human security justifies the use of force to protect people.", flag:true, why:"Wrong. Resolution 66/290 says human security does not entail the threat or use of force."},
      " ",
      {t:"Ayoob argued that for many postcolonial states the main threats are internal.", flag:false, why:"Correct: the Third World security predicament."}
    ]},
    {id:"e4u12-l1-x7", type:"mcq", q:"Hana is writing about India–Pakistan rivalry and asks why China and Afghanistan keep appearing in her sources. Which idea from regional security complex theory helps most?", options:[
      {t:"Complexes have outside powers that penetrate them and insulator states at their edges, so neighbours matter without being core members", ok:true, why:"Right. Buzan and Wæver treat South Asia as a complex centred on India and Pakistan, with outside penetration and Afghanistan as an insulator in their account."},
      {t:"Regions don’t matter; only global polarity does", why:"That is the error the theory was built to correct."},
      {t:"All security is a speech act", why:"That is securitisation theory, a related but separate idea."},
      {t:"Every state in Asia belongs to one complex", why:"Buzan and Wæver distinguish South Asia from East Asia."}
    ]}
   ],
   apply:{
    intro:"Turn the concepts into analysis. You need only a browser and a notebook.",
    tasks:[
     {t:"Baldwin’s seven questions on a real claim", how:[
       "Find a recent speech, strategy or news story in which a government calls something a security issue (energy, food, water, technology, migration, disease).",
       "Answer Baldwin’s seven questions as far as the text allows, and mark which ones it leaves unanswered.",
       "Note which school of thought the claim fits best, and why."
     ], write:"The claim and source… For whom… Which values… From what threat… By what means… At what cost… Which questions go unanswered… Which school…"},
     {t:"Two versions of human security", how:[
       "Look up the UN Trust Fund for Human Security’s list of projects, or Japan’s Diplomatic Bluebook section on human security, and one source on the Canadian-led Mine Ban Convention.",
       "Write three sentences on how each uses the term, and one on what each leaves out."
     ], write:"How the trust fund or Bluebook uses it… How the landmine campaign used it… What each leaves out…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is widening security an analytical gain or a political risk?",
       "2. Should scholars ever recommend securitising an issue, or always desecuritising?",
       "3. Does regional security complex theory fit your own region? Draw its core, penetrating powers and insulators."
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes applying Baldwin’s questions to one real security claim, a short comparison of the two versions of human security, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 14 “Securitisation Theory” (Clara Eroukhmanoff)", note:"Read after this lesson for a worked example of the Copenhagen School."},
    {book:"eirt", where:"Chapter 8 “Feminism”", note:"Background on the feminist questions that feminist security studies asks."},
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"How protecting people inside states became an international concern."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u12-l2", title:"Why civil wars happen, last and end", minutes:60,
   hook:{q:"Mary Kaldor’s influential idea of “new wars” (1999) grew above all from her observation of one conflict. Which?", options:["The war in Bosnia and Herzegovina in the early 1990s","The Korean War","The Iran–Iraq War","The Vietnam War"], answer:0, reveal:"**Bosnia and Herzegovina**, which she observed closely in the early 1990s. Kaldor saw a war fought by militias and criminal networks, waged mostly against civilians in the name of identity, and paid for through a globalised war economy. Critics soon asked how new these features really were. This lesson follows the main research debates on why civil wars start, why they last, and how they end."},
   goals:[
     "Separate the four research questions about civil war: onset, duration, termination and recurrence",
     "Explain the greed, grievance and feasibility arguments, with the measurement problems behind them",
     "Summarise the “new wars” thesis and the main critiques, including Kalyvas on violence",
     "Explain commitment problems, spoilers and the debate over victories versus settlements",
     "Analyse a real peace process (Nepal) using these ideas",
     "Choose the right dataset for a civil war question"
   ],
   learn:[
    {h:"Four questions, not one", body:[
      {lead:"“Why do civil wars happen?” is really four questions, and the answers differ."},
      "The primer set out three explanations of [[civil-war|civil war]] onset: opportunity, state weakness and grievance (see {{causes-of-war}}). Research since the 1990s splits the life of a civil war into stages, because something that starts a war may not be what keeps it going:",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="u12a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 Z"/></marker></defs><rect class="d-rose" x="100" y="14" width="140" height="56" rx="10" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Onset</text><text class="s" x="170" y="56" text-anchor="middle">why does it start?</text><rect class="d-gold" x="196" y="122" width="136" height="56" rx="10" stroke-width="2"/><text x="264" y="146" text-anchor="middle">Duration</text><text class="s" x="264" y="164" text-anchor="middle">why does it last?</text><rect class="d-sage" x="100" y="230" width="140" height="56" rx="10" stroke-width="2"/><text x="170" y="254" text-anchor="middle">Termination</text><text class="s" x="170" y="272" text-anchor="middle">how does it end?</text><rect class="d-lup" x="8" y="122" width="136" height="56" rx="10" stroke-width="2"/><text x="76" y="146" text-anchor="middle">Recurrence</text><text class="s" x="76" y="164" text-anchor="middle">why does it return?</text><path class="d-ink" d="M226,72 Q262,92 264,118" fill="none" stroke-width="2" marker-end="url(#u12a)"/><path class="d-ink" d="M264,182 Q262,212 230,230" fill="none" stroke-width="2" marker-end="url(#u12a)"/><path class="d-ink" d="M110,230 Q78,212 76,182" fill="none" stroke-width="2" marker-end="url(#u12a)"/><path class="d-ink" d="M76,118 Q78,92 112,72" fill="none" stroke-width="2" marker-end="url(#u12a)"/></svg>', alt:"A cycle of four boxes joined by arrows: onset (why does it start?), duration (why does it last?), termination (how does it end?) and recurrence (why does it return?), which leads back to onset.", cap:"The civil war cycle. Many wars since 1990 have been recurrences of earlier ones."},
      "Each stage has its own literature, its own datasets and its own policy debates. Keep them apart in a seminar: a finding about onset is not a finding about how to end a war."
    ]},
    {h:"Greed, grievance and feasibility", body:[
      "Paul Collier and Anke Hoeffler’s “Greed and Grievance in Civil War” (*Oxford Economic Papers*, 2004) became the most cited and most criticised paper in the field. Using civil wars from 1960 to 1999, they found that measures of **opportunity** predicted onset better than measures of **grievance** such as inequality or political repression.",
      "Their key measure was a country’s dependence on **primary commodity exports** (oil, minerals, crops) as a share of GDP, read as a sign of “lootable” money for rebels. They also used low school enrolment of young men and slow economic growth, read as cheap recruits.",
      "The problem is that each proxy can mean several things. James Fearon (2005) showed that commodity dependence also signals a **weak state** that lives off resource rents instead of taxing and governing its people, which was his and David Laitin’s explanation (2003). Michael Ross (2004) reviewed the evidence and found that oil was linked to the outbreak of war, and lootable resources such as gemstones and drugs to its length, while most other commodities showed no clear link. The wider [[resource-curse|resource curse]] literature asks why resource wealth so often goes with weak institutions.",
      "In 2009 Collier, Hoeffler and Dominic Rohner moved to a [[feasibility-hypothesis|feasibility hypothesis]]: where rebellion is financially and militarily feasible, it will happen, whatever its motive. Critics replied that “feasibility” is hard to falsify, and that the original [[greed-and-grievance|greed versus grievance]] framing had cast rebels as criminals and ignored politics.",
      {key:"The variables were never the whole argument. The fight was over what a number stands for: rebels’ greed, a weak state, or both."}
    ]},
    {h:"Grievance returns", body:[
      "From the late 2000s, new data brought grievance back. Unit 6 showed how the Ethnic Power Relations dataset linked **political exclusion** of ethnic groups to rebellion, and how [[horizontal-inequality|horizontal inequality]] between groups raises the risk of war (see {{ethnic-conflict}}). Lars-Erik Cederman, Kristian Skrede Gleditsch and Halvard Buhaug summed up the case in *Inequality, Grievances, and Civil War* (2013).",
      "The lesson for research design: grievance had looked weak partly because it had been measured badly, as inequality between **individuals** across a whole country, rather than as inequality and exclusion between **groups**."
    ]},
    {h:"“New wars” and their critics", body:[
      "In *New and Old Wars* (1999; third edition 2012), {{mary-kaldor|Mary Kaldor}} argued that wars after the Cold War differed from “old” wars between states in four ways: their **goals** (identity politics rather than ideology or territory), their **methods** (displacement and terror against civilians rather than battles), their **actors** (militias, warlords, mercenaries and criminal networks alongside armies) and their **finance** (a globalised [[war-economy|war economy]] of looting, smuggling, diaspora money and aid diversion).",
      "Stathis Kalyvas’s reply, “‘New’ and ‘Old’ Civil Wars: A Valid Distinction?” (*World Politics*, 2001), argued that most of these features were present in older civil wars too, and that the end of the Cold War had changed how wars were **described** more than how they were fought. Others questioned the data behind the claim that civilians had become a far larger share of the dead.",
      "Kalyvas’s own book, *The Logic of Violence in Civil War* (2006), changed the field. Drawing on fieldwork in Greece, he argued that violence against civilians is not mindless: armed groups use [[selective-violence|selective violence]] to control territory and deter defection, often based on denunciations by neighbours settling local scores.",
      "Kaldor defended the idea in “In Defence of New Wars” (2013): “new wars” is a lens for policy, she argued, not a claim that every feature is unprecedented. The debate taught the field to ask how wars are fought and financed, not only why they start.",
      {terms:["greed-and-grievance","feasibility-hypothesis","resource-curse","new-wars","war-economy","selective-violence"]}
    ]},
    {h:"Ending civil wars: commitment problems and spoilers", body:[
      "Wars between states often end with each army going home. Civil wars are harder: both sides must live in one country afterwards, and one of them must usually disarm. {{barbara-walter|Barbara F. Walter}} called this “The Critical Barrier to Civil War Settlement” (*International Organization*, 1997) and developed it in *Committing to Peace* (2002).",
      {ex:"The rebels’ dilemma:\n1. A deal asks rebels to hand in their weapons.\n2. Once disarmed, they cannot punish a government that breaks the deal.\n3. Knowing this, they doubt the government’s promises today.\n4. So they refuse, or sign and keep weapons hidden.\nThe fix: a third party that guarantees the deal while trust is built, and power-sharing that gives rebels a stake.", label:"The commitment problem"},
      "This is the [[commitment-problem|commitment problem]] you met in Fearon’s bargaining model, applied inside a state. Walter found that settlements were far more likely to be implemented when an outside power guaranteed them. Caroline Hartzell and Matthew Hoddie (*American Journal of Political Science*, 2003) found that settlements sharing power along several dimensions (political, military, territorial, economic) lasted longer.",
      "Stephen Stedman (“Spoiler Problems in Peace Processes”, *International Security*, 1997) added the [[spoiler|spoiler]]: a leader or group that uses violence to undermine a peace that threatens its power. He distinguished **limited**, **greedy** and **total** spoilers, each needing a different strategy.",
      "Not everyone favours negotiation. Monica Duffy Toft (*Securing the Peace*, 2010) argued that civil wars ended by military victory, especially rebel victory, recurred less often than negotiated ones, and that settlements last best when they reform the security sector. Critics answer that victories can mean repression, and that the cases are hard to compare.",
      "Recurrence is common. A World Bank team led by Collier called it the [[conflict-trap|conflict trap]] (*Breaking the Conflict Trap*, 2003): war leaves poverty, armed groups and grievances that raise the risk of new war. Walter (2004) found that [[conflict-recurrence|recurrence]] is more likely where living conditions are poor and people have little access to politics."
    ]},
    {h:"Worked example: Nepal, 1996–2006", body:[
      "In February 1996 the Communist Party of Nepal (Maoist) launched an armed insurgency against the monarchy and the state. By commonly cited estimates, more than 13,000 people were killed. The war ended with the Comprehensive Peace Agreement of 21 November 2006, after a mass movement in April 2006 forced the king to restore parliament.",
      {table:[
        ["Problem","How the process handled it"],
        ["Commitment: who disarms first?","Maoist fighters went into cantonments and the national army to barracks; weapons were stored under UN monitoring (UN Mission in Nepal, UNMIN, 2007–2011)"],
        ["Political stake","An interim constitution and an elected Constituent Assembly (2008), in which the Maoists became the largest party; the monarchy was abolished in 2008"],
        ["Reintegration","Former combatants could join the army or take a cash or rehabilitation package; most took cash, and the process was largely complete by 2012–13"]
      ]},
      "Analysts debate the lessons. Some credit inclusion and outside monitoring; others note slow transitional justice and years of political instability. Both views can be held at once."
    ]},
    {h:"Choosing the right data", body:[
      "Unit 3 introduced the major datasets ({{ir-datasets}}). For civil wars, match the dataset to the stage:",
      {table:[
        ["Question","Dataset","Unit of observation"],
        ["Onset and duration","UCDP/PRIO Armed Conflict Dataset","Conflict-year, with the 25 [[battle-related-deaths|battle-related deaths]] threshold"],
        ["Where and when violence happens","UCDP Georeferenced Event Dataset; ACLED (Armed Conflict Location & Event Data)","Single events, with place and date"],
        ["How wars end","UCDP Peace Agreement and Conflict Termination datasets","Agreements; conflict episodes"],
        ["Exclusion and grievance","Ethnic Power Relations (EPR)","Ethnic group-year"]
      ]},
      {warn:"Datasets define violence differently. ACLED also records protests and riots, and needs a free account; UCDP counts only deaths in organised armed violence. Two “counts of conflict” can differ for good reasons, so cite the dataset, its version and its definitions."},
      {terms:["commitment-problem","spoiler","conflict-trap","conflict-recurrence"]}
    ]}
    ,{h:"Common misconceptions", body:[
      {list:[
        "**“Civil wars are caused by ethnic diversity.”** Diversity alone predicts war poorly; exclusion, inequality between groups and weak states matter more.",
        "**“Greed means rebels are criminals.”** Collier and Hoeffler measured opportunity, not motives, and later moved to feasibility. Governments and their allies can profit from war economies too.",
        "**“A signed agreement means the war is over.”** Many wars recur. Implementation, guarantees and inclusion decide whether a signature becomes peace.",
        "**“New wars are a fact, not a debate.”** Kaldor’s thesis remains contested; use it as a lens and test it against your case."
      ]}
    ]}
   ],
   try:[
    {id:"e4u12-l2-x1", type:"sort", q:"Which stage of the civil war cycle does each research question address?", buckets:["Onset","Duration","Termination","Recurrence"], items:[
      {t:"Do countries that depend on oil exports see more rebellions break out?", b:0, why:"Whether a war starts: onset."},
      {t:"Do rebels who control gemstone mines keep fighting longer?", b:1, why:"How long a war lasts; Ross (2004) linked lootable resources to duration."},
      {t:"Are settlements guaranteed by an outside power more likely to be implemented?", b:2, why:"How wars end: Walter’s question."},
      {t:"Why did fighting restart five years after a peace agreement?", b:3, why:"A war returning after it ended: recurrence."},
      {t:"Which kinds of mediation help the parties reach a signed agreement?", b:2, why:"Getting from fighting to a settlement is termination research."}
    ]},
    {id:"e4u12-l2-x2", type:"mcq", q:"Collier and Hoeffler read high primary commodity exports as a sign of rebels’ opportunity to loot. What was Fearon’s alternative reading?", options:[
      {t:"Commodity dependence signals a weak state that lives off resource rents rather than governing and taxing its people", ok:true, why:"Right. The same number can stand for rebel opportunity or for state weakness, which is the core of the measurement debate."},
      {t:"Commodity exports have nothing to do with civil war", why:"Fearon found that oil in particular mattered; he disputed the mechanism, not every link."},
      {t:"Commodity exports measure ethnic grievance", why:"Neither side read them that way; grievance was measured with other indicators."},
      {t:"Commodity exports mean rebels are motivated by ideology", why:"The debate was between greed and state weakness, not ideology."}
    ]},
    {id:"e4u12-l2-x3", type:"match", q:"Match each work to its main argument.", pairs:[
      ["Kaldor, *New and Old Wars* (1999)","Post-Cold War wars are fought over identity, against civilians, financed by a globalised war economy","The “new wars” thesis."],
      ["Kalyvas, “‘New’ and ‘Old’ Civil Wars” (2001)","Most supposedly new features existed in older civil wars too","The main critique of the thesis."],
      ["Kalyvas, *The Logic of Violence in Civil War* (2006)","Armed groups use selective violence to control territory and deter defection","His theory of violence against civilians."],
      ["Stedman, “Spoiler Problems” (1997)","Peace processes are threatened by limited, greedy and total spoilers","His typology of spoilers."],
      ["Toft, *Securing the Peace* (2010)","Wars ended by victory, especially rebel victory, recur less often than negotiated ones","A challenge to the preference for settlements."]
    ]},
    {id:"e4u12-l2-x4", type:"order", q:"Put the steps of the rebels’ commitment problem in order.", items:[
      {t:"A peace deal asks the rebels to disarm.", why:"The starting point: disarmament is usually part of a civil war settlement."},
      {t:"Once disarmed, the rebels could not punish the government for breaking the deal.", why:"Disarming removes their only guarantee."},
      {t:"So the rebels doubt the government’s promises today.", why:"They foresee the future weakness and discount promises now."},
      {t:"They refuse to sign, or sign and hide weapons.", why:"The rational response to an unsolved commitment problem."},
      {t:"A third-party guarantee and power-sharing can break the deadlock.", why:"Walter’s and Hartzell and Hoddie’s remedies."}
    ]},
    {id:"e4u12-l2-x5", type:"mcq", q:"After a peace agreement, an armed faction that profits from smuggling sets off bombs to derail elections. Its demands rise when the peace looks weak and shrink when fighting becomes costly. In Stedman’s terms it is closest to:", options:[
      {t:"A greedy spoiler, whose demands grow or shrink with costs and opportunities", ok:true, why:"Yes. Greedy spoilers can be managed with a mix of inducements and costs, unlike total spoilers."},
      {t:"A total spoiler, who rejects any deal and seeks total power", why:"This faction’s demands shrink when costs rise, so it would accept some deal; it is not total."},
      {t:"A limited spoiler, with narrow demands such as recognition", why:"Its demands are not fixed and narrow; they expand and contract with costs and opportunities, which is Stedman’s greedy spoiler."},
      {t:"Not a spoiler, because it signed nothing", why:"Spoilers can be inside or outside a process; using violence to undermine peace is the defining feature."}
    ]},
    {id:"e4u12-l2-x6", type:"mcq", q:"Tomás wants to study whether violence clustered near mines in one province over five years. Which dataset fits best?", options:[
      {t:"An event dataset such as the UCDP Georeferenced Event Dataset or ACLED", ok:true, why:"Right. He needs individual events with places and dates, not country-year totals."},
      {t:"The UCDP/PRIO Armed Conflict Dataset", why:"It records conflict-years for whole countries, too coarse to show clustering within a province."},
      {t:"Ethnic Power Relations", why:"EPR records groups’ access to power, not where violence happened."},
      {t:"The UCDP Peace Agreement Dataset", why:"That records agreements, not violent events."}
    ]},
    {id:"e4u12-l2-x7", type:"spot", q:"A policy note on Nepal’s peace process. Tap each claim that **is not supported** by the lesson’s account.", ask:"is not supported", parts:[
      {t:"The war ended with the Comprehensive Peace Agreement of November 2006.", flag:false, why:"Correct date and agreement."},
      " ",
      {t:"UN monitoring of weapons and armies helped both sides trust that the other would not rearm.", flag:false, why:"A fair reading of the commitment problem and UNMIN’s role."},
      " ",
      {t:"The Maoists won the war militarily, which is why the peace held.", flag:true, why:"Not supported. The war ended in a negotiated agreement after a mass movement, not a military victory."},
      " ",
      {t:"Every scholar agrees that Nepal’s transitional justice was a complete success.", flag:true, why:"Not supported. Analysts debate the lessons; slow transitional justice is one of the criticisms."},
      " ",
      {t:"The Maoists entered politics through elections to a Constituent Assembly.", flag:false, why:"Correct: they became the largest party in 2008."}
    ]}
   ],
   apply:{
    intro:"Practise thinking like a civil war researcher. Use free sources only.",
    tasks:[
     {t:"One war, four stages", how:[
       "Choose a civil war that has ended (for example Sierra Leone, Aceh, Mozambique, Sri Lanka, Nepal or Guatemala).",
       "Using UCDP’s free online encyclopedia (ucdp.uu.se) or a reputable overview, note one factor for each stage: onset, duration, termination and any recurrence.",
       "Mark which factor each theory in this lesson would stress."
     ], write:"The war… Onset… Duration… Termination… Recurrence… Which theories fit…"},
     {t:"Proxy check", how:[
       "Pick one variable used in civil war research (oil exports, mountainous terrain, GDP per person, group exclusion).",
       "Write down two different things it might stand for, and one way to tell them apart in a case study."
     ], write:"Variable… Meaning 1… Meaning 2… How a case could tell them apart…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was the “new wars” debate about wars, or about how we describe them?",
       "2. Should outsiders prefer negotiated settlements to military victories?",
       "3. Is “greed versus grievance” a useful framing, or a misleading one?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A four-stage analysis of one civil war, a note on what one variable might measure, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 14 “International Relations”, section 14.4 “Using Levels of Analysis to Understand Conflict”", note:"A gentle refresher on levels of analysis before the civil war literature."},
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Read after this lesson: why violence against civilians inside states became a central international concern."},
    {book:"sipri26", where:"The summary of Chapter 2 “Global trends in armed conflict” and Chapter 4 “Peace processes and multilateral peace operations”", note:"Current trends to set against the research debates."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u12-l3", title:"Peacekeeping and peacebuilding: evidence and critics", minutes:60,
   hook:{q:"UN Security Council resolution 1325 on Women, Peace and Security (2000) was adopted during the Council presidency of which country, which had pushed for it?", options:["Namibia","The United States","France","Japan"], answer:0, reveal:"**Namibia**, which held the presidency in October 2000 and had hosted a meeting in Windhoek that May on women in peace operations. Bangladesh, as a Council member, had also championed the issue, alongside women’s organisations worldwide. The Women, Peace and Security agenda began with strong Global South leadership. This lesson covers how peace operations have changed, what the evidence says about whether they work, the critics of the “liberal peace”, and Women, Peace and Security."},
   goals:[
     "Describe the generations of peace operations and give an example of each",
     "Summarise the quantitative evidence on whether peacekeeping works, and its limits",
     "Explain the liberal peace, Paris’s critique and the defence, and the idea of hybrid peace",
     "Explain the local turn, with Autesserre’s and Mac Ginty’s work",
     "Describe the Women, Peace and Security agenda, its evidence and its critics",
     "Describe the state of UN peacekeeping as of 2026 without predicting its future"
   ],
   learn:[
    {h:"Generations of peace operations", body:[
      {lead:"A blue helmet watching a ceasefire line in Cyprus and a UN administrator running a whole territory are both doing “peacekeeping”. How did one word come to cover so much?"},
      "The primer set out the basics: consent, impartiality and the non-use of force except in self-defence and defence of the mandate, from the first missions of 1948 and 1956 (see {{peacekeeping}}). Scholars often sort later [[peace-operation|peace operations]] into “generations”. The labels are a teaching device, not an official UN scheme, and authors count them differently:",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-soft" x="10" y="10" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="34">1 · Traditional</text><text class="s" x="20" y="54">observe ceasefires, buffer zones</text><text class="s" x="20" y="68">UNTSO 1948; UNFICYP, Cyprus, 1964</text><rect class="d-sage" x="10" y="88" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="112">2 · Multidimensional</text><text class="s" x="20" y="132">elections, police, rights, returns</text><text class="s" x="20" y="146">UNTAG, Namibia, 1989–90</text><rect class="d-gold" x="10" y="166" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="190">3 · Robust and protection</text><text class="s" x="20" y="210">force to protect civilians, mandates</text><text class="s" x="20" y="224">UNAMSIL, Sierra Leone, 1999; MONUSCO</text><rect class="d-rose" x="10" y="244" width="320" height="76" rx="8" stroke-width="2"/><text x="20" y="268">4 · Transitional administration</text><text class="s" x="20" y="288">the UN governs a territory for a time</text><text class="s" x="20" y="304">UNMIK, Kosovo, 1999; UNTAET,</text><text class="s" x="20" y="316">East Timor, 1999–2002</text></svg>', alt:"Four stacked bands. 1, traditional: observe ceasefires and buffer zones, for example UNTSO 1948 and UNFICYP in Cyprus from 1964. 2, multidimensional: elections, police, rights and returns, for example UNTAG in Namibia, 1989–90. 3, robust and protection: force to protect civilians, for example UNAMSIL in Sierra Leone from 1999 and MONUSCO. 4, transitional administration: the UN governs a territory for a time, for example UNMIK in Kosovo from 1999 and UNTAET in East Timor, 1999–2002.", cap:"Later generations didn’t replace earlier ones: traditional missions still run alongside newer types."},
      "[[multidimensional-peacekeeping|Multidimensional peacekeeping]] added civilian tasks such as elections and policing. [[robust-peacekeeping|Robust peacekeeping]] allowed force to defend the mandate, and [[protection-of-civilians|protection of civilians]] (PoC) became a core task. The furthest step was the [[transitional-administration|transitional administration]], in which the UN itself governed. In 2013 the Security Council created a Force Intervention Brigade inside the mission in the Democratic Republic of the Congo (MONUSCO) to carry out offensive operations against armed groups, which critics said blurred the line between peacekeeper and party to the war.",
      "Two words recur in peacebuilding work: [[ddr|DDR]] (disarmament, demobilisation and reintegration of fighters) and [[security-sector-reform|security sector reform]] (rebuilding army, police and courts under civilian control)."
    ]},
    {h:"Peacekeeping since 2000, and as of 2026", body:[
      "After the Brahimi Report (2000), a High-Level Independent Panel on Peace Operations (2015), chaired by José Ramos-Horta of Timor-Leste, urged “primacy of politics”: missions should serve a political strategy, not replace one. Regional and ad hoc operations grew too, notably the African Union’s missions in Somalia since 2007.",
      "Since the early 2020s, UN peacekeeping has been shrinking. Host governments asked missions to leave, as Mali did with MINUSMA, which closed at the end of 2023. In August 2025 the Security Council extended the mission in Lebanon (UNIFIL) “for a final time”, to 31 December 2026, followed by a withdrawal within a year (resolution 2790). In October 2025, facing unpaid contributions, above all from the United States, the UN said it would repatriate about a quarter of its troops and police across its 11 operations.",
      {warn:"Mission numbers and budgets change often. Check the UN peacekeeping website and SIPRI’s annual data, and give the date of any figure."}
    ]},
    {h:"Does peacekeeping work? The evidence", body:[
      "The hardest problem for researchers is [[selection-bias|selection]]: peacekeepers are not sent at random. Virginia Page Fortna’s *Does Peacekeeping Work?* (2008) showed that the UN tends to go to **harder** cases, which makes simple comparisons understate its effect. Once she accounted for that, peace lasted substantially longer where peacekeepers were present.",
      {table:[
        ["Study","Finding"],
        ["Doyle & Sambanis (2000; *Making War and Building Peace*, 2006)","Multidimensional UN missions are associated with more successful peacebuilding"],
        ["Hultman, Kathman & Shannon (2013)","More UN troops and police are associated with fewer civilian deaths"],
        ["Hultman, Kathman & Shannon (2014)","More troops also reduce battlefield deaths during active fighting"],
        ["Walter, Howard & Fortna (2021)","A review: across many studies, peacekeeping reduces violence; the open questions are how, when and why"]
      ]},
      "Lise Morjé Howard (*Power in Peacekeeping*, 2019) asks how unarmed or lightly armed missions influence anyone. She identifies three kinds of power: **persuasion**, **inducement** and limited **coercion**, and argues that missions work best through the first two.",
      {key:"The research consensus is that peacekeeping, on average, reduces violence and helps peace last. Averages hide failures, and the evidence is strongest for keeping a peace, weaker for building a state."},
      "Caveats matter. Abuse by some peacekeepers and harm to host communities are documented (the primer covers Haiti). And critics argue that numbers capture deaths avoided, not whether people experience the peace as just."
    ]},
    {h:"The liberal peace and its critics", body:[
      "The [[liberal-peace|liberal peace]] is the bundle of goals most post-Cold War missions pursued: elections, market economies, human rights and the rule of law. Roland Paris’s *At War’s End* (2004), a study of 14 major peacebuilding operations launched between 1989 and 1999, argued that pushing democracy and markets **too fast** in fragile societies could reignite conflict, as elections did in Angola in 1992. His remedy was “Institutionalization Before Liberalization”: build effective institutions first.",
      "A wider critique followed. Oliver Richmond, Mark Duffield, David Chandler and others argued that the liberal peace was a top-down project of outsiders, sometimes a form of control over the [[global-south|Global South]], and that it ignored local ideas of justice and authority (see {{liberal-peace-debate}}). Roger Mac Ginty described what actually emerges as [[hybrid-peace|hybrid peace]] (*Security Dialogue*, 2010): a mix of international models and local practices, institutions and power.",
      "Paris answered in “Saving Liberal Peacebuilding” (*Review of International Studies*, 2010). The critics, he argued, often attack a caricature and offer no clear alternative; the real choice is between better and worse liberal peacebuilding.",
      {terms:["peace-operation","multidimensional-peacekeeping","robust-peacekeeping","protection-of-civilians","transitional-administration","ddr","security-sector-reform","liberal-peace","hybrid-peace"]}
    ]},
    {h:"The local turn", body:[
      "The [[local-turn|local turn]] asks what peace looks like from villages and neighbourhoods. {{severine-autesserre|Séverine Autesserre}}, in *The Trouble with the Congo* (2010), argued that international actors in the eastern Democratic Republic of the Congo treated violence as a national problem and neglected local conflicts over land and power that kept it going. In *Peaceland* (2014), an ethnography of interveners themselves, she showed how everyday habits (short postings, reliance on outside expertise, distance from locals) undermine missions. *The Frontlines of Peace* (2021) collects examples of local peacebuilding.",
      "Mac Ginty’s *Everyday Peace* (2021) studies the small acts by which people avoid or reduce violence in divided societies: whom they greet, which routes they take, what they choose not to say.",
      {ex:"Bougainville, Papua New Guinea: after a war from 1988 to 1998, talks hosted by New Zealand (1997) were followed by an **unarmed** Truce Monitoring Group led by New Zealand and then a Peace Monitoring Group led by Australia, with Fijian and ni-Vanuatu personnel. The Bougainville Peace Agreement (2001) promised autonomy and a deferred referendum. In 2019 an overwhelming majority, about 98%, voted for independence. The result is not binding on its own: it needs ratification by Papua New Guinea’s national parliament. As of late October 2026 MPs were debating it but had not voted, and the two governments disagreed over the process, including the size of the majority required.", label:"A Pacific case"},
      "Critics of the local turn warn against romanticising “the local”, which also has elites, armed men and exclusions, and against using “local ownership” to shift responsibility and cost away from international actors."
    ]},
    {h:"Women, Peace and Security", body:[
      "[[unscr-1325|Resolution 1325]] (31 October 2000) was the first Security Council resolution to link women’s experiences of conflict to international peace and security. The [[women-peace-and-security|Women, Peace and Security]] (WPS) agenda now rests on ten Security Council resolutions, from 1325 to 2493 (2019), organised around four pillars: **participation**, **protection**, **prevention**, and **relief and recovery**. Resolution 1820 (2008) recognised sexual violence as a tactic of war. More than 100 countries have adopted [[wps-national-action-plan|national action plans]].",
      "The evidence on participation is encouraging but young. Jana Krause, Werner Krause and Piia Bränfors (*International Interactions*, 2018) found that agreements signed by women delegates were associated with more durable peace and better implementation, especially where women signatories had links to women’s civil society groups. In 2014, Miriam Coronel-Ferrer, chief negotiator for the government of the Philippines, became one of the first women to sign a final peace agreement with a rebel group, the Comprehensive Agreement on the Bangsamoro. Yet in 2023, according to the UN Secretary-General, women made up fewer than one in ten negotiators in peace processes.",
      "Critics, including feminist scholars such as Laura Shepherd, raise three concerns: the agenda can cast women mainly as victims or as naturally peaceful (an [[essentialism|essentialist]] view); states can use it to make militaries look progressive without changing what they do; and national action plans often lack money. A parallel Youth, Peace and Security agenda began with resolution 2250 (2015).",
      {terms:["local-turn","everyday-peace","women-peace-and-security","unscr-1325","wps-national-action-plan"]}
    ]}
    ,{h:"Common misconceptions", body:[
      {list:[
        "**“Peacekeepers are soldiers sent to win wars.”** UN peacekeeping rests on consent, impartiality and limited force; enforcement is a different tool, authorised separately.",
        "**“Research shows peacekeeping fails.”** Raw comparisons mislead because missions go to harder cases; careful studies find that peacekeeping, on average, reduces violence.",
        "**“Critics of the liberal peace oppose democracy.”** Most dispute the speed, sequencing and ownership of liberal reforms, not democracy as such.",
        "**“WPS is only about protecting women.”** Participation and prevention are pillars too; the agenda treats women as actors in making peace."
      ]}
    ]}
   ],
   try:[
    {id:"e4u12-l3-x1", type:"sort", q:"Which generation of peace operation does each mission description fit best?", buckets:["Traditional","Multidimensional","Robust / protection","Transitional administration"], items:[
      {t:"Unarmed observers report violations along a ceasefire line agreed by two states.", b:0, why:"Observing a ceasefire with the parties’ consent is traditional peacekeeping."},
      {t:"A mission helps run elections, train police and resettle refugees after a peace deal.", b:1, why:"Civilian tasks added to the military ones: multidimensional."},
      {t:"A mission is authorised to use force to stop armed groups attacking camps for displaced people.", b:2, why:"Force to protect civilians and the mandate: robust peacekeeping."},
      {t:"The UN holds executive and legislative authority over a territory until it can govern itself.", b:3, why:"The UN itself governs: transitional administration, as in Kosovo and East Timor."},
      {t:"A brigade inside a mission is mandated to carry out offensive operations against named armed groups.", b:2, why:"MONUSCO’s Force Intervention Brigade (2013) is the robust end of the spectrum."}
    ]},
    {id:"e4u12-l3-x2", type:"mcq", q:"A student compares places with and without peacekeepers and finds that war resumed **more** often where peacekeepers were present. Why might that **not** show that peacekeeping fails?", options:[
      {t:"Peacekeepers tend to be sent to harder cases, so the comparison mixes the effect of peacekeeping with the difficulty of the case", ok:true, why:"Right. This is Fortna’s selection problem; once she accounted for it, peacekeeping was associated with longer-lasting peace."},
      {t:"Peacekeepers always arrive after the war has already ended", why:"Timing varies; the problem is non-random selection, not timing."},
      {t:"Data on war recurrence don’t exist", why:"They do (for example from UCDP). The issue is how to compare fairly."},
      {t:"Peacekeeping can only be studied qualitatively", why:"Large-N studies exist; they just have to deal with selection."}
    ]},
    {id:"e4u12-l3-x3", type:"number", q:"In an **invented** dataset of 40 ceasefires, 24 had peacekeepers and 16 did not. Peace lasted five years in 15 of the cases with peacekeepers and 6 of the cases without. By how many **percentage points** was the five-year survival rate higher with peacekeepers?", answer:25, tol:0.5, unit:"percentage points", why:"With peacekeepers: 15 ÷ 24 = 62.5%. Without: 6 ÷ 16 = 37.5%. Difference: 62.5 − 37.5 = 25 percentage points. (Before reading this as an effect, ask how the cases were selected.)", wrongs:[
      {v:9, tol:0, why:"That subtracts the raw counts (15 − 6). Different group sizes mean you must compare rates."},
      {v:52.5, tol:0.5, why:"That is the share of all 40 cases that survived (21 ÷ 40), not the difference between the groups."},
      {v:66.7, tol:0.5, why:"That is the relative difference ((62.5 − 37.5) ÷ 37.5), a percentage increase, not percentage points."}
    ], hint2:"Work out each group’s survival rate first, then subtract."},
    {id:"e4u12-l3-x4", type:"match", q:"Match each scholar to the argument.", pairs:[
      ["Roland Paris","Build institutions before rushing elections and markets","*At War’s End* (2004): Institutionalization Before Liberalization."],
      ["Roger Mac Ginty","What emerges after intervention is a hybrid of international and local practices","Hybrid peace (2010) and *Everyday Peace* (2021)."],
      ["Séverine Autesserre","Interveners’ everyday habits and neglect of local conflicts undermine peace","*The Trouble with the Congo* (2010) and *Peaceland* (2014)."],
      ["Lise Morjé Howard","Missions influence parties through persuasion, inducement and limited coercion","*Power in Peacekeeping* (2019)."],
      ["Virginia Page Fortna","Peace lasts longer with peacekeepers, once selection into harder cases is accounted for","*Does Peacekeeping Work?* (2008)."]
    ]},
    {id:"e4u12-l3-x5", type:"mcq", q:"Which statement best represents Paris’s reply to critics of the liberal peace (2010)?", options:[
      {t:"Critics often attack a caricature and offer no clear alternative; the task is to do liberal peacebuilding better", ok:true, why:"Yes. “Saving Liberal Peacebuilding” defended reform, not abandonment."},
      {t:"The liberal peace has failed and should be replaced by local customary rule", why:"That is closer to some critics’ position, which Paris rejected."},
      {t:"Elections should always be held as soon as fighting stops", why:"His 2004 book argued the opposite: institutions before rapid liberalisation."},
      {t:"Peacebuilding should be left to great powers alone", why:"Nothing in his argument says this."}
    ]},
    {id:"e4u12-l3-x6", type:"spot", q:"A briefing on Women, Peace and Security. Tap each claim that **is inaccurate**.", ask:"is inaccurate", parts:[
      {t:"Resolution 1325 was adopted in October 2000.", flag:false, why:"Correct: 31 October 2000."},
      " ",
      {t:"The agenda rests on a single resolution that has never been updated.", flag:true, why:"Inaccurate. There are ten WPS resolutions, from 1325 (2000) to 2493 (2019)."},
      " ",
      {t:"Its four pillars are participation, protection, prevention, and relief and recovery.", flag:false, why:"Correct."},
      " ",
      {t:"Research proves that women are naturally more peaceful than men.", flag:true, why:"Inaccurate, and a view feminist critics reject as essentialist. Research links women’s **participation**, especially with ties to civil society, to more durable agreements; it does not make claims about nature."},
      " ",
      {t:"More than 100 countries have adopted national action plans.", flag:false, why:"Correct as of 2025."}
    ]},
    {id:"e4u12-l3-x7", type:"mcq", q:"A seminar paper praises “local ownership” of a peace process. Which point would a critic of the local turn most likely raise?", options:[
      {t:"“The local” also has elites and exclusions, and local ownership can let outsiders shed responsibility and cost", ok:true, why:"Right. These are the two main warnings against romanticising the local."},
      {t:"Local actors never matter to peace", why:"No one in this debate argues that; the dispute is about how they matter."},
      {t:"Only quantitative studies can study local peace", why:"The local turn relies heavily on ethnography and fieldwork."},
      {t:"Local peace makes international law irrelevant", why:"That is not part of the critique."}
    ]}
   ],
   apply:{
    intro:"Look at real peace operations and peace agreements. All sources are free.",
    tasks:[
     {t:"Read a mandate", how:[
       "Pick one current or recent UN mission and find its latest mandate resolution in the UN Digital Library or on the mission’s website.",
       "List its main tasks and sort them by generation: traditional, multidimensional, robust or protection, administration.",
       "Note one task that looks hard to achieve with the resources described."
     ], write:"Mission and resolution… Tasks by generation… One hard task and why…"},
     {t:"Women in a peace agreement", how:[
       "Use the PA-X Peace Agreements Database (University of Edinburgh, free online) to find one agreement with provisions on women, girls or gender.",
       "Copy one provision and say which WPS pillar it fits."
     ], write:"Agreement and year… The provision… Which pillar… What it leaves out…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the liberal peace worth saving?",
       "2. Can quantitative evidence tell us whether a peace is just?",
       "3. Has the WPS agenda changed what states do, or only what they say?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes sorting one mission’s mandate by generation, one gender provision from a real peace agreement matched to a WPS pillar, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Read after this lesson: how civilian protection and R2P connect."},
    {book:"sipri26", where:"The summary of Chapter 4 “Peace processes and multilateral peace operations”", note:"The latest annual data on peace operations worldwide, UN and non-UN."},
    {book:"eirt", where:"Chapter 8 “Feminism”", note:"Background for the WPS debates."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u12-l4", title:"Weapons and arms control: from the NPT to autonomous weapons", minutes:65,
   hook:{q:"The NPT’s parties review the treaty every five years. By May 2026, how many review conferences in a row had ended without an agreed final document?", options:["None: they always agree","One","Two","Three"], answer:3, reveal:"**Three**: 2015, 2022 and 2026. The 2026 conference in New York, presided over by Vietnam’s ambassador Do Hung Viet, ended on 22 May without a consensus document, after disputes that included the United States and Iran. The treaty remains in force with almost every state in the world as a party, but its parties increasingly disagree about how to carry it out. This lesson explains the nuclear regime, the ban treaty, conventional arms treaties, autonomous weapons talks and counter-terrorism, as of November 2026."},
   goals:[
     "Explain the NPT’s three pillars and the record of its review conferences, including 2026",
     "Describe the TPNW and the humanitarian initiative, with supporters’ and opponents’ arguments",
     "Explain key deterrence concepts: extended deterrence, the stability–instability paradox, the nuclear taboo",
     "Describe the main conventional arms treaties, including 2025 withdrawals",
     "Report the state of autonomous weapons talks as of November 2026 accurately",
     "Outline the UN counter-terrorism architecture and what research says about how terrorist groups end"
   ],
   learn:[
    {h:"The NPT as a regime", body:[
      {lead:"Why would almost every country in the world sign a treaty that lets five of them keep nuclear weapons?"},
      "The primer covered the basics of the [[non-proliferation-treaty|NPT]]: opened for signature in 1968, in force since 1970, extended indefinitely in 1995, recognising five [[nuclear-weapon-state|nuclear-weapon states]] (see {{nuclear-weapons}}). The answer to the puzzle is the bargain behind it:",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-soft" x="10" y="10" width="320" height="40" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">The NPT bargain: three pillars</text><rect class="d-rose" x="10" y="62" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="86">Non-proliferation (Arts I–III)</text><text class="s" x="20" y="106">no transfer or acquisition of weapons;</text><text class="s" x="20" y="120">IAEA safeguards on nuclear material</text><rect class="d-gold" x="10" y="140" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="164">Disarmament (Art. VI)</text><text class="s" x="20" y="184">negotiate in good faith to end the arms</text><text class="s" x="20" y="198">race and towards disarmament</text><rect class="d-sage" x="10" y="218" width="320" height="66" rx="8" stroke-width="2"/><text x="20" y="242">Peaceful uses (Art. IV)</text><text class="s" x="20" y="262">the right to nuclear energy,</text><text class="s" x="20" y="276">with help to share technology</text><text class="s" x="170" y="304" text-anchor="middle">Review every five years (Art. VIII)</text><text class="s" x="170" y="320" text-anchor="middle">Withdrawal: 3 months’ notice (Art. X)</text></svg>', alt:"A heading, the NPT bargain: three pillars, above three bands. Non-proliferation (Articles I to III): no transfer or acquisition of weapons, IAEA safeguards on nuclear material. Disarmament (Article VI): negotiate in good faith to end the arms race and towards disarmament. Peaceful uses (Article IV): the right to nuclear energy, with help to share technology. A note below: review every five years (Article VIII); withdrawal on three months’ notice (Article X).", cap:"The NPT bargain. Disputes usually arise when one group says another isn’t keeping its side."},
      "Non-nuclear-weapon states accept International Atomic Energy Agency (IAEA) **safeguards** (inspections), and many have accepted the stricter Additional Protocol (1997). Four states with nuclear weapons are outside: India, Israel (which neither confirms nor denies its arsenal) and Pakistan never joined, and North Korea announced its withdrawal in 2003, a status some states parties dispute."
    ]},
    {h:"Review conferences: fragile consensus", body:[
      "Each [[npt-review-conference|review conference]] tries to agree, by consensus, a final document assessing the treaty and setting goals:",
      {table:[
        ["Year","Outcome"],
        ["1995","Indefinite extension, with a resolution calling for a Middle East zone free of weapons of mass destruction"],
        ["2000","Final document with “13 practical steps” towards disarmament"],
        ["2005","No agreed final document"],
        ["2010","Action plan of 64 actions"],
        ["2015","No agreed document; a dispute over the Middle East zone"],
        ["2022","No agreed document; Russia objected to language on the Zaporizhzhia nuclear plant in Ukraine"],
        ["2026","No agreed document (22 May); the main dispute was between the United States and Iran over language on Iran, and Russia again objected to text on Zaporizhzhia"]
      ]},
      "Delegates and analysts read the 2026 result differently. Some stressed that states still reaffirmed the treaty’s importance; others warned of an erosion of trust as New START, the last treaty limiting US and Russian strategic forces, expired in February 2026 without a successor. The next review conference is planned for 2031.",
      {terms:["nuclear-weapon-state","npt-review-conference"]}
    ]},
    {h:"The ban treaty and the humanitarian initiative", body:[
      "Frustrated by slow disarmament, a group of states and NGOs reframed nuclear weapons around their **humanitarian consequences**. The [[humanitarian-initiative|humanitarian initiative]] held conferences in Oslo (2013), Nayarit, Mexico (2014) and Vienna (2014). It led to the [[tpnw|Treaty on the Prohibition of Nuclear Weapons]] (TPNW), adopted on 7 July 2017 by 122 votes and in force since 22 January 2021. It bans developing, possessing, using or threatening to use nuclear weapons. The International Campaign to Abolish Nuclear Weapons (ICAN) won the 2017 Nobel Peace Prize; Nihon Hidankyo, the Japanese organisation of atomic bomb survivors (*hibakusha*), won it in 2024.",
      {table:[
        ["","Supporters argue","Opponents argue"],
        ["Who","More than 70 states parties by 2026, many from Latin America, Africa, Southeast Asia and the Pacific","All nine nuclear-armed states and most of their allies, including NATO members, Japan, South Korea and Australia"],
        ["Claim","It fulfils Article VI of the NPT and stigmatises the weapons","It ignores the security environment, lacks verification and may weaken the NPT"]
      ]},
      "Japan’s government says it shares the goal of a world without nuclear weapons but that joining is not realistic while it relies on US [[extended-deterrence|extended deterrence]]; it has not attended TPNW meetings as an observer, which survivors’ groups have criticised. As of November 2026, the TPNW’s first review conference is scheduled for 30 November to 4 December 2026 in New York."
    ]},
    {h:"Deterrence debates", body:[
      "Unit 1 introduced Brodie and Schelling, and Unit 2 the Waltz–Sagan debate. Graduate seminars add four concepts:",
      {list:[
        "**The nuclear revolution.** Robert Jervis (*The Meaning of the Nuclear Revolution*, 1989) argued that mutual vulnerability makes victory in a great-power war meaningless, which changes how states compete.",
        "**[[extended-deterrence|Extended deterrence]].** A nuclear power threatens retaliation on behalf of allies, the “nuclear umbrella” over Japan, South Korea, Australia and NATO. It needs **assurance** as well: allies must believe the promise (Unit 4 described the fears of abandonment and entrapment).",
        "**The [[stability-instability-paradox|stability–instability paradox]].** Glenn Snyder (1965) argued that stability at the nuclear level can make lower-level violence more likely, because each side expects the other not to escalate. Scholars often apply it to India and Pakistan, for example the Kargil conflict of 1999.",
        "**The [[nuclear-taboo|nuclear taboo]].** Nina Tannenwald (*International Organization*, 1999; book 2007) argued that non-use since 1945 rests partly on a growing norm against use, not only on deterrence."
      ]},
      "Sceptics question how much credit deterrence deserves. Benoît Pelopidas (2017) argued that some crises, such as Cuba in 1962, were survived partly by **luck**, which people underrate afterwards. Supporters of deterrence answer that great powers have not fought each other directly since 1945. Seminars weigh these claims; neither side can run the counterfactual.",
      {terms:["humanitarian-initiative","tpnw","extended-deterrence","stability-instability-paradox","nuclear-taboo"]}
    ]},
    {h:"Conventional weapons: mines, cluster munitions and the arms trade", body:[
      "Most people killed in wars are killed by conventional weapons. Four treaties matter most:",
      {table:[
        ["Treaty","What it does","Note"],
        ["Convention on Certain Conventional Weapons (CCW, 1980)","Framework with protocols on specific weapons, such as blinding lasers","Forum for the autonomous weapons talks"],
        ["Mine Ban Convention (Ottawa, 1997)","Bans anti-personnel landmines","Estonia, Latvia and Lithuania left in December 2025, and Finland and Poland in early 2026, citing the threat from Russia. Ukraine said in 2025 it would suspend the treaty; the other parties rejected this, as the treaty has no suspension clause"],
        ["Convention on Cluster Munitions (2008)","Bans cluster munitions","Lithuania withdrew in 2025"],
        ["[[arms-trade-treaty|Arms Trade Treaty]] (ATT; adopted 2013, in force 2014)","Bans transfers that would be used for genocide or war crimes, and requires exporters to assess risks","More than 110 states parties; the US signed in 2013 but said in 2019 it would not ratify; China joined in 2020"]
      ]},
      "For [[small-arms-light-weapons|small arms and light weapons]], the main instrument is a politically binding UN Programme of Action (2001). The debates mirror the nuclear one: **humanitarian disarmament** campaigners stress civilian harm, while some governments argue that the weapons they keep are needed for defence."
    ]},
    {h:"Autonomous weapons, as of November 2026", body:[
      "[[lethal-autonomous-weapons|Lethal autonomous weapons systems]] (LAWS) are weapons that, once activated, select and engage targets without further human intervention. Talks have been held under the CCW since 2014, and a Group of Governmental Experts (GGE) since 2017, which agreed eleven guiding principles in 2019. In 2023 the UN Secretary-General and the International Committee of the Red Cross jointly called for a legally binding instrument by 2026.",
      "On 5 September 2026 the GGE adopted by consensus a report on elements of a possible instrument, “without prejudging its nature”. It uses a **two-tier approach**: prohibit some systems and regulate the rest. It speaks of “context-appropriate human judgement and control”, wording chosen instead of the campaigners’ phrase [[meaningful-human-control|meaningful human control]]. The report goes to the CCW’s Seventh Review Conference in Geneva, 16–20 November 2026.",
      "Positions differ. The ICRC, the Stop Killer Robots campaign and many states want a binding treaty. Some major military powers have argued that existing [[international-humanitarian-law|international humanitarian law]] is sufficient or have preferred non-binding measures. What the Review Conference will decide was not known at the time of writing."
    ]},
    {h:"Terrorism and counter-terrorism, in brief", body:[
      "The primer explained why [[terrorism]] lacks an agreed definition (see {{terrorism-ir}}). [[counter-terrorism|Counter-terrorism]] at the UN has three layers: Security Council sanctions on named groups and individuals (the regime begun by resolution 1267 in 1999), binding duties on all states after 9/11 (resolution 1373, 2001), and the General Assembly’s Global Counter-Terrorism Strategy (2006), whose four pillars include respect for human rights. From 2015 the UN added [[preventing-violent-extremism|preventing violent extremism]], which addresses conditions that drive recruitment.",
      "Research gives policymakers uncomfortable findings. A RAND study by Seth Jones and Martin Libicki (*How Terrorist Groups End*, 2008), covering 648 groups from 1968 to 2006, found that most ended by joining politics or through policing and intelligence; military force ended relatively few. Audrey Kurth Cronin (*How Terrorism Ends*, 2009) identified several paths to an end, from decapitation to negotiation to the group’s own failure. UN human rights experts have repeatedly warned that broad counter-terrorism laws can be used against journalists and peaceful opponents.",
      {terms:["arms-trade-treaty","small-arms-light-weapons","lethal-autonomous-weapons","meaningful-human-control","counter-terrorism","preventing-violent-extremism"]}
    ]}
    ,{h:"Common misconceptions", body:[
      {list:[
        "**“The NPT bans nuclear weapons.”** It bans their spread to more states and commits the five nuclear-weapon states to negotiate on disarmament; the TPNW is the treaty that bans them outright, for its parties.",
        "**“A failed review conference ends the treaty.”** The NPT stays in force; a review conference only tries to agree a final document.",
        "**“Arms control means disarmament.”** Arms control limits, verifies or stabilises weapons between rivals; disarmament seeks to reduce or eliminate them.",
        "**“Autonomous weapons are already banned.”** As of November 2026 no treaty bans them; talks continue under the CCW."
      ]}
    ]}
   ],
   try:[
    {id:"e4u12-l4-x1", type:"sort", q:"Which NPT pillar does each issue mainly concern?", buckets:["Non-proliferation","Disarmament","Peaceful uses"], items:[
      {t:"IAEA inspectors verify that a reactor’s fuel is not diverted to weapons.", b:0, why:"Safeguards serve non-proliferation (Article III)."},
      {t:"Non-nuclear states complain that the five nuclear-weapon states are not reducing their arsenals.", b:1, why:"Article VI: the disarmament side of the bargain."},
      {t:"A developing country seeks help to build its first nuclear power plant.", b:2, why:"Article IV: the right to peaceful nuclear energy."},
      {t:"States debate how to respond to a party that announces its withdrawal.", b:0, why:"Withdrawal to build weapons is the central non-proliferation fear (Article X sets the rules)."},
      {t:"A conference calls for a test ban and cuts in deployed warheads.", b:1, why:"Steps towards disarmament."}
    ]},
    {id:"e4u12-l4-x2", type:"order", q:"Put these NPT milestones in chronological order.", items:[
      {t:"The treaty opens for signature.", why:"1968."},
      {t:"The treaty enters into force.", why:"1970."},
      {t:"The parties extend the treaty indefinitely.", why:"1995."},
      {t:"A review conference agrees an action plan of 64 actions.", why:"2010."},
      {t:"A review conference fails over language on the Zaporizhzhia plant.", why:"2022."},
      {t:"A review conference presided over by Vietnam ends without a final document.", why:"May 2026."}
    ]},
    {id:"e4u12-l4-x3", type:"match", q:"Match each deterrence concept to its meaning.", pairs:[
      ["Extended deterrence","A nuclear power threatens retaliation on behalf of its allies","The “nuclear umbrella”."],
      ["Stability–instability paradox","Nuclear stability can make lower-level conflict more likely","Snyder (1965); often applied to South Asia."],
      ["Nuclear taboo","A norm against use helps explain non-use since 1945","Tannenwald (1999, 2007)."],
      ["Nuclear revolution","Mutual vulnerability makes great-power victory meaningless","Jervis (1989)."],
      ["Assurance","Convincing allies that a protector’s promise is credible","The other half of extended deterrence."]
    ]},
    {id:"e4u12-l4-x4", type:"mcq", q:"Which statement about the TPNW is accurate as of November 2026?", options:[
      {t:"It has been in force since 2021, but no nuclear-armed state has joined it", ok:true, why:"Right. It entered into force on 22 January 2021; all nine nuclear-armed states and most of their allies remain outside."},
      {t:"It replaced the NPT in 2021", why:"The NPT remains in force; TPNW supporters say the two are complementary, opponents say the ban may weaken the NPT."},
      {t:"Japan joined it in 2024 after Nihon Hidankyo won the Nobel Prize", why:"Japan has not joined; its government cites reliance on US extended deterrence."},
      {t:"It was adopted unanimously by the UN General Assembly", why:"It was adopted at a UN negotiating conference by 122 votes in 2017; many states did not take part."}
    ]},
    {id:"e4u12-l4-x5", type:"spot", q:"A news summary of the autonomous weapons talks. Tap each claim that **is inaccurate**.", ask:"is inaccurate", parts:[
      {t:"In September 2026 the CCW’s expert group adopted a report by consensus.", flag:false, why:"Correct: on 5 September 2026."},
      " ",
      {t:"The report is a binding treaty that bans all autonomous weapons.", flag:true, why:"Inaccurate. It sets out elements of a possible instrument “without prejudging its nature”, with a two-tier approach of prohibitions and regulations."},
      " ",
      {t:"It goes to the CCW Review Conference in Geneva in November 2026.", flag:false, why:"Correct: 16–20 November 2026."},
      " ",
      {t:"The report adopts the phrase “meaningful human control”.", flag:true, why:"Inaccurate. It uses “context-appropriate human judgement and control” instead."},
      " ",
      {t:"States differ on whether a binding instrument is needed.", flag:false, why:"Correct, and a fair neutral summary."}
    ]},
    {id:"e4u12-l4-x6", type:"mcq", q:"Several states left the Mine Ban Convention in 2025–26. Which description is the most accurate and neutral?", options:[
      {t:"Estonia, Latvia, Lithuania, Finland and Poland withdrew, citing the threat from Russia; supporters of the ban criticised the decisions", ok:true, why:"Right: it names the states, attributes their reasons and notes the criticism, without taking a side."},
      {t:"The treaty collapsed and no longer exists", why:"Inaccurate. About 160 states remain parties."},
      {t:"These states were forced out by the other parties", why:"Inaccurate. Withdrawal was their own decision, under the treaty’s six-month rule."},
      {t:"The withdrawals prove that humanitarian disarmament has failed", why:"An opinion presented as fact. A neutral summary attributes views instead."}
    ]},
    {id:"e4u12-l4-x7", type:"mcq", q:"According to the RAND study *How Terrorist Groups End* (2008), how did most of the groups it studied end?", options:[
      {t:"By joining the political process, or through policing and intelligence", ok:true, why:"Right. Military force ended relatively few, a finding that challenged the “war on terror” framing."},
      {t:"Mostly by military defeat", why:"That was the least common path among the main ones identified."},
      {t:"Mostly by winning their goals", why:"Few groups achieved victory."},
      {t:"They never end", why:"The study shows that groups end in several ways."}
    ]}
   ],
   apply:{
    intro:"Work with primary documents on arms control. Everything is free online.",
    tasks:[
     {t:"Read the treaty itself", how:[
       "Open the text of the NPT (UNODA’s treaty database or the IAEA’s INFCIRC/140) and read Articles I, II, IV, VI and X.",
       "Write one sentence summarising each, in your own words.",
       "Note which article the 2026 review conference disputes involved."
     ], write:"Art. I… Art. II… Art. IV… Art. VI… Art. X… Which articles the 2026 disputes touched…"},
     {t:"Two positions on the ban treaty", how:[
       "Find one statement by a TPNW state party and one by a government that has not joined (for example in UN General Assembly First Committee records).",
       "List each side’s two strongest arguments without judging them."
     ], write:"State party’s arguments… Non-party’s arguments… What each side would say to the other…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Does the TPNW strengthen or weaken the NPT?",
       "2. How much credit does deterrence deserve for non-use since 1945?",
       "3. Is “human control” a workable legal standard for autonomous weapons?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Plain-language summaries of five NPT articles, two attributed positions on the ban treaty, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sipri26", where:"Chapter 8 “World nuclear forces” (free download) and the summary of Chapter 10 “Nuclear disarmament, arms control, non-proliferation and security”", note:"The standard figures on nuclear arsenals, and the year’s arms control developments."},
    {book:"sipri26", where:"The summaries of Chapter 13 “Conventional arms control and the regulation of inhumane weapons” and Chapter 14 “Artificial intelligence and international peace and security”", note:"For the conventional weapons and autonomous weapons sections."},
    {book:"eir", where:"Chapter 14 “Transnational Terrorism” (Katherine Brown)", note:"Read after this lesson for how terrorist groups organise and are countered."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u12-l5", title:"Asia-Pacific security architecture", minutes:65,
   hook:{q:"In 1954 the United States and seven other states created a NATO-like collective defence organisation for Southeast Asia, SEATO. What became of it?", options:["It still exists and has grown","It was dissolved in 1977","It merged into ASEAN in 1967","It became the Quad"], answer:1, reveal:"**It was dissolved in 1977.** Only two of its members, Thailand and the Philippines, were in Southeast Asia, and it never acquired NATO’s integrated command. Asia’s security order grew instead from bilateral alliances and, later, ASEAN-centred forums. Scholars have long asked why there is no “Asian NATO”. This lesson maps the architecture and then describes three flashpoints neutrally, as of November 2026."},
   goals:[
     "Describe the layers of Asia-Pacific security architecture and why the metaphor is debated",
     "Explain the hub-and-spoke alliance system and the main explanations for it",
     "Describe the ASEAN-centred forums (ARF, EAS, ADMM-Plus) and the debate about their effectiveness",
     "Describe the Quad and AUKUS and the main positions on them",
     "Describe the Korean Peninsula, cross-Strait relations and the South China Sea neutrally, attributing each position, as of November 2026",
     "Analyse the architecture through several theoretical lenses"
   ],
   learn:[
    {h:"An architecture with many layers", body:[
      {lead:"Europe’s security order has a few big buildings: NATO, the EU, the OSCE. Asia’s looks more like a crowded neighbourhood of houses, bridges and footpaths."},
      "Scholars and diplomats call the whole arrangement the regional **security architecture**. The metaphor is debated: some say an architecture needs a plan, while Asia’s grew piece by piece. Even the region’s name is political: “Asia-Pacific” and “Indo-Pacific” (see [[free-and-open-indo-pacific]]) draw different maps and are favoured by different governments.",
      {fig:'<svg viewBox="0 0 340 300"><rect class="d-rose" x="10" y="10" width="320" height="62" rx="8" stroke-width="2"/><text x="20" y="34">Bilateral alliances</text><text class="s" x="20" y="54">US hub and spokes (1951–53); China–DPRK (1961);</text><text class="s" x="20" y="68">Russia–DPRK (2024)</text><rect class="d-gold" x="10" y="82" width="320" height="62" rx="8" stroke-width="2"/><text x="20" y="106">Minilaterals</text><text class="s" x="20" y="126">Quad; AUKUS; US–Japan–South Korea;</text><text class="s" x="20" y="140">US–Japan–Philippines</text><rect class="d-sage" x="10" y="154" width="320" height="62" rx="8" stroke-width="2"/><text x="20" y="178">ASEAN-centred forums</text><text class="s" x="20" y="198">ARF (1994); East Asia Summit (2005);</text><text class="s" x="20" y="212">ADMM-Plus (2010)</text><rect class="d-lup" x="10" y="226" width="320" height="62" rx="8" stroke-width="2"/><text x="20" y="250">Track 1.5 and 2 dialogues</text><text class="s" x="20" y="270">Shangri-La Dialogue (2002); think-tank</text><text class="s" x="20" y="284">networks</text></svg>', alt:"Four stacked layers. Bilateral alliances: the US hub and spokes from 1951 to 1953, China and North Korea from 1961, Russia and North Korea from 2024. Minilaterals: the Quad, AUKUS, US–Japan–South Korea, US–Japan–Philippines. ASEAN-centred forums: the ARF from 1994, the East Asia Summit from 2005, ADMM-Plus from 2010. Track 1.5 and Track 2 dialogues: the Shangri-La Dialogue from 2002 and think-tank networks.", cap:"The layers overlap: many states sit in several at once."}
    ]},
    {h:"Hub and spoke: alliances", body:[
      "After 1945 the United States built separate treaties with Asian partners, the [[hub-and-spoke|hub-and-spoke]] system: the Philippines (August 1951), Australia and New Zealand (ANZUS, September 1951), Japan (September 1951, revised 1960; see {{us-japan-alliance}}) and South Korea (1953), plus Thailand through the Manila Pact (1954). This was part of the [[san-francisco-system|San Francisco system]] Unit 1 described.",
      "Why bilateral, not a NATO? Christopher Hemmer and Peter Katzenstein (“Why Is There No NATO in Asia?”, *International Organization*, 2002) pointed to identity: US policymakers saw European allies as fellow members of one community and Asian ones as different. Victor Cha (“Powerplay”, *International Security*, 2009–10; book 2016) argued that separate treaties gave Washington **control**, allowing it to restrain allies, such as South Korea’s and Taiwan’s leaders, from dragging it into wars.",
      "Other alignments exist. China and North Korea signed a treaty of friendship in 1961. Russia and North Korea signed a treaty with a mutual assistance clause in June 2024. Since the 2010s, US allies have also built ties with each other: a “latticework” of trilateral meetings and defence agreements, such as Japan’s reciprocal access agreements with Australia and the Philippines. Many Southeast Asian states practise [[strategic-hedging|hedging]] instead of choosing sides."
    ]},
    {h:"ASEAN-centred multilateralism", body:[
      "ASEAN has convened the region’s inclusive forums, placing itself at the centre, an idea called [[asean-centrality|ASEAN centrality]] (Unit 9 discusses it):",
      {table:[
        ["Forum","Since","Members and purpose"],
        ["[[asean-regional-forum|ASEAN Regional Forum]] (ARF)","1994","27 participants; confidence-building, then preventive diplomacy"],
        ["[[east-asia-summit|East Asia Summit]] (EAS)","2005","ASEAN plus eight partners (the US and Russia joined in 2011); a leaders’ forum"],
        ["[[admm-plus|ADMM-Plus]]","2010","ASEAN defence ministers plus the same eight; practical cooperation such as disaster relief and maritime security"]
      ]},
      "Do they work? David Martin Jones and Michael L. R. Smith (“Making Process, Not Progress”, *International Security*, 2007) argued that ASEAN-led forums produce talk, not results. Defenders reply that their aim is socialisation, not enforcement. Alastair Iain Johnston (*Social States*, 2008) found that participation in the ARF and similar bodies changed how Chinese officials thought about multilateral security in the 1990s. Amitav Acharya, writing on the [[asean-way|ASEAN way]], argued that norms of consultation have helped keep the peace among ASEAN members themselves."
    ]},
    {h:"Minilaterals: the Quad and AUKUS", body:[
      "Unit 13 discusses [[minilateralism]], cooperation in small groups of states, in general ({{clubs-and-minilateralism}}). Two groupings dominate security debates:",
      {list:[
        "The [[quad|Quad]] (Australia, India, Japan, the United States) began as a core group coordinating relief after the 2004 Indian Ocean tsunami, met in 2007, lapsed, was revived in 2017 and held its first leaders’ summit in 2021. Its stated agenda covers health, technology, infrastructure and maritime awareness; it is not an alliance.",
        "[[aukus|AUKUS]] (Australia, the United Kingdom, the United States), announced on 15 September 2021, aims under its first pillar to give Australia nuclear-powered (not nuclear-armed) submarines, starting with US Virginia-class boats from the early 2030s, and under its second to develop advanced technologies. A Pentagon review completed in December 2025 said it had “identified opportunities to put AUKUS on the strongest possible footing”."
      ]},
      "Members describe both as supporting a stable, rules-based region. China’s government has criticised them as exclusive blocs reflecting a “Cold War mentality”, and called AUKUS a proliferation risk. In 2021 the governments of Indonesia and Malaysia expressed concern about an arms race. Supporters answer that the submarines will carry no nuclear weapons and that arrangements with the IAEA will cover the fuel.",
      {terms:["hub-and-spoke","asean-regional-forum","east-asia-summit","admm-plus","quad","aukus"]}
    ]},
    {h:"The Korean Peninsula, as of November 2026", body:[
      "The Korean War ended in the [[korean-armistice|Armistice Agreement]] of 27 July 1953, signed by the commanders of the UN Command, the Korean People’s Army and the Chinese People’s Volunteers. South Korea did not sign. There is still no peace treaty.",
      "North Korea conducted six nuclear tests between 2006 and 2017 and is subject to UN Security Council sanctions. The [[six-party-talks|Six-Party Talks]] (2003–2009) and the US–North Korea summits in Singapore (2018) and Hanoi (2019) produced statements but no lasting agreement. In 2024 a Russian veto ended the mandate of the UN panel of experts that monitored sanctions.",
      {table:[
        ["Government","Stated position (as of November 2026)"],
        ["North Korea","Says its nuclear weapons deter US hostility and are not negotiable; since late 2023 describes the two Koreas as two separate, hostile states, and has rejected Seoul’s offers of talks"],
        ["South Korea","President Lee Jae-myung (in office since June 2025) seeks to reduce military tensions and restore dialogue, and in October 2026 urged the North to resume talks, while pledging to strengthen defences"],
        ["United States, Japan","State that their goal is the complete denuclearisation of North Korea; Japan also stresses the abduction issue"],
        ["China","Calls for dialogue and stability, opposes war and chaos on the peninsula, and has argued that sanctions alone cannot solve the issue"]
      ]}
    ]},
    {h:"Cross-Strait relations, as of November 2026", body:[
      "In 1949 the government of the Republic of China (ROC) retreated to Taiwan after losing the civil war to the Communist Party, which founded the People’s Republic of China (PRC). In 1971 UN General Assembly resolution 2758 recognised the PRC’s representatives as “the only legitimate representatives of China” at the UN. The resolution’s meaning for Taiwan is itself disputed: the PRC says it settled the question; Taiwan’s government and some others say it did not address Taiwan’s status.",
      {table:[
        ["Actor","Stated position"],
        ["PRC","Taiwan is part of China; the [[one-china-principle|one-China principle]]; seeks peaceful reunification but has not renounced force (Anti-Secession Law, 2005)"],
        ["Taiwan (ROC)","President Lai Ching-te (since May 2024) says the ROC is sovereign and not subordinate to the PRC, and that Taiwan’s future must be decided by its people; parties differ, for example over the “1992 Consensus”"],
        ["United States","A [[one-china-policy|one China policy]]: recognises the PRC, “acknowledges” its position, keeps unofficial ties with Taiwan under the Taiwan Relations Act (1979), and opposes unilateral changes to the status quo"],
        ["Japan","In the 1972 Joint Communiqué, “fully understands and respects” the PRC’s position; keeps non-governmental working relations with Taiwan"]
      ]},
      "As of mid-2026, 12 states recognised the ROC diplomatically, according to Reuters. Note the vocabulary: “reunification”, “unification”, “status quo” and “independence” each carry a position; attribute them."
    ]},
    {h:"The South China Sea, as of November 2026", body:[
      "Six governments make overlapping claims to islands, reefs and waters: the PRC and Taiwan (both on the basis of a dashed line first drawn in the 1940s, often called the [[nine-dash-line|nine-dash line]]), Vietnam, the Philippines, Malaysia and Brunei. Indonesia does not claim any features but objects to the line where it overlaps its exclusive economic zone.",
      "In 2016 an arbitral tribunal in a case brought by the Philippines ruled that China had no legal basis to claim historic rights to resources within the line. The Philippines’ government calls the award final and binding; China’s government did not take part, and rejects it as null and void (Unit 10 covers the law of the sea and the award: {{south-china-sea-arbitration}}). Much of the friction since has been [[grey-zone|grey-zone]] activity: coast guard and maritime militia vessels, water cannon and blockades below the threshold of armed conflict, each side accusing the other.",
      "ASEAN and China signed a non-binding Declaration on the Conduct of Parties in 2002 and have negotiated a binding [[code-of-conduct-scs|code of conduct]] for years. The Philippines, chairing ASEAN in 2026, aimed to conclude it that year. As of early November 2026 it had not been concluded: ASEAN leaders had renewed calls for self-restraint in May, and officials hoped to finalise the code at the ASEAN summit in Manila on 16–18 November. What that summit would produce was not known at the time of writing.",
      {tip:"For any of these three issues, write: “X’s government states that…”, give the date, and use both or all names on first mention."},
      {terms:["korean-armistice","six-party-talks","one-china-policy","one-china-principle","code-of-conduct-scs","grey-zone"]}
    ]}
    ,{h:"Reading the architecture through theory", body:[
      "The same facts support different readings, and a seminar answer should weigh them. A [[realism|realist]] sees balancing: US allies drawing closer as China’s power grows, and smaller states hedging. A [[liberalism-ir|liberal]] sees institutions such as the ARF and ADMM-Plus reducing uncertainty and building habits of cooperation. A [[constructivism|constructivist]] sees norms of consultation (the ASEAN way) and identities shaping who counts as a partner or a threat.",
      "Critical approaches ask whose security the architecture serves. Pacific Island leaders, for example, have called climate change the single greatest threat to their peoples (the Boe Declaration of 2018, which Unit 2 analysed), a priority largely absent from the alliance agenda.",
      {key:"Describe the facts with dates and attributions first; then argue which lens explains them best, and what evidence would change your mind."}
    ]}
   ],
   try:[
    {id:"e4u12-l5-x1", type:"sort", q:"Which layer of the architecture does each arrangement belong to?", buckets:["Bilateral alliance","Minilateral","ASEAN-centred forum"], items:[
      {t:"The US–Philippines Mutual Defense Treaty (1951)", b:0, why:"A treaty between two states: a spoke of the hub-and-spoke system."},
      {t:"AUKUS", b:1, why:"Three states cooperating on submarines and technology: a minilateral."},
      {t:"The ASEAN Regional Forum", b:2, why:"An inclusive forum of 27 participants convened by ASEAN."},
      {t:"The Quad", b:1, why:"Four states, no treaty commitment: a minilateral grouping."},
      {t:"ADMM-Plus", b:2, why:"ASEAN defence ministers with eight partners."},
      {t:"The 1961 treaty of friendship between China and North Korea", b:0, why:"A bilateral treaty outside the US system."}
    ]},
    {id:"e4u12-l5-x2", type:"match", q:"Match each explanation of the hub-and-spoke system to its author.", pairs:[
      ["US policymakers saw Asian partners as outside their own community, so no NATO-style alliance formed","Hemmer & Katzenstein (2002)","An identity explanation."],
      ["Separate treaties let Washington restrain allies from dragging it into wars","Victor Cha","The “powerplay” argument."],
      ["ASEAN-led forums produce process rather than progress","Jones & Smith (2007)","A sceptical view of ASEAN forums."],
      ["Participation in multilateral forums socialised Chinese officials","Alastair Iain Johnston (2008)","*Social States*."]
    ]},
    {id:"e4u12-l5-x3", type:"mcq", q:"Which sentence describes AUKUS most accurately and neutrally?", options:[
      {t:"AUKUS aims to give Australia nuclear-powered submarines; its members say it supports regional stability, while China’s government calls it a proliferation risk", ok:true, why:"Right. Accurate (nuclear-powered, not nuclear-armed) and both positions are attributed."},
      {t:"AUKUS gives Australia nuclear weapons", why:"Inaccurate. The submarines are to be nuclear-powered, not nuclear-armed."},
      {t:"AUKUS is a dangerous alliance that threatens Asia", why:"An opinion stated as fact, not attributed to anyone."},
      {t:"AUKUS is a formal military alliance with a mutual defence clause", why:"It is a technology and capability partnership, not a mutual defence treaty."}
    ]},
    {id:"e4u12-l5-x4", type:"spot", q:"A draft paragraph on the Korean Peninsula. Tap each sentence that **breaks the neutrality rules** or **is inaccurate**.", ask:"breaks neutrality or is inaccurate", parts:[
      {t:"The Korean War ended in an armistice in July 1953, and no peace treaty has been signed.", flag:false, why:"Accurate and neutral."},
      " ",
      {t:"South Korea signed the armistice along with the UN Command.", flag:true, why:"Inaccurate. South Korea did not sign; the signatories were the commanders of the UN Command, the Korean People’s Army and the Chinese People’s Volunteers."},
      " ",
      {t:"North Korea’s government says its nuclear weapons deter US hostility.", flag:false, why:"An attributed position: fine."},
      " ",
      {t:"Talks are obviously pointless, so sanctions are the only answer.", flag:true, why:"Opinion presented as fact. A neutral writer attributes positions, e.g. “some governments argue…, while China has argued that sanctions alone cannot solve the issue”."},
      " ",
      {t:"North Korea conducted six nuclear tests between 2006 and 2017.", flag:false, why:"Accurate."}
    ]},
    {id:"e4u12-l5-x5", type:"mcq", q:"Ana writes: “The UN decided in 1971 that Taiwan is part of the People’s Republic of China.” How should she revise it?", options:[
      {t:"Say that resolution 2758 recognised the PRC’s representatives as China’s only legitimate representatives at the UN, and that its meaning for Taiwan’s status is disputed, giving each side’s view", ok:true, why:"Right. That reports the text and attributes the competing interpretations."},
      {t:"Say that the UN decided in 1971 that Taiwan is independent", why:"Equally one-sided, and not what the resolution says."},
      {t:"Leave it, since it is the official UN position", why:"The interpretation is contested; stating one reading as fact breaks neutrality."},
      {t:"Delete all mention of the resolution", why:"It is central to the history; the fix is accuracy and attribution, not omission."}
    ]},
    {id:"e4u12-l5-x6", type:"order", q:"Put these events in chronological order.", items:[
      {t:"The Korean War armistice is signed.", why:"27 July 1953."},
      {t:"SEATO is dissolved.", why:"1977."},
      {t:"The ASEAN Regional Forum is founded.", why:"1994."},
      {t:"ASEAN and China sign the Declaration on the Conduct of Parties in the South China Sea.", why:"2002."},
      {t:"An arbitral tribunal rules in the Philippines’ case on the South China Sea.", why:"July 2016."},
      {t:"AUKUS is announced.", why:"September 2021."}
    ]},
    {id:"e4u12-l5-x7", type:"sort", q:"Which theoretical lens is each reading of the region’s security using?", buckets:["Realist","Liberal","Constructivist"], items:[
      {t:"US allies are linking up with each other to balance a rising power.", b:0, why:"Balancing against power: realism."},
      {t:"ASEAN forums reduce uncertainty by sharing information and building habits of cooperation.", b:1, why:"Institutions lowering transaction costs and uncertainty: liberal institutionalism."},
      {t:"Norms of consultation and consensus have shaped how ASEAN members see each other.", b:2, why:"Norms and identity: constructivism and the ASEAN way."},
      {t:"Separate alliances gave the stronger power control over weaker partners.", b:0, why:"Cha’s powerplay is about power and control, a realist-leaning account."},
      {t:"No “Asian NATO” formed because US leaders did not see Asian partners as part of their community.", b:2, why:"Hemmer and Katzenstein’s explanation rests on identity."}
    ]}
   ],
   apply:{
    intro:"Read primary sources from several sides. Everything is free online.",
    tasks:[
     {t:"One issue, three governments", how:[
       "Choose the Korean Peninsula, cross-Strait relations or the South China Sea.",
       "Find one official statement from each of three governments involved, issued in the last year (foreign ministry websites publish them in English).",
       "Summarise each position in one neutral sentence beginning “X’s government states that…”, with the date."
     ], write:"Issue… Government 1, date, position… Government 2… Government 3… Words each side uses that the others avoid…"},
     {t:"Map your own architecture", how:[
       "Pick one Asia-Pacific state (for example Indonesia, Vietnam, India, New Zealand or Fiji).",
       "List which layers of the architecture it belongs to: alliances, minilaterals, ASEAN-centred forums, dialogues.",
       "Write two sentences on whether it is balancing, bandwagoning or hedging, and what evidence would test your view."
     ], write:"State… Its alliances… Minilaterals… Forums… Balancing, bandwagoning or hedging?… Evidence…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is ASEAN centrality a source of stability or a polite fiction?",
       "2. Do minilaterals such as the Quad and AUKUS complement or undermine ASEAN-led forums?",
       "3. Why is there still no “Asian NATO”, and does the answer from 2002 still hold?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Three dated, attributed summaries of positions on one regional issue, a map of one state’s place in the architecture, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"Read after this lesson: the US role in global security that underpins the hub-and-spoke system."},
    {book:"dbb", where:"Chapter 2, section 2 “Asia and Oceania”, and Chapter 3, section 1 “Efforts for Peace and Stability of Japan and the International Community”", note:"The Japanese government’s own account of its regional policy: read it as one government’s position, alongside other governments’ statements."},
    {book:"sipri26", where:"The summary of Chapter 3 “Regional security and conflict dynamics”", note:"Annual overview of regional security, including East and Southeast Asia."}
   ]
  }
  ],
  checkpoint:["e4u12-q02","e4u12-q06","e4u12-q09","e4u12-q12","e4u12-q16","e4u12-q20","e4u12-q24","e4u12-q28","e4u12-q31","e4u12-q36","e4u12-q40","e4u12-q44"],
  codex:[
   {id:"critical-security-studies", title:"Critical security studies", aka:["CSS","critical approaches to security","widening and deepening"], tags:["security","theory"],
    summary:"The family of approaches that question the traditional focus on states and military threats: Copenhagen, Welsh, Paris, feminist and postcolonial.",
    levels:{
     starter:[
      "Traditional security studies asks how states protect themselves from military attack. **Critical security studies** asks two further questions: whose security, and who decides what counts as a threat?",
      "Think of a city where the police say crime is falling, while people in one neighbourhood still feel unsafe walking home. Both views are about security; they just start from different people.",
      "The label became popular with a 1997 book edited by Keith Krause and Michael Williams. It covers several schools that disagree with each other: the Copenhagen School (security as a speech act), the Welsh School (security as emancipation), the Paris School (security as everyday practice), feminist security studies and postcolonial approaches.",
      {key:"Critical security studies widens what counts as a threat and deepens whose security counts."}
     ],
     builder:[
      "**Copenhagen.** Buzan, Wæver and de Wilde (1998) study securitisation: how an actor presents something as an existential threat and an audience accepts emergency measures (see {{securitization-theory}}).",
      "**Welsh (Aberystwyth).** Ken Booth’s “Security and Emancipation” (*Review of International Studies*, 1991) and Richard Wyn Jones’s *Security, Strategy, and Critical Theory* (1999) draw on Frankfurt School Critical Theory. Security means freeing people from constraints; the scholar should side with the insecure.",
      "**Paris.** Didier Bigo and others look at practices: databases, border checks, risk profiling. Security is what professionals do, not only what leaders say.",
      "**Feminist.** Tickner, Enloe and Hansen show how gender shapes who is protected and who is silenced, and how the state itself can be a source of insecurity.",
      "**Postcolonial.** Mohammed Ayoob (*The Third World Security Predicament*, 1995) argued that for many postcolonial states the main threats are internal, a result of late and incomplete state-building.",
      "**Using it.** In a paper, name the school you use; “critical security studies” alone is too vague."
     ],
     pro:[
      "**The traditionalist reply.** Stephen Walt (1991) warned that widening destroys coherence. Some critical scholars accept part of the point: Copenhagen scholars often recommend **desecuritisation**, while the Welsh School wants to redefine security altogether. That disagreement inside the family is a good seminar topic.",
      "**Normative divides.** The Welsh School is explicitly emancipatory; the Copenhagen School claims analytical distance; the Paris School is sociological. Critics ask whether emancipation can be defined without imposing one group’s values.",
      "**Eurocentrism.** Several critics have argued that critical security studies grew from European debates and can underplay racial and colonial hierarchies; Ayoob’s subaltern realism and later postcolonial work push back.",
      "**Asia.** Scholars of “non-traditional security”, such as Mely Caballero-Anthony, have used securitisation and human security to study disease, migration and disasters in Southeast Asia, often in partnership with governments, which some critics see as a loss of critical distance.",
      {tip:"Pair a school with a method: Copenhagen with discourse analysis, Paris with fieldwork on practices, feminist approaches with interviews and life histories."}
     ]
    },
    related:["securitization-theory","security-studies","human-security","feminism-ir","postcolonialism-ir","regional-security-complex-theory"],
    read:[{book:"eirt", where:"Chapter 14 “Securitisation Theory” and Chapter 8 “Feminism”"}],
    sources:[{t:"UCDP press release, 9 June 2026 (interstate conflicts at a record level)", url:"https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"}],
    checked:"2026-11"},

   {id:"regional-security-complex-theory", title:"Regional security complex theory", aka:["RSCT","regional security complexes","Buzan and Wæver"], tags:["security","regions","theory"],
    summary:"Buzan and Wæver’s theory that security interdependence clusters in regions, each with its own patterns of amity and enmity.",
    levels:{
     starter:[
      "Most threats travel more easily over short distances than long ones. Neighbours worry about neighbours.",
      "From that simple idea, Barry Buzan and Ole Wæver built **regional security complex theory** in *Regions and Powers* (2003). A **regional security complex** is a group of states whose security problems are so tangled together that you can’t understand one without the others.",
      "Examples they gave include South Asia (centred on India and Pakistan), the Middle East and East Asia. Big powers can reach into a region from outside, and some states sit at the edges between complexes as **insulators**.",
      {key:"To understand a crisis, look first at the region’s own patterns of friendship and rivalry, then at the outside powers."}
     ],
     builder:[
      "**Structure.** Each complex has a boundary, an anarchic structure (two or more states), a distribution of power (unipolar, bipolar, multipolar within the region) and patterns of **amity and enmity**.",
      "**Penetration and overlay.** Outside great powers **penetrate** a complex when they ally with local states. In extreme cases they **overlay** it, suppressing local dynamics, as the Cold War did in Europe in Buzan and Wæver’s account.",
      "**Insulators.** States between complexes, such as Afghanistan (between South Asia, the Middle East and Central Asia) or Myanmar (between South and Southeast Asia) in their account, absorb or separate regional dynamics.",
      "**Asia.** Buzan and Wæver argued that Northeast and Southeast Asia were merging into one East Asian complex as China’s power grew, and that South Asia remained distinct.",
      "**In a paper.** Use RSCT to justify why you study a region, and to separate regional causes from global ones."
     ],
     pro:[
      "**Links to securitisation.** RSCT is built on the Copenhagen School: complexes are defined by patterns of securitisation, not only by geography. This makes it compatible with both realist and constructivist readings.",
      "**Critiques.** Regional boundaries can look arbitrary; transnational threats (pandemics, climate, terrorism networks) do not respect them; and the theory says less about non-state actors. Some argue the Indo-Pacific concept has redrawn the map in ways RSCT did not foresee.",
      "**Extensions.** Scholars have applied RSCT to the Gulf, the South Caucasus, Central Asia and the Pacific Islands, and debated whether the Arctic is becoming a complex.",
      {tip:"A good RSCT analysis draws a map: core states, the main rivalry, outside powers and insulators, with dates."}
     ]
    },
    related:["critical-security-studies","securitization-theory","asia-pacific-security-architecture","regional-organizations"],
    sources:[{t:"SIPRI Yearbook 2026: chapter list, including “Regional security and conflict dynamics”", url:"https://www.sipri.org/yearbook/2026"}],
    checked:"2026-11"},

   {id:"civil-war-onset", title:"Civil war onset: greed, grievance and feasibility", aka:["causes of civil war","greed versus grievance","resource curse and conflict"], tags:["conflict","civil war","research"],
    summary:"The research debate on why civil wars break out, from Collier and Hoeffler’s greed to Fearon and Laitin’s weak states and the return of group grievance.",
    levels:{
     starter:[
      "Why do some countries fall into civil war while others with similar problems don’t? Since the late 1990s, researchers have compared many countries over decades to find out.",
      "Three answers dominate. **Greed or opportunity**: rebellion happens where it can pay for itself, for example through diamonds or oil. **State weakness**: rebels succeed where governments are poor and distant. **Grievance**: groups shut out of power or much poorer than others are more likely to fight.",
      "Most researchers now combine them: grievances give reasons to fight, while weak states and money make fighting possible.",
      {key:"The same number can mean different things: an oil-rich country may have rich rebels, a weak state, or both."}
     ],
     builder:[
      "**Collier and Hoeffler (2004).** “Greed and Grievance in Civil War” found that opportunity measures (primary commodity exports, low male schooling, slow growth) predicted onset better than grievance measures such as inequality.",
      "**Fearon and Laitin (2003).** “Ethnicity, Insurgency, and Civil War” found that poverty (a sign of weak state capacity), large population, rough terrain and political instability predicted insurgency; ethnic diversity did not.",
      "**Resources.** Ross (2004) found oil linked to onset and lootable resources (gems, drugs) to duration. Fearon (2005) argued that commodity dependence signals a weak, rent-living state, not only rebel loot.",
      "**Feasibility (2009).** Collier, Hoeffler and Rohner argued that where rebellion is feasible, it occurs, whatever the motive.",
      "**Grievance returns.** Ethnic Power Relations data showed that political exclusion of groups predicts conflict (Cederman, Gleditsch and Buhaug, 2013; see {{ethnic-conflict}})."
     ],
     pro:[
      "**Measurement.** The debate is largely about proxies. GDP per person can stand for state capacity, recruits’ opportunity cost or development in general. Strong designs use within-country variation, event data or natural experiments to separate mechanisms.",
      "**Politics of framing.** Critics such as David Keen argued that “greed” cast rebels as criminals and served governments; others noted that state actors also profit from war economies.",
      "**Climate and conflict.** A further debate asks whether climate shocks raise conflict risk. Studies differ by method and region; most researchers see climate as interacting with political factors, not as a direct cause.",
      "**Using the literature.** Specify the stage (onset, not duration), the dataset and the threshold (UCDP’s 25 or 1,000 battle-related deaths), and say which mechanism your variable is meant to capture.",
      {warn:"Avoid “ancient hatreds”. Ethnic diversity alone predicts civil war poorly."}
     ]
    },
    related:["causes-of-war","ethnic-conflict","civil-war-termination","new-wars-debate","ir-datasets","war-and-conflict"],
    sources:[{t:"UCDP press release, 9 June 2026: conflict figures for 2025", url:"https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"}],
    checked:"2026-11"},

   {id:"new-wars-debate", title:"The “new wars” debate", aka:["new wars","Kaldor and Kalyvas","old and new wars"], tags:["conflict","civil war","theory"],
    summary:"Kaldor’s claim that post-Cold War wars were a new type, and the critics who argued that the novelty lay mainly in how wars were described.",
    levels:{
     starter:[
      "In *New and Old Wars* (1999), {{mary-kaldor|Mary Kaldor}} argued that many wars after the Cold War were a new kind of war.",
      "In her picture, “old wars” were fought by national armies over territory or ideology, with battles between soldiers. “New wars” are fought by militias and criminal networks in the name of identity, mostly against civilians, and paid for by looting, smuggling and outside money.",
      "Critics, above all Stathis Kalyvas (2001), replied that older civil wars had many of the same features, and that what changed was how outsiders described them.",
      {key:"The debate asks: did war change, or did our way of seeing it change?"}
     ],
     builder:[
      "**Kaldor’s four dimensions.** Goals (identity politics), methods (displacement and terror against civilians), actors (networks of state and non-state groups) and finance (a globalised war economy). Her main case was Bosnia and Herzegovina.",
      "**Kalyvas’s critique.** “‘New’ and ‘Old’ Civil Wars: A Valid Distinction?” (*World Politics*, 2001) argued that looting, atrocities and identity appeals were common in earlier civil wars, and that Cold War labels had hidden them behind ideology.",
      "**Kalyvas’s theory.** *The Logic of Violence in Civil War* (2006) argued that violence is often **selective**, used to control territory and deter defection, based on local information.",
      "**Policy.** Kaldor linked new wars to a **human security** response: protecting civilians and building legitimate authority rather than defeating an enemy army."
     ],
     pro:[
      "**Data disputes.** Claims that civilians had become the vast majority of war dead in new wars rested on weak data; later research questioned them.",
      "**Kaldor’s reply.** “In Defence of New Wars” (*Stability*, 2013) argued that “new wars” is a policy lens that highlights features neglected by state-centred thinking, not a claim that every feature is unprecedented.",
      "**Legacy.** The debate pushed researchers to study war economies, armed group behaviour and violence against civilians with micro-level data, and influenced work on hybrid warfare and organised crime.",
      {tip:"In a seminar, use “new wars” as an ideal type and test which features fit your case."}
     ]
    },
    related:["mary-kaldor","civil-war-onset","war-and-conflict","human-security"],
    sources:[{t:"RUSI profile of Mary Kaldor", url:"https://www.rusi.org/people/kaldor"}],
    checked:"2026-11"},

   {id:"civil-war-termination", title:"How civil wars end: commitment problems, spoilers and recurrence", aka:["civil war termination","credible commitment","peace agreement durability"], tags:["conflict","peace","civil war"],
    summary:"Why civil wars are hard to settle, what makes agreements last, and why many wars recur.",
    levels:{
     starter:[
      "Ending a civil war is harder than ending a war between states, because the two sides must live in one country afterwards.",
      "Usually the rebels are asked to hand in their weapons. But once they disarm, what stops the government from breaking its promises? This is the **commitment problem**.",
      "Researchers found that peace deals work better when an outside party guarantees them, and when former enemies share power. They also found that groups called **spoilers** may use violence to wreck a peace process.",
      {key:"Peace agreements fail less often from bad wording than from fear that the other side will cheat."}
     ],
     builder:[
      "**Walter.** “The Critical Barrier to Civil War Settlement” (1997) and *Committing to Peace* (2002) showed that third-party security guarantees greatly raise the chance that settlements are implemented.",
      "**Power-sharing.** Hartzell and Hoddie (2003) found that agreements sharing power in several dimensions (political, military, territorial, economic) lasted longer.",
      "**Spoilers.** Stedman (1997) distinguished limited, greedy and total spoilers, each requiring a different strategy: inducement, socialisation or coercion.",
      "**Victory or settlement?** Toft (2010) argued that military victories, especially by rebels, recur less often; critics stress the human cost and repression victories can bring.",
      "**Recurrence.** Collier and colleagues called it the conflict trap (2003); Walter (2004) linked recurrence to poor living conditions and political exclusion."
     ],
     pro:[
      "**Ripeness and mediation.** Zartman’s mutually hurting stalemate (in the primer) explains when talks start; commitment theory explains why they fail after signing. Combine both.",
      "**Peacekeeping as a guarantee.** Fortna and others argue that peacekeepers solve commitment problems by monitoring and raising the costs of cheating.",
      "**Data.** The UCDP Peace Agreement Dataset and Conflict Termination Dataset, and the PA-X database of peace agreements, let researchers compare provisions and outcomes.",
      "**Case.** Nepal’s 2006 Comprehensive Peace Agreement combined cantonment of fighters, UN monitoring (UNMIN, 2007–2011) and political inclusion through elections.",
      {tip:"When you evaluate an agreement, ask what each side fears the other will do after signing, and what in the agreement answers that fear."}
     ]
    },
    related:["barbara-walter","civil-war-onset","peace-operations","peacebuilding","causes-of-war"],
    sources:[{t:"Walter, Howard & Fortna, “The Extraordinary Relationship between Peacekeeping and Peace” (BJPolS, 2021): abstract", url:"https://ideas.repec.org/a/cup/bjposi/v51y2021i4p1705-1722_20.html"}],
    checked:"2026-11"},

   {id:"peace-operations", title:"Peace operations: generations and evidence", aka:["peacekeeping in depth","does peacekeeping work","UN peace operations"], tags:["peace","UN","peacekeeping"],
    summary:"How peace operations evolved from ceasefire observation to protection and administration, what the evidence says about their effects, and where UN peacekeeping stood in 2026.",
    levels:{
     starter:[
      "UN peacekeeping began in 1948 with unarmed observers. Since then it has grown into many kinds of mission, which scholars often sort into **generations**: traditional (watching ceasefires), multidimensional (adding elections, police and rights), robust (using force to protect civilians) and transitional administration (the UN governing a territory for a time).",
      "Does it work? Careful studies say yes, on average: wars are less likely to restart and fewer civilians die where peacekeepers are present. But averages hide serious failures and harms.",
      {key:"The evidence is strongest for keeping a peace; it is weaker for building a state."}
     ],
     builder:[
      "**Principles.** Consent, impartiality, and non-use of force except in self-defence and defence of the mandate (UN peacekeeping website).",
      "**Evidence.** Fortna (2008) showed that the UN goes to harder cases and that peace lasts longer with peacekeepers once this is accounted for. Doyle and Sambanis (2000, 2006) linked multidimensional missions to peacebuilding success. Hultman, Kathman and Shannon (2013, 2014) linked larger troop numbers to fewer civilian and battle deaths. Walter, Howard and Fortna (2021) reviewed the literature.",
      "**How missions work.** Howard (2019) identifies persuasion, inducement and limited coercion.",
      "**Reform reports.** Brahimi (2000); the High-Level Independent Panel on Peace Operations (2015), chaired by José Ramos-Horta, stressing the primacy of politics."
     ],
     pro:[
      "**As of 2026.** Host-state consent has weakened in several places (MINUSMA in Mali closed at the end of 2023). In August 2025 resolution 2790 extended UNIFIL in Lebanon for a final time to 31 December 2026, with withdrawal within a year. In October 2025 the UN announced it would repatriate about a quarter of troops and police across 11 operations because of unpaid contributions.",
      "**Robust mandates.** MONUSCO’s Force Intervention Brigade (2013) raised the question of whether peacekeepers who fight remain impartial and protected.",
      "**Regional and ad hoc missions.** The AU’s missions in Somalia, and coalitions authorised by the Security Council, are a growing share of operations; SIPRI’s Yearbook tracks them.",
      "**Harms.** Sexual exploitation and abuse, and harms such as the cholera outbreak in Haiti, shape local legitimacy and are part of any evaluation.",
      {warn:"Mission counts and budgets change often; always date figures."}
     ]
    },
    related:["peacekeeping","peacebuilding","liberal-peace-debate","severine-autesserre","civil-war-termination","women-peace-and-security"],
    read:[{book:"sipri26", where:"The summary of Chapter 4 “Peace processes and multilateral peace operations”"}],
    sources:[{t:"UN Peacekeeping: Principles of peacekeeping", url:"https://peacekeeping.un.org/en/principles-of-peacekeeping"},{t:"UN Peacekeeping: Security Council extends UNIFIL’s mandate, resolution 2790 (2025)", url:"https://peacekeeping.un.org/en/security-council-extends-unifils-mandate-resolution-2790-2025"},{t:"The New Arab (from AFP), “UN to slash a quarter of peacekeepers globally over lack of funds”, 8 October 2025", url:"https://www.newarab.com/news/un-slash-quarter-peacekeepers-globally-over-lack-funds"}],
    checked:"2026-11"},

   {id:"liberal-peace-debate", title:"The liberal peace and its critics", aka:["liberal peacebuilding","hybrid peace","local turn"], tags:["peace","peacebuilding","theory"],
    summary:"The debate over exporting democracy and markets to war-torn societies: Paris’s critique and defence, the radical critics, hybrid peace and the local turn.",
    levels:{
     starter:[
      "After the Cold War, most international peacebuilding aimed at the same package: elections, a market economy, human rights and the rule of law. Scholars call this the **liberal peace**.",
      "Critics noticed that rushed elections sometimes reignited war, and that outsiders often ignored local ideas of justice and authority.",
      "Some critics want to reform the liberal peace; others want to replace it with approaches built from local practice. In between, many scholars describe what actually happens as a **hybrid** of the two.",
      {key:"The debate is less about whether peace should be democratic than about how fast, by whom, and on whose terms."}
     ],
     builder:[
      "**Paris (2004).** *At War’s End*, on 14 major operations from 1989 to 1999, argued for Institutionalization Before Liberalization; Angola’s 1992 elections are a classic warning.",
      "**Radical critics.** Oliver Richmond, Mark Duffield and David Chandler saw the liberal peace as top-down governance by outsiders, at times a form of control over the Global South.",
      "**Hybrid peace.** Roger Mac Ginty (2010) described the mix of international and local practices that emerges after intervention.",
      "**Local turn.** {{severine-autesserre|Séverine Autesserre}} and Mac Ginty’s *Everyday Peace* (2021) focus on local conflicts and everyday practices.",
      "**Defence.** Paris’s “Saving Liberal Peacebuilding” (2010) argued that critics attack a caricature and offer no clear alternative."
     ],
     pro:[
      "**Asian perspectives.** Some scholars discuss Chinese approaches to post-conflict reconstruction, which put development and state capacity before political liberalisation; others question whether this amounts to an alternative model.",
      "**Local ownership.** Widely endorsed in policy, but critics warn it can romanticise local elites or shift costs away from donors.",
      "**Evidence and normativity.** Quantitative studies measure durability (years without war); critics ask about justice, inclusion and who defines peace. A strong paper says which outcome it evaluates.",
      {tip:"Map any peacebuilding case on two axes: speed of liberalisation, and degree of local ownership."}
     ]
    },
    related:["peacebuilding","peace-operations","severine-autesserre","liberalism-ir","postcolonialism-ir"],
    sources:[{t:"Barnard College profile of Séverine Autesserre", url:"https://barnard.edu/profiles/severine-autesserre"}],
    checked:"2026-11"},

   {id:"women-peace-and-security", title:"Women, Peace and Security", aka:["WPS","UNSCR 1325","resolution 1325"], tags:["peace","gender","UN"],
    summary:"The Security Council agenda launched by resolution 1325 (2000): ten resolutions, four pillars, national action plans, the evidence on participation and the critiques.",
    levels:{
     starter:[
      "Wars affect women and men differently, and women have long been left out of peace talks. In October 2000 the UN Security Council adopted **resolution 1325**, the first to link women’s experiences of conflict to international peace and security.",
      "The **Women, Peace and Security** (WPS) agenda now rests on ten Security Council resolutions and four pillars: participation, protection, prevention, and relief and recovery.",
      "Namibia, which held the Council presidency, and Bangladesh were key champions, alongside women’s organisations worldwide.",
      {key:"WPS treats women as participants in making peace, not only as victims of war."}
     ],
     builder:[
      "**Resolutions.** 1325 (2000), 1820 (2008: sexual violence as a tactic of war), 1888 and 1889 (2009), 1960 (2010), 2106 and 2122 (2013), 2242 (2015), 2467 and 2493 (2019).",
      "**Implementation.** More than 100 countries have national action plans. In 2023, according to the UN Secretary-General, women were fewer than one in ten negotiators in peace processes.",
      "**Evidence.** Krause, Krause and Bränfors (2018) found that agreements signed by women delegates were associated with more durable peace and better implementation, especially where signatories had ties to women’s civil society.",
      "**Cases.** Liberia’s women’s peace movement (2003); the Philippines’ 2014 Comprehensive Agreement on the Bangsamoro, signed for the government by chief negotiator Miriam Coronel-Ferrer."
     ],
     pro:[
      "**Critiques.** Feminist scholars such as Laura Shepherd argue that WPS can cast women as victims or as naturally peaceful (essentialism), that states can use it to make militaries look progressive, and that action plans often lack funding and accountability.",
      "**Global South.** Some scholars stress that WPS was shaped by African and Asian diplomats and activists, against the view that it is a Western export; others note that implementation is often donor-driven.",
      "**Related agendas.** Youth, Peace and Security began with resolution 2250 (2015).",
      {tip:"When you study a peace process, check the PA-X database for gender provisions, and ask who was in the room as well as what the text says."}
     ]
    },
    related:["peacebuilding","peace-operations","feminism-ir","gender-stratification"],
    sources:[{t:"WILPF UK, “10 things you need to know about Women, Peace and Security” (2025)", url:"https://wilpf.org.uk/2025/10/13/10-things-you-need-to-know-about-women-peace-and-security/"}],
    checked:"2026-11"},

   {id:"npt-regime", title:"The NPT regime and its review conferences", aka:["nuclear non-proliferation regime","NPT review conference","Non-Proliferation Treaty in depth"], tags:["nuclear","arms control","treaties"],
    summary:"The NPT’s three-pillar bargain, IAEA safeguards, the states outside it, and the record of review conferences up to the failed 2026 conference.",
    levels:{
     starter:[
      "The Treaty on the Non-Proliferation of Nuclear Weapons (NPT) is a bargain. States without nuclear weapons promise not to get them; the five recognised nuclear-weapon states promise to negotiate towards disarmament; and everyone keeps the right to peaceful nuclear energy.",
      "Every five years the parties meet in a **review conference** to check how the treaty is working and to agree, by consensus, on next steps.",
      "In recent years they have often failed to agree. The 2015, 2022 and 2026 conferences all ended without a final document.",
      {key:"The NPT survives because almost every state still prefers it to a world without it, even when they disagree about how it is kept."}
     ],
     builder:[
      "**Pillars.** Non-proliferation (Articles I–III, with IAEA safeguards), disarmament (Article VI) and peaceful uses (Article IV). Article X allows withdrawal on three months’ notice; Article VIII provides for review conferences.",
      "**Outside the treaty.** India, Israel and Pakistan never joined; North Korea announced its withdrawal in 2003.",
      "**Record.** 1995: indefinite extension and a Middle East resolution. 2000: 13 practical steps. 2005: no document. 2010: a 64-point action plan. 2015: no document (Middle East zone). 2022: no document (Russia objected to Zaporizhzhia language). 2026: no document.",
      "**2026.** Held in New York, 28 April to 22 May 2026, presided over by Do Hung Viet of Vietnam. According to the Arms Control Association, the main obstacle was a dispute between the United States and Iran over the draft’s language on Iran, while Russia objected to references to the Zaporizhzhia plant; the next conference is planned for 2031, with a preparatory meeting in 2028."
     ],
     pro:[
      "**Safeguards.** Comprehensive safeguards agreements, and the stricter Additional Protocol (1997) developed after Iraq’s secret programme was discovered in 1991.",
      "**Disarmament gap.** Non-nuclear states argue that Article VI is unfulfilled; nuclear-weapon states point to large reductions since the Cold War and to the security environment. The expiry of New START in February 2026 sharpened the dispute.",
      "**Regime theory.** The NPT is a textbook international regime: principles, norms, rules and procedures around which expectations converge. Scholars debate whether it works through hegemonic enforcement, institutional benefits or a non-proliferation norm.",
      {tip:"Quote articles by number and check the official text (IAEA document INFCIRC/140)."}
     ]
    },
    related:["nuclear-weapons","tpnw","nuclear-deterrence-debate","conventional-arms-control"],
    read:[{book:"sipri26", where:"The summary of Chapter 10 “Nuclear disarmament, arms control, non-proliferation and security”"}],
    sources:[{t:"Arms Control Association, “2026 NPT Review Conference Stymied by Disputes”", url:"https://www.armscontrol.org/index%2Ephp/node/15343"}],
    checked:"2026-11"},

   {id:"tpnw", title:"The Treaty on the Prohibition of Nuclear Weapons", aka:["TPNW","nuclear ban treaty","humanitarian initiative"], tags:["nuclear","arms control","treaties"],
    summary:"The 2017 treaty that bans nuclear weapons outright, the humanitarian movement behind it, and the arguments of its supporters and opponents.",
    levels:{
     starter:[
      "The **Treaty on the Prohibition of Nuclear Weapons** (TPNW) bans developing, testing, possessing, using or threatening to use nuclear weapons. It was adopted on 7 July 2017 by 122 votes at a UN negotiating conference and entered into force on 22 January 2021.",
      "None of the nine nuclear-armed states has joined, nor have most of their allies. Supporters see it as a moral and legal milestone; opponents see it as unrealistic and possibly harmful to the NPT.",
      "The International Campaign to Abolish Nuclear Weapons (ICAN) won the 2017 Nobel Peace Prize for its work on the treaty.",
      {key:"The TPNW changes the law for its parties and tries to change the norm for everyone else."}
     ],
     builder:[
      "**Origins.** The humanitarian initiative’s conferences in Oslo (2013), Nayarit (2014) and Vienna (2014) shifted debate from strategy to the consequences of use.",
      "**Meetings.** States parties met in Vienna (2022) and New York (2023 and 2025). The first review conference is scheduled for 30 November to 4 December 2026 in New York (UNODA).",
      "**Supporters.** Many states in Latin America, Africa, Southeast Asia and the Pacific, often with direct experience of testing or nuclear-weapon-free zones. They argue it implements Article VI of the NPT.",
      "**Opponents.** Nuclear-armed states and allies such as NATO members, Japan, South Korea and Australia argue it ignores security realities, lacks strong verification and may divide the NPT community."
     ],
     pro:[
      "**Japan’s position.** The government says it shares the goal but relies on US extended deterrence and seeks to bridge nuclear and non-nuclear states; it has not attended meetings as an observer. Survivors’ groups, including Nihon Hidankyo (Nobel Peace Prize 2024), have urged it to join.",
      "**Norm theory.** Supporters invoke norm dynamics: stigmatisation preceded the bans on chemical weapons and landmines. Sceptics argue that weapons central to great-power security are different.",
      "**Positive obligations.** Articles 6 and 7 require help for victims of use and testing and environmental remediation, a feature valued by Pacific and Central Asian states affected by testing.",
      {warn:"Party numbers change; check the UN treaty database. More than 70 states were parties by 2026."}
     ]
    },
    related:["npt-regime","nuclear-weapons","nuclear-deterrence-debate","norm-dynamics"],
    sources:[{t:"UNODA, Treaty on the Prohibition of Nuclear Weapons: overview", url:"https://www.unoda.org/en/our-work/weapons-mass-destruction/nuclear-weapons/treaty-prohibition-nuclear-weapons"},{t:"NTI, Treaty on the Prohibition of Nuclear Weapons", url:"https://www.nti.org/education-center/treaties-and-regimes/treaty-on-the-prohibition-of-nuclear-weapons/"}],
    checked:"2026-11"},

   {id:"nuclear-deterrence-debate", title:"Nuclear deterrence debates", aka:["extended deterrence","stability–instability paradox","nuclear taboo"], tags:["nuclear","security","theory"],
    summary:"Seminar-level concepts in nuclear strategy and the debate about how much deterrence explains.",
    levels:{
     starter:[
      "Nuclear **deterrence** means preventing an attack by threatening unacceptable retaliation. The primer explained its basics and mutually assured destruction.",
      "Graduate seminars go further. Can one country’s nuclear weapons protect its allies? Can nuclear stability make smaller wars more likely? Is it deterrence, or a moral taboo, that has kept nuclear weapons unused since 1945?",
      {key:"No one can rerun history without nuclear weapons, so every claim about what deterrence achieved is an argument about a counterfactual."}
     ],
     builder:[
      "**Nuclear revolution.** Jervis (1989): mutual vulnerability makes great-power victory meaningless.",
      "**Extended deterrence and assurance.** The “nuclear umbrella” over allies; allies must also be assured, which ties to fears of abandonment and entrapment (Snyder, 1984).",
      "**Stability–instability paradox.** Glenn Snyder (1965): stable mutual deterrence can make limited conflict more likely; often applied to India and Pakistan.",
      "**Nuclear taboo.** Tannenwald (1999; 2007): non-use rests partly on a normative prohibition, strengthened over time.",
      "**Luck.** Pelopidas (2017): crises such as Cuba in 1962 were survived partly by luck, which observers underrate."
     ],
     pro:[
      "**Proliferation optimism and pessimism.** The Waltz–Sagan debate (1995) frames whether spread is stabilising (rational deterrence) or dangerous (organisational failure).",
      "**Arms control erosion.** With the INF Treaty gone (2019) and New START expired (February 2026), scholars debate whether deterrence can stay stable without negotiated limits and transparency.",
      "**Asia.** Debates on extended deterrence in Japan and South Korea, China’s growing arsenal (SIPRI estimates), and North Korea’s programme shape regional strategy; present each government’s stated view.",
      {tip:"State what your argument would predict if deterrence did not work, and look for evidence that could tell the stories apart."}
     ]
    },
    related:["nuclear-weapons","npt-regime","tpnw","security-dilemma","us-japan-alliance"],
    read:[{book:"sipri26", where:"Chapter 8 “World nuclear forces” (free download)"}],
    sources:[{t:"SIPRI Yearbook 2026: chapters and free downloads", url:"https://www.sipri.org/yearbook/2026"}],
    checked:"2026-11"},

   {id:"conventional-arms-control", title:"Conventional arms control: mines, cluster munitions and the arms trade", aka:["Arms Trade Treaty","Mine Ban Convention","humanitarian disarmament"], tags:["arms control","treaties","humanitarian"],
    summary:"The main treaties on conventional weapons, the humanitarian disarmament movement, and the 2025–26 withdrawals from the landmine ban.",
    levels:{
     starter:[
      "Most people killed in today’s wars are killed by conventional weapons: guns, shells, mines and bombs. Several treaties try to limit the worst of them.",
      "The **Mine Ban Convention** (Ottawa, 1997) bans anti-personnel landmines; the **Convention on Cluster Munitions** (2008) bans cluster bombs; the **Arms Trade Treaty** (2013) sets rules for selling weapons across borders.",
      "Campaigners call this **humanitarian disarmament**: putting civilian harm at the centre. Some states argue that they need certain weapons for defence, and in 2025–26 several left the landmine ban.",
      {key:"Conventional arms treaties are built on the same tension as nuclear ones: humanitarian harm versus perceived security needs."}
     ],
     builder:[
      "**CCW (1980).** A framework convention with protocols on specific weapons (for example, blinding lasers, 1995); the forum for the autonomous weapons talks.",
      "**Mine Ban Convention.** Promoted by Canada and a coalition of NGOs (the International Campaign to Ban Landmines, Nobel Peace Prize 1997). Estonia, Latvia and Lithuania withdrew with effect from December 2025, and Finland and Poland in early 2026, citing the threat from Russia (Arms Control Association). About 160 states remain parties. Ukraine announced in 2025 that it would “suspend the operation” of the treaty; states parties replied that the treaty allows no suspension.",
      "**Cluster munitions.** The 2008 convention entered into force in 2010; Lithuania withdrew in 2025.",
      "**ATT.** Adopted in 2013, in force from 24 December 2014. It prohibits transfers that would breach embargoes or be used for genocide, crimes against humanity or certain war crimes, and requires risk assessments. The US signed but announced in 2019 that it would not ratify; China joined in 2020."
     ],
     pro:[
      "**Small arms.** The UN Programme of Action (2001) is politically, not legally, binding; small arms cause a large share of deaths in conflicts and crime.",
      "**Effectiveness.** Supporters point to stigmatisation: even some non-parties have largely stopped using anti-personnel mines. Sceptics note that major producers and users remain outside some treaties.",
      "**Withdrawals.** The 2025–26 departures were the first from the Mine Ban Convention; campaigners and the ICRC criticised them, while the withdrawing governments said their security situation required it.",
      {tip:"For any treaty, separate adoption, entry into force, and each state’s ratification or withdrawal date."}
     ]
    },
    related:["autonomous-weapons-governance","npt-regime","human-security","nuclear-weapons"],
    read:[{book:"sipri26", where:"The summary of Chapter 13 “Conventional arms control and the regulation of inhumane weapons”"}],
    sources:[{t:"Arms Control Association, “Countries Leave Mine Ban Treaty”, January 2026", url:"https://armscontrol.org/act/2026-01/news/countries-leave-mine-ban-treaty"}],
    checked:"2026-11"},

   {id:"autonomous-weapons-governance", title:"Governing autonomous weapons (as of November 2026)", aka:["LAWS","killer robots","lethal autonomous weapons systems talks"], tags:["technology","arms control","AI"],
    summary:"The CCW talks on lethal autonomous weapons, the September 2026 expert report and the positions of states and campaigners.",
    levels:{
     starter:[
      "A **lethal autonomous weapon system** (LAWS) is a weapon that, once switched on, can select and attack targets without a human deciding each time.",
      "States have discussed how to govern them under the Convention on Certain Conventional Weapons (CCW) since 2014. Campaigners and the International Committee of the Red Cross want a treaty; some major military powers prefer to rely on existing law.",
      "In September 2026 a group of government experts agreed a report setting out elements of a possible instrument. The CCW’s Review Conference meets in Geneva on 16–20 November 2026.",
      {key:"The core question is how much human judgement and control the law should require over the use of force."}
     ],
     builder:[
      "**Timeline.** Informal expert meetings 2014–16; a Group of Governmental Experts (GGE) from 2017; eleven guiding principles in 2019; a joint appeal by the UN Secretary-General and the ICRC in 2023 for a legally binding instrument by 2026; UN General Assembly resolutions from 2023.",
      "**The 2026 report.** Adopted by consensus on 5 September 2026. It sets out elements of an instrument “without prejudging its nature”, using a two-tier approach of prohibitions and regulations, and speaks of “context-appropriate human judgement and control” rather than “meaningful human control”, according to an analysis on Opinio Juris.",
      "**Positions.** The ICRC, Stop Killer Robots and many states seek a binding treaty; others argue existing international humanitarian law suffices or favour non-binding measures."
     ],
     pro:[
      "**Legal questions.** Can systems comply with distinction, proportionality and precaution? Who is responsible when they fail? The report keeps the principle that responsibility cannot be transferred to machines.",
      "**Definitions.** Disputes over characterisation (what counts as autonomous, what as lethal) shape what any ban would cover.",
      "**Forum choice.** The CCW works by consensus; some states and NGOs have pressed to take negotiations to the General Assembly if the CCW stalls. Avoid predicting the outcome.",
      {warn:"This is a fast-moving topic. Check the date of every source and the CCW Review Conference’s final document."}
     ]
    },
    related:["conventional-arms-control","international-law","terrorism-ir"],
    sources:[{t:"Opinio Juris symposium, “Rolling Towards Consensus for the 2026 GGE LAWS Report”, 9 October 2026", url:"https://opiniojuris.org/2026/10/09/symposium-on-the-ccw-gge-laws-obstacles-avoided-rolling-towards-consensus-for-the-2026-gge-laws-report/"}],
    checked:"2026-11"},

   {id:"asia-pacific-security-architecture", title:"Asia-Pacific security architecture", aka:["hub and spoke","ASEAN-centred forums","Indo-Pacific security"], tags:["Asia","security","regions"],
    summary:"The layers of regional security: US bilateral alliances, other alignments, minilaterals such as the Quad and AUKUS, and ASEAN-centred forums.",
    levels:{
     starter:[
      "Asia has no single security organisation like NATO. Instead it has layers: bilateral alliances (mostly with the United States), small groups of states (minilaterals), and wider forums convened by ASEAN.",
      "The US system of separate treaties with the Philippines, Australia and New Zealand, Japan, South Korea and Thailand is called **hub and spoke**. China and Russia each have treaties with North Korea.",
      "Forums such as the ASEAN Regional Forum (1994), the East Asia Summit (2005) and ADMM-Plus (2010) bring rivals to the same table.",
      {key:"Asia’s architecture is many overlapping arrangements, and most states belong to several."}
     ],
     builder:[
      "**Why no NATO?** Hemmer and Katzenstein (2002): identity; Cha (2009–10, 2016): control of allies.",
      "**Forums.** ARF: 27 participants, confidence-building and preventive diplomacy. EAS: ASEAN plus eight. ADMM-Plus: defence ministers of the same group. Shangri-La Dialogue (IISS, since 2002): Track 1.5.",
      "**Debate.** Jones and Smith (2007): “process, not progress”. Johnston (2008): socialisation in forums changed Chinese officials’ views. Acharya: the ASEAN way helped keep peace among members.",
      "**Minilaterals.** The Quad (revived 2017; leaders from 2021) and AUKUS (2021). Members describe them as supporting a rules-based region; China’s government calls them Cold War-style blocs."
     ],
     pro:[
      "**Latticework.** US allies increasingly cooperate with each other (US–Japan–South Korea, US–Japan–Philippines; Japan’s reciprocal access agreements with Australia and the Philippines).",
      "**Hedging.** Many Southeast Asian states avoid choosing sides (Kuik’s hedging; see {{security-dilemma}}).",
      "**Lenses.** Realists see balancing; liberals see institutions reducing uncertainty; constructivists see norms of consultation; critical scholars ask whose security, for example Pacific Island states that call climate change their greatest threat.",
      {tip:"Date every membership list: ASEAN admitted Timor-Leste in 2025, and groupings change."}
     ]
    },
    related:["us-japan-alliance","korean-peninsula-security","cross-strait-relations","south-china-sea-disputes","regional-security-complex-theory","regional-organizations"],
    read:[{book:"dbb", where:"Chapter 2, section 2 “Asia and Oceania”"}],
    sources:[{t:"RNZ (Reuters), “US says Pentagon review sees opportunities to strengthen AUKUS submarine deal”, 5 December 2025", url:"https://www.rnz.co.nz/news/world/580971/us-says-pentagon-review-sees-opportunities-to-strengthen-aukus-submarine-deal"}],
    checked:"2026-11"},

   {id:"korean-peninsula-security", title:"Korean Peninsula security (as of November 2026)", aka:["inter-Korean relations","North Korean nuclear issue","Korean armistice"], tags:["Asia","security","nuclear"],
    summary:"The armistice of 1953, North Korea’s nuclear programme, the record of talks and sanctions, and the main governments’ positions as of November 2026.",
    levels:{
     starter:[
      "The Korean War (1950–53) stopped with an **armistice**, not a peace treaty. The two Koreas have been divided ever since.",
      "North Korea has developed nuclear weapons, carrying out six tests between 2006 and 2017, and is under UN sanctions. Several rounds of talks, including summits with the United States in 2018 and 2019, have not produced a lasting agreement.",
      "As of November 2026, North Korea describes the two Koreas as separate, hostile states, while South Korea’s government seeks to restore dialogue.",
      {key:"Describe each government’s position in its own terms, with the date."}
     ],
     builder:[
      "**Armistice.** Signed on 27 July 1953 by the commanders of the UN Command, the Korean People’s Army and the Chinese People’s Volunteers; South Korea did not sign.",
      "**Talks.** Six-Party Talks (2003–2009: the two Koreas, China, Japan, Russia and the United States). Singapore summit (June 2018) and Hanoi summit (February 2019).",
      "**Sanctions.** Security Council sanctions since resolution 1718 (2006); in 2024 a Russian veto ended the panel of experts’ mandate.",
      "**Positions.** North Korea: nuclear weapons deter US hostility and are not negotiable. South Korea (President Lee Jae-myung, since June 2025): reduce military tensions and restore dialogue; in October 2026 he urged the North to resume talks while pledging a stronger military. United States and Japan: complete denuclearisation; Japan also stresses abductions. China: dialogue, stability, no war or chaos."
     ],
     pro:[
      "**Russia–North Korea.** A treaty with a mutual assistance clause was signed in June 2024; governments and analysts debate its effects on sanctions and regional security.",
      "**Theory.** Realists stress regime survival and deterrence; liberals ask why institutions and sanctions failed; constructivists examine identity and ontological security; critical scholars examine the humanitarian effects of sanctions.",
      "**Sources.** Use official statements (KCNA for North Korea, foreign ministry websites for others), UN documents and specialist trackers; read each as a position.",
      {warn:"Events move quickly; check the latest statements before writing."}
     ]
    },
    related:["asia-pacific-security-architecture","nuclear-weapons","npt-regime","japan-and-neighbours"],
    sources:[{t:"The Star (Reuters), “South Korea’s Lee urges North Korea to restore dialogue, pledges military buildup”, 1 October 2026", url:"https://www.thestar.com.my/news/world/2026/10/01/south-korea039s-lee-urges-north-korea-to-restore-dialogue-pledges-military-buildup"}],
    checked:"2026-11"},

   {id:"cross-strait-relations", title:"Cross-Strait relations (as of November 2026)", aka:["Taiwan Strait","China–Taiwan relations","one China"], tags:["Asia","security","sovereignty"],
    summary:"The history since 1949, resolution 2758, and the stated positions of the PRC, Taiwan, the United States and Japan, with the vocabulary to use neutrally.",
    levels:{
     starter:[
      "In 1949, after losing China’s civil war, the government of the Republic of China (ROC) moved to Taiwan. The Communist Party founded the People’s Republic of China (PRC) in Beijing.",
      "The PRC says Taiwan is part of China and seeks unification. Taiwan’s government says the ROC is a sovereign state not subordinate to the PRC. Most countries recognise the PRC and keep unofficial ties with Taiwan.",
      "Words carry positions here: “reunification”, “unification”, “independence” and “status quo” each tell you whose view is being expressed.",
      {key:"Attribute every claim to the government that makes it."}
     ],
     builder:[
      "**Resolution 2758 (1971).** Recognised the PRC’s representatives as China’s only legitimate representatives at the UN. The PRC says it settled Taiwan’s status; Taiwan’s government and some others say it did not address it.",
      "**PRC.** The one-China principle; peaceful reunification is the stated aim, without renouncing force (Anti-Secession Law, 2005).",
      "**Taiwan.** President Lai Ching-te (since May 2024) says the ROC and PRC are not subordinate to each other. Parties differ: the KMT accepts the “1992 Consensus”, the DPP does not.",
      "**United States.** A one China policy based on the three communiqués and the Taiwan Relations Act (1979); opposes unilateral changes to the status quo.",
      "**Japan.** The 1972 Joint Communiqué: Japan “fully understands and respects” the PRC’s position."
     ],
     pro:[
      "**Recognition.** As of mid-2026, 12 states recognised the ROC (Reuters factbox, May 2026): Belize, Guatemala, Paraguay, Haiti, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, the Marshall Islands, Palau, Tuvalu, Eswatini and the Holy See.",
      "**Analytical lenses.** Deterrence and the military balance; economic interdependence across the Strait; identity change in Taiwan (survey data on identity are often cited); international law and recognition.",
      "**Policy vocabulary.** Distinguish the PRC’s “one-China **principle**” from the US and others’ “one China **policy**”: they are not the same.",
      {warn:"Do not predict; describe stated positions and verifiable events with dates."}
     ]
    },
    related:["asia-pacific-security-architecture","japan-and-neighbours","sovereignty"],
    sources:[{t:"ThePrint (Reuters), “Factbox: Taiwan’s 12 remaining diplomatic allies”, 2 May 2026", url:"https://theprint.in/world/factbox-taiwans-12-remaining-diplomatic-allies/2920395/"}],
    checked:"2026-11"},

   {id:"south-china-sea-disputes", title:"South China Sea disputes (as of November 2026)", aka:["South China Sea","Spratly and Paracel disputes","code of conduct"], tags:["Asia","security","maritime"],
    summary:"Who claims what, the 2016 arbitral award in brief, grey-zone incidents and the code of conduct negotiations.",
    levels:{
     starter:[
      "The South China Sea holds busy shipping lanes, fisheries and possible oil and gas. Six governments make overlapping claims to its islands, reefs and waters: the PRC, Taiwan, Vietnam, the Philippines, Malaysia and Brunei.",
      "The PRC and Taiwan base their claims on a dashed line first drawn in the 1940s. In 2016 an arbitral tribunal, in a case brought by the Philippines, ruled against China’s claim to historic rights within the line; China’s government rejected the ruling.",
      "Today most incidents involve coast guards and fishing fleets rather than navies: what analysts call **grey-zone** activity.",
      {key:"Use each side’s names for features and attribute each claim."}
     ],
     builder:[
      "**Claims.** PRC and Taiwan (dashed line); Vietnam (Paracels and Spratlys); the Philippines (parts of the Spratlys and Scarborough Shoal); Malaysia and Brunei (features and waters off Borneo). Indonesia claims no features but objects where the line overlaps its EEZ.",
      "**Law.** UNCLOS and the 2016 award are covered in Unit 10.",
      "**Diplomacy.** ASEAN and China signed the non-binding Declaration on the Conduct of Parties (2002) and have negotiated a code of conduct for years. The Philippines aimed to conclude it during its 2026 ASEAN chairmanship; at the May 2026 summit leaders renewed calls for self-restraint (GMA News), and officials hoped to finalise the code at the Manila summit of 16–18 November 2026.",
      "**Positions.** China’s government says it has sovereignty over the islands and adjacent waters and rejects the 2016 award; the Philippines’ government calls the award final and binding. The Philippines and Vietnam reject China’s claims and accuse China of coercion; China accuses them of provocation. The United States says it takes no position on sovereignty but supports freedom of navigation and the 2016 award."
     ],
     pro:[
      "**Grey zone.** Coast guard and maritime militia vessels, water cannon and blockades of resupply missions, for example at Second Thomas Shoal, sit below the threshold of armed conflict.",
      "**Theory.** Realists see a power transition at sea; liberals examine institutions and the code of conduct; constructivists study nationalism and maps; legal scholars debate compliance with the award.",
      "**Sources.** Official statements, ASEAN chairman’s statements, and trackers such as CSIS’s Asia Maritime Transparency Initiative (read as one research centre’s view).",
      {warn:"As of early November 2026 the code of conduct had not been concluded; check the latest ASEAN statements."}
     ]
    },
    related:["asia-pacific-security-architecture","international-law","japan-and-neighbours"],
    sources:[{t:"GMA News, “ASEAN leaders renew call for self-restraint in South China Sea”, 9 May 2026", url:"https://gmanetwork.com/news/topstories/nation/987051/asean-leaders-renew-call-for-self-restraint-in-south-china-sea/story"},{t:"VCCI (from FMT), “South China Sea code of conduct set for November ASEAN summit”, July 2026", url:"https://en.aecvcci.vn/tin-tuc-n15590/south-china-sea-code-of-conduct-set-for-november-asean-summit.htm"}],
    checked:"2026-11"},

   {id:"mary-kaldor", title:"Mary Kaldor", aka:["Kaldor"], tags:["thinker","conflict","human security"],
    summary:"British scholar of war and global civil society who proposed the idea of “new wars” and championed human security.",
    levels:{
     starter:[
      "**Mary Kaldor** is a British scholar of war, peace and global governance, Professor Emeritus of Global Governance at the London School of Economics, where she has directed its Conflict Research Programme.",
      "She is best known for *New and Old Wars* (1999), which argued that wars after the Cold War, such as the war in Bosnia and Herzegovina, were a new type: fought over identity, mostly against civilians, financed by a global war economy.",
      "She has also been an activist: a founding member of European Nuclear Disarmament in the 1980s and a founder of the Helsinki Citizens’ Assembly."
     ],
     builder:[
      "**Key works.** *The Baroque Arsenal* (1981), on military technology; *New and Old Wars* (1999; third edition 2012); *Global Civil Society: An Answer to War* (2003); *Human Security* (2007); *International Law and New Wars* (with Christine Chinkin, 2017); *Global Security Cultures* (2018).",
      "**Human security.** She convened the group that wrote *A Human Security Doctrine for Europe* (the Barcelona Report, 2004) for the EU’s Javier Solana.",
      "**How scholars use her.** “New wars” is cited as an ideal type for wars of identity and predation, and as a policy argument for protecting civilians rather than defeating armies."
     ],
     pro:[
      "**Critics.** Kalyvas (2001) and others argued that the features of new wars were not new; she replied (2013) that the concept is a lens, not a claim of total novelty.",
      "**Security cultures.** Her later work describes competing “security cultures” (geopolitical, new wars, liberal peace, war on terror) that shape how actors respond to violence.",
      {tip:"Cite the edition you use; later editions (2006, 2012) add material on Iraq and Afghanistan."}
     ]
    },
    related:["new-wars-debate","human-security","peacebuilding"],
    sources:[{t:"RUSI: Professor Mary Kaldor", url:"https://www.rusi.org/people/kaldor"}],
    checked:"2026-11"},

   {id:"barbara-walter", title:"Barbara F. Walter", aka:["Walter"], tags:["thinker","civil war","peace"],
    summary:"American political scientist whose work on credible commitment explains why civil wars are hard to settle.",
    levels:{
     starter:[
      "**Barbara F. Walter** is the Rohr Professor of International Affairs at the University of California, San Diego.",
      "Her big idea is the **commitment problem** in civil wars: rebels asked to disarm fear that the government will break its promises once they cannot fight back. Peace deals succeed far more often, she found, when an outside power guarantees them."
     ],
     builder:[
      "**Key works.** “The Critical Barrier to Civil War Settlement” (*International Organization*, 1997); *Committing to Peace: The Successful Settlement of Civil Wars* (2002); *Reputation and Civil War* (2009), on why governments fight separatists to deter others; *How Civil Wars Start* (2022).",
      "**Peacekeeping research.** With Lise Morjé Howard and Virginia Page Fortna she reviewed the evidence that peacekeeping reduces violence (2021).",
      "**Public scholarship.** She co-founded the blog *Political Violence @ a Glance*."
     ],
     pro:[
      "**Influence.** Her commitment argument is now standard in bargaining theories of war and in UN thinking about guarantees, power-sharing and peacekeeping.",
      "**Debate.** *How Civil Wars Start* applies civil war risk factors, such as partial democracy and ethnic factionalism, to established democracies, including the United States; some scholars dispute how far the comparison travels.",
      {tip:"Pair Walter (commitment) with Stedman (spoilers) and Toft (victories) for a balanced seminar on war termination."}
     ]
    },
    related:["civil-war-termination","peace-operations","causes-of-war"],
    sources:[{t:"Walter, Howard & Fortna (2021), abstract on IDEAS/RePEc", url:"https://ideas.repec.org/a/cup/bjposi/v51y2021i4p1705-1722_20.html"}],
    checked:"2026-11"},

   {id:"severine-autesserre", title:"Séverine Autesserre", aka:["Autesserre"], tags:["thinker","peacebuilding","ethnography"],
    summary:"Scholar of peacebuilding whose ethnographies of the Congo and of interveners launched much of the local turn.",
    levels:{
     starter:[
      "**Séverine Autesserre** is a professor of political science at Barnard College, Columbia University, who studies peacebuilding through long fieldwork, especially in the eastern Democratic Republic of the Congo, where she has travelled since 2001.",
      "Her argument in plain words: international peacebuilders often look at national politics and miss the local conflicts (over land, chiefs, local power) that keep violence going, and their own everyday habits get in the way."
     ],
     builder:[
      "**Key works.** *The Trouble with the Congo: Local Violence and the Failure of International Peacebuilding* (2010; Grawemeyer Award 2012); *Peaceland: Conflict Resolution and the Everyday Politics of International Intervention* (2014); *The Frontlines of Peace: An Insider’s Guide to Changing the World* (2021).",
      "**Method.** Ethnography of interveners as well as of local people, with comparative research in places such as Burundi, Cyprus, South Sudan and Timor-Leste."
     ],
     pro:[
      "**Influence.** Her work is central to the local turn and to debates on the culture of international organisations.",
      "**Critiques.** Some scholars warn that “local” approaches can idealise local actors; others ask how far ethnographic findings generalise. Pair her with quantitative studies of peacekeeping for a full picture.",
      {tip:"*Peaceland* is a model of how to study an organisation’s everyday practices for a thesis."}
     ]
    },
    related:["liberal-peace-debate","peace-operations","ir-fieldwork"],
    sources:[{t:"Barnard College: Séverine Autesserre", url:"https://barnard.edu/profiles/severine-autesserre"}],
    checked:"2026-11"},

   {id:"sadako-ogata", title:"Ogata Sadako", aka:["Sadako Ogata","緒方貞子"], tags:["thinker","human security","refugees","Japan"],
    summary:"Japanese scholar and UN High Commissioner for Refugees (1991–2000) who co-chaired the Commission on Human Security.",
    levels:{
     starter:[
      "**Ogata Sadako** (1927–2019) was a Japanese scholar and international official. From 1991 to 2000 she was UN High Commissioner for Refugees, the first woman to lead the agency, during crises in Iraq, the Balkans, the Great Lakes region of Africa and East Timor.",
      "She later co-chaired, with the economist Amartya Sen, the Commission on Human Security, and became president of the Japan International Cooperation Agency (JICA), where she linked human security to development aid."
     ],
     builder:[
      "**Scholar.** Her doctoral research at the University of California, Berkeley became *Defiance in Manchuria* (1964), on Japanese foreign policy in 1931–32.",
      "**Human security.** The Commission’s report *Human Security Now* (2003) combined protection (from the top down) and empowerment (from the bottom up), and covered both freedom from fear and freedom from want.",
      "**Memoir.** *The Turbulent Decade* (2005) recounts her years at UNHCR."
     ],
     pro:[
      "**Practice.** At UNHCR she oversaw decisions such as assisting internally displaced people inside Iraq in 1991, extending the agency’s work beyond refugees who had crossed borders, a precedent debated by scholars of humanitarianism.",
      "**Japan’s diplomacy.** She is often cited as a figure who gave Japan’s human security policy international credibility.",
      {tip:"She is a good case for thinking about how individuals and norm entrepreneurs shape international organisations."}
     ]
    },
    related:["human-security","critical-security-studies","japan-development-cooperation","refugees-and-displacement"],
    sources:[{t:"UN News, “Tributes for ‘role model’ former UN refugee agency chief, Sadako Ogata”, October 2019", url:"https://news.un.org/en/story/2019/10/1050171"},{t:"MOFA Japan, Chronology of activities related to Human Security", url:"https://www.mofa.go.jp/policy/human_secu/chronology.html"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"traditional-security-studies", term:"Traditional security studies", def:"The approach that treats security as the protection of the state from mainly military threats; Walt (1991) defined the field as the study of the threat, use and control of military force.", codex:"critical-security-studies"},
   {id:"critical-security-studies", term:"Critical security studies", def:"A family of approaches (Copenhagen, Welsh, Paris, feminist, postcolonial) that question whose security counts and who decides what is a threat.", codex:"critical-security-studies"},
   {id:"copenhagen-school", term:"Copenhagen School", def:"The approach of Buzan, Wæver and others that studies security as a speech act (securitisation) across several sectors.", codex:"securitization-theory"},
   {id:"welsh-school", term:"Welsh School (Aberystwyth School)", def:"The approach of Ken Booth and Richard Wyn Jones that defines security as emancipation, drawing on Frankfurt School Critical Theory.", codex:"critical-security-studies"},
   {id:"paris-school", term:"Paris School", def:"An approach associated with Didier Bigo that studies security as the everyday practices of police, border and intelligence professionals.", codex:"critical-security-studies"},
   {id:"feminist-security-studies", term:"Feminist security studies", def:"Research that asks how gender shapes who is protected, who is threatened and who is silenced, and treats the state itself as a possible source of insecurity.", codex:"critical-security-studies"},
   {id:"freedom-from-fear", term:"Freedom from fear", def:"The narrow version of human security, focused on protecting people from violence such as landmines, child soldiering and mass atrocities; championed by Canada and Norway.", codex:"human-security"},
   {id:"freedom-from-want", term:"Freedom from want", def:"The broad version of human security, which adds poverty, disease and disasters; championed by Japan.", codex:"human-security"},
   {id:"non-traditional-security", term:"Non-traditional security", def:"A term common in Asian scholarship and policy for non-military threats such as disease, disasters, migration and environmental change.", codex:"critical-security-studies"},
   {id:"regional-security-complex", term:"Regional security complex", def:"A group of states whose security concerns are so linked that they cannot be analysed apart from each other (Buzan and Wæver, 2003).", codex:"regional-security-complex-theory"},
   {id:"greed-and-grievance", term:"Greed versus grievance", def:"The debate over whether civil wars are better explained by rebels’ opportunity to profit or by political and economic grievances.", codex:"civil-war-onset"},
   {id:"feasibility-hypothesis", term:"Feasibility hypothesis", def:"Collier, Hoeffler and Rohner’s argument (2009) that where rebellion is financially and militarily feasible it will occur, whatever its motive.", codex:"civil-war-onset"},
   {id:"resource-curse", term:"Resource curse", def:"The pattern in which countries rich in natural resources, especially oil, tend to have weaker institutions, more corruption or more conflict than expected.", codex:"civil-war-onset"},
   {id:"new-wars", term:"New wars", def:"Kaldor’s term (1999) for wars fought over identity by networks of state and non-state actors, mostly against civilians, financed by a globalised war economy.", codex:"new-wars-debate"},
   {id:"war-economy", term:"War economy", def:"The ways an armed conflict is financed and sustained, such as looting, smuggling, taxation of trade, diaspora remittances and diverted aid.", codex:"new-wars-debate"},
   {id:"selective-violence", term:"Selective violence", def:"Violence targeted at particular individuals, often on the basis of local information, used by armed groups to control territory and deter defection (Kalyvas).", codex:"new-wars-debate"},
   {id:"commitment-problem", term:"Commitment problem", def:"A situation in which a party cannot credibly promise to keep a deal in the future, for example when rebels fear a government will cheat once they have disarmed.", codex:"civil-war-termination"},
   {id:"spoiler", term:"Spoiler", def:"A leader or group that uses violence to undermine a peace process threatening its power or interests; Stedman distinguished limited, greedy and total spoilers.", codex:"civil-war-termination"},
   {id:"conflict-trap", term:"Conflict trap", def:"The cycle in which war leaves poverty, armed groups and grievances that make further war more likely.", codex:"civil-war-termination"},
   {id:"conflict-recurrence", term:"Conflict recurrence", def:"The return of armed conflict in a country after a previous war has ended.", codex:"civil-war-termination"},
   {id:"peace-operation", term:"Peace operation", def:"A broad term for missions that observe ceasefires, keep or build peace, protect civilians or administer territory, whether led by the UN, a regional body or a coalition.", codex:"peace-operations"},
   {id:"multidimensional-peacekeeping", term:"Multidimensional peacekeeping", def:"Peacekeeping that adds civilian tasks such as elections, policing, human rights and refugee return to military ones.", codex:"peace-operations"},
   {id:"robust-peacekeeping", term:"Robust peacekeeping", def:"Peacekeeping authorised to use force, beyond self-defence, to defend its mandate and protect civilians.", codex:"peace-operations"},
   {id:"protection-of-civilians", term:"Protection of civilians (PoC)", def:"A peacekeeping task, mandated since 1999, to protect civilians under threat of physical violence.", codex:"peace-operations"},
   {id:"transitional-administration", term:"Transitional administration", def:"A mission in which the UN temporarily exercises governmental authority over a territory, as in Kosovo and East Timor in 1999.", codex:"peace-operations"},
   {id:"ddr", term:"DDR (disarmament, demobilisation and reintegration)", def:"The process of collecting fighters’ weapons, disbanding armed units and helping former combatants return to civilian life.", codex:"peacebuilding"},
   {id:"security-sector-reform", term:"Security sector reform (SSR)", def:"Rebuilding a country’s army, police, intelligence and courts so that they are effective and under civilian, accountable control.", codex:"peacebuilding"},
   {id:"liberal-peace", term:"Liberal peace", def:"The model of peacebuilding that promotes elections, market economies, human rights and the rule of law in war-torn societies.", codex:"liberal-peace-debate"},
   {id:"hybrid-peace", term:"Hybrid peace", def:"Mac Ginty’s term for the mix of international and local practices, institutions and power that emerges after intervention.", codex:"liberal-peace-debate"},
   {id:"local-turn", term:"Local turn", def:"The shift in peace research towards local actors, conflicts and everyday practices, rather than national elites and international templates.", codex:"liberal-peace-debate"},
   {id:"everyday-peace", term:"Everyday peace", def:"Mac Ginty’s term for the small, routine acts by which people avoid or reduce violence in divided societies.", codex:"liberal-peace-debate"},
   {id:"women-peace-and-security", term:"Women, Peace and Security (WPS)", def:"The UN Security Council agenda, begun with resolution 1325 (2000), on women’s participation and protection in conflict and peace processes.", codex:"women-peace-and-security"},
   {id:"unscr-1325", term:"Resolution 1325", def:"UN Security Council resolution of 31 October 2000, the first to link women’s experiences of conflict to international peace and security.", codex:"women-peace-and-security"},
   {id:"wps-national-action-plan", term:"National action plan (WPS)", def:"A government’s plan for implementing the Women, Peace and Security resolutions; more than 100 countries have one.", codex:"women-peace-and-security"},
   {id:"nuclear-weapon-state", term:"Nuclear-weapon state (NPT)", def:"In the NPT, a state that manufactured and exploded a nuclear device before 1 January 1967: the United States, Russia (as the Soviet Union’s successor), the United Kingdom, France and China.", codex:"npt-regime"},
   {id:"npt-review-conference", term:"NPT review conference", def:"The meeting held every five years by NPT parties to review the treaty and agree, by consensus, on a final document.", codex:"npt-regime"},
   {id:"humanitarian-initiative", term:"Humanitarian initiative", def:"The movement of states and NGOs that reframed nuclear weapons around their humanitarian consequences, leading to the TPNW.", codex:"tpnw"},
   {id:"tpnw", term:"TPNW", def:"The Treaty on the Prohibition of Nuclear Weapons: adopted 2017, in force 2021; bans nuclear weapons for its parties. No nuclear-armed state has joined.", codex:"tpnw"},
   {id:"extended-deterrence", term:"Extended deterrence", def:"A state’s threat to retaliate on behalf of its allies, often called a nuclear umbrella.", codex:"nuclear-deterrence-debate"},
   {id:"stability-instability-paradox", term:"Stability–instability paradox", def:"Snyder’s argument (1965) that stable nuclear deterrence can make limited, lower-level conflict more likely.", codex:"nuclear-deterrence-debate"},
   {id:"nuclear-taboo", term:"Nuclear taboo", def:"Tannenwald’s argument that a normative prohibition, not only deterrence, helps explain the non-use of nuclear weapons since 1945.", codex:"nuclear-deterrence-debate"},
   {id:"arms-trade-treaty", term:"Arms Trade Treaty (ATT)", def:"A treaty adopted in 2013 and in force since 2014 that regulates international transfers of conventional arms and bans transfers for use in genocide or war crimes.", codex:"conventional-arms-control"},
   {id:"small-arms-light-weapons", term:"Small arms and light weapons (SALW)", def:"Weapons that one or a few people can carry and use, such as rifles and machine guns; governed mainly by a UN Programme of Action (2001).", codex:"conventional-arms-control"},
   {id:"lethal-autonomous-weapons", term:"Lethal autonomous weapons systems (LAWS)", def:"Weapons that, once activated, select and engage targets without further human intervention; under discussion in the CCW since 2014.", codex:"autonomous-weapons-governance"},
   {id:"meaningful-human-control", term:"Meaningful human control", def:"A standard proposed by campaigners for how much human control the use of autonomous weapons should require; the 2026 CCW expert report instead speaks of context-appropriate human judgement and control.", codex:"autonomous-weapons-governance"},
   {id:"counter-terrorism", term:"Counter-terrorism", def:"Policies to prevent and respond to terrorism, from policing and sanctions to military force; at the UN, Security Council regimes and the General Assembly’s 2006 Global Strategy.", codex:"terrorism-ir"},
   {id:"preventing-violent-extremism", term:"Preventing violent extremism (PVE)", def:"An approach, promoted by the UN from 2015, that addresses the conditions that drive recruitment to violent groups rather than only security measures.", codex:"terrorism-ir"},
   {id:"hub-and-spoke", term:"Hub and spoke", def:"The US system of separate bilateral alliances in Asia (the hub in Washington, spokes to Japan, South Korea, the Philippines, Australia and Thailand).", codex:"asia-pacific-security-architecture"},
   {id:"asean-regional-forum", term:"ASEAN Regional Forum (ARF)", def:"A security dialogue convened by ASEAN since 1994, with 27 participants, aiming at confidence-building and preventive diplomacy.", codex:"asia-pacific-security-architecture"},
   {id:"east-asia-summit", term:"East Asia Summit (EAS)", def:"A leaders’ forum since 2005 of ASEAN members and eight partners, including China, India, Japan, Russia and the United States.", codex:"asia-pacific-security-architecture"},
   {id:"admm-plus", term:"ADMM-Plus", def:"The ASEAN Defence Ministers’ Meeting with eight partner countries, since 2010, for practical cooperation such as disaster relief and maritime security.", codex:"asia-pacific-security-architecture"},
   {id:"quad", term:"Quad", def:"The Quadrilateral Security Dialogue of Australia, India, Japan and the United States, revived in 2017; a grouping, not an alliance.", codex:"asia-pacific-security-architecture"},
   {id:"aukus", term:"AUKUS", def:"A partnership of Australia, the United Kingdom and the United States, announced in 2021, to provide Australia with nuclear-powered submarines and develop advanced technologies.", codex:"asia-pacific-security-architecture"},
   {id:"korean-armistice", term:"Korean Armistice Agreement", def:"The agreement of 27 July 1953 that halted the Korean War, signed by the UN Command, the Korean People’s Army and the Chinese People’s Volunteers; no peace treaty has followed.", codex:"korean-peninsula-security"},
   {id:"six-party-talks", term:"Six-Party Talks", def:"Negotiations from 2003 to 2009 on North Korea’s nuclear programme among the two Koreas, China, Japan, Russia and the United States.", codex:"korean-peninsula-security"},
   {id:"one-china-principle", term:"One-China principle", def:"The PRC’s position that there is one China, that Taiwan is part of it, and that the PRC government is China’s sole legitimate government.", codex:"cross-strait-relations"},
   {id:"one-china-policy", term:"One China policy", def:"The policy of the United States and others of recognising the PRC while acknowledging or noting its position on Taiwan; it differs from country to country and from the PRC’s principle.", codex:"cross-strait-relations"},
   {id:"code-of-conduct-scs", term:"Code of conduct (South China Sea)", def:"A binding set of rules that ASEAN and China have negotiated for years to manage tensions in the South China Sea; not concluded as of early November 2026.", codex:"south-china-sea-disputes"},
   {id:"grey-zone", term:"Grey-zone activity", def:"Coercive actions below the threshold of armed conflict, such as coast guard blockades, water cannon or maritime militia swarms.", codex:"south-china-sea-disputes"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u12-q01", lesson:"e4u12-l1", level:1, q:"Who defined security studies as “the study of the threat, use, and control of military force”?", options:[
     {t:"Stephen Walt (1991)", ok:true, why:"Right: in “The Renaissance of Security Studies”, defending a narrow field."},
     {t:"Ken Booth (1991)", why:"Booth argued the opposite, for security as emancipation."},
     {t:"Barry Buzan (1983)", why:"Buzan’s *People, States and Fear* widened security into several sectors."},
     {t:"Ole Wæver (1995)", why:"Wæver developed securitisation theory, a widening approach."}]},
   {id:"e4u12-q02", lesson:"e4u12-l1", level:2, q:"A government calls water scarcity “an existential threat to the nation” and suspends environmental review of a dam. Which approach is best suited to analysing this move?", options:[
     {t:"The Copenhagen School’s securitisation theory", ok:true, why:"Yes. An actor presents an issue as an existential threat to justify extraordinary measures: a securitising move."},
     {t:"Traditional security studies", why:"It would mainly ask about military threats, not how a non-military issue is framed as security."},
     {t:"The democratic peace", why:"That theory is about wars between democracies, not framing."},
     {t:"Regime theory", why:"It studies cooperation through institutions, not how threats are constructed."}]},
   {id:"e4u12-q03", lesson:"e4u12-l1", level:1, q:"Which school defines security as emancipation?", options:[
     {t:"The Welsh (Aberystwyth) School", ok:true, why:"Right: Booth (1991) and Wyn Jones (1999), drawing on Critical Theory."},
     {t:"The Paris School", why:"It studies security practices of professionals."},
     {t:"The Copenhagen School", why:"It studies securitisation, often preferring desecuritisation."},
     {t:"Structural realism", why:"Realists focus on state survival in anarchy."}]},
   {id:"e4u12-q04", lesson:"e4u12-l1", level:2, q:"Priya argues that in her case study the main threats to the state come from insurgencies and contested borders inside the country, not from foreign armies. Whose work supports this framing?", options:[
     {t:"Mohammed Ayoob’s *The Third World Security Predicament* (1995)", ok:true, why:"Yes. Ayoob argued that many postcolonial states face mainly internal threats rooted in incomplete state-building."},
     {t:"Stephen Walt’s balance of threat", why:"Walt’s theory concerns alliances against external threats."},
     {t:"Mahbub ul Haq’s Human Development Index", why:"A development measure, not a theory of state insecurity."},
     {t:"Nina Tannenwald’s nuclear taboo", why:"That concerns the non-use of nuclear weapons."}]},
   {id:"e4u12-q05", lesson:"e4u12-l1", level:1, q:"Which country championed the “freedom from want” version of human security, including a UN trust fund set up in 1999?", options:[
     {t:"Japan", ok:true, why:"Right. Prime Minister Obuchi announced the contribution in December 1998; the trust fund was set up in March 1999."},
     {t:"Canada", why:"Canada championed the narrower freedom-from-fear version."},
     {t:"Norway", why:"Norway partnered Canada on the narrower agenda."},
     {t:"The United States", why:"The US was not a leading champion of human security."}]},
   {id:"e4u12-q06", lesson:"e4u12-l1", level:3, q:"A report argues that “everything from unemployment to obesity is a human security threat requiring urgent action.” Which critique would Roland Paris most likely make?", options:[
     {t:"So broad a concept gives no basis for setting priorities or testing claims", ok:true, why:"Yes. Paris (2001) argued that human security’s expansiveness made it analytically weak, though politically attractive."},
     {t:"Human security is a cover for nuclear deterrence", why:"Not his argument."},
     {t:"Only states can be referent objects", why:"Paris did not defend a strictly state-centric view; his critique was about breadth and usefulness."},
     {t:"Human security has never influenced any policy", why:"He acknowledged its political appeal; his concern was analytical."}]},
   {id:"e4u12-q07", lesson:"e4u12-l1", level:1, q:"What did UN General Assembly resolution 66/290 (2012) say about human security and force?", options:[
     {t:"Human security does not entail the threat or use of force", ok:true, why:"Right. The common understanding separated it from coercive intervention."},
     {t:"Human security requires military intervention where necessary", why:"The resolution says the opposite."},
     {t:"Human security replaces state security", why:"It says human security does not replace state security."},
     {t:"Human security applies only in wartime", why:"Not stated; it covers widespread challenges to survival, livelihood and dignity."}]},
   {id:"e4u12-q08", lesson:"e4u12-l1", level:2, q:"In regional security complex theory, what is an “insulator”?", options:[
     {t:"A state between complexes that separates or absorbs their dynamics", ok:true, why:"Right, such as Afghanistan at the edge of South Asia in Buzan and Wæver’s account."},
     {t:"A great power that suppresses a region’s dynamics", why:"That is overlay."},
     {t:"An international organisation that mediates disputes", why:"Not the theory’s use of the term."},
     {t:"A neutral state with no armed forces", why:"Insulators are defined by location between complexes, not by neutrality."}]},
   {id:"e4u12-q09", lesson:"e4u12-l1", level:3, q:"Mei is writing about the Mekong. She wants to show both upstream and downstream views without taking sides. Which sentence best does this?", options:[
     {t:"“China’s government says its dams generate clean power and can release water in dry seasons; some downstream researchers and communities argue that the dams alter flows and fisheries.”", ok:true, why:"Each position is attributed to who holds it, with no verdict."},
     {t:"“China’s dams are destroying the Mekong.”", why:"A contested claim stated as fact, attributed to no one."},
     {t:"“Downstream complaints are exaggerated.”", why:"Takes a side without evidence or attribution."},
     {t:"“The Mekong has no security dimension.”", why:"Ignores livelihoods and regional diplomacy, and is itself a judgement."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u12-q10", lesson:"e4u12-l2", level:1, q:"Which variable was central to Collier and Hoeffler’s “greed” argument?", options:[
     {t:"Dependence on primary commodity exports", ok:true, why:"Right. They read it as a source of lootable finance for rebels."},
     {t:"Ethnic diversity", why:"They and Fearon and Laitin found diversity a weak predictor."},
     {t:"Democracy scores", why:"Not central to the greed argument."},
     {t:"Number of borders", why:"Not a key variable in their model."}]},
   {id:"e4u12-q11", lesson:"e4u12-l2", level:2, q:"A study finds that oil-rich countries have more civil wars. Which interpretation would Fearon stress?", options:[
     {t:"Oil wealth can produce weak states that live off rents rather than building capacity", ok:true, why:"Yes. Fearon (2005) argued commodity dependence signals state weakness, not only rebel opportunity."},
     {t:"Oil makes people greedier", why:"A psychological claim neither side made."},
     {t:"Oil proves grievances don’t matter", why:"The finding itself doesn’t settle the mechanism."},
     {t:"Oil causes ethnic hatred", why:"No such mechanism is proposed."}]},
   {id:"e4u12-q12", lesson:"e4u12-l2", level:3, q:"Fatima finds that grievance measures predicted civil war poorly in an old study that used inequality between individuals across whole countries. What does later research suggest?", options:[
     {t:"Grievance may have been measured badly; exclusion and inequality between groups do predict conflict", ok:true, why:"Right. Ethnic Power Relations data and horizontal inequality research brought grievance back."},
     {t:"Grievance never matters", why:"Later research contradicts this."},
     {t:"Inequality between individuals is the best measure", why:"The point is that group-level measures capture the mechanism better."},
     {t:"Only greed explains war", why:"Most scholars now combine explanations."}]},
   {id:"e4u12-q13", lesson:"e4u12-l2", level:1, q:"Who wrote “‘New’ and ‘Old’ Civil Wars: A Valid Distinction?” (2001)?", options:[
     {t:"Stathis Kalyvas", ok:true, why:"Right: the main critique of Kaldor’s thesis."},
     {t:"Mary Kaldor", why:"She proposed the new wars thesis."},
     {t:"Paul Collier", why:"Collier worked on the economics of civil war."},
     {t:"Barbara Walter", why:"Walter works on commitment problems and settlement."}]},
   {id:"e4u12-q14", lesson:"e4u12-l2", level:2, q:"In Kalyvas’s *The Logic of Violence in Civil War*, why do armed groups often use violence against civilians?", options:[
     {t:"Selectively, to control territory and deter defection, often using local denunciations", ok:true, why:"Yes. He argued violence is strategic, not mindless."},
     {t:"Randomly, because civil wars are irrational", why:"He argued against this view."},
     {t:"Only because of ancient ethnic hatreds", why:"His theory is about control and information, not hatreds."},
     {t:"To win international recognition", why:"Not his argument."}]},
   {id:"e4u12-q15", lesson:"e4u12-l2", level:1, q:"According to Barbara Walter, what most helps civil war settlements get implemented?", options:[
     {t:"Third-party security guarantees", ok:true, why:"Right. They address the rebels’ fear of disarming."},
     {t:"Holding elections immediately", why:"Walter’s focus was guarantees; Paris warned about rushed elections."},
     {t:"Excluding rebels from government", why:"Exclusion worsens the commitment problem."},
     {t:"Cutting all foreign aid", why:"Not part of her argument."}]},
   {id:"e4u12-q16", lesson:"e4u12-l2", level:3, q:"A rebel commander says: “If we hand in our guns, who will stop them arresting us next year?” Which concept and remedy fit best?", options:[
     {t:"A commitment problem; remedies include outside guarantees and power-sharing", ok:true, why:"Exactly Walter’s mechanism and Hartzell and Hoddie’s remedy."},
     {t:"A spoiler problem; remedy is to defeat the commander", why:"He isn’t sabotaging a deal; he fears it will be broken."},
     {t:"The resource curse; remedy is to nationalise mines", why:"Unrelated to his stated fear."},
     {t:"The stability–instability paradox; remedy is nuclear deterrence", why:"A nuclear concept, irrelevant here."}]},
   {id:"e4u12-q17", lesson:"e4u12-l2", level:2, q:"What did Monica Duffy Toft argue in *Securing the Peace* (2010)?", options:[
     {t:"Wars ended by military victory, especially rebel victory, recur less often than negotiated ones", ok:true, why:"Right, a challenge to the preference for settlements; she also stressed security sector reform."},
     {t:"Negotiated settlements always last longer", why:"That is the view she challenged."},
     {t:"Peacekeeping never matters", why:"Not her argument."},
     {t:"Civil wars cannot end", why:"She studied how they end."}]},
   {id:"e4u12-q18", lesson:"e4u12-l2", level:3, q:"Kenji wants to know whether violence rose near new mining sites in one district month by month. Which choice and reason are best?", options:[
     {t:"An event dataset such as UCDP GED or ACLED, because it records individual events with places and dates", ok:true, why:"Right. Country-year data are too coarse for sub-national, monthly patterns."},
     {t:"The UCDP/PRIO Armed Conflict Dataset, because it covers 1946 onwards", why:"Its unit is the conflict-year for a country, not events in a district."},
     {t:"Ethnic Power Relations, because mines create ethnic groups", why:"EPR records group access to power, not violent events."},
     {t:"No data exist for this question", why:"Event datasets are built for it."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u12-q19", lesson:"e4u12-l3", level:1, q:"Which is an example of a transitional administration?", options:[
     {t:"UNTAET in East Timor, 1999–2002", ok:true, why:"Right: the UN exercised governmental authority."},
     {t:"UNTSO in the Middle East, 1948", why:"A traditional observer mission."},
     {t:"UNFICYP in Cyprus", why:"A traditional buffer-zone mission."},
     {t:"The Quad", why:"Not a peace operation."}]},
   {id:"e4u12-q20", lesson:"e4u12-l3", level:3, q:"A critic writes: “Peacekeeping fails: wars restart more often where the UN deploys.” What is the strongest methodological reply?", options:[
     {t:"The UN tends to deploy to harder cases, so raw comparisons are biased; studies that account for this find peacekeeping helps", ok:true, why:"Yes. This is Fortna’s selection argument."},
     {t:"Wars never restart where the UN deploys", why:"False; some do."},
     {t:"Peacekeeping cannot be studied", why:"It is studied extensively."},
     {t:"The critic must be biased", why:"An ad hominem reply, not a methodological one."}]},
   {id:"e4u12-q21", lesson:"e4u12-l3", level:1, q:"What did Hultman, Kathman and Shannon (2013) find?", options:[
     {t:"More UN troops are associated with fewer civilian deaths", ok:true, why:"Right: their 2013 study in the *American Journal of Political Science* found this for troops, and for UN police too."},
     {t:"Peacekeepers increase civilian deaths", why:"The opposite of their finding."},
     {t:"Only police matter, not troops", why:"They found that both troops and police were associated with fewer civilian deaths (observers were not)."},
     {t:"Peacekeeping has no measurable effect", why:"They found clear associations."}]},
   {id:"e4u12-q22", lesson:"e4u12-l3", level:2, q:"Paris recommended “Institutionalization Before Liberalization.” What policy follows?", options:[
     {t:"Build effective institutions before rapid elections and market reforms", ok:true, why:"Right. Rushed liberalisation could reignite conflict in fragile states."},
     {t:"Never hold elections after war", why:"He favoured delaying and preparing, not abolishing, elections."},
     {t:"Hold elections as soon as fighting stops", why:"The opposite of his advice."},
     {t:"Let markets replace institutions", why:"Not his argument."}]},
   {id:"e4u12-q23", lesson:"e4u12-l3", level:1, q:"What is hybrid peace, in Mac Ginty’s sense?", options:[
     {t:"The mix of international and local practices, institutions and power that emerges after intervention", ok:true, why:"Right: Mac Ginty, *Security Dialogue* (2010)."},
     {t:"A peace imposed by two great powers", why:"Not the concept."},
     {t:"A peacekeeping mission run jointly by the UN and NATO", why:"Not the concept."},
     {t:"Peace between two hybrid regimes", why:"Not the concept."}]},
   {id:"e4u12-q24", lesson:"e4u12-l3", level:3, q:"Lucía’s report praises a donor for handing a peace project to “local partners” and then cutting its funding. A critic of the local turn would most likely say:", options:[
     {t:"“Local ownership” can be used to shift responsibility and cost away from outsiders, and local partners have their own elites and exclusions", ok:true, why:"Yes. These are the main warnings against romanticising the local."},
     {t:"Local partners should never be involved", why:"No critic in this debate argues that."},
     {t:"Funding is irrelevant to peace", why:"Funding is part of the critique."},
     {t:"The local turn requires military force", why:"Not part of the argument."}]},
   {id:"e4u12-q25", lesson:"e4u12-l3", level:1, q:"How many Security Council resolutions make up the Women, Peace and Security agenda?", options:[
     {t:"Ten, from 1325 (2000) to 2493 (2019)", ok:true, why:"Right: ten resolutions over nineteen years."},
     {t:"One, resolution 1325", why:"Nine more followed."},
     {t:"Three", why:"There are ten."},
     {t:"Twenty-five", why:"There are ten."}]},
   {id:"e4u12-q26", lesson:"e4u12-l3", level:2, q:"Which finding did Krause, Krause and Bränfors (2018) report?", options:[
     {t:"Agreements signed by women delegates were associated with more durable peace, especially with ties to women’s civil society", ok:true, why:"Right: *International Interactions*, 2018."},
     {t:"Women are naturally more peaceful than men", why:"They made no such claim about nature; that view is criticised as essentialist."},
     {t:"Women’s participation has no association with outcomes", why:"The opposite of their finding."},
     {t:"Only women mediators matter", why:"Their study focused on signatories and civil society links."}]},
   {id:"e4u12-q27", lesson:"e4u12-l3", level:2, q:"As of 2026, which statement about UNIFIL in Lebanon is accurate?", options:[
     {t:"The Security Council extended its mandate for a final time to 31 December 2026, with withdrawal within a year", ok:true, why:"Right: resolution 2790 (August 2025)."},
     {t:"It was expanded into a transitional administration", why:"No such decision was taken; it is winding down."},
     {t:"It closed in 2023 at Lebanon’s request", why:"That describes MINUSMA in Mali."},
     {t:"It has no end date", why:"Resolution 2790 set one."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u12-q28", lesson:"e4u12-l4", level:2, q:"A non-nuclear state complains that the nuclear-weapon states have not done enough to reduce their arsenals. Which NPT article is it invoking?", options:[
     {t:"Article VI", ok:true, why:"Right: the commitment to negotiate in good faith on disarmament."},
     {t:"Article IV", why:"That is the right to peaceful uses."},
     {t:"Article X", why:"That is withdrawal."},
     {t:"Article III", why:"That concerns safeguards."}]},
   {id:"e4u12-q29", lesson:"e4u12-l4", level:1, q:"Which states with nuclear weapons have never joined the NPT?", options:[
     {t:"India, Israel and Pakistan", ok:true, why:"Right. North Korea joined and announced its withdrawal in 2003."},
     {t:"China, France and the United Kingdom", why:"All three are recognised nuclear-weapon states inside the NPT."},
     {t:"Russia and the United States", why:"Both are parties."},
     {t:"Japan and South Korea", why:"Both are non-nuclear-weapon states party to the NPT."}]},
   {id:"e4u12-q30", lesson:"e4u12-l4", level:1, q:"When did the TPNW enter into force?", options:[
     {t:"22 January 2021", ok:true, why:"Right, 90 days after the 50th ratification."},
     {t:"7 July 2017", why:"That is when it was adopted."},
     {t:"1970", why:"That is the NPT."},
     {t:"It has not entered into force", why:"It has, since 2021."}]},
   {id:"e4u12-q31", lesson:"e4u12-l4", level:3, q:"Dmitri writes: “The TPNW proves that nuclear deterrence is immoral.” How should he revise it for a neutral seminar paper?", options:[
     {t:"Attribute the claim: supporters argue the weapons are unacceptable on humanitarian grounds; nuclear-armed states and allies argue deterrence keeps them secure", ok:true, why:"Yes. A treaty is evidence of states’ positions, not proof of a moral claim."},
     {t:"Keep it, since the treaty is international law", why:"It binds only its parties and cannot settle a moral debate."},
     {t:"Replace it with “the TPNW is meaningless”", why:"Equally one-sided."},
     {t:"Delete all mention of the TPNW", why:"Omission is not neutrality."}]},
   {id:"e4u12-q32", lesson:"e4u12-l4", level:2, q:"India and Pakistan, both nuclear-armed, fought a limited conflict at Kargil in 1999. Which concept do scholars often use to discuss this?", options:[
     {t:"The stability–instability paradox", ok:true, why:"Right: nuclear stability may make limited conflict more thinkable."},
     {t:"The nuclear taboo", why:"Relevant to non-use, but not the usual explanation for limited conventional conflict."},
     {t:"Hub and spoke", why:"An alliance structure."},
     {t:"The resource curse", why:"A civil war concept about natural resources, unrelated to nuclear dyads."}]},
   {id:"e4u12-q33", lesson:"e4u12-l4", level:1, q:"Which states withdrew from the Mine Ban Convention with effect in December 2025?", options:[
     {t:"Estonia, Latvia and Lithuania", ok:true, why:"Right; Finland and Poland followed in early 2026."},
     {t:"Canada and Norway", why:"Both were champions of the ban."},
     {t:"Japan and South Korea", why:"Japan is a party and did not withdraw; South Korea has not joined."},
     {t:"Brazil and Mexico", why:"Not among the withdrawing states."}]},
   {id:"e4u12-q34", lesson:"e4u12-l4", level:2, q:"What does the Arms Trade Treaty require of exporting states?", options:[
     {t:"Not to authorise transfers that would be used for genocide or certain war crimes, and to assess export risks", ok:true, why:"Right (Articles 6 and 7)."},
     {t:"To stop all arms exports", why:"It regulates, not bans, the trade."},
     {t:"To export only to democracies", why:"No such rule."},
     {t:"To register all civilian firearms", why:"Domestic ownership is outside its scope."}]},
   {id:"e4u12-q35", lesson:"e4u12-l4", level:3, q:"A blogger in November 2026 writes: “The UN has banned killer robots.” What is accurate?", options:[
     {t:"A CCW expert group adopted a report on elements of a possible instrument in September 2026; no ban treaty exists, and the Review Conference was due to consider the report", ok:true, why:"Yes. The report sets out a two-tier approach without prejudging its legal nature."},
     {t:"The General Assembly adopted a binding ban in 2023", why:"Assembly resolutions on LAWS are not binding bans."},
     {t:"The ICRC banned them", why:"The ICRC is not a law-making body; it called for a treaty."},
     {t:"Autonomous weapons have never been discussed internationally", why:"Talks under the CCW date from 2014."}]},
   {id:"e4u12-q36", lesson:"e4u12-l4", level:2, q:"According to Jones and Libicki’s RAND study (2008), what ended relatively few terrorist groups?", options:[
     {t:"Military force", ok:true, why:"Right. Most groups ended by entering politics or through policing and intelligence."},
     {t:"Policing and intelligence", why:"This was one of the most common endings."},
     {t:"Joining the political process", why:"This was among the most common endings."},
     {t:"The study found no patterns", why:"It found clear patterns."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u12-q37", lesson:"e4u12-l5", level:1, q:"Which arrangement is a “spoke” of the US hub-and-spoke system?", options:[
     {t:"The US–Philippines Mutual Defense Treaty (1951)", ok:true, why:"Right: a bilateral treaty with Washington."},
     {t:"The ASEAN Regional Forum", why:"An inclusive multilateral forum."},
     {t:"The East Asia Summit", why:"A leaders’ forum."},
     {t:"The China–North Korea treaty of 1961", why:"A bilateral treaty outside the US system."}]},
   {id:"e4u12-q38", lesson:"e4u12-l5", level:2, q:"Cha’s “powerplay” explains bilateral US alliances in Asia mainly as:", options:[
     {t:"A way for Washington to control and restrain allies from dragging it into wars", ok:true, why:"Right: control of allies is the core of his argument."},
     {t:"A result of Asian states refusing all alliances", why:"Not his argument."},
     {t:"A product of shared identity with Asian allies", why:"Hemmer and Katzenstein argued the reverse: a lack of shared identity."},
     {t:"An accident of geography only", why:"Cha stressed deliberate strategy."}]},
   {id:"e4u12-q39", lesson:"e4u12-l5", level:1, q:"How many participants does the ASEAN Regional Forum have?", options:[
     {t:"27", ok:true, why:"Right: ASEAN members plus its dialogue partners and others."},
     {t:"10", why:"That was ASEAN’s membership before Timor-Leste joined in 2025."},
     {t:"18", why:"That is the size of the East Asia Summit before Timor-Leste’s admission to ASEAN."},
     {t:"193", why:"That is UN membership."}]},
   {id:"e4u12-q40", lesson:"e4u12-l5", level:3, q:"Oluwaseun argues that ASEAN forums are “just talk”. Which response draws on research rather than opinion?", options:[
     {t:"Johnston (2008) found that participation in the ARF and similar bodies changed Chinese officials’ thinking about multilateral security, though Jones and Smith (2007) argued such forums make process, not progress", ok:true, why:"Yes: evidence on both sides, attributed."},
     {t:"ASEAN forums are obviously successful", why:"An assertion without evidence."},
     {t:"ASEAN forums are obviously useless", why:"Also an assertion."},
     {t:"No one has studied ASEAN forums", why:"False: a large literature exists on both sides."}]},
   {id:"e4u12-q41", lesson:"e4u12-l5", level:1, q:"What does AUKUS aim to give Australia under its first pillar?", options:[
     {t:"Nuclear-powered, conventionally armed submarines", ok:true, why:"Right: nuclear-powered, not nuclear-armed."},
     {t:"Nuclear weapons", why:"AUKUS does not provide nuclear weapons."},
     {t:"Aircraft carriers", why:"Not part of AUKUS."},
     {t:"A seat on the Security Council", why:"Unrelated: AUKUS is about capabilities."}]},
   {id:"e4u12-q42", lesson:"e4u12-l5", level:2, q:"Which statement about the Korean Armistice Agreement is accurate?", options:[
     {t:"It was signed on 27 July 1953 by the UN Command, the Korean People’s Army and the Chinese People’s Volunteers; South Korea did not sign", ok:true, why:"Right: an armistice, with no peace treaty since."},
     {t:"It was a full peace treaty", why:"It is an armistice; no peace treaty has followed."},
     {t:"South Korea and North Korea signed it alone", why:"South Korea did not sign."},
     {t:"It was signed in 1950", why:"The war began in 1950; the armistice came in 1953."}]},
   {id:"e4u12-q43", lesson:"e4u12-l5", level:3, q:"Which sentence on cross-Strait relations is accurate and neutral?", options:[
     {t:"“The PRC says Taiwan is part of China and seeks reunification; Taiwan’s government says the ROC is sovereign and not subordinate to the PRC.”", ok:true, why:"Each position is attributed."},
     {t:"“Taiwan is a province of China.”", why:"One side’s position stated as fact."},
     {t:"“Taiwan is an independent country recognised by most states.”", why:"Inaccurate: 12 states recognised the ROC as of mid-2026, and the status claim is one side’s."},
     {t:"“The United States recognises Taiwan as a state.”", why:"Inaccurate: the US recognises the PRC and keeps unofficial ties with Taiwan."}]},
   {id:"e4u12-q44", lesson:"e4u12-l5", level:2, q:"A coast guard vessel blocks a supply mission to a disputed reef using water cannon, without firing weapons. Analysts would most likely call this:", options:[
     {t:"Grey-zone activity", ok:true, why:"Right: coercion below the threshold of armed conflict."},
     {t:"An interstate war", why:"No armed conflict at that level is involved."},
     {t:"Peacekeeping", why:"Not a peace operation."},
     {t:"A securitising move", why:"That is a speech act; this is a physical action at sea."}]},
   {id:"e4u12-q45", lesson:"e4u12-l5", level:2, q:"As of mid-2026, what was the status of the ASEAN–China code of conduct for the South China Sea?", options:[
     {t:"Still under negotiation; the Philippines aimed to conclude it during its 2026 ASEAN chairmanship", ok:true, why:"Right, as reported around the May 2026 ASEAN summit; it was still not concluded in early November 2026."},
     {t:"Signed and in force since 2002", why:"2002 was the non-binding Declaration on the Conduct of Parties."},
     {t:"Abandoned in 2016", why:"Talks continued after 2016."},
     {t:"Replaced by the Quad", why:"The Quad is unrelated to the code."}]}
  ]
});
