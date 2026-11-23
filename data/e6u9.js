(function(){
/* World Englishes · Unit 9 (e6u9) · Attitudes, identity and power */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u9", track:"e6", n:9, title:"Attitudes, identity and power", icon:"⚖️",
  blurb:"People judge speakers by accent, and those judgments can change who gets heard, taught and hired. This unit looks at the research on language attitudes, accent and understanding, and identity. It also looks at native-speakerism and hiring, and at English as both an opportunity and a gate. It describes each study and each debate with care and with both sides. It uses no new recordings and never asks you to rate a real speaker.",
  goals:[
    "Explain how language attitudes are measured, and describe the matched-guise technique and what it found",
    "Say how accent differs from understanding, and how expectations change what people hear",
    "Explain why accents and Englishes carry identity, and why a speaker may choose not to sound “native”",
    "Define native-speakerism, describe studies of hiring in English teaching, and say what fair criteria look like",
    "Describe the debate about linguistic imperialism with both sides, and say what fair listening looks like"
  ],
  read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, sections 2.1 “Language and identity” and 2.6 “Linguistic law enforcement”; Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”", note:"Read section 10.7 after Lesson 1 and section 2.1 after Lesson 3. The book is not about World Englishes, so use it for the ideas about status, identity and power."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u9-l1", title:"How listeners judge accents", minutes:55,
   hook:{q:"Researchers play a listener two recordings. In both, the same person reads the same text, once in each of two accents. The listener says that one voice sounds more intelligent. What does this result most likely show?", options:["That one accent belongs to a more intelligent person","Something about the listener’s attitudes, because the speaker and the text did not change","That the listener has poor hearing","That one accent is easier to read aloud"], answer:1, reveal:"**It shows the listener’s attitudes.** The speaker and the text stayed the same, so the difference came from what the listener thinks about the two accents. This is the idea behind the matched-guise technique, and this lesson explains it."},
   goals:[
     "Define language attitude, and say why attitudes tell us about listeners and not about speakers",
     "Describe the matched-guise technique of Lambert and colleagues (1960) and what it found, with its limits",
     "Explain status and solidarity, and overt and covert prestige",
     "Define standard language ideology, with the work of Milroy and Milroy and of Lippi-Green",
     "Say what attitude research can show and what it cannot show"
   ],
   learn:[
    {h:"Attitudes to ways of speaking", body:[
      {lead:"People often form an opinion about a speaker within a few seconds of hearing an accent."},
      "A [[we-language-attitude|language attitude]] is a feeling or an opinion about a language, a variety or an accent. The word *attitude* matters here. An attitude is something a person holds. It is not something a variety has.",
      "In most cases, the opinion is really about a group of people. A listener hears an accent and thinks of the people who are linked with it in the listener’s society. The listener then gives the speaker the traits of that group. Linguists call a quick judgment of this kind [[accent-bias]]. Unit 1 of How English Works noted that linguistics finds no support for judging intelligence or skill from an accent ({{accents-dialects-variation}}).",
      "Where do attitudes come from? They come from family talk, school, films, news, jokes and the history of a place. A society gives some groups more power than others, and the accents of the powerful groups often get more respect. The respect follows the power. It does not follow how clear, regular or beautiful the accent is.",
      {ex:"This is a private task, and nobody will check it. Think of an accent that you hear often in films or on the news. Notice whether you have a first feeling about the people who speak it. Do not give it a score, and do not write it down for anyone. Ask only one question: where could this feeling have come from? A film, a teacher, a friend, an advertisement? Many learners find that the feeling has a source outside the speakers themselves.", label:"A private moment of noticing"},
      "This lesson never asks you to rate a recording or a real speaker. It describes what researchers did, and it lets you think about your own reactions privately."
    ]},
    {h:"The matched-guise technique", body:[
      {lead:"A direct question gets polite answers, so researchers built a method that hides the point of the test."},
      "If you ask people, “Do you think less of speakers of this accent?”, many will say no, even when they hold the attitude. In 1960, Wallace Lambert and his colleagues at McGill University in Montreal published a way around this problem. It is called the [[we-matched-guise|matched-guise technique]].",
      "The idea is simple. A bilingual speaker reads the same text twice, once in each language. Each reading is a *guise*, which means a way of presenting oneself. The recordings are mixed with others, so the listeners think that they are hearing different people. The listeners then rate each voice on traits such as intelligence, kindness and leadership. The person is the same, so the voice quality, age and text are almost the same. A difference in the ratings points to attitudes toward the two languages.",
      {fig:'<svg viewBox="0 0 340 340"><text x="170" y="18" text-anchor="middle">Matched-guise design (simplified)</text><rect class="d-sage" x="80" y="32" width="180" height="48" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">One bilingual speaker</text><text class="s" x="170" y="70" text-anchor="middle">reads the same text twice</text><path class="d-ink" d="M130 82L84 100L84 112" fill="none" stroke-width="2"/><path class="d-inkf" d="M76 106L84 120L92 106z"/><path class="d-ink" d="M210 82L256 100L256 112" fill="none" stroke-width="2"/><path class="d-inkf" d="M248 106L256 120L264 106z"/><rect class="d-gold" x="14" y="122" width="140" height="54" rx="8" stroke-width="2"/><text x="84" y="146" text-anchor="middle">Guise A</text><text class="s" x="84" y="164" text-anchor="middle">language or accent 1</text><rect class="d-lup" x="186" y="122" width="140" height="54" rx="8" stroke-width="2"/><text x="256" y="146" text-anchor="middle">Guise B</text><text class="s" x="256" y="164" text-anchor="middle">language or accent 2</text><path class="d-ink" d="M84 178L84 196L140 212" fill="none" stroke-width="2"/><path class="d-inkf" d="M132 203L146 215L129 218z"/><path class="d-ink" d="M256 178L256 196L200 212" fill="none" stroke-width="2"/><path class="d-inkf" d="M208 203L194 215L211 218z"/><rect class="d-soft" x="40" y="220" width="260" height="48" rx="8" stroke-width="2"/><text x="170" y="240" text-anchor="middle">Listeners rate each voice</text><text class="s" x="170" y="258" text-anchor="middle">they think the voices are different people</text><path class="d-ink" d="M170 270L170 282" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 278L170 290L178 278z"/><rect class="d-rose" x="40" y="292" width="260" height="40" rx="8" stroke-width="2"/><text x="170" y="316" text-anchor="middle">Compare the ratings of A and B</text></svg>', alt:"A diagram. One bilingual speaker reads the same text twice. Two arrows lead to Guise A and Guise B. Both lead to a box where listeners rate each voice, thinking that the voices are different people. A last box says to compare the ratings of A and B.", cap:"Speaker and text stay the same, so a difference in the ratings points to listener attitudes."},
      "The Montreal study is the model. The speakers were bilingual in French and English, and the listeners were English-speaking and French-speaking people in Montreal. The researchers expected each group to prefer the voices in its own language. The English-speaking listeners did. The French-speaking listeners did not: they also rated the English guises more favorably. They rated the French guises higher only on some traits, such as kindness and religiousness. The researchers linked this result to the higher social and economic position of English speakers in Montreal at that time.",
      "Be careful with the result. It tells us about one city, one period and one group of listeners. The listeners heard only a voice, and they rated traits that a voice cannot show. Later researchers used the same method with accents inside one language. The method has also been criticized, for example because a text read aloud in a test room is not natural speech. Even so, it showed that attitudes can be measured, and that they follow social ideas more than speakers."
    ]},
    {h:"Status and solidarity", body:[
      {lead:"People judge accents on two different scales."},
      "Studies of attitudes often find two groups of traits. The first is [[we-status-solidarity|status]]: traits such as *intelligent*, *educated*, *successful* and *competent*. The second is *solidarity*, which means closeness and warmth: traits such as *friendly*, *kind*, *trustworthy* and *one of us*.",
      {table:[["Scale","Traits that listeners rate","What a high score suggests"],["Status","Intelligent, educated, successful","The listener links the accent with power and school"],["Solidarity","Friendly, trustworthy, “one of us”","The listener links the accent with home and belonging"]]},
      "The two scales can point in different directions. In the Montreal study, French-speaking listeners rated the English guises higher on many traits, but they rated the French guises higher on kindness. Howard Giles (1970) studied how people in Britain judged regional and standard accents. Later studies in Britain and elsewhere often found that standard accents scored high on status.",
      "Nikolas Coupland and Hywel Bishop (2007) used a large survey. More than 5,000 people in the UK rated the names of 34 accents, without hearing recordings. They rated each accent for prestige and for how pleasant it sounds. Standard accents came near the top on both scales, and the Birmingham accent came last on both. But the order was not the same on the two scales. For example, the accent called “Queen’s English” was first for prestige, but it was not in the top five for pleasantness.",
      "This helps to explain a puzzle. Why do people keep using a local accent when they know it has low status elsewhere? The answer is [[we-covert-prestige|covert prestige]]. The word *overt* means open: the standard form is openly praised in school and in the news, and this is overt [[prestige]]. *Covert* means hidden: a local form has value inside the group, because it shows loyalty and belonging. Peter Trudgill (1972) described this pattern in a study of speech in Norwich, England, where many men valued working-class forms of speech. Labov’s [[we-department-store-study|department-store study]] showed a related social meaning of sounds in New York.",
      "So a person can use a form that outsiders rate low, and the person is not making a mistake. The person is choosing belonging."
    ]},
    {h:"Standard language ideology", body:[
      {lead:"Beyond single judgments, there is a whole belief system about which way of speaking is correct."},
      "An ideology is a set of ideas about how the world works. It is often so common that people do not notice it. The [[we-standard-language-ideology|standard language ideology]] is the belief that one variety, the standard, is correct and neutral. In this belief, other varieties are lesser. In this course, the standard variety is {{standard-english-explained}}. The idea that it is more logical than other varieties is one of the myths from How English Works.",
      "Two books explain how this ideology works. James Milroy and Lesley Milroy wrote *Authority in Language* (first published in 1985). They describe standardization as a process in which institutions such as schools, publishers and dictionaries fix one form and treat it as the right form. They also describe the *complaint tradition*: people write to newspapers, again and again, to complain that standards are falling. The Milroys argue that no speaker uses a perfectly fixed standard, so the standard works more as an idea than as a real way of talking.",
      "Rosina Lippi-Green wrote *English with an Accent* (1997, second edition 2012) about the United States. She defines standard language ideology as a bias toward an idealized, uniform spoken language. Powerful institutions keep this bias in place. She also describes *language subordination*. This is a process in which a society tells some speakers that their way of speaking is inferior. She argues that judging people by accent can be a socially accepted way to treat them unequally. It can continue where other kinds of unequal treatment are no longer accepted.",
      "Linguists do not say that standards are bad. A standard variety does real work: it gives a shared written form for school, law and science. The problem is the extra belief that a standard is *better* and that people who speak differently are less able. Learners may reasonably want to learn a standard for their own goals. That is a choice about a tool, and it does not make other varieties worse."
    ]},
    {h:"What attitude research can and cannot show", body:[
      {lead:"A rating tells you about the person who gave it."},
      {list:[
        "**It can show** that listeners hold shared social ideas about accents, and that these ideas affect what they say about speakers.",
        "**It can show** that attitudes change with place, time and group. A rating from Montreal in 1960 does not describe other places.",
        "**It cannot show** that a speaker is more or less intelligent, honest or skilled. The speaker did not change, and the listener did.",
        "**It cannot show** that an accent is clearer or less clear. Clarity is a different question, and Lesson 2 looks at it."
      ]},
      "Attitudes are also not fixed. People who hear many varieties, and who know the speakers, often change how they feel. This is one reason why Unit 3 asked you to describe what you hear before you judge it ({{we-listening-accents}}).",
      {key:"Attitude research measures listeners. A matched-guise result says that the listener linked an accent with a social group, and it says nothing about the speaker’s ability."}
    ]}
   ],
   try:[
    M("e6u9-l1-x1","In a matched-guise study, why is the same person used for both guises?",1,[
      ["To make the recordings cheaper","Cost is not the reason. The design controls the voice, so that the ratings can be linked to attitudes."],
      ["So that a difference in the ratings cannot come from a different voice, age or text","Right. The speaker and text stay the same, so the difference points to listener attitudes."],
      ["Because bilingual speakers always sound more intelligent","Nothing in the method says this."],
      ["So that listeners know it is one person","The listeners are not told. They think the voices belong to different people."]
    ]),
    {id:"e6u9-l1-x2", type:"order", q:"Put the steps of a matched-guise study in order.", items:[
      {t:"A bilingual speaker reads the same text in two languages", why:"The study starts with recordings of the same person in two guises."},
      {t:"The recordings are mixed with others, so the voices seem to belong to different people", why:"Listeners must not know that the voices are matched."},
      {t:"Listeners rate each voice on traits such as intelligence and kindness", why:"The ratings are the data."},
      {t:"Researchers compare the ratings for the two guises of each speaker", why:"The last step compares the guises, and any difference points to attitudes."}
    ]},
    {id:"e6u9-l1-x3", type:"sort", q:"Does each trait belong to the status scale or the solidarity scale?", buckets:["Status","Solidarity"], items:[
      {t:"Educated", b:0, why:"Education is a status trait."},
      {t:"Friendly", b:1, why:"Warmth is a solidarity trait."},
      {t:"Successful", b:0, why:"Success is a status trait."},
      {t:"Trustworthy", b:1, why:"Trust is a solidarity trait."},
      {t:"Intelligent", b:0, why:"Intelligence is a status trait."},
      {t:"“One of us”", b:1, why:"Feeling close to a person is a solidarity trait."}
    ]},
    {id:"e6u9-l1-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Language attitude","A feeling or opinion that a person holds about a variety or an accent","It belongs to the listener."],
      ["Overt prestige","Open praise for a form, often for the standard","School and the news often give it."],
      ["Covert prestige","Hidden value of a local form inside a group","It shows loyalty and belonging."],
      ["Complaint tradition","Repeated complaints that standards are falling","Milroy and Milroy describe it."],
      ["Language subordination","A process that tells some speakers that their speech is inferior","Lippi-Green describes it."]
    ]},
    {id:"e6u9-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"A matched-guise result shows that one accent belongs to smarter people.", flag:true, why:"The speaker did not change, so the result shows listener attitudes, and it cannot show anyone’s intelligence."}, " ", {t:"Lambert and colleagues published the matched-guise technique in 1960.", flag:false, why:"Correct. The study was done in Montreal."}, " ", {t:"Covert prestige means that a local form has hidden value inside a group.", flag:false, why:"Correct. It helps to explain why people keep a local accent."}, " ", {t:"Linguists say that every standard variety is bad and should go.", flag:true, why:"Linguists say that a standard does useful work. The problem is the belief that it is better and that other speakers are less able."}, " ", {t:"Status and solidarity ratings can differ for the same accent.", flag:false, why:"Correct. In Coupland and Bishop’s (2007) survey, the order of the accents was not the same on the two scales."}, " ", {t:"Attitudes to accents follow the clarity of each accent.", flag:true, why:"Attitudes follow social ideas and power. Clarity is a separate question."}, "”"
    ]},
    {id:"e6u9-l1-x6", type:"number", q:"Lambert and colleagues published the matched-guise study in 1960. Milroy and Milroy published *Authority in Language* in 1985. How many years were there between the two dates?", answer:25, tol:0, unit:"years", why:"1985 − 1960 = 25 years.", wrongs:[{v:35, tol:0, why:"This adds 10 too many. Check: 1960 + 25 = 1985."},{v:15, tol:0, why:"This subtracts 10 too many. Check: 1960 + 25 = 1985."}], hint2:"Subtract 1960 from 1985."},
    M("e6u9-l1-x7","A manager says, “A study showed that people rate her accent as less professional, so she should not present to clients.” Which reply fits Lesson 1 best?",2,[
      ["“Yes. The study proves that the accent is less professional.”","A rating shows what listeners think. It does not show a fact about the speaker."],
      ["“Ratings do not matter, so ignore the listeners.”","Listener attitudes are real, and they can affect people. The reply should deal with them."],
      ["“The rating tells us about listeners’ attitudes. It does not show her skill, so let us judge her presentation.”","Right. It separates the attitude from the evidence about her work."],
      ["“We should ask clients to guess where she is from.”","This invites more stereotyping, and it is not the point."]
    ]),
    {id:"e6u9-l1-x8", type:"explain", q:"Your friend Ana says, “If listeners rate an accent as less intelligent in a study, then it must be true.” Write a short, kind answer.", size:"3–5 sentences", prompt:"A rating can show what listeners think, but …", hint:"Think about the matched-guise design, the same speaker in both guises, and what changes between the two recordings.", points:["Says that in a matched-guise study the speaker and text stay the same","Says that the difference in ratings shows listener attitudes","Says that a rating cannot show a speaker’s real ability","Stays kind and does not blame Ana"], model:"A rating can show what listeners think, but not what is true about the speaker. In a matched-guise study, the same person reads the same text in two guises. The speaker does not change, so a difference in the ratings points to the listeners’ attitudes. Those attitudes come from social ideas about groups of people. They do not measure how intelligent anyone is."}
   ],
   apply:{
    intro:"These tasks use your own notes and one free web page. Nothing needs an account.",
    tasks:[
     {t:"Notice where an attitude came from", how:[
       "Choose one accent or variety of English that you hear often in media. Do not choose a person you know.",
       "Write three sentences about where your first feeling toward it could have come from, such as a film, a teacher or a friend. Do not score the accent.",
       "Write one sentence about real evidence of a speaker’s ability, such as a clear explanation."
     ], write:"The variety… my first feeling could come from… real evidence of ability would be…"},
     {t:"Read about the matched-guise technique", how:[
       "Open the Wikipedia page [Matched-guise test](https://en.wikipedia.org/wiki/Matched-guise_test) and read the first two sections.",
       "Draw the design in four boxes, as in the diagram of this lesson, and label each box in your own words.",
       "Write two limits of the method, one about the listeners and one about the recordings."
     ], write:"My four boxes… limit about the listeners… limit about the recordings…"}
    ],
    proof:"A note about where one attitude could come from, with no score, and a four-box drawing of the matched-guise design with two limits."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”", note:"Read it after this lesson. It explains how speech forms and social status are linked."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u9-l2", title:"Accent, understanding and bias", minutes:55,
   hook:{q:"Two groups of students hear the same recorded lecture. One group sees a photo of one instructor, and the other group sees a photo of a different instructor. Which result would show that expectations change what listeners report?", options:["Both groups report the same amount of accent and understand the same amount","The groups differ in the accent they report and in their test scores, although the recording was identical","The recording sounds different to each group because the volume changed","Students in both groups write the same answers on the test"], answer:1, reveal:"**The groups differ although the recording is identical.** Nothing in the sound changed, so the difference comes from the listener’s expectation. Rubin (1992) used a design of this kind, and this lesson describes it with care."},
   goals:[
     "Separate accentedness, intelligibility and comprehensibility",
     "Describe Munro and Derwing (1995) and say what it found about accent and understanding",
     "Describe Rubin’s (1992) photo study carefully, and define reverse linguistic stereotyping",
     "Explain why understanding is shared work between speaker and listener",
     "Use fair, specific ways to ask a speaker for help"
   ],
   learn:[
    {h:"Three different questions", body:[
      {lead:"“I can’t understand her accent” can mean three different things."},
      "Researchers who study accents and understanding separate three ideas. [[we-accentedness|Accentedness]] is how different a voice sounds from the accent that the listener expects. It is a feeling about how the speech sounds. [[we-intelligibility|Intelligibility]], in the sense used by Munro and Derwing, is how much of the message the listener actually understands. Researchers often measure it by asking listeners to write down what they heard. [[we-comprehensibility|Comprehensibility]] is how easy or hard the listener says it is to understand. Listeners give it a rating.",
      {table:[["Idea","The question","How researchers often measure it"],["Accentedness","How different does it sound?","A rating scale"],["Comprehensibility","How hard was it to understand?","A rating scale"],["Intelligibility","How much did the listener understand?","A transcription or a test of the message"]]},
      "Unit 1 used a related scheme by Smith and Nelson (1985). It has three levels: recognizing words, understanding meaning and understanding the speaker’s purpose ({{we-intelligibility-respect}}). The two schemes use the word *intelligibility* in slightly different ways. When you read a paper, check how the author defines each word.",
      "The three ideas are linked. They are not the same. A person can sound very different from the listener’s own accent and still be fully understood."
    ]},
    {h:"Munro and Derwing (1995)", body:[
      {lead:"A strong accent does not always mean that listeners understand less."},
      "Murray Munro and Tracey Derwing (1995) published a well-known study in the journal *Language Learning*. They recorded learners of English whose first language was Mandarin, and they recorded some native speakers of English as a comparison. Native English listeners then did two things. They rated the speech for accent and for ease of understanding, and they wrote down what they heard.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Three ideas that overlap</text><rect class="d-gold" x="20" y="34" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Accentedness</text><text class="s" x="170" y="78" text-anchor="middle">How different does it sound?</text><rect class="d-lup" x="20" y="108" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="132" text-anchor="middle">Comprehensibility</text><text class="s" x="170" y="152" text-anchor="middle">How hard did it feel to understand?</text><rect class="d-sage" x="20" y="182" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="206" text-anchor="middle">Intelligibility</text><text class="s" x="170" y="226" text-anchor="middle">How much was actually understood?</text><text class="s" x="170" y="266" text-anchor="middle">Linked, but not the same.</text><text class="s" x="170" y="284" text-anchor="middle">A strong accent can still be understood well.</text></svg>', alt:"Three stacked boxes: accentedness, comprehensibility and intelligibility, each with a short question. A note says that they are linked but not the same.", cap:"Accentedness is a feeling about sound. Intelligibility is what the listener understood."},
      "The main finding is that the three measures were related but partly independent. Some speech that listeners rated as strongly accented was still highly intelligible: the listeners wrote it down correctly. In other words, a strong accent did not always mean a loss of understanding.",
      "This does not mean that accent never affects understanding. Some features of pronunciation can make speech harder to follow, and Unit 8 looks at which features matter most. The point is that a listener’s first reaction to accent is a poor guide to how much was understood."
    ]},
    {h:"Rubin (1992): the same voice, two photos", body:[
      {lead:"Expectations can change what a listener reports hearing."},
      "Donald Rubin (1992) wrote about how US undergraduates judge teaching assistants whose first language is not English. The abstract of his article says that Study 1 asked one question. Does the instructor’s ethnicity change the students’ judgments, even when the instructor’s English is completely standard?",
      "The design is easy to picture. As later summaries describe it, students heard the same short recorded lecture, spoken by a native speaker of American English. While they listened, they saw a photo of the “instructor”. Some students saw a photo of an Asian face, and other students saw a photo of a white face. The two photos were matched for attractiveness. The recording was the same for both groups. The students then judged the instructor and answered questions about the lecture.",
      "In those summaries, students who saw the Asian face reported hearing an accent that was not in the recording. They also did less well on the test of what the lecture said. Because the sound was identical, the difference came from the listeners’ expectations. Check the exact numbers in the article itself, because this lesson gives only the main result.",
      "Later work uses a name for this effect. Kang and Rubin (2009) call it [[we-reverse-linguistic-stereotyping|reverse linguistic stereotyping]]. In ordinary stereotyping, a listener hears an accent and guesses the speaker’s group. In the reverse case, a listener first sees or learns the speaker’s group, and that expectation then changes how the listener judges the speech.",
      {warn:"One experiment at one university does not describe every listener. The lesson is narrower. Expectations can change what people hear, and listeners often do not notice."}
    ]},
    {h:"Understanding is shared work", body:[
      {lead:"Speech understanding is something the speaker and the listener do together."},
      "A listener does more than receive sounds. The listener predicts words, uses the topic and the setting, and fills gaps. If the listener expects a person to be hard to understand, the listener may stop trying, or may listen less carefully. Unit 1 noted that listeners who often hear a variety understand it better. This is the listener’s part of the work.",
      "Stephanie Lindemann (2002) studied this in an article called “Listening with an attitude”. Twelve native speakers of English in the United States each did a map task with a Korean speaker of English. Lindemann had measured their attitudes toward Koreans first. All the pairs completed the task fairly well, except where the English speaker avoided the difficult parts. Some, but not all, of the listeners with negative attitudes used unhelpful strategies of this kind. Attitudes were also linked with how successful the listeners felt the conversation was. Her point is that attitudes can become part of the problem.",
      "Real difficulties also exist, and a fair account must say so. A noisy room, a fast speaker, an unfamiliar word or a bad phone line can all make speech hard to follow. Any speaker of any variety can be hard to follow in these conditions. The fair step is to find out what the difficulty is before deciding who is responsible.",
      "Lippi-Green (2012) makes a related point about the United States: communication has two sides, and the listener has a part to play as well as the speaker. In a respectful exchange, both people take some of the work."
    ]},
    {h:"What listeners and speakers can do", body:[
      {lead:"Small, specific moves help more than general complaints."},
      "Derwing, Rossiter and Munro (2002) tested training for listeners with social work students. Over eight weeks, one group learned about Vietnamese-accented English and about communication across cultures. A second group had only the part about cultures, and a third group had no training. On the listening tests, the groups did not differ. But the first group became much more confident that they could talk successfully with second-language speakers, and both trained groups showed more empathy for immigrants. It was one study, and more research is useful. It suggests that training can change how listeners feel about these conversations.",
      {table:[["Instead of…","Try…","Why it works"],["“I can’t understand your accent.”","“I missed the last part. Could you say it again?”","It names the problem as a missed part and does not blame a person"],["Guessing and nodding","“Do you mean …?”","It checks understanding and shows respect"],["Speaking louder","Speaking more slowly, or writing a key word","It deals with the real difficulty"],["Asking where someone is from","Asking what they said","The question is about the message"]]},
      "Speakers can help too, with the strategies of [[we-accommodation|accommodation]] that Unit 8 teaches. They can slow down for a key word, give an example, spell a name, or say the same thing in another way. Neither person has to change their accent. Both people can change how they cooperate.",
      {key:"Accent, intelligibility and comprehensibility are three different questions. Expectations change what listeners report, and understanding is shared work."}
    ]}
   ],
   try:[
    M("e6u9-l2-x1","Which measure asks how much of the message the listener actually understood?",2,[
      ["Accentedness","This is a feeling about how different the voice sounds."],
      ["Comprehensibility","This is a rating of how easy the speech felt to understand."],
      ["Intelligibility, in the sense of Munro and Derwing","Right. It is often measured by what listeners write down or answer correctly."],
      ["Reverse linguistic stereotyping","This is an effect of expectation, not a measure of understanding."]
    ]),
    {id:"e6u9-l2-x2", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Accentedness","How different a voice sounds from the accent a listener expects","It is a feeling about the sound."],
      ["Comprehensibility","How hard or easy the listener says it was to understand","Listeners give a rating."],
      ["Intelligibility","How much of the message the listener actually understood","Researchers often use a transcription."],
      ["Reverse linguistic stereotyping","The listener’s expectation about a speaker’s group changes how the speech is judged","Kang and Rubin (2009) use this name."]
    ]},
    {id:"e6u9-l2-x3", type:"sort", q:"Does each item describe how speech sounds, or how much was understood?", buckets:["How it sounds","How much was understood"], items:[
      {t:"A rating of how foreign a voice sounds", b:0, why:"This is accentedness."},
      {t:"The number of words a listener wrote down correctly", b:1, why:"This is a measure of intelligibility."},
      {t:"A listener’s feeling that the voice is very different from the local accent", b:0, why:"This is accentedness."},
      {t:"A test of what the listener learned from a lecture", b:1, why:"This measures how much of the message was understood."},
      {t:"A rating of how hard the speech was to follow", b:1, why:"This is comprehensibility, a rating about understanding."}
    ]},
    {id:"e6u9-l2-x4", type:"order", q:"A listener misses part of what a speaker said. Put these steps in the most helpful order.", items:[
      {t:"Say what you did understand", why:"This keeps the exchange friendly and shows that you are listening."},
      {t:"Name the part you missed, such as the last number or one word", why:"A specific request is easier to answer than a general complaint."},
      {t:"Ask the speaker to repeat it or say it another way", why:"Now the speaker knows what to change."},
      {t:"Say it back in your own words to check", why:"This closes the loop and prevents a second misunderstanding."}
    ]},
    {id:"e6u9-l2-x5", type:"spot", q:"A student wrote these notes after Lesson 2. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Munro and Derwing found that a strong accent always means poor understanding.", flag:true, why:"They found that the three measures are linked but partly independent. Some strongly accented speech was still highly intelligible."}, " ", {t:"In Rubin’s Study 1, the instructor’s ethnicity was tested even when the English was standard.", flag:false, why:"Correct. This is what the abstract says."}, " ", {t:"In the photo design, the recording was different for each photo.", flag:true, why:"The recording was the same. That is why the difference points to listener expectations."}, " ", {t:"Kang and Rubin (2009) call the effect reverse linguistic stereotyping.", flag:false, why:"Correct. They use this name for it."}, " ", {t:"Real problems such as noise and speed never affect understanding.", flag:true, why:"They do. A fair listener checks what the difficulty is."}, " ", {t:"Listening is a skill that can improve with practice.", flag:false, why:"Correct. Listeners who often hear a variety understand it better, and in Derwing, Rossiter and Munro’s (2002) study, training made listeners more confident."}, "”"
    ]},
    {id:"e6u9-l2-x6", type:"number", q:"Lambert and colleagues published the matched-guise study in 1960. Rubin published the photo study in 1992. How many years were there between the two dates?", answer:32, tol:0, unit:"years", why:"1992 − 1960 = 32 years.", wrongs:[{v:22, tol:0, why:"This subtracts 10 too many. Check: 1960 + 32 = 1992."},{v:42, tol:0, why:"This adds 10 too many. Check: 1960 + 32 = 1992."}], hint2:"Subtract 1960 from 1992."},
    M("e6u9-l2-x7","A manager hears that customers “can’t understand” a new colleague. Which first step fits Lesson 2 best?",1,[
      ["Tell the colleague to change his accent","This assumes that the accent is the cause, and it does not check."],
      ["Listen to some calls and note exactly what was hard, such as speed, one word or noise","Right. The step finds the real difficulty before choosing who should change."],
      ["Ask customers to rate how educated the colleague sounds","This invites the stereotype that the unit describes."],
      ["Do nothing, because all complaints are bias","Some difficulties are real. A fair person checks."]
    ]),
    {id:"e6u9-l2-x8", type:"explain", q:"A classmate says, “If I find an accent hard to follow, that must be because the speaker has a bad accent.” Write a short, kind answer using this lesson.", size:"3–5 sentences", prompt:"It can feel that way, but …", hint:"Think about Munro and Derwing’s three measures, Rubin’s photo design, and the listener’s part of the work.", points:["Says that accent and understanding are different, and that a strong accent can still be understood","Says that expectations can change what listeners report, with a short mention of the photo design","Says that understanding is shared work, and that listeners can practice or ask for help","Does not blame the classmate and does not say that all difficulty is bias"], model:"It can feel that way, but research shows that accent and understanding are different. Munro and Derwing (1995) found that some speech rated as strongly accented was still highly intelligible. Rubin (1992) played the same recording with different photos, and listeners’ reports changed, so expectations matter too. Some difficulties are real, such as noise or an unfamiliar word. A good listener asks which part was hard and helps to solve it. Understanding is shared work."}
   ],
   apply:{
    intro:"These tasks use one free article page and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read the abstract of Rubin (1992)", how:[
       "Open the [publisher page](https://doi.org/10.1007/BF00973770) for Rubin’s article. Read the abstract only.",
       "Write what Study 1 tested, in one sentence, using your own words.",
       "Write one sentence about what the abstract does not tell you, for example the number of students."
     ], write:"Study 1 tested… the abstract does not tell me…"},
     {t:"Write three fair requests for help", how:[
       "Imagine that you are in a meeting and you miss a number, a name and a whole sentence.",
       "Write one short request for each. Each request must name the missing part and must not mention the speaker’s accent.",
       "Read your requests aloud. Check that each one is friendly and specific."
     ], write:"Request for the number… for the name… for the sentence…"}
    ],
    proof:"One sentence on what Rubin’s Study 1 tested, one thing the abstract leaves out, and three friendly requests that never mention accent."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”", note:"Read it after this lesson. It shows that speech carries social information as well as words."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u9-l3", title:"Accent, language and identity", minutes:55,
   hook:{q:"A speaker can use a standard accent when needed, but often keeps a local accent at home and with friends. Which explanation fits the research best?", options:["The speaker is too lazy to change","The local accent may signal belonging, and the speaker may choose it on purpose","The speaker cannot hear the difference","The local accent is easier for everyone to understand"], answer:1, reveal:"**The local accent may signal belonging.** Research from Labov (1963) to Trudgill (1972) shows that people use speech to show who they are and where they belong. A choice of this kind is a skill. This lesson looks at accent, language and identity."},
   goals:[
     "Explain why accents and varieties carry identity, with Labov’s (1963) island study",
     "Explain style shifting and audience design (Bell 1984), and connect them to code-switching",
     "Describe pride in local Englishes such as Singlish and Patwa without turning it into a rule",
     "Discuss, with sources and hedging, why some Japanese users of English may choose not to sound “native”",
     "Write personal goals for pronunciation that respect both understanding and identity"
   ],
   learn:[
    {h:"Why a way of speaking carries identity", body:[
      {lead:"A way of speaking is one of the ways that people show who they are."},
      "Every person has more than one identity. A person can be a daughter, a nurse, a fan of a team, a speaker of a local dialect and a student of English at the same time. Speech is one tool for showing these identities, and it also shows which groups a person does not belong to. Chapter 2 of *Essentials of Linguistics* starts with this idea in its section on language and identity.",
      "The classic evidence comes from an island. William Labov (1963) studied English on Martha’s Vineyard, an island off the coast of Massachusetts in the United States. He looked at the vowels in words such as *right* and *house*. Some islanders pronounced these vowels in a more “centralized” way, which means that the sound starts nearer the center of the mouth. Labov reported that the pronunciation was strongest among islanders who felt loyal to the island and planned to stay, and weaker among those who planned to leave. The sound had become a sign of belonging.",
      "This matters for our unit. The islanders were not making a mistake or following a rule that someone taught them. They were using a small sound to say, “I am from here.” Many accents and varieties work in this way.",
      {key:"A way of speaking passes information, and it also tells others who we are and where we belong."}
    ]},
    {h:"Style, audience and choice", body:[
      {lead:"One speaker can have many ways of speaking, and a skilled speaker chooses among them."},
      "Allan Bell (1984) studied newsreaders on radio stations in New Zealand. The same newsreaders read the news on stations with different audiences, and their speech changed a little from one station to another. Bell called the idea *audience design*: speakers shape their speech for the people they are talking to. This is normal. People talk differently to a child, a boss and a close friend.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">One speaker, many ways of speaking</text><rect class="d-soft" x="14" y="34" width="130" height="50" rx="8" stroke-width="2"/><text x="79" y="64" text-anchor="middle">At home</text><rect class="d-sage" x="196" y="34" width="130" height="50" rx="8" stroke-width="2"/><text x="261" y="56" text-anchor="middle">Local variety</text><text class="s" x="261" y="74" text-anchor="middle">or home language</text><path class="d-ink" d="M146 59L182 59" fill="none" stroke-width="2"/><path class="d-inkf" d="M176 51L190 59L176 67z"/><rect class="d-soft" x="14" y="98" width="130" height="50" rx="8" stroke-width="2"/><text x="79" y="128" text-anchor="middle">With friends</text><rect class="d-gold" x="196" y="98" width="130" height="50" rx="8" stroke-width="2"/><text x="261" y="128" text-anchor="middle">Casual style</text><path class="d-ink" d="M146 123L182 123" fill="none" stroke-width="2"/><path class="d-inkf" d="M176 115L190 123L176 131z"/><rect class="d-soft" x="14" y="162" width="130" height="50" rx="8" stroke-width="2"/><text x="79" y="192" text-anchor="middle">At school</text><rect class="d-lup" x="196" y="162" width="130" height="50" rx="8" stroke-width="2"/><text x="261" y="192" text-anchor="middle">Standard style</text><path class="d-ink" d="M146 187L182 187" fill="none" stroke-width="2"/><path class="d-inkf" d="M176 179L190 187L176 195z"/><rect class="d-soft" x="14" y="226" width="130" height="50" rx="8" stroke-width="2"/><text x="79" y="248" text-anchor="middle">International</text><text x="79" y="266" text-anchor="middle">meeting</text><rect class="d-rose" x="196" y="226" width="130" height="50" rx="8" stroke-width="2"/><text x="261" y="248" text-anchor="middle">Clear, shared</text><text x="261" y="266" text-anchor="middle">way of talking</text><path class="d-ink" d="M146 251L182 251" fill="none" stroke-width="2"/><path class="d-inkf" d="M176 243L190 251L176 259z"/></svg>', alt:"Four rows. At home leads to local variety or home language. With friends leads to casual style. At school leads to standard style. In an international meeting leads to a clear, shared way of talking.", cap:"A speaker’s repertoire is a set of choices. The examples are simplified."},
      "Unit 1 introduced the *repertoire*, the [[we-repertoire|set of languages and varieties]] that a person can use, and How English Works described [[code-switching]] as a normal skill. Choosing a way of speaking is part of identity work, because each choice says something about the speaker and about the listener. A person who speaks one way at home and another way at work is not “two-faced”. The person is skilled."
    ]},
    {h:"Pride in local Englishes", body:[
      {lead:"For many speakers, a local English is part of home and not a problem to fix."},
      "Earlier units described several local ways of speaking. Colloquial Singapore English, often called Singlish, is a regular system with its own particles and grammar ({{we-singapore-english}}). Many Singaporeans use both Singlish and standard English, and moving between them is a skill. Unit 5 described the Speak Good English Movement (2000) and its critics in neutral words. Supporters say that standard English helps in school, work and international business. Critics say that Singlish is part of Singaporean identity and that a campaign can make its speakers feel judged. Both views have reasons.",
      "Unit 6 introduced Jamaican Creole, also called Patwa or Patois, which has its own grammar ({{we-caribbean-english}}). Unit 7 looked at attitudes to creoles and school ({{we-creole-status-school}}). Many speakers value the creole as the language of home, humor and community, and also value the standard English of school and law. Unit 5 described how Filipino speakers move between Tagalog and English as [[we-taglish|Taglish]], which is a skill and not a failure.",
      "The word *pride* needs care. It does not mean that every speaker feels the same way. Some speakers love a local variety, some feel mixed, and some prefer a standard. Attitudes inside a community differ, and each person decides. The respectful position has two parts. Do not tell people that a local variety is wrong. Also do not tell them that they must use it."
    ]},
    {h:"Japanese users of English and the “native” model", body:[
      {lead:"In Japan, most people who use English are not first-language speakers, and many are comfortable with this."},
      "Japan belongs to Kachru’s expanding circle ({{we-kachru-circles}}). English is learned mostly at school, and a great deal of English around the world is spoken between people who are not first-language speakers. Unit 8 looks at this in more detail.",
      "Researchers who ask Japanese learners about accents report mixed views, and the two scales from Lesson 1 help to explain them. McKenzie (2008) asked 558 Japanese university students to listen to recordings of six varieties of English. The students rated the UK and US speakers highest for status. But they felt more solidarity, or closeness, with a Japanese speaker who had a strong Japanese accent in English.",
      "Sasayama (2013) also played recordings to Japanese college students. The study compared American English with English spoken by Japanese speakers. The students rated American English higher on traits linked with power. They preferred the Japanese speakers’ English on traits linked with solidarity. Many of them also wanted this kind of English to be accepted as an international variety. Jenkins (2007) wrote a book on attitudes to accents in English as a lingua franca, and on how these attitudes affect speakers’ sense of identity.",
      "Mariya Seto, a university student from the island of Shiojima who studies English because she wants to become an interpreter, might ask herself a question of this kind. Suppose a friend tells her that her Japanese accent in English is a problem. She can think about her own goal. As an interpreter, she needs to be clear and easy to follow for many kinds of listeners, and a Japanese accent can be clear. She may also decide to work on one feature that hurts understanding. Both are sensible choices, and neither makes her less of a speaker.",
      {table:[["Goal","What it means","A fair comment"],["A native-like accent","Sound like one chosen reference accent","A personal goal. It is hard to reach, and it is not required for clear communication"],["A clear accent of your own","Keep your accent, and work on features that block understanding","A goal that many researchers of lingua franca English support"],["A mix","Change some features for some settings","This is audience design, and it is common"]]}
    ]},
    {h:"Choosing your own goals", body:[
      {lead:"There is no single right accent goal, and every goal deserves respect."},
      "A learner can ask three questions. First: who do I talk to, and what do they need from me? A caller in a noisy office needs different things from a friend in a kitchen. Second: which features, if any, make me hard to follow? Unit 8 and Unit 10 help with this. Third: how do I want to sound, and why? This is an identity question, and only the learner can answer it.",
      "Two mistakes are common. One is to believe that everyone must sound like a chosen reference accent, so that any other accent is a problem. The other is to use identity as a reason never to listen to feedback about a feature that causes real misunderstanding. A sensible learner can keep an accent and still ask, “Is there a sound that makes me hard to follow, and can I change just that sound?”",
      "People who teach, hire or work with others can help by separating two things. Clear speech is a shared goal. A particular accent is a personal one.",
      {key:"A way of speaking can carry identity. Respect means that nobody must hide their accent, and nobody must keep it. The choice belongs to the speaker."}
    ]}
   ],
   try:[
    M("e6u9-l3-x1","What did Labov (1963) report about vowels on Martha’s Vineyard?",1,[
      ["Everyone on the island pronounced the vowels in the same way","The pronunciation was linked with how islanders felt about the island, so it varied."],
      ["The more centralized pronunciation was strongest among islanders who felt loyal to the island and planned to stay","Right. The sound became a sign of belonging."],
      ["Tourists invented the pronunciation","Labov described it as a local feature of the islanders."],
      ["The vowels were a spelling mistake","They are a pronunciation pattern, and it was regular."]
    ]),
    {id:"e6u9-l3-x2", type:"match", q:"Match each researcher to the idea in this lesson.", pairs:[
      ["Labov (1963)","A sound on Martha’s Vineyard linked to belonging to the island","It shows speech as identity."],
      ["Bell (1984)","Audience design: speakers shape their speech for the listeners","He studied radio newsreaders in New Zealand."],
      ["Trudgill (1972)","Covert prestige in Norwich","Local forms had value as signs of group loyalty."],
      ["McKenzie (2008)","Japanese students rated UK and US speakers high for status, and felt solidarity with a Japanese-accented speaker","Status and solidarity pointed in different directions."]
    ]},
    {id:"e6u9-l3-x3", type:"sort", q:"Does each statement fit the research in this lesson, or not?", buckets:["Fits the lesson","Does not fit"], items:[
      {t:"Speakers shape their speech for different audiences.", b:0, why:"This is Bell’s audience design."},
      {t:"A person who speaks differently at home and at work is two-faced.", b:1, why:"The lesson calls this a skill, called style shifting or code-switching."},
      {t:"A local accent can be a sign of belonging.", b:0, why:"This is the idea behind Labov’s island study."},
      {t:"Every Singaporean feels the same way about Singlish.", b:1, why:"Attitudes inside a community differ."},
      {t:"A learner may keep an accent and still work on one feature that blocks understanding.", b:0, why:"The lesson describes this as a sensible choice."},
      {t:"Everyone who learns English must aim for one reference accent.", b:1, why:"There are several goals, and none is required."}
    ]},
    {id:"e6u9-l3-x4", type:"spot", q:"A student wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Labov’s island study shows that a sound can signal who belongs to a place.", flag:false, why:"Correct. The study linked a vowel pattern with loyalty to the island."}, " ", {t:"Using one style at home and another at work shows that a person lacks a real identity.", flag:true, why:"Style shifting is a normal skill, and people have many identities."}, " ", {t:"Researchers who ask Japanese students about English accents report mixed views.", flag:false, why:"Correct. In McKenzie (2008) and Sasayama (2013), students rated US or UK English high on status and felt closer to Japanese speakers’ English."}, " ", {t:"Respect means telling people to keep their local variety.", flag:true, why:"Respect means that the choice belongs to the speaker, in both directions."}, " ", {t:"In Sasayama’s (2013) study, many students wanted English spoken by Japanese speakers to be accepted internationally.", flag:false, why:"Correct. They also rated American English higher on traits linked with power."}, " ", {t:"Keeping an accent means that a person can never work on a pronunciation problem.", flag:true, why:"A person can keep an accent and still change a feature that blocks understanding."}, "”"
    ]},
    {id:"e6u9-l3-x5", type:"number", q:"Labov’s Martha’s Vineyard study appeared in 1963. Bell published his study of New Zealand newsreaders in 1984. How many years were there between the two dates?", answer:21, tol:0, unit:"years", why:"1984 − 1963 = 21 years.", wrongs:[{v:11, tol:0, why:"This subtracts 10 too many. Check: 1963 + 21 = 1984."},{v:31, tol:0, why:"This adds 10 too many. Check: 1963 + 21 = 1984."}], hint2:"Subtract 1963 from 1984."},
    M("e6u9-l3-x6","Mariya Seto, a university student from Shiojima who studies English interpreting, is told by a friend, “You must lose your accent.” Which reply fits Lesson 3 best?",2,[
      ["“Yes. Everyone must sound like a reference accent.”","The lesson says that no single accent goal is required."],
      ["“No. An accent never affects understanding.”","Sometimes one feature does affect understanding, so this goes too far."],
      ["“My goal is to be easy to follow. I may work on one sound if it blocks understanding, and I can keep my accent.”","Right. It separates clear speech from a chosen accent."],
      ["“I will stop speaking English.”","This gives up, and nothing in the lesson supports it."]
    ]),
    M("e6u9-l3-x7","A friend says, “Because Singapore has a Speak Good English Movement, Singaporeans all dislike Singlish.” Which reply is the most accurate?",3,[
      ["“Yes. Surveys show that everyone agrees.”","The lesson reports no such survey, and attitudes differ."],
      ["“No. Singaporeans all love Singlish.”","This is also too broad."],
      ["“The movement began in 2000, and it has been criticized.”","This is true but incomplete. It does not answer the claim about everyone."],
      ["“Supporters and critics both have reasons, and many Singaporeans use both varieties.”","Right. Attitudes inside a community differ."]
    ]),
    M("e6u9-l3-x8","Which question is **not** one of the three that the lesson suggests for choosing a pronunciation goal?",0,[
      ["“What is the best accent in the world?”","Right. The lesson gives no best accent, and the questions are about listeners, features and identity."],
      ["“Who do I talk to, and what do they need from me?”","This is the first question."],
      ["“Which features, if any, make me hard to follow?”","This is the second question."],
      ["“How do I want to sound, and why?”","This is the third question."]
    ])
   ],
   apply:{
    intro:"These tasks use only your own notes. They are private, and nobody will check them.",
    tasks:[
     {t:"Map your own repertoire", how:[
       "Draw four boxes for four settings in your week, such as home, school or work, friends and an online group.",
       "Next to each box, write the language or style that you use there. Do not name real people.",
       "Write one sentence about a choice that you make on purpose, and why."
     ], write:"My four settings… my choices… one choice on purpose…"},
     {t:"Write your own goals for pronunciation", how:[
       "Answer the three questions of this lesson in two sentences each. Who do I talk to? Which features may make me hard to follow? How do I want to sound?",
       "Choose one small goal for the next month, such as one sound or one habit of stress. Keep it small.",
       "Write one sentence that you could say if someone tells you to “lose your accent”."
     ], write:"Who I talk to… features… how I want to sound… my small goal… my sentence…"}
    ],
    proof:"A drawing of four settings with a way of speaking in each. A short plan with three answers and one small goal. One polite reply to “lose your accent”."
   },
   read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”", note:"Read it after this lesson. It looks at how language and identity are linked."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u9-l4", title:"Native-speakerism and hiring", minutes:55,
   hook:{q:"A job ad for an English teacher says, “Native speakers only.” Which question is the most useful for deciding whether the requirement is fair?", options:["Which country is the school in?","What skills does the job need, and does the requirement actually measure them?","Is the ad written in a polite way?","How many people will read the ad?"], answer:1, reveal:"**What skills does the job need, and does the requirement measure them?** A label such as “native speaker” says how a person learned a language as a child. A job needs skills such as clear English, training and experience. This lesson looks at the idea, at the published evidence and at fairer wording."},
   goals:[
     "Explain why “native speaker” is a contested category",
     "Define native-speakerism (Holliday 2006) and the native-speaker fallacy (Phillipson 1992), without blaming individuals",
     "Describe what published studies of hiring and job ads in English teaching report, and what they cannot show",
     "Say what research says about native and non-native English-speaking teachers, with hedging",
     "Write fairer job requirements and read a hiring claim with care"
   ],
   learn:[
    {h:"Who is a “native speaker”?", body:[
      {lead:"The words sound simple, but no test can tell you who is a native speaker."},
      "In everyday use, a [[we-native-speaker|native speaker]] is a person who learned a language from early childhood as a first language. Linguists use the idea, and it is useful for some research questions. It is hard to define exactly. Alan Davies wrote a whole book on it, called *The Native Speaker: Myth and Reality* (2003). Linguists do not agree on an exact definition, and there is no agreed test that shows who is a native speaker.",
      "Three problems appear again and again. First, many children grow up with two or more first languages. Second, in outer-circle countries such as India or Nigeria, many people use English at home. Unit 1 explained that English is a first language for some of them and a second language for others ({{we-who-uses-english}}). Third, a person can be an expert user of a language without having learned it as a child. Rampton (1990) argued that the label mixes up three things. *Inheritance* means family and place of birth. *Expertise* means skill. *Affiliation* means how a person feels about the language and its community.",
      "Toby Whitlock, a master’s student from Australia, gives a simple example. He grew up in Tasmania with Australian English. He taught English at a country school in Japan for two years, and he now studies Japanese linguistics in a master’s program taught in Japanese. Japanese is not his first language, but he studies in it at graduate level. The label shows how a person learned a language. It does not show how well that person works with it.",
      {key:"“Native speaker” describes how a person learned a language. It is not a measure of skill, training or teaching ability."}
    ]},
    {h:"Native-speakerism", body:[
      {lead:"Native-speakerism is a belief system, and it is not the same as personal dislike."},
      "Adrian Holliday (2006) named [[we-native-speakerism|native-speakerism]] in an article in the *ELT Journal*. He describes it as a widespread ideology in English language teaching. In it, “native-speaker” teachers are seen as representing a “Western culture”, which is treated as the source of the ideals of the English language and of English teaching methods. The article also says that the ideology can lead people to describe students and colleagues from outside the West with fixed cultural pictures. An *ideology* is a set of ideas that people hold so widely that they often do not notice them. This means that a person can hold the belief without meaning any harm.",
      "A related idea comes from Robert Phillipson (1992). He called the belief that the ideal English teacher is a native speaker the *native-speaker fallacy*. A fallacy is a mistaken argument. His point is that being a native speaker does not make someone a better teacher. A teacher also needs training, knowledge about language and experience of how learners learn.",
      "Both authors are criticizing a belief. They are not saying that first-language users cannot teach well. Many do. The criticism is aimed at the step from a label to a conclusion about skill. In this way of speaking, a person is judged before anyone looks at the person’s work.",
      "The label also hides other things. In job advertising, “native speaker” can work as a code for nationality, passport or appearance. The title of a study of recruitment by Ruecker and Ives (2015), “White Native English Speakers Needed”, points to this problem. The lesson below describes what they and others found."
    ]},
    {h:"What research says about teachers", body:[
      {lead:"Studies of teaching do not support the idea that a first-language teacher is always better."},
      "Péter Medgyes (1992) asked in the *ELT Journal*, “Native or non-native: who’s worth more?” His answer was that the two groups have different strengths. A teacher who learned English as a second language can be a model of a successful learner. Such a teacher can teach learning strategies, predict learners’ difficulties, understand how learners feel, and may share their first language. A first-language teacher usually has a wider command of English. Both groups can teach well, and both groups can teach badly.",
      "Studies of students’ views give a mixed picture. In some studies, students tended to prefer first-language teachers, but they also saw advantages in second-language teachers, and many wanted to have both (Llurda 2009 summarizes several of these studies). Moussu and Llurda (2008) review this research in more detail. The research does not show that one group is always the better choice. Teaching quality depends on training, experience and care for learners.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">A label is not a list of skills</text><rect class="d-gold" x="14" y="34" width="140" height="150" rx="8" stroke-width="2"/><text x="84" y="58" text-anchor="middle">What the label says</text><text class="s" x="84" y="86" text-anchor="middle">How a first language</text><text class="s" x="84" y="104" text-anchor="middle">was learned as a child</text><rect class="d-sage" x="186" y="34" width="140" height="150" rx="8" stroke-width="2"/><text x="256" y="58" text-anchor="middle">What the job needs</text><text class="s" x="256" y="84" text-anchor="middle">Clear English</text><text class="s" x="256" y="104" text-anchor="middle">Teaching training</text><text class="s" x="256" y="124" text-anchor="middle">Knowing learners’</text><text class="s" x="256" y="140" text-anchor="middle">difficulties</text><text class="s" x="256" y="162" text-anchor="middle">Experience</text><path class="d-ink" d="M84 186L84 214L130 236" fill="none" stroke-width="2"/><path class="d-ink" d="M256 186L256 214L210 236" fill="none" stroke-width="2"/><rect class="d-rose" x="40" y="240" width="260" height="76" rx="8" stroke-width="2"/><text x="170" y="266" text-anchor="middle">Better evidence</text><text class="s" x="170" y="288" text-anchor="middle">Qualifications, a proficiency level,</text><text class="s" x="170" y="306" text-anchor="middle">experience, a sample lesson</text></svg>', alt:"Two boxes side by side. The left box, what the label says, reads: how a first language was learned as a child. The right box, what the job needs, lists clear English, teaching training, knowing learners’ difficulties and experience. Arrows from both lead to a box called better evidence: qualifications, a proficiency level, experience and a sample lesson.", cap:"A label tells you how a person learned a language. A job needs skills that can be checked directly."}
    ]},
    {h:"Published evidence on hiring", body:[
      {lead:"Several studies have looked at hiring in English teaching, with different methods."},
      "Researchers have used two main methods. The first is a survey of employers. Mahboob, Uhrig, Newman and Hartford (2004) surveyed the administrators of 122 intensive English programs at US universities. The administrators were divided about the native-speaker criterion. Programs that gave it more weight tended to employ fewer non-native teachers. Clark and Paran (2007) surveyed English teaching institutions in the United Kingdom. Of the 90 that answered, 72.3% said that being a native English speaker was moderately or very important in hiring.",
      "The second method is an analysis of job advertisements. Selvi (2010) studied job ads in English language teaching and found that many favored native speakers, often citizens of certain countries. Ruecker and Ives (2015) studied 59 websites that recruit teachers for language schools in five Asian countries. On these websites, the ideal teacher was overwhelmingly shown as a young, white, enthusiastic native speaker from a small set of inner-circle countries.",
      "Professional bodies have also responded. In March 2006, TESOL International Association, a professional association for English teachers, published a “Position Statement Against Discrimination of Nonnative Speakers of English in the Field of TESOL”. It says that all teachers should be judged by the same standards. English skill is one factor, and teaching skill, experience and training count as well. Houghton and Rivers (2013) edited a book of studies called *Native-Speakerism in Japan*.",
      {table:[["Method","What it can show","What it cannot show"],["Survey of employers","What employers say matters in hiring","Why a single person was or was not hired"],["Analysis of job ads","What ads ask for and how they describe the ideal applicant","What happens after the ad, or what employers decide"],["Interviews with teachers","How teachers experience hiring","How common the experience is everywhere"]]},
      "Fair readers also keep other facts in mind. In some countries, visa rules limit which passports can be used for teaching work. Some employers say that students or parents ask for native speakers, and this is a real market pressure. The studies above do not decide whether a particular employer is acting fairly. They show that the label is common in the field, and the research on teaching does not support the idea behind it. Laws against discrimination by national origin exist in many countries. How they apply to a “native speaker” requirement is a legal question that this course does not decide."
    ]},
    {h:"Fair wording and fair reading", body:[
      {lead:"A good requirement names a skill that can be checked."},
      {table:[["Requirement","Problem","Fairer wording"],["“Native speaker of English”","It is a label of origin, and it does not state a skill","“English at level C1 or higher, shown by a test or an interview”"],["“Must be from a named country”","It can be a code for passport or appearance. Visa rules may limit work in some places, and that can be stated openly","“Right to work in this country”"],["“Must sound like a native speaker”","It requires one accent, and clear speech does not need one","“Clear, well-organized speech that learners can follow”"],["“Experienced teacher”","Good, if it says what experience","“Two years of teaching teenagers”"]]},
      "The wordings in this table are invented examples for practice. They are not taken from any real advertisement. A fair requirement describes the work. It can be checked in an interview or a sample lesson, and it can be met by people from many places.",
      "Employers have reasons, and a fair reader listens to them. A school may feel pressure from customers. A teacher may bring valuable features, such as a certain accent as a model or knowledge of a culture. Naming a feature is better than assuming it from a label. Then people can ask whether a given person has the feature, and whether the job needs it.",
      "When you read a claim about hiring, ask four questions. Who was studied? What was measured? What does the result show? What does it not show? These questions work for any study in this course."
    ]}
   ],
   try:[
    M("e6u9-l4-x1","Which statement best describes the term “native speaker” in this lesson?",1,[
      ["A person who speaks English perfectly","The label does not measure skill. Some native speakers use language less well than skilled second-language users."],
      ["A person who learned a language from early childhood as a first language, though there is no agreed test for it","Right. It describes how a language was learned, and the category is debated."],
      ["A person born in an inner-circle country","Birthplace does not decide it. Many people in outer-circle countries also grow up with English."],
      ["A person with a teaching qualification","A qualification is a separate matter."]
    ]),
    {id:"e6u9-l4-x2", type:"match", q:"Match each author to the idea.", pairs:[
      ["Holliday (2006)","Native-speakerism as a widespread ideology in English teaching","It treats “native-speaker” teachers as carriers of the best English and methods."],
      ["Phillipson (1992)","The native-speaker fallacy","The belief that the ideal teacher is a native speaker."],
      ["Rampton (1990)","Inheritance, expertise and affiliation","He argued that “native speaker” mixes up these three."],
      ["Medgyes (1992)","Native and non-native teachers have different strengths","He asked who is worth more."]
    ]},
    {id:"e6u9-l4-x3", type:"sort", q:"Does the evidence in this lesson support each statement, or not?", buckets:["Supported by the lesson","Not supported"], items:[
      {t:"Some studies of job ads found that many ads ask for native speakers.", b:0, why:"Selvi (2010) found that many ads favored native speakers, and Ruecker and Ives (2015) found the same ideal on recruitment websites."},
      {t:"Research proves that first-language teachers are always better.", b:1, why:"The lesson says the research does not show this."},
      {t:"A survey of employers cannot tell us why one person was hired.", b:0, why:"The table says that a survey shows what employers say, and not individual decisions."},
      {t:"Native-speakerism means that every first-language teacher is unkind.", b:1, why:"It is an ideology and not a personal fault, and many first-language teachers teach well."},
      {t:"A label can say how a person learned a language, and it cannot say how well they teach.", b:0, why:"This is the main point of the lesson."},
      {t:"Visa rules can limit teaching jobs in some countries.", b:0, why:"The lesson says this is a fact that a fair reader keeps in mind."}
    ]},
    {id:"e6u9-l4-x4", type:"spot", q:"Here are lines from an invented job ad for practice. Tap each line that is a problem because it names a label of origin, and not a skill.", ask:"names a label of origin", parts:[
      "“", {t:"Native speaker of English required.", flag:true, why:"This names how a person learned a language, and it does not state a skill."}, " ", {t:"Teaching certificate or similar training.", flag:false, why:"Training is a skill that can be checked."}, " ", {t:"Must sound like a person from a named country.", flag:true, why:"It requires one accent. Clear speech does not need one."}, " ", {t:"English at level C1 or higher.", flag:false, why:"A level can be checked with a test or an interview."}, " ", {t:"Sample lesson in the interview.", flag:false, why:"A sample lesson shows teaching directly."}, " ", {t:"Applicants must look like a person from a named country.", flag:true, why:"Appearance is not a skill and it can lead to unfair treatment."}, "”"
    ]},
    {id:"e6u9-l4-x5", type:"order", q:"Put these questions in the order that helps a reader judge a hiring study.", items:[
      {t:"Who was studied? Employers, ads or teachers?", why:"Start with the sample, because it limits what the study can say."},
      {t:"What did the researchers measure?", why:"Then look at the method, such as a survey or a content analysis."},
      {t:"What does the result show?", why:"Now read the finding, in the author’s own words."},
      {t:"What does it not show?", why:"Last, name the limits, such as individual decisions or other places."}
    ]},
    {id:"e6u9-l4-x6", type:"number", q:"Phillipson named the native-speaker fallacy in 1992. Holliday named native-speakerism in 2006. How many years were there between the two dates?", answer:14, tol:0, unit:"years", why:"2006 − 1992 = 14 years.", wrongs:[{v:4, tol:0, why:"This subtracts 10 too many. Check: 1992 + 14 = 2006."},{v:24, tol:0, why:"This adds 10 too many. Check: 1992 + 14 = 2006."}], hint2:"Subtract 1992 from 2006."},
    M("e6u9-l4-x7","Toby Whitlock, a master’s student from Australia, taught English in Japan for two years. A classmate says to him, “You are from Australia, so you must be the best English teacher.” Which reply fits Lesson 4 best?",2,[
      ["“Yes. Native speakers are always best.”","The lesson says that research does not support this."],
      ["“No. Only people from Japan should teach English in Japan.”","This replaces one label of origin with another. It still says nothing about skill."],
      ["“The label says how I learned English. Good teaching comes from training and experience. And I study in Japanese, which is not my first language.”","Right. It separates the label from skill, with an honest example from his own life."],
      ["“Let us ask the students to vote on my accent.”","This asks for ratings of a real speaker, which the unit avoids."]
    ]),
    {id:"e6u9-l4-x8", type:"explain", q:"A language-school director says, “Parents ask for native speakers, so a native-speaker requirement is fair.” Write a short, fair answer that takes the reason seriously.", size:"3–5 sentences", prompt:"Parents’ wishes are real, and I would add that …", hint:"Think about what a label shows, what the research on teachers says, and a requirement that names skills.", points:["Accepts that the parents’ wish is a real pressure","Says that the label shows how a language was learned, and not how well someone teaches","Says that research does not show that native speakers are always better teachers","Suggests a requirement that names a skill, such as a language level or training"], model:"Parents’ wishes are real, and I would add that the label does not show teaching skill. It shows how a person learned a language as a child. Research does not show that first-language teachers are always better, and both groups have strengths. A fairer requirement names skills that can be checked, such as English at level C1, a teaching qualification and a sample lesson. The school can then explain these skills to parents."}
   ],
   apply:{
    intro:"These tasks use invented examples and two free web pages. Nothing needs an account.",
    tasks:[
     {t:"Rewrite requirements so that they name skills", how:[
       "Write four invented requirements for a teaching job. Make two of them labels of origin, for example “native speaker of English”.",
       "Rewrite each label as a skill that can be checked in an interview or a sample lesson.",
       "Do not copy wording from a real advertisement, and do not name any employer."
     ], write:"Invented requirement 1… fairer wording… requirement 2…"},
     {t:"Read Holliday’s definition", how:[
       "Open the first page of [Holliday (2006) in the ELT Journal](https://academic.oup.com/eltj/article/60/4/385/404751).",
       "Write his definition of native-speakerism in your own words, in two sentences.",
       "Write one sentence about why a person can hold the belief without meaning any harm."
     ], write:"My two-sentence definition… why a person can hold it without harm…"}
    ],
    proof:"Four invented requirements that name skills, and a definition of native-speakerism in your own words."
   },
   read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.6 “Linguistic law enforcement”", note:"Read it after this lesson. It looks at how language is used to judge and control people."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u9-l5", title:"Power, language rights and fair listening", minutes:55,
   hook:{q:"People say that English can be both a door and a gate. What does the gate image mean?", options:["English is hard to spell","Skill in English can decide who gets study, work or a hearing, so people who lack it may be kept out","English has a gate-shaped alphabet","Gates are a symbol of English-speaking countries"], answer:1, reveal:"**Skill in English can decide who gets in.** When a school, a job or a meeting asks for English, people with strong English can pass through, and people without it may be kept out. English can also be a door that opens many chances. This lesson looks at both, and at a well-known debate about power."},
   goals:[
     "Describe English as an opportunity and as a gate, with a careful example",
     "Explain Phillipson’s (1992) argument about linguistic imperialism, including the five fallacies",
     "Give both sides of the debate: critics such as Davies and Bisong, and scholars such as Pennycook and Canagarajah",
     "Describe language rights and the tension between home languages and English",
     "Say what fair listening looks like for individuals and institutions"
   ],
   learn:[
    {h:"A door and a gate", body:[
      {lead:"For many people, English opens a door. For some people, it is also a gate."},
      "English is a [[we-lingua-franca|lingua franca]] for science, business, travel and the internet (Unit 2). A person who uses English can read more, study in more places, talk with more people and apply for more jobs. This is the *door*: English gives access to chances.",
      "The same fact can work as a [[we-gatekeeper|gate]]. A gatekeeper is a person or rule that decides who may enter. Schools may ask for an English test score. Jobs may ask for English even where the daily work is done in another language. Lessons and tests cost money and time, and good teaching is not equally easy to find everywhere. When English is a condition for a chance, a person without it may be kept out, even if the person has other strong skills. Researchers who write about language and inequality, such as Tollefson (1991), study how language policy can sort people in this way.",
      "Cheska Ibabao, a master’s student from the Philippines, shows the door side. She came to Japan on a scholarship for a master’s program taught in English, so her English opened the way to study. For her, English is one language in a larger repertoire, and Unit 5 explained that it has been a language of school in the Philippines for a long time. Cheska wants to help make towns in the Philippines safer. In that work, she may use English for research and reports, and other Philippine languages when she talks with people in the towns. A fair view of her situation includes both: English opened a door, and her other languages are also valuable.",
      {key:"English is a door for many people and a gate for some. Both statements can be true in the same place."}
    ]},
    {h:"Linguistic imperialism: Phillipson (1992)", body:[
      {lead:"Robert Phillipson argued that the spread of English is linked with unequal power."},
      "In his book *Linguistic Imperialism* (1992), Phillipson defined [[we-linguistic-imperialism|English linguistic imperialism]]. In his view, the dominance of English is kept in place by structural and cultural inequalities between English and other languages. *Structural* means in institutions, such as laws, schools and budgets. *Cultural* means in beliefs, such as the belief that English is more modern or more useful.",
      "He also used the word [[we-linguicism|linguicism]], which was coined by Tove Skutnabb-Kangas. It means unequal treatment of people on the basis of language, as racism does on the basis of race. For teaching, he listed five beliefs that he called fallacies.",
      {table:[["Phillipson’s fallacy","The belief he criticized"],["Monolingual","English is best taught with no other language in the room"],["Native-speaker","The ideal teacher is a native speaker"],["Early-start","The earlier English starts, the better the results"],["Maximum-exposure","The more English is taught, the better the results"],["Subtractive","Using other languages lowers English standards"]]},
      "These five ideas shaped debates in English teaching for decades. Lesson 4 looked at the native-speaker fallacy. Unit 10 returns to the others when it looks at teaching."
    ]},
    {h:"The debate: structure and choice", body:[
      {lead:"Scholars agree that power matters, and they disagree about how to describe it."},
      "Phillipson’s work is widely discussed, and it has critics. Fair accounts give both sides.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">A debate with two emphases</text><rect class="d-soft" x="14" y="32" width="312" height="26" rx="13" stroke-width="2"/><text class="s" x="92" y="49" text-anchor="middle">More weight on structure</text><text class="s" x="252" y="49" text-anchor="middle">More weight on choice</text><rect class="d-lup" x="14" y="72" width="170" height="68" rx="8" stroke-width="2"/><text x="99" y="96" text-anchor="middle">Phillipson (1992)</text><text class="s" x="99" y="116" text-anchor="middle">Inequality between languages</text><text class="s" x="99" y="130" text-anchor="middle">keeps English dominant</text><rect class="d-sage" x="90" y="154" width="170" height="68" rx="8" stroke-width="2"/><text x="175" y="178" text-anchor="middle">Pennycook, Canagarajah</text><text class="s" x="175" y="198" text-anchor="middle">Power matters, and speakers</text><text class="s" x="175" y="212" text-anchor="middle">use English in their own ways</text><rect class="d-gold" x="156" y="236" width="170" height="80" rx="8" stroke-width="2"/><text x="241" y="258" text-anchor="middle">Davies, Bisong, others</text><text class="s" x="241" y="278" text-anchor="middle">The claim is hard to test, or</text><text class="s" x="241" y="292" text-anchor="middle">people choose English for</text><text class="s" x="241" y="306" text-anchor="middle">practical reasons</text></svg>', alt:"A bar at the top runs from more weight on structure on the left to more weight on choice on the right. Phillipson (1992) is at the left, Pennycook and Canagarajah are in the middle, and Davies, Bisong and others are at the right.", cap:"The positions are simplified. Many scholars hold parts of more than one view."},
      "Critics have raised several points. Alan Davies argued that parts of the claim are hard to test. If any group that wants English can be said to be persuaded against its own interest, no evidence could count against the claim. Joseph Bisong, writing about Nigeria, argued that people use English for practical reasons. For example, many parents send their children to English-medium schools so that the children grow up multilingual. Henry Widdowson argued that a language cannot itself control people. Some scholars, including Bernard Spolsky, suggest that English spread more as a result of colonization and globalization than of deliberate language policy. Janina Brutt-Griffler’s book *World English* (2002) argues that people in colonized countries were active agents: they took up English for their own purposes, including resistance to colonial rule. She still agrees with Phillipson on some points about the English teaching profession.",
      "Other scholars take Phillipson’s concern seriously and add to it. Alastair Pennycook (1994) argued that English is not a neutral language, because it is tied to culture and politics. Suresh Canagarajah (1999) studied teachers and students in formerly colonized communities. He described the creative ways in which they used English for their own needs and resisted its dominance.",
      "A balanced reader can hold three ideas at once. History and power shaped how English spread. Speakers make real choices and often gain from English. Different people in the same place can feel both."
    ]},
    {h:"Language rights", body:[
      {lead:"Language rights ask what people should be free to do in their own languages."},
      "The idea of [[we-language-rights|language rights]] is that people should be able to use their own language in important parts of life, such as school, courts and public services. Scholars such as Skutnabb-Kangas and Phillipson use the term *linguistic human rights*. International texts touch on the subject. In 1992, the UN General Assembly adopted a declaration on the rights of persons belonging to national or ethnic, religious and linguistic minorities. It includes a right to use one’s own language in private and in public. The Universal Declaration of Linguistic Rights was signed in Barcelona in 1996 by PEN International and many nongovernmental organizations, at a conference that also included language experts. It was presented to UNESCO, but UNESCO did not adopt it, and it is not a treaty. Read the exact texts before you quote them.",
      "Rights meet practical choices. Many parents choose English-medium schools because they hope for opportunity. This is a real, personal decision. Communities that want to keep a home language also have real reasons. Earlier units described the research on the language of instruction as limited and mixed ({{we-creole-status-school}}). They also described models of schooling that use both home languages and English, such as [[we-mtb-mle|mother-tongue-based multilingual education]]. Language shift has many causes (Unit 2), and English is only one of them.",
      "A fair position respects the family’s choice, and also respects the community’s wish to keep its language. It avoids two shortcuts: treating English as the enemy of other languages, and treating other languages as a problem for English."
    ]},
    {h:"What fair listening looks like", body:[
      {lead:"Fairness is a set of habits, and it works at the level of persons and of institutions."},
      {table:[["Who","Habit","Example"],["A listener","Describe before you judge, and check understanding","“I missed the last part. Could you say it again?”"],["A speaker","Help the listener with simple moves","Spell a name, give an example, slow down for a key word"],["A teacher or trainer","Use many varieties in listening practice","Include speakers from outer-circle and expanding-circle places"],["An employer or school","Name skills and check them directly","A language level, a sample task, a clear scoring guide"],["A test writer","Test what the task needs","Do not require one accent when clarity is the goal"]]},
      "Earlier units gave the tools. Unit 1 asked for intelligibility with respect. Unit 3 gave a careful method for listening to accents. Unit 8 taught accommodation and the Lingua Franca Core. This unit added the research on attitudes, the evidence about bias, and the questions about hiring and power. Together they say that understanding takes two people, and that every variety is a full system.",
      "Unit 10 turns to teaching. It asks which English to teach, how to teach pronunciation for understanding, and how to give feedback without “correcting” someone’s variety.",
      {key:"Fair listening means describing before judging, naming skills instead of labels, and sharing the work of understanding. Every variety is a full system, and no accent is a measure of a person."}
    ]}
   ],
   try:[
    M("e6u9-l5-x1","What is a gatekeeper, in the sense used in this lesson?",2,[
      ["A person who protects a building","This is a different, everyday meaning of the word."],
      ["A language teacher who is strict","Strictness is not the point."],
      ["A person, test or rule that decides who may enter a school, job or discussion","Right. English skill can act as a gate."],
      ["A word that begins a sentence","This is not a meaning used here."]
    ]),
    {id:"e6u9-l5-x2", type:"match", q:"Match each scholar to the position described in this lesson.", pairs:[
      ["Phillipson (1992)","English dominance is kept in place by structural and cultural inequality","He called this linguistic imperialism."],
      ["Davies","Parts of the claim are hard to test","Any group that wants English could be said to be persuaded against its interest."],
      ["Bisong","People often choose English for practical reasons","He wrote about Nigeria."],
      ["Canagarajah (1999)","Learners and teachers can resist and reshape English","He described creative strategies of teachers and students in formerly colonized communities."],
      ["Brutt-Griffler (2002)","People in colonized countries took up English for their own purposes","She stresses them as active agents."]
    ]},
    {id:"e6u9-l5-x3", type:"sort", q:"Is each statement closer to Phillipson’s emphasis, or to the emphasis of critics who stress speaker choice?", buckets:["Stresses structure and inequality","Stresses choice and practical use"], items:[
      {t:"Laws, schools and budgets can keep English dominant.", b:0, why:"This is an argument about structures."},
      {t:"Many families choose English-medium schools for practical reasons.", b:1, why:"This stresses a real choice and its reasons."},
      {t:"Beliefs that English is more modern can keep other languages down.", b:0, why:"This is a cultural inequality, as Phillipson describes it."},
      {t:"People who use English are not all victims.", b:1, why:"This is Bisong’s kind of point."},
      {t:"Language inequality works like other kinds of unequal treatment, and it has a name: linguicism.", b:0, why:"This is Phillipson and Skutnabb-Kangas’s idea."}
    ]},
    {id:"e6u9-l5-x4", type:"order", q:"Put these steps in the order that helps you form a fair view of a debate.", items:[
      {t:"State each side in its strongest and fairest form", why:"A fair view starts by understanding each side as its supporters would."},
      {t:"Check what evidence each side gives", why:"Evidence decides which claims you can trust."},
      {t:"Note where the sides agree", why:"Agreement, such as that power matters, is often larger than it first looks."},
      {t:"Say what is still unknown, and then give your view with that limit", why:"A careful view is honest about what the evidence cannot show."}
    ]},
    {id:"e6u9-l5-x5", type:"spot", q:"A student wrote these notes after Lesson 5. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Phillipson’s five fallacies include the belief that the ideal teacher is a native speaker.", flag:false, why:"Correct. It is called the native-speaker fallacy."}, " ", {t:"Everyone agrees with Phillipson completely.", flag:true, why:"Critics such as Davies and Bisong disagree with parts of the argument."}, " ", {t:"English can be a door and a gate at the same time.", flag:false, why:"Correct. Both can be true in the same place."}, " ", {t:"The 1996 Barcelona declaration on linguistic rights is a treaty that binds every country.", flag:true, why:"It was signed by PEN International and nongovernmental organizations. UNESCO did not adopt it, and it is not a treaty."}, " ", {t:"Language shift has only one cause, which is English.", flag:true, why:"Language shift has many causes, and English is only one of them."}, " ", {t:"A fair position respects family choices and community wishes.", flag:false, why:"Correct. It avoids both shortcuts."}, "”"
    ]},
    {id:"e6u9-l5-x6", type:"number", q:"Phillipson’s *Linguistic Imperialism* appeared in 1992. Brutt-Griffler’s *World English* appeared in 2002. How many years were there between the two books?", answer:10, tol:0, unit:"years", why:"2002 − 1992 = 10 years.", wrongs:[{v:20, tol:0, why:"This adds 10 too many. Check: 1992 + 10 = 2002."},{v:8, tol:0, why:"This is a counting slip. Check: 1992 + 10 = 2002."}], hint2:"Subtract 1992 from 2002."},
    M("e6u9-l5-x7","Cheska Ibabao, a master’s student from the Philippines, says, “English opened a door for me, but I know it is a gate for other people.” Which comment fits Lesson 5 best?",1,[
      ["“You are wrong. English cannot be a gate.”","The lesson says that both can be true."],
      ["“Both can be true. English gave you access, and it can also keep out people who lack it.”","Right. It accepts the door and the gate together."],
      ["“Only people with other languages are kept out.”","This invents a claim that the lesson does not make."],
      ["“You should stop using your other languages.”","The lesson values the whole repertoire."]
    ]),
    {id:"e6u9-l5-x8", type:"explain", q:"A friend asks, “Is the spread of English a form of imperialism, yes or no?” Write a short answer that presents both sides and does not force a yes or no.", size:"4–6 sentences", prompt:"Scholars disagree, and the two main positions are …", hint:"Use Phillipson’s argument, one or two critics, and the middle view that power matters and speakers also make choices.", points:["States Phillipson’s argument: structural and cultural inequality keeps English dominant","States at least one criticism, such as that it is hard to test or that people choose English for practical reasons","Says that many scholars accept that power matters and that speakers make real choices","Does not insult either side and does not claim certainty"], model:"Scholars disagree, and the two main positions are these. Phillipson (1992) argued that structural and cultural inequalities between English and other languages keep English dominant. Critics such as Davies and Bisong reply that the claim is hard to test and that people often choose English for practical reasons. Other scholars, such as Pennycook and Canagarajah, say that power matters, and that speakers also use English in their own ways. A fair answer says that history and power shaped the spread of English, and that people make real choices inside that history."}
   ],
   apply:{
    intro:"These tasks use your own notes. Nothing needs an account, and nobody will check them.",
    tasks:[
     {t:"Write a fair two-sided summary", how:[
       "Write about 120 words about the debate on linguistic imperialism.",
       "Give Phillipson’s main argument, one criticism, and one view that adds to his argument.",
       "Check your text for words that judge a side, such as *silly* or *obvious*, and change any that you find."
     ], write:"Phillipson argued… one criticism… another view…"},
     {t:"Think about a door and a gate", how:[
       "Write about a time when English opened a door for you or for someone you know, without using a real name.",
       "Write about a time when English or a test acted as a gate, or when you can imagine it doing so.",
       "Write one sentence about what a fairer rule could have been."
     ], write:"A door… a gate… a fairer rule…"}
    ],
    proof:"A fair summary of about 120 words with no judging words, and a short note about one door, one gate and one fairer rule."
   },
   read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.7 “Legally enshrined harms”", note:"Read it after this lesson. It looks at how laws and rules can treat language groups unequally."}
   ]
  }
  ],
  checkpoint:["e6u9-q03","e6u9-q08","e6u9-q12","e6u9-q17","e6u9-q21","e6u9-q26","e6u9-q30","e6u9-q35","e6u9-q38","e6u9-q41","e6u9-q44","e6u9-q45"],
  codex:[
   {id:"we-language-attitudes", title:"Language attitudes and the matched-guise technique", aka:["accent attitudes","status and solidarity","covert prestige"], tags:["world englishes","attitudes"],
    summary:"A language attitude is a listener’s feeling about a variety. The matched-guise technique uses one speaker in two guises to measure it. Ratings show listener attitudes and not speaker ability.",
    levels:{
     starter:[
      "A **language attitude** is a feeling or opinion that a person holds about a language, a variety or an accent. It belongs to the listener, and it is learned from family, school, media and a society’s ideas about groups of people.",
      "In 1960, Lambert and colleagues in Montreal published the **matched-guise technique**. A bilingual speaker reads the same text in two languages, and listeners rate each recording without knowing that it is the same person. A difference in the ratings points to attitudes.",
      "A rating of an accent says nothing about whether the speaker is intelligent or skilled.",
      {key:"Attitude research measures listeners, and it cannot measure a speaker’s ability."}
     ],
     builder:[
      "Studies of attitudes often find two groups of traits. **Status** traits include *intelligent*, *educated* and *successful*. **Solidarity** traits include *friendly*, *trustworthy* and *one of us*. The two scales can differ for the same accent. In Coupland and Bishop’s (2007) survey, more than 5,000 people in the UK rated the names of 34 accents for prestige and for pleasantness. Standard accents came near the top on both scales, but the order of the accents was not the same on the two.",
      "**Overt prestige** is open praise for a form, often the standard. **Covert prestige** is the hidden value of a local form inside a group, as a sign of loyalty. Trudgill (1972) described the pattern in Norwich, and Labov’s department-store study (1966) shows a related social meaning of sounds in New York.",
      "In the Montreal study, French-speaking listeners, like English-speaking listeners, rated the English guises more favorably, though they rated the French guises higher on some traits, such as kindness. The researchers linked this to the higher social and economic position of English speakers in Montreal at the time. The study used a small set of recordings and listeners in one city at one time. Later studies used the method for accents inside one language."
     ],
     pro:[
      "The matched-guise technique has been used and criticized since 1960. A common concern is that a reading may sound unnatural, and that a bilingual’s two guises may not be equally natural. Researchers also use *verbal-guise* studies, which use different speakers for each variety. These give up the control over the voice, and they add real differences between speakers.",
      "Attitude studies measure what listeners say, and this can differ from what they would do. For example, direct questions often get polite answers, which is why indirect methods were built.",
      "Giles (1970) is an early example of work on British accents. Coupland and Bishop (2007) is a large survey of accent evaluations. Its informants rated accent names, not recordings, so it measures ideas about accents (labels) more than reactions to voices.",
      "Cross-link: Unit 1 of How English Works (accent bias) and Units 1, 3 and 8 of this course (intelligibility and listening)."
     ]},
    related:["we-standardization-ideology","we-accent-and-understanding","we-accent-and-identity"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”"}],
    sources:[{t:"Matched-guise test (Wikipedia)", url:"https://en.wikipedia.org/wiki/Matched-guise_test"},{t:"Covert prestige (Wikipedia)", url:"https://en.wikipedia.org/wiki/Covert_prestige"},{t:"Essentials of Linguistics, 2nd edition (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}],
    checked:"2026-11"},
   {id:"we-standardization-ideology", title:"Standard language ideology and language subordination", aka:["standardization","complaint tradition","accent discrimination"], tags:["world englishes","attitudes","power"],
    summary:"Standard language ideology is the belief that one variety is correct and neutral and that others are lesser. Milroy and Milroy and Lippi-Green explain how it works.",
    levels:{
     starter:[
      "A **standard variety** is the form used in school, law, news and publishing. It does real work, because it gives a shared written form. The **standard language ideology** is an extra belief: that this variety is the correct and neutral one, and that other varieties are lesser.",
      "James and Lesley Milroy (*Authority in Language*, first published in 1985) describe how institutions fix a standard. Rosina Lippi-Green (*English with an Accent*, 1997, second edition 2012) describes how the belief is used to treat speakers unequally.",
      "Linguists do not say that standards are bad. They say that a standard is not more logical, and that a speaker’s variety is not a measure of ability.",
      {key:"A standard is a useful tool. The ideology is the belief that people who use other varieties are less able."}
     ],
     builder:[
      "The Milroys describe standardization as a process. Institutions such as schools, publishers and dictionaries choose a form and treat it as the right one. They also describe the **complaint tradition**: repeated public complaints that standards are falling. They argue that no speaker uses a perfectly fixed standard, so the standard works more as an idea than as a real way of talking.",
      "Lippi-Green defines standard language ideology as a bias toward an idealized, uniform spoken language, kept in place by powerful institutions. She describes **language subordination**, a process by which a society tells some speakers that their speech is inferior. She argues that judging people by accent can be a socially accepted way of treating them unequally.",
      "Earlier course units explained that standard English is a social choice and not a more logical English ({{standard-english-explained}})."
     ],
     pro:[
      "James Milroy’s later work (for example, Milroy 2001, in the *Journal of Sociolinguistics*) developed the idea of language ideologies and the consequences of standardization. Check that article for the exact claims.",
      "Lippi-Green’s book is written about the United States, and its examples come from school, media, law and the workplace. Other countries have different histories of standardization, so readers should not assume that every claim carries over.",
      "A useful distinction: the *standard* as a set of forms used in writing and formal speech, the *standard language ideology* as the belief that it is better, and *discrimination*, which is treating people unequally because of how they speak. Each can be discussed on its own.",
      "Cross-link: Unit 1 of How English Works (standard English) and Lesson 1 of this unit."
     ]},
    related:["we-language-attitudes","we-native-speakerism-hiring","we-linguistic-imperialism-debate"],
    read:[{book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”"}],
    sources:[{t:"Linguistic discrimination (Wikipedia)", url:"https://en.wikipedia.org/wiki/Linguistic_discrimination"},{t:"Essentials of Linguistics, 2nd edition (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}],
    checked:"2026-11"},
   {id:"we-accent-and-understanding", title:"Accent, intelligibility and bias in listening", aka:["comprehensibility","accentedness","reverse linguistic stereotyping"], tags:["world englishes","attitudes","listening"],
    summary:"Accentedness, comprehensibility and intelligibility are related but separate. Listener expectations can change what listeners report, as in Rubin’s (1992) photo study.",
    levels:{
     starter:[
      "**Accentedness** is how different a voice sounds from the accent that a listener expects. **Comprehensibility** is how hard or easy the listener says it is to understand. **Intelligibility** is how much the listener actually understood.",
      "Munro and Derwing (1995) recorded learners of English whose first language was Mandarin. Native English listeners rated the speech and wrote down what they heard. Some speech that was rated as strongly accented was still highly intelligible.",
      "Rubin (1992) is a well-known study of expectation. As later summaries describe it, students heard the same recording with different photos of the “instructor”, and their reports changed.",
      {key:"A strong accent does not always mean poor understanding, and expectations change what listeners report."}
     ],
     builder:[
      "Accentedness and comprehensibility are usually measured with rating scales. Intelligibility is usually measured with a transcription or a test of the message. Munro and Derwing found that the three measures were related but partly independent: speech can be strongly accented and still highly intelligible.",
      "Kang and Rubin (2009) call this effect **reverse linguistic stereotyping**: a listener’s expectation about a speaker’s group changes how the listener judges the speech. In Lindemann’s (2002) map-task study, listeners’ attitudes toward Koreans were linked with how successful they felt a conversation with a Korean speaker of English was, and with some listeners’ use of unhelpful strategies such as avoidance.",
      "Real difficulties exist, such as noise, speed and unknown words. A fair listener finds out what the difficulty is, and asks the speaker for a repeat or another wording. In Derwing, Rossiter and Munro’s (2002) eight-week study with social work students, trained listeners became more confident, although their listening test scores did not differ from those of the untrained group."
     ],
     pro:[
      "Terminology differs between authors. Smith and Nelson (1985) use *intelligibility* for recognizing words, *comprehensibility* for understanding meaning and *interpretability* for understanding the speaker’s purpose. Munro and Derwing use *intelligibility* for the amount actually understood. Check how an author defines a word before comparing studies.",
      "Rubin’s (1992) abstract says that Study 1 tested whether the instructor’s ethnicity affects evaluations even when the English is completely standard. The abstract does not give the sample size or the test scores, so read the article for the numbers.",
      "Later work on accent perception has looked at how facial features and other cues affect perception of accent. Treat each study as one study, and look for several studies that point the same way.",
      "Cross-link: Unit 1, Lesson 5 (intelligibility and respect) and Unit 8 (accommodation and the Lingua Franca Core)."
     ]},
    related:["we-language-attitudes","we-intelligibility-respect","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”"}],
    sources:[{t:"Rubin (1992), Research in Higher Education: publisher page with abstract", url:"https://doi.org/10.1007/BF00973770"},{t:"Linguistic discrimination (Wikipedia)", url:"https://en.wikipedia.org/wiki/Linguistic_discrimination"}],
    checked:"2026-11"},
   {id:"we-accent-and-identity", title:"Accent, style and identity", aka:["audience design","repertoire","Martha’s Vineyard"], tags:["world englishes","identity"],
    summary:"Accents and varieties carry identity. Speakers choose among ways of speaking for different audiences, and the choice is a skill.",
    levels:{
     starter:[
      "A way of speaking can show who we are and where we belong. Labov (1963) found that on Martha’s Vineyard, a vowel pattern was strongest among islanders who felt loyal to the island and planned to stay.",
      "Speakers also shape their speech for their listeners. Bell (1984) called this *audience design*. A person who speaks one way at home and another way at work is using a repertoire.",
      "No accent goal is required. A learner can keep an accent and still work on one feature that blocks understanding.",
      {key:"Respect means that nobody must hide their accent, and nobody must keep it."}
     ],
     builder:[
      "Local Englishes can be part of identity. Singapore’s Colloquial English, Jamaican Creole and Philippine Taglish are described in earlier units. Attitudes inside each community differ, and many speakers use both a local variety and a standard.",
      "Studies of Japanese students show status and solidarity pulling apart. In McKenzie (2008), 558 university students rated UK and US speakers highest for status but felt more solidarity with a strongly Japanese-accented speaker. In Sasayama (2013), college students rated American English higher on power and preferred Japanese speakers’ English on solidarity, and many wanted it accepted internationally.",
      "A learner can ask three questions: who do I talk to, which features make me hard to follow, and how do I want to sound?"
     ],
     pro:[
      "Labov’s (1963) study is a classic of variationist sociolinguistics. It links a linguistic variable to social attitudes, and it is one of the models for later work on style and identity.",
      "Bell’s (1984) audience design is one of several models of style. Other models stress attention to speech or the speaker’s own identity work. Check how each model explains the same data.",
      "Claims about what speakers in one place prefer should be checked against the sample. A survey of students at one university does not describe a country.",
      "Cross-link: Unit 5 (Singapore and the Philippines), Unit 6 (Jamaica), Unit 7 (creoles) and Unit 8 (English in Japan)."
     ]},
    related:["we-language-attitudes","we-native-speakerism-hiring"],
    read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”"}],
    sources:[{t:"Covert prestige (Wikipedia)", url:"https://en.wikipedia.org/wiki/Covert_prestige"},{t:"Essentials of Linguistics, 2nd edition (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}],
    checked:"2026-11"},
   {id:"we-native-speakerism-hiring", title:"Native-speakerism and hiring in English teaching", aka:["native-speaker fallacy","NNEST","job ads"], tags:["world englishes","teaching","power"],
    summary:"Native-speakerism is the belief that native-speaker teachers are the best carriers of English and of teaching methods. Published studies report that the label is common in hiring.",
    levels:{
     starter:[
      "A **native speaker** is, in everyday use, a person who learned a language from early childhood as a first language. There is no agreed test for it, and the category is debated.",
      "Holliday (2006) named **native-speakerism** in the *ELT Journal*. He describes a widespread ideology in English teaching in which “native-speaker” teachers are seen as carriers of the best English and teaching methods. Phillipson (1992) called the belief that the ideal teacher is a native speaker the *native-speaker fallacy*.",
      "A label shows how a person learned a language. It does not show skill, training or teaching ability.",
      {key:"A fair requirement names a skill that can be checked."}
     ],
     builder:[
      "Rampton (1990) argued that “native speaker” mixes up inheritance, expertise and affiliation. Davies (2003) wrote a book on the idea, *The Native Speaker: Myth and Reality*. Medgyes (1992) argued that native and non-native teachers have different strengths.",
      "Studies of hiring use surveys and analyses of job ads. Mahboob, Uhrig, Newman and Hartford (2004) surveyed administrators of 122 US university intensive English programs: programs that gave more weight to the native-speaker criterion tended to employ fewer non-native teachers. In Clark and Paran’s (2007) UK survey, 72.3% of the 90 institutions that answered said the criterion was moderately or very important. Selvi (2010) found that many job ads favored native speakers. Ruecker and Ives (2015) analyzed 59 recruitment websites for language schools in five Asian countries, where the ideal teacher was overwhelmingly shown as young, white and a native speaker.",
      "Fair readers keep other facts in mind, such as visa rules and market pressure from students or parents. Surveys and ads cannot show why one person was hired."
     ],
     pro:[
      "Holliday (2006) is a short article. It describes native-speakerism as an ideology with an effect of “othering”, and it argues that the effect is often hidden by the profession’s liberal image. Read the article for the exact argument.",
      "Studies of students’ attitudes to native and non-native teachers give mixed results (see the review by Moussu and Llurda 2008). TESOL International Association’s 2006 position statement opposes discrimination against non-native teachers and says that all teachers should be judged by the same standards. Houghton and Rivers (2013) is an edited book on native-speakerism in Japan.",
      "Legal questions differ by country. Laws against discrimination on the basis of national origin exist in many places, and how they apply to a “native speaker” requirement is a question for lawyers and courts.",
      "Cross-link: Lesson 4 of this unit, Unit 1 (who uses English) and Unit 10 (teaching across Englishes)."
     ]},
    related:["we-standardization-ideology","we-accent-and-identity","we-linguistic-imperialism-debate"],
    read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.6 “Linguistic law enforcement”"}],
    sources:[{t:"Native-speakerism, Holliday (2006), ELT Journal 60(4)", url:"https://academic.oup.com/eltj/article/60/4/385/404751"},{t:"Native-speakerism (Wikipedia)", url:"https://en.wikipedia.org/wiki/Native-speakerism"},{t:"TESOL Position Statement Against Discrimination of Nonnative Speakers of English in the Field of TESOL (March 2006, PDF)", url:"https://TESOL.ORG/media/d2gfeisk/position-statement-against-nnest-discrimination-march-2006-1.pdf"}],
    checked:"2026-11"},
   {id:"we-linguistic-imperialism-debate", title:"Linguistic imperialism and its critics", aka:["Phillipson","linguicism","five fallacies"], tags:["world englishes","power"],
    summary:"Phillipson (1992) argued that English dominance is kept in place by structural and cultural inequalities. Critics and supporters add different points. A fair view gives both.",
    levels:{
     starter:[
      "Robert Phillipson’s book *Linguistic Imperialism* (1992) argues that the dominance of English is kept in place by structural and cultural inequalities between English and other languages.",
      "Critics reply that parts of the claim are hard to test, and that people often choose English for practical reasons. Other scholars add that power matters and that speakers use English in their own ways.",
      "Scholars agree that history and power shaped how English spread. They disagree about how to describe it.",
      {key:"A fair summary gives each side in its strongest form, and says what is still unknown."}
     ],
     builder:[
      "Phillipson listed five fallacies in English teaching: monolingual, native-speaker, early-start, maximum-exposure and subtractive. He also used *linguicism*, a word of Skutnabb-Kangas, for unequal treatment based on language.",
      "Critics include Davies (the claim is hard to test), Bisong (people choose English for practical reasons, with Nigeria as his example), Widdowson (a language cannot itself control people), Spolsky (spread as a result of colonization and globalization more than of policy) and Brutt-Griffler (2002; colonized people were active agents who took up English for their own purposes). Pennycook (1994) and Canagarajah (1999) take the concern seriously and stress how speakers use and resist English.",
      "The summary of critics here follows a general reference page, so read the original works before quoting any critic."
     ],
     pro:[
      "Debates like this use different kinds of evidence: history of policy, classroom studies, interviews and surveys. A claim about structure is hard to test with a survey of individual choices, and a claim about choice is hard to test with an analysis of policy. Ask which kind of evidence supports each claim.",
      "Language rights texts touch on related questions. The 1992 United Nations declaration on minorities includes a right to use one’s own language. The Barcelona Universal Declaration of Linguistic Rights (1996) was signed by PEN International and nongovernmental organizations. UNESCO did not adopt it, and it is not a treaty. Read the exact wording before quoting either.",
      "Cross-link: Unit 2 (spread of English, language shift), Unit 6 (language in education) and Unit 7 (creoles in school)."
     ]},
    related:["we-language-rights-and-english","we-native-speakerism-hiring","we-standardization-ideology"],
    read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.7 “Legally enshrined harms”"}],
    sources:[{t:"Linguistic imperialism (Wikipedia)", url:"https://en.wikipedia.org/wiki/Linguistic_imperialism"},{t:"Linguistic discrimination (Wikipedia)", url:"https://en.wikipedia.org/wiki/Linguistic_discrimination"}],
    checked:"2026-11"},
   {id:"we-language-rights-and-english", title:"English as a door and a gate: opportunity, rights and fair listening", aka:["gatekeeping","linguistic human rights","fair listening"], tags:["world englishes","power","fairness"],
    summary:"English opens doors for many people and acts as a gate for some. Language rights ask what people may do in their own languages, and fair listening works at the level of persons and institutions.",
    levels:{
     starter:[
      "English is a door for many people: it gives access to study, work and information. It can also be a **gate**, when a school, a job or a meeting asks for English and keeps out people who lack it.",
      "**Language rights** are the idea that people should be able to use their own language in important parts of life, such as school, courts and public services.",
      "Fair listening means describing before judging, naming skills instead of labels, and sharing the work of understanding.",
      {key:"English can be a door and a gate in the same place. Both can be true."}
     ],
     builder:[
      "Researchers such as Tollefson (1991) study how language policy can sort people. When English is a condition for a chance, people with other strong skills may be kept out.",
      "The UN General Assembly adopted a declaration on the rights of persons belonging to national or ethnic, religious and linguistic minorities on 18 December 1992. Article 2 includes the right of members of minorities to use their own language in private and in public. The Universal Declaration of Linguistic Rights (Barcelona, 1996) was signed by PEN International and nongovernmental organizations. It was presented to UNESCO, but UNESCO did not adopt it, and it is not a treaty.",
      "Rights meet practical choices. Many parents choose English-medium schools, and many communities want to keep a home language. A fair position respects both."
     ],
     pro:[
      "Evidence on the language of instruction is limited and mixed, and it depends on setting. Earlier units described models that use home languages and English together. Be careful with strong claims in either direction.",
      "Institutions can reduce gatekeeping by stating the language skill that a task needs, testing that skill, and not requiring one accent when clarity is the aim. This applies to schools, employers and test writers.",
      "Cross-link: Unit 2 (language shift), Unit 5 (mother-tongue-based multilingual education), Unit 6 (language in education), Unit 8 (accommodation) and Unit 10 (teaching)."
     ]},
    related:["we-linguistic-imperialism-debate","we-native-speakerism-hiring","we-accent-and-understanding"],
    read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.7 “Legally enshrined harms”"}],
    sources:[{t:"UN Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities (1992)", url:"https://hrlibrary.umn.edu/resolutions/47/135GA1992.html"},{t:"Universal Declaration of Linguistic Rights (Wikipedia)", url:"https://en.wikipedia.org/wiki/Universal_Declaration_of_Linguistic_Rights"},{t:"Linguistic imperialism (Wikipedia)", url:"https://en.wikipedia.org/wiki/Linguistic_imperialism"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-language-attitude", term:"Language attitude", def:"A feeling or opinion that a person holds about a language, a variety or an accent. It belongs to the listener, and it is learned from family, school, media and social ideas.", codex:"we-language-attitudes"},
   {id:"we-matched-guise", term:"Matched-guise technique", def:"A method in which one bilingual speaker is recorded in two guises, such as two languages, and listeners rate each voice without knowing that it is the same person. A difference in the ratings points to attitudes.", codex:"we-language-attitudes"},
   {id:"we-status-solidarity", term:"Status and solidarity", def:"Two scales that listeners use to judge speakers. Status covers traits such as intelligent and educated. Solidarity covers traits such as friendly and trustworthy.", codex:"we-language-attitudes"},
   {id:"we-covert-prestige", term:"Covert prestige", def:"The hidden value of a local or nonstandard form inside a group, as a sign of loyalty and belonging. It contrasts with overt prestige, which is open praise for the standard.", codex:"we-language-attitudes"},
   {id:"we-standard-language-ideology", term:"Standard language ideology", def:"The belief that one variety, the standard, is the correct and neutral one, and that other varieties are lesser. Lippi-Green defines it as a bias toward an idealized, uniform spoken language.", codex:"we-standardization-ideology"},
   {id:"we-accentedness", term:"Accentedness", def:"How different a voice sounds from the accent that the listener expects. It is a feeling about the sound, and it is not the same as how much is understood.", codex:"we-accent-and-understanding"},
   {id:"we-reverse-linguistic-stereotyping", term:"Reverse linguistic stereotyping", def:"The effect when a listener’s expectation about a speaker’s group changes how the listener judges the speech. Kang and Rubin (2009) use this name.", codex:"we-accent-and-understanding"},
   {id:"we-native-speaker", term:"Native speaker", def:"In everyday use, a person who learned a language from early childhood as a first language. There is no agreed test for it, and the category is debated.", codex:"we-native-speakerism-hiring"},
   {id:"we-native-speakerism", term:"Native-speakerism", def:"Holliday’s (2006) name for a widespread ideology in English teaching in which “native-speaker” teachers are seen as carriers of the best English and teaching methods.", codex:"we-native-speakerism-hiring"},
   {id:"we-gatekeeper", term:"Gatekeeper", def:"A person, test or rule that decides who may enter a school, a job or a discussion. English skill can act as a gate.", codex:"we-language-rights-and-english"},
   {id:"we-linguistic-imperialism", term:"Linguistic imperialism", def:"Phillipson’s (1992) term for a situation in which the dominance of English is kept in place by structural and cultural inequalities between English and other languages. Scholars debate the idea.", codex:"we-linguistic-imperialism-debate"},
   {id:"we-linguicism", term:"Linguicism", def:"Unequal treatment of people on the basis of language, in the way that racism is unequal treatment on the basis of race. Skutnabb-Kangas coined the word.", codex:"we-linguistic-imperialism-debate"},
   {id:"we-language-rights", term:"Language rights", def:"The idea that people should be able to use their own language in important parts of life, such as school, courts and public services. Scholars also use the term linguistic human rights.", codex:"we-language-rights-and-english"}
  ],
  cpBank:[
   Q("e6u9-cp01","e6u9-l1",1,"In the matched-guise technique, what is a guise?",2,[
     ["A kind of listener","A guise belongs to the speaker’s recording, not to the listener."],
     ["A rating scale","A rating scale is a separate part of the study."],
     ["One of the ways the same speaker presents themselves, such as one language or accent","Right. The same person appears in two guises."],
     ["A test of memory","The listeners rate traits, and they do not take a memory test."]]),
   Q("e6u9-cp02","e6u9-l1",3,"A radio host says, “A study found that people rated one accent as less intelligent, so we should not put speakers of that accent on the air.” What is the best reply?",1,[
     ["“That is correct, because ratings show the truth.”","Ratings show listener attitudes and not the speakers’ ability."],
     ["“The ratings show listener attitudes. They are not evidence about speakers’ ability, so the plan would act on a stereotype.”","Right. It separates the attitude from the evidence."],
     ["“Nothing in the study matters.”","The study matters as evidence about attitudes."],
     ["“We should rate more accents and then choose.”","This would repeat the problem, because ratings are not a test of skill."]]),
   Q("e6u9-cp03","e6u9-l2",2,"Which result would best show that accent and understanding are different things?",0,[
     ["Listeners rate a speech sample as strongly accented, and they still write down every word correctly","Right. This is the kind of result that Munro and Derwing (1995) report."],
     ["Listeners say that they dislike a voice","A dislike is an attitude, and it does not separate accent from understanding."],
     ["A speaker talks very fast and nobody understands","This is a speed problem, not a test of accent versus understanding."],
     ["Two listeners give different ratings","A difference between listeners does not separate the three ideas."]]),
   Q("e6u9-cp04","e6u9-l2",3,"Hana is a listener who often finds a colleague hard to follow. She has not yet asked what the difficulty is. Which step fits Lesson 2 best?",3,[
     ["Wait until the colleague changes his accent","This assumes that the accent is the cause."],
     ["Tell the colleague to speak like a newsreader","This asks him to change his identity and it does not find the problem."],
     ["Say nothing and avoid him","This avoids the shared work of understanding."],
     ["Name the missing part and ask for it again, for example the last number","Right. It is specific and friendly, and it deals with the real difficulty."]]),
   Q("e6u9-cp05","e6u9-l3",1,"According to the lesson, what is a repertoire?",1,[
     ["A list of correct words","A repertoire is not a list of words."],
     ["The set of languages and varieties that a person can use","Right. A speaker chooses from it for different audiences."],
     ["A poem that people memorize","This is a different everyday meaning."],
     ["A style that only experts use","Everyone has a repertoire."]]),
   Q("e6u9-cp06","e6u9-l3",3,"A teacher tells a student, “Your accent is part of you, so never change anything.” Which comment fits Lesson 3 best?",2,[
     ["“Right. Identity means that no change is ever useful.”","The lesson says that a learner can keep an accent and still change one feature."],
     ["“Wrong. Everyone must change to a reference accent.”","The lesson says that no accent goal is required."],
     ["“The choice is the student’s. The student can keep the accent and still work on a feature that blocks understanding.”","Right. It respects identity and clear communication."],
     ["“Accents have no link to identity.”","Labov’s study shows a link between sound and belonging."]]),
   Q("e6u9-cp07","e6u9-l4",1,"Which word did Holliday (2006) use for the belief that “native-speaker” teachers carry the best English and methods?",3,[
     ["Linguicism","Linguicism means unequal treatment based on language. It is a different idea."],
     ["The matched-guise technique","This is a research method."],
     ["Covert prestige","This is the hidden value of a local form."],
     ["Native-speakerism","Right. Holliday named it in an article in the *ELT Journal*."]]),
   Q("e6u9-cp08","e6u9-l4",2,"Which statement about studies of hiring in English teaching is the most accurate?",1,[
     ["They prove why every hire was made","They cannot show why one person was hired."],
     ["They use several methods. They report that the label is common in hiring, and they cannot show each decision","Right. They use surveys and analyses of ads, and each has limits."],
     ["They show that employers never have reasons","Employers do give reasons, such as student expectations."],
     ["They have all used the same method","They use surveys and ad analyses, among other methods."]]),
   Q("e6u9-cp09","e6u9-l4",3,"A job ad says, “Teacher wanted. Native speaker preferred.” Which change makes the requirement fairer?",0,[
     ["“English at level C1 or higher, a teaching qualification and a sample lesson”","Right. It names skills that can be checked."],
     ["“Native speaker required, no exceptions”","This makes the label stricter."],
     ["“Native speaker, and a nice accent”","This adds another label."],
     ["“Teacher wanted. Applicants must be from our country”","This adds a different label of origin."]]),
   Q("e6u9-cp10","e6u9-l5",1,"Which sentence best describes the idea of English as a gate?",2,[
     ["English has a difficult spelling","Spelling is a different topic."],
     ["English is the oldest language in the world","This is not true, and it is not the idea."],
     ["A requirement for English can keep out people who lack it, even if they have other strong skills","Right. A gate decides who may enter."],
     ["English words begin with a capital letter","This is not the idea."]]),
   Q("e6u9-cp11","e6u9-l5",2,"Which pair correctly matches a scholar with a position described in Lesson 5?",3,[
     ["Davies: English dominance has no history","Davies argued that parts of the claim are hard to test."],
     ["Bisong: only structures matter","Bisong stressed practical choices in Nigeria."],
     ["Phillipson: English never spread through power","Phillipson argued the opposite."],
     ["Canagarajah: learners and teachers can resist and reshape English","Right. He described creative strategies of teachers and students in formerly colonized communities."]]),
   Q("e6u9-cp12","e6u9-l5",3,"Dmitri is told, “Choose a side: is English imperialism or is it just a useful tool?” Which reply fits the lesson best?",1,[
     ["“It is only imperialism.”","This leaves out the evidence on speakers’ choices."],
     ["“Scholars disagree. History and power shaped the spread, and many people also choose English for reasons of their own.”","Right. It gives both sides and does not force a choice."],
     ["“It is only a useful tool.”","This leaves out the evidence on inequality and power."],
     ["“Nobody has studied it.”","Many scholars have studied it."]])
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u9-q01","e6u9-l1",1,"What is a language attitude?",1,[
     ["A rule about which grammar is correct","That is a prescriptive rule, which is a different idea."],
     ["A feeling or opinion that a person holds about a language, a variety or an accent","Right. It belongs to the listener."],
     ["A feature of the sound system of a variety","Attitudes belong to listeners, and not to the sound system."],
     ["A test score that proves ability","A score is not an attitude, and attitudes do not prove ability."]]),
   Q("e6u9-q02","e6u9-l1",1,"Who published the matched-guise technique in 1960?",2,[
     ["Labov and colleagues in New York","Labov’s department-store study came in 1966 and had a different design."],
     ["Milroy and Milroy in Belfast","The Milroys’ book *Authority in Language* came in 1985."],
     ["Lambert and colleagues in Montreal","Right. The study compared French and English guises."],
     ["Giles in Britain","Giles (1970) studied British accents ten years later."]]),
   Q("e6u9-q03","e6u9-l1",2,"In a matched-guise study, what do the listeners believe about the voices?",0,[
     ["That they belong to different people","Right. The same person reads twice, but the recordings are mixed so that the voices seem different."],
     ["That the same person reads twice","If listeners knew this, the design would not hide its aim."],
     ["That all the speakers are famous","Nothing in the design says this."],
     ["That they will take a memory test","They rate traits, and they do not take a memory test."]]),
   Q("e6u9-q04","e6u9-l1",2,"In a matched-guise study, listeners rate one guise of a speaker as more intelligent than the other guise of the same speaker. What does this show?",3,[
     ["That one guise belongs to a more intelligent person","The person is the same in both guises."],
     ["That one accent is clearer","Clarity is not what the ratings measure."],
     ["That the recordings were different lengths","The design controls for this, so it is not the explanation."],
     ["That the listeners link one language or accent with a trait","Right. The result points to attitudes, since the speaker did not change."]]),
   Q("e6u9-q05","e6u9-l1",1,"Which pair of traits belongs to the solidarity scale?",2,[
     ["Educated and successful","These are status traits."],
     ["Intelligent and competent","These are status traits."],
     ["Friendly and trustworthy","Right. They describe warmth and closeness."],
     ["Powerful and wealthy","These are not solidarity traits."]]),
   Q("e6u9-q06","e6u9-l1",2,"What is covert prestige?",1,[
     ["Open praise for the standard form","That is overt prestige."],
     ["Hidden value of a local form inside a group, as a sign of belonging","Right. It helps to explain why people keep a local accent."],
     ["A rule printed in dictionaries","Dictionaries do not define covert prestige."],
     ["An accent that nobody uses","Covert prestige is about forms that people do use."]]),
   Q("e6u9-q07","e6u9-l1",2,"What do Milroy and Milroy call the repeated public complaints that standards of language are falling?",3,[
     ["The matched-guise technique","This is a research method."],
     ["Language subordination","This is Lippi-Green’s term for a process that treats some speakers as inferior."],
     ["Covert prestige","This is the hidden value of a local form."],
     ["The complaint tradition","Right. It appears in letters, articles and speeches over many years."]]),
   Q("e6u9-q08","e6u9-l1",3,"Aiko reads about standard language ideology and says, “So linguists want to remove the standard.” Which reply fits Lesson 1 best?",2,[
     ["“Yes. A standard is always harmful.”","The lesson says that a standard does useful work."],
     ["“No. Linguists never study standards.”","They do study standards and the beliefs about them."],
     ["“Not exactly. A standard is a useful tool. The problem is the belief that it is better and that other speakers are less able.”","Right. It separates the tool from the ideology."],
     ["“Yes, and everyone must use a local variety.”","This replaces one rule with another."]]),
   Q("e6u9-q09","e6u9-l1",3,"A news site reports, “Listeners rated Accent X as less educated, so speakers of Accent X are less educated.” What is wrong with the claim?",1,[
     ["Nothing. The ratings prove it.","The ratings show attitudes and not the speakers’ education."],
     ["It treats a listener rating as a fact about speakers","Right. Ratings show what listeners think, and they say nothing about the speakers’ education."],
     ["It uses a rating scale","Rating scales are normal in this research."],
     ["It names an accent","Naming an accent is not the problem."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u9-q10","e6u9-l2",1,"In the sense of Munro and Derwing, what is intelligibility?",2,[
     ["How different a voice sounds from the local accent","This is accentedness."],
     ["How hard the speech felt to follow","This is comprehensibility, a rating."],
     ["How much of the message the listener actually understood","Right. It is often measured by what listeners write down."],
     ["How pleasant a voice is","Pleasantness is a separate attitude."]]),
   Q("e6u9-q11","e6u9-l2",1,"Which term means how different a voice sounds from the accent that a listener expects?",0,[
     ["Accentedness","Right. It is a feeling about the sound."],
     ["Intelligibility","This is how much was actually understood."],
     ["Comprehensibility","This is how hard the speech felt to follow."],
     ["Audience design","This is a way that speakers shape their speech for listeners."]]),
   Q("e6u9-q12","e6u9-l2",2,"What was the main finding of Munro and Derwing (1995) described in this lesson?",3,[
     ["Strongly accented speech is always hard to understand","The study reports the opposite."],
     ["Accent, comprehensibility and intelligibility are the same thing","They are related but not the same."],
     ["Native listeners cannot rate accent","Native listeners did rate accent in the study."],
     ["The three measures are linked but partly independent, and some strongly accented speech was still highly intelligible","Right. A strong accent did not always mean a loss of understanding."]]),
   Q("e6u9-q13","e6u9-l2",2,"In the photo design that this lesson describes for Rubin (1992), what stayed the same for the two groups?",1,[
     ["The photo of the instructor","The photos were the part that changed."],
     ["The recorded lecture","Right. Because the recording was the same, the difference points to listener expectations."],
     ["The test scores","The scores were the result that was compared."],
     ["The listeners’ attitudes","Attitudes were the thing that could differ."]]),
   Q("e6u9-q14","e6u9-l2",2,"What does reverse linguistic stereotyping mean?",2,[
     ["A listener hears an accent and then guesses the speaker’s group","This is ordinary linguistic stereotyping."],
     ["A speaker copies another speaker’s accent","This is accommodation or imitation."],
     ["A listener’s expectation about a speaker’s group changes how the speech is judged","Right. Kang and Rubin (2009) use this name for the effect."],
     ["A speaker changes the topic","This is not related."]]),
   Q("e6u9-q15","e6u9-l2",3,"Priya finds her classmate Tomás hard to follow in a presentation. What is the best first step?",0,[
     ["Note which part was hard, such as a word or the speed, and ask him politely to repeat or rephrase it","Right. It is specific, friendly and deals with the real difficulty."],
     ["Tell the teacher that Tomás has a bad accent","This blames his accent without checking the cause."],
     ["Guess what he meant and move on","Guessing can lead to a second misunderstanding."],
     ["Ask where he is from","The question is about the person, and it does not help to find the message."]]),
   Q("e6u9-q16","e6u9-l2",3,"Which description of Lindemann’s (2002) study fits this lesson?",2,[
     ["Attitudes had no link with how the listeners felt about the conversation","The lesson says that attitudes were linked with how successful the listeners felt the conversation was."],
     ["The Korean speakers always failed the task","The lesson says that all the pairs completed the task fairly well, except where the English speaker avoided the difficult parts."],
     ["Attitudes were linked with how well listeners felt the task went. Some listeners with negative attitudes avoided the hard parts","Right. Her point is that attitudes can become part of the problem."],
     ["Every listener with negative attitudes failed the task","Most pairs completed the task fairly well. Only some listeners with negative attitudes used unhelpful strategies."]]),
   Q("e6u9-q17","e6u9-l2",2,"Which request names a problem without blaming the speaker?",1,[
     ["“Your accent is too strong.”","This blames the speaker’s accent."],
     ["“I missed the last number. Could you say it again?”","Right. It names the missing part."],
     ["“Speak like a native speaker.”","This asks for a different accent and does not name a problem."],
     ["“I cannot understand people like you.”","This puts the speaker in a group and blames them."]]),
   Q("e6u9-q18","e6u9-l2",3,"A student says, “Rubin’s study proves that all undergraduates are biased.” Which reply is the most careful?",2,[
     ["“Yes. It proves it for everyone.”","One experiment cannot show this."],
     ["“No. The study found nothing.”","The abstract reports that Study 1 tested instructor ethnicity."],
     ["“It was one experiment at one university. It shows that expectations can change perception, and it does not describe every listener.”","Right. This matches the warning in the lesson."],
     ["“We should not read the study.”","Reading it carefully is better."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u9-q19","e6u9-l3",1,"Who studied vowels on Martha’s Vineyard in 1963?",0,[
     ["Labov","Right. He linked a vowel pattern with loyalty to the island."],
     ["Bell","Bell studied radio newsreaders in New Zealand in 1984."],
     ["Trudgill","Trudgill studied Norwich in 1972."],
     ["Jenkins","Jenkins (2007) studied users of English as a lingua franca."]]),
   Q("e6u9-q20","e6u9-l3",1,"What is audience design?",2,[
     ["A way of drawing a room","This is not a language idea."],
     ["A rule that every speaker must follow","Audience design describes what speakers do, and it is not a rule."],
     ["Speakers shape their speech for the people they are talking to","Right. Bell (1984) described it."],
     ["A plan for a television studio","This is not the sense used in the lesson."]]),
   Q("e6u9-q21","e6u9-l3",2,"What did McKenzie (2008) find when Japanese university students rated recordings of six varieties of English?",1,[
     ["They rated the Japanese-accented speaker highest on every trait","The UK and US speakers were rated highest for status."],
     ["They rated UK and US speakers highest for status, and felt more solidarity with a strongly Japanese-accented speaker","Right. The two scales pointed in different directions."],
     ["They could not tell the varieties apart, so they gave every speaker the same rating","The ratings differed between varieties and between the two scales."],
     ["They rated the Japanese-accented speaker lowest on every trait","For solidarity, the students felt closer to the Japanese-accented speaker."]]),
   Q("e6u9-q22","e6u9-l3",2,"Which statement about Singlish fits the lesson best?",3,[
     ["All Singaporeans dislike it","Attitudes differ."],
     ["All Singaporeans love it","Attitudes differ."],
     ["It is not a regular system","Researchers describe it as a regular system."],
     ["Many Singaporeans use both Singlish and standard English, and views about Singlish differ","Right. Supporters and critics of the Speak Good English Movement both have reasons."]]),
   Q("e6u9-q23","e6u9-l3",2,"What does the lesson say about “pride” in local Englishes?",0,[
     ["It does not mean that every speaker feels the same, and each person decides","Right. Attitudes inside a community differ."],
     ["Every speaker must feel it","The lesson says that no speaker must feel it."],
     ["It is a mistake","The lesson does not call it a mistake."],
     ["It applies only to Singapore","The lesson also names Jamaica and the Philippines."]]),
   Q("e6u9-q24","e6u9-l3",3,"Hana speaks one way at home and another way at her workplace. A colleague calls her “two-faced”. Which reply fits Lesson 3 best?",2,[
     ["“Yes. She should use one way everywhere.”","The lesson calls style shifting a normal skill."],
     ["“Yes. Home speech is wrong at work.”","No variety is wrong, and the lesson does not say this."],
     ["“No. Many speakers shape their speech for different audiences, and this is a skill.”","Right. It is audience design or code-switching."],
     ["“Nobody changes how they speak.”","The lesson describes the opposite."]]),
   Q("e6u9-q25","e6u9-l3",3,"Kenji, an engineer in Japan, is understood well in meetings, though one sound sometimes confuses a listener. Someone tells him to “fix his accent”. What plan fits the lesson best?",1,[
     ["Change everything to match a chosen accent","The lesson says that no accent goal is required."],
     ["Keep his accent, work on that one sound if he chooses, and keep speaking with confidence","Right. It treats identity and clarity as compatible."],
     ["Stop speaking in meetings","This gives up, and nothing supports it."],
     ["Ask the listener to change","This ignores the shared nature of understanding, and the one sound can be a small, fair goal."]]),
   Q("e6u9-q26","e6u9-l3",1,"Which mistake does the lesson name?",3,[
     ["Choosing a goal for pronunciation","This is a normal and useful thing to do."],
     ["Keeping an accent that is clear","This is a legitimate choice."],
     ["Asking a listener to repeat","Asking is a helpful move."],
     ["Believing that everyone must sound like one reference accent","Right. The lesson says that this is a common mistake."]]),
   Q("e6u9-q27","e6u9-l3",2,"What does Labov’s Martha’s Vineyard study suggest about sounds?",2,[
     ["That sounds change without any link to people","The study linked a sound with attitudes."],
     ["That tourists decide how islanders speak","The study found a link with the islanders’ own loyalty."],
     ["That a sound can be a sign of belonging","Right. The pattern was strongest among islanders who felt loyal to the island."],
     ["That all vowels are the same","The study looked at particular vowels."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u9-q28","e6u9-l4",1,"Who named native-speakerism in the *ELT Journal* in 2006?",1,[
     ["Phillipson","Phillipson named the native-speaker fallacy in 1992."],
     ["Holliday","Right. He described a widespread ideology in English teaching."],
     ["Lippi-Green","She wrote about standard language ideology in the United States."],
     ["Medgyes","He wrote about native and non-native teachers in 1992."]]),
   Q("e6u9-q29","e6u9-l4",1,"What is the native-speaker fallacy, according to Phillipson (1992)?",3,[
     ["The idea that native speakers cannot teach","This is also a mistaken idea, and it is not Phillipson’s fallacy."],
     ["The idea that English has no native speakers","This is not the fallacy."],
     ["The idea that all teachers need training","This is a sound idea."],
     ["The belief that the ideal English teacher is a native speaker","Right. Being a native speaker does not make someone a better teacher."]]),
   Q("e6u9-q30","e6u9-l4",2,"What three things does Rampton (1990) argue that “native speaker” mixes up?",0,[
     ["Inheritance, expertise and affiliation","Right. These are family and birth, skill and feeling about the language."],
     ["Grammar, vocabulary and spelling","These are parts of a language, not the three things."],
     ["Status, solidarity and prestige","These are attitude terms from Lesson 1."],
     ["Accent, dialect and variety","These are terms from earlier units."]]),
   Q("e6u9-q31","e6u9-l4",2,"What can an analysis of job advertisements show?",2,[
     ["Why one person was hired","Ads do not show individual decisions."],
     ["How well every teacher teaches","Ads say nothing about teaching quality."],
     ["What ads ask for and how they describe the ideal applicant","Right. The table says this."],
     ["What every employer in the world thinks","An analysis covers the ads in its sample only."]]),
   Q("e6u9-q32","e6u9-l4",2,"Why must a reader be careful with a survey of employers?",1,[
     ["Surveys never show anything","Surveys do show what employers say."],
     ["It shows what employers say, and it cannot show why one person was hired","Right. This is a limit of the method."],
     ["Employers always tell the truth","This is not a reason, and it is not claimed."],
     ["A survey has no sample","Every survey has a sample."]]),
   Q("e6u9-q33","e6u9-l4",3,"An ad says, “Native speaker of English required.” Which rewrite is the fairest?",3,[
     ["“Native speaker, and polite”","This keeps the label and adds another."],
     ["“Native speaker required, and from a named country”","This adds a second label of origin."],
     ["“Must sound like a native speaker”","This requires one accent."],
     ["“English at level C1 or higher, a teaching certificate and a sample lesson”","Right. It names skills that can be checked."]]),
   Q("e6u9-q34","e6u9-l4",3,"A director says, “Research proves that native-speaker teachers are better.” Which reply is the most accurate, given Lesson 4?",2,[
     ["“Yes. The research is clear.”","The lesson says that the research does not show this."],
     ["“Research proves that non-native teachers are better.”","This is also too strong."],
     ["“Reviews describe mixed findings. Teaching quality depends on training, experience and care for learners.”","Right. It stays within the evidence."],
     ["“Research is never useful.”","The lesson uses research carefully."]]),
   Q("e6u9-q35","e6u9-l4",2,"What did Medgyes (1992) argue about native and non-native English teachers?",0,[
     ["They have different strengths","Right. He asked who is worth more, and he answered with differences, not a ranking."],
     ["Only native teachers can teach well","This is not his argument."],
     ["Only non-native teachers can teach well","This is not his argument either."],
     ["Teachers do not matter","This is not his argument."]]),
   Q("e6u9-q36","e6u9-l4",3,"Which statement fits the idea that native-speakerism is an ideology?",1,[
     ["Only unkind people hold it","The lesson says that a person can hold the belief without meaning harm."],
     ["A person can hold the belief without meaning harm, and the belief can still shape hiring","Right. An ideology is widely held and often unnoticed."],
     ["It is a law","It is a belief and not a law."],
     ["It is a test for teachers","It is not a test."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u9-q37","e6u9-l5",1,"Which sentence describes English as a door?",0,[
     ["English gives access to study, work and information","Right. This is the opportunity side."],
     ["English keeps some people out of jobs","This is the gate side."],
     ["English is hard to learn","This is not the door image."],
     ["English belongs only to some countries","This is not what the image means."]]),
   Q("e6u9-q38","e6u9-l5",1,"How did Phillipson (1992) define English linguistic imperialism, in the lesson’s words?",2,[
     ["A plan to teach English to everyone","The definition is about inequality."],
     ["The spread of English because people like it","This is closer to what some critics say."],
     ["English stays dominant because of unequal institutions and beliefs about languages","Right. It is a claim about power."],
     ["A rule that bans other languages","Phillipson did not define it in this way."]]),
   Q("e6u9-q39","e6u9-l5",2,"Which of these is **not** one of Phillipson’s five fallacies?",3,[
     ["The monolingual fallacy","It is one of the five."],
     ["The early-start fallacy","It is one of the five."],
     ["The subtractive fallacy","It is one of the five."],
     ["The “grammar first” fallacy","Right. This is not on his list. His five are the monolingual, native-speaker, early-start, maximum-exposure and subtractive fallacies."]]),
   Q("e6u9-q40","e6u9-l5",2,"Which critic argued, with Nigeria as an example, that people often choose English for practical reasons?",1,[
     ["Phillipson","He is the author of the claim that critics discuss."],
     ["Bisong","Right. He gave the example of parents who choose English-medium schools so that their children grow up multilingual."],
     ["Lippi-Green","She wrote about accent and discrimination in the United States."],
     ["Holliday","He named native-speakerism."]]),
   Q("e6u9-q41","e6u9-l5",2,"According to the lesson, what is the 1996 Barcelona declaration on linguistic rights?",2,[
     ["A treaty that binds every country","The lesson says that it is not a treaty."],
     ["A law of Spain","The lesson does not say this."],
     ["A statement signed by PEN International and nongovernmental organizations, and not a treaty","Right. Read the exact text before quoting it."],
     ["A declaration adopted by UNESCO","It was presented to UNESCO, but UNESCO did not adopt it."]]),
   Q("e6u9-q42","e6u9-l5",3,"A neighbor tells Ana that she is “betraying her language” because she chose an English-medium school for her child. Which reply fits Lesson 5 best?",1,[
     ["“You are right. English is the enemy.”","The lesson avoids treating English as the enemy."],
     ["“It is a personal choice for opportunity, and our community can also keep the home language alive.”","Right. It respects both the family and the community."],
     ["“Home languages are a problem.”","The lesson avoids this shortcut."],
     ["“Nobody should choose.”","This ignores real family decisions."]]),
   Q("e6u9-q43","e6u9-l5",3,"Which habit belongs to an employer or school that wants to reduce gatekeeping?",0,[
     ["Name the language skill that the task needs and check it directly","Right. This is in the table of fair habits."],
     ["Require one accent for every job","The lesson says that clarity is the goal, and one accent is not required."],
     ["Use only one variety in listening practice","The lesson suggests many varieties."],
     ["Avoid describing the skill","The lesson says to name skills."]]),
   Q("e6u9-q44","e6u9-l5",3,"A student says, “The debate on linguistic imperialism is simple: Phillipson was either completely right or completely wrong.” What is the best reply?",2,[
     ["“Yes. There is nothing in between.”","The lesson describes middle positions."],
     ["“He was completely wrong, so ignore him.”","This ignores the scholars who add to his argument."],
     ["“Scholars agree that power matters and disagree about how to describe it, so a fair view gives each side.”","Right. It matches the lesson."],
     ["“Only English teachers can judge.”","The lesson does not say this."]]),
   Q("e6u9-q45","e6u9-l5",2,"Which habit fits fair listening for a teacher, according to the lesson?",3,[
     ["Use only one accent in listening practice","The lesson says to use many varieties."],
     ["Correct each learner’s accent in every sentence","The lesson does not recommend this."],
     ["Grade learners by how closely they imitate one speaker","This rewards imitation, and it does not measure understanding."],
     ["Use many varieties in listening practice, including outer-circle and expanding-circle speakers","Right. It builds fair listening."]])
  ]
});
})();
