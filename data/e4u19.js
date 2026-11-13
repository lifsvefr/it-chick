/* International Studies · Unit 19 · East Asia: China, the Koreas and the regional order */
ICA.addUnit({
  id:"e4u19", track:"e4", n:19, title:"East Asia: China, the Koreas and the regional order", icon:"🏯",
  blurb:"East Asia at seminar level: how China’s party-state works and how scholars study it; China’s foreign policy from “keeping a low profile” to major-country diplomacy and the debate about its rise; the two Koreas, from division and democratisation to nuclear weapons and the “two states” turn; Taiwan’s history, democracy and economy, with the exact wording of the key documents on its status; Mongolia in brief; and the regional order, its institutions and its politics of memory, all told neutrally and dated as of November 2026.",
  goals:[
    "Describe how the Chinese Communist Party, the state and the army fit together, and compare the main scholarly explanations of the party-state",
    "Trace China’s foreign policy from Mao to Xi, and weigh the debate about China’s rise, including power transition, “Thucydides’s Trap” and Kang’s hierarchy argument",
    "Explain South Korea’s development and democratisation, North Korea’s political system and nuclear programme, and the state of inter-Korean relations as of November 2026",
    "Quote the key documents on Taiwan accurately, distinguish the PRC’s one-China principle from other governments’ one China policies, and attribute every position",
    "Compare East Asian regionalism with Europe’s, and analyse history and memory politics in the region without taking sides",
    "Choose sources and methods for an East Asia topic and use the unit’s vocabulary in a seminar"
  ],
  read:[
    {book:"csy22", where:"“Focus: The Twentieth Party Congress” and Chapter 5 “Taiwan: Trouble in the First Island Chain”", note:"A free, open-access yearbook of short essays by China specialists. Read it alongside Lessons 1 and 4; like every source, it has its own vantage point."},
    {book:"owh2", where:"Chapter 14 “Cold War Conflicts”, sections 14.2 “The Spread of Communism” and 14.4 “Global Tensions and Decolonization”", note:"Textbook background on the Chinese revolution, the Korean War and the Sino-Soviet split."},
    {book:"sipri26", where:"Chapter 8 “World nuclear forces” (free download)", note:"The standard estimates of China’s and North Korea’s nuclear forces, with their methods."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u19-l1", title:"China’s party-state and how to study it", minutes:65,
   hook:{q:"How many members did the Chinese Communist Party report at the end of 2025?", options:["About 10 million","About 50 million","About 101 million","About 300 million"], answer:2, reveal:"**About 101 million** (101.29 million, according to the Party’s Organization Department in June 2026), organised in more than 5.4 million grassroots branches. That is more people than live in most countries, yet still only about one Chinese person in fourteen. This lesson shows how such a party leads the state, how power has been centralised under Xi Jinping, and how scholars study a system that is hard to see into."},
   goals:[
     "Explain how the Party, the state and the army fit together, using the vocabulary of the field",
     "Describe, with dates, how power has been centralised in the Xi era",
     "Compare fragmented authoritarianism, authoritarian resilience, policy experimentation and the personalist turn",
     "Read official Chinese political formulations (tifa) as evidence, with their limits",
     "Choose sources and methods for a China topic and weigh their limits and ethics"
   ],
   learn:[
    {h:"One party, two hierarchies", body:[
      "Picture an organisation in which a second chain of command runs alongside the official one, staffed by the same people, and has the final word. That is the basic shape of China’s political system.",
      "Scholars call it a [[party-state]]: the [[chinese-communist-party|Chinese Communist Party]] (CCP; it calls itself the Communist Party of China, CPC) leads the state, the army and society. The Party’s formal summit is the **Party Congress**, held every five years (the 20th met in October 2022; the next is due in 2027). It elects a Central Committee of about 200 full members, which elects a Politburo of about two dozen, whose [[politburo-standing-committee|Standing Committee]] of seven is the core of power. The General Secretary heads it.",
      "The state has its own ladder. The [[national-peoples-congress|National People’s Congress]] (NPC), with about 3,000 deputies, is constitutionally the highest organ of state power; it passes laws and plans and meets in full each March. The State Council, China’s cabinet, is led by the Premier (Li Qiang since March 2023). The army answers to the Party through the [[central-military-commission|Central Military Commission]].",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e4u19l1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-gold" x="10" y="8" width="320" height="46" rx="8" stroke-width="2"/><text x="170" y="27" text-anchor="middle">Xi Jinping (since 2012–13)</text><text class="s" x="170" y="45" text-anchor="middle">General Secretary · President · CMC Chair</text><text x="85" y="76" text-anchor="middle">PARTY</text><text x="255" y="76" text-anchor="middle">STATE</text><rect class="d-rose" x="10" y="88" width="150" height="44" rx="6" stroke-width="2"/><text x="85" y="106" text-anchor="middle">Standing Committee</text><text class="s" x="85" y="124" text-anchor="middle">7 members</text><rect class="d-rose" x="10" y="142" width="150" height="44" rx="6" stroke-width="2"/><text x="85" y="160" text-anchor="middle">Politburo</text><text class="s" x="85" y="178" text-anchor="middle">about two dozen</text><rect class="d-rose" x="10" y="196" width="150" height="44" rx="6" stroke-width="2"/><text x="85" y="214" text-anchor="middle">Central Committee</text><text class="s" x="85" y="232" text-anchor="middle">some 200 members</text><rect class="d-rose" x="10" y="250" width="150" height="44" rx="6" stroke-width="2"/><text x="85" y="268" text-anchor="middle">Party Congress</text><text class="s" x="85" y="286" text-anchor="middle">every five years</text><rect class="d-sage" x="180" y="88" width="150" height="44" rx="6" stroke-width="2"/><text x="255" y="106" text-anchor="middle">State Council</text><text class="s" x="255" y="124" text-anchor="middle">Premier, ministers</text><rect class="d-sage" x="180" y="142" width="150" height="44" rx="6" stroke-width="2"/><text x="255" y="160" text-anchor="middle">NPC</text><text class="s" x="255" y="178" text-anchor="middle">about 3,000 deputies</text><rect class="d-sage" x="180" y="196" width="150" height="44" rx="6" stroke-width="2"/><text x="255" y="214" text-anchor="middle">Local governments</text><text class="s" x="255" y="232" text-anchor="middle">provinces to counties</text><rect class="d-sage" x="180" y="250" width="150" height="44" rx="6" stroke-width="2"/><text x="255" y="268" text-anchor="middle">Courts and others</text><text class="s" x="255" y="286" text-anchor="middle">firms, media, schools</text><path class="d-ink" d="M160 110 L178 110" stroke-width="2" marker-end="url(#e4u19l1a)"/><path class="d-ink" d="M160 164 L178 164" stroke-width="2" marker-end="url(#e4u19l1a)"/><path class="d-ink" d="M160 218 L178 218" stroke-width="2" marker-end="url(#e4u19l1a)"/><path class="d-ink" d="M160 272 L178 272" stroke-width="2" marker-end="url(#e4u19l1a)"/><rect class="d-lup" x="10" y="304" width="320" height="48" rx="8" stroke-width="2"/><text x="170" y="324" text-anchor="middle">Central Military Commission</text><text class="s" x="170" y="342" text-anchor="middle">commands the People’s Liberation Army</text></svg>', alt:"Diagram of China’s party-state. At the top, Xi Jinping holds three posts: General Secretary, President and Chair of the Central Military Commission. A Party column lists, from top to bottom, the Politburo Standing Committee of seven, the Politburo of about two dozen, the Central Committee of some 200 members and the Party Congress held every five years. A State column lists the State Council led by the Premier, the National People’s Congress of about 3,000 deputies, local governments and courts and other bodies. Arrows run from each Party level to the State column. At the bottom, the Central Military Commission commands the People’s Liberation Army.", cap:"Parallel ladders: the Party leads, the state administers, and one person can sit on both. Formally the NPC is the highest state organ; in practice it acts within Party guidance."},
      "Two principles hold this together. [[democratic-centralism|Democratic centralism]] (民主集中制, *mínzhǔ jízhōngzhì*) allows discussion before a decision and demands obedience after it. The [[nomenklatura]] system (党管干部, *dǎng guǎn gànbù*, “the Party manages cadres”) lets Party organisation departments appoint and promote officials, managers of state firms and university leaders. [[united-front|United front]] work manages relations with groups outside the Party, from business people to religious bodies and overseas Chinese.",
      "A line added to the Party constitution in 2017 sums up the claim: the Party leads “everything”. In March 2018 the state constitution was amended to call Party leadership “the defining feature of socialism with Chinese characteristics”. The primer called such systems [[authoritarianism|authoritarian]]; this lesson asks how this one actually works."
    ]},
    {h:"The Xi era: centralisation", body:[
      "Xi Jinping became General Secretary in November 2012 and President in March 2013. Several steps since then are not in dispute:",
      {list:[
        "**Discipline.** A sweeping anti-corruption campaign run by the Party’s Central Commission for Discipline Inspection, which has also removed rivals.",
        "**Status.** In 2016 the Party called Xi its [[core-leader|“core”]] (核心, *héxīn*). In 2017 [[xi-jinping-thought|Xi Jinping Thought]] was written into the Party constitution.",
        "**Term limits.** In March 2018 the NPC removed the two-term limit on the presidency. In October 2022 Xi began a third term as General Secretary.",
        "**Party over state.** Reforms in 2018 and 2023 moved policy work into Party commissions. A 2021 resolution on Party history, only the third such resolution, placed Xi alongside Mao and Deng.",
        "**The army.** Two former defence ministers were expelled from the Party in 2024; Central Military Commission vice-chair He Weidong was expelled in October 2025; and in January 2026 the defence ministry announced investigations into the senior vice-chair, Zhang Youxia, and the chief of the Joint Staff, Liu Zhenli."
      ]},
      "What the facts mean is debated. Susan Shirk (“The Return to Personalistic Rule”, *Journal of Democracy*, 2018; *Overreach*, 2022) argues that Xi dismantled the collective leadership of the reform era, and that personal rule makes policy errors more likely. Joseph Fewsmith (*Rethinking Chinese Politics*, 2021) argues that elite politics was never as institutionalised as observers believed, so Xi exploited Leninist rules rather than breaking them. Others stress that the Party as an organisation, not one man, remains the unit to study."
    ]},
    {h:"How scholars explain the party-state", body:[
      "Four influential ideas, each with critics:",
      {table:[
        ["Idea","Key work","Claim"],
        ["[[fragmented-authoritarianism|Fragmented authoritarianism]]","Kenneth Lieberthal and Michel Oksenberg, *Policy Making in China* (1988); Andrew Mertha, “2.0” (2009)","Authority is split among ministries and regions, so policy comes from bargaining; later work adds media, NGOs and experts as policy entrepreneurs"],
        ["[[authoritarian-resilience|Authoritarian resilience]]","Andrew Nathan, *Journal of Democracy* (2003)","The Party survived by institutionalising: rules for succession, merit-based promotion, specialised bodies and channels for complaints"],
        ["[[policy-experimentation|Experimentation under hierarchy]]","Sebastian Heilmann (2008)","Local pilots, such as the Shenzhen special economic zone from 1980, are tested and then spread from the centre"],
        ["Decline or adaptation","Minxin Pei, *China’s Trapped Transition* (2006); David Shambaugh, *China’s Communist Party: Atrophy and Adaptation* (2008)","Pei: partial reform breeds corruption and decay. Shambaugh: the Party adapts, though in 2015 he predicted its “endgame”"]
      ]},
      "A second debate concerns **how officials get ahead**. Hongbin Li and Li-An Zhou (*Journal of Public Economics*, 2005) found that provincial leaders whose provinces grew faster were more likely to be promoted: a “promotion tournament” that helped explain growth. Victor Shih, Christopher Adolph and Mingxing Liu (*American Political Science Review*, 2012) found that, for Central Committee members, personal and factional ties to top leaders mattered more than growth. Both can be partly true at different levels, which is a good reminder to state your scope conditions. Others, such as Jessica Teets (2013), describe a “consultative authoritarianism” in which the state lets some civil society groups advise on policy while controlling them closely.",
      "None of these is simply right. Resilience arguments explained the 2000s well but expected institutionalisation to continue; the Xi era surprised many. Critics also warn against **teleology**, the habit of judging China by whether it is “moving towards” democracy. Comparative scholars place China among other single-party regimes."
    ]},
    {h:"Reading the language of power", body:[
      "The Party communicates through standard phrases called [[tifa]] (提法, *tífǎ*, “formulations”). A change of wording in a Party Congress report or a plenum decision is a signal to officials, so scholars track wording closely.",
      {ex:"In 1992 the Party called for the market to play a “basic role” (基础性作用) in allocating resources. In 2013 the Third Plenum upgraded it to a “decisive role” (决定性作用). Analysts read the change as a signal of market reform. Yet in the following years the state sector was strengthened too. Lesson: a formulation shows what the leadership wants to be heard saying, not what will happen.", label:"Worked example: one word, two readings"},
      "Since 2022 the key phrase for development has been “Chinese-style modernisation” (中国式现代化). The China Media Project publishes a free dictionary of Party terms, and the counting of words across reports is a form of [[text-as-data]] (Unit 3 of this track: {{discourse-analysis}})."
    ]},
    {h:"Sources, methods and ethics", body:[
      "Students of China combine several kinds of evidence, each with known weaknesses:",
      {list:[
        "**Official texts**: Party Congress reports, *Qiushi* (the Party’s theory journal), *People’s Daily*, government white papers, laws and the five-year plans (the 15th, for 2026–30, was adopted by the NPC in March 2026). Read them as statements of position.",
        "**Statistics.** Reliability is debated. A 2019 Brookings paper by Chen, Chen, Hsieh and Song estimated that official growth figures overstated growth in 2008–16; Luis Martinez (2022) used night-time lights to show that autocracies in general tend to inflate growth figures.",
        "**Online data.** Gary King, Jennifer Pan and Margaret Roberts (*American Political Science Review*, 2013) found that censors deleted posts with potential for collective action more than criticism of the state.",
        "**Fieldwork, interviews and archives.** Access has narrowed since the 2010s, and further during the pandemic. In a survey of more than 500 China scholars, Sheena Greitens and Rory Truex (*The China Quarterly*, 2020) found about 9 per cent had been “invited to tea” (questioned) by the authorities and 26 per cent of archive users had been denied access; about 70 per cent saw self-censorship as a problem in the field."
      ]},
      {warn:"Ethics come first. People you interview may face risks you do not. Unit 3’s rules apply in full ([[do-no-harm]], {{fieldwork-ethics}}, {{elite-interviews}}): consent, secure notes, anonymity, and no pressure on anyone to say more than is safe."},
      {key:"Avoid “China thinks”. Chinese officials, scholars and citizens disagree with each other; say whose view you are reporting, and from which source."},
      {terms:["party-state","chinese-communist-party","politburo-standing-committee","national-peoples-congress","central-military-commission","democratic-centralism","nomenklatura","united-front","core-leader","xi-jinping-thought","fragmented-authoritarianism","authoritarian-resilience","policy-experimentation","tifa"]}
    ]}
   ],
   try:[
    {id:"e4u19-l1-x1", type:"sort", q:"Is each body part of the **Party** hierarchy or the **state** hierarchy?", buckets:["Party","State"], items:[
      {t:"The Politburo Standing Committee", b:0, why:"The Party’s inner core of seven, headed by the General Secretary."},
      {t:"The National People’s Congress", b:1, why:"The state legislature; formally the highest organ of state power."},
      {t:"The State Council", b:1, why:"China’s cabinet, led by the Premier."},
      {t:"The Central Committee", b:0, why:"Elected by the Party Congress; it elects the Politburo."},
      {t:"The Central Commission for Discipline Inspection", b:0, why:"The Party’s own disciplinary body, which runs the anti-corruption campaign."},
      {t:"Provincial governments", b:1, why:"State administration, though each is led in practice by a provincial Party secretary."}
    ]},
    {id:"e4u19-l1-x2", type:"mcq", q:"Kenji writes: “The National People’s Congress is the highest organ of state power, so it is where China’s key decisions are made.” What is the best correction?", options:[
      {t:"Formally the NPC is the highest state organ, but key decisions are made in Party bodies and the NPC acts within Party guidance", ok:true, why:"Right. The constitution’s formal hierarchy and the Party’s leadership are both true; a precise writer distinguishes them."},
      {t:"The NPC has no legal role at all", why:"Too strong: it passes laws and plans, such as the 15th Five-Year Plan in March 2026."},
      {t:"Key decisions are made by the Premier alone", why:"The Premier leads the State Council, but the Party’s Standing Committee is the core of power."},
      {t:"The sentence is correct as it stands", why:"It confuses the formal constitutional position with where power lies in practice."}
    ]},
    {id:"e4u19-l1-x3", type:"order", q:"Put these steps in the centralisation of the Xi era in chronological order.", items:[
      {t:"Xi Jinping becomes General Secretary.", why:"November 2012."},
      {t:"The Party calls Xi its “core”.", why:"2016."},
      {t:"Xi Jinping Thought is written into the Party constitution.", why:"October 2017."},
      {t:"The NPC removes the presidential two-term limit.", why:"March 2018."},
      {t:"Xi begins a third term as General Secretary.", why:"October 2022."},
      {t:"The defence ministry announces an investigation into Zhang Youxia.", why:"January 2026."}
    ]},
    {id:"e4u19-l1-x4", type:"match", q:"Match each argument to its author.", pairs:[
      ["Policy emerges from bargaining among ministries and regions","Lieberthal & Oksenberg (1988)","Fragmented authoritarianism."],
      ["The Party survived by institutionalising succession, promotion and feedback","Andrew Nathan (2003)","Authoritarian resilience."],
      ["Local pilots are tested, then spread by the centre","Sebastian Heilmann (2008)","Experimentation under hierarchy."],
      ["Xi has returned China to personalistic rule","Susan Shirk (2018)","“The Return to Personalistic Rule”."],
      ["Partial reform traps China in corruption and decay","Minxin Pei (2006)","*China’s Trapped Transition*."]
    ]},
    {id:"e4u19-l1-x5", type:"mcq", q:"A Party plenum changes a formulation from “basic role” to “decisive role” for the market. Which conclusion is best supported?", options:[
      {t:"The leadership is signalling a priority; whether policy follows must be checked against later evidence", ok:true, why:"Right. Tifa are signals of intent and of what officials should say; implementation needs separate evidence."},
      {t:"China has become a free-market economy", why:"A change of words cannot show that; the state sector was in fact strengthened after 2013."},
      {t:"The change is meaningless propaganda and can be ignored", why:"Formulations matter to officials and are worth tracking; the error is reading them as outcomes."},
      {t:"The National People’s Congress must have voted against the state sector", why:"A Party plenum decision is a Party document, and it says nothing about such a vote."}
    ]},
    {id:"e4u19-l1-x6", type:"spot", q:"A draft research plan on local policy in China. Tap the **problems**.", ask:"is a problem", parts:[
      {t:"I will compare provincial work reports to see which provinces repeat the centre’s formulations.", flag:false, why:"A sound text-as-data design."},
      " ",
      {t:"Official growth figures will be my only measure of local economic success.", flag:true, why:"Their reliability is debated (Chen et al. 2019); triangulate with other indicators such as night-time lights, electricity use or firm data."},
      " ",
      {t:"I will name my local interviewees in the thesis so readers can check my evidence.", flag:true, why:"This could put interviewees at risk. Anonymise, secure your notes and follow do-no-harm rules."},
      " ",
      {t:"I will read white papers as statements of the government’s position.", flag:false, why:"Correct: they are primary sources for positions, not neutral accounts."},
      " ",
      {t:"My conclusion will explain what China thinks about local debt.", flag:true, why:"Overgeneralisation. Say whose view: the Ministry of Finance, a provincial government, scholars, or the people you interviewed."}
    ]},
    {id:"e4u19-l1-x7", type:"sort", q:"Which scholarly idea does each observation support best?", buckets:["Fragmented authoritarianism","Personalist turn"], items:[
      {t:"An environmental ministry and a provincial government delay a dam for years while they bargain.", b:0, why:"Policy shaped by bargaining among bureaucracies and regions."},
      {t:"The presidential term limit is removed and one leader’s thought is written into the constitution.", b:1, why:"Concentration of authority in one leader: Shirk’s argument."},
      {t:"Journalists and NGOs push a hydropower project onto the agenda as policy entrepreneurs.", b:0, why:"Mertha’s “fragmented authoritarianism 2.0”."},
      {t:"The leader’s long-time associates fill the Standing Committee.", b:1, why:"Often cited as evidence of personal power over collective leadership."}
    ]}
   ],
   apply:{
    intro:"Work with free primary sources and scholarship. No account or VPN is needed for any of these tasks.",
    tasks:[
     {t:"Read a work report like a scholar", how:[
       "Find the English text of the report to the 20th Party Congress (October 2022) on a Chinese government or news website, or the outline of the 15th Five-Year Plan (March 2026).",
       "Choose three formulations that recur (for example “Chinese-style modernisation”, “high-quality development”, “security”). Count how often each appears, using your browser’s find function.",
       "Write what the counts suggest about priorities, and one reason why counting words could mislead you."
     ], write:"Document… Formulation 1 and count… Formulation 2… Formulation 3… What the counts suggest… Why they could mislead…"},
     {t:"Plan the evidence for a China question", how:[
       "Write one research question about Chinese politics that interests you.",
       "List three kinds of evidence you could use (official texts, statistics, online data, interviews, archives) and one weakness of each.",
       "Note one ethical risk and how you would reduce it."
     ], write:"My question… Evidence 1 and its weakness… Evidence 2… Evidence 3… Ethical risk and safeguard…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the Xi era a return to personalist rule, or the normal working of a Leninist party?",
       "2. Did “authoritarian resilience” explain China, or only China in the 2000s?",
       "3. What can an outsider responsibly claim about Chinese politics when access is shrinking?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes with word counts from a primary document and their limits, an evidence plan for a research question with an ethical safeguard, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"csy22", where:"“Focus: The Twentieth Party Congress”: “The Twentieth Party Congress: A Primer” (Linda Jaivin and M. Su) and “A Matter of Perspective: Insider Accounts of Xi Jinping and the Twentieth Party Congress” (Neil Thomas)", note:"Short, readable essays on the 2022 Congress that began Xi’s third term."},
    {book:"owh2", where:"Chapter 14, section 14.2 “The Spread of Communism”", note:"Background on the Chinese revolution of 1949, which created the party-state."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u19-l2", title:"China’s foreign policy: from low profile to major-country diplomacy", minutes:65,
   hook:{q:"Xi Jinping first proposed what became the Belt and Road Initiative in a speech in which country?", options:["Kazakhstan","Pakistan","Indonesia","Greece"], answer:0, reveal:"**Kazakhstan.** In September 2013, at a university in Astana, Xi proposed a “Silk Road Economic Belt”; a month later, in Indonesia’s parliament, he proposed a “21st-Century Maritime Silk Road”. Together they became the Belt and Road Initiative. Pakistan and Greece later hosted flagship projects, an economic corridor and a port. This lesson follows China’s foreign policy from Mao to Xi and the scholarly argument about what its rise means."},
   goals:[
     "Trace China’s foreign-policy formulations from the 1950s to 2025, with dates and terms in pinyin",
     "Compare explanations for the turn to a more assertive foreign policy",
     "Describe the Belt and Road Initiative and the four global initiatives, with each side’s reading",
     "Weigh power transition theory, “Thucydides’s Trap” and the status quo debate",
     "Explain David Kang’s hierarchy argument and the main replies to it"
   ],
   learn:[
    {h:"Four eras in one diagram", body:[
      "China’s leaders mark changes of course with official slogans. Reading them in sequence is a quick map of seventy years of foreign policy.",
      {fig:'<svg viewBox="0 0 340 412"><path class="d-ink" d="M74 20 L74 396" stroke-width="2"/><circle class="d-inkf" cx="74" cy="30" r="5"/><text class="s" x="64" y="34" text-anchor="end">1954</text><text x="86" y="34">Five Principles of</text><text class="s" x="86" y="50">Peaceful Coexistence</text><circle class="d-inkf" cx="74" cy="78" r="5"/><text class="s" x="64" y="82" text-anchor="end">1971–72</text><text x="86" y="82">Opening to the US</text><text class="s" x="86" y="98">UN seat; Nixon visits</text><circle class="d-inkf" cx="74" cy="126" r="5"/><text class="s" x="64" y="130" text-anchor="end">1978</text><text x="86" y="130">Reform and opening</text><text class="s" x="86" y="146">diplomacy serves growth</text><circle class="d-inkf" cx="74" cy="174" r="5"/><text class="s" x="64" y="178" text-anchor="end">c. 1990</text><text x="86" y="178">“Keep a low profile”</text><text class="s" x="86" y="194">韬光养晦</text><circle class="d-inkf" cx="74" cy="222" r="5"/><text class="s" x="64" y="226" text-anchor="end">2003–05</text><text x="86" y="226">“Peaceful rise”, then</text><text class="s" x="86" y="242">“peaceful development”</text><circle class="d-inkf" cx="74" cy="270" r="5"/><text class="s" x="64" y="274" text-anchor="end">2013</text><text x="86" y="274">“Striving for achievement”</text><text class="s" x="86" y="290">奋发有为; Belt and Road</text><circle class="d-inkf" cx="74" cy="318" r="5"/><text class="s" x="64" y="322" text-anchor="end">2014</text><text x="86" y="322">Major-country diplomacy</text><text class="s" x="86" y="338">with Chinese characteristics</text><circle class="d-inkf" cx="74" cy="366" r="5"/><text class="s" x="64" y="370" text-anchor="end">2021–25</text><text x="86" y="370">Four global initiatives</text><text class="s" x="86" y="386">development, security,</text><text class="s" x="86" y="400">civilisation, governance</text></svg>', alt:"A vertical timeline of China’s foreign-policy formulations: 1954, the Five Principles of Peaceful Coexistence; 1971–72, opening to the United States, the UN seat and Nixon’s visit; 1978, reform and opening, with diplomacy serving growth; about 1990, keep a low profile (taoguang yanghui); 2003–05, peaceful rise, then peaceful development; 2013, striving for achievement (fenfa youwei) and the Belt and Road; 2014, major-country diplomacy with Chinese characteristics; 2021–25, four global initiatives on development, security, civilisation and governance.", cap:"Slogans are not policies, but they show how leaders want China’s role to be understood."},
      "**Mao era.** After an alliance with Moscow in 1950 and the [[sino-soviet-split|Sino-Soviet split]], China courted the newly independent states. The Five Principles of Peaceful Coexistence, formally set out in a 1954 agreement between China and India, and the Bandung Conference of 1955 (Unit 1) still frame its official diplomacy. China tested its first nuclear weapon in October 1964. In 1971 the PRC’s representatives replaced those of the ROC at the UN, and Nixon visited in February 1972 (see [[ping-pong-diplomacy]]).",
      "**Deng era.** From 1978 foreign policy served economic growth. Deng is credited with the guidance [[taoguang-yanghui|*tāoguāng yǎnghuì*]] (韬光养晦), usually paired with *yǒusuǒ zuòwéi* (有所作为, “get some things done”). The translation is itself political: critics render it “hide your capabilities and bide your time”, implying a plan to strike later; Chinese officials prefer “keep a low profile”.",
      "**Jiang and Hu.** China joined the WTO in December 2001. Zheng Bijian’s idea of a [[peaceful-rise|“peaceful rise”]] (2003) was soon renamed “peaceful development”, because “rise” sounded threatening."
    ]},
    {h:"The Xi turn and its explanations", body:[
      "In October 2013 Xi told a conference on diplomacy with neighbouring countries to “strive for achievement” (奋发有为, *fènfā yǒuwéi*). Yan Xuetong, whose moral realism Unit 2 introduced ({{chinese-ir-theory}}), titled a 2014 article “From Keeping a Low Profile to Striving for Achievement”. In 2014 the official goal became [[major-country-diplomacy|major-country diplomacy with Chinese characteristics]], and the slogan of a [[community-of-shared-future|community with a shared future for mankind]] (人类命运共同体) was written into both constitutions by 2018.",
      "Why the change? Three families of explanation:",
      {list:[
        "**Power.** Realists see a stronger state claiming more, especially after the 2008 financial crisis appeared to weaken the West.",
        "**Domestic politics.** Jessica Chen Weiss (*Powerful Patriots*, 2014) showed how the government allows or curbs nationalist protest to signal resolve. Shirk (*Overreach*, 2022) blames centralised, personal rule for policies that provoked counter-balancing.",
        "**Strategy.** Rush Doshi (*The Long Game*, 2021) argues that the Party has pursued a consistent grand strategy since the Cold War’s end, shifting from blunting US power to building Chinese order. Critics question whether internal speeches show a single plan."
      ]},
      "Behaviour varies by issue, which complicates any single story. M. Taylor Fravel (*Strong Borders, Secure Nation*, 2008) found that China compromised in most of its territorial disputes on land, often when facing unrest at home, but rarely over offshore islands; it has since asserted its maritime claims strongly (see {{south-china-sea-disputes}}). Its border with India remains disputed (Unit 21). China is also now the second-largest contributor to the UN regular budget after the United States and a major contributor of peacekeepers, which fits neither a simple “challenger” nor a simple “joiner” label.",
      "Style changed too. [[wolf-warrior-diplomacy|“Wolf warrior” diplomacy]], named after two Chinese action films (2015 and 2017), describes the combative public tone some diplomats adopted from about 2019 (Peter Martin, *China’s Civilian Army*, 2021)."
    ]},
    {h:"The Belt and Road and its readings", body:[
      "The [[belt-and-road-initiative|Belt and Road Initiative]] (BRI; 一带一路, *Yídài Yílù*) was written into the Party constitution in 2017. Beijing has hosted three Belt and Road Forums (2017, 2019, 2023). Counts vary with the source: China’s government said in a 2023 white paper that more than 150 countries had signed cooperation documents; Italy, the only G7 member to join (2019), announced its exit in December 2023. The Asian Infrastructure Investment Bank, which began operating in 2016, is a separate multilateral bank with its own rules.",
      "Scholars read the BRI in two main ways. **Grand strategy**: a plan to bind Eurasia, Africa and beyond to China through infrastructure, ports and standards. **Fragmented and demand-driven**: Lee Jones and Shahar Hameiri (*Fractured China*, 2021) argue that state firms, provinces and banks chase their own interests, and that host governments propose many projects. The lending debate, including [[debt-trap-diplomacy|“debt-trap diplomacy”]] and AidData’s findings, is covered in Unit 15 ({{china-overseas-lending}}); link to it rather than retell it.",
      "Recipients have their own agendas. Laos’s railway to China (opened December 2021) and Indonesia’s Jakarta–Bandung high-speed line (opened October 2023) are flagship projects; host governments present them as development they chose, while critics in those countries question their cost, debt and terms. Good BRI research therefore studies the host country’s politics as closely as China’s."
    ]},
    {h:"Four global initiatives", body:[
      {table:[
        ["Initiative","Proposed","Stated aims"],
        ["[[global-development-initiative|Global Development Initiative]]","September 2021, UN General Assembly","Put development first; support the 2030 Agenda"],
        ["[[global-security-initiative|Global Security Initiative]]","April 2022, Boao Forum; concept paper February 2023","“Indivisible security” and a new security architecture; dialogue over confrontation"],
        ["[[global-civilization-initiative|Global Civilization Initiative]]","March 2023, Beijing","Respect for the diversity of civilisations and paths to modernisation"],
        ["[[global-governance-initiative|Global Governance Initiative]]","1 September 2025, “SCO Plus” meeting, Tianjin","Five principles: sovereign equality, international rule of law, multilateralism, a people-centred approach and real actions"]
      ]},
      "China’s government presents them as support for the UN Charter and the Global South. Critics in several Western governments and think tanks argue that they put state sovereignty above universal human rights, and note that “indivisible security” echoes Russia’s language against NATO enlargement. Weiss and Jeremy Wallace (*International Organization*, 2021) offer a middle path: China engages selectively, supporting parts of the [[liberal-international-order|liberal international order]] that suit its domestic system (trade, sovereignty) and contesting parts that do not (human rights, internet governance)."
    ]},
    {h:"Is a clash coming? Power transition and its critics", body:[
      "[[power-transition-theory|Power transition theory]] (A. F. K. Organski, 1958; Robert Gilpin’s *War and Change*, 1981, in Unit 2) holds that danger peaks when a dissatisfied rising power nears a leader. Graham Allison’s [[thucydides-trap|“Thucydides’s Trap”]] (2017) made this popular. John Mearsheimer ({{john-mearsheimer}}) expects intense security competition whatever China intends.",
      "Critics of Allison’s count say that several of his cases were not really power transitions, and that the list leaves out transitions that stayed peaceful. Policy debates in Washington changed too: the 2017 US National Security Strategy described “great power competition” with China, later administrations kept the frame, and the tariff and export-control rounds since 2018 are covered in Unit 15. Chinese officials reject the “Thucydides” framing and say China seeks no hegemony.",
      "Others ask whether China is dissatisfied at all. Alastair Iain Johnston (“Is China a Status Quo Power?”, *International Security*, 2003) found that China had joined most international institutions and largely kept their rules: a [[status-quo-power]] in many areas, though not on Taiwan or territory. G. John Ikenberry (*Foreign Affairs*, 2008) argued that the Western-led order is hard to overturn and easy to join, so a rising China has reasons to work within it."
    ]},
    {h:"Kang’s hierarchy argument", body:[
      "David Kang ({{david-kang}}) argues that Europe is the wrong template for Asia. In *China Rising* (2007) he found that most East Asian states were accommodating China rather than balancing against it. In *East Asia Before the West* (2010) he described the historical [[tribute-system|tribute system]] (朝贡, *cháogòng*) as an [[international-hierarchy|international hierarchy]] with China at the centre and relatively few wars among the Confucian states (China, Korea, Vietnam and Japan) from the late fourteenth to the nineteenth century. In *Beyond Power Transitions* (2024), Xinru Ma and Kang argue that shared understandings of status, not the balance of capabilities, kept that order stable, and that instability came mostly from domestic challenges.",
      "Critics answer from history and from today. Wang Yuan-kang (*Harmony and War*, 2011) found that the Song and Ming dynasties used force when strong and accommodated when weak, with Confucianism as justification. Ji-Young Lee (*China’s Hegemony*, 2016) showed Korean and Japanese rulers using, defying or imitating the tribute order for domestic reasons. Acharya (2003) and many Southeast Asianists see [[strategic-hedging|hedging]], not acceptance of hierarchy. Lesson 5 returns to the regional order today.",
      {key:"Each theory predicts different evidence: balancing (realism), selective engagement (Weiss and Wallace), or accommodation of hierarchy (Kang). Say which evidence would change your mind."},
      {terms:["taoguang-yanghui","peaceful-rise","major-country-diplomacy","community-of-shared-future","wolf-warrior-diplomacy","belt-and-road-initiative","global-development-initiative","global-security-initiative","global-civilization-initiative","global-governance-initiative","power-transition-theory","status-quo-power","tribute-system","international-hierarchy"]}
    ]}
   ],
   try:[
    {id:"e4u19-l2-x1", type:"order", q:"Put these foreign-policy formulations in the order they were introduced.", items:[
      {t:"The Five Principles of Peaceful Coexistence", why:"1954, in an agreement with India."},
      {t:"Reform and opening", why:"From 1978 under Deng Xiaoping."},
      {t:"“Keep a low profile” (韬光养晦)", why:"Attributed to Deng around 1990."},
      {t:"“Peaceful rise”, soon renamed “peaceful development”", why:"2003–05."},
      {t:"Major-country diplomacy with Chinese characteristics", why:"2014."},
      {t:"The Global Governance Initiative", why:"1 September 2025."}
    ]},
    {id:"e4u19-l2-x2", type:"mcq", q:"Lucía translates 韬光养晦 as “hide your capabilities and bide your time” in her essay without comment. What should she add?", options:[
      {t:"That the translation is contested: Chinese officials render it “keep a low profile”, and the choice implies different readings of China’s intentions", ok:true, why:"Right. Translation choices carry arguments; a seminar paper should flag them."},
      {t:"Nothing: the translation is the official one", why:"It is not the official rendering; Chinese officials prefer “keep a low profile”."},
      {t:"That the phrase was invented by Xi Jinping in 2013", why:"It is attributed to Deng Xiaoping around 1990; Xi’s era moved towards “striving for achievement”."},
      {t:"That the phrase is a line from Sun Tzu’s *Art of War*", why:"It is a classical-sounding idiom attributed to Deng, not a quotation from that text."}
    ]},
    {id:"e4u19-l2-x3", type:"match", q:"Match each global initiative to where it was first proposed.", pairs:[
      ["Global Development Initiative","UN General Assembly, September 2021","Proposed in Xi’s address to the General Assembly."],
      ["Global Security Initiative","Boao Forum for Asia, April 2022","A concept paper followed in February 2023."],
      ["Global Civilization Initiative","A meeting with political parties in Beijing, March 2023","Stresses diversity of civilisations and paths to modernisation."],
      ["Global Governance Initiative","“SCO Plus” meeting in Tianjin, September 2025","Five principles, from sovereign equality to real actions."]
    ]},
    {id:"e4u19-l2-x4", type:"sort", q:"Which reading of the Belt and Road does each observation support?", buckets:["Grand strategy","Fragmented and demand-driven"], items:[
      {t:"The initiative was written into the Party constitution and promoted by the top leader.", b:0, why:"Top-level ownership fits a strategic reading."},
      {t:"Provincial firms rebranded existing projects as BRI to win support from Beijing.", b:1, why:"Jones and Hameiri’s point: many actors pursue their own interests under the label."},
      {t:"Host governments proposed many of the projects themselves.", b:1, why:"Demand from recipients, not a central blueprint."},
      {t:"Ports and railways are planned to link markets to China across several regions.", b:0, why:"A network design is consistent with a geopolitical strategy (though not proof of one)."},
      {t:"State banks and firms competed with each other for the same deals.", b:1, why:"Fragmentation among Chinese actors."}
    ]},
    {id:"e4u19-l2-x5", type:"mcq", q:"Which finding best supports Johnston’s 2003 argument about China?", options:[
      {t:"By the early 2000s China had joined most major international institutions and largely followed their rules", ok:true, why:"Right. Johnston measured participation and compliance and found more status quo behaviour than critics assumed, outside issues such as Taiwan."},
      {t:"China built artificial islands in the South China Sea after 2013", why:"That came later and is usually cited against a status quo reading."},
      {t:"Allison counted 12 wars in 16 power transitions", why:"That supports the Thucydides’s Trap argument, not Johnston’s."},
      {t:"Xi’s speeches call for “striving for achievement”", why:"A change of rhetoric a decade after Johnston wrote; it does not test his argument."}
    ]},
    {id:"e4u19-l2-x6", type:"match", q:"Match each work to its argument.", pairs:[
      ["*China Rising* (2007)","East Asian states mostly accommodate China rather than balance it","David Kang."],
      ["*Harmony and War* (2011)","Confucian dynasties used force when strong; culture served as justification","Wang Yuan-kang."],
      ["*China’s Hegemony* (2016)","Neighbours used or defied the tribute order for domestic legitimacy","Ji-Young Lee."],
      ["*The Long Game* (2021)","The Party has pursued a consistent grand strategy to displace US order","Rush Doshi."],
      ["*Powerful Patriots* (2014)","Beijing allows or curbs nationalist protest to signal resolve","Jessica Chen Weiss."]
    ]},
    {id:"e4u19-l2-x7", type:"spot", q:"A student’s paragraph on China’s rise. Tap the sentences that are **inaccurate or unattributed opinion**.", ask:"inaccurate or unattributed", parts:[
      {t:"Graham Allison’s *Destined for War* (2017) argued that a rising power challenging a ruling one has often led to war.", flag:false, why:"Accurate summary, attributed."},
      " ",
      {t:"The Belt and Road is obviously a debt trap designed to seize ports.", flag:true, why:"Unattributed opinion presented as fact; the evidence is debated (see Unit 15). Attribute the claim and its critics."},
      " ",
      {t:"China’s government says the Global Security Initiative supports the UN Charter, while some critics argue it privileges state sovereignty over human rights.", flag:false, why:"Both positions attributed."},
      " ",
      {t:"China has refused to join any international institution.", flag:true, why:"Inaccurate: China belongs to the UN, WTO, IMF, World Bank and many more, and founded the AIIB."},
      " ",
      {t:"Kang argues that historical East Asia was a hierarchy centred on China.", flag:false, why:"Accurate summary of his argument."}
    ]}
   ],
   apply:{
    intro:"Compare how governments and scholars describe the same initiative. All sources are free online.",
    tasks:[
     {t:"One initiative, three voices", how:[
       "Choose one of the four global initiatives or the Belt and Road.",
       "Find (a) a Chinese government text describing it, (b) a statement or analysis from another government or a think tank, and (c) a scholarly article or chapter.",
       "Summarise each in one neutral sentence (“X states that…”), then note one claim on which they disagree and what evidence could settle it."
     ], write:"Initiative… Chinese government text… Second voice… Scholarly voice… Point of disagreement… Evidence that could settle it…"},
     {t:"Test the theories on one event", how:[
       "Pick one event since 2013 (for example the founding of the AIIB, the 2016 South China Sea award, or the launch of the Global Governance Initiative).",
       "Write one sentence each on how power transition theory, Johnston’s status quo argument and Kang’s hierarchy argument would read it.",
       "Say which reading the evidence supports best and why."
     ], write:"Event… Power transition reading… Status quo reading… Hierarchy reading… Best supported, because…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “Thucydides’s Trap” a useful warning or a misleading analogy for US–China relations?",
       "2. Is the Belt and Road better understood as grand strategy or as a label for many interests?",
       "3. Does East Asian history support Kang’s claim that hierarchy, not balance, brings stability?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Three attributed summaries of one initiative with a point of disagreement, one event read through three theories, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"csy22", where:"Chapter 7 “China’s Russia Problem” (Alexander Korolev; Kecheng Fang) and Chapter 6 “Pacific Links” (Denghua Zhang, “Beijing Reshapes Its Pacific Strategy”)", note:"Short case essays on China’s partnerships and its diplomacy in the Pacific."},
    {book:"owh2", where:"Chapter 14, section 14.4 “Global Tensions and Decolonization”", note:"Background on the Sino-Soviet split and the Cold War context of the Mao era."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u19-l3", title:"The Korean Peninsula: two states, one nation?", minutes:65,
   hook:{q:"When did the two Korean states become members of the United Nations?", options:["South Korea in 1949, North Korea in 1973","North Korea in 1948, South Korea in 1991","Both on the same day, 17 September 1991","Neither is a UN member"], answer:2, reveal:"**Both on the same day, 17 September 1991.** For four decades each side had claimed to be the only legitimate government of all Korea, and joint membership was resisted. Three months later they signed an agreement calling their relationship “not being a relationship between states” but a special one on the way to reunification. By 2026 North Korea’s revised constitution described the South as a separate state across its southern border. This lesson explains how the peninsula got from there to here."},
   goals:[
     "Summarise the division and the Korean War, including the historians’ debate on its origins",
     "Explain South Korea’s development and democratisation and the tests its democracy has faced",
     "Describe North Korea’s political system and ideology, and the sources used to study it",
     "Trace North Korea’s nuclear programme and compare explanations for it",
     "Describe inter-Korean relations from 1972 to the “two states” turn, as of November 2026"
   ],
   learn:[
    {h:"Division and war, and a debate about origins", body:[
      "Unit 1 told the story ({{cold-war-in-asia}}); here is the outline. In August 1945 the United States and the Soviet Union divided Japan’s former colony at the 38th parallel. Two states were proclaimed in 1948: the Republic of Korea (ROK) in the south on 15 August and the Democratic People’s Republic of Korea (DPRK) in the north on 9 September. North Korean forces invaded on 25 June 1950. The war ended in the [[korean-armistice|armistice]] of 27 July 1953, and no peace treaty has followed.",
      "Why did it happen? The **orthodox** view saw Soviet-directed aggression. Bruce Cumings ({{bruce-cumings}}; *The Origins of the Korean War*, 1981 and 1990) argued that it was rooted in a Korean civil conflict over colonial collaboration, land and revolution that began in 1945. When Soviet archives opened in the 1990s, documents studied by Kathryn Weathersby and others showed that Stalin approved Kim Il Sung’s plan to attack in 1950. Most historians now combine both: a civil war that became international through decisions in Pyongyang, Moscow, Beijing and Washington."
    ]},
    {h:"South Korea: development and democracy", body:[
      "After a military coup in 1961, Park Chung-hee led an export drive in partnership with family-owned conglomerates, the [[chaebol]] (재벌, *jaebeol*; see [[developmental-state]] and {{developmental-state-debate}}). Park ruled until he was assassinated in October 1979. General Chun Doo-hwan then seized power. In May 1980 the military violently suppressed the [[gwangju-uprising|Gwangju Uprising]], which became a defining memory of the democracy movement.",
      "In June 1987 the [[june-democratic-struggle|June Democratic Struggle]], mass protests sparked by the death of a student under police torture and the refusal of direct elections, forced a turn. Roh Tae-woo, the ruling party’s candidate, issued the June 29 Declaration accepting direct presidential elections; a new constitution with a single five-year presidential term was approved by referendum in October. In December 1997 the opposition leader Kim Dae-jung was elected, the first transfer of power to the opposition.",
      "Scholars debate the causes: a growing middle class and students, labour and churches; US pressure; and the international spotlight of the 1988 Seoul Olympics. They also debate the link with growth. Was authoritarian rule necessary for the “miracle”? David Kang (*Crony Capitalism*, 2002) showed that collusion between state and chaebol coexisted with growth, which complicates the image of a clean developmental state.",
      "The democracy has been tested and has held. Two former presidents (Chun and Roh) were convicted in 1996; Park Geun-hye was removed by the Constitutional Court in 2017. On 3 December 2024 President Yoon Suk Yeol declared martial law; the National Assembly voted to lift it within hours, impeached him, and the Constitutional Court removed him on 4 April 2025. Lee Jae-myung took office in June 2025."
    ]},
    {h:"North Korea’s political system", body:[
      "The DPRK has been led by three generations of one family: Kim Il Sung (1948–94), Kim Jong Il (1994–2011) and Kim Jong Un (since December 2011), through the Workers’ Party of Korea, the army and the state.",
      {list:[
        "[[juche|*Juche*]] (주체, “self-reliance” or “subjecthood”): the state ideology, associated with a 1955 speech by Kim Il Sung, stressing political and economic independence.",
        "[[songun|*Songun*]] (선군, “military-first”): Kim Jong Il’s priority on the army from the 1990s.",
        "[[byungjin|*Byungjin*]] (병진, “parallel development”): Kim Jong Un’s 2013 line of building nuclear weapons and the economy together; in 2018 he declared the nuclear side complete and turned to the economy."
      ]},
      "In the mid-1990s famine, known in the North as the “Arduous March”, the state distribution system collapsed. Stephan Haggard and Marcus Noland (*Famine in North Korea*, 2007) estimated between about 600,000 and one million deaths. People survived through private trade, and markets ([[jangmadang]], 장마당) became part of daily life, a story Andrei Lankov tells in *The Real North Korea* (2013). In 2014 a UN Commission of Inquiry reported that crimes against humanity had been committed; North Korea’s government rejected the report.",
      "Sources are difficult. State media (KCNA) give the official line; defectors’ testimony is rich but comes from those who left; satellite imagery, published by projects such as 38 North, and trading partners’ trade data ([[mirror-statistics]]) help to check claims. The Ninth Party Congress, which ended on 25 February 2026, re-elected Kim as General Secretary."
    ]},
    {h:"The nuclear programme", body:[
      "North Korea joined the NPT in 1985. A crisis over inspections in 1993–94 ended in the [[agreed-framework|Agreed Framework]] (October 1994), which froze its plutonium programme in exchange for fuel oil and two light-water reactors. The deal collapsed in 2002 amid US charges of a secret uranium programme, and in January 2003 the North announced its withdrawal from the NPT. The [[six-party-talks|Six-Party Talks]] (2003–09) followed (Unit 12).",
      "Six nuclear tests took place between October 2006 and September 2017, and in 2017 the North tested its first intercontinental ballistic missiles. A 2022 law set out its nuclear doctrine, and a 2023 constitutional amendment enshrined its nuclear-force policy. At the Ninth Party Congress in February 2026 Kim pledged to “further expand and strengthen our national nuclear power”. SIPRI estimated in June 2026 that it had possibly assembled around 60 warheads, with fissile material for at least 30 more.",
      "Why build them? Scott Sagan’s “three models” (*International Security*, 1996/97) organise the debate:",
      {table:[
        ["Model","Reading of North Korea"],
        ["Security","A small state facing a superpower seeks a deterrent; leaders cite Iraq and Libya as warnings"],
        ["Domestic politics","The bomb legitimises the Kim family and rewards the military and scientific elite"],
        ["Norms and status","Nuclear status brings prestige; in 2026 Kim made better ties with Washington conditional on respect for the North’s “current status”"]
      ]},
      "Outside powers matter. China, the North’s largest trading partner, supported UN sanctions from 2006 to 2017 but argues that sanctions alone cannot solve the issue. Russia and North Korea signed a treaty with a mutual assistance clause in June 2024, and in April 2025 both governments confirmed that North Korean troops had fought for Russia in its Kursk region. Many analysts argue that this partnership has weakened the sanctions regime; Moscow and Pyongyang describe it as legitimate cooperation between sovereign states.",
      "The models suggest different policies: security guarantees, regime-focused incentives, or status talks. The United States, Japan and South Korea’s governments state that their goal remains complete denuclearisation; North Korea says its status is irreversible."
    ]},
    {h:"Inter-Korean relations: from special relationship to two states", body:[
      {fig:'<svg viewBox="0 0 340 452"><text x="85" y="22" text-anchor="middle">Tension</text><text x="255" y="22" text-anchor="middle">Engagement</text><path class="d-ink" d="M170 32 L170 396" stroke-width="2"/><circle class="d-inkf" cx="170" cy="46" r="4"/><text x="180" y="50">1972</text><text class="s" x="180" y="65">Joint Statement</text><circle class="d-inkf" cx="170" cy="84" r="4"/><text x="180" y="88">1991</text><text class="s" x="180" y="103">UN, Basic Agreement</text><circle class="d-inkf" cx="170" cy="122" r="4"/><text x="160" y="126" text-anchor="end">1993–94</text><text class="s" x="160" y="141" text-anchor="end">first nuclear crisis</text><circle class="d-inkf" cx="170" cy="160" r="4"/><text x="180" y="164">2000</text><text class="s" x="180" y="179">first summit</text><circle class="d-inkf" cx="170" cy="198" r="4"/><text x="160" y="202" text-anchor="end">2006</text><text class="s" x="160" y="217" text-anchor="end">first nuclear test</text><circle class="d-inkf" cx="170" cy="236" r="4"/><text x="160" y="240" text-anchor="end">2010</text><text class="s" x="160" y="255" text-anchor="end">Cheonan, Yeonpyeong</text><circle class="d-inkf" cx="170" cy="274" r="4"/><text x="160" y="278" text-anchor="end">2016</text><text class="s" x="160" y="293" text-anchor="end">Kaesong closed</text><circle class="d-inkf" cx="170" cy="312" r="4"/><text x="180" y="316">2018</text><text class="s" x="180" y="331">three summits</text><circle class="d-inkf" cx="170" cy="350" r="4"/><text x="160" y="354" text-anchor="end">2020</text><text class="s" x="160" y="369" text-anchor="end">liaison office blown up</text><circle class="d-inkf" cx="170" cy="388" r="4"/><text x="160" y="392" text-anchor="end">2023–24</text><text class="s" x="160" y="407" text-anchor="end">“two hostile states”</text><rect class="d-gold" x="10" y="414" width="320" height="32" rx="6" stroke-width="2"/><text class="s" x="170" y="434" text-anchor="middle">2026: new DPRK constitution; Seoul’s new plan</text></svg>', alt:"Timeline of inter-Korean relations with tension on the left and engagement on the right. Engagement: 1972 Joint Statement; 1991 UN membership and the Basic Agreement; 2000 first summit; 2018 three summits. Tension: 1993–94 first nuclear crisis; 2006 first nuclear test; 2010 Cheonan sinking and Yeonpyeong shelling; 2016 Kaesong complex closed; 2020 liaison office blown up; 2023–24 the North’s “two hostile states” line. A box at the bottom marks 2026, explained in the text.", cap:"Swings between engagement and tension. Since 2023 the North has rejected engagement outright."},
      "The 4 July 1972 Joint Statement set three principles for unification: independently, peacefully and beyond differences of ideology. The [[inter-korean-basic-agreement|Basic Agreement]] (signed December 1991, in force February 1992) described relations as “not being a relationship between states” but “a special interim relationship stemming from the process towards reunification”.",
      "Kim Dae-jung’s [[sunshine-policy|Sunshine Policy]] (햇볕정책, *haetbyeot jeongchaek*) led to the first summit in June 2000, tourism to Mount Kumgang and the [[kaesong-industrial-complex|Kaesong Industrial Complex]], where South Korean firms employed North Korean workers until Seoul closed it in 2016. In March 2010 the corvette *Cheonan* sank with 46 sailors dead; an international investigation led by South Korea blamed a North Korean torpedo, which the North denied. In November 2010 the North shelled Yeonpyeong Island. In 2018 three summits produced the [[panmunjom-declaration|Panmunjom Declaration]] (27 April) and a military agreement in September. In June 2020 the North blew up the joint liaison office.",
      "Then the North changed doctrine. In December 2023 Kim described the Koreas as [[two-hostile-states|“two states hostile to each other”]]; in 2024 Pyongyang abolished its unification agencies. At the Ninth Party Congress Kim called South Korea the “most hostile enemy” and said its “complete collapse cannot be ruled out”, while saying there was “no reason why we cannot get along well with the US” if Washington respected the North’s current status. A constitution revised by the Supreme People’s Assembly in March 2026 (its text became known in May) drops the unification and one-nation wording and describes the DPRK as bordering China and Russia to the north and “the ROK” to the south.",
      "Seoul’s position, as of November 2026: President Lee’s government seeks to reduce tensions. Its five-year basic plan for inter-Korean relations (March 2026) aims at peaceful coexistence, and its white paper (May 2026) speaks of a “peace-oriented two-state relationship” that would develop “into a relationship of peaceful coexistence while still aiming for unification”; one of its principles is that Seoul “does not pursue unification by absorption”. Critics in South Korea argue that “two-state” language conflicts with the long-held view of a special relationship, and with the Constitution, whose Article 3 defines the national territory as “the Korean peninsula and its adjacent islands”. The North has rejected Seoul’s offers of talks.",
      {key:"Describe each Korea’s position in its own words, with dates. “Unification”, “two states” and “hostile” are each positions, not neutral descriptions."},
      {terms:["chaebol","gwangju-uprising","june-democratic-struggle","juche","songun","byungjin","jangmadang","agreed-framework","inter-korean-basic-agreement","sunshine-policy","kaesong-industrial-complex","panmunjom-declaration","two-hostile-states"]}
    ]}
   ],
   try:[
    {id:"e4u19-l3-x1", type:"order", q:"Put these events in chronological order.", items:[
      {t:"The ROK and the DPRK are proclaimed as separate states.", why:"August and September 1948."},
      {t:"The Korean War armistice is signed.", why:"27 July 1953."},
      {t:"The Gwangju Uprising is suppressed.", why:"May 1980."},
      {t:"The June Democratic Struggle forces direct presidential elections.", why:"June 1987."},
      {t:"Both Koreas join the UN.", why:"17 September 1991."},
      {t:"Kim Dae-jung and Kim Jong Il hold the first inter-Korean summit.", why:"June 2000."}
    ]},
    {id:"e4u19-l3-x2", type:"match", q:"Match each North Korean ideological term to its meaning.", pairs:[
      ["*Juche* (주체)","Self-reliance: political and economic independence","The state ideology associated with Kim Il Sung."],
      ["*Songun* (선군)","Military-first politics","Kim Jong Il’s priority on the army."],
      ["*Byungjin* (병진)","Building nuclear weapons and the economy in parallel","Kim Jong Un’s line from 2013."],
      ["*Jangmadang* (장마당)","Markets that grew after the 1990s famine","Marketisation from below."]
    ]},
    {id:"e4u19-l3-x3", type:"sort", q:"Which of Sagan’s three models does each explanation of North Korea’s nuclear programme use?", buckets:["Security","Domestic politics","Norms and status"], items:[
      {t:"A small state facing US forces wants a deterrent that guarantees survival.", b:0, why:"An external threat drives the bomb: the security model."},
      {t:"The programme legitimises the ruling family and rewards military and scientific elites.", b:1, why:"Internal coalitions and legitimacy: the domestic politics model."},
      {t:"Kim demands recognition as a nuclear-armed state equal to others.", b:2, why:"Status and recognition: the norms model."},
      {t:"Leaders point to the fates of Iraq and Libya, which gave up or lacked nuclear weapons.", b:0, why:"Lessons about survival under external threat."},
      {t:"Officials present the bomb as proof that the country now ranks among the world’s strategic powers.", b:2, why:"Prestige and standing among states: the norms and status model."}
    ]},
    {id:"e4u19-l3-x4", type:"mcq", q:"Tomás writes: “Soviet archives proved Cumings wrong: the war was simply Stalin’s aggression.” What is the most accurate response?", options:[
      {t:"The archives showed that Stalin approved Kim Il Sung’s plan in 1950, but most historians combine this with the civil war roots Cumings stressed", ok:true, why:"Right. The documents settled who decided to attack in June 1950; the deeper causes are still debated."},
      {t:"The archives proved South Korea started the war", why:"No: they showed Stalin approving the North’s plan to attack."},
      {t:"Soviet archives on Korea have never been opened", why:"Many documents were released in the 1990s and studied by Weathersby and others."},
      {t:"Cumings argued that Stalin started the war", why:"Cumings stressed the civil-war origins from 1945, not Soviet direction."}
    ]},
    {id:"e4u19-l3-x5", type:"spot", q:"A news summary on the Koreas. Tap the sentences that are **inaccurate**.", ask:"inaccurate", parts:[
      {t:"South Korea’s National Assembly voted to lift President Yoon’s martial law within hours in December 2024.", flag:false, why:"Accurate."},
      " ",
      {t:"The 1991 Basic Agreement described the Koreas as two normal sovereign states.", flag:true, why:"Inaccurate: it described relations as “not being a relationship between states” but a special interim relationship."},
      " ",
      {t:"North Korea announced its withdrawal from the NPT in January 2003.", flag:false, why:"Accurate."},
      " ",
      {t:"The Agreed Framework of 1994 was a peace treaty ending the Korean War.", flag:true, why:"Inaccurate: it was a US–North Korea nuclear deal; no peace treaty has been signed."},
      " ",
      {t:"North Korea’s revised constitution of 2026 drops references to unification.", flag:false, why:"Accurate, as reported in May 2026."}
    ]},
    {id:"e4u19-l3-x6", type:"mcq", q:"Which description of South Korea’s policy as of November 2026 is most accurate and neutral?", options:[
      {t:"The government’s white paper speaks of a “peace-oriented two-state relationship” while “still aiming for unification”; critics in South Korea argue this conflicts with the special relationship and the Constitution", ok:true, why:"Right: the government’s words are quoted, and its critics are attributed."},
      {t:"South Korea has abandoned unification as a goal", why:"Inaccurate: the government says it still aims for unification, though not by absorption."},
      {t:"South Korea has adopted North Korea’s “two hostile states” doctrine", why:"Inaccurate: Seoul speaks of peaceful coexistence, not hostility."},
      {t:"South Korea’s policy is a dangerous surrender to Pyongyang", why:"An opinion stated as fact; attribute such views to those who hold them."}
    ]},
    {id:"e4u19-l3-x7", type:"sort", q:"Was each event a step of **engagement** or of **tension** between the Koreas?", buckets:["Engagement","Tension"], items:[
      {t:"The 4 July 1972 Joint Statement", b:0, why:"Agreed principles for peaceful unification."},
      {t:"The Kaesong Industrial Complex", b:0, why:"Joint economic project under the Sunshine Policy."},
      {t:"The demolition of the joint liaison office", b:1, why:"June 2020, a deliberate rupture by the North."},
      {t:"The Panmunjom Declaration", b:0, why:"April 2018 summit agreement."},
      {t:"The shelling of Yeonpyeong Island", b:1, why:"November 2010."},
      {t:"The “two hostile states” doctrine", b:1, why:"Announced by Kim Jong Un in December 2023."}
    ]}
   ],
   apply:{
    intro:"Read primary sources from both Koreas and compare them. Everything here is free online.",
    tasks:[
     {t:"Two governments, one event", how:[
       "Choose one event from 2025–26 involving the Koreas (a party congress, a missile launch, a policy plan, an offer of talks).",
       "Find how South Korea’s Ministry of Unification or presidential office described it, and how North Korean state media (KCNA) described it, as quoted by an international news agency.",
       "List the words each side uses for the other and for the peninsula’s future."
     ], write:"Event and date… South Korea’s description… North Korea’s description… Words each uses for the other… Words for the future…"},
     {t:"Apply Sagan’s models", how:[
       "Pick one nuclear-related event (for example the 2022 law, the 2023 amendment or the 2026 constitution).",
       "Write one sentence for each of Sagan’s three models explaining the event.",
       "Say which model fits best and what evidence would weaken your choice."
     ], write:"Event… Security reading… Domestic politics reading… Norms and status reading… Best fit and why… What would weaken it…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was authoritarian rule necessary for South Korea’s development?",
       "2. Which of Sagan’s models best explains North Korea’s nuclear weapons, and what follows for policy?",
       "3. Does the “two states” turn on both sides of the peninsula make peace more or less likely?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing two governments’ language on one event, an event analysed through Sagan’s three models, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 14, section 14.2 “The Spread of Communism”", note:"Textbook account of the Korean War in its Cold War setting."},
    {book:"sipri26", where:"Chapter 8 “World nuclear forces” (free download), the section on North Korea", note:"How SIPRI estimates North Korea’s warheads and fissile material, and its caveats."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u19-l4", title:"Taiwan, the status question, and Mongolia in brief", minutes:65,
   hook:{q:"UN General Assembly resolution 2758 (1971) decided who represents China at the United Nations. How many times does its text mention Taiwan?", options:["Never","Once","Twice","Five times"], answer:0, reveal:"**Never.** The resolution restored “all its rights” to the People’s Republic of China, recognised its government’s representatives as “the only legitimate representatives of China to the United Nations” and expelled “the representatives of Chiang Kai-shek”. What that silence means is disputed: Beijing says the resolution settled the question of Taiwan; Taipei and some other governments say it did not address Taiwan’s status. This lesson reads the key documents word by word."},
   goals:[
     "Outline Taiwan’s history from Indigenous peoples to democratisation, with dates",
     "Explain Taiwan’s place in the semiconductor industry and the “silicon shield” debate",
     "Quote the key documents on Taiwan’s status exactly and say what each does and does not say",
     "Distinguish the PRC’s one-China principle from other governments’ one China policies, and attribute every position as of November 2026",
     "Describe Mongolia’s “third neighbour” foreign policy and its limits"
   ],
   learn:[
    {h:"Many layers of history", body:[
      "Taiwan is an island of about 23 million people, about 130 kilometres from China’s south-east coast at the narrowest point of the Taiwan Strait. Its history has several layers, and which layer a speaker stresses often signals a position.",
      "The first inhabitants were Austronesian-speaking Indigenous peoples; Taiwan’s government recognises 16 Indigenous peoples today. The Dutch East India Company ruled parts of the south from 1624 until Zheng Chenggong (Koxinga), a Ming loyalist, expelled it in 1662. The Qing dynasty annexed the island in 1683 and made it a province in the 1880s. After the Sino-Japanese War, the Treaty of Shimonoseki (1895) ceded it to Japan, which ruled it as a colony for fifty years (Unit 1).",
      "In 1945 the Republic of China (ROC), led by Chiang Kai-shek’s Kuomintang (KMT, 國民黨, *Guómíndǎng*), took over its administration. Tension with the new rulers exploded in the [[228-incident|228 Incident]] of February 1947, an uprising followed by a military crackdown in which thousands were killed (a government commission set up in 1992 estimated 18,000 to 28,000; other estimates are lower). In 1949, having lost the civil war, the ROC government moved to Taipei. Martial law, declared in 1949, lasted until 1987; the decades of political persecution are remembered as the White Terror.",
      "Accounts differ. The PRC government describes Taiwan as part of China since ancient times; many historians in Taiwan stress its Indigenous, colonial and migrant layers. Note who tells which story."
    ]},
    {h:"Democratisation and identity", body:[
      "Taiwan’s transition was gradual and negotiated from above as well as pushed from below. The opposition Democratic Progressive Party (DPP) was founded in September 1986, while parties were still banned. President Chiang Ching-kuo lifted martial law on 15 July 1987. His successor Lee Teng-hui, the first Taiwan-born president, ended the emergency provisions in 1991; the legislature was fully re-elected in 1992; and in March 1996 voters chose the president directly for the first time, while the PRC held missile tests in the waters nearby.",
      "In 2000 the DPP’s Chen Shui-bian won, the first transfer of power between parties. Power has alternated since: the KMT’s Ma Ying-jeou (2008), the DPP’s Tsai Ing-wen (2016) and Lai Ching-te (May 2024). After the 2024 election the KMT and the smaller Taiwan People’s Party together held a majority in the legislature, so government and legislature are divided.",
      "Identity has shifted. The Election Study Center of National Chengchi University has asked the same question since 1992: do you see yourself as Taiwanese, Chinese, or both? The share answering “Taiwanese” only rose from under a fifth in 1992 to a majority from 2009 onwards (about 62 per cent in 2025); most others answer “both”, and few (under 3 per cent in 2025) answer “Chinese” only. The same surveys find that most respondents prefer to keep some form of the status quo rather than seek immediate unification or independence. Shelley Rigger (*Why Taiwan Matters*, 2011) is a readable introduction to these politics.",
      {tip:"Identity and status preferences are different questions. A respondent can feel “Taiwanese” and still prefer the status quo."}
    ]},
    {h:"An economy built on chips", body:[
      "Unit 14 described Taiwan’s growth as a “governed market” (Robert Wade, 1990; {{developmental-state-debate}}). A key step came from the state: the Industrial Technology Research Institute (1973), the Hsinchu Science Park (1980) and, in 1987, Taiwan Semiconductor Manufacturing Company (TSMC), founded by Morris Chang with government backing. TSMC pioneered the **foundry** model: making chips that other firms design. Taiwan’s firms now make most of the world’s most advanced logic chips (a 2021 industry study put 92 per cent of capacity below 10 nanometres in Taiwan).",
      "That concentration feeds a debate. The [[silicon-shield|“silicon shield”]] argument (from Craig Addison’s book *Silicon Shield: Taiwan’s Protection Against Chinese Attack*, 2001) holds that the world’s dependence on Taiwan’s chips deters an attack and gives others reasons to defend it. Critics reply that dependence can cut both ways, and that the shield thins as TSMC builds plants in the United States and Japan. Chris Miller’s *Chip War* (2022) tells the industry’s history; Unit 15 covers export controls ({{geoeconomics}}).",
      "Economic ties across the Strait grew from the late 1980s. In 2010 the two sides signed an Economic Cooperation Framework Agreement (ECFA). In 2014 students occupied the legislature for more than three weeks against a services trade agreement, the Sunflower Movement, which shows how economic integration became a question of identity and democracy."
    ]},
    {h:"The status question, word by word", body:[
      "On Taiwan, diplomats choose every verb with care, so a seminar paper must quote exactly. These are the core texts:",
      {table:[
        ["Document","Exact key wording"],
        ["[[unga-resolution-2758|UN General Assembly resolution 2758]] (25 October 1971)","Recognises the PRC government’s representatives as “the only legitimate representatives of China to the United Nations” and expels “the representatives of Chiang Kai-shek”; Taiwan is not mentioned"],
        ["Shanghai Communiqué, US–PRC (28 February 1972)","“The United States acknowledges that all Chinese on either side of the Taiwan Strait maintain there is but one China and that Taiwan is a part of China. The United States Government does not challenge that position.”"],
        ["Normalisation Communiqué (released 15 December 1978; relations from 1 January 1979)","The US “recognizes” the PRC government “as the sole legal Government of China”, will keep “unofficial relations with the people of Taiwan”, and “acknowledges the Chinese position that there is but one China and Taiwan is part of China”"],
        ["[[taiwan-relations-act|Taiwan Relations Act]], US law (10 April 1979)","Diplomatic ties with the PRC rest on “the expectation that the future of Taiwan will be determined by peaceful means”; the US will “provide Taiwan with arms of a defensive character” and maintain its capacity “to resist any resort to force or other forms of coercion”"],
        ["August 17 Communiqué (1982)","The US “intends gradually to reduce its sale of arms to Taiwan”, alongside China’s “fundamental policy of striving for peaceful reunification of the motherland”"],
        ["[[six-assurances|Six Assurances]] to Taipei (July 1982)","Among them: the US had not agreed to set a date for ending arms sales or to consult Beijing on them, and had not agreed “to take any position regarding sovereignty over Taiwan”"]
      ]},
      "The first three US–PRC texts are the [[three-communiques|Three Communiqués]]. Notice what “acknowledge” does: it records a position without endorsing it. The Chinese text of the 1979 communiqué renders it as 承认 (*chéngrèn*), a word that can also mean “recognise”, so scholars read the two languages side by side.",
      {fig:'<svg viewBox="0 0 340 452"><defs><marker id="e4u19l4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-rose" x="10" y="8" width="320" height="74" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">PRC: the one-China principle</text><text class="s" x="170" y="50" text-anchor="middle">One China; Taiwan is part of China;</text><text class="s" x="170" y="68" text-anchor="middle">the PRC government is its sole legal one</text><path class="d-ink" d="M170 84 L170 108" stroke-width="2" marker-end="url(#e4u19l4a)"/><text class="s" x="182" y="100">each partner picks a verb</text><rect class="d-soft" x="10" y="112" width="320" height="52" rx="8" stroke-width="2"/><text x="22" y="134">“acknowledges”, “does not challenge”</text><text class="s" x="22" y="154">United States, 1972 and 1979</text><rect class="d-soft" x="10" y="172" width="320" height="52" rx="8" stroke-width="2"/><text x="22" y="194">“fully understands and respects”</text><text class="s" x="22" y="214">Japan, 1972 Joint Communiqué</text><rect class="d-soft" x="10" y="232" width="320" height="52" rx="8" stroke-width="2"/><text x="22" y="254">“takes note of this position”</text><text class="s" x="22" y="274">Canada, 1970</text><rect class="d-gold" x="10" y="294" width="320" height="64" rx="8" stroke-width="2"/><text x="170" y="316" text-anchor="middle">= each one’s “one China policy”</text><text class="s" x="170" y="336" text-anchor="middle">Its own wording, not the PRC principle;</text><text class="s" x="170" y="352" text-anchor="middle">most keep unofficial ties with Taiwan</text><rect class="d-sage" x="10" y="370" width="320" height="74" rx="8" stroke-width="2"/><text x="170" y="392" text-anchor="middle">Taipei (President Lai, March 2025)</text><text class="s" x="170" y="412" text-anchor="middle">The ROC and the PRC “are not</text><text class="s" x="170" y="430" text-anchor="middle">subordinate to each other”</text></svg>', alt:"At the top, the PRC’s one-China principle: one China, Taiwan is part of China, and the PRC government is its sole legal government. An arrow leads to three boxes showing the verbs partners chose: the United States in 1972 and 1979, “acknowledges” and “does not challenge”; Japan in its 1972 Joint Communiqué, “fully understands and respects”; Canada in 1970, “takes note of this position”. A gold box says that each wording is that government’s own one China policy, not the PRC principle, and that most keep unofficial ties with Taiwan. A bottom box gives Taipei’s position: President Lai said in March 2025 that the ROC and the PRC are not subordinate to each other.", cap:"One principle, many policies: the verb each government chose is its position."}
    ]},
    {h:"Positions as of November 2026", body:[
      "**Beijing.** The PRC holds the [[one-china-principle|one-China principle]]. Its [[anti-secession-law|Anti-Secession Law]] (14 March 2005) states that “There is only one China in the world” and that, in certain circumstances, “the state shall employ non-peaceful means and other necessary measures”. It proposes [[one-country-two-systems|“one country, two systems”]], first applied to Hong Kong. Its 2022 white paper says: “We will work with the greatest sincerity and exert our utmost efforts to achieve peaceful reunification. But we will not renounce the use of force.” It asks Taipei to accept the [[1992-consensus|1992 Consensus]]. Since 2022 its forces have held large drills around Taiwan, several of them named, such as “Justice Mission 2025” in December 2025; Beijing describes them as warnings to “Taiwan independence” forces, and Taipei calls them provocations.",
      "**Taipei.** The government uses the name Republic of China (Taiwan). President Lai says the ROC and the PRC “are not subordinate to each other”, and in March 2025 he said China “satisfies the definition of a ‘foreign hostile force’” under Taiwan’s Anti-Infiltration Act. Parties differ: the KMT accepts the 1992 Consensus, reading it as “one China, respective interpretations”; the DPP does not accept it.",
      "**Washington.** The US [[one-china-policy|one China policy]] rests on the communiqués, the Taiwan Relations Act and the Six Assurances. On whether it would defend Taiwan, it practises [[strategic-ambiguity|strategic ambiguity]]; Richard Haass and David Sacks argued in 2020 for “strategic clarity”, and critics replied that clarity could provoke Beijing. Leaving Beijing after a state visit in May 2026, President Trump said that US policy was unchanged and told Fox News: “I’m not looking to have somebody go independent.” Taiwan’s foreign ministry replied that Taiwan is sovereign and independent, would maintain the status quo, and that US policy “remains unchanged”.",
      "**Others.** Japan “fully understands and respects” the PRC’s position (Unit 4: {{japan-and-neighbours}}; Unit 18 goes deeper); Canada “takes note” of it. As of mid-2026, 12 states recognised the ROC ({{cross-strait-relations}}).",
      {key:"Write “the PRC holds that…”, “Taipei states that…”, “the US acknowledges…”. “Reunification”, “unification”, “independence” and “status quo” each carry a position."}
    ]},
    {h:"Mongolia in brief", body:[
      "Mongolia, home to about 3.5 million people, is landlocked between Russia and China. After its 1921 revolution it became a Soviet-aligned People’s Republic. A peaceful democratic revolution in 1990 brought multiparty elections, and a new constitution followed in 1992.",
      "Its answer to geography is the [[third-neighbour-policy|“third neighbour” policy]]: balanced ties with both giants plus partnerships with distant democracies such as the United States, Japan, South Korea, India and European states. The phrase is traced to US Secretary of State James Baker, who called the United States a “third neighbor” on a visit in August 1990; a Foreign Policy Concept adopted in 1994 set out a “multi-pillared” approach. Mongolia also declared itself nuclear-weapon-free in 1992; in resolution 53/77 D (1998) the UN General Assembly “welcomes the declaration by Mongolia of its nuclear-weapon-free status”, and Mongolia’s parliament put the status into law in 2000. It was the third state to recognise North Korea and keeps ties with both Koreas.",
      "The limits are economic and physical: most of its exports, mainly coal and copper, go to China, and much of its fuel comes from Russia. When President Putin visited in September 2024, Mongolia did not arrest him under the International Criminal Court’s warrant; a government spokesperson pointed to the country’s dependence on Russian energy, and in October 2024 the Court found that Mongolia had failed to comply. Mongolia is a classic case for studying small-state [[strategic-hedging|hedging]].",
      {terms:["228-incident","silicon-shield","three-communiques","taiwan-relations-act","six-assurances","anti-secession-law","one-country-two-systems","1992-consensus","strategic-ambiguity","unga-resolution-2758","third-neighbour-policy","one-china-principle","one-china-policy"]}
    ]}
   ],
   try:[
    {id:"e4u19-l4-x1", type:"order", q:"Put these events in Taiwan’s history in chronological order.", items:[
      {t:"The Dutch East India Company establishes rule in the south.", why:"1624."},
      {t:"The Qing dynasty annexes the island.", why:"1683, after defeating the Zheng regime."},
      {t:"The Treaty of Shimonoseki cedes Taiwan to Japan.", why:"1895, after the Sino-Japanese War."},
      {t:"The 228 Incident and the crackdown that followed.", why:"February–March 1947, under ROC administration."},
      {t:"Martial law is lifted.", why:"15 July 1987."},
      {t:"The first direct presidential election.", why:"March 1996."},
      {t:"The first transfer of power between parties.", why:"2000: the DPP’s Chen Shui-bian succeeds the KMT."}
    ]},
    {id:"e4u19-l4-x2", type:"match", q:"Match each document to its key wording.", pairs:[
      ["UNGA resolution 2758 (1971)","“the only legitimate representatives of China to the United Nations”","It concerns China’s seat; it does not mention Taiwan."],
      ["Shanghai Communiqué (1972)","The US “does not challenge that position”","Paired with “acknowledges that all Chinese on either side of the Taiwan Strait maintain there is but one China”."],
      ["Taiwan Relations Act (1979)","“arms of a defensive character”","A US law, not an agreement with Beijing."],
      ["August 17 Communiqué (1982)","“intends gradually to reduce its sale of arms to Taiwan”","Linked to China’s “fundamental policy of striving for peaceful reunification”."],
      ["Six Assurances (1982)","Not agreed “to take any position regarding sovereignty over Taiwan”","Conveyed to Taipei in July 1982."]
    ]},
    {id:"e4u19-l4-x3", type:"mcq", q:"Fatima writes: “In 1979 the United States recognised that Taiwan is part of China.” What is the most accurate correction?", options:[
      {t:"The US recognised the PRC government as the sole legal government of China, and “acknowledges the Chinese position” that Taiwan is part of China", ok:true, why:"Right. “Recognizes” applies to the government; on Taiwan the English text uses “acknowledges”, which records a position without endorsing it."},
      {t:"The sentence is accurate as it stands", why:"It turns “acknowledges the Chinese position” into recognition of a fact, which the English text does not say."},
      {t:"The US recognised Taiwan as an independent state in 1979", why:"No: in 1979 the US ended diplomatic relations with the ROC and kept unofficial ties."},
      {t:"The US took no position on anything in 1979", why:"It recognised the PRC government and set out its wording on Taiwan; it simply did not adopt the PRC’s position as its own."}
    ]},
    {id:"e4u19-l4-x4", type:"sort", q:"Is each statement the PRC’s **one-China principle** or another government’s **one China policy**?", buckets:["One-China principle (PRC)","A one China policy (another government)"], items:[
      {t:"“There is only one China in the world.”", b:0, why:"Article 2 of the PRC’s Anti-Secession Law (2005)."},
      {t:"The US “acknowledges the Chinese position that there is but one China”.", b:1, why:"US wording: it records Beijing’s position without adopting it."},
      {t:"Canada “takes note of this position of the Chinese Government”.", b:1, why:"The 1970 Canadian formula."},
      {t:"Taiwan is part of China, and the PRC government is China’s sole legitimate government.", b:0, why:"The core of the PRC’s principle."},
      {t:"Japan “fully understands and respects” the PRC’s position.", b:1, why:"Japan’s 1972 wording."},
      {t:"The US will provide Taiwan with arms of a defensive character.", b:1, why:"Part of US policy under the Taiwan Relations Act."}
    ]},
    {id:"e4u19-l4-x5", type:"spot", q:"A briefing note on Taiwan. Tap the sentences that are **inaccurate**.", ask:"inaccurate", parts:[
      {t:"Resolution 2758 declared Taiwan a province of the PRC.", flag:true, why:"The resolution does not mention Taiwan; its meaning for Taiwan is disputed. Attribute each reading."}," ",
      {t:"The Taiwan Relations Act is a US law passed in 1979.", flag:false, why:"Accurate: Public Law 96-8, enacted on 10 April 1979."}," ",
      {t:"The Taiwan Relations Act commits US troops to defend Taiwan.", flag:true, why:"It provides for defensive arms and keeps US capacity to resist coercion; it does not commit forces, hence “strategic ambiguity”."}," ",
      {t:"President Lai says the ROC and the PRC are not subordinate to each other.", flag:false, why:"Accurate, attributed, with the words he uses."}," ",
      {t:"All of Taiwan’s main parties accept the 1992 Consensus.", flag:true, why:"The KMT accepts it as “one China, respective interpretations”; the DPP does not."}
    ]},
    {id:"e4u19-l4-x6", type:"mcq", q:"Which statement is a criticism of the “silicon shield” argument rather than a version of it?", options:[
      {t:"Dependence on Taiwan’s chips could cut both ways, and new plants abroad may reduce its weight", ok:true, why:"Right: critics question whether dependence deters, and whether it will last."},
      {t:"The world’s reliance on Taiwan’s advanced chips makes an attack too costly", why:"That is the silicon shield argument itself."},
      {t:"Other states have reasons to protect Taiwan because they rely on its foundries", why:"Also a version of the argument."},
      {t:"TSMC pioneered the foundry model in 1987", why:"A fact about the industry, not a criticism of the argument."}
    ]},
    {id:"e4u19-l4-x7", type:"mcq", q:"Which best describes Mongolia’s “third neighbour” policy?", options:[
      {t:"Balanced ties with Russia and China, plus partnerships with distant states such as the US, Japan, South Korea, India and European countries", ok:true, why:"Right: a way for a landlocked state to widen its options without picking a side."},
      {t:"An alliance with the United States against China and Russia", why:"Mongolia has no such alliance; balance with both neighbours is the first pillar."},
      {t:"A plan to join the Shanghai Cooperation Organisation as a full member", why:"Not what the term means."},
      {t:"Mongolia’s claim to territory in a third neighbouring state", why:"The policy concerns partnerships, not territory."}
    ]}
   ],
   apply:{
    intro:"Work with primary texts. The documents below are free on official sites, such as the American Institute in Taiwan’s pages of key documents and the UN Digital Library.",
    tasks:[
     {t:"Read the documents side by side", how:["Open the 1972, 1979 and 1982 US–PRC communiqués and the Taiwan Relations Act.","Copy the exact verb each uses about Taiwan’s status or arms sales.","Write one neutral paragraph explaining how “acknowledge”, “recognize” and “not challenge” differ."], write:"Document and verb… Document and verb… Document and verb… My paragraph…"},
     {t:"Three statements on one event", how:["Choose one recent cross-Strait event, such as a drill or a high-level visit.","Find statements on it from Beijing (for example the Taiwan Affairs Office or defence ministry), from Taipei (for example the Mainland Affairs Council) and from one other government.","List the words each uses for Taiwan, for the other side and for the event."], write:"Event and date… Beijing’s words… Taipei’s words… Third government’s words… What the vocabulary shows…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Does “strategic ambiguity” still serve stability in the Taiwan Strait, or has its time passed?","2. Does Taiwan’s semiconductor industry make it safer or more exposed?","3. What does Mongolia’s “third neighbour” policy teach about small states between great powers?"], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"The exact wording of four documents with a neutral explanatory paragraph, three governments’ statements on one event with their vocabulary, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"csy22", where:"Chapter 5 “Taiwan: Trouble in the First Island Chain”: “Semiconductors, Supply Chains, and the Fate of Taiwan” (Samuel George), “Buckle Up: Pelosi’s Visit and the Fourth Taiwan Strait Crisis” (Arthur Ding) and “Psyops and Cyberwar in Taiwan” (Lennon Chang)", note:"Three short essays on chips, the 2022 crisis and information warfare, written from Australia."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u19-l5", title:"Regional order, institutions and the politics of memory", minutes:65,
   hook:{q:"China, Japan and South Korea agreed to hold a three-way leaders’ summit every year. In how many years after 2012 has it actually met?", options:["Every year","About eight","Four","None"], answer:2, reveal:"**Four:** 2015, 2018, 2019 and 2024. The three economies are tightly linked, yet the summit keeps stalling over territory, security and the past. That gap between economic ties and political distance is the puzzle of this lesson: what kind of regional order East Asia has, what its institutions do, and why memory weighs so heavily."},
   goals:[
     "Compare balance-of-power, hierarchy and institutional pictures of the East Asian order, and the evidence each predicts",
     "Describe ASEAN Plus Three, the Chiang Mai Initiative and the trilateral China–Japan–Korea process, with their record as of November 2026",
     "Explain memory politics in the region using key concepts and works, attributing every position",
     "Compare East Asian regionalism with Europe’s without treating Europe as the norm",
     "Plan a seminar paper that compares regions"
   ],
   learn:[
    {h:"Three pictures of the regional order", body:[
      "Imagine three photographs of the same street. One shows rival shops eyeing each other; one shows a big store that the smaller ones follow; one shows shopkeepers chatting at a weekly meeting. East Asia’s order has been described in all three ways.",
      {table:[
        ["Picture","Key works","What it expects to see"],
        ["Balance of power","Aaron Friedberg, “Ripe for Rivalry” (*International Security*, 1993/94)","Arms races, alliances against a rising China, crises over territory"],
        ["Hierarchy","David Kang, “Getting Asia Wrong” (2003) and *China Rising* (2007); Evelyn Goh, *The Struggle for Order* (2013)","States accepting rank and accommodating the strongest, or a layered order with the United States still on top"],
        ["Institutions and norms","Amitav Acharya on the ASEAN way; T. J. Pempel (ed.), *Remapping East Asia* (2005)","Habits of consultation, overlapping forums, cooperation led by markets and networks"]
      ]},
      "Unit 2 set out the Kang–Acharya exchange ({{chinese-ir-theory}}) and Unit 12 the security architecture ({{asia-pacific-security-architecture}}). Here the question is which picture fits which evidence.",
      "One fact all three must explain is what scholars call the [[east-asian-peace|East Asian peace]]: since the Sino-Vietnamese war of 1979, battle deaths between East Asian states have fallen sharply and no full-scale interstate war has broken out, despite clashes and crises (Timo Kivimäki, *The Long Peace of East Asia*, 2014; Stein Tønnesson, *Explaining the East Asian Peace*, 2017). Realists credit US alliances and deterrence; liberals credit trade; Tønnesson stresses governments’ shared priority on economic development; constructivists credit regional norms. The same region also shows what is sometimes called the “Asia paradox”: deepening economic ties alongside persistent political and security tension.",
      {fig:'<svg viewBox="0 0 340 420"><rect class="d-soft" x="8" y="8" width="324" height="226" rx="10" stroke-width="2"/><text x="170" y="30" text-anchor="middle">East Asia Summit (from 2005)</text><text class="s" x="170" y="48" text-anchor="middle">+ Australia, India, New Zealand;</text><text class="s" x="170" y="64" text-anchor="middle">Russia and the United States from 2011</text><rect class="d-gold" x="24" y="76" width="292" height="146" rx="10" stroke-width="2"/><text x="170" y="98" text-anchor="middle">ASEAN Plus Three (from 1997)</text><text class="s" x="170" y="116" text-anchor="middle">+ China, Japan, South Korea</text><rect class="d-sage" x="44" y="130" width="252" height="80" rx="10" stroke-width="2"/><text x="170" y="160" text-anchor="middle">ASEAN members</text><text class="s" x="170" y="180" text-anchor="middle">Southeast Asian states:</text><text class="s" x="170" y="196" text-anchor="middle">the hub that convenes the others</text><rect class="d-rose" x="8" y="246" width="324" height="74" rx="10" stroke-width="2"/><text x="170" y="268" text-anchor="middle">China–Japan–South Korea</text><text class="s" x="170" y="288" text-anchor="middle">leaders’ summits from 2008;</text><text class="s" x="170" y="306" text-anchor="middle">secretariat in Seoul from 2011</text><rect class="d-panel" x="8" y="332" width="324" height="80" rx="10" stroke-width="2"/><text x="170" y="354" text-anchor="middle">RCEP trade agreement</text><text class="s" x="170" y="374" text-anchor="middle">Signed 2020 by the ten ASEAN members</text><text class="s" x="170" y="390" text-anchor="middle">of the time plus China, Japan, South</text><text class="s" x="170" y="406" text-anchor="middle">Korea, Australia and New Zealand</text></svg>', alt:"Nested boxes. The outer box is the East Asia Summit, from 2005, which adds Australia, India and New Zealand, and from 2011 Russia and the United States. Inside it is ASEAN Plus Three, from 1997, which adds China, Japan and South Korea. Inside that is ASEAN, the hub that convenes the others. Below, separate boxes show the China–Japan–South Korea process, with leaders’ summits from 2008 and a secretariat in Seoul from 2011, and the RCEP trade agreement, signed in 2020 by the ten ASEAN members of the time plus China, Japan, South Korea, Australia and New Zealand.", cap:"Overlapping circles, not one organisation: East Asia’s institutions nest and overlap."}
    ]},
    {h:"ASEAN Plus Three and the money question", body:[
      "The Asian financial crisis of 1997–98 (Unit 15) taught governments that they could be left alone with the IMF’s conditions. In December 1997 ASEAN leaders met their Chinese, Japanese and South Korean counterparts informally in Kuala Lumpur, and in 1999 a Joint Statement on East Asia Cooperation institutionalised [[asean-plus-three|ASEAN Plus Three]] (APT). An East Asia Vision Group reported in 2001 under the title “East Asia Community of Peace, Prosperity, and Progress”.",
      "Finance is APT’s most concrete product. The [[chiang-mai-initiative|Chiang Mai Initiative]] (May 2000) built a network of currency swaps; it was turned into a single multilateral arrangement (CMIM), now with a total size of US$240 billion. A surveillance office, AMRO, became an international organisation on 9 February 2016. The Asian Bond Markets Initiative (2003) and an emergency rice reserve (agreement signed in 2011) followed.",
      "Critics note that the swap facility has not been drawn on in a crisis (analysts at CSIS reported in 2020 that it had never been used): in 2008 South Korea turned instead to a swap line with the US Federal Reserve. Defenders reply that a backstop matters even unused, and that AMRO’s surveillance builds regional expertise.",
      "Membership itself was contested. When the East Asia Summit was launched in 2005, governments and analysts debated whether East Asian cooperation should centre on APT, an option China favoured, or on a wider group including India, Australia and New Zealand, which Japan backed. Both survived, side by side, a pattern scholars call overlapping or “nested” regionalism."
    ]},
    {h:"The trilateral process: interdependence without trust?", body:[
      "China, Japan and South Korea first met as three in November 1999, over breakfast at an APT summit in Manila. The first stand-alone leaders’ summit followed in December 2008, in Fukuoka, and a [[trilateral-cooperation-secretariat|Trilateral Cooperation Secretariat]] opened in Seoul in 2011. Regular ministerial meetings, from environment ministers since 1999 to trade and health, give the process a functional base. All three joined the RCEP agreement (signed 2020, in force from 2022), the first free-trade agreement to link them; talks on a separate three-way agreement, launched in 2012, have not concluded.",
      "Yet after 2012 the summit met only in 2015, 2018, 2019 and 2024. After the ninth summit (Seoul, May 2024) Japan became the next host. Tokyo sought a summit in early 2026, but after a dispute over remarks on Taiwan by Prime Minister Takaichi Sanae in November 2025, China’s foreign ministry said “conditions are not yet ready” and there was “no agreement on when to hold” it. As of November 2026 no tenth summit had been held. Muhui Zhang (*East Asia Forum*, August 2026) argues that the framework has “hollowed out”, while working-level and market links continue.",
      "Theory helps here. Neofunctionalists (Unit 9: {{comparative-regionalism}}) expected functional cooperation to spill over into politics; the trilateral record suggests spillback when security and memory disputes flare. Kent Calder and Min Ye (2004; *The Making of Northeast Asia*, 2010) called the region’s lack of strong institutions an “organization gap”, and traced it to critical junctures in which leaders chose not to build them."
    ]},
    {h:"History and memory politics", body:[
      "In East Asia the past is a live political issue. [[memory-politics|Memory politics]] is the study of how governments, movements and citizens use and contest accounts of the past: in textbooks, museums, anniversaries, apologies and court cases.",
      "Unit 4 introduced Japan’s [[history-problem|“history problem”]] with its neighbours ({{japan-and-neighbours}}), and Unit 18 covers Japan’s side of each relationship. This lesson adds the wider regional picture:",
      {list:[
        "**China.** Zheng Wang (*Never Forget National Humiliation*, 2012) shows how the [[century-of-humiliation|“century of humiliation”]] narrative and the [[patriotic-education|patriotic education]] campaign of the 1990s shaped identity and foreign policy; a Patriotic Education Law took effect on 1 January 2024. Since 2014, 13 December has been a national memorial day for the victims of the Nanjing Massacre.",
        "**China and Korea.** A Chinese state research project on the north-east (2002–07) prompted a dispute in 2004 over whether the ancient kingdom of Goguryeo (고구려) belongs to Chinese or Korean history.",
        "**Within societies.** South Korea’s debates over Gwangju (Lesson 3) and Taiwan’s over the 228 Incident and the White Terror show that memory divides societies as well as states; Taiwan passed a law on transitional justice in 2017."
      ]},
      "Several concepts help. Lim Jie-Hyun’s [[victimhood-nationalism|victimhood nationalism]] (2010) describes how nations compete to be recognised as victims, which can make it harder to acknowledge harms done by one’s own side. Jennifer Lind (*Sorry States*, 2008) argues that apologies can provoke domestic backlash that alarms neighbours, so remembrance that also honours a country’s own dead may reassure better than repeated apology; critics say she underrates victims’ demands for justice. Gi-Wook Shin and Daniel Sneider (*Divergent Memories*, 2016) compare how opinion leaders in China, Japan, South Korea and the United States remember the war, and why their memories diverge.",
      "Joint projects exist: scholars and teachers from the three countries published a common history reader in 2005, and Japan held joint history research with South Korea (2002–05 and 2007–10) and with China (2006–10). Their reports recorded disagreements as well as agreement, which is itself a finding.",
      {warn:"Attribute each claim about the past to its source and give scholarly consensus where it exists. Do not rank nations’ suffering or virtue."}
    ]},
    {h:"Comparing East Asia with Europe", body:[
      "Seminars often ask why East Asia has no EU. Comparison helps, as long as Europe is a point of reference, not the standard of success.",
      {table:[
        ["Feature","European Union","East Asia"],
        ["Institutions","Supranational: a Commission, a Court, pooled sovereignty","Intergovernmental and informal; secretariats are small"],
        ["Driver","Treaties made by states","Market-led regionalisation: production networks first, rules later (Pempel)"],
        ["Security","NATO, with most EU members inside it","US bilateral alliances (Unit 12) and ASEAN-led forums"],
        ["Membership","One union with clear borders","Overlapping groups: APT, EAS, RCEP, the trilateral process"],
        ["Reconciliation","Franco-German reconciliation after 1945","Disputes over history remain live"]
      ]},
      "Explanations differ. Christopher Hemmer and Peter Katzenstein (2002) stressed US choices and identity. Others point to huge differences in size and regime type, a power transition in progress, and unresolved territorial disputes. Acharya and other Global IR scholars (Unit 2) warn against the “EU as model” bias: the ASEAN way’s informality may suit the region, and lack of an EU is not proof of failure. Lind adds that the Franco-German model was not built on apology alone, but also on alliance and shared threat.",
      {ex:"Question: “Why has East Asia not built an EU?” 1) Define the outcome: which features of the EU are you comparing? 2) Choose two or three explanations (power, interdependence, identity, history). 3) Compare evidence across cases, perhaps adding ASEAN or Mercosur. 4) Say what the comparison cannot show.", label:"Worked example: a comparative paper"},
      {terms:["east-asian-peace","asean-plus-three","chiang-mai-initiative","trilateral-cooperation-secretariat","memory-politics","history-problem","century-of-humiliation","patriotic-education","victimhood-nationalism"]}
    ]}
   ],
   try:[
    {id:"e4u19-l5-x1", type:"sort", q:"Which picture of the regional order does each observation support best?", buckets:["Balance of power","Hierarchy","Institutions and norms"], items:[
      {t:"Neighbours of a rising China strengthen alliances and raise defence spending.", b:0, why:"Balancing against growing power."},
      {t:"Smaller states defer to the strongest state on issues it cares most about, in return for economic benefits.", b:1, why:"Accommodation of rank: Kang’s reading."},
      {t:"ASEAN convenes forums where rivals meet regularly and decisions are made by consensus.", b:2, why:"Habits of consultation: the ASEAN way."},
      {t:"An arms race develops between two neighbours after a territorial clash.", b:0, why:"Friedberg’s “ripe for rivalry” expectation."},
      {t:"Finance ministers build a swap network after a regional crisis.", b:2, why:"Institution-building to manage shared risks."}
    ]},
    {id:"e4u19-l5-x2", type:"order", q:"Put these steps in ASEAN Plus Three cooperation in order.", items:[
      {t:"ASEAN leaders meet their Chinese, Japanese and South Korean counterparts informally in Kuala Lumpur.", why:"December 1997, during the financial crisis."},
      {t:"The Joint Statement on East Asia Cooperation institutionalises the process.", why:"1999."},
      {t:"Finance ministers launch the Chiang Mai Initiative.", why:"May 2000."},
      {t:"The Asian Bond Markets Initiative begins.", why:"2003."},
      {t:"AMRO becomes an international organisation.", why:"9 February 2016."}
    ]},
    {id:"e4u19-l5-x3", type:"mcq", q:"Which statement about the China–Japan–South Korea summit is accurate as of November 2026?", options:[
      {t:"The last summit met in Seoul in May 2024; a tenth, to be hosted by Japan, had not been held, after China said conditions were “not yet ready”", ok:true, why:"Right, with the dates and China’s stated reason attributed."},
      {t:"The summit has met every year since 2008", why:"After 2012 it met only in 2015, 2018, 2019 and 2024."},
      {t:"The three governments formally dissolved the trilateral process in 2025", why:"No government has dissolved it; the secretariat in Seoul still exists."},
      {t:"The summit was replaced by RCEP", why:"RCEP is a trade agreement, not a replacement for leaders’ meetings."}
    ]},
    {id:"e4u19-l5-x4", type:"match", q:"Match each work or idea to its author.", pairs:[
      ["“Ripe for Rivalry” (1993/94)","Aaron Friedberg","He expected a multipolar Asia to be prone to conflict."],
      ["*Never Forget National Humiliation* (2012)","Zheng Wang","Historical memory in Chinese politics and foreign relations."],
      ["*Sorry States* (2008)","Jennifer Lind","Apologies, backlash and threat perception."],
      ["Victimhood nationalism","Lim Jie-Hyun","Nations competing to be recognised as victims."],
      ["*Remapping East Asia* (2005)","T. J. Pempel (ed.)","Region-building through markets and networks as well as states."]
    ]},
    {id:"e4u19-l5-x5", type:"mcq", q:"Hana argues: “Japan should simply apologise more often; that always improves relations.” Which response draws best on Lind’s work?", options:[
      {t:"Lind found that apologies can trigger domestic backlash that alarms neighbours, so the effect depends on politics at home as well as on the words", ok:true, why:"Right: her argument is about the domestic reaction to apologies, not their sincerity."},
      {t:"Lind found that apologies always make relations worse", why:"Too strong: she argues that contrition can help but can also provoke counterproductive backlash."},
      {t:"Lind argues that history plays no role in international relations", why:"Her book argues the opposite: remembrance shapes threat perception."},
      {t:"Lind’s work is about trade, not memory", why:"*Sorry States* is about apologies and memory."}
    ]},
    {id:"e4u19-l5-x6", type:"spot", q:"A student’s paragraph comparing regions. Tap the **problems**.", ask:"is a problem", parts:[
      {t:"East Asia has failed because it has no EU.", flag:true, why:"Treats Europe as the norm. Define the outcome you compare and avoid judging one region by another’s model."}," ",
      {t:"East Asian institutions are mostly intergovernmental, with small secretariats.", flag:false, why:"Accurate description."}," ",
      {t:"Chinese people all remember the war in the same way.", flag:true, why:"An overgeneralisation; memories differ within societies, as Shin and Sneider’s work shows."}," ",
      {t:"RCEP was the first free-trade agreement to link China, Japan and South Korea.", flag:false, why:"Accurate: signed 2020, in force from 2022."}," ",
      {t:"The Chiang Mai Initiative was the EU’s response to the 1997 crisis.", flag:true, why:"It was an ASEAN Plus Three initiative, launched in 2000."}
    ]},
    {id:"e4u19-l5-x7", type:"sort", q:"Is each feature more typical of the **EU** or of **East Asian regionalism**?", buckets:["EU","East Asia"], items:[
      {t:"A supranational court whose rulings bind members", b:0, why:"The Court of Justice of the EU."},
      {t:"Several overlapping groupings with different members", b:1, why:"APT, EAS, RCEP and the trilateral process overlap."},
      {t:"Production networks built by firms before formal rules", b:1, why:"Market-led regionalisation."},
      {t:"Pooled sovereignty in trade policy", b:0, why:"The EU negotiates trade as one."},
      {t:"Decisions by consensus in informal forums", b:1, why:"The ASEAN way shapes the wider region."}
    ]}
   ],
   apply:{
    intro:"Compare institutions and memories with free primary sources and scholarship.",
    tasks:[
     {t:"One anniversary, three accounts", how:["Choose an anniversary that matters in the region (for example 15 August, 1 October, 13 December, 1 March or 28 February).","Find how official sources or major media in two or three places marked it in a recent year.","Note which events, victims and heroes each account stresses or leaves out."], write:"Anniversary… Account 1… Account 2… Account 3… What each stresses… What each leaves out…"},
     {t:"Evaluate one regional institution", how:["Pick ASEAN Plus Three, the Chiang Mai Initiative (CMIM), AMRO or the Trilateral Cooperation Secretariat.","Read its official website: list its aims, members and recent activities.","Judge it against one criterion (for example, whether it has acted in a crisis) and note what a supporter would say."], write:"Institution… Aims… Members… Recent activities… My criterion and judgement… A supporter’s reply…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Is East Asia’s order better described by balance of power or by hierarchy?","2. Why has East Asia not built an EU, and is that the right question?","3. Can joint history projects reduce tension, or do they only record disagreement?"], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing how two or three places mark one anniversary, a short evaluation of one regional institution with a counter-view, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 15, section 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"A gentle textbook overview of regional organisations, to set beside this lesson’s comparison."},
    {book:"dbb", where:"Chapter 2, section 2 “Asia and Oceania”", note:"Japan’s government’s own account of its relations in the region in 2024: read it as one government’s position."}
   ]
  }
  ],
  checkpoint:["e4u19-q04","e4u19-q06","e4u19-q11","e4u19-q15","e4u19-q20","e4u19-q26","e4u19-q29","e4u19-q31","e4u19-q33","e4u19-q38","e4u19-q39","e4u19-q43"],
  codex:[
  {id:"chinese-party-state", title:"China’s party-state", aka:["Chinese Communist Party","CCP","CPC","party-state","Xi era"], tags:["China","politics","area studies"],
   summary:"How the Chinese Communist Party leads the state and the army, the institutions involved, and how power has been centralised since 2012.",
   levels:{
    starter:[
     "China is a **party-state**: one party, the Chinese Communist Party (CCP; officially the Communist Party of China, CPC), leads the government, the army and much of society.",
     "There are two ladders. The Party has its Congress every five years, a Central Committee, a Politburo and a Standing Committee of seven at the top. The state has the National People’s Congress (the legislature), the State Council (the cabinet) and local governments. The same people often sit on both ladders, and the Party ladder has the final say.",
     "The Party is huge: it reported about 101.29 million members at the end of 2025, in more than 5.43 million grassroots organisations.",
     {key:"In China, ask first which Party body decided something; the state body usually carries it out."}
    ],
    builder:[
     "**Principles.** Democratic centralism (discussion, then obedience); the nomenklatura system, in which Party organisation departments appoint officials; united front work with groups outside the Party.",
     "**The army.** The People’s Liberation Army is the Party’s army, commanded through the Central Military Commission.",
     "**Centralisation under Xi Jinping** (General Secretary since November 2012, President since March 2013): an anti-corruption campaign; Xi named the Party’s “core” (2016); Xi Jinping Thought in the Party constitution (2017); the presidential term limit removed (March 2018); a 2021 history resolution; a third term as General Secretary (October 2022); purges reaching the top of the military, including an investigation into Central Military Commission vice-chair Zhang Youxia announced in January 2026.",
     "**Plans and laws.** The National People’s Congress approved the 15th Five-Year Plan (2026–30) in March 2026."
    ],
    pro:[
     "**Explaining the system.** Fragmented authoritarianism (Lieberthal & Oksenberg 1988; Mertha 2009) stresses bargaining among bureaucracies; authoritarian resilience (Nathan 2003) stresses institutionalisation; experimentation under hierarchy (Heilmann 2008) stresses local pilots; Pei (2006) stresses decay; Shambaugh (2008) adaptation.",
     "**The Xi era debate.** Shirk (2018, 2022) sees a return to personalistic rule with higher risk of policy error; Fewsmith (2021) argues the reform-era institutionalisation was always shallower than it looked.",
     "**Promotion.** Li & Zhou (2005) found growth helped provincial leaders get promoted; Shih, Adolph & Liu (2012) found factional ties mattered more at the top.",
     {warn:"Avoid teleology (judging China only by whether it is “moving towards” democracy) and avoid “China thinks”: say which body or person holds a view."}
    ]
   },
   related:["studying-china","china-foreign-policy-evolution","power-authority"],
   read:[{book:"csy22", where:"“Focus: The Twentieth Party Congress”"}],
   sources:[{t:"CGTN (Xinhua), “CPC membership reaches 101.286 mln”, 30 June 2026", url:"https://news.cgtn.com/news/2026-06-30/CPC-membership-reaches-101-286-mln-1OoiX3xQAog/p.html"},{t:"ANU Press, The China Story Yearbook: Chains (2023)", url:"https://press.anu.edu.au/publications/series/china-story-yearbook/chains"}],
   checked:"2026-11"},

  {id:"studying-china", title:"Studying China: sources, methods and ethics", aka:["China studies methods","tifa","researching China"], tags:["China","methods","ethics"],
   summary:"The evidence scholars use to study Chinese politics (official texts, statistics, online data, fieldwork, archives), their weaknesses, and the ethics of research under constraints.",
   levels:{
    starter:[
     "China is studied from many sources, and each tells you something different. Official speeches and reports tell you what the leadership wants to be heard saying. Statistics give numbers whose accuracy is debated. Social media show what people post, and what censors delete. Interviews and archives give depth, but access has narrowed.",
     "Good research combines several kinds of evidence and checks one against another.",
     {key:"Read official texts as statements of position, not as descriptions of what happened."}
    ],
    builder:[
     "**Formulations (tifa).** Changes in standard phrases are signals: the market’s role went from “basic” (1992) to “decisive” (2013). Track wording, but test whether policy followed.",
     "**Statistics.** Chen, Chen, Hsieh and Song (Brookings, 2019) estimated that official figures overstated growth in 2008–16; Martinez (2022) used night-time lights to show that autocracies tend to inflate growth. Triangulate with electricity use, satellite data or firm data.",
     "**Online data.** King, Pan and Roberts (2013) found that censors removed posts with collective-action potential more than criticism of the state.",
     "**Access.** Greitens and Truex (*The China Quarterly*, 2020) surveyed 562 China scholars: about 9 per cent had been “invited to tea” by the authorities, 26 per cent of archive users had been denied access, and around 70 per cent saw self-censorship as a problem in the field."
    ],
    pro:[
     "**Positionality.** Who you are affects what access you get and what people tell you. Chinese, diaspora and foreign researchers face different risks.",
     "**Ethics.** Do no harm: anonymise interviewees, secure notes, do not push people to say what is unsafe, and consider whether publishing a detail could identify someone. Unit 3’s rules apply ({{fieldwork-ethics}}, {{elite-interviews}}).",
     "**Remote methods.** Text-as-data, satellite imagery, procurement and court records, and comparative designs allow research without fieldwork, each with its own selection biases.",
     {tip:"State your scope conditions: a finding about provincial officials may not hold for the Politburo."}
    ]
   },
   related:["chinese-party-state","fieldwork-ethics","elite-interviews","discourse-analysis"],
   sources:[{t:"Greitens & Truex, “Repressive Experiences among China Scholars: New Evidence from Survey Data”, The China Quarterly 242 (2020)", url:"https://www.cambridge.org/core/product/C1CB08324457ED90199C274CDC153127"}],
   checked:"2026-11"},

  {id:"china-foreign-policy-evolution", title:"China’s foreign policy from Mao to Xi", aka:["taoguang yanghui","major-country diplomacy","peaceful rise","Global Development Initiative","Global Security Initiative","Global Civilization Initiative","Global Governance Initiative"], tags:["China","foreign policy","Asia-Pacific"],
   summary:"The official formulations that mark China’s foreign policy from the 1950s to the 2020s, the four global initiatives, and the explanations scholars give for change.",
   levels:{
    starter:[
     "China’s leaders announce changes of course with slogans. In the 1950s: the Five Principles of Peaceful Coexistence. From 1978: diplomacy serving economic growth. Around 1990: *tāoguāng yǎnghuì* (韬光养晦), usually translated “keep a low profile”. In 2003: “peaceful rise”, soon “peaceful development”. Under Xi Jinping: “striving for achievement” and “major-country diplomacy with Chinese characteristics”.",
     "Since 2021 Beijing has proposed four global initiatives: on development (2021), security (2022), civilisation (2023) and governance (2025).",
     {key:"A slogan shows intent; behaviour must be checked separately."}
    ],
    builder:[
     {table:[["Initiative","First proposed"],["Global Development Initiative","UN General Assembly, September 2021"],["Global Security Initiative","Boao Forum, April 2022 (concept paper February 2023)"],["Global Civilization Initiative","Beijing, March 2023"],["Global Governance Initiative","“SCO Plus” meeting, Tianjin, 1 September 2025"]]},
     "The Global Governance Initiative’s five points, in Xi’s words: “adhere to sovereign equality”, “abide by international rule of law”, “practice multilateralism”, “advocate the people-centered approach” and “focus on taking real actions”.",
     "China’s government presents the initiatives as support for the UN Charter and the Global South. Critics in some Western governments and think tanks argue that they put state sovereignty above universal human rights."
    ],
    pro:[
     "**Explaining change.** Power-based accounts (realism); domestic politics (Weiss, *Powerful Patriots*, 2014; Shirk, *Overreach*, 2022); grand strategy (Doshi, *The Long Game*, 2021) and its critics.",
     "**Variation by issue.** Fravel (*Strong Borders, Secure Nation*, 2008) found compromise in most land border disputes but rarely over offshore islands; maritime claims have since been asserted strongly. Weiss and Wallace (2021) describe selective engagement with the liberal international order.",
     "**Translation is political.** “Hide your capabilities and bide your time” versus “keep a low profile” implies different intentions; flag your choice.",
     "**Style.** “Wolf warrior” diplomacy (from about 2019) and its later softening are debated as signs of domestic signalling."
    ]
   },
   related:["belt-and-road-initiative","china-rise-debate","chinese-ir-theory","chinese-party-state"],
   sources:[{t:"Statement by Xi Jinping at the “Shanghai Cooperation Organization Plus” Meeting, Tianjin, 1 September 2025 (full text)", url:"https://www.unachina.org/en/article/1138"}],
   checked:"2026-11"},

  {id:"belt-and-road-initiative", title:"The Belt and Road Initiative", aka:["BRI","One Belt One Road","一带一路","Yídài Yílù","Silk Road Economic Belt","21st-Century Maritime Silk Road"], tags:["China","development","geoeconomics"],
   summary:"China’s infrastructure and connectivity initiative since 2013, how scholars read it (grand strategy or fragmented interests), and how host countries shape it.",
   levels:{
    starter:[
     "In 2013 Xi Jinping proposed a “Silk Road Economic Belt” (in Kazakhstan, September) and a “21st-Century Maritime Silk Road” (in Indonesia, October). Together they became the Belt and Road Initiative: loans, investment and construction for railways, ports, power plants and more, across Asia, Africa, Europe, Latin America and the Pacific.",
     "Beijing has hosted three Belt and Road Forums (2017, 2019, 2023), and the initiative was written into the Party constitution in 2017.",
     {key:"The BRI is a label over many projects and actors, not a single organisation with members."}
    ],
    builder:[
     "**Two readings.** As grand strategy, it binds partners to China through infrastructure, finance and standards. As a fragmented, demand-driven label, state firms, provinces and banks chase their own interests, and host governments propose many projects (Jones and Hameiri, *Fractured China*, 2021).",
     "**Host agency.** Laos’s railway to China (opened December 2021) and Indonesia’s Jakarta–Bandung high-speed line (opened October 2023) are presented by host governments as their own development choices; critics at home question cost and terms.",
     "**Membership counts vary.** China’s government reported more than 150 countries with cooperation documents in 2023; Italy, the only G7 member to sign (2019), announced its exit in December 2023.",
     "**Not the same as the AIIB**, a multilateral bank (operating since 2016) with its own rules."
    ],
    pro:[
     "**Debt.** The “debt-trap” debate and AidData’s evidence belong to Unit 15 ({{china-overseas-lending}}).",
     "**Research design.** Study the host country’s politics as closely as China’s: who proposed the project, who negotiated the loan, how the contract was enforced. Comparative cases across hosts can separate Chinese strategy from local demand.",
     "**Sources.** The official Belt and Road Portal states Beijing’s view; project databases and host-government documents add others."
    ]
   },
   related:["china-foreign-policy-evolution","china-overseas-lending","geoeconomics"],
   sources:[{t:"Belt and Road Portal (official website, Office of the Leading Group for Promoting the Belt and Road Initiative)", url:"https://eng.yidaiyilu.gov.cn/"}],
   checked:"2026-11"},

  {id:"china-rise-debate", title:"The debate about China’s rise", aka:["power transition","Thucydides’s Trap","status quo power","revisionism"], tags:["China","theory","great powers"],
   summary:"Whether China’s rise makes conflict likely: power transition theory and Allison’s “Thucydides’s Trap”, Mearsheimer’s offensive realism, Johnston’s status quo argument, Ikenberry’s order argument, and Kang’s hierarchy.",
   levels:{
    starter:[
     "When a rising power catches up with the leading one, is war likely? Power transition theory (Organski, 1958) says danger peaks when a dissatisfied challenger nears the leader. Graham Allison’s “Thucydides’s Trap” (*Destined for War*, 2017) counted 16 cases of a rising power challenging a ruling one over 500 years, 12 of which ended in war.",
     "Others disagree: China may not be dissatisfied, the order may be easy to join, or East Asian history may follow different rules.",
     {key:"The debate is about what evidence would show a rising power is dissatisfied, and what makes transitions peaceful."}
    ],
    builder:[
     {table:[["View","Claim"],["Allison (2017)","Structural stress makes war a serious risk; statecraft can avert it, as in four of his cases"],["Mearsheimer (2001, 2014 ed.)","A rising China will seek regional hegemony whatever its intentions"],["Johnston (2003)","By the early 2000s China behaved largely as a status quo power in institutions"],["Ikenberry (2008)","The Western-led order is hard to overturn and easy to join"],["Kang; Ma & Kang (2024)","Shared understandings of status, not power shifts, kept historic East Asia stable"]]},
     "Chinese officials reject the “Thucydides” framing and say China does not seek hegemony."
    ],
    pro:[
     "**Case selection.** Critics argue that some of Allison’s cases were not power transitions and that peaceful transitions are under-counted.",
     "**Measuring dissatisfaction.** Johnston measured participation and compliance; others look at rhetoric, military build-up or new institutions (AIIB, global initiatives). Each measure can point a different way.",
     "**Beyond the dyad.** Smaller states’ choices (balancing, hedging, accommodation) are evidence too; Kang and Acharya read them differently."
    ]
   },
   related:["david-kang","china-foreign-policy-evolution","john-mearsheimer","chinese-ir-theory"],
   sources:[{t:"Belfer Center, “Thucydides’s Trap” project overview", url:"https://www.belfercenter.org/thucydides-trap/overview-thucydides-trap"},{t:"Stanford APARC, Ma & Kang, Beyond Power Transitions (Columbia University Press, 2024)", url:"https://aparc.fsi.stanford.edu/japan/publication/beyond-power-transitions"}],
   checked:"2026-11"},

  {id:"david-kang", title:"David C. Kang", aka:["David Kang","hierarchy in East Asia","tribute system"], tags:["thinker","East Asia","theory"],
   summary:"Scholar of East Asian international relations who argues that hierarchy, not anarchy and balance, characterised the historic region and helps explain it today.",
   levels:{
    starter:[
     "David C. Kang is a political scientist at the University of Southern California, where he is Maria Crutcher Professor of International Relations and directs the Korean Studies Institute.",
     "His big idea: Europe’s story of rival equal states balancing each other is the wrong template for East Asia. For centuries the region was a **hierarchy** centred on China, organised through the tribute system, with relatively few wars among China, Korea, Vietnam and Japan.",
     {key:"Kang asks whether today’s neighbours of China are balancing it or accommodating it."}
    ],
    builder:[
     "**Key works.** *Crony Capitalism* (2002) on corruption and development in South Korea and the Philippines; “Getting Asia Wrong” (*International Security*, 2003); *China Rising* (2007), arguing that East Asian states were accommodating rather than balancing China; *East Asia Before the West* (2010), on five centuries of the tribute system; with Xinru Ma, *Beyond Power Transitions* (2024), arguing that shared understandings of status kept East Asia stable despite large power gaps and that instability came mostly from domestic challenges.",
     "**How he is used.** In debates on China’s rise, on hierarchy in IR, and on Global IR’s call to theorise from non-Western history."
    ],
    pro:[
     "**Critics.** Acharya (2003) and many Southeast Asianists see hedging and ASEAN-centred norms rather than acceptance of hierarchy. Wang Yuan-kang (*Harmony and War*, 2011) argues that Confucian dynasties used force when strong. Ji-Young Lee (*China’s Hegemony*, 2016) shows neighbours using the tribute order for domestic ends. Others question how far a pre-modern order can guide predictions about modern states with nationalism and nuclear weapons.",
     "**Legacy.** Kang helped make hierarchy a mainstream topic in IR theory and put East Asian history into debates once dominated by European cases."
    ]
   },
   related:["china-rise-debate","east-asian-regionalism","chinese-ir-theory"],
   sources:[{t:"Stanford APARC, Beyond Power Transitions (author note on David Kang)", url:"https://aparc.fsi.stanford.edu/japan/publication/beyond-power-transitions"}],
   checked:"2026-11"},

  {id:"south-korea-democratisation", title:"South Korea: development and democratisation", aka:["Republic of Korea","Park Chung-hee","June Democratic Struggle","Gwangju","chaebol"], tags:["Korea","democratisation","development"],
   summary:"South Korea’s path from military rule and state-led industrialisation to a democracy that has survived presidential crises, including the martial law episode of 2024–25.",
   levels:{
    starter:[
     "After the Korean War, South Korea was poor and ruled by strongmen. From the 1960s General Park Chung-hee drove rapid industrialisation with big family firms, the chaebol. In 1980 the military crushed the Gwangju Uprising. In June 1987 mass protests forced direct presidential elections, and democracy has lasted since.",
     "In December 2024 President Yoon Suk Yeol declared martial law; the National Assembly overturned it within hours and impeached him, and the Constitutional Court removed him in April 2025.",
     {key:"South Korea is a classic case for debates on whether development needs authoritarian rule, and on how democracies withstand crises."}
    ],
    builder:[
     "**Dates.** Coup, May 1961; Park assassinated, October 1979; Chun Doo-hwan’s military coup, December 1979, and the Gwangju Uprising, May 1980; June Democratic Struggle and the June 29 Declaration, 1987; new constitution with a single five-year presidential term, October 1987; Kim Dae-jung’s election, December 1997, the first transfer to the opposition.",
     "**Accountability.** Former presidents Chun and Roh Tae-woo were convicted in 1996; Park Geun-hye was removed by the Constitutional Court in 2017; Yoon was impeached on 14 December 2024 and removed by a unanimous 8–0 ruling on 4 April 2025. Lee Jae-myung took office in June 2025.",
     "**Development.** Amsden (1989) and the developmental-state school (Unit 14: {{developmental-state-debate}})."
    ],
    pro:[
     "**Causes of democratisation.** Middle-class and student mobilisation, labour, churches, elite splits, US pressure and the 1988 Olympics. Scholars weigh structure (growth produced a civil society) against agency (movement strategy, regime miscalculation).",
     "**Development and authoritarianism.** Kang (*Crony Capitalism*, 2002) showed collusion between state and chaebol alongside growth, complicating the “clean developmental state” image.",
     "**Memory.** Gwangju remains contested in politics and culture; treat it as both history and memory politics."
    ]
   },
   related:["inter-korean-relations","developmental-state-debate","korean-wave"],
   sources:[{t:"NBC News, “South Korean court upholds President Yoon Suk Yeol’s impeachment over martial law order”, 4 April 2025", url:"https://www.nbcnews.com/news/world/south-korean-court-upholds-yoon-impeachment-martial-law-rcna197213"}],
   checked:"2026-11"},

  {id:"north-korean-political-system", title:"North Korea’s political system", aka:["DPRK","Juche","Songun","Byungjin","Workers’ Party of Korea","Kim dynasty"], tags:["Korea","politics","area studies"],
   summary:"The Democratic People’s Republic of Korea’s family leadership, party, ideology and economy, and how scholars study a closed state.",
   levels:{
    starter:[
     "North Korea (the DPRK) has been ruled by three generations of one family: Kim Il Sung (1948–94), Kim Jong Il (1994–2011) and Kim Jong Un (since December 2011), through the Workers’ Party of Korea, the army and the state.",
     "Its ideology is *Juche* (주체, self-reliance). Kim Jong Il stressed *Songun* (military first); Kim Jong Un announced *Byungjin* (nuclear weapons and the economy together) in 2013.",
     {key:"Official ideology is real as a guide to what the state says; markets and trade data tell you how people actually live."}
    ],
    builder:[
     "**Famine and markets.** The famine of the mid-1990s, which the state called the “Arduous March”, killed an estimated 600,000 to one million people (Haggard and Noland, 2007). Markets (*jangmadang*) became essential to survival (Lankov, *The Real North Korea*, 2013).",
     "**Human rights.** A UN Commission of Inquiry reported in 2014 that crimes against humanity had been committed; the government rejected the report.",
     "**2026.** The Ninth Party Congress, which ended on 25 February 2026, re-elected Kim as General Secretary. A constitution revised in March 2026 drops unification and one-nation wording (38 North, May 2026)."
    ],
    pro:[
     "**Sources and their biases.** KCNA and *Rodong Sinmun* give the official line; defector testimony is rich but self-selected; satellite imagery (38 North and others) and trading partners’ customs data (mirror statistics) offer checks.",
     "**Debates.** Is the regime best seen as personalist, as a party-state, or as a hybrid “military-first” state? How resilient is it, given repeated predictions of collapse since the 1990s?",
     {warn:"Avoid both caricature and apology. Attribute claims, give dates and sources."}
    ]
   },
   related:["north-korea-nuclear-programme","inter-korean-relations","korean-peninsula-security"],
   sources:[{t:"38 North, “Paving the Way for Hostile Coexistence? What North Korea’s Constitutional Revisions Mean for Inter-Korean Ties”, May 2026", url:"https://www.38north.org/2026/05/paving-the-way-for-hostile-coexistence-what-north-koreas-constitutional-revisions-mean-for-inter-korean-ties/"},{t:"Arab News (Reuters), “North Korea’s Kim promises more nuclear weapons as Congress closes with military parade”, 26 February 2026", url:"https://www.arabnews.pk/node/2634488/world"}],
   checked:"2026-11"},

  {id:"north-korea-nuclear-programme", title:"North Korea’s nuclear programme", aka:["DPRK nuclear weapons","Agreed Framework","Six-Party Talks"], tags:["Korea","nuclear weapons","security"],
   summary:"From NPT membership to a declared nuclear-armed state: the Agreed Framework, withdrawal from the NPT, six tests, and the explanations scholars give.",
   levels:{
    starter:[
     "North Korea joined the NPT in 1985. A crisis in 1993–94 ended in the Agreed Framework (October 1994), which froze its plutonium programme. That deal collapsed in 2002; in January 2003 the North announced its withdrawal from the NPT.",
     "It carried out six nuclear tests between 2006 and 2017 and tested intercontinental ballistic missiles from 2017. SIPRI estimated in June 2026 that it had possibly assembled around 60 warheads, with fissile material for at least 30 more.",
     {key:"North Korea says its nuclear status is irreversible; the US, Japan and South Korea state that their goal remains denuclearisation."}
    ],
    builder:[
     "**Diplomacy.** The Six-Party Talks (2003–09), the Singapore (2018) and Hanoi (2019) summits produced statements but no lasting deal (Unit 12: {{korean-peninsula-security}}).",
     "**Law and doctrine.** A 2022 law on nuclear policy; a 2023 constitutional amendment on its nuclear forces. At the Ninth Party Congress (February 2026) Kim pledged to “further expand and strengthen our national nuclear power”.",
     "**Outside powers.** China backed UN sanctions resolutions from 2006 to 2017 but argues that sanctions alone cannot solve the issue. Russia and the DPRK signed a treaty with a mutual assistance clause in June 2024; in 2024 a Russian veto ended the UN sanctions panel’s mandate."
    ],
    pro:[
     "**Sagan’s three models** (1996/97): security (deterrence against the United States; lessons drawn from Iraq and Libya), domestic politics (legitimacy, elite coalitions), norms and status (prestige, recognition).",
     "**Policy implications.** Each model points to different tools: security guarantees, regime incentives or arms-control talks that accept some status. Critics of each warn of moral hazard or of legitimising proliferation.",
     "**Estimates.** SIPRI’s figures are estimates with stated uncertainty; cite the year and the method."
    ]
   },
   related:["north-korean-political-system","npt-regime","korean-peninsula-security","nuclear-deterrence-debate"],
   read:[{book:"sipri26", where:"Chapter 8 “World nuclear forces” (free download)"}],
   sources:[{t:"SIPRI press release, “Increasing focus on nuclear weapons amid heightened escalation risks: New SIPRI Yearbook out now”, 8 June 2026", url:"https://www.sipri.org/media/press-release/2026/increasing-focus-nuclear-weapons-amid-heightened-escalation-risks-new-sipri-yearbook-out-now"}],
   checked:"2026-11"},

  {id:"inter-korean-relations", title:"Inter-Korean relations", aka:["Sunshine Policy","Basic Agreement","two hostile states","unification","Kaesong"], tags:["Korea","diplomacy","as of 2026"],
   summary:"From the 1972 Joint Statement and the 1991 Basic Agreement to the Sunshine Policy, the 2018 summits and the “two states” turn on both sides, as of November 2026.",
   levels:{
    starter:[
     "For decades both Koreas said they sought unification. In 1991 they joined the UN on the same day and signed a Basic Agreement calling their relationship “not being a relationship between states” but a special interim one on the way to reunification.",
     "Since December 2023 North Korea has described the Koreas as “two states hostile to each other”. South Korea’s government under President Lee Jae-myung speaks of peaceful coexistence and a “peace-oriented two-state relationship” while still aiming for unification.",
     {key:"Quote each government’s words, with the date: “unification”, “two states” and “hostile” are positions."}
    ],
    builder:[
     "**Engagement.** Joint Statement (4 July 1972); Basic Agreement (signed December 1991, in force February 1992); the Sunshine Policy and the first summit (June 2000); the Kaesong Industrial Complex (until 2016); three summits in 2018, including the Panmunjom Declaration (27 April).",
     "**Tension.** The *Cheonan* sinking and Yeonpyeong shelling (2010); the destruction of the joint liaison office (June 2020); the abolition of the North’s unification agencies (2024).",
     "**2026.** At its Ninth Party Congress the North called the South the “most hostile enemy”. Its constitution, revised in March 2026, drops unification wording and describes the DPRK as bordering “the ROK” to the south. Seoul announced a five-year basic plan in March 2026 and a white paper in May 2026 that rules out “unification by absorption”."
    ],
    pro:[
     "**Domestic debate in the South.** Critics argue that “two-state” language breaks with the special relationship and sits uneasily with Article 3 of the Constitution, which defines the territory as “the Korean peninsula and its adjacent islands”; supporters say it reflects reality and lowers risk.",
     "**Theory.** Ontological security and identity (what “one nation” means), commitment problems, and the role of great powers all feature in explanations.",
     {warn:"Positions change quickly; check the latest statements from the Ministry of Unification and from KCNA (as quoted by international agencies)."}
    ]
   },
   related:["north-korean-political-system","south-korea-democratisation","korean-peninsula-security"],
   sources:[{t:"The Korea Times, “Unification white paper pivots to peaceful ‘two-state’ coexistence with N. Korea”, 18 May 2026", url:"https://www.koreatimes.co.kr/amp/foreignaffairs/northkorea/20260518/unification-white-paper-pivots-to-peaceful-two-state-coexistence-with-n-korea"},{t:"Korea JoongAng Daily, “Unification Ministry aims for peaceful coexistence with North under 5-year vision for inter-Korean ties”, 19 March 2026", url:"https://www.koreajoongangdaily.com/korea/unification-ministry-aims-for-peaceful-coexistence-with-north-under-5year-vision-for-interkorean-ties/12521459"},{t:"38 North, North Korea’s constitutional revisions, May 2026", url:"https://www.38north.org/2026/05/paving-the-way-for-hostile-coexistence-what-north-koreas-constitutional-revisions-mean-for-inter-korean-ties/"}],
   checked:"2026-11"},

  {id:"bruce-cumings", title:"Bruce Cumings", aka:["Origins of the Korean War","revisionist history of the Korean War"], tags:["thinker","Korea","history"],
   summary:"Historian of modern Korea and US–East Asian relations, best known for arguing that the Korean War had deep civil-war roots after 1945.",
   levels:{
    starter:[
     "Bruce Cumings is a US historian of Korea and East Asia, now Swift Distinguished Service Professor Emeritus of History at the University of Chicago.",
     "His big idea: the Korean War did not simply begin with a Soviet-ordered invasion in June 1950. It grew out of a Korean civil conflict after liberation from Japan in 1945, over collaboration, land and revolution, which outside powers then shaped.",
     {key:"Cumings shifted attention from Moscow and Washington to Koreans themselves."}
    ],
    builder:[
     "**Key works.** *The Origins of the Korean War* (vol. 1, 1981; vol. 2, 1990, Princeton University Press); *Korea’s Place in the Sun: A Modern History* (1997); *Parallax Visions* (1999); *North Korea: Another Country* (2004); *Dominion from Sea to Sea* (2009), on American power in the Pacific.",
     "**How he is used.** As the leading “revisionist” in the historiography of the Korean War, and as a critic of US policy in East Asia."
    ],
    pro:[
     "**Archives and critics.** Soviet documents released in the 1990s and studied by Kathryn Weathersby and others showed that Stalin approved Kim Il Sung’s plan to attack in 1950. Critics argued that this undercut revisionism; Cumings and others replied that the civil-war context still explains why war came. Most historians now combine both.",
     "**Legacy.** His work made Korean agency and the 1945–50 period central to the field, and sharpened debates about US policy; critics see a tendency to understate the North’s responsibility."
    ]
   },
   related:["cold-war-in-asia","korean-peninsula-security","inter-korean-relations"],
   sources:[{t:"University of Chicago, Department of History: Bruce Cumings", url:"https://history.uchicago.edu/directory/bruce-cumings"}],
   checked:"2026-11"},

  {id:"taiwan-history-democracy", title:"Taiwan: history, democracy and economy", aka:["Republic of China (Taiwan)","228 Incident","martial law","TSMC","silicon shield"], tags:["Taiwan","democratisation","area studies"],
   summary:"Taiwan’s layered history, its gradual democratisation, changing identities, and its semiconductor-centred economy.",
   levels:{
    starter:[
     "Taiwan’s history has many layers: Indigenous Austronesian peoples; Dutch rule (from 1624); the Zheng regime (from 1662); the Qing (from 1683); Japanese colonial rule (1895–1945); and the Republic of China, whose government moved to Taipei in 1949.",
     "Under martial law (1949–87) political opposition was suppressed. Democratisation followed: the opposition DPP was founded in 1986, martial law ended in 1987, the first direct presidential election was held in 1996 and power first changed hands between parties in 2000.",
     {key:"Which layer of history a speaker emphasises often signals a political position."}
    ],
    builder:[
     "**The 228 Incident** (February 1947): an uprising against the new ROC administration and a crackdown in which thousands were killed (a government-appointed commission set up in 1992 estimated 18,000 to 28,000; other estimates are lower); remembrance and transitional justice became central to democratic politics (a transitional justice law was passed in 2017).",
     "**Identity.** The Election Study Center of National Chengchi University has tracked self-identification since 1992; the share calling themselves “Taiwanese” only rose from under a fifth (1992) to a majority from 2009 onwards, while most respondents prefer some form of the status quo.",
     "**Chips.** The state-backed Industrial Technology Research Institute (1973), the Hsinchu Science Park (1980) and TSMC (1987) built a foundry industry that now makes most of the world’s most advanced logic chips."
    ],
    pro:[
     "**Explaining democratisation.** Elite choice from above (Chiang Ching-kuo, Lee Teng-hui) combined with opposition mobilisation; scholars weigh both.",
     "**Silicon shield.** Addison’s argument (2001) that chip dependence deters attack; critics say it may cut both ways and thin as production spreads abroad.",
     "**Divided government.** After 2024 the KMT and the Taiwan People’s Party together held a legislative majority against President Lai’s DPP, a reminder that “Taiwan’s position” on many issues is contested at home."
    ]
   },
   related:["taiwan-status-documents","cross-strait-relations","developmental-state-debate"],
   sources:[{t:"Election Study Center, National Chengchi University: Taiwanese/Chinese identity trend (1992–2026/06)", url:"https://esc.nccu.edu.tw/PageDoc/Detail?fid=7800&id=6961"},{t:"Office of the President (Taiwan), President Lai’s press conference, 13 March 2025", url:"https://english.president.gov.tw/NEWS/6919"}],
   checked:"2026-11"},

  {id:"taiwan-status-documents", title:"Taiwan’s status: the key documents and positions", aka:["Three Communiqués","Taiwan Relations Act","Six Assurances","UNGA 2758","one-China principle","one China policy","Anti-Secession Law","1992 Consensus"], tags:["Taiwan","international law","diplomacy","as of 2026"],
   summary:"The exact wording of the documents that frame the Taiwan question, and how Beijing, Taipei, Washington and others state their positions as of November 2026.",
   levels:{
    starter:[
     "The Taiwan question turns on words. The PRC holds a **one-China principle**: there is one China, Taiwan is part of it, and the PRC government is its sole legal government. Most other governments have a **one China policy**: their own wording, which may “acknowledge”, “take note of” or “understand and respect” Beijing’s position without adopting it.",
     "Taipei’s government says the Republic of China and the People’s Republic of China “are not subordinate to each other”.",
     {key:"Never paraphrase a key document on Taiwan: quote it, date it and attribute every reading of it."}
    ],
    builder:[
     {table:[["Document","Key words"],["UNGA resolution 2758 (1971)","PRC representatives are “the only legitimate representatives of China to the United Nations”; no mention of Taiwan"],["Shanghai Communiqué (1972)","The US “acknowledges” that all Chinese on either side of the Strait maintain there is but one China; “does not challenge that position”"],["Normalisation Communiqué (1979)","The US “recognizes” the PRC government “as the sole legal Government of China”; “acknowledges the Chinese position”"],["Taiwan Relations Act (1979)","Future of Taiwan to be determined “by peaceful means”; “arms of a defensive character”"],["August 17 Communiqué (1982)","US “intends gradually to reduce its sale of arms to Taiwan”"],["Six Assurances (1982)","Among them, no agreement “to take any position regarding sovereignty over Taiwan”"],["Anti-Secession Law, PRC (2005)","“There is only one China in the world”; “non-peaceful means and other necessary measures” in stated circumstances"]]}
    ],
    pro:[
     "**Readings of 2758.** Beijing says it settled Taiwan’s status; Taipei and some other governments say it addressed only China’s representation at the UN.",
     "**1992 Consensus.** Beijing reads it as both sides of the Strait belonging to one China and working together towards reunification; the KMT as “one China, respective interpretations”; the DPP does not accept it.",
     "**US policy.** Strategic ambiguity about defence. In May 2026 President Trump said US policy was unchanged and added “I’m not looking to have somebody go independent”; Taiwan’s foreign ministry replied that Taiwan is sovereign and independent and would maintain the status quo.",
     "**Others’ formulas.** Japan (1972) “fully understands and respects”; Canada (1970) “takes note of this position”. As of mid-2026, 12 states recognised the ROC."
    ]
   },
   related:["cross-strait-relations","taiwan-history-democracy","china-foreign-policy-evolution"],
   sources:[{t:"American Institute in Taiwan, U.S.-PRC Joint Communique (1972)", url:"https://www.ait.org.tw/u-s-prc-joint-communique-1972/"},{t:"Taiwan Relations Act, 22 U.S. Code § 3301 (Cornell LII)", url:"https://www.law.cornell.edu/uscode/text/22/3301"},{t:"Congressional Research Service, “President Reagan’s Six Assurances to Taiwan” (IF11665)", url:"https://www.everycrsreport.com/reports/IF11665.html"}],
   checked:"2026-11"},

  {id:"mongolia-foreign-policy", title:"Mongolia’s foreign policy", aka:["third neighbour policy","third neighbor","nuclear-weapon-free status"], tags:["Mongolia","small states","foreign policy"],
   summary:"How a landlocked democracy between Russia and China balances its neighbours and seeks “third neighbours”, and the limits of that strategy.",
   levels:{
    starter:[
     "Mongolia has about 3.5 million people and only two neighbours, Russia and China. After a peaceful democratic revolution in 1990 and a new constitution in 1992, it needed a foreign policy that kept both giants friendly without depending wholly on either.",
     "Its answer is the **third neighbour** policy: partnerships with distant states such as the United States, Japan, South Korea, India and European countries.",
     {key:"Mongolia shows how a small state widens its options when geography limits them."}
    ],
    builder:[
     "**Origins.** US Secretary of State James Baker called the United States a “third neighbor” in an August 1990 address; Mongolian elites adopted the idea. A Foreign Policy Concept adopted in June 1994 set out a “multi-pillared” policy.",
     "**Nuclear-weapon-free status.** Declared in 1992; the UN General Assembly “welcomes the declaration” in resolution 53/77 D (1998); put into national law in February 2000.",
     "**Koreas.** Mongolia was the third state to recognise the DPRK and keeps relations with both Koreas.",
     "**UN.** A member since 27 October 1961, it contributes to UN peacekeeping."
    ],
    pro:[
     "**Limits.** Most exports, mainly coal and copper, go to China; much fuel comes from Russia. In September 2024 Mongolia did not arrest President Putin during his visit despite an International Criminal Court warrant; a government spokesperson cited the country’s energy dependence, and in October 2024 the Court found that Mongolia had failed to comply and referred the matter to the Assembly of States Parties.",
     "**Theory.** A case for hedging, small-state diplomacy and the role of democratic identity in foreign policy."
    ]
   },
   related:["east-asian-regionalism","china-foreign-policy-evolution"],
   sources:[{t:"Permanent Mission of Mongolia to the UN, “Mongolia and the United Nations”", url:"https://www.un.int/mongolia/mongolia/mongolia-and-united-nations-0"},{t:"Brookings, Munkh-Ochir Dorjjugder, “Mongolia’s ‘Third Neighbor’ Doctrine and North Korea”, 28 January 2011", url:"https://brookings.edu/articles/mongolias-third-neighbor-doctrine-and-north-korea"}],
   checked:"2026-11"},

  {id:"east-asian-regionalism", title:"East Asian regionalism", aka:["ASEAN Plus Three","APT","Chiang Mai Initiative","CMIM","AMRO","trilateral cooperation","East Asian peace"], tags:["regionalism","East Asia","institutions","as of 2026"],
   summary:"ASEAN Plus Three, the Chiang Mai Initiative, the China–Japan–Korea trilateral process and how they compare with Europe’s regionalism.",
   levels:{
    starter:[
     "East Asia has no EU. Instead it has overlapping groups: ASEAN at the hub; ASEAN Plus Three (with China, Japan and South Korea) since 1997; the wider East Asia Summit since 2005; a China–Japan–South Korea trilateral process; and the RCEP trade agreement.",
     "The 1997–98 financial crisis pushed governments to build their own safety net, the Chiang Mai Initiative (2000).",
     {key:"Judge East Asian institutions by what they were built to do, not by whether they look like the EU."}
    ],
    builder:[
     "**APT.** Informal summit in Kuala Lumpur (December 1997); Joint Statement on East Asia Cooperation (1999); East Asia Vision Group reports (2001, 2012).",
     "**Finance.** The Chiang Mai Initiative (May 2000) became a multilateral arrangement (CMIM) with a total size of US$240 billion; AMRO became an international organisation on 9 February 2016; the Asian Bond Markets Initiative began in 2003.",
     "**Trilateral.** First leaders’ meeting in 1999; stand-alone summits from 2008; a secretariat in Seoul from 2011. After 2012 summits met only in 2015, 2018, 2019 and 2024. In November 2025 China said “conditions are not yet ready” for the next one; as of November 2026 it had not been held."
    ],
    pro:[
     "**Explanations.** Market-led regionalisation (Pempel, 2005); the “organization gap” and critical junctures (Calder and Ye, 2004/2010); US alliance design (Hemmer and Katzenstein, 2002); history and memory; power transition.",
     "**East Asian peace.** No full-scale interstate war since 1979 (Kivimäki, 2014; Tønnesson, 2017); explanations range from deterrence to development priorities to norms.",
     "**Critiques.** Global IR scholars warn against the “EU as model” bias; others argue that informal institutions are too weak to manage crises."
    ]
   },
   related:["comparative-regionalism","asia-pacific-security-architecture","memory-politics-east-asia","david-kang"],
   sources:[{t:"ASEAN Plus Three, “Overview of ASEAN Plus Three Cooperation”", url:"https://aseanplusthree.asean.org/overview-of-asean-plus-three-cooperation/"},{t:"Bank of Thailand, ASEAN+3 (CMIM, AMRO, ABMI)", url:"https://www.bot.or.th/en/our-roles/international-cooperation/regionalfora/asean3.html"},{t:"East Asia Forum, Muhui Zhang, “Northeast Asia’s trilateral framework has hollowed out”, August 2026", url:"https://eastasiaforum.org/2026/08/13/northeast-asias-trilateral-framework-has-hollowed-out/"}],
   checked:"2026-11"},

  {id:"memory-politics-east-asia", title:"Memory politics in East Asia", aka:["history problem","historical memory","victimhood nationalism","patriotic education","century of humiliation"], tags:["memory","nationalism","East Asia"],
   summary:"How accounts of the past are used and contested between and within East Asian societies, with key concepts, works and joint history projects.",
   levels:{
    starter:[
     "Memory politics is about how people and governments use the past: in textbooks, museums, anniversaries, apologies and court cases. In East Asia, memories of empire, war, colonial rule and dictatorship shape relations between states and debates inside them.",
     "Japan’s relations with its neighbours are one part (Unit 4 and Unit 18). Others include China’s “century of humiliation”, a China–Korea dispute over ancient Goguryeo, and debates within South Korea and Taiwan about past repression.",
     {key:"Describe whose memory, in which source, for what purpose; do not rank suffering."}
    ],
    builder:[
     "**Concepts.** Victimhood nationalism (Lim Jie-Hyun, 2010): nations compete to be seen as victims. Humiliation narratives and patriotic education (Zheng Wang, *Never Forget National Humiliation*, 2012); a Patriotic Education Law took effect in China on 1 January 2024.",
     "**Apology.** Jennifer Lind (*Sorry States*, 2008): apologies can trigger domestic backlash that alarms neighbours.",
     "**Comparison.** Gi-Wook Shin and Daniel Sneider (*Divergent Memories*, 2016) compare how opinion leaders in China, Japan, South Korea and the United States remember the war.",
     "**Joint projects.** A common history reader by scholars from China, Japan and South Korea (2005); Japan–Korea (2002–05, 2007–10) and Japan–China (2006–10) joint history research."
    ],
    pro:[
     "**Research design.** Compare textbooks, museum displays or commemorations across places and over time; code which events, actors and emotions appear (Unit 3: {{discourse-analysis}}).",
     "**Debates.** Does memory drive conflict, or do governments mobilise memory when conflict rises for other reasons? Evidence from protest waves and leadership speeches is used on both sides.",
     {warn:"Where historians have reached a consensus on events, say so; where a dispute is about interpretation or responsibility, attribute each side."}
    ]
   },
   related:["japan-and-neighbours","nationalism-in-asia","east-asian-regionalism"],
   sources:[{t:"Stanford APARC, Shin & Sneider, Divergent Memories: Opinion Leaders and the Asia-Pacific War (2016)", url:"https://aparc.fsi.stanford.edu/publication/divergent-memories-opinion-leaders-and-asia-pacific-war"}],
   checked:"2026-11"}
  ],
  terms:[
   {id:"party-state", term:"Party-state", def:"A political system in which one ruling party leads the state, the army and society, so that party bodies make the key decisions and state bodies carry them out; China is the main current example.", codex:"chinese-party-state"},
   {id:"chinese-communist-party", term:"Chinese Communist Party (CCP)", def:"China’s ruling party, officially the Communist Party of China (CPC), founded in 1921 and in power since 1949; it reported about 101.29 million members at the end of 2025.", codex:"chinese-party-state"},
   {id:"politburo-standing-committee", term:"Politburo Standing Committee", def:"The small inner core of the Chinese Communist Party’s leadership (seven members since 2012), headed by the General Secretary.", codex:"chinese-party-state"},
   {id:"national-peoples-congress", term:"National People’s Congress (NPC)", def:"China’s legislature of about 3,000 deputies, constitutionally the highest organ of state power; it meets in full each March and passes laws and five-year plans.", codex:"chinese-party-state"},
   {id:"central-military-commission", term:"Central Military Commission (CMC)", def:"The body through which the Chinese Communist Party commands the People’s Liberation Army; its chair is the top leader.", codex:"chinese-party-state"},
   {id:"democratic-centralism", term:"Democratic centralism", def:"The Leninist rule (民主集中制, mínzhǔ jízhōngzhì) that allows discussion inside the party before a decision and requires obedience to it afterwards.", codex:"chinese-party-state"},
   {id:"nomenklatura", term:"Nomenklatura system", def:"The system by which party organisation departments appoint and promote officials, state-firm managers and other leaders (in China, 党管干部, “the Party manages cadres”).", codex:"chinese-party-state"},
   {id:"united-front", term:"United front work", def:"The Chinese Communist Party’s work to manage relations with groups outside the party, such as business people, religious bodies, minority groups and overseas Chinese.", codex:"chinese-party-state"},
   {id:"core-leader", term:"Core (héxīn)", def:"A title (核心) the Chinese Communist Party gives its paramount leader; it named Xi Jinping its “core” in 2016.", codex:"chinese-party-state"},
   {id:"xi-jinping-thought", term:"Xi Jinping Thought", def:"Short name for “Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era”, written into the Party constitution in 2017 and the state constitution in 2018.", codex:"chinese-party-state"},
   {id:"fragmented-authoritarianism", term:"Fragmented authoritarianism", def:"The argument (Lieberthal and Oksenberg, 1988) that authority in China is split among ministries and regions, so policy emerges from bargaining; later work adds media, NGOs and experts.", codex:"chinese-party-state"},
   {id:"authoritarian-resilience", term:"Authoritarian resilience", def:"The argument (Andrew Nathan, 2003) that an authoritarian regime can survive by institutionalising: rules for succession, merit-based promotion, specialised bodies and channels for complaints. Used beyond China for other durable regimes.", codex:"chinese-party-state"},
   {id:"policy-experimentation", term:"Policy experimentation", def:"Testing policies in local pilots, such as special economic zones, before the centre spreads them nationally; Heilmann (2008) called it “experimentation under hierarchy”.", codex:"chinese-party-state"},
   {id:"tifa", term:"Tifa (formulation)", def:"A standard official phrase (提法, tífǎ) in Chinese political texts; changes in wording signal shifts in priority to officials and to observers.", codex:"studying-china"},
   {id:"taoguang-yanghui", term:"Taoguang yanghui", def:"A guideline (韬光养晦) attributed to Deng Xiaoping around 1990, rendered by Chinese officials as “keep a low profile” and by critics as “hide your capabilities and bide your time”.", codex:"china-foreign-policy-evolution"},
   {id:"peaceful-rise", term:"Peaceful rise / peaceful development", def:"A slogan launched by Zheng Bijian in 2003 to reassure others about China’s growth; it was soon renamed “peaceful development” because “rise” sounded threatening.", codex:"china-foreign-policy-evolution"},
   {id:"major-country-diplomacy", term:"Major-country diplomacy with Chinese characteristics", def:"The official name since 2014 for Xi Jinping’s more active foreign policy, presenting China as a great power with its own approach.", codex:"china-foreign-policy-evolution"},
   {id:"community-of-shared-future", term:"Community with a shared future for mankind", def:"A Chinese official slogan (人类命运共同体) for the world order Beijing says it seeks, written into the Party and state constitutions by 2018.", codex:"china-foreign-policy-evolution"},
   {id:"wolf-warrior-diplomacy", term:"Wolf warrior diplomacy", def:"A combative public style adopted by some Chinese diplomats from about 2019, named after two Chinese action films (2015 and 2017).", codex:"china-foreign-policy-evolution"},
   {id:"belt-and-road-initiative", term:"Belt and Road Initiative (BRI)", def:"China’s infrastructure and connectivity initiative, proposed by Xi Jinping in 2013 (一带一路, Yídài Yílù); a label over many loans and projects rather than an organisation.", codex:"belt-and-road-initiative"},
   {id:"global-development-initiative", term:"Global Development Initiative", def:"A Chinese initiative proposed at the UN General Assembly in September 2021, presented as putting development first in support of the 2030 Agenda.", codex:"china-foreign-policy-evolution"},
   {id:"global-security-initiative", term:"Global Security Initiative", def:"A Chinese initiative proposed in April 2022 (concept paper February 2023) calling for “indivisible security” and dialogue; critics note the phrase echoes Russian arguments against NATO enlargement.", codex:"china-foreign-policy-evolution"},
   {id:"global-civilization-initiative", term:"Global Civilization Initiative", def:"A Chinese initiative proposed in March 2023 stressing respect for diverse civilisations and paths to modernisation.", codex:"china-foreign-policy-evolution"},
   {id:"global-governance-initiative", term:"Global Governance Initiative", def:"A Chinese initiative proposed on 1 September 2025 at the “SCO Plus” meeting in Tianjin, with five principles: sovereign equality, international rule of law, multilateralism, a people-centred approach and real actions.", codex:"china-foreign-policy-evolution"},
   {id:"power-transition-theory", term:"Power transition theory", def:"The theory (Organski, 1958) that war is most likely when a dissatisfied rising power approaches the strength of the leading power.", codex:"china-rise-debate"},
   {id:"status-quo-power", term:"Status quo power", def:"A state that broadly accepts the existing international order’s rules and distribution of benefits, as opposed to a revisionist power that seeks to change them.", codex:"china-rise-debate"},
   {id:"tribute-system", term:"Tribute system", def:"The historic East Asian practice (朝贡, cháogòng) in which rulers sent missions and gifts to the Chinese court and received recognition and trade in return; scholars debate how far it shaped behaviour.", codex:"david-kang"},
   {id:"international-hierarchy", term:"International hierarchy", def:"An order in which states are ranked, with subordinates accepting some authority of a dominant state, as opposed to an order of formally equal states balancing each other.", codex:"david-kang"},
   {id:"chaebol", term:"Chaebol", def:"South Korea’s large family-controlled business groups (재벌, jaebeol), central to its state-led industrialisation.", codex:"south-korea-democratisation"},
   {id:"gwangju-uprising", term:"Gwangju Uprising", def:"The May 1980 uprising in the South Korean city of Gwangju against military rule, violently suppressed by the army; a defining memory of the democracy movement.", codex:"south-korea-democratisation"},
   {id:"june-democratic-struggle", term:"June Democratic Struggle", def:"Mass protests in South Korea in June 1987 that led to the June 29 Declaration accepting direct presidential elections and a new constitution.", codex:"south-korea-democratisation"},
   {id:"juche", term:"Juche", def:"North Korea’s state ideology (주체), usually translated “self-reliance”, stressing political and economic independence; associated with Kim Il Sung.", codex:"north-korean-political-system"},
   {id:"songun", term:"Songun", def:"“Military-first” politics (선군), Kim Jong Il’s priority on the army from the 1990s.", codex:"north-korean-political-system"},
   {id:"byungjin", term:"Byungjin", def:"“Parallel development” (병진): Kim Jong Un’s 2013 line of building nuclear weapons and the economy together.", codex:"north-korean-political-system"},
   {id:"jangmadang", term:"Jangmadang", def:"North Korea’s markets (장마당), which spread after the state distribution system collapsed in the 1990s famine.", codex:"north-korean-political-system"},
   {id:"agreed-framework", term:"Agreed Framework", def:"The US–North Korea deal of October 1994 that froze the North’s plutonium programme in exchange for fuel oil and light-water reactors; it collapsed in 2002.", codex:"north-korea-nuclear-programme"},
   {id:"inter-korean-basic-agreement", term:"Inter-Korean Basic Agreement", def:"The 1991 agreement (in force 1992) on reconciliation, non-aggression and exchanges, describing relations as “not being a relationship between states” but a special interim relationship towards reunification.", codex:"inter-korean-relations"},
   {id:"sunshine-policy", term:"Sunshine Policy", def:"South Korean President Kim Dae-jung’s policy of engagement with North Korea (햇볕정책) from 1998, which led to the first inter-Korean summit in 2000.", codex:"inter-korean-relations"},
   {id:"kaesong-industrial-complex", term:"Kaesong Industrial Complex", def:"A joint industrial zone in North Korea where South Korean firms employed North Korean workers, opened in the 2000s and closed by Seoul in 2016.", codex:"inter-korean-relations"},
   {id:"panmunjom-declaration", term:"Panmunjom Declaration", def:"The agreement of the inter-Korean summit of 27 April 2018 on peace, reduced tension and the goal of a nuclear-free peninsula.", codex:"inter-korean-relations"},
   {id:"two-hostile-states", term:"“Two hostile states”", def:"North Korea’s description, since December 2023, of the two Koreas as separate states hostile to each other, replacing the language of one nation seeking unification.", codex:"inter-korean-relations"},
   {id:"228-incident", term:"228 Incident", def:"The uprising in Taiwan that began on 28 February 1947 against the new Republic of China administration, and the military crackdown in which thousands were killed.", codex:"taiwan-history-democracy"},
   {id:"silicon-shield", term:"Silicon shield", def:"The argument that the world’s reliance on Taiwan’s advanced chips deters an attack on Taiwan; critics say the effect is uncertain and may weaken as production spreads abroad.", codex:"taiwan-history-democracy"},
   {id:"three-communiques", term:"Three Communiqués", def:"The US–PRC joint communiqués of 1972 (Shanghai), 1979 (normalisation) and 1982 (on arms sales to Taiwan), the basis of the US one China policy with the Taiwan Relations Act and the Six Assurances.", codex:"taiwan-status-documents"},
   {id:"taiwan-relations-act", term:"Taiwan Relations Act (TRA)", def:"A US law of 10 April 1979 governing unofficial relations with Taiwan; it provides for “arms of a defensive character” and expects Taiwan’s future to be settled by peaceful means.", codex:"taiwan-status-documents"},
   {id:"six-assurances", term:"Six Assurances", def:"US assurances conveyed to Taipei in July 1982, including that the US had not agreed to set a date for ending arms sales or “to take any position regarding sovereignty over Taiwan”.", codex:"taiwan-status-documents"},
   {id:"strategic-ambiguity", term:"Strategic ambiguity", def:"The US practice of not stating whether it would defend Taiwan militarily, meant to deter both an attack and a unilateral move towards independence.", codex:"taiwan-status-documents"},
   {id:"1992-consensus", term:"1992 Consensus", def:"A term for an understanding said to have been reached in 1992 talks; Beijing reads it as both sides of the Strait belonging to one China and working together towards reunification, the KMT as “one China, respective interpretations”, and the DPP does not accept it.", codex:"taiwan-status-documents"},
   {id:"anti-secession-law", term:"Anti-Secession Law", def:"A PRC law of 14 March 2005 stating that “There is only one China in the world” and providing for “non-peaceful means and other necessary measures” in stated circumstances.", codex:"taiwan-status-documents"},
   {id:"unga-resolution-2758", term:"UNGA resolution 2758", def:"The UN General Assembly resolution of 25 October 1971 recognising the PRC government’s representatives as “the only legitimate representatives of China to the United Nations”; it does not mention Taiwan, and its meaning for Taiwan is disputed.", codex:"taiwan-status-documents"},
   {id:"one-country-two-systems", term:"One country, two systems", def:"The PRC formula, first applied to Hong Kong from 1997, under which a region keeps its own system within the PRC; Beijing proposes it for Taiwan, and Taiwan’s main parties reject it.", codex:"taiwan-status-documents"},
   {id:"third-neighbour-policy", term:"Third neighbour policy", def:"Mongolia’s strategy of balanced relations with Russia and China plus partnerships with distant states such as the US, Japan, South Korea, India and European countries.", codex:"mongolia-foreign-policy"},
   {id:"asean-plus-three", term:"ASEAN Plus Three (APT)", def:"Cooperation between ASEAN and China, Japan and South Korea, begun with an informal summit in December 1997 and institutionalised in 1999.", codex:"east-asian-regionalism"},
   {id:"chiang-mai-initiative", term:"Chiang Mai Initiative (CMI/CMIM)", def:"ASEAN Plus Three’s currency-swap arrangement, launched in May 2000 after the Asian financial crisis and later multilateralised (CMIM), with a total size of US$240 billion.", codex:"east-asian-regionalism"},
   {id:"trilateral-cooperation-secretariat", term:"Trilateral Cooperation Secretariat (TCS)", def:"The secretariat of China–Japan–South Korea cooperation, opened in Seoul in 2011, which supports the leaders’ summits and the ministerial meetings.", codex:"east-asian-regionalism"},
   {id:"east-asian-peace", term:"East Asian peace", def:"The absence of full-scale interstate war between East Asian states since 1979, and the sharp fall in battle deaths, which scholars explain in competing ways.", codex:"east-asian-regionalism"},
   {id:"memory-politics", term:"Memory politics", def:"The ways governments, movements and citizens use and contest accounts of the past, in textbooks, museums, anniversaries, apologies and courts.", codex:"memory-politics-east-asia"},
   {id:"century-of-humiliation", term:"Century of humiliation", def:"The Chinese narrative of foreign aggression and domination from the Opium Wars (1839–42) to 1949, central to official history and patriotic education.", codex:"memory-politics-east-asia"},
   {id:"patriotic-education", term:"Patriotic education", def:"China’s programme of teaching national history and loyalty, expanded from the 1990s; a Patriotic Education Law took effect on 1 January 2024.", codex:"memory-politics-east-asia"},
   {id:"victimhood-nationalism", term:"Victimhood nationalism", def:"Lim Jie-Hyun’s term for nationalism built on a nation’s claimed status as a victim, which can make it harder to acknowledge harms done by one’s own side.", codex:"memory-politics-east-asia"}
  ],
  bank:[
   {id:"e4u19-q01", lesson:"e4u19-l1", level:1, q:"In China’s party-state, which body is the core of political power?", options:[
     {t:"The Politburo Standing Committee of the Chinese Communist Party", ok:true, why:"Right: the Party’s inner core, headed by the General Secretary."},
     {t:"The National People’s Congress", why:"Formally the highest organ of state power, but it acts within Party guidance."},
     {t:"The Supreme People’s Court", why:"Courts are state bodies under Party leadership, not the core of power."},
     {t:"The provincial governments", why:"Local state administrations, each led in practice by a provincial Party secretary."}]},
   {id:"e4u19-q02", lesson:"e4u19-l1", level:1, q:"What is the nomenklatura system?", options:[
     {t:"Party organisation departments appoint and promote officials and other leaders", ok:true, why:"Right: “the Party manages cadres”."},
     {t:"Competitive elections for all senior posts", why:"Senior posts are filled through Party appointment, not open elections."},
     {t:"A list of banned words on social media", why:"That would be censorship, a different topic."},
     {t:"The rule that decisions must be obeyed after discussion", why:"That is democratic centralism."}]},
   {id:"e4u19-q03", lesson:"e4u19-l1", level:2, q:"Which event is evidence for Susan Shirk’s “personalistic rule” argument rather than for authoritarian resilience?", options:[
     {t:"The removal of the presidential two-term limit in March 2018", ok:true, why:"Right: it reversed a rule that had institutionalised succession."},
     {t:"Regular Party congresses every five years", why:"Regular congresses fit an institutionalised system."},
     {t:"Merit-based promotion of provincial officials", why:"That was a key part of Nathan’s resilience argument."},
     {t:"Local pilots of new policies", why:"That supports Heilmann’s experimentation argument."}]},
   {id:"e4u19-q04", lesson:"e4u19-l1", level:3, q:"Mei finds that provinces whose leaders were later promoted had grown faster. A classmate says this proves growth is what gets officials promoted in China. What is the best response?", options:[
     {t:"Li and Zhou found such a link for provincial leaders, but Shih, Adolph and Liu found factional ties mattered more at the top; state the level and period your claim covers", ok:true, why:"Right: both findings can hold at different levels, so scope conditions matter."},
     {t:"Growth has no relation to promotion at all", why:"Too strong: Li and Zhou found a link at the provincial level."},
     {t:"The correlation proves causation because it is based on official data", why:"Official data do not turn a correlation into a cause, and their reliability is itself debated."},
     {t:"Promotion in China is random", why:"No study cited here finds that; the debate is about which factors matter."}]},
   {id:"e4u19-q05", lesson:"e4u19-l1", level:2, q:"In 2013 the Party changed the market’s role from “basic” to “decisive”. How should a researcher treat this change?", options:[
     {t:"As a signal of the leadership’s stated priorities, to be checked against what policies actually did later", ok:true, why:"Right: tifa show intent; implementation needs separate evidence."},
     {t:"As proof that China privatised its state sector", why:"The state sector was strengthened in the following years."},
     {t:"As meaningless, since official texts are propaganda", why:"Formulations matter to officials and are worth tracking."},
     {t:"As a law passed by the National People’s Congress", why:"It was a Party plenum decision, not an NPC law."}]},
   {id:"e4u19-q06", lesson:"e4u19-l1", level:3, q:"Tomás plans to interview local officials in China and publish their names and towns so readers can verify his claims. What should he do instead?", options:[
     {t:"Anonymise interviewees, secure his notes and avoid details that could identify them, following do-no-harm rules", ok:true, why:"Right: interviewees may face risks the researcher does not."},
     {t:"Publish names but leave out the towns", why:"Names alone can expose people to risk."},
     {t:"Record interviews secretly so the officials speak freely", why:"Deception violates consent and could endanger people."},
     {t:"Nothing: transparency always comes first", why:"In risky settings, protecting participants comes before verifiability."}]},
   {id:"e4u19-q07", lesson:"e4u19-l1", level:1, q:"According to the Party’s Organization Department (June 2026), about how many members did the Chinese Communist Party have at the end of 2025?", options:[
     {t:"About 101 million", ok:true, why:"Right: 101.29 million, in more than 5.43 million grassroots organisations."},
     {t:"About 10 million", why:"Far too low."},
     {t:"About 50 million", why:"Membership passed that level decades ago."},
     {t:"About 400 million", why:"Far too high: roughly one Chinese person in fourteen is a member."}]},
   {id:"e4u19-q08", lesson:"e4u19-l1", level:2, q:"Greitens and Truex (2020) surveyed over 500 China scholars. Which finding did they report?", options:[
     {t:"About 9 per cent had been “invited to tea” by the authorities, and about a quarter of archive users had been denied access", ok:true, why:"Right: repressive experiences were “rare but real”."},
     {t:"Most scholars had been expelled from China", why:"The survey found such experiences were relatively rare."},
     {t:"No scholar reported any restriction", why:"Several kinds of restriction were reported."},
     {t:"Self-censorship was not seen as a problem", why:"Around 70 per cent agreed it was a problem in the field."}]},
   {id:"e4u19-q09", lesson:"e4u19-l1", level:3, q:"A thesis draft says: “China thinks local debt is not a problem.” What is the main weakness?", options:[
     {t:"It treats China as one mind; it should say which body or person holds the view, in which source", ok:true, why:"Right: ministries, provinces, scholars and citizens disagree."},
     {t:"It should use “Beijing believes” instead", why:"That is the same overgeneralisation with a new word."},
     {t:"Local debt cannot be studied", why:"It can, with official data, bond records and interviews."},
     {t:"It should cite only Western sources", why:"Chinese sources are essential; the problem is attribution."}]},

   {id:"e4u19-q10", lesson:"e4u19-l2", level:1, q:"Where did Xi Jinping first propose the “Silk Road Economic Belt” in 2013?", options:[
     {t:"Kazakhstan", ok:true, why:"Right: in Astana, September 2013."},
     {t:"Indonesia", why:"Indonesia was where he proposed the Maritime Silk Road, a month later."},
     {t:"Pakistan", why:"Pakistan later hosted an economic corridor, but the speech was not there."},
     {t:"Italy", why:"Italy joined in 2019 and announced its exit in 2023."}]},
   {id:"e4u19-q11", lesson:"e4u19-l2", level:2, q:"Which pair correctly matches a global initiative with where it was first proposed?", options:[
     {t:"Global Governance Initiative: the “SCO Plus” meeting in Tianjin, 1 September 2025", ok:true, why:"Right: Xi set out its five principles there."},
     {t:"Global Development Initiative: the Boao Forum, 2022", why:"The GDI was proposed at the UN General Assembly in 2021; the security initiative was at Boao."},
     {t:"Global Security Initiative: the UN General Assembly, 2021", why:"The GSI was proposed at the Boao Forum in April 2022."},
     {t:"Global Civilization Initiative: Tianjin, 2025", why:"The GCI was proposed in Beijing in March 2023."}]},
   {id:"e4u19-q12", lesson:"e4u19-l2", level:3, q:"Amara finds that a Chinese provincial firm relabelled an old dam project as “Belt and Road” to win state loans, and that the host government had requested the dam. Which reading of the BRI does this support best?", options:[
     {t:"The fragmented, demand-driven reading (Jones and Hameiri)", ok:true, why:"Right: local firms and host governments drive projects under the label."},
     {t:"The grand-strategy reading", why:"Nothing here shows central planning; it shows local interests."},
     {t:"Power transition theory", why:"That theory is about rising and leading powers, not project origins."},
     {t:"The debt-trap thesis", why:"The case says nothing about debt distress or asset seizure."}]},
   {id:"e4u19-q13", lesson:"e4u19-l2", level:2, q:"Alastair Iain Johnston’s “Is China a Status Quo Power?” (2003) found that China…", options:[
     {t:"had joined most major international institutions and largely kept their rules, though not on issues such as Taiwan", ok:true, why:"Right: he measured participation and compliance."},
     {t:"was a revisionist power seeking to overturn every institution", why:"He found the opposite for most institutions."},
     {t:"had refused to join the WTO", why:"China joined the WTO in December 2001."},
     {t:"would inevitably go to war with the United States", why:"That is closer to a power transition reading, which he questioned."}]},
   {id:"e4u19-q14", lesson:"e4u19-l2", level:1, q:"Graham Allison’s “Thucydides’s Trap” project counted how many cases of a rising power challenging a ruling one over 500 years, and how many ended in war?", options:[
     {t:"16 cases, 12 wars", ok:true, why:"Right, according to the Belfer Center project."},
     {t:"12 cases, 16 wars", why:"Reversed: there cannot be more wars than cases."},
     {t:"16 cases, all wars", why:"Four ended without war."},
     {t:"4 cases, 1 war", why:"Too few: four is the number of cases that avoided war."}]},
   {id:"e4u19-q15", lesson:"e4u19-l2", level:3, q:"After a regional crisis, most of China’s neighbours increase trade with China and avoid joining a US-led coalition, while keeping their own militaries. Which argument does this evidence fit best?", options:[
     {t:"Kang’s accommodation argument, or Southeast Asian hedging, depending on whether they defer to China", ok:true, why:"Right: no balancing coalition forms; whether it is accommodation or hedging depends on further evidence of deference."},
     {t:"Mearsheimer’s prediction of balancing", why:"Balancing would mean joining coalitions or arming against China."},
     {t:"The democratic peace", why:"That theory concerns wars between democracies."},
     {t:"Power transition theory’s prediction of war", why:"Nothing here involves war or a challenger nearing the leader."}]},
   {id:"e4u19-q16", lesson:"e4u19-l2", level:2, q:"Why do translations of 韬光养晦 matter?", options:[
     {t:"“Keep a low profile” and “hide your capabilities and bide your time” imply different intentions", ok:true, why:"Right: a translation can carry an argument."},
     {t:"There is only one correct translation, agreed by all", why:"Chinese officials and critics render it differently."},
     {t:"The phrase was coined by Xi Jinping", why:"It is attributed to Deng Xiaoping around 1990."},
     {t:"It is the name of a treaty", why:"It is a guideline, not a treaty."}]},
   {id:"e4u19-q17", lesson:"e4u19-l2", level:2, q:"What did M. Taylor Fravel find in *Strong Borders, Secure Nation* (2008)?", options:[
     {t:"China compromised in most of its territorial disputes on land, often when facing unrest at home", ok:true, why:"Right: behaviour varies by issue."},
     {t:"China never compromised on any territory", why:"He found many compromises on land borders."},
     {t:"China had no territorial disputes", why:"China had many disputes with neighbours."},
     {t:"China gave up its maritime claims", why:"Maritime claims have been pressed hard."}]},
   {id:"e4u19-q18", lesson:"e4u19-l2", level:3, q:"Priya writes: “China’s Global Security Initiative is simply a plan to dominate the world.” How should she revise it?", options:[
     {t:"State the Chinese government’s description and critics’ arguments, each attributed, then give her own assessment with evidence", ok:true, why:"Right: attribution, then argument."},
     {t:"Replace it with “China’s Global Security Initiative is harmless”", why:"Equally unattributed opinion."},
     {t:"Delete any mention of the initiative", why:"Avoiding the topic is not neutrality."},
     {t:"Quote only Western critics", why:"One-sided sourcing; include Beijing’s stated aims."}]},

   {id:"e4u19-q19", lesson:"e4u19-l3", level:1, q:"When did both Korean states join the United Nations?", options:[
     {t:"On the same day, 17 September 1991", ok:true, why:"Right: after decades in which joint membership was resisted."},
     {t:"South Korea in 1948, North Korea in 1953", why:"Neither joined then."},
     {t:"After the 2018 summits", why:"They had been members since 1991."},
     {t:"Only South Korea is a member", why:"Both are members."}]},
   {id:"e4u19-q20", lesson:"e4u19-l3", level:2, q:"What did Soviet archives opened in the 1990s show about the start of the Korean War?", options:[
     {t:"Stalin approved Kim Il Sung’s plan to attack in 1950", ok:true, why:"Right: studied by Kathryn Weathersby and others."},
     {t:"South Korea invaded the North first", why:"The archives showed the opposite decision-making."},
     {t:"China planned the attack alone", why:"China entered later, in October 1950."},
     {t:"The war had no Korean causes at all", why:"Most historians combine international decisions with civil-war roots."}]},
   {id:"e4u19-q21", lesson:"e4u19-l3", level:1, q:"What did South Korea’s June Democratic Struggle of 1987 achieve?", options:[
     {t:"Acceptance of direct presidential elections and a new constitution", ok:true, why:"Right: the June 29 Declaration and the October 1987 constitution."},
     {t:"Unification with the North", why:"No: the peninsula remains divided."},
     {t:"The end of the Korean War", why:"The armistice was signed in 1953."},
     {t:"Membership of the OECD", why:"Unrelated; that came in 1996."}]},
   {id:"e4u19-q22", lesson:"e4u19-l3", level:2, q:"In December 2024 South Korea’s president declared martial law. What happened next?", options:[
     {t:"The National Assembly voted to lift it within hours, impeached him, and the Constitutional Court removed him in April 2025", ok:true, why:"Right: the 8–0 ruling came on 4 April 2025."},
     {t:"The army took power for two years", why:"Martial law lasted about six hours."},
     {t:"The Constitutional Court upheld martial law", why:"It removed the president."},
     {t:"Nothing changed", why:"He was impeached and removed."}]},
   {id:"e4u19-q23", lesson:"e4u19-l3", level:3, q:"A policy paper says North Korea builds nuclear weapons mainly to keep the ruling family in power and reward its elites. Which of Sagan’s models is this?", options:[
     {t:"The domestic politics model", ok:true, why:"Right: internal coalitions and legitimacy."},
     {t:"The security model", why:"That stresses external threats."},
     {t:"The norms and status model", why:"That stresses prestige and recognition."},
     {t:"Power transition theory", why:"Not one of Sagan’s three models."}]},
   {id:"e4u19-q24", lesson:"e4u19-l3", level:1, q:"What was the Agreed Framework (1994)?", options:[
     {t:"A US–North Korea deal freezing the North’s plutonium programme in return for fuel oil and light-water reactors", ok:true, why:"Right; it collapsed in 2002."},
     {t:"The peace treaty ending the Korean War", why:"No peace treaty has been signed."},
     {t:"The inter-Korean Basic Agreement", why:"That was signed by the two Koreas in 1991."},
     {t:"A UN sanctions resolution", why:"Sanctions resolutions began in 2006."}]},
   {id:"e4u19-q25", lesson:"e4u19-l3", level:2, q:"According to SIPRI (June 2026), how many nuclear warheads has North Korea possibly assembled?", options:[
     {t:"Around 60, with fissile material for at least 30 more", ok:true, why:"Right: an estimate, with uncertainty."},
     {t:"None", why:"It has tested six times and assembled warheads, by SIPRI’s estimate."},
     {t:"Around 600", why:"That is closer to SIPRI’s estimate for China (about 620)."},
     {t:"Exactly 6", why:"Six is the number of nuclear tests, not warheads."}]},
   {id:"e4u19-q26", lesson:"e4u19-l3", level:3, q:"Kenji writes: “Both Koreas now agree they are two separate states, so the issue is settled.” What is the most accurate correction as of November 2026?", options:[
     {t:"The North calls them hostile states and has dropped unification; the South speaks of peaceful two-state coexistence while still aiming for unification, and critics in the South object", ok:true, why:"Right: the positions differ in content and are contested."},
     {t:"Both have signed a treaty recognising each other", why:"No such treaty exists."},
     {t:"South Korea has adopted the North’s “hostile states” line", why:"Seoul speaks of peaceful coexistence."},
     {t:"North Korea now seeks unification by peaceful means", why:"Its 2026 constitution drops unification wording."}]},
   {id:"e4u19-q27", lesson:"e4u19-l3", level:2, q:"What did the inter-Korean Basic Agreement (1991) say about the two Koreas’ relationship?", options:[
     {t:"It was “not being a relationship between states” but a special interim relationship towards reunification", ok:true, why:"Right: the special-relationship formula."},
     {t:"It was a normal relationship between two foreign states", why:"The agreement explicitly rejected that."},
     {t:"The North would join the South", why:"No: it set out a special relationship, not absorption."},
     {t:"Both would give up their UN seats", why:"They had just joined the UN."}]},

   {id:"e4u19-q28", lesson:"e4u19-l4", level:1, q:"How many times does UN General Assembly resolution 2758 (1971) mention Taiwan?", options:[
     {t:"None", ok:true, why:"Right: it refers to the PRC, China and “the representatives of Chiang Kai-shek”."},
     {t:"Once, calling it a province", why:"It does not mention Taiwan."},
     {t:"Twice, granting it observer status", why:"No: the text never mentions Taiwan."},
     {t:"Five times", why:"No: the text never mentions Taiwan."}]},
   {id:"e4u19-q29", lesson:"e4u19-l4", level:2, q:"Which wording appears in the US–PRC Shanghai Communiqué of 1972?", options:[
     {t:"The US “acknowledges” that all Chinese on either side of the Strait maintain there is but one China, and “does not challenge that position”", ok:true, why:"Right: exact wording from the 1972 text."},
     {t:"The US “recognizes Taiwan as part of the PRC”", why:"The text does not say this."},
     {t:"The US will “defend Taiwan with armed forces”", why:"No such commitment appears."},
     {t:"The US “takes note of” China’s position", why:"That is Canada’s 1970 formula."}]},
   {id:"e4u19-q30", lesson:"e4u19-l4", level:2, q:"What is the Taiwan Relations Act?", options:[
     {t:"A US law of 1979 governing unofficial relations with Taiwan, including the provision of defensive arms", ok:true, why:"Right: Public Law 96-8."},
     {t:"A treaty between the US and the PRC", why:"It is US domestic law, not an agreement with Beijing."},
     {t:"A defence treaty committing US troops to Taiwan", why:"It does not commit forces."},
     {t:"A Taiwanese law on independence", why:"It is a US law."}]},
   {id:"e4u19-q31", lesson:"e4u19-l4", level:3, q:"Lucía writes: “Most countries agree that Taiwan is part of the PRC.” What is the best correction?", options:[
     {t:"Most recognise the PRC government, but their one China policies use different wordings, such as “acknowledge” or “take note of”, which do not necessarily adopt the PRC’s position", ok:true, why:"Right: recognition of a government is not the same as endorsing a territorial claim."},
     {t:"Most countries recognise Taiwan as independent", why:"As of mid-2026, 12 states recognised the ROC."},
     {t:"The sentence is correct", why:"It ignores the different wordings governments chose."},
     {t:"No country has any position", why:"Every government that recognises the PRC has some stated position."}]},
   {id:"e4u19-q32", lesson:"e4u19-l4", level:2, q:"How do Beijing, the KMT and the DPP differ on the “1992 Consensus”?", options:[
     {t:"Beijing reads it as both sides of the Strait belonging to one China and working together towards reunification; the KMT as “one China, respective interpretations”; the DPP does not accept it", ok:true, why:"Right: each reading is attributed to its holder."},
     {t:"All three accept it with the same meaning", why:"They disagree."},
     {t:"Only the DPP accepts it", why:"The DPP does not accept it."},
     {t:"It is a treaty signed by both governments", why:"It is a disputed understanding, not a signed treaty."}]},
   {id:"e4u19-q33", lesson:"e4u19-l4", level:3, q:"A student writes that the US has promised to defend Taiwan under the Taiwan Relations Act. Which correction is most accurate?", options:[
     {t:"The Act provides for defensive arms and keeps US capacity to resist coercion, but leaves open whether the US would intervene: strategic ambiguity", ok:true, why:"Right: the Act does not commit US forces."},
     {t:"The Act forbids any arms sales to Taiwan", why:"It provides for “arms of a defensive character”."},
     {t:"The Act was replaced by a defence treaty in 2026", why:"No such treaty exists."},
     {t:"The Act recognises Taiwan as a state", why:"It governs unofficial relations."}]},
   {id:"e4u19-q34", lesson:"e4u19-l4", level:1, q:"What did President Lai Ching-te say about the ROC and the PRC in March 2025?", options:[
     {t:"They “are not subordinate to each other”", ok:true, why:"Right, in his press conference of 13 March 2025."},
     {t:"They are one state under one government", why:"That is not his position."},
     {t:"Taiwan accepts “one country, two systems”", why:"Taiwan’s main parties reject it."},
     {t:"He accepted the 1992 Consensus", why:"The DPP does not accept it."}]},
   {id:"e4u19-q35", lesson:"e4u19-l4", level:2, q:"Which describes Mongolia’s “third neighbour” policy?", options:[
     {t:"Balanced ties with Russia and China plus partnerships with distant states", ok:true, why:"Right: the phrase is traced to James Baker’s 1990 visit."},
     {t:"An alliance with China against Russia", why:"Mongolia seeks balance, not alliance."},
     {t:"A claim to territory in a third state", why:"It concerns partnerships."},
     {t:"Membership of NATO", why:"Mongolia is not a member."}]},
   {id:"e4u19-q36", lesson:"e4u19-l4", level:3, q:"Sione argues that Taiwan’s chip industry guarantees its security. Which response is most balanced?", options:[
     {t:"The “silicon shield” argument holds that dependence deters attack, but critics say it may cut both ways and thin as production spreads abroad", ok:true, why:"Right: both the argument and its critics are attributed."},
     {t:"Chips have no political significance", why:"The debate exists because they do."},
     {t:"The shield is a binding international treaty", why:"It is an argument, not a treaty."},
     {t:"All analysts agree with Sione", why:"Many analysts dispute it."}]},

   {id:"e4u19-q37", lesson:"e4u19-l5", level:1, q:"What prompted ASEAN Plus Three’s financial cooperation, such as the Chiang Mai Initiative?", options:[
     {t:"The Asian financial crisis of 1997–98", ok:true, why:"Right: governments wanted their own safety net."},
     {t:"The 2008 Beijing Olympics", why:"Unrelated: the initiative dates from 2000."},
     {t:"The founding of the EU", why:"Unrelated to Asian financial cooperation."},
     {t:"The Korean War", why:"Far earlier."}]},
   {id:"e4u19-q38", lesson:"e4u19-l5", level:2, q:"Which is accurate about the China–Japan–South Korea leaders’ summit as of November 2026?", options:[
     {t:"The ninth met in Seoul in May 2024; a tenth, with Japan as host, had not been held", ok:true, why:"Right: China said in November 2025 that conditions were “not yet ready”."},
     {t:"It has met every year since 2008", why:"After 2012 it met only in 2015, 2018, 2019 and 2024."},
     {t:"It was dissolved by treaty in 2025", why:"No government has dissolved it."},
     {t:"It has never met", why:"It first met as a stand-alone summit in 2008."}]},
   {id:"e4u19-q39", lesson:"e4u19-l5", level:3, q:"A paper argues: “East Asia has failed because it has no EU.” Which critique draws on Global IR?", options:[
     {t:"It treats Europe as the standard of success; East Asian institutions should be judged by their own aims", ok:true, why:"Right: the “EU as model” bias."},
     {t:"East Asia has a supranational court like the EU’s", why:"It does not."},
     {t:"The EU has no institutions", why:"Inaccurate: the EU has many strong institutions."},
     {t:"Comparison between regions is never useful", why:"Comparison is useful if the outcome is defined and Europe is not the norm."}]},
   {id:"e4u19-q40", lesson:"e4u19-l5", level:2, q:"Jennifer Lind’s *Sorry States* (2008) argues that…", options:[
     {t:"apologies can trigger domestic backlash that alarms neighbours, so their effects depend on domestic politics", ok:true, why:"Right: her focus is the domestic reaction to contrition."},
     {t:"apologies always resolve history disputes", why:"She argues their effects can be counterproductive."},
     {t:"memory has no effect on threat perception", why:"Her book argues it does."},
     {t:"only economic ties matter", why:"Her focus is memory."}]},
   {id:"e4u19-q41", lesson:"e4u19-l5", level:1, q:"What does “victimhood nationalism” (Lim Jie-Hyun) describe?", options:[
     {t:"Nationalism built on a nation’s claimed status as a victim, which can make acknowledging its own wrongs harder", ok:true, why:"Right: nations compete to be recognised as victims."},
     {t:"A treaty on war reparations", why:"It is a concept, not a treaty."},
     {t:"A policy of open borders", why:"Unrelated: it is a concept about memory."},
     {t:"The study of election results", why:"Unrelated: it is a concept about memory."}]},
   {id:"e4u19-q42", lesson:"e4u19-l5", level:3, q:"Ana sees East Asian states deepening trade and supply chains while summits are cancelled over history and territory. Which idea names this pattern?", options:[
     {t:"The “Asia paradox” of deep economic interdependence alongside persistent political tension", ok:true, why:"Right: economics and politics pull in different directions."},
     {t:"Democratic peace", why:"About wars between democracies."},
     {t:"Supranationalism", why:"East Asia lacks supranational institutions."},
     {t:"The tribute system", why:"A historic order, not today’s pattern."}]},
   {id:"e4u19-q43", lesson:"e4u19-l5", level:2, q:"What do scholars mean by the “East Asian peace”?", options:[
     {t:"No full-scale interstate war between East Asian states since 1979, with a sharp fall in battle deaths", ok:true, why:"Right: Kivimäki (2014) and Tønnesson (2017)."},
     {t:"A peace treaty signed by all East Asian states", why:"No such treaty exists; the Korean War ended only in an armistice."},
     {t:"The end of all disputes in the region", why:"Disputes and clashes continue."},
     {t:"A UN peacekeeping mission", why:"Unrelated: it is a scholarly description of a trend."}]},
   {id:"e4u19-q44", lesson:"e4u19-l5", level:3, q:"Dmitri wants to compare how museums in two countries present the same war. Which design is strongest?", options:[
     {t:"Code the events, actors and emotions each museum presents and omits, with sources, and explain differences without ranking suffering", ok:true, why:"Right: systematic comparison with attribution."},
     {t:"Decide which country is right, then select exhibits that prove it", why:"That is advocacy, not analysis."},
     {t:"Visit one museum and assume the other is similar", why:"No comparison."},
     {t:"Count visitors only", why:"Visitor numbers alone cannot show how the war is presented."}]},
   {id:"e4u19-q45", lesson:"e4u19-l5", level:2, q:"Which describes RCEP?", options:[
     {t:"A trade agreement signed in 2020, the first to link China, Japan and South Korea, with ASEAN members, Australia and New Zealand", ok:true, why:"Right: in force from 2022."},
     {t:"A security alliance led by the United States", why:"It is a trade agreement, and the US is not a member."},
     {t:"An EU institution", why:"No: RCEP is an Asia-Pacific trade agreement."},
     {t:"The secretariat of the trilateral summit", why:"That is the TCS in Seoul."}]}
  ]
});
