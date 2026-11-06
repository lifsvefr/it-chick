/* Track 4 · Unit 8 · Surveys and numbers */
ICA.addUnit({
  id:"t4u8", track:"t4", n:8, title:"Surveys and numbers", icon:"📋",
  blurb:"Decide when a survey fits, write questions people can answer honestly, reach the right people, and report the numbers without overstating them.",
  goals:[
    "Decide whether a survey suits a research question, and choose a mode and an online tool with privacy in mind",
    "Write and test clear, neutral questions with fair answer options",
    "Design and analyse Likert-type rating questions correctly",
    "Explain sampling frames, response rates, nonresponse bias and the margin of error, and calculate them",
    "Summarise survey results honestly with frequency tables, averages, standard deviation and cross-tabs"
  ],
  read:[
    {book:"bhatt", where:"Chapter 9, “Survey Research”", note:"The book is from 2012: it predates smartphone-first web surveys and the EU’s GDPR (2018), so the lessons add current tools and privacy rules."},
    {book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”"},
    {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3)", note:"The part on surveys, populations and samples."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u8-l1", title:"Is a survey the right tool?", minutes:50,
   hook:{q:"In a 2008 US poll, when “the economy” was read out as one of five choices, 58% picked it as the issue that mattered most to their vote. Another group was asked the same question with no list and answered in their own words. What share of them named the economy?", options:["About 75%","About 58%, the same","About 35%","About 5%"], answer:2, reveal:"About **35%**. Pew Research Center found that a list of choices changes answers: only 8% of people given the list chose something not on it, while 43% of those answering freely named something the list didn’t include. Neither version is “wrong”; they measure slightly different things. This lesson covers when a survey fits, how people answer, and how the question format and the way you ask shape the numbers."},
   goals:[
     "Say what kinds of research questions a survey answers well, and which it doesn’t",
     "Describe the four steps a person goes through to answer a question",
     "Choose between closed and open questions, and between survey modes",
     "Plan a questionnaire’s order and pick an online tool with privacy and data location in mind"
   ],
   learn:[
    {h:"What surveys are good at", body:[
      {lead:"A survey is like taking the same short measurement from many people, in the same way, so the answers can be counted and compared."},
      "A [[survey]] collects answers from people using a fixed set of questions, either a [[questionnaire]] they fill in themselves or an interviewer who reads the questions out. Because everyone gets the same questions, you can add answers up: how many, how often, how much, and how this differs between groups or changes over time.",
      "That makes surveys the natural choice for questions such as: What share of patients waited more than an hour? How many hours a week do apprentices study? Do farmers in two districts use different seed suppliers? Has trust in local libraries changed since the last survey?",
      "Surveys are weaker at other jobs. They can’t easily tell you **why** something happens in depth: a tick-box can’t follow up a surprising answer. They can’t prove that one thing **causes** another (see {{correlation-causation}}). They measure what people **say**, so they struggle with things people can’t remember or don’t want to admit. And people who can’t read the questions, or can’t be reached, drop out of the picture.",
      {table:[["Your question","Does a survey fit?","Often better"],["How common is X in this group?","Yes, if you can reach a fair sample","—"],["Why do people feel this way?","Partly","Interviews or focus groups (Unit 7)"],["Does changing X cause Y?","No","An [[experiment]]"],["What do people actually do?","Only what they report","Observation or records"],["Has someone already measured this?","Check first","[[secondary-data|Existing data]], such as a national statistics office"]]},
      {tip:"Before writing a single question, search for existing data. National statistics offices, international bodies and research data archives may already have asked a large, well-drawn sample exactly what you want to know."}
    ]},
    {h:"How a person answers a question", body:[
      "Survey researchers often describe answering as four quick steps, a model set out by Roger Tourangeau, Lance Rips and Kenneth Rasinski in *The Psychology of Survey Response* (2000). Each step is a place where a question can fail.",
      {ol:[
        "**Understand** the question. If Kenji reads “How often do you exercise **regularly**?”, he must guess what counts as exercise and what “regularly” means.",
        "**Recall** the relevant information. Memory fades and events slide in time: something from eight months ago can feel like “this year”.",
        "**Judge**: turn memories into an answer by counting, estimating or weighing feelings.",
        "**Report**: fit that answer into the options offered, and perhaps adjust it to look better to the researcher."
      ]},
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="t4u8-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="8" y="8" width="130" height="64" rx="10" stroke-width="2"/><text x="73" y="36" text-anchor="middle">1 Understand</text><text class="s" x="73" y="56" text-anchor="middle">the question</text><text class="s" x="150" y="28">Fails with vague words,</text><text class="s" x="150" y="46">jargon, or two questions</text><text class="s" x="150" y="64">in one</text><path class="d-ink" d="M73 72 L73 94" stroke-width="2" marker-end="url(#t4u8-l1-a)"/><rect class="d-sage" x="8" y="96" width="130" height="64" rx="10" stroke-width="2"/><text x="73" y="124" text-anchor="middle">2 Recall</text><text class="s" x="73" y="144" text-anchor="middle">what happened</text><text class="s" x="150" y="116">Fails when memory fades</text><text class="s" x="150" y="134">or events slide into the</text><text class="s" x="150" y="152">wrong time period</text><path class="d-ink" d="M73 160 L73 182" stroke-width="2" marker-end="url(#t4u8-l1-a)"/><rect class="d-gold" x="8" y="184" width="130" height="64" rx="10" stroke-width="2"/><text x="73" y="212" text-anchor="middle">3 Judge</text><text class="s" x="73" y="232" text-anchor="middle">count or estimate</text><text class="s" x="150" y="204">Fails when the sum is</text><text class="s" x="150" y="222">hard, so people guess</text><text class="s" x="150" y="240">or take a shortcut</text><path class="d-ink" d="M73 248 L73 270" stroke-width="2" marker-end="url(#t4u8-l1-a)"/><rect class="d-rose" x="8" y="272" width="130" height="64" rx="10" stroke-width="2"/><text x="73" y="300" text-anchor="middle">4 Report</text><text class="s" x="73" y="320" text-anchor="middle">pick an option</text><text class="s" x="150" y="292">Fails when no option fits,</text><text class="s" x="150" y="310">or the true answer feels</text><text class="s" x="150" y="328">embarrassing</text></svg>', alt:"Four boxes in a column joined by arrows: 1 Understand the question, 2 Recall what happened, 3 Judge by counting or estimating, 4 Report by picking an option. Beside each box is how that step fails: vague words or two questions in one; fading memory or events in the wrong period; hard sums leading to guesses; no option that fits or an embarrassing true answer.", cap:"Every answer passes through four steps. Good question design removes the obstacles at each one."},
      {key:"Most bad survey data isn’t caused by dishonest people. It comes from questions that made one of the four steps hard."}
    ]},
    {h:"Closed and open questions", body:[
      "A [[closed-question|closed question]] gives a fixed list of answers: tick one, tick all that apply, choose a number on a scale, rank items. An [[open-question|open question]] lets people answer in their own words.",
      "Closed questions are quick to answer and easy to count, which is why most survey questions are closed. Their danger is the one in the warm-up: the list itself suggests answers and hides ones you didn’t think of. In the Pew Research Center example, people almost never went beyond the five options read to them.",
      "Open questions catch the unexpected, but they take longer, many people skip them, and someone has to read and group every answer before it can be counted. That grouping is a form of coding, which Unit 7 teaches.",
      {table:[["","Closed","Open"],["Speed for respondent","Fast","Slower; more skipped"],["Analysis","Count directly","Read and code first"],["Risk","List steers answers or misses some","Vague or very short answers"],["Best for","Measuring how common known answers are","Exploring; finding answers you didn’t expect"]]},
      {tip:"A good pattern from Pew’s questionnaire advice: ask an open version in a small pilot, see which answers come up most often, then build your closed list from them, keeping an “Other (please specify)” option."}
    ]},
    {h:"Who asks, and how: survey modes", body:[
      "The **mode** is how the questions reach people: a web form, a paper form, a phone call or a face-to-face interview. Web and paper forms are **self-administered**; phone and face-to-face surveys are **interviewer-administered**.",
      {table:[["Mode","Strengths","Watch out for"],["Web form","Cheap, fast, data arrives tidy","Misses people offline or less confident online"],["Paper","Reaches people without internet","Data entry by hand; no skip logic"],["Phone","Interviewer can clarify; good reach","Answer lists must be short to remember"],["Face to face","Best for long or complex surveys, low literacy","Costly; people may shade sensitive answers"]]},
      "Mode changes answers. Pew Research Center and many studies report that people give more “socially acceptable” answers when an interviewer is present: they tend to overstate things like voting and charitable giving and understate things like drug use. Self-completed web and paper forms reduce this. Mode also changes **who** can take part: a web-only survey of older residents in a rural area may miss many of them.",
      "Many large surveys now mix modes, for example a web form with a paper or phone option for people who prefer it."
    ]},
    {h:"The shape of a questionnaire", body:[
      "Order matters. Pew Research Center’s questionnaire guidance notes that the order in which questions are asked can influence how people respond, because earlier questions set the context for later ones. Asking about a bad experience first can colour every later rating.",
      {list:[
        "**Open with a short introduction**: who is asking, why, how long it takes, how answers are kept, that taking part is voluntary and questions can be skipped. This is part of [[informed-consent|informed consent]].",
        "**Start with easy, relevant questions** that show the survey is about what the introduction promised.",
        "**Group questions by topic**, with a short line when the topic changes.",
        "**Use skip logic** (branching) so people only see questions that apply to them: no car questions for people without a car.",
        "**Put personal background questions near the end** (age group, income band), unless you need them early to check who is eligible.",
        "**Keep it short.** Every question should earn its place: for each one, write down what you will do with the answer. If you can’t, cut it."
      ]},
      {warn:"If you plan to compare results with an earlier survey, keep the questions, their wording and their order the same. Changing any of them can create a “change” that is really just a different question."}
    ]},
    {h:"Choosing an online tool, and where the data goes", body:[
      "Most small surveys today are built online. Several tools are free or have free plans; checked November 2026, and plans change, so look at each one’s current pricing page.",
      {table:[["Tool","Cost and access","Data location notes"],["Google Forms","Free with a Google account; responses can go straight to Google Sheets","Stored by Google; some paid Google Workspace plans let organisations choose where some data is stored"],["Microsoft Forms","Free with a Microsoft account (up to 200 responses per form on free personal accounts)","Stored by Microsoft; work and school accounts follow the organisation’s settings"],["LimeSurvey","Open source: install it free on your own server, or use the hosted Cloud (a small free plan of 25 responses a month, or paid plans)","Cloud lets you pick the server country (e.g. Germany, Finland, Canada, Australia)"],["KoboToolbox","Built for field data collection, works offline; free Community plan for students, non-profits and educational institutions, paid plans for personal or business use","Choose the Global server or the European Union server"],["Qualtrics","Paid; many universities and companies hold licences","Set by the licence holder"]]},
      "Why location matters: survey answers are often [[personal-data|personal data]]. Data-protection laws such as the EU’s [[gdpr|GDPR]] set rules about storing and transferring it, and research ethics committees usually ask where data will be kept and who can see it (see {{data-protection-laws}} and {{research-ethics}}). Rules differ by country and institution, so check yours.",
      {list:[
        "**Collect only what you need.** Don’t ask for names or email addresses unless you must, for example to send a prize.",
        "**Check identity settings.** Many tools can record sign-in emails, require sign-in, or log technical details such as IP addresses. A survey that does this isn’t [[anonymity|anonymous]], even if the introduction says so.",
        "**Know who can see responses**: collaborators on the form, the linked spreadsheet’s sharing settings, anyone with a results link.",
        "**Plan deletion**: when will you delete the raw responses?"
      ]},
      {key:"Never promise “anonymous” unless the tool’s settings truly collect nothing that identifies people. “[[confidentiality|Confidential]]” (you know, but won’t tell) is a different promise."}
    ]}
   ],
   try:[
    {id:"t4u8-l1-x1", type:"sort", q:"For each research question, is a survey a good fit, or would another method fit better?", buckets:["A survey fits well","Another method fits better"], items:[
      {t:"What share of a town’s households have a working smoke alarm, by their own report?", b:0, why:"“What share” of a population is a classic survey question, as long as you can reach a fair sample of households."},
      {t:"Why do some carers stop attending a support group after one visit?", b:1, why:"“Why”, in depth, is better explored through interviews, where you can follow up each person’s reasons. A survey could follow later to see how common those reasons are."},
      {t:"Does a reminder text message cause more people to attend vaccination appointments?", b:1, why:"A cause-and-effect question calls for an experiment: randomly send the text to some people and compare attendance."},
      {t:"How many hours a week do apprentices in a trade spend studying outside work?", b:0, why:"Measuring how common or how much, across many people, is what surveys do well."},
      {t:"How did a country’s population size change between its last two censuses?", b:1, why:"This already exists: use the census figures (secondary data) instead of asking people."},
      {t:"How satisfied are members of a community choir with rehearsal times, and does this differ by age group?", b:0, why:"Satisfaction ratings compared across groups suit a short questionnaire."}
    ]},
    {id:"t4u8-l1-x2", type:"mcq", q:"In Pew’s 2008 comparison, 58% chose “the economy” from a list, but only 35% named it when answering in their own words. What is the best conclusion?", options:[
      {t:"The list of options shaped the answers, so how a question is asked is part of what it measures.", ok:true, why:"Yes. The closed version prompted people with “the economy”; the open version measured what came to mind unprompted. Report the format alongside the number."},
      {t:"The open question was wrong and should never be used.", why:"Neither version is wrong. The open one shows what people raise unprompted, and it found answers the list missed (43% gave an answer that wasn’t on it)."},
      {t:"People lied in the closed version.", why:"There’s no sign of lying. A list reminds people of options they agree with but might not have thought of; that’s a format effect, not dishonesty."},
      {t:"The difference must be due to a small sample.", why:"A 23-point gap isn’t chance. The difference comes from the question format, which is the lesson of the study."}
    ]},
    {id:"t4u8-l1-x3", type:"match", q:"Match each answering problem to the step of the answering process where it happens.", pairs:[
      ["Lucía isn’t sure whether “household” includes her student son who lives away in term time","Understand","She is unsure what the question means, so it fails at the first step."],
      ["Tomás reports a hospital visit from 14 months ago as being “in the last year”","Recall","Placing an event in the wrong period is a memory problem."],
      ["Asked for monthly spending on transport, Mei guesses rather than adding up dozens of fares","Judge","Turning memories into a number is the judgement step; hard sums lead to guesses."],
      ["Oluwaseun’s true answer is “twice a month”, but the options only offer “weekly” or “never”","Report","He knows his answer but can’t fit it into the options offered."]
    ]},
    {id:"t4u8-l1-x4", type:"mcq", q:"Priya is planning a survey of older residents in a rural district about access to health services. Many residents don’t use the internet. Which plan is best?", options:[
      {t:"Offer a paper form or a phone option alongside a web form.", ok:true, why:"Mixing modes lets people without internet take part, so the results don’t leave out the very people the topic most concerns."},
      {t:"Use only a web form, because it’s cheapest and the data arrives tidy.", why:"Cheap, but people offline couldn’t answer, so the results would mostly describe residents who are online."},
      {t:"Post the link on social media and use whoever replies.", why:"Social media posts reach a self-selected group, and still miss people offline."},
      {t:"Ask only the residents she knows personally, because they will answer honestly.", why:"Her acquaintances aren’t a fair sample of the district, and knowing her may make some answers less candid."}
    ]},
    {id:"t4u8-l1-x5", type:"order", q:"Put these parts of a questionnaire in a sensible order, from first to last.", items:[
      {t:"Introduction: who is asking, why, how long, how answers are kept, that it’s voluntary", why:"People need this to decide whether to take part (informed consent), so it comes first."},
      {t:"An easy question clearly about the survey’s topic", why:"An easy, relevant opener shows the survey is what it promised and builds momentum."},
      {t:"The main topic questions, grouped by subject", why:"The core of the survey comes once people are settled in, grouped so they don’t jump around."},
      {t:"Background questions such as age group and income band", why:"Personal questions go near the end, unless you need them first to check eligibility."},
      {t:"A thank-you, and how to contact the researcher", why:"Close by thanking people and telling them how to ask questions or withdraw."}
    ]},
    {id:"t4u8-l1-x6", type:"mcq", q:"Hana’s survey introduction says “This survey is anonymous.” Her form tool is set to record each respondent’s sign-in email address. What should she do?", options:[
      {t:"Turn off email collection and sign-in requirements, or change the wording to explain that emails are recorded but kept confidential.", ok:true, why:"Her promise must match what the tool does. Either collect nothing identifying, or describe honestly what is collected and how it is protected."},
      {t:"Nothing: email addresses don’t count as identifying information.", why:"An email address usually identifies a person directly. Recording it means the survey isn’t anonymous."},
      {t:"Keep the setting but delete the emails before anyone else sees them.", why:"The answers were still collected with identities attached, so the “anonymous” promise was untrue when people answered."},
      {t:"Add “Please don’t write your name” to the introduction.", why:"That doesn’t stop the tool recording email addresses automatically."}
    ]}
   ],
   apply:{intro:"Plan a small survey you could really run. Keep it to people who agree to help, such as a friend, family member or colleague; Lesson 2 shows how to test it with them.", tasks:[
     {t:"Decide whether a survey fits", how:["Write your research question in one sentence.","Underline the key words: is it about how many, how often or how much (survey-friendly), or about why, cause, or what people actually do?","Search for existing data first, for example on your national statistics office’s website.","Decide: survey, another method, or both."], write:"My question… Survey-friendly or not, and why… Existing data I found… My decision…"},
     {t:"Build a first draft in a free form tool", how:["Choose a tool (for example Google Forms, Microsoft Forms or LimeSurvey’s free Cloud plan; KoboToolbox is free if you are a student or work with a non-profit) and sign in or create a free account. All of them work in a phone browser.","Create a new blank form and give it a clear title.","Write the introduction: who you are, why you’re asking, how long it takes, how answers are kept, and that people can skip questions or stop.","Add four to six questions, mostly closed (multiple choice), plus one open “Is there anything else…?” question.","Use the tool’s preview to see the form as a respondent would, ideally on a phone."], write:"Tool I chose… My introduction… My questions… What looked odd in preview…"},
     {t:"Check the privacy settings", how:["Find the form’s settings and note whether it records email addresses, requires sign-in, or limits people to one response.","Find out where your tool stores data (its help pages or privacy page) and who can see the responses.","Decide whether your survey is anonymous, confidential, or neither, and correct your introduction if needed."], write:"What the tool records… Where data is stored… Who can see it… Anonymous or confidential?…"}
   ], proof:"A one-sentence research question with a reasoned choice of method, a draft form with an introduction and four to six questions, and notes on what the tool records and where the data goes."},
   read:[
     {book:"bhatt", where:"Chapter 9, “Survey Research”", note:"Read the parts on questionnaire surveys and interview surveys. Online tools have changed a lot since 2012; the lesson covers current ones."},
     {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3)", note:"The survey part: populations, samples and what surveys are good for."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u8-l2", title:"Writing and testing questions", minutes:60,
   hook:{q:"People are asked about a sensitive habit, such as how much alcohol they drink. In which situation do they, on average, report the least flattering (and usually more accurate) answers?", options:["Face to face with an interviewer","On the phone with an interviewer","Filling in a web form on their own","It makes no difference"], answer:2, reveal:"**Filling in a form on their own.** Survey research consistently finds more “socially desirable” answers when an interviewer is present: people understate things like drinking and drug use and overstate things like voting and giving to charity. Self-completed web and paper forms reduce this. Wording can help too, and this lesson shows how, along with the other ways a question can quietly steer or confuse people."},
   goals:[
     "Recognise and fix leading, loaded, double-barrelled, double-negative and assumption-laden questions",
     "Write answer options that are balanced, exhaustive and don’t overlap",
     "Decide when to offer “Don’t know” and “Prefer not to say”",
     "Handle memory problems and sensitive topics",
     "Test a questionnaire with a pilot and cognitive interviews"
   ],
   learn:[
    {h:"One question, one clear meaning", body:[
      {lead:"A good survey question is like a good recipe step: everyone who reads it does the same thing."},
      "Jon Krosnick and Stanley Presser’s review of questionnaire research (2010) lists the long-standing rules of thumb, and most hold up well: use simple, familiar words; keep sentences short; avoid vague terms; be specific; give answer options that cover everyone without overlapping; avoid leading or loaded wording; ask about one thing at a time; and avoid negatives, especially double negatives.",
      "Vague words are the most common problem because they don’t look vague to the writer. “Regularly”, “often”, “recently”, “income” and even “household” mean different things to different people.",
      {table:[["Vague","Clearer"],["Do you exercise regularly?","In the past 7 days, on how many days did you do at least 30 minutes of exercise that made you breathe harder?"],["What is your income?","What was your household’s total income before tax in the last 12 months? (with ranges)"],["Do you use the library recently?","Have you visited a public library in person in the past 4 weeks?"]]},
      {tip:"Define the time period, the unit and the thing. Then read the question aloud as if you were someone with a very different life from yours."}
    ]},
    {h:"Questions that push", body:[
      "A [[leading-question|leading question]] nudges people towards one answer: “Don’t you agree that the new opening hours are better?” A **loaded question** uses emotionally charged words (“wasteful”, “heroic”, “so-called experts”) that make one answer feel right. An **assumption** builds in something that may not be true: “How much did you enjoy the workshop?” assumes the person enjoyed it.",
      {table:[["Problem","Example","Neutral version"],["Leading","Don’t you agree the park needs more lighting?","How would you rate the lighting in the park?"],["Loaded","Should the council stop wasting money on art?","How should the council’s arts budget change: increase, stay the same, decrease?"],["Assumption","How much did you enjoy the workshop?","How would you rate the workshop overall?"]]},
      "A quieter push is the agree–disagree format itself. Many people tend to agree with statements whatever they say, which is called [[acquiescence-bias|acquiescence bias]]. Pew Research Center notes this is stronger among less educated and less informed respondents, and Krosnick and Presser recommend asking about the thing directly instead. Rather than “Agree or disagree: my commute is stressful”, ask “How stressful is your commute?” with labelled options from “Not at all” to “Extremely”."
    ]},
    {h:"Two questions in one, and double negatives", body:[
      "A [[double-barrelled-question|double-barrelled question]] asks about two things but allows one answer: “How satisfied are you with the cost and quality of the bus service?” Someone who finds it cheap but unreliable can’t answer truthfully, and you can’t tell which part any answer refers to. Look for “and” or “or” joining two different things, and split them into two questions.",
      "A **double negative** makes people untangle logic before they can answer: “Do you disagree that the school should not ban phones?” Even careful readers get it wrong. Rewrite it as a direct choice: “Should the school ban phones during lessons? Yes / No / Not sure”.",
      {ex:"Before: “Do you oppose not extending the clinic’s hours?”\nProblem: “oppose” + “not” = a double negative.\nAfter: “Should the clinic extend its opening hours? Yes / No / No opinion”", label:"Worked example"}
    ]},
    {h:"Answer options that fit everyone", body:[
      "Options need to be **exhaustive** (everyone has an answer) and **mutually exclusive** (no one fits two). Overlapping ranges are a classic slip: if the bands are 18–25 and 25–35, where does a 25-year-old go? Write 18–24, 25–34, 35–44 and so on. Add “Other (please specify)” when you can’t list every possibility, and “Not applicable” when a question won’t apply to some people.",
      "Rating options should be **balanced**: as many positive as negative steps, with equal-feeling gaps. An unbalanced list makes people look more positive than they are.",
      {fig:'<svg viewBox="0 0 340 300"><text x="87" y="22" text-anchor="middle">Unbalanced</text><text x="253" y="22" text-anchor="middle">Balanced</text><rect class="d-sage" x="8" y="36" width="158" height="36" rx="8" stroke-width="1.5"/><text x="87" y="59" text-anchor="middle">Very satisfied</text><rect class="d-sage" x="8" y="80" width="158" height="36" rx="8" stroke-width="1.5"/><text x="87" y="103" text-anchor="middle">Satisfied</text><rect class="d-sage" x="8" y="124" width="158" height="36" rx="8" stroke-width="1.5"/><text x="87" y="147" text-anchor="middle">Quite satisfied</text><rect class="d-sage" x="8" y="168" width="158" height="36" rx="8" stroke-width="1.5"/><text x="87" y="191" text-anchor="middle">Slightly satisfied</text><rect class="d-rose" x="8" y="212" width="158" height="36" rx="8" stroke-width="1.5"/><text x="87" y="235" text-anchor="middle">Dissatisfied</text><rect class="d-sage" x="174" y="36" width="158" height="36" rx="8" stroke-width="1.5"/><text x="253" y="59" text-anchor="middle">Very satisfied</text><rect class="d-sage" x="174" y="80" width="158" height="36" rx="8" stroke-width="1.5"/><text x="253" y="103" text-anchor="middle">Satisfied</text><rect class="d-panel" x="174" y="124" width="158" height="36" rx="8" stroke-width="1.5"/><text x="253" y="147" text-anchor="middle">Neither</text><rect class="d-rose" x="174" y="168" width="158" height="36" rx="8" stroke-width="1.5"/><text x="253" y="191" text-anchor="middle">Dissatisfied</text><rect class="d-rose" x="174" y="212" width="158" height="36" rx="8" stroke-width="1.5"/><text x="253" y="235" text-anchor="middle">Very dissatisfied</text><text class="s" x="87" y="272" text-anchor="middle">4 positive, 1 negative</text><text class="s" x="87" y="290" text-anchor="middle">tilts results upward</text><text class="s" x="253" y="272" text-anchor="middle">2 positive, a middle,</text><text class="s" x="253" y="290" text-anchor="middle">2 negative</text></svg>', alt:"Two columns of five answer options. Left, unbalanced: Very satisfied, Satisfied, Quite satisfied, Slightly satisfied, Dissatisfied, which is four positive options and one negative. Right, balanced: Very satisfied, Satisfied, Neither, Dissatisfied, Very dissatisfied, which is two positive, a neutral middle and two negative.", cap:"An unbalanced scale offers four ways to be satisfied and one way not to be. A balanced scale mirrors its two sides."},
      "Order matters as well. Krosnick and Presser report that when people **read** a list, they lean towards options near the top (a primacy effect); when they **hear** a list on the phone, they lean towards the last ones (a recency effect). For unordered lists, such as reasons or brands, many tools can shuffle the order for each respondent. Never shuffle a rating scale: its order carries meaning."
    ]},
    {h:"“Don’t know” and “Prefer not to say”", body:[
      "Should you offer “Don’t know”? It depends on the question. For a factual question that some people genuinely can’t answer (“What year was your home built?”), “Don’t know” is an honest option and forcing a guess creates fake precision.",
      "For opinion questions the evidence is more surprising. Krosnick and Presser’s review found that offering “Don’t know” or “No opinion” did not consistently improve data quality. Many people who choose it do hold a view, and it can become an easy exit when a question takes effort. Some researchers therefore leave it off opinion questions but let people skip.",
      "“Prefer not to say” is different: it’s about respect, not measurement. For personal topics such as income, health, religion or sexuality, people should be able to decline without abandoning the whole survey, and ethics committees usually expect this. Most online tools also let you leave questions optional instead of required.",
      {list:[
        "Keep these options **visually separate** from a rating scale, so “Don’t know” isn’t read as the middle point.",
        "Keep “Not applicable”, “Don’t know” and “Prefer not to say” as **separate codes** in your data. They mean different things.",
        "Report how many people chose them. Lesson 5 shows how they change percentages."
      ]}
    ]},
    {h:"Memory and sensitive topics", body:[
      "**Memory.** People forget, and they tend to pull events into the period being asked about, an error called **telescoping**. Ways to help: ask about a short, recent period (“the past 7 days” rather than “the past year”); give anchors (“since New Year”, “since the start of the school term”); break big questions into parts (“How many times did you see a doctor? …a nurse? …a pharmacist?”); and don’t make people do arithmetic you could do yourself.",
      "**Sensitive topics.** People shade answers to look good, which is [[social-desirability-bias|social desirability bias]]. You can reduce it by:",
      {list:[
        "Using a **self-completed** mode rather than an interviewer, and collecting no identifying details if you can.",
        "Using **face-saving wording**: “Some people weren’t able to vote in the last election because they were busy or unwell. Did you vote?”",
        "Offering **ranges** rather than exact amounts for income or alcohol.",
        "Saying **why** you are asking and how answers will be protected.",
        "Placing sensitive questions **later**, once people trust the survey."
      ]},
      {warn:"Some topics (self-harm, abuse, illegal activity, immigration status) can put people at risk or cause distress. Real research on them needs ethics review, support information for participants and careful data protection. Don’t include them in practice surveys."}
    ]},
    {h:"Test before you launch", body:[
      "Pew Research Center calls pretesting an essential step in questionnaire design. Problems you can’t see as the writer show up immediately when someone else answers.",
      "A [[cognitive-interview|cognitive interview]] tests how people understand questions. You sit with someone like your intended respondents while they answer, using two techniques:",
      {list:[
        "**Thinking aloud**: “Please say whatever goes through your mind as you answer.”",
        "**Probing**: “What does ‘household’ mean to you here?”, “How did you arrive at that number?”, “Can you say that question back in your own words?”"
      ]},
      "Krosnick and Presser add a caution: thinking aloud can change how people answer, so it shows misunderstandings well but not everything that happens in a real survey.",
      "A [[pilot-study|pilot]] then runs the whole survey, exactly as planned, with a small group from the target population. Check how long it takes, whether skip logic sends people to the right places, where people stop, which questions they skip, and whether the exported data looks the way you expected. Expert review, where an experienced colleague critiques the draft, costs nothing and catches many problems early.",
      {key:"Pilot people should not be counted in the final results if you changed the questions afterwards: they answered a different survey."},
      "If your survey will be translated, test each language version. A word can be neutral in one language and loaded in another."
    ]}
   ],
   try:[
    {id:"t4u8-l2-x1", type:"spot", q:"Fatima drafted this questionnaire for a community sports centre. Tap each question that has a problem.", ask:"has a problem", parts:[
      {t:"1. In the past 4 weeks, how many times did you visit the centre?", flag:false, why:"Clear: a defined period and a countable thing."},
      "\n",
      {t:"2. How satisfied are you with the changing rooms and the café?", flag:true, why:"Double-barrelled: someone could like the café and dislike the changing rooms. Ask about each separately."},
      "\n",
      {t:"3. Age: 16–25 / 25–40 / 40–60 / 60+", flag:true, why:"The ranges overlap (25, 40 and 60 each fit two bands) and there is no option for anyone under 16. Use 16–24, 25–39, 40–59, 60+ and check who is eligible."},
      "\n",
      {t:"4. How would you rate the cleanliness of the pool? (Very good / Good / Neither / Poor / Very poor)", flag:false, why:"Neutral wording and a balanced five-point scale."},
      "\n",
      {t:"5. Don’t you agree the centre should stay open later?", flag:true, why:"Leading: “Don’t you agree” pushes people towards yes. Ask “What closing time would suit you best?” or “Should the centre stay open later? Yes / No / No opinion”."},
      "\n",
      {t:"6. Do you disagree that the gym should not be closed on Sundays?", flag:true, why:"A double negative (“disagree” + “not closed”). Ask directly: “Should the gym be open on Sundays?”"},
      "\n",
      {t:"7. Is there anything else you’d like to tell us about the centre?", flag:false, why:"A good open question to finish, inviting comments without steering them."}
    ]},
    {id:"t4u8-l2-x2", type:"match", q:"Match each flawed question to the best fix.", pairs:[
      ["How much did you enjoy the training course?","Ask “How would you rate the training course?” with balanced options","The original assumes enjoyment; a neutral rating lets people say it was poor."],
      ["How often do you use public transport? (Often / Sometimes / Rarely)","Ask about a defined period with countable options, such as days in the past 7","“Often” means different things to different people; counts in a fixed period don’t."],
      ["Over the past year, how many times did you buy fruit?","Ask about a shorter recent period, such as the past 7 days","Nobody can count a year of fruit purchases; a short period reduces guessing and telescoping."],
      ["Agree or disagree: My neighbourhood is safe at night.","Ask “How safe or unsafe do you feel walking in your neighbourhood at night?”","Asking directly avoids acquiescence bias, the tendency to agree with statements."]
    ]},
    {id:"t4u8-l2-x3", type:"sort", q:"Which problem does each question have?", buckets:["Leading or loaded","Double-barrelled","Assumes something that may be untrue"], items:[
      {t:"Should the town stop pouring money into its failing museum?", b:0, why:"“Pouring money” and “failing” are loaded words that push towards yes."},
      {t:"How useful and enjoyable were the parenting sessions?", b:1, why:"Useful and enjoyable are two different things in one question."},
      {t:"Which streaming service do you use most?", b:2, why:"It assumes the person uses a streaming service. Add “I don’t use any” or ask a filter question first."},
      {t:"Most dentists recommend flossing every day. Do you floss every day?", b:0, why:"Quoting what experts recommend pressures people to say yes."},
      {t:"Was the nurse friendly and quick?", b:1, why:"Friendly and quick are separate qualities; ask about each."},
      {t:"How long is your drive to work?", b:2, why:"It assumes the person works and drives. Ask how they travel first, or offer other options."}
    ]},
    {id:"t4u8-l2-x4", type:"mcq", q:"Sione is asking members of a tenants’ association how much they pay in rent each month. Some live in social housing where rent is deducted automatically, and some share costs with relatives. Which design is best?", options:[
      {t:"Rent ranges, plus separate “Don’t know” and “Prefer not to say” options, and the question not set as required.", ok:true, why:"Ranges are easier and less sensitive than exact amounts; “Don’t know” is honest for people who don’t see the bill; “Prefer not to say” and an optional question respect people’s right to decline."},
      {t:"An exact amount, required, so nobody can skip it.", why:"Forcing an answer pushes people to guess or abandon the survey. Exact amounts are also more sensitive than ranges."},
      {t:"Ranges, with “Don’t know” placed as the middle option.", why:"Putting “Don’t know” in the middle makes it look like a mid-range rent, which mixes two different answers."},
      {t:"Leave the question out, because money questions are always too sensitive.", why:"Rent can be asked respectfully. If the information matters to the research, design the question carefully rather than dropping it."}
    ]},
    {id:"t4u8-l2-x5", type:"mcq", q:"During a cognitive interview, Ana answers “How many people live in your household?” with 5. Which probe would best reveal whether the question works?", options:[
      {t:"“Who did you include when you counted, and was anyone you weren’t sure about?”", ok:true, why:"This shows how she understood “household” (students away? lodgers? a partner who works abroad?), which is exactly what a cognitive probe should uncover."},
      {t:"“Are you sure it’s 5?”", why:"This questions her honesty and may make her defensive. It doesn’t reveal how she understood the question."},
      {t:"“Most households have about three people. Does 5 sound right?”", why:"This is a leading probe that may change her answer. Probes should be neutral."},
      {t:"“Great, let’s move on to the next question.”", why:"Moving on without probing learns nothing about whether the question was understood as intended."}
    ]},
    {id:"t4u8-l2-x6", type:"order", q:"Put these questionnaire testing steps in a sensible order.", items:[
      {t:"Ask an experienced colleague to review the draft", why:"Expert review is cheap and catches obvious problems before you involve anyone else."},
      {t:"Run cognitive interviews with a few people like your respondents", why:"Next, find out how real people understand each question."},
      {t:"Revise the wording based on what you learned", why:"Fix the problems the interviews revealed before testing the full survey."},
      {t:"Pilot the complete online survey with a small group, then check timing, skips and the exported data", why:"A pilot tests the final version end to end, including the technical side."},
      {t:"Launch the survey to the full sample", why:"Only launch once the questions and the tool have both been tested."}
    ]},
    {id:"t4u8-l2-x7", type:"mcq", q:"Which question is most likely to get accurate answers about voting from people who didn’t vote?", options:[
      {t:"“In the last election, some people didn’t vote because they were busy, unwell or had other things to do. Did you vote?”", ok:true, why:"Face-saving wording makes the less “desirable” answer easier to give, a technique Pew Research Center describes for reducing social desirability bias."},
      {t:"“As a responsible citizen, you voted in the last election, didn’t you?”", why:"This is leading and loaded; it makes “no” even harder to say."},
      {t:"“Did you vote in the last election?” asked face to face by an interviewer from the electoral office.", why:"An interviewer, especially an official one, increases the pressure to give the socially desirable answer."},
      {t:"“Did you fail to vote in the last election?”", why:"“Fail” is a loaded, negative word, and the question still makes not voting sound shameful."}
    ]}
   ],
   apply:{intro:"Improve the draft questions from Lesson 1, then test them with one person who agrees to help. Tell them it’s practice and they can skip anything.", tasks:[
     {t:"Fix five questions", how:["Take five questions from your draft (or write five on a topic you care about).","Check each against the problems in this lesson: vague words, leading, loaded, assumptions, double-barrelled, double negatives, overlapping or unbalanced options, memory and sensitivity.","Rewrite each one, and note which problem you fixed.","Decide for each whether it needs “Don’t know”, “Not applicable” or “Prefer not to say”."], write:"Original… Problem… Rewritten version… Extra options and why…"},
     {t:"Run one cognitive interview", how:["Ask a willing friend, colleague or family member to answer your draft while thinking aloud.","After each question, use one neutral probe, such as “What does this question mean to you?” or “How did you choose that answer?”","Take brief notes (no recording unless they agree).","Mark every question where their understanding differed from yours."], write:"Questions they understood differently… What they said… How I’ll change each…"},
     {t:"Time a pilot run", how:["Revise the form in your survey tool.","Ask your tester (or do it yourself if no one is available) to complete it on a phone while you time it.","Download or open the responses and check that each question produced the data you expected."], write:"Time taken… Problems on a phone… Did the data look right?…"}
   ], proof:"Five before-and-after questions with the problem named, notes from one cognitive interview, and a timed test run with the changes you made."},
   read:[
     {book:"bhatt", where:"Chapter 9, “Survey Research”", note:"Its guidance on question wording, response formats and survey biases matches this lesson. For more recent evidence, see the Krosnick and Presser chapter listed in the Codex."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u8-l3", title:"Likert scales and rating questions", minutes:50,
   hook:{q:"The “Likert scale” is named after the American social scientist Rensis Likert. What was his original 1932 publication designed to measure?", options:["Customer satisfaction with products","People’s attitudes","Intelligence","Physical pain"], answer:1, reveal:"**Attitudes.** Likert’s 1932 monograph was titled *A Technique for the Measurement of Attitudes*. People rated a set of statements (for example, on topics such as war and international relations) from “strongly approve” to “strongly disapprove”, and their item scores were added up into one total. That idea, many statements combined into one score, is what “Likert scale” strictly means. This lesson shows how to design and analyse these questions correctly."},
   goals:[
     "Tell a Likert item from a Likert scale, and build a simple scale score",
     "Choose the number of points, labels and whether to include a midpoint",
     "Explain why rating answers are ordinal and summarise them appropriately",
     "Check common claims about Likert scales against the evidence"
   ],
   learn:[
    {h:"Where the name comes from", body:[
      {lead:"One rating question is a single thermometer reading. A Likert scale is several readings combined, so one odd reading matters less."},
      "In 1932 Rensis Likert published *A Technique for the Measurement of Attitudes* (Archives of Psychology, No. 140). His method was simple: write a set of statements about one topic, ask people to respond to each on a five-category scale such as strongly approve, approve, undecided, disapprove, strongly disapprove, score the categories 1 to 5, and add the scores to give each person a total.",
      "The method spread partly because it was simpler to build and score than earlier attitude-measurement techniques; simply scoring the categories 1 to 5 was found to give totals almost identical (a correlation of about 0.99) to a more complicated statistical scoring method. Today, rating questions of this kind are everywhere: course evaluations, patient experience surveys, staff surveys, product reviews.",
      "Likert’s key idea is often lost: an attitude such as “confidence using online health information” is too broad for one question to capture reliably. Several statements, each touching a different side of it, measure it better together."
    ]},
    {h:"Item versus scale", body:[
      "Strictly, a single statement with its answer options is a **Likert item** (many researchers say **Likert-type item**). A [[likert-scale|Likert scale]] is a **set** of items about one idea, combined into a score. In everyday speech people call any agree–disagree question a “Likert scale”, so check which one a writer means.",
      {fig:'<svg viewBox="0 0 340 296"><defs><marker id="t4u8-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text class="s" x="108" y="22" text-anchor="middle">Four items, answers 1–5</text><rect class="d-lup" x="8" y="34" width="200" height="50" rx="8" stroke-width="1.5"/><text x="18" y="55">Item 1 → 5</text><text class="s" x="18" y="74">I know where to look</text><rect class="d-lup" x="8" y="94" width="200" height="50" rx="8" stroke-width="1.5"/><text x="18" y="115">Item 2 → 4</text><text class="s" x="18" y="134">I can judge its quality</text><rect class="d-rose" x="8" y="154" width="200" height="50" rx="8" stroke-width="1.5"/><text x="18" y="175">Item 3 ↺ 2 → 4</text><text class="s" x="18" y="194">I find it confusing</text><rect class="d-lup" x="8" y="214" width="200" height="50" rx="8" stroke-width="1.5"/><text x="18" y="235">Item 4 → 4</text><text class="s" x="18" y="254">I can use what I find</text><path class="d-ink" d="M208 59 L238 130" stroke-width="1.5" marker-end="url(#t4u8-l3-a)"/><path class="d-ink" d="M208 119 L236 140" stroke-width="1.5" marker-end="url(#t4u8-l3-a)"/><path class="d-ink" d="M208 179 L236 160" stroke-width="1.5" marker-end="url(#t4u8-l3-a)"/><path class="d-ink" d="M208 239 L238 170" stroke-width="1.5" marker-end="url(#t4u8-l3-a)"/><rect class="d-sage" x="240" y="100" width="92" height="96" rx="10" stroke-width="2"/><text x="286" y="124" text-anchor="middle">Scale</text><text x="286" y="144" text-anchor="middle">score</text><text x="286" y="168" text-anchor="middle">17</text><text class="s" x="286" y="186" text-anchor="middle">of 20</text><text class="s" x="170" y="286" text-anchor="middle">↺ reversed item: score = 6 − answer</text></svg>', alt:"Four item boxes on the left feed arrows into a Scale score box on the right. Item 1, I know where to look, answer 5. Item 2, I can judge its quality, answer 4. Item 3, I find it confusing, is reverse-worded: its answer 2 becomes 4. Item 4, I can use what I find, answer 4. The scale score is 17 out of 20. A note says a reversed item is scored 6 minus the answer.", cap:"A Likert scale combines several items about one idea. A negatively worded item is reverse-scored before adding."},
      "In the diagram, item 3 is worded the other way round: agreeing with “I find it confusing” means **less** confidence. Before adding, it is **reverse-scored**. On a 1–5 scale, the new score is 6 minus the answer, so 2 becomes 4 (on a 1–7 scale it is 8 minus the answer). Forgetting this step is one of the most common analysis errors.",
      "Reverse-worded items are often included to catch people who tick the same column throughout. Krosnick and Presser warn they have costs too: some people misread them, and they don’t fully cancel out acquiescence. If you use them, word them simply and avoid double negatives.",
      "Before treating items as one scale, researchers check that they hang together, for example with a statistic called Cronbach’s alpha, which is linked to [[reliability]]. Better still, use an **established scale** that has already been tested for [[validity]], and check its licence: some are free to use, others need permission or payment."
    ]},
    {h:"How many points, and how to label them", body:[
      "There is no single correct number. Five and seven points are the most common. Krosnick and Presser’s review found that reliability tends to rise from two points up to about seven and then levels off, and concluded that seven points are probably best in many cases, with caveats for telephone surveys, where people must remember the options.",
      "**Label every point with words** where you can. Their review found that fully labelled scales are more reliable than ones with words only at the ends (“1 = Strongly disagree … 7 = Strongly agree” with bare numbers in between). Choose labels that feel evenly spaced.",
      {table:[["Kind","Example labels","Use for"],["Bipolar (two opposite sides)","Very dissatisfied · Dissatisfied · Neither · Satisfied · Very satisfied","Feelings that can go either way"],["Unipolar (none to a lot)","Not at all · Slightly · Moderately · Very · Extremely","Amounts: how useful, how often, how worried"],["Frequency","Never · Rarely · Sometimes · Often · Always","How often something happens"]]},
      {tip:"Preview rating questions on a phone. Wide grids with many columns can be cramped or displayed differently on small screens, which can change how people answer."}
    ]},
    {h:"Odd or even: the middle point", body:[
      "An odd number of points gives a **midpoint** (“Neither agree nor disagree”); an even number forces people to lean one way. People argue about this, so here is what the evidence says.",
      {list:[
        "**Against dropping the middle**: Krosnick and Presser report that removing the midpoint pushes people with genuinely neutral views to one side, which makes the results less accurate, and they cite a 1999 study by Colm O’Muircheartaigh and colleagues finding that adding midpoints improved reliability and validity.",
        "**For caution**: some argue a midpoint invites people to take the easy option without thinking. The evidence on this is mixed.",
        "**A neutral view isn’t “Don’t know”**: someone who has thought and feels neutral differs from someone with no idea. Put “Don’t know” or “Not applicable” apart from the scale, not in the middle."
      ]},
      {key:"Offer a midpoint when neutral is a real position people can hold. If you leave it out, say so in your report, because it affects the percentages."}
    ]},
    {h:"Numbers that are really ranks: ordinal data", body:[
      "Coding answers as 1 to 5 makes them look like measurements, but they are [[ordinal-data|ordinal]]: the order is meaningful (“Agree” is more than “Neither”), but the distances aren’t known. Is the step from “Agree” to “Strongly agree” the same size as from “Neither” to “Agree”? Nobody can say.",
      "For a **single item**, the safest summaries are:",
      {list:[
        "the **frequency distribution**: how many chose each option (Lesson 5);",
        "the **median** (the middle answer) and the **mode** (the most common one);",
        "the share choosing the top two options, **if** you also show the full distribution."
      ]},
      "What about the **mean**? This is a long-running debate. Gail Sullivan and Anthony Artino’s widely cited 2013 editorial explains both sides: means of single items can mislead, and the median is the conventional choice; but reviews such as Geoff Norman’s (2010) argue that common “parametric” methods based on means are robust enough to use with Likert data, especially with **multi-item scale scores**. In practice many researchers report the mean of a scale score. Whatever you do, say which you used and show the distribution too.",
      {ex:"Team A (10 people): every person answers 3.\nTeam B (10 people): five answer 1 and five answer 5.\nBoth teams: mean = 3, median = 3.\nBut Team A is calm and united; Team B is split down the middle.\nOnly the distribution shows the difference.", label:"Worked example", mono:true}
    ]},
    {h:"Agree–disagree, or ask directly?", body:[
      "Likert’s original items asked people to approve or disapprove of statements, and agree–disagree items are still common. But as Lesson 2 showed, they invite [[acquiescence-bias|acquiescence bias]], and Krosnick and Presser found they are generally less reliable and valid than questions that ask about the quality you care about directly.",
      {table:[["Agree–disagree","Asking directly"],["“The website is easy to use.” Strongly disagree … Strongly agree","“How easy or difficult was the website to use?” Very difficult … Very easy"],["“I feel safe at work.” Strongly disagree … Strongly agree","“How safe do you feel at work?” Not at all safe … Completely safe"]]},
      "Agree–disagree items aren’t forbidden, and many established scales use them. If you adopt a tested scale, keep its wording so results stay comparable with other studies. If you are writing new questions, asking directly is usually the better choice."
    ]},
    {h:"Checking common claims", body:[
      {table:[["Claim","What’s accurate"],["“Any rating question is a Likert scale.”","Loosely used that way; strictly, a Likert scale is several items combined into one score."],["“Likert scales always have 5 points.”","Likert’s 1932 example used five; 5 and 7 are both common, and other numbers are used."],["“More points are always better.”","Reliability gains level off at around 7 points; very long scales are harder to answer."],["“The midpoint means no opinion.”","It should mean a neutral view. Keep “Don’t know” separate."],["“You can never calculate a mean.”","Debated. Medians and distributions are safest for single items; means of multi-item scale scores are widely used."]]}
    ]}
   ],
   try:[
    {id:"t4u8-l3-x1", type:"mcq", q:"A report says: “We used a Likert scale: ‘How satisfied are you with the bus service?’ (1–5).” What is the most accurate description?", options:[
      {t:"It’s a single Likert-type item, not a multi-item Likert scale.", ok:true, why:"One rating question is an item. A Likert scale, strictly, combines several items about the same idea into one score."},
      {t:"It’s a Likert scale because it has five points.", why:"The number of points doesn’t make a scale. Combining several items does."},
      {t:"It isn’t a rating question at all.", why:"It is a rating question; the issue is only what to call it."},
      {t:"It’s an open question.", why:"It offers fixed options from 1 to 5, so it is closed."}
    ]},
    {id:"t4u8-l3-x2", type:"number", q:"A four-item scale uses 1–5 answers (5 = strongly agree). Item 3 is reverse-worded. Dmitri answers: item 1 = 4, item 2 = 5, item 3 = 2, item 4 = 3. What is his total scale score?", answer:16, tol:0, unit:"points", why:"Reverse item 3 first: 6 − 2 = 4. Then add: 4 + 5 + 4 + 3 = 16 (out of a possible 20).", wrongs:[
      {v:14, tol:0, why:"14 is the sum without reversing item 3 (4 + 5 + 2 + 3). A reverse-worded item must be flipped first: 6 − 2 = 4."},
      {v:4, tol:0, why:"4 is his average item score (16 ÷ 4), not the total. The question asks for the total."},
      {v:3.5, tol:0, why:"3.5 is the average without reversing item 3 (14 ÷ 4). Reverse the item, then add the four scores."},
      {v:18, tol:0, why:"Check the reversal: on a 1–5 scale the reversed score is 6 − answer, so 2 becomes 4, not 6."}
    ], hint2:"Flip the reverse-worded item with 6 − answer, then add all four."},
    {id:"t4u8-l3-x3", type:"spot", q:"Kenji designed this rating question for a staff survey. Tap each part that is a design problem.", ask:"a design problem", parts:[
      "“How supported do you feel by your manager?”  ",
      {t:"1 = Not at all supported", flag:false, why:"Labelling the end points is good; the problem would be leaving the middle unlabelled."},
      "  ·  ",
      {t:"2, 3, 4, 5, 6 with no labels", flag:true, why:"Unlabelled middle points are less reliable than fully labelled ones; people guess what “4” means."},
      "  ·  ",
      {t:"7 = Completely supported", flag:false, why:"A clear end label on a unipolar scale (from none to complete)."},
      "  ·  ",
      {t:"“Don’t know” placed between 3 and 4", flag:true, why:"Putting “Don’t know” in the middle makes it look like a neutral rating. Place it separately after the scale."},
      "  ·  ",
      {t:"The question is set as required with no way to skip", flag:true, why:"Staff may not want to rate their manager. Making it optional, or offering “Prefer not to say”, respects them and avoids forced answers."},
      "  ·  ",
      {t:"Seven points", flag:false, why:"Seven is a well-supported number of points; reliability tends to level off around there."}
    ]},
    {id:"t4u8-l3-x4", type:"sort", q:"Lucía has 200 answers to one five-point item (“How useful was the workshop?” Not at all … Extremely). Which summaries are safe on their own, and which need extra care?", buckets:["Safe on its own","Needs care or extra information"], items:[
      {t:"A table of how many people chose each option", b:0, why:"A frequency distribution shows everything and assumes nothing about distances between options."},
      {t:"The median answer (“Very useful”)", b:0, why:"The median only needs the order of the options, which ordinal data has."},
      {t:"The mean, 3.7", b:1, why:"A mean assumes the gaps between options are equal, which is debated for single items. If you report it, show the distribution too."},
      {t:"“72% found it very or extremely useful”", b:1, why:"Combining the top two options is common, but it can hide a lot; show the full distribution and the number who answered."},
      {t:"The mode (the most chosen option)", b:0, why:"The mode only needs categories, so it is always safe; just check whether several options are nearly tied."},
      {t:"“Twice as useful for Group B (mean 4) as Group A (mean 2)”", b:1, why:"Ratios like “twice as” need a true zero and equal intervals. A rating of 4 isn’t twice a rating of 2."}
    ]},
    {id:"t4u8-l3-x5", type:"match", q:"Match each design choice to its main consequence.", pairs:[
      ["Removing the neutral midpoint","People with genuinely neutral views are pushed to one side","Krosnick and Presser report this reduces accuracy."],
      ["Labelling every point with words","Answers are more reliable","Fully labelled scales outperform end-labelled ones in their review."],
      ["Using agree–disagree statements","Some people agree whatever the statement says","That’s acquiescence bias; asking directly reduces it."],
      ["Forgetting to reverse-score a negatively worded item","The scale score is wrong for everyone","Agreement with that item means the opposite, so it must be flipped first."]
    ]},
    {id:"t4u8-l3-x6", type:"mcq", q:"Amara wants to measure how much a training course helped participants. She is choosing between “Agree or disagree: The course helped me” and “How much did the course help you? (Not at all / A little / Somewhat / Quite a lot / A great deal)”. Which is better, and why?", options:[
      {t:"The second: it asks about the quality directly, with labelled unipolar options, avoiding acquiescence bias.", ok:true, why:"Asking directly about “how much” matches what she wants to measure, and the labels describe amounts evenly from none to a great deal."},
      {t:"The first, because agree–disagree items are the only real Likert format.", why:"Likert’s original items used approve–disapprove, but direct rating questions are generally more reliable and valid."},
      {t:"The first, because people answer statements faster.", why:"Speed isn’t the goal if the format adds bias. Direct questions are not noticeably harder."},
      {t:"They are identical in quality; the choice doesn’t matter.", why:"Research comparing the formats finds real differences in reliability and validity."}
    ]}
   ],
   apply:{intro:"Practise designing and checking rating questions. No data collection from strangers is needed.", tasks:[
     {t:"Look at an established scale", how:["Search for a published, freely available scale in a field that interests you (for example a wellbeing, loneliness, job satisfaction or health literacy scale; national statistics offices and open-access journals publish some).","Note how many items it has, how many points, whether every point is labelled, and whether any items are reverse-worded.","Check its licence or terms of use: is it free for your purpose?"], write:"Scale name and source… Items, points, labels… Reversed items… Licence…"},
     {t:"Draft a four-item scale of your own", how:["Pick one idea to measure (for example, “confidence using a spreadsheet”).","Write four items that each touch a different side of it.","Choose direct wording and fully labelled options, or agree–disagree if you have a reason.","Write down how you will score it, including any reversed item."], write:"The idea… Four items… Labels… Scoring rule…"},
     {t:"Preview it on a phone", how:["Build the four items in your survey tool, using its multiple-choice or rating question type.","Preview the form on a phone, or shrink your browser window.","Check whether all labels are readable and whether the layout changes on a small screen."], write:"How it looked on a phone… What I changed…"}
   ], proof:"Notes on one established scale (including its licence), your own four-item scale with a scoring rule, and notes from previewing it on a phone."},
   read:[
     {book:"bhatt", where:"Chapter 6, “Measurement of Constructs”", note:"Covers rating scales and scaling methods, including Likert’s."},
     {book:"bhatt", where:"Chapter 7, “Scale Reliability and Validity”", note:"Explains how researchers check that items work together and measure what they claim."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u8-l4", title:"Who answers: samples, nonresponse and the margin of error", minutes:60,
   hook:{q:"In 1936 the US magazine *The Literary Digest* mailed about 10 million ballots and got 2.4 million back. The replies said Alf Landon would beat President Franklin Roosevelt. What happened?", options:["Landon won narrowly","Landon won easily","Roosevelt won in a landslide","The result was a near tie"], answer:2, reveal:"**Roosevelt won in a landslide.** A huge number of replies didn’t help, because of *who* replied. The names came mostly from telephone directories and car registrations, which in 1936 leaned towards wealthier people, and Landon supporters were more likely to send the ballot back. Those are coverage error and nonresponse bias, the two big ideas of this lesson, along with the margin of error."},
   goals:[
     "Trace the path from population to sampling frame to sample to respondents, and name the error at each step",
     "Calculate a response rate and explain why a low one is a warning rather than proof of bias",
     "Calculate and correctly interpret a margin of error for a simple random sample",
     "Estimate the sample size needed for a given margin of error, and know when not to report one"
   ],
   learn:[
    {h:"From population to respondents", body:[
      {lead:"Think of fishing with a net. The lake is your population, the net is your list, the catch is your sample, and the fish that stay in the net long enough to count are your respondents."},
      "The [[population-research|population]] is everyone your question is about, for example all registered nurses in a region. You rarely have a perfect list of them. The list you actually draw from is the [[sampling-frame|sampling frame]]: a professional register, an email list, a school roll, a list of addresses. From it you draw a [[sample]]; from the sample, some people actually answer.",
      {fig:'<svg viewBox="0 0 340 356"><defs><marker id="t4u8-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="8" y="8" width="200" height="50" rx="10" stroke-width="2"/><text x="108" y="38" text-anchor="middle">Population</text><path class="d-ink" d="M108 58 L108 92" stroke-width="2" marker-end="url(#t4u8-l4-a)"/><text x="222" y="72">Coverage error</text><text class="s" x="222" y="88">missing from the list</text><rect class="d-sage" x="23" y="96" width="170" height="50" rx="10" stroke-width="2"/><text x="108" y="126" text-anchor="middle">Sampling frame</text><path class="d-ink" d="M108 146 L108 180" stroke-width="2" marker-end="url(#t4u8-l4-a)"/><text x="222" y="160">Sampling error</text><text class="s" x="222" y="176">chance in who is drawn</text><rect class="d-gold" x="38" y="184" width="140" height="50" rx="10" stroke-width="2"/><text x="108" y="214" text-anchor="middle">Sample</text><path class="d-ink" d="M108 234 L108 268" stroke-width="2" marker-end="url(#t4u8-l4-a)"/><text x="222" y="248">Nonresponse</text><text class="s" x="222" y="264">who doesn’t answer</text><rect class="d-rose" x="53" y="272" width="110" height="50" rx="10" stroke-width="2"/><text x="108" y="302" text-anchor="middle">Respondents</text><text x="222" y="296">Measurement</text><text class="s" x="222" y="312">wording, memory,</text><text class="s" x="222" y="328">wanting to look good</text><text class="s" x="170" y="350" text-anchor="middle">Only sampling error is in the margin of error.</text></svg>', alt:"A narrowing column of four boxes joined by arrows: Population, Sampling frame, Sample, Respondents. Beside each step is the error it can introduce: coverage error (people missing from the list), sampling error (chance in who is drawn), nonresponse (who doesn’t answer), and measurement error (wording, memory, wanting to look good). A note says only sampling error is included in the margin of error.", cap:"Each step from population to respondents can introduce error. The margin of error only describes one of them."},
      "Survey researchers call this whole picture **total survey error**. Matthew Salganik’s free book *Bit by Bit* explains it well, using the *Literary Digest* poll as its example. The rest of this lesson takes the steps in order."
    ]},
    {h:"Sampling frames and coverage", body:[
      "[[coverage-error|Coverage error]] happens when the frame doesn’t match the population: some people can’t be selected at all, or some are listed twice, or people outside the population slip in. It only causes **bias** if the missing people differ from those included on what you are measuring, but they often do.",
      {table:[["Frame","Who it may miss"],["Members’ email list","Members without email, or with old addresses"],["Landline phone directory","People with only mobile phones, unlisted numbers"],["Visitors to a website","Everyone who doesn’t visit it"],["Patients attending a clinic this month","People who need care but can’t get there"]]},
      "In 1936 the *Literary Digest* frame, mainly telephone directories and car registrations, leaned towards wealthier households, which leaned towards Landon. No number of replies from that list could fix it.",
      {tip:"Write down your frame and ask: who is in my population but not on this list? If you can’t fix the gap, describe it honestly in your report."}
    ]},
    {h:"How the sample is drawn", body:[
      "In a [[probability-sampling|probability sample]], every person on the frame has a known, non-zero chance of selection, decided by chance rather than by anyone’s choice. The simplest kind is a **simple** [[random-sample|random sample]], where everyone has the same chance, like drawing names from a well-shaken hat. Stratified and cluster samples are common variations, and Unit 6 covers them in more depth (see {{sampling-methods}}).",
      "Many surveys use [[non-probability-sampling|non-probability]] samples instead: whoever sees a link and chooses to answer, people the researcher can easily reach, or an opt-in online panel. These can be useful for exploring ideas or testing questions, but there is no chance mechanism linking them to the population, so you can’t calculate how far they might be from the truth. Statistical adjustments such as **weighting** (giving under-represented groups more weight) can help, but only for characteristics you have measured, as the sociology unit notes in {{survey-research}}.",
      {key:"How people are chosen matters more than how many. A small probability sample can beat a huge self-selected one."}
    ]},
    {h:"Response rates", body:[
      "The [[response-rate|response rate]] is the share of eligible sampled people who completed the survey. The basic idea is: completed surveys ÷ eligible people in the sample × 100.",
      "Details matter. The American Association for Public Opinion Research (AAPOR) publishes *Standard Definitions* (10th edition, 2023), with several official response-rate formulas. They differ in whether partly completed surveys count and how to treat people whose eligibility is unknown. When you report a rate, say how you calculated it.",
      {ex:"Invited: 800 members of a farmers’ cooperative\nFound to be ineligible (left the cooperative before the survey): 40\nEligible sample: 800 − 40 = 760\nCompleted: 312\nResponse rate = 312 ÷ 760 × 100 = 41.1%\n(Counting all 800 would give 39.0%, an understatement.)", label:"Worked example", mono:true},
      "Ways to raise response: a short survey, a clear invitation from someone people trust, an explanation of why it matters, a design that works on phones, more than one way to answer, and one or two polite reminders. Many surveys also offer small thank-you incentives; check your ethics committee’s rules first."
    ]},
    {h:"Nonresponse bias: who didn’t answer?", body:[
      "[[nonresponse-bias-term|Nonresponse bias]] happens when the people who answer differ from those who don’t **on the things you are measuring**. A staff wellbeing survey answered mostly by people with the time and energy to fill it in may underestimate how stretched everyone is.",
      "A low response rate is a **warning**, not proof of bias. Bias depends on how different the non-responders are. Research comparing surveys has found that lower response rates don’t always mean less accurate results: in a Pew Research Center experiment led by Scott Keeter and published in 2006, a survey with about a 25% response rate and a more intensive one with about 50% gave statistically indistinguishable results on 77 of 84 measures. On the other hand, the *Literary Digest* shows how badly things go when responding is linked to the answer.",
      "**Unit nonresponse** is a whole person not answering; **item nonresponse** is someone skipping particular questions. Both can bias results.",
      {list:[
        "Compare respondents with known figures for the population (age, sex, region from a census or register).",
        "Compare early and late responders: if late ones differ, non-responders may differ further.",
        "Follow up a small group of non-responders with a short version of the survey.",
        "Report the response rate and what you did to check for bias."
      ]}
    ]},
    {h:"The margin of error, carefully", body:[
      "The [[margin-of-error|margin of error]] describes how much a result could differ from the population value **just because of chance in who was sampled**. For a percentage from a **simple random sample**, at the usual 95% confidence level, the standard formula is:",
      {ex:"Margin of error ≈ 1.96 × √( p × (1 − p) ÷ n )\np = the proportion (e.g. 0.5 for 50%)\nn = the number of respondents\nIt is largest when p = 0.5, so surveys often quote that worst case.\nQuick check: at p = 0.5 it is about 1 ÷ √n.", label:"The formula", mono:true},
      {table:[["Respondents (n)","Margin of error at p = 0.5"],["100","±9.8 points"],["400","±4.9 points"],["1,000","±3.1 points"],["2,500","±2.0 points"]]},
      "Read the table carefully: to **halve** the margin of error you need **four times** as many people. And the size of the population hardly matters unless your sample is a large share of it.",
      "**What 95% means**: if you repeated the survey many times with fresh random samples, about 95% of the ranges built this way would contain the true population value. It doesn’t mean there’s a 95% chance the truth lies in this particular range, a common misreading that Unit 3 discusses for confidence intervals.",
      "**Limits that matter just as much:**",
      {list:[
        "It only covers **sampling error**. Coverage, nonresponse and measurement error are extra, so real uncertainty is usually larger.",
        "It applies to **probability samples**. For a self-selected or convenience sample, the formula doesn’t describe anything meaningful.",
        "**Subgroups** have larger margins. Pew Research Center’s example: in a sample of 1,067 (±3 points), a group making up about 15% of it, around 160 people, has a margin of about ±8 points.",
        "The **gap between two results** in the same poll has a larger margin than each result, up to about double when both are near 50%. A 3-point “lead” with ±3 on each figure is not a clear lead.",
        "**Weighting** and complex designs increase the margin (the **design effect**); good surveys report the adjusted figure."
      ]}
    ]},
    {h:"How many people do you need?", body:[
      "Rearranging the formula gives the sample size for a chosen margin of error E (as a proportion), assuming the worst case p = 0.5 and a simple random sample:",
      {ex:"n = 1.96² × p × (1 − p) ÷ E²\nFor ±5 points: 3.8416 × 0.25 ÷ 0.0025 = 384.16 → round up to 385\nFor ±3 points: 3.8416 × 0.25 ÷ 0.0009 = 1,067.1 → 1,068", label:"Worked example", mono:true},
      "For small populations, a **finite population correction** lowers the number: n_adjusted = n ÷ (1 + (n − 1) ÷ N), where N is the population size. For a workplace of 600 staff and ±5 points: 384.16 ÷ (1 + 383.16 ÷ 600) = 234.4, so 235 completed responses.",
      "Then allow for nonresponse. If you expect 40% to respond, you would need to invite about 235 ÷ 0.4 ≈ 588 people, nearly all 600. In a case like this, simply inviting everyone is easier, and the challenge becomes getting a good response.",
      {warn:"These numbers are completed responses from a probability sample. Many small projects, such as student assignments or a club survey, use convenience samples. That’s fine for learning and exploring; just describe the sample honestly and don’t quote a margin of error."}
    ]}
   ],
   try:[
    {id:"t4u8-l4-x1", type:"match", q:"Match each problem to the kind of survey error it causes.", pairs:[
      ["A survey of a city’s residents uses a list of people who own property, missing renters","Coverage error","Renters are in the population but not on the frame, so they can never be selected."],
      ["By chance, a random sample of 200 includes slightly more over-60s than the population","Sampling error","Chance differences between a random sample and its population are sampling error, the only kind the margin of error measures."],
      ["Parents with long working hours are less likely to complete a school survey","Nonresponse bias","The people who don’t answer differ in a way that is likely to matter for the results."],
      ["People over-report how often they exercise to look healthier","Measurement error","The answers themselves are wrong, here because of social desirability."]
    ]},
    {id:"t4u8-l4-x2", type:"number", q:"A survey invites 800 members of a cooperative. Afterwards, 40 turn out to have left before the survey began, so they weren’t eligible. 312 complete it. What is the response rate among eligible members, as a percentage? (one decimal place)", answer:41.1, tol:0.1, unit:"%", why:"Remove the ineligible people first: 800 − 40 = 760 eligible. Then 312 ÷ 760 × 100 = 41.05…, which rounds to 41.1%.", wrongs:[
      {v:39, tol:0.1, why:"39.0% divides by all 800 invited. People who weren’t eligible shouldn’t be in the denominator."},
      {v:58.9, tol:0.1, why:"58.9% is the share of eligible members who didn’t respond (448 ÷ 760). The response rate is the share who did."},
      {v:0.41, tol:0.01, why:"0.41 is the proportion. Multiply by 100 to give a percentage."}
    ], hint2:"Work out how many eligible people were invited, then divide the completed surveys by that."},
    {id:"t4u8-l4-x3", type:"number", q:"A simple random sample of 400 people finds that 50% support a proposal. Using the 95% formula 1.96 × √(p(1 − p) ÷ n), what is the margin of error, in percentage points?", answer:4.9, tol:0.15, unit:"points", why:"1.96 × √(0.5 × 0.5 ÷ 400) = 1.96 × √0.000625 = 1.96 × 0.025 = 0.049, which is 4.9 percentage points. (The quick check 1 ÷ √400 = 0.05, or 5 points, is close.)", wrongs:[
      {v:0.049, tol:0.002, why:"That’s the margin as a proportion. Multiply by 100 to express it in percentage points: 4.9."},
      {v:2.5, tol:0.05, why:"2.5 points is the standard error (√(0.25 ÷ 400) = 0.025). Multiply by 1.96 for the 95% margin."},
      {v:9.8, tol:0.15, why:"9.8 points is the margin for a sample of 100, or double the correct answer. Check that n = 400 under the square root."}
    ], hint2:"Work inside the square root first: 0.5 × 0.5 ÷ 400."},
    {id:"t4u8-l4-x4", type:"mcq", q:"A poll of 1,000 randomly selected adults reports 46% support, with a margin of error of ±3 points at 95% confidence. Which statement is correct?", options:[
      {t:"If the poll were repeated many times with fresh random samples, about 95% of ranges built this way would contain the true population value.", ok:true, why:"That is what the 95% confidence level describes: the long-run success rate of the method."},
      {t:"There is exactly a 95% chance that true support is between 43% and 49%.", why:"This common reading treats the 95% as a probability about this one range. It describes the method over many samples, and the range also ignores non-sampling errors."},
      {t:"The result can’t be more than 3 points wrong.", why:"The margin only covers sampling error, and only 95% of the time. Coverage, nonresponse and wording problems can add more."},
      {t:"Results for young adults in this poll will also be accurate to ±3 points.", why:"Subgroups have fewer people, so their margins are larger."}
    ]},
    {id:"t4u8-l4-x5", type:"sort", q:"Does the margin of error account for each of these?", buckets:["Included in the margin of error","Not included"], items:[
      {t:"Chance differences between a random sample and the population", b:0, why:"That is exactly what the margin of error measures."},
      {t:"People without internet access who couldn’t take a web survey", b:1, why:"That’s coverage error, which the formula ignores."},
      {t:"A leading question that pushed answers towards “yes”", b:1, why:"That’s measurement error from wording. A bigger sample would just measure the same bias more precisely."},
      {t:"People who ignored the invitation and differ from those who replied", b:1, why:"That’s nonresponse bias, which the margin of error doesn’t include."},
      {t:"Having 400 rather than 1,600 respondents", b:0, why:"Sample size is in the formula: four times as many respondents halves the margin."},
      {t:"A sample made up of volunteers who clicked a link on social media", b:1, why:"For a self-selected sample, the margin-of-error formula doesn’t describe anything meaningful."}
    ]},
    {id:"t4u8-l4-x6", type:"mcq", q:"A health board’s patient survey had a 22% response rate. A manager says, “22% is low, so the results are definitely biased and useless.” What is the best response?", options:[
      {t:"A low rate is a warning sign, not proof: check whether respondents differ from all patients on things that matter, such as age, condition and clinic.", ok:true, why:"Bias depends on how different non-responders are. Comparing respondents with known figures for all patients is the right next step."},
      {t:"Agree: anything under 50% is always biased.", why:"Studies, including the Pew comparison published in 2006, have found surveys with low response rates can match higher-response ones closely. It depends on who is missing."},
      {t:"Response rates don’t matter at all if the sample was random.", why:"Even a random sample can be biased if those who reply differ from those who don’t; the Literary Digest is a famous example."},
      {t:"Fix it by adding more volunteers from the waiting room.", why:"Adding self-selected volunteers mixes in a convenience sample. It raises the count but doesn’t fix who is missing."}
    ]},
    {id:"t4u8-l4-x7", type:"number", q:"Using n = 1.96² × p(1 − p) ÷ E² with p = 0.5, how many completed responses from a simple random sample do you need for a margin of error of ±5 percentage points? (Ignore population size.)", answer:385, tol:0, unit:"people", why:"1.96² = 3.8416. 3.8416 × 0.25 = 0.9604. E = 0.05, so E² = 0.0025. 0.9604 ÷ 0.0025 = 384.16. Always round sample sizes up, so 385.", wrongs:[
      {v:384, tol:0, why:"384.16 rounded down gives a margin slightly above ±5. Round sample sizes up: 385."},
      {v:400, tol:0, why:"400 is the quick rule 1 ÷ E² (using 2 instead of 1.96). It is close and slightly cautious, but the question asks for the formula with 1.96."},
      {v:1068, tol:0, why:"1,068 is the size needed for ±3 points. For ±5, use E = 0.05."},
      {v:20, tol:0, why:"20 is 1 ÷ 0.05. You need to square E and include 1.96² × 0.25."}
    ], hint2:"Square 1.96, multiply by 0.25, then divide by 0.05²."}
   ],
   apply:{intro:"Look at real surveys with a critical eye, and plan the numbers for your own.", tasks:[
     {t:"Read a published survey’s methods", how:["Find a survey report from a national statistics office, a research organisation (for example Pew Research Center or a university survey centre) or a government department.","Find its methods or technical section.","Note: the population, the sampling frame, how the sample was drawn, the mode, the response rate (and how it was calculated), whether results were weighted, and the margin of error."], write:"Survey and year… Population and frame… Sampling… Mode… Response rate… Weighting… Margin of error… Who might be missing?…"},
     {t:"Build a margin-of-error calculator in a spreadsheet", how:["In any spreadsheet app, type sample sizes 100, 200, 400, 800 and 1600 in cells A2 to A6.","In B2 type `=1.96*SQRT(0.5*(1-0.5)/A2)*100` and fill it down to B6. (In locales that use a comma as the decimal mark, type the decimals as 1,96 and 0,5; see {{common-functions}}.)","Check that B4 shows about 4.9 and that each doubling of n shrinks the margin by less each time."], write:"My results… What happens when n doubles?…"},
     {t:"Plan your own sample", how:["Describe the population for your planned survey and the frame you could use.","List who might be missing from the frame.","Decide whether you can draw a probability sample. If not, write one sentence describing the sample honestly for your report."], write:"Population… Frame… Who’s missing… Probability sample or not… My honest description…"}
   ], proof:"Notes on one real survey’s methods, a working margin-of-error table, and a written sampling plan that names its gaps."},
   read:[
     {book:"bhatt", where:"Chapter 8, “Sampling”", note:"Populations, frames and probability and non-probability sampling."},
     {book:"bhatt", where:"Chapter 9, “Survey Research”", note:"Its section on biases in survey research covers nonresponse and sampling bias. Response rates have fallen in many countries since 2012."},
     {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3)", note:"Populations, samples and random sampling."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u8-l5", title:"Summarising results honestly", minutes:60,
   hook:{q:"Nine volunteers report how many hours they helped last month: 2, 3, 3, 4, 5, 5, 5, 6 and 30. What is the mean (the usual “average”)?", options:["4.5 hours","5 hours","7 hours","30 hours"], answer:2, reveal:"**7 hours** (63 ÷ 9). Yet eight of the nine volunteers gave 6 hours or fewer: one very committed person pulls the mean up. The **median**, the middle value, is 5 hours, which describes the typical volunteer much better. Choosing the right summary, and the right denominator for percentages, is how survey results stay honest. That’s this lesson."},
   goals:[
     "Organise responses into a tidy table and build a frequency table",
     "Choose between percentages of all respondents and valid percentages, and say which you used",
     "Choose the mean, median or mode to fit the data, and calculate a standard deviation",
     "Build and read a cross-tab with the right percentages",
     "Spot and avoid misleading summaries"
   ],
   learn:[
    {h:"From answers to a tidy table", body:[
      {lead:"Before you count anything, get the data into a shape that makes counting reliable."},
      "Most survey tools export responses as a spreadsheet or a [[csv|CSV file]]. Keep the original download untouched and work on a copy. The layout to aim for is [[tidy-data|tidy data]] (see {{tidy-data}}): **one row per respondent, one column per question**, one value per cell.",
      {list:[
        "Give each respondent an ID number instead of a name.",
        "Keep blanks and special answers distinct: a blank (skipped), “Don’t know”, “Not applicable” and “Prefer not to say” mean different things.",
        "For “tick all that apply” questions, many tools put all choices in one cell; split them into one yes/no column per option.",
        "Write a short **codebook**: each column’s question wording, its possible answers, and how missing answers are coded.",
        "Check for impossible values (an age of 230) and duplicate submissions before analysing."
      ]},
      {tip:"Make a note of every cleaning step. If someone asks why a total changed, you can show exactly what you did."}
    ]},
    {h:"Frequency tables and the right denominator", body:[
      "A [[frequency-table|frequency table]] lists each answer, how many people gave it (the **count**), and the percentage. In a spreadsheet, COUNTIF counts matching answers (see {{countif-sumif}}) and a [[pivot-table|pivot table]] can build the whole table at once (see {{pivot-tables}}).",
      {lab:"fl-countif", t:"Practise: count matching answers with COUNTIF"},
      "The crucial choice is the **denominator**: percent of what? Here are 250 respondents’ answers to “The new opening hours suit me”, where 30 people skipped the question.",
      {table:[["Answer","Count","% of all 250","Valid %"],["Strongly agree","40","16.0%","18.2%"],["Agree","85","34.0%","38.6%"],["Neither","50","20.0%","22.7%"],["Disagree","30","12.0%","13.6%"],["Strongly disagree","15","6.0%","6.8%"],["No answer","30","12.0%","—"],["Total","250","100%","100% (n = 220)"]]},
      "The [[valid-percent|valid percentage]] leaves out people who didn’t answer, so it uses 220 as the denominator. “Agree or strongly agree” is 125 people: **50.0%** of all respondents, or **56.8%** of those who answered. Both are correct; they answer different questions. Say which one you report, and always give **n**, the number it’s based on.",
      {list:[
        "If many people skipped a question, or chose “Don’t know”, that’s a finding in itself. Report it rather than quietly dropping them.",
        "For “tick all that apply” questions, percentages add up to more than 100%, because each person can choose several. Say so.",
        "Rounded percentages may add to 99% or 101%. That’s normal; a note saying “figures may not sum to 100 because of rounding” is enough."
      ]}
    ]},
    {h:"Middle values: mean, median and mode", body:[
      "There are three common ways to describe a “typical” answer:",
      {list:[
        "The [[mean-stat|mean]]: add the values and divide by how many there are. Spreadsheet function: AVERAGE.",
        "The [[median-stat|median]]: the middle value when sorted (with an even count, the mean of the two middle values). Function: MEDIAN.",
        "The [[mode-stat|mode]]: the most common value or category. Function: MODE (Excel also has MODE.SNGL)."
      ]},
      {lab:"fl-average", t:"Practise: calculate an average with AVERAGE"},
      "Which to use depends on the **kind** of data:",
      {table:[["Kind of data","Example","Sensible “middle”"],["Categories with no order","Main way of travelling to work","Mode only"],["Ordered categories (ordinal)","A five-point rating","Median and mode; mean with care (Lesson 3)"],["Numbers, roughly symmetric","Height, test scores","Mean (and median)"],["Numbers with a long tail","Income, hours volunteered","Median, plus the mean if useful"]]},
      "In the warm-up, the mean (7 hours) is pulled up by one person who gave 30 hours; the median (5) and mode (5) describe the typical volunteer. Remove the 30, and the mean drops to 4.1 while the median only moves to 4.5. Medians resist extreme values; means don’t. Neither is “the right average” in general: report what describes your data honestly, and say which you used. The spreadsheet unit’s {{common-functions}} entry has more on these functions."
    ]},
    {h:"Spread: the standard deviation", body:[
      "Two groups can share a mean but differ hugely in how spread out they are. The [[standard-deviation|standard deviation]] (SD) summarises spread: roughly, how far values typically sit from the mean. A small SD means answers cluster closely; a large SD means they are spread out.",
      {ex:"Values: 3, 5, 7, 9   (n = 4)\n1. Mean = (3 + 5 + 7 + 9) ÷ 4 = 6\n2. Differences from the mean: −3, −1, 1, 3\n3. Square them: 9, 1, 1, 9   → sum = 20\n4. Divide by n − 1: 20 ÷ 3 = 6.67   (the variance)\n5. Square root: √6.67 = 2.58   (the standard deviation)", label:"Worked example", mono:true},
      "Why n − 1? When your data is a **sample** and you are estimating the spread in the wider population, dividing by n − 1 corrects a slight underestimate. If your data is the **entire** group you care about, divide by n instead, giving 2.24 here. Spreadsheet functions: STDEV.S (sample) and STDEV.P (whole population) in Excel, Google Sheets and LibreOffice Calc. The older STDEV (sample) and STDEVP (population) work in all of these and in Apple Numbers, which doesn’t have STDEV.S.",
      "Report the SD alongside the mean, for example “mean 6.0 hours (SD 2.6)”. For data with a long tail, the SD is inflated by extreme values just as the mean is: in the volunteer data it is 8.7 hours with the 30 included and 1.4 without. There, the median and the range (or the middle half of the values, the interquartile range) describe the spread better."
    ]},
    {h:"Cross-tabs: comparing groups", body:[
      "A [[crosstab|cross-tab]] (cross-tabulation) counts answers to one question broken down by another, for example cycling to work by age group. A [[pivot-table|pivot table]] builds it in a spreadsheet.",
      {table:[["","Cycles to work","Doesn’t","Total"],["Under 35","50","150","200"],["35 and over","45","255","300"],["Total","95","405","500"]]},
      "Which percentages? Calculate them **within the groups you are comparing**. To compare age groups, use **row percentages**: 50 ÷ 200 = **25%** of under-35s cycle, compared with 45 ÷ 300 = **15%** of those 35 and over.",
      "**Column percentages** answer a different question: of the 95 cyclists, 50 ÷ 95 = 52.6% are under 35. That figure partly reflects how many people are in each age group, so it can’t tell you which group is more likely to cycle.",
      "Describe the difference precisely: 25% versus 15% is a gap of **10 [[percentage-point|percentage points]]**, or a relative difference of 66.7% (10 ÷ 15). Both are true; “10 percentage points” is usually clearer (see {{misleading-numbers}}).",
      {warn:"Cross-tabs show association, not cause (see {{correlation-causation}}). Younger people may cycle more because of where they live or work, not because of age itself. And watch the cell sizes: a percentage built on 12 people can swing a long way by chance."}
    ]},
    {h:"Summaries that mislead", body:[
      "Survey summaries can be accurate number by number and still mislead. Common traps:",
      {list:[
        "**No n.** “75% of members agree” could be 3 of 4 people.",
        "**Hidden denominators.** Switching between valid and all-respondent percentages to make results look better.",
        "**Flattering groupings.** Combining the top three of five options into “positive”, or dropping the neutral middle.",
        "**A mean hiding a split.** A mean of 3 on a five-point item can be everyone neutral, or half at each extreme.",
        "**Ignoring the margin of error.** Reporting a 2-point “rise” when each figure is ±4.",
        "**Generalising from a convenience sample** to “people in this country”.",
        "**Cherry-picking** the questions that support the conclusion, and leaving out the rest.",
        "**Charts that exaggerate** small differences with a cut-off axis (see {{choosing-charts}})."
      ]},
      {fig:'<svg viewBox="0 0 340 296"><text x="170" y="18" text-anchor="middle">Team A: mean 3, median 3</text><path class="d-ink" d="M40 120 L300 120" stroke-width="1.5"/><rect class="d-panel" x="53" y="118" width="34" height="2" stroke-width="1"/><rect class="d-panel" x="103" y="118" width="34" height="2" stroke-width="1"/><rect class="d-gold" x="153" y="40" width="34" height="80" rx="3" stroke-width="1.5"/><rect class="d-panel" x="203" y="118" width="34" height="2" stroke-width="1"/><rect class="d-panel" x="253" y="118" width="34" height="2" stroke-width="1"/><text class="s" x="170" y="34" text-anchor="middle">10</text><text class="s" x="70" y="136" text-anchor="middle">1</text><text class="s" x="120" y="136" text-anchor="middle">2</text><text class="s" x="170" y="136" text-anchor="middle">3</text><text class="s" x="220" y="136" text-anchor="middle">4</text><text class="s" x="270" y="136" text-anchor="middle">5</text><text x="170" y="170" text-anchor="middle">Team B: mean 3, median 3</text><path class="d-ink" d="M40 260 L300 260" stroke-width="1.5"/><rect class="d-rose" x="53" y="220" width="34" height="40" rx="3" stroke-width="1.5"/><rect class="d-panel" x="103" y="258" width="34" height="2" stroke-width="1"/><rect class="d-panel" x="153" y="258" width="34" height="2" stroke-width="1"/><rect class="d-panel" x="203" y="258" width="34" height="2" stroke-width="1"/><rect class="d-sage" x="253" y="220" width="34" height="40" rx="3" stroke-width="1.5"/><text class="s" x="70" y="214" text-anchor="middle">5</text><text class="s" x="270" y="214" text-anchor="middle">5</text><text class="s" x="70" y="276" text-anchor="middle">1</text><text class="s" x="120" y="276" text-anchor="middle">2</text><text class="s" x="170" y="276" text-anchor="middle">3</text><text class="s" x="220" y="276" text-anchor="middle">4</text><text class="s" x="270" y="276" text-anchor="middle">5</text><text class="s" x="170" y="294" text-anchor="middle">answer on a 1–5 scale</text></svg>', alt:"Two bar charts of answers on a 1 to 5 scale from ten people each. Team A: all ten people answered 3, so there is one tall bar in the middle. Team B: five people answered 1 and five answered 5, so there are two bars at the ends and nothing in the middle. Both teams have a mean of 3 and a median of 3.", cap:"Same mean, same median, completely different stories. Show the distribution, not just one number."},
      {key:"An honest summary lets a reader reach the conclusion you did, or a different one, from what you show them."}
    ]},
    {h:"A checklist for an honest report", body:[
      "Good survey reports let readers judge the results for themselves. Include:",
      {ol:[
        "**Who and when**: the population, the dates, and who ran and paid for the survey.",
        "**How people were chosen**: the frame and sampling method, or an honest description of a convenience sample.",
        "**Mode and response**: how people answered, how many were invited, how many responded, and how the response rate was calculated.",
        "**Exact wording** of the questions you report, ideally the whole questionnaire.",
        "**n for every figure**, and whether percentages are of all respondents or valid answers.",
        "**Weighting**, if used, and what it adjusted for.",
        "**Uncertainty**: a margin of error only for a probability sample, and a note that it excludes other errors.",
        "**Limitations**: who may be missing, and what the survey can’t tell you."
      ]},
      "Bhattacherjee’s Chapter 14 goes on to further descriptive statistics, and Unit 3 of this track explains the inferential statistics (p-values and confidence intervals) you’ll meet in published papers."
    ]}
   ],
   try:[
    {id:"t4u8-l5-x1", type:"number", q:"Of 250 respondents, 30 skipped a question. Of the 220 who answered, 40 chose “Strongly agree” and 85 chose “Agree”. What **valid percentage** agreed or strongly agreed? (one decimal place)", answer:56.8, tol:0.1, unit:"%", why:"Agreed or strongly agreed: 40 + 85 = 125. Valid answers: 220. 125 ÷ 220 × 100 = 56.818…, so 56.8%.", wrongs:[
      {v:50, tol:0.1, why:"50.0% uses all 250 respondents as the denominator. A valid percentage uses only the 220 who answered."},
      {v:38.6, tol:0.1, why:"38.6% is “Agree” alone (85 ÷ 220). Add “Strongly agree” too."},
      {v:18.2, tol:0.1, why:"18.2% is “Strongly agree” alone (40 ÷ 220). The question asks for both options combined."},
      {v:0.568, tol:0.002, why:"That’s the proportion. Multiply by 100 for a percentage."}
    ], hint2:"Add the two counts, then divide by the number who answered, not everyone."},
    {id:"t4u8-l5-x2", type:"mcq", q:"Which “middle” value best summarises answers to “What is your main way of travelling to school?” (Walk / Bus / Car / Bicycle / Other)?", options:[
      {t:"The mode: the most common answer", ok:true, why:"These are categories with no order, so only the mode makes sense: it tells you the most common way of travelling."},
      {t:"The mean of the codes 1 to 5", why:"Codes are just labels here; a mean of 2.7 would mean nothing, because “Bus” isn’t halfway between anything."},
      {t:"The median", why:"A median needs ordered values. Walk, bus and car have no natural order from low to high."},
      {t:"The standard deviation", why:"The standard deviation describes spread in numbers, not the typical answer, and doesn’t apply to unordered categories."}
    ]},
    {id:"t4u8-l5-x3", type:"number", q:"Five respondents report hours of sleep: 6, 7, 7, 8, 12. What is the mean? (one decimal place if needed)", answer:8, tol:0.05, unit:"hours", why:"Sum = 6 + 7 + 7 + 8 + 12 = 40. Mean = 40 ÷ 5 = 8.0 hours. Notice that the median is 7 and the mode is 7: the 12 pulls the mean up.", wrongs:[
      {v:7, tol:0.05, why:"7 is the median (the middle value) and also the mode. The mean adds all values and divides by how many: 40 ÷ 5 = 8."},
      {v:40, tol:0.05, why:"40 is the sum. Divide by the number of respondents (5)."},
      {v:9, tol:0.05, why:"9 is halfway between the lowest and highest values (6 and 12), called the midrange. The mean uses every value."}
    ], hint2:"Add all five values, then divide by 5."},
    {id:"t4u8-l5-x4", type:"number", q:"Calculate the **sample** standard deviation (divide by n − 1) of 3, 5, 7, 9. Give two decimal places.", answer:2.58, tol:0.01, unit:"", why:"Mean = 24 ÷ 4 = 6. Differences: −3, −1, 1, 3. Squares: 9, 1, 1, 9, sum 20. Divide by n − 1 = 3: 6.67. Square root: 2.58.", wrongs:[
      {v:2.24, tol:0.01, why:"2.24 divides by n (4) instead of n − 1 (3): that’s the population SD. The question asks for the sample SD."},
      {v:6.67, tol:0.01, why:"6.67 is the variance. Take its square root to get the standard deviation."},
      {v:20, tol:0.01, why:"20 is the sum of squared differences. Divide by n − 1, then take the square root."},
      {v:6, tol:0.01, why:"6 is the mean. The standard deviation measures spread around it."},
      {v:5, tol:0.01, why:"5 is 20 ÷ 4, the population variance. For the sample SD, divide 20 by n − 1 = 3, then take the square root."}
    ], hint2:"Mean first, then squared differences, then ÷ (n − 1), then square root."},
    {id:"t4u8-l5-x5", type:"mcq", q:"In a survey of 500 commuters, 50 of 200 people under 35 cycle to work, and 45 of 300 people aged 35 and over cycle. Which sentence describes the age difference correctly?", options:[
      {t:"25% of under-35s cycle compared with 15% of those 35 and over, a gap of 10 percentage points.", ok:true, why:"Row percentages compare like with like: each age group’s share who cycle. 25 − 15 = 10 percentage points."},
      {t:"52.6% of cyclists are under 35, so younger people are only slightly more likely to cycle.", why:"52.6% is a column percentage (50 of 95 cyclists). It depends on how many people are in each age group, so it can’t show which group is more likely to cycle."},
      {t:"Under-35s are 10% more likely to cycle.", why:"The gap is 10 percentage points. In relative terms, 25% is 66.7% higher than 15%. “10% more likely” is wrong on both counts."},
      {t:"Being under 35 causes people to cycle more.", why:"A cross-tab shows association. Where people live and work, or other factors, may explain the difference."}
    ]},
    {id:"t4u8-l5-x6", type:"spot", q:"Mei is reviewing a draft summary of a community survey. Tap each statement that is misleading or missing something important.", ask:"misleading or incomplete", parts:[
      {t:"“We received 412 responses between 3 and 24 March (response rate 38% of 1,084 invited households).”", flag:false, why:"States n, dates, the number invited and the response rate: exactly what readers need."},
      "\n",
      {t:"“A massive 80% of young people want a skate park!”", flag:true, why:"No n is given. If “young people” were 10 of the 412, 80% is 8 people. Give the subgroup size."},
      "\n",
      {t:"“Overall, satisfaction was positive (mean 3.1 out of 5).”", flag:true, why:"A mean just above the midpoint could hide a split between very satisfied and very dissatisfied people. Show the distribution."},
      "\n",
      {t:"“Support for longer library hours rose from 51% to 53% since last year (margin of error ±5 points).”", flag:true, why:"A 2-point change is well within the margin of error, so calling it a rise overstates it. Say there was no clear change."},
      "\n",
      {t:"“Percentages are of people who answered each question; the number answering is shown under each chart.”", flag:false, why:"Clear about the denominator and n. This is good practice."},
      "\n",
      {t:"“These results show what residents across the whole country think.”", flag:true, why:"A survey of one community can’t speak for a whole country."}
    ]},
    {id:"t4u8-l5-x7", type:"sort", q:"For each set of survey results, which summary of the “typical” value fits best?", buckets:["Mean","Median","Mode"], items:[
      {t:"Monthly household income in a town (a few very high earners)", b:1, why:"Income has a long tail; the median isn’t pulled up by a few very high values."},
      {t:"Favourite type of library event (talks, film, crafts, storytime)", b:2, why:"Unordered categories: only the most common answer makes sense."},
      {t:"Scores on a 40-question knowledge quiz, roughly symmetric with no extreme values", b:0, why:"For roughly symmetric numbers, the mean uses all the information and suits further analysis."},
      {t:"A single five-point item from “Very poor” to “Very good”", b:1, why:"Ordinal answers have a meaningful order but unknown distances, so the median is the conventional choice (with the distribution)."},
      {t:"Country of birth of respondents", b:2, why:"Categories with no order: report the most common, and ideally the full frequency table."},
      {t:"Days waited for a hospital appointment, where most wait under a week but some wait months", b:1, why:"A long tail of very long waits would pull the mean up; the median shows the typical wait."}
    ]}
   ],
   apply:{intro:"Practise on a small invented dataset in any spreadsheet app (Excel, Google Sheets, LibreOffice Calc or Numbers), then write an honest summary.", tasks:[
     {t:"Build a frequency table with valid percentages", how:["In column A, type these 12 answers to “How useful was the session?”, one per row from A2: Very, Very, Quite, Not, Quite, Very, (leave blank), Quite, Extremely, Very, (leave blank), Quite.","In C2 to C5 type the options: Not, Quite, Very, Extremely.","In D2 type `=COUNTIF($A$2:$A$13,C2)` and fill down to D5.","In D6 type `=SUM(D2:D5)` to get the number who answered (it should be 10).","In E2 type `=D2/$D$6` and fill down, then format as percentages. These are valid percentages.","Note how the percentages would change if you divided by all 12 instead."], write:"Counts… Valid percentages… Percentages of all 12… Which I’d report and why…"},
     {t:"See how one value changes the summaries", how:["Type 2, 3, 3, 4, 5, 5, 5, 6, 30 in a column.","Calculate `=AVERAGE(…)`, `=MEDIAN(…)`, `=MODE(…)` and `=STDEV(…)` for the range.","Delete the 30 and watch which numbers change the most."], write:"With 30: mean, median, mode, SD… Without 30… Which summary I’d report…"},
     {t:"Write an honest one-paragraph summary", how:["Using your frequency table, write three or four sentences a reader could trust.","Include n, the denominator you used, the exact question wording, and one limitation (for example, it was a tiny convenience sample).","Check it against the list of misleading summaries in this lesson."], write:"My summary…"}
   ], proof:"A frequency table with counts and valid percentages, a note on how one extreme value changed the mean, median and SD, and a short honest summary with n, wording and a limitation."},
   read:[
     {book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”", note:"Covers preparing data, frequency distributions, central tendency, dispersion and bivariate analysis such as cross-tabulation."}
   ]
  }
  ],
  checkpoint:["t4u8-q02","t4u8-q06","t4u8-q11","t4u8-q14","t4u8-q17","t4u8-q21","t4u8-q24","t4u8-q29","t4u8-q32","t4u8-q36","t4u8-q40","t4u8-q44"],
  codex:[
   {id:"survey-design", title:"Designing a survey", aka:["questionnaire design","survey research","survey mode","question order"], tags:["research","surveys","methods"],
    summary:"When a survey fits a research question, how people answer, and how mode, format and order shape the results.",
    levels:{
     starter:[
      "A [[survey]] asks many people the same questions in the same way, so the answers can be counted and compared. It’s the right tool when your question is about **how many**, **how often** or **how much**, and how that differs between groups or changes over time.",
      "It’s a weaker tool for **why** questions that need follow-up, for proving cause and effect, and for things people can’t remember or don’t want to admit. Interviews, experiments, observation or existing records may fit better.",
      "Answering a question takes four quick steps: understand it, recall the information, form a judgement, and fit it to the options. Each step can go wrong, which is why wording and answer options matter so much.",
      {key:"Before you write a question, check whether someone has already measured what you need, for example a national statistics office."}
     ],
     builder:[
      "**Format.** [[closed-question|Closed questions]] (fixed options) are quick and easy to count but steer people towards the listed answers; [[open-question|open questions]] catch the unexpected but need coding. Pew Research Center found that offering “the economy” as an option raised it from 35% (unprompted) to 58%.",
      "**Mode.** Web and paper forms are self-administered; phone and face-to-face surveys use interviewers. Interviewers help with complex or long surveys and people with low literacy, but they increase socially desirable answers. Web-only surveys miss people offline. Many surveys mix modes.",
      "**Order.** Earlier questions set the context for later ones. Open with an introduction that supports [[informed-consent|informed consent]], then easy, relevant questions; group by topic; use skip logic; put personal background questions near the end unless needed for eligibility; and keep it short.",
      "**A planning habit:** for every question, write down how you will analyse the answer. Questions with no planned use are cut.",
      "**Testing.** Every questionnaire needs testing before launch; see {{piloting}}.",
      {ex:"Research question: How do adult learners in our evening classes travel, and does travel time affect attendance?\nQ1 Main way of travelling → frequency table (mode)\nQ2 Usual travel time in minutes → median and range\nQ3 Classes missed in the past 4 weeks → cross-tab with Q2 bands\nQ4 Age band → only if needed to compare groups", label:"A planning table", mono:true},
      "If a question has no line in a table like this, it probably doesn’t belong in the survey. Writing the table first also shows you which answer formats you need: a number, a category, or a rating."
     ],
     pro:[
      "Survey methodologists describe answering with the four-stage model of Tourangeau, Rips and Rasinski (*The Psychology of Survey Response*, 2000): comprehension, retrieval, judgement and response. Krosnick’s idea of **satisficing**, giving a merely acceptable answer to save effort, explains many effects: choosing the first reasonable option in a visual list (primacy), the last one heard on the phone (recency), agreeing with statements, and picking “Don’t know”.",
      "Context effects come in two kinds. **Assimilation** makes answers to later questions more like earlier ones; **contrast** makes them more different. Pew reports examples of several percentage points from order alone, and notes that asking a specific question before a general one often produces a contrast effect. For trend measurement, wording and order must stay fixed across waves.",
      "**Mode effects** combine coverage (who can be reached), measurement (social desirability, primacy versus recency) and nonresponse. Mixed-mode designs trade comparability for coverage; when comparing modes or waves, check whether a change might simply be a mode change.",
      "The **total survey error** framework (see {{survey-sampling}}) is the standard way to think about all these errors together: coverage, sampling, nonresponse, measurement and processing.",
      "Bhattacherjee’s Chapter 9 (2012) gives a classic overview; for current evidence, Krosnick and Presser’s chapter “Question and Questionnaire Design” in the *Handbook of Survey Research* (2nd ed., 2010) is a widely cited review."
     ]},
    related:["question-wording","piloting","online-survey-tools","survey-sampling","survey-research"],
    read:[{book:"bhatt", where:"Chapter 9, “Survey Research”"}],
    sources:[{t:"Pew Research Center: Writing Survey Questions", url:"https://www.pewresearch.org/writing-survey-questions/"},{t:"Krosnick & Presser (2010), Question and Questionnaire Design (author’s copy, Stanford)", url:"https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2010/2010%20Handbook%20of%20Survey%20Research.pdf"}], checked:"2026-11"},

   {id:"question-wording", title:"Writing good survey questions", aka:["question wording","leading questions","double-barrelled questions","loaded questions","answer options","don’t know option"], tags:["research","surveys","writing"],
    summary:"How to write clear, neutral questions with balanced, complete answer options, and handle memory, sensitive topics and “Don’t know”.",
    levels:{
     starter:[
      "A good question means the same thing to everyone and doesn’t push anyone towards an answer. Common problems:",
      {list:[
        "**Vague words**: “regularly”, “recently”, “household”.",
        "[[leading-question|Leading questions]]: “Don’t you agree…?”",
        "**Loaded words**: “wasteful”, “so-called”.",
        "**Assumptions**: “How much did you enjoy…?”",
        "[[double-barrelled-question|Double-barrelled questions]]: two things, one answer.",
        "**Double negatives**: “Do you oppose not…?”"
      ]},
      "Answer options must cover everyone (add “Other” or “Not applicable”), must not overlap (18–24, 25–34, not 18–25, 25–35), and rating options should be balanced: as many negative steps as positive.",
      {ex:"Before: “Don’t you agree the new bus timetable is much better?”\nAfter: “How does the new bus timetable compare with the old one? Much better / A little better / About the same / A little worse / Much worse / I didn’t use the old one”", label:"Worked example"},
      {tip:"Read every question aloud and imagine answering it as someone whose life is very different from yours: a different age, job, household or country."}
     ],
     builder:[
      "**Be specific about time and units**: “In the past 7 days, on how many days…” beats “How often do you…”. Short, recent reference periods reduce forgetting and **telescoping** (pulling older events into the period).",
      "**Ask directly rather than agree–disagree.** Agree–disagree items invite [[acquiescence-bias|acquiescence bias]]. “How stressful is your commute?” (Not at all … Extremely) usually works better than “Agree or disagree: My commute is stressful.”",
      "**Order effects in lists**: in visual lists people favour early options; in spoken lists, later ones. Randomise the order of unordered lists; never of rating scales.",
      "**“Don’t know” and “Prefer not to say”.** “Don’t know” is honest for factual questions some people can’t answer. For opinions, research reviewed by Krosnick and Presser found it doesn’t reliably improve data quality and can become an easy exit. “Prefer not to say” respects people’s right to decline personal questions. Keep these options visually separate from scales and as separate codes in the data.",
      "**Sensitive questions**: use self-completion, ranges, face-saving wording, explain why you ask, and place them later. This reduces [[social-desirability-bias|social desirability bias]].",
      "**Filter questions** prevent assumptions: ask “Do you have a car?” before asking how often people drive it, and use skip logic so others don’t see the follow-up. Where you can’t list every possibility, add “Other (please specify)” and read those answers: if many people write the same thing, it deserves its own option next time."
     ],
     pro:[
      "Krosnick and Presser (2010) found the conventional rules of thumb largely supported by experiments, and added evidence-based refinements: fully label rating points; prefer construct-specific questions to agree–disagree, yes–no or true–false formats (acquiescence averages around 10% in their review); be wary of reversed items as a fix for acquiescence; and use decomposition, landmarks and bounded recall for behavioural frequency questions. They also note that people should not have to do calculations the researcher can do.",
      "For sensitive behaviours, the evidence favours self-administered modes (web, paper, audio computer-assisted) over interviewers. Specialised techniques such as the **randomised response technique** and the **item count (list) technique** give individual privacy by design, at the cost of statistical precision.",
      "**Cross-cultural and translated surveys** need more than translation: concepts, examples and response scales may not carry the same meaning. Teams commonly use structured approaches such as team translation with review and adjudication, followed by cognitive testing in each language.",
      "**Check-all-that-apply versus forced choice**: when people tick options in a long list, they may stop reading carefully; asking yes/no for each option takes longer but forces a decision on each.",
      "Wording effects can be large. Pew Research Center reports question-wording and context experiments with differences of 10 percentage points or more, so publish exact wording with every result."
     ]},
    related:["survey-design","likert-scales","piloting","misleading-numbers"],
    read:[{book:"bhatt", where:"Chapter 9, “Survey Research”"}],
    sources:[{t:"Krosnick & Presser (2010), Question and Questionnaire Design (author’s copy, Stanford)", url:"https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2010/2010%20Handbook%20of%20Survey%20Research.pdf"},{t:"Pew Research Center: Writing Survey Questions", url:"https://www.pewresearch.org/writing-survey-questions/"}], checked:"2026-11"},

   {id:"likert-scales", title:"Likert scales and rating questions", aka:["Likert item","Likert-type item","rating scale","agree-disagree scale","midpoint","reverse scoring"], tags:["research","surveys","measurement"],
    summary:"What Likert items and scales are, how to design the points and labels, and how to analyse ordinal ratings honestly.",
    levels:{
     starter:[
      "A rating question asks people to place their answer on an ordered set of options, such as **Strongly disagree · Disagree · Neither · Agree · Strongly agree**.",
      "The name comes from Rensis Likert, whose 1932 monograph *A Technique for the Measurement of Attitudes* asked people to respond to several statements on one topic and added their scores into a total.",
      "Strictly, one statement is a **Likert item** (or Likert-type item) and a set of items combined into one score is a [[likert-scale|Likert scale]]. Everyday speech mixes the two.",
      "The numbers 1 to 5 are labels for **ordered** categories, not measurements: “Agree” is more than “Neither”, but we can’t say by how much. That makes rating data [[ordinal-data|ordinal]].",
      {tip:"Show the full spread of answers, not just an average."}
     ],
     builder:[
      "**Points.** Five and seven are common. Krosnick and Presser found reliability rises up to about seven points and then levels off.",
      "**Labels.** Label every point with words; fully labelled scales are more reliable than end-labelled ones. Use **bipolar** labels for feelings with two sides (dissatisfied ↔ satisfied) and **unipolar** labels for amounts (Not at all … Extremely).",
      "**Consistency.** Within one questionnaire, keep the direction of scales the same (for example, always negative on the left or top) so people don’t have to keep re-reading the labels.",
      "**Midpoint.** Omitting it pushes genuinely neutral people to one side; studies have found midpoints can improve reliability and validity. Keep “Don’t know” separate from the scale.",
      "**Scale scores.** Add (or average) the items, reverse-scoring any negatively worded item first: on a 1–k scale, reversed score = (k + 1) − answer. Check the items hang together (for example with Cronbach’s alpha, a [[reliability]] statistic) and prefer established scales with evidence of [[validity]].",
      "**Analysis.** For single items, report the frequency distribution, median and mode. Means are widely used, especially for multi-item scale scores, but should come with the distribution.",
      {ex:"Four items on a 1–5 scale; item 3 is reverse-worded.\nAnswers: 4, 5, 2, 3\nReverse item 3: 6 − 2 = 4\nTotal: 4 + 5 + 4 + 3 = 16 (possible range 4–20)\nMean item score: 16 ÷ 4 = 4.0 (on the original 1–5 scale)", label:"Worked example", mono:true}
     ],
     pro:[
      "**The ordinal-versus-interval debate.** Strictly ordinal data supports medians, percentiles and non-parametric tests. Sullivan and Artino (2013) summarise both sides: means of single items can mislead, but Norman (2010) and others showed that parametric tests (t-tests, ANOVA, regression) are robust with Likert data, particularly summed scales with several items and adequate samples. Many journals accept both; transparency matters more than the choice.",
      "**Acquiescence and reversed items.** Agree–disagree formats invite acquiescence. Balancing a scale with reversed items reduces its effect on total scores but doesn’t remove it, and reversed items can introduce misreading and their own method factors. Construct-specific question formats are an alternative where comparability with established scales isn’t needed.",
      "**Response styles** differ between people and cultures (some favour extremes, others the middle), which complicates cross-national comparison of rating data. Methods such as anchoring vignettes have been developed to adjust for this.",
      "**Visual design** matters on the web: spacing, whether options are shown vertically or as a grid, and how they reflow on phones can shift answers. Grids also encourage “straight-lining” (the same answer down a column).",
      "**Missing items**: if someone skips one item of a multi-item scale, a common approach is to average the items they did answer, provided most were answered; the rule should be decided in advance and reported. Established scales often specify their own scoring and missing-data rules.",
      "Likert’s 1932 monograph described a more complex statistical (“sigma”) scoring method, but also reported that simply scoring the categories 1 to 5 gave totals correlating about 0.99 with it. Later writers such as Ferguson (1941) cite this as a reason the simple method spread."
     ]},
    related:["question-wording","descriptive-statistics","survey-design"],
    read:[{book:"bhatt", where:"Chapter 6, “Measurement of Constructs”"},{book:"bhatt", where:"Chapter 7, “Scale Reliability and Validity”"}],
    sources:[{t:"Sullivan & Artino (2013), Analyzing and Interpreting Data From Likert-Type Scales, J Grad Med Educ 5(4)", url:"https://montana.edu/msse/archive/old-files/jgme-5-4-18.pdf"},{t:"Krosnick & Presser (2010), Question and Questionnaire Design (author’s copy, Stanford)", url:"https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2010/2010%20Handbook%20of%20Survey%20Research.pdf"},{t:"Ferguson (1941), A Study of the Likert Technique of Attitude Scale Construction (Mead Project archive)", url:"https://brocku.ca/MeadProject/sup/Ferguson_1941.html"}], checked:"2026-11"},

   {id:"survey-sampling", title:"Sampling for surveys and the margin of error", aka:["sampling frame","coverage error","margin of error","sample size","total survey error","design effect"], tags:["research","surveys","statistics"],
    summary:"From population to frame to sample to respondents; coverage and sampling error; how to calculate and correctly read a margin of error and a sample size.",
    levels:{
     starter:[
      "You usually can’t ask everyone in a [[population-research|population]], so you ask a [[sample]]. You draw it from a list, the [[sampling-frame|sampling frame]]. If people are missing from that list, that’s [[coverage-error|coverage error]].",
      "In a random sample, chance decides who is picked, so the sample tends to look like the population. Even so, by chance it won’t match exactly. The [[margin-of-error|margin of error]] describes how big that chance difference is likely to be.",
      "Bigger samples have smaller margins, but with diminishing returns: you need **four times** as many people to **halve** the margin. A random sample of about 1,000 gives roughly ±3 percentage points.",
      {key:"The margin of error only covers chance. It doesn’t cover a bad list, people who didn’t answer, or badly worded questions."}
     ],
     builder:[
      "**Formula** (a proportion, simple random sample, 95% confidence): margin ≈ 1.96 × √(p(1 − p) ÷ n). It is largest at p = 0.5, where it is about 1 ÷ √n. For n = 400: 1.96 × √(0.25 ÷ 400) = 0.049, or ±4.9 points.",
      "**Meaning**: across many repeated random samples, about 95% of ranges built this way would contain the true value. It is not a 95% probability about one particular range.",
      "**Sample size** for margin E: n = 1.96² × p(1 − p) ÷ E². For ±5 points, 384.16, so 385; for ±3, 1,068. These are completed responses, so divide by the expected response rate to find how many to invite.",
      "**Subgroups** have fewer people and larger margins. Pew Research Center’s example: about 160 people within a sample of 1,067 have a margin of about ±8 points. The **difference** between two figures in the same poll has a margin up to about double each figure’s.",
      "**Non-probability samples** (volunteers, convenience, opt-in panels) have no chance mechanism, so the formula doesn’t apply. Describe them honestly instead.",
      {ex:"Whole sample: n = 1,000, 50% → 1.96 × √(0.25 ÷ 1,000) = ±3.1 points\nSubgroup of 250 people: 1.96 × √(0.25 ÷ 250) = ±6.2 points\nSubgroup of 100 people: 1.96 × √(0.25 ÷ 100) = ±9.8 points", label:"Worked example: subgroups", mono:true}
     ],
     pro:[
      "**Finite population correction**: when the sample is a large share of the population, n_adj = n ÷ (1 + (n − 1) ÷ N). For N = 600 and ±5 points, 384.16 becomes about 235. With expected nonresponse, inviting everyone (a census attempt) is often simpler for small populations.",
      "**Design effect**: stratification can reduce variance; clustering and weighting usually increase it. The design effect (deff) is the ratio of the actual variance to that of a simple random sample of the same size, and the effective sample size is n ÷ deff. Pew notes that weighting makes the margin of error larger and that good pollsters report the adjusted figure.",
      "**Total survey error**: a widely used version of the framework, from Robert Groves and colleagues, groups errors into representation (coverage, sampling, nonresponse, adjustment) and measurement (validity, measurement error, processing). Salganik’s *Bit by Bit* (Section 3.3) gives a readable account of representation and measurement errors. Large “big data” or opt-in samples can have tiny sampling error yet large bias, which is why a famously huge sample like the 1936 *Literary Digest* poll (2.4 million replies) failed.",
      "**Probability-based online panels** recruit members offline (for example by address-based sampling) and then survey them online, combining a known selection mechanism with web efficiency. Opt-in panels rely on modelling and weighting, which some studies find can work for some measures and fail for others.",
      "The confidence-interval logic behind the margin of error is the same as in Unit 3 of this track."
     ]},
    related:["nonresponse-bias","survey-research","descriptive-statistics","crosstabs"],
    read:[{book:"bhatt", where:"Chapter 8, “Sampling”"}],
    sources:[{t:"Pew Research Center (2016): 5 key things to know about the margin of error in election polls", url:"https://www.pewresearch.org/short-reads/2016/09/08/understanding-the-margin-of-error-in-election-polls/"},{t:"Salganik, Bit by Bit, Section 3.3.1 “Representation”", url:"https://www.bitbybitbook.com/en/1st-ed/asking-questions/total-survey-error/representation/"}], checked:"2026-11"},

   {id:"nonresponse-bias", title:"Response rates and nonresponse bias", aka:["response rate","nonresponse","unit nonresponse","item nonresponse","AAPOR Standard Definitions"], tags:["research","surveys","bias"],
    summary:"How to calculate a response rate, why a low one is a warning rather than proof of bias, and how to check for and reduce nonresponse bias.",
    levels:{
     starter:[
      "The [[response-rate|response rate]] is the share of eligible people you invited who completed the survey: completed ÷ eligible invited × 100. If 312 of 760 eligible people answer, the rate is 41.1%.",
      "[[nonresponse-bias-term|Nonresponse bias]] happens when people who don’t answer differ from those who do on the things you are measuring. If busy parents skip a school survey about homework time, the results may describe less busy families.",
      "A low response rate is a **warning light**, not proof of bias. What matters is **who** is missing. The 1936 *Literary Digest* poll got 2.4 million replies and still predicted the wrong winner, partly because supporters of one candidate were more likely to send their ballots back.",
      {tip:"Always report your response rate and how you calculated it."}
     ],
     builder:[
      "**Calculating it properly.** Remove people who turn out to be ineligible (moved away, not in the population) from the denominator. The American Association for Public Opinion Research (AAPOR) publishes *Standard Definitions* (10th edition, 2023) with several standard response-rate formulas; they differ in whether partial completions count and how cases of unknown eligibility are treated. Name the one you used.",
      "**Unit and item nonresponse.** Unit nonresponse is a whole person missing; item nonresponse is skipped questions. Both can bias results.",
      "**Raising response**: short and mobile-friendly questionnaires, a trusted sender, a clear purpose, advance notice, reminders, several ways to respond, and (where ethics rules allow) small incentives.",
      "**Checking for bias**: compare respondents with known population figures (age, region, sex from a census or register); compare early and late responders; follow up a sample of non-responders; and look at whether results change when weighted to known totals.",
      "**Evidence**: in a Pew Research Center experiment published in 2006 (Keeter and colleagues, *Public Opinion Quarterly*), a standard survey (about 25% response) and a more rigorous one (about 50%) gave statistically indistinguishable results on 77 of 84 comparisons.",
      "That evidence doesn’t mean response rates are irrelevant: the same study found some measures differed by several points, and the *Literary Digest* shows how badly things go when the decision to respond is linked to the answer. Report both the rate and the checks you made, and report item nonresponse (how many skipped each question) alongside each result."
     ],
     pro:[
      "Nonresponse bias for an estimate depends on two things together: the nonresponse rate and the difference between respondents and nonrespondents on that variable. Equivalently, bias arises when the propensity to respond is correlated with the survey variable. This is why response rates are weak predictors of bias across surveys, and why bias can differ from one question to another within the same survey.",
      "Response rates for many household and telephone surveys have fallen substantially since the 1990s in many countries. The field’s response has been weighting (post-stratification, raking to population margins), nonresponse follow-up, responsive or adaptive designs (changing effort or mode for under-represented groups during fieldwork), and probability-based panels.",
      "**Weighting only corrects what it measures.** If nonresponse is linked to the outcome even within weighting groups (for example, civic engagement in a survey about volunteering), weighting by age, sex and region won’t remove it. Survey researchers often report that politically or civically engaged people are over-represented among respondents.",
      "**Item nonresponse** is often handled by imputation (filling in plausible values using other information) in large surveys; small surveys should at least report missing-data counts per question.",
      "AAPOR’s codes also define cooperation, refusal and contact rates, which help diagnose where nonresponse comes from (people not reached versus people declining)."
     ]},
    related:["survey-sampling","survey-design","descriptive-statistics"],
    read:[{book:"bhatt", where:"Chapter 9, “Survey Research”"}],
    sources:[{t:"AAPOR: Standard Definitions", url:"https://www.aapor.org/Standards-Ethics/Standard-Definitions"},{t:"Salganik, Bit by Bit, Section 3.3.1 “Representation”", url:"https://www.bitbybitbook.com/en/1st-ed/asking-questions/total-survey-error/representation/"}], checked:"2026-11"},

   {id:"online-survey-tools", title:"Online survey tools and data privacy", aka:["Google Forms","Microsoft Forms","LimeSurvey","KoboToolbox","Qualtrics","web survey"], tags:["research","surveys","tools","privacy"],
    summary:"Free and paid tools for building online surveys, and how to choose one with data location, identity settings and data protection in mind.",
    levels:{
     starter:[
      "Most small surveys are built with an online form tool. Some widely used options (checked November 2026; plans change):",
      {list:[
        "**Google Forms**: free with a Google account; responses can go straight to Google Sheets.",
        "**Microsoft Forms**: free with a Microsoft account; free personal accounts allow up to 200 responses per form.",
        "**LimeSurvey**: open-source software you can install yourself, or use as a hosted Cloud service (the free Cloud plan is small: 25 responses a month).",
        "**KoboToolbox**: designed for field data collection, including offline; its free Community plan is for students, non-profits and educational institutions, with paid plans for personal or business use.",
        "**Qualtrics**: a paid platform many universities and organisations licence."
      ]},
      "Whatever you use, ask: where are the answers stored, who can see them, and does the tool record anything that identifies people?",
      "Also check the practical things: does the form work well on a phone, can people save and come back, and can you download the answers as a spreadsheet?",
      {key:"A survey is only anonymous if the tool truly collects nothing identifying."}
     ],
     builder:[
      "**Choosing.** Consider cost and response limits, question types (rating grids, skip logic, randomised option order), phone friendliness, offline needs, languages, export formats ([[csv|CSV]] for analysis), accessibility, and what your organisation or ethics committee approves.",
      "**Data location.** LimeSurvey Cloud asks you to choose the server country when you create an instance (options include Australia, Canada, Finland, Germany, Singapore, the United Kingdom and the USA), and LimeSurvey Community Edition stores data wherever you install it. KoboToolbox runs a Global server and a European Union server for people who need data hosted in the EU. Google and Microsoft store personal-account data under their standard terms; some paid organisational plans offer more control over where some data is stored.",
      "**Identity settings.** Many tools can record sign-in email addresses, require sign-in, limit people to one response, or log technical details such as IP addresses. Turn off what you don’t need, and describe accurately what you collect: “anonymous” and confidential are different promises.",
      "**Law and ethics.** Survey answers are often [[personal-data|personal data]]. Laws such as the EU’s [[gdpr|GDPR]] regulate storage and transfers, and research ethics committees expect a data plan (see {{data-protection-laws}} and {{research-ethics}}). Rules vary by country and institution.",
      "**Accessibility.** Test the form with a screen reader or your device’s zoom settings if you can, use clear labels rather than images of text, avoid colour-only cues, and keep grids small. People using assistive technology or older phones should be able to answer as easily as everyone else."
     ],
     pro:[
      "**Offline and field collection.** KoboToolbox forms can be completed offline in the KoboCollect Android app, or in web forms that cache in the browser once opened online, with submissions sent when a connection returns. Its documentation says data on both servers is stored with Amazon Web Services.",
      "**Self-hosting.** Installing LimeSurvey Community Edition (GNU GPL v2 or later) on your institution’s server keeps data in-house and removes response limits, but makes you responsible for security, backups and updates.",
      "**Organisational accounts.** Work or school Microsoft 365 and Google Workspace accounts follow the organisation’s settings, may restrict responses to people inside it (which records identity), and may store data in specific regions under the organisation’s contract. Ask your IT or research office which tools are approved for personal or sensitive data.",
      "**Linked data.** Responses often flow into a spreadsheet or cloud folder whose sharing settings differ from the form’s. Check both, and remember collaborators and anyone with a results link.",
      "**Retention.** Decide in advance how long raw responses are kept, where de-identified copies live, and how deletion is done; data-protection laws generally require you not to keep personal data longer than necessary.",
      "**Microsoft Forms limits** (per Microsoft’s support page): up to 200 responses per form for free personal accounts, 1,000 for paid personal accounts, and far more for work and school accounts; limits change, so check before planning a large survey."
     ]},
    related:["survey-design","piloting","data-protection-laws","research-ethics"],
    sources:[{t:"Microsoft Support: Form, question, response, and character limits in Microsoft Forms", url:"https://support.microsoft.com/en-US/Forms/form-question-response-and-character-limits-in-microsoft-Forms"},{t:"LimeSurvey FAQ: Where and how is my survey data hosted/stored?", url:"https://www.limesurvey.org/support/faq/39-data-protection-and-policy/515-where-and-how-is-my-survey-data-hosted-stored"},{t:"KoboToolbox documentation: Data storage", url:"https://support.kobotoolbox.org/data_storage.html"}], checked:"2026-11"},

   {id:"piloting", title:"Piloting and cognitive testing", aka:["pretesting","pilot study","cognitive interview","think-aloud","verbal probing","expert review"], tags:["research","surveys","methods"],
    summary:"How to test a questionnaire before launch: expert review, cognitive interviews, and a full pilot run.",
    levels:{
     starter:[
      "You can’t see the problems in your own questions, because you already know what you meant. Testing shows you how other people read them.",
      "A [[cognitive-interview|cognitive interview]] is a one-to-one session where someone answers your questions while saying what they are thinking, and you ask gentle follow-up questions such as “What does ‘household’ mean to you here?”",
      "A [[pilot-study|pilot]] is a small trial run of the whole survey, exactly as you plan to send it, to check timing, instructions, skip logic and the data you get back.",
      "Pew Research Center calls pretesting an essential step in questionnaire design.",
      "Think of it like a dress rehearsal: the script may look perfect on paper, but only a run-through shows where actors stumble.",
      {tip:"Even testing with two or three people who are like your respondents will catch problems."}
     ],
     builder:[
      "**A typical sequence**: expert review → cognitive interviews → revise → pilot → revise → launch.",
      "**Expert review**: an experienced colleague critiques the draft. Krosnick and Presser note it needs no data collection and is relatively cheap.",
      "**Cognitive interviews** use two techniques: **thinking aloud** (people narrate as they answer) and **probing** (comprehension: “What does this question mean to you?”; recall: “How did you work out that number?”; paraphrase: “Can you put the question in your own words?”; confidence: “How sure are you?”). Keep probes neutral. Interview a handful of people in rounds, revising between rounds.",
      "**Pilot checks**: completion time on a phone and a computer; where people stop; which questions are skipped; whether skip logic works; whether open answers suggest a missing option; and whether the exported data has the columns and codes you expect.",
      "Pilot participants normally aren’t included in the final results if questions changed afterwards.",
      {ex:"Question: “How many people live in your household?”\nProbe: “Who did you include when you counted?”\nAnswer: “Me, my partner, our daughter… and my son, who’s at university most of the year. I wasn’t sure about him.”\nFix: add a definition, e.g. “Include people who usually live here, including students who live here outside term time.”", label:"Worked example: a probe that found a problem"},
      "Keep a simple log for each question: what testers said, what you changed, and why. It makes the methods section of your report easy to write."
     ],
     pro:[
      "Krosnick and Presser describe four main pretesting methods: conventional pretests (a small field trial with interviewer debriefing), cognitive interviewing, **behaviour coding** (systematically coding interviewer–respondent exchanges, such as requests for clarification or interviewers changing wording, which have been linked to lower item reliability), and expert review. Each finds different problems, so they are often combined.",
      "They caution that thinking aloud may itself change how people answer, so cognitive interviews are better at revealing misunderstandings than at reproducing the real survey experience.",
      "Other methods include **split-ballot experiments** (randomly giving two versions of a question in a pilot to compare results), **paradata** from web surveys (time per question, changed answers, break-off points), and **respondent debriefing** questions at the end of a pilot.",
      "For translated or cross-cultural surveys, cognitive testing in each language and cultural group checks whether concepts carry the same meaning, not just whether the words were translated correctly.",
      "In large statistical agencies, questionnaire testing is a specialist function with published reports; reading a few such reports is a good way to see how professional teams document problems and fixes.",
      "**How many cognitive interviews?** There is no fixed number; practice usually involves small rounds (often in the range of five to fifteen people), with revisions between rounds until no new serious problems appear. Including people from different backgrounds within the target population matters more than the total count."
     ]},
    related:["survey-design","question-wording","online-survey-tools"],
    sources:[{t:"Krosnick & Presser (2010), Question and Questionnaire Design (author’s copy, Stanford)", url:"https://web.stanford.edu/dept/communication/faculty/krosnick/docs/2010/2010%20Handbook%20of%20Survey%20Research.pdf"},{t:"Pew Research Center: Writing Survey Questions", url:"https://www.pewresearch.org/writing-survey-questions/"}], checked:"2026-11"},

   {id:"descriptive-statistics", title:"Describing survey results", aka:["descriptive statistics","frequency table","valid percent","mean","median","mode","standard deviation"], tags:["statistics","surveys","data"],
    summary:"Frequency tables, valid percentages, the mean, median and mode, and the standard deviation, with when to use each and how to calculate them.",
    levels:{
     starter:[
      "Descriptive statistics summarise what your data says about the people who answered.",
      {list:[
        "A [[frequency-table|frequency table]] lists each answer with its count and percentage.",
        "A [[valid-percent|valid percentage]] leaves out people who didn’t answer that question. Always say which denominator you used, and give n.",
        "The [[mean-stat|mean]] adds up the values and divides by how many; the [[median-stat|median]] is the middle value; the [[mode-stat|mode]] is the most common.",
        "The [[standard-deviation|standard deviation]] shows how spread out the values are."
      ]},
      "Example: nine volunteers gave 2, 3, 3, 4, 5, 5, 5, 6 and 30 hours. The mean is 7, but the median and mode are both 5. One very high value pulls the mean up.",
      {tip:"Always give n, the number of people a figure is based on, and say whether percentages are of everyone or only of those who answered."}
     ],
     builder:[
      "**Pick the summary to fit the data.** Unordered categories: mode and percentages. [[ordinal-data|Ordinal]] ratings: frequency distribution, median, mode (means with care). Roughly symmetric numbers: mean and SD. Skewed numbers (income, waiting times): median and interquartile range, possibly with the mean.",
      "**Standard deviation by hand** for 3, 5, 7, 9: mean 6; squared differences 9, 1, 1, 9; sum 20; divide by n − 1 = 3 to get 6.67; square root 2.58. Dividing by n instead gives the population SD, 2.24.",
      "**In spreadsheets**: COUNTIF for counts ({{countif-sumif}}), AVERAGE, MEDIAN, MODE ({{common-functions}}), and STDEV.S or STDEV.P in Excel, Google Sheets and LibreOffice Calc (the older STDEV and STDEVP do the same and also work in Apple Numbers). Excel’s STDEV.S ignores text and empty cells in a range, so “Prefer not to say” typed in a numeric column won’t be counted, but check how your app treats them.",
      "**Missing data**: keep “Don’t know”, “Not applicable”, “Prefer not to say” and blanks as separate codes, report how many there were, and don’t let them become zeros.",
      "Check-all-that-apply questions give percentages that add to more than 100%.",
      "**Present numbers clearly**: a frequency table or simple bar chart for categories, a table of median and range (or mean and SD) for numeric answers, and the exact question wording under each table or chart."
     ],
     pro:[
      "**Why n − 1.** The sample mean is closer to the sample values than the true population mean is, so squared deviations around it underestimate population variance; dividing by n − 1 (Bessel’s correction) makes the variance estimate unbiased. The SD itself remains slightly biased, but this is the standard convention.",
      "**Robust summaries**: median, interquartile range (Q3 − Q1) and trimmed means resist outliers. Spreadsheet quartile functions use different interpolation methods (for example QUARTILE.INC versus QUARTILE.EXC in Excel), so small datasets can give different quartiles in different apps; state the method.",
      "**Weighted estimates**: when surveys are weighted, every summary (percentages, means, SDs, cross-tabs) should use the weights, and the n reported should distinguish the unweighted count of respondents from weighted totals.",
      "**Rounding and precision**: report percentages to whole numbers or one decimal place; more digits imply precision a sample can’t deliver. With n under about 30 to 50, consider giving counts rather than percentages.",
      "**Outliers**: check extreme values before deciding what to do. A typing error (230 instead of 23) should be corrected or removed with a note; a real but unusual value should normally stay, with robust summaries reported alongside.",
      "**Reporting standards**: professional codes such as AAPOR’s call for disclosure of sample size, wording, weighting and precision, so that readers can judge results. Bhattacherjee’s Chapter 14 covers these descriptive tools; inferential statistics follow in Chapter 15 and in Unit 3 of this track."
     ]},
    related:["crosstabs","likert-scales","misleading-numbers","common-functions"],
    read:[{book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”"}],
    sources:[{t:"Microsoft Support: STDEV.S function", url:"https://support.microsoft.com/en-us/excel/functions/stdev-s-function"},{t:"Sullivan & Artino (2013), Analyzing and Interpreting Data From Likert-Type Scales, J Grad Med Educ 5(4)", url:"https://montana.edu/msse/archive/old-files/jgme-5-4-18.pdf"}], checked:"2026-11"},

   {id:"crosstabs", title:"Cross-tabulations", aka:["crosstab","cross-tab","contingency table","row percentages","column percentages","two-way table"], tags:["statistics","surveys","data"],
    summary:"Tables that break one question down by another, how to choose row or column percentages, and how to read them without overclaiming.",
    levels:{
     starter:[
      "A [[crosstab|cross-tab]] shows answers to one question split by answers to another, for example whether people cycle to work, split by age group.",
      {table:[["","Cycles","Doesn’t","Total"],["Under 35","50","150","200"],["35+","45","255","300"]]},
      "To compare the age groups, work out the percentage **within each group**: 50 of 200 is 25%; 45 of 300 is 15%. Comparing raw counts (50 versus 45) would mislead, because the groups are different sizes.",
      "The gap is **10 [[percentage-point|percentage points]]**. Percentages within each group show that cycling is clearly more common among the younger group in this survey.",
      "Remember that a cross-tab shows that two things go together, not that one causes the other.",
      {tip:"A [[pivot-table|pivot table]] in any spreadsheet app builds cross-tabs quickly."}
     ],
     builder:[
      "**Row or column percentages?** Put the groups you are comparing (often the explanatory variable, such as age group) in the rows, and calculate row percentages so each row adds to 100%. Column percentages answer a different question: “of the cyclists, what share are under 35?” (50 of 95 = 52.6%), which depends on how big each group is.",
      "**Always show the bases** (the n for each group). A percentage based on 12 people is very uncertain.",
      "**Percentage points versus percent**: 25% versus 15% is 10 percentage points, or 66.7% higher in relative terms. Be explicit (see {{misleading-numbers}}).",
      "**Association, not cause**: a cross-tab shows that two answers go together. A third variable (where people live, the kind of work they do) may explain it. Adding a third variable as a separate layer, for example the same table for city and rural respondents, can reveal this. See {{correlation-causation}}.",
      "**Margins of error for subgroups** are larger than for the whole sample (see {{survey-sampling}}).",
      "**Layout tips**: give each table a title that states both variables, show the n for every row, round percentages to whole numbers or one decimal place, and put the percentages you want readers to compare side by side. A note under the table should say whether figures are row or column percentages."
     ],
     pro:[
      "**Testing association.** The chi-square test of independence asks whether a pattern as strong as the one observed would be unlikely if there were no association in the population. It assumes a probability sample and reasonably large expected counts in each cell (a common rule of thumb is at least 5). A significant result says nothing about the size or importance of the difference; report the percentages and, where useful, an effect-size measure such as Cramér’s V. Unit 3 of this track covers significance testing.",
      "**Simpson’s paradox**: an association in a combined table can shrink, vanish or reverse within every subgroup when a third variable is controlled, because the groups have different compositions. This is why layered tables or multivariable models matter.",
      "**Ordinal variables** in cross-tabs (rating by group) can be summarised by comparing distributions or medians; collapsing categories should be decided in advance and reported.",
      "**Weighted cross-tabs** should use survey weights for percentages, while reporting unweighted bases so readers know how many people each figure rests on.",
      "**Multiple comparisons**: scanning dozens of cross-tabs for “interesting” differences will turn up some by chance alone, so decide on the main comparisons in advance.",
      "**Small cells and disclosure**: in small surveys, a cross-tab cell with one or two people can identify someone (the only respondent over 65 in a small team, for example). Many organisations suppress or merge small cells before publishing for this reason."
     ]},
    related:["descriptive-statistics","correlation-causation","survey-sampling","pivot-tables"],
    read:[{book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”"}],
    sources:[{t:"Pew Research Center (2016): 5 key things to know about the margin of error in election polls", url:"https://www.pewresearch.org/short-reads/2016/09/08/understanding-the-margin-of-error-in-election-polls/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"questionnaire", term:"Questionnaire", def:"The fixed set of questions, answer options and instructions used in a survey, whether people fill it in themselves or an interviewer reads it out.", codex:"survey-design"},
   {id:"closed-question", term:"Closed question", def:"A question with a fixed list of answers to choose from, such as multiple choice or a rating scale.", codex:"survey-design"},
   {id:"open-question", term:"Open question", def:"A question people answer in their own words. It catches unexpected answers but must be read and coded before counting.", codex:"survey-design"},
   {id:"likert-scale", term:"Likert scale", def:"Strictly, a set of rating items about one idea whose scores are combined into one total; loosely, any agree–disagree rating question. Named after Rensis Likert (1932).", codex:"likert-scales"},
   {id:"leading-question", term:"Leading question", def:"A question worded to push people towards a particular answer, such as “Don’t you agree that…?”", codex:"question-wording"},
   {id:"double-barrelled-question", term:"Double-barrelled question", def:"A question that asks about two things but allows only one answer, such as “How satisfied are you with the cost and quality?”", codex:"question-wording"},
   {id:"response-rate", term:"Response rate", def:"The percentage of eligible people invited to a survey who completed it. Say how you calculated it.", codex:"nonresponse-bias"},
   {id:"nonresponse-bias-term", term:"Nonresponse bias", def:"Error that arises when the people who don’t answer a survey differ from those who do on the things being measured.", codex:"nonresponse-bias"},
   {id:"sampling-frame", term:"Sampling frame", def:"The actual list or source a sample is drawn from, such as a register, an email list or a list of addresses. Ideally it matches the population.", codex:"survey-sampling"},
   {id:"pilot-study", term:"Pilot (pilot study)", def:"A small trial run of a survey or study, exactly as planned, to find problems before the real thing.", codex:"piloting"},
   {id:"mean-stat", term:"Mean", def:"The sum of the values divided by how many there are; the usual “average”. Pulled strongly by extreme values.", codex:"descriptive-statistics"},
   {id:"median-stat", term:"Median", def:"The middle value when the values are sorted (with an even count, halfway between the two middle ones). Little affected by extreme values.", codex:"descriptive-statistics"},
   {id:"mode-stat", term:"Mode", def:"The most common value or category. The only “average” that works for unordered categories.", codex:"descriptive-statistics"},
   {id:"standard-deviation", term:"Standard deviation", def:"A measure of spread: roughly how far values typically lie from the mean. For a sample, it is calculated by dividing by n − 1.", codex:"descriptive-statistics"},
   {id:"crosstab", term:"Cross-tab (cross-tabulation)", def:"A table that shows answers to one question broken down by answers to another, such as cycling to work by age group.", codex:"crosstabs"},
   {id:"margin-of-error", term:"Margin of error", def:"For a probability sample, how far a result could differ from the population value because of chance in who was sampled, usually at 95% confidence. It excludes other errors.", codex:"survey-sampling"},
   {id:"frequency-table", term:"Frequency table", def:"A table listing each possible answer with how many people gave it and the percentage.", codex:"descriptive-statistics"},
   {id:"ordinal-data", term:"Ordinal data", def:"Categories with a meaningful order but unknown distances between them, such as “Poor, Fair, Good, Very good”.", codex:"likert-scales"},
   {id:"acquiescence-bias", term:"Acquiescence bias", def:"The tendency of some respondents to agree with statements regardless of what they say, which distorts agree–disagree questions.", codex:"question-wording"},
   {id:"social-desirability-bias", term:"Social desirability bias", def:"The tendency to give answers that make you look good, such as over-reporting voting or under-reporting drinking.", codex:"question-wording"},
   {id:"cognitive-interview", term:"Cognitive interview", def:"A one-to-one test of survey questions in which a person thinks aloud and answers probes, showing how they understand each question.", codex:"piloting"},
   {id:"coverage-error", term:"Coverage error", def:"Error that arises when the sampling frame leaves out (or wrongly includes) members of the population, so some people can never be selected.", codex:"survey-sampling"},
   {id:"valid-percent", term:"Valid percentage", def:"A percentage calculated only from people who answered a question, leaving out those who skipped it. Always state which denominator you used.", codex:"descriptive-statistics"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t4u8-q01", lesson:"t4u8-l1", level:1, q:"Which kind of research question does a survey answer best?", options:[
     {t:"How common something is across a group, and how that differs between subgroups", ok:true, why:"Standard questions asked of many people produce counts and percentages that can be compared."},
     {t:"Whether one thing causes another", why:"Cause and effect needs an experiment or a careful design; a survey mainly shows associations."},
     {t:"Exactly what people do when no one is watching", why:"Surveys record what people say, which can differ from what they do."},
     {t:"Why one person made an unusual decision, in depth", why:"In-depth reasons are better explored through interviews with follow-up questions."}
   ]},
   {id:"t4u8-q02", lesson:"t4u8-l1", level:2, q:"Kenji wants to know how the number of people living alone in his country has changed since 2000. What should he do first?", options:[
     {t:"Look for census or official statistics that already measure it", ok:true, why:"National statistics offices often publish exactly this. Collecting new data would be slower and less accurate."},
     {t:"Run an online survey of his social media followers", why:"His followers aren’t a fair sample of the country, and a single survey can’t measure change since 2000."},
     {t:"Interview ten neighbours", why:"Ten neighbours can’t describe a national trend over 25 years."},
     {t:"Design an experiment", why:"Nothing is being tested by changing a condition; this is a question about an existing trend."}
   ]},
   {id:"t4u8-q03", lesson:"t4u8-l1", level:1, q:"What is the main drawback of closed questions?", options:[
     {t:"The list of options can steer answers and miss answers the designer didn’t think of", ok:true, why:"Pew found people rarely go beyond the options offered, so the list shapes the results."},
     {t:"They are impossible to count", why:"Closed answers are the easiest to count; that’s their main advantage."},
     {t:"They take much longer to answer than open questions", why:"Closed questions are usually quicker to answer."},
     {t:"They can only have two options", why:"Closed questions can have many options, rating scales or rankings."}
   ]},
   {id:"t4u8-q04", lesson:"t4u8-l1", level:1, q:"Which is the correct order of the four steps people go through to answer a survey question?", options:[
     {t:"Understand, recall, judge, report", ok:true, why:"People must grasp the question, retrieve information, form an answer and then fit it to the options."},
     {t:"Recall, understand, report, judge", why:"You can’t recall the right information before understanding what is being asked."},
     {t:"Report, judge, recall, understand", why:"Reporting the answer is the last step, not the first."},
     {t:"Judge, report, understand, recall", why:"Judging needs the information you recall, which needs understanding first."}
   ]},
   {id:"t4u8-q05", lesson:"t4u8-l1", level:2, q:"In which mode are people most likely to over-report socially approved behaviour, such as giving to charity?", options:[
     {t:"A face-to-face interview", ok:true, why:"An interviewer’s presence increases the pull to give answers that look good."},
     {t:"A web form completed alone", why:"Self-completed forms reduce social desirability effects."},
     {t:"A paper form posted back without a name", why:"Self-completed, unnamed paper forms also reduce the pressure to look good."},
     {t:"All modes give identical answers", why:"Research consistently finds mode effects on sensitive questions."}
   ]},
   {id:"t4u8-q06", lesson:"t4u8-l1", level:3, q:"Ana’s questionnaire for a youth club starts with “What is your exact date of birth and home address?” before any questions about the club. What is the best advice?", options:[
     {t:"Start with easy questions about the club, move background questions to the end, and only ask for details she truly needs", ok:true, why:"Personal questions at the start feel intrusive and can make people quit; exact birth dates and addresses are rarely necessary and make the data identifying."},
     {t:"Keep it: personal details always come first", why:"Pew advises putting background questions near the end unless they’re needed first to check eligibility."},
     {t:"Make the questions required so nobody can skip them", why:"Forcing intrusive questions raises drop-out and is ethically poor practice."},
     {t:"Ask for the address but promise the survey is anonymous", why:"With an address, the survey isn’t anonymous; the promise would be false."}
   ]},
   {id:"t4u8-q07", lesson:"t4u8-l1", level:2, q:"A researcher in the EU needs survey data hosted in the European Union. Which option is described in the tools’ own documentation as offering this?", options:[
     {t:"KoboToolbox’s European Union server, or LimeSurvey Cloud with a server location such as Germany or Finland", ok:true, why:"KoboToolbox runs a separate EU server, and LimeSurvey Cloud lets you choose the hosting country when you set up."},
     {t:"Any tool, because all data on the internet is stored in the EU", why:"Data is stored wherever each provider’s servers are; that varies."},
     {t:"Only paper surveys can be stored in the EU", why:"Several online tools offer EU hosting."},
     {t:"Data location never matters for research", why:"Data-protection laws and ethics committees often care where personal data is stored and transferred."}
   ]},
   {id:"t4u8-q08", lesson:"t4u8-l1", level:1, q:"What is the difference between promising answers are “anonymous” and promising they are “confidential”?", options:[
     {t:"Anonymous: no one, not even the researcher, can link answers to a person. Confidential: the researcher could, but won’t reveal it.", ok:true, why:"That’s the standard distinction; promise only what your tool and procedures actually deliver."},
     {t:"They mean exactly the same thing", why:"They are different promises with different requirements."},
     {t:"Anonymous means answers are published with names", why:"That is the opposite of anonymous."},
     {t:"Confidential means nobody can ever see the answers, including the researcher", why:"The researcher sees confidential answers but protects people’s identities."}
   ]},
   {id:"t4u8-q09", lesson:"t4u8-l1", level:3, q:"Oluwaseun plans to compare this year’s staff survey with last year’s. He wants to reword several questions and move the job-satisfaction questions to the start. What is the risk?", options:[
     {t:"Changes in wording or order can create apparent changes that are really just different questions", ok:true, why:"Trend comparisons need the same wording and context; order alone can shift answers."},
     {t:"There is no risk if the topic is the same", why:"Pew advises keeping identical wording, and similar order and context, when comparing with earlier surveys; the same topic isn’t enough."},
     {t:"The response rate will automatically double", why:"Reordering questions has no such predictable effect on response."},
     {t:"Moving questions only matters on paper, not online", why:"Order effects occur in every mode."}
   ]},
   /* Lesson 2 */
   {id:"t4u8-q10", lesson:"t4u8-l2", level:1, q:"Which question is double-barrelled?", options:[
     {t:"How satisfied are you with the price and speed of your internet service?", ok:true, why:"It asks about two different things (price and speed) but allows one answer."},
     {t:"How satisfied are you with the speed of your internet service?", why:"This asks about one thing only."},
     {t:"In the past 7 days, how many days did you use the internet?", why:"One clear, countable thing in a defined period."},
     {t:"Which device do you use most to go online?", why:"One question about one thing."}
   ]},
   {id:"t4u8-q11", lesson:"t4u8-l2", level:2, q:"Which set of age options is best?", options:[
     {t:"Under 18 · 18–29 · 30–44 · 45–64 · 65 or over", ok:true, why:"The bands cover every age and don’t overlap, so every person fits exactly one."},
     {t:"18–30 · 30–45 · 45–65 · 65+", why:"30, 45 and 65 each fit two bands, and anyone under 18 has no option."},
     {t:"Young · Middle-aged · Old", why:"Vague labels mean different things to different people."},
     {t:"20–29 · 30–39 · 40–49", why:"Anyone under 20 or over 49 has no option, so the list isn’t exhaustive."}
   ]},
   {id:"t4u8-q12", lesson:"t4u8-l2", level:1, q:"What is acquiescence bias?", options:[
     {t:"Some people’s tendency to agree with statements regardless of their content", ok:true, why:"It particularly affects agree–disagree questions, which is why asking directly is often better."},
     {t:"Giving answers that make you look good", why:"That’s social desirability bias."},
     {t:"Choosing the first option in a list", why:"That’s a primacy effect."},
     {t:"Forgetting when events happened", why:"That’s a recall problem, such as telescoping."}
   ]},
   {id:"t4u8-q13", lesson:"t4u8-l2", level:2, q:"What is wrong with “Do you disagree that the library should not close on Mondays?”", options:[
     {t:"It’s a double negative, so people must untangle the logic and many will answer the opposite of what they mean", ok:true, why:"“Disagree” plus “should not close” makes the question hard to parse. Ask directly: “Should the library open on Mondays?”"},
     {t:"It’s double-barrelled", why:"It asks about one thing (Monday closing); the problem is the double negative."},
     {t:"It uses loaded words", why:"There’s no emotionally charged language; the problem is the logic."},
     {t:"Nothing; it’s a clear question", why:"Double negatives are a well-known source of errors."}
   ]},
   {id:"t4u8-q14", lesson:"t4u8-l2", level:3, q:"Priya’s survey asks, “Over the past year, how many hours did you spend reading to your children?” Answers range wildly. What is the best fix?", options:[
     {t:"Ask about a short recent period, such as the past 7 days, and let people answer in days or minutes per day", ok:true, why:"A short, recent reference period reduces guessing and telescoping, and simpler units avoid mental arithmetic."},
     {t:"Make the question required", why:"Requiring an answer doesn’t make an impossible recall task easier; it just forces guesses."},
     {t:"Add “Don’t you think reading is important?” before it", why:"That makes the question leading and adds social desirability pressure."},
     {t:"Ask about the past five years instead to get more data", why:"A longer period makes recall even harder."}
   ]},
   {id:"t4u8-q15", lesson:"t4u8-l2", level:2, q:"According to Krosnick and Presser’s review, what does offering “Don’t know” on opinion questions usually do?", options:[
     {t:"It doesn’t reliably improve data quality, and some people use it as an easy exit even when they hold a view", ok:true, why:"Their review found no consistent gain in reliability or validity; many who choose “Don’t know” give meaningful answers when encouraged."},
     {t:"It always makes the data more accurate", why:"The evidence doesn’t show a consistent improvement."},
     {t:"It is legally required in all surveys", why:"There is no such general legal rule; it’s a design choice."},
     {t:"It removes all social desirability bias", why:"“Don’t know” options don’t address the pull to look good."}
   ]},
   {id:"t4u8-q16", lesson:"t4u8-l2", level:1, q:"In a cognitive interview, what is a “probe”?", options:[
     {t:"A neutral follow-up question that explores how the person understood or answered a survey question", ok:true, why:"For example, “What does ‘household’ mean to you here?”"},
     {t:"A trick question to catch people lying", why:"Probes are about understanding, not catching people out."},
     {t:"A reminder email to people who haven’t responded", why:"That’s a reminder, part of fieldwork, not testing."},
     {t:"A device that records the interview", why:"A probe is a question, not equipment."}
   ]},
   {id:"t4u8-q17", lesson:"t4u8-l2", level:3, q:"After piloting, Tomás rewrote three questions. Should he include the pilot participants’ answers in his final results?", options:[
     {t:"Not for the changed questions: those people answered different versions, so their answers aren’t comparable", ok:true, why:"Pilot data normally isn’t combined with final data when the questions changed."},
     {t:"Yes, always: more data is better", why:"Mixing answers to different questions muddies the results."},
     {t:"Yes, but only if they agreed with the final wording", why:"Agreement with the wording doesn’t make their answers comparable."},
     {t:"Yes, as long as he doubles their weight", why:"Weighting can’t fix answers to a different question."}
   ]},
   {id:"t4u8-q18", lesson:"t4u8-l2", level:2, q:"Which wording best reduces social desirability bias when asking about recycling?", options:[
     {t:"“Many people find it hard to recycle everything. In the past week, did you recycle all, most, some or none of your recyclable waste?”", ok:true, why:"Face-saving wording and graded options make less “virtuous” answers easier to give."},
     {t:"“As a responsible resident, you recycle, don’t you?”", why:"Leading and loaded; it makes “no” very hard to say."},
     {t:"“Do you fail to recycle?”", why:"“Fail” is judgemental and pushes people away from the honest answer."},
     {t:"“Recycling saves the planet. Do you recycle?”", why:"Opening with a value statement increases pressure to say yes."}
   ]},
   /* Lesson 3 */
   {id:"t4u8-q19", lesson:"t4u8-l3", level:1, q:"Strictly speaking, what is a Likert scale?", options:[
     {t:"A set of rating items about one idea, combined into a single score", ok:true, why:"Likert’s 1932 method added up responses to several statements."},
     {t:"Any single question with five options", why:"A single rating question is a Likert-type item, not a scale."},
     {t:"An open question about attitudes", why:"Likert items are closed, with fixed ordered options."},
     {t:"A scale that must have exactly seven points", why:"Likert scales can have different numbers of points; Likert’s own example used five."}
   ]},
   {id:"t4u8-q20", lesson:"t4u8-l3", level:2, q:"On a 1–7 scale, a respondent answers 3 to a reverse-worded item. What is the reversed score?", options:[
     {t:"5", ok:true, why:"Reversed score = (7 + 1) − 3 = 5."},
     {t:"3", why:"That leaves the item unreversed."},
     {t:"4", why:"4 is the midpoint; reversing maps 3 to 5, not to the middle."},
     {t:"6", why:"6 would come from 9 − 3, adding 2 to the number of points instead of 1. The rule is (k + 1) − answer = 8 − 3 = 5."}
   ]},
   {id:"t4u8-q21", lesson:"t4u8-l3", level:2, q:"Why are answers to a single five-point rating item usually called ordinal?", options:[
     {t:"The options have a meaningful order, but the distances between them aren’t known to be equal", ok:true, why:"“Agree” is more than “Neither”, but we can’t say the steps are the same size."},
     {t:"Because they are numbers, so they are measurements like height", why:"The numbers are labels for ordered categories, not measured quantities."},
     {t:"Because they have no order at all", why:"That would be nominal (unordered) data."},
     {t:"Because the answers are always normally distributed", why:"Ordinal refers to the type of scale, not the distribution."}
   ]},
   {id:"t4u8-q22", lesson:"t4u8-l3", level:1, q:"What did Krosnick and Presser’s review find about labelling scale points?", options:[
     {t:"Labelling every point with words tends to give more reliable answers than labelling only the ends", ok:true, why:"Full verbal labels reduce guessing about what middle numbers mean."},
     {t:"Only numbers should ever be used", why:"Numeric-only scales are harder to interpret."},
     {t:"Labels make no difference", why:"The evidence shows labels do matter for reliability."},
     {t:"Only the midpoint should be labelled", why:"That leaves most points unclear."}
   ]},
   {id:"t4u8-q23", lesson:"t4u8-l3", level:2, q:"Where should a “Don’t know” option go on a five-point agreement scale?", options:[
     {t:"Separate from the scale, after the last point", ok:true, why:"Keeping it apart stops it being read as a neutral rating."},
     {t:"In the middle, as point 3", why:"That mixes “no idea” with a considered neutral view."},
     {t:"At the start, as point 1", why:"That would make it look like the strongest disagreement."},
     {t:"Instead of “Strongly agree”", why:"That would remove a real answer and confuse the scale."}
   ]},
   {id:"t4u8-q24", lesson:"t4u8-l3", level:3, q:"Two departments both have a mean of 3.0 on a five-point item. In Department A, almost everyone chose 3. In Department B, half chose 1 and half chose 5. What should the report do?", options:[
     {t:"Show each department’s full distribution, because identical means hide a united group and a split one", ok:true, why:"The distribution is the honest summary for ordinal ratings; the mean alone hides the difference."},
     {t:"Report that the departments are identical", why:"They are very different: one is neutral, the other is polarised."},
     {t:"Report only the medians, which will show the difference", why:"Both medians are 3 here too, so they also hide the split."},
     {t:"Drop Department B as an outlier", why:"Polarised answers are a real finding, not an error."}
   ]},
   {id:"t4u8-q25", lesson:"t4u8-l3", level:2, q:"What does the evidence say about removing the neutral midpoint from a rating scale?", options:[
     {t:"It pushes genuinely neutral people to one side, which can reduce accuracy", ok:true, why:"Krosnick and Presser report this and cite studies finding midpoints improved reliability and validity."},
     {t:"It always improves data quality", why:"The evidence doesn’t support that; many studies favour a midpoint."},
     {t:"It has no effect at all", why:"It changes where neutral people put their answers."},
     {t:"It is required by the original Likert method", why:"Likert’s original categories included an “undecided” middle option."}
   ]},
   {id:"t4u8-q26", lesson:"t4u8-l3", level:1, q:"Rensis Likert’s 1932 monograph was titled…", options:[
     {t:"A Technique for the Measurement of Attitudes", ok:true, why:"Published in Archives of Psychology, No. 140, in 1932."},
     {t:"The Psychology of Survey Response", why:"That is Tourangeau, Rips and Rasinski’s book from 2000."},
     {t:"Standard Definitions", why:"That is AAPOR’s publication on response rates."},
     {t:"Social Science Research", why:"That is Bhattacherjee’s textbook."}
   ]},
   {id:"t4u8-q27", lesson:"t4u8-l3", level:3, q:"Hana wants to measure how confident nurses feel using a new records system. She could adopt a published, tested scale or write her own items. Which consideration is most important?", options:[
     {t:"A tested scale has evidence of reliability and validity and allows comparison, but she must check its licence and that it fits her setting", ok:true, why:"Established scales save work and are comparable, but some require permission or payment and may not suit every context."},
     {t:"Writing her own is always better because it’s new", why:"New items lack evidence of reliability and validity and can’t be compared with other studies."},
     {t:"Published scales are free to use in every case", why:"Some scales are copyrighted and need permission or payment."},
     {t:"The number of items doesn’t matter, so one item is enough", why:"One item is less reliable for a broad idea like confidence; that’s why scales use several."}
   ]},
   /* Lesson 4 */
   {id:"t4u8-q28", lesson:"t4u8-l4", level:1, q:"What is a sampling frame?", options:[
     {t:"The list or source a sample is actually drawn from", ok:true, why:"For example a membership register or an address list; ideally it matches the population."},
     {t:"The final group of people who answered", why:"Those are the respondents."},
     {t:"The margin of error", why:"The margin of error describes sampling uncertainty, not the list."},
     {t:"The questionnaire’s layout", why:"Layout is part of questionnaire design, not sampling."}
   ]},
   {id:"t4u8-q29", lesson:"t4u8-l4", level:2, q:"A random sample of 1,600 gives 50% support. Using 1.96 × √(p(1 − p) ÷ n), what is the margin of error?", options:[
     {t:"About ±2.5 percentage points", ok:true, why:"1.96 × √(0.25 ÷ 1,600) = 1.96 × 0.0125 = 0.0245, about 2.5 points."},
     {t:"About ±5 percentage points", why:"That’s the margin for about 400 people; four times as many halves it."},
     {t:"About ±1.25 percentage points", why:"1.25 points is the standard error before multiplying by 1.96."},
     {t:"About ±0.6 percentage points", why:"Too small; check the square root step."}
   ]},
   {id:"t4u8-q30", lesson:"t4u8-l4", level:1, q:"What does the margin of error NOT include?", options:[
     {t:"Errors from people missing from the frame, people not responding, and poorly worded questions", ok:true, why:"It only covers sampling error in a probability sample."},
     {t:"Chance differences between a random sample and the population", why:"That is exactly what it does include."},
     {t:"The effect of sample size", why:"Sample size is in the formula."},
     {t:"The 95% confidence level", why:"The confidence level is built into the 1.96."}
   ]},
   {id:"t4u8-q31", lesson:"t4u8-l4", level:2, q:"What happened in the 1936 Literary Digest poll?", options:[
     {t:"About 2.4 million replies predicted Landon would win, but Roosevelt won in a landslide", ok:true, why:"A frame skewed towards wealthier people and differential response defeated the huge sample."},
     {t:"A small sample of 1,000 correctly predicted Landon’s victory", why:"Landon lost; and the Digest poll was enormous, not small."},
     {t:"The poll was accurate to within 1 point", why:"It was badly wrong."},
     {t:"It was the first poll to use random sampling", why:"It used lists of telephone and car owners, not random sampling."}
   ]},
   {id:"t4u8-q32", lesson:"t4u8-l4", level:3, q:"A council posts a survey link on its social media page and gets 3,000 responses. A report adds “margin of error ±1.8 points”. What’s the problem?", options:[
     {t:"The sample is self-selected, so the margin-of-error formula doesn’t describe its uncertainty; the real error could be much larger", ok:true, why:"The formula assumes a probability sample. Volunteers from a social media page may differ systematically from residents."},
     {t:"The margin should be ±0.5 because 3,000 is a large sample", why:"Recalculating doesn’t help; the formula doesn’t apply to a self-selected sample."},
     {t:"Nothing: any sample over 1,000 is accurate", why:"Size can’t fix who chose to respond; the Literary Digest had 2.4 million replies."},
     {t:"Margins of error are only for phone surveys", why:"They apply to probability samples in any mode."}
   ]},
   {id:"t4u8-q33", lesson:"t4u8-l4", level:2, q:"A survey invites 1,000 people; 50 turn out to be ineligible; 380 complete it. What is the response rate among eligible people?", options:[
     {t:"40%", ok:true, why:"380 ÷ (1,000 − 50) = 380 ÷ 950 = 0.40, or 40%."},
     {t:"38%", why:"That divides by all 1,000, including ineligible people."},
     {t:"43%", why:"That would come from adding the ineligible people to the completes (430 ÷ 1,000)."},
     {t:"60%", why:"That’s the share of eligible people who didn’t respond."}
   ]},
   {id:"t4u8-q34", lesson:"t4u8-l4", level:1, q:"To halve the margin of error of a simple random sample, you need to…", options:[
     {t:"Quadruple the sample size", ok:true, why:"The margin shrinks with the square root of n, so 4 × n gives ½ the margin."},
     {t:"Double the sample size", why:"Doubling n only reduces the margin by about 29%."},
     {t:"Halve the sample size", why:"A smaller sample increases the margin."},
     {t:"Double the population size", why:"Population size barely affects the margin unless the sample is a large share of it."}
   ]},
   {id:"t4u8-q35", lesson:"t4u8-l4", level:2, q:"In a poll with ±3 points on each figure, Candidate A has 48% and Candidate B 45%. Which statement is best?", options:[
     {t:"The 3-point lead isn’t clearly outside sampling error, because the margin for the gap is larger than ±3", ok:true, why:"The margin for the difference between two figures in the same poll is up to about double each figure’s margin."},
     {t:"A is definitely ahead, because 48 is more than 45", why:"Sampling error alone could produce this gap."},
     {t:"The candidates are certainly tied", why:"The poll doesn’t show a tie either; it can’t clearly separate them."},
     {t:"The margin for the lead is ±1.5 points", why:"The margin for a difference is larger, not smaller, than for each figure."}
   ]},
   {id:"t4u8-q36", lesson:"t4u8-l4", level:3, q:"A school survey of parents has a 30% response rate. Respondents’ children have much higher attendance than the school average. What does this suggest?", options:[
     {t:"Possible nonresponse bias: families more engaged with school may be over-represented, so results may look more positive than reality", ok:true, why:"Comparing respondents with a known figure (attendance) is exactly how you check for nonresponse bias."},
     {t:"The survey is definitely accurate because the response rate is above 25%", why:"There’s no threshold that guarantees accuracy; the attendance gap is a warning sign."},
     {t:"Attendance has nothing to do with the survey", why:"Engagement with school likely relates to parents’ views of it."},
     {t:"Low-attendance families must have answered dishonestly", why:"The issue is who responded, not dishonesty."}
   ]},
   /* Lesson 5 */
   {id:"t4u8-q37", lesson:"t4u8-l5", level:1, q:"What is a valid percentage?", options:[
     {t:"A percentage calculated only from people who answered that question", ok:true, why:"It leaves out people who skipped. Always say which denominator you used."},
     {t:"A percentage that has been checked by a statistician", why:"“Valid” here refers to the denominator, not to checking."},
     {t:"A percentage of everyone in the population", why:"Survey percentages are of respondents, not the whole population."},
     {t:"A percentage rounded to a whole number", why:"Rounding is unrelated to valid percentages."}
   ]},
   {id:"t4u8-q38", lesson:"t4u8-l5", level:2, q:"Ten respondents report commute times (minutes): 10, 12, 15, 15, 15, 18, 20, 22, 25, 90. Which statement is correct?", options:[
     {t:"The median is 16.5 minutes, and the mean (24.2) is pulled up by the 90", ok:true, why:"The middle two values are 15 and 18, so the median is 16.5. The sum is 242, so the mean is 24.2."},
     {t:"The mean and median are both 15", why:"15 is the mode. The median is 16.5 and the mean 24.2."},
     {t:"The median is 24.2", why:"24.2 is the mean, not the middle value."},
     {t:"The mode is 90", why:"90 occurs once; 15 occurs three times."}
   ]},
   {id:"t4u8-q39", lesson:"t4u8-l5", level:1, q:"What does the standard deviation describe?", options:[
     {t:"How spread out values are around the mean", ok:true, why:"A small SD means values cluster; a large SD means they are spread out."},
     {t:"The most common value", why:"That’s the mode."},
     {t:"The middle value", why:"That’s the median."},
     {t:"The number of people who answered", why:"That’s the sample size, n, not a measure of spread."}
   ]},
   {id:"t4u8-q40", lesson:"t4u8-l5", level:3, q:"In a cross-tab, 60 of 150 rural respondents and 90 of 450 urban respondents use a mobile clinic. Which comparison is correct?", options:[
     {t:"40% of rural respondents vs 20% of urban respondents: a gap of 20 percentage points", ok:true, why:"Row percentages: 60 ÷ 150 = 40%; 90 ÷ 450 = 20%."},
     {t:"Urban respondents use it more, because 90 is more than 60", why:"Raw counts ignore group size; there are three times as many urban respondents."},
     {t:"60% of clinic users are urban, so urban people are more likely to use it", why:"90 of 150 users (60%) are urban, but that column percentage reflects group sizes, not likelihood."},
     {t:"Rural respondents are 20% more likely to use it", why:"The gap is 20 percentage points; in relative terms 40% is double 20%."}
   ]},
   {id:"t4u8-q41", lesson:"t4u8-l5", level:2, q:"Why might percentages for a “tick all that apply” question add up to 150%?", options:[
     {t:"Each person could choose more than one option, so the options aren’t shares of one whole", ok:true, why:"That’s expected; say so in the report."},
     {t:"There must be a calculation error", why:"Not necessarily: with multiple answers per person, totals above 100% are normal."},
     {t:"Some respondents were counted twice by the survey tool", why:"Each person is counted once per option they chose; that’s by design."},
     {t:"Percentages always add up to more than 100% in surveys", why:"Single-choice questions add to 100% (allowing for rounding)."}
   ]},
   {id:"t4u8-q42", lesson:"t4u8-l5", level:2, q:"Which spreadsheet function gives the sample standard deviation (dividing by n − 1) in Excel?", options:[
     {t:"STDEV.S", ok:true, why:"Microsoft describes STDEV.S as estimating standard deviation based on a sample, using the n − 1 method."},
     {t:"STDEV.P", why:"STDEV.P treats the data as the whole population and divides by n."},
     {t:"MEDIAN", why:"MEDIAN finds the middle value, not the spread."},
     {t:"COUNTIF", why:"COUNTIF counts cells that meet a condition."}
   ]},
   {id:"t4u8-q43", lesson:"t4u8-l5", level:1, q:"Which “average” makes sense for respondents’ favourite season?", options:[
     {t:"The mode", ok:true, why:"Seasons are categories without a low-to-high order, so only the most common answer makes sense."},
     {t:"The mean", why:"There’s no meaningful number to average."},
     {t:"The median", why:"A median needs an order from low to high, which seasons don’t have here."},
     {t:"The standard deviation", why:"That measures spread in numbers and doesn’t apply."}
   ]},
   {id:"t4u8-q44", lesson:"t4u8-l5", level:3, q:"A press release says: “Support for the new bus route jumped from 48% to 51%!” Each figure comes from a random sample with a ±4-point margin of error. What is the most honest description?", options:[
     {t:"There’s no clear evidence of a change: the 3-point difference is within the surveys’ margins of error", ok:true, why:"A change smaller than the margin of error isn’t clear evidence of any real change."},
     {t:"Support jumped by 3 percentage points", why:"Calling it a jump overstates a change that sampling error alone could produce."},
     {t:"A majority now supports the route", why:"51% ± 4 includes values below 50%, so a majority isn’t established."},
     {t:"Support rose by 6.25%", why:"That’s the relative change (3 ÷ 48), and it still ignores the margin of error."}
   ]},
   {id:"t4u8-q45", lesson:"t4u8-l5", level:2, q:"Which item should always appear next to a survey percentage in a report?", options:[
     {t:"The number of people it is based on (n)", ok:true, why:"Without n, readers can’t tell whether 75% means 3 of 4 people or 750 of 1,000."},
     {t:"The name of the survey tool", why:"Useful in a methods section, but not essential next to each figure."},
     {t:"The researcher’s opinion of the result", why:"Interpretation belongs in the discussion, not attached to every figure."},
     {t:"A chart with a cut-off axis", why:"Cut-off axes can exaggerate differences; they aren’t required."}
   ]}
  ]
});
