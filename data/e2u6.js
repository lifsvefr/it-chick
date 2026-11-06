/* Social Science Primers · International Relations Unit 6 · Theories as lenses */
ICA.addUnit({
  id:"e2u6", track:"e2", n:6, title:"Theories as lenses", icon:"🔍",
  blurb:"Why International Relations needs theories, and how the main ones work: realism, liberalism, constructivism, the English School, Marxist, feminist and postcolonial lenses, and Global IR. One famous crisis is seen through every lens, and each theory gets its strongest critiques.",
  goals:[
    "Explain what an IR theory is, how it simplifies like a map, and the difference between explaining, understanding and judging",
    "Use realist ideas (power, self-help, the security dilemma, the balance of power) and say where realism struggles",
    "Use liberal ideas (interdependence, institutions, absolute gains, the democratic peace) and weigh the evidence and critiques",
    "Explain how constructivists and the English School put ideas, identities, norms and shared rules at the centre",
    "Describe Marxist, feminist and postcolonial lenses and the Global IR agenda carefully, and read one event through several lenses without declaring a single winner"
  ],
  read:[
    {book:"eirt", where:"Introduction “Getting Started with International Relations Theory” and Part One, Chapters 1–10 (Realism to “Towards a Global IR?”)", note:"Companion reading for going further. Each chapter is short, and most include a real-world case study; read each one after the matching lesson."},
    {book:"eir", where:"Chapter 4 “International Relations Theory” (Dana Gold and Stephen McGlinchey)", note:"A brisk one-chapter tour of the same ground: good as a review at the end of the unit."},
    {book:"ospol", where:"Chapter 14 “International Relations”, sections 14.5 “The Realist Worldview”, 14.6 “The Liberal and Social Worldview” and 14.7 “Critical Worldviews”", note:"The gentlest of the three books. It is written for US students and uses US examples; the lessons add cases from other regions."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u6-l1", title:"Why theory? Maps, lenses and debates", minutes:50,
   hook:{q:"In October 1962 the world came close to nuclear war over Soviet missiles in Cuba. In the United States this is called the Cuban Missile Crisis. What was it usually called in the Soviet Union?", options:["The Missile Gap","The October Crisis","The Caribbean Crisis","The Thirteen Days"], answer:2, reveal:"**The Caribbean Crisis.** In Cuba it is usually called the **October Crisis**. Each name puts a different place or thing at the centre: the missiles, the region, or the month a small country lived through. Theories do the same with every event, which is why this unit follows this one crisis through every lens."},
   goals:[
     "Explain what an IR theory is and why simplifying is a strength, not a flaw",
     "Tell explaining, understanding and judging (normative) claims apart",
     "Name the main families of IR theory and the question each one asks first",
     "Describe the “great debates” story and why historians question it",
     "Outline the 1962 crisis used as this unit’s running example"
   ],
   learn:[
    {h:"Glasses for looking at the world", body:[
      {lead:"Everyone who talks about world politics is already using a theory, even if they never use the word."},
      "Imagine three friends watching the same news story: two countries have signed a trade deal. One says, “They only signed because it makes them stronger.” Another says, “Trade ties make war less likely.” The third asks, “Who gets the factory jobs, and who loses them?” They saw the same facts. They noticed different things because they were looking through different **lenses**.",
      "An [[ir-theory|IR theory]] is a lens like that, made careful and explicit. It says which actors matter most, what drives them, and how the pieces fit, so that you can explain patterns and check the explanation against evidence. The word builds on the general idea of a [[theory]] you may know from the sociology units.",
      "The political scientist Stephen Walt put it simply in a 1998 article titled “International Relations: One World, Many Theories”. The world is one; the ways of making sense of it are many. Learning them does not mean choosing a team. It means owning several pairs of glasses and knowing what each pair shows well and what it blurs.",
      {key:"A theory is a deliberate way of looking: it tells you where to point your attention, and it can be tested against what actually happens."}
     ]},
    {h:"A theory is a map, not the territory", body:[
      "Think of a city’s metro map. It leaves out almost everything: streets, parks, real distances, the shape of the river. That is exactly why it is useful. If it showed every lamp post you could never find your train. A street map of the same city is useful for a different job.",
      "IR theories simplify in the same way. Realism, for example, deliberately ignores most of what goes on inside countries and focuses on power and security between them. Critics say this leaves out too much; realists reply that a map with everything on it is no map at all. Both sides agree on the real question: **is this map good for the journey you are making?**",
      "Every theory has three working parts:",
      {list:[
        "**Assumptions**: starting points it takes as given (for example, “states want to survive”).",
        "**A mechanism**: the chain of cause and effect it proposes (fear leads to arming, arming leads to more fear).",
        "**Expectations**: what we should see in the world if the theory is right, which lets evidence count for or against it."
      ]},
      "A good theory explains a lot with a little, fits the evidence across many cases, and tells you what would prove it wrong. Kenneth Waltz, whom you will meet in the next lesson, stressed another limit: a theory of the international system explains broad, repeated patterns, such as why powerful states keep balancing one another. It does not claim to predict exactly what one government will do next Tuesday.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e2u6-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="30" y="10" width="280" height="54" rx="8" stroke-width="2"/><text x="170" y="33" text-anchor="middle">Assumptions</text><text class="s" x="170" y="52" text-anchor="middle">“States want to survive”</text><path class="d-ink" d="M170 66 L170 88" stroke-width="2" marker-end="url(#e2u6-l1-a)"/><rect class="d-gold" x="30" y="90" width="280" height="54" rx="8" stroke-width="2"/><text x="170" y="113" text-anchor="middle">Mechanism</text><text class="s" x="170" y="132" text-anchor="middle">fear → arming → more fear</text><path class="d-ink" d="M170 146 L170 168" stroke-width="2" marker-end="url(#e2u6-l1-a)"/><rect class="d-sage" x="30" y="170" width="280" height="54" rx="8" stroke-width="2"/><text x="170" y="193" text-anchor="middle">Expectations</text><text class="s" x="170" y="212" text-anchor="middle">what we should see if it is right</text><path class="d-ink" d="M170 226 L170 248" stroke-width="2" marker-end="url(#e2u6-l1-a)"/><rect class="d-rose" x="30" y="250" width="280" height="40" rx="8" stroke-width="2"/><text x="170" y="275" text-anchor="middle">Check against evidence</text><path class="d-ink" d="M312 270 L330 270 L330 37 L313 37" fill="none" stroke-width="2" marker-end="url(#e2u6-l1-a)"/></svg>', alt:"Four boxes stacked top to bottom: assumptions, mechanism, expectations, check against evidence. An arrow loops from the evidence box back up to the assumptions box.", cap:"The working parts of a theory. When evidence does not fit, scholars revise the theory, limit what it claims, or look for a better one."}
     ]},
    {h:"Explaining, understanding and judging", body:[
      "IR theories do different jobs, and mixing them up causes many arguments. Three jobs matter most:",
      {table:[
        ["Job","The question","Example"],
        ["Explaining","What caused this?","Why did the crisis end without war?"],
        ["Understanding","What did it mean to the people involved?","How did Cuban leaders see the missiles?"],
        ["Judging (normative)","What should happen?","Was it right to risk nuclear war?"]
      ]},
      "**Explaining** looks for causes and patterns, much like the natural sciences; this approach is often called positivist (see [[positivism]]). **Understanding** tries to reconstruct meanings from the inside: what leaders believed, feared and took for granted. The British scholars Martin Hollis and Steve Smith built a whole book, *Explaining and Understanding International Relations* (1990), around this difference.",
      "**Judging** is [[normative-theory|normative theory]]: arguments about what is just or right, such as when war can be justified or what rich countries owe poor ones. Normative claims are not “unscientific opinions”. They can be argued carefully, with reasons and consistency, but evidence alone cannot settle them.",
      "The Canadian scholar Robert Cox added a sharp warning in 1981: “Theory is always for someone and for some purpose.” He contrasted **problem-solving theory**, which takes the world as it is and asks how to make it run smoothly, with **critical theory**, which asks how the existing order came about, who benefits from it and how it might change. Lesson 5 returns to this idea.",
      {tip:"A quick test for any sentence about world politics: does it say what **is** (explaining), what something **means** (understanding) or what **ought** to be (judging)? Many news articles mix all three in one paragraph."}
     ]},
    {h:"The families of IR theory", body:[
      "IR theories come in families, sometimes called [[paradigm|paradigms]] or “isms”. Each lesson in this unit takes one or two families. Here is the whole map first, with the question each family asks before any other:",
      {table:[
        ["Family","First question","Lesson"],
        ["Realism","Who has power, and who fears whom?","2"],
        ["Liberalism","How can cooperation, trade and rules reduce conflict?","3"],
        ["Constructivism","What do ideas, identities and norms make possible?","4"],
        ["English School","What shared rules make states a society?","4"],
        ["Marxist and world-systems","Who gains from the global economy?","5"],
        ["Feminist","Where are the women, and how does gender shape power?","5"],
        ["Postcolonial","Whose experience counts, and what did empire leave behind?","5"],
        ["Global IR","How do ideas from every region change the field?","5"]
      ]},
      {warn:"Words differ between textbooks. “Liberalism” in IR is a theory of world politics, not the same thing as a party called “liberal” in any one country, and “neoliberal” in IR means something different from “neoliberal” economic policy. The lessons flag these traps when they arise."},
      "The families also disagree about **what kind of knowledge** IR can have. Realism and liberalism mostly aim to explain. Constructivism sits in the middle. Many critical approaches doubt that a neutral, outside view of politics is possible at all, because the observer is always standing somewhere."
     ]},
    {h:"The “great debates” story, and its critics", body:[
      "IR textbooks often tell the field’s history as a series of **great debates**. The usual version goes like this:",
      {ol:[
        "**First debate (1930s–1940s): “idealists” against realists.** After 1919, scholars hoped the League of Nations and international law could end war (the field’s founding is covered in Unit 5). The Second World War seemed to prove them naïve, and realists such as E. H. Carr (*The Twenty Years’ Crisis*, 1939) and Hans Morgenthau took over.",
        "**Second debate (1950s–1960s):** “traditional” scholars who used history, law and philosophy against “behaviouralists” who wanted measurement and statistics.",
        "**Inter-paradigm debate (1970s–1980s):** realists, liberals and Marxists arguing about which picture of the world was best.",
        "**A later debate (from the late 1980s):** positivists, who aim to explain from the outside, against post-positivists, who question whether that is possible."
      ]},
      "It is a handy outline, but historians of the field warn against taking it literally. In a 1998 article, “The Myth of the ‘First Great Debate’”, Peter Wilson argued that the 1930s scholars later labelled “idealists” never formed a single school, and that the label was mostly attached to them by their critics. Others note that the story starts in Britain and the United States and leaves out thinkers elsewhere, a point Lesson 5 develops.",
      {key:"Treat the great debates as a rough sketch drawn by the winners of each round, not as a full history of ideas about world politics."}
     ]},
    {h:"The running example: thirteen days in October 1962", body:[
      "To compare lenses fairly you need one case seen through all of them. This unit uses the crisis of October 1962, a well-documented event during the {{cold-war|Cold War}} between the United States and the Soviet Union.",
      "The background: Cuba’s 1959 revolution brought Fidel Castro to power, and relations with the United States collapsed. In April 1961, Cuban exiles trained and backed by the CIA landed at the Bay of Pigs and were defeated. In 1962 the Soviet Union, led by Nikita Khrushchev, secretly began installing nuclear-armed missiles in Cuba, about 150 km from Florida. The United States already had nuclear missiles in Turkey, on the Soviet Union’s southern border.",
      {fig:'<svg viewBox="0 0 340 392"><path class="d-soft" d="M30 26 L30 316" stroke-width="3"/><circle class="d-lup" cx="30" cy="30" r="8" stroke-width="2"/><text x="50" y="35">14 Oct</text><text class="s" x="50" y="52">A US spy plane photographs</text><text class="s" x="50" y="67">missile sites in Cuba</text><circle class="d-lup" cx="30" cy="86" r="8" stroke-width="2"/><text x="50" y="91">16 Oct</text><text class="s" x="50" y="108">Kennedy is told; his advisers</text><text class="s" x="50" y="123">(the “ExComm”) start meeting</text><circle class="d-gold" cx="30" cy="142" r="8" stroke-width="2"/><text x="50" y="147">22 Oct</text><text class="s" x="50" y="164">Kennedy announces a naval</text><text class="s" x="50" y="179">“quarantine” of Cuba</text><circle class="d-gold" cx="30" cy="198" r="8" stroke-width="2"/><text x="50" y="203">24 Oct</text><text class="s" x="50" y="220">Quarantine begins; UN leader</text><text class="s" x="50" y="235">U Thant appeals to both sides</text><circle class="d-rose" cx="30" cy="254" r="8" stroke-width="2"/><text x="50" y="259">27 Oct</text><text class="s" x="50" y="276">A US spy plane is shot down</text><text class="s" x="50" y="291">over Cuba; secret talks</text><circle class="d-sage" cx="30" cy="310" r="8" stroke-width="2"/><text x="50" y="315">28 Oct</text><text class="s" x="50" y="332">Khrushchev says the missiles</text><text class="s" x="50" y="347">will be removed</text><text class="s" x="170" y="372" text-anchor="middle">Secretly, the US also agreed to remove</text><text class="s" x="170" y="387" text-anchor="middle">its missiles from Turkey (done in 1963).</text></svg>', alt:"A vertical timeline of October 1962: 14 October, a US spy plane photographs missile sites in Cuba; 16 October, Kennedy is told and his advisers start meeting; 22 October, Kennedy announces a naval quarantine; 24 October, the quarantine begins and UN leader U Thant appeals to both sides; 27 October, a US spy plane is shot down over Cuba and secret talks continue; 28 October, Khrushchev says the missiles will be removed. A note says the US secretly agreed to remove its missiles from Turkey, done in 1963.", cap:"The crisis in six dates. Historians still debate why the Soviet leaders sent the missiles: to protect Cuba from invasion, to offset the US lead in long-range missiles, to answer the missiles in Turkey, or all three."},
      "The crisis ended when Khrushchev announced on 28 October that the missiles would be removed, in return for a US pledge not to invade Cuba and a private promise to withdraw the missiles from Turkey. Afterwards the two sides set up a direct communication link (the “hotline”, 1963) and signed the Partial Test Ban Treaty (1963).",
      "Each lesson ends by asking what its lens sees in these thirteen days, and what it misses."
     ]},
    {h:"Using lenses well", body:[
      "Four misunderstandings trip up most beginners:",
      {list:[
        "**“Theories are just opinions.”** No. A theory states its assumptions and its expectations so that others can test it. An opinion does not have to.",
        "**“One case that doesn’t fit proves a theory wrong.”** Theories in IR describe tendencies, not iron laws. One odd case is a puzzle; many odd cases are a problem.",
        "**“There must be one right theory.”** Most scholars use more than one. Rudra Sil and Peter Katzenstein called combining insights from several theories “analytic eclecticism” (2010).",
        "**“A theory is the same as a political ideology.”** Being a realist scholar does not mean you favour war, and being a liberal theorist says nothing about how you vote. Theories explain; ideologies are programmes for action."
      ]},
      "A useful habit: for any lens, ask **what does it explain well, what does it leave out, and whose point of view does it start from?** You will practise this in every lesson.",
      {terms:["ir-theory","normative-theory","empirical-theory","paradigm","theory","analytic-eclecticism"]}
     ]}
   ],
   try:[
    {id:"e2u6-l1-x1", type:"mcq", q:"Ana says: “Realism is useless, because it ignores elections, religion, culture and the economy inside countries.” Which reply best fits how theories work?", options:[
      {t:"Leaving things out is what makes a theory useful, like a metro map; the real test is whether realism explains the patterns it claims to explain.", ok:true, why:"Right. Every theory simplifies. The fair question is whether the simplification works for its purpose, which is also how realism’s critics argue against it."},
      {t:"Realism doesn’t ignore anything; it includes every factor in world politics.", why:"It deliberately focuses on power and security between states. That is a choice, and its critics are right that it leaves things out."},
      {t:"Ana is right: a good theory must include every factor that could possibly matter.", why:"A theory that included everything would be as complicated as the world itself and would explain nothing. Good theories explain a lot with a little."},
      {t:"Theories can’t be judged at all, so it makes no difference what realism leaves out.", why:"Theories can be judged: by how well their expectations fit the evidence, how much they explain and what they miss."}
    ]},
    {id:"e2u6-l1-x2", type:"sort", q:"Is each sentence mainly explaining (what caused something), understanding (what it meant to those involved) or judging (what ought to be)?", buckets:["Explaining","Understanding","Judging"], items:[
      {t:"Rising fear of a neighbour’s army makes states more likely to form alliances.", b:0, why:"It proposes a cause (fear) and an effect (alliances) that could be checked across many cases."},
      {t:"Rich countries have a duty to help poor countries cope with climate change.", b:2, why:"“Have a duty” is an ought-claim. Reasons can support it, but evidence alone cannot settle it."},
      {t:"For many Cubans, the 1962 crisis meant living under the threat of invasion.", b:1, why:"It reconstructs how the event looked and felt from the inside, to the people who lived it."},
      {t:"Leaders should never threaten to use nuclear weapons.", b:2, why:"“Should never” is a normative judgement about right conduct."},
      {t:"Heavy trade between two states makes war between them less likely.", b:0, why:"It is a claim about a cause (trade) and an effect (less war), which researchers can test with data."},
      {t:"Officials in 1962 saw backing down as a sign of weakness that would damage their country’s standing.", b:1, why:"It describes the meanings and beliefs that shaped choices, the core of understanding."}
    ]},
    {id:"e2u6-l1-x3", type:"match", q:"Match each family of IR theory to the question it asks first.", pairs:[
      ["Realism","Who has power, and who fears whom?","Realists start from power and survival in a world without a government above states."],
      ["Liberalism","How can trade, rules and institutions make cooperation easier?","Liberals start from the possibility of cooperation and progress."],
      ["Constructivism","What do shared ideas and identities make possible?","Constructivists start from meanings: friend or enemy, normal or unthinkable."],
      ["Feminist IR","Where are the women, and how does gender shape power?","Feminist scholars start by asking whose lives and labour the usual story leaves out."],
      ["Postcolonialism","What did empire leave behind, and whose voice is missing?","Postcolonial scholars start from the legacies of colonial rule."]
    ]},
    {id:"e2u6-l1-x4", type:"spot", q:"A student wrote this summary of the great debates. Tap the claims that are wrong or overstated.", ask:"wrong or overstated", parts:[
      "The field’s history is often told as a series of debates. ",
      {t:"In the first, realists such as E. H. Carr criticised hopes that law and the League could end war.", flag:false, why:"Fine. Carr’s *The Twenty Years’ Crisis* (1939) is the classic realist attack on those hopes."},
      " ",
      {t:"The “idealists” were a tightly organised school who all called themselves idealists.", flag:true, why:"Historians such as Peter Wilson (1998) argue the opposite: they were a varied group, and the label was mostly attached to them by critics."},
      " ",
      {t:"A second debate set history and philosophy against measurement and statistics.", flag:false, why:"Fine. That is the usual description of the traditionalist–behaviouralist debate."},
      " ",
      {t:"These debates are a complete history of all thinking about world politics.", flag:true, why:"The story starts in Britain and the United States and leaves out much older and non-Western thought. It is a sketch, not a full history."},
      " ",
      {t:"Realism won the last debate, so the other theories have been disproved.", flag:true, why:"No theory has been disproved in that way. All the families are still used and argued over today."}
    ]},
    {id:"e2u6-l1-x5", type:"order", q:"Put these events of the 1962 crisis in the order they happened.", items:[
      {t:"A US spy plane photographs missile sites in Cuba.", why:"14 October: the photographs started the crisis for the US government."},
      {t:"President Kennedy announces a naval “quarantine” of Cuba.", why:"22 October, after almost a week of secret meetings with his advisers."},
      {t:"The quarantine begins, and the UN’s acting Secretary-General, U Thant, appeals to both sides.", why:"24 October, as Soviet ships approached the quarantine line."},
      {t:"A US spy plane is shot down over Cuba.", why:"27 October, often seen as the most dangerous day of the crisis."},
      {t:"Khrushchev announces that the missiles will be removed.", why:"28 October: the public end of the crisis."},
      {t:"The two governments set up a direct “hotline” link.", why:"1963, a lesson learned: in the crisis, messages had taken hours to arrive."}
    ]},
    {id:"e2u6-l1-x6", type:"mcq", q:"Kenji reads that one democracy once went to war with another and says: “So the theory that democracies don’t fight each other is dead.” What is the best response?", options:[
      {t:"One unusual case is a puzzle worth studying; IR theories describe strong tendencies, so the test is the overall pattern across many cases.", ok:true, why:"Right. Scholars examine the case (was it really a war? were both really democracies?) and weigh it against the whole record. Lesson 3 does exactly this."},
      {t:"He is right: any single exception refutes a theory completely.", why:"That standard would sink almost every theory in the social sciences, which describe tendencies rather than iron laws."},
      {t:"Exceptions don’t matter at all; a theory can never be wrong.", why:"A theory that no evidence could ever count against would not be a theory. Many exceptions would be a serious problem."},
      {t:"He should pick another theory he likes better instead.", why:"Liking a theory isn’t a test. The question is what the evidence shows."}
    ]}
   ],
   apply:{intro:"Practise noticing lenses in the world around you. These tasks need only a news source you already use and a notes box.", tasks:[
     {t:"Find the lens in a news story", how:["Pick one news article or broadcast about relations between two or more countries.","Copy one or two sentences that explain why something happened.","Ask: does it stress power and threats, cooperation and rules, ideas and identity, money and inequality, or someone’s missing voice?","Note which sentences explain, which describe meanings and which judge."], write:"The story… The key sentences… The lens it seems to use… Explaining / understanding / judging…"},
     {t:"Draw your own map", how:["Think of a place you know well: your street, workplace or school.","Imagine two maps of it for two different jobs (for example, a fire-safety map and a map for a new visitor).","List what each map would leave out, and why that is fine for its job.","Write one sentence on what this suggests about IR theories."], write:"Map 1 is for… it leaves out… Map 2 is for… it leaves out… What this says about theories…"},
     {t:"One event, three names", how:["Choose a well-known historical event that has different names in different countries or languages (the 1962 crisis is one; you can look up others in an encyclopedia).","Write down each name and what it puts at the centre.","Note what each name might lead a reader to notice or overlook."], write:"The event… Name 1 and what it stresses… Name 2… What I noticed…"}
   ], proof:"Notes naming the lens used in one real news story, two imagined maps with what each leaves out, and one event with its different names."},
   read:[
    {book:"eirt", where:"Introduction “Getting Started with International Relations Theory” (Stephen McGlinchey, Rosie Walters and Dana Gold)", note:"Read it after this lesson: it explains why theory matters and how the rest of the book is organised."},
    {book:"eir", where:"Chapter 4 “International Relations Theory” (Dana Gold and Stephen McGlinchey)", note:"A quick tour of all the main theories; useful now for the big picture and again at the end of the unit."},
    {book:"ospol", where:"Chapter 14, section 14.5 “The Realist Worldview”, opening paragraphs", note:"Its first paragraphs explain how theories and “worldviews” help us understand state decisions."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u6-l2", title:"Realism: power, fear and survival", minutes:55,
   hook:{q:"Writing nearly 2,500 years ago about the long war between Athens and Sparta, the Athenian historian Thucydides named what he saw as its truest cause. What was it?", options:["A quarrel over a stolen temple treasure","The growth of Athens’ power and the fear it caused in Sparta","A trade ban that ruined Sparta’s farmers","A dispute between the two cities’ priests"], answer:1, reveal:"**The growth of Athens’ power and the fear it caused in Sparta.** Thucydides separated the immediate quarrels from that deeper cause. Realists have claimed him as an ancestor ever since, because power and fear are where their lens begins. This lesson shows how that idea grew into a family of theories, and where it struggles."},
   goals:[
     "Explain self-help and why realists think anarchy pushes states to seek power and security",
     "Tell classical realism (Morgenthau) from neorealism (Waltz)",
     "Trace the security dilemma step by step and recognise it in a real case",
     "Distinguish balancing from bandwagoning and defensive from offensive realism",
     "State realism’s main critiques and how realists reply"
   ],
   learn:[
    {h:"A neighbourhood with no police", body:[
      {lead:"Picture a neighbourhood where there are no police, no courts and no one to call if a neighbour breaks into your house."},
      "Most neighbours may be perfectly decent. But you can never be sure, and if you guess wrong, the cost could be terrible. So you fit stronger locks, perhaps team up with the family next door, and keep an eye on the person who has just bought a large dog. You are not evil. You are being careful in a place where no one else will protect you.",
      "That is the realist picture of world politics. Unit 5 introduced [[anarchy]]: the absence of any government above states (see {{anarchy-ir}}). Anarchy does not mean chaos. It means each state must rely on itself in the end. Realists call this [[self-help]]. They draw four conclusions from it:",
      {list:[
        "**States are the main actors**, because they hold most of the organised force.",
        "**Survival comes first.** A state that is conquered cannot pursue any other goal.",
        "**[[power|Power]] is the currency**, above all military power and the wealth that pays for it.",
        "**Trust is scarce.** You cannot know for certain what another government intends, today or in ten years."
      ]},
      "[[realism|Realism]] is not one theory but a family of theories that share these starting points. Its members disagree about **why** states seek power: because of human nature, or because of the anarchic system itself."
     ]},
    {h:"Classical realism: human nature and politics", body:[
      "Realists like to trace their lens back a long way. These thinkers did not call themselves realists; later scholars **claimed them as ancestors**, and each claim is debated:",
      {list:[
        "**Thucydides** (5th century BCE), *History of the Peloponnesian War*. In the famous Melian Dialogue, Athenian envoys tell the small island of Melos, in a well-known translation, that “the strong do what they can and the weak suffer what they must”. Many classicists point out that Thucydides also shows Athens’ arrogance leading to disaster, so he may be warning against this attitude as much as describing it.",
        "**The Arthashastra**, a treatise on statecraft traditionally attributed to Kautilya, an adviser at India’s Maurya court in the 4th century BCE (many scholars think the text was compiled over later centuries). Its “circle of states” advises a ruler that a neighbouring kingdom is a likely enemy and the kingdom beyond it a likely friend.",
        "**Niccolò Machiavelli**, *The Prince* (written 1513), on rulers who must sometimes act against ordinary morality to keep the state safe.",
        "**Thomas Hobbes**, *Leviathan* (1651), who described life without a government as a war of all against all, “solitary, poor, nasty, brutish, and short”."
      ]},
      "**[[classical-realism|Classical realism]]** took shape in the 20th century. Its central figure, {{hans-morgenthau|Hans Morgenthau}}, was a German-born Jewish legal scholar who left Europe as the Nazis rose and settled in the United States. His *Politics Among Nations* (1948) became the field’s best-known textbook. From its second edition (1954) it opens with six “principles of political realism”: among them, that politics, like society generally, is governed by laws rooted in human nature, and that leaders think and act in terms of “interest defined as power”.",
      "Morgenthau used the [[national-interest|national interest]] as a guide: leaders should pursue their country’s real interests prudently, and not crusade to remake the world in their own image. He also wrote that **prudence**, weighing the consequences of actions, is the supreme virtue in politics. This was not a call for ruthlessness. He was an early and outspoken critic of the US war in Vietnam, which he thought served no vital interest.",
      "E. H. Carr, a British historian and diplomat, made a similar case in *The Twenty Years’ Crisis* (1939): hopes for peace through law alone had ignored the realities of power."
     ]},
    {h:"Neorealism: it’s the structure", body:[
      "In 1979 the American scholar {{kenneth-waltz|Kenneth Waltz}} published *Theory of International Politics* and changed the conversation. Twenty years earlier, in *Man, the State, and War* (1959), he had sorted explanations of war into three “images”: human nature, the type of state, and the international system (Unit 5’s [[levels-of-analysis|levels of analysis]]). His new theory, called **[[neorealism]]** or **structural realism**, focused on the third.",
      "Waltz argued that you do not need to assume people are power-hungry. The **structure** of the system pushes states into similar behaviour, whatever their leaders are like. He defined that structure by three things:",
      {ol:[
        "**The ordering principle**: anarchy (no one is in charge).",
        "**The character of the units**: in anarchy, every state must handle its own security, so states end up doing broadly similar jobs (“like units”).",
        "**The distribution of capabilities**: how power is spread across the [[great-power|great powers]]."
      ]},
      "That third element is **[[polarity]]**. A world with two dominant powers is [[bipolarity|bipolar]], as in the Cold War; with several, [[multipolarity|multipolar]]. Waltz argued that bipolarity was the more stable, because two superpowers watching each other leave less room for miscalculation. Critics noted that his theory had not foreseen the peaceful end of that bipolar world.",
      {table:[
        ["","Classical realism","Neorealism"],
        ["Key figure","Morgenthau (1948)","Waltz (1979)"],
        ["Root cause","Human nature","The anarchic structure"],
        ["Main level","Individual and state","System"],
        ["Focus","Statecraft, prudence, the national interest","Patterns across the whole system"]
      ]}
     ]},
    {h:"The security dilemma", body:[
      "Here is realism’s most useful idea for everyday news. Go back to the neighbourhood. You buy a large dog **for protection**. Your neighbour sees a large dog and wonders whether you are planning something. So they buy two. Now you feel less safe than before.",
      "The [[security-dilemma|security dilemma]] (a term from John Herz in 1950) is exactly this trap: steps one state takes to make itself safer can make others feel less safe, so they respond, and in the end **everyone is less secure**, even though no one wanted conflict.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e2u6-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="20" width="148" height="60" rx="8" stroke-width="2"/><text x="82" y="45" text-anchor="middle">A arms for safety</text><text class="s" x="82" y="64" text-anchor="middle">ships, missiles, allies</text><rect class="d-gold" x="184" y="20" width="148" height="60" rx="8" stroke-width="2"/><text x="258" y="45" text-anchor="middle">B can’t read A</text><text class="s" x="258" y="64" text-anchor="middle">defence or attack?</text><rect class="d-rose" x="184" y="190" width="148" height="60" rx="8" stroke-width="2"/><text x="258" y="215" text-anchor="middle">B arms too</text><text class="s" x="258" y="234" text-anchor="middle">“just in case”</text><rect class="d-lup" x="8" y="190" width="148" height="60" rx="8" stroke-width="2"/><text x="82" y="215" text-anchor="middle">A feels less safe</text><text class="s" x="82" y="234" text-anchor="middle">and arms more</text><path class="d-ink" d="M158 50 L182 50" stroke-width="2" marker-end="url(#e2u6-l2-a)"/><path class="d-ink" d="M258 82 L258 188" stroke-width="2" marker-end="url(#e2u6-l2-a)"/><path class="d-ink" d="M182 220 L158 220" stroke-width="2" marker-end="url(#e2u6-l2-a)"/><path class="d-ink" d="M82 188 L82 82" stroke-width="2" marker-end="url(#e2u6-l2-a)"/><text x="170" y="130" text-anchor="middle">Both end up</text><text x="170" y="148" text-anchor="middle">less secure</text><text class="s" x="170" y="280" text-anchor="middle">No one has to want war for the spiral to turn.</text></svg>', alt:"Four boxes in a loop. A arms for safety; B cannot read whether this is defence or attack; B arms too, just in case; A feels less safe and arms more, which leads back to the start. In the middle: both end up less secure.", cap:"The security dilemma spiral. The trap is uncertainty: weapons that defend can usually also attack."},
      {ex:"Before 1914, Britain’s security depended on its navy controlling the seas around it. Germany began building a large modern fleet in the 1890s and 1900s, partly for prestige and to strengthen its hand in diplomacy. British leaders read the fleet as a direct threat, and after Britain launched the powerful new battleship HMS *Dreadnought* in 1906, both countries raced to build similar ships. Each step seemed defensive to the side taking it and menacing to the other. Historians still debate how much the race contributed to the war of 1914, but it is the textbook illustration of the spiral.", label:"Worked example: the naval race"},
      "Robert Jervis (1978) showed that the dilemma is milder when **defensive weapons can be told apart from offensive ones**, or when defence has the advantage. That is one reason arms-control talks often focus on which kinds of weapons are allowed, a topic Unit 8 covers under [[deterrence]] and [[arms-race|arms races]]."
     ]},
    {h:"Balance of power: defensive and offensive realism", body:[
      "If no one is in charge, what stops the strongest state from swallowing the rest? Realists answer: the [[balance-of-power|balance of power]]. When one state grows threatening, others **balance** against it, either by building up their own strength (internal balancing) or by forming alliances (external balancing).",
      "The alternative is **[[bandwagoning]]**: joining the rising power instead, hoping to share in its success or avoid its anger. Stephen Walt (*The Origins of Alliances*, 1987) found that states balance more often than they bandwagon, and that they balance against **threats** (power, nearness, offensive capability and apparent intentions taken together), not just against raw power.",
      "Realists then split over how much power states want:",
      {table:[
        ["","Defensive realism","Offensive realism"],
        ["Leading voice","Kenneth Waltz","John Mearsheimer"],
        ["States want","Enough power to be secure","As much power as they can get"],
        ["Expansion","Usually backfires: others balance","Rational when it can succeed"],
        ["Key text","*Theory of International Politics* (1979)","*The Tragedy of Great Power Politics* (2001)"]
      ]},
      "Waltz argued that a state’s first concern is to keep its position in the system, not to maximise power, because grabbing too much provokes others to unite against it. Mearsheimer replied that since you can never be sure of others’ intentions, the safest position is to be the strongest power in your own region.",
      "Both care about [[relative-gains|relative gains]]: not just “do we gain?” but “do we gain **more than them**?” Lesson 3 shows why this makes cooperation harder.",
      {tip:"A third branch, **[[neoclassical-realism|neoclassical realism]]** (named by Gideon Rose in 1998), keeps the system as the main driver but adds domestic factors, such as leaders’ perceptions and how much a government can raise from its society, to explain particular foreign policies."}
     ]},
    {h:"Where realism struggles", body:[
      "Realism is powerful and still widely used, but its critics raise serious points:",
      {list:[
        "**It missed big changes.** The historian John Lewis Gaddis (1992) noted that none of the major theories, realism included, foresaw that the Cold War would end peacefully, with a superpower letting its alliance dissolve.",
        "**It underplays lasting cooperation.** Former enemies such as France and Germany built the European Union; Southeast Asian states with long-standing disputes built ASEAN. Liberals and constructivists argue realism cannot fully explain such communities.",
        "**It leaves out what happens inside states**: elections, ideology, economic interests, bureaucracies. Neoclassical realists answer by adding some of these back in.",
        "**It can be self-fulfilling.** If leaders assume everyone is a threat, they may act in ways that create the threats they feared.",
        "**Whose “realism”?** Feminist scholars such as J. Ann Tickner argue that its picture of autonomous, power-seeking actors reflects one masculine ideal; postcolonial scholars note that it has little to say about empire, though empire shaped much of the world (Lesson 5)."
      ]},
      "Realists reply that they describe the world as it is, not as they would like it, and that wars, arms races and great-power rivalry keep returning. On Western Europe, many realists point out that its peace grew while a common Soviet threat and a US-led alliance gave old rivals strong reasons to stick together. Many realists, Morgenthau and Waltz among them, used the theory to argue **against** wars they saw as reckless.",
      {key:"Realism’s strength is explaining recurring competition and danger. Its blind spots are change, cooperation, ideas and the view from below."}
     ]},
    {h:"The 1962 crisis through a realist lens", body:[
      "A realist sees the crisis as a struggle over the **balance of power**. In 1962 the United States had far more long-range nuclear missiles than the Soviet Union and had placed missiles in Turkey. Placing missiles in Cuba was a quick, cheap way for the Soviets to narrow that gap and to protect an ally. For the United States, nuclear missiles on an island about 150 km from its coast changed the balance in its own region, which no great power accepts lightly.",
      "The ending also looks realist: two great powers, each able to destroy the other, bargained. The Soviet missiles left Cuba; the US promised not to invade and quietly removed its missiles from Turkey. **Deterrence** and hard interests, not trust, produced the deal.",
      "**What the lens misses:** the misperceptions and near-accidents that nearly turned the crisis into war (the spy plane shot down on 27 October was downed by Soviet forces in Cuba without a direct order from Moscow); the personal judgement of individual leaders; and Cuba itself. Cuba appears in this account mainly as a location, yet its government had its own fears and goals, a point the postcolonial lens takes up in Lesson 5.",
      {terms:["realism","classical-realism","neorealism","self-help","national-interest","security-dilemma","balance-of-power","bandwagoning","defensive-realism","offensive-realism","relative-gains","neoclassical-realism"]}
     ]}
   ],
   try:[
    {id:"e2u6-l2-x1", type:"mcq", q:"Two neighbouring countries have been at peace for decades. Each still keeps an army and watches the other’s military spending closely. What would a realist say this shows?", options:[
      {t:"Under anarchy no one guarantees a state’s survival, so even peaceful states prepare for the worst: that is self-help.", ok:true, why:"Right. Realists say watchfulness follows from the structure of the system, not from hostility. Peace and preparation can go together."},
      {t:"The two countries must secretly be planning to attack each other.", why:"Realism doesn’t claim that. Preparing for the worst is prudent even when no attack is planned, which is exactly what makes the security dilemma tragic."},
      {t:"There must be a world government that requires them to keep armies.", why:"There is no world government; that absence (anarchy) is the realist starting point."},
      {t:"Armies are kept only for national pride and play no role in security.", why:"Pride can matter, but realists explain armies mainly by security under anarchy."}
    ]},
    {id:"e2u6-l2-x2", type:"sort", q:"Does each claim sound more like classical realism or neorealism?", buckets:["Classical realism","Neorealism"], items:[
      {t:"States seek power because human beings have a drive for power.", b:0, why:"Rooting power politics in human nature is the classical realist move, as in Morgenthau."},
      {t:"Whatever their leaders are like, states in anarchy behave in similar ways.", b:1, why:"This is Waltz’s structural argument: the system, not personality, pushes states into similar behaviour."},
      {t:"Wise leaders guide policy by the national interest and by prudence.", b:0, why:"Statecraft, prudence and the national interest are Morgenthau’s themes."},
      {t:"A world with two superpowers is more stable than one with several great powers.", b:1, why:"Waltz’s argument about polarity is a claim about the distribution of capabilities in the system."},
      {t:"To explain world politics, look at how power is distributed across the system.", b:1, why:"The distribution of capabilities is one of Waltz’s three elements of structure."},
      {t:"Leaders should not crusade to remake the world in their own image.", b:0, why:"Morgenthau warned against ideological crusades, arguing for a modest, interest-based foreign policy."}
    ]},
    {id:"e2u6-l2-x3", type:"order", q:"Put the steps of a security dilemma spiral in order.", items:[
      {t:"State A feels uncertain about its neighbours and builds up its forces for defence.", why:"The spiral starts with a step meant to increase safety."},
      {t:"State B sees the build-up but can’t tell whether it is for defence or attack.", why:"Uncertainty about intentions is the heart of the dilemma."},
      {t:"State B builds up its own forces, just in case.", why:"B’s response is also meant defensively."},
      {t:"State A sees B’s build-up as a new threat and arms further.", why:"The spiral turns again: each side reads the other’s defence as danger."},
      {t:"Both states spend more and feel less secure than when they started.", why:"The tragic outcome: no one wanted conflict, yet everyone is worse off."}
    ]},
    {id:"e2u6-l2-x4", type:"match", q:"Match each thinker to the idea most associated with them.", pairs:[
      ["Thucydides","A war caused by one power’s growth and the fear it created","His history of the Peloponnesian War is realism’s favourite ancient source."],
      ["Hans Morgenthau","Interest defined as power, pursued with prudence","*Politics Among Nations* (1948) is the classic of classical realism."],
      ["Kenneth Waltz","The structure of the system shapes how states behave","*Theory of International Politics* (1979) founded neorealism."],
      ["John Mearsheimer","Great powers seek as much power as they can get","*The Tragedy of Great Power Politics* (2001) set out offensive realism."],
      ["John Herz","Seeking security can make others, and yourself, less secure","Herz named the security dilemma in 1950."]
    ]},
    {id:"e2u6-l2-x5", type:"sort", q:"Invented example: a large state, Norland, is growing fast and stationing troops near its borders. Is each neighbour balancing or bandwagoning?", buckets:["Balancing","Bandwagoning"], items:[
      {t:"Eastmark doubles its defence budget and buys air-defence systems.", b:0, why:"Building up your own strength against a rising threat is internal balancing."},
      {t:"Southvale signs a military alliance with two other worried neighbours.", b:0, why:"Teaming up against the rising power is external balancing."},
      {t:"Westria joins Norland’s new alliance, hoping to share in its success.", b:1, why:"Siding with the rising power is bandwagoning."},
      {t:"Lakeland gives Norland military bases in return for a promise not to be attacked.", b:1, why:"Accommodating the threat to avoid its anger is a form of bandwagoning."},
      {t:"Rivermouth invites a distant great power to station forces on its soil to offset Norland.", b:0, why:"Bringing in an outside power to counter the threat is balancing."}
    ]},
    {id:"e2u6-l2-x6", type:"mcq", q:"Which of these is a critique of realism raised by its opponents, rather than a claim realists make?", options:[
      {t:"It did not foresee that the Cold War would end peacefully, with one superpower letting its alliance dissolve.", ok:true, why:"Right. Gaddis (1992) made this point about all the major theories, and it is often aimed at realism in particular."},
      {t:"Under anarchy, states must ultimately rely on themselves.", why:"That is self-help, a core realist claim, not a critique of realism."},
      {t:"States balance against threatening powers.", why:"That is the realist balance-of-power idea."},
      {t:"Uncertainty about intentions makes cooperation hard.", why:"That is a realist argument, central to the security dilemma."}
    ]},
    {id:"e2u6-l2-x7", type:"spot", q:"Read this opinion piece about realism. Tap the claims that misrepresent realism or go beyond the evidence.", ask:"misleading or unsupported", parts:[
      "Realism has a long history. ",
      {t:"Its followers see anarchy, the lack of a world government, as the starting point of world politics.", flag:false, why:"Fine. That is an accurate summary of realism’s starting point."},
      " ",
      {t:"Realists believe war is good and should be encouraged.", flag:true, why:"Realists describe why wars happen; they don’t praise war. Morgenthau and Waltz both argued against wars they saw as reckless."},
      " ",
      {t:"Waltz argued that the structure of the system shapes how states behave.", flag:false, why:"Fine. That is neorealism’s central claim."},
      " ",
      {t:"Thucydides proudly called himself the first realist.", flag:true, why:"Thucydides never used the word. Later scholars claimed him as an ancestor, and some classicists dispute that reading."},
      " ",
      {t:"Because realism explains the naval race before 1914, it explains every event in world politics.", flag:true, why:"Explaining one case well doesn’t mean a theory explains everything. Realism has well-known blind spots, such as lasting cooperation and peaceful change."}
    ]}
   ],
   apply:{intro:"Try the realist lens on the world around you. Keep your notes private; there are no right or wrong conclusions, only clear reasoning.", tasks:[
     {t:"Spot a security dilemma in the news", how:["Find a news report about a country increasing its military spending, buying new weapons or joining an alliance.","Write down how the country itself describes the step (usually “defensive”).","Find how a neighbouring government or commentator describes the same step.","Explain in two or three sentences how this could become a spiral, and one thing that might stop it."], write:"The step… How the country describes it… How others see it… How a spiral could start… What might stop it…"},
     {t:"Balancing or bandwagoning in history", how:["Choose a historical alliance from any region (an encyclopedia or a library website is enough).","Note who joined it and what threat, if any, they were responding to.","Decide whether members were mainly balancing against a threat or bandwagoning with a strong power, and give your reason."], write:"The alliance… Members… The threat… Balancing or bandwagoning, and why…"},
     {t:"Realism in everyday life", how:["Think of a situation with no referee: a group of neighbours sharing a parking area, or shops competing on one street.","Describe how a realist would predict people behave there.","Note one way the prediction might be wrong, and why."], write:"The situation… What a realist would expect… Where that might be wrong…"}
   ], proof:"Notes analysing one real security dilemma (both sides’ descriptions and how a spiral could start), one historical alliance classified as balancing or bandwagoning, and an everyday realist prediction with its limits."},
   read:[
    {book:"eirt", where:"Chapter 1 “Realism” (Sandrina Antunes and Isabel Camisão)", note:"Read it after this lesson: it adds the debate between realism’s branches and applies realism to the Islamic State group."},
    {book:"eirt", where:"Chapter 19 “A Contemporary Perspective on Realism” (Felix Rösch and Richard Ned Lebow)", note:"For going further: a newer reading of classical realism, which presents thinkers such as Morgenthau as more concerned with ethics than the label “power politics” suggests."},
    {book:"ospol", where:"Chapter 14, section 14.5 “The Realist Worldview”", note:"A gentle introduction to realism, game theory and polarity, with US examples."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u6-l3", title:"Liberalism: interdependence and institutions", minutes:55,
   hook:{q:"In 1910 a British writer, Norman Angell, published a best-selling book about war between Europe’s rich industrial powers. What did it argue?", options:["War between them had become impossible","Conquest would no longer pay, even for the winner","Any war would be over within weeks","Only a world government could prevent war"], answer:1, reveal:"**That conquest would no longer pay, even for the winner.** *The Great Illusion* argued that trade and finance had tied economies together so tightly that war would ruin victors as well as losers. Angell is often misremembered as saying war was impossible, which he denied; when war came in 1914, its enormous costs to winners and losers alike seemed to bear out his warning. This lesson follows the liberal idea that ties between societies change how states behave."},
   goals:[
     "Explain liberalism’s starting points and how they differ from realism’s",
     "Describe complex interdependence (Keohane and Nye) and how interdependence can also be a source of power",
     "Use the prisoner’s dilemma to explain why institutions help cooperation",
     "Calculate and compare absolute and relative gains",
     "Explain the democratic peace, the evidence for it and its main critiques"
   ],
   learn:[
    {h:"Neighbours who share a well", body:[
      {lead:"Go back to the neighbourhood with no police, but add one detail: everyone draws water from the same well."},
      "Now the neighbours have a reason to talk. They agree on a timetable, fix the pump together and keep a notebook of who has paid for repairs. Nobody forces them. The well, the notebook and the habit of meeting change what is sensible: cheating on the timetable would cost you your neighbours’ cooperation next week.",
      "That is the heart of **[[liberalism-ir|liberalism]]** in IR. Liberals accept that there is no world government. But they argue that cooperation is possible and common, and that it can grow. Three things make the difference:",
      {list:[
        "**Interdependence**: trade, investment, travel and communication tie societies together and raise the cost of conflict.",
        "**Institutions**: rules and organisations make promises easier to keep.",
        "**What happens inside states**: governments answer to their own societies, and democracies may behave differently towards each other."
      ]},
      "Liberals also see many actors beyond states: [[intergovernmental-organization|intergovernmental organisations]], [[ngo|NGOs]] and [[multinational-corporation|multinational corporations]] (introduced in Unit 5).",
      {warn:"“Liberal” here names a theory of world politics. It is not the same as a party called liberal in any country, and “neoliberal institutionalism” in IR (below) is a different idea from “neoliberal” free-market economic policy, though the words are easily confused."}
     ]},
    {h:"Roots: Kant, Angell and Wilson", body:[
      "Like realists, liberals claim ancestors:",
      {list:[
        "**Immanuel Kant**, the German philosopher, in *Perpetual Peace* (1795), proposed three conditions for lasting peace: states with representative (“republican”) constitutions, a federation of free states, and a right of visitors to be treated without hostility (“universal hospitality”).",
        "**Norman Angell**, *The Great Illusion* (1910): economic interdependence makes conquest unprofitable.",
        "**Woodrow Wilson**, US president, whose “Fourteen Points” speech (January 1918) called for open diplomacy, freer trade, reduced armaments and a general association of nations, which became the League of Nations."
      ]},
      "This tradition is sometimes called **liberal internationalism**. After the League failed to stop the aggression of the 1930s, critics called its supporters “idealists” (Lesson 1). Liberal theory returned in a more cautious, evidence-based form from the 1970s, and that is what most IR courses mean by liberalism today."
     ]},
    {h:"Complex interdependence", body:[
      "In *Power and Interdependence* (1977), the American scholars Robert Keohane and Joseph Nye described an **ideal type** (a simplified model that real cases can be compared against) they called [[complex-interdependence|complex interdependence]], with three features:",
      {ol:[
        "**Multiple channels** connect societies: not only governments, but firms, banks, scientists, activists and officials talking directly to their counterparts.",
        "**No fixed hierarchy of issues**: military security does not always top the agenda; trade, money, energy and the environment can matter as much.",
        "**Military force plays little role** among the countries and on the issues where complex interdependence holds."
      ]},
      "They did not claim the whole world worked this way. They said relations between some countries, such as long-standing allies with dense trade, came close to it, while others stayed closer to the realist picture.",
      "Keohane and Nye also made a point realists liked: interdependence is often **unequal**, and unequal dependence is a source of power. They distinguished **sensitivity** (how quickly and how much a change abroad hurts you) from **vulnerability** (how costly it is to adjust, if you can adjust at all).",
      {ex:"In October 1973, Arab oil-exporting states cut production and placed an embargo on the United States and some other countries that supported Israel in that month’s war. Oil prices roughly quadrupled within months. Importing countries were highly **sensitive**. Their **vulnerability** depended on what they could do about it: countries with other energy sources or reserves adjusted more easily than those without. Interdependence did not end conflict; it changed which tools of pressure mattered.", label:"Worked example: the 1973 oil crisis"}
     ]},
    {h:"Institutions: making promises easier to keep", body:[
      "Why cooperate at all, if no one can enforce a deal? Liberal scholars borrowed a puzzle from game theory (the study of choices where each side’s best move depends on what the other does): the [[prisoners-dilemma|prisoner’s dilemma]]. Here is an arms-control version with invented points (higher is better):",
      {fig:'<svg viewBox="0 0 340 290"><rect class="d-panel" x="90" y="10" width="120" height="40" stroke-width="1.5"/><text x="150" y="35" text-anchor="middle">B limits</text><rect class="d-panel" x="210" y="10" width="120" height="40" stroke-width="1.5"/><text x="270" y="35" text-anchor="middle">B builds</text><rect class="d-panel" x="10" y="50" width="80" height="80" stroke-width="1.5"/><text x="50" y="95" text-anchor="middle">A limits</text><rect class="d-panel" x="10" y="130" width="80" height="80" stroke-width="1.5"/><text x="50" y="175" text-anchor="middle">A builds</text><rect class="d-sage" x="90" y="50" width="120" height="80" stroke-width="1.5"/><text x="150" y="85" text-anchor="middle">A 3 · B 3</text><text class="s" x="150" y="105" text-anchor="middle">both save money</text><rect class="d-gold" x="210" y="50" width="120" height="80" stroke-width="1.5"/><text x="270" y="85" text-anchor="middle">A 0 · B 5</text><text class="s" x="270" y="105" text-anchor="middle">A exposed</text><rect class="d-gold" x="90" y="130" width="120" height="80" stroke-width="1.5"/><text x="150" y="165" text-anchor="middle">A 5 · B 0</text><text class="s" x="150" y="185" text-anchor="middle">B exposed</text><rect class="d-rose" x="210" y="130" width="120" height="80" stroke-width="1.5"/><text x="270" y="165" text-anchor="middle">A 1 · B 1</text><text class="s" x="270" y="185" text-anchor="middle">costly arms race</text><text class="s" x="170" y="238" text-anchor="middle">Whatever B does, A scores more by building</text><text class="s" x="170" y="256" text-anchor="middle">(5 beats 3, and 1 beats 0). The same is true</text><text class="s" x="170" y="274" text-anchor="middle">for B. So both build and get 1, not 3.</text></svg>', alt:"A two-by-two grid. Rows: A limits, A builds. Columns: B limits, B builds. Both limit: A 3, B 3, both save money. A limits, B builds: A 0, B 5. A builds, B limits: A 5, B 0. Both build: A 1, B 1, a costly arms race. A note explains that whatever B does, A scores more by building, and the same for B, so both build and get 1 instead of 3.", cap:"The prisoner’s dilemma. Each side’s best move on its own leads to an outcome that is worse for both."},
      "Played once, the dilemma looks hopeless. But states meet again and again. The political scientist Robert Axelrod (*The Evolution of Cooperation*, 1984) showed that when players expect to meet repeatedly, cooperating and punishing cheating can win. He called the expectation of future meetings **the shadow of the future**.",
      "**[[neoliberal-institutionalism|Neoliberal institutionalism]]**, set out by Robert Keohane in *After Hegemony* (1984), argues that **institutions** lengthen that shadow. They do not need to be a world government. They work by:",
      {list:[
        "**Providing information**: reports, inspections and monitoring show who is keeping the rules.",
        "**Lowering the costs of making deals**: a standing forum means you don’t negotiate from scratch each time.",
        "**Linking issues and building reputations**: a state that cheats in one area may lose trust in others."
      ]},
      "Some international institutions are older than most of today’s states. The International Telegraph Union (1865, now the International Telecommunication Union) and the Universal Postal Union (1874) exist because messages and letters cross borders; they are why an international letter or phone call usually just works.",
      {tip:"Scholars often use the word **regime** for the principles, norms, rules and decision-making procedures in one issue area (Stephen Krasner’s 1982 definition), for example the rules on international aviation or on the ozone layer."}
     ]},
    {h:"Absolute versus relative gains", body:[
      "Realists answered with a sharp objection. In 1988 Joseph Grieco argued that states worry not only about **[[absolute-gains|absolute gains]]** (am I better off than before?) but about **[[relative-gains|relative gains]]** (am I better off **compared with them**?). A deal that helps both sides but helps a rival more may still be rejected, because today’s economic gain could become tomorrow’s military edge.",
      {ex:"Invented figures. Before a trade deal, countries A and B each have an income of 100. After it, A has 110 and B has 130. **Absolute gains:** both gained (A +10, B +30), so a liberal expects both to welcome the deal. **Relative gains:** A’s share of their combined income falls from 100 ÷ 200 = 50% to 110 ÷ 240 ≈ 46%. If A sees B as a rival, a realist expects A to hesitate.", label:"Worked example: the same deal, two ways to score it"},
      "The debate led to a useful middle ground. Relative gains matter most **between rivals and on security issues**; they matter less between close allies. Duncan Snidal (1991) added that they also matter less when many countries take part, because no single rival gains much."
     ]},
    {h:"The democratic peace", body:[
      "Liberalism’s most famous empirical claim is the [[democratic-peace-theory|democratic peace]]: **established democracies have very rarely, if ever, fought wars against each other**. In 1988 Jack Levy wrote that this “comes as close as anything we have to an empirical law in international relations”. Michael Doyle (1983) linked it to Kant’s ideas.",
      "Note what the claim says and does not say. It is about **pairs** of democracies. Democracies have fought many wars against non-democracies, and the evidence that democracies are more peaceful **in general** is much weaker and disputed.",
      "Researchers offer two main explanations:",
      {list:[
        "**Norms**: democracies settle disputes at home by compromise and voting, and extend that habit to other democracies they trust.",
        "**Institutions**: elected leaders must win public and parliamentary support, which slows decisions and makes costly wars risky for them."
      ]},
      "Critics raise five serious points:",
      {ol:[
        "**Definitions.** Results depend on what counts as a “democracy” and a “war”. Finland, a democracy, fought alongside Germany against the Soviet Union from 1941, and Britain declared war on Finland in December 1941, though there was almost no fighting between them. Scholars argue over whether such cases count.",
        "**Small numbers.** Before the 20th century there were few democracies, so peace between them may be partly chance.",
        "**Other causes.** Henry Farber and Joanne Gowa (1995) argued that during the Cold War democracies shared a common enemy, which could explain their peace. Alliances, wealth and trade may matter too: correlation is not causation (see [[correlation]] and [[causation]]).",
        "**Covert action.** Democracies have used secret operations against elected or parliamentary governments, such as the US-backed overthrow of Mohammad Mosaddegh in Iran (1953) and of Jacobo Árbenz in Guatemala (1954). Critics say this shows the peace is narrower than it looks.",
        "**Democratising states.** Edward Mansfield and Jack Snyder (1995) found that countries in the middle of an unstable transition to democracy can be especially prone to war."
      ]},
      {key:"The democratic peace is one of the strongest patterns in IR research, but why it holds, and how far, is still argued over."}
     ]},
    {h:"Critiques, and the 1962 crisis through a liberal lens", body:[
      "Beyond the democratic peace debate, liberalism faces three broad critiques. Realists such as Mearsheimer argue that institutions mostly reflect the interests of powerful states and have little independent effect. Marxist and postcolonial critics argue that the “liberal international order” has worked best for rich countries and was built while much of the world was still colonised. And interdependence can create new conflicts, not only reduce old ones. Liberals reply that states keep creating, joining and using institutions even when they could walk away, which would make little sense if institutions had no effect.",
      "**The 1962 crisis.** At first sight it is a hard case for liberalism: two rivals with almost no trade between them, at the edge of nuclear war. But a liberal sees important things. Communication mattered: back-channel contacts and public letters let each leader understand what the other could accept. The [[united-nations|United Nations]] gave a stage for the US and Soviet ambassadors’ public debate in the [[security-council|Security Council]] and a mediator in the acting Secretary-General, U Thant.",
      "Most of all, a liberal points to what came **after**: the hotline (1963), the Partial Test Ban Treaty (1963) and, later, the [[non-proliferation-treaty|Nuclear Non-Proliferation Treaty]] (opened for signature in 1968). Rivals who had nearly destroyed each other began building **institutions** to make the next crisis less dangerous.",
      "**What the lens misses:** the crisis was resolved largely by threats and a secret bargain between two leaders, which looks more realist; and liberal accounts say little about how Cubans, or anyone outside the superpowers, experienced it.",
      {terms:["liberalism-ir","complex-interdependence","prisoners-dilemma","neoliberal-institutionalism","absolute-gains","relative-gains","democratic-peace-theory"]}
     ]}
   ],
   try:[
    {id:"e2u6-l3-x1", type:"mcq", q:"Two long-standing allies trade heavily. Their ministries, firms, universities and city governments all work directly with each other, and neither would consider using force in a dispute over fishing rights. Which idea fits best?", options:[
      {t:"Complex interdependence: many channels, no fixed issue hierarchy, and little role for military force.", ok:true, why:"Right. These are Keohane and Nye’s three features, and relations like this are the cases they said come closest to the ideal type."},
      {t:"The security dilemma: each is arming against the other.", why:"Nothing in the description suggests arming or fear. The security dilemma is a realist idea about uncertainty and arms build-ups."},
      {t:"Bandwagoning: one is joining the other out of fear.", why:"Bandwagoning means siding with a threatening power. Here the relationship is cooperative and dense, not fearful."},
      {t:"Anarchy has ended between them because a world government now rules them.", why:"There is no world government; they are still sovereign states. Complex interdependence describes cooperation within anarchy."}
    ]},
    {id:"e2u6-l3-x2", type:"mcq", q:"In the prisoner’s dilemma diagram, why do both states end up building arms even though both would prefer the 3·3 outcome?", options:[
      {t:"Whatever the other side does, each side scores more by building, so building is each one’s best move on its own.", ok:true, why:"Right. Building gives 5 instead of 3 if the other limits, and 1 instead of 0 if the other builds. Without trust or enforcement, both build and get only 1."},
      {t:"Because building arms always gives the highest score of all.", why:"Not always: if both build, each gets 1, which is less than the 3 they would get by both limiting."},
      {t:"Because one side is irrational and wants an arms race.", why:"The point of the dilemma is that both sides are acting rationally. The bad outcome comes from the situation, not from irrationality."},
      {t:"Because limiting arms is against international law.", why:"Nothing in the game involves law. The problem is the lack of a way to make promises to limit arms credible."}
    ]},
    {id:"e2u6-l3-x3", type:"number", q:"Invented figures. Countries C and D each start with an income of 200. A deal raises C to 230 and D to 270. What share of the two countries’ combined income does C have after the deal? Give a percentage to the nearest whole number.", answer:46, tol:0.6, unit:"%", why:"Combined income after the deal: 230 + 270 = 500. C’s share: 230 ÷ 500 = 0.46 = 46%. Before the deal it was 200 ÷ 400 = 50%. So C gained in absolute terms (+30) but lost relative position, which is exactly the situation where a realist expects hesitation.", wrongs:[
      {v:50, tol:0.6, why:"50% was C’s share before the deal (200 ÷ 400). The question asks about after the deal."},
      {v:54, tol:0.6, why:"54% is D’s share (270 ÷ 500). C’s share is 230 ÷ 500."},
      {v:15, tol:0.6, why:"15% is C’s growth (30 ÷ 200), an absolute gain. The question asks for C’s share of the combined total."},
      {v:30, tol:0.6, why:"30 is C’s gain in income units, not its share of the combined income."}
    ], hint2:"Add the two incomes after the deal, then divide C’s income by that total."},
    {id:"e2u6-l3-x4", type:"sort", q:"Is each official reasoning mainly about absolute gains or relative gains?", buckets:["Absolute gains","Relative gains"], items:[
      {t:"“The deal adds jobs and income here. That’s what matters.”", b:0, why:"The official asks only whether their own country gains."},
      {t:"“They will gain three times as much as we do, and that money could fund their army.”", b:1, why:"Comparing gains with a rival, and worrying about future power, is relative-gains thinking."},
      {t:"“Every member of the agreement is better off than without it.”", b:0, why:"This looks at whether each party gains compared with no deal."},
      {t:"“We can’t accept anything that narrows our technological lead over them.”", b:1, why:"The concern is position compared with a rival, not the size of one’s own gain."},
      {t:"“Our exports will grow, even if theirs grow faster.”", b:0, why:"Accepting that the other grows faster shows the official cares about absolute gains."}
    ]},
    {id:"e2u6-l3-x5", type:"spot", q:"A blog post on the democratic peace. Tap the claims that overstate or misstate the research.", ask:"overstated or wrong", parts:[
      "The democratic peace is a major finding in IR. ",
      {t:"It holds that established democracies have very rarely, if ever, fought wars against each other.", flag:false, why:"Fine. That is the standard statement of the dyadic claim."},
      " ",
      {t:"This proves that democracies never fight any wars at all.", flag:true, why:"Wrong. The claim concerns pairs of democracies. Democracies have fought many wars against non-democracies."},
      " ",
      {t:"Some scholars explain it through shared norms of compromise, others through elected leaders’ need for public support.", flag:false, why:"Fine. Those are the two main explanations."},
      " ",
      {t:"Because democracies are peaceful with each other, spreading democracy by force is guaranteed to bring peace.", flag:true, why:"The research does not show this. Mansfield and Snyder found that unstable transitions can raise the risk of war, and the theory says nothing about imposing democracy by force."},
      " ",
      {t:"Critics question how “democracy” and “war” are defined.", flag:false, why:"Fine. Definitions are one of the main debates."},
      " ",
      {t:"Since democracies and peace go together, democracy must be the only cause.", flag:true, why:"Correlation isn’t causation. Critics point to alliances, a shared enemy during the Cold War, wealth and trade as other possible causes."}
    ]},
    {id:"e2u6-l3-x6", type:"mcq", q:"An environmental agreement sets up a secretariat that collects each country’s emissions reports, publishes them and reviews them every year. According to neoliberal institutionalism, why does this help cooperation?", options:[
      {t:"It provides information about who is keeping the rules, which makes cheating easier to detect and promises more credible.", ok:true, why:"Right. Monitoring and transparency are among the main ways institutions help states cooperate without a world government."},
      {t:"It gives the secretariat an army to punish countries that break the rules.", why:"Secretariats like this have no armies. Institutions work mainly through information, reputation and repeated dealings."},
      {t:"It removes anarchy, because the secretariat is now a world government.", why:"A secretariat is not a government above states. Neoliberal institutionalists accept anarchy and explain cooperation within it."},
      {t:"It guarantees that every country gains equally from the agreement.", why:"Institutions don’t guarantee equal gains. Disputes about who gains more are exactly what realists highlight."}
    ]},
    {id:"e2u6-l3-x7", type:"match", q:"Match each thinker or text to its liberal idea.", pairs:[
      ["Kant, *Perpetual Peace* (1795)","Representative government, a federation of free states and hospitality to visitors","Kant’s three conditions for lasting peace."],
      ["Angell, *The Great Illusion* (1910)","Conquest no longer pays in an interdependent economy","Angell’s argument about the economic costs of war."],
      ["Keohane and Nye (1977)","Many channels between societies and a small role for force","Their ideal type of complex interdependence."],
      ["Keohane, *After Hegemony* (1984)","Institutions help states cooperate by providing information","The core of neoliberal institutionalism."],
      ["Doyle (1983)","Liberal states keep a separate peace with each other","Doyle linked the democratic peace to Kant."]
    ]}
   ],
   apply:{intro:"Look for liberal ideas at work in your everyday life and in the news. Nothing here needs an account or a purchase.", tasks:[
     {t:"Trace three things you own", how:["Choose three everyday items: a phone, a piece of clothing, a food product.","Check the label, packaging or the maker’s website for where each was made or grown, and where its parts or ingredients came from if you can find out.","List every country involved and note one way a dispute between two of them could affect you."], write:"Item 1, where it came from… Item 2… Item 3… Countries involved… How a dispute could affect me…"},
     {t:"Find an institution that just works", how:["Think of something cross-border you used recently: an international letter or parcel, a phone call abroad, a flight, a payment in another currency.","Look up which international organisation or agreement sets the rules for it (for example, the Universal Postal Union for mail).","Write what would be harder if that institution did not exist."], write:"What I used… The institution behind it… What would be harder without it…"},
     {t:"Score a deal two ways", how:["Find a news story about a trade, investment or technology agreement between two countries.","Write down what each side says it gains.","Explain how a liberal (absolute gains) and a realist (relative gains) might judge the deal differently."], write:"The deal… What each side gains… The liberal view… The realist view…"}
   ], proof:"Notes tracing three items to the countries involved, one cross-border institution and what it makes possible, and a real agreement judged from both absolute- and relative-gains viewpoints."},
   read:[
    {book:"eirt", where:"Chapter 2 “Liberalism” (Jeffrey W. Meiser)", note:"Read it after this lesson: it adds more on liberalism’s core ideas and applies the theory to US–Mexico relations in the early 20th century."},
    {book:"ospol", where:"Chapter 14, section 14.6 “The Liberal and Social Worldview”", note:"A gentle overview of liberalism, collective security and complex interdependence. It calls NATO an example of collective security. NATO itself calls its mutual-defence pledge (Article 5) “collective defence”, and many scholars keep “collective security” for systems that include every state, possible aggressors too, as the League and the UN aimed to."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u6-l4", title:"Constructivism and the English School", minutes:55,
   hook:{q:"The United Kingdom has more nuclear weapons than North Korea. Yet US governments have long worried far more about North Korea’s. Which explanation would a constructivist give first?", options:["North Korea’s weapons are technically more advanced","The two countries are seen as a friend and an enemy","British missiles cannot reach the United States","Weapons only count if they are tested often"], answer:1, reveal:"**Friend and enemy.** Alexander Wendt made this point in 1995: British weapons worry the United States far less than a handful of North Korean ones, because the British are friends and North Korea is not, and friendship or enmity rests on shared understandings. The weapons are physical facts; what they **mean** depends on the relationship. This lesson is about that idea, and about the English School, which asks how states form a society."},
   goals:[
     "Explain constructivism’s core claim that ideas, identities and norms shape interests and power",
     "Use Wendt’s “anarchy is what states make of it” and his three cultures of anarchy",
     "Trace a norm through emergence, cascade and internalisation",
     "Tell an international system from an international society, in the English School’s sense",
     "State the main critiques of both approaches"
   ],
   learn:[
    {h:"Same object, different meaning", body:[
      {lead:"A raised hand means “I have a question” in a classroom, “I bid” at an auction and “stop” to traffic. The hand is the same; the meaning comes from shared rules."},
      "Much of social life works like this. A piece of paper becomes money because people treat it as money; a line on a map becomes a border because governments and neighbours treat it as one. The sociology units called this [[social-construction|social construction]]: things that are real and powerful because people share an understanding of them.",
      "[[constructivism|Constructivism]] brings that idea to world politics. The American scholar Nicholas Onuf introduced the term to IR in *World of Our Making* (1989), and Alexander Wendt’s work made it famous. Its core claims:",
      {list:[
        "**Ideas matter as much as material things.** Weapons, wealth and borders matter, but what they mean depends on shared understandings.",
        "**Identities shape interests.** What a state wants depends on who it thinks it is (a great power, a neutral country, a member of a region, a former colony). This is [[identity-ir|identity]] in IR.",
        "**[[norm|Norms]] shape behaviour.** Shared expectations of proper conduct make some actions normal and others unthinkable.",
        "**Agents and structures make each other.** States act within shared rules, and by acting they reproduce or change those rules."
      ]},
      "Constructivism is often described as an **approach** rather than one theory: it tells you where to look (ideas, identities, norms) without predicting which ideas will win."
     ]},
    {h:"Anarchy is what states make of it", body:[
      "In 1992 Wendt published an article in the journal *International Organization* with a title that became a slogan: “Anarchy is What States Make of It”. Realists and liberals both treated [[anarchy]] as a fixed fact with fixed effects. Wendt replied that anarchy alone tells you very little. Self-help, he argued, is not built into anarchy; it develops when states treat each other as threats.",
      "In *Social Theory of International Politics* (1999) he described three “cultures” of anarchy, named after three philosophers:",
      {fig:'<svg viewBox="0 0 340 296"><rect class="d-rose" x="20" y="10" width="300" height="72" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Hobbesian culture</text><text x="170" y="54" text-anchor="middle">Others are enemies</text><text class="s" x="170" y="72" text-anchor="middle">survival by force; no limits on violence</text><rect class="d-gold" x="20" y="102" width="300" height="72" rx="8" stroke-width="2"/><text x="170" y="126" text-anchor="middle">Lockean culture</text><text x="170" y="146" text-anchor="middle">Others are rivals</text><text class="s" x="170" y="164" text-anchor="middle">compete, but accept each other’s right to exist</text><rect class="d-sage" x="20" y="194" width="300" height="72" rx="8" stroke-width="2"/><text x="170" y="218" text-anchor="middle">Kantian culture</text><text x="170" y="238" text-anchor="middle">Others are friends</text><text class="s" x="170" y="256" text-anchor="middle">disputes settled without war; mutual help</text><text class="s" x="170" y="288" text-anchor="middle">All three are anarchy: no world government.</text></svg>', alt:"Three stacked boxes. Hobbesian culture: others are enemies, survival by force, no limits on violence. Lockean culture: others are rivals who compete but accept each other’s right to exist. Kantian culture: others are friends who settle disputes without war and help each other. A note says all three are anarchy, with no world government.", cap:"Wendt’s three cultures of anarchy. The structure is the same; the shared understanding is different, so behaviour is different."},
      "Wendt argued that the modern states system has been mostly **Lockean**, with states rarely wiped off the map, and that some regions have moved towards a **Kantian** culture. That is how constructivists explain why France and Germany, enemies in three wars between 1870 and 1945, now find war between them unthinkable, although both are still armed.",
      {key:"For constructivists, the same material facts can lead to very different behaviour, depending on shared identities and understandings."}
     ]},
    {h:"Norms: how the unthinkable changes", body:[
      "Constructivists study how norms are born and spread. Martha Finnemore and Kathryn Sikkink (1998) described a **[[norm-life-cycle|norm life cycle]]**:",
      {fig:'<svg viewBox="0 0 340 290"><defs><marker id="e2u6-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="10" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">1 · Emergence</text><text class="s" x="170" y="54" text-anchor="middle">“norm entrepreneurs” argue for a new rule</text><path class="d-ink" d="M170 74 L170 96" stroke-width="2" marker-end="url(#e2u6-l4-a)"/><text class="s" x="182" y="90">tipping point</text><rect class="d-gold" x="20" y="98" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle">2 · Cascade</text><text class="s" x="170" y="142" text-anchor="middle">many states adopt it, partly to fit in</text><path class="d-ink" d="M170 162 L170 184" stroke-width="2" marker-end="url(#e2u6-l4-a)"/><rect class="d-sage" x="20" y="186" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="210" text-anchor="middle">3 · Internalisation</text><text class="s" x="170" y="230" text-anchor="middle">taken for granted; breaking it is shocking</text><text class="s" x="170" y="278" text-anchor="middle">Norms can also weaken or be challenged.</text></svg>', alt:"Three stages stacked with arrows. Emergence: norm entrepreneurs argue for a new rule. After a tipping point, cascade: many states adopt it, partly to fit in. Internalisation: the norm is taken for granted and breaking it is shocking. A note says norms can also weaken or be challenged.", cap:"The norm life cycle (Finnemore and Sikkink, 1998)."},
      {ex:"In 1900 most of Africa and much of Asia, the Pacific and the Caribbean were ruled as colonies, and European governments presented empire as normal, even as a duty. Anti-colonial movements and leaders across those regions argued for [[self-determination]] (emergence). After 1945, as many colonies won independence, the new states joined the UN and used its [[general-assembly|General Assembly]]. In December 1960 the Assembly adopted Resolution 1514, the Declaration on the Granting of Independence to Colonial Countries and Peoples, with no votes against (cascade). Today very few governments would openly defend ruling another people as a colony (internalisation). Material changes mattered too, such as the war-weakened finances of colonial powers, but constructivists stress that the **legitimacy** of empire collapsed.", label:"Worked example: the end of empire’s legitimacy"},
      "Another example is what Nina Tannenwald called the **nuclear taboo**: a widely shared sense, growing since 1945, that using nuclear weapons is unacceptable, which she argued helps explain why they have not been used in war since then.",
      "Norms do not simply travel from powerful countries to others. Amitav Acharya (2004) showed how Southeast Asian states adapted outside ideas to fit local beliefs, a process he called **norm localisation**. Lesson 5 returns to his work."
     ]},
    {h:"Identity in action: the ASEAN Way", body:[
      "When five Southeast Asian states (Indonesia, Malaysia, the Philippines, Singapore and Thailand) founded the Association of Southeast Asian Nations in Bangkok in August 1967, several of them had recent or ongoing disputes with each other. Realists might have expected rivalry. Instead the group built habits that came to be called the **ASEAN Way**: non-interference in each other’s internal affairs, decisions by consensus, informal and quiet diplomacy, and avoiding the use of force against each other.",
      "Constructivists such as Acharya (*Constructing a Security Community in Southeast Asia*, 2001) argue that these shared norms helped create a regional identity and made war between members far less likely. Critics, including some constructivists, reply that the same norm of non-interference has made it hard for [[asean|ASEAN]] to respond firmly to crises inside member states. Unit 7 looks at ASEAN as an organisation.",
      "**The 1962 crisis through a constructivist lens.** Why were Soviet missiles in Cuba treated as an intolerable threat, while US missiles in Turkey, also close to the other side’s border, were treated by US leaders as normal? Jutta Weldes (*Constructing National Interests*, 1999) argued that the answer lies in how US officials understood their country’s identity and role, and Cuba’s place in “its” hemisphere. The material facts were similar; the **meanings** were different. A constructivist also notes how the crisis helped build new shared understandings about nuclear danger. **What the lens misses:** it explains why the missiles seemed intolerable better than why the crisis ended as it did; the final bargain over missiles and pledges looks more like the realist story."
     ]},
    {h:"The English School: a society of states", body:[
      "The **[[english-school|English School]]** is a group of scholars, many of them based in Britain from the late 1950s, who asked a question between realism and liberalism: how is there so much **order** in a world with no government?",
      "Its classic text is Hedley Bull’s *The Anarchical Society* (1977). Bull, an Australian who taught in Britain, distinguished two things:",
      {table:[
        ["","International system","International society"],
        ["What it is","States interact enough to affect each other’s calculations","States see themselves as bound by common rules and share common institutions"],
        ["Everyday picture","Strangers on a crowded road","Neighbours who follow and defend shared rules"],
        ["Example","Rival empires that trade and fight but recognise no common rules","States that exchange ambassadors, sign treaties and accept each other’s sovereignty"]
      ]},
      "An [[international-society|international society]], Bull argued, rests on **institutions** in a broad sense: not only organisations, but deep practices such as diplomacy, international law, the balance of power, the special responsibilities of great powers, and even war fought by agreed rules.",
      {ex:"Under the 1961 Vienna Convention on Diplomatic Relations, an embassy cannot be entered by the host country’s police without the ambassador’s consent, and diplomats cannot be prosecuted in the host country’s courts unless their own government waives that immunity. Governments keep these rules even with countries they dislike, because they want their own diplomats protected. For the English School, everyday rules like these show a society of states at work.", label:"Worked example: why embassies are protected"},
      "Martin Wight, another founder, described three traditions of thought, and the English School places itself in the middle one:",
      {table:[
        ["Tradition","Picture of world politics","Close to"],
        ["Realist (Hobbes, Machiavelli)","A state of war","Realism"],
        ["Rationalist (Grotius)","A society of states with shared rules","The English School"],
        ["Revolutionist (Kant)","A community of humankind","Liberal cosmopolitanism (one human community)"]
      ]}
     ]},
    {h:"Pluralists, solidarists and the expansion story", body:[
      "English School scholars divide on how much states should share:",
      {list:[
        "**Pluralists** (Bull in much of his work, Robert Jackson) say international society should rest on a few basic rules, above all sovereignty and non-intervention, because states disagree about values.",
        "**Solidarists** (for example Nicholas Wheeler, *Saving Strangers*, 2000) say states can and should agree on more, including protecting people from mass atrocities. This debate feeds into the [[responsibility-to-protect|Responsibility to Protect]], which Unit 7 covers."
      ]},
      "In *The Expansion of International Society* (1984), Bull and Adam Watson told how a European society of states spread to cover the world. Critics point out that this story mostly looks out from Europe. Societies in Asia, Africa and the Americas had their own long-established rules for relations between polities, and the “expansion” happened largely through conquest and colonial rule.",
      "Gerrit Gong (1984) showed how European powers used a **“standard of civilisation”** to decide who counted as a full member: states such as China, Siam (now Thailand) and the Ottoman Empire were treated as unequal, through unequal treaties and special legal privileges for Europeans, until they met European tests. Postcolonial scholars build on this point (Lesson 5).",
      "**The 1962 crisis through an English School lens.** Even at the brink, the two superpowers kept talking through ambassadors, letters and the UN, and both treated the crisis as something great powers had a special responsibility to manage. Afterwards, they built new shared practices of crisis management. Order survived because, in Bull’s terms, both sides still acted as members of a society, not only as rivals in a system. **What the lens misses:** order nearly failed through near-accidents that no shared rule prevented, and Cuba had little say in this society of great powers."
     ]},
    {h:"What critics say", body:[
      {table:[
        ["Approach","Main critiques"],
        ["Constructivism","Ideas are hard to measure; explanations can come after the fact; it says ideas matter but not which ideas will win; mainstream versions still focus on states"],
        ["English School","Methods are loose and historical; it looks out from Europe; it can treat an unequal order as a society of equals"]
      ]},
      "Defenders reply that measuring ideas is hard but possible (through documents, speeches and interviews), and that both approaches explain change and order that purely material theories miss.",
      {key:"Constructivism asks what shared ideas make possible; the English School asks what shared rules hold states together. Both reject the view that anarchy alone decides behaviour."},
      {terms:["constructivism","identity-ir","norm","norm-life-cycle","english-school","international-society","social-construction"]}
     ]}
   ],
   try:[
    {id:"e2u6-l4-x1", type:"mcq", q:"What did Wendt mean by “anarchy is what states make of it”?", options:[
      {t:"The lack of a world government has no fixed effect; whether states treat each other as enemies, rivals or friends depends on shared understandings they create and can change.", ok:true, why:"Right. Wendt argued that self-help is not built into anarchy; it grows from how states interact and see each other."},
      {t:"States can simply vote to create a world government whenever they like.", why:"Wendt wasn’t talking about a world government. His three cultures are all forms of anarchy."},
      {t:"Anarchy means chaos, and states make it worse by fighting.", why:"In IR, anarchy means no government above states, not chaos. Wendt’s point was that anarchy can be friendly or hostile."},
      {t:"Power and weapons don’t exist; only ideas are real.", why:"Constructivists accept that weapons and wealth are real. They argue that what they mean depends on shared ideas."}
    ]},
    {id:"e2u6-l4-x2", type:"sort", q:"Is each explanation more typical of realism or constructivism?", buckets:["Realism","Constructivism"], items:[
      {t:"The two countries don’t fear each other’s armies because they see each other as part of the same community.", b:1, why:"Explaining the absence of fear through shared identity is constructivist."},
      {t:"The country armed because its neighbour’s military power was growing.", b:0, why:"Responding to the distribution of power is the realist explanation."},
      {t:"Colonial rule ended partly because it came to be seen as illegitimate.", b:1, why:"A change in shared beliefs about legitimacy is a constructivist explanation."},
      {t:"Small states sided with the strongest power to stay safe.", b:0, why:"Alliance choices driven by power and safety are realist explanations."},
      {t:"A government refused an option because it was “not the kind of country that does that”.", b:1, why:"Ruling out options because of identity and norms is constructivist."},
      {t:"Leaders backed down because the other side could do more damage.", b:0, why:"Explaining outcomes through relative capabilities is realist."}
    ]},
    {id:"e2u6-l4-x3", type:"order", q:"Put the stages of the norm life cycle in order, using the end of empire as the example.", items:[
      {t:"Anti-colonial leaders and movements argue that peoples have a right to self-determination.", why:"Emergence: norm entrepreneurs make the case for a new standard."},
      {t:"After 1945, many colonies win independence and join the UN.", why:"Momentum builds as more states hold the new view; a tipping point approaches."},
      {t:"In 1960 the UN General Assembly adopts Resolution 1514 with no votes against.", why:"Cascade: the norm spreads rapidly and becomes the expected position."},
      {t:"Almost no government openly defends colonial rule.", why:"Internalisation: the norm is taken for granted."}
    ]},
    {id:"e2u6-l4-x4", type:"sort", q:"In Hedley Bull’s terms, is each case closer to an international system or an international society?", buckets:["International system","International society"], items:[
      {t:"Two rival empires trade and fight but recognise no common rules or each other’s legitimacy.", b:0, why:"They affect each other’s calculations but share no rules: a system, not a society."},
      {t:"States exchange ambassadors and protect each other’s embassies, even during disputes.", b:1, why:"Shared rules and institutions such as diplomacy are the marks of a society."},
      {t:"Governments sign treaties and generally expect each other to keep them.", b:1, why:"International law, and the expectation that it binds, is a core institution of international society."},
      {t:"Armies on a frontier watch each other, with no agreements or contact between their rulers.", b:0, why:"Interaction without shared rules or common institutions is a system."},
      {t:"States accept each other’s sovereignty and agree on rules for when war may be fought.", b:1, why:"Mutual recognition and agreed limits on war are institutions of an international society."}
    ]},
    {id:"e2u6-l4-x5", type:"match", q:"Match each of Martin Wight’s three traditions to its picture of world politics.", pairs:[
      ["Realist (Hobbes, Machiavelli)","A state of war in which each looks after itself","The realist tradition stresses conflict and self-help."],
      ["Rationalist (Grotius)","A society of states bound by shared rules","This middle way is where the English School places itself."],
      ["Revolutionist (Kant)","A community of all humankind","The revolutionist tradition looks beyond states to humanity as a whole."]
    ]},
    {id:"e2u6-l4-x6", type:"mcq", q:"Fatima argues that international society should rest only on sovereignty and non-intervention, because states disagree too much about values to agree on more. Which English School position is this?", options:[
      {t:"Pluralism", ok:true, why:"Right. Pluralists want a thin set of rules that states with different values can all live with."},
      {t:"Solidarism", why:"Solidarists argue the opposite: that states can agree on more, such as protecting people from mass atrocities."},
      {t:"Offensive realism", why:"Offensive realism is a realist theory about power maximisation, not a position within the English School."},
      {t:"Complex interdependence", why:"That is Keohane and Nye’s liberal ideal type, not an English School position."}
    ]},
    {id:"e2u6-l4-x7", type:"spot", q:"A student’s paragraph on constructivism. Tap the claims that are wrong.", ask:"wrong", parts:[
      "Constructivism became prominent in IR from around 1990. ",
      {t:"Constructivists argue that identities shape what states want.", flag:false, why:"Fine. Identity shaping interests is a core constructivist claim."},
      " ",
      {t:"Constructivists deny that weapons and money are real.", flag:true, why:"They accept material facts. They argue that what those facts mean depends on shared understandings."},
      " ",
      {t:"Wendt argued that self-help is not built into anarchy.", flag:false, why:"Fine. That is the point of “anarchy is what states make of it”."},
      " ",
      {t:"Because norms are ideas, they can never change state behaviour.", flag:true, why:"Constructivists argue the opposite: norms such as the rejection of colonial rule have changed behaviour profoundly."},
      " ",
      {t:"Norms only ever spread from powerful Western states to everyone else.", flag:true, why:"Acharya’s work on norm localisation and the role of anti-colonial movements show that norms can come from, and be reshaped by, many places."}
    ]}
   ],
   apply:{intro:"Notice ideas, identities and shared rules in action. Use public sources only.", tasks:[
     {t:"Find an identity at work", how:["Find a speech or statement by a government leader on foreign policy (official government websites often publish them).","Copy one phrase where the leader describes what kind of country theirs is (“a peaceful nation”, “a bridge between regions”, “a defender of…”).","Write how that identity might make some policies seem natural and others unthinkable."], write:"The speech… The identity phrase… Policies it makes natural… Policies it rules out…"},
     {t:"Trace a norm", how:["Choose a norm in world politics (for example, against using child soldiers, for protecting refugees, or against colonial rule).","Look up when it began to be argued for, and by whom.","Note one sign of a cascade (a treaty, resolution or wave of adoptions) and one sign that it is or isn’t internalised today."], write:"The norm… Who argued for it first… Sign of a cascade… Internalised? Evidence…"},
     {t:"Spot international society in your news", how:["Over a few days, notice news stories involving ambassadors, embassies, treaties or summits.","Pick one and identify which shared rule or practice it shows (diplomatic immunity, keeping treaties, recognising sovereignty).","Write one sentence on what would happen if states stopped following that rule."], write:"The story… The shared rule it shows… What would happen without it…"}
   ], proof:"Notes on one leader’s identity language and its effects, one norm traced through its life cycle, and one news story showing a rule of international society."},
   read:[
    {book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys)", note:"Read it after this lesson: it adds the different branches of constructivism and a worked example."},
    {book:"eirt", where:"Chapter 3 “The English School” (Yannis A. Stivachtis)", note:"Read it for the full picture of international society and the pluralist–solidarist debate."},
    {book:"ospol", where:"Chapter 14, section 14.6 “The Liberal and Social Worldview”, part on constructivism", note:"A short, gentle introduction to constructivism and norms."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u6-l5", title:"Critical lenses and Global IR", minutes:60,
   hook:{q:"The International Studies Association, founded in 1959, is one of the largest professional bodies for IR scholars. Before Amitav Acharya was elected for 2014–15, how many non-Western scholars had been elected its president?", options:["None","About a quarter","About half","Most of them"], answer:0, reveal:"**None.** Acharya, born in India, is described by the universities he works with as the first non-Western scholar elected president of the association. He used his presidential address to call for a “Global IR” that draws on ideas and histories from every region. This lesson covers the critical lenses, then Global IR, then puts all the lenses side by side."},
   goals:[
     "Explain the critical idea that theory is “for someone and for some purpose”",
     "Use Marxist and world-systems ideas, including core and periphery, and state their critiques",
     "Explain what feminist IR adds, using Enloe’s and Tickner’s work",
     "Explain postcolonial critiques of IR, including Said’s idea of Orientalism",
     "Describe the Global IR agenda and ideas from several regional traditions carefully",
     "Compare all the unit’s lenses on one event without declaring a single winner"
   ],
   learn:[
    {h:"Who is the theory for?", body:[
      {lead:"Imagine a factory’s efficiency report. It asks how to make the production line run faster. A different report might ask who works the line, how much they are paid and who owns the profits. Both are useful; they serve different people."},
      "That is Robert Cox’s distinction from Lesson 1. **Problem-solving theory** takes the world as given and helps it run smoothly. **[[critical-theory-ir|Critical theory]]** asks how the current order came about, whose interests it serves and how it could change. Cox’s line, “Theory is always for someone and for some purpose”, is the motto of this lesson.",
      "The lenses below share that starting point but focus on different things: **class and the global economy** (Marxist lenses), **gender** (feminist lenses) and **empire and its legacies** (postcolonial lenses). Global IR then asks how the whole field would look if it listened to every region."
     ]},
    {h:"Marxist and world-systems lenses", body:[
      "Marxist lenses start from {{karl-marx|Karl Marx}}’s argument that the way a society produces wealth shapes its politics, and that capitalism divides those who own the means of production ([[bourgeoisie]]) from those who sell their labour ([[proletariat]]). In IR, the key move is to look at the **global** economy:",
      {list:[
        "**Lenin**, in *Imperialism, the Highest Stage of Capitalism* (written 1916, published 1917), argued that rivalry among capitalist powers for markets and colonies drove imperial expansion and the First World War.",
        "**[[dependency-theory|Dependency theory]]**, developed largely by Latin American economists and sociologists from the 1950s and 1960s, argued that poorer countries stayed poor partly because of the way they were tied into the world economy (Unit 3 covers it).",
        "**[[world-systems-theory|World-systems theory]]**, from Immanuel Wallerstein (*The Modern World-System*, first volume 1974), divides the world economy into a **core**, a **semi-periphery** and a **periphery**."
      ]},
      {fig:'<svg viewBox="0 0 340 372"><defs><marker id="e2u6-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><circle class="d-gold" cx="170" cy="150" r="140" stroke-width="2"/><circle class="d-lup" cx="170" cy="150" r="92" stroke-width="2"/><circle class="d-rose" cx="170" cy="150" r="44" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Periphery</text><text x="170" y="84" text-anchor="middle">Semi-periphery</text><text x="170" y="155" text-anchor="middle">Core</text><path class="d-ink" d="M300 132 L218 132" stroke-width="2" marker-end="url(#e2u6-l5-a)"/><path class="d-ink" d="M218 170 L300 170" stroke-width="2" marker-end="url(#e2u6-l5-a)"/><path class="d-ink" d="M20 316 L58 316" stroke-width="2" marker-end="url(#e2u6-l5-a)"/><text class="s" x="66" y="320">inward: raw materials, low-wage</text><text class="s" x="66" y="335">work and profits flow to the core</text><path class="d-ink" d="M58 352 L20 352" stroke-width="2" marker-end="url(#e2u6-l5-a)"/><text class="s" x="66" y="356">outward: high-value goods, loans, tech</text></svg>', alt:"Three nested circles: the core in the centre, the semi-periphery around it and the periphery on the outside. One arrow points inward towards the core, another points outward. A legend explains that raw materials, low-wage work and profits flow inward to the core, while high-value goods, loans and technology flow outward.", cap:"Core and periphery in world-systems theory. Countries can move between zones over time; the semi-periphery has features of both."},
      "The [[core-periphery|core–periphery]] picture explains a pattern a realist ignores: why the gap between rich and poor regions can last even when no army is involved. Robert Cox, drawing on the Italian Marxist Antonio Gramsci, added the idea of **[[hegemony]]**: leadership that rests not only on force but on making one group’s interests look like common sense to everyone.",
      "**Critiques.** Critics say Marxist lenses reduce politics to economics (in 1914 most workers backed their nations, not their class), and that rapid growth in some closely integrated economies, such as South Korea’s, challenges strong dependency claims. Defenders reply that inequality between and within countries remains central and neglected."
     ]},
    {h:"Feminist IR: where are the women?", body:[
      "In *Bananas, Beaches and Bases* (1989), the American scholar Cynthia Enloe asked a simple question of world politics: **where are the women?** She found them everywhere the usual story ignored: working on banana plantations, cleaning hotels for international tourists, married to diplomats and doing unpaid work that kept diplomacy running, working around military bases, and migrating abroad as domestic workers. Her conclusion: “the personal is international”, and the international is personal.",
      "**[[feminist-ir|Feminist IR]]** builds on the wider [[feminist-theory|feminist theory]] from the sociology units. It does more than “add women”. It uses a **[[gendered-lens|gendered lens]]**: looking at how ideas about masculinity and femininity shape what counts as strength, security and serious politics.",
      {list:[
        "**J. Ann Tickner**, in *Gender in International Relations* (1992), argued that core ideas such as security, power and the rational state had been defined around one masculine ideal. She proposed broader security that includes freedom from poverty and violence at home.",
        "**Carol Cohn** (1987) studied the language of US nuclear strategists and found that abstract, sanitised terms such as “collateral damage” made it hard to speak about human costs, and that anyone who did risked being seen as soft.",
        "In October 2000 the UN Security Council adopted **Resolution 1325** on Women, Peace and Security, recognising women’s roles in preventing and resolving conflict, a step that feminist researchers and activists had pushed for."
      ]},
      "**Critiques and debates.** Some critics argue that gender is less important than power or class in explaining war. Within feminism, most scholars reject the stereotype that women are “naturally peaceful”, and Chandra Talpade Mohanty (1984) warned Western feminists against speaking for women in the [[global-south|Global South]] as one victimised group. Feminists reply that leaving gender out is itself a choice that hides evidence, and many study everyday lives through interviews rather than statistics."
     ]},
    {h:"Postcolonialism: the view from the former colonies", body:[
      "**[[postcolonialism|Postcolonialism]]** starts from a fact that classic IR theories often treat as background: for centuries much of the world was ruled by European empires (Unit 5 covers [[colonialism]] and [[decolonization]]). When the UN was founded in 1945, most of Africa and much of Asia was still under colonial rule.",
      "Three thinkers from outside IR shaped the lens:",
      {list:[
        "**Edward Said**, a Palestinian-American literary scholar, argued in *Orientalism* (1978) that Western writing, art and scholarship had built an image of “the Orient” as exotic, backward and unchanging, and that this **[[orientalism|Orientalism]]** was bound up with imperial power: knowledge about a people helped justify ruling them.",
        "**Frantz Fanon**, a psychiatrist from Martinique who worked in Algeria during its war of independence, wrote *The Wretched of the Earth* (1961) on the violence of colonialism and the struggle to decolonise minds as well as territories.",
        "**Gayatri Chakravorty Spivak** asked in “Can the Subaltern Speak?” (1988) whether the **subaltern**, the most marginalised people in a colonial society, can be heard when others always speak for them."
      ]},
      "Postcolonial IR scholars apply these ideas to the field itself. [[sovereignty|Sovereignty]] was presented as a universal principle, yet for a long time it was denied to colonised peoples (recall the “standard of civilisation” from Lesson 4). Theories built mostly from European history, they argue, show **[[eurocentrism]]**: treating Europe’s experience as the normal pattern for everyone.",
      "**Critiques.** Critics say postcolonialism is better at criticising than at offering testable explanations, that it can treat “the West” as a single bloc, and that it may underplay the power and choices of post-independence elites. Defenders reply that seeing whose experience a theory rests on is the first step to better theory, which is where Global IR comes in."
     ]},
    {h:"Global IR: a field for the whole world", body:[
      "In 2007 Amitav Acharya and Barry Buzan asked in a journal article: “Why is there no non-Western international relations theory?” Their answer was not that other regions lacked ideas. They pointed to the dominance of Western scholarship, to ideas elsewhere that the field had overlooked, and to the lack of money and recognition for scholars in many countries.",
      "In his 2014 presidential address, “Global International Relations (IR) and Regional Worlds”, Acharya set out an agenda for **[[global-ir|Global IR]]**. A Global IR should:",
      {ol:[
        "Be universal in a **plural** way: one field that welcomes many perspectives, not one standard everyone must copy.",
        "Be grounded in **world history**, not only European history.",
        "Add to existing theories rather than throw them away.",
        "Treat **regions** and regionalism as central.",
        "Reject **exceptionalism**: no culture or country should be treated as uniquely special or as the model for all.",
        "Recognise many forms of **agency** (the power to act and shape events), including resistance, norm-making and local visions of order."
      ]},
      "Global IR draws on many traditions of thought. Each one below is internally diverse and argued over by its own scholars; these are examples, not summaries of whole civilisations:",
      {table:[
        ["Region or tradition","Examples of ideas"],
        ["South Asia","The Arthashastra’s circle of states; Gandhi’s non-violent resistance; Nehru’s non-alignment; the Five Principles of Peaceful Coexistence agreed by India and China in 1954"],
        ["China","Recent theories by Chinese scholars drawing on older ideas: Zhao Tingyang’s tianxia (“all under heaven”), Qin Yaqing’s relational theory, Yan Xuetong’s moral realism"],
        ["Africa","Pan-Africanism (Kwame Nkrumah and others); ubuntu, the idea that a person is a person through other people, which some scholars apply to world politics"],
        ["Latin America","Dependency theory; the Calvo and Drago doctrines on limits to foreign intervention (1868, 1902); ideas of national autonomy"],
        ["Islamic thought","Ibn Khaldun’s *Muqaddimah* (1377) on group solidarity (asabiyya) and the rise and fall of dynasties; siyar, the law of war, treaties and envoys developed by jurists such as al-Shaybani (8th century)"],
        ["The Pacific","Pacific Islands leaders’ idea of the “Blue Pacific Continent”, adopted in their 2050 Strategy (2022)"]
      ]},
      {warn:"Be careful with “civilisational” labels. Critics such as William Callahan argue that some new “national schools” can serve a government’s foreign-policy aims, for example readings of tianxia that make a hierarchical order sound harmonious. Global IR itself warns against exceptionalism of any kind."},
      "**Critiques.** Some mainstream scholars say good theory is universal already; some critical scholars say Global IR is too cautious about who holds power in the field. Acharya replies that it is an agenda for widening the conversation, not a single new theory."
     ]},
    {h:"One crisis, every lens", body:[
      "Now turn the critical and global lenses on October 1962:",
      {list:[
        "**Marxist:** the crisis was part of a struggle between two economic systems. Cuba’s revolutionary government had nationalised US-owned businesses in 1960, and the United States had responded with an economic embargo. This lens ties the superpower showdown to that conflict over property and development.",
        "**Feminist:** the ExComm advisers who debated nuclear war were all men, and accounts of the crisis are full of talk of toughness, nerve and not appearing weak. A gendered lens asks how those ideas narrowed the options that felt acceptable, and who would have borne the costs: the millions of civilians who were never consulted.",
        "**Postcolonial:** in Cuba the event is the October Crisis, and the island appears in most accounts mainly as a launch site. Cuba had lived under a US right to intervene (the Platt Amendment, 1901–1934), and the US base at Guantánamo remains. Fidel Castro publicly set out conditions of his own, including the return of Guantánamo, but the final deal was made between Washington and Moscow without Cuba.",
        "**Global IR:** U Thant of Burma (now Myanmar), the UN’s acting Secretary-General, sent appeals to both leaders on 24 October, helped open space for a pause, and flew to Havana at the end of the month to discuss UN verification, which Castro refused. A field that looked only at the superpowers would miss him."
      ]},
      "**What these lenses miss:** they push the nuclear balance and the superpowers’ bargaining into the background, which is where realists say the crisis was decided, and none of them alone explains why it ended without war.",
      {fig:'<svg viewBox="0 0 340 356"><rect class="d-panel" x="90" y="6" width="160" height="30" rx="8" stroke-width="2"/><text x="170" y="26" text-anchor="middle">October 1962</text><rect class="d-rose" x="8" y="46" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="67" text-anchor="middle">Realism</text><text class="s" x="128" y="67">Who gained or lost power?</text><rect class="d-lup" x="8" y="84" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="105" text-anchor="middle">Liberalism</text><text class="s" x="128" y="105">Which channels and rules helped?</text><rect class="d-gold" x="8" y="122" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="143" text-anchor="middle">Constructivism</text><text class="s" x="128" y="143">What did the missiles mean?</text><rect class="d-sage" x="8" y="160" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="181" text-anchor="middle">English School</text><text class="s" x="128" y="181">Which shared rules held?</text><rect class="d-rose" x="8" y="198" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="219" text-anchor="middle">Marxist</text><text class="s" x="128" y="219">Which economic systems clashed?</text><rect class="d-lup" x="8" y="236" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="257" text-anchor="middle">Feminist</text><text class="s" x="128" y="257">Who decided, and who would pay?</text><rect class="d-gold" x="8" y="274" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="295" text-anchor="middle">Postcolonial</text><text class="s" x="128" y="295">Where was Cuba’s own voice?</text><rect class="d-sage" x="8" y="312" width="112" height="32" rx="6" stroke-width="1.5"/><text x="64" y="333" text-anchor="middle">Global IR</text><text class="s" x="128" y="333">Who else shaped the outcome?</text></svg>', alt:"One event, October 1962, at the top, with eight lenses listed below, each with its first question. Realism: who gained or lost power? Liberalism: which channels and rules helped? Constructivism: what did the missiles mean? English School: which shared rules held? Marxist: which economic systems clashed? Feminist: who decided, and who would pay? Postcolonial: where was Cuba’s own voice? Global IR: who else shaped the outcome?", cap:"Eight lenses, one event. Each question brings different evidence into view."}
     ]},
    {h:"Choosing and combining lenses", body:[
      "So which theory is right? There is no agreed winner. Each lens is strongest on some questions:",
      {table:[
        ["If you want to understand…","Start with"],
        ["Arms races, alliances and great-power rivalry","Realism"],
        ["Trade, institutions and long-run cooperation","Liberalism"],
        ["Changing identities, norms and legitimacy","Constructivism, English School"],
        ["Inequality and the global economy","Marxist and world-systems lenses"],
        ["Who is left out, and how gender and empire shape power","Feminist and postcolonial lenses"],
        ["Ideas and agency from every region","Global IR"]
      ]},
      "Good analysts move between lenses, test each against the evidence, and notice when two lenses together explain more than either alone. When you read about any event, try three questions: **Which lens is this writer using? What would a different lens notice? Whose voice is missing?** Unit 8 comes back to these questions for reading world news.",
      {key:"Theories are tools, not teams. The skill is choosing the right lens for the question, and knowing what each one leaves out."},
      {terms:["critical-theory-ir","core-periphery","semi-periphery","hegemony","feminist-ir","gendered-lens","postcolonialism","orientalism","eurocentrism","global-ir"]}
     ]}
   ],
   try:[
    {id:"e2u6-l5-x1", type:"sort", q:"Which critical lens does each claim come from?", buckets:["Marxist / world-systems","Feminist","Postcolonial"], items:[
      {t:"Profits from mining in one region mostly flow to firms and investors in another.", b:0, why:"Surplus flowing from periphery to core is the world-systems picture."},
      {t:"Diplomacy depended on the unpaid work of diplomats’ spouses, who were mostly women.", b:1, why:"Making women’s hidden labour visible is Enloe’s feminist move."},
      {t:"Western scholarship long portrayed “the East” as exotic and backward, which helped justify ruling it.", b:2, why:"That is Said’s argument about Orientalism, the founding text of postcolonial studies."},
      {t:"Leaders feared looking “soft”, and that narrowed the options they would consider.", b:1, why:"Asking how ideas of masculinity shape policy is a gendered lens."},
      {t:"Sovereignty was called universal but was denied to colonised peoples for generations.", b:2, why:"Exposing the double standard of the colonial era is a postcolonial critique."},
      {t:"Capitalist rivalry for markets and colonies drove imperial expansion.", b:0, why:"That is Lenin’s Marxist argument about imperialism."}
    ]},
    {id:"e2u6-l5-x2", type:"match", q:"Match each scholar to the work or idea.", pairs:[
      ["Robert Cox","“Theory is always for someone and for some purpose”","Cox (1981) distinguished problem-solving from critical theory."],
      ["Immanuel Wallerstein","Core, semi-periphery and periphery","His world-systems theory began with *The Modern World-System* (1974)."],
      ["Cynthia Enloe","*Bananas, Beaches and Bases* and “where are the women?”","Her 1989 book founded much of feminist IR."],
      ["Edward Said","*Orientalism* (1978)","Said showed how knowledge about “the Orient” was tied to imperial power."],
      ["Amitav Acharya","Global IR and norm localisation","His 2014 address set out the Global IR agenda."],
      ["J. Ann Tickner","*Gender in International Relations* (1992)","Tickner argued that core IR concepts were built around a masculine ideal."]
    ]},
    {id:"e2u6-l5-x3", type:"mcq", q:"Oluwaseun reads that a country exports mostly unprocessed cocoa and imports most of its chocolate and machinery. Which lens explains this pattern most directly?", options:[
      {t:"World-systems theory: peripheral economies sell raw materials and buy high-value goods from the core.", ok:true, why:"Right. This is the core–periphery pattern of trade that Wallerstein and dependency theorists described."},
      {t:"The security dilemma: the country is arming against its neighbours.", why:"Nothing here concerns weapons or fear. The security dilemma is a realist idea about arms build-ups."},
      {t:"Wendt’s Kantian culture: the country sees its trading partners as friends.", why:"Friendship might affect trade, but it doesn’t explain why the country sells raw materials and buys finished goods."},
      {t:"Pluralism in the English School: states agree only on sovereignty.", why:"Pluralism concerns how many rules international society shares, not trade patterns."}
    ]},
    {id:"e2u6-l5-x4", type:"mcq", q:"Which statement best describes what a gendered lens does in IR?", options:[
      {t:"It looks at how ideas about masculinity and femininity shape power, security and what counts as serious politics, as well as where women are.", ok:true, why:"Right. Feminist IR goes beyond counting women: it examines how gender shapes the concepts and choices of world politics."},
      {t:"It argues that women are naturally more peaceful than men.", why:"Most feminist IR scholars reject that stereotype. Their focus is on how gender roles are built and used, not on fixed natures."},
      {t:"It studies only women’s organisations and ignores war and security.", why:"Feminist IR studies war and security directly, as Tickner and Cohn did."},
      {t:"It counts how many women are heads of government, and nothing else.", why:"Counting is one starting point. A gendered lens also looks at ideas, language and unpaid work."}
    ]},
    {id:"e2u6-l5-x5", type:"spot", q:"A magazine column about Global IR. Tap the claims that are wrong or that stereotype whole regions.", ask:"wrong or stereotyping", parts:[
      "Global IR is a growing movement. ",
      {t:"It asks the field to draw on histories and ideas from every region, not only Europe’s.", flag:false, why:"Fine. That is the heart of Acharya’s agenda."},
      " ",
      {t:"Its aim is to throw out realism and liberalism completely.", flag:true, why:"Acharya’s agenda says Global IR should add to and widen existing theories, not discard them."},
      " ",
      {t:"Ibn Khaldun wrote about group solidarity and the rise and fall of dynasties.", flag:false, why:"Fine. That is the central theme of his *Muqaddimah* (1377)."},
      " ",
      {t:"All Asian thinkers share a single view of world order.", flag:true, why:"Each tradition is diverse and argued over by its own scholars. Treating a whole region as one view is exactly what Global IR warns against."},
      " ",
      {t:"It rejects the idea that any one country’s experience is the model for all.", flag:false, why:"Fine. Rejecting exceptionalism is one of the agenda’s six points."},
      " ",
      {t:"Ideas from the Global South are valuable only when Western scholars approve them.", flag:true, why:"Global IR argues the opposite: agency and ideas from every region count on their own terms."}
    ]},
    {id:"e2u6-l5-x6", type:"sort", q:"Each sentence comes from an analysis of the 1962 crisis. Which lens is it using?", buckets:["Realism","Liberalism","Constructivism","Postcolonial"], items:[
      {t:"The Soviet missiles were a cheap way to narrow a gap in long-range nuclear forces.", b:0, why:"Explaining the move by the balance of power is realist."},
      {t:"After the crisis, the hotline and the test ban treaty made communication and limits more reliable.", b:1, why:"Building institutions to make cooperation easier is the liberal reading."},
      {t:"US leaders saw missiles in Cuba as intolerable but their own in Turkey as normal, because of how they understood their country’s role in the hemisphere.", b:2, why:"Explaining the reaction through identity and meaning is constructivist (Weldes’s argument)."},
      {t:"The deal was struck between two great powers without the government of the island where the missiles stood.", b:3, why:"Pointing out that Cuba’s voice was left out is the postcolonial reading."},
      {t:"Each superpower bargained from strength and accepted a deal because the alternative was mutual destruction.", b:0, why:"Bargaining backed by deterrence is the realist reading."},
      {t:"Cuba had lived for decades under a US right to intervene, which shaped how its leaders saw the crisis.", b:3, why:"Placing the crisis in a longer history of domination is postcolonial."}
    ]},
    {id:"e2u6-l5-x7", type:"mcq", q:"Priya asks: “After all these lessons, which IR theory is the correct one?” What is the most accurate answer?", options:[
      {t:"None has won: each lens explains some questions well and misses others, so analysts test several against the evidence and often combine them.", ok:true, why:"Right. There is no agreed winner. The skill is choosing and combining lenses and knowing their blind spots."},
      {t:"Realism, because it is the oldest.", why:"Age doesn’t make a theory right; realism’s claimed ancestors are old, but so are many other traditions of thought."},
      {t:"Global IR, because it replaces all the others.", why:"Global IR aims to widen the field and add to existing theories, not replace them."},
      {t:"It doesn’t matter, because theories can’t be checked against evidence.", why:"Theories can be checked: by how well their expectations fit what happens, across many cases."}
    ]}
   ],
   apply:{intro:"Use the critical and global lenses on the world around you. All tasks use free public sources; keep your notes private unless you choose to share them.", tasks:[
     {t:"Compare two outlets", how:["Choose one international event in the news this week.","Find reports on it from two outlets based in different countries or regions (many outlets publish free English-language editions; use any language you read).","For each, note who is quoted, whose experience is described and which lens it seems to use.","Write one sentence about a voice or angle that one report includes and the other leaves out."], write:"The event… Outlet 1: who is quoted, which lens… Outlet 2… What one includes that the other leaves out…"},
     {t:"Ask Enloe’s question", how:["Pick one international activity you see in daily life: a tourist resort, a port, a garment label, a care worker who has migrated, an airport.","Ask “where are the women?” and “whose work makes this possible?”","List three kinds of work, paid or unpaid, that the usual story would leave out."], write:"The activity… Where are the women?… Three kinds of hidden work…"},
     {t:"Find an idea from another tradition", how:["Choose one idea from the Global IR table that is new to you.","Read a short, reliable introduction to it (an encyclopedia, a university page or the E-IR chapters on Asian and Global South perspectives).","Write what it adds to the theories in this unit, and one debate about it."], write:"The idea… Where it comes from… What it adds… One debate about it…"}
   ], proof:"Notes comparing how two outlets from different places reported one event, three kinds of hidden work found by asking Enloe’s question, and a short summary of one idea from a non-Western tradition with a debate about it."},
   read:[
    {book:"eirt", where:"Chapters 5 “Marxism” (Maïa Pal), 6 “Critical Theory” (Marcos Farias Ferreira), 8 “Feminism” (Sarah Smith) and 9 “Postcolonialism” (Sheila Nair)", note:"Read them after this lesson: each adds the theory’s history and applies it to a recent case."},
    {book:"eirt", where:"Chapter 10 “Towards a Global IR?” (Amitav Acharya)", note:"Acharya’s own short introduction to the Global IR agenda."},
    {book:"eirt", where:"Chapters 16 “Asian Perspectives” (Pichamon Yeophantong) and 17 “Global South Perspectives” (Lina Benabdallah, Victor Adetula and Carlos Murillo-Zamora)", note:"For going further into ideas from Asia, Africa and Latin America."},
    {book:"ospol", where:"Chapter 14, section 14.7 “Critical Worldviews”", note:"A gentle introduction to Marxist and feminist lenses."}
   ]
  }
  ],
  checkpoint:["e2u6-q02","e2u6-q06","e2u6-q11","e2u6-q14","e2u6-q17","e2u6-q21","e2u6-q24","e2u6-q28","e2u6-q31","e2u6-q36","e2u6-q40","e2u6-q44"],
  codex:[
   {id:"ir-theory", title:"IR theory", aka:["International Relations theory","theories of world politics"], tags:["international relations","theory"],
    summary:"A deliberate, testable way of explaining or understanding world politics: a simplified map that tells you which actors and causes to look at.",
    levels:{
     starter:[
      "An IR theory is like a pair of glasses for looking at world politics. Different glasses bring different things into focus: power and threats, trade and rules, ideas and identities, money and inequality, or the people usually left out.",
      "Theories also work like maps. A metro map leaves out streets and parks, and that is why it is useful for finding your train. An IR theory leaves out most details so that it can show the few things it thinks matter most.",
      "Everyone who explains the news already uses some theory, often without noticing. Learning the main IR theories means you can choose your glasses on purpose, see what each pair shows well, and notice what it blurs.",
      {key:"A theory is a deliberate way of looking that can be checked against what actually happens."}
     ],
     builder:[
      "Most theories have three working parts: **assumptions** (starting points, such as “states want to survive”), a **mechanism** (a chain of cause and effect) and **expectations** (what we should see if the theory is right). Expectations are what let evidence count for or against a theory.",
      "Theories do different jobs:",
      {table:[
        ["Job","Question"],
        ["Explaining","What caused this pattern?"],
        ["Understanding","What did it mean to those involved?"],
        ["Judging (normative theory)","What ought to happen?"]
      ]},
      "The main families are realism, liberalism, constructivism, the English School, critical lenses (Marxist, feminist, postcolonial) and the Global IR agenda. Each asks a different first question, from “who has power?” to “whose voice is missing?”.",
      "Robert Cox (1981) warned that “theory is always for someone and for some purpose”, and contrasted **problem-solving theory**, which helps the current order run smoothly, with **critical theory**, which asks how that order arose and whom it serves.",
      "Use any theory with three questions: what does it explain well, what does it leave out, and whose point of view does it start from?",
      "Theories are often grouped by what they treat as the main **level of analysis** (the individual, the state or the international system, introduced in Unit 5). Realists such as Waltz work mainly at the system level; theories of foreign policy work at the state and individual levels. Asking which level an argument uses is a quick way to see what kind of explanation it offers."
     ],
     pro:[
      "IR’s history is often told as a sequence of “great debates”: idealism against realism (1930s–40s), traditionalism against behaviouralism (1950s–60s), the inter-paradigm debate (1970s–80s) and positivism against post-positivism (from the late 1980s). Historians of the discipline treat this as a teaching device, not a literal record: Peter Wilson’s 1998 article “The Myth of the ‘First Great Debate’” argued that the interwar “idealists” never formed a coherent school and that the label was largely applied by their critics. Others note that the narrative is centred on Britain and the United States.",
      "There are deep disagreements about what kind of knowledge IR can produce. Martin Hollis and Steve Smith (*Explaining and Understanding International Relations*, 1990) contrasted explanation from the outside, modelled on natural science, with understanding from the inside, reconstructing actors’ meanings. Positivist approaches stress testable hypotheses and general patterns; post-positivist approaches stress that observers are part of the world they study.",
      "Kenneth Waltz distinguished a theory of **international politics**, which explains recurrent outcomes of the system, from a theory of **foreign policy**, which explains particular states’ decisions. Confusing the two is a common source of unfair criticism.",
      "Many scholars now practise what Rudra Sil and Peter Katzenstein (2010) called **analytic eclecticism**: combining mechanisms from several theories to explain a specific problem, rather than defending one paradigm against all others.",
      "A further divide is between **rationalist** theories (neorealism and neoliberal institutionalism), which treat states’ interests as given and ask how they pursue them, and **reflectivist** or constructivist approaches, which ask where interests and identities come from. Robert Keohane drew this distinction in his 1988 presidential address to the International Studies Association. Recognising it helps explain why scholars sometimes talk past each other: they are answering different questions."
     ]
    },
    related:["realism","liberalism-ir","constructivism","english-school","marxism-ir","feminism-ir","postcolonialism-ir","global-ir","levels-of-analysis"],
    read:[{book:"eirt", where:"Introduction “Getting Started with International Relations Theory”"},{book:"eir", where:"Chapter 4 “International Relations Theory”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"},{t:"OpenStax Introduction to Political Science, 14.5 The Realist Worldview", url:"https://openstax.org/books/introduction-political-science/pages/14-5-the-realist-worldview"}], checked:"2026-11"},

   {id:"realism", title:"Realism", aka:["political realism","power politics"], tags:["international relations","theory","realism"],
    summary:"The family of theories that sees world politics as a competition for power and security among states in a system with no government above them.",
    levels:{
     starter:[
      "Picture a neighbourhood with no police. Even decent neighbours fit stronger locks and watch each other, because no one else will protect them. Realism sees world politics this way: there is no world government, so each state must look after itself.",
      "Realists say states care first about **survival**, rely on their own **power** (especially military power and the wealth behind it) and can never be fully sure what others intend. That makes trust scarce and competition common, even between countries that do not want war.",
      "Realism is not a single theory but a family. Its members agree on these starting points and disagree about why states seek power.",
      {key:"Realism: in a world without a referee, power and security come first."},
      "Realists also point out that states often keep their real plans secret, because revealing them could be used against them, which deepens mistrust."
     ],
     builder:[
      "Realism’s main branches:",
      {table:[
        ["Branch","Why states seek power","Key figure"],
        ["Classical realism","Human nature and the drive for power","Hans Morgenthau (1948)"],
        ["Neorealism (structural)","The anarchic structure of the system","Kenneth Waltz (1979)"],
        ["Offensive realism","Maximum power is the safest position","John Mearsheimer (2001)"],
        ["Neoclassical realism","System pressures filtered through domestic politics","Named by Gideon Rose (1998)"]
      ]},
      "Key concepts include **self-help** (each state relies on itself), the **national interest**, the **balance of power** (states balance against rising threats, by arming or allying) and the **security dilemma** (one state’s defensive steps make others feel less safe, starting a spiral).",
      "Realists claim ancestors in Thucydides’ history of the Peloponnesian War, the Arthashastra attributed to Kautilya, Machiavelli and Hobbes, though none of them used the word and each reading is debated.",
      "A realist explains the 1962 Cuban crisis as a struggle over the nuclear balance, ended by bargaining between two powers that could destroy each other.",
      "Realism does not say states are always at war or that leaders are wicked. It says that in a world without a referee, even cautious, well-meaning governments face pressures to compete, and that ignoring power is dangerous. Many realists therefore recommend restraint, diplomacy and a careful reading of others’ interests, rather than crusades. The naval race between Britain and Germany before 1914 is the textbook illustration of the security dilemma that realists describe."
     ],
     pro:[
      "Defensive realists (Waltz, Robert Jervis, Stephen Van Evera) argue that states seek security rather than maximum power, because expansion provokes balancing; Jervis (1978) showed that the security dilemma eases when defensive and offensive weapons can be distinguished or defence has the advantage. Offensive realists (Mearsheimer) argue that uncertainty about intentions makes regional hegemony the safest goal. Stephen Walt’s balance-of-threat theory (1987) adds geography, offensive capability and perceived intentions to raw power.",
      "Main critiques:",
      {list:[
        "It did not foresee the peaceful end of the Cold War (Gaddis, 1992).",
        "It struggles to explain lasting security communities such as the European Union or ASEAN’s record among its members.",
        "It brackets domestic politics, ideas and identity (neoclassical realism partly answers this).",
        "Feminist critics (Tickner) see a masculine model of the actor; postcolonial critics note its silence on empire.",
        "Assuming threat can be self-fulfilling."
      ]},
      "Realists reply that great-power rivalry, arms races and war keep returning, and that the theory often counsels restraint: Morgenthau opposed the Vietnam War and many realists opposed later wars they judged reckless.",
      "Realism also shapes policy debates directly. Arguments for balancing a rising power, for spheres of influence, or for avoiding wars of choice are often made in realist terms, and realist scholars are frequent public critics of foreign policies they see as overextended. This practical side helps explain why realism remains the lens many students meet first, and the one other theories most often define themselves against."
     ]
    },
    related:["neorealism","hans-morgenthau","kenneth-waltz","anarchy-ir","liberalism-ir","ir-theory"],
    read:[{book:"eirt", where:"Chapter 1 “Realism”"},{book:"ospol", where:"Chapter 14, section 14.5 “The Realist Worldview”"}],
    sources:[{t:"Stanford Encyclopedia of Philosophy: Political Realism in International Relations", url:"https://plato.stanford.edu/entries/realism-intl-relations/"},{t:"OpenStax Introduction to Political Science, 14.5 The Realist Worldview", url:"https://openstax.org/books/introduction-political-science/pages/14-5-the-realist-worldview"}], checked:"2026-11"},

   {id:"neorealism", title:"Neorealism", aka:["structural realism"], tags:["international relations","theory","realism"],
    summary:"Kenneth Waltz’s theory that the anarchic structure of the international system, not human nature, pushes states into similar competitive behaviour.",
    levels:{
     starter:[
      "Imagine a game of musical chairs. Kind people and selfish people alike end up rushing for a seat when the music stops, because the rules of the game reward it. Neorealism says world politics is like that: the **structure** of the system shapes behaviour more than the personalities of leaders.",
      "The structure Waltz had in mind is simple. There is no government above states (anarchy), every state must look after its own security, and states differ mainly in how much power they have.",
      "So neorealists look less at who is in charge of a country and more at how power is spread across the whole system: one dominant power, two, or several.",
      {key:"Neorealism: the shape of the system pushes states to act alike."},
      "That is why neorealists pay close attention to big shifts, such as the end of the Cold War, when the number of major powers changes."
     ],
     builder:[
      "Kenneth Waltz set out neorealism in *Theory of International Politics* (1979). He defined a political structure by three elements:",
      {ol:[
        "**Ordering principle**: anarchy, not hierarchy.",
        "**Character of the units**: under anarchy, states must all provide their own security, so they become functionally similar (“like units”).",
        "**Distribution of capabilities**: how power is spread among the great powers, which defines polarity."
      ]},
      "Because only the third element changes, neorealism explains big shifts mainly through changes in polarity. Waltz argued that a **bipolar** system, like the Cold War, is more stable than a **multipolar** one, because two superpowers watch each other closely and miscalculation is less likely.",
      "Neorealists expect states to **balance** against concentrations of power and to worry about **relative gains**, which makes cooperation fragile. Waltz was a defensive realist: he thought states seek enough power to be secure, since grabbing too much provokes others to unite.",
      "A helpful way to remember Waltz’s argument is the phrase “like units”. Because no one else will provide their security, states end up doing broadly the same jobs: raising armies, collecting taxes, running diplomacy. What differs is how capable they are. That is why, for neorealists, the number of great powers (polarity) is the most important fact about any international system, and why shifts in polarity are treated as the big turning points of world politics."
     ],
     pro:[
      "Waltz insisted that his was a theory of international politics, explaining recurrent patterns such as balancing and the rarity of lasting hegemony, not a theory of foreign policy that predicts individual decisions. Critics who test it against single decisions are, in his view, testing the wrong thing.",
      "Neorealism drew wide criticism. Richard Ashley (“The Poverty of Neorealism”, 1984) attacked its narrow view of structure. John Ruggie argued that it could not explain the shift from medieval to modern systems because it ignored changes in the character of units. Constructivists, notably Wendt (1992), argued that self-help and power politics are not logically implied by anarchy. After 1989, critics noted the theory had not foreseen a peaceful end of bipolarity.",
      "Within realism, Mearsheimer’s offensive realism (2001) kept the structural starting point but argued that states maximise relative power. Neoclassical realists added domestic factors to explain specific foreign policies.",
      "Waltz also argued, controversially, that the gradual spread of nuclear weapons could strengthen deterrence; Scott Sagan argued the opposite, and their exchange was published as *The Spread of Nuclear Weapons: A Debate* (1995; later editions).",
      "Neorealism’s legacy includes the habit of explaining outcomes through polarity, the concept of balancing as a recurrent system-level pattern, and the relative-gains argument against easy cooperation, developed by Joseph Grieco (1988). Its insistence on parsimony set the standard that later theories had to meet or reject, which is why even its critics usually begin by engaging with Waltz’s structure."
     ]
    },
    related:["realism","kenneth-waltz","levels-of-analysis","anarchy-ir"],
    read:[{book:"eirt", where:"Chapter 1 “Realism”"}],
    sources:[{t:"Stanford Encyclopedia of Philosophy: Political Realism in International Relations", url:"https://plato.stanford.edu/entries/realism-intl-relations/"}], checked:"2026-11"},

   {id:"liberalism-ir", title:"Liberalism (IR theory)", aka:["liberal internationalism","liberal institutionalism"], tags:["international relations","theory","liberalism"],
    summary:"The family of theories holding that interdependence, institutions and domestic politics can make cooperation common and conflict less likely, even without a world government.",
    levels:{
     starter:[
      "Picture neighbours with no police who all draw water from one well. They agree a timetable, share repairs and keep a notebook of who has paid. No one forces them; the shared well and the habit of meeting make cooperation sensible.",
      "Liberalism in IR says world politics can work like that. There is no world government, but trade, travel and communication tie countries together, international organisations and rules make promises easier to keep, and what happens inside countries, such as elections, shapes how they behave abroad.",
      {warn:"“Liberal” here is a theory of world politics, not a political party or a view on domestic issues."},
      {key:"Liberalism: cooperation is possible, and ties and rules make it easier."},
      "Liberals do not say conflict disappears. They say it can be managed, and that the habits of cooperation can spread over time."
     ],
     builder:[
      "Liberalism has several strands:",
      {table:[
        ["Strand","Main idea","Key work"],
        ["Liberal internationalism","Law, open diplomacy and a league of nations can keep peace","Wilson’s Fourteen Points (1918)"],
        ["Interdependence","Ties between societies raise the costs of conflict","Keohane and Nye (1977)"],
        ["Neoliberal institutionalism","Institutions help self-interested states cooperate","Keohane, *After Hegemony* (1984)"],
        ["Democratic peace","Democracies rarely if ever fight each other","Doyle (1983)"]
      ]},
      "Its roots include Kant’s *Perpetual Peace* (1795) and Norman Angell’s *The Great Illusion* (1910), which argued that conquest no longer paid.",
      "Liberals stress **absolute gains** (is everyone better off?) where realists stress relative gains. They see many actors, including international organisations, NGOs and companies, and they argue that institutions provide information, lower the costs of making deals and build reputations, which lengthens “the shadow of the future”.",
      {warn:"“Neoliberal institutionalism” in IR is a theory of cooperation; it is not the same as “neoliberal” free-market economic policy."},
      "Liberals do not claim that cooperation is easy or automatic. They argue it is possible and often rational, and they study the conditions that make it more likely: repeated dealings, transparent information, institutions that monitor commitments, and domestic politics that reward peace and trade. The long history of bodies such as the Universal Postal Union (1874) shows how ordinary cross-border cooperation can become."
     ],
     pro:[
      "Keohane and Nye’s complex interdependence has three features: multiple channels connecting societies, no fixed hierarchy of issues, and a minor role for military force among the states concerned. They distinguished **sensitivity** from **vulnerability** interdependence, and noted that asymmetric interdependence is a source of power, a point that bridges liberal and realist thinking.",
      "The neoliberal–neorealist debate of the 1980s–90s narrowed the gap: both accepted anarchy and rational states, and argued over whether relative-gains concerns (Grieco, 1988) prevent cooperation. Snidal (1991) showed relative gains matter less with many players. Andrew Moravcsik (1997) set out a “liberal” theory centred on state preferences formed by domestic society.",
      "Critiques: realists (Mearsheimer, “The False Promise of International Institutions”, 1994/95) argue institutions mostly reflect great-power interests; Marxist and postcolonial critics argue that the liberal international order has served rich states and was built while much of the world was colonised; and interdependence can be used as a weapon (sanctions, supply chains) rather than a brake on conflict.",
      "In the 1962 crisis a liberal emphasises communication channels, the UN’s role and the institutions built afterwards: the hotline and the Partial Test Ban Treaty (1963), and later the Non-Proliferation Treaty (opened for signature 1968).",
      "Liberal ideas strongly shaped the institutions built after 1945, from the United Nations to the Bretton Woods institutions covered in Unit 7. Supporters credit this “liberal international order” with expanding trade and reducing great-power war; critics stress its unequal benefits and the gap between its universal language and its practice. The debate about whether that order is weakening is one of the liveliest in IR today, and different liberal scholars answer it differently."
     ]
    },
    related:["democratic-peace","realism","constructivism","ir-theory","united-nations"],
    read:[{book:"eirt", where:"Chapter 2 “Liberalism”"},{book:"ospol", where:"Chapter 14, section 14.6 “The Liberal and Social Worldview”"}],
    sources:[{t:"OpenStax Introduction to Political Science, 14.6 The Liberal and Social Worldview", url:"https://openstax.org/books/introduction-political-science/pages/14-6-the-liberal-and-social-worldview"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"democratic-peace", title:"The democratic peace", aka:["democratic peace theory","liberal peace"], tags:["international relations","theory","liberalism","evidence"],
    summary:"The finding that established democracies have very rarely, if ever, fought wars against each other, and the debate about why.",
    levels:{
     starter:[
      "The democratic peace is one of the best-known patterns in IR research: **established democracies have very rarely, if ever, gone to war with each other.**",
      "It is a claim about **pairs** of democracies. It does not say democracies are peaceful in general. Democracies have fought many wars against non-democracies.",
      "Researchers offer two main reasons. Democracies may extend their habits of compromise to other democracies they trust. And elected leaders need public support, which makes risky wars harder to start.",
      "Like any pattern, it is argued over: about definitions, about other possible causes, and about how far it really reaches.",
      {key:"Democracies rarely fight each other; why, and how far that holds, is still debated."},
      "It matters because it is one of the few patterns in IR that many scholars, from several theories, accept as real, even while they argue about its causes."
     ],
     builder:[
      "The idea is often traced to Kant’s *Perpetual Peace* (1795). Michael Doyle (1983) linked Kant to modern evidence, and Bruce Russett and others tested it with large data sets. Jack Levy (1988) wrote that the absence of war between democracies “comes as close as anything we have to an empirical law in international relations”.",
      {table:[
        ["Explanation","Mechanism"],
        ["Normative (cultural)","Democracies settle disputes by compromise and extend that norm to other democracies"],
        ["Institutional (structural)","Elections, parliaments and a free press slow decisions and make costly wars politically risky"]
      ]},
      "Distinguish the **dyadic** claim (pairs of democracies rarely fight), which is strongly supported, from the **monadic** claim (democracies are more peaceful in general), which is much weaker and disputed.",
      "Correlation is not causation: alliances, wealth, trade and a shared enemy may also explain peace among democracies.",
      "Researchers test the claim with large data sets that code every pair of countries in each year as democratic or not and record any wars between them. Results depend on how “democracy” and “war” are defined, which is why the definitions are debated so closely. Even sceptics generally accept that wars between stable, well-established democracies have been extremely rare; the argument is mostly about why.",
      "The pattern is about war, usually defined in research as large-scale organised fighting between states; lesser disputes and threats between democracies do occur and are studied separately."
     ],
     pro:[
      "Main critiques:",
      {list:[
        "**Definitions and borderline cases:** the War of 1812, the 1898 Spanish–American War and Finland’s position in the Second World War (Britain declared war on Finland in December 1941) are debated, depending on how “democracy” and “war” are coded.",
        "**Small numbers before the 20th century**, when few democracies existed.",
        "**Common interests:** Farber and Gowa (1995) argued that Cold War alignment explains much of the post-1945 pattern; Christopher Layne (1994) examined near-wars between democracies and argued that power, not shared democracy, kept the peace.",
        "**Covert action:** democracies have secretly helped overthrow elected or parliamentary governments (Iran 1953, Guatemala 1954), which Sebastian Rosato (2003) and others cite against the normative explanation.",
        "**Democratisation:** Mansfield and Snyder (1995) found that unstable transitions to democracy can raise the risk of war."
      ]},
      "Related work proposes a **capitalist peace** (economic development and open markets as the deeper cause), a debate that remains open.",
      "The theory has been used in policy arguments, including arguments for promoting democracy abroad. Scholars caution that the research does not show that imposing democracy by force produces peace.",
      "Methodologically, the democratic peace is a good example of how IR research works: a striking pattern is found, competing explanations are proposed, critics test alternative causes, and the original claim is narrowed and refined rather than simply accepted or rejected. It is also a reminder that a statistical regularity does not by itself tell policymakers what to do."
     ]
    },
    related:["liberalism-ir","ir-theory"],
    read:[{book:"eirt", where:"Chapter 2 “Liberalism”"}],
    sources:[{t:"OpenStax Introduction to Political Science, 14.6 The Liberal and Social Worldview", url:"https://openstax.org/books/introduction-political-science/pages/14-6-the-liberal-and-social-worldview"}], checked:"2026-11"},

   {id:"constructivism", title:"Constructivism", aka:["social constructivism (IR)"], tags:["international relations","theory","constructivism"],
    summary:"The approach that sees world politics as shaped by shared ideas, identities and norms, which make interests and power mean what they do.",
    levels:{
     starter:[
      "A raised hand means “a question” in a classroom, “I bid” at an auction and “stop” to traffic. The hand is the same; the shared rules give it meaning.",
      "Constructivism says world politics works like this too. Weapons, money and borders are real, but what they mean depends on shared understandings. A neighbour’s army looks different if you see that neighbour as a friend or as an enemy.",
      "Constructivists study **identities** (who a state thinks it is), **norms** (shared expectations of proper behaviour) and how these change over time. Because they are made by people, they can be remade.",
      {key:"Constructivism: shared ideas shape what states want and what they think they can do."},
      "For example, the end of colonial rule was not only about armies and money; it also depended on a change in what most people around the world thought was legitimate."
     ],
     builder:[
      "Nicholas Onuf introduced the term to IR in *World of Our Making* (1989). Alexander Wendt’s 1992 article “Anarchy is What States Make of It” argued that self-help is not built into anarchy but grows from how states interact. His *Social Theory of International Politics* (1999) described three cultures of anarchy:",
      {table:[
        ["Culture","Others are…"],
        ["Hobbesian","Enemies"],
        ["Lockean","Rivals who accept each other’s survival"],
        ["Kantian","Friends who settle disputes without war"]
      ]},
      "Martha Finnemore and Kathryn Sikkink (1998) described a **norm life cycle**: emergence (norm entrepreneurs), a tipping point and cascade, then internalisation. The end of colonial rule’s legitimacy, marked by UN General Assembly Resolution 1514 (1960), is a classic example.",
      "Constructivists explain regional communities, such as the ASEAN Way of non-interference and consensus (Acharya, 2001), and how states’ interests change when their identities change. Jutta Weldes (1999) applied the lens to the 1962 Cuban crisis.",
      "Constructivism also helps explain change. If interests were fixed by material facts, big shifts in behaviour would be hard to account for. Constructivists point to changes in identity and norms, such as former enemies coming to see each other as partners, or colonial rule losing its legitimacy, as causes of lasting change in how states act. That is why many textbooks present it as the lens of change and possibility."
     ],
     pro:[
      "Constructivism is better described as a social ontology or approach than a substantive theory: it says ideas and practices constitute actors and interests, but it does not predict which ideas will prevail. Within it, **conventional** constructivists (Wendt, Katzenstein, Finnemore) accept many mainstream methods and often keep states at the centre; **critical** constructivists draw closer to post-structuralism and focus on language and power.",
      "Important contributions include Peter Katzenstein’s edited *The Culture of National Security* (1996), Nina Tannenwald’s work on the nuclear taboo, and Acharya’s “norm localisation” (2004), which shows how local actors reshape outside norms instead of simply adopting them.",
      "Critiques: ideas are hard to measure independently of the behaviour they are said to cause; explanations can be offered after the fact; mainstream versions underplay material power and coercion; and Wendt’s state-centred version is criticised by critical scholars as too close to the mainstream. Constructivists reply with process tracing, discourse analysis and comparative case studies, and argue that only an ideas-based lens can explain why the same material facts (British versus North Korean nuclear weapons, in Wendt’s 1995 example) produce different reactions.",
      "In the 1962 crisis, a constructivist reading also notes that the event itself changed shared understandings: leaders on both sides spoke afterwards of the need to avoid such confrontations, and the hotline and the Partial Test Ban Treaty (both 1963) can be read as early steps in building new norms of crisis management and restraint. Constructivists therefore see the crisis as both shaped by meanings and productive of new ones."
     ]
    },
    related:["english-school","realism","liberalism-ir","global-ir","ir-theory"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism”"},{book:"ospol", where:"Chapter 14, section 14.6 “The Liberal and Social Worldview”"}],
    sources:[{t:"OpenStax Introduction to Political Science, 14.6 The Liberal and Social Worldview", url:"https://openstax.org/books/introduction-political-science/pages/14-6-the-liberal-and-social-worldview"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"english-school", title:"The English School", aka:["international society approach"], tags:["international relations","theory","English School"],
    summary:"The approach that explains order among states through an international society: states that see themselves as bound by common rules and share common institutions.",
    levels:{
     starter:[
      "Strangers on a crowded road affect each other: they swerve, brake and honk. Neighbours on a quiet street do more: they follow shared rules, expect others to follow them, and defend them together.",
      "The English School says states can be like either group. When states merely affect each other, they form an **international system**. When they also accept common rules and practices, such as exchanging ambassadors and keeping treaties, they form an **international society**.",
      "This helps explain a puzzle: there is no world government, yet there is a lot of order in world politics.",
      {key:"The English School: anarchy, but a society of states with shared rules."},
      "English School scholars use history, law and philosophy to show how these shared rules grew up and how they are kept, bent or broken."
     ],
     builder:[
      "The approach grew from the British Committee on the Theory of International Politics, founded in 1959; the label “English School” was attached later by a critic, Roy Jones (1981). Its classic text is Hedley Bull’s *The Anarchical Society* (1977).",
      "Bull argued that an international society rests on **institutions** in a broad sense: diplomacy, international law, the balance of power, the special responsibilities of great powers, and even war fought by agreed rules. The 1961 Vienna Convention on Diplomatic Relations, which protects embassies and diplomats, is an everyday example.",
      "Martin Wight described three traditions of thought:",
      {table:[
        ["Tradition","Picture"],
        ["Realist (Hobbes, Machiavelli)","A state of war"],
        ["Rationalist (Grotius)","A society of states"],
        ["Revolutionist (Kant)","A community of humankind"]
      ]},
      "The English School sits in the rationalist middle, between realism and cosmopolitan liberalism.",
      "English School writers also distinguish **international society** from **world society**, the wider web of individuals, groups and non-state actors across borders. They tend to use history, law and philosophy rather than statistics, and they study how rules such as sovereignty, non-intervention and the laws of war have developed over centuries. In the 1962 crisis, they would point to the diplomacy and crisis management that kept even bitter rivals inside a shared set of practices.",
      "Its scholars include Martin Wight, Hedley Bull, Adam Watson, R. J. Vincent and, more recently, Barry Buzan, Andrew Hurrell and Tim Dunne."
     ],
     pro:[
      "English School scholars divide into **pluralists**, who want international society to rest on minimal shared rules such as sovereignty and non-intervention (Bull in much of his work, Robert Jackson), and **solidarists**, who argue states can agree on more, including protecting people from mass atrocities (Nicholas Wheeler, *Saving Strangers*, 2000). This debate informs discussion of the Responsibility to Protect.",
      "Bull and Adam Watson’s *The Expansion of International Society* (1984) told how a European society spread worldwide. Critics argue that this narrative looks outward from Europe, treats expansion largely as diffusion rather than conquest, and overlooks long-established non-European orders. Gerrit Gong (1984) documented the “standard of civilisation” used to deny equal status to states such as China, Siam and the Ottoman Empire.",
      "Barry Buzan (*From International to World Society?*, 2004) refined the distinction between international society (states) and world society (individuals and non-state actors) and called for more attention to regional international societies.",
      "Other critiques: loose, historical methods; an emphasis on order that can mask inequality; and a state-centred view. Defenders value its historical depth and its middle way between realism and liberalism.",
      "The approach has enjoyed a revival since the 1990s, with new work on regional international societies (for example in East Asia or the Middle East), on the role of great-power management and on how international society responds to new challenges such as climate change. Its emphasis on history makes it a natural partner for Global IR’s call to ground the field in world history rather than in European history alone."
     ]
    },
    related:["constructivism","realism","liberalism-ir","responsibility-to-protect","ir-theory"],
    read:[{book:"eirt", where:"Chapter 3 “The English School”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"marxism-ir", title:"Marxist lenses in IR", aka:["Marxism (IR)","historical materialism","world-systems analysis"], tags:["international relations","theory","critical","economy"],
    summary:"Lenses that explain world politics through capitalism, class and the global economy, including theories of imperialism, dependency and world-systems.",
    levels:{
     starter:[
      "Think about the chocolate in a shop. The cocoa may be grown in one region, processed and branded in another, and most of the profit may end up far from the farms. Marxist lenses ask why the world economy works like this, and who gains.",
      "They build on Karl Marx’s idea that the way a society produces wealth shapes its politics, and that capitalism divides owners from workers. In IR, that division is traced across the whole globe: between rich **core** regions and poorer **periphery** regions, and between classes within every country.",
      {key:"Marxist lenses: follow the money, and ask who gains from the global economy."},
      "These lenses are critical: they ask not only how the world economy works, but whom it works for, and how it could be organised differently."
     ],
     builder:[
      "Main strands:",
      {table:[
        ["Strand","Main idea"],
        ["Theories of imperialism","Lenin (1917): capitalist rivalry for markets and colonies drove empire and war"],
        ["Dependency theory","Peripheral economies are kept dependent by how they are tied to the core (Latin American scholars, from the 1950s–60s)"],
        ["World-systems theory","Wallerstein (1974): a world economy with core, semi-periphery and periphery"],
        ["Gramscian / critical theory","Cox (1981): hegemony rests on consent and ideas as well as force"]
      ]},
      "These lenses explain lasting inequality between regions, the role of companies and finance in world politics, and why some states push for a different economic order. Unit 3 covers dependency and world-systems theory as sociology; IR adds questions about states, war and international institutions.",
      "Robert Cox’s line “theory is always for someone and for some purpose” comes from this tradition and underlies much critical IR.",
      "Marxist lenses also ask who benefits from international institutions and rules. For example, they examine how trade and investment rules, debt arrangements or intellectual property protections may favour countries and companies at the core. In the 1962 crisis, a Marxist reading stresses the conflict between Cuba’s revolutionary government, which nationalised US-owned businesses in 1960, and the United States, which responded with an embargo.",
      "The core–periphery picture shows why inequality between regions can last even without any army being involved, a pattern that realists rarely discuss."
     ],
     pro:[
      "In Cox’s Gramscian framework, world orders combine material capabilities, ideas and institutions; a hegemonic order is one where the dominant state’s interests are widely accepted as universal. Others in this tradition include Stephen Gill and Mark Rupert, and theorists of uneven and combined development such as Justin Rosenberg.",
      "World-systems analysis treats the capitalist world-economy, not the state, as the unit of analysis, and expects states to rise and fall within it. The semi-periphery helps explain how some economies move up or down over time.",
      "Critiques: economic reductionism (politics, nationalism and security have their own logic: workers in 1914 largely supported their nations’ war efforts); difficulty explaining rapid growth in some closely integrated economies, which challenges strong dependency claims; and the collapse of most state-socialist systems by the early 1990s. Defenders reply that inequality between and within countries, and the power of capital, remain central and are neglected by mainstream theories.",
      "Marxist and critical ideas have influenced several other approaches discussed in this unit: postcolonial scholars draw on their analysis of empire and exploitation, feminist political economists study women’s paid and unpaid work in global production, and critical theorists in the Frankfurt School tradition, such as Andrew Linklater, ask how political communities could become more inclusive. Their shared question remains Cox’s: whom does a given order serve?"
     ]
    },
    related:["karl-marx","feminism-ir","postcolonialism-ir","theories-global-inequality","ir-theory"],
    read:[{book:"eirt", where:"Chapter 5 “Marxism” and Chapter 6 “Critical Theory”"},{book:"ospol", where:"Chapter 14, section 14.7 “Critical Worldviews”"}],
    sources:[{t:"OpenStax Introduction to Political Science, 14.7 Critical Worldviews", url:"https://openstax.org/books/introduction-political-science/pages/14-7-critical-worldviews"}], checked:"2026-11"},

   {id:"feminism-ir", title:"Feminist IR", aka:["feminist international relations","gender and IR"], tags:["international relations","theory","critical","gender"],
    summary:"Lenses that ask where women are in world politics and how ideas about gender shape power, security and what counts as serious politics.",
    levels:{
     starter:[
      "Feminist IR begins with a question the political scientist Cynthia Enloe made famous: **where are the women?**",
      "Look at a tourist resort, a banana plantation, an embassy or a military base, and women are there: working, caring, migrating, organising. The usual story of world politics, told through presidents and generals, leaves most of them out.",
      "Feminist scholars also look at **gender**: how ideas about being “manly” or “womanly” shape what counts as strong or weak, serious or soft. These ideas affect which policies feel acceptable to leaders.",
      {key:"Feminist IR: find the people the usual story leaves out, and see how gender shapes power."},
      "Feminist IR is not one theory. It includes many approaches that share these questions but answer them in different ways."
     ],
     builder:[
      "Key works:",
      {list:[
        "**Cynthia Enloe**, *Bananas, Beaches and Bases* (1989): women’s labour and lives in plantations, tourism, diplomacy, military bases and domestic work; “the personal is international”.",
        "**J. Ann Tickner**, *Gender in International Relations* (1992): security, power and the rational state defined around a masculine ideal; a broader idea of security including freedom from poverty and violence.",
        "**Carol Cohn** (1987): the abstract, sanitised language of nuclear strategists."
      ]},
      "A **gendered lens** is not the same as “adding women”. It asks how masculinity and femininity are used, for example when leaders fear looking “soft”.",
      "Feminist research and activism helped bring about UN Security Council Resolution 1325 on Women, Peace and Security, adopted unanimously on 31 October 2000.",
      "It builds on feminist theory from sociology, including intersectionality: gender combines with class, race and nationality.",
      "Feminist scholars also study how war and conflict affect people differently by gender: who is recruited to fight, who is displaced, who cares for the wounded, who rebuilds afterwards. They ask how peace agreements are negotiated and who is in the room. These questions link feminist IR to research on human security and peacebuilding covered in Unit 8.",
      "Feminist scholars point out that much world politics depends on work that is rarely counted, such as care, cleaning and the support provided by the families of diplomats and soldiers."
     ],
     pro:[
      "Feminist IR includes liberal feminists (equal representation and rights), critical and standpoint feminists (knowledge from women’s experience), post-structural feminists (gender as discourse) and postcolonial feminists. Chandra Talpade Mohanty’s “Under Western Eyes” (1984) criticised Western feminist writing that portrayed women in the Global South as a single victimised group.",
      "A notable exchange followed Robert Keohane’s invitation for feminists to offer testable hypotheses; Tickner’s “You Just Don’t Understand” (1997) argued that the disagreement was about epistemology, not just method. Feminist IR often relies on interviews, ethnography and discourse analysis.",
      "Critiques: some argue gender explains less than power or class; others warn against essentialism, the idea that women are naturally peaceful, which most feminist IR scholars reject; others question whether Resolution 1325’s implementation has matched its promise, a debate within feminism itself.",
      "Applied to the 1962 crisis, a gendered lens notes that the US advisers debating nuclear war were all men, that the language of toughness and resolve shaped acceptable options, and that the civilians who would have borne the cost were not consulted.",
      "Feminist IR has expanded to study masculinities (how ideas of manhood shape militaries and leadership), the global political economy of care work and migration, and the representation of women and gender in foreign policy, including governments that describe their foreign policy as “feminist”. Each of these areas has its own debates about evidence and about how far change in language or representation leads to change in practice."
     ]
    },
    related:["feminist-theory","marxism-ir","postcolonialism-ir","ir-theory"],
    read:[{book:"eirt", where:"Chapter 8 “Feminism”"},{book:"ospol", where:"Chapter 14, section 14.7 “Critical Worldviews”"}],
    sources:[{t:"UN press release SC/6942: Security Council adopts resolution 1325 (31 October 2000)", url:"https://press.un.org/en/2000/20001031.sc6942.doc.html"},{t:"OpenStax Introduction to Political Science, 14.7 Critical Worldviews", url:"https://openstax.org/books/introduction-political-science/pages/14-7-critical-worldviews"}], checked:"2026-11"},

   {id:"postcolonialism-ir", title:"Postcolonialism in IR", aka:["postcolonial theory","decolonial approaches"], tags:["international relations","theory","critical","empire"],
    summary:"Lenses that study the lasting effects of colonial rule on world politics and on how the field of IR itself thinks.",
    levels:{
     starter:[
      "For centuries much of the world was ruled by European empires. Postcolonialism asks what that history left behind: in borders, economies, languages and ideas, and in how people in former colonies are seen and heard.",
      "It also turns the question on IR itself. Many of the field’s favourite concepts, such as sovereignty and the “Westphalian” system, were described as universal while colonised peoples were denied them.",
      "A simple test it offers: when you read about an event, ask whose experience is at the centre, and whose voice is missing.",
      {key:"Postcolonialism: empire’s legacy still shapes world politics and the ways we study it."},
      "Postcolonial scholars come from many places and disciplines, including literature, history and philosophy, and they often disagree with each other."
     ],
     builder:[
      "Key thinkers, mostly from outside IR:",
      {list:[
        "**Edward Said**, *Orientalism* (1978): Western knowledge built an image of “the Orient” as exotic, backward and unchanging, bound up with imperial power.",
        "**Frantz Fanon**, *The Wretched of the Earth* (1961): the violence of colonialism and decolonising minds as well as territories.",
        "**Gayatri Chakravorty Spivak**, “Can the Subaltern Speak?” (1988): whether the most marginalised can be heard when others speak for them.",
        "**Dipesh Chakrabarty**, *Provincializing Europe* (2000): treating Europe as one region among many, not the measure of all."
      ]},
      "In IR, postcolonial scholars criticise **Eurocentrism**, highlight the “standard of civilisation” used to exclude non-European states, and study the agency of anti-colonial movements, including the 1955 Bandung Conference of Asian and African states.",
      "Applied to the 1962 crisis, the lens notes that in Cuba it is the October Crisis, that Cuba had lived under a US right to intervene (the Platt Amendment, 1901–1934), and that the deal was made without Cuba.",
      "Postcolonial scholars also look at how the past lives on: in borders drawn by colonial powers, in economic ties between former colonies and former colonisers, in languages of government and education, and in the ways news and scholarship describe different parts of the world. They ask who is presented as an actor and who as a problem to be managed, which links their work to feminist and Global IR concerns about voice and agency."
     ],
     pro:[
      "Postcolonial IR (associated with scholars such as Sankaran Krishna, Siba Grovogui, Robbie Shilliam and Sheila Nair) argues that race and empire are constitutive of modern international order rather than background. Decolonial approaches, rooted especially in Latin American scholarship (for example Aníbal Quijano and Walter Mignolo), speak of a “coloniality” of power and knowledge that outlasted formal empire.",
      "These scholars also examine the discipline’s own history, including how early 20th-century Western IR writing treated colonial administration and race as central topics.",
      "Critiques: postcolonialism is said to be stronger in critique than in testable explanation; to treat “the West” as monolithic; and to underplay the power and choices of post-independence elites. Some critics also argue it can romanticise pre-colonial orders. Defenders answer that exposing the standpoint of theories is a precondition for better ones, which links postcolonialism to the Global IR agenda.",
      "Postcolonial IR has been influential in debates about humanitarian intervention, development and the “war on terror”, where critics ask whether familiar justifications repeat older imperial patterns of speaking for others. It has also encouraged the discipline to rethink its teaching: reading thinkers from former colonies, studying anti-colonial diplomacy and treating decolonisation as one of the central events of the 20th century."
     ]
    },
    related:["global-ir","marxism-ir","feminism-ir","decolonization","ir-theory"],
    read:[{book:"eirt", where:"Chapter 9 “Postcolonialism”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"global-ir", title:"Global IR", aka:["Global International Relations","non-Western IR theory"], tags:["international relations","theory","Global IR"],
    summary:"An agenda, set out by Amitav Acharya in 2014, for an IR that draws on the histories, ideas and agency of every region, not only the West.",
    levels:{
     starter:[
      "Imagine a cookbook called “World Cooking” in which nearly every recipe comes from one region. It might be a good book, but the title would promise more than it delivers.",
      "Global IR says the study of International Relations has been like that. Most of its famous theories were built from European and North American history. Global IR asks the field to listen to ideas and experiences from Asia, Africa, Latin America, the Middle East, the Pacific and everywhere else, and to treat people there as shapers of world order, not only as places where things happen.",
      "It does not throw away existing theories. It aims to widen them.",
      {key:"Global IR: one field, many voices, grounded in world history."},
      "Its best-known advocate is the scholar Amitav Acharya, who set out its agenda in 2014."
     ],
     builder:[
      "In 2007 Amitav Acharya and Barry Buzan asked “Why is there no non-Western international relations theory?”. In 2014, as the first non-Western scholar elected president of the International Studies Association, Acharya set out a Global IR agenda in his presidential address, published in *International Studies Quarterly*. Its six dimensions:",
      {ol:[
        "Pluralistic universalism.",
        "Grounding in world history.",
        "Adding to, not replacing, existing theories.",
        "Regions and regionalism as central.",
        "Rejecting exceptionalism.",
        "Recognising many forms of agency."
      ]},
      "Examples of ideas it draws on include South Asian thought (the Arthashastra, Gandhi’s non-violence, non-alignment), recent Chinese theories (tianxia, relational theory, moral realism), Pan-Africanism and ubuntu-inspired thinking, Latin American dependency theory and legal doctrines on intervention, Islamic thought from Ibn Khaldun to siyar, and Pacific ideas such as the “Blue Pacific Continent”. Each tradition is internally diverse.",
      "Global IR also asks practical questions about the field: who writes the textbooks, which languages research is published in, where conferences are held and whose universities can afford to take part. Many of its supporters argue that widening the field depends on these practical changes as much as on new theories. The E-IR theory book itself includes chapters on Asian, Global South and Indigenous perspectives for this reason.",
      "Global IR does not claim that any one region’s ideas are better; it asks that all regions’ histories and thinkers be taken seriously as sources of general theory."
     ],
     pro:[
      "Acharya and Buzan’s *The Making of Global International Relations* (2019) retells the discipline’s history from its origins to its centenary with a global cast. Global IR overlaps with postcolonial critique but is more reformist: it seeks to broaden the mainstream rather than reject it.",
      "Debates:",
      {list:[
        "**National schools:** critics such as William Callahan warn that some theories presented as national or civilisational (for instance readings of tianxia) can serve state agendas and present hierarchy as harmony.",
        "**Essentialism:** labelling ideas “Asian” or “African” risks treating diverse traditions as single blocs.",
        "**Too little or too much:** mainstream sceptics say good theory is universal already; critical scholars say Global IR is too cautious about the power structures of the discipline (publishing, funding, language)."
      ]},
      "Acharya’s earlier work on **norm localisation** (2004) is an example of the approach: it shows how Southeast Asian actors adapted outside norms to local beliefs, giving them agency in norm diffusion.",
      "Global IR connects to other parts of this unit in several ways. It shares constructivism’s interest in norms and their localisation, the English School’s attention to history and regional international societies, and postcolonialism’s critique of Eurocentrism. Its distinctive contribution is to frame these as a positive programme for the whole discipline, inviting scholars everywhere to treat their own region’s history as a source of general theory rather than only as a case to which Western theories are applied."
     ]
    },
    related:["amitav-acharya","postcolonialism-ir","constructivism","ir-theory"],
    read:[{book:"eirt", where:"Chapter 10 “Towards a Global IR?”, Chapter 16 “Asian Perspectives” and Chapter 17 “Global South Perspectives”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"},{t:"Acharya, “Global International Relations (IR) and Regional Worlds”, International Studies Quarterly (2014)", url:"https://academic.oup.com/isq/article/58/4/647/1801873"}], checked:"2026-11"},

   {id:"hans-morgenthau", title:"Hans Morgenthau", aka:["Hans J. Morgenthau"], tags:["international relations","thinker","realism"],
    summary:"German-born American scholar (1904–1980) whose *Politics Among Nations* (1948) made classical realism the leading approach in post-war IR.",
    levels:{
     starter:[
      "Hans Morgenthau was born in Coburg, Germany, in 1904. A Jewish legal scholar, he left Germany as the Nazis rose to power and, after years in Switzerland and Spain, settled in the United States in 1937. He taught at the University of Chicago from 1943 to 1971.",
      "His big idea: politics among nations is a struggle for power, rooted in human nature, and wise leaders should pursue their country’s real interests with **prudence**, rather than chasing ideological crusades.",
      "His textbook *Politics Among Nations* (1948) shaped how generations of students learned IR.",
      {key:"Morgenthau: interest defined as power, pursued with prudence."},
      "He is often called a founder of modern realism, but he also wrote at length about ethics, democracy and the dangers of nuclear weapons, and he warned leaders against arrogance and crusades."
     ],
     builder:[
      "Key works: *Scientific Man vs. Power Politics* (1946), *Politics Among Nations: The Struggle for Power and Peace* (1948) and *In Defense of the National Interest* (1951).",
      "From the second edition (1954), *Politics Among Nations* opens with six principles of political realism, including that politics is governed by objective laws rooted in human nature, that leaders think and act in terms of **interest defined as power**, and that the moral aspirations of one nation should not be confused with universal moral law.",
      "Concepts associated with him: the **national interest**, the **balance of power** as a source of stability, and diplomacy as the best means of keeping peace.",
      "He was not an advocate of ruthlessness. He was an early, prominent critic of the US war in Vietnam, arguing that it served no vital national interest. IR students today read him for the classical realist tradition and for his warnings against moralistic crusades.",
      "Morgenthau combined realism with a strong sense of moral responsibility. He argued that leaders face tragic choices in which every option has costs, and that pretending otherwise leads to disaster. He also hoped that skilful diplomacy and a stable balance of power could preserve peace, and late in life he worried deeply about nuclear weapons, which he believed made traditional power politics far more dangerous."
     ],
     pro:[
      "Morgenthau’s realism grew from European legal and political thought (including debates with Carl Schmitt) and from his experience of the collapse of the Weimar Republic. *Scientific Man vs. Power Politics* attacked the belief that social science or reason alone could solve political conflict.",
      "Later scholars have challenged the image of Morgenthau as a simple power theorist. Writers such as Richard Ned Lebow and Michael C. Williams present him as a thinker deeply concerned with ethics, the limits of power and the dangers of nuclear weapons.",
      "Critiques: his reliance on “human nature” is hard to test, which motivated Waltz’s structural turn; feminist scholar J. Ann Tickner (1988) reformulated his six principles to show their gendered assumptions; and critics argue that the “national interest” is too vague to guide policy, since leaders define it differently.",
      "He died in New York in 1980. His influence persists in classical and neoclassical realism and in debates about restraint in foreign policy.",
      "His work remains on reading lists worldwide, and it is read in different ways: as a scientific theory of power politics, as a warning against moralism in foreign policy, or as a reflective, almost philosophical account of the limits of politics. Students who read him directly are often surprised by how much he wrote about ethics, democracy and the dangers of unchecked power."
     ]
    },
    related:["realism","kenneth-waltz","ir-theory"],
    read:[{book:"eirt", where:"Chapter 1 “Realism” and Chapter 19 “A Contemporary Perspective on Realism”"}],
    sources:[{t:"Britannica: Hans Morgenthau", url:"https://www.britannica.com/biography/Hans-Morgenthau"},{t:"Stanford Encyclopedia of Philosophy: Political Realism in International Relations", url:"https://plato.stanford.edu/entries/realism-intl-relations/"}], checked:"2026-11"},

   {id:"kenneth-waltz", title:"Kenneth Waltz", aka:["Kenneth N. Waltz"], tags:["international relations","thinker","realism"],
    summary:"American scholar (1924–2013) who sorted the causes of war into three images and founded neorealism with *Theory of International Politics* (1979).",
    levels:{
     starter:[
      "Kenneth Waltz was born in Ann Arbor, Michigan, in 1924 and died in New York in 2013. He served in the US Army, taught at several universities and spent much of his career at the University of California, Berkeley.",
      "His big idea: to understand world politics, look at the **structure** of the international system. Because there is no government above states, all states must look after their own security, and that pushes them into similar behaviour whoever leads them.",
      "Students also know him for sorting the causes of war into three “images”: human nature, the type of state and the international system.",
      {key:"Waltz: the system’s structure shapes how states behave."},
      "His approach became known as neorealism or structural realism, and it dominated debates in IR for decades."
     ],
     builder:[
      "Key works:",
      {table:[
        ["Work","Main idea"],
        ["*Man, the State, and War* (1959)","Three images of the causes of war: individual, state, international system"],
        ["*Theory of International Politics* (1979)","Neorealism: structure defined by anarchy, like units and the distribution of capabilities"],
        ["*The Spread of Nuclear Weapons* (with Scott Sagan, 1995)","A debate on whether nuclear spread stabilises or endangers"]
      ]},
      "Waltz argued that bipolar systems are more stable than multipolar ones, that states balance against concentrations of power, and that states seek security more than maximum power (defensive realism). He served as president of the American Political Science Association in 1987–88.",
      "The three images became the basis of the “levels of analysis” used throughout IR.",
      "Waltz’s three images are still a basic tool for students. Asked why a war happened, you can look at the first image (leaders’ personalities and human nature), the second (the kind of state and its internal politics) and the third (the anarchic international system). Waltz argued that the first two explain particular wars, but the third explains why war remains possible at all: in anarchy, nothing prevents it.",
      "He also argued that theories must simplify: a theory is a picture of a part of the world, mentally formed, that leaves most things out in order to explain the patterns that matter."
     ],
     pro:[
      "Waltz modelled his theory partly on microeconomics: as market structure constrains firms, the international structure constrains states. He insisted it was a theory of international politics, not of foreign policy, and that its explanatory power came from deliberate simplification.",
      "His work prompted the neorealist–neoliberal debate and sharp critiques: Ashley’s “The Poverty of Neorealism” (1984), Ruggie’s argument about change in the character of units, Wendt’s constructivist reply (1992), and the charge that the theory could not anticipate the peaceful end of the Cold War. Waltz later defended his approach in “Structural Realism after the Cold War” (2000).",
      "His argument that the gradual spread of nuclear weapons may strengthen deterrence remains controversial; Sagan’s organisational critique (accidents, military biases) is the classic counterpoint.",
      "Few IR scholars have been as widely cited, criticised and taught.",
      "Waltz’s style of theory building has been as influential as its content. He argued that a theory should be judged by how much it explains with how little, and that theories are inventions, not discoveries, that must be tested against the patterns they claim to explain. Even scholars who reject neorealism often adopt his distinction between theories of the system and theories of foreign policy.",
      "For students, the practical lesson of Waltz’s work is to ask, of any explanation of world politics, which image or level it relies on, and whether a system-level pattern is being mistaken for a single government’s choice."
     ]
    },
    related:["neorealism","realism","levels-of-analysis","hans-morgenthau"],
    read:[{book:"eirt", where:"Chapter 1 “Realism”"}],
    sources:[{t:"Stanford Encyclopedia of Philosophy: Political Realism in International Relations", url:"https://plato.stanford.edu/entries/realism-intl-relations/"},{t:"Britannica: Kenneth N. Waltz", url:"https://www.britannica.com/biography/Kenneth-N-Waltz"}], checked:"2026-11"},

   {id:"amitav-acharya", title:"Amitav Acharya", tags:["international relations","thinker","Global IR","constructivism"],
    summary:"Indian-born scholar of Southeast Asian regionalism and norms, and the leading voice of the Global IR agenda.",
    levels:{
     starter:[
      "Amitav Acharya was born in India. He is a professor of International Relations at American University in Washington, D.C., and has taught and researched in Asia, North America and elsewhere.",
      "His big idea: IR should become a truly **global** field, drawing on the history, ideas and agency of every region, not only the West. In 2014–15 he served as the first non-Western scholar elected president of the International Studies Association, one of the largest professional bodies for IR scholars, and used the role to launch the Global IR agenda.",
      "He is also known for studying how Southeast Asian states built shared norms through ASEAN.",
      {key:"Acharya: one field, many voices; ideas and agency come from everywhere."},
      "His work links constructivism, regional studies and the history of ideas."
     ],
     builder:[
      "Key works:",
      {table:[
        ["Work","Main idea"],
        ["*Constructing a Security Community in Southeast Asia* (2001)","ASEAN’s norms helped make war among members unlikely"],
        ["“How Ideas Spread: Whose Norms Matter?” (2004)","Norm localisation: local actors adapt outside norms"],
        ["“Why is there no non-Western IR theory?” (with Buzan, 2007)","The field had not looked for non-Western ideas"],
        ["“Global International Relations (IR) and Regional Worlds” (2014)","The six-point Global IR agenda"],
        ["*The Making of Global International Relations* (with Buzan, 2019)","A global history of the discipline"]
      ]},
      "His work bridges constructivism (norms, identity), regionalism and the critique of Eurocentrism. Students meet him in debates about ASEAN, norm diffusion and the future of world order.",
      "Acharya’s work on ASEAN shows how a group of states with recent conflicts and very different political systems built shared expectations of non-interference and consensus. He argued that these norms, rather than a balance of power or a strong regional organisation, explain much of the region’s peace among members, while acknowledging the limits critics point to.",
      "He has taught at universities in Asia, North America and Europe, and his work on ASEAN norms is widely cited in studies of Southeast Asia.",
      "Students often meet his ideas first through the debate on ASEAN, then through the Global IR agenda that grew out of his work on how ideas spread between regions."
     ],
     pro:[
      "Acharya’s norm localisation argument challenged the view that norms diffuse from a Western core to a passive periphery: local actors select, reframe and adapt norms to fit existing beliefs, and sometimes generate norms that spread outward (“norm subsidiarity”).",
      "His Global IR agenda is reformist rather than revolutionary: it aims to broaden existing theories and include regional worlds, while rejecting exceptionalism of every kind, including national schools that claim a country’s tradition is uniquely virtuous.",
      "Critics from the mainstream question whether regional origins matter for theory; critics from postcolonial and decolonial perspectives argue the agenda leaves the discipline’s power structures largely intact. Others debate his security-community reading of ASEAN, pointing to the limits of non-interference.",
      "He has also written on the changing world order, for example in *The End of American World Order*, arguing that a “multiplex” world with many centres of power and ideas is emerging.",
      "Acharya has also argued for recognising the agency of the Global South in building the post-1945 order, for example the contributions of Asian, African and Latin American states and thinkers to norms of sovereignty, non-intervention, human rights and development. This historical claim, developed in his later work, is central to his case that Global IR is not only a moral demand but a more accurate history of world politics."
     ]
    },
    related:["global-ir","constructivism","postcolonialism-ir"],
    read:[{book:"eirt", where:"Chapter 10 “Towards a Global IR?”"}],
    sources:[{t:"SOAS University of London: Professor Amitav Acharya", url:"https://soas.ac.uk/about/amitav-acharya"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"}
  ],
  terms:[
   {id:"ir-theory", term:"IR theory", def:"A deliberate, testable way of explaining or understanding world politics that says which actors and causes matter most.", codex:"ir-theory"},
   {id:"normative-theory", term:"Normative theory", def:"Theory about what ought to be, such as when war is justified or what states owe each other. It is argued with reasons rather than settled by evidence alone.", codex:"ir-theory"},
   {id:"empirical-theory", term:"Empirical theory", def:"Theory about what is: it explains causes and patterns and can be checked against evidence.", codex:"ir-theory"},
   {id:"analytic-eclecticism", term:"Analytic eclecticism", def:"Combining ideas from several theories to explain a specific problem, instead of defending one theory against all others (Sil and Katzenstein, 2010).", codex:"ir-theory"},
   {id:"realism", term:"Realism", def:"A family of IR theories that sees world politics as a competition for power and security among states, with no government above them.", codex:"realism"},
   {id:"classical-realism", term:"Classical realism", def:"Realism that roots power politics in human nature and stresses statecraft and prudence; its central figure is Hans Morgenthau.", codex:"realism"},
   {id:"neorealism", term:"Neorealism", def:"Kenneth Waltz’s structural realism: the anarchic structure of the system, not human nature, pushes states into similar behaviour.", codex:"neorealism"},
   {id:"neoclassical-realism", term:"Neoclassical realism", def:"Realism that keeps the international system as the main driver but adds domestic factors, such as leaders’ perceptions, to explain particular foreign policies.", codex:"realism"},
   {id:"defensive-realism", term:"Defensive realism", def:"The realist view that states seek enough power to be secure, because grabbing too much provokes others to balance against them.", codex:"realism"},
   {id:"offensive-realism", term:"Offensive realism", def:"John Mearsheimer’s realist view that states seek as much power as they can get, ideally becoming the strongest power in their region.", codex:"realism"},
   {id:"self-help", term:"Self-help", def:"In realist thought, the situation under anarchy in which each state must ultimately rely on itself for its security.", codex:"realism"},
   {id:"national-interest", term:"National interest", def:"What a state’s leaders see as the country’s basic goals, such as survival, security and prosperity. Realists use it as a guide to foreign policy; critics say it is often vague.", codex:"realism"},
   {id:"balance-of-power", term:"Balance of power", def:"The idea that states counter a rising or threatening power by building up their own strength or forming alliances, so that no one state dominates.", codex:"realism"},
   {id:"bandwagoning", term:"Bandwagoning", def:"Siding with a rising or threatening power instead of balancing against it, to share in its success or avoid its anger.", codex:"realism"},
   {id:"security-dilemma", term:"Security dilemma", def:"The trap in which steps one state takes to feel safer make others feel less safe, so they respond, leaving everyone less secure.", codex:"realism"},
   {id:"relative-gains", term:"Relative gains", def:"How much one side gains compared with another. Realists argue states care about this, which makes cooperation harder.", codex:"liberalism-ir"},
   {id:"absolute-gains", term:"Absolute gains", def:"Whether a side is better off than before, regardless of how much others gain. Liberals argue states often focus on this.", codex:"liberalism-ir"},
   {id:"liberalism-ir", term:"Liberalism (IR)", def:"A family of IR theories holding that interdependence, institutions and domestic politics can make cooperation common and conflict less likely, even without a world government.", codex:"liberalism-ir"},
   {id:"complex-interdependence", term:"Complex interdependence", def:"Keohane and Nye’s ideal type of relations with many channels between societies, no fixed ranking of issues and little role for military force.", codex:"liberalism-ir"},
   {id:"neoliberal-institutionalism", term:"Neoliberal institutionalism", def:"The liberal theory (Keohane, 1984) that international institutions help self-interested states cooperate by providing information and lowering the costs of deals. Not the same as neoliberal economic policy.", codex:"liberalism-ir"},
   {id:"prisoners-dilemma", term:"Prisoner’s dilemma", def:"A game in which each side’s best move on its own leads to an outcome worse for both than if they had cooperated.", codex:"liberalism-ir"},
   {id:"democratic-peace-theory", term:"Democratic peace theory", def:"The finding that established democracies have very rarely, if ever, fought wars against each other, and the explanations offered for it.", codex:"democratic-peace"},
   {id:"constructivism", term:"Constructivism", def:"An approach to IR that sees shared ideas, identities and norms as shaping what states want and how they act.", codex:"constructivism"},
   {id:"identity-ir", term:"Identity (IR)", def:"A state’s or group’s sense of who it is (for example, a neutral country or a regional leader), which constructivists say shapes its interests.", codex:"constructivism"},
   {id:"norm-life-cycle", term:"Norm life cycle", def:"Finnemore and Sikkink’s three stages of a norm: emergence, cascade after a tipping point, and internalisation.", codex:"constructivism"},
   {id:"english-school", term:"English School", def:"An approach to IR that explains order among states through an international society of shared rules and institutions.", codex:"english-school"},
   {id:"international-society", term:"International society", def:"In Hedley Bull’s terms, states that see themselves as bound by common rules and share common institutions such as diplomacy and international law.", codex:"english-school"},
   {id:"critical-theory-ir", term:"Critical theory (IR)", def:"Theory that asks how the current world order came about, whose interests it serves and how it could change, as opposed to problem-solving theory.", codex:"marxism-ir"},
   {id:"core-periphery", term:"Core–periphery", def:"The world-systems picture of a rich core that sells high-value goods and a poorer periphery that supplies raw materials and low-wage work, with profits flowing to the core.", codex:"marxism-ir"},
   {id:"semi-periphery", term:"Semi-periphery", def:"In world-systems theory, the middle zone of countries with features of both core and periphery.", codex:"marxism-ir"},
   {id:"hegemony", term:"Hegemony", def:"Leadership or dominance that rests on consent and accepted ideas as well as force. In realist use, it often just means one dominant power.", codex:"marxism-ir"},
   {id:"feminist-ir", term:"Feminist IR", def:"Approaches that ask where women are in world politics and how ideas about gender shape power and security.", codex:"feminism-ir"},
   {id:"gendered-lens", term:"Gendered lens", def:"Looking at how ideas about masculinity and femininity shape what counts as strength, security and serious politics, not only where women are.", codex:"feminism-ir"},
   {id:"postcolonialism", term:"Postcolonialism", def:"Approaches that study the lasting effects of colonial rule on world politics and on how IR itself thinks.", codex:"postcolonialism-ir"},
   {id:"orientalism", term:"Orientalism", def:"Edward Said’s term (1978) for a Western style of thought that portrayed “the Orient” as exotic, backward and unchanging, bound up with imperial power.", codex:"postcolonialism-ir"},
   {id:"eurocentrism", term:"Eurocentrism", def:"Treating Europe’s history and experience as the normal or universal pattern for everyone.", codex:"postcolonialism-ir"},
   {id:"global-ir", term:"Global IR", def:"Amitav Acharya’s agenda for an IR that draws on the histories, ideas and agency of every region, not only the West.", codex:"global-ir"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u6-q01", lesson:"e2u6-l1", level:1, q:"Which is the best description of an IR theory?", options:[
     {t:"A deliberate, simplified way of explaining or understanding world politics that can be checked against evidence", ok:true, why:"That is the core idea: a theory selects what matters, proposes how it works and sets out expectations that evidence can test."},
     {t:"A personal opinion about which countries are good or bad", why:"Opinions don’t have to state assumptions or be testable. Theories do, and they are not about which countries are good."},
     {t:"A complete list of every fact about world politics", why:"A theory deliberately leaves things out, like a map. A list of every fact would explain nothing."},
     {t:"A political party’s programme for foreign policy", why:"That is an ideology or programme. Theories aim to explain or understand, not to win votes."}
   ]},
   {id:"e2u6-q02", lesson:"e2u6-l1", level:2, q:"“Rich countries should cancel the debts of the poorest countries.” What kind of claim is this?", options:[
     {t:"Normative: it says what ought to happen", ok:true, why:"“Should” marks a judgement about what is right. Reasons can support it, but evidence alone can’t settle it."},
     {t:"Explaining: it identifies a cause and an effect", why:"It names no cause or effect; it recommends an action."},
     {t:"Understanding: it reconstructs what an event meant to those involved", why:"It doesn’t describe anyone’s experience or beliefs; it states a view about what should be done."},
     {t:"A statistic that can be checked in a database", why:"No data could prove that something should happen. Data could inform the argument but not settle it."}
   ]},
   {id:"e2u6-q03", lesson:"e2u6-l1", level:1, q:"Who wrote that “theory is always for someone and for some purpose”?", options:[
     {t:"Robert Cox", ok:true, why:"Cox wrote it in 1981, contrasting problem-solving theory with critical theory."},
     {t:"Hans Morgenthau", why:"Morgenthau was a classical realist; the line comes from Cox’s critical theory."},
     {t:"Kenneth Waltz", why:"Waltz founded neorealism. Cox wrote partly in reaction to theories like his."},
     {t:"Thucydides", why:"Thucydides was an ancient historian. The line is from a 1981 article by Robert Cox."}
   ]},
   {id:"e2u6-q04", lesson:"e2u6-l1", level:2, q:"Lucía says the metro map of her city is “wrong” because it doesn’t show real distances. How does this connect to IR theories?", options:[
     {t:"Like the map, a theory leaves things out on purpose; the question is whether it serves its job well", ok:true, why:"Right. Simplifying is a strength when it helps you find what you need, and a weakness only when it hides what matters for your question."},
     {t:"It shows that all theories are useless because they are inaccurate", why:"Leaving details out isn’t the same as being useless. The metro map is very useful for its purpose."},
     {t:"It shows a good theory must include every detail", why:"A map with every detail would be unreadable. Good theories explain a lot with a little."},
     {t:"It has nothing to do with theories, which never simplify", why:"All theories simplify; that is what lets them explain patterns."}
   ]},
   {id:"e2u6-q05", lesson:"e2u6-l1", level:1, q:"What did Peter Wilson argue in “The Myth of the ‘First Great Debate’” (1998)?", options:[
     {t:"The interwar “idealists” were not a single school, and the label was mostly attached by their critics", ok:true, why:"Right. Wilson showed that the neat idealist–realist debate is a simplification of a more varied history."},
     {t:"Realists lost the first debate to the idealists", why:"Wilson didn’t argue that; he questioned whether the debate, as usually told, happened at all."},
     {t:"The first debate was about statistics and measurement", why:"That describes the second debate (traditionalists against behaviouralists)."},
     {t:"There have never been any disagreements in IR", why:"IR is full of disagreements. Wilson questioned one particular story about them."}
   ]},
   {id:"e2u6-q06", lesson:"e2u6-l1", level:3, q:"Mei reads two articles about the same summit. One focuses on which country gained military advantage; the other on how the agreement’s rules will be monitored. What is the best interpretation?", options:[
     {t:"The writers are using different lenses (roughly realist and liberal), so each notices different features of the same event", ok:true, why:"Right. Different lenses direct attention to different evidence. Reading both gives a fuller picture."},
     {t:"One of the articles must be false", why:"Both can be accurate; they are emphasising different aspects of one event."},
     {t:"The summit must have been two separate events", why:"One event can be described in very different ways depending on the lens used."},
     {t:"Theories don’t affect how journalists write", why:"Writers, like everyone, use implicit theories that shape which facts they put first."}
   ]},
   {id:"e2u6-q07", lesson:"e2u6-l1", level:1, q:"In the 1962 crisis, what did the Soviet Union agree to on 28 October?", options:[
     {t:"To remove its missiles from Cuba", ok:true, why:"Khrushchev announced the missiles would be removed, in return for a US pledge not to invade Cuba and a private promise about the missiles in Turkey."},
     {t:"To place more missiles in Cuba", why:"The crisis ended with the missiles being withdrawn, not increased."},
     {t:"To join a military alliance with the United States", why:"No alliance was formed. The two remained Cold War rivals."},
     {t:"To hand Cuba to the United Nations", why:"Cuba remained an independent state. The UN played a mediating role only."}
   ]},
   {id:"e2u6-q08", lesson:"e2u6-l1", level:2, q:"Which statement about using IR theories is accurate?", options:[
     {t:"Most scholars use more than one theory and judge each by what it explains and what it misses", ok:true, why:"Right. No theory has won; analysts combine them, an approach called analytic eclecticism."},
     {t:"Being a realist scholar means you personally favour war", why:"Realism explains why conflict happens. Many realists have opposed wars they saw as reckless."},
     {t:"A single case that doesn’t fit proves a theory completely wrong", why:"IR theories describe tendencies. One odd case is a puzzle; many would be a problem."},
     {t:"Theories are just political ideologies with academic names", why:"Theories aim to explain or understand; ideologies are programmes for action. A liberal theorist may vote any way."}
   ]},
   {id:"e2u6-q09", lesson:"e2u6-l1", level:3, q:"Tomás says: “Waltz’s theory failed because it couldn’t predict exactly what one government would decide last week.” What would Waltz reply?", options:[
     {t:"His was a theory of international politics explaining broad, recurring patterns, not a theory of foreign policy predicting single decisions", ok:true, why:"Right. Waltz stressed this distinction: his theory explains patterns such as balancing across the system, not one government’s choice."},
     {t:"His theory predicts every decision of every government", why:"Waltz explicitly said it doesn’t; it explains system-wide patterns."},
     {t:"Theories should never be tested against evidence", why:"Waltz thought theories should be tested, but against the kind of outcomes they claim to explain."},
     {t:"Governments’ decisions are entirely random", why:"Waltz didn’t claim randomness; he said other theories, of foreign policy, are needed to explain specific decisions."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u6-q10", lesson:"e2u6-l2", level:1, q:"What do realists mean by self-help?", options:[
     {t:"Under anarchy, each state must ultimately rely on itself for its security", ok:true, why:"Right. With no government above states, no one guarantees anyone’s survival."},
     {t:"States should help each other whenever they can", why:"That is closer to a liberal or solidarist hope. Self-help is about relying on yourself."},
     {t:"Citizens should improve themselves without government help", why:"The term isn’t about personal development; it describes states under anarchy."},
     {t:"International organisations protect weaker states", why:"Realists doubt that institutions can guarantee security; that doubt is the point of self-help."}
   ]},
   {id:"e2u6-q11", lesson:"e2u6-l2", level:2, q:"Country X builds new air-defence missiles, saying they are purely defensive. Its neighbour, unsure, expands its own air force, and X then orders more missiles. Which concept fits best?", options:[
     {t:"The security dilemma", ok:true, why:"Right. Each defensive step is read as a possible threat by the other, starting a spiral that leaves both less secure."},
     {t:"Complex interdependence", why:"That describes dense, cooperative ties with little role for force, the opposite of this situation."},
     {t:"Bandwagoning", why:"Bandwagoning means joining a stronger power. Here each side is arming against the other."},
     {t:"The democratic peace", why:"Nothing here concerns democracy; it is a spiral of fear and arming."}
   ]},
   {id:"e2u6-q12", lesson:"e2u6-l2", level:1, q:"Which book is the classic text of classical realism?", options:[
     {t:"Hans Morgenthau, *Politics Among Nations* (1948)", ok:true, why:"Right. It set out classical realism, with interest defined as power."},
     {t:"Kenneth Waltz, *Theory of International Politics* (1979)", why:"That founded neorealism, which moved away from human nature towards structure."},
     {t:"Hedley Bull, *The Anarchical Society* (1977)", why:"That is the classic of the English School."},
     {t:"Cynthia Enloe, *Bananas, Beaches and Bases* (1989)", why:"That is a founding text of feminist IR."}
   ]},
   {id:"e2u6-q13", lesson:"e2u6-l2", level:2, q:"How does neorealism mainly differ from classical realism?", options:[
     {t:"It explains power politics through the anarchic structure of the system rather than human nature", ok:true, why:"Right. Waltz argued that structure pushes states into similar behaviour whatever their leaders are like."},
     {t:"It rejects the idea that states care about security", why:"Neorealists put security at the centre."},
     {t:"It says international institutions are the main actors", why:"Neorealists keep states at the centre and doubt institutions’ independent effect."},
     {t:"It focuses on gender and identity", why:"Those are feminist and constructivist concerns, not neorealist ones."}
   ]},
   {id:"e2u6-q14", lesson:"e2u6-l2", level:3, q:"Several small states near a fast-growing power each decide to join an alliance led by that power, hoping for protection and trade. A realist would call this…", options:[
     {t:"Bandwagoning", ok:true, why:"Right. Joining the rising power rather than opposing it is bandwagoning. Walt found balancing more common, but bandwagoning happens, often among small, exposed states."},
     {t:"Balancing", why:"Balancing would mean opposing the rising power, by arming or allying against it."},
     {t:"The security dilemma", why:"The security dilemma is a spiral of mutual arming, not a decision to join the stronger side."},
     {t:"Norm internalisation", why:"That is a constructivist idea about norms being taken for granted."}
   ]},
   {id:"e2u6-q15", lesson:"e2u6-l2", level:2, q:"What separates offensive from defensive realism?", options:[
     {t:"Offensive realists say states seek as much power as possible; defensive realists say states seek enough power to be secure", ok:true, why:"Right. Mearsheimer (offensive) and Waltz (defensive) agree on anarchy but disagree about how much power states want."},
     {t:"Offensive realists support war; defensive realists oppose it", why:"These are explanations of behaviour, not personal positions on war."},
     {t:"Defensive realists ignore the balance of power", why:"Defensive realists rely heavily on balancing: they say expansion backfires because others balance."},
     {t:"Offensive realism is about domestic politics", why:"Adding domestic politics is the move of neoclassical realism."}
   ]},
   {id:"e2u6-q16", lesson:"e2u6-l2", level:1, q:"In the Melian Dialogue, which ancient writer has Athenian envoys tell a small island that the strong do what they can and the weak suffer what they must?", options:[
     {t:"Thucydides", ok:true, why:"Right. It appears in his *History of the Peloponnesian War*, a favourite source for realists, though scholars debate his own view."},
     {t:"Kautilya", why:"The Arthashastra attributed to Kautilya is an Indian treatise on statecraft, not a history of Athens."},
     {t:"Machiavelli", why:"Machiavelli wrote *The Prince* in 1513, nearly 2,000 years after the Peloponnesian War."},
     {t:"Hobbes", why:"Hobbes translated Thucydides into English, but the dialogue is Thucydides’ own."}
   ]},
   {id:"e2u6-q17", lesson:"e2u6-l2", level:3, q:"A commentator says: “Realism can’t explain why France and Germany, enemies in three wars, now find war between them unthinkable.” Which reply would a realist most likely give?", options:[
     {t:"Their peace grew while a shared Soviet threat and a US-led alliance gave them strong reasons to cooperate, so threats and power help explain it too", ok:true, why:"Right. Realists such as John Mearsheimer have argued that a common threat and the US presence in Europe, not friendship alone, kept the peace. Liberals and constructivists dispute how much this explains, especially since the peace outlasted the Cold War."},
     {t:"France and Germany are secretly preparing to fight again", why:"There is no evidence of this, and realists don’t make such claims."},
     {t:"Realism has nothing to say about Europe at all", why:"Realists have written a great deal about Europe’s security, including its peace after 1945."},
     {t:"The two countries no longer have armies", why:"Both still have armed forces. The change is in their relationship, not in disarmament."}
   ]},
   {id:"e2u6-q18", lesson:"e2u6-l2", level:2, q:"Which is a well-known critique of realism?", options:[
     {t:"It did not foresee that the Cold War would end peacefully", ok:true, why:"Right. Gaddis (1992) made this point about the major theories, and it is often aimed at realism."},
     {t:"It ignores military power", why:"Military power is at the centre of realism."},
     {t:"It assumes a world government exists", why:"Realism assumes the opposite: anarchy, the absence of world government."},
     {t:"It focuses only on women’s experiences", why:"That would describe feminist IR, which in fact criticises realism for leaving women out."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u6-q19", lesson:"e2u6-l3", level:1, q:"Which is one of Keohane and Nye’s three features of complex interdependence?", options:[
     {t:"Multiple channels connect societies, not only governments", ok:true, why:"Right. Firms, scientists, officials and activists all link societies directly."},
     {t:"Military security always tops the agenda", why:"The opposite: complex interdependence has no fixed hierarchy of issues."},
     {t:"Force is the main tool between the states involved", why:"The opposite: force plays little role among states in complex interdependence."},
     {t:"A world government enforces agreements", why:"There is no world government; complex interdependence describes relations within anarchy."}
   ]},
   {id:"e2u6-q20", lesson:"e2u6-l3", level:2, q:"Why did Robert Axelrod think repeated dealings help cooperation?", options:[
     {t:"When players expect to meet again, cheating today can be punished tomorrow (“the shadow of the future”)", ok:true, why:"Right. Repetition makes reputations and reciprocity matter, so cooperating can pay."},
     {t:"Repeated dealings remove anarchy", why:"Anarchy remains; repetition changes incentives within it."},
     {t:"Players forget earlier betrayals", why:"The opposite: remembering betrayals is what makes punishment, and therefore cooperation, possible."},
     {t:"Repeated games guarantee equal gains", why:"Repetition doesn’t equalise gains; it makes cooperation more attractive."}
   ]},
   {id:"e2u6-q21", lesson:"e2u6-l3", level:3, q:"Invented figures. A deal raises country P’s income from 100 to 120 and country Q’s from 100 to 160. P’s leaders reject it, saying Q will gain too much. Which concept explains their reasoning?", options:[
     {t:"Relative gains: P gains, but its share of the pair’s combined income falls from 50% to about 43%", ok:true, why:"Right. 120 ÷ 280 ≈ 43%. Worrying about position compared with a rival is the realist relative-gains concern (Grieco, 1988)."},
     {t:"Absolute gains: P would be worse off than before", why:"P would be better off in absolute terms (120 instead of 100). The objection is about relative position."},
     {t:"The democratic peace", why:"Nothing here concerns democracy or war between democracies."},
     {t:"Complex interdependence", why:"Complex interdependence describes dense, cooperative ties; it doesn’t explain rejecting a deal over relative position."}
   ]},
   {id:"e2u6-q22", lesson:"e2u6-l3", level:1, q:"What does the democratic peace claim?", options:[
     {t:"Established democracies have very rarely, if ever, fought wars against each other", ok:true, why:"Right. It is a claim about pairs of democracies."},
     {t:"Democracies never fight any wars", why:"Democracies have fought many wars against non-democracies."},
     {t:"Democracies always win the wars they fight", why:"That is a separate, debated claim, not the democratic peace."},
     {t:"All countries will become democracies", why:"The democratic peace says nothing about whether every country will become democratic."}
   ]},
   {id:"e2u6-q23", lesson:"e2u6-l3", level:2, q:"Which is a critique of the democratic peace raised by Farber and Gowa (1995)?", options:[
     {t:"During the Cold War, democracies shared a common enemy, which may explain much of their peace", ok:true, why:"Right. They argued shared interests, not democracy itself, may account for the pattern after 1945."},
     {t:"Democracies are more war-prone than all other states", why:"That isn’t their argument; they questioned the cause of peace among democracies."},
     {t:"There have never been any democracies", why:"Their critique assumes democracies exist; it questions why they don’t fight each other."},
     {t:"Trade always causes wars", why:"That isn’t their argument, and the claim is not supported."}
   ]},
   {id:"e2u6-q24", lesson:"e2u6-l3", level:3, q:"Hana works for a ministry whose country imports almost all its energy from one supplier. The supplier cuts deliveries for a month. Her country has no reserves and no other suppliers. In Keohane and Nye’s terms, her country is…", options:[
     {t:"Both highly sensitive and highly vulnerable", ok:true, why:"Right. It is hit quickly and hard (sensitive) and has no easy way to adjust (vulnerable). Unequal dependence like this gives the supplier power."},
     {t:"Sensitive but not vulnerable", why:"With no reserves or alternatives, adjusting is very costly, so it is vulnerable too."},
     {t:"Neither sensitive nor vulnerable", why:"A cut in almost all its energy would hurt quickly and be hard to replace."},
     {t:"Protected by complex interdependence from any harm", why:"Interdependence can be unequal and used as leverage; it doesn’t guarantee protection."}
   ]},
   {id:"e2u6-q25", lesson:"e2u6-l3", level:1, q:"Which book did Robert Keohane publish in 1984 to set out neoliberal institutionalism?", options:[
     {t:"*After Hegemony*", ok:true, why:"Right. It argued that institutions help states cooperate even without a dominant power."},
     {t:"*Perpetual Peace*", why:"That is Kant’s 1795 essay."},
     {t:"*The Great Illusion*", why:"That is Norman Angell’s 1910 book."},
     {t:"*The Tragedy of Great Power Politics*", why:"That is Mearsheimer’s 2001 book setting out offensive realism."}
   ]},
   {id:"e2u6-q26", lesson:"e2u6-l3", level:2, q:"A news article calls a free-market reform programme “neoliberal” and says it is based on Keohane’s neoliberal institutionalism. What is wrong?", options:[
     {t:"It confuses two different ideas: neoliberal economic policy and the IR theory of neoliberal institutionalism", ok:true, why:"Right. They share a word but not a meaning. The IR theory is about cooperation through institutions."},
     {t:"Nothing: they are the same idea", why:"They are different. Textbooks warn about exactly this confusion."},
     {t:"Keohane was a realist, not a liberal", why:"Keohane is the leading figure of neoliberal institutionalism. The problem is the mix-up of terms."},
     {t:"Neoliberal institutionalism is a theory of nuclear weapons", why:"It is a theory of how institutions help cooperation, not of nuclear weapons."}
   ]},
   {id:"e2u6-q27", lesson:"e2u6-l3", level:3, q:"Dmitri argues: “The democratic peace proves that invading a country to install democracy will bring peace.” What is the strongest response?", options:[
     {t:"The research concerns established democracies; it doesn’t show that imposing democracy by force works, and unstable transitions can raise war risks", ok:true, why:"Right. Mansfield and Snyder found democratising states can be war-prone, and the finding is about established democracies."},
     {t:"He is right; the theory says this explicitly", why:"The theory makes no claim about imposing democracy by force."},
     {t:"The democratic peace has been completely disproved", why:"It remains one of the strongest patterns in IR, though its causes are debated."},
     {t:"Democracy has no connection to war or peace at all", why:"The pattern between established democracies is well documented; the question is why and how far it holds."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u6-q28", lesson:"e2u6-l4", level:1, q:"Who wrote the 1992 article “Anarchy is What States Make of It”?", options:[
     {t:"Alexander Wendt", ok:true, why:"Right. It appeared in *International Organization* and became a founding text of constructivism."},
     {t:"Hedley Bull", why:"Bull wrote *The Anarchical Society* (1977), the English School classic."},
     {t:"Kenneth Waltz", why:"Waltz’s structural view of anarchy is what Wendt was arguing against."},
     {t:"Robert Keohane", why:"Keohane is the leading figure of neoliberal institutionalism."}
   ]},
   {id:"e2u6-q29", lesson:"e2u6-l4", level:2, q:"In Wendt’s three cultures of anarchy, states that compete but accept each other’s right to exist live in which culture?", options:[
     {t:"Lockean", ok:true, why:"Right. In a Lockean culture others are rivals, not enemies to be destroyed."},
     {t:"Hobbesian", why:"In a Hobbesian culture others are enemies, and survival is by force."},
     {t:"Kantian", why:"In a Kantian culture others are friends who settle disputes without war."},
     {t:"Westphalian", why:"That isn’t one of Wendt’s three cultures."}
   ]},
   {id:"e2u6-q30", lesson:"e2u6-l4", level:2, q:"What is the correct order of Finnemore and Sikkink’s norm life cycle?", options:[
     {t:"Emergence, cascade, internalisation", ok:true, why:"Right. Norm entrepreneurs argue for a norm, it spreads rapidly after a tipping point, then it is taken for granted."},
     {t:"Cascade, emergence, internalisation", why:"A norm must emerge before it can cascade."},
     {t:"Internalisation, cascade, emergence", why:"This is reversed. Internalisation comes last."},
     {t:"Emergence, internalisation, cascade", why:"Internalisation is the final stage, after the cascade."}
   ]},
   {id:"e2u6-q31", lesson:"e2u6-l4", level:3, q:"Two neighbouring countries both have large armies, yet neither government considers the other a military threat, and their citizens cross the border freely for work. Which explanation is most constructivist?", options:[
     {t:"They share an identity as friendly neighbours, so each army means something unthreatening to the other", ok:true, why:"Right. Constructivists explain the lack of fear through shared identity and understanding, not the balance of forces."},
     {t:"Their armies are exactly equal, so they balance each other", why:"That is a balance-of-power (realist) explanation."},
     {t:"Neither has noticed the other’s army", why:"Governments notice; the point is how they interpret what they see."},
     {t:"A world government has banned war between them", why:"There is no world government."}
   ]},
   {id:"e2u6-q32", lesson:"e2u6-l4", level:1, q:"In Hedley Bull’s terms, what turns an international system into an international society?", options:[
     {t:"States see themselves as bound by common rules and share common institutions", ok:true, why:"Right. Shared rules and institutions such as diplomacy and international law mark a society."},
     {t:"States trade with each other at all", why:"Trade can happen within a system; a society requires shared rules and institutions."},
     {t:"One state conquers all the others", why:"That would end the society of states and create an empire."},
     {t:"A world government is created", why:"Bull’s society is anarchical: there is no government above states."}
   ]},
   {id:"e2u6-q33", lesson:"e2u6-l4", level:2, q:"Embassies are protected and diplomats can’t be prosecuted by the host country’s courts, even in tense relationships. For the English School, this shows…", options:[
     {t:"An institution of international society: diplomacy governed by shared rules", ok:true, why:"Right. States keep these rules (set out in the 1961 Vienna Convention) because all want their own diplomats protected."},
     {t:"That a world government enforces diplomatic rules", why:"No world government enforces them; states keep them because of shared interests and expectations."},
     {t:"The security dilemma", why:"The security dilemma concerns arming spirals, not diplomatic rules."},
     {t:"That states have stopped competing", why:"States still compete; the rules let them do so within a society."}
   ]},
   {id:"e2u6-q34", lesson:"e2u6-l4", level:2, q:"Which position is solidarist, within the English School?", options:[
     {t:"States can agree on more than sovereignty, including protecting people from mass atrocities", ok:true, why:"Right. Solidarists such as Nicholas Wheeler argue for thicker shared values."},
     {t:"International society should rest only on sovereignty and non-intervention", why:"That is the pluralist position."},
     {t:"States always maximise their power", why:"That is offensive realism."},
     {t:"There is no such thing as international society", why:"Both pluralists and solidarists believe in international society; they disagree about how much it shares."}
   ]},
   {id:"e2u6-q35", lesson:"e2u6-l4", level:3, q:"Kenji notes that US leaders in 1962 treated Soviet missiles in Cuba as intolerable but saw US missiles in Turkey, also near the other side’s border, as normal. Which lens best explains this difference?", options:[
     {t:"Constructivism: the meanings US officials attached to their own role and to Cuba’s place in the hemisphere shaped the reaction", ok:true, why:"Right. Jutta Weldes (1999) made this argument: similar material facts, different meanings."},
     {t:"Complex interdependence: dense trade ties between the US and the Soviet Union", why:"The two had little trade, and the question is about meanings, not ties."},
     {t:"The democratic peace", why:"The Soviet Union was not a democracy, and the question is about perceptions of threat."},
     {t:"The prisoner’s dilemma", why:"The dilemma explains why rational actors fail to cooperate, not why identical facts are seen differently."}
   ]},
   {id:"e2u6-q36", lesson:"e2u6-l4", level:1, q:"Which is a common critique of constructivism?", options:[
     {t:"Ideas are hard to measure, and explanations can be offered after the fact", ok:true, why:"Right. Critics say it’s hard to show ideas caused behaviour; constructivists answer with documents, speeches and careful case studies."},
     {t:"It ignores ideas and identity", why:"Ideas and identity are at the centre of constructivism."},
     {t:"It says only weapons matter", why:"That is closer to a crude realism; constructivism argues meanings matter."},
     {t:"It denies that states exist", why:"Most constructivists study states closely; they ask how state identities are formed."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u6-q37", lesson:"e2u6-l5", level:1, q:"In world-systems theory, what typically flows from the periphery to the core?", options:[
     {t:"Raw materials, low-wage labour and profits", ok:true, why:"Right. In Wallerstein’s picture, surplus flows inward to the core."},
     {t:"High-value manufactured goods and technology", why:"Those usually flow outward from the core."},
     {t:"Military protection", why:"World-systems theory is about economic flows, not protection."},
     {t:"Nothing: the zones are unconnected", why:"The whole point is that the zones are tied together in one world economy."}
   ]},
   {id:"e2u6-q38", lesson:"e2u6-l5", level:1, q:"Which question did Cynthia Enloe make central to feminist IR?", options:[
     {t:"Where are the women?", ok:true, why:"Right. Asking it reveals women’s work and lives that the usual story of world politics leaves out."},
     {t:"Who has the most tanks?", why:"That is closer to a narrow realist measure of power."},
     {t:"Which treaty came first?", why:"That is a question of chronology, not Enloe’s feminist lens."},
     {t:"Which theory is the oldest?", why:"Enloe’s question is about whose lives are visible in world politics."}
   ]},
   {id:"e2u6-q39", lesson:"e2u6-l5", level:2, q:"What did Edward Said argue in *Orientalism* (1978)?", options:[
     {t:"Western knowledge portrayed “the Orient” as exotic, backward and unchanging, and this was bound up with imperial power", ok:true, why:"Right. Said showed how ways of knowing a people helped justify ruling them."},
     {t:"Eastern societies had no ideas about politics", why:"Said argued against such views; he criticised how the West represented the East."},
     {t:"Empires were mostly beneficial for colonised peoples", why:"Said’s work is a critique of imperial power and its knowledge."},
     {t:"Trade between East and West caused the World Wars", why:"That isn’t Said’s argument."}
   ]},
   {id:"e2u6-q40", lesson:"e2u6-l5", level:3, q:"Sione compares reports of a regional summit. One quotes only foreign ministers of large states; another also quotes Pacific Island leaders and civil society groups, and asks how decisions affect island communities. Which lenses does the second report reflect?", options:[
     {t:"Global IR and postcolonial concerns: it widens whose voices and experiences count", ok:true, why:"Right. Including smaller states and affected communities as actors with their own views is what these lenses ask for."},
     {t:"Offensive realism: it focuses on maximising power", why:"The second report is about widening voices, not power maximisation."},
     {t:"The prisoner’s dilemma", why:"That is a model of cooperation problems, not a choice about whose voices to include."},
     {t:"Neorealism: only great powers matter", why:"The second report does the opposite of focusing only on great powers."}
   ]},
   {id:"e2u6-q41", lesson:"e2u6-l5", level:2, q:"Which statement about feminist IR is accurate?", options:[
     {t:"Most feminist IR scholars reject the stereotype that women are naturally more peaceful than men", ok:true, why:"Right. They study how gender roles are built and used, not fixed natures."},
     {t:"Feminist IR ignores war and security", why:"Tickner and Cohn wrote directly about security and nuclear strategy."},
     {t:"Feminist IR only counts women leaders", why:"A gendered lens also looks at ideas, language and unpaid work."},
     {t:"Feminist IR began with Resolution 1325", why:"Enloe (1989) and Tickner (1992) wrote well before the 2000 resolution, which feminist researchers and activists helped bring about."}
   ]},
   {id:"e2u6-q42", lesson:"e2u6-l5", level:1, q:"Who set out the Global IR agenda in his 2014 presidential address to the International Studies Association?", options:[
     {t:"Amitav Acharya", ok:true, why:"Right. His address, “Global International Relations (IR) and Regional Worlds”, set out six dimensions of Global IR."},
     {t:"Hedley Bull", why:"Bull was an English School scholar who died in 1985."},
     {t:"Edward Said", why:"Said was a literary scholar whose *Orientalism* influenced postcolonial studies; he died in 2003."},
     {t:"Immanuel Wallerstein", why:"Wallerstein developed world-systems theory."}
   ]},
   {id:"e2u6-q43", lesson:"e2u6-l5", level:2, q:"Which is one of the six dimensions of Acharya’s Global IR agenda?", options:[
     {t:"Rejecting exceptionalism, so no culture or country is treated as uniquely special", ok:true, why:"Right. Global IR warns against exceptionalism of every kind, Western or non-Western."},
     {t:"Replacing all existing theories with new ones", why:"Global IR aims to add to and widen existing theories, not replace them."},
     {t:"Studying only European history", why:"Global IR asks for grounding in world history."},
     {t:"Treating regions as unimportant", why:"Global IR puts regions and regionalism at the centre."}
   ]},
   {id:"e2u6-q44", lesson:"e2u6-l5", level:3, q:"A columnist writes: “Chinese thought teaches that world order should be harmonious, so China’s foreign policy is always peaceful.” What would a careful Global IR scholar say?", options:[
     {t:"Traditions are diverse and debated, ideas don’t automatically decide policy, and critics warn that “harmony” readings can serve state agendas", ok:true, why:"Right. Global IR rejects essentialism and exceptionalism, and scholars such as Callahan have criticised uses of tianxia that present hierarchy as harmony."},
     {t:"The columnist is right, because Global IR says each civilisation has one view", why:"Global IR says the opposite: traditions are internally diverse."},
     {t:"Chinese thought has nothing to say about world order", why:"Chinese scholars have developed several theories (tianxia, relational theory, moral realism). The problem is the sweeping claim."},
     {t:"Only Western theories can describe Chinese policy", why:"Global IR argues that theories from many traditions, including Chinese ones, can contribute."}
   ]},
   {id:"e2u6-q45", lesson:"e2u6-l5", level:2, q:"Which reading of the 1962 crisis is postcolonial?", options:[
     {t:"Cuba, which had lived under a US right to intervene, was left out of the deal that decided its fate", ok:true, why:"Right. Centring the voice and history of the smaller, formerly dominated country is the postcolonial move."},
     {t:"The Soviet missiles narrowed a gap in long-range forces", why:"That is the realist reading, focused on the balance of power."},
     {t:"The hotline and test ban treaty made future crises less dangerous", why:"That is the liberal reading, focused on institutions."},
     {t:"Shared rules of diplomacy kept the superpowers talking", why:"That is the English School reading."}
   ]}
  ]
});
