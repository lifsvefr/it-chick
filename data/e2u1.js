/* Social Science Primers · Sociology Unit 1 · Thinking sociologically */
ICA.addUnit({
  id:"e2u1", track:"e2", n:1, title:"Thinking sociologically", icon:"🔭",
  blurb:"What sociology is, where it came from, the big theoretical lenses sociologists look through, and how they gather evidence carefully and ethically.",
  goals:[
    "Explain what sociology studies and use the sociological imagination to connect personal troubles to public issues",
    "Describe how industrialisation, cities and revolution gave rise to sociology, and what its founders contributed",
    "Apply functionalism, conflict theory, symbolic interactionism, feminist theory and intersectionality to the same everyday example",
    "Use hypotheses, variables and operational definitions, and tell correlation from causation",
    "Choose a fitting research method for a question and spot the ethical issues it raises"
  ],
  read:[
    {book:"soc", where:"Chapter 1, “An Introduction to Sociology”: Sections 1.1 “What Is Sociology?”, 1.2 “The History of Sociology”, 1.3 “Theoretical Perspectives in Sociology” and 1.4 “Why Study Sociology?”", note:"On the LibreTexts mirror each chapter begins with an extra “Introduction” page, so its section numbers are one higher (for example, 1.2 “What Is Sociology?”)."},
    {book:"soc", where:"Chapter 2, “Sociological Research”: Sections 2.1 “Approaches to Sociological Research”, 2.2 “Research Methods” and 2.3 “Ethical Concerns”", note:"On the LibreTexts mirror these are numbered 2.2, 2.3 and 2.4."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u1-l1", title:"What sociology is", minutes:45,
   goals:[
     "Define sociology, society and culture in plain words",
     "Use the sociological imagination to tell a personal trouble from a public issue",
     "See general social patterns in particular lives without treating patterns as predictions about individuals",
     "Explain how sociology is useful in everyday life and in many kinds of work"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Sections 1.1 and 1.4 introduce sociology’s basic vocabulary, its central habit of mind (the sociological imagination) and why it is worth learning. The textbook’s examples are mostly from the United States; this guide adds others.",
      {look:[
        "How does the book define sociology, society and culture, and how are society and culture different? (1.1)",
        "What is the difference between micro-level and macro-level analysis? (1.1)",
        "What did C. Wright Mills mean by the sociological imagination, and what are social facts? (1.1)",
        "How has sociological research shaped public decisions, and which careers use sociology’s skills? (1.4)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[sociology|Sociology]] is the *systematic* study of society and social interaction, from a chat between two friends to the global economy. Systematic means evidence gathered in careful, checkable ways. That lifts it above common sense, which often contradicts itself: “birds of a feather flock together” and “opposites attract” can’t both be the rule, so research tests which holds, for whom and when. (1.1)",
        "A [[society]] is a group of people who live in a defined area, interact and share a culture. [[culture|Culture]] is that group’s shared practices, values and beliefs: its whole way of life. They aren’t the same thing. One society can hold many cultures (think of India, Nigeria or Indonesia), and one culture, such as a language or religion, can cross borders. (1.1)",
        "Sociologists work at two scales. [[micro-level|Micro-level]] analysis looks at face-to-face interaction in small groups, such as slang in a group chat. [[macro-level|Macro-level]] analysis looks at large structures and long-term change, such as a language spreading or declining over generations. (1.1)",
        "The [[sociological-imagination|sociological imagination]], named by {{c-wright-mills|C. Wright Mills}} in his book *The Sociological Imagination* (1959), is the awareness of how one person’s experience connects to the wider society and its history: *biography* and *history*. (1.1)",
        "Mills’s key tool: a [[personal-trouble|personal trouble]] lies within one person’s life and close circle; a [[public-issue|public issue]] affects many people and comes from how society is organised. One person out of work in a big city is a trouble; millions losing jobs at once points to the economy. Seeing the issue doesn’t erase personal choice. It adds a second layer of explanation. (adds to 1.1)",
        "[[social-fact|Social facts]] are laws, morals, values, customs, beliefs, fashions and rituals that exist outside any one person and shape how people act. {{emile-durkheim|Émile Durkheim}}, who named them, showed in *Suicide* (1897) that even suicide rates differed steadily between groups. Patterns like these describe groups and averages; they never predict what one individual will do. (1.1, 1.2)",
        "Social structures shape and limit choices but don’t remove them. People also act, resist and change their societies, a capacity sociologists call *agency*. And explaining a pattern is not the same as blaming or excusing anyone. (adds to 1.1)",
        "Sociology has real uses. The US Supreme Court’s *Brown v. Board of Education* decision (1954) against segregated schools cited Kenneth and Mamie Clark’s research on how segregation harmed Black children. Sociology’s transferable skills (research design, data analysis, understanding cultural difference, clear reporting) serve careers from market research and public health to human resources, community planning, teaching and law. (1.4)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 518"><rect class="d-panel" x="6" y="6" width="328" height="232" rx="12" stroke-width="1.5"/><text x="170" y="30" text-anchor="middle">Personal trouble</text><text class="s" x="170" y="48" text-anchor="middle">one person out of work</text><circle class="d-soft" cx="65" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="72" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="100" r="9" stroke-width="1.5"/><circle class="d-rose" cx="215" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="100" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="128" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="156" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="184" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="184" r="9" stroke-width="1.5"/><text class="s" x="170" y="209" text-anchor="middle">Look for causes in the person’s</text><text class="s" x="170" y="226" text-anchor="middle">skills, health, choices, luck</text><rect class="d-panel" x="6" y="250" width="328" height="232" rx="12" stroke-width="1.5"/><text x="170" y="274" text-anchor="middle">Public issue</text><text class="s" x="170" y="292" text-anchor="middle">many people out of work at once</text><circle class="d-soft" cx="65" cy="316" r="9" stroke-width="1.5"/><circle class="d-rose" cx="95" cy="316" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="316" r="9" stroke-width="1.5"/><circle class="d-rose" cx="155" cy="316" r="9" stroke-width="1.5"/><circle class="d-rose" cx="185" cy="316" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="316" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="316" r="9" stroke-width="1.5"/><circle class="d-rose" cx="275" cy="316" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="344" r="9" stroke-width="1.5"/><circle class="d-rose" cx="95" cy="344" r="9" stroke-width="1.5"/><circle class="d-rose" cx="125" cy="344" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="344" r="9" stroke-width="1.5"/><circle class="d-rose" cx="185" cy="344" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="344" r="9" stroke-width="1.5"/><circle class="d-soft" cx="245" cy="344" r="9" stroke-width="1.5"/><circle class="d-rose" cx="275" cy="344" r="9" stroke-width="1.5"/><circle class="d-rose" cx="65" cy="372" r="9" stroke-width="1.5"/><circle class="d-soft" cx="95" cy="372" r="9" stroke-width="1.5"/><circle class="d-rose" cx="125" cy="372" r="9" stroke-width="1.5"/><circle class="d-soft" cx="155" cy="372" r="9" stroke-width="1.5"/><circle class="d-soft" cx="185" cy="372" r="9" stroke-width="1.5"/><circle class="d-rose" cx="215" cy="372" r="9" stroke-width="1.5"/><circle class="d-rose" cx="245" cy="372" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="372" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="400" r="9" stroke-width="1.5"/><circle class="d-rose" cx="95" cy="400" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="400" r="9" stroke-width="1.5"/><circle class="d-rose" cx="155" cy="400" r="9" stroke-width="1.5"/><circle class="d-rose" cx="185" cy="400" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="400" r="9" stroke-width="1.5"/><circle class="d-rose" cx="245" cy="400" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="400" r="9" stroke-width="1.5"/><circle class="d-soft" cx="65" cy="428" r="9" stroke-width="1.5"/><circle class="d-rose" cx="95" cy="428" r="9" stroke-width="1.5"/><circle class="d-soft" cx="125" cy="428" r="9" stroke-width="1.5"/><circle class="d-rose" cx="155" cy="428" r="9" stroke-width="1.5"/><circle class="d-rose" cx="185" cy="428" r="9" stroke-width="1.5"/><circle class="d-soft" cx="215" cy="428" r="9" stroke-width="1.5"/><circle class="d-rose" cx="245" cy="428" r="9" stroke-width="1.5"/><circle class="d-soft" cx="275" cy="428" r="9" stroke-width="1.5"/><text class="s" x="170" y="453" text-anchor="middle">Look for causes in the economy,</text><text class="s" x="170" y="470" text-anchor="middle">history, technology and policy</text><circle class="d-soft" cx="92" cy="504" r="6" stroke-width="1.5"/><text class="s" x="103" y="508">in work</text><circle class="d-rose" cx="192" cy="504" r="6" stroke-width="1.5"/><text class="s" x="203" y="508">out of work</text></svg>', alt:"Two panels of 40 dots each, one above the other. In the top panel, labelled Personal trouble, one dot is highlighted as out of work. In the bottom panel, labelled Public issue, half the dots are highlighted. Under the top panel: look for causes in the person’s skills, health, choices and luck. Under the bottom panel: look for causes in the economy, history, technology and policy.", cap:"The same problem, unemployment, at two scales. When it affects one person, look at that person’s life. When it affects many at once, look at how society is organised."}
    ]},
    {h:"Key terms", body:[
      {terms:["sociology","society","culture","micro-level","macro-level","sociological-imagination","personal-trouble","public-issue","social-fact"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"Section 1.1 doesn’t name Mills’s book or cover personal troubles, public issues or Durkheim’s *Suicide*; the big ideas add them. Many textbooks also teach two habits: **seeing the general in the particular** (a phrase credited to Peter Berger’s *Invitation to Sociology*, 1963), spotting broad patterns such as who marries whom in individual lives; and **making the familiar strange**, asking why something taken for granted is done that way. An example from beyond the US: OECD reports find that in many countries migrants are more likely than locally born workers to hold jobs below their qualifications, so a trained pharmacist driving a taxi faces a trouble that is also a public issue. Finally, sociology is a research discipline, not the same as social work (a helping profession that draws on it) or a political position, and it studies friendship, music, sport and religion as well as problems."}
    ]}
   ],
   try:[
    {id:"e2u1-l1-x1", type:"sort", q:"Each situation is described in a particular way. Sort it by whether the description treats it as a personal trouble or a public issue.", buckets:["Personal trouble","Public issue"], items:[
      {t:"Kenji oversleeps, misses an important exam and has to retake the course.", b:0, why:"The cause and the fix are within Kenji’s own life: his alarm, his sleep, his course. Nothing here points to a wider pattern."},
      {t:"Across a country, young graduates in every region struggle to find jobs that match their training after a recession.", b:1, why:"Many people in different places are affected at once, and the cause named is the economy. That is a public issue in Mills’s sense."},
      {t:"Ana argues with her sister about who should host a family dinner.", b:0, why:"A disagreement within one family, with no wider social cause described, is a personal trouble."},
      {t:"Rents in a fast-growing city rise so quickly that nurses, teachers and cleaners can no longer afford to live near where they work.", b:1, why:"Many people across several jobs face the same problem because of how the housing market works. That is structural, so it’s a public issue."},
      {t:"Tomás’s bicycle is stolen after he forgets to lock it one evening.", b:0, why:"One event with a cause in one person’s situation is described here. (If thefts were soaring across the city, the description would be different.)"},
      {t:"In many countries, women are much more likely than men to leave paid work to care for young children or older relatives.", b:1, why:"A difference between whole groups, repeated across many countries, points to social arrangements such as expectations, pay gaps and childcare, not just individual preferences."}
    ]},
    {id:"e2u1-l1-x2", type:"mcq", q:"Priya is researching why so many people in her town commute more than two hours a day. Which question shows the sociological imagination most clearly?", options:[
      {t:"How have housing costs, job locations and transport policy changed in the region, and who has been pushed farthest from work?", ok:true, why:"Right. This links many individual commutes to history and social structure: the housing market, where jobs are and public decisions about transport."},
      {t:"Why don’t these people just get up earlier and plan their journeys better?", why:"This treats a widespread pattern as a matter of individual effort only. It ignores why so many people face the same problem at once."},
      {t:"Which podcast would make a long commute more enjoyable?", why:"That may help one person cope, but it doesn’t explain anything about why long commutes are common."},
      {t:"Is commuting good or bad?", why:"This asks for a judgement, not an explanation. The sociological imagination asks how personal experience connects to wider social forces."}
    ]},
    {id:"e2u1-l1-x3", type:"match", q:"Match each idea to the example that best shows it.", pairs:[
      ["Society","Everyone living in Ghana, linked by laws, markets, schools and media","A society is a group of people living in an area, interacting and sharing a culture."],
      ["Culture","The shared foods, languages, festivals and values of a group","Culture is a group’s shared practices, values and beliefs."],
      ["Sociological imagination","Seeing that one person’s job loss is part of a wave of factory closures","This links a single life (biography) to wider social change (history)."],
      ["Social fact","A legal rule about the minimum age for marriage that applies to everyone","Durkheim’s social facts are rules, customs and values that exist outside individuals and shape them."],
      ["Micro-level study","Observing how strangers share seats on a crowded train","A face-to-face interaction in a small setting is micro-level."],
      ["Macro-level study","Comparing how school systems in 30 countries sort students","Large structures compared across whole countries are macro-level."]
    ]},
    {id:"e2u1-l1-x4", type:"mcq", q:"Dmitri says: “Sociology is just common sense with long words.” What is the best response?", options:[
      {t:"Common sense often contradicts itself and is sometimes wrong; sociology tests claims with systematic evidence.", ok:true, why:"Yes. “Birds of a feather flock together” and “opposites attract” can’t both be the rule. Research checks which is true, for whom and when."},
      {t:"He’s right: sociology only describes what everyone already knows.", why:"Research regularly finds results that surprise people, such as Durkheim showing that suicide, a seemingly private act, follows stable social patterns."},
      {t:"Sociology avoids common sense by relying only on theory, never on evidence.", why:"The opposite: sociology’s strength is gathering evidence carefully. Theories are tested against data."},
      {t:"Sociology is about opinions, so there’s no way to say whether it’s more than common sense.", why:"Sociology isn’t a collection of opinions. It uses methods such as surveys, observation and experiments that others can check."}
    ]},
    {id:"e2u1-l1-x5", type:"spot", q:"Mei wrote this summary for a study group. Tap each claim that **misunderstands** sociology.", ask:"misunderstands sociology", parts:[
      "Sociology is ",
      {t:"the systematic study of society and social interaction.", flag:false, why:"This is accurate: it matches the textbook definition."},
      " It studies ",
      {t:"everything from small groups to whole countries,", flag:false, why:"Correct. Sociology works at micro and macro levels."},
      " and ",
      {t:"its patterns tell you exactly what each individual will do.", flag:true, why:"Patterns describe groups and averages. They never predict an individual’s behaviour with certainty."},
      " The sociological imagination ",
      {t:"links personal experience to wider social forces and history.", flag:false, why:"That is exactly Mills’s idea: connecting biography and history."},
      " Because of this, ",
      {t:"sociologists believe people have no real choices at all.", flag:true, why:"Sociologists study how structures shape and limit choices, not how they remove them. People’s agency is part of the picture."},
      " Sociology is useful for ",
      {t:"careers such as market research, public health and human resources.", flag:false, why:"Correct. Sociology’s research and people skills are used in many fields."},
      " ",
      {t:"It is basically the same thing as social work.", flag:true, why:"Social work is a helping profession that may draw on sociology. Sociology itself is a research discipline."}
    ]},
    {id:"e2u1-l1-x6", type:"mcq", q:"Sione notices that most of his relatives in a Pacific island village have family members working abroad who send money home. Which explanation best uses the sociological imagination?", options:[
      {t:"Limited local jobs, overseas labour demand, migration schemes and family obligations together shape many families’ decisions in the same way.", ok:true, why:"Right. It explains a shared pattern through economic and social structures, while still leaving room for each family’s own choices."},
      {t:"His relatives simply prefer living abroad to living at home.", why:"Individual preference alone can’t explain why the same choice is so common across a whole community."},
      {t:"It’s a coincidence that so many families made the same choice.", why:"When the same choice repeats across many families, sociologists look for social causes rather than coincidence."},
      {t:"Because it’s a pattern, every family member there will eventually move abroad.", why:"A pattern describes a tendency, not a certainty about each person. Many people stay."}
    ]}
   ],
   apply:{intro:"Practise the sociological imagination on your own life and surroundings. Keep notes private unless you choose to share them, and don’t record or photograph anyone.", tasks:[
     {t:"Map one of your own decisions", how:["Choose a decision you’ve made: what you studied, a job you took, where you live, how you spend weekends.","Write two or three personal reasons for it.","Now write the social side: what in your family, community, country, economy or historical moment made that choice possible, likely or hard?","Finally, ask: would someone of a different age, gender, class or country have faced the same options?"], write:"My decision… Personal reasons… Social forces that shaped it… How it might differ for someone else…"},
     {t:"Turn a trouble into an issue", how:["Find a news story about one person’s hardship: a high bill, a lost job, a long wait for treatment.","Write one sentence describing it as a personal trouble.","Then write one or two sentences describing the public issue behind it: how many people might face the same thing, and why."], write:"The story… As a personal trouble… As a public issue…"},
     {t:"Notice unwritten rules", how:["Spend 15 minutes somewhere public and ordinary: a queue, a bus, a market, a café, a waiting room.","Watch quietly, without recording anyone. List five unwritten rules people seem to follow (where they stand, how they speak, how they take turns).","For each rule, note one sign that people follow it, and what might happen if someone broke it."], write:"Where I was… Rule 1… Rule 2… What happens if someone breaks one…"}
   ], proof:"Notes connecting one of your own decisions to wider social forces, a news story rewritten as both a personal trouble and a public issue, and a list of five unwritten rules you observed."},
   read:[
     {book:"soc", where:"Chapter 1, Section 1.1 “What Is Sociology?” (on LibreTexts: 1.2)", note:"Covers society, culture, the sociological imagination and studying patterns."},
     {book:"soc", where:"Chapter 1, Section 1.4 “Why Study Sociology?” (on LibreTexts: 1.5)", note:"Includes the Brown v. Board of Education story and the careers sociology prepares people for."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u1-l2", title:"Where sociology came from", minutes:50,
   goals:[
     "Explain why industrialisation, urbanisation and revolution made people want a science of society",
     "Describe the key ideas of Comte, Martineau, Marx, Spencer, Durkheim, Weber and Du Bois, and Ibn Khaldun as an early forerunner",
     "Tell positivist from interpretive (antipositivist) sociology and explain verstehen",
     "Recognise why some founders were long left out of sociology’s story"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Section 1.2 tells how sociology became a discipline and introduces the people who shaped it. For each name, focus on the problem that thinker tried to solve, and how.",
      {look:[
        "What changes in Europe in the 18th and 19th centuries made people want a science of society?",
        "Who first wrote the word “sociology”, who made it famous, and what is positivism?",
        "How did Marx, Durkheim and Weber each explain society, and how did their methods differ?",
        "Which thinkers from outside the usual list of European men does the section include, and what did they add?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "People reflected on social life long before sociology had a name, from Confucius, Plato and Aristotle to the 13th-century Chinese historian Ma Duanlin (Ma Tuan-Lin) and the North African scholar Ibn Khaldun. (1.2)",
        "Sociology became a discipline in 19th-century Europe because life was changing fast. **Industrialisation** brought factories and wage work, **urbanisation** pulled people from villages into crowded cities, and **political revolutions** (American from 1775, French from 1789) challenged kings and church. With the Enlightenment’s trust in reason, that raised two questions: what holds society together, and why does it change? (1.2)",
        "Emmanuel-Joseph Sieyès first wrote the word *sociology* around 1780, in an unpublished manuscript. Auguste Comte reintroduced it in 1838 and made it famous. His [[positivism]] held that society follows laws, as nature does, and that observation can discover them. (1.2)",
        "Marx saw history as conflict between classes over the means of production: under capitalism the [[bourgeoisie]] (owners) profit from the labour of the [[proletariat]] (workers). Spencer instead pictured society as a body whose parts work together and evolve; others turned his ideas into social Darwinism, which sociology rejects. (1.2)",
        "Durkheim argued that sociology studies [[social-fact|social facts]]. In *Suicide* he used official statistics to show that rates differ between groups depending on how strongly people are integrated into, and regulated by, society; weak ties or [[anomie]] (normlessness) push rates up. He explained *rates*, not individual acts. (1.2)",
        "Weber argued that people act on meanings, so researchers need [[verstehen]], an insider’s understanding. With Simmel he took an [[antipositivism|antipositivist]] stance. In *The Protestant Ethic* he explained capitalism’s rise partly through religious beliefs about work and saving, not only material conditions. (1.2)",
        "The founders were more varied than old histories admit. Martineau and Du Bois did major empirical work but were long overlooked because academic gatekeepers excluded or ignored women and Black scholars. Du Bois showed that problems blamed on Black Philadelphians’ character were rooted in discrimination, poverty and history. (1.2)",
        "The founders left two ways of knowing. **Positivist** research looks for patterns and causes, usually with [[quantitative-data|quantitative data]] such as statistics and large surveys. **Interpretive** research seeks meanings from the inside, usually with [[qualitative-data|qualitative data]] such as interviews and observation. Most sociologists today use both. (1.2)"
      ]}
    ]},
    {h:"Thinkers to know", body:[
      {list:[
        "**Ibn Khaldun** (1332–1406): *ʿasabiyyah*, group cohesion that helps groups win power; first draft of the *Muqaddimah* in the late 1370s.",
        "**Auguste Comte** (1798–1857): positivism; *Course in Positive Philosophy* (1830–1842); reintroduced “sociology” in 1838.",
        "**Harriet Martineau** (1802–1876): translated Comte into English (1853); *Society in America* (1837).",
        "**Karl Marx** (1818–1883): class conflict drives history; *The Communist Manifesto* (1848, with Friedrich Engels). He never called himself a sociologist.",
        "**Herbert Spencer** (1820–1903): society as an evolving organism; *The Study of Sociology* (1873).",
        "**Émile Durkheim** (1858–1917): social facts; *The Rules of Sociological Method* (1895) and *Suicide* (1897).",
        "**Max Weber** (1864–1920): verstehen; *The Protestant Ethic and the Spirit of Capitalism* (1904–05).",
        "**W. E. B. Du Bois** (1868–1963): door-to-door study for *The Philadelphia Negro* (1899); double consciousness in *The Souls of Black Folk* (1903).",
        "**Jane Addams** (1860–1935): co-founded Chicago’s Hull House, whose research informed policy on child labour and public health."
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 484"><defs><marker id="e2u1-l2-tla" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><path class="d-ink" d="M96 10 L96 54" stroke-width="2" fill="none"/><path class="d-ink" d="M86 52 L106 60 M86 60 L106 68" stroke-width="2" fill="none"/><path class="d-ink" d="M96 66 L96 430" stroke-width="2" fill="none" marker-end="url(#e2u1-l2-tla)"/><circle class="d-gold" cx="96" cy="30" r="8" stroke-width="2"/><text x="80" y="35" text-anchor="end">late 1370s</text><text x="114" y="28">Ibn Khaldun</text><text class="s" x="114" y="45">Muqaddimah</text><circle class="d-lup" cx="96" cy="100" r="8" stroke-width="2"/><text x="80" y="105" text-anchor="end">1838</text><text x="114" y="98">Comte</text><text class="s" x="114" y="115">names sociology</text><circle class="d-lup" cx="96" cy="146" r="8" stroke-width="2"/><text x="80" y="151" text-anchor="end">1848</text><text x="114" y="144">Marx and Engels</text><text class="s" x="114" y="161">Communist Manifesto</text><circle class="d-lup" cx="96" cy="192" r="8" stroke-width="2"/><text x="80" y="197" text-anchor="end">1853</text><text x="114" y="190">Martineau</text><text class="s" x="114" y="207">translates Comte</text><circle class="d-lup" cx="96" cy="238" r="8" stroke-width="2"/><text x="80" y="243" text-anchor="end">1897</text><text x="114" y="236">Durkheim</text><text class="s" x="114" y="253">Suicide</text><circle class="d-lup" cx="96" cy="284" r="8" stroke-width="2"/><text x="80" y="289" text-anchor="end">1899</text><text x="114" y="282">Du Bois</text><text class="s" x="114" y="299">Philadelphia Negro</text><circle class="d-lup" cx="96" cy="330" r="8" stroke-width="2"/><text x="80" y="335" text-anchor="end">1904–05</text><text x="114" y="328">Weber</text><text class="s" x="114" y="345">Protestant Ethic</text><circle class="d-sage" cx="96" cy="376" r="8" stroke-width="2"/><text x="80" y="381" text-anchor="end">1959</text><text x="114" y="374">Mills</text><text class="s" x="114" y="391">Sociological Imagination</text><text class="s" x="170" y="456" text-anchor="middle">Not to scale: the break after the 1370s</text><text class="s" x="170" y="474" text-anchor="middle">skips more than four centuries</text></svg>', alt:"A timeline running down the page, not to scale. Late 1370s: Ibn Khaldun, Muqaddimah. Then a break. 1838: Comte names sociology. 1848: Marx and Engels, Communist Manifesto. 1853: Martineau translates Comte. 1897: Durkheim, Suicide. 1899: Du Bois, The Philadelphia Negro. 1904–05: Weber, The Protestant Ethic. 1959: Mills, The Sociological Imagination.", cap:"Landmark works in this unit. Most of sociology’s classic texts come from a few decades of rapid industrial change."}
    ]},
    {h:"Key terms", body:[
      {terms:["positivism","antipositivism","verstehen","social-fact","anomie","bourgeoisie","proletariat","double-consciousness","quantitative-data","qualitative-data"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"Ibn Khaldun wasn’t a sociologist in the modern sense and the discipline didn’t grow from his work, but many scholars, like the book, see him as a forerunner. Weber described *rationalisation*, life organised around efficiency and rules as in [[bureaucracy|bureaucracies]], and historians still debate his Protestant Ethic thesis. In the 20th century sociology became global: Latin American scholars, for example, developed dependency theory to explain global inequality ({{theories-global-inequality}})."},
      {fix:"The book dates *The Protestant Ethic and the Spirit of Capitalism* to 1904. It first appeared as two journal articles, in 1904 and 1905, so this course writes 1904–05."}
    ]}
   ],
   try:[
    {id:"e2u1-l2-x1", type:"match", q:"Match each thinker to the idea most associated with them.", pairs:[
      ["Ibn Khaldun","ʿAsabiyyah: group cohesion that helps groups gain power","Ibn Khaldun’s Muqaddimah linked the rise and fall of dynasties to social cohesion."],
      ["Auguste Comte","Positivism: studying society with the methods of natural science","Comte reintroduced the word sociology and named the positivist approach."],
      ["Karl Marx","History driven by conflict between classes over the means of production","Marx saw class conflict, especially between owners and workers, as the engine of change."],
      ["Émile Durkheim","Social facts that exist outside individuals and shape them","Durkheim argued sociology should study social facts, as he did in Suicide."],
      ["Max Weber","Verstehen: understanding action from the actor’s point of view","Weber argued that explaining action requires grasping its meaning to the people involved."],
      ["W. E. B. Du Bois","A door-to-door empirical study of a Black neighbourhood in Philadelphia","The Philadelphia Negro (1899) was one of the first major empirical community studies in the US."]
    ]},
    {id:"e2u1-l2-x2", type:"order", q:"Put these works in the order they were written or published, earliest first.", items:[
      {t:"Ibn Khaldun completes the first draft of the Muqaddimah", why:"Late 1370s: centuries before the European founders."},
      {t:"Comte’s Course in Positive Philosophy begins to appear", why:"Its volumes appeared from 1830 to 1842."},
      {t:"Marx and Engels publish The Communist Manifesto", why:"1848."},
      {t:"Martineau publishes her translation of Comte", why:"1853, bringing Comte to English-speaking readers."},
      {t:"Durkheim publishes Suicide", why:"1897."},
      {t:"Weber publishes The Protestant Ethic and the Spirit of Capitalism", why:"1904–05, in two parts."},
      {t:"Mills publishes The Sociological Imagination", why:"1959, the most recent of these."}
    ]},
    {id:"e2u1-l2-x3", type:"sort", q:"Sort each research plan by the approach it mainly follows.", buckets:["Positivist (patterns, numbers, causes)","Interpretive (meanings, from the inside)"], items:[
      {t:"Compare official divorce rates across 40 countries and test whether they rise with women’s employment.", b:0, why:"Large-scale statistics used to test a general relationship between variables: positivist."},
      {t:"Spend six months with a youth football club to understand what the club means to its players.", b:1, why:"Immersion to understand meaning from the insiders’ point of view: interpretive."},
      {t:"Interview ten night-shift workers in depth about how they experience time and family life.", b:1, why:"In-depth interviews about lived experience aim at verstehen: interpretive."},
      {t:"Survey 3,000 randomly chosen adults to measure how often they volunteer and how much they trust neighbours.", b:0, why:"A large random survey producing numbers to compare and relate: positivist."},
      {t:"Read migrants’ letters home to understand how they describe success and failure.", b:1, why:"Interpreting the meanings in people’s own words: interpretive."},
      {t:"Use census data to measure how average household size has changed over 50 years.", b:0, why:"Counting and comparing measurable patterns over time: positivist."}
    ]},
    {id:"e2u1-l2-x4", type:"mcq", q:"Why did sociology emerge as a discipline in 19th-century Europe in particular?", options:[
      {t:"Rapid industrialisation, the growth of cities and political revolutions disrupted traditional life and raised new questions about order and change.", ok:true, why:"Right. Familiar communities, work and authority were transformed, and the success of natural science suggested society might be studied systematically too."},
      {t:"Nobody had ever thought about society before that time.", why:"Thinkers such as Confucius, Plato, Aristotle, Ma Duanlin and Ibn Khaldun reflected on social life much earlier. What was new was a named, organised discipline."},
      {t:"Governments ordered universities to create a new subject.", why:"Sociology grew from thinkers responding to social change, not from a government order."},
      {t:"Societies had become stable, so people finally had time to study them.", why:"The reverse: it was rapid, unsettling change that made understanding society feel urgent."}
    ]},
    {id:"e2u1-l2-x5", type:"spot", q:"A student wrote this paragraph about sociology’s founders. Tap each statement that is **historically wrong**.", ask:"historically wrong", parts:[
      {t:"Auguste Comte invented the word “sociology” for the very first time.", flag:true, why:"Sieyès used it in an unpublished manuscript around 1780. Comte reintroduced and popularised it in 1838."},
      " ",
      {t:"Harriet Martineau translated Comte’s work into English.", flag:false, why:"True: her condensed translation appeared in 1853."},
      " ",
      {t:"Karl Marx described himself as the first sociologist.", flag:true, why:"Marx never called himself a sociologist. His ideas were later taken up within sociology."},
      " ",
      {t:"Durkheim argued that suicide rates are shaped by social integration.", flag:false, why:"True: that is the central argument of Suicide (1897)."},
      " ",
      {t:"Weber explained capitalism’s rise only through money and machines, ignoring beliefs.", flag:true, why:"The reverse: The Protestant Ethic stressed religious beliefs and meanings."},
      " ",
      {t:"Du Bois carried out door-to-door research in Philadelphia.", flag:false, why:"True: his 1896–97 fieldwork led to The Philadelphia Negro (1899)."}
    ]},
    {id:"e2u1-l2-x6", type:"mcq", q:"Hana wants to understand why young people in her city spend so much time in internet cafés. A Weberian researcher would most likely start by…", options:[
      {t:"talking with the young people to understand what the cafés mean to them: friendship, escape, gaming, a place of their own.", ok:true, why:"Yes. Weber’s verstehen means grasping the meaning of an action from the actor’s point of view."},
      {t:"counting café visits and ignoring what the visitors say about them.", why:"Counting can be useful, but a Weberian approach insists on understanding meaning too."},
      {t:"assuming the cafés exist because they serve a function for society as a whole.", why:"That is closer to a functionalist assumption, not Weber’s focus on meaning."},
      {t:"deciding in advance that the young people are wasting their time.", why:"That’s a value judgement, which Weber argued researchers should keep out of their analysis."}
    ]},
    {id:"e2u1-l2-x7", type:"mcq", q:"Why were Harriet Martineau and W. E. B. Du Bois long left out of standard histories of sociology?", options:[
      {t:"Academic life and its gatekeepers excluded or overlooked women and Black scholars, regardless of the quality of their work.", ok:true, why:"Right. Their research was rigorous and pioneering; exclusion based on gender and race kept it out of the mainstream story for decades."},
      {t:"They didn’t do any empirical research.", why:"Both did: Martineau wrote an early guide to observing society, and Du Bois led major empirical studies."},
      {t:"They lived after the discipline was already complete.", why:"Martineau was contemporary with Comte, and Du Bois with Weber. They helped build the discipline."},
      {t:"They wrote only fiction.", why:"Martineau did write fiction, but also major non-fiction social analysis. Du Bois wrote extensive social research."}
    ]}
   ],
   apply:{intro:"Connect the founders’ questions to your world. Use reliable sources such as encyclopedias, libraries or university websites.", tasks:[
     {t:"Find a founder’s question in today’s news", how:["Pick a current news story about work, cities, technology, religion or inequality.","Decide which founder’s question it fits best: Marx (who gains and who loses?), Durkheim (what holds people together?), Weber (what does this mean to people?), Du Bois (how does race shape life chances?) or Ibn Khaldun (how does group cohesion relate to power?).","Write two or three sentences on what that founder might notice."], write:"The story… The founder I chose… What they might notice…"},
     {t:"Look for sociology’s roots where you live", how:["Find one thinker from your own region, language or tradition who wrote about how society works. A library, an encyclopedia or a university sociology department page can help.","Note who they were, roughly when they lived, and one idea they had.","Ask whether that idea appears in this lesson’s European-centred story, and why or why not."], write:"Thinker… When… Their idea… Is it in the usual story?…"},
     {t:"Two ways of asking", how:["Choose a topic you care about, such as working from home, a local festival or a sports club.","Write one positivist research question (about patterns, numbers or causes).","Write one interpretive question (about meanings and experiences).","Note which kind of data each would need."], write:"Topic… Positivist question… Interpretive question… Data each would need…"}
   ], proof:"Notes linking a news story to one founder’s question, a short profile of a social thinker from your own region or tradition, and a positivist and an interpretive question about the same topic."},
   read:[
     {book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology” (on LibreTexts: 1.3)", note:"Covers Ibn Khaldun, Comte, Martineau, Marx, Spencer, Simmel, Durkheim, Weber, Du Bois, Addams and others."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u1-l3", title:"The big lenses", minutes:55,
   goals:[
     "Explain what a theoretical perspective is and tell macro-level from micro-level analysis",
     "Use manifest functions, latent functions and dysfunctions to analyse an institution",
     "Apply functionalism, conflict theory, symbolic interactionism, feminist theory and intersectionality to the same example",
     "State a main strength and a main critique of each perspective"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Section 1.3 introduces sociology’s main theoretical perspectives: lenses that each ask a different question about society. The book develops three of them; this guide adds feminist theory and intersectionality, which the exercises also use.",
      {look:[
        "What is the difference between a theory and a paradigm, and which perspectives work at the macro or micro level?",
        "What do functionalists mean by manifest functions, latent functions and dysfunctions?",
        "What question does conflict theory ask, and who widened it beyond Marx’s focus on class?",
        "How does symbolic interactionism explain meaning, and what is dramaturgical analysis? Note the main criticism the book gives of each perspective."
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "A [[theory]] is a proposed explanation of social life, tested against evidence; a [[paradigm]] is a broader framework of assumptions and questions. Like a road map and a transit map of one city, each perspective shows something the others hide, and none is the single “true” view. (1.3)",
        "[[structural-functionalism|Structural functionalism]] (macro) sees society as interrelated parts that each help keep the whole stable; Parsons saw a healthy society as balanced, a state later sociologists called *dynamic equilibrium*. Merton separated [[manifest-function|manifest functions]] (intended: schools teach skills), [[latent-function|latent functions]] (unintended: students meet lifelong friends) and [[dysfunction|dysfunctions]] (harmful: exam pressure that pushes students out). **Critique:** weak on change and conflict, sometimes circular, and it can make inequality look necessary. (1.3)",
        "[[conflict-theory|Conflict theory]] (macro) sees society as competition for scarce resources and asks **who benefits, and who pays?** It starts with Marx; Weber added status and political power to economic class, and Du Bois analysed racial inequality. **Critique:** it can overlook the cooperation and stability that are also real. (1.3)",
        "[[symbolic-interactionism|Symbolic interactionism]] (micro) holds that people act on meanings, and that meanings are made and changed in interaction: white means weddings in many Western traditions and has long meant mourning in parts of East Asia. Mead is seen as its founder; his student Herbert Blumer named it in 1937. **Critique:** it can neglect large structures and power, and its small studies are hard to generalise or keep objective. (1.3)",
        "Erving Goffman’s [[dramaturgy|dramaturgical analysis]] treats life as theatre (*The Presentation of Self in Everyday Life*, 1956, expanded 1959). On the **front stage** we manage the impression we give, like a shop assistant’s cheerful greeting; **backstage** we relax, like staff joking in the break room. (1.3; the stage labels are added)",
        "[[feminist-theory|Feminist theory]] puts gender at the centre: how societies organise relationships between genders and produce inequality. The book places it in the conflict tradition, citing Janet Saltzman Chafetz. It works at both levels, from pay gaps and laws to who does unpaid care at home. **Critique:** early versions treated white, middle-class women’s experience as universal. (1.3)",
        "[[intersectionality|Intersectionality]], a term introduced by the legal scholar Kimberlé Crenshaw in 1989, holds that categories such as gender, race, class, age and migration status combine, creating experiences no single category explains. A hospital with many women senior doctors and many minority-ethnic senior doctors may still have almost no senior doctors who are both. **Debate:** measuring many combined groups is hard, and some argue the idea is stretched too widely. (beyond the book)",
        "The perspectives aren’t rival answers to one quiz question. Each asks something different, so researchers combine them: functionalism for what a festival does for a town, conflict theory for who is priced out of it. The book also mentions critical theory and critical race theory. (1.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 450"><path class="d-ink" d="M110 100 L110 140" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><path class="d-ink" d="M230 100 L230 140" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><path class="d-ink" d="M110 200 L110 240" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><path class="d-ink" d="M230 200 L230 240" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><path class="d-ink" d="M170 200 L170 344" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><text class="s" x="170" y="16" text-anchor="middle">macro lenses: big structures</text><rect class="d-lup" x="6" y="24" width="160" height="76" rx="10" stroke-width="1.5"/><text x="86" y="47" text-anchor="middle">Functionalism</text><text class="s" x="86" y="68" text-anchor="middle">What does it do</text><text class="s" x="86" y="86" text-anchor="middle">for society?</text><rect class="d-rose" x="174" y="24" width="160" height="76" rx="10" stroke-width="1.5"/><text x="254" y="47" text-anchor="middle">Conflict theory</text><text class="s" x="254" y="68" text-anchor="middle">Who gains and</text><text class="s" x="254" y="86" text-anchor="middle">who loses?</text><rect class="d-panel" x="70" y="140" width="200" height="60" rx="14" stroke-width="2"/><text x="170" y="166" text-anchor="middle">Food delivery app</text><text class="s" x="170" y="186" text-anchor="middle">one everyday thing</text><text class="s" x="52" y="228" text-anchor="middle">both levels</text><text class="s" x="288" y="228" text-anchor="middle">both levels</text><rect class="d-gold" x="6" y="240" width="160" height="76" rx="10" stroke-width="1.5"/><text x="86" y="263" text-anchor="middle">Feminist theory</text><text class="s" x="86" y="284" text-anchor="middle">How does gender</text><text class="s" x="86" y="302" text-anchor="middle">shape the work?</text><rect class="d-panel" x="174" y="240" width="160" height="76" rx="10" stroke-width="1.5"/><rect class="d-soft" x="174" y="240" width="160" height="76" rx="10" stroke-width="1.5"/><text x="254" y="263" text-anchor="middle">Intersectionality</text><text class="s" x="254" y="284" text-anchor="middle">How do gender, class</text><text class="s" x="254" y="302" text-anchor="middle">and migration combine?</text><rect class="d-sage" x="60" y="344" width="220" height="76" rx="10" stroke-width="1.5"/><text x="170" y="367" text-anchor="middle">Symbolic interactionism</text><text class="s" x="170" y="388" text-anchor="middle">What do ratings and</text><text class="s" x="170" y="406" text-anchor="middle">messages mean?</text><text class="s" x="170" y="440" text-anchor="middle">micro lens: everyday interaction</text></svg>', alt:"A central box labelled Food delivery app, connected by dashed lines to five lens boxes. Above it, two macro lenses about big structures: Functionalism (what does it do for society?) and Conflict theory (who gains and who loses?). Below it, two lenses that work at both levels: Feminist theory (how does gender shape the work?) and Intersectionality (how do gender, class and migration combine?). At the bottom, the micro lens about everyday interaction: Symbolic interactionism (what do ratings and messages mean?).", cap:"Five perspectives looking at one everyday thing. Each asks a different question, so each notices different things."}
    ]},
    {h:"Key terms", body:[
      {terms:["theory","paradigm","structural-functionalism","manifest-function","latent-function","dysfunction","conflict-theory","symbolic-interactionism","dramaturgy","feminist-theory","intersectionality"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"Section 1.3 gives feminist theory one sentence and doesn’t mention intersectionality; the big ideas above fill that gap. Crenshaw showed that US anti-discrimination law treated race and sex as separate categories, so it could miss discrimination aimed specifically at Black women. The sociologist Patricia Hill Collins later described overlapping systems of power as a “matrix of domination” (*Black Feminist Thought*, 1990). The book applies three lenses to US farming; the diagram applies all five to food delivery apps, found from Jakarta to São Paulo to Nairobi. In many large cities many riders are migrants, so an intersectional lens asks how gender, legal status and language combine to shape their risks."}
    ]}
   ],
   try:[
    {id:"e2u1-l3-x1", type:"sort", q:"Which perspective does each research question come from most clearly?", buckets:["Structural functionalism","Conflict theory","Symbolic interactionism","Feminist theory"], items:[
      {t:"How do national holidays help bind a diverse population together?", b:0, why:"Asking how a practice contributes to social stability and cohesion is a functionalist question."},
      {t:"Which groups gain and which lose when a city turns a public market into a shopping mall?", b:1, why:"Asking who benefits and who pays in a competition for space and resources is conflict theory."},
      {t:"How do new members of an online gaming group learn what different emojis mean there?", b:2, why:"Studying how meanings are learned through everyday interaction is symbolic interactionism."},
      {t:"Why do women in many countries spend more hours on unpaid care than men, even when both work full time?", b:3, why:"Putting gender and the division of care work at the centre is a feminist question."},
      {t:"What do families gain when grandparents help raise children, and how does this keep households running?", b:0, why:"Asking how an arrangement serves the needs of the wider system is a functionalist question."},
      {t:"How do employers keep wages low when there are far more applicants than jobs?", b:1, why:"Focusing on power and competition between groups over money is conflict theory."},
      {t:"How do job applicants manage the impression they give in a video interview?", b:2, why:"Impression management on a “front stage” is Goffman’s dramaturgy, part of symbolic interactionism."},
      {t:"How do school textbooks show men and women in different jobs, and what might girls and boys learn from that?", b:3, why:"Examining how gender roles are represented and taught is a feminist analysis."}
    ]},
    {id:"e2u1-l3-x2", type:"match", q:"Match each concept to the example that shows it.", pairs:[
      ["Manifest function","A university’s stated aim of teaching students a profession","It is the intended, recognised purpose."],
      ["Latent function","Students meet their future business partners at university","It’s a real but unintended consequence."],
      ["Dysfunction","A strict exam system leads many students to drop out and leaves them without qualifications","It has undesirable consequences for how society works."],
      ["Front stage","A shop assistant’s cheerful greeting to customers","Goffman’s front stage is where we perform for an audience."],
      ["Backstage","Staff relaxing and joking in the break room","Backstage is out of the audience’s view, where people drop the performance."],
      ["Intersectionality","Discovering that older migrant women face barriers that older people, migrants or women as a whole don’t face","It reveals experiences produced by the combination of categories."]
    ]},
    {id:"e2u1-l3-x3", type:"sort", q:"Is each study mainly macro-level or micro-level?", buckets:["Macro-level","Micro-level"], items:[
      {t:"Comparing how welfare systems in 20 countries affect child poverty", b:0, why:"Whole national systems compared across countries: macro."},
      {t:"Observing how strangers negotiate space at a busy bus stop", b:1, why:"Face-to-face interaction between a few people: micro."},
      {t:"Tracing how the share of people living in cities changed over a century", b:0, why:"A long-term, society-wide trend: macro."},
      {t:"Recording how a family decides who washes the dishes", b:1, why:"Interaction within a small group: micro."},
      {t:"Analysing how global trade rules affect farmers in different regions", b:0, why:"Large structures operating across countries: macro."},
      {t:"Studying how friends use humour to settle an argument in a group chat", b:1, why:"Small-group interaction and meaning: micro."}
    ]},
    {id:"e2u1-l3-x4", type:"mcq", q:"Which critique is most often made of structural functionalism?", options:[
      {t:"It struggles to explain social change and can make unequal arrangements look necessary.", ok:true, why:"Right. By focusing on stability and function, it can miss conflict and change, and treat inequality as if it served everyone."},
      {t:"It focuses so much on conflict that it ignores stability.", why:"That is the usual critique of conflict theory, the opposite perspective."},
      {t:"It studies only tiny face-to-face interactions.", why:"Functionalism is a macro perspective. That critique fits symbolic interactionism better."},
      {t:"It refuses to consider institutions such as schools or families.", why:"Institutions are exactly what functionalism analyses."}
    ]},
    {id:"e2u1-l3-x5", type:"mcq", q:"Lucía studies a hospital’s promotion data. Women are well represented among senior doctors, and so are doctors from minority ethnic groups, but almost no senior doctors are women from minority ethnic groups. Which concept best explains why she needed to look at the categories together?", options:[
      {t:"Intersectionality", ok:true, why:"Yes. Looking at gender and ethnicity separately hid a gap that only appears where they combine. This mirrors the problem Crenshaw identified in 1989."},
      {t:"Latent function", why:"A latent function is an unintended consequence of a social pattern. It doesn’t explain why categories must be combined."},
      {t:"Dramaturgy", why:"Dramaturgy is about performing for audiences, not about combined categories in data."},
      {t:"Dynamic equilibrium", why:"That functionalist idea is about society staying stable while adjusting. It doesn’t address hidden gaps between categories."}
    ]},
    {id:"e2u1-l3-x6", type:"spot", q:"Oluwaseun wrote these notes before an exam. Tap each statement that is **wrong**.", ask:"wrong", parts:[
      {t:"Functionalism asks how parts of society contribute to stability.", flag:false, why:"Correct: that is its central question."},
      " ",
      {t:"Conflict theory asks who benefits and who pays.", flag:false, why:"Correct: competition for limited resources is its focus."},
      " ",
      {t:"Symbolic interactionism mainly studies how the global economy distributes wealth between classes.", flag:true, why:"That’s a macro, conflict-style question. Symbolic interactionism focuses on meaning in everyday interaction."},
      " ",
      {t:"Goffman compared social life to theatre.", flag:false, why:"Correct: that is dramaturgical analysis."},
      " ",
      {t:"Intersectionality was introduced by Karl Marx.", flag:true, why:"The term was introduced by Kimberlé Crenshaw in 1989."},
      " ",
      {t:"Feminist theory works only at the micro level.", flag:true, why:"Feminist theory works at both levels: laws and pay gaps (macro) as well as everyday interaction (micro)."},
      " ",
      {t:"Each perspective notices different things, so they are often used together.", flag:false, why:"Correct. The perspectives complement each other."}
    ]},
    {id:"e2u1-l3-x7", type:"mcq", q:"A town’s annual music festival brings in tourists, but some long-time residents complain they’ve been priced out of the town centre. Which pair of lenses fits this description best?", options:[
      {t:"Functionalism for the festival’s benefits to the town, and conflict theory for who is being priced out", ok:true, why:"Right. The benefits to the economy and community are functionalist observations; the question of who gains and who loses is conflict theory."},
      {t:"Symbolic interactionism for both parts", why:"Interactionism could study what the festival means to people, but the description is about economic benefits and who is priced out."},
      {t:"Dramaturgy for the tourism, and intersectionality for the prices", why:"Neither fits the description well: nothing here is about impression management or combined categories."},
      {t:"No sociological lens applies to festivals", why:"Every perspective can analyse festivals; they’re rich social events."}
    ]}
   ],
   apply:{intro:"Use the lenses on things in your own life. These are observation and reflection tasks; keep them respectful and don’t record anyone.", tasks:[
     {t:"Five lenses on one familiar thing", how:["Choose something ordinary from your life: a local market, a family group chat, a sports club, a religious festival, a school.","Write one question about it for each lens: functionalism, conflict theory, symbolic interactionism, feminist theory and intersectionality.","Answer two of your questions briefly from what you already know.","Note which lens taught you something new."], write:"The thing I chose… My five questions… Two short answers… The most surprising lens…"},
     {t:"Your own front stage and backstage", how:["Over one day, notice moments when you are on a “front stage” (at work, in class, on a call, posting online) and moments when you are “backstage”.","For two front-stage moments, note what you did to manage the impression you gave: clothes, words, tone, timing.","Reflect only on yourself; don’t write about other people’s private behaviour."], write:"Front-stage moment 1… What I did… Front-stage moment 2… Backstage…"},
     {t:"Manifest, latent and dysfunctional", how:["Choose an institution or event: a wedding, a national holiday, a school uniform rule, a community sports league.","List its manifest functions (what it’s meant to do).","List at least two latent functions (unintended effects, good or bad).","List one possible dysfunction, and who it affects."], write:"Institution or event… Manifest… Latent… Dysfunction, and who it affects…"}
   ], proof:"Five lens questions about one familiar thing, reflections on your own front-stage and backstage behaviour, and a list of manifest functions, latent functions and a dysfunction for one institution or event."},
   read:[
     {book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology” (on LibreTexts: 1.4 “Theoretical Perspectives”)", note:"Includes the comparison table of perspectives and the “Farming and Locavores” example applying all three classic lenses to food. Intersectionality isn’t covered there; this lesson adds it."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u1-l4", title:"How sociologists know things", minutes:55,
   goals:[
     "Describe the six steps of the scientific method as sociologists use it",
     "Write a testable hypothesis and identify its independent and dependent variables",
     "Turn an abstract concept into an operational definition",
     "Explain why correlation doesn’t prove causation, and tell reliability from validity",
     "Describe the interpretive framework and the debate about value neutrality"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Section 2.1 explains how sociologists turn a question into research: the scientific method, variables and measurement, and the interpretive alternative. The start of Section 2.3 adds Weber’s ideal of value neutrality. Together they answer one question: what makes a claim about society trustworthy?",
      {look:[
        "What are the six steps of the scientific method, in the book’s order? (2.1)",
        "What are independent and dependent variables, and why do researchers need operational definitions? (2.1)",
        "How does the book define reliability and validity? (2.1)",
        "How does the interpretive framework differ from the scientific method, and what did Weber mean by value neutrality? (2.1, 2.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "Sociology tests ideas against [[empirical-evidence|empirical evidence]]. The book’s six steps: ask a question, review the literature, formulate a hypothesis, design and conduct a study, draw conclusions, report results. Findings raise new questions, so the process is a cycle. (2.1)",
        "A [[hypothesis]] is a testable statement about how [[variable|variables]] are related, and evidence must be able to show it is wrong. The [[independent-variable|independent variable]] is the presumed cause and the [[dependent-variable|dependent variable]] the effect. Rewrite it as “if X changes, Y changes”: in “night-shift workers report more health problems”, shift type is X and health problems are Y. (2.1)",
        "An [[operational-definition|operational definition]] says exactly how an abstract idea will be measured: “social isolation” as the number of conversations a person had last week, not “feeling isolated”. Clear definitions let others repeat a study, but every definition leaves something out. (2.1)",
        "[[reliability|Reliability]] is consistency: would a repeat of the study give the same results? [[validity|Validity]] is whether it measures what it is meant to. A scale that always reads 2 kg heavy is reliable but not valid. Counting weekly service attendance undercounts religiosity in faiths without weekly gatherings: a validity problem. (2.1)",
        "A [[correlation]] means two variables change together, in the same direction (positive) or opposite directions (negative). [[causation|Causation]] means one actually changes the other. Claiming cause needs association, time order (does volunteering make people happy, or do happy people volunteer?) and no better explanation. A hidden third variable driving both creates a [[spurious-correlation|spurious correlation]]. (beyond the book)",
        "The [[interpretive-framework|interpretive framework]] seeks to understand social worlds from participants’ point of view, often starting without a hypothesis and producing descriptive, narrative results; it grows from Weber’s verstehen. Critical sociology goes further, aiming to expose inequality and help change it. (2.1)",
        "Weber’s [[value-neutrality|value neutrality]] means staying impartial while doing and interpreting research, and reporting all significant findings, even those that contradict your own views. Many sociologists doubt full objectivity is possible, so they rely on transparency, peer review and replication. (2.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e2u1-l4-rca" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="14" y="12" width="140" height="54" rx="10" stroke-width="1.5"/><text x="84" y="35" text-anchor="middle">1 Ask a</text><text x="84" y="53" text-anchor="middle">question</text><rect class="d-lup" x="14" y="102" width="140" height="54" rx="10" stroke-width="1.5"/><text x="84" y="125" text-anchor="middle">2 Review the</text><text x="84" y="143" text-anchor="middle">literature</text><rect class="d-gold" x="14" y="192" width="140" height="54" rx="10" stroke-width="1.5"/><text x="84" y="215" text-anchor="middle">3 Form a</text><text x="84" y="233" text-anchor="middle">hypothesis</text><rect class="d-sage" x="186" y="192" width="140" height="54" rx="10" stroke-width="1.5"/><text x="256" y="215" text-anchor="middle">4 Design and</text><text x="256" y="233" text-anchor="middle">conduct</text><rect class="d-sage" x="186" y="102" width="140" height="54" rx="10" stroke-width="1.5"/><text x="256" y="125" text-anchor="middle">5 Draw</text><text x="256" y="143" text-anchor="middle">conclusions</text><rect class="d-rose" x="186" y="12" width="140" height="54" rx="10" stroke-width="1.5"/><text x="256" y="35" text-anchor="middle">6 Report</text><text x="256" y="53" text-anchor="middle">results</text><path class="d-ink" d="M84 68 L84 99" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><path class="d-ink" d="M84 158 L84 189" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><path class="d-ink" d="M156 219 L183 219" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><path class="d-ink" d="M256 190 L256 159" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><path class="d-ink" d="M256 100 L256 69" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><path class="d-ink" d="M184 39 L157 39" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-rca)"/><text class="s" x="170" y="272" text-anchor="middle">Results raise new questions,</text><text class="s" x="170" y="290" text-anchor="middle">so the process is a cycle</text></svg>', alt:"Six boxes arranged in a loop with arrows: down the left side 1 Ask a question, 2 Review the literature, 3 Form a hypothesis; across to the right side and up 4 Design and conduct, 5 Draw conclusions, 6 Report results; and back across the top to 1. Below: results raise new questions, so the process is a cycle.", cap:"The research cycle. Findings feed new questions, so research rarely ends at step 6."},
      {fig:'<svg viewBox="0 0 340 302"><defs><marker id="e2u1-l4-tva" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="80" y="8" width="180" height="54" rx="10" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Hot weather</text><text class="s" x="170" y="50" text-anchor="middle">the hidden third variable</text><rect class="d-lup" x="6" y="166" width="120" height="54" rx="10" stroke-width="2"/><text x="66" y="191" text-anchor="middle">Ice cream</text><text x="66" y="208" text-anchor="middle">sales</text><rect class="d-lup" x="214" y="166" width="120" height="54" rx="10" stroke-width="2"/><text x="274" y="191" text-anchor="middle">Sunscreen</text><text x="274" y="208" text-anchor="middle">sales</text><path class="d-ink" d="M130 64 L72 162" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-tva)"/><path class="d-ink" d="M210 64 L268 162" stroke-width="2" fill="none" marker-end="url(#e2u1-l4-tva)"/><text class="s" x="92" y="112" text-anchor="end">causes</text><text class="s" x="248" y="112">causes</text><path class="d-rose" d="M130 193 L210 193" stroke-width="2" fill="none" stroke-dasharray="6 5"/><text class="s" x="170" y="184" text-anchor="middle">correlated</text><text class="s" x="170" y="244" text-anchor="middle">but neither causes the other</text><text class="s" x="170" y="276" text-anchor="middle">Example adapted from the</text><text class="s" x="170" y="293" text-anchor="middle">Australian Bureau of Statistics</text></svg>', alt:"Hot weather at the top, labelled the hidden third variable, has arrows labelled causes pointing down to Ice cream sales and to Sunscreen sales. A dashed line between the two sales boxes is labelled correlated but neither causes the other.", cap:"A spurious correlation. The two sales figures move together because both respond to the weather."}
    ]},
    {h:"Key terms", body:[
      {terms:["empirical-evidence","hypothesis","independent-variable","dependent-variable","operational-definition","reliability","validity","correlation","causation","spurious-correlation","interpretive-framework","value-neutrality"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"The book barely discusses correlation and causation, so the big ideas add them. The Australian Bureau of Statistics’ example: ice cream and sunscreen sales rise together because hot weather drives both. Experiments are the strongest test of cause, because the researcher changes X and keeps other things equal (Lesson 5). To compare places of different sizes, use **rates**, not raw counts: rate = events ÷ population × 100,000. So 12 thefts among 40,000 people is 30 per 100,000, higher than 30 thefts among 150,000 (20 per 100,000); Durkheim compared suicide rates for the same reason. When reading a news claim, also watch for samples that choose themselves (an online poll on a pet-care website) and overgeneralisation (“everyone everywhere”)."},
      {fix:"Two slips in Section 2.1. Table 2.1 lists “Observation” as the independent variable for “the greater the amount of media coverage, the higher the public awareness”; the independent variable is the amount of media coverage. And one sentence says reliability makes it likely that what happens to one person will happen to everyone in a group. That describes generalisability. Reliability means consistency: a repeated study gets the same results, as the book’s own definition says."}
    ]}
   ],
   try:[
    {id:"e2u1-l4-x1", type:"order", q:"Put the steps of the scientific method, as your textbook lists them, in order.", items:[
      {t:"Ask a question or find a research topic", why:"Research starts with a question that evidence can answer."},
      {t:"Review the literature", why:"Next, find out what is already known so you can build on it."},
      {t:"Formulate a hypothesis", why:"With the literature in mind, state a testable prediction."},
      {t:"Design and conduct a study", why:"Then choose a method and collect the data."},
      {t:"Draw conclusions", why:"Analyse the data to see whether it supports the hypothesis."},
      {t:"Report results", why:"Finally, share findings and methods so others can check and build on them."}
    ]},
    {id:"e2u1-l4-x2", type:"match", q:"Match each hypothesis to its **independent** variable (the presumed cause).", pairs:[
      ["Workers on night shifts report more health problems than day workers.","Shift type (night or day)","Shift type is what differs between the groups and is presumed to cause the health differences."],
      ["The more languages a city’s schools teach, the more tolerant its students are of other cultures.","Number of languages taught","The number of languages is presumed to influence tolerance, the dependent variable."],
      ["People who live closer to a park visit it more often.","Distance from the park","Distance is presumed to affect how often people visit."],
      ["Households with fast internet are more likely to have someone working from home.","Internet speed","Internet speed is the presumed cause; working from home is the effect."]
    ]},
    {id:"e2u1-l4-x3", type:"spot", q:"Read this news report. Tap each part that contains a **reasoning or research flaw**.", ask:"a flaw", parts:[
      "“A new study shows that ",
      {t:"people who own pets are happier.", flag:false, why:"Reporting that the study found an association is fine in itself. The problems come in how it was gathered and interpreted."},
      " Researchers asked ",
      {t:"2,000 people who answered an online poll on a pet-care website", flag:true, why:"A biased sample: visitors to a pet-care website who choose to answer are not representative of the population, and are likely to be keen pet owners."},
      " to rate their happiness ",
      {t:"on a standard 0–10 life-satisfaction scale.", flag:false, why:"Using a standard, widely used measure is good practice for reliability and comparison."},
      " Pet owners scored higher on average. ",
      {t:"So getting a pet will make you happier.", flag:true, why:"Correlation read as causation. Happier or wealthier people may be more likely to get pets (reverse causation or a third variable such as income or having a garden)."},
      " ",
      {t:"The researchers published their full questionnaire online.", flag:false, why:"Transparency is good practice: others can check the questions."},
      " ",
      {t:"This proves that pets make everyone everywhere happier.”", flag:true, why:"An overgeneralisation: one study with one non-random sample can’t “prove” anything about everyone everywhere."}
    ]},
    {id:"e2u1-l4-x4", type:"number", q:"Town A has 12 reported bicycle thefts a year and 40,000 residents. Town B has 30 thefts and 150,000 residents. What is Town A’s rate of bicycle theft **per 100,000 residents**?", answer:30, tol:0.5, unit:"per 100,000", why:"Rate = (events ÷ population) × 100,000 = (12 ÷ 40,000) × 100,000 = 0.0003 × 100,000 = 30 per 100,000. (Town B: 30 ÷ 150,000 × 100,000 = 20 per 100,000.) So although Town B has more thefts in total, Town A has the higher rate. This is why Durkheim compared rates, not raw numbers.", wrongs:[
      {v:0.0003, tol:0.00005, why:"That’s 12 ÷ 40,000, the rate per person. Multiply by 100,000 to express it per 100,000 residents."},
      {v:3, tol:0.1, why:"That’s the rate per 10,000 residents. The question asks per 100,000, which is ten times bigger."},
      {v:3333, tol:2, why:"You divided the population by the number of thefts (40,000 ÷ 12). Divide thefts by population instead."},
      {v:20, tol:0.5, why:"That’s Town B’s rate. Town A’s rate uses 12 thefts and 40,000 residents."}
    ], hint2:"Divide the number of thefts by the population, then multiply by 100,000."},
    {id:"e2u1-l4-x5", type:"sort", q:"Is each problem mainly about reliability or about validity?", buckets:["Reliability problem (inconsistent results)","Validity problem (measures the wrong thing)"], items:[
      {t:"Two researchers code the same interviews and disagree about half of the codes.", b:0, why:"The measurement isn’t consistent between coders, so results wouldn’t replicate: reliability."},
      {t:"A study measures “health” only by counting doctor visits, although people who can’t afford a doctor visit less.", b:1, why:"Doctor visits reflect access and money as well as health, so the measure doesn’t capture health accurately: validity."},
      {t:"A question’s wording is so vague that people give different answers to it on Monday and Friday.", b:0, why:"The same people give inconsistent answers to the same question: reliability."},
      {t:"A test of “intelligence” uses vocabulary familiar mainly to one region’s children.", b:1, why:"It partly measures familiarity with a dialect or culture, not intelligence: validity."},
      {t:"A survey measures “happiness at work” by asking about salary.", b:1, why:"Salary isn’t the same thing as happiness at work: validity."},
      {t:"A counting tool gives different totals each time it processes the same files.", b:0, why:"Inconsistent results from identical input: reliability."}
    ]},
    {id:"e2u1-l4-x6", type:"mcq", q:"A study finds that neighbourhoods with more cafés have lower crime rates. Ana concludes that opening cafés reduces crime. What is the most important thing she has overlooked?", options:[
      {t:"A third variable, such as neighbourhood wealth, may explain both more cafés and less crime.", ok:true, why:"Right. Wealthier areas may attract cafés and also have lower recorded crime for many other reasons. The correlation may be spurious."},
      {t:"The sample of neighbourhoods was too large.", why:"A larger sample generally makes a correlation more trustworthy, not less. The problem is reading it as cause."},
      {t:"Correlations can never tell researchers anything useful.", why:"Correlations are useful evidence and often the first step. They just don’t prove cause on their own."},
      {t:"Crime and cafés can’t be measured.", why:"Both can be measured, with care. Measurement isn’t the main issue here."}
    ]},
    {id:"e2u1-l4-x7", type:"mcq", q:"Kenji wants to study whether “social isolation” affects older adults’ health. Which is the best operational definition of social isolation?", options:[
      {t:"The number of times in the past week a person had a conversation, in person or by phone, with family, friends or neighbours", ok:true, why:"Yes. It’s concrete, countable and repeatable, so others can use the same measure and compare results."},
      {t:"Feeling isolated", why:"That just repeats the concept without saying how to measure it."},
      {t:"Being old", why:"Age is a different variable. Many older people are not isolated."},
      {t:"Whatever the interviewer thinks after meeting the person", why:"That depends on each interviewer’s judgement, so it wouldn’t be reliable or easy to repeat."}
    ]}
   ],
   apply:{intro:"Practise thinking like a researcher with material from everyday life.", tasks:[
     {t:"Catch a correlation dressed as a cause", how:["Look for a headline or social media post that claims one thing causes another (“coffee drinkers live longer”, “children who play sport earn more”).","Write down the correlation the study actually found.","List at least two possible third variables, and consider whether the cause could run the other way.","Rewrite the headline so it is accurate."], write:"Original headline… What was actually found… Possible third variables… Reverse causation?… My accurate headline…"},
     {t:"Operationalise a concept", how:["Choose an abstract idea: community spirit, digital skills, work–life balance, trust in neighbours.","Write three different operational definitions for it.","For each, note one reliability concern and one validity concern."], write:"Concept… Definition 1… Definition 2… Definition 3… Reliability and validity concerns…"},
     {t:"Write a testable hypothesis about your area", how:["Pick something you’ve noticed in your community, such as which streets have more people out walking in the evening.","Write a hypothesis, then name the independent and dependent variables.","Say how you would measure each variable, and what result would show your hypothesis is wrong."], write:"Hypothesis… Independent variable… Dependent variable… How I’d measure them… What would prove me wrong…"}
   ], proof:"An accurately rewritten headline with possible third variables, three operational definitions of one concept with their weaknesses, and a testable hypothesis with its variables and a way it could be proved wrong."},
   read:[
     {book:"soc", where:"Chapter 2, Section 2.1 “Approaches to Sociological Research” (on LibreTexts: 2.2)", note:"Covers the six steps of the scientific method, variables, operational definitions, reliability and validity, the interpretive framework and critical sociology."},
     {book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (on LibreTexts: 2.4)", note:"For Weber and value neutrality. The textbook covers correlation and causation only briefly; this lesson adds more."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u1-l5", title:"Research methods and ethics", minutes:60,
   goals:[
     "Choose between surveys, field research, experiments and secondary data to fit a research question",
     "Explain populations, samples and why random sampling matters",
     "Spot badly worded survey questions",
     "Apply the core principles of research ethics: informed consent, confidentiality and anonymity, avoiding harm, and ethics review"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Section 2.2 surveys sociology’s main research methods, and Section 2.3 the ethics that govern them. The key skill is matching a method to a question, then protecting the people who make the research possible.",
      {look:[
        "What are a population, a sample and a random sample, and what questions do surveys answer well? (2.2)",
        "How do participant observation, ethnography and case studies differ, and what is the Hawthorne effect? (2.2)",
        "How does an experiment use experimental and control groups, and what are secondary data and content analysis? (2.2)",
        "Why do ethical standards exist, and which principles does the ASA Code of Ethics set out? (2.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "No method is best for everything: fit it to the question. **Surveys** answer how many and how common; **field research** answers how and why in real settings; **experiments** test whether X causes Y; **secondary data** shows big trends and comparisons. Researchers collect primary data themselves or reuse data someone else gathered. (2.2)",
        "A [[survey]] asks people about their behaviour or views through questionnaires or interviews. It studies a [[sample]] drawn from a [[population-research|population]]; in a [[random-sample|random sample]] everyone has the same chance of being picked. How people are chosen matters more than how many: a 50,000-vote website poll where visitors pick themselves can be less accurate than 1,000 randomly chosen people. (2.2)",
        "Non-response can bias even a random sample: response rate = completed ÷ invited × 100, so 300 replies from 1,200 households is 25%. Wording matters too. Avoid **leading** questions (“Don’t you agree…?”), **double-barrelled** ones that ask two things at once, **loaded** words (“lazy bureaucrats”) and **assumptions** (“How often do you park your car?”). (beyond the book)",
        "Field research studies people in natural settings. In [[participant-observation|participant observation]] the researcher joins routine activities (Barbara Ehrenreich’s *Nickel and Dimed*); in [[ethnography]] they immerse themselves in a whole community (the Lynds’ *Middletown*, 1929); Dorothy E. Smith’s institutional ethnography traces how organisations shape everyday life; a [[case-study|case study]] examines one case in depth. Beware the [[hawthorne-effect|Hawthorne effect]]: people behave differently because they know they’re being studied. (2.2)",
        "An [[experiment]] changes the independent variable for an experimental group but not for a control group. Random assignment makes the groups alike in other ways, so experiments are the strongest test of cause. They run in labs or in real life: in a 1971 US study, drivers with clean records who displayed Black Panther Party stickers got so many tickets that it was stopped early. But many questions can’t ethically be tested. (2.2)",
        "[[secondary-data|Secondary data]] (censuses, official statistics, archives) and [[content-analysis|content analysis]], which systematically codes texts and media, are **nonreactive**: they can’t change anyone’s behaviour. The catch is that the data was collected for another purpose. (2.2)",
        "Research has harmed people, as in the Tuskegee syphilis study (1932–1972) and Laud Humphreys’ covert study of men seeking sex with men in public toilets. Today’s principles include [[informed-consent|informed consent]], protection from harm, [[confidentiality]], honest reporting and disclosure of funding. (2.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 466"><defs><marker id="e2u1-l5-sma" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="20" text-anchor="middle">Population</text><text class="s" x="170" y="38" text-anchor="middle">everyone the study is about</text><rect class="d-panel" x="45" y="48" width="250" height="210" rx="12" stroke-width="1.5"/><rect class="d-rose" x="49" y="52" width="122" height="66" rx="8" stroke-width="2" stroke-dasharray="6 4"/><circle class="d-lup" cx="65" cy="68" r="9" stroke-width="1.5"/><circle class="d-lup" cx="95" cy="68" r="9" stroke-width="1.5"/><circle class="d-lup" cx="125" cy="68" r="9" stroke-width="1.5"/><circle class="d-lup" cx="155" cy="68" r="9" stroke-width="1.5"/><circle class="d-lup" cx="185" cy="68" r="9" stroke-width="1.5"/><circle class="d-sage" cx="215" cy="68" r="9" stroke-width="1.5"/><circle class="d-sage" cx="245" cy="68" r="9" stroke-width="1.5"/><circle class="d-sage" cx="275" cy="68" r="9" stroke-width="1.5"/><circle class="d-lup" cx="65" cy="102" r="9" stroke-width="1.5"/><circle class="d-lup" cx="95" cy="102" r="9" stroke-width="1.5"/><circle class="d-lup" cx="125" cy="102" r="9" stroke-width="1.5"/><circle class="d-lup" cx="155" cy="102" r="9" stroke-width="1.5"/><circle class="d-lup" cx="185" cy="102" r="9" stroke-width="1.5"/><circle class="d-sage" cx="215" cy="102" r="9" stroke-width="1.5"/><circle class="d-sage" cx="245" cy="102" r="9" stroke-width="1.5"/><circle class="d-sage" cx="275" cy="102" r="9" stroke-width="1.5"/><circle class="d-lup" cx="65" cy="136" r="9" stroke-width="1.5"/><circle class="d-lup" cx="95" cy="136" r="9" stroke-width="1.5"/><circle class="d-lup" cx="125" cy="136" r="9" stroke-width="1.5"/><circle class="d-lup" cx="155" cy="136" r="9" stroke-width="1.5"/><circle class="d-lup" cx="185" cy="136" r="9" stroke-width="1.5"/><circle class="d-sage" cx="215" cy="136" r="9" stroke-width="1.5"/><circle class="d-sage" cx="245" cy="136" r="9" stroke-width="1.5"/><circle class="d-sage" cx="275" cy="136" r="9" stroke-width="1.5"/><circle class="d-gold" cx="65" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="95" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="125" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="155" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="185" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="215" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="245" cy="170" r="9" stroke-width="1.5"/><circle class="d-lup" cx="275" cy="170" r="9" stroke-width="1.5"/><circle class="d-gold" cx="65" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="95" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="125" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="155" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="185" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="215" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="245" cy="204" r="9" stroke-width="1.5"/><circle class="d-lup" cx="275" cy="204" r="9" stroke-width="1.5"/><circle class="d-gold" cx="65" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="95" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="125" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="155" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="185" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="215" cy="238" r="9" stroke-width="1.5"/><circle class="d-gold" cx="245" cy="238" r="9" stroke-width="1.5"/><circle class="d-lup" cx="275" cy="238" r="9" stroke-width="1.5"/><circle class="d-ink" cx="95" cy="68" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="245" cy="102" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="155" cy="136" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="65" cy="170" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="215" cy="170" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="125" cy="204" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="275" cy="204" r="13" fill="none" stroke-width="2"/><circle class="d-ink" cx="185" cy="238" r="13" fill="none" stroke-width="2"/><path class="d-ink" d="M130 262 L92 292" stroke-width="2" fill="none" marker-end="url(#e2u1-l5-sma)"/><path class="d-ink" d="M210 262 L248 292" stroke-width="2" fill="none" marker-end="url(#e2u1-l5-sma)"/><rect class="d-sage" x="6" y="296" width="160" height="120" rx="12" stroke-width="1.5"/><text x="86" y="318" text-anchor="middle">Random sample</text><text class="s" x="86" y="336" text-anchor="middle">(circled)</text><circle class="d-lup" cx="23" cy="360" r="6" stroke-width="1.5"/><circle class="d-sage" cx="41" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="59" cy="360" r="6" stroke-width="1.5"/><circle class="d-gold" cx="77" cy="360" r="6" stroke-width="1.5"/><circle class="d-gold" cx="95" cy="360" r="6" stroke-width="1.5"/><circle class="d-gold" cx="113" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="131" cy="360" r="6" stroke-width="1.5"/><circle class="d-gold" cx="149" cy="360" r="6" stroke-width="1.5"/><text class="s" x="86" y="388" text-anchor="middle">everyone had an</text><text class="s" x="86" y="405" text-anchor="middle">equal chance</text><rect class="d-rose" x="174" y="296" width="160" height="120" rx="12" stroke-width="1.5"/><text x="254" y="318" text-anchor="middle">Convenience</text><text class="s" x="254" y="336" text-anchor="middle">sample (boxed)</text><circle class="d-lup" cx="191" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="209" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="227" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="245" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="263" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="281" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="299" cy="360" r="6" stroke-width="1.5"/><circle class="d-lup" cx="317" cy="360" r="6" stroke-width="1.5"/><text class="s" x="254" y="388" text-anchor="middle">only people</text><text class="s" x="254" y="405" text-anchor="middle">easy to reach</text><text class="s" x="170" y="438" text-anchor="middle">Shades are different groups. Only the</text><text class="s" x="170" y="456" text-anchor="middle">random sample keeps the population’s mix.</text></svg>', alt:"A population of 48 dots in three shades representing different groups. Eight scattered dots are circled as a random sample, which keeps a mix of shades similar to the population. A box around eight neighbouring dots in one corner marks a convenience sample, which contains only one shade.", cap:"A random sample keeps the population’s mix. A convenience sample of people who are easy to reach can miss whole groups."}
    ]},
    {h:"Key terms", body:[
      {terms:["survey","sample","random-sample","participant-observation","ethnography","hawthorne-effect","experiment","secondary-data","content-analysis","informed-consent","confidentiality","anonymity"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"Section 2.3 lists ethical principles but explains few. Informed consent means agreeing voluntarily after being told, in plain words, what a study involves, its risks and that you can stop at any time. With **confidentiality** the researcher knows who said what but protects it (invented names, identifying details removed); with [[anonymity]] even the researcher can’t link answers to a person. Deception is allowed only when risk is minimal, there is no other way, an [[ethics-committee|ethics review]] approves it and participants are **debriefed** afterwards. That review happens before any data is collected: an institutional review board (IRB) in the US, a research ethics committee in many other countries. Public online posts still belong to people, and quoting them word for word can identify them. The Hawthorne effect is named after 1920s–30s studies at the Western Electric Hawthorne Works near Chicago. Combining methods (**mixed methods**) and checking one source against another (**triangulation**) covers each method’s weak spots."},
      {fix:"The book says the ASA Code of Ethics was established in 1905 and revised in 1997. In fact 1905 is when the American Sociological Association itself was founded, and the current Code of Ethics was approved in June 2018."}
    ]}
   ],
   try:[
    {id:"e2u1-l5-x1", type:"sort", q:"Which method fits each research question best?", buckets:["Survey","Field research","Experiment","Secondary data or content analysis"], items:[
      {t:"What percentage of adults in a country trust their national news media?", b:0, why:"“What percentage” of a large population calls for a survey of a representative sample."},
      {t:"How do new nurses learn the unwritten rules of a hospital ward?", b:1, why:"Unwritten rules learned in a real setting are best seen through participant observation or ethnography."},
      {t:"Does sending a reminder text increase attendance at free health checks?", b:2, why:"A cause-and-effect question: compare a randomly assigned group that gets the text with a control group that doesn’t."},
      {t:"How has the share of people living alone changed in a country since 1980?", b:3, why:"A long-term trend is best measured with existing census and official statistics."},
      {t:"How often are older people shown in television adverts, and in what roles?", b:3, why:"Systematically coding existing adverts is content analysis."},
      {t:"What does a weekly community meal mean to the people who attend it?", b:1, why:"Meaning in a real setting calls for observation and in-depth conversation."},
      {t:"Are employers less likely to reply to identical job applications sent under different names?", b:2, why:"A field experiment changes only the name and compares replies, isolating its effect."},
      {t:"How many hours a week do university students in a region spend on paid work?", b:0, why:"Measuring how common something is across a population is a survey question."}
    ]},
    {id:"e2u1-l5-x2", type:"spot", q:"Amara drafted this questionnaire for her neighbourhood association. Tap each question with a **wording problem**.", ask:"a wording problem", parts:[
      {t:"1. How many years have you lived in this neighbourhood?", flag:false, why:"Clear, neutral and answerable."},
      "\n",
      {t:"2. Don’t you agree that the council has neglected our streets?", flag:true, why:"A leading question: it pushes people towards “yes”. Better: “How would you rate the condition of the streets?”"},
      "\n",
      {t:"3. How satisfied are you with street lighting and rubbish collection?", flag:true, why:"Double-barrelled: someone could be happy with one and unhappy with the other. Ask two separate questions."},
      "\n",
      {t:"4. How often do you walk in the neighbourhood after dark? (Never / Rarely / Sometimes / Often)", flag:false, why:"Clear, neutral, with balanced answer options."},
      "\n",
      {t:"5. How often do you park your car on the street?", flag:true, why:"It assumes everyone has a car. Add a filter question first, or a “I don’t have a car” option."},
      "\n",
      {t:"6. Should the lazy bureaucrats at the council finally do their jobs?", flag:true, why:"Loaded, emotional words (“lazy bureaucrats”) bias the answer and may offend respondents."},
      "\n",
      {t:"7. Is there anything else you would like to tell us about living here?", flag:false, why:"A good open-ended question that invites qualitative answers without steering them."}
    ]},
    {id:"e2u1-l5-x3", type:"number", q:"Tomás sends a questionnaire to 1,200 randomly chosen households. 300 complete it. What is the **response rate**, as a percentage?", answer:25, tol:0.1, unit:"%", why:"Response rate = completed ÷ invited × 100 = 300 ÷ 1,200 × 100 = 25%. A low response rate is a warning sign: if the 900 who didn’t reply differ from those who did, the results may be biased even though the original sample was random.", wrongs:[
      {v:0.25, tol:0.001, why:"That’s the proportion (300 ÷ 1,200). Multiply by 100 to get a percentage."},
      {v:400, tol:0.5, why:"You divided 1,200 by 300. The response rate is completed questionnaires divided by questionnaires sent."},
      {v:75, tol:0.1, why:"That’s the non-response rate (900 of 1,200 didn’t reply). The response rate is the share who did."},
      {v:4, tol:0.01, why:"That’s 1,200 ÷ 300. Divide the completed questionnaires by those sent, then multiply by 100."}
    ], hint2:"Divide the number who completed it by the number invited, then multiply by 100."},
    {id:"e2u1-l5-x4", type:"sort", q:"Is each research plan ethically acceptable as described, or does it need to change?", buckets:["Acceptable as described","Needs to change"], items:[
      {t:"Participants read a plain-language information sheet, sign a consent form and are told they can stop at any time.", b:0, why:"This is standard informed consent with a clear right to withdraw."},
      {t:"A researcher secretly records conversations in a staff room to study workplace gossip.", b:1, why:"Secret recording of private conversations without consent violates privacy and informed consent."},
      {t:"Interview quotes are published with names replaced and identifying details such as exact job titles removed.", b:0, why:"This protects confidentiality, as ethics codes require."},
      {t:"A study of teenagers collects data from 15-year-olds without asking parents or guardians, against local rules.", b:1, why:"Research with minors usually needs guardian permission as well as the young person’s agreement, following local law and ethics rules."},
      {t:"An online study tells participants it is about “memory” when it is really about racial attitudes, with no ethics review or debriefing.", b:1, why:"Deception is only allowed in rare cases with ethics approval and debriefing. Here there is neither."},
      {t:"A researcher analyses a published government dataset that contains no names or identifying information.", b:0, why:"Analysing properly anonymised public data is generally low risk and acceptable, as long as no one tries to re-identify people."}
    ]},
    {id:"e2u1-l5-x5", type:"match", q:"Match each ethics term to what it means in practice.", pairs:[
      ["Informed consent","Participants agree after being told what the study involves and its risks","Consent only counts if it is informed and voluntary."],
      ["Confidentiality","The researcher knows who said what but never reveals it","Identities are known to the researcher but protected."],
      ["Anonymity","Even the researcher can’t link answers to any person","No identifying information is collected at all."],
      ["Right to withdraw","Participants can stop taking part at any point without penalty","Consent is ongoing, not a one-time signature."],
      ["Debriefing","Explaining a study’s true purpose to participants afterwards","Required when any part of a study was concealed."],
      ["Ethics review","A committee checks a study’s risks before data collection starts","Called an IRB in the US and a research ethics committee or board in many countries."]
    ]},
    {id:"e2u1-l5-x6", type:"mcq", q:"Workers in a call centre become noticeably more polite and productive during the two weeks a researcher sits in their office taking notes. Which problem does this show?", options:[
      {t:"The Hawthorne effect", ok:true, why:"Right. People change their behaviour because they know they are being studied, so the observation doesn’t show normal behaviour."},
      {t:"A spurious correlation", why:"A spurious correlation involves a third variable behind two others. Here the researcher’s presence is itself changing behaviour."},
      {t:"A double-barrelled question", why:"That’s a survey wording problem. No questions were asked here."},
      {t:"A latent function", why:"A latent function is an unintended consequence of a social pattern, not a research bias caused by being observed."}
    ]},
    {id:"e2u1-l5-x7", type:"mcq", q:"A website asks visitors, “Do you support the new cycling lanes?” and receives 50,000 votes, 80% saying no. Why is this weak evidence of what the city’s population thinks?", options:[
      {t:"Visitors chose themselves, so the sample may over-represent people with strong views or particular interests.", ok:true, why:"Yes. A self-selected sample isn’t random; however large it is, it may not reflect the population."},
      {t:"50,000 is too small a number to mean anything.", why:"50,000 is a large number. The problem is who answered, not how many."},
      {t:"Online surveys can never be useful.", why:"Online surveys with properly drawn samples can be very useful. The issue is the self-selection."},
      {t:"The question uses jargon nobody understands.", why:"The question is simple and clear. The weakness lies in the sample."}
    ]}
   ],
   apply:{intro:"Try small, safe versions of real research methods. Only involve people who agree, let them skip any question, and keep what they say private.", tasks:[
     {t:"Draft and test a mini survey", how:["Choose a topic, such as how people in your household or friend group get their news.","Write five to eight questions: mostly closed-ended, plus one open-ended question.","Check each against the wording problems in this lesson: leading, double-barrelled, loaded, assumptions.","Ask one willing friend or family member to try it and tell you which questions were unclear. Don’t send it to strangers."], write:"Topic… My questions… Problems I found and fixed… What my tester said…"},
     {t:"A short, consented interview", how:["Ask a friend or family member if they’d be willing to talk for 15 minutes about how something has changed in their lifetime (shopping, communication, work, travel).","Explain what it’s for, that they can skip any question or stop at any time, and that you won’t use their name.","Ask open questions and take brief notes, not a recording, unless they agree to one.","Afterwards, write up three themes without any identifying details."], write:"Topic… How I explained consent… Three themes (no names or identifying details)…"},
     {t:"A small content analysis", how:["Choose 20 items of public content: adverts, news headlines, or covers of a magazine.","Decide on two or three things to count (for example, the apparent gender and age of people shown, and what they are doing).","Write your coding rules first, then count.","Note one reliability problem (would someone else code the same way?) and one validity problem."], write:"My 20 items… Coding rules… Counts… Reliability and validity concerns…"},
     {t:"Find secondary data about your area", how:["Visit your country’s national statistics office website (or a source such as the World Bank’s open data site).","Find one table about your region: population by age, household size, employment or education.","Write down the source, the year, what was measured and how (census or sample survey).","Note one question this data can answer and one it can’t."], write:"Source and year… What was measured… One question it answers… One it can’t…"}
   ], proof:"A tested mini questionnaire with notes on what you fixed, three anonymous interview themes, a small content analysis with your coding rules and counts, and one table of official data with its source, year and limits."},
   read:[
     {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3)", note:"Covers surveys, populations and samples, field research (participant observation, ethnography, institutional ethnography, case studies), experiments and secondary data analysis."},
     {book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (on LibreTexts: 2.4)", note:"Covers value neutrality, the ASA Code of Ethics and historical examples. The textbook says the code was established in 1905; 1905 is when the ASA itself was founded, and the current Code of Ethics was approved in 2018."}
   ]
  }
  ],
  checkpoint:["e2u1-q04","e2u1-q07","e2u1-q11","e2u1-q14","e2u1-q18","e2u1-q20","e2u1-q24","e2u1-q26","e2u1-q29","e2u1-q31","e2u1-q38","e2u1-q42"],
  codex:[
   {id:"sociology", title:"Sociology", aka:["the study of society","social science"], tags:["sociology","basics"],
    summary:"The systematic study of society and social interaction, from two-person conversations to the global economy.",
    levels:{
     starter:[
      "Sociology is the systematic study of society and social interaction. It asks how people live together: why groups form, how rules develop, why some people have more opportunities than others, and how societies change.",
      "Think of it as noticing the water you swim in. Much of what feels natural (how you greet people, what counts as a good job, who does the housework) is shaped by the groups and society around you. Sociology makes those patterns visible.",
      "Two key words: a [[society]] is a group of people who live in an area, interact and share a culture; [[culture]] is that group’s shared practices, values and beliefs.",
      "You don’t need special equipment to start thinking sociologically. Any queue, classroom, workplace or family dinner is full of patterns waiting to be noticed and explained.",
      {key:"Sociology studies the patterns of social life, and it does so systematically, with evidence others can check."}
     ],
     builder:[
      "Sociology works at every scale. [[micro-level|Micro-level]] research looks at face-to-face interaction: how strangers share a crowded train, how a family divides chores. [[macro-level|Macro-level]] research looks at large structures and long-term change: labour markets, education systems, migration, the spread of cities.",
      "Its central habit of mind is the [[sociological-imagination|sociological imagination]], C. Wright Mills’s name for connecting individual lives to the history and structure of their society (see {{sociological-imagination}}).",
      "Sociology differs from neighbouring disciplines in focus rather than in topic:",
      {table:[
        ["Discipline","Main focus"],
        ["Psychology","Individual minds, emotions and behaviour"],
        ["Economics","Production, exchange and choices about scarce resources"],
        ["Political science","Governments, power and political behaviour"],
        ["Anthropology","Cultures, often through long-term fieldwork"],
        ["Sociology","Groups, institutions, social interaction and inequality"]
      ]},
      "The boundaries are porous, and many researchers work across them. Sociology’s skills (designing research, analysing data about groups, understanding cultural difference) are used in social research, government, health, social services, marketing, human resources, journalism, education and law.",
      "Sociologists ask questions such as: Why do some neighbourhoods have more trust between neighbours than others? How do young people find work in a changing economy? Why do people follow rules nobody wrote down? How does migration change families at both ends of the journey? Each can be studied with evidence, using the methods covered later in this unit."
     ],
     pro:[
      "Sociology is plural in its theories and methods. Its main theoretical perspectives (functionalism, conflict theory, symbolic interactionism, feminist theory and intersectionality; see {{theoretical-perspectives}}) offer different pictures of society. Its methods range from large statistical surveys to years of ethnographic fieldwork (see {{survey-research}} and {{field-research}}).",
      "A long-running debate concerns *structure and agency*: how far social structures constrain people, and how far people’s actions create and change those structures. Most contemporary sociologists see the two as intertwined. Norbert Elias’s term *figuration*, which your textbook mentions, captures this: analysing individuals and the society that shapes them at the same time.",
      "Another debate concerns sociology’s role. Some emphasise detached, value-neutral science (see {{scientific-method-sociology}}); others argue for engaged, critical or public sociology aimed at informing public debate or social change. Michael Burawoy’s 2004 presidential address to the American Sociological Association, published as “For Public Sociology” (2005), made the case for engaging wider publics.",
      "Sociology is also increasingly global. Its classic canon is European and North American, and introductory textbooks, including OpenStax’s, draw many examples from the United States. Scholars around the world have challenged this, recovering earlier thinkers such as Ibn Khaldun and building theory from the experiences of the Global South.",
      "Professional sociologists work in universities, national statistics offices, policy units, think tanks, charities, market research firms and international organisations. National associations, such as the American Sociological Association, and international bodies, such as the International Sociological Association, connect researchers across countries."
     ]
    },
    related:["sociological-imagination","founders-of-sociology","theoretical-perspectives","scientific-method-sociology"],
    read:[{book:"soc", where:"Chapter 1, Section 1.1 “What Is Sociology?” and Section 1.4 “Why Study Sociology?”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): What Is Sociology?", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.02%3A_What_Is_Sociology"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Why Study Sociology?", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.05%3A_Why_Study_Sociology"}], checked:"2026-11"},

   {id:"sociological-imagination", title:"The sociological imagination", aka:["personal troubles and public issues","biography and history"], tags:["sociology","concepts"],
    summary:"C. Wright Mills’s term for seeing how individual lives connect to the history and structure of society.",
    levels:{
     starter:[
      "The sociological imagination is the ability to see how your own life is connected to the wider society and the moment in history you live in. The American sociologist C. Wright Mills named it in his 1959 book *The Sociological Imagination*.",
      "Mills drew a line between two kinds of problems. A [[personal-trouble|personal trouble]] belongs to one person and their immediate circle. A [[public-issue|public issue]] affects many people and comes from how society is organised.",
      "His example was unemployment. One person out of work in a large city is a personal trouble. Millions out of work at once is a public issue: the cause is in the economy, not in each person.",
      {key:"The sociological imagination doesn’t deny personal choice. It adds a second question: what in society made this experience common?"}
     ],
     builder:[
      "Mills described the sociological imagination as grasping the intersection of *biography* (the course of one life) and *history* (the larger changes of a society). He argued that people often feel trapped by their private troubles because they can’t see the wider forces behind them, and that this understanding could help them turn private troubles into public issues that can be addressed collectively.",
      "To use it, ask three kinds of question about any personal experience:",
      {ol:[
        "**Pattern:** how many other people share this experience, and which groups are most affected?",
        "**Structure:** what institutions, rules, markets or technologies shape it?",
        "**History:** how has it changed over time, and what would it have looked like a generation ago or in another country?"
      ]},
      {ex:"Mei struggles to afford housing near her job. As a personal trouble, she could look for cheaper flats or ask for a raise. Using the sociological imagination, she notices that many workers in her city face the same problem, that housing costs have risen faster than wages, and that planning rules and investment patterns play a part. Her trouble is real, and it is also a public issue.", label:"Worked example"},
      "The tool works for good news as well as bad. More women going to university, or people living longer, are also patterns with social causes that the sociological imagination can explain."
     ],
     pro:[
      "Mills wrote *The Sociological Imagination* partly as a critique of his own discipline. He attacked what he called “grand theory” (abstract system-building, with Talcott Parsons as his main target) and “abstracted empiricism” (narrow statistical studies that lost sight of big questions). He wanted sociology to address the major issues of its time in ways ordinary people could use.",
      "The idea overlaps with others: Durkheim’s social facts, the description of sociology as seeing the general in the particular, which textbooks often credit to Peter Berger (*Invitation to Sociology*, 1963), and Norbert Elias’s figuration, which your textbook mentions.",
      "Two cautions matter in practice. First, a pattern describes groups, not individuals; using group patterns to predict or judge one person is a mistake (sometimes called the ecological fallacy). Second, framing a problem as a public issue is itself a social and political process: which troubles become recognised issues depends on who has the power to define them, a theme of {{social-movements}} research.",
      "The concept travels well across societies, which is one reason it opens introductory courses worldwide.",
      "In teaching, a common exercise is to take a familiar trouble (debt, loneliness, a long commute, exam stress) and trace it outward: to the institutions that shape it, to the groups most affected, and to how it differs across countries and generations. Doing this regularly is what turns the sociological imagination from a definition into a habit."
     ]
    },
    related:["c-wright-mills","sociology","emile-durkheim","founders-of-sociology"],
    read:[{book:"soc", where:"Chapter 1, Section 1.1 “What Is Sociology?”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): What Is Sociology?", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.02%3A_What_Is_Sociology"},{t:"Britannica: C. Wright Mills", url:"https://www.britannica.com/biography/C-Wright-Mills"}], checked:"2026-11"},

   {id:"founders-of-sociology", title:"The founders of sociology", aka:["history of sociology","classical sociology"], tags:["sociology","history","thinkers"],
    summary:"How industrialisation, cities and revolution gave rise to sociology, and the thinkers who shaped it, from Ibn Khaldun to Du Bois.",
    levels:{
     starter:[
      "Sociology became a named discipline in 19th-century Europe, when factories, fast-growing cities and political revolutions were turning everyday life upside down. People wanted to understand what holds society together and why it changes.",
      "Key early figures include Auguste Comte, who popularised the word *sociology*; Harriet Martineau, who translated Comte and studied American society; Karl Marx, who focused on class conflict; Émile Durkheim, who studied social facts; Max Weber, who stressed meaning; and W. E. B. Du Bois, who pioneered empirical community research on race.",
      "Much earlier, the North African scholar Ibn Khaldun (1332–1406) proposed a science of society in his *Muqaddimah*, and many see him as a forerunner.",
      {key:"Sociology was born from rapid social change, and its founders disagreed from the start about how society should be studied."}
     ],
     builder:[
      {table:[
        ["Thinker","Dates","Key idea or work"],
        ["Ibn Khaldun","1332–1406","Muqaddimah (late 1370s); ʿasabiyyah, or social cohesion"],
        ["Auguste Comte","1798–1857","Reintroduced the word sociology (1838); positivism"],
        ["Harriet Martineau","1802–1876","Society in America (1837); translated Comte (1853)"],
        ["Karl Marx","1818–1883","Class conflict; The Communist Manifesto (1848, with Engels)"],
        ["Herbert Spencer","1820–1903","Society as an evolving organism; The Study of Sociology (1873)"],
        ["Émile Durkheim","1858–1917","Social facts; Suicide (1897)"],
        ["Max Weber","1864–1920","Verstehen; The Protestant Ethic (1904–05)"],
        ["W. E. B. Du Bois","1868–1963","The Philadelphia Negro (1899); The Souls of Black Folk (1903)"]
      ]},
      "The founders split over method. [[positivism|Positivists]] such as Comte and Durkheim wanted to study society like natural science, looking for general patterns and causes. [[antipositivism|Antipositivists]] such as Weber and Georg Simmel argued that human action has meaning, so researchers need [[verstehen]], an understanding of action from the actor’s point of view. Modern sociology uses both quantitative and qualitative methods.",
      "See the thinker entries for more: {{karl-marx}}, {{emile-durkheim}}, {{max-weber}}, {{harriet-martineau}} and {{w-e-b-du-bois}}.",
      "A useful way to remember the founders is by the question each one asked. Comte: can society be studied scientifically? Marx: who owns what, and how does that shape conflict? Durkheim: what holds society together? Weber: what do actions mean to the people doing them? Martineau and Du Bois: what does careful observation reveal about inequality? Ibn Khaldun: how does group cohesion relate to power?"
     ],
     pro:[
      "The word *sociology* first appeared in an unpublished manuscript by Emmanuel-Joseph Sieyès around 1780; Comte’s use in 1838 made it stick. Your textbook also credits Spencer with the first book with “sociology” in its title (1873), but earlier titles exist, such as George Fitzhugh’s *Sociology for the South* (1854), so treat that claim with care.",
      "The standard “founding fathers” story (Marx, Durkheim, Weber) has been widely criticised as too narrow. Martineau’s methodological work and Du Bois’s empirical research were overlooked largely because of gender and race; the Atlanta Sociological Laboratory that Du Bois led produced systematic studies of Black life in the early 20th century. Jane Addams’s Hull House in Chicago combined research and reform. Outside Europe and North America, scholars point to Ibn Khaldun’s *ʿilm al-ʿumrān* (science of social organisation) and to later sociologists in Asia, Africa and Latin America whose work rarely entered the Western canon.",
      "Sociology became an academic discipline at different times in different places. Durkheim built it into French universities from Bordeaux in the 1880s and 1890s and founded the journal *L’Année sociologique* in 1896. In the United States, the American Sociological Society (now the American Sociological Association) was founded in 1905, and the University of Chicago became an early centre of empirical research.",
      "Reading the classics today means reading them in context: they addressed industrial Europe and America, sometimes with assumptions about gender, race and empire that later sociologists have challenged."
     ]
    },
    related:["karl-marx","emile-durkheim","max-weber","harriet-martineau","w-e-b-du-bois","sociology"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"},{t:"Britannica: The Muqaddimah, Ibn Khaldūn’s philosophy of history", url:"https://www.britannica.com/biography/Ibn-Khaldun/The-Muqaddimah-Ibn-Khalduns-philosophy-of-history"},{t:"American Sociological Association: History of ASA", url:"https://www.asanet.org/about/history-of-asa"}], checked:"2026-11"},

   {id:"theoretical-perspectives", title:"Theoretical perspectives", aka:["sociological paradigms","lenses","macro and micro"], tags:["sociology","theory"],
    summary:"The major frameworks sociologists use to explain society, and the difference between macro-level and micro-level analysis.",
    levels:{
     starter:[
      "Sociologists use a few big frameworks, called theoretical perspectives or [[paradigm|paradigms]], to explain society. Each is like a different map of the same city: a road map, a transit map and a map of hills each show something true, and each leaves something out.",
      "The main perspectives in introductory sociology are functionalism (how parts of society keep it stable), conflict theory (who benefits and who pays), symbolic interactionism (what things mean to people), feminist theory (how gender shapes life) and intersectionality (how categories like gender, race and class combine).",
      "Some perspectives zoom out to look at whole societies ([[macro-level|macro-level]]); others zoom in on everyday interaction ([[micro-level|micro-level]]). Good research picks the lens that fits the question being asked.",
      {key:"A [[theory]] in sociology is an explanation tested against evidence, not a guess."}
     ],
     builder:[
      {table:[
        ["Perspective","Level","Key question"],
        ["Structural functionalism","Macro","How does each part contribute to the stability of the whole?"],
        ["Conflict theory","Macro","Who benefits, who loses, and how does conflict drive change?"],
        ["Symbolic interactionism","Micro","How do people create and use meanings in interaction?"],
        ["Feminist theory","Macro and micro","How does gender shape power, work and everyday life?"],
        ["Intersectionality","Macro and micro","How do social categories combine to shape experience?"]
      ]},
      "[[macro-level|Macro-level]] analysis looks at large structures (economies, states, education systems). [[micro-level|Micro-level]] analysis looks at specific relationships between individuals or small groups. Your textbook also mentions *grand theories*, which try to explain large-scale relationships and answer fundamental questions about society.",
      "In practice, researchers choose the perspective that fits the question, and often combine several. See {{functionalism}}, {{conflict-theory}}, {{symbolic-interactionism}} and {{feminist-theory}}.",
      "Each perspective has a typical analogy. Functionalists compare society to a living body; conflict theorists to a competition over a limited pie; symbolic interactionists to a stage, or to a conversation in which meanings are worked out. Analogies help you remember the perspectives, but don’t push them too far: societies aren’t literally bodies or theatres.",
      "A quick test when reading research: ask which question the author is asking. That usually tells you which perspective they are using, even if they never name it."
     ],
     pro:[
      "The “three perspectives” framing (functionalism, conflict, interactionism) is a teaching device. Real theoretical traditions are more varied and overlap. Your textbook also describes critical theory, associated with the Frankfurt School, which aims to address structural causes of inequality; critical race theory, which examines structural inequality connected to race; and constructivism, an extension of interactionism holding that reality is what people collectively construct (see {{social-construction-of-reality}}).",
      "Other influential frameworks include rational choice theory (social life as the outcome of individuals’ choices under constraints), exchange theory, network analysis, practice theory (Pierre Bourdieu’s concepts of habitus and capital), and postcolonial and decolonial theory, which question the European assumptions of classical sociology.",
      "Many contemporary theorists try to bridge the macro–micro divide, for example by studying how everyday interactions reproduce institutions, or how institutions shape interactions. Good analysis is explicit about which level it addresses and which perspective it takes, and honest about what that perspective leaves out.",
      "Perspectives also suggest methods. Macro perspectives often rely on comparative statistics and historical data; interactionists often use observation and interviews; feminist and intersectional researchers use both, and pay particular attention to whose experience the data captures and whose it leaves out. Knowing these links helps you judge whether a study’s method fits its theoretical claims."
     ]
    },
    related:["functionalism","conflict-theory","symbolic-interactionism","feminist-theory"],
    read:[{book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Theoretical Perspectives", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.04%3A_Theoretical_Perspectives"}], checked:"2026-11"},

   {id:"functionalism", title:"Structural functionalism", aka:["functionalism","structural-functional theory","manifest and latent functions"], tags:["sociology","theory"],
    summary:"A macro perspective that sees society as interrelated parts contributing to the stability of the whole.",
    levels:{
     starter:[
      "Structural functionalism, or functionalism, sees society as a system of connected parts, like the organs of a body. Families, schools, religion, the economy and government each do something that helps society keep going.",
      "The key question is: **what does this part do for society?** A school, for example, teaches skills; it also looks after children while parents work and helps young people make friends.",
      "The sociologist Robert K. Merton split these effects into [[manifest-function|manifest functions]] (intended), [[latent-function|latent functions]] (unintended) and [[dysfunction|dysfunctions]] (harmful effects).",
      "Example: a wedding’s manifest function is to mark a marriage. A latent function may be bringing a scattered extended family together for the first time in years. A possible dysfunction is a family taking on heavy debt to pay for it.",
      {key:"Functionalism explains why social arrangements last: they seem to meet needs. Its weakness is explaining conflict and change."}
     ],
     builder:[
      "Functionalism grew from Herbert Spencer’s comparison of society to an organism and from Émile Durkheim’s question of what functions [[social-fact|social facts]] serve. Durkheim argued, for example, that shared rituals strengthen social solidarity, the ties that bind people together. In the mid-20th century Talcott Parsons built a large-scale theory of social systems, and Robert K. Merton developed more focused “middle-range” analysis.",
      {table:[
        ["Concept","Meaning","Example: a national sports league"],
        ["Manifest function","Intended, recognised consequence","Entertainment; physical fitness; income for clubs"],
        ["Latent function","Unintended or unrecognised consequence","A shared identity that crosses class and region; topics for small talk"],
        ["Dysfunction","Undesirable consequence for society","Violence between rival fans; public money spent on stadiums instead of other needs"]
      ]},
      "Functionalists describe a healthy society as being in *dynamic equilibrium*: stable, but adjusting as conditions change.",
      "Durkheim’s idea of social solidarity is central: the ties of kinship, shared place, religion and shared values that bind people together. Functionalists ask how institutions produce solidarity and what happens when it weakens. They also stress interdependence: a change in one institution, such as more women in paid work, has knock-on effects on others, such as families, schools and childcare services.",
      "To analyse any institution functionally, ask three questions: what is it supposed to do, what else does it do, and what problems does it cause, and for whom?"
     ],
     pro:[
      "Merton’s distinction answered early critics by admitting that the same pattern can be functional for some groups and dysfunctional for others, and that “functional alternatives” (other arrangements that could meet the same need) may exist.",
      "Main critiques:",
      {list:[
        "**Change and conflict:** functionalism struggles to explain how societies change, or why conflict is common.",
        "**Circularity:** assuming that whatever exists must serve a function, and then citing its existence as proof.",
        "**Conservatism:** it can make existing inequalities look necessary. The [[davis-moore|Davis–Moore thesis]] (1945), which argued that unequal rewards ensure important jobs are filled, is the best-known example and is widely criticised (see {{class-caste}})."
      ]},
      "Your textbook notes that many sociologists now believe functionalism is no longer useful as a macro-level theory, though it still serves a useful purpose in some mid-level analyses. Terms like latent function and dysfunction are used across the discipline, including by researchers who reject functionalism as a whole.",
      "Merton also argued for theories of the “middle range”: explanations more general than single studies but far less sweeping than theories of whole societies. His strain theory of deviance, which you’ll meet in Unit 3 ([[strain-theory]]), is an example. Today functional analysis survives mostly in this middle-range form, as a set of questions about what institutions do and for whom, rather than as a complete theory of society."
     ]
    },
    related:["theoretical-perspectives","conflict-theory","emile-durkheim","social-institutions"],
    read:[{book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology”: “Functionalism”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Theoretical Perspectives", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.04%3A_Theoretical_Perspectives"}], checked:"2026-11"},

   {id:"conflict-theory", title:"Conflict theory", aka:["conflict perspective","who benefits?"], tags:["sociology","theory"],
    summary:"A macro perspective that sees society as a competition for limited resources, and conflict as a driver of change.",
    levels:{
     starter:[
      "Conflict theory sees society as a competition for limited resources: money, power, land, status and time. Groups with more power tend to shape the rules in their favour, and conflict between groups pushes societies to change.",
      "Its key question is: **who benefits, and who pays?** Where a functionalist sees a school system teaching everyone, a conflict theorist asks whether it gives some children a head start and holds others back.",
      "The perspective grew from the work of {{karl-marx|Karl Marx}}, who focused on conflict between economic classes.",
      "Conflict theorists see change, not stability, as normal. Strikes, protests, court cases and elections are all moments when groups contest how resources and power are shared.",
      {key:"Conflict theory is good at revealing power and inequality. Its weakness is overlooking cooperation and stability."}
     ],
     builder:[
      "Marx argued that the central conflict in capitalist societies is between the [[bourgeoisie]], who own the means of production, and the [[proletariat]], who sell their labour. Later conflict theorists widened the focus:",
      {list:[
        "**Max Weber:** inequality has several dimensions, including class, status (social honour) and political power, which don’t always line up.",
        "**W. E. B. Du Bois:** racial inequality as a structure of power, not a result of individual character.",
        "**C. Wright Mills:** a “power elite” of top business, military and political leaders in the United States (*The Power Elite*, 1956).",
        "**Feminist theorists:** gender inequality and patriarchy (see {{feminist-theory}})."
      ]},
      "Your textbook also mentions Ludwig Gumplowicz, who saw war and conquest as the basis of civilisations, and Georg Simmel, who studied how conflict can also strengthen group bonds.",
      {ex:"Functionalist question: how does private health insurance help the health system run? Conflict question: who can afford which care, who profits, and how do those patterns affect people with lower incomes?", label:"Same topic, different questions"},
      "Conflict theory doesn’t assume that every relationship is hostile. It assumes that interests differ, that resources such as money, time and status are limited, and that the rules of the game tend to be shaped by those with more power."
     ],
     pro:[
      "Conflict theory includes several traditions: Marxist analysis of class and capitalism; Weberian analysis of multiple, overlapping forms of stratification; critical theory from the Frankfurt School, which examined culture and ideology; and theories of race, gender and global inequality (see {{theories-global-inequality}}).",
      "Main critiques:",
      {list:[
        "**Neglect of stability and consensus:** many institutions persist and change gradually through agreement, not struggle.",
        "**Failed predictions:** some of Marx’s forecasts, such as revolution beginning in the most industrialised countries, did not come true.",
        "**Economic reductionism:** early versions treated everything as a reflection of economic class; later conflict theorists added status, race, gender and culture."
      ]},
      "Its lasting contribution is the habit of asking whose interests a social arrangement serves, a question now used by researchers of many theoretical and political positions.",
      "Researchers in this tradition often study who makes the rules: how laws, school admissions, wage-setting or housing policy are decided, and whose voices count. They also examine how inequalities can persist without anyone intending them, through institutions that quietly favour some groups. A conflict analysis doesn’t require any particular political conclusion; it is a way of asking questions about power that researchers across the political spectrum use.",
      "It also shaped research methods: studies of who sits on company boards, who funds political campaigns, or how land ownership is distributed all follow the conflict question of where power lies."
     ]
    },
    related:["karl-marx","theoretical-perspectives","functionalism","feminist-theory"],
    read:[{book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology”: “Conflict Theory”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Theoretical Perspectives", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.04%3A_Theoretical_Perspectives"},{t:"Britannica: C. Wright Mills", url:"https://www.britannica.com/biography/C-Wright-Mills"}], checked:"2026-11"},

   {id:"symbolic-interactionism", title:"Symbolic interactionism", aka:["interactionism","dramaturgy","front stage and backstage"], tags:["sociology","theory"],
    summary:"A micro perspective that studies how people create and use shared meanings in everyday interaction.",
    levels:{
     starter:[
      "Symbolic interactionism looks at everyday interaction up close. Its central idea is that people act according to what things *mean* to them, and that those meanings are made and changed when people interact.",
      "A flag, a ring, a uniform or a hand gesture has no meaning in itself. People give it meaning together, and the meaning can differ from one group to another. White is a wedding colour in many Western traditions and has long been a colour of mourning in parts of East Asia.",
      "Erving Goffman added [[dramaturgy]]: seeing social life as a performance, with a front stage where we manage the impression we give and a backstage where we relax.",
      {key:"Symbolic interactionism asks: what does this mean to the people involved, and how did that meaning come about?"}
     ],
     builder:[
      "{{george-herbert-mead|George Herbert Mead}} (1863–1931) is seen as a founder; his ideas on how the self develops through interaction were published after his death as *Mind, Self and Society* (1934). His student Herbert Blumer coined the name “symbolic interactionism” in 1937 and later summarised three premises:",
      {ol:[
        "People act toward things on the basis of the meanings those things have for them.",
        "Those meanings come from social interaction.",
        "Meanings are handled and modified through people’s own interpretation."
      ]},
      "{{erving-goffman|Erving Goffman}}’s *The Presentation of Self in Everyday Life* (1956; expanded edition 1959) developed dramaturgical analysis. Charles Horton Cooley’s [[looking-glass-self|looking-glass self]], the idea that we see ourselves through others’ reactions, belongs to the same tradition.",
      {ex:"In a job interview by video call, Priya chooses a tidy background, dresses formally from the waist up and speaks carefully: front stage. After the call she changes into comfortable clothes and laughs about it with her flatmate: backstage.", label:"Worked example: dramaturgy"},
      "Interactionists stress that meanings can change. A gesture, a word or a style of clothing can shift meaning across generations, or move from insult to badge of pride. Research in this tradition asks how people negotiate such meanings in daily life: at work, in families, online and in public spaces."
     ],
     pro:[
      "Interactionists usually favour qualitative methods: participant observation, in-depth interviews and close analysis of conversation. Constructivism, which your textbook describes as an extension of the perspective, holds that reality is what people collectively construct; related work includes the Thomas theorem (situations defined as real are real in their consequences; see [[thomas-theorem]]) and labelling theory in the study of deviance (see {{labeling-theory}}).",
      "Main critiques:",
      {list:[
        "**Neglect of structure and power:** focusing on interaction can miss the economic and political forces that shape who interacts with whom, and on what terms.",
        "**Generalisation:** detailed small-scale studies are hard to generalise.",
        "**Objectivity:** interpreting meanings depends heavily on the researcher."
      ]},
      "Supporters reply that the narrow focus is a strength: large structures exist only through countless everyday interactions, and studying those interactions shows how structures are kept alive or changed.",
      "Interactionism also produced important research on identity. Goffman’s *Stigma* (1963) examined how people manage identities that others devalue, and studies of “careers” in a broad sense (how someone becomes a nurse, a musician or a member of a group) trace the step-by-step learning of meanings and roles. Many recent studies combine interactionist ideas with attention to institutions, answering the critique that the perspective ignores structure.",
      "Online life has given the perspective new material: profile pictures, emoji, likes and status updates are all symbols whose meanings people learn and negotiate."
     ]
    },
    related:["theoretical-perspectives","george-herbert-mead","erving-goffman","social-construction-of-reality"],
    read:[{book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology”: “Symbolic Interactionist Theory”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Theoretical Perspectives", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.04%3A_Theoretical_Perspectives"}], checked:"2026-11"},

   {id:"feminist-theory", title:"Feminist theory and intersectionality", aka:["feminist sociology","intersectionality","matrix of domination"], tags:["sociology","theory","gender"],
    summary:"Perspectives that put gender, and the way gender combines with other categories, at the centre of social analysis.",
    levels:{
     starter:[
      "Feminist theory studies how societies organise relationships between women, men and people of other genders, and how those arrangements create inequality in work, pay, care, safety and power.",
      "Intersectionality adds that people belong to several social categories at once (gender, race, ethnicity, class, age, disability, religion, migration status) and that these combine. A migrant woman’s experience at work isn’t simply “a woman’s experience” plus “a migrant’s experience”; the combination can create something different from both.",
      "The term intersectionality was introduced by the American legal scholar Kimberlé Crenshaw in 1989.",
      "Feminist sociology isn’t only about women. It studies how ideas about gender shape everyone’s lives, including men’s work, health and family roles.",
      {key:"Look at gender, and then ask how it combines with other parts of who people are."}
     ],
     builder:[
      "Feminist theory is a family of approaches. Your textbook places it within the conflict tradition and cites Janet Saltzman Chafetz’s model of the forces that maintain gender inequality. Dorothy E. Smith argued that sociology should start from women’s everyday experience, which male-centred research had overlooked, and developed institutional ethnography. Feminist analysis works at both levels: macro (laws, pay gaps, political representation) and micro (who does unpaid care, who is interrupted).",
      "Crenshaw’s 1989 article, “Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics”, published in the *University of Chicago Legal Forum*, argued that a “single-axis” approach, treating race and sex separately, erased the experiences of Black women. Patricia Hill Collins, in *Black Feminist Thought* (1990), described intersecting systems of oppression as a “matrix of domination”.",
      {ex:"An employer’s records show many women in senior roles and many staff from minority ethnic groups. Separately, neither category looks excluded. An intersectional check asks how many senior staff are women from minority ethnic groups, and may find almost none.", label:"Worked example: why combine categories?"},
      "Feminist researchers also made unpaid work visible. Housework, childcare and care for older relatives were long left out of economic and sociological analysis; time-use surveys in many countries now measure them."
     ],
     pro:[
      "Intersectionality has spread from law into sociology, public health, psychology and policy. In quantitative research it is often studied with interaction terms or by comparing outcomes across combined groups; in qualitative research, by examining how people experience overlapping identities and institutions.",
      "Debates and critiques, presented here without taking sides:",
      {list:[
        "**Universalism:** early feminist sociology was criticised, often by other feminists, for treating white, middle-class women in wealthy countries as representative of all women. Intersectionality is partly a response.",
        "**Measurement:** each added category splits data into smaller groups, making statistical analysis harder; researchers debate how to choose which categories to include.",
        "**Scope:** some scholars argue the concept is sometimes stretched so far that it loses analytical precision; others see its flexibility as a strength.",
        "**Global relevance:** scholars from the Global South have questioned how far frameworks developed in the United States travel, and have contributed their own analyses of gender, caste, colonialism and class."
      ]},
      "Both perspectives are mainstream in contemporary sociology. Unit 3 covers {{sex-gender}} and {{gender-stratification}} in more depth.",
      "In practice, intersectional research also asks researchers to reflect on their own position and on whose voices their data includes. The approach has influenced how surveys are designed, how organisations check the fairness of their processes, and how policies are evaluated for different groups."
     ]
    },
    related:["theoretical-perspectives","conflict-theory","sex-gender","gender-stratification"],
    read:[{book:"soc", where:"Chapter 1, Section 1.3 “Theoretical Perspectives in Sociology”: “Conflict Theory” (feminist theory)", note:"Intersectionality isn’t covered in Chapter 1; Chapter 12 discusses gender in depth."}],
    sources:[{t:"Columbia Law School Scholarship Archive: Crenshaw, “Demarginalizing the Intersection of Race and Sex” (1989)", url:"https://scholarship.law.columbia.edu/faculty_scholarship/3007"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Theoretical Perspectives", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.04%3A_Theoretical_Perspectives"}], checked:"2026-11"},

   {id:"scientific-method-sociology", title:"The scientific method in sociology", aka:["hypotheses and variables","operational definitions","reliability and validity","value neutrality"], tags:["sociology","research"],
    summary:"How sociologists turn questions into testable hypotheses, measure concepts, and judge whether results can be trusted.",
    levels:{
     starter:[
      "Sociologists test ideas against [[empirical-evidence|empirical evidence]]: information anyone could check by observing, measuring or experimenting. Your textbook lists six steps: ask a question, review the literature, form a hypothesis, design and conduct a study, draw conclusions, and report results.",
      "A [[hypothesis]] is a testable statement about how things are related, such as “older adults who join community groups feel less lonely”. The things that vary are [[variable|variables]]: the [[independent-variable|independent variable]] is the presumed cause, and the [[dependent-variable|dependent variable]] is the effect.",
      "Example: Mei wonders whether people who live near a park know more of their neighbours. That question can become a hypothesis, be tested with evidence and come out supported or not. Either result teaches something.",
      {key:"A good hypothesis can be proved wrong. If no evidence could ever count against it, it isn’t testable."}
     ],
     builder:[
      "To measure an abstract concept, researchers write an [[operational-definition|operational definition]]: the concrete steps used to measure it. “Social isolation” might become “the number of conversations with family, friends or neighbours in the past week”.",
      "Two tests decide whether a measure can be trusted:",
      {table:[
        ["Test","Question","Example of a problem"],
        ["[[reliability|Reliability]]","Would the same measure give the same result again?","Two coders classify the same interviews very differently"],
        ["[[validity|Validity]]","Does it measure what it claims to?","Measuring health by counting doctor visits, which also reflects ability to pay"]
      ]},
      "Not all research starts with a hypothesis. The [[interpretive-framework|interpretive framework]] seeks to understand social worlds from participants’ points of view, letting questions and ideas emerge from the data. Your textbook also describes critical sociology, which aims to expose and change inequality.",
      "Max Weber called for [[value-neutrality|value neutrality]]: researchers should not let their own values bias how they collect or interpret data, and must report findings even when they are unwelcome.",
      "Researchers also distinguish **deductive** research, which starts from a theory and tests hypotheses against data, from **inductive** research, which starts from observations and builds ideas from them. Many projects move back and forth between the two, which is why the research process is usually drawn as a cycle."
     ],
     pro:[
      "Philosophers of science, notably Karl Popper, emphasised falsifiability: scientific claims must be open to refutation. Sociologists apply this through pre-stated hypotheses, transparent methods and replication. In recent years, concern about results that fail to replicate has led many social scientists to pre-register studies and share data and code.",
      "Complete objectivity is widely seen as impossible: values shape which topics are chosen and how concepts are defined. Howard Becker’s essay “Whose Side Are We On?” (1967) argued that researchers inevitably adopt some point of view. Rather than abandoning objectivity, sociologists use **reflexivity** (making their own position explicit), peer review and replication.",
      "Measurement involves trade-offs. A validated survey scale may be reliable in one country yet carry cultural assumptions that reduce validity elsewhere; cross-national surveys therefore test translations and check whether questions are understood in the same way. Mixed methods, combining qualitative and quantitative evidence, help check each against the other.",
      "Causal claims need special care; see {{correlation-causation}}.",
      "Reliability and validity apply to qualitative research too, though qualitative researchers often use terms such as credibility, dependability and transferability. Common practices include keeping an audit trail of decisions, checking interpretations with participants, and having more than one researcher code the same material and compare results."
     ]
    },
    related:["correlation-causation","survey-research","field-research","experiments-sociology"],
    read:[{book:"soc", where:"Chapter 2, Section 2.1 “Approaches to Sociological Research”"},{book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (value neutrality)"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Approaches to Sociological Research", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.02%3A_Approaches_to_Sociological_Research"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Ethical Concerns", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.04%3A_Ethical_Concerns"}], checked:"2026-11"},

   {id:"correlation-causation", title:"Correlation and causation", aka:["correlation is not causation","spurious correlation","third variable","reverse causation"], tags:["sociology","research","statistics"],
    summary:"Why two things moving together doesn’t prove that one causes the other, and what researchers need to show cause.",
    levels:{
     starter:[
      "A [[correlation]] means two things tend to change together. [[causation|Causation]] means one actually makes the other change. They are not the same.",
      "The Australian Bureau of Statistics gives a classic example: ice cream sales and sunscreen sales rise and fall together through the year. Ice cream doesn’t make people buy sunscreen. Hot weather drives both.",
      "When a hidden third factor creates a correlation, it’s called a [[spurious-correlation|spurious correlation]].",
      "Correlations are still useful: they show where to look. But before believing that one thing causes another, check whether something else could explain both, and whether the cause might run the other way.",
      {key:"When you read “X is linked to Y”, ask: could something else cause both? Could Y cause X instead?"}
     ],
     builder:[
      "Correlations can be **positive** (both rise together: more education, higher average income) or **negative** (one rises as the other falls: more hours of paid work, less free time). Statisticians measure strength with a correlation coefficient, *r*, from −1 to +1.",
      "To argue that X causes Y, researchers generally need:",
      {ol:[
        "**Association:** X and Y are correlated.",
        "**Time order:** X happens before Y.",
        "**Non-spuriousness:** plausible third variables have been ruled out."
      ]},
      {table:[
        ["Claim","Possible problem"],
        ["Children who eat breakfast do better at school","Third variable: family income, sleep or parental time may drive both"],
        ["People who volunteer are happier","Reverse causation: happier people may be more likely to volunteer"],
        ["Neighbourhoods with more police have more crime","Reverse causation: police may be sent where crime is already high"]
      ]},
      "Positive and negative describe direction, not strength or importance. A correlation can be strong but meaningless (two unrelated trends that happen to rise over the same years) or weak but important. Headlines often use cause words such as “boosts”, “cuts” or “makes” for findings that are only correlations; “linked to” or “associated with” are more accurate, as long as readers understand what they mean.",
      "Reverse causation is the other common trap: the cause may run the opposite way from what a headline assumes."
     ],
     pro:[
      "Randomised experiments are the strongest design for causal claims, because random assignment balances measured and unmeasured third variables on average (see {{experiments-sociology}}). Where experiments are impossible or unethical, sociologists use other strategies: longitudinal data that follow the same people over time to establish time order; statistical controls for measured confounders; natural experiments, where a policy or event affects some groups and not others for reasons unrelated to the outcome; and comparisons of siblings or the same people before and after a change.",
      "Each strategy has limits. Statistical controls can’t account for variables that weren’t measured. Group-level correlations can mislead about individuals (the ecological fallacy). Very large datasets make tiny, unimportant correlations “statistically significant”, and searching many variables at once will find some correlations by chance.",
      "Qualitative research contributes too: by showing *how* a process works step by step, it can make a causal story more or less plausible. Strong conclusions usually rest on several kinds of evidence pointing the same way.",
      "When you read research, look at the design before the conclusion. An observational study with careful controls can suggest cause; a randomised trial can test it more directly; a single survey taken at one point in time can rarely do more than describe an association."
     ]
    },
    related:["scientific-method-sociology","experiments-sociology","survey-research"],
    read:[{book:"soc", where:"Chapter 2, Section 2.2 “Research Methods”", note:"The textbook mentions correlation and causation only briefly."}],
    sources:[{t:"Australian Bureau of Statistics: Correlation and causation", url:"https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/correlation-and-causation"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Research Methods", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.03%3A_Research_Methods"}], checked:"2026-11"},

   {id:"survey-research", title:"Surveys and sampling", aka:["questionnaires","sampling","random sample","census"], tags:["sociology","research","methods"],
    summary:"Asking a sample of people standard questions, and choosing that sample so it represents the population.",
    levels:{
     starter:[
      "In a [[survey]], people answer questions about what they do, think or have experienced, through a questionnaire or interview. Surveys are good at answering “how many?” and “how common?”",
      "Usually you can’t ask everyone in a [[population-research|population]] (everyone the study is about), so you ask a [[sample]]. In a [[random-sample|random sample]], everyone has the same chance of being picked, so the sample tends to look like the population.",
      "Example: to learn how many students in a country have part-time jobs, researchers might randomly select a few thousand students and ask them. If the sample is chosen well, the answers can represent all students.",
      {key:"How people are chosen matters more than how many are asked. A huge self-selected online poll can be less accurate than a small random sample."}
     ],
     builder:[
      "**Census or sample?** The Australian Bureau of Statistics explains that a census counts every unit in a population, so it has no sampling error, but is costly and slow. A sample is cheaper and faster but its estimates carry sampling error, especially for small subgroups.",
      "**Probability (random) sampling** gives every unit a known chance of selection, which lets researchers estimate how accurate results are. Types include simple random, systematic and stratified sampling. **Non-probability sampling** (convenience, volunteer, quota, purposive) is quicker but its error can’t be estimated.",
      "**Question design** matters as much as sampling:",
      {list:[
        "Avoid leading, loaded and double-barrelled questions.",
        "Don’t assume circumstances (car ownership, a partner, a job).",
        "Offer balanced answer options and a way to say “don’t know” where sensible.",
        "Pilot the questionnaire with a few people first."
      ]},
      "Closed-ended questions give [[quantitative-data|quantitative data]]; open-ended questions give [[qualitative-data|qualitative data]].",
      "Interviews can be **structured** (the same questions in the same order for everyone, like a spoken questionnaire), **semi-structured** (a guide of topics with freedom to follow up) or **unstructured** (an open conversation). Structured formats suit quantitative comparison; looser formats produce qualitative depth. Your textbook notes that interviews let researchers ask follow-up questions that questionnaires can’t.",
      "Surveys are self-reports: they record what people say they do and think, which can differ from what they actually do."
     ],
     pro:[
      "Survey error has several sources: **coverage error** (some people can’t be selected, such as those without internet access in an online panel), **sampling error** (chance differences between sample and population), **non-response error** (people who don’t answer differ from those who do) and **measurement error** (question wording, interviewer effects, social desirability).",
      "Falling response rates in many countries have pushed survey organisations to use weighting (adjusting the sample to match known population totals), mixed modes (online, phone, paper) and carefully recruited online panels. Weighting helps only for characteristics that are measured.",
      "Cross-national surveys face extra challenges: translation, different meanings of the same concept, and different sampling frames. Pew Research Center’s Methods 101 series and national statistics offices publish accessible explanations of these issues.",
      "When reading survey results, check: who was sampled and how, the response rate, the exact question wording, the margin of error, and whether results for small subgroups rest on very few people.",
      "Larger random samples give smaller margins of error, but each extra person adds less precision than the one before, so a well-designed national survey can be accurate without asking millions of people. Reliable results for small subgroups need larger samples or deliberate oversampling of those groups.",
      "Always ask whether the survey was designed for your purpose before reusing its results."
     ]
    },
    related:["scientific-method-sociology","secondary-data","research-ethics","correlation-causation"],
    read:[{book:"soc", where:"Chapter 2, Section 2.2 “Research Methods”: “Surveys”"}],
    sources:[{t:"Australian Bureau of Statistics: Census and sample", url:"https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/census-and-sample"},{t:"Pew Research Center: Methods 101, random sampling", url:"https://www.pewresearch.org/methods/2017/05/12/methods-101-video-random-sampling/"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Research Methods", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.03%3A_Research_Methods"}], checked:"2026-11"},

   {id:"field-research", title:"Field research", aka:["participant observation","ethnography","case study","Hawthorne effect"], tags:["sociology","research","methods"],
    summary:"Gathering data in natural settings, through participant observation, ethnography and case studies.",
    levels:{
     starter:[
      "Field research means studying people where they live, work or play, rather than in a lab or through a questionnaire.",
      "In [[participant-observation|participant observation]], the researcher joins in with what people are doing. In [[ethnography]], the researcher immerses themself in a whole community, often for months or years. A [[case-study|case study]] looks in depth at one event, organisation or person.",
      "Field research is strong on meaning and context: it shows *how* and *why* people do things. It is weaker at telling you how common something is.",
      "Example: to understand how market traders build trust with regular customers, a researcher might spend months at a market, with the traders’ permission, helping out, watching and talking with them.",
      {key:"Field research gives depth. Surveys give breadth. Many good studies use both."}
     ],
     builder:[
      {table:[
        ["Type","What the researcher does","Example from the textbook"],
        ["Participant observation","Joins a group’s routine activities","Barbara Ehrenreich worked low-wage jobs for Nickel and Dimed (2001)"],
        ["Ethnography","Immerses in a whole community’s daily life","Robert and Helen Lynd’s Middletown (1929), on Muncie, Indiana"],
        ["Institutional ethnography","Traces how organisations shape everyday experience","Developed by Dorothy E. Smith"],
        ["Case study","Analyses one case in depth","A single organisation, event or person"]
      ]},
      "A key risk is the [[hawthorne-effect|Hawthorne effect]]: people behave differently because they know they’re being observed. It is named after workplace studies at Western Electric’s Hawthorne Works near Chicago in the 1920s and 1930s. Researchers reduce it by staying long enough for people to get used to them.",
      "Field notes are written up systematically, often daily, and later coded for themes.",
      "Field researchers need **access**, often through a trusted contact (sometimes called a gatekeeper), and must build **rapport** so that people act naturally around them. They keep field notes that separate what they saw and heard from their own interpretations, and often combine observation with informal interviews and documents. Leaving the field ethically, without abandoning relationships abruptly, is part of the method too.",
      "Because it involves close relationships, field research also raises particular ethical questions about consent, privacy and how people are portrayed."
     ],
     pro:[
      "Field researchers make choices about their role: from complete observer to full participant, and from overt (people know they’re being studied) to covert. Covert research raises serious ethical problems and is permitted by ethics codes only in rare cases with ethics committee approval (see {{research-ethics}}).",
      "Strengths: rich, detailed data; access to meanings and processes; discovery of things researchers didn’t know to ask about. Limits: small numbers, difficulty generalising, dependence on the researcher’s interpretation, and the time required. Ethnographers address these through reflexivity (reporting their own position and influence), long-term engagement, triangulation with other data, and checking interpretations with participants.",
      "Ethnography is shared with anthropology and is used worldwide, from studies of factory workers and street vendors to hospitals, schools and online communities. Digital ethnography raises new questions about consent and privacy in spaces that feel public but whose members don’t expect to be studied.",
      "Your textbook also notes that one participant-observation account it describes was later questioned, a reminder to check sources even for vivid fieldwork stories.",
      "Case studies can be chosen strategically: a typical case shows how something usually works; an extreme or unusual case tests the limits of a theory; and a critical case is one where, if a theory fails, it is likely to fail elsewhere too."
     ]
    },
    related:["survey-research","research-ethics","symbolic-interactionism","scientific-method-sociology"],
    read:[{book:"soc", where:"Chapter 2, Section 2.2 “Research Methods”: “Field Research”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Research Methods", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.03%3A_Research_Methods"}], checked:"2026-11"},

   {id:"experiments-sociology", title:"Experiments in sociology", aka:["field experiments","control group","random assignment"], tags:["sociology","research","methods"],
    summary:"Testing cause and effect by changing one variable for an experimental group and comparing it with a control group.",
    levels:{
     starter:[
      "An [[experiment]] tests a hypothesis by changing one thing (the independent variable) and measuring what happens to another (the dependent variable).",
      "People are split into an **experimental group**, who get the change, and a **control group**, who don’t. If the groups were alike to start with, a difference afterwards points to the change as the cause.",
      "Experiments can happen in a laboratory or in real life (field or natural experiments).",
      "Example: a school wants to know whether a mentoring scheme improves attendance. It could randomly offer mentoring to half the students who apply and compare attendance between the two groups.",
      {key:"Experiments are the strongest way to test cause and effect, but many social questions can’t ethically be tested this way."}
     ],
     builder:[
      "**Random assignment** is what makes experiments powerful: putting people into groups by chance makes the groups similar on average in every way, including ways the researcher didn’t measure.",
      {ex:"A charity wants to know whether a reminder text increases attendance at free health checks. It randomly assigns 2,000 people who booked appointments: half get a text the day before, half don’t. If attendance is higher in the text group, the reminder is the most likely cause, because random assignment balanced everything else.", label:"Worked example: a simple field experiment"},
      "**Correspondence (audit) studies** are a widely used field experiment in sociology. Researchers send employers or landlords pairs of applications that are identical except for one detail, such as a name associated with a particular ethnic group, and compare the responses. Studies of this kind have been run in many countries.",
      "Your textbook describes a 1971 US study in which stickers supporting the Black Panther Party were placed on students’ cars, after which the drivers received many traffic tickets.",
      "The control group matters because many things change over time anyway. Without one, you can’t tell whether an improvement came from the change you made or from something else that happened at the same time, such as a new school year or better weather."
     ],
     pro:[
      "Main limits:",
      {list:[
        "**External validity:** results from artificial settings or specific populations may not generalise to real life or other places.",
        "**Ethics:** you can’t randomly assign people to poverty, divorce or discrimination, and deception requires strict safeguards (see {{research-ethics}}).",
        "**Reactivity:** participants who know they’re in a study may behave differently (the Hawthorne effect).",
        "**Mechanisms:** an experiment can show *that* something works without showing *why*."
      ]},
      "Natural experiments offer an alternative: researchers compare groups affected differently by an event or policy for reasons unrelated to the outcome, such as a lottery for school places or a rule change that applies only above an age cut-off.",
      "Well-known experiments from psychology, such as Milgram’s obedience studies (from 1961) and the Stanford Prison Experiment (1971), are cited in your textbook as cases that raised serious ethical concerns; the Stanford study’s validity has also been strongly questioned.",
      "Ethics committees review social experiments closely. Researchers must weigh benefits against risks, avoid withholding something already known to help people, and respect consent. Field experiments that involve people unknowingly, such as employers in correspondence studies, are debated; they are usually justified by minimal harm and the public value of detecting discrimination. Many researchers now pre-register experiments, publicly stating their hypotheses and analysis plans in advance."
     ]
    },
    related:["correlation-causation","scientific-method-sociology","research-ethics"],
    read:[{book:"soc", where:"Chapter 2, Section 2.2 “Research Methods”: “Experiments”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Research Methods", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.03%3A_Research_Methods"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Ethical Concerns", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.04%3A_Ethical_Concerns"}], checked:"2026-11"},

   {id:"secondary-data", title:"Secondary data and content analysis", aka:["secondary analysis","official statistics","content analysis","unobtrusive research"], tags:["sociology","research","methods"],
    summary:"Analysing data someone else collected, and systematically coding texts, images and media.",
    levels:{
     starter:[
      "[[secondary-data|Secondary data]] is information someone else already collected: censuses, government statistics, international databases, old surveys, archives, organisations’ records.",
      "[[content-analysis|Content analysis]] systematically counts and codes what appears in texts, images or media, such as how often women and men are quoted as experts in news stories.",
      "Both are **nonreactive**: the people involved don’t know they’re being studied, so the research can’t change their behaviour.",
      "Example: to see how the age at which people first marry has changed, you don’t need to survey anyone. Census and registration records from past decades already hold the answer. The skill lies in finding trustworthy sources and reading their definitions carefully.",
      {key:"Secondary data lets one person study whole countries and decades. The catch: it was collected for someone else’s purpose."}
     ],
     builder:[
      "The UK Data Service describes secondary analysis as re-analysing data collected by someone else, often for a different purpose. It lists benefits (access to large datasets one person couldn’t create, low cost, no need to contact participants again) and limits (no insider knowledge of how the data was collected, time needed to learn a dataset, data that may not fit your question, and ethical questions about re-use).",
      "Common sources: national statistics offices, the World Bank’s and UN agencies’ open data, OECD databases, data archives such as the UK Data Service, and international survey programmes.",
      "Doing content analysis well means writing clear **coding rules** before counting, testing whether two coders agree (reliability), and checking that the categories capture what you mean (validity).",
      "Before using any figure, check four things: who produced it, when, how the concept was defined, and how the data was collected (a full census, a sample survey or administrative records). National statistics offices publish this information as methodology notes or metadata.",
      "Content analysis can be quantitative (counting how often something appears) or qualitative (interpreting themes, framing and tone). Many studies combine both.",
      "Secondary analysis is often the fastest and cheapest way to start a project: look at what existing data already shows before collecting anything new."
     ],
     pro:[
      "Official statistics reflect the decisions of the organisations that produce them. Recorded crime depends on what is reported and recorded; unemployment figures depend on definitions. Durkheim’s use of official suicide statistics in *Suicide* (1897) was later criticised on exactly these grounds, since how deaths were classified could vary between places.",
      "Comparing countries requires harmonised definitions; international bodies publish metadata explaining how each indicator is defined and collected. Always record the source, year, definition and method of any figure you use.",
      "Digital trace data (social media posts, search trends, mobile data) is a fast-growing form of secondary data. It is huge but often unrepresentative (not everyone uses each platform), its definitions are set by companies, and it raises privacy questions: the ASA Code of Ethics says researchers must not attempt to re-identify individuals in large datasets.",
      "Historical and comparative sociology rely heavily on archives, a reminder that secondary data includes letters, diaries, court records and newspapers, not just numbers.",
      "Administrative data, such as tax, school or health records collected while running services, are increasingly linked and made available to approved researchers in secure settings. They offer huge coverage but raise questions of consent and privacy, and they record only what the administration needed to know."
     ]
    },
    related:["survey-research","research-ethics","measuring-inequality"],
    read:[{book:"soc", where:"Chapter 2, Section 2.2 “Research Methods”: “Secondary Data Analysis”"}],
    sources:[{t:"UK Data Service: Getting started with secondary data analysis", url:"https://ukdataservice.ac.uk/app/uploads/gettingstartedsda2024-04-22.pdf"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Research Methods", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.03%3A_Research_Methods"}], checked:"2026-11"},

   {id:"research-ethics", title:"Research ethics", aka:["informed consent","confidentiality","anonymity","IRB","ethics committee","ASA Code of Ethics"], tags:["sociology","research","ethics"],
    summary:"The principles that protect people who take part in research: consent, confidentiality, avoiding harm and independent review.",
    levels:{
     starter:[
      "Research about people can hurt people, so sociologists follow ethics rules. The core ones:",
      {list:[
        "**[[informed-consent|Informed consent]]:** people agree to take part after being told what it involves, and can stop at any time.",
        "**Avoid harm:** physical, emotional, social, legal or financial.",
        "**Protect identities:** through [[confidentiality]] (the researcher knows but never reveals who said what) or [[anonymity]] (no one, including the researcher, can link answers to a person).",
        "**Honesty:** report results truthfully, including unwelcome ones."
      ]},
      "Ethics isn’t only for professionals. If you interview a friend for a class project, ask first, explain what it’s for, let them skip questions, and keep what they say private.",
      {key:"People who take part in research are doing researchers a favour. Ethics rules make sure they aren’t harmed by it."}
     ],
     builder:[
      "Before collecting data, researchers at universities and many other organisations must get approval from an [[ethics-committee|ethics review]] body: an institutional review board (IRB) in the United States, and research ethics committees or boards in many other countries.",
      "The American Sociological Association’s **Code of Ethics** (current version approved June 2018) sets out general principles (professional competence; integrity; professional and scientific responsibility; respect for people’s rights, dignity and diversity; social responsibility; human rights) and enforceable standards. Its standards say, among other things, that:",
      {list:[
        "Consent is an ongoing process; in long studies participants are reminded of their right to stop.",
        "Deception is allowed only if risk is minimal, the research is valuable, there is no non-deceptive alternative, and an ethics board approves; participants must be debriefed.",
        "Confidential information must be protected, and researchers must tell participants about any legal limits to confidentiality.",
        "Researchers must not try to re-identify individuals in large datasets."
      ]},
      "Your textbook lists the code’s requirements as: objectivity and integrity, respect for privacy and dignity, protection from harm, confidentiality, informed consent, acknowledging collaborators, and disclosing funding.",
      "Researchers also think about **power**. A teacher studying their own students, or a manager surveying their own staff, must make sure people don’t feel pressured to take part or to give particular answers."
     ],
     pro:[
      "Modern rules grew from abuses. The Tuskegee study (1932–1972) withheld treatment from Black men with syphilis; Laud Humphreys’ *Tearoom Trade* (1970) used covert observation and traced participants’ homes; psychology experiments such as Milgram’s caused severe distress. Your textbook also discusses Henrietta Lacks, whose cells were taken and widely used without her consent.",
      "Hard cases remain. Research with groups at risk (undocumented migrants, people who use drugs, children, people in conflict zones) may require extra protections, and in some countries researchers can be legally compelled to reveal data. Studies of online communities blur public and private. Participatory approaches involve communities in designing research, partly to shift power towards those being studied.",
      "Ethics also covers what happens after data collection: secure storage, careful anonymisation (removing or changing details that could identify someone, not just names), honest reporting, credit for collaborators and transparency about funding.",
      "Note: your textbook says the ASA code was “established in 1905”. The ASA itself was founded in 1905, at Johns Hopkins University; the current code dates from 2018.",
      "Ethics rules differ between countries and institutions, so researchers working internationally must meet the requirements of every place involved and respect local expectations about consent, such as whether community leaders should be consulted as well as individuals."
     ]
    },
    related:["field-research","experiments-sociology","secondary-data","survey-research"],
    read:[{book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns”"}],
    sources:[{t:"American Sociological Association: Code of Ethics (June 2018)", url:"https://www.asanet.org/wp-content/uploads/asa_code_of_ethics-june2018.pdf"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Ethical Concerns", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.04%3A_Ethical_Concerns"},{t:"American Sociological Association: History of ASA", url:"https://www.asanet.org/about/history-of-asa"}], checked:"2026-11"},

   {id:"c-wright-mills", title:"C. Wright Mills", aka:["Charles Wright Mills","Mills"], tags:["sociology","thinkers"],
    summary:"American sociologist (1916–1962) who coined “the sociological imagination” and described a US “power elite”.",
    levels:{
     starter:[
      "Charles Wright Mills (1916–1962) was an American sociologist, born in Waco, Texas, who taught at Columbia University in New York from 1946.",
      "His big idea, from *The Sociological Imagination* (1959), is that we understand our own lives better when we connect them to the society and history around us. He distinguished [[personal-trouble|personal troubles]] (problems within one person’s life) from [[public-issue|public issues]] (problems rooted in how society is organised).",
      "He also argued that sociologists have a responsibility to address the big problems of their time, not just to observe from a distance.",
      "Mills wrote for a wide audience, not only for other academics, and his books were read well beyond universities. He believed ordinary people could use sociology to understand their own situations.",
      {key:"Mills: see the link between your biography and your society’s history."}
     ],
     builder:[
      {table:[
        ["Work","Year","Focus"],
        ["The New Men of Power","1948","American labour union leaders"],
        ["White Collar","1951","The growing middle class of office workers"],
        ["The Power Elite","1956","A connected elite of business, military and political leaders"],
        ["The Sociological Imagination","1959","What sociology is for, and how to practise it"]
      ]},
      "Mills drew on Max Weber’s distinctions between class, status and power, and helped popularise Weber’s ideas in the United States. *The Power Elite* belongs to the conflict tradition (see {{conflict-theory}}): it argued that a small, interconnected group made decisions with huge consequences for everyone else.",
      "Today, the sociological imagination opens introductory sociology courses worldwide, and “troubles versus issues” is a standard tool for analysing everything from unemployment to housing to health.",
      "*White Collar* described the growing class of office workers, salespeople and managers in mid-century America, arguing that they had gained security but lost independence and control over their work. *The Power Elite* argued that leaders of large corporations, the military and the federal government moved between these worlds, shared backgrounds and made decisions with little public accountability. Researchers still use his questions to study elites and decision-making in many countries.",
      "Mills’s style was deliberately readable, and his books were reviewed and debated in newspapers and magazines as well as academic journals."
     ],
     pro:[
      "In *The Sociological Imagination* Mills criticised two dominant styles in mid-century American sociology: “grand theory”, his name for abstract system-building of the kind Talcott Parsons produced, and “abstracted empiricism”, narrow statistical research detached from big questions. He called instead for sociology that is historically informed, comparative and focused on significant public problems.",
      "*The Power Elite* was controversial. Pluralist political scientists, notably Robert Dahl, argued that power in the United States was spread across competing groups rather than concentrated in one elite, and challenged Mills to show the elite’s influence in concrete decisions. The debate shaped decades of research on power.",
      "Mills was an outsider in his discipline: combative, politically engaged and critical of both mainstream sociology and Cold War politics. He died in 1962, aged 45. His legacy lies in public sociology, the study of elites and power, and the enduring idea that private experience and public history illuminate each other.",
      "The appendix to *The Sociological Imagination*, “On Intellectual Craftsmanship”, is still widely read as practical advice: keep a file of notes and ideas, connect your own experience to your research, and treat thinking as a craft that improves with practice.",
      "Biographies by Daniel Geary (2009) and Stanley Aronowitz (2012) trace his intellectual development and influence."
     ]
    },
    related:["sociological-imagination","conflict-theory","max-weber"],
    read:[{book:"soc", where:"Chapter 1, Section 1.1 “What Is Sociology?”"}],
    sources:[{t:"Britannica: C. Wright Mills", url:"https://www.britannica.com/biography/C-Wright-Mills"}], checked:"2026-11"},

   {id:"emile-durkheim", title:"Émile Durkheim", aka:["Durkheim","social facts","Suicide"], tags:["sociology","thinkers"],
    summary:"French sociologist (1858–1917) who argued that social facts shape individuals, and showed it with his study of suicide rates.",
    levels:{
     starter:[
      "Émile Durkheim (1858–1917) was a French sociologist, born in Épinal, who did more than anyone to establish sociology as an academic subject in France.",
      "His big idea is that society is real and powerful in its own right. [[social-fact|Social facts]] (laws, morals, customs, beliefs, rituals) exist outside any one person and shape how people think and act.",
      "In *Suicide* (1897) he showed that even this most private act follows social patterns: rates differed steadily between groups, depending on how strongly people were tied into society.",
      "Durkheim believed sociology should be a science with its own subject matter, separate from psychology and philosophy, and he worked hard to win it a place in French universities.",
      {key:"Durkheim: to explain social patterns, look at society, not just at individuals."}
     ],
     builder:[
      {table:[
        ["Work","Year","Key idea"],
        ["The Division of Labour in Society","1893","Mechanical solidarity (based on similarity) gives way to organic solidarity (based on interdependence)"],
        ["The Rules of Sociological Method","1895","Sociology studies social facts, treated as things"],
        ["Suicide","1897","Suicide rates vary with social integration and regulation"],
        ["The Elementary Forms of Religious Life","1912","Religion binds communities through the sacred and shared ritual"]
      ]},
      "Durkheim introduced [[anomie]]: a condition in which norms are weak, absent or conflicting, often during rapid change, leaving people without clear guidance. Anomie is still used to study deviance and social change (see {{theories-of-deviance}}).",
      "He taught at the University of Bordeaux from 1887 and later in Paris, and founded the journal *L’Année sociologique* in 1896. His questions about what holds society together are central to functionalism (see {{functionalism}}).",
      "Durkheim’s approach is often called functionalist, because he asked what each social fact does for society, and positivist, because he used comparative statistics to test explanations. He also cared about education: he trained teachers and argued that schools could build the shared moral commitments a modern, diverse society needs.",
      "Today Durkheim’s ideas appear in studies of social cohesion, community, religion, education, deviance and the effects of rapid social change."
     ],
     pro:[
      "In *Suicide*, Durkheim distinguished types linked to too little or too much integration and regulation: egoistic (weak integration), altruistic (excessive integration), anomic (weak regulation) and, in a brief note, fatalistic (excessive regulation). He reported, for example, higher rates among Protestants than Catholics and among unmarried than married people in the countries he studied.",
      "Critiques:",
      {list:[
        "**Data:** later sociologists argued that official suicide statistics reflect how officials classify deaths, which may itself vary by religion and community.",
        "**Groups and individuals:** inferring individual motives from group rates risks the ecological fallacy.",
        "**Fieldwork:** Britannica notes that critics faulted him for relying on others’ reports, for example about Australian peoples in *The Elementary Forms*, rather than his own fieldwork.",
        "**Conservatism:** his focus on order and integration fed into functionalism, which critics see as neglecting conflict."
      ]},
      "His legacy is immense: the idea of social facts, the use of comparative statistics, and the concepts of solidarity, anomie and the [[sacred]] and [[profane]] remain basic tools across sociology, anthropology and the study of religion.",
      "Durkheim worked during a turbulent period in France. During the Dreyfus affair he campaigned for Dreyfus’s exoneration and publicly defended individual rights. His nephew Marcel Mauss and other students carried his work forward through *L’Année sociologique*, influencing anthropology as well as sociology."
     ]
    },
    related:["founders-of-sociology","functionalism","sociological-imagination","max-weber"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology”: “Émile Durkheim”"}],
    sources:[{t:"Britannica: Émile Durkheim", url:"https://www.britannica.com/biography/Emile-Durkheim"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"}], checked:"2026-11"},

   {id:"karl-marx", title:"Karl Marx", aka:["Marx","class conflict","historical materialism"], tags:["sociology","thinkers"],
    summary:"German philosopher and economist (1818–1883) whose analysis of class conflict and capitalism shaped conflict theory.",
    levels:{
     starter:[
      "Karl Marx (1818–1883) was a German philosopher, economist and political activist, born in Trier, who spent most of his later life in London. He never called himself a sociologist, but his ideas run through the discipline.",
      "His big idea is that history is shaped by conflict between social classes over who owns and controls the means of production (land, factories, machines). Under capitalism, he argued, the [[bourgeoisie]] (owners) grow rich from the labour of the [[proletariat]] (workers).",
      "Sociologists use his questions, especially “who benefits?”, in {{conflict-theory}}, whether or not they share his political conclusions.",
      "Marx also wrote about how work under capitalism could leave people cut off from what they make and from each other, an idea he called alienation.",
      {key:"Marx: to understand a society, look at how it organises work and who owns what."}
     ],
     builder:[
      {table:[
        ["Work","Year","Focus"],
        ["The Communist Manifesto (with Friedrich Engels)","1848","Class struggle as the driving force of history; a political call to action"],
        ["Capital, Volume 1","1867","How capitalism produces profit from workers’ labour"]
      ]},
      "Key concepts sociologists still use:",
      {list:[
        "**Historical materialism:** the way a society produces its material needs shapes its institutions, laws and ideas.",
        "**Class:** a group defined by its relationship to the means of production.",
        "**Alienation:** workers become cut off from the products of their work, the work process, each other and their own potential.",
        "**Ideology:** dominant ideas in a society tend to reflect the interests of its dominant class."
      ]},
      "Your textbook notes that the gap between factory owners and workers during the Industrial Revolution shaped Marx’s theory of class conflict.",
      "Marx spent much of his adult life in exile, moving between Germany, France and Belgium before settling in London in 1849, where he studied economic records in the British Museum’s library while writing *Capital*. His collaborator Friedrich Engels, who had described working-class conditions in Manchester, supported him financially and edited later volumes of *Capital* after Marx’s death.",
      "Today his ideas appear in sociology mainly in research on class, work, inequality and globalisation, often combined with insights from other traditions."
     ],
     pro:[
      "Marx’s influence on sociology runs through conflict theory, studies of class and inequality (see {{class-caste}}), the sociology of work, and critical theory. Weber developed much of his own work in dialogue with Marx, adding status and power to class and stressing the role of ideas.",
      "Critiques, presented without taking sides:",
      {list:[
        "**Predictions:** he expected revolution to come first in the most industrialised countries and capitalism to collapse; that did not happen as he foresaw, and capitalist economies changed through reforms, welfare states and a growing middle class.",
        "**Economic determinism:** critics argue he gave too much weight to economics and too little to culture, religion, nationalism, gender and race; later Marxist and non-Marxist scholars have addressed these.",
        "**Politics:** twentieth-century states that claimed to follow his ideas were authoritarian. Scholars debate how far those regimes reflected Marx’s own writings."
      ]},
      "Whatever one’s view of his politics, Marx’s questions about power, labour and inequality remain among the most widely used in social science.",
      "Sociologists distinguish between Marx as an analyst of class, labour and capitalism and Marxism as a political movement. Many researchers use Marxian concepts such as class relations or alienation as analytical tools without endorsing any political programme, while others reject them in favour of different explanations of inequality."
     ]
    },
    related:["conflict-theory","founders-of-sociology","max-weber"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology”: “Karl Marx”"}],
    sources:[{t:"Britannica: Karl Marx", url:"https://www.britannica.com/biography/Karl-Marx"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"}], checked:"2026-11"},

   {id:"max-weber", title:"Max Weber", aka:["Weber","verstehen","rationalisation","value neutrality"], tags:["sociology","thinkers"],
    summary:"German sociologist (1864–1920) who argued that sociology must understand the meanings behind action, and studied religion, bureaucracy and authority.",
    levels:{
     starter:[
      "Max Weber (1864–1920) was a German sociologist and political economist, born in Erfurt, who died in Munich.",
      "His big idea is that people act on meanings, beliefs and motives, so sociologists must understand action from the actor’s point of view. He called this [[verstehen]], German for deep understanding.",
      "In *The Protestant Ethic and the Spirit of Capitalism* (1904–05) he argued that religious beliefs helped shape the rise of modern capitalism. He also wrote about bureaucracy and argued that researchers should practise [[value-neutrality|value neutrality]].",
      "Weber also studied authority: why people accept being governed by tradition, by a charismatic leader, or by written rules and officials.",
      "His ideas about bureaucracy, religion and authority are still used to study governments, companies and religions today.",
      {key:"Weber: to explain what people do, understand what it means to them."}
     ],
     builder:[
      "Key ideas sociologists still use:",
      {list:[
        "**Verstehen and interpretive sociology:** explaining social action by understanding its meaning.",
        "**Ideal types:** simplified models (such as “bureaucracy”) used to compare real cases.",
        "**Rationalisation:** modern life increasingly organised around efficiency, calculation and rules; see {{bureaucracy}}.",
        "**Class, status and party:** inequality has several dimensions that don’t always line up.",
        "**Three types of authority:** traditional, charismatic and rational-legal (see {{power-authority}})."
      ]},
      "His argument in *The Protestant Ethic* was that certain Protestant beliefs encouraged disciplined work, saving and reinvestment, creating a “spirit” that suited capitalism. Your textbook says he founded a sociology department at the University of Munich in 1919. Much of his work, including *Economy and Society*, was published after his death.",
      "Weber argued that modern societies are marked by rationalisation: tradition and magic give way to calculation, rules and specialised experts. He called the loss of mystery that comes with this the “disenchantment” of the world. He saw bureaucracy as the most efficient form of large-scale organisation but warned that it could become rigid and impersonal.",
      "He also wrote comparative studies of religion in China and India, asking why modern capitalism developed where it did.",
      "Weber’s wife, Marianne Weber, a scholar in her own right, edited and published many of his works after his death."
     ],
     pro:[
      "Weber wrote that rationalised modern life could become a kind of cage; Talcott Parsons’s 1930 English translation of *The Protestant Ethic* rendered this as the famous “iron cage”. Later scholars have debated the translation and its implications; George Ritzer’s McDonaldization thesis applies the idea to fast-food-style organisation (see {{mcdonaldization}}).",
      "Critiques:",
      {list:[
        "**The Protestant Ethic thesis:** historians have argued that capitalist practices existed earlier in Catholic regions such as the Italian city-states, and that other factors (trade, institutions, colonial wealth) mattered more. Weber himself said he was tracing one causal strand, not the whole story.",
        "**Value neutrality:** many sociologists doubt full value freedom is possible; Weber’s own position was subtler, distinguishing the choice of topic (shaped by values) from the conduct of analysis (which should be impartial)."
      ]},
      "Weber’s legacy runs through interpretive sociology, the study of organisations and bureaucracy, the sociology of religion, political sociology and comparative historical research.",
      "Late in life Weber gave two famous lectures, “Science as a Vocation” (delivered 1917) and “Politics as a Vocation” (delivered 1919), on the limits of science in answering questions of value and on the ethics of political leadership. Both are still widely read.",
      "Weber’s methods, especially ideal types and careful historical comparison, remain models for comparative sociology."
     ]
    },
    related:["founders-of-sociology","karl-marx","emile-durkheim","scientific-method-sociology"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology”: “Max Weber”"}],
    sources:[{t:"Britannica: Max Weber", url:"https://www.britannica.com/biography/Max-Weber-German-sociologist"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"}], checked:"2026-11"}
  ],
  terms:[
   {id:"sociology", term:"Sociology", def:"The systematic study of society and social interaction, from small groups to whole societies.", codex:"sociology"},
   {id:"society", term:"Society", def:"A group of people who live in a defined area, interact with one another and share a common culture.", codex:"sociology"},
   {id:"culture", term:"Culture", def:"A group’s shared practices, values and beliefs: its whole way of life.", codex:"sociology"},
   {id:"macro-level", term:"Macro-level", def:"A wide-scale view of large social structures and long-term change, such as economies, states or education systems.", codex:"theoretical-perspectives"},
   {id:"micro-level", term:"Micro-level", def:"A close-up view of specific relationships and face-to-face interaction between individuals or small groups.", codex:"theoretical-perspectives"},
   {id:"sociological-imagination", term:"Sociological imagination", def:"C. Wright Mills’s term for seeing the link between a person’s own experience and the wider society and its history.", codex:"sociological-imagination"},
   {id:"personal-trouble", term:"Personal trouble", def:"In Mills’s terms, a problem within one person’s life and immediate relationships, whose causes lie mainly in that small circle.", codex:"sociological-imagination"},
   {id:"public-issue", term:"Public issue", def:"In Mills’s terms, a problem that affects many people and comes from how society is organised, so individuals can’t solve it alone.", codex:"sociological-imagination"},
   {id:"social-fact", term:"Social fact", def:"Durkheim’s term for laws, morals, values, customs, beliefs and rituals that exist outside individuals and shape how they act.", codex:"emile-durkheim"},
   {id:"positivism", term:"Positivism", def:"The approach, named by Comte, of studying society with the methods of natural science: looking for general patterns and causes in observable evidence.", codex:"founders-of-sociology"},
   {id:"antipositivism", term:"Antipositivism", def:"The view, associated with Weber, that researchers should focus on the subjective meanings people give their actions rather than copying natural science.", codex:"founders-of-sociology"},
   {id:"verstehen", term:"Verstehen", def:"German for understanding in a deep way. Weber’s term for grasping an action’s meaning from the point of view of the people involved.", codex:"max-weber"},
   {id:"quantitative-data", term:"Quantitative data", def:"Information in numerical form that can be counted and analysed statistically, such as survey answers turned into percentages.", codex:"survey-research"},
   {id:"qualitative-data", term:"Qualitative data", def:"Information in words, observations or images, such as interview answers, field notes or documents.", codex:"field-research"},
   {id:"theory", term:"Theory", def:"A proposed explanation of social interactions or society, tested against evidence.", codex:"theoretical-perspectives"},
   {id:"paradigm", term:"Paradigm", def:"A broad framework of assumptions and questions within a discipline that guides which theories researchers build and how they test them.", codex:"theoretical-perspectives"},
   {id:"structural-functionalism", term:"Structural functionalism", def:"A macro perspective that sees society as a structure of interrelated parts, each contributing to the stability of the whole. Often just called functionalism.", codex:"functionalism"},
   {id:"manifest-function", term:"Manifest function", def:"An intended, recognised consequence of a social pattern, such as a school teaching job skills.", codex:"functionalism"},
   {id:"latent-function", term:"Latent function", def:"An unintended or unrecognised consequence of a social pattern, such as students meeting lifelong friends at school.", codex:"functionalism"},
   {id:"dysfunction", term:"Dysfunction", def:"A social pattern with undesirable consequences for how society works, such as an exam system that pushes many students to drop out.", codex:"functionalism"},
   {id:"conflict-theory", term:"Conflict theory", def:"A macro perspective that sees society as a competition for limited resources, asking who benefits and who pays.", codex:"conflict-theory"},
   {id:"symbolic-interactionism", term:"Symbolic interactionism", def:"A micro perspective that studies how people create, share and act on meanings in everyday interaction.", codex:"symbolic-interactionism"},
   {id:"dramaturgy", term:"Dramaturgy", def:"Goffman’s approach of viewing social life as theatre, with a front stage where we manage impressions and a backstage where we relax.", codex:"symbolic-interactionism"},
   {id:"feminist-theory", term:"Feminist theory", def:"A family of perspectives that put gender at the centre, studying how societies organise relationships between genders and produce inequality.", codex:"feminist-theory"},
   {id:"intersectionality", term:"Intersectionality", def:"The idea, named by Kimberlé Crenshaw in 1989, that categories such as gender, race, class and migration status combine to shape experience in ways no single category explains.", codex:"feminist-theory"},
   {id:"empirical-evidence", term:"Empirical evidence", def:"Information gathered through observation, measurement or experiment that other people can check.", codex:"scientific-method-sociology"},
   {id:"hypothesis", term:"Hypothesis", def:"A testable statement about how two or more variables are related, which evidence could show to be wrong.", codex:"scientific-method-sociology"},
   {id:"variable", term:"Variable", def:"A characteristic that can differ between people, groups or over time, such as age, income or trust.", codex:"scientific-method-sociology"},
   {id:"independent-variable", term:"Independent variable", def:"The variable presumed to cause a change: the “if” in “if X changes, Y changes”.", codex:"scientific-method-sociology"},
   {id:"dependent-variable", term:"Dependent variable", def:"The variable presumed to change in response: the effect.", codex:"scientific-method-sociology"},
   {id:"operational-definition", term:"Operational definition", def:"A definition of a concept in terms of the concrete steps used to measure it, such as measuring “isolation” as conversations per week.", codex:"scientific-method-sociology"},
   {id:"correlation", term:"Correlation", def:"A relationship in which two variables change together, either in the same direction (positive) or opposite directions (negative).", codex:"correlation-causation"},
   {id:"causation", term:"Causation", def:"A relationship in which a change in one variable actually produces a change in another.", codex:"correlation-causation"},
   {id:"spurious-correlation", term:"Spurious correlation", def:"A correlation between two variables that is really produced by a third variable affecting both.", codex:"correlation-causation"},
   {id:"reliability", term:"Reliability", def:"How consistently a measure gives the same results, so that a repeated study would find the same thing.", codex:"scientific-method-sociology"},
   {id:"validity", term:"Validity", def:"How well a study or measure captures what it was designed to measure.", codex:"scientific-method-sociology"},
   {id:"interpretive-framework", term:"Interpretive framework", def:"A research approach that seeks to understand social worlds from participants’ points of view, often without a hypothesis at the start.", codex:"scientific-method-sociology"},
   {id:"value-neutrality", term:"Value neutrality", def:"Weber’s principle of staying impartial, without bias or judgement, when conducting and interpreting research.", codex:"scientific-method-sociology"},
   {id:"population-research", term:"Population (in research)", def:"Everyone a study is about, such as all secondary-school teachers in a country.", codex:"survey-research"},
   {id:"sample", term:"Sample", def:"A manageable number of people chosen from a population to represent it.", codex:"survey-research"},
   {id:"random-sample", term:"Random sample", def:"A sample in which every member of the population has the same chance of being chosen.", codex:"survey-research"},
   {id:"survey", term:"Survey", def:"A method in which people answer questions about their behaviour, experiences or opinions, through a questionnaire or interview.", codex:"survey-research"},
   {id:"participant-observation", term:"Participant observation", def:"Field research in which the researcher joins a group’s routine activities to observe them in context.", codex:"field-research"},
   {id:"ethnography", term:"Ethnography", def:"Field research in which the researcher immerses themself in the everyday life of a whole community, often for months or years.", codex:"field-research"},
   {id:"case-study", term:"Case study", def:"An in-depth analysis of a single event, organisation, situation or person.", codex:"field-research"},
   {id:"hawthorne-effect", term:"Hawthorne effect", def:"When people change their behaviour because they know they are being studied.", codex:"field-research"},
   {id:"experiment", term:"Experiment", def:"A method that tests a hypothesis by changing the independent variable for an experimental group and comparing it with a control group.", codex:"experiments-sociology"},
   {id:"secondary-data", term:"Secondary data", def:"Data collected by someone else, such as censuses, official statistics, earlier surveys or archives, re-analysed for a new question.", codex:"secondary-data"},
   {id:"content-analysis", term:"Content analysis", def:"Systematically counting and coding what appears in texts, images or media.", codex:"secondary-data"},
   {id:"informed-consent", term:"Informed consent", def:"Agreement to take part in research, given voluntarily after being told what it involves, its risks and the right to stop at any time.", codex:"research-ethics"},
   {id:"confidentiality", term:"Confidentiality", def:"The researcher knows who gave which information but protects it and never reveals it in an identifiable way.", codex:"research-ethics"},
   {id:"anonymity", term:"Anonymity", def:"No one, including the researcher, can link the information to the person who gave it.", codex:"research-ethics"},
   {id:"ethics-committee", term:"Ethics review", def:"Independent checking of a study’s risks and safeguards before it starts, by an institutional review board (IRB) in the US or a research ethics committee or board elsewhere.", codex:"research-ethics"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u1-q01", lesson:"e2u1-l1", level:1, q:"Which is the best definition of sociology?", options:[
     {t:"The systematic study of society and social interaction", ok:true, why:"That is the textbook definition: sociology studies how people live together, using careful, checkable methods."},
     {t:"The study of individual minds and emotions", why:"That describes psychology. Sociology focuses on groups, interaction and social structures."},
     {t:"A collection of opinions about how society should be run", why:"Sociology is a research discipline based on evidence, not a set of opinions."},
     {t:"The study of ancient civilisations through their objects", why:"That is closer to archaeology."}
   ]},
   {id:"e2u1-q02", lesson:"e2u1-l1", level:1, q:"What is the difference between a society and a culture?", options:[
     {t:"A society is a group of people who interact in an area; culture is their shared practices, values and beliefs.", ok:true, why:"Society is the people and their relationships; culture is the way of life they share."},
     {t:"They mean exactly the same thing.", why:"They are closely linked but distinct. One society can contain many cultures."},
     {t:"Culture refers only to art, music and literature.", why:"In sociology culture means a group’s whole way of life, not only the arts."},
     {t:"A society is always one country, and a culture is always one religion.", why:"Neither is true. Cultures can cross borders, and societies can contain many religions."}
   ]},
   {id:"e2u1-q03", lesson:"e2u1-l1", level:1, q:"Who introduced the term “the sociological imagination”, and in which book?", options:[
     {t:"C. Wright Mills, in The Sociological Imagination (1959)", ok:true, why:"Mills named the idea in his 1959 book."},
     {t:"Émile Durkheim, in Suicide (1897)", why:"Durkheim showed social patterns in suicide rates, but the term is Mills’s."},
     {t:"Karl Marx, in The Communist Manifesto (1848)", why:"Marx wrote about class conflict; the term came a century later."},
     {t:"Max Weber, in The Protestant Ethic (1904–05)", why:"Weber is known for verstehen, not the sociological imagination."}
   ]},
   {id:"e2u1-q04", lesson:"e2u1-l1", level:2, q:"Which situation is best described as a public issue rather than a personal trouble?", options:[
     {t:"Across a country, many small farmers lose their land after a change in trade rules.", ok:true, why:"Many people are affected at once by a structural cause, the trade rules. That is a public issue."},
     {t:"Lucía loses her phone on a bus.", why:"One event within one person’s life is a personal trouble."},
     {t:"Kenji and his flatmate argue about the washing-up.", why:"A disagreement in one household, with no wider cause described, is a personal trouble."},
     {t:"Amara catches a cold after walking home in the rain.", why:"A one-off personal event with an individual cause is a personal trouble."}
   ]},
   {id:"e2u1-q05", lesson:"e2u1-l1", level:3, q:"Dmitri says: “Durkheim showed suicide follows social patterns, so I can predict which of my neighbours will take their own life.” What is wrong with his reasoning?", options:[
     {t:"Patterns describe rates in groups, not what any individual will do.", ok:true, why:"Group rates show tendencies. Using them to predict or judge one person is a basic error."},
     {t:"Durkheim actually found suicide has no social patterns.", why:"He found the opposite: rates differed steadily between groups."},
     {t:"Nothing: social patterns let you predict individuals exactly.", why:"Social patterns are probabilities across groups. They never determine one person’s actions."},
     {t:"Durkheim only studied one person in depth.", why:"Durkheim compared statistics for whole populations, not one person."}
   ]},
   {id:"e2u1-q06", lesson:"e2u1-l1", level:2, q:"Which is an example of a micro-level study?", options:[
     {t:"Observing how customers and staff negotiate prices at a market stall", ok:true, why:"Face-to-face interaction in a small setting is micro-level."},
     {t:"Comparing pension systems across 30 countries", why:"Whole national systems are macro-level."},
     {t:"Tracing how a language spread over three centuries", why:"Long-term, society-wide change is macro-level."},
     {t:"Measuring the growth of cities worldwide since 1950", why:"Global urbanisation is a macro-level trend."}
   ]},
   {id:"e2u1-q07", lesson:"e2u1-l1", level:3, q:"Ana notices that in her extended family, women who moved to the city in the 1990s mostly trained as nurses, while their brothers became drivers or mechanics. Which response best uses the sociological imagination?", options:[
     {t:"Ask how the job market, training opportunities and ideas about gender at that time shaped the choices open to each sibling.", ok:true, why:"This links individual biographies to the history and structure of their society, while still allowing for personal choice."},
     {t:"Conclude that women naturally prefer caring work.", why:"That assumes a fixed, natural explanation without looking at the social forces that shaped the options."},
     {t:"Assume it’s a coincidence.", why:"A repeated pattern across a family and generation calls for a social explanation, not coincidence."},
     {t:"Decide which sibling made the better choice.", why:"That is a value judgement, not an explanation of the pattern."}
   ]},
   {id:"e2u1-q08", lesson:"e2u1-l1", level:2, q:"Someone says, “Sociology is just common sense.” Which reply is most accurate?", options:[
     {t:"Common sense often contradicts itself or is wrong; sociology tests claims with systematic evidence.", ok:true, why:"Sayings like “birds of a feather flock together” and “opposites attract” can’t both be the rule. Research finds out which holds, when."},
     {t:"Yes, sociologists just write down what everyone already believes.", why:"Research often contradicts popular beliefs. That’s much of its value."},
     {t:"No, because sociology never uses evidence from everyday life.", why:"Sociology studies everyday life constantly; the difference is that it gathers evidence systematically."},
     {t:"Yes, so sociological findings don’t need to be checked.", why:"All findings need checking. That is why methods are reported in detail."}
   ]},
   {id:"e2u1-q09", lesson:"e2u1-l1", level:2, q:"Which job most directly uses the sociological skill of designing surveys and interviews?", options:[
     {t:"A user researcher finding out how different people use a public transport app", ok:true, why:"Planning questions, choosing whom to ask and analysing answers are core research skills from sociology."},
     {t:"A pilot flying a passenger plane", why:"Piloting relies on technical flight skills, not survey design."},
     {t:"A chef creating a new menu", why:"Cooking skills are central here, not social research methods."},
     {t:"A plumber repairing a leak", why:"Plumbing is a technical trade that doesn’t centre on survey design."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u1-q10", lesson:"e2u1-l2", level:1, q:"Which changes formed the main backdrop to the rise of sociology in 19th-century Europe?", options:[
     {t:"Industrialisation, urbanisation and political revolutions", ok:true, why:"Factories, fast-growing cities and revolutions transformed everyday life and raised new questions about order and change."},
     {t:"The invention of the internet and social media", why:"Those came more than a century later."},
     {t:"The end of all religious belief in Europe", why:"Religion changed and its authority was challenged, but it didn’t end, and that wasn’t the main backdrop."},
     {t:"A long period of social stability with little change", why:"The opposite: rapid change made understanding society feel urgent."}
   ]},
   {id:"e2u1-q11", lesson:"e2u1-l2", level:1, q:"What is Ibn Khaldun best known for in the history of sociology?", options:[
     {t:"Proposing a science of society in the Muqaddimah, centred on ʿasabiyyah (social cohesion)", ok:true, why:"His 14th-century Muqaddimah linked group cohesion to the rise and fall of dynasties, and he is often seen as a forerunner of sociology."},
     {t:"Inventing positivism in the 1830s", why:"Positivism was named by Comte in the 19th century."},
     {t:"Founding the American Sociological Association", why:"The ASA was founded in 1905 in the United States, centuries after Ibn Khaldun."},
     {t:"Writing The Philadelphia Negro", why:"That was W. E. B. Du Bois, in 1899."}
   ]},
   {id:"e2u1-q12", lesson:"e2u1-l2", level:1, q:"What did Auguste Comte mean by positivism?", options:[
     {t:"Studying society with the methods of natural science to discover its laws", ok:true, why:"Comte believed society follows laws that observation and science could uncover."},
     {t:"Always looking on the bright side of social problems", why:"Positivism has nothing to do with optimism; it’s about scientific method."},
     {t:"Understanding action only through people’s inner meanings", why:"That is closer to Weber’s verstehen, the interpretive approach."},
     {t:"Rejecting all numbers in research", why:"Positivism relies heavily on observable, often numerical, evidence."}
   ]},
   {id:"e2u1-q13", lesson:"e2u1-l2", level:2, q:"Harriet Martineau is important to sociology because she…", options:[
     {t:"translated Comte into English and wrote early systematic studies of society, including Society in America (1837)", ok:true, why:"She brought Comte to English readers (1853) and analysed slavery and women’s position in the US."},
     {t:"was the first person ever to use the word sociology", why:"Sieyès used it around 1780 and Comte popularised it in 1838."},
     {t:"founded conflict theory", why:"Conflict theory grew mainly from Marx."},
     {t:"invented the survey experiment", why:"That isn’t one of her contributions."}
   ]},
   {id:"e2u1-q14", lesson:"e2u1-l2", level:2, q:"In Suicide (1897), what did Durkheim argue explains differences in suicide rates between groups?", options:[
     {t:"How strongly people are integrated into and regulated by social groups", ok:true, why:"He linked rates to social integration and regulation, showing a social cause behind a seemingly private act."},
     {t:"Differences in the weather between countries", why:"Durkheim considered and rejected explanations like climate in favour of social ones."},
     {t:"Purely individual psychology, with no social pattern", why:"His point was the opposite: rates followed stable social patterns."},
     {t:"How wealthy each individual was, and nothing else", why:"Wealth wasn’t his central explanation; integration and regulation were."}
   ]},
   {id:"e2u1-q15", lesson:"e2u1-l2", level:2, q:"Which statement best captures Weber’s idea of verstehen?", options:[
     {t:"To explain social action, researchers must understand what it means to the people doing it.", ok:true, why:"Verstehen is understanding action from the actor’s point of view."},
     {t:"Researchers should count behaviours and ignore people’s reasons.", why:"That is the opposite of verstehen."},
     {t:"Society is a body whose organs each have a function.", why:"That is Spencer’s organic analogy, part of functionalism."},
     {t:"History is driven only by class conflict.", why:"That is Marx’s view; Weber added the role of beliefs and meanings."}
   ]},
   {id:"e2u1-q16", lesson:"e2u1-l2", level:3, q:"A researcher wants to compare unemployment rates across 50 countries and test whether they are linked to the share of jobs in manufacturing. Which approach is this closest to?", options:[
     {t:"Positivist: large-scale quantitative data used to test a relationship", ok:true, why:"Comparing statistics across many cases to test a general pattern follows the positivist tradition of Comte and Durkheim."},
     {t:"Interpretive: understanding meanings from the inside", why:"Nothing here involves exploring how people understand their situation."},
     {t:"Dramaturgical: studying front-stage performance", why:"Dramaturgy is a micro approach to interaction, not cross-national statistics."},
     {t:"Case study: analysing a single organisation in depth", why:"Fifty countries compared statistically is the opposite of a single case."}
   ]},
   {id:"e2u1-q17", lesson:"e2u1-l2", level:2, q:"What did W. E. B. Du Bois show in The Philadelphia Negro (1899)?", options:[
     {t:"That problems often blamed on Black residents’ character were rooted in discrimination, poverty and history", ok:true, why:"His door-to-door study of 1896–97 used evidence to challenge explanations based on character or biology."},
     {t:"That cities have no effect on people’s lives", why:"His study showed how urban conditions and discrimination shaped life chances."},
     {t:"That positivist methods can never be used to study race", why:"He used systematic empirical methods to study race."},
     {t:"That the Industrial Revolution never reached the United States", why:"That’s untrue and not his topic."}
   ]},
   {id:"e2u1-q18", lesson:"e2u1-l2", level:3, q:"Tomás reads a textbook timeline that lists only Comte, Marx, Durkheim and Weber as sociology’s founders. What is the strongest criticism of this list?", options:[
     {t:"It leaves out figures such as Martineau, Du Bois and Ibn Khaldun, who were overlooked largely because of gender, race or region.", ok:true, why:"Historians of sociology now recognise that the standard canon excluded important contributors for reasons unrelated to the quality of their work."},
     {t:"Marx should be removed because he lived in London.", why:"Where Marx lived is irrelevant to his influence on the discipline."},
     {t:"Weber shouldn’t be included because he used interpretive methods.", why:"Interpretive sociology is a core tradition, and Weber was central to it."},
     {t:"There’s nothing wrong; only European men made contributions.", why:"That ignores well-documented contributions by women, Black scholars and thinkers outside Europe."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u1-q19", lesson:"e2u1-l3", level:1, q:"What is a latent function?", options:[
     {t:"An unintended or unrecognised consequence of a social pattern", ok:true, why:"Merton used “latent” for consequences that aren’t intended or noticed, such as friendships formed at school."},
     {t:"The official, intended purpose of an institution", why:"That is a manifest function."},
     {t:"A pattern that harms the way society works", why:"That is a dysfunction (though a latent function can sometimes be harmful)."},
     {t:"A hidden conflict between social classes", why:"That describes a conflict-theory idea, not Merton’s term."}
   ]},
   {id:"e2u1-q20", lesson:"e2u1-l3", level:1, q:"Which question is most typical of conflict theory?", options:[
     {t:"Who benefits from this arrangement, and who pays?", ok:true, why:"Conflict theory sees society as competition over limited resources and asks whose interests are served."},
     {t:"How does this institution help society stay stable?", why:"That is the functionalist question."},
     {t:"What does this symbol mean to the people using it?", why:"That is the symbolic interactionist question."},
     {t:"How is the self formed through interaction?", why:"That is a symbolic interactionist question, from Mead."}
   ]},
   {id:"e2u1-q21", lesson:"e2u1-l3", level:2, q:"Mei studies how strangers in a hospital waiting room decide whether to start a conversation, using glances, posture and small talk. Which perspective fits best?", options:[
     {t:"Symbolic interactionism", ok:true, why:"Face-to-face interaction and the meanings of glances and gestures are the core of symbolic interactionism."},
     {t:"Structural functionalism", why:"Functionalism looks at how large structures contribute to stability, not at the details of small interactions."},
     {t:"Conflict theory", why:"Nothing in this study focuses on competition for resources or power."},
     {t:"Positivism", why:"Positivism is a research approach, not one of the theoretical perspectives, and this study is about meanings."}
   ]},
   {id:"e2u1-q22", lesson:"e2u1-l3", level:2, q:"In Goffman’s dramaturgy, which is an example of “backstage”?", options:[
     {t:"Teachers chatting informally in the staff room between classes", ok:true, why:"Backstage is out of the audience’s view, where people drop their public performance."},
     {t:"A teacher presenting a lesson to a class", why:"Performing for an audience is front stage."},
     {t:"A politician giving a televised speech", why:"That is a very public front-stage performance."},
     {t:"A receptionist greeting visitors", why:"Greeting the public is front stage."}
   ]},
   {id:"e2u1-q23", lesson:"e2u1-l3", level:1, q:"Who introduced the term intersectionality, and when?", options:[
     {t:"Kimberlé Crenshaw, in a 1989 article", ok:true, why:"The American legal scholar introduced it in a 1989 article in the University of Chicago Legal Forum."},
     {t:"Karl Marx, in 1848", why:"Marx focused on class; the term came much later."},
     {t:"Erving Goffman, in 1959", why:"Goffman developed dramaturgy, not intersectionality."},
     {t:"Auguste Comte, in 1838", why:"Comte popularised the word sociology, not intersectionality."}
   ]},
   {id:"e2u1-q24", lesson:"e2u1-l3", level:3, q:"A government report finds that, on average, women and men in a profession earn similar pay, and so do workers born in and outside the country. Fatima suspects a problem is still hidden. What analysis would best test her suspicion?", options:[
     {t:"Compare pay for combined groups, such as women born outside the country, with other groups.", ok:true, why:"This is an intersectional analysis: gaps can hide where categories combine, even when each category looks equal on its own."},
     {t:"Look only at the overall average pay for the whole profession.", why:"An overall average would hide even more than the separate comparisons."},
     {t:"Interview one manager about whether there is a problem.", why:"One person’s opinion can’t test whether a pay gap exists in the data."},
     {t:"Accept the report, because averages can’t hide anything.", why:"Averages for single categories can hide gaps at their intersections. That was Crenshaw’s point."}
   ]},
   {id:"e2u1-q25", lesson:"e2u1-l3", level:2, q:"Which critique is most often made of symbolic interactionism?", options:[
     {t:"It can neglect the large structures and power differences that shape interactions.", ok:true, why:"Its micro focus is both its strength and its main weakness."},
     {t:"It ignores what things mean to people.", why:"Meaning is precisely what it studies."},
     {t:"It explains everything through economic class.", why:"That critique is aimed at some versions of conflict theory."},
     {t:"It assumes society is always stable and harmonious.", why:"That critique is aimed at functionalism."}
   ]},
   {id:"e2u1-q26", lesson:"e2u1-l3", level:3, q:"A city introduces a congestion charge for driving into the centre. Which statement correctly applies a perspective?", options:[
     {t:"A conflict theorist asks whether lower-income drivers, who may have fewer alternatives, pay a larger share of their income.", ok:true, why:"Asking who bears the costs and who gains is the conflict perspective applied correctly."},
     {t:"A symbolic interactionist calculates the total revenue the charge raises.", why:"Revenue totals are a macro, economic question, not a study of meaning in interaction."},
     {t:"A functionalist asks only what the charge means to individual drivers emotionally.", why:"Meanings to individuals are an interactionist focus. A functionalist would ask how the charge affects the city system, such as traffic flow and public transport."},
     {t:"Feminist theory can’t say anything about transport.", why:"Feminist researchers study transport often, for example how travel patterns and safety differ by gender."}
   ]},
   {id:"e2u1-q27", lesson:"e2u1-l3", level:2, q:"Why do sociologists often use several theoretical perspectives together?", options:[
     {t:"Each asks different questions and notices different things, so together they give a fuller picture.", ok:true, why:"Like different maps of one city, each perspective shows something the others leave out."},
     {t:"Because all the perspectives are wrong.", why:"They aren’t wrong; each is partial, which is why combining them helps."},
     {t:"Because the perspectives always agree, so using more makes a study longer.", why:"They often disagree. Their different questions are what make combining them useful."},
     {t:"Because a study must use exactly five perspectives.", why:"There’s no such rule. Researchers choose what fits the question."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u1-q28", lesson:"e2u1-l4", level:1, q:"Which is the third step of the scientific method as your textbook lists it?", options:[
     {t:"Formulate a hypothesis", ok:true, why:"The steps are: ask a question, review the literature, formulate a hypothesis, design and conduct a study, draw conclusions, report results."},
     {t:"Report results", why:"That is the sixth and final step."},
     {t:"Ask a question", why:"That is the first step."},
     {t:"Draw conclusions", why:"That is the fifth step, after collecting data."}
   ]},
   {id:"e2u1-q29", lesson:"e2u1-l4", level:2, q:"In the hypothesis “Workers who can work from home some days report higher job satisfaction”, what is the dependent variable?", options:[
     {t:"Job satisfaction", ok:true, why:"Job satisfaction is the presumed effect that changes in response to working from home."},
     {t:"Working from home some days", why:"That is the independent variable, the presumed cause."},
     {t:"The number of workers in the study", why:"That is the sample size, not a variable in the hypothesis."},
     {t:"The company’s location", why:"Location isn’t mentioned in the hypothesis."}
   ]},
   {id:"e2u1-q30", lesson:"e2u1-l4", level:1, q:"What is an operational definition?", options:[
     {t:"A definition of a concept in terms of the concrete steps used to measure it", ok:true, why:"For example, measuring “isolation” as the number of conversations in the past week."},
     {t:"The dictionary meaning of a word", why:"A dictionary meaning doesn’t say how to measure the concept."},
     {t:"A definition used only by surgeons", why:"In research, “operational” means how a concept is put into practice as a measure."},
     {t:"A summary of a study’s results", why:"Results come after measurement. An operational definition is set before."}
   ]},
   {id:"e2u1-q31", lesson:"e2u1-l4", level:3, q:"A news story says: “Cities with more libraries have lower crime, so building libraries cuts crime.” What is the best criticism?", options:[
     {t:"A third variable, such as city wealth or public spending, could explain both more libraries and less crime.", ok:true, why:"The correlation may be spurious. Without ruling out third variables, it can’t show that libraries cause lower crime."},
     {t:"Libraries and crime can’t be counted.", why:"Both can be counted. The flaw is in the causal leap."},
     {t:"Correlations are always meaningless.", why:"Correlations are useful evidence; they just don’t prove cause on their own."},
     {t:"There’s no problem: a correlation always proves cause.", why:"Correlation alone never proves causation."}
   ]},
   {id:"e2u1-q32", lesson:"e2u1-l4", level:2, q:"A bathroom scale always shows a weight exactly 2 kg too high. Its readings are…", options:[
     {t:"reliable but not valid", ok:true, why:"It’s consistent (reliable) but consistently wrong (not valid)."},
     {t:"valid but not reliable", why:"An instrument that’s always wrong in the same way is consistent, so it is reliable; it’s the accuracy (validity) that fails."},
     {t:"both reliable and valid", why:"It doesn’t measure the true weight, so it isn’t valid."},
     {t:"neither reliable nor valid", why:"It gives the same reading every time, so it is reliable."}
   ]},
   {id:"e2u1-q33", lesson:"e2u1-l4", level:3, q:"Priya measures how religious people are in her country by counting attendance at weekly services. Several faith communities there don’t hold weekly gatherings. What is the main problem?", options:[
     {t:"Validity: the measure undercounts religiosity in traditions that don’t centre on weekly services.", ok:true, why:"The operational definition doesn’t capture the concept equally for everyone, so it doesn’t measure what it claims to."},
     {t:"Reliability: people won’t remember how many services they attended.", why:"Recall could be an issue, but the central problem is that the measure misses whole ways of being religious."},
     {t:"There’s no problem, because attendance can be counted precisely.", why:"Being countable doesn’t make a measure valid."},
     {t:"Value neutrality: Priya is biased against religion.", why:"Nothing suggests personal bias. The problem lies in the measure’s design."}
   ]},
   {id:"e2u1-q34", lesson:"e2u1-l4", level:1, q:"What does the interpretive framework in sociological research aim to do?", options:[
     {t:"Understand social worlds from the point of view of the participants", ok:true, why:"It seeks in-depth understanding of how people experience and interpret their situations."},
     {t:"Test a fixed hypothesis using only statistics", why:"That describes a positivist, hypothesis-testing approach."},
     {t:"Avoid talking to participants", why:"The interpretive framework relies on close contact with participants."},
     {t:"Prove that one theoretical perspective is correct", why:"It aims at understanding, not at proving a perspective right."}
   ]},
   {id:"e2u1-q35", lesson:"e2u1-l4", level:2, q:"Which action best follows Weber’s principle of value neutrality?", options:[
     {t:"Reporting all significant findings, including those that contradict the researcher’s own views", ok:true, why:"Value neutrality means not letting personal values distort what is collected or reported."},
     {t:"Leaving out results the researcher finds politically uncomfortable", why:"That is exactly what value neutrality forbids."},
     {t:"Choosing only participants who share the researcher’s opinions", why:"That would bias the study."},
     {t:"Changing the hypothesis after seeing the data so it always looks confirmed", why:"That undermines honest testing."}
   ]},
   {id:"e2u1-q36", lesson:"e2u1-l4", level:3, q:"A study finds that people who volunteer report higher happiness. Kenji concludes, “Volunteering makes people happy.” Which alternative explanation shows a problem of time order?", options:[
     {t:"Happier people may be more likely to start volunteering in the first place.", ok:true, why:"This is reverse causation: without knowing which came first, the direction of cause is unclear."},
     {t:"The study may have measured happiness with a standard scale.", why:"Using a standard scale is good practice, not a time-order problem."},
     {t:"Volunteering and happiness are both variables.", why:"That’s true but doesn’t challenge the causal claim."},
     {t:"Some volunteers are older than others.", why:"Age differences alone don’t address which came first, volunteering or happiness."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u1-q37", lesson:"e2u1-l5", level:1, q:"In a random sample, …", options:[
     {t:"every member of the population has the same chance of being chosen", ok:true, why:"Equal chance of selection is what makes a sample random and lets it mirror the population."},
     {t:"the researcher picks whoever is easiest to reach", why:"That is a convenience sample, which can be biased."},
     {t:"people volunteer by answering an online poll", why:"Self-selected samples aren’t random."},
     {t:"everyone in the population takes part", why:"That would be a census, not a sample."}
   ]},
   {id:"e2u1-q38", lesson:"e2u1-l5", level:2, q:"“Do you agree that the new road has made the neighbourhood dangerous and noisy?” What are the two main problems with this survey question?", options:[
     {t:"It is leading and double-barrelled.", ok:true, why:"“Do you agree that…” pushes towards yes, and “dangerous and noisy” asks about two things at once."},
     {t:"It is too short and uses no jargon.", why:"Short, jargon-free questions are good. The problems are the leading wording and the double question."},
     {t:"It is open-ended and anonymous.", why:"It’s actually a closed question, and anonymity isn’t a wording problem."},
     {t:"It has no problems.", why:"It both pushes towards an answer and combines two separate issues."}
   ]},
   {id:"e2u1-q39", lesson:"e2u1-l5", level:2, q:"Oluwaseun wants to understand how street vendors decide where to set up each morning and what their pitches mean to them. Which method fits best?", options:[
     {t:"Field research, such as participant observation and conversations with vendors", ok:true, why:"Decisions and meanings in a real setting are best studied in the field."},
     {t:"A laboratory experiment", why:"A lab can’t reproduce the street setting, and the question isn’t about cause and effect."},
     {t:"Analysis of national census tables", why:"Census data can’t show how vendors make daily decisions or what pitches mean to them."},
     {t:"A large online poll of the general public", why:"The general public isn’t the group being studied, and a poll can’t capture these meanings well."}
   ]},
   {id:"e2u1-q40", lesson:"e2u1-l5", level:1, q:"What is the Hawthorne effect?", options:[
     {t:"People changing their behaviour because they know they are being studied", ok:true, why:"Named after workplace studies at the Hawthorne Works near Chicago in the 1920s and 1930s."},
     {t:"A correlation caused by a hidden third variable", why:"That is a spurious correlation."},
     {t:"A survey question that asks two things at once", why:"That is a double-barrelled question."},
     {t:"The rise of sociology in the industrial era", why:"That is unrelated to the Hawthorne effect."}
   ]},
   {id:"e2u1-q41", lesson:"e2u1-l5", level:2, q:"What is the key feature of an experiment that lets it test cause and effect?", options:[
     {t:"Randomly assigning people to an experimental group and a control group", ok:true, why:"Random assignment makes the groups alike on average, so differences in outcome can be credited to the independent variable."},
     {t:"Asking participants what they think caused their behaviour", why:"People’s own explanations can be useful, but they don’t isolate cause."},
     {t:"Studying a single case in great depth", why:"That is a case study, which can’t isolate cause in the same way."},
     {t:"Using data someone else collected", why:"That is secondary data analysis."}
   ]},
   {id:"e2u1-q42", lesson:"e2u1-l5", level:3, q:"Hana interviews people about their experiences of debt. She knows who each person is, but in her report she uses invented names and removes details like exact job titles. Which principle is she following?", options:[
     {t:"Confidentiality", ok:true, why:"She knows identities but protects them in what she publishes. (Anonymity would mean even she couldn’t link answers to people.)"},
     {t:"Anonymity", why:"Anonymity means the researcher can’t link answers to individuals. Hana can, so this is confidentiality."},
     {t:"Deception", why:"She isn’t misleading participants about the study; she’s protecting them."},
     {t:"Value neutrality", why:"Value neutrality is about impartial analysis, not protecting identities."}
   ]},
   {id:"e2u1-q43", lesson:"e2u1-l5", level:3, q:"A student plans to join an online support group for people with a health condition, pretending to be a member, and quote posts in a class project without telling anyone. What is the best advice?", options:[
     {t:"Don’t do it: it involves deception and no consent, and quotes could identify vulnerable people. Any such study would need ethics review.", ok:true, why:"Covert research with vulnerable people raises serious risks of harm, and ethics codes allow deception only rarely, with review and debriefing."},
     {t:"It’s fine because the posts are online.", why:"Being online doesn’t make posts free to use. Members may reasonably expect privacy, and quotes can be traced."},
     {t:"It’s fine as long as the student changes the group’s name.", why:"Changing one name doesn’t address deception, consent or traceable quotes."},
     {t:"It’s fine because class projects don’t involve real people.", why:"The posts come from real people who could be harmed."}
   ]},
   {id:"e2u1-q44", lesson:"e2u1-l5", level:2, q:"Which research question is best answered with secondary data?", options:[
     {t:"How has the average size of households in a country changed since 1970?", ok:true, why:"Long-term national trends are best measured with existing census and official statistics."},
     {t:"What does a weekly family meal mean to the people who share it?", why:"Meanings in everyday life call for interviews or observation."},
     {t:"Does a new reading programme cause better reading scores?", why:"A cause-and-effect question like this is best tested with an experiment."},
     {t:"How do new members of a choir learn its unwritten rules?", why:"That calls for field research."}
   ]},
   {id:"e2u1-q45", lesson:"e2u1-l5", level:1, q:"What must happen for consent to research to count as informed consent?", options:[
     {t:"The person agrees voluntarily after being told what the study involves, its risks, and that they can stop at any time.", ok:true, why:"Consent must be both informed and voluntary, and it continues throughout the study."},
     {t:"The person signs a form, even if they weren’t told what the study is about.", why:"A signature without information isn’t informed consent."},
     {t:"The researcher decides the person would probably agree.", why:"Consent must come from the person, not be assumed."},
     {t:"The person’s employer agrees on their behalf.", why:"An employer can’t consent for an adult employee."}
   ]}
  ]
});
