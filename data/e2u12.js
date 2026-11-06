/* Social Science Primers · Migration Studies Unit 4 (e2u12) · Belonging: integration, transnational lives and diaspora */
ICA.addUnit({
  id:"e2u12", track:"e2", n:12, title:"Belonging: integration, transnational lives and diaspora", icon:"🏡",
  blurb:"What happens after people move: how societies and newcomers adjust to each other, how children of migrants find their way, how people keep lives that span several countries, what makes a diaspora, why people return, how stories about migration shape opinion, what the evidence on wages, public finances and crime does and doesn’t show, and how to research all this ethically. The unit ends with a send-off for the Social Science Primers.",
  goals:[
    "Compare assimilation, integration, multiculturalism and interculturalism as models of incorporation, and explain the main debates about each",
    "Use Berry’s acculturation strategies and Portes and Zhou’s segmented assimilation to explain different experiences of migrants and their children, with the critiques of each",
    "Explain transnationalism, social remittances and superdiversity, and describe a transnational social field with real examples from several regions",
    "Define diaspora with Safran, Cohen and Brubaker, describe how states engage diasporas, and explain the main theories of return migration",
    "Analyse how migration is framed in media and politics, summarise carefully what research says about wages, public finances and crime, and plan migration research that respects vulnerability, consent, safety and positionality"
  ],
  read:[
    {book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’” (Sarah Spencer), Chapter 15 “Transnationalism” (Ludger Pries), Chapter 16 “Cities of Migration” (Asya Pisarevskaya and Peter Scholten), Chapter 21 “The Governance of Migration-Related Diversity” (Thomas Huddleston and Peter Scholten), Chapter 23 “Public Opinion and the Politics of Migration” (James Dennison and Alina Vrânceanu) and Chapter 25 “Qualitative Methods in Migration Research” (Ricard Zapata-Barrero and Evren Yalaz)", note:"Open-access chapters written by migration researchers. They are academic in tone; read each one after the matching lesson, which builds the background they take for granted."},
    {book:"soc", where:"Chapter 11 “Race and Ethnicity”, Section 11.4 “Intergroup Relationships”", note:"The sociology textbook’s account of assimilation, pluralism and other patterns of intergroup relations, which this unit builds on. Its examples are mostly from the United States."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u12-l1", title:"Settling in: integration and its models", minutes:55,
   hook:{q:"Which country became the first in the world to adopt multiculturalism as an official government policy, in 1971?", options:["Canada","Australia","The United Kingdom","Brazil"], answer:0, reveal:"**Canada**, in 1971. Australia followed with its own multicultural policies later in the 1970s, and in 1988 Canada turned its policy into law with the Canadian Multiculturalism Act. Other countries chose different paths: some expect newcomers to blend in, some stress a shared civic core, and many mix approaches. This lesson compares these models of how a society and its newcomers adjust to each other, and the debates about each."},
   goals:[
     "Explain what integration and belonging mean, and why “who adapts to whom?” is the central question",
     "Compare assimilation, integration as a two-way process, multiculturalism, interculturalism and civic integration",
     "Describe the main arguments for and against each model without taking sides",
     "Give examples of incorporation from several regions, including places where settlement is not expected and migration within one country",
     "Explain the difference between measuring integration policies and measuring integration outcomes"
   ],
   learn:[
    {h:"Who changes when someone new arrives?", body:[
      {lead:"Picture a community choir. A new singer joins, bringing a different musical tradition. What happens next?"},
      "Perhaps the newcomer learns the choir’s songs and quietly drops their own. Perhaps the choir learns a few of the newcomer’s songs too, and the sound slowly changes. Perhaps the choir keeps separate sections that rarely sing together. Or perhaps the newcomer never feels welcome and stops coming.",
      "Each ending is a different answer to one question: **who adapts to whom?** Societies answer it too, every time people arrive to live in them. Earlier units asked who moves, why, and under what rules; this unit asks what happens next.",
      "Migration researchers call this the study of **incorporation**: how newcomers become part of the economy, politics, schools, neighbourhoods and social life of a place. The most common word for it is [[integration]], and it is a contested word. It can describe a process (what actually happens), a goal (what governments want to happen) or a policy (what governments do).",
      "A second key word is [[belonging]]: feeling at home somewhere, and being accepted as part of a community. The sociologist Nira Yuval-Davis (2006) separated the feeling of belonging from the **politics of belonging**: the arguments over who gets to count as “one of us”, and on what terms. A person can hold a passport and still feel excluded, or feel deeply at home without full legal rights.",
      {key:"Integration is about relationships, not just individuals. Every model of it answers the same question differently: who is expected to change, how much, and in what?"}
    ]},
    {h:"Assimilation: the older expectation", body:[
      "The sociology units defined [[assimilation]] as a process in which a minority group gives up its own identity and takes on the dominant culture’s ({{intergroup-relations}}). In migration studies, assimilation was long the expected path. Early 20th-century sociologists in Chicago, such as Robert Park, described newcomers moving through contact and competition towards eventual assimilation, generation by generation.",
      "In the classic picture, the change is one-way: newcomers learn the language, adopt local customs and marry into the majority, while the society itself stays much the same. Many governments once pursued this openly, sometimes by force. Assimilation was also imposed on Indigenous peoples and national minorities, for example through bans on minority languages in schools, which is one reason the word carries painful associations.",
      "Later scholars revised the idea. Richard Alba and Victor Nee (*Remaking the American Mainstream*, 2003) argued that assimilation is better seen as the fading of an ethnic difference that matters for people’s chances in life, and that the **mainstream itself changes** as newcomers join it: something many families experience over generations, not something a state should demand.",
      {tip:"When you meet the word “assimilation”, ask which meaning is intended: a forced policy, a one-way expectation, or the slow fading of disadvantage over generations. They are very different claims."}
    ]},
    {h:"Integration as a two-way process", body:[
      "Since the 1990s many governments and international bodies have used **integration** instead, often defined as a two-way process. In 2004 the Council of the European Union adopted Common Basic Principles for immigrant integration; the first describes integration as “a dynamic, two-way process of mutual accommodation by all immigrants and residents”. IOM, the UN migration agency, also defines it as a two-way process of mutual adaptation.",
      "“Two-way” means both sides have work to do. Newcomers may learn a language and new rules; institutions may translate key information, recognise qualifications earned abroad, tackle [[discrimination]] and make room for different religions and customs.",
      "Researchers often break integration into **domains**. Alastair Ager and Alison Strang’s widely used framework (2008), developed from research with refugees and long-settled residents in the United Kingdom, groups ten domains into four levels:",
      {table:[["Level","Domains"],["Markers and means","Employment, housing, education, health"],["Social connections","Bonds (within one’s own community), bridges (with other groups), links (with institutions)"],["Facilitators","Language and cultural knowledge; safety and stability"],["Foundation","Rights and citizenship"]]},
      "The framework shows that integration is uneven. Someone can be well integrated at work but isolated socially, or fluent in the language but blocked from their profession.",
      "Some scholars criticise the whole idea. Willem Schinkel (2018) argued that “integration” talk keeps treating migrants and their children as outsiders who must prove themselves, while picturing “society” as a finished whole that never needs to change. Sarah Spencer’s chapter in the *Introduction to Migration Studies* reviews this debate. Defenders reply that a genuinely two-way approach, put into practice, answers much of this criticism."
    ]},
    {h:"Multiculturalism", body:[
      "[[multiculturalism|Multiculturalism]] as a policy goes further than tolerance: it publicly **recognises and supports** cultural diversity. Canada adopted it first, in 1971, and made it law in the Canadian Multiculturalism Act of 1988; Australia followed from the 1970s. The sociology units called the underlying pattern [[pluralism]]: groups keep distinct identities while sharing equal standing.",
      "Multicultural policies can include funding for community organisations, teaching in heritage languages, public broadcasting in several languages, anti-discrimination law, and exemptions that let people follow religious rules (for example, wearing religious headwear with a uniform).",
      "The debate has been fierce:",
      {list:[
        "**Supporters** argue that recognition helps people feel they belong, that groups which feel respected take part more fully, and that equal citizenship should not require giving up one’s culture.",
        "**Critics** argue that it can encourage separate communities with little contact. After riots in several northern English towns in 2001, an official review led by Ted Cantle described communities living “parallel lives”. Some feminist and liberal critics add that protecting group traditions can leave individuals, especially women and dissenters, under pressure from their own community leaders.",
        "In 2010–2011 the leaders of Germany, the United Kingdom and France each said publicly that multiculturalism, or a version of it, had failed."
      ]},
      "Did countries really abandon it? Keith Banting and Will Kymlicka’s **Multiculturalism Policy Index** suggests that in most Western democracies multicultural policies held steady or grew between 1980 and 2010, with a few exceptions, most notably the Netherlands. The “retreat” was louder in speeches than in law. They also found that new civic integration rules (below) were often layered on top of existing multicultural programmes rather than replacing them."
    ]},
    {h:"Interculturalism and civic integration", body:[
      "[[interculturalism|Interculturalism]] puts the emphasis on **contact and exchange** between groups, within a shared civic core. The Council of Europe’s *White Paper on Intercultural Dialogue* (2008) promoted it, and its Intercultural Cities programme builds on four principles: **equality**, **diversity** treated as an advantage, meaningful **interaction** between groups, and active **participation** by all residents.",
      "In Quebec, Canada, a 2008 public commission led by Gérard Bouchard and Charles Taylor recommended interculturalism as an alternative to the federal multiculturalism model, with French as the shared public language. Scholars debate whether it really differs from multiculturalism; Nasar Meer and Tariq Modood (2012) argued that the differences are smaller than often claimed.",
      "Another trend, especially in Europe since the late 1990s, is [[civic-integration]]: requiring newcomers to take language and civic courses or pass tests, sometimes before they arrive, as a condition of residence or citizenship. Germany has run national integration courses since 2005; the Netherlands introduced a civic integration exam that some family migrants must take abroad. Supporters see this as giving newcomers useful skills and a clear path. Critics see it as filtering who can come and placing the whole burden on migrants.",
      "France is often described as following a **republican model**: equal individual citizens, with the state avoiding official recognition of ethnic groups, and official statistics generally not recording ethnicity. Supporters say this protects equality; critics say it makes discrimination harder to measure.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="m12a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="10" width="150" height="76" rx="8" stroke-width="2"/><text x="83" y="38" text-anchor="middle">Assimilation</text><text class="s" x="83" y="58" text-anchor="middle">newcomers change</text><text class="s" x="83" y="74" text-anchor="middle">to fit in</text><rect class="d-soft" x="176" y="28" width="52" height="40" rx="6" stroke-width="2"/><text x="202" y="53" text-anchor="middle">New</text><rect class="d-sage" x="268" y="28" width="64" height="40" rx="6" stroke-width="2"/><text x="300" y="53" text-anchor="middle">Society</text><path class="d-ink" d="M230 48L264 48" stroke-width="2" marker-end="url(#m12a)"/><rect class="d-sage" x="8" y="100" width="150" height="76" rx="8" stroke-width="2"/><text x="83" y="128" text-anchor="middle">Integration</text><text class="s" x="83" y="148" text-anchor="middle">two-way: both</text><text class="s" x="83" y="164" text-anchor="middle">sides adjust</text><rect class="d-soft" x="176" y="118" width="52" height="40" rx="6" stroke-width="2"/><text x="202" y="143" text-anchor="middle">New</text><rect class="d-sage" x="268" y="118" width="64" height="40" rx="6" stroke-width="2"/><text x="300" y="143" text-anchor="middle">Society</text><path class="d-ink" d="M230 132L264 132" stroke-width="2" marker-end="url(#m12a)"/><path class="d-ink" d="M264 146L230 146" stroke-width="2" marker-end="url(#m12a)"/><rect class="d-gold" x="8" y="190" width="150" height="76" rx="8" stroke-width="2"/><text x="83" y="218" text-anchor="middle">Multiculturalism</text><text class="s" x="83" y="238" text-anchor="middle">groups recognised,</text><text class="s" x="83" y="254" text-anchor="middle">equal rights</text><rect class="d-panel" x="170" y="190" width="166" height="76" rx="8" stroke-width="2"/><rect class="d-soft" x="182" y="200" width="60" height="36" rx="6" stroke-width="2"/><text x="212" y="223" text-anchor="middle">Group</text><rect class="d-soft" x="264" y="200" width="60" height="36" rx="6" stroke-width="2"/><text x="294" y="223" text-anchor="middle">Group</text><text class="s" x="253" y="256" text-anchor="middle">shared rights</text><rect class="d-rose" x="8" y="280" width="150" height="76" rx="8" stroke-width="2"/><text x="83" y="308" text-anchor="middle">Interculturalism</text><text class="s" x="83" y="328" text-anchor="middle">contact and mixing,</text><text class="s" x="83" y="344" text-anchor="middle">shared civic core</text><rect class="d-panel" x="170" y="280" width="166" height="76" rx="8" stroke-width="2"/><rect class="d-soft" x="182" y="290" width="60" height="36" rx="6" stroke-width="2"/><text x="212" y="313" text-anchor="middle">Group</text><rect class="d-soft" x="264" y="290" width="60" height="36" rx="6" stroke-width="2"/><text x="294" y="313" text-anchor="middle">Group</text><path class="d-ink" d="M244 302L260 302" stroke-width="2" marker-end="url(#m12a)"/><path class="d-ink" d="M260 314L244 314" stroke-width="2" marker-end="url(#m12a)"/><text class="s" x="253" y="346" text-anchor="middle">shared civic core</text><text class="s" x="170" y="376" text-anchor="middle">Real policies mix these. None exists in pure form.</text></svg>', alt:"Four rows. Assimilation: an arrow runs one way from a box labelled New to a box labelled Society. Integration: arrows run both ways between New and Society. Multiculturalism: two group boxes side by side inside a frame labelled shared rights. Interculturalism: two group boxes with arrows between them, inside a frame labelled shared civic core.", cap:"Four models of incorporation, simplified. Each gives a different answer to “who adapts to whom?”"}
    ]},
    {h:"Beyond the classic cases", body:[
      "Most of these models were developed in Europe, North America and Australia, in countries that expected at least some migrants to settle and become citizens. Much of the world’s migration happens elsewhere, under different assumptions.",
      {list:[
        "**Gulf states.** Migrant workers make up a large share of the population and workforce in several Gulf countries, but most come on temporary, employer-tied contracts (see [[kafala]]) with very limited routes to citizenship. Researchers study how people build lives and belonging there anyway, without the promise of settlement.",
        "**Internal migrants in China.** Hundreds of millions of people have moved from the countryside to cities. Under the household registration system (*hukou*), many have lacked full access to local schools, health care and housing support in the cities where they work, although reforms have eased this in many places. Integration questions arise even without crossing a border: see [[internal-migration]].",
        "**Refugees in Uganda.** Uganda’s refugee law allows refugees to work, move around the country and, in settlements, use plots of land: an approach often cited as a form of local integration, one of the [[durable-solutions]].",
        "**Venezuelans in Colombia.** In 2021 Colombia created a Temporary Protection Statute giving Venezuelan migrants a ten-year status with access to work, health care and education, a large-scale experiment in regularising and including newcomers."
      ]},
      "So integration is not only a matter of cultural models. It is shaped by legal status, work rights, housing and local services, and by whether a society imagines newcomers as future members or temporary guests."
    ]},
    {h:"Measuring integration: policies, outcomes and feelings", body:[
      "How would you know if integration is “working”? Researchers measure three different things:",
      {table:[["What is measured","Example","What it can’t tell you"],["Policies","The Migrant Integration Policy Index (MIPEX) scores laws in eight areas: labour market mobility, family reunification, education, health, political participation, permanent residence, access to nationality and anti-discrimination","Whether the laws are applied, or what people actually experience"],["Outcomes","Indicators from the OECD and the EU compare employment, income, education, housing and health of migrants and the native-born","Why the gaps exist: discrimination, qualifications, age, time since arrival or something else"],["Feelings and relationships","Surveys of belonging, trust, friendships and experiences of discrimination","How representative the answers are, unless the sample is designed well"]]},
      {ex:"Two cities score the same on a national policy index. In City A, a newcomer named Lucía, an engineer, waits years for her qualification to be recognised and drives a taxi. In City B, a fast-track scheme lets engineers like her work under supervision while they finish the process. Same national policy, different local outcomes. This is why researchers study cities as well as countries.", label:"Worked example: same policy, different lives"},
      "Time matters too. Outcomes such as earnings or language skills change with years since arrival, and some gaps narrow in the next generation while others persist. Lesson 2 follows the children of migrants."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Integration means migrants becoming the same as everyone else.","That is closer to assimilation. Most official definitions now describe a two-way process in which institutions and residents also adapt."],["Multiculturalism has been abandoned everywhere.","Leaders’ speeches announced its failure, but policy indexes suggest many multicultural policies stayed in place in many countries, with some exceptions."],["Integration is only about culture.","Jobs, housing, health, schools, legal status, rights and discrimination all shape it, as Ager and Strang’s domains show."],["Integration only concerns people who cross borders.","Internal migrants, for example under China’s household registration system, face similar questions."]]},
      {key:"Real countries mix the models, and what “works” depends on whether you look at laws, outcomes or people’s sense of belonging."},
      {terms:["integration","belonging","assimilation","multiculturalism","pluralism","interculturalism","civic-integration"]}
    ]}
   ],
   try:[
    {id:"e2u12-l1-x1", type:"sort", q:"Which model of incorporation does each policy statement fit best?", buckets:["Assimilation","Multiculturalism","Interculturalism"], items:[
      {t:"“Newcomers should leave their old ways behind and become like everyone else as quickly as possible.”", b:0, why:"A one-way expectation that newcomers change and the society doesn’t: the classic assimilation picture."},
      {t:"“The state funds community organisations and heritage-language classes so that each group’s culture is publicly recognised.”", b:1, why:"Public recognition and support for distinct cultures is the core of multicultural policy."},
      {t:"“The city runs neighbourhood projects that bring residents of different backgrounds together, around a shared public language.”", b:2, why:"The stress on contact, mixing and a shared civic core is what defines interculturalism."},
      {t:"“Only the majority language may be used in schools, and minority languages are banned in class.”", b:0, why:"Banning minority languages to force people into the majority culture is assimilation imposed by policy."},
      {t:"“Broadcasting in several community languages is publicly funded as part of recognising diversity.”", b:1, why:"Supporting distinct groups’ languages in public life is a typical multicultural measure."},
      {t:"“Diversity is treated as an advantage, and public spaces are designed to encourage meaningful interaction between groups.”", b:2, why:"This echoes the Council of Europe’s Intercultural Cities principles: equality, diversity, interaction and participation."}
    ]},
    {id:"e2u12-l1-x2", type:"mcq", q:"An official report says: “Integration is a two-way process.” What does “two-way” mean here?", options:[
      {t:"Both newcomers and the receiving society, including its institutions and residents, are expected to adapt.", ok:true, why:"Right. The EU’s 2004 Common Basic Principles speak of “mutual accommodation by all immigrants and residents”."},
      {t:"Migrants integrate first, and then, if that succeeds, they may return to their country of origin.", why:"“Two-way” is about who adapts, not about travelling back and forth."},
      {t:"There are exactly two routes to integration: work or study.", why:"The phrase doesn’t count routes. Integration covers many domains, from jobs and housing to rights and social ties."},
      {t:"Two governments, the origin and the destination, share responsibility for integration.", why:"Origin countries can matter, but “two-way” refers to the newcomers and the society they join."}
    ]},
    {id:"e2u12-l1-x3", type:"match", q:"Match each of Ager and Strang’s integration levels to an example.", pairs:[
      ["Markers and means","Hana finds a job that uses her nursing qualification","Employment, housing, education and health are both signs of integration and means to it."],
      ["Social connections","Sione joins a local football team and makes friends from many backgrounds","Ties with people from other groups are “bridges”, one of the three kinds of social connection."],
      ["Facilitators","Dmitri takes free language classes and learns local customs","Language and cultural knowledge, and safety and stability, help people integrate in other domains."],
      ["Foundation","Amara gains permanent residence and the right to vote locally","Rights and citizenship are the foundation the framework places under everything else."]
    ]},
    {id:"e2u12-l1-x4", type:"mcq", q:"After leaders in several European countries said multiculturalism had failed, what did Banting and Kymlicka’s Multiculturalism Policy Index suggest about policies between 1980 and 2010?", options:[
      {t:"In most Western democracies multicultural policies mostly held steady or grew, with some exceptions such as the Netherlands.", ok:true, why:"Correct. The index tracked laws and programmes and found the “retreat” was clearer in speeches than in policy, with notable exceptions."},
      {t:"Every country studied abolished all its multicultural policies.", why:"The index found the opposite in most countries: policies largely stayed or expanded."},
      {t:"Multicultural policies existed only in Canada.", why:"Canada was first, in 1971, but Australia and many other democracies also adopted such policies."},
      {t:"It showed that multiculturalism causes higher crime.", why:"The index measures policies, not crime. It can’t show causes of that kind, and the lesson made no such claim."}
    ]},
    {id:"e2u12-l1-x5", type:"spot", q:"Kenji wrote this paragraph for a class discussion. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Canada adopted multiculturalism as official policy in 1971.", flag:false, why:"Accurate: Canada was the first country to do so."},
      " ",
      {t:"Integration models were developed with every region of the world in mind.", flag:true, why:"Misleading. The classic models were mostly developed in Europe, North America and Australia, in countries expecting settlement; they fit poorly where most migration is temporary, as in several Gulf states."},
      " ",
      {t:"Civic integration policies can require language and civic tests for residence or citizenship.", flag:false, why:"Accurate: several European countries, for example Germany and the Netherlands, use courses or tests."},
      " ",
      {t:"Integration is purely about whether migrants adopt local culture.", flag:true, why:"Inaccurate. Jobs, housing, health, rights, social ties and discrimination are all part of integration."},
      " Researchers ",
      {t:"distinguish integration policies from integration outcomes.", flag:false, why:"Accurate: a policy index such as MIPEX measures laws; outcome indicators measure jobs, income, education and so on."}
    ]},
    {id:"e2u12-l1-x6", type:"mcq", q:"A study reports that a country has strong anti-discrimination laws but that migrants with foreign degrees earn much less than similar native-born workers. Which conclusion is best supported?", options:[
      {t:"Policies and outcomes can diverge, so researchers need to look at how laws work in practice, for example how foreign qualifications are recognised.", ok:true, why:"Yes. A good policy score doesn’t guarantee good outcomes; the gap points to something worth investigating."},
      {t:"The anti-discrimination laws must be causing the pay gap.", why:"Nothing in the study links the laws to the gap. Treating a co-occurrence as a cause is the [[correlation]]–[[causation]] mistake."},
      {t:"The pay gap proves migrants are less skilled.", why:"Similar workers are being compared, and the gap could come from non-recognition of degrees, discrimination or networks. The data alone can’t show lower skill."},
      {t:"Outcome data are useless; only policy indexes matter.", why:"Both are needed. Outcome data reveal problems that policy scores alone would hide."}
    ]},
    {id:"e2u12-l1-x7", type:"sort", q:"Does each measure tell you about integration **policies**, **outcomes** or **feelings and relationships**?", buckets:["Policies","Outcomes","Feelings and relationships"], items:[
      {t:"Whether long-term residents may vote in local elections", b:0, why:"A rule set by law: a policy measure, like those MIPEX scores."},
      {t:"The employment rate of migrants compared with the native-born", b:1, why:"What actually happens in the labour market: an outcome."},
      {t:"The share of migrants who say they feel at home in their neighbourhood", b:2, why:"A survey of how people feel: belonging."},
      {t:"How long it takes, by law, to become eligible for citizenship", b:0, why:"A legal requirement, so it is a policy measure."},
      {t:"School results of children of migrants", b:1, why:"An educational outcome."},
      {t:"How many friends from other backgrounds people report having", b:2, why:"Social connections (Ager and Strang’s “bridges”) reported by people themselves."}
    ]}
   ],
   apply:{
    intro:"Look at integration in your own surroundings, with care and respect. Nothing here needs an account or costs money, and none of it involves asking anyone about their legal status.",
    tasks:[
     {t:"Compare two definitions of integration", how:[
       "Find one official definition of integration: from a government, a city, the EU, IOM or another body. Note the source and year.",
       "Find a second definition from a different country or organisation.",
       "For each, note who is expected to change (newcomers only, or also institutions and residents), and which domains it mentions (jobs, language, rights, culture…)."
     ], write:"Definition 1 (source, year)… who adapts… domains… Definition 2… How they differ…"},
     {t:"Notice incorporation in a public place", how:[
       "Visit, in person or online, a public service: a library, a clinic, a town hall website, a school notice board.",
       "Note any signs of a two-way process: information in several languages, interpreters, classes, community events, a welcome guide.",
       "Note anything that might make life harder for a newcomer. Don’t photograph people."
     ], write:"Where I looked… signs of a two-way process… possible barriers…"},
     {t:"Reflect: a time you were new", how:[
       "Think of a time you joined a new group: a school, a job, a club, a family, a country, a city.",
       "Write who adapted to whom, and what helped you feel you belonged (or didn’t).",
       "Which model from this lesson does your experience resemble most?"
     ], write:"The group… who adapted… what helped or hindered belonging… closest model…"}
    ],
    proof:"Notes comparing two sourced, dated definitions of integration, observations of one public service, and a short reflection on belonging linked to a model from the lesson."
   },
   read:[
    {book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’” (Sarah Spencer)", note:"Read it after this lesson for the debate about whether “integration” is a useful word at all, and how researchers define and measure it."},
    {book:"imis", where:"Chapter 21 “The Governance of Migration-Related Diversity” (Thomas Huddleston and Peter Scholten)", note:"How governments at different levels handle diversity, and how models such as multiculturalism and assimilation play out in policy."},
    {book:"soc", where:"Chapter 11 “Race and Ethnicity”, Section 11.4 “Intergroup Relationships”", note:"For the sociology of assimilation and pluralism this lesson builds on."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u12-l2", title:"Acculturation and the second generation", minutes:55,
   hook:{q:"Psychologist John Berry asked how migrants combine their heritage culture with the culture of the society they live in. In large studies of immigrant young people, which combination was most often linked with better well-being and adjustment?", options:["Keeping the heritage culture and also taking part in the wider society","Dropping the heritage culture completely","Keeping only the heritage culture and avoiding the wider society","Belonging to neither culture"], answer:0, reveal:"**Keeping both** (what Berry calls integration) was, on average, linked with the best adjustment, in an international study of immigrant youth in 13 countries and in later reviews of many studies. “On average” matters: individuals differ, and whether people *can* keep both depends a great deal on how the wider society treats them. This lesson explains Berry’s model, then follows the children of migrants: the second generation."},
   goals:[
     "Define acculturation and explain why it can change both newcomers and the society around them",
     "Use Berry’s two questions to place a situation in one of four acculturation strategies, and explain the role of the wider society",
     "Define the second generation and the 1.5 generation, and explain why these labels need care",
     "Explain Portes and Zhou’s segmented assimilation theory, its three paths and the factors behind them",
     "Summarise the main critiques of segmented assimilation and what European comparisons add"
   ],
   learn:[
    {h:"Acculturation: change on both sides", body:[
      {lead:"Think of two rivers meeting. Downstream, the water of each is changed by the other, though one may be much larger."},
      "In 1936 the anthropologists Robert Redfield, Ralph Linton and Melville Herskovits defined [[acculturation]] as the changes that happen when groups with different cultures come into continuous first-hand contact, with changes in the original cultural patterns of either or both groups. Notice “either or both”: acculturation was never meant to be one-way.",
      "Acculturation happens in food and music, but also in values, family roles, language at home and at work, and in how people see themselves. It is different from [[culture-shock]], the short-term disorientation of a new place, and it overlaps with [[socialization]], the lifelong learning of a culture’s ways ({{socialization}}).",
      "Change also happens in the receiving society: new words enter the language, new dishes become everyday food, new festivals appear on public calendars. A city’s “local” food is often the result of earlier migrations.",
      {ex:"Priya grew up speaking Tamil at home and moved as an adult to a city where most people speak English. At work she speaks English; at home she cooks family recipes and video-calls her parents in Tamil; she now celebrates two sets of holidays. Her neighbours, meanwhile, have started buying spices from the shop a Tamil family opened on the corner. Acculturation is happening to Priya, and to her street.", label:"Worked example: acculturation on both sides"}
    ]},
    {h:"Berry’s two questions", body:[
      "The cross-cultural psychologist John W. Berry, in an influential 1997 article, “Immigration, Acculturation, and Adaptation”, suggested that people in contact with another culture face two basic questions:",
      {ol:[
        "**Is it valued to keep one’s heritage culture and identity?**",
        "**Is it valued to have relationships with, and take part in, the wider society?**"
      ]},
      "Crossing the two answers gives four [[acculturation-strategies|acculturation strategies]]:",
      {fig:'<svg viewBox="0 0 340 330"><text x="220" y="18" text-anchor="middle">Keep heritage culture?</text><text x="160" y="40" text-anchor="middle">Yes</text><text x="280" y="40" text-anchor="middle">No</text><text x="50" y="18" text-anchor="middle">Join wider</text><text x="50" y="34" text-anchor="middle">society?</text><text x="50" y="104" text-anchor="middle">Yes</text><text x="50" y="208" text-anchor="middle">No</text><rect class="d-sage" x="100" y="50" width="118" height="100" rx="8" stroke-width="2"/><text x="159" y="96" text-anchor="middle">Integration</text><text class="s" x="159" y="116" text-anchor="middle">keep both</text><rect class="d-lup" x="222" y="50" width="114" height="100" rx="8" stroke-width="2"/><text x="279" y="96" text-anchor="middle">Assimilation</text><text class="s" x="279" y="116" text-anchor="middle">take on the new</text><rect class="d-gold" x="100" y="154" width="118" height="100" rx="8" stroke-width="2"/><text x="159" y="200" text-anchor="middle">Separation</text><text class="s" x="159" y="220" text-anchor="middle">heritage only</text><rect class="d-rose" x="222" y="154" width="114" height="100" rx="8" stroke-width="2"/><text x="279" y="200" text-anchor="middle">Marginalisation</text><text class="s" x="279" y="220" text-anchor="middle">neither; rarely</text><text class="s" x="279" y="236" text-anchor="middle">a free choice</text><text class="s" x="170" y="280" text-anchor="middle">Berry (1997). The wider society’s attitudes</text><text class="s" x="170" y="298" text-anchor="middle">and policies shape which options are</text><text class="s" x="170" y="316" text-anchor="middle">really open to people.</text></svg>', alt:"A two-by-two grid. Columns ask: keep heritage culture, yes or no. Rows ask: join the wider society, yes or no. Yes and yes is integration (keep both). No heritage but yes to the wider society is assimilation. Yes heritage but no to the wider society is separation. No and no is marginalisation, rarely a free choice.", cap:"Berry’s acculturation strategies. The labels describe how individuals and groups combine two cultures, not who they are."},
      "Berry stressed that the **wider society** has strategies too. When it expects people to assimilate, he called the result a *melting pot*; when it forces separation, *segregation*; when it pushes people to the margins, *exclusion*; and when it supports keeping heritage while taking part, *multiculturalism*. A newcomer can only “choose” integration if the society lets them.",
      {warn:"Berry’s “integration” is a psychological strategy of an individual or group. It isn’t the same as a government’s integration policy from Lesson 1, though the two are related. Always check which meaning a text intends."}
    ]},
    {h:"What research finds, and the critiques", body:[
      "A large international study of immigrant young people in 13 countries, led by Berry, Jean Phinney, David Sam and Paul Vedder (published in 2006), found that young people with an “integration” profile (oriented to both cultures) tended to show the best psychological and social adjustment, and those with a diffuse, “marginal” profile the poorest. A 2013 meta-analysis by Angela-MinhTu Nguyen and Verónica Benet-Martínez, which combined dozens of studies, found that biculturalism was positively related to adjustment.",
      "The model is popular because it is simple and testable. It also has critics:",
      {list:[
        "**Choices aren’t free.** [[discrimination|Discrimination]] and [[prejudice]] can push people towards separation or marginalisation, whatever they would prefer.",
        "**Strategies vary by area of life.** Someone may assimilate at work and keep their heritage culture at home, so one label for the whole person can mislead.",
        "**Measurement debates.** The psychologist Floyd Rudmin (2003) argued that the four categories are hard to measure cleanly and that the evidence was weaker than often claimed.",
        "**Cultures aren’t fixed packages.** Both “heritage” and “wider” cultures are varied and changing; many people build new, mixed identities rather than combining two set ones."
      ]},
      {tip:"Use Berry’s grid as a starting question, not a box to put people in: “In this part of life, for this person, how are the two cultures being combined, and what is helping or blocking that?”"}
    ]},
    {h:"Who is the second generation?", body:[
      "The [[second-generation|second generation]] usually means people born in a country to parents who migrated there. Their parents are the **first generation**. Children who were born abroad and arrived young are often called the [[one-point-five-generation|1.5 generation]], a term popularised by the sociologist Rubén Rumbaut, who also distinguished those who arrived as young children from those who arrived as teenagers.",
      "These labels are useful for research and can be awkward in life. Many second-generation people have never migrated at all, and some dislike being called migrants or “second-generation migrants”. Statistical definitions also differ between countries: some count people by parents’ country of birth, some by nationality, some by self-identified ethnicity ({{measuring-migration}}).",
      "Why study the second generation? Because long-term integration shows most clearly in children: their schooling, jobs, friendships, marriages and sense of belonging. Laws matter here too. In countries with birthright citizenship ([[jus-soli]]), children born there are usually citizens at birth; in countries that pass citizenship mainly through parents ([[jus-sanguinis]]), children of migrants can grow up as foreign nationals in the only country they know. In several Gulf states, for example, children born to foreign workers do not acquire the local nationality by birth."
    ]},
    {h:"Segmented assimilation: three paths", body:[
      "In the early 1990s, sociologists in the United States noticed that the old idea of steady, upward assimilation over generations did not fit everyone. In 1993 Alejandro Portes and Min Zhou published “The New Second Generation: Segmented Assimilation and Its Variants”. They argued that the children of immigrants were assimilating into **different segments** of society, along roughly three paths:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m12b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="60" y="8" width="220" height="44" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">Children of immigrants</text><rect class="d-soft" x="8" y="64" width="324" height="58" rx="8" stroke-width="2"/><text class="s" x="170" y="84" text-anchor="middle">Shaped by: parents’ resources, family,</text><text class="s" x="170" y="100" text-anchor="middle">policy, reception, discrimination,</text><text class="s" x="170" y="116" text-anchor="middle">local schools, jobs and co-ethnic community</text><path class="d-ink" d="M110 126L58 176" stroke-width="2" marker-end="url(#m12b)"/><path class="d-ink" d="M170 126L170 176" stroke-width="2" marker-end="url(#m12b)"/><path class="d-ink" d="M230 126L282 176" stroke-width="2" marker-end="url(#m12b)"/><rect class="d-sage" x="8" y="182" width="104" height="110" rx="8" stroke-width="2"/><text x="60" y="206" text-anchor="middle">1 Upward</text><text class="s" x="60" y="228" text-anchor="middle">into the</text><text class="s" x="60" y="244" text-anchor="middle">middle-class</text><text class="s" x="60" y="260" text-anchor="middle">mainstream</text><rect class="d-rose" x="118" y="182" width="104" height="110" rx="8" stroke-width="2"/><text x="170" y="206" text-anchor="middle">2 Downward</text><text class="s" x="170" y="228" text-anchor="middle">into poverty</text><text class="s" x="170" y="244" text-anchor="middle">and exclusion</text><rect class="d-gold" x="228" y="182" width="104" height="110" rx="8" stroke-width="2"/><text x="280" y="206" text-anchor="middle">3 Upward</text><text class="s" x="280" y="228" text-anchor="middle">while keeping</text><text class="s" x="280" y="244" text-anchor="middle">community ties</text><text class="s" x="280" y="260" text-anchor="middle">and values</text><text class="s" x="170" y="318" text-anchor="middle">Portes and Zhou (1993), simplified</text></svg>', alt:"A box labelled children of immigrants sits above a box listing the factors that shape their path: parents’ resources, family, policy, reception, discrimination, local schools, jobs and co-ethnic community. Three arrows lead down to three outcomes: upward into the middle-class mainstream; downward into poverty and exclusion; and upward while keeping community ties and values.", cap:"Segmented assimilation’s three paths. The theory is about the conditions that make each path more or less likely, not about any group’s character."},
      {list:[
        "**Upward assimilation** into the middle-class mainstream, the classic path.",
        "**Downward assimilation**, where some young people, facing discrimination, poor schools and few good jobs, end up in persistent poverty alongside other disadvantaged groups.",
        "**Upward mobility with community ties**: rapid economic progress while deliberately keeping the parents’ community’s values and solidarity. One case Portes and Zhou drew on was research by Margaret Gibson on Punjabi Sikh students in a Californian farming town, who did well at school while their parents encouraged them to keep community ties."
      ]},
      "What decides the path? Portes and Zhou pointed to the **mode of incorporation**: how government policy treats a group, how the wider society receives it (including [[racism]] and discrimination), and how strong the co-ethnic community is, together with parents’ education and resources and the local economy. In their 2001 book *Legacies*, based on a long-running survey of children of immigrants in Miami and San Diego, Portes and Rubén Rumbaut called the third path [[selective-acculturation|selective acculturation]]: learning the new language and ways while keeping key parts of the parents’ language and culture, supported by a co-ethnic community. They argued that it tended to go with better school outcomes and less conflict between parents and children."
    ]},
    {h:"Debates and other contexts", body:[
      "Segmented assimilation became one of the most cited ideas in migration studies, and one of the most debated:",
      {list:[
        "**How common is decline?** Richard Alba, Victor Nee and others argued that most children of immigrants in the United States were moving up, and that “downward assimilation” describes a minority. Herbert Gans had raised the possibility of “second-generation decline” in 1992; the evidence since has been mixed and varies by group and place.",
        "**Risk of stereotyping.** Critics warn that talk of “downward” paths can sound as if poor neighbourhoods or youth cultures are the problem, rather than discrimination, segregation and lack of opportunity. Portes and Zhou themselves placed the causes in structures and reception, not in the young people.",
        "**Is it only about the United States?** The theory was built on US cities in the 1990s. Researchers elsewhere test whether it travels."
      ]},
      "European comparisons add an important lesson: **context matters**. A study called TIES (The Integration of the European Second Generation), led by Maurice Crul and colleagues, compared children of immigrants from the same origins, for example of Turkish background, in cities across several European countries. Their school and job outcomes differed a great deal between countries, linked to features such as how early school systems separate children into academic and vocational tracks. Similar families, different institutions, different results.",
      {key:"The second generation’s paths depend less on “culture” than on conditions: parents’ resources, legal status, discrimination, schools, the local economy and community support. Change the conditions and the paths change."},
      {terms:["acculturation","acculturation-strategies","second-generation","one-point-five-generation","segmented-assimilation","selective-acculturation"]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Acculturation changes only migrants.","From the 1936 definition on, acculturation can change either or both groups in contact."],["Marginalisation is a choice people make.","It is rarely chosen; exclusion and discrimination by the wider society often drive it."],["Second-generation people are migrants.","Most have never migrated. The label describes their parents’ history, and many prefer not to be called migrants."],["Segmented assimilation says some cultures fail.","The theory explains paths by conditions such as reception, policy, discrimination and resources, not by any group’s character."],["Integration outcomes for one origin group are the same everywhere.","European comparisons show the same origin group doing very differently in different countries’ institutions."]]}
    ]}
   ],
   try:[
    {id:"e2u12-l2-x1", type:"sort", q:"Place each person’s situation in Berry’s grid.", buckets:["Integration","Assimilation","Separation","Marginalisation"], items:[
      {t:"Tomás speaks Portuguese at home, plays in a community band from his parents’ region and also captains his workplace’s mixed football team.", b:0, why:"He keeps his heritage culture and takes an active part in the wider society: both answers are “yes”."},
      {t:"Mei has stopped speaking her first language, even with her parents, and says she wants to be “just like everyone else here”.", b:1, why:"She gives up the heritage culture and orients fully to the wider society."},
      {t:"An older man lives and works entirely within his own language community and avoids contact with the wider society.", b:2, why:"Keeping the heritage culture while having little contact with the wider society is separation."},
      {t:"A young woman feels rejected by the wider society because of discrimination, and also distant from her parents’ culture.", b:3, why:"Little connection to either culture is marginalisation. Note it is driven here by rejection, not choice."}
    ]},
    {id:"e2u12-l2-x2", type:"mcq", q:"According to Berry, why can’t a newcomer always “choose” integration?", options:[
      {t:"Because integration needs the wider society to accept people keeping their heritage while taking part; if it demands assimilation or excludes them, the option isn’t really open.", ok:true, why:"Right. Berry paired individual strategies with the wider society’s strategies, such as multiculturalism, the melting pot, segregation and exclusion."},
      {t:"Because integration is only possible for people who arrived as children.", why:"Berry’s model applies to people of all ages; age at arrival can matter, but it isn’t the reason given."},
      {t:"Because integration is a legal status that only governments can grant.", why:"In Berry’s model integration is a psychological strategy, not a legal status like citizenship."},
      {t:"Because people must first pass through separation and marginalisation.", why:"The model doesn’t describe fixed stages; the four strategies are alternatives, not steps."}
    ]},
    {id:"e2u12-l2-x3", type:"match", q:"Match each term to the person it describes.", pairs:[
      ["First generation","Ana, who moved to a new country at 30 for work","People who migrated themselves as adults are the first generation."],
      ["1.5 generation","Oluwaseun, born abroad, who arrived aged 8 with his parents","Children who were born abroad and arrived young are often called the 1.5 generation."],
      ["Second generation","Fatima, born in the country her parents moved to","Born in the destination to immigrant parents: the second generation."],
      ["Third generation","Kenji, whose grandparents migrated and whose parents were born locally","Grandchildren of migrants, with locally born parents, are usually called the third generation."]
    ]},
    {id:"e2u12-l2-x4", type:"mcq", q:"In Portes and Zhou’s theory, what mainly decides which of the three paths the children of immigrants take?", options:[
      {t:"The mode of incorporation (policy, the wider society’s reception and the co-ethnic community), together with parents’ resources and local conditions", ok:true, why:"Yes. The theory explains paths by structural conditions and reception, not by any group’s character."},
      {t:"How hard each child works, and nothing else", why:"Effort matters to individuals, but the theory’s point is that conditions outside the child shape the paths available."},
      {t:"The children’s genes", why:"Nothing in the theory is biological; it is about social conditions."},
      {t:"Whether the parents speak the local language perfectly on arrival", why:"Parents’ resources matter, but the theory stresses reception, policy, discrimination and community, not one skill."}
    ]},
    {id:"e2u12-l2-x5", type:"order", q:"Put these contributions in time order, earliest first.", items:[
      {t:"Redfield, Linton and Herskovits define acculturation", why:"1936: the classic anthropological definition."},
      {t:"Portes and Zhou publish “The New Second Generation” on segmented assimilation", why:"1993, in the *Annals of the American Academy of Political and Social Science*."},
      {t:"Berry publishes “Immigration, Acculturation, and Adaptation”", why:"1997, in *Applied Psychology*."},
      {t:"Portes and Rumbaut publish *Legacies*, naming selective acculturation", why:"2001, based on their survey of children of immigrants."},
      {t:"Alba and Nee publish *Remaking the American Mainstream*", why:"2003: their revised view of assimilation, in which the mainstream itself changes."}
    ]},
    {id:"e2u12-l2-x6", type:"spot", q:"A blog post summarises research on the second generation. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Segmented assimilation theory describes several possible paths for children of immigrants.", flag:false, why:"Accurate: Portes and Zhou described three main paths."},
      " ",
      {t:"It shows that some immigrant cultures are simply unsuited to success.", flag:true, why:"Misleading. The theory explains outcomes by conditions such as reception, discrimination, policy and resources, not by cultures being unsuited."},
      " ",
      {t:"European studies found that children of Turkish background did equally well in every country.", flag:true, why:"Inaccurate. The TIES studies found large differences between countries, linked to institutions such as school tracking."},
      " ",
      {t:"Laws on citizenship at birth affect whether these children are citizens of the country they grow up in.", flag:false, why:"Accurate: under jus soli they are usually citizens at birth; under jus sanguinis they may not be."},
      " Finally, ",
      {t:"many second-generation people have never migrated themselves.", flag:false, why:"Accurate: they were born in the country their parents moved to."}
    ]}
   ],
   apply:{
    intro:"These tasks use stories and willing conversation partners. Keep everything respectful and private, and never ask anyone about their legal status.",
    tasks:[
     {t:"Place a story on Berry’s grid", how:[
       "Choose a character from a novel, film, TV series or memoir who lives between cultures, or, if you are comfortable, yourself or your own family.",
       "For two areas of life (for example home and work, or family and school), decide which strategy fits best.",
       "Note what in the wider society made each option easier or harder."
     ], write:"The person or character… area 1 and strategy… area 2 and strategy… what helped or blocked…"},
     {t:"Optional: a short conversation", how:[
       "Only with a friend or family member who grew up between languages or cultures and who agrees to talk.",
       "Tell them they can skip any question or stop at any time. Don’t record unless they clearly agree, and don’t ask about legal status.",
       "Ask two or three open questions, such as: “What helped you feel at home here?” and “Which languages do you use where?” Write notes afterwards, without their name."
     ], write:"What they shared (no names)… what surprised me… which idea from the lesson it connects to…"},
     {t:"Look for one support for children of migrants", how:[
       "Search for one school, library or city programme that supports children of migrants: language support, homework clubs, mentoring or heritage-language classes.",
       "Note who runs it, who it serves and which path in segmented assimilation it might help make more likely."
     ], write:"The programme… who runs it… who it serves… how it might shape paths…"}
    ],
    proof:"Notes placing one person or character on Berry’s grid in two areas of life, optional anonymous notes from a consented conversation, and one support programme linked to segmented assimilation."
   },
   read:[
    {book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’” (Sarah Spencer)", note:"Background reading: for how integration research treats outcomes across generations and the debates about measuring them."},
    {book:"imis", where:"Chapter 17 “Locating Race in Migration and Diversity Studies” (Kristine Aquino, Laavanya Kathiravelu and Emma Mitchell)", note:"Background reading: why race and racism need to be part of any account of how migrants and their children are received."},
    {book:"soc", where:"Chapter 11 “Race and Ethnicity”, Section 11.4 “Intergroup Relationships”", note:"For assimilation, amalgamation and pluralism as patterns of intergroup relations."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u12-l3", title:"Transnational lives and superdiversity", minutes:55,
   hook:{q:"Many Filipino families know the *balikbayan* box. What is it?", options:["A large box of gifts and everyday goods that Filipinos abroad send home to family","A Filipino passport for people living overseas","A savings account for migrant workers","A wooden fishing boat"], answer:0, reveal:"**A box of gifts and goods sent home**: clothes, food, toiletries, toys, packed carefully over weeks and shipped to relatives. *Balikbayan* comes from Filipino words for “return” and “homeland” or “town”. The box is a small, everyday sign of something large: many migrants live their lives across two or more countries at once, sending not only money and goods but ideas, care and news. This lesson explains how researchers study these transnational lives."},
   goals:[
     "Explain transnationalism and the idea of a transnational social field, with examples from several regions",
     "Distinguish economic, political and social-cultural transnational ties",
     "Define social remittances and give examples of ideas and practices that travel with migrants",
     "Summarise the main critiques of transnationalism, including methodological nationalism, and how transnational ties relate to integration",
     "Explain superdiversity and its critiques"
   ],
   learn:[
    {h:"Living here and there", body:[
      {lead:"Sione drives a bus in Auckland. On Sunday his church collects money for a new hall in his parents’ village in Tonga. On Monday he video-calls his grandmother. In December he flies home for a wedding."},
      "Is Sione “in” New Zealand or “in” Tonga? In a sense, both. His work, taxes and children’s schooling are in one place; his family duties, church, savings plans and many of his feelings stretch to another.",
      "For much of the 20th century, scholars pictured migration as a clean break. The historian Oscar Handlin’s prize-winning book on immigrants to the United States was called *The Uprooted* (1951): people torn from their old worlds. Later historians, such as John Bodnar in *The Transplanted* (1985), stressed that migrants carried families, customs and networks with them.",
      "Since the early 1990s, migration researchers have gone further. They argue that many migrants don’t just leave one place for another: they **live across places at once**. Cheaper travel, phone calls and now messaging apps and video calls make this easier, but, as you will see, it isn’t new."
    ]},
    {h:"Transnationalism: the 1992 turn", body:[
      "In 1992 the anthropologists Nina Glick Schiller, Linda Basch and Cristina Szanton Blanc published a volume called *Towards a Transnational Perspective on Migration*. In its opening chapter they defined [[transnationalism]] as “the processes by which immigrants build social fields that link together their country of origin and their country of settlement”.",
      "They called migrants who build such fields [[transmigrant|transmigrants]]. Their research drew on migrants from Haiti, the English-speaking Caribbean and the Philippines living in New York, and they developed it in the book *Nations Unbound* (1994).",
      "The key idea is the **transnational social field**: a web of relationships, money, information, obligations and institutions that spans borders. People in the field need not move at all. A grandmother in a village who receives calls, money and advice from her children abroad, and sends back food, prayers and opinions, is part of it too.",
      {fig:'<svg viewBox="0 0 340 340"><defs><marker id="m12c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="40" y="8" width="260" height="54" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Place of origin</text><text class="s" x="170" y="50" text-anchor="middle">family, village, church, land</text><rect class="d-lup" x="40" y="262" width="260" height="54" rx="10" stroke-width="2"/><text x="170" y="286" text-anchor="middle">Place of settlement</text><text class="s" x="170" y="304" text-anchor="middle">work, school, new friends, taxes</text><path class="d-ink" d="M30 66L30 256" stroke-width="2" marker-end="url(#m12c)"/><path class="d-ink" d="M310 256L310 66" stroke-width="2" marker-end="url(#m12c)"/><rect class="d-panel" x="48" y="78" width="244" height="170" rx="8" stroke-width="2"/><text x="170" y="104" text-anchor="middle">Money and goods</text><text x="170" y="136" text-anchor="middle">Calls, messages, visits</text><text x="170" y="168" text-anchor="middle">Ideas and practices</text><text x="170" y="200" text-anchor="middle">Votes, donations, causes</text><text class="s" x="170" y="232" text-anchor="middle">Flows run in both directions</text><text class="s" x="170" y="336" text-anchor="middle">One social field spanning two places</text></svg>', alt:"A box for the place of origin at the top (family, village, church, land) and a box for the place of settlement at the bottom (work, school, new friends, taxes). Arrows run down on the left and up on the right. Between them a panel lists what flows: money and goods; calls, messages and visits; ideas and practices; votes, donations and causes. Flows run in both directions.", cap:"A transnational social field: one set of relationships that links two (or more) places. People who never move can be part of it."},
      {key:"Transnationalism shifts the question from “Have migrants left one society and joined another?” to “How do people build lives that span several societies at once?”"}
    ]},
    {h:"What transnational ties look like", body:[
      "Researchers often sort transnational ties into three kinds:",
      {table:[["Kind of tie","Examples"],["Economic","Sending [[remittances]]; buying land or building a house back home; running a business that trades between two countries"],["Political","Voting from abroad; campaigning for causes in the country of origin; [[hometown-association|hometown associations]] lobbying local officials"],["Social and cultural","Calls, visits, weddings and funerals; religious networks; music, films and news shared across borders; caring for relatives from a distance"]]},
      "Examples come from every region:",
      {list:[
        "**Mexico–United States.** Hometown associations formed by migrants from the same town raise money for roads, schools and churches back home; for many years a Mexican government programme matched their donations.",
        "**Senegal.** Members of the Mouride Sufi brotherhood built trading networks linking cities such as New York and towns in Italy with the holy city of Touba.",
        "**Kerala–the Gulf.** Generations of workers from the Indian state of Kerala have worked in Gulf countries while supporting households, building houses and funding education back home.",
        "**Tonga and Samoa–New Zealand and Australia.** Churches and extended families link Pacific communities across the ocean, with money, ceremonies and visits.",
        "**Within countries.** In China, many parents who moved to cities for work stay closely tied to children and grandparents in their home villages: a “translocal” version of the same pattern."
      ]},
      "Ties also carry care across borders. Unit 10 introduced [[global-care-chain|global care chains]]: a mother working abroad may care for her own children by phone while someone else looks after them at home."
    ]},
    {h:"Social remittances: ideas that travel", body:[
      "Money is the most visible flow, but not the only one. In 1998 the sociologist Peggy Levitt introduced [[social-remittances]]: “the ideas, behaviors, identities, and social capital” that flow from migrants’ new communities back to their communities of origin.",
      "Her research followed people between a village she called Miraflores in the Dominican Republic and a neighbourhood of Boston in the United States. She found that migrants and returning visitors brought back new expectations, for example about women working outside the home, how local politics should be run, or what a clinic should provide. She sorted social remittances into three types:",
      {list:[
        "**Normative structures**: ideas, values and beliefs, such as norms about family roles or fairness.",
        "**Systems of practice**: what people actually do, such as how they organise a church group or a campaign.",
        "**Social capital**: the status and connections people gain, which they can use back home."
      ]},
      "Social remittances can be welcomed, ignored or resisted, and they are not automatically “better” ideas from richer places. In later work with Deepak Lamba-Nieves (2011), Levitt stressed that social remittances flow in **both** directions and change as they circulate. Migrants also bring ideas, skills and practices to their new communities, from business methods to religious traditions.",
      {ex:"Amara works as a nurse abroad. On visits home she tells her old colleagues about a hand-hygiene routine her hospital uses; one of them starts it in their clinic (a system of practice). Her daughter, raised abroad, questions why only women in the family cook at festivals (a normative idea). Meanwhile, Amara’s new colleagues adopt her habit of greeting each patient’s family by name. Ideas are travelling both ways.", label:"Worked example: social remittances both ways"}
    ]},
    {h:"Critiques and limits", body:[
      "Transnationalism changed the field, and it drew careful criticism:",
      {list:[
        "**Not everyone is transnational.** Alejandro Portes, Luis Guarnizo and Patricia Landolt (1999) argued the term should be kept for regular, sustained activities across borders. Later survey research found that only a minority of migrants took part regularly in transnational political activities, though occasional ties were much more common.",
        "**It isn’t new.** The historian and anthropologist Nancy Foner (1997) showed that Italian, Jewish and other immigrants in New York around 1900 also sent money home, travelled back and followed homeland politics. What changed is the speed and cost of keeping in touch.",
        "**Ties need resources and rights.** Travelling home needs money, time and often the right documents. People without secure status may be unable to visit for years, so transnational lives are unevenly shared."
      ]},
      "One critique turned back on the social sciences themselves. Andreas Wimmer and Nina Glick Schiller (2002) named [[methodological-nationalism|methodological nationalism]]: the habit of treating the nation-state as the natural container of social life, so that research quietly assumes societies stop at borders. Transnational research tries to follow people and relationships wherever they go.",
      "Are transnational ties a barrier to integration? Research suggests not necessarily. Marta Bivand Erdal and Ceri Oeppen (2013) described how the two can add up, reinforce each other or sometimes pull against each other, depending on the person and context. A successful job abroad can pay for a house back home; strong ties at home can also make settling feel less urgent."
    ]},
    {h:"Superdiversity", body:[
      "In 2007 the anthropologist Steven Vertovec published “Super-diversity and its implications”, about Britain, and especially London. He argued that describing diversity by ethnicity or country of origin alone no longer captured what was happening.",
      "[[superdiversity|Superdiversity]] means a dynamic interplay of many variables among people who have arrived in different ways and at different times, for example:",
      {list:[
        "country of origin, and within it languages, religions and regional identities",
        "migration channel and legal status (work, study, family, asylum, [[irregular-migration|irregular]]), with very different rights attached",
        "education and skills, and access to jobs",
        "age, gender and time since arrival",
        "where people live, and how local services and residents respond"
      ]},
      "Two people from the same country can have little in common: one a doctor on a skilled-work visa, another an [[asylum-seeker|asylum seeker]] waiting for a decision. Vertovec argued that policies and services designed around a few large “communities” would miss many people.",
      "The idea spread to cities such as Toronto, Amsterdam and Sydney, and resonates in cities like Dubai, where foreign nationals form a large majority of residents. Critics reply that the term can be vague, that it may sound like a celebration that hides [[racism]] and inequality, and that many cities, especially old port and trading cities in Africa and Asia, have been highly diverse for centuries. Chapter 16 of the *Introduction to Migration Studies*, “Cities of Migration”, looks at how cities handle this diversity."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Migrants make a clean break with home.","Many keep economic, political and social ties across borders for decades, though not everyone does."],["Transnationalism began with the internet.","Migrants around 1900 also sent money, travelled back and followed homeland politics; technology made ties cheaper and faster."],["Social remittances flow only from rich to poor places.","Ideas and practices travel in both directions and change as they circulate."],["Strong ties to home mean someone isn’t integrating.","Transnational ties and integration can add up or reinforce each other; the link depends on context."],["Superdiversity just means “lots of nationalities”.","It means many cross-cutting differences, including legal status, rights, skills, age and time since arrival."]]},
      {key:"Many migrants live in transnational social fields that link places through money, care, ideas and politics. Studying them means following people across borders rather than assuming societies stop at the border."},
      {terms:["transnationalism","transmigrant","hometown-association","social-remittances","methodological-nationalism","superdiversity"]}
    ]}
   ],
   try:[
    {id:"e2u12-l3-x1", type:"sort", q:"What kind of transnational tie does each example show?", buckets:["Economic","Political","Social and cultural"], items:[
      {t:"Mei sends part of her wages to pay for her brother’s university fees back home.", b:0, why:"Sending money is an economic tie: a remittance."},
      {t:"Tomás votes at his country’s consulate in a national election.", b:1, why:"Voting from abroad is political participation across borders."},
      {t:"A family holds a wedding with relatives joining by video from three countries.", b:2, why:"Family rituals and communication across borders are social and cultural ties."},
      {t:"A hometown association lobbies the mayor back home to repair the town’s road.", b:1, why:"Pressing officials in the place of origin is a political tie, even when the goal is a local project."},
      {t:"Hana runs a small business importing tea from her parents’ region.", b:0, why:"Trade linking two countries is an economic tie."},
      {t:"Members of a religious community in two countries share teachers and online services.", b:2, why:"Religious networks are a social and cultural tie."}
    ]},
    {id:"e2u12-l3-x2", type:"mcq", q:"Which description fits Glick Schiller, Basch and Szanton Blanc’s idea of transnationalism?", options:[
      {t:"Migrants build social fields that link their country of origin and their country of settlement.", ok:true, why:"Right: that is close to their 1992 definition."},
      {t:"Migrants cut all ties with their country of origin to fit into their new society.", why:"That is the “uprooted” picture that transnationalism challenged."},
      {t:"Migrants move repeatedly between many countries without settling anywhere.", why:"Some do, but transnationalism is about ties spanning places, which also includes people who settle in one place."},
      {t:"Governments sign agreements to manage migration between two countries.", why:"Agreements between states are migration governance. Transnationalism focuses on migrants’ own social fields."}
    ]},
    {id:"e2u12-l3-x3", type:"mcq", q:"Which of these is a **social remittance** in Levitt’s sense? Choose all that apply.", options:[
      {t:"A returning visitor persuades her village’s women’s group to keep written minutes and elect a treasurer.", ok:true, why:"A new way of organising is a “system of practice”, one of Levitt’s types."},
      {t:"A migrant’s experience abroad changes his family’s views on daughters going to university.", ok:true, why:"Changed ideas and values are “normative structures”."},
      {t:"A migrant sends money every month to pay for his mother’s medicine.", why:"That is a financial remittance. Social remittances are ideas, practices, identities and social capital."},
      {t:"A returnee uses contacts she made abroad to help her town’s cooperative find buyers.", ok:true, why:"Connections and status gained abroad are social capital, Levitt’s third type."}
    ]},
    {id:"e2u12-l3-x4", type:"match", q:"Match each critique to the scholars associated with it.", pairs:[
      ["Keep “transnational” for regular, sustained cross-border activities","Portes, Guarnizo and Landolt (1999)","They argued the term was being stretched too far and should be defined more strictly."],
      ["Migrants around 1900 also lived transnational lives","Nancy Foner (1997)","Her comparison of New York immigrants then and now showed the pattern is old."],
      ["Social science wrongly treats the nation-state as the natural container of society","Wimmer and Glick Schiller (2002)","They named this methodological nationalism."],
      ["Diversity now involves many cross-cutting variables, not just ethnicity","Steven Vertovec (2007)","His idea of superdiversity."]
    ]},
    {id:"e2u12-l3-x5", type:"order", q:"Put these ideas in time order, from the earliest publication.", items:[
      {t:"Handlin’s *The Uprooted* pictures migration as a painful break", why:"1951."},
      {t:"Bodnar’s *The Transplanted* stresses what migrants carried with them", why:"1985."},
      {t:"Glick Schiller, Basch and Szanton Blanc propose a transnational perspective", why:"1992."},
      {t:"Levitt introduces social remittances", why:"1998."},
      {t:"Wimmer and Glick Schiller criticise methodological nationalism", why:"2002."},
      {t:"Vertovec describes superdiversity", why:"2007."}
    ]},
    {id:"e2u12-l3-x6", type:"mcq", q:"A city plans a single outreach programme for everyone born in one large country, assuming they all share the same needs. What would Vertovec’s superdiversity idea suggest?", options:[
      {t:"People from one country can differ greatly by language, religion, legal status, skills, age and time since arrival, so one programme may miss many of them.", ok:true, why:"Yes. Superdiversity stresses differences that cut across country of origin."},
      {t:"There is no need for any programme, because diversity solves itself.", why:"Superdiversity is a description of complexity, not a claim that services are unnecessary."},
      {t:"The city should group everyone by continent instead.", why:"That would hide even more differences, the opposite of what superdiversity suggests."},
      {t:"Only the size of the community matters.", why:"Size matters for planning, but superdiversity is about the many variables within and across groups."}
    ]},
    {id:"e2u12-l3-x7", type:"spot", q:"Tap each claim in this summary that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Transnational social fields can include people who have never migrated.", flag:false, why:"Accurate: relatives at home who exchange money, calls and ideas are part of the field."},
      " ",
      {t:"Research shows that almost every migrant takes part regularly in politics back home.", flag:true, why:"Inaccurate. Survey research found regular transnational political activity among a minority; occasional ties are more common."},
      " ",
      {t:"Cheaper travel and communication made ties easier to keep.", flag:false, why:"Accurate: technology changed speed and cost, though the pattern itself is older."},
      " ",
      {t:"Strong ties to home always prevent integration.", flag:true, why:"Misleading. Research suggests transnational ties and integration can add up, reinforce each other or sometimes conflict, depending on context."},
      " ",
      {t:"Social remittances can travel in both directions.", flag:false, why:"Accurate: Levitt and Lamba-Nieves (2011) stressed circulation in both directions."}
    ]}
   ],
   apply:{
    intro:"Map transnational ties with care. Family histories can be private or painful: use a family from a novel, film or memoir whenever you prefer.",
    tasks:[
     {t:"Map a transnational social field", how:[
       "Choose a family: your own (only if you are comfortable), a friend’s with their agreement, or one from a novel, film or memoir.",
       "Draw two or more places on a page. Add the people in each.",
       "Draw arrows for what flows between them: money, goods, calls, visits, ideas, care, votes. Label which way each arrow points."
     ], write:"The family and places… what flows which way… which ties are economic, political, social…"},
     {t:"Trace the cost of sending money", how:[
       "Open the World Bank’s Remittance Prices Worldwide site (remittanceprices.worldbank.org).",
       "Choose one sending country and one receiving country (a “corridor”).",
       "Note the average total cost of sending a set amount, the date of the data, and the cheapest and most expensive kinds of service shown. Compare with the 3% target in the Sustainable Development Goals."
     ], write:"Corridor… date of data… average cost… cheapest and dearest service types… compared with the 3% target…"},
     {t:"Spot a social remittance", how:[
       "Think of one idea, practice, food, word or style that arrived in your community through migration, or one that travelled the other way.",
       "Decide which of Levitt’s types it is: a norm, a practice or social capital.",
       "Note whether it was welcomed, changed or resisted."
     ], write:"The idea or practice… where it came from… Levitt’s type… how people responded…"}
    ],
    proof:"A labelled map of one transnational social field, the dated cost of one remittance corridor compared with the 3% target, and one social remittance classified with Levitt’s types."
   },
   read:[
    {book:"imis", where:"Chapter 15 “Transnationalism” (Ludger Pries)", note:"Read it after this lesson for a fuller history of the transnational perspective and the different kinds of transnational ties and organisations."},
    {book:"imis", where:"Chapter 16 “Cities of Migration” (Asya Pisarevskaya and Peter Scholten)", note:"For how cities experience and govern diversity, including debates about superdiversity."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u12-l4", title:"Diaspora and return", minutes:55,
   hook:{q:"The word “diaspora” comes from ancient Greek. What did its root verb originally describe?", options:["Scattering seeds, as in sowing","Sailing a ship","Trading in a market","Writing a letter"], answer:0, reveal:"**Scattering, as in sowing seeds.** The Greek *diaspeirein* means “to scatter across”, from *speirein*, “to sow”. When Jewish scholars translated the Hebrew Bible into Greek, they used *diaspora* for the dispersion of the Jewish people. Today the word is used for many communities living away from an ancestral homeland. This lesson asks what makes a group a diaspora, how governments court their diasporas, and why many migrants return, or don’t."},
   goals:[
     "Explain the origin of the term diaspora and how its use has widened",
     "Apply Safran’s criteria, Cohen’s types and Brubaker’s core elements to real cases, and explain the debate between them",
     "Describe how states and diasporas engage with each other, with arguments for and against",
     "Explain the main theories of return migration and Cerase’s types of return",
     "Distinguish voluntary, assisted and forced return, and describe the challenges of reintegration"
   ],
   learn:[
    {h:"A scattering of seeds", body:[
      {lead:"A seed carried far from its parent plant still carries the parent’s shape inside it, but grows in new soil."},
      "For centuries, [[diaspora]] referred mainly to a few classic cases: the Jewish diaspora; the Armenian diaspora, scattered especially after the genocide of 1915–1923; the Greek diaspora; and the African diaspora, created largely by the [[forced-migration|forced migration]] of the [[transatlantic-slave-trade|transatlantic slave trade]].",
      "Since the 1980s and 1990s the word has spread enormously. Today people speak of Indian, Chinese, Filipino, Irish, Lebanese, Somali, Haitian, Tongan and many other diasporas, and of “digital diasporas” online. A journal devoted to the subject, *Diaspora: A Journal of Transnational Studies*, began in 1991.",
      "This spread is useful and also a problem. If any group living abroad is a diaspora, the word stops telling us anything. So scholars have tried to define it more carefully. Three attempts are especially influential."
    ]},
    {h:"Safran’s checklist", body:[
      "In the journal’s first issue (1991), the political scientist William Safran proposed that diasporas are communities whose members, or their ancestors, share several of these features:",
      {ol:[
        "They, or their ancestors, were **dispersed** from an original centre to two or more other regions.",
        "They keep a **collective memory or myth** about the homeland: its location, history and achievements.",
        "They believe they are **not fully accepted** by their host society, and feel partly separate from it.",
        "They see the ancestral homeland as their true, ideal home, and a place to which they or their descendants will **eventually return**.",
        "They are committed to the **maintenance or restoration** of the homeland, its safety and prosperity.",
        "They continue to **relate to the homeland** in one way or another, and their sense of community is shaped by that relationship."
      ]},
      "The checklist is clear and easy to apply. Critics noted that it was modelled closely on the Jewish experience as an ideal type, and that few groups fit every point. Many people with strong homeland ties have no plan to “return”, and many feel fully at home where they live. Safran’s own wording already allowed for this: a diaspora need share only several of the features, with the Jewish case as the fullest example."
    ]},
    {h:"Cohen’s types", body:[
      "The sociologist Robin Cohen, in *Global Diasporas* (first edition 1997), widened the definition. He argued that dispersal need not be traumatic: people may also scatter in search of work, trade or as part of an empire. A diaspora shows a strong group identity sustained over a long time, a sense of connection with members in other countries, and often the possibility of a creative, enriching life in the places where they live.",
      "He sorted diasporas into ideal types; the second edition (2008) has chapters on five:",
      {table:[["Type","Examples Cohen used"],["Victim","Jewish, African and Armenian diasporas"],["Labour","Indian [[indentured-labour|indentured]] workers in the 19th and early 20th centuries"],["Imperial","British settlers across the empire"],["Trade","Chinese and Lebanese trading networks"],["Deterritorialised","Caribbean peoples, whose ancestral homelands are many and distant"]]},
      {warn:"These are ideal types: tools for comparison, not labels that fix a group forever. Most diasporas fit more than one type, and change over time. Cohen’s own examples are meant as illustrations, not rankings of suffering or success."}
    ]},
    {h:"Brubaker: diaspora as a claim", body:[
      "In 2005 the sociologist Rogers Brubaker published an article with a playful title, “The ‘diaspora’ diaspora”: the word itself, he joked, had dispersed across academia, politics and everyday speech. He identified three core elements that most definitions share:",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-sage" x="8" y="8" width="324" height="62" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">1 Dispersion</text><text class="s" x="170" y="54" text-anchor="middle">spread across borders, often several places</text><rect class="d-lup" x="8" y="80" width="324" height="62" rx="8" stroke-width="2"/><text x="170" y="106" text-anchor="middle">2 Homeland orientation</text><text class="s" x="170" y="126" text-anchor="middle">a real or imagined homeland as a focus</text><rect class="d-gold" x="8" y="152" width="324" height="62" rx="8" stroke-width="2"/><text x="170" y="178" text-anchor="middle">3 Boundary maintenance</text><text class="s" x="170" y="198" text-anchor="middle">a distinct identity kept over generations</text><rect class="d-panel" x="8" y="232" width="158" height="90" rx="8" stroke-width="2"/><text x="87" y="256" text-anchor="middle">As a group</text><text class="s" x="87" y="278" text-anchor="middle">“the diaspora”</text><text class="s" x="87" y="294" text-anchor="middle">as a bounded</text><text class="s" x="87" y="310" text-anchor="middle">community</text><rect class="d-rose" x="174" y="232" width="158" height="90" rx="8" stroke-width="2"/><text x="253" y="256" text-anchor="middle">As a claim</text><text class="s" x="253" y="278" text-anchor="middle">a stance people</text><text class="s" x="253" y="294" text-anchor="middle">and leaders take,</text><text class="s" x="253" y="310" text-anchor="middle">more or less</text></svg>', alt:"Three stacked boxes list Brubaker’s core elements of diaspora: dispersion (spread across borders, often several places), homeland orientation (a real or imagined homeland as a focus) and boundary maintenance (a distinct identity kept over generations). Below, two boxes contrast seeing diaspora as a group, a bounded community called the diaspora, with seeing it as a claim, a stance people and leaders take, more or less.", cap:"Brubaker’s three core elements, and his suggestion to treat diaspora as a claim or stance rather than a fixed group."},
      "Brubaker’s key move was to warn against treating “the diaspora” as a solid, countable group whose members all think alike. Many people of a given origin don’t feel part of any diaspora; others feel strongly so. He suggested treating diaspora as **a category of practice**: an idiom, a stance and a claim that people, community leaders and governments make, for example to mobilise support or ask for loyalty.",
      {ex:"A government invites “our diaspora” to a summit, a community leader says “the diaspora demands a voice”, and a young person whose grandparents emigrated says “I don’t really think of myself as diaspora”. Brubaker would say: notice who is making the diaspora claim, for what purpose, and who is left out of it.", label:"Worked example: who is claiming “diaspora”?"}
    ]},
    {h:"Diaspora engagement: states reaching out", body:[
      "Many origin countries now court their emigrants and their descendants through [[diaspora-engagement]]. The geographer Alan Gamlen (2014) showed that formal government institutions for diasporas, such as ministries, offices and councils, had become common around the world. Examples include:",
      {list:[
        "**The Philippines’** Commission on Filipinos Overseas, set up in 1980.",
        "**Mexico’s** Institute for Mexicans Abroad, set up in 2003.",
        "**India’s** Pravasi Bharatiya Divas (Non-Resident Indian Day), a gathering first held in 2003, and Overseas Citizenship of India, a lifelong visa that lets many people of Indian origin live and work in India without full citizenship.",
        "**Ireland’s** published diaspora strategies, linking the state with people of Irish heritage worldwide.",
        "**The African Union**, which invites the African diaspora to take part in its work and often calls it Africa’s “sixth region”."
      ]},
      "Tools include allowing [[dual-citizenship|dual citizenship]] and voting from abroad, cutting the cost of [[remittances]], **diaspora bonds** (Israel has sold them since 1951; India raised money this way in 1991, 1998 and 2000), schemes to attract investment and skills, and cultural programmes for young people of the second and third generations.",
      "Views differ. **Supporters** say engagement recognises emigrants as full members of the nation, protects their rights abroad and supports development at home. **Critics** say some governments see diasporas mainly as sources of money and votes, and researchers have documented cases of governments monitoring or intimidating critics living abroad, which they call **transnational repression**. Diasporas themselves also act independently: they fund relief after disasters, back political movements, and in conflicts have supported both armed groups and peacebuilding. A 2007 UN University book captured the debate in its title: *Diasporas in Conflict: Peace-Makers or Peace-Wreckers?*"
    ]},
    {h:"Return migration", body:[
      "[[return-migration|Return migration]] is the movement of people back to their country of origin, or to a place they consider their origin, after a significant period abroad. It is common and varied, and it can be voluntary, assisted or forced. Unit 9 introduced [[circular-migration]], in which people move back and forth repeatedly.",
      "Theories of migration give return different meanings. Jean-Pierre Cassarino (2004) compared them:",
      {table:[["Theory","How it sees return"],["[[neoclassical-migration-theory|Neoclassical economics]]","A **failure**: the migrant didn’t earn what they expected abroad"],["[[new-economics-of-labour-migration|New economics of labour migration]]","A **success**: the migrant reached a savings or family target and came home as planned"],["Structural approaches","Shaped by conditions at home: whether returnees can use what they bring"],["Transnational and network approaches","Part of ongoing ties; return may not be final"]]},
      "In a classic 1974 study of Italians returning from the United States, Francesco Cerase described four kinds of return: the **return of failure** (people who never settled abroad), **conservatism** (people who saved to buy land or a house and fit back into old ways), **innovation** (people who try to bring new ideas and skills, often meeting resistance) and **retirement**.",
      "Return of skilled people can change economies. The economic geographer AnnaLee Saxenian, in *The New Argonauts* (2006), followed engineers who moved between Silicon Valley and places such as Taiwan, Israel, China and India, carrying skills, contacts and capital. In China, returnees from study abroad are nicknamed *haigui*, a pun on “sea turtles”. This is one form of [[brain-gain]].",
      "Some “return” to places they have never lived: descendants moving to an ancestral homeland, sometimes under special laws, such as Israel’s Law of Return (1950) or Germany’s admission of ethnic German resettlers from the former Soviet Union.",
      "Return can also be forced. Deportation removes people against their will; IOM runs programmes of **assisted voluntary return and reintegration**; refugees’ voluntary repatriation is one of the [[durable-solutions]]. Whatever the route, **reintegration** can be hard: savings run out, qualifications aren’t recognised, families have changed, children raised abroad may not speak the language well, and returnees may face stigma, especially after forced return."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Any group living abroad is a diaspora.","Scholars look for features such as dispersion, homeland orientation and a lasting distinct identity; and many people of a given origin don’t see themselves as a diaspora."],["A diaspora is a single group with one view.","Brubaker warns against this; diaspora is often a claim made by leaders or governments, and members disagree."],["Return means migration failed.","That is one theory’s view. Others see return as a planned success, or as one step in ongoing ties."],["Returnees simply slot back in.","Reintegration can be hard, especially after forced return or many years away."],["Diasporas always fuel conflict, or always build peace.","Research finds both, depending on the group, the conflict and the time."]]},
      {key:"Diaspora describes a lasting, cross-border sense of belonging to a homeland, but it is also a claim that people and states make. Return is not the end of migration’s story: it has many forms and meanings."},
      {terms:["diaspora","diaspora-engagement","return-migration"]}
    ]}
   ],
   try:[
    {id:"e2u12-l4-x1", type:"mcq", q:"Which of these is **not** one of Safran’s 1991 features of a diaspora?", options:[
      {t:"Members must hold the citizenship of their ancestral homeland.", ok:true, why:"Correct, this isn’t on the list. Safran’s features concern dispersal, memory, partial acceptance, the ideal of return, commitment to the homeland and an ongoing relationship with it, not legal status."},
      {t:"A collective memory or myth about the homeland", why:"This is one of Safran’s features."},
      {t:"Dispersal from an original centre to two or more other regions", why:"This is Safran’s first feature."},
      {t:"A belief that the ancestral homeland is a place of eventual return", why:"This is one of Safran’s features, and one critics say many groups don’t share."}
    ]},
    {id:"e2u12-l4-x2", type:"match", q:"Match each of Cohen’s diaspora types to an example he used.", pairs:[
      ["Victim","The Armenian diaspora after the genocide of 1915–1923","Cohen treats dispersal through catastrophe as the victim type."],
      ["Labour","Indian indentured workers taken to plantations abroad","Movement for work, including indenture, is the labour type."],
      ["Trade","Chinese and Lebanese trading networks","Dispersal linked to commerce is the trade type."],
      ["Imperial","British settlers across the empire","Dispersal linked to colonial expansion is the imperial type."]
    ]},
    {id:"e2u12-l4-x3", type:"sort", q:"Which of Brubaker’s three core elements does each observation show?", buckets:["Dispersion","Homeland orientation","Boundary maintenance"], items:[
      {t:"People of the same origin live in many countries across several continents.", b:0, why:"Being spread across borders, often to several places, is dispersion."},
      {t:"Community events celebrate the homeland’s national day and raise money for its hospitals.", b:1, why:"Treating the homeland as a focus of loyalty and action is homeland orientation."},
      {t:"Families teach their children the heritage language, and many marry within the community, over several generations.", b:2, why:"Keeping a distinct identity over generations is boundary maintenance."},
      {t:"Relatives settled in five different countries after leaving the same region.", b:0, why:"Scattering to several destinations is dispersion."},
      {t:"A newspaper published abroad reports mainly on politics back home.", b:1, why:"Orientation towards the homeland’s affairs."},
      {t:"A community keeps its own religious festivals and associations, distinct from those around it, for a century.", b:2, why:"Lasting distinctiveness from the host society is boundary maintenance."}
    ]},
    {id:"e2u12-l4-x4", type:"mcq", q:"Which are examples of **diaspora engagement** by an origin state? Choose all that apply.", options:[
      {t:"Selling bonds to emigrants to raise money for national development", ok:true, why:"Diaspora bonds, as Israel and India have used, are a classic engagement tool."},
      {t:"Allowing citizens abroad to vote in national elections", ok:true, why:"External voting extends political rights to the diaspora."},
      {t:"Setting up a government office for citizens and descendants living abroad", ok:true, why:"Diaspora institutions such as the Philippines’ Commission on Filipinos Overseas are central examples."},
      {t:"A destination country running language classes for newcomers", why:"That is an integration measure by the destination country, not engagement by the origin state."}
    ]},
    {id:"e2u12-l4-x5", type:"match", q:"Match each of Cerase’s types of return to the returnee it describes.", pairs:[
      ["Return of failure","Dmitri never found steady work or settled abroad and came back within a year","Cerase’s return of failure: people who couldn’t settle abroad."],
      ["Return of conservatism","Lucía saved for years to buy land in her home village and returned to farm it","Saving to fit back into the old way of life."],
      ["Return of innovation","Oluwaseun came back with new skills and tried to start a modern cooperative","Bringing new ideas home, often meeting resistance."],
      ["Return of retirement","Ana returned to her home town after a long working life abroad","Return at the end of working life."]
    ]},
    {id:"e2u12-l4-x6", type:"sort", q:"How would each theory most likely interpret this situation: “Kenji returns home after three years abroad”?", buckets:["As a failure","As a planned success","As part of ongoing ties"], items:[
      {t:"Neoclassical economics: he didn’t earn as much as he expected abroad.", b:0, why:"Neoclassical theory assumes people move to maximise earnings and stay if it pays, so return suggests the move didn’t pay off."},
      {t:"New economics of labour migration: he reached his family’s savings target.", b:1, why:"NELM sees migration as a household strategy with a target; returning after meeting it is success."},
      {t:"Transnational approaches: he keeps working with partners abroad and may go back.", b:2, why:"Return is one moment in a continuing transnational life, not an ending."},
      {t:"New economics of labour migration: he came home to invest the money in the family farm, as planned.", b:1, why:"Return to invest savings, as planned, is the NELM picture of success."}
    ]},
    {id:"e2u12-l4-x7", type:"spot", q:"Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"The word diaspora comes from Greek words for scattering and sowing.", flag:false, why:"Accurate."},
      " ",
      {t:"Brubaker argued that a diaspora is always a single group whose members think alike.", flag:true, why:"Inaccurate: he argued the opposite, treating diaspora as a claim or stance and warning against picturing it as a uniform group."},
      " ",
      {t:"Some governments have created ministries or offices for their diasporas.", flag:false, why:"Accurate: for example the Philippines (1980) and Mexico (2003)."},
      " ",
      {t:"Every theory of migration sees return as a sign of failure.", flag:true, why:"Inaccurate. Neoclassical theory tends to; the new economics of labour migration sees return as planned success, and transnational approaches as part of ongoing ties."},
      " ",
      {t:"Reintegration after return can be difficult.", flag:false, why:"Accurate: savings, skills recognition, family changes and stigma can all make it hard."}
    ]}
   ],
   apply:{
    intro:"Explore diaspora and return through public sources and stories. Keep it respectful; nothing here needs an account.",
    tasks:[
     {t:"Read one diaspora office’s page", how:[
       "Search for an official government page for citizens or descendants living abroad (a diaspora ministry, office, council or strategy) for any country.",
       "Note what it offers: voting from abroad, dual citizenship, investment, culture, protection of workers, youth programmes.",
       "Note who it seems to count as “diaspora”: citizens only, or also descendants?"
     ], write:"Country and office… what it offers… who counts as diaspora… date of the page…"},
     {t:"Test the definitions on a story", how:[
       "Choose a novel, film, song, memoir or documentary about a community living away from an ancestral homeland.",
       "Check it against Safran’s six features and Brubaker’s three elements.",
       "Note whether anyone in the story rejects the diaspora label, and why."
     ], write:"The story… Safran features present… Brubaker elements present… who accepts or rejects the label…"},
     {t:"Reflect: what does “home” mean?", how:[
       "Write a short paragraph on what makes a place feel like home: people, language, food, landscape, papers, memories.",
       "Then imagine someone who “returns” to a country they left as a child, or have never lived in. What might they find hard?"
     ], write:"What makes home… what a returnee might find hard…"}
    ],
    proof:"Notes on one diaspora institution and who it counts, a story tested against Safran’s and Brubaker’s definitions, and a short reflection on home and return."
   },
   read:[
    {book:"imis", where:"Chapter 15 “Transnationalism” (Ludger Pries)", note:"Background reading: transnational ties and organisations, the wider family of ideas to which diaspora belongs."},
    {book:"imis", where:"Chapter 19 “Migration and Development” (AKM Ahsan Ullah)", note:"Background reading: how migration, remittances and return are linked to development in countries of origin."},
    {book:"imis", where:"Chapter 6 “Migration Forms: What Forms of Migration Can Be Distinguished?” (Cathrine Talleraas)", note:"Background reading: where return and circular migration sit among the forms of migration."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u12-l5", title:"Stories, evidence and ethics", minutes:60,
   hook:{q:"Economists surveyed thousands of people in six rich countries and asked: “What share of the people living in your country are immigrants?” What did they find?", options:["People greatly overestimated the share","People guessed almost exactly right","People greatly underestimated the share","Most people refused to answer"], answer:0, reveal:"**People greatly overestimated it**, in all six countries (France, Germany, Italy, Sweden, the United Kingdom and the United States), in a study by Alberto Alesina, Armando Miano and Stefanie Stantcheva published in 2023. Many respondents also misjudged who immigrants are, for example their education and religion. Our pictures of migration come largely from stories and media, not from statistics. This lesson looks at how those stories work, what the evidence says, and how to research migration ethically. It ends with a send-off for the Social Science Primers."},
   goals:[
     "Summarise what research says shapes public attitudes to migration, including misperceptions and contact",
     "Analyse how a news story frames migration, using Entman’s functions of framing",
     "Define xenophobia and othering, and describe responses to them",
     "Summarise carefully what research finds on wages, public finances and crime, and why results differ by place, group, period and method",
     "Plan migration research that respects vulnerability, consent, safety and positionality"
   ],
   learn:[
    {h:"What people think about migration, and why", body:[
      {lead:"Ask ten people what they think about immigration and you may hear ten different stories. Researchers try to find the patterns behind them."},
      "Jens Hainmueller and Daniel Hopkins reviewed decades of research in 2014. They found that people’s **personal** economic circumstances, such as whether their own job competes with migrants, show little link with their attitudes. Attitudes are shaped much more by **sociotropic** concerns: beliefs about what migration means for the country as a whole, especially its culture and, to a lesser extent, its economy. Their review covered mainly North America and Western Europe.",
      "Perceptions often differ from the numbers. In the six-country study from the warm-up, people overestimated how many immigrants live in their country and held mistaken pictures of their education and religion. In the same study’s experiments, giving people the true figures did not change their support for redistribution, while a story about one hard-working immigrant had a modest effect. Correcting facts alone rarely changes minds.",
      "Two more findings help. First, research by James Dennison and others suggests that attitudes to immigration in many countries change fairly slowly, while how **important** people think the issue is (its salience) can rise and fall quickly with events and coverage. Second, contact matters. Gordon Allport’s **contact hypothesis** (1954) proposed that meeting as equals, with shared goals and support from institutions, reduces [[prejudice]]. A 2006 meta-analysis by Thomas Pettigrew and Linda Tropp, combining over 500 studies, found that [[contact-hypothesis|intergroup contact]] typically does reduce prejudice."
    ]},
    {h:"How framing works", body:[
      "Unit 4 introduced [[framing]] in social movements, and Unit 8 used it for reading world news ({{reading-world-news}}). Media scholars use the idea too. Robert Entman (1993) wrote that to frame is to **select** some aspects of reality and make them more **salient**, so as to promote a particular problem definition, causal interpretation, moral evaluation and recommended remedy.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="m12d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="20" y="8" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">One fact</text><text class="s" x="170" y="52" text-anchor="middle">“A town’s population grew by 3% through migration”</text><path class="d-ink" d="M110 70L86 96" stroke-width="2" marker-end="url(#m12d)"/><path class="d-ink" d="M230 70L254 96" stroke-width="2" marker-end="url(#m12d)"/><rect class="d-rose" x="8" y="102" width="158" height="78" rx="8" stroke-width="2"/><text x="87" y="128" text-anchor="middle">Threat frame</text><text class="s" x="87" y="150" text-anchor="middle">“strain”, “pressure”,</text><text class="s" x="87" y="166" text-anchor="middle">“control”</text><rect class="d-gold" x="174" y="102" width="158" height="78" rx="8" stroke-width="2"/><text x="253" y="128" text-anchor="middle">Economic frame</text><text class="s" x="253" y="150" text-anchor="middle">“costs”, or “the</text><text class="s" x="253" y="166" text-anchor="middle">workers we need”</text><rect class="d-sage" x="8" y="188" width="158" height="78" rx="8" stroke-width="2"/><text x="87" y="214" text-anchor="middle">Humanitarian</text><text class="s" x="87" y="236" text-anchor="middle">“fleeing danger”,</text><text class="s" x="87" y="252" text-anchor="middle">“in need of help”</text><rect class="d-lup" x="174" y="188" width="158" height="78" rx="8" stroke-width="2"/><text x="253" y="214" text-anchor="middle">Human interest</text><text class="s" x="253" y="236" text-anchor="middle">“meet Hana, the</text><text class="s" x="253" y="252" text-anchor="middle">new town nurse”</text><rect class="d-soft" x="8" y="278" width="324" height="74" rx="8" stroke-width="2"/><text class="s" x="170" y="300" text-anchor="middle">Each frame selects what to show and suggests</text><text class="s" x="170" y="318" text-anchor="middle">a problem, a cause, a judgement and a remedy</text><text class="s" x="170" y="336" text-anchor="middle">(after Entman, 1993)</text></svg>', alt:"One fact at the top: a town’s population grew by 3% through migration. Four boxes show frames for it: a threat frame using words like strain, pressure and control; an economic frame using costs, or the workers we need; a humanitarian frame using fleeing danger and in need of help; and a human interest frame introducing Hana, the new town nurse. A note says each frame selects what to show and suggests a problem, a cause, a judgement and a remedy, after Entman 1993.", cap:"One invented fact, four frames. Each can be built from true details, and each leads readers towards different conclusions."},
      "Words carry frames. Water metaphors (“flood”, “wave”, “influx”) suggest a natural disaster; war metaphors (“invasion”) suggest an enemy; numbers without people make migrants abstract, while one dramatic story can make a rare event seem typical. Unit 9 discussed word choices such as “irregular” rather than “illegal” ({{words-and-migration}}).",
      "A 2018 review of European research by Jakob-Moritz Eberl and colleagues found that migrants were often under-represented as speakers in news about them, that coverage frequently used conflict and threat frames, and that media coverage can influence attitudes and voting. Framing that presents migration as an existential danger connects to [[securitization]], which you met in IR.",
      "We all tell [[migration-narrative|migration narratives]]: stories that explain who migrants are, why they come and what it means. Narratives of threat, of victims and of heroes all simplify. Better reporting lets migrants speak for themselves, gives sources and years for numbers, and shows variety and agency."
    ]},
    {h:"Xenophobia and othering", body:[
      "[[xenophobia|Xenophobia]] means fear, dislike or hostility towards people seen as foreigners or outsiders. It overlaps with [[racism]] but isn’t identical: people can face xenophobia from neighbours who share their skin colour, and racism can target citizens whose families have lived somewhere for centuries. The UN’s 2001 World Conference in Durban, South Africa, named “Racism, Racial Discrimination, Xenophobia and Related Intolerance” together.",
      "Xenophobia is found in every region. In May 2008, waves of violence against foreign nationals in South Africa killed at least 62 people and displaced more than 100,000, according to researchers at the University of the Witwatersrand; further outbreaks followed in later years. Hostility has also targeted internal migrants and people from neighbouring countries in many parts of the world.",
      "Behind xenophobia often lies [[othering]]: describing a group as fundamentally different from “us”, as a single mass rather than individuals, so that unfair treatment seems normal. Othering draws on [[stereotype|stereotypes]] and builds [[in-group]] and [[out-group]] boundaries.",
      "Responses include anti-discrimination law, monitoring of hate crimes, journalism codes, teaching, and contact between groups. In the 2018 Global Compact for Migration ({{global-compacts}}), governments committed, in Objective 17, to eliminate all forms of discrimination and to promote evidence-based public discourse to shape perceptions of migration."
    ]},
    {h:"What the evidence says, and doesn’t", body:[
      "Debates about migration often turn on three questions: Does it lower wages? Does it cost or benefit public finances? Does it affect crime? Here is what major reviews find. Notice how carefully each finding is limited to a place, a period and a method.",
      {table:[["Question","What major studies find","Why answers differ"],["Wages","US National Academies (2017): long-run effect on native-born workers’ wages overall is very small; any negative effects most likely for earlier immigrants and native-born workers without a high-school diploma. UK Migration Advisory Committee (2018): little or no impact on UK-born workers’ overall employment, and migration not a major factor in their wages, with some evidence of small losses for lower-skilled and gains for higher-skilled workers","Skills of newcomers and locals, the local economy, time period and method; famous cases such as the 1980 Mariel boatlift to Miami are still debated"],["Public finances","OECD (2014): where there is a net fiscal impact, it rarely exceeds 0.5% of GDP either way. US National Academies (2017): first-generation immigrants cost governments more than the native-born, mainly through their children’s schooling; the second generation are among the strongest fiscal contributors","Age at arrival, employment, earnings, admission route, and accounting choices, such as whether children’s costs and public goods are counted"],["Crime","US: the National Academies (2015) found immigrants less likely than the native-born to commit crimes; Graham Ousey and Charis Kubrin’s 2018 meta-analysis of studies from 1994–2014 found the immigration–crime link “negative—but very weak”. UK (Bell, Fasani and Machin, 2013): an asylum wave was linked to a modest rise in property crime, a later wave of EU workers to a small fall, neither to violent crime. Sweden: children of immigrants are over-represented in registered crime; a 2013 Stockholm study linked half to three-quarters of the gap for men to parents’ resources and neighbourhood segregation","The group and its job prospects, age and sex profiles, place and period, and crime statistics themselves, which reflect reporting and policing as well as offending"]]},
      "The Mariel debate shows how hard this is. In 1990 the economist David Card found little effect on Miami’s low-skilled wages after about 125,000 Cubans arrived in 1980. In 2017 George Borjas reanalysed the data and found a large drop for some low-skilled men; other economists, such as Giovanni Peri and Vasil Yasenov (2019), argued that his small samples produced the result, and Borjas has defended his approach. Same event, different samples and choices, different results.",
      {warn:"What these studies do **not** show: they don’t settle how many people a country should admit, which is a question of values as well as evidence. And averages hide variety: results for one group, place or decade may not hold for another. Be wary of anyone, on any side, who quotes one study as the final word. Check crime claims with what you learned about the [[dark-figure-of-crime|dark figure of crime]] ({{crime-statistics}}), and numbers in general with {{misleading-numbers}}."}
    ]},
    {h:"Researching migration ethically", body:[
      "Research with migrants can do real good: it can correct myths, improve services and let people’s own voices be heard. It can also do harm. A list of names, an address or a remark about someone’s papers in the wrong hands could lead to arrest, deportation, lost jobs or danger to relatives back home. The Research Skills track covers research ethics in depth ({{consent-process}}); here is what needs extra care with migration:",
      {list:[
        "**Vulnerability.** Refugees, people without secure status, workers tied to one employer and children may face extra risks or pressures. As the Research Skills track stresses, [[vulnerable-participants|vulnerability]] is often about the situation, not the person: avoid treating migrants as helpless.",
        "**Consent.** [[informed-consent|Informed consent]] must be understood (in a language and format people can follow), voluntary and ongoing. Pressure can come from gatekeepers such as employers, camp authorities or community leaders. Where a signed form could itself be risky, ethics committees may approve oral consent instead.",
        "**Safety and data.** Collect only what you need. Don’t ask about legal status unless it is essential to the question and protected. Use [[pseudonymisation]], store data securely and think about what could identify someone, including small details in quotes. Protect [[confidentiality]].",
        "**Positionality.** Who you are shapes what people tell you: an insider may be trusted, or feared as a gossip; an outsider may miss meanings. Reflect on your [[positionality]] and practise [[reflexivity]].",
        "**Beyond “do no harm”.** Catriona Mackenzie, Christopher McDowell and Eileen Pittaway (2007) argued that refugee research should go further: build respectful relationships, give something back and involve people as partners, not just sources."
      ]},
      "Karen Jacobsen and Loren Landau (2003) discussed the **dual imperative** in refugee research: to be both academically sound and policy-relevant, without cutting ethical or methodological corners. Oliver Bakewell (2008) added a warning about categories: if researchers only study the groups policy-makers define, such as “refugees” in camps, they may miss people who move in other ways. A good researcher questions the categories as well as using them.",
      {tip:"A three-question check before any migration study, even a class project: Could anything I collect harm someone if it leaked? Does each person truly understand and freely agree? Who benefits from this research, and how will I share what I learn with the people who took part?"}
    ]},
    {h:"Thank you: the end of the Social Science Primers", body:[
      "You have reached the end of the Social Science Primers. In **Sociology** you learned to use the sociological imagination: to see personal troubles as public issues, and to study culture, groups, inequality and institutions with evidence. In **International Relations** you looked through realist, liberal, constructivist and critical lenses at states, organisations, war, peace and shared global problems.",
      "In **Migration Studies** you brought the two together. You learned who moves and how they are counted, why people move, how borders, rights and governance shape their journeys and, in this unit, how people settle, belong, keep ties across borders, form diasporas, return, and are talked about. Above all, you learned to see migrants as people with agency and variety, not as a single category.",
      "The habits travel with you. When you hear a claim about migration, ask: who is speaking, and who is missing? What is the source, and what year? Which frame is this? What would a careful study need to show?",
      "Next comes the **Academic Language** elective: **Academic English** first, then **Academic Japanese**. It builds the reading, writing and speaking skills for studying and researching in those languages: perhaps the language in which you read the next migration study, or write your own.",
      {key:"Belonging is built, by newcomers and by the societies they join. Studying it carefully, with evidence and respect, is one way to help build it well. Thank you for learning with us."},
      {terms:["contact-hypothesis","migration-narrative","xenophobia","othering"]}
    ]}
   ],
   try:[
    {id:"e2u12-l5-x1", type:"mcq", q:"According to Hainmueller and Hopkins’s 2014 review, which factor is most strongly linked to people’s attitudes towards immigration in North America and Western Europe?", options:[
      {t:"Beliefs about what immigration means for the country as a whole, especially its culture", ok:true, why:"Right. These sociotropic concerns, cultural and to a lesser extent economic, matter more than personal circumstances."},
      {t:"Whether their own job competes directly with immigrants", why:"The review found personal economic circumstances show little link with attitudes."},
      {t:"Their exact knowledge of migration statistics", why:"Many people misjudge the statistics, and correcting them shifts views only a little; knowledge isn’t the main driver found."},
      {t:"The weather in their region", why:"Nothing in the research points to this."}
    ]},
    {id:"e2u12-l5-x2", type:"sort", q:"Which frame does each invented headline mainly use?", buckets:["Threat","Economic","Humanitarian","Human interest"], items:[
      {t:"“Borders under strain as arrivals rise”", b:0, why:"“Under strain” presents migration as pressure or danger: a threat frame."},
      {t:"“Farms say harvest depends on seasonal workers”", b:1, why:"The focus is on the economy and labour needs."},
      {t:"“Families fleeing floods need shelter, aid agencies say”", b:2, why:"The emphasis is on danger and need for help: a humanitarian frame."},
      {t:"“Meet Amara, who opened the town’s first bakery in decades”", b:3, why:"One person’s story told for its own interest: a human interest frame."},
      {t:"“Report counts the cost of new arrivals to local budgets”", b:1, why:"Costs and budgets are an economic frame."},
      {t:"“Calls for tougher controls after border incident”", b:0, why:"An incident linked to calls for control is a threat or security frame."}
    ]},
    {id:"e2u12-l5-x3", type:"spot", q:"Read this invented news paragraph. Tap each part that is **unsupported, loaded or misleading**.", ask:"unsupported, loaded or misleading", parts:[
      {t:"A flood of newcomers is swamping the town,", flag:true, why:"Loaded water metaphors (“flood”, “swamping”) frame people as a natural disaster rather than giving facts."},
      " according to residents. ",
      {t:"Council figures show the population grew by 3% between 2020 and 2025 through migration.", flag:false, why:"A specific figure with a source and period: the kind of claim you can check."},
      " ",
      {t:"One shopkeeper said his shop was burgled last year, which proves migrants are behind rising crime.", flag:true, why:"One anecdote can’t prove a pattern, and the story doesn’t show who committed the crime or that crime rose."},
      " ",
      {t:"The council said it is hiring two more interpreters for the health centre.", flag:false, why:"A plain, checkable statement of what an institution is doing."},
      " ",
      {t:"Everyone knows newcomers don’t want to fit in.", flag:true, why:"An unsupported generalisation about a whole group: othering, with no evidence."},
      " ",
      {t:"Two newcomers interviewed said they were looking for work in the town’s care homes.", flag:false, why:"Fine: it reports what migrants themselves said, adding their voices to the story."}
    ]},
    {id:"e2u12-l5-x4", type:"mcq", q:"What did the US National Academies’ 2017 report conclude about the long-run effect of immigration on the wages of native-born workers?", options:[
      {t:"Overall it is very small; any negative effects are most likely for earlier immigrants and native-born workers without a high-school diploma.", ok:true, why:"That is the report’s finding, limited to the United States and to the evidence it reviewed."},
      {t:"It cuts all native-born workers’ wages sharply.", why:"The report found the overall long-run effect to be very small."},
      {t:"It raises every worker’s wages by the same amount.", why:"The report didn’t find uniform gains; effects vary between groups."},
      {t:"It can’t be studied at all.", why:"It can be studied, though methods and results are debated, as the Mariel boatlift case shows."}
    ]},
    {id:"e2u12-l5-x5", type:"mcq", q:"Fatima reads two articles. One says “immigrants are a huge drain on public finances”; the other says “immigrants are a huge boost”. What does the OECD’s 2014 summary of research suggest?", options:[
      {t:"Where there is a net fiscal impact in OECD countries, it is usually small, rarely more than 0.5% of GDP either way, and it depends on factors such as age, employment and accounting choices.", ok:true, why:"Yes. Both “huge” claims go beyond what this research found."},
      {t:"The first article is right everywhere.", why:"The research found impacts are usually small and vary by country and group."},
      {t:"The second article is right everywhere.", why:"The same applies: the impact is usually small and varies."},
      {t:"Fiscal impacts are always exactly zero.", why:"They are usually small, but not exactly zero; they can be slightly positive or negative."}
    ]},
    {id:"e2u12-l5-x6", type:"sort", q:"Sort each research practice into good practice or a problem.", buckets:["Good practice","A problem"], items:[
      {t:"Explaining the study in a language the person understands, and checking they know they can stop at any time", b:0, why:"Consent must be understood and voluntary, and stopping must be a real option."},
      {t:"Asking an employer to “make sure” all their workers take part", b:1, why:"Pressure from a gatekeeper, especially one with power over people’s jobs, undermines voluntary consent."},
      {t:"Recording interviewees’ full names next to their immigration status in an unprotected spreadsheet", b:1, why:"This could expose people to serious harm if leaked; collect only what’s needed, pseudonymise and store securely."},
      {t:"Removing small details from quotes that could identify someone in a small community", b:0, why:"Protecting confidentiality includes indirect identifiers, not just names."},
      {t:"Reflecting on how your own background might shape what people tell you", b:0, why:"Thinking about positionality is part of reflexive, trustworthy research."},
      {t:"Never telling participants what the research found", b:1, why:"Mackenzie and colleagues argue for going beyond “do no harm”: share findings and give something back."}
    ]},
    {id:"e2u12-l5-x7", type:"mcq", q:"A student says: “The 2018 meta-analysis proves immigration reduces crime everywhere.” What is the most accurate correction?", options:[
      {t:"It found the link between immigration and crime rates, in studies mostly from the United States, to be negative but very weak, and results varied with study design and place.", ok:true, why:"Right. The finding is real but small and limited to the studies reviewed; it doesn’t prove an effect everywhere."},
      {t:"It found immigration doubles crime.", why:"That is the opposite of what Ousey and Kubrin reported."},
      {t:"It found no studies on the topic.", why:"It combined many studies published between 1994 and 2014."},
      {t:"It proves crime statistics are always accurate.", why:"It doesn’t; crime statistics reflect reporting and policing as well as offending."}
    ]}
   ],
   apply:{
    intro:"Your last Apply tasks for the Social Science Primers. They use public sources and your own reflection, and none of them involves asking anyone about their legal status.",
    tasks:[
     {t:"Spot the framing in one news story", how:[
       "Choose one recent news story about migration from any outlet.",
       "Note the main frame (threat, economic, humanitarian, human interest or another), and the words that signal it.",
       "Count who is quoted: officials, experts, residents, migrants themselves. Who is missing?",
       "Rewrite the headline in a different frame, using only facts from the story."
     ], write:"The story and outlet… main frame and signal words… who is quoted… who is missing… my rewritten headline…"},
     {t:"Look up one migration statistic", how:[
       "Find one number about migration in your country or region from an official or authoritative source, such as a national statistics office, UN DESA, UNHCR, IOM or the Migration Data Portal (migrationdataportal.org).",
       "Write the number, its source, the year it refers to and how it was measured (census, survey, register).",
       "Compare it with your own guess before you looked."
     ], write:"My guess… the number… source… year… how it was measured… what surprised me…"},
     {t:"Write a one-page ethics plan", how:[
       "Imagine a small study: for example, what helps newcomers feel at home in a local library or club.",
       "Write how you would recruit people without pressure, explain the study and get consent, and what you would *not* collect.",
       "Note how you would protect data, reflect on your positionality and share the findings back."
     ], write:"Study idea… recruitment… consent… what I won’t collect… data protection… my positionality… sharing findings…"},
     {t:"Look back over the primers", how:[
       "Write down one idea from Sociology, one from International Relations and one from Migration Studies that changed how you see the world.",
       "Note one question you still want to explore."
     ], write:"From Sociology… from IR… from Migration Studies… my question…"}
    ],
    proof:"Notes analysing one news story’s framing and voices, one sourced and dated statistic compared with your guess, a short ethics plan for an imagined study, and a reflection on the three primers."
   },
   read:[
    {book:"imis", where:"Chapter 23 “Public Opinion and the Politics of Migration” (James Dennison and Alina Vrânceanu)", note:"Read it after this lesson for what shapes attitudes to migration and how they relate to politics."},
    {book:"imis", where:"Chapter 25 “Qualitative Methods in Migration Research” (Ricard Zapata-Barrero and Evren Yalaz)", note:"Background reading: interviews, fieldwork and the practical and ethical choices of qualitative migration research."},
    {book:"imis", where:"Chapter 29 “A Future Agenda for Migration Studies” (Riccardo Pozzo and colleagues)", note:"A fitting end to the primer: where the field may go next."}
   ]
  }
  ],
  checkpoint:["e2u12-q02","e2u12-q05","e2u12-q11","e2u12-q14","e2u12-q20","e2u12-q23","e2u12-q29","e2u12-q32","e2u12-q35","e2u12-q38","e2u12-q41","e2u12-q44"],
  codex:[
   {id:"integration-models", title:"Models of integration", aka:["incorporation","assimilation vs integration","multiculturalism","interculturalism","civic integration"], tags:["migration","integration"],
    summary:"The different answers societies give to “who adapts to whom?”: assimilation, two-way integration, multiculturalism, interculturalism and civic integration, and the debates about each.",
    levels:{
     starter:[
      "When people move to a new country or city, both they and the place they join change. **Models of integration** are the different answers societies give to the question: who is expected to adapt, how much, and in what?",
      {list:[
        "**Assimilation**: newcomers are expected to become like the majority.",
        "**Integration** as a two-way process: newcomers and the receiving society both adjust.",
        "**Multiculturalism**: the state publicly recognises and supports different cultures, with equal rights for all.",
        "**Interculturalism**: the stress is on contact and exchange between groups around a shared civic core."
      ]},
      "Real countries mix these, and change their mix over time. Canada was the first country to adopt multiculturalism as official policy, in 1971.",
      {key:"Every model answers “who adapts to whom?” differently. None exists in pure form."}
     ],
     builder:[
      "**Assimilation** was the classic expectation in early 20th-century sociology and in many states’ policies, sometimes imposed by force. Richard Alba and Victor Nee (2003) recast it as the fading of an ethnic difference that affects life chances, with the mainstream itself changing.",
      "**Integration** is now the most common policy word. The EU’s Common Basic Principles (2004) call it “a dynamic, two-way process of mutual accommodation by all immigrants and residents”. Ager and Strang’s framework (2008) breaks it into ten domains at four levels: markers and means (employment, housing, education, health), social connections (bonds, bridges, links), facilitators (language and cultural knowledge, safety and stability) and a foundation of rights and citizenship.",
      "**Multiculturalism** became official in Canada in 1971 and law in the Canadian Multiculturalism Act of 1988; Australia adopted multicultural policies from the 1970s. Typical measures include support for community organisations, heritage languages, multilingual media, anti-discrimination law and religious exemptions.",
      "**Interculturalism** was promoted by the Council of Europe’s 2008 *White Paper on Intercultural Dialogue*; its Intercultural Cities programme builds on equality, diversity, interaction and participation. Quebec’s 2008 Bouchard–Taylor commission recommended it, with French as the common public language.",
      "**Civic integration** (language and civic courses or tests for residence or citizenship) spread in Europe from the late 1990s, for example in the Netherlands and Germany. France is often described as following a republican model of equal individual citizenship without official recognition of ethnic groups."
     ],
     pro:[
      "The debates are as important as the models. Critics of multiculturalism argued that it could encourage separate communities (the UK’s 2001 Cantle review spoke of “parallel lives”) or leave individuals under pressure from community leaders. In 2010–2011 the leaders of Germany, the United Kingdom and France each declared that multiculturalism, or a version of it, had failed. Keith Banting and Will Kymlicka’s Multiculturalism Policy Index nonetheless suggested that in most Western democracies multicultural policies largely held steady or grew between 1980 and 2010, with a few exceptions, most notably the Netherlands, and that civic integration was often layered on top of multicultural programmes; Christian Joppke and others read the same period as a turn towards civic integration.",
      "Whether interculturalism differs in substance from multiculturalism is disputed: Nasar Meer and Tariq Modood (2012) argued that the differences are often overstated. Willem Schinkel (2018) criticised “integration” discourse for treating migrants and their descendants as permanently on probation and imagining society as a finished whole; Sarah Spencer’s chapter in *Introduction to Migration Studies* reviews these critiques.",
      "Measurement distinguishes **policies** (indexes such as MIPEX), **outcomes** (OECD and EU indicators of employment, income, education, housing and health) and **subjective belonging**. They often diverge, and local implementation matters, which is why research increasingly studies cities.",
      "The classic models presume settlement. They fit poorly where most migration is temporary and routes to citizenship are very limited, as in several Gulf states, and they need adapting for internal migrants (for example under China’s household registration system) and for refugees, where local integration is one of the durable solutions (Uganda and Colombia’s 2021 temporary protection status for Venezuelans are frequently cited cases)."
     ]
    },
    related:["acculturation","segmented-assimilation","second-generation","migration-narratives","intergroup-relations","citizenship"],
    read:[{book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’” and Chapter 21 “The Governance of Migration-Related Diversity”"},{book:"soc", where:"Chapter 11, Section 11.4 “Intergroup Relationships”"}],
    sources:[{t:"Spencer, “The Contested Concept of ‘Integration’”, in Scholten (ed.), Introduction to Migration Studies, 2022, Chapter 14 (open access, DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_14"},{t:"Canadian Multiculturalism Act (1988), Justice Laws Website, Government of Canada", url:"https://laws-lois.justice.gc.ca/eng/acts/c-18.7/page-1.html"},{t:"Council of Europe: Intercultural Cities programme, About", url:"https://www.coe.int/en/web/interculturalcities/about"}],
    checked:"2026-11"},

   {id:"acculturation", title:"Acculturation and Berry’s strategies", aka:["Berry’s model","integration, assimilation, separation, marginalisation","biculturalism"], tags:["migration","integration","psychology"],
    summary:"The changes that follow continuous contact between cultures, and Berry’s four strategies for combining a heritage culture with the wider society.",
    levels:{
     starter:[
      "**Acculturation** is the change that happens when people from different cultures live in continuous contact. It can change newcomers, the society around them, or both: new words, foods, habits, values and identities.",
      "The psychologist John Berry suggested that people face two questions: do I keep my heritage culture? and do I take part in the wider society? The answers give four strategies:",
      {table:[["Keep heritage culture?","Take part in wider society: yes","Take part in wider society: no"],["Yes","Integration","Separation"],["No","Assimilation","Marginalisation"]]},
      "People don’t choose freely. If the wider society discriminates or demands assimilation, some options close. And people may combine cultures differently at home, at work and with friends.",
      "For example, a family may keep its language and religion at home while children pick up new slang, sports and music at school, and the neighbourhood’s shops start selling the family’s favourite foods.",
      {key:"Acculturation is two-sided, and the options open to newcomers depend on how the wider society treats them."}
     ],
     builder:[
      "The classic definition comes from Robert Redfield, Ralph Linton and Melville Herskovits (1936): the phenomena that result when groups with different cultures come into continuous first-hand contact, with changes in the original cultural patterns of either or both groups.",
      "John W. Berry’s article “Immigration, Acculturation, and Adaptation” (*Applied Psychology*, 1997) set out the four strategies above. Berry paired them with the **wider society’s strategies**: when it expects assimilation, a *melting pot*; when it enforces separation, *segregation*; when it marginalises, *exclusion*; and when it accepts both heritage and participation, *multiculturalism*.",
      "Research often links the integration strategy (biculturalism) with better adjustment. The International Comparative Study of Ethnocultural Youth, reported by Berry, Phinney, Sam and Vedder (2006) and covering 13 countries, found an integration profile linked with the best psychological and social adaptation and a diffuse profile with the poorest. A 2013 meta-analysis by Nguyen and Benet-Martínez found biculturalism positively related to adjustment.",
      "Use the model as a question about a situation, not a label for a person. Ask which strategy fits which area of life, and what in the wider society opens or closes each option. Berry’s “integration” is a psychological strategy; don’t confuse it with a government’s integration policy.",
      "Acculturation can also be stressful. Researchers speak of **acculturative stress**: the strain of learning new rules, losing familiar support and facing prejudice. Social support, language learning and a welcoming environment tend to ease it."
     ],
     pro:[
      "Critiques cluster around measurement and assumptions. Floyd Rudmin (2003) argued that the fourfold scheme is hard to measure cleanly, that items asking about two cultures at once confuse respondents, and that evidence for the benefits of integration was weaker than often claimed. Others note that acculturation orientations are **domain-specific** (private vs public life), change over time and differ between generations in one family.",
      "The model treats “heritage” and “wider” cultures as two stable poles, while many people, especially young people in diverse cities, build hybrid or multiple identities and belong to several minorities at once. Power is also central: the larger society’s attitudes and policies, and [[discrimination]], shape which strategies are feasible. Marginalisation in particular is rarely chosen.",
      "Acculturation research is mainly psychological; sociologists studying the same processes tend to speak of assimilation, integration and incorporation, and to emphasise structures (labour markets, schools, law). Reading across both literatures helps: Berry’s grid captures orientations, while segmented assimilation and integration frameworks capture opportunities and constraints.",
      "Acculturation also reaches the receiving society: the spread of foods, words, music and festivals, and changes in institutions, are acculturation in the wider society, a reminder of the 1936 phrase “either or both groups”. Studies of the majority’s own acculturation expectations, what locals want newcomers to do, show that mismatches between what migrants prefer and what the majority expects are linked with more conflict."
     ]
    },
    related:["integration-models","segmented-assimilation","second-generation","socialization","prejudice-discrimination"],
    read:[{book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’”"}],
    sources:[{t:"Berry, “Immigration, Acculturation, and Adaptation”, Applied Psychology 46(1), 1997 (DOI)", url:"https://doi.org/10.1111/j.1464-0597.1997.tb01087.x"},{t:"Ager and Strang, “Understanding Integration: A Conceptual Framework”, Journal of Refugee Studies 21(2), 2008 (DOI)", url:"https://doi.org/10.1093/jrs/fen016"}],
    checked:"2026-11"},

   {id:"segmented-assimilation", title:"Segmented assimilation", aka:["Portes and Zhou","downward assimilation","selective acculturation","new second generation"], tags:["migration","integration","second generation"],
    summary:"Portes and Zhou’s 1993 theory that children of immigrants assimilate into different segments of society, along upward, downward or community-supported upward paths, depending on conditions.",
    levels:{
     starter:[
      "**Segmented assimilation** is a theory about the children of immigrants. The older idea said each generation would move steadily up and blend in. In 1993 the sociologists Alejandro Portes and Min Zhou argued that, in the United States, children of immigrants were following different paths:",
      {ol:["Upward, into the middle-class mainstream.","Downward, into persistent poverty and exclusion.","Upward while deliberately keeping the parents’ community ties and values."]},
      "Which path is more likely depends on conditions: parents’ education and money, legal status, how the government and the wider society receive the family (including [[racism]]), the local schools and jobs, and the strength of the co-ethnic community.",
      "The theory was built on research in US cities in the 1990s, but researchers in Europe and elsewhere now test whether its ideas travel.",
      {key:"The theory explains different outcomes by conditions and reception, not by any group’s character."}
     ],
     builder:[
      "Portes and Zhou’s article “The New Second Generation: Segmented Assimilation and Its Variants” appeared in the *Annals of the American Academy of Political and Social Science* (vol. 530, 1993). It responded to post-1965 immigration to the United States, when the children of new arrivals faced a changing economy with fewer secure middle-income jobs.",
      "Its central concept is the **mode of incorporation**: government policy towards a group (welcoming, neutral or hostile), the wider society’s reception, and the co-ethnic community. Together with parents’ human capital and family structure, it shapes the resources and obstacles young people meet.",
      "For the third path, Portes and Zhou drew on research by Margaret Gibson on Punjabi Sikh students in a Californian farming town, who did well at school while their parents encouraged them to keep community ties.",
      "In *Legacies* (2001), drawing on the Children of Immigrants Longitudinal Study in Miami and San Diego, Portes and Rubén Rumbaut named the third path **selective acculturation**: learning the new language and ways while keeping key parts of the parents’ language and culture, supported by the community. They argued that it tended to go with better school outcomes and less conflict between parents and children.",
      "Read the theory as a set of conditions to check, not a prediction for any individual: the same family can see one child follow one path and a sibling another."
     ],
     pro:[
      "The theory remains influential and contested. Richard Alba and Victor Nee (2003) argued that most of the new second generation was moving upward and that a reformulated assimilation theory fits much of the evidence. Herbert Gans had earlier (1992) raised the possibility of “second-generation decline”; subsequent evidence is mixed and varies by group, place and period.",
      "Critics argue that “downward assimilation” language risks pathologising minority youth cultures and poor neighbourhoods. Defenders note that the theory locates causes in structures, discrimination and reception, not in young people.",
      "Testing the theory outside the United States has stressed **institutional context**. The TIES project (The Integration of the European Second Generation), led by Maurice Crul and colleagues, compared second-generation young adults of the same origins, such as Turkish background, across European cities and found large cross-national differences linked to features such as early school tracking. That suggests that the “segments” are produced by national and local institutions as much as by group characteristics.",
      "Methodologically, the theory depends on long-term panel data and careful comparison of generations; cross-sectional snapshots can confuse generational change with differences between arrival cohorts. Legal status has become a central variable in later work: children growing up with undocumented parents, or without secure status themselves, face blocked paths that the original 1993 article did not foreground."
     ]
    },
    related:["second-generation","acculturation","integration-models","social-mobility","race-ethnicity"],
    read:[{book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’” and Chapter 17 “Locating Race in Migration and Diversity Studies”"}],
    sources:[{t:"Portes and Zhou, “The New Second Generation: Segmented Assimilation and Its Variants”, Annals AAPSS 530, 1993 (DOI)", url:"https://doi.org/10.1177/0002716293530001006"},{t:"Aquino, Kathiravelu and Mitchell, “Locating Race in Migration and Diversity Studies”, in Introduction to Migration Studies, 2022, Chapter 17 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_17"}],
    checked:"2026-11"},

   {id:"second-generation", title:"The second generation", aka:["children of immigrants","1.5 generation","third generation","generations"], tags:["migration","integration","second generation"],
    summary:"People born in a country to parents who migrated there, and the related 1.5 and third generations: why researchers study them, and why the labels need care.",
    levels:{
     starter:[
      "Researchers count generations from the people who moved:",
      {table:[["Label","Usually means"],["First generation","People who migrated themselves"],["1.5 generation","Born abroad, arrived as children"],["Second generation","Born in the country to immigrant parents"],["Third generation","Grandchildren of immigrants, with locally born parents"]]},
      "The second generation matters because long-term integration shows most clearly in children: their schooling, jobs, friendships and sense of belonging.",
      "The labels need care. Most second-generation people have never migrated, and many don’t want to be called migrants. Countries also count them in different ways.",
      "Second-generation people often grow up bilingual, move between family traditions and the wider society, and may act as interpreters and guides for their parents. Their experiences vary hugely with their parents’ resources, legal status, neighbourhood and the welcome their families receive.",
      {key:"“Second generation” describes the parents’ history, not the person’s own move."}
     ],
     builder:[
      "The term **1.5 generation** was popularised by the sociologist Rubén Rumbaut, who also distinguished children who arrived very young (and grew up much like the second generation) from those who arrived as teenagers (with more of their schooling abroad).",
      "Definitions differ between data sources. Some classify people by parents’ country of birth, some by nationality, some by self-identified ethnicity. Comparisons across countries must check definitions first ({{measuring-migration}}).",
      "**Citizenship law** shapes the second generation’s position. Under [[jus-soli]] children born in the country are usually citizens at birth; under [[jus-sanguinis]] they may grow up as foreign nationals, needing [[naturalisation]]. In several Gulf states, children born to foreign workers don’t acquire local nationality by birth.",
      "Two influential research traditions follow this group: **segmented assimilation** in the United States ({{segmented-assimilation}}), based on long-term surveys such as the Children of Immigrants Longitudinal Study; and European comparisons such as the TIES project, which found that the same origin group can have very different outcomes in different countries’ institutions.",
      "Researchers also study the second generation’s identities (many hold more than one), languages (heritage languages often fade by the third generation, though not always) and political participation."
     ],
     pro:[
      "Studying generations raises method problems. Comparing today’s second generation with today’s first confuses generational change with differences between arrival cohorts; tracking families over time (panel data) or comparing parents with their own children is stronger. Ethnic attrition, when people of mixed or distant origin stop identifying with a group, can make later generations look less successful or more successful than they are, depending on who keeps identifying.",
      "Outcomes vary by origin group, gender, legal status of parents, neighbourhood and local labour market. Early school tracking, access to preschool, apprenticeship systems and [[discrimination]] in hiring are recurring explanations in European research; field experiments sending matched job applications with different names have documented hiring discrimination against children of immigrants in many countries.",
      "Identity research shows that many second-generation people hold hyphenated or multiple identities, and may feel more strongly “from” their parents’ country when they face exclusion. Transnational ties also continue: some take part in parents’ hometown associations, visit regularly or later move to the parents’ country, a form of “return” to a place they never lived ({{return-migration}}).",
      "Language matters: “second-generation migrant” is a contradiction in terms for someone who never moved, and terms such as “people with a migration background” are themselves debated."
     ]
    },
    related:["segmented-assimilation","acculturation","integration-models","return-migration","citizenship"],
    read:[{book:"imis", where:"Chapter 14 “The Contested Concept of ‘Integration’”"}],
    sources:[{t:"Portes and Zhou, “The New Second Generation: Segmented Assimilation and Its Variants”, Annals AAPSS 530, 1993 (DOI)", url:"https://doi.org/10.1177/0002716293530001006"},{t:"Džankić and Vink, “Citizenship & Migration”, in Introduction to Migration Studies, 2022, Chapter 22 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_22"}],
    checked:"2026-11"},

   {id:"transnationalism", title:"Transnationalism and social remittances", aka:["transnational social field","transmigrants","social remittances","methodological nationalism","superdiversity"], tags:["migration","transnationalism"],
    summary:"How migrants build social fields that link places of origin and settlement, the ideas and practices that travel through them, and the critiques of the approach.",
    levels:{
     starter:[
      "Many migrants don’t simply leave one country and join another. They **live across places at once**: sending money, calling family, voting from abroad, sending children to visit grandparents, joining churches or associations linked to home. Researchers call this **transnationalism**.",
      "The people and ties involved form a **transnational social field**. Relatives who never move are part of it too: a grandmother who receives calls and money and sends back advice and food.",
      "Money is the most visible flow, but ideas travel too. The sociologist Peggy Levitt called these **social remittances**: ideas, practices, identities and connections that migrants carry back, for example new expectations about how a clinic should work or how families share housework.",
      {key:"Transnationalism asks how people build lives that span borders, instead of assuming societies stop at the border."}
     ],
     builder:[
      "Nina Glick Schiller, Linda Basch and Cristina Szanton Blanc launched the approach in the volume *Towards a Transnational Perspective on Migration* (Annals of the New York Academy of Sciences, vol. 645, 1992). Their opening chapter defined transnationalism as “the processes by which immigrants build social fields that link together their country of origin and their country of settlement”, and called such migrants **transmigrants**. *Nations Unbound* (1994) developed the argument with research among Haitian, English-speaking Caribbean and Filipino migrants in New York.",
      "Ties are often grouped as **economic** (remittances, investment, trade), **political** (voting abroad, campaigns, hometown associations) and **social and cultural** (communication, rituals, religion, media, care).",
      "Peggy Levitt’s 1998 article in *International Migration Review* defined social remittances as “the ideas, behaviors, identities, and social capital” flowing from receiving- to sending-country communities, based on research linking a Dominican village and Boston. She distinguished **normative structures**, **systems of practice** and **social capital**. With Deepak Lamba-Nieves (2011) she later stressed that social remittances circulate in both directions and change in transit.",
      "Examples span every region: Mexican hometown associations; Senegalese Mouride trading networks; Kerala households linked to the Gulf; Tongan and Samoan churches linking the Pacific with New Zealand and Australia; and “translocal” ties between Chinese cities and villages."
     ],
     pro:[
      "Critiques sharpened the concept. Portes, Guarnizo and Landolt (1999) proposed limiting “transnational” to regular, sustained activities, and later surveys found regular transnational political engagement among a minority of migrants, with occasional ties more widespread. Nancy Foner (1997) showed that New York immigrants around 1900 also sent remittances, returned and engaged in homeland politics: the novelty lies more in speed, cost and scale.",
      "Andreas Wimmer and Nina Glick Schiller (2002) criticised **methodological nationalism**: taking the nation-state as the natural unit of analysis, ignoring cross-border processes and equating society with the national container. The critique influenced research design, encouraging multi-sited fieldwork and data that follow people rather than territories.",
      "On the relation with integration, research suggests no simple trade-off. Marta Bivand Erdal and Ceri Oeppen (2013) described interactions that can be additive, mutually reinforcing or in tension. Transnational activity also depends on resources and rights: secure legal status and money make visits possible; irregular status can freeze ties for years.",
      "Steven Vertovec’s **superdiversity** (*Ethnic and Racial Studies*, 2007) belongs to the same rethinking: diversity understood as the interplay of country of origin, migration channel, legal status, rights, skills, age, gender, time since arrival and locality, rather than by ethnicity alone. Critics call the term vague, potentially celebratory in ways that obscure racism and inequality, and centred on cities of the Global North, when many cities elsewhere have long been highly diverse."
     ]
    },
    related:["diaspora","return-migration","remittances","migration-networks","integration-models"],
    read:[{book:"imis", where:"Chapter 15 “Transnationalism”"},{book:"imis", where:"Chapter 16 “Cities of Migration”"}],
    sources:[{t:"Glick Schiller, Basch and Blanc-Szanton, “Transnationalism: A New Analytic Framework for Understanding Migration”, Annals of the New York Academy of Sciences 645, 1992 (DOI)", url:"https://doi.org/10.1111/j.1749-6632.1992.tb33484.x"},{t:"Levitt, “Social Remittances: Migration Driven Local-Level Forms of Cultural Diffusion”, International Migration Review 32(4), 1998 (DOI)", url:"https://doi.org/10.1177/019791839803200404"},{t:"Vertovec, “Super-diversity and its implications”, Ethnic and Racial Studies 30(6), 2007 (DOI)", url:"https://doi.org/10.1080/01419870701599465"}],
    checked:"2026-11"},

   {id:"diaspora", title:"Diaspora", aka:["diasporas","Safran’s criteria","Cohen’s types","diaspora engagement","diaspora bonds"], tags:["migration","diaspora"],
    summary:"Communities dispersed across borders who keep an orientation to a homeland and a lasting distinct identity; also a claim made by people, leaders and states.",
    levels:{
     starter:[
      "A **diaspora** is a community of people living outside an ancestral homeland, often in several countries, who keep a sense of connection to that homeland and to each other over a long time. The word comes from Greek for “scattering”, as in sowing seeds.",
      "Classic examples are the Jewish, Armenian, Greek and African diasporas. Today the word is used much more widely: Indian, Chinese, Filipino, Irish, Lebanese, Somali, Tongan and many more.",
      "Not everyone with roots abroad feels part of a diaspora. Some people feel deeply connected; others feel simply at home where they live.",
      "Many origin countries now reach out to their diasporas, with offices, voting from abroad, dual citizenship, investment schemes and cultural programmes.",
      {key:"A diaspora is about lasting ties across borders to a homeland and to each other, and it is also a label people choose, or don’t."}
     ],
     builder:[
      "Three definitions shape the field. **William Safran** (1991, in the first issue of *Diaspora*) listed features such as dispersal from a centre to two or more regions; a collective memory or myth of the homeland; a feeling of not being fully accepted; the homeland as an ideal place of eventual return; commitment to the homeland’s maintenance or restoration; and a continuing relationship with it.",
      "**Robin Cohen** (*Global Diasporas*, 1997; later editions) argued that dispersal could also be for work, trade or empire, and described ideal types: **victim** (Jewish, African, Armenian), **labour** (Indian indentured workers), **imperial** (British), **trade** (Chinese, Lebanese) and, in the second edition (2008), **deterritorialised** (for example Caribbean peoples).",
      "**Rogers Brubaker** (“The ‘diaspora’ diaspora”, 2005) found three core elements in most definitions (**dispersion**, **homeland orientation** and **boundary maintenance**) and urged treating diaspora as a stance or claim rather than a bounded group.",
      "**Diaspora engagement** by origin states includes institutions such as the Philippines’ Commission on Filipinos Overseas (1980) and Mexico’s Institute for Mexicans Abroad (2003); India’s Pravasi Bharatiya Divas (first held 2003) and Overseas Citizenship of India; diaspora bonds (Israel since 1951; India in 1991, 1998 and 2000); [[dual-citizenship]] and external voting. The African Union invites the diaspora into its work as Africa’s “sixth region”."
     ],
     pro:[
      "Safran’s list was criticised for taking the Jewish experience as the ideal type and for the “return” criterion, which many groups don’t share; Cohen’s and Brubaker’s work responded to that. Brubaker warned against **groupism**: treating “the diaspora” as a unitary actor, when in practice community leaders, organisations and governments make diaspora claims, often to mobilise loyalty, money or votes, and many people of the same origin don’t share them.",
      "Alan Gamlen (*International Migration Review*, 2014) showed that diaspora institutions had become common worldwide and argued that national-interest explanations alone can’t account for their spread, pointing to emerging global governance of migration. Motives range from protecting emigrants’ rights to attracting remittances, investment and skills, to cultivating political support.",
      "Engagement has a darker side: researchers and human rights organisations have documented **transnational repression**, in which governments monitor, threaten or harass critics abroad. Diasporas also act on their own: funding disaster relief, development projects, political movements and, in conflicts, both armed groups and peacebuilding; Smith and Stares’s volume *Diasporas in Conflict: Peace-Makers or Peace-Wreckers?* (UN University Press, 2007) framed the debate.",
      "Analytically, “diaspora” overlaps with transnationalism but stresses long-term identity and homeland orientation, often across generations, while transnationalism stresses everyday cross-border ties, which may be short-lived."
     ]
    },
    related:["transnationalism","return-migration","remittances","citizenship","the-state"],
    read:[{book:"imis", where:"Chapter 15 “Transnationalism”"},{book:"imis", where:"Chapter 19 “Migration and Development”"}],
    sources:[{t:"Safran, “Diasporas in Modern Societies: Myths of Homeland and Return”, Diaspora 1(1), 1991 (DOI)", url:"https://doi.org/10.1353/dsp.1991.0004"},{t:"Brubaker, “The ‘diaspora’ diaspora”, Ethnic and Racial Studies 28(1), 2005 (DOI)", url:"https://doi.org/10.1080/0141987042000289997"},{t:"Gamlen, “Diaspora Institutions and Diaspora Governance”, International Migration Review 48(S1), 2014 (DOI)", url:"https://doi.org/10.1111/imre.12136"}],
    checked:"2026-11"},

   {id:"return-migration", title:"Return migration", aka:["return","returnees","reintegration","Cerase’s types","assisted voluntary return"], tags:["migration","return"],
    summary:"Movement back to a country or place of origin after time abroad: its forms, the theories that give it different meanings, and the challenges of reintegration.",
    levels:{
     starter:[
      "**Return migration** means moving back to your country, or place, of origin after spending a significant time elsewhere. It is common, and it takes many forms: retiring back home, coming back after studies, returning after saving enough, being sent back against one’s will, or refugees going home when it is safe.",
      "Return isn’t always the end of the story. Many people go back and forth (circular migration), and some return and then leave again.",
      "Return can be hard. Savings run out, qualifications earned abroad may not be recognised, family and friends have changed, and children raised abroad may not feel at home in their parents’ country.",
      {key:"Return has many forms and meanings: a failure, a planned success, a new beginning, or one step in a life that spans places."}
     ],
     builder:[
      "Jean-Pierre Cassarino (2004) compared how theories understand return. **Neoclassical** economics tends to see it as the result of a failed migration (expected earnings didn’t materialise). The **new economics of labour migration** sees it as a planned success after reaching a savings or family target. **Structural** approaches stress conditions at home that decide whether returnees can use what they bring. **Transnational** and **network** approaches see return as part of ongoing ties.",
      "Francesco Cerase’s 1974 study of Italians returning from the United States proposed four types:",
      {table:[["Type","Meaning"],["Return of failure","Couldn’t settle or find work abroad"],["Return of conservatism","Saved to buy land or a house and fit back into old ways"],["Return of innovation","Brings new ideas and skills, often meeting resistance"],["Return of retirement","Returns at the end of working life"]]},
      "Forms of return differ in choice: **voluntary**; **assisted voluntary return and reintegration** programmes run by IOM and governments; **forced** return (deportation); and refugees’ **voluntary repatriation**, one of the three [[durable-solutions]]. Skilled return can bring [[brain-gain]]: AnnaLee Saxenian’s *The New Argonauts* (2006) traced engineers linking Silicon Valley with Taiwan, Israel, China and India.",
      "Reintegration is the process of settling back in: finding work, housing and social ties, and sometimes overcoming stigma. Support programmes may offer counselling, training or small business grants, with mixed evidence on how much they help."
     ],
     pro:[
      "Defining return is harder than it looks. Statistics often miss it, because many countries record departures poorly and returning citizens may not be counted as migrants at all ({{measuring-migration}}). “Return” is also used for descendants moving to an ancestral homeland they have never lived in, sometimes under special laws such as Israel’s Law of Return (1950) or Germany’s admission of ethnic German resettlers from the former Soviet Union; researchers call this ethnic or ancestral return migration.",
      "Reintegration has economic, social and psychosocial dimensions. Research on forced returnees highlights debt, stigma, lost networks and sometimes danger, and questions whether short reintegration packages can make return “sustainable”. Gender matters too: women returning from domestic work abroad may face different expectations than men returning from construction work.",
      "Return is entangled with policy. Destination states promote return to reduce irregular stays; origin states may court skilled returnees with tax breaks and recognition schemes, as with China’s programmes for returnees, nicknamed *haigui* (“sea turtles”), or discourage it when remittances matter more. The idea that return automatically brings development is contested: what returnees can achieve depends on the conditions they return to, as structural approaches emphasise.",
      "For refugees, international law makes return voluntary in principle and protected by [[non-refoulement]]; debates focus on when conditions count as safe enough and how voluntary a return really is when support elsewhere is withdrawn."
     ]
    },
    related:["diaspora","transnationalism","why-people-move","refugee-law","second-generation"],
    read:[{book:"imis", where:"Chapter 6 “Migration Forms: What Forms of Migration Can Be Distinguished?”"},{book:"imis", where:"Chapter 19 “Migration and Development”"}],
    sources:[{t:"Talleraas, “Migration Forms: What Forms of Migration Can Be Distinguished?”, in Introduction to Migration Studies, 2022, Chapter 6 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_6"},{t:"Ullah, “Migration and Development”, in Introduction to Migration Studies, 2022, Chapter 19 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_19"}],
    checked:"2026-11"},

   {id:"migration-narratives", title:"Migration narratives, framing and xenophobia", aka:["media framing of migration","public opinion on migration","xenophobia","othering","contact hypothesis"], tags:["migration","media","public opinion"],
    summary:"How stories and frames shape what people think about migration, what research says drives attitudes, and how xenophobia and othering work.",
    levels:{
     starter:[
      "Most people form their picture of migration from stories: news, politicians’ speeches, films, social media and conversations. Those stories use **frames**: they choose what to show and suggest what it means.",
      "The same fact can be framed as a threat (“pressure on our borders”), an economic issue (“costs” or “workers we need”), a humanitarian issue (“fleeing danger”) or a human story (“meet the new town nurse”). Words matter: “flood” and “wave” make people sound like a natural disaster.",
      "People often overestimate how many immigrants live in their country. Meeting people as equals tends to reduce prejudice.",
      "**Xenophobia** is fear or hostility towards people seen as foreigners. It often rests on **othering**: describing a group as completely different from “us”, as a mass rather than individuals.",
      {key:"Ask of any migration story: what frame is this, who is speaking, who is missing, and where do the numbers come from?"}
     ],
     builder:[
      "Robert Entman (1993) defined framing as selecting some aspects of reality and making them more salient, to promote a particular problem definition, causal interpretation, moral evaluation and treatment recommendation. Common migration frames are **threat or security**, **economic**, **humanitarian** and **human interest**; security framing links to [[securitization]].",
      "Eberl and colleagues (2018), reviewing European research, found migrants often under-represented as speakers in news about them, frequent conflict and threat framing, and evidence that coverage influences attitudes and voting.",
      "On attitudes, Hainmueller and Hopkins (2014) found that personal economic circumstances show little link with views on immigration; **sociotropic** concerns about the nation’s culture and, to a lesser extent, its economy matter more (evidence mainly from North America and Western Europe). Alesina, Miano and Stantcheva (2023) found that people in six rich countries greatly overestimated the share of immigrants and misjudged their characteristics; giving them the true figures did not change their support for redistribution. Research by James Dennison and others suggests attitudes change slowly while the **salience** of the issue moves quickly.",
      "Allport’s **contact hypothesis** (1954) proposed that contact under conditions such as equal status, common goals and institutional support reduces prejudice; Pettigrew and Tropp’s 2006 meta-analysis of more than 500 studies found contact typically does.",
      "Governments in the 2018 Global Compact for Migration committed (Objective 17) to eliminate discrimination and promote evidence-based public discourse."
     ],
     pro:[
      "Xenophobia overlaps with but differs from [[racism]]: it targets perceived foreignness, which can cut across or combine with racial categories. The 2001 Durban World Conference against Racism, Racial Discrimination, Xenophobia and Related Intolerance treated them together. Cases from every region, including the May 2008 violence against foreign nationals in South Africa that killed at least 62 people, show it isn’t limited to the Global North, and internal migrants can be targeted too.",
      "Framing effects are real but conditional: they depend on prior attitudes, trust in the source, competing frames and repetition. Single vivid stories can shift perceived typicality of rare events; aggregate numbers without people can depersonalise. Both humanitarian and threat frames can deny agency, one by casting migrants as passive victims, the other as dangers.",
      "Studying narratives well means content analysis with clear coding rules, attention to who speaks, comparison across outlets and countries, and care in attributing effects: correlation between coverage and attitudes doesn’t settle causation without careful design (panels, experiments, natural experiments).",
      "Good practice for writers includes using precise legal terms ({{words-and-migration}}), giving source and year for every number, quoting migrants as experts on their own lives, and showing variety and agency. For readers, the toolkit of {{reading-world-news}} and {{lateral-reading}} applies directly."
     ]
    },
    related:["migration-impacts-evidence","words-and-migration","reading-world-news","prejudice-discrimination","integration-models"],
    read:[{book:"imis", where:"Chapter 23 “Public Opinion and the Politics of Migration”"}],
    sources:[{t:"Eberl et al., “The European media discourse on immigration and its effects: a literature review”, Annals of the International Communication Association 42(3), 2018 (DOI)", url:"https://doi.org/10.1080/23808985.2018.1497452"},{t:"Hainmueller and Hopkins, “Public Attitudes Toward Immigration”, Annual Review of Political Science 17, 2014 (DOI)", url:"https://doi.org/10.1146/annurev-polisci-102512-194818"},{t:"Dennison and Vrânceanu, “Public Opinion and the Politics of Migration”, in Introduction to Migration Studies, 2022, Chapter 23 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_23"}],
    checked:"2026-11"},

   {id:"migration-impacts-evidence", title:"Evidence on wages, public finances and crime", aka:["economic impact of immigration","fiscal impact of immigration","immigration and crime","Mariel boatlift"], tags:["migration","evidence","economics"],
    summary:"What major reviews find about migration’s effects on wages, public finances and crime, and why results differ by place, group, period and method.",
    levels:{
     starter:[
      "Arguments about migration often turn on three questions: does it lower wages, does it cost or benefit public budgets, and does it affect crime? Researchers have studied all three for decades.",
      "Major reviews generally find **small** average effects on wages and public finances, and in the United States no higher, often lower, crime among immigrants than among the native-born. But results vary with who arrives, where, when, and how the study is done.",
      "That variety is the main lesson. One study rarely settles anything, and claims that migration is “a huge drain” or “a huge boost” usually go beyond the evidence.",
      {key:"The careful answer is usually “it depends, and the average effect is smaller than the headlines suggest”: always check place, group, period and method."}
     ],
     builder:[
      {table:[["Question","Examples of major findings"],["Wages","US National Academies (2017): very small long-run effect on native-born wages overall; negative effects most likely for prior immigrants and native-born workers without a high-school diploma. UK Migration Advisory Committee (2018): little or no impact on UK-born workers’ overall employment; migration not a major determinant of their wages, with some evidence of small negative effects for the lower-skilled and positive effects for the higher-skilled"],["Public finances","OECD (2014): net fiscal impacts in OECD countries rarely exceed ±0.5% of GDP. US National Academies (2017): the first generation costs governments more than the native-born, largely through children’s education; the second generation are among the strongest fiscal contributors"],["Crime","Ousey and Kubrin (2018), meta-analysis of mainly US studies 1994–2014: immigration–crime association “negative—but very weak”. Bell, Fasani and Machin (2013), UK: a late-1990s/2000s asylum wave linked to a modest rise in property crime, the post-2004 EU accession wave to a small fall, neither to violent crime"]]},
      "Each finding is limited to its country, period and data. The UK crime study, for example, linked the difference between the two waves to the groups’ different labour market opportunities. And none of these findings speaks to every country: evidence from the Gulf, Africa, Asia and Latin America is growing but thinner, and conditions there can differ greatly."
     ],
     pro:[
      "The 1980 Mariel boatlift, when about 125,000 Cubans arrived in Miami, is the classic contested case. David Card (1990) found little effect on low-skilled wages; George Borjas (2017) reanalysed a narrower group of low-skilled non-Hispanic men and found large declines; Giovanni Peri and Vasil Yasenov (2019) argued that small subsamples and the way comparison cities were matched produced large measurement error, and found no significant wage difference. Borjas has defended his analysis. The debate turns on sample definitions, comparison groups and measurement error, which is why reviews weigh many studies.",
      "Fiscal estimates depend on accounting: whether children’s education is assigned to parents, whether public goods such as defence are treated as fixed or shared, the time horizon (static one-year snapshots versus lifetime projections), and the age, skills and admission route of migrants. Results for refugees in the first years, when employment is low, differ from those for labour migrants.",
      "Crime data reflect reporting, recording and policing as well as offending (the [[dark-figure-of-crime]]); age and sex structures differ between groups; and studies differ by unit (individuals, neighbourhoods, cities), period and design. In some European countries, registered-crime statistics show certain groups of migrants or their children over-represented. A Stockholm study by Martin Hällsten, Ryszard Szulkin and Jerzy Sarnecki (2013), following everyone who finished compulsory school there in 1990–93, found that parents’ socioeconomic resources and neighbourhood segregation explained between half and three-quarters of the gap for men, and more for women, sometimes all of it. That is one city and one period, and results elsewhere may differ.",
      "Evidence informs but cannot decide normative questions, such as how many people a country should admit or what obligations it owes refugees: these also involve values. Present findings with their limits, and be wary of selective citation by any side ({{misleading-numbers}})."
     ]
    },
    related:["migration-narratives","crime-statistics","misleading-numbers","remittances","economic-migration-theories"],
    sources:[{t:"National Academies of Sciences, Engineering, and Medicine, The Economic and Fiscal Consequences of Immigration (2017)", url:"https://www.nationalacademies.org/projects/DBASSE-CNSTAT-13-03/publication/23550"},{t:"OECD, “The Fiscal and Economic Impact of Migration”, policy brief, May 2014 (PDF)", url:"https://t4.oecd.org/migration/PB-Fiscal-Economic-Impact-Migration-May-2014.pdf"},{t:"Ousey and Kubrin, “Immigration and Crime: Assessing a Contentious Issue”, Annual Review of Criminology 1, 2018 (DOI)", url:"https://doi.org/10.1146/annurev-criminol-032317-092026"}],
    checked:"2026-11"},

   {id:"researching-migration-ethically", title:"Researching migration ethically", aka:["migration research ethics","refugee research ethics","do no harm","dual imperative"], tags:["migration","research ethics","methods"],
    summary:"The extra care migration research needs: situational vulnerability, real consent, safety and data protection, positionality, reciprocity, and questioning categories.",
    levels:{
     starter:[
      "Research with migrants can correct myths and improve services. It can also cause harm: a leaked name, address or detail about someone’s papers could lead to arrest, lost work or danger to relatives back home.",
      {list:[
        "**Ask only what you need.** Don’t ask about legal status unless it is essential and protected.",
        "**Make consent real**: explained in a language people understand, freely given, with the right to stop.",
        "**Protect people’s identities**, including small details that could identify someone in a small community.",
        "**Think about who you are** and how that shapes what people tell you.",
        "**Give something back** and share what you find."
      ]},
      "The Research Skills track covers ethics in depth ({{consent-process}}).",
      {key:"Migration research must first not harm, and should aim to benefit the people who make it possible."}
     ],
     builder:[
      "**Vulnerability** is often situational: insecure status, dependence on an employer or sponsor, detention, trauma or age can increase risks, without making people helpless ([[vulnerable-participants]]).",
      "**Consent** must be informed, voluntary and ongoing ([[informed-consent]]). Gatekeepers (employers, camp authorities, community leaders) can create pressure; recruiting through several routes helps. Where a signature could be risky, ethics committees may approve oral consent instead. Interpreters must also keep confidentiality.",
      "**Data**: minimise collection, avoid recording legal status unless essential, use [[pseudonymisation]], store securely, and consider indirect identifiers in quotes. Remember that people in origin countries can be affected too.",
      "**Positionality**: insiders may gain trust but face expectations; outsiders may miss meanings or be mistaken for officials. Practise [[reflexivity]] ({{qualitative-approach}}).",
      "Mackenzie, McDowell and Pittaway (2007) argued that refugee research must go **beyond “do no harm”**, building reciprocal relationships and involving participants as partners. Jacobsen and Landau (2003) discussed the **dual imperative**: refugee research should be both academically sound and policy-relevant, without cutting ethical or methodological corners.",
      "In practice this means planning ahead: getting approval from an [[ethics-review-board]] where required, preparing information sheets in the right languages, knowing where to refer people who need help, and deciding before you start what you will not ask."
     ],
     pro:[
      "Oliver Bakewell (2008) warned that research organised around policy categories (refugee, IDP, labour migrant) risks missing people who fall between them and reproducing the state’s view; “policy-irrelevant” questions can reveal more. This connects with critiques of methodological nationalism ({{transnationalism}}).",
      "Online and digital methods raise new issues: public posts are not automatically fair to quote, and location data or photos can identify people. Big data on mobility, from phones or satellites, can help humanitarian response but can also enable surveillance; data protection law treats some information, such as ethnic origin, as [[special-category-data]] requiring extra safeguards.",
      "Power runs through every stage: who sets the question, who is funded, whose knowledge counts, who is named as author. Participatory and co-produced research, with migrant organisations as partners, is one response, though it brings its own challenges of representation and time.",
      "Research can also be retraumatising. Interview guides should avoid unnecessary questions about painful events, offer breaks and support information, and respect silence. Results should be shared in accessible forms with the communities studied, and researchers should consider how findings could be used, including by authorities, before publishing. Researchers who are themselves migrants bring valuable insight and can face particular pressures, from community expectations to their own legal precarity."
     ]
    },
    related:["consent-process","research-ethics","qualitative-approach","anonymisation","migration-narratives"],
    read:[{book:"imis", where:"Chapter 25 “Qualitative Methods in Migration Research”"}],
    sources:[{t:"Mackenzie, McDowell and Pittaway, “Beyond ‘Do No Harm’: The Challenge of Constructing Ethical Relationships in Refugee Research”, Journal of Refugee Studies 20(2), 2007 (DOI)", url:"https://doi.org/10.1093/jrs/fem008"},{t:"Zapata-Barrero and Yalaz, “Qualitative Methods in Migration Research”, in Introduction to Migration Studies, 2022, Chapter 25 (DOI)", url:"https://doi.org/10.1007/978-3-030-92377-8_25"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"integration", term:"Integration (of migrants)", def:"The process by which newcomers become part of a society’s economy, institutions and social life; in most official definitions now, a two-way process in which the receiving society also adapts.", codex:"integration-models"},
   {id:"belonging", term:"Belonging", def:"Feeling at home somewhere and being accepted as part of a community. The “politics of belonging” is the debate over who counts as a member, and on what terms.", codex:"integration-models"},
   {id:"multiculturalism", term:"Multiculturalism", def:"A policy approach that publicly recognises and supports cultural diversity, with equal rights for all groups. Canada adopted it as official policy first, in 1971.", codex:"integration-models"},
   {id:"interculturalism", term:"Interculturalism", def:"An approach to diversity that stresses contact, exchange and interaction between groups around a shared civic core and public language.", codex:"integration-models"},
   {id:"civic-integration", term:"Civic integration", def:"Policies that require newcomers to take language and civic courses or tests, sometimes before arrival, as a condition of residence or citizenship.", codex:"integration-models"},
   {id:"acculturation", term:"Acculturation", def:"The changes that follow continuous first-hand contact between groups with different cultures, in either or both groups.", codex:"acculturation"},
   {id:"acculturation-strategies", term:"Acculturation strategies", def:"Berry’s four ways of combining a heritage culture with the wider society: integration (both), assimilation (wider society only), separation (heritage only) and marginalisation (neither).", codex:"acculturation"},
   {id:"second-generation", term:"Second generation", def:"People born in a country to parents who migrated there. Most have never migrated themselves.", codex:"second-generation"},
   {id:"one-point-five-generation", term:"1.5 generation", def:"People born abroad who migrated as children with or to join their parents, and grew up partly in the new country.", codex:"second-generation"},
   {id:"segmented-assimilation", term:"Segmented assimilation", def:"Portes and Zhou’s 1993 theory that children of immigrants follow different paths (upward, downward, or upward with community ties) depending on reception, policy, resources and local conditions.", codex:"segmented-assimilation"},
   {id:"selective-acculturation", term:"Selective acculturation", def:"Learning the new society’s language and ways while keeping key parts of the parents’ language and culture, supported by a co-ethnic community (Portes and Rumbaut, 2001).", codex:"segmented-assimilation"},
   {id:"transnationalism", term:"Transnationalism", def:"The processes by which migrants build social fields linking their places of origin and settlement, through money, communication, politics, care and ideas.", codex:"transnationalism"},
   {id:"transmigrant", term:"Transmigrant", def:"A migrant whose daily life depends on ties spanning borders: Glick Schiller, Basch and Szanton Blanc’s term for people who build transnational social fields.", codex:"transnationalism"},
   {id:"hometown-association", term:"Hometown association", def:"An organisation of migrants from the same town or region that raises money and organises projects, such as roads or schools, back home.", codex:"transnationalism"},
   {id:"social-remittances", term:"Social remittances", def:"Ideas, practices, identities and social connections that travel with migrants between communities (Levitt, 1998); they can flow in both directions.", codex:"transnationalism"},
   {id:"methodological-nationalism", term:"Methodological nationalism", def:"The habit in research of treating the nation-state as the natural container of social life, so that cross-border processes are overlooked (Wimmer and Glick Schiller, 2002).", codex:"transnationalism"},
   {id:"superdiversity", term:"Superdiversity", def:"Vertovec’s term (2007) for diversity shaped by many cross-cutting differences, such as origin, legal status, rights, skills, age and time since arrival, not just ethnicity.", codex:"transnationalism"},
   {id:"diaspora", term:"Diaspora", def:"A community dispersed across borders that keeps an orientation to a real or imagined homeland and a distinct identity over time; also a claim people and states make.", codex:"diaspora"},
   {id:"diaspora-engagement", term:"Diaspora engagement", def:"Policies and institutions through which origin states reach out to emigrants and their descendants, such as diaspora offices, external voting, dual citizenship and diaspora bonds.", codex:"diaspora"},
   {id:"return-migration", term:"Return migration", def:"Moving back to one’s country or place of origin after a significant time elsewhere, whether voluntary, assisted or forced.", codex:"return-migration"},
   {id:"migration-narrative", term:"Migration narrative", def:"A story that explains who migrants are, why they move and what it means, as told in media, politics or everyday talk.", codex:"migration-narratives"},
   {id:"contact-hypothesis", term:"Contact hypothesis", def:"Allport’s idea (1954) that contact between groups, under conditions such as equal status, shared goals and institutional support, reduces prejudice.", codex:"migration-narratives"},
   {id:"xenophobia", term:"Xenophobia", def:"Fear, dislike or hostility towards people seen as foreigners or outsiders. It overlaps with racism but is not the same.", codex:"migration-narratives"},
   {id:"othering", term:"Othering", def:"Describing a group as fundamentally different from “us” and as a single mass rather than individuals, which can make unfair treatment seem normal.", codex:"migration-narratives"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u12-q01", lesson:"e2u12-l1", level:1, q:"What central question do all models of integration answer differently?", options:[
     {t:"Who is expected to adapt to whom, how much, and in what?", ok:true, why:"Each model, from assimilation to interculturalism, gives a different answer to this question."},
     {t:"How many migrants a country should admit each year", why:"That is an admissions question, not what models of incorporation address."},
     {t:"Which country migrants come from", why:"Origin matters, but the models are about how newcomers and society adjust."},
     {t:"Whether migrants should be allowed to travel", why:"Travel rights are a border question, not the core of integration models."}]},
   {id:"e2u12-q02", lesson:"e2u12-l1", level:2, q:"A government announces: “Our schools will translate key notices, our employers must recognise foreign qualifications fairly, and newcomers will get free language classes.” Which model does this fit best?", options:[
     {t:"Integration as a two-way process", ok:true, why:"Both institutions and newcomers adapt: the hallmark of two-way integration."},
     {t:"Assimilation", why:"Assimilation expects only newcomers to change; here institutions adapt too."},
     {t:"Separation", why:"Separation is Berry’s term for keeping heritage while avoiding the wider society, not a government programme like this."},
     {t:"Marginalisation", why:"Marginalisation is exclusion from both cultures, the opposite of this policy’s aim."}]},
   {id:"e2u12-q03", lesson:"e2u12-l1", level:1, q:"Which country was the first to adopt multiculturalism as official policy, and when?", options:[
     {t:"Canada, in 1971", ok:true, why:"Correct. The Canadian Multiculturalism Act followed in 1988."},
     {t:"Australia, in 1951", why:"Australia adopted multicultural policies later, from the 1970s."},
     {t:"France, in 1905", why:"France is usually described as following a republican model, not official multiculturalism."},
     {t:"Germany, in 2005", why:"Germany introduced national integration courses in 2005, a civic integration measure."}]},
   {id:"e2u12-q04", lesson:"e2u12-l1", level:2, q:"Which is an example of civic integration?", options:[
     {t:"A newcomer must pass a language and civic knowledge test to get permanent residence.", ok:true, why:"Required courses or tests as a condition of residence or citizenship define civic integration."},
     {t:"A city funds a festival celebrating many cultures.", why:"Public support for cultural diversity is closer to multiculturalism."},
     {t:"Neighbours start a shared community garden.", why:"Everyday contact like this fits interculturalism’s emphasis on interaction, not a legal requirement."},
     {t:"A migrant sends money home.", why:"That is a remittance, a transnational tie, not an integration policy."}]},
   {id:"e2u12-q05", lesson:"e2u12-l1", level:3, q:"Priya reads: “Multiculturalism was abandoned across Europe after 2010.” What does the Multiculturalism Policy Index suggest?", options:[
     {t:"Despite leaders’ speeches, multicultural policies mostly held steady or grew in most Western democracies up to 2010, with exceptions such as the Netherlands.", ok:true, why:"The index measured laws and programmes and found the “retreat” was clearer in rhetoric than in policy."},
     {t:"The claim is exactly right for every country.", why:"The index found most countries did not abolish their policies."},
     {t:"Multiculturalism never existed in Europe.", why:"Several European countries had multicultural policies; the index tracked them."},
     {t:"The index shows multiculturalism caused the 2008 financial crisis.", why:"The index measures policies only and makes no such claim."}]},
   {id:"e2u12-q06", lesson:"e2u12-l1", level:1, q:"In Ager and Strang’s framework, which domain belongs to the “foundation” level?", options:[
     {t:"Rights and citizenship", ok:true, why:"Rights and citizenship form the foundation under the other levels."},
     {t:"Employment", why:"Employment is a marker and means, with housing, education and health."},
     {t:"Social bridges", why:"Bridges are social connections, with bonds and links."},
     {t:"Language and cultural knowledge", why:"These are facilitators, with safety and stability."}]},
   {id:"e2u12-q07", lesson:"e2u12-l1", level:3, q:"Two countries have identical scores on a migrant integration policy index, but migrants’ employment rates differ greatly between them. What is the best conclusion?", options:[
     {t:"Policy scores measure laws, not outcomes; something else, such as implementation, the economy or discrimination, may explain the difference.", ok:true, why:"Policies and outcomes can diverge, so the gap needs further investigation."},
     {t:"The policy index must be wrong.", why:"It may be accurate about laws; it simply doesn’t measure outcomes."},
     {t:"Employment has nothing to do with integration.", why:"Employment is one of the core markers and means of integration."},
     {t:"The country with lower employment has worse laws.", why:"The laws scored the same; the difference lies elsewhere."}]},
   {id:"e2u12-q08", lesson:"e2u12-l1", level:2, q:"Why do classic integration models fit poorly in several Gulf states?", options:[
     {t:"Most migrant workers there are on temporary, employer-tied contracts with very limited routes to citizenship, while the models assume settlement.", ok:true, why:"The models were built for countries expecting migrants to settle and become members."},
     {t:"There are very few migrants in Gulf states.", why:"Migrants make up a large share of the population and workforce in several Gulf states."},
     {t:"Gulf states have no laws about migration.", why:"They have detailed rules, including sponsorship systems."},
     {t:"Migrants there all become citizens quickly.", why:"Routes to citizenship are very limited, which is the point."}]},
   {id:"e2u12-q09", lesson:"e2u12-l1", level:2, q:"How did Alba and Nee (2003) reinterpret assimilation?", options:[
     {t:"As the fading over time of an ethnic difference that affects life chances, with the mainstream itself changing as newcomers join it", ok:true, why:"Their “new assimilation theory” rejects a one-way, forced picture."},
     {t:"As a policy the state should impose by banning minority languages", why:"They describe a social process, not a policy to impose."},
     {t:"As something that never happens", why:"They argued it happens for many families over generations."},
     {t:"As the same thing as multiculturalism", why:"Multiculturalism is a policy of recognising diversity; their concept is different."}]},
   /* ---- Lesson 2 ---- */
   {id:"e2u12-q10", lesson:"e2u12-l2", level:1, q:"According to the 1936 definition by Redfield, Linton and Herskovits, acculturation can change…", options:[
     {t:"either or both of the groups in contact", ok:true, why:"The classic definition explicitly allows change in both groups."},
     {t:"only the smaller group", why:"The definition says “either or both”."},
     {t:"only the larger group", why:"Again, the definition says “either or both”."},
     {t:"neither group, only individuals’ legal status", why:"Acculturation is about cultural change, not legal status."}]},
   {id:"e2u12-q11", lesson:"e2u12-l2", level:2, q:"Oluwaseun keeps strong ties to his parents’ language and festivals and is also active in his workplace union and local sports club. Which of Berry’s strategies fits best?", options:[
     {t:"Integration", ok:true, why:"He keeps his heritage culture and takes part in the wider society."},
     {t:"Assimilation", why:"He hasn’t given up his heritage culture."},
     {t:"Separation", why:"He takes an active part in the wider society."},
     {t:"Marginalisation", why:"He is connected to both cultures, not neither."}]},
   {id:"e2u12-q12", lesson:"e2u12-l2", level:2, q:"In Berry’s model, what does the wider society’s strategy called “exclusion” correspond to?", options:[
     {t:"Pushing people to the margins, corresponding to marginalisation", ok:true, why:"Berry pairs marginalisation on the individual side with exclusion on the society’s side."},
     {t:"Supporting both heritage and participation", why:"That is multiculturalism."},
     {t:"Expecting everyone to blend in", why:"That is the melting pot."},
     {t:"Forcing groups to live apart", why:"That is segregation."}]},
   {id:"e2u12-q13", lesson:"e2u12-l2", level:1, q:"Who are usually called the 1.5 generation?", options:[
     {t:"People born abroad who migrated as children", ok:true, why:"They grew up partly in each country; Rumbaut popularised the term."},
     {t:"People born in the destination to one migrant parent", why:"That describes a mixed-parentage second generation, not the 1.5 generation."},
     {t:"Migrants who stay for one and a half years", why:"The term refers to age at arrival, not length of stay."},
     {t:"Grandchildren of migrants", why:"They are usually called the third generation."}]},
   {id:"e2u12-q14", lesson:"e2u12-l2", level:3, q:"A report says children of Turkish-origin parents reach university far more often in one European country than another. Which explanation does TIES research make most plausible?", options:[
     {t:"Differences in national institutions, such as how early schools separate children into tracks", ok:true, why:"TIES linked cross-country differences for the same origin group to institutional context."},
     {t:"Turkish culture is different in each country.", why:"The origin group is similar; the study points to institutions, not culture."},
     {t:"The parents in one country care more about education.", why:"Nothing in the findings supports this generalisation."},
     {t:"It must be random chance.", why:"The differences were large and linked to institutional features."}]},
   {id:"e2u12-q15", lesson:"e2u12-l2", level:2, q:"Which is one of the three paths in Portes and Zhou’s segmented assimilation theory?", options:[
     {t:"Upward mobility while deliberately keeping the parents’ community ties and values", ok:true, why:"This is the third path, later called selective acculturation."},
     {t:"Immediate return to the parents’ country", why:"Return is not one of the three paths."},
     {t:"Automatic citizenship at age 18", why:"The paths concern social and economic outcomes, not legal rules."},
     {t:"Moving to a third country", why:"Onward migration is not one of the paths."}]},
   {id:"e2u12-q16", lesson:"e2u12-l2", level:2, q:"In segmented assimilation theory, the “mode of incorporation” includes…", options:[
     {t:"government policy towards the group, the wider society’s reception and the co-ethnic community", ok:true, why:"These three together shape the resources and obstacles children meet."},
     {t:"the type of transport migrants used to arrive", why:"How people travelled isn’t part of the concept."},
     {t:"the number of languages a child speaks", why:"Language matters, but it isn’t the definition of mode of incorporation."},
     {t:"the parents’ country’s population size", why:"This isn’t part of the concept."}]},
   {id:"e2u12-q17", lesson:"e2u12-l2", level:3, q:"Mei, born to immigrant parents, writes: “I hate being called a second-generation migrant.” Which response best reflects the lesson?", options:[
     {t:"She has a point: she never migrated, the label describes her parents’ history, and many people prefer other descriptions.", ok:true, why:"Researchers use the label for analysis, but it can misdescribe people who never moved."},
     {t:"She is wrong; anyone with migrant parents is a migrant.", why:"A migrant is someone who has moved; she hasn’t."},
     {t:"The label is a legal status she must accept.", why:"It is a research category, not a legal status."},
     {t:"Only first-generation people dislike labels.", why:"There is no evidence for this, and it dismisses her view."}]},
   {id:"e2u12-q18", lesson:"e2u12-l2", level:1, q:"Which critique of Berry’s model is accurate?", options:[
     {t:"People may combine cultures differently in different areas of life, and discrimination can limit their choices.", ok:true, why:"Both are standard critiques: strategies are domain-specific and not freely chosen."},
     {t:"The model ignores culture entirely.", why:"Culture is at the heart of the model."},
     {t:"The model only applies to tourists.", why:"It was developed for people in long-term contact, including immigrants."},
     {t:"The model says integration is impossible.", why:"It names integration as one of four strategies."}]},
   /* ---- Lesson 3 ---- */
   {id:"e2u12-q19", lesson:"e2u12-l3", level:1, q:"Glick Schiller, Basch and Szanton Blanc (1992) defined transnationalism as…", options:[
     {t:"the processes by which immigrants build social fields that link their country of origin and their country of settlement", ok:true, why:"This is close to their opening definition."},
     {t:"the movement of goods between countries", why:"That is trade; transnationalism is about migrants’ social fields."},
     {t:"the replacement of nation-states by a world government", why:"Transnationalism describes cross-border ties, not world government."},
     {t:"the decision to cut ties with home", why:"That is the “uprooted” picture they challenged."}]},
   {id:"e2u12-q20", lesson:"e2u12-l3", level:2, q:"Ana’s mother has never left their village, but she receives weekly video calls and money from Ana abroad, and sends back advice and food. In transnational terms, the mother is…", options:[
     {t:"part of a transnational social field, even though she has not migrated", ok:true, why:"Social fields include people who don’t move but take part in cross-border ties."},
     {t:"a transmigrant, because she migrated", why:"She hasn’t migrated."},
     {t:"outside migration studies entirely", why:"Transnational research explicitly includes such relatives."},
     {t:"an example of methodological nationalism", why:"That term names a research habit, not a person."}]},
   {id:"e2u12-q21", lesson:"e2u12-l3", level:2, q:"A returnee persuades her town’s council to publish its budget online, as her city abroad does. In Levitt’s terms this is mainly…", options:[
     {t:"a social remittance, of the “systems of practice” type", ok:true, why:"A new way of doing things, carried from abroad, is a system of practice."},
     {t:"a financial remittance", why:"No money is sent; an idea and practice travel."},
     {t:"brain drain", why:"Brain drain is the loss of skilled people, not the spread of a practice."},
     {t:"a hometown association", why:"A hometown association is an organisation; this is one person bringing back a practice."}]},
   {id:"e2u12-q22", lesson:"e2u12-l3", level:1, q:"What is methodological nationalism?", options:[
     {t:"Treating the nation-state as the natural container of social life in research", ok:true, why:"Wimmer and Glick Schiller (2002) named this habit."},
     {t:"A political movement for national independence", why:"That is nationalism or self-determination, not this research critique."},
     {t:"Collecting data only through national censuses", why:"Census use may reflect it, but the term names a broader assumption."},
     {t:"Studying only one’s own country’s history", why:"The critique is about assuming societies stop at borders, wherever you study."}]},
   {id:"e2u12-q23", lesson:"e2u12-l3", level:3, q:"A columnist claims: “Transnational ties are new; before the internet, migrants cut all links with home.” Which evidence best answers this?", options:[
     {t:"Foner’s comparison showing New York immigrants around 1900 sent money, travelled back and followed homeland politics", ok:true, why:"It shows the pattern is old; technology changed its speed and cost."},
     {t:"Vertovec’s work on superdiversity in London", why:"That concerns the complexity of diversity, not whether old migrants kept ties."},
     {t:"Berry’s acculturation grid", why:"Berry’s model is about combining cultures, not about historical cross-border ties."},
     {t:"Portes and Zhou on the second generation", why:"Their work concerns children’s paths, not historical ties to home."}]},
   {id:"e2u12-q24", lesson:"e2u12-l3", level:2, q:"Which statement about transnational ties and integration does research support?", options:[
     {t:"They can add up, reinforce each other or sometimes pull against each other, depending on the person and context.", ok:true, why:"Erdal and Oeppen (2013) describe this range of interactions."},
     {t:"Transnational ties always prevent integration.", why:"Research doesn’t find a simple trade-off."},
     {t:"Integrated migrants never keep ties with home.", why:"Many well-integrated people keep strong ties."},
     {t:"Only refugees keep transnational ties.", why:"All kinds of migrants can keep them."}]},
   {id:"e2u12-q25", lesson:"e2u12-l3", level:1, q:"Superdiversity, in Vertovec’s sense, refers to…", options:[
     {t:"diversity shaped by many cross-cutting variables, such as legal status, rights, skills, age and time since arrival, not just ethnicity", ok:true, why:"That “diversification of diversity” is his central point."},
     {t:"a city with more than a million people", why:"Size isn’t the definition."},
     {t:"diversity in the natural environment", why:"That is biodiversity."},
     {t:"a single large immigrant community", why:"It stresses complexity within and across groups."}]},
   {id:"e2u12-q26", lesson:"e2u12-l3", level:2, q:"Portes, Guarnizo and Landolt (1999) argued that “transnational” should be used for…", options:[
     {t:"regular, sustained cross-border activities, not every occasional contact", ok:true, why:"They wanted a stricter definition, and later surveys found regular activity among a minority."},
     {t:"any migrant at all", why:"They argued against stretching the term this far."},
     {t:"only multinational companies", why:"Their concern was migrants’ activities."},
     {t:"only people with dual citizenship", why:"Legal status wasn’t their criterion."}]},
   {id:"e2u12-q27", lesson:"e2u12-l3", level:3, q:"Sione, without secure legal status, hasn’t visited his family for eight years, while his cousin with citizenship visits every year. What point does this illustrate?", options:[
     {t:"Transnational lives depend on resources and rights, so they are unevenly shared.", ok:true, why:"Status and money shape who can keep ties in person."},
     {t:"Sione doesn’t care about his family.", why:"Nothing suggests this; his situation constrains him."},
     {t:"Transnationalism only applies to citizens.", why:"Ties exist in many forms, including calls and remittances, whatever one’s status."},
     {t:"Superdiversity makes travel impossible.", why:"Superdiversity is a description of diversity, not a cause of travel limits."}]},
   /* ---- Lesson 4 ---- */
   {id:"e2u12-q28", lesson:"e2u12-l4", level:1, q:"The Greek root of “diaspora” refers to…", options:[
     {t:"scattering, as in sowing seeds", ok:true, why:"From *diaspeirein*, “to scatter across”, from *speirein*, “to sow”."},
     {t:"a market", why:"The root is about scattering."},
     {t:"a ship’s voyage", why:"The root is about sowing and scattering."},
     {t:"a written law", why:"The root is about scattering."}]},
   {id:"e2u12-q29", lesson:"e2u12-l4", level:2, q:"Which of Cohen’s diaspora types best fits Chinese and Lebanese commercial networks across many countries?", options:[
     {t:"Trade diaspora", ok:true, why:"Cohen used these as examples of trade diasporas."},
     {t:"Victim diaspora", why:"Victim diasporas arise from catastrophe; Cohen classed these networks as trade."},
     {t:"Imperial diaspora", why:"Imperial diasporas follow colonial expansion, such as British settlers."},
     {t:"Labour diaspora", why:"Labour diasporas are formed by movement for work, such as indentured workers."}]},
   {id:"e2u12-q30", lesson:"e2u12-l4", level:1, q:"Which are Brubaker’s three core elements of diaspora?", options:[
     {t:"Dispersion, homeland orientation and boundary maintenance", ok:true, why:"These are the elements he found in most definitions."},
     {t:"Citizenship, wealth and language", why:"None of these is among his three elements."},
     {t:"Trade, empire and labour", why:"These resemble Cohen’s types, not Brubaker’s elements."},
     {t:"Return, failure and retirement", why:"These resemble Cerase’s types of return."}]},
   {id:"e2u12-q31", lesson:"e2u12-l4", level:3, q:"A government minister says: “Our diaspora of ten million stands united behind our policies.” What would Brubaker advise an analyst to do?", options:[
     {t:"Treat “diaspora” here as a claim: ask who is making it, for what purpose, and who among people of that origin disagrees or doesn’t identify with it.", ok:true, why:"Brubaker warned against treating a diaspora as a unified, countable group."},
     {t:"Accept the number and unity as facts.", why:"That is the “groupism” Brubaker cautioned against."},
     {t:"Ignore the claim because diasporas don’t exist.", why:"He doesn’t deny diasporas; he asks how the category is used."},
     {t:"Count only people who plan to return.", why:"Return isn’t one of his core elements."}]},
   {id:"e2u12-q32", lesson:"e2u12-l4", level:2, q:"Which is an example of diaspora engagement by an origin state?", options:[
     {t:"Selling bonds to emigrants to fund national projects", ok:true, why:"Diaspora bonds, used by Israel and India, are a classic tool."},
     {t:"A destination city opening a welcome centre", why:"That is integration by the destination, not engagement by the origin state."},
     {t:"A migrant joining a local choir", why:"That is a personal social tie, not state policy."},
     {t:"A company hiring foreign engineers", why:"That is recruitment by an employer, not diaspora engagement."}]},
   {id:"e2u12-q33", lesson:"e2u12-l4", level:2, q:"How does the new economics of labour migration tend to interpret return?", options:[
     {t:"As a planned success, after reaching a savings or family target", ok:true, why:"NELM sees migration as a household strategy with goals."},
     {t:"As proof that migration failed", why:"That is closer to the neoclassical view."},
     {t:"As impossible", why:"NELM expects many migrants to return."},
     {t:"As always forced", why:"NELM focuses on planned, voluntary return."}]},
   {id:"e2u12-q34", lesson:"e2u12-l4", level:2, q:"Dmitri saved for years abroad, then returned to buy land and farm in his home village, living much as his family always had. Which of Cerase’s types is this?", options:[
     {t:"Return of conservatism", ok:true, why:"Saving to fit back into the old way of life is Cerase’s return of conservatism."},
     {t:"Return of innovation", why:"He isn’t trying to change local practices."},
     {t:"Return of failure", why:"He reached his goal; he didn’t fail to settle abroad."},
     {t:"Return of retirement", why:"He returns to work the land, not at the end of his working life."}]},
   {id:"e2u12-q35", lesson:"e2u12-l4", level:3, q:"Hana, raised abroad, moves to her parents’ home country and struggles with the language and with having her degree recognised. What does this show?", options:[
     {t:"“Return” can be to a place someone has never lived, and reintegration, or integration, can be hard even for people of that origin.", ok:true, why:"Ancestral return and reintegration difficulties are both covered in the lesson."},
     {t:"Return migration is always easy for descendants.", why:"Her experience shows the opposite."},
     {t:"She isn’t a migrant at all.", why:"She has moved countries, so she is migrating."},
     {t:"Degrees are always recognised in a parent’s country.", why:"Recognition of qualifications is a common problem."}]},
   {id:"e2u12-q36", lesson:"e2u12-l4", level:1, q:"Which criticism was made of Safran’s 1991 checklist?", options:[
     {t:"It was modelled closely on the Jewish experience, and many groups don’t share features such as a wish to return.", ok:true, why:"Critics noted few groups fit every point, especially the return criterion."},
     {t:"It ignored the homeland completely.", why:"Homeland memory and orientation run through his list."},
     {t:"It was written in 2015.", why:"It appeared in 1991, in the journal’s first issue."},
     {t:"It defined diaspora only by wealth.", why:"Wealth isn’t one of his features."}]},
   /* ---- Lesson 5 ---- */
   {id:"e2u12-q37", lesson:"e2u12-l5", level:1, q:"In the six-country study by Alesina, Miano and Stantcheva, how did people’s estimates of the immigrant share compare with reality?", options:[
     {t:"They greatly overestimated it.", ok:true, why:"In all six countries, respondents overestimated the share of immigrants."},
     {t:"They guessed almost exactly.", why:"Their estimates were far too high."},
     {t:"They greatly underestimated it.", why:"The error went the other way."},
     {t:"The study didn’t ask.", why:"This was a central question of the study."}]},
   {id:"e2u12-q38", lesson:"e2u12-l5", level:2, q:"A headline reads: “Wave of arrivals swamps local services.” Which framing device is most obvious?", options:[
     {t:"Water metaphors that present people as a natural disaster", ok:true, why:"“Wave” and “swamps” frame migration as an overwhelming force."},
     {t:"A human interest story about one person", why:"No individual is mentioned."},
     {t:"A sourced statistic with a year", why:"The headline gives no figures or sources."},
     {t:"A quotation from a migrant", why:"No one is quoted."}]},
   {id:"e2u12-q39", lesson:"e2u12-l5", level:1, q:"According to Entman (1993), framing works by…", options:[
     {t:"selecting some aspects of reality and making them more salient, to promote a problem definition, cause, moral judgement and remedy", ok:true, why:"This is his widely cited definition."},
     {t:"printing every available fact equally", why:"Framing is about selection and emphasis."},
     {t:"only using false information", why:"Frames can be built entirely from true details."},
     {t:"putting pictures in frames", why:"The term is a metaphor for selection and emphasis."}]},
   {id:"e2u12-q40", lesson:"e2u12-l5", level:2, q:"What did Pettigrew and Tropp’s 2006 meta-analysis of more than 500 studies find?", options:[
     {t:"Intergroup contact typically reduces prejudice.", ok:true, why:"This is the main finding, supporting Allport’s contact hypothesis."},
     {t:"Contact always increases prejudice.", why:"The overall finding was the opposite."},
     {t:"Contact has no measurable effect.", why:"They found a consistent effect."},
     {t:"Only online contact matters.", why:"The studies covered many kinds of contact."}]},
   {id:"e2u12-q41", lesson:"e2u12-l5", level:3, q:"Tomás reads: “Study proves immigration destroys wages.” The article cites a single reanalysis of the 1980 Mariel boatlift. What is the most careful response?", options:[
     {t:"The Mariel case is contested: different researchers using different samples reached different results, and broad reviews such as the US National Academies’ find very small overall long-run effects.", ok:true, why:"One contested study can’t prove a general claim; reviews weigh many studies."},
     {t:"The headline is proven, because the study is about a real event.", why:"A real event can still be analysed in disputed ways."},
     {t:"Wages can never be affected by anything.", why:"Wages respond to many things; the question is size and who is affected."},
     {t:"Any study about Miami is irrelevant.", why:"It is relevant evidence, just not the final word."}]},
   {id:"e2u12-q42", lesson:"e2u12-l5", level:2, q:"Which statement about xenophobia is accurate?", options:[
     {t:"It is hostility towards people seen as foreigners; it overlaps with racism but is not identical, and it occurs in every region.", ok:true, why:"The 2001 Durban conference named them together; cases such as South Africa in 2008 show it isn’t limited to one region."},
     {t:"It exists only in rich countries.", why:"Xenophobic violence has occurred in many regions, including South Africa in 2008."},
     {t:"It is exactly the same as racism.", why:"It targets perceived foreignness, which can cut across racial categories."},
     {t:"It is a legal status.", why:"It is an attitude and behaviour, not a status."}]},
   {id:"e2u12-q43", lesson:"e2u12-l5", level:2, q:"According to the OECD’s 2014 summary, the net fiscal impact of immigration in OECD countries is usually…", options:[
     {t:"small, rarely more than 0.5% of GDP in either direction", ok:true, why:"That is the brief’s finding, which depends on factors such as age and employment."},
     {t:"a cost of more than 10% of GDP", why:"Estimates were far smaller."},
     {t:"a gain of more than 10% of GDP", why:"Estimates were far smaller in both directions."},
     {t:"impossible to estimate", why:"It can be estimated, with careful accounting choices."}]},
   {id:"e2u12-q44", lesson:"e2u12-l5", level:3, q:"A student plans to interview workers at a factory and asks the manager to choose participants and sit in on interviews. What is the main ethical problem?", options:[
     {t:"The manager’s power undermines voluntary consent and confidentiality; workers may feel unable to refuse or speak freely.", ok:true, why:"Gatekeeper pressure is a key risk in migration research, especially for workers tied to employers."},
     {t:"There is no problem, because the manager knows the workers best.", why:"Knowing the workers doesn’t remove the pressure created by power over their jobs."},
     {t:"Interviews should never be used in research.", why:"Interviews are a standard method; the problem is how this one is set up."},
     {t:"The problem is only that the interviews might be too long.", why:"Length matters less than consent and confidentiality here."}]},
   {id:"e2u12-q45", lesson:"e2u12-l5", level:2, q:"What did Mackenzie, McDowell and Pittaway (2007) argue about refugee research?", options:[
     {t:"It should go beyond “do no harm”, building respectful, reciprocal relationships and involving refugees as partners.", ok:true, why:"That is the argument of “Beyond ‘Do No Harm’”."},
     {t:"Refugees should never be researched.", why:"They argued for better research relationships, not for no research."},
     {t:"Consent isn’t needed in emergencies.", why:"They called for more care, not less."},
     {t:"Researchers should only use government records.", why:"Their focus was on ethical relationships with participants."}]}
  ]
});
