/* Social Science Primers · Sociology Unit 3 · Inequality and difference */
ICA.addUnit({
  id:"e2u3", track:"e2", n:3, title:"Inequality and difference", icon:"⚖️",
  blurb:"How societies decide who counts as deviant, how they rank people by wealth, class and country, and how race, ethnicity, gender and sexuality shape life chances. Each topic is taught through evidence and through several theories, with their critiques.",
  goals:[
    "Explain why deviance is socially defined, how social control works, and how to read crime statistics critically",
    "Describe stratification systems, the difference between income and wealth, and the main types of social mobility",
    "Explain how global inequality is measured today and compare modernization, dependency and world-systems theories",
    "Explain why race is a social construction, and tell prejudice, discrimination and institutional racism apart",
    "Distinguish sex, gender, gender identity and sexual orientation, and use evidence to describe gender inequality"
  ],
  read:[
    {book:"soc", where:"Chapter 7, “Deviance, Crime, and Social Control”", note:"The LibreTexts mirror numbers sections one higher than OpenStax because it counts the chapter introduction as section 1 (for example, OpenStax 7.1 is LibreTexts 7.2). These lessons use the OpenStax numbers."},
    {book:"soc", where:"Chapter 9, “Social Stratification in the United States”", note:"US examples; the lessons apply the concepts worldwide."},
    {book:"soc", where:"Chapter 10, “Global Inequality”", note:"The book’s poverty line ($1.90 a day) and income thresholds are out of date. Lesson 3 gives the current World Bank figures."},
    {book:"soc", where:"Chapter 11, “Race and Ethnicity”"},
    {book:"soc", where:"Chapter 12, “Gender, Sex, and Sexuality”"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u3-l1", title:"Deviance and social control", minutes:55,
   goals:[
     "Explain why deviance depends on norms, context and audience, and how it differs from crime",
     "Classify sanctions as formal or informal, positive or negative",
     "Explain one deviant act with functionalist, conflict and interactionist theories",
     "Explain labeling, primary and secondary deviance, and stigma",
     "Read a crime statistic critically: count or rate, recorded or experienced"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 7 asks why some behaviour is treated as deviant, how groups keep people in line, and how three theoretical lenses explain rule-breaking. It ends with where crime figures come from and what they miss.",
      {look:[
        "What makes an act deviant, and how is deviance different from crime? (7.1)",
        "What are the four kinds of sanction, and how do you tell formal from informal? (7.1)",
        "Which theories sit under functionalism, conflict theory and symbolic interactionism, and what question does each ask? (7.2)",
        "Where do US crime statistics come from, and what does each source miss? (7.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[deviance|Deviance]] is breaking a social [[norm]], whether a [[folkway]], a [[more]] or a law (the book cites William Graham Sumner, 1906). It is **relative**: the same act can be ordinary in one place, time or audience and deviant in another, and deviant doesn’t always mean bad. A [[crime]] is the narrower case of breaking a formal law the state can punish. (7.1)",
        "[[social-control|Social control]] is the regulation and enforcement of norms through [[sanction|sanctions]]. Ask two questions. Is it a reward (**positive**) or a punishment (**negative**)? Is there an official rule and an official body behind it (**formal**: a promotion, a parking fine) or not (**informal**: thanks, an angry look)? (7.1)",
        "{{functionalism|Functionalists}} ask what deviance does for society. Durkheim saw it as normal and even useful: punishing it shows everyone where the line is, shared outrage unites people, and some deviance exposes unjust rules. [[social-disorganization|Social disorganization theory]] links crime to neighbourhoods where poverty and turnover weaken ties. (7.2)",
        "Merton’s [[strain-theory|strain theory]], also functionalist, says strain arises when society promotes goals such as wealth but blocks the legitimate means. Sort people by goals and means: **conformity** accepts both; **innovation** accepts the goal but uses illegitimate means such as fraud; **ritualism** gives up the goal but follows the rules; **retreatism** rejects both; **rebellion** replaces both with new ones. (7.2)",
        "{{conflict-theory|Conflict theorists}} ask who makes and enforces the rules. Following Marx, they argue that law tends to protect those who own resources; C. Wright Mills (1956) described a **power elite** able to shape the rules. The book compares how the crimes of the rich and the poor are punished. (7.2)",
        "{{symbolic-interactionism|Symbolic interactionists}} look at learning and labels. Sutherland’s [[differential-association|differential association]]: deviance is learned from close associates. [[labeling-theory|Labeling theory]] (Edwin Lemert): [[primary-deviance|primary deviance]] leaves self-image unchanged; [[secondary-deviance|secondary deviance]] follows when a label sticks, and the label can become a [[master-status|master status]]. Hirschi’s [[control-theory|control theory]] (1969) asks why most people conform: bonds of attachment, commitment, involvement and belief. (7.2)",
        "US crime data come from the FBI’s Uniform Crime Reports, now collected through the more detailed NIBRS, which count crimes known to police, and the National Crime Victimization Survey, which asks people what happened to them. The survey finds more crime, because many victims never report it, out of fear, shame or distrust of police. (7.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 406"><defs><marker id="e2u3-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="8" y="8" width="216" height="52" rx="10" stroke-width="2"/><text x="116" y="30" text-anchor="middle">1 Primary deviance</text><text class="s" x="116" y="49" text-anchor="middle">one act, self-image unchanged</text><path class="d-ink" d="M116 62 L116 84" stroke-width="2" marker-end="url(#e2u3-l1-a)"/><rect class="d-gold" x="8" y="86" width="216" height="52" rx="10" stroke-width="2"/><text x="116" y="108" text-anchor="middle">2 Others react</text><text class="s" x="116" y="127" text-anchor="middle">a label: “troublemaker”</text><path class="d-ink" d="M116 140 L116 162" stroke-width="2" marker-end="url(#e2u3-l1-a)"/><rect class="d-rose" x="8" y="164" width="216" height="52" rx="10" stroke-width="2"/><text x="116" y="186" text-anchor="middle">3 Stigma</text><text class="s" x="116" y="205" text-anchor="middle">fewer chances, new company</text><path class="d-ink" d="M116 218 L116 240" stroke-width="2" marker-end="url(#e2u3-l1-a)"/><rect class="d-lup" x="8" y="242" width="216" height="52" rx="10" stroke-width="2"/><text x="116" y="264" text-anchor="middle">4 Self-concept shifts</text><text class="s" x="116" y="283" text-anchor="middle">“maybe that is who I am”</text><path class="d-ink" d="M116 296 L116 318" stroke-width="2" marker-end="url(#e2u3-l1-a)"/><rect class="d-rose" x="8" y="320" width="216" height="52" rx="10" stroke-width="2"/><text x="116" y="342" text-anchor="middle">5 Secondary deviance</text><text class="s" x="116" y="361" text-anchor="middle">acts that fit the label</text><path class="d-ink" d="M226 346 L252 346 L252 112 L228 112" fill="none" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#e2u3-l1-a)"/><text class="s" x="260" y="214">the</text><text class="s" x="260" y="230">label is</text><text class="s" x="260" y="246">confirmed</text><text class="s" x="170" y="396" text-anchor="middle">the loop can be broken at any step</text></svg>', alt:"Five boxes stacked top to bottom: primary deviance leads others to react with a label, the label brings stigma and fewer opportunities, the person’s self-concept shifts, and secondary deviance follows. A dashed arrow runs from secondary deviance back up to the label, which it seems to confirm.", cap:"Labeling theory: a reaction to one act can start a loop that produces more of the behaviour it condemns."},
      {fig:'<svg viewBox="0 0 340 280"><path class="d-panel" d="M8 8 L196 8 L176 72 L28 72 Z" stroke-width="2"/><text x="102" y="35" text-anchor="middle">All offences</text><text x="102" y="53" text-anchor="middle">that happen</text><path class="d-gold" d="M28 80 L176 80 L156 144 L48 144 Z" stroke-width="2"/><text x="102" y="107" text-anchor="middle">Reported or</text><text x="102" y="125" text-anchor="middle">discovered</text><path class="d-lup" d="M48 152 L156 152 L138 216 L66 216 Z" stroke-width="2"/><text x="102" y="179" text-anchor="middle">Recorded</text><text x="102" y="197" text-anchor="middle">by police</text><path class="d-rose" d="M66 224 L138 224 L124 270 L80 270 Z" stroke-width="2"/><path class="d-ink" d="M118 247 L200 247" stroke-width="1" stroke-dasharray="3 3"/><text class="s" x="206" y="251">Solved or charged</text><text class="s" x="206" y="28">Victim surveys</text><text class="s" x="206" y="44">try to measure</text><text class="s" x="206" y="60">this level</text><text class="s" x="206" y="96">Dark figure:</text><text class="s" x="206" y="112">the gap between</text><text class="s" x="206" y="128">top and recorded</text><text class="s" x="206" y="144">levels</text><text class="s" x="206" y="180">Police statistics</text><text class="s" x="206" y="196">count this level</text></svg>', alt:"A funnel on the left, notes on the right. At the top, all offences that happen (victim surveys try to measure this level). Below it, a narrower band of offences reported or discovered; the dark figure is the gap between the top and recorded levels. Then a narrower band recorded by police, the level police statistics count. At the bottom, the smallest band, offences solved or charged.", cap:"The crime funnel: each stage is smaller than the one above. A change at any stage changes the numbers you read."}
    ]},
    {h:"Key terms", body:[
      {terms:["deviance","crime","social-control","anomie","strain-theory","differential-association","labeling-theory","primary-deviance","secondary-deviance","stigma","white-collar-crime","dark-figure-of-crime"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"**Terms the book doesn’t name or only touches on.** [[anomie|Anomie]] is Durkheim’s normlessness during rapid change, which Merton built on. [[white-collar-crime|White-collar and corporate crime]] (fraud, tax evasion, illegal pollution), which 7.3 mentions only briefly, can cost enormous sums yet is often punished less harshly than street crime. [[stigma|Stigma]] is Erving Goffman’s word (1963) for a discrediting mark. The [[dark-figure-of-crime|dark figure of crime]] is the gap between all offences and those recorded.\n\n**Counts versus rates.** Rate per 100,000 = count ÷ population × 100,000. A town with 900 burglaries and 90,000 people has a rate of 1,000; a city with twice as many burglaries can still have a lower rate.\n\n**Outside the US.** Many countries run victim surveys, such as the Crime Survey for England and Wales. Recorded figures can move without crime changing: the UK Office for National Statistics links much of a later rise in recorded sexual offences and less serious violence to better police recording after a 2014 inspection. Legal definitions also differ between countries, so treat international comparisons with care.\n\n**Filing and critiques.** The book puts control theory under symbolic interactionism; textbooks differ on where to file it, so focus on its question. Each lens has limits: functionalism says little about who defines deviance; conflict theory underplays laws that protect everyone, such as those against assault; labeling theory doesn’t explain why the first act happened."}
    ]}
   ],
   try:[
    {id:"e2u3-l1-x1", type:"sort", q:"Sort each sanction into the right box.", buckets:["Positive and informal","Positive and formal","Negative and informal","Negative and formal"], items:[
      {t:"Lucía’s classmates applaud after her presentation.", b:0, why:"Applause is a reward (positive) given in everyday interaction, with no official rule behind it (informal)."},
      {t:"Oluwaseun receives a community award from the city council.", b:1, why:"An award from an official body, following its procedures, is a formal reward."},
      {t:"Fatima’s aunt frowns when Fatima checks her phone during a family meal.", b:2, why:"A frown is disapproval (negative) in face-to-face interaction (informal)."},
      {t:"A football club bans a fan from its stadium for throwing objects.", b:3, why:"A ban issued by an organisation under its official rules is a formal punishment."},
      {t:"Mei’s manager writes a formal warning into her personnel file.", b:3, why:"It is recorded under the employer’s official procedures, so it is formal, and it punishes, so it is negative."},
      {t:"Sione’s friends tease him for wearing the “wrong” team shirt.", b:2, why:"Teasing is an informal punishment for breaking the group’s expectations."},
      {t:"Ana gets a scholarship for her exam results.", b:1, why:"A scholarship is an official reward given under set rules."},
      {t:"A stranger smiles and nods when Kenji gives up his seat.", b:0, why:"A smile is an informal reward for following a courtesy norm."}
    ], why:"Two questions sort any sanction: Is it a reward or a punishment? Is there an official rule and an official body behind it?"},
    {id:"e2u3-l1-x2", type:"match", q:"Match each person to Merton’s adaptation. Assume each society holds up financial success as the main goal.", pairs:[
      ["Amara studies at night, works two jobs and saves steadily, hoping to buy a home.","Conformity","She accepts both the goal (financial success) and the approved means (work, study, saving)."],
      ["Dmitri wants to be rich and runs an online investment scam.","Innovation","He accepts the goal but uses illegitimate means to reach it."],
      ["Hana has stopped hoping for promotion but still follows every procedure exactly.","Ritualism","She has given up on the goal while sticking rigidly to the approved means."],
      ["Tomás leaves his job and home and lives withdrawn from mainstream society, chasing neither money nor a career.","Retreatism","He has rejected both the goal and the approved means."],
      ["Priya joins a movement that wants to replace a profit-based economy with a cooperative one.","Rebellion","She rejects the existing goals and means and works to replace them with new ones."]
    ], why:"Merton’s question is always the same: does the person accept society’s goals, and do they accept the approved ways of reaching them?"},
    {id:"e2u3-l1-x3", type:"sort", q:"A teenager is caught shoplifting. Which theoretical lens does each explanation come from?", buckets:["Functionalist","Conflict","Interactionist"], items:[
      {t:"The shop’s public prosecution reminds the whole community where the line is.", b:0, why:"Showing everyone the boundaries of acceptable behaviour is one of Durkheim’s functions of deviance."},
      {t:"She learned it from friends who treat shoplifting as a harmless game.", b:2, why:"Learning deviance from close associates is Sutherland’s differential association, an interactionist theory."},
      {t:"Shoplifting by poor teenagers is policed more heavily than tax evasion by wealthy people.", b:1, why:"Asking who is policed and who benefits is the conflict lens."},
      {t:"She wants the same brands everyone is told to own but can’t afford them.", b:0, why:"A gap between society’s goals and the means to reach them is Merton’s strain theory, part of the functionalist family."},
      {t:"After being called “a thief” at school, she starts to see herself as one.", b:2, why:"A label changing self-concept is labeling theory (secondary deviance), an interactionist idea."},
      {t:"Laws protecting property were written mainly by and for those who own the most property.", b:1, why:"Linking law to the interests of the powerful is the conflict perspective."}
    ], why:"The same act can be explained at the level of society’s needs (functionalist), power and inequality (conflict) or everyday learning and labels (interactionist)."},
    {id:"e2u3-l1-x4", type:"order", q:"Put the labeling process in order, from the first act to secondary deviance.", items:[
      {t:"A young person breaks a rule once (primary deviance).", why:"Everything starts with an act that, on its own, hasn’t changed how the person sees themselves."},
      {t:"Others react and apply a label such as “troublemaker”.", why:"Labeling theory says the reaction, not the act, is the turning point."},
      {t:"The label brings stigma: some doors close and some people keep their distance.", why:"Stigma follows the label and changes the person’s opportunities and company."},
      {t:"The person begins to accept the label as part of who they are.", why:"The self-concept shifts in response to how others treat them."},
      {t:"Further rule-breaking follows that fits the new identity (secondary deviance).", why:"Secondary deviance comes last: it flows from the adopted identity, which seems to confirm the original label."}
    ]},
    {id:"e2u3-l1-x5", type:"number", q:"A city of 240,000 people recorded 1,800 burglaries last year. What is the burglary rate **per 100,000 people**?", answer:750, tol:0.5, unit:"per 100,000", why:"Rate = count ÷ population × 100,000 = 1,800 ÷ 240,000 × 100,000 = 0.0075 × 100,000 = **750 per 100,000**. Rates let you compare places of different sizes.", wrongs:[
      {v:7.5, tol:0.05, why:"That’s the rate **per 1,000** people (0.0075 × 1,000). The question asks per 100,000, so multiply by 100,000 instead."},
      {v:0.75, tol:0.005, why:"That’s the rate per 100 people (a percentage). Multiply 0.0075 by 100,000, not by 100."},
      {v:0.0075, tol:0.0001, why:"You divided correctly but stopped there. That’s burglaries per person. Multiply by 100,000 to get the rate per 100,000."},
      {v:133.33, tol:0.5, why:"You divided the population by the count (240,000 ÷ 1,800). Divide the count by the population, then multiply by 100,000."}
    ], hint2:"Divide burglaries by population, then multiply by 100,000."},
    {id:"e2u3-l1-x6", type:"spot", q:"A local news story reports on crime figures. Tap every claim that is **not supported** by the evidence given.", ask:"is an unsupported or misleading claim", parts:[
      "“",
      {t:"Police in Port Ellis recorded 6,000 offences this year, up from 5,000 last year.", flag:false, why:"This is a plain description of the recorded counts. Reporting it is fine."},
      " ",
      {t:"That 20% jump proves residents are now more likely to be victims of crime.", flag:true, why:"Counts aren’t rates. With the population growing from 50,000 to 62,500, the recorded rate actually **fell**, from 100 to 96 offences per 1,000 residents."},
      " ",
      {t:"The town’s population grew from 50,000 to 62,500 over the same period.", flag:false, why:"Useful context. It’s exactly what you need to turn counts into rates."},
      " ",
      {t:"Police also launched an online form that makes reporting minor thefts easier.", flag:false, why:"A relevant fact, fairly reported. It’s a reason for caution: easier reporting can raise recorded crime even if real crime doesn’t change."},
      " ",
      {t:"Because recorded crime always matches real crime, no other data is needed.", flag:true, why:"Recorded crime only includes offences that are reported and recorded. The dark figure of crime means victim surveys are needed to check trends."},
      " ",
      {t:"The regional victim survey will be published next month.", flag:false, why:"Victim surveys capture crimes not reported to police. Mentioning it is sound."},
      " ",
      {t:"The mayor says newcomers must be to blame for the rise.", flag:true, why:"Nothing in the figures shows who committed any offence, and the rate fell. Blaming a group without evidence is scapegoating, not analysis."},
      "”"
    ], why:"Good crime reporting gives rates, says what was counted, and notes changes in how it was counted."},
    {id:"e2u3-l1-x7", type:"mcq", q:"In one country, a man wearing a sarong to an office is unremarkable; in another, the same outfit draws stares and a word from a manager. What does this best show?", options:[
      {t:"Deviance depends on the norms of a particular society and setting, not on the act itself.", ok:true, why:"Right. The act is identical; the norms and the audience differ, so the reaction differs. That is what sociologists mean by deviance being relative."},
      {t:"Wearing a sarong to an office is a crime in the second country.", why:"Nothing suggests a law is broken. A stare and a word from a manager are sanctions for breaking an informal workplace norm, and deviance is much wider than crime."},
      {t:"People in the second country are less tolerant by nature.", why:"Sociology looks for social explanations. The reaction comes from learned norms about office dress, not from people’s nature."},
      {t:"Deviance only exists where there are formal sanctions.", why:"The stares are informal sanctions, and the manager’s word may be too. Most deviance is controlled informally."}
    ]}
   ],
   apply:{intro:"Look at deviance and social control in your own surroundings. Observe behaviour in public, but never record, photograph or follow anyone, and never break a rule yourself to see what happens.", tasks:[
     {t:"Notice sanctions in one everyday setting", how:["Spend 20 minutes somewhere public and ordinary: a bus, a café, a library, a park, a shop queue.","Note small moments when someone breaks an unwritten rule (pushing in, talking loudly, blocking a doorway) and how others react.","Classify each reaction you see as positive or negative, formal or informal.","Note any signs of internalised control: people following a rule when nobody is watching."], write:"Where and when, each norm broken or followed, the reaction, and which of the four sanction types it was…"},
     {t:"Trace how one norm has changed", how:["Choose something that was deviant in your society a generation ago and is accepted now, or the reverse (smoking in cafés, tattoos, men caring for babies, using phones at meals, cohabiting before marriage…).","If someone older is happy to talk, ask them how people reacted to it when they were young. They can skip any question.","Write down what changed: the act, the norm, or the audience?"], write:"The norm, how reactions changed, and what you think caused the change…"},
     {t:"Read one official crime statistic properly", how:["Find a crime figure from your country’s national statistics office or justice ministry (search for “crime statistics” with your country’s name).","Note whether it comes from police records or a victim survey.","Check whether it’s a count or a rate, and what period it covers.","Look for a note about changes in recording rules or definitions."], write:"The figure, its source, count or rate, police-recorded or survey, and one reason it might not show the full picture…"}
   ], proof:"Notes classifying at least five sanctions you observed, one norm that changed and why, and one crime statistic with its source, type (count or rate) and a limitation you identified."},
   read:[
     {book:"soc", where:"Chapter 7, Section 7.1 “Deviance and Control”, Section 7.2 “Theoretical Perspectives on Deviance and Crime” and Section 7.3 “Crime and the Law”", note:"On the LibreTexts mirror these are numbered 7.2, 7.3 and 7.4."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u3-l2", title:"Social stratification", minutes:55,
   goals:[
     "Define social stratification and tell income from wealth",
     "Compare caste systems, class systems and the ideal of meritocracy",
     "Identify intergenerational, intragenerational and structural mobility in real situations",
     "Explain status consistency and why it matters",
     "Compare the Davis–Moore thesis, Marx and Weber, including the main critiques"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 9 explains how societies rank people into layers, how open those layers are, and why sociologists disagree about whether inequality is useful. The book’s data are American; the concepts work anywhere.",
      {look:[
        "What is the difference between income and wealth, and why does wealth matter so much across generations? (9.1)",
        "How do caste systems, class systems and meritocracy differ, and what is status consistency? (9.1)",
        "What are the three kinds of social mobility? (9.2)",
        "How do functionalists, conflict theorists and interactionists explain stratification? (9.4)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[stratification|Social stratification]] ranks a society’s people into layers by wealth, income, education, occupation and power. It belongs to society, not individuals: the layers exist before you are born, tend to last across generations, and come with beliefs that justify them. (9.1)",
        "[[income|Income]] is money coming in, such as wages or dividends. [[wealth|Wealth]] is the net value of what you own minus what you owe (assets − debts; a salary isn’t part of it). Wealth divides more deeply, because it cushions shocks and can be inherited. (9.1, 9.2)",
        "A [[caste-system|caste system]] is closed: position is fixed at birth, marriage is within the group (endogamous) and occupation follows the group. A [[class-system|class system]] is open: position mixes birth and achievement, and marriage across groups (exogamous) is possible. A [[meritocracy]] is a hypothetical system based purely on merit; no society is one. (9.1)",
        "[[status-consistency|Status consistency]] is how evenly a person ranks across education, occupation and income. A surgeon trained abroad who works as a porter while her qualifications are assessed has **low** consistency. (9.1)",
        "[[social-class|Social class]] groups people with similar income, wealth, education and occupation, and shapes standard of living and life chances. The book uses upper, middle and lower classes, with shared **class traits** such as tastes and leisure. (9.2)",
        "[[social-mobility|Social mobility]] can go up or down. [[intergenerational-mobility|Intergenerational]]: between parents and children. [[intragenerational-mobility|Intragenerational]]: within one lifetime, like a hotel cleaner who becomes manager, or a miner who loses his job at 50 and takes lower-paid work. [[structural-mobility|Structural]]: whole groups move because the economy changes, through industrialisation or closures. (9.2)",
        "The [[davis-moore|Davis–Moore thesis]] (1945, functionalist): important jobs needing rare talent and long training must pay more, so inequality fills vital roles. Melvin Tumin (1953) replied that stratification blocks talented people from poorer backgrounds and ignores inequalities of race and gender. (9.4)",
        "Marx (conflict theory) traced stratification to the means of production: the [[bourgeoisie]] own it; the [[proletariat]] sell their labour, suffer alienation and, he predicted, would one day become conscious of shared interests and overturn the system. Interactionists study class in everyday life, including [[conspicuous-consumption|conspicuous consumption]]: buying visible goods to signal status. (9.4)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 506"><defs><marker id="e2u3-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="22" text-anchor="middle">Class system: a ladder</text><path class="d-ink" d="M110 36 L110 226 M210 36 L210 226" stroke-width="3"/><path class="d-ink" d="M110 56 L210 56 M110 96 L210 96 M110 136 L210 136 M110 176 L210 176 M110 216 L210 216" stroke-width="2"/><text class="s" x="222" y="60">upper</text><text class="s" x="222" y="100">upper-middle</text><text class="s" x="222" y="140">middle</text><text class="s" x="222" y="180">working</text><text class="s" x="222" y="220">poor</text><circle class="d-sage" cx="160" cy="164" r="9" stroke-width="2"/><path class="d-ink" d="M160 152 L160 104" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#e2u3-l2-a)"/><text class="s" x="56" y="120" text-anchor="middle">people</text><text class="s" x="56" y="136" text-anchor="middle">can climb</text><text class="s" x="56" y="152" text-anchor="middle">or slip</text><text x="170" y="266" text-anchor="middle">Caste system: sealed blocks</text><rect class="d-gold" x="50" y="280" width="240" height="44" stroke-width="3"/><text class="s" x="170" y="307" text-anchor="middle">born here, stay here</text><rect class="d-lup" x="50" y="330" width="240" height="44" stroke-width="3"/><text class="s" x="170" y="357" text-anchor="middle">marry within the block</text><rect class="d-sage" x="50" y="380" width="240" height="44" stroke-width="3"/><text class="s" x="170" y="407" text-anchor="middle">occupation by birth</text><rect class="d-rose" x="50" y="430" width="240" height="44" stroke-width="3"/><text class="s" x="170" y="457" text-anchor="middle">status passed to children</text><text class="s" x="170" y="496" text-anchor="middle">thick walls: little or no movement</text></svg>', alt:"Top: a ladder with rungs labelled upper, upper-middle, middle, working and poor, with a person moving up a rung. Bottom: four stacked sealed blocks with thick walls, labelled born here stay here, marry within the block, occupation by birth, status passed to children.", cap:"Open and closed systems. Real societies sit somewhere between the two."}
    ]},
    {h:"Key terms", body:[
      {terms:["stratification","income","wealth","caste-system","class-system","meritocracy","status-consistency","social-mobility","intergenerational-mobility","intragenerational-mobility","structural-mobility","davis-moore"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"**Weber’s three dimensions.** The book leaves out Max Weber, whose *Economy and Society* (published after his death, 1922) separated **class** (economic position), **status** (social honour or prestige) and **party** (power to influence decisions). A poorly paid religious leader or a respected village elder can rank high on status or power but low on class. Most sociologists now measure position with several indicators for this reason.\n\n**Wealth and mobility evidence.** An OECD study (2018) found that across the OECD countries it covered, the richest 10% of households held on average 52% of household wealth, and wealth was about twice as concentrated as income. The OECD’s *A Broken Social Elevator?* (2018) found low mobility between generations in many countries, with “sticky floors” and “sticky ceilings”; more unequal countries tend to have less mobility (the “Great Gatsby curve”), a correlation that doesn’t show which causes which. One family’s rise can’t show how common mobility is, and may be structural.\n\n**Names and examples.** Thorstein Veblen coined “conspicuous consumption” (1899); Michael Young popularised “meritocracy” in a 1958 satire warning against it. Caste-like systems also include apartheid South Africa and the hereditary outcaste groups of feudal Japan, whose descendants (buraku people) still face discrimination. Marx’s critics point to the growth of a large middle class; supporters reply that ownership of capital still shapes life chances."},
      {fix:"The book says India’s caste system “has been officially dismantled” and calls it “defunct”. More precisely, India’s 1950 Constitution abolished “untouchability” and banned caste discrimination, but it did not abolish caste. Caste still shapes many marriages and social networks, caste-based discrimination persists, and the state officially lists Scheduled Castes and other groups for reserved places in education, government jobs and legislatures."}
    ]}
   ],
   try:[
    {id:"e2u3-l2-x1", type:"sort", q:"Does each feature belong to a caste system or a class system?", buckets:["Caste system","Class system"], items:[
      {t:"Your position is fixed at birth and lasts for life.", b:0, why:"A closed system based on ascribed status is the defining feature of caste."},
      {t:"Marrying someone from a different group is possible and fairly common.", b:1, why:"Exogamous marriage is possible in class systems; caste systems require marriage within the group."},
      {t:"Your occupation is expected to follow your family’s hereditary group.", b:0, why:"Linking occupation to birth group is a caste feature."},
      {t:"A child of factory workers can become a lawyer, though it may be harder for her.", b:1, why:"Movement between layers is possible in a class system, even if unequal."},
      {t:"Rules about purity limit contact between groups.", b:0, why:"Ideas of ritual purity have been used to justify caste boundaries."},
      {t:"Position depends partly on education and achievement.", b:1, why:"Class systems mix ascribed and achieved status."}
    ], why:"The key question is openness: can people move between layers, and marry between them?"},
    {id:"e2u3-l2-x2", type:"number", q:"Kenji owns a house worth 250,000, savings of 15,000 and a car worth 10,000. He owes 190,000 on his mortgage and 25,000 on a business loan. His salary is 48,000 a year. What is his **wealth** (net worth)?", answer:60000, tol:1, unit:"", why:"Wealth = assets − debts. Assets: 250,000 + 15,000 + 10,000 = 275,000. Debts: 190,000 + 25,000 = 215,000. Wealth = 275,000 − 215,000 = **60,000**. His salary is income, a separate measure, so it isn’t part of the calculation.", wrongs:[
      {v:275000, tol:1, why:"That’s his total assets. Wealth is net worth: subtract what he owes (215,000)."},
      {v:108000, tol:1, why:"You added his salary (48,000). Salary is income, a flow, not something he owns. Leave it out."},
      {v:85000, tol:1, why:"You subtracted only the mortgage. Subtract the business loan too."},
      {v:490000, tol:1, why:"You added the debts to the assets. Debts reduce wealth, so subtract them: 275,000 − 215,000."}
    ], hint2:"Add everything he owns, then subtract everything he owes. Leave the salary out."},
    {id:"e2u3-l2-x3", type:"match", q:"Match each situation to the type of social mobility it shows best.", pairs:[
      ["Oluwaseun’s parents were market traders; he is now a software engineer.","Intergenerational mobility","The comparison is between generations: parents’ position versus the child’s."],
      ["Ana started as a cleaner at a hotel and, over 20 years, became its general manager.","Intragenerational mobility","The change happens within one person’s working life."],
      ["When a country rapidly industrialises, millions of rural families move into factory and office work.","Structural mobility","Whole groups move because the economy’s structure changed, not because of individual effort alone."],
      ["After the mine closes, a skilled miner in his fifties ends up in lower-paid, insecure work.","Downward intragenerational mobility","He moves down within his own lifetime. (The mine closure also has a structural cause, which is worth noticing.)"]
    ]},
    {id:"e2u3-l2-x4", type:"mcq", q:"Priya has a master’s degree, works as a delivery rider and earns a low income. Which concept best describes her position?", options:[
      {t:"Low status consistency: she ranks high on education but low on occupation and income.", ok:true, why:"Right. Status consistency asks whether a person ranks at a similar level across factors. Hers are mismatched."},
      {t:"Downward intergenerational mobility.", why:"That would compare her to her parents. Nothing here tells us about them."},
      {t:"A caste system.", why:"Nothing suggests her position is fixed at birth. A mismatch between education and job is a class-system phenomenon."},
      {t:"Conspicuous consumption.", why:"That means buying visible goods to show status, which isn’t described here."}
    ]},
    {id:"e2u3-l2-x5", type:"sort", q:"Which thinker’s view does each statement express?", buckets:["Davis and Moore","Marx","Weber"], items:[
      {t:"Surgeons must be paid more, or too few people would endure the long training.", b:0, why:"Higher rewards for functionally important, hard-to-fill roles is the Davis–Moore thesis."},
      {t:"Owners profit from the labour of workers who own nothing but their ability to work.", b:1, why:"The split between owners of the means of production and workers is Marx’s core idea."},
      {t:"A poorly paid religious leader can still have great social honour.", b:2, why:"Separating status (honour) from class (economic position) is Weber’s contribution."},
      {t:"Inequality motivates people to fill the most important positions.", b:0, why:"This is the functional argument that stratification benefits society."},
      {t:"Power, wealth and prestige are three different dimensions of ranking.", b:2, why:"Class, status and party are Weber’s three dimensions."},
      {t:"Workers will one day become conscious of their shared interests and change the system.", b:1, why:"Class consciousness leading to change is Marx’s prediction."}
    ]},
    {id:"e2u3-l2-x6", type:"mcq", q:"Which of these are examples of **wealth** rather than income? Choose all that apply.", options:[
      {t:"A plot of farmland inherited from a grandparent", ok:true, why:"Land is an asset someone owns: part of wealth."},
      {t:"Shares in a company", ok:true, why:"Shares are owned assets, so they count toward wealth (the dividends they pay are income)."},
      {t:"A monthly pension payment", why:"A payment that arrives over time is income, a flow."},
      {t:"Savings in a bank account", ok:true, why:"Money held now is part of wealth (the interest it earns is income)."},
      {t:"An hourly wage", why:"Wages are income: money coming in for work."}
    ], why:"Income is a flow over time; wealth is the net value of what you own at one moment."},
    {id:"e2u3-l2-x7", type:"spot", q:"A magazine column argues about fairness. Tap every claim that is **not supported** or doesn’t follow from the evidence.", ask:"is an unsupported or faulty claim", parts:[
      {t:"Our new chief executive grew up in a poor neighbourhood and worked her way to the top.", flag:false, why:"A factual story about one person. Nothing wrong with reporting it."},
      " ",
      {t:"Her story proves our country is a meritocracy where anyone can succeed.", flag:true, why:"One case can’t show what is typical. Mobility is measured across whole populations, and no society is a pure meritocracy."},
      " ",
      {t:"Over the last 40 years, the share of office jobs in the economy has roughly doubled.", flag:false, why:"A relevant structural fact (assume it’s from official statistics). It actually points to structural mobility."},
      " ",
      {t:"So everyone who moved into office work did it purely through personal effort.", flag:true, why:"When the number of office jobs doubles, many people move up because the structure changed: that is structural mobility, not effort alone."},
      " ",
      {t:"Official data show children of high earners are far more likely to become high earners themselves.", flag:false, why:"A reasonable statement of intergenerational evidence; it’s the kind of data mobility research uses."},
      " ",
      {t:"That just shows talent is inherited, so no other explanation is needed.", flag:true, why:"Parents also pass on wealth, schooling, contacts and expectations. Jumping to one cause ignores the rest."}
    ]}
   ],
   apply:{intro:"Apply stratification ideas to your own world. Keep personal and family details private: these notes are for you.", tasks:[
     {t:"Map a family across generations", how:["Ask an older relative or family friend who is happy to talk (they can skip any question), or use what you already know about your own family.","Note the main occupation and education of three generations if you can: grandparents, parents, you or someone your age.","Mark each change as upward, downward or stable, and as intergenerational or intragenerational.","Ask what changed in the economy at the time: new industries, closures, migration, more schooling. That’s the structural part."], write:"Three generations, their work and schooling, the type of mobility, and the structural changes behind it…"},
     {t:"Income or wealth? A quick sort", how:["List ten money-related things in your life or an imagined household (a salary, a pension, a phone, a loan, savings, a rented flat, a car…).","Mark each as income, an asset (wealth) or a debt.","Work out a rough net worth for the imagined household. You don’t need to use your own real figures."], write:"Your list, sorted into income, assets and debts, and a rough net worth…"},
     {t:"Spot class markers around you", how:["For a week, notice signals of class or status in adverts, social media, shops or speech: brands, accents, schools, holidays, ways of dressing.","For each, note whether it signals class (money), status (honour) or power, in Weber’s terms.","Be respectful: describe signals, not individual people."], write:"Five or more class markers, where you saw them, and which of Weber’s dimensions each signals…"}
   ], proof:"A three-generation mobility map with the type of each change, a sorted income–wealth list, and five class markers linked to Weber’s dimensions."},
   read:[
     {book:"soc", where:"Chapter 9, Section 9.1 “What Is Social Stratification?”, Section 9.2 “Social Stratification and Mobility in the United States” and Section 9.4 “Theoretical Perspectives on Social Stratification”", note:"LibreTexts numbers these 9.2, 9.3 and 9.5. The book doesn’t cover Weber’s class, status and party; see the Codex entry on social stratification."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u3-l3", title:"Global inequality", minutes:55,
   goals:[
     "Explain global stratification and why the country you are born in matters so much",
     "Use the current World Bank income groups and the Human Development Index, and say what each misses",
     "Tell absolute from relative poverty and apply the current international poverty line",
     "Compare modernization, dependency and world-systems theories, with their critiques"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 10 zooms out from one society to the whole world: how countries are classified, who is poor and why, and competing theories of why some countries are richer. Its poverty line and income thresholds are out of date; see the Textbook check.",
      {look:[
        "Which ways of classifying countries does the book describe, and what does each assume? (10.1)",
        "What does the Human Development Index measure that income alone doesn’t? (10.1)",
        "How do relative, extreme (absolute) and subjective poverty differ, and who is most likely to be poor? (10.2)",
        "How do modernization and dependency theory explain global inequality, and how are they criticised? (10.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[global-stratification|Global stratification]] is unequal wealth, power and opportunity **between** nations, alongside inequality **within** each. The country you are born in shapes life expectancy, schooling and work more than almost anything else. (10.1)",
        "First, Second and Third World are Cold War labels, now outdated. The World Bank groups countries by **GNI per capita** into low, lower-middle, upper-middle and high income. GNI per capita is an average: it can rise while many people stay poor, and it ignores health and education. (10.1)",
        "Wallerstein’s [[world-systems-theory|world-systems approach]] sees one world economy with a **core** (industrialised, high-wage, dominant), a **semi-periphery** (exploited by the core while able to exploit the periphery) and a **periphery** (raw materials, cheap labour, little control over prices). Countries can change position. (10.1)",
        "The [[human-development-index|Human Development Index]] combines a long and healthy life, knowledge and a decent standard of living. Countries with similar incomes can have very different HDI values. (10.1)",
        "[[relative-poverty|Relative poverty]] means having much less than most people in your own society. [[absolute-poverty|Extreme (absolute) poverty]] means lacking basics such as food, clean water and shelter, measured with one global line. **Subjective** poverty is whether people feel their income meets their needs. (10.2)",
        "Diana Pearce named the **feminization of poverty** (1978): women are poorer than men in almost every society. Much work is in the **informal economy**, without contracts or protection, and the worst consequences of poverty include slavery and **debt bondage**. (10.2)",
        "[[modernization-theory|Modernization theory]] says poorer countries can develop by changing cultural values and industrialising. Critics call it ethnocentric: it treats Western countries as the model and assumes everyone starts with the same resources. (10.3)",
        "[[dependency-theory|Dependency theory]] says rich core nations keep poorer ones dependent, through colonial history, loans and trade, so profits flow out. Its main critique: it struggles to explain countries such as China that have risen through world trade. (10.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 288"><defs><marker id="e2u3-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-gold" x="104" y="8" width="132" height="64" rx="12" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Core</text><text class="s" x="170" y="47" text-anchor="middle">high-wage,</text><text class="s" x="170" y="62" text-anchor="middle">high-tech</text><rect class="d-lup" x="104" y="112" width="132" height="64" rx="12" stroke-width="2"/><text x="170" y="138" text-anchor="middle">Semi-periphery</text><text class="s" x="170" y="157" text-anchor="middle">some of each</text><rect class="d-sage" x="104" y="216" width="132" height="64" rx="12" stroke-width="2"/><text x="170" y="238" text-anchor="middle">Periphery</text><text class="s" x="170" y="255" text-anchor="middle">raw materials,</text><text class="s" x="170" y="270" text-anchor="middle">low wages</text><path class="d-ink" d="M170 214 L170 182" stroke-width="2" marker-end="url(#e2u3-l3-a)"/><path class="d-ink" d="M170 110 L170 78" stroke-width="2" marker-end="url(#e2u3-l3-a)"/><path class="d-ink" d="M102 248 L88 248 L88 40 L101 40" fill="none" stroke-width="2" marker-end="url(#e2u3-l3-a)"/><text class="s" x="80" y="120" text-anchor="end">cheap raw</text><text class="s" x="80" y="136" text-anchor="end">materials,</text><text class="s" x="80" y="152" text-anchor="end">labour,</text><text class="s" x="80" y="168" text-anchor="end">profits</text><path class="d-ink" d="M238 40 L252 40 L252 248 L239 248" fill="none" stroke-width="2" marker-end="url(#e2u3-l3-a)"/><text class="s" x="260" y="112">high-value</text><text class="s" x="260" y="128">goods,</text><text class="s" x="260" y="144">loans,</text><text class="s" x="260" y="160">investment,</text><text class="s" x="260" y="176">control</text></svg>', alt:"Three stacked boxes: core at the top, semi-periphery in the middle, periphery at the bottom, with small arrows pointing up between them. An arrow on the left carries cheap raw materials, labour and profits up from the periphery to the core. An arrow on the right carries high-value goods, loans, investment and control down from the core to the periphery.", cap:"World-systems theory: one world economy, in which value flows unequally between positions."}
    ]},
    {h:"Key terms", body:[
      {terms:["global-stratification","human-development-index","international-poverty-line","purchasing-power-parity","absolute-poverty","relative-poverty","modernization-theory","dependency-theory","world-systems-theory"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"**PPP dollars.** $3.00 a day means what $3.00 would buy in the United States, adjusted to local prices, not $3.00 at the exchange rate. To apply the line, work out income per person per day: a family of 5 on 435 PPP dollars a month (30 days) has 435 ÷ 30 ÷ 5 = 2.90 each, below the line.\n\n**More measures.** The HDI uses four indicators: life expectancy, expected and mean years of schooling, and GNI per capita (PPP). Relative poverty lines are often a share of the national median income: 60% for the EU’s “at risk of poverty” measure, 50% in many OECD figures. **Global North / Global South** describes economic position, not strict geography.\n\n**Theories in more detail.** Walt Rostow’s *The Stages of Economic Growth* (1960) is the best-known modernization model: traditional society, preconditions for take-off, take-off, drive to maturity, age of high mass consumption. Dependency theory grew in Latin America in the 1950s–60s (Raúl Prebisch, Andre Gunder Frank, Fernando Henrique Cardoso). Wallerstein developed world-systems theory from 1974; critics say it focuses so much on economics that culture and local choices fade from view. South Korea’s rise through world trade challenges dependency theory, though its state guided growth strongly. Many researchers combine all three.\n\n**Respect.** Poor people save, migrate, start businesses and organise. Describing whole regions only through suffering is inaccurate."},
      {fix:"The book uses a $1.90-a-day extreme poverty line and World Bank income thresholds based on 2019 data. Both are out of date. In June 2025 the World Bank raised the [[international-poverty-line|international poverty line]] to **$3.00 per person per day** in 2021 [[purchasing-power-parity|PPP]] dollars (replacing $2.15), with higher lines of $4.20 and $8.30 for lower-middle and upper-middle-income countries; on the new line, about 838 million people lived in extreme poverty in 2022. The income groups in force from 1 July 2026 (fiscal year 2027, based on 2025 GNI per capita in US$) are: **low** 1,175 or less; **lower-middle** 1,176–4,635; **upper-middle** 4,636–14,375; **high** above 14,375. Thresholds change every July, so always check the date."}
    ]}
   ],
   try:[
    {id:"e2u3-l3-x1", type:"order", q:"Put Rostow’s stages of economic growth in order, from first to last.", items:[
      {t:"Traditional society", why:"Rostow starts with mostly farm-based economies with limited technology."},
      {t:"Preconditions for take-off", why:"Next, trade, infrastructure, banking and education begin to grow."},
      {t:"Take-off", why:"Rapid growth in a few leading industries comes third."},
      {t:"Drive to maturity", why:"Growth then spreads across the whole economy."},
      {t:"Age of high mass consumption", why:"The final stage: most people can afford consumer goods."}
    ], why:"Critics note that this ladder assumes every country follows the same path that Western countries took."},
    {id:"e2u3-l3-x2", type:"number", q:"Sione’s household of 6 people lives on the equivalent of 495 PPP dollars a month (use 30 days). How much is that **per person per day**, in PPP dollars?", answer:2.75, tol:0.01, unit:"PPP $ per person per day", why:"Per day for the household: 495 ÷ 30 = 16.50. Per person: 16.50 ÷ 6 = **2.75**. That is below the $3.00 international poverty line, so each member counts as living in extreme poverty.", wrongs:[
      {v:16.5, tol:0.01, why:"That’s the whole household’s income per day. Poverty lines are per person, so divide by 6."},
      {v:82.5, tol:0.01, why:"That’s per person per month (495 ÷ 6). Divide by 30 as well to get a daily figure."},
      {v:0.36, tol:0.01, why:"You divided the number of people by the daily household income. Divide the income by the people: 16.50 ÷ 6."}
    ], hint2:"Divide the monthly amount by 30, then by the number of people."},
    {id:"e2u3-l3-x3", type:"sort", q:"Is each statement about absolute poverty or relative poverty?", buckets:["Absolute (extreme) poverty","Relative poverty"], items:[
      {t:"Living below $3.00 a day in 2021 PPP dollars.", b:0, why:"A single fixed international line is the World Bank’s measure of extreme (absolute) poverty."},
      {t:"Having less than 60% of the national median household income.", b:1, why:"The line is set by the society’s own middle income, so it’s relative."},
      {t:"Not having enough food to stay healthy, wherever you live.", b:0, why:"Lacking basic necessities for survival is absolute poverty."},
      {t:"A child who can’t afford the school trip all her classmates go on.", b:1, why:"She is excluded from what is normal in her society: a mark of relative poverty."},
      {t:"The poverty line rises as the society becomes richer.", b:1, why:"Relative lines move with typical living standards."},
      {t:"The same line is used to compare all countries of the world.", b:0, why:"A fixed, worldwide line is the absolute approach."}
    ]},
    {id:"e2u3-l3-x4", type:"mcq", q:"In the World Bank classification for fiscal year 2027, a country’s GNI per capita is US$3,900. Which group is it in?", options:[
      {t:"Lower-middle income", ok:true, why:"Right. Lower-middle income runs from $1,176 to $4,635, and $3,900 is in that range."},
      {t:"Low income", why:"Low income is $1,175 or less. $3,900 is well above that."},
      {t:"Upper-middle income", why:"Upper-middle income starts at $4,636. $3,900 is below it."},
      {t:"It can’t be classified without its HDI.", why:"The World Bank groups are based on GNI per capita alone. HDI is a separate UNDP measure."}
    ]},
    {id:"e2u3-l3-x5", type:"match", q:"Match each theory to the critique most often made of it.", pairs:[
      ["Modernization theory","It treats Western countries as the model and ignores colonial history.","Critics call it ethnocentric because it assumes every country should follow the Western path from the same starting point."],
      ["Dependency theory","It struggles to explain countries that grew rich through world trade.","Countries such as South Korea rose through deep involvement with rich economies, which is hard to square with dependency’s predictions."],
      ["World-systems theory","It focuses so much on the world economy that culture and local choices fade from view.","Its strength (seeing the whole system) is also its weakness: it can underplay politics, culture and agency."],
      ["Using GNI per capita alone","It hides inequality inside the country and ignores health and education.","An average income says nothing about how income is shared or how long and well people live; the HDI was designed partly to answer this."]
    ]},
    {id:"e2u3-l3-x6", type:"sort", q:"Which theory would most likely offer each explanation of a country’s poverty?", buckets:["Modernization","Dependency","World-systems"], items:[
      {t:"It needs more investment, technology and modern institutions to reach take-off.", b:0, why:"Industrialising by adopting new institutions and technology is the modernization recipe."},
      {t:"Colonial rule set it up to export cheap raw materials, and the pattern never ended.", b:1, why:"Poverty created by exploitative ties to rich countries is the dependency argument."},
      {t:"It is in the periphery of a single global economy but could move to the semi-periphery.", b:2, why:"Core, semi-periphery and periphery, with movement possible, is Wallerstein’s world-systems model."},
      {t:"Traditional attitudes to saving and innovation slow its growth.", b:0, why:"Emphasis on cultural attitudes as a barrier is typical of modernization theory."},
      {t:"Foreign debt and trade rules keep profits flowing out to rich nations.", b:1, why:"Outflows of wealth to rich countries through debt and trade are central to dependency theory."},
      {t:"Some middle-ranking countries both exploit poorer ones and are exploited by richer ones.", b:2, why:"That in-between role describes the semi-periphery, a world-systems idea."}
    ]},
    {id:"e2u3-l3-x7", type:"spot", q:"A short news item reports on a country’s economy. Tap every claim that is **not supported** or is misleading.", ask:"is an unsupported or misleading claim", parts:[
      {t:"The country’s GNI per capita rose by 8% last year, according to the national statistics office.", flag:false, why:"A clear figure with a source. Fine to report."},
      " ",
      {t:"So every family in the country is now 8% better off.", flag:true, why:"GNI per capita is an average. It can rise while many households stay the same or get poorer."},
      " ",
      {t:"The World Bank moved it from low income to lower-middle income this July.", flag:false, why:"A factual report of the annual reclassification, which happens every 1 July."},
      " ",
      {t:"That means extreme poverty there has ended.", flag:true, why:"Income groups are about average income. A lower-middle-income country can still have many people below the $3.00 line."},
      " ",
      {t:"Its HDI is 0.58, in the medium human development group.", flag:false, why:"0.550–0.699 is UNDP’s medium group, so this is consistent."},
      " ",
      {t:"At $3 a day converted at today’s exchange rate, few people there are poor.", flag:true, why:"The international poverty line is in PPP dollars, not market exchange rates. Using exchange rates gives the wrong picture."}
    ]}
   ],
   apply:{intro:"Use official sources to look at your own country, or any country that interests you, in global perspective.", tasks:[
     {t:"Place one country in the global picture", how:["Find the country’s current World Bank income group (search “World Bank country and lending groups”).","Find its HDI value and group on the UNDP Human Development Reports website (hdr.undp.org).","Compare the two. Does the HDI tell a different story from income?","Note one thing neither measure shows, such as inequality inside the country or unpaid work."], write:"Country, income group, HDI value and group, what differs, and what both miss…"},
     {t:"Find your country’s poverty line", how:["Search your national statistics office for its official poverty measure.","Note whether it is absolute or relative, and how it is defined (for example, “60% of median household income”).","Compare it with the World Bank’s $3.00, $4.20 and $8.30 lines. Which is closest to your country’s situation, and why?"], write:"The national definition, absolute or relative, and how it compares to the international lines…"},
     {t:"Follow one product around the world", how:["Pick an everyday object: a T-shirt, a phone, a chocolate bar, a cup of coffee.","Use labels and the company’s own website to find where it was designed, where raw materials came from and where it was made.","Sketch the chain and label each place as likely core, semi-periphery or periphery.","Note which step probably captures the most value, and what evidence you’d need to check."], write:"The product, each step and place, your core / semi-periphery / periphery labels, and where value is likely captured…"}
   ], proof:"Notes placing one country by income group and HDI, a comparison of your national poverty line with the international lines, and a product chain labelled with world-systems positions."},
   read:[
     {book:"soc", where:"Chapter 10, Section 10.1 “Global Stratification and Classification”, Section 10.2 “Global Wealth and Poverty” and Section 10.3 “Theoretical Perspectives on Global Stratification”", note:"LibreTexts numbers these 10.2–10.4. The thresholds and poverty lines in the book are out of date; use the current figures in this lesson."},
     {book:"soc", where:"Chapter 9, Section 9.3 “Global Stratification and Inequality”", note:"A short bridge from national to global stratification."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u3-l4", title:"Race and ethnicity", minutes:60,
   goals:[
     "Explain why race is a social construction rather than a biological category, and why it still has real effects",
     "Distinguish race from ethnicity, and minority group in the sociological sense from a numerical minority",
     "Tell stereotypes, prejudice, discrimination and racism apart, and individual from institutional racism",
     "Describe the main patterns of intergroup relations, with examples from several regions",
     "Apply functionalist, conflict and interactionist theories, intersectionality and Du Bois’s double consciousness"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 11 explains what race and ethnicity mean to sociologists, how prejudice and discrimination work, and the range of relations between groups. Its examples are mostly from the United States; examples from other regions are below.",
      {look:[
        "Why is race called a social construction, how does ethnicity differ from it, and what makes a group a minority group? (11.1)",
        "How does each theoretical perspective explain racial and ethnic inequality? (11.2)",
        "How do stereotypes, prejudice, discrimination and racism differ, and what is systemic racism? (11.3)",
        "What patterns of intergroup relations does the book describe, from pluralism to genocide? (11.4)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[race|Race]] is a **social construction**: societies create categories, usually from visible features, and give them meaning. The categories aren’t biological boxes, and they differ between countries and change over time, but they have real effects. [[ethnicity|Ethnicity]] rests on shared culture: language, religion, customs, ancestry and history. (11.1)",
        "A [[minority-group|minority group]] is about **power, not numbers** (Louis Wirth): a group singled out for unequal treatment. The [[dominant-group|dominant group]] holds more power. Under apartheid, Black South Africans were the majority but a minority group. Wagley and Harris listed five shared traits, such as unequal treatment and involuntary membership. (11.1)",
        "Functionalists note that prejudice can strengthen in-group bonds but wastes the talent of excluded groups. Conflict theorists ask who gains from racial divisions; **intersection theory** (Kimberlé Crenshaw, 1989; Patricia Hill Collins, 1990) adds that race, class and gender combine. Interactionists study how race and its symbols gain meaning in everyday interaction (Herbert Blumer, 1958). A **culture of prejudice** weaves stereotypes into media and everyday talk. (11.2)",
        "Keep four ideas apart: a [[stereotype]] is an oversimplified belief; [[prejudice]] is an attitude, often not based on experience; [[discrimination]] is an action; [[racism]] is prejudice and discrimination used to rank races and justify inequality. They don’t always go together: a rule can discriminate without anyone feeling prejudice. (11.3)",
        "Racism can be individual or **systemic** (also called structural or [[institutional-racism|institutional]]): built into the routines of institutions, with unequal effects even when no one intends harm. [[implicit-bias|Implicit bias]] links stereotypes to groups without awareness; **colorism** is prejudice based on skin tone; **antiracism** focuses on what people and institutions do. (11.3)",
        "Intergroup relations range from [[pluralism]] (groups keep their identities with equal standing: the “salad bowl”) through [[amalgamation]] (a new blended group: the “melting pot”), [[assimilation]] (a minority takes on the dominant culture, by choice or by force), [[segregation]] (by law, *de jure*, or in practice, *de facto*) and [[expulsion]], to [[genocide]], the deliberate destruction of a group. (11.4)",
        "{{w-e-b-du-bois|W. E. B. Du Bois}} (1868–1963) pioneered empirical sociology: his house-to-house study of Black Philadelphians, published in 1899 as *The Philadelphia Negro*, showed that their problems came from social conditions, not biology. (1.2)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 392"><defs><marker id="e2u3-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><path class="d-ink" d="M40 30 L40 340" stroke-width="3" marker-end="url(#e2u3-l4-a)"/><path class="d-ink" d="M40 340 L40 30" stroke-width="3" marker-end="url(#e2u3-l4-a)"/><circle class="d-sage" cx="40" cy="60" r="10" stroke-width="2"/><text x="60" y="65">Pluralism</text><circle class="d-sage" cx="40" cy="110" r="10" stroke-width="2"/><text x="60" y="115">Amalgamation</text><circle class="d-lup" cx="40" cy="160" r="10" stroke-width="2"/><text x="60" y="165">Assimilation</text><circle class="d-gold" cx="40" cy="210" r="10" stroke-width="2"/><text x="60" y="215">Segregation</text><circle class="d-rose" cx="40" cy="260" r="10" stroke-width="2"/><text x="60" y="265">Expulsion</text><circle class="d-rose" cx="40" cy="310" r="10" stroke-width="2"/><text x="60" y="315">Genocide</text><text class="s" x="60" y="81">groups keep identity, equal standing</text><text class="s" x="60" y="181">voluntary or forced</text><text class="s" x="60" y="331">group removed or destroyed</text><text class="s" x="170" y="366" text-anchor="middle">Real societies often show</text><text class="s" x="170" y="382" text-anchor="middle">several patterns at once.</text></svg>', alt:"A vertical line from pluralism at the top, where groups keep their identity with equal standing, through amalgamation, assimilation (voluntary or forced), segregation and expulsion, down to genocide at the bottom, where a group is removed or destroyed.", cap:"Patterns of intergroup relations. The order is a rough guide, not a fixed scale: assimilation, for example, can be chosen or imposed."}
    ]},
    {h:"Key terms", body:[
      {terms:["race","ethnicity","minority-group","dominant-group","stereotype","prejudice","discrimination","racism","implicit-bias","institutional-racism","assimilation","double-consciousness"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"**The biology.** The American Association of Biological Anthropologists (2019) says race doesn’t accurately represent human biological variation. Humans share about 99.9% of their DNA, and there is more genetic variation within self-identified racial groups than between them (US National Human Genome Research Institute). Race is still socially real, with real consequences: the [[thomas-theorem|Thomas theorem]] at work.\n\n**Categories around the world.** Brazil’s census uses colour or race categories (*branca*, *preta*, *parda*, *amarela*, *indígena*); the UK census asks about ethnic group; US census categories have changed many times since 1790. Use the names people use for themselves.\n\n**Institutional racism and evidence.** Stokely Carmichael and Charles Hamilton coined “institutional racism” in *Black Power* (1967). US redlining, which refused mortgages in whole neighbourhoods where minority families lived, is a classic case, and its effects on wealth outlast the policy. **Field experiments** (correspondence or audit studies) send identical applications that differ only in a name signalling ethnicity; studies in many countries find unequal callback rates. They show discrimination at that first step, not that every employer discriminates or that applicants were less skilled.\n\n**Examples beyond the US.** Pluralism: Switzerland’s four national languages. Amalgamation: *mestizaje* in parts of Latin America. Forced assimilation: Canada’s residential schools; Australia’s Stolen Generations. Expulsion: Uganda’s expulsion of Asians (1972). Genocide: the Holocaust; the 1994 genocide against the Tutsi in Rwanda. These are analytical categories, not stages, and real situations often combine several. Gordon Allport’s **contact hypothesis** (1954): contact between groups with equal status and shared goals can reduce prejudice.\n\n**Double consciousness.** In *The Souls of Black Folk* (1903) Du Bois described [[double-consciousness|double consciousness]]: always looking at oneself through the eyes of others, a “two-ness” of identity under racism. It has been applied to colonised peoples and migrants; Darlene Clark Hine noted that it left out Black women’s distinct experience."}
    ]}
   ],
   try:[
    {id:"e2u3-l4-x1", type:"sort", q:"Classify each example.", buckets:["Stereotype (a belief)","Prejudice (an attitude)","Discrimination (an action)","Institutional racism (a system)"], items:[
      {t:"Believing that everyone from a certain country is good at maths.", b:0, why:"An oversimplified generalisation about a whole group is a stereotype, even if it sounds positive."},
      {t:"Feeling suspicious of a new colleague because of his ethnic background.", b:1, why:"A negative feeling toward someone because of their group is prejudice. No action has been taken yet."},
      {t:"A manager who never shortlists applicants with foreign-sounding names.", b:2, why:"Treating people unequally because of their group is discrimination."},
      {t:"A bank policy refusing loans in neighbourhoods where most residents are from one ethnic group.", b:3, why:"A rule built into an organisation’s routine, with unequal racial effects, is institutional racism."},
      {t:"Assuming an older woman in a headscarf can’t speak the local language.", b:0, why:"Applying a generalisation about a group to an individual is a stereotype at work."},
      {t:"A school entrance exam held only in the dominant language, in a region where many children speak another.", b:3, why:"A routine rule that systematically disadvantages a group, whatever anyone intends, is an institutional problem."},
      {t:"A landlord telling a caller the flat is taken after hearing his accent.", b:2, why:"Acting to deny someone housing because of their group is discrimination."},
      {t:"Disliking a neighbouring ethnic group without ever having met its members.", b:1, why:"An attitude formed before experience is the root meaning of prejudice (pre-judging)."}
    ], why:"Belief, attitude, action and system are four different things, and each needs a different response."},
    {id:"e2u3-l4-x2", type:"match", q:"Match each pattern of intergroup relations to an example.", pairs:[
      ["Pluralism","A country recognises four official languages and the groups keep their distinct cultures with equal standing.","Distinct identities kept with equal standing is pluralism, the “salad bowl”."],
      ["Forced assimilation","Children are taken to boarding schools and punished for speaking their own language.","Making a group abandon its culture for the dominant one, by force, is forced assimilation."],
      ["De jure segregation","Laws decide which residential areas each racial category may live in.","Separation enforced by law is de jure segregation, as under apartheid."],
      ["Expulsion","A government orders a whole ethnic group to leave the country within 90 days.","Forcing a group out of a territory is expulsion, as in Uganda in 1972."],
      ["Amalgamation","Over generations, groups intermarry and a new shared national identity forms.","Blending into a new group, the “melting pot”, is amalgamation."]
    ]},
    {id:"e2u3-l4-x3", type:"mcq", q:"In a country, people of group A make up 70% of the population, but group B, 30% of the population, holds most land, high office and wealth, and laws favour group B. In sociological terms, which is the minority group?", options:[
      {t:"Group A, because it has less power and faces unequal treatment.", ok:true, why:"Right. A minority group in sociology is defined by subordination, not size. Black South Africans under apartheid are the classic example."},
      {t:"Group B, because it is smaller.", why:"Size alone doesn’t decide it. Group B is the dominant group because it holds power and privilege."},
      {t:"Neither, because minority status needs a group to be under 50%.", why:"Wirth’s definition is about differential and unequal treatment, not percentages."},
      {t:"Both, because each is a minority of the world’s population.", why:"The concept is about power relations inside a society, not global head counts."}
    ]},
    {id:"e2u3-l4-x4", type:"mcq", q:"Which statements fit the sociological view of race as a social construction? Choose all that apply.", options:[
      {t:"The same person can be classified into different races in different countries.", ok:true, why:"Because categories are drawn by societies, they differ from place to place."},
      {t:"Census race categories have changed over time.", ok:true, why:"Changes in official categories show that the lines are social decisions."},
      {t:"Because race is socially constructed, it has no effects on people’s lives.", why:"Socially constructed doesn’t mean unreal. Race shapes treatment, wealth and health; the AABA stresses race and racism have real biological consequences."},
      {t:"There is more genetic variation within self-identified racial groups than between them.", ok:true, why:"The NHGRI states this, which is why race doesn’t map neatly onto biology."},
      {t:"Racial categories are fixed by clear genetic boundaries.", why:"Human variation mostly changes gradually across geography; there are no clear genetic boundaries matching social race categories."}
    ]},
    {id:"e2u3-l4-x5", type:"sort", q:"Which perspective does each explanation of ethnic inequality come from?", buckets:["Functionalist","Conflict","Interactionist"], items:[
      {t:"Excluding a group wastes its talent, which harms the whole society.", b:0, why:"Pointing to a dysfunction for society as a whole is a functionalist argument."},
      {t:"Employers benefit when workers are divided along ethnic lines and can’t organise together.", b:1, why:"Asking who gains from division is the conflict lens."},
      {t:"A child learns what her skin colour “means” from how teachers and classmates react to her.", b:2, why:"Meaning created through everyday interaction is the interactionist focus."},
      {t:"Shared hostility to an out-group strengthens loyalty inside the in-group.", b:0, why:"Seeing what prejudice does to maintain group solidarity is functionalist."},
      {t:"Race, class and gender combine to shape a Black working-class woman’s experience at work.", b:1, why:"Intersection theory focuses on overlapping systems of power, so of these three lenses it sits closest to conflict theory (the textbook gives it its own heading)."},
      {t:"Racial symbols, more than race itself, shape how people treat each other.", b:2, why:"The focus on symbols and meanings is interactionist."}
    ]},
    {id:"e2u3-l4-x6", type:"spot", q:"A blog post summarises a hiring study. Tap every claim that **doesn’t follow** from the study described.", ask:"doesn’t follow from the study", parts:[
      {t:"Researchers sent 2,400 CVs to real job adverts in three cities.", flag:false, why:"A clear description of the study design. Fine."},
      " ",
      {t:"Each pair of CVs was identical except for the applicant’s name, which signalled ethnicity.", flag:false, why:"This is what makes a field experiment powerful: the name is the only difference."},
      " ",
      {t:"Applicants with names common in one ethnic minority received fewer callbacks.", flag:false, why:"A reasonable summary of the result."},
      " ",
      {t:"This proves every employer in the country is racist.", flag:true, why:"An overgeneralisation. The study shows an average gap among employers in three cities; it can’t label every employer in the country."},
      " ",
      {t:"It also shows that the minority applicants had weaker skills.", flag:true, why:"This contradicts the design: the CVs were identical, so skills were held equal. That’s exactly why the gap points to discrimination."},
      " ",
      {t:"The gap is evidence of discrimination at the first step of hiring.", flag:false, why:"That’s what the study measures: who gets invited. It says less about later steps such as interviews or pay."}
    ], why:"Field experiments are strong because they hold everything equal except the group signal, but their results apply to the setting studied."}
   ],
   apply:{intro:"Look at how race and ethnicity are defined and shown where you live. Be respectful: describe categories and patterns, not individual people.", tasks:[
     {t:"How does your country count people?", how:["Find the latest census or national survey questionnaire from your national statistics office.","Copy the exact wording of any question on race, ethnicity, ancestry, language, religion or Indigenous identity.","Compare it with one other country’s census question (for example, Brazil’s colour or race categories, or the UK census ethnic group question).","Note what each set of categories suggests about how that society understands difference."], write:"Your country’s question and categories, the comparison country’s, and what the differences reveal…"},
     {t:"Who appears, in which roles?", how:["Choose one hour of television, a set of 20 adverts, or a news website’s front page.","For each person shown in a main role, note the role (expert, criminal, victim, hero, background) and, only where it is clearly signalled in the content, their ethnic or racial presentation.","Count the patterns. Are some groups mostly in certain roles?","Remember the limits: you’re studying representation in the media, not guessing anyone’s real identity."], write:"The source, a simple tally of roles by group, and the patterns you noticed…"},
     {t:"Reflect on double consciousness (private)", how:["Think of a setting where you, or someone you know who is happy to share, felt seen through someone else’s assumptions: as a newcomer, a migrant, the only one of your background in a room. If you’d rather not draw on your own life, use a published memoir, essay or interview instead.","Write how it felt (or how the writer describes it) to be seen through others’ eyes, and what was done about it. You don’t need to name or describe anyone’s identity beyond what you choose.","Connect it to Du Bois’s idea, and note how your experience differs from the one he described."], write:"The setting, the experience, and how it connects to (and differs from) Du Bois’s double consciousness…"}
   ], proof:"Notes comparing two countries’ census categories, a tally of media representation with the patterns you noticed, and a short private reflection linked to double consciousness."},
   read:[
     {book:"soc", where:"Chapter 11, Section 11.1 “Racial, Ethnic, and Minority Groups”, Section 11.2 “Theoretical Perspectives on Race and Ethnicity”, Section 11.3 “Prejudice, Discrimination, and Racism” and Section 11.4 “Intergroup Relationships”", note:"LibreTexts numbers these 11.2–11.5. Section 11.5 covers groups in the United States in detail."},
     {book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology” (the part on W. E. B. Du Bois)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u3-l5", title:"Gender, sex and sexuality", minutes:60,
   goals:[
     "Distinguish sex, gender, gender identity, gender expression and sexual orientation",
     "Explain how gender roles are learned and how people “do gender” in everyday life",
     "Describe gender stratification in work, pay, care and politics using current, sourced evidence",
     "Compare functionalist, conflict, feminist and interactionist perspectives, and apply intersectionality",
     "Use respectful, current language and separate research findings from public debate"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 12 separates sex, gender, identity and sexuality, shows how gender is learned and performed, and looks at gender inequality and the theories that explain it. Terms in this area keep evolving: follow what people call themselves.",
      {look:[
        "How does the book define sex, intersex, gender and gender identity, and why keep them apart? (12.1)",
        "How are gender roles learned, and what does it mean to “do gender”? (12.2)",
        "How do functionalist, conflict, feminist and interactionist theories explain gender inequality? (12.2)",
        "How do attitudes to sexuality vary, and what is the sexual double standard? (12.3)"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[sex|Sex]] means physical differences: reproductive anatomy (primary) and traits such as height and muscularity (secondary). [[intersex|Intersex]] people have sex traits, hormones or chromosomes that don’t fit typical definitions; this is about bodies, not the same as being transgender. [[gender|Gender]] is the behaviours, traits and social positions a society links to being female or male. (12.1)",
        "[[gender-identity|Gender identity]] is a person’s deeply held sense of their own gender: [[cisgender]] if it matches the sex assigned at birth, [[transgender]] if not; [[nonbinary]] people don’t identify exclusively as woman or man. [[gender-expression|Gender expression]] is outward presentation; [[sexual-orientation|sexual orientation]] is who someone is attracted to. Knowing one doesn’t tell you the others, and no one should be “outed”. (12.1)",
        "[[gender-role|Gender roles]] vary by culture. Murdock’s survey of world cultures (1954) found every society divides work by gender, but which tasks go to whom varies. Samoa recognises *fa’afafine* as a third gender. (12.1, 12.2)",
        "[[gender-socialization|Gender socialization]] works mainly through four [[agent-of-socialization|agents]]: family, school, peers and media. (12.2)",
        "West and Zimmerman (1987): we [[doing-gender|do gender]] in everyday interaction, knowing we’ll be judged against expectations for our gender. So the same firm point can be called “decisive” from a man and “aggressive” from a woman. (12.2)",
        "Gender stratification shows in pay, the division of labour and the [[glass-ceiling|glass ceiling]], an invisible barrier to top positions. [[patriarchy|Patriarchy]] is a system where men hold more power; [[sexism]] is prejudice and discrimination based on sex or gender. (12.2)",
        "Theories: functionalists see gender roles as keeping the family working; conflict theory (Friedrich Engels) compares women’s position at home to workers’ under owners; feminist theory, a type of conflict theory, centres patriarchy; interactionists study how gender’s meanings are made in interaction. (12.2)",
        "**Sexuality** is a person’s capacity for sexual feelings; sociologists study attitudes and practices, which vary widely between countries. The **sexual double standard** judges the same behaviour differently for women and men; **queer theory** questions fixed categories of gender and sexuality. (12.3)"
      ]}
    ]},
    {h:"Picture it", body:[
      {fig:'<svg viewBox="0 0 340 332"><rect class="d-sage" x="8" y="8" width="158" height="84" rx="10" stroke-width="2"/><text x="87" y="30" text-anchor="middle">Sex</text><text class="s" x="87" y="50" text-anchor="middle">body: chromosomes,</text><text class="s" x="87" y="66" text-anchor="middle">hormones, anatomy</text><rect class="d-lup" x="174" y="8" width="158" height="84" rx="10" stroke-width="2"/><text x="253" y="30" text-anchor="middle">Gender identity</text><text class="s" x="253" y="50" text-anchor="middle">inner sense of being a</text><text class="s" x="253" y="66" text-anchor="middle">woman, man, or</text><text class="s" x="253" y="82" text-anchor="middle">another gender</text><rect class="d-gold" x="8" y="216" width="158" height="84" rx="10" stroke-width="2"/><text x="87" y="238" text-anchor="middle">Gender expression</text><text class="s" x="87" y="258" text-anchor="middle">outward presentation:</text><text class="s" x="87" y="274" text-anchor="middle">clothes, hair, voice</text><rect class="d-rose" x="174" y="216" width="158" height="84" rx="10" stroke-width="2"/><text x="253" y="238" text-anchor="middle">Sexual orientation</text><text class="s" x="253" y="258" text-anchor="middle">who a person is</text><text class="s" x="253" y="274" text-anchor="middle">attracted to</text><path class="d-ink" d="M122 92 L132 116 M218 92 L208 116 M122 216 L132 192 M218 216 L208 192" stroke-width="2"/><circle class="d-panel" cx="170" cy="154" r="54" stroke-width="2"/><text x="170" y="150" text-anchor="middle">a person</text><text class="s" x="170" y="168" text-anchor="middle">four dimensions</text><text class="s" x="170" y="322" text-anchor="middle">separate dimensions</text></svg>', alt:"A person in the centre linked to four separate boxes in a two-by-two grid: sex (body: chromosomes, hormones, anatomy), gender identity (inner sense of gender), gender expression (outward presentation) and sexual orientation (who a person is attracted to).", cap:"Four separate dimensions. Knowing one doesn’t tell you the others."}
    ]},
    {h:"Key terms", body:[
      {terms:["sex","intersex","gender","gender-identity","gender-expression","transgender","sexual-orientation","gender-socialization","doing-gender","heteronormativity","patriarchy","glass-ceiling"]}
    ]},
    {h:"Beyond the book", body:[
      {beyond:"**The pay gap.** It usually compares median earnings of all working women and men, as a share of men’s: (men − women) ÷ men. Men 2,500, women 2,100: 400 ÷ 2,500 = 16%. This raw gap isn’t unequal pay for the same job. Part reflects occupation, hours and experience, which are partly social too: female-dominated care work pays less, women more often cut paid hours for unpaid care, and women’s earnings tend to fall after children. An unexplained part can include discrimination. **Occupational segregation** explains how a firm can pay equally for each job yet have an overall gap.\n\n**Thinkers and terms.** Talcott Parsons (1955) described “instrumental” (earning) and “expressive” (caring) family roles; critics say this treats one family form as natural and ignores inequality. Feminists may be liberal (equal rights), radical (patriarchy) or socialist (capitalism and patriarchy). Kimberlé Crenshaw’s [[intersectionality]] (1989): race, class, gender and other positions combine, so a firm employing white women and Black men can still exclude Black women. Ira Reiss named the sexual double standard (1960); [[heteronormativity]] assumes heterosexuality is the default.\n\n**Around the world.** Courts in Nepal (2007) and India (2014) recognised a legal third gender. In 1990 the WHO removed homosexuality from its classification of diseases, and ICD-11 (2019) moved “gender incongruence” out of the mental disorders chapter. Style guides say “sexual orientation”, not “sexual preference”. Gender norms affect men too: in most countries men live shorter lives and die by suicide at higher rates. Laws differ widely; research can inform debates about them but not settle them."},
      {fix:"The book’s pay and politics figures are older US data. For a current, global picture: the World Economic Forum’s *Global Gender Gap Report 2026* finds the gap 69.2% closed across 145 economies, with education (96.9%) and health and survival (96.2%) near parity but economic participation (61.7%) and political empowerment (**22.1%**) far behind. Women held 27.5% of parliamentary seats worldwide on 1 January 2026 (Inter-Parliamentary Union). Women and girls spend **more than 2.5 times** as many hours a day as men on unpaid care work (UN Women, 2024), and earn about 51 cents of labour income for each dollar men earn (ILO, 2023)."}
    ]}
   ],
   try:[
    {id:"e2u3-l5-x1", type:"sort", q:"Which dimension does each statement describe?", buckets:["Sex","Gender roles","Gender identity","Sexual orientation"], items:[
      {t:"Ana was born with XX chromosomes.", b:0, why:"Chromosomes are a biological characteristic: sex."},
      {t:"In Dmitri’s family, men are expected to handle money and women to host guests.", b:1, why:"Expectations about who does what are gender roles."},
      {t:"Sione knows he is a man, though he was assigned female at birth.", b:2, why:"A deeply held inner sense of one’s own gender is gender identity."},
      {t:"Priya is attracted to people of more than one gender.", b:3, why:"Who someone is attracted to is sexual orientation."},
      {t:"Some people are born with reproductive anatomy that doesn’t fit typical male or female definitions.", b:0, why:"This describes intersex variation, which is about sex characteristics, not identity."},
      {t:"A society expects girls to be quiet and boys to be bold.", b:1, why:"Behaviour a society expects by gender is a gender role."},
      {t:"Hana describes herself as nonbinary.", b:2, why:"Nonbinary is a gender identity."},
      {t:"Kenji has been in relationships with men only, and identifies as gay.", b:3, why:"This describes sexual orientation."}
    ], why:"The four dimensions are separate: knowing one doesn’t tell you the others."},
    {id:"e2u3-l5-x2", type:"number", q:"In one country, women’s median monthly earnings are 3,060 and men’s are 3,600. What is the gender pay gap, as a **percentage of men’s earnings**?", answer:15, tol:0.1, unit:"%", why:"Difference: 3,600 − 3,060 = 540. Gap: 540 ÷ 3,600 = 0.15 = **15%**. Pay gaps are conventionally expressed relative to men’s earnings.", wrongs:[
      {v:17.65, tol:0.1, why:"You divided by women’s earnings (540 ÷ 3,060). The convention is to divide by men’s: 540 ÷ 3,600."},
      {v:85, tol:0.1, why:"That’s women’s earnings as a share of men’s (3,060 ÷ 3,600). The gap is what’s left: 100 − 85 = 15."},
      {v:540, tol:0.5, why:"That’s the difference in money. Divide by men’s earnings to turn it into a percentage."}
    ], hint2:"Find the difference, divide by men’s earnings, then multiply by 100."},
    {id:"e2u3-l5-x3", type:"match", q:"Match each perspective to its explanation of why women do more unpaid care work.", pairs:[
      ["Functionalist","Dividing roles into earning and caring helps the family run smoothly.","Explaining a pattern by the function it serves for family stability is functionalist (Parsons’s instrumental and expressive roles)."],
      ["Conflict","Women’s economic dependence on men, like workers’ dependence on owners, leaves them doing the unpaid work.","Comparing gender to the power relation between owners and workers, as Engels did, is the conflict view."],
      ["Feminist","Patriarchal norms define care as women’s duty and undervalue it.","Feminist theory centres gender inequality and how norms value women’s work less."],
      ["Interactionist","Each time a couple divides chores, they reinforce what “a wife” and “a husband” do.","Gender produced in everyday interaction is the interactionist idea of doing gender."],
      ["Intersectional","A migrant care worker and the professional she works for experience care work very differently.","Looking at how gender combines with class, migration and race is intersectional."]
    ]},
    {id:"e2u3-l5-x4", type:"mcq", q:"At a meeting, Oluwaseun (a man) and Lucía (a woman) make the same firm point. Colleagues later call him “decisive” and her “aggressive”. Which concept best explains this?", options:[
      {t:"Doing gender: behaviour is judged against expectations for each gender, so the same act draws different reactions.", ok:true, why:"Right. West and Zimmerman stress accountability: people’s actions are assessed against gender expectations, and breaking them brings informal sanctions."},
      {t:"Sexual orientation shapes how firm people are in meetings.", why:"Orientation is about attraction and is unrelated to this situation."},
      {t:"Biological sex makes women more aggressive than men.", why:"The behaviour was identical; only the label changed. That points to social expectations, not biology."},
      {t:"Structural mobility.", why:"That’s about whole groups moving between classes as the economy changes."}
    ]},
    {id:"e2u3-l5-x5", type:"spot", q:"A news summary discusses the gender pay gap. Tap every claim that is **not supported** or goes beyond the evidence.", ask:"is unsupported or goes beyond the evidence", parts:[
      {t:"Official statistics show women’s median hourly pay is 12% below men’s.", flag:false, why:"A clear statistic with a source type. Fine."},
      " ",
      {t:"So women are paid 12% less than men for doing exactly the same job.", flag:true, why:"The raw gap compares all women with all men across different jobs, hours and experience. It is not the same measure as unequal pay for identical work."},
      " ",
      {t:"Part of the gap reflects differences in occupation and hours.", flag:false, why:"Researchers do find this; it’s a fair summary."},
      " ",
      {t:"So none of the gap could involve discrimination.", flag:true, why:"Explained factors don’t rule out discrimination; researchers usually find an unexplained part, and occupation and hours can themselves reflect unequal norms."},
      " ",
      {t:"UN Women reports that women spend more than 2.5 times as many hours on unpaid care as men.", flag:false, why:"An accurate figure from an authoritative source, relevant to hours in paid work."},
      " ",
      {t:"That proves women naturally prefer caring to paid work.", flag:true, why:"A time-use statistic shows what people do, not why. It can’t show a natural preference; socialization, norms, costs of childcare and job structures all play a part."}
    ]},
    {id:"e2u3-l5-x6", type:"mcq", q:"A company says it doesn’t discriminate: it employs many women (mostly white) in offices and many Black workers (mostly men) on the factory floor, but almost no Black women anywhere. Which concept best explains why looking at race and gender separately misses the problem?", options:[
      {t:"Intersectionality", ok:true, why:"Right. This is close to the case Crenshaw analysed in 1989: checking for sex discrimination and race discrimination one at a time hides discrimination against Black women."},
      {t:"Status consistency", why:"That compares a person’s rank across education, job and income. It doesn’t address overlapping forms of discrimination."},
      {t:"Primary deviance", why:"That’s a term from labeling theory about first rule-breaking acts."},
      {t:"Amalgamation", why:"That describes groups blending into a new group, not discrimination at the meeting point of race and gender."}
    ]}
   ],
   apply:{intro:"Observe how gender is done and organised around you. Keep notes about general patterns, not about identifiable people, and keep any personal reflections private.", tasks:[
     {t:"Gender in a toy or clothing aisle", how:["Visit a shop (or a shop’s website) that sells children’s toys or clothes.","Note how products are grouped, the colours, the words on packaging (“brave”, “pretty”, “builder”), and who appears in the pictures.","List what each kind of product teaches about gender roles.","Note any products that break the pattern."], write:"The shop, how products were grouped, words and images used, and what they teach…"},
     {t:"Who does what at home? A time-use sketch", how:["With the agreement of the people you live with, or for your own household only, list the regular unpaid tasks for one week: cooking, cleaning, laundry, care for children or older relatives, repairs, paperwork.","Estimate who does each and roughly how long it takes.","Compare your pattern with the UN Women finding on unpaid care. Is your household similar or different, and why?","Keep these notes private."], write:"Tasks, who does them, rough hours, and how it compares with the global pattern…"},
     {t:"Find one statistic, properly sourced", how:["Visit the WEF Global Gender Gap Report, the IPU’s data on women in parliament, or your national statistics office.","Find one figure about gender for your country: parliament share, pay gap, labour force participation or time use.","Write down the exact figure, the source, the year and what was measured.","Note one thing the figure can’t tell you."], write:"The figure, source, year, what it measures, and one limitation…"}
   ], proof:"Notes on how one set of products teaches gender, a private time-use sketch compared with the UN Women finding, and one sourced gender statistic with its year and a limitation."},
   read:[
     {book:"soc", where:"Chapter 12, Section 12.1 “Sex, Gender, Identity, and Expression”, Section 12.2 “Gender and Gender Inequality” and Section 12.3 “Sexuality”", note:"LibreTexts numbers these 12.2–12.4. The book’s pay and politics figures are older US data; use this lesson’s international sources for current figures."}
   ]
  }
  ],
  checkpoint:["e2u3-q02","e2u3-q05","e2u3-q08","e2u3-q11","e2u3-q14","e2u3-q17","e2u3-q21","e2u3-q24","e2u3-q30","e2u3-q33","e2u3-q38","e2u3-q42"],
  codex:[
   {id:"deviance", title:"Deviance", aka:["norm violation","deviant behaviour","relativity of deviance"], tags:["sociology","deviance"],
    summary:"Breaking social norms, and why what counts as deviant depends on place, time and audience.",
    levels:{
     starter:[
      "Deviance means breaking a social norm: an unwritten or written rule about how people are expected to behave. It can be tiny (wearing pyjamas to a supermarket) or serious (assault).",
      "The surprising part is that deviance isn’t built into acts. Think of a goal in football: kicking a ball into a net only “counts” because of the rules of the game. Shouting is deviant in a library and expected at a concert. Smoking indoors was ordinary in many countries a few decades ago and is banned in many today.",
      "Deviance isn’t always bad. People who broke unjust rules, such as segregation laws, were deviant in their time and are often admired now.",
      {key:"Deviance = an act + a norm + an audience that reacts. Change any of them and the label can change."}
     ],
     builder:[
      "The OpenStax textbook quotes William Graham Sumner (1906): deviance is a violation of established contextual, cultural or social norms, whether folkways, mores or codified law. Howard Becker (1963) added that whether an act is labelled deviant depends on location, audience and who commits it.",
      {table:[
        ["Term","Meaning","Example"],
        ["Deviance","Any norm violation","Talking loudly on a quiet train"],
        ["Crime","Violating a formal law, punishable by the state","Theft"],
        ["Positive deviance","Breaking a norm in a way that benefits others","Refusing to join routine bribery"]
      ]},
      "Crime is a subset of deviance. Some crimes are barely seen as deviant (minor traffic offences in some places); much deviance is not criminal.",
      "Deviance is studied with three classic lenses (see {{theories-of-deviance}}): what deviance does for society, who gets to define it, and how people learn it and get labelled. Societies respond through {{social-control}}: sanctions, formal and informal.",
      "Why it matters: debates about what should be banned, tolerated or encouraged are debates about where to draw the line of deviance. Knowing that lines are social helps you ask who drew them and why.",
      "Definitions shift over time in both directions. Over the 20th and 21st centuries many countries decriminalised acts once treated as crimes, such as same-sex relationships, while creating new offences or stronger norms against behaviour that was once widely tolerated, such as drink-driving or online harassment. Each shift came from changes in values, evidence, campaigning and law."
     ],
     pro:[
      "Sociologists distinguish **normative** definitions (deviance as violating norms) from **reactivist** definitions (deviance as whatever an audience labels deviant). Labeling theory takes the reactivist line; most textbooks combine both.",
      "Durkheim’s argument that crime is **normal**, present in every society and even a sign of its health, is often misread as approval. His point was functional: a society with no deviance at all would need to be so uniform that it could not change.",
      "Researchers also study **moral panics** (a term popularised by Stanley Cohen’s study of youth subcultures in 1960s Britain): episodes when a group or behaviour is framed as a threat out of proportion to the evidence, leading to new rules or crackdowns. They show how deviance can be produced by media and political attention.",
      "Edge cases matter: the same act can be lawful in one jurisdiction and criminal next door, or legal but deviant (heavy gambling where it is legal). International comparisons therefore need care about both legal and cultural definitions.",
      {tip:"When you meet any claim that something is “deviant” or “normal”, ask: according to which norm, in which setting, and who is reacting?"},
      "A related research tradition studies how behaviours become recognised **social problems** through claims-making: activists, professionals, media and officials define a condition as harmful and demand action. Researchers examine who makes the claims, with what evidence, and whose definitions win. This constructionist approach doesn’t deny that harms are real; it studies how they come to public attention."
     ]
    },
    related:["theories-of-deviance","labeling-theory","social-control","crime-statistics","norms"],
    read:[{book:"soc", where:"Chapter 7, Section 7.1 “Deviance and Control”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, Chapter 7 summary", url:"https://openstax.org/books/introduction-sociology-3e/pages/7-section-summary"},{t:"Introductory Sociology 3e (LibreTexts mirror): Deviance and Control", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/07%3A_Deviance_Crime_and_Social_Control/7.02%3A_Deviance_and_Control"}], checked:"2026-11"},

   {id:"theories-of-deviance", title:"Theories of deviance and crime", aka:["strain theory","anomie","differential association","control theory","social disorganization"], tags:["sociology","deviance","theory"],
    summary:"Functionalist, conflict and interactionist explanations of why deviance happens and who defines it.",
    levels:{
     starter:[
      "Why do people break rules? Sociologists have three families of answers, each asking a different question.",
      {list:[
        "**Functionalist**: what does deviance do for society, and what social pressures produce it? Example: people who are taught to want wealth but have no legitimate way to get it may turn to crime.",
        "**Conflict**: who makes the rules, and whose interests do they protect? Example: why is shoplifting often punished more harshly than large-scale tax evasion?",
        "**Interactionist**: how do people learn deviance, and how do labels shape them? Example: a teenager who mixes with friends who shoplift learns that it’s “no big deal”."
      ]},
      "None of these is the single right answer. Like three lamps lighting a room from different angles, they show different sides of the same act."
     ],
     builder:[
      {table:[
        ["Theory","Thinker(s)","Core idea"],
        ["Functions of deviance","Émile Durkheim (1890s)","Deviance clarifies norms, unites people and can drive change"],
        ["Strain theory","Robert Merton (1938)","A gap between cultural goals and legitimate means produces conformity, innovation, ritualism, retreatism or rebellion"],
        ["Social disorganization","Chicago school (1920s–30s)","Weak community ties and turnover raise crime"],
        ["Control theory","Travis Hirschi (1969)","Bonds of attachment, commitment, involvement and belief keep people from deviance"],
        ["Conflict / power elite","Marx; C. Wright Mills (1956)","Laws and enforcement reflect the interests of the powerful"],
        ["Differential association","Edwin Sutherland (1939)","Deviance is learned from close associates"],
        ["Labeling","Edwin Lemert (1951), Howard Becker (1963)","Reactions and labels can turn a single act into a deviant identity"]
      ]},
      "Using them together: a young person’s car theft may reflect strain (wanting status goods), weak bonds (few attachments), learning (friends who steal), a label that sticks after the first arrest, and an enforcement system that patrols poorer areas more. Each theory points to a different response: opportunities, community ties, mentoring, diversion from the courts, or fairer policing.",
      "Choose the lens by the question. To explain why rates differ between neighbourhoods or groups, start with strain or social disorganization. To explain why some harmful acts are criminalised and others are not, use conflict theory. To explain one person’s pathway into or out of deviance, use differential association, control theory or labeling."
     ],
     pro:[
      {h:"Main critiques"},
      {list:[
        "**Strain theory** assumes a shared set of goals across society and was first applied mainly to poorer people’s crime. Later “general strain theory” (Robert Agnew) broadened the sources of strain to include negative relationships and stress.",
        "**Social disorganization** risks blaming communities for problems imposed from outside, such as disinvestment; newer work on “collective efficacy” focuses on neighbours’ willingness to act together.",
        "**Control theory** explains conformity well but says less about elite or corporate crime, where offenders are often highly bonded.",
        "**Conflict theory** can be hard to test and overlooks laws that protect everyone.",
        "**Differential association** struggles with lone offenders and with why the first people in a network started.",
        "**Labeling** explains secondary deviance but not primary deviance."
      ]},
      "Feminist criminologists have added that classic theories were built largely from studies of men, and ask why women offend less and how victimization (for example, domestic abuse) is gendered. Intersectional approaches study how race, class and gender combine in both offending and enforcement.",
      "The textbook also covers Sykes and Matza’s **techniques of neutralization** (1957): denial of responsibility, denial of injury, denial of the victim, condemnation of the condemners, and appeal to higher loyalties.",
      "Longitudinal studies that follow the same people for decades consistently find an **age–crime curve**: offending rises in adolescence, peaks in the late teens or early twenties, and falls as people take on work, relationships and other bonds. Research on **desistance** (how people stop offending) draws on control theory (new bonds) and labeling theory (the chance to adopt a non-deviant identity)."
     ]
    },
    related:["deviance","labeling-theory","social-control","functionalism","conflict-theory","symbolic-interactionism","emile-durkheim"],
    read:[{book:"soc", where:"Chapter 7, Section 7.2 “Theoretical Perspectives on Deviance and Crime”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 7.2 Theoretical Perspectives on Deviance and Crime", url:"https://openstax.org/books/introduction-sociology-3e/pages/7-2-theoretical-perspectives-on-deviance-and-crime"}], checked:"2026-11"},

   {id:"labeling-theory", title:"Labeling theory and stigma", aka:["labelling theory","primary deviance","secondary deviance","stigma","master status"], tags:["sociology","deviance","interactionism"],
    summary:"How reactions to a rule-breaking act can create a deviant identity, and how stigma works.",
    levels:{
     starter:[
      "Labeling theory says that what matters most is not the rule-breaking act but how people **react** to it.",
      "Imagine two children who each break a window once. One is told off and forgiven. The other is called “a vandal” by teachers and neighbours, and other parents keep their children away. The second child may start to believe the label, and may find that the only people who accept him are others already in trouble. Over time, the label can produce more of the behaviour it describes.",
      "Edwin Lemert called the first act **primary deviance** and the behaviour that grows from an accepted label **secondary deviance**. Erving Goffman’s word for the discrediting mark a label leaves is **stigma**.",
      {key:"A label can become a self-fulfilling prophecy."}
     ],
     builder:[
      {ol:[
        "**Primary deviance**: a norm violation that doesn’t change the person’s self-image or relationships.",
        "**Reaction and labeling**: others, including authorities, publicly define the person as deviant.",
        "**Stigma and exclusion**: the label closes doors (jobs, friendships) and opens others (deviant groups).",
        "**Identity change**: the person comes to see themselves through the label.",
        "**Secondary deviance**: further deviance organised around the new identity."
      ]},
      "A label can become a **master status**, overriding every other identity: someone becomes “an ex-prisoner” before they are a parent, a cook or a neighbour.",
      "Goffman’s *Stigma* (1963) described how people manage spoiled identities: concealing (passing), disclosing selectively, or rejecting the label and organising with others who share it.",
      "Labeling ideas influenced policies such as **diverting** young first-time offenders away from courts, sealing or expunging old records, and avoiding stigmatising language (“a person with a conviction” rather than “a criminal”).",
      "Labels work outside crime too. In schools, teachers’ expectations can shape pupils’ progress: Robert Rosenthal and Lenore Jacobson’s *Pygmalion in the Classroom* (1968) reported such effects, though later studies found them to be smaller and less consistent than first claimed.",
      "Labels can also be resisted or reclaimed. Groups sometimes take a word once used as an insult and turn it into a source of pride and collective organisation, as some disability rights and LGBTQ+ movements have done."
     ],
     pro:[
      "Howard Becker’s *Outsiders* (1963) put the case strongly: deviance is not a quality of the act but a consequence of others applying rules and sanctions. He also studied **moral entrepreneurs**, people who campaign to create and enforce new rules.",
      "**Critiques.** Labeling theory doesn’t explain why primary deviance happens. It can understate the harm done to victims and the choices offenders make. Evidence is mixed: some studies find formal labeling (arrest, conviction) increases later offending, while others find little effect; outcomes depend on context and on whether the label is accompanied by support or exclusion.",
      "John Braithwaite’s **reintegrative shaming** (1989) offered a refinement: shaming that condemns the act while reaccepting the person reduces reoffending, while stigmatising shaming that casts the person out increases it. This idea underlies many restorative justice programmes.",
      "Stigma research now extends far beyond crime, to mental illness, disability, HIV, poverty and unemployment, using Goffman’s framework.",
      "Testing labeling theory is difficult because the people who are formally labelled (arrested, convicted, excluded from school) may already differ from those who aren’t. Researchers therefore look for situations where labelling is partly a matter of chance, for example cases assigned to stricter or more lenient judges, and compare later outcomes. Results vary by country, offence and age, which is why the theory is now treated as one influence among several."
     ]
    },
    related:["deviance","theories-of-deviance","social-control","status-roles"],
    read:[{book:"soc", where:"Chapter 7, Section 7.2 “Theoretical Perspectives on Deviance and Crime” (Symbolic Interactionism)"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 7.2 Theoretical Perspectives on Deviance and Crime", url:"https://openstax.org/books/introduction-sociology-3e/pages/7-2-theoretical-perspectives-on-deviance-and-crime"}], checked:"2026-11"},

   {id:"social-control", title:"Social control and sanctions", aka:["sanctions","formal social control","informal social control","criminal justice system"], tags:["sociology","deviance"],
    summary:"How groups encourage conformity through rewards and punishments, from a frown to a prison sentence.",
    levels:{
     starter:[
      "Every group, from a family to a country, has ways of keeping people in line with its norms. Sociologists call this **social control**.",
      "The tools are **sanctions**: rewards for following norms (positive sanctions) and punishments for breaking them (negative sanctions). Some are **informal**, like a smile, a thank-you, a stare or gossip. Others are **formal**, written and official, like a promotion, a fine or a prison sentence.",
      "Most social control is informal. You probably don’t queue because of the law; you queue because others would glare at you if you didn’t. Over time we also **internalise** norms: we feel guilty or proud even when nobody is watching.",
      {key:"Rewards and punishments, informal and formal: four boxes that cover nearly every way groups shape behaviour."}
     ],
     builder:[
      {table:[
        ["","Informal","Formal"],
        ["Positive","Thanks, praise, a pat on the back","A medal, a promotion, a scholarship"],
        ["Negative","An angry comment, being left out","A fine, a suspension, a prison sentence"]
      ]},
      "Formal social control is carried out by institutions with written rules: schools, employers, sports bodies, professional associations and the state. For crime, most countries have three linked parts: **policing**, **courts** and **corrections** (prisons, probation and community sentences), though their organisation differs. The textbook describes the US system, where there is no single national police force and federal and state courts run in parallel.",
      "Informal and formal control work together. A workplace’s formal anti-harassment policy matters, but so do whether colleagues laugh at or challenge a sexist joke.",
      "The goal of social control is **social order**: predictable patterns that let people coordinate their lives. Sociologists also ask whose order is being kept, and whether controls are applied equally.",
      "Social control now operates online as well. Platform rules, content removal and account bans are formal sanctions written in terms of service; likes, ratings, public criticism and “pile-ons” are informal ones. The same four-box framework still applies, though online sanctions can reach far more people and last longer than a frown in a street."
     ],
     pro:[
      "Michel Foucault’s *Discipline and Punish* (1975) argued that modern societies shifted from public, bodily punishment toward **surveillance** and self-discipline, using the image of the panopticon, a prison where inmates can always be watched and so learn to watch themselves. Researchers apply the idea to workplaces, schools and digital platforms.",
      "Research on **procedural justice** (Tom Tyler and others) finds that people comply with laws more when they see authorities as fair and respectful, not only when penalties are severe.",
      "Studies of deterrence generally find that the **certainty** of being caught matters more than the severity of punishment, though measuring this is hard.",
      "Social control can also be **informal but organised**: community justice, religious courts or customary law in many societies operate alongside state law. Comparing them helps separate the functions of social control from the particular forms one country uses.",
      "Durkheim, in *The Division of Labour in Society* (1893), linked types of law to types of solidarity. Small, similar communities tend toward **repressive** law that punishes to express shared outrage; complex societies with a detailed division of labour rely more on **restitutive** law that aims to restore relationships and repair harm, as in contract and civil law.",
      "**Restorative justice** programmes, used in many countries, bring together offenders, victims and communities to repair harm. They draw on informal control and the idea of reintegration rather than exclusion."
     ]
    },
    related:["deviance","labeling-theory","norms","theories-of-deviance"],
    read:[{book:"soc", where:"Chapter 7, Section 7.1 “Deviance and Control” and Section 7.3 “Crime and the Law”"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): Deviance and Control", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/07%3A_Deviance_Crime_and_Social_Control/7.02%3A_Deviance_and_Control"},{t:"Introductory Sociology 3e (LibreTexts mirror): Crime and the Law", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/07%3A_Deviance_Crime_and_Social_Control/7.04%3A_Crime_and_the_Law"}], checked:"2026-11"},

   {id:"crime-statistics", title:"Reading crime statistics", aka:["dark figure of crime","victimization survey","police recorded crime","crime rate"], tags:["sociology","deviance","data"],
    summary:"What crime figures measure, why recorded crime differs from crime that happens, and how to compare fairly.",
    levels:{
     starter:[
      "Crime figures look simple but measure something specific. Most come from one of two sources:",
      {list:[
        "**Police-recorded crime**: offences reported to or found by the police and written down.",
        "**Victim surveys**: large samples of people asked what happened to them, whether or not they told the police."
      ]},
      "Many crimes are never reported: victims may be afraid, ashamed, distrustful, or think it’s not worth it. The unrecorded part is called the **dark figure of crime**.",
      "Also check whether a number is a **count** or a **rate**. A big city will always have more burglaries than a village. A rate, such as burglaries per 100,000 people, lets you compare.",
      {key:"Before you trust a crime number, ask: who counted, how, and per how many people?"}
     ],
     builder:[
      {table:[
        ["Source","Strengths","Blind spots"],
        ["Police-recorded crime","Covers serious crimes like homicide; local detail","Misses unreported crime; changes when recording rules or police activity change"],
        ["Victimization surveys","Capture unreported crime; good for long-term trends","Usually miss people not living in households, businesses, and crimes with no individual victim"]
      ]},
      "Examples: the United States uses the FBI’s Uniform Crime Reporting program (now collected through the National Incident-Based Reporting System) alongside the National Crime Victimization Survey. England and Wales use police-recorded crime alongside the Crime Survey for England and Wales.",
      "The UK Office for National Statistics explains why the two can move in different directions. After a 2014 inspection found many reported crimes weren’t being recorded, police improved their recording, which is thought to account for much of a later rise in recorded sexual offences and less serious violence, while the survey didn’t show the same rise.",
      {ex:"Rate = count ÷ population × 100,000.\n1,800 burglaries ÷ 240,000 people × 100,000 = 750 per 100,000.", label:"Worked example"},
      "Comparing countries is especially hard: legal definitions, recording rules and willingness to report all differ.",
      "A quick checklist for any crime figure:",
      {ol:["Which source: police records, a victim survey, or court data?","Is it a count or a rate, and per how many people?","What period does it cover, and is one year being compared with another unusual year?","Did definitions, laws or recording rules change?","Does another source tell the same story?"]}
     ],
     pro:[
      "Things that change recorded crime without changing real crime: new offences being created, changes in counting rules, easier reporting (online forms), targeted policing (more patrols find more drug offences), and campaigns that encourage reporting of under-reported crimes such as domestic abuse. A rise in recorded domestic abuse can be good news if it reflects greater trust in reporting.",
      "Arrest and conviction data measure the actions of the justice system as much as offending. Conflict theorists stress that differences in policing intensity between neighbourhoods and groups can produce differences in recorded offending.",
      "Survey data have their own limits: sampling error, memory errors, and reluctance to disclose sensitive crimes in an interview. Statisticians therefore treat the two sources as complementary.",
      "Public perception of crime often diverges from both: the textbook notes that US crime rates fell from the early 1990s while many people believed crime was rising, a gap often linked to media coverage.",
      "Choose the right denominator. Residential burglary per 1,000 households, vehicle theft per 1,000 vehicles, or offences in a city centre that receives many daily visitors may all need something other than resident population. Small numbers also fluctuate: a town with two homicides one year and four the next has “doubled” its homicides, but that change may be chance. Analysts often use several years together or confidence intervals for surveys."
     ]
    },
    related:["deviance","social-control","correlation-causation","secondary-data"],
    read:[{book:"soc", where:"Chapter 7, Section 7.3 “Crime and the Law” (Crime Statistics)"}],
    sources:[{t:"ONS: Why do the two data sources show differing trends?", url:"https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/methodologies/methodologicalnotewhydothetwodatasourcesshowdifferingtrends"},{t:"Introductory Sociology 3e (LibreTexts mirror): Crime and the Law", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/07%3A_Deviance_Crime_and_Social_Control/7.04%3A_Crime_and_the_Law"}], checked:"2026-11"},

   {id:"social-stratification", title:"Social stratification", aka:["stratification","inequality","Davis–Moore thesis","class, status and party"], tags:["sociology","inequality"],
    summary:"How societies rank people into layers, and the main theories of why they do.",
    levels:{
     starter:[
      "Social stratification is a society’s ranking of people into layers, based on things like wealth, income, education, occupation, family background and power. The word comes from geology: rock laid down in strata.",
      "Stratification belongs to **society**, not to individuals. A child is born into a layer before doing anything at all. Layers tend to last across generations, every society has some form of them, and each society has beliefs that make its ranking seem fair.",
      "Two key resources are **income** (money coming in, like water from a tap) and **wealth** (what you own minus what you owe, like the water already in the bath).",
      {key:"Stratification is about unequal access to resources and opportunities, organised by society."},
      "Sociologists often use Weber’s phrase **life chances** for what stratification shapes: the odds of good health, education, safety and a long life."
     ],
     builder:[
      {table:[
        ["Theory","Claim","Main critique"],
        ["Davis–Moore (1945)","Unequal rewards attract talented people to important roles","Tumin (1953): stratification blocks talent; ignores inheritance, race and gender"],
        ["Marx","Classes are defined by ownership of the means of production; owners exploit workers","Doesn’t capture a large middle class; Marxist states had their own hierarchies"],
        ["Weber","Three separate dimensions: class (economic), status (honour), party (power)","More descriptive than explanatory; harder to test as one theory"],
        ["Symbolic interactionism","Class shows in everyday encounters and status symbols","Micro focus; says less about structures"]
      ]},
      "Weber’s view, from *Economy and Society* (published 1922, after his death), is why most researchers measure position with several indicators: income, wealth, education and occupation together. It also explains **status inconsistency**, such as a respected religious leader with little money.",
      "Systems of stratification differ in openness, from closed **caste** systems to more open **class** systems (see {{class-caste}}). Movement between layers is **social mobility** (see {{social-mobility}}).",
      "Stratification also shapes health. The World Health Organization’s Commission on Social Determinants of Health (2008) described a **social gradient**: health tends to improve step by step at each level of the social ladder, not only between the poorest and everyone else. That pattern is one of the strongest pieces of evidence that position in a stratification system has real effects on bodies and lives."
     ],
     pro:[
      "Modern class schemes include the European Socio-economic Classification (based on employment relations) and Erik Olin Wright’s neo-Marxist scheme (ownership, authority and expertise). Pierre Bourdieu added **cultural capital** (knowledge, tastes and credentials) and **social capital** (networks) to economic capital, explaining how advantage passes between generations without obvious money transfers.",
      "Functionalist and conflict views can be partly reconciled: some inequality may motivate effort, while large and inherited inequality blocks opportunity. Empirical questions (how much inequality, of what kind, with what effects) are tested with data on mobility, health and wellbeing.",
      "Thorstein Veblen’s **conspicuous consumption** (1899) remains useful for status display, now including social media.",
      {warn:"Avoid treating stratification as a single ladder. Gender, race and ethnicity, caste, migration status, disability and region each create their own hierarchies, and they intersect."},
      "Measuring a person’s position usually means combining indicators: occupation, education, income and wealth. Each choice matters. Occupation-based schemes compare well across countries but miss wealth; income measures are sensitive to temporary changes; wealth data are scarce and often miss the very top. Researchers therefore test whether conclusions hold under more than one measure, and look at households as well as individuals, since resources are often shared.",
      "Comparative research also asks how much stratification varies with policy: taxes, transfers, public services and labour-market institutions all change how unequal final living standards are."
     ]
    },
    related:["class-caste","social-mobility","measuring-inequality","global-stratification","karl-marx","max-weber"],
    read:[{book:"soc", where:"Chapter 9, Section 9.1 “What Is Social Stratification?” and Section 9.4 “Theoretical Perspectives on Social Stratification”"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): Theoretical Perspectives on Social Stratification", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/09%3A_Social_Stratification_in_the_United_States/9.05%3A_Theoretical_Perspectives_on_Social_Stratification"},{t:"OECD (2018): Inequalities in household wealth across OECD countries", url:"https://www.oecd.org/en/publications/inequalities-in-household-wealth-across-oecd-countries_7e1bf673-en.html"}], checked:"2026-11"},

   {id:"class-caste", title:"Caste, class and meritocracy", aka:["caste system","class system","meritocracy","social class","status consistency"], tags:["sociology","inequality"],
    summary:"Closed and open stratification systems, social class, and why meritocracy is an ideal rather than a reality.",
    levels:{
     starter:[
      "Stratification systems differ mainly in how **open** they are.",
      {list:[
        "A **caste system** is closed. You are born into a group, usually marry within it, often inherit its occupation, and stay there for life.",
        "A **class system** is open, at least in principle. Your position depends partly on birth and partly on what you achieve, and you can move.",
        "A **meritocracy** would be a system where position depends only on effort and talent. It’s an ideal: no real society works purely that way."
      ]},
      "Think of a ladder (class) versus a set of sealed boxes stacked on top of each other (caste).",
      {key:"Most real societies are class systems with some caste-like features, and none are pure meritocracies."},
      "Even in open systems, where you start still makes a big difference to where you end up."
     ],
     builder:[
      "India historically had a rigid caste system. Its Constitution abolished “untouchability” in 1950, but the textbook notes that caste remains embedded in society, especially in rural areas. Other caste-like systems include apartheid South Africa’s legal racial categories and the hereditary outcaste status in feudal Japan, whose descendants have faced discrimination long after it was abolished.",
      "**Social class** groups people with similar income, wealth, education and occupation. Labels and boundaries vary by country; the textbook uses upper, middle and lower classes, with subdivisions. Classes tend to share **class traits** (markers): tastes, speech and habits.",
      "**Status consistency** is how evenly a person ranks across those factors. A migrant doctor driving a taxi has low status consistency; so does a wealthy business owner who left school early.",
      "The word **meritocracy** was popularised by, and is usually credited to, Michael Young’s 1958 satire *The Rise of the Meritocracy*, though Alan Fox used it in 1956. Young’s book warned that a society convinced its rankings were deserved might treat those at the bottom harshly.",
      "Class categories are not fixed. In Britain, a large online survey run with the BBC led sociologists in 2013 to propose seven classes, from an “elite” to a “precariat”, using economic, social and cultural resources together. Other countries have developed their own schemes, reflecting their own labour markets and histories."
     ],
     pro:[
      "Caste-based discrimination is studied as discrimination based on **work and descent**, a framing used in UN human rights work, and it affects communities in South Asia and in diasporas. Debates continue over how caste should be covered by anti-discrimination law in countries with South Asian communities.",
      "Class systems contain ascribed elements: inherited wealth, citizenship, and the cultural and social capital families pass on. Sociologists debate whether credentials and test scores, often presented as merit, partly reproduce class advantage (Bourdieu’s argument) or open real paths for mobility; evidence supports some of each depending on the country and institution.",
      "Status inconsistency has been linked in research to political dissatisfaction and to support for social change, though findings vary.",
      {tip:"When a society calls itself meritocratic, look at the evidence on intergenerational mobility before accepting the claim."},
      "Caste and class interact. In India, research finds that caste still correlates with occupation, education and wealth, while constitutional reservations (quotas) for Scheduled Castes and Scheduled Tribes in education, public employment and legislatures have widened access for many. How well such policies work, and for whom, is a major research and political question in India.",
      "Similar debates surround affirmative action and quotas for other groups in other countries."
     ]
    },
    related:["social-stratification","social-mobility","race-ethnicity"],
    read:[{book:"soc", where:"Chapter 9, Section 9.1 “What Is Social Stratification?” and Section 9.2 “Social Stratification and Mobility in the United States”"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): What Is Social Stratification?", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/09%3A_Social_Stratification_in_the_United_States/9.02%3A_What_Is_Social_Stratification"}], checked:"2026-11"},

   {id:"social-mobility", title:"Social mobility", aka:["upward mobility","downward mobility","intergenerational mobility","intragenerational mobility","structural mobility"], tags:["sociology","inequality"],
    summary:"Movement up or down a stratification system, between generations, within a life, and through changes in society itself.",
    levels:{
     starter:[
      "Social mobility is movement between positions in society. It can be **upward** (a better position) or **downward**.",
      {list:[
        "**Intergenerational**: comparing parents and children. A farmer’s daughter becomes an accountant.",
        "**Intragenerational**: within one person’s life. A shop assistant becomes a manager, or a manager loses her job and takes lower-paid work.",
        "**Structural**: whole groups move because society changes. When factories open, millions move from farm work to industrial work."
      ]},
      "A family story of moving up is real, but it doesn’t tell you how common that was. Mobility is measured across whole populations.",
      {key:"Ask whether people moved because they climbed, or because the ladder itself changed."},
      "Mobility matters because it tells us whether a society’s inequalities are passed down automatically, or whether people from any background have a real chance to change their position."
     ],
     builder:[
      "Researchers distinguish **absolute** mobility (how many people end up better off than their parents, which rises when the economy grows) from **relative** mobility (whether children from poor and rich families have similar chances of reaching any given position). A country can have high absolute mobility through growth while relative chances stay unequal.",
      "The OECD’s 2018 report *A Broken Social Elevator? How to Promote Social Mobility* found that mobility from parents to children is low across earnings, education, occupation and health in many countries, with **sticky floors** at the bottom and **sticky ceilings** at the top.",
      "Across countries, higher income inequality tends to go with lower intergenerational mobility. The pattern is nicknamed the **Great Gatsby curve**. It is a correlation, so it doesn’t show by itself which causes which.",
      "Structural mobility examples: rapid industrialisation in South Korea and China moved huge numbers of people out of farming; deindustrialisation in parts of Europe and North America moved some towns down together.",
      "Mobility can also be **horizontal**: changing jobs or places without changing rank, such as moving from one clerical job to another, or migrating to a new country while keeping a similar occupation.",
      "Mobility can be measured for occupation, education, income or wealth, and the answers differ."
     ],
     pro:[
      "Intergenerational mobility is often measured by the **intergenerational earnings elasticity** (how much of a parent’s income advantage, in percentage terms, carries to the child) or by **rank–rank** correlations and transition matrices (the chance that a child born in the bottom fifth reaches the top fifth). Each measure has strengths and data demands; long-run administrative data have transformed the field.",
      "Educational mobility has risen in many countries as schooling expanded, yet the **value** of credentials can fall as they become common (credential inflation), so occupational and income mobility may not follow.",
      "Mobility differs by gender, race, migration status and region; national averages can hide very different chances within a country.",
      {warn:"Be careful with “rags to riches” examples in media: they are newsworthy because they are rare."},
      "Policies studied for their effects on mobility include early childhood education, school funding and admissions rules, access to higher education, housing and neighbourhood policies, and taxes on inheritance. Findings differ between countries and are debated, partly because effects take a generation to appear.",
      "Fear of downward mobility, for oneself or one’s children, is also studied as a driver of political attitudes and of intensive investment in children’s education.",
      "Mobility studies of women were long neglected because early research classified families by the father’s occupation only."
     ]
    },
    related:["social-stratification","class-caste","measuring-inequality"],
    read:[{book:"soc", where:"Chapter 9, Section 9.2 “Social Stratification and Mobility in the United States” (Social Mobility)"}],
    sources:[{t:"OECD (2018): A Broken Social Elevator? How to Promote Social Mobility", url:"https://www.oecd.org/en/publications/broken-elevator-how-to-promote-social-mobility_9789264301085-en.html"},{t:"Introductory Sociology 3e (LibreTexts mirror): Social Stratification and Mobility in the United States", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/09%3A_Social_Stratification_in_the_United_States/9.03%3A_Social_Stratification_and_Mobility_in_the_United_States"}], checked:"2026-11"},

   {id:"measuring-inequality", title:"Measuring inequality", aka:["Gini coefficient","Lorenz curve","income share","wealth share","poverty line"], tags:["sociology","inequality","data"],
    summary:"Income and wealth, the Gini coefficient, top shares, and absolute and relative poverty lines.",
    levels:{
     starter:[
      "To say a society is “very unequal”, you need a measurement. The most common ones are:",
      {list:[
        "**Shares**: what share of all income or wealth goes to the top 10% (or the bottom 50%).",
        "The **Gini coefficient**: a single number from 0 (everyone has exactly the same) to 1 (one person has everything). Sometimes shown from 0 to 100.",
        "**Poverty lines**: how many people fall below a set income."
      ]},
      "Always check whether a figure is about **income** (money coming in) or **wealth** (what people own, minus debts). Wealth is usually far more unequal.",
      {key:"Inequality numbers depend on what is measured (income or wealth), for whom (people or households), and when."},
      "Different measures can tell different stories, so good reports say exactly which one they used."
     ],
     builder:[
      "The **Lorenz curve** plots the cumulative share of income held by the poorest x% of people. With perfect equality it is a straight diagonal line; the more it sags below the line, the more unequal the society. The Gini coefficient is the area between the line of equality and the curve, divided by the whole area under the line of equality.",
      "An OECD study (2018) found that across the OECD countries it covered, the wealthiest 10% of households held on average **52%** of total household wealth, while the least wealthy 60% held a little over 12%, and wealth concentration was about **twice** the level of income inequality.",
      {table:[
        ["Poverty measure","Line","Example"],
        ["Absolute (extreme)","Fixed: $3.00 a day in 2021 PPP dollars (World Bank, from June 2025)","Global extreme poverty counts"],
        ["Relative","A share of the national median income","EU: below 60% of median; OECD often uses 50%"],
        ["Multidimensional","Several deprivations at once","Health, schooling and living standards together"]
      ]},
      "Different measures can rank countries differently, so researchers often report several.",
      {ex:"Five households earn 10, 10, 20, 20 and 40 (total 100).\nThe top fifth (one household) has 40 ÷ 100 = 40% of all income.\nThe bottom two-fifths (two households) have 20 ÷ 100 = 20%.\nSo the richest fifth has twice as much as the poorest two-fifths combined.",label:"Worked example: income shares"}
     ],
     pro:[
      "The Gini is most sensitive to changes in the middle of the distribution. The **Palma ratio** (the top 10%’s income share divided by the bottom 40%’s) focuses on the extremes, where most change in inequality tends to happen.",
      "Choices that change results: before or after taxes and transfers; per person or per household (with an **equivalence scale** adjusting for household size); survey data (which often miss the very richest) or tax data (which capture top incomes better).",
      "PPP conversions are revised when new price surveys come in. That is why the World Bank’s line moved from $1.90 (2011 prices) to $2.15 (2017 prices) to $3.00 (2021 prices): the updates reflect new price data and the poverty lines of the poorest countries, not simply inflation.",
      {warn:"Never compare a Gini for income with a Gini for wealth, or a household figure with a per-person figure, as if they measured the same thing."},
      "Relative poverty lines are usually based on **equivalised** household income: income adjusted for household size and composition, so a single adult and a family of five can be compared. Changing the equivalence scale, or the cut-off (50% or 60% of the median), changes who is counted as poor, which is why official definitions should always be quoted with the figure."
     ]
    },
    related:["social-stratification","global-stratification","social-mobility"],
    sources:[{t:"OECD (2018): Inequalities in household wealth across OECD countries", url:"https://www.oecd.org/en/publications/inequalities-in-household-wealth-across-oecd-countries_7e1bf673-en.html"},{t:"World Bank: June 2025 update to global poverty lines", url:"https://www.worldbank.org/en/news/factsheet/2025/06/05/june-2025-update-to-global-poverty-lines"}], checked:"2026-11"},
   {id:"global-stratification", title:"Global stratification and how it is measured", aka:["World Bank income groups","Human Development Index","HDI","international poverty line","Global North and South"], tags:["sociology","inequality","global"],
    summary:"Inequality between countries, the World Bank income groups, the HDI and the $3.00 international poverty line.",
    levels:{
     starter:[
      "Global stratification is inequality **between** countries, alongside inequality **within** them. For most people, the country they are born in shapes their life chances more than almost anything else: how long they live, whether they finish school, and how well their work is protected.",
      "Three common tools:",
      {list:[
        "**World Bank income groups**: low, lower-middle, upper-middle and high income, based on average income per person.",
        "The **Human Development Index (HDI)**: combines life expectancy, schooling and income.",
        "The **international poverty line**: $3.00 per person per day (in 2021 PPP dollars) since June 2025."
      ]},
      "Old labels like “Third World” come from the Cold War and are outdated; many researchers now say Global North and Global South, or use income groups.",
      {key:"Check the year of any classification. Thresholds and lines are updated."}
     ],
     builder:[
      {table:[
        ["World Bank group (FY2027, from 1 July 2026)","GNI per capita, Atlas method (2025 data)"],
        ["Low income","US$1,175 or less"],
        ["Lower-middle income","US$1,176 to 4,635"],
        ["Upper-middle income","US$4,636 to 14,375"],
        ["High income","Above US$14,375"]
      ]},
      "The World Bank updates the groups every 1 July using the previous year’s income. The textbook’s thresholds come from 2019 data, so they are out of date.",
      "UNDP’s HDI uses life expectancy at birth, expected and mean years of schooling, and GNI per capita (PPP). Its groups are very high (0.800 and above), high (0.700–0.799), medium (0.550–0.699) and low (below 0.550).",
      "The World Bank’s June 2025 update set the extreme poverty line at **$3.00** a day (2021 PPP), replacing $2.15 (2017 PPP), with higher lines of **$4.20** and **$8.30** for lower-middle and upper-middle-income countries. It estimated about **838 million** people lived in extreme poverty in 2022 using the new line, and projected that 9% of the world’s population would still be in extreme poverty in 2030.",
      "The labels “Global North” and “Global South” are about economic and political position more than geography, and they hide great diversity: the “South” includes both very rich and very poor countries. Income groups are more precise but say nothing about how income is shared."
     ],
     pro:[
      "**Atlas method** GNI uses exchange rates smoothed over three years to reduce swings, while PPP-based figures adjust for price levels. The two can rank countries differently, so income groups (Atlas) and HDI (PPP income) are not directly interchangeable.",
      "The HDI is the **geometric mean** of three dimension indices, so a very low score on one dimension can’t be fully offset by a high score on another. UNDP also publishes an inequality-adjusted HDI, a gender development index and a multidimensional poverty index, which address some of the HDI’s blind spots.",
      "Limits shared by these measures: national averages hide inequality inside countries; unpaid work and environmental damage are largely invisible; data for fragile or conflict-affected countries are often older and less reliable.",
      "Between-country and within-country inequality can move in opposite directions: strong growth in large, populous countries can narrow gaps between countries even while inequality inside many countries rises. Global inequality researchers therefore look at the whole world’s distribution of individuals as well as at country averages.",
      "UNDP and the Oxford Poverty and Human Development Initiative publish a global **Multidimensional Poverty Index**, which counts overlapping deprivations in health, education and living standards at the household level. UNDP also experiments with a planetary pressures-adjusted HDI that accounts for carbon emissions and material use, reflecting debates about whether development measures should include environmental costs."
     ]
    },
    related:["measuring-inequality","theories-global-inequality","social-stratification","work-globalization"],
    read:[{book:"soc", where:"Chapter 10, Section 10.1 “Global Stratification and Classification” and Section 10.2 “Global Wealth and Poverty”"}],
    sources:[{t:"World Bank: Country and lending groups (current thresholds)", url:"https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups"},{t:"World Bank: June 2025 update to global poverty lines", url:"https://www.worldbank.org/en/news/factsheet/2025/06/05/june-2025-update-to-global-poverty-lines"},{t:"UNDP Human Development Report 2025: Technical notes", url:"https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Technical_Notes.pdf"}], checked:"2026-11"},

   {id:"theories-global-inequality", title:"Theories of global inequality", aka:["modernization theory","dependency theory","world-systems theory","Rostow","Wallerstein","core and periphery"], tags:["sociology","global","theory"],
    summary:"Modernization, dependency and world-systems explanations of why some countries are richer, with their critiques.",
    levels:{
     starter:[
      "Why are some countries rich and others poor? Three classic theories give different answers.",
      {list:[
        "**Modernization theory**: poorer countries are at an earlier stage. With investment, industry, technology and new institutions they can follow the path richer countries took.",
        "**Dependency theory**: poorer countries were made poor. Colonialism and unequal trade set them up to send cheap raw materials to rich countries, and that pattern continues.",
        "**World-systems theory**: there is one world economy with a **core**, a **semi-periphery** and a **periphery**. Value flows toward the core, but countries can change position."
      ]},
      "Think of a race. Modernization says some runners started late. Dependency says some runners were tied together, with the rich ones pulling the others back. World-systems says the whole track is tilted.",
      {key:"Each theory points to different causes and different remedies, and many researchers combine them."}
     ],
     builder:[
      {table:[
        ["Theory","Key thinkers","Main critique"],
        ["Modernization","Walt Rostow, *The Stages of Economic Growth* (1960)","Ethnocentric; assumes one path from equal starting points; ignores colonial history"],
        ["Dependency","Raúl Prebisch, Andre Gunder Frank, Fernando Henrique Cardoso (1950s–60s)","Can’t easily explain countries that grew rapidly through world trade (South Korea, Taiwan, China)"],
        ["World-systems","Immanuel Wallerstein (from 1974)","So focused on the world economy that culture, politics and agency fade; positions are hard to define precisely"]
      ]},
      "Rostow’s five stages: traditional society, preconditions for take-off, take-off, drive to maturity, and the age of high mass consumption.",
      "Dependency theory described how former colonies often specialised in exporting a few raw materials whose prices fell relative to manufactured imports. Frank called the result “the development of underdevelopment”.",
      "World-systems theory treats the semi-periphery as both exploited and exploiting, and expects movement: countries can rise or decline.",
      "Applying the theories to one case shows their differences. Take a country that exports mainly raw coffee beans. Modernization asks what investment and institutions would let it industrialise and process its own coffee. Dependency asks how colonial history and trade rules locked it into exporting a cheap raw crop. World-systems asks where in the global chain the profits from a cup of coffee are captured, and whether the country can move up that chain."
     ],
     pro:[
      "The textbook also uses a **symbolic interactionist** lens on global inequality through Leslie Chang’s *Factory Girls* (2008), which follows young migrant women working in factories in Dongguan, China, showing how people experience global production in daily life.",
      "Later work moved beyond the three classics: the **developmental state** literature studied how governments in East Asia directed industrialisation; **institutional** approaches stress property rights, governance and state capacity; **global value chain** research traces where value is captured along a product’s journey; and **post-development** critics question whether “development” as defined by rich countries is the right goal at all.",
      "Each theory has a policy echo: modernization fed aid and investment programmes; dependency ideas (and Prebisch’s structuralism before them) fed import-substituting industrialisation in Latin America in the mid-20th century, with mixed results; world-systems and value-chain thinking inform debates on trade rules, debt and corporate responsibility.",
      {tip:"For any country, test each theory against its actual history: colonial past, trade structure, state policies and position in production chains."},
      "Empirical tests of all three theories are hard because countries differ in so many ways at once. Researchers use comparative historical case studies, cross-national statistics and trade data, and increasingly firm-level supply-chain data. Most now accept that internal factors (institutions, policies, conflict) and external ones (colonial legacies, trade, finance) both matter."
     ]
    },
    related:["global-stratification","conflict-theory","work-globalization"],
    read:[{book:"soc", where:"Chapter 10, Section 10.3 “Theoretical Perspectives on Global Stratification” and Section 10.1 (world-systems approach)"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): Theoretical Perspectives on Global Stratification", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/10%3A_Global_Inequality/10.04%3A_Theoretical_Perspectives_on_Global_Stratification"},{t:"Introductory Sociology 3e (LibreTexts mirror): Global Stratification and Classification", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/10%3A_Global_Inequality/10.02%3A_Global_Stratification_and_Classification"}], checked:"2026-11"},

   {id:"race-ethnicity", title:"Race and ethnicity", aka:["social construction of race","minority group","dominant group","ethnic group"], tags:["sociology","race","ethnicity"],
    summary:"Why race is a social construction with real effects, how ethnicity differs, and what “minority group” means in sociology.",
    levels:{
     starter:[
      "**Race** is a way of grouping people, usually by visible features such as skin colour, that societies create and give meaning to. Biologists and sociologists agree that racial categories don’t match how human genetic variation actually works: humans share about 99.9% of their DNA, and traits change gradually across geography.",
      "But race is still **real in its effects**. Being classified into a racial group has shaped where people could live, work or vote, and still affects treatment and health.",
      "**Ethnicity** is about shared culture: language, religion, customs, ancestry and history. Everyone has an ethnicity.",
      "In sociology, a **minority group** is a group with less power, not necessarily fewer people.",
      {key:"Race: socially constructed, socially real. Ethnicity: shared culture. Minority: less power."}
     ],
     builder:[
      "The American Association of Biological Anthropologists’ 2019 statement says race does not provide an accurate representation of human biological variation, and also that race is real, as is racism, and both have real biological consequences. The US National Human Genome Research Institute describes race as a social construct and notes more genetic variation within self-identified racial groups than between them.",
      "Countries draw racial and ethnic categories differently. Brazil’s census uses colour categories (*branca*, *preta*, *parda*, *amarela*, *indígena*); the UK census asks about ethnic group; the US census has changed its race categories many times since 1790.",
      "Louis Wirth (1945) defined a minority group as one singled out for differential and unequal treatment because of physical or cultural characteristics. Wagley and Harris (1958) listed five characteristics: unequal treatment, distinguishing traits, involuntary membership, awareness of subordination and a high rate of in-group marriage.",
      "The **dominant group** holds more power and privilege. Under apartheid, Black South Africans were the majority in numbers but a minority group in power.",
      "Indigenous peoples are a further important category. The UN Declaration on the Rights of Indigenous Peoples (2007) stresses self-identification and collective rights, and many Indigenous groups describe themselves as nations or peoples rather than as ethnic minorities."
     ],
     pro:[
      "Social construction operates through **racialization**: the process by which groups come to be seen in racial terms. Groups have been racialized and de-racialized over time; for example, some European immigrant groups in the United States were once treated as racially distinct and later absorbed into the category “white”.",
      "Population genetics does find ancestry-related patterns, which matter in medicine for some conditions. The scientific consensus is that these patterns are continuous and don’t correspond to the social categories used in censuses, so race is a poor proxy for genetic ancestry.",
      "Ethnicity can be **symbolic** (Herbert Gans’s term for occasional, voluntary displays of heritage) or central to daily life, and identities can be **situational**, shifting with context.",
      {tip:"Use the specific names people use for themselves, and check current style guidance such as the APA’s bias-free language guidelines. Capitalisation and preferred terms are still evolving."},
      "Measurement choices matter. Censuses may use **self-identification** (Brazil’s census uses self-declared colour or race) or, in some surveys, observer classification, and the two can differ. Since 2000 the US census has let people choose more than one race, and the 2001 census in England and Wales introduced “Mixed” categories, reflecting growing recognition of multiple identities. Changes in categories mean that apparent population changes over time can partly reflect changes in how people are counted."
     ]
    },
    related:["prejudice-discrimination","intergroup-relations","w-e-b-du-bois","social-construction-of-reality"],
    read:[{book:"soc", where:"Chapter 11, Section 11.1 “Racial, Ethnic, and Minority Groups”"}],
    sources:[{t:"AABA Statement on Race and Racism (2019)", url:"https://bioanth.org/about/aaba-statement-on-race-racism/"},{t:"NHGRI Talking Glossary: Race", url:"https://www.genome.gov/genetics-glossary/race"},{t:"Introductory Sociology 3e (LibreTexts mirror): Racial, Ethnic, and Minority Groups", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/11%3A_Race_and_Ethnicity/11.02%3A_Racial_Ethnic_and_Minority_Groups"}], checked:"2026-11"},

   {id:"prejudice-discrimination", title:"Prejudice, discrimination and racism", aka:["stereotype","implicit bias","institutional racism","systemic racism","colorism"], tags:["sociology","race","ethnicity"],
    summary:"Beliefs, attitudes, actions and systems: four different things that are often confused.",
    levels:{
     starter:[
      {list:[
        "A **stereotype** is an oversimplified belief about a group (“they’re all lazy”, or even “they’re all good at maths”).",
        "**Prejudice** is an attitude or feeling about a group, often formed before any real experience: literally, pre-judging.",
        "**Discrimination** is an action: treating people unequally because of their group.",
        "**Racism** combines prejudice and discrimination with the belief that some races are superior, and uses it to justify inequality."
      ]},
      "Racism can be **individual** (one person’s actions) or **institutional** (rules and routines that disadvantage a group, even when no one means them to).",
      {key:"Belief, attitude, action, system. Each needs a different fix."},
      "Each one can exist without the others: a person can hold a stereotype without disliking anyone, or follow an unfair rule without holding any prejudice."
     ],
     builder:[
      "Prejudice and discrimination don’t always go together. A prejudiced person may not act on it, and someone with no personal prejudice can discriminate by applying an unfair rule.",
      "**Implicit bias** is linking stereotypes to groups without conscious awareness, which can lead to unfair actions. **Colorism** is prejudice based on skin tone, often within one group.",
      "**Institutional racism** was named by Stokely Carmichael and Charles Hamilton in *Black Power* (1967). The textbook also calls it systemic or structural racism. Examples include US **redlining** (refusing mortgages in neighbourhoods where minority families lived) and apartheid laws on residence and work.",
      "Researchers measure discrimination with **field experiments**: matched applications that differ only in a name signalling ethnicity. Such studies in many countries have found unequal callback rates for jobs and housing.",
      "Gordon Allport’s **contact hypothesis** (1954) holds that contact between groups reduces prejudice when they have equal status, common goals, cooperation and institutional support.",
      "International law addresses discrimination too. The UN’s International Convention on the Elimination of All Forms of Racial Discrimination (1965) commits states to prohibit racial discrimination and covers distinctions based on race, colour, descent, or national or ethnic origin.",
      "Laws alone don’t end discrimination, but they change what is acceptable and give people a way to challenge it."
     ],
     pro:[
      "Robert Merton (1949) showed that prejudice and discrimination can combine in four ways: an unprejudiced non-discriminator, an unprejudiced discriminator (who goes along with others), a prejudiced non-discriminator (held back by law or norms) and a prejudiced discriminator. The typology shows why changing laws and norms can reduce discrimination even before attitudes change.",
      "Measuring implicit bias with reaction-time tests is debated: such tests reveal associations at the group level, but how well individual scores predict behaviour is contested. Field experiments, by contrast, measure behaviour directly.",
      "Institutional racism is identified by examining **processes and outcomes**: who is stopped, hired, lent to or admitted, and through which rules. Disparities alone don’t prove discrimination, so researchers try to rule out other explanations, but they also study how apparently neutral factors (such as neighbourhood, past convictions or inherited wealth) can carry past discrimination forward.",
      "**Antiracism**, in the textbook’s description, focuses on actions and policies that change these processes.",
      "Researchers also study everyday forms of bias, sometimes called **microaggressions**: brief, often unintended slights or assumptions (such as repeatedly asking someone born locally where they are “really” from). Debate continues about how to define and measure them, but studies link frequent experiences of discrimination to stress and poorer health."
     ]
    },
    related:["race-ethnicity","intergroup-relations","w-e-b-du-bois"],
    read:[{book:"soc", where:"Chapter 11, Section 11.3 “Prejudice, Discrimination, and Racism”"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): Prejudice, Discrimination, and Racism", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/11%3A_Race_and_Ethnicity/11.04%3A_Prejudice_Discrimination_and_Racism"},{t:"OpenStax Introduction to Sociology 3e, Chapter 11 summary", url:"https://openstax.org/books/introduction-sociology-3e/pages/11-section-summary"}], checked:"2026-11"},

   {id:"intergroup-relations", title:"Intergroup relations", aka:["pluralism","assimilation","amalgamation","segregation","expulsion","genocide"], tags:["sociology","race","ethnicity"],
    summary:"The range of ways groups relate within a society, from pluralism to genocide, with examples from several regions.",
    levels:{
     starter:[
      "When different groups share a society, their relationships can take many forms:",
      {list:[
        "**Pluralism**: groups keep their own identities with equal standing (a salad bowl).",
        "**Amalgamation**: groups blend into a new shared group (a melting pot).",
        "**Assimilation**: a minority group takes on the dominant culture and loses its own. It can be chosen or forced.",
        "**Segregation**: groups are kept physically apart, by law or in practice.",
        "**Expulsion**: a group is forced to leave.",
        "**Genocide**: the deliberate attempt to destroy a group."
      ]},
      {key:"These are patterns, not stages. Real societies often show several at once."},
      "Thinking of them as a range helps you compare very different situations around the world, from language policy in a multilingual country to the most extreme crimes in history."
     ],
     builder:[
      {table:[
        ["Pattern","Examples"],
        ["Pluralism","Switzerland’s four national languages; Singapore’s four official languages"],
        ["Amalgamation","Ideas of *mestizaje* (mixing) in national identity in parts of Latin America"],
        ["Assimilation (forced)","Canada’s residential schools; Australia’s Stolen Generations"],
        ["Segregation (de jure)","Apartheid South Africa, 1948–1994; US segregation laws until the 1950s–60s"],
        ["Expulsion","The Trail of Tears (1830s); the expulsion of Asians from Uganda (1972)"],
        ["Genocide","The Holocaust; the 1994 genocide against the Tutsi in Rwanda; Srebrenica (1995)"]
      ]},
      "**De jure** segregation is required by law; **de facto** segregation happens without laws, through housing markets, income and choices shaped by history. Residential segregation is found in cities on every continent.",
      "Assimilation looks very different when chosen (a migrant family adopting a new language over generations) and when forced (children removed from families and forbidden their language). Canada’s Truth and Reconciliation Commission described its residential school system as cultural genocide.",
      "Several patterns can exist in one country at the same time: official pluralism in language policy, voluntary assimilation among some migrant families, and de facto segregation in housing, for example. Groups may also want different things: some seek recognition as distinct peoples, others full integration.",
      "Researchers also study how groups recover after conflict, through truth commissions, reparations, education and power-sharing arrangements."
     ],
     pro:[
      "Classic US assimilation theory (Robert Park’s race relations cycle in the 1920s) predicted a one-way path from contact to assimilation. Later research proposed **segmented assimilation** (Alejandro Portes and Min Zhou): children of migrants may assimilate upward, downward, or keep strong ethnic ties as a resource, depending on context.",
      "**Multiculturalism** policies (Canada adopted an official policy in 1971) aim at a form of pluralism; debates continue in many countries about how to balance shared civic identity and group recognition. Sociology describes these approaches and their effects; which is best is a political question.",
      "The legal definition of genocide in the 1948 UN Genocide Convention requires intent to destroy, in whole or in part, a national, ethnical, racial or religious group. Whether particular events meet that definition is decided by courts and debated by historians.",
      {warn:"Use care and accuracy with these examples. Survivors and descendants are part of today’s societies, and terms such as genocide have specific legal meanings."},
      "Migration research shows that how newcomers are received (government policy, labour markets, and the existing ethnic community) strongly shapes which pattern emerges, more than the newcomers’ own preferences alone.",
      "Pluralist arrangements can include federalism, protected language rights or guaranteed representation for groups; each brings its own debates."
     ]
    },
    related:["race-ethnicity","prejudice-discrimination","w-e-b-du-bois"],
    read:[{book:"soc", where:"Chapter 11, Section 11.4 “Intergroup Relationships”"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): Intergroup Relationships", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/11%3A_Race_and_Ethnicity/11.05%3A_Intergroup_Relationships"}], checked:"2026-11"},

   {id:"sex-gender", title:"Sex, gender and gender identity", aka:["gender roles","gender identity","gender expression","intersex","transgender","doing gender"], tags:["sociology","gender"],
    summary:"The difference between sex and gender, gender identity and expression, and how gender is learned and done.",
    levels:{
     starter:[
      "**Sex** refers to bodies: chromosomes, hormones and anatomy. **Gender** refers to the roles, behaviours and expectations a society links to being a woman or a man.",
      "The World Health Organization describes gender as the characteristics of women, men, girls and boys that are socially constructed, and notes that gender varies from society to society and can change over time.",
      {list:[
        "**Gender identity**: a person’s deeply held sense of their own gender.",
        "**Gender expression**: how someone presents gender outwardly.",
        "**Cisgender**: gender identity matches the sex assigned at birth. **Transgender**: it differs. **Nonbinary**: not exclusively woman or man.",
        "**Intersex**: born with sex characteristics that don’t fit typical definitions of female or male."
      ]},
      {key:"Bodies, identities, expression and attraction are separate dimensions."}
     ],
     builder:[
      "**Gender roles** vary: George Murdock’s cross-cultural survey (1954) found every society divided some work by gender, but which tasks went to whom varied. Some societies recognise more than two genders, such as *fa’afafine* in Samoa, and courts in Nepal (2007) and India (2014) recognised a legal third gender.",
      "**Gender socialization** happens through family, school, peers and media: toys, chores, praise, teasing and images.",
      "**Doing gender** (Candace West and Don Zimmerman, 1987) means gender is an ongoing accomplishment in interaction. People know they will be held **accountable** to gender expectations, which is why the same behaviour can be praised in one person and criticised in another.",
      "The textbook notes that in 2019 the WHO renamed “gender identity disorder” as “gender incongruence” and moved it out of the mental disorders category to sexual health (in ICD-11), and that not all transgender people experience gender dysphoria.",
      "Gender expectations change. In many countries fathers now do far more hands-on childcare than their grandfathers did, women have entered occupations once closed to them, and laws that once barred married women from some jobs have been repealed. These shifts show gender roles responding to economic change, education, law and social movements.",
      "Researchers also study how gender shapes **interaction**: who speaks and is interrupted in meetings, who is asked to take notes, whose expertise is assumed."
     ],
     pro:[
      "Judith Butler’s *Gender Trouble* (1990) described gender as **performative**: identities are produced through repeated acts rather than expressing a fixed inner essence. West and Zimmerman’s interactionist account and Butler’s philosophical one overlap but come from different traditions.",
      "R. W. Connell’s concept of **hegemonic masculinity** describes the culturally dominant form of masculinity in a setting and how it ranks other masculinities and femininities below it.",
      "Terminology and legal recognition vary and change quickly. Good practice in research and writing: ask people how they identify; use the terms they use; avoid assuming identity from appearance; and keep gender identity, expression and sexual orientation distinct.",
      {warn:"Public debates on gender policy involve both evidence and values. Sociology can describe social patterns and test claims, but it can’t by itself settle questions of what laws should be."},
      "Sociologists distinguish **gender as structure** from gender as identity or interaction. Barbara Risman, for example, describes gender as a social structure operating at three levels: individual (identities, dispositions), interactional (expectations in encounters) and institutional (rules, laws, organisations). Change at one level doesn’t automatically produce change at the others, which helps explain why some inequalities persist after laws change.",
      "Research on gender is now global: studies from Africa, Asia, Latin America and the Pacific challenge models built mainly on Western cases."
     ]
    },
    related:["gender-stratification","sexuality","socialization","feminist-theory"],
    read:[{book:"soc", where:"Chapter 12, Section 12.1 “Sex, Gender, Identity, and Expression” and Section 12.2 “Gender and Gender Inequality”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 12.1 Sex, Gender, Identity, and Expression", url:"https://openstax.org/books/introduction-sociology-3e/pages/12-1-sex-gender-identity-and-expression"},{t:"World Health Organization: Gender and health", url:"https://www.who.int/health-topics/gender"}], checked:"2026-11"},

   {id:"gender-stratification", title:"Gender stratification", aka:["gender gap","gender pay gap","glass ceiling","unpaid care work","patriarchy","women in parliament"], tags:["sociology","gender","inequality"],
    summary:"How access to work, pay, care and power is organised by gender, with current sourced figures.",
    levels:{
     starter:[
      "Gender stratification is how access to resources, power and respect is organised by gender. A society where men hold most power and men’s contributions are valued more is called **patriarchal**.",
      "Current figures from international sources:",
      {list:[
        "The World Economic Forum’s *Global Gender Gap Report 2026* says the global gap is **69.2%** closed and parity is about **120 years** away.",
        "Women held **27.5%** of national parliamentary seats on 1 January 2026 (Inter-Parliamentary Union).",
        "Women and girls spend **more than 2.5 times** as many hours a day on unpaid care work as men (UN Women, 2024)."
      ]},
      {key:"Gaps are smallest in education and health and largest in political power."},
      "Gender stratification isn’t only about women: expectations about masculinity shape men’s lives and health too."
     ],
     builder:[
      {table:[
        ["WEF 2026 subindex","Share of gap closed"],
        ["Educational attainment","96.9%"],
        ["Health and survival","96.2%"],
        ["Economic participation and opportunity","61.7%"],
        ["Political empowerment","22.1%"]
      ]},
      "The ILO (2023) estimated that for each dollar of labour income men earn worldwide, women earn 51 cents, driven both by lower employment among women and lower average earnings for those employed.",
      "The **raw pay gap** compares median earnings of all women and all men: (men’s − women’s) ÷ men’s. It differs from **unequal pay for equal work**. Part of the raw gap reflects occupation, hours and experience, but those factors are shaped by norms (care work is lower-paid; women do more unpaid care), and an “unexplained” part often remains.",
      "Other patterns: **occupational segregation**, the **glass ceiling**, and earnings drops for mothers that many studies find are not matched for fathers. Some countries use quotas; Rwanda has had a majority of women in its lower house since 2008.",
      "Political representation varies widely between countries. Some use legal or party **quotas** for candidates or seats; research finds these can raise women’s representation quickly, though effects depend on how they are designed and enforced. Rwanda’s majority of women in its lower house shows how far quotas and post-conflict institution-building can change representation."
     ],
     pro:[
      "Decomposition methods (such as Oaxaca–Blinder) split a pay gap into a part explained by measured characteristics and an unexplained remainder. The unexplained part is not automatically discrimination (some factors are unmeasured), and the explained part is not automatically fair (if women are steered into lower-paid jobs).",
      "Time-use surveys are the main source on unpaid work; definitions (whether supervision of children counts, for example) affect the results.",
      "Gender norms also have costs for men: in most countries men have lower life expectancy and higher suicide rates, and in many countries boys now leave education with lower qualifications than girls. Analyses that ignore these patterns, or that treat them as cancelling out women’s disadvantages, both miss the point that gender norms shape everyone.",
      {tip:"Always cite gender statistics with source and year: the WEF index, IPU data and ILO estimates are updated regularly."},
      "The ILO’s labour-income measure combines several gaps at once: whether people are employed, how many hours they work and what they earn per hour. That makes it a good summary of economic inequality but means it can’t, on its own, tell you which part comes from which cause. For that, researchers turn to separate statistics on employment, hours and hourly pay."
     ]
    },
    related:["sex-gender","sexuality","social-stratification","feminist-theory"],
    read:[{book:"soc", where:"Chapter 12, Section 12.2 “Gender and Gender Inequality”"}],
    sources:[{t:"World Economic Forum: Global Gender Gap Report 2026 (digest)", url:"https://www.weforum.org/publications/global-gender-gap-report-2026/digest/"},{t:"IPU: Women’s representation in parliament sees sluggish gains (March 2026)", url:"https://www.ipu.org/news/press-releases/2026-03/womens-representation-in-parliament-sees-sluggish-gains"},{t:"ILO: Employment-related gender gaps greater than previously thought (2023)", url:"https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_869930/lang--en/index.htm"},{t:"UN Women: Care, a critical investment for gender equality (October 2024)", url:"https://www.unwomen.org/en/news-stories/statement/2024/10/care-a-critical-investment-for-gender-equality-and-the-rights-of-women-and-girls"}], checked:"2026-11"},

   {id:"sexuality", title:"Sexuality and sexual orientation", aka:["sexual orientation","heteronormativity","queer theory","sexual double standard"], tags:["sociology","gender","sexuality"],
    summary:"How sociologists study sexual attitudes and practices, sexual orientation, and the main perspectives.",
    levels:{
     starter:[
      "Sociologists study **sexuality** as attitudes and practices, not biology. These vary widely between societies and over time.",
      "**Sexual orientation** is about who a person is emotionally and sexually attracted to. Terms include heterosexual, gay, lesbian, bisexual, asexual and pansexual; people may use other words for themselves. The American Psychological Association recommends saying “sexual orientation”, not “sexual preference”, and notes that orientation itself is not a choice.",
      "**Heteronormativity** is the assumption that heterosexuality is the default.",
      {key:"Orientation is a separate dimension from gender identity. Use the words people use for themselves."},
      "Sociologists study how societies regulate sexuality through laws, religion, schooling, media and family expectations, and how these rules change over time.",
      "Sexual orientation and gender identity are separate: a transgender person can have any orientation, as can a cisgender person."
     ],
     builder:[
      "Attitudes and laws vary greatly. In 1990 the World Health Organization removed homosexuality from its classification of diseases. Today some countries recognise same-sex marriage while others criminalise same-sex relationships.",
      {table:[
        ["Perspective","Focus"],
        ["Functionalist","Regulating sexuality as a function of the family (Talcott Parsons)"],
        ["Conflict","Power: who sets sexual norms and whose interests they serve"],
        ["Interactionist","Meanings and labels attached to sexuality and orientation"],
        ["Queer theory","Questioning fixed categories and how “normal” is defined"]
      ]},
      "Ira Reiss (1960) described a **sexual double standard**: judging the same sexual behaviour differently for women and men.",
      "The textbook reports CDC findings that young people facing high levels of social rejection because of their sexual orientation are at much higher risk of depression and suicide attempts, one reason researchers study acceptance and stigma.",
      "Social attitudes toward sexuality have shifted rapidly in some countries and much less in others, and they differ within countries by age, religion and region. Surveys such as the World Values Survey track these attitudes across many countries over decades.",
      "**Sex education** is an example of how societies regulate sexuality: the textbook describes debates in the United States between abstinence-only and comprehensive programmes.",
      "Research ethics matter especially here: privacy and safety come first when people share information about their sexuality."
     ],
     pro:[
      "Survey measurement is tricky: identity, attraction and behaviour are distinct and don’t always align, and willingness to disclose depends on how safe people feel. Estimates of the share of people in sexual minorities therefore vary with question wording and social climate.",
      "Research on **minority stress** links stigma, discrimination and concealment to health differences among sexual and gender minorities, which is why legal and social climates are studied as health factors.",
      "Queer theory, drawing on Michel Foucault’s *History of Sexuality* and Judith Butler, examines how categories of sexuality were historically produced, for instance how “homosexual” emerged as a type of person in 19th-century medicine.",
      {warn:"Keep research findings separate from political advocacy. Describing laws and their measured effects is research; deciding what laws should be is a matter of values and politics."},
      "Functionalist approaches emphasise the family’s role in regulating sexuality and reproduction; critics respond that they treat one family form as the norm. Conflict and feminist approaches examine how control over sexuality has been tied to power, property and inheritance, and how double standards control women’s sexuality more than men’s.",
      "Comparative studies link more accepting legal and social climates with better measured health and wellbeing among sexual minorities, though causation is debated."
     ]
    },
    related:["sex-gender","gender-stratification","feminist-theory"],
    read:[{book:"soc", where:"Chapter 12, Section 12.3 “Sexuality” and Section 12.1 (terms for sexual orientation)"}],
    sources:[{t:"APA Style: Sexual orientation (bias-free language)", url:"https://apastyle.apa.org/style-grammar-guidelines/bias-free-language/sexual-orientation"},{t:"Introductory Sociology 3e (LibreTexts mirror): Sexuality", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/12%3A_Gender_Sex_and_Sexuality/12.04%3A_Sexuality"}], checked:"2026-11"},

   {id:"w-e-b-du-bois", title:"W. E. B. Du Bois", aka:["Du Bois","double consciousness","The Philadelphia Negro","The Souls of Black Folk","color line"], tags:["sociology","thinker","race"],
    summary:"Pioneer of empirical sociology and of the sociology of race; author of The Philadelphia Negro and The Souls of Black Folk.",
    levels:{
     starter:[
      "William Edward Burghardt Du Bois (1868–1963) was an American sociologist, historian and civil rights leader. Born in Great Barrington, Massachusetts, he earned a PhD from Harvard in 1895, the first African American to do so.",
      "His big idea was that racial inequality comes from **social conditions**, not from biology, and that this could be shown with careful evidence. His study *The Philadelphia Negro* (1899) used thousands of house-to-house interviews to document the lives of Black residents of one city.",
      "In *The Souls of Black Folk* (1903) he described **double consciousness**: “this sense of always looking at one’s self through the eyes of others”. He also wrote that “the problem of the Twentieth Century is the problem of the color-line.”",
      {key:"Du Bois combined rigorous research with a lifelong fight for equality."}
     ],
     builder:[
      {table:[
        ["Year","Work or role"],
        ["1897","“Strivings of the Negro People” in *The Atlantic Monthly*, first use of double consciousness"],
        ["1899","*The Philadelphia Negro*"],
        ["1903","*The Souls of Black Folk*"],
        ["1905","Leads the Niagara Movement for full civil rights"],
        ["1909–1910","Helps found the NAACP; edits its magazine *The Crisis* from 1910"],
        ["1935","*Black Reconstruction in America*"]
      ]},
      "At Atlanta University he directed a long series of empirical studies of Black life in the US South. The textbook credits him with pioneering rigorous empirical methods in sociology and offering evidence against the pseudoscience of biological racism.",
      "Sociologists use his ideas today in research on race and identity, in studies of how marginalised groups experience being judged through dominant eyes, and as an early model of community-based, data-driven research.",
      "*The Philadelphia Negro* combined house-to-house interviews, census data, maps and historical analysis of Philadelphia’s Seventh Ward. Du Bois documented employment, housing, health, family life and community institutions, and argued that problems such as unemployment and poor health reflected discrimination and economic exclusion. It is now regarded as one of the first major empirical community studies in American sociology.",
      "In *Souls* he also used the image of the **veil**: a barrier separating Black and white Americans that let Black Americans see white society while remaining unseen and misjudged by it."
     ],
     pro:[
      "For decades mainstream (white-led) American sociology marginalised Du Bois’s work, and histories of the discipline credited the Chicago school with methods he had used earlier. Since the 2000s scholars have argued for recognising him, and the Atlanta studies, as foundational.",
      "Debates and critiques: his 1903 essay on the “Talented Tenth” argued that an educated Black elite should lead, which critics saw as elitist (he later revised his view). Scholars debate how central double consciousness was to his thought: it appears mainly in the 1897 article and *Souls*. The historian Darlene Clark Hine argued that it overlooked Black women’s experience, a gap later addressed by Black feminist and intersectional thought.",
      "A Pan-Africanist from the 1900 Pan-African Conference in London onward, in later life he turned increasingly toward socialism, which made him a target during the US anti-communist era. He moved to Ghana in 1961, became a Ghanaian citizen in 1963, and died there in 1963.",
      "His legacy spans sociology, history, political thought and the civil rights movement.",
      "Sociologist Aldon Morris argued in *The Scholar Denied* (2015) that Du Bois and his Atlanta colleagues built one of the first scientific schools of sociology in the United States, and that racism explains why this was overlooked.",
      "He also helped organise several Pan-African Congresses in the early twentieth century."
     ]
    },
    related:["race-ethnicity","prejudice-discrimination","founders-of-sociology","harriet-martineau"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology” (W. E. B. Du Bois)"}],
    sources:[{t:"Stanford Encyclopedia of Philosophy: Double Consciousness", url:"https://plato.stanford.edu/archives/spr2022/entries/double-consciousness/"},{t:"Documenting the American South (UNC): W. E. B. Du Bois biography", url:"https://www.docsouth.unc.edu/church/duboissouls/bio.html"},{t:"Introductory Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"}], checked:"2026-11"},

   {id:"harriet-martineau", title:"Harriet Martineau", aka:["Martineau","Society in America","How to Observe Morals and Manners","translator of Comte"], tags:["sociology","thinker","gender"],
    summary:"English writer and early social theorist who studied institutions, slavery and women’s position, and brought Comte’s sociology to English readers.",
    levels:{
     starter:[
      "Harriet Martineau (1802–1876) was an English writer, born in Norwich, often called one of the first women sociologists. She was deaf from her youth and earned her living by writing.",
      "Her big idea was that you can study a society **systematically**: look at its institutions (religion, family, government, work) and compare what it claims to believe with how it actually treats people.",
      "After travelling in the United States (1834–1836), she wrote *Society in America* (1837), criticising slavery and the denial of rights to women in a nation that claimed all are created equal. She also translated and condensed Auguste Comte’s work on positive philosophy into English (1853), introducing sociology to many English-speaking readers.",
      {key:"Martineau compared a society’s ideals with its practices, a core move of sociology ever since."}
     ],
     builder:[
      {table:[
        ["Year","Work"],
        ["1832–1834","Stories explaining political economy to general readers, later known as *Illustrations of Political Economy*"],
        ["1837","*Society in America*"],
        ["1838","*How to Observe Morals and Manners*, and *Retrospect of Western Travel*"],
        ["1853","*The Positive Philosophy of Auguste Comte*, her two-volume translation and condensation"]
      ]},
      "*How to Observe Morals and Manners* is an early book on social research method. It warns travellers against generalising from a few individuals and tells them to study institutions and records (religion, domestic life, ideas of liberty, progress) as evidence of a society’s morals.",
      "The textbook highlights her systematic international comparisons of social institutions and her analysis of economics, class, religion, suicide, government and women’s rights. She was an abolitionist and a campaigner for women’s education and rights.",
      "Sociologists today cite her as an early practitioner of comparative, institution-focused research and of what we would now call the gap between stated values and real practice.",
      "In *Society in America* she tested the country against its own founding principles. She noted that a nation which declared all people equal held millions in slavery and denied women political rights, and she criticised conditions for workers. Her method of judging a society by its own stated ideals remains a standard move in sociology."
     ],
     pro:[
      "Martineau was widely read in her time as a journalist and popular writer, but, like many women intellectuals, she was largely left out of the discipline’s founding story. Feminist sociologists from the 1970s onward argued for including her among the founders, alongside Comte, Marx, Durkheim and Weber.",
      "**Critiques.** Her early stories popularised the free-market political economy of her day, including ideas critics saw as harsh toward the poor. By modern standards her travel-based method was unsystematic: she relied on her own observations and contacts rather than sampling. Some scholars also caution against presenting her mainly as Comte’s translator, which can overshadow her own work.",
      "Her legacy includes attention to women’s position as a measure of a society’s progress, comparative method, and writing for a broad public, which is often cited as an early form of public sociology.",
      "Her work also reached beyond the study of single nations: she wrote on Ireland, on Egypt and the Middle East after travelling there, and on British rule in India, though her views on empire reflected many assumptions of her time and are read critically today.",
      "Modern scholars especially value *How to Observe Morals and Manners* for its attention to the observer’s own biases: she argued that observers need sympathy and must guard against judging other societies by their own customs, an early statement of the problem of ethnocentrism."
     ]
    },
    related:["founders-of-sociology","gender-stratification","w-e-b-du-bois"],
    read:[{book:"soc", where:"Chapter 1, Section 1.2 “The History of Sociology” (Harriet Martineau)"}],
    sources:[{t:"Introductory Sociology 3e (LibreTexts mirror): The History of Sociology", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/01%3A_An_Introduction_to_Sociology/1.03%3A_The_History_of_Sociology"},{t:"Project Gutenberg: How to Observe: Morals and Manners (1838)", url:"https://gutenberg.org/cache/epub/33944/pg33944-images.html"},{t:"Encyclopedia.com: Harriet Martineau", url:"https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/harriet-martineau"}], checked:"2026-11"}
  ],
  terms:[
   {id:"deviance", term:"Deviance", def:"Breaking a social norm, from a minor custom to a law. What counts as deviant depends on the society, the setting and the audience.", codex:"deviance"},
   {id:"crime", term:"Crime", def:"Behaviour that breaks a formal law and can be punished by the state. Crime is one part of deviance.", codex:"deviance"},
   {id:"social-control", term:"Social control", def:"The ways a group regulates and enforces its norms, through rewards and punishments both informal (a smile, a stare) and formal (a fine, a prize).", codex:"social-control"},
   {id:"anomie", term:"Anomie", def:"Durkheim’s word for normlessness: a state where society’s rules no longer guide people, often during rapid change.", codex:"theories-of-deviance"},
   {id:"strain-theory", term:"Strain theory", def:"Robert Merton’s theory (1938) that deviance arises when society promotes goals, like wealth, but blocks the legitimate means to reach them.", codex:"theories-of-deviance"},
   {id:"social-disorganization", term:"Social disorganization theory", def:"The Chicago school idea that crime is more likely where poverty and population turnover weaken community ties and informal control.", codex:"theories-of-deviance"},
   {id:"control-theory", term:"Control theory", def:"Travis Hirschi’s theory (1969) that bonds of attachment, commitment, involvement and belief keep people from deviance.", codex:"theories-of-deviance"},
   {id:"white-collar-crime", term:"White-collar crime", def:"Crime committed by people in business or professional settings, such as fraud, embezzlement or illegal pollution by companies (corporate crime).", codex:"theories-of-deviance"},
   {id:"differential-association", term:"Differential association", def:"Edwin Sutherland’s theory that deviance is learned from close associates who model it and pass on attitudes that favour it.", codex:"theories-of-deviance"},
   {id:"labeling-theory", term:"Labeling theory", def:"The idea that reactions to an act, and the labels people attach, shape deviance more than the act itself, and can create a deviant identity.", codex:"labeling-theory"},
   {id:"primary-deviance", term:"Primary deviance", def:"A rule-breaking act that doesn’t change how the person sees themselves or how others treat them (Edwin Lemert).", codex:"labeling-theory"},
   {id:"secondary-deviance", term:"Secondary deviance", def:"Deviance that follows when a label sticks and the person adopts a deviant identity (Edwin Lemert).", codex:"labeling-theory"},
   {id:"stigma", term:"Stigma", def:"A mark of disgrace that discredits a person in others’ eyes and spoils their social identity (Erving Goffman, 1963).", codex:"labeling-theory"},
   {id:"dark-figure-of-crime", term:"Dark figure of crime", def:"Crime that happens but is never reported or recorded, so it doesn’t appear in police statistics.", codex:"crime-statistics"},
   {id:"stratification", term:"Social stratification", def:"A society’s ranking of people into layers based on factors like wealth, income, education, occupation and power.", codex:"social-stratification"},
   {id:"income", term:"Income", def:"Money received over a period of time, such as wages, salary, pensions, rent or dividends. A flow, like water from a tap.", codex:"social-stratification"},
   {id:"wealth", term:"Wealth", def:"The net value of everything someone owns minus what they owe. A stock, like the water already in a bath.", codex:"social-stratification"},
   {id:"caste-system", term:"Caste system", def:"A closed stratification system in which position is fixed at birth, marriage is within the group and occupation is often inherited.", codex:"class-caste"},
   {id:"class-system", term:"Class system", def:"A more open stratification system where position depends on both birth and achievement, and movement between layers is possible.", codex:"class-caste"},
   {id:"meritocracy", term:"Meritocracy", def:"A hypothetical system where position depends only on personal effort and merit. No real society is a pure meritocracy.", codex:"class-caste"},
   {id:"social-class", term:"Social class", def:"A group of people with similar wealth, income, education and occupation, who tend to share life chances and lifestyles.", codex:"class-caste"},
   {id:"status-consistency", term:"Status consistency", def:"How evenly a person ranks across factors like education, occupation and income. A migrant doctor driving a taxi has low status consistency.", codex:"class-caste"},
   {id:"conspicuous-consumption", term:"Conspicuous consumption", def:"Buying and displaying goods to signal social status (Thorstein Veblen, 1899).", codex:"social-stratification"},
   {id:"social-mobility", term:"Social mobility", def:"Movement of people up or down between positions in a stratification system.", codex:"social-mobility"},
   {id:"intergenerational-mobility", term:"Intergenerational mobility", def:"A change in social position between generations, for example between parents and their children.", codex:"social-mobility"},
   {id:"intragenerational-mobility", term:"Intragenerational mobility", def:"A change in social position within one person’s lifetime.", codex:"social-mobility"},
   {id:"structural-mobility", term:"Structural mobility", def:"Movement of whole groups up or down because society itself changes, such as industrialisation creating new kinds of jobs.", codex:"social-mobility"},
   {id:"davis-moore", term:"Davis–Moore thesis", def:"Kingsley Davis and Wilbert Moore’s functionalist argument (1945) that unequal rewards are needed to attract talented people to the most important roles.", codex:"social-stratification"},
   {id:"bourgeoisie", term:"Bourgeoisie", def:"In Marx’s theory, the class that owns the means of production: factories, land and capital.", codex:"social-stratification"},
   {id:"proletariat", term:"Proletariat", def:"In Marx’s theory, the working class, who own no means of production and must sell their labour to live.", codex:"social-stratification"},
   {id:"gini-coefficient", term:"Gini coefficient", def:"A measure of inequality from 0 (everyone has the same) to 1 (one person has everything), often shown as 0–100.", codex:"measuring-inequality"},
   {id:"global-stratification", term:"Global stratification", def:"The unequal distribution of wealth, power and opportunity between nations and among people across the world.", codex:"global-stratification"},
   {id:"human-development-index", term:"Human Development Index (HDI)", def:"UNDP’s summary measure combining life expectancy, education and income per person into a number between 0 and 1.", codex:"global-stratification"},
   {id:"international-poverty-line", term:"International poverty line", def:"The World Bank’s line for extreme poverty: $3.00 per person per day in 2021 PPP dollars since June 2025.", codex:"global-stratification"},
   {id:"purchasing-power-parity", term:"Purchasing power parity (PPP)", def:"An adjustment that converts money between countries according to what it can buy locally, not market exchange rates.", codex:"measuring-inequality"},
   {id:"absolute-poverty", term:"Absolute poverty", def:"Lacking basic necessities such as enough food, clean water and shelter, measured against a fixed line. The World Bank calls this extreme poverty.", codex:"measuring-inequality"},
   {id:"relative-poverty", term:"Relative poverty", def:"Having much less than most people in your own society, measured against a line that moves with that society’s living standards.", codex:"measuring-inequality"},
   {id:"modernization-theory", term:"Modernization theory", def:"The theory that poorer countries can develop by industrialising and adopting the institutions, technology and attitudes of richer ones.", codex:"theories-global-inequality"},
   {id:"dependency-theory", term:"Dependency theory", def:"The theory that poorer countries were made and kept poor by exploitative ties to rich countries, rooted in colonialism.", codex:"theories-global-inequality"},
   {id:"world-systems-theory", term:"World-systems theory", def:"Immanuel Wallerstein’s view of one capitalist world economy divided into core, semi-peripheral and peripheral countries.", codex:"theories-global-inequality"},
   {id:"race", term:"Race", def:"A socially constructed way of grouping people, usually by perceived physical features, that has real social consequences but doesn’t match human biological variation.", codex:"race-ethnicity"},
   {id:"ethnicity", term:"Ethnicity", def:"Shared culture, such as language, religion, customs, ancestry and a sense of common history.", codex:"race-ethnicity"},
   {id:"minority-group", term:"Minority group", def:"In sociology, a group singled out for unequal treatment and with less power, whatever its size (Louis Wirth, 1945).", codex:"race-ethnicity"},
   {id:"dominant-group", term:"Dominant group", def:"The group in a society that holds more power and privilege, whether or not it is the numerical majority.", codex:"race-ethnicity"},
   {id:"stereotype", term:"Stereotype", def:"An oversimplified generalisation about a group of people, applied to individuals.", codex:"prejudice-discrimination"},
   {id:"prejudice", term:"Prejudice", def:"Beliefs, feelings and attitudes about a group, often negative and formed without real knowledge: literally, pre-judging.", codex:"prejudice-discrimination"},
   {id:"discrimination", term:"Discrimination", def:"Actions that treat people unequally because of the group they belong to.", codex:"prejudice-discrimination"},
   {id:"racism", term:"Racism", def:"Prejudice and discrimination based on the belief that some races are superior to others, used to justify inequality.", codex:"prejudice-discrimination"},
   {id:"implicit-bias", term:"Implicit bias", def:"Associating stereotypes or attitudes with groups without conscious awareness, which can affect behaviour.", codex:"prejudice-discrimination"},
   {id:"institutional-racism", term:"Institutional racism", def:"Racism built into the rules, routines and structures of institutions, which disadvantages racial groups even without individual intent. Also called systemic or structural racism.", codex:"prejudice-discrimination"},
   {id:"pluralism", term:"Pluralism", def:"A pattern in which groups keep their distinct identities while having equal standing (the “salad bowl”).", codex:"intergroup-relations"},
   {id:"amalgamation", term:"Amalgamation", def:"A pattern in which groups blend to form a new, shared group (the “melting pot”).", codex:"intergroup-relations"},
   {id:"assimilation", term:"Assimilation", def:"A process in which a minority group gives up its own identity and takes on the dominant culture’s. It can be voluntary or forced.", codex:"intergroup-relations"},
   {id:"segregation", term:"Segregation", def:"The physical separation of groups, especially in housing and schooling, either by law (de jure) or in practice (de facto).", codex:"intergroup-relations"},
   {id:"expulsion", term:"Expulsion", def:"When a dominant group forces a subordinate group to leave an area or country.", codex:"intergroup-relations"},
   {id:"genocide", term:"Genocide", def:"The deliberate attempt to destroy, in whole or in part, a national, ethnic, racial or religious group.", codex:"intergroup-relations"},
   {id:"double-consciousness", term:"Double consciousness", def:"W. E. B. Du Bois’s term (1897, 1903) for “always looking at one’s self through the eyes of others”, a divided sense of identity under racism.", codex:"w-e-b-du-bois"},
   {id:"sex", term:"Sex", def:"Biological and physiological characteristics, such as chromosomes, hormones and anatomy, used to classify bodies as female, male or intersex.", codex:"sex-gender"},
   {id:"intersex", term:"Intersex", def:"A general term for people born with sex characteristics (chromosomes, hormones or anatomy) that don’t fit typical definitions of female or male.", codex:"sex-gender"},
   {id:"gender", term:"Gender", def:"The socially constructed roles, behaviours and expectations a society links to being a woman, a man or another gender. It varies across societies and over time.", codex:"sex-gender"},
   {id:"gender-identity", term:"Gender identity", def:"A person’s deeply held internal sense of their own gender, which may or may not match the sex assigned at birth.", codex:"sex-gender"},
   {id:"gender-expression", term:"Gender expression", def:"How a person presents gender outwardly, through clothing, hair, voice and behaviour.", codex:"sex-gender"},
   {id:"cisgender", term:"Cisgender", def:"Describes a person whose gender identity matches the sex they were assigned at birth.", codex:"sex-gender"},
   {id:"transgender", term:"Transgender", def:"Describes a person whose gender identity differs from the sex they were assigned at birth. It says nothing about sexual orientation.", codex:"sex-gender"},
   {id:"nonbinary", term:"Nonbinary", def:"Describes a person whose gender identity is not exclusively woman or man.", codex:"sex-gender"},
   {id:"gender-role", term:"Gender role", def:"The set of behaviours and tasks a society expects from people of a particular gender.", codex:"sex-gender"},
   {id:"gender-socialization", term:"Gender socialization", def:"How people learn their society’s gender roles, mainly through family, school, peers and media.", codex:"sex-gender"},
   {id:"doing-gender", term:"Doing gender", def:"West and Zimmerman’s idea (1987) that gender is something people continually do in everyday interaction, knowing they will be judged against gender expectations.", codex:"sex-gender"},
   {id:"sexual-orientation", term:"Sexual orientation", def:"A person’s emotional and sexual attraction to others, and the identity that may go with it. Separate from gender identity.", codex:"sexuality"},
   {id:"heteronormativity", term:"Heteronormativity", def:"The assumption that heterosexuality is the normal or default orientation.", codex:"sexuality"},
   {id:"patriarchy", term:"Patriarchy", def:"A social system in which men hold more power and men’s contributions are valued more than women’s.", codex:"gender-stratification"},
   {id:"sexism", term:"Sexism", def:"Prejudice and discrimination based on sex or gender, especially beliefs that one sex is superior.", codex:"gender-stratification"},
   {id:"glass-ceiling", term:"Glass ceiling", def:"An invisible barrier that keeps women (and other groups) out of the highest positions in organisations.", codex:"gender-stratification"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u3-q01", lesson:"e2u3-l1", level:1, q:"How do sociologists define deviance?", options:[
     {t:"Breaking a social norm, whether a custom, a moral rule or a law", ok:true, why:"Deviance covers any norm violation, from small customs to laws."},
     {t:"Breaking a criminal law", why:"That’s crime, which is only one part of deviance."},
     {t:"Behaviour that harms other people", why:"Some deviance harms no one, and some harmful acts are seen as normal. The definition is about norms, not harm."},
     {t:"Behaviour caused by mental illness", why:"Deviance is a social definition. It has nothing to do with diagnosing individuals."}
   ]},
   {id:"e2u3-q02", lesson:"e2u3-l1", level:2, q:"Mei’s office expects formal suits; at her friend’s tech start-up, a suit would draw jokes. What does this best illustrate?", options:[
     {t:"Deviance is relative: the same act is judged differently in different settings.", ok:true, why:"Identical behaviour is deviant in one place and conforming in another because the norms differ."},
     {t:"Suits are deviant everywhere.", why:"In Mei’s office a suit is the norm, so it isn’t deviant there."},
     {t:"Jokes are a formal sanction.", why:"Jokes are informal: there’s no official rule or body behind them."},
     {t:"This is secondary deviance.", why:"Secondary deviance involves a label changing someone’s identity, which isn’t described."}
   ]},
   {id:"e2u3-q03", lesson:"e2u3-l1", level:1, q:"Which of these is a **formal negative** sanction?", options:[
     {t:"A fine for dropping litter", ok:true, why:"It’s a punishment (negative) given under an official rule by an official body (formal)."},
     {t:"Friends rolling their eyes at a bad joke", why:"That’s informal: no official rule or body is involved."},
     {t:"An employee-of-the-month award", why:"That’s formal but positive: a reward."},
     {t:"A neighbour thanking you for help", why:"That’s an informal positive sanction."}
   ]},
   {id:"e2u3-q04", lesson:"e2u3-l1", level:2, q:"In Merton’s strain theory, someone who accepts the goal of wealth but reaches it through fraud is showing:", options:[
     {t:"Innovation", ok:true, why:"Innovation means accepting society’s goals but using illegitimate means."},
     {t:"Ritualism", why:"Ritualists give up the goal but keep following the rules."},
     {t:"Retreatism", why:"Retreatists reject both the goals and the means."},
     {t:"Conformity", why:"Conformists accept both the goals and the legitimate means. Fraud isn’t a legitimate means."}
   ]},
   {id:"e2u3-q05", lesson:"e2u3-l1", level:3, q:"A town’s recorded sexual offences doubled in two years, but the national victim survey shows no rise. Police had also changed how they record reports. What is the most reasonable conclusion?", options:[
     {t:"The rise may largely reflect changes in reporting or recording, so the figures can’t be read as a doubling of offences.", ok:true, why:"When recording practice changes and the survey shows no rise, recorded crime is measuring counting as much as crime. The UK ONS reported exactly this kind of effect."},
     {t:"Sexual offences definitely doubled; the survey must be wrong.", why:"Victim surveys capture unreported crime, so a mismatch is a reason for caution, not for dismissing the survey."},
     {t:"Recorded crime and surveys always agree, so there must be a calculation error.", why:"They often diverge because they measure different things in different ways."},
     {t:"The rise proves the police are failing.", why:"Better recording or more willingness to report can raise figures; it may even reflect improvement."}
   ]},
   {id:"e2u3-q06", lesson:"e2u3-l1", level:2, q:"Kenji, 16, is caught once with stolen sweets. Teachers start calling him “the thief”, and he begins hanging out with older boys who steal. According to labeling theory, his later thefts are best described as:", options:[
     {t:"Secondary deviance", ok:true, why:"Deviance that follows when a label sticks and shapes identity is secondary deviance."},
     {t:"Primary deviance", why:"Primary deviance was the first act, before the label changed his self-image."},
     {t:"Anomie", why:"Anomie is society-wide normlessness, not an individual’s response to a label."},
     {t:"Ritualism", why:"Ritualism is Merton’s term for giving up goals but keeping rules, which doesn’t fit."}
   ]},
   {id:"e2u3-q07", lesson:"e2u3-l1", level:1, q:"Which theory says people learn deviance from the people they spend time with?", options:[
     {t:"Differential association (Sutherland)", ok:true, why:"Sutherland argued deviance is learned in close groups, like any other behaviour."},
     {t:"Strain theory (Merton)", why:"Strain theory is about gaps between goals and means."},
     {t:"Control theory (Hirschi)", why:"Control theory is about social bonds that keep people from deviance."},
     {t:"The Davis–Moore thesis", why:"That’s a theory of stratification, not deviance."}
   ]},
   {id:"e2u3-q08", lesson:"e2u3-l1", level:3, q:"A company’s directors knowingly dump toxic waste and receive a regulatory fine, while a teenager who steals a phone receives a criminal record. Which perspective most directly asks why these are treated so differently?", options:[
     {t:"Conflict theory", ok:true, why:"Conflict theorists examine how power shapes which harms are criminalised and how harshly they are punished."},
     {t:"Functionalism", why:"Functionalists ask what deviance does for society, not mainly why the powerful are treated differently."},
     {t:"Differential association", why:"That explains how deviance is learned, not how enforcement differs by power."},
     {t:"Control theory", why:"Control theory explains conformity through bonds; it doesn’t focus on unequal enforcement."}
   ]},
   {id:"e2u3-q09", lesson:"e2u3-l1", level:2, q:"Town A has 300 robberies and 150,000 people; Town B has 120 robberies and 40,000 people. Which statement is correct?", options:[
     {t:"Town B has the higher robbery rate (300 vs 200 per 100,000).", ok:true, why:"A: 300 ÷ 150,000 × 100,000 = 200. B: 120 ÷ 40,000 × 100,000 = 300. B has fewer robberies but a higher rate."},
     {t:"Town A has the higher rate because it has more robberies.", why:"More robberies in a bigger town doesn’t mean a higher rate. Compare per 100,000 people."},
     {t:"The rates are equal.", why:"Work them out: 200 per 100,000 for A and 300 for B."},
     {t:"Rates can’t be compared between towns of different sizes.", why:"That’s exactly what rates are for."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u3-q10", lesson:"e2u3-l2", level:1, q:"What is the difference between income and wealth?", options:[
     {t:"Income is money coming in over time; wealth is the net value of what you own minus what you owe.", ok:true, why:"Income is a flow; wealth is a stock at one moment."},
     {t:"They are the same thing measured in different currencies.", why:"They measure different things: flow versus stock."},
     {t:"Income includes property; wealth includes only wages.", why:"It’s the other way round: property is part of wealth; wages are income."},
     {t:"Wealth is income after tax.", why:"Income after tax is still income. Wealth is assets minus debts."}
   ]},
   {id:"e2u3-q11", lesson:"e2u3-l2", level:2, q:"Dr Fatima trained as a surgeon abroad and now works as a hospital porter while her qualifications are assessed. Which concept fits best?", options:[
     {t:"Low status consistency", ok:true, why:"Her education ranks high while her occupation and income rank low: an inconsistent status."},
     {t:"A caste system", why:"Nothing suggests her position is fixed by birth."},
     {t:"Upward intergenerational mobility", why:"That compares generations; this is about the mismatch in her own current position."},
     {t:"The Davis–Moore thesis", why:"That’s a theory of why roles are rewarded, not a description of her situation."}
   ]},
   {id:"e2u3-q12", lesson:"e2u3-l2", level:1, q:"Which feature is typical of a caste system?", options:[
     {t:"Position fixed at birth, with marriage expected within the group", ok:true, why:"Closed, ascribed position and endogamy are the core features of caste."},
     {t:"Movement up through education and hard work", why:"That describes a class system’s openness."},
     {t:"Rewards based purely on merit", why:"That describes the ideal of meritocracy."},
     {t:"Marriage across groups is common", why:"Exogamous marriage is a class-system feature."}
   ]},
   {id:"e2u3-q13", lesson:"e2u3-l2", level:2, q:"After a country industrialises, the share of people in office jobs triples within 40 years. Many children of farmers become clerks and managers. What kind of mobility is this mainly?", options:[
     {t:"Structural mobility", ok:true, why:"Whole groups moved up because the economy’s structure changed, creating many more office jobs."},
     {t:"Downward mobility", why:"Moving from farm work into office work here is generally upward."},
     {t:"Intragenerational mobility only", why:"The comparison is mainly between generations, and the cause is structural change."},
     {t:"Proof that the society is a meritocracy", why:"Mass upward movement caused by new jobs says nothing about whether chances are equal."}
   ]},
   {id:"e2u3-q14", lesson:"e2u3-l2", level:3, q:"A politician says: “Surgeons earn far more than care workers because surgery is more important to society.” Which response reflects Tumin’s critique of the Davis–Moore thesis?", options:[
     {t:"Rewards also reflect inherited advantage and who can afford long training, so stratification can block talented people rather than sorting them.", ok:true, why:"Tumin (1953) argued stratification limits the discovery of talent and that ‘importance’ is hard to measure objectively."},
     {t:"Surgeons should earn less than care workers.", why:"Tumin’s critique is analytical, not a pay recommendation."},
     {t:"Davis and Moore were right that inequality always rewards the most important jobs.", why:"That’s the thesis Tumin was criticising."},
     {t:"Pay is decided only by government.", why:"Tumin’s point is about how stratification works, not who sets pay."}
   ]},
   {id:"e2u3-q15", lesson:"e2u3-l2", level:1, q:"In Marx’s theory, the bourgeoisie are:", options:[
     {t:"Those who own the means of production", ok:true, why:"Marx defined classes by their relationship to production; owners are the bourgeoisie."},
     {t:"Workers who sell their labour", why:"That’s the proletariat."},
     {t:"Government officials", why:"Marx’s classes are defined by ownership, not office."},
     {t:"People with high social honour", why:"Social honour is Weber’s ‘status’, a separate dimension."}
   ]},
   {id:"e2u3-q16", lesson:"e2u3-l2", level:2, q:"A village elder has little money but great respect and influence in community decisions. Which thinker’s framework best captures this?", options:[
     {t:"Weber: class, status and party are separate dimensions", ok:true, why:"Low class (economic position) can coexist with high status (honour) and party (power)."},
     {t:"Marx: bourgeoisie and proletariat", why:"A two-class model based on ownership can’t capture honour and influence without wealth."},
     {t:"Davis–Moore: rewards follow importance", why:"Her rewards aren’t monetary, so the thesis doesn’t explain her standing well."},
     {t:"Merton: strain theory", why:"Strain theory is about deviance, not dimensions of rank."}
   ]},
   {id:"e2u3-q17", lesson:"e2u3-l2", level:3, q:"Amara’s grandparents were street vendors; her parents were teachers; Amara is a doctor. A newspaper says this proves “anyone can make it” in her country. What’s the strongest critique?", options:[
     {t:"One family’s upward mobility can’t show how common it is; mobility must be measured across the whole population.", ok:true, why:"Individual stories are real but can be exceptional. Rates of mobility, and whether chances differ by family background, need population data."},
     {t:"Her family experienced downward mobility.", why:"Each generation moved up, so this is upward intergenerational mobility."},
     {t:"Doctors aren’t part of any social class.", why:"Occupation is a key indicator of class."},
     {t:"Mobility between generations isn’t possible in class systems.", why:"Class systems allow mobility; the question is how much and for whom."}
   ]},
   {id:"e2u3-q18", lesson:"e2u3-l2", level:1, q:"An OECD study (2018) compared income and wealth inequality. What did it find?", options:[
     {t:"Wealth was about twice as concentrated as income; the top 10% held on average 52% of household wealth.", ok:true, why:"These are the study’s findings for the OECD countries it covered."},
     {t:"Income was more unequal than wealth.", why:"It found the opposite: wealth is far more concentrated."},
     {t:"Wealth and income were equally unequal.", why:"Wealth concentration was about twice the level of income inequality."},
     {t:"The bottom 60% held most of the wealth.", why:"The least wealthy 60% held a little over 12%."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u3-q19", lesson:"e2u3-l3", level:1, q:"Since June 2025, what is the World Bank’s international (extreme) poverty line?", options:[
     {t:"$3.00 per person per day, in 2021 PPP dollars", ok:true, why:"The June 2025 update set the line at $3.00 using 2021 purchasing power parities."},
     {t:"$1.90 per person per day", why:"That’s an older line (2011 prices), still printed in the textbook."},
     {t:"$2.15 per person per day", why:"That was the line based on 2017 prices; it was replaced in 2025."},
     {t:"$3.00 per household per day at market exchange rates", why:"The line is per person, and in PPP dollars, not exchange rates."}
   ]},
   {id:"e2u3-q20", lesson:"e2u3-l3", level:1, q:"The Human Development Index combines which dimensions?", options:[
     {t:"A long and healthy life, knowledge, and a decent standard of living", ok:true, why:"UNDP measures these with life expectancy, years of schooling and GNI per capita."},
     {t:"Income, wealth and the Gini coefficient", why:"The HDI doesn’t include wealth or inequality measures directly."},
     {t:"Military power, trade and population", why:"None of these are HDI dimensions."},
     {t:"Happiness, freedom and trust", why:"Those appear in other indices, not the HDI."}
   ]},
   {id:"e2u3-q21", lesson:"e2u3-l3", level:2, q:"Using the World Bank thresholds in force from 1 July 2026, a country with GNI per capita of US$12,000 is:", options:[
     {t:"Upper-middle income", ok:true, why:"Upper-middle runs from $4,636 to $14,375."},
     {t:"High income", why:"High income starts above $14,375."},
     {t:"Lower-middle income", why:"Lower-middle tops out at $4,635."},
     {t:"Low income", why:"Low income is $1,175 or less."}
   ]},
   {id:"e2u3-q22", lesson:"e2u3-l3", level:2, q:"Tomás lives in a high-income country. His income is well above $8.30 a day but below 60% of his country’s median, and he can’t afford things most people there consider normal. He is experiencing:", options:[
     {t:"Relative poverty", ok:true, why:"He has much less than most people in his own society: relative poverty."},
     {t:"Absolute (extreme) poverty", why:"He is far above the fixed international line for extreme poverty."},
     {t:"Structural mobility", why:"That’s about whole groups moving between classes."},
     {t:"Status consistency", why:"That concerns how evenly someone ranks across factors, not poverty."}
   ]},
   {id:"e2u3-q23", lesson:"e2u3-l3", level:1, q:"Which theory argues that poorer countries were made poor by colonialism and unequal ties to rich countries?", options:[
     {t:"Dependency theory", ok:true, why:"Dependency theorists such as Frank argued rich countries created and maintain underdevelopment."},
     {t:"Modernization theory", why:"Modernization theory says poorer countries are at an earlier stage and can catch up."},
     {t:"Labeling theory", why:"That’s a theory of deviance."},
     {t:"The Davis–Moore thesis", why:"That’s a functionalist theory of stratification within societies."}
   ]},
   {id:"e2u3-q24", lesson:"e2u3-l3", level:3, q:"An analyst says: “South Korea grew rich through deep involvement in world trade with rich countries.” Which theory does this fact challenge most?", options:[
     {t:"Dependency theory, which predicts that close ties to rich countries keep poorer countries poor", ok:true, why:"Successful growth through trade with the core is hard to square with classic dependency predictions."},
     {t:"Modernization theory, which predicts countries can industrialise", why:"Industrialisation and growth are broadly what modernization theory predicts."},
     {t:"World-systems theory, which says no country can change position", why:"World-systems theory expects that countries can move between positions."},
     {t:"Conflict theory of deviance", why:"That’s about crime and power, not national development."}
   ]},
   {id:"e2u3-q25", lesson:"e2u3-l3", level:1, q:"In world-systems theory, which countries are both exploited by the core and able to exploit the periphery?", options:[
     {t:"Semi-peripheral countries", ok:true, why:"Wallerstein’s semi-periphery sits in between, playing both roles."},
     {t:"Core countries", why:"Core countries dominate the system rather than being exploited."},
     {t:"Peripheral countries", why:"Peripheral countries have little power to exploit others."},
     {t:"Second World countries", why:"That’s a Cold War label, not a world-systems category."}
   ]},
   {id:"e2u3-q26", lesson:"e2u3-l3", level:2, q:"Why does the World Bank express its poverty line in PPP dollars?", options:[
     {t:"To adjust for differences in what money can buy in each country", ok:true, why:"PPP converts according to local prices, so $3.00 means the same purchasing power everywhere."},
     {t:"Because all countries use US dollars", why:"They don’t; PPP is a conversion method for comparing local currencies."},
     {t:"To make poverty look lower", why:"PPP is about accuracy in comparing living standards, not changing the result."},
     {t:"Because exchange rates are always equal to PPP", why:"They often differ a lot, which is why PPP is needed."}
   ]},
   {id:"e2u3-q27", lesson:"e2u3-l3", level:3, q:"A report on a country says: “Its income group moved from low to lower-middle income, so poverty is solved.” What is the main flaw?", options:[
     {t:"Income groups use average GNI per person, which can rise while many people remain below the poverty line.", ok:true, why:"Averages hide distribution: a country can move up a group while many households stay in extreme poverty."},
     {t:"Countries never change income groups.", why:"They can; the classification is updated every 1 July."},
     {t:"The lower-middle group is poorer than the low group.", why:"Lower-middle is the higher of the two."},
     {t:"Income groups are based on HDI values.", why:"They’re based on GNI per capita; HDI is a separate measure."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u3-q28", lesson:"e2u3-l4", level:1, q:"What do sociologists mean when they say race is a social construction?", options:[
     {t:"Racial categories are created by societies and vary across places and times, though they have real effects.", ok:true, why:"The categories are social decisions, not natural boundaries, yet they shape people’s lives."},
     {t:"Race has no effect on people’s lives.", why:"Socially constructed doesn’t mean unreal; race shapes treatment, wealth and health."},
     {t:"Racial categories are fixed by genetics.", why:"Human genetic variation is mostly gradual and greater within groups than between them."},
     {t:"Race and ethnicity mean exactly the same thing.", why:"Ethnicity is about shared culture; race is about perceived physical difference given meaning."}
   ]},
   {id:"e2u3-q29", lesson:"e2u3-l4", level:1, q:"Which is an example of ethnicity rather than race?", options:[
     {t:"Identifying as Kurdish through shared language, customs and history", ok:true, why:"Ethnicity is based on shared culture and history."},
     {t:"Being classified by skin colour on an official form", why:"Classification by perceived physical features is a racial category."},
     {t:"Having a particular blood type", why:"That’s a biological trait, not an ethnic identity."},
     {t:"Being a citizen of a country", why:"Citizenship is a legal status; many ethnic groups can share one nationality."}
   ]},
   {id:"e2u3-q30", lesson:"e2u3-l4", level:2, q:"A hiring manager doesn’t dislike any group but follows a company rule to reject applicants without a local school certificate, which excludes most migrants. Which concept fits best?", options:[
     {t:"Institutional discrimination: a routine rule with unequal effects, regardless of personal feelings", ok:true, why:"The disadvantage comes from the rule, not from individual prejudice."},
     {t:"Prejudice", why:"Prejudice is an attitude; the manager has none here."},
     {t:"A stereotype", why:"No generalised belief about a group is being applied."},
     {t:"Pluralism", why:"Pluralism is a pattern of equal standing between groups, the opposite of this situation."}
   ]},
   {id:"e2u3-q31", lesson:"e2u3-l4", level:1, q:"What is the difference between prejudice and discrimination?", options:[
     {t:"Prejudice is an attitude; discrimination is an action.", ok:true, why:"Feeling or believing something about a group is prejudice; treating people unequally is discrimination."},
     {t:"Prejudice is illegal; discrimination is legal.", why:"Laws usually target discriminatory actions, not attitudes."},
     {t:"They are the same thing.", why:"They often go together but can occur separately."},
     {t:"Discrimination is a belief; prejudice is a law.", why:"Neither is right: prejudice is an attitude, discrimination an action."}
   ]},
   {id:"e2u3-q32", lesson:"e2u3-l4", level:2, q:"Under apartheid, Black South Africans were the majority of the population. Sociologically, they were:", options:[
     {t:"A minority group, because they had less power and faced unequal treatment", ok:true, why:"Minority status in sociology is about power, not numbers."},
     {t:"The dominant group, because they were the majority", why:"A smaller white population held power, making it the dominant group."},
     {t:"Neither, because minority means under 50%", why:"Wirth’s definition is based on unequal treatment, not percentages."},
     {t:"An example of amalgamation", why:"Apartheid enforced separation, the opposite of blending."}
   ]},
   {id:"e2u3-q33", lesson:"e2u3-l4", level:3, q:"Over three generations, a migrant family stops speaking its original language at home and adopts the customs of the majority, by choice. Separately, another state takes Indigenous children to boarding schools and forbids their languages. What do the two cases share, and how do they differ?", options:[
     {t:"Both are assimilation; the first is voluntary and the second is forced.", ok:true, why:"Both involve taking on the dominant culture; consent is the crucial difference."},
     {t:"Both are pluralism.", why:"Pluralism means keeping distinct identities with equal standing, which is lost in both cases."},
     {t:"The first is genocide and the second is amalgamation.", why:"Neither label fits: no group is destroyed in the first, and no new blended group forms in the second."},
     {t:"Both are expulsion.", why:"No one is forced to leave a territory."}
   ]},
   {id:"e2u3-q34", lesson:"e2u3-l4", level:1, q:"Du Bois’s idea of double consciousness describes:", options:[
     {t:"Always looking at oneself through the eyes of others, creating a divided sense of identity under racism", ok:true, why:"These are Du Bois’s own words from 1897 and The Souls of Black Folk (1903)."},
     {t:"Speaking two languages fluently", why:"Bilingualism isn’t what Du Bois meant."},
     {t:"Holding two jobs at once", why:"That’s unrelated."},
     {t:"Being aware of two theoretical perspectives", why:"Double consciousness is about identity under racism, not theory."}
   ]},
   {id:"e2u3-q35", lesson:"e2u3-l4", level:2, q:"Researchers send employers pairs of identical CVs that differ only in a name signalling ethnicity. What is this method best at showing?", options:[
     {t:"Whether discrimination occurs at the stage of being invited to interview", ok:true, why:"Holding everything else equal isolates the effect of the name at the first step of hiring."},
     {t:"Whether applicants from one group have weaker skills", why:"The CVs are identical, so skills are held equal by design."},
     {t:"Whether every employer in the country discriminates", why:"It measures an average among employers studied, not every employer."},
     {t:"How much people are paid after being hired", why:"The method measures callbacks, not later pay."}
   ]},
   {id:"e2u3-q36", lesson:"e2u3-l4", level:3, q:"Which explanation of ethnic inequality comes from the conflict perspective?", options:[
     {t:"Dominant groups benefit from keeping others in low-paid work and protect their advantage through law and custom.", ok:true, why:"Asking who gains from inequality and how power keeps it in place is the conflict lens."},
     {t:"Prejudice strengthens loyalty inside the in-group.", why:"That’s a functionalist observation about what prejudice does for a group."},
     {t:"People learn what race ‘means’ from everyday interactions.", why:"That’s interactionist."},
     {t:"Inequality is a natural result of biological difference.", why:"Sociologists reject this; race isn’t a biological category."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u3-q37", lesson:"e2u3-l5", level:1, q:"What is the difference between sex and gender in sociology?", options:[
     {t:"Sex refers to biological characteristics; gender to socially constructed roles, behaviours and expectations.", ok:true, why:"This is the textbook’s and the WHO’s distinction."},
     {t:"They mean the same thing.", why:"Sociologists separate them because they have different causes and vary differently."},
     {t:"Gender refers to chromosomes; sex to clothing.", why:"That reverses and distorts the definitions."},
     {t:"Sex is about attraction; gender about bodies.", why:"Attraction is sexual orientation; bodies relate to sex."}
   ]},
   {id:"e2u3-q38", lesson:"e2u3-l5", level:2, q:"Lucía was assigned female at birth and knows herself to be a woman. She is attracted to women. Which description is accurate?", options:[
     {t:"She is cisgender, and her attraction to women is part of her sexual orientation, a separate dimension.", ok:true, why:"Her identity matches her assigned sex (cisgender); who she is attracted to is her orientation, whatever word she uses for it (lesbian, gay, bisexual or another). The two dimensions are separate."},
     {t:"She is transgender because she is attracted to women.", why:"Transgender is about gender identity, not attraction."},
     {t:"Her gender identity is lesbian.", why:"Lesbian describes sexual orientation, not gender identity."},
     {t:"She is intersex.", why:"Intersex refers to sex characteristics, which aren’t described here."}
   ]},
   {id:"e2u3-q39", lesson:"e2u3-l5", level:1, q:"According to the WEF Global Gender Gap Report 2026, where is the global gender gap largest?", options:[
     {t:"Political empowerment (about 22% closed)", ok:true, why:"Political empowerment has by far the lowest score of the four subindexes."},
     {t:"Educational attainment", why:"Education is close to parity, at about 97% closed."},
     {t:"Health and survival", why:"Health and survival is about 96% closed."},
     {t:"Economic participation", why:"It’s a large gap (about 62% closed) but smaller than politics."}
   ]},
   {id:"e2u3-q40", lesson:"e2u3-l5", level:2, q:"Men’s median monthly pay is 4,000 and women’s is 3,400. What is the gender pay gap as a percentage of men’s pay?", options:[
     {t:"15%", ok:true, why:"(4,000 − 3,400) ÷ 4,000 = 600 ÷ 4,000 = 0.15."},
     {t:"17.6%", why:"That divides by women’s pay (600 ÷ 3,400). The convention is men’s pay."},
     {t:"85%", why:"That’s women’s pay as a share of men’s; the gap is 100 − 85."},
     {t:"600%", why:"600 is the money difference, not a percentage."}
   ]},
   {id:"e2u3-q41", lesson:"e2u3-l5", level:1, q:"Who introduced the concept of “doing gender”?", options:[
     {t:"Candace West and Don Zimmerman (1987)", ok:true, why:"Their article argued gender is accomplished in everyday interaction."},
     {t:"Kimberlé Crenshaw (1989)", why:"Crenshaw introduced intersectionality."},
     {t:"Kingsley Davis and Wilbert Moore (1945)", why:"They wrote about stratification."},
     {t:"Edwin Lemert (1951)", why:"Lemert distinguished primary and secondary deviance."}
   ]},
   {id:"e2u3-q42", lesson:"e2u3-l5", level:3, q:"A study finds that a company pays men and women the same for each job, yet its overall median pay gap is 20%. What is the most likely explanation?", options:[
     {t:"Women and men are concentrated in different jobs and levels, for example fewer women in senior, higher-paid roles.", ok:true, why:"A raw gap can come from occupational segregation and the glass ceiling even when equal pay for equal work is respected."},
     {t:"The figures must be wrong, because equal pay for each job means no overall gap.", why:"The two measures are different; equal pay per job can coexist with a raw gap."},
     {t:"Women are paid less for doing identical jobs.", why:"The study found equal pay for each job, so that’s ruled out here."},
     {t:"The pay gap is caused by sexual orientation.", why:"Nothing in the study relates to orientation."}
   ]},
   {id:"e2u3-q43", lesson:"e2u3-l5", level:2, q:"A researcher studies how a Black migrant woman’s experience of work differs from that of both white migrant women and Black men born in the country. Which concept is she using?", options:[
     {t:"Intersectionality", ok:true, why:"She examines how race, gender and migration status combine rather than studying each alone."},
     {t:"Structural mobility", why:"That concerns whole groups moving between classes as the economy changes."},
     {t:"Amalgamation", why:"That’s groups blending into a new group."},
     {t:"Primary deviance", why:"That’s a term from labeling theory."}
   ]},
   {id:"e2u3-q44", lesson:"e2u3-l5", level:1, q:"According to UN Women, how does the time women and girls spend on unpaid care work compare with men’s?", options:[
     {t:"More than 2.5 times as many hours a day", ok:true, why:"UN Women (2024) reports women and girls spend more than 2.5 times as many hours a day on unpaid care."},
     {t:"About the same", why:"The global data show a large gap."},
     {t:"Half as much", why:"It’s the other way round."},
     {t:"Exactly ten times as much", why:"The reported figure is more than 2.5 times."}
   ]},
   {id:"e2u3-q45", lesson:"e2u3-l5", level:3, q:"Which explanation of the gender division of labour reflects the functionalist perspective, and what is its main critique?", options:[
     {t:"Separate earning and caring roles help families function; critics say it treats one family form as natural and ignores inequality.", ok:true, why:"Parsons’s instrumental and expressive roles are the classic functionalist view, criticised for ignoring power and change."},
     {t:"Men benefit from women’s unpaid labour; critics say it’s too focused on biology.", why:"That’s a conflict view, and the critique doesn’t fit it."},
     {t:"Gender is done in everyday interaction; critics say it’s a macro theory.", why:"That’s interactionist and it’s a micro theory, so the critique is reversed."},
     {t:"Race, class and gender combine; critics say it ignores gender.", why:"That’s intersectionality, which centres gender along with other positions."}
   ]}
  ]
});
