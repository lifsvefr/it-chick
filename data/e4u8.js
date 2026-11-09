/* International Studies · Unit 8 · Soft power, public diplomacy and cultural diplomacy */
ICA.addUnit({
  id:"e4u8", track:"e4", n:8, title:"Soft power, public diplomacy and cultural diplomacy", icon:"🎌",
  blurb:"How states and others try to win hearts and minds abroad, and whether it works. Soft power in depth with its critics and indices, public diplomacy from broadcasting to exchanges, nation branding and cultural industries from Cool Japan to the Korean Wave, the politics of mega-events, heritage and sport, and how to evaluate soft power and write a policy brief about it.",
  goals:[
    "Explain soft power precisely (co-optive power, the faces of power, sources and outcomes, smart power) and weigh its critiques, including sharp power and representational force",
    "Read soft power indices critically: what they measure, how, and what they cannot show",
    "Use Cull’s taxonomy of public diplomacy and the “new public diplomacy” to analyse what governments, broadcasters and exchange programmes do",
    "Compare nation branding and cultural-industry policies in Japan, South Korea, China and India, and describe the debates around them neutrally",
    "Analyse mega-events, World Heritage nominations and sports diplomacy as tools and risks for a country’s image",
    "Evaluate claims that soft power “works”, compare cases across regions, and write a clear, balanced policy brief"
  ],
  read:[
    {book:"cullpd", where:"Sections 1 “Definitions” to 6 “PD in the Information Age”", note:"A short, free report by the historian who wrote the standard taxonomy of public diplomacy, with five cases of success and five of failure."},
    {book:"eir", where:"Chapter 2 “Diplomacy” (Stephen McGlinchey) and Chapter 9 “Religion and Culture”", note:"Background on how diplomacy works and how culture enters world politics."},
    {book:"ospol", where:"Chapter 14 “International Relations”, section 14.1 “What Is Power, and How Do We Measure It?”", note:"A gentle refresher on power before Lesson 1."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u8-l1", title:"Power and attraction: soft power in depth", minutes:60,
   hook:{q:"Joseph Nye introduced the term “soft power” in a 1990 book. What was that book mainly arguing?", options:["That the United States was in steep decline","That the United States was not in decline, because power was changing shape","That China would soon become the leading soft power","That military force no longer mattered at all"], answer:1, reveal:"**That the United States was not in decline.** In the late 1980s many writers argued that the US was following earlier empires downhill. Nye’s *Bound to Lead* (1990) answered that power itself was changing, and that attraction, which he called soft power, was a growing part of it. A concept now used by governments everywhere began as a move in an American debate. This lesson asks what the concept really claims, how scholars criticise it, and how people try to measure it."},
   goals:[
     "Define soft power precisely and place it on Nye’s spectrum from command to co-optive power",
     "Connect soft power to the debate on the faces of power (Dahl, Bachrach and Baratz, Lukes)",
     "Distinguish the sources of soft power from its outcomes, and explain smart power",
     "Explain how the idea travelled, especially in China’s debates",
     "Weigh the main critiques, including Mattern’s representational force and the idea of sharp power",
     "Read soft power indices critically"
   ],
   learn:[
    {h:"From a primer definition to a research concept", body:[
      {lead:"Why do millions of people abroad learn Korean from television dramas, and does it matter to Seoul’s diplomats?"},
      "A one-line reminder from the IR primer: [[soft-power|soft power]] is Joseph Nye’s term for getting what you want through attraction rather than coercion or payment, which he called [[hard-power|hard power]] (see {{joseph-nye}}). This lesson takes the concept apart the way a graduate seminar does.",
      "Nye first set out the idea in *Bound to Lead: The Changing Nature of American Power* (1990) and an article titled “Soft Power” in *Foreign Policy* the same year. He developed it fully in *Soft Power: The Means to Success in World Politics* (2004) and revised it in *The Future of Power* (2011). His early phrase was [[co-optive-power|co-optive power]]: “when one country gets other countries to want what it wants”. The contrast was **command power**, getting others to do what you want against their wishes.",
      "So soft power is not about culture as such. It is a claim about **how influence works**: by shaping what others want, so that you need fewer threats and payments."
    ]},
    {h:"A spectrum, and the faces of power", body:[
      "In *Soft Power* (2004) Nye drew power as a spectrum of behaviour, not two boxes:",
      {fig:'<svg viewBox="0 0 340 320"><path class="d-ink" d="M70,24 H60 V138 H70" stroke-width="2"/><path class="d-ink" d="M70,156 H60 V270 H70" stroke-width="2"/><text x="32" y="80" text-anchor="middle">Hard</text><text class="s" x="32" y="96" text-anchor="middle">command</text><text x="32" y="212" text-anchor="middle">Soft</text><text class="s" x="32" y="228" text-anchor="middle">co-opt</text><rect class="d-rose" x="84" y="20" width="246" height="56" rx="8" stroke-width="2"/><text x="207" y="43" text-anchor="middle">Coercion</text><text class="s" x="207" y="62" text-anchor="middle">threats, force, sanctions</text><rect class="d-gold" x="84" y="86" width="246" height="56" rx="8" stroke-width="2"/><text x="207" y="109" text-anchor="middle">Inducement</text><text class="s" x="207" y="128" text-anchor="middle">payment, aid, trade deals</text><rect class="d-sage" x="84" y="152" width="246" height="56" rx="8" stroke-width="2"/><text x="207" y="175" text-anchor="middle">Agenda-setting</text><text class="s" x="207" y="194" text-anchor="middle">shaping what is on the table</text><rect class="d-lup" x="84" y="218" width="246" height="56" rx="8" stroke-width="2"/><text x="207" y="241" text-anchor="middle">Attraction</text><text class="s" x="207" y="260" text-anchor="middle">shaping what others want</text><text class="s" x="170" y="306" text-anchor="middle">Nye (2004): one spectrum of power behaviour</text></svg>', alt:"Four stacked boxes. From top: coercion (threats, force, sanctions), inducement (payment, aid, trade deals), agenda-setting (shaping what is on the table) and attraction (shaping what others want). A bracket marks the top two as hard or command power and the bottom two as soft or co-optive power.", cap:"Soft power sits at the co-optive end. Real policies often mix several kinds."},
      "This connects to an older debate in political science about the [[faces-of-power|faces of power]]:",
      {table:[
        ["Face","Who","The idea"],
        ["First","Robert Dahl, “The Concept of Power” (1957)","A gets B to do something B would not otherwise do"],
        ["Second","Peter Bachrach & Morton Baratz, “Two Faces of Power” (1962)","Power also works by keeping issues off the agenda"],
        ["Third","Steven Lukes, *Power: A Radical View* (1974)","Power can shape people’s very wants and beliefs"]
      ]},
      "Nye linked soft power especially to the second and third faces, though in *The Future of Power* (2011) he argued that each face can be used in harder or softer ways. Note a vocabulary trap: “agenda-setting” here means shaping the options in a negotiation, not the [[agenda-setting|media effect]] of the same name you met in the sociology primer."
    ]},
    {h:"Sources, outcomes and smart power", body:[
      "Nye named three [[sources-of-soft-power|sources of soft power]]: a country’s **culture** (where it pleases others), its **political values** (when it lives up to them at home and abroad) and its **foreign policies** (when others see them as legitimate).",
      "Two points matter for research. First, sources are **resources, not outcomes**. Having famous films is not the same as winning a vote at the UN. Nye calls the step from one to the other **power conversion**, and it can fail. Second, attraction depends on the **audience**: the same television series can charm one public and offend another.",
      "A third point limits governments: much soft power comes from civil society, companies and artists that no government controls. A state can fund a film festival; it cannot make people love a film.",
      "[[smart-power|Smart power]] means combining hard and soft tools in one strategy. Suzanne Nossel used the phrase in *Foreign Affairs* in 2004; Nye, who says he used it from 2003, co-chaired a Commission on Smart Power in 2007 with Richard Armitage. Military forces doing disaster relief, or aid that builds lasting goodwill, show how “hard” resources can produce attraction. After the earthquake and tsunami of March 2011, for example, US forces in Japan ran a large relief effort called Operation Tomodachi (“friend”), which many observers credited with improving Japanese views of the alliance.",
      {ex:"Claim: “Country A’s soft power helped it win a port deal in Country B.”\n1. Actor: who exactly? (the government, a company, its film industry?)\n2. Audience: whose views matter? (B’s public, its elites, its port authority?)\n3. Resource: culture, values or policies?\n4. Mechanism: how is attraction supposed to change the decision?\n5. Evidence: what would show the mechanism at work, and what would show that money or pressure did the job instead?", label:"Worked example: making a soft power claim testable"},
      "Asked this way, many claims turn out to be about inducement (loans, contracts) rather than attraction. That is not a failure of the claim; it is the analysis doing its job."
    ]},
    {h:"How the idea travelled", body:[
      "Few academic concepts have been taken up so widely by governments. China’s debate is the best studied. Wang Huning, then a political scientist and later a senior Communist Party leader, discussed culture as national power and soft power in an article in 1993. In 2007 Hu Jintao’s report to the 17th Party Congress called for strengthening culture as part of China’s soft power (软实力, *ruǎn shílì*), and from 2013 Xi Jinping urged officials to “tell China’s story well”. Chinese scholars have debated whether soft power rests mainly on culture or on political institutions and diplomacy (see {{chinese-ir-theory}}).",
      "Other governments built their own versions: Japan’s pop-culture diplomacy and Cool Japan (Lesson 3), South Korea’s support for its cultural industries, India’s promotion of yoga and its diaspora, the Gulf states’ investment in sport and media, and Russia’s Russkiy Mir Foundation (founded in 2007) for the Russian language and Russian speakers abroad. Some states also draw on faith traditions ([[religious-soft-power|religious soft power]]).",
      "Joshua Kurlantzick’s *Charm Offensive* (2007) described China’s soft power in Southeast Asia, including aid and investment, which shows a recurring problem: many writers stretch “soft power” to mean everything that is not military."
    ]},
    {h:"Critiques: is soft power soft, and is it power?", body:[
      "**Too vague.** Todd Hall’s “An Unclear Attraction” (2010) argued that soft power is not a useful analytical category because it mixes very different mechanisms, and proposed studying narrower kinds instead, such as institutional, reputational and representational power.",
      "**Not so soft.** Janice Bially Mattern’s “Why ‘Soft Power’ Isn’t So Soft” (*Millennium*, 2005) argued that attraction is built through language, and that it can involve [[representational-force|representational force]]: a narrative that leaves the listener no acceptable way to refuse without threatening their own identity. Her example was the post-2001 framing “either you are with us, or you are with the terrorists”. Constructivists (see {{constructivism}}) found this a powerful reading.",
      "**Derivative or hegemonic.** Some realists see attraction as a by-product of wealth and military success. Some critical and postcolonial scholars see soft power as a polished name for cultural [[hegemony]] (compare [[cultural-imperialism|cultural imperialism]]), and ask whose culture counts as “attractive”.",
      "**Sharp power.** In November 2017 Christopher Walker and Jessica Ludwig, of the US-based National Endowment for Democracy, wrote “The Meaning of Sharp Power” in *Foreign Affairs*, followed by a report in December 2017. They used [[sharp-power|sharp power]] for efforts by authoritarian states, with China and Russia as their main cases, to manipulate and censor rather than attract. Nye accepted the distinction: soft power works through openness, sharp power through deception or coercion. Chinese officials and state media rejected the term as a smear, and some scholars warn that it can blur the line between ordinary public diplomacy and manipulation.",
      {warn:"In a seminar, attribute: “Walker and Ludwig argue…”, “Chinese officials reply…”. Whether a given campaign is soft or sharp power is a judgement that needs evidence about methods, not just about who runs it."}
    ]},
    {h:"Measuring soft power", body:[
      "Rankings make headlines, so read their methods first.",
      {table:[
        ["Index","What it measures","Watch out for"],
        ["Brand Finance Global Soft Power Index (annual since 2020)","A survey of perceptions of all 193 UN members: over 150,000 respondents in over 100 countries in the 2026 edition","Perceptions of the general public and specialists, not influence over policy"],
        ["Anholt-Ipsos Nation Brands Index","Survey of how people in about 20 countries rate 50 nations on six dimensions","A reputation measure, built for marketing"],
        ["Soft Power 30 (Portland, 2015–2019)","Objective data plus polling","Discontinued; weights chosen by the authors"],
        ["Lowy Institute Asia Power Index","Cultural influence as one of eight measures of power in Asia","Regional only; mixes resources and outcomes"]
      ]},
      "As of the 2026 Brand Finance index (released January 2026), the United States ranked first, China second, Japan third and the United Kingdom fourth. In the 2025 Nation Brands Index, Japan ranked first and Germany second, as reported. These figures change every year.",
      "Three problems recur: indices mostly count **resources or reputations**, not influence; weights and survey samples shape the result; and small changes in rank often fall within the margin of error. Ask of any index: attractive to whom, measured how, and leading to what?",
      {terms:["co-optive-power","faces-of-power","sources-of-soft-power","smart-power","representational-force","sharp-power","soft-power-index"]}
    ]}
   ],
   try:[
    {id:"e4u8-l1-x1", type:"sort", q:"Where on Nye’s spectrum does each action fall?", buckets:["Coercion","Inducement","Agenda-setting","Attraction"], items:[
      {t:"A government threatens tariffs unless a neighbour changes its fishing policy.", b:0, why:"A threat of punishment is coercion, the hardest end of the spectrum."},
      {t:"A donor offers a large loan if a country signs a port agreement.", b:1, why:"A reward in exchange for a decision is inducement: payment, not attraction."},
      {t:"A chair of talks drafts the agenda so that a rival’s favourite proposal never comes up for discussion.", b:2, why:"Keeping options off the table is agenda-setting, Bachrach and Baratz’s second face of power."},
      {t:"Students abroad admire a country’s universities and later choose it as a partner.", b:3, why:"Choice shaped by admiration is attraction, Nye’s core of soft power."},
      {t:"A country’s films and music make its way of life look desirable to young people elsewhere.", b:3, why:"Culture that pleases others is a classic source of attraction."},
      {t:"A navy blockades a port to force a change of policy.", b:0, why:"Force or the threat of force is coercion."}
    ]},
    {id:"e4u8-l1-x2", type:"match", q:"Match each idea to the scholar or writers who proposed it.", pairs:[
      ["Power as getting B to do what B would not otherwise do","Robert Dahl (1957)","The first face of power."],
      ["Power by keeping issues off the agenda","Bachrach & Baratz (1962)","The second face of power."],
      ["Power shaping people’s very wants","Steven Lukes (1974)","The third face, in *Power: A Radical View*."],
      ["Getting others to want what you want","Joseph Nye (1990)","Co-optive or soft power, in *Bound to Lead*."],
      ["Attraction built through representational force","Janice Bially Mattern (2005)","Her *Millennium* article “Why ‘Soft Power’ Isn’t So Soft”."],
      ["Authoritarian influence that manipulates rather than attracts","Walker & Ludwig (2017)","Their term sharp power, in *Foreign Affairs* and a report."]
    ]},
    {id:"e4u8-l1-x3", type:"mcq", q:"Kenji notes that a country has the world’s most-watched streaming dramas, yet it lost an important UN vote. Which idea best explains the gap?", options:[
      {t:"Soft power resources are not outcomes; converting attraction into a policy result can fail.", ok:true, why:"Right. Nye distinguishes resources from outcomes and calls the step between them power conversion."},
      {t:"Soft power does not exist, so the dramas are irrelevant.", why:"Too strong. The gap shows that resources do not automatically produce outcomes, not that attraction never matters."},
      {t:"The country must have used sharp power.", why:"Nothing in the case suggests manipulation or censorship. Sharp power is a separate claim that needs its own evidence."},
      {t:"Popular dramas are hard power.", why:"Popular culture is a soft power resource; hard power means coercion or payment."}
    ]},
    {id:"e4u8-l1-x4", type:"mcq", q:"Which statement is the best summary of Mattern’s critique?", options:[
      {t:"Attraction is constructed through narratives that can corner the listener, so soft power can be coercive in its own way.", ok:true, why:"Yes. Representational force threatens the listener’s identity if they refuse; hence soft power “isn’t so soft”."},
      {t:"Soft power is impossible to measure, so it should be dropped.", why:"Measurement problems are a different critique, made by Hall and others. Mattern’s point is about how attraction is produced."},
      {t:"Only authoritarian states use soft power.", why:"Mattern’s main example was a US framing after 2001; her argument applies to any actor."},
      {t:"Soft power is simply economic power in disguise.", why:"That is closer to some realist critiques, not Mattern’s linguistic argument."}
    ]},
    {id:"e4u8-l1-x5", type:"spot", q:"A news story reports a soft power ranking. Tap each claim that **goes beyond what such an index can show**.", ask:"goes beyond the evidence", parts:[
      {t:"The country rose from 9th to 7th place in this year’s index.", flag:false, why:"A plain report of the ranking. Fine, though small moves may be within the margin of error."},
      " ",
      {t:"The index surveyed respondents in more than 100 countries.", flag:false, why:"A description of method: exactly what a reader needs."},
      " ",
      {t:"The rise proves that the government’s new culture budget is working.", flag:true, why:"Causal overreach. A perception ranking cannot show what caused a change; many other events could explain it."},
      " ",
      {t:"Neighbouring governments will now follow its lead on trade.", flag:true, why:"An index of perceptions says nothing about future policy decisions. That would need separate evidence."},
      " ",
      {t:"The country scored highest on the culture and heritage pillar.", flag:false, why:"A factual report of a sub-score."}
    ]},
    {id:"e4u8-l1-x6", type:"number", q:"In an invented survey, 42% of respondents in Country X had a favourable view of Country Y in 2024, and 51% in 2026. By how many **percentage points** did favourable views rise?", answer:9, tol:0, unit:"percentage points", why:"51 − 42 = 9 percentage points. A change between two percentages is measured in percentage points.", wrongs:[
      {v:21.4, tol:0.3, why:"That is the relative change ((51 − 42) ÷ 42 ≈ 21%), a percentage increase, not a change in percentage points."},
      {v:93, tol:0, why:"That adds the two figures instead of subtracting them."}
    ], hint2:"Subtract the earlier percentage from the later one."},
    {id:"e4u8-l1-x7", type:"mcq", q:"A ministry argues that its embassy’s new cultural centre is “pure soft power”, while a critic calls it “sharp power”. What would best help you judge between them?", options:[
      {t:"Evidence about methods: is the centre open about who runs it, and does it try to censor or pressure anyone?", ok:true, why:"Right. Nye and Walker and Ludwig agree that the difference lies in openness versus manipulation, which is a question of evidence."},
      {t:"Which country runs it: centres run by some countries are sharp power by definition.", why:"Judging by the owner alone assumes the answer. The concepts are about methods, so you need evidence about them."},
      {t:"How popular the centre’s events are.", why:"Popularity tells you about attraction, not about whether manipulation is also happening."},
      {t:"Whether the centre’s budget is large.", why:"Size of budget does not distinguish attraction from manipulation."}
    ]}
   ],
   apply:{
    intro:"Test the concept on real material. You need only a browser; no accounts or purchases.",
    tasks:[
     {t:"Two indices, one country", how:[
       "Choose any country. Find its place in the latest Brand Finance Global Soft Power Index and the latest Anholt-Ipsos Nation Brands Index (both publish free summaries).",
       "Note what each index measures and who was surveyed.",
       "Write down one reason the two ranks might differ, and one thing neither can tell you."
     ], write:"Country… Rank in each index and year… What each measures… Why they differ… What neither shows…"},
     {t:"Attraction, to whom?", how:[
       "Pick a film, series, song, food or sport from another country that you enjoy.",
       "Ask yourself honestly: has it changed your view of that country’s government or its foreign policy? Of its people?",
       "Note where the attraction stops, and why. This is power conversion seen from the inside."
     ], write:"The product… What I like… Did it change my view of the government? Of the people?… Where it stops…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is soft power an analytical concept or a policy slogan?",
       "2. Does the idea of sharp power clarify the debate or politicise it?",
       "3. Can a state that lacks democratic political values still have strong soft power?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing one country in two indices, a reflection on where your own attraction to a foreign product stops, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 14 “International Relations”, section 14.1 “What Is Power, and How Do We Measure It?”", note:"Read before or after this lesson to refresh the wider debate on power."},
    {book:"cullpd", where:"Section 1.3 “Soft Power”", note:"How soft power relates to public diplomacy, from a historian of the field."},
    {book:"eir", where:"Chapter 9 “Religion and Culture”", note:"Background on how culture and identity enter world politics."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u8-l2", title:"Public diplomacy: talking with the world’s publics", minutes:60,
   hook:{q:"The modern meaning of “public diplomacy” dates from 1965. Who first applied the term to a government’s information and cultural work abroad?", options:["Joseph Nye, the inventor of soft power","Edmund Gullion, a retired US diplomat","The founders of the BBC World Service","The United Nations Educational, Scientific and Cultural Organization"], answer:1, reveal:"**Edmund Gullion**, a retired American diplomat, in 1965, according to the historian Nicholas Cull. The term gave practitioners a respectable name for work that had often been called propaganda. Soft power came 25 years later. This lesson uses Cull’s map of public diplomacy, the “new public diplomacy” debate, and real cases of broadcasting and exchange."},
   goals:[
     "Explain what public diplomacy is and how it differs from traditional diplomacy and from propaganda",
     "Use Cull’s five elements (listening, advocacy, cultural diplomacy, exchange, international broadcasting) to classify real activities",
     "Explain the “new public diplomacy” and digital diplomacy, and the debates about them",
     "Compare major international broadcasters neutrally: ownership, funding and the controversies around them",
     "Assess what exchanges can and cannot do, with evidence"
   ],
   learn:[
    {h:"Diplomacy with publics, not only governments", body:[
      {lead:"Traditional diplomacy is a conversation between governments. Public diplomacy is a government talking with, and ideally listening to, other countries’ people."},
      "A reminder: [[public-diplomacy|public diplomacy]] was introduced in Japan studies as a government’s effort to communicate with foreign publics. Here we go deeper. Nicholas Cull, a historian of the field (see {{nicholas-cull}}), defines it as an international actor’s attempt to manage the international environment through engagement with a foreign public.",
      "The history is long: France founded the Alliance Française in 1883 to spread the French language; the BBC started its Empire Service, now the World Service, in 1932; both sides in the Cold War ran information agencies, such as the United States Information Agency (1953–1999). According to Cull, the term “public diplomacy” in its modern sense was first used in 1965 by Edmund Gullion, a retired US diplomat.",
      "Is it propaganda? Critics say public diplomacy is propaganda with better manners. Practitioners answer that it depends on **credibility** and two-way contact: a message known to be false destroys the trust it needs. Cull notes that any hint of a link to psychological warfare is so damaging that practitioners keep the two strictly apart."
    ]},
    {h:"Cull’s taxonomy", body:[
      "Cull’s “Public Diplomacy: Taxonomies and Histories” (2008) sorted the field into five elements. Each has its own institutions, time scale and ethics.",
      {fig:'<svg viewBox="0 0 340 330"><polygon class="d-panel" points="170,10 330,62 10,62" stroke-width="2"/><text x="170" y="50" text-anchor="middle">Public diplomacy</text><rect class="d-rose" x="10" y="72" width="155" height="70" rx="8" stroke-width="2"/><text x="87" y="102" text-anchor="middle">Advocacy</text><text class="s" x="87" y="122" text-anchor="middle">argue a policy abroad</text><rect class="d-gold" x="175" y="72" width="155" height="70" rx="8" stroke-width="2"/><text x="252" y="102" text-anchor="middle">Cultural diplomacy</text><text class="s" x="252" y="122" text-anchor="middle">share arts, language</text><rect class="d-sage" x="10" y="152" width="155" height="70" rx="8" stroke-width="2"/><text x="87" y="182" text-anchor="middle">Exchange</text><text class="s" x="87" y="202" text-anchor="middle">send and host people</text><rect class="d-lup" x="175" y="152" width="155" height="70" rx="8" stroke-width="2"/><text x="252" y="182" text-anchor="middle">Broadcasting</text><text class="s" x="252" y="202" text-anchor="middle">news for publics abroad</text><rect class="d-soft" x="10" y="232" width="320" height="58" rx="8" stroke-width="2"/><text x="170" y="256" text-anchor="middle">Listening</text><text class="s" x="170" y="276" text-anchor="middle">find out what publics think, then adjust</text><text class="s" x="170" y="316" text-anchor="middle">Cull (2008). Psychological warfare sits outside.</text></svg>', alt:"A house-shaped diagram. The roof says public diplomacy. Four boxes form the walls: advocacy (argue a policy abroad), cultural diplomacy (share arts and language), exchange (send and host people) and international broadcasting (news for publics abroad). Listening, finding out what publics think and adjusting, is the foundation.", cap:"Cull puts listening first: without it, the other four become a monologue."},
      {table:[
        ["Element","What it is","Example"],
        ["[[listening-public-diplomacy|Listening]]","Collecting and using foreign opinion","Polling abroad before a campaign; Switzerland’s image work, one of Cull’s cases"],
        ["[[advocacy-public-diplomacy|Advocacy]]","Promoting a policy to foreign publics","An ambassador’s op-ed or press briefing"],
        ["[[cultural-diplomacy|Cultural diplomacy]]","Making culture known abroad","Japan Foundation, Goethe-Institut (1951), Instituto Cervantes (1991)"],
        ["[[exchange-diplomacy|Exchange]]","Sending and receiving people","The Franco-German Youth Office, created in 1963"],
        ["[[international-broadcasting|International broadcasting]]","News and programmes for foreign audiences","BBC World Service, NHK World-Japan, Al Jazeera"]
      ]},
      "The elements pull in different directions. Advocacy wants quick results; cultural diplomacy and exchange work over decades. Broadcasters need editorial independence to be believed, which can embarrass the government that pays for them."
    ]},
    {h:"The “new public diplomacy”", body:[
      "In 2005 Jan Melissen edited *The New Public Diplomacy: Soft Power in International Relations*. His chapter argued that public diplomacy was shifting from one-way messaging to dialogue, and from governments alone to networks.",
      {table:[
        ["Old public diplomacy","New public diplomacy"],
        ["Monologue: tell foreigners about us","Dialogue: listen and engage"],
        ["Governments and their agencies","Also cities, NGOs, companies, diasporas, celebrities"],
        ["Mass media","Networks and social media"],
        ["Clear line between home and abroad","Domestic and foreign audiences overlap"]
      ]},
      "Later work built on this. Eytan Gilboa (2008) complained that the field lacked theory. R. S. Zaharna’s *Battles to Bridges* (2010) contrasted an information model with a relational, network model. [[digital-diplomacy|Digital diplomacy]], the use of social media and digital tools by foreign ministries and diplomats, was mapped in Corneliu Bjola and Marcus Holmes’ edited volume *Digital Diplomacy* (2015).",
      "Digital tools cut both ways. Foreign ministries can now reach millions directly, but so can their rivals, and posts aimed at a home audience reach foreigners too. From about 2019, foreign media used the label “wolf warrior diplomacy”, after a Chinese action film, for some Chinese diplomats’ combative posts online; Chinese officials rejected the label and described their style as answering unfair criticism. Treat it as a contested label, not a neutral term."
    ]},
    {h:"Middle powers, small states and networks", body:[
      "Public diplomacy is not only for great powers. Smaller states often pick a niche where they can be seen as useful and credible. In the 1990s Australia’s foreign minister Gareth Evans spoke of **niche diplomacy**, and Andrew Cooper’s edited book *Niche Diplomacy* (1997) studied how middle powers concentrate on a few issues.",
      "A famous case shows the new public diplomacy at work. In 1996–97 Canada’s government joined forces with the International Campaign to Ban Landmines, a coalition of NGOs, in what became known as the Ottawa Process. The Mine Ban Treaty was signed in Ottawa in December 1997, and the campaign and its coordinator Jody Williams received the Nobel Peace Prize that year. Governments and civil society shared the message, the platform and the credit.",
      "Other actors now practise public diplomacy too:",
      {list:[
        "**Diasporas**, courted by their countries of origin: India has held a Pravasi Bharatiya Divas (Overseas Indian Day) since 2003 (see [[diaspora]]).",
        "**Cities and regions**, through twinning, city networks and their own trade and culture offices abroad.",
        "**Companies, universities, artists and athletes**, whose reputations attach to their countries whether or not they wish it."
      ]},
      "The lesson for analysis: when you study a country’s public diplomacy, ask who else is speaking for it, and whether they agree with the government."
    ]},
    {h:"International broadcasters, compared", body:[
      "International broadcasting is the oldest mass tool of public diplomacy. Compare broadcasters by **ownership, funding and editorial rules**, and by what critics and defenders say.",
      {table:[
        ["Broadcaster","Founded and funded","Debates"],
        ["BBC World Service (UK)","1932; licence fee plus a government grant","Praised for credibility; arguments over funding cuts and independence"],
        ["NHK World-Japan","NHK’s overseas service since 1935; public broadcaster","Seen as reliable but cautious; debate on how far it should present government views"],
        ["Deutsche Welle (Germany)","1953; federal budget, independent by law","Language services cut and opened as priorities change"],
        ["Al Jazeera (Qatar)","1996, funded by Qatar; English channel from 2006","Praised for giving Arab and Global South views; accused by some governments of bias"],
        ["CGTN (China)","Launched 2016 by state broadcaster CCTV","Expanding fast; the UK regulator Ofcom revoked its UK licence in 2021, which China’s government said was driven by political prejudice"]
      ]},
      "Governments also restrict rivals’ broadcasters. The European Union suspended Russia’s RT in March 2022 after the invasion of Ukraine, calling it a tool of war propaganda; Russia called the ban censorship. Funding changes too: from March 2025 the US administration moved to shut down or sharply cut Voice of America and other US-funded broadcasters, and in March 2026 a federal judge ruled that steps to dismantle Voice of America were unlawful, and the administration said it would appeal. Check the current status before you cite it.",
      {tip:"Media systems and [[state-media|state media]] are analysed in more depth in the unit on media and world politics. Here, the question is narrower: when does a broadcaster’s credibility help its funder, and when does the funder’s control hurt its credibility?"}
    ]},
    {h:"Exchanges: slow, deep and hard to control", body:[
      "Exchanges send and receive students, scholars, artists, young leaders and professionals. Governments fund scholarships for foreign students, short visitor programmes for future leaders, youth exchanges and regional university mobility schemes. The logic is slow: people who have lived somewhere carry personal ties and first-hand knowledge home, sometimes into positions of power.",
      "Is there evidence? Carol Atkinson’s study of US-hosted exchanges between 1980 and 2006 (*Foreign Policy Analysis*, 2010) found that they were associated with the spread of liberal values into authoritarian states, especially when participants had deep social contact abroad and later reached influential positions. Her three conditions are worth remembering because they turn a vague hope into testable claims: the **depth and extent of social interaction** while abroad, a **shared sense of community** with hosts, and the participant’s later **position of political influence** at home.",
      "Design matters too. The Franco-German Youth Office, created by the two governments in 1963 after the Élysée Treaty, has supported exchanges for generations of young people from two countries that had fought three wars between 1870 and 1945. Cull counts it among public diplomacy’s clearest successes, because it was long-term, reciprocal and built on a real political reconciliation.",
      "But exchange is not a guarantee. Cull’s cases include Sayyid Qutb, an Egyptian educator who studied in the United States from 1948 to 1950 and returned deeply hostile to American society; he became a leading Islamist thinker. Researchers also warn of [[selection-bias|selection bias]]: people who choose to go abroad may already be open to the host country, so exchanges may get credit for attitudes that were there before.",
      {terms:["public-diplomacy","new-public-diplomacy","listening-public-diplomacy","advocacy-public-diplomacy","cultural-diplomacy","exchange-diplomacy","international-broadcasting","digital-diplomacy"]}
    ]}
   ],
   try:[
    {id:"e4u8-l2-x1", type:"order", q:"Put these milestones of public diplomacy in time order.", items:[
      {t:"The Alliance Française is founded", why:"1883: one of the oldest institutions for promoting a language abroad."},
      {t:"The BBC begins its Empire Service, later the World Service", why:"1932."},
      {t:"The Goethe-Institut is founded", why:"1951, in West Germany."},
      {t:"The United States Information Agency is created", why:"1953; it was folded into the State Department in 1999."},
      {t:"Edmund Gullion gives “public diplomacy” its modern meaning", why:"1965, according to Cull."},
      {t:"The Japan Foundation is set up", why:"1972."},
      {t:"Al Jazeera begins broadcasting", why:"1996, funded by Qatar."},
      {t:"CGTN is launched", why:"At the end of 2016, by China’s state broadcaster CCTV."}
    ]},
    {id:"e4u8-l2-x2", type:"sort", q:"Which of Cull’s five elements does each activity belong to?", buckets:["Listening","Advocacy","Cultural diplomacy","Exchange","Broadcasting"], items:[
      {t:"An embassy commissions a poll on how local people see its country before planning a campaign.", b:0, why:"Collecting foreign opinion to shape policy is listening."},
      {t:"An ambassador writes a newspaper article defending a new trade policy.", b:1, why:"Promoting a specific policy to a foreign public is advocacy."},
      {t:"A cultural institute tours a dance company and offers language classes.", b:2, why:"Making a country’s culture known abroad is cultural diplomacy."},
      {t:"A government funds two-year study places for young professionals from abroad.", b:3, why:"Hosting foreign citizens for study is exchange."},
      {t:"A public broadcaster launches a news service in Swahili.", b:4, why:"News for foreign audiences is international broadcasting."},
      {t:"A foreign ministry tracks social media in a partner country and adjusts its messages.", b:0, why:"Monitoring and adjusting is listening, even when done digitally."}
    ]},
    {id:"e4u8-l2-x3", type:"mcq", q:"Which feature best marks the “new public diplomacy” described by Melissen (2005)?", options:[
      {t:"A shift from one-way messaging by governments to dialogue through networks that include non-state actors.", ok:true, why:"Right: dialogue, networks and many actors are the core of the new public diplomacy."},
      {t:"A return to Cold War information agencies with larger budgets.", why:"That would be the “old” model of state-run messaging."},
      {t:"The replacement of public diplomacy by military power.", why:"The debate is about how public diplomacy is done, not about replacing it."},
      {t:"A rule that only foreign ministries may engage foreign publics.", why:"The opposite: the new public diplomacy stresses cities, NGOs, companies and diasporas too."}
    ]},
    {id:"e4u8-l2-x4", type:"match", q:"Match each broadcaster to an accurate fact about it.", pairs:[
      ["BBC World Service","Began in 1932 as the Empire Service","It is funded by the licence fee plus a government grant."],
      ["Deutsche Welle","Founded in 1953 and funded from Germany’s federal budget","It is independent by law."],
      ["Al Jazeera","Launched in 1996 with funding from Qatar","Its English channel followed in 2006."],
      ["CGTN","Lost its UK broadcasting licence in 2021","Ofcom revoked it; China’s government said the decision was driven by political prejudice."],
      ["NHK World-Japan","International service of Japan’s public broadcaster","NHK has broadcast overseas since 1935."]
    ]},
    {id:"e4u8-l2-x5", type:"spot", q:"Tap each phrase in this student paragraph that is **not neutral or not supported**.", ask:"not neutral or not supported", parts:[
      {t:"Al Jazeera, funded by the government of Qatar, launched in 1996.", flag:false, why:"Accurate and neutral."},
      " ",
      {t:"It is obviously just a mouthpiece for Doha.", flag:true, why:"An opinion stated as fact. Attribute it: some governments accuse it of bias; others praise its coverage."},
      " ",
      {t:"Ofcom revoked CGTN’s UK licence in 2021; China’s government said the decision was driven by political prejudice.", flag:false, why:"Neutral: it reports the decision and the reply, each attributed."},
      " ",
      {t:"Western broadcasters like the BBC are always objective.", flag:true, why:"An unsupported generalisation. The BBC is widely seen as credible, but it has its own critics and debates."},
      " ",
      {t:"Comparing ownership, funding and editorial rules helps readers judge each source.", flag:false, why:"A sound method."}
    ]},
    {id:"e4u8-l2-x6", type:"mcq", q:"A ministry reports that 90% of its exchange alumni hold favourable views of the host country, and calls this proof that exchanges work. What is the strongest objection?", options:[
      {t:"Selection bias: people who chose to go may have been favourable before they went.", ok:true, why:"Right. Without knowing their views before the exchange, or comparing with similar people who did not go, the figure cannot show an effect."},
      {t:"90% is too high to be true.", why:"A high figure is possible. The problem is what it can show, not its size."},
      {t:"Exchanges are hard power.", why:"Exchanges are a soft power tool; the issue is evidence of effect."},
      {t:"Favourable views never matter.", why:"Too strong, and not the methodological point. Goldsmith and Horiuchi, for example, found that foreign opinion can affect cooperation."}
    ]},
    {id:"e4u8-l2-x7", type:"mcq", q:"Why does Cull include Sayyid Qutb among his cases of failure?", options:[
      {t:"He studied in the United States in 1948–50 and returned deeply hostile to American society, showing that exchanges do not guarantee attraction.", ok:true, why:"Yes. Contact can deepen understanding or produce rejection; exchange has no guaranteed direction."},
      {t:"He ran a broadcaster that spread false news.", why:"Qutb was an educator and writer; his case concerns exchange, not broadcasting."},
      {t:"He was the official who closed the US information agency.", why:"The agency was folded into the State Department in 1999 by US legislation, not by Qutb."},
      {t:"He proved that exchanges always fail.", why:"One case cannot prove that; Cull also presents exchange successes, such as Franco-German reconciliation."}
    ]}
   ],
   apply:{
    intro:"Look at public diplomacy as it happens. Everything here is free and public.",
    tasks:[
     {t:"One story, two broadcasters", how:[
       "Choose a current international event. Find how two international broadcasters from different countries report it (for example, two of BBC World Service, NHK World-Japan, DW, Al Jazeera English, CGTN, France 24).",
       "Note the headline, the first sources quoted, and what is left out.",
       "Write which of Cull’s elements the coverage serves (broadcasting, advocacy, or both) and how the funder might benefit."
     ], write:"Event… Broadcaster 1: headline, sources, omissions… Broadcaster 2… What differs… Whose interests are served…"},
     {t:"Classify an embassy’s feed", how:[
       "Open the public social media account or news page of one country’s embassy in another country.",
       "Classify its last ten posts using Cull’s five elements.",
       "Is anyone listening? Look for replies, polls or questions."
     ], write:"Embassy… Count per element… Evidence of listening… What this says about old versus new public diplomacy…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Where is the line between public diplomacy and propaganda?",
       "2. Can a government-funded broadcaster be both credible and useful to its funder?",
       "3. Has social media made public diplomacy more democratic or simply noisier?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A comparison of two broadcasters’ coverage of one event, a classified list of an embassy’s posts, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"cullpd", where:"Sections 2 “The Evolution of PD as a Concept and its Core Approaches” and 3 “Three Taxonomies of PD”", note:"The taxonomy from its author, with history for each element."},
    {book:"cullpd", where:"Sections 4 “Lessons from Five Cases of Success” and 5 “Warnings from Five Cases of Failure”", note:"Ten short cases, including the Franco-German exchanges and Sayyid Qutb."},
    {book:"eir", where:"Chapter 2 “Diplomacy” (Stephen McGlinchey)", note:"Background on traditional diplomacy, the baseline public diplomacy departs from."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u8-l3", title:"Nation branding and cultural industries", minutes:60,
   hook:{q:"In 2002 *The Economist* reported a target set by Thailand’s government for its “Global Thai” programme. What was it?", options:["One Thai film in every major festival","8,000 Thai restaurants around the world by 2003","A Thai cultural centre in every capital","Thai to become an official UN language"], answer:1, reveal:"**8,000 Thai restaurants worldwide**, up from about 5,500 at the time, according to *The Economist* (February 2002). The scheme offered loans, training and approved recipes to help Thai restaurants open abroad. Scholars now call this kind of policy **gastrodiplomacy**. Governments treat food, films and pop music as part of the national image. This lesson asks how nation branding and cultural-industry policy work, and why many scholars are wary of them."},
   goals:[
     "Explain nation branding, Anholt’s six dimensions and his later shift to “competitive identity”",
     "Analyse Cool Japan as a policy, with its results and critiques",
     "Explain the Korean Wave as both a market phenomenon and a policy, and its limits",
     "Describe China’s cultural diplomacy and the Confucius Institute debate neutrally",
     "Describe India’s cultural assets and policies, from cinema to yoga",
     "Summarise the main critiques of branding nations"
   ],
   learn:[
    {h:"From public diplomacy to nation branding", body:[
      {lead:"If companies have brands, do countries have them too?"},
      "In the late 1990s the British policy adviser Simon Anholt began writing about the [[nation-branding|nation brand]]: the reputation a country has in the minds of people abroad (see {{simon-anholt}}). From 2005 he ran a survey, now the Anholt-Ipsos [[nation-brands-index|Nation Brands Index]], built around six dimensions of reputation.",
      {fig:'<svg viewBox="0 0 340 300"><polygon class="d-lup" points="170,70 239,110 239,190 170,230 101,190 101,110" stroke-width="2"/><text x="170" y="146" text-anchor="middle">Nation</text><text x="170" y="164" text-anchor="middle">brand</text><text x="170" y="56" text-anchor="middle">Exports</text><text x="249" y="106" text-anchor="start">Governance</text><text x="249" y="200" text-anchor="start">Culture</text><text x="170" y="252" text-anchor="middle">People</text><text x="91" y="200" text-anchor="end">Tourism</text><text class="s" x="91" y="100" text-anchor="end">Immigration,</text><text class="s" x="91" y="116" text-anchor="end">investment</text><text class="s" x="170" y="288" text-anchor="middle">Anholt’s hexagon of national reputation</text></svg>', alt:"A hexagon labelled nation brand. Its six corners are exports, governance, culture, people, tourism, and immigration and investment.", cap:"The six dimensions of the Nation Brands Index. Each is measured by asking people abroad what they think."},
      "Anholt later became one of branding’s sharpest critics. In *Competitive Identity* (2007) and later talks he argued that there is no evidence that advertising campaigns change a country’s image; reputations change when a country’s policies and behaviour change. That idea is called [[competitive-identity|competitive identity]]. In 2014 he launched the Good Country Index, which ranks countries by what they contribute to humanity rather than how they are seen.",
      "Governments kept branding anyway: slogans such as “Incredible India” (from 2002), Germany’s “Land of Ideas” around the 2006 World Cup, and Britain’s “GREAT” campaign from 2011–12."
    ]},
    {h:"Cool Japan: policy meets pop culture", body:[
      "A reminder from Japan studies: Douglas McGray’s 2002 essay on Japan’s “gross national cool” fed a policy called [[cool-japan|Cool Japan]]. Here is how the policy developed:",
      {table:[
        ["Year","Step"],
        ["2008","The foreign ministry names the cartoon robot cat Doraemon an “anime ambassador”, part of [[pop-culture-diplomacy|pop-culture diplomacy]]"],
        ["2010","The Ministry of Economy, Trade and Industry (METI) creates an office to promote creative industries abroad"],
        ["2013","The Cool Japan Fund, a public–private investment fund, is set up"],
        ["2026","After years of reported losses, Japanese media reported in August 2026 that METI planned to stop new funding; a review was under way and no final decision had been announced at the time"]
      ]},
      "Scholars are divided on what Cool Japan shows. Supporters say the state helped firms reach markets they could not reach alone. Critics say the fund picked weak investments and that the boom in anime and manga abroad came from fans, streaming platforms and companies, not from policy. Iwabuchi Kōichi (2015) called the approach **[[brand-nationalism|brand nationalism]]**: it turns popular culture into a national asset and narrows “Japan” to images that sell, leaving out the country’s diversity and its neighbours’ memories of war (see {{japan-and-neighbours}})."
    ]},
    {h:"The Korean Wave: market, state, or both?", body:[
      "The term [[hallyu|Hallyu]] (한류, “Korean Wave”) was coined by Chinese journalists; its first known use was in the *Beijing Youth Daily* in November 1999, about Chinese viewers’ enthusiasm for Korean dramas and pop songs. The drama *Winter Sonata* carried the wave to Japan in 2003–04. Psy’s “Gangnam Style” became the first YouTube video to pass one billion views in December 2012; *Parasite* became the first film not in English to win the Oscar for Best Picture in 2020; BTS spoke at a UN event for young people in 2018.",
      "Was the wave planned? South Korea passed a basic law to promote cultural industries in 1999, after the Asian financial crisis, and later created the Korea Creative Content Agency (2009). Some scholars stress this state support; others stress private entertainment companies, their training systems, global platforms and fans. Most now describe a mix in which the state followed and amplified a market success.",
      {tip:"A good seminar answer avoids “the state did it” and “the market did it”. Ask which actors did what, when, and with what evidence."},
      "The wave has limits. After South Korea agreed to deploy a US missile defence system (THAAD) in 2016, Korean media and firms reported informal Chinese restrictions on Korean dramas, concerts and group tours; China’s government did not acknowledge a formal ban. In Japan, a comic titled *Kenkanryū* (“Hating the Korean Wave”, 2005) sold widely. Popularity does not dissolve political disputes."
    ]},
    {h:"China’s cultural diplomacy and the Confucius Institutes", body:[
      "China’s government has invested heavily in cultural diplomacy: state media abroad (Lesson 2), scholarships, festivals and the [[confucius-institute|Confucius Institutes]] (see {{confucius-institutes}}). The first opened in Seoul in 2004. Unlike most [[cultural-institute|cultural institutes]], which run their own buildings, a Confucius Institute is usually a partnership placed inside a host university or school, with Chinese funding and teachers. Since 2020 the brand has been run by the Chinese International Education Foundation, which reported about 500 institutes at the end of 2023.",
      "The debate, attributed:",
      {list:[
        "**Critics** (for example the American Association of University Professors in 2014, the anthropologist Marshall Sahlins, and some governments) argue that placing a foreign state’s programme inside universities risks self-censorship on topics such as Taiwan, Tibet and Tiananmen, and lacks transparency. A 2019 review by the US Government Accountability Office found that most agreements were similar, while some school officials and researchers raised concerns about possible self-censorship. Many institutes in the United States and Europe have closed since 2018.",
        "**Defenders** (China’s government, many host institutions, and some researchers) say the institutes teach language and culture like the British Council or the Goethe-Institut, that hosts control academic matters, and that they meet real demand. Research in some African countries, such as Maria Repnikova’s work on Ethiopia, finds that many students value them for practical reasons such as scholarships and jobs."
      ]},
      {warn:"Describe the arrangements, the specific allegations and the specific replies, each attributed. Avoid both “propaganda centres” and “just language schools” as conclusions unless your evidence shows it."}
    ]},
    {h:"India: cinema, yoga and diaspora", body:[
      "India founded the Indian Council for Cultural Relations in 1950. Its best-known cultural export, popular cinema, owes little to the state. Raj Kapoor’s *Awaara* (1951) was a hit in the Soviet Union; Hindi films have long had audiences in northern Nigeria, the Middle East and Southeast Asia. Note that “Bollywood”, the Mumbai Hindi-language industry, is only part of Indian cinema: *RRR* (2022), whose song “Naatu Naatu” won an Oscar in 2023, is a Telugu film.",
      "The government also promotes yoga. After Prime Minister Narendra Modi proposed it at the UN in 2014, the General Assembly adopted resolution 69/131 on 11 December 2014, with 177 co-sponsors, making 21 June the International Day of Yoga. Daya Kishan Thussu’s *Communicating India’s Soft Power: Buddha to Bollywood* (2013) surveys these assets and the Indian [[diaspora]], and argues that they are not yet matched by a strategy for converting them into influence. The writer and politician Shashi Tharoor has long made a related point: India’s soft power lies mainly in its society, its films, music, food and cricket, rather than in government campaigns."
    ]},
    {h:"Why many scholars distrust branding", body:[
      "Nadia Kaneva (2011) reviewed the field and called for critical research; Melissa Aronczyk’s *Branding the Nation* (2013) studied the consultants behind national campaigns. Their main concerns:",
      {list:[
        "**Commodification:** national identity becomes a product designed for foreign buyers.",
        "**Depoliticisation:** debates about who the nation is get settled by consultants and focus groups, not citizens.",
        "**Exclusion:** minorities, regions and uncomfortable histories drop out of the brand.",
        "**Weak evidence:** campaigns rarely show measurable effects, as Anholt himself argues."
      ]},
      "Defenders reply that every country is judged abroad anyway, so managing reputation is sensible, especially for small or poorer states that are otherwise known only through crises.",
      {ex:"Watch a two-minute national promotion video and note:\n• Who appears? (age, region, ethnicity, gender, city or countryside)\n• What is shown? (temples and food, or factories and parliaments?)\n• What is absent? (minorities, migrants, poverty, contested history)\n• Who is the imagined viewer? (tourist, investor, student, foreign government)\n• Which hexagon dimensions are targeted, and which are avoided?", label:"Worked example: reading a branding video"},
      "Applied to many campaigns, this checklist shows the same pattern: they sell heritage, food and landscapes to tourists and investors, and say little about governance, the dimension Anholt found hardest to change. This is the kind of close reading of images that the unit on culture and representation develops further, and it works for food campaigns too. Thailand’s restaurant programme was followed by others, such as South Korea’s drive from the late 2000s to globalise Korean cuisine and Peru’s promotion of its food abroad. Each makes everyday consumption part of the nation’s image, and each raises the same question: whose dishes and whose regions stand for the nation?",
      {terms:["nation-branding","nation-brands-index","competitive-identity","pop-culture-diplomacy","brand-nationalism","hallyu","gastrodiplomacy","cultural-institute","confucius-institute"]}
    ]}
   ],
   try:[
    {id:"e4u8-l3-x1", type:"match", q:"Match each piece of evidence to the dimension of Anholt’s hexagon it mainly concerns.", pairs:[
      ["Foreign shoppers trust the country’s cars and electronics","Exports","Exports are about products and their country-of-origin image."],
      ["Respondents abroad think its government is competent and fair","Governance","Governance covers views of the government and its conduct."],
      ["Its films, music and heritage are admired","Culture","Culture includes heritage and contemporary culture."],
      ["Visitors say its people are welcoming","People","People covers how welcoming and friendly residents seem."],
      ["Professionals would like to live and work there","Immigration and investment","This dimension covers the appeal for living, working, studying and investing."]
    ]},
    {id:"e4u8-l3-x2", type:"sort", q:"Does each factor in the Korean Wave’s rise come mainly from the state or from the market and society?", buckets:["Mainly state","Mainly market and society"], items:[
      {t:"A 1999 basic law promoting cultural industries", b:0, why:"Legislation and public funding are state actions."},
      {t:"The Korea Creative Content Agency, created in 2009", b:0, why:"A public agency supporting content industries."},
      {t:"Entertainment companies’ long training systems for idols", b:1, why:"Private firms built and run these systems."},
      {t:"Fans translating and sharing videos online", b:1, why:"Fan activity is civil society, not policy."},
      {t:"Global streaming platforms buying Korean series", b:1, why:"Commercial decisions by platforms."},
      {t:"Cultural centres abroad run by the government", b:0, why:"Government-run cultural institutes are state cultural diplomacy."}
    ]},
    {id:"e4u8-l3-x3", type:"mcq", q:"Which sentence describes the Confucius Institute debate most neutrally?", options:[
      {t:"Critics argue that hosting the institutes inside universities risks self-censorship; China’s government and many hosts say they teach language and culture like other national institutes.", ok:true, why:"Right: both positions, each attributed, with the specific concern named."},
      {t:"Confucius Institutes are propaganda centres, as everyone now agrees.", why:"Not neutral and not accurate: the institutes have defenders, and the claim needs evidence."},
      {t:"Confucius Institutes are just language schools and all criticism is prejudice.", why:"Not neutral either: it dismisses documented concerns, such as those in the 2019 US review."},
      {t:"Confucius Institutes are identical to the British Council.", why:"Inaccurate: most are partnerships placed inside host institutions, unlike the British Council’s own centres."}
    ]},
    {id:"e4u8-l3-x4", type:"order", q:"Put these steps of the Korean Wave in time order.", items:[
      {t:"Chinese media coin the term “Korean Wave”", why:"November 1999, in the *Beijing Youth Daily*."},
      {t:"*Winter Sonata* becomes a hit in Japan", why:"2003–04."},
      {t:"The Korea Creative Content Agency is created", why:"2009, bringing several public support bodies together."},
      {t:"“Gangnam Style” passes one billion YouTube views", why:"December 2012, the first video to do so."},
      {t:"Reports of informal Chinese restrictions after the THAAD decision", why:"From 2016."},
      {t:"*Parasite* wins the Oscar for Best Picture", why:"2020, the first film not in English to win it."}
    ]},
    {id:"e4u8-l3-x5", type:"mcq", q:"What does Iwabuchi mean by “brand nationalism” in Japan’s case?", options:[
      {t:"The state treats popular culture as a national asset to sell abroad, narrowing “Japan” to marketable images.", ok:true, why:"Yes. His critique is that branding packages culture for the nation’s image and leaves out diversity and history."},
      {t:"Japanese fans refuse to buy foreign brands.", why:"That would be consumer nationalism, not Iwabuchi’s argument about cultural policy."},
      {t:"Anime companies are owned by the state.", why:"They are private companies; the critique concerns how the state frames their products."},
      {t:"Japan bans foreign films.", why:"Japan imports many films; this is not his point."}
    ]},
    {id:"e4u8-l3-x6", type:"spot", q:"Tap each claim in this draft that is **inaccurate or overstated**.", ask:"inaccurate or overstated", parts:[
      {t:"The UN General Assembly made 21 June the International Day of Yoga in December 2014.", flag:false, why:"Accurate: resolution 69/131, adopted on 11 December 2014."},
      " ",
      {t:"*RRR*, whose song won an Oscar in 2023, is a typical Bollywood film.", flag:true, why:"Inaccurate: *RRR* is a Telugu-language film. Bollywood is the Hindi-language industry, one part of Indian cinema."},
      " ",
      {t:"Indian popular cinema has had audiences abroad for decades, from the Soviet Union to Nigeria.", flag:false, why:"Accurate: *Awaara* (1951) in the USSR and Hindi films in northern Nigeria are well documented."},
      " ",
      {t:"These films prove that India’s government has mastered soft power.", flag:true, why:"Overstated: popular cinema is largely market-led, and Thussu argues India has not yet converted its assets into influence."},
      " ",
      {t:"The Indian Council for Cultural Relations dates from 1950.", flag:false, why:"Accurate."}
    ]},
    {id:"e4u8-l3-x7", type:"mcq", q:"Fatima works for a small country’s tourism board. She proposes a glossy advertising campaign to change how the world sees her country. According to Anholt’s later view, what is the main problem?", options:[
      {t:"Reputations change mainly when a country’s policies and behaviour change, not through advertising.", ok:true, why:"Right. This is the core of “competitive identity”: you earn a reputation; you can’t buy it."},
      {t:"Small countries cannot have a reputation.", why:"Every country has some image abroad; the question is how it changes."},
      {t:"Advertising is illegal for governments.", why:"It is not illegal; Anholt’s point is that it rarely works."},
      {t:"Only the Nation Brands Index can change a reputation.", why:"An index measures reputation; it does not create it."}
    ]}
   ],
   apply:{
    intro:"Examine branding and cultural policy from the outside. Use free official pages and your own experience.",
    tasks:[
     {t:"Deconstruct a national campaign", how:[
       "Find one national branding or tourism campaign online (a video, slogan or website) from any country.",
       "List the images it uses and the six hexagon dimensions it targets.",
       "Note who or what is missing: regions, minorities, histories, problems."
     ], write:"Campaign and country… Images used… Dimensions targeted… What is missing… Who decided?"},
     {t:"Follow a cultural product’s path", how:[
       "Choose one cultural product from Asia that you know (a K-drama, an anime, a Hindi or Telugu film, a dish).",
       "Trace how it reached you: platform, company, fan community, government programme.",
       "Decide whether state or market played the bigger role, and what evidence you would need to be sure."
     ], write:"Product… Its path to me… State role… Market and fan role… Evidence I would need…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Can a government create a cultural wave, or only ride one?",
       "2. Is nation branding a threat to democratic debate about national identity?",
       "3. How should a university decide whether to host a foreign government’s cultural institute?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes analysing one branding campaign, a traced path for one cultural product, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"cullpd", where:"Section 4.1 “Listening: Re-Branding Switzerland” and Section 6.3 “Cultural Diplomacy: Diasporas and the Potential of the Blog”", note:"A branding case and cultural diplomacy online."},
    {book:"dbb", where:"Chapter 3, section 4 “Efforts to Promote Understanding and Trust in Japan”, starting with subsection 1 “Strategic Communications” (including JAPAN HOUSE)", note:"Japan’s official view of its public and cultural diplomacy; read it as a primary source."},
    {book:"eir", where:"Chapter 9 “Religion and Culture”", note:"Culture and identity in world politics."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u8-l4", title:"Mega-events, heritage and sport", minutes:60,
   hook:{q:"At the PyeongChang Winter Olympics in 2018, athletes from North and South Korea did something for the first time in Olympic history. What?", options:["Marched together behind one flag at the opening ceremony","Competed as one unified team in an Olympic event","Shared a single national anthem on the podium","Held a joint press conference with the IOC"], answer:1, reveal:"**They competed as one unified team**, in women’s ice hockey. Marching together was not new: the two delegations had marched together at Sydney in 2000 and at several Games after. Sport can open doors that diplomacy keeps shut, as ping-pong did between the United States and China in 1971. This lesson looks at hosting mega-events, nominating World Heritage sites and sports diplomacy: what states hope to gain, and what can go wrong."},
   goals:[
     "Explain why states bid for sports mega-events and the gains and risks at each stage",
     "Compare Beijing 2008 and 2022, Tokyo 2020 (held in 2021) and Qatar 2022, giving each side’s view",
     "Use the concepts of soft disempowerment and sportswashing with care",
     "Explain how the World Heritage system works and why nominations become political",
     "Analyse sports diplomacy, from ping-pong in 1971 to the unified Korean team in 2018"
   ],
   learn:[
    {h:"Why host the world?", body:[
      {lead:"Hosting the Olympics or the World Cup is one of the most expensive things a government can do. Why do so many try?"},
      "A [[sports-mega-event|sports mega-event]] is a very large international sporting event, such as the Olympic Games or the FIFA World Cup, with a global audience and heavy public spending. Hosts hope for several things at once: global attention, a new image, investment, tourism and national pride. Many Games have been read as a “coming-out party” for a country: Tokyo 1964, the first Olympics in Asia, displayed Japan’s recovery; Seoul 1988 coincided with South Korea’s democratisation; the 2010 World Cup in South Africa was the first in Africa; Rio de Janeiro hosted the first Olympics in South America in 2016.",
      "Jonathan Grix and Donna Lee (2013) argued that emerging states are especially drawn to mega-events as a way to seek attraction and status. The diagram shows gains and risks at each stage.",
      {fig:'<svg viewBox="0 0 340 340"><defs><marker id="e8a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="32">1 Bid</text><text class="s" x="22" y="50">+ signals ambition and capacity</text><text class="s" x="22" y="66">− costly; past bids hit by scandals</text><path class="d-ink" d="M170,76 V88" stroke-width="2" marker-end="url(#e8a)"/><rect class="d-panel" x="10" y="92" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="114">2 Build</text><text class="s" x="22" y="132">+ transport, venues, jobs</text><text class="s" x="22" y="148">− overruns, evictions, labour abuses</text><path class="d-ink" d="M170,158 V170" stroke-width="2" marker-end="url(#e8a)"/><rect class="d-panel" x="10" y="174" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="196">3 Host</text><text class="s" x="22" y="214">+ a global audience for the host</text><text class="s" x="22" y="230">− protests, boycotts, scrutiny</text><path class="d-ink" d="M170,240 V252" stroke-width="2" marker-end="url(#e8a)"/><rect class="d-panel" x="10" y="256" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="278">4 Legacy</text><text class="s" x="22" y="296">+ tourism, image, sport for all</text><text class="s" x="22" y="312">− unused venues, debt</text><text class="s" x="170" y="336" text-anchor="middle">Gains (+) and risks (−) at each stage</text></svg>', alt:"Four stacked boxes joined by arrows: bid, build, host and legacy. Each lists a gain and a risk. Bid: signals ambition, but is costly and past bids were hit by scandals. Build: transport, venues and jobs, but overruns, evictions and labour abuses. Host: a global audience, but protests, boycotts and scrutiny. Legacy: tourism, image and sport for all, but unused venues and debt.", cap:"Every stage can add to or subtract from a host’s image."}
    ]},
    {h:"Three hosts, many views", body:[
      "Each case below has supporters and critics. Learn to state both.",
      {table:[
        ["Event","What the host sought","What critics raised"],
        ["Beijing 2008 Summer and 2022 Winter Games","2008: “One World, One Dream”, a modern China; Beijing became the first city to host both Games","2008: protests during the torch relay over Tibet; 2022: a diplomatic boycott by the US, UK, Canada, Australia and others over human rights, which China called politicising sport"],
        ["Tokyo 2020, held in 2021","Recovery after the 2011 disaster; a “safe” Games in a pandemic","Postponed in March 2020, held largely without spectators; public opinion was divided; a later bribery scandal over sponsorship deals led to criminal charges"],
        ["FIFA World Cup, Qatar 2022","The first World Cup in the Arab world; a showcase for a small state","Treatment of migrant workers under the [[kafala]] system and LGBT rights; Qatar pointed to labour reforms and said much criticism showed double standards"]
      ]},
      "Qatar’s case shows how disputes over facts become part of the story. Estimates of migrant worker deaths differ greatly, depending on which deaths are counted and whether they are linked to World Cup projects. Qatar introduced a minimum wage in 2021 and changed rules on changing jobs; human rights groups said enforcement remained weak. Saudi Arabia, due to host the 2034 World Cup, faces similar debates.",
      "The map of hosts is shifting. The 2026 World Cup was shared by Canada, Mexico and the United States; the 2030 tournament is to be co-hosted by Morocco, Portugal and Spain, with opening matches in Argentina, Paraguay and Uruguay to mark the centenary; Brisbane will host the 2032 Olympics. Co-hosting spreads costs and also spreads the image effects, good and bad, across several countries.",
      {ex:"Event: a city in Country X hosts a regional games.\n• Message: what image does X’s government promote? (modern, welcoming, united)\n• Audiences: home voters, neighbours, global media, sponsors\n• Gains: which stage of the cycle produced them?\n• Risks: what did scrutiny reveal? (costs, evictions, labour, rights)\n• Verdict for each audience: attraction, soft disempowerment, or little change?", label:"Worked example: analysing any mega-event"},
      {tip:"A memorable media example to watch: at the Rio 2016 closing ceremony, Japan’s handover segment for Tokyo 2020 featured Prime Minister Abe Shinzō appearing as the video-game character Mario. Ask what image it projected, and to whom."}
    ]},
    {h:"Soft disempowerment and sportswashing", body:[
      "Paul Michael Brannagan and Richard Giulianotti (2015) studied Qatar and coined [[soft-disempowerment|soft disempowerment]]: losing attraction because of the scrutiny that a high-profile event brings. Hosting invites the world to look, and it may not like everything it sees.",
      "[[sportswashing|Sportswashing]] is a critics’ term for using sport to distract from or improve a reputation damaged by human rights abuses. Human rights groups use it often; host governments reject it, saying that sport opens societies and that critics apply standards unevenly. In analysis, treat it as a **claim to be tested**, not a description: what exactly is being “washed”, for which audience, and is there evidence that views changed?",
      {key:"The same event can create soft power and soft disempowerment at once, for different audiences."}
    ]},
    {h:"Heritage as diplomacy", body:[
      "The UNESCO [[world-heritage-convention|World Heritage Convention]] was adopted in 1972. States nominate sites; expert advisory bodies (ICOMOS for cultural sites, IUCN for natural ones) evaluate them; the 21-member World Heritage Committee, made up of states, decides. A site must have [[outstanding-universal-value|outstanding universal value]]. A listing brings prestige and tourists, which is why [[heritage-diplomacy|heritage diplomacy]] matters to governments.",
      "Because states decide, nominations can become political. Lynn Meskell’s *A Future in Ruins* (2018) argued that committee members increasingly vote on political lines, sometimes against expert advice. Two cases, told with both sides:",
      {list:[
        "**Sites of Japan’s Meiji Industrial Revolution (2015).** Japan presented the sites as the story of its industrial modernisation from the 1850s to 1910. South Korea objected that Koreans were forced to work at some sites during the Second World War. At inscription, Japan’s delegation acknowledged that many Koreans and others were “brought against their will and forced to work under harsh conditions”, and promised to explain the full history. Japan’s government later said this did not mean forced labour in the legal sense; South Korea read it as an admission. The committee has since repeatedly asked Japan to improve how it explains this history, while Japan says it has implemented its commitments. (See {{japan-and-neighbours}} and the [[history-problem|history problem]].)",
        "**Temple of Preah Vihear (2008).** Cambodia’s nomination of the temple on its border with Thailand, inscribed in 2008, triggered protests in Thailand and armed clashes between the two countries’ forces. In 2013 the International Court of Justice, interpreting its own 1962 judgment, found that Cambodia had sovereignty over the whole promontory of the temple. Thailand’s government and Thai critics had argued that the listing should wait until the surrounding border area was settled, or be prepared jointly; Cambodia held that the temple was its own, as the Court had ruled in 1962. Border tensions have flared again since, including armed clashes in 2025."
      ]},
      "Heritage diplomacy can also be cooperative. In 2014 China, Kazakhstan and Kyrgyzstan jointly inscribed a stretch of the Silk Roads, a nomination that crossed borders by design. UNESCO’s separate 2003 Convention on intangible cultural heritage lists living practices: in 2013, for example, it inscribed both *washoku*, Japan’s traditional dietary culture, and *kimjang*, the Korean practice of making and sharing kimchi. Such listings feed nation branding and gastrodiplomacy (Lesson 3), and occasionally rivalry over who “owns” a shared tradition.",
      "A later case shows the process can also produce compromise: the Sado Island Gold Mines were inscribed in 2024 with South Korea’s agreement after Japan agreed to exhibit the history of Korean workers there and to hold an annual memorial. Disputes followed: South Korean critics said the exhibit avoided calling the work forced, and South Korea stayed away from the first memorial in November 2024 over Japan’s choice of government representative. Japan says it has kept its commitments."
    ]},
    {h:"Sports diplomacy: when the ball opens doors", body:[
      "[[sports-diplomacy|Sports diplomacy]] uses sporting contacts to open or ease relations. The classic case is [[ping-pong-diplomacy|ping-pong diplomacy]]. At the 1971 World Table Tennis Championships in Nagoya, Japan, a chance encounter between the American player Glenn Cowan and the Chinese star Zhuang Zedong was followed by China’s invitation to the US team, which Mao Zedong personally approved. The team visited China in April 1971; Henry Kissinger made a secret trip to Beijing that July; President Nixon visited China in February 1972.",
      {table:[
        ["Case","What sport did"],
        ["India–Pakistan “cricket diplomacy”","Leaders used matches for informal talks, such as President Zia ul-Haq’s visit to a match in India in 1987"],
        ["Iran v USA, 1998 World Cup","Iranian players gave their opponents white roses before the match"],
        ["Unified Korea team, 2018","North and South fielded one women’s ice hockey team at PyeongChang"]
      ]},
      "Sport does not cause peace. The 1969 war between El Salvador and Honduras is often called the “Football War” because it broke out after World Cup qualifying matches, but historians trace its causes to land, migration and border tensions; the matches were a trigger. Ping-pong worked because both governments already wanted an opening. Sport is a signal and a channel, not a cause. It also works in reverse: boycotts, such as those of the 1980 Moscow and 1984 Los Angeles Olympics, and bans, such as the sporting isolation of apartheid South Africa, use sport to punish rather than to open doors.",
      {terms:["sports-mega-event","soft-disempowerment","sportswashing","world-heritage-convention","outstanding-universal-value","heritage-diplomacy","sports-diplomacy","ping-pong-diplomacy"]}
    ]}
   ],
   try:[
    {id:"e4u8-l4-x1", type:"order", q:"Put the steps of ping-pong diplomacy in time order.", items:[
      {t:"US and Chinese players meet at the World Table Tennis Championships in Nagoya", why:"Spring 1971, in Japan."},
      {t:"The US table tennis team visits China", why:"April 1971, a short tour straight after the championships, on an invitation Mao personally approved."},
      {t:"Henry Kissinger makes a secret trip to Beijing", why:"July 1971."},
      {t:"President Nixon visits China", why:"February 1972."}
    ]},
    {id:"e4u8-l4-x2", type:"sort", q:"Does each outcome add to the host’s attraction or show soft disempowerment?", buckets:["Adds attraction","Soft disempowerment"], items:[
      {t:"Visiting fans post enthusiastic videos about the host city’s friendliness.", b:0, why:"Positive first-hand experience spreads attraction."},
      {t:"Global media investigate working conditions on stadium sites.", b:1, why:"Scrutiny that the event invites can reduce attraction: Brannagan and Giulianotti’s point."},
      {t:"Several governments announce a diplomatic boycott of the opening ceremony.", b:1, why:"A visible rebuke on the world stage damages the host’s image for those audiences."},
      {t:"A memorable opening ceremony is widely praised.", b:0, why:"A successful show adds to the host’s image."},
      {t:"Reports of evictions to make room for venues spread online.", b:1, why:"Negative coverage linked to the event."},
      {t:"Tourism rises in the years after the event.", b:0, why:"A possible legacy gain, though other causes must be ruled out."}
    ]},
    {id:"e4u8-l4-x3", type:"mcq", q:"Which sentence about the Meiji Industrial Revolution sites is most accurate and neutral?", options:[
      {t:"At inscription in 2015 Japan acknowledged that Koreans were brought against their will to work at some sites; Japan and South Korea have since disagreed over what this means and how the history is shown.", ok:true, why:"Accurate and attributed: the statement, then both governments’ readings."},
      {t:"UNESCO rejected the sites because of South Korea’s objections.", why:"Inaccurate: the sites were inscribed in 2015."},
      {t:"Japan has fully resolved the issue, as UNESCO confirmed.", why:"Inaccurate: the committee has repeatedly asked Japan to improve its interpretation; Japan says it has implemented its commitments."},
      {t:"The sites concern only the 1940s.", why:"Inaccurate: they are presented as the story of industrialisation from the 1850s to 1910; the dispute is about the wartime period at some sites."}
    ]},
    {id:"e4u8-l4-x4", type:"spot", q:"Tap each claim in this op-ed paragraph that **is presented as fact but needs attribution or evidence**.", ask:"needs attribution or evidence", parts:[
      {t:"Qatar hosted the 2022 World Cup, the first in the Arab world.", flag:false, why:"An established fact."},
      " ",
      {t:"The whole tournament was nothing but sportswashing.", flag:true, why:"Sportswashing is a critics’ claim. State who argues it and what evidence supports it; Qatar rejects the label."},
      " ",
      {t:"Qatar introduced a minimum wage in 2021.", flag:false, why:"A documented reform."},
      " ",
      {t:"All the criticism came from hypocritical Western governments.", flag:true, why:"An unsupported generalisation. Criticism came from many sources, including human rights groups and workers’ organisations; the double-standards argument is Qatar’s view and should be attributed."},
      " ",
      {t:"Estimates of worker deaths vary widely depending on what is counted.", flag:false, why:"An accurate description of a real measurement dispute."}
    ]},
    {id:"e4u8-l4-x5", type:"match", q:"Match each event to the “first” it is known for.", pairs:[
      ["Tokyo 1964","First Olympic Games held in Asia","It showcased Japan’s postwar recovery."],
      ["South Africa 2010","First FIFA World Cup held in Africa","A milestone for the continent."],
      ["Rio de Janeiro 2016","First Olympic Games held in South America","Brazil also hosted the 2014 World Cup."],
      ["Beijing 2022","First city to have hosted both Summer and Winter Games","Beijing hosted the Summer Games in 2008."],
      ["Qatar 2022","First FIFA World Cup in the Arab world","It was also the first held in November and December."]
    ]},
    {id:"e4u8-l4-x6", type:"mcq", q:"Tomás writes: “The 1969 Football War shows that sport causes wars.” What is the best correction?", options:[
      {t:"The matches were a trigger; historians trace the war’s causes to land, migration and border tensions between El Salvador and Honduras.", ok:true, why:"Right. A trigger is not a cause. The same logic applies to sports diplomacy: sport signals and channels, it rarely causes."},
      {t:"The war never happened; the name is a myth.", why:"The war happened in July 1969; the nickname exaggerates football’s role."},
      {t:"The war was caused by FIFA.", why:"FIFA organised the qualifiers, but no historian blames it for the war."},
      {t:"Sport is always a force for peace, so the case is irrelevant.", why:"Too strong. Sport can inflame tensions too; the point is to separate triggers from causes."}
    ]},
    {id:"e4u8-l4-x7", type:"mcq", q:"Why can World Heritage nominations become political?", options:[
      {t:"States nominate sites and a committee of states decides, so national narratives and diplomatic alliances can shape outcomes.", ok:true, why:"Right. Expert bodies advise, but states decide, which is Meskell’s central concern."},
      {t:"UNESCO staff choose sites at random.", why:"Sites are nominated by states and evaluated by expert advisory bodies."},
      {t:"Only private companies can nominate sites.", why:"Nominations come from states parties to the Convention."},
      {t:"Listing a site transfers its sovereignty to UNESCO.", why:"Listing does not change sovereignty; the state remains responsible for the site."}
    ]}
   ],
   apply:{
    intro:"Watch and read how events and heritage are presented. Use free official pages and videos.",
    tasks:[
     {t:"Read a host’s story and its critics", how:[
       "Choose one mega-event (Beijing 2008 or 2022, Tokyo 2020, Qatar 2022, or another).",
       "Find the official opening-ceremony summary or highlights, and one report from a human rights organisation or a newspaper from another region.",
       "Write the host’s intended message in one sentence and the main criticism in one sentence. Then name one audience for whom each would be convincing."
     ], write:"Event… Host’s message… Main criticism… Audience convinced by each… Soft power, soft disempowerment, or both?"},
     {t:"Look up a World Heritage decision", how:[
       "Open the UNESCO World Heritage Centre website and find the page for one site in your region.",
       "Note why it was inscribed (the criteria) and whether the committee has asked the state for anything since.",
       "Ask whether any neighbour or group tells the site’s history differently."
     ], write:"Site… Criteria… Later committee requests… Other narratives…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “sportswashing” an analytical concept or a political accusation?",
       "2. Should the World Heritage Committee follow its expert advisers more closely?",
       "3. Did ping-pong diplomacy change history, or only decorate a decision already made?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one mega-event’s message and criticism, one World Heritage site’s record, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"cullpd", where:"Section 4.3 “Cultural Diplomacy: The Family of Man Exhibit” and Section 5.3 “Cultural Diplomacy: The Image of the Soviet Union”", note:"How a single event or exhibition can succeed or backfire."},
    {book:"eir", where:"Chapter 13 “Voices of the People”", note:"How publics and protest shape international politics."},
    {book:"dbb", where:"Chapter 2, section 2 “Asia and Oceania”, subsection 3 “Korean Peninsula” (the part on the Republic of Korea)", note:"Japan’s official account of its relations with South Korea; compare it with South Korean sources."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u8-l5", title:"Does soft power work? Evaluation, comparison and the policy brief", minutes:65,
   hook:{q:"A 2021 study used Gallup World Poll interviews held just before and just after 86 visits by leaders of nine countries to 38 host countries. On average, how did host publics’ approval of the visiting leader change?", options:["No measurable change","It rose by about 2 percentage points","It rose by about 20 percentage points","It fell, because visits draw protests"], answer:1, reveal:"**It rose by about 2.3 percentage points**, and the effect lasted up to about three weeks and was larger when the media covered the visit, according to Goldsmith, Horiuchi and Matush (*American Political Science Review*, 2021). A small effect, but a real one, measured carefully. This lesson asks what counts as evidence that soft power works, compares country cases, and shows how to turn analysis into a policy brief."},
   goals:[
     "Explain why soft power is hard to evaluate: outputs, outcomes and impact, and the attribution problem",
     "Summarise the main empirical studies and what they can and cannot show",
     "Compare six country cases from different regions on assets, tools and limits",
     "Plan and write a short, balanced policy brief"
   ],
   learn:[
    {h:"Why evaluation is hard", body:[
      {lead:"A ministry spends a large sum on a cultural festival abroad. A year later, how would anyone know whether it worked?"},
      "Evaluators separate [[outputs-outcomes-impact|outputs, outcomes and impact]]. **Outputs** are what you did and who you reached (concerts held, viewers, alumni). **Outcomes** are changes in the audience (knowledge, attitudes, new contacts). **Impact** is the policy result you wanted (a partnership, a vote, a deal). Most reports count outputs, because they are easy; impact is what matters, and hardest to show.",
      "A [[theory-of-change|theory of change]] spells out how each step is supposed to lead to the next, so that each link can be tested.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e8b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-sage" x="10" y="10" width="122" height="44" rx="8" stroke-width="2"/><text x="71" y="37" text-anchor="middle">Resources</text><text class="s" x="144" y="37">budget, artists, alumni</text><path class="d-ink" d="M71,56 V68" stroke-width="2" marker-end="url(#e8b)"/><rect class="d-sage" x="10" y="72" width="122" height="44" rx="8" stroke-width="2"/><text x="71" y="99" text-anchor="middle">Activities</text><text class="s" x="144" y="99">tours, broadcasts, exchanges</text><path class="d-ink" d="M71,118 V130" stroke-width="2" marker-end="url(#e8b)"/><rect class="d-gold" x="10" y="134" width="122" height="44" rx="8" stroke-width="2"/><text x="71" y="161" text-anchor="middle">Outputs</text><text class="s" x="144" y="161">audiences reached, alumni</text><path class="d-ink" d="M71,180 V192" stroke-width="2" marker-end="url(#e8b)"/><rect class="d-gold" x="10" y="196" width="122" height="44" rx="8" stroke-width="2"/><text x="71" y="223" text-anchor="middle">Outcomes</text><text class="s" x="144" y="223">views shift, ties formed</text><path class="d-ink" d="M71,242 V254" stroke-width="2" marker-end="url(#e8b)"/><rect class="d-rose" x="10" y="258" width="122" height="44" rx="8" stroke-width="2"/><text x="71" y="285" text-anchor="middle">Impact</text><text class="s" x="144" y="285">cooperation, policy change</text><text class="s" x="170" y="324" text-anchor="middle">Each step down is harder to measure and attribute</text></svg>', alt:"A vertical chain of five boxes joined by arrows: resources (budget, artists, alumni), activities (tours, broadcasts, exchanges), outputs (audiences reached, alumni), outcomes (views shift, ties formed) and impact (cooperation, policy change). A note says each step down is harder to measure and attribute.", cap:"A theory of change for public diplomacy. Most reporting stops at outputs."},
      "Then comes the [[attribution-problem|attribution problem]]: even if attitudes improve, many things besides your festival could have caused it, such as news events, trade, migration or a rival’s mistakes. Effects are slow, and the audience may be small but important (future leaders) or large but unimportant for policy. This is why the research methods unit stresses causal inference (see {{regression-causal-inference}} and {{process-tracing}})."
    ]},
    {h:"What the evidence shows", body:[
      "A few careful studies give partial answers.",
      {table:[
        ["Study","Question","Finding"],
        ["Goldsmith & Horiuchi, *World Politics* (2012)","Does foreign opinion of US foreign policy affect cooperation with the US?","Surveys in 58 countries: opinion had a large effect on troop commitments to the Iraq war in 2003, weaker effects on other issues, depending on how salient the issue was to the public"],
        ["Atkinson, *Foreign Policy Analysis* (2010)","Do US-hosted exchanges spread liberal values?","Yes, under conditions: deep social contact and later influence at home"],
        ["Goldsmith, Horiuchi & Matush, *APSR* (2021)","Do leaders’ visits change foreign opinion?","A small rise in approval lasting up to about three weeks, larger with media coverage"]
      ]},
      "Read these carefully. The first shows that public opinion abroad can constrain governments, a key step in Nye’s argument, but it says little about what *creates* favourable opinion. The second faces [[selection-bias|selection bias]], which the author addresses but cannot remove. The third measures short-term attitudes, not policy.",
      "Large surveys also show the limits of spending. China has invested heavily in cultural diplomacy, but international surveys such as the Pew Research Center’s have found mostly unfavourable views of China in many high-income countries, while surveys in Africa, such as Afrobarometer’s, have found more positive views of China’s influence. Audience and policy matter as much as budget. Scholars disagree about how much these patterns reflect public diplomacy, economic ties or reactions to foreign policy, which is itself an attribution problem."
    ]},
    {h:"Comparing cases", body:[
      "Comparison is the standard way to learn about soft power (see {{comparative-method}}). Here are six cases from four regions. Treat the cells as starting hypotheses to check, not settled facts.",
      {table:[
        ["Country","Main assets","Main tools","Limits and debates"],
        ["Japan","Anime, food, design, aid record, safety","Japan Foundation, Cool Japan, aid","History issues with neighbours; policy funds criticised"],
        ["South Korea","Dramas, K-pop, film, technology","Cultural-industry support, cultural centres","Political shocks (THAAD); backlash in some markets"],
        ["China","Economy, heritage, language, aid","State media, Confucius Institutes, scholarships","Credibility of state-run messages; views differ sharply by region"],
        ["India","Cinema, yoga, diaspora, democracy","ICCR, Yoga Day, diaspora outreach","Assets not converted into influence (Thussu)"],
        ["Germany","Reconciliation story, products, culture","Goethe-Institut, DW, exchanges, 2006 World Cup","Image swings with crises and policy debates"],
        ["Nigeria","Nollywood, Afrobeats, diaspora","Mostly market-led; limited state strategy","Global image shaped by security and governance news"]
      ]},
      "Nigeria is an instructive contrast. Its video-film industry, often dated to *Living in Bondage* (1992), and its music, recognised when Burna Boy won a Grammy in 2021, spread across Africa and the diaspora mainly through markets and fans, with little state planning. Brazil offers a Latin American parallel: football, music and two mega-events in 2014 and 2016, alongside protests in 2013 against their cost. To build a comparison, work in four steps: choose a clear question (for example, does state support explain how far a cultural wave spreads?); choose cases that vary on the factor you care about; collect the same kinds of evidence for each case (budgets, audience surveys, export data, expert interviews); and look for the mechanism, not just the correlation. A [[most-similar-design|most-similar]] or [[most-different-design|most-different]] design (see {{case-study-research}}) helps: comparing Japan and South Korea holds region and wealth roughly constant; comparing South Korea and Nigeria asks whether market-led waves need the state at all."
    ]},
    {h:"What the cases suggest, and what they don’t", body:[
      "Comparisons like this generate hypotheses. Four come up often in the literature; treat each as a claim to test, not a finding:",
      {ol:[
        "**Market-led waves travel further than state messaging.** Korean drama, Japanese anime and Nigerian film spread mainly through companies, platforms and fans. Governments helped some of them, but none was created by a ministry.",
        "**Policies and history set a ceiling.** Attraction to products does not erase disputes over history or foreign policy, as Japan’s relations with some neighbours and views of China in many high-income countries suggest. This is Nye’s own point that policies are a source of soft power, and it cuts both ways.",
        "**Events give bursts, not lasting change.** Germany’s 2006 World Cup was widely reported to have warmed its image abroad, and Germany has ranked at or near the top of the Nation Brands Index in most years since; but separating the event’s effect from decades of reconciliation and exports is hard.",
        "**Credibility depends on distance.** Messages seen as coming straight from a government are discounted; independent voices, from artists to alumni, carry more weight."
      ]},
      "Each hypothesis has counter-examples, which is what makes them good seminar material. A strong paper picks one, defines it, chooses cases that can test it, and says what evidence would prove it wrong."
    ]},
    {h:"Writing a policy brief", body:[
      "A [[policy-brief|policy brief]] is a short document, often two to four pages, that gives a busy decision-maker evidence and options on one problem. [[think-tank|Think tanks]], ministries and international organisations publish them, and many graduate programmes set them as assignments. Unlike an essay, it puts the conclusion first.",
      {ol:[
        "**Title** that states the issue, ideally the main message.",
        "**Key messages or summary** in three to five bullet points.",
        "**The problem and why it matters now**, with the decision the reader faces.",
        "**Evidence**: what is known, from which sources, and how strong it is.",
        "**Options**, each with costs, benefits and risks.",
        "**Recommendations**, specific and feasible, linked to the evidence.",
        "**Sources**, short and reliable."
      ]},
      {ex:"Title: Fewer festivals, more listening: refocusing Country X’s cultural budget in Southeast Asia\nKey messages:\n• Most of the budget funds one-off festivals whose effects are not measured.\n• Studies suggest sustained contact (exchanges, language teaching) works better than events, though evidence is limited.\n• We recommend moving part of the budget to exchanges and a regional opinion survey, with a review in three years.", label:"Worked example: the opening of a brief"},
      "Know your reader. A minister wants the decision, the cost and the risk; a technical official wants more evidence; a parliamentary committee wants options. Canada’s International Development Research Centre, which funds research for policy, advises keeping a brief to about two pages or 1,500 words, writing the summary last, and testing the draft on a colleague who does not know the issue.",
      "Briefs on soft power have their own traps:",
      {list:[
        "**Ranking worship:** using an index rise as proof of success.",
        "**Output inflation:** counting events and followers as if they were influence.",
        "**One-cause stories:** crediting a campaign for changes that trade, news or a rival’s mistakes could explain.",
        "**Hidden values:** presenting a preference (more culture spending, fewer broadcasters) as if the evidence required it.",
        "**Ignoring the audience:** treating “world opinion” as one public."
      ]},
      "Style rules: plain words, short paragraphs, headings that tell the story, numbers with sources and dates, and honest [[hedging]] where evidence is weak. Keep **evidence** and **recommendation** visibly separate, so readers who disagree with your values can still use your analysis. Address the strongest objection (a [[counterargument]]) before the recommendations (see {{building-an-argument}}).",
      {terms:["outputs-outcomes-impact","theory-of-change","attribution-problem","policy-brief"]}
    ]}
   ],
   try:[
    {id:"e4u8-l5-x1", type:"sort", q:"Is each item an output, an outcome or an impact of a public diplomacy programme?", buckets:["Output","Outcome","Impact"], items:[
      {t:"12,000 people attended the touring exhibition.", b:0, why:"A count of who was reached: an output."},
      {t:"Surveyed visitors knew more about the country afterwards than a comparison group.", b:1, why:"A change in the audience’s knowledge: an outcome."},
      {t:"The partner government signed a new research cooperation agreement.", b:2, why:"A policy result: an impact, though attributing it to the exhibition would need more evidence."},
      {t:"The broadcaster published 300 news items in a new language.", b:0, why:"What was produced: an output."},
      {t:"Alumni of an exchange set up a joint business association.", b:1, why:"New ties formed: an outcome."},
      {t:"The country won the partner’s support in a UN vote.", b:2, why:"A policy result: an impact."}
    ]},
    {id:"e4u8-l5-x2", type:"mcq", q:"Favourable views of Country Y rose in Country Z after Y’s cultural festival there. What is the strongest reason to be cautious before crediting the festival?", options:[
      {t:"The attribution problem: other events in the same period, such as a trade deal or news coverage, could explain the rise.", ok:true, why:"Right. Without a comparison or a clear mechanism, a before–after change cannot be credited to one cause."},
      {t:"Festivals are hard power.", why:"They are a soft power tool; the issue is evidence of effect."},
      {t:"Opinion surveys can never be trusted.", why:"Too strong. Good surveys are useful; the problem is causal inference, not surveys as such."},
      {t:"The festival was too small to matter.", why:"Size alone does not settle the question either way; you need evidence about cause."}
    ]},
    {id:"e4u8-l5-x3", type:"mcq", q:"What did Goldsmith and Horiuchi (2012) find?", options:[
      {t:"Foreign public opinion about US foreign policy affected countries’ cooperation with the US, strongly for troop commitments to Iraq, depending on issue salience.", ok:true, why:"Yes. Their surveys covered 58 countries; effects were conditional on how salient the issue was."},
      {t:"Foreign opinion has no effect on governments.", why:"The opposite: they found significant effects on some decisions."},
      {t:"Exchange programmes spread liberal values.", why:"That is Atkinson (2010)."},
      {t:"Leaders’ visits raise approval by about 2 percentage points.", why:"That is Goldsmith, Horiuchi and Matush (2021)."}
    ]},
    {id:"e4u8-l5-x4", type:"order", q:"Put the sections of a policy brief in the order this lesson recommends.", items:[
      {t:"Title stating the issue or main message", why:"The reader should know the point at once."},
      {t:"Key messages in a few bullet points", why:"The conclusion comes first in a brief."},
      {t:"The problem and why it matters now", why:"Sets up the decision the reader faces."},
      {t:"Evidence and how strong it is", why:"What is known, from which sources."},
      {t:"Options with costs, benefits and risks", why:"Gives the decision-maker real choices."},
      {t:"Recommendations", why:"Specific, feasible and linked to the evidence."},
      {t:"Sources", why:"Short and reliable, at the end."}
    ]},
    {id:"e4u8-l5-x5", type:"spot", q:"Tap each sentence in this draft brief that **breaks the style rules**.", ask:"breaks the style rules", parts:[
      {t:"Key message: exchanges are associated with lasting ties, but evidence of policy impact is limited.", flag:false, why:"Clear, with honest hedging."},
      " ",
      {t:"Since time immemorial, humanity has sought to understand the Other through culture.", flag:true, why:"A vague essay opening. A brief starts with the point and the decision."},
      " ",
      {t:"A 2021 study found that leaders’ visits raised approval by about 2.3 points (Goldsmith, Horiuchi & Matush).", flag:false, why:"A specific number with its source."},
      " ",
      {t:"Our values demand that we obviously spend more, so the evidence is clear.", flag:true, why:"Mixes values with evidence and overclaims. Keep recommendation and evidence separate."},
      " ",
      {t:"Option B costs less but would take five years to show results.", flag:false, why:"States a trade-off plainly."}
    ]},
    {id:"e4u8-l5-x6", type:"match", q:"Match each country case to a limit or debate scholars raise about it.", pairs:[
      ["Japan","Unresolved history issues limit appeal among some neighbours","Popularity of culture does not settle memory disputes."],
      ["South Korea","Political shocks such as the THAAD dispute can block cultural flows","Reports of informal restrictions in China from 2016."],
      ["China","Views of the country differ sharply between regions despite large investment","Surveys show contrasts between high-income countries and parts of Africa."],
      ["India","Rich assets not yet converted into influence","Thussu’s argument."],
      ["Nigeria","Largely market-led success with little state strategy","Nollywood and Afrobeats grew mainly through markets and fans."]
    ]},
    {id:"e4u8-l5-x7", type:"number", q:"In an invented evaluation, 300 exchange alumni were surveyed. 240 said they had kept professional contacts in the host country. What percentage is that?", answer:80, tol:0.5, unit:"%", why:"240 ÷ 300 = 0.8 = 80%. Remember that this is an outcome measure, and without a comparison group it cannot show that the exchange caused the contacts.", wrongs:[
      {v:125, tol:0.5, why:"That divides 300 by 240. The part (240) goes on top."},
      {v:60, tol:0.5, why:"That subtracts 240 from 300 and treats the difference as a percentage."}
    ], hint2:"Divide the part by the whole, then multiply by 100."}
   ],
   apply:{
    intro:"Bring the unit together: evaluate, compare and write. Use free public sources.",
    tasks:[
     {t:"Write a theory of change", how:[
       "Choose one real programme: a cultural institute, an international broadcaster, a festival or an exchange scheme.",
       "Write its resources, activities, outputs, intended outcomes and intended impact.",
       "Mark the weakest link, and say what evidence would test it."
     ], write:"Programme… Resources… Activities… Outputs… Outcomes… Impact… Weakest link and how to test it…"},
     {t:"Compare two cases", how:[
       "Choose two of the six cases in the lesson, or add your own from another region.",
       "For each, find one official source (a government or agency page) and one independent source (a study, survey or quality news report).",
       "Fill the four columns of the table for both and write two sentences on what the comparison suggests."
     ], write:"Cases… Assets… Tools… Limits… Official and independent sources… What the comparison suggests…"},
     {t:"Draft a one-page policy brief", how:[
       "Pick a decision-maker (for example a culture ministry, a city government or a broadcaster’s board) and one question about soft power.",
       "Write a title, three key messages, the problem, the evidence, two options and one recommendation.",
       "Check: is evidence separate from recommendation, is every number sourced and dated, and have you addressed the strongest objection?"
     ], write:"Reader and question… Title… Key messages… Problem… Evidence… Options… Recommendation… Strongest objection…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. If soft power cannot be measured well, should governments keep spending on it?",
       "2. Is market-led cultural success more credible than state-led promotion?",
       "3. Which is the better test of soft power: public opinion abroad or the behaviour of foreign governments?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A theory of change for one programme, a two-case comparison with sources, a one-page policy brief and a seminar paragraph."
   },
   read:[
    {book:"cullpd", where:"Section 7 “Conclusion: The Future of Public Diplomacy”", note:"Cull’s own lessons for practitioners."},
    {book:"eir", where:"Chapter 12 “Connectivity, Communications and Technology”", note:"Background on how communication technology changes international politics."},
    {book:"ipsrm", where:"Chapter 7, section 7.5 “Case Studies”", note:"A reminder of case study design before you compare cases."}
   ]
  }
  ],
  checkpoint:["e4u8-q02","e4u8-q06","e4u8-q09","e4u8-q12","e4u8-q16","e4u8-q20","e4u8-q23","e4u8-q27","e4u8-q31","e4u8-q36","e4u8-q40","e4u8-q44"],
  codex:[
   {id:"soft-power-theory", title:"Soft power: the concept and its debates", aka:["soft power in depth","co-optive power","attraction"], tags:["power","soft power","theory"],
    summary:"Nye’s idea of influence through attraction, placed in the wider debate on power, with its main refinements and critiques.",
    levels:{
     starter:[
      "**Soft power** is the ability to get what you want because others are attracted to you, rather than because you threaten or pay them. Joseph Nye introduced the term in 1990 (see {{joseph-nye}}).",
      "Think of a school. One student gets her way by threats, another by handing out sweets, and a third because classmates admire her and want to follow. The third has soft power.",
      "For countries, Nye named three sources: **culture** that others like, **political values** that a country lives up to, and **foreign policies** that others see as legitimate.",
      {key:"Soft power is about shaping what others want, so that you need fewer threats and payments."},
      "It has limits: attraction depends on the audience, governments cannot control most of it, and having attractive films or universities does not guarantee any particular result."
     ],
     builder:[
      "**The spectrum.** In *Soft Power* (2004) Nye placed power behaviour on a line from **command** (coercion, inducement) to **co-optive** (agenda-setting, attraction). Real policies mix them.",
      "**The faces of power.** Political scientists distinguish three faces: Dahl (1957) on getting others to act against their wishes; Bachrach and Baratz (1962) on keeping issues off the agenda; Lukes (1974) on shaping wants and beliefs. Nye linked soft power especially to the second and third.",
      "**Resources and outcomes.** Nye stresses that soft power resources (culture, values, policies) must be converted into outcomes, and that conversion can fail. This is the main reason scholars ask “attractive to whom, and leading to what?”",
      "**Smart power** combines hard and soft tools. Suzanne Nossel used the term in 2004; Nye and Richard Armitage co-chaired a Commission on Smart Power in 2007.",
      "**Using the concept in a paper.** Specify the actor, the audience, the resource, the mechanism (how attraction is supposed to change behaviour) and the evidence. Without these, “soft power” becomes a label for anything non-military."
     ],
     pro:[
      "**Critiques.** Todd Hall (2010) argued that soft power is too broad to be an analytical category and proposed narrower kinds of power. Janice Bially Mattern (2005) argued that attraction is socially constructed through language and can involve representational force, making soft power less soft than it sounds. Some realists treat attraction as a by-product of material success; some critical and postcolonial scholars read soft power as cultural [[hegemony]].",
      "**Travel of the concept.** China’s debate began in the early 1990s (Wang Huning, 1993) and entered party documents in 2007; Chinese scholars debate whether culture or political institutions are the core. Japan, South Korea, India, the Gulf states, Russia and many others have built soft power strategies, often equating it with cultural promotion.",
      "**Sharp power.** Walker and Ludwig (2017) coined the term for manipulative influence by authoritarian states; Nye accepted the distinction, while Chinese officials rejected the term. See {{sharp-power}}.",
      "**Evidence.** Goldsmith and Horiuchi (2012) found that foreign public opinion about US foreign policy affected some countries’ cooperation, conditional on issue salience: a key link in Nye’s argument. Measuring soft power itself remains difficult (see {{measuring-soft-power}}).",
      {tip:"In seminars, the strongest uses of soft power are narrow: one actor, one audience, one mechanism, testable evidence."}
     ]
    },
    related:["joseph-nye","sharp-power","measuring-soft-power","public-diplomacy-practice","constructivism","realism"],
    read:[{book:"ospol", where:"Chapter 14, section 14.1 “What Is Power, and How Do We Measure It?”"}],
    sources:[{t:"Cull, Public Diplomacy: Lessons from the Past (CPD, 2009), section 1.3 “Soft Power”", url:"https://uscpublicdiplomacy.org/resources/public_diplomacy_less"},{t:"Goldsmith & Horiuchi, “In Search of Soft Power” (working paper, 2011; published in World Politics, 2012): abstract", url:"https://econpapers.repec.org/RePEc:een:crwfrp:1108"}],
    checked:"2026-11"},

   {id:"sharp-power", title:"Sharp power", aka:["authoritarian influence","malign influence"], tags:["power","information","authoritarianism"],
    summary:"A 2017 term for influence that manipulates, distracts or censors rather than attracts, and the debate about whether it helps analysis.",
    levels:{
     starter:[
      "**Sharp power** is a term coined in 2017 by Christopher Walker and Jessica Ludwig of the US-based National Endowment for Democracy. They used it for efforts by authoritarian governments to influence other societies by manipulation and censorship rather than attraction.",
      "Picture two visitors to a town. One wins friends by being generous and interesting. The other quietly pays people to repeat his views and pressures the local newspaper not to criticise him. The first uses soft power; the second, in Walker and Ludwig’s terms, sharp power.",
      "Examples they discussed include pressure on publishers, academics and media abroad, and covert funding of commentary. Their main cases were China and Russia.",
      {warn:"The term is contested. Chinese officials and state media called it a smear; some scholars think it blurs the line between ordinary public diplomacy and manipulation."}
     ],
     builder:[
      "**Origins.** Walker and Ludwig published “The Meaning of Sharp Power” in *Foreign Affairs* on 16 November 2017; the National Endowment for Democracy released a report on authoritarian influence in the democratic world in December 2017, with case studies from Latin America and Central Europe.",
      "**The claim.** Democracies, they argued, had relied on the soft power paradigm and so failed to see influence that exploits their openness: it “pierces” their information environments rather than attracting them.",
      "**Nye’s response.** Nye (2018) agreed that the difference matters and placed it in methods: soft power relies on openness and voluntary attraction; sharp power on deception, coercion or covert action. Openness is the test, not who the actor is.",
      "**Critiques.** Some scholars argue that democracies also run covert influence operations, so a term aimed at authoritarian states risks a double standard; others say existing words (propaganda, influence operations, information warfare) already cover it. Chinese commentary rejected the term as part of a campaign against China.",
      "**How to use it.** Describe the method (covert funding, intimidation, censorship, disinformation), the target and the evidence. A cultural centre that is open about its funding is not sharp power because of who funds it."
     ],
     pro:[
      "**Conceptual position.** Sharp power is less a new kind of power than a reclassification of old practices for the age of global media and platforms. It overlaps with research on [[influence-operation|influence operations]], [[information-disorder|information disorder]] and “united front” work, studied in the media unit of this track.",
      "**Measurement.** Evidence is usually case-based: investigative journalism, leaked documents, court cases and platform takedown reports. Generalising from these to “a country’s sharp power” is risky; be clear about which incidents you rely on.",
      "**Normative stakes.** The term was coined by a democracy-promotion organisation funded largely by the US Congress. That does not make it wrong, but it is part of the context a careful writer notes, as one would for terms coined by any government-linked body.",
      "**Seminar test.** Can the same activity be soft power to one audience and sharp power to another? For example, sponsored content that is labelled in one country and unlabelled in another. Method and transparency, not the funder alone, decide the classification."
     ]
    },
    related:["soft-power-theory","international-broadcasting","confucius-institutes","joseph-nye"],
    sources:[{t:"National Endowment for Democracy: The Meaning of Sharp Power", url:"https://ned.org/the-meaning-of-sharp-power-how-authoritarian-states-project-influence"},{t:"Xinhua: Who’s behind the term “sharp power”? (February 2018)", url:"https://www.xinhuanet.com/english/2018-02/13/c_136972986.htm"}],
    checked:"2026-11"},

   {id:"measuring-soft-power", title:"Measuring soft power: indices and their limits", aka:["soft power index","soft power rankings","nation brand rankings"], tags:["soft power","measurement","indices"],
    summary:"What the main soft power and nation brand indices measure, how they do it, and why rankings cannot show influence on their own.",
    levels:{
     starter:[
      "Every year, rankings announce which countries have the most soft power. They are useful starting points but they measure **perceptions and resources**, not influence.",
      "Two well-known ones: the **Brand Finance Global Soft Power Index**, a large survey about all 193 UN member states (as of its January 2026 edition, led by the United States, China, Japan and the United Kingdom), and the **Anholt-Ipsos Nation Brands Index**, which asks people in about 20 countries to rate 50 nations on six dimensions (Japan ranked first in the 2025 edition, as reported).",
      {key:"Before quoting a rank, ask: who was asked, about what, and does it show any change in behaviour?"},
      "Ranks also move for reasons unrelated to policy, such as a war, a disaster or a sporting win."
     ],
     builder:[
      {table:[
        ["Index","Method","Limit"],
        ["Brand Finance GSPI (since 2020)","Survey: over 150,000 respondents in over 100 countries in 2026; key measures of familiarity, reputation and influence, plus eight pillars such as governance, international relations, and culture and heritage","Perceptions only; pillar weights chosen by the producer"],
        ["Anholt-Ipsos NBI (since 2005)","Online panels in about 20 countries rate 50 nations on exports, governance, culture, people, tourism, immigration and investment","Reputation, built for marketing"],
        ["Soft Power 30 (2015–2019)","Mix of objective data and polling","Discontinued"],
        ["Lowy Asia Power Index","Cultural influence as one of eight measures","Asia only"]
      ]},
      "**Resources versus outcomes.** Counting universities, museums or tourists measures resources. Polling favourability measures attitudes. Neither shows that a government changed its behaviour because of attraction.",
      "**Weights and samples.** Each index chooses its weights and its respondents. Changing them can reorder the table. Rankings near each other often differ by less than the survey’s error."
     ],
     pro:[
      "**Validity problems.** Indices conflate size and attraction (big countries are more familiar), and familiarity with liking. Some include hard-power indicators. Commercial producers sell consulting services to governments, a potential conflict of interest worth noting.",
      "**Better designs.** Researchers test specific links: does opinion of a country’s policy affect cooperation (Goldsmith and Horiuchi 2012)? Do leaders’ visits shift approval (Goldsmith, Horiuchi and Matush 2021)? Survey experiments, panel data and comparisons over time can isolate effects in ways a league table cannot.",
      "**Using indices well.** Cite the edition and date (“as of the 2026 edition”), describe the method, use sub-scores rather than the overall rank, and pair the index with evidence about outcomes. Always say what an index cannot show.",
      {tip:"A rise from 9th to 7th is a news story; it is rarely a finding."}
     ]
    },
    related:["soft-power-theory","nation-branding","simon-anholt"],
    sources:[{t:"Brand Finance: Global Soft Power Index 2026 press release", url:"https://brandfinance.com/press-releases/brand-finance-global-soft-power-index-2026-the-uae-maintains-10th-place-as-western-nations-decline"},{t:"Ipsos: Anholt-Ipsos Nation Brands Index", url:"https://www.ipsos.com/en/topic/anholt-ipsos-nation-brands-index"}],
    checked:"2026-11"},

   {id:"public-diplomacy-practice", title:"Public diplomacy: taxonomy and the new public diplomacy", aka:["Cull’s taxonomy","new public diplomacy","digital diplomacy"], tags:["public diplomacy","diplomacy","communication"],
    summary:"How governments and others engage foreign publics: Cull’s five elements, the shift to dialogue and networks, and the debates.",
    levels:{
     starter:[
      "[[public-diplomacy|Public diplomacy]] is how a government, or another international actor, engages the people of other countries, not only their governments. It includes listening to them, explaining policies, sharing culture, exchanging people and broadcasting news.",
      "The modern term dates from 1965, when the retired US diplomat Edmund Gullion applied it to international information and cultural work, according to the historian Nicholas Cull.",
      "It differs from propaganda, practitioners argue, because it depends on credibility and two-way contact; critics reply that the line is often thin.",
      {key:"Cull’s first rule: listening comes before speaking."}
     ],
     builder:[
      "**Cull’s five elements** (2008): **listening** (collecting and using foreign opinion), **advocacy** (promoting a policy), **cultural diplomacy** (making culture known abroad), **exchange** (sending and receiving people) and **international broadcasting** (news for foreign audiences). He treats psychological warfare as a separate, related activity.",
      "Each has a different time scale and ethic: advocacy seeks quick results; culture and exchange work over decades; broadcasting needs editorial independence to be believed.",
      "**The new public diplomacy.** Jan Melissen’s edited book *The New Public Diplomacy* (2005) described a shift from monologue to dialogue and from governments to networks that include cities, NGOs, companies and diasporas. Zaharna (2010) contrasted information and relational models; Gilboa (2008) noted the field’s lack of theory.",
      "**Digital diplomacy.** Foreign ministries and diplomats now use social media directly (Bjola and Holmes, *Digital Diplomacy*, 2015). Messages for home audiences reach foreigners too, and rivals can answer instantly."
     ],
     pro:[
      "**Debates.** Is public diplomacy a branch of diplomacy, of communication, or of marketing? Scholars from each field define it differently, which affects what they measure. Critics in the propaganda-studies tradition argue that “dialogue” is often a style rather than a practice: who actually changes their mind?",
      "**Domestic dimension.** Many governments now run “public diplomacy” aimed partly at their own citizens and diasporas, blurring Cull’s definition. Combative online styles, such as those foreign media labelled “wolf warrior diplomacy” for some Chinese diplomats from about 2019, often play to domestic audiences; Chinese officials rejected the label.",
      "**Research methods.** Content and framing analysis of embassy messaging, network analysis of followers, surveys of audiences, and archives (for the Cold War) are standard; link to the methods unit (see {{discourse-analysis}}).",
      "**Cull’s lessons.** In his 2009 report Cull draws lessons such as: listening first, policy matters more than messaging, credibility needs distance from government, and the most credible voice is often not your own."
     ]
    },
    related:["nicholas-cull","international-broadcasting","cultural-diplomacy","soft-power-theory"],
    read:[{book:"cullpd", where:"Sections 1–3 and 6"}],
    sources:[{t:"Cull, “Public Diplomacy: Taxonomies and Histories”, Annals AAPSS 616 (2008)", url:"https://study.sagepub.com/sites/default/files/The%20ANNALS%20of%20the%20American%20Academy%20of%20Political%20and%20Social%20Science-2008-Cull-31-54.pdf"},{t:"Cull, Public Diplomacy: Lessons from the Past (CPD, 2009)", url:"https://uscpublicdiplomacy.org/resources/public_diplomacy_less"}],
    checked:"2026-11"},

   {id:"international-broadcasting", title:"International broadcasting", aka:["external broadcasting","state broadcasters abroad"], tags:["public diplomacy","media","broadcasting"],
    summary:"News and programmes made for foreign audiences, from shortwave radio to streaming, and the tension between credibility and the funder’s interests.",
    levels:{
     starter:[
      "**International broadcasting** means radio, television and online services made for audiences in other countries, usually funded by a government. Examples include the BBC World Service (from 1932), NHK World-Japan, Deutsche Welle (1953), Al Jazeera (1996), France 24, CGTN (2016) and Voice of America (1942).",
      "Why would a government pay for news abroad? To be heard, to offer its view of events, and to build trust over time.",
      {key:"The paradox: a broadcaster helps its funder most when audiences believe it is not just the funder’s voice."}
     ],
     builder:[
      "**Compare by structure.** Ask who owns it, who funds it, what law or charter protects its editorial independence, and who appoints its leaders. Public-service broadcasters such as the BBC World Service and NHK World-Japan differ from broadcasters directly controlled by a state or party.",
      "**Recent disputes.** In February 2021 the UK regulator Ofcom revoked CGTN’s UK licence, saying the licence holder lacked editorial responsibility and was ultimately controlled by the Chinese Communist Party; China’s government objected. In March 2022 the EU suspended RT and Sputnik, calling them tools of war propaganda; Russia called it censorship. From 2025 the US government moved to shut or cut Voice of America and other US-funded broadcasters; in March 2026 a federal judge ruled steps to dismantle VOA unlawful, and the administration said it would appeal. Check the latest status before citing.",
      "**Audiences.** Broadcasters matter most where local media are weak, censored or distrusted, and in languages that commercial media ignore."
     ],
     pro:[
      "**Research questions.** Does international broadcasting change attitudes, or mainly reach people who already agree? Audience research is often commissioned by the broadcasters themselves, so read it critically. Comparative framing studies of the same event across broadcasters are a manageable thesis design (see {{discourse-analysis}}).",
      "**Platform shift.** Shortwave radio has largely given way to satellite, websites, social media and streaming, where broadcasters compete with influencers and algorithms. Platform labelling of “state-affiliated media” has itself become a site of dispute.",
      "**Neutral practice.** Describe a broadcaster by its ownership, funding and editorial rules, and attribute praise and criticism. Avoid labelling one country’s broadcaster “propaganda” and another’s “news” without the same test for both."
     ]
    },
    related:["public-diplomacy-practice","sharp-power","reading-world-news"],
    sources:[{t:"Al Jazeera: UK broadcast regulator Ofcom revokes licence of China’s CGTN (4 February 2021)", url:"https://www.aljazeera.com/news/2021/2/4/uk-broadcast-regulator-ofcom-revokes-licence-of-chinas-cgtn"},{t:"AP via WJXT: Federal judge rules actions to dismantle Voice of America are illegal (8 March 2026)", url:"https://www.news4jax.com/business/2026/03/08/federal-judge-rules-trump-administrations-actions-to-dismantle-voice-of-america-are-illegal/"}],
    checked:"2026-11"},

   {id:"cultural-diplomacy", title:"Cultural diplomacy and exchanges", aka:["cultural relations","exchange diplomacy","cultural institutes"], tags:["public diplomacy","culture","exchange"],
    summary:"Making a country’s culture known abroad and moving people between countries: institutes, festivals, language teaching and exchanges.",
    levels:{
     starter:[
      "**Cultural diplomacy** is a government’s effort to make its culture known abroad: art exhibitions, music tours, film festivals, food events and language classes. **Exchange** moves people: students, scholars, artists and young professionals.",
      "Many countries run **cultural institutes** abroad: the Alliance Française (France, 1883), the British Council, the Goethe-Institut (Germany, 1951), the Japan Foundation (1972), the Instituto Cervantes (Spain, 1991), Korean Cultural Centres and China’s Confucius Institutes (from 2004).",
      {key:"Cultural diplomacy and exchange work slowly: years or decades, not news cycles."}
     ],
     builder:[
      "**Arm’s length.** Many institutes keep some distance from government: they are funded by the state but run as independent bodies, because art and teaching seen as propaganda lose their appeal. Scholars sometimes distinguish **cultural diplomacy** (government-driven) from **cultural relations** (exchanges between societies).",
      "**Exchanges.** Governments fund scholarships for foreign students, short visitor programmes for future leaders, youth exchanges and regional mobility schemes. The Franco-German Youth Office (1963), set up after the Élysée Treaty, is a classic case of exchange supporting reconciliation, one of Cull’s success stories.",
      "**Evidence.** Atkinson (2010) linked US-hosted exchanges to the spread of liberal values in authoritarian states under certain conditions. Selection bias and long time lags make such studies hard."
     ],
     pro:[
      "**Backfire.** Contact can produce rejection: Cull’s case of Sayyid Qutb, who studied in the US in 1948–50 and returned hostile, shows exchange has no guaranteed direction.",
      "**Gastrodiplomacy and pop culture.** Food programmes such as Thailand’s “Global Thai” (reported in 2002) and pop-culture diplomacy (Japan’s anime ambassador, 2008) extend cultural diplomacy into everyday consumption.",
      "**Critiques.** Postcolonial scholars ask whose culture is presented as universal; others note that cultural diplomacy budgets often favour capitals and elites. The Confucius Institute debate (see {{confucius-institutes}}) raises questions about placing a foreign state’s programme inside host universities.",
      "**Research design.** Tracing alumni careers, interviews, and archives of cultural agencies are standard sources; ethics matter when studying alumni in authoritarian settings (see {{fieldwork-ethics}})."
     ]
    },
    related:["public-diplomacy-practice","confucius-institutes","nation-branding","korean-wave"],
    sources:[{t:"Cull, “Public Diplomacy: Taxonomies and Histories” (2008)", url:"https://study.sagepub.com/sites/default/files/The%20ANNALS%20of%20the%20American%20Academy%20of%20Political%20and%20Social%20Science-2008-Cull-31-54.pdf"},{t:"Atkinson, “Does Soft Power Matter?” (summary)", url:"https://fsi.stanford.edu/node/26059"}],
    checked:"2026-11"},

   {id:"nation-branding", title:"Nation branding", aka:["nation brand","place branding","competitive identity"], tags:["branding","reputation","culture"],
    summary:"Managing a country’s reputation abroad like a brand: Anholt’s model, government campaigns, and the scholarly critique.",
    levels:{
     starter:[
      "A **nation brand** is the reputation a country has in the minds of people abroad. **Nation branding** is the attempt to shape it, with slogans, logos, campaigns and events, often designed by consultants.",
      "Simon Anholt popularised the idea from the late 1990s (see {{simon-anholt}}) and built a survey of national reputations around six dimensions: exports, governance, culture, people, tourism, and immigration and investment.",
      "Examples include “Incredible India” (from 2002) and Britain’s “GREAT” campaign (from 2011–12).",
      {warn:"Anholt himself later argued that advertising campaigns rarely change a country’s image; changes in policy and behaviour do."}
     ],
     builder:[
      "**Competitive identity.** In his 2007 book of that name, Anholt argued that reputation is earned through what a country does: its policies, products, culture and people. Campaigns without substance are wasted money. In 2014 he launched the Good Country Index, measuring contributions to humanity.",
      "**Why governments brand.** For tourism, investment, exports and students, and, for small or poorer states, to be known for something other than crises. Branding overlaps with public diplomacy but speaks the language of markets.",
      "**Gastrodiplomacy** and **pop-culture diplomacy** are branding through food and popular culture: Thailand’s programme to multiply Thai restaurants abroad (reported by *The Economist* in 2002), Japan’s Cool Japan, South Korea’s support for its cultural industries."
     ],
     pro:[
      "**Critiques.** Nadia Kaneva (2011) called for critical research on nation branding; Melissa Aronczyk’s *Branding the Nation* (2013) studied the consultants who sell it. Main concerns: commodifying identity, depoliticising debates about who the nation is, excluding minorities and uncomfortable histories, and weak evidence of effect. Iwabuchi (2015) called Japan’s version **brand nationalism**.",
      "**Defence.** Supporters reply that reputations exist anyway and that coordinated communication, done honestly, helps small states and correct outdated stereotypes.",
      "**Research.** Analyse campaigns as texts (who is shown, who is missing), study the policy process (who commissions and approves), and test effects with surveys over time rather than rankings alone (see {{measuring-soft-power}})."
     ]
    },
    related:["simon-anholt","measuring-soft-power","korean-wave","cultural-diplomacy"],
    sources:[{t:"Ipsos: Anholt-Ipsos Nation Brands Index (Japan first in 2023, for the first time)", url:"https://www.ipsos.com/en/topic/anholt-ipsos-nation-brands-index"},{t:"The Economist: Food as ambassador (23 February 2002)", url:"https://econ.st/2pXryt0"}],
    checked:"2026-11"},

   {id:"korean-wave", title:"The Korean Wave (Hallyu)", aka:["Hallyu","한류","K-culture","K-pop and K-drama"], tags:["culture","korea","soft power"],
    summary:"The spread of South Korean popular culture since the late 1990s, as a market phenomenon, a policy, and a test of soft power’s limits.",
    levels:{
     starter:[
      "The **Korean Wave** or [[hallyu|Hallyu]] is the worldwide popularity of South Korean dramas, pop music (K-pop), films, games, food and beauty products.",
      "Chinese journalists coined the term; its first known use was in the *Beijing Youth Daily* in November 1999. *Winter Sonata* (2003–04) made Korean drama a phenomenon in Japan; “Gangnam Style” passed one billion YouTube views in December 2012; *Parasite* won the Oscar for Best Picture in 2020.",
      {key:"Hallyu began as a regional, market-led success and became a global one with streaming and social media."}
     ],
     builder:[
      "**The state’s role.** After the 1997 Asian financial crisis, South Korea passed a basic law to promote cultural industries (1999) and later created the Korea Creative Content Agency (2009). Supporters say targeted funding, export support and cultural centres amplified the wave. Others emphasise private entertainment companies, their training systems, global platforms and fan communities. Most scholars describe a mix.",
      "**Public diplomacy.** The government has used the wave in its public diplomacy, for example when BTS spoke at a UN event for young people in 2018.",
      "**Limits.** After the 2016 decision to deploy the US THAAD missile defence system, Korean media and firms reported informal Chinese restrictions on Korean content and tours; China’s government did not acknowledge a formal ban. In Japan, anti-Korean sentiment produced the comic *Kenkanryū* (2005)."
     ],
     pro:[
      "**Debates.** Does Hallyu change views of South Korea’s government and foreign policy, or only of its products? Studies of fans often find warmer views of the country, but separating cause from selection (people who like Korea watch more K-dramas) is difficult.",
      "**Hybridity.** K-pop blends US, Japanese and other influences, and many hits are written and produced by international teams. This complicates the idea of a “national” culture spreading abroad, a theme of the culture unit of this track.",
      "**Political economy.** Labour conditions for trainees and idols, platform dependence and concentration in a few agencies are active research areas. Compare Japan’s Cool Japan: similar ambitions, different results and debates."
     ]
    },
    related:["nation-branding","cultural-diplomacy","soft-power-theory"],
    sources:[{t:"Wikipedia: Korean Wave (history and dates; checked against cited sources)", url:"https://en.wikipedia.org/wiki/Korean_Wave"}],
    checked:"2026-11"},

   {id:"confucius-institutes", title:"Confucius Institutes", aka:["孔子学院","Confucius Classrooms","Kongzi Xueyuan"], tags:["china","cultural diplomacy","education","controversy"],
    summary:"China’s government-backed language and culture programme placed in host universities abroad, and the debate it provokes, presented neutrally.",
    levels:{
     starter:[
      "**Confucius Institutes** teach Chinese language and culture abroad. The first opened in Seoul in 2004. Most are partnerships: a host university or school provides space and staff, and a Chinese partner provides funding, teachers and materials. Smaller **Confucius Classrooms** work in schools.",
      "Since 2020 the brand has been run by the Chinese International Education Foundation, which reported about 500 institutes at the end of 2023.",
      {warn:"The institutes are controversial. Describe the arrangements and the specific concerns and replies, each attributed."}
     ],
     builder:[
      "**Concerns.** Critics, including the American Association of University Professors (2014), the anthropologist Marshall Sahlins and some governments, argue that placing a foreign state’s programme inside universities risks self-censorship on sensitive topics such as Taiwan, Tibet and Tiananmen, and that contracts lacked transparency. A 2019 review by the US Government Accountability Office found most agreements similar, while some school officials and researchers raised concerns about possible self-censorship.",
      "**Replies.** China’s government says the institutes do not interfere with academic freedom and compares them with the British Council, the Goethe-Institut and the Instituto Cervantes. Many hosts value the language teaching and cultural events, and some research, for example Maria Repnikova’s on Ethiopia, finds students valuing practical benefits such as scholarships and jobs.",
      "**Closures.** Many institutes in the United States and parts of Europe closed from 2018, after reviews, new rules on funding and political pressure; numbers elsewhere, especially in Africa, Asia and Latin America, have been more stable."
     ],
     pro:[
      "**Structural difference.** Most national institutes run their own premises; Confucius Institutes are embedded in host institutions. This design is central to both the concern (influence inside academia) and the defence (local control of academic matters).",
      "**Evidence quality.** Much of the debate rests on individual incidents, contracts and reports; systematic studies are fewer. A careful paper distinguishes documented incidents, plausible risks and unsupported claims.",
      "**Rebranding.** The 2020 shift from Hanban to a foundation was presented by China as a reform separating government from programme management; critics saw a change of name more than of control. Attribute both readings.",
      "**Case design.** Comparisons across host countries (for example, contrasting closures in some places with expansion elsewhere) can test explanations based on politics, funding and demand."
     ]
    },
    related:["cultural-diplomacy","sharp-power","soft-power-theory","chinese-ir-theory"],
    sources:[{t:"Chinese International Education Foundation: 20th-anniversary release, with numbers at the end of 2023 (May 2024)", url:"https://www.ci.cn/en/xwzx/gg/10929b45-6376-4776-8d00-45f77b73c487"},{t:"Wikipedia: Confucius Institute (history and positions; checked against cited sources)", url:"https://en.wikipedia.org/wiki/Confucius_Institute"}],
    checked:"2026-11"},

   {id:"sports-mega-events", title:"Sports mega-events and soft power", aka:["mega-events","Olympics and World Cup politics","sportswashing"], tags:["sport","mega-events","soft power"],
    summary:"Why states host Olympics and World Cups, what they gain and risk, and the concepts of soft disempowerment and sportswashing.",
    levels:{
     starter:[
      "A [[sports-mega-event|sports mega-event]] is a huge international event such as the Olympic Games or the FIFA World Cup. Governments bid to host them for attention, prestige, investment, tourism and national pride.",
      "Many Games are remembered as “coming-out parties”: Tokyo 1964 (the first Olympics in Asia), Seoul 1988, Beijing 2008, South Africa 2010 (the first World Cup in Africa), Rio 2016 (the first Olympics in South America) and Qatar 2022 (the first World Cup in the Arab world).",
      {key:"Hosting invites the world to look, and it may not like everything it sees."}
     ],
     builder:[
      "**Emerging states.** Grix and Lee (2013) argued that emerging states use mega-events to seek attraction and status.",
      "**Soft disempowerment.** Brannagan and Giulianotti (2015), studying Qatar, showed that the scrutiny an event brings can reduce attraction: labour conditions, human rights and costs become global news.",
      "**Sportswashing** is critics’ term for using sport to improve a damaged reputation. Human rights groups use it; host governments reject it as unfair or hypocritical. Treat it as a claim to test.",
      "**Cases.** Beijing 2008 (torch relay protests) and 2022 (a diplomatic boycott by several governments); Tokyo 2020, postponed and held in 2021 largely without spectators; Qatar 2022, with debates over migrant workers and reforms."
     ],
     pro:[
      "**Audiences.** The same event can win admiration at home and in some regions while drawing criticism elsewhere. Analyse audiences separately.",
      "**Evidence.** Measuring image effects needs surveys before and after, in several countries, and controls for other events. Legacy claims (tourism, sport participation) are often made by organisers; independent evaluations are rarer.",
      "**Economics.** Many economists find that costs exceed measurable economic benefits for most hosts; supporters point to intangible gains. Keep economic and soft power arguments distinct.",
      "**Future hosts.** Saudi Arabia’s 2034 World Cup will revive the same debates; compare it with Qatar using the same questions."
     ]
    },
    related:["sports-diplomacy","heritage-politics","soft-power-theory"],
    sources:[{t:"Brannagan & Giulianotti, “Soft power and soft disempowerment” (Leisure Studies, 2015), repository record", url:"https://repository.lboro.ac.uk/articles/journal_contribution/Soft_power_and_soft_disempowerment_Qatar_global_sport_and_football_s_2022_World_Cup_finals/9621605"},{t:"Grix & Lee, “Soft Power, Sports Mega-Events and Emerging States” (Global Society, 2013), repository record", url:"https://e-space.mmu.ac.uk/617422/"}],
    checked:"2026-11"},

   {id:"heritage-politics", title:"World Heritage and heritage diplomacy", aka:["UNESCO World Heritage politics","heritage diplomacy"], tags:["heritage","unesco","diplomacy"],
    summary:"How the World Heritage system works, why nominations become political, and how to write about contested sites neutrally.",
    levels:{
     starter:[
      "The UNESCO [[world-heritage-convention|World Heritage Convention]] (1972) lets countries nominate places of [[outstanding-universal-value|outstanding universal value]] for the World Heritage List. A listing brings prestige, protection and tourists.",
      "States nominate; expert bodies (ICOMOS for cultural sites, IUCN for natural ones) evaluate; the 21-member World Heritage Committee, made up of states, decides.",
      {key:"Because states decide, heritage can become diplomacy, and sometimes dispute."}
     ],
     builder:[
      "**Politicisation.** Lynn Meskell’s *A Future in Ruins* (2018) argued that committee members increasingly vote on political lines, sometimes overriding expert advice.",
      "**Meiji Industrial Revolution sites (2015).** Japan presented industrialisation from the 1850s to 1910; South Korea raised wartime forced labour at some sites. Japan’s delegation acknowledged that many Koreans and others were “brought against their will and forced to work under harsh conditions” and promised to explain the full history; the two governments have since disagreed on what this means and whether it has been done, and the committee has repeatedly asked Japan to improve its interpretation.",
      "**Preah Vihear (2008).** Cambodia’s listing of a border temple led to protests in Thailand and armed clashes; in 2013 the International Court of Justice found that Cambodia had sovereignty over the whole promontory of the temple.",
      "**Sado Island Gold Mines (2024).** Inscribed with South Korea’s agreement after Japan agreed to exhibit the history of Korean workers and hold a memorial, followed by disputes over the exhibit’s wording and the first memorial ceremony; Japan says it has kept its commitments."
     ],
     pro:[
      "**Writing neutrally.** Use each side’s names, state who administers the site, quote official statements precisely, and separate what historians have established from how governments interpret it.",
      "**Intangible heritage.** The 2003 Convention on intangible cultural heritage (practices, foods, music) produces its own rivalries over who “owns” a shared tradition.",
      "**Research sources.** Committee decisions, nomination files, advisory body evaluations and mission reports are public on the World Heritage Centre website: excellent primary sources for a thesis on heritage diplomacy."
     ]
    },
    related:["japan-and-neighbours","sports-mega-events","cultural-diplomacy"],
    sources:[{t:"UNESCO World Heritage Centre: ICOMOS/UNESCO mission report on the Industrial Heritage Information Centre (2021)", url:"https://whc.unesco.org/document/188249"}],
    checked:"2026-11"},

   {id:"sports-diplomacy", title:"Sports diplomacy", aka:["ping-pong diplomacy","cricket diplomacy"], tags:["sport","diplomacy"],
    summary:"Using sporting contacts to open or ease relations, from ping-pong in 1971 to the unified Korean team in 2018, and the limits of sport.",
    levels:{
     starter:[
      "**Sports diplomacy** uses matches, tours and joint teams to send signals or open channels between countries.",
      "The classic case is [[ping-pong-diplomacy|ping-pong diplomacy]]. After the 1971 World Table Tennis Championships in Nagoya, Japan, China invited the US team to visit, which it did in April 1971. Kissinger’s secret trip followed in July 1971 and Nixon’s visit to China in February 1972.",
      {key:"Sport is a signal and a channel, rarely a cause."}
     ],
     builder:[
      "**Not spontaneous.** Historians note that Mao personally approved the invitation and that US and Chinese diplomats had met in ambassadorial talks since 1955. Sport gave a visible, low-risk signal to a move both leaderships already wanted.",
      "**Other cases.** India–Pakistan cricket diplomacy (for example President Zia ul-Haq attending a match in India in 1987); Iranian players giving white roses to the US team at the 1998 World Cup; the unified Korean women’s ice hockey team at PyeongChang 2018.",
      "**Limits.** The 1969 war between El Salvador and Honduras, nicknamed the “Football War”, broke out after World Cup qualifiers but had deeper causes in land, migration and borders."
     ],
     pro:[
      "**Analysing a case.** Ask who initiated the contact, what each government wanted, what risk the sporting form reduced (deniability, symbolism), and what followed. Process tracing (see {{process-tracing}}) suits these questions.",
      "**Sport as sanction.** Boycotts and bans (the 1980 and 1984 Olympic boycotts, the sporting isolation of apartheid South Africa, bans on Russian teams after 2022) are the coercive side of sports diplomacy.",
      "**Non-state actors.** Federations, clubs and athletes act independently; their choices can help or embarrass governments."
     ]
    },
    related:["sports-mega-events","public-diplomacy-practice"],
    sources:[{t:"History Today: The Myths and Realities of Ping-Pong Diplomacy", url:"https://www.historytoday.com/miscellanies/myths-and-realities-ping-pong-diplomacy"}],
    checked:"2026-11"},

   {id:"writing-a-policy-brief", title:"Writing a policy brief", aka:["policy briefing","policy memo"], tags:["writing","policy","skills"],
    summary:"A short, evidence-based document that gives a decision-maker options and recommendations on one problem, conclusion first.",
    levels:{
     starter:[
      "A [[policy-brief|policy brief]] is a short document, usually no more than about two to four pages, that helps a busy decision-maker act on one problem. It puts the main message first.",
      "Think of it as the opposite of a mystery novel: the reader learns the ending on page one, then sees the evidence.",
      {key:"One problem, one reader, one clear purpose."}
     ],
     builder:[
      "**Typical structure:** title; key messages or executive summary; the problem and why it matters now; evidence; options with costs and risks; recommendations; sources.",
      "**Style:** plain language, active voice, headings that tell the story, bullets for key points, numbers with sources and dates. Write the summary last. Canada’s International Development Research Centre advises keeping briefs to about two pages or 1,500 words and tailoring them to the reader.",
      "**Balance:** state the limits of the evidence (honest [[hedging]]), present the strongest objection and keep evidence separate from recommendation."
     ],
     pro:[
      "**Audience.** A minister needs the decision and the risk; a technical official needs more evidence; a parliamentary committee needs options. Decide before you write.",
      "**Evidence hierarchy.** Prefer systematic studies and official data; use cases to illustrate; label expert opinion as such. For soft power, be explicit about the attribution problem.",
      "**Common errors.** Essay-style openings, too many recommendations, recommendations not linked to evidence, undefined jargon, and advocacy disguised as analysis.",
      "**Practice.** Rewrite the conclusion of a seminar paper as three key messages and one recommendation. If you cannot, the argument needs work (see {{building-an-argument}})."
     ]
    },
    related:["building-an-argument","grey-literature"],
    sources:[{t:"IDRC: How to write a policy brief", url:"https://idrc-crdi.ca/en/funding/resources-idrc-grantees/how-write-policy-brief"}],
    checked:"2026-11"},

   {id:"nicholas-cull", title:"Nicholas J. Cull", aka:["Nick Cull","Cull"], tags:["thinker","public diplomacy","history"],
    summary:"The British-born historian whose five-part taxonomy of public diplomacy is the standard starting point in the field.",
    levels:{
     starter:[
      "Nicholas J. Cull is a historian of propaganda and public diplomacy, born in Britain and working in the United States. He is best known for dividing public diplomacy into five elements: **listening, advocacy, cultural diplomacy, exchange and international broadcasting**.",
      "His big idea in plain words: public diplomacy starts with listening, and no message can rescue a policy that foreign publics see as wrong.",
      {key:"Cull’s golden rule: policy matters more than messaging."}
     ],
     builder:[
      "**Key works.** “Public Diplomacy: Taxonomies and Histories” (*The Annals of the American Academy of Political and Social Science*, 2008); *Public Diplomacy: Lessons from the Past* (2009, a free report with ten cases of success and failure); *The Cold War and the United States Information Agency* (2008); *Public Diplomacy: Foundations for Global Engagement in the Digital Age* (2019).",
      "**How scholars use him.** His taxonomy organises courses, government reviews and theses; each element has its own institutions, time scales and ethics. He also argues that psychological warfare must stay separate from public diplomacy because the link destroys credibility."
     ],
     pro:[
      "**Context.** Cull writes as a historian, building categories from archives of Cold War agencies, which gives his taxonomy depth but a US- and Europe-centred starting point. Scholars of Chinese, Japanese, Indian or Gulf public diplomacy test whether the categories fit their cases.",
      "**Critiques.** Communication scholars argue that taxonomies of activities say little about effects, and relational approaches (Zaharna) put networks rather than state activities at the centre.",
      "**Legacy.** His categories are now standard vocabulary, used here throughout Lessons 2–5."
     ]
    },
    related:["public-diplomacy-practice","international-broadcasting","cultural-diplomacy"],
    read:[{book:"cullpd", where:"The whole report"}],
    sources:[{t:"Cull, “Public Diplomacy: Taxonomies and Histories” (2008)", url:"https://study.sagepub.com/sites/default/files/The%20ANNALS%20of%20the%20American%20Academy%20of%20Political%20and%20Social%20Science-2008-Cull-31-54.pdf"},{t:"Cull, Public Diplomacy: Lessons from the Past (2009)", url:"https://uscpublicdiplomacy.org/resources/public_diplomacy_less"}],
    checked:"2026-11"},

   {id:"simon-anholt", title:"Simon Anholt", aka:["Anholt"], tags:["thinker","nation branding"],
    summary:"The British policy adviser who popularised nation branding, created the Nation Brands Index, and later argued that reputations cannot be advertised.",
    levels:{
     starter:[
      "Simon Anholt is a British independent policy adviser who popularised the idea of the **nation brand** from the late 1990s: the image a country has in the minds of people abroad.",
      "He created a survey of national reputations, now the Anholt-Ipsos Nation Brands Index, built around six dimensions: exports, governance, culture, people, tourism, and immigration and investment.",
      {key:"His later message: you can’t buy a reputation; you have to earn it."}
     ],
     builder:[
      "**Key works.** *Competitive Identity: The New Brand Management for Nations, Cities and Regions* (2007) argued that reputation follows a country’s actual policies, products and behaviour, so coordinated substance matters more than campaigns. *Places: Identity, Image and Reputation* (2010) developed the idea. In 2014 he launched the Good Country Index.",
      "**How scholars use him.** His hexagon is the most cited model of national reputation; his survey is used as data in research and by governments."
     ],
     pro:[
      "**Critiques.** Critical scholars (Kaneva 2011; Aronczyk 2013) argue that nation branding, including Anholt’s model, treats nations as products and depoliticises identity; Anholt’s own later scepticism about campaigns is often cited in support.",
      "**Legacy.** He bridged marketing and international relations, and his shift from branding to “competitive identity” mirrors Nye’s point that policies are a source of soft power.",
      {tip:"Cite which edition of the Nation Brands Index you use; producers and methods have changed since 2005."}
     ]
    },
    related:["nation-branding","measuring-soft-power"],
    sources:[{t:"Ipsos: Anholt-Ipsos Nation Brands Index", url:"https://www.ipsos.com/en/topic/anholt-ipsos-nation-brands-index"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"co-optive-power", term:"Co-optive power", def:"Nye’s early name for soft power: getting others to want what you want, as opposed to command power, which makes them act against their wishes.", codex:"soft-power-theory"},
   {id:"faces-of-power", term:"Faces of power", def:"Three views of power: getting others to act against their wishes (Dahl), keeping issues off the agenda (Bachrach and Baratz), and shaping people’s wants (Lukes).", codex:"soft-power-theory"},
   {id:"sources-of-soft-power", term:"Sources of soft power", def:"Nye’s three sources: culture that others find attractive, political values a country lives up to, and foreign policies others see as legitimate.", codex:"soft-power-theory"},
   {id:"smart-power", term:"Smart power", def:"Combining hard and soft power tools in one strategy.", codex:"soft-power-theory"},
   {id:"representational-force", term:"Representational force", def:"Mattern’s term for a narrative that corners its audience: refusing it would threaten their own identity, so attraction is less voluntary than it looks.", codex:"soft-power-theory"},
   {id:"sharp-power", term:"Sharp power", def:"A term coined in 2017 for influence that manipulates, distracts or censors rather than attracts; contested by those it describes.", codex:"sharp-power"},
   {id:"soft-power-index", term:"Soft power index", def:"A ranking of countries’ soft power, usually built from surveys and indicators; it measures perceptions or resources, not influence itself.", codex:"measuring-soft-power"},
   {id:"new-public-diplomacy", term:"New public diplomacy", def:"The shift, described by Melissen (2005), from one-way government messaging to dialogue through networks that include non-state actors.", codex:"public-diplomacy-practice"},
   {id:"listening-public-diplomacy", term:"Listening (public diplomacy)", def:"Collecting and using information about foreign publics’ views to shape policy and communication; Cull’s first element.", codex:"public-diplomacy-practice"},
   {id:"advocacy-public-diplomacy", term:"Advocacy (public diplomacy)", def:"Actively promoting a particular policy or idea to foreign publics, for example through press briefings or op-eds.", codex:"public-diplomacy-practice"},
   {id:"cultural-diplomacy", term:"Cultural diplomacy", def:"A government’s effort to make its culture known abroad through arts, language teaching and festivals.", codex:"cultural-diplomacy"},
   {id:"exchange-diplomacy", term:"Exchange diplomacy", def:"Sending citizens abroad and receiving foreign citizens for study, work or visits, to build lasting ties.", codex:"cultural-diplomacy"},
   {id:"international-broadcasting", term:"International broadcasting", def:"Radio, television and online news and programmes made for foreign audiences, usually funded by a government.", codex:"international-broadcasting"},
   {id:"digital-diplomacy", term:"Digital diplomacy", def:"The use of social media and other digital tools by foreign ministries and diplomats to engage publics and each other.", codex:"public-diplomacy-practice"},
   {id:"nation-branding", term:"Nation branding", def:"Managing a country’s reputation abroad as if it were a brand, through campaigns, slogans and coordinated communication.", codex:"nation-branding"},
   {id:"nation-brands-index", term:"Nation Brands Index", def:"An annual survey, created by Simon Anholt and now run with Ipsos, in which people in about 20 countries rate 50 nations on six dimensions.", codex:"measuring-soft-power"},
   {id:"competitive-identity", term:"Competitive identity", def:"Anholt’s later idea that a country’s reputation follows its real policies and behaviour, not advertising.", codex:"simon-anholt"},
   {id:"pop-culture-diplomacy", term:"Pop-culture diplomacy", def:"Using popular culture such as anime, manga or pop music in a country’s official public diplomacy.", codex:"nation-branding"},
   {id:"brand-nationalism", term:"Brand nationalism", def:"Iwabuchi’s critical term for state branding that turns popular culture into a national asset and narrows the nation to marketable images.", codex:"nation-branding"},
   {id:"hallyu", term:"Hallyu (Korean Wave)", def:"The worldwide spread of South Korean popular culture since the late 1990s; the term was coined by Chinese media in 1999.", codex:"korean-wave"},
   {id:"gastrodiplomacy", term:"Gastrodiplomacy", def:"Promoting a country’s cuisine abroad as part of public or cultural diplomacy, for example by supporting restaurants overseas.", codex:"nation-branding"},
   {id:"cultural-institute", term:"Cultural institute", def:"A body that promotes a country’s language and culture abroad, such as the Alliance Française, the British Council or the Goethe-Institut.", codex:"cultural-diplomacy"},
   {id:"confucius-institute", term:"Confucius Institute", def:"A Chinese language and culture programme, usually a partnership placed inside a host university, first opened in 2004; its role is debated.", codex:"confucius-institutes"},
   {id:"sports-mega-event", term:"Sports mega-event", def:"A very large international sporting event, such as the Olympics or the FIFA World Cup, with a global audience and heavy public investment.", codex:"sports-mega-events"},
   {id:"soft-disempowerment", term:"Soft disempowerment", def:"Losing attraction because of the scrutiny or offence a country’s actions cause, for example when a mega-event exposes problems.", codex:"sports-mega-events"},
   {id:"sportswashing", term:"Sportswashing", def:"A critics’ term for using sport to improve a reputation damaged by human rights concerns; host governments reject it.", codex:"sports-mega-events"},
   {id:"world-heritage-convention", term:"World Heritage Convention", def:"The UNESCO treaty of 1972 under which states nominate cultural and natural sites for the World Heritage List.", codex:"heritage-politics"},
   {id:"outstanding-universal-value", term:"Outstanding universal value", def:"The standard a site must meet to be inscribed on the World Heritage List: significance that transcends national borders.", codex:"heritage-politics"},
   {id:"heritage-diplomacy", term:"Heritage diplomacy", def:"Using cultural and natural heritage, including World Heritage nominations, to pursue foreign-policy goals or manage relations.", codex:"heritage-politics"},
   {id:"sports-diplomacy", term:"Sports diplomacy", def:"Using sporting contacts, tours and joint teams to send signals or open channels between countries.", codex:"sports-diplomacy"},
   {id:"ping-pong-diplomacy", term:"Ping-pong diplomacy", def:"The 1971 exchange of table tennis teams between the United States and China that preceded their rapprochement.", codex:"sports-diplomacy"},
   {id:"policy-brief", term:"Policy brief", def:"A short, evidence-based document that gives a decision-maker options and recommendations on one problem, with the conclusion first.", codex:"writing-a-policy-brief"},
   {id:"theory-of-change", term:"Theory of change", def:"A step-by-step account of how a programme’s activities are supposed to lead to its intended results, so each link can be tested."},
   {id:"outputs-outcomes-impact", term:"Outputs, outcomes and impact", def:"Evaluation levels: what a programme produced and whom it reached; changes in its audience; and the wider results it aimed for."},
   {id:"attribution-problem", term:"Attribution problem", def:"The difficulty of showing that an observed change was caused by a particular programme rather than by other events."}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u8-q01", lesson:"e4u8-l1", level:1, q:"In which book did Joseph Nye first introduce “soft power”?", options:[
     {t:"*Bound to Lead* (1990)", ok:true, why:"Right. The book argued against claims of US decline and introduced soft power."},
     {t:"*Power and Interdependence* (1977)", why:"That was Keohane and Nye’s book on complex interdependence, before the term."},
     {t:"*Soft Power: The Means to Success in World Politics* (2004)", why:"That book developed the idea fully, 14 years after he introduced it."},
     {t:"*The Future of Power* (2011)", why:"A later book that revised the concept."}]},
   {id:"e4u8-q02", lesson:"e4u8-l1", level:2, q:"A chair of negotiations arranges the agenda so a rival’s proposal is never discussed. Which kind of power is this on Nye’s spectrum?", options:[
     {t:"Agenda-setting, the second face of power", ok:true, why:"Yes. Keeping options off the table is Bachrach and Baratz’s second face, which Nye places on the co-optive side."},
     {t:"Coercion", why:"No threat is used; the rival simply never gets the option."},
     {t:"Inducement", why:"No payment is offered."},
     {t:"Attraction", why:"The rival has not been persuaded to want anything; their option has been excluded."}]},
   {id:"e4u8-q03", lesson:"e4u8-l1", level:1, q:"Which is NOT one of Nye’s three sources of soft power?", options:[
     {t:"Military bases abroad", ok:true, why:"Correct. Military bases are hard power resources, even if they can sometimes produce goodwill."},
     {t:"Culture that others find attractive", why:"Culture is one of the three sources."},
     {t:"Political values the country lives up to", why:"Political values are one of the three sources."},
     {t:"Foreign policies others see as legitimate", why:"Legitimate foreign policies are one of the three sources."}]},
   {id:"e4u8-q04", lesson:"e4u8-l1", level:2, q:"Ana says: “Our country tops the culture rankings, so our soft power must be winning us allies.” What concept best explains the flaw?", options:[
     {t:"Resources are not outcomes: power conversion may fail.", ok:true, why:"Right. Cultural resources do not automatically translate into allies or votes."},
     {t:"Representational force", why:"That concerns how narratives corner an audience, not the gap between resources and results."},
     {t:"Sharp power", why:"Nothing in her claim involves manipulation."},
     {t:"The first face of power", why:"Dahl’s face concerns direct control of behaviour, not this measurement mistake."}]},
   {id:"e4u8-q05", lesson:"e4u8-l1", level:1, q:"Who argued that soft power “isn’t so soft” because attraction can be produced through representational force?", options:[
     {t:"Janice Bially Mattern (2005)", ok:true, why:"Yes, in *Millennium*."},
     {t:"Todd Hall (2010)", why:"Hall argued that soft power is too unclear as a category; a different critique."},
     {t:"Suzanne Nossel (2004)", why:"Nossel wrote about smart power."},
     {t:"Steven Lukes (1974)", why:"Lukes wrote on the third face of power, before the term soft power existed."}]},
   {id:"e4u8-q06", lesson:"e4u8-l1", level:3, q:"A report says a government covertly funded commentators abroad to praise its policies without disclosing the payments. A student calls it “soft power”. What is the best reply?", options:[
     {t:"Covert payment and concealment are closer to what Walker and Ludwig call sharp power; Nye ties soft power to openness and voluntary attraction.", ok:true, why:"Right. The method, deception, places it outside soft power as Nye defines it."},
     {t:"It is soft power because no military force was used.", why:"Soft power is not everything that is non-military; payment and deception are excluded."},
     {t:"It is hard power because money is involved, and nothing more can be said.", why:"Payment is inducement, but the concealment is the key feature; sharp power names it."},
     {t:"It cannot be classified without knowing which country did it.", why:"Classification depends on the method, not on the identity of the country."}]},
   {id:"e4u8-q07", lesson:"e4u8-l1", level:2, q:"Two indices rank Country Q 5th and 14th in the same year. What is the most likely explanation?", options:[
     {t:"They survey different people about different things, with different weights.", ok:true, why:"Yes. Methods differ, so ranks differ; neither is simply “right”."},
     {t:"One index must contain a typing error.", why:"Large gaps are normal between indices with different designs."},
     {t:"Country Q’s soft power changed during the year.", why:"Both refer to the same period; the difference is in method."},
     {t:"Soft power cannot be measured, so both are random.", why:"Too strong: indices measure something (perceptions, resources) even if not influence itself."}]},
   {id:"e4u8-q08", lesson:"e4u8-l1", level:1, q:"In 2007 Hu Jintao’s report to China’s 17th Party Congress called for what?", options:[
     {t:"Strengthening culture as part of China’s soft power", ok:true, why:"Right. Soft power (ruǎn shílì) entered top-level party language here."},
     {t:"Closing all Confucius Institutes", why:"The opposite: the institutes were expanding at the time."},
     {t:"Joining the Soft Power 30 index", why:"Countries do not join indices; and that index began in 2015."},
     {t:"Replacing the term “soft power” with “sharp power”", why:"Sharp power was coined in 2017 by US-based authors and rejected by Chinese officials."}]},
   {id:"e4u8-q09", lesson:"e4u8-l1", level:3, q:"Priya’s thesis argues that a country’s rise in a soft power index caused its partners to support it in a vote. Which addition would most strengthen her design?", options:[
     {t:"Evidence linking specific audiences’ views to the partners’ decision, such as statements, timing and comparison with partners whose publics’ views did not change", ok:true, why:"Yes. She needs a mechanism and a comparison, not just a correlation between a rank and a vote."},
     {t:"A second index showing the same rise", why:"That confirms the rise, not that it caused the vote."},
     {t:"A longer quotation from Nye defining soft power", why:"Definitions do not establish causation."},
     {t:"Photographs of cultural events in the partner countries", why:"Evidence of activity, not of effect on the vote."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u8-q10", lesson:"e4u8-l2", level:1, q:"Which element of Cull’s taxonomy does he see as the foundation of the others?", options:[
     {t:"Listening", ok:true, why:"Right. Without listening, the other elements become a monologue."},
     {t:"Advocacy", why:"Advocacy is one element; Cull puts listening first."},
     {t:"International broadcasting", why:"An important element, but not the foundation in his scheme."},
     {t:"Psychological warfare", why:"Cull keeps psychological warfare outside public diplomacy."}]},
   {id:"e4u8-q11", lesson:"e4u8-l2", level:1, q:"According to Cull, who first applied “public diplomacy” in its modern sense, and when?", options:[
     {t:"Edmund Gullion, a retired US diplomat, in 1965", ok:true, why:"Correct: he applied it to international information and cultural relations."},
     {t:"Joseph Nye, in 1990", why:"Nye introduced soft power in 1990, not public diplomacy."},
     {t:"Jan Melissen, in 2005", why:"Melissen wrote on the new public diplomacy in 2005."},
     {t:"The BBC, in 1932", why:"The BBC started its Empire Service in 1932, but did not coin the term."}]},
   {id:"e4u8-q12", lesson:"e4u8-l2", level:2, q:"A city government in Japan twins with a city in Brazil, and local schools run student exchanges. Which idea does this illustrate best?", options:[
     {t:"The new public diplomacy, in which non-state and sub-state actors engage foreign publics", ok:true, why:"Right. Cities and schools are among the many actors Melissen’s model includes."},
     {t:"Sharp power", why:"Nothing here is covert or manipulative."},
     {t:"Hard power", why:"No coercion or payment for policy is involved."},
     {t:"International broadcasting", why:"No broadcasting is involved."}]},
   {id:"e4u8-q13", lesson:"e4u8-l2", level:2, q:"Why might a government-funded broadcaster deliberately report its own government’s failures?", options:[
     {t:"Credibility: audiences trust it more if it is not simply the funder’s voice, which helps the funder in the long run.", ok:true, why:"Yes. This is the central paradox of international broadcasting."},
     {t:"Because broadcasters have no editorial rules.", why:"Most have detailed editorial rules; the reason is credibility."},
     {t:"To reduce its audience.", why:"Credible reporting usually aims to grow trust and audience."},
     {t:"Because the law requires every broadcaster to criticise its government.", why:"No such general law exists; independence rules vary."}]},
   {id:"e4u8-q14", lesson:"e4u8-l2", level:1, q:"What did the UK regulator Ofcom do in February 2021?", options:[
     {t:"Revoked CGTN’s licence to broadcast in the UK", ok:true, why:"Right. It said the licence holder lacked editorial responsibility and was ultimately controlled by the Chinese Communist Party; China objected."},
     {t:"Banned the BBC World Service", why:"Ofcom regulates UK broadcasters; it did not ban the World Service."},
     {t:"Suspended RT across the European Union", why:"The EU suspended RT in March 2022; Ofcom is a UK body."},
     {t:"Created NHK World-Japan", why:"NHK is Japan’s public broadcaster."}]},
   {id:"e4u8-q15", lesson:"e4u8-l2", level:3, q:"Oluwaseun studies an embassy’s social media and finds that 95% of posts announce events and policies, almost none reply to comments, and no surveys are run. How would Cull and Melissen describe this practice?", options:[
     {t:"Mostly old, one-way public diplomacy, weak on listening", ok:true, why:"Right. It is a monologue on new platforms, lacking the listening and dialogue both authors stress."},
     {t:"A model of the new public diplomacy", why:"Using social media is not enough; the new model is defined by dialogue and networks."},
     {t:"Sharp power", why:"Nothing indicates deception or manipulation."},
     {t:"Exchange diplomacy", why:"No people are being sent or received."}]},
   {id:"e4u8-q16", lesson:"e4u8-l2", level:3, q:"A ministry reports that alumni of its exchange programme are far more favourable to it than the general population. Which design would best test whether the programme caused this?", options:[
     {t:"Compare applicants who were accepted with similar applicants who were not, before and after the exchange", ok:true, why:"Yes. This deals with selection bias by comparing like with like over time."},
     {t:"Survey more alumni", why:"A larger sample of the same group does not solve selection bias."},
     {t:"Ask alumni whether the programme changed their views", why:"Self-reports are useful but weak evidence of cause."},
     {t:"Count how many alumni there are", why:"An output, not evidence of effect."}]},
   {id:"e4u8-q17", lesson:"e4u8-l2", level:2, q:"Which example is cultural diplomacy rather than advocacy?", options:[
     {t:"A national institute offers language classes and hosts a film festival.", ok:true, why:"Right. Making culture known abroad, not arguing a specific policy."},
     {t:"An ambassador gives interviews defending a trade policy.", why:"That is advocacy."},
     {t:"An embassy rebuts a newspaper report about its military.", why:"That is advocacy."},
     {t:"A minister writes an op-ed on a border dispute.", why:"That is advocacy."}]},
   {id:"e4u8-q18", lesson:"e4u8-l2", level:1, q:"In Cull’s cases, what does Sayyid Qutb’s period of study in the United States (1948–50) illustrate?", options:[
     {t:"That exchange can produce rejection as well as attraction", ok:true, why:"Right. Qutb returned hostile to American society."},
     {t:"That broadcasting is the most effective tool", why:"His case is about exchange."},
     {t:"That listening always works", why:"Unrelated to his case."},
     {t:"That cultural institutes should be closed", why:"Cull draws no such conclusion."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u8-q19", lesson:"e4u8-l3", level:1, q:"Which is one of the six dimensions of Anholt’s hexagon?", options:[
     {t:"Governance", ok:true, why:"Yes. The others are exports, culture, people, tourism, and immigration and investment."},
     {t:"Military strength", why:"Not a dimension of the hexagon; it measures reputation, not hard power."},
     {t:"Population size", why:"Not a dimension."},
     {t:"Climate", why:"Not a dimension."}]},
   {id:"e4u8-q20", lesson:"e4u8-l3", level:2, q:"Sione advises a small Pacific state that wants a better image. Following Anholt’s later view, what should he recommend first?", options:[
     {t:"Focus on real policies and actions that people abroad can notice and value, rather than an advertising campaign", ok:true, why:"Yes: competitive identity. Reputation follows behaviour."},
     {t:"Hire a firm to design a new logo and slogan", why:"Anholt argues campaigns alone rarely change reputations."},
     {t:"Buy a higher place in a soft power index", why:"Rankings cannot be bought, and a rank is not a reputation."},
     {t:"Avoid all international engagement", why:"Engagement is how reputations are formed."}]},
   {id:"e4u8-q21", lesson:"e4u8-l3", level:1, q:"Where was the term “Korean Wave” (Hallyu) first used, according to the best-known account?", options:[
     {t:"In Chinese media, in the *Beijing Youth Daily* in 1999", ok:true, why:"Right: about Chinese viewers’ enthusiasm for Korean dramas and pop songs."},
     {t:"In a South Korean government law of 1999", why:"South Korea passed a cultural-industries law in 1999, but the term came from Chinese journalists."},
     {t:"In a US magazine in 2012, after “Gangnam Style”", why:"The term was more than a decade older."},
     {t:"In Japan, after *Winter Sonata*", why:"*Winter Sonata* spread the term in Japan in 2003–04, but it originated in China."}]},
   {id:"e4u8-q22", lesson:"e4u8-l3", level:2, q:"Which statement about the Korean Wave is best supported by the evidence discussed?", options:[
     {t:"It grew from a mix of private industry, platforms and fans, which state policy supported and amplified.", ok:true, why:"Right. Most scholars describe a combination rather than a purely state-led or purely market-led wave."},
     {t:"It was entirely planned by the government from the start.", why:"Too strong: private firms and fans played central roles."},
     {t:"The government played no role at all.", why:"Too strong: a 1999 law and later agencies supported cultural industries."},
     {t:"It has removed all political tensions in the region.", why:"Counter-evidence: reported restrictions in China after THAAD and anti-Korean sentiment in Japan."}]},
   {id:"e4u8-q23", lesson:"e4u8-l3", level:3, q:"Mei is writing about Confucius Institutes. Which sentence best fits academic neutrality?", options:[
     {t:"Critics such as the AAUP argue the institutes risk self-censorship inside universities; China’s government says they do not interfere with academic freedom, and many hosts value their teaching.", ok:true, why:"Right: specific concerns and specific replies, each attributed."},
     {t:"Confucius Institutes are clearly espionage centres.", why:"An unsupported conclusion stated as fact."},
     {t:"Concerns about Confucius Institutes are entirely invented.", why:"Dismisses documented concerns, such as those in the 2019 US review."},
     {t:"Confucius Institutes work exactly like the Goethe-Institut.", why:"Inaccurate: most are placed inside host institutions, unlike the Goethe-Institut’s own centres."}]},
   {id:"e4u8-q24", lesson:"e4u8-l3", level:1, q:"Which policy step belongs to Japan’s Cool Japan approach?", options:[
     {t:"Setting up the Cool Japan Fund in 2013 to invest in creative businesses abroad", ok:true, why:"Correct. Its results were widely criticised, and in 2026 its future was under review."},
     {t:"Creating the Korea Creative Content Agency", why:"That is South Korea’s agency (2009)."},
     {t:"Launching the International Day of Yoga", why:"That was India’s initiative at the UN (2014)."},
     {t:"Opening the first Confucius Institute", why:"That was China’s programme (2004)."}]},
   {id:"e4u8-q25", lesson:"e4u8-l3", level:2, q:"What is the main point of Iwabuchi’s critique of “brand nationalism”?", options:[
     {t:"State branding turns popular culture into a national asset and narrows the nation to marketable images", ok:true, why:"Right. It leaves out diversity and difficult histories."},
     {t:"Japanese companies should stop exporting anime", why:"His critique concerns state framing, not exports as such."},
     {t:"Popular culture cannot cross borders", why:"His earlier work showed how Japanese culture travels in Asia."},
     {t:"Nation branding is the only effective form of public diplomacy", why:"He is a critic of branding."}]},
   {id:"e4u8-q26", lesson:"e4u8-l3", level:1, q:"How did the UN General Assembly create the International Day of Yoga?", options:[
     {t:"By resolution 69/131 of 11 December 2014, with 177 co-sponsors", ok:true, why:"Correct. It made 21 June the International Day of Yoga."},
     {t:"By a Security Council decision in 2010", why:"Observance days are created by the General Assembly, and the date is wrong."},
     {t:"By UNESCO’s World Heritage Committee", why:"The Committee lists sites; it does not create international days."},
     {t:"By a vote of the Indian Parliament alone", why:"India proposed it, but the UN General Assembly adopted it."}]},
   {id:"e4u8-q27", lesson:"e4u8-l3", level:3, q:"Dmitri claims that the global success of *RRR*’s “Naatu Naatu” proves India’s government has a successful soft power strategy. What is the best response?", options:[
     {t:"The film is a commercial Telugu production; its success shows India’s cultural assets, but Thussu argues these are not yet converted into influence by a strategy.", ok:true, why:"Right. It separates market success from state strategy and corrects the “Bollywood” assumption."},
     {t:"The film was made by the Indian Council for Cultural Relations.", why:"Inaccurate: it was a commercial production."},
     {t:"Films have no relation to soft power.", why:"Too strong: culture is one of Nye’s sources."},
     {t:"It proves soft power is sharp power.", why:"Nothing in the case involves manipulation."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u8-q28", lesson:"e4u8-l4", level:1, q:"Which city was the first to host both the Summer and Winter Olympic Games?", options:[
     {t:"Beijing (2008 and 2022)", ok:true, why:"Correct: the 2008 Summer Games and the 2022 Winter Games."},
     {t:"Tokyo (1964 and 2021)", why:"Tokyo has hosted the Summer Games; Japan’s Winter Games were in Sapporo and Nagano."},
     {t:"Seoul (1988 and 2018)", why:"The 2018 Winter Games were in PyeongChang, not Seoul."},
     {t:"Rio de Janeiro (2016)", why:"Rio hosted only the Summer Games."}]},
   {id:"e4u8-q29", lesson:"e4u8-l4", level:1, q:"What does “soft disempowerment” mean, as used by Brannagan and Giulianotti?", options:[
     {t:"Losing attraction because of the scrutiny or offence a country’s actions bring", ok:true, why:"Right. Mega-events invite scrutiny that can reduce attraction."},
     {t:"Giving up hard power voluntarily", why:"That is not their concept."},
     {t:"Banning foreign broadcasters", why:"That is a media restriction, not the concept, which is about losing attraction."},
     {t:"Hosting a smaller event", why:"Unrelated to event size."}]},
   {id:"e4u8-q30", lesson:"e4u8-l4", level:2, q:"A government says criticism of its World Cup is unfair and shows double standards; a human rights group calls the tournament sportswashing. How should a seminar paper treat “sportswashing”?", options:[
     {t:"As a contested claim: state who makes it, what is allegedly being washed, for which audience, and whether evidence shows views changed", ok:true, why:"Right. Treat it as a hypothesis to test, attributing both sides."},
     {t:"As a neutral technical term everyone accepts", why:"Host governments reject it; it is not neutral."},
     {t:"As meaningless, so it should be ignored", why:"It names a real debate that scholars study."},
     {t:"As proven whenever an authoritarian state hosts an event", why:"That assumes the conclusion; evidence is needed case by case."}]},
   {id:"e4u8-q31", lesson:"e4u8-l4", level:2, q:"Who decides whether a site is inscribed on the World Heritage List?", options:[
     {t:"The 21-member World Heritage Committee, made up of states, advised by expert bodies", ok:true, why:"Correct. ICOMOS and IUCN advise; states decide."},
     {t:"ICOMOS alone", why:"ICOMOS evaluates cultural sites and advises; it does not decide."},
     {t:"The UN Security Council", why:"The Security Council has no role in World Heritage listing."},
     {t:"The country that owns the site", why:"States nominate; the Committee decides."}]},
   {id:"e4u8-q32", lesson:"e4u8-l4", level:3, q:"Hana writes about the 2015 inscription of the Sites of Japan’s Meiji Industrial Revolution. Which sentence is most accurate and balanced?", options:[
     {t:"Japan acknowledged at inscription that Koreans were brought against their will to work at some sites; Japan and South Korea have disagreed since about what that meant and how the history is presented.", ok:true, why:"Right: the documented statement, then both governments’ readings."},
     {t:"South Korea blocked the inscription.", why:"Inaccurate: the sites were inscribed."},
     {t:"The dispute is about the sites’ 19th-century architecture.", why:"Inaccurate: it concerns wartime labour at some sites."},
     {t:"UNESCO confirmed that the matter is closed.", why:"Inaccurate: the committee has continued to ask Japan to improve its interpretation."}]},
   {id:"e4u8-q33", lesson:"e4u8-l4", level:1, q:"Which sequence is correct for ping-pong diplomacy?", options:[
     {t:"Nagoya championships → US team visits China (April 1971) → Kissinger’s secret trip (July 1971) → Nixon in China (February 1972)", ok:true, why:"Correct order."},
     {t:"Nixon in China → US team visits China → Kissinger’s secret trip", why:"Nixon’s visit came last, in 1972."},
     {t:"Kissinger’s secret trip → Nagoya championships → Nixon in China", why:"The championships came first, in spring 1971."},
     {t:"US team visits China (1969) → Nagoya championships (1971)", why:"The visit followed the 1971 championships."}]},
   {id:"e4u8-q34", lesson:"e4u8-l4", level:2, q:"Why do historians call the 1969 Football War’s matches a trigger rather than a cause?", options:[
     {t:"The war’s roots lay in land, migration and border tensions between El Salvador and Honduras; the matches sparked an existing conflict.", ok:true, why:"Right. A trigger sets off a conflict whose causes lie elsewhere."},
     {t:"No matches were played.", why:"World Cup qualifiers were played in 1969."},
     {t:"FIFA declared the war.", why:"FIFA played no such role."},
     {t:"The war lasted only one hour.", why:"It lasted about 100 hours; its length is not the point."}]},
   {id:"e4u8-q35", lesson:"e4u8-l4", level:2, q:"Why did Grix and Lee argue that emerging states are especially drawn to mega-events?", options:[
     {t:"They see them as a way to seek attraction and international status", ok:true, why:"Right: “the lure of the politics of attraction”."},
     {t:"Mega-events are always profitable", why:"Many studies find costs exceed measurable economic benefits."},
     {t:"Only emerging states are allowed to bid", why:"Any state can bid."},
     {t:"They want to avoid international attention", why:"The opposite: attention is the point."}]},
   {id:"e4u8-q36", lesson:"e4u8-l4", level:3, q:"Lucía compares Tokyo 2020 and Qatar 2022 for a paper on soft power. Which comparison question would best use both cases?", options:[
     {t:"How did the main source of scrutiny (a pandemic and domestic opinion in Tokyo; labour and rights in Qatar) shape each host’s image for different audiences?", ok:true, why:"Right. It compares a specific mechanism across cases and separates audiences."},
     {t:"Which host had the better weather?", why:"Not a soft power question."},
     {t:"Which host is morally superior?", why:"A normative judgement, not an analytical comparison; it also invites bias."},
     {t:"Which event sold more souvenirs?", why:"An output with no clear link to image or influence."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u8-q37", lesson:"e4u8-l5", level:1, q:"In evaluation terms, “10,000 people attended our festival” is…", options:[
     {t:"An output", ok:true, why:"Right: a count of what was done and who was reached."},
     {t:"An outcome", why:"An outcome would be a change in the audience, such as knowledge or attitudes."},
     {t:"An impact", why:"An impact would be a policy result."},
     {t:"A theory of change", why:"A theory of change is the account linking steps, not a count."}]},
   {id:"e4u8-q38", lesson:"e4u8-l5", level:2, q:"Why do most public diplomacy reports focus on outputs?", options:[
     {t:"Outputs are easy to count, while outcomes and impact are harder to measure and attribute", ok:true, why:"Right. This is why evaluation of soft power is hard."},
     {t:"Outputs are the only thing that matters", why:"Impact is what governments want; outputs are just easier."},
     {t:"Outcomes are illegal to measure", why:"They are not; surveys and interviews can measure them."},
     {t:"Impact cannot exist in public diplomacy", why:"Impact can exist; showing it is the challenge."}]},
   {id:"e4u8-q39", lesson:"e4u8-l5", level:1, q:"What did Goldsmith, Horiuchi and Matush (2021) find about leaders’ visits abroad?", options:[
     {t:"They raised host publics’ approval of the visiting leader by about 2 percentage points, for up to about three weeks, more with media coverage", ok:true, why:"Correct, using Gallup World Poll interviews around 86 visits."},
     {t:"They had no effect at all", why:"They found a small effect that lasted up to about three weeks."},
     {t:"They raised approval by about 20 points", why:"The effect was much smaller."},
     {t:"They always reduced approval", why:"Approval rose on average."}]},
   {id:"e4u8-q40", lesson:"e4u8-l5", level:3, q:"Kenji notes that surveys find mostly unfavourable views of China in many high-income countries but more positive views of China’s influence in parts of Africa. What is the most careful conclusion?", options:[
     {t:"Audience matters, and the pattern may reflect economic ties, foreign policy and public diplomacy, which need separating before crediting any one cause", ok:true, why:"Right. This is the attribution problem applied to real survey patterns."},
     {t:"China’s public diplomacy works in Africa and fails elsewhere", why:"That jumps to one cause; other factors may explain the pattern."},
     {t:"The surveys must be wrong", why:"Different patterns across regions are plausible and well documented."},
     {t:"Soft power does not exist", why:"Too strong; the pattern shows that attraction varies by audience."}]},
   {id:"e4u8-q41", lesson:"e4u8-l5", level:2, q:"What should come first in a policy brief?", options:[
     {t:"The key messages or summary", ok:true, why:"Right. A brief puts the conclusion first for a busy reader."},
     {t:"A literature review", why:"A brief summarises evidence later and briefly; it is not a thesis chapter."},
     {t:"A detailed methods section", why:"Methods are kept short, often in a box or annex."},
     {t:"A historical introduction from ancient times", why:"Essay-style openings waste the reader’s time."}]},
   {id:"e4u8-q42", lesson:"e4u8-l5", level:2, q:"In a brief, why keep evidence and recommendations visibly separate?", options:[
     {t:"So readers who disagree with your values can still use your analysis", ok:true, why:"Right. It makes the brief useful and honest."},
     {t:"Because recommendations should not use evidence", why:"Recommendations should be linked to evidence, but marked as recommendations."},
     {t:"To make the brief longer", why:"Briefs aim to be short."},
     {t:"Because evidence is optional", why:"Evidence is the core of a brief."}]},
   {id:"e4u8-q43", lesson:"e4u8-l5", level:2, q:"For a most-similar comparison of soft power strategies, which pair is the best choice?", options:[
     {t:"Japan and South Korea", ok:true, why:"Right. Similar region, wealth and alliances, with different strategies and histories, which lets you isolate differences."},
     {t:"Nigeria and Germany", why:"Many differences at once; this pair suits a most-different design."},
     {t:"India and a small island state", why:"Very different in size and resources; not most-similar."},
     {t:"China and a city government", why:"Different kinds of actors; not a like-for-like comparison."}]},
   {id:"e4u8-q44", lesson:"e4u8-l5", level:3, q:"Amara drafts a brief recommending that a ministry double its festival budget, citing only rising attendance. What is the strongest improvement?", options:[
     {t:"Add evidence on outcomes and impact, acknowledge the attribution problem, and compare options such as exchanges or surveys", ok:true, why:"Right. Attendance is an output; a brief needs evidence closer to results and real options."},
     {t:"Add more attendance figures", why:"More outputs do not show effect."},
     {t:"Remove the recommendation", why:"A brief needs a recommendation; it must be better supported."},
     {t:"Write a longer historical introduction", why:"A brief should be shorter and more focused."}]},
   {id:"e4u8-q45", lesson:"e4u8-l5", level:1, q:"Which case is best described as largely market-led, with limited state strategy?", options:[
     {t:"Nigeria’s Nollywood and Afrobeats", ok:true, why:"Right. They spread mainly through markets, fans and diaspora."},
     {t:"China’s Confucius Institutes", why:"A state-backed programme."},
     {t:"Japan’s Cool Japan Fund", why:"A public–private fund created by government."},
     {t:"India’s International Day of Yoga", why:"A government initiative adopted at the UN."}]}
  ]
});
