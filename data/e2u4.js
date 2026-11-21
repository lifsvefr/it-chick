/* Social Science Primers · Sociology Unit 4 · Institutions and social change */
ICA.addUnit({
  id:"e2u4", track:"e2", n:4, title:"Institutions and social change", icon:"🏛️",
  blurb:"The big structures every society builds to meet its needs (family, education, religion, government, the economy, health care and the media) and the forces that change them: population, ageing, cities, the environment, technology, algorithms and AI, and social movements.",
  goals:[
    "Explain what a social institution is and how family and education shape life chances",
    "Analyse religion, power and forms of government with Durkheim’s, Weber’s and Marx’s ideas, without taking sides",
    "Compare economic systems, describe how work is changing, and explain why health is shaped by society",
    "Calculate simple population rates, read the demographic transition model critically, and explain urbanization and environmental justice",
    "Use the life-course perspective and dependency ratios to compare how societies handle ageing, care and pensions",
    "Explain how media, technology and social movements change societies, using the main sociological theories",
    "Analyse algorithms, platform work, surveillance and border technologies as social systems, presenting the debates fairly"
  ],
  read:[
    {book:"soc", where:"Chapter 14 “Marriage and Family”, Chapter 15 “Religion”, Chapter 16 “Education”, Chapter 17 “Government and Politics”, Chapter 18 “Work and the Economy”, Chapter 19 “Health and Medicine”, Chapter 20 “Population, Urbanization, and the Environment”, Chapter 13 “Aging and the Elderly”, Chapter 21 “Social Movements and Social Change” and Chapter 8 “Media and Technology”", note:"Section numbers here follow the OpenStax website. The LibreTexts copy adds an “Introduction” page as x.1, so its section numbers are one higher (OpenStax 14.1 is LibreTexts 14.2). Many examples are from the United States; the lessons add examples from around the world."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u4-l1", title:"Social institutions: family and education", minutes:55,
   hook:{q:"In Arlie Hochschild’s research on US married couples where both husband and wife had paid jobs, who did most of the housework?", options:["The men","The women","Both partners, equally","Paid cleaners"], answer:1, reveal:"**The women**, mostly. Hochschild called it “the second shift”: a second job waiting after the paid one. Families organise work, money and care in patterns sociologists can study. This lesson looks at how families are built in different societies. Then it turns to school, the other institution most people grow up inside."},
   goals:[
     "Explain what a social institution is and how institutions depend on each other",
     "Compare family forms, kinship systems and marriage patterns across cultures",
     "Tell education’s manifest functions from its latent ones and spot the hidden curriculum",
     "Explain how credentialism and tracking can turn school into a sorting machine, using several sociological lenses"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Read Chapter 14 “Marriage and Family”, sections **14.1** “What Is Marriage? What Is a Family?” and **14.2** “Variations in Family Life”, then Chapter 16 “Education”, sections **16.1** “Education around the World”, **16.2** “Theoretical Perspectives on Education” and **16.3** “Issues in Education”. (On LibreTexts these are 14.2–14.3 and 16.2–16.4.) Family and school are the first institutions most people grow up inside. They shape life chances long before work begins.",
      {look:[
        "What makes a group a family, and how do marriage patterns, residence rules and lines of descent differ between societies? (14.1)",
        "Which family forms are becoming more common, and how does the family life course differ from the family life cycle? (14.1, 14.2)",
        "What does universal access mean, and why does access to schooling still differ between and within countries? (16.1, 16.3)",
        "What are education’s manifest and latent functions, and how do the other lenses explain tracking, cultural capital, the hidden curriculum and credentialism? (16.2)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "A [[social-institution|social institution]] is a lasting pattern of roles, rules and organizations that meets a basic need. Examples are family, education, religion, government, the economy, health care and media. A school is an organization; education is the institution. Institutions depend on each other: when factory work replaced farm work, families shrank and schooling grew longer. (14.1, 21.3)",
        "A [[family]] is a socially recognized group joined by blood, marriage or adoption that shares emotional ties and works as an economic unit. You are born into a **family of orientation** and may form a **family of procreation**. A [[nuclear-family|nuclear family]] is parents and children; an [[extended-family|extended family]] adds other relatives. (14.1)",
        "[[kinship|Kinship]] is traced differently: through both parents (bilateral), the father ([[patrilineal]]) or the mother ([[matrilineal]]). A new couple may live with the husband’s family (patrilocal) or the wife’s (matrilocal). (14.1)",
        "[[monogamy|Monogamy]] is one spouse at a time, the only legal form in most countries. [[polygamy|Polygamy]] has two forms: [[polygyny]] (one man, several wives) and the rare [[polyandry]] (one woman, several husbands). (14.1)",
        "Families are diversifying: more cohabitation, single parents, same-sex couples and people staying single. The flexible **family life course** has largely replaced the fixed stages of the **family life cycle**. (14.1, 14.2)",
        "Functionalists split education’s functions into two kinds. Its intended [[manifest-function|manifest functions]] are socialization, cultural transmission, social control, social placement and cultural innovation. Its unintended [[latent-function|latent functions]] are courtship, social networks, group work, a generation gap, and political and social integration. (16.2)",
        "Conflict theorists point to [[tracking]], biased tests, the [[hidden-curriculum|hidden curriculum]] (unspoken lessons such as obeying bells) and [[cultural-capital|cultural capital]] (Pierre Bourdieu). They argue these let schools pass on advantage while looking neutral. Interactionists show how labels become a **self-fulfilling prophecy**, and discuss [[credentialism]]. (16.2)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 404"><g class="d-soft" stroke-width="1.5"><path d="M170 210 L170 40"/><path d="M170 210 L262 112"/><path d="M170 210 L272 232"/><path d="M170 210 L236 330"/><path d="M170 210 L104 330"/><path d="M170 210 L68 232"/><path d="M170 210 L78 112"/><path d="M170 40 L262 112 L272 232 L236 330 L104 330 L68 232 L78 112 Z" stroke-dasharray="4 4"/></g><circle class="d-panel" cx="170" cy="210" r="40" stroke-width="2"/><text x="170" y="215" text-anchor="middle">Society</text><rect class="d-rose" x="110" y="20" width="120" height="40" rx="8" stroke-width="2"/><text x="170" y="37" text-anchor="middle">Family</text><text class="s" x="170" y="53" text-anchor="middle">care, kinship</text><rect class="d-lup" x="202" y="92" width="120" height="40" rx="8" stroke-width="2"/><text x="262" y="109" text-anchor="middle">Education</text><text class="s" x="262" y="125" text-anchor="middle">knowledge, skills</text><rect class="d-gold" x="212" y="212" width="120" height="40" rx="8" stroke-width="2"/><text x="272" y="229" text-anchor="middle">Economy</text><text class="s" x="272" y="245" text-anchor="middle">goods, services</text><rect class="d-sage" x="176" y="310" width="120" height="40" rx="8" stroke-width="2"/><text x="236" y="327" text-anchor="middle">Government</text><text class="s" x="236" y="343" text-anchor="middle">order, decisions</text><rect class="d-rose" x="44" y="310" width="120" height="40" rx="8" stroke-width="2"/><text x="104" y="327" text-anchor="middle">Health care</text><text class="s" x="104" y="343" text-anchor="middle">wellbeing</text><rect class="d-lup" x="8" y="212" width="120" height="40" rx="8" stroke-width="2"/><text x="68" y="229" text-anchor="middle">Religion</text><text class="s" x="68" y="245" text-anchor="middle">meaning, ritual</text><rect class="d-gold" x="18" y="92" width="120" height="40" rx="8" stroke-width="2"/><text x="78" y="109" text-anchor="middle">Media</text><text class="s" x="78" y="125" text-anchor="middle">information</text><text class="s" x="170" y="378" text-anchor="middle">Dashed ring: a change in one institution</text><text class="s" x="170" y="394" text-anchor="middle">pushes on its neighbours.</text></svg>', alt:"Seven institutions (family, education, economy, government, health care, religion, media) arranged in a ring around society, each linked to the centre and to its neighbours.", cap:"Institutions are connected. When factory work replaced farm work, families got smaller, schooling got longer and governments took on new jobs such as pensions."},
      {fig:'<svg viewBox="0 0 340 326"><defs><marker id="e2u4-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="8" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="29" text-anchor="middle">An early test or judgement</text><text class="s" x="148" y="47" text-anchor="middle">often reflects home advantages</text><path class="d-ink" d="M148 60 L148 84" stroke-width="2" marker-end="url(#e2u4-l1-a)"/><rect class="d-rose" x="8" y="86" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="107" text-anchor="middle">Placed in a lower track</text><text class="s" x="148" y="125" text-anchor="middle">the label sticks</text><path class="d-ink" d="M148 138 L148 162" stroke-width="2" marker-end="url(#e2u4-l1-a)"/><rect class="d-gold" x="8" y="164" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="185" text-anchor="middle">Easier work, lower expectations</text><text class="s" x="148" y="203" text-anchor="middle">fewer chances to catch up</text><path class="d-ink" d="M148 216 L148 240" stroke-width="2" marker-end="url(#e2u4-l1-a)"/><rect class="d-sage" x="8" y="242" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="263" text-anchor="middle">Lower results</text><text class="s" x="148" y="281" text-anchor="middle">“the placement was right”</text><path class="d-ink" d="M290 267 L314 267 L314 33 L291 33" fill="none" stroke-width="2" marker-end="url(#e2u4-l1-a)"/><text class="s" x="148" y="316" text-anchor="middle">a self-fulfilling prophecy</text></svg>', alt:"Four boxes stacked top to bottom, joined into a loop: an early test leads to placement in a lower track, which brings easier work and lower expectations, which produces lower results; an arrow runs back up to the top, as the results seem to confirm the original judgement.", cap:"How tracking can become a loop. Supporters argue tracking lets teaching match pupils’ levels; critics point to this loop."}
    ]},
    {h:"Key terms", body:[ {terms:["social-institution","family","nuclear-family","extended-family","kinship","matrilineal","polygamy","hidden-curriculum","credentialism","tracking","cultural-capital"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Family lenses.** The book’s family sections lean on functionalism and interactionism. Others: George Murdock’s survey of 250 societies gave the family four functions (sexual, reproductive, educational, economic). Conflict theorists note the partner with more income often has more say. Feminist research such as Arlie Hochschild’s “The Second Shift” (1989) shows employed women in the US still doing most housework. Interactionists study changing meanings such as “good father” or “chosen family”.\n\n**Beyond the US.** Bilateral descent is common in Europe, the Americas and the Philippines. The Minangkabau (Indonesia) and Khasi (India) are matrilineal. Most city couples live **neolocally**, in their own home. Extended households are common in South Asia, Africa, Latin America and the Pacific (the Samoan ‘aiga). Migration creates skipped-generation homes, where grandparents raise children. Tracking is called streaming or setting in some countries.\n\n**Named critics.** Philip Jackson popularized “hidden curriculum” (1968); Bowles and Gintis (1976) said it prepares pupils for different places in the workforce. Randall Collins (“The Credential Society”, 1979) argued that rising degree demands reflect competition for status more than skill. This is a conflict-style reading of credentialism. UNESCO finds the largest access gaps in low-income countries."}
    ]}
   ],
   try:[
    {id:"e2u4-l1-x1", type:"mcq", q:"Kenji says: “My local university is a social institution.” A sociologist would gently correct him. What is the most accurate version?", options:[
      {t:"The university is an organization; education is the institution it belongs to.", ok:true, why:"Right. An institution is the society-wide pattern of roles and rules (teachers, students, exams, qualifications). A single university is one organization working inside it."},
      {t:"He’s right: any large building with a public purpose is an institution.", why:"Sociologists don’t define institutions by buildings. Education would still be an institution if every class moved online."},
      {t:"Only governments count as institutions; universities are private bodies.", why:"Family, religion, the economy and education are all institutions, whoever runs the organizations inside them."},
      {t:"Universities aren’t part of any institution because they’re optional.", why:"Being optional doesn’t matter. The pattern of higher education still meets a basic social need: passing on knowledge and sorting people into roles."}
    ]},
    {id:"e2u4-l1-x2", type:"sort", q:"Is each effect of schooling a manifest function (intended, openly stated) or a latent function (an unintended side effect)?", buckets:["Manifest function","Latent function"], items:[
      {t:"Pupils learn to read, write and do arithmetic.", b:0, why:"Teaching core knowledge is the stated purpose of schooling."},
      {t:"Exam results help decide who gets into which jobs and courses.", b:0, why:"Social placement is an openly stated function: qualifications are meant to sort people."},
      {t:"Ana meets her future spouse in a university club.", b:1, why:"Courtship is a side effect. No school lists matchmaking as its purpose."},
      {t:"Classmates from different neighbourhoods form a lasting friendship network.", b:1, why:"Social networks are a latent function: useful, but not why schools exist."},
      {t:"Pupils learn their country’s history and shared language.", b:0, why:"Cultural transmission is a manifest function of schooling."},
      {t:"Teenagers pick up ideas at school that their parents don’t share, widening a generation gap.", b:1, why:"The generation gap is an unintended consequence of spending years learning alongside peers."}
    ]},
    {id:"e2u4-l1-x3", type:"match", q:"Match each description to the family or kinship pattern it shows.", pairs:[
      ["Land and family name pass from mother to daughter.","Matrilineal descent","Tracing kinship and inheritance through the mother’s line is matrilineal descent."],
      ["Three generations, including grandparents and an aunt, share one home and budget.","Extended family","A household with parents, children and other relatives is an extended family."],
      ["A woman is married to two brothers at the same time.","Polyandry","One woman with more than one husband is polyandry, the rarer form of polygamy."],
      ["A man has three wives, recognized under his country’s family law.","Polygyny","One man with more than one wife is polygyny, the more common form of polygamy."],
      ["Two parents and their children live in their own flat, apart from other relatives.","Nuclear family","Parents and children in one household, without other relatives, is a nuclear family."]
    ]},
    {id:"e2u4-l1-x4", type:"spot", q:"Here is a description of Priya’s school day. Tap the parts that show the **hidden curriculum** (unofficial lessons about how to behave), not the formal curriculum.", ask:"shows the hidden curriculum", parts:[
      "The day starts when ",
      {t:"pupils line up in silence as the bell rings", flag:true, why:"Nobody is examined on lining up, but pupils learn to obey bells and wait in order, a lesson in time discipline and authority."},
      ". In maths they ",
      {t:"practise adding fractions", flag:false, why:"This is the formal curriculum: an openly planned academic skill."},
      ". The teacher ",
      {t:"praises the pupils who finish quietly and never question instructions", flag:true, why:"This rewards compliance. Pupils learn that quiet obedience is valued, which is a hidden-curriculum lesson."},
      ". In science they ",
      {t:"label the parts of a plant cell", flag:false, why:"Again formal curriculum: a planned topic that will be tested."},
      ". Before lunch, ",
      {t:"pupils must ask permission to use the toilet", flag:true, why:"Needing permission for basic needs teaches acceptance of institutional authority, an unwritten lesson."},
      ", and in the afternoon they ",
      {t:"read a chapter of a history textbook", flag:false, why:"Reading assigned history is part of the formal, stated curriculum."},
      "."
    ]},
    {id:"e2u4-l1-x5", type:"sort", q:"Which sociological lens does each claim come from?", buckets:["Functionalism","Conflict theory","Symbolic interactionism"], items:[
      {t:"Schools sort talented people into the jobs society needs most.", b:0, why:"Seeing education as sorting talent for society’s benefit is functionalist social placement."},
      {t:"Children from richer homes arrive with cultural capital that schools reward, so advantage passes down.", b:1, why:"Explaining how schools reproduce inequality between groups is the conflict view."},
      {t:"A pupil called “a slow learner” starts to see herself that way and stops trying.", b:2, why:"Focusing on labels, meanings and self-image in everyday interaction is symbolic interactionism."},
      {t:"Families exist to raise children and pass on culture, keeping society stable.", b:0, why:"Explaining an institution by the needs it meets for society is functionalism."},
      {t:"Within a couple, the partner who earns more often has more say in decisions.", b:1, why:"Linking power inside the family to unequal resources is conflict theory."},
      {t:"What counts as a “good mother” has changed a great deal over the last century.", b:2, why:"Treating family roles as meanings people create and revise is symbolic interactionism."}
    ]},
    {id:"e2u4-l1-x6", type:"mcq", q:"Tomás was put in the lowest maths set at age 11 after one test. Three years later his results are still low, and his school says this proves the placement was right. What is the strongest sociological objection?", options:[
      {t:"The placement itself may have produced the low results.", ok:true, why:"Exactly. Easier work and lower expectations can create a self-fulfilling prophecy. If the track itself limits what Tomás is taught and expected to achieve, his low results can’t be used as proof that the label was accurate."},
      {t:"Tracking is illegal, so the school shouldn’t use it.", why:"Tracking is legal and common in many countries. The issue is what it does, not its legal status."},
      {t:"Tomás’s results prove he has low ability, so there’s no objection.", why:"That ignores how the track shapes his opportunities. Low results after years of easier work don’t isolate ability from treatment."},
      {t:"One test is enough as long as it was a standardized test.", why:"Even good tests measure performance on one day, which reflects preparation and background. The bigger problem is the loop the label starts."}
    ]},
    {id:"e2u4-l1-x7", type:"explain", q:"Explain how tracking (putting pupils into ability groups) could become a self-fulfilling prophecy, and why conflict theorists say it is less neutral than it looks.", size:"3–4 sentences", model:"Tracking sorts pupils into groups by measured ability, and supporters say it lets teaching match pupils’ levels. Critics point to a loop: a pupil placed in a low track is labelled ‘weak’, teachers may expect less and set less demanding work, and the pupil may come to see themselves that way. Their results then fall further behind, which seems to confirm the label. Conflict theorists add that tracking, along with cultural capital, can let schools pass on advantage while looking neutral.", points:["Explains how a low-track label can lower teachers’ expectations", "Explains how the pupil may come to see themselves that way", "Explains how results then seem to confirm the label (self-fulfilling prophecy)", "Adds the conflict view that tracking can pass on advantage while looking neutral"]}
   ],
   apply:{intro:"Look at family and education in your own world. Be respectful: involve relatives or friends only if they agree, and let them skip any question.", tasks:[
     {t:"Draw a three-generation kinship map", how:["Sketch your family (or a family you know well, with permission) across three generations.","Mark how surnames, property or responsibilities pass down: through the father’s line, the mother’s, or both?","Mark who lives with whom. Are the households nuclear, extended or skipped-generation?","Note one way your grandparents’ generation differs from yours in family size, marriage age or living arrangements."], write:"Descent rule I see, household types, and one change across generations…"},
     {t:"Audit the hidden curriculum you learned", how:["Think back to one school, course or training you attended.","List five rules you followed that were never in the syllabus (for example: when you could speak, how you addressed teachers, what happened if you were late).","For each, write what it taught you about authority, time or competition.","Was any of it useful later at work? Was any of it unfair to some pupils?"], write:"Five unwritten rules and what each one taught…"},
     {t:"Check credentials in job ads", how:["Find five job advertisements in a field you know (any country, any job board).","Note which require a degree or certificate.","For each, judge whether the main tasks really need that credential or could be learned on the job.","Decide whether you see signs of credentialism."], write:"Job, credential required, does the work need it? My conclusion…"}
   ], proof:"Notes with a kinship map and one generational change, five hidden-curriculum rules with what each taught, and a short judgement on credentialism in five real job ads."},
   read:[
     {book:"soc", where:"Chapter 14 “Marriage and Family”: Sections 14.1 “What Is Marriage? What Is a Family?” and 14.2 “Variations in Family Life”"},
     {book:"soc", where:"Chapter 16 “Education”: Sections 16.1 “Education around the World”, 16.2 “Theoretical Perspectives on Education” and 16.3 “Issues in Education”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u4-l2", title:"Religion, power and politics", minutes:55,
   hook:{q:"Many of the world’s major religions began as what?", options:["Official state religions","Small, new groups","Philosophies taught in universities","Laws written by rulers"], answer:1, reveal:"**Small, new groups.** As the textbook notes, almost all religions began that way. That is one reason many sociologists prefer “new religious movement” to the loaded word “cult”. This lesson shows how sociologists study what [[religion]] does without judging whether any faith is true. Then it asks a question religion and government share: why do people accept rules?"},
   goals:[
     "Explain how Durkheim, Weber and Marx analysed religion, and how each sociological lens sees it",
     "Describe the secularization debate fairly, with the evidence on each side",
     "Classify authority as traditional, rational-legal or charismatic, using Weber’s types",
     "Compare democracy, monarchy, authoritarianism and totalitarianism, and describe how people take part in politics"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Read Chapter 15 “Religion”, sections **15.1** “The Sociological Approach to Religion” and **15.2** “World Religions”. Then read Chapter 17 “Government and Politics”, sections **17.1** “Power and Authority”, **17.2** “Forms of Government” and **17.4** “Theoretical Perspectives on Government and Power”. (On LibreTexts: 15.2–15.3, 17.2–17.3 and 17.5.) Section 17.3 is a US case study and optional. Religion and government both answer one question: why do people accept rules?",
      {look:[
        "How did Durkheim, Weber and Marx each explain what religion does for society? (15.1)",
        "How are religions classified by belief, and how do ecclesia, denomination, sect and cult differ? (15.2)",
        "What is the difference between power and authority, and what are Weber’s three types of authority? (17.1)",
        "How do monarchy, oligarchy, dictatorship and democracy differ, and how do the lenses explain who really holds power? (17.2, 17.4)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "Sociologists study what [[religion]] does and how it is organized, not whether a faith is true. Religions combine beliefs, rituals and religious experience. (15.1)",
        "{{emile-durkheim|Durkheim}} (“The Elementary Forms of Religious Life”, 1912) saw religion as a line a community draws. On one side is the [[sacred]] (set apart, treated with awe); on the other is the [[profane]] (everyday). Sacredness is a status the group gives: one river can be washing water in the morning and a ritual bath at dawn. Shared ritual brings cohesion, social control and meaning. (15.1)",
        "{{max-weber|Weber}} (“The Protestant Ethic and the Spirit of Capitalism”, 1904–05) argued that beliefs can drive economic change. {{karl-marx|Marx}} (1844) called religion “the opium of the people” and “the sigh of the oppressed creature”. He meant that religion gives real comfort that can also distract from changing conditions. (15.1)",
        "Religions are classified by belief: monotheism, polytheism, animism, and non-theistic traditions such as many forms of Buddhism. They are also classified by organization, from most to least established: ecclesia (state religion), denomination, sect and cult, also called a new religious movement. (15.2)",
        "[[power|Power]] is the ability to impose your will on others; [[authority]] is power people accept as legitimate. Weber’s types: [[traditional-authority|traditional]] (custom and inheritance), [[rational-legal-authority|rational-legal]] (laws and offices) and [[charismatic-authority|charismatic]] (devotion to an extraordinary person). Real rulers often mix them. (17.1)",
        "Governments differ in who rules and how much they control. Types include [[democracy]] (direct or representative), [[monarchy]] (absolute or constitutional, as in Japan or Sweden), [[oligarchy]] (a small elite) and dictatorship ([[authoritarianism|authoritarian]] rule). The extreme [[totalitarian]] form of dictatorship tries to control nearly all of life. Classify by observable features: how leaders are chosen, whether they can be voted out, whether courts and media are independent. (17.2)",
        "Functionalists (pluralists) see many groups bargaining while government keeps order; conflict theorists follow {{c-wright-mills|C. Wright Mills}}’s “The Power Elite” (1956): business, military and political leaders decide; interactionists study flags, slogans and how issues are framed. (17.4)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e2u4-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><circle class="d-gold" cx="170" cy="58" r="48" stroke-width="2"/><text x="170" y="54" text-anchor="middle">Charismatic</text><text class="s" x="170" y="72" text-anchor="middle">the leader</text><text class="s" x="8" y="24">after the leader:</text><text class="s" x="8" y="40">charisma becomes</text><text class="s" x="8" y="56">custom</text><text class="s" x="332" y="24" text-anchor="end">after the leader:</text><text class="s" x="332" y="40" text-anchor="end">charisma becomes</text><text class="s" x="332" y="56" text-anchor="end">rules</text><circle class="d-lup" cx="70" cy="250" r="54" stroke-width="2"/><text x="70" y="246" text-anchor="middle">Traditional</text><text class="s" x="70" y="264" text-anchor="middle">custom</text><circle class="d-sage" cx="270" cy="250" r="54" stroke-width="2"/><text x="270" y="246" text-anchor="middle">Rational-legal</text><text class="s" x="270" y="264" text-anchor="middle">rules and law</text><path class="d-ink" d="M138 94 L100 199" stroke-width="2" marker-end="url(#e2u4-l2-a)"/><path class="d-ink" d="M202 94 L240 199" stroke-width="2" marker-end="url(#e2u4-l2-a)"/><path class="d-ink" d="M127 250 L213 250" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#e2u4-l2-a)"/><text class="s" x="170" y="326" text-anchor="middle">Weber: modern states shift towards rules</text><text x="170" y="350" text-anchor="middle">Routinization of charisma</text></svg>', alt:"Three circles: charismatic authority at the top, traditional at bottom left, rational-legal at bottom right. Arrows show charisma turning into custom or rules after the leader, and a dashed arrow from traditional to rational-legal.", cap:"Charismatic authority is powerful but unstable: when the leader dies, followers must turn it into tradition or rules. Weber called this the routinization of charisma."},
      {fig:'<svg viewBox="0 0 340 452"><defs><marker id="e2u4-l2-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><path class="d-ink" d="M24 420 L332 420" stroke-width="2" marker-end="url(#e2u4-l2-b)"/><path class="d-ink" d="M24 420 L24 36" stroke-width="2" marker-end="url(#e2u4-l2-b)"/><text class="s" x="34" y="24">how much of life the state controls</text><text class="s" x="24" y="442">power shared by many</text><text class="s" x="332" y="442" text-anchor="end">held by one or a few</text><circle class="d-sage" cx="56" cy="395" r="9" stroke-width="2"/><text x="70" y="400">direct democracy</text><circle class="d-sage" cx="83" cy="355" r="9" stroke-width="2"/><text x="97" y="360">representative democracy</text><circle class="d-gold" cx="106" cy="315" r="9" stroke-width="2"/><text x="120" y="320">constitutional monarchy</text><circle class="d-lup" cx="200" cy="250" r="9" stroke-width="2"/><text x="188" y="255" text-anchor="end">oligarchy</text><circle class="d-gold" cx="290" cy="272" r="9" stroke-width="2"/><text x="332" y="298" text-anchor="end">absolute monarchy</text><circle class="d-rose" cx="256" cy="194" r="9" stroke-width="2"/><text x="244" y="199" text-anchor="end">authoritarian rule</text><circle class="d-rose" cx="300" cy="85" r="11" stroke-width="2"/><text x="285" y="90" text-anchor="end">totalitarian rule</text></svg>', alt:"A chart. The horizontal axis runs from power shared by many to power held by one or a few. The vertical axis shows how much of life the state controls. Democracies sit bottom left, oligarchy and absolute monarchy in the middle right, authoritarian rule higher, and totalitarian rule at the top right.", cap:"A rough map, not a ranking of real countries. Positions are typical; real governments mix features and can move over time."}
    ]},
    {h:"Key terms", body:[ {terms:["religion","sacred","profane","secularization","power","authority","traditional-authority","rational-legal-authority","charismatic-authority","democracy","totalitarian"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**The secularization debate.** [[secularization|Secularization]] can mean three things. It can mean decline (fewer believe or attend), differentiation (schools, courts and hospitals run on non-religious rules) or privatization (faith becomes personal). Peter Berger argued for it in “The Sacred Canopy” (1967). Then in “The Desecularization of the World” (1999) he said most of the world is as religious as ever. Attendance has fallen in much of Western Europe, Canada and Australia, while Pentecostal churches grow in Africa and Latin America. Grace Davie’s “believing without belonging” warns that low attendance doesn’t prove lost belief. Treat it as an open question.\n\n**Routinization of charisma.** Charisma rests on one person. So when the leader dies, followers choose successors, write down teachings and build offices: charisma becomes tradition or rules.\n\n**Power and participation.** Robert Michels’ [[iron-rule-of-oligarchy|iron rule of oligarchy]] says organizations drift towards rule by a few. Australia, Belgium and Brazil make voting compulsory. Elsewhere, turnout is usually lower among younger and poorer citizens, so their concerns may be heard less. Religion can also drive change, as with liberation theology in Latin America (15.3) and faith groups against apartheid."},
      {beyond:"**“Cult” or new religious movement?** The book calls the newest, least established type of group a “cult”. It notes that the word often carries a negative meaning, and says it is sometimes replaced by **new religious movement** (NRM). Many sociologists now prefer NRM. As the book points out, almost all religions began as small new groups."}
    ]}
   ],
   try:[
    {id:"e2u4-l2-x1", type:"match", q:"Match each thinker to the idea sociologists most associate with them.", pairs:[
      ["Émile Durkheim","Religion separates the sacred from the profane and binds people into a moral community","Durkheim’s *Elementary Forms of Religious Life* (1912) built his theory on the sacred–profane distinction."],
      ["Max Weber","Some Protestant beliefs encouraged the disciplined work and saving that helped capitalism grow","This is the argument of *The Protestant Ethic and the Spirit of Capitalism* (1904–05)."],
      ["Karl Marx","Religion comforts the oppressed but can distract them from changing their conditions","Marx’s 1844 “opium of the people” passage sees religion as both a sigh of the oppressed and a barrier to change."],
      ["Peter Berger","First argued strongly for secularization, later said most of the world is as religious as ever","Berger’s change of mind (1967 to 1999) is a key moment in the secularization debate."],
      ["C. Wright Mills","A small power elite of business, military and political leaders makes the key decisions","*The Power Elite* (1956) is a classic conflict view of power."]
    ]},
    {id:"e2u4-l2-x2", type:"sort", q:"Which of Weber’s types of authority does each situation mainly show?", buckets:["Traditional","Rational-legal","Charismatic"], items:[
      {t:"A village accepts its chief because the role has passed down one family for generations.", b:0, why:"Legitimacy from long-standing custom and inheritance is traditional authority."},
      {t:"A tax inspector can demand records because a law gives the office that right.", b:1, why:"Obedience to an office defined by written law is rational-legal authority."},
      {t:"Thousands follow a young preacher because they believe she has an extraordinary gift.", b:2, why:"Devotion to a person’s exceptional qualities is charismatic authority."},
      {t:"A newly elected mayor takes office after the votes are counted under the city charter.", b:1, why:"Power comes from following set rules and procedures: rational-legal."},
      {t:"In a family business, the eldest son takes over because that’s how it has always been done.", b:0, why:"Custom, not rules or personal gifts, legitimates him: traditional authority."},
      {t:"An independence movement rallies around a leader whose speeches inspire devotion.", b:2, why:"The leader’s personal appeal, not office or custom, is the source: charismatic authority."}
    ]},
    {id:"e2u4-l2-x3", type:"mcq", q:"Which statement describes the secularization debate most accurately?", options:[
      {t:"Religion has declined in some regions but not others, so the debate continues.", ok:true, why:"Religion has declined on some measures in some regions, especially Western Europe, while it has persisted or grown elsewhere, so sociologists still disagree about how far secularization applies. This reflects the evidence: decline in some places, growth or change in others, and a real scholarly debate."},
      {t:"Sociologists have proven that religion disappears as countries get richer.", why:"That’s the strong classic thesis, but it isn’t proven. Even Peter Berger, a leading early advocate, later rejected it."},
      {t:"Religion is growing everywhere, so secularization theory has no evidence at all.", why:"Falling attendance and belief in many Western European countries are real evidence. The debate is about how general the trend is."},
      {t:"Secularization only means that fewer people believe in God.", why:"It also means religion separating from other institutions and becoming a private matter. Mixing these meanings up causes many arguments."}
    ]},
    {id:"e2u4-l2-x4", type:"sort", q:"These countries are invented. Which form of government does each description fit best?", buckets:["Constitutional monarchy","Representative democracy (republic)","Absolute monarchy","Totalitarian rule"], items:[
      {t:"Velmora’s king opens parliament each year, but the elected prime minister and parliament make the laws.", b:0, why:"A monarch who is mainly symbolic, with an elected parliament governing, is a constitutional monarchy."},
      {t:"In Ostrava Nova, citizens elect a president and a legislature every four years, and courts can overrule both.", b:1, why:"Elected representatives, no monarch and independent courts describe a representative democratic republic."},
      {t:"Qasmir’s sultan makes the laws, appoints the judges and can’t be removed by any vote.", b:2, why:"One hereditary ruler with real, unchecked power is an absolute monarchy."},
      {t:"In Drevnia, the single party assigns jobs, decides family size, bans all religion and requires daily loyalty rituals.", b:3, why:"Control over nearly every area of life, including private life and belief, is totalitarian."},
      {t:"Lusenne has a queen with no political power, and voters elect members of parliament who choose the government.", b:0, why:"A symbolic monarch alongside an elected parliament is again a constitutional monarchy."}
    ]},
    {id:"e2u4-l2-x5", type:"spot", q:"A website posts this summary. Tap the parts that are problems with the claim.", ask:"is a problem with the claim", parts:[
      {t:"“New survey proves religion is dying worldwide.”", flag:true, why:"Overgeneralization: one survey can’t “prove” a worldwide trend, especially from the sample described next."},
      " Researchers ",
      {t:"asked 2,000 adults", flag:false, why:"A sample of 2,000 can be perfectly adequate if it’s drawn well. Size isn’t the problem here."},
      " ",
      {t:"in one Western European capital city", flag:true, why:"A biased sample: one city in the region where decline is strongest can’t represent the world, where many regions show stable or growing religiosity."},
      " ",
      {t:"using questions published in full with the results", flag:false, why:"Publishing the exact questions is good practice; it lets readers judge the wording."},
      ". Only 18% said they attend services monthly, ",
      {t:"so belief in God must have collapsed", flag:true, why:"This mixes up attendance with belief. People can believe without belonging, which is one of the main points in the debate."},
      "."
    ]},
    {id:"e2u4-l2-x6", type:"mcq", q:"In Varanasi, people wash clothes in the River Ganges in the morning and, a few metres away, others perform ritual bathing at dawn. How would Durkheim analyse this?", options:[
      {t:"The same river is profane in one use and sacred in another.", ok:true, why:"Right. Sacredness comes from the meaning and rules a community gives something. For Durkheim, sacred and profane are statuses communities assign, not physical properties of the water."},
      {t:"The river must be either sacred or profane; it can’t be both.", why:"Durkheim’s point is that one object can move between the two depending on how a group treats it."},
      {t:"Only the clothes-washing matters sociologically, because it’s economic.", why:"Durkheim saw ritual as central to social life: shared rituals create cohesion."},
      {t:"Sociologists should decide whether the ritual has real spiritual effects.", why:"Sociology doesn’t judge the truth of religious claims; it studies what rituals mean and do socially."}
    ]},
    {id:"e2u4-l2-x7", type:"order", q:"Put these stages in the order Weber’s idea of the routinization of charisma predicts.", items:[
      {t:"A teacher with an extraordinary personal appeal gathers devoted followers.", why:"It starts with charismatic authority, based on the leader’s personal qualities."},
      {t:"The leader dies, and followers face the question of who leads now.", why:"Charismatic authority is unstable because it rests on one person."},
      {t:"Followers agree on rules for choosing successors and write down the teachings.", why:"Routinization begins: charisma is turned into rules or customs."},
      {t:"A formal organization with offices, ranks and procedures runs the movement.", why:"The end point is rational-legal (or traditional) authority, which can outlast any single leader."}
    ]},
    {id:"e2u4-l2-x8", type:"explain", q:"A movement grows around a famous, inspiring founder. Using Weber’s types of authority, explain why the movement faces a crisis when the founder dies, and how it might survive.", size:"3–5 sentences", model:"Weber separated power, the ability to impose your will, from authority, power that people accept as legitimate. The founder holds charismatic authority: followers obey out of devotion to an extraordinary person. It is powerful but unstable, because it lives in one individual. When the founder dies, the movement must turn charisma into something lasting, which Weber called the routinization of charisma. It might become traditional authority, for example by passing leadership to a relative, or rational-legal authority, with written rules, offices and elections.", points:["Identifies the founder’s authority as charismatic", "Explains why charismatic authority is unstable", "Names or describes the routinization of charisma", "Gives a way it could become traditional or rational-legal authority"]}
   ],
   apply:{intro:"Look at religion and power around you, as an observer. Be respectful: don’t photograph or record people, and don’t enter a ceremony unless visitors are welcome.", tasks:[
     {t:"Find the sacred and the profane", how:["Choose one ritual you can observe respectfully or remember well: a religious service, a wedding, a funeral, a national holiday or a memorial day.","List the objects, places, words or times treated as sacred (special rules, special behaviour).","List the profane, ordinary uses of the same things at other times.","Note how the ritual brings people together (cohesion) and what behaviour it expects (social control)."], write:"The ritual, what was treated as sacred, how it created cohesion…"},
     {t:"Run an authority audit", how:["List six people or bodies whose instructions you usually follow (for example: a parent, an employer, a police officer, a religious leader, a coach, an app’s terms of service).","Classify each as mainly traditional, rational-legal or charismatic.","For each, note why you obey and what would happen if you didn’t.","Which ones mix two types?"], write:"Who, which type, why I obey…"},
     {t:"Describe how your country is governed, neutrally", how:["Use your government’s official website or constitution.","Answer only factual questions: How is the head of state chosen? How is the head of government chosen? How often are national elections held? Is there a constitutional court or supreme court?","Place your country on the lesson’s chart and explain which features put it there.","Write facts only, not opinions about parties or politicians."], write:"Head of state, head of government, elections, courts, where it fits…"}
   ], proof:"Notes on one ritual analysed with Durkheim’s ideas, six authorities classified by Weber’s types, and a neutral, fact-based description of how your country is governed."},
   read:[
     {book:"soc", where:"Chapter 15 “Religion”: Sections 15.1 “The Sociological Approach to Religion” and 15.2 “World Religions”"},
     {book:"soc", where:"Chapter 17 “Government and Politics”: Sections 17.1 “Power and Authority”, 17.2 “Forms of Government” and 17.4 “Theoretical Perspectives on Government and Power”", note:"Section 17.3 “Politics in the United States” is about one country; read it as a case study."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u4-l3", title:"Work, the economy and health", minutes:55,
   hook:{q:"The British civil servants in the Whitehall studies all had jobs and access to health care. Did their health differ by rank?", options:["No: equal access to care made health equal","Only the very top rank was healthier","Yes: health got worse at each step down the job ladder","Lower ranks were healthier, because their work was more active"], answer:2, reveal:"**Yes, at each step down.** Researchers call this a social gradient: health follows position in society, even when everyone can see a doctor. This lesson shows how the economy decides who gets what. It also shows how that shapes who stays healthy, through what WHO calls the [[social-determinants|social determinants of health]]."},
   goals:[
     "Compare capitalism, socialism and mixed economies without treating any as automatically good or bad",
     "Explain the informal economy, global commodity chains, deindustrialization and automation",
     "Explain why health is shaped by social conditions, using the social determinants of health",
     "Analyse medicalization and global health inequalities through the sociological lenses"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Read Chapter 18 “Work and the Economy”, sections **18.1** “Economic Systems” and **18.2** “Globalization and the Economy”, and skim **18.3** for outsourcing, automation and polarization. Then read Chapter 19 “Health and Medicine”, sections **19.1** “The Social Construction of Health”, **19.2** “Global Health”, **19.4** “Comparative Health and Medicine” and **19.5** “Theoretical Perspectives on Health and Medicine”. (On LibreTexts: 18.2–18.4, 19.2–19.3 and 19.5–19.6.) Section 19.3 is about the US and optional. The economy decides who gets what, and that shapes who stays healthy.",
      {look:[
        "How do capitalism, socialism and mixed economies differ, and what does convergence theory predict? (18.1)",
        "What is a global commodity chain, and who gains and loses from globalization? (18.2)",
        "What does it mean to say health is socially constructed, and what does social epidemiology study? (19.1, 19.2)",
        "How do health systems differ between countries, and how do the lenses explain the sick role and medicalization? (19.4, 19.5)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "The **economy** is the institution that manages a society’s goods and services. Societies have moved from farming to industrial to post-industrial economies, where most people work in services. (18.1)",
        "[[capitalism|Capitalism]] rests on private ownership and profit; [[socialism]] on state or collective ownership aimed at meeting needs and sharing wealth. Almost every real economy is a [[mixed-economy|mixed economy]]. Market socialism allows some markets, and **convergence theory** predicts that economies grow more alike as they develop. (18.1)",
        "[[globalization|Globalization]] spreads production along **global commodity chains**. One T-shirt may be grown, spun, sewn, branded and sold in different countries, and each link captures a different share of the price. (18.2)",
        "**Outsourcing** and [[automation]] can **polarize** work: more high-pay and low-pay jobs, fewer in the middle. [[deindustrialization|Deindustrialization]], the loss of factory jobs, ripples into families, schools and health. (18.3)",
        "Health is social: culture shapes what counts as illness and who gets blamed. [[social-epidemiology|Social epidemiology]] studies how disease is caused and distributed. Rich countries face mostly chronic illness such as heart disease and cancer. Poorer ones must also fight infectious disease and high infant mortality with too few staff. (19.1, 19.2)",
        "**Universal health care** guarantees everyone coverage, through taxes or social insurance. Other systems rely on private insurance or paying at the point of care. (19.4)",
        "Talcott Parsons’s [[sick-role|sick role]] (functionalism) excuses sick people from duties if they try to get well and seek competent help. [[medicalization|Medicalization]] redefines once-deviant or ordinary behaviour as illness. **Demedicalization** reverses it, as when the American Psychiatric Association removed homosexuality from its manual in 1973. Conflict theorists ask how class, racism and profit shape illness and care; interactionists study meaning and [[stigma]]. (19.5)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 306"><path class="d-sage" d="M6 274 L6 48 A40 40 0 0 1 46 8 L294 8 A40 40 0 0 1 334 48 L334 274 Z" stroke-width="2"/><path class="d-lup" d="M24 274 L24 98 A40 40 0 0 1 64 58 L276 58 A40 40 0 0 1 316 98 L316 274 Z" stroke-width="2"/><path class="d-gold" d="M42 274 L42 160 A40 40 0 0 1 82 120 L258 120 A40 40 0 0 1 298 160 L298 274 Z" stroke-width="2"/><path class="d-rose" d="M60 274 L60 208 A40 40 0 0 1 100 168 L240 168 A40 40 0 0 1 280 208 L280 274 Z" stroke-width="2"/><path class="d-panel" d="M80 274 L80 256 A40 40 0 0 1 120 216 L220 216 A40 40 0 0 1 260 256 L260 274 Z" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Economy, culture, environment, policy</text><text class="s" x="170" y="46" text-anchor="middle">wealth, inequality, climate, laws</text><text x="170" y="79" text-anchor="middle">Living and working conditions</text><text class="s" x="170" y="95" text-anchor="middle">work, housing, water, schooling,</text><text class="s" x="170" y="110" text-anchor="middle">health care, food</text><text x="170" y="141" text-anchor="middle">Social and community networks</text><text class="s" x="170" y="157" text-anchor="middle">family, friends, community support</text><text x="170" y="189" text-anchor="middle">Individual habits</text><text class="s" x="170" y="205" text-anchor="middle">diet, smoking, exercise</text><text class="s" x="170" y="240" text-anchor="middle">age, sex,</text><text class="s" x="170" y="256" text-anchor="middle">inherited factors</text><path class="d-ink" d="M6 274 L334 274" stroke-width="2"/><text class="s" x="170" y="296" text-anchor="middle">Outer layers shape the inner ones</text></svg>', alt:"Nested arches, one inside the other. The core is age, sex and inherited factors; around it are individual habits, then social and community networks, then living and working conditions, and the outer layer is the wider economy, culture, environment and policy.", cap:"Layers of influence on health, after Dahlgren and Whitehead’s widely used 1991 model. Personal habits sit inside conditions people don’t choose."}
    ]},
    {h:"Key terms", body:[ {terms:["capitalism","socialism","mixed-economy","informal-economy","deindustrialization","automation","social-epidemiology","social-determinants","medicalization","sick-role"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**The informal economy.** The [[informal-economy|informal economy]] is work without contracts, labour protection, social security or registration. Examples are a street food seller in Lagos, a domestic worker in São Paulo and a cash-paid childminder in Manchester. The ILO estimates about **58%** of the world’s workers were informal in 2024, about 13% in high-income countries and 88% in low-income ones. Informal is not the same as illegal.\n\n**Social determinants.** WHO defines the [[social-determinants|social determinants of health]] as “the conditions in which people are born, grow, work, live and age”. In the diagram, age, sex and inherited factors sit at the core, wrapped in conditions people don’t choose. The Whitehall studies of British civil servants found a **social gradient**. Health got worse at each step down the job ladder, even with jobs and health care for all. WHO notes life expectancy differs by up to 33 years between countries, and it removed homosexuality from its disease classification in 1990.\n\n**Around the world.** Mixed economies range from Nordic welfare states to China’s “socialist market economy”. Deindustrialization hit northern England and Germany’s Ruhr as well as the US. Many low- and middle-income countries carry a **double burden** of infectious and chronic disease."}
    ]}
   ],
   try:[
    {id:"e2u4-l3-x1", type:"sort", q:"Does each feature belong mainly to capitalism or to socialism as pure models?", buckets:["Capitalism","Socialism"], items:[
      {t:"Factories are owned by private shareholders.", b:0, why:"Private ownership of the means of production is the core of capitalism."},
      {t:"A central plan sets how many tractors each factory will make.", b:1, why:"Planning production rather than leaving it to markets is a feature of socialism."},
      {t:"Prices rise and fall with supply and demand.", b:0, why:"Market pricing is a capitalist mechanism."},
      {t:"The goal of production is to meet everyone’s needs and share wealth equally.", b:1, why:"Sharing wealth and meeting needs, rather than profit, is the stated aim of socialism."},
      {t:"Companies compete to make a profit for their owners.", b:0, why:"The profit motive drives capitalist production."},
      {t:"Railways, mines and banks are owned by the state on behalf of the people.", b:1, why:"Collective or state ownership is the socialist model. (Many mixed economies also own some of these.)"}
    ]},
    {id:"e2u4-l3-x2", type:"mcq", q:"Fatima cooks meals at home and sells them to office workers for cash. She has no business registration, no pension and no sick pay, but the food is legal and safe. Which concept best describes her work?", options:[
      {t:"The informal economy", ok:true, why:"Right. Legal work outside formal contracts, registration and social protection is informal employment."},
      {t:"The criminal economy", why:"Nothing she sells is illegal. Informal is not the same as criminal."},
      {t:"Deindustrialization", why:"Deindustrialization is the decline of manufacturing jobs across a region, not one person’s work arrangement."},
      {t:"Automation", why:"Automation is machines replacing human work. Fatima’s work is entirely human and unprotected."}
    ]},
    {id:"e2u4-l3-x3", type:"number", q:"A survey of a town finds that 3,150 of its 4,500 workers have no written contract or social protection. What **percentage** of the town’s workers are in informal employment?", answer:70, tol:0.5, unit:"%", why:"Percentage = (part ÷ whole) × 100 = (3,150 ÷ 4,500) × 100 = 0.7 × 100 = 70%. For comparison, the ILO’s estimate for the whole world in 2024 was about 58%.", wrongs:[
      {v:30, tol:0.5, why:"That’s the formal share: (4,500 − 3,150) ÷ 4,500 = 30%. The question asks about informal workers."},
      {v:0.7, tol:0.01, why:"0.7 is the proportion. Multiply by 100 to turn it into a percentage."},
      {v:143, tol:1, why:"You divided the whole by the part (4,500 ÷ 3,150). Put the part on top: 3,150 ÷ 4,500."}
    ], hint2:"Divide the informal workers by all workers, then multiply by 100."},
    {id:"e2u4-l3-x4", type:"order", q:"Put this global commodity chain for a cotton T-shirt in order, from raw material to buyer.", items:[
      {t:"Cotton is grown and picked on a farm.", why:"The chain starts in the primary sector, with the raw material."},
      {t:"A mill spins the cotton into yarn and weaves or knits it into fabric.", why:"Processing raw cotton into fabric is the first manufacturing step."},
      {t:"A garment factory cuts and sews the fabric into T-shirts.", why:"Assembly into a finished product comes next, often in a different country."},
      {t:"Shipping companies move the finished shirts to distribution centres abroad.", why:"Logistics connects production to distant markets."},
      {t:"A brand sells the shirt in shops and online, where it’s bought.", why:"The chain ends with branding and retail, where a large share of the final price is often captured."}
    ]},
    {id:"e2u4-l3-x5", type:"sort", q:"Is each factor a **social** determinant of health, or a **biological** factor that no social policy can change?", buckets:["Social determinant","Biological factor"], items:[
      {t:"Whether a family can afford fresh food", b:0, why:"Income and food access are social conditions, among WHO’s examples of social determinants."},
      {t:"A person’s age", b:1, why:"Age is in the core of the Dahlgren–Whitehead model: a fixed individual factor, not a social condition."},
      {t:"Damp, overcrowded housing", b:0, why:"Housing quality is a living condition shaped by income and policy."},
      {t:"An inherited gene that raises the risk of a disease", b:1, why:"Inherited factors are biological. (Whether the person can get screening is a social question, though.)"},
      {t:"A job with no sick pay, so people work while ill", b:0, why:"Working conditions are a social determinant."},
      {t:"Facing discrimination when seeking care", b:0, why:"Discrimination is a social condition that affects stress, access and treatment."}
    ]},
    {id:"e2u4-l3-x6", type:"spot", q:"A health article says this. Tap the parts that are problems with the reasoning.", ask:"is a problem with the reasoning", parts:[
      "A study ",
      {t:"published in a peer-reviewed journal", flag:false, why:"Peer review isn’t a guarantee, but it’s a reasonable sign of basic quality. Not a flaw."},
      " found that ",
      {t:"people who own dogs live longer on average", flag:false, why:"Reporting an average difference is fine as a finding. The problem is what the article does with it."},
      ". ",
      {t:"So buying a dog will add years to your life", flag:true, why:"Correlation read as causation. Dog owners may differ in income, housing, health and free time; healthier, better-off people may be more able to keep dogs."},
      ". ",
      {t:"Income, housing and existing health weren’t measured", flag:true, why:"Without measuring these social determinants, the study can’t rule them out as the real explanation (see {{correlation-causation}})."},
      ", and ",
      {t:"the results apply equally to everyone everywhere", flag:true, why:"Overgeneralization: a study from one setting can’t be assumed to hold in countries with very different housing, incomes and health systems."},
      "."
    ]},
    {id:"e2u4-l3-x7", type:"mcq", q:"Which of these is the clearest example of **medicalization**?", options:[
      {t:"Behaviour once seen as laziness is redefined as a disorder.", ok:true, why:"Behaviour once condemned as laziness or bad character comes to be treated by doctors. Medicalization is exactly this: moving something from the moral or normal domain into the medical one."},
      {t:"A new vaccine reduces deaths from an infectious disease.", why:"That’s medical progress against an already-medical problem, not redefining something as medical."},
      {t:"A government builds more hospitals in rural areas.", why:"That changes access to health care, not what counts as illness."},
      {t:"A medical association decides a condition is no longer a disorder.", why:"That’s the opposite process: demedicalization."}
    ]},
    {id:"e2u4-l3-x8", type:"explain", q:"In the Whitehall studies, British civil servants all had jobs and access to health care, yet health got worse at each step down the job ladder. Explain why sociologists say this shows that health is social, not only a matter of medical care or personal habits.", size:"3–4 sentences", model:"If health depended only on medical care, everyone in the studies should have had similar health, because they all had access to it. Instead there was a social gradient: health worsened at each step down the job ladder. That points to the conditions linked to rank, what WHO calls the social determinants of health: ‘the conditions in which people are born, grow, work, live and age’. Models such as Dahlgren and Whitehead’s place personal habits inside layers of conditions people don’t choose, so habits are only part of the story.", points:["Notes that equal access to care didn’t produce equal health", "Describes the social gradient by rank", "Names social determinants or the conditions people live and work in", "Explains that personal habits sit inside conditions people don’t choose"]}
   ],
   apply:{intro:"Look at work and health in your own surroundings. Observe and reflect; don’t question strangers about their work or health.", tasks:[
     {t:"Trace three commodity chains", how:["Pick three things you own: one piece of clothing, one electronic device, one food item.","Read the labels: where was it made, assembled or packed? Search the company’s website for where materials come from, if it says.","Sketch each chain from raw material to you.","Note which links are probably low-paid and which capture most of the price."], write:"Item, links in the chain, where value is captured…"},
     {t:"Notice the informal economy", how:["Over a day or two, notice work around you that probably happens without formal contracts: street sellers, cash-paid repairs, domestic help, delivery work, childminding, market stalls.","List at least five examples, without photographing or questioning anyone.","For each, note what protections the worker probably lacks (sick pay, pension, safety rules).","Reflect: what would happen to your area if all this work stopped tomorrow?"], write:"Five examples, missing protections, my reflection…"},
     {t:"Map the social determinants where you live", how:["Draw a rough map of your neighbourhood or use an online map.","Mark food shops (fresh and fast food), green spaces, public transport, clinics or pharmacies, busy roads and any polluting sites.","Compare with a neighbourhood with a different income level in the same city, if you know one.","Write which social determinants make healthy living easier or harder in each place."], write:"What helps health here, what makes it harder, how another area compares…"}
   ], proof:"Notes with three commodity chains, five informal-economy examples with the protections they lack, and a neighbourhood comparison of social determinants of health."},
   read:[
     {book:"soc", where:"Chapter 18 “Work and the Economy”: Sections 18.1 “Economic Systems” and 18.2 “Globalization and the Economy”", note:"Section 18.3 “Work in the United States” covers automation, outsourcing and polarization with US data."},
     {book:"soc", where:"Chapter 19 “Health and Medicine”: Sections 19.1 “The Social Construction of Health”, 19.2 “Global Health”, 19.4 “Comparative Health and Medicine” and 19.5 “Theoretical Perspectives on Health and Medicine”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u4-l4", title:"Population, cities and the environment", minutes:60,
   hook:{q:"About 2.1 children per woman is “replacement level”, where each generation roughly replaces the last. What share of the world’s countries are now below it?", options:["About one in ten","About a quarter","More than half","Almost all"], answer:2, reveal:"**More than half**, according to the UN’s *World Population Prospects 2024*. Births, deaths and migration are the only ways a population changes. This lesson shows how [[demography|demographers]] measure them and how birth and death rates shift as countries develop. It also shows what that means for cities and the environment."},
   goals:[
     "Calculate crude birth, death and migration rates per 1,000 people and interpret them",
     "Explain the demographic transition model and its limits",
     "Compare Malthus’s view of population with the main critiques",
     "Describe urbanization, suburbanization and gentrification, and explain environmental justice"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Read all three sections of Chapter 20 “Population, Urbanization, and the Environment”: **20.1** “Demography and Population”, **20.2** “Urbanization” and **20.3** “The Environment and Society” (LibreTexts 20.2–20.4). Births, deaths and moves decide how many people live where, which shapes cities and the pressure on the environment. The book’s figures are from the 2010s; newer ones are in the Textbook check below.",
      {look:[
        "How do fertility, mortality and migration change a population, and what does a population pyramid show? (20.1)",
        "What do Malthusian theory, zero population growth, cornucopian theory and demographic transition theory each claim? (20.1)",
        "How did cities and suburbs grow, and how do the human ecology (concentric zone) and conflict views explain city life? (20.2)",
        "Why do poorer and disadvantaged communities carry more pollution, and what is environmental racism? (20.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[demography|Demography]] studies a population’s size, composition and change. A population changes only through births, deaths and migration: next year = this year + births − deaths + people moving in − people moving out. (20.1)",
        "A [[crude-rate|crude rate]] is events per 1,000 people per year: (events ÷ population) × 1,000. The book’s [[fertility-rate|fertility rate]] and [[mortality-rate|mortality rate]] measure births and deaths; a population pyramid shows the age and sex structure. (20.1)",
        "The [[demographic-transition|demographic transition]] has four stages: high births and deaths; deaths fall first, so growth is fast; births fall; both stay low. (20.1)",
        "[[malthusian-theory|Malthusian theory]] (1798): population outruns food until **positive checks** (famine, disease, war) or **preventive checks** (fewer births) hold it back. [[cornucopian-theory|Cornucopian theory]] trusts human ingenuity; zero population growth aims for balance. (20.1)",
        "[[urbanization|Urbanization]] brings jobs and services but also crowding and pollution. [[suburbanization|Suburbs]] grew around cities; [[gentrification]] brings wealthier residents into historically poorer areas, raising rents and often displacing long-term residents. Burgess’s concentric zone model pictures the city as rings. (20.2)",
        "[[environmental-sociology|Environmental sociology]] studies how people and the environment shape each other. [[environmental-racism|Environmental racism]] is the heavier load of hazards on poor and minority communities. NIMBY (“not in my back yard”) campaigns by better-off areas often push facilities there. (20.2, 20.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 416"><defs><marker id="e2u4-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="30" y="30" width="76" height="200" stroke-width="1"/><rect class="d-panel" x="182" y="30" width="76" height="200" stroke-width="1"/><path class="d-ink" d="M30 230 L334 230" stroke-width="1.5"/><path class="d-ink" d="M30 230 L30 30" stroke-width="1.5"/><text class="s" x="30" y="20">rate per 1,000</text><path class="d-soft" d="M30 217.5 L106 213.3 C142.6 205 165.1 163.3 182 142.5 C210.2 105 238.3 80 258 73.3 L334 68.3" stroke-width="5"/><path class="d-ink" d="M30 55 L106 55 L165.1 61.7 C198.9 80 232.7 163.3 258 175.8 L334 180" stroke-width="3"/><path class="d-ink" d="M30 63.3 L46.9 50 L63.8 68.3 L80.7 53.3 L106 61.7 C131.3 96.7 159.5 142.5 182 159.2 C210.2 175.8 238.3 184.2 258 186.7 L334 190" stroke-width="2.5" stroke-dasharray="7 5"/><path class="d-ink" d="M160 100 L160 67" stroke-width="1.5" marker-end="url(#e2u4-l4-a)"/><path class="d-ink" d="M160 100 L160 134" stroke-width="1.5" marker-end="url(#e2u4-l4-a)"/><text x="68" y="248" text-anchor="middle">Stage 1</text><text class="s" x="68" y="264" text-anchor="middle">both rates</text><text class="s" x="68" y="278" text-anchor="middle">high</text><text x="144" y="248" text-anchor="middle">Stage 2</text><text class="s" x="144" y="264" text-anchor="middle">deaths</text><text class="s" x="144" y="278" text-anchor="middle">fall first</text><text x="220" y="248" text-anchor="middle">Stage 3</text><text class="s" x="220" y="264" text-anchor="middle">births</text><text class="s" x="220" y="278" text-anchor="middle">fall</text><text x="296" y="248" text-anchor="middle">Stage 4</text><text class="s" x="296" y="264" text-anchor="middle">both rates</text><text class="s" x="296" y="278" text-anchor="middle">low</text><path class="d-ink" d="M30 300 L60 300" stroke-width="3"/><text class="s" x="68" y="304">birth rate</text><path class="d-ink" d="M30 320 L60 320" stroke-width="2.5" stroke-dasharray="7 5"/><text class="s" x="68" y="324">death rate</text><path class="d-soft" d="M30 340 L60 340" stroke-width="5"/><text class="s" x="68" y="344">population size</text><path class="d-ink" d="M45 360 L45 351" stroke-width="1.5" marker-end="url(#e2u4-l4-a)"/><path class="d-ink" d="M45 360 L45 369" stroke-width="1.5" marker-end="url(#e2u4-l4-a)"/><text class="s" x="68" y="364">gap = natural increase</text><text class="s" x="170" y="390" text-anchor="middle">Population grows fastest in stages 2 and 3,</text><text class="s" x="170" y="406" text-anchor="middle">when deaths have fallen but births haven’t yet.</text></svg>', alt:"A line chart across four stages. The birth rate stays high through stages 1 and 2 and falls in stage 3. The death rate falls in stage 2. The gap between them, natural increase, is widest in stages 2 and 3 and is marked with a double arrow. Population size rises steeply in stages 2 and 3 and levels off in stage 4. A key sits below the chart.", cap:"The classic four-stage demographic transition. Rates are illustrative, not data from one country."}
    ]},
    {h:"Key terms", body:[ {terms:["demography","crude-rate","migration","push-pull","demographic-transition","malthusian-theory","cornucopian-theory","urbanization","gentrification","environmental-racism"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**More measures.** Total fertility rate: children per woman at current rates; about 2.1 is replacement level. Infant mortality: deaths under age one per 1,000 **live births**, not per 1,000 people. Net migration rate: (in − out) per 1,000; a minus sign means a net loss. [[migration|Migration]] follows [[push-pull|push and pull factors]]. Everett Lee (1966) added intervening obstacles such as cost, borders and laws, and people usually follow networks of relatives.\n\n**Limits of the transition model.** It is based on European history, ignores migration and stops early. The UN’s World Population Prospects 2024 finds more than half of countries below 2.1. Some, like the Republic of Korea, moved through it in decades. Lesson 5 follows the resulting population ageing into the life course, care and pensions ({{population-ageing-dependency}}).\n\n**More thinkers.** Paul Ehrlich (“The Population Bomb”, 1968) predicted mass famines that didn’t come on that scale. Julian Simon (1981) is the classic cornucopian. Ester Boserup (1965) said population pressure drives farming innovation. Amartya Sen (“Poverty and Famines”, 1981) showed famines can strike when food exists but poor people lose the means to get it. Ruth Glass coined “gentrification” in 1964, writing about London. Protests at Warren County, North Carolina (1982) helped launch the US environmental justice movement. E-waste and climate change raise the same questions worldwide."},
      {fix:"OpenStax defines urbanization as the study of city life. Most sociologists use it for the **process** of more people living in towns and cities, and call the study urban sociology. The book’s figures are dated: the UN estimated **8.2 billion** people in 2024, peaking at about 10.3 billion in the mid-2080s. Its “about 55% urban” (2018) used each country’s own definition. In 2025 the UN switched to one method that counts cities separately from towns, finding **about 45%** of people in cities. Different definitions, not a fall."}
    ]}
   ],
   try:[
    {id:"e2u4-l4-x1", type:"number", q:"A region has a population of 1,240,000. Last year there were 18,600 live births. What is its **crude birth rate** per 1,000 people?", answer:15, tol:0.05, unit:"per 1,000", why:"Crude birth rate = (births ÷ population) × 1,000 = (18,600 ÷ 1,240,000) × 1,000 = 0.015 × 1,000 = 15 births per 1,000 people per year.", wrongs:[
      {v:1.5, tol:0.01, why:"You multiplied by 100, giving a percentage (1.5%). Crude rates are per 1,000, so multiply by 1,000."},
      {v:0.015, tol:0.001, why:"That’s births per person. Multiply by 1,000 to get births per 1,000 people."},
      {v:66.7, tol:0.5, why:"You divided population by births. Put the events (births) on top: 18,600 ÷ 1,240,000."}
    ], hint2:"Divide births by population, then multiply by 1,000."},
    {id:"e2u4-l4-x2", type:"number", q:"A town of 450,000 people gained 4,200 people who moved in and lost 6,900 who moved out last year. What is its **net migration rate** per 1,000 people? (Use a minus sign if more left than arrived.)", answer:-6, tol:0.05, unit:"per 1,000", why:"Net migration = in − out = 4,200 − 6,900 = −2,700. Rate = (−2,700 ÷ 450,000) × 1,000 = −6 per 1,000. The minus sign shows the town lost people through migration.", wrongs:[
      {v:6, tol:0.05, why:"Right size, wrong sign. More people left than arrived, so net migration is negative: −6 per 1,000."},
      {v:-0.6, tol:0.01, why:"That’s per 100 (a percentage). Multiply by 1,000, not 100."},
      {v:24.67, tol:0.1, why:"You added the two flows (4,200 + 6,900 = 11,100). Net migration subtracts: in minus out."}
    ], hint2:"Subtract movers-out from movers-in, divide by the population, then multiply by 1,000."},
    {id:"e2u4-l4-x3", type:"order", q:"Put the stages of the classic demographic transition model in order.", items:[
      {t:"High birth rates and high death rates; population grows slowly", why:"Stage 1: pre-industrial societies with frequent disease and famine."},
      {t:"Death rates fall while birth rates stay high; population grows fast", why:"Stage 2: clean water, sanitation, food and medicine reduce deaths first."},
      {t:"Birth rates fall; growth slows", why:"Stage 3: urban living, girls’ education and contraception reduce family size."},
      {t:"Birth and death rates are both low; population is roughly stable", why:"Stage 4: small families are the norm. Some add a fifth stage of below-replacement fertility and decline."}
    ]},
    {id:"e2u4-l4-x4", type:"match", q:"Match each thinker to their idea about population and resources.", pairs:[
      ["Thomas Malthus","Population grows faster than food, so famine, disease and war will check it","His 1798 essay set out positive and preventive checks."],
      ["Paul Ehrlich","Population growth threatens environmental collapse","*The Population Bomb* (1968) is the classic neo-Malthusian work."],
      ["Julian Simon","Human ingenuity will create the resources a growing population needs","This is cornucopian theory (Simon, 1981)."],
      ["Ester Boserup","Population pressure pushes farmers to invent more productive methods","Boserup (1965) reversed Malthus: population growth can drive agricultural innovation."],
      ["Amartya Sen","Famines happen when people lose the ability to obtain food, even when food exists","*Poverty and Famines* (1981) focused on access and distribution."]
    ]},
    {id:"e2u4-l4-x5", type:"sort", q:"Is each one a push factor (at the place people leave) or a pull factor (at the place they go)?", buckets:["Push factor","Pull factor"], items:[
      {t:"Repeated droughts destroy harvests in Sione’s home district.", b:0, why:"Environmental hardship at the origin pushes people out."},
      {t:"A cousin already living in the capital offers a room and job leads.", b:1, why:"Networks at the destination pull migrants and lower the cost of moving."},
      {t:"Armed conflict makes the home town unsafe.", b:0, why:"Conflict is a strong push factor, often producing forced migration."},
      {t:"A coastal city has many new factory and service jobs.", b:1, why:"Job opportunities at the destination are classic pull factors."},
      {t:"The village has no secondary school.", b:0, why:"Missing services at the origin push families, especially those with teenagers, to move."},
      {t:"Universities in another country offer scholarships.", b:1, why:"Educational opportunity at the destination pulls students abroad."}
    ]},
    {id:"e2u4-l4-x6", type:"mcq", q:"In Mei’s inner-city neighbourhood, rents have doubled in five years. New cafés have replaced the hardware shop and the community laundry, and many older tenants have moved to the city’s edge. Which concept best describes this?", options:[
      {t:"Gentrification", ok:true, why:"Wealthier newcomers and investment arriving in a historically lower-income area, with rising rents displacing longer-term residents, is gentrification."},
      {t:"Suburbanization", why:"Suburbanization is growth at the city’s edge. Here the main change is inside the inner city; the displaced tenants moving out are a consequence."},
      {t:"Deindustrialization", why:"Deindustrialization is the loss of manufacturing jobs, which doesn’t describe new cafés and rising rents."},
      {t:"The demographic transition", why:"That model is about birth and death rates over national development, not neighbourhood change."}
    ]},
    {id:"e2u4-l4-x7", type:"spot", q:"Tap the problems in this opinion column about hunger.", ask:"is a problem with the argument", parts:[
      "“Between 1960 and 2000, ",
      {t:"the country’s population doubled", flag:false, why:"A plain demographic fact, which may well be accurate. Not a flaw in itself."},
      ", and ",
      {t:"in a drought year, many rural families went hungry", flag:false, why:"Reporting hunger in a drought year is a factual observation."},
      ". ",
      {t:"This proves that population growth causes hunger", flag:true, why:"Correlation read as causation, and one bad year read as a trend. The drought, prices and incomes could explain the hunger."},
      ". ",
      {t:"Food exports from the same country rose that year", flag:false, why:"This is relevant evidence, and it actually undermines the column’s claim: food existed but didn’t reach the hungry, as Amartya Sen’s work suggests."},
      ", ",
      {t:"so the only solution is to reduce the number of births", flag:true, why:"A false single cause leading to a single solution. It ignores distribution, incomes and drought relief, and risks justifying coercive policies."},
      "."
    ]},
    {id:"e2u4-l4-x8", type:"explain", q:"Explain why a country’s population grows fastest in stage 2 of the demographic transition, and why the model shouldn’t be read as a fixed path that every country will follow.", size:"4–5 sentences", model:"In stage 1, births and deaths are both high, so they roughly cancel out. In stage 2, deaths fall first while births stay high for a while, so the gap between them is wide and the population grows fast. Growth slows only when births fall too, in stage 3. But the model has limits. It is based on European history, and countries need not follow the same path or pace: the Republic of Korea moved through it in decades. It also ignores migration and stops early, although UN figures show more than half of countries now have fertility below the replacement level of 2.1.", points:["Explains that deaths fall first while births stay high in stage 2", "Links fast growth to the gap between births and deaths", "Gives one limit, such as its basis in European history or different speeds", "Gives another limit, such as ignoring migration or stopping before below-replacement fertility"]}
   ],
   apply:{intro:"Work with real population data and look at your own surroundings. Stay on public streets and don’t photograph people.", tasks:[
     {t:"Find your country’s demographic numbers", how:["Open the World Bank’s data site and search for **Birth rate, crude (per 1,000 people)** and **Death rate, crude (per 1,000 people)**: [World Bank: Birth rate, crude](https://data.worldbank.org/indicator/SP.DYN.CBRT.IN).","Note the latest values and their year for your country and for one country on a different continent.","Calculate each country’s rate of natural increase (birth rate − death rate) and turn it into a percentage (divide by 10).","Using the lesson’s table, which stage of the demographic transition does each look like? What might the model miss for each country (migration, ageing, very low fertility)?"], write:"Country, year, birth rate, death rate, natural increase, likely stage, what the model misses…"},
     {t:"Walk a changing neighbourhood", how:["Choose a neighbourhood you know or can safely walk through (or use street-level imagery from different years in an online map).","Note signs of change: new businesses, closed ones, renovations, “for sale” signs, new housing, rent advertisements.","Decide whether you see signs of gentrification, decline, suburban growth or something else.","Who seems to benefit, and who might be losing out?"], write:"Where, signs of change, what process it suggests, who gains and loses…"},
     {t:"Make an environmental justice map", how:["On an online map of your city or region, find major roads, industrial sites, waste facilities and power plants, and large parks or green spaces.","Compare which neighbourhoods are closest to the hazards and which to the green spaces.","If public data on income or housing types is available from your national statistics office, compare.","Write what you notice, being careful to describe patterns rather than blame residents."], write:"Hazards, green spaces, which areas are nearest each, the pattern I see…"}
   ], proof:"Notes with real birth and death rates (with years) for two countries and your calculations, a description of one neighbourhood’s changes and who gains or loses, and a simple environmental-justice map comparison."},
   read:[
     {book:"soc", where:"Chapter 20 “Population, Urbanization, and the Environment”: Sections 20.1 “Demography and Population”, 20.2 “Urbanization” and 20.3 “The Environment and Society”", note:"The textbook’s population figures are from the 2010s and its urban figure from 2018; this lesson gives the UN’s 2024 and 2025 figures."}
   ]
  },
  /* ===================== LESSON 5 (e2u4-l6) ===================== */
  {id:"e2u4-l6", title:"Ageing and the life course", minutes:60,
   hook:{q:"The UN projects the world’s age structure decades ahead. By the late 2070s, which group will be larger worldwide?", options:["Children under 18","People aged 65 and over","Both groups will be exactly the same size","Neither: both groups will shrink sharply"], answer:1, reveal:"**People aged 65 and over.** The UN’s *World Population Prospects 2024* projects about 2.2 billion people aged 65+ by the late 2070s, more than all children under 18. By the mid-2030s, people aged 80+ are projected to outnumber babies under one. Ageing is mostly a sign of success: fewer children dying, longer lives and smaller families. This lesson looks at age the way sociologists do. They see it as a life course shaped by history and as a population trend. They also see it as institutions (care and pensions) and attitudes (ageism) that every society has to build."},
   goals:[
     "Explain the life-course perspective and how advantage and disadvantage build up over a lifetime",
     "Calculate dependency ratios from official figures and say what they hide",
     "Compare how Japan, East Asia, Europe, Latin America and sub-Saharan Africa share care and pensions between families, markets and the state",
     "Recognise ageism and compare the main sociological theories of ageing, with their critiques",
     "Discuss relations between generations without stereotyping any of them"
   ],
   learn:[
    {h:"Age is social, not only biological", body:[
      {lead:"Picture two people turning 70 on the same day. One is a retired teacher in Osaka who swims every morning. The other is a farmer in rural Malawi who still works her fields and is raising two grandchildren. Same age, very different lives."},
      "Sociologists separate **chronological age** (years since birth), **biological age** (how the body is changing) and **social age**. Social age is the roles, rights and expectations a society attaches to an age, such as when you may vote, retire or draw a pension. [[gerontology|Gerontology]] studies ageing; **social gerontology** studies its social side. OpenStax splits later life into the **young-old** (about 65–74), the **middle-old** (75–84) and the **old-old** (85 and over) (13.1).",
      "A [[cohort]] is a group who share a demographic trait, usually birth years. Cohorts grow old in different worlds: Japanese born in the late 1940s grew up with post-war growth, those born around 1990 started work in the long slowdown ({{japan-economic-miracle}}). The textbook’s examples are mostly from the United States; this lesson uses Japan as its main case, with East Asia, Europe, Latin America and sub-Saharan Africa."
    ]},
    {h:"The life-course perspective", body:[
      "The [[life-course-perspective|life-course perspective]] studies how lives unfold inside history and social structure. Glen Elder’s *Children of the Great Depression* (1974) followed Californians born in the early 1920s. It showed that the same crash shaped children differently depending on their age and family when it hit. Four principles apply to any life:",
      {list:[
        "**Time and place**: the events and places people live through, such as a war, a boom or a pandemic.",
        "**Timing**: the same event has different effects at different ages. Losing a job at 25 is not losing it at 58.",
        "**Linked lives**: a parent’s migration or a grandparent’s illness changes other family members’ lives.",
        "**Agency**: people make choices within the limits their history and society set."
      ]},
      "[[cumulative-advantage|Cumulative advantage and disadvantage]] (Dale Dannefer, 2003, building on Robert Merton’s “Matthew effect”, 1968) explains why inequality often grows with age. A good school leads to a stable job, a pension, savings and better health care, while early setbacks pile up too. So older people are often **more unequal** than younger ones.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e2u4-l6-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="34" y="22">health, money, networks</text><path class="d-ink" d="M30 300 L30 30" stroke-width="1.5"/><path class="d-ink" d="M30 300 L330 300" stroke-width="1.5"/><path class="d-ink" d="M40 232 L110 214 L190 150 L260 104 L310 82" fill="none" stroke-width="3"/><path class="d-ink" d="M40 238 L110 236 L190 232 L260 240 L310 238" fill="none" stroke-width="3" stroke-dasharray="7 5"/><circle class="d-sage" cx="110" cy="214" r="6" stroke-width="2"/><circle class="d-sage" cx="190" cy="150" r="6" stroke-width="2"/><circle class="d-sage" cx="260" cy="104" r="6" stroke-width="2"/><circle class="d-rose" cx="110" cy="236" r="6" stroke-width="2"/><circle class="d-rose" cx="190" cy="232" r="6" stroke-width="2"/><circle class="d-rose" cx="260" cy="240" r="6" stroke-width="2"/><text class="s" x="102" y="200" text-anchor="end">degree</text><text class="s" x="182" y="140" text-anchor="end">stable job</text><text class="s" x="252" y="94" text-anchor="end">pension, savings</text><text class="s" x="110" y="262" text-anchor="middle">left school</text><text class="s" x="190" y="280" text-anchor="middle">informal work</text><text class="s" x="262" y="262" text-anchor="middle">cares for parent</text><text x="306" y="70" text-anchor="end">Life A</text><text x="306" y="226" text-anchor="end">Life B</text><path class="d-ink" d="M322 92 L322 226" stroke-width="1.5" marker-start="url(#e2u4-l6-a)" marker-end="url(#e2u4-l6-a)"/><text class="s" x="314" y="165" text-anchor="end">gap widens</text><text class="s" x="40" y="318">birth</text><text class="s" x="185" y="318" text-anchor="middle">age</text><text class="s" x="330" y="318" text-anchor="end">old age</text></svg>', alt:"A chart with age along the bottom and health, money and networks up the side. Two invented lives start close together at birth. Life A rises through a degree, a stable job and a pension with savings. Life B stays low through leaving school early, informal work and caring for a parent. A double arrow at the right shows the gap between them widening in old age.", cap:"Two invented lives that start close together. Small early advantages and setbacks compound over decades: cumulative advantage and disadvantage."},
      "Lives lengthen, but schools, jobs and pension rules still assume a three-stage life of study, work and retirement. Matilda White Riley and colleagues (1994) called this **structural lag**: a cousin of Ogburn’s cultural lag (Lesson 6)."
    ]},
    {h:"Population ageing: why, and where", body:[
      "[[population-ageing|Population ageing]] means a rising share of older people. Lesson 4’s {{demographic-transition|demographic transition}} explains why: when births stay low and lives grow longer, each generation of children is smaller than the last. Migration matters too: regions that young people leave age faster.",
      "The UN estimates that global life expectancy at birth reached **73.3 years in 2024**, and about **10%** of people were 65 or older, but the share varies enormously:",
      {table:[["Place (2024)","Aged 65+","Note"],["Japan","29.8%","The 2025 census counted 29.4%, a record"],["European Union","22.0%","Italy 24.6%"],["Republic of Korea","19.3%","Its resident register passed 20% in December 2024"],["China","14.7%","Retirement ages rising from 2025"],["Latin America and the Caribbean","9.8%","Close to the world average of 10.2%"],["Sub-Saharan Africa","3.2%","The world’s youngest region"]]},
      "Figures: World Bank, from the UN’s *World Population Prospects 2024*. Japan aged early and far: its 2025 census counted 122.97 million people, 29.4% aged 65+ (a record high) and 10.9% under 15 (a record low) ({{japan-population-change}}). Middle-income countries such as China, Thailand and Brazil are ageing at lower incomes than Japan or Europe did, often summed up as “getting old before getting rich”."
    ]},
    {h:"Dependency ratios: useful, but read the small print", body:[
      "A [[dependency-ratio|dependency ratio]] compares people of “dependent” ages with people of “working” age, per 100:",
      {list:[
        "[[old-age-dependency-ratio|Old-age dependency ratio]] = people aged 65+ ÷ people aged 15–64 × 100",
        "**Child (young-age) dependency ratio** = people aged 0–14 ÷ people aged 15–64 × 100",
        "**Total dependency ratio** = the two added together"
      ]},
      {ex:"Japan’s 2025 census: 29.4% aged 65+ and 10.9% under 15, so 100 − 29.4 − 10.9 = 59.7% aged 15–64.\nOld-age ratio = 29.4 ÷ 59.7 × 100 ≈ **49**: about one person aged 65+ for every two of working age.\nTotal ratio = (29.4 + 10.9) ÷ 59.7 × 100 ≈ **68**.\nThe World Bank’s 2024 estimate from UN data is about 51 for the old-age ratio. Sources and dates differ slightly, so name yours.", label:"Worked example: Japan’s dependency ratios"},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="22" text-anchor="middle">Sub-Saharan Africa, 2024</text><rect class="d-lup" x="20" y="34" width="122" height="40" stroke-width="2"/><rect class="d-sage" x="142" y="34" width="168" height="40" stroke-width="2"/><rect class="d-gold" x="310" y="34" width="10" height="40" stroke-width="2"/><text x="81" y="52" text-anchor="middle">0–14</text><text class="s" x="81" y="67" text-anchor="middle">41%</text><text x="226" y="52" text-anchor="middle">15–64</text><text class="s" x="226" y="67" text-anchor="middle">56%</text><path class="d-ink" d="M315 76 L315 90" stroke-width="1.5"/><text class="s" x="320" y="104" text-anchor="end">65+: 3%</text><text class="s" x="170" y="126" text-anchor="middle">78 dependants per 100 of working age,</text><text class="s" x="170" y="142" text-anchor="middle">mostly children</text><text x="170" y="178" text-anchor="middle">Japan, 2024</text><rect class="d-lup" x="20" y="190" width="34" height="40" stroke-width="2"/><rect class="d-sage" x="54" y="190" width="176" height="40" stroke-width="2"/><rect class="d-gold" x="230" y="190" width="90" height="40" stroke-width="2"/><text x="142" y="208" text-anchor="middle">15–64</text><text class="s" x="142" y="223" text-anchor="middle">59%</text><text x="275" y="208" text-anchor="middle">65+</text><text class="s" x="275" y="223" text-anchor="middle">30%</text><path class="d-ink" d="M37 232 L37 246" stroke-width="1.5"/><text class="s" x="20" y="260">0–14: 11%</text><text class="s" x="170" y="282" text-anchor="middle">70 dependants per 100 of working age,</text><text class="s" x="170" y="298" text-anchor="middle">mostly older people</text><text class="s" x="170" y="322" text-anchor="middle">Source: World Bank / UN WPP 2024</text></svg>', alt:"Two bars, each divided into three age groups. Sub-Saharan Africa: 41% aged 0–14, 56% aged 15–64 and 3% aged 65+, or 78 dependants per 100 people of working age, mostly children. Japan: 11% aged 0–14, 59% aged 15–64 and 30% aged 65+, or 70 dependants per 100 of working age, mostly older people.", cap:"Similar total dependency, opposite causes. One region needs schools and jobs for the young; the other needs care and pensions."},
      {warn:"Age is not dependency. Many people over 65 work, volunteer, mind grandchildren and pay taxes; many aged 15–64 are studying, unemployed or caring full time. **Economic** dependency ratios (people not in work ÷ people in work) capture this, and policy can lower them. More older people or women in paid work reduces the ratio, even if the age structure stays the same."},
      {fix:"OpenStax (13.1) defines the dependency ratio by **labour force** (people not working compared with people working), which is an economic ratio. UN and World Bank figures use **age groups**. Check which one a source means."}
    ]},
    {h:"Who cares? Families, markets and the state", body:[
      "Longer lives usually include years of needing help with daily life: [[long-term-care|long-term care]]. Every society divides it between **families**, the **state**, **markets** (paid services) and **communities**. Feminist sociologists stress that women do most unpaid family care ({{unpaid-care-work}}).",
      {list:[
        "**Japan** created public long-term care insurance in 2000: everyone aged 40+ pays in, and older people assessed as needing care can use home help, day centres or care homes. It moved part of the work from daughters and daughters-in-law to paid professionals. Germany (1995) and the Republic of Korea (2008) have similar schemes.",
        "**China and much of East Asia** value [[filial-piety|filial piety]]. China’s revised law on older people’s rights, in force since July 2013, tells adult children who live apart to visit often. Singapore’s Maintenance of Parents Act (1995) lets parents claim support. With smaller families and young people in distant cities, governments are also building community care.",
        "**Sub-Saharan Africa**: care is mostly family-based, and older people are carers too: many grandparents raise grandchildren whose parents have died of AIDS or work far away (Lesson 1).",
        "**Global care chains**: migrant women do much paid care work in richer countries ([[global-care-chain]], {{gender-and-migration}}). Japan has admitted foreign care workers under partnership agreements with Indonesia (2008), the Philippines (2009) and Viet Nam (2014), and later the Specified Skilled Worker status ({{japan-immigration-policy}})."
      ]},
      "Japan also tests care robots and sensors. Supporters see help for a shrinking workforce; critics, including some care workers, worry they could replace human contact rather than support it."
    ]},
    {h:"Pensions: who pays for later life?", body:[
      {table:[["Design","How it works","Examples"],["[[pay-as-you-go|Pay-as-you-go]] public pension","Today’s workers’ contributions and taxes pay today’s pensioners: a contract between generations","Japan’s national and employees’ pensions; most of Europe"],["Funded pension","Each worker or fund saves; the pension depends on what was paid in and on investment returns","Chile’s individual accounts (from 1981); workplace funds in many countries"],["[[social-pension|Social (non-contributory) pension]]","Paid from taxes to older people whatever their work history, sometimes only to the poor","Bolivia’s Renta Dignidad (2008); South Africa’s older persons’ grant; Kenya’s Inua Jamii for people aged 70+"]]},
      "Pay-as-you-go systems feel the dependency ratio directly: fewer contributors per pensioner means higher contributions, lower pensions, later retirement or more tax money. Contributory systems reach mainly people with formal jobs, missing many [[informal-economy|informal]] workers (Lesson 3), which is one reason social pensions have spread in Africa, Asia and Latin America. The ILO estimates that 52.4% of the world’s people are covered by at least one social protection benefit (*World Social Protection Report 2024–26*). So in many places the family is still the main pension.",
      "**China** began raising its statutory retirement ages on 1 January 2025, over 15 years: men from 60 to 63, women from 50 or 55 (depending on the job) to 55 or 58. **Japan** lets people start the basic pension at any age from 60 to 75 (smaller payments if early, larger if late). It requires employers to offer work up to 65 to employees who want it, and to try to up to 70.",
      "Raising pension ages is debated. Supporters argue it keeps systems affordable as lives lengthen; critics note that manual workers and poorer groups often have shorter, less healthy lives, so one later age can be unfair. The trade-off is partly about values."
    ]},
    {h:"Theories of ageing", body:[
      {table:[["Lens","Theory","Main critique"],["Functionalism","**Disengagement** (Cumming and Henry, 1961): withdrawing from roles is natural and lets society hand them on","Arlie Hochschild (1975) and others: many older people don’t want to withdraw, and the theory can excuse pushing them out"],["Functionalism","**Activity** (Havighurst, 1961) and **continuity** (Atchley): staying active, and keeping one’s habits and identity, bring well-being","Assumes people have the health and money to stay active"],["Conflict","**Age stratification** (Riley, Johnson and Foner, 1972): age groups get unequal resources. **Modernization** (Cowgill and Holmes, 1972): older people lose status as societies industrialize","Too simple: older people’s status also varies by class, gender and policy"],["Symbolic interactionism","**Subculture of ageing** (Rose, 1962), **selective optimization with compensation** (Baltes and Baltes, 1990), **gerotranscendence** (Tornstam, 2005)","A focus on individuals can overlook structures such as pensions and ageism"]]},
      "Feminist scholars add that ageing is gendered. Susan Sontag wrote of “the double standard of aging” (1972): women are judged as old earlier than men. Women also live longer on average and earn less over a lifetime, so in many countries they are more likely to be poor in old age ({{feminist-theory}})."
    ]},
    {h:"Ageism and relations between generations", body:[
      "[[ageism|Ageism]] is stereotyping, prejudice and discrimination based on age; the US psychiatrist Robert Butler coined the word in the late 1960s. WHO says half the world’s population is ageist against older people. It says ageism can be **institutional** (rules that ration care or jobs by age), **interpersonal** (patronising talk) or **self-directed** (believing stereotypes about yourself). It targets the young too. WHO recommends policy and law, education and **intergenerational contact**; the UN has declared 2021–2030 the Decade of Healthy Ageing.",
      "Are generations in conflict? Some commentators in Japan and elsewhere speak of a “silver democracy”: older people are numerous and vote more, so policy may tilt towards pensions. Others answer that families pass money, housing and childcare in both directions and that older voters disagree among themselves. Researchers test both claims; it is a debate, not a settled fact. Generation labels such as “boomers” also mislead: class, gender, place and migration divide every cohort.",
      {table:[["Misconception","Closer to the truth"],["Ageing happens only in rich countries.","Most of the world is ageing, including many middle-income countries."],["A high dependency ratio means collapse.","It measures age, not work. Employment, productivity, migration and policy change the real burden."],["Older people are a burden.","Older people also work, pay taxes, volunteer and support younger relatives."]]},
      {key:"Ageing is a social process. The same years of life are lived very differently depending on history, inequality and the institutions a society builds for care and income."},
      {terms:["gerontology","cohort","life-course-perspective","cumulative-advantage","dependency-ratio","old-age-dependency-ratio","long-term-care","filial-piety","pay-as-you-go","social-pension","ageism","disengagement-theory","activity-theory","age-stratification"]}
    ]}
   ],
   try:[
    {id:"e2u4-l6-x1", type:"number", q:"In the invented country of Rivanda, 6.3 million people are aged 65 or over, 7.2 million are under 15 and 18 million are aged 15–64. What is Rivanda’s **old-age dependency ratio** (per 100 people aged 15–64)?", answer:35, tol:0.05, unit:"per 100", why:"Old-age dependency ratio = people 65+ ÷ people 15–64 × 100 = 6.3 ÷ 18 × 100 = 0.35 × 100 = 35. There are 35 people aged 65+ for every 100 people of working age.", wrongs:[
      {v:75, tol:0.05, why:"That’s the **total** dependency ratio: (6.3 + 7.2) ÷ 18 × 100 = 75. The question asks only about people aged 65+."},
      {v:0.35, tol:0.005, why:"That’s the ratio as a decimal. Dependency ratios are given per 100, so multiply by 100."},
      {v:20, tol:0.05, why:"That’s the share of older people in the **whole** population: 6.3 ÷ 31.5 × 100 = 20%. The ratio divides by the working-age group only (18 million)."},
      {v:285.7, tol:0.5, why:"You divided the working-age group by the older group (18 ÷ 6.3). Put the people aged 65+ on top."}
    ], hint2:"Divide the people aged 65+ by the people aged 15–64, then multiply by 100."},
    {id:"e2u4-l6-x2", type:"sort", q:"Which life-course principle does each situation mainly show?", buckets:["Time and place","Timing","Linked lives","Agency"], items:[
      {t:"Two cousins of the same age grow up in different countries, one during a civil war and one in peacetime, and their schooling differs sharply.", b:0, why:"The historical events and places people live through shape their lives: time and place."},
      {t:"Hana’s factory closes. At 24 she retrains easily; her colleague, aged 59, never finds steady work again.", b:1, why:"The same event has different effects at different ages: timing."},
      {t:"When Tomás’s mother has a stroke, he cuts his working hours to care for her, and his own pension savings fall.", b:2, why:"An event in one person’s life (the stroke) changes another’s (Tomás’s work and pension): linked lives."},
      {t:"Fatima’s family expects her to marry at 18, but she negotiates to finish nursing school first.", b:3, why:"Making choices within the limits she faces is agency."},
      {t:"A grandmother in Lusaka raises her grandchildren while their parents work in another country.", b:2, why:"The parents’ migration reshapes the grandmother’s later life: linked lives."},
      {t:"Losing a parent at age 8 affects Kenji very differently from losing a parent at 45.", b:1, why:"The age at which an event happens changes its effect: timing."},
      {t:"After years of informal work, Sione and his neighbours set up a savings group to build a fund for old age.", b:3, why:"Acting to shape his own future within the options available is agency."}
    ]},
    {id:"e2u4-l6-x3", type:"match", q:"Match each theory of ageing to its main claim.", pairs:[
      ["Disengagement theory","Withdrawing from roles in later life is natural and lets younger people take them over","Cumming and Henry (1961), a functionalist theory. Critics say many older people don’t want to withdraw."],
      ["Activity theory","The more active and involved older people are, the happier they tend to be","Havighurst (1961); later critics note that staying active needs health and money."],
      ["Continuity theory","Older people keep their habits, beliefs and relationships consistent as they adapt","Atchley’s theory stresses continuity of identity rather than activity for its own sake."],
      ["Age stratification theory","Different age groups have unequal access to society’s resources","Riley, Johnson and Foner (1972), a conflict-perspective theory that treats age like class."],
      ["Modernization theory of ageing","Older people lose status as societies industrialize","Cowgill and Holmes (1972). Critics say status also depends on class, gender and policy."]
    ]},
    {id:"e2u4-l6-x4", type:"spot", q:"A newspaper column says this about ageing. Tap the parts that are problems with the argument.", ask:"is a problem with the argument", parts:[
      {t:"Japan’s 2025 census counted 29.4% of people aged 65 or over,", flag:false, why:"An accurate, dated figure. Not a flaw."},
      " ",
      {t:"according to the Statistics Bureau’s published results.", flag:false, why:"Naming the official source is good practice."},
      " ",
      {t:"This “silver tsunami” means every older person is a burden on the young,", flag:true, why:"A loaded metaphor plus an overgeneralization. Many older people work, pay taxes, volunteer and care for others."},
      " ",
      {t:"so the dependency ratio proves the pension system will collapse by 2040,", flag:true, why:"An age ratio can’t prove collapse. Pension finances depend on employment, contributions, productivity and policy, and no projection is cited."},
      " and ",
      {t:"the only possible answer is to cut every pension in half.", flag:true, why:"A false single solution. Options include later retirement for those who can work, higher employment, migration, tax funding and productivity."},
      " ",
      {t:"Other ageing countries, such as Korea and Italy, face similar questions.", flag:false, why:"Accurate: both have high and rising shares of older people."}
    ]},
    {id:"e2u4-l6-x5", type:"mcq", q:"Ana sold vegetables at a city market for 40 years with no contract and no registration. Now 70, she has no pension from her work. Which pension design is most likely to reach someone like her?", options:[
      {t:"A social pension paid from taxes", ok:true, why:"Right. Social (non-contributory) pensions don’t depend on a work record, so they can reach people who worked informally, like Bolivia’s Renta Dignidad or Kenya’s Inua Jamii."},
      {t:"An employees’ pension based on payroll contributions", why:"This pays out only to people who paid contributions through formal jobs. Ana never had one."},
      {t:"A funded individual account built from monthly savings", why:"Ana would have needed to save into a registered account during her working life, which informal workers rarely can."},
      {t:"A higher retirement age for everyone in the country", why:"Raising the age changes when existing pensions start. It doesn’t create a pension for someone who has none."}
    ]},
    {id:"e2u4-l6-x6", type:"sort", q:"WHO describes three forms of ageism. Which form does each example show?", buckets:["Institutional","Interpersonal","Self-directed"], items:[
      {t:"A hospital rule offers a treatment only to patients under 70, whatever their health.", b:0, why:"A rule built into an organization’s policy is institutional ageism."},
      {t:"A shop assistant speaks slowly and loudly to Dmitri because he has grey hair.", b:1, why:"Patronising treatment in a face-to-face encounter is interpersonal ageism."},
      {t:"Priya, 66, doesn’t apply for a course because she believes she is too old to learn.", b:2, why:"Applying an age stereotype to yourself is self-directed ageism."},
      {t:"A job advertisement says applicants must be aged 25–35.", b:0, why:"An age limit written into hiring rules is institutional."},
      {t:"Colleagues ignore a 23-year-old’s ideas because “young people have no experience”.", b:1, why:"Ageism can target the young too. This happens in everyday interaction: interpersonal."},
      {t:"Kenji stops dancing in public at 60, thinking older people shouldn’t draw attention to themselves.", b:2, why:"He limits his own behaviour because of an internalised stereotype: self-directed."}
    ]},
    {id:"e2u4-l6-x7", type:"mcq", q:"A study finds that at age 30 the health and income gaps between people who left school at 16 and university graduates are small, but at age 70 they are large. Which idea explains this pattern best?", options:[
      {t:"Cumulative advantage and disadvantage", ok:true, why:"Yes. Small early differences compound over decades: jobs, pensions, savings and health care build on each other."},
      {t:"Disengagement theory", why:"Disengagement is about withdrawing from roles in later life. It doesn’t explain why gaps between groups grow."},
      {t:"The demographic transition", why:"That model describes birth and death rates across a whole population, not inequality within a cohort."},
      {t:"Gerotranscendence", why:"Gerotranscendence describes a shift in outlook in later life, not widening gaps in health and income."}
    ]},
    {id:"e2u4-l6-x8", type:"explain", q:"Two countries have the same old-age dependency ratio. Explain why the real pressure on workers and pensions could still be very different.", size:"3–5 sentences", model:"The old-age dependency ratio only compares people aged 65 and over with people aged 15–64. It measures age, not work. In one country, many older people may still work, volunteer, mind grandchildren and pay taxes, while in the other many people aged 15–64 may be studying, unemployed or caring full time. Employment, productivity, migration and policy all change the real burden; an economic dependency ratio (people not in work ÷ people in work) captures this better. Pension design matters too: pay-as-you-go systems feel the ratio most directly.", points:["Explains that the ratio measures age, not work", "Gives an example of older people working or working-age people not working", "Names factors that change the real burden, such as employment, migration or policy", "Mentions the economic dependency ratio or pension design"]}
   ],
   apply:{intro:"Look at ageing in your own world. Be respectful: talk only with people who agree, let them skip any question, and don’t record anyone without permission.", tasks:[
     {t:"Draw a life-course timeline", how:["With a consenting older relative or friend (or using a published memoir or biography), draw a timeline of their life from birth to now.","Mark three historical events they lived through (time and place) and how old they were at each (timing).","Mark two moments when another person’s life changed theirs (linked lives) and one choice they made against the odds (agency).","Note one advantage or setback that seems to have built up over time."], write:"Whose life, three events and ages, linked lives, one choice, what built up over time…"},
     {t:"Calculate your country’s dependency ratios", how:["Open the World Bank data pages for “Population ages 65 and above (% of total population)” and “Age dependency ratio, old (% of working-age population)”, or your national statistics office.","Note the latest values and their year for your country, for Japan and for one country on another continent.","Check one old-age ratio yourself from the age shares: 65+ share ÷ 15–64 share × 100.","Write one thing each ratio hides (for example, older people in work, young people studying, informal work)."], write:"Country, year, 65+ share, old-age ratio (with my check), what it hides…"},
     {t:"Run a small ageism audit", how:["Choose one source of images: television adverts, a shop’s birthday cards, a news website or a social media feed.","Look at 15–20 images or adverts that show people of different ages.","Count how often older people appear, and in what roles (active, ill, comic, wise, consumer, worker).","Note any examples of the three forms of ageism, and anything that breaks the stereotypes."], write:"Source, number of images, how older people are shown, examples of ageism, counter-examples…"}
   ], proof:"Notes with a life-course timeline marked with the four principles, dated dependency ratios for three countries with your own check and one thing each hides, and a small coded audit of how older people are shown in one media source."},
   read:[
     {book:"soc", where:"Chapter 13 “Aging and the Elderly”: Sections 13.1 “Who Are the Elderly? Aging in Society”, 13.2 “The Process of Aging”, 13.3 “Challenges Facing the Elderly” and 13.4 “Theoretical Perspectives on Aging”", note:"On LibreTexts these are 13.2–13.5. The book’s figures and examples are mostly from the United States; this lesson gives global ones."},
     {book:"sbj", where:"Chapter 2 “Population” and Chapter 15 “Social Security, Health Care, and Public Hygiene”", note:"Official figures for Japan’s age structure, pensions and long-term care."}
   ]
  },
  /* ===================== LESSON 6 (e2u4-l5) ===================== */
  {id:"e2u4-l5", title:"Media, technology and social change", minutes:60,
   hook:{q:"A social movement that once filled the streets has gone quiet. What can you safely conclude?", options:["It has failed","Its supporters lost interest","Not much yet: fading can also follow success","The government must have banned it"], answer:2, reveal:"**Not much yet.** Movements pass through typical stages, and the last one, decline, can mean the goal was won. This lesson explains how [[social-movement|social movements]] rise and what helps them succeed. It also shows how media and technology shape what a society treats as important."},
   goals:[
     "Analyse media and technology through the main sociological lenses",
     "Explain gatekeeping, media consolidation and the digital divide, with current figures",
     "Classify social movements by type and stage, and explain why they rise using resource mobilization, framing and new social movement theory",
     "Explain the main causes and theories of social change"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Read Chapter 8 “Media and Technology”: the digital divide part of **8.1** “Technology Today”, then **8.2** “Media and Technology in Society”, **8.3** “Global Implications of Media and Technology” and **8.4** “Theoretical Perspectives on Media and Technology”. Then read Chapter 21, sections **21.2** “Social Movements” and **21.3** “Social Change”. (On LibreTexts: 8.2–8.5 and 21.3–21.4.) Section 21.1 on crowds is optional. Media shape what a society treats as important; movements are how people push change on purpose.",
      {look:[
        "What is the digital divide, and what knowledge gap does it create? (8.1)",
        "What do gatekeeping and media consolidation mean, and how does each lens see media and technology? (8.2, 8.4)",
        "What are Aberle’s five types of social movement, and what stages do movements pass through? (21.2)",
        "How do resource mobilization, framing and new social movement theory explain movements, and what four forces cause social change? (21.2, 21.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "**Technology** is applying science to everyday problems; **media** are all print, digital and electronic communication; **new media** are interactive. Media are also an {{agents-of-socialization|agent of socialization}}. (8.1, 8.2)",
        "The [[digital-divide|digital divide]] is unequal access to technology along lines of income, race, class, gender and place. It builds a [[knowledge-gap|knowledge gap]]. **E-readiness**, the skill to find and use digital information, matters as much as owning a device. (8.1)",
        "[[gatekeeping|Gatekeeping]] filters countless possible messages into the few that reach the public. [[media-consolidation|Media consolidation]] puts most outlets in a few owners’ hands, an **oligopoly**. (8.2, 8.4)",
        "Functionalists see media informing, entertaining and socializing, but warn of a **narcotizing dysfunction**: knowing about a problem feels like acting. Conflict theorists see ownership, the divide and surveillance reinforcing power. Feminists study stereotyped images and who builds technology. Interactionists see devices as status symbols and media helping construct reality. (8.4)",
        "A [[social-movement|social movement]] is an organized group working towards a shared goal. Aberle’s types: **reform** (one specific change), **revolutionary** (change everything), **resistance** (stop or undo a change), **religious/redemptive** (inner change) and **alternative** (limited self-improvement). Typical stages: preliminary (emergence), coalescence, institutionalization, decline; decline can mean success. (21.2)",
        "[[resource-mobilization|Resource mobilization]] (McCarthy and Zald, 1977): success depends on money, skills, networks and organizations. [[framing|Framing]] (Snow and Benford): **diagnostic** (the problem and who is to blame), **prognostic** (the solution), **motivational** (the call to act). [[new-social-movements|New social movement theory]] explains movements about identity and quality of life. (21.2)",
        "[[social-change|Social change]] comes from technology, social institutions, population and the environment, usually together. Ogburn’s [[cultural-lag|cultural lag]]: norms trail technology. [[modernization|Modernization]] increases specialization, but judging it by Western technology carries an ethnocentric bias. (21.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 310"><defs><marker id="e2u4-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="170" y="20" text-anchor="middle">events and messages</text><g class="d-soft" stroke-width="1.5"><circle cx="40" cy="40" r="7"/><circle cx="84" cy="52" r="7"/><circle cx="124" cy="36" r="7"/><circle cx="164" cy="58" r="7"/><circle cx="204" cy="38" r="7"/><circle cx="244" cy="56" r="7"/><circle cx="290" cy="40" r="7"/><circle cx="30" cy="76" r="7"/><circle cx="104" cy="80" r="7"/><circle cx="184" cy="82" r="7"/><circle cx="264" cy="80" r="7"/><circle cx="312" cy="70" r="7"/></g><path class="d-panel" d="M20 100 L320 100 L230 210 L110 210 Z" stroke-width="2"/><text x="170" y="132" text-anchor="middle">Gatekeepers</text><text class="s" x="170" y="152" text-anchor="middle">owners, editors,</text><text class="s" x="170" y="168" text-anchor="middle">algorithms, moderators</text><rect class="d-lup" x="92" y="222" width="74" height="26" rx="5" stroke-width="2"/><text class="s" x="129" y="239" text-anchor="middle">story</text><rect class="d-lup" x="174" y="222" width="74" height="26" rx="5" stroke-width="2"/><text class="s" x="211" y="239" text-anchor="middle">story</text><path class="d-ink" d="M170 252 L170 280" stroke-width="2" marker-end="url(#e2u4-l5-a)"/><text x="170" y="300" text-anchor="middle">public agenda</text></svg>', alt:"Many small circles representing events at the top pass down into a funnel labelled gatekeepers: owners, editors, algorithms and moderators. Two stories come out of the bottom and lead to the public agenda.", cap:"Gatekeeping. On social platforms, recommendation algorithms and content moderation now do much of the sorting that editors once did."},
      {fig:'<svg viewBox="0 0 340 582"><defs><marker id="e2u4-l5-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="8" width="324" height="54" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">1 Preliminary (emergence)</text><text class="s" x="170" y="49" text-anchor="middle">people notice a problem; leaders appear</text><path class="d-ink" d="M170 64 L170 84" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-gold" x="8" y="86" width="324" height="54" rx="8" stroke-width="2"/><text x="170" y="108" text-anchor="middle">2 Coalescence</text><text class="s" x="170" y="127" text-anchor="middle">groups form, publicise, recruit, protest</text><path class="d-ink" d="M170 142 L170 162" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-sage" x="8" y="164" width="324" height="54" rx="8" stroke-width="2"/><text x="170" y="186" text-anchor="middle">3 Institutionalized</text><text class="s" x="170" y="205" text-anchor="middle">formal organization, paid staff, budgets</text><path class="d-ink" d="M170 220 L170 240" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-rose" x="8" y="242" width="324" height="54" rx="8" stroke-width="2"/><text x="170" y="264" text-anchor="middle">4 Decline</text><text class="s" x="170" y="283" text-anchor="middle">the movement winds down</text><path class="d-ink" d="M28 296 L28 497" stroke-width="2"/><path class="d-ink" d="M28 329 L46 329" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-panel" x="48" y="312" width="184" height="34" rx="6" stroke-width="2"/><text x="140" y="334" text-anchor="middle">success</text><path class="d-ink" d="M28 371 L46 371" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-panel" x="48" y="354" width="184" height="34" rx="6" stroke-width="2"/><text x="140" y="376" text-anchor="middle">co-optation</text><path class="d-ink" d="M28 413 L46 413" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-panel" x="48" y="396" width="184" height="34" rx="6" stroke-width="2"/><text x="140" y="418" text-anchor="middle">repression</text><path class="d-ink" d="M28 455 L46 455" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-panel" x="48" y="438" width="184" height="34" rx="6" stroke-width="2"/><text x="140" y="460" text-anchor="middle">failure</text><path class="d-ink" d="M28 497 L46 497" stroke-width="2" marker-end="url(#e2u4-l5-b)"/><rect class="d-panel" x="48" y="480" width="184" height="34" rx="6" stroke-width="2"/><text x="140" y="502" text-anchor="middle">goes mainstream</text><text class="s" x="170" y="540" text-anchor="middle">Decline isn’t always defeat: winning, or</text><text class="s" x="170" y="556" text-anchor="middle">becoming part of normal politics, also</text><text class="s" x="170" y="572" text-anchor="middle">ends the movement phase.</text></svg>', alt:"Four stages stacked top to bottom: preliminary (emergence), coalescence, institutionalization and decline. From decline, a line branches to five possible outcomes listed below it: success, co-optation, repression, failure, and going mainstream.", cap:"The social movement life cycle. Co-optation means leaders are absorbed into the institutions they challenged."}
    ]},
    {h:"Key terms", body:[ {terms:["digital-divide","knowledge-gap","gatekeeping","agenda-setting","media-consolidation","social-movement","resource-mobilization","framing","new-social-movements","social-change"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Agenda-setting.** McCombs and Shaw’s 1968 election study (published 1972) found a match. The issues voters ranked most important were the issues media covered most: media tell people what to think **about**. Online, algorithms and moderation now do much gatekeeping; Eli Pariser’s “filter bubbles” (2011) remain debated. Lesson 7 follows algorithms beyond the news, into welfare, work and borders ({{algorithms-society}}). Public broadcasters such as the BBC, NHK, ABC and SABC are funded differently from commercial media.\n\n**The divide today.** The ITU estimated about **74%** of the world, around 6 billion people, used the internet in 2025. That was about 94% in high-income and 23% in low-income countries. From 71% in 2024 that is a rise of 3 percentage points, or about 4.2 **percent** (3 ÷ 71 × 100). Researchers see three levels: access, skills and use, and outcomes, so a device alone doesn’t close the divide. Kenya’s M-Pesa (2007) shows phones leapfrogging banks.\n\n**Why movements rise.** Relative deprivation (feeling worse off than others) and political opportunity (elites split, repression eases) also matter. Social media cut the cost of organizing, as in the Arab Spring (2010–11). But Malcolm Gladwell (2010) called online ties weak, and Zeynep Tufekci (2017) found fast-built movements can lack staying power. Older theories of change are evolutionary, functionalist, conflict and cyclical."}
    ]}
   ],
   try:[
    {id:"e2u4-l5-x1", type:"sort", q:"These movements are invented. Which of Aberle’s types does each fit best?", buckets:["Reform","Revolutionary","Resistance","Alternative"], items:[
      {t:"A campaign to lower the voting age to 16, keeping the rest of the system as it is", b:0, why:"Changing one specific part of society is a reform movement."},
      {t:"A movement aiming to replace the entire political and economic system with a new one", b:1, why:"Seeking to change every aspect of society is revolutionary."},
      {t:"Residents organizing to stop a new motorway that would cut through their district", b:2, why:"Trying to prevent a change is a resistance movement."},
      {t:"A group encouraging individuals to cut their own screen time", b:3, why:"Limited self-improvement for individuals is an alternative movement."},
      {t:"Campaigners demanding that a recently passed law be repealed", b:2, why:"Trying to undo a change is also resistance."},
      {t:"A campaign for a national law requiring wheelchair access to public buildings", b:0, why:"A specific change within the existing system is reform."}
    ]},
    {id:"e2u4-l5-x2", type:"order", q:"A neighbourhood campaign for safer streets for cyclists grows over ten years. Put its stages in life-cycle order.", items:[
      {t:"After several accidents, residents start talking about dangerous roads, and a few people start speaking out.", why:"Emergence (the preliminary stage): awareness grows and leaders appear."},
      {t:"Local groups join together, hold rides and meetings, and get media coverage.", why:"Coalescence: people organize, publicise and recruit."},
      {t:"A registered charity with paid staff lobbies the council and runs training.", why:"Institutionalization: the movement becomes a formal organization."},
      {t:"New cycle lanes are built; membership falls as people feel the goal is met.", why:"Decline, here through success. Decline doesn’t always mean defeat."}
    ]},
    {id:"e2u4-l5-x3", type:"match", q:"Match each campaign activity to the concept it shows.", pairs:[
      ["“Untreated factory waste is poisoning the lake, and the regulator has ignored it.”","Diagnostic framing","Stating the problem and who is responsible is diagnostic framing."],
      ["“Close the discharge pipe and make the factory pay for the clean-up.”","Prognostic framing","Offering a solution and how to carry it out is prognostic framing."],
      ["“Come to the town hall on Monday at 6 pm.”","Motivational framing","A call to action is motivational framing."],
      ["The campaign wins a grant, hires an organizer and borrows a church hall for meetings.","Resource mobilization","Gathering money, skills and space to act is resource mobilization."],
      ["A movement centres on dignity and recognition for a group’s identity rather than wages.","New social movement theory","Focusing on identity, culture and quality of life is what new social movement theory explains."]
    ]},
    {id:"e2u4-l5-x4", type:"mcq", q:"Sione has a smartphone with a data plan, but he struggles to fill in online job applications, can’t tell which websites are trustworthy, and gives up. Which level of the digital divide does this show most clearly?", options:[
      {t:"Skills and use: he has access but lacks the digital skills to use it effectively.", ok:true, why:"Right. The access gap is closed, but a second-level divide in skills and use remains, so he can’t turn access into outcomes."},
      {t:"Access: he has no way to get online.", why:"He has a phone and data, so access isn’t the problem here."},
      {t:"There’s no digital divide, because he owns a smartphone.", why:"Owning a device closes only the first level. Skills and outcomes are also part of the divide."},
      {t:"Media consolidation: too few companies own job websites.", why:"Consolidation is about media ownership, not one person’s ability to use online services."}
    ]},
    {id:"e2u4-l5-x5", type:"spot", q:"A blog post sums up a protest movement like this. Tap the problems with the reasoning.", ask:"is a problem with the reasoning", parts:[
      {t:"Activists used social media to share videos and plan marches", flag:false, why:"That’s a reasonable, well-documented description of how many recent movements organized."},
      ". ",
      {t:"So social media caused the uprising", flag:true, why:"Using a tool isn’t the same as causing the event. Grievances, organizations, resources and political opportunities matter too."},
      ". ",
      {t:"Older networks such as trade unions, mosques, churches and student groups also mobilized people", flag:false, why:"Correct and important: offline networks are a key resource in resource-mobilization terms."},
      ". ",
      {t:"Before social media, people could never organize mass protests", flag:true, why:"False history: movements from women’s suffrage to the anti-apartheid struggle organized mass action without the internet."},
      ". ",
      {t:"Therefore every movement with many online followers will succeed", flag:true, why:"Overgeneralization. Online support can be broad but shallow; critics such as Gladwell and Tufekci explain why it may not last."},
      "."
    ]},
    {id:"e2u4-l5-x6", type:"sort", q:"Which lens does each claim about media come from?", buckets:["Functionalism","Conflict theory","Feminist theory","Symbolic interactionism"], items:[
      {t:"Television news gives a whole country shared information during a disaster.", b:0, why:"Highlighting how media meet a society’s need for shared information is functionalist."},
      {t:"A few owners control most newspapers, so their interests shape what is covered.", b:1, why:"Linking ownership and power to whose voices are heard is the conflict view."},
      {t:"Video games often show women only as rewards or decoration.", b:2, why:"Examining gendered representation is feminist theory."},
      {t:"People show their status through which phone brand they carry.", b:3, why:"Treating technology as a symbol whose meaning people create is symbolic interactionism."},
      {t:"Recommendation algorithms show richer users different job ads from poorer users.", b:1, why:"Technology reproducing inequality between groups is a conflict concern."},
      {t:"Friends online come to treat a celebrity as almost a personal acquaintance.", b:3, why:"How media shape relationships and people’s sense of reality is a symbolic interactionist topic."}
    ]},
    {id:"e2u4-l5-x7", type:"number", q:"ITU figures show the share of the world’s population using the internet rose from 71% in 2024 to 74% in 2025. By what **percentage** did the share grow? (Round to one decimal place.)", answer:4.2, tol:0.06, unit:"%", why:"Percentage change = (new − old) ÷ old × 100 = (74 − 71) ÷ 71 × 100 = 3 ÷ 71 × 100 ≈ 4.2%. The rise was 3 **percentage points**, which is a growth of about 4.2 **percent**. News reports often mix these up.", wrongs:[
      {v:3, tol:0.05, why:"That’s the change in percentage points (74 − 71). The question asks for percentage change: divide the 3 points by the starting value of 71."},
      {v:4.05, tol:0.04, why:"You divided by the new value (74). Percentage change uses the starting value: 3 ÷ 71."},
      {v:104.2, tol:0.1, why:"That’s the new value as a percentage of the old one. Subtract 100 to get the change."}
    ], hint2:"Change ÷ starting value × 100."},
    {id:"e2u4-l5-x8", type:"explain", q:"A community group wants its city to build safe cycle lanes. Using Snow and Benford’s framing, explain the three frames the group would need, and why framing matters alongside resources.", size:"3–5 sentences", model:"Framing is how a movement presents an issue so that people understand it and want to join. A diagnostic frame names the problem and who is to blame: ‘cyclists are being hurt because the city builds roads only for cars’. A prognostic frame offers the solution: ‘protected lanes on the five busiest roads’. A motivational frame is the call to act: ‘come to Thursday’s council meeting’. Resource mobilization theory says success also depends on money, skills, networks and organizations, but without convincing frames, resources may not turn into support.", points:["Gives a diagnostic frame (problem and blame)", "Gives a prognostic frame (solution)", "Gives a motivational frame (call to act)", "Compares framing with resource mobilization"]}
   ],
   apply:{intro:"Look at the media you use and the movements around you. Observe, read and reflect; you don’t need to join or oppose anything.", tasks:[
     {t:"Audit your media diet", how:["For two days, note every source of news or information you use: apps, websites, broadcasters, social feeds, group chats.","For each, find out who owns it (look for an “About” page) and whether a person or an algorithm chose what you saw.","Count how many different owners you rely on.","Reflect: where are the gatekeepers in your information diet?"], write:"Sources, owners, human or algorithm, what I notice…"},
     {t:"Compare three front pages", how:["On the same day, open the home pages of three news outlets, including at least one from another country and one public service broadcaster if available.","Note the top three stories on each.","Which stories appear everywhere, and which only on one? How is the same story framed differently (headline words, photos, who is quoted)?","Write what this shows about gatekeeping and agenda-setting."], write:"Outlets, top stories, differences in framing…"},
     {t:"Analyse one social movement", how:["Choose any movement, past or present, from your region or one you have read about.","Classify it with Aberle’s types and place it in the life cycle.","Identify its resources (money, people, organizations, networks) and its diagnostic, prognostic and motivational frames, using its own published materials.","Describe it fairly, in the terms its supporters use, and note what its critics argue."], write:"Movement, type, stage, resources, frames, what critics say…"}
   ], proof:"Notes with a two-day media audit naming owners and gatekeepers, a three-outlet comparison of framing, and a balanced analysis of one social movement by type, stage, resources and frames."},
   read:[
     {book:"soc", where:"Chapter 8 “Media and Technology”: Sections 8.1 “Technology Today” (for the digital divide), 8.2 “Media and Technology in Society”, 8.3 “Global Implications of Media and Technology” and 8.4 “Theoretical Perspectives on Media and Technology”"},
     {book:"soc", where:"Chapter 21 “Social Movements and Social Change”: Sections 21.2 “Social Movements” and 21.3 “Social Change”", note:"Section 21.1 “Collective Behavior” covers crowds and flash mobs, if you want more."}
   ]
  },
  /* ===================== LESSON 7 (e2u4-l7) ===================== */
  {id:"e2u4-l7", title:"Algorithms, platforms and borders: a sociology of AI", minutes:60,
   hook:{q:"In 2020 the UK Home Office stopped using an algorithm that sorted visa applications into red, amber and green. What led to the pause?", options:["A legal challenge arguing it discriminated by nationality","A cyber-attack that leaked applicants’ personal data","A new law banning computers in visa decisions","Complaints that it approved applications too slowly"], answer:0, reveal:"**A legal challenge.** The Joint Council for the Welfare of Immigrants, with the campaign group Foxglove, argued that the “streaming tool” used nationality and fed on its own past decisions. In August 2020 the Home Office agreed to stop using it pending a redesign, while denying that it discriminated. Sociologists study cases like this to ask who designs automated systems, whose data they learn from, and who can challenge them. This lesson applies those questions to welfare, work, surveillance and borders."},
   goals:[
     "Explain why sociologists treat algorithms and AI as social systems: goals, data, institutions and feedback loops",
     "Analyse cases of biased automated decisions from several regions, and explain why fairness definitions can conflict",
     "Describe platform labour and algorithmic management, and the 2024 EU and 2026 ILO rules",
     "Compare sociological views of surveillance, from the panopticon to surveillance capitalism",
     "Describe border technologies (biometrics, travel authorisations, risk scoring) and give the main arguments for and against them, attributed"
   ],
   learn:[
    {h:"Algorithms are social, not only technical", body:[
      {lead:"A recipe is an algorithm: steps that turn ingredients into a meal. But someone chose the recipe, the ingredients and what counts as a good meal."},
      "An [[alg-algorithm|algorithm]] is a precise set of steps that turns an input into an output. Many systems called “AI” use **machine learning**: instead of being given every rule, they find patterns in past data and use them to predict, rank or classify ({{ai-in-everyday-apps}}).",
      "Sociologists study algorithms as **social systems**. Tarleton Gillespie (2014) asked how algorithms decide what counts as “relevant”; Nick Seaver (2017) argued they are part of culture, built and constantly adjusted by people inside organizations. Five questions open up any system:",
      {list:[
        "**Who designs it, and for what goal?** A goal must be turned into something measurable, often a [[proxy-variable|proxy]].",
        "**Whose data?** Past records carry past decisions and gaps ({{data-power}}).",
        "**Who is affected?** Often people with little say: applicants, workers, claimants, travellers.",
        "**Who checks it?** Auditors, regulators, courts, journalists.",
        "**Who can contest it?** Is there an explanation and a human review?"
      ]},
      "Lesson 6 showed algorithms acting as [[gatekeeping|gatekeepers]] of news. This lesson follows them into welfare, work and borders.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e2u4-l7-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="8" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="29" text-anchor="middle">Goals and proxies</text><text class="s" x="148" y="47" text-anchor="middle">chosen by designers and managers</text><path class="d-ink" d="M148 60 L148 84" stroke-width="2" marker-end="url(#e2u4-l7-a)"/><rect class="d-gold" x="8" y="86" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="107" text-anchor="middle">Past data</text><text class="s" x="148" y="125" text-anchor="middle">records of earlier decisions</text><path class="d-ink" d="M148 138 L148 162" stroke-width="2" marker-end="url(#e2u4-l7-a)"/><rect class="d-sage" x="8" y="164" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="185" text-anchor="middle">Model</text><text class="s" x="148" y="203" text-anchor="middle">learns patterns, gives scores</text><path class="d-ink" d="M148 216 L148 240" stroke-width="2" marker-end="url(#e2u4-l7-a)"/><rect class="d-rose" x="8" y="242" width="280" height="50" rx="8" stroke-width="2"/><text x="148" y="263" text-anchor="middle">Decisions about people</text><text class="s" x="148" y="281" text-anchor="middle">checks, refusals, patrols, pay</text><path class="d-ink" d="M290 267 L314 267 L314 111 L291 111" fill="none" stroke-width="2" marker-end="url(#e2u4-l7-a)"/><text class="s" x="170" y="318" text-anchor="middle">Feedback loop: decisions create the</text><text class="s" x="170" y="334" text-anchor="middle">records the model learns from next.</text><text class="s" x="170" y="352" text-anchor="middle">People act at every step.</text></svg>', alt:"Four boxes stacked top to bottom: goals and proxies chosen by designers and managers; past data, records of earlier decisions; a model that learns patterns and gives scores; decisions about people such as checks, refusals, patrols and pay. An arrow runs from the decisions box back up to the past data box, forming a loop.", cap:"An algorithm inside an organization. The loop is where small biases can grow."}
    ]},
    {h:"Feedback loops", body:[
      "A [[feedback-loop|feedback loop]] forms when a system’s outputs become its future inputs. Kristian Lum and William Isaac (2016) showed it with predictive policing. If a model sends more patrols where more crime was recorded, more crime is recorded there. That seems to confirm the model, even if offending elsewhere is similar.",
      {ex:"The UK streaming tool rated visa applications red, amber or green. Nationalities on a “suspect” list were automatically rated red.\nRed applications got extra scrutiny and were refused more often.\nRefusals counted as “adverse events”, which could keep a nationality on the list.\nThe claimants argued that the tool rated applications as risky partly because it had rated them risky before. The Home Office denied discrimination but paused the tool in August 2020 for a redesign.", label:"Worked example: a loop in a visa system"}
    ]},
    {h:"Automated decisions and bias", body:[
      "[[automated-decision|Automated decision-making]] means decisions made by systems with little or no human involvement. Governments and firms use it because it is fast and consistent at scale. Supporters point to evidence that well-built models can beat human judgement: Jon Kleinberg and colleagues (2018) estimated that a model could have cut jailing in US bail decisions without raising crime. Critics document what goes wrong:",
      {table:[["Case","What happened"],["Netherlands, childcare benefits","Officials and a risk model wrongly treated thousands of parents as fraudsters, and nationality was used in the model. The government resigned in January 2021; the data protection authority fined the Tax Administration €2.75 million (December 2021)."],["Australia, “Robodebt” (2016–2019)","Averaging yearly tax data into fortnightly income raised false welfare debts. A Royal Commission (2023) called it “a crude and cruel mechanism, neither fair nor legal”."],["England, exam grades (2020)","With exams cancelled, an algorithm adjusted teachers’ grades using schools’ past results; nearly 40% of teachers’ A-level grades were lowered. After protests, the government dropped the algorithm’s grades."],["United States, court risk scores (2016)","ProPublica reported that Black defendants who did not reoffend were labelled high risk about twice as often as white defendants. The company replied that scores predicted reoffending equally well for both groups."]]},
      "How can both sides of the last case be right? Researchers (Kleinberg, Mullainathan and Raghavan, 2016; Chouldechova, 2017) showed that when groups have different underlying rates, a score usually cannot have equal accuracy and equal error rates for both at once. Choosing which kind of fairness comes first is a value choice, not only a technical one.",
      "Virginia Eubanks (*Automating Inequality*, 2018), Safiya Umoja Noble (*Algorithms of Oppression*, 2018) and Ruha Benjamin (*Race After Technology*, 2019) make a shared argument. They argue that such systems fall hardest on poor and racialised groups, who are watched most and can contest least ([[algorithmic-bias]]). Proposed remedies include audits by group, published explanations, human review and appeal. The EU’s GDPR (Article 22) limits purely automated decisions with significant effects, and the EU AI Act treats uses in welfare, jobs, education, policing and migration as **high-risk** ({{ai-governance}})."
    ]},
    {h:"Platform labour: managed by an app", body:[
      "[[platform-work|Platform work]] is paid work found and organised through a digital platform. It includes ride-hailing and delivery in cities from Jakarta to São Paulo, cleaning and care, and online tasks such as translation or labelling data to train AI. Mary Gray and Siddharth Suri called the hidden human labour behind “automated” services [[ghost-work|ghost work]] (2019).",
      "Platforms use [[algorithmic-management|algorithmic management]]: apps assign tasks, set prices, rate workers and can suspend (“deactivate”) them, often with no human manager. Alex Rosenblat and Luke Stark (2016) showed that Uber drivers faced **information asymmetries**: the app knew far more than they did.",
      "The core dispute is status. Platforms and many workers value **flexibility**: choosing hours, easy entry, and income for people shut out of other jobs, including many migrants. Unions, many researchers and some courts stress **precarity**: unpredictable pay, no sick pay or pension, and unexplained decisions. The UK Supreme Court ruled in 2021 that Uber drivers were “workers” with rights such as holiday pay ({{work-globalization}}).",
      "Rules are arriving. The EU Platform Work Directive (2024; member states must apply it by 2 December 2026) presumes an employment relationship where facts show control, and requires human oversight of automated decisions. On 12 June 2026 the International Labour Conference adopted the **Decent Work in the Platform Economy Convention (No. 193)** by 406 votes to 8, with 36 abstentions. It extends key protections whatever a worker’s legal status, and requires transparency about automated systems and a route to human review of decisions such as deactivation. Employers’ representatives had argued for more flexible, less prescriptive rules. A convention binds only states that ratify it."
    ]},
    {h:"Surveillance: watching and sorting", body:[
      "Surveillance is collecting and using personal data in order to manage or influence people. Michel Foucault (*Discipline and Punish*, 1975) used Jeremy Bentham’s design for a [[panopticon]] prison, where inmates can always be seen but never know when. He used it to argue that modern institutions teach people to discipline themselves. David Lyon (2003) stressed [[social-sorting|social sorting]]: data place people in categories that bring different treatment, such as trusted and risky travellers.",
      "Shoshana Zuboff (*The Age of Surveillance Capitalism*, 2019) argued that tech firms turn data about behaviour into predictions sold for profit: [[surveillance-capitalism]]. Critics such as Evgeny Morozov replied that this is ordinary capitalism rather than a new system. Simone Browne (*Dark Matters*, 2015) traced how surveillance of Black people runs back to slavery.",
      {list:[
        "**Functionalism**: surveillance can protect people and make services efficient.",
        "**Conflict theory**: watchers gain power over the watched, and sorting can lock in inequality.",
        "**Symbolic interactionism**: people adapt, perform for cameras, resist or watch back.",
        "**Feminist theory**: who is watched at home and online, for example through partner tracking."
      ]},
      "Human rights law does not ban surveillance; it asks whether it is lawful, necessary and proportionate ({{digital-rights-surveillance}})."
    ]},
    {h:"Border technologies", body:[
      "Borders are where these threads meet ({{borders-and-sovereignty}}). States now check people long before they reach a frontier and record them as they cross. Ayelet Shachar (2020) calls this **the shifting border**; Dennis Broeders (2007) wrote of Europe’s “new digital borders”.",
      {table:[["Technology","What it does","Examples (November 2026)"],["[[biometrics|Biometric]] databases","Store fingerprints and face images to identify people","EU Entry/Exit System (from October 2025, fully running from 10 April 2026); Eurodac (from June 2026 adds face images and children from age 6); UNHCR’s refugee registration"],["[[travel-authorisation|Travel authorisations]] and e-visas","Online permission before travel, checked against databases and rules","Australia’s ETA (1996), the US ESTA, the UK ETA (£20), India’s e-Visa; the EU’s ETIAS is planned (EU states expect 2027) but not yet running"],["[[risk-scoring|Risk scoring]]","Ranks people for extra checks","The UK streaming tool (paused 2020); ETIAS screening rules (planned)"]]},
      {fig:'<svg viewBox="0 0 340 372"><defs><marker id="e2u4-l7-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="22" text-anchor="middle">One trip, many checkpoints</text><path class="d-ink" d="M30 48 L30 336" stroke-width="2" marker-end="url(#e2u4-l7-b)"/><circle class="d-lup" cx="30" cy="60" r="12" stroke-width="2"/><text x="30" y="65" text-anchor="middle">1</text><text x="54" y="58">Before travel</text><text class="s" x="54" y="76">e-visa or travel authorisation;</text><text class="s" x="54" y="92">data checked against databases</text><text class="s" x="54" y="108">and risk rules</text><circle class="d-gold" cx="30" cy="150" r="12" stroke-width="2"/><text x="30" y="155" text-anchor="middle">2</text><text x="54" y="148">At check-in</text><text class="s" x="54" y="166">the airline checks permission</text><text class="s" x="54" y="182">to travel</text><circle class="d-sage" cx="30" cy="225" r="12" stroke-width="2"/><text x="30" y="230" text-anchor="middle">3</text><text x="54" y="223">At the border</text><text class="s" x="54" y="241">fingerprints and face</text><text class="s" x="54" y="257">recorded or matched</text><circle class="d-rose" cx="30" cy="300" r="12" stroke-width="2"/><text x="30" y="305" text-anchor="middle">4</text><text x="54" y="298">During the stay and at exit</text><text class="s" x="54" y="316">entry and exit dates logged;</text><text class="s" x="54" y="332">overstays flagged</text><text class="s" x="170" y="364" text-anchor="middle">The border now starts far from the frontier.</text></svg>', alt:"A vertical timeline of one trip with four numbered checkpoints: before travel, an e-visa or travel authorisation checked against databases and risk rules; at check-in, the airline checks permission to travel; at the border, fingerprints and face are recorded or matched; during the stay and at exit, entry and exit dates are logged and overstays flagged.", cap:"The shifting border: checks now happen before, at and after the frontier."},
      "**Governments and the European Commission** argue that these systems make crossings faster and more secure. They replace passport stamps, detect identity fraud and overstays, and free officers to focus on real risks. **UNHCR** uses biometric registration to give refugees a secure identity and to make sure aid reaches the right people.",
      "**Critics** see risks. Tendayi Achiume, then UN Special Rapporteur on racism, warned in a 2020 report that digital border technologies can reproduce racial and xenophobic discrimination. She added that they can turn migrants into testing grounds for new tools. Petra Molnar (*The Walls Have Eyes*, 2024) documents surveillance along migration routes from the Mediterranean to the US–Mexico border. Human Rights Watch (2021) criticised the sharing of data from Rohingya refugees in Bangladesh with Myanmar; UNHCR said refugees had been asked for consent ({{refugees-and-displacement}}).",
      "Base rates matter too: when real threats are very rare, even an accurate risk tool flags mostly innocent people (try the calculation below). The EU AI Act lists many migration, asylum and border uses as high-risk, though AI inside the EU’s large border databases has until 31 December 2030 to comply. Many on both sides support impact assessments, independent audits, collecting only necessary data and a real route to appeal; where to draw the line is a political question ({{externalisation-and-detention}}).",
      {table:[["Misconception","Closer to the truth"],["Algorithms are neutral because they are maths.","They encode people’s choices of goals, data, proxies and thresholds."],["An accurate tool is a fair tool.","It can be accurate overall yet err more for one group, and fairness definitions can conflict."],["Biometrics never make mistakes.","Matching has error rates that can differ between groups, and stored data can be misused or leaked."]]},
      {key:"Ask of any automated system: who designed it, whose data it uses, who is affected, who checks it and who can contest it."},
      {terms:["feedback-loop","automated-decision","platform-work","ghost-work","algorithmic-management","panopticon","social-sorting","surveillance-capitalism","biometrics","travel-authorisation","risk-scoring"]}
    ]}
   ],
   try:[
    {id:"e2u4-l7-x1", type:"order", q:"Put the steps of the visa streaming tool’s alleged feedback loop in order.", items:[
      {t:"Designers decide which factors, including nationality, raise a risk rating.", why:"It starts with human choices about goals and inputs."},
      {t:"Applications from nationalities on a “suspect” list are rated red.", why:"The rule turns a category into a score."},
      {t:"Red applications get extra scrutiny and are refused more often.", why:"The score changes how people are treated."},
      {t:"Refusals are recorded as “adverse events” for that nationality.", why:"The decisions become new data."},
      {t:"The nationality stays on the list, and the cycle repeats.", why:"The new data confirm the old rating: a feedback loop."}
    ]},
    {id:"e2u4-l7-x2", type:"sort", q:"Which source of algorithmic bias does each example mainly show?", buckets:["Historical data","Proxy","Unrepresentative data","Feedback loop"], items:[
      {t:"A hiring model learns from ten years of mostly male hires and marks down CVs that mention a women’s club.", b:0, why:"The labels it learned from encode past decisions: historical bias."},
      {t:"A health programme uses past spending on care to stand for how sick people are.", b:1, why:"Spending stands in for need, and groups who got less care look healthier than they are: a proxy problem."},
      {t:"A face-matching system trained mostly on lighter-skinned faces makes more errors on darker-skinned women.", b:2, why:"Some groups were under-represented in the training data."},
      {t:"Police patrol where the model predicts crime, record more crime there, and the model then predicts even more.", b:3, why:"Outputs shape the next round of inputs: a feedback loop."},
      {t:"A loan model uses postcode, which closely tracks ethnicity in a segregated city.", b:1, why:"Postcode works as a stand-in for a protected characteristic: a proxy."},
      {t:"A voice assistant tested mainly on one accent misunderstands speakers from other regions.", b:2, why:"The data didn’t represent the people who use it."}
    ]},
    {id:"e2u4-l7-x3", type:"match", q:"Match each thinker to the idea they are known for.", pairs:[
      ["Michel Foucault","Being possibly watched at any time teaches people to discipline themselves","*Discipline and Punish* (1975) built on Bentham’s panopticon."],
      ["David Lyon","Surveillance sorts people into categories that bring different treatment","Lyon’s *Surveillance as Social Sorting* (2003)."],
      ["Shoshana Zuboff","Firms turn data about behaviour into predictions sold for profit","*The Age of Surveillance Capitalism* (2019)."],
      ["Virginia Eubanks","Automated welfare systems fall hardest on poor people","*Automating Inequality* (2018)."],
      ["Mary Gray and Siddharth Suri","Hidden human workers keep “automated” services running","*Ghost Work* (2019)."],
      ["Ayelet Shachar","Border control now happens far before and beyond the frontier","*The Shifting Border* (2020)."]
    ]},
    {id:"e2u4-l7-x4", type:"number", q:"A risk tool screens 1,000,000 travellers, of whom 100 are real threats. It flags 2% of all travellers (20,000 people) and catches 90 of the 100 real threats. How many of the flagged travellers are **not** real threats?", answer:19910, tol:0.5, unit:"travellers", why:"Flagged people who are not threats = all flagged − threats caught = 20,000 − 90 = 19,910. That is 99.6% of everyone flagged. When real threats are rare, even a tool that catches most of them flags mostly innocent people: the base-rate problem.", wrongs:[
      {v:20000, tol:0.5, why:"That is everyone flagged. Subtract the 90 real threats the tool caught."},
      {v:19900, tol:0.5, why:"You subtracted all 100 threats, but the tool caught only 90 of them. The other 10 weren’t flagged."},
      {v:10, tol:0.5, why:"That is the number of real threats the tool missed, not the innocent people it flagged."},
      {v:999900, tol:0.5, why:"That is everyone who isn’t a threat. The question asks only about those the tool flagged."}
    ], hint2:"Start with the number flagged, then take away the real threats among them."},
    {id:"e2u4-l7-x5", type:"mcq", q:"Oluwaseun, a delivery rider, is suddenly deactivated by an app after his ratings drop. No person explains why. Under ILO Convention No. 193 (2026), in a country that has ratified it, what should he be able to ask for?", options:[
      {t:"An explanation and a review of the decision with human involvement", ok:true, why:"Right. The Convention requires transparency about automated systems and a route to human review of significant decisions such as deactivation."},
      {t:"Automatic reinstatement and full back pay in every single case", why:"A review can lead to reinstatement, but the Convention doesn’t guarantee it whatever the facts."},
      {t:"A ban on the platform using any customer ratings at all", why:"The Convention regulates how automated systems are used and explained; it doesn’t ban ratings."},
      {t:"Full employee status in every country, whatever the facts of his work", why:"It extends key protections regardless of status, but it doesn’t make every platform worker an employee."}
    ]},
    {id:"e2u4-l7-x6", type:"sort", q:"Which kind of border technology does each example show?", buckets:["Biometric database","Travel authorisation or e-visa","Risk scoring"], items:[
      {t:"On a first visit to the Schengen area, a traveller’s fingerprints and face are recorded and checked on later trips.", b:0, why:"Storing and matching fingerprints and faces is a biometric database, here the EU Entry/Exit System."},
      {t:"A tourist applies online for permission to travel to the UK and pays £20 before booking.", b:1, why:"Online permission before travel is a travel authorisation, the UK ETA."},
      {t:"Software rates each visa application red, amber or green for extra checks.", b:2, why:"Ranking applications for scrutiny is risk scoring."},
      {t:"A refugee’s iris scan confirms her identity when she collects food aid.", b:0, why:"Identification by a body feature stored in a database is biometric."},
      {t:"Before visiting India, a traveller uploads a passport scan and photo and receives approval by email.", b:1, why:"An online visa granted before travel is an e-visa."},
      {t:"Rules compare applicants’ answers with patterns linked to overstays to decide who needs a manual check.", b:2, why:"Screening rules that flag people for extra checks are risk scoring."}
    ]},
    {id:"e2u4-l7-x7", type:"spot", q:"A press release announces a new border system. Tap the claims that are problems.", ask:"is a problem with the claim", parts:[
      {t:"The system compares travellers’ faces with their passport photos,", flag:false, why:"A factual description of what it does."},
      " ",
      {t:"so it cannot be biased: it is just mathematics.", flag:true, why:"Systems reflect choices of data, thresholds and goals, and face matching has shown different error rates for different groups."},
      " ",
      {t:"An independent audit of error rates by age, sex and skin tone will be published.", flag:false, why:"Good practice: reporting performance for each group shows what an overall figure hides."},
      " ",
      {t:"It is 99% accurate, so almost everyone it flags must be a real risk.", flag:true, why:"The base-rate error: when real risks are rare, most people flagged are innocent even with an accurate tool."},
      " ",
      {t:"Travellers who are refused can ask for a human review.", flag:false, why:"A route to contest decisions is a widely recommended safeguard."},
      " ",
      {t:"No one complained in the first week, which proves it treats everyone fairly.", flag:true, why:"No complaints isn’t evidence of fairness: people may not know a machine was involved, or may fear complaining."}
    ]},
    {id:"e2u4-l7-x8", type:"explain", q:"A city uses a tool that sends tax inspectors mostly to shops in districts where past records show more problems. Explain how a feedback loop could make the tool look accurate even if it is biased.", size:"3–4 sentences", model:"A feedback loop forms when a system’s outputs become its future inputs. The tool sends inspectors mainly to one district because past records show more problems there. Inspectors find problems where they look, so the new records again show that district as risky, and the tool sends even more inspections there. The model seems confirmed, even if shops elsewhere break the rules just as often but are rarely checked. As Lum and Isaac showed for predictive policing, the data reflect where the system looked, not only what happened.", points:["Defines a feedback loop as outputs becoming future inputs", "Walks through the cycle of inspections producing more records in the same place", "Explains why the tool then seems confirmed", "Notes that the data reflect where the system looked, not only what happened"]}
   ],
   apply:{intro:"Look at automated systems in your own life with a sociologist’s eye. Don’t enter personal data into any tool for these tasks, don’t apply for anything, and use only official government websites for border information.", tasks:[
     {t:"Map one algorithm in your life", how:["Choose one system that makes or shapes decisions about you: a social media feed, a ride or delivery app, a job site, a credit score, a school admissions system.","Read its help pages, terms or “why am I seeing this?” notes.","Answer the five questions: who designed it and for what goal; whose data; who is affected; who checks it; who can contest it.","Note one decision it made about you and how (or whether) you could challenge it."], write:"System, goal and proxy, data, who checks it, how I could contest a decision…"},
     {t:"Read a travel authorisation’s privacy notice", how:["Open the official page for one country’s e-visa or electronic travel authorisation (for example the UK ETA on gov.uk, the US ESTA, or your own country’s). Beware lookalike sites that charge extra.","Find what data it collects, how long it keeps them, who they are shared with, and how to challenge a refusal.","Compare with a second country’s system.","Note what a traveller can and cannot find out about how decisions are made."], write:"Country, data collected, how long kept, shared with, appeal route, what is unclear…"},
     {t:"Check an AI chatbot’s answer about border technology", how:["Ask any AI chatbot: “How does the EU Entry/Exit System work, and when did it start?” (or ask about an e-visa system you know).","Pick three factual claims from the answer.","Check each against an official source (the European Commission’s pages, a government site), noting dates.","Note any errors, out-of-date facts or missing viewpoints ({{ai-chatbot-accuracy}})."], write:"The question, three claims, what the official source says, errors or gaps I found…"}
   ], proof:"Notes with one algorithm in your life analysed with the five questions, a comparison of two official travel-authorisation privacy notices, and three chatbot claims checked against dated official sources."},
   read:[
     {book:"soc", where:"Chapter 8 “Media and Technology”: Section 8.4 “Theoretical Perspectives on Media and Technology”", note:"For the lenses applied to technology, including surveillance; Section 18.3 “Work in the United States” covers automation."},
     {book:"datafem", where:"Chapter 1, “The Power Chapter”", note:"How power shapes data and algorithms, with many examples."},
     {book:"imis", where:"Chapter 4 “Migration Infrastructures: How Do People Migrate?” (Düvell and Preiss)", note:"Technology as one part of the infrastructure that shapes migration."}
   ]
  }
  ],
  checkpoint:["e2u4-q02","e2u4-q06","e2u4-q09","e2u4-q13","e2u4-q16","e2u4-q21","e2u4-q24","e2u4-q28","e2u4-q31","e2u4-q36","e2u4-q40","e2u4-q44"],
  cpBank:[
   {id:"e2u4-cp01", lesson:"e2u4-l1", level:1, q:"In one community, a woman may be married to two brothers at the same time. Which marriage pattern is this?", options:[
     {t:"Polygyny", why:"Polygyny is one man with several wives. Here it is one woman with several husbands."},
     {t:"Monogamy", why:"Monogamy is one spouse at a time. This woman has two husbands."},
     {t:"Polyandry", ok:true, why:"Correct. Polyandry, the rarer form of polygamy, is one woman with several husbands."},
     {t:"Matrilineal descent", why:"Matrilineal descent is about tracing kinship through the mother. It describes descent, not how many spouses someone has."}]},
   {id:"e2u4-cp02", lesson:"e2u4-l2", level:1, q:"An armed group takes over a town and forces residents to pay it money. Almost nobody accepts that it has any right to rule. What does the group have?", options:[
     {t:"Power without authority", ok:true, why:"Right. Power is the ability to impose your will. Authority is power that people accept as legitimate, and the residents don’t accept it."},
     {t:"Traditional authority", why:"Traditional authority rests on long custom and inheritance that people accept. This group has neither."},
     {t:"Rational-legal authority", why:"Rational-legal authority comes from laws and offices that people accept. The group took control by force."},
     {t:"Charismatic authority", why:"Charismatic authority rests on followers’ devotion to an extraordinary leader. The residents are forced, not devoted."}]},
   {id:"e2u4-cp03", lesson:"e2u4-l5", level:1, q:"A group asks its members to give up sugar for one month to improve their own health. It doesn’t try to change laws or society. In Aberle’s terms, what type of movement is this?", options:[
     {t:"A reform movement", why:"A reform movement seeks one specific change in society, such as a new law. This group only asks members to change their own habits."},
     {t:"A religious/redemptive movement", why:"Redemptive movements seek deep inner change in a person. Cutting out sugar for a month is limited self-improvement."},
     {t:"A resistance movement", why:"A resistance movement tries to stop or undo a change in society. Nothing here opposes a change."},
     {t:"An alternative movement", ok:true, why:"Yes. Alternative movements seek limited self-improvement in individuals, like changing one habit."}]},
   {id:"e2u4-cp04", lesson:"e2u4-l1", level:2, q:"After marrying, Lin and Marco rent their own flat, away from both sets of parents. Their children treat relatives on both sides as equally close family. Which pair of terms fits?", options:[
     {t:"Patrilocal residence; patrilineal descent", why:"Patrilocal means living with the husband’s family, and patrilineal means tracing kinship through the father. Neither fits."},
     {t:"Neolocal residence; bilateral descent", ok:true, why:"Correct. Living in a new home of their own is neolocal. Tracing kinship through both parents equally is bilateral."},
     {t:"Matrilocal residence; matrilineal descent", why:"Matrilocal means living with the wife’s family, and matrilineal means tracing kinship through the mother. Neither fits."},
     {t:"Neolocal residence; matrilineal descent", why:"Neolocal is right, but matrilineal descent traces kinship only through the mother. These children count both sides."}]},
   {id:"e2u4-cp05", lesson:"e2u4-l3", level:2, q:"Maya has bad flu. Her manager accepts that she stays home but expects her to see a doctor and follow the treatment. Which idea describes these expectations?", options:[
     {t:"Medicalization", why:"Medicalization is redefining ordinary or once-deviant behaviour as illness. Flu has always been treated as illness."},
     {t:"Social epidemiology", why:"Social epidemiology studies how disease is caused and spread across a population. It doesn’t describe one person’s duties when ill."},
     {t:"Demedicalization", why:"Demedicalization removes something from the medical domain. Maya’s flu is being treated medically."},
     {t:"The sick role", ok:true, why:"Yes. Parsons’s sick role excuses people from normal duties, as long as they try to get well and seek competent help."}]},
   {id:"e2u4-cp06", lesson:"e2u4-l3", level:2, q:"In a large company, all staff have the same health insurance. Yet at each step down the job ladder, staff report more illness. Which idea does this match?", options:[
     {t:"A social gradient in health", ok:true, why:"Right. Like the Whitehall studies, health worsens at each step down the job ladder, even when everyone has jobs and health care."},
     {t:"The sick role", why:"The sick role is about what is expected of a sick person. It doesn’t explain why illness rises down the job ladder."},
     {t:"Medicalization", why:"Medicalization is redefining behaviour as illness. Here the point is that illness is unequally spread by rank."},
     {t:"The double burden of disease", why:"The double burden is infectious plus chronic disease in low- and middle-income countries. This is about rank within one workplace."}]},
   {id:"e2u4-cp07", lesson:"e2u4-l4", level:2, q:"In a farming region, food has become scarce. Young people start marrying later and couples choose to have fewer children. In Malthus’s terms, this is…", options:[
     {t:"a positive check", why:"Positive checks are famine, disease and war, which raise deaths. Here people are reducing births instead."},
     {t:"a preventive check", ok:true, why:"Correct. Preventive checks hold population back by reducing births, for example through later marriage."},
     {t:"cornucopian theory", why:"Cornucopian theory trusts human ingenuity to solve shortages. It isn’t a check on population at all."},
     {t:"stage 1 of the demographic transition", why:"Stage 1 means high births and high deaths. Here births are falling in response to scarcity."}]},
   {id:"e2u4-cp08", lesson:"e2u4-l5", level:2, q:"Dara shares a post about a flood appeal and feels she has done her part. She never donates or volunteers. Which idea from the functionalist view of media describes this?", options:[
     {t:"Gatekeeping", why:"Gatekeeping is filtering many possible messages into the few that reach the public. Dara’s problem is what she does after seeing the message."},
     {t:"Agenda-setting", why:"Agenda-setting is media influencing what people think about. Dara does think about the flood; she just doesn’t act."},
     {t:"Narcotizing dysfunction", ok:true, why:"Yes. Knowing about a problem, or sharing it, can feel like acting on it. Functionalists call this the narcotizing dysfunction of media."},
     {t:"The digital divide", why:"The digital divide is unequal access to technology. Dara has access; the issue is that information replaces action."}]},
   {id:"e2u4-cp09", lesson:"e2u4-l1", level:3, q:"In a country where births have fallen for decades, many village schools merge or close. More families also pay for elder care, because fewer adult children live nearby. Which statement explains this best?", options:[
     {t:"It is cultural lag: norms are trailing a new technology", why:"Cultural lag is about norms catching up with technology. The driving force here is population change, not a new technology."},
     {t:"It shows Malthus was right that population outruns food", why:"Malthus worried about population growth outrunning food. This country’s population is shrinking, and food isn’t the issue."},
     {t:"Population change ripples through linked institutions, so they adjust together", ok:true, why:"Right. Population is one of the four forces of social change, and institutions depend on each other: fewer children affects schools and family care at once."},
     {t:"Institutions change separately, so the school closures and elder care are unrelated", why:"Institutions depend on each other. The same fall in births explains both changes."}]},
   {id:"e2u4-cp10", lesson:"e2u4-l3", level:3, q:"Old phones from rich countries are shipped to a poorer country. There, low-paid workers burn them to recover metals and breathe toxic smoke. Which conclusion would an environmental sociologist most likely draw?", options:[
     {t:"It is only a technology problem, so social factors don’t matter", why:"Environmental sociology studies how people and the environment shape each other. Who carries the hazard is a social question."},
     {t:"The workers chose these jobs, so the health risk is only a personal trouble", why:"Many people face the same risk because of how global trade is organised. That makes it a public issue, not only a personal trouble."},
     {t:"It shows Malthus’s positive checks at work", why:"Positive checks are famine, disease and war caused by population outrunning food. This case is about where waste and pollution end up."},
     {t:"Global trade moves hazards to poorer places with less power to refuse", ok:true, why:"Yes. Globalization spreads production and waste along chains, and the heavier load of hazards falls on poorer, less powerful communities, as environmental racism does within countries."}]},
   {id:"e2u4-cp11", lesson:"e2u4-l2", level:3, q:"A campaign grew around one gifted speaker whose followers were devoted to her. After she retires, members elect a board, hire staff and write formal rules. Which pair of ideas fits?", options:[
     {t:"Traditional authority; the preliminary stage", why:"Nothing rests on custom or inheritance, and the preliminary stage is when a movement first emerges. This movement is becoming established."},
     {t:"Routinization of charisma; the institutionalization stage", ok:true, why:"Correct. When a charismatic leader leaves, followers build offices and rules (Weber’s routinization). A board, staff and rules mark a movement’s institutionalization stage."},
     {t:"Charismatic authority growing stronger; the coalescence stage", why:"Charisma rests on one person, so it weakens when she leaves. Writing rules and hiring staff goes beyond coalescence."},
     {t:"Rational-legal authority giving way to charisma; the decline stage", why:"The change goes the other way: from charisma towards rules and offices. And the movement is getting organised, not declining."}]},
   {id:"e2u4-cp12", lesson:"e2u4-l2", level:3, q:"In a democracy, a researcher finds that most top ministers, generals and company heads went to the same few expensive schools, and many move between each other’s jobs. Which reading fits best?", options:[
     {t:"It supports the pluralist view that many groups bargain on equal terms", why:"Pluralists see power spread across many groups. A small, connected circle at the top of business, military and politics points the other way."},
     {t:"It supports Mills’s power elite, and the conflict view that schools pass on advantage", ok:true, why:"Right. A small linked circle of business, military and political leaders is Mills’s power elite. Shared elite schooling fits the conflict view that education passes on advantage."},
     {t:"It shows the country is totalitarian", why:"Totalitarian rule tries to control nearly all of life. A country can be a democracy and still have a narrow elite at the top."},
     {t:"It shows charismatic authority: each leader rose through followers’ devotion to them", why:"Charisma rests on devotion to one extraordinary person. Here the pattern is a whole connected group with shared schooling who swap top posts, which is what Mills called a power elite."}]}
  ],
  codex:[
   {id:"social-institutions", title:"Social institutions", aka:["institution","institutions"], tags:["sociology","institutions","basics"],
    summary:"The lasting patterns of roles, rules and organizations a society builds to meet its basic needs.",
    levels:{
     starter:[
      "Think of the paths worn across a park. Nobody planned them alone, yet everyone follows them, and they outlast any single walker. A [[social-institution|social institution]] is a path like that, worn into a whole society: a lasting pattern of roles, rules and organizations that meets a basic need.",
      "Sociologists usually list seven: the **family** (care and raising children), **education** (passing on knowledge), **religion** (meaning and ritual), **government** (order and decisions), the **economy** (producing goods and services), **health care** and the **media**.",
      "An institution isn’t a building. A school is an organization; education is the institution that all schools belong to, with its shared roles (teacher, pupil), rules (timetables, exams) and expectations (qualifications).",
      {key:"Institutions feel natural because we grow up inside them, but they differ between societies and change over time."}
     ],
     builder:[
      "Institutions have four parts that you can look for in any of them:",
      {list:[
        "**Roles**: positions with expected behaviour (parent, judge, patient).",
        "**Norms and rules**: from unwritten customs to written law.",
        "**Organizations**: the concrete bodies that carry the institution (a ministry, a hospital, a newspaper).",
        "**Values and beliefs** that justify it (“education creates opportunity”, “the sick deserve care”)."
      ]},
      "Institutions are **interdependent**. When industrialization moved work from farms to factories, families shrank (children became costly rather than useful labour), schooling lengthened (factories and offices needed literate workers) and governments took on new tasks such as pensions and public health. OpenStax lists social institutions as one of four main causes of social change for this reason.",
      "Each sociological lens reads institutions differently. {{functionalism|Functionalists}} ask what needs an institution meets and what its [[manifest-function|manifest]] and [[latent-function|latent functions]] are. {{conflict-theory|Conflict theorists}} ask whose interests it serves and how it reproduces inequality. {{symbolic-interactionism|Symbolic interactionists}} ask how people create and renegotiate its meanings in everyday life. {{feminist-theory|Feminist theorists}} ask how it organizes gender, including unpaid work."
     ],
     pro:[
      "Definitions vary. Some sociologists use “institution” narrowly for the big seven; others use it broadly for any well-established practice, such as marriage, money or the handshake. Neo-institutional theory in organizational sociology stresses that organizations copy each other’s structures to look legitimate, not only to be efficient.",
      "Institutions are durable but not fixed. Change often comes from contradictions between institutions (for example, an economy that needs women’s paid work and a family system that assumes their full-time care), from social movements, from new technology and from population shifts. Lessons in this unit trace each of these.",
      "A useful analytical habit: when you see a social problem, ask which institutions produce it and how they interact. Poor health in a deindustrialized town, for example, involves the economy (job loss), the family (strain and migration), education (fewer opportunities), government (funding) and health care (access). Treating it as one institution’s failure usually misses the mechanism.",
      {tip:"In comparative work, avoid assuming your own country’s institutions are the norm. The textbook is US-centred; family law, school systems, state religion and health systems differ widely."}
     ]
    },
    related:["family","education","religion","political-systems","economic-systems","health-sociology","media-technology","social-change"],
    read:[{book:"soc", where:"Section 21.3 “Social Change”: “Social Institutions”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 21.3 Social Change", url:"https://openstax.org/books/introduction-sociology-3e/pages/21-3-social-change"},{t:"LibreTexts (OpenStax 3e) 18.5 Key Terms: Work and the Economy", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/18%3A_Work_and_the_Economy/18.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"family", title:"Family, kinship and marriage", aka:["family forms","kinship","marriage patterns"], tags:["sociology","institutions","family"],
    summary:"How societies define families, trace kinship and organize marriage, and how families are changing.",
    levels:{
     starter:[
      "A [[family]] is a socially recognized group joined by blood, marriage or adoption that shares emotional ties and acts as an economic unit. “Socially recognized” matters: who counts as family is set by law and custom, which differ around the world.",
      "Two basic shapes: a [[nuclear-family|nuclear family]] (parents and children in one home) and an [[extended-family|extended family]] (parents and children plus grandparents, aunts, uncles or cousins). Extended households are common in many parts of Asia, Africa, Latin America and the Pacific.",
      "[[kinship|Kinship]] is how you trace your relatives. Some societies trace it through the father ([[patrilineal]]), some through the mother ([[matrilineal]]) and many through both.",
      "Marriage forms differ too: [[monogamy]] (one spouse at a time) and [[polygamy]] (more than one), which can be [[polygyny]] or the much rarer [[polyandry]]."
     ],
     builder:[
      {table:[
        ["Concept","Meaning","Example"],
        ["Family of orientation","The family you are born into","Your parents and siblings"],
        ["Family of procreation","The family you form","A partner and children"],
        ["Matrilineal descent","Kinship and inheritance through the mother","Minangkabau (Indonesia), Khasi (India)"],
        ["Bilateral descent","Both lines count","Common in Europe, the Americas, the Philippines"],
        ["Patrilocal / matrilocal / neolocal","Couple lives with husband’s family / wife’s family / on their own","Neolocal is common in cities"]
      ]},
      "Families are changing in many countries: smaller households, later marriage, more cohabitation, more single-parent and blended families, more people living alone and wider legal recognition of same-sex couples (first in the Netherlands, 2001). Sociologists increasingly use the **family life course** (fluid, varied sequences) rather than a fixed **family life cycle**.",
      "Arranged marriage, where families help choose a spouse and both people consent, is different from forced marriage, which lacks consent and is a human-rights violation."
     ],
     pro:[
      "Perspectives: functionalists, following George Murdock’s cross-cultural survey of 250 societies, list sexual, reproductive, educational and economic functions, and Talcott Parsons described “instrumental” and “expressive” roles, a model later criticized as reflecting mid-20th-century US gender norms. Conflict and feminist theorists treat the family as an arena of power: resources shape decision-making, and unpaid care and housework fall unequally (Arlie Hochschild’s *The Second Shift*, 1989). Symbolic interactionists study how meanings such as “good father” or “chosen family” are constructed and change.",
      "Debate: some commentators describe family “decline”; many sociologists describe “diversification”. Evidence can show which forms are growing and their associations with outcomes such as child poverty, but those associations often reflect income and support rather than family form itself, and which form is best is partly a question of values.",
      {warn:"Statistics such as “half of all marriages end in divorce” are often misleading because they compare unrelated yearly counts. Check how a family statistic is calculated and which country it describes."}
     ]
    },
    related:["social-institutions","education","demography","gender-stratification"],
    read:[{book:"soc", where:"Sections 14.1 “What Is Marriage? What Is a Family?”, 14.2 “Variations in Family Life” and 14.3 “Challenges Families Face”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) 14.5 Key Terms: Marriage and Family", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/14%3A_Marriage_and_Family/14.05%3A_Key_Terms"},{t:"LibreTexts (OpenStax 3e) Variations in Family Life", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/14%3A_Marriage_and_Family/14.03%3A_Variations_in_Family_Life"}], checked:"2026-11"},

   {id:"education", title:"Education and inequality", aka:["schooling","hidden curriculum","tracking","credentialism"], tags:["sociology","institutions","education","inequality"],
    summary:"What schools do beyond teaching subjects, and how they can both open and close opportunities.",
    levels:{
     starter:[
      "Education is the institution that passes on knowledge, skills and cultural norms. Schools obviously teach reading and maths, but sociologists notice what else they do.",
      "They teach a [[hidden-curriculum|hidden curriculum]]: unofficial lessons such as obeying bells, waiting your turn and accepting judgement. They sort people with exams and qualifications. They connect people who become friends, partners and colleagues.",
      "They can also pass on inequality. Children who arrive with books at home and the “right” way of speaking can look naturally talented. [[tracking|Tracking]] (placing pupils in ability groups) can lock in early differences, and [[credentialism|credentialism]] means people need ever-higher qualifications for the same jobs.",
      {key:"Schools can be ladders of social mobility and machines that reproduce inequality, often at the same time."}
     ],
     builder:[
      {table:[
        ["Manifest functions (intended)","Latent functions (side effects)"],
        ["Socialization","Courtship"],
        ["Cultural transmission","Social networks"],
        ["Social control","Group-work skills"],
        ["Social placement","A generation gap"],
        ["Cultural innovation","Political and social integration"]
      ]},
      "Conflict theorists stress reproduction of inequality: Samuel Bowles and Herbert Gintis (*Schooling in Capitalist America*, 1976) argued that schools’ hidden curricula mirror the workplace hierarchy; Pierre Bourdieu argued that schools reward [[cultural-capital|cultural capital]] from privileged homes; Randall Collins (*The Credential Society*, 1979) argued credentials work as status barriers. Symbolic interactionists show how labels become self-fulfilling prophecies (see {{labeling-theory}}). Feminist theory examines gender gaps in access, subject choice and later earnings.",
      "Tracking is also called streaming or setting. Supporters say it lets teaching match pupils’ levels; critics show that lower tracks often get less experienced teachers and lower expectations, and that placement reflects family background."
     ],
     pro:[
      "Philip Jackson popularized “hidden curriculum” in *Life in Classrooms* (1968). Jeannie Oakes’s *Keeping Track* (1985) documented unequal teaching across US tracks. Robert Rosenthal and Lenore Jacobson’s *Pygmalion in the Classroom* (1968) reported that teacher expectations raised pupils’ scores; it is famous but its size and replicability have been debated, so cite it carefully.",
      "Internationally, systems differ in when they separate pupils: some route children into different secondary school types around age 10 to 12, others keep comprehensive schooling to 15 or 16. Comparative research, including OECD analyses of PISA data, has generally linked earlier tracking with a stronger link between family background and achievement, though causes are debated.",
      "Global inequality in access remains large: UNESCO’s monitoring shows the biggest out-of-school gaps in low-income countries, especially at secondary level, with extra barriers for girls in some regions and for children with disabilities, refugees and speakers of minority languages.",
      {tip:"When you read a claim about “failing schools”, ask what the measure is (test scores, value added, completion), what pupils the school serves, and how it is funded."}
     ]
    },
    related:["social-institutions","family","social-mobility","labeling-theory","social-stratification"],
    read:[{book:"soc", where:"Sections 16.1 “Education around the World”, 16.2 “Theoretical Perspectives on Education” and 16.3 “Issues in Education”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 16.2 Theoretical Perspectives on Education", url:"https://openstax.org/books/introduction-sociology-3e/pages/16-2-theoretical-perspectives-on-education"},{t:"LibreTexts (OpenStax 3e) 16.5 Key Terms: Education", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/16%3A_Education/16.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"religion", title:"Religion in sociology", aka:["sociology of religion","sacred and profane"], tags:["sociology","institutions","religion"],
    summary:"How sociologists study what religion does and how it is organized, without judging whether it is true.",
    levels:{
     starter:[
      "Sociologists don’t ask whether a religion is true. They ask what it does for people and societies, and how it is organized.",
      "OpenStax defines [[religion]] as a system of beliefs, values and practices about what people hold sacred or spiritually significant. Religions combine beliefs, rituals and experiences.",
      "Émile Durkheim argued that religion separates the [[sacred]] (set apart, treated with awe) from the [[profane]] (ordinary). The same river, mountain or cloth can be either, depending on how a community treats it.",
      "Durkheim saw religion binding people together. Max Weber showed how religious ideas can shape economic life. Karl Marx saw religion as comfort for suffering that could also discourage people from changing their conditions.",
      {key:"Sacred is a status a community gives to something, not a property of the thing."}
     ],
     builder:[
      {table:[
        ["Thinker","Work","Key idea"],
        ["Émile Durkheim","*The Elementary Forms of Religious Life* (1912)","Sacred vs profane; religion creates cohesion, control and meaning"],
        ["Max Weber","*The Protestant Ethic and the Spirit of Capitalism* (1904–05)","Religious ideas helped shape capitalist work discipline"],
        ["Karl Marx","Introduction to a critique of Hegel (1844)","“The sigh of the oppressed creature… the opium of the people”"]
      ]},
      "Sociologists classify religions by belief (monotheism, polytheism, animism, non-theistic traditions) and organization (ecclesia, denomination, sect, new religious movement). OpenStax uses “cult” for small, controlling groups led by a charismatic leader; many scholars prefer “new religious movement” because “cult” is often used as an insult.",
      "Each lens asks different questions: functionalism (cohesion, meaning), conflict theory (justifying or challenging inequality), feminist theory (who may lead, how gender roles are taught) and symbolic interactionism (how sacred meanings are created in practice)."
     ],
     pro:[
      "Religion can both stabilize and change societies. Liberation theology in Latin America (Gustavo Gutiérrez, *A Theology of Liberation*, 1971) used Catholic teaching to campaign for the poor; religious networks were central resources in the US civil rights movement and in opposition to apartheid. In resource-mobilization terms, congregations provide meeting places, leaders, money and trust.",
      "Measuring religiosity is tricky. Researchers distinguish **believing** (what people hold true), **behaving** (prayer, attendance) and **belonging** (identification). These can move independently, which is why the secularization debate is so contested (see {{secularization}}).",
      "Rational-choice theorists such as Rodney Stark treat religious groups as competing suppliers; critics argue this downplays meaning, community and coercion. Comparative work must also avoid using one tradition’s categories, such as “church membership”, to measure others where religion is organized differently.",
      {warn:"Describe groups in the terms their members use where possible, avoid ranking faiths, and keep the analysis on observable beliefs, practices and organization."}
     ]
    },
    related:["secularization","social-institutions","emile-durkheim","max-weber","karl-marx","power-authority"],
    read:[{book:"soc", where:"Sections 15.1 “The Sociological Approach to Religion” and 15.2 “World Religions”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) The Sociological Approach to Religion", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/15%3A_Religion/15.02%3A_The_Sociological_Approach_to_Religion"},{t:"LibreTexts (OpenStax 3e) 15.5 Key Terms: Religion", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/15%3A_Religion/15.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"secularization", title:"The secularization debate", aka:["secularisation","desecularization","believing without belonging"], tags:["sociology","religion","debates"],
    summary:"Does religion decline as societies modernize? The evidence is mixed, and sociologists still disagree.",
    levels:{
     starter:[
      "[[secularization|Secularization]] is the idea that religion becomes less important as societies modernize: fewer people believe or attend services, and religion has less say over law, schools and politics.",
      "Many classic sociologists expected this. In parts of the world, especially Western Europe, attendance and belief have fallen a lot. But in many other places religion has stayed strong or grown, for example Pentecostal churches across Africa and Latin America.",
      "So sociologists treat secularization as a **debated question**, not a settled law. Even Peter Berger, one of its best-known supporters, changed his mind in the 1990s and argued that most of the world was as religious as ever.",
      {key:"Ask which meaning of secularization someone means, and which place and time their evidence comes from."}
     ],
     builder:[
      "Three meanings are often mixed up:",
      {ol:[
        "**Decline** of belief and practice.",
        "**Differentiation**: other institutions (law, medicine, education) run on non-religious rules.",
        "**Privatization**: religion becomes a personal rather than public matter. José Casanova (*Public Religions in the Modern World*, 1994) argued differentiation is real, but decline and privatization are not inevitable."
      ]},
      {table:[
        ["Position","Key work","Core argument"],
        ["Classic secularization","Peter Berger, *The Sacred Canopy* (1967)","Pluralism and modern science erode religion’s taken-for-granted authority"],
        ["Desecularization","Berger (ed.), *The Desecularization of the World* (1999)","Most of the world is as religious as ever; Western Europe is the exception"],
        ["Believing without belonging","Grace Davie","Belief can persist while attendance falls"],
        ["Existential security","Pippa Norris and Ronald Inglehart, *Sacred and Secular* (2004)","Religiosity falls where life becomes safer and more predictable"],
        ["Religious markets","Rodney Stark and Roger Finke","Competition among many groups keeps religion vital"]
      ]}
     ],
     pro:[
      "Evidence problems make the debate hard to settle. Survey questions about belief and attendance differ across countries and translate poorly between traditions; identification can rise while practice falls; and global composition shifts partly because of demography, as more religious populations often have higher fertility, not only because individuals convert or leave.",
      "Weber’s idea of the “disenchantment of the world” (the spread of calculation and science) is often cited as the root of the thesis, but Weber did not predict religion’s disappearance in a simple way.",
      "Good practice: specify the dimension (decline, differentiation, privatization), the population, the period and the measure. A statement like “religion declined in Country X between 1990 and 2020 on measures of weekly attendance” is testable; “religion is dying” is not.",
      {tip:"Watch for evidence from one region being used as a universal trend. That is the single most common error in public arguments about secularization."}
     ]
    },
    related:["religion","social-change","max-weber"],
    read:[{book:"soc", where:"Section 15.1 “The Sociological Approach to Religion” and Section 15.3 “Religion in the United States” (as a case study)"}],
    sources:[{t:"LibreTexts (OpenStax 3e) The Sociological Approach to Religion", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/15%3A_Religion/15.02%3A_The_Sociological_Approach_to_Religion"}], checked:"2026-11"},

   {id:"power-authority", title:"Power and authority", aka:["Weber’s three types of authority","legitimacy"], tags:["sociology","politics","power"],
    summary:"Power is getting your way over others; authority is power people accept as legitimate. Weber described three types.",
    levels:{
     starter:[
      "[[power|Power]] is the ability to get your way, even when others resist. Ruling only by force is expensive and fragile, so most lasting power is accepted as rightful. Power that people accept as legitimate is [[authority]].",
      "Max Weber described three reasons people accept authority:",
      {list:[
        "[[traditional-authority|Traditional]]: “it has always been so” (a hereditary monarch, a customary chief).",
        "[[rational-legal-authority|Rational-legal]]: “the rules say so” (an elected official, a judge, a manager under a company handbook).",
        "[[charismatic-authority|Charismatic]]: “this person is extraordinary” (a prophet, an inspiring independence leader)."
      ]},
      {key:"Authority is about why people obey. It says nothing about whether the leader is good."}
     ],
     builder:[
      "Weber’s types (set out in *Economy and Society*, published after his death in 1922) are “ideal types”: pure models for comparison. Real authority mixes them. A constitutional monarch has traditional authority within rational-legal limits; an elected leader may add personal charisma to an office.",
      "Charismatic authority is powerful but unstable because it rests on one person. When the leader dies or fails, followers must turn it into rules or traditions, which Weber called the **routinization of charisma**. Religious movements, revolutions and even start-up companies face this succession problem.",
      "Weber thought modern societies were shifting towards rational-legal authority and {{bureaucracy|bureaucracy}}: rule-based, impersonal and efficient, but at risk of becoming an “iron cage” that limits freedom and meaning."
     ],
     pro:[
      "Other theorists broaden the idea of power. C. Wright Mills (*The Power Elite*, 1956) argued that a small, interconnected elite of corporate, military and political leaders makes key decisions in the United States; pluralists such as Robert Dahl countered that many groups compete. Steven Lukes (*Power: A Radical View*, 1974) distinguished three dimensions: winning open decisions, keeping issues off the agenda, and shaping what people want in the first place. Michel Foucault emphasized power spread through institutions, knowledge and surveillance.",
      "Legitimacy can be measured indirectly through compliance without coercion, trust in institutions and acceptance of electoral losses. Its loss often precedes political crises.",
      {tip:"When analysing a real case, separate three questions: who holds power, why others accept it (which type of legitimacy), and whether it is accountable. Keep evaluations of particular leaders out of the classification."}
     ]
    },
    related:["political-systems","max-weber","c-wright-mills","bureaucracy","religion"],
    read:[{book:"soc", where:"Section 17.1 “Power and Authority”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) Power and Authority", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/17%3A_Government_and_Politics/17.02%3A_Power_and_Authority"},{t:"LibreTexts (OpenStax 3e) 17.6 Key Terms: Government and Politics", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/17%3A_Government_and_Politics/17.06%3A_Key_Terms"}], checked:"2026-11"},

   {id:"political-systems", title:"Forms of government and political participation", aka:["democracy","monarchy","authoritarianism","totalitarianism","oligarchy"], tags:["sociology","politics","government"],
    summary:"How governments differ in who holds power and how much of life they control, and how people take part.",
    levels:{
     starter:[
      "Governments differ in two main ways: **who holds power** and **how much of life the state controls**.",
      {list:[
        "[[democracy|Democracy]]: citizens have an equal voice, either voting on laws directly or electing representatives.",
        "[[monarchy|Monarchy]]: one person rules for life, usually by inheritance. In an absolute monarchy the monarch holds real power; in a constitutional monarchy an elected parliament governs.",
        "[[oligarchy|Oligarchy]]: a small elite rules.",
        "[[authoritarianism|Authoritarian]] rule: a leader or small group rules without being accountable to voters.",
        "[[totalitarian|Totalitarian]] rule: the state tries to control nearly every part of life."
      ]},
      "Real countries mix features, so classify by what you can observe: how leaders are chosen, whether they can be voted out, and whether courts and media are independent."
     ],
     builder:[
      {table:[
        ["Feature to check","Democratic direction","Authoritarian direction"],
        ["How leaders are chosen","Free, competitive elections","Inheritance, force, or elections without real choice"],
        ["Removing leaders","Voters can remove them peacefully","No regular way to remove them"],
        ["Courts and media","Independent","Controlled by the rulers"],
        ["Opposition","Legal and active","Restricted or banned"],
        ["Private life","Largely free","Totalitarian states try to control it too"]
      ]},
      "Political participation includes voting, party and union membership, petitions, protest, contacting officials and online campaigning. Some countries, including Australia, Belgium and Brazil, make voting compulsory. Participation is usually higher among older, more educated and wealthier people, which can tilt whose interests are represented.",
      "Lenses: functionalists stress government’s role in order and coordination; conflict theorists stress elite control (C. Wright Mills; Robert Michels’ [[iron-rule-of-oligarchy|iron rule of oligarchy]]); symbolic interactionists study political symbols, rituals and framing."
     ],
     pro:[
      "Political scientists measure regimes on continuous scales rather than boxes. Projects such as V-Dem score electoral, liberal, participatory and other dimensions of democracy; different projects can disagree about particular countries, and their judgements are sometimes contested by governments.",
      "Hybrid regimes are common: regular elections combined with restricted media, harassed opposition or captured courts. Scholars use terms such as “competitive authoritarianism” or “electoral autocracy” for them.",
      "Totalitarianism as a concept was developed to analyse Nazi Germany and the Soviet Union under Stalin (for example in Hannah Arendt’s *The Origins of Totalitarianism*, 1951): one party, an official ideology, mass mobilization, terror and control of the economy and culture.",
      {warn:"Keep classification descriptive. Use documented, observable features and cite the source of any rating; avoid opinions about current parties or politicians."}
     ]
    },
    related:["power-authority","social-movements","c-wright-mills"],
    read:[{book:"soc", where:"Sections 17.2 “Forms of Government” and 17.4 “Theoretical Perspectives on Government and Power”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) Forms of Government", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/17%3A_Government_and_Politics/17.03%3A_Forms_of_Government"},{t:"LibreTexts (OpenStax 3e) 17.6 Key Terms: Government and Politics", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/17%3A_Government_and_Politics/17.06%3A_Key_Terms"}], checked:"2026-11"},

   {id:"economic-systems", title:"Economic systems", aka:["capitalism","socialism","mixed economy"], tags:["sociology","economy"],
    summary:"Capitalism, socialism and the mixed economies almost every country actually has.",
    levels:{
     starter:[
      "Every society must decide what to produce, how, and who gets it. The economy is the institution that does this.",
      {list:[
        "Under [[capitalism]], individuals and companies own businesses and produce for profit; markets set prices.",
        "Under [[socialism]], the state or community owns the means of production and aims to meet needs and share wealth more equally; planning plays a bigger role.",
        "In a [[mixed-economy|mixed economy]], private markets work alongside public ownership, regulation and welfare."
      ]},
      "Almost every country today has a mixed economy; they differ in the mix.",
      {tip:"In sociology these are descriptive words, not insults or praise."}
     ],
     builder:[
      {table:[
        ["Question","Capitalism","Socialism"],
        ["Who owns?","Private owners","State or community"],
        ["Who decides?","Markets","Planners or collective decisions"],
        ["Aim","Profit","Meeting needs, equality"],
        ["Supporters stress","Efficiency, innovation, choice","Fairness, security, guaranteed basics"],
        ["Critics stress","Inequality, insecurity, ignored costs such as pollution","Inefficiency, shortages, concentration of state power"]
      ]},
      "Variants: **market socialism** allows some private ownership or market prices; welfare-state capitalism, as in the Nordic countries, combines markets with high taxes and universal services; China officially describes a “socialist market economy” with state-owned and private firms. **Convergence theory** predicts economies become more alike as they develop.",
      "Sociologists also connect economy to social cohesion: Durkheim contrasted **mechanical solidarity** (sameness in simple societies) with **organic solidarity** (interdependence from specialized work)."
     ],
     pro:[
      "Comparative political economy distinguishes “varieties of capitalism”: liberal market economies, coordinated market economies with strong unions and business associations, and state-led models. Gøsta Esping-Andersen’s *The Three Worlds of Welfare Capitalism* (1990) grouped welfare states as liberal, conservative and social democratic, a typology later extended to Mediterranean and East Asian cases.",
      "Classic theorists frame the systems differently. Marx analysed capitalism as class exploitation through wage labour (see {{karl-marx}}); Weber stressed rational calculation and bureaucracy; Karl Polanyi (*The Great Transformation*, 1944) argued markets are always embedded in social institutions and that turning land, labour and money into pure commodities provokes social backlash.",
      "Measurement cautions: GDP growth says little about distribution, unpaid work or environmental costs. See {{measuring-inequality}} for how sociologists measure who gets what."
     ]
    },
    related:["work-globalization","social-institutions","karl-marx","measuring-inequality"],
    read:[{book:"soc", where:"Section 18.1 “Economic Systems”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) 18.5 Key Terms: Work and the Economy", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/18%3A_Work_and_the_Economy/18.05%3A_Key_Terms"},{t:"LibreTexts (OpenStax 3e) 18.6 Section Summary", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/18%3A_Work_and_the_Economy/18.06%3A_Section_Summary"}], checked:"2026-11"},

   {id:"work-globalization", title:"Work in a global economy", aka:["informal economy","deindustrialization","automation","global commodity chains"], tags:["sociology","economy","work","globalization"],
    summary:"Informal work, global production chains, deindustrialization and automation: how work is changing.",
    levels:{
     starter:[
      "Work is changing in four big ways:",
      {list:[
        "The [[informal-economy|informal economy]]: much of the world’s work happens without contracts, labour-law protection or social security. The ILO estimates about 58% of employed people worldwide worked informally in 2024.",
        "**Global commodity chains**: one product is made across many countries, from raw material to shop.",
        "[[deindustrialization|Deindustrialization]]: factory jobs disappear from regions that once depended on them.",
        "[[automation|Automation]]: machines and software take over tasks people used to do."
      ]},
      {warn:"Informal doesn’t mean illegal. Most informal work, such as street vending or domestic work, is legal but unprotected."}
     ],
     builder:[
      "ILO modelled estimates show informality varies sharply: about 13% of employment in high-income countries and about 88% in low-income countries (2024). Informal workers typically lack sick pay, pensions, safety protection and security against dismissal.",
      "Global commodity chains (a term from world-systems research) show where value goes. Design, branding and retail often capture more of the final price than farming or assembly. Outsourcing moves work to other firms, frequently abroad: customer service and IT work in India and the Philippines are well-known examples.",
      "Barry Bluestone and Bennett Harrison’s *The Deindustrialization of America* (1982) traced plant closures and their effects on communities. Similar processes hit northern England, Germany’s Ruhr and other industrial regions. Effects spread across institutions: job loss, out-migration of young people, strained families, falling tax revenue and worse health.",
      "Automation and outsourcing can **polarize** labour markets: growth at the high-skill and low-wage service ends, fewer middle-skill jobs."
     ],
     pro:[
      "Economist Dani Rodrik’s work on **premature deindustrialization** (2016) found that many developing countries reach their peak manufacturing employment at lower income levels than early industrializers did, which may limit manufacturing as a path out of poverty.",
      "Platform or gig work blurs formal and informal: workers may be classified as independent contractors without employee protections; courts and legislators in several countries have reached different conclusions about their status.",
      "Sociological lenses: functionalists see informal work as a flexible safety net; conflict theorists see risk shifted onto workers and a reserve of cheap labour; symbolic interactionists study identity and respect in stigmatized work. Feminist scholars note women are overrepresented in some of the least protected informal work, such as domestic work.",
      {tip:"Check whether an informality figure includes agriculture, and whether it counts informal jobs in formal firms. The ILO’s harmonized definition does both, so national figures may differ."}
     ]
    },
    related:["economic-systems","global-stratification","theories-global-inequality","health-sociology"],
    read:[{book:"soc", where:"Sections 18.2 “Globalization and the Economy” and 18.3 “Work in the United States”"}],
    sources:[{t:"ILO: World informality, regional statistical profile (2025)", url:"https://www.ilo.org/sites/default/files/2025-05/World_Informality%20Regional%20statistical%20profile.pdf"},{t:"LibreTexts (OpenStax 3e) 18.5 Key Terms: Work and the Economy", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/18%3A_Work_and_the_Economy/18.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"health-sociology", title:"Sociology of health", aka:["medical sociology","social determinants of health","medicalization","sick role"], tags:["sociology","health","inequality"],
    summary:"Why health depends on social conditions, how illness is defined, and why health is so unequal.",
    levels:{
     starter:[
      "Health isn’t only about bodies and germs. Where you live, your income, your job and how others treat you all affect how healthy you are.",
      "The World Health Organization calls these the [[social-determinants|social determinants of health]]: “the conditions in which people are born, grow, work, live and age.” WHO notes that between countries, life expectancy differs by as much as 33 years.",
      "[[social-epidemiology|Social epidemiology]] studies how disease is distributed across social groups. [[medicalization|Medicalization]] is when something once seen as bad behaviour or a normal part of life is redefined as an illness needing medical treatment.",
      {key:"Personal habits matter, but they are shaped by conditions people don’t choose."}
     ],
     builder:[
      "Dahlgren and Whitehead’s 1991 “rainbow” model layers influences: age, sex and inherited factors at the core; then individual habits; social and community networks; living and working conditions (work, housing, water, schooling, health care, food); and the wider economy, culture, environment and policy.",
      "Michael Marmot’s Whitehall studies of British civil servants found a **social gradient**: health worsened at each step down the job hierarchy, even among employed people with access to care.",
      "Talcott Parsons (*The Social System*, 1951) described the [[sick-role|sick role]]: sick people are excused from duties and not blamed, but must try to get well, seek competent help and have their illness confirmed by a doctor. Critics note chronic illness and disability don’t fit it.",
      "Medicalization examples: alcohol-use disorder, hospital childbirth, debates over children’s attention problems. Demedicalization: the American Psychiatric Association removed homosexuality from its diagnostic manual in 1973; WHO removed it from its disease classification in 1990."
     ],
     pro:[
      {table:[
        ["Lens","Focus"],
        ["Functionalism","The sick role and the doctor’s gatekeeping role in keeping society working"],
        ["Conflict theory","Commodification of health, profit, unequal access and health disparities by class and race"],
        ["Feminist theory","Medical neglect of women’s symptoms; control of reproduction"],
        ["Symbolic interactionism","How illness is given meaning; stigma and contested illnesses"]
      ]},
      "Global patterns: OpenStax notes wealthier nations face mainly chronic disease, while low-income nations must also manage infectious disease, high infant mortality and fewer health workers. Many low- and middle-income countries now face a **double burden** of infectious and rising chronic disease. Universal health care systems guarantee coverage through taxation (as in the UK or Sri Lanka) or social insurance (as in Germany or Japan).",
      "Peter Conrad and Joseph Schneider’s work on the medicalization of deviance shows that redefining “badness” as “sickness” changes who responds (doctors, not police or priests), how, and who is held responsible. Pharmaceutical marketing and patient advocacy can both drive medicalization.",
      {tip:"Health comparisons need age-standardized rates; otherwise an older population looks sicker simply because it is older."}
     ]
    },
    related:["social-institutions","correlation-causation","global-stratification","labeling-theory"],
    read:[{book:"soc", where:"Sections 19.1 “The Social Construction of Health”, 19.2 “Global Health”, 19.4 “Comparative Health and Medicine” and 19.5 “Theoretical Perspectives on Health and Medicine”"}],
    sources:[{t:"WHO fact sheet: Social determinants of health (2025)", url:"https://www.who.int/en/news-room/fact-sheets/detail/social-determinants-of-health"},{t:"LibreTexts (OpenStax 3e) Theoretical Perspectives on Health and Medicine", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/19%3A_Health_and_Medicine/19.06%3A_Theoretical_Perspectives_on_Health_and_Medicine"},{t:"OpenStax Introduction to Sociology 3e, 19.1 The Social Construction of Health", url:"https://openstax.org/books/introduction-sociology-3e/pages/19-1-the-social-construction-of-health"}], checked:"2026-11"},

   {id:"demography", title:"Demography and population rates", aka:["crude birth rate","crude death rate","migration","population pyramid"], tags:["sociology","population","numbers"],
    summary:"How demographers measure births, deaths and migration, and how to calculate a crude rate per 1,000.",
    levels:{
     starter:[
      "[[demography|Demography]] is the study of population. Populations change in only three ways: births, deaths and migration.",
      "To compare places of different sizes, demographers use rates per 1,000 people:",
      {ex:"Crude rate = (events in a year ÷ population) × 1,000\n\n9,000 births in a city of 600,000:\n9,000 ÷ 600,000 × 1,000 = 15 births per 1,000", label:"How to calculate a crude rate", mono:true},
      "The birth version is a crude birth rate (OpenStax calls it a [[fertility-rate|fertility rate]]); the death version is a crude death rate ([[mortality-rate|mortality rate]]). [[migration|Migration]] adds people moving in and out.",
      {tip:"“Crude” means it ignores age. An older population can have a high death rate even with excellent health care."}
     ],
     builder:[
      {table:[
        ["Measure","How it’s calculated","Watch out for"],
        ["Crude birth rate","Births ÷ population × 1,000","Affected by age structure"],
        ["Crude death rate","Deaths ÷ population × 1,000","Older populations look worse"],
        ["Rate of natural increase","Crude birth rate − crude death rate (per 1,000); ÷ 10 gives % per year","Ignores migration"],
        ["Net migration rate","(In − out) ÷ population × 1,000","Can be negative"],
        ["Total fertility rate","Average children per woman at current rates","About 2.1 is replacement level"],
        ["Infant mortality rate","Deaths under age 1 per 1,000 **live births**","Different base from crude rates"]
      ]},
      "The balancing equation ties these together: next population = current population + births − deaths + in-migrants − out-migrants.",
      "**Population pyramids** show the population by age group and sex. A wide base means many children (high fertility); a narrow base and wide top mean an ageing population. They also show past events such as baby booms, wars or migration waves.",
      "Migration is often explained with **push and pull factors** plus intervening obstacles (Everett Lee, 1966), and it flows through family and community networks."
     ],
     pro:[
      "Professionals prefer refined rates: age-specific fertility and mortality rates, life expectancy (a summary of current age-specific death rates), and age-standardized rates for comparison. The **dependency ratio** compares people of typical working age with children and older people.",
      "Data come from censuses, civil registration (birth and death records), surveys such as the Demographic and Health Surveys, and population registers. Where civil registration is incomplete, figures are estimates; the UN’s *World Population Prospects* reconciles sources into consistent estimates and projections, revised every two years or so.",
      "Global figures from *World Population Prospects 2024*: about 8.2 billion people in 2024; a projected peak of about 10.3 billion in the mid-2080s; global life expectancy at birth of 73.3 years in 2024; population already peaked in 63 countries and areas.",
      {warn:"Projections are not predictions of certainty: they depend on assumptions about fertility, mortality and migration, and the UN publishes ranges for that reason."}
     ]
    },
    related:["demographic-transition","population-debates","urbanization","family"],
    read:[{book:"soc", where:"Section 20.1 “Demography and Population”"}],
    sources:[{t:"UN DESA: World Population Prospects 2024 press release", url:"https://www.un.org/sustainabledevelopment/blog/2024/07/press-release-wpp2024/"},{t:"LibreTexts (OpenStax 3e) 20.5 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"demographic-transition", title:"The demographic transition model", aka:["DTM","demographic transition theory"], tags:["sociology","population","models"],
    summary:"A four-stage model of how birth and death rates fall as societies develop, and why it’s only a rough guide.",
    levels:{
     starter:[
      "The [[demographic-transition|demographic transition]] model describes how populations change as societies industrialize:",
      {ol:[
        "Births and deaths are both high; population grows slowly.",
        "Deaths fall (clean water, food, medicine) but births stay high; population grows fast.",
        "Births fall too (city life, schooling, contraception); growth slows.",
        "Births and deaths are both low; population levels off."
      ]},
      "The key insight: deaths usually fall before births, and the gap between them causes a population boom.",
      {key:"It’s a model of a pattern, mostly based on Europe’s history, not a law every country must follow."}
     ],
     builder:[
      "Why deaths fall first: public health measures and food security reduce deaths quickly, while birth rates depend on norms about family size, which change more slowly. Why births then fall: in cities children cost more and contribute less income; girls’ schooling and women’s paid work delay and reduce childbearing; child survival makes large families less necessary; contraception becomes available.",
      "Limits of the model:",
      {list:[
        "It generalizes from Europe; many countries moved far faster (fertility in the Republic of Korea fell within a few decades).",
        "It leaves out migration.",
        "It ends at stage 4, but many countries now have fertility well below replacement. The UN’s *World Population Prospects 2024* reports more than half of countries below 2.1 births per woman and nearly a fifth below 1.4.",
        "It assumes economic development drives everything; culture, religion and policy also matter, and fertility has fallen in some countries before much industrialization."
      ]}
     ],
     pro:[
      "Some demographers add a **fifth stage** of sustained below-replacement fertility and population decline, and describe a **second demographic transition** (Ron Lesthaeghe and Dirk van de Kaa): later marriage, more cohabitation and childbearing outside marriage, driven by values of individual autonomy.",
      "A related idea, the **epidemiological transition**, describes the shift in main causes of death from infectious disease to chronic disease as mortality falls.",
      "Policy relevance: the period when the working-age share is large (stage 3) can bring a **demographic dividend** if jobs and investment are available. Ageing in stage 4 and beyond strains pensions and care and raises the importance of migration.",
      {tip:"Use the model to ask questions (Why haven’t births fallen here yet? What happens when they fall below replacement?), not to label countries as “behind”."}
     ]
    },
    related:["demography","population-debates","social-change","types-of-societies"],
    read:[{book:"soc", where:"Section 20.1 “Demography and Population”: “Demographic Transition Theory”"}],
    sources:[{t:"UN DESA: World Population Prospects 2024 press release", url:"https://www.un.org/sustainabledevelopment/blog/2024/07/press-release-wpp2024/"},{t:"LibreTexts (OpenStax 3e) 20.5 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"population-debates", title:"Population debates: Malthus and his critics", aka:["Malthusian theory","neo-Malthusianism","cornucopian theory"], tags:["sociology","population","debates","thinkers"],
    summary:"Is population growth the main cause of hunger and environmental damage? The main positions and their evidence.",
    levels:{
     starter:[
      "In 1798 Thomas Malthus, an English clergyman, argued that population tends to grow faster than food supply. He expected famine, disease and war to hold population down unless people married later or had fewer children. This is [[malthusian-theory|Malthusian theory]].",
      "Others disagreed. [[cornucopian-theory|Cornucopians]] argue that human ingenuity creates new resources as population grows. Others say hunger comes mainly from poverty and unequal distribution, not from too many people.",
      "The record so far: world food production has grown faster than population since Malthus wrote, but hunger and environmental damage remain serious problems, so the debate continues."
     ],
     builder:[
      {table:[
        ["Position","Key figure","Argument"],
        ["Malthusian","Thomas Malthus (1798)","Positive checks (famine, disease, war) and preventive checks (later marriage, celibacy) limit population"],
        ["Neo-Malthusian","Paul Ehrlich, *The Population Bomb* (1968)","Growth threatens environmental collapse; supported zero population growth"],
        ["Cornucopian","Julian Simon (1981)","People are the “ultimate resource”; innovation overcomes scarcity"],
        ["Innovation","Ester Boserup (1965)","Population pressure drives agricultural innovation"],
        ["Distribution","Marx and Engels; Amartya Sen, *Poverty and Famines* (1981)","Hunger results from inequality and loss of access to food"]
      ]},
      "**Carrying capacity**, the population an area can support, is not fixed: it depends on technology, consumption levels and distribution. A small, high-consuming population can have a larger environmental footprint than a large, low-consuming one."
     ],
     pro:[
      "Sen’s entitlement approach showed that some major famines occurred without a fall in total food availability: people starved because wages collapsed or prices rose, so they lost the ability to obtain food. This shifted famine analysis from food supply to rights, markets and politics.",
      "The history of population control includes coercion: forced or pressured sterilization campaigns and strict birth limits in several countries in the 20th century. The 1994 International Conference on Population and Development in Cairo reframed policy around reproductive rights, women’s education and voluntary family planning.",
      "Today’s debate has shifted with falling fertility: many governments now worry about ageing and shrinking populations, while environmental debates focus more on consumption, technology and emissions than on numbers alone. Lenses differ: functionalists ask how populations stay in balance with resources, conflict theorists ask who controls resources and bears scarcity, and feminist scholars centre reproductive autonomy.",
      {warn:"Arguments that blame poor or high-fertility populations for global problems often ignore consumption and historic emissions in richer countries. Check whose behaviour an argument focuses on."}
     ]
    },
    related:["demography","demographic-transition","environmental-sociology","global-stratification"],
    read:[{book:"soc", where:"Section 20.1 “Demography and Population”: “Population Growth” and the theories that follow"}],
    sources:[{t:"LibreTexts (OpenStax 3e) 20.5 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"urbanization", title:"Urbanization, suburbs and gentrification", aka:["cities","urban sociology","suburbanization","gentrification"], tags:["sociology","cities","population"],
    summary:"How and why people move into cities, how cities grow outwards, and how neighbourhoods change.",
    levels:{
     starter:[
      "[[urbanization|Urbanization]] is the growth in the share of people living in towns and cities. In 1950 about 20% of the world’s people lived in cities; in 2025, using a new common UN method, cities held about 45% of the world’s 8.2 billion people, with many more in towns.",
      "[[suburbanization|Suburbanization]] is the growth of communities around a city’s edge. [[gentrification|Gentrification]] is when better-off newcomers and investment move into a historically poorer area, often pushing up rents so long-term residents have to leave.",
      {tip:"Urban statistics depend on definitions. Under countries’ own definitions, the UN reported about 55% of people as urban in 2018; the 2025 method separates cities from towns, so the numbers aren’t directly comparable."}
     ],
     builder:[
      "The UN’s *World Urbanization Prospects 2025* used the **Degree of Urbanisation** method for the first time, classifying places as cities, towns or rural areas on a common grid. It counted 33 megacities (10 million or more) in 2025, up from 8 in 1975, 19 of them in Asia, and projected that two-thirds of population growth to 2050 will be in cities.",
      "Classic models: the Chicago School’s **human ecology** treated the city like an ecosystem; Ernest Burgess’s **concentric zone model** (1925) pictured rings from a central business district outwards. Conflict theorists argue that landowners, developers and officials shape growth to benefit the better-off.",
      "Suburbs differ by region: in the post-1945 United States they were often middle-class and, through discriminatory lending, mostly White; around Paris, many *banlieues* are poorer than the centre; around many fast-growing cities in Africa, Asia and Latin America, gated estates and informal settlements both spread at the edge.",
      "Ruth Glass coined “gentrification” in 1964, describing London districts where the process continued “until all or most of the original working class occupiers are displaced”."
     ],
     pro:[
      "Explanations of gentrification divide into **production-side** accounts (Neil Smith’s **rent gap**: investors profit from the gap between current and potential land values) and **consumption-side** accounts (changing middle-class tastes for central, older neighbourhoods). Most researchers combine them.",
      "Measurement is contested: direct displacement (people forced out) is harder to observe than exclusionary displacement (lower-income people unable to move in). Effects on long-term residents who stay can include better services alongside a loss of community and political voice.",
      "In much of the Global South, urban growth includes large informal settlements where housing lacks secure tenure or basic services. Policy debates range from eviction to upgrading in place. Urbanization also links to the environment (heat, flooding, pollution) and to health through the social determinants of health."
     ]
    },
    related:["demography","environmental-sociology","social-change","social-stratification"],
    read:[{book:"soc", where:"Section 20.2 “Urbanization”"}],
    sources:[{t:"UN DESA: World Urbanization Prospects 2025 press release", url:"https://www.un.org/sustainabledevelopment/blog/2025/11/press-release-wup2025/"},{t:"UCL Bartlett: Ruth Glass and coining ‘gentrification’", url:"https://www.ucl.ac.uk/bartlett/ideas/100-years-bartlett/ruth-glass-and-coining-gentrification"},{t:"LibreTexts (OpenStax 3e) Urbanization", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.03%3A_Urbanization"}], checked:"2026-11"},

   {id:"environmental-sociology", title:"Environmental sociology and environmental justice", aka:["environmental racism","environmental justice","tragedy of the commons"], tags:["sociology","environment","inequality"],
    summary:"How social arrangements create environmental problems, and why hazards fall unequally on different communities.",
    levels:{
     starter:[
      "[[environmental-sociology|Environmental sociology]] studies the relationship between people and the environment: how societies use resources, create pollution, and decide who lives with the consequences.",
      "Environmental hazards aren’t spread evenly. [[environmental-racism|Environmental racism]] describes how toxic waste sites, polluting factories and dumps are disproportionately placed in communities of colour and low-income communities. The movement against this is called **environmental justice**.",
      "Wealthier communities can often say “not in my back yard” (NIMBY) and push hazards elsewhere. Globally, electronic waste from rich countries is often shipped to poorer ones."
     ],
     builder:[
      "Key ideas:",
      {list:[
        "**Carrying capacity**: how much life an area can sustain.",
        "**Tragedy of the commons** (Garrett Hardin, 1968): shared resources get overused when no one is responsible. Elinor Ostrom (*Governing the Commons*, 1990) showed many communities manage commons well with their own rules.",
        "**Treadmill of production** (Allan Schnaiberg, 1980): growth-driven economies keep raising resource use and pollution.",
        "**Pollution, e-waste and cancer clusters**: harms that concentrate geographically."
      ]},
      "The US environmental justice movement grew from protests in 1982 against a toxic waste landfill in Warren County, North Carolina, a mostly Black county. The United Church of Christ’s 1987 report *Toxic Wastes and Race in the United States* found race was the strongest predictor of where hazardous waste facilities were sited. Sociologist Robert Bullard’s research documented similar patterns."
     ],
     pro:[
      "Climate justice applies the same lens globally: countries that historically emitted the most greenhouse gases are mostly wealthy, while many of those most exposed to heat, drought, flooding and sea-level rise emitted little. Within countries, poorer households are often more exposed and less able to adapt.",
      "Debates in environmental justice research concern causation: did hazards come to disadvantaged communities (siting), or did property values fall and poorer residents move in afterwards (market dynamics)? Studies find evidence for both, varying by place; either way, the burden falls unequally.",
      "Lenses: functionalists (human ecology) study how people adapt to environments; conflict theorists and world-systems scholars study how power distributes harms; ecofeminists link the domination of nature and of women.",
      {tip:"When mapping environmental inequality, describe patterns and causes, not the residents. The point is the decisions that placed the hazards, not blame on the people living beside them."}
     ]
    },
    related:["urbanization","population-debates","race-ethnicity","global-stratification","social-movements"],
    read:[{book:"soc", where:"Section 20.3 “The Environment and Society”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) The Environment and Society", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.04%3A_The_Environment_and_Society"},{t:"LibreTexts (OpenStax 3e) 20.5 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/20%3A_Population_Urbanization_and_the_Environment/20.05%3A_Key_Terms"}], checked:"2026-11"},

   {id:"media-technology", title:"Media and technology in society", aka:["gatekeeping","media consolidation","agenda-setting","new media"], tags:["sociology","media","technology"],
    summary:"How media are owned, filtered and used, and what each sociological lens sees in them.",
    levels:{
     starter:[
      "Media are all print, digital and electronic means of communication. They don’t just carry information; someone decides what to carry.",
      "[[gatekeeping|Gatekeeping]] is how a huge number of possible messages gets filtered into the few that reach the public. Editors, owners and now algorithms do this.",
      "[[media-consolidation|Media consolidation]] is fewer and fewer owners controlling most outlets.",
      "[[agenda-setting|Agenda-setting]] means media don’t so much tell people what to think as what to think about.",
      {key:"Ask of any information source: who owns it, who chose this story, and what was left out?"}
     ],
     builder:[
      {table:[
        ["Lens","What it notices"],
        ["Functionalism","Information, entertainment, advertising and socialization; Lazarsfeld and Merton’s (1948) “narcotizing dysfunction”"],
        ["Conflict theory","Ownership, gatekeeping, consolidation, surveillance and the digital divide"],
        ["Feminist theory","Stereotyped representations of women; online harassment; who builds technology"],
        ["Symbolic interactionism","Technology as status symbol; media constructing what seems real"]
      ]},
      "David Manning White’s 1950 “Mr. Gates” study showed one editor’s personal choices shaping the news. Maxwell McCombs and Donald Shaw’s agenda-setting study of the 1968 US election, published in 1972, found voters’ priorities matched media coverage.",
      "Online, traditional gatekeepers matter less but new ones matter more: search rankings, recommendation algorithms, platform moderation and advertisers. Public service broadcasters (such as the BBC, NHK, ABC Australia or SABC) and community media are funded and governed differently from commercial outlets."
     ],
     pro:[
      "Concentrated ownership is an **oligopoly** when a few firms dominate. Concerns include viewpoint diversity, loss of local journalism and conflicts of interest; counterarguments note that scale funds investigative reporting and that online entry costs are low. Evidence depends heavily on country and market.",
      "Eli Pariser’s **filter bubble** (2011) proposed that personalization isolates users in agreeable information. Later empirical studies often found most users still encounter some cross-cutting content, so effects are debated and may be concentrated among smaller, highly engaged groups.",
      "Surveillance: Foucault’s analysis of Bentham’s panopticon is often applied to digital monitoring, where people behave as if always watched. **Net neutrality**, the principle that internet providers treat all data equally, has been adopted, debated or reversed in different countries.",
      {tip:"When comparing outlets, look at framing (headline words, images, who is quoted) as well as selection (which stories appear at all)."}
     ]
    },
    related:["digital-divide","social-movements","social-change","agents-of-socialization","c-wright-mills"],
    read:[{book:"soc", where:"Sections 8.1 “Technology Today”, 8.2 “Media and Technology in Society”, 8.3 “Global Implications of Media and Technology” (media consolidation) and 8.4 “Theoretical Perspectives on Media and Technology” (gatekeeping)"}],
    sources:[{t:"LibreTexts (OpenStax 3e) Theoretical Perspectives on Media and Technology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/08%3A_Media_and_Technology/8.05%3A_Theoretical_Perspectives_on_Media_and_Technology"},{t:"LibreTexts (OpenStax 3e) 8.6 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/08%3A_Media_and_Technology/8.06%3A_Key_Terms"}], checked:"2026-11"},

   {id:"digital-divide", title:"The digital divide", aka:["digital inequality","knowledge gap","e-readiness"], tags:["sociology","technology","inequality"],
    summary:"Unequal access to, skills with, and benefits from digital technology, within and between countries.",
    levels:{
     starter:[
      "The [[digital-divide|digital divide]] is the uneven access to technology along lines of income, race, class, gender and geography.",
      "The ITU estimated that about **74%** of the world’s population, around **6 billion people**, used the internet in 2025, so more than a quarter were still offline. In high-income countries about 94% were online; in low-income countries about 23%.",
      "Access isn’t the whole story. People also need skills, affordable data, content in their language and the confidence to use it.",
      {key:"A phone in someone’s hand closes only the first gap."}
     ],
     builder:[
      "Researchers describe three levels:",
      {ol:[
        "**Access**: devices and affordable, reliable connections.",
        "**Skills and use**: searching, judging sources, staying safe, using services. OpenStax calls the ability to sort, interpret and process digital knowledge **e-readiness**.",
        "**Outcomes**: turning use into jobs, learning, health information, income or civic voice."
      ]},
      "A [[knowledge-gap|knowledge gap]] grows when groups grow up without access, compounding other inequalities. Gaps appear by country income, urban versus rural location, gender, age, disability and language.",
      "Technology can also leapfrog: mobile-money services such as M-Pesa, launched in Kenya in 2007, let people without bank accounts send and save money by phone."
     ],
     pro:[
      "The “second-level digital divide” (Eszter Hargittai, 2002) shifted research from access to differences in skills and use. A third level concerns tangible outcomes: equally connected people may gain very different benefits depending on existing resources, which can widen inequality even as access spreads.",
      "Measurement: ITU figures are modelled from household surveys and administrative data; “internet use” usually means use in the last three months, which says little about quality, speed or cost. Affordability targets compare the price of a basic data package with average income.",
      "Lenses: functionalists see digital inclusion as necessary for participation in modern institutions; conflict theorists stress how unequal access and skills reproduce class, gender and global inequality; symbolic interactionists study what devices and online presence mean for identity and status.",
      {tip:"Always check the year and definition of a connectivity statistic; figures change quickly."}
     ]
    },
    related:["media-technology","global-stratification","social-mobility","measuring-inequality"],
    read:[{book:"soc", where:"Section 8.1 “Technology Today”: “Technological Inequality”, and Section 8.3 “Global Implications of Media and Technology”"}],
    sources:[{t:"ITU Facts and Figures 2025: Internet use", url:"https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use"},{t:"LibreTexts (OpenStax 3e) 8.6 Key Terms", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/08%3A_Media_and_Technology/8.06%3A_Key_Terms"}], checked:"2026-11"},

   {id:"social-movements", title:"Social movements", aka:["activism","resource mobilization","framing","new social movements"], tags:["sociology","social change","politics"],
    summary:"Types of movements, their life cycle, and the main theories of why they rise and succeed.",
    levels:{
     starter:[
      "A [[social-movement|social movement]] is a purposeful, organized group working towards a shared social goal. Movements are how people deliberately push societies to change, or to resist change.",
      "David Aberle (1966) sorted them into five types: **reform** (change one thing), **revolutionary** (change everything), **resistance** (stop or undo a change), **religious or redemptive** (inner spiritual change) and **alternative** (limited self-improvement).",
      "Most movements pass through a life cycle: emergence, coalescence, institutionalization and decline. Decline isn’t always defeat; a movement can wind down because it won.",
      {key:"Grievances are everywhere; movements are rare. Resources, organization and persuasive framing explain which grievances become movements."}
     ],
     builder:[
      {table:[
        ["Theory","Key idea"],
        ["Relative deprivation","People mobilize when they feel deprived compared with others or with their expectations"],
        ["[[resource-mobilization|Resource mobilization]] (McCarthy and Zald, 1977)","Success depends on gathering money, time, skills, networks and organizations"],
        ["Political opportunity","Movements grow when political systems open or elites divide"],
        ["[[framing|Framing]] (Snow and Benford, 1988)","Diagnostic (problem and blame), prognostic (solution), motivational (call to action)"],
        ["[[new-social-movements|New social movements]]","Since the 1960s, many movements centre on identity, culture and quality of life (environment, peace, feminism, LGBTQ+ rights)"]
      ]},
      "The life cycle (Blumer 1969; Mauss 1975; Tilly 1978) ends in decline, which can come through success, failure, co-optation (leaders absorbed into the system), repression or becoming part of mainstream politics.",
      "Examples across regions: the Chipko movement in India (from 1973), the Green Belt Movement in Kenya (founded by Wangari Maathai in 1977), Solidarity in Poland (1980), the anti-apartheid movement, and women’s suffrage campaigns (New Zealand, 1893, was the first self-governing country to give women the national vote)."
     ],
     pro:[
      "Frame alignment (Snow and colleagues, 1986) has four processes: bridging (linking to sympathetic but unorganized people), amplification (stressing values people already hold), extension (broadening goals to attract new groups) and transformation (changing old meanings).",
      "Digital media lower the costs of coordination. Analyses of the Arab Spring (2010–2011) debated how much social media mattered. Malcolm Gladwell (2010) argued online ties are weak; Zeynep Tufekci (*Twitter and Tear Gas*, 2017) argued that networked movements scale fast but may lack the decision-making capacity built by slower organizing.",
      "OpenStax also covers **collective behaviour** (crowds, masses and publics) and theories such as emergent-norm and value-added theory, which explain less organized action.",
      {tip:"Analyse movements even-handedly: describe their goals in supporters’ own terms, then state critics’ main arguments. Classification by type or stage isn’t a judgement of whether the cause is right."}
     ]
    },
    related:["social-change","media-technology","political-systems","environmental-sociology"],
    read:[{book:"soc", where:"Section 21.2 “Social Movements”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, Chapter 21 Key Terms", url:"https://openstax.org/books/introduction-sociology-3e/pages/21-key-terms"}], checked:"2026-11"},

   {id:"social-change", title:"Social change", aka:["modernization","theories of social change"], tags:["sociology","social change","theory"],
    summary:"What drives societies to change, and the main theories that explain it.",
    levels:{
     starter:[
      "[[social-change|Social change]] is change in society brought about by social movements and by outside forces such as new technology or environmental change.",
      "OpenStax groups the causes into four: **technology** (the printing press, the internet), **social institutions** (a change in the economy reshapes family and school), **population** (ageing, migration) and **the environment** (droughts, floods, climate change).",
      "Change is usually multi-causal: these forces act on each other, and organized people push change in particular directions.",
      {key:"Ask of any change: what drove it, who pushed it, who resisted it, and who gained or lost?"}
     ],
     builder:[
      {table:[
        ["Theory","How change happens","Main criticism"],
        ["Evolutionary","Societies move through the same stages towards more complex forms","Assumes one path and ranks societies, often with a European bias"],
        ["Functionalist","Systems adjust to disruption and return to balance","Struggles to explain conflict and sudden change"],
        ["Conflict","Struggle between groups with unequal power (Marx: class conflict)","Can underplay consensus and gradual change"],
        ["Cyclical","Civilizations rise and decline in recurring patterns","Hard to test; patterns may be read into history"]
      ]},
      "William Ogburn’s [[cultural-lag|cultural lag]] adds that technology often changes faster than norms and laws. [[modernization|Modernization]] is the process that increases specialization and differentiation in society; OpenStax notes that judging modernity by technology and industry, and urging all societies to copy core nations, carries ethnocentric and pro-capitalist bias."
     ],
     pro:[
      "Modernization theory (1950s–60s) expected poorer countries to follow the path of industrialized ones; dependency and world-systems theorists argued that global inequality itself blocks that path (see {{theories-global-inequality}}). Today many scholars speak of “multiple modernities”: societies modernize in different ways, combining new technology with distinct institutions and values.",
      "OpenStax also flags modernization’s mixed promises: labour-saving technology hasn’t reduced housework time much over fifty years, constant connectivity raises expectations that workers are always available, and more information doesn’t guarantee better information.",
      "Analysing change well means tracing mechanisms across institutions and scales: a new technology changes work, which changes family timing, which changes fertility, which changes population structure and politics. Hurricane Katrina in 2005, used by OpenStax as a case study, showed technology, institutions, population and environment interacting in one disaster.",
      {tip:"Be wary of single-cause stories (“the internet caused X”). Look for the institutions, resources and people that turned a possibility into a change."}
     ]
    },
    related:["social-movements","social-institutions","cultural-change","media-technology","demographic-transition","theories-global-inequality"],
    read:[{book:"soc", where:"Section 21.3 “Social Change”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 21.3 Social Change", url:"https://openstax.org/books/introduction-sociology-3e/pages/21-3-social-change"},{t:"LibreTexts (OpenStax 3e) Social Change", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/21%3A_Social_Movements_and_Social_Change/21.04%3A_Social_Change"}], checked:"2026-11"},

   {id:"life-course", title:"The life course and cumulative advantage", aka:["life-course perspective","linked lives","cumulative disadvantage","structural lag","cohort"], tags:["sociology","ageing","life course"],
    summary:"How sociologists study lives as they unfold inside history, and why advantages and disadvantages tend to build up with age.",
    levels:{
     starter:[
      "A life is not a fixed ladder of stages that everyone climbs in the same way. The [[life-course-perspective|life-course perspective]] studies how each life unfolds from birth to death inside a particular history, place and society.",
      "Four principles help: **time and place** (the events people live through), **timing** (the age at which they happen), **linked lives** (other people’s lives shape ours) and **agency** (people make choices within limits).",
      "A [[cohort]] is a group born in the same years. Members of a cohort meet history at the same age: a recession, a war or a new technology arrives when they are children, or job-seekers, or retired.",
      {key:"To understand an older person’s situation, ask what happened to them, when, and alongside whom."}
     ],
     builder:[
      "Glen Elder’s *Children of the Great Depression* (1974) is the classic study. He followed Californians born in the early 1920s and found that the crash affected them differently depending on their age and their family’s losses when it hit. Life-course researchers later set out the principles of time and place, timing, linked lives and agency, plus **life-span development**: ageing is a process that lasts from birth to death.",
      "[[cumulative-advantage|Cumulative advantage and disadvantage]] explains why gaps often widen with age. Robert Merton (1968) described a “Matthew effect” in science: well-known scientists get more credit for similar work. Dale Dannefer (2003) applied the idea to ageing: early advantages in schooling, work and health compound into pensions, savings and longer healthy lives, while early setbacks also pile up.",
      "Matilda White Riley and colleagues (1994) described **structural lag**: lives have changed faster than institutions, which still assume a three-stage life of education, work and retirement. Peter Laslett’s *A Fresh Map of Life* (1989) named a “third age” of active later life after paid work and before frailty.",
      {table:[["Effect","Meaning","Example"],["Age effect","Changes linked to growing older","Hearing tends to decline with age"],["Period effect","Changes that hit everyone at one time","A pandemic changes everyone’s work"],["Cohort effect","Differences between people born at different times","People who grew up online use it differently"]]}
     ],
     pro:[
      "Life-course research relies on **longitudinal** data: following the same people over time ([[cohort-study|cohort studies]] and panels). A family of comparable ageing surveys allows cross-country work: the Health and Retirement Study (United States), ELSA (England), SHARE (Europe and Israel), JSTAR (Japan), KLoSA (Republic of Korea), CHARLS (China) and LASI (India).",
      "A known difficulty is the **age–period–cohort problem**: in any one dataset, age, period and birth cohort are linked (cohort = period − age), so their separate effects cannot be identified without extra assumptions. Good studies state their assumptions.",
      "Critiques: early life-course models were built on mid-20th-century Western lives with standard sequences of school, stable work, marriage and retirement. Researchers now study **de-standardised** lives, informal work, migration across borders and care-giving, which are the norm for much of the world. Feminist scholars stress that women’s life courses are shaped by unpaid care that standard models treat as “gaps”.",
      {tip:"When a study compares “the old” and “the young” at one moment, ask whether the difference comes from age, from the period, or from the different histories of two cohorts."}
     ]
    },
    related:["population-ageing-dependency","care-and-pensions","ageism","agents-of-socialization","social-stratification"],
    read:[{book:"soc", where:"Section 13.2 “The Process of Aging” (LibreTexts 13.3) and Section 5.4 “Socialization Across the Life Course”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) 13.3 The Process of Aging", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/13%3A_Aging_and_the_Elderly/13.03%3A_The_Process_of_Aging"},{t:"LibreTexts (OpenStax 3e) 13.2 Who Are the Elderly? Aging in Society", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/13%3A_Aging_and_the_Elderly/13.02%3A_Who_Are_the_Elderly_Aging_in_Society"}], checked:"2026-11"},

   {id:"population-ageing-dependency", title:"Population ageing and dependency ratios", aka:["ageing population","old-age dependency ratio","total dependency ratio","super-aged society","demographic ageing"], tags:["sociology","demography","ageing"],
    summary:"Why populations age, where ageing is fastest, and how to calculate and read dependency ratios with care (figures as of November 2026).",
    levels:{
     starter:[
      "[[population-ageing|Population ageing]] is a rise in the share of older people. It has two main causes: fewer births and longer lives. Migration can speed it up (young people leave) or slow it down (young people arrive).",
      "It is happening almost everywhere. The UN’s *World Population Prospects 2024* projects that by the late 2070s people aged 65+ (about 2.2 billion) will outnumber children under 18, and that by the mid-2030s people aged 80+ will outnumber babies under one. Global life expectancy at birth was 73.3 years in 2024.",
      "Japan is the best-known case: its 2025 census counted **29.4%** of people aged 65 or over, a record.",
      {key:"Ageing is mostly the result of success: fewer children die, and adults live longer."}
     ],
     builder:[
      "A [[dependency-ratio|dependency ratio]] compares “dependent” age groups with the “working-age” group, per 100:",
      {list:[
        "[[old-age-dependency-ratio|Old-age]]: people aged 65+ ÷ people aged 15–64 × 100",
        "Child (young-age): people aged 0–14 ÷ people aged 15–64 × 100",
        "Total: the sum of the two"
      ]},
      {table:[["Place (2024)","Aged 65+","Old-age ratio"],["World","10.2%","15.7"],["Japan","29.8%","50.7"],["European Union","22.0%","34.6"],["Republic of Korea","19.3%","27.5"],["China","14.7%","21.2"],["Latin America and the Caribbean","9.8%","14.5"],["Sub-Saharan Africa","3.2%","5.7"]]},
      "Figures: World Bank, based on UN *World Population Prospects 2024*. A common convention calls a society **aged** when 14% are 65+ and **super-aged** at 20%; the Republic of Korea’s resident register passed 20% in December 2024.",
      "Sub-Saharan Africa’s child dependency ratio was about 73 in 2024 and Japan’s about 19, so their total ratios (about 78 and 70) were similar for opposite reasons."
     ],
     pro:[
      "Age-based ratios assume everyone 15–64 supports everyone else. Better measures exist. **Economic dependency** or **support ratios** count workers and consumers; the National Transfer Accounts project (Ronald Lee, Andrew Mason and others) estimates how much each age group earns and consumes. Warren Sanderson and Sergei Scherbov (2010) proposed **prospective age**: counting people as old when their remaining life expectancy falls below a threshold (such as 15 years), so that ageing measures adjust as health improves.",
      "Read projections carefully. The UN revises *World Population Prospects* every two years and publishes variants (low, medium, high fertility). Census figures, register figures and modelled estimates differ: Japan’s 2025 census gives 29.4% aged 65+, the World Bank’s 2024 estimate 29.8%.",
      "Language matters too. Metaphors such as “silver tsunami” or “demographic time bomb” present older people as a disaster. Sociologists prefer to name the specific pressures (pension finance, care workforce, rural services) and the choices available (employment, productivity, migration, care systems).",
      {tip:"With any ageing statistic, check the source, the year, the age cut-offs and whether it is a census count, a register count or a model estimate."}
     ]
    },
    related:["demographic-transition","demography","japan-population-change","care-and-pensions","life-course"],
    read:[{book:"soc", where:"Section 13.1 “Who Are the Elderly? Aging in Society” (LibreTexts 13.2) and Section 20.1 “Demography and Population”"},{book:"sbj", where:"Chapter 2 “Population”"}],
    sources:[{t:"UN DESA: World Population Prospects 2024, Key Messages", url:"https://population.un.org/WPP/Publications/Files/WPP2024_Key-Messages.pdf"},{t:"World Bank: Age dependency ratio, old (% of working-age population)", url:"https://data.worldbank.org/indicator/SP.POP.DPND.OL"},{t:"Statistics Bureau of Japan: 2025 Population Census basic results (in Japanese, 29 September 2026)", url:"https://www.stat.go.jp/info/mail/pdf/20260929_no1905.pdf"}], checked:"2026-11"},

   {id:"care-and-pensions", title:"Care and pensions in ageing societies", aka:["long-term care","long-term care insurance","pensions","social pension","filial piety","care diamond"], tags:["sociology","ageing","welfare","institutions"],
    summary:"How families, markets, states and communities share care and income in later life, with examples from Japan, East Asia, Europe, Latin America and Africa (as of November 2026).",
    levels:{
     starter:[
      "Later life raises two big questions: **who cares** for people who need help with daily life, and **who pays** for living when people stop working?",
      "Every society shares these jobs between four providers: **families** (mostly women, often unpaid), the **state** (public services and pensions), **markets** (paid carers, private pensions) and **communities** (neighbours, religious and voluntary groups). Shahra Razavi (UNRISD, 2007) drew this as a **care diamond**.",
      "The balance differs a lot. Japan pays for much care through public [[long-term-care|long-term care]] insurance; in many countries families do almost all of it; in others, migrant care workers fill the gap.",
      {key:"Care and pensions are institutions. They decide whether long life is lived in security or in hardship."}
     ],
     builder:[
      {table:[["Model","Example","Notes"],["Social insurance for care","Germany (1995), Japan (2000), Republic of Korea (2008)","Contributions fund assessed care at home or in homes"],["Family-based care with legal duties","China (revised law in force 2013), Singapore (Maintenance of Parents Act, 1995)","Builds on [[filial-piety|filial piety]]; states add community services"],["Mostly family care","Much of sub-Saharan Africa and South Asia","Older people are also carers, for example of grandchildren"]]},
      "Pensions come in three main designs. [[pay-as-you-go|Pay-as-you-go]] schemes use today’s contributions to pay today’s pensioners. **Funded** schemes pay out what was saved and earned. [[social-pension|Social pensions]] are paid from taxes whatever a person’s work history, such as Bolivia’s Renta Dignidad (2008), South Africa’s older persons’ grant and Kenya’s Inua Jamii for people aged 70+.",
      "Retirement ages are rising in many places. China began raising its statutory retirement ages on 1 January 2025, over 15 years: men from 60 to 63, women from 50 or 55 to 55 or 58. Japan lets people start the basic pension at any age from 60 to 75."
     ],
     pro:[
      "Pension debates turn on **adequacy** (enough to live on), **coverage** (who is included) and **sustainability** (who pays). The World Bank’s *Averting the Old Age Crisis* (1994) promoted multi-pillar systems with funded individual accounts; Chile had introduced such accounts in 1981 and in 2008 added a tax-funded solidarity pension after coverage gaps became clear. The ILO’s Social Protection Floors Recommendation (No. 202, 2012) calls for basic income security in old age for all. The ILO estimates that 52.4% of the world’s people are covered by at least one social protection benefit (*World Social Protection Report 2024–26*).",
      "Care debates turn on the **care workforce**: low pay, migrant labour and global care chains ({{gender-and-migration}}), and on technology: Japan’s trials of care robots and sensors are welcomed by some as relief for staff and criticised by others as a substitute for human contact.",
      "Care can also go wrong. WHO estimates that around one in six people aged 60+ experienced some form of abuse in community settings during the past year (fact sheet, June 2024). OpenStax (13.3) discusses elder abuse alongside poverty and ageism.",
      {tip:"When comparing countries, ask who provides care, who pays, who is left out (often informal workers and women), and what happens when families are small or far away."}
     ]
    },
    related:["population-ageing-dependency","unpaid-care-work","japan-population-change","japan-immigration-policy","work-globalization","ageism"],
    read:[{book:"sbj", where:"Chapter 15 “Social Security, Health Care, and Public Hygiene”"},{book:"soc", where:"Section 13.3 “Challenges Facing the Elderly” (LibreTexts 13.4)"}],
    sources:[{t:"ILO: World Social Protection Report 2024–26 in figures", url:"https://www.ilo.org/resource/article/world-social-protection-report-2024-26-figures"},{t:"China Daily: China to gradually raise retirement age (13 September 2024)", url:"https://www.chinadaily.com.cn/a/202409/13/WS66e3deada3103711928a7df9.html"},{t:"WHO fact sheet: Abuse of older people", url:"https://www.who.int/news-room/fact-sheets/detail/abuse-of-older-people"}], checked:"2026-11"},

   {id:"ageism", title:"Ageism and theories of ageing", aka:["age discrimination","disengagement theory","activity theory","continuity theory","age stratification","gerotranscendence"], tags:["sociology","ageing","inequality","theory"],
    summary:"Stereotyping and discrimination based on age, and the main sociological theories of ageing with their critiques.",
    levels:{
     starter:[
      "[[ageism|Ageism]] is stereotyping (how we think), prejudice (how we feel) and discrimination (how we act) based on age. The US psychiatrist Robert Butler coined the word in the late 1960s.",
      "The World Health Organization says half the world’s population is ageist against older people. Ageism can be **institutional** (rules that limit jobs or care by age), **interpersonal** (patronising or dismissive talk) or **self-directed** (believing stereotypes about yourself, such as “I’m too old to learn”). It also targets young people.",
      "WHO’s three strategies against it: policy and law, education, and intergenerational contact.",
      {key:"Age is a real difference; ageism is treating people as a category instead of as individuals."}
     ],
     builder:[
      {table:[["Lens","Theory","Critique"],["Functionalism","[[disengagement-theory|Disengagement]] (Cumming and Henry, 1961)","Many older people don’t want to withdraw (Hochschild, 1975)"],["Functionalism","[[activity-theory|Activity]] (Havighurst, 1961); continuity (Atchley)","Assumes health and money to stay active"],["Conflict","[[age-stratification|Age stratification]] (Riley, Johnson and Foner, 1972); modernization (Cowgill and Holmes, 1972); exchange (Dowd, 1975)","Modernization is too simple: status varies by class, gender and policy"],["Symbolic interactionism","Subculture of ageing (Rose, 1962); selective optimization with compensation (Baltes and Baltes, 1990); gerotranscendence (Tornstam, 2005)","Can overlook pensions, ageism and other structures"]]},
      "Feminist scholars add gender: Susan Sontag’s “double standard of aging” (1972) noted that women are judged old earlier, and women’s longer lives and lower lifetime earnings make old-age poverty more common among women in many countries."
     ],
     pro:[
      "Policy ideals have their own debates. John Rowe and Robert Kahn’s **successful ageing** model (1987, 1997) stressed avoiding disease, keeping function and staying engaged; critics argued it can blame people for illness and ignore inequality. WHO’s **active ageing** framework (2002) and the UN Decade of Healthy Ageing (2021–2030) stress the environments and services that let people keep doing what they value.",
      "Law against age discrimination in work exists in many places, for example the US Age Discrimination in Employment Act (1967) and the EU’s Employment Equality Directive (2000), which covers age. Researchers still find age bias in hiring through field experiments that send matched applications differing only in age.",
      "Ageism intersects with other inequalities: an older migrant woman with a disability can face barriers that none of these categories explains alone (see {{feminist-theory|intersectionality}}).",
      {tip:"Check your wording: “older people” or “older adults” is preferred over “the elderly” in many style guides, and describing a person by age only when it matters avoids stereotyping."}
     ]
    },
    related:["life-course","care-and-pensions","prejudice-discrimination","feminist-theory","population-ageing-dependency"],
    read:[{book:"soc", where:"Section 13.3 “Challenges Facing the Elderly” and Section 13.4 “Theoretical Perspectives on Aging” (LibreTexts 13.4–13.5)"}],
    sources:[{t:"WHO Q&A: Ageing: Ageism", url:"https://www.who.int/news-room/questions-and-answers/item/ageing-ageism"},{t:"LibreTexts (OpenStax 3e) 13.5 Theoretical Perspectives on Aging", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/13%3A_Aging_and_the_Elderly/13.05%3A_Theoretical_Perspectives_on_Aging"},{t:"LibreTexts (OpenStax 3e) 13.4 Challenges Facing the Elderly", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/13%3A_Aging_and_the_Elderly/13.04%3A_Challenges_Facing_the_Elderly"}], checked:"2026-11"},

   {id:"algorithms-society", title:"Algorithms and AI as social systems", aka:["sociology of AI","sociology of algorithms","automated decision-making","feedback loops","algorithmic fairness"], tags:["sociology","technology","AI","inequality"],
    summary:"Why sociologists study algorithms and AI as systems made and used by people, how feedback loops and proxies create bias, and why fairness involves value choices.",
    levels:{
     starter:[
      "An algorithm is a set of steps that turns an input into an output. Many “AI” systems learn their steps from past data instead of being given every rule.",
      "Sociologists treat these systems as **social**, not just technical. People choose the goal, pick the data, set the thresholds and decide what happens to the people scored. So ask five questions: who designed it and for what goal, whose data, who is affected, who checks it, and who can contest it?",
      "A [[feedback-loop|feedback loop]] forms when a system’s decisions become the data it learns from next, so an early bias can grow.",
      {key:"An automated decision is still a human decision, made earlier, by someone else, at scale."}
     ],
     builder:[
      "Classic studies: Tarleton Gillespie (2014) on how algorithms define “relevance”; Nick Seaver (2017) on algorithms as culture; Cathy O’Neil’s *Weapons of Math Destruction* (2016); Virginia Eubanks’s *Automating Inequality* (2018); Safiya Umoja Noble’s *Algorithms of Oppression* (2018); Ruha Benjamin’s *Race After Technology* (2019).",
      {table:[["Case","Region","What it shows"],["Childcare benefits scandal (government resigned January 2021)","Netherlands","Risk scoring, nationality data and harsh rules combined; €2.75 million fine (December 2021)"],["“Robodebt” (2016–2019; Royal Commission 2023)","Australia","Income averaging created false debts and shifted the burden of proof"],["Exam grades by algorithm (2020)","England","Schools’ past results overrode individual pupils; the algorithm’s grades were dropped"],["Court risk scores (ProPublica, 2016)","United States","Different fairness measures gave opposite verdicts"],["Visa streaming tool (paused August 2020)","United Kingdom","A feedback loop through “adverse events” by nationality"]]},
      "Sources of bias include historical data, [[proxy-variable|proxies]], unrepresentative data and feedback loops ({{data-power}})."
     ],
     pro:[
      "**Fairness trade-offs.** Kleinberg, Mullainathan and Raghavan (2016) and Chouldechova (2017) showed that when groups have different base rates, a risk score generally cannot satisfy calibration (equal meaning of a score across groups) and equal false-positive and false-negative rates at once. Choosing among them is a normative choice that affected people should have a say in.",
      "**The case for algorithms.** Kleinberg and colleagues (2018, *Quarterly Journal of Economics*) estimated that a model could have reduced jailing in New York bail decisions without raising crime, because human judges are also inconsistent and biased. Many researchers therefore argue for **better-governed** algorithms, not none.",
      "**Governance.** The EU GDPR (Article 22) limits decisions based solely on automated processing that have legal or similarly significant effects. The EU AI Act classes uses in essential public services and benefits, employment, education, law enforcement and migration as high-risk ({{ai-governance}}). Common tools include impact assessments, model documentation, per-group audits, human review and appeal.",
      "**AI literacy across the Academy.** This entry connects with checking chatbot answers ({{ai-chatbot-accuracy}}), bias in data ({{data-power}}) and AI governance ({{ai-governance}}): together they cover UNESCO’s themes of a human-centred mindset, ethics, and how AI systems are designed.",
      {tip:"Ask for the error rates **by group** and the **base rate** before believing any claim that a system is “95% accurate”."}
     ]
    },
    related:["data-power","ai-governance","media-technology","surveillance-society","border-technologies","platform-labour"],
    read:[{book:"datafem", where:"Chapter 1, “The Power Chapter”"},{book:"soc", where:"Section 8.4 “Theoretical Perspectives on Media and Technology”"}],
    sources:[{t:"UK Human Rights Blog: Government scraps immigration “streaming tool” before judicial review (6 August 2020)", url:"https://ukhumanrightsblog.com/2020/08/06/government-scraps-immigration-streaming-tool-before-judicial-review"},{t:"IAPP: Dutch DPA fines tax authority €2.75M (December 2021)", url:"https://iapp.org/news/a/dutch-dpa-fines-tax-authority-2-75m-euros"},{t:"Prime Minister of Australia: Final report of the Royal Commission into the Robodebt Scheme (7 July 2023)", url:"https://www.pm.gov.au/media/final-report-royal-commission-robodebt-scheme"}], checked:"2026-11"},

   {id:"platform-labour", title:"Platform labour and algorithmic management", aka:["gig economy","platform work","gig work","ghost work","algorithmic management","ILO Convention No. 193","Platform Work Directive"], tags:["sociology","work","technology","AI"],
    summary:"How digital platforms organise and manage work, the debate over flexibility and precarity, and the new EU and ILO rules (as of November 2026).",
    levels:{
     starter:[
      "[[platform-work|Platform work]] is paid work found and organised through an app or website: ride-hailing, food delivery, cleaning, care, and online tasks such as translation, design or labelling data for AI.",
      "Instead of a human boss, an app often assigns tasks, sets the price, tracks speed and ratings, and can suspend a worker. This is [[algorithmic-management|algorithmic management]].",
      "Platforms and many workers value the **flexibility** to choose hours and the easy entry. Many workers and researchers also report **precarity**: unpredictable pay, no sick pay or pension, and decisions no one explains.",
      {key:"The big question is who carries the risks of the work: the platform, the worker or the state."}
     ],
     builder:[
      "Mary Gray and Siddharth Suri’s *Ghost Work* (2019) showed how much “automated” technology depends on hidden human workers who label, check and moderate content: [[ghost-work|ghost work]]. Alex Rosenblat and Luke Stark (2016) described **information asymmetries** between Uber’s app and its drivers.",
      "Workers’ legal status is disputed in many countries. The UK Supreme Court ruled in February 2021 that Uber drivers were “workers” entitled to minimum wage and holiday pay. Other courts and laws have reached different conclusions, and many platform workers worldwide work informally ({{work-globalization}}).",
      {table:[["Rule","Date","Main points"],["EU Platform Work Directive","Adopted 2024; to apply by 2 December 2026","Presumption of employment where facts show control; human oversight of automated monitoring and decisions"],["ILO Convention No. 193, Decent Work in the Platform Economy","Adopted 12 June 2026 (406 for, 8 against, 36 abstentions)","Rights at work for platform workers whatever their status; transparency on automated systems; human review of decisions such as deactivation"]]}
     ],
     pro:[
      "Positions in the ILO negotiations: workers’ representatives and most governments pushed for stronger protections; employers’ representatives and a few governments argued for more flexible, less prescriptive rules (Human Rights Watch’s account). A planned Recommendation with detailed guidance was not finished in time. A convention binds only states that ratify it, so its effect depends on ratification and national law.",
      "Research themes: platform work as an entry route for migrants (often with fewer alternatives); gender differences in care and domestic platforms; geographic arbitrage in online work, where workers in lower-income countries compete for global tasks; and collective action, from WhatsApp groups of drivers to new unions and strikes.",
      "Lenses: functionalists may stress matching supply and demand efficiently; conflict theorists stress control and the shifting of risk onto workers; interactionists study how ratings shape workers’ emotional labour and self-presentation.",
      {tip:"When you read a statistic about “the gig economy”, check what it counts: main jobs or side income, location-based or online work, one country or many."}
     ]
    },
    related:["work-globalization","algorithms-society","social-movements","gender-and-migration"],
    read:[{book:"soc", where:"Section 18.2 “Globalization and the Economy” and Section 18.3 “Work in the United States” (automation)"}],
    sources:[{t:"ILO: International Labour Conference ends with adoption of first Convention on decent work in the platform economy (June 2026)", url:"https://www.ilo.org/resource/news/ilc/ilc114/international-labour-conference-ends-adoption-first-convention-decent-work"},{t:"Human Rights Watch: ILO adopts landmark treaty on gig work (12 June 2026)", url:"https://www.hrw.org/news/2026/06/12/ilo-adopts-landmark-treaty-on-gig-work"},{t:"EUR-Lex: Directive (EU) 2024/2831 on improving working conditions in platform work", url:"https://eur-lex.europa.eu/eli/dir/2024/2831/oj"}], checked:"2026-11"},

   {id:"surveillance-society", title:"Surveillance in sociology", aka:["panopticon","social sorting","surveillance capitalism","surveillance studies","data double"], tags:["sociology","technology","power","privacy"],
    summary:"How sociologists explain surveillance, from Foucault’s panopticon to social sorting and surveillance capitalism, with the main critiques.",
    levels:{
     starter:[
      "Surveillance means collecting and using personal data to manage or influence people. It ranges from a teacher taking a register to cameras, loyalty cards, phone tracking and border databases.",
      "Sociologists ask who watches whom, for what purpose, with what effects, and who can refuse.",
      "A [[panopticon]] is a prison design by Jeremy Bentham in which guards in a central tower can see every cell, but prisoners can’t tell when they are watched. Michel Foucault used it as a picture of modern discipline: people behave as if always watched.",
      {key:"Surveillance doesn’t only watch people; it sorts them into categories that are treated differently."}
     ],
     builder:[
      {table:[["Thinker","Work","Idea"],["Michel Foucault","*Discipline and Punish* (1975)","Institutions produce self-discipline through possible visibility"],["David Lyon","*Surveillance as Social Sorting* (2003)","Data sort people into groups with different chances and treatment"],["Shoshana Zuboff","*The Age of Surveillance Capitalism* (2019)","Firms turn behavioural data into predictions sold for profit"],["Simone Browne","*Dark Matters* (2015)","Surveillance of Black people runs from slavery to modern biometrics"]]},
      "Lenses: functionalism stresses safety and efficiency; conflict theory stresses power and [[social-sorting|social sorting]]; symbolic interactionism studies how people adapt, perform for cameras, resist or “watch back”; feminist theory studies who is watched at home, at work and online."
     ],
     pro:[
      "Critiques: Evgeny Morozov argued that [[surveillance-capitalism|surveillance capitalism]] is better seen as ordinary capitalism than as a new system; others argue that a focus on companies underplays state surveillance, and that the panopticon model misses today’s voluntary, participatory sharing on social media.",
      "Kevin Haggerty and Richard Ericson (2000) described a “surveillant assemblage” that combines many data flows into **data doubles**: profiles that stand in for us in decisions about credit, travel or policing.",
      "Law and rights: human rights bodies ask whether surveillance is lawful, necessary and proportionate, with oversight ({{digital-rights-surveillance}}). The EU AI Act prohibits some uses outright, such as most real-time remote biometric identification in public places for policing, with narrow exceptions ({{ai-governance}}).",
      {tip:"Describe surveillance neutrally: name the purpose claimed, the data collected, the safeguards and the people affected, before judging it."}
     ]
    },
    related:["digital-rights-surveillance","algorithms-society","border-technologies","media-technology","conflict-theory"],
    read:[{book:"soc", where:"Section 8.4 “Theoretical Perspectives on Media and Technology”"}],
    sources:[{t:"LibreTexts (OpenStax 3e) Theoretical Perspectives on Media and Technology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/08%3A_Media_and_Technology/8.05%3A_Theoretical_Perspectives_on_Media_and_Technology"}], checked:"2026-11"},

   {id:"border-technologies", title:"Border technologies: biometrics, travel authorisations and risk scoring", aka:["digital borders","smart borders","Entry/Exit System","EES","ETIAS","Eurodac","ETA","ESTA","e-visa","biometric border"], tags:["migration studies","borders","technology","AI"],
    summary:"The databases, online permissions and risk tools that move border control before, at and after the frontier, with the main arguments for and against them (as of November 2026).",
    levels:{
     starter:[
      "Border control no longer happens only at the frontier. Before travel, many people need an **e-visa** or an electronic [[travel-authorisation|travel authorisation]]; airlines check permission at check-in; at the border, fingerprints and faces may be recorded; exit dates are logged.",
      "[[biometrics|Biometrics]] are body measurements such as fingerprints, face images and iris patterns used to identify people. [[risk-scoring|Risk scoring]] ranks people for extra checks.",
      "Supporters say these tools make borders faster and safer. Critics worry about discrimination, privacy, errors and people’s ability to challenge decisions.",
      {key:"The border has moved: it now starts on a screen far from the frontier (Ayelet Shachar’s “shifting border”)."}
     ],
     builder:[
      {table:[["System","What","Status (November 2026)"],["EU Entry/Exit System (EES)","Records non-EU short-stay visitors’ passport data, fingerprints, face image and entry and exit dates; replaces passport stamping","Rolled out from October 2025; fully operational from 10 April 2026"],["Eurodac (EU)","Biometric database of asylum applicants and people apprehended crossing irregularly; set up under a 2000 regulation","Revised under the Pact on Migration and Asylum, applying from June 2026: adds face images and lowers the age from 14 to 6"],["ETIAS (EU)","Online travel authorisation for visa-exempt visitors, screened against databases and rules","Planned; not yet operating when checked. EU governments expect 2027; no exact date set"],["Travel authorisations elsewhere","Australia’s ETA (1996), the US ESTA, the UK ETA (£20)","In operation"],["UNHCR biometric registration","Identifies refugees for protection and aid","In use in many operations"]]},
      "Within the EU AI Act, many AI uses in migration, asylum and border control are high-risk; AI systems that are components of the EU’s large-scale border and migration databases, if in use before 2 August 2027, have until 31 December 2030 to comply."
     ],
     pro:[
      "**Arguments for**, made by governments, the European Commission and border agencies: faster crossings for most travellers; detection of identity fraud, document fraud and overstays; better data for planning; officers freed to focus on real risks. UNHCR argues that biometric registration protects refugees’ identities and makes aid delivery fairer.",
      "**Arguments against or for caution**: Tendayi Achiume’s 2020 report as UN Special Rapporteur on racism warned that digital border technologies can reproduce racial and xenophobic discrimination and treat migrants as testing grounds. Petra Molnar (*The Walls Have Eyes*, 2024) documents surveillance on migration routes. Human Rights Watch (2021) criticised the sharing of Rohingya refugees’ data with Myanmar; UNHCR said consent had been sought. Scholars such as Dennis Broeders (2007) and Louise Amoore (2006) analysed “digital” and “biometric” borders as a form of [[securitization|securitisation]].",
      "**Base rates**: when real threats are rare, even an accurate screening tool flags mostly innocent people, so the cost of false alarms falls on many travellers.",
      "**Common ground**: impact assessments before deployment, independent audits with error rates by group, data minimisation, clear retention limits, and a real route to appeal.",
      {tip:"Use official sites only: lookalike websites often charge extra for e-visas and travel authorisations."}
     ]
    },
    related:["borders-and-sovereignty","externalisation-and-detention","refugees-and-displacement","surveillance-society","algorithms-society","ai-governance"],
    read:[{book:"imis", where:"Chapter 4 “Migration Infrastructures: How Do People Migrate?” (Düvell and Preiss)"},{book:"imis", where:"Chapter 20 “Migration Governance”"}],
    sources:[{t:"European Commission: The Entry/Exit System fully operational (10 April 2026)", url:"https://commission.europa.eu/news-and-media/news/more-secure-efficient-and-convenient-way-travelling-non-eu-nationals-2026-04-10_en"},{t:"European Parliament: Eurodac – better identification of asylum seekers and irregular migrants (April 2024)", url:"https://www.europarl.europa.eu/news/en/press-room/20240410IPR20334"},{t:"Government of Poland: Introduction of ETIAS in 2027 (24 September 2026)", url:"https://www.gov.pl/web/belgium/introduction-of-etias-in-2027-upcoming-changes-to-travel-requirements-for-the-schengen-area-and-cyprus"},{t:"UN Digital Library: Report of the Special Rapporteur on racism, digital technologies in border and immigration enforcement (A/75/590, 2020)", url:"https://digitallibrary.un.org/record/3893019"}], checked:"2026-11"}
  ],
  terms:[
   {id:"social-institution", term:"Social institution", def:"A lasting pattern of roles, rules and organizations that a society builds to meet a basic need. Examples are the family, education, religion, government, the economy, health care and the media.", codex:"social-institutions"},
   {id:"family", term:"Family", def:"A socially recognized group joined by blood, marriage or adoption that shares emotional ties and acts as an economic unit. Who counts as family is set by law and custom.", codex:"family"},
   {id:"nuclear-family", term:"Nuclear family", def:"Parents and their children living in one household, without other relatives.", codex:"family"},
   {id:"extended-family", term:"Extended family", def:"A household that includes at least one parent and child plus other relatives, such as grandparents, aunts, uncles or cousins.", codex:"family"},
   {id:"kinship", term:"Kinship", def:"A person’s traceable ancestry, by blood, marriage or adoption. Societies have different rules for tracing it.", codex:"family"},
   {id:"patrilineal", term:"Patrilineal descent", def:"Tracing kinship, names and inheritance through the father’s line only.", codex:"family"},
   {id:"matrilineal", term:"Matrilineal descent", def:"Tracing kinship, names and inheritance through the mother’s line only, as among the Minangkabau of Indonesia.", codex:"family"},
   {id:"monogamy", term:"Monogamy", def:"Being married to only one person at a time.", codex:"family"},
   {id:"polygamy", term:"Polygamy", def:"Being married to more than one person at a time. Its two forms are polygyny and polyandry.", codex:"family"},
   {id:"polygyny", term:"Polygyny", def:"A form of marriage in which one man has more than one wife at the same time. The more common form of polygamy.", codex:"family"},
   {id:"polyandry", term:"Polyandry", def:"A form of marriage in which one woman has more than one husband at the same time. Rare; best known from parts of the Himalayas.", codex:"family"},
   {id:"hidden-curriculum", term:"Hidden curriculum", def:"The unofficial lessons pupils learn from how school is organized, such as obeying bells, waiting their turn and accepting authority.", codex:"education"},
   {id:"credentialism", term:"Credentialism", def:"Relying heavily on degrees and certificates as proof that someone can do a job. Required qualifications can then rise faster than the real skills needed.", codex:"education"},
   {id:"tracking", term:"Tracking", def:"Placing pupils in different groups, classes or schools by measured ability (also called streaming or setting). Critics say it can lock in early inequalities.", codex:"education"},
   {id:"cultural-capital", term:"Cultural capital", def:"Familiarity with the knowledge, speech, tastes and habits a society’s elite values and its schools reward. Pierre Bourdieu’s concept.", codex:"education"},
   {id:"religion", term:"Religion", def:"A system of beliefs, values and practices concerning what people hold to be sacred or spiritually significant.", codex:"religion"},
   {id:"sacred", term:"Sacred", def:"Set apart and treated with awe, reverence and special rules. For Durkheim, a status a community gives to something.", codex:"religion"},
   {id:"profane", term:"Profane", def:"Ordinary and everyday; the opposite of sacred in Durkheim’s theory. The same object can be profane in one use and sacred in another.", codex:"religion"},
   {id:"secularization", term:"Secularization", def:"The idea that religion loses social importance as societies modernize: through declining belief and practice, separation from other institutions, or becoming private. A debated thesis.", codex:"secularization"},
   {id:"power", term:"Power", def:"The ability to exercise one’s will over others, even against resistance (Max Weber).", codex:"power-authority"},
   {id:"authority", term:"Authority", def:"Power that people accept because it comes from a source they see as legitimate.", codex:"power-authority"},
   {id:"traditional-authority", term:"Traditional authority", def:"Power accepted because of long-standing custom or inheritance, such as a hereditary monarch or customary chief.", codex:"power-authority"},
   {id:"rational-legal-authority", term:"Rational-legal authority", def:"Power accepted because it rests on laws, written rules and procedures, such as an elected official or a judge.", codex:"power-authority"},
   {id:"charismatic-authority", term:"Charismatic authority", def:"Power accepted because followers believe a leader has exceptional personal qualities. Powerful but unstable.", codex:"power-authority"},
   {id:"democracy", term:"Democracy", def:"A form of government in which all citizens have an equal voice or vote in deciding policy, either directly or through elected representatives.", codex:"political-systems"},
   {id:"monarchy", term:"Monarchy", def:"Government by one person, usually by inheritance, who rules until death or abdication. In a constitutional monarchy the monarch’s power is limited by a constitution.", codex:"political-systems"},
   {id:"oligarchy", term:"Oligarchy", def:"A form of government in which power is held by a small elite group.", codex:"political-systems"},
   {id:"authoritarianism", term:"Authoritarianism", def:"Rule by a leader or small group who are not accountable to voters, with limits on opposition, free media and independent courts.", codex:"political-systems"},
   {id:"totalitarian", term:"Totalitarian", def:"Describes a government that tries to control nearly every part of citizens’ lives, including work, family, religion and belief.", codex:"political-systems"},
   {id:"capitalism", term:"Capitalism", def:"An economic system based on private ownership of businesses and production for profit, with prices set mainly by markets.", codex:"economic-systems"},
   {id:"socialism", term:"Socialism", def:"An economic system in which the state or community owns the means of production, aiming to meet needs and share wealth more equally.", codex:"economic-systems"},
   {id:"mixed-economy", term:"Mixed economy", def:"An economy combining private markets with public ownership, regulation and welfare. Almost every country today has one.", codex:"economic-systems"},
   {id:"informal-economy", term:"Informal economy", def:"Work not covered, or not fully covered, by contracts, labour law, social protection or tax registration. Usually legal, but unprotected.", codex:"work-globalization"},
   {id:"deindustrialization", term:"Deindustrialization", def:"The decline of manufacturing jobs in a region or country, often with wide effects on families, towns and health.", codex:"work-globalization"},
   {id:"automation", term:"Automation", def:"Replacing human work with machines and software.", codex:"work-globalization"},
   {id:"social-epidemiology", term:"Social epidemiology", def:"The study of the causes and distribution of diseases across social groups.", codex:"health-sociology"},
   {id:"social-determinants", term:"Social determinants of health", def:"“The conditions in which people are born, grow, work, live and age” (WHO), such as income, education, housing, food and working conditions.", codex:"health-sociology"},
   {id:"medicalization", term:"Medicalization", def:"The process by which things once seen as bad behaviour or a normal part of life are redefined as illnesses needing medical treatment.", codex:"health-sociology"},
   {id:"sick-role", term:"Sick role", def:"Talcott Parsons’s idea of the expectations placed on sick people. They are excused from duties and not blamed, but expected to try to get well and seek medical help.", codex:"health-sociology"},
   {id:"demography", term:"Demography", def:"The study of population: its size, composition and change through births, deaths and migration.", codex:"demography"},
   {id:"crude-rate", term:"Crude rate", def:"The number of events (such as births or deaths) in a year per 1,000 people in the population: events ÷ population × 1,000. “Crude” because it ignores age structure.", codex:"demography"},
   {id:"fertility-rate", term:"Fertility rate", def:"A measure of the number of children born in a population. It is often given as births per 1,000 people per year (crude birth rate) or average children per woman (total fertility rate).", codex:"demography"},
   {id:"mortality-rate", term:"Mortality rate", def:"A measure of how many people in a population die, often as deaths per 1,000 people per year (crude death rate).", codex:"demography"},
   {id:"migration", term:"Migration", def:"The movement of people from one place to another to live, either within a country (internal) or across borders (international), voluntarily or by force.", codex:"demography"},
   {id:"push-pull", term:"Push and pull factors", def:"Conditions that drive people away from a place and attract them to another. Push factors include conflict or lack of jobs; pull factors include work or safety.", codex:"demography"},
   {id:"demographic-transition", term:"Demographic transition", def:"A model of how populations move from high birth and death rates to low ones as societies develop, with rapid growth in between.", codex:"demographic-transition"},
   {id:"malthusian-theory", term:"Malthusian theory", def:"Thomas Malthus’s 1798 argument that population grows faster than food, so famine, disease and war (or later marriage and fewer births) will hold it in check.", codex:"population-debates"},
   {id:"cornucopian-theory", term:"Cornucopian theory", def:"The view that human ingenuity will create the resources a growing population needs.", codex:"population-debates"},
   {id:"urbanization", term:"Urbanization", def:"The growth in the share of a population living in towns and cities. (OpenStax uses the word for the study of city life.)", codex:"urbanization"},
   {id:"suburbanization", term:"Suburbanization", def:"The growth of communities around a city’s edge, usually close enough for a daily commute.", codex:"urbanization"},
   {id:"gentrification", term:"Gentrification", def:"The arrival of middle- and upper-class residents and investment in a historically less wealthy area, often raising costs and displacing long-term residents. Coined by Ruth Glass in 1964.", codex:"urbanization"},
   {id:"environmental-sociology", term:"Environmental sociology", def:"The part of sociology that studies the relationship between people and the environment.", codex:"environmental-sociology"},
   {id:"environmental-racism", term:"Environmental racism", def:"The placing of a disproportionate share of environmental hazards, such as toxic waste and polluting industry, in communities of colour and low-income communities.", codex:"environmental-sociology"},
   {id:"digital-divide", term:"Digital divide", def:"Unequal access to, skills with and benefits from digital technology, along lines such as income, class, race, gender and geography.", codex:"digital-divide"},
   {id:"knowledge-gap", term:"Knowledge gap", def:"The gap in information that builds up when some groups grow up without access to technology.", codex:"digital-divide"},
   {id:"gatekeeping", term:"Gatekeeping", def:"The sorting process by which a huge number of possible messages is filtered and shaped into the few that reach the public. Editors, owners or algorithms do the sorting.", codex:"media-technology"},
   {id:"agenda-setting", term:"Agenda-setting", def:"The media’s influence on which issues people think are important: less what to think than what to think about.", codex:"media-technology"},
   {id:"media-consolidation", term:"Media consolidation", def:"The process by which fewer and fewer owners control most media outlets.", codex:"media-technology"},
   {id:"social-movement", term:"Social movement", def:"A purposeful, organized group working towards a shared social goal, or resisting a change.", codex:"social-movements"},
   {id:"resource-mobilization", term:"Resource mobilization", def:"A theory that explains a movement’s success by its ability to gather resources (money, time, skills, networks) and mobilize people.", codex:"social-movements"},
   {id:"framing", term:"Framing", def:"How a movement interprets an issue to win support: diagnostic (the problem and who’s to blame), prognostic (the solution) and motivational (the call to action).", codex:"social-movements"},
   {id:"new-social-movements", term:"New social movements", def:"Movements since the 1960s, such as environmental, peace and identity-based movements, that focus on culture, identity and quality of life more than economic class.", codex:"social-movements"},
   {id:"social-change", term:"Social change", def:"Change in society brought about by social movements and by outside forces such as technology, population shifts or the environment.", codex:"social-change"},
   {id:"modernization", term:"Modernization", def:"The process that increases specialization and differentiation in a society, often measured by technology and industry. Treating richer countries as the model carries bias.", codex:"social-change"},
   {id:"gerontology", term:"Gerontology", def:"The study of ageing and of the challenges people meet as they grow older. Social gerontology studies its social side.", codex:"life-course"},
   {id:"cohort", term:"Cohort", def:"A group of people who share a demographic trait, usually being born in the same years, so they meet historical events at the same ages.", codex:"life-course"},
   {id:"life-course-perspective", term:"Life-course perspective", def:"An approach that studies how lives unfold from birth to death within history and social structure, using ideas such as timing, linked lives and agency.", codex:"life-course"},
   {id:"cumulative-advantage", term:"Cumulative advantage and disadvantage", def:"The way early advantages or setbacks compound over a lifetime, so gaps between people often widen with age.", codex:"life-course"},
   {id:"dependency-ratio", term:"Dependency ratio", def:"The number of people in “dependent” age groups (usually 0–14 and 65+) per 100 people aged 15–64. OpenStax uses a labour-force version.", codex:"population-ageing-dependency"},
   {id:"old-age-dependency-ratio", term:"Old-age dependency ratio", def:"People aged 65 and over per 100 people aged 15–64.", codex:"population-ageing-dependency"},
   {id:"long-term-care", term:"Long-term care", def:"Help over a long period with everyday activities such as washing, dressing, eating or moving, given at home or in a care home, by family or by paid carers.", codex:"care-and-pensions"},
   {id:"filial-piety", term:"Filial piety", def:"Respect, obedience and care owed to one’s parents and ancestors, a value strongly associated with Confucian traditions in East Asia.", codex:"care-and-pensions"},
   {id:"pay-as-you-go", term:"Pay-as-you-go pension", def:"A pension system in which today’s workers’ contributions and taxes pay today’s pensioners, rather than each person’s own savings.", codex:"care-and-pensions"},
   {id:"social-pension", term:"Social pension", def:"A pension paid from taxes to older people whatever their work history (sometimes only to those with low incomes). Also called a non-contributory pension.", codex:"care-and-pensions"},
   {id:"ageism", term:"Ageism", def:"Stereotyping, prejudice and discrimination based on age, against older or younger people, by institutions, by other people or by oneself.", codex:"ageism"},
   {id:"disengagement-theory", term:"Disengagement theory", def:"A functionalist theory (Cumming and Henry, 1961) that older people naturally withdraw from social roles so that younger people can take them over. Widely criticised.", codex:"ageism"},
   {id:"activity-theory", term:"Activity theory", def:"The view (Havighurst, 1961) that older people who stay active and socially involved tend to be happier.", codex:"ageism"},
   {id:"age-stratification", term:"Age stratification theory", def:"A conflict-perspective theory (Riley, Johnson and Foner, 1972) that age groups, like classes, have unequal access to a society’s resources.", codex:"ageism"},
   {id:"feedback-loop", term:"Feedback loop", def:"When a system’s outputs become its future inputs, for example when a model’s decisions create the records it later learns from, so early biases can grow.", codex:"algorithms-society"},
   {id:"automated-decision", term:"Automated decision-making", def:"Decisions about people made by computer systems with little or no human involvement, such as scoring applications or flagging claims.", codex:"algorithms-society"},
   {id:"platform-work", term:"Platform work", def:"Paid work found and organised through a digital platform, such as ride-hailing, delivery, cleaning or online tasks. Also called gig work.", codex:"platform-labour"},
   {id:"ghost-work", term:"Ghost work", def:"Mary Gray and Siddharth Suri’s term (2019) for the hidden human labour, such as labelling and checking data, behind services that look automated.", codex:"platform-labour"},
   {id:"algorithmic-management", term:"Algorithmic management", def:"Using software to assign, monitor, rate and discipline workers, for example an app that sets prices and can suspend drivers.", codex:"platform-labour"},
   {id:"panopticon", term:"Panopticon", def:"Jeremy Bentham’s prison design in which inmates can always be seen but never know when; Foucault used it as a picture of modern self-discipline.", codex:"surveillance-society"},
   {id:"social-sorting", term:"Social sorting", def:"David Lyon’s idea that surveillance places people into categories, such as low- and high-risk, that bring different treatment and chances.", codex:"surveillance-society"},
   {id:"surveillance-capitalism", term:"Surveillance capitalism", def:"Shoshana Zuboff’s term (2019) for business models that turn data about people’s behaviour into predictions sold for profit. A debated idea.", codex:"surveillance-society"},
   {id:"biometrics", term:"Biometrics", def:"Measurements of the body, such as fingerprints, face images or iris patterns, used to identify people automatically.", codex:"border-technologies"},
   {id:"travel-authorisation", term:"Electronic travel authorisation", def:"Online permission to travel that visa-exempt visitors must get before boarding, such as the UK ETA or the US ESTA. It doesn’t guarantee entry.", codex:"border-technologies"},
   {id:"risk-scoring", term:"Risk scoring", def:"Using rules or models to give people a score or category (for example red, amber, green) that decides who gets extra checks.", codex:"border-technologies"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u4-q01", lesson:"e2u4-l1", level:1, q:"What is a social institution?", options:[
     {t:"A lasting social pattern that meets a basic need", ok:true, why:"An institution is a lasting pattern of roles, rules and organizations that meets a basic social need. That’s the sociological definition: family, education, religion, government, the economy, health care and media are examples."},
     {t:"Any large public building, such as a hospital or university", why:"Buildings and organizations sit inside institutions, but an institution is the society-wide pattern, not a building."},
     {t:"A government department that runs public services", why:"Government is one institution, but institutions also include family, religion and the economy, which aren’t government departments."},
     {t:"A group of friends who meet regularly", why:"That’s a small group. Institutions are society-wide and outlast any particular members."}
   ]},
   {id:"e2u4-q02", lesson:"e2u4-l1", level:2, q:"When factory work replaced farm work in many countries, families got smaller and schooling got longer. What does this show about institutions?", options:[
     {t:"Institutions are interdependent: a change in the economy reshapes family and education.", ok:true, why:"Right. OpenStax uses industrialization as its main example of institutions changing each other."},
     {t:"Institutions never change once established.", why:"The example shows them changing a lot; institutions are durable, not fixed."},
     {t:"Families and schools are part of the economy, so they aren’t separate institutions.", why:"They are separate institutions that influence each other. Interdependence isn’t the same as being one institution."},
     {t:"Smaller families caused factories to be built.", why:"The causal direction in this example runs mainly from economic change to family size."}
   ]},
   {id:"e2u4-q03", lesson:"e2u4-l1", level:1, q:"In a matrilineal society, how is kinship traced?", options:[
     {t:"Through the mother’s line", ok:true, why:"Matrilineal descent traces kinship and inheritance through the mother, as among the Minangkabau of Indonesia."},
     {t:"Through the father’s line", why:"That’s patrilineal descent."},
     {t:"Through both parents equally", why:"That’s bilateral descent, common in Europe, the Americas and the Philippines."},
     {t:"Through the oldest living relative, whichever side they’re on", why:"Descent rules follow a line (mother’s, father’s or both), not the age of a relative."}
   ]},
   {id:"e2u4-q04", lesson:"e2u4-l1", level:2, q:"Lucía’s grandparents, her parents, her aunt and two cousins all live in one house and share expenses. What kind of family household is this?", options:[
     {t:"An extended family", ok:true, why:"Parents and children plus other relatives (grandparents, an aunt, cousins) in one household is an extended family."},
     {t:"A nuclear family", why:"A nuclear family is only parents and their children."},
     {t:"A polygamous family", why:"Polygamy is about having more than one spouse; nothing here says that."},
     {t:"A family of procreation", why:"That term refers to the family a person forms through partnership, not to a multi-generation household."}
   ]},
   {id:"e2u4-q05", lesson:"e2u4-l1", level:1, q:"Which is an example of a **latent** function of education?", options:[
     {t:"Students form friendships that become lifelong professional networks", ok:true, why:"Networks are an unintended side effect of schooling, so they’re a latent function."},
     {t:"Students learn to read and write", why:"Teaching literacy is a manifest, openly intended function."},
     {t:"Exams sort students into further study and jobs", why:"Social placement is a manifest function; it is openly intended."},
     {t:"Students learn their country’s history", why:"Cultural transmission is a manifest function."}
   ]},
   {id:"e2u4-q06", lesson:"e2u4-l1", level:3, q:"A job that was once done by school-leavers now requires a university degree, although the tasks haven’t changed. Which concept best explains this, and from which perspective?", options:[
     {t:"Credentialism, often analysed from a conflict perspective as competition for status", ok:true, why:"Rising credential requirements without changing skill needs is credentialism. Randall Collins argued it reflects status competition."},
     {t:"The hidden curriculum, from a functionalist perspective", why:"The hidden curriculum is about unofficial lessons learned at school, not employers’ requirements."},
     {t:"Tracking, from a feminist perspective", why:"Tracking is sorting pupils into ability groups within education, not degree requirements for jobs."},
     {t:"Cultural transmission, a manifest function of education", why:"Cultural transmission is passing on shared culture; it doesn’t explain rising job requirements."}
   ]},
   {id:"e2u4-q07", lesson:"e2u4-l1", level:2, q:"Which statement about the hidden curriculum is accurate?", options:[
     {t:"It is what pupils learn from how school is organized.", ok:true, why:"Examples are punctuality and obedience to authority. The hidden curriculum is the unofficial, unwritten set of lessons carried by school routines."},
     {t:"It is a secret syllabus that teachers keep from inspectors.", why:"It isn’t secret or deliberate; it’s built into everyday routines."},
     {t:"It only exists in private schools.", why:"All schools have one, though its content may differ between schools."},
     {t:"It is the optional extra-curricular activities a school offers.", why:"Clubs and sports are visible, chosen activities, not unofficial lessons carried by routines."}
   ]},
   {id:"e2u4-q08", lesson:"e2u4-l1", level:3, q:"Amara’s parents read to her every night and took her to museums. At school, teachers call her “naturally gifted”. A conflict theorist would most likely say:", options:[
     {t:"School rewards her cultural capital as if it were talent.", ok:true, why:"Her cultural capital from home is mistaken for natural talent, which passes advantage down. This is Bourdieu’s argument: schools reward the knowledge and habits of advantaged homes while appearing neutral."},
     {t:"Schools are fair, so her success proves her talent.", why:"That ignores how home resources shape what schools recognize as talent, which is the conflict theorist’s point."},
     {t:"Her success is a latent function of education.", why:"Latent functions are unintended effects for society, such as courtship; this doesn’t explain inequality between pupils."},
     {t:"The hidden curriculum harms only pupils from wealthy homes.", why:"Conflict theorists argue the opposite: school routines and expectations tend to favour already-advantaged pupils."}
   ]},
   {id:"e2u4-q09", lesson:"e2u4-l1", level:2, q:"How would a symbolic interactionist most likely study the family?", options:[
     {t:"By studying the meanings people give to family roles", ok:true, why:"They examine how people create and change the meanings of roles such as “good father” or “chosen family”. Interactionists treat family as a social construction whose meanings are negotiated in everyday life."},
     {t:"By listing the functions the family performs for society", why:"That’s the functionalist approach, for example Murdock’s four functions."},
     {t:"By measuring who holds economic power in the household", why:"Focusing on power and resources is the conflict approach."},
     {t:"By counting how many households are nuclear in a census", why:"Counting forms is useful demography, but it isn’t the interactionist focus on meaning."}
   ]},

   /* ---- Lesson 2 ---- */
   {id:"e2u4-q10", lesson:"e2u4-l2", level:1, q:"According to Durkheim, what is the difference between the sacred and the profane?", options:[
     {t:"The sacred is set apart and treated with awe; the profane is ordinary.", ok:true, why:"Sacred things also have special rules; profane things are everyday. That’s Durkheim’s distinction, from *The Elementary Forms of Religious Life* (1912)."},
     {t:"The sacred is good and the profane is evil.", why:"Profane means ordinary, not evil. It’s about status and treatment, not moral value."},
     {t:"The sacred is anything old; the profane is anything new.", why:"Age has nothing to do with it; communities give sacred status by how they treat things."},
     {t:"The sacred belongs to religious leaders; the profane belongs to ordinary people.", why:"Ordinary believers treat things as sacred too. The distinction is about objects and practices, not who owns them."}
   ]},
   {id:"e2u4-q11", lesson:"e2u4-l2", level:1, q:"Which work argued that certain Protestant beliefs encouraged the disciplined work and saving that helped capitalism develop?", options:[
     {t:"Max Weber, *The Protestant Ethic*", ok:true, why:"Weber published this argument in *The Protestant Ethic and the Spirit of Capitalism* (1904–05); it shows how ideas can shape economic life."},
     {t:"Émile Durkheim, *The Elementary Forms of Religious Life*", why:"Durkheim’s book is about the sacred, the profane and social cohesion."},
     {t:"Karl Marx’s 1844 critique of Hegel", why:"Marx argued religion comforts the oppressed while distracting them; he didn’t make Weber’s argument about Protestant work discipline."},
     {t:"C. Wright Mills, *The Power Elite*", why:"Mills’s book is about a ruling elite in the US, not religion and capitalism."}
   ]},
   {id:"e2u4-q12", lesson:"e2u4-l2", level:2, q:"Which of these is the best evidence **against** a simple, universal secularization thesis?", options:[
     {t:"Religion has stayed strong or grown in many regions.", ok:true, why:"An example is Pentecostal growth in Africa and Latin America. Persistence and growth in large parts of the world challenge the idea that modernization always brings religious decline."},
     {t:"Church attendance has fallen in many Western European countries.", why:"That supports secularization in those places; it’s evidence for the thesis, not against it."},
     {t:"Most hospitals and courts in Europe run on non-religious rules.", why:"That’s differentiation, one meaning of secularization, so it supports the thesis."},
     {t:"Some people say religion is less important to them than it was to their grandparents.", why:"That anecdote points towards secularization, not against it."}
   ]},
   {id:"e2u4-q13", lesson:"e2u4-l2", level:2, q:"A judge’s ruling is obeyed because the judge holds an office created by law and followed the correct legal procedure. Which type of authority is this?", options:[
     {t:"Rational-legal authority", ok:true, why:"Obedience to an office defined by laws and procedures is rational-legal authority."},
     {t:"Traditional authority", why:"Traditional authority rests on custom and inheritance, not written legal procedure."},
     {t:"Charismatic authority", why:"Charismatic authority rests on a leader’s personal qualities, not on the office."},
     {t:"Coercion, not authority", why:"People obey because they accept the office as legitimate, which is authority, not mere force."}
   ]},
   {id:"e2u4-q14", lesson:"e2u4-l2", level:3, q:"A religious movement grew rapidly around a gifted founder. After the founder’s death, members argued over leadership until they wrote rules for electing leaders and set up formal offices. What did Weber call this process?", options:[
     {t:"The routinization of charisma", ok:true, why:"Turning charismatic authority into rules or traditions so it can outlast the leader is routinization of charisma."},
     {t:"Secularization", why:"Secularization is religion losing social importance; this group is reorganizing, not declining."},
     {t:"Medicalization", why:"Medicalization is redefining things as medical problems; it has nothing to do with succession."},
     {t:"Traditional authority", why:"Traditional authority is one possible destination, but the process of transforming charisma is called routinization."}
   ]},
   {id:"e2u4-q15", lesson:"e2u4-l2", level:1, q:"What distinguishes a totalitarian government from other authoritarian governments?", options:[
     {t:"It tries to control nearly every part of life.", ok:true, why:"That includes work, family, religion and belief. Totalitarian rule aims at total control, extending into private life and thought."},
     {t:"It holds regular, competitive elections for leaders.", why:"Competitive elections are a feature of democracy, not totalitarianism."},
     {t:"It is always a monarchy.", why:"The classic totalitarian cases were one-party states, not monarchies."},
     {t:"It allows independent courts and media.", why:"Independent courts and media are exactly what totalitarian rule eliminates."}
   ]},
   {id:"e2u4-q16", lesson:"e2u4-l2", level:3, q:"In the invented country of Varenia, a king inherits the throne and opens parliament each year, but an elected parliament passes the laws and chooses the prime minister. How should a sociologist classify Varenia?", options:[
     {t:"A constitutional monarchy with a representative democracy", ok:true, why:"A symbolic hereditary monarch combined with an elected parliament that governs is a constitutional monarchy, and the parliament is representative democracy."},
     {t:"An absolute monarchy", why:"In an absolute monarchy the monarch makes the laws. Here the parliament does."},
     {t:"A totalitarian state", why:"Nothing suggests control of all areas of life; citizens elect parliament."},
     {t:"An oligarchy, because there’s a king", why:"Oligarchy is rule by a small elite. A symbolic king doesn’t make the system an oligarchy."}
   ]},
   {id:"e2u4-q17", lesson:"e2u4-l2", level:2, q:"How do sociologists approach the truth of religious beliefs?", options:[
     {t:"They set it aside and study what religions do.", ok:true, why:"They study what religions do and how they are organized. Sociology is about social causes, effects and organization; judging truth belongs to theology and philosophy."},
     {t:"They test religious claims scientifically to see which are true.", why:"That isn’t sociology’s task, and many religious claims can’t be tested that way."},
     {t:"They assume all religions are false.", why:"That would be taking a side. Sociologists aim to be neutral on truth claims."},
     {t:"They rank religions by how useful they are to society.", why:"Ranking faiths would be a value judgement. Sociologists describe functions and effects without ranking traditions."}
   ]},
   {id:"e2u4-q18", lesson:"e2u4-l2", level:3, q:"Dmitri reads: “Turnout is lower among young and poorer citizens.” Which conclusion follows most directly?", options:[
     {t:"Officials may hear older and better-off citizens more.", ok:true, why:"If officials hear these citizens’ concerns more, it can tilt policy. Unequal participation means unequal voice, a central concern in the sociology of politics."},
     {t:"Young and poorer citizens simply don’t care about politics.", why:"Lower turnout can reflect barriers, distrust or lack of time, not lack of interest. The statistic doesn’t show motives."},
     {t:"Making voting compulsory always fixes inequality.", why:"Compulsory voting raises turnout in places like Australia and Belgium, but it doesn’t remove all inequalities in political influence."},
     {t:"The country can’t be a democracy.", why:"Unequal turnout exists in many democracies. It raises questions about representation, not the basic classification."}
   ]},

   /* ---- Lesson 3 ---- */
   {id:"e2u4-q19", lesson:"e2u4-l3", level:1, q:"What is the main difference between capitalism and socialism as pure models?", options:[
     {t:"Who owns the means of production", ok:true, why:"Private owners hold it under capitalism, the state or community under socialism. Ownership, and with it the aim of production (profit versus shared needs), is the core distinction."},
     {t:"Capitalism uses money and socialism doesn’t", why:"Both systems have used money. The difference is ownership and how production is decided."},
     {t:"Socialism has no government and capitalism has a strong one", why:"Socialism usually gives the state a larger economic role, not none."},
     {t:"Capitalism exists only in rich countries", why:"Capitalist arrangements exist at every income level."}
   ]},
   {id:"e2u4-q20", lesson:"e2u4-l3", level:1, q:"About what share of the world’s employed people worked in the informal economy in 2024, according to ILO estimates?", options:[
     {t:"About 58%", ok:true, why:"ILO modelled estimates put informal employment at about 58% of world employment, much higher in low-income countries."},
     {t:"About 5%", why:"Far too low. Informal work is the majority of employment worldwide."},
     {t:"About 20%", why:"That is closer to the level in high-income countries (about 13%). Globally the figure is much higher."},
     {t:"About 95%", why:"Too high globally. Even in low-income countries the ILO estimate is about 88%."}
   ]},
   {id:"e2u4-q21", lesson:"e2u4-l3", level:3, q:"A coastal town loses its shipyard, its main employer. Over ten years, young people move away, the school merges with another, and rates of depression rise. Which concept best describes the economic change, and what does the sequence show?", options:[
     {t:"Deindustrialization; institutions are interdependent", ok:true, why:"Losing manufacturing is deindustrialization. One institution’s change spreads to family, education and health, which shows how institutions are interdependent."},
     {t:"Gentrification; wealthier people moved into the town", why:"Nothing suggests wealthier newcomers. The town is losing people and jobs."},
     {t:"Medicalization; depression was redefined as an illness", why:"The scenario is about rising rates after job loss, not about redefining depression."},
     {t:"The informal economy; the shipyard workers had no contracts", why:"Nothing suggests the shipyard jobs were informal. The core change is loss of manufacturing."}
   ]},
   {id:"e2u4-q22", lesson:"e2u4-l3", level:2, q:"Which is the best example of a global commodity chain?", options:[
     {t:"A phone made in many countries and sold worldwide", ok:true, why:"It is designed in one country, with parts made in several others and assembly in another. Linked production and sales across many countries is exactly a global commodity chain."},
     {t:"A farmer selling vegetables at the village market", why:"That’s a local chain within one community."},
     {t:"A government buying medicine for its hospitals", why:"Procurement alone doesn’t describe the international links of production."},
     {t:"Two neighbours swapping tools", why:"That’s bartering, not a global production chain."}
   ]},
   {id:"e2u4-q23", lesson:"e2u4-l3", level:1, q:"How does the World Health Organization define the social determinants of health?", options:[
     {t:"The conditions in which people are born, grow, work, live and age", ok:true, why:"That is WHO’s wording, covering education, housing, food, work and wider conditions."},
     {t:"The genes people inherit from their parents", why:"Genes are biological factors, not social determinants."},
     {t:"The number of doctors in a country", why:"Health services are one factor, but the social determinants are much broader living conditions."},
     {t:"Individual choices about diet and exercise", why:"Habits matter, but WHO’s point is that they are shaped by wider conditions."}
   ]},
   {id:"e2u4-q24", lesson:"e2u4-l3", level:3, q:"Two neighbourhoods in the same city have a 9-year gap in average life expectancy. A newspaper blames residents’ lifestyles. What would a medical sociologist most likely add?", options:[
     {t:"Social conditions shape lifestyles and affect health directly.", ok:true, why:"Social determinants include income, housing, work and food access. This is the social determinants approach: personal habits sit inside conditions people don’t choose, and those conditions matter in their own right."},
     {t:"The gap must be genetic, because lifestyles don’t matter at all.", why:"Large differences between nearby neighbourhoods are very unlikely to be mainly genetic, and lifestyles do matter."},
     {t:"Nothing: lifestyles fully explain the gap.", why:"That ignores the social gradient documented in studies such as the Whitehall studies."},
     {t:"The gap must be caused by medicalization.", why:"Medicalization is about redefining conditions as illnesses; it doesn’t explain a life-expectancy gap."}
   ]},
   {id:"e2u4-q25", lesson:"e2u4-l3", level:2, q:"Which is an example of **demedicalization**?", options:[
     {t:"The APA removing homosexuality from its diagnostic manual", ok:true, why:"The American Psychiatric Association did this in 1973. Removing something from the category of illness is demedicalization."},
     {t:"Heavy drinking being redefined as alcohol-use disorder by doctors", why:"That’s medicalization: moving behaviour into the medical domain."},
     {t:"Childbirth moving from homes into hospitals", why:"That brought childbirth further under medical control: medicalization."},
     {t:"A new drug being approved for a known disease", why:"That’s treatment of an already-medical condition, not demedicalization."}
   ]},
   {id:"e2u4-q26", lesson:"e2u4-l3", level:2, q:"In Parsons’s sick role, which expectation is placed on a sick person?", options:[
     {t:"To want to get well and seek competent medical help", ok:true, why:"The sick role excuses people from normal duties on condition that they try to recover and seek help."},
     {t:"To continue all normal duties as usual", why:"The sick role exempts people from normal duties for a time."},
     {t:"To accept blame for becoming ill", why:"The sick person is not held responsible for being ill in Parsons’s model."},
     {t:"To avoid doctors and recover alone", why:"Seeking competent help is a core obligation of the sick role."}
   ]},
   {id:"e2u4-q27", lesson:"e2u4-l3", level:3, q:"Oluwaseun says: “Informal workers are criminals avoiding tax.” What is the most accurate response?", options:[
     {t:"Most informal work is legal; informal isn’t criminal.", ok:true, why:"Informal work simply lacks contracts, protection and registration. Street vendors, domestic workers and farm labourers are usually doing legal work without formal protection."},
     {t:"He’s right; informal work and crime are the same thing.", why:"Crime involves illegal goods or acts. Informality is about missing formal arrangements."},
     {t:"Informal work only exists in rich countries.", why:"It’s most common in low-income countries, where the ILO estimates about 88% of employment is informal."},
     {t:"Informal workers are always employers, not employees.", why:"Informal workers include employees without contracts, own-account workers and family helpers."}
   ]},

   /* ---- Lesson 4 ---- */
   {id:"e2u4-q28", lesson:"e2u4-l4", level:2, q:"A city of 800,000 people records 6,400 deaths in a year. What is its crude death rate?", options:[
     {t:"8 per 1,000", ok:true, why:"6,400 ÷ 800,000 × 1,000 = 8 deaths per 1,000 people per year."},
     {t:"0.8 per 1,000", why:"That’s per 100 (0.8%). Crude rates are per 1,000, so multiply by 1,000."},
     {t:"80 per 1,000", why:"That’s ten times too high; check the division: 6,400 ÷ 800,000 = 0.008."},
     {t:"125 per 1,000", why:"That comes from dividing population by deaths. Put the events on top."}
   ]},
   {id:"e2u4-q29", lesson:"e2u4-l4", level:1, q:"In the demographic transition model, what happens in stage 2?", options:[
     {t:"Death rates fall while birth rates stay high.", ok:true, why:"So the population grows quickly. Better water, food and medicine reduce deaths first; birth norms change more slowly."},
     {t:"Birth and death rates are both high and population grows slowly.", why:"That’s stage 1."},
     {t:"Birth rates fall and growth slows.", why:"That’s stage 3."},
     {t:"Birth and death rates are both low.", why:"That’s stage 4."}
   ]},
   {id:"e2u4-q30", lesson:"e2u4-l4", level:2, q:"Which is a recognized limitation of the demographic transition model?", options:[
     {t:"It is based mainly on Europe’s history and ignores migration.", ok:true, why:"Both are standard criticisms; many countries moved faster, and migration now drives much population change."},
     {t:"It predicts that death rates fall after birth rates.", why:"It predicts the opposite: deaths fall first."},
     {t:"It only applies to small towns.", why:"It describes national populations, not towns."},
     {t:"It was invented in 2024.", why:"It dates from the first half of the 20th century."}
   ]},
   {id:"e2u4-q31", lesson:"e2u4-l4", level:3, q:"During a famine, food was being exported from the affected country while poor rural workers starved because their wages collapsed. Which thinker’s approach best explains this?", options:[
     {t:"Amartya Sen: people lost the ability to obtain food", ok:true, why:"Famines arise when people lose the ability to obtain food, not only when food runs out. Sen’s entitlement approach focuses on access to food through wages, prices and rights."},
     {t:"Thomas Malthus: population had outgrown the food supply", why:"Food existed and was being exported; the problem was access, not total supply."},
     {t:"Julian Simon: human ingenuity would solve the shortage", why:"Cornucopian theory doesn’t explain why food existed but didn’t reach the hungry."},
     {t:"Ernest Burgess: the city grew in concentric zones", why:"The concentric zone model is about city layout, not famine."}
   ]},
   {id:"e2u4-q32", lesson:"e2u4-l4", level:2, q:"Tomás leaves his drought-hit village for the capital, where his sister has found him a job. Which pair describes the factors?", options:[
     {t:"Push: drought; pull: a job and family in the capital", ok:true, why:"Hardship at the origin pushes; opportunities and networks at the destination pull."},
     {t:"Push: the job in the capital; pull: the drought", why:"Reversed. Push factors are at the place people leave."},
     {t:"Both are intervening obstacles", why:"Intervening obstacles are things such as cost and borders that make moving harder."},
     {t:"It’s international migration because he changed regions", why:"Moving to the capital of his own country is internal migration."}
   ]},
   {id:"e2u4-q33", lesson:"e2u4-l4", level:2, q:"One source says about 55% of the world’s population is urban; another says about 45% live in cities. What is the most likely reason?", options:[
     {t:"They use different definitions and years", ok:true, why:"One uses countries’ own urban definitions (2018); the other uses the UN’s 2025 cities-towns-rural method. That method counts cities separately from towns, so its city share isn’t comparable with older ‘urban’ figures."},
     {t:"Half of all cities disappeared between 2018 and 2025", why:"Nothing like that happened; the change is in measurement."},
     {t:"One of the sources must be fake", why:"Both are UN figures; they measure different things."},
     {t:"Rural populations doubled after 2018", why:"No such change happened. Check definitions before assuming real change."}
   ]},
   {id:"e2u4-q34", lesson:"e2u4-l4", level:1, q:"Who coined the term “gentrification”, and when?", options:[
     {t:"Ruth Glass, in 1964, writing about London", ok:true, why:"Glass introduced the term in *London: Aspects of Change* (1964)."},
     {t:"Thomas Malthus, in 1798", why:"Malthus wrote about population and food, not urban change."},
     {t:"Ernest Burgess, in 1925", why:"Burgess proposed the concentric zone model of the city."},
     {t:"Max Weber, in 1922", why:"Weber wrote about authority and bureaucracy, not gentrification."}
   ]},
   {id:"e2u4-q35", lesson:"e2u4-l4", level:3, q:"A city plans a new waste incinerator. Two wealthy districts organize lawyers and media campaigns and the plan moves to a low-income district with a large minority population that had little warning. Which concepts best describe this?", options:[
     {t:"NIMBY politics leading to environmental racism", ok:true, why:"Wealthier groups pushing hazards away (NIMBY) onto a low-income community of colour fits the definition of environmental racism."},
     {t:"Gentrification and suburbanization", why:"No one is moving into or out of the districts; this is about where a hazard is placed."},
     {t:"The tragedy of the commons", why:"That’s about overuse of a shared resource, not where hazards are sited."},
     {t:"The demographic transition", why:"That model concerns birth and death rates, not facility siting."}
   ]},
   {id:"e2u4-q36", lesson:"e2u4-l4", level:2, q:"Why is the infant mortality rate not directly comparable with the crude death rate?", options:[
     {t:"It is per 1,000 live births, not per 1,000 people.", ok:true, why:"Different denominators. Always check the base of a rate before comparing."},
     {t:"It counts only deaths of people over 65.", why:"It counts deaths of babies under one year old."},
     {t:"It is always given as a percentage of the total population.", why:"It is usually given per 1,000 live births."},
     {t:"It includes migration.", why:"Mortality rates don’t include migration."}
   ]},

   /* ---- Lesson 6 (e2u4-l5) ---- */
   {id:"e2u4-q37", lesson:"e2u4-l5", level:1, q:"What is gatekeeping in the sociology of media?", options:[
     {t:"Filtering which messages reach the public", ok:true, why:"It is the sorting process that reduces and shapes many possible messages into the few that reach the public. Editors, owners and algorithms act as gatekeepers deciding what gets through."},
     {t:"Blocking children from adult websites", why:"That’s parental control, not the sociological concept."},
     {t:"Charging people to read news online", why:"Paywalls limit access but aren’t what gatekeeping means here."},
     {t:"Fewer owners controlling more media outlets", why:"That’s media consolidation, a related but different concept."}
   ]},
   {id:"e2u4-q38", lesson:"e2u4-l5", level:1, q:"According to the ITU, roughly what share of the world’s population used the internet in 2025?", options:[
     {t:"About 74%", ok:true, why:"The ITU estimated about 74%, around 6 billion people, so more than a quarter were offline."},
     {t:"About 25%", why:"That’s roughly the share still offline, not online."},
     {t:"About 50%", why:"The world passed that level years ago."},
     {t:"Nearly 100%", why:"Far from it: in low-income countries only about 23% were online."}
   ]},
   {id:"e2u4-q39", lesson:"e2u4-l5", level:2, q:"Which statement best describes the agenda-setting effect?", options:[
     {t:"Media coverage shapes which issues seem most important.", ok:true, why:"McCombs and Shaw found voters’ priorities matched the issues the media covered most: what to think about."},
     {t:"Media decide exactly what opinions people hold on every issue.", why:"Agenda-setting is about salience (what to think about) more than precise opinions."},
     {t:"Governments set the schedule for news broadcasts.", why:"That isn’t the concept; it concerns media influence on public priorities."},
     {t:"Algorithms only show users opposing views.", why:"That’s not agenda-setting, and personalization tends to do the opposite."}
   ]},
   {id:"e2u4-q40", lesson:"e2u4-l5", level:3, q:"A rural school receives tablets for every pupil, but there is no reliable connection, teachers have had no training and pupils’ grades don’t change. What does this show about the digital divide?", options:[
     {t:"Device access alone doesn’t close the divide.", ok:true, why:"Connectivity, skills and outcomes matter too. The divide has levels: access, skills and use, and outcomes. Devices without connection or skills don’t produce benefits."},
     {t:"The digital divide has been closed at this school.", why:"Owning devices is only part of access; there’s still no reliable connection or skill support."},
     {t:"Technology never helps education.", why:"The case shows what’s missing, not that technology can’t help when the other levels are addressed."},
     {t:"This is an example of media consolidation.", why:"Consolidation concerns media ownership, not access to education technology."}
   ]},
   {id:"e2u4-q41", lesson:"e2u4-l5", level:1, q:"In Aberle’s classification, a movement that seeks to prevent or undo a change in society is a:", options:[
     {t:"Resistance movement", ok:true, why:"Resistance movements aim to stop or reverse change, like the Luddites resisting textile machinery."},
     {t:"Reform movement", why:"Reform movements seek a specific change, not to stop one."},
     {t:"Revolutionary movement", why:"Revolutionary movements seek to change everything."},
     {t:"Alternative movement", why:"Alternative movements seek limited self-improvement in individuals."}
   ]},
   {id:"e2u4-q42", lesson:"e2u4-l5", level:2, q:"A movement now has a head office, paid staff, an annual budget and regular meetings with government officials. Which life-cycle stage is it in?", options:[
     {t:"Institutionalization (bureaucratization)", ok:true, why:"Becoming a formal organization with paid staff marks institutionalization."},
     {t:"Emergence (preliminary stage)", why:"Emergence is when people first notice a problem and leaders appear."},
     {t:"Coalescence", why:"Coalescence is grassroots organizing and publicity, before formal bureaucracy."},
     {t:"Decline", why:"Nothing suggests it is winding down; it is becoming established."}
   ]},
   {id:"e2u4-q43", lesson:"e2u4-l5", level:2, q:"Two movements share the same grievance, but one gets donations, volunteers, office space and experienced organizers, and it grows much faster. Which theory best explains the difference?", options:[
     {t:"Resource mobilization theory", ok:true, why:"McCarthy and Zald explain success by the ability to gather resources and mobilize people, which is exactly the difference here."},
     {t:"Relative deprivation theory", why:"Both movements share the grievance, so deprivation doesn’t explain why one grows faster."},
     {t:"The demographic transition", why:"That’s a population model, unrelated to movement growth."},
     {t:"Agenda-setting", why:"Agenda-setting is about media influence on public priorities, not movement resources."}
   ]},
   {id:"e2u4-q44", lesson:"e2u4-l5", level:3, q:"A campaign poster reads: “Our children breathe toxic air because the city lets trucks idle outside schools. Ban idling within 200 metres of schools. Sign the petition today!” Which framing types does it use, in order?", options:[
     {t:"Diagnostic, then prognostic, then motivational", ok:true, why:"It names the problem and who is responsible (diagnostic), proposes a solution (prognostic), then calls for action (motivational)."},
     {t:"Motivational, then diagnostic, then prognostic", why:"The call to action comes last, not first."},
     {t:"Prognostic only", why:"It also diagnoses the problem and calls for action."},
     {t:"Resource mobilization, then frame transformation", why:"Those aren’t what the poster’s three sentences do; it uses the three core frames."}
   ]},
   {id:"e2u4-q45", lesson:"e2u4-l5", level:3, q:"Hana reads: “Social media caused the Arab Spring.” Which response reflects sociological thinking best?", options:[
     {t:"Social media helped, but grievances and networks mattered too.", ok:true, why:"Social media lowered the cost of organizing, but grievances, existing networks, resources and political opportunities also mattered. Single-cause claims oversimplify: sociologists treat change as multi-causal; tools like social media interact with organizations, resources and opportunities."},
     {t:"Social media had nothing to do with it.", why:"Researchers found social media helped share information and coordinate, so dismissing it is also too simple."},
     {t:"It’s true, because the protests happened after social media was invented.", why:"Timing alone doesn’t prove causation."},
     {t:"Only charismatic leaders cause social change.", why:"That’s another single-cause claim; many of these uprisings were noted for loose, decentralized leadership."}
   ]},

   /* ---- Lesson 5 (e2u4-l6) ---- */
   {id:"e2u4-q46", lesson:"e2u4-l6", level:1, q:"A country’s old-age dependency ratio is 50. What does that mean?", options:[
     {t:"There are 50 people aged 65+ for every 100 aged 15–64.", ok:true, why:"Right. The old-age ratio divides people aged 65+ by people aged 15–64 and multiplies by 100."},
     {t:"Half of the whole population is aged 65 or over.", why:"That would be a 50% share of the total population. The ratio compares older people only with the working-age group."},
     {t:"There are 50 people aged 65+ for every 100 children under 15.", why:"The ratio compares older people with people aged 15–64, not with children."},
     {t:"Half of all older people depend on others for daily care.", why:"The ratio is about age groups only. It says nothing about who needs care or who works."}
   ]},
   {id:"e2u4-q47", lesson:"e2u4-l6", level:1, q:"In the life-course perspective, what does “linked lives” mean?", options:[
     {t:"Events in one person’s life change the lives of others.", ok:true, why:"Lives are interdependent: a parent’s migration, a partner’s illness or a child’s schooling reshapes other family members’ lives."},
     {t:"Every generation repeats the same life stages as the last.", why:"The life-course perspective stresses that cohorts live through different histories, so lives are not simply repeated."},
     {t:"People born in the same year have identical experiences.", why:"A cohort shares historical timing, but class, gender, place and migration make experiences very different."},
     {t:"Lives move through fixed stages from childhood to old age.", why:"That is the older idea of a fixed life cycle, which the life-course perspective moved away from."}
   ]},
   {id:"e2u4-q48", lesson:"e2u4-l6", level:2, q:"Japan’s 2025 census counted 29.4% of people aged 65+ and 10.9% under 15. Roughly what was the old-age dependency ratio?", options:[
     {t:"About 49 per 100 people aged 15–64", ok:true, why:"100 − 29.4 − 10.9 = 59.7% aged 15–64, and 29.4 ÷ 59.7 × 100 ≈ 49."},
     {t:"About 29 per 100 people aged 15–64", why:"29.4 is the share of the whole population, not the ratio to the working-age group."},
     {t:"About 68 per 100 people aged 15–64", why:"That is the total dependency ratio, which also counts children under 15."},
     {t:"About 270 per 100 children under 15", why:"Comparing older people with children (29.4 ÷ 10.9) isn’t a dependency ratio."}
   ]},
   {id:"e2u4-q49", lesson:"e2u4-l6", level:3, q:"In 2024, sub-Saharan Africa and Japan had fairly similar total dependency ratios (about 78 and 70 per 100). What does this similarity hide?", options:[
     {t:"Most dependants are children in one and older people in the other.", ok:true, why:"Sub-Saharan Africa’s child ratio was about 73; Japan’s old-age ratio was about 51. They need very different institutions."},
     {t:"Both regions have the same share of people aged 65 and over.", why:"Far from it: about 3% in sub-Saharan Africa against about 30% in Japan."},
     {t:"Both regions have the same pension and long-term care systems.", why:"The ratios say nothing about institutions, which differ greatly between them."},
     {t:"Neither region has any people of working age who are unemployed.", why:"Dependency ratios use age groups only, so they can’t tell you who is employed."}
   ]},
   {id:"e2u4-q50", lesson:"e2u4-l6", level:1, q:"Which statement matches the UN’s *World Population Prospects 2024*?", options:[
     {t:"By the late 2070s, people aged 65+ are projected to outnumber children under 18.", ok:true, why:"The UN projects about 2.2 billion people aged 65+ by the late 2070s, more than all children under 18."},
     {t:"Population ageing is projected to happen only in Europe and Japan.", why:"Ageing is happening in most regions, including many middle-income countries."},
     {t:"Global life expectancy at birth fell below 60 years in 2024.", why:"The UN estimates it reached 73.3 years in 2024."},
     {t:"Sub-Saharan Africa is projected to remain the oldest world region.", why:"Sub-Saharan Africa is the youngest region: only about 3% were 65+ in 2024."}
   ]},
   {id:"e2u4-q51", lesson:"e2u4-l6", level:2, q:"Bolivia’s Renta Dignidad pays older people a monthly amount from public funds, whatever their work history. What kind of pension is this?", options:[
     {t:"A social (non-contributory) pension", ok:true, why:"It is paid from taxes and public revenue, not from each person’s contributions, so it can reach people who worked informally."},
     {t:"A pay-as-you-go employees’ pension", why:"Pay-as-you-go employees’ pensions pay people who contributed through formal jobs."},
     {t:"A funded individual savings account", why:"Funded accounts pay out what each person saved and earned; Renta Dignidad doesn’t depend on savings."},
     {t:"A private long-term care insurance policy", why:"Long-term care insurance pays for care services, not a regular income in old age."}
   ]},
   {id:"e2u4-q52", lesson:"e2u4-l6", level:3, q:"A country’s pensions are pay-as-you-go. Over 20 years its old-age dependency ratio rises from 30 to 50. Which pressure follows most directly?", options:[
     {t:"Each pensioner is supported by fewer contributors.", ok:true, why:"In pay-as-you-go systems today’s workers fund today’s pensioners, so contributions, benefits, retirement ages or tax funding must adjust."},
     {t:"Returns on workers’ individual investment accounts fall.", why:"Pay-as-you-go schemes don’t rely on individual investment accounts; that describes funded schemes."},
     {t:"Informal workers automatically start receiving pensions.", why:"An ageing population doesn’t extend coverage; informal workers are usually left out of contributory schemes."},
     {t:"Life expectancy in the country starts to fall quickly.", why:"A rising ratio is usually caused partly by longer lives, not by falling life expectancy."}
   ]},
   {id:"e2u4-q53", lesson:"e2u4-l6", level:2, q:"A bank refuses all new loans to people aged over 65, whatever their income or health. Which form of ageism does WHO’s classification call this?", options:[
     {t:"Institutional ageism", ok:true, why:"An age rule built into an organization’s policies is institutional ageism."},
     {t:"Interpersonal ageism", why:"Interpersonal ageism happens in face-to-face interaction, such as patronising talk. This is a written rule."},
     {t:"Self-directed ageism", why:"Self-directed ageism is applying age stereotypes to yourself."},
     {t:"Age stratification theory", why:"That is a theory about unequal resources between age groups, not one of WHO’s forms of ageism."}
   ]},
   {id:"e2u4-q54", lesson:"e2u4-l6", level:3, q:"After retiring, an engineer in Lagos keeps the same morning routine, stays in her professional association and mentors young engineers in the way she always did. Which theory of ageing fits her best?", options:[
     {t:"Continuity theory", ok:true, why:"She keeps her habits, relationships and identity consistent as she adapts to retirement, as Atchley’s theory describes."},
     {t:"Disengagement theory", why:"Disengagement expects withdrawal from roles; she stays involved."},
     {t:"Modernization theory of ageing", why:"Modernization theory is about older people’s status across whole societies, not one person’s choices."},
     {t:"Age stratification theory", why:"Age stratification is about unequal resources between age groups, not personal continuity."}
   ]},
   {id:"e2u4-q55", lesson:"e2u4-l6", level:3, q:"A headline says: “Generation X are all selfish homeowners who pulled up the ladder.” Which response reflects sociological thinking best?", options:[
     {t:"A cohort shares historical timing, but class, gender and place divide it.", ok:true, why:"Cohorts meet history at the same ages, but their members live very different lives, so one label can’t describe them all."},
     {t:"The claim is true because every cohort shares the same experiences.", why:"Members of a cohort share timing, not identical lives or attitudes."},
     {t:"The claim is false because generations never differ in any way.", why:"Cohorts can differ, for example in housing costs when they were young. The problem is overgeneralizing."},
     {t:"The claim shows disengagement theory working as Cumming and Henry predicted.", why:"Disengagement is about withdrawal from roles in later life, not about generation labels."}
   ]},

   /* ---- Lesson 7 (e2u4-l7) ---- */
   {id:"e2u4-q56", lesson:"e2u4-l7", level:1, q:"What is a feedback loop in an algorithmic system?", options:[
     {t:"The system’s decisions shape the data it learns from next.", ok:true, why:"Outputs become future inputs, so an early bias can confirm and strengthen itself."},
     {t:"Users rate the system so that designers can improve it.", why:"User feedback is useful, but in sociology a feedback loop means outputs turning into the system’s own future data."},
     {t:"The system gives exactly the same answer however often you ask it.", why:"Giving consistent answers isn’t a loop between decisions and data."},
     {t:"Designers retrain the model every year on brand-new data.", why:"Retraining can help or not; the loop is about where the new data come from."}
   ]},
   {id:"e2u4-q57", lesson:"e2u4-l7", level:2, q:"A city sends extra police patrols wherever a model predicts crime. Recorded crime rises in those areas, and the model then predicts even more crime there. What is the main problem?", options:[
     {t:"A feedback loop: more patrols produce more records there.", ok:true, why:"Recorded crime partly measures where police look, so the model can confirm itself even if offending elsewhere is similar (Lum and Isaac, 2016)."},
     {t:"The model must be correct, because its predictions came true.", why:"The predictions “came true” partly because of the patrols the model sent. That is the loop, not proof."},
     {t:"Recorded crime always measures exactly how much crime happens.", why:"Recorded crime depends on reporting and policing, so it is an imperfect proxy for offending."},
     {t:"The problem is only that the computers are too slow.", why:"Speed isn’t the issue; the data the model learns from are."}
   ]},
   {id:"e2u4-q58", lesson:"e2u4-l7", level:3, q:"ProPublica reported that Black defendants who did not reoffend were labelled high risk about twice as often as white defendants. The company replied that its scores predicted reoffending equally well for both groups. How can both be partly right?", options:[
     {t:"Fairness measures can conflict when groups’ base rates differ.", ok:true, why:"Researchers showed that equal predictive accuracy and equal error rates usually can’t both hold when underlying rates differ. Choosing which comes first is a value choice."},
     {t:"One side must simply have made an arithmetic mistake.", why:"Both analyses used defensible measures. The disagreement is about which kind of fairness matters."},
     {t:"Risk scores are always fair if race isn’t an input.", why:"Other variables can act as proxies, and error rates can still differ between groups."},
     {t:"Courts never use risk scores, so the debate is imaginary.", why:"Risk scores have been used in many US courts; the 2016 debate was about real use."}
   ]},
   {id:"e2u4-q59", lesson:"e2u4-l7", level:1, q:"What is algorithmic management?", options:[
     {t:"Software assigning, rating and disciplining workers", ok:true, why:"Apps that allocate tasks, set prices, monitor performance and can suspend workers are managing them by algorithm."},
     {t:"Managers who write computer code in their spare time", why:"The term is about software doing management tasks, not managers’ hobbies."},
     {t:"A government office that regulates computer programs", why:"Regulators may oversee algorithms, but that isn’t algorithmic management."},
     {t:"Workers choosing their own hours on a paper rota", why:"There is no software managing anyone here."}
   ]},
   {id:"e2u4-q60", lesson:"e2u4-l7", level:1, q:"What did the International Labour Conference adopt on 12 June 2026?", options:[
     {t:"A Convention on decent work in the platform economy", ok:true, why:"Convention No. 193 was adopted by 406 votes to 8, with 36 abstentions. It applies to platform workers whatever their legal status, with rules on automated systems."},
     {t:"A ban on all ride-hailing and delivery apps worldwide", why:"The Convention regulates platform work; it doesn’t ban it."},
     {t:"A rule making every platform worker a full employee", why:"It extends key protections regardless of status but doesn’t reclassify everyone."},
     {t:"A global tax on technology companies’ profits", why:"Taxation wasn’t its subject; it concerns working conditions."}
   ]},
   {id:"e2u4-q61", lesson:"e2u4-l7", level:2, q:"At an airport, frequent travellers who share data in advance use fast lanes, while others with certain travel histories are sent for extra questioning. Which concept fits best?", options:[
     {t:"Social sorting (David Lyon)", ok:true, why:"Data place people into categories, such as trusted and risky, that bring different treatment."},
     {t:"Ghost work (Mary Gray and Siddharth Suri)", why:"Ghost work is hidden human labour behind automated services, not the sorting of travellers."},
     {t:"Disengagement theory", why:"That is a theory of ageing, about withdrawal from roles in later life."},
     {t:"The digital divide", why:"The digital divide is unequal access to technology, not categorising travellers."}
   ]},
   {id:"e2u4-q62", lesson:"e2u4-l7", level:1, q:"What does Shoshana Zuboff mean by “surveillance capitalism”?", options:[
     {t:"Turning data about behaviour into predictions sold for profit", ok:true, why:"Zuboff (2019) argued firms extract behavioural data and sell predictions; critics such as Morozov say it is ordinary capitalism."},
     {t:"Governments buying surveillance cameras from the cheapest supplier", why:"Public procurement isn’t her concept; she focuses on business models built on behavioural data."},
     {t:"Workers watching their managers to prevent abuse", why:"Watching back is sometimes called sousveillance; it isn’t Zuboff’s concept."},
     {t:"A prison design in which inmates can always be seen", why:"That is Bentham’s panopticon, used by Foucault."}
   ]},
   {id:"e2u4-q63", lesson:"e2u4-l7", level:2, q:"Which description of EU border systems was accurate when this lesson was checked in November 2026?", options:[
     {t:"The EES was fully running; ETIAS was planned but not yet operating.", ok:true, why:"The Entry/Exit System has been fully operational since 10 April 2026. ETIAS had been postponed (EU governments now expect 2027) and was not yet collecting applications."},
     {t:"ETIAS was running; the EES had been cancelled before launch.", why:"The reverse: the EES is running, while ETIAS had not started."},
     {t:"Both systems had been replaced by passport stamping.", why:"The EES replaced manual stamping at external borders."},
     {t:"Both systems applied only to EU citizens travelling at home.", why:"Both concern non-EU nationals on short stays."}
   ]},
   {id:"e2u4-q64", lesson:"e2u4-l7", level:3, q:"A screening tool catches 9 of the 10 real threats among 100,000 travellers, but flags 1,000 people in total. What should a sociologist conclude?", options:[
     {t:"Almost all flagged travellers (991 of 1,000) are innocent.", ok:true, why:"1,000 − 9 = 991, so 99.1% of those flagged are not threats. When threats are rare, the costs of false alarms fall on many people."},
     {t:"The tool is 90% accurate, so 90% of flagged people are threats.", why:"Catching 90% of threats says nothing about how many flagged people are threats. That is the base-rate error."},
     {t:"Only 10 travellers were inconvenienced, so there is no issue.", why:"1,000 people were flagged; 991 of them were innocent."},
     {t:"The tool must be using nationality as an input.", why:"The numbers alone don’t show which inputs it uses; they show a base-rate problem."}
   ]},
   {id:"e2u4-q65", lesson:"e2u4-l7", level:3, q:"Which sentence presents the debate on border technologies in a neutral, attributed way?", options:[
     {t:"Officials cite speed and security; a UN rapporteur and others warn of discrimination.", ok:true, why:"It names who argues what on each side (for example the European Commission, and Tendayi Achiume as UN Special Rapporteur) without taking a side."},
     {t:"Border technologies are obviously good, because keeping the country secure matters more than anything else.", why:"This takes a side and gives no attribution or evidence."},
     {t:"Border technologies are obviously racist, so every one of them should be banned immediately.", why:"This also takes a side, without naming who argues it or the evidence."},
     {t:"Nobody disagrees about border technology, so there is no debate.", why:"Governments, UN experts, NGOs and researchers disagree openly."}
   ]}
  ]
});
