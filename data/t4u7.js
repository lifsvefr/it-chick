/* Track 4 · Unit 7 · Qualitative methods */
ICA.addUnit({
  id:"t4u7", track:"t4", n:7, title:"Qualitative methods", icon:"🎙️",
  blurb:"How researchers learn from what people say, do and write: interviews, focus groups, observation and documents, then transcription, coding and thematic analysis, done in ways others can trust.",
  goals:[
    "Explain what qualitative research can and can’t tell you, and pick it for the right questions",
    "Write an interview guide with good open questions and probes, and run a short consented practice interview",
    "Take jottings in the field and turn them into full fieldnotes that separate description from reflection",
    "Choose a transcription style and a tool, knowing what uploading a recording means for privacy",
    "Code a transcript (descriptive, in vivo and process codes), keep a codebook and develop themes with Braun and Clarke’s six phases",
    "Judge and strengthen a study’s trustworthiness: credibility, transferability, dependability, confirmability and reflexivity"
  ],
  read:[
    {book:"hurst", where:"Chapters 10–13 (data collection: “Introduction to Data Collection Techniques”, “Interviewing”, “Focus Groups”, “Participant Observation”) and Chapters 18–19 (“Data Analysis and Coding”, “Advanced Codes and Coding”)"},
    {book:"bhatt", where:"Chapter 12, “Interpretive Research”, and Chapter 13, “Qualitative Analysis”", note:"Written in 2012: the software it names (for example ATLAS.ti 5) is long out of date, and thematic analysis as most people now practise it isn’t covered."}
  ],
  lessons:[

  /* ───────────── Lesson 1 ───────────── */
  {id:"t4u7-l1", title:"What qualitative research is for", minutes:50,
   goals:["Recognise questions that need qualitative methods","Say what a qualitative study can and can’t claim","Name the main kinds of qualitative data","Explain why the researcher’s position matters"],
   hook:{q:"A clinic wants to know why many patients miss their follow-up appointments. Which approach is most likely to uncover reasons nobody had thought to ask about?", options:["A survey with a fixed list of ten possible reasons","In-depth conversations with some patients who missed appointments","Counting missed appointments month by month","Testing whether a reminder text reduces missed appointments"], answer:1, reveal:"**In-depth conversations.** A fixed list can only confirm the reasons the clinic already imagined, and counts or tests tell you how much or whether, not why. Open conversations can surface the unexpected: a bus route that changed, fear of a diagnosis, a carer’s shift pattern. That ability to discover is what qualitative research is for, and this lesson maps where it fits and where it doesn’t."},
   learn:[
    {h:"Questions that need words, not numbers", body:[
      {lead:"Some questions ask “how many?”. Others ask “what is this like, and how does it work for the people involved?”"},
      "Qualitative research collects and analyses non-numerical material: what people say in interviews, what a researcher sees and hears in a setting, what documents and images contain. In the sociology primer you met this as [[qualitative-data|qualitative data]], as opposed to [[quantitative-data|quantitative data]]. This unit goes further: how to collect it well, analyse it systematically, and report it so that others can trust it.",
      "An analogy: a census tells you how many people live in each street of a city. A walk down one street with someone who has lived there for forty years tells you what the street means to them, how it changed, and why they stayed. Neither is better. They answer different questions.",
      "Qualitative methods suit questions about:",
      {list:[
        "**Meanings:** what does a diagnosis, a job loss or a festival mean to the people living it?",
        "**Experiences:** what is it like to care for a parent with dementia, or to start school in a new language?",
        "**Processes:** how do farmers decide which crops to plant after a drought? How does a new policy actually get carried out in a busy office?",
        "**Context and the unexpected:** why does a well-designed water pump go unused in one village but not the next? What haven’t we thought to ask?"
      ]},
      "These questions appear in every field: nursing (why people stop taking a medicine), education (how teachers adapt a new curriculum), engineering and design (how people really use a device), history (oral histories), business (how small firms decide to go online) and environment (how communities talk about flood risk)."
    ]},
    {h:"What it isn’t for", body:[
      "Qualitative research is not a small survey. It can’t tell you what percentage of a population thinks something, and it can’t measure how much one thing changes another. A study of 20 interviews with nurses can show *how* night shifts disrupt family life and *which* mechanisms matter; it can’t tell you that 40% of nurses feel this way.",
      {table:[["","Qualitative","Quantitative"],["Typical question","How? Why? What is it like?","How many? How much? Does X change Y?"],["Data","Words, observations, images, documents","Numbers from measures and counts"],["Who takes part","Chosen for what they can tell you","Often a random sample, so results generalise"],["Analysis","Interpreting patterns of meaning","Statistics"],["What you can claim","Rich understanding that readers judge for their own setting","Estimates for a population, tests of effects"]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">Breadth or depth?</text><rect class="d-lup" x="10" y="36" width="320" height="104" rx="10" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Quantitative: wide and shallow</text><circle class="d-inkf" cx="30" cy="80" r="4"/><circle class="d-inkf" cx="50" cy="80" r="4"/><circle class="d-inkf" cx="70" cy="80" r="4"/><circle class="d-inkf" cx="90" cy="80" r="4"/><circle class="d-inkf" cx="110" cy="80" r="4"/><circle class="d-inkf" cx="130" cy="80" r="4"/><circle class="d-inkf" cx="150" cy="80" r="4"/><circle class="d-inkf" cx="170" cy="80" r="4"/><circle class="d-inkf" cx="190" cy="80" r="4"/><circle class="d-inkf" cx="210" cy="80" r="4"/><circle class="d-inkf" cx="230" cy="80" r="4"/><circle class="d-inkf" cx="250" cy="80" r="4"/><circle class="d-inkf" cx="270" cy="80" r="4"/><circle class="d-inkf" cx="290" cy="80" r="4"/><circle class="d-inkf" cx="310" cy="80" r="4"/><text class="s" x="170" y="106" text-anchor="middle">many people, a few fixed answers each</text><text class="s" x="170" y="126" text-anchor="middle">“How many?” “How much?”</text><rect class="d-rose" x="105" y="156" width="130" height="164" rx="10" stroke-width="2"/><text x="170" y="178" text-anchor="middle">Qualitative:</text><text x="170" y="196" text-anchor="middle">narrow and deep</text><circle class="d-inkf" cx="140" cy="216" r="4"/><circle class="d-inkf" cx="170" cy="216" r="4"/><circle class="d-inkf" cx="200" cy="216" r="4"/><path class="d-ink" d="M140 224 V292 M170 224 V292 M200 224 V292" stroke-width="2" fill="none"/><text class="s" x="170" y="306" text-anchor="middle">“How?” “Why?”</text></svg>', alt:"Two shapes. A wide, short box holds a long row of fifteen dots: quantitative research, many people with a few fixed answers each, answering how many and how much. Below, a tall, narrow box holds three dots, each with a long line going down: qualitative research, few people explored in depth, answering how and why.", cap:"Quantitative studies go wide; qualitative studies go deep. Many good projects combine both (mixed methods)."},
      "Common misunderstandings:",
      {list:[
        "**“Qualitative means opinion, so it isn’t rigorous.”** Good qualitative research follows systematic procedures and documents them so others can check them. Lesson 5 covers how its quality is judged.",
        "**“Small samples mean the findings are useless.”** The goal isn’t to estimate a percentage but to understand a process in depth. Readers decide whether the findings fit their own setting.",
        "**“Numbers never appear.”** Researchers sometimes count how many participants mentioned something. That can help, but the counts aren’t the point and shouldn’t be dressed up as population estimates."
      ]},
      {tip:"Projects that combine both approaches are called mixed methods: for example, interviews to discover the issues, then a survey to measure how common they are. Unit 6 covers research designs, including mixed methods."}
    ]},
    {h:"The kinds of qualitative data", body:[
      "Researchers usually distinguish data they **generate** by asking (interviews, focus groups) from data that **already exists** or happens anyway (observation of everyday life, documents, online material).",
      {list:[
        "**Interviews:** one-to-one conversations, from tightly scripted to free-flowing. The most common qualitative method. (Lesson 2)",
        "**Focus groups:** a guided discussion with several people, where how they talk to each other is part of the data. (Lesson 2)",
        "**Observation:** watching and often taking part in a setting, recorded in fieldnotes, as in [[participant-observation|participant observation]] and [[ethnography|ethnography]]. (Lesson 3)",
        "**Documents and records:** letters, diaries, meeting minutes, policies, school reports, newspapers, archives. Systematic study of these is one form of [[content-analysis|content analysis]].",
        "**Visual and creative material:** photographs, drawings, maps people draw of their neighbourhood. In *photo elicitation* participants take or bring photos and talk about them.",
        "**Online material:** forum threads, social media posts, reviews. Public doesn’t mean free to use without care, as the ethics section explains.",
        "**Open answers in surveys:** short written replies. Useful, but thin compared with a conversation, because you can’t ask a follow-up question."
      ]},
      "Many studies combine sources: interviews with teachers plus the school’s policy documents plus a week of classroom observation. Comparing them is one form of [[triangulation|triangulation]], covered in Lesson 5."
    ]},
    {h:"Who takes part, and how many", body:[
      "Qualitative studies rarely draw random samples. They choose participants **on purpose** because they can speak to the question: people who have lived the experience, people in different roles, or cases that differ in a revealing way. This is usually called purposive sampling (Unit 6 covers sampling designs). For a study of how families manage a parent’s dementia, you might deliberately include spouses and adult children, urban and rural families, and families who do and don’t use paid care.",
      "How many? There is no formula. Hurst’s textbook says there are “no hard-and-fast rules”: the number should be whatever suits the particular study, and it notes that beginning researchers rarely include more than thirty to fifty people. Many researchers stop recruiting when new interviews stop adding anything new, an idea called [[data-saturation|saturation]]. Lesson 5 explains it and the debate around it.",
      {warn:"Don’t judge a qualitative study only by its sample size. Ask instead: did the participants suit the question, did the researcher describe them clearly, and are the claims limited to what that group can support?"}
    ]},
    {h:"The researcher is part of the instrument", body:[
      "A thermometer works the same whoever holds it. An interview doesn’t: what people tell you depends partly on who you are, how you ask and how you listen. A young researcher and an older one may hear different stories from the same retired miners. For this reason qualitative researchers often describe themselves as part of the research instrument.",
      "This is treated not as a flaw to hide but as something to account for. [[reflexivity|Reflexivity]] means examining how your own background, assumptions and relationships shape the research at every stage, and telling readers about it. Your [[positionality|positionality]] is where you stand relative to the people and topic: insider or outsider, your age, gender, class, language, professional role, and so on.",
      {ex:"Lucía, a former teacher, is interviewing teachers about a new curriculum. Being an insider helps her build trust and understand jargon. It also means teachers may assume she already knows things and leave them unsaid, and she may share their frustrations. She keeps a reflexive journal, asks “what would an outsider not understand here?” and reports her background in the methods section.", label:"Worked example: positionality"},
      {key:"In qualitative research, the aim isn’t to remove the researcher from the study. It’s to be open and systematic about how the researcher shaped it."}
    ]},
    {h:"Ethics from the start", body:[
      "Qualitative research is close to people. Participants share personal stories, sometimes painful ones, and a few vivid details can make someone recognisable even without their name. So ethics shapes every decision, from recruitment to publication. The sociology primer introduced the basics: [[informed-consent|informed consent]], [[confidentiality|confidentiality]], [[anonymity|anonymity]] and [[ethics-committee|ethics review]] (see {{research-ethics}}). Unit 9 covers ethics and data protection in depth.",
      "For qualitative work in particular:",
      {list:[
        "Consent is a **process**, not one signature: people can skip questions, pause, or withdraw.",
        "**Recording** needs explicit permission, asked separately from agreeing to talk.",
        "Quotes are what readers remember, so check that a quote plus its details (job, town, age) can’t identify someone.",
        "Public online posts can still be traced: searching a quoted sentence often finds the author.",
        "Real studies with participants need ethics approval first, usually from a university or hospital committee."
      ]},
      {warn:"In this unit, practise only with a friend or family member who agrees, who knows they can skip any question or stop at any time, and whom you record only if they say yes. Don’t collect data from strangers or publish anything from practice interviews."}
    ]}
   ],
   try:[
    {id:"t4u7-l1-x1", type:"sort", q:"Which approach fits each research question best?", buckets:["Mainly qualitative","Mainly quantitative"], items:[
      {t:"How do first-generation university students describe their first month on campus?", b:0, why:"“How do they describe” asks about experience and meaning: qualitative."},
      {t:"What percentage of small businesses in a region accept card payments?", b:1, why:"A percentage of a population calls for a representative survey: quantitative."},
      {t:"Why do some villagers stop using a new water pump after a few months?", b:0, why:"“Why”, with reasons nobody has listed yet, is a classic qualitative question."},
      {t:"Does a reminder text increase vaccination rates compared with no text?", b:1, why:"Measuring the effect of X on Y is an experimental, quantitative question."},
      {t:"How do nurses decide when to call a doctor during a night shift?", b:0, why:"A decision process in context: qualitative interviews or observation fit."},
      {t:"How many hours a week do secondary-school teachers spend marking?", b:1, why:"“How many hours” is a measurement question: quantitative."},
      {t:"What does a weekly market mean to the older people who visit it?", b:0, why:"Meaning to participants is qualitative territory."}
    ]},
    {id:"t4u7-l1-x2", type:"mcq", q:"Kenji interviews 18 delivery riders in one city about how they deal with app ratings. Which claim can his study support?", options:[
      {t:"Riders described several strategies, such as avoiding certain neighbourhoods, and explained why.", ok:true, why:"Yes. Qualitative findings describe what participants experienced and how, with their reasons, without turning them into population percentages."},
      {t:"61% of delivery riders in the country avoid certain neighbourhoods.", why:"18 purposively chosen riders can’t estimate a national percentage. That needs a representative survey."},
      {t:"App ratings cause riders to avoid neighbourhoods.", why:"Interviews can show how riders explain their choices, but measuring a causal effect needs a different design."},
      {t:"His findings are invalid because 18 is too few people.", why:"For an in-depth interview study, 18 can be plenty. Sample size is judged against the question and the claims made."}
    ]},
    {id:"t4u7-l1-x3", type:"match", q:"Match each kind of qualitative data to an example.", pairs:[
      ["Interview","A 60-minute conversation with a farmer about drought decisions","One-to-one, researcher-generated talk."],
      ["Focus group","Six parents discussing a school’s homework policy together","A group discussion, where people respond to each other."],
      ["Fieldnotes","Notes written after a day spent at a market stall","Observation recorded as written notes."],
      ["Documents","A town council’s meeting minutes from 1990 to 2020","Existing records the researcher didn’t create."],
      ["Photo elicitation","Teenagers photograph places they feel safe, then talk about the photos","Visual material that prompts discussion."]
    ]},
    {id:"t4u7-l1-x4", type:"spot", q:"Amara wrote this summary of a qualitative study for her team. Tap each sentence that **overclaims or misunderstands** qualitative research.", ask:"overclaims or misunderstands", parts:[
      {t:"The researchers interviewed 24 carers of people with dementia in two regions.", flag:false, why:"A clear, factual description of the sample."},
      " ",
      {t:"Carers described feeling “on duty all the time” and explained how they arranged short breaks.", flag:false, why:"A good qualitative finding: experiences and processes, in participants’ words."},
      " ",
      {t:"So 75% of carers nationally feel on duty all the time.", flag:true, why:"A purposive sample of 24 can’t produce a national percentage. Counting how many of these 24 said something is fine; generalising it to everyone isn’t."},
      " ",
      {t:"Because it is qualitative, the study is just opinion and can be ignored.", flag:true, why:"Qualitative research uses systematic methods and has its own quality criteria. Dismissing it because it isn’t numbers misunderstands what it does."},
      " ",
      {t:"Readers should consider whether the carers’ situations resemble those in their own area.", flag:false, why:"Exactly right: readers judge how far findings transfer to their own setting."}
    ]},
    {id:"t4u7-l1-x5", type:"mcq", q:"Fatima, a nurse, plans to interview nurses on her own ward about workload. What is the best way to handle her insider position?", options:[
      {t:"Reflect on it in a journal, plan how it might shape answers, and report it in her methods section", ok:true, why:"That is reflexivity: accounting for the researcher’s position rather than pretending it doesn’t exist."},
      {t:"Hide that she is a nurse so participants treat her as neutral", why:"Concealing her role would be deceptive and wouldn’t remove her influence anyway."},
      {t:"Nothing: insiders produce objective data because they understand the setting", why:"Insider knowledge helps, but it also shapes what people say and what she notices. It needs reflection, not assumption."},
      {t:"Cancel the study: insiders can never do valid qualitative research", why:"Insider research is common and valuable. It needs reflexivity and care (for example about colleagues feeling pressure to take part), not cancellation."}
    ]},
    {id:"t4u7-l1-x6", type:"mcq", q:"Which of these are good reasons to choose a qualitative design? Choose all that apply.", options:[
      {t:"Little is known, and you need to discover what the important issues are", ok:true, why:"Open-ended methods are strong at discovery."},
      {t:"You want to understand how people make sense of an experience", ok:true, why:"Meaning-making is a core qualitative question."},
      {t:"You need to estimate the proportion of adults who own a bicycle", why:"Estimating a proportion needs a representative survey: quantitative."},
      {t:"You want to see how a policy is carried out day to day in real workplaces", ok:true, why:"Processes in context suit observation and interviews."}
    ]}
   ],
   apply:{intro:"Practise thinking like a qualitative researcher. Nothing here involves collecting data from strangers.", tasks:[
     {t:"Turn a “how many” question into a “how” question", how:["Pick a topic you care about (for example, public transport, learning a language, caring for a pet, starting a small business).","Write one quantitative question about it (“How many…?”, “What percentage…?”).","Now write two qualitative questions about the same topic (“How do… experience…?”, “How do… decide…?”).","For each qualitative question, note which kind of data you’d collect (interviews, observation, documents…) and who you’d want to hear from, and why."], write:"Topic… Quantitative question… Qualitative question 1, data and participants… Qualitative question 2, data and participants…"},
     {t:"Read the methods of a published qualitative study", how:["Search Google Scholar, or an open-access index such as DOAJ or PubMed Central (for health topics), for your topic plus “qualitative” or “interviews” or “thematic analysis”.","Choose one free full-text article. A university login gives access to more, but plenty are open access.","Find: the research question, who took part and how they were chosen, how data were collected, how they were analysed, and anything the authors say about their own position.","Note one claim the study can support and one it can’t."], write:"Article (authors, year, title)… Question… Participants and how chosen… Data… Analysis… Researcher position… A claim it supports… A claim it can’t…"},
     {t:"Write a short positionality note", how:["Choose a topic you might research one day.","Write five sentences: what experience you have of it, what you already believe about it, how participants might see you, what you might notice easily, and what you might miss.","Keep it private. This is practice in reflexivity, not a confession."], write:"My topic… My experience… What I already believe… How participants might see me… What I might miss…"}
   ], proof:"A pair of quantitative and qualitative questions on one topic, notes on a real qualitative article’s methods and limits, and a short positionality note."},
   read:[
    {book:"hurst", where:"Chapter 1, “Introduction”, and Chapter 10, “Introduction to Data Collection Techniques”"},
    {book:"bhatt", where:"Chapter 12, “Interpretive Research” (the parts on how it differs from positivist research and its benefits and challenges)"}
   ]
  },

  /* ───────────── Lesson 2 ───────────── */
  {id:"t4u7-l2", title:"Interviews and focus groups", minutes:55,
   goals:["Choose between structured, semi-structured and unstructured interviews","Write an interview guide with open questions in a sensible order","Use probes to get depth without leading","Handle consent, recording and storage carefully","Know when a focus group fits better than an interview, and how to run one"],
   hook:{q:"In a semi-structured interview, which of these is often the most useful thing an interviewer can do after an answer that sounds unfinished?", options:["Ask a longer, more detailed question","Stay quiet for a few seconds","Move straight to the next question to save time","Summarise what the person should have said"], answer:1, reveal:"**Stay quiet.** A short, comfortable pause, sometimes called a silent probe, often draws out the most important part of the answer, because people fill silences. It’s one of several ways to follow up without putting words in someone’s mouth. This lesson covers the guide, the probes and the care that make an interview work."},
   learn:[
    {h:"Three kinds of interview", body:[
      {lead:"A research interview is a conversation with a purpose. How much you script it depends on what you need to compare and what you need to discover."},
      "The sociology primer introduced interview formats (see {{survey-research}}). Here is the fuller picture.",
      {table:[["Type","How it works","Best for"],["Structured","The same questions, in the same order and wording, for everyone","Comparing answers across many people; close to a spoken questionnaire"],["Semi-structured","A guide of questions and topics, with freedom to change order and follow up","Most qualitative studies: comparable topics plus depth and surprises"],["Unstructured","An open conversation around a theme, with few or no set questions","Early exploration, life histories, informal talk during fieldwork"]]},
      "The [[semi-structured-interview|semi-structured interview]] is the workhorse of qualitative research. Hurst’s textbook calls it the main form used by qualitative social scientists: you know the ground you want to cover, but you let the participant take you to places you didn’t expect.",
      {tip:"A closed-answer questionnaire read out loud is a survey, not a qualitative interview. Even structured qualitative interviews use open questions so people can answer in their own words."}
    ]},
    {h:"Writing an interview guide", body:[
      "An [[interview-guide-term|interview guide]] is your plan for the conversation: the main questions, possible follow-ups and reminders. Hurst suggests a guide usually has between five and ten questions or question areas. It **guides** the conversation without controlling it: you can change the order, skip what’s already been answered and follow a promising thread.",
      "Good interview questions are:",
      {list:[
        "**[[open-question|Open]]:** “Tell me about…”, “How did you…?”, “What was that like?” rather than questions answered with yes or no.",
        "**One at a time:** a [[double-barrelled-question|double-barrelled]] question such as “How did you find the training and the new software?” asks two things. Split it.",
        "**In everyday words:** not your research question read aloud, and not academic jargon. Ask “Can you walk me through a typical night shift?”, not “How does temporal disruption affect your family role?”",
        "**Neutral:** “Don’t you think the new rules are unfair?” is a [[leading-question|leading question]]: it pushes towards an answer. Ask “What do you make of the new rules?”",
        "**Grounded in experience:** asking for a specific example (“Tell me about the last time…”) gets richer, more accurate answers than asking for general opinions."
      ]},
      "Order matters. Start with easy, factual questions to build comfort; Hurst suggests moving from the present to the past and then to the future. Put sensitive topics later, once trust has grown, and end with an open invitation such as “Is there anything I haven’t asked that you think is important?”",
      {fig:'<svg viewBox="0 0 340 412"><defs><marker id="t4u7-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="20" text-anchor="middle">The shape of an interview guide</text><rect class="d-sage" x="40" y="34" width="260" height="62" rx="10" stroke-width="2"/><text x="170" y="56" text-anchor="middle">1. Opening</text><text class="s" x="170" y="74" text-anchor="middle">consent, recording check,</text><text class="s" x="170" y="89" text-anchor="middle">easy questions about now</text><path class="d-ink" d="M170 96 V114" stroke-width="2" marker-end="url(#t4u7-l2-a)"/><rect class="d-lup" x="10" y="118" width="320" height="176" rx="10" stroke-width="2"/><text x="170" y="140" text-anchor="middle">2. Main questions (5–10 areas)</text><rect class="d-panel" x="24" y="152" width="186" height="38" rx="6" stroke-width="1.5"/><text class="s" x="117" y="175" text-anchor="middle">Main question A</text><rect class="d-gold" x="222" y="152" width="96" height="38" rx="6" stroke-width="1.5"/><text class="s" x="270" y="175" text-anchor="middle">probes</text><rect class="d-panel" x="24" y="198" width="186" height="38" rx="6" stroke-width="1.5"/><text class="s" x="117" y="221" text-anchor="middle">Main question B</text><rect class="d-gold" x="222" y="198" width="96" height="38" rx="6" stroke-width="1.5"/><text class="s" x="270" y="221" text-anchor="middle">probes</text><rect class="d-panel" x="24" y="244" width="186" height="38" rx="6" stroke-width="1.5"/><text class="s" x="117" y="267" text-anchor="middle">Sensitive topics later</text><rect class="d-gold" x="222" y="244" width="96" height="38" rx="6" stroke-width="1.5"/><text class="s" x="270" y="267" text-anchor="middle">probes</text><path class="d-ink" d="M170 294 V312" stroke-width="2" marker-end="url(#t4u7-l2-a)"/><rect class="d-sage" x="40" y="316" width="260" height="62" rx="10" stroke-width="2"/><text x="170" y="338" text-anchor="middle">3. Closing</text><text class="s" x="170" y="356" text-anchor="middle">“Anything I haven’t asked?”</text><text class="s" x="170" y="371" text-anchor="middle">thanks, what happens next</text><text class="s" x="170" y="402" text-anchor="middle">Order can change in the moment.</text></svg>', alt:"A vertical flow. Opening: consent, recording check and easy questions about the present. Then main questions, five to ten areas, each with a box of possible probes beside it, with sensitive topics placed later. Then closing: asking if there is anything not yet covered, thanks, and what happens next. A note says the order can change in the moment.", cap:"A guide moves from easy to harder topics, with probes ready for each main question, and ends with an open invitation."},
      {tip:"[[pilot-study|Pilot]] your guide: try it with one willing person, then fix questions that confused them, felt intrusive, or got one-word answers."}
    ]},
    {h:"Probes: going deeper without leading", body:[
      "A [[probe-question|probe]] is a follow-up that invites someone to say more about what they’ve just said. Probes are where depth comes from. Hurst lists several kinds:",
      {table:[["Probe","Example"],["Detail","“When was that? Who else was there?”"],["Elaboration","“Could you say more about that?”"],["Clarification","“When you say ‘the system’, what do you mean?”"],["Contrast or comparison","“How was that different from your first job?”"]]},
      "Two more are widely taught: the **silent probe** (a few seconds of attentive silence) and the **echo** (repeating the person’s last words as a question: “It felt like a test?”).",
      {ex:"Interviewer: Tell me about your first week at the warehouse.\nTomás: It was fine, I suppose. Bit of a test.\nInterviewer: A test?\nTomás: Yeah, like… nobody tells you where anything is. You have to figure out who you can ask without looking stupid.\nInterviewer: How did you figure that out?", label:"Worked example: echo and process probes (invented)"},
      "Notice what the interviewer didn’t do: suggest an answer (“Was it because the supervisor was unfriendly?”). Probes follow the participant’s words, not your hypothesis."
    ]},
    {h:"Rapport and listening", body:[
      "[[rapport|Rapport]] is the trust and ease between interviewer and participant that lets people speak openly. Hurst describes the interview as something produced *between* the two people, and names active listening as the key to building rapport.",
      {list:[
        "**Listen more than you talk.** Your job is to understand, not to share your views or correct theirs.",
        "**Show you’re following:** brief nods, “mm”, using their words in your follow-ups.",
        "**Don’t judge.** If a view surprises you, stay curious: “What led you to that?”",
        "**Notice power and difference.** A manager interviewing staff, or a researcher interviewing someone in a second language, needs extra care to make honest answers feel safe.",
        "**Respect limits.** If someone becomes upset, offer a pause or to stop, and have information about support ready when the topic is sensitive."
      ]},
      "Interviews can happen face to face, by video call or by phone. Remote interviews save travel and can reach people far away, but you lose some body language, connections fail, and you need to check where the call platform stores recordings and transcripts."
    ]},
    {h:"Consent, recording and storage", body:[
      "Before the interview, people should receive plain-language information about the study, what taking part involves, how their words will be used and stored, and that they can skip questions or withdraw. They then give [[informed-consent|informed consent]], often by signing a form.",
      {list:[
        "**Ask about recording separately.** Some people are happy to talk but not to be recorded. Then take notes instead.",
        "**Say when the recorder is on and off,** and check it works before you start. Many researchers use two devices in case one fails.",
        "**Rules on recording differ between countries and regions.** In research, the standard is simpler than the law: everyone recorded must agree.",
        "**Store safely.** Label files with an ID number rather than a name, and keep consent forms (which carry names) separately from transcripts, as Hurst advises. Password-protect or encrypt files.",
        "**Watch automatic backups.** Phone recorder apps may sync to a cloud account. Know where your files go, and follow what your consent form promised."
      ]},
      {warn:"For practice in this unit: interview only a friend or family member who agrees, tell them they can skip any question or stop at any time, and record only if they say yes. Delete practice recordings when you no longer need them."}
    ]},
    {h:"Focus groups", body:[
      "A [[focus-group|focus group]] is a guided discussion among a small group about a shared topic. Its special strength is **interaction**: people react to each other, agree, disagree and build on each other’s ideas, so you see how views are formed and expressed socially. Hurst’s guidance includes:",
      {list:[
        "**Size:** optimally five to eight people; at least four to get real interaction.",
        "**Length:** about 45 to 90 minutes, ending when you said you would.",
        "**More than one group:** at least three, so one group with an unusual dynamic doesn’t mislead you.",
        "**A light-touch moderator:** citing Lune and Berg, Hurst notes the moderator’s voice should show up in the transcript no more than about 10 percent of the time. The moderator keeps things on topic and makes space for quiet people when one person dominates.",
        "**A note-taker** can check the recording equipment and note body language and who spoke when, which a transcript misses."
      ]},
      "Groups can be **similar** (people with shared experiences, who may speak more freely) or **mixed** (people with different views, which reveals contrasts but can make sensitive topics risky).",
      {warn:"In a group you can ask members to keep what is said private, but you can’t guarantee they will. Tell participants this before they agree, and choose one-to-one interviews for topics where disclosure could harm someone."},
      {table:[["Choose…","When…"],["Interviews","You need each person’s detailed story, the topic is sensitive, or people would hold back in front of others"],["Focus groups","You want to see shared language, debate and norms, or quickly gather a range of views on a common experience"]]}
    ]}
   ],
   try:[
    {id:"t4u7-l2-x1", type:"sort", q:"Which interview format does each plan describe?", buckets:["Structured","Semi-structured","Unstructured"], items:[
      {t:"Every participant hears the same 12 open questions in the same order and wording, with no follow-ups.", b:0, why:"Fixed questions, order and wording: structured."},
      {t:"The researcher has eight topic areas and suggested probes, and follows interesting threads.", b:1, why:"A guide plus flexibility is the definition of semi-structured."},
      {t:"During fieldwork at a fishing harbour, the researcher chats with crew members as they mend nets.", b:2, why:"Informal conversation with no set questions: unstructured."},
      {t:"An oral historian asks one opening question, “Tell me the story of your life,” and lets the narrator lead.", b:2, why:"A single prompt and a participant-led conversation: unstructured (a life-history interview)."},
      {t:"A study compares answers from 200 people, so every question must be asked identically.", b:0, why:"Identical wording for comparison across many people calls for a structured format."},
      {t:"Ten teachers are asked about the same five themes, in whatever order the conversation flows.", b:1, why:"Common themes with flexible order: semi-structured."}
    ]},
    {id:"t4u7-l2-x2", type:"spot", q:"Hana drafted these questions for an interview guide about working from home. Tap each question with a **problem**.", ask:"a problem", parts:[
      {t:"1. Can you walk me through a typical working day at home?", flag:false, why:"Open, concrete and easy to start with."},
      "\n",
      {t:"2. Do you like working from home?", flag:true, why:"A yes/no question that invites a one-word answer. Try “What do you like and dislike about working from home?”"},
      "\n",
      {t:"3. How do you manage childcare and your manager’s expectations?", flag:true, why:"Double-barrelled: two topics in one. Ask about each separately."},
      "\n",
      {t:"4. Don’t you find it isolating?", flag:true, why:"Leading: it suggests the expected answer. Ask “How, if at all, has working from home changed your contact with other people?”"},
      "\n",
      {t:"5. Tell me about the last time something went wrong with your setup. What happened?", flag:false, why:"Asks for a specific example, which gets rich, concrete detail."},
      "\n",
      {t:"6. How does spatial-temporal boundary work mediate your role identity?", flag:true, why:"Academic jargon (close to a research question). Use everyday words."},
      "\n",
      {t:"7. Is there anything we haven’t talked about that you think is important?", flag:false, why:"A good closing question that lets the participant add what matters to them."}
    ]},
    {id:"t4u7-l2-x3", type:"match", q:"Match each follow-up to the kind of probe it is.", pairs:[
      ["“Who else was in the room?”","Detail probe","It asks for specific facts about the event."],
      ["“Could you say a bit more about that?”","Elaboration probe","It invites the person to expand in their own direction."],
      ["“When you say ‘they’, who do you mean?”","Clarification probe","It makes the meaning clear for anyone reading the transcript later."],
      ["“How did that compare with your previous school?”","Contrast probe","It asks for a comparison, which often reveals what mattered."],
      ["A calm pause of a few seconds","Silent probe","Silence gives room to continue without suggesting anything."]
    ]},
    {id:"t4u7-l2-x4", type:"order", q:"Put these parts of an interview in a sensible order.", items:[
      {t:"Explain the study, confirm consent, and ask separately about recording", why:"Nothing starts until the person has agreed, knowing what they’re agreeing to."},
      {t:"Easy questions about the person’s current situation", why:"Starting with the present and simple facts builds comfort."},
      {t:"Main questions about past experiences, with probes", why:"The core of the guide comes once rapport is building."},
      {t:"More sensitive questions", why:"Sensitive topics go later, when trust is greater, and can be skipped."},
      {t:"“Is there anything I haven’t asked that you think is important?”", why:"An open closing question lets the participant add what matters to them."},
      {t:"Thank them, stop the recording and explain what happens next", why:"Close respectfully and remind them how their words will be used."}
    ]},
    {id:"t4u7-l2-x5", type:"mcq", q:"Oluwaseun’s participant is happy to be interviewed but says, “I’d rather you didn’t record this.” What should he do?", options:[
      {t:"Go ahead without recording and take careful notes, writing them up fully straight afterwards", ok:true, why:"Consent to talk and consent to record are separate. Notes are a legitimate alternative."},
      {t:"Record secretly on his phone so the data are accurate", why:"Secret recording breaks consent and research ethics, whatever the accuracy gain."},
      {t:"Cancel, because unrecorded interviews have no value", why:"Notes lose exact wording but still capture a lot. Many good studies use notes."},
      {t:"Explain that recording is compulsory for research", why:"It isn’t, and pressuring someone undermines voluntary consent."}
    ]},
    {id:"t4u7-l2-x6", type:"number", q:"The transcript of a focus group has 12,000 words. Using the guideline Hurst cites (the moderator’s voice no more than 10 percent of the transcript), what is the most the moderator should have said, in words?", answer:1200, tol:0, unit:"words", why:"10% of 12,000 = 0.10 × 12,000 = 1,200 words. More than that suggests the moderator was leading rather than letting the group talk. It is a rule of thumb, not a strict limit.", wrongs:[
      {v:120, tol:0, why:"That’s 1%. Ten percent is 0.10 × 12,000."},
      {v:10800, tol:0, why:"That’s the participants’ share (90%). The question asks for the moderator’s maximum."},
      {v:1000, tol:0, why:"Close, but 10% of 12,000 is 1,200: multiply 12,000 by 0.10."}
    ], hint2:"Multiply the total words by 0.10."},
    {id:"t4u7-l2-x7", type:"mcq", q:"Priya wants to understand how young people in her town talk about mental health among friends: the jokes, the shared words, what’s seen as normal. Which method fits best, and why?", options:[
      {t:"Focus groups of friends or peers, because the interaction itself shows shared language and norms", ok:true, why:"Focus groups reveal how talk works between people, which is exactly her question. She would still need care, support information and a plan for anyone who becomes upset."},
      {t:"A structured questionnaire, because it is quicker", why:"A questionnaire can’t show how people talk with each other or the words they use together."},
      {t:"Individual unstructured interviews only, because groups never work for sensitive topics", why:"Individual interviews suit personal disclosures, but her question is about talk among friends. Groups can work if they discuss general norms rather than personal stories."},
      {t:"Recording conversations in a café without telling anyone", why:"Covert recording breaks consent and is unethical."}
    ]}
   ],
   apply:{intro:"Build a small interview guide and try it with someone who agrees. These are practice tasks, not a research study.", tasks:[
     {t:"Write an interview guide", how:["Choose a topic most adults could talk about, such as how they learned to cook, how their working life has changed, or how they keep in touch with family far away.","Write five or six main open questions in a sensible order: easy and present first, then past, then thoughts about the future.","Under each main question, add two possible probes (detail, elaboration, clarification or contrast).","Check every question: open? one thing at a time? everyday words? not leading?","Add an opening script (purpose, right to skip or stop, recording only with permission) and a closing question."], write:"Topic… Opening script… Main questions with probes… Closing question… Problems I fixed…"},
     {t:"Run a 15–20 minute practice interview", how:["Ask a friend or family member if they’re willing to help you practise. Tell them it’s practice, nothing will be published, and they can skip any question or stop at any time.","Ask separately whether you may record it. If not, take notes.","Use your guide, but follow interesting threads. Try at least one silent probe and one echo.","Afterwards, ask them which questions felt easy or awkward.","If you recorded, store the file somewhere private and delete it once you’ve finished the transcription task in Lesson 4."], write:"How I explained consent… Recorded? (only with permission)… One moment a probe worked… One question I’d change… What my practice partner said…"},
     {t:"Plan (don’t run) a focus group", how:["Using the same topic, decide who would be in two or three groups and why (similar or mixed groups?).","Write three discussion prompts that invite people to respond to each other (for example, “What do people your age usually say about…?”).","Write what you’d tell the group about confidentiality and its limits."], write:"Groups and why… Three prompts… What I’d say about confidentiality…"}
   ], proof:"An interview guide with probes, notes from a consented practice interview including what you’d improve, and a short focus group plan."},
   read:[
    {book:"hurst", where:"Chapter 11, “Interviewing”, and Chapter 12, “Focus Groups”"},
    {book:"bhatt", where:"Chapter 9, “Survey Research” (the part on interview surveys)", note:"Bhattacherjee treats interviews mainly as a survey method; Hurst covers the qualitative approach in much more depth."}
   ]
  },

  /* ───────────── Lesson 3 ───────────── */
  {id:"t4u7-l3", title:"Observation, fieldnotes and documents", minutes:50,
   goals:["Describe the range of observer roles and their trade-offs","Take jottings and turn them into full fieldnotes","Separate description from reflection in your notes","Explain thick description","Question documents and online material as data"],
   hook:{q:"Experienced field researchers often advise setting aside time to write up fieldnotes after each visit. Compared with the time spent observing, how much?", options:["About a tenth as long","About half as long","At least as long, and often twice as long","None: they just keep the scribbles they made on the spot"], answer:2, reveal:"**At least as long, often double.** Hurst’s textbook says to plan at least as much writing time as fieldwork time, and notes that many researchers suggest double. Quick scribbles fade fast; the full notes written afterwards are the real data. This lesson shows how to go from scribbles to notes you can analyse."},
   learn:[
    {h:"Watching with a purpose", body:[
      {lead:"Interviews tell you what people say they do. Observation shows you what they actually do, where and with whom."},
      "The sociology primer introduced field research: [[participant-observation|participant observation]], [[ethnography|ethnography]] and [[case-study|case studies]] (see {{field-research}}). Observation is useful when people can’t easily put something into words (unwritten rules, routines, body language), when what people say and do may differ, and when the setting itself matters.",
      "Researchers can take different roles. A classic scheme (from the sociologist Raymond Gold, 1958) places them on a continuum:",
      {table:[["Role","What it looks like","Trade-off"],["Complete participant","A full member; others may not know about the research","Deep access, but serious ethical problems if covert"],["Participant as observer","Takes part openly, and people know about the research","Rich insight; the researcher may change what happens"],["Observer as participant","Mostly watches, with brief, open contact","Easier notes; a more outside view"],["Complete observer","Watches without interacting, for example in a public space","Little influence on people; little insight into meanings"]]},
      "Hurst describes the same idea as a continuum from full participation to observation. The more you take part, the more you rely on notes written later; the more you just watch, the easier it is to take notes on the spot.",
      {warn:"Watching people can change what they do, an example of the [[hawthorne-effect|Hawthorne effect]]. Covert observation (people don’t know they’re being studied) is rarely approved by [[ethics-committee|ethics committees]] and needs strong justification. For practice, observe only public behaviour in public places, without photos or recordings of people."}
    ]},
    {h:"What to notice", body:[
      "Beginners often write “nothing much happened”. Something always happens; you just haven’t yet trained your eye. Useful things to record:",
      {list:[
        "**Basics:** date, start and end time, place, and who was present (described by role, not name: “a stall-holder in her sixties”).",
        "**The setting:** layout, sounds, smells, what’s on the walls, where people can and can’t go.",
        "**People and actions:** who does what, in what order, who talks to whom, who waits, who is ignored.",
        "**Talk:** short exact phrases in quotation marks; longer exchanges paraphrased and marked as such.",
        "**Changes over time:** what happens at opening time versus the rush hour.",
        "**What doesn’t happen:** silences, things people avoid, rules nobody breaks."
      ]},
      {tip:"Add a few keywords at the top of each set of notes (for example: queueing, bargaining, regulars). Hurst suggests this so you can search your notes later."}
    ]},
    {h:"From jottings to full fieldnotes", body:[
      "In the field you rarely have time to write properly, and scribbling constantly can make people uneasy. So researchers take [[jottings|jottings]]: brief notes of key words, times, short quotes and sketches. One researcher quoted in Hurst’s book often sent herself text messages with jotted notes.",
      "Then, as soon as possible, ideally the same day, they write full [[fieldnotes-term|fieldnotes]]: detailed, readable accounts that turn each jotting into a scene. Memory fades very quickly, so leaving it a week means losing most of the detail. Hurst suggests writing the next morning if you are exhausted, and planning at least as much writing time as observing time. Emerson, Fretz and Shaw’s *Writing Ethnographic Fieldnotes* (2nd edition, 2011) is the standard guide to this craft.",
      {ex:"Jottings: 7:40 queue 9 ppl. man w/ crate → front?? “he’s family”. vendor laughs. rain starts 7:55\n\nFull note: At 7:40 nine people were queueing at the vegetable stall, most holding their own bags. A man of about thirty carrying an empty crate walked past the queue to the front. Nobody objected aloud. The woman in front of me said, quietly, “He’s family,” and the vendor laughed as she filled his crate first. At 7:55 it began to rain and four people left the queue.", label:"Worked example: from jottings to a full note (invented)", mono:true},
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="t4u7-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="60" y="10" width="220" height="70" rx="10" stroke-width="2"/><text x="170" y="34" text-anchor="middle">In the field: jottings</text><text class="s" x="170" y="54" text-anchor="middle">key words, times, short quotes</text><text class="s" x="170" y="70" text-anchor="middle">a few seconds each</text><path class="d-ink" d="M170 80 V104" stroke-width="2" marker-end="url(#t4u7-l3-a)"/><text class="s" x="250" y="97" text-anchor="middle">same day</text><rect class="d-lup" x="60" y="108" width="220" height="70" rx="10" stroke-width="2"/><text x="170" y="132" text-anchor="middle">At the desk: full notes</text><text class="s" x="170" y="152" text-anchor="middle">every jotting becomes a scene</text><text class="s" x="170" y="168" text-anchor="middle">as long as fieldwork, or longer</text><path class="d-ink" d="M120 178 L84 210" stroke-width="2" marker-end="url(#t4u7-l3-a)"/><path class="d-ink" d="M220 178 L256 210" stroke-width="2" marker-end="url(#t4u7-l3-a)"/><rect class="d-sage" x="6" y="214" width="158" height="132" rx="10" stroke-width="2"/><text x="85" y="238" text-anchor="middle">Description</text><text class="s" x="85" y="260" text-anchor="middle">what I saw and heard</text><text class="s" x="85" y="280" text-anchor="middle">“A man walked past</text><text class="s" x="85" y="296" text-anchor="middle">the queue to the</text><text class="s" x="85" y="312" text-anchor="middle">front. Nobody</text><text class="s" x="85" y="328" text-anchor="middle">objected aloud.”</text><rect class="d-rose" x="176" y="214" width="158" height="132" rx="10" stroke-width="2"/><text x="255" y="238" text-anchor="middle">Reflection</text><text class="s" x="255" y="260" text-anchor="middle">what I think, feel,</text><text class="s" x="255" y="276" text-anchor="middle">wonder</text><text class="s" x="255" y="296" text-anchor="middle">“Is family a rule</text><text class="s" x="255" y="312" text-anchor="middle">that beats queueing?</text><text class="s" x="255" y="328" text-anchor="middle">I felt annoyed.”</text><path class="d-ink" d="M170 346 V370" stroke-width="2" marker-end="url(#t4u7-l3-a)"/><text x="170" y="390" text-anchor="middle">Memos → analysis</text></svg>', alt:"A flow from top to bottom. Jottings in the field: key words, times and short quotes. Same day, these become full notes at the desk, where every jotting becomes a scene, taking as long as the fieldwork or longer. The full notes split into two columns: description, for example a man walked past the queue to the front and nobody objected aloud; and reflection, for example wondering whether family is a rule that beats queueing, and noting the researcher felt annoyed. Both feed memos and analysis.", cap:"Jottings are reminders; full notes are the data. Keep what you observed apart from what you think about it."}
    ]},
    {h:"Description and reflection", body:[
      "Good fieldnotes keep two kinds of writing apart, either in two columns (Hurst suggests dividing the page this way) or in clearly marked sections:",
      {list:[
        "**Descriptive notes:** what happened, as concretely as possible. Who did what, said what, in what order.",
        "**Reflective notes:** your interpretations, hunches, questions, feelings and reactions, and ideas to follow up."
      ]},
      "The test is whether another observer could have written your description. “She was angry” is an interpretation. “She raised her voice, put the cup down hard and left without paying” is a description that lets a reader judge. Labels like *rude*, *lazy*, *chaotic* or *friendly* belong in the reflective column, with the behaviour that prompted them in the descriptive one.",
      "Reflective notes are valuable, not second-class. Feelings tell you about your own position (“I felt like an outsider when they switched language”) and early hunches become [[analytic-memo|analytic memos]]: short notes to yourself that develop ideas about what the data might mean.",
      {key:"Describe behaviour first; interpret second, and label your interpretation as yours."}
    ]},
    {h:"Thick description", body:[
      "[[thick-description|Thick description]] is a term the anthropologist Clifford Geertz made famous in a 1973 essay, borrowing it from the philosopher Gilbert Ryle. Ryle’s example: two boys contract an eyelid. One has a twitch; the other is winking at a friend. A camera records the same movement. Only a description that includes context and meaning (who, to whom, what it signals here) tells them apart.",
      "So thick description isn’t simply *long* description. It is detailed description of what happened **plus** the context and meanings that make it intelligible: “He’s family,” the queue’s silence and the vendor’s laugh together suggest a local rule about kinship and fairness.",
      "Thick description matters twice. In analysis, it keeps interpretations anchored in evidence. In reporting, it gives readers enough detail to judge whether findings might apply to their own setting, which Lesson 5 calls transferability."
    ]},
    {h:"Documents and other existing data", body:[
      "Not all qualitative data is generated by the researcher. Documents and other existing materials record what organisations and people did and said, often without any researcher present:",
      {list:[
        "Official documents: policies, meeting minutes, reports, court records, school handbooks.",
        "Personal documents: letters, diaries, family photos, recipe books, emails (with permission).",
        "Media and archives: newspapers, broadcasts, adverts, historical collections (Hurst has chapters on archival research and on [[content-analysis|content analysis]]).",
        "Online material: forums, blogs, reviews, social media posts, websites."
      ]},
      "Treat every document as a made thing, not a window onto the truth. Ask: who made it, for whom, and why? What did it need to say or avoid saying? What’s missing? A company’s annual report and its staff’s anonymous reviews describe the same workplace for different audiences.",
      {warn:"Public online posts were written for a particular audience, not for your study. Quoting them word for word can let anyone find the author with a search engine. Researchers often paraphrase, ask permission, or avoid quoting identifiable people. Platform rules and ethics guidance vary, so check your institution’s rules."},
      {tip:"Existing data is “nonreactive”: it can’t be changed by your presence. That makes it a good partner for interviews and observation (see [[secondary-data|secondary data]])."}
    ]}
   ],
   try:[
    {id:"t4u7-l3-x1", type:"match", q:"Match each observer role to the situation that shows it.", pairs:[
      ["Complete participant","A researcher works as a café server for a year, and colleagues don’t know about the study","Full membership with the research hidden: deep access, serious ethical issues."],
      ["Participant as observer","A researcher openly joins a community choir and sings in every rehearsal","Takes part fully, and members know about the research."],
      ["Observer as participant","A researcher sits in on team meetings, chatting briefly before and after","Mainly observing, with limited, open contact."],
      ["Complete observer","A researcher counts how people use a public square from a bench, without talking to anyone","Pure watching with no interaction."]
    ]},
    {id:"t4u7-l3-x2", type:"order", q:"Put Sione’s observation process in order.", items:[
      {t:"Decide on the setting and focus, and check what is ethically appropriate there", why:"Planning and ethics come before going into the field."},
      {t:"Observe, taking quick jottings of key words, times and short quotes", why:"Jottings are taken in the field, briefly."},
      {t:"Write full fieldnotes the same day, turning jottings into scenes", why:"Detail fades quickly, so full notes are written as soon as possible."},
      {t:"Add reflective notes and keywords, separate from the description", why:"Reflection is added and labelled once the description is down."},
      {t:"Write an analytic memo about patterns across several visits", why:"Memos build interpretation across many sets of notes."}
    ]},
    {id:"t4u7-l3-x3", type:"sort", q:"Is each line from Mei’s notes description or reflection?", buckets:["Description","Reflection"], items:[
      {t:"At 10:15 the librarian switched off the lights in the children’s corner and three parents began packing bags.", b:0, why:"Observable actions with a time: description."},
      {t:"I wonder whether the lights are a polite signal that it’s time to leave.", b:1, why:"A hunch about meaning: reflection."},
      {t:"A boy of about six said, “Again!” and pressed the button on the talking book.", b:0, why:"An exact short quote and an action: description."},
      {t:"I felt awkward sitting alone without a child here.", b:1, why:"The researcher’s feelings: reflection, and useful for reflexivity."},
      {t:"Two grandparents spoke to each other in a language I didn’t recognise, then one translated for the librarian.", b:0, why:"What happened, without interpreting it: description."},
      {t:"This seems to be a place where newcomers learn the town’s rules.", b:1, why:"An interpretation to test later: reflection or memo material."}
    ]},
    {id:"t4u7-l3-x4", type:"spot", q:"Dmitri’s fieldnote is meant to be descriptive. Tap each phrase that **mixes in judgement or interpretation** instead of describing.", ask:"judgement or interpretation", parts:[
      {t:"At 14:05 a bus stopped and eleven people got off.", flag:false, why:"Countable, observable and timed."},
      " ",
      {t:"The driver was obviously lazy", flag:true, why:"“Lazy” is a judgement. Describe the behaviour that prompted it (for example, “The driver stayed seated while a passenger lifted a pram down the steps”)."},
      " ",
      {t:"and stayed in his seat while a woman lifted a pram down the steps.", flag:false, why:"This is the concrete behaviour, which is what belongs in a description."},
      " ",
      {t:"The passengers were clearly annoyed with the council.", flag:true, why:"An interpretation of feelings and their target. Record what people said or did; put the interpretation in the reflective column."},
      " ",
      {t:"One man said, “Third time this week,” and checked his watch.", flag:false, why:"An exact short quote and an action: good description."}
    ]},
    {id:"t4u7-l3-x5", type:"mcq", q:"Which passage is the best example of thick description?", options:[
      {t:"At a wedding, guests pressed money onto the bride’s forehead as she danced; an aunt explained this showed blessing and family support, and guests watched who gave and how much.", ok:true, why:"It combines detailed action with the meaning it has for participants and the social context (giving is public and noticed)."},
      {t:"The wedding was very colourful and everyone had a great time.", why:"Thin and evaluative: no specific actions, no meanings."},
      {t:"There were 214 guests, 6 musicians and 3 courses.", why:"Precise counts, but no meaning or context: detailed but still thin."},
      {t:"A very long account of every dish served, in order.", why:"Long isn’t the same as thick. Without meaning and context, length adds little."}
    ]},
    {id:"t4u7-l3-x6", type:"mcq", q:"Ana is studying how patients talk about long waits for surgery and finds a public online forum full of relevant posts. What should she do?", options:[
      {t:"Check her ethics committee’s and the platform’s rules, and avoid quoting identifiable posts word for word unless she has permission", ok:true, why:"Public posts are still people’s words. A word-for-word quote can be searched back to its author, so care and approval come first."},
      {t:"Copy and publish the most dramatic posts with usernames, because they’re public", why:"Publishing usernames and exact quotes can identify and harm people, especially on health topics."},
      {t:"Join the forum pretending to be a patient to get more stories", why:"Deceiving people to generate data is covert research, which needs strong justification and approval and is rarely allowed."},
      {t:"Ignore online material entirely, because it can never be used in research", why:"Online material is used in research all the time, with appropriate care and approval."}
    ]}
   ],
   apply:{intro:"Practise observation in a public place and look at a document with a researcher’s eye. Don’t photograph or record people, and don’t follow or single anyone out.", tasks:[
     {t:"Twenty minutes of observation", how:["Choose a public place where watching is normal: a park, a bus stop, a market, a library, a café.","For 20 minutes, take jottings only: key words, times, short quotes you overhear in passing, a quick sketch of the layout. Describe people by role or appearance in general terms, never by name.","Within a few hours, write full notes in two columns: description on one side, reflection on the other.","Add three keywords at the top."], write:"Place, date, time… Jottings… Full description… Reflections and questions… Keywords…"},
     {t:"Rewrite judgements as descriptions", how:["Read through your notes and underline any judgement words (busy, rude, friendly, chaotic, lazy, happy).","For each one, write the specific behaviour that made you think it.","Move the judgement word to your reflective column."], write:"Judgement word → what I actually saw…"},
     {t:"Question a document", how:["Choose a public document: a local council newsletter, a school or workplace policy, a product’s terms of service, or an old family letter you have permission to use.","Answer: who made it, for whom, why, what it needed to say, and what is missing.","Write one research question this document could help answer, and one it couldn’t."], write:"Document… Who, for whom, why… What’s missing… A question it helps with… A question it can’t answer…"}
   ], proof:"Two-column fieldnotes from 20 minutes of public observation, a list of judgements rewritten as descriptions, and notes interrogating one document."},
   read:[
    {book:"hurst", where:"Chapter 13, “Participant Observation”, and Chapter 16, “Archival and Historical Research”"},
    {book:"bhatt", where:"Chapter 12, “Interpretive Research” (the part on interpretive data collection: interviews, observation and documents)"}
   ]
  },

  /* ───────────── Lesson 4 ───────────── */
  {id:"t4u7-l4", title:"Transcription and coding", minutes:60,
   goals:["Choose a transcription style that fits your analysis","Weigh automatic transcription against privacy and accuracy","Code a passage with descriptive, in vivo and process codes","Build and use a simple codebook","Pick suitable free or paid analysis software"],
   hook:{q:"Two researchers code the same sentence: “Some weeks I feel like I’m stealing time from everyone.” One labels it TIREDNESS AND GUILT. The other labels it “STEALING TIME”. Who has made a mistake?", options:["The first: codes must use the participant’s exact words","The second: codes must be the researcher’s own words","Neither: they are two legitimate kinds of code","Both: codes must come from a fixed official list"], answer:2, reveal:"**Neither.** The first is a descriptive-style code in the researcher’s words; the second is an in vivo code that keeps the participant’s own vivid phrase. Both are standard tools, and each shows something different. This lesson covers turning recordings into text and text into codes."},
   learn:[
    {h:"From sound to text", body:[
      {lead:"Most interview and focus group analysis works from a written record of the conversation."},
      "A [[transcript|transcript]] is that written record. Making one is not neutral copying: you decide what to include (pauses, laughter, “um”), how to punctuate, and how to show who is speaking. Those choices shape what you can analyse later. Common styles:",
      {table:[["Style","What it keeps","Suits"],["Verbatim","Every word, including fillers (“um”, “like”), false starts, repetitions, and often pauses and laughter","Analyses where how people speak matters"],["Intelligent (clean) verbatim","The full meaning, with fillers, false starts and stutters removed","Most thematic and content-focused studies"],["Detailed notation (for example the Jefferson system)","Pause lengths, overlaps, emphasis, intonation","Conversation analysis and close study of talk"]]},
      "[[intelligent-verbatim|Intelligent verbatim]] tidies speech but must not rewrite it: keep people’s own words, dialect and grammar, and never “improve” what they meant. Whatever style you choose, write down your conventions so transcripts are consistent.",
      {ex:"I: So how did the first term go?\nP7: Honestly? [laughs] Badly. I tried to do everything at night after the kids were asleep.\nI: Mm.\nP7: I was falling asleep over the readings. [pause] Then my sister said, “Why don’t you do it on the bus?”\n[inaudible 04:12]", label:"Transcript conventions (invented): speaker IDs, [laughs], [pause], [inaudible + time]", mono:true},
      {tip:"Use IDs (P7) or pseudonyms in transcripts, never real names, and remove or change details that could identify someone: a rare job title, a named village, a sibling’s name."}
    ]},
    {h:"Automatic transcription and the privacy question", body:[
      "Typing a transcript by hand takes several hours for each hour of recording. Automatic speech recognition now does a first draft in minutes, and many tools offer it:",
      {list:[
        "**Video-call platforms** can produce transcripts of meetings. Hurst notes that these are imperfect and must be checked against the recording, and that they miss tone and body language.",
        "**Word processors and office suites:** for example, Microsoft Word’s Transcribe (**Home → Dictate → Transcribe**, with a Microsoft 365 subscription) uploads the audio to Microsoft for processing and saves it in a *Transcribed Files* folder in your OneDrive.",
        "**Phone recorder apps** on some phones offer transcripts. Check whether the processing happens on the phone or on a company’s servers.",
        "**Online transcription services,** free and paid, where you upload a file.",
        "**Local tools** that run entirely on your own computer, such as the free, open-source noScribe (Windows, macOS and Linux), built on the openly released Whisper speech-recognition models."
      ]},
      "Accuracy varies with audio quality, accents, overlapping speech, names and specialist words, and across languages. Always listen through and correct the draft. That checking pass also helps you get to know your data.",
      "The bigger issue is **privacy**. A research recording is personal data: voices are identifying, and people often mention names, places and health details. Uploading it to an online service shares it with that company. Before using any tool, check:",
      {table:[["Question","Why it matters"],["What did participants agree to?","If the consent form said recordings stay with the research team, a third-party upload may break that promise"],["Does your ethics approval or data protection plan allow it?","Many institutions list approved tools, and data protection laws (for example the EU’s GDPR) set rules"],["Where is the audio processed and stored, and for how long?","Servers in another country, or keeping files indefinitely, may not be allowed"],["Can the company use your data to improve its products?","Some services’ terms allow this unless you opt out"]]},
      {warn:"When in doubt, choose a tool your institution approves or one that runs locally on your own device, and never upload recordings from participants who weren’t told about it."}
    ]},
    {h:"What coding is", body:[
      "A [[code-qual|code]] is a short label you attach to a piece of data to capture what it is about or what it means. Hurst calls coding the iterative process of assigning meaning to the data you have collected, and the main tool for analysing qualitative data.",
      "An analogy: a book’s index lets you find every page about a topic. Coding builds an index to your data, but an interpretive one: you decide that this sentence is about “asking for help” and that one is about “hiding things from the boss”, then you can pull together every passage on each and compare them.",
      "Coding is a way into analysis, not the analysis itself. After coding, you still have to compare, question and interpret: what patterns are there, how do codes relate, and what do they mean for the research question?",
      "Codes come from two directions, and most projects mix them:",
      {list:[
        "[[deductive-coding|Deductive coding]] starts with codes decided in advance from theory, earlier research or the research question, such as categories from a framework.",
        "[[inductive-coding|Inductive coding]] builds codes from the data itself, staying open to what participants raise."
      ]}
    ]},
    {h:"Three useful kinds of code", body:[
      "Johnny Saldaña’s *The Coding Manual for Qualitative Researchers* (5th edition, 2025) profiles dozens of coding methods. Three are good starting points; Hurst includes them among five kinds she recommends to beginners (with values and emotion codes):",
      {table:[["Kind","What it captures","Example"],["Descriptive","The topic of a passage, in a word or short phrase, usually a noun","CHILDCARE"],["In vivo","The participant’s own words, in quotation marks","“IT’S MY TIME”"],["Process","Action or change, written with “-ing” words (gerunds)","USING COMMUTE TIME"]]},
      "Descriptive codes are a good first index but can stay at surface level. [[in-vivo-code|In vivo codes]] keep participants’ voices and vivid language. Process codes highlight what people *do* and how things change over time. Many researchers also code emotions and values.",
      "Saldaña separates **first cycle** coding (the first passes through the data) from **second cycle** coding, where you reorganise first-cycle codes into fewer, broader categories or concepts."
    ]},
    {h:"Worked example: coding an excerpt", body:[
      "The excerpt below is **invented** for teaching. Imagine a study asking: *How do adults who work full time fit university study into their lives?*",
      {ex:"P7: The first term I tried to do everything at night after the kids were asleep. I was falling asleep over the readings. Then my sister said, “Why don’t you do it on the bus?” So now I listen to the lectures on my commute. It’s not ideal, but it’s my time. My manager doesn’t really know I’m studying, so I can’t ask to leave early. Some weeks I just feel like I’m stealing time from everyone.", label:"Invented interview excerpt", mono:true},
      {table:[["Segment","Code","Kind"],["“tried to do everything at night after the kids were asleep”","NIGHT-TIME STUDY","Descriptive"],["“falling asleep over the readings”","TIREDNESS","Descriptive"],["“my sister said, ‘Why don’t you…’”","GETTING ADVICE FROM FAMILY","Process"],["“listen to the lectures on my commute”","USING COMMUTE TIME","Process"],["“it’s my time”","“IT’S MY TIME”","In vivo"],["“My manager doesn’t really know”","HIDING STUDY AT WORK","Process"],["“stealing time from everyone”","“STEALING TIME”","In vivo"]]},
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="t4u7-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="18" text-anchor="middle">From data to codes to a category</text><rect class="d-panel" x="10" y="30" width="320" height="104" rx="10" stroke-width="1.5"/><text class="s" x="22" y="52">“…at night after the kids were asleep…</text><text class="s" x="22" y="70">…falling asleep over the readings…</text><text class="s" x="22" y="88">…listen to the lectures on my commute…</text><text class="s" x="22" y="106">…my manager doesn’t really know…</text><text class="s" x="22" y="124">…stealing time from everyone.”</text><path class="d-ink" d="M170 134 V156" stroke-width="2" marker-end="url(#t4u7-l4-a)"/><text class="s" x="250" y="150" text-anchor="middle">first cycle</text><rect class="d-sage" x="4" y="160" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="86" y="182" text-anchor="middle">NIGHT-TIME STUDY</text><rect class="d-sage" x="172" y="160" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="254" y="182" text-anchor="middle">TIREDNESS</text><rect class="d-gold" x="4" y="202" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="86" y="224" text-anchor="middle">USING COMMUTE TIME</text><rect class="d-gold" x="172" y="202" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="254" y="224" text-anchor="middle">HIDING STUDY AT WORK</text><rect class="d-rose" x="4" y="244" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="86" y="266" text-anchor="middle">“IT’S MY TIME”</text><rect class="d-rose" x="172" y="244" width="164" height="34" rx="6" stroke-width="1.5"/><text class="s" x="254" y="266" text-anchor="middle">“STEALING TIME”</text><text class="s" x="170" y="300" text-anchor="middle">descriptive · process · in vivo</text><path class="d-ink" d="M170 308 V330" stroke-width="2" marker-end="url(#t4u7-l4-a)"/><text class="s" x="254" y="324" text-anchor="middle">second cycle</text><rect class="d-lup" x="30" y="334" width="280" height="76" rx="10" stroke-width="2"/><text x="170" y="358" text-anchor="middle">Candidate category:</text><text x="170" y="378" text-anchor="middle">study time as borrowed time</text><text class="s" x="170" y="398" text-anchor="middle">taken from sleep, family and work</text><text class="s" x="170" y="434" text-anchor="middle">Only a candidate: it needs checking</text><text class="s" x="170" y="452" text-anchor="middle">across all the interviews.</text></svg>', alt:"Top: an invented interview excerpt about studying at night, falling asleep over readings, listening to lectures on the commute, a manager who doesn’t know, and stealing time from everyone. First cycle coding produces six code boxes: two descriptive codes, night-time study and tiredness; two process codes, using commute time and hiding study at work; two in vivo codes in quotation marks, it’s my time and stealing time. Second cycle coding groups them into a candidate category: study time as borrowed time, taken from sleep, family and work. A note says it is only a candidate that needs checking across all interviews.", cap:"Codes summarise segments; grouping codes across the whole dataset leads towards categories and themes."},
      "One excerpt can only suggest ideas. The category “study time as borrowed time” becomes worth keeping only if other participants describe something similar, and you should look just as hard for those who don’t (perhaps people whose employers support their study). Lesson 5 continues from here."
    ]},
    {h:"Codebooks and memos", body:[
      "As codes multiply, you need a record of what each one means, or you’ll apply them inconsistently. A [[codebook|codebook]] lists your codes with, at minimum (following Hurst): the code’s name, a description of what it means and when to apply it, and an example. Many codebooks also say when **not** to use a code.",
      {ex:"Code: USING COMMUTE TIME\nDefinition: Participant describes using travel time for study tasks.\nUse when: any study activity during travel (reading, listening, planning).\nDon’t use when: travel is only mentioned as a source of tiredness (use TIREDNESS).\nExample: “Now I listen to the lectures on my commute.” (P7)", label:"One codebook entry (invented)", mono:true},
      "A codebook grows and changes as you code: you merge codes that overlap, split ones that hold too much, and rename unclear ones. Keep old versions so you can show how your analysis developed. In team projects, coders compare how they applied codes and discuss differences; some approaches also measure agreement between coders, while others (including reflexive thematic analysis, Lesson 5) don’t, because they treat coding as interpretation rather than measurement.",
      "Alongside codes, write [[analytic-memo|analytic memos]]: notes to yourself about what you’re noticing, how codes connect, surprises and questions. Hurst’s advice: write early and write often."
    ]},
    {h:"Software for qualitative analysis", body:[
      "You can code with highlighters on paper, comments in a word processor or a spreadsheet of segments and codes. For larger projects, researchers use [[caqdas|CAQDAS]] (computer-assisted qualitative data analysis software). It stores your data, lets you attach codes to segments, retrieves every segment with a code, and holds your memos. It doesn’t do the thinking for you.",
      {table:[["Software","Cost","Notes"],["Taguette","Free, open source","Highlight and tag text documents; desktop app for all major systems, plus an online version"],["QualCoder","Free, open source","Desktop app; codes text, images, audio and video"],["NVivo","Paid","Long-established; made by Lumivero"],["ATLAS.ti","Paid","Long-established; acquired by Lumivero in 2024"],["MAXQDA","Paid","Made by VERBI; strong for mixed methods"],["Dedoose","Paid subscription","Web-based; designed with mixed methods in mind"]]},
      "Universities often provide licences for paid programs, and most offer free trials. Choose by what your data looks like (text only, or audio and video?), whether you work in a team, what your supervisor or colleagues use, and whether projects can be exported if you change tools later.",
      {warn:"Several programs now offer AI features that suggest codes or summaries. Treat suggestions as a starting point you check, not findings. Some of these features send your data to an outside AI service, so check your consent forms and ethics approval first."}
    ]}
   ],
   try:[
    {id:"t4u7-l4-x1", type:"mcq", q:"Hana is studying how people describe their recovery after a stroke. She is interested in themes in what they say, not in pauses or speech patterns. Which transcription style fits best?", options:[
      {t:"Intelligent (clean) verbatim, keeping participants’ own words but removing fillers and false starts", ok:true, why:"Her analysis focuses on content, so clean verbatim keeps the meaning and the participants’ words while making transcripts easier to read."},
      {t:"A summary of each interview in her own words", why:"A summary replaces participants’ words with hers, which loses data and makes in vivo coding and quotes impossible."},
      {t:"Detailed Jefferson-style notation of pauses and intonation", why:"That suits conversation analysis. For themes in content it costs a lot of time for detail she won’t use. (Speech features might matter in some stroke research, but not for her stated question.)"},
      {t:"A corrected version where she fixes grammar and makes answers clearer", why:"Rewriting changes participants’ words and can distort their meaning. Clean verbatim removes fillers but doesn’t rewrite."}
    ]},
    {id:"t4u7-l4-x2", type:"spot", q:"Kenji wrote this plan for transcribing interviews with nurses about workplace stress. Tap each step that is a **privacy or ethics problem**.", ask:"a privacy or ethics problem", parts:[
      {t:"Recordings are labelled with participant IDs (N01, N02…), not names.", flag:false, why:"Good practice: files don’t reveal who is speaking."},
      " ",
      {t:"I’ll upload them to a free online transcription website I found, because it’s quick.", flag:true, why:"Uploading shares personal data with an unknown company. He needs to check consent, ethics approval, where data is stored and how it is used, or use an approved or local tool."},
      " ",
      {t:"I’ll listen to every transcript against the audio and correct errors.", flag:false, why:"Essential: automatic and human transcripts both contain errors."},
      " ",
      {t:"Transcripts will keep the hospital and ward names so readers understand the context.", flag:true, why:"Named wards make nurses identifiable. Replace with general descriptions (“a surgical ward in a large city hospital”)."},
      " ",
      {t:"Consent forms will be stored separately from transcripts.", flag:false, why:"Good practice: it stops names being linked easily to what people said."},
      " ",
      {t:"I’ll keep the recordings on my personal phone, which backs up to my cloud account, indefinitely.", flag:true, why:"Unplanned cloud backups and indefinite storage break most data plans. Store securely in an approved place and delete when the plan says."}
    ]},
    {id:"t4u7-l4-x3", type:"sort", q:"Here are codes from the invented excerpt and others like it. What kind of code is each?", buckets:["Descriptive","In vivo","Process"], items:[
      {t:"CHILDCARE", b:0, why:"A noun naming the topic: descriptive."},
      {t:"“IT’S MY TIME”", b:1, why:"The participant’s own words in quotation marks: in vivo."},
      {t:"NEGOTIATING WITH A PARTNER", b:2, why:"An “-ing” action: process."},
      {t:"“STEALING TIME”", b:1, why:"A vivid phrase kept in the participant’s words: in vivo."},
      {t:"WORKPLACE", b:0, why:"A topic label: descriptive."},
      {t:"HIDING STUDY AT WORK", b:2, why:"Describes an ongoing action: process."},
      {t:"TIREDNESS", b:0, why:"Names the topic of the passage: descriptive."}
    ]},
    {id:"t4u7-l4-x4", type:"match", q:"Match each part of a codebook entry to its purpose.", pairs:[
      ["Code name","A short label you can apply quickly","The name is what you attach to segments."],
      ["Definition","Says what the code means","Without a definition, codes drift as you work."],
      ["“Use when”","Sets out which segments qualify","Inclusion guidance makes coding consistent."],
      ["“Don’t use when”","Separates the code from similar codes","Exclusion guidance prevents overlaps."],
      ["Example","Shows a real segment that fits","An example anchors the definition in data."]
    ]},
    {id:"t4u7-l4-x5", type:"order", q:"Put these analysis steps in a sensible order for a small interview study.", items:[
      {t:"Transcribe (or check an automatic transcript against the audio)", why:"You need an accurate text before coding."},
      {t:"Read all the transcripts through, making brief notes", why:"Getting to know the whole dataset comes before coding any part of it."},
      {t:"Code transcripts, inductively and with any planned codes", why:"First-cycle coding labels the data."},
      {t:"Write codebook entries and merge or split codes", why:"As codes multiply, the codebook keeps them consistent."},
      {t:"Group codes into broader categories and write memos about them", why:"Second-cycle work moves from many codes to fewer, bigger ideas."}
    ]},
    {id:"t4u7-l4-x6", type:"mcq", q:"Tomás studies how small shops respond to a new digital-payments law. He starts with codes from a published framework (cost, trust, customer demand) and adds new codes as shopkeepers raise issues he hadn’t expected. What is he doing?", options:[
      {t:"Combining deductive and inductive coding", ok:true, why:"Starting codes from a framework is deductive; adding codes from the data is inductive. Mixing them is very common."},
      {t:"Purely inductive coding", why:"He began with codes from an existing framework, which is deductive."},
      {t:"Purely deductive coding", why:"He also adds codes from the data, which is inductive."},
      {t:"Not coding at all, because codes must come only from the data", why:"Codes from theory are a legitimate starting point; many approaches use them."}
    ]},
    {id:"t4u7-l4-x7", type:"mcq", q:"Lucía has 12 interview transcripts and a few photos, no budget, and wants software she can keep using after her course ends. Which choice fits best?", options:[
      {t:"A free, open-source program such as QualCoder (which handles text and images) or Taguette (text)", ok:true, why:"Free tools cover a small project well and stay available. QualCoder also handles images; Taguette is for text."},
      {t:"Buy the most expensive program, because only paid software produces valid analysis", why:"Validity comes from the analysis, not the price of the software."},
      {t:"Use an AI chatbot to code everything and report what it says", why:"AI suggestions need checking, and uploading transcripts to an outside service may break consent and ethics approval."},
      {t:"No tool can help: qualitative analysis can only be done on paper", why:"Paper works, but software makes retrieving and comparing coded segments much easier."}
    ]}
   ],
   apply:{intro:"Turn talk into text and text into codes. If your practice interview wasn’t recorded, use your notes, or the invented excerpt in this lesson.", tasks:[
     {t:"Transcribe three minutes two ways", how:["Take three minutes of your consented practice interview recording (or your detailed notes).","Transcribe it full verbatim: every “um”, repeat and pause.","Then make an intelligent verbatim version.","Replace any names and identifying details with IDs or general descriptions.","If you try an automatic tool, use one that runs on your own device, or think through the privacy questions in this lesson first, and correct its output against the audio."], write:"Verbatim version… Intelligent verbatim version… What changed… How long it took…"},
     {t:"Code with comments in a document", how:["Paste your transcript (or the invented excerpt) into a document.","Highlight a segment and add a comment containing your code. Word: **Review → New Comment**. Google Docs: **Insert → Comment**. LibreOffice Writer: **Insert → Comment**.","Aim for at least six codes: some descriptive, at least one in vivo (in quotation marks) and at least one process code (“-ing”).","List your codes and group them into two or three categories."], write:"My codes and their kinds… Categories… One thing the codes made me notice…"},
     {t:"Start a codebook", how:["Choose four of your codes.","For each, write a name, definition, “use when”, “don’t use when” and an example.","Note one code you merged, split or renamed and why."], write:"Codebook entries… One change I made and why…"},
     {t:"Optional: try free analysis software", how:["Look at Taguette (taguette.org) or QualCoder; both are free.","Create a test project and add only your practice or invented text, never real participant data.","Tag (code) at least five segments, then retrieve all segments for one tag."], write:"Tool tried… What was easy… What was confusing…"}
   ], proof:"Two versions of a short transcript, a coded document with descriptive, in vivo and process codes grouped into categories, and four codebook entries."},
   read:[
    {book:"hurst", where:"Chapter 18, “Data Analysis and Coding”, and Chapter 19, “Advanced Codes and Coding”"},
    {book:"bhatt", where:"Chapter 13, “Qualitative Analysis”", note:"Covers grounded theory coding (open, axial, selective), content analysis and hermeneutic analysis. The software it names dates from around 2012."}
   ]
  },

  /* ───────────── Lesson 5 ───────────── */
  {id:"t4u7-l5", title:"Themes and trustworthiness", minutes:60,
   goals:["Tell a theme from a topic summary","Work through Braun and Clarke’s six phases of thematic analysis","Explain saturation and why it is debated","Use Lincoln and Guba’s four criteria to judge and strengthen a study","Apply reflexivity, member checking, triangulation and thick description with their limits"],
   hook:{q:"Virginia Braun and Victoria Clarke, who developed a widely used version of thematic analysis, argue that one common phrase in qualitative papers is misleading. Which one?", options:["“Themes emerged from the data”","“Participants were interviewed”","“Interviews were transcribed”","“Participants gave informed consent”"], answer:0, reveal:"**“Themes emerged.”** Braun and Clarke argue that themes don’t sit in the data waiting to pop out: researchers *generate* them by interpreting the data, so writing “emerged” hides the analyst’s work. That idea runs through this lesson, from building themes to judging whether a study can be trusted."},
   learn:[
    {h:"From codes to themes", body:[
      {lead:"Codes label pieces of data. Themes tell the story of what those pieces mean together."},
      "In Braun and Clarke’s approach, a [[theme-qual|theme]] is a pattern of **shared meaning** across the dataset, held together by a central idea. It is different from a topic summary, which only lists what people said about a subject.",
      {table:[["Topic summary (not a theme)","Theme"],["“Time management”: participants talked about evenings, commutes and weekends","“Study as borrowed time”: participants described study time as taken from family, sleep and employers, which produced guilt and secrecy"],["“Views on the new clinic”: some liked it, some didn’t","“Convenience at the cost of continuity”: patients valued shorter waits but missed seeing a doctor who knew them"]]},
      "A theme makes an interpretive claim that answers the research question. A topic summary could be written before any analysis, just from the interview questions.",
      {key:"Themes are made, not found. The researcher builds them through interpretation, which is why the researcher must explain how they did it."}
    ]},
    {h:"Braun and Clarke’s six phases", body:[
      "[[thematic-analysis-term|Thematic analysis]] (TA) is a widely used method for identifying and interpreting patterns of meaning in qualitative data. Virginia Braun and Victoria Clarke set out six phases in a 2006 paper, “Using thematic analysis in psychology” (*Qualitative Research in Psychology*). They later called their own approach **reflexive thematic analysis** and renamed several phases, most fully in their 2022 book *Thematic Analysis: A Practical Guide*:",
      {table:[["Phase","2006 name","Current name"],["1","Familiarising yourself with your data","Familiarising yourself with the dataset"],["2","Generating initial codes","Coding"],["3","Searching for themes","Generating initial themes"],["4","Reviewing themes","Developing and reviewing themes"],["5","Defining and naming themes","Refining, defining and naming themes"],["6","Producing the report","Writing up"]]},
      "The renaming is not cosmetic. They dropped “initial” from coding because it wrongly suggested a later, separate round of coding, and replaced “searching for themes” because “searching” implies themes are already there to be found.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="t4u7-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="150" y="18" text-anchor="middle">Reflexive thematic analysis</text><rect class="d-sage" x="20" y="32" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="59" text-anchor="middle">1 Familiarising with the dataset</text><rect class="d-sage" x="20" y="90" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="117" text-anchor="middle">2 Coding</text><rect class="d-lup" x="20" y="148" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="175" text-anchor="middle">3 Generating initial themes</text><rect class="d-lup" x="20" y="206" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="233" text-anchor="middle">4 Developing and reviewing</text><rect class="d-rose" x="20" y="264" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="291" text-anchor="middle">5 Refining, defining, naming</text><rect class="d-gold" x="20" y="322" width="250" height="44" rx="8" stroke-width="2"/><text x="145" y="349" text-anchor="middle">6 Writing up</text><path class="d-ink" d="M145 76 V88 M145 134 V146 M145 192 V204 M145 250 V262 M145 308 V320" stroke-width="2" fill="none"/><path class="d-ink" d="M272 228 C320 228 320 112 274 112" stroke-width="2" fill="none" marker-end="url(#t4u7-l5-a)"/><path class="d-ink" d="M272 286 C334 286 334 170 274 170" stroke-width="2" fill="none" marker-end="url(#t4u7-l5-a)"/><text class="s" x="170" y="388" text-anchor="middle">Arrows back: go round again when needed</text></svg>', alt:"Six boxes stacked vertically: 1 familiarising with the dataset, 2 coding, 3 generating initial themes, 4 developing and reviewing, 5 refining, defining and naming, 6 writing up. Curved arrows on the right loop back from phase 4 to phase 2 and from phase 5 to phase 3, showing the process goes back and forth.", cap:"The phases are a sequence you move through, but not in a straight line: reviewing themes often sends you back to recode or rethink."},
      {list:[
        "**1 Familiarising:** read and re-read transcripts, listen to recordings, note early ideas.",
        "**2 Coding:** work through the whole dataset systematically, labelling anything relevant to the question.",
        "**3 Generating initial themes:** cluster codes into candidate themes with a possible central idea.",
        "**4 Developing and reviewing:** check candidates against the coded extracts and the whole dataset. Do they hold together? Are two really one? Is a theme too thin?",
        "**5 Refining, defining and naming:** write what each theme is about and what it isn’t, and give it a name that conveys its meaning.",
        "**6 Writing up:** weave together the analytic story, data extracts and the wider literature. Writing is part of the analysis, not an afterthought."
      ]}
    ]},
    {h:"Three kinds of thematic analysis", body:[
      "Braun and Clarke stress that “thematic analysis” covers several approaches with different assumptions. Broadly:",
      {table:[["Approach","Core idea"],["Reflexive TA","The researcher’s interpretation is a resource. Themes are patterns of shared meaning. No measures of coder agreement; quality comes from depth, reflexivity and transparency"],["Codebook approaches (for example template or framework analysis)","A structured codebook or framework organises the analysis, often in teams or applied research"],["Coding reliability TA","Codes are fixed early, several coders apply them, and agreement between coders is measured"]]},
      "None is simply right or wrong, but mixing their assumptions causes trouble: claiming reflexive TA and then reporting coder-agreement scores, for example. Say which approach you used and follow it consistently."
    ]},
    {h:"When to stop: saturation and the debate", body:[
      "[[data-saturation|Saturation]] began in grounded theory (Glaser and Strauss, 1967), meaning the point at which new data no longer develop the properties of a category. Today it is more often used loosely: stop collecting when new interviews add no new codes or themes.",
      "It became popular partly because it seems to answer “how many interviews?”. In a well-known study, Guest, Bunce and Johnson (2006) coded 60 interviews with women in two West African countries and found that almost all their codes had appeared within the first twelve. But their participants were fairly similar and were all asked the same set of questions, and the authors tied their conclusion to studies like that, not to every project.",
      "Critics raise several problems:",
      {list:[
        "**It assumes meaning is out there to be used up.** Braun and Clarke (2021) argue that in reflexive TA, meaning is generated through interpretation, so there is no fixed point where it runs out. Decisions on sample size are judgements made in context.",
        "**“No new codes” isn’t the same as understanding.** Hennink and colleagues distinguish *code saturation* (hearing all the issues) from *meaning saturation* (understanding them well), which usually takes more data.",
        "**It is often claimed but not shown.** Many papers say “saturation was reached” without saying how it was judged."
      ]},
      "An alternative is to justify your sample by what you need for your question. Malterud and colleagues (2016) call this **information power**: the more relevant information each participant holds and the narrower the aim, the fewer participants you need.",
      {tip:"Whatever you use, explain it: how you chose participants, how you decided to stop, and what that means for your claims."}
    ]},
    {h:"Trustworthiness: four criteria", body:[
      "Qualitative research isn’t judged with statistical tests. In *Naturalistic Inquiry* (1985), Yvonna Lincoln and Egon Guba proposed four criteria for [[trustworthiness-term|trustworthiness]], each a counterpart to a quantitative idea (see [[validity|validity]] and [[reliability|reliability]] in the sociology primer):",
      {table:[["Criterion","Question it asks","Ways to strengthen it"],["Credibility (cf. internal validity)","Are the findings a believable account of participants’ realities?","Prolonged engagement, triangulation, peer debriefing, member checks, looking for cases that don’t fit"],["Transferability (cf. external validity)","Could findings apply in other settings?","Thick description, so readers can judge the fit with their own setting"],["Dependability (cf. reliability)","Is the process consistent and documented?","An audit trail of decisions; external audit"],["Confirmability (cf. objectivity)","Are findings shaped by the data rather than the researcher’s wishes?","Audit trail linking claims to data; reflexive journal"]]},
      "Notice transferability: the researcher can’t prove findings apply elsewhere, but can give readers enough detail to judge. That is why [[thick-description|thick description]] matters.",
      {tip:"Textbooks paraphrase these criteria a little differently. Bhattacherjee, for example, describes confirmability mainly as participants agreeing with the researcher’s inferences, while Lincoln and Guba’s own main technique for it was the audit trail."}
    ]},
    {h:"Reflexivity, member checking and triangulation", body:[
      "**[[reflexivity|Reflexivity]]** runs through the whole study: a reflexive journal of decisions, reactions and changing ideas, and a short statement in the report about the researcher’s position and how it may have shaped the work.",
      "**[[member-checking|Member checking]]** means returning data or findings to participants: a transcript to check, or a summary of themes to comment on. Lincoln and Guba saw it as a key credibility technique. It has limits. Participants may disagree with an analysis that is still sound (a theme draws on many people, not one), may have changed since the interview, or may not feel able to disagree with a researcher. So treat responses as more data to reflect on, not a vote.",
      "**[[triangulation|Triangulation]]** means checking findings from more than one angle. The sociologist Norman Denzin (1970) described four kinds: different **data** sources (people, times, places), different **investigators**, different **theories** and different **methods**. Agreement increases confidence; disagreement is not failure but a prompt to dig deeper.",
      "Other common strategies: **negative case analysis** (actively seeking data that contradict a theme), **peer debriefing** (talking your analysis through with a colleague outside the project) and an **audit trail** (keeping the codebook versions, memos and decision notes that show how you got from data to claims).",
      {warn:"These techniques aren’t a checklist that guarantees quality. Doing member checks or triangulation without thinking about what they mean in your approach adds little. Explain why you used each one."}
    ]},
    {h:"Writing it up honestly", body:[
      {list:[
        "Use quotes as evidence, labelled with IDs or pseudonyms (P7, “Amina”), and draw them from across participants, not just the most eloquent one.",
        "Be careful with quantity words. “Most participants” may be fine; precise percentages from a small purposive sample invite misreading.",
        "Show the analytic story, not just quotes: what each theme means and how it answers the question.",
        "Report your approach (which kind of TA), your sampling and stopping decisions, your position, and the limits of your claims.",
        "[[reporting-guideline|Reporting checklists]] such as COREQ (for interview and focus group studies) and SRQR (Standards for Reporting Qualitative Research) are used by many journals, especially in health research; check what your target journal expects."
      ]},
      {key:"A trustworthy qualitative study lets readers follow the path from what participants said and did to what the researcher claims, and see who walked that path."}
    ]}
   ],
   try:[
    {id:"t4u7-l5-x1", type:"sort", q:"Which of these from a study of older people’s internet use are themes, and which are only topic summaries?", buckets:["Theme (shared meaning)","Topic summary"], items:[
      {t:"“Being shown, not told”: participants learned best when a trusted person did a task alongside them, and felt patronised by written instructions.", b:0, why:"A central idea that interprets a pattern across participants."},
      {t:"“Smartphones”: participants talked about the phones they own.", b:1, why:"Just names a subject. It could be written from the interview questions alone."},
      {t:"“Online as a lifeline to family abroad”: video calls gave a sense of still being part of family life despite distance.", b:0, why:"Interprets what being online means to participants."},
      {t:"“Problems”: some had problems with passwords, some with scams, some with eyesight.", b:1, why:"A list of different things under one heading, with no shared meaning."},
      {t:"“Online banking views”: some liked it and some did not.", b:1, why:"Summarises the range of opinions without an interpretive claim."}
    ]},
    {id:"t4u7-l5-x2", type:"order", q:"Put Braun and Clarke’s phases of reflexive thematic analysis in order (current names).", items:[
      {t:"Familiarising yourself with the dataset", why:"Phase 1: immerse yourself in all the data before coding."},
      {t:"Coding", why:"Phase 2: label everything relevant across the whole dataset."},
      {t:"Generating initial themes", why:"Phase 3: cluster codes into candidate patterns of shared meaning."},
      {t:"Developing and reviewing themes", why:"Phase 4: test candidates against the extracts and the full dataset."},
      {t:"Refining, defining and naming themes", why:"Phase 5: pin down what each theme is and isn’t, and name it."},
      {t:"Writing up", why:"Phase 6: tell the analytic story with extracts and literature."}
    ]},
    {id:"t4u7-l5-x3", type:"number", q:"Amara records how many **new** codes each interview added: 15, 9, 6, 4, 2, 2, 1, 0, 1, 0 (interviews 1 to 10). What percentage of all her codes had appeared by the end of interview 5? (Round to the nearest whole number.)", answer:90, tol:0.5, unit:"%", why:"Total codes = 15+9+6+4+2+2+1+0+1+0 = 40. By interview 5: 15+9+6+4+2 = 36. 36 ÷ 40 × 100 = 90%. Note that interview 9 still added a code: new codes trailing off isn’t the same as understanding them, which is one reason saturation is debated.", wrongs:[
      {v:36, tol:0.5, why:"That’s the number of codes by interview 5. Divide by the total (40) and multiply by 100."},
      {v:50, tol:0.5, why:"That’s 5 of 10 interviews, not the share of codes. Add up codes, not interviews."},
      {v:89, tol:0.5, why:"Check the total: 15+9+6+4+2+2+1+0+1+0 = 40, so 36 ÷ 40 = 0.9 exactly."},
      {v:0.9, tol:0.01, why:"That’s the proportion. Multiply by 100 for a percentage."}
    ], hint2:"Add all ten numbers for the total, then add the first five. Divide, then multiply by 100."},
    {id:"t4u7-l5-x4", type:"match", q:"Match each strategy to the trustworthiness criterion it mainly supports (Lincoln and Guba).", pairs:[
      ["Spending months in a setting and checking interpretations with colleagues","Credibility","Prolonged engagement and peer debriefing support a believable account."],
      ["Describing the setting and participants in rich detail","Transferability","Thick description lets readers judge whether findings fit elsewhere."],
      ["Keeping a dated log of every change to the codebook and why","Dependability","A documented, consistent process can be audited."],
      ["Linking each claim to specific extracts that an auditor can trace","Confirmability","Shows the findings come from the data, not the researcher’s wishes."]
    ]},
    {id:"t4u7-l5-x5", type:"spot", q:"Read this methods paragraph from a student report. Tap each statement that is a **problem**.", ask:"a problem", parts:[
      {t:"We used Braun and Clarke’s reflexive thematic analysis.", flag:false, why:"Naming the specific approach is good practice."},
      " ",
      {t:"Three themes emerged from the data.", flag:true, why:"Braun and Clarke argue that themes don’t emerge; the researcher generates them. Write “we developed three themes”."},
      " ",
      {t:"Two coders achieved 92% agreement, proving the themes were correct.", flag:true, why:"Coder agreement belongs to coding reliability TA, not reflexive TA, and agreement wouldn’t prove themes “correct” anyway."},
      " ",
      {t:"The first author, a former community health worker, kept a reflexive journal throughout.", flag:false, why:"Reporting positionality and reflexive practice supports trustworthiness."},
      " ",
      {t:"Saturation was reached.", flag:true, why:"Claimed without saying how it was judged, and saturation sits awkwardly with reflexive TA. Explain the sample and stopping decision instead."},
      " ",
      {t:"We describe the clinic, its staff and patients in detail so readers can judge relevance to their own settings.", flag:false, why:"Thick description supporting transferability."}
    ]},
    {id:"t4u7-l5-x6", type:"mcq", q:"Sione sends his themes to participants. One replies, “That’s not how I see it at all.” What is the best response?", options:[
      {t:"Treat the reply as more data: reflect on why the views differ, check the theme against the dataset, and report the disagreement if relevant", ok:true, why:"Member checking feeds reflection. A theme drawing on many people may not match one person’s view and can still be sound, or the reply may reveal a real problem."},
      {t:"Delete the theme, because any participant disagreement proves it wrong", why:"A member check isn’t a veto. Themes summarise patterns across participants, so one person may not recognise themselves in all of them."},
      {t:"Ignore the reply, because participants can’t understand analysis", why:"Dismissing participants is disrespectful and wastes useful information."},
      {t:"Remove that participant’s data from the study", why:"Removing data because it challenges your analysis is a serious integrity problem."}
    ]},
    {id:"t4u7-l5-x7", type:"mcq", q:"Ana studies how teachers in one region respond to a new assessment policy. She interviews teachers, observes staff meetings and reads the policy documents and school guidance. What is she mainly doing, and what does it add?", options:[
      {t:"Triangulating methods and data sources, so each can test and enrich what the others show", ok:true, why:"Interviews, observation and documents give different angles; agreement builds confidence and differences prompt deeper analysis."},
      {t:"Member checking, because she involves teachers", why:"Member checking returns data or findings to participants. She is collecting different kinds of data."},
      {t:"Collecting more data to reach a statistically significant result", why:"Qualitative studies don’t use significance tests. The aim is different perspectives, not statistical power."},
      {t:"Creating bias, because using several methods mixes things up", why:"Combining methods is a recognised strategy for strengthening credibility."}
    ]}
   ],
   apply:{intro:"Finish the analysis you started in Lesson 4 and check it the way a reviewer would.", tasks:[
     {t:"Develop one theme", how:["Take the codes and categories from Lesson 4 (from your practice material or the invented excerpt).","Write one candidate theme as a sentence with a central idea, not a topic label.","List the codes that support it, and one piece of data that doesn’t fit.","Give the theme a short, meaningful name, and write two sentences on what it is and isn’t about."], write:"Theme sentence… Supporting codes… Data that doesn’t fit… Name… What it is / isn’t…"},
     {t:"Write a reflexive memo", how:["Write half a page on how your background, beliefs and relationship with your practice partner may have shaped the interview and your codes.","Note one thing you might have heard differently if someone else had done the interview."], write:"How I shaped the data… What someone else might have heard…"},
     {t:"Make a trustworthiness plan", how:["Imagine expanding your practice into a real study with ethics approval.","For each of credibility, transferability, dependability and confirmability, write one strategy you’d use.","Add one sentence on how you’d decide when to stop recruiting, without just saying “saturation”."], write:"Credibility… Transferability… Dependability… Confirmability… How I’d decide when to stop…"},
     {t:"Check a published study", how:["Return to the article from Lesson 1 (or find another qualitative study).","Find: which analysis approach it names, whether it says how themes were developed, what it says about saturation or sample size, and which trustworthiness strategies it reports.","Note one thing it does well and one thing you’d want explained."], write:"Approach named… How themes were developed… Sample or saturation reasoning… Trustworthiness strategies… Strength… Question I’d ask…"}
   ], proof:"One named theme with supporting codes and a contrary case, a reflexive memo, a four-part trustworthiness plan with a stopping rationale, and a short critique of a published study."},
   read:[
    {book:"hurst", where:"Chapter 6, “Reflexivity”, and Chapter 5, “Sampling” (on saturation and how many participants)"},
    {book:"bhatt", where:"Chapter 12, “Interpretive Research” (the part on rigor: dependability, credibility, confirmability and transferability)"}
   ]
  }
  ],

  checkpoint:["t4u7-q02","t4u7-q06","t4u7-q11","t4u7-q14","t4u7-q17","t4u7-q21","t4u7-q25","t4u7-q29","t4u7-q32","t4u7-q37","t4u7-q40","t4u7-q44"],

  codex:[
   {id:"qualitative-approach", title:"Qualitative research", aka:["qualitative methods","interpretive research"], tags:["research","methods","qualitative"],
    summary:"Research that studies meanings, experiences and processes through words, observation, documents and images.",
    levels:{
     starter:[
      "Qualitative research tries to understand how people experience and make sense of their world. Instead of counting, it listens, watches and reads: interviews, group discussions, observation of everyday life, documents and pictures.",
      "Think of the difference between a census and a long walk down one street with someone who has lived there all their life. The census tells you how many people live there. The walk tells you what the street means to them and how it changed.",
      "Qualitative research is good at “how?” and “why?” questions, at discovering issues nobody expected, and at showing how things work in real settings. It isn’t designed to say how common something is across a whole population. That needs quantitative methods, and many projects combine both.",
      "It is used everywhere: nurses studying why patients stop a medicine, teachers studying how pupils experience a new curriculum, designers watching how people really use a product, historians recording oral histories, and community groups listening to residents before planning a service."
     ],
     builder:[
      "**Typical questions:** meanings (what does a diagnosis mean to someone?), experiences (what is it like to care for a parent?), processes (how do farmers decide what to plant?), context (why does a programme work in one place and not another?).",
      "**Data:** interviews ({{research-interviews}}), focus groups ({{focus-groups}}), observation recorded in fieldnotes ({{fieldnotes}}), documents, images and online material.",
      "**Sampling:** participants are chosen on purpose for what they can tell you, not at random. Sample sizes are usually small, and judged by fit with the question rather than by statistical power.",
      "**Analysis:** transcripts and notes are coded ({{qualitative-coding}}) and interpreted into categories and themes ({{thematic-analysis}}).",
      "**Claims:** rich, context-bound understanding. Readers judge how far it transfers to their own setting. Numbers can appear (how many participants mentioned something) but shouldn’t be presented as population estimates.",
      "**Quality:** judged by criteria such as credibility, transferability, dependability and confirmability ({{trustworthiness}}), plus [[reflexivity|reflexivity]].",
      "**Ethics:** qualitative work is close to people, so consent is ongoing, recording needs separate permission, and quotes must not identify anyone. [[ethics-committee|Ethics review]] comes before any data collection (see {{research-ethics}}). **Common misreadings:** treating a small study as a weak survey, or treating vivid quotes as proof of how common something is. Read qualitative findings for depth and mechanism, and look to quantitative studies for prevalence."
     ],
     pro:[
      "Qualitative research is not one method but a family resting on different philosophical positions. Much of it is **interpretivist** or **constructionist**: it treats social reality as made and understood through meaning, so the researcher’s interpretation is part of the knowledge produced. Other qualitative work is more realist, aiming to describe what is “out there” as accurately as possible. These positions shape what counts as good analysis, which is why, for example, coder-agreement statistics fit some approaches and not others.",
      "Named traditions include ethnography, grounded theory, phenomenology, narrative research, case study research, discourse and conversation analysis, and action research. Each has its own literature and procedures; a methods section should name the one used rather than just “qualitative”.",
      "Generalisation works differently. Instead of statistical generalisation from a sample to a population, qualitative studies offer **transferability** (readers judge fit) or **analytic generalisation** (findings refine a theory that can be tested elsewhere).",
      "Common weaknesses reviewers look for: a question that really needed numbers, vague sampling, analysis described only as “themes emerged”, quotes from one or two participants carrying the argument, and no account of the researcher’s position.",
      "Qualitative and quantitative work often answer different parts of one problem. Interviews can generate the right survey questions; a surprising survey result can be explained by follow-up interviews. Mixed methods designs plan these links in advance and report how the strands were combined."
     ]},
    related:["research-interviews","fieldnotes","qualitative-coding","thematic-analysis","trustworthiness"],
    read:[{book:"hurst", where:"Chapter 1, “Introduction”"},{book:"bhatt", where:"Chapter 12, “Interpretive Research”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 5, Sampling", url:"https://open.oregonstate.education/qualresearchmethods/chapter/ch-5-sampling/"},{t:"Bhattacherjee, Social Science Research (LibreTexts): Chapter 12, Interpretive Research", url:"https://socialsci.libretexts.org/Bookshelves/Social_Work_and_Human_Services/Social_Science_Research_-_Principles_Methods_and_Practices_(Bhattacherjee)/12%3A_Interpretive_Research"}], checked:"2026-11"},

   {id:"research-interviews", title:"Research interviews", aka:["qualitative interviews","in-depth interviews"], tags:["research","methods","qualitative","interviews"],
    summary:"Conversations with a purpose, from fully scripted to free-flowing, used to understand people’s experiences in their own words.",
    levels:{
     starter:[
      "A research interview is a conversation with a purpose: one person (the interviewer) asks questions to understand another person’s experiences, views or knowledge, in their own words.",
      "Interviews can be **structured** (the same questions in the same order for everyone), **semi-structured** (a guide of questions and topics, with freedom to follow up) or **unstructured** (an open conversation around a theme). Most qualitative studies use semi-structured interviews.",
      "Good interviews depend on [[rapport|rapport]], careful listening and good follow-up questions called probes. People must agree to take part, know they can skip questions or stop, and agree separately to being recorded ([[informed-consent|informed consent]]).",
      "Interviews can be face to face, by video call or by phone, and usually last about an hour or more. Afterwards, the recording or notes are turned into a [[transcript|transcript]] for analysis."
     ],
     builder:[
      "**Planning:** write an interview guide ({{interview-guide}}), pilot it, and decide on face-to-face, video or phone. Hurst gives one to two hours as the conventional length, ninety minutes as the optimum, and recommends two separate sessions where possible, the second slightly shorter.",
      "**On the day:** explain the study, confirm consent, ask about recording separately, start with easy questions, listen more than you talk, follow the participant’s words with probes, and close with an open question such as “Is there anything I haven’t asked?”.",
      "**Afterwards:** write a short note about the interview straight away (setting, mood, anything not captured on the recording), store the recording securely under an ID number, and transcribe it ({{transcription}}).",
      "**Remote interviews** save travel and widen who can take part, but lose some non-verbal cues and depend on reliable connections. Check where the platform stores recordings and automatic transcripts.",
      "**Recording without permission** is never acceptable in research, whatever local law allows. If someone declines recording, take notes and write them up fully the same day.",
      "**Who to interview:** choose participants for what they can tell you (purposive sampling), and think about whose voices you might be missing. **Practice:** your first interviews will feel awkward; piloting with a willing friend or family member, who knows they can skip questions or stop, is the best way to improve. Listen back to your own recordings (with permission) and notice where you interrupted, led or missed a cue to probe."
     ],
     pro:[
      "Interviews produce accounts shaped by the interaction. Some researchers treat them as reports of experience; others (for example in narrative or discourse approaches) analyse them as performances in which people construct identities for a particular listener. Your analysis should match your view of what interview data are.",
      "**Interviewer effects:** age, gender, ethnicity, professional role and perceived status shape what people say. Matching interviewers to participants can help in some studies and hinder in others (participants may assume an insider already knows). Reflexive notes and reporting this in methods are standard.",
      "**Power and vulnerability:** with participants in less powerful positions, emphasise voluntariness, avoid recruiting through people who control them (such as their managers), and plan for distress: pauses, the option to stop, and information about support.",
      "**Language and interpreters:** interpreted interviews add a third voice. Brief interpreters about the study and confidentiality, and consider how translation shapes meaning, especially for in vivo coding.",
      "**Elite and expert interviews** (officials, professionals) raise different issues: access, time limits and people speaking on the record for an organisation.",
      "Repeat interviews with the same people (longitudinal qualitative research) show how experiences change, but raise questions about ongoing consent and the relationship between researcher and participant.",
      "Whatever the format, the interview is only as good as the preparation behind it and the notes written straight after it."
     ]},
    related:["interview-guide","focus-groups","transcription","qualitative-approach"],
    read:[{book:"hurst", where:"Chapter 11, “Interviewing”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 11, Interviewing", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-11-interviewing/"}], checked:"2026-11"},

   {id:"interview-guide", title:"Interview guides and probes", aka:["topic guide","interview protocol","probes"], tags:["research","methods","interviews"],
    summary:"The plan for a qualitative interview: a short set of open questions in a sensible order, with follow-up probes.",
    levels:{
     starter:[
      "An [[interview-guide-term|interview guide]] is your plan for an interview. It lists the main questions you want to ask, in a rough order, with ideas for follow-ups. It guides the conversation but doesn’t control it: you can change the order and follow interesting threads.",
      "Good questions are open (“Tell me about…”), ask one thing at a time, use everyday words and don’t push towards an answer.",
      "[[probe-question|Probes]] are follow-ups such as “Could you say more about that?” or “When was that?”. They are where most of the depth in an interview comes from.",
      "A good guide fits on one or two pages. Most researchers start with the questions they most need answered, then rewrite them in everyday language and add a few probes under each one."
     ],
     builder:[
      "**Size:** Hurst suggests a guide usually has five to ten main questions or question areas.",
      "**Order:** begin with easy, factual questions about the present; move to the past and then the future (Hurst’s suggested sequence); put sensitive topics later; finish with an open invitation and thanks.",
      "**Wording checks:** open, not yes/no; one question at a time (no double-barrelled questions); everyday language, not the research question or jargon; neutral, not leading (“What do you make of…?” rather than “Don’t you think…?”); concrete (“Tell me about the last time…”).",
      "**Probe types** (following Hurst): detail (who, when, where), elaboration (“say more”), clarification (“what do you mean by…?”) and contrast (“how was that different from…?”). Also widely used: the silent probe (an attentive pause) and the echo (repeating a key phrase as a question).",
      "**Pilot:** try the guide with one or two people like your participants, then fix confusing, intrusive or dead-end questions.",
      "**Opening and closing scripts:** include a short opening (purpose, confidentiality, the right to skip or stop, permission to record) and a closing (any final thoughts, thanks, what happens next, how to get in touch). **Practical layout:** large type, space for quick notes, and tick boxes for topics already covered so you don’t ask twice when a participant answers early."
     ],
     pro:[
      "A guide is a living document. In many studies, early interviews reveal topics worth adding, and later guides differ from the first. Keep dated versions and note why you changed them: that is part of your audit trail ({{trustworthiness}}).",
      "Some designs deliberately vary the guide: grounded theory uses later interviews to test emerging categories (theoretical sampling of questions as well as people). Comparative designs keep core questions fixed so cases can be compared.",
      "Question types beyond the basics include **grand tour** questions (“Walk me through a typical day”), **critical incident** questions (a specific memorable event), **hypothetical** questions (useful but less reliable than reports of actual experience) and **devil’s advocate** questions for contested topics.",
      "Probes can lead if they import the researcher’s ideas (“Was that because of the manager?”). A useful habit is to probe using the participant’s own words, then compare the transcript with the guide afterwards to see where you steered.",
      "For focus groups, the equivalent document is often called a topic guide or discussion guide, with prompts designed to get participants talking to each other rather than to the moderator.",
      "Finally, keep the guide visible but not dominant: glancing at it is fine, reading it aloud word for word makes a semi-structured interview feel like a questionnaire."
     ]},
    related:["research-interviews","focus-groups"],
    read:[{book:"hurst", where:"Chapter 11, “Interviewing”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 11, Interviewing", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-11-interviewing/"}], checked:"2026-11"},

   {id:"focus-groups", title:"Focus groups", aka:["group interviews","group discussions"], tags:["research","methods","qualitative"],
    summary:"Guided discussions among a small group, where the interaction between participants is itself part of the data.",
    levels:{
     starter:[
      "A [[focus-group|focus group]] brings together a small group of people to discuss a topic, guided by a moderator. Unlike an interview, people respond to each other: they agree, disagree, joke and build on ideas.",
      "That interaction is the point. Focus groups show the shared words, assumptions and norms of a group, and how opinions form in conversation.",
      "They’re less suitable for very personal topics, because people may not want to share in front of others, and because the researcher can’t guarantee that other members will keep what is said private.",
      "A typical group has five to eight people and lasts up to about an hour and a half. A moderator guides the talk, and often a second researcher takes notes.",
      "Groups usually meet once, in person or online."
     ],
     builder:[
      "**Guidance from Hurst’s textbook:** groups of about five to eight (at least four for real interaction); sessions of about 45 to 90 minutes; at least three groups so one unusual group doesn’t mislead you; and a moderator who talks little (citing Lune and Berg: no more than about 10 percent of the transcript).",
      "**Composition:** similar groups (shared experience) often talk more freely; mixed groups show contrasts but can make sensitive topics risky. Groups of people who already know each other behave differently from groups of strangers.",
      "**Roles:** the moderator keeps the discussion on topic, draws in quieter people and gently manages anyone who dominates. A note-taker records who spoke and the mood.",
      "**Recording:** everyone must agree to recording. Transcribing groups is harder than interviews because of overlapping speech; note-takers’ records of speaker order help.",
      "**Confidentiality:** ask members to keep the discussion private and say plainly that this can’t be guaranteed.",
      "**Prompts that work:** ask about shared experiences (“What do people around here usually say about…?”), use short activities such as ranking cards or reacting to an example, and invite disagreement. **After the session:** write notes straight away about mood, dynamics and anything the recording won’t show, and debrief with the note-taker while memories are fresh."
     ],
     pro:[
      "Analysing focus groups well means analysing **interaction**, not just pooling individual quotes: who changes their view, which statements go unchallenged, how humour or silence works, and how a group reaches apparent consensus. Treating a focus group as six interviews at once wastes its main strength.",
      "Group dynamics can also distort: dominant voices, pressure towards [[conformity|conformity]], and minority or extreme views going unsaid. Plan for this with ground rules, prompts that invite difference (“Some people say the opposite; what do you think?”) and, where needed, follow-up individual interviews.",
      "Online focus groups (video or text-based, synchronous or over several days) widen participation but change interaction: turn-taking is stiffer on video; text-based groups produce ready-made transcripts but lose tone.",
      "Focus groups are widely used in applied research (health services, product design, policy consultation), where timelines are short. Be clear whether you are doing academic qualitative analysis or a quicker market-research style summary.",
      "Quoting focus groups needs care: label quotes by group and participant number, and show the exchange around a quote when the interaction is what matters.",
      "In some cultures and settings, mixing ages, genders or ranks in one group will silence some people; local advice helps you plan.",
      "Reporting should say how many groups were run, how they were composed, who moderated, and how interaction was analysed."
     ]},
    related:["research-interviews","interview-guide","qualitative-approach"],
    read:[{book:"hurst", where:"Chapter 12, “Focus Groups”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 12, Focus Groups", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-12-focus-groups/"}], checked:"2026-11"},

   {id:"fieldnotes", title:"Fieldnotes", aka:["field notes","jottings","observation notes"], tags:["research","methods","observation"],
    summary:"The written record of observation: quick jottings in the field turned into full notes that separate description from reflection.",
    levels:{
     starter:[
      "When researchers observe a setting (a market, a classroom, a clinic), they can’t record everything. Instead they write [[fieldnotes-term|fieldnotes]].",
      "In the field they take [[jottings|jottings]]: a few key words, times and short quotes. As soon as possible afterwards, ideally the same day, they turn those jottings into full notes that describe what happened in detail.",
      "Good fieldnotes keep two things apart: **description** (what you saw and heard) and **reflection** (what you think it means, how you felt, what to follow up). “She was angry” is an interpretation; “she raised her voice and left without paying” is a description.",
      "Fieldnotes are the main data in observation studies, just as transcripts are in interview studies. Researchers usually add the date, time and place to every set of notes."
     ],
     builder:[
      "**What to record:** date, times, place, who was present (by role, not name), the setting, actions and their order, talk (short exact quotes in quotation marks), changes over time, and what didn’t happen. Hurst suggests adding keywords so notes can be searched later.",
      "**Timing:** write full notes the same day if possible, or the next morning if you are exhausted. Hurst advises planning at least as much writing time as observing time; many researchers suggest double.",
      "**Format:** two columns (description and reflection), or clearly labelled sections. Keep jottings as well as full notes.",
      "**Judgement words** (lazy, rude, chaotic, friendly) belong in reflection, with the concrete behaviour that prompted them in the description.",
      "**From notes to analysis:** reflective notes grow into [[analytic-memo|analytic memos]]; full notes are coded like transcripts ({{qualitative-coding}}).",
      "The standard guide is Emerson, Fretz and Shaw, *Writing Ethnographic Fieldnotes* (2nd edition, 2011).",
      "**Example:** a jotting such as “7:40 queue 9 ppl, man w/ crate → front, ‘he’s family’” becomes a paragraph describing who was waiting, what the man did, what was said and how people reacted, with a separate reflective note asking whether family ties override queueing rules. **Storage:** keep notebooks and files secure, and replace names with roles or pseudonyms as you write up."
     ],
     pro:[
      "Fieldnotes are not neutral recordings. Every note selects, orders and frames. Emerson, Fretz and Shaw stress that writing notes is already analysis: choosing what to describe, from whose point of view, and how. Being aware of this is part of [[reflexivity|reflexivity]].",
      "The observer’s role shapes the notes. A full participant may only be able to write later from memory; a more detached observer can note on the spot. Gold’s (1958) classic four roles (complete participant, participant as observer, observer as participant, complete observer) are a useful vocabulary, though most fieldwork moves between them.",
      "**[[thick-description|Thick description]]**, in Geertz’s sense, combines detailed description with the context and meanings that make actions intelligible to participants. It supports both interpretation and later readers’ judgements of transferability.",
      "Ethical issues specific to fieldnotes: people may forget you are researching, so remind them periodically; notes may contain details that identify people, so store them securely and anonymise early; covert observation needs strong justification and ethics approval.",
      "Researchers increasingly take notes on phones or tablets. These are discreet and searchable, but check where the app stores and syncs your notes, because fieldnotes often contain personal details.",
      "Analytic memos written alongside notes record early interpretations, so you can later see how your thinking developed."
     ]},
    related:["qualitative-approach","qualitative-coding","trustworthiness"],
    read:[{book:"hurst", where:"Chapter 13, “Participant Observation”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 13, Participant Observation", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-13-participant-observation/"}], checked:"2026-11"},

   {id:"transcription", title:"Transcription", aka:["transcripts","verbatim","automatic transcription"], tags:["research","methods","privacy"],
    summary:"Turning recordings into text: choosing a transcription style, using automatic tools carefully, and protecting participants’ privacy.",
    levels:{
     starter:[
      "A [[transcript|transcript]] is a written version of a recorded interview or discussion. Most qualitative analysis works from transcripts.",
      "**Verbatim** transcripts keep every word, including “um”, repeats and false starts. **[[intelligent-verbatim|Intelligent (clean) verbatim]]** keeps the full meaning and the person’s own words but drops fillers and false starts. Choose based on what you’ll analyse.",
      "Typing transcripts by hand is slow. Automatic transcription tools are much faster, but they make mistakes, and many of them work by uploading the recording to a company’s servers. That matters, because a research recording is personal information that participants trusted you with.",
      "Labels such as P7 (participant 7) replace real names in transcripts, and identifying details such as a rare job title or a named village are removed or changed."
     ],
     builder:[
      "**Conventions:** label speakers with IDs (I for interviewer, P7 for participant 7); mark non-verbal events in brackets ([laughs], [pause]); mark unclear words with a timestamp ([inaudible 04:12]); replace names and identifying details. Write your conventions down.",
      "**Automatic tools** include transcripts in video-call platforms, office software (for example Word’s Transcribe for Microsoft 365, which uploads audio to Microsoft and saves it in a *Transcribed Files* folder in OneDrive), phone recorder apps, online services, and tools that run locally, such as the free, open-source noScribe for Windows, macOS and Linux.",
      "**Always correct** automatic output against the audio. Errors cluster around accents, names, overlapping speech, specialist words and some languages.",
      "**Before uploading anything,** check: what participants were told, whether your ethics approval or data protection plan allows the tool, where audio is processed and stored and for how long, and whether the provider may use it to improve its products. When unsure, use an approved tool or a local one.",
      "**Time:** typing a transcript by hand takes several hours for each hour of recording, so plan for it. Checking an automatic draft is faster but still needs a full listen. **Store safely:** keep recordings and transcripts in password-protected or encrypted locations, with consent forms kept separately, and delete recordings when your data plan says."
     ],
     pro:[
      "Transcription is an interpretive act. Researchers distinguish **naturalised** transcription (keeping as many features of speech as possible) from **denaturalised** transcription (focusing on content). Conversation analysts use detailed systems such as Jefferson’s notation to mark pauses, overlaps and intonation, because those features are their data.",
      "Translation adds a further layer: decide whether to code in the original language, translate before coding, or both, and report the choice. In vivo codes may not survive translation intact.",
      "Data protection: recordings capture voices (identifying) and often sensitive information (health, beliefs). Under laws such as the EU’s GDPR, sending them to a processor may require a data processing agreement and limits on transfers outside certain jurisdictions. Rules vary by country and institution, so follow your ethics approval and data management plan.",
      "Doing at least some transcription yourself, or carefully correcting automatic drafts, is valued as part of familiarisation: many researchers find early analytic ideas while listening closely.",
      "AI-based tools change quickly; check current terms before each project rather than relying on what was true last year.",
      "When transcripts are shared for archiving or reuse, they are usually anonymised more heavily than for analysis, and participants must have agreed to that use.",
      "Whoever transcribes (a colleague, a paid transcriber or a service) should be covered by a confidentiality agreement and named in your ethics application."
     ]},
    related:["research-interviews","qualitative-coding","qda-software"],
    read:[{book:"hurst", where:"Chapter 11, “Interviewing” (on recording and transcription)"}],
    sources:[{t:"Microsoft Support: Transcribe your recordings", url:"https://support.microsoft.com/en-us/word/transcribe-your-recordings"},{t:"noScribe (GitHub): AI-based audio transcription for qualitative research", url:"https://github.com/kaixxx/noScribe"}], checked:"2026-11"},

   {id:"qualitative-coding", title:"Qualitative coding", aka:["coding","codes","codebook"], tags:["research","analysis","qualitative"],
    summary:"Attaching short labels to segments of data so you can retrieve, compare and interpret patterns; recorded in a codebook.",
    levels:{
     starter:[
      "Coding means attaching short labels, called [[code-qual|codes]], to pieces of data (a sentence, a paragraph, a moment in fieldnotes) to capture what they are about or what they mean.",
      "It’s like building an index for your interviews: once every passage about “asking for help” has that code, you can pull them all together and compare them.",
      "Three useful kinds to start with: **descriptive** codes name the topic (CHILDCARE); **[[in-vivo-code|in vivo]]** codes use the participant’s own words in quotation marks (“STEALING TIME”); **process** codes capture actions with “-ing” words (HIDING STUDY AT WORK). A [[codebook|codebook]] records what each code means.",
      "You read a transcript slowly, line by line or paragraph by paragraph, and attach codes wherever something relates to your question. Later you gather all the passages with the same code and compare them."
     ],
     builder:[
      "**Where codes come from:** [[deductive-coding|deductively]] from theory, earlier research or the research question, and [[inductive-coding|inductively]] from the data itself. Most projects use both.",
      "**Cycles:** Saldaña distinguishes first cycle coding (initial passes that label the data) from second cycle coding (reorganising codes into fewer, broader categories, concepts or themes).",
      "**Codebook entries** usually give a name, a definition, when to use it, when not to use it, and an example. Hurst’s minimum is the code, a description of what it means and when to apply it, and an example. The codebook changes as you merge, split and rename codes; keep versions.",
      "**Memos:** write [[analytic-memo|analytic memos]] alongside coding to record ideas, links and questions.",
      "**Tools:** paper and highlighters, comments in a word processor, spreadsheets, or dedicated software ({{qda-software}}).",
      "**Second cycle:** after coding everything once, look across codes: which overlap, which belong together, which explain each other? Grouping codes leads to categories and, in thematic analysis, to themes ({{thematic-analysis}}). **Teams:** agree a shared codebook early, code a few transcripts separately, compare, discuss differences and update definitions before coding the rest.",
      "**Start small:** code one or two transcripts, review your codes, then continue. Expect your code list to change a lot early on.",
      "**Memo as you go:** every time a code surprises you or links to another, write a line about it."
     ],
     pro:[
      "Saldaña’s *The Coding Manual for Qualitative Researchers* (5th edition, 2025) profiles dozens of methods, grouped into families such as grammatical, elemental (including descriptive, in vivo and process coding), affective (including emotion and values coding), literary and language, exploratory and procedural methods, followed by second cycle methods (for example pattern, focused, axial and theoretical coding). Hurst recommends beginners start with descriptive, in vivo, process, values and emotion codes.",
      "Grounded theory uses its own sequence. Bhattacherjee’s textbook describes the Strauss and Corbin version: open, axial and selective coding, leading to a core category.",
      "**Coder agreement:** in coding-reliability approaches, several coders apply a fixed codebook and agreement is measured (for example with Cohen’s kappa). In reflexive approaches, coding is treated as interpretation and agreement statistics are seen as inappropriate. Team discussion of differences is valued in both.",
      "Pitfalls: coding too coarsely (a few giant codes) or too finely (hundreds of near-duplicates); codes that only summarise the interview questions; and stopping at coding, mistaking a code list for an analysis.",
      "Good coding is transparent: someone reading your codebook, memos and a sample of coded extracts should be able to see how your categories were built from the data.",
      "Codes should stay close enough to the data that you can always return to the extracts behind them."
     ]},
    related:["thematic-analysis","transcription","qda-software","fieldnotes"],
    read:[{book:"hurst", where:"Chapter 18, “Data Analysis and Coding”, and Chapter 19, “Advanced Codes and Coding”"},{book:"bhatt", where:"Chapter 13, “Qualitative Analysis”"}],
    sources:[{t:"Hurst, Introduction to Qualitative Research Methods: Chapter 18, Data Analysis and Coding", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-18-data-analysis-and-coding/"},{t:"Hurst: Chapter 19, Advanced Codes and Coding", url:"https://open.oregonstate.education/qualresearchmethods/chapter/chapter-19-more-coding/"},{t:"SAGE: The Coding Manual for Qualitative Researchers, 5th edition (contents)", url:"https://collegepublishing.sagepub.com/products/the-coding-manual-for-qualitative-researchers-5-287917"}], checked:"2026-11"},

   {id:"thematic-analysis", title:"Thematic analysis", aka:["TA","reflexive thematic analysis","Braun and Clarke"], tags:["research","analysis","qualitative"],
    summary:"A widely used method for developing and interpreting patterns of shared meaning (themes) across qualitative data; Braun and Clarke’s six phases.",
    levels:{
     starter:[
      "[[thematic-analysis-term|Thematic analysis]] is a way of finding and interpreting patterns of meaning across interviews, focus groups or other qualitative data.",
      "A [[theme-qual|theme]] isn’t just a topic (“Childcare”). It’s a pattern of shared meaning with a central idea (“Study as borrowed time: participants felt their study hours were taken from family, sleep and work”).",
      "Virginia Braun and Victoria Clarke’s six phases are the best-known guide: get to know the data, code it, generate initial themes, develop and review them, refine, define and name them, and write up. You move back and forth between phases rather than in a straight line.",
      "It is popular because it is flexible: it can be used with interviews, focus groups, open survey answers and documents, in many fields, and it doesn’t require a particular theory."
     ],
     builder:[
      "**The 2006 paper:** Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77–101.",
      "**Phase names, then and now** (2006 → 2022 book *Thematic Analysis: A Practical Guide*): familiarising yourself with your data → with the dataset; generating initial codes → coding; searching for themes → generating initial themes; reviewing themes → developing and reviewing themes; defining and naming themes → refining, defining and naming themes; producing the report → writing up.",
      "**Why the changes:** “initial” suggested a separate later round of coding, and “searching” implied themes already exist in the data. Braun and Clarke stress that themes are generated by the researcher, so “themes emerged” misdescribes the process.",
      "**Good practice:** name which version of TA you used; show how codes became themes; give each theme a clear definition and boundaries; use extracts from across participants; and write analytically, not just a string of quotes.",
      "**Phase by phase:** familiarise (read, listen, note early ideas); code the whole dataset; cluster codes into candidate themes with central ideas; check them against coded extracts and the full dataset; write definitions and boundaries and choose meaningful names; then write up, where analysis continues. The phases are recursive: reviewing themes often sends you back to coding."
     ],
     pro:[
      "Braun and Clarke now separate TA into broad families: **reflexive TA** (their own; researcher subjectivity as a resource, organic coding, themes as patterns of shared meaning, no coder-agreement measures), **codebook approaches** (such as template analysis and framework analysis, with structured codebooks often used in applied and team research) and **coding reliability TA** (fixed codebooks, multiple coders, agreement statistics, themes often closer to topic summaries).",
      "Mixing incompatible assumptions is a common reviewer criticism: citing the 2006 paper but reporting intercoder reliability, or claiming saturation as the stopping rule in reflexive TA. Braun and Clarke (2021, “To saturate or not to saturate?”) argue saturation doesn’t fit reflexive TA, because meaning is generated through interpretation rather than “excavated” from data.",
      "In reflexive TA, quality comes from depth of engagement, coherence between theory and method, reflexivity and transparency. Braun and Clarke have published guidance and checklists for reviewers and authors, and their resources are collected on their university pages.",
      "TA is a method, not a methodology: it can be used within different theoretical frameworks (realist, critical realist, constructionist), and the report should say which.",
      "Common problems Braun and Clarke highlight include themes that are really topic summaries, themes that overlap heavily, analysis that paraphrases data instead of interpreting it, and a mismatch between the claimed approach and what was actually done."
     ]},
    related:["qualitative-coding","trustworthiness","qualitative-approach"],
    sources:[{t:"Braun & Clarke: Reflections on, and resources for, reflexive thematic analysis (UWE Bristol repository)", url:"https://uwe-repository.worktribe.com/OutputFile/9303933"},{t:"Braun & Clarke: To saturate or not to saturate? (UWE Bristol repository)", url:"https://uwe-repository.worktribe.com/output/4820803/to-saturate-or-not-to-saturate-questioning-data-saturation-as-a-useful-concept-for-thematic-analysis-and-sample-size-rationales"}], checked:"2026-11"},

   {id:"trustworthiness", title:"Trustworthiness in qualitative research", aka:["rigour","credibility","transferability","dependability","confirmability"], tags:["research","quality","qualitative"],
    summary:"Lincoln and Guba’s four criteria for judging qualitative research, and the strategies used to meet them.",
    levels:{
     starter:[
      "How do you know whether to trust a qualitative study? Yvonna Lincoln and Egon Guba (1985) proposed four questions, together called [[trustworthiness-term|trustworthiness]]:",
      {list:["**Credibility:** is this a believable account of what participants experienced?","**Transferability:** is there enough detail to judge whether it applies elsewhere?","**Dependability:** was the process consistent and documented?","**Confirmability:** do the findings come from the data, not the researcher’s wishes?"]},
      "Researchers strengthen these with strategies such as spending enough time in the field, [[triangulation|triangulation]], [[member-checking|member checking]], [[thick-description|thick description]], keeping a record of decisions, and [[reflexivity|reflexivity]].",
      "These criteria were designed for qualitative research, which can’t be judged with the statistical tests used in quantitative studies. They ask the same underlying question in a different way: why should a reader believe this?",
      "No single technique guarantees quality; together they make the research process visible."
     ],
     builder:[
      {table:[["Criterion","Quantitative counterpart","Example strategies"],["Credibility","Internal validity","Prolonged engagement, persistent observation, triangulation, peer debriefing, negative case analysis, member checks"],["Transferability","External validity","Thick description; purposive sampling for a range of perspectives"],["Dependability","Reliability","Inquiry audit; documented process"],["Confirmability","Objectivity","Audit trail tracing claims to raw data"]]},
      "**Member checking** returns transcripts or findings to participants. Treat replies as further data, not a veto: one person may not see themselves in a cross-participant theme, and power differences can make disagreement hard.",
      "**Triangulation** (Denzin, 1970) can use different data sources, investigators, theories or methods.",
      "**Audit trail:** keep raw data, notes, codebook versions, memos and a decision log so that someone else could follow how you reached your conclusions.",
      "Textbooks paraphrase the criteria differently; Bhattacherjee, for example, describes confirmability mainly as participants agreeing with the researcher’s inferences.",
      "**Thick description** supports transferability: describe the setting, participants and context in enough detail that readers can judge the fit with their own situation. **[[reflexivity|Reflexivity]]**: a reflexive journal and a statement of the researcher’s position help readers judge confirmability. **Negative case analysis:** actively look for data that contradict a developing theme and explain them, rather than leaving them out.",
      "**Peer debriefing:** discuss your emerging analysis with someone outside the project who will ask hard questions.",
      "**Prolonged engagement:** spend enough time with people and settings to understand them and to see beyond first impressions."
     ],
     pro:[
      "Lincoln and Guba built these criteria to suit naturalistic inquiry, rejecting the idea that qualitative work should be judged by positivist standards. Guba and Lincoln later added **authenticity** criteria (such as fairness to the range of participants’ views), reflecting concern that the parallel criteria still borrowed too much from quantitative thinking.",
      "Since then, debate has continued. Some argue for method-specific quality criteria (for example Braun and Clarke’s guidance for reflexive TA) rather than one universal list; others warn against “technique-ism”, where listing member checks and triangulation stands in for actual quality. A study can tick every box and still offer shallow analysis.",
      "Reporting standards such as COREQ (for interview and focus group studies) and SRQR are widely used, especially in health research. They improve transparency of reporting, not the quality of analysis itself.",
      "Reviewers often ask: does the method fit the question? Are sampling and stopping decisions justified? Is analysis described concretely? Do quotes come from across participants? Are negative cases discussed? Is the researcher’s position acknowledged?",
      "For students, a practical approach is to choose strategies that fit the study, explain why each was used, and be honest about limits (for example, a short project may not allow prolonged engagement).",
      "Ultimately, trustworthiness rests on transparency: showing readers enough of your process to judge it for themselves."
     ]},
    related:["thematic-analysis","fieldnotes","qualitative-approach"],
    read:[{book:"bhatt", where:"Chapter 12, “Interpretive Research” (rigor in interpretive research)"},{book:"hurst", where:"Chapter 6, “Reflexivity”"}],
    sources:[{t:"UConn Research Basics: Trustworthiness (summary of Lincoln & Guba, 1985)", url:"https://researchbasics.education.uconn.edu/trustworthiness"},{t:"Bhattacherjee, Social Science Research (LibreTexts): Chapter 12, Interpretive Research", url:"https://socialsci.libretexts.org/Bookshelves/Social_Work_and_Human_Services/Social_Science_Research_-_Principles_Methods_and_Practices_(Bhattacherjee)/12%3A_Interpretive_Research"}], checked:"2026-11"},

   {id:"qda-software", title:"Qualitative analysis software (CAQDAS)", aka:["CAQDAS","QDA software","NVivo","ATLAS.ti","MAXQDA","Taguette","QualCoder","Dedoose"], tags:["research","software","analysis"],
    summary:"Programs that store qualitative data and help you code, retrieve and memo it: free options such as Taguette and QualCoder, paid ones such as NVivo, ATLAS.ti, MAXQDA and Dedoose.",
    levels:{
     starter:[
      "[[caqdas|CAQDAS]] stands for computer-assisted qualitative data analysis software. These programs hold your transcripts, notes and other files, let you attach codes to passages, and pull together everything with the same code. They don’t analyse the data for you: the thinking is still yours.",
      "Free, open-source options include **Taguette** (for text documents) and **QualCoder** (text, images, audio and video). Long-established paid programs include **NVivo**, **ATLAS.ti** and **MAXQDA**; **Dedoose** is a paid web-based option.",
      "For small projects, paper and highlighters, a word processor’s comments or a spreadsheet can work perfectly well.",
      "Most programs also let you write memos, link related ideas, and export coded extracts or reports. Many universities provide licences for at least one paid program.",
      "Choose by your data, your budget and what colleagues use."
     ],
     builder:[
      {table:[["Software","Cost","Notes"],["Taguette","Free, open source","Highlight and tag text; imports formats such as PDF, Word, ODT, RTF, HTML and plain text; desktop app and an online version; collaboration via a server"],["QualCoder","Free, open source","Desktop app; codes text, images, audio and video; recent versions add AI-assisted coding features"],["NVivo","Paid","Made by Lumivero"],["ATLAS.ti","Paid","Acquired by Lumivero in September 2024"],["MAXQDA","Paid","Made by VERBI"],["Dedoose","Paid subscription","Web-based; built with mixed methods in mind"]]},
      "**Choosing:** what data types you have; team or solo; what your institution licenses and supports; budget after any student licence ends; and whether you can export your project (for example in the REFI-QDA exchange format that several programs support) if you switch tools later.",
      "**Security:** desktop programs keep data on your computer; web-based tools store it on the provider’s servers. Check this against your ethics approval and data management plan.",
      "**Learning curve:** all of these take time to learn, so practise on invented or practice data before importing real participant data. Look for official tutorials and user guides, and check whether your institution offers training. **Backups:** keep regular, secure backups of your project file; losing months of coding to a corrupted file is a real risk.",
      "**Exporting:** check that you can export codebooks and coded extracts in common formats such as Word, spreadsheets or PDF."
     ],
     pro:[
      "Software shapes analysis in subtle ways: easy retrieval encourages lots of fine-grained codes, and code-frequency charts can tempt researchers to treat counts as findings. Use features in service of your approach, not the other way round.",
      "**AI features:** many current programs offer AI-assisted coding suggestions, summaries or chat with your data. These can speed up first passes but may miss irony, context and minority views, and some send data to external AI providers. Disclose AI use, check every suggestion against the data, and confirm it is allowed by your consent forms and ethics approval. Features and terms change frequently.",
      "Older textbooks (Bhattacherjee 2012 mentions ATLAS.ti 5, NVivo and QDA Miner) describe software versions that are long out of date; check current documentation.",
      "Commercial ownership changes: NVivo and ATLAS.ti are both now owned by Lumivero (ATLAS.ti since 2024). Free, open-source tools reduce dependence on licences but depend on volunteer or small-team maintenance, so check that a tool is still being updated before starting a long project.",
      "Whatever tool you use, record which one and which version in your methods section, along with any AI-assisted features you used and how you checked their output.",
      "Free tools can be a sensible default for students, small projects and anyone without an institutional licence."
     ]},
    related:["qualitative-coding","transcription","thematic-analysis"],
    read:[{book:"hurst", where:"Chapter 18, “Data Analysis and Coding” (on CAQDAS)"}],
    sources:[{t:"Taguette: About", url:"https://www.taguette.org/about"},{t:"NC State University Libraries: QualCoder", url:"https://www.lib.ncsu.edu/software/qualcoder"},{t:"Lumivero acquires ATLAS.ti (press release, 12 September 2024)", url:"https://www.prweb.com/releases/lumivero-acquires-atlasti-to-expand-qualitative-data-analysis-qda-portfolio-302244724.html"}], checked:"2026-11"}
  ],

  terms:[
   {id:"semi-structured-interview", term:"Semi-structured interview", def:"An interview that follows a guide of questions and topics but lets the interviewer change the order and follow up on what the participant raises.", codex:"research-interviews"},
   {id:"interview-guide-term", term:"Interview guide", def:"The plan for a qualitative interview: a short list of open questions in a rough order, with possible follow-ups. It guides the conversation without controlling it.", codex:"interview-guide"},
   {id:"probe-question", term:"Probe", def:"A follow-up that invites someone to say more about what they’ve just said, such as “Could you say more about that?” or an attentive pause.", codex:"interview-guide"},
   {id:"rapport", term:"Rapport", def:"The trust and ease between researcher and participant that lets people speak openly.", codex:"research-interviews"},
   {id:"focus-group", term:"Focus group", def:"A guided discussion among a small group about a shared topic, where the interaction between participants is part of the data.", codex:"focus-groups"},
   {id:"fieldnotes-term", term:"Fieldnotes", def:"The researcher’s written record of what they observed in a setting, usually written up in full soon after each visit.", codex:"fieldnotes"},
   {id:"jottings", term:"Jottings", def:"Brief notes taken during observation (key words, times, short quotes) to be expanded into full fieldnotes later.", codex:"fieldnotes"},
   {id:"analytic-memo", term:"Analytic memo", def:"A note a researcher writes to themself about what the data might mean: ideas, links between codes, questions and hunches.", codex:"qualitative-coding"},
   {id:"thick-description", term:"Thick description", def:"Detailed description of what people do together with the context and meanings that make it understandable, a term popularised by Clifford Geertz.", codex:"trustworthiness"},
   {id:"transcript", term:"Transcript", def:"A written version of a recorded interview or discussion, used as data for analysis.", codex:"transcription"},
   {id:"intelligent-verbatim", term:"Intelligent verbatim", def:"A transcription style (also called clean verbatim) that keeps the speaker’s words and meaning but leaves out fillers such as “um”, false starts and stutters.", codex:"transcription"},
   {id:"code-qual", term:"Code (qualitative)", def:"A short label attached to a piece of qualitative data to capture what it is about or what it means.", codex:"qualitative-coding"},
   {id:"in-vivo-code", term:"In vivo code", def:"A code that uses a participant’s own words, usually written in quotation marks, such as “STEALING TIME”.", codex:"qualitative-coding"},
   {id:"inductive-coding", term:"Inductive coding", def:"Developing codes from the data itself rather than deciding them in advance.", codex:"qualitative-coding"},
   {id:"deductive-coding", term:"Deductive coding", def:"Coding with codes decided in advance from theory, earlier research or the research question.", codex:"qualitative-coding"},
   {id:"codebook", term:"Codebook", def:"A document listing each code with its name, meaning, when to use it (and not), and an example, so coding stays consistent.", codex:"qualitative-coding"},
   {id:"caqdas", term:"CAQDAS", def:"Computer-assisted qualitative data analysis software: programs such as Taguette, QualCoder, NVivo, ATLAS.ti or MAXQDA that help store, code and retrieve qualitative data.", codex:"qda-software"},
   {id:"theme-qual", term:"Theme (qualitative)", def:"A pattern of shared meaning across a dataset, organised around a central idea. Different from a topic summary that just lists what was said about a subject.", codex:"thematic-analysis"},
   {id:"thematic-analysis-term", term:"Thematic analysis", def:"A method for developing and interpreting patterns of meaning (themes) across qualitative data, best known through Braun and Clarke’s six phases.", codex:"thematic-analysis"},
   {id:"data-saturation", term:"Saturation", def:"The point at which new data stop adding new codes, themes or insights. Widely used to decide when to stop collecting data, and widely debated.", codex:"thematic-analysis"},
   {id:"trustworthiness-term", term:"Trustworthiness", def:"How far a qualitative study can be trusted, often judged by Lincoln and Guba’s criteria: credibility, transferability, dependability and confirmability.", codex:"trustworthiness"},
   {id:"reflexivity", term:"Reflexivity", def:"Examining, and telling readers about, how the researcher’s background, assumptions and relationships shape the research.", codex:"trustworthiness"},
   {id:"positionality", term:"Positionality", def:"Where a researcher stands in relation to the people and topic studied, such as insider or outsider, and their age, gender, role or language.", codex:"qualitative-approach"},
   {id:"member-checking", term:"Member checking", def:"Returning transcripts or findings to participants so they can comment on them, as one way to strengthen credibility.", codex:"trustworthiness"},
   {id:"triangulation", term:"Triangulation", def:"Checking findings from more than one angle: different data sources, researchers, theories or methods.", codex:"trustworthiness"}
  ],

  bank:[
   /* Lesson 1 */
   {id:"t4u7-q01", lesson:"t4u7-l1", level:1, q:"Which question is best suited to qualitative research?", options:[
     {t:"How do new parents decide whom to ask for advice?", ok:true, why:"A “how do they decide” question about a process and meanings suits qualitative methods."},
     {t:"What percentage of new parents use a parenting app?", why:"A percentage of a population needs a representative survey."},
     {t:"Does a home-visit programme reduce hospital admissions?", why:"Measuring an effect needs an experimental or quasi-experimental design."},
     {t:"How many hours a week do new parents sleep on average?", why:"An average across a group is a measurement question."}]},
   {id:"t4u7-q02", lesson:"t4u7-l1", level:2, q:"Mei interviewed 15 bus drivers about how they handle aggressive passengers. Which conclusion is appropriate?", options:[
     {t:"Drivers described several strategies, such as calming talk and calling control, and explained when they used each.", ok:true, why:"It reports what participants described, in depth, without claiming population percentages."},
     {t:"Most bus drivers nationally use calming talk.", why:"15 purposively chosen drivers can’t support a national claim."},
     {t:"Calming talk causes fewer assaults.", why:"Interviews can’t measure causal effects."},
     {t:"The study proves nothing because 15 is too few.", why:"15 can be a reasonable size for an in-depth interview study; the claims just have to fit."}]},
   {id:"t4u7-q03", lesson:"t4u7-l1", level:1, q:"What does “purposive” sampling mean in qualitative research?", options:[
     {t:"Choosing participants deliberately because they can speak to the research question", ok:true, why:"Participants are selected for what they can tell you, not at random."},
     {t:"Choosing participants completely at random", why:"That is random sampling, typical of quantitative surveys."},
     {t:"Interviewing anyone who happens to be nearby", why:"That is convenience sampling, which isn’t chosen for relevance."},
     {t:"Choosing only people who agree with the researcher", why:"That would bias the study. Purposive sampling aims for relevant, often varied, perspectives."}]},
   {id:"t4u7-q04", lesson:"t4u7-l1", level:1, q:"What is reflexivity?", options:[
     {t:"Examining and reporting how the researcher’s own background and assumptions shape the research", ok:true, why:"That is the core of reflexivity."},
     {t:"Asking participants the same question twice to check reliability", why:"That isn’t reflexivity; it’s about the researcher’s influence, not repeated questions."},
     {t:"Removing all of the researcher’s opinions so the study is objective", why:"Qualitative researchers accept they can’t remove themselves; reflexivity accounts for their influence instead."},
     {t:"Reflecting participants’ words back to them during an interview", why:"That describes an echo probe, not reflexivity."}]},
   {id:"t4u7-q05", lesson:"t4u7-l1", level:3, q:"A city wants to know both how common loneliness is among older residents and what makes it better or worse for them. What design fits best?", options:[
     {t:"Mixed methods: a representative survey for how common it is, plus interviews to understand experiences and causes as people describe them", ok:true, why:"Each method answers the part of the question it is good at."},
     {t:"Only interviews with 20 residents", why:"Interviews can’t estimate how common loneliness is across the city."},
     {t:"Only a survey with fixed answer options", why:"A survey measures prevalence but is weak at uncovering unexpected reasons and meanings."},
     {t:"Only counting visits to community centres", why:"Visits are an indirect measure and say little about loneliness or what affects it."}]},
   {id:"t4u7-q06", lesson:"t4u7-l1", level:2, q:"Which of these is an example of photo elicitation?", options:[
     {t:"Young people photograph places where they feel welcome, then discuss the photos in interviews", ok:true, why:"Participants’ photos are used to prompt discussion: photo elicitation."},
     {t:"A researcher counts how often adverts show older people", why:"That is content analysis of media."},
     {t:"A researcher secretly photographs people in a park", why:"That is covert and unethical, not elicitation."},
     {t:"A survey asks people to rate photos from 1 to 5", why:"Ratings produce numbers; elicitation uses images to prompt conversation."}]},
   {id:"t4u7-q07", lesson:"t4u7-l1", level:3, q:"Priya plans to quote public social media posts word for word in a study about vaccine fears. What is the main risk?", options:[
     {t:"Searching the quoted words can lead straight to the authors, identifying them on a sensitive topic", ok:true, why:"Exact quotes from public posts are easily traced, so public doesn’t mean risk-free."},
     {t:"Public posts can never be used in research", why:"They can, with care and appropriate approval."},
     {t:"Quotes make research quantitative", why:"Quoting doesn’t change the type of research."},
     {t:"There is no risk because the posts are already public", why:"Being public doesn’t remove the risk of harm from drawing attention to identifiable people."}]},
   {id:"t4u7-q08", lesson:"t4u7-l1", level:1, q:"Which statement about qualitative research is accurate?", options:[
     {t:"It uses systematic methods and has its own criteria for judging quality", ok:true, why:"Rigour in qualitative research comes from systematic, transparent procedures."},
     {t:"It is just the researcher’s opinion", why:"Good qualitative research is evidence-based and documents how conclusions were reached."},
     {t:"It never involves any numbers at all", why:"Counts sometimes appear, though they aren’t the main point."},
     {t:"It needs at least 1,000 participants to be valid", why:"Qualitative samples are usually small and judged by fit with the question."}]},
   {id:"t4u7-q09", lesson:"t4u7-l1", level:2, q:"Dmitri, an engineer, will interview other engineers in his company. Which concept describes his position as an insider?", options:[
     {t:"Positionality", ok:true, why:"Positionality is where the researcher stands in relation to the people and topic."},
     {t:"Saturation", why:"Saturation is about when new data stop adding new insights."},
     {t:"Triangulation", why:"Triangulation is checking findings from more than one angle."},
     {t:"Transcription", why:"Transcription turns recordings into text."}]},

   /* Lesson 2 */
   {id:"t4u7-q10", lesson:"t4u7-l2", level:1, q:"What makes an interview semi-structured?", options:[
     {t:"A guide of questions and topics, with freedom to change order and follow up", ok:true, why:"That combination is the definition."},
     {t:"Identical questions in identical order for everyone", why:"That is structured."},
     {t:"No questions planned at all", why:"That is unstructured."},
     {t:"Only yes/no questions", why:"Closed questions aren’t a defining feature of any qualitative interview type."}]},
   {id:"t4u7-q11", lesson:"t4u7-l2", level:2, q:"Which is the best opening question for an interview about people’s experiences of moving to a new city?", options:[
     {t:"Can you tell me a bit about where you live now and how long you’ve been there?", ok:true, why:"Easy, factual and about the present: a comfortable start."},
     {t:"Was moving here the worst decision of your life?", why:"Leading and emotionally loaded, especially as an opener."},
     {t:"How has migration restructured your social capital?", why:"Jargon that sounds like a research question."},
     {t:"Did you like the city and its people?", why:"Double-barrelled and yes/no."}]},
   {id:"t4u7-q12", lesson:"t4u7-l2", level:2, q:"A participant says, “It was different there.” Which follow-up is a contrast probe?", options:[
     {t:"“How was it different from here?”", ok:true, why:"It asks for a comparison."},
     {t:"“When was that?”", why:"That asks for detail."},
     {t:"“What do you mean by ‘there’?”", why:"That asks for clarification."},
     {t:"“It was better there, wasn’t it?”", why:"That is leading, not a probe that follows their words."}]},
   {id:"t4u7-q13", lesson:"t4u7-l2", level:1, q:"Roughly how many main questions or question areas does Hurst suggest an interview guide usually has?", options:[
     {t:"Five to ten", ok:true, why:"Hurst gives five to ten questions or question areas."},
     {t:"One", why:"Only unstructured life-history interviews might use a single prompt."},
     {t:"Fifty to sixty", why:"That would be a questionnaire and couldn’t be covered in depth."},
     {t:"Exactly three", why:"There’s no fixed number; Hurst suggests a range of five to ten."}]},
   {id:"t4u7-q14", lesson:"t4u7-l2", level:3, q:"Ana is interviewing staff about workplace bullying. A participant starts crying. What should she do first?", options:[
     {t:"Pause, ask if they’d like a break or to stop, and offer information about support", ok:true, why:"Wellbeing comes before data. Consent is ongoing, and the participant can pause or withdraw."},
     {t:"Move quickly to the next question so the interview stays on schedule", why:"Ignoring distress is harmful and disrespectful."},
     {t:"Keep probing, because emotional moments give the best data", why:"Data never outweighs a participant’s wellbeing."},
     {t:"End the interview without explanation and delete the recording", why:"Abrupt endings can make things worse. Ask what they want; the data can only be deleted if they withdraw."}]},
   {id:"t4u7-q15", lesson:"t4u7-l2", level:1, q:"According to Hurst, what is a good size for a focus group?", options:[
     {t:"About five to eight people", ok:true, why:"Hurst gives five to eight as optimal, with at least four for real interaction."},
     {t:"Two people", why:"Two people is a paired interview, with little group dynamic."},
     {t:"Twenty to thirty people", why:"Too many: most people wouldn’t get to speak."},
     {t:"Exactly twelve people", why:"There’s no fixed number, and twelve is above Hurst’s suggested range."}]},
   {id:"t4u7-q16", lesson:"t4u7-l2", level:3, q:"Kenji wants to learn how farmers in one district talk among themselves about a new irrigation scheme: the arguments, the jokes, what counts as a sensible view. Which method fits best?", options:[
     {t:"Focus groups with farmers", ok:true, why:"The interaction between farmers is exactly what he wants to see."},
     {t:"One-to-one structured interviews", why:"Structured interviews give comparable individual answers, not group talk."},
     {t:"A national survey", why:"A survey wouldn’t capture how farmers talk to each other."},
     {t:"Reading the scheme’s official brochure", why:"A brochure shows the official view, not farmers’ conversations."}]},
   {id:"t4u7-q17", lesson:"t4u7-l2", level:2, q:"A participant agrees to an interview but says, “Please don’t record me.” What is correct?", options:[
     {t:"Interview without recording, take notes, and write them up fully straight away", ok:true, why:"Consent to record is separate; notes are a legitimate alternative."},
     {t:"Record on a hidden device", why:"Covert recording breaks consent."},
     {t:"Refuse to interview them", why:"Unnecessary; useful data can still be gathered through notes."},
     {t:"Record only the parts you think are most important", why:"Any recording needs consent."}]},
   {id:"t4u7-q18", lesson:"t4u7-l2", level:3, q:"Fatima tells a focus group, “Everything you say here is guaranteed to stay completely private.” What is wrong with this?", options:[
     {t:"She can’t guarantee that other group members won’t repeat what they heard", ok:true, why:"She can ask members to keep things private, but should be honest that it can’t be guaranteed."},
     {t:"Nothing: it is a standard and accurate promise", why:"It overpromises, because other participants aren’t bound by her ethics."},
     {t:"Focus groups must always be public", why:"Focus groups aren’t public events; confidentiality is still asked for."},
     {t:"She should say nothing about privacy", why:"Participants need honest information about privacy before agreeing."}]},

   /* Lesson 3 */
   {id:"t4u7-q19", lesson:"t4u7-l3", level:1, q:"What are jottings?", options:[
     {t:"Brief notes taken in the field to be expanded later", ok:true, why:"Key words, times and short quotes that act as reminders."},
     {t:"Finished fieldnotes ready for publication", why:"Full notes are written from jottings afterwards."},
     {t:"A type of interview question", why:"Jottings are notes, not questions."},
     {t:"Codes from a codebook", why:"Codes are applied later, during analysis."}]},
   {id:"t4u7-q20", lesson:"t4u7-l3", level:2, q:"Which line belongs in the descriptive column of fieldnotes?", options:[
     {t:"The teacher wrote three questions on the board and waited about ten seconds before anyone answered.", ok:true, why:"Observable actions, described concretely."},
     {t:"The teacher seemed bored.", why:"An interpretation of feelings: reflection."},
     {t:"I think the class is afraid of being wrong.", why:"A hunch: reflection."},
     {t:"This was a badly run lesson.", why:"A judgement: reflection, with the behaviour behind it in the description."}]},
   {id:"t4u7-q21", lesson:"t4u7-l3", level:2, q:"Tomás observed a market for three hours. When should he write his full fieldnotes?", options:[
     {t:"The same day if possible, or the next morning if he is exhausted", ok:true, why:"Memory fades fast; Hurst suggests the same day or the next morning."},
     {t:"At the end of the month, all at once", why:"Most detail would be lost by then."},
     {t:"Never: jottings are enough", why:"Jottings are reminders, not usable data on their own."},
     {t:"Only once he has a hypothesis to test", why:"Notes are written up after every visit, whatever stage the analysis is at."}]},
   {id:"t4u7-q22", lesson:"t4u7-l3", level:1, q:"Who popularised the term “thick description” in a 1973 essay?", options:[
     {t:"Clifford Geertz", ok:true, why:"Geertz popularised it, borrowing the term from the philosopher Gilbert Ryle."},
     {t:"Max Weber", why:"Weber wrote about verstehen (interpretive understanding) but not this term."},
     {t:"Virginia Braun", why:"Braun co-developed reflexive thematic analysis."},
     {t:"Johnny Saldaña", why:"Saldaña wrote the coding manual."}]},
   {id:"t4u7-q23", lesson:"t4u7-l3", level:3, q:"Oluwaseun joins a community gardening group openly as a researcher and works alongside members every weekend. Which role is he taking?", options:[
     {t:"Participant as observer", ok:true, why:"He takes part fully and members know he is researching."},
     {t:"Complete participant", why:"That role usually involves full membership without others knowing about the research."},
     {t:"Complete observer", why:"He interacts and takes part, so he isn’t just watching."},
     {t:"Survey researcher", why:"He is doing field research, not administering a survey."}]},
   {id:"t4u7-q24", lesson:"t4u7-l3", level:2, q:"Which is the best first question to ask about a company’s annual report used as data?", options:[
     {t:"Who wrote it, for whom, and why?", ok:true, why:"Documents are made for audiences and purposes, which shape what they say."},
     {t:"How long is it?", why:"Length doesn’t tell you how to interpret it."},
     {t:"Is it true?", why:"Too simple: it may be accurate but selective. Start with purpose and audience."},
     {t:"Can I quote it without reading it?", why:"Documents need careful reading like any other data."}]},
   {id:"t4u7-q25", lesson:"t4u7-l3", level:3, q:"Lucía’s fieldnote says: “The shop assistant was rude to the customer.” What is the best improvement?", options:[
     {t:"Describe what was said and done (for example, “She didn’t look up, said ‘Next,’ and turned away”), and move “rude” to her reflections", ok:true, why:"Concrete description lets readers judge; the interpretation stays, but labelled as hers."},
     {t:"Delete the line, since interpretation isn’t allowed in fieldnotes", why:"Interpretation is welcome, just kept separate from description."},
     {t:"Change “rude” to “very rude” for accuracy", why:"That adds emphasis, not evidence."},
     {t:"Ask the customer for their name to follow up", why:"That intrudes on a member of the public and doesn’t fix the note."}]},
   {id:"t4u7-q26", lesson:"t4u7-l3", level:1, q:"Why do researchers keep description and reflection separate in fieldnotes?", options:[
     {t:"So that what was observed can be told apart from how the researcher interpreted it", ok:true, why:"That keeps interpretations open to checking and revision."},
     {t:"Because reflection is useless and will be deleted", why:"Reflection is valuable: it feeds memos and reflexivity."},
     {t:"Because ethics committees ban reflection", why:"They don’t; this is about analytic clarity."},
     {t:"To make the notes twice as long", why:"Length isn’t the goal."}]},
   {id:"t4u7-q27", lesson:"t4u7-l3", level:2, q:"Hana wants to observe how people use a public library’s computers. Which plan is ethical for a practice exercise?", options:[
     {t:"Note general patterns of use from a seat, without photographing anyone, reading their screens or recording names", ok:true, why:"Observing public behaviour in general terms, without intruding, is appropriate for practice."},
     {t:"Photograph people’s screens to see what they search for", why:"That invades privacy and captures personal information."},
     {t:"Follow individual users around to note everything they do", why:"Following someone singles them out and could alarm them."},
     {t:"Pretend to be library staff to ask users questions", why:"Deception isn’t acceptable, especially in practice work."}]},

   /* Lesson 4 */
   {id:"t4u7-q28", lesson:"t4u7-l4", level:1, q:"What is the difference between verbatim and intelligent verbatim transcription?", options:[
     {t:"Intelligent verbatim leaves out fillers and false starts but keeps the speaker’s words and meaning", ok:true, why:"That is the defining difference."},
     {t:"Intelligent verbatim rewrites answers in better grammar", why:"Clean verbatim doesn’t rewrite or “improve” what people said."},
     {t:"Verbatim is a summary; intelligent verbatim is word for word", why:"Both are word for word; verbatim keeps even more."},
     {t:"There is no difference", why:"They differ in whether fillers and false starts are kept."}]},
   {id:"t4u7-q29", lesson:"t4u7-l4", level:3, q:"Sione’s consent form says recordings will be “seen only by the research team.” He now wants to use a free online transcription website. What should he do?", options:[
     {t:"Not upload: using the service would share recordings with a third party, against what participants were told; use a local or approved tool, or seek ethics advice", ok:true, why:"Uploading would break the promise in the consent form."},
     {t:"Upload, because the website is free", why:"Cost doesn’t change the privacy promise he made."},
     {t:"Upload, but don’t tell anyone", why:"Hiding it makes the breach worse."},
     {t:"Upload only the recordings of participants who spoke quietly", why:"Every recording carries the same promise."}]},
   {id:"t4u7-q30", lesson:"t4u7-l4", level:1, q:"Which is an in vivo code?", options:[
     {t:"“JUST GETTING BY”", ok:true, why:"The participant’s own words, in quotation marks."},
     {t:"FINANCES", why:"A topic label: descriptive."},
     {t:"BUDGETING", why:"An “-ing” action: process."},
     {t:"Theme 2", why:"A label for a theme, not a code from participants’ words."}]},
   {id:"t4u7-q31", lesson:"t4u7-l4", level:2, q:"A participant says, “I started packing my lunch and cycling to save money.” Which is a process code for this?", options:[
     {t:"CUTTING EVERYDAY COSTS", ok:true, why:"An “-ing” code capturing an action over time."},
     {t:"LUNCH", why:"A noun naming a topic: descriptive."},
     {t:"“SAVE MONEY”", why:"The participant’s words: in vivo."},
     {t:"TRANSPORT", why:"A topic label: descriptive."}]},
   {id:"t4u7-q32", lesson:"t4u7-l4", level:2, q:"Kenji begins coding with categories from a published model of technology acceptance, then adds codes for issues participants raise that the model doesn’t cover. This is…", options:[
     {t:"A mix of deductive and inductive coding", ok:true, why:"Starting from theory is deductive; adding codes from the data is inductive."},
     {t:"Only inductive coding", why:"He started with codes from a model, which is deductive."},
     {t:"Only deductive coding", why:"He also added codes from the data."},
     {t:"Thematic analysis phase 6", why:"Phase 6 is writing up, not coding."}]},
   {id:"t4u7-q33", lesson:"t4u7-l4", level:1, q:"What does a codebook entry usually include?", options:[
     {t:"The code’s name, what it means, when (and when not) to use it, and an example", ok:true, why:"These parts keep coding consistent."},
     {t:"Only the code’s name", why:"A name alone lets meanings drift."},
     {t:"Participants’ real names and contact details", why:"Identifying details never belong in a codebook."},
     {t:"The final themes of the study", why:"Themes come later; a codebook records codes."}]},
   {id:"t4u7-q34", lesson:"t4u7-l4", level:3, q:"Priya’s CAQDAS program offers an AI button that suggests codes for all her interview transcripts by sending them to an external AI service. What should she do first?", options:[
     {t:"Check that her consent forms and ethics approval allow sending transcripts to that service, and treat any suggestions as starting points to check", ok:true, why:"External processing is a data-sharing question, and AI suggestions need checking against the data."},
     {t:"Click it and report the suggested codes as her findings", why:"Suggestions aren’t findings, and sending data may not be allowed."},
     {t:"Nothing: software features are always approved automatically", why:"Ethics approval covers what you told participants, not what software can do."},
     {t:"Delete her transcripts so the AI can’t see them", why:"Unnecessary; she just shouldn’t use the feature without checking."}]},
   {id:"t4u7-q35", lesson:"t4u7-l4", level:1, q:"Which of these is free and open-source qualitative analysis software?", options:[
     {t:"QualCoder", ok:true, why:"QualCoder is a free, open-source desktop program."},
     {t:"NVivo", why:"NVivo is paid software from Lumivero."},
     {t:"MAXQDA", why:"MAXQDA is paid software from VERBI."},
     {t:"ATLAS.ti", why:"ATLAS.ti is paid software, now part of Lumivero."}]},
   {id:"t4u7-q36", lesson:"t4u7-l4", level:2, q:"Why is coding described as a way into analysis rather than the analysis itself?", options:[
     {t:"Because after coding you still need to compare, interpret and connect codes to answer the question", ok:true, why:"A list of codes isn’t yet a set of findings."},
     {t:"Because codes are only used in quantitative research", why:"Coding is central to qualitative analysis."},
     {t:"Because software does the analysis after you code", why:"Software retrieves; people interpret."},
     {t:"Because codes must be deleted before writing up", why:"Codes are kept as part of the audit trail."}]},

   /* Lesson 5 */
   {id:"t4u7-q37", lesson:"t4u7-l5", level:1, q:"Which is the current (Braun and Clarke, 2022) name of phase 3 of reflexive thematic analysis?", options:[
     {t:"Generating initial themes", ok:true, why:"It replaced “searching for themes” from 2006."},
     {t:"Searching for themes", why:"That was the 2006 name; they changed it because themes aren’t waiting to be found."},
     {t:"Producing the report", why:"That was the 2006 name for phase 6."},
     {t:"Coding", why:"That is phase 2."}]},
   {id:"t4u7-q38", lesson:"t4u7-l5", level:2, q:"Which is a theme rather than a topic summary?", options:[
     {t:"“Care as a debt”: adult children described caring for parents as repaying what they had received, which made asking for help feel like failure", ok:true, why:"A central idea interpreting shared meaning."},
     {t:"“Caring”: participants talked about caring", why:"Names the topic only."},
     {t:"“Costs”: some mentioned money, some time", why:"A list under a heading, no shared meaning."},
     {t:"“Question 4 answers”", why:"Organised by interview question, not interpretation."}]},
   {id:"t4u7-q39", lesson:"t4u7-l5", level:1, q:"Which criterion did Lincoln and Guba propose as the counterpart of external validity?", options:[
     {t:"Transferability", ok:true, why:"Whether findings might apply elsewhere, judged by readers using thick description."},
     {t:"Credibility", why:"Credibility parallels internal validity."},
     {t:"Dependability", why:"Dependability parallels reliability."},
     {t:"Confirmability", why:"Confirmability parallels objectivity."}]},
   {id:"t4u7-q40", lesson:"t4u7-l5", level:3, q:"A paper says it used reflexive thematic analysis and reports “95% agreement between two coders, confirming the themes.” What is the problem?", options:[
     {t:"Coder agreement belongs to coding reliability approaches; reflexive TA treats coding as interpretation, so this mixes incompatible assumptions", ok:true, why:"Braun and Clarke warn against exactly this mix."},
     {t:"95% is too low", why:"The issue isn’t the number but whether agreement fits the approach."},
     {t:"Thematic analysis should never involve more than one person", why:"Teams can do TA; they just need consistent assumptions."},
     {t:"There is no problem", why:"The approach and the quality claims don’t match."}]},
   {id:"t4u7-q41", lesson:"t4u7-l5", level:2, q:"In Guest, Bunce and Johnson’s (2006) study of 60 interviews, almost all codes had appeared within the first twelve interviews. What is the most accurate lesson to draw?", options:[
     {t:"In a fairly similar group all asked the same questions, codes can stop appearing early, but this isn’t a universal rule", ok:true, why:"The finding depended on their sample and design."},
     {t:"Every qualitative study needs exactly twelve interviews", why:"Sample needs depend on the question, the participants and the approach."},
     {t:"Interviews after the twelfth are always wasted", why:"Later interviews may deepen understanding even if they add few new codes."},
     {t:"Saturation is impossible", why:"Their study observed it under particular conditions."}]},
   {id:"t4u7-q42", lesson:"t4u7-l5", level:2, q:"Which is an example of investigator triangulation?", options:[
     {t:"Two researchers from different backgrounds analyse the same data and discuss their interpretations", ok:true, why:"Using more than one investigator is investigator triangulation (Denzin)."},
     {t:"Interviewing the same person twice", why:"That is repeated data collection, not a different investigator."},
     {t:"Using interviews and documents", why:"That is methods or data triangulation."},
     {t:"Sending themes back to participants", why:"That is member checking."}]},
   {id:"t4u7-q43", lesson:"t4u7-l5", level:3, q:"Amara sends her themes to participants. Most agree, but one strongly disagrees with a theme. What does this mean?", options:[
     {t:"It is more data: she should reflect on it, re-check the theme against the dataset, and consider reporting it", ok:true, why:"Member checks inform analysis rather than acting as a vote."},
     {t:"The theme is automatically wrong and must be removed", why:"A theme summarises a pattern across people; one person may not see themselves in it."},
     {t:"The participant must be removed from the study", why:"Removing inconvenient data is an integrity problem."},
     {t:"Member checking proves the other themes are true", why:"Agreement increases confidence but doesn’t prove truth."}]},
   {id:"t4u7-q44", lesson:"t4u7-l5", level:3, q:"A student writes: “Data collection stopped when saturation was reached.” What would make this stronger?", options:[
     {t:"Explaining how the decision was judged (for example, what was tracked and what later interviews added) and why the sample suits the question", ok:true, why:"Saturation claims need showing, not just stating, and some approaches prefer other rationales."},
     {t:"Adding “complete” before “saturation”", why:"A stronger word isn’t evidence."},
     {t:"Removing any mention of when data collection stopped", why:"Readers need to know the stopping rationale."},
     {t:"Stating that 30 is always enough", why:"There’s no universal number."}]},
   {id:"t4u7-q45", lesson:"t4u7-l5", level:1, q:"What is an audit trail?", options:[
     {t:"A record of data, notes, codebook versions and decisions that lets someone follow how conclusions were reached", ok:true, why:"It supports dependability and confirmability."},
     {t:"A financial record of research spending", why:"In qualitative research the term means a record of analytic decisions."},
     {t:"A list of participants’ names and addresses", why:"Identifying details are kept separately and securely, not in an audit trail."},
     {t:"The final published report", why:"The report draws on the audit trail but isn’t it."}]}
  ]
});
