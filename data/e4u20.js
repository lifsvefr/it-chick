/* International Studies · Unit 20 · Southeast Asia and ASEAN in depth */
ICA.addUnit({
  id:"e4u20", track:"e4", n:20, title:"Southeast Asia and ASEAN in depth", icon:"🌏",
  blurb:"Eleven states, hundreds of languages, every major world religion and almost every kind of political regime: how scholars study Southeast Asia, why its regimes change, how its economies plug into world value chains, how ASEAN really works (from its 2007 Charter to Myanmar and Timor-Leste’s accession), and how religion, ethnicity and popular culture shape the region. Dated as of November 2026.",
  goals:[
    "Explain how “Southeast Asia” was constructed as a region and use the field’s key works (Emmerson, Wolters, Reid, Thongchai, Furnivall, Scott) in a seminar",
    "Compare the region’s political regimes and the main explanations for democratisation, backsliding, coups and authoritarian durability, neutrally and with dates",
    "Analyse Southeast Asia’s political economy: development paths, the ASEAN Economic Community, FDI and value chains, Indonesia’s nickel policy and migration within the region",
    "Assess ASEAN as an institution: its Charter and decision rules, centrality and the great powers, the Myanmar Five-Point Consensus and its record, and Timor-Leste’s accession",
    "Discuss Islam, Buddhism, ethnic Chinese communities and regional popular culture without essentialising any group",
    "Design a comparative case study of two Southeast Asian countries for a seminar paper"
  ],
  read:[
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"A short, free account of thinking about international relations from Asia, including Southeast Asia. Read it with Lesson 1."},
    {book:"ospol", where:"Chapter 13, sections 13.2 “Categorizing Contemporary Regimes” and 13.3 “Recent Trends: Illiberal Representative Regimes”", note:"Gentle background for Lesson 2’s regime vocabulary."},
    {book:"seasurvey26", where:"The full report, especially the sections on regional concerns, ASEAN and the major powers", note:"An annual survey of opinion among Southeast Asian experts, officials and business people. Use it for Lessons 4 and 5, and note who was asked."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u20-l1", title:"Studying Southeast Asia: a region by construction", minutes:60,
   hook:{q:"The name “Southeast Asia” became common in English largely because of…", options:["Ancient Chinese maps of the “Southern Ocean”","An Allied military command set up in 1943","The founding of ASEAN in 1967","The Bandung Conference of 1955"], answer:1, reveal:"**An Allied military command.** Earlier writers had used the phrase now and then, but it spread when the Allies created South East Asia Command in 1943, under Admiral Lord Louis Mountbatten, to fight Japan. Its borders did not even match today’s region. A region named by outsiders for a war is a good place to start asking what “Southeast Asia” really is, and that is this lesson’s question."},
   goals:[
     "Describe the region’s diversity and its colonial and wartime pasts without treating any country as typical",
     "Explain the debate on Southeast Asia as a constructed region (Emmerson, Wolters’ mandala, Reid’s age of commerce and Lieberman’s reply)",
     "Use key works on states, nations and resistance (Thongchai, Furnivall, Scott) and their critics",
     "Explain Smail’s call for an “autonomous history” and the insider and outsider debate in Southeast Asian studies",
     "Plan how to study one Southeast Asian country responsibly for a seminar paper"
   ],
   learn:[
    {h:"Eleven states, one name", body:[
      {lead:"A Catholic village in Timor-Leste, a Buddhist monastery in Laos, a mosque in Aceh and a high-rise in Singapore all count as “Southeast Asia”. What, if anything, do they share?"},
      "Since Timor-Leste joined ASEAN on 26 October 2025, the region and the organisation have the same eleven members: Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor-Leste and Vietnam (spelled Viet Nam in ASEAN documents). The IR primer introduced [[asean|ASEAN]]; Unit 9 compared it with other regional bodies ({{comparative-regionalism}}). This unit studies the region itself ({{southeast-asian-studies}}), then returns to ASEAN in Lesson 4.",
      "Scholars usually split it into two parts. **Mainland Southeast Asia** (Myanmar, Thailand, Laos, Cambodia, Vietnam) is a land of great river valleys such as the Irrawaddy, the Chao Phraya and the Mekong; it is mostly Theravada Buddhist in the west, while Vietnam was shaped by long contact with China. **Maritime** or island Southeast Asia (Malaysia, Singapore, Brunei, Indonesia, the Philippines, Timor-Leste) grew around sea trade and is mostly Muslim, with a mainly Catholic Philippines and Timor-Leste.",
      "The contrasts are huge. Indonesia has one of the world’s largest Muslim populations and hundreds of languages; Singapore is a city-state; Brunei is an absolute monarchy; Vietnam and Laos are ruled by communist parties. Comparison is the region’s great opportunity and its great trap: it is easy to compare, and easy to over-generalise."
    ]},
    {h:"Colonial pasts and a wartime name", body:[
      "Every country except Thailand (then Siam) was colonised, but by different powers, at different times and in different ways. The diagram sums up who ruled where.",
      {fig:'<svg viewBox="0 0 340 480"><text x="170" y="22" text-anchor="middle">Mainland Southeast Asia</text><rect class="d-sage" x="10" y="32" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="52">Myanmar (Burma)</text><text class="s" x="20" y="70">British: conquest 1824–85; independent 1948</text><rect class="d-sage" x="10" y="84" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="104">Thailand (Siam)</text><text class="s" x="20" y="122">never formally colonised; a buffer state</text><rect class="d-sage" x="10" y="136" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="156">Vietnam, Laos, Cambodia</text><text class="s" x="20" y="174">French Indochina; independent 1945–54</text><text x="170" y="210" text-anchor="middle">Maritime Southeast Asia</text><rect class="d-gold" x="10" y="220" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="240">Malaysia, Singapore, Brunei</text><text class="s" x="20" y="258">British; 1957 (Malaya), 1965, 1984</text><rect class="d-gold" x="10" y="272" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="292">Indonesia</text><text class="s" x="20" y="310">Dutch; proclaimed 1945, recognised 1949</text><rect class="d-gold" x="10" y="324" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="344">Philippines</text><text class="s" x="20" y="362">Spanish, then US from 1898; independent 1946</text><rect class="d-gold" x="10" y="376" width="320" height="46" rx="8" stroke-width="2"/><text x="20" y="396">Timor-Leste</text><text class="s" x="20" y="414">Portuguese; Indonesian rule 1975–99; 2002</text><rect class="d-rose" x="10" y="430" width="320" height="42" rx="8" stroke-width="2"/><text x="170" y="448" text-anchor="middle">1941–45: Japan occupied or dominated</text><text class="s" x="170" y="465" text-anchor="middle">almost the whole region</text></svg>', alt:"Two stacked groups. Mainland Southeast Asia: Myanmar, British, conquered 1824 to 1885, independent 1948; Thailand, never formally colonised, a buffer state; Vietnam, Laos and Cambodia, French Indochina, independent 1945 to 1954. Maritime Southeast Asia: Malaysia, Singapore and Brunei, British, independent 1957 (Malaya), 1965 and 1984; Indonesia, Dutch, independence proclaimed 1945 and recognised 1949; the Philippines, Spanish then US from 1898, independent 1946; Timor-Leste, Portuguese, then Indonesian rule 1975 to 1999, independent 2002. A band at the bottom: from 1941 to 1945 Japan occupied or dominated almost the whole region.", cap:"Who ruled where. Independence dates are the ones most often given; several were reached through war or long negotiation (see Unit 1)."},
      "Unit 1 told the story of Indonesia’s and Vietnam’s independence struggles and the Cold War in the region ({{cold-war-in-asia}}); here the point is analytical. Colonial borders cut across older networks, and colonial states classified their subjects by “race” and religion in censuses that still shape politics. {{benedict-anderson|Benedict Anderson}} called this the work of the “census, map, museum” ([[imagined-community|imagined communities]], Unit 6).",
      "The name came last. The Allies’ South East Asia Command, created in 1943 under Admiral Lord Louis Mountbatten, gave the phrase official life. Donald K. Emmerson’s classic article “‘Southeast Asia’: What’s in a Name?” (*Journal of Southeast Asian Studies*, 1984) argued that the name both **describes** and **invents** its subject: it points to real similarities but also imposes a unity and clear borders that the area did not have."
    ]},
    {h:"Before the borders: mandalas and an age of commerce", body:[
      "Two famous works argue that the region had a shape of its own long before Europeans or Allied generals named it.",
      "O. W. Wolters, in *History, Culture, and Region in Southeast Asian Perspectives* (1982; revised 1999), described early polities as [[mandala-state|mandalas]]: circles of power around a charismatic ruler, overlapping and unstable, held together by personal loyalty and tribute rather than fixed borders. A minor ruler might pay homage to two overlords at once. The anthropologist Stanley Tambiah used a related image, the “galactic polity” ({{mandala-polity}}).",
      "Anthony Reid’s *Southeast Asia in the Age of Commerce, 1450–1680* (two volumes, 1988 and 1993) argued that the lands “below the winds” formed one trading world, linked by the monsoon, ports such as Malacca and shared patterns of diet, dress and the relatively high status of women ([[age-of-commerce|age of commerce]]). Victor Lieberman (*Strange Parallels*, 2003 and 2009) replied that mainland states followed rhythms of political consolidation like those of France, Russia and Japan, so the region was less unique than Reid suggested.",
      {ex:"Historians have long described Thailand as the one country that “escaped” colonialism. Thongchai Winichakul’s *Siam Mapped* (1994) complicated the story. He showed how Siam’s rulers adopted Western mapping in the late nineteenth century and turned fuzzy, shared frontiers into a fixed national territory, which he called the [[geo-body|geo-body]]. In defending itself, Siam became a modern territorial state much like its colonial neighbours. Lesson: “not colonised” does not mean “untouched by colonial modernity”.", label:"Worked example: the country that was never colonised"}
    ]},
    {h:"Whose history? The insider and outsider debate", body:[
      "Much early Western scholarship told Southeast Asian history as the story of Indian, Chinese and then European influence on passive locals. In 1961 John Smail published “On the Possibility of an Autonomous History of Modern Southeast Asia” (*Journal of Southeast Asian History*). He called for an [[autonomous-history|autonomous history]] that starts from local societies and treats outside forces as pressures they absorbed and reshaped.",
      "Area studies grew fast in the Cold War, often with government money, and was criticised for serving foreign policy (Unit 4 traced the same debate for Japan: {{area-studies}}). Today the field is increasingly led from the region itself, through journals, research institutes and universities across Southeast Asia, and scholars ask whose questions and whose languages set the agenda.",
      "Anderson’s *The Spectre of Comparisons* (1998) took its title from the Filipino novelist José Rizal: the unsettling double vision of seeing your own country and Europe at once, each changing how you see the other. Comparison within the region (Indonesia with the Philippines, Thailand with Myanmar) often teaches more than comparison with Europe.",
      {tip:"In a seminar, avoid “Southeast Asians believe…” or “Asian values say…” ([[asian-values]]). Name the country, the group, the period and the source, and say who disagrees."}
    ]},
    {h:"States, plural societies and those who refuse to be governed", body:[
      "Three ideas from the region travelled across the social sciences.",
      {list:[
        "**Plural society.** J. S. Furnivall, a British official and scholar of Burma, described colonial Burma and the Netherlands Indies as [[plural-society|plural societies]] (*Netherlands India*, 1939; *Colonial Policy and Practice*, 1948): different communities living side by side, meeting only in the marketplace, held together by colonial power. Later writers used the idea to explain ethnic politics after independence; critics said it froze groups that were in fact mixing and changing.",
        "**Moral economy and everyday resistance.** {{james-c-scott|James C. Scott}} argued in *The Moral Economy of the Peasant* (1976) that peasants rebel when elites break a shared sense of a right to subsistence ([[moral-economy|moral economy]]). In *Weapons of the Weak* (1985), based on fieldwork in a Malaysian village, he showed [[everyday-resistance|everyday resistance]]: foot-dragging, gossip, pilfering, quiet non-compliance.",
        "**Zomia.** In *The Art of Not Being Governed* (2009) Scott took up the historian Willem van Schendel’s term [[zomia|Zomia]] (2002) for the uplands from Vietnam to northeast India. He argued that many hill peoples were not “left behind” by states but had fled and resisted them. Lieberman (2010) replied that Scott made little use of local-language sources such as Burmese records, that the evidence of mass flight to the hills was thin, and that the uplands’ own ecology mattered; others noted that some upland peoples built states of their own."
      ]},
      "Each idea shows the region producing theory, not just data: a point Unit 2 made about [[norm-localization|norm localisation]] and the [[asean-way|ASEAN Way]] ({{global-ir}})."
    ]},
    {h:"Doing Southeast Asian studies well", body:[
      "A graduate paper on the region usually needs three things: a country or comparison chosen for a reason, some engagement with local sources (in translation if necessary), and awareness of who has written about it before.",
      {table:[
        ["Habit","What it looks like"],
        ["Name the unit","“Malaysia 1969–1971”, not “Malay culture”"],
        ["Read local scholars","Cite authors from the region, not only Western ones"],
        ["Check the language","Use local names and spellings and explain them"],
        ["Mind the archive","Colonial records see what rulers wanted to see"],
        ["Compare within","Indonesia vs the Philippines, not only vs France"]
      ]},
      "Where do you start? The *Journal of Southeast Asian Studies*, *Contemporary Southeast Asia* and *SOJOURN* are standard journals; many articles are paywalled, so look for authors’ free versions and for free commentary sites run by regional research institutes. Newspapers from the region publish in English and local languages, and a short course in Bahasa Indonesia/Malay, Thai, Vietnamese or Tagalog changes what you can read. Japanese scholarship on Southeast Asia is large and old; East Asian and Australian research centres are important too, so the “outsider” is not always Western.",
      {key:"“Southeast Asia” is both a real area of connection and a name made by outsiders. Good scholarship studies its diversity, takes local agency seriously and treats the region as a source of theory."},
      {terms:["southeast-asia","mandala-state","age-of-commerce","geo-body","autonomous-history","plural-society","moral-economy","everyday-resistance","zomia"]}
    ]}
   ],
   try:[
    {id:"e4u20-l1-x1", type:"mcq", q:"What was Donald Emmerson’s main argument in “‘Southeast Asia’: What’s in a Name?” (1984)?", options:[
      {t:"The name both describes real connections and invents a unity and borders the area did not clearly have", ok:true, why:"Right. Emmerson placed the name between simply recognising something and creating it."},
      {t:"Southeast Asia is a purely Western fiction with no real connections at all", why:"Too strong. Emmerson accepted real similarities; his point was that the name also imposes unity."},
      {t:"The region should be renamed to match ASEAN’s membership", why:"His article was about how names shape knowledge, not a proposal to rename the region."},
      {t:"The name was first used by ASEAN in 1967", why:"The name was used much earlier and spread with South East Asia Command in 1943."}
    ]},
    {id:"e4u20-l1-x2", type:"sort", q:"Which power ruled each territory for most of the colonial period?", buckets:["British","French","Dutch","Spanish, then US"], items:[
      {t:"Burma (Myanmar)", b:0, why:"Conquered by Britain in three wars between 1824 and 1885; independent in 1948."},
      {t:"Malaya and Singapore", b:0, why:"British; Malaya became independent in 1957, and Singapore separated from Malaysia in 1965."},
      {t:"Laos and Cambodia", b:1, why:"Part of French Indochina."},
      {t:"Vietnam", b:1, why:"Also French Indochina; independence was declared in 1945 and fought for until 1954."},
      {t:"The islands that became Indonesia", b:2, why:"The Netherlands; independence was proclaimed in 1945 and recognised in 1949."},
      {t:"The Philippines", b:3, why:"Spain ruled for over three centuries; the United States took over from 1898 until independence in 1946."}
    ]},
    {id:"e4u20-l1-x3", type:"mcq", q:"An early Southeast Asian ruler sends gifts to two stronger kings at once and keeps running his own affairs. Which concept best describes this order?", options:[
      {t:"A mandala of overlapping circles of power based on personal loyalty", ok:true, why:"Yes. Wolters’ mandala model expects overlapping, shifting loyalties rather than fixed borders."},
      {t:"A Westphalian state with clear, exclusive borders", why:"Exclusive territorial sovereignty is exactly what the mandala model says was missing."},
      {t:"A plural society held together by a colonial power", why:"Furnivall’s concept describes colonial societies, not early polities."},
      {t:"Everyday resistance by peasants", why:"Scott’s concept is about quiet resistance from below, not relations between rulers."}
    ]},
    {id:"e4u20-l1-x4", type:"match", q:"Match each work to its author.", pairs:[
      ["*Southeast Asia in the Age of Commerce, 1450–1680*","Anthony Reid","Two volumes (1988, 1993) describing a shared maritime trading world."],
      ["*Siam Mapped* (1994)","Thongchai Winichakul","How mapping created Siam’s “geo-body”."],
      ["*History, Culture, and Region in Southeast Asian Perspectives*","O. W. Wolters","The mandala model of early polities (1982; revised 1999)."],
      ["*The Art of Not Being Governed* (2009)","James C. Scott","Upland peoples as refugees from state-making."],
      ["*Netherlands India* (1939)","J. S. Furnivall","The origin of the idea of the plural society."]
    ]},
    {id:"e4u20-l1-x5", type:"mcq", q:"A historian writes about a nineteenth-century Javanese revolt using only Dutch colonial reports and describes villagers as “reacting” to Dutch policies. What would Smail’s “autonomous history” urge?", options:[
      {t:"Start from the village’s own social changes and sources, and treat Dutch policy as one pressure among others", ok:true, why:"Right. Smail asked historians to centre local societies without ignoring outside forces."},
      {t:"Ignore the Dutch completely, since they were foreign", why:"Autonomy does not mean pretending colonialism did not exist; it means changing the centre of the story."},
      {t:"Rely only on the colonial archive, because it is the most complete", why:"Colonial archives record what rulers wanted to see; Smail’s point is to look beyond them."},
      {t:"Compare Java with France instead", why:"Comparison can help, but it does not answer whose perspective organises the history."}
    ]},
    {id:"e4u20-l1-x6", type:"order", q:"Put these events in chronological order.", items:[
      {t:"The Portuguese capture Malacca, a leading port of the region.", why:"1511: the start of a direct European presence in the region’s trade."},
      {t:"The Spanish make Manila the capital of their colony in the Philippines.", why:"1571."},
      {t:"The British establish a trading post at Singapore.", why:"1819, under Stamford Raffles."},
      {t:"The Allies create South East Asia Command.", why:"1943: the name of the region gains official use."},
      {t:"Five states found ASEAN in Bangkok.", why:"8 August 1967."},
      {t:"Timor-Leste becomes ASEAN’s eleventh member.", why:"26 October 2025."}
    ]},
    {id:"e4u20-l1-x7", type:"spot", q:"A student’s seminar paragraph. Tap the claims that **essentialise or overgeneralise**.", ask:"weak claims", parts:[
      {t:"Southeast Asia includes eleven states with very different political systems.", flag:false, why:"Accurate and properly cautious."},
      " ",
      {t:"Southeast Asians are naturally respectful of authority, which explains their governments.", flag:true, why:"A sweeping cultural claim about hundreds of millions of people, used as an explanation. Name groups, periods and evidence instead."},
      " ",
      {t:"Colonial censuses in Burma and the Netherlands Indies classified people by “race”.", flag:false, why:"A documented historical point, discussed by Anderson."},
      " ",
      {t:"Since Thailand was never colonised, colonialism did not affect it.", flag:true, why:"Thongchai showed that Siam’s rulers adopted colonial-style mapping and administration; “not colonised” is not “untouched”."},
      " ",
      {t:"Reid argues for a shared maritime trading world; Lieberman disputes how unique it was.", flag:false, why:"A fair statement of a scholarly debate with both sides named."}
    ]}
   ],
   apply:{
    intro:"Practise thinking about the region as a scholar. Everything here is free.",
    tasks:[
     {t:"Map your own mental map", how:[
       "Without looking anything up, write down which countries you think belong to Southeast Asia and three things you associate with the region.",
       "Now check the list of ASEAN’s eleven members on ASEAN’s website (asean.org, “Member States”).",
       "Note where your associations came from: news, films, tourism, food, friends. Which countries did you know least about?"
     ], write:"My first list… What I missed… Where my images came from… Which country I want to learn about…"},
     {t:"Read one local voice", how:[
       "Find an English-language opinion piece by a writer from a Southeast Asian country, in a newspaper from that country (for example a national daily from the Philippines, Indonesia, Malaysia, Thailand or Singapore).",
       "Summarise its argument in three sentences.",
       "Ask: what does this writer take for granted that a foreign correspondent might explain, and the other way round?"
     ], write:"Writer and outlet… Argument… What they assume… What an outsider would add…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “Southeast Asia” a useful unit of analysis, or an outsiders’ invention that hides more than it shows?",
       "2. Did colonialism create the region’s states, or did older polities shape what colonialism could do?",
       "3. Is Scott’s Zomia a history of real people or a political argument about states?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing your mental map with ASEAN’s membership, a summary of one local opinion piece, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"Read it after this lesson: it places Southeast Asian ideas within Asian thinking about international relations."},
    {book:"owh2", where:"Chapter 2, section 2.2 “The Malacca Sultanate”", note:"A free account of the trading port at the heart of Reid’s “age of commerce”."},
    {book:"owh2", where:"Chapter 9, sections 9.3 “Colonial Empires” and 9.4 “Exploitation and Resistance”", note:"Background on the colonial empires that drew the region’s borders."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u20-l2", title:"Political regimes and change", minutes:65,
   hook:{q:"In May 2018 Malaysia’s ruling coalition lost a general election for the first time since independence in 1957. What happened next?", options:["The coalition refused to leave and the army stepped in","Power passed peacefully to an opposition alliance led by a 92-year-old former prime minister","The election was annulled by the courts","The king appointed a caretaker government for two years"], answer:1, reveal:"**A peaceful handover.** The Pakatan Harapan alliance won, and Mahathir Mohamad, who had led the old ruling coalition as prime minister from 1981 to 2003, returned at 92 as the opposition’s leader. The new government collapsed in 2020, and Anwar Ibrahim became prime minister in November 2022. The region’s regimes change through elections, protests, courts and coups, and scholars disagree about why. That is this lesson."},
   goals:[
     "Describe the formal political systems of the eleven Southeast Asian states as of November 2026",
     "Explain democratisation, backsliding and authoritarian durability using key works (Slater, Slater and Wong, Levitsky and Way, Bermeo)",
     "Explain how one-party states and dominant-party systems such as Vietnam’s and Singapore’s work",
     "Analyse the political role of militaries, monarchies and courts, with Thailand as a case, and describe Myanmar since 2021 neutrally",
     "Use regime labels carefully and attribute contested classifications"
   ],
   learn:[
    {h:"A region of every regime", body:[
      {lead:"Within a two-hour flight you can cross from an absolute monarchy to a one-party state to a fiercely competitive democracy."},
      "The sociology primer defined [[democracy]] and [[authoritarianism]]. Comparative politics adds a middle category, often called a hybrid regime, which mixes real elections with an uneven playing field. Labels for particular countries are **contested**, so the table gives only the formal system each constitution sets out ({{regimes-in-southeast-asia}}).",
      {table:[
        ["Country","Formal system (as of November 2026)"],
        ["Brunei","Absolute monarchy (sultanate)"],
        ["Cambodia","Constitutional monarchy; one party dominant since the 1990s"],
        ["Indonesia","Presidential republic; direct presidential elections since 2004"],
        ["Laos","One-party socialist republic"],
        ["Malaysia","Federal constitutional monarchy, parliamentary"],
        ["Myanmar","2008 constitution drafted under military rule; a quarter of seats reserved for the military"],
        ["Philippines","Presidential republic"],
        ["Singapore","Parliamentary republic; one party in government since 1959"],
        ["Thailand","Constitutional monarchy, parliamentary; 2017 constitution"],
        ["Timor-Leste","Semi-presidential republic"],
        ["Vietnam","One-party socialist republic"]
      ]},
      "Indices such as V-Dem and Freedom House classify these countries in different ways (Unit 3 discussed their methods: {{ir-datasets}}). In a paper, say which index you use and for which year."
    ]},
    {h:"Waves, and why they break", body:[
      "Samuel Huntington’s *The Third Wave* (1991) described the spread of democracy after 1974. Southeast Asia joined in bursts: the Philippines’ **People Power** protests of February 1986 removed Ferdinand Marcos ([[people-power-revolution|People Power Revolution]]); Thailand’s 1992 protests ended a military-backed government; Indonesia’s [[reformasi|Reformasi]] followed President Suharto’s resignation in May 1998 amid the Asian financial crisis (Unit 15 told the crisis story: {{financial-crises-ipe}}); Timor-Leste became independent as a democracy in 2002.",
      "Why did some transitions stick and others not? Dan Slater’s *Ordering Power* (2010) argued that where elites faced threatening mass unrest, they banded together behind strong parties and states, building durable authoritarian regimes, as in Malaysia and Singapore. Slater and Joseph Wong’s *From Development to Democracy* (2022) added a twist: some regimes democratise from **strength**, confident they can win under new rules ([[democracy-through-strength|democracy through strength]]), as in Japan, South Korea and Taiwan. Their publisher’s summary calls the democratic experiments in Indonesia, Thailand and Myanmar “less successful and more reversible”, and says resistance to reform proved intractable in Singapore, Malaysia, Vietnam and Cambodia, among others.",
      "Reversal now has its own vocabulary. Nancy Bermeo’s “On Democratic Backsliding” (*Journal of Democracy*, 2016) noted that open coups had become rarer than gradual erosion by elected leaders, which she called executive aggrandisement. [[democratic-backsliding|Democratic backsliding]] means the state-led weakening of institutions that sustain democracy. Southeast Asia has both kinds: coups in Thailand (2006, 2014) and Myanmar (2021), and debates about slower erosion elsewhere."
    ]},
    {h:"Dominant parties and uneven playing fields", body:[
      "Steven Levitsky and Lucan Way coined [[competitive-authoritarianism|competitive authoritarianism]] (*Journal of Democracy*, 2002; book 2010): regimes in which elections are real and the opposition can sometimes win, but incumbents abuse state power, for example through media, courts and money, to tilt the field. Andreas Schedler’s related term is “electoral authoritarianism” (2006).",
      "The region offers famous [[dominant-party-system|dominant-party systems]]: Malaysia’s Barisan Nasional and its predecessor governed from independence until 2018; Singapore’s People’s Action Party (PAP) has governed since 1959 and won 87 of 97 elected seats in May 2025; Cambodia’s ruling party has dominated since the 1990s, and the Supreme Court dissolved the main opposition party in 2017.",
      {warn:"Labels are contested and politically charged. Singapore’s government and many observers stress its clean administration and well-run voting, while some scholars classify it as electoral authoritarian because of limits on media and opposition. Report the classification, its source, and the reply."},
      "Elections also run on [[money-politics|money politics]]. Edward Aspinall and Ward Berenschot’s *Democracy for Sale* (2019) traced how Indonesian candidates use networks of brokers and gifts to win votes, a pattern also studied in the Philippines and Thailand. A collection edited by Thomas Power and Eve Warburton asked whether Indonesian democracy had moved *From Stagnation to Regression?* (2020). Others answer that Indonesia still holds competitive, high-turnout elections with peaceful transfers of power, as in 2014 and 2024."
    ]},
    {h:"One-party states and a city-state", body:[
      "Vietnam and Laos are ruled by Leninist parties: the Communist Party of Vietnam and the Lao People’s Revolutionary Party. The party is written into the constitution as the leading force of state and society; a party congress every five years chooses the leaders and sets policy, and elections to the National Assembly offer candidates vetted by party-led bodies. Scholars of these systems study how a single party stays in power through economic growth (“performance legitimacy”), collective leadership with term limits, anti-corruption campaigns and tolerated debate within limits. Unit 19 applies the same questions to China.",
      "Singapore is different again: a multiparty parliamentary republic with regular, efficiently run elections in which one party has won every time since 1959. Supporters credit good governance and results; critics point to rules that make opposition hard, such as large multi-member constituencies (Group Representation Constituencies, since 1988), defamation suits and media controls. Many scholars treat Singapore as the region’s clearest puzzle: a rich, highly educated society without a change of ruling party, against the [[modernization-theory|modernisation theory]] expectation that wealth brings democracy (Unit 14)."
    ]},
    {h:"Thailand: soldiers, courts and the crown", body:[
      "Thailand has had about a dozen successful coups since the 1932 revolution ended absolute monarchy (counts differ). Duncan McCargo’s “Network Monarchy and Legitimacy Crises in Thailand” (*The Pacific Review*, 2005) described a [[network-monarchy|network monarchy]]: informal networks linking palace, military and bureaucracy that shaped politics behind elected governments ({{military-politics-southeast-asia}}). Section 112 of the Criminal Code, the [[lese-majeste|lèse-majesté]] law, punishes defaming, insulting or threatening the king, queen, heir-apparent or regent with three to fifteen years in prison; its use is a major point of debate.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="m20l2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-sage" x="20" y="12" width="260" height="50" rx="10" stroke-width="2"/><text x="150" y="34" text-anchor="middle">Election</text><text class="s" x="150" y="52" text-anchor="middle">parties compete, a coalition forms</text><path class="d-ink" d="M150,64 V84" stroke-width="2" marker-end="url(#m20l2a)"/><rect class="d-soft" x="20" y="88" width="260" height="50" rx="10" stroke-width="2"/><text x="150" y="110" text-anchor="middle">Elected government</text><text class="s" x="150" y="128" text-anchor="middle">pursues its programme</text><path class="d-ink" d="M150,140 V160" stroke-width="2" marker-end="url(#m20l2a)"/><rect class="d-gold" x="20" y="164" width="260" height="50" rx="10" stroke-width="2"/><text x="150" y="186" text-anchor="middle">Crisis</text><text class="s" x="150" y="204" text-anchor="middle">street protests, court cases</text><path class="d-ink" d="M150,216 V236" stroke-width="2" marker-end="url(#m20l2a)"/><rect class="d-rose" x="20" y="240" width="260" height="62" rx="10" stroke-width="2"/><text x="150" y="262" text-anchor="middle">Government removed</text><text class="s" x="150" y="280" text-anchor="middle">by a coup (2006, 2014) or a</text><text class="s" x="150" y="295" text-anchor="middle">court ruling (2008, 2024, 2025)</text><path class="d-ink" d="M150,304 V324" stroke-width="2" marker-end="url(#m20l2a)"/><rect class="d-lup" x="20" y="328" width="260" height="62" rx="10" stroke-width="2"/><text x="150" y="350" text-anchor="middle">New rules</text><text class="s" x="150" y="368" text-anchor="middle">a new constitution or interim</text><text class="s" x="150" y="383" text-anchor="middle">government, then elections</text><path class="d-ink" d="M282,359 H318 V37 H286" stroke-width="2" fill="none" marker-end="url(#m20l2a)"/></svg>', alt:"A loop of five boxes. Election, where parties compete and a coalition forms, leads to an elected government, which leads to a crisis with street protests and court cases, which leads to the government being removed by a coup (2006, 2014) or a court ruling (2008, 2024, 2025), which leads to new rules such as a new constitution or interim government, then elections; an arrow returns from new rules to election.", cap:"The cycle many scholars use to describe Thai politics since 2000. Each turn has its own causes; the loop is a summary, not a law."},
      "The pattern continued in the 2020s. In 2023 the reformist Move Forward Party won the most seats, but the Senate, appointed under the 2017 constitution, blocked its leader from becoming prime minister. The Constitutional Court dissolved the party in August 2024 over its plan to amend Section 112; its members re-formed as the People’s Party. The Court also removed two prime ministers, Srettha Thavisin (August 2024) and Paetongtarn Shinawatra (August 2025). Anutin Charnvirakul became prime minister in September 2025; his Bhumjaithai Party won 193 of 500 seats in the election of 8 February 2026, with the People’s Party second, and the House re-elected him on 19 March 2026.",
      "Supporters of the courts’ role say they apply the constitution and protect the monarchy; critics, including the People’s Party, describe a system that lets unelected bodies overrule voters."
    ]},
    {h:"Myanmar since 2021, as of November 2026", body:[
      "Under the 2008 constitution, written under military rule, the military kept a quarter of parliamentary seats and key ministries. Aung San Suu Kyi’s National League for Democracy (NLD) won elections in 2015 and November 2020. On 1 February 2021 the military seized power, alleging electoral fraud that the election commission had rejected, and detained the elected leaders ({{myanmar-since-2021}}).",
      "Mass protests and strikes were met with force, and armed resistance spread, alongside ethnic armed organisations that had fought the central state for decades. Elected legislators and allies formed a [[national-unity-government|National Unity Government]] (NUG) in April 2021. The military’s election commission dissolved the NLD in March 2023. A devastating earthquake struck central Myanmar on 28 March 2025.",
      "The military government held elections in three phases in December 2025 and January 2026, with voting in only part of the country. On 3 April 2026 the new parliament elected Senior General Min Aung Hlaing president (429 of 584 votes); he had handed command of the armed forces to Gen. Ye Win Oo, described by the AP news agency as a close aide, and Aung San Suu Kyi remained in prison. Positions, as of November 2026:",
      {table:[
        ["Actor","Stated position"],
        ["Military-led government","The elections restored constitutional rule; it seeks peace talks and engagement"],
        ["NUG and many resistance groups","The elections were illegitimate; a NUG spokesperson said “Myanmar people do not accept it”"],
        ["ASEAN","The Five-Point Consensus remains its “primary reference”; in May 2026 it had not reached consensus on recognising the elections (Lesson 4)"]
      ]},
      {tip:"Write “the military-led government” or “the government formed after the 2025–26 elections” and say who recognises what. Avoid both “the legitimate government” and “the regime” unless you are quoting someone. For the Rohingya and the case at the International Court of Justice, see Units 10 and 11."},
      {key:"Southeast Asia’s regimes change through elections, protests, courts and coups. Explain change with named theories, give each actor’s position in its own terms, and date every claim."},
      {terms:["people-power-revolution","reformasi","democracy-through-strength","democratic-backsliding","competitive-authoritarianism","dominant-party-system","money-politics","network-monarchy","lese-majeste","national-unity-government"]}
    ]}
   ],
   try:[
    {id:"e4u20-l2-x1", type:"sort", q:"How did each change of government happen?", buckets:["Election","Mass protest","Military coup","Court ruling"], items:[
      {t:"Malaysia, May 2018: the ruling coalition loses for the first time", b:0, why:"An election turnover, followed by a peaceful handover."},
      {t:"Philippines, February 1986: Ferdinand Marcos leaves office", b:1, why:"People Power protests, with defections from the military, forced him out."},
      {t:"Thailand, May 2014: the elected government is removed", b:2, why:"The army seized power on 22 May 2014."},
      {t:"Myanmar, 1 February 2021: elected leaders are detained", b:2, why:"A military takeover."},
      {t:"Thailand, August 2025: Prime Minister Paetongtarn Shinawatra is removed", b:3, why:"The Constitutional Court removed her over an ethics case linked to her handling of relations with Cambodia."},
      {t:"Thailand, August 2024: Prime Minister Srettha Thavisin is removed", b:3, why:"Also a Constitutional Court ruling."}
    ]},
    {id:"e4u20-l2-x2", type:"match", q:"Match each concept to the scholars most associated with it.", pairs:[
      ["Competitive authoritarianism","Steven Levitsky & Lucan Way","Article 2002, book 2010."],
      ["Network monarchy","Duncan McCargo","*The Pacific Review*, 2005, on Thailand."],
      ["Democracy through strength","Dan Slater & Joseph Wong","*From Development to Democracy*, 2022."],
      ["Backsliding as executive aggrandisement","Nancy Bermeo","“On Democratic Backsliding”, 2016."],
      ["Money politics and vote brokers in Indonesia","Edward Aspinall & Ward Berenschot","*Democracy for Sale*, 2019."]
    ]},
    {id:"e4u20-l2-x3", type:"mcq", q:"In an imaginary country, elections are held on time and the opposition sometimes wins seats, but state media ignore it, tax cases target its donors and constituency borders favour the ruling party. Which concept fits best?", options:[
      {t:"Competitive authoritarianism", ok:true, why:"Right. Real elections on an uneven playing field tilted by incumbents is Levitsky and Way’s definition."},
      {t:"A closed one-party state", why:"In a closed one-party state no opposition party may compete at all."},
      {t:"A liberal democracy", why:"Abuse of state power to tilt the field is what liberal democracy rules out."},
      {t:"A mandala polity", why:"That is Wolters’ model of early, pre-colonial polities."}
    ]},
    {id:"e4u20-l2-x4", type:"mcq", q:"Slater and Wong argue that some authoritarian regimes democratise from strength. Which situation fits their idea best?", options:[
      {t:"A long-ruling party with a strong economic record allows freer elections because it expects to keep winning", ok:true, why:"Yes. Confidence of victory and stability makes conceding democracy less risky for the incumbents."},
      {t:"A regime collapses after losing a war and its leaders flee", why:"That is democratisation from weakness, the pattern their argument contrasts with."},
      {t:"A military seizes power to stop an election", why:"That is a reversal, not democratisation."},
      {t:"A ruling party bans all opposition after an economic boom", why:"Strength used to close politics is the opposite of conceding."}
    ]},
    {id:"e4u20-l2-x5", type:"order", q:"Put these events in Thai politics in order.", items:[
      {t:"The Move Forward Party wins the most seats, but its leader is blocked from becoming prime minister.", why:"2023: the Senate appointed under the 2017 constitution voted him down."},
      {t:"The Constitutional Court dissolves Move Forward; its members form the People’s Party.", why:"August 2024."},
      {t:"The Constitutional Court removes Prime Minister Paetongtarn Shinawatra.", why:"August 2025."},
      {t:"Anutin Charnvirakul becomes prime minister for the first time.", why:"September 2025."},
      {t:"Bhumjaithai wins the most seats in a general election.", why:"8 February 2026: 193 of 500 seats."},
      {t:"The House re-elects Anutin as prime minister.", why:"19 March 2026."}
    ]},
    {id:"e4u20-l2-x6", type:"spot", q:"A draft paragraph on Myanmar for a seminar paper. Tap the phrases that **take a side without attribution**.", ask:"one-sided wording", parts:[
      {t:"On 1 February 2021 the military detained the elected leaders and took power.", flag:false, why:"A factual description with a date."},
      " ",
      {t:"The heroic resistance will surely win soon.", flag:true, why:"Praise and prediction. A seminar paper describes positions and evidence; it does not cheer or forecast."},
      " ",
      {t:"The National Unity Government says the 2025–26 elections were illegitimate.", flag:false, why:"An attributed position."},
      " ",
      {t:"The so-called elections were obviously a farce.", flag:true, why:"Your own verdict in loaded words. Attribute the judgement: say who called the elections unfree or unfair, and when."},
      " ",
      {t:"In May 2026 ASEAN had not reached consensus on recognising them.", flag:false, why:"Attributed and dated."}
    ]},
    {id:"e4u20-l2-x7", type:"mcq", q:"Which statement about regime labels is best practice in a seminar paper?", options:[
      {t:"“V-Dem’s 2026 report classifies country X as Y; the government rejects this, pointing to Z.”", ok:true, why:"It names the source and year and gives the counter-position."},
      {t:"“Everyone knows country X is a dictatorship.”", why:"No source, no year, no definition, and an appeal to what everyone knows."},
      {t:"“Country X is a democracy because it holds elections.”", why:"Elections alone do not make a democracy; competitive authoritarian regimes hold them too."},
      {t:"“Regime labels are pure opinion, so I avoid all classification.”", why:"Labels can be defined and measured; the point is to use them transparently, not to abandon them."}
    ]}
   ],
   apply:{
    intro:"Practise describing regimes accurately and neutrally. Use free sources only.",
    tasks:[
     {t:"Compare two indices", how:[
       "Choose one Southeast Asian country.",
       "Look up its latest classification in the V-Dem Democracy Report and in Freedom House’s *Freedom in the World* (both free online).",
       "Write down each label, the year it refers to, and one indicator that drives it. Do the two agree?"
     ], write:"Country… V-Dem label and year… Freedom House label and year… Main indicator… Why they agree or differ…"},
     {t:"Trace one transfer of power", how:[
       "Pick one event from the lesson (for example Malaysia 2018, Indonesia 1998 or Thailand 2025).",
       "Find two news reports from the time, ideally one from the country itself.",
       "List who acted, what rules they used, and how each side described the event."
     ], write:"Event and date… Actors… Rules or institutions used… How side A described it… How side B described it…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is Slater and Wong’s “democracy through strength” a good explanation of why democracy came to some Asian countries and not others?",
       "2. Should courts that remove elected leaders be seen as guardians of the constitution or as political actors?",
       "3. Why has Singapore stayed a dominant-party system despite its wealth?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Two index classifications for one country with years, a short account of one transfer of power with both sides’ descriptions, and a seminar paragraph."
   },
   read:[
    {book:"ospol", where:"Chapter 13, sections 13.1 “Contemporary Government Regimes: Power, Legitimacy, and Authority”, 13.2 “Categorizing Contemporary Regimes” and 13.3 “Recent Trends: Illiberal Representative Regimes”", note:"Read it for the general regime vocabulary this lesson applies to Southeast Asia."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u20-l3", title:"Political economy: growth, value chains and labour", minutes:65,
   hook:{q:"Roughly what share of the world’s mined nickel, a key metal for stainless steel and electric-vehicle batteries, came from Indonesia in 2025?", options:["About a tenth","About a quarter","About two-thirds","Almost all of it"], answer:2, reveal:"**About two-thirds.** The US Geological Survey estimates 2.6 million of 3.9 million tonnes in 2025. Before 2014 Indonesia shipped most of its nickel abroad as raw ore; a deliberate policy of keeping processing at home changed that. How governments in the region chose their development paths, and who wins and loses from them, is this lesson’s subject."},
   goals:[
     "Compare the main development paths in Southeast Asia and the debates that explain their differences",
     "Explain how FDI, production networks and “China plus one” shape the region’s place in global value chains",
     "Describe the ASEAN Economic Community: what it has achieved and where integration is shallow",
     "Analyse Indonesia’s nickel downstreaming policy with each side’s arguments",
     "Describe migration flows within ASEAN, the regional rules on migrant workers and their limits"
   ],
   learn:[
    {h:"Many roads from poverty", body:[
      {lead:"Southeast Asia holds one of the world’s richest city-states and some of Asia’s poorer economies. Their governments took very different roads."},
      "Unit 14 explained the [[developmental-state|developmental state]] debate and the World Bank’s *[[east-asian-miracle|East Asian Miracle]]* report (1993), which counted Indonesia, Malaysia and Thailand among eight high performers ({{developmental-state-debate}}). Southeast Asia shows several distinct paths ({{southeast-asian-political-economy}}):",
      {table:[
        ["Path","Examples","Main tools"],
        ["Foreign-investment-led exports","Singapore; Malaysia’s Penang; Thailand’s car industry","Tax incentives, industrial estates, skilled labour"],
        ["Resource rents and redistribution","Indonesia under Suharto (oil); Malaysia’s New Economic Policy","State firms, quotas, ethnic or regional transfers"],
        ["Reform from central planning","Vietnam’s Đổi Mới (1986); Laos; Cambodia","Opening to markets and FDI under one party"],
        ["Labour export and services","The Philippines","Remittances, call centres, shipping crews"]
      ]},
      "Malaysia’s [[new-economic-policy|New Economic Policy]] (1971), adopted after the riots of 13 May 1969, aimed to reduce poverty and to raise the economic share of the Malay and other indigenous [[bumiputera]] communities. Supporters credit it with building a Malay middle class and keeping ethnic peace; critics say its benefits went disproportionately to the well connected and that quotas discouraged investment. Vietnam’s [[doi-moi|Đổi Mới]] (“renovation”), launched at the Communist Party’s Sixth Congress in December 1986, turned one of the world’s poorest countries into a major exporter."
    ]},
    {h:"Why Southeast Asia is not South Korea", body:[
      "Why did Northeast Asia’s economies upgrade faster than Southeast Asia’s? Three classic answers:",
      {list:[
        "**Ersatz capitalism.** Yoshihara Kunio’s *The Rise of Ersatz Capitalism in South-East Asia* (1988) argued that the region’s growth rested on foreign technology and on business groups that profited from state favours, so it lacked domestic technological depth ([[ersatz-capitalism]]).",
        "**Systemic vulnerability.** Richard Doner, Bryan Ritchie and Dan Slater (2005) argued that leaders build strong developmental states only when they face mass pressure, external threats and scarce resources at once ([[systemic-vulnerability]]). Resource-rich Indonesia and Malaysia faced fewer of these pressures than South Korea or Taiwan.",
        "**Policy choices.** Joe Studwell’s popular *How Asia Works* (2013) blamed weak land reform, industrial policy without export discipline, and loose control of finance. Economists reply that the region’s more open path still produced decades of fast growth and lower poverty."
      ]},
      "The Asian financial crisis of 1997–98 hit Thailand, Indonesia and Malaysia hardest (Unit 15). It toppled Suharto, led Malaysia to impose capital controls against IMF advice, and left a lasting wariness of short-term foreign money. Today several economies worry about the [[middle-income-trap|middle-income trap]]: wages too high to compete on cheap labour, skills and innovation not yet high enough to compete on quality."
    ]},
    {h:"Production networks and the ASEAN Economic Community", body:[
      "After the [[plaza-accord|Plaza Accord]] of 1985 raised the yen’s value, Japanese firms moved factories into Thailand, Malaysia and Indonesia, creating regional production networks; Korean, Taiwanese, Chinese and Western firms followed. Intel opened its Penang plant in 1972; Samsung built huge phone factories in northern Vietnam from the late 2000s. Since the US–China trade tensions of 2018, firms have added Southeast Asian sites to Chinese ones, a strategy called [[china-plus-one|“China plus one”]] (Unit 15 explained [[global-value-chain|global value chains]]: {{global-value-chains}}). The *ASEAN Investment Report 2025* (ASEAN Secretariat and UNCTAD) records FDI into ASEAN rising 8% to 226 billion US dollars in 2024, while global FDI fell by 11%.",
      "Analysts disagree about what “China plus one” means for the region. Some see a chance to move up value chains; others note that many new factories assemble Chinese components, so the region’s dependence on China may deepen rather than shrink, and US tariff policy since 2025 has made such “transshipment” a political issue.",
      "Formal integration followed. The [[asean-free-trade-area|ASEAN Free Trade Area]] (AFTA) was agreed in 1992; the [[atiga|ASEAN Trade in Goods Agreement]] (ATIGA, 2009) consolidated its rules; and the [[asean-economic-community|ASEAN Economic Community]] (AEC) was formally established at the end of 2015 ({{asean-economic-community}}). An upgraded ATIGA was signed at the ASEAN summit in Kuala Lumpur in October 2025, alongside an upgrade of the ASEAN–China free trade area, and members belong to [[rcep|RCEP]] with five partners (in force 2022).",
      "Yet integration stays shallow by design. ASEAN is a free trade area, not a customs union: each member keeps its own tariffs towards outsiders. Non-tariff barriers and services restrictions remain. According to ASEAN’s Secretary-General in October 2025, intra-ASEAN trade was 21.5% of members’ total trade, low compared with the EU. Supporters reply that the AEC was meant to attract investment into one production base, not to copy Europe."
    ]},
    {h:"Indonesia’s nickel gamble", body:[
      "Indonesia has long debated how to capture more value from its minerals, a stance called [[resource-nationalism|resource nationalism]]. A 2009 mining law required domestic processing; a ban on exporting raw ore was enforced in 2014, relaxed in 2017, and reinstated for nickel ore from 1 January 2020. The government calls this [[downstreaming|downstreaming]] (*hilirisasi*): processing at home, then making steel, battery materials and eventually batteries ({{indonesia-nickel-downstreaming}}).",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="m20l3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-soft" x="20" y="12" width="300" height="52" rx="10" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Mine: nickel ore</text><text class="s" x="170" y="52" text-anchor="middle">export banned since January 2020</text><path class="d-ink" d="M170,66 V88" stroke-width="2" marker-end="url(#m20l3a)"/><rect class="d-gold" x="20" y="92" width="300" height="66" rx="10" stroke-width="2"/><text x="170" y="114" text-anchor="middle">Smelting and refining in Indonesia</text><text class="s" x="170" y="132" text-anchor="middle">nickel pig iron, matte,</text><text class="s" x="170" y="148" text-anchor="middle">battery-grade intermediates</text><path class="d-ink" d="M110,160 V186" stroke-width="2" marker-end="url(#m20l3a)"/><path class="d-ink" d="M230,160 V186" stroke-width="2" marker-end="url(#m20l3a)"/><rect class="d-sage" x="20" y="190" width="140" height="52" rx="10" stroke-width="2"/><text x="90" y="212" text-anchor="middle">Stainless</text><text x="90" y="230" text-anchor="middle">steel</text><rect class="d-sage" x="180" y="190" width="140" height="52" rx="10" stroke-width="2"/><text x="250" y="212" text-anchor="middle">Battery</text><text x="250" y="230" text-anchor="middle">materials</text><path class="d-ink" d="M250,244 V270" stroke-width="2" marker-end="url(#m20l3a)"/><rect class="d-lup" x="100" y="274" width="220" height="52" rx="10" stroke-width="2"/><text x="210" y="296" text-anchor="middle">Batteries and EVs</text><text class="s" x="210" y="314" text-anchor="middle">the goal: move up the chain</text><text class="s" x="20" y="350">Indonesia: about two-thirds of world</text><text class="s" x="20" y="366">mine output in 2025 (USGS estimate)</text></svg>', alt:"A value chain from top to bottom. Mine: nickel ore, export banned since January 2020. Arrow to smelting and refining in Indonesia: nickel pig iron, matte and battery-grade intermediates. Two arrows to stainless steel and to battery materials. From battery materials an arrow to batteries and electric vehicles, labelled the goal: move up the chain. A note says Indonesia produced about two-thirds of world mine output in 2025, according to a US Geological Survey estimate.", cap:"Downstreaming keeps processing at home and aims to climb towards batteries."},
      "The results are striking. The US Geological Survey estimates Indonesia’s mine output at 2.6 million tonnes in 2025, out of a world total of 3.9 million; the Philippines came second with about 0.27 million. Much of the new processing capacity was built with Chinese investment, for example at the Indonesia Morowali Industrial Park in Central Sulawesi. Four positions dominate the debate:",
      {table:[
        ["Who","Main argument"],
        ["Indonesian government","Downstreaming creates jobs, export revenue and industrial skills instead of shipping raw ore"],
        ["European Union","The ban breaks WTO rules; a WTO panel agreed in November 2022, and Indonesia appealed (Unit 15)"],
        ["Environmental and labour groups","Coal-powered smelters, deforestation, pollution and unsafe work carry heavy local costs"],
        ["Some economists","Gains depend on prices and on dependence on a few foreign investors"]
      ]}
      ,"How should you judge the policy in a paper? Separate three questions. Has it raised value added at home? Exports of processed nickel products rose sharply, so on this measure it has. Who captured the gains: foreign smelter owners, the state through taxes and royalties, workers or local communities? And at what cost, in coal power, forests, water and workplace safety? Remember too that battery makers can choose chemistries that use little or no nickel, such as lithium iron phosphate, so the bet depends on technology and prices as much as on policy."
    ]},
    {h:"People on the move", body:[
      "The migration primer explained [[labour-migration|labour migration]] and [[remittances]] ({{remittances}}); Southeast Asia is a major case ({{migration-in-southeast-asia}}). Workers move from Myanmar, Cambodia and Laos to Thailand; from Indonesia and elsewhere to Malaysia; to Singapore and Brunei; and from the Philippines, Indonesia and Vietnam to East Asia, the Gulf and beyond. Many work in plantations, construction, fishing and domestic work, often women in the last ([[feminisation-of-migration]]). For the Philippines, which has built a whole state system to train, send and protect overseas workers, remittances are a major source of household income and foreign exchange; for Myanmar, Cambodia and Laos, work in Thailand is a lifeline that often depends on brokers.",
      "ASEAN’s rules favour the skilled. Its [[mutual-recognition-arrangement|mutual recognition arrangements]] cover engineers, nurses, architects, surveyors, doctors, dentists and accountants, with a separate one for tourism professionals, and a 2012 agreement eases short-term movement for business people. For lower-wage workers, leaders adopted the Cebu Declaration (2007) and the ASEAN Consensus on the Protection and Promotion of the Rights of Migrant Workers (Manila, November 2017), which critics note is not a binding treaty. Much movement is irregular or arranged through bilateral agreements between governments, and recruitment fees can trap workers in debt.",
      "A darker flow grew after 2020: [[scam-compounds|scam compounds]]. In August 2023 the UN human rights office reported that at least 120,000 people in Myanmar and about 100,000 in Cambodia might be held and forced to run online scams, with Laos, the Philippines and Thailand also named as destination or transit countries. The UN High Commissioner, Volker Türk, said: “They are victims. They are not criminals” ([[human-trafficking]]).",
      {key:"Southeast Asia’s economies grew by plugging into global production, but with shallow regional rules, contested resource policies and a labour system that depends on migrants with few protections."},
      {terms:["new-economic-policy","doi-moi","ersatz-capitalism","china-plus-one","asean-free-trade-area","atiga","asean-economic-community","resource-nationalism","downstreaming","mutual-recognition-arrangement","scam-compounds"]}
    ]}
   ],
   try:[
    {id:"e4u20-l3-x1", type:"sort", q:"Which development path does each policy belong to?", buckets:["FDI-led exports","Resource rents and redistribution","Reform from central planning"], items:[
      {t:"Singapore’s Economic Development Board courting foreign electronics firms in the 1960s–70s", b:0, why:"Attracting multinationals to export from an industrial base is the FDI-led path."},
      {t:"Intel opening a plant in Penang in 1972", b:0, why:"Foreign investment in export manufacturing."},
      {t:"Malaysia’s New Economic Policy of 1971", b:1, why:"Redistribution towards bumiputera communities, financed partly by state firms and resource revenues."},
      {t:"Indonesia using oil revenues for state-led projects under Suharto", b:1, why:"Resource rents channelled through the state."},
      {t:"Vietnam’s Đổi Mới reforms from 1986", b:2, why:"Opening a centrally planned economy to markets and FDI under one party."},
      {t:"Laos opening to foreign investment while keeping one-party rule", b:2, why:"Another transition from central planning."}
    ]},
    {id:"e4u20-l3-x2", type:"mcq", q:"Doner, Ritchie and Slater’s “systemic vulnerability” argument predicts that a resource-rich country with no serious external threat will most likely…", options:[
      {t:"Build a weaker developmental state, because its leaders face less pressure to upgrade the economy", ok:true, why:"Right. Without mass pressure, threats and scarce resources together, leaders have less reason to build strong developmental institutions."},
      {t:"Build the strongest developmental state in Asia", why:"Their argument predicts the opposite: comfort reduces the pressure to build one."},
      {t:"Avoid all foreign investment", why:"The argument is about the strength of state institutions, not about rejecting FDI."},
      {t:"Become a customs union", why:"Customs unions are about trade between states, not this argument."}
    ]},
    {id:"e4u20-l3-x3", type:"match", q:"Match each regional economic instrument to its description.", pairs:[
      ["ASEAN Free Trade Area (1992)","The first region-wide plan to cut tariffs among members","AFTA began the process of tariff reduction."],
      ["ATIGA (2009; upgraded 2025)","ASEAN’s consolidated agreement on trade in goods","It brought AFTA’s rules into one agreement; an upgrade was signed in October 2025."],
      ["Mutual recognition arrangements","Rules recognising qualifications in a handful of professions","They help skilled workers such as engineers and nurses."],
      ["RCEP (in force 2022)","A free trade agreement of ASEAN members and five partners","China, Japan, South Korea, Australia and New Zealand."],
      ["ASEAN Economic Community (2015)","The goal of a single market and production base","Formally established at the end of 2015."]
    ]},
    {id:"e4u20-l3-x4", type:"mcq", q:"A student says: “ASEAN has failed economically because intra-ASEAN trade is only about a fifth of members’ trade.” What is the strongest reply?", options:[
      {t:"The AEC aimed mainly to make the region one production base for global investors, so trade with outside markets is expected to stay large", ok:true, why:"Right. ASEAN’s strategy was open regionalism tied to global value chains, not an inward-looking bloc."},
      {t:"Intra-ASEAN trade is actually over 90%", why:"ASEAN’s Secretary-General gave about 21.5% in October 2025."},
      {t:"ASEAN is a customs union, so trade shares do not matter", why:"ASEAN is a free trade area, not a customs union: members keep their own external tariffs."},
      {t:"Trade figures cannot be measured in Southeast Asia", why:"They are measured, by ASEAN’s statistics office among others."}
    ]},
    {id:"e4u20-l3-x5", type:"number", q:"The US Geological Survey estimates world nickel mine production in 2025 at 3.9 million tonnes, of which Indonesia produced 2.6 million. What percentage came from Indonesia? (Round to the nearest whole number.)", answer:67, tol:1, unit:"%", why:"2.6 ÷ 3.9 = 0.667, so about 67%: roughly two-thirds of world mine output.", wrongs:[
      {v:150, tol:2, why:"You divided the world total by Indonesia’s output (3.9 ÷ 2.6). Divide the part by the whole."},
      {v:40, tol:1, why:"You divided by 6.5, adding Indonesia’s output to the world total again. The world total already includes Indonesia."},
      {v:7, tol:1, why:"That is roughly the Philippines’ share (0.27 ÷ 3.9). Use Indonesia’s 2.6 million tonnes."}
    ]},
    {id:"e4u20-l3-x6", type:"order", q:"Put the steps of Indonesia’s nickel policy in order.", items:[
      {t:"A new mining law requires minerals to be processed at home.", why:"2009."},
      {t:"A ban on exporting raw ore is enforced, then relaxed.", why:"Enforced in 2014, relaxed in 2017."},
      {t:"Nickel ore exports are banned again.", why:"From 1 January 2020."},
      {t:"A WTO panel rules against the ban after an EU complaint, and Indonesia appeals.", why:"November–December 2022; with the Appellate Body not working, the appeal is pending and the ruling has not become binding (Unit 15)."},
      {t:"Indonesia produces about two-thirds of world nickel mine output.", why:"USGS estimate for 2025."}
    ]},
    {id:"e4u20-l3-x7", type:"spot", q:"A briefing note on migration in ASEAN. Tap the statements that are **inaccurate or misleading**.", ask:"inaccurate claims", parts:[
      {t:"Thailand receives many workers from Myanmar, Cambodia and Laos.", flag:false, why:"Accurate: these are among the region’s largest corridors."},
      " ",
      {t:"ASEAN guarantees free movement of all workers, like the EU.", flag:true, why:"ASEAN’s mutual recognition arrangements cover only a handful of professions; there is no general right of free movement."},
      " ",
      {t:"The 2017 ASEAN Consensus on migrant workers is a binding treaty with a court.", flag:true, why:"It is a political commitment, not a binding treaty, and ASEAN has no court to enforce it."},
      " ",
      {t:"A 2023 UN report estimated that at least 120,000 people in Myanmar might be forced to work in online scams.", flag:false, why:"Accurate, from the UN human rights office (August 2023)."},
      " ",
      {t:"People forced into scam compounds should be treated as criminals, not victims.", flag:true, why:"The UN High Commissioner stressed the opposite: they are victims of trafficking and forced criminality."}
    ]}
   ],
   apply:{
    intro:"Trace the region’s economy in things you can check yourself.",
    tasks:[
     {t:"Follow one product", how:[
       "Pick an electronic device, garment or food product you own whose label says it was made in Southeast Asia.",
       "Find which firm made it and where its parts likely come from (company websites often list factory locations).",
       "Sketch the chain: raw materials, components, assembly, sale. Which steps happen in Southeast Asia?"
     ], write:"Product and country on the label… Firm… Likely chain… Which steps are in the region… What I could not find…"},
     {t:"Weigh a resource policy", how:[
       "Read the summary of the WTO dispute DS592 (“Indonesia – Measures Relating to Raw Materials”) on the WTO website, and one news report from Indonesia on downstreaming.",
       "List the arguments for and against in two columns, with who makes each.",
       "Note one piece of evidence that would change your mind."
     ], write:"Arguments for (who)… Arguments against (who)… Evidence that would change my view…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is Indonesia’s downstreaming a model for other mineral exporters, or a risky bet?",
       "2. Why has ASEAN integrated through global value chains rather than through deep regional rules?",
       "3. Who should protect migrant workers in the region: origin states, destination states or ASEAN?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A sketched value chain for one product, a two-column table of arguments on Indonesia’s nickel policy, and a seminar paragraph."
   },
   read:[
    {book:"wdr2020", where:"Overview", note:"How global value chains work and how countries join them; many examples come from East and Southeast Asia."},
    {book:"imis", where:"Chapter 12 “Irregular Migration” (Sarah Spencer and Anna Triandafyllidou)", note:"Background for the region’s many irregular and broker-arranged flows."},
    {book:"wmr", where:"Part I “Key data and information on migration and migrants”", note:"Look up the latest figures for Southeast Asian countries; note the year of each figure."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u20-l4", title:"ASEAN as an institution", minutes:65,
   hook:{q:"ASEAN’s Secretariat runs on a budget that its members pay how?", options:["In proportion to each member’s GDP","In proportion to population","In equal shares, whatever a member’s size or wealth","Through a common tariff on imports"], answer:2, reveal:"**In equal shares.** Article 30 of the ASEAN Charter says the Secretariat’s operational budget comes from “equal annual contributions”, so Singapore and Laos pay the same. That keeps everyone equal, but it also keeps the budget near what the poorest member can afford. Small rules like this explain a lot about how ASEAN works, and that is this lesson."},
   goals:[
     "Trace ASEAN’s institutional development from the 1967 Bangkok Declaration to the 2007 Charter and the 2045 Vision",
     "Explain how ASEAN decides: consensus, the chair, “ASEAN minus X” and the limits of the Secretariat",
     "Assess ASEAN centrality and members’ strategies towards China and the United States with survey evidence",
     "Evaluate ASEAN’s response to Myanmar since 2021, including the Five-Point Consensus, with each side’s view",
     "Explain Timor-Leste’s accession and what conflicts among members reveal about ASEAN"
   ],
   learn:[
    {h:"From a two-page declaration to a Charter", body:[
      {lead:"ASEAN began in 1967 as a short statement by five non-communist governments that wanted to stop quarrelling with each other. Today it convenes much of Asia’s diplomacy."},
      "Unit 9 compared ASEAN with the EU and the AU and introduced the debate between Acharya’s “security community” and its critics ({{comparative-regionalism}}). Here we go inside. Indonesia, Malaysia, the Philippines, Singapore and Thailand signed the Bangkok Declaration on 8 August 1967. Brunei joined in 1984, Vietnam in 1995, Laos and Myanmar in 1997, Cambodia in 1999 and Timor-Leste in 2025.",
      "Three early texts set the tone. The 1971 Kuala Lumpur Declaration on a [[zopfan|Zone of Peace, Freedom and Neutrality]] (ZOPFAN) expressed the hope of keeping great powers at arm’s length. The [[treaty-of-amity-and-cooperation|Treaty of Amity and Cooperation]] (TAC), signed at the first summit in Bali in 1976, wrote down the core norms: respect for sovereignty, [[non-interference]] in internal affairs, peaceful settlement of disputes and renunciation of force. Outside powers, from China and Japan to the United States and the EU, later acceded to it. These norms, practised through informal consultation, are what scholars call the [[asean-way|ASEAN Way]].",
      "The [[asean-charter|ASEAN Charter]] (signed 2007, in force 2008) turned habits into law. It gave ASEAN legal personality, listed purposes that include strengthening democracy, good governance and human rights (Article 1), kept non-interference among its principles (Article 2), and set up a human rights body, the [[aichr|ASEAN Intergovernmental Commission on Human Rights]] (2009; Unit 11). It organised cooperation into three [[asean-community-pillars|Community pillars]]: political-security, economic and socio-cultural. In May 2025 leaders adopted the Kuala Lumpur Declaration on “ASEAN 2045: Our Shared Future”, setting the next twenty-year vision ({{asean-institutional-design}})."
    ]},
    {h:"How ASEAN decides", body:[
      "The diagram shows the machinery. Leaders meet at the Summit twice a year, hosted by the member holding the chair, which rotates every year in alphabetical order of members’ English names; the Philippines chairs in 2026.",
      {fig:'<svg viewBox="0 0 340 440"><defs><marker id="m20l4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-rose" x="10" y="10" width="320" height="56" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">ASEAN Summit</text><text class="s" x="170" y="52" text-anchor="middle">leaders; twice a year; chair rotates yearly</text><path class="d-ink" d="M170,68 V88" stroke-width="2" marker-end="url(#m20l4a)"/><rect class="d-gold" x="10" y="92" width="320" height="52" rx="10" stroke-width="2"/><text x="170" y="114" text-anchor="middle">ASEAN Coordinating Council</text><text class="s" x="170" y="132" text-anchor="middle">foreign ministers; oversees three councils</text><path class="d-ink" d="M170,146 V158 H60 V174" stroke-width="2" fill="none" marker-end="url(#m20l4a)"/><path class="d-ink" d="M170,146 V174" stroke-width="2" marker-end="url(#m20l4a)"/><path class="d-ink" d="M170,158 H280 V174" stroke-width="2" fill="none" marker-end="url(#m20l4a)"/><rect class="d-sage" x="10" y="178" width="100" height="54" rx="8" stroke-width="2"/><text x="60" y="200" text-anchor="middle">Political-</text><text x="60" y="218" text-anchor="middle">Security</text><rect class="d-sage" x="120" y="178" width="100" height="54" rx="8" stroke-width="2"/><text x="170" y="200" text-anchor="middle">Economic</text><text x="170" y="218" text-anchor="middle">Community</text><rect class="d-sage" x="230" y="178" width="100" height="54" rx="8" stroke-width="2"/><text x="280" y="200" text-anchor="middle">Socio-</text><text x="280" y="218" text-anchor="middle">Cultural</text><path class="d-ink" d="M60,234 V258" stroke-width="2" marker-end="url(#m20l4a)"/><path class="d-ink" d="M170,234 V258" stroke-width="2" marker-end="url(#m20l4a)"/><path class="d-ink" d="M280,234 V258" stroke-width="2" marker-end="url(#m20l4a)"/><rect class="d-soft" x="10" y="262" width="320" height="52" rx="10" stroke-width="2"/><text x="170" y="284" text-anchor="middle">Sectoral ministerial bodies</text><text class="s" x="170" y="302" text-anchor="middle">e.g. trade, defence, health ministers</text><rect class="d-lup" x="10" y="330" width="155" height="68" rx="10" stroke-width="2"/><text x="87" y="350" text-anchor="middle">Secretariat</text><text class="s" x="87" y="368" text-anchor="middle">Secretary-General,</text><text class="s" x="87" y="384" text-anchor="middle">based in Jakarta</text><rect class="d-lup" x="175" y="330" width="155" height="68" rx="10" stroke-width="2"/><text x="252" y="350" text-anchor="middle">CPR</text><text class="s" x="252" y="368" text-anchor="middle">Committee of Permanent</text><text class="s" x="252" y="384" text-anchor="middle">Representatives</text><text class="s" x="170" y="424" text-anchor="middle">Decisions: consultation and consensus (Art. 20)</text></svg>', alt:"A top-down chart. The ASEAN Summit of leaders, meeting twice a year with a chair that rotates yearly, leads to the ASEAN Coordinating Council of foreign ministers, which oversees three Community Councils: Political-Security, Economic Community and Socio-Cultural. Each leads to sectoral ministerial bodies such as trade, defence and health ministers. Below sit the Secretariat, led by the Secretary-General and based in Jakarta, and the Committee of Permanent Representatives. A note at the bottom: decisions by consultation and consensus, Article 20.", cap:"ASEAN’s main bodies under the 2007 Charter. Most work happens in hundreds of ministerial and officials’ meetings each year."},
      "Article 20 makes **consultation and consensus** the basic rule; if consensus fails, the Summit decides how to decide, and a “serious breach” of the Charter also goes to the Summit. Article 21 allows [[asean-minus-x|ASEAN minus X]] for economic commitments, but only where there is consensus to use it. There is no rule for suspending or expelling a member.",
      "The Secretariat is small and, because contributions are equal (Article 30), cheaply funded. It coordinates and monitors; it does not command. Power sits with governments and with the chair, who drafts the chairman’s statement and can push an agenda for a year.",
      "Scholars read this design in two ways. Constructivists see consensus as the source of ASEAN’s trust and durability. Critics such as Lee Jones (*ASEAN, Sovereignty and Intervention in Southeast Asia*, 2012) argue that non-interference was always applied selectively, to protect ruling elites, so it bends when elites’ interests change."
    ]},
    {h:"Centrality and the great powers", body:[
      "[[asean-centrality|ASEAN centrality]] means that ASEAN, not a great power, convenes and chairs the region’s wider forums. Unit 12 described them ({{asia-pacific-security-architecture}}); the diagram shows how they nest.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-soft" x="6" y="6" width="328" height="318" rx="12" stroke-width="2"/><text x="170" y="28" text-anchor="middle">ASEAN Regional Forum (27)</text><text class="s" x="170" y="45" text-anchor="middle">adds e.g. the EU, Canada, Pakistan, North Korea</text><rect class="d-gold" x="22" y="56" width="296" height="258" rx="12" stroke-width="2"/><text x="170" y="78" text-anchor="middle">East Asia Summit</text><text class="s" x="170" y="95" text-anchor="middle">adds Australia, India, New Zealand,</text><text class="s" x="170" y="110" text-anchor="middle">Russia and the United States</text><rect class="d-sage" x="38" y="122" width="264" height="182" rx="12" stroke-width="2"/><text x="170" y="144" text-anchor="middle">ASEAN Plus Three</text><text class="s" x="170" y="161" text-anchor="middle">adds China, Japan, South Korea</text><rect class="d-rose" x="54" y="174" width="232" height="120" rx="12" stroke-width="2"/><text x="170" y="204" text-anchor="middle">ASEAN (11)</text><text class="s" x="170" y="226" text-anchor="middle">sets the agenda and chairs</text><text class="s" x="170" y="244" text-anchor="middle">the wider forums: its</text><text class="s" x="170" y="262" text-anchor="middle">“centrality”</text></svg>', alt:"Four nested rectangles. Innermost: ASEAN, 11 members, which sets the agenda and chairs the wider forums, its centrality. Next: ASEAN Plus Three, adding China, Japan and South Korea. Next: the East Asia Summit, adding Australia, India, New Zealand, Russia and the United States. Outermost: the ASEAN Regional Forum, 27 participants, adding others such as the EU, Canada, Pakistan and North Korea.", cap:"ASEAN-centred forums as nested circles of membership (ASEAN Regional Forum count as given in Unit 12). ADMM-Plus has the same eight partners as the East Asia Summit."},
      "Members manage the rivalry between China and the United States in different ways ({{asean-and-great-powers}}). Kuik Cheng-Chwee’s idea of [[strategic-hedging|hedging]] (Unit 2) describes keeping options open with both. Evelyn Goh (“Great Powers and Hierarchical Order in Southeast Asia”, *International Security*, 2007/08) described **omni-enmeshment**: drawing every great power into regional institutions so that each has a stake in the order, combined with “complex balancing” of one power against another. Some members are US treaty allies (the Philippines, Thailand); others are close to China (Cambodia, Laos); most hedge.",
      "Surveys help, if read carefully. The ISEAS – Yusof Ishak Institute’s *State of Southeast Asia 2026* asked 2,008 regional experts, officials and business people (January–February 2026) which side ASEAN should choose if forced to align: 52% said China and 48% the United States, after a US lead in 2025 and a 50.5 to 49.5 China lead in 2024. These are elite opinions in one survey, not public opinion.",
      "The South China Sea tests unity most. In 2012, ASEAN foreign ministers failed for the first time to issue a joint communiqué, after disagreement over how to mention the disputes. Unit 10 covered the 2016 arbitration ({{south-china-sea-arbitration}}). As of 13 November 2026 negotiations with China on a [[code-of-conduct-scs|code of conduct]] had not been concluded; the Philippines, as chair, had said it hoped to finalise the code during its chairship, with leaders due in Manila for the 49th Summit in mid-November."
    ]},
    {h:"Myanmar: the hardest test", body:[
      "On 24 April 2021, at a special leaders’ meeting in Jakarta attended by Myanmar’s military chief, ASEAN agreed the [[five-point-consensus|Five-Point Consensus]] (5PC): an immediate end to violence; constructive dialogue among all parties; a special envoy of the ASEAN chair to facilitate it; humanitarian assistance; and a visit by the envoy to meet all parties.",
      "Implementation stalled. In October 2021 ASEAN took the unusual step of inviting only a [[non-political-representation|“non-political representative”]] of Myanmar to its summit, excluding the military’s leader; the practice has continued in different forms, and in May 2026 Myanmar was represented at the Cebu summit by a foreign ministry official. Myanmar’s turn as chair passed to others. After the 2025–26 elections and the new parliament’s choice of president, ASEAN had not reached consensus on recognising the results by its May 2026 summit, according to Malaysia’s news agency Bernama; its spokesperson said its position “has not changed”, and leaders called the 5PC their “primary reference”.",
      {table:[
        ["View","Argument"],
        ["The 5PC has failed","Violence continued; parliamentarians’ groups such as APHR speak of ASEAN’s “paralysis” and warn against normalising military rule"],
        ["ASEAN has bent its rules","Excluding a member’s leader from summits broke with strict non-interference; some call this a quiet norm change"],
        ["Engagement works better","Some governments argue that talking to the authorities in Naypyidaw is the only way to deliver aid and peace; in May 2026 Thailand’s foreign minister said he planned to invite his Myanmar counterpart to a meeting with regional foreign ministers"]
      ]}
    ]},
    {h:"Widening and quarrels: Timor-Leste and the Thai–Cambodian border", body:[
      "Timor-Leste applied to join in 2011. ASEAN agreed in principle in 2022 and gave it observer status, adopted a roadmap for full membership in 2023, and admitted it as the eleventh member on 26 October 2025, at the opening of the 47th Summit in Kuala Lumpur. The Charter’s Article 6 requires a new member to be located in Southeast Asia, recognised by all members, and willing and able to carry out membership obligations, including joining ASEAN’s agreements; supporters stressed the country’s democratic record and solidarity, while sceptics had questioned its capacity to staff hundreds of meetings and meet economic commitments.",
      "Conflict among members tests the ASEAN Way from the other side. Thailand and Cambodia fought for five days in July 2025 (at least 48 dead and about 300,000 displaced, according to news reports), and again for twenty days in December 2025 (at least 101 dead and more than half a million displaced). Truces followed: the first was agreed at talks hosted by Malaysia as ASEAN chair, with the United States and China also involved; the second came with an ASEAN observer team to monitor it. Defenders see quiet conflict management; critics see a region that still relies on outside powers.",
      {key:"ASEAN is a consensus club with a weak centre and strong habits. It convenes the great powers, bends its rules slowly, and is judged very differently depending on whether you measure it against its own aims or against the EU."},
      {terms:["zopfan","treaty-of-amity-and-cooperation","asean-charter","asean-community-pillars","asean-minus-x","five-point-consensus","non-political-representation"]}
    ]}
   ],
   try:[
    {id:"e4u20-l4-x1", type:"order", q:"Put these steps in ASEAN’s development in order.", items:[
      {t:"Five governments sign the Bangkok Declaration.", why:"8 August 1967."},
      {t:"The Treaty of Amity and Cooperation is signed in Bali.", why:"1976, at ASEAN’s first summit."},
      {t:"Vietnam joins ASEAN.", why:"1995: the first communist-ruled member."},
      {t:"The ASEAN Charter is signed.", why:"2007; it entered into force in 2008."},
      {t:"Leaders agree the Five-Point Consensus on Myanmar.", why:"24 April 2021, in Jakarta."},
      {t:"Timor-Leste becomes the eleventh member.", why:"26 October 2025, in Kuala Lumpur."}
    ]},
    {id:"e4u20-l4-x2", type:"mcq", q:"Ana says: “Under the ASEAN Charter, a majority of members can vote to suspend a member that breaks the rules.” Is she right?", options:[
      {t:"No: decisions are by consultation and consensus, a serious breach goes to the Summit, and there is no suspension rule", ok:true, why:"Right. Articles 20 and 21 set consensus as the basic rule; the Charter has no suspension or expulsion procedure."},
      {t:"Yes: a two-thirds majority can suspend a member", why:"That rule does not exist in ASEAN; some other organisations, such as the AU after coups, can suspend members."},
      {t:"Yes: the Secretary-General can suspend a member", why:"The Secretary-General coordinates and monitors; it has no such power."},
      {t:"No: the ASEAN Court of Justice decides", why:"ASEAN has no court."}
    ]},
    {id:"e4u20-l4-x3", type:"match", q:"Match each ASEAN instrument to its main content.", pairs:[
      ["ZOPFAN (1971)","Keep the region free from great-power interference","An aspiration rather than a binding regime."],
      ["Treaty of Amity and Cooperation (1976)","Sovereignty, non-interference, peaceful settlement of disputes","Outside powers have acceded too."],
      ["ASEAN Charter (2007)","Legal personality, consensus rule, three Community pillars","In force since 2008."],
      ["Five-Point Consensus (2021)","End violence, dialogue, envoy, aid, envoy’s visit","ASEAN’s plan for Myanmar."],
      ["Kuala Lumpur Declaration (2025)","The vision “ASEAN 2045: Our Shared Future”","Adopted in May 2025."]
    ]},
    {id:"e4u20-l4-x4", type:"sort", q:"Is each grouping ASEAN-centred or not?", buckets:["ASEAN-centred forum","Not ASEAN-centred"], items:[
      {t:"East Asia Summit", b:0, why:"Leaders of ASEAN members and eight partners, chaired by ASEAN."},
      {t:"ASEAN Regional Forum", b:0, why:"A security dialogue convened by ASEAN since 1994."},
      {t:"ADMM-Plus", b:0, why:"ASEAN defence ministers with eight partners."},
      {t:"ASEAN Plus Three", b:0, why:"ASEAN with China, Japan and South Korea."},
      {t:"The Quad", b:1, why:"Australia, India, Japan and the United States; no ASEAN member."},
      {t:"AUKUS", b:1, why:"Australia, the United Kingdom and the United States."}
    ]},
    {id:"e4u20-l4-x5", type:"number", q:"The *State of Southeast Asia 2026* survey had 2,008 respondents, and 52% chose China if forced to align. About how many respondents is that? (Round to the nearest whole person.)", answer:1044, tol:2, unit:"people", why:"2,008 × 0.52 = 1,044.16, so about 1,044 people. The rest, about 964, chose the United States.", wrongs:[
      {v:964, tol:2, why:"That is the 48% who chose the United States (2,008 × 0.48)."},
      {v:104416, tol:10, why:"You multiplied by 52 instead of by 0.52. Convert the percentage to a decimal first."},
      {v:3862, tol:5, why:"You divided 2,008 by 0.52. To find a share of a total, multiply."}
    ]},
    {id:"e4u20-l4-x6", type:"mcq", q:"A Southeast Asian government invites both China and the United States to join regional defence dialogues, signs trade deals with both, and holds exercises with Japan and Australia. Which concept describes this best?", options:[
      {t:"Omni-enmeshment and hedging: binding all powers into regional institutions while keeping options open", ok:true, why:"Right. Goh’s omni-enmeshment and Kuik’s hedging both describe engaging everyone and avoiding a single bet."},
      {t:"Bandwagoning with China", why:"Bandwagoning means joining the stronger side; this government engages both."},
      {t:"Strict neutrality under ZOPFAN", why:"Exercises with outside partners go beyond ZOPFAN’s ideal of keeping powers at arm’s length."},
      {t:"Supranational integration", why:"Nothing here transfers sovereignty to a regional body."}
    ]},
    {id:"e4u20-l4-x7", type:"spot", q:"A draft paragraph on ASEAN and Myanmar. Tap the claims that are **inaccurate or unattributed judgements**.", ask:"weak claims", parts:[
      {t:"ASEAN agreed the Five-Point Consensus in April 2021.", flag:false, why:"Accurate and dated."},
      " ",
      {t:"ASEAN expelled Myanmar in 2021.", flag:true, why:"ASEAN has no expulsion rule; it invited only a non-political representative to summits."},
      " ",
      {t:"Parliamentarians’ groups such as APHR call ASEAN’s response “paralysis”.", flag:false, why:"An attributed view."},
      " ",
      {t:"ASEAN is clearly useless and should be dissolved.", flag:true, why:"An unattributed verdict. Name who argues this and on what evidence, and give the counter-argument."},
      " ",
      {t:"In May 2026 ASEAN had not reached consensus on recognising Myanmar’s elections.", flag:false, why:"Accurate and dated."}
    ]}
   ],
   apply:{
    intro:"Read ASEAN’s own documents, and the views of people who study it.",
    tasks:[
     {t:"Read the Charter’s key articles", how:[
       "Open the ASEAN Charter (free on asean.org).",
       "Read Articles 1–2 (purposes and principles), 6 (admission), 20–21 (decision-making) and 30 (budget).",
       "Note one place where two principles might pull against each other, for example democracy and non-interference."
     ], write:"Article… What it says… Where it pulls against another principle… An example from the lesson…"},
     {t:"Read a chairman’s statement", how:[
       "Find the chairman’s statement of the most recent ASEAN Summit on asean.org.",
       "Find the paragraphs on Myanmar and on the South China Sea.",
       "List the exact verbs used (welcomes, notes, expresses concern…) and what they tell you about consensus."
     ], write:"Summit and date… Myanmar wording… South China Sea wording… What the verbs suggest…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Has the Myanmar crisis changed the ASEAN Way, or confirmed it?",
       "2. Is ASEAN centrality real power or a convenient fiction that great powers tolerate?",
       "3. Should ASEAN judge itself against its own aims or against the EU?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on five Charter articles, an analysis of one chairman’s statement, and a seminar paragraph."
   },
   read:[
    {book:"seasurvey26", where:"The sections on ASEAN, the major powers and the South China Sea", note:"Read it for the latest elite opinion; note the survey’s sample and questions."},
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard)", note:"Background on the actors of world politics, including international organisations, which you can test against ASEAN."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u20-l5", title:"Religion, ethnicity and popular culture", minutes:65,
   hook:{q:"Which three countries together are home to about half of all the world’s Buddhists (2020 data)?", options:["India, Nepal and Sri Lanka","Thailand, China and Myanmar","Japan, South Korea and Vietnam","Cambodia, Laos and Mongolia"], answer:1, reveal:"**Thailand, China and Myanmar.** The Pew Research Center reports that these three countries hold 52% of the world’s Buddhists. Two of them are in Southeast Asia, which is also home to one of the world’s largest Muslim populations and two Catholic-majority countries. How faith, ethnicity and popular culture shape the region’s politics, and how to compare countries without stereotypes, is this lesson."},
   goals:[
     "Describe the region’s religious diversity and the main ways states manage religion",
     "Explain debates about Islam and politics in Indonesia, Malaysia and the Muslim minorities of the Philippines and Thailand",
     "Explain the relationship between Theravada Buddhism, monarchy and the state, with care on contested cases",
     "Describe the varied histories of ethnic Chinese communities and the debate on “market-dominant minorities”",
     "Analyse regional popular culture and design a two-country comparison for a seminar paper"
   ],
   learn:[
    {h:"A region of many faiths", body:[
      {lead:"In Southeast Asia, religion is not only private belief: it is written into constitutions, taught in state schools and argued over in elections."},
      "The sociology primer introduced [[religion]], and Unit 6 the debates on religion in world politics and [[secularism]] ({{religion-in-world-politics}}). Southeast Asia shows almost every model, from Indonesia’s belief in God without a state religion to Brunei’s Islamic monarchy and Vietnam’s state-managed religious life.",
      "States manage faith in different ways. Cambodia’s constitution makes Buddhism the state religion. Singapore’s Maintenance of Religious Harmony Act (1990) lets the government restrain religious leaders who stir up hostility between faiths or mix religion with politics. Vietnam and Laos require religious organisations to register with the state, so Buddhist, Catholic and Protestant communities work within limits set by the party. Each model has defenders, who stress social peace, and critics, who stress freedom of belief.",
      {fig:'<svg viewBox="0 0 340 440"><rect class="d-sage" x="10" y="10" width="320" height="56" rx="10" stroke-width="2"/><text x="20" y="32">Muslim majority</text><text class="s" x="20" y="52">Indonesia, Malaysia, Brunei</text><rect class="d-gold" x="10" y="76" width="320" height="56" rx="10" stroke-width="2"/><text x="20" y="98">Theravada Buddhist majority</text><text class="s" x="20" y="118">Thailand, Myanmar, Laos, Cambodia</text><rect class="d-lup" x="10" y="142" width="320" height="56" rx="10" stroke-width="2"/><text x="20" y="164">Christian (mainly Catholic) majority</text><text class="s" x="20" y="184">Philippines, Timor-Leste</text><rect class="d-soft" x="10" y="208" width="320" height="92" rx="10" stroke-width="2"/><text x="20" y="230">No single majority faith</text><text class="s" x="20" y="250">Vietnam: folk religion, Buddhism, many</text><text class="s" x="20" y="268">with no religion; Singapore: Buddhist,</text><text class="s" x="20" y="286">Christian, Muslim, Taoist, Hindu, none</text><rect class="d-rose" x="10" y="310" width="320" height="120" rx="10" stroke-width="2"/><text x="20" y="332">Large minorities, for example</text><text class="s" x="20" y="352">Muslims in southern Thailand, Mindanao</text><text class="s" x="20" y="370">and Rakhine; Christians in eastern</text><text class="s" x="20" y="388">Indonesia, Malaysian Borneo and</text><text class="s" x="20" y="406">Myanmar’s hills; Hindus in Bali;</text><text class="s" x="20" y="424">Mahayana Buddhists among ethnic Chinese</text></svg>', alt:"Five stacked boxes. Muslim majority: Indonesia, Malaysia, Brunei. Theravada Buddhist majority: Thailand, Myanmar, Laos, Cambodia. Christian, mainly Catholic, majority: the Philippines and Timor-Leste. No single majority faith: Vietnam, with folk religion, Buddhism and many people with no religion; Singapore, with Buddhists, Christians, Muslims, Taoists, Hindus and people with no religion. Large minorities, for example Muslims in southern Thailand, Mindanao and Rakhine; Christians in eastern Indonesia, Malaysian Borneo and Myanmar’s hills; Hindus in Bali; Mahayana Buddhists among ethnic Chinese communities.", cap:"A simplified picture. Within every country there are many traditions, and census categories are themselves political choices."}
    ]},
    {h:"Islam: many paths, many debates", body:[
      "Islam spread through trade and royal courts from about the thirteenth century, and today ranges from village traditions mixed with older practices to modern reform movements ({{islam-in-southeast-asia}}).",
      "**Indonesia** is not an Islamic state. Its founding philosophy, [[pancasila|Pancasila]], first presented by Sukarno on 1 June 1945, begins with belief in one God, and the state recognises six religions: Islam, Protestantism, Catholicism, Hinduism, Buddhism and Confucianism. Two mass organisations, Muhammadiyah (1912) and Nahdlatul Ulama (1926), run schools, hospitals and universities. Clifford Geertz’s *The Religion of Java* (1960) divided Javanese into pious [[santri-and-abangan|santri]], syncretic abangan and the aristocratic priyayi; critics replied that priyayi is a class, not a religion, and that the categories mirrored 1950s party politics. Robert Hefner’s *Civil Islam* (2000) argued that Muslim civil society helped bring democracy in 1998.",
      "Scholars debate a “conservative turn” (the title of a 2013 volume edited by Martin van Bruinessen). The 2017 blasphemy conviction of Jakarta’s governor, an ethnic Chinese Christian, after mass rallies is often cited; others point out that Islamist parties have never come first in a national election and that the largest organisations promote pluralism.",
      "**Malaysia**’s constitution makes Islam the religion of the Federation while guaranteeing that other religions may be practised in peace and harmony (Article 3), and defines a Malay partly as a person who professes Islam (Article 160); syariah courts hear family and personal cases for Muslims. **Brunei**’s national philosophy is [[malay-islamic-monarchy|Melayu Islam Beraja]] (Malay Islamic Monarchy). Muslim minorities have their own politics: the Bangsamoro Organic Law (2018), ratified in a 2019 plebiscite after a long peace process, created an autonomous region for the Muslim-majority Bangsamoro in the southern Philippines, while an insurgency in Thailand’s Malay-Muslim southern provinces has continued since it intensified in 2004."
    ]},
    {h:"Buddhism, monks and the state", body:[
      "[[theravada-buddhism|Theravada Buddhism]] links rulers and the monastic community, the [[sangha|sangha]]: kings protected and purified the sangha, and the sangha lent kings legitimacy. Stanley Tambiah’s *World Conqueror and World Renouncer* (1976) traced this relationship in Thailand, where “Nation, Religion, King” remains the official trinity ({{buddhism-and-politics-southeast-asia}}).",
      "Monks can also oppose rulers. In 2007 monks led Myanmar’s “Saffron Revolution” protests against fuel price rises and military rule. In the 2010s nationalist monks’ movements such as Ma Ba Tha campaigned for four “race and religion” laws, passed in 2015, which critics said targeted Muslims and women’s choices and supporters said protected Buddhism. The mass flight of Rohingya Muslims to Bangladesh in 2017, the UN fact-finding mission’s findings and the case at the International Court of Justice are covered in Units 10 and 11; Myanmar’s authorities have rejected allegations of genocide.",
      {warn:"Avoid treating any religion as violent or peaceful by nature. Ask which organisations, which leaders and which political conditions turn religious identity into conflict, and cite who says so."}
    ]},
    {h:"Ethnic Chinese communities", body:[
      "People of Chinese descent have lived in the region for centuries, with large migrations of traders and labourers in the nineteenth and early twentieth centuries ({{ethnic-chinese-southeast-asia}}). Words matter. [[huaqiao|Huaqiao]] (华侨, “overseas Chinese”) suggests sojourners loyal to China; most scholars now prefer “ethnic Chinese” or “Chinese Indonesians”, “Chinese Filipinos” and so on. The historian Wang Gungwu (*The Chinese Overseas*, 2000) argued against treating them as one diaspora, since their identities were shaped mainly by the countries they lived in. [[peranakan|Peranakan]] (or Baba-Nyonya) communities in Malaysia, Singapore and Indonesia blended Chinese and Malay cultures.",
      "Histories differ sharply. In Thailand, G. William Skinner’s *Chinese Society in Thailand* (1957) described extensive assimilation. In Indonesia, Suharto’s government restricted Chinese schools, press and public festivals from 1967; ethnic Chinese were targeted in the May 1998 riots; President Abdurrahman Wahid lifted the restrictions in 2000, and the Lunar New Year became a national holiday from 2003. In Malaysia, debates on [[bumiputera]] preferences shape Chinese Malaysians’ politics; Singapore is a Chinese-majority state that classifies citizens as Chinese, Malay, Indian or Other. In Vietnam, many ethnic Chinese (Hoa) left during the tensions with China in 1978–79, while in the Philippines Chinese Filipinos are prominent in business and politics. China’s outreach to ethnic Chinese abroad adds a new layer: some welcome cultural ties, while some governments watch for political influence.",
      "Amy Chua’s *World on Fire* (2003) argued that “market-dominant minorities”, such as ethnic Chinese in Southeast Asia, face backlash when markets and democracy spread together. Critics answered that the idea lumps together rich and poor Chinese, overstates economic dominance and risks feeding the stereotypes it describes."
    ]},
    {h:"Popular culture and regional identity", body:[
      "ASEAN’s Charter gives it a motto, “One Vision, One Identity, One Community” (Article 36), but culture moves on its own terms. Thai “boys’ love” series such as *2gether* (2020) found large audiences across Asia; Filipino *teleserye* (TV dramas) and P-pop groups such as SB19, a booming Indonesian horror-film industry and the Thai film *How to Make Millions Before Grandma Dies* (2024) travelled across the region. Korean pop culture ([[hallyu]]) is hugely popular too, showing that regional flows are not only within ASEAN (Unit 5’s [[scapes]]; {{southeast-asian-popular-culture}}).",
      "Popular culture can be political. In 2020 young online activists in Thailand, Hong Kong and Taiwan, later joined by many in Myanmar, called their solidarity the [[milk-tea-alliance|Milk Tea Alliance]], after the milk tea drunk in all three places; nationalist users in mainland China pushed back online. Governments, meanwhile, promote their cultural industries as [[soft-power|soft power]] (Unit 8).",
      "To analyse a cultural product for a seminar, ask four questions: who made and funded it, who watches it and where, what it says about gender, class, religion or the nation, and how audiences in different countries read it differently (Unit 5’s encoding and decoding). Fan communities, subtitling volunteers and streaming platforms all shape what crosses borders."
    ]},
    {h:"Comparing two countries: a seminar exercise", body:[
      "The best way to avoid stereotypes is disciplined comparison (Unit 3: {{case-selection}}). A [[most-similar-design|most similar design]] compares countries alike in many ways but different in the outcome: Malaysia and Indonesia share Islam, a Malay language and colonial-era plural societies, but took different paths to democracy. A [[most-different-design|most different design]] compares unlike countries with a shared outcome: Vietnam and the Philippines both send many workers abroad.",
      {table:[
        ["Step","Example: Malaysia and Indonesia"],
        ["Puzzle","Why did Indonesia democratise in 1998 but Malaysia change government only in 2018?"],
        ["Theory","Slater’s elite cohesion; Slater and Wong’s democracy through strength"],
        ["Evidence","Party strength, crisis effects, ethnic politics, elections"],
        ["Limits","Two cases cannot prove a theory; say what else could explain it"]
      ]},
      "Use the same kinds of evidence for both countries: the same index and year for regime type, the same World Bank indicators for the economy, and comparable sources in each country’s own language where you can. Then use [[process-tracing-term|process tracing]] within each case to check that the mechanism you propose actually operated, not just that the outcomes differ. Finally, ask what a scholar from each country would say about your framing.",
      {key:"Religion, ethnicity and culture shape Southeast Asian politics through organisations, laws and histories, not timeless essences. Compare carefully, attribute contested claims and let the region’s own scholars speak."},
      {terms:["pancasila","santri-and-abangan","malay-islamic-monarchy","theravada-buddhism","sangha","huaqiao","peranakan","bumiputera","milk-tea-alliance"]}
    ]}
   ],
   try:[
    {id:"e4u20-l5-x1", type:"sort", q:"Sort each country by its majority religion.", buckets:["Muslim","Theravada Buddhist","Christian (mainly Catholic)"], items:[
      {t:"Indonesia", b:0, why:"Muslim-majority, though not an Islamic state: under Pancasila the state recognises six religions."},
      {t:"Brunei", b:0, why:"Its national philosophy is Malay Islamic Monarchy."},
      {t:"Thailand", b:1, why:"Theravada Buddhist-majority, with a Malay-Muslim minority in the south."},
      {t:"Cambodia", b:1, why:"Theravada Buddhism is the state religion."},
      {t:"Laos", b:1, why:"Mostly Theravada Buddhist, under a one-party state."},
      {t:"The Philippines", b:2, why:"Mainly Catholic, with a Muslim minority in Mindanao."},
      {t:"Timor-Leste", b:2, why:"Overwhelmingly Catholic."}
    ]},
    {id:"e4u20-l5-x2", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Pancasila","Indonesia’s five-principle state philosophy","First presented by Sukarno on 1 June 1945."],
      ["Santri","Pious, orthodox Muslims in Geertz’s Java","One of Geertz’s three variants (1960)."],
      ["Sangha","The community of Buddhist monks","Central to Theravada politics."],
      ["Peranakan","Locally born communities blending Chinese and Malay cultures","Also called Baba-Nyonya."],
      ["Huaqiao","“Overseas Chinese”, implying sojourners","A term many scholars now avoid."]
    ]},
    {id:"e4u20-l5-x3", type:"mcq", q:"What was a main criticism of Geertz’s santri–abangan–priyayi scheme?", options:[
      {t:"Priyayi describes a social class rather than a religious variant, and the scheme mirrored the politics of its time", ok:true, why:"Right. Critics argued that the three categories mixed religion and class and reflected 1950s party alignments."},
      {t:"Geertz studied Thailand, not Java", why:"*The Religion of Java* (1960) is about Java."},
      {t:"It ignored Islam entirely", why:"Islam is central to the santri category."},
      {t:"It was based only on colonial archives", why:"Geertz did ethnographic fieldwork in a Javanese town."}
    ]},
    {id:"e4u20-l5-x4", type:"order", q:"Put these events in Indonesia’s ethnic Chinese history in order.", items:[
      {t:"The government restricts Chinese schools, press and public festivals.", why:"From 1967, under Suharto."},
      {t:"Ethnic Chinese Indonesians are targeted in riots.", why:"May 1998, as Suharto’s rule ended."},
      {t:"President Abdurrahman Wahid lifts the restrictions.", why:"2000."},
      {t:"The Lunar New Year becomes a national holiday.", why:"From 2003."},
      {t:"Jakarta’s ethnic Chinese Christian governor is convicted of blasphemy after mass rallies.", why:"2017; scholars debate what it shows about religion and ethnicity in politics."}
    ]},
    {id:"e4u20-l5-x5", type:"mcq", q:"Fatima uses Amy Chua’s idea of “market-dominant minorities” in an essay on ethnic Chinese Indonesians. What should she add to be fair?", options:[
      {t:"The critics’ point that the idea lumps rich and poor together, overstates dominance and can feed stereotypes", ok:true, why:"Right. A fair essay states the argument and its main objections."},
      {t:"Proof that all ethnic Chinese are wealthy", why:"That claim is false and is exactly the stereotype critics warn about."},
      {t:"Nothing: Chua’s idea is settled scholarly consensus", why:"It is contested, not consensus."},
      {t:"A note that the idea comes from Furnivall’s 1939 book", why:"Chua’s book dates from 2003; Furnivall wrote about plural societies, a different concept."}
    ]},
    {id:"e4u20-l5-x6", type:"spot", q:"A paragraph from a seminar paper. Tap the sentences that **essentialise religion or ethnicity**.", ask:"essentialising claims", parts:[
      {t:"Indonesia’s state recognises six religions.", flag:false, why:"Accurate and specific."},
      " ",
      {t:"Buddhists are naturally peaceful, so Buddhist nationalism cannot be violent.", flag:true, why:"No religion is peaceful or violent by nature; the lesson asks which organisations and conditions matter."},
      " ",
      {t:"Ma Ba Tha campaigned for four laws passed in 2015; supporters and critics disagree about their purpose.", flag:false, why:"Specific and attributed."},
      " ",
      {t:"The Chinese everywhere in the region think alike about China.", flag:true, why:"Wang Gungwu and others show that identities vary by country, generation and class."},
      " ",
      {t:"Geertz’s categories have been criticised for mixing class and religion.", flag:false, why:"A fair account of a scholarly debate."}
    ]},
    {id:"e4u20-l5-x7", type:"mcq", q:"Kenji wants to explain why two Muslim-majority, formerly colonised neighbours with similar languages followed different paths to democracy. Which design fits?", options:[
      {t:"A most similar design comparing Malaysia and Indonesia", ok:true, why:"Right. They share many features but differ in the outcome, which lets you look for the factor that differs."},
      {t:"A most different design comparing Brunei and Vietnam", why:"These share neither religion nor the outcome in question."},
      {t:"A single case study of Singapore", why:"One case cannot compare two paths."},
      {t:"A survey of all 193 UN members", why:"A large-N study answers a different, broader question."}
    ]}
   ],
   apply:{
    intro:"Look at religion, ethnicity and culture through primary sources, and build your own comparison.",
    tasks:[
     {t:"Read a constitution", how:[
       "Find the constitution of one Southeast Asian country in English (the Constitute Project website has free translations).",
       "Search it for “religion”, “Islam”, “Buddhism” or “God”.",
       "Note what the text says, and one way it could be interpreted differently by two groups."
     ], write:"Country and article… What it says… Interpretation A… Interpretation B…"},
     {t:"Follow one cultural flow", how:[
       "Pick a film, series or music group from one Southeast Asian country that is popular in another.",
       "Find two reviews or fan discussions from different countries.",
       "Note what travels (story, stars, language, values) and what is changed or misunderstood."
     ], write:"Work and origin… Where it travelled… What travels… What changes…"},
     {t:"Design a two-country comparison", how:[
       "Choose two Southeast Asian countries and one puzzle.",
       "Say whether your design is most similar or most different, and name one theory from this unit to test.",
       "List three kinds of evidence and one limit.",
       "Seminar questions (choose one, 150–250 words): 1. Is Indonesia’s “conservative turn” real or overstated? 2. Has popular culture created a Southeast Asian identity that ASEAN has not?"
     ], write:"Countries… Puzzle… Design… Theory… Evidence… Limit… Seminar paragraph…"}
    ],
    proof:"Notes on one constitution’s religion clauses, a short analysis of one cultural flow, and a two-country research design with a seminar paragraph."
   },
   read:[
    {book:"eir", where:"Chapter 9 “Religion and Culture”", note:"Read it after this lesson for the general debate on religion and culture in world politics."},
    {book:"seasurvey26", where:"The full report", note:"Look for the questions that touch on identity, culture or influence, and check the wording and sample of each."}
   ]
  }
  ],
  codex:[
   {id:"southeast-asian-studies", title:"Southeast Asian studies", aka:["the study of Southeast Asia","Southeast Asia as a region"], tags:["area studies","Southeast Asia","method"],
    summary:"How scholars came to see Southeast Asia as a region, the field’s classic works and debates, and how to study the region responsibly.",
    levels:{
     starter:[
      "Southeast Asia today means eleven states: Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor-Leste and Vietnam. They differ in religion, language, colonial history and political system, so scholars ask whether “Southeast Asia” is a real region or a label.",
      "Think of a school class photo: the children share a room and a teacher, but they are very different people. The name of the class tells you something true and also hides a lot.",
      "The English name spread with the Allies’ South East Asia Command in 1943. Since then, area studies, ASEAN and the region’s own universities and institutes have made the label stick, while scholars keep debating what holds the region together.",
      {key:"Southeast Asia is both a real area of connection and a name made by outsiders."}
     ],
     builder:[
      "**Classic debate.** Donald Emmerson’s “‘Southeast Asia’: What’s in a Name?” (*Journal of Southeast Asian Studies*, 1984) argued that the name both describes and invents its subject. O. W. Wolters (1982; revised 1999) found a shared pattern in early [[mandala-state|mandala]] polities. Anthony Reid (1988, 1993) described an [[age-of-commerce|age of commerce]] (1450–1680) linking the lands “below the winds”. Victor Lieberman (*Strange Parallels*, 2003, 2009) replied that mainland states followed rhythms similar to those elsewhere in Eurasia.",
      "**Local agency.** John Smail (1961) called for an [[autonomous-history|autonomous history]] that starts from local societies. Thongchai Winichakul’s *Siam Mapped* (1994) showed how a “never colonised” country built a modern [[geo-body|geo-body]] with colonial tools.",
      "**Ideas that travelled.** Furnivall’s [[plural-society|plural society]], Scott’s [[moral-economy|moral economy]] and [[zomia|Zomia]], and Anderson’s work on nationalism ({{benedict-anderson}}) all began with Southeast Asian material."
     ],
     pro:[
      "**Area studies and its critics.** Like Japan studies ({{area-studies}}), the field grew with Cold War funding and was accused of serving foreign policy; later critics attacked “area studies” as theory-free description, and defenders replied that comparative theory without language skills and fieldwork misreads places. Comparative area studies tries to combine the two.",
      "**Whose field?** Since the 1990s, research has increasingly been led from within the region, through journals such as *Contemporary Southeast Asia* and *SOJOURN*, regional institutes and national academies. Japanese, Australian and other Asian scholarship is large, so the “outsider” is not only Western.",
      "**Practical rules.** Define your unit (country, period, group), read local scholars and sources, explain names and spellings, treat colonial archives critically, and compare within the region as well as with Europe. Avoid “Southeast Asians believe…” statements and [[asian-values|“Asian values”]] shortcuts.",
      {tip:"A good opening for a paper: state why your case is a case of something (democratisation, resource policy, religious politics) and why Southeast Asia matters for that question."}
     ]
    },
    related:["mandala-polity","james-c-scott","area-studies","benedict-anderson","comparative-regionalism"],
    read:[{book:"owh2", where:"Chapter 2, section 2.2 “The Malacca Sultanate”"}],
    sources:[{t:"OpenStax, World History Volume 2, section 2.2 “The Malacca Sultanate”", url:"https://openstax.org/books/world-history-volume-2/pages/2-2-the-malacca-sultanate"},{t:"The ASEAN Magazine, “Forging a New Era: Timor-Leste Admitted into ASEAN” (26 October 2025)", url:"https://theaseanmagazine.asean.org/?p=7588"}],
    checked:"2026-11"},

   {id:"mandala-polity", title:"Mandala and galactic polities", aka:["mandala state","galactic polity","negara"], tags:["history","Southeast Asia","state"],
    summary:"Models of early Southeast Asian states as overlapping circles of power around rulers rather than territories with fixed borders.",
    levels:{
     starter:[
      "Modern states have borders drawn on maps. Many early Southeast Asian kingdoms worked differently. Their power was strongest at a royal centre and faded with distance, and the edges of one kingdom overlapped with the edges of another.",
      "Picture several lamps in a dark field. Each lights up a circle; the circles overlap; when one lamp grows brighter, its circle grows. That is the idea of a **mandala** polity.",
      "A small ruler at the edge might send gifts to two bigger kings at once to keep both happy. This was normal, not a betrayal.",
      {key:"Early power in the region was about people and loyalty more than territory."}
     ],
     builder:[
      "**Wolters.** O. W. Wolters, in *History, Culture, and Region in Southeast Asian Perspectives* (1982; revised 1999), used the Sanskrit word *mandala* (circle) for these polities. Power rested on a ruler’s personal prowess and spiritual standing; alliances were renewed through tribute, marriage and ritual.",
      "**Tambiah.** The anthropologist Stanley Tambiah described a similar “galactic polity” in Thai history, with satellite centres orbiting a core (*World Conqueror and World Renouncer*, 1976).",
      "**Geertz.** Clifford Geertz’s *Negara* (1980) described the nineteenth-century Balinese state as a “theatre state”, where ritual display was the point of power, not just its decoration.",
      "**Using it.** The model helps explain why colonial boundary-making was such a rupture, and why some scholars see echoes of personal, networked power in modern politics."
     ],
     pro:[
      "**Critiques.** Historians warn against treating the mandala as timeless: mainland states such as Burma, Siam and Vietnam became more centralised from the sixteenth century onward (Lieberman, *Strange Parallels*). Others note that the model rests heavily on court sources and inscriptions.",
      "**Siam’s geo-body.** Thongchai Winichakul (1994) showed how, in the late nineteenth century, overlapping frontiers were replaced by mapped borders, creating the modern [[geo-body|geo-body]]. The mandala and the geo-body are often taught together as before and after.",
      "**IR uses.** Scholars of Asian international relations compare mandala-style orders with ideas of hierarchy and tribute in East Asia (Unit 19) and with Westphalian sovereignty, asking whether non-Western historical orders offer concepts for Global IR ({{global-ir}}).",
      {tip:"Do not use “mandala” as a cultural explanation for present-day politics without evidence; use it as a historical model with named authors."}
     ]
    },
    related:["southeast-asian-studies","global-ir"],
    read:[{book:"owh2", where:"Chapter 2, section 2.2 “The Malacca Sultanate”"}],
    sources:[{t:"OpenStax, World History Volume 2, section 2.2 “The Malacca Sultanate”", url:"https://openstax.org/books/world-history-volume-2/pages/2-2-the-malacca-sultanate"}],
    checked:"2026-11"},

   {id:"james-c-scott", title:"James C. Scott", aka:["Scott"], tags:["thinker","Southeast Asia","resistance","state"],
    summary:"Political scientist and anthropologist (died 2024) whose Southeast Asian fieldwork produced the ideas of moral economy, everyday resistance and Zomia.",
    levels:{
     starter:[
      "James C. Scott was a political scientist and anthropologist at Yale who studied peasants, states and resistance, starting from Southeast Asia. He died on 19 July 2024.",
      "His big idea is that ordinary people resist power in many quiet ways, and that states try to make societies “legible”: simple enough to count, tax and control.",
      "He wrote about rice farmers in Vietnam and Burma, a village in Malaysia, and the hill peoples of mainland Southeast Asia. His books are read across politics, anthropology, history and development studies.",
      {key:"Scott taught generations to look for politics in everyday life and to be sceptical of grand state plans."}
     ],
     builder:[
      "**Key works.** *The Moral Economy of the Peasant* (1976): peasants rebel when elites violate a shared right to subsistence ([[moral-economy|moral economy]]). *Weapons of the Weak* (1985): [[everyday-resistance|everyday resistance]] in a Malaysian village. *Domination and the Arts of Resistance* (1990): “hidden transcripts” spoken out of the powerful’s hearing. *Seeing Like a State* (1998): why high-modernist schemes fail. *The Art of Not Being Governed* (2009): [[zomia|Zomia]] and upland peoples as refugees from state-making. *Against the Grain* (2017): early states and grain.",
      "**Career.** He earned his doctorate at Yale and returned there as faculty in 1976, founding its Program in Agrarian Studies in 1991.",
      "**Using him.** In a seminar, Scott helps you ask who is invisible in official records, and what forms of resistance a survey would miss."
     ],
     pro:[
      "**Critiques.** Samuel Popkin’s *The Rational Peasant* (1979) answered *The Moral Economy* with a rational-choice account of peasant behaviour. On Zomia, Victor Lieberman (*Journal of Global History*, 2010) argued that Scott made little use of Burmese-language sources, found little record of mass flight to the hills, and gave too little weight to the uplands’ own ecology; others noted that some upland peoples built states of their own. Some feminist and subaltern scholars asked whether “everyday resistance” romanticises survival.",
      "**Legacy.** Scott’s concepts travelled far beyond the region: legibility is used in studies of digital surveillance and development; hidden transcripts in work on authoritarian regimes; Zomia in borderland studies. He described himself as anarchist in sympathy (*Two Cheers for Anarchism*, 2012), which critics say shapes his scepticism of states.",
      {tip:"Pair Scott with a critic in your paper (Popkin on peasants, Lieberman on Zomia) to show you know the debate."}
     ]
    },
    related:["southeast-asian-studies","mandala-polity"],
    sources:[{t:"Yale Program in Agrarian Studies, “Remembering James C. Scott”", url:"https://macmillan.yale.edu/agrarian/remembering-james-c-scott"}],
    checked:"2026-11"},

   {id:"regimes-in-southeast-asia", title:"Political regimes in Southeast Asia", aka:["Southeast Asian politics","democratisation in Southeast Asia"], tags:["comparative politics","democracy","authoritarianism","Southeast Asia"],
    summary:"The region’s mix of monarchies, one-party states, dominant-party systems and electoral democracies, and the theories used to explain them.",
    levels:{
     starter:[
      "Southeast Asia has almost every kind of regime: an absolute monarchy (Brunei), one-party communist states (Vietnam, Laos), long-ruling dominant parties (Singapore, Cambodia), competitive democracies with turbulent histories (Indonesia, the Philippines, Timor-Leste, Malaysia), Thailand’s cycle of elections, court rulings and coups, and Myanmar under military-led rule since 2021.",
      "Labels such as “democracy” or “authoritarian” are contested. Indices such as V-Dem and Freedom House measure them in different ways, and governments often reject the labels.",
      {key:"Say which classification you use, from which source and year, and give the counter-position."}
     ],
     builder:[
      "**Transitions.** The Philippines (1986, [[people-power-revolution|People Power]]), Thailand (1992), Indonesia (1998, [[reformasi|Reformasi]]) and Timor-Leste (2002) form the region’s part of Huntington’s “third wave”. Malaysia had its first change of ruling coalition in 2018.",
      "**Durability.** Dan Slater’s *Ordering Power* (2010) traced durable authoritarian regimes in Malaysia and Singapore to elite pacts formed against mass unrest. Slater and Wong (*From Development to Democracy*, 2022) argued that some regimes concede [[democracy-through-strength|democracy through strength]]; their publisher’s summary calls Indonesia’s, Thailand’s and Myanmar’s democratic experiments “less successful and more reversible”.",
      "**Hybrids.** [[competitive-authoritarianism|Competitive authoritarianism]] (Levitsky and Way, 2002/2010) and electoral authoritarianism (Schedler, 2006) describe real but unfair elections. [[dominant-party-system|Dominant-party systems]] such as Singapore’s People’s Action Party (87 of 97 seats in May 2025) are a classic puzzle.",
      "**Erosion.** Bermeo (2016) described [[democratic-backsliding|backsliding]] by elected leaders; Indonesian scholars debate whether democracy has stagnated or regressed (Power and Warburton, eds, 2020)."
     ],
     pro:[
      "**Clientelism.** Aspinall and Berenschot’s *Democracy for Sale* (2019) shows how [[money-politics|money politics]] and brokers shape Indonesian elections; similar patterns are studied in the Philippines and Thailand. Critics ask whether clientelism undermines democracy or is one way citizens hold politicians to account.",
      "**One-party states.** Vietnam and Laos raise questions of authoritarian resilience: institutionalised succession, performance legitimacy and controlled feedback. Comparisons with China (Unit 19) are common.",
      "**Measurement traps.** Indices weight elections, civil liberties and rule of law differently; small changes can move a country across a category line. Cite the index, version and year, and check the indicator that drives a change.",
      {warn:"Never call one side’s view “the truth” in a contested case. Attribute positions and date them."}
     ]
    },
    related:["military-politics-southeast-asia","myanmar-since-2021","ir-datasets"],
    read:[{book:"ospol", where:"Chapter 13, sections 13.2 “Categorizing Contemporary Regimes” and 13.3 “Recent Trends: Illiberal Representative Regimes”"}],
    sources:[{t:"Slater & Wong, From Development to Democracy (Princeton University Press, 2022): publisher’s description, bookseller listing", url:"https://www.angusrobertson.com.au/ebooks/from-development-to-democracy-dan-slater-joseph-wong/p/9780691231075"}],
    checked:"2026-11"},

   {id:"military-politics-southeast-asia", title:"Militaries, monarchies and courts in Southeast Asian politics", aka:["civil–military relations in Southeast Asia","Thai politics"], tags:["comparative politics","military","Thailand","Southeast Asia"],
    summary:"How armies, monarchies and courts shape politics in the region, with Thailand as the main case.",
    levels:{
     starter:[
      "In some Southeast Asian countries, elected governments share power with institutions that voters do not choose: armed forces, monarchies and courts.",
      "Thailand is the clearest example. Since the 1932 revolution ended absolute monarchy, it has had about a dozen successful coups (counts differ), most recently in 2006 and 2014, and its Constitutional Court has removed several prime ministers.",
      "Myanmar’s military ruled for most of the period since 1962 and seized power again in 2021. Indonesia’s military had a formal political role under Suharto that was dismantled after 1998.",
      {key:"To understand politics in the region, look beyond elections to the institutions that can override them."}
     ],
     builder:[
      "**Network monarchy.** Duncan McCargo (*The Pacific Review*, 2005) described Thailand’s [[network-monarchy|network monarchy]]: informal networks around the palace that worked through the military, bureaucracy and judiciary. Section 112 of the Criminal Code ([[lese-majeste|lèse-majesté]]) carries three to fifteen years in prison and is central to debates on free expression.",
      "**Courts.** Thailand’s Constitutional Court dissolved the Move Forward Party (August 2024) and removed Prime Ministers Srettha Thavisin (August 2024) and Paetongtarn Shinawatra (August 2025). Supporters see constitutional guardianship; critics see “judicialisation” of politics against elected majorities.",
      "**2026.** Bhumjaithai won 193 of 500 seats in the election of 8 February 2026, and the House re-elected Anutin Charnvirakul as prime minister on 19 March 2026 (293 votes)."
     ],
     pro:[
      "**Explaining coups.** Scholars point to elite conflict over the monarchy’s future, polarisation between rural and urban voters, the military’s corporate interests, and constitutions designed to constrain elected governments (the appointed Senate under the 2017 constitution blocked Move Forward’s leader in 2023).",
      "**Comparisons.** Indonesia’s *dwifungsi* (“dual function”) doctrine gave the military a political role under Suharto; reforms after 1998 ended its reserved seats, though debates about the military’s role in civilian life continue. The Philippines saw coup attempts in the late 1980s but no successful coup.",
      "**Civil–military theory.** Classic works distinguish objective civilian control (a professional, apolitical army) from subjective control (an army tied to a ruling group). Southeast Asian cases often fit neither neatly.",
      {tip:"When writing about a monarchy, note any legal limits on what may be published in that country, and rely on published, attributed sources."}
     ]
    },
    related:["regimes-in-southeast-asia","myanmar-since-2021"],
    sources:[{t:"Thailand Government Public Relations Department, “Bhumjaithai Party Leader Anutin Charnvirakul Re-elected Prime Minister of Thailand” (March 2026)", url:"https://thailand.prd.go.th/en/content/category/detail/id/48/iid/486890"}],
    checked:"2026-11"},

   {id:"myanmar-since-2021", title:"Myanmar since 2021", aka:["Myanmar coup","Myanmar crisis"], tags:["Myanmar","conflict","ASEAN","as of 2026"],
    summary:"The 2021 military takeover, the resistance, the 2025–26 elections and ASEAN’s response, as of November 2026, with each side’s position.",
    levels:{
     starter:[
      "On 1 February 2021 Myanmar’s military seized power and detained elected leaders, including Aung San Suu Kyi, alleging fraud in the November 2020 election that the election commission had rejected.",
      "Protests and strikes were met with force; armed resistance spread, and long-running ethnic armed organisations fought too. Elected legislators formed a [[national-unity-government|National Unity Government]] (NUG) in April 2021.",
      "The military government held elections in phases in December 2025 and January 2026; in April 2026 the new parliament elected Min Aung Hlaing president.",
      {key:"Describe Myanmar with dates and each actor’s stated position; avoid loaded labels unless quoting."}
     ],
     builder:[
      "**Timeline.** NLD dissolved by the military’s election commission (March 2023); earthquake in central Myanmar (28 March 2025); elections in three phases (December 2025–January 2026), with voting in only part of the country; Min Aung Hlaing elected president on 3 April 2026 with 429 of 584 votes, after handing military command to Gen. Ye Win Oo.",
      "**Positions.** The military-led government says the elections restored constitutional rule. The NUG and many resistance groups reject them; its spokesperson said “Myanmar people do not accept it”. ASEAN agreed the [[five-point-consensus|Five-Point Consensus]] in April 2021, has limited Myanmar to [[non-political-representation|non-political representation]] at summits, and in May 2026 had not reached consensus on recognising the elections, calling the 5PC its “primary reference”."
     ],
     pro:[
      "**Debates.** Is the post-election government a civilianised military regime or a step towards a negotiated settlement? Will ASEAN normalise relations? Parliamentarians’ groups such as APHR warn against normalisation; some governments argue engagement is needed for aid and peace.",
      "**Wider issues.** The Rohingya crisis and the case at the International Court of Justice (Units 10–11), scam compounds in border areas (Lesson 3), refugee flows to Thailand and India, and China’s role near its border all intersect with the conflict.",
      "**Sources.** Use official statements, UN reports, ASEAN chairman’s statements, and reporting from regional and exile media, noting each one’s perspective. Casualty and displacement figures vary; cite the body and date.",
      {warn:"The situation changes fast. Date every claim “as of” and check the latest ASEAN and UN statements."}
     ]
    },
    related:["regimes-in-southeast-asia","asean-institutional-design","military-politics-southeast-asia"],
    sources:[{t:"The Star (AP), “Myanmar’s parliament elects the ruling general as president…”, 5 April 2026", url:"https://www.thestar.com.my/aseanplus/aseanplus-news/2026/04/05/039i039m-the-boss-now039-myanmars-parliament-elects-the-ruling-general-as-president-keeping-the-army-firmly-in-charge"},{t:"The Star (Bernama), “Asean yet to reach consensus on recognising Myanmar elections”, 6 May 2026", url:"https://www.thestar.com.my/aseanplus/aseanplus-news/2026/05/06/asean-yet-to-reach-consensus-on-recognising-myanmar-elections"},{t:"China Daily, “ASEAN reaffirms Five-Point Consensus”, 12 May 2026", url:"https://mobile.chinadaily.com.cn/html5/2026-05/12/content_011_6a022bdced50be540e730188.htm"},{t:"ASEAN Parliamentarians for Human Rights, “ASEAN’s Myanmar Paralysis Continues After Cebu Summit, APHR Warns of Junta Normalization” (May 2026)", url:"https://aseanmp.org/publications/post/aseans-myanmar-paralysis-continues-after-cebu-summit-aphr-warns-of-junta-normalization"}],
    checked:"2026-11"},

   {id:"southeast-asian-political-economy", title:"Southeast Asian political economy", aka:["development in Southeast Asia","Southeast Asian development paths"], tags:["political economy","development","Southeast Asia"],
    summary:"The region’s development paths, why it upgraded more slowly than Northeast Asia, and its place in global value chains.",
    levels:{
     starter:[
      "Southeast Asia’s economies grew fast for decades, but in different ways: Singapore and Malaysia through foreign investment in factories, Indonesia through oil and later minerals, Vietnam through market reforms under one party, the Philippines partly through workers abroad.",
      "Think of four families who all got richer: one rented rooms to a big company, one sold what was under its land, one changed its whole way of running the household, and one sent members to work far away.",
      {key:"There is no single Southeast Asian model of development."}
     ],
     builder:[
      "**Paths.** FDI-led export manufacturing (Singapore, Penang, Thailand’s car industry); resource rents and redistribution (Suharto’s Indonesia; Malaysia’s [[new-economic-policy|New Economic Policy]], 1971); reform from central planning (Vietnam’s [[doi-moi|Đổi Mới]], 1986); labour export and services (the Philippines).",
      "**Why slower upgrading?** Yoshihara’s [[ersatz-capitalism|ersatz capitalism]] (1988); Doner, Ritchie and Slater’s [[systemic-vulnerability|systemic vulnerability]] (2005); Studwell’s *How Asia Works* (2013) on land reform, export discipline and finance. Each has critics who stress the region’s strong growth and poverty reduction.",
      "**Value chains.** Japanese investment after the 1985 Plaza Accord built regional production networks; [[china-plus-one|China plus one]] strategies since 2018 brought new factories. The *ASEAN Investment Report 2025* records FDI into ASEAN up 8% to 226 billion US dollars in 2024, while global FDI fell 11%."
     ],
     pro:[
      "**Debates.** Does “China plus one” move the region up value chains, or deepen dependence on Chinese inputs? Can resource-based industrial policy, such as Indonesia’s nickel [[downstreaming|downstreaming]], avoid the problems of earlier state-led projects? Is the [[middle-income-trap|middle-income trap]] a real trap or a slowing that all economies face?",
      "**Crises.** The 1997–98 Asian financial crisis (Unit 15) reshaped politics: it ended Suharto’s rule and led Malaysia to impose capital controls, a decision still debated.",
      "**Data.** Use World Bank, ASEAN Secretariat and UNCTAD data with years; note that FDI figures are revised, and check whether a series covers ten members or includes Timor-Leste, which joined in 2025.",
      {tip:"Compare two economies with the same indicators and years before drawing lessons."}
     ]
    },
    related:["asean-economic-community","indonesia-nickel-downstreaming","migration-in-southeast-asia","global-value-chains","developmental-state-debate"],
    read:[{book:"wdr2020", where:"Overview"}],
    sources:[{t:"UNCTAD, ASEAN Investment Report 2025", url:"https://unctad.org/publication/asean-investment-report-2025"}],
    checked:"2026-11"},

   {id:"asean-economic-community", title:"The ASEAN Economic Community", aka:["AEC","AFTA","ATIGA"], tags:["ASEAN","trade","regionalism"],
    summary:"ASEAN’s economic integration from AFTA (1992) to the AEC (2015) and the upgraded ATIGA (2025): what it does, and why it stays shallow.",
    levels:{
     starter:[
      "The ASEAN Economic Community (AEC) is ASEAN’s plan for a single market and production base. It was formally established at the end of 2015.",
      "It is not like the EU’s single market. Members keep their own tariffs towards outsiders, there is no common currency, and people cannot move freely to work.",
      "Its main aim is to make the region attractive to investors as one connected production area, linked to world markets.",
      {key:"The AEC is a free trade area plus cooperation, built to serve global value chains rather than to copy Europe."}
     ],
     builder:[
      "**Steps.** The [[asean-free-trade-area|ASEAN Free Trade Area]] (1992) began tariff cuts; the [[atiga|ASEAN Trade in Goods Agreement]] (2009) consolidated the rules; the AEC (2015) added services, investment and skilled-labour cooperation. An upgraded ATIGA and an upgrade of the ASEAN–China free trade area were signed at the October 2025 summit in Kuala Lumpur.",
      "**Wider deals.** ASEAN members belong to [[rcep|RCEP]] (in force 2022) with China, Japan, South Korea, Australia and New Zealand.",
      "**Labour.** [[mutual-recognition-arrangement|Mutual recognition arrangements]] cover seven professional services (engineering, nursing, architecture, surveying, medicine, dentistry and accountancy), plus tourism professionals, and a 2012 agreement covers temporary movement of business people."
     ],
     pro:[
      "**Shallowness.** According to ASEAN’s Secretary-General (October 2025), intra-ASEAN trade was 21.5% of members’ total trade. Non-tariff barriers, services restrictions and weak enforcement remain; disputes are rarely taken to ASEAN’s own dispute mechanism.",
      "**Interpretations.** Liberal economists see unfinished integration; others describe “open regionalism” designed to plug into global markets; critics on the left argue that the AEC serves investors more than workers.",
      "**Comparisons.** Set beside the EU, the AEC lacks supranational bodies and a court (Unit 9). Set beside other Global South blocs, it has unusually deep links to global value chains.",
      {tip:"Do not measure the AEC only by intra-regional trade shares; ask what it was designed to do."}
     ]
    },
    related:["southeast-asian-political-economy","asean-institutional-design","comparative-regionalism"],
    sources:[{t:"Malay Mail, “ASEAN signs upgraded trade pact…”, 28 October 2025", url:"https://www.malaymail.com/news/money/2025/10/28/asean-signs-upgraded-trade-pact-paving-way-for-single-market-and-stronger-regional-integration-says-sec-gen/196305"},{t:"Singapore government press release on the 47th ASEAN Summit, 28 October 2025", url:"https://www.meti.gov.sg/newsroom/asean-powers-ahead-with-next-generation-trade-agreements-and-global-engagement-at-the-47th-asean-summit/"},{t:"ASEAN, Services: mutual recognition arrangements and movement of natural persons", url:"https://asean.org/our-communities/economic-community/services/"}],
    checked:"2026-11"},

   {id:"indonesia-nickel-downstreaming", title:"Indonesia’s nickel downstreaming", aka:["hilirisasi","nickel export ban","DS592"], tags:["Indonesia","critical minerals","industrial policy","trade"],
    summary:"Indonesia’s ban on nickel ore exports and push to process at home: the timeline, the results and the arguments on each side.",
    levels:{
     starter:[
      "Nickel is used in stainless steel and in many electric-vehicle batteries. Indonesia has some of the world’s largest deposits.",
      "For years Indonesia exported raw nickel ore, mostly to China, where others processed it and kept most of the value. Indonesia decided to ban ore exports so that smelters would be built at home. It calls this [[downstreaming|downstreaming]] (*hilirisasi*).",
      "It worked in one sense: by 2025 Indonesia produced about two-thirds of the world’s mined nickel, according to the US Geological Survey, and processed much of it at home. But the policy also brought trade disputes and environmental and labour concerns.",
      {key:"Downstreaming is a bet that keeping processing at home will build industry; whether it pays off depends on prices, technology and who captures the gains."}
     ],
     builder:[
      "**Timeline.** A 2009 mining law required domestic processing; a ban on raw ore exports was enforced in 2014, relaxed in 2017 for firms that committed to building smelters, and reinstated for nickel ore from 1 January 2020 (announced in August 2019).",
      "**Output.** USGS estimates: Indonesian mine output 2.31 million tonnes in 2024 and 2.6 million in 2025, of a world total of 3.9 million in 2025; the Philippines produced about 0.27 million.",
      "**Investment.** Much of the processing capacity was built by Chinese firms, often in industrial parks such as the Indonesia Morowali Industrial Park in Central Sulawesi.",
      "**WTO.** The EU challenged the measures (DS592, requested November 2019). A panel report of 30 November 2022 found the ore export ban and a domestic processing requirement inconsistent with GATT Article XI:1; Indonesia appealed on 8 December 2022, and with the Appellate Body not functioning the appeal is pending ([[resource-nationalism|resource nationalism]]; Unit 15)."
     ],
     pro:[
      "**For.** The government and many Indonesian economists argue that the ban created jobs, export revenue and industrial skills, and that today’s rich countries used similar policies (the “kicking away the ladder” argument).",
      "**Against or cautious.** The EU and some trade economists see an illegal export restriction that raises world prices; environmental groups point to coal-fired captive power plants, deforestation and water pollution; labour groups point to deadly accidents; other economists warn of dependence on a few foreign investors and on battery chemistries that may use less nickel.",
      "**How to assess it.** Separate value added at home, distribution of gains (foreign owners, state, workers, communities) and costs. Compare with other producers’ policies, such as cobalt in the Democratic Republic of the Congo or lithium in Chile ([[critical-minerals|critical minerals]]).",
      {tip:"Use the WTO’s DS592 page for the legal facts and USGS tables for output; date every figure."}
     ]
    },
    related:["southeast-asian-political-economy","global-value-chains"],
    sources:[{t:"US Geological Survey, Mineral Commodity Summaries 2026: Nickel", url:"https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-nickel.pdf"},{t:"WTO, DS592: Indonesia – Measures Relating to Raw Materials", url:"https://www.wto.org/english/tratop_e/dispu_e/cases_e/ds592_e.htm"},{t:"US International Trade Commission, Executive Briefing on Trade: Nickel and Indonesia (May 2021)", url:"https://www.usitc.gov/publications/332/executive_briefings/ebot_nickel_and_indonesia_part_1.pdf"}],
    checked:"2026-11"},

   {id:"migration-in-southeast-asia", title:"Migration in Southeast Asia", aka:["labour migration in ASEAN","migrant workers in Southeast Asia"], tags:["migration","labour","ASEAN","trafficking"],
    summary:"The region’s main migration corridors, ASEAN’s rules for skilled and lower-wage workers, and the rise of forced labour in scam compounds.",
    levels:{
     starter:[
      "Millions of Southeast Asians work outside their home country. Many move within the region: from Myanmar, Cambodia and Laos to Thailand; from Indonesia to Malaysia; to Singapore and Brunei. Others go further, from the Philippines, Indonesia and Vietnam to East Asia, the Gulf and beyond.",
      "They work in plantations, construction, factories, fishing and homes, sending money back to families ([[remittances]]).",
      "ASEAN does not have free movement of workers like the EU. Its rules mostly help skilled professionals; lower-wage workers depend on national laws and bilateral agreements.",
      {key:"Migration is central to the region’s economy, but protections for most migrant workers are weak."}
     ],
     builder:[
      "**Skilled workers.** [[mutual-recognition-arrangement|Mutual recognition arrangements]] cover engineering (2005), nursing (2006), architecture and surveying (2007), medicine and dentistry (2009) and accountancy (2014), plus tourism professionals; the 2012 Agreement on the Movement of Natural Persons covers temporary business movement.",
      "**Lower-wage workers.** The Cebu Declaration (2007) and the ASEAN Consensus on the Protection and Promotion of the Rights of Migrant Workers (Manila, 2017) set shared principles but are not binding treaties. Bilateral memorandums, private recruitment agencies and brokers organise much of the flow; recruitment debts and confiscated passports are common complaints.",
      "**Origin-state policies.** The Philippines built an extensive system to train, deploy and protect overseas workers; Indonesia and Vietnam also manage labour export actively."
     ],
     pro:[
      "**Scam compounds.** The UN human rights office reported in August 2023 that at least 120,000 people in Myanmar and about 100,000 in Cambodia might be held in situations where they are forced to carry out online scams, with Laos, the Philippines and Thailand as other destination or transit countries. High Commissioner Volker Türk: “They are victims. They are not criminals.” ([[scam-compounds]], [[human-trafficking]])",
      "**Debates.** Should ASEAN create binding rules on migrant workers, or is national and bilateral regulation more realistic? Do remittances develop sending regions or create dependence (see the migration primer)? How should states treat people forced into crime?",
      "**Data.** Irregular migration is hard to count; use UN, ILO and national data with years, and say what each figure covers.",
      {tip:"Write “migrant workers” or “people in irregular situations”, not “illegals”."}
     ]
    },
    related:["southeast-asian-political-economy","remittances","statelessness"],
    read:[{book:"imis", where:"Chapter 12 “Irregular Migration” (Sarah Spencer and Anna Triandafyllidou)"}],
    sources:[{t:"UN News, “Hundreds of thousands trafficked into online criminality across SE Asia”, 29 August 2023", url:"https://news.un.org/en/node/1140187"},{t:"ASEAN, Services: mutual recognition arrangements and movement of natural persons", url:"https://asean.org/our-communities/economic-community/services/"}],
    checked:"2026-11"},

   {id:"asean-institutional-design", title:"ASEAN’s institutional design", aka:["ASEAN Charter","ASEAN decision-making","how ASEAN works"], tags:["ASEAN","international organisations","regionalism"],
    summary:"How ASEAN is built and decides: its founding texts, the 2007 Charter, consensus, the chair, the Secretariat and enlargement to eleven members.",
    levels:{
     starter:[
      "ASEAN (the Association of Southeast Asian Nations) was founded in Bangkok on 8 August 1967 by Indonesia, Malaysia, the Philippines, Singapore and Thailand. It now has eleven members: Brunei joined in 1984, Vietnam in 1995, Laos and Myanmar in 1997, Cambodia in 1999 and Timor-Leste on 26 October 2025.",
      "ASEAN decides by consultation and consensus. Leaders meet twice a year; the chair rotates each year (the Philippines in 2026). A small Secretariat in Jakarta supports the work.",
      "Think of a club in which every member has a veto and all pay the same fee: it moves slowly, but nobody is outvoted.",
      {key:"ASEAN is intergovernmental: governments decide together; no ASEAN body can overrule them."}
     ],
     builder:[
      "**Founding texts.** [[zopfan|ZOPFAN]] (1971) and the [[treaty-of-amity-and-cooperation|Treaty of Amity and Cooperation]] (1976) set the norms of sovereignty, [[non-interference]] and peaceful settlement: the [[asean-way|ASEAN Way]].",
      "**The Charter** (signed 2007, in force 2008). Purposes include strengthening democracy, good governance and human rights (Art. 1(7)); principles include non-interference (Art. 2(2)(e)); admission requires location in Southeast Asia, recognition by all members and acceptance of obligations (Art. 6); decisions are by consultation and consensus, with a “serious breach” referred to the Summit (Art. 20); [[asean-minus-x|ASEAN minus X]] is possible for economic commitments where there is consensus (Art. 21); the Secretariat’s budget comes from equal annual contributions (Art. 30); the motto is “One Vision, One Identity, One Community” (Art. 36).",
      "**Bodies.** Summit; Coordinating Council (foreign ministers); three Community Councils ([[asean-community-pillars|pillars]]); sectoral ministerial bodies; the Secretary-General and Secretariat; the Committee of Permanent Representatives; and the [[aichr|AICHR]] (2009).",
      "**Vision.** The Kuala Lumpur Declaration on “ASEAN 2045: Our Shared Future” was adopted on 26 May 2025."
     ],
     pro:[
      "**Enlargement.** Timor-Leste applied in 2011, gained observer status with agreement in principle in 2022, followed a roadmap adopted in 2023, and was admitted by a declaration signed at the 47th Summit in Kuala Lumpur on 26 October 2025.",
      "**Interpretations.** Acharya’s constructivist account sees consensus as building a security community; Jones and Smith (2007) see “process, not progress”; Lee Jones (2012) argues that non-interference is applied selectively to protect ruling elites (Unit 9: {{comparative-regionalism}}).",
      "**Stress tests.** Myanmar since 2021 (the [[five-point-consensus|Five-Point Consensus]] and [[non-political-representation|non-political representation]]); South China Sea disagreements (no joint communiqué in 2012); Thai–Cambodian fighting in July and December 2025, ended by truces, the second monitored by an ASEAN observer team.",
      {tip:"Read a chairman’s statement closely: verbs such as “noted”, “welcomed” and “expressed concern” show how far consensus reached."}
     ]
    },
    related:["comparative-regionalism","asean-and-great-powers","myanmar-since-2021","asean-economic-community"],
    sources:[{t:"ASEAN Charter (2007), text", url:"https://jus.uio.no/english/services/library/treaties/14/14-03/asean_charter.html"},{t:"The ASEAN Magazine, “Forging a New Era: Timor-Leste Admitted into ASEAN”", url:"https://theaseanmagazine.asean.org/?p=7588"},{t:"ASEAN, Kuala Lumpur Declaration on ASEAN 2045: Our Shared Future (26 May 2025)", url:"https://asean.org/kuala-lumpur-declaration-on-asean-2045-our-shared-future"}],
    checked:"2026-11"},

   {id:"asean-and-great-powers", title:"ASEAN and the great powers", aka:["ASEAN centrality","hedging in Southeast Asia","omni-enmeshment"], tags:["ASEAN","China","United States","security"],
    summary:"How ASEAN and its members manage China, the United States and other powers: centrality, hedging, omni-enmeshment and what surveys show.",
    levels:{
     starter:[
      "Southeast Asia sits between China and the sea lanes that matter to the United States, Japan, India and Australia. Small and middle-sized states there want security and trade with all of them, without being forced to choose.",
      "ASEAN’s answer is to invite every big power into forums that ASEAN chairs: ASEAN Plus Three, the East Asia Summit, the ASEAN Regional Forum and ADMM-Plus. This is called [[asean-centrality|ASEAN centrality]].",
      "Members’ own choices differ: the Philippines and Thailand are US treaty allies; Cambodia and Laos are close to China; most others try to keep options open.",
      {key:"Most of the region hedges rather than choosing a side."}
     ],
     builder:[
      "**Concepts.** Kuik Cheng-Chwee (2008) described [[strategic-hedging|hedging]]: engagement plus insurance. Evelyn Goh (*International Security*, 2007/08) described omni-enmeshment (binding all powers into regional institutions) and complex balancing.",
      "**Evidence.** The ISEAS – Yusof Ishak Institute’s *State of Southeast Asia 2026* (2,008 respondents from government, academia, business and the media; fieldwork January–February 2026) found 52% would choose China and 48% the United States if ASEAN were forced to align; the United States had led in 2025, and China led 50.5 to 49.5 in 2024.",
      "**The South China Sea.** Claimant members (Brunei, Malaysia, the Philippines, Vietnam) and others differ; ASEAN failed to issue a joint communiqué in 2012; the 2016 arbitration (Unit 10) and the unfinished [[code-of-conduct-scs|code of conduct]] remain central."
     ],
     pro:[
      "**Debates.** Is centrality real agency or a convenient arrangement that great powers tolerate while it suits them? Does hedging still work as rivalry sharpens, or will members be pushed to align? Do minilateral groups such as the Quad or AUKUS strengthen or sideline ASEAN (Unit 12)?",
      "**Reading surveys.** The ISEAS survey asks elites, not the public; forced-choice questions can exaggerate swings; wording changes between years. Use it as one indicator alongside official statements, trade and defence data.",
      "**Other powers.** Japan’s long role as investor and aid donor (the Fukuda Doctrine, Unit 4), India’s Act East policy, Australia, South Korea and the EU all court ASEAN; ASEAN’s own Outlook on the Indo-Pacific (2019) is covered in Unit 21.",
      {tip:"When you cite the survey, give the year, sample size, who was asked and the exact question."}
     ]
    },
    related:["asean-institutional-design","asia-pacific-security-architecture","south-china-sea-disputes"],
    read:[{book:"seasurvey26", where:"The full report"}],
    sources:[{t:"Malay Mail, “Survey: China returns as South-east Asia’s preferred superpower…”, 7 April 2026", url:"https://www.malaymail.com/news/world/2026/04/07/survey-china-returns-as-south-east-asias-preferred-superpower-as-fears-grow-over-trumps-policies/215431"},{t:"ISEAS – Yusof Ishak Institute, State of Southeast Asia survey page", url:"https://www.iseas.edu.sg/centres/asean-studies-centre/state-of-southeast-asia-survey/"}],
    checked:"2026-11"},

   {id:"islam-in-southeast-asia", title:"Islam in Southeast Asia", aka:["Indonesian Islam","Malaysian Islam","Muslim politics in Southeast Asia"], tags:["religion","Islam","Indonesia","Malaysia"],
    summary:"The variety of Islam and Muslim politics in the region, from Indonesia’s Pancasila state to Malaysia, Brunei and Muslim minorities, and the main scholarly debates.",
    levels:{
     starter:[
      "Islam came to Southeast Asia mainly through trade and royal courts from about the thirteenth century. Today Indonesia has one of the world’s largest Muslim populations, Malaysia and Brunei are Muslim-majority, and there are important Muslim minorities in the Philippines, Thailand, Myanmar and Singapore.",
      "Southeast Asian Islam is very varied: village traditions, Sufi practices, modernist reformers, traditionalist scholars and newer conservative and pietist movements all coexist.",
      {key:"There is no single “Southeast Asian Islam”: name the country, the group and the period."}
     ],
     builder:[
      "**Indonesia.** The state philosophy [[pancasila|Pancasila]] (1 June 1945) starts with belief in one God; the state recognises six religions. Muhammadiyah (1912) and Nahdlatul Ulama (1926) are huge civil-society organisations. Geertz’s *The Religion of Java* (1960) proposed [[santri-and-abangan|santri, abangan]] and priyayi; Hefner’s *Civil Islam* (2000) linked Muslim civil society to democratisation.",
      "**Malaysia.** Islam is the religion of the Federation, with freedom for other religions (Art. 3); the constitution defines a Malay partly as a person who professes Islam (Art. 160); syariah courts handle Muslim family law.",
      "**Brunei.** [[malay-islamic-monarchy|Melayu Islam Beraja]] is the national philosophy.",
      "**Minorities.** The Bangsamoro Organic Law (2018, ratified 2019) created an autonomous region in the southern Philippines; an insurgency in Thailand’s Malay-Muslim south intensified from 2004."
     ],
     pro:[
      "**The “conservative turn”.** A 2013 volume edited by Martin van Bruinessen asked whether Indonesian Islam had turned conservative; the 2017 blasphemy conviction of Jakarta’s ethnic Chinese Christian governor after mass rallies is often cited. Others stress that Islamist parties have never come first in national elections and that mass organisations promote pluralism.",
      "**Critiques of Geertz.** Critics argued that priyayi is a class, not a religious variant, and that the categories reflected 1950s party alignments.",
      "**Methods.** Use survey data (with year and sample), court cases, party platforms and ethnography; avoid inferring politics from religion alone.",
      {warn:"Avoid terms like “radical” or “moderate” Islam without definition and attribution; scholars and governments use them in different ways."}
     ]
    },
    related:["buddhism-and-politics-southeast-asia","ethnic-chinese-southeast-asia","religion-in-world-politics"],
    read:[{book:"eir", where:"Chapter 9 “Religion and Culture”"}],
    sources:[{t:"Pew Research Center, short read on how religions are concentrated in a few countries, 8 December 2025", url:"https://www.pewresearch.org/short-reads/2025/12/08/many-religions-heavily-concentrated-in-one-or-two-countries/"}],
    checked:"2026-11"},

   {id:"buddhism-and-politics-southeast-asia", title:"Buddhism and politics in Southeast Asia", aka:["Theravada politics","sangha and state","Buddhist nationalism"], tags:["religion","Buddhism","Thailand","Myanmar"],
    summary:"How Theravada Buddhism, monks and monarchs have shaped politics in Thailand, Myanmar, Cambodia and Laos, including protest and nationalist movements.",
    levels:{
     starter:[
      "[[theravada-buddhism|Theravada Buddhism]] is the majority religion in Thailand, Myanmar, Laos and Cambodia. Thailand and Myanmar, together with China, are home to about half of the world’s Buddhists (Pew Research Center, 2020 data).",
      "In these countries the community of monks, the [[sangha|sangha]], has always been political in a broad sense: kings protected it, and it gave kings legitimacy.",
      "Monks can support rulers or oppose them. They led protests in Myanmar in 2007, and nationalist monks campaigned for laws on “race and religion” in 2015.",
      {key:"Buddhism, like any religion, can be mobilised in many political directions."}
     ],
     builder:[
      "**Kingship.** Stanley Tambiah’s *World Conqueror and World Renouncer* (1976) traced the Thai relationship between kings and sangha. Thailand’s official trinity is “Nation, Religion, King”; Cambodia’s constitution makes Buddhism the state religion.",
      "**Protest.** In 2007 monks led Myanmar’s “Saffron Revolution” protests against fuel price rises and military rule.",
      "**Nationalism.** In the 2010s, monk-led movements such as Ma Ba Tha campaigned for four “race and religion” laws passed in 2015; supporters said they protected Buddhism, critics said they discriminated against Muslims and restricted women’s choices.",
      "**State control.** Governments regulate the sangha through councils and laws; in one-party Laos and in Vietnam, religious organisations work within state-set limits."
     ],
     pro:[
      "**Contested cases.** The Rohingya crisis (Units 10–11) raised questions about the role of Buddhist nationalism and social media in hate speech; Myanmar’s authorities have rejected allegations of genocide, and the case at the International Court of Justice continues.",
      "**Debates.** Is Buddhist nationalism religious, ethnic or political at root? Scholars stress organisations, leaders and political openings rather than doctrine. Others study progressive Buddhist movements, environmental “ecology monks” in Thailand, and lay meditation movements.",
      {warn:"Do not describe any religion as peaceful or violent by nature; analyse who mobilises it, how and why."}
     ]
    },
    related:["islam-in-southeast-asia","religion-in-world-politics","myanmar-since-2021"],
    sources:[{t:"Pew Research Center, short read on how religions are concentrated in a few countries, 8 December 2025", url:"https://www.pewresearch.org/short-reads/2025/12/08/many-religions-heavily-concentrated-in-one-or-two-countries/"}],
    checked:"2026-11"},

   {id:"ethnic-chinese-southeast-asia", title:"Ethnic Chinese in Southeast Asia", aka:["Chinese overseas","huaqiao","Southeast Asian Chinese"], tags:["ethnicity","migration","China","Southeast Asia"],
    summary:"The varied histories of ethnic Chinese communities in the region, the words used for them, state policies, and the debate on “market-dominant minorities”.",
    levels:{
     starter:[
      "People of Chinese descent have lived in Southeast Asia for centuries, especially in port cities, with large migrations of traders and labourers in the nineteenth and early twentieth centuries.",
      "Their histories differ by country. In Thailand many assimilated; in Indonesia they faced restrictions and violence at times; in Malaysia they are a large minority active in politics and business; in Singapore they are the majority.",
      "Words matter: [[huaqiao|huaqiao]] (“overseas Chinese”) suggests people who belong to China; most scholars prefer “ethnic Chinese” or terms such as “Chinese Indonesians”.",
      {key:"Ethnic Chinese communities are diverse; their identities were shaped mainly by the countries they live in."}
     ],
     builder:[
      "**Scholars.** Wang Gungwu (*The Chinese Overseas*, 2000) argued against treating them as one diaspora loyal to China. G. William Skinner’s *Chinese Society in Thailand* (1957) described assimilation. [[peranakan|Peranakan]] (Baba-Nyonya) communities blended Chinese and Malay cultures.",
      "**Indonesia.** Restrictions on Chinese schools, press and public festivals from 1967; targeted violence in the May 1998 riots; restrictions lifted by President Abdurrahman Wahid in 2000; Lunar New Year a national holiday from 2003.",
      "**Elsewhere.** Malaysia’s [[bumiputera]] preferences shape Chinese Malaysians’ politics; Singapore classifies citizens as Chinese, Malay, Indian or Other; many Hoa left Vietnam in 1978–79; Chinese Filipinos are prominent in business and politics."
     ],
     pro:[
      "**Market-dominant minorities.** Amy Chua’s *World on Fire* (2003) argued that minorities dominant in markets face backlash when markets and democracy spread together. Critics say this lumps rich and poor together, overstates dominance and risks reinforcing stereotypes.",
      "**China’s outreach.** Beijing’s engagement with ethnic Chinese abroad raises questions of influence; some welcome cultural and business ties, others worry about political pressure (Unit 19). Avoid assuming any person’s loyalties from ancestry.",
      "**Methods.** Use census categories with care (they are political choices), and include voices from within the communities.",
      {tip:"Specify country, generation, class and language when you write about “the Chinese” in any Southeast Asian country."}
     ]
    },
    related:["islam-in-southeast-asia","southeast-asian-studies","diaspora"],
    sources:[{t:"OpenStax, World History Volume 2, section 2.2 “The Malacca Sultanate” (early Chinese trade and settlement)", url:"https://openstax.org/books/world-history-volume-2/pages/2-2-the-malacca-sultanate"}],
    checked:"2026-11"},

   {id:"southeast-asian-popular-culture", title:"Southeast Asian popular culture", aka:["regional pop culture","Thai BL","P-pop","teleserye"], tags:["culture","media","soft power","identity"],
    summary:"How films, series and music travel within and beyond the region, how they relate to politics and identity, and how to analyse them.",
    levels:{
     starter:[
      "Southeast Asian popular culture travels widely: Thai “boys’ love” series, Filipino TV dramas (*teleserye*) and pop groups, Indonesian horror films, Thai and Vietnamese cinema, and much more.",
      "The region also consumes huge amounts of Korean, Japanese, Chinese, Indian and American culture, so flows run in many directions.",
      "ASEAN’s motto, “One Vision, One Identity, One Community”, hopes for a shared regional identity; popular culture may do more for that than official campaigns.",
      {key:"Popular culture is where many people meet the region, and it can carry political meaning."}
     ],
     builder:[
      "**Examples.** *2gether* (2020) helped make Thai BL series popular across Asia; the Thai film *How to Make Millions Before Grandma Dies* (2024) became a hit across the region; P-pop groups such as SB19 have built regional fan bases.",
      "**Politics.** In 2020 young activists in Thailand, Hong Kong and Taiwan, later joined by many in Myanmar, called their online solidarity the [[milk-tea-alliance|Milk Tea Alliance]].",
      "**Policy.** Governments promote cultural industries as [[soft-power|soft power]] (Unit 8), following the model often associated with [[hallyu]]."
     ],
     pro:[
      "**Theory.** Appadurai’s [[scapes]] and ideas of [[hybridity]] (Unit 5) help explain how forms are borrowed and reworked; encoding and decoding (Hall) reminds you that audiences in different countries read the same text differently.",
      "**Debates.** Does regional pop culture build a Southeast Asian identity, or mainly national and global ones? Is BL a space for queer visibility, or a commercial genre that sidesteps rights questions? Scholars and activists disagree.",
      "**Method.** Ask who produces and funds a work, who watches it and where, what it says about gender, class, religion and nation, and how fans and platforms move it across borders.",
      {tip:"Choose works that are legally available to watch, and cite release year, platform and country."}
     ]
    },
    related:["southeast-asian-studies","islam-in-southeast-asia"],
    sources:[{t:"ASEAN Charter (2007), Article 36 (motto)", url:"https://jus.uio.no/english/services/library/treaties/14/14-03/asean_charter.html"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"southeast-asia", term:"Southeast Asia", def:"The region of eleven states between China, India and Australia, split into mainland and maritime parts; the name spread in English with the Allies’ South East Asia Command (1943).", codex:"southeast-asian-studies"},
   {id:"mandala-state", term:"Mandala (polity)", def:"O. W. Wolters’ model of early Southeast Asian polities as overlapping circles of power around a ruler, held by personal loyalty and tribute rather than fixed borders.", codex:"mandala-polity"},
   {id:"age-of-commerce", term:"Age of commerce", def:"Anthony Reid’s term for 1450–1680, when he argued the region formed one maritime trading world linked by the monsoon and great ports.", codex:"southeast-asian-studies"},
   {id:"geo-body", term:"Geo-body", def:"Thongchai Winichakul’s term (1994) for a nation’s territory as created by modern mapping, as when Siam turned shared frontiers into fixed borders.", codex:"southeast-asian-studies"},
   {id:"autonomous-history", term:"Autonomous history", def:"John Smail’s call (1961) to write Southeast Asian history from local societies outward, treating outside forces as pressures they reshaped.", codex:"southeast-asian-studies"},
   {id:"plural-society", term:"Plural society", def:"J. S. Furnivall’s term for colonial societies in which communities lived side by side, meeting mainly in the market, held together by colonial power.", codex:"southeast-asian-studies"},
   {id:"moral-economy", term:"Moral economy", def:"James C. Scott’s idea (1976) that peasants judge elites by a shared sense of a right to subsistence and may rebel when it is broken.", codex:"james-c-scott"},
   {id:"everyday-resistance", term:"Everyday resistance", def:"Quiet, low-risk forms of resistance by the weak, such as foot-dragging, gossip and non-compliance (Scott, *Weapons of the Weak*, 1985).", codex:"james-c-scott"},
   {id:"zomia", term:"Zomia", def:"Willem van Schendel’s name (2002) for the Asian uplands, used by Scott (2009) to argue that many hill peoples fled and resisted states.", codex:"james-c-scott"},
   {id:"people-power-revolution", term:"People Power Revolution", def:"The mass protests of February 1986 in Manila, joined by military defectors, that forced Ferdinand Marcos from office in the Philippines.", codex:"regimes-in-southeast-asia"},
   {id:"reformasi", term:"Reformasi", def:"“Reform”: Indonesia’s democratic transition after President Suharto resigned in May 1998, and the protest movement that demanded it.", codex:"regimes-in-southeast-asia"},
   {id:"democracy-through-strength", term:"Democracy through strength", def:"Slater and Wong’s argument (2022) that confident authoritarian incumbents sometimes democratise because they expect to keep winning.", codex:"regimes-in-southeast-asia"},
   {id:"democratic-backsliding", term:"Democratic backsliding", def:"The state-led weakening of institutions that sustain democracy, often gradually by elected leaders rather than by coups (Bermeo, 2016).", codex:"regimes-in-southeast-asia"},
   {id:"competitive-authoritarianism", term:"Competitive authoritarianism", def:"Levitsky and Way’s term for regimes with real elections in which incumbents abuse state power to tilt the playing field.", codex:"regimes-in-southeast-asia"},
   {id:"dominant-party-system", term:"Dominant-party system", def:"A system with multiparty elections in which one party wins and governs for decades, such as Singapore’s since 1959.", codex:"regimes-in-southeast-asia"},
   {id:"money-politics", term:"Money politics", def:"The use of cash, gifts and brokers to win votes and support, studied in Indonesia, the Philippines and Thailand.", codex:"regimes-in-southeast-asia"},
   {id:"network-monarchy", term:"Network monarchy", def:"Duncan McCargo’s term (2005) for informal networks linking Thailand’s palace, military and bureaucracy that shaped politics behind elected governments.", codex:"military-politics-southeast-asia"},
   {id:"lese-majeste", term:"Lèse-majesté", def:"The offence of insulting the monarch; Thailand’s Criminal Code Section 112 sets three to fifteen years in prison, and its use is debated.", codex:"military-politics-southeast-asia"},
   {id:"national-unity-government", term:"National Unity Government (NUG)", def:"The body formed in April 2021 by Myanmar’s ousted legislators and allies, which rejects the military’s rule and its 2025–26 elections.", codex:"myanmar-since-2021"},
   {id:"new-economic-policy", term:"New Economic Policy (Malaysia)", def:"Malaysia’s 1971 programme, adopted after the 1969 riots, to reduce poverty and raise the economic share of bumiputera communities.", codex:"southeast-asian-political-economy"},
   {id:"doi-moi", term:"Đổi Mới", def:"“Renovation”: the market reforms launched by Vietnam’s Communist Party in December 1986.", codex:"southeast-asian-political-economy"},
   {id:"ersatz-capitalism", term:"Ersatz capitalism", def:"Yoshihara Kunio’s term (1988) for Southeast Asian growth that relied on foreign technology and state-favoured business groups.", codex:"southeast-asian-political-economy"},
   {id:"china-plus-one", term:"China plus one", def:"A firm’s strategy of adding production sites outside China, often in Southeast Asia, while keeping its Chinese ones.", codex:"southeast-asian-political-economy"},
   {id:"asean-free-trade-area", term:"ASEAN Free Trade Area (AFTA)", def:"ASEAN’s plan, agreed in 1992, to cut tariffs on trade among its members.", codex:"asean-economic-community"},
   {id:"atiga", term:"ATIGA", def:"The ASEAN Trade in Goods Agreement (2009), which consolidated AFTA’s rules; an upgraded version was signed in October 2025.", codex:"asean-economic-community"},
   {id:"asean-economic-community", term:"ASEAN Economic Community (AEC)", def:"ASEAN’s economic pillar, formally established at the end of 2015, aiming at a single market and production base.", codex:"asean-economic-community"},
   {id:"resource-nationalism", term:"Resource nationalism", def:"Government efforts to increase national control over, and benefit from, natural resources, for example through export bans or state ownership.", codex:"indonesia-nickel-downstreaming"},
   {id:"downstreaming", term:"Downstreaming (hilirisasi)", def:"Indonesia’s policy of processing minerals at home, for example by banning nickel ore exports, to move up the value chain.", codex:"indonesia-nickel-downstreaming"},
   {id:"mutual-recognition-arrangement", term:"Mutual recognition arrangement (MRA)", def:"An agreement under which ASEAN members recognise each other’s qualifications in a profession, such as engineering or nursing.", codex:"migration-in-southeast-asia"},
   {id:"scam-compounds", term:"Scam compounds", def:"Guarded sites, many in Myanmar and Cambodia, where trafficked people are forced to run online fraud; the UN treats them as victims.", codex:"migration-in-southeast-asia"},
   {id:"zopfan", term:"ZOPFAN", def:"The 1971 Kuala Lumpur Declaration on a Zone of Peace, Freedom and Neutrality, expressing the hope of keeping great powers out of regional affairs.", codex:"asean-institutional-design"},
   {id:"treaty-of-amity-and-cooperation", term:"Treaty of Amity and Cooperation (TAC)", def:"ASEAN’s 1976 treaty setting out sovereignty, non-interference and peaceful settlement of disputes; many outside powers have acceded.", codex:"asean-institutional-design"},
   {id:"asean-charter", term:"ASEAN Charter", def:"ASEAN’s founding legal document, signed in 2007 and in force in 2008, which gave it legal personality and kept consensus decision-making.", codex:"asean-institutional-design"},
   {id:"asean-community-pillars", term:"ASEAN Community pillars", def:"ASEAN’s three areas of cooperation: the Political-Security, Economic and Socio-Cultural Communities.", codex:"asean-institutional-design"},
   {id:"asean-minus-x", term:"ASEAN minus X", def:"A formula in the ASEAN Charter (Article 21) letting willing members implement economic commitments first, where all agree to use it.", codex:"asean-institutional-design"},
   {id:"five-point-consensus", term:"Five-Point Consensus (5PC)", def:"ASEAN’s April 2021 plan for Myanmar: end violence, dialogue, a special envoy, humanitarian aid and an envoy’s visit to all parties.", codex:"myanmar-since-2021"},
   {id:"non-political-representation", term:"Non-political representation", def:"ASEAN’s practice since October 2021 of inviting only a non-political representative of Myanmar to summits instead of its military leader.", codex:"myanmar-since-2021"},
   {id:"pancasila", term:"Pancasila", def:"Indonesia’s five-principle state philosophy, first presented by Sukarno on 1 June 1945, beginning with belief in one God.", codex:"islam-in-southeast-asia"},
   {id:"santri-and-abangan", term:"Santri and abangan", def:"Clifford Geertz’s categories (1960) for pious Muslims (santri) and syncretic Javanese (abangan); widely used and widely criticised.", codex:"islam-in-southeast-asia"},
   {id:"malay-islamic-monarchy", term:"Melayu Islam Beraja (MIB)", def:"“Malay Islamic Monarchy”: Brunei’s official national philosophy.", codex:"islam-in-southeast-asia"},
   {id:"theravada-buddhism", term:"Theravada Buddhism", def:"The “teaching of the elders”, the main form of Buddhism in Myanmar, Thailand, Laos, Cambodia and Sri Lanka.", codex:"buddhism-and-politics-southeast-asia"},
   {id:"sangha", term:"Sangha", def:"The community of Buddhist monks (and in some traditions nuns), whose relations with rulers are central to Theravada politics.", codex:"buddhism-and-politics-southeast-asia"},
   {id:"huaqiao", term:"Huaqiao (华侨)", def:"“Overseas Chinese”, a term implying sojourners loyal to China; many scholars prefer “ethnic Chinese” or country-specific names.", codex:"ethnic-chinese-southeast-asia"},
   {id:"peranakan", term:"Peranakan", def:"Locally born communities in Malaysia, Singapore and Indonesia that blended Chinese and Malay cultures; also called Baba-Nyonya.", codex:"ethnic-chinese-southeast-asia"},
   {id:"bumiputera", term:"Bumiputera", def:"“Sons of the soil”: Malaysia’s category for Malays and other indigenous peoples, whose special position is in the constitution (Article 153) and who receive preferences expanded under the 1971 New Economic Policy.", codex:"ethnic-chinese-southeast-asia"},
   {id:"milk-tea-alliance", term:"Milk Tea Alliance", def:"An online solidarity network of young activists in Thailand, Hong Kong and Taiwan from 2020, later joined by many in Myanmar.", codex:"southeast-asian-popular-culture"}
  ],
  checkpoint:["e4u20-q02","e4u20-q05","e4u20-q08","e4u20-q11","e4u20-q15","e4u20-q20","e4u20-q23","e4u20-q27","e4u20-q31","e4u20-q35","e4u20-q39","e4u20-q43"],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u20-q01", lesson:"e4u20-l1", level:1, q:"How many member states does ASEAN have as of November 2026?", options:[
     {t:"Eleven", ok:true, why:"Right: Timor-Leste became the eleventh member on 26 October 2025."},
     {t:"Ten", why:"That was the number from 1999 until Timor-Leste joined in 2025."},
     {t:"Five", why:"Five states founded ASEAN in 1967."},
     {t:"Twenty-seven", why:"That is the number of ASEAN Regional Forum participants, not ASEAN members."}]},
   {id:"e4u20-q02", lesson:"e4u20-l1", level:1, q:"Which event gave the name “Southeast Asia” wide official use in English?", options:[
     {t:"The Allies’ creation of South East Asia Command in 1943", ok:true, why:"Right: a wartime command under Mountbatten spread the term."},
     {t:"The Treaty of Westphalia", why:"Westphalia (1648) concerned Europe."},
     {t:"The Bandung Conference of 1955", why:"Bandung was an Asian–African conference; the name was already in use."},
     {t:"The signing of the ASEAN Charter in 2007", why:"The name was common decades before."}]},
   {id:"e4u20-q03", lesson:"e4u20-l1", level:2, q:"Hana writes that Thailand “escaped colonialism and so developed without Western influence”. Which work most directly challenges her?", options:[
     {t:"Thongchai Winichakul’s *Siam Mapped* (1994)", ok:true, why:"Right: it shows Siam adopting Western mapping and becoming a territorial state like its colonial neighbours."},
     {t:"Reid’s *Age of Commerce*", why:"Reid writes about 1450–1680 trade, not Siam’s nineteenth-century transformation."},
     {t:"Furnivall’s *Netherlands India*", why:"Furnivall studied the Dutch colony."},
     {t:"Scott’s *Weapons of the Weak*", why:"Scott studied a Malaysian village."}]},
   {id:"e4u20-q04", lesson:"e4u20-l1", level:1, q:"What is a “plural society” in Furnivall’s sense?", options:[
     {t:"Communities living side by side, meeting mainly in the market, held together by colonial power", ok:true, why:"Right: his description of colonial Burma and the Netherlands Indies."},
     {t:"A society that celebrates diversity through multicultural policy", why:"Furnivall described separation, not celebration."},
     {t:"A society with many political parties", why:"That is political pluralism, a different idea."},
     {t:"A society with many languages but one religion", why:"His concept is about communities and the market, not language and religion counts."}]},
   {id:"e4u20-q05", lesson:"e4u20-l1", level:2, q:"Which statement best represents Lieberman’s reply to Reid?", options:[
     {t:"Mainland Southeast Asian states followed rhythms of consolidation similar to other parts of Eurasia, so the region was less unique", ok:true, why:"Right: that is the argument of *Strange Parallels* (2003, 2009)."},
     {t:"Southeast Asia never traded by sea", why:"Lieberman does not deny maritime trade."},
     {t:"The region was invented by ASEAN", why:"That is not Lieberman’s argument."},
     {t:"Reid should have studied only colonial archives", why:"Lieberman’s critique is comparative, not about archives."}]},
   {id:"e4u20-q06", lesson:"e4u20-l1", level:2, q:"Tomás finds that villagers in his archive study quietly under-reported harvests to tax collectors for decades. Which concept fits?", options:[
     {t:"Everyday resistance", ok:true, why:"Right: quiet, low-risk non-compliance is Scott’s everyday resistance."},
     {t:"Network monarchy", why:"That concerns Thai elite networks."},
     {t:"Geo-body", why:"That concerns national territory created by mapping."},
     {t:"Age of commerce", why:"That is Reid’s trading era."}]},
   {id:"e4u20-q07", lesson:"e4u20-l1", level:3, q:"A seminar paper claims: “Zomia proves that all hill peoples rejected states.” What is the best critique?", options:[
     {t:"Scott’s argument is contested: critics say the evidence is thin and some upland peoples built states, so “all” overgeneralises", ok:true, why:"Right: a careful paper presents Zomia as an argument with critics, not proof."},
     {t:"Zomia is a real country with fixed borders", why:"Zomia is a scholarly name for a zone, not a state."},
     {t:"Scott never wrote about hill peoples", why:"*The Art of Not Being Governed* (2009) is about them."},
     {t:"The claim is fine because Scott is famous", why:"Fame does not settle a debate."}]},
   {id:"e4u20-q08", lesson:"e4u20-l1", level:2, q:"What did John Smail (1961) call for?", options:[
     {t:"An autonomous history centred on local societies", ok:true, why:"Right: outside forces become pressures that local societies absorbed and reshaped."},
     {t:"A history written only from colonial archives", why:"That is what he wanted to move beyond."},
     {t:"The founding of ASEAN", why:"He wrote a historiographical essay, six years before ASEAN existed."},
     {t:"Abolishing area studies", why:"He wanted to change the field’s perspective, not abolish it."}]},
   {id:"e4u20-q09", lesson:"e4u20-l1", level:3, q:"Mei plans a paper titled “Southeast Asian culture and authoritarianism”. What is the best advice?", options:[
     {t:"Narrow it to named countries, periods and groups, use local sources and compare within the region", ok:true, why:"Right: avoid essentialising eleven diverse states."},
     {t:"Keep it broad; the region shares one culture", why:"The region is very diverse; broad cultural claims overgeneralise."},
     {t:"Use only Western sources to stay objective", why:"Local scholarship and sources are essential, and no source is automatically objective."},
     {t:"Compare the region only with France", why:"Comparison within the region is often more revealing."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u20-q10", lesson:"e4u20-l2", level:1, q:"What happened in Malaysia’s general election of May 2018?", options:[
     {t:"The ruling coalition lost power for the first time since independence", ok:true, why:"Right: Pakatan Harapan won, and Mahathir Mohamad returned as prime minister."},
     {t:"The army annulled the result", why:"There was no coup; power passed peacefully."},
     {t:"The election was postponed for two years", why:"It was held and produced a turnover."},
     {t:"The People’s Action Party won", why:"The PAP is Singapore’s ruling party."}]},
   {id:"e4u20-q11", lesson:"e4u20-l2", level:2, q:"Which definition matches “competitive authoritarianism”?", options:[
     {t:"Real elections in which incumbents abuse state power to tilt the playing field", ok:true, why:"Right: Levitsky and Way’s definition."},
     {t:"A regime with no elections at all", why:"That is closed authoritarianism."},
     {t:"A democracy with very competitive parties", why:"The concept describes unfair, not just close, competition."},
     {t:"A monarchy with an elected parliament", why:"That describes constitutional monarchy, which may or may not be democratic."}]},
   {id:"e4u20-q12", lesson:"e4u20-l2", level:2, q:"According to Bermeo (2016), how does democratic backsliding now most often happen?", options:[
     {t:"Gradually, through executive aggrandisement by elected leaders", ok:true, why:"Right: open coups have become rarer than slow erosion."},
     {t:"Mainly through foreign invasion", why:"Bermeo focuses on domestic processes."},
     {t:"Only through military coups", why:"She argued coups had become less common than gradual erosion."},
     {t:"Through referendums that abolish parliament", why:"That is not her main finding."}]},
   {id:"e4u20-q13", lesson:"e4u20-l2", level:1, q:"Which institution removed Thai prime ministers in August 2024 and August 2025?", options:[
     {t:"The Constitutional Court", ok:true, why:"Right: it removed Srettha Thavisin (2024) and Paetongtarn Shinawatra (2025)."},
     {t:"The army, in a coup", why:"The last coup was in 2014."},
     {t:"A referendum", why:"No referendum removed them."},
     {t:"ASEAN", why:"ASEAN has no such power."}]},
   {id:"e4u20-q14", lesson:"e4u20-l2", level:2, q:"In Slater and Wong’s *From Development to Democracy* (2022), which countries does the publisher’s summary group as “less successful and more reversible” democratic experiments?", options:[
     {t:"Indonesia, Thailand and Myanmar", ok:true, why:"Right, as their publisher’s summary puts it."},
     {t:"Japan, South Korea and Taiwan", why:"These are their cases of democracy through strength."},
     {t:"Singapore, Vietnam and Cambodia", why:"These are among the cases where resistance to reform proved intractable."},
     {t:"Brunei, Laos and Timor-Leste", why:"These are not the book’s grouping."}]},
   {id:"e4u20-q15", lesson:"e4u20-l2", level:3, q:"Ana writes: “Singapore is a dictatorship because one party has always won.” What is the best revision?", options:[
     {t:"Attribute classifications: name the index or scholar and year, note the government’s and supporters’ counter-arguments, and define the term", ok:true, why:"Right: dominant-party rule alone does not settle the label; use transparent, attributed classification."},
     {t:"Replace “dictatorship” with “perfect democracy”", why:"That swaps one unsupported verdict for another."},
     {t:"Remove Singapore from the paper", why:"Avoiding the case does not fix the method."},
     {t:"Add “everyone agrees”", why:"Scholars disagree; appealing to consensus that does not exist is misleading."}]},
   {id:"e4u20-q16", lesson:"e4u20-l2", level:1, q:"What is the National Unity Government (NUG)?", options:[
     {t:"A body formed in April 2021 by Myanmar’s ousted legislators and allies, rejecting military rule", ok:true, why:"Right: it rejects the military’s rule and the 2025–26 elections."},
     {t:"Myanmar’s military-led government after 2021", why:"That is the body the NUG opposes."},
     {t:"An ASEAN committee on Myanmar", why:"The NUG is a Myanmar opposition body."},
     {t:"Thailand’s coalition government of 2026", why:"Thailand’s 2026 government is led by Anutin Charnvirakul; the NUG is a Myanmar body."}]},
   {id:"e4u20-q17", lesson:"e4u20-l2", level:2, q:"Which description of Myanmar in 2026 is neutral and accurate?", options:[
     {t:"In April 2026 a parliament formed after the military-run 2025–26 elections elected Min Aung Hlaing president; the NUG rejects the elections", ok:true, why:"Right: dated, factual and attributed."},
     {t:"Myanmar’s legitimate democratic government took office in 2026", why:"This takes a side on a contested question."},
     {t:"Myanmar’s regime staged fake elections", why:"Loaded and unattributed; quote who says so."},
     {t:"Myanmar returned to NLD rule in 2026", why:"The NLD was dissolved in 2023 and did not take part."}]},
   {id:"e4u20-q18", lesson:"e4u20-l2", level:3, q:"Dmitri compares Vietnam and Singapore and says both are “the same kind of regime because one party always governs”. What does he miss?", options:[
     {t:"Vietnam is a constitutionally one-party state; Singapore holds multiparty elections that opposition parties contest and sometimes win seats in", ok:true, why:"Right: the rules differ even if the outcome looks similar."},
     {t:"Nothing: they are identical systems", why:"Their constitutions and electoral rules differ fundamentally."},
     {t:"Singapore is a monarchy", why:"Singapore is a parliamentary republic."},
     {t:"Vietnam has no National Assembly", why:"It has one, with candidates vetted by party-led bodies."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u20-q19", lesson:"e4u20-l3", level:1, q:"What is “China plus one”?", options:[
     {t:"Firms adding production sites outside China, often in Southeast Asia, while keeping Chinese ones", ok:true, why:"Right: a strategy that spread after the US–China trade tensions of 2018."},
     {t:"China’s plan to join ASEAN as a twelfth member", why:"No such plan exists."},
     {t:"A Chinese tariff of one per cent", why:"It is a firms’ location strategy, not a tariff."},
     {t:"The ASEAN Plus Three process", why:"That is a diplomatic forum."}]},
   {id:"e4u20-q20", lesson:"e4u20-l3", level:2, q:"Why is the ASEAN Economic Community described as “shallow” compared with the EU?", options:[
     {t:"It is a free trade area without a customs union, common currency, free movement of workers or a court", ok:true, why:"Right: members keep their own external tariffs and sovereignty."},
     {t:"It has no members", why:"It has eleven."},
     {t:"Its tariffs among members are higher than the EU’s external tariff", why:"Intra-ASEAN tariffs have been cut sharply."},
     {t:"It bans foreign investment", why:"It was designed to attract foreign investment."}]},
   {id:"e4u20-q21", lesson:"e4u20-l3", level:1, q:"When did Indonesia reinstate its ban on nickel ore exports?", options:[
     {t:"1 January 2020", ok:true, why:"Right: announced in August 2019, after a 2014 ban was relaxed in 2017."},
     {t:"1967", why:"Far too early: ASEAN’s founding year."},
     {t:"2009", why:"2009 was the mining law that required domestic processing."},
     {t:"2025", why:"The ban was already in force well before."}]},
   {id:"e4u20-q22", lesson:"e4u20-l3", level:2, q:"Which argument comes from environmental and labour groups in the nickel debate?", options:[
     {t:"Coal-powered smelters, deforestation, pollution and unsafe work carry heavy local costs", ok:true, why:"Right: these groups stress local environmental and labour costs."},
     {t:"The ban breaks WTO rules", why:"That is the EU’s argument."},
     {t:"Downstreaming creates jobs and export revenue", why:"That is the Indonesian government’s main argument."},
     {t:"Nickel is not used in batteries", why:"False: many battery chemistries use nickel."}]},
   {id:"e4u20-q23", lesson:"e4u20-l3", level:3, q:"Oluwaseun argues that Indonesia’s nickel policy “obviously succeeded because output rose”. What should a careful reply add?", options:[
     {t:"Ask who captured the gains and at what environmental and social cost, and note dependence on prices, technology and a few investors", ok:true, why:"Right: output is one measure among several."},
     {t:"Agree; output is the only relevant measure", why:"Distribution and costs matter for judging a policy."},
     {t:"Say the policy failed because the WTO panel ruled against it", why:"A legal ruling is not the same as an economic outcome."},
     {t:"Say Indonesia produces no nickel", why:"USGS estimates about two-thirds of world mine output in 2025."}]},
   {id:"e4u20-q24", lesson:"e4u20-l3", level:1, q:"What did Malaysia’s New Economic Policy (1971) aim to do?", options:[
     {t:"Reduce poverty and raise the economic share of bumiputera communities", ok:true, why:"Right: adopted after the 1969 riots."},
     {t:"Introduce central planning on the Soviet model", why:"Malaysia kept a market economy."},
     {t:"Ban foreign investment", why:"Malaysia courted foreign investment."},
     {t:"Create a customs union with Singapore", why:"The NEP was a domestic programme; Singapore had left Malaysia in 1965."}]},
   {id:"e4u20-q25", lesson:"e4u20-l3", level:2, q:"Which ASEAN rules most directly help a nurse from one member state work in another?", options:[
     {t:"Mutual recognition arrangements", ok:true, why:"Right: there is an MRA for nursing services (2006)."},
     {t:"The Treaty of Amity and Cooperation", why:"That treaty concerns peaceful relations between states."},
     {t:"The Five-Point Consensus", why:"That is about Myanmar."},
     {t:"ZOPFAN", why:"That concerns neutrality from great powers."}]},
   {id:"e4u20-q26", lesson:"e4u20-l3", level:2, q:"According to the UN human rights office (2023), how should people forced to work in online scam compounds be seen?", options:[
     {t:"As victims of trafficking, not criminals", ok:true, why:"Right: “They are victims. They are not criminals,” said Volker Türk."},
     {t:"As illegal migrants to be deported at once", why:"The UN stressed protection, not punishment."},
     {t:"As voluntary entrepreneurs", why:"Many are held and forced to work."},
     {t:"As a problem only in Europe", why:"The report focused on Southeast Asia."}]},
   {id:"e4u20-q27", lesson:"e4u20-l3", level:3, q:"Priya reads that FDI into ASEAN rose 8% in 2024 while global FDI fell. Which interpretation is most careful?", options:[
     {t:"It fits “China plus one” and the region’s attraction, but she should check the source, year and whether new factories mainly assemble imported parts", ok:true, why:"Right: one figure needs context and caution."},
     {t:"It proves ASEAN has overtaken China as a manufacturing power", why:"One year of FDI growth does not show that."},
     {t:"It shows that intra-ASEAN trade is now 90% of trade", why:"FDI and trade shares are different measures; intra-ASEAN trade was about 21.5%."},
     {t:"It means global value chains no longer matter", why:"It suggests the opposite."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u20-q28", lesson:"e4u20-l4", level:1, q:"What is the basic decision rule in the ASEAN Charter?", options:[
     {t:"Consultation and consensus (Article 20)", ok:true, why:"Right: if consensus fails, the Summit decides how to decide."},
     {t:"Qualified majority voting", why:"That is an EU rule."},
     {t:"Decision by the Secretary-General", why:"The Secretary-General has no such power."},
     {t:"Votes weighted by GDP", why:"ASEAN does not weight votes."}]},
   {id:"e4u20-q29", lesson:"e4u20-l4", level:1, q:"How is the ASEAN Secretariat’s operational budget funded?", options:[
     {t:"Equal annual contributions from all members", ok:true, why:"Right: Article 30 of the Charter."},
     {t:"Contributions in proportion to GDP", why:"That is how some other organisations work, not ASEAN."},
     {t:"A common external tariff", why:"ASEAN has no common external tariff."},
     {t:"Grants from China and the United States only", why:"Members fund the operational budget."}]},
   {id:"e4u20-q30", lesson:"e4u20-l4", level:2, q:"Which list gives the five points of the 2021 Five-Point Consensus?", options:[
     {t:"End violence; constructive dialogue; a special envoy; humanitarian aid; an envoy visit to meet all parties", ok:true, why:"Right: agreed in Jakarta on 24 April 2021."},
     {t:"Sanctions; expulsion; arms embargo; tribunal; new elections", why:"ASEAN agreed none of these."},
     {t:"Recognition of the military; trade deal; tourism; visas; aid", why:"Not the 5PC."},
     {t:"Ceasefire; referendum; federal constitution; amnesty; elections", why:"Not the 5PC."}]},
   {id:"e4u20-q31", lesson:"e4u20-l4", level:2, q:"What was unusual about ASEAN’s response to Myanmar from October 2021?", options:[
     {t:"It invited only a non-political representative to summits, excluding the military leader", ok:true, why:"Right: a rare departure from strict non-interference."},
     {t:"It expelled Myanmar", why:"ASEAN has no expulsion rule and did not expel Myanmar."},
     {t:"It sent peacekeepers", why:"ASEAN has no peacekeeping force."},
     {t:"It moved its Secretariat to Yangon", why:"The Secretariat is in Jakarta."}]},
   {id:"e4u20-q32", lesson:"e4u20-l4", level:1, q:"When and where was Timor-Leste admitted as ASEAN’s eleventh member?", options:[
     {t:"26 October 2025, at the 47th ASEAN Summit in Kuala Lumpur", ok:true, why:"Right: by a declaration signed at the opening ceremony."},
     {t:"2002, on independence", why:"It applied in 2011 and joined in 2025."},
     {t:"2011, when it applied", why:"Applying is not joining."},
     {t:"2022, when it got observer status", why:"Observer status came first; membership in 2025."}]},
   {id:"e4u20-q33", lesson:"e4u20-l4", level:2, q:"What does Evelyn Goh mean by “omni-enmeshment”?", options:[
     {t:"Drawing all great powers into regional institutions so each has a stake in the order", ok:true, why:"Right: combined, in her account, with complex balancing."},
     {t:"Joining one great power’s alliance against the others", why:"That is closer to balancing or bandwagoning."},
     {t:"Closing the region to all outside powers", why:"That is closer to ZOPFAN’s ideal."},
     {t:"Merging ASEAN into the EU", why:"Goh describes a regional strategy towards great powers, not institutional merger."}]},
   {id:"e4u20-q34", lesson:"e4u20-l4", level:3, q:"Sione cites the 2026 ISEAS survey to claim “Southeast Asians prefer China”. What is wrong?", options:[
     {t:"The survey asked about 2,000 elites a forced-choice question, not the public, and the result (52% to 48%) was close and has changed from year to year", ok:true, why:"Right: state who was asked, what was asked and the margin."},
     {t:"Nothing: the survey covers all citizens", why:"It surveys experts, officials and business people."},
     {t:"The survey found 90% prefer China", why:"The figure was 52% if forced to align."},
     {t:"ISEAS surveys only Europeans", why:"Respondents are from ASEAN countries."}]},
   {id:"e4u20-q35", lesson:"e4u20-l4", level:3, q:"Lucía argues that “the Myanmar crisis shows ASEAN never changes its norms.” Which evidence complicates her claim?", options:[
     {t:"ASEAN’s exclusion of Myanmar’s military leader from summits since 2021", ok:true, why:"Right: some scholars see this as a quiet shift in how non-interference is applied."},
     {t:"ASEAN’s founding in 1967", why:"That predates the crisis and shows nothing about change."},
     {t:"ASEAN’s use of English as a working language", why:"Unrelated to norms on intervention."},
     {t:"The location of the Secretariat in Jakarta", why:"Where the Secretariat sits says nothing about how non-interference is applied."}]},
   {id:"e4u20-q36", lesson:"e4u20-l4", level:2, q:"What happened at the ASEAN foreign ministers’ meeting in Phnom Penh in 2012?", options:[
     {t:"For the first time, they failed to issue a joint communiqué, after disagreeing over the South China Sea", ok:true, why:"Right: a classic example of the limits of consensus."},
     {t:"They signed the ASEAN Charter", why:"The Charter was signed in 2007."},
     {t:"They admitted Timor-Leste", why:"That happened in 2025."},
     {t:"They agreed the Five-Point Consensus", why:"That was in Jakarta in 2021."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u20-q37", lesson:"e4u20-l5", level:1, q:"Which country’s founding philosophy is Pancasila?", options:[
     {t:"Indonesia", ok:true, why:"Right: first presented by Sukarno on 1 June 1945."},
     {t:"Malaysia", why:"Malaysia’s constitution makes Islam the religion of the Federation; Pancasila is Indonesian."},
     {t:"Thailand", why:"Thailand’s official trinity is “Nation, Religion, King”."},
     {t:"Brunei", why:"Brunei’s philosophy is Melayu Islam Beraja."}]},
   {id:"e4u20-q38", lesson:"e4u20-l5", level:2, q:"What did Robert Hefner argue in *Civil Islam* (2000)?", options:[
     {t:"Muslim civil society helped bring democracy to Indonesia", ok:true, why:"Right: he stressed pluralist Muslim organisations’ role in the 1998 transition."},
     {t:"Islam is incompatible with democracy", why:"Hefner argued the opposite for Indonesia."},
     {t:"Indonesia should become an Islamic state", why:"He made no such prescription."},
     {t:"Javanese should be divided into santri and abangan", why:"That classification comes from Geertz (1960)."}]},
   {id:"e4u20-q39", lesson:"e4u20-l5", level:2, q:"Why do many scholars avoid the term “huaqiao” for ethnic Chinese in Southeast Asia?", options:[
     {t:"It implies sojourners loyal to China, while most communities’ identities were shaped by the countries they live in", ok:true, why:"Right: Wang Gungwu and others stress diversity and local belonging."},
     {t:"It is a Malay word for traders", why:"It is a Chinese term (华侨)."},
     {t:"It refers only to Singapore’s citizens", why:"It is a general term for overseas Chinese."},
     {t:"It is an official ASEAN legal category", why:"ASEAN has no such category."}]},
   {id:"e4u20-q40", lesson:"e4u20-l5", level:1, q:"Which event in Indonesia came first?", options:[
     {t:"Restrictions on Chinese schools, press and public festivals (from 1967)", ok:true, why:"Right: under Suharto; lifted in 2000."},
     {t:"Lunar New Year becomes a national holiday", why:"That came from 2003."},
     {t:"President Abdurrahman Wahid lifts the restrictions", why:"That was in 2000."},
     {t:"The May 1998 riots", why:"That was in 1998, after the 1967 restrictions."}]},
   {id:"e4u20-q41", lesson:"e4u20-l5", level:2, q:"In 2007, who led Myanmar’s “Saffron Revolution” protests?", options:[
     {t:"Buddhist monks", ok:true, why:"Right: protests against fuel price rises and military rule."},
     {t:"ASEAN peacekeepers", why:"ASEAN has no peacekeepers."},
     {t:"The National Unity Government", why:"The NUG was formed in 2021."},
     {t:"Thailand’s army", why:"The protests were in Myanmar and were led by Myanmar’s monks."}]},
   {id:"e4u20-q42", lesson:"e4u20-l5", level:3, q:"Amara writes that “Buddhist countries are peaceful by nature, so nationalist violence there must come from outside.” What is the best critique?", options:[
     {t:"No religion is peaceful or violent by nature; analyse organisations, leaders and political conditions with evidence", ok:true, why:"Right: the lesson warns against essentialising religion."},
     {t:"She should say Buddhist countries are violent by nature", why:"That is the same error reversed."},
     {t:"Religion never matters in politics", why:"Religion can matter a great deal; the point is how and through whom."},
     {t:"She should cite only government statements", why:"One-sided sourcing does not fix the essentialism."}]},
   {id:"e4u20-q43", lesson:"e4u20-l5", level:2, q:"What is the main criticism of Amy Chua’s “market-dominant minorities”?", options:[
     {t:"It lumps rich and poor members together, overstates dominance and can reinforce stereotypes", ok:true, why:"Right: critics stress class diversity within ethnic Chinese communities."},
     {t:"It ignores markets entirely", why:"Markets are central to her argument."},
     {t:"It was written before 1900", why:"*World on Fire* was published in 2003."},
     {t:"It applies only to Europe", why:"She discusses Southeast Asia among other regions."}]},
   {id:"e4u20-q44", lesson:"e4u20-l5", level:3, q:"Kenji compares Vietnam and the Philippines, which differ in regime, religion and colonial past, because both send many workers abroad. Which design is this?", options:[
     {t:"A most different design", ok:true, why:"Right: unlike cases with a shared outcome."},
     {t:"A most similar design", why:"That compares alike cases with different outcomes."},
     {t:"A single case study", why:"He compares two cases."},
     {t:"A randomised controlled trial", why:"He cannot randomly assign countries."}]},
   {id:"e4u20-q45", lesson:"e4u20-l5", level:2, q:"What was the Milk Tea Alliance?", options:[
     {t:"An online solidarity network of young activists in Thailand, Hong Kong and Taiwan from 2020, later joined by many in Myanmar", ok:true, why:"Right: named after the milk tea drunk in all three places."},
     {t:"An ASEAN trade agreement on dairy products", why:"It is not a trade agreement."},
     {t:"A Thai government soft-power campaign", why:"It was a grassroots online movement."},
     {t:"A Korean pop group", why:"It was a political solidarity network, not a music act."}]}
  ]
});
