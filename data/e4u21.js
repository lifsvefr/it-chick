/* International Studies · Unit 21 · South Asia, the Pacific islands and the Indo-Pacific */
ICA.addUnit({
  id:"e4u21", track:"e4", n:21, title:"South Asia, the Pacific islands and the Indo-Pacific", icon:"🪷",
  blurb:"Two regions that seminars often skip, and the idea that joins them to East Asia: South Asia’s states and their contested politics, India’s foreign policy from non-alignment to multi-alignment, the Pacific islands’ regionalism and their place in great-power competition, the Indo-Pacific as a map that governments draw differently, and how scholars compare regions in Asia. Contested issues are told neutrally, with each side’s position attributed and dated as of November 2026.",
  goals:[
    "Describe the main political systems of South Asia and the scholarly debates about India’s democracy, Pakistan’s civil–military relations and the 2022–2026 upheavals in Sri Lanka, Bangladesh and Nepal, attributing every contested claim",
    "Explain how India’s foreign policy moved from Nehru’s non-alignment to strategic autonomy and multi-alignment, and set out each government’s position on the India–China boundary and on Kashmir",
    "Use Pacific perspectives (Hau‘ofa’s “sea of islands”, the Blue Pacific) to analyse Pacific regionalism, climate diplomacy, great-power competition and the self-determination questions in Bougainville and New Caledonia",
    "Trace the Indo-Pacific from a sea-lane idea to official strategies, compare the Australian, Indian, US, ASEAN and EU versions, and present the critiques",
    "Compare regionalism in East, Southeast and South Asia and the Pacific with concepts such as regionalisation, open regionalism, porous regions and security communities",
    "Plan and argue a seminar comparison of two Asian or Pacific regions, with a counter-argument"
  ],
  read:[
    {book:"bjpip", where:"Chapter 1 “Religious Nationalism and India’s Future” and Chapter 6 “The BJP and Indian Grand Strategy”", note:"A free collection of essays on India’s politics and foreign policy since 2014, with several authors and viewpoints. Read it alongside the government’s own statements."},
    {book:"newpacdip", where:"Chapter 1 “The ‘New Pacific Diplomacy’: An Introduction” (Greg Fry and Sandra Tarte)", note:"Open-access essays by Pacific and other scholars on how island states took control of their diplomacy after 2009."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong) and Chapter 17 “Global South Perspectives”", note:"Short chapters on theorising from Asia and the Global South; useful for Lessons 4 and 5."},
    {book:"owh2", where:"Chapter 14, section 14.3 “The Non-Aligned Movement”", note:"Background to Nehru’s non-alignment, with primary sources."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u21-l1", title:"South Asia’s states and politics", minutes:60,
   hook:{q:"Between 2022 and 2025, in how many South Asian countries did mass street protests help bring down a sitting government?", options:["None","One","Three","Six"], answer:2, reveal:"**Three.** In Sri Lanka (2022) protesters forced the president out during an economic collapse; in Bangladesh (2024) a student-led uprising ended Sheikh Hasina’s fifteen years in power; and in Nepal (2025) youth-led “Gen Z” protests brought down the government. Each country then held an election that brought a new government to power. This lesson looks at the region’s states, at India’s and Pakistan’s long-running debates, and at what these upheavals do and do not tell us."},
   goals:[
     "Name South Asia’s states and their political systems, with the leaders in office as of November 2026",
     "Explain the debate over the direction of India’s democracy, attributing each position and its evidence",
     "Use the concepts of civil–military relations, hybrid regime and Milbus to analyse Pakistan",
     "Summarise Bangladesh’s transition from the July 2024 uprising to the February 2026 election, neutrally",
     "Compare the protest-and-election cycles in Sri Lanka, Bangladesh and Nepal without over-generalising"
   ],
   learn:[
    {h:"One large state and many neighbours", body:[
      {lead:"South Asia is usually defined as the eight members of the South Asian Association for Regional Cooperation: Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka."},
      "Two facts shape almost everything. First, **asymmetry**: India is far larger than all its neighbours combined in population and economy, and it borders, by land or sea, almost every other member. Neighbours often see Indian policy as decisive for them, while Indian leaders see a neighbourhood full of risks. Second, a **shared colonial past** with very different exits: the 1947 [[partition]] of British India (Unit 1), Bangladesh’s independence from Pakistan in 1971, and Nepal and Bhutan, which were never colonised but lived under British influence.",
      "The region is not one political type. Unit 12 described it as a [[regional-security-complex|regional security complex]] centred on India and Pakistan; politically it contains federal parliamentary republics, monarchies and an unrecognised government.",
      {table:[
        ["State","System","In office (Nov 2026)"],
        ["India","Federal parliamentary republic","PM Narendra Modi (since 2014; third term 2024)"],
        ["Pakistan","Federal parliamentary republic","PM Shehbaz Sharif; President Asif Ali Zardari"],
        ["Bangladesh","Parliamentary republic","PM Tarique Rahman (since February 2026)"],
        ["Sri Lanka","Executive presidency","President Anura Kumara Dissanayake (since 2024)"],
        ["Nepal","Federal parliamentary republic (a republic since 2008)","PM Balendra Shah (since March 2026)"],
        ["Bhutan","Constitutional monarchy (since 2008)","PM Tshering Tobgay"],
        ["Maldives","Presidential republic","President Mohamed Muizzu"],
        ["Afghanistan","Taliban administration since August 2021","Not recognised by most states"]
      ]},
      {tip:"Date every row like this one. Most of these entries changed at least once between 2022 and 2026."}
    ]},
    {h:"India: the debate about the world’s largest democracy", body:[
      "For two decades after independence India was governed by the Indian National Congress. The political scientist Rajni Kothari called this the [[congress-system|“Congress system”]] (*Asian Survey*, 1964): one dominant “party of consensus” that absorbed rival factions, with opposition parties acting as “parties of pressure” at its margins. The system weakened in the late 1960s; during the Emergency of 1975–77 Prime Minister Indira Gandhi suspended civil liberties, and in 1977 Congress lost a national election for the first time. After 1989 coalition governments became the norm.",
      "Since 2014 the Bharatiya Janata Party (BJP) under Narendra Modi has led India. Its ideological tradition is [[hindutva|Hindutva]], a form of Hindu nationalism that defines Indian nationhood in Hindu cultural terms. In the 2024 general election, held in seven phases for an electorate of more than 960 million, the BJP won 240 of 543 seats, short of the 272 needed for a majority; its National Democratic Alliance won 293 and Modi began a third term. The opposition INDIA bloc won 234.",
      "Scholars and rating bodies disagree sharply about the direction of travel:",
      {list:[
        "**A democracy in decline.** The V-Dem Institute has classified India as an [[electoral-autocracy|electoral autocracy]] since its 2021 report, and kept it there in 2026. Freedom House downgraded India to “Partly Free” in 2021; its 2026 report scores it 62 out of 100. Christophe Jaffrelot’s *Modi’s India: Hindu Nationalism and the Rise of Ethnic Democracy* (2021) argues that India has become an ethnic democracy in which minorities, above all Muslims, are marginalised.",
        "**A contested measurement.** India’s government rejects these rankings. In March 2021 External Affairs Minister S. Jaishankar spoke of the “hypocrisy” of “self-appointed custodians of the world”; in 2022 a working paper for the Prime Minister’s Economic Advisory Council criticised the methods of Freedom House, V-Dem and the Economist Intelligence Unit as opaque and perception-based.",
        "**Competition persists.** Many observers, including some critics of the government, read the 2024 result, in which the ruling party lost its majority, as evidence that elections remain genuinely competitive."
      ]},
      {key:"In a seminar, separate three questions: what the indicators measure, how robust their methods are, and what the trends mean. People who agree on the first can still disagree on the third."}
    ]},
    {h:"Pakistan: who governs?", body:[
      "[[civil-military-relations|Civil–military relations]] are the balance of power between elected governments and the armed forces. Pakistan is the region’s classic case. Generals took power directly in 1958, 1977 and 1999, ruling for more than three decades in all, and civilian governments in between have worked under what Pakistanis call [[pakistan-establishment|“the establishment”]]: the army leadership and the intelligence services.",
      "Two works explain why. The historian {{ayesha-jalal|Ayesha Jalal}}, in *The State of Martial Rule* (1990), traced how between 1947 and 1965 the army and the civil bureaucracy, backed by Cold War alliances, came to dominate the new state’s institutions over weak political parties. Ayesha Siddiqa’s *Military Inc.* (2007) coined [[milbus|Milbus]] for military capital used for the benefit of officers but kept outside the defence budget, and argued that these business interests give the army a stake in steering politics.",
      {fig:'<svg viewBox="0 0 340 360"><text x="10" y="22">Civil–military relations: a spectrum</text><path class="d-ink" d="M30,44 V330" stroke-width="2"/><path class="d-inkf" d="M30,338 L24,326 H36 Z"/><rect class="d-sage" x="46" y="38" width="286" height="62" rx="8" stroke-width="2"/><text x="56" y="60">Civilian supremacy</text><text class="s" x="56" y="78">Elected leaders set defence policy</text><text class="s" x="56" y="93">and choose the generals</text><rect class="d-soft" x="46" y="110" width="286" height="62" rx="8" stroke-width="2"/><text x="56" y="132">Civilian rule, military veto</text><text class="s" x="56" y="150">Pakistan 1988–99 and 2008–18,</text><text class="s" x="56" y="165">in many scholars’ view</text><rect class="d-gold" x="46" y="182" width="286" height="62" rx="8" stroke-width="2"/><text x="56" y="204">Hybrid: elected façade,</text><text x="56" y="221">military steering</text><text class="s" x="56" y="238">How critics describe 2018 onwards</text><rect class="d-rose" x="46" y="254" width="286" height="62" rx="8" stroke-width="2"/><text x="56" y="276">Direct military rule</text><text class="s" x="56" y="294">1958–71, 1977–88, 1999–2008</text><text class="s" x="56" y="309">(Ayub/Yahya, Zia, Musharraf)</text><text class="s" x="40" y="352">More military power further down</text></svg>', alt:"A vertical spectrum with four boxes. At the top, civilian supremacy: elected leaders set defence policy and choose the generals. Next, civilian rule with a military veto: Pakistan 1988 to 1999 and 2008 to 2018 in many scholars’ view. Next, hybrid, an elected façade with military steering: how critics describe 2018 onwards. At the bottom, direct military rule: 1958 to 1971, 1977 to 1988 and 1999 to 2008, under Ayub and Yahya, Zia, and Musharraf. An arrow points down towards more military power.", cap:"Placing a period on the spectrum is an argument, not a fact: governments and the military reject the “hybrid” label."},
      "Since 2018 critics have described a [[hybrid-regime|hybrid regime]]: elections and civilian governments, with the military steering behind them. Imran Khan, prime minister from 2018, lost a no-confidence vote in April 2022 and has been in prison since 2023; his party says the cases against him are political, while the authorities say they are matters for the courts. In November 2025 parliament passed the 27th Amendment. It created a constitutional post of **Chief of Defence Forces**, held by the army chief (Field Marshal Asim Munir), gave lifetime legal immunity to the president and to holders of five-star rank, and set up a Federal Constitutional Court. The government presented it as modernising the command structure; critics, including UN human rights officials and Chatham House analysts, said it formalised military dominance and weakened the courts."
    ]},
    {h:"Bangladesh: from uprising to election", body:[
      "In July 2024 students protested after a court restored quotas for government jobs. The protests grew into the [[july-uprising|July uprising]] against Prime Minister Sheikh Hasina of the Awami League, in power since 2009. A UN human rights fact-finding report (February 2025) estimated that as many as 1,400 people were killed between 1 July and 15 August 2024, most of them shot by security forces, and found reasonable grounds to believe crimes against humanity may have been committed. It also documented revenge attacks on Awami League supporters, police and journalists, and abuses against Hindus, Ahmadiyya Muslims and Indigenous peoples. Hasina left for India on 5 August 2024.",
      "An interim government led by the economist Muhammad Yunus, as Chief Adviser, then took office. It was not the formal [[caretaker-government|caretaker government]] system that Bangladesh used to run elections from 1996 until it was abolished in 2011, but it played a similar role. Most parties signed a reform programme, the [[july-charter|July Charter]], in October 2025. On 12 February 2026 Bangladesh voted in a general election and, on the same day, a referendum on the Charter, which 68% approved. The Awami League was barred and its activities banned. The Bangladesh Nationalist Party (BNP) won 209 of the 300 directly elected seats; Jamaat-e-Islami won a record 68 and leads the opposition; the student-founded National Citizen Party won 6. Tarique Rahman of the BNP became prime minister on 17 February 2026.",
      "Positions differ. In November 2025 a domestic tribunal sentenced Hasina to death in absentia for crimes against humanity; she denies the charges, calls the tribunal “rigged” and politically motivated, and says the election excluded her party. The interim government and its supporters said that barring the party was needed for accountability. The European Union’s observers called the election “credible and competently managed”, while noting sporadic local violence and limits on inclusion. How to implement the Charter, whose reforms need constitutional amendments, remained disputed: as of November 2026 the BNP government was drafting amendments through a parliamentary committee, while the Jamaat-led opposition insisted on a separate constitutional reform council."
    ]},
    {h:"Sri Lanka and Nepal: crisis, protest and the ballot", body:[
      "**Sri Lanka.** In 2022 a foreign-currency crisis brought fuel queues and power cuts, and the country defaulted on its external debt (Unit 15 covers the restructuring). The protest movement known as the [[aragalaya|aragalaya]] (“struggle” in Sinhala) forced President Gotabaya Rajapaksa to flee and resign in July 2022. In 2024 voters elected Anura Kumara Dissanayake of the National People’s Power, a coalition led by a party with Marxist origins, as president, and gave the alliance a two-thirds majority in parliament. His government kept the IMF programme it inherited; in September 2026 IMF staff reported eleven consecutive quarters of growth, alongside recovery from Cyclone Ditwah.",
      "**Nepal.** After a civil war (1996–2006) and the abolition of the monarchy in 2008, Nepal adopted a federal constitution in 2015. In September 2025 youth-led protests, many of them organised online, met deadly force; the government fell, parliament was dissolved and a former chief justice, Sushila Karki, led an interim government. In the March 2026 election the Rastriya Swatantra Party (RSP) won 182 of 275 seats, and Balendra Shah, a former rapper and mayor of Kathmandu, became prime minister.",
      {warn:"Avoid the tempting story of one “South Asian Spring”. The triggers differed (economic collapse, a quota ruling, a social-media ban among other grievances), so did the role of armies and courts, and new governments face old constraints."}
    ]}
   ],
   try:[
    {id:"e4u21-l1-x1", type:"match", q:"Match each state to its political system as of November 2026.", pairs:[
      ["Bhutan","Constitutional monarchy since 2008","Its first parliamentary elections and its written constitution (both 2008) ended absolute monarchy."],
      ["Sri Lanka","Executive presidency","The president is directly elected and heads the government."],
      ["Nepal","Federal parliamentary republic, without a king since 2008","The monarchy was abolished in 2008; the federal constitution followed in 2015."],
      ["Afghanistan","Taliban administration not recognised by most states","In power since August 2021."]
    ]},
    {id:"e4u21-l1-x2", type:"sort", q:"Each statement is part of the debate about India’s democracy. Is it mainly about **measurement**, or about **interpretation**?", buckets:["Measurement: how good is the indicator?","Interpretation: what do the trends mean?"], items:[
      {t:"V-Dem’s scores rest on expert coders, and the EAC-PM paper calls such methods perception-based", b:0, why:"A claim about how the data are produced."},
      {t:"Freedom House scored India 62 out of 100 in 2026, but critics question how its scores are weighted", b:0, why:"About the reliability of a measure."},
      {t:"Jaffrelot argues India has become an “ethnic democracy”", b:1, why:"An interpretation of what political change amounts to."},
      {t:"The BJP’s loss of its majority in 2024 shows elections remain competitive", b:1, why:"An argument about what an observed outcome means."},
      {t:"Regular changes of government after state elections show that power still changes hands", b:1, why:"An argument about what observed evidence means."}
    ]},
    {id:"e4u21-l1-x3", type:"mcq", q:"Which statement about the 2024 Indian general election is accurate?", options:[
      {t:"The BJP won 240 of 543 seats, short of a majority, and governs with allies in the National Democratic Alliance", ok:true, why:"Right: 272 seats are needed; the NDA won 293."},
      {t:"The BJP won a two-thirds majority on its own", why:"It won 240 seats, fewer than in 2019, and needs its allies."},
      {t:"The Congress party won the most seats", why:"Congress won 99; the opposition INDIA bloc won 234 in total."},
      {t:"It was held in one day", why:"Polling ran in seven phases from 19 April to 1 June 2024."}
    ]},
    {id:"e4u21-l1-x4", type:"mcq", q:"Ayesha Siddiqa’s concept of Milbus describes…", options:[
      {t:"Military capital used for the benefit of officers and kept outside the defence budget, which gives the army a stake in steering politics", ok:true, why:"Right: her 2007 book *Military Inc.* traced the business empire and its political effects."},
      {t:"A Pakistani bus company owned by the government", why:"A distractor based on the word’s sound; Milbus means military business."},
      {t:"Foreign military aid from the United States", why:"Aid shaped the early state (Jalal’s argument), but Milbus is the military’s own internal economy."},
      {t:"The army’s official defence budget", why:"Milbus is precisely what is *not* in the budget."}
    ]},
    {id:"e4u21-l1-x5", type:"order", q:"Put Bangladesh’s transition in order.", items:[
      {t:"Students protest a court ruling that restores job quotas", why:"July 2024."},
      {t:"Sheikh Hasina leaves for India; an interim government under Muhammad Yunus takes office", why:"5–8 August 2024."},
      {t:"A UN fact-finding report estimates up to 1,400 deaths in the crackdown", why:"February 2025."},
      {t:"Most parties sign the July Charter", why:"October 2025."},
      {t:"Election and referendum; the BNP wins and Tarique Rahman becomes prime minister", why:"12 and 17 February 2026."}
    ]},
    {id:"e4u21-l1-x6", type:"spot", q:"A student’s summary of Pakistan’s 27th Amendment. Tap each sentence that is **wrong or one-sided**.", ask:"is wrong or one-sided", parts:[
      {t:"Parliament passed it in November 2025.", flag:false, why:"Correct."},
      " ",
      {t:"It created a constitutional post of Chief of Defence Forces, held by the army chief.", flag:false, why:"Correct."},
      " ",
      {t:"It abolished parliament and returned Pakistan to direct military rule.", flag:true, why:"Wrong. Parliament and an elected government remain; critics argue the amendment strengthens the military within that system."},
      " ",
      {t:"The government said it modernised the command structure; critics said it entrenched military power and weakened the courts.", flag:false, why:"Balanced and attributed."},
      " ",
      {t:"Everyone agrees it was simply a technical reform.", flag:true, why:"One-sided and false: UN human rights officials, opposition parties and analysts criticised it."}
    ]},
    {id:"e4u21-l1-x7", type:"mcq", q:"Priya argues: “Sri Lanka 2022, Bangladesh 2024 and Nepal 2025 prove that a single South Asian Spring is under way.” What is the strongest **neutral** response?", options:[
      {t:"The cases share youth mobilisation and anti-incumbent elections, but their triggers, the roles of armies and courts, and outcomes differ, so the claim needs careful comparison", ok:true, why:"Right: it takes the similarity seriously and tests it against the differences."},
      {t:"She is right; the three countries are essentially the same", why:"That ignores very different triggers and institutions."},
      {t:"Protests never matter in South Asia", why:"Untrue: these protests helped bring down three governments."},
      {t:"Only economic crises cause protests", why:"Bangladesh began over job quotas and Nepal amid a social-media ban and wider grievances."}
    ]}
   ],
   apply:{
    intro:"Work with official results and reports, and practise attributing positions.",
    tasks:[
     {t:"Build a dated fact sheet", how:[
       "Pick one South Asian state other than India.",
       "From its election commission or government website and one international news agency, note: system of government, head of government, date of the last national election, and the main opposition party.",
       "Add the date you checked each fact."
     ], write:"State… System… Leader (checked on…)… Last election… Main opposition…"},
     {t:"Two readings of one indicator", how:[
       "Open Freedom House’s or V-Dem’s latest entry for India, and the Indian government’s or the EAC-PM’s criticism of such indices.",
       "Write one neutral sentence for each side, beginning “X argues that…”.",
       "Note one question that would help you judge between them (for example: what exactly is measured?)."
     ], write:"Index says… Critics say… My question…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “hybrid regime” a useful label for Pakistan, or does it hide more than it shows?",
       "2. Can a transition that bars the former ruling party produce a more stable democracy? Discuss Bangladesh with care.",
       "3. What, if anything, do the Sri Lankan, Bangladeshi and Nepali upheavals have in common?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"A dated fact sheet for one state, two attributed readings of a democracy index, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"bjpip", where:"Chapter 1 “Religious Nationalism and India’s Future” and Chapter 3 “The BJP’s Electoral Arithmetic”", note:"Background on India since 2014; compare with the indices and the government’s replies discussed in the lesson."},
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard)", note:"A refresher on states and other actors before the case studies."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u21-l2", title:"India in the world", minutes:65,
   hook:{q:"The “Five Principles of Peaceful Coexistence”, which India and China both still cite, first appeared in 1954 in which document?", options:["The UN Charter","An India–China agreement on trade with the Tibet region","The final communiqué of the Bandung Conference","The founding declaration of the Non-Aligned Movement"], answer:1, reveal:"**An India–China agreement on trade and travel with the Tibet region**, signed on 29 April 1954. Its preamble listed mutual respect for territorial integrity and sovereignty, non-aggression, non-interference, equality and mutual benefit, and peaceful coexistence. Eight years later the two states fought a border war, and the boundary is still not agreed. This lesson follows India’s foreign policy from Nehru to today: its neighbours, China, Pakistan and Kashmir, the Quad and the Global South."},
   goals:[
     "Explain non-alignment, strategic autonomy and multi-alignment, and the debate about how new India’s current approach is",
     "Describe India’s regional policies (Neighbourhood First, Act East, SAGAR/MAHASAGAR, the Indo-Pacific Oceans Initiative)",
     "Set out India’s and China’s positions on their boundary, and the main events from 1962 to the 2026 talks",
     "Set out India’s and Pakistan’s positions on Kashmir neutrally, with the UN’s role and the events of 2019–2025",
     "Assess India’s claim to speak for the Global South, with evidence from its 2023 G20 presidency"
   ],
   learn:[
    {h:"From non-alignment to strategic autonomy", body:[
      {lead:"India’s first prime minister, {{jawaharlal-nehru|Jawaharlal Nehru}} (1947–64), wanted a newly free country to stay out of the Cold War blocs."},
      "Nehru helped organise the Bandung Conference of 1955 (Unit 1) and co-founded the [[non-aligned-movement|Non-Aligned Movement]] at Belgrade in 1961. With China he agreed the five principles of [[panchsheel|Panchsheel]] (1954). Non-alignment did not mean neutrality on every issue: India took strong positions against colonialism and apartheid, and in 1971, before the war that created Bangladesh, it signed a treaty of friendship with the Soviet Union.",
      "After the Cold War India opened its economy (1991), tested nuclear weapons (1998) and built close ties with the United States, Japan and Europe while keeping old links with Russia. Officials now describe the goal as [[strategic-autonomy|strategic autonomy]]: keeping freedom of action by not joining any alliance. External Affairs Minister S. Jaishankar’s book *The India Way* (2020) recommends [[multi-alignment|multi-alignment]]: working with many partners on different issues, with “convergence with many but congruence with none”.",
      "Is this new? Jaishankar describes old non-alignment as “an earlier posture of abstention or non-involvement”. The US analyst Ashley Tellis, reviewing the book in 2021, called that judgement of Nehru “a tad harsh” and summed up the strategy as “non-allied forever”: India will cooperate closely with the United States without becoming an ally. Some Indian scholars see continuity with Nehru’s search for autonomy; others see a sharper, more transactional realism.",
      "Theory offers different readings. Realists see a rising power hedging between the United States and China while it builds its strength. Liberals point to India’s deepening economic ties and its role in institutions. Constructivists stress identity: a civilisational self-image and memories of colonial rule that make formal alliances unattractive; Jaishankar himself draws on the *Mahabharata* in a chapter called “Krishna’s Choice”.",
      {key:"Non-alignment, strategic autonomy and multi-alignment share one aim, freedom of action; they differ in how actively India works with the great powers."}
    ]},
    {h:"Circles of priority", body:[
      "Analysts often draw India’s policy as circles around a centre. Each circle has had its own label:",
      {list:[
        "[[neighbourhood-first|Neighbourhood First]] (from 2014): priority to connectivity, trade and aid for South Asian neighbours.",
        "[[act-east-policy|Act East]]: the upgrade under Modi of the Look East policy begun in 1992, aimed at Southeast and East Asia.",
        "[[sagar-doctrine|SAGAR]], “Security and Growth for All in the Region”, announced in Mauritius in March 2015 for the Indian Ocean, expanded in 2025 into MAHASAGAR, “Mutual and Holistic Advancement for Security and Growth Across Regions”.",
        "The [[ipoi|Indo-Pacific Oceans Initiative]] (2019), India’s contribution to the Indo-Pacific idea (Lesson 4)."
      ]},
      {fig:'<svg viewBox="0 0 340 384"><text x="10" y="22">Circles of priority</text><rect class="d-panel" x="8" y="34" width="324" height="340" rx="12" stroke-width="2"/><rect class="d-soft" x="24" y="80" width="292" height="248" rx="12" stroke-width="2"/><rect class="d-gold" x="44" y="116" width="252" height="176" rx="12" stroke-width="2"/><rect class="d-sage" x="84" y="150" width="172" height="108" rx="12" stroke-width="2"/><text class="s" x="170" y="58" text-anchor="middle">Global South and multilateral forums</text><text class="s" x="170" y="364" text-anchor="middle">G20, UN, Voice of the Global South</text><text class="s" x="170" y="102" text-anchor="middle">Major powers: US, Russia, China, EU, Japan</text><text class="s" x="170" y="318" text-anchor="middle">Quad, BRICS, SCO</text><text class="s" x="170" y="138" text-anchor="middle">Indian Ocean, Southeast Asia, Gulf</text><text class="s" x="170" y="282" text-anchor="middle">SAGAR, Act East</text><text x="170" y="196" text-anchor="middle">India and</text><text x="170" y="214" text-anchor="middle">its neighbours</text><text class="s" x="170" y="240" text-anchor="middle">Neighbourhood First</text></svg>', alt:"Four nested boxes. At the centre, India and its neighbours, labelled Neighbourhood First. The next box: the Indian Ocean, Southeast Asia and the Gulf, labelled SAGAR and Act East. The next box: major powers, the United States, Russia, China, the EU and Japan, labelled Quad, BRICS and SCO. The outer box: the Global South and multilateral forums, labelled G20, UN and the Voice of the Global South.", cap:"An analytical sketch, not an official map. Note that India sits in the Quad with the United States and in BRICS and the SCO with China and Russia."},
      "Neighbours see these policies differently. Smaller states often welcome Indian aid and connectivity while worrying about interference and about India’s size; several have balanced India with closer ties to China, a pattern scholars describe as [[strategic-hedging|hedging]]. The regional body, SAARC, has been stalled since 2016 (Lesson 5).",
      "Two examples show how contested these relationships are. In 2015 Nepal’s government accused India of imposing an unofficial blockade during protests over Nepal’s new constitution; India said the disruption was caused by protesters inside Nepal. Since December 2024 Bangladesh has formally asked India to return Sheikh Hasina to face trial, and repeated the request after her death sentence in November 2025; India has not done so, and relations, close under Hasina, have had to be rebuilt."
    ]},
    {h:"India and China: a boundary without agreement", body:[
      "The two states share a long, disputed and largely unmarked boundary; India gives its length as 3,488 km. Neither side has published a full map that the other accepts.",
      {table:[
        ["Sector","India’s position","China’s position"],
        ["Western (Aksai Chin)","Part of Ladakh, occupied by China","Part of Chinese territory, administered by China since the 1950s"],
        ["Eastern","The [[mcmahon-line|McMahon Line]] (1914) is the boundary; Arunachal Pradesh is an Indian state","The McMahon Line is illegal; China claims most of Arunachal Pradesh as “Zangnan”"]
      ]},
      "In October–November 1962 China defeated India in a short war, then declared a ceasefire and withdrew its forces in the east, while keeping Aksai Chin in the west. What separates the two armies is the [[line-of-actual-control|Line of Actual Control]] (LAC), whose exact course each side reads differently. Agreements in 1993 and 1996 kept it largely quiet, and a 2005 agreement set political parameters for a settlement. In June 2020 a clash in the Galwan valley killed 20 Indian soldiers; China acknowledged four deaths in February 2021. Each side blamed the other.",
      "Talks continued. In October 2024 the two governments reached an understanding that ended the standoff in eastern Ladakh, and in August 2026 their Special Representatives agreed eight points in Beijing, including work towards an “early harvest” on delimiting the boundary and new military hotlines. India says peace on the border is the basis for normal relations; China says the boundary question should be put in its appropriate place within the wider relationship rather than defining it."
    ]},
    {h:"India and Pakistan: Kashmir", body:[
      "The former princely state of Jammu and Kashmir is divided. India and Pakistan each administer part of it, and China administers Aksai Chin and the Shaksgam valley, an area placed on China’s side by a 1963 China–Pakistan boundary agreement that Pakistan describes as provisional and India does not recognise. India and Pakistan fought over it in 1947–48 and 1965. Their 1971 war ended in the [[simla-agreement|Simla Agreement]] (1972), which turned the ceasefire line into the [[line-of-control|Line of Control]], and in 1999 they clashed again at Kargil.",
      {table:[
        ["Issue","India’s position","Pakistan’s position"],
        ["Status","The whole state acceded to India in October 1947 and is an integral part of India","The territory is disputed; its future should be decided by Kashmiris, in line with UN resolutions"],
        ["How to settle it","Bilaterally, under the Simla Agreement; no third-party role","Through UN Security Council resolutions and international involvement"],
        ["UN observers ([[unmogip|UNMOGIP]], since 1949)","Their mandate has lapsed","Their mandate continues; Pakistan still lodges complaints"]
      ]},
      "The UN Secretary-General’s position is that only the Security Council can end UNMOGIP. Kashmiri opinion is itself divided: parties and groups on each side of the line take different views, and some seek independence from both states.",
      "Recent events, dated: in August 2019 India removed the special status of Jammu and Kashmir under [[article-370|Article 370]] of its constitution and divided the state into two union territories; India’s Supreme Court unanimously upheld the change in December 2023, while Pakistan’s government “categorically” rejected the ruling. On 22 April 2025 gunmen killed 26 civilians, most of them tourists, near Pahalgam in Indian-administered Kashmir. India blamed groups based in Pakistan, which denied involvement; India put the [[indus-waters-treaty|Indus Waters Treaty]] (1960) “in abeyance”, and Pakistan said stopping its water would be “an act of war”. India struck targets in Pakistan and Pakistan-administered Kashmir on 7 May (Operation Sindoor), Pakistan retaliated, and a ceasefire took effect on 10 May. Pakistan’s prime minister credited US mediation; India said the two militaries agreed it directly."
    ]},
    {h:"The Quad and the voice of the Global South", body:[
      "India belongs to clubs that rarely share a table. It is a member of the [[quad|Quad]] with Australia, Japan and the United States (Unit 12), and it has insisted that the Quad is not a military alliance. It is also a founding member of BRICS and a member of the Shanghai Cooperation Organisation, both with China and Russia, and it chaired BRICS in 2026 (Unit 13). After Russia’s full-scale invasion of Ukraine in 2022 India abstained on UN General Assembly resolutions condemning it and increased its purchases of Russian oil, while calling for dialogue; Western governments criticised the oil purchases, and India’s government replied that it must secure affordable energy for its people.",
      "India also presents itself as a voice of the developing world. In January 2023 it convened the first [[voice-of-the-global-south|Voice of the Global South]] summit, a virtual meeting of 125 countries. During its [[g20|G20]] presidency, at the New Delhi summit of September 2023, the African Union became a permanent member. Supporters see a bridge between North and South. Sceptics note that India is now one of the world’s largest economies and a nuclear power, so its interests do not always match those of small or poor states, and that China also claims to lead the [[global-south|Global South]].",
      {terms:["panchsheel","strategic-autonomy","multi-alignment","neighbourhood-first","act-east-policy","sagar-doctrine","mcmahon-line","line-of-actual-control","simla-agreement","line-of-control","unmogip","article-370","indus-waters-treaty","voice-of-the-global-south"]}
    ]}
   ],
   try:[
    {id:"e4u21-l2-x1", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Non-alignment","Staying out of the Cold War blocs while taking positions issue by issue","Nehru’s policy, shared with the Non-Aligned Movement."],
      ["Strategic autonomy","Keeping freedom of action by not joining any alliance","The aim behind India’s policy since the Cold War."],
      ["Multi-alignment","Working closely with many partners on different issues, allied to none","Jaishankar: “convergence with many but congruence with none”."],
      ["Panchsheel","Five principles of peaceful coexistence agreed with China in 1954","Mutual respect for sovereignty, non-aggression, non-interference, equality and mutual benefit, peaceful coexistence."]
    ]},
    {id:"e4u21-l2-x2", type:"sort", q:"Which region or policy circle does each initiative mainly target?", buckets:["South Asian neighbours","Indian Ocean","Southeast and East Asia"], items:[
      {t:"Neighbourhood First", b:0, why:"Aimed at the immediate neighbours from 2014."},
      {t:"SAGAR, announced in Mauritius in 2015", b:1, why:"Security and Growth for All in the Region: the Indian Ocean."},
      {t:"Act East", b:2, why:"Successor to Look East (1992), aimed at ASEAN and East Asia."},
      {t:"Look East (1992)", b:2, why:"The original policy towards Southeast Asia after 1991."}
    ]},
    {id:"e4u21-l2-x3", type:"mcq", q:"Which description of the India–China boundary is accurate and neutral?", options:[
      {t:"India treats the McMahon Line as the eastern boundary and Aksai Chin as Indian territory; China rejects the McMahon Line and administers Aksai Chin", ok:true, why:"Right: it states both positions and the facts on the ground without endorsing either."},
      {t:"The boundary was fixed by a treaty both sides ratified in 1914", why:"China never accepted the 1914 McMahon Line."},
      {t:"China illegally occupies Aksai Chin", why:"That is India’s position stated as fact; a neutral account attributes it."},
      {t:"Arunachal Pradesh is Chinese territory known as Zangnan", why:"That is China’s position stated as fact."}
    ]},
    {id:"e4u21-l2-x4", type:"order", q:"Put these events in the India–China relationship in order.", items:[
      {t:"The Panchsheel principles are agreed", why:"April 1954."},
      {t:"A border war ends in Indian defeat and a Chinese ceasefire", why:"October–November 1962."},
      {t:"An agreement sets political parameters for settling the boundary", why:"2005."},
      {t:"A clash in the Galwan valley kills soldiers on both sides", why:"June 2020."},
      {t:"An understanding ends the standoff in eastern Ladakh", why:"October 2024."},
      {t:"Special Representatives agree an eight-point consensus in Beijing", why:"August 2026."}
    ]},
    {id:"e4u21-l2-x5", type:"spot", q:"A student’s paragraph on Kashmir. Tap each sentence that is **inaccurate or not neutral**.", ask:"is inaccurate or not neutral", parts:[
      {t:"India and Pakistan each administer part of the former princely state, and China administers Aksai Chin.", flag:false, why:"Accurate."},
      " ",
      {t:"The Simla Agreement of 1972 turned the ceasefire line into the Line of Control.", flag:false, why:"Accurate."},
      " ",
      {t:"Pakistan is right that the UN must settle the dispute.", flag:true, why:"Not neutral: this states one side’s position as correct. Attribute it: “Pakistan argues that…”."},
      " ",
      {t:"India’s Supreme Court upheld the 2019 change to Article 370 in December 2023.", flag:false, why:"Accurate."},
      " ",
      {t:"The UN observer mission was closed in 1972.", flag:true, why:"Inaccurate. UNMOGIP still operates; India says its mandate lapsed, Pakistan disagrees, and the UN says only the Security Council can end it."}
    ]},
    {id:"e4u21-l2-x6", type:"mcq", q:"Hana says: “India’s membership of both the Quad and BRICS is a contradiction.” Which reply best uses this lesson’s concepts?", options:[
      {t:"Under multi-alignment India joins different groups for different purposes, so membership of rival clubs is the strategy, not a contradiction", ok:true, why:"Right: the point of strategic autonomy is to avoid choosing one camp."},
      {t:"India has left BRICS", why:"Inaccurate: India chaired BRICS in 2026."},
      {t:"The Quad is a military alliance, so India must choose", why:"The Quad has no mutual defence commitment, and India stresses that it is not an alliance."},
      {t:"BRICS is a security alliance against the Quad", why:"BRICS is an economic and political club, not an alliance."}
    ]},
    {id:"e4u21-l2-x7", type:"mcq", q:"Which piece of evidence would a **sceptic** of India’s claim to lead the Global South most likely cite?", options:[
      {t:"India’s interests as a large economy and nuclear power do not always match those of small and poor states, and China makes a rival claim", ok:true, why:"Right: this questions whether one state can represent very different interests."},
      {t:"India convened a Voice of the Global South summit with 125 countries in 2023", why:"Supporters cite this as evidence for the claim."},
      {t:"The African Union joined the G20 during India’s presidency", why:"Supporters also cite this."},
      {t:"India co-founded the Non-Aligned Movement", why:"This history supports, rather than weakens, India’s claim."}
    ]}
   ],
   apply:{
    intro:"Read primary sources from more than one government.",
    tasks:[
     {t:"Two statements, one event", how:[
       "Find India’s Ministry of External Affairs statement and Pakistan’s Ministry of Foreign Affairs statement on the same event (for example the May 2025 ceasefire, or the December 2023 Article 370 ruling).",
       "Summarise each in one sentence beginning “X’s government said that…”, with the date.",
       "List the words each uses that the other avoids (for example “integral part”, “disputed territory”, “terrorism”, “self-determination”)."
     ], write:"India said… (date) Pakistan said… (date) Words each uses…"},
     {t:"Read Nehru and Jaishankar side by side", how:[
       "Read a short passage by Nehru on non-alignment (for example a speech to India’s parliament) and a review or extract of Jaishankar’s *The India Way*.",
       "Note two continuities and two differences."
     ], write:"Continuities… Differences…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is multi-alignment a new strategy or non-alignment under another name?",
       "2. Why have India and China managed their boundary dispute without full-scale war since 1962, despite clashes?",
       "3. Can any single state speak for the Global South?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Two attributed government statements with their key words, a short comparison of Nehru and Jaishankar, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"bjpip", where:"Chapter 6 “The BJP and Indian Grand Strategy”", note:"Read for the debate on continuity and change in India’s foreign policy."},
    {book:"owh2", where:"Chapter 14, section 14.3 “The Non-Aligned Movement”", note:"The Cold War background to Nehru’s policy."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u21-l3", title:"The Pacific islands: regionalism, climate and great powers", minutes:65,
   hook:{q:"In 2026 one Pacific Islands Forum member officially changed its name to the form used in its own language. Which one?", options:["Tuvalu","Nauru","Kiribati","Vanuatu"], answer:1, reveal:"**Nauru, now the Republic of Naoero** (said “Now-ero”). Its parliament unanimously approved a constitutional amendment, certified in May 2026, and the government announced the change in July; the UN now lists the country as Naoero. President David Adeang said the change would more faithfully honour the nation’s heritage, language and identity. Names, maps and who draws them are at the heart of Pacific politics. This lesson looks at the region through Pacific eyes: its regionalism, its climate diplomacy, the great powers’ competition, and the unfinished business of self-determination."},
   goals:[
     "Explain Hau‘ofa’s “sea of islands” and why scale and size are contested in the Pacific",
     "Describe the Pacific Islands Forum, the Blue Pacific narrative and the 2050 Strategy, and the “new Pacific diplomacy”",
     "Analyse great-power competition in the Pacific and island states’ responses, attributing each position",
     "Summarise the status of Bougainville and New Caledonia as of late 2026, neutrally"
   ],
   learn:[
    {h:"Islands in a far sea, or a sea of islands?", body:[
      {lead:"Look at a world map and Pacific island states seem tiny and remote. Look at them as their peoples did for centuries, and they are ocean states."},
      "In 1993 the Tongan anthropologist and writer {{epeli-hauofa|Epeli Hau‘ofa}} published an essay, “Our Sea of Islands”, reprinted in *The Contemporary Pacific* in 1994. He attacked the view, common among economists and officials, that island states are “much too small, too poorly endowed with resources, and too isolated from the centers of economic growth” to stand on their own. “There is a world of difference”, he wrote, “between viewing the Pacific as ‘islands in a far sea’ and as ‘a sea of islands’.” Voyaging, kinship and migration connected Oceanians across vast distances long before colonial borders. The idea of a [[sea-of-islands|sea of islands]] has shaped Pacific scholarship and diplomacy ever since.",
      {fig:'<svg viewBox="0 0 340 380"><text x="10" y="22">Two ways to see the same islands</text><rect class="d-panel" x="10" y="34" width="320" height="150" rx="8" stroke-width="2"/><text x="20" y="56">“Islands in a far sea”</text><circle class="d-inkf" cx="70" cy="110" r="3"/><circle class="d-inkf" cx="150" cy="90" r="2"/><circle class="d-inkf" cx="230" cy="125" r="3"/><circle class="d-inkf" cx="120" cy="150" r="2"/><circle class="d-inkf" cx="275" cy="80" r="2"/><text class="s" x="20" y="176">Count only land: small, scattered, remote</text><rect class="d-panel" x="10" y="196" width="320" height="170" rx="8" stroke-width="2"/><text x="20" y="218">“A sea of islands”</text><circle class="d-lup" cx="70" cy="272" r="40" stroke-width="2"/><circle class="d-lup" cx="150" cy="252" r="34" stroke-width="2"/><circle class="d-lup" cx="230" cy="287" r="40" stroke-width="2"/><circle class="d-lup" cx="120" cy="312" r="30" stroke-width="2"/><circle class="d-lup" cx="282" cy="242" r="32" stroke-width="2"/><circle class="d-inkf" cx="70" cy="272" r="3"/><circle class="d-inkf" cx="150" cy="252" r="2"/><circle class="d-inkf" cx="230" cy="287" r="3"/><circle class="d-inkf" cx="120" cy="312" r="2"/><circle class="d-inkf" cx="282" cy="242" r="2"/><text class="s" x="20" y="356">Count the ocean: zones of up to 200 nautical miles</text></svg>', alt:"Two panels showing the same five dots. In the first, titled ‘Islands in a far sea’, the dots are tiny and far apart, with the note: count only land, small, scattered, remote. In the second, titled ‘A sea of islands’, each dot sits inside a large circle representing an exclusive economic zone of up to 200 nautical miles, and the circles nearly touch, with the note: count the ocean.", cap:"Under UNCLOS (Unit 10), each island can generate an exclusive economic zone of up to 200 nautical miles. Counted this way, several small island states control ocean areas larger than many continental countries."},
      "Colonial science divided the region into Melanesia, Micronesia and Polynesia, a scheme popularised by the French navigator Dumont d’Urville in the 1830s with openly racial rankings. These [[pacific-subregions|subregions]] survive as useful shorthand and in subregional groups such as the [[melanesian-spearhead-group|Melanesian Spearhead Group]], but many Pacific scholars treat their boundaries as colonial inventions."
    ]},
    {h:"Pacific regionalism: the Forum and the Blue Pacific", body:[
      "The [[pacific-islands-forum|Pacific Islands Forum]] (PIF), founded in 1971 and introduced in the IR primer, has 18 members, including Australia, New Zealand and the French territories of New Caledonia and French Polynesia. It works by consensus, an approach Fiji’s first prime minister, Ratu Sir Kamisese Mara, popularised as [[pacific-way|“the Pacific Way”]] around Fiji’s independence in 1970. Around the Forum sit the [[crop-agencies|CROP agencies]], specialist regional bodies for science, fisheries, environment and more.",
      "Since 2017 leaders have described the region as the [[blue-pacific|Blue Pacific]]: one ocean continent with a shared identity and interests. Their [[blue-pacific-2050-strategy|2050 Strategy for the Blue Pacific Continent]], adopted in 2022, sets seven thematic areas, from political leadership and regionalism to climate change and ocean management. Unity is not automatic. In 2021 the five Micronesian members announced they would leave after losing a vote on the Forum’s Secretary-General; a 2022 compromise brought most back, and Kiribati, which had withdrawn, returned in 2023.",
      "Greg Fry and Sandra Tarte call the period since 2009 the [[new-pacific-diplomacy|“new Pacific diplomacy”]]. After the Forum suspended Fiji following its 2006 coup, island states built new channels on their own terms: a Pacific Small Island Developing States group at the UN, new subregional bodies, and tough bargaining over fish. The eight [[parties-to-the-nauru-agreement|Parties to the Nauru Agreement]] used their [[vessel-day-scheme|Vessel Day Scheme]] to make foreign fleets pay for days of fishing (Unit 13), raising their revenues sharply. Fry and Tarte argue that islanders moved from being objects of others’ regional plans to authors of their own.",
      "The Forum also manages outsiders. It has 21 dialogue partners, from China, Japan and the United States to the EU, and Taiwan attends as a “development partner”. After disputes over who could attend the 2025 meeting, leaders adopted a policy that sorts partners into two streams, and in 2026 the full list was invited again."
    ]},
    {h:"Climate at the centre", body:[
      "For Pacific governments climate change is the first security issue. Unit 2 analysed the Forum’s Boe Declaration (2018), which called it “the single greatest threat” to Pacific peoples, and Unit 16 the islands’ legal diplomacy: Vanuatu’s campaign for the ICJ’s 2025 advisory opinion, the 2023 Forum declaration on the continuity of statehood despite sea-level rise, and Tuvalu’s [[falepili-union|Falepili Union]] with Australia, which includes a pathway for Tuvaluans to move to Australia (see also {{climate-and-mobility}}).",
      "At their 2026 meeting in Koror, Palau, leaders again made 1.5 °C the benchmark in their Belau Declaration while acknowledging that the target will be overshot. Critics, including Vanuatu’s climate minister, said Australia, a Forum member and a large coal and gas exporter, was not doing enough; Australia’s government points to its support for Pacific programmes, including initial funding for a regional Renewable Energy Commissioner, a post whose terms of reference leaders approved at the meeting (see {{small-island-climate-diplomacy}})."
    ]},
    {h:"Great powers in a contested ocean", body:[
      "Pacific states were courted throughout the Cold War, but competition has sharpened since the late 2010s.",
      {list:[
        "**China** expanded aid, trade and policing ties. Solomon Islands and Kiribati switched diplomatic recognition from Taipei to Beijing in 2019 and Nauru (now Naoero) in 2024, leaving three Pacific states (the Marshall Islands, Palau and Tuvalu) among Taiwan’s twelve allies as of May 2026. In 2022 Solomon Islands signed a security agreement with China whose text was not published.",
        "**The United States** renewed the economic terms of its [[compact-of-free-association|Compacts of Free Association]] with the Federated States of Micronesia, the Marshall Islands and Palau in 2023–24, keeping its defence rights there, and held its first summits with Pacific leaders in 2022 and 2023.",
        "**Australia** signed treaties that pair support with security commitments: the Falepili Union with Tuvalu (in force 2024), a 2024 agreement with Nauru (now Naoero) that gives Australia a say over its security partnerships, and the Pukpuk mutual defence treaty with Papua New Guinea (signed in October 2025, in force since July 2026), PNG’s first alliance."
      ]},
      "Island governments respond in different ways. Some describe a foreign policy of being “friends to all”; others prefer their traditional partners. In 2025 the Forum adopted a Blue Pacific [[ocean-of-peace|Ocean of Peace]] declaration, and in 2026 leaders registered concern after a Chinese ballistic missile test in July crossed several members’ exclusive economic zones, asking all states for at least 24 hours’ notice of future tests. The communiqué named no state, and Naoero formally dissociated itself from the paragraph. Scholars warn against a “new great game” story that treats islanders as pawns: the new Pacific diplomacy suggests that small states often bargain skilfully between suitors."
    ]},
    {h:"Unfinished self-determination: Bougainville and New Caledonia", body:[
      "Decolonisation is not over in the Pacific. The UN still lists several Pacific territories, including New Caledonia, as [[non-self-governing-territory|non-self-governing territories]].",
      {ex:"**Bougainville (Papua New Guinea).** After a war from 1988 to 1998 (Unit 12), the [[bougainville-peace-agreement|Bougainville Peace Agreement]] (2001) promised autonomy and a deferred referendum. In 2019, 97.7% voted for independence. The result must be ratified by PNG’s national parliament. As of late October 2026 parliament had opened debate but had not voted. PNG’s government says the constitution requires a three-quarters majority, 89 of 118 MPs; Bougainville’s leaders reject that threshold and say a simple majority was discussed. Prime Minister James Marape says any outcome must be acceptable to both Bougainville and the rest of the country.", label:"Case 1"},
      {ex:"**New Caledonia (France).** The [[noumea-accord|Nouméa Accord]] (1998) led to three referendums: 56.7% voted against independence in 2018 and 53% in 2020; in 2021 96.5% voted against on a turnout of 43.9%, after pro-independence parties boycotted the vote, which they had asked to delay during a COVID-19 outbreak. In May 2024 riots over a plan to widen the frozen electoral roll left 14 dead. The 2025 Bougival agreement and a January 2026 follow-up proposed a “State of New Caledonia” within France. The main pro-independence front, the FLNKS, rejected it as autonomy rather than decolonisation; anti-independence parties backed it. France’s Senate passed the constitutional bill in February 2026, but the National Assembly rejected it in April. In the June 2026 provincial elections the anti-independence bloc won 24 of 54 seats and pro-independence parties 26 across three lists; a small party holding 4 seats helped elect an anti-independence president of the Congress. As of July 2026 talks on the long-term future had no set date.", label:"Case 2"},
      "Other questions remain open. Pacific leaders, especially in Melanesia, have raised human rights in Indonesia’s Papuan provinces, which Indonesia regards as an integral part of its territory and an internal matter. In 2026 Forum leaders agreed to facilitate dialogue with Indonesia and a mission by interested leaders, to report back in 2027.",
      {terms:["sea-of-islands","pacific-subregions","pacific-way","crop-agencies","blue-pacific","blue-pacific-2050-strategy","new-pacific-diplomacy","compact-of-free-association","ocean-of-peace","non-self-governing-territory","bougainville-peace-agreement","noumea-accord"]}
    ]}
   ],
   try:[
    {id:"e4u21-l3-x1", type:"mcq", q:"What was Hau‘ofa’s main argument in “Our Sea of Islands”?", options:[
      {t:"Seeing Pacific states only as tiny land areas ignores the ocean, voyaging and kinship that connect Oceanians, which makes them larger and less dependent than outsiders assume", ok:true, why:"Right: a “sea of islands”, not “islands in a far sea”."},
      {t:"Pacific states are too small to survive without aid", why:"That is the view he attacked."},
      {t:"The region should be divided into Melanesia, Micronesia and Polynesia", why:"Those colonial categories are not his argument."},
      {t:"Islanders should stop migrating", why:"He saw migration and remittances as part of an expanding Oceanian world."}
    ]},
    {id:"e4u21-l3-x2", type:"match", q:"Match each Pacific term to its meaning.", pairs:[
      ["Blue Pacific","Leaders’ narrative of one ocean continent with a shared identity","Used by the Forum since 2017 and in the 2050 Strategy."],
      ["Pacific Way","Consensus-based, consultative style of regional politics","Popularised by Ratu Mara around 1970."],
      ["Vessel Day Scheme","Selling fishing days to foreign fleets","Run by the Parties to the Nauru Agreement."],
      ["CROP agencies","Specialist regional bodies around the Forum","Science, fisheries, environment and more."],
      ["Compact of Free Association","US agreements with three Micronesian states pairing economic support with defence rights","Renewed in 2023–24."]
    ]},
    {id:"e4u21-l3-x3", type:"sort", q:"Which external actor does each step belong to?", buckets:["China","United States","Australia"], items:[
      {t:"Security agreement with Solomon Islands (2022)", b:0, why:"Signed by Solomon Islands and China; its text was not published."},
      {t:"Renewed Compacts with Micronesia, the Marshall Islands and Palau", b:1, why:"Economic terms renewed in 2023–24."},
      {t:"Falepili Union with Tuvalu", b:2, why:"In force since August 2024."},
      {t:"Pukpuk mutual defence treaty with Papua New Guinea", b:2, why:"Signed in October 2025; in force since July 2026."},
      {t:"Recognition switches by Solomon Islands and Kiribati (2019) and Nauru, now Naoero (2024)", b:0, why:"From Taipei to Beijing."},
      {t:"First summits with Pacific Island leaders (2022, 2023)", b:1, why:"Held in Washington."}
    ]},
    {id:"e4u21-l3-x4", type:"spot", q:"A news explainer on Bougainville, November 2026. Tap each sentence that is **wrong or not neutral**.", ask:"is wrong or not neutral", parts:[
      {t:"In 2019, 97.7% of voters chose independence.", flag:false, why:"Correct."},
      " ",
      {t:"Bougainville became independent in 2025.", flag:true, why:"Wrong. As of late October 2026 PNG’s parliament had not voted to ratify the result."},
      " ",
      {t:"PNG’s government says 89 of 118 MPs must approve; Bougainville’s leaders dispute that threshold.", flag:false, why:"Correct and attributed."},
      " ",
      {t:"PNG’s parliament is obviously trying to cheat Bougainville.", flag:true, why:"Not neutral: an accusation stated as fact. Attribute: “Bougainville’s leaders argue that…”."},
      " ",
      {t:"The 2001 Peace Agreement promised autonomy and a deferred referendum.", flag:false, why:"Correct."}
    ]},
    {id:"e4u21-l3-x5", type:"order", q:"Put the New Caledonia steps in order.", items:[
      {t:"The Nouméa Accord is signed", why:"1998."},
      {t:"Three referendums reject independence, the last boycotted by pro-independence parties", why:"2018, 2020 and 2021."},
      {t:"Riots over the electoral roll leave 14 dead", why:"May 2024."},
      {t:"The Bougival agreement proposes a “State of New Caledonia” within France", why:"July 2025."},
      {t:"France’s National Assembly rejects the constitutional bill", why:"April 2026."},
      {t:"Provincial elections are held", why:"28 June 2026."}
    ]},
    {id:"e4u21-l3-x6", type:"mcq", q:"Sione writes: “The Pacific is just a chessboard for China, the US and Australia.” Which response draws best on the new Pacific diplomacy literature?", options:[
      {t:"Island states have built their own forums and used competition to bargain, so treating them as pawns misses their agency", ok:true, why:"Right: Fry and Tarte’s argument, with examples such as fisheries bargaining and UN coalitions."},
      {t:"Great powers have no interest in the Pacific", why:"Untrue: competition has clearly sharpened."},
      {t:"All island states have chosen China", why:"Untrue: three recognise Taiwan, and many deepened ties with Australia and the US."},
      {t:"The Forum has dissolved", why:"Untrue: it met in Palau in 2026."}
    ]},
    {id:"e4u21-l3-x7", type:"mcq", q:"Why did pro-independence parties reject the result of New Caledonia’s 2021 referendum?", options:[
      {t:"They had asked for a delay during a COVID-19 outbreak and mourning period, boycotted the vote, and say a vote with 43.9% turnout cannot settle the question", ok:true, why:"Right: their position, attributed. France’s government held that the vote was valid."},
      {t:"They won it but France ignored the result", why:"96.5% voted against independence among those who voted."},
      {t:"No referendum was held in 2021", why:"It was held on 12 December 2021."},
      {t:"The UN cancelled it", why:"The UN did not cancel it; New Caledonia remains on its list of non-self-governing territories."}
    ]}
   ],
   apply:{
    intro:"Read the region in its own documents.",
    tasks:[
     {t:"Read a Forum communiqué", how:[
       "Find the latest Pacific Islands Forum Leaders’ Communiqué on the Forum’s website.",
       "Note three issues it calls priorities, one place where it avoids naming a state, and one footnote or reservation by a member."
     ], write:"Priorities… Unnamed state… Reservation…"},
     {t:"Two views of one agreement", how:[
       "Choose one agreement from this lesson (the Falepili Union, the Pukpuk treaty, the China–Solomon Islands security agreement or the Bougival agreement).",
       "Find one statement supporting it and one criticising it, from governments, parties or regional media.",
       "Summarise each in one sentence beginning “X argues that…”, with the date."
     ], write:"Agreement… Supporter says… Critic says…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the Blue Pacific a regional identity, a diplomatic strategy, or both?",
       "2. Does great-power competition strengthen or weaken Pacific island states’ agency?",
       "3. What should count as completing decolonisation in New Caledonia? Present at least two positions fairly."
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Notes on a Forum communiqué, two attributed views of one agreement, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"newpacdip", where:"Chapter 1 “The ‘New Pacific Diplomacy’: An Introduction” (Greg Fry and Sandra Tarte)", note:"Read for the argument that island states took control of their diplomacy after 2009."},
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"Background on regional organisations in general."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u21-l4", title:"The Indo-Pacific as an idea", minutes:60,
   hook:{q:"On 22 August 2007 Japan’s prime minister Shinzo Abe told India’s parliament that the Pacific and Indian Oceans were joining in a “Confluence of the Two Seas”. Where did he say the phrase came from?", options:["A 1655 book by the Mughal prince Dara Shikoh","A poem by Rabindranath Tagore","A US Navy strategy paper","The UN Convention on the Law of the Sea"], answer:0, reveal:"**A book by the Mughal prince Dara Shikoh (1655)**, about the meeting of Hindu and Islamic thought. Abe used it to describe “a dynamic coupling” of the two oceans “as seas of freedom and of prosperity”, and a “broader Asia” that would include the United States and Australia. A title about philosophy became the seed of a new map of Asia. This lesson asks how the Indo-Pacific was invented, why governments draw it differently, and what its critics say."},
   goals:[
     "Explain why regions are mental maps and strategic narratives, not just geography",
     "Trace the Indo-Pacific from naval thinkers and Abe’s 2007 speech to official strategies",
     "Compare the Australian, Indian, US, ASEAN and EU visions by scope and purpose",
     "Present the main critiques, including China’s and Southeast Asian and Pacific perspectives, and the defence of the concept",
     "Analyse any regional label by asking what it includes, excludes and does"
   ],
   learn:[
    {h:"Regions are drawn, not found", body:[
      {lead:"No satellite photo shows where “Asia” ends. Regions are [[mental-map|mental maps]]: shared pictures of which places belong together."},
      "Geographers Martin Lewis and Kären Wigen called this hidden geography “metageography” in *The Myth of Continents* (1997): continents and world regions are conventions that carry history and power. In IR, constructivists add that naming a region changes behaviour. A label tells officials which meetings to attend, which threats to watch and which partners count. Governments use regional names as [[strategic-narrative|strategic narratives]]: stories about the international order meant to shape how others see it and act in it.",
      "For three decades the dominant name was the [[asia-pacific|Asia-Pacific]]. Economists and officials from Japan and Australia built it in the 1970s and 1980s, encouraged by Japan’s prime minister Ōhira Masayoshi’s “Pacific Basin” idea and Australian support, through the Pacific Economic Cooperation Council (1980) and then [[apec|APEC]], founded in Canberra in 1989 by twelve economies and now 21. APEC calls its members “economies” so that Hong Kong and Chinese Taipei can join alongside China. The Asia-Pacific stretched across the Pacific to the Americas, but it stopped at Southeast Asia: India is not an APEC member. The name itself carried a vision of trans-Pacific economic partnership, with Japan and the United States at its centre and South Asia at its edge.",
      {key:"A regional label is never neutral: ask who drew it, what it includes, what it leaves out, and what it is for."}
    ]},
    {h:"From sea lanes to strategy", body:[
      "The term [[indo-pacific|Indo-Pacific]] is old in oceanography and appeared now and then in mid-twentieth-century writing. Its strategic career began in the 2000s, and each step was taken by a different government for its own reasons:",
      {ol:[
        "January 2007: the Indian naval officer Gurpreet Khurana, writing on sea-lane security and India–Japan cooperation, used it for the maritime space linking the two oceans.",
        "August 2007: Abe’s “Confluence of the Two Seas” speech in New Delhi; the same year the Quad first met (Unit 12).",
        "2013: Australia’s Defence White Paper made a “stable Indo-Pacific” a key strategic interest, defined as an arc from India through Southeast Asia to Northeast Asia.",
        "2016: Japan launched its Free and Open Indo-Pacific ([[free-and-open-indo-pacific|FOIP]]) at a conference on African development in Nairobi, linking Asia and Africa across the two oceans (Unit 18 covers Japan’s policy).",
        "2017–18: the US government adopted “free and open Indo-Pacific”, and in May 2018 renamed its Pacific Command the Indo-Pacific Command, citing “the increasing connectivity between the Indian and Pacific Oceans”.",
        "2018–19: India’s prime minister set out India’s view at the Shangri-La Dialogue (June 2018) and launched the [[ipoi|Indo-Pacific Oceans Initiative]] (2019); ASEAN adopted its Outlook (June 2019).",
        "2018–21: European governments followed: France from 2018, Germany and the Netherlands in 2020, and the EU (September 2021)."
      ]},
      "Why did the label spread? Three explanations compete, and they can be combined. **Material**: India’s economic rise and the trade and energy flowing through the Indian Ocean made one maritime system real. **Strategic**: governments worried by China’s growing power wanted a frame that brought India in as a counterweight. **Ideational**: middle powers such as Australia, Japan and India used the frame to raise their own status in a region that “Asia-Pacific” had centred on the United States and China."
    ]},
    {h:"Many Indo-Pacifics", body:[
      "Governments that use the same word draw different maps and give it different purposes.",
      {fig:'<svg viewBox="0 0 340 356"><text x="10" y="20">Where each version reaches</text><text class="s" x="10" y="38">(rows run from west to east)</text><text class="s" x="192" y="62" text-anchor="middle">AUS</text><text class="s" x="232" y="62" text-anchor="middle">IND</text><text class="s" x="272" y="62" text-anchor="middle">EU</text><text class="s" x="312" y="62" text-anchor="middle">ASEAN</text><text class="s" x="10" y="90">East Africa</text><text class="s" x="10" y="126">Indian Ocean</text><text class="s" x="10" y="162">South Asia</text><text class="s" x="10" y="198">Southeast Asia</text><text class="s" x="10" y="234">Northeast Asia</text><text class="s" x="10" y="270">Pacific islands</text><text class="s" x="10" y="306">Americas’ west coast</text><path class="d-ink" d="M150,72 H334" stroke-width="1"/><rect class="d-gold" x="182" y="150" width="20" height="92" rx="4" stroke-width="2"/><rect class="d-sage" x="222" y="78" width="20" height="236" rx="4" stroke-width="2"/><rect class="d-lup" x="262" y="78" width="20" height="200" rx="4" stroke-width="2"/><rect class="d-soft" x="302" y="114" width="20" height="164" rx="4" stroke-width="2" stroke-dasharray="5 4"/><text class="s" x="10" y="336">AUS 2013 · IND 2018 · EU 2021 · ASEAN 2019</text><text class="s" x="10" y="351">Dashed: “interconnected”, not one territory</text></svg>', alt:"A chart with rows from west to east: East Africa, Indian Ocean, South Asia, Southeast Asia, Northeast Asia, Pacific islands, the Americas’ west coast. Four vertical bars show each version’s reach. Australia 2013: from South Asia to Northeast Asia. India 2018: from East Africa to the Americas’ west coast. The EU 2021: from East Africa to the Pacific islands. ASEAN 2019: a dashed bar from the Indian Ocean to the Pacific islands, because the Outlook treats the two ocean regions as interconnected rather than as one territory.", cap:"Sources: Australia’s 2013 Defence White Paper; Modi at the Shangri-La Dialogue, 2018; the EU strategy, 2021; the ASEAN Outlook, 2019. The US version, centred on its Indo-Pacific Command, is discussed in the text."},
      {table:[
        ["Version","Key words","Purpose stressed"],
        ["Australia (2013 onwards)","A “stable Indo-Pacific”","Security of sea lanes; bringing India in"],
        ["United States (2017 onwards)","“Free and open”","Rules-based order, alliances, competition with China"],
        ["India (2018, IPOI 2019)","Inclusive, “not as a strategy or as a club of limited members”","Freedom of action; Indian Ocean role"],
        ["ASEAN ([[aoip|AOIP]], 2019)","“Dialogue and cooperation instead of rivalry”; ASEAN centrality","Keeping ASEAN at the centre; avoiding blocs"],
        ["EU (2021)","Cooperation in seven areas, from green transition to security","Trade, standards, a role beyond Europe"]
      ]},
      "The ASEAN Outlook, drafted under Indonesia’s leadership, treats the Indian and Pacific Ocean regions “not as contiguous territorial spaces but as a closely integrated and interconnected region”, with ASEAN playing a central role. Its four areas are maritime cooperation, connectivity, the UN Sustainable Development Goals and economic cooperation. It is an example of ASEAN [[norm-localization|localising]] an outside idea to fit its own norms of [[asean-centrality|centrality]] and inclusion.",
      "The United States has stressed security, through its alliances, the Quad and its renamed military command, but it also built an economic layer. In May 2022 it launched the Indo-Pacific Economic Framework (IPEF) with partners including India, Japan, Australia and seven ASEAN states; it covers supply chains, clean energy and anti-corruption as well as trade, but offers no new market access, and India stayed out of the trade pillar. Supporters called it a flexible way to set rules; critics in the region asked what it offered without tariff cuts."
    ]},
    {h:"Critics and defenders", body:[
      "The concept has strong critics from several directions.",
      {list:[
        "**China’s government** prefers “Asia-Pacific”. In 2018 Foreign Minister Wang Yi said the Indo-Pacific idea would dissipate “like sea foam”; Chinese officials have since described US Indo-Pacific policy as aimed at containing China. A 2020 special section of *International Affairs*, introduced by Kai He and Mingjiang Li, includes Feng Liu’s analysis of how China has recalibrated its response.",
        "**Southeast Asian voices** worry that a US–China contest framed as the Indo-Pacific could sideline ASEAN. Dewi Fortuna Anwar (2020) analyses Indonesia’s leading role in drafting the Outlook; See Seng Tan (2020) argues that the region is “consigned to hedge”.",
        "**Doubters inside the club**: Rajesh Rajagopalan called India’s approach “evasive balancing” (2020), and Brendan Taylor asked whether Australia’s Indo-Pacific strategy is “an illusion” (2020). Both question whether their own governments’ strategies are coherent and achievable.",
        "**Pacific and African perspectives**: Pacific island governments prefer their own Blue Pacific frame (Lesson 3), and East African coastal states appear on some maps and not others."
      ]},
      "Each theory reads the concept differently. For realists it is a balancing coalition against China dressed in geographic language. For liberals it is an attempt to spread rules, standards and connectivity across a wider space. For constructivists it is a strategic narrative that, by being repeated in white papers and summits, helps make the region it describes.",
      "Defenders reply that the Indo-Pacific describes something real. The Australian scholar Rory Medcalf’s *Contest for the Indo-Pacific* (2020) argues that it captures a connected, multipolar maritime region in which middle powers can work together so that no single state dominates; supporters add that India’s inclusion makes the frame more representative of Asia than the Asia-Pacific was."
    ]},
    {h:"Using the concept in a seminar", body:[
      "Treat “Indo-Pacific” as an object of analysis, not as neutral background. Four questions work for any regional label:",
      {ol:["**Who uses it, since when?** Date the first official use.","**Where are its edges?** Who is in, who is out, and who is unsure?","**What does it do?** Describe, mobilise allies, reassure, exclude?","**What would change** if a different label were used?"]},
      {ex:"Compare two texts: the ASEAN Outlook (2019) and the EU strategy (2021). The Outlook builds everything around ASEAN centrality and “dialogue … instead of rivalry”; the EU text lists seven priority areas, from ocean governance to security and defence. Same word, different jobs: one protects ASEAN’s convening role, the other gives a distant actor a reason to be present.", label:"Worked example"},
      {warn:"Three common mistakes: treating “Indo-Pacific” as a neutral synonym for “Asia”; assuming every government that uses it shares US aims (India and ASEAN explicitly do not); and forgetting that the term has dates. A text from 2005 that says “Asia-Pacific” is not avoiding anything; one from 2025 may be."},
      {terms:["indo-pacific","asia-pacific","mental-map","strategic-narrative","apec","aoip","ipoi"]}
    ]}
   ],
   try:[
    {id:"e4u21-l4-x1", type:"order", q:"Put the Indo-Pacific’s strategic career in order.", items:[
      {t:"Gurpreet Khurana uses the term in an article on sea-lane security", why:"January 2007."},
      {t:"Abe speaks of the “Confluence of the Two Seas” in India’s parliament", why:"August 2007."},
      {t:"Australia’s Defence White Paper adopts the Indo-Pacific", why:"2013."},
      {t:"Japan launches its Free and Open Indo-Pacific", why:"2016."},
      {t:"The US Pacific Command becomes the Indo-Pacific Command", why:"May 2018."},
      {t:"ASEAN adopts its Outlook on the Indo-Pacific", why:"June 2019."},
      {t:"The EU publishes its Indo-Pacific strategy", why:"September 2021."}
    ]},
    {id:"e4u21-l4-x2", type:"match", q:"Match each version to its signature phrase.", pairs:[
      ["ASEAN Outlook (2019)","“Dialogue and cooperation instead of rivalry”","Its key elements, with ASEAN centrality."],
      ["India (Shangri-La, 2018)","Not “a strategy or a club of limited members”","India stresses inclusiveness."],
      ["Australia (2013)","A “stable Indo-Pacific”","One of four key strategic interests."],
      ["EU (2021)","From the east coast of Africa to the Pacific Islands","The EU’s geographical description."]
    ]},
    {id:"e4u21-l4-x3", type:"sort", q:"Which explanation of the Indo-Pacific’s rise does each argument use?", buckets:["Material","Strategic","Ideational"], items:[
      {t:"Trade and energy flows tie the two oceans into one system", b:0, why:"An argument from economic and geographic reality."},
      {t:"Governments wanted a frame that included India as a counterweight to China", b:1, why:"An argument about balancing power."},
      {t:"Middle powers used the label to raise their own status and voice", b:2, why:"An argument about identity and status."},
      {t:"India’s economic growth shifted the region’s centre of gravity westward", b:0, why:"Material change in capabilities."},
      {t:"The word reframed who counts as a natural partner", b:2, why:"An argument about how ideas shape perceptions."}
    ]},
    {id:"e4u21-l4-x4", type:"mcq", q:"Why can APEC include both China and Chinese Taipei?", options:[
      {t:"APEC’s members are “economies”, not states, which allows Hong Kong and Chinese Taipei to join alongside China", ok:true, why:"Right: a deliberate design choice."},
      {t:"China left APEC", why:"China is a member."},
      {t:"APEC is a UN agency that admits all territories", why:"APEC is not a UN body."},
      {t:"APEC recognises Taiwan as a state", why:"It does not; that is why it uses “economies”."}
    ]},
    {id:"e4u21-l4-x5", type:"spot", q:"An essay paragraph on the Indo-Pacific. Tap each sentence that is **inaccurate or not neutral**.", ask:"is inaccurate or not neutral", parts:[
      {t:"Abe’s 2007 speech in New Delhi spoke of a “Confluence of the Two Seas”.", flag:false, why:"Accurate."},
      " ",
      {t:"The Indo-Pacific is a natural region that every government defines the same way.", flag:true, why:"Inaccurate: the lesson’s chart shows very different maps."},
      " ",
      {t:"China’s government prefers the term Asia-Pacific and has criticised Indo-Pacific strategies as aimed at containment.", flag:false, why:"Accurate and attributed."},
      " ",
      {t:"The ASEAN Outlook was ASEAN’s way of joining the US alliance system.", flag:true, why:"Inaccurate: the Outlook stresses inclusiveness and “dialogue … instead of rivalry”, and ASEAN is not an alliance."},
      " ",
      {t:"Critics such as Rajagopalan and Taylor question whether their own governments’ Indo-Pacific strategies are coherent.", flag:false, why:"Accurate: each examines his own country’s strategy."}
    ]},
    {id:"e4u21-l4-x6", type:"mcq", q:"Kenji says: “Calling the region ‘Indo-Pacific’ is just geography.” Which reply best uses the idea of a strategic narrative?", options:[
      {t:"The label tells governments which partners and threats count, so choosing it is a political act that shapes behaviour", ok:true, why:"Right: regional names are stories meant to shape how others see and act."},
      {t:"He is right: names never matter", why:"The lesson shows governments arguing over names precisely because they matter."},
      {t:"Only China uses strategic narratives", why:"All governments do; the Indo-Pacific and the Blue Pacific are examples."},
      {t:"Geography and politics have nothing to do with each other", why:"Mental maps join them."}
    ]},
    {id:"e4u21-l4-x7", type:"mcq", q:"Which argument would Rory Medcalf most likely make?", options:[
      {t:"The Indo-Pacific describes a real, connected maritime region where middle powers can cooperate so that no single state dominates", ok:true, why:"Right: the case made in *Contest for the Indo-Pacific* (2020)."},
      {t:"The Indo-Pacific will dissipate like sea foam", why:"That was Wang Yi’s prediction in 2018."},
      {t:"Southeast Asia is consigned to hedge", why:"That is See Seng Tan’s argument."},
      {t:"Pacific islands should use the Blue Pacific instead", why:"That is a Pacific perspective, not Medcalf’s thesis."}
    ]}
   ],
   apply:{
    intro:"Analyse regional labels in official texts.",
    tasks:[
     {t:"Map two strategies", how:[
       "Open two official Indo-Pacific documents (for example the ASEAN Outlook and the EU strategy, or India’s IPOI page and Australia’s latest foreign policy or defence paper).",
       "For each, note: where it says the region begins and ends, the three most repeated words, and whether China is named.",
       "Sketch both maps on one page."
     ], write:"Text 1: edges… key words… China named?… Text 2: …"},
     {t:"Count the labels", how:[
       "Choose one government’s foreign ministry website.",
       "Search for “Asia-Pacific” and “Indo-Pacific” and note roughly when one replaced the other in speeches and documents."
     ], write:"Government… “Asia-Pacific” used until about… “Indo-Pacific” from about… What changed then?"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the Indo-Pacific a region, a strategy, or a narrative?",
       "2. Does the ASEAN Outlook strengthen ASEAN centrality or show its limits?",
       "3. Who is left out of the Indo-Pacific, and does it matter?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"A comparison of two official Indo-Pacific texts with a sketch, a dated note on one government’s change of label, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"Read for how Asian ideas and actors reshape concepts made elsewhere."},
    {book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"A short argument about US strategy after primacy; read it critically alongside the regional views in this lesson."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u21-l5", title:"Comparing regions in Asia and the Pacific", minutes:65,
   hook:{q:"The South Asian Association for Regional Cooperation (SAARC) is meant to hold regular summits of its eight leaders. How many has it held since November 2014?", options:["None","Three","Six","Eleven"], answer:0, reveal:"**None.** The 19th summit was due in Islamabad in 2016, but after an attack on an army camp at Uri in Indian-administered Kashmir killed at least 18 Indian soldiers, India said it would not attend and the meeting collapsed. In October 2026 several members pushed to revive SAARC; India’s foreign ministry replied that “everyone knows which country is responsible for the obstacles”. Why does regional cooperation thrive in some parts of Asia and stall in others? This lesson gives you the concepts and a method to compare."},
   goals:[
     "Distinguish regionalism from regionalisation and use open regionalism and porous regions",
     "Apply the concept of a security community to Southeast Asia, South Asia and the Pacific",
     "Compare SAARC, BIMSTEC and ASEAN, and explain SAARC’s paralysis with competing arguments",
     "Describe Asia-Pacific studies as a field, including “Asia as method” and Pacific-centred scholarship",
     "Plan a seminar comparison of two regions, with explanations, evidence and a counter-argument"
   ],
   learn:[
    {h:"Regionalism and regionalisation", body:[
      {lead:"Unit 9 compared regional organisations from the EU to the SCO ({{comparative-regionalism}}). Here we compare regions themselves."},
      "Start with a distinction drawn by T. J. Pempel and colleagues in *Remapping East Asia* (2005). **Regionalism** is top-down: governments build institutions and rules. [[regionalisation|Regionalisation]] is bottom-up: firms, production networks, migrants, students and investors tie places together whether or not governments plan it. East Asia is often described as high in regionalisation, through dense supply chains, and comparatively light in binding institutions.",
      "Two further ideas help. [[open-regionalism|Open regionalism]], the founding idea of APEC, means cooperating to lower barriers without discriminating against outsiders, unlike a customs union. And Peter {{peter-katzenstein|Katzenstein}}, in *A World of Regions* (2005), argued that globalisation and internationalisation make Asian and European regions [[porous-regions|porous]]: open to the world and tied to the United States, with Japan and Germany as their links to what he called the American “imperium”.",
      "Why did Asia not build a NATO? Christopher Hemmer and Katzenstein (2002) argued that US policymakers in the 1950s saw Western Europeans as part of a shared community but did not see Asian partners the same way, so they chose bilateral alliances in Asia, the hub-and-spoke system (Unit 12). Realists point instead to power: the United States was so much stronger than its Asian allies that it preferred to deal with each one separately.",
      "Institutions also cross the lines we draw on maps. The East Asia Summit (2005) includes India, Australia, New Zealand, Russia and the United States as well as ASEAN, China, Japan and South Korea, so “East Asia” as an institution reaches into South Asia and the Pacific. The Regional Comprehensive Economic Partnership ([[rcep|RCEP]]), in force since 2022, joined ASEAN with five partners after India withdrew from the talks in 2019, so South Asia’s largest economy stayed outside East Asia’s largest trade agreement. The Pacific Islands Forum includes Australia and New Zealand, which raises its own question: who counts as “Pacific”?",
      {fig:'<svg viewBox="0 0 340 330"><path class="d-ink" d="M44,290 V24" stroke-width="2"/><path class="d-ink" d="M44,290 H330" stroke-width="2"/><path class="d-inkf" d="M44,14 L38,26 H50 Z"/><path class="d-inkf" d="M338,290 L326,284 V296 Z"/><rect class="d-soft" x="54" y="28" width="132" height="122" rx="8" stroke-width="2"/><text x="120" y="70" text-anchor="middle">Institutions</text><text x="120" y="88" text-anchor="middle">ahead of markets</text><text class="s" x="120" y="112" text-anchor="middle">e.g. Pacific islands</text><rect class="d-sage" x="194" y="28" width="134" height="122" rx="8" stroke-width="2"/><text x="261" y="70" text-anchor="middle">Both strong</text><text class="s" x="261" y="94" text-anchor="middle">e.g. the EU</text><rect class="d-rose" x="54" y="158" width="132" height="122" rx="8" stroke-width="2"/><text x="120" y="200" text-anchor="middle">Both weak</text><text class="s" x="120" y="224" text-anchor="middle">e.g. South Asia</text><rect class="d-gold" x="194" y="158" width="134" height="122" rx="8" stroke-width="2"/><text x="261" y="200" text-anchor="middle">Markets ahead</text><text x="261" y="218" text-anchor="middle">of institutions</text><text class="s" x="261" y="242" text-anchor="middle">e.g. East Asia</text><text class="s" x="120" y="312" text-anchor="middle">Low regionalisation</text><text class="s" x="261" y="312" text-anchor="middle">High regionalisation</text><text class="s" x="24" y="90" text-anchor="middle" transform="rotate(-90 24 90)">Strong regionalism</text><text class="s" x="24" y="220" text-anchor="middle" transform="rotate(-90 24 220)">Weak regionalism</text></svg>', alt:"A two-by-two grid. The horizontal axis runs from low to high regionalisation (market and social ties); the vertical axis from weak to strong regionalism (institutions). Strong regionalism with low regionalisation: institutions ahead of markets, for example the Pacific islands. Both strong: for example the EU. Both weak: for example South Asia. High regionalisation with weaker regionalism: markets ahead of institutions, for example East Asia.", cap:"A teaching sketch of common characterisations, not measurements. Placing any region is an argument you must support with evidence, such as intra-regional trade shares or the legal strength of institutions."}
    ]},
    {h:"Security communities, and where they are missing", body:[
      "Karl Deutsch and colleagues (1957) defined a [[security-community|security community]] as a group whose members have dependable expectations of “peaceful change”: they no longer prepare for war with each other. In a **pluralistic** security community, states keep their sovereignty, as Canada and the United States do. Emanuel Adler and Michael Barnett’s edited *Security Communities* (1998) added phases, from nascent to mature, and stressed shared identity.",
      "Amitav Acharya’s *Constructing a Security Community in Southeast Asia* (2001) argued that ASEAN built at least a nascent security community through norms of non-interference and consultation (the [[asean-way|ASEAN way]]), though critics note border clashes between members, such as Thailand and Cambodia, and question how deep it goes.",
      "South Asia is the opposite case: a [[regional-security-complex|regional security complex]] defined by rivalry, with two nuclear-armed neighbours who fought in 2025. The Pacific islands sit elsewhere again: island states have not prepared for war with each other, but their security agenda is dominated by climate change, policing and great-power competition rather than by interstate threats. The Forum’s Biketawa Declaration (2000) lets members respond together to a crisis in one of them; it was the basis for the Regional Assistance Mission to Solomon Islands (2003–2017), in which police and soldiers from Australia, New Zealand and island states took part at the Solomon Islands government’s request."
    ]},
    {h:"SAARC, BIMSTEC and ASEAN compared", body:[
      "[[saarc|SAARC]] was founded at Dhaka in December 1985. Its Charter says decisions are taken by unanimity and that bilateral and contentious issues are excluded from its deliberations, which keeps Kashmir off the table but also lets one member block everything. It has a secretariat in Kathmandu, a South Asian Free Trade Area agreement (2004) and many technical bodies, but no summit since 2014. Two explanations compete. India’s government says SAARC cannot work while, in its view, Pakistan supports cross-border terrorism. Pakistan, the planned host, blames India for blocking the summit, and in 2026 the Maldives, Bangladesh, Nepal, Sri Lanka and Bhutan also voiced support for reviving the body. Some analysts add that India prefers forums it can shape without Pakistan.",
      "Meanwhile India has invested in [[bimstec|BIMSTEC]], founded in 1997, which links five SAARC members with Myanmar and Thailand around the Bay of Bengal and leaves out Pakistan. Its charter came into force in 2024 and its sixth summit met in Bangkok in April 2025.",
      {fig:'<svg viewBox="0 0 340 380"><text x="10" y="20">Overlapping memberships (2026)</text><rect class="d-rose" x="10" y="34" width="320" height="76" rx="8" stroke-width="2"/><text x="20" y="56">SAARC only</text><text class="s" x="20" y="78">Afghanistan, Maldives,</text><text class="s" x="20" y="94">Pakistan</text><rect class="d-gold" x="10" y="120" width="320" height="76" rx="8" stroke-width="2"/><text x="20" y="142">SAARC and BIMSTEC</text><text class="s" x="20" y="164">Bangladesh, Bhutan, India,</text><text class="s" x="20" y="180">Nepal, Sri Lanka</text><rect class="d-sage" x="10" y="206" width="320" height="60" rx="8" stroke-width="2"/><text x="20" y="228">BIMSTEC and ASEAN</text><text class="s" x="20" y="250">Myanmar, Thailand</text><rect class="d-lup" x="10" y="276" width="320" height="92" rx="8" stroke-width="2"/><text x="20" y="298">ASEAN only</text><text class="s" x="20" y="320">Brunei, Cambodia, Indonesia, Laos,</text><text class="s" x="20" y="336">Malaysia, Philippines, Singapore,</text><text class="s" x="20" y="352">Timor-Leste, Viet Nam</text></svg>', alt:"Four stacked bands. SAARC only: Afghanistan, Maldives, Pakistan. SAARC and BIMSTEC: Bangladesh, Bhutan, India, Nepal, Sri Lanka. BIMSTEC and ASEAN: Myanmar and Thailand. ASEAN only: Brunei, Cambodia, Indonesia, Laos, Malaysia, the Philippines, Singapore, Timor-Leste and Viet Nam.", cap:"BIMSTEC bridges South and Southeast Asia and leaves out Pakistan, which is one reason analysts read it as a way around SAARC’s deadlock. Timor-Leste joined ASEAN in 2025."},
      {table:[
        ["Feature","SAARC","ASEAN"],
        ["Founded","1985","1967"],
        ["Distribution of power","One state much larger than all the others","No single dominant member"],
        ["Founding purpose","Economic and social cooperation","Peace, stability and growth among five non-communist states (1967)"],
        ["Contentious issues","Excluded by the Charter","Handled by quiet consultation"],
        ["Summits","None since 2014","At least once a year"]
      ]}
    ]},
    {h:"Asia-Pacific studies as a field", body:[
      "Asia-Pacific studies grew out of Cold War [[area-studies|area studies]] (Unit 4) and still mixes disciplines: politics, history, economics, anthropology, languages. Three debates shape it today.",
      {list:[
        "**Whose concepts?** The Japanese thinker Takeuchi Yoshimi gave a lecture in 1960 called “Asia as Method”, and Chen Kuan-Hsing’s *Asia as Method: Toward Deimperialization* (2010) developed the idea: [[asia-as-method|use other Asian societies as reference points]], instead of always measuring Asia against Europe or the United States. This links to Global IR (Unit 2).",
        "**Which centre?** Pacific scholars following Hau‘ofa argue for Oceania-centred research written with, and often by, Pacific peoples, rather than about them.",
        "**Which unit?** Should you study countries, regions, or flows that cross them (diasporas, supply chains, oceans)? Katzenstein’s porous regions and Pempel’s regionalisation favour flows."
      ]},
      "Each region also has its own scholarly traditions. South Asian studies has long debated the colonial archive, caste and the nation, and the Subaltern Studies historians argued from the 1980s that ordinary people’s politics had been written out of nationalist and colonial histories alike (see [[subaltern]]). Pacific studies draws on Indigenous concepts such as *vā*, the relational space between people, and on oral history. Comparing regions therefore also means comparing the questions their scholars think matter.",
      "Practical starting points: journals such as *Pacific Affairs*, *The Pacific Review*, *Asian Survey*, *The Contemporary Pacific* and *International Relations of the Asia-Pacific*; official sources such as communiqués of ASEAN, the Pacific Islands Forum and SAARC; regional think tanks from several countries; and, where you can, a regional language."
    ]},
    {h:"Seminar method: comparing two regions", body:[
      {ol:["**Pick a puzzle**, not a topic: “Why did ASEAN keep meeting through crises while SAARC stalled?”","**Define the regions** and say why (membership lists date quickly).","**Choose indicators**: summit frequency, intra-regional trade, legal strength of agreements, conflict between members.","**Test rival explanations**: power asymmetry (realism), founding purposes and design ([[rational-design|rational design]], Unit 9), shared norms and identity (constructivism), outside powers.","**Address the best counter-argument** and say what evidence would change your mind."]},
      {ex:"Puzzle: ASEAN versus SAARC.\n\n• **Power**: ASEAN has no hegemon, so members can trust consensus; in SAARC, smaller members fear India and India distrusts Pakistan.\n• **Design**: SAARC’s Charter excludes contentious issues, so the biggest conflict can freeze the whole body; ASEAN keeps talking around disputes.\n• **Norms**: the ASEAN way rewards meeting for its own sake.\n\n**Counter-argument**: ASEAN’s meetings may hide weak delivery (Myanmar since 2021), so “success” depends on what you measure.", label:"Worked example"},
      {warn:"Avoid three traps. Do not treat Europe as the yardstick, as if every region were a slower EU; ask what each region’s members want from it. Do not confuse the number of meetings with results. And do not compare a region at its best moment with another at its worst: choose the same period for both."},
      {terms:["regionalisation","open-regionalism","porous-regions","security-community","saarc","bimstec","asia-as-method"]}
    ]}
   ],
   try:[
    {id:"e4u21-l5-x1", type:"sort", q:"Regionalism (top-down, institutions) or regionalisation (bottom-up, flows)?", buckets:["Regionalism","Regionalisation"], items:[
      {t:"Governments sign the BIMSTEC Charter", b:0, why:"States building an institution."},
      {t:"Electronics firms spread production across five Asian countries", b:1, why:"Market-driven ties."},
      {t:"Students from Nepal and Bangladesh move to study in other Asian countries", b:1, why:"Social flows, not an intergovernmental plan."},
      {t:"Pacific leaders adopt the 2050 Strategy", b:0, why:"A political decision by governments."},
      {t:"A diaspora sends remittances that link families across the Bay of Bengal", b:1, why:"Bottom-up economic ties."}
    ]},
    {id:"e4u21-l5-x2", type:"match", q:"Match each scholar to the idea.", pairs:[
      ["Karl Deutsch","Security community: dependable expectations of peaceful change","Political Community and the North Atlantic Area (1957)."],
      ["Peter Katzenstein","Porous regions tied to an American imperium","A World of Regions (2005)."],
      ["T. J. Pempel","Regionalism versus regionalisation in East Asia","Remapping East Asia (2005)."],
      ["Chen Kuan-Hsing","Asia as method: Asian societies as each other’s reference points","Building on Takeuchi Yoshimi’s 1960 lecture."],
      ["Amitav Acharya","ASEAN as a security community built on norms","Constructing a Security Community in Southeast Asia (2001)."]
    ]},
    {id:"e4u21-l5-x3", type:"mcq", q:"Which feature of SAARC’s Charter most directly explains why one dispute can freeze the organisation?", options:[
      {t:"Decisions require unanimity, and bilateral and contentious issues are excluded", ok:true, why:"Right: any member can block, and the main conflict cannot even be discussed inside the body."},
      {t:"Its secretariat is in Kathmandu", why:"Location does not explain the blockage."},
      {t:"It has eight members", why:"ASEAN has eleven and still meets."},
      {t:"It was founded in 1985", why:"Age is not the issue; ASEAN is older."}
    ]},
    {id:"e4u21-l5-x4", type:"spot", q:"A seminar handout on SAARC. Tap each sentence that is **inaccurate or not neutral**.", ask:"is inaccurate or not neutral", parts:[
      {t:"SAARC’s last summit was held in Kathmandu in 2014.", flag:false, why:"Correct."},
      " ",
      {t:"India’s government links the stalemate to what it describes as Pakistan’s support for cross-border terrorism.", flag:false, why:"Attributed correctly."},
      " ",
      {t:"Pakistan is the only member that wants SAARC revived.", flag:true, why:"Inaccurate: in 2026 the Maldives, Bangladesh, Nepal, Sri Lanka and Bhutan also voiced support."},
      " ",
      {t:"BIMSTEC includes Pakistan and Afghanistan.", flag:true, why:"Inaccurate: BIMSTEC’s seven members are Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand."},
      " ",
      {t:"Some analysts read India’s investment in BIMSTEC as a way around SAARC’s deadlock.", flag:false, why:"Attributed to analysts; a fair summary."}
    ]},
    {id:"e4u21-l5-x5", type:"mcq", q:"Which statement about “open regionalism” is accurate?", options:[
      {t:"It means lowering barriers among members without discriminating against outsiders, the founding idea of APEC", ok:true, why:"Right: members cut barriers but extend the benefits to non-members too."},
      {t:"It means a customs union with a common external tariff", why:"That is closed, discriminatory regionalism, as in the EU’s customs union."},
      {t:"It means any state can join any regional body", why:"Membership rules still apply; the term is about trade treatment."},
      {t:"It was invented by SAARC", why:"It is associated with the Pacific Economic Cooperation Council and APEC."}
    ]},
    {id:"e4u21-l5-x6", type:"sort", q:"Which kind of explanation for “no NATO in Asia” is each argument?", buckets:["Identity (constructivist)","Power (realist)"], items:[
      {t:"US officials saw Western Europeans, but not Asian partners, as part of their own community", b:0, why:"Hemmer and Katzenstein’s argument about collective identity."},
      {t:"The United States was so much stronger than its Asian allies that it preferred bilateral deals it could control", b:1, why:"An argument about the distribution of power."},
      {t:"Asian partners feared being dragged into each other’s wars, while Washington feared allies dragging it in", b:1, why:"An alliance-politics argument about entrapment and interests."},
      {t:"Memories of Japan’s wartime empire made a shared regional identity with Japan hard to build", b:0, why:"An argument about identity and memory."}
    ]},
    {id:"e4u21-l5-x7", type:"order", q:"Put the steps of a regional comparison in a sensible order.", items:[
      {t:"State a puzzle that compares the two regions", why:"A question, not a topic, comes first."},
      {t:"Define the regions and date their membership", why:"So readers know what is compared."},
      {t:"Choose indicators", why:"How you will measure the outcome."},
      {t:"Test rival explanations against the evidence", why:"The core of the analysis."},
      {t:"Answer the strongest counter-argument", why:"Shows the argument can survive criticism."}
    ]}
   ],
   apply:{
    intro:"Compare regions with evidence.",
    tasks:[
     {t:"Two communiqués", how:[
       "Find the most recent leaders’ statement of two regional bodies (for example ASEAN and the Pacific Islands Forum, or BIMSTEC and ASEAN).",
       "Count how often each mentions security, climate, trade and outside powers.",
       "Write two sentences on what the counts suggest, and one on what they cannot tell you."
     ], write:"Body 1 counts… Body 2 counts… What it suggests… Limits…"},
     {t:"Build a comparison plan", how:[
       "Choose two regions or regional bodies from this unit.",
       "Write a puzzle, three indicators and two rival explanations."
     ], write:"Puzzle… Indicators… Explanation A… Explanation B… Evidence that would decide between them…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is South Asia a region in any meaningful sense?",
       "2. Is ASEAN a security community, or only a diplomatic community?",
       "3. Should Asia-Pacific studies compare Asian regions with Europe, or with each other?"
     ], write:"My question… My position… Evidence… Counter-argument… My reply…"}
    ],
    proof:"Counts and interpretation for two regional communiqués, a comparison plan with rival explanations, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 17 “Global South Perspectives” (Lina Benabdallah, Victor Adetula and Carlos Murillo-Zamora)", note:"Read for how scholars from the Global South rethink concepts such as region and order."},
    {book:"ospol", where:"Chapter 15, section 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"A short general introduction to regional organisations."}
   ]
  }
  ],
  checkpoint:["e4u21-q02","e4u21-q06","e4u21-q08","e4u21-q11","e4u21-q15","e4u21-q17","e4u21-q20","e4u21-q24","e4u21-q29","e4u21-q33","e4u21-q38","e4u21-q42"],
  codex:[
   {id:"south-asia-politics", title:"South Asian politics: states, regimes and upheavals", aka:["South Asia","SAARC region","Indian subcontinent"], tags:["area studies","South Asia","comparative politics"],
    summary:"The eight states of South Asia, their political systems as of November 2026, and the 2022–2026 wave of protests and elections in Sri Lanka, Bangladesh and Nepal.",
    levels:{
     starter:[
      "South Asia usually means the eight members of SAARC: Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka.",
      "One state, India, is much larger than the others, and most of the region shares a history of British rule, though Nepal and Bhutan were never colonised. The 1947 partition of British India and Bangladesh’s independence from Pakistan in 1971 still shape politics.",
      "The region has federal parliamentary republics (India, Pakistan, Nepal), a parliamentary republic (Bangladesh), presidential systems (Sri Lanka, the Maldives), a constitutional monarchy (Bhutan) and, in Afghanistan, a Taliban administration that most states do not recognise.",
      {key:"South Asia is not one political type. Always say which state, which period and which source."}
     ],
     builder:[
      "**Upheavals, 2022–2026.** In **Sri Lanka** the 2022 economic collapse and the *aragalaya* protests forced President Gotabaya Rajapaksa out; in 2024 Anura Kumara Dissanayake of the National People’s Power won the presidency and a two-thirds parliamentary majority. In **Bangladesh** the July 2024 uprising ended Sheikh Hasina’s rule; after an interim government led by Muhammad Yunus, the BNP won the February 2026 election and Tarique Rahman became prime minister. In **Nepal** youth-led protests in September 2025 brought down the government; in March 2026 the Rastriya Swatantra Party won 182 of 275 seats and Balendra Shah became prime minister.",
      "**Continuities.** In **India** the BJP-led government under Narendra Modi began a third term in 2024. In **Pakistan** Prime Minister Shehbaz Sharif’s government passed the 27th Amendment (November 2025), which critics say entrenches the army’s role.",
      "**How to use this in a paper.** Compare like with like: a protest that ends a government is not the same as a regime change, and a new government may inherit old institutions, debts and security services."
     ],
     pro:[
      "**Concepts.** Comparative politics offers several lenses: democratic erosion and [[electoral-autocracy|electoral autocracy]] (V-Dem’s regime categories), [[hybrid-regime|hybrid regimes]], [[civil-military-relations|civil–military relations]], dominant-party systems, and the politics of transitional justice after uprisings.",
      "**Classic works.** Ayesha Jalal’s *Democracy and Authoritarianism in South Asia* (1995) compared India, Pakistan and Bangladesh historically and questioned the sharp contrast often drawn between a democratic India and its authoritarian neighbours.",
      "**Cautions.** Leaders and party positions change quickly; date every claim. Avoid treating the 2022–2026 upheavals as one “South Asian Spring”: their triggers (debt default, a court ruling on job quotas, a social-media ban among wider grievances) and their outcomes differ. For the debt side of Sri Lanka’s crisis see {{sovereign-debt-restructuring}}.",
      {tip:"For facts about elections, use the national election commission and at least one international wire service."}
     ]
    },
    related:["indian-democracy-debate","pakistan-civil-military-relations","bangladesh-transition","south-asian-regionalism","sovereign-debt-restructuring"],
    sources:[{t:"Carnegie Endowment: Balen Shah, Nepal’s election and the RSP (Amish Raj Mulmi, 31 March 2026)", url:"https://carnegieendowment.org/research/2026/03/balen-shah-nepal-election-RSP-gen-z"},{t:"IMF: Sri Lanka, IMF staff team concludes visit (press release 26/301, 23 September 2026)", url:"https://www.imf.org/en/news/articles/2026/09/23/pr26301-sri-lanka-imf-staff-team-concludes-visit"},{t:"PBS NewsHour: New Bangladesh prime minister sworn in after party’s landslide win (17 February 2026)", url:"https://www.pbs.org/newshour/world/new-bangladesh-prime-minister-sworn-in-after-partys-landslide-win"}],
    checked:"2026-11"},

   {id:"indian-democracy-debate", title:"The debate about India’s democracy", aka:["Indian democracy","democratic backsliding in India","Hindutva and democracy"], tags:["South Asia","democracy","comparative politics"],
    summary:"How scholars, rating bodies and India’s government disagree about the direction of the world’s largest democracy, and how to handle the debate neutrally.",
    levels:{
     starter:[
      "India has held regular national elections since 1951–52, with hundreds of millions of voters. In 2024 more than 960 million people were eligible to vote.",
      "Since 2014 the Bharatiya Janata Party (BJP), whose ideology draws on Hindu nationalism ([[hindutva|Hindutva]]), has led the government under Narendra Modi.",
      "Some scholars and rating organisations say Indian democracy has weakened since then. India’s government rejects these judgements and criticises how they are made. Others point out that elections remain competitive: in 2024 the BJP lost its own majority.",
      {key:"This is a live debate. Present it by attributing each claim to who makes it, with dates."}
     ],
     builder:[
      "**The Congress system.** Rajni Kothari (*Asian Survey*, 1964) described one dominant “party of consensus”, the Congress, with opposition “parties of pressure” at its margins. Indira Gandhi’s Emergency (1975–77) and the coalition era after 1989 ended it.",
      "**The critical view.** V-Dem has classified India as an electoral autocracy since its 2021 report; Freedom House rated it “Partly Free” from 2021 (62/100 in 2026). Christophe Jaffrelot’s *Modi’s India* (2021) speaks of an “ethnic democracy” that marginalises minorities.",
      "**The government’s view.** In March 2021 Foreign Minister S. Jaishankar criticised the “hypocrisy” of “self-appointed custodians of the world”. A November 2022 working paper for the Prime Minister’s Economic Advisory Council (Sanjeev Sanyal and Aakanksha Arora) argued that such perception-based indices use opaque methods.",
      "**The competitiveness view.** Many analysts read the 2024 result (BJP 240 of 543 seats; NDA 293) and frequent changes of government in the states as evidence that voters can still punish incumbents."
     ],
     pro:[
      "**Measurement questions.** Expert-coded indices such as V-Dem aggregate many country experts’ judgements with statistical models; critics question coder selection and weighting; defenders reply that the methods are published and tested. Ask which components (elections, media, judiciary, civil liberties) drive a score.",
      "**Conceptual questions.** “Electoral autocracy”, “competitive authoritarianism”, “ethnic democracy” and “illiberal democracy” are not interchangeable. Define the one you use.",
      "**Neutral writing.** Avoid “India is no longer a democracy” or “India is a perfect democracy”; write “V-Dem classifies…, while India’s government argues…”. Free reading: Milan Vaishnav (ed.), *The BJP in Power* (2019).",
      {tip:"Pair any index with primary evidence: election results, court rulings, press-freedom cases, and the government’s own statements."}
     ]
    },
    related:["south-asia-politics","indian-foreign-policy"],
    read:[{book:"bjpip", where:"Chapter 1 “Religious Nationalism and India’s Future”"}],
    sources:[{t:"Freedom House: India, Freedom in the World 2026", url:"https://freedomhouse.org/country/india/freedom-world/2026"},{t:"The Diplomat: India contemplates new freedom and democracy indices after hypocrisy cries (March 2021)", url:"https://thediplomat.com/2021/03/india-contemplates-new-freedom-and-democracy-indices-after-hypocrisy-cries"},{t:"Publisher’s page: Modi’s India: Hindu Nationalism and the Rise of Ethnic Democracy (Christophe Jaffrelot, 2021)", url:"https://press.princeton.edu/books/hardcover/9780691206806/modis-india"}],
    checked:"2026-11"},

   {id:"pakistan-civil-military-relations", title:"Pakistan’s civil–military relations", aka:["the establishment","hybrid regime in Pakistan","Milbus","27th Amendment"], tags:["South Asia","security","comparative politics"],
    summary:"Why Pakistan’s army has shaped its politics since the 1950s, the concepts scholars use (the establishment, Milbus, hybrid regime) and the 2025 constitutional changes.",
    levels:{
     starter:[
      "In every country someone must decide how much say the armed forces have over politics. This is called [[civil-military-relations|civil–military relations]].",
      "In Pakistan, generals seized power in 1958, 1977 and 1999 and ruled for more than three decades in total. Between those periods elected governments ruled, but Pakistanis often speak of [[pakistan-establishment|“the establishment”]], the army leadership and intelligence services, as a powerful force behind them.",
      {key:"The question in Pakistan is less “military or civilian?” than “how much does the military steer an elected system?”"}
     ],
     builder:[
      "**Origins.** Ayesha Jalal’s *The State of Martial Rule* (1990) traces how, from 1947 to 1965, the army and civil bureaucracy, backed by Cold War alliances and fears of India, came to dominate state institutions over weak parties.",
      "**Economy.** Ayesha Siddiqa’s *Military Inc.* (2007) coined [[milbus|Milbus]]: military capital used for the benefit of officers and kept outside the defence budget, from welfare foundations’ businesses to land. She argued it gives the army a material stake in political power.",
      "**Hybrid since 2018?** Critics describe a [[hybrid-regime|hybrid regime]], in which elections and civilian governments operate within limits set by the military. Imran Khan, prime minister from 2018, was removed by a no-confidence vote in 2022 and later imprisoned; his party calls the cases political, the authorities say they are legal matters.",
      "**The 27th Amendment (November 2025).** It created a Chief of Defence Forces post, held by the army chief (Field Marshal Asim Munir), lifetime immunity for the president and holders of five-star rank, and a Federal Constitutional Court. The government called it modernisation; critics, including UN human rights officials and Chatham House analysts, said it formalised military dominance."
     ],
     pro:[
      "**Theory.** Samuel Huntington’s *The Soldier and the State* (1957) argued for “objective control” through military professionalism; later work stresses that militaries with economic interests and a self-image as guardians of the nation resist such control. Pakistan is often compared with Turkey before 2000s reforms, Egypt, Thailand and Myanmar.",
      "**Debates.** Some scholars stress external drivers (rivalry with India, US alliances, Afghanistan); others stress domestic ones (weak parties, the military’s economy). Aqil Shah’s *The Army and Democracy* (2014) emphasises the army’s own beliefs about its role.",
      "**Writing neutrally.** Use “critics describe…” for “hybrid”, and give the government’s and army’s stated reasons for reforms alongside them."
     ]
    },
    related:["ayesha-jalal","south-asia-politics","kashmir-dispute"],
    sources:[{t:"Chatham House: Pakistan’s 27th constitutional amendment moves it one step closer to authoritarian rule (December 2025)", url:"https://www.chathamhouse.org/2025/12/pakistans-27th-constitutional-amendment-moves-it-one-step-closer-authoritarian-rule"},{t:"GSDRC: summary of Military Inc.: Inside Pakistan’s Military Economy (Siddiqa, 2007)", url:"https://gsdrc.org/document-library/military-inc-inside-pakistans-military-economy/"}],
    checked:"2026-11"},

   {id:"bangladesh-transition", title:"Bangladesh after the July 2024 uprising", aka:["July uprising","July Charter","Bangladesh 2026 election"], tags:["South Asia","democracy","human rights"],
    summary:"From the student-led uprising of July 2024 and the UN’s findings to the interim government, the July Charter and the February 2026 election, told neutrally.",
    levels:{
     starter:[
      "In July 2024 students in Bangladesh protested after a court restored quotas for government jobs. The protests grew into a mass movement against Prime Minister Sheikh Hasina, who had governed since 2009.",
      "On 5 August 2024 Hasina left for India. An interim government led by the Nobel laureate Muhammad Yunus took over and promised reforms and elections.",
      "On 12 February 2026 Bangladesh held an election and a referendum. The Bangladesh Nationalist Party (BNP) won, and Tarique Rahman became prime minister on 17 February.",
      {key:"Bangladesh’s transition raises hard questions about justice for past abuses and about how inclusive a new democracy should be."}
     ],
     builder:[
      "**The UN’s findings.** A UN human rights fact-finding report (February 2025) estimated that as many as 1,400 people were killed between 1 July and 15 August 2024, most shot by security forces, and that 12–13% were children. It found reasonable grounds to believe that crimes against humanity may have been committed, and also documented revenge attacks on Awami League supporters and police and abuses against Hindus, Ahmadiyya Muslims and Indigenous peoples.",
      "**The July Charter.** Most parties signed a reform charter in October 2025; voters approved it by 68% in the February 2026 referendum. Its provisions need constitutional amendments; after the election the BNP declined a second oath as members of a constitutional reform council. As of November 2026 the BNP government planned to amend the constitution through parliament, while the Jamaat-led opposition demanded that the reform council do it, so implementation remained contested.",
      "**The election.** The Awami League was barred and its activities banned. The BNP won 209 of 300 directly elected seats, Jamaat-e-Islami a record 68, and the student-founded National Citizen Party 6; turnout was about 59%. European Union observers called the election “credible and competently managed”, while noting sporadic local violence."
     ],
     pro:[
      "**Justice and inclusion.** A domestic tribunal sentenced Hasina to death in absentia in November 2025; she rejects it as a “rigged tribunal” and says the election excluded her party. Supporters of the ban argue that accountability had to come first; critics, including some human rights advocates, warn that excluding a major party can store up future conflict. Present both.",
      "**Comparisons.** Scholars compare Bangladesh with other post-uprising transitions (Tunisia after 2011, Sri Lanka after 2022) and with Bangladesh’s own past use of a [[caretaker-government|caretaker government]] (1996–2011).",
      "**Regional effects.** Relations with India, Hasina’s host, became strained, while ties with Pakistan and China received new attention; describe these as reported shifts with dates, not as fixed alignments."
     ]
    },
    related:["south-asia-politics","south-asian-regionalism"],
    sources:[{t:"UN in Bangladesh: UN report finds brutal, systematic repression of protests (12 February 2025)", url:"https://bangladesh.un.org/en/289108-bangladesh-un-report-finds-brutal-systematic-repression-protests-calls-justice-serious"},{t:"The Business Standard: The chronicles of July Charter and its shaky future (18 February 2026)", url:"https://www.tbsnews.net/node/1365456"},{t:"PBS NewsHour: New Bangladesh prime minister sworn in (17 February 2026)", url:"https://www.pbs.org/newshour/world/new-bangladesh-prime-minister-sworn-in-after-partys-landslide-win"}],
    checked:"2026-11"},

   {id:"south-asian-regionalism", title:"South Asian regionalism: SAARC and BIMSTEC", aka:["SAARC","BIMSTEC","regional cooperation in South Asia"], tags:["South Asia","regionalism","organisations"],
    summary:"Why SAARC has held no summit since 2014, what BIMSTEC offers instead, and how scholars explain South Asia’s weak regional institutions.",
    levels:{
     starter:[
      "[[saarc|SAARC]], the South Asian Association for Regional Cooperation, was founded in Dhaka on 8 December 1985. Its eight members are Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka, and its secretariat is in Kathmandu.",
      "Its last summit was in Kathmandu in November 2014. The next was planned for Islamabad in 2016, but after an attack at Uri in Indian-administered Kashmir India said it would not attend, and the meeting never took place.",
      "[[bimstec|BIMSTEC]] (founded 1997) links Bangladesh, Bhutan, India, Nepal and Sri Lanka with Myanmar and Thailand around the Bay of Bengal.",
      {key:"SAARC is stuck mainly because of India–Pakistan rivalry; BIMSTEC is growing partly because Pakistan is not in it."}
     ],
     builder:[
      "**Design.** SAARC decides by unanimity and excludes bilateral and contentious issues from its deliberations, so the region’s main conflict cannot be discussed and any member can block.",
      "**Positions (October 2026).** The Maldives, Pakistan, Bangladesh, Nepal, Sri Lanka and Bhutan supported revival. India’s foreign ministry said “everyone knows which country is responsible for the obstacles to SAARC”; since 2016 India has argued that SAARC cannot function while a member state is involved in what it calls terrorist activities.",
      "**BIMSTEC.** Its charter came into force in 2024, its secretariat is in Dhaka, and its sixth summit met in Bangkok in April 2025. Members lead different sectors; India leads security.",
      "**Trade.** Both groupings have low shares of intra-regional trade compared with ASEAN or the EU, a sign of weak [[regionalisation]] as well as weak institutions."
     ],
     pro:[
      "**Explanations.** Realists stress asymmetry: one state larger than all the others, so neighbours fear domination and India prefers bilateral deals. Others stress identity and history: partition and the 1971 war left rivalries that institutions cannot bridge. Liberal institutionalists point to design: unanimity plus the exclusion of contentious issues guarantees paralysis when the biggest dispute flares.",
      "**Sub-regionalism.** Groupings such as BBIN (Bangladesh, Bhutan, India, Nepal) and BIMSTEC show “variable geometry”: cooperation among the willing. Critics say this deepens the exclusion of Pakistan and Afghanistan; supporters say it gets things done.",
      {tip:"Compare SAARC and ASEAN with the same period and indicators (summits, trade shares, agreements in force)."}
     ]
    },
    related:["south-asia-politics","asia-pacific-studies","comparative-regionalism","regional-security-complex-theory"],
    sources:[{t:"SAARC Secretariat: About SAARC", url:"https://www.saarc-sec.org/index.php/about-saarc/about-saarc"},{t:"The Kathmandu Post: Members push to revive SAARC but India holds firm (28 October 2026)", url:"https://kathmandupost.com/national/2026/10/28/members-push-to-revive-saarc-but-india-holds-firm-1793201957"},{t:"The Tribune: Explainer: why is the 7-nation bloc (BIMSTEC) important (5 April 2025)", url:"https://www.tribuneindia.com/news/india/explainer-why-is-7-nation-bloc-important-than-saarc"}],
    checked:"2026-11"},

   {id:"indian-foreign-policy", title:"India’s foreign policy: from non-alignment to multi-alignment", aka:["strategic autonomy","multi-alignment","Neighbourhood First","Act East","SAGAR"], tags:["South Asia","foreign policy","Global South"],
    summary:"How India has pursued freedom of action from Nehru’s non-alignment to Jaishankar’s multi-alignment, its regional policies, and its claim to speak for the Global South.",
    levels:{
     starter:[
      "After independence in 1947, India under Nehru chose not to join either Cold War bloc: [[non-aligned-movement|non-alignment]].",
      "Today Indian leaders speak of [[strategic-autonomy|strategic autonomy]] and [[multi-alignment|multi-alignment]]: working with many partners on different issues without becoming anyone’s ally. India is in the Quad with Australia, Japan and the United States, and in BRICS and the SCO with China and Russia.",
      {key:"India’s constant aim has been freedom of action; its tools and partners have changed."}
     ],
     builder:[
      "**Milestones.** Panchsheel with China (1954); Bandung (1955); co-founding the Non-Aligned Movement (Belgrade, 1961); war with China (1962); treaty with the Soviet Union (1971); economic opening (1991); nuclear tests (1998); Look East (1992) becoming Act East under Modi; Neighbourhood First (2014); SAGAR (2015) and MAHASAGAR (2025); the Indo-Pacific Oceans Initiative (2019); the Voice of the Global South summits (from January 2023, 125 countries at the first); the G20 presidency (2023), when the African Union joined.",
      "**Key text.** S. Jaishankar’s *The India Way* (2020): “convergence with many but congruence with none”. Ashley Tellis’s review (2021) summed it up as “non-allied forever”.",
      "**Contested relationships.** With China, an unsettled boundary ({{india-china-boundary}}); with Pakistan, Kashmir ({{kashmir-dispute}}); with smaller neighbours, cycles of closeness and suspicion."
     ],
     pro:[
      "**Interpretations.** Realists see a rising power hedging; liberals stress economic interdependence and institutions; constructivists stress civilisational identity and post-colonial memory. Indian scholars debate continuity with Nehru versus a new, more assertive realism.",
      "**Tensions.** India’s purchases of Russian oil after 2022 drew Western criticism; India answered that it must secure affordable energy. Its Global South leadership is contested by China and questioned by those who note its size and nuclear status.",
      "**Sources.** Use the Ministry of External Affairs’ speeches and joint statements as primary sources, and read them as statements of position."
     ]
    },
    related:["jawaharlal-nehru","india-china-boundary","kashmir-dispute","indo-pacific-concept","g20"],
    read:[{book:"bjpip", where:"Chapter 6 “The BJP and Indian Grand Strategy”"}],
    sources:[{t:"Carnegie Endowment: Non-Allied Forever: India’s Grand Strategy According to Subrahmanyam Jaishankar (Ashley J. Tellis, 3 March 2021)", url:"https://carnegieendowment.org/posts/2021/03/non-allied-forever-indias-grand-strategy-according-to-subrahmanyam-jaishankar?lang=en"},{t:"Ministry of External Affairs, India: Voice of Global South Summit", url:"https://www.mea.gov.in/voice-of-global-summit.htm"},{t:"Embassy of India, Belgrade: From SAGAR to MAHASAGAR (August 2025)", url:"https://eoibelgrade.gov.in/public_files/assets/pdf/SAGAR_to_MAHASAGAR_18_08_2025.pdf"}],
    checked:"2026-11"},

   {id:"india-china-boundary", title:"The India–China boundary", aka:["Line of Actual Control","LAC","McMahon Line","Aksai Chin","Galwan"], tags:["South Asia","East Asia","territorial disputes","security"],
    summary:"The world’s longest unsettled boundary between two nuclear-armed states: both governments’ positions, the 1962 war, the 2020 Galwan clash and the talks of 2024–2026.",
    levels:{
     starter:[
      "India and China share a long mountain boundary that has never been agreed. India gives its length as 3,488 km.",
      "In the west, China administers Aksai Chin, which India claims. In the east, India administers Arunachal Pradesh, most of which China claims. The armies are separated by the [[line-of-actual-control|Line of Actual Control]] (LAC), whose exact course each side reads differently.",
      "They fought a short war in 1962, and soldiers died in a clash in the Galwan valley in June 2020.",
      {key:"Describe each claim as a position: “India holds that…; China holds that…”."}
     ],
     builder:[
      "**Positions.** India regards the [[mcmahon-line|McMahon Line]], drawn at the 1914 Simla conference between British India and Tibet, as the eastern boundary and Aksai Chin as part of Ladakh. China rejects the McMahon Line as a colonial imposition that it never accepted, calls the area it claims in the east “Zangnan”, and treats Aksai Chin as Chinese territory.",
      "**Managing the dispute.** Panchsheel (1954), the 1993 and 1996 agreements on peace and confidence-building along the LAC, the 2005 agreement on political parameters, and the Special Representatives mechanism (from 2003).",
      "**2020–2026.** After Galwan (20 Indian soldiers killed; China acknowledged four deaths in February 2021) both sides deployed large forces. An understanding in October 2024 ended the eastern Ladakh standoff. In August 2026 the 25th Special Representatives meeting in Beijing agreed eight points, including work on an “early harvest” in boundary delimitation, new hotlines and reopened border trade points."
     ],
     pro:[
      "**Explanations.** Neville Maxwell’s *India’s China War* (1970) blamed India’s “forward policy”; Indian official and many Indian scholarly accounts blame Chinese aggression; later archival work stresses mutual misperception and the Tibet question. Present the debate as historiography.",
      "**Theory.** Boundary disputes between nuclear powers test the [[stability-instability-paradox|stability–instability paradox]]: nuclear weapons may deter war while allowing clashes. Both sides also link the boundary to wider relations differently: India says border peace is the basis for normal ties; China says the boundary question should be put in its appropriate place within the wider relationship.",
      {tip:"Maps are evidence of claims, not of facts on the ground. Name the source of any map you use."}
     ]
    },
    related:["indian-foreign-policy","kashmir-dispute"],
    sources:[{t:"Ministry of External Affairs, India: Panchsheel (text of the 1954 agreement)", url:"https://mea.gov.in/Uploads/PublicationDocs/191_panchsheel.pdf"},{t:"Business Today: India, China agree to advance boundary delimitation talks (28 August 2026)", url:"https://www.businesstoday.in/india/story/india-china-agree-to-advance-boundary-delimitation-talks-prevent-lac-miscalculation-551918-2026-08-28"}],
    checked:"2026-11"},

   {id:"kashmir-dispute", title:"The Kashmir dispute", aka:["Jammu and Kashmir","Line of Control","UNMOGIP","Article 370"], tags:["South Asia","territorial disputes","security","UN"],
    summary:"The dispute over the former princely state of Jammu and Kashmir: India’s and Pakistan’s positions, the UN’s role and the events of 2019–2025, told neutrally.",
    levels:{
     starter:[
      "Jammu and Kashmir was a princely state under British rule. After British India was partitioned in 1947, its ruler signed an instrument of accession to India in October, whose validity Pakistan disputes, and India and Pakistan went to war over the territory.",
      "Today India and Pakistan each administer part of the territory, divided by the [[line-of-control|Line of Control]], and China administers Aksai Chin and another area. All three administrations are contested by at least one other state.",
      {key:"There is no agreed name for many places here. Use neutral terms such as “Indian-administered” and “Pakistan-administered” Kashmir, and say whose position a term reflects."}
     ],
     builder:[
      "**Positions.** India: the whole state acceded in October 1947 and is an integral part of India; the issue is bilateral under the [[simla-agreement|Simla Agreement]] (1972), with no third-party role. Pakistan: the territory is disputed and its future should be decided by Kashmiris in line with UN Security Council resolutions; it welcomes international involvement. Kashmiri opinion is diverse, and some groups seek independence from both.",
      "**The UN.** [[unmogip|UNMOGIP]] observers have been present since January 1949. India says their mandate lapsed after 1972; Pakistan disagrees and lodges complaints; the Secretary-General says only the Security Council can end the mission.",
      "**2019–2025.** In August 2019 India removed the state’s special status under [[article-370|Article 370]]; its Supreme Court upheld this unanimously in December 2023 and Pakistan rejected the ruling. After the Pahalgam attack (22 April 2025, 26 civilians killed) India put the [[indus-waters-treaty|Indus Waters Treaty]] in abeyance and struck targets in Pakistan (7 May); a ceasefire followed on 10 May. The two governments gave different accounts of how it was reached."
     ],
     pro:[
      "**Historiography.** Historians debate the circumstances of accession in October 1947, the role of tribal forces from Pakistan, and the plebiscite promised in UN resolutions. Read accounts from both countries and from international scholars.",
      "**Security theory.** Kashmir is a standard case for the [[stability-instability-paradox|stability–instability paradox]] (Kargil 1999, the 2019 and 2025 crises) and for debates on escalation between nuclear-armed states.",
      "**Human rights.** UN human rights office reports in 2018 and 2019 raised concerns on both sides of the Line of Control; India’s government rejected them. Cite the reports themselves and each government’s published response."
     ]
    },
    related:["india-china-boundary","indian-foreign-policy","pakistan-civil-military-relations"],
    sources:[{t:"UNMOGIP: Background", url:"https://unmogip.unmissions.org/background"},{t:"Dawn: India’s top court upholds end of special status (11 December 2023)", url:"https://www.dawn.com/news/1796946/indias-top-court-upholds-end-of-special-status-for-held-kashmir-orders-polls"}],
    checked:"2026-11"},

   {id:"pacific-regionalism", title:"Pacific regionalism and the Blue Pacific", aka:["Pacific Islands Forum","Blue Pacific","2050 Strategy","new Pacific diplomacy","Pacific Way"], tags:["Pacific","regionalism","organisations"],
    summary:"How Pacific island states cooperate through the Pacific Islands Forum and other bodies, the Blue Pacific narrative and 2050 Strategy, and the “new Pacific diplomacy” since 2009.",
    levels:{
     starter:[
      "The [[pacific-islands-forum|Pacific Islands Forum]] (founded 1971) brings together 18 members: island states from Papua New Guinea and Fiji to tiny Tuvalu, together with Australia, New Zealand and two French territories.",
      "Its members are small in land but large in ocean, so they focus on shared issues: fisheries, climate change, ocean health and security.",
      "Leaders describe the region as the [[blue-pacific|Blue Pacific]], one ocean continent, and have a [[blue-pacific-2050-strategy|2050 Strategy]] for it.",
      {key:"Pacific regionalism turns many small voices into one larger one, especially on climate and the ocean."}
     ],
     builder:[
      "**Style.** Decisions are made by consensus, the [[pacific-way|“Pacific Way”]]. Specialist bodies sit around the Forum as [[crop-agencies|CROP agencies]].",
      "**Strategy.** The 2050 Strategy (2022) sets out a vision of “a resilient Pacific Region of peace, harmony, security, social inclusion and prosperity” in seven thematic areas.",
      "**Strains.** In 2021 the Micronesian members announced their departure after a contested vote for Secretary-General; a 2022 compromise and Kiribati’s return in 2023 restored unity. In 2026 leaders meeting in Palau again included all 21 dialogue partners and Taiwan as a development partner, after disputes over attendance in 2025.",
      "**New Pacific diplomacy.** Greg Fry and Sandra Tarte (2015) describe how, after 2009, island states created their own channels (a Pacific SIDS group at the UN, subregional bodies, tough fisheries bargaining by the [[parties-to-the-nauru-agreement|Parties to the Nauru Agreement]] through the [[vessel-day-scheme|Vessel Day Scheme]]) and took more control of their diplomacy."
     ],
     pro:[
      "**Who is Pacific?** Australia and New Zealand are members but also aid donors and security providers; some island leaders and scholars question their dual role, especially on climate policy. French territories joined as full members in 2016.",
      "**Subregions.** The [[melanesian-spearhead-group|Melanesian Spearhead Group]], the Polynesian Leaders Group and the Micronesian leaders’ meetings show identity politics within the region, partly built on colonial-era categories ([[pacific-subregions]]).",
      "**Scholarship.** Read Pacific authors first: Epeli Hau‘ofa’s “Our Sea of Islands” (1993/1994), the contributors to *The New Pacific Diplomacy*, and Pacific think tanks and media. For climate diplomacy see {{small-island-climate-diplomacy}}."
     ]
    },
    related:["epeli-hauofa","pacific-geopolitics","pacific-self-determination","small-island-climate-diplomacy","comparative-regionalism"],
    read:[{book:"newpacdip", where:"Chapter 1 “The ‘New Pacific Diplomacy’: An Introduction”"}],
    sources:[{t:"Pacific Islands Forum: 2050 Strategy for the Blue Pacific Continent", url:"https://forumsec.org/2050"},{t:"Devpolicy Blog: Affirmed, noted, endorsed: Pacific Islands Forum leaders in Koror (9 September 2026)", url:"https://devpolicy.org/?p=99809"},{t:"OAPEN: The New Pacific Diplomacy (Fry and Tarte, eds.)", url:"https://library.oapen.org/handle/20.500.12657/32853"}],
    checked:"2026-11"},

   {id:"pacific-geopolitics", title:"Great-power competition in the Pacific islands", aka:["Pacific geopolitics","Compacts of Free Association","Falepili Union","Pukpuk Treaty","China in the Pacific"], tags:["Pacific","security","great powers"],
    summary:"How China, the United States, Australia and others compete for influence in the Pacific islands, and how island states respond, as of 2026.",
    levels:{
     starter:[
      "Pacific island states control huge ocean areas, sit across sea and air routes, and each has a vote at the UN. That makes them attractive partners for larger powers.",
      "Since the late 2010s China, the United States and Australia have all increased aid, visits and security offers. Island governments use this attention to win support for their own priorities, above all climate change.",
      {key:"Competition is real, but island states are actors, not pawns: they bargain, choose partners and set conditions."}
     ],
     builder:[
      "**China.** Recognition switches from Taipei to Beijing by Solomon Islands and Kiribati (2019) and Nauru, now Naoero (2024); a 2022 security agreement with Solomon Islands; policing and infrastructure ties. As of May 2026 Taiwan’s Pacific allies were the Marshall Islands, Palau and Tuvalu.",
      "**United States.** Renewed economic terms of the [[compact-of-free-association|Compacts of Free Association]] with the Federated States of Micronesia, the Marshall Islands and Palau (2023–24); summits with Pacific leaders (2022, 2023).",
      "**Australia.** The [[falepili-union|Falepili Union]] with Tuvalu (in force August 2024) combines climate cooperation, a migration pathway (280 places a year at first) and a security guarantee, with any new third-party security engagement in Tuvalu to be mutually agreed; a 2024 agreement with Nauru (now Naoero); the Pukpuk mutual defence treaty with Papua New Guinea (signed October 2025, in force July 2026).",
      "**Island responses.** Some governments speak of being “friends to all”; the Forum’s [[ocean-of-peace|Ocean of Peace]] declaration (2025) and its 2026 call for advance notice of missile tests show collective responses."
     ],
     pro:[
      "**Debates.** One school reads events through great-power rivalry and warns of Chinese military access; another, associated with the new Pacific diplomacy, stresses island agency and warns that rivalry framing crowds out climate and development. Critics of the security-for-support treaties argue that they trade sovereignty for aid; supporters, including the governments that signed them, call them freely chosen partnerships.",
      "**Sovereignty bargains.** Clauses giving a partner a say over third-party security deals (Tuvalu, Naoero) are a form of negotiated sovereignty that scholars compare with the Compacts’ long-standing defence arrangements.",
      {tip:"When writing about a treaty, quote its text and both governments’ statements, and check whether it has entered into force."}
     ]
    },
    related:["pacific-regionalism","indo-pacific-concept","asia-pacific-security-architecture"],
    sources:[{t:"Australian Government DFAT: Australia–Tuvalu Falepili Union", url:"https://www.dfat.gov.au/geo/tuvalu/australia-tuvalu-falepili-union"},{t:"The Diplomat: Australia and PNG sign defense treaty; agreement with Vanuatu delayed (October 2025)", url:"https://sv7.thediplomat.com/2025/10/australia-and-png-sign-defense-treaty-agreement-with-vanuatu-delayed"},{t:"ThePrint (Reuters): Factbox: Taiwan’s 12 remaining diplomatic allies (2 May 2026)", url:"https://theprint.in/world/factbox-taiwans-12-remaining-diplomatic-allies/2920395/"}],
    checked:"2026-11"},

   {id:"pacific-self-determination", title:"Self-determination in the Pacific: Bougainville and New Caledonia", aka:["Bougainville referendum","New Caledonia referendums","Nouméa Accord","Bougival agreement","non-self-governing territories"], tags:["Pacific","decolonisation","self-determination"],
    summary:"The status, as of late 2026, of Bougainville’s path from its 2019 independence vote and of New Caledonia after three referendums and the Bougival agreement, with each side’s position.",
    levels:{
     starter:[
      "Decolonisation is not finished in the Pacific. The UN lists several Pacific territories, including New Caledonia, as [[non-self-governing-territory|non-self-governing territories]].",
      "In Bougainville, an autonomous region of Papua New Guinea, 97.7% voted for independence in 2019. PNG’s parliament must decide whether to ratify the result.",
      "In New Caledonia, a French territory, three referendums (2018, 2020, 2021) rejected independence, but the last was boycotted by pro-independence parties, and the territory’s future is still being negotiated.",
      {key:"In both cases, the dispute is not only about the answer but about the process: who votes, what majority is needed, and who must agree."}
     ],
     builder:[
      "**Bougainville.** After the 1988–98 war, the [[bougainville-peace-agreement|Bougainville Peace Agreement]] (2001) promised autonomy and a referendum. As of late October 2026 PNG’s parliament had debated but not voted. PNG’s government says a three-quarters majority (89 of 118 MPs) is required under the constitution; Bougainville’s leaders reject that threshold. Prime Minister James Marape says the outcome must be acceptable to Bougainville and the rest of PNG.",
      "**New Caledonia.** The [[noumea-accord|Nouméa Accord]] (1998) set up the referendums: 56.7% against independence in 2018, 53% in 2020 and 96.5% in 2021, when turnout was 43.9% after a boycott. Riots in May 2024 over widening the electoral roll left 14 dead. The Bougival agreement (2025) and a January 2026 follow-up proposed a “State of New Caledonia” within France; the FLNKS rejected it. France’s National Assembly rejected the constitutional bill on 2 April 2026. Provincial elections on 28 June 2026 left neither bloc with a majority on its own."
     ],
     pro:[
      "**Concepts.** International law distinguishes external self-determination (independence) from internal self-determination (autonomy within a state); the UN’s decolonisation list matters for which applies. Uti possidetis and territorial integrity weigh against secession outside colonial contexts.",
      "**Positions in New Caledonia.** The FLNKS argues that a model of a state inside France is internal autonomy, not decolonisation; anti-independence parties argue that three referendums settled the question and that the roll must include long-term residents. France’s government seeks an agreement that both can accept.",
      "**Regional angle.** Pacific Islands Forum and Melanesian Spearhead Group members follow both cases closely; the Forum has supported a peaceful, inclusive process in New Caledonia.",
      {tip:"These cases move quickly. Date every statement and check the latest official sources before citing a status."}
     ]
    },
    related:["pacific-regionalism","peace-operations","decolonization"],
    sources:[{t:"PINA: PNG parliament urged to balance Bougainville independence with national unity (22 October 2026)", url:"https://pina.com.fj/2026/10/22/png-parliament-urged-to-balance-bougainville-independence-with-national-unity/"},{t:"PMN News: Bougainville dispute deepens as PNG government defends 89-vote rule (12 June 2026)", url:"https://pmn.co.nz/read/political/bougainville-dispute-deepens-as-png-govt-defends-89-vote-rule-for-independence-decision"},{t:"Banque des Territoires: Les députés rejettent le projet de réforme constitutionnelle de la Nouvelle-Calédonie (April 2026)", url:"https://www.banquedesterritoires.fr/les-deputes-rejettent-le-projet-de-reforme-constitutionnelle-de-la-nouvelle-caledonie"}],
    checked:"2026-11"},

   {id:"indo-pacific-concept", title:"The Indo-Pacific as a concept", aka:["Indo-Pacific","Asia-Pacific","AOIP","IPOI","mental maps"], tags:["Asia","Pacific","regions","strategy"],
    summary:"How the Indo-Pacific moved from a sea-lane idea to official strategies, how governments define it differently, and what its critics and defenders argue.",
    levels:{
     starter:[
      "For decades governments spoke of the **Asia-Pacific**: East Asia, Southeast Asia, Oceania and the Pacific coasts of the Americas. Since the 2010s many speak of the **Indo-Pacific**, which joins the Indian Ocean and South Asia to that picture.",
      "The change is not just geography. A region’s name tells governments who belongs, which partners count and which threats matter.",
      {key:"Ask of any regional label: who drew it, where are its edges, and what is it for?"}
     ],
     builder:[
      "**Timeline.** Khurana (January 2007); Abe’s “Confluence of the Two Seas” in India’s parliament (22 August 2007); Australia’s Defence White Paper (2013); Japan’s FOIP (2016); US adoption (2017–18) and the renaming of Pacific Command (May 2018); India at the Shangri-La Dialogue (June 2018) and the [[ipoi|IPOI]] (2019); the [[aoip|ASEAN Outlook]] (June 2019); European strategies and the EU’s (2021).",
      "**Differences.** Australia: a “stable Indo-Pacific” from India to Northeast Asia. India: inclusive, from Africa to the Americas, not “a club of limited members”. ASEAN: “dialogue and cooperation instead of rivalry”, with ASEAN centrality. EU: from the east coast of Africa to the Pacific Islands, in seven priority areas. US: free and open, built on alliances and partnerships.",
      "**Critics.** China’s government prefers “Asia-Pacific” and sees containment; Southeast Asian scholars fear marginalisation; Australian and Indian scholars question coherence (Taylor 2020; Rajagopalan 2020)."
     ],
     pro:[
      "**Theory.** Realists read the concept as a balancing coalition; liberals as a project for rules and connectivity; constructivists as a [[strategic-narrative|strategic narrative]] that helps create the region it names. Lewis and Wigen’s “metageography” (*The Myth of Continents*, 1997) shows how all such maps encode power.",
      "**Defence of the concept.** Rory Medcalf’s *Contest for the Indo-Pacific* (2020) argues that it captures a real, connected, multipolar maritime region and empowers middle powers.",
      "**Research use.** Map definitions across official documents and over time; code which states are named; compare languages (for example the Japanese, Indonesian and Chinese terms used). Japan’s own policy is covered in Unit 18.",
      {tip:"The *International Affairs* special section of January 2020 (Kai He and Mingjiang Li, eds.) is a good one-stop collection of national perspectives."}
     ]
    },
    related:["indian-foreign-policy","pacific-geopolitics","asia-pacific-security-architecture","asia-pacific-studies"],
    sources:[{t:"Ministry of Foreign Affairs of Japan: “Confluence of the Two Seas”, speech by Prime Minister Shinzo Abe (22 August 2007)", url:"https://www.mofa.go.jp/region/asia-paci/pmv0708/speech-2.html"},{t:"ASEAN Outlook on the Indo-Pacific (text, 2019), via a treaty database", url:"https://cil.nus.edu.sg/wp-content/uploads/2019/09/2019-ASEANs-Outlook-on-the-Indo-Pacific.pdf"},{t:"European External Action Service: EU Indo-Pacific Strategy", url:"https://www.eeas.europa.eu/node/445611/"}],
    checked:"2026-11"},

   {id:"asia-pacific-studies", title:"Asia-Pacific studies and comparative regionalism in Asia", aka:["regionalisation","open regionalism","porous regions","Asia as method","security communities in Asia"], tags:["Asia","Pacific","area studies","regionalism","methods"],
    summary:"The concepts and debates scholars use to compare regions in East, Southeast and South Asia and the Pacific, and what Asia-Pacific studies looks like as a field.",
    levels:{
     starter:[
      "Asia-Pacific studies looks at a huge, varied area: East Asia, Southeast Asia, South Asia and the Pacific islands, often with Australia and New Zealand.",
      "Scholars compare how its parts cooperate. Some regions have strong institutions, some dense trade and travel, some both, some neither.",
      {key:"Two words to keep apart: regionalism (governments build institutions) and regionalisation (markets and people tie places together)."}
     ],
     builder:[
      "**Concepts.** [[regionalisation|Regionalisation]] versus regionalism (Pempel, *Remapping East Asia*, 2005); [[open-regionalism|open regionalism]] (APEC); [[porous-regions|porous regions]] (Katzenstein, *A World of Regions*, 2005); [[security-community|security communities]] (Deutsch 1957; Adler and Barnett 1998; Acharya 2001 on ASEAN); regional security complexes (Unit 12).",
      "**Puzzles.** Why no NATO in Asia (Hemmer and Katzenstein, 2002)? Why does ASEAN endure while SAARC stalls? Why are Pacific institutions strong relative to economic integration?",
      "**Field debates.** Takeuchi Yoshimi’s 1960 lecture and Chen Kuan-Hsing’s *Asia as Method* (2010) urge [[asia-as-method|inter-Asian comparison]] rather than measuring Asia against Europe; Pacific scholars following Hau‘ofa argue for Oceania-centred research."
     ],
     pro:[
      "**Methods.** Use comparative case designs (Unit 3) with indicators such as summit frequency, intra-regional trade shares, legal bindingness and conflict data. Combine with interpretive analysis of communiqués and speeches.",
      "**Sources.** Journals include *Pacific Affairs*, *The Pacific Review*, *Asian Survey*, *The Contemporary Pacific* and *International Relations of the Asia-Pacific*; primary sources include the ASEAN, Forum and SAARC secretariats’ documents.",
      "**Pitfalls.** Eurocentric yardsticks; ignoring language sources; treating membership lists and names as permanent (Timor-Leste joined ASEAN in 2025; Nauru became the Republic of Naoero in 2026).",
      {tip:"Write your comparison as a puzzle with rival explanations, and state what evidence would change your mind."}
     ]
    },
    related:["comparative-regionalism","peter-katzenstein","epeli-hauofa","south-asian-regionalism","indo-pacific-concept","area-studies"],
    sources:[{t:"CiNii: Remapping East Asia: the construction of a region (Pempel, ed., 2005)", url:"https://ci.nii.ac.jp/ncid/BA71561588?l=en"},{t:"Social Science Research Council: A World of Regions: Asia and Europe in the American Imperium", url:"https://www.ssrc.org/publications/a-world-of-regions-asia-and-europe-in-the-american-imperium/"}],
    checked:"2026-11"},

   {id:"jawaharlal-nehru", title:"Jawaharlal Nehru", aka:["Nehru","Pandit Nehru"], tags:["thinkers","South Asia","non-alignment"],
    summary:"India’s first prime minister (1947–64), architect of non-alignment and a founder of the Non-Aligned Movement, whose legacy is still debated.",
    levels:{
     starter:[
      "Jawaharlal Nehru (1889–1964) was a leader of India’s independence movement and India’s first prime minister, from independence on 15 August 1947 until his death in May 1964.",
      "He believed a newly free, poor country should not join either Cold War bloc. This became [[non-aligned-movement|non-alignment]].",
      "He also wrote history: *The Discovery of India* (1946) is his account of India’s past and identity.",
      {key:"Nehru’s core idea was freedom of action for post-colonial states, which still shapes Indian foreign policy."}
     ],
     builder:[
      "**Foreign policy.** He agreed the [[panchsheel|Panchsheel]] principles with China (1954), helped organise the Bandung Conference (1955) and co-founded the Non-Aligned Movement at Belgrade (1961). India opposed colonialism and apartheid and played a large role at the UN.",
      "**At home.** He built a parliamentary democracy and a mixed economy guided by Five-Year Plans, with heavy industry in the public sector.",
      "**The 1962 war.** China’s victory in the border war of October–November 1962 was a severe blow; critics blamed his government’s “forward policy” and unpreparedness."
     ],
     pro:[
      "**Debates.** Admirers see a democrat who held a diverse country together and gave post-colonial states a voice. Critics on the right fault his China policy and his handling of Kashmir; economists criticise import substitution for slowing growth. Jaishankar (2020) calls old non-alignment a posture of “abstention”; others see strong continuity between Nehru’s autonomy and today’s multi-alignment.",
      "**Using Nehru in a paper.** Read his speeches (for example “Tryst with Destiny”, 1947) as primary sources, and distinguish his ideas from the later Non-Aligned Movement, which grew far beyond India."
     ]
    },
    related:["indian-foreign-policy","india-china-boundary","third-world-project"],
    sources:[{t:"Ministry of External Affairs, India: Panchsheel", url:"https://mea.gov.in/Uploads/PublicationDocs/191_panchsheel.pdf"},{t:"Wikipedia: Jawaharlal Nehru (overview with references)", url:"https://en.wikipedia.org/wiki/Jawaharlal_Nehru"}],
    checked:"2026-11"},

   {id:"ayesha-jalal", title:"Ayesha Jalal", aka:["Jalal"], tags:["thinkers","South Asia","history"],
    summary:"Pakistan-born historian of South Asia, based in the United States, whose work reshaped how scholars understand Jinnah, partition and the dominance of Pakistan’s army and bureaucracy.",
    levels:{
     starter:[
      "Ayesha Jalal is a historian of South Asia, born in Lahore, Pakistan, in 1956 and working in the United States. She received a MacArthur Fellowship in 1998.",
      "Her first book, *The Sole Spokesman* (1985), argued that Muhammad Ali Jinnah and the Muslim League used the demand for Pakistan partly as a bargaining position, which changed how many historians tell the story of partition.",
      {key:"Jalal asks how states were built in South Asia, and who gained power in the process."}
     ],
     builder:[
      "**Key works.** *The Sole Spokesman: Jinnah, the Muslim League and the Demand for Pakistan* (1985); *The State of Martial Rule: The Origins of Pakistan’s Political Economy of Defence* (1990); *Democracy and Authoritarianism in South Asia* (1995); *Modern South Asia* (with Sugata Bose, 1998); *Self and Sovereignty* (2000); *Partisans of Allah: Jihad in South Asia* (2008).",
      "**The State of Martial Rule.** It explains how, between 1947 and 1965, Pakistan’s army and civil bureaucracy came to dominate the state, helped by Cold War alliances and the need to fund defence against India.",
      "**Democracy and Authoritarianism.** It compares India, Pakistan and Bangladesh and questions the sharp contrast between a democratic India and authoritarian neighbours, pointing to centralised state structures in all three."
     ],
     pro:[
      "**Influence and critics.** Her revisionist account of Jinnah is widely cited but debated: some historians, for example Venkat Dhulipala in *Creating a New Medina* (2015), argue that it underplays the popular, religiously framed mobilisation behind the Pakistan demand. Her comparative claims about India are contested by scholars who stress the depth of Indian electoral democracy.",
      "**Use.** Pair Jalal with Ayesha Siddiqa (*Military Inc.*, 2007) and with political scientists of civil–military relations when writing about Pakistan ({{pakistan-civil-military-relations}})."
     ]
    },
    related:["pakistan-civil-military-relations","south-asia-politics"],
    sources:[{t:"MacArthur Foundation: Ayesha Jalal, Class of 1998", url:"https://www.macfound.org/fellows/class-of-1998/ayesha-jalal"}],
    checked:"2026-11"},

   {id:"epeli-hauofa", title:"Epeli Hau‘ofa", aka:["Hau‘ofa","Hauofa","Our Sea of Islands"], tags:["thinkers","Pacific","anthropology"],
    summary:"Tongan anthropologist and writer (1939–2009) whose essay “Our Sea of Islands” reframed the Pacific as a connected ocean world rather than a scatter of tiny, dependent islands.",
    levels:{
     starter:[
      "Epeli Hau‘ofa (1939–2009) was born in Papua New Guinea to Tongan missionary parents and spent much of his life in Fiji, where he died in 2009.",
      "He was a social anthropologist and a writer of satirical fiction, including the novel *Kisses in the Nederends* (1987).",
      "His essay “Our Sea of Islands” (1993) argued that Pacific peoples are not small and isolated: the ocean connects them, as it always has.",
      {key:"“There is a world of difference between viewing the Pacific as ‘islands in a far sea’ and as ‘a sea of islands’.”"}
     ],
     builder:[
      "**The essay.** First published in *A New Oceania: Rediscovering Our Sea of Islands* (1993) and reprinted in *The Contemporary Pacific* (1994), it attacks the view that island states are “much too small, too poorly endowed with resources, and too isolated” to be anything but aid-dependent. Hau‘ofa points to voyaging, kinship, migration and remittances as an expanding Oceanian world.",
      "**Institution-building.** In 1997 he founded the Oceania Centre for Arts and Culture in Suva, to support Pacific artists. His selected works appeared as *We Are the Ocean* (2008).",
      "**Influence.** The [[sea-of-islands|sea of islands]] idea underlies the Pacific Islands Forum’s [[blue-pacific|Blue Pacific]] narrative and much Pacific studies."
     ],
     pro:[
      "**Critiques and extensions.** Readers have asked whether the essay’s optimism about mobility fits every Pacific community equally, since some have far fewer migration routes than others, and whether celebrating migration and remittances can obscure inequality and dependence. Others extend it to climate politics: if the ocean is home, sea-level rise threatens a whole way of life, not only land.",
      "**Using Hau‘ofa.** Cite him for the reframing of scale and dependency, and pair him with political analyses of Pacific regionalism ({{pacific-regionalism}})."
     ]
    },
    related:["pacific-regionalism","asia-pacific-studies"],
    sources:[{t:"Hau‘ofa, “Our Sea of Islands”, The Contemporary Pacific 6(1), 1994 (open-access PDF via CORE)", url:"https://core.ac.uk/download/5102191.pdf"},{t:"Wikipedia: Epeli Hauʻofa (overview with references)", url:"https://en.wikipedia.org/wiki/Epeli_Hau%CA%BBofa"}],
    checked:"2026-11"},

   {id:"peter-katzenstein", title:"Peter J. Katzenstein", aka:["Katzenstein"], tags:["thinkers","regionalism","constructivism","Japan"],
    summary:"German-born US political scientist (born 1945) known for work on culture and security, Japan, and regions in world politics, including “porous regions” and analytic eclecticism.",
    levels:{
     starter:[
      "Peter Katzenstein, born in 1945 in Germany, is a political scientist who has written about Europe, Japan and Asia for five decades.",
      "He is known for showing how norms and identities shape security policy, and for studying regions as building blocks of world politics.",
      {key:"Katzenstein’s message: regions matter, they are open to the world, and culture shapes how states see security."}
     ],
     builder:[
      "**Key works.** *Small States in World Markets* (1985); *Cultural Norms and National Security: Police and Military in Postwar Japan* (1996); *The Culture of National Security* (ed., 1996), a founding text of constructivist security studies; *Network Power: Japan and Asia* (ed. with Takashi Shiraishi, 1997); *A World of Regions* (2005); *Beyond Japan: East Asian Regionalism* (ed. with Shiraishi, 2006); *Beyond Paradigms: Analytic Eclecticism in World Politics* (with Rudra Sil, 2010).",
      "**A World of Regions.** Globalisation and internationalisation make regions [[porous-regions|porous]]; Europe and Asia are linked to an American “imperium” through Germany and Japan.",
      "**No NATO in Asia.** With Christopher Hemmer (2002) he argued that US policymakers’ sense of collective identity with Europeans, but not with Asians, explains multilateral alliances in Europe and bilateral ones in Asia."
     ],
     pro:[
      "**Analytic eclecticism.** With Sil he argued for combining insights from realism, liberalism and constructivism to explain concrete problems rather than defending one paradigm, an approach some praise as practical and others criticise as lacking a clear core.",
      "**Recognition.** He was president of the American Political Science Association (2008–09) and received the Johan Skytte Prize in 2020.",
      "**Critics.** Realists question how much identity explains alliance choices; postcolonial scholars note the US-centred framing of “imperium”."
     ]
    },
    related:["asia-pacific-studies","comparative-regionalism","asia-pacific-security-architecture"],
    sources:[{t:"Peter J. Katzenstein: curriculum vitae", url:"https://pkatzenstein.org/resume"},{t:"Social Science Research Council: A World of Regions", url:"https://www.ssrc.org/publications/a-world-of-regions-asia-and-europe-in-the-american-imperium/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"congress-system", term:"Congress system", def:"Rajni Kothari’s 1964 term for India’s early one-party dominance: the Congress as a broad “party of consensus”, with opposition parties acting as “parties of pressure” at its margins.", codex:"indian-democracy-debate"},
   {id:"hindutva", term:"Hindutva", def:"An ideology of Hindu nationalism that defines Indian nationhood in Hindu cultural terms; the ideological tradition of the BJP and its wider movement.", codex:"indian-democracy-debate"},
   {id:"electoral-autocracy", term:"Electoral autocracy", def:"A regime that holds multiparty elections but falls short of democratic standards on free and fair elections, free expression or free association; a category used by V-Dem.", codex:"indian-democracy-debate"},
   {id:"hybrid-regime", term:"Hybrid regime", def:"A regime that mixes democratic features, such as elections and parliaments, with authoritarian ones, such as an unelected power that sets limits on elected governments.", codex:"pakistan-civil-military-relations"},
   {id:"civil-military-relations", term:"Civil–military relations", def:"The balance of power and authority between elected civilian leaders and the armed forces, from firm civilian control to direct military rule.", codex:"pakistan-civil-military-relations"},
   {id:"pakistan-establishment", term:"The establishment (Pakistan)", def:"The term Pakistanis use for the army leadership and intelligence services as a political force, often working behind elected governments.", codex:"pakistan-civil-military-relations"},
   {id:"milbus", term:"Milbus", def:"Ayesha Siddiqa’s term (2007) for military capital used for the benefit of military personnel, especially officers, and kept outside the defence budget.", codex:"pakistan-civil-military-relations"},
   {id:"caretaker-government", term:"Caretaker government", def:"A temporary, non-party government that runs the state and organises elections; Bangladesh used a formal system of this kind from 1996 to 2011.", codex:"bangladesh-transition"},
   {id:"july-uprising", term:"July uprising (Bangladesh)", def:"The student-led mass protests of July–August 2024 that began over government job quotas and ended Sheikh Hasina’s government on 5 August 2024.", codex:"bangladesh-transition"},
   {id:"july-charter", term:"July Charter", def:"Bangladesh’s July National Charter of reform proposals, signed by most parties in October 2025 and approved in a referendum on 12 February 2026; it needs constitutional amendments to take effect.", codex:"bangladesh-transition"},
   {id:"aragalaya", term:"Aragalaya", def:"Sinhala for “struggle”: the 2022 protest movement in Sri Lanka that forced President Gotabaya Rajapaksa from office during an economic collapse.", codex:"south-asia-politics"},
   {id:"panchsheel", term:"Panchsheel", def:"The five principles of peaceful coexistence agreed by India and China in 1954: respect for territorial integrity and sovereignty, non-aggression, non-interference, equality and mutual benefit, and peaceful coexistence.", codex:"jawaharlal-nehru"},
   {id:"strategic-autonomy", term:"Strategic autonomy", def:"A state’s aim of keeping freedom of action by avoiding alliances; the stated goal of India’s foreign policy since the Cold War.", codex:"indian-foreign-policy"},
   {id:"multi-alignment", term:"Multi-alignment", def:"Working closely with many partners on different issues while allied to none; associated with India’s foreign minister S. Jaishankar.", codex:"indian-foreign-policy"},
   {id:"neighbourhood-first", term:"Neighbourhood First", def:"India’s policy, from 2014, of giving priority to relations, connectivity and aid with its South Asian neighbours.", codex:"indian-foreign-policy"},
   {id:"act-east-policy", term:"Act East policy", def:"India’s policy towards Southeast and East Asia under Narendra Modi, upgrading the Look East policy begun in 1992.", codex:"indian-foreign-policy"},
   {id:"sagar-doctrine", term:"SAGAR / MAHASAGAR", def:"India’s Indian Ocean vision: “Security and Growth for All in the Region” (2015), expanded in 2025 as “Mutual and Holistic Advancement for Security and Growth Across Regions”.", codex:"indian-foreign-policy"},
   {id:"mcmahon-line", term:"McMahon Line", def:"The line drawn at the 1914 Simla conference between British India and Tibet; India treats it as its eastern boundary with China, which rejects it.", codex:"india-china-boundary"},
   {id:"line-of-actual-control", term:"Line of Actual Control (LAC)", def:"The line separating Indian and Chinese forces along their disputed boundary; each side reads its course differently.", codex:"india-china-boundary"},
   {id:"simla-agreement", term:"Simla Agreement", def:"The 1972 agreement between India and Pakistan after the 1971 war, which turned the Kashmir ceasefire line into the Line of Control and committed both to settle differences bilaterally, as India reads it.", codex:"kashmir-dispute"},
   {id:"line-of-control", term:"Line of Control (LoC)", def:"The military line dividing Indian- and Pakistan-administered parts of Kashmir since the 1972 Simla Agreement.", codex:"kashmir-dispute"},
   {id:"article-370", term:"Article 370", def:"The article of India’s constitution that gave Jammu and Kashmir special status; India removed that status in 2019, and its Supreme Court upheld the change in 2023.", codex:"kashmir-dispute"},
   {id:"indus-waters-treaty", term:"Indus Waters Treaty", def:"The 1960 India–Pakistan treaty, brokered by the World Bank, that divides the waters of the Indus river system; India put it “in abeyance” in April 2025.", codex:"kashmir-dispute"},
   {id:"unmogip", term:"UNMOGIP", def:"The UN Military Observer Group in India and Pakistan, present since 1949; India says its mandate has lapsed, Pakistan says it continues.", codex:"kashmir-dispute"},
   {id:"voice-of-the-global-south", term:"Voice of the Global South summits", def:"Summits convened by India from January 2023 (125 countries at the first, held online) to gather developing countries’ priorities.", codex:"indian-foreign-policy"},
   {id:"sea-of-islands", term:"Sea of islands", def:"Epeli Hau‘ofa’s idea (1993) that the Pacific is a connected ocean world, not a scatter of small, isolated islands.", codex:"epeli-hauofa"},
   {id:"pacific-subregions", term:"Melanesia, Micronesia, Polynesia", def:"The three subregions into which colonial-era science divided the Pacific islands; still used as shorthand, though many scholars treat the boundaries as colonial inventions.", codex:"pacific-regionalism"},
   {id:"pacific-way", term:"Pacific Way", def:"A consultative, consensus-seeking style of regional politics, a phrase popularised by Fiji’s Ratu Sir Kamisese Mara around 1970.", codex:"pacific-regionalism"},
   {id:"crop-agencies", term:"CROP agencies", def:"The Council of Regional Organisations of the Pacific: specialist regional bodies, for fisheries, science, environment and more, that work with the Pacific Islands Forum.", codex:"pacific-regionalism"},
   {id:"blue-pacific", term:"Blue Pacific", def:"Pacific leaders’ narrative of the region as one ocean continent with a shared identity, used by the Pacific Islands Forum since 2017.", codex:"pacific-regionalism"},
   {id:"blue-pacific-2050-strategy", term:"2050 Strategy for the Blue Pacific Continent", def:"The Pacific Islands Forum’s long-term plan, adopted in 2022, with seven thematic areas from regionalism to climate and ocean.", codex:"pacific-regionalism"},
   {id:"new-pacific-diplomacy", term:"New Pacific diplomacy", def:"Fry and Tarte’s term for the way Pacific island states, after 2009, built their own diplomatic channels and took more control of regional and global diplomacy.", codex:"pacific-regionalism"},
   {id:"parties-to-the-nauru-agreement", term:"Parties to the Nauru Agreement (PNA)", def:"Eight Pacific island states, named after a 1982 agreement signed in Nauru (now Naoero), that jointly manage tuna fishing in their waters.", codex:"pacific-regionalism"},
   {id:"vessel-day-scheme", term:"Vessel Day Scheme", def:"The PNA’s system of selling days of fishing to foreign fleets, which sharply raised island states’ fisheries revenues.", codex:"pacific-regionalism"},
   {id:"compact-of-free-association", term:"Compact of Free Association", def:"Agreements between the United States and the Federated States of Micronesia, the Marshall Islands and Palau that pair US economic support and migration rights with US defence rights.", codex:"pacific-geopolitics"},
   {id:"falepili-union", term:"Falepili Union", def:"The Australia–Tuvalu treaty in force since 2024, combining climate cooperation, a migration pathway and a security guarantee.", codex:"pacific-geopolitics"},
   {id:"melanesian-spearhead-group", term:"Melanesian Spearhead Group", def:"A subregional body of Melanesian members, including Fiji, Papua New Guinea, Solomon Islands, Vanuatu and New Caledonia’s FLNKS.", codex:"pacific-regionalism"},
   {id:"ocean-of-peace", term:"Blue Pacific Ocean of Peace", def:"A Pacific Islands Forum declaration (2025) expressing the aim of a peaceful, secure ocean region; leaders cited it in 2026 when calling for notice of missile tests.", codex:"pacific-geopolitics"},
   {id:"non-self-governing-territory", term:"Non-self-governing territory", def:"A territory on the UN’s list of places whose peoples have not yet attained a full measure of self-government, such as New Caledonia.", codex:"pacific-self-determination"},
   {id:"bougainville-peace-agreement", term:"Bougainville Peace Agreement", def:"The 2001 agreement that ended Bougainville’s conflict with Papua New Guinea, granting autonomy and a deferred referendum on independence, held in 2019.", codex:"pacific-self-determination"},
   {id:"noumea-accord", term:"Nouméa Accord", def:"The 1998 agreement on New Caledonia’s gradual self-government and future, which provided for the referendums of 2018, 2020 and 2021.", codex:"pacific-self-determination"},
   {id:"indo-pacific", term:"Indo-Pacific", def:"A regional frame joining the Indian and Pacific Oceans and South Asia to East Asia; governments define its edges and purposes differently.", codex:"indo-pacific-concept"},
   {id:"asia-pacific", term:"Asia-Pacific", def:"The regional frame dominant from the 1980s, centred on East and Southeast Asia, Oceania and the Pacific coasts of the Americas, and institutionalised in APEC.", codex:"indo-pacific-concept"},
   {id:"mental-map", term:"Mental map", def:"A shared picture of which places belong together and where a region’s edges are; regions are mental maps as much as physical facts.", codex:"indo-pacific-concept"},
   {id:"strategic-narrative", term:"Strategic narrative", def:"A story about the international order that a government tells to shape how others understand events and act.", codex:"indo-pacific-concept"},
   {id:"apec", term:"APEC", def:"Asia-Pacific Economic Cooperation: a forum founded in 1989 by twelve economies, now 21 “member economies”, that promotes open trade and investment.", codex:"indo-pacific-concept"},
   {id:"aoip", term:"ASEAN Outlook on the Indo-Pacific (AOIP)", def:"ASEAN’s 2019 statement on the Indo-Pacific, stressing ASEAN centrality, inclusiveness and “dialogue and cooperation instead of rivalry”.", codex:"indo-pacific-concept"},
   {id:"ipoi", term:"Indo-Pacific Oceans Initiative (IPOI)", def:"India’s 2019 initiative for practical cooperation in the Indo-Pacific, organised in seven pillars from maritime security to trade and transport.", codex:"indian-foreign-policy"},
   {id:"regionalisation", term:"Regionalisation", def:"The bottom-up growth of ties within a region through trade, investment, production networks and migration, as distinct from state-led regionalism.", codex:"asia-pacific-studies"},
   {id:"open-regionalism", term:"Open regionalism", def:"Regional cooperation that lowers barriers among members without discriminating against outsiders; the founding idea of APEC.", codex:"asia-pacific-studies"},
   {id:"porous-regions", term:"Porous regions", def:"Katzenstein’s term (2005) for regions that are open to the world and shaped by globalisation and by links to the United States.", codex:"peter-katzenstein"},
   {id:"security-community", term:"Security community", def:"A group of states with dependable expectations of peaceful change: they no longer expect or prepare for war with each other (Deutsch, 1957).", codex:"asia-pacific-studies"},
   {id:"asia-as-method", term:"Asia as method", def:"The call, from Takeuchi Yoshimi (1960) to Chen Kuan-Hsing (2010), to use Asian societies as each other’s reference points instead of measuring Asia against the West.", codex:"asia-pacific-studies"},
   {id:"saarc", term:"SAARC", def:"The South Asian Association for Regional Cooperation, founded in 1985 by seven states and joined by Afghanistan; it has held no summit since 2014.", codex:"south-asian-regionalism"},
   {id:"bimstec", term:"BIMSTEC", def:"The Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (1997): Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand.", codex:"south-asian-regionalism"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u21-q01", lesson:"e4u21-l1", level:1, q:"Which eight states are usually meant by “South Asia” in IR?", options:[
     {t:"The SAARC members: Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka", ok:true, why:"Right: SAARC’s membership is the usual working definition."},
     {t:"India, Pakistan, Bangladesh, Myanmar, Thailand, Nepal, Bhutan and Sri Lanka", why:"Myanmar and Thailand are BIMSTEC members but in Southeast Asia, not SAARC."},
     {t:"India, China, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka and the Maldives", why:"China is an East Asian state, not a SAARC member."},
     {t:"The members of the Indian Ocean Rim alone", why:"That is a different, much wider grouping."}]},
   {id:"e4u21-q02", lesson:"e4u21-l1", level:2, q:"A news report says “V-Dem classifies India as an electoral autocracy, so India no longer holds elections.” What is wrong with this?", options:[
     {t:"An electoral autocracy, by definition, still holds multiparty elections; the category concerns their fairness and wider freedoms", ok:true, why:"Right: India held a general election with more than 960 million eligible voters in 2024."},
     {t:"Nothing: V-Dem says India has abolished elections", why:"V-Dem says no such thing."},
     {t:"V-Dem only measures economic growth", why:"V-Dem measures democracy across many dimensions."},
     {t:"V-Dem classifies India as a liberal democracy", why:"Its reports since 2021 classify India as an electoral autocracy, a classification India’s government disputes."}]},
   {id:"e4u21-q03", lesson:"e4u21-l1", level:1, q:"In the 2024 Indian general election, how many seats did the BJP win on its own out of 543?", options:[
     {t:"240", ok:true, why:"Right: short of the 272 needed for a majority; its alliance won 293."},
     {t:"303", why:"That was its 2019 total."},
     {t:"293", why:"That is the National Democratic Alliance’s total, not the BJP’s alone."},
     {t:"99", why:"That is the Congress party’s total."}]},
   {id:"e4u21-q04", lesson:"e4u21-l1", level:2, q:"Mei writes: “Since India’s government rejects the indices, they must be wrong.” What is the best response?", options:[
     {t:"A government’s rejection is a position to report, not proof; judge the indices by their methods and other evidence", ok:true, why:"Right: attribute positions and evaluate evidence separately."},
     {t:"She is right; governments always know best", why:"That is an appeal to authority."},
     {t:"The indices must be right because they are foreign", why:"Also an appeal to authority, the other way round."},
     {t:"Indices and governments never disagree", why:"They often do, as here."}]},
   {id:"e4u21-q05", lesson:"e4u21-l1", level:1, q:"Which pair of works is matched correctly?", options:[
     {t:"Jalal, *The State of Martial Rule* (1990); Siddiqa, *Military Inc.* (2007)", ok:true, why:"Right: both on Pakistan’s military and state."},
     {t:"Jalal, *Military Inc.* (2007); Siddiqa, *The Sole Spokesman* (1985)", why:"The titles are swapped: *The Sole Spokesman* and *The State of Martial Rule* are Jalal’s."},
     {t:"Jaffrelot, *The India Way* (2020); Jaishankar, *Modi’s India* (2021)", why:"Swapped authors."},
     {t:"Kothari, *A World of Regions* (2005)", why:"That book is Katzenstein’s; Kothari wrote on the Congress system."}]},
   {id:"e4u21-q06", lesson:"e4u21-l1", level:3, q:"An analyst calls Pakistan since 2018 a “hybrid regime”. Which evidence would best **support** the label, and which reply would its critics make?", options:[
     {t:"Support: elections and civilian governments coexist with strong military influence, as the 2025 amendment shows; reply: the government says the changes modernise command and that elected institutions still govern", ok:true, why:"Right: evidence for the label plus the attributed counter-position."},
     {t:"Support: Pakistan has no parliament; reply: none", why:"Pakistan has a parliament; the label assumes elections exist."},
     {t:"Support: Pakistan is a monarchy; reply: it is a republic", why:"Pakistan is a federal parliamentary republic."},
     {t:"Support: the army never takes positions on politics; reply: it always does", why:"This contradicts the claim it is meant to support."}]},
   {id:"e4u21-q07", lesson:"e4u21-l1", level:2, q:"Which statement about Bangladesh’s February 2026 election is accurate?", options:[
     {t:"The Awami League was barred; the BNP won 209 of 300 directly elected seats and Jamaat-e-Islami a record 68", ok:true, why:"Right, with a referendum on the July Charter held the same day."},
     {t:"The Awami League won a narrow majority", why:"The party was barred from the election."},
     {t:"The student-founded NCP won a majority", why:"It won 6 seats."},
     {t:"The election was postponed to 2027", why:"It was held on 12 February 2026."}]},
   {id:"e4u21-q08", lesson:"e4u21-l1", level:3, q:"Oluwaseun is writing about Bangladesh’s 2024–26 transition. Which sentence is best for a neutral seminar paper?", options:[
     {t:"A UN report found reasonable grounds to believe crimes against humanity may have been committed in 2024; Hasina denies the charges against her and calls the tribunal that sentenced her “rigged”", ok:true, why:"Right: findings attributed to their source, with the accused’s response."},
     {t:"Hasina is guilty of everything she was accused of", why:"States a contested legal conclusion as fact."},
     {t:"The uprising was a foreign plot", why:"An unsupported claim stated as fact."},
     {t:"Nothing happened in 2024 that matters", why:"Ignores well-documented events."}]},
   {id:"e4u21-q09", lesson:"e4u21-l1", level:2, q:"What do Sri Lanka 2022, Bangladesh 2024 and Nepal 2025 have in common, and what is the main caution?", options:[
     {t:"Protests helped topple governments and new forces then won elections; but triggers and institutions differ, so avoid one “South Asian Spring” story", ok:true, why:"Right: similarity plus difference."},
     {t:"All were military coups", why:"None was a military coup."},
     {t:"All were caused by the same court ruling", why:"Only Bangladesh’s began with a ruling on job quotas."},
     {t:"All ended with the same party in power everywhere", why:"Different parties won in each country."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u21-q10", lesson:"e4u21-l2", level:1, q:"Where did the Panchsheel principles first appear?", options:[
     {t:"In a 1954 India–China agreement on trade and travel with the Tibet region", ok:true, why:"Right: signed on 29 April 1954."},
     {t:"In the UN Charter", why:"The Charter (1945) has its own principles, not Panchsheel."},
     {t:"In the 1972 Simla Agreement", why:"That was an India–Pakistan agreement."},
     {t:"In the 2019 ASEAN Outlook", why:"Far later and unrelated."}]},
   {id:"e4u21-q11", lesson:"e4u21-l2", level:2, q:"Which phrase from Jaishankar’s *The India Way* best captures multi-alignment?", options:[
     {t:"“Convergence with many but congruence with none”", ok:true, why:"Right: close cooperation without alliance."},
     {t:"“Asia of rivalry will hold us all back”", why:"That is from Modi’s 2018 Shangri-La speech."},
     {t:"“Dialogue and cooperation instead of rivalry”", why:"That is from the ASEAN Outlook."},
     {t:"“A sea of islands”", why:"That is Hau‘ofa’s phrase."}]},
   {id:"e4u21-q12", lesson:"e4u21-l2", level:1, q:"What does SAGAR stand for?", options:[
     {t:"Security and Growth for All in the Region", ok:true, why:"Right: announced in Mauritius in March 2015."},
     {t:"South Asian Growth and Aid Regime", why:"Not a real programme."},
     {t:"Strategic Alliance for Greater Asian Resilience", why:"India avoids alliances; this is invented."},
     {t:"Sea Area Governance and Rules", why:"Invented; SAGAR is about security and growth in the Indian Ocean region."}]},
   {id:"e4u21-q13", lesson:"e4u21-l2", level:2, q:"Which statement about the Line of Actual Control is accurate?", options:[
     {t:"It separates Indian and Chinese forces, and each side reads its exact course differently", ok:true, why:"Right: one reason incidents occur."},
     {t:"It is a treaty boundary both sides ratified in 1914", why:"China never accepted the 1914 McMahon Line, and the LAC is not a treaty line."},
     {t:"It divides Indian- and Pakistan-administered Kashmir", why:"That is the Line of Control."},
     {t:"It was abolished in 2024", why:"The 2024 understanding ended a standoff; the LAC still exists."}]},
   {id:"e4u21-q14", lesson:"e4u21-l2", level:1, q:"What did India’s Supreme Court decide in December 2023?", options:[
     {t:"It unanimously upheld the 2019 removal of Jammu and Kashmir’s special status under Article 370", ok:true, why:"Right; it also ordered assembly elections by 30 September 2024."},
     {t:"It restored Article 370", why:"It upheld the removal."},
     {t:"It ruled the Indus Waters Treaty invalid", why:"That was not the case before it."},
     {t:"It handed Kashmir to the UN", why:"No court did anything of the kind."}]},
   {id:"e4u21-q15", lesson:"e4u21-l2", level:3, q:"Fatima must summarise the May 2025 India–Pakistan ceasefire neutrally. Which sentence is best?", options:[
     {t:"A ceasefire took effect on 10 May 2025; Pakistan’s prime minister credited US mediation, while India said the two militaries agreed it directly", ok:true, why:"Right: both accounts attributed."},
     {t:"The United States forced both sides to stop", why:"States one account as fact."},
     {t:"India and Pakistan never fought in 2025", why:"They exchanged strikes from 7 to 10 May."},
     {t:"The ceasefire was agreed at the UN Security Council", why:"No Council resolution produced it."}]},
   {id:"e4u21-q16", lesson:"e4u21-l2", level:2, q:"What are India’s and Pakistan’s positions on UNMOGIP?", options:[
     {t:"India says its mandate lapsed after 1972; Pakistan says it continues and lodges complaints; the UN says only the Security Council can end it", ok:true, why:"Right: three attributed positions."},
     {t:"Both want it expanded into a peacekeeping force", why:"Neither government has taken that position."},
     {t:"Both say it ended in 1949", why:"It began in 1949."},
     {t:"India lodges complaints; Pakistan ignores it", why:"Reversed: Pakistan lodges complaints; India has not since 1972."}]},
   {id:"e4u21-q17", lesson:"e4u21-l2", level:3, q:"Which argument would a **constructivist** most likely make about India’s refusal to join alliances?", options:[
     {t:"A post-colonial, civilisational identity makes formal alliances feel like a loss of independence", ok:true, why:"Right: identity and memory explain the preference."},
     {t:"India hedges because China is strong and the US is far away", why:"A realist, power-based argument."},
     {t:"Trade ties make alliances unnecessary", why:"A liberal, interdependence argument."},
     {t:"India has no foreign policy", why:"Plainly false."}]},
   {id:"e4u21-q18", lesson:"e4u21-l2", level:2, q:"During India’s G20 presidency in 2023, what change to the G20’s membership was agreed?", options:[
     {t:"The African Union became a permanent member", ok:true, why:"Right, at the New Delhi summit in September 2023."},
     {t:"Pakistan joined", why:"Pakistan is not a G20 member."},
     {t:"Russia was expelled", why:"Russia remains a member."},
     {t:"ASEAN replaced Indonesia", why:"Indonesia remains a member; ASEAN is not a member."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u21-q19", lesson:"e4u21-l3", level:1, q:"Who wrote “Our Sea of Islands”?", options:[
     {t:"Epeli Hau‘ofa", ok:true, why:"Right: the Tongan anthropologist and writer, in 1993."},
     {t:"Ratu Sir Kamisese Mara", why:"Mara is associated with the Pacific Way."},
     {t:"Greg Fry", why:"Fry co-edited *The New Pacific Diplomacy*."},
     {t:"Peter Katzenstein", why:"Katzenstein wrote *A World of Regions*."}]},
   {id:"e4u21-q20", lesson:"e4u21-l3", level:2, q:"Why do Pacific leaders describe their region as a “Blue Pacific Continent”?", options:[
     {t:"To present scattered island states as one large ocean community with shared interests and a stronger joint voice", ok:true, why:"Right: an identity and a diplomatic strategy."},
     {t:"Because the islands are joined by land", why:"They are not."},
     {t:"Because the UN created a new continent", why:"No such decision exists."},
     {t:"To exclude Australia and New Zealand from the Forum", why:"Both remain members."}]},
   {id:"e4u21-q21", lesson:"e4u21-l3", level:1, q:"What does the Vessel Day Scheme do?", options:[
     {t:"It lets the Parties to the Nauru Agreement sell days of fishing to foreign fleets", ok:true, why:"Right: it sharply raised their revenues."},
     {t:"It bans all fishing in the Pacific", why:"It regulates and prices fishing."},
     {t:"It schedules cruise ships", why:"Unrelated: the scheme is about tuna fishing."},
     {t:"It is a US naval patrol plan", why:"It is run by island states."}]},
   {id:"e4u21-q22", lesson:"e4u21-l3", level:2, q:"Which description of the Falepili Union is accurate?", options:[
     {t:"An Australia–Tuvalu treaty, in force since 2024, combining climate cooperation, a migration pathway and a security guarantee", ok:true, why:"Right; any new third-party security engagement in Tuvalu is to be mutually agreed."},
     {t:"A Chinese security pact with Tuvalu", why:"Tuvalu recognises Taiwan, and the treaty is with Australia."},
     {t:"A fisheries agreement among Micronesian states", why:"That describes neither the treaty nor its parties."},
     {t:"A US Compact of Free Association", why:"The Compacts are with the FSM, the Marshall Islands and Palau."}]},
   {id:"e4u21-q23", lesson:"e4u21-l3", level:3, q:"Ana argues that recent Pacific treaties with Australia “trade sovereignty for aid”. Which reply is most balanced?", options:[
     {t:"Clauses giving Australia a say over third-party security deals do limit choices, but the governments that signed them call them freely chosen partnerships, so the trade-off is contested", ok:true, why:"Right: engages her point and the other side’s stated position."},
     {t:"Treaties never affect sovereignty", why:"Some clauses clearly constrain choices."},
     {t:"Island states had no say in the treaties", why:"They negotiated and signed them."},
     {t:"Only China signs treaties in the Pacific", why:"Australia, the US and others do too."}]},
   {id:"e4u21-q24", lesson:"e4u21-l3", level:2, q:"As of late October 2026, what was the status of Bougainville’s 2019 independence vote?", options:[
     {t:"Papua New Guinea’s parliament had opened debate but not voted; the two governments disputed the majority required", ok:true, why:"Right: PNG’s government says 89 of 118 MPs; Bougainville’s leaders reject that threshold."},
     {t:"Bougainville became independent in 2020", why:"Ratification by PNG’s parliament had not happened."},
     {t:"The vote was annulled by the UN", why:"No such annulment occurred."},
     {t:"Most voters chose to stay in PNG", why:"97.7% voted for independence."}]},
   {id:"e4u21-q25", lesson:"e4u21-l3", level:1, q:"Which agreement set up New Caledonia’s three independence referendums?", options:[
     {t:"The Nouméa Accord (1998)", ok:true, why:"Right: referendums were held in 2018, 2020 and 2021."},
     {t:"The Bougival agreement (2025)", why:"That came after the referendums."},
     {t:"The Biketawa Declaration", why:"That is a Forum crisis-response framework."},
     {t:"The Treaty of Rarotonga", why:"That created a South Pacific nuclear-free zone."}]},
   {id:"e4u21-q26", lesson:"e4u21-l3", level:3, q:"Tomás writes: “New Caledonia settled its future in 2021 when 96.5% rejected independence.” What is the most important missing context?", options:[
     {t:"Turnout was 43.9% because pro-independence parties boycotted the vote after asking for a delay, and they do not accept it as settling the question", ok:true, why:"Right: the result is accurate but its legitimacy is disputed."},
     {t:"The vote was held in France, not New Caledonia", why:"It was held in New Caledonia."},
     {t:"Independence actually won", why:"It did not: 96.5% of those who voted chose to stay with France."},
     {t:"There was no vote in 2021", why:"It was held on 12 December 2021."}]},
   {id:"e4u21-q27", lesson:"e4u21-l3", level:2, q:"Which statement about Pacific island recognition of Taiwan is accurate as of May 2026?", options:[
     {t:"The Marshall Islands, Palau and Tuvalu recognised Taiwan; Solomon Islands, Kiribati and Nauru (now Naoero) had switched to Beijing", ok:true, why:"Right: switches in 2019 (Solomon Islands, Kiribati) and 2024 (Nauru, renamed Naoero in 2026)."},
     {t:"No Pacific state recognised Taiwan", why:"Three did: the Marshall Islands, Palau and Tuvalu."},
     {t:"All Forum members recognised Taiwan", why:"Most recognise Beijing."},
     {t:"Fiji and Papua New Guinea recognised Taiwan", why:"Both recognise Beijing."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u21-q28", lesson:"e4u21-l4", level:1, q:"Where and when did Shinzo Abe give his “Confluence of the Two Seas” speech?", options:[
     {t:"In India’s parliament, on 22 August 2007", ok:true, why:"Right: in the Central Hall of India’s parliament, during an official visit."},
     {t:"At the UN General Assembly in 2016", why:"Wrong place and date."},
     {t:"At the first Quad leaders’ summit in 2021", why:"Wrong event."},
     {t:"At APEC in 1989", why:"Wrong event and date."}]},
   {id:"e4u21-q29", lesson:"e4u21-l4", level:2, q:"Which version of the Indo-Pacific explicitly describes the region “not as contiguous territorial spaces but as a closely integrated and interconnected region”?", options:[
     {t:"The ASEAN Outlook on the Indo-Pacific (2019)", ok:true, why:"Right: with ASEAN at the centre."},
     {t:"Australia’s 2013 Defence White Paper", why:"It described an arc from India to Northeast Asia."},
     {t:"The EU strategy (2021)", why:"It describes a span from East Africa to the Pacific Islands."},
     {t:"The US renaming of Pacific Command (2018)", why:"That was a military command decision."}]},
   {id:"e4u21-q30", lesson:"e4u21-l4", level:1, q:"What does a “mental map” mean in the study of regions?", options:[
     {t:"A shared picture of which places belong together and where a region’s edges are", ok:true, why:"Right: regions are drawn by people, not simply found."},
     {t:"A map drawn from memory in an exam", why:"Not the IR meaning."},
     {t:"A satellite map", why:"Satellites show land and sea, not regions."},
     {t:"A map of brain activity", why:"Unrelated to the study of regions."}]},
   {id:"e4u21-q31", lesson:"e4u21-l4", level:2, q:"Why is India’s absence from APEC relevant to the shift from “Asia-Pacific” to “Indo-Pacific”?", options:[
     {t:"The Asia-Pacific institutions stopped at Southeast Asia, so the Indo-Pacific frame brought India into the regional picture", ok:true, why:"Right: one material and strategic reason for the new label."},
     {t:"India founded APEC", why:"India is not a member; APEC was founded by twelve other economies in 1989."},
     {t:"APEC banned the term Asia-Pacific", why:"APEC still uses it."},
     {t:"India left APEC in 2018", why:"India was never a member."}]},
   {id:"e4u21-q32", lesson:"e4u21-l4", level:3, q:"Hana reads a 2025 speech by a Southeast Asian minister that uses “Asia-Pacific” throughout and never says “Indo-Pacific”. What is the best analytical response?", options:[
     {t:"Treat the choice as possible evidence of a position, check the speaker’s other texts and context, and avoid concluding too much from one speech", ok:true, why:"Right: labels can signal positions, but one text is thin evidence."},
     {t:"Conclude the minister supports China", why:"Overreads one word choice."},
     {t:"Ignore it: words never matter", why:"Regional labels often carry meaning."},
     {t:"Conclude the speech is from before 2007", why:"It is dated 2025."}]},
   {id:"e4u21-q33", lesson:"e4u21-l4", level:3, q:"Which argument is a **realist** reading of the Indo-Pacific concept?", options:[
     {t:"It is a balancing coalition against China’s rising power expressed in geographic language", ok:true, why:"Right: power and balancing."},
     {t:"It is a narrative that helps create the region it names", why:"A constructivist reading."},
     {t:"It is a project to spread rules, standards and connectivity", why:"A liberal reading."},
     {t:"It is an ocean science term with no politics", why:"Ignores its strategic use."}]},
   {id:"e4u21-q34", lesson:"e4u21-l4", level:2, q:"How did China’s foreign minister Wang Yi describe the Indo-Pacific idea in 2018?", options:[
     {t:"As something that would dissipate “like sea foam”", ok:true, why:"Right: China’s government prefers “Asia-Pacific”."},
     {t:"As “a stable Indo-Pacific”", why:"That is Australia’s 2013 phrase."},
     {t:"As “dialogue and cooperation instead of rivalry”", why:"That is the ASEAN Outlook."},
     {t:"As “a confluence of the two seas”", why:"That was Abe in 2007."}]},
   {id:"e4u21-q35", lesson:"e4u21-l4", level:1, q:"Which book defends the Indo-Pacific as describing a real, multipolar maritime region?", options:[
     {t:"Rory Medcalf, *Contest for the Indo-Pacific* (2020)", ok:true, why:"Right: he argues the frame empowers middle powers in a multipolar region."},
     {t:"Lewis and Wigen, *The Myth of Continents* (1997)", why:"A critique of how world regions are drawn in general."},
     {t:"Chen Kuan-Hsing, *Asia as Method* (2010)", why:"About decolonising knowledge in Asia."},
     {t:"Ayesha Jalal, *The Sole Spokesman* (1985)", why:"About Jinnah and the demand for Pakistan."}]},
   {id:"e4u21-q36", lesson:"e4u21-l4", level:2, q:"In 2018 India’s prime minister said India does not see the Indo-Pacific as…", options:[
     {t:"“a strategy or as a club of limited members”", ok:true, why:"Right: India stresses inclusiveness and freedom of action."},
     {t:"a region at all", why:"India uses the term and launched the IPOI in 2019."},
     {t:"important for trade", why:"India stresses trade and connectivity."},
     {t:"including the Indian Ocean", why:"The Indian Ocean is central to India’s view."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u21-q37", lesson:"e4u21-l5", level:1, q:"What is the difference between regionalism and regionalisation?", options:[
     {t:"Regionalism is state-led institution-building; regionalisation is bottom-up integration through markets and people", ok:true, why:"Right: Pempel and colleagues’ distinction."},
     {t:"They are synonyms", why:"Scholars use them for different processes."},
     {t:"Regionalism is economic; regionalisation is military", why:"Not the distinction."},
     {t:"Regionalisation means joining the EU", why:"It applies to any region."}]},
   {id:"e4u21-q38", lesson:"e4u21-l5", level:2, q:"Which feature of SAARC’s Charter helps explain its paralysis?", options:[
     {t:"Unanimity, plus the exclusion of bilateral and contentious issues from its deliberations", ok:true, why:"Right: one member can block, and the main conflict cannot be discussed."},
     {t:"A rule that summits must be held in India", why:"No such rule; the 2016 summit was due in Islamabad."},
     {t:"Majority voting that outvotes India", why:"SAARC uses unanimity."},
     {t:"A ban on trade agreements", why:"SAARC has a free-trade-area agreement (2004)."}]},
   {id:"e4u21-q39", lesson:"e4u21-l5", level:1, q:"Which states belong to both SAARC and BIMSTEC?", options:[
     {t:"Bangladesh, Bhutan, India, Nepal and Sri Lanka", ok:true, why:"Right: BIMSTEC adds Myanmar and Thailand and leaves out Afghanistan, the Maldives and Pakistan."},
     {t:"India and Pakistan only", why:"Pakistan is not in BIMSTEC."},
     {t:"All eight SAARC members", why:"Three are not in BIMSTEC."},
     {t:"Myanmar and Thailand", why:"They are in BIMSTEC and ASEAN, not SAARC."}]},
   {id:"e4u21-q40", lesson:"e4u21-l5", level:2, q:"Deutsch defined a security community as a group with…", options:[
     {t:"dependable expectations of “peaceful change”, so members no longer prepare for war with each other", ok:true, why:"Right (1957)."},
     {t:"a mutual defence treaty against outsiders", why:"That is an alliance; a security community concerns relations among members."},
     {t:"a single government", why:"That is only the amalgamated type; pluralistic communities keep sovereignty."},
     {t:"no armed forces", why:"Members can keep armies; they do not expect to use them on each other."}]},
   {id:"e4u21-q41", lesson:"e4u21-l5", level:2, q:"What does Chen Kuan-Hsing’s “Asia as method” propose?", options:[
     {t:"Using other Asian societies as reference points, instead of always measuring Asia against Europe or the US", ok:true, why:"Right: building on Takeuchi Yoshimi’s 1960 lecture."},
     {t:"Adopting European institutions everywhere in Asia", why:"The opposite of his argument."},
     {t:"Studying only one Asian country at a time", why:"He urges inter-Asian comparison."},
     {t:"Ending area studies", why:"He seeks to change, not end, how Asia is studied."}]},
   {id:"e4u21-q42", lesson:"e4u21-l5", level:3, q:"Kenji’s puzzle: “Why did ASEAN keep meeting through crises while SAARC stalled?” Which plan follows this lesson’s method best?", options:[
     {t:"Define both bodies and dates, choose indicators (summits, trade, agreements), test power, design and norms explanations, and answer the best counter-argument", ok:true, why:"Right: puzzle, definitions, indicators, rival explanations, counter-argument."},
     {t:"Describe ASEAN’s history in detail and stop", why:"Description is not comparison."},
     {t:"Assume ASEAN is better because it is older", why:"An assumption, not an explanation."},
     {t:"Use the EU as the standard and grade both", why:"A Eurocentric yardstick the lesson warns against."}]},
   {id:"e4u21-q43", lesson:"e4u21-l5", level:3, q:"Hemmer and Katzenstein (2002) explain why there is no NATO in Asia mainly by…", options:[
     {t:"US policymakers’ sense of shared identity with Western Europeans but not with Asian partners", ok:true, why:"Right: a constructivist, identity-based argument."},
     {t:"Asia’s lack of any security threats", why:"The Cold War in Asia brought wars in Korea and Vietnam."},
     {t:"A UN ban on Asian alliances", why:"No such ban exists."},
     {t:"Geography alone", why:"They stress identity, not geography alone."}]},
   {id:"e4u21-q44", lesson:"e4u21-l5", level:2, q:"Which example best shows that institutions cross the lines drawn on regional maps?", options:[
     {t:"The East Asia Summit includes India, Australia, New Zealand, Russia and the United States as well as ASEAN, China, Japan and South Korea", ok:true, why:"Right: “East Asia” as an institution reaches far beyond East Asia."},
     {t:"SAARC includes only South Asian states", why:"That is an example of a body matching its region."},
     {t:"The Pacific Islands Forum meets in the Pacific", why:"Location is not the point."},
     {t:"ASEAN has eleven members", why:"True but not an example of crossing regional lines."}]},
   {id:"e4u21-q45", lesson:"e4u21-l5", level:1, q:"Which idea is associated with APEC’s founding?", options:[
     {t:"Open regionalism: lowering barriers without discriminating against outsiders", ok:true, why:"Right: the approach APEC adopted from its founding in 1989."},
     {t:"A customs union with a common external tariff", why:"That is closed regionalism, as in the EU."},
     {t:"Collective defence", why:"APEC is an economic forum."},
     {t:"Supranational courts", why:"APEC has no court."}]}
  ]
});
