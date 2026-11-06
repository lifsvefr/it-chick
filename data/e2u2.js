/* Social Science Primers · Sociology Unit 2 · Culture, society and the self */
ICA.addUnit({
  id:"e2u2", track:"e2", n:2, title:"Culture, society and the self", icon:"🎭",
  blurb:"How shared ways of living are built, passed on and changed; how societies are organised; how each of us becomes a self through other people; and how groups and organisations shape what we do.",
  goals:[
    "Describe culture using values, beliefs, norms, sanctions, symbols and language, and explain the Sapir–Whorf hypothesis accurately",
    "Look at unfamiliar customs with cultural relativism instead of ethnocentrism, while still thinking critically",
    "Explain how cultures change through innovation, diffusion and globalization, and what cultural lag is",
    "Classify types of societies and use Durkheim, Marx and Weber to describe modern life",
    "Explain how a self develops (Cooley, Mead) and how agents of socialization shape us across the life course",
    "Analyse groups, conformity, leadership and formal organisations, including bureaucracy and McDonaldization"
  ],
  read:[
    {book:"soc", where:"Chapter 3 “Culture” (Sections 3.1–3.4)", note:"On the LibreTexts mirror every section in these chapters is numbered one higher (3.2–3.5), because the chapter introduction counts as x.1."},
    {book:"soc", where:"Chapter 4 “Society and Social Interaction” (Sections 4.1–4.3)"},
    {book:"soc", where:"Chapter 5 “Socialization” (Sections 5.1–5.4)"},
    {book:"soc", where:"Chapter 6 “Groups and Organizations” (Sections 6.1–6.3)"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u2-l1", title:"What culture is", minutes:55,
   hook:{q:"Which of these has been found in every known society?", options:["Writing","Money","Jokes","Marriage to only one partner"], answer:2, reveal:"**Jokes.** George Murdock listed [[cultural-universal|cultural universals]] such as language, names, jokes, families and funerals, which appear in every society. The form is universal, but what people find funny varies enormously. This lesson gives you names for the parts of culture you’ll use in every later unit."},
   goals:[
     "Tell material from nonmaterial culture, and values from beliefs",
     "Classify norms as folkways, mores or laws, and sanctions as positive or negative, formal or informal",
     "Explain the Sapir–Whorf hypothesis in its strong and weak forms, and what the evidence supports",
     "Use cultural relativism instead of ethnocentrism, and recognise culture shock and xenocentrism"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Sections 3.1 and 3.2 define culture and break it into parts you can name: values, beliefs, norms, sanctions, symbols and language. You will use these words in every later unit.",
      {look:[
        "(3.1) What separates material from nonmaterial culture, and what makes something a cultural universal?",
        "(3.1) How do ethnocentrism, cultural relativism and xenocentrism differ, and what is culture shock?",
        "(3.2) How do values differ from beliefs, and folkways from mores and laws?",
        "(3.2) What does the Sapir–Whorf hypothesis claim about language and thought?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[culture|Culture]] is a group’s shared, learned way of life; a [[society]] is the people who share it. [[material-culture|Material culture]] is objects (chopsticks, a metro card); [[nonmaterial-culture|nonmaterial culture]] is the values, rules and meanings attached to them, such as what a wedding ring *means*. (3.1)",
        "George Murdock’s [[cultural-universal|cultural universals]] appear in every society: language, names, jokes, families, funerals. The form is universal; the content varies enormously. (3.1)",
        "[[ethnocentrism|Ethnocentrism]] (William Graham Sumner, 1906) judges other cultures by your own standards. Taken further, it becomes [[cultural-imperialism|cultural imperialism]]: imposing one culture’s values on others, as colonial governments did with language and schooling. [[cultural-relativism|Cultural relativism]] tries to understand a practice by its own setting; [[xenocentrism]] assumes another culture is better than your own. (3.1)",
        "[[culture-shock|Culture shock]], Kalervo Oberg’s term, is the stress of unfamiliar norms. Excitement gives way to frustration, often with ethnocentric thoughts (“at home we do it properly”), before people adjust. (3.1)",
        "[[value|Values]] say what is good or important; [[belief|beliefs]] say what is true. **Ideal culture** (what a society says it values) often differs from **real culture** (what people actually do). (3.2)",
        "A [[norm]] is a shared expectation. [[formal-norm|Formal norms]] are written and enforced; [[informal-norm|informal norms]] are learned by watching. [[more|Mores]] carry moral weight (no plagiarism, respect for the dead); [[folkway|folkways]] don’t (greetings, queuing). A [[law]] is a formal norm enforced by the state; it may carry great moral weight (theft) or almost none (which side of the road to drive on). (3.2)",
        "[[sanction|Sanctions]] are a form of [[social-control|social control]] that reward or punish behaviour. They can be positive (praise, a bonus) or negative (a frown, a fine), and informal (a look, gossip) or formal and legal (a ticket, a prison sentence). (3.2)",
        "A [[symbol]] stands for something by shared agreement, so meanings differ between cultures. [[language|Language]] is the main symbol system that passes culture on. The [[sapir-whorf|Sapir–Whorf hypothesis]] holds that language shapes thought and behaviour. (3.2)"
      ]}
    ]},
    {h:"Picture it", body:[ {fig:'<svg viewBox="0 0 340 288"><defs><marker id="e2u2-l1-nm1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><path class="d-ink" d="M62 252 L334 252" stroke-width="2" fill="none" marker-end="url(#e2u2-l1-nm1)"/><path class="d-ink" d="M62 252 L62 8" stroke-width="2" fill="none" marker-end="url(#e2u2-l1-nm1)"/><text x="198" y="278" text-anchor="middle">more moral weight →</text><text class="s" x="31" y="72" text-anchor="middle">formal</text><text class="s" x="31" y="196" text-anchor="middle">informal</text><rect class="d-lup" x="72" y="20" width="262" height="92" rx="10" stroke-width="2"/><text x="203" y="44" text-anchor="middle">Laws (formal norms)</text><text class="s" x="136" y="74" text-anchor="middle">drive on the left</text><text class="s" x="136" y="92" text-anchor="middle">or the right</text><text class="s" x="270" y="74" text-anchor="middle">laws against</text><text class="s" x="270" y="92" text-anchor="middle">theft or assault</text><rect class="d-sage" x="72" y="134" width="126" height="104" rx="10" stroke-width="2"/><text x="135" y="160" text-anchor="middle">Folkways</text><text class="s" x="135" y="184" text-anchor="middle">bow, handshake,</text><text class="s" x="135" y="201" text-anchor="middle">shoes off</text><text class="s" x="135" y="218" text-anchor="middle">indoors</text><rect class="d-rose" x="208" y="134" width="126" height="104" rx="10" stroke-width="2"/><text x="271" y="160" text-anchor="middle">Mores</text><text class="s" x="271" y="184" text-anchor="middle">honesty, loyalty,</text><text class="s" x="271" y="201" text-anchor="middle">respect for</text><text class="s" x="271" y="218" text-anchor="middle">the dead</text></svg>', alt:"A chart with moral weight increasing to the right and formality increasing upward. Folkways sit bottom left, mores bottom right, and laws span the top from low-moral-weight traffic rules to high-moral-weight laws against theft.", cap:"Two separate questions: how much moral weight does a norm carry, and is it written and enforced by an authority? Laws can sit anywhere along the moral axis."} ]},
    {h:"Key terms", body:[ {terms:["material-culture","nonmaterial-culture","value","belief","folkway","more","sanction","sapir-whorf","ethnocentrism","cultural-relativism","xenocentrism","culture-shock"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Strong and weak Sapir–Whorf.** The book gives one version. Researchers now separate a *strong* form (language *determines* thought), which is widely rejected, from a *weak* form (language *influences* some attention and memory), which experiments support for modest effects. In a 2007 study, Russian speakers, who have separate basic words for light blue (*goluboy*) and dark blue (*siniy*), told such blues apart slightly faster; English speakers had no such edge but saw the difference perfectly well. Speakers of Guugu Yimithirr in north Queensland, Australia, who say “north of the plate” rather than “left of the plate”, keep track of direction remarkably well. Lacking a word is not lacking the idea: English speakers grasp *Schadenfreude* instantly."},
      {beyond:"**Relativism is a method, not “anything goes”.** Understand a practice in its setting first, then evaluate it with evidence, for example against human rights standards. A researcher can explain why families in a village without pensions want many children and still report that girls leaving school early limits their options."},
      {beyond:"**Culture shock in four phases.** The common model is excitement (the “honeymoon”), frustration, adjustment, then adaptation, when you feel at ease. Real experiences vary, and many people feel **reverse culture shock** when they return home."},
      {fix:"The book says Sapir and Whorf “advanced this idea” in the 1920s, which makes it sound like one joint hypothesis. They never published one together: Sapir wrote about it in the late 1920s, Whorf’s best-known essays date from around 1940, and the label “Sapir–Whorf hypothesis” was attached later by other scholars."}
    ]}
   ],
   try:[
    {id:"e2u2-l1-x1", type:"sort", q:"Sort each norm by type. Think about moral weight and whether a state writes and enforces it.", buckets:["Folkway","More","Law"], items:[
      {t:"Bowing slightly when you meet a colleague in Japan", b:0, why:"A greeting custom. Getting it wrong is awkward, not immoral: a folkway."},
      {t:"Not copying another student’s essay and submitting it as your own", b:1, why:"Plagiarism provokes moral outrage and shame because it is dishonest: a more. (Universities also write it into formal rules, but its weight comes from the moral view behind it.)"},
      {t:"Paying income tax on your earnings", b:2, why:"Written by the state and enforced with official penalties: a law."},
      {t:"Saying “bon appétit” or a similar phrase before a shared meal", b:0, why:"A polite habit with no moral weight: a folkway."},
      {t:"Not mocking someone at their parent’s funeral", b:1, why:"Respect for the dead and the grieving is a strong moral expectation in almost every culture, though no law requires it: a more."},
      {t:"Stopping at a red traffic light", b:2, why:"A formal rule enforced by police and fines: a law. Its moral weight comes mostly from the safety of others."},
      {t:"Letting passengers off a train before you get on", b:0, why:"A widely followed courtesy. Breaking it earns irritated looks, not moral condemnation: a folkway."}
    ]},
    {id:"e2u2-l1-x2", type:"sort", q:"Classify each sanction.", buckets:["Positive and informal","Positive and formal","Negative and informal","Negative and formal"], items:[
      {t:"A neighbour thanks Sione warmly for clearing the shared path", b:0, why:"A reward (positive) given personally, with no official process (informal)."},
      {t:"Ana receives a long-service award at her workplace ceremony", b:1, why:"A reward (positive) given through an organisation’s official procedure (formal)."},
      {t:"Friends stop inviting Dmitri after he keeps cancelling at the last minute", b:2, why:"A punishment (negative) applied without any rule or official body (informal)."},
      {t:"Fatima’s library charges her a fee for a book returned two months late", b:3, why:"A penalty (negative) set out in written rules and applied by the organisation (formal)."},
      {t:"Classmates roll their eyes when Kenji checks his phone during a presentation", b:2, why:"Disapproval (negative) expressed informally. Small signals like this enforce most everyday norms."},
      {t:"A city gives a community group a certificate for its clean-up project", b:1, why:"A reward (positive) given officially by an authority (formal)."}
    ]},
    {id:"e2u2-l1-x3", type:"match", q:"Match each situation to the concept it shows best.", pairs:[
      ["Oluwaseun visits another country and says their food is “strange and dirty” because it isn’t cooked the way his family cooks.","Ethnocentrism","He judges another culture by his own culture’s standards and assumes his way is the right one."],
      ["Hana insists that only imported clothing is good quality and local brands are always inferior.","Xenocentrism","She assumes another culture’s products are superior to her own, which is the reverse of ethnocentrism."],
      ["A researcher asks why families in a region without pensions want many children, and learns that adult children support their parents in old age.","Cultural relativism","She explains the practice in terms of the culture’s own circumstances before judging it."],
      ["Three weeks after moving abroad, Amara feels exhausted, irritable and homesick over small daily differences.","Culture shock","The stress of unfamiliar norms after the first excitement wears off is culture shock."],
      ["A colonial government bans the local language in schools and teaches only its own.","Cultural imperialism","Imposing one culture’s language and values on another people is cultural imperialism."]
    ]},
    {id:"e2u2-l1-x4", type:"spot", q:"A blog post summarises language research. Tap each claim that goes beyond what the evidence shows.", ask:"overstates the evidence", parts:[
      "In a 2007 experiment, ",
      {t:"Russian speakers were slightly faster at telling apart two blues that their language names with different words.", flag:false, why:"This matches the study’s actual finding: a small speed advantage across the goluboy/siniy boundary."},
      " ",
      {t:"English speakers did not show this advantage.", flag:false, why:"Also accurate. The comparison group is what makes the result meaningful."},
      " ",
      {t:"This proves that English speakers cannot see the difference between light and dark blue.", flag:true, why:"Nothing in the study suggests English speakers can’t see the difference. They distinguished the colours fine; they simply showed no extra speed-up at a category boundary. This is the strong (determinist) version, which the evidence doesn’t support."},
      " ",
      {t:"So the language you speak completely determines what you are able to think.", flag:true, why:"A small effect on one task can’t support a claim about all thought. Most researchers reject linguistic determinism and accept only that language can influence some perception and memory."},
      " ",
      {t:"Researchers describe effects like this as support for a weak form of linguistic relativity.", flag:false, why:"Correct: this is how the finding is usually interpreted."}
    ], why:"The study supports the weak claim (language can nudge perception) and nothing stronger."},
    {id:"e2u2-l1-x5", type:"mcq", q:"Lucía says: “If we practise cultural relativism, we’re never allowed to criticise any custom.” What is the best response?", options:[
      {t:"Cultural relativism is a method for understanding practices in context first; you can still evaluate them afterwards, for example against human rights standards.", ok:true, why:"Right. Relativism guards against snap ethnocentric judgements. It doesn’t forbid careful moral evaluation once you understand the practice."},
      {t:"She’s right: sociologists must treat every practice as equally good.", why:"That confuses a research method with a moral claim. Sociologists regularly study practices that cause harm and say so, based on evidence."},
      {t:"Cultural relativism only applies to foreign cultures, not to your own.", why:"Relativism applies to any culture, including subcultures within your own society. It is about understanding practices in their setting, wherever they are."},
      {t:"Cultural relativism means you should adopt other cultures’ customs yourself.", why:"Understanding a custom doesn’t mean adopting it. Believing other cultures’ ways are better is xenocentrism, a different idea."}
    ]},
    {id:"e2u2-l1-x6", type:"mcq", q:"Which of these are part of **nonmaterial** culture? Choose all that apply.", options:[
      {t:"The belief that elders should be served first at a meal", ok:true, why:"A belief and norm: ideas and rules, not objects."},
      {t:"The meaning of a wedding ring", ok:true, why:"The ring is material, but what it *means* is nonmaterial culture: a shared symbol."},
      {t:"The value placed on punctuality", ok:true, why:"Values are ideas about what matters: nonmaterial."},
      {t:"A pair of chopsticks", why:"Chopsticks are physical objects: material culture. The rules about using them politely are nonmaterial."},
      {t:"A mosque, temple or church building", why:"The building is material culture. The rituals and beliefs practised inside it are nonmaterial."}
    ]},
    {id:"e2u2-l1-x7", type:"order", q:"Put the phases of culture shock in the order they are often described. (Real experiences vary, but this is the common model.)", items:[
      {t:"Excitement: everything new feels fascinating (the “honeymoon”)", why:"Most descriptions begin with enthusiasm, before differences start to wear on a newcomer."},
      {t:"Frustration: small differences pile up; irritation and homesickness grow", why:"Once the novelty fades, unfamiliar norms become tiring. This is the “shock” itself."},
      {t:"Adjustment: routines form and the new norms start to make sense", why:"With time, people learn the unwritten rules and find their footing."},
      {t:"Adaptation: the person functions comfortably in both cultures", why:"The final phase is feeling at ease. Many people then feel reverse culture shock when they return home."}
    ]}
   ],
   apply:{intro:"Notice culture around you. Everything here is observation and reflection: no recording or photographing people, and nothing that could embarrass anyone.", tasks:[
     {t:"Spend 15 minutes in a public place (a café, bus, park or shop queue) and list five unwritten rules people follow.", how:["Sit somewhere comfortable and simply watch. Don’t take photos or notes about identifiable people.","Write down five behaviours that almost everyone follows without being told.","For each, decide: folkway or more? Then note any sanction you saw (a look, a thank-you, a comment)."], write:"Where you were, the five rules you saw, folkway or more for each, and any sanctions you noticed…"},
     {t:"Pick one object in your home and describe the nonmaterial culture attached to it.", how:["Choose something ordinary: a cooking pot, a calendar, a school uniform, a phone.","List the values, beliefs and norms connected with it (who uses it, when, what counts as using it properly).","Imagine explaining it to a visitor from a very different culture. What would surprise them?"], write:"The object, the norms and values around it, and what a visitor might find surprising…"},
     {t:"Recall a time you found another group’s custom strange. Rewrite your first reaction using cultural relativism.", how:["Write your honest first reaction in one or two sentences.","Then ask: what circumstances, values or beliefs might make this custom sensible to the people who practise it? Look it up if you can.","Finally, note whether your view changed, and whether any genuine concerns remain after understanding it."], write:"The custom, your first reaction, the relativist explanation, and what you think now…"}
   ], proof:"Notes with five observed norms classified as folkways or mores (with sanctions), one object analysed for its nonmaterial culture, and one before-and-after reflection showing ethnocentrism replaced by cultural relativism."},
   read:[
     {book:"soc", where:"Chapter 3 “Culture”, Section 3.1 “What Is Culture?” and Section 3.2 “Elements of Culture”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u2-l2", title:"Many cultures, changing cultures", minutes:50,
   hook:{q:"The digits 0–9 are used in most of the world today. Where did they come from?", options:["Ancient Rome","India","Ancient Greece","China"], answer:1, reveal:"**India.** The digits passed from society to society until most of the world used them. That spread is [[diffusion]], one of the ways cultures keep changing, and this lesson also shows how a single society holds many cultures at once."},
   goals:[
     "Distinguish high culture from popular culture, and subcultures from countercultures",
     "Explain how cultures change through innovation (invention and discovery) and diffusion",
     "Identify cultural lag in a real situation",
     "Weigh the homogenization and glocalization views of globalization using examples from several regions"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Section 3.3 shows that every society holds many cultures at once and that all of them keep changing. Section 3.4 (optional) looks at culture through the three theoretical lenses from Unit 1.",
      {look:[
        "How does high culture differ from popular culture, and what is cultural capital?",
        "What separates a subculture from a counterculture?",
        "What are the two kinds of innovation, and what is diffusion?",
        "What is cultural lag, and how does globalization spread culture?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[high-culture|High culture]] is linked to a society’s elite (ballet, symphonies, prestigious universities); [[popular-culture|popular culture]] is the mainstream, spread by commercial and social media. Pierre Bourdieu called the tastes and knowledge that signal status **cultural capital**. (3.3)",
        "A [[subculture]] has its own norms, style or slang while its members still take part in mainstream life (cosplayers, bikers, gamers). A [[counterculture]] rejects major values of the wider culture and may build its own rules, sometimes living apart. Quick test: does the group mostly *add* to mainstream life or *reject* key parts of it? (3.3)",
        "**Innovation** brings something new in two ways. **Discovery** reveals something that already existed but wasn’t known (a moon, a medicinal compound). **Invention** combines existing things into something new (the car, the phone, the e-bike). (3.3)",
        "[[diffusion|Diffusion]] is the spread of objects and ideas from one group to another, from noodle dishes to TV sitcoms. Everett Rogers showed that innovations spread from a few innovators and early adopters to the majority and, last, to the laggards. Material culture usually spreads faster than nonmaterial culture. (3.3)",
        "[[cultural-lag|Cultural lag]] (William F. Ogburn, 1922) is the time between new material culture arriving and society’s norms and rules adjusting to it. Drones and ride-hailing apps spread before the rules that govern them. (3.3)",
        "[[globalization|Globalization]] is growing interaction between regions and peoples, which links markets and makes nations depend on each other. Trade and technology carry culture along with goods. (3.3)",
        "Three lenses on culture: functionalists see its parts meeting society’s needs; conflict theorists see it reinforcing inequality; symbolic interactionists study how people experience it in daily interaction. (3.4)"
      ]}
    ]},
    {h:"Picture it", body:[ {fig:'<svg viewBox="0 0 340 298"><defs><marker id="e2u2-l2-cl1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><path class="d-ink" d="M24 262 L334 262" stroke-width="2" fill="none" marker-end="url(#e2u2-l2-cl1)"/><path class="d-ink" d="M24 262 L24 30" stroke-width="2" fill="none" marker-end="url(#e2u2-l2-cl1)"/><text x="170" y="288" text-anchor="middle">time →</text><text class="s" x="34" y="22">how much has changed</text><path class="d-soft" d="M150 82 L150 214" stroke-width="2" fill="none" stroke-dasharray="3 4" marker-end="url(#e2u2-l2-cl1)"/><path class="d-ink" d="M40 240 C 92 236 116 80 168 60 L 326 52" stroke-width="3" fill="none"/><path class="d-ink" d="M40 240 C 145 238 190 210 236 120 C 262 74 288 60 326 56" stroke-width="3" fill="none" stroke-dasharray="8 6"/><text x="158" y="124">cultural lag</text><text class="s" x="158" y="142">the gap</text><text x="250" y="42" text-anchor="middle">technology (material)</text><text x="272" y="180" text-anchor="middle">norms and laws</text><text x="272" y="198" text-anchor="middle">(nonmaterial)</text></svg>', alt:"A chart over time. A solid line for technology rises steeply early. A dashed line for norms and laws rises later. The gap between them is labelled cultural lag, and the lines meet again near the end.", cap:"Ogburn’s idea: technology changes first and norms and laws catch up later. The period in between is cultural lag."} ]},
    {h:"Key terms", body:[ {terms:["high-culture","popular-culture","subculture","counterculture","diffusion","cultural-lag","globalization","glocalization"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Who decides what is “high”?** Kabuki began as lively popular theatre in Edo-period Japan and is now a classical art. Shakespeare’s plays drew crowds who paid little to stand. Jazz moved from dance halls to concert halls. The label is a social judgement that shifts over time, not a verdict on quality."},
      {beyond:"**Three views of globalization and culture**, which the book doesn’t name. *Homogenization*: cultures converge on one, often Western, commercial model. *Hybridity*: contact creates new mixtures; K-pop blends Korean language and performance with global pop. [[glocalization|Glocalization]], a term popularized by Roland Robertson: global products are adapted locally (fast-food menus in India without beef) and local culture goes global (anime, Afrobeats, telenovelas). Flows are unequal, and many languages are losing speakers, but culture moves in many directions and is almost always reworked, not copied exactly."},
      {beyond:"**Diffusion around the world.** Chilli peppers travelled from the Americas into Thai, Korean, Indian and Ethiopian cooking; paper went from China through the Islamic world to Europe; the numerals 0–9 came from India; mobile money spread from Kenya after 2007; capoeira spread from Brazil."},
      {beyond:"**Two cautions.** Mainstream markets absorb rebellious styles and sell them back: punk jackets that once signalled rebellion now hang in chain stores, which weakens their meaning. And cultural lag is a pattern, not a law: new values can drive technology too, as environmental concern pushed solar power."},
      {fix:"The book says that in 1610 Galileo looked through his telescope and “discovered Saturn”. Saturn is visible to the naked eye and was known in ancient times. What Galileo saw that year was something odd beside it, which Christiaan Huygens identified as a ring in the 1650s. A cleaner 1610 example of discovery is Galileo spotting moons orbiting Jupiter. The book also dates Ogburn’s “culture lag” to 1957; he introduced the idea in *Social Change* (1922)."}
    ]}
   ],
   try:[
    {id:"e2u2-l2-x1", type:"sort", q:"Subculture or counterculture? Decide whether each group mainly adds to mainstream life or rejects major parts of it.", buckets:["Subculture","Counterculture"], items:[
      {t:"Skateboarders who share slang, style and video channels, while going to school and work as usual", b:0, why:"They add a distinctive identity but accept the main norms of the wider society: a subculture."},
      {t:"A commune that refuses to use money, rejects private property and lives apart from the wider economy", b:1, why:"It rejects core economic norms of the mainstream and builds an alternative: a counterculture."},
      {t:"An amateur astronomy society with its own jargon and night-time meet-ups", b:0, why:"A shared interest and vocabulary, with no rejection of mainstream values: a subculture."},
      {t:"The 1960s Western youth movement that rejected consumerism, conventional careers and the war in Vietnam", b:1, why:"It openly opposed major values of the dominant culture: the classic example of a counterculture."},
      {t:"An online gaming community with its own in-jokes and tournaments", b:0, why:"Members share norms and slang within the game but live ordinary lives outside it: a subculture."},
      {t:"A movement that tells members to refuse all state authority, including laws and taxes, and withdraw from society", b:1, why:"Rejecting the legitimacy of the state’s laws is rejecting core norms: a counterculture."}
    ]},
    {id:"e2u2-l2-x2", type:"match", q:"Match each example to the process of cultural change it shows.", pairs:[
      ["Engineers combine a phone, a camera and an internet connection into one device.","Invention","Combining existing things into something new is invention, one form of innovation."],
      ["Scientists identify a plant compound that had existed all along and turns out to treat a disease.","Discovery","Revealing something that already existed but was unknown is discovery, the other form of innovation."],
      ["Tea drinking spreads from China to Central Asia, Russia, Britain and East Africa.","Diffusion","A practice moving from one culture to others is diffusion."],
      ["Drones become cheap and popular years before rules on where they may fly are agreed.","Cultural lag","Material culture (the drones) changed faster than the nonmaterial culture (rules) meant to govern it."],
      ["A global coffee chain adds locally inspired drinks and closes for local religious holidays.","Glocalization","A global product adapted to fit local tastes and norms is glocalization."]
    ]},
    {id:"e2u2-l2-x3", type:"order", q:"Put this example of cultural lag in a typical order of events.", items:[
      {t:"A company invents a ride-hailing app that connects drivers with passengers.", why:"First comes the innovation itself: a new piece of material culture."},
      {t:"The app spreads quickly to cities in many countries.", why:"Diffusion follows: the technology spreads faster than rules can be written."},
      {t:"Existing taxi licensing laws don’t clearly cover the new kind of driver.", why:"The gap appears: old nonmaterial culture (laws, norms) doesn’t fit the new technology. This is the lag."},
      {t:"Disputes arise over safety, insurance and drivers’ rights.", why:"The mismatch produces conflict, which pushes for change."},
      {t:"Governments pass new rules, and new norms settle down.", why:"Finally nonmaterial culture catches up, closing the lag (until the next innovation)."}
    ]},
    {id:"e2u2-l2-x4", type:"mcq", q:"Kabuki began as popular entertainment in Edo-period Japan and is now treated as a classical art form. What does this best illustrate?", options:[
      {t:"The line between high and popular culture is socially defined and shifts over time.", ok:true, why:"Right. The art form’s status changed because of how society came to regard it and who attended, not because the art itself became “better”."},
      {t:"Popular culture is always lower in quality than high culture.", why:"If quality decided the label, the same art couldn’t move from one category to the other. The shift shows the label is social."},
      {t:"Kabuki is a counterculture.", why:"A counterculture rejects major mainstream values. Kabuki is a theatre tradition, not a movement opposing society’s norms."},
      {t:"It is an example of cultural lag.", why:"Cultural lag is the gap between technological change and the norms that govern it. Nothing here involves technology outpacing rules."}
    ]},
    {id:"e2u2-l2-x5", type:"spot", q:"An opinion column says this about globalization. Tap each claim that oversimplifies or overgeneralises.", ask:"oversimplifies", parts:[
      {t:"Global trade, travel and media connect more people than ever before.", flag:false, why:"A fair description of globalization that most researchers would accept."},
      " ",
      {t:"As a result, every culture on Earth is becoming identical.", flag:true, why:"An overgeneralisation. Evidence shows homogenization in some areas alongside hybridity and local adaptation (glocalization) in others."},
      " ",
      {t:"Cultural influence only ever flows from Western countries to the rest of the world.", flag:true, why:"Wrong. K-pop, anime, Bollywood, Afrobeats, yoga and telenovelas are just a few examples of culture flowing outward from non-Western places."},
      " ",
      {t:"Some languages are losing speakers as younger generations switch to more widely used ones.", flag:false, why:"Accurate, and a real concern raised by linguists and UNESCO."},
      " ",
      {t:"Local cultures simply copy foreign products exactly as they arrive.", flag:true, why:"Diffusion almost always involves selection and adaptation. That is the whole point of glocalization."}
    ], why:"Good analysis notes real homogenizing pressures without ignoring hybridity, local reworking and flows in many directions."},
    {id:"e2u2-l2-x6", type:"mcq", q:"A global fast-food chain’s restaurants in India leave beef off the menu and add vegetarian items made with local spices. Which concept fits best?", options:[
      {t:"Glocalization", ok:true, why:"A global business adapting its product to local values and tastes is the textbook example of glocalization."},
      {t:"Homogenization", why:"Homogenization would mean the same menu everywhere, erasing local differences. Here the menu has been changed to fit local norms."},
      {t:"Counterculture", why:"A counterculture rejects mainstream norms. Adjusting a menu to respect local norms is the opposite."},
      {t:"Cultural lag", why:"Cultural lag is about norms trailing behind technology. This is about adapting a product to a culture."}
    ]},
    {id:"e2u2-l2-x7", type:"mcq", q:"Which of these are examples of **diffusion**? Choose all that apply.", options:[
      {t:"Chilli peppers from the Americas becoming central to Thai and Korean cooking", ok:true, why:"A food moving from one region and being adopted elsewhere is diffusion."},
      {t:"Mobile money spreading from Kenya to other countries", ok:true, why:"A practice spreading from where it took off to other societies is diffusion."},
      {t:"A Brazilian martial art, capoeira, being taught in clubs across Europe and Asia", ok:true, why:"A cultural practice spreading to new countries is diffusion."},
      {t:"An engineer combining a battery and a bicycle to build an e-bike", why:"Combining existing things into something new is invention, a form of innovation, not diffusion."},
      {t:"An astronomer spotting a moon nobody had seen before", why:"Revealing something that already existed is discovery, a form of innovation, not diffusion."}
    ]}
   ],
   apply:{intro:"Look for cultural variety and change in your own surroundings. These are observation and reflection tasks; if you talk to anyone, keep it friendly and let them skip any question.", tasks:[
     {t:"Map the subcultures you belong to or know well.", how:["List three groups with their own slang, style, rules or rituals that you are part of or know (a sport, a hobby, a fandom, a profession, an online community).","For each, write two of its norms and one word or phrase outsiders wouldn’t understand.","Decide whether each is a subculture or a counterculture, and say why."], write:"Three groups, two norms each, one insider word each, and subculture or counterculture with your reason…"},
     {t:"Trace one thing in your daily life back through diffusion.", how:["Pick a food, word, sport, garment or app you use often.","Find out (from a reliable source such as an encyclopedia or museum website) where it came from and how it reached you.","Note how it changed along the way. That change is the local reworking that glocalization describes."], write:"The item, where it came from, its route to you, and how it was adapted…"},
     {t:"Find a current example of cultural lag.", how:["Think of a technology that has spread in the last few years in your country or community.","Describe one norm or rule that hasn’t caught up yet, or that people still disagree about.","Suggest what a new norm might look like, and who would need to agree to it."], write:"The technology, the lagging norm or law, and what might close the gap…"}
   ], proof:"Notes listing your subcultures with insider norms and words, one item traced through diffusion and adaptation, and one current case of cultural lag with a possible new norm."},
   read:[
     {book:"soc", where:"Chapter 3 “Culture”, Section 3.3 “High, Low, Pop, Sub, Counter-culture and Cultural Change”"},
     {book:"soc", where:"Optional: Section 3.4 “Theoretical Perspectives on Culture”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u2-l3", title:"Society and social interaction", minutes:55,
   hook:{q:"Farming can feel as old as humanity. Until roughly how long ago did all humans live by hunting and gathering?", options:["About 2,000 years ago","About 10,000–12,000 years ago","About 50,000 years ago","About 200,000 years ago"], answer:1, reveal:"About **10,000–12,000 years ago**. Since then, each new way of making a living, from herding and gardening to ploughs, factories and information work, has reshaped how people live together. This lesson follows those types of society, then asks what modern life does to the bonds between people and how everyday interaction builds the reality we take for granted."},
   goals:[
     "Classify societies by how they make a living, from hunter-gatherer to postindustrial, without treating the sequence as a ladder of worth",
     "Use Durkheim (solidarity), Marx (alienation) and Weber (rationalization) to describe modern life",
     "Explain the social construction of reality and the Thomas theorem with examples",
     "Analyse a person’s statuses and roles, including role conflict and role strain, and use Goffman’s dramaturgy"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 4 moves from culture to society: how societies make a living, what three classical thinkers said modern life does to people, and how everyday interaction builds the reality we take for granted.",
      {look:[
        "(4.1) How does Lenski classify societies, and what changes with each new technology?",
        "(4.2) What did Durkheim, Marx and Weber each say about what holds modern society together or pulls it apart?",
        "(4.3) What does it mean that reality is socially constructed, and what is the Thomas theorem?",
        "(4.3) How do statuses differ from roles, and how does Goffman use the theatre?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "Gerhard Lenski classified societies by how they make a living: **hunter-gatherer** (wild plants and animals; how all humans lived until about 10,000–12,000 years ago), **pastoral** (herding) and **horticultural** (garden plots, hand tools), which appeared around the same time, **agricultural** (ploughs, surpluses, cities, classes; including feudal societies), **industrial** (fuel-powered factories, from 18th-century Europe) and **postindustrial** (information and services). These are categories, not a ranking of human worth. (4.1)",
        "Émile Durkheim (*The Division of Labor in Society*, 1893): traditional societies hold together through [[mechanical-solidarity|mechanical solidarity]], people being alike; modern ones through [[organic-solidarity|organic solidarity]], specialised people depending on each other. When shared norms weaken, [[anomie]] (normlessness) can follow. (4.2)",
        "Karl Marx: under capitalism, workers suffer [[alienation]] from the product, the work process, other workers and themselves. (4.2)",
        "Max Weber: [[rationalization]] organizes life by efficiency, rules and calculation instead of tradition, and can trap people in an “iron cage”. (4.2)",
        "Peter Berger and Thomas Luckmann (1966): habits harden into institutions that later generations treat as natural. This is [[social-construction|social construction]]. Constructed is not unreal: money has value only because people agree it does, and that agreement shapes every life. (4.3)",
        "The [[thomas-theorem|Thomas theorem]] (W. I. Thomas and Dorothy Swaine Thomas, 1928): situations defined as real are real in their consequences. Robert K. Merton’s [[self-fulfilling-prophecy|self-fulfilling prophecy]] is a false belief that makes itself true, like a rumour that empties a sound bank. (4.3)",
        "A [[status]] is a social position; a [[role]] is the behaviour expected in it. Statuses are [[ascribed-status|ascribed]] (not chosen: age, birth order) or [[achieved-status|achieved]] (earned: electrician, mayor). [[role-conflict|Role conflict]] is tension *between* the roles of different statuses; [[role-strain|role strain]] is tension *within* one status. (4.3)",
        "Erving Goffman (1959) saw social life as theatre ([[dramaturgy]]): we perform roles with scripts, settings and props, and use [[impression-management|impression management]] to control how others see us. (4.3)"
      ]}
    ]},
    {h:"Picture it", body:[ {fig:'<svg viewBox="0 0 340 342"><path class="d-ink" d="M145 165 L106 116" stroke-width="2" fill="none"/><path class="d-ink" d="M195 165 L234 116" stroke-width="2" fill="none"/><path class="d-ink" d="M130 198 L116 200" stroke-width="2" fill="none"/><path class="d-ink" d="M210 198 L224 200" stroke-width="2" fill="none"/><path class="d-ink" d="M170 236 L170 282" stroke-width="2" fill="none"/><circle class="d-gold" cx="170" cy="196" r="40" stroke-width="2"/><text x="170" y="201" text-anchor="middle">Amara</text><rect class="d-sage" x="14" y="64" width="110" height="52" rx="10" stroke-width="2"/><text x="69" y="87" text-anchor="middle">nurse</text><text class="s" x="69" y="105" text-anchor="middle">achieved</text><rect class="d-sage" x="216" y="64" width="110" height="52" rx="10" stroke-width="2"/><text x="271" y="87" text-anchor="middle">mother</text><text class="s" x="271" y="105" text-anchor="middle">achieved</text><rect class="d-lup" x="6" y="174" width="110" height="52" rx="10" stroke-width="2"/><text x="61" y="197" text-anchor="middle">daughter</text><text class="s" x="61" y="215" text-anchor="middle">ascribed</text><rect class="d-sage" x="224" y="174" width="110" height="52" rx="10" stroke-width="2"/><text x="279" y="197" text-anchor="middle">student</text><text class="s" x="279" y="215" text-anchor="middle">achieved</text><rect class="d-lup" x="115" y="282" width="110" height="52" rx="10" stroke-width="2"/><text x="170" y="305" text-anchor="middle">aged 34</text><text class="s" x="170" y="323" text-anchor="middle">ascribed</text><path class="d-ink" d="M124 82 Q170 36 216 82" stroke-width="3" fill="none" stroke-dasharray="7 5"/><text x="170" y="42" text-anchor="middle">role conflict</text></svg>', alt:"Amara in the centre, linked to five statuses: nurse, mother and student (achieved), daughter and her age (ascribed). A dashed line between nurse and mother is labelled role conflict.", cap:"A status set. Each status carries its own roles; tension between two statuses is role conflict."} ]},
    {h:"Key terms", body:[ {terms:["mechanical-solidarity","organic-solidarity","alienation","rationalization","social-construction","thomas-theorem","self-fulfilling-prophecy","ascribed-status","achieved-status","master-status","role-conflict","role-strain"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Master status.** Everett Hughes (1945) described a [[master-status|master status]]: one status that overshadows all the others in how people see you, such as an illness, a disability, fame or a criminal conviction. Section 4.3 doesn’t use the term (the book mentions it only later, in 7.2, on labeling); most other introductory textbooks introduce it alongside statuses."},
      {beyond:"**Front stage and back stage.** The book uses Goffman’s theatre image without these labels. Front stage is where we perform for an audience: a server smiling at diners. Back stage is where we prepare, relax and drop the act: grumbling in the kitchen, straightening an apron before going out, joking after closing."},
      {beyond:"**Three lenses on one job.** A scripted, timed call-centre job shows Weber’s rationalization and Marx’s alienation from the work process, yet ties the worker to strangers through Durkheim’s organic solidarity. Each thinker has critics: Durkheim for underplaying conflict, Marx for revolutions that didn’t come as predicted, Weber for pessimism."},
      {beyond:"**Societies today.** The Hadza of Tanzania still hunt and gather; Maasai cattle herders and Sámi reindeer herders are pastoralists; horticulture continues in the Papua New Guinea highlands and the Amazon basin. Most countries mix several types."},
      {fix:"The book calls the Bambuti of the Democratic Republic of the Congo “a group of pygmy hunter-gatherers” and mentions Australian groups “sometimes referred to as ‘aborigines’”. Many people regard both labels as outdated or demeaning. Use specific names (BaMbuti or Mbuti) and, in Australia, “Aboriginal and Torres Strait Islander peoples”."}
    ]}
   ],
   try:[
    {id:"e2u2-l3-x1", type:"match", q:"Match each description to the type of society.", pairs:[
      ["Small mobile bands live on wild plants and animals, sharing food within kin groups.","Hunter-gatherer","Relying on wild resources, without farming or herding, defines a hunter-gatherer society."],
      ["Families move seasonally with their herds of cattle, sheep or reindeer.","Pastoral","Living mainly from domesticated animals is the mark of a pastoral society."],
      ["Villagers clear small garden plots with hand tools and move them as the soil tires.","Horticultural","Small-scale cultivation with hand tools, without ploughs, is horticulture."],
      ["Ploughs, draught animals and irrigation canals produce surpluses that feed cities and a ruling class.","Agricultural","Large-scale farming with ploughs and irrigation, producing surpluses and sharp inequality, defines an agricultural society."],
      ["Most people work in factories powered by fuel-driven machines and live in fast-growing cities.","Industrial","Mechanised production and urbanisation mark an industrial society."],
      ["Most jobs involve producing information or services such as software, finance, education and health care.","Postindustrial","An economy based on information and services rather than goods is postindustrial."]
    ]},
    {id:"e2u2-l3-x2", type:"order", q:"Put these types of society in the order in which they first appeared in human history.", items:[
      {t:"Hunter-gatherer", why:"The way all humans lived until roughly 10,000–12,000 years ago."},
      {t:"Horticultural", why:"Small-scale gardening with hand tools appeared after the domestication of plants. (Pastoral societies emerged at roughly the same time.)"},
      {t:"Agricultural", why:"Plough agriculture and irrigation came later, around 5,000 years ago, allowing cities and states."},
      {t:"Industrial", why:"Machine production began in Britain in the late 18th century."},
      {t:"Postindustrial", why:"Economies dominated by services and information emerged in the late 20th century."}
    ]},
    {id:"e2u2-l3-x3", type:"match", q:"Match each thinker or pair of thinkers to their idea.", pairs:[
      ["Émile Durkheim","Organic solidarity: modern societies hold together through interdependence","Durkheim contrasted mechanical solidarity (likeness) with organic solidarity (interdependence) in 1893."],
      ["Karl Marx","Alienation: workers are cut off from their product, their work and each other","Alienation is Marx’s account of what capitalist work does to people."],
      ["Max Weber","Rationalization: life organised by efficiency, rules and calculation","Weber described rationalization and warned of an “iron cage” of rules."],
      ["W. I. Thomas and Dorothy Swaine Thomas","Situations defined as real are real in their consequences","This is the Thomas theorem (1928)."],
      ["Peter Berger and Thomas Luckmann","Society is created and kept going by people’s shared habits and agreements","Their 1966 book is *The Social Construction of Reality*."],
      ["Erving Goffman","Social life as a performance with front and back stages","Goffman’s dramaturgy appears in *The Presentation of Self in Everyday Life*."]
    ]},
    {id:"e2u2-l3-x4", type:"sort", q:"Ascribed or achieved status? Sort each one.", buckets:["Ascribed","Achieved"], items:[
      {t:"Being the eldest child in your family", b:0, why:"You don’t choose your birth order: ascribed."},
      {t:"Being a qualified electrician", b:1, why:"Earned through training and exams: achieved."},
      {t:"Being 70 years old", b:0, why:"Age is not chosen: ascribed."},
      {t:"Being a city council member", b:1, why:"Won through an election campaign: achieved."},
      {t:"Being someone’s grandchild", b:0, why:"Family relationships you are born into are ascribed."},
      {t:"Being a former professional athlete", b:1, why:"It followed from a career the person pursued: achieved."}
    ]},
    {id:"e2u2-l3-x5", type:"sort", q:"Role conflict or role strain? Ask whether the tension is between two different statuses or inside one.", buckets:["Role conflict (between statuses)","Role strain (within one status)"], items:[
      {t:"Kenji’s manager wants him to work late on the night of his daughter’s school concert.", b:0, why:"Employee and parent are different statuses making incompatible demands: role conflict."},
      {t:"As a teacher, Ana must be both friendly with students and a strict, fair marker.", b:1, why:"Both demands come from the single status of teacher: role strain."},
      {t:"Sione is a police officer called to an incident involving his own cousin.", b:0, why:"Officer and family member are different statuses pulling in opposite directions: role conflict."},
      {t:"A new manager must keep her team happy while cutting their budget.", b:1, why:"Both expectations come from the one status of manager: role strain."},
      {t:"Hana, a university student with a part-time job, has an exam on the same day as a compulsory staff training.", b:0, why:"Student and employee are two statuses with clashing demands: role conflict."},
      {t:"A doctor must spend time listening to each patient and also see thirty patients a day.", b:1, why:"The tension is inside the single status of doctor: role strain."}
    ]},
    {id:"e2u2-l3-x6", type:"mcq", q:"A false rumour spreads that a town’s water supply is unsafe. Shops quickly run out of bottled water, and some families who can’t buy any start using an unsafe well. Which idea best explains how the rumour created a real problem?", options:[
      {t:"The Thomas theorem: situations people define as real are real in their consequences", ok:true, why:"People acted on their definition of the situation, and their actions produced real shortages and real risks, even though the original claim was false."},
      {t:"Organic solidarity", why:"Organic solidarity describes how specialised, interdependent people hold modern society together. It doesn’t explain how a false belief creates real consequences."},
      {t:"Role strain", why:"Role strain is tension within a single status. No one’s role is the issue here."},
      {t:"Cultural lag", why:"Cultural lag is norms trailing behind technology. Here the problem comes from people acting on a false belief."}
    ]},
    {id:"e2u2-l3-x7", type:"spot", q:"Read this description of a restaurant shift. Tap each moment that is **back-stage** behaviour in Goffman’s sense.", ask:"is back stage", parts:[
      {t:"Lucía greets the diners at table 6 with a warm smile and recommends the special.", flag:false, why:"Front stage: she is performing her role for an audience, the customers."},
      " ",
      {t:"In the kitchen, she slumps against the counter and complains to the cook about her aching feet.", flag:true, why:"Back stage: out of the customers’ sight, she drops the performance and relaxes with a teammate."},
      " ",
      {t:"She straightens her apron and checks her hair in a mirror before going back out.", flag:true, why:"Back stage: preparing the performance (adjusting costume and appearance) happens out of the audience’s view."},
      " ",
      {t:"At the table, she apologises politely when a dish is late.", flag:false, why:"Front stage: impression management in front of the audience."},
      " ",
      {t:"After closing, the staff joke about the evening’s most difficult customer.", flag:true, why:"Back stage: with the audience gone, the team can say things they would never say front stage."}
    ], why:"Front stage is where the performance happens for an audience; back stage is where performers prepare, relax and drop the role."}
   ],
   apply:{intro:"Use the lesson’s ideas to look at your own life. Everything here is reflection about yourself; leave other people unnamed.", tasks:[
     {t:"Draw your own status set.", how:["Write your name in the middle of a page.","Around it, write at least six statuses you hold right now. Mark each as ascribed or achieved.","Circle the one that others most often notice first. Is it acting like a master status? Is that fair?","Draw a dashed line between any two statuses that sometimes clash (role conflict), and note one status that has role strain inside it."], write:"Your statuses (ascribed or achieved), any master status, one role conflict and one role strain…"},
     {t:"Watch your own front and back stages for one day.", how:["Pick a day that includes at least two different settings (for example work or study, and home).","Note how your language, posture, clothes and topics change between front-stage and back-stage moments.","Note one prop or piece of setting you use for impression management."], write:"Two settings, what changed between front and back stage, and one prop you used…"},
     {t:"Find something socially constructed that you rely on every day.", how:["Choose an everyday thing that only works because people agree on it: money, a timetable, a queue number, a grade, a national holiday.","Explain in three sentences how it depends on shared agreement.","Then describe one real consequence it has for you, showing that constructed does not mean unreal."], write:"The constructed thing, how it depends on agreement, and one real consequence…"}
   ], proof:"Notes with your labelled status set (including role conflict and role strain), a one-day front-stage and back-stage comparison, and one socially constructed thing explained with its real consequences."},
   read:[
     {book:"soc", where:"Chapter 4 “Society and Social Interaction”, Section 4.1 “Types of Societies”, Section 4.2 “Theoretical Perspectives on Society” and Section 4.3 “Social Constructions of Reality”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u2-l4", title:"Becoming a self", minutes:55,
   hook:{q:"In Harry Harlow’s experiments, baby monkeys had two artificial “mothers”: one of bare wire that gave milk, and one of soft cloth that gave none. Which did they spend most of their time with?", options:["The wire mother, because it fed them","The cloth mother","Neither: they kept away from both","They split their time evenly"], answer:1, reveal:"**The soft cloth mother.** The infants clung to it for most of the day and went to the wire one mainly to feed. Harlow’s work, now widely criticised for the distress it caused the animals, showed that young primates need comfort and contact, not only food. This lesson follows how early care grows into a [[self]] through [[socialization]], which starts in the family and never really stops."},
   goals:[
     "Explain what socialization does for individuals and for society",
     "Weigh evidence on nature and nurture carefully, including its limits and ethical problems",
     "Explain Cooley’s looking-glass self and Mead’s I, me and generalized other",
     "Identify agents of socialization and explain anticipatory socialization, resocialization and total institutions"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 5 explains how a helpless newborn becomes a person with a self, and why that learning never really stops.",
      {look:[
        "(5.1) How do Cooley’s looking-glass self and Mead’s stages explain where a self comes from, and how did Gilligan challenge Kohlberg?",
        "(5.2) What does socialization do for society and for the individual, and what can twins tell us about nature and nurture?",
        "(5.3) Which agents of socialization does the book name, and what is the hidden curriculum?",
        "(5.4) How do anticipatory socialization and resocialization differ, and what happens in a total institution?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "[[socialization|Socialization]] is the lifelong process of learning a society’s norms, values, beliefs and roles. It passes culture to new members and builds each person’s [[self]]. (5.2)",
        "[[nature-nurture|Nature versus nurture]]: identical twins raised apart, such as Paula Bernstein and Elyse Schein (separated as babies in 1968, reunited at 35), show striking similarities and real differences. Most researchers now see genes and environment as interacting. (5.2)",
        "Psychologists described stages of development: Freud (personality), Erikson (eight life stages), Piaget (thinking). Harry Harlow’s experiments with infant monkeys showed how much young primates need comfort and contact. (5.1)",
        "Charles Horton Cooley’s [[looking-glass-self|looking-glass self]] (1902): we imagine how we appear to others, imagine their judgement, and feel pride or doubt as a result. The mirror is our *imagination* of their view, which may be wrong. (5.1)",
        "George Herbert Mead: the self grows by taking the role of others, in stages: **preparatory** (imitation), **play** (pretending to be one other person), **game** (many roles and the rules linking them, as in a team sport) and finally the [[generalized-other|generalized other]], society’s shared expectations. (5.1)",
        "Lawrence Kohlberg described three levels of moral reasoning: preconventional, conventional and postconventional. Carol Gilligan (*In a Different Voice*, 1982) noted that his studies used only boys and men, and proposed a care-and-responsibility perspective alongside justice. The book links her differences to gender socialization. (5.1)",
        "[[agent-of-socialization|Agents of socialization]]: family, [[peer-group|peer groups]], school (with its [[hidden-curriculum|hidden curriculum]] of punctuality, obedience and competition), workplace, religion, government (which sets ages for rights and duties) and mass media. (5.3)",
        "[[anticipatory-socialization|Anticipatory socialization]] prepares you for a role before you hold it; [[resocialization]] replaces old norms with new ones. It is most intense in a [[total-institution|total institution]] such as a prison or military camp, where entry often begins with a **degradation ceremony**: uniforms, haircuts, belongings removed. (5.4)"
      ]}
    ]},
    {h:"Picture it", body:[ {fig:'<svg viewBox="0 0 340 430"><defs><marker id="e2u2-l4-md1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-sage" x="30" y="8" width="280" height="72" rx="10" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Preparatory</text><text class="s" x="170" y="52" text-anchor="middle">imitates people nearby,</text><text class="s" x="170" y="69" text-anchor="middle">without understanding</text><path class="d-ink" d="M170 82 L170 102" stroke-width="2" fill="none" marker-end="url(#e2u2-l4-md1)"/><rect class="d-lup" x="30" y="104" width="280" height="72" rx="10" stroke-width="2"/><text x="170" y="127" text-anchor="middle">Play</text><text class="s" x="170" y="148" text-anchor="middle">takes the role of one other</text><text class="s" x="170" y="165" text-anchor="middle">person: “I’m the teacher”</text><path class="d-ink" d="M170 178 L170 198" stroke-width="2" fill="none" marker-end="url(#e2u2-l4-md1)"/><rect class="d-gold" x="30" y="200" width="280" height="72" rx="10" stroke-width="2"/><text x="170" y="223" text-anchor="middle">Game</text><text class="s" x="170" y="244" text-anchor="middle">grasps many roles at once</text><text class="s" x="170" y="261" text-anchor="middle">and the rules linking them</text><path class="d-ink" d="M170 274 L170 294" stroke-width="2" fill="none" marker-end="url(#e2u2-l4-md1)"/><rect class="d-rose" x="30" y="296" width="280" height="72" rx="10" stroke-width="2"/><text x="170" y="319" text-anchor="middle">Generalized other</text><text class="s" x="170" y="340" text-anchor="middle">takes the view of</text><text class="s" x="170" y="357" text-anchor="middle">“society” as a whole</text><text class="s" x="170" y="402" text-anchor="middle">each step widens whose point of</text><text class="s" x="170" y="420" text-anchor="middle">view the child can take</text></svg>', alt:"Four boxes in sequence, one above the other, joined by downward arrows: Preparatory (imitation), Play (taking the role of one other), Game (many roles at once), and Generalized other (the view of society as a whole).", cap:"Mead’s stages of self-development, as summarised in OpenStax."}, {fig:'<svg viewBox="0 0 340 442"><path class="d-ink" d="M170 156 L170 56" stroke-width="2" fill="none"/><path class="d-ink" d="M208 178 L250 140" stroke-width="2" fill="none"/><path class="d-ink" d="M208 222 L250 260" stroke-width="2" fill="none"/><path class="d-ink" d="M170 244 L170 344" stroke-width="2" fill="none"/><path class="d-ink" d="M132 222 L90 260" stroke-width="2" fill="none"/><path class="d-ink" d="M132 178 L90 140" stroke-width="2" fill="none"/><circle class="d-gold" cx="170" cy="200" r="44" stroke-width="2"/><text x="170" y="196" text-anchor="middle">a growing</text><text x="170" y="214" text-anchor="middle">person</text><rect class="d-rose" x="115" y="12" width="110" height="44" rx="10" stroke-width="2"/><text x="170" y="39" text-anchor="middle">family</text><rect class="d-lup" x="224" y="96" width="110" height="44" rx="10" stroke-width="2"/><text x="279" y="123" text-anchor="middle">peers</text><rect class="d-sage" x="224" y="260" width="110" height="44" rx="10" stroke-width="2"/><text x="279" y="287" text-anchor="middle">school</text><rect class="d-panel" x="115" y="344" width="110" height="44" rx="10" stroke-width="2"/><text x="170" y="371" text-anchor="middle">workplace</text><rect class="d-soft" x="6" y="260" width="110" height="44" rx="10" stroke-width="2"/><text x="61" y="287" text-anchor="middle">religion</text><rect class="d-lup" x="6" y="96" width="110" height="44" rx="10" stroke-width="2"/><text x="61" y="123" text-anchor="middle">media</text><text class="s" x="170" y="414" text-anchor="middle">government also sets ages and</text><text class="s" x="170" y="432" text-anchor="middle">rules for many transitions</text></svg>', alt:"A person in the centre linked to six agents of socialization: family, peers, school, workplace, religion and media.", cap:"Agents of socialization. Their influence varies over a lifetime and from one society to another."} ]},
    {h:"Key terms", body:[ {terms:["socialization","self","nature-nurture","looking-glass-self","generalized-other","agent-of-socialization","peer-group","hidden-curriculum","anticipatory-socialization","resocialization","total-institution"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Weak and strong evidence.** “Genie”, found in California in 1970 aged 13 after years of isolation, learned many words but never fully mastered grammar. Such cases are rare and tangled with abuse, malnutrition and unknown conditions from birth, so they can’t isolate one cause. The **Bucharest Early Intervention Project** (from 2000) is stronger: half of 136 young children in Romanian institutions were *randomly* placed with foster families, so differences could be put down to the care itself. Children in families did better, especially those placed early."},
      {beyond:"**Reading twin studies.** The Minnesota Study of Twins Reared Apart (Bouchard and colleagues, 1990) suggested substantial genetic contributions to many traits, but samples were small, and such estimates describe variation in a population, never “100% genetic” for any one person. One coincidence in one pair proves nothing."},
      {beyond:"**More on Mead.** He split the self into the spontaneous “I” and the “me” built from others’ attitudes, and said children first learn from **significant others** such as parents."},
      {beyond:"**Gilligan revisited.** Later reviews found only small average gender differences in moral reasoning, and critics warn that a neat justice-versus-care contrast can become a stereotype."}
    ]}
   ],
   try:[
    {id:"e2u2-l4-x1", type:"order", q:"Put Mead’s stages of self-development in order.", items:[
      {t:"Preparatory stage: the child imitates the people around them without understanding", why:"Mead’s first stage is pure imitation, such as copying a parent sweeping the floor."},
      {t:"Play stage: the child pretends to be one particular other person", why:"Next the child takes the role of one other at a time, such as playing “doctor” or “parent”."},
      {t:"Game stage: the child understands several roles at once and the rules that connect them", why:"In organised games, a player must anticipate what every other role will do."},
      {t:"Generalized other: the person takes the viewpoint of society’s shared expectations", why:"Finally the person can judge their own actions from the standpoint of society as a whole."}
    ]},
    {id:"e2u2-l4-x2", type:"match", q:"Match each experience to the agent of socialization at work.", pairs:[
      ["Mei’s grandmother teaches her the family’s dialect and how to address elders.","Family","Language and respect for elders taught at home: the family, the first agent of socialization."],
      ["At 14, Tomás starts using the slang and clothes of his friends at the skate park.","Peers","Peers of similar age and status teach group norms and style."],
      ["Students learn to wait their turn, follow a timetable and accept being ranked by grades.","School","These are lessons of the hidden curriculum, taught by school alongside the official subjects."],
      ["On his first week as a bank teller, Oluwaseun learns how colleagues really expect him to dress and talk.","Workplace","Organisational norms learned on the job: the workplace as an agent."],
      ["A video platform’s recommendations shape which body types and lifestyles Hana sees as normal.","Media","Mass and social media present images and norms that shape what people see as normal."]
    ]},
    {id:"e2u2-l4-x3", type:"spot", q:"A magazine article reports on twins. Tap each claim that the evidence can’t support.", ask:"goes beyond the evidence", parts:[
      {t:"Two identical twins, separated as babies and reunited at 35, both turned out to love the same brand of toothpaste.", flag:false, why:"This is just a reported fact about one pair. Interesting, but not yet a claim about anything else."},
      " ",
      {t:"This proves that personality is 100% genetic.", flag:true, why:"One coincidence in one pair proves nothing about everyone. Even large twin studies estimate genetic *contributions* to population variation, never 100%, and environments clearly matter."},
      " ",
      {t:"Large studies that compare twins raised apart with twins raised together suggest genes contribute substantially to many personality traits.", flag:false, why:"A fair summary of studies such as the Minnesota Study of Twins Reared Apart, which used comparison groups."},
      " ",
      {t:"So the way parents raise their children makes no difference at all.", flag:true, why:"Genetic contribution to some traits doesn’t mean environment has no effect. Evidence such as the Bucharest Early Intervention Project shows care environments matter a great deal."},
      " ",
      {t:"Separated twins are rare, so these studies have small samples.", flag:false, why:"A correct and important caveat."}
    ], why:"Watch for single cases turned into sweeping rules, and for “some genetic contribution” being stretched into “nothing else matters”."},
    {id:"e2u2-l4-x4", type:"mcq", q:"After her manager praises a colleague’s confident presentation, Fatima imagines that the manager sees her own quiet style as weak, and she starts to feel she isn’t good at her job. Which concept describes this?", options:[
      {t:"Cooley’s looking-glass self", ok:true, why:"She imagines how she appears, imagines the manager’s judgement and feels self-doubt. Note that the “mirror” is her imagination, which may not match the manager’s real view."},
      {t:"Mead’s play stage", why:"The play stage is a childhood phase of taking on one other person’s role in pretend play. Fatima is an adult interpreting others’ views of her."},
      {t:"Resocialization", why:"Resocialization means unlearning old norms and learning new ones, usually after a big life change. Nothing here involves replacing her norms."},
      {t:"Cultural relativism", why:"Cultural relativism is understanding another culture by its own standards. It has nothing to do with how she sees herself."}
    ]},
    {id:"e2u2-l4-x5", type:"sort", q:"Anticipatory socialization or resocialization?", buckets:["Anticipatory socialization (preparing for a future role)","Resocialization (replacing old norms with new ones)"], items:[
      {t:"A medical student shadows doctors on hospital rounds", b:0, why:"Rehearsing a role you will hold later is anticipatory socialization."},
      {t:"A new army recruit is given a uniform, a haircut and a strict daily schedule", b:1, why:"Old habits are stripped away and replaced inside a total institution: resocialization."},
      {t:"Ana, aged 62, joins a pre-retirement planning course", b:0, why:"Preparing for the retiree role before you have it is anticipatory socialization."},
      {t:"Kenji, after leaving prison, learns how to use online job applications and daily routines outside", b:1, why:"Unlearning institutional routines and learning new ones is resocialization."},
      {t:"A teenager practises interview answers before applying for a first job", b:0, why:"Rehearsing for a future role: anticipatory socialization."},
      {t:"Lucía, after a spinal injury, relearns how to travel, work and socialise using a wheelchair", b:1, why:"Adapting old routines and norms after a major change is resocialization."}
    ]},
    {id:"e2u2-l4-x6", type:"mcq", q:"Why can’t the case of “Genie”, found in 1970 after years of isolation, on its own prove how much language depends on early social interaction?", options:[
      {t:"She also suffered abuse and malnutrition, and no one knows whether she had other conditions from birth, so isolation can’t be separated from other causes.", ok:true, why:"Right. With many possible causes and only one case, researchers can’t isolate the effect of missing early interaction. That’s why randomized studies such as the Bucharest project are stronger evidence."},
      {t:"Because language has nothing to do with social interaction.", why:"Language is learned through interaction. The issue is that one tragic case can’t separate that effect from abuse, malnutrition and other factors."},
      {t:"Because she eventually learned to speak perfectly, so isolation had no effect.", why:"She learned many words but never fully mastered grammar. The problem with the evidence is confounding, not a complete recovery."},
      {t:"Because case studies are never allowed in sociology.", why:"Case studies are a recognised method. They can suggest ideas but can’t, alone, establish general causes."}
    ]},
    {id:"e2u2-l4-x7", type:"mcq", q:"What was Carol Gilligan’s main criticism of Lawrence Kohlberg’s theory of moral development?", options:[
      {t:"His research was based only on boys and men, and it treated a justice perspective as the highest form of morality while overlooking a care perspective.", ok:true, why:"That is Gilligan’s argument in *In a Different Voice* (1982). Later studies found only small average gender differences, but her critique changed how researchers think about moral reasoning."},
      {t:"He proved that girls are morally superior to boys.", why:"Kohlberg claimed nothing of the kind, and Gilligan argued for two different perspectives, not superiority."},
      {t:"He ignored the role of the generalized other.", why:"The generalized other is Mead’s concept. Gilligan’s critique concerned gender bias in Kohlberg’s samples and his ranking of perspectives."},
      {t:"He studied monkeys rather than humans.", why:"That describes Harry Harlow’s research on rhesus monkeys, not Kohlberg’s interviews with boys and young men."}
    ]}
   ],
   apply:{intro:"Reflect on how you became who you are. These tasks are about your own life; if you choose to talk to someone, make sure they are happy to, and that they can skip any question.", tasks:[
     {t:"Draw your own agents-of-socialization map.", how:["Put yourself in the middle and the seven agents around you: family, peers, school, workplace, religion (or none), government and media.","Next to each, write one norm or value it taught you.","Mark where two agents taught you opposite things, and note which one won, and why."], write:"One lesson from each agent, and one place where two agents disagreed…"},
     {t:"Notice a looking-glass moment.", how:["Recall a recent moment when you changed how you saw yourself because of how you thought someone saw you.","Write it out in Cooley’s three steps: how you thought you appeared, how you thought they judged you, how you felt.","Ask yourself: what evidence did you have that their judgement was what you imagined?"], write:"The three steps of your looking-glass moment, and how sure you were of the other person’s view…"},
     {t:"Interview someone about a rite of passage (optional).", how:["Ask a friend or family member who agrees to talk about a transition they went through: starting work, marriage, migration, retirement or a religious ceremony.","Ask what they had to learn, who taught them and what surprised them. They can skip any question.","Classify what they describe: anticipatory socialization, resocialization or both."], write:"The transition, what they learned and from whom, and how you classified it…"}
   ], proof:"Notes with your agents-of-socialization map (including one clash), one looking-glass moment in three steps, and optionally an interview about a rite of passage with your classification."},
   read:[
     {book:"soc", where:"Chapter 5 “Socialization”, Sections 5.1 “Theories of Self-Development”, 5.2 “Why Socialization Matters”, 5.3 “Agents of Socialization” and 5.4 “Socialization Across the Life Course”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u2-l5", title:"Groups and organizations", minutes:60,
   hook:{q:"A volunteer group starts out with every member having an equal say. According to Robert Michels, what tends to happen as organizations like it grow large?", options:["Power spreads out more evenly","A small group ends up running it","It splits into smaller, equal groups","Members vote on more decisions"], answer:1, reveal:"**A small group ends up running it.** Michels called this the [[iron-rule-of-oligarchy|iron rule of oligarchy]] (1911). This lesson moves from the smallest groups, a pair of friends, up to large [[bureaucracy|bureaucracies]], and shows how size, leadership and group pressure shape what people do."},
   goals:[
     "Distinguish groups from crowds and categories, and primary from secondary groups",
     "Explain in-groups, out-groups and reference groups, and how group size changes interaction",
     "Describe leadership styles, the Asch and Milgram studies (including the ethical debate) and groupthink",
     "Classify formal organizations and analyse bureaucracy, the iron rule of oligarchy and McDonaldization"
   ],
   guide:true,
   learn:[
    {h:"Before you read", body:[
      "Chapter 6 looks at the groups between you and society as a whole, from a pair of friends to a government department, and at how group pressure and organization shape what people do.",
      {look:[
        "(6.1) What makes a group different from an aggregate or a category, and how do primary and secondary groups differ?",
        "(6.1) What are in-groups, out-groups and reference groups?",
        "(6.2) How does size change a group, which leadership styles does the book describe, and what did Asch and Milgram find?",
        "(6.3) What are Etzioni’s three types of organization, the features of bureaucracy and the principles of McDonaldization?"
      ]}
    ]},
    {h:"The big ideas", body:[
      {list:[
        "A group is two or more people who interact regularly and share a sense of identity. An **aggregate** is people in one place who don’t interact (a bus queue); a **category** shares a trait without any ties (everyone born in 2005). (6.1)",
        "Charles Horton Cooley: [[primary-group|primary groups]] are small, lasting and personal, meeting **expressive** needs (family, close friends); [[secondary-group|secondary groups]] are larger, impersonal and task-focused, meeting **instrumental** needs (a class, an office). Groups can shift from one to the other. (6.1)",
        "William Graham Sumner: an [[in-group]] is one you belong to and feel loyal to; an [[out-group]] is one you don’t, and in-group favouritism can feed prejudice. A [[reference-group|reference group]] is any group you use as a standard to judge yourself. (6.1)",
        "Georg Simmel: a [[dyad]] (two people) is intimate but ends if one leaves; a [[triad]] (three) is more stable and allows a mediator, but also two-against-one coalitions. A group is large once it is too big for one shared conversation. (6.2)",
        "Leaders are **instrumental** (task-focused) or **expressive** (morale-focused). Styles: **democratic** (involves members; committed but slower), **laissez-faire** (hands-off; suits skilled, motivated groups) and **authoritarian** (gives orders; fast in emergencies but can alienate). (6.2)",
        "[[conformity|Conformity]] is how far people go along with group norms. In Solomon Asch’s line studies, 37 of 50 participants gave an obviously wrong answer at least once to match the group; conformity fell sharply with one ally or with private written answers. Stanley Milgram found most people obeyed an authority who told them to give what they believed were dangerous shocks. (6.2)",
        "Amitai Etzioni’s types of [[formal-organization|formal organization]]: **normative** (joined for shared values; non-material rewards), **coercive** (people are compelled: prisons) and **utilitarian** (joined for material reward: a job, a degree). (6.3)",
        "Max Weber’s ideal-type [[bureaucracy]] has a hierarchy, a division of labour, explicit rules and impersonality. Robert Michels’ [[iron-rule-of-oligarchy|iron rule of oligarchy]] (1911): large organizations end up ruled by a few. George Ritzer’s [[mcdonaldization|McDonaldization]] (1993): **efficiency** (fastest route), **calculability** (quantity over quality), **predictability** (same everywhere) and **control** (rules and machines replace judgement). (6.3)"
      ]}
    ]},
    {h:"Picture it", body:[ {fig:'<svg viewBox="0 0 340 352"><path class="d-soft" d="M52 82 L122 82" stroke-width="2" fill="none"/><circle class="d-rose" cx="52" cy="82" r="9" stroke-width="2"/><circle class="d-rose" cx="122" cy="82" r="9" stroke-width="2"/><path class="d-soft" d="M253 46 L213 116" stroke-width="2" fill="none"/><path class="d-soft" d="M253 46 L293 116" stroke-width="2" fill="none"/><path class="d-soft" d="M213 116 L293 116" stroke-width="2" fill="none"/><circle class="d-lup" cx="253" cy="46" r="9" stroke-width="2"/><circle class="d-lup" cx="213" cy="116" r="9" stroke-width="2"/><circle class="d-lup" cx="293" cy="116" r="9" stroke-width="2"/><path class="d-soft" d="M52 214 L122 214" stroke-width="2" fill="none"/><path class="d-soft" d="M52 214 L122 284" stroke-width="2" fill="none"/><path class="d-soft" d="M52 214 L52 284" stroke-width="2" fill="none"/><path class="d-soft" d="M122 214 L122 284" stroke-width="2" fill="none"/><path class="d-soft" d="M122 214 L52 284" stroke-width="2" fill="none"/><path class="d-soft" d="M122 284 L52 284" stroke-width="2" fill="none"/><circle class="d-sage" cx="52" cy="214" r="9" stroke-width="2"/><circle class="d-sage" cx="122" cy="214" r="9" stroke-width="2"/><circle class="d-sage" cx="122" cy="284" r="9" stroke-width="2"/><circle class="d-sage" cx="52" cy="284" r="9" stroke-width="2"/><path class="d-soft" d="M303 249 L278 292.3" stroke-width="2" fill="none"/><path class="d-soft" d="M303 249 L228 292.3" stroke-width="2" fill="none"/><path class="d-soft" d="M303 249 L203 249" stroke-width="2" fill="none"/><path class="d-soft" d="M303 249 L228 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M303 249 L278 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M278 292.3 L228 292.3" stroke-width="2" fill="none"/><path class="d-soft" d="M278 292.3 L203 249" stroke-width="2" fill="none"/><path class="d-soft" d="M278 292.3 L228 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M278 292.3 L278 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M228 292.3 L203 249" stroke-width="2" fill="none"/><path class="d-soft" d="M228 292.3 L228 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M228 292.3 L278 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M203 249 L228 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M203 249 L278 205.7" stroke-width="2" fill="none"/><path class="d-soft" d="M228 205.7 L278 205.7" stroke-width="2" fill="none"/><circle class="d-gold" cx="303" cy="249" r="9" stroke-width="2"/><circle class="d-gold" cx="278" cy="292.3" r="9" stroke-width="2"/><circle class="d-gold" cx="228" cy="292.3" r="9" stroke-width="2"/><circle class="d-gold" cx="203" cy="249" r="9" stroke-width="2"/><circle class="d-gold" cx="228" cy="205.7" r="9" stroke-width="2"/><circle class="d-gold" cx="278" cy="205.7" r="9" stroke-width="2"/><text class="s" x="87" y="24" text-anchor="middle">dyad</text><text class="s" x="253" y="24" text-anchor="middle">triad</text><text x="87" y="150" text-anchor="middle">2 people</text><text class="s" x="87" y="169" text-anchor="middle">1 link</text><text x="253" y="150" text-anchor="middle">3 people</text><text class="s" x="253" y="169" text-anchor="middle">3 links</text><text x="87" y="324" text-anchor="middle">4 people</text><text class="s" x="87" y="343" text-anchor="middle">6 links</text><text x="253" y="324" text-anchor="middle">6 people</text><text class="s" x="253" y="343" text-anchor="middle">15 links</text></svg>', alt:"Four small networks in a two-by-two grid: 2 people with 1 link (dyad), 3 people with 3 links (triad), 4 people with 6 links, and 6 people with 15 links.", cap:"Possible one-to-one links grow much faster than group size. This is why large groups need structure."} ]},
    {h:"Key terms", body:[ {terms:["primary-group","secondary-group","in-group","out-group","reference-group","dyad","triad","conformity","groupthink","formal-organization","bureaucracy","mcdonaldization"]} ]},
    {h:"Beyond the book", body:[
      {beyond:"**Groupthink.** Irving Janis (1972) described [[groupthink]]: in close-knit groups the wish to agree overrides realistic judgement. Warning signs: an illusion that the group can’t fail, self-censorship, pressure on dissenters, stereotyped outsiders and false unanimity. Remedies: outside advisers, someone arguing the opposite case, leaders giving their view last."},
      {beyond:"**Milgram and research ethics.** In his best-known version (Yale, early 1960s) about two-thirds of participants went to the maximum 450 volts. No shocks were real; the learner was an actor. But participants were deceived and many were distressed. Diana Baumrind (1964) argued the harm wasn’t justified, and the debate helped shape [[informed-consent|informed consent]] and ethics review. Jerry Burger’s 2009 partial replication stopped at 150 volts, and about 70% were still ready to go on."},
      {beyond:"**Counting links.** A group of *n* people has *n* × (*n* − 1) ÷ 2 possible pairs: 3 for a triad, 15 for six people. **Leadership in context:** the three styles come from Kurt Lewin’s studies in the late 1930s, and no style is always best; a flood evacuation needs quick direction."},
      {beyond:"**The irrationality of rationality.** Ritzer warns that efficient systems can become dehumanising or even inefficient, as when counting papers replaces judging their quality. Critics reply that many people value predictability, and that chains adapt to local cultures (glocalization, Lesson 2)."}
    ]}
   ],
   try:[
    {id:"e2u2-l5-x1", type:"sort", q:"Primary or secondary group? Consider whether the bond is emotional and personal or task-focused.", buckets:["Primary group","Secondary group"], items:[
      {t:"Sione’s extended family, who gather every Sunday", b:0, why:"Long-term, emotional and personal: a primary group, serving expressive needs."},
      {t:"The 200 students in a first-year lecture course", b:1, why:"Large, impersonal and organised around a task (passing the course): a secondary group."},
      {t:"Three friends who have supported each other since primary school", b:0, why:"Small, long-lasting and emotionally close: a primary group."},
      {t:"A neighbourhood committee formed to get a road repaired", b:1, why:"Formed for a specific goal, with members relating through that task: a secondary group."},
      {t:"A company’s payroll department", b:1, why:"A work unit organised to complete tasks: a secondary group (though close friendships can form inside it)."},
      {t:"A couple who have lived together for twenty years", b:0, why:"An intimate, enduring relationship: a primary group (and a dyad)."}
    ]},
    {id:"e2u2-l5-x2", type:"sort", q:"Classify each organization using Etzioni’s three types.", buckets:["Normative (voluntary)","Coercive","Utilitarian"], items:[
      {t:"A community choir", b:0, why:"People join because they love singing together; the rewards are non-material: normative."},
      {t:"A prison", b:1, why:"Inmates are compelled to be there: coercive."},
      {t:"A factory where people work for wages", b:2, why:"People join for a material reward, their pay: utilitarian."},
      {t:"An animal rescue charity run by volunteers", b:0, why:"Joined out of shared values with no pay: normative."},
      {t:"A university that students attend to earn a degree", b:2, why:"Students join to gain a qualification that brings material benefits: utilitarian."},
      {t:"A military unit in a country with compulsory national service", b:1, why:"Conscripts are required by law to serve: coercive. (Where service is voluntary and paid, the military is closer to utilitarian.)"}
    ]},
    {id:"e2u2-l5-x3", type:"number", q:"A project team grows to **6** people. How many different one-to-one relationships (pairs) are possible?", answer:15, tol:0, unit:"pairs", why:"Use n × (n − 1) ÷ 2. Each of the 6 people can pair with 5 others: 6 × 5 = 30. But that counts every pair twice (Amara–Kenji and Kenji–Amara), so divide by 2: **15 pairs**. That’s why a team of six needs more coordination than three pairs of two.", wrongs:[
      {v:30, tol:0, why:"You multiplied 6 × 5 but didn’t divide by 2. Each pair was counted twice, once from each person’s side."},
      {v:6, tol:0, why:"That’s the number of people, not the number of pairs. Each person is part of several pairs."},
      {v:36, tol:0, why:"6 × 6 pairs each person with themselves and counts every pair twice. Use n × (n − 1) ÷ 2."},
      {v:5, tol:0, why:"That’s how many pairs one person belongs to. The whole team has many more."}
    ], hint2:"Each person can pair with everyone except themselves, and each pair should only be counted once."},
    {id:"e2u2-l5-x4", type:"number", q:"In the Asch study as OpenStax reports it, **37** of **50** participants gave a clearly wrong answer at least once to match the group. What percentage is that?", answer:74, tol:0.5, unit:"%", why:"37 ÷ 50 = 0.74, and 0.74 × 100 = **74%**, about three-quarters. Remember what this measures: people who conformed *at least once*. Most individual answers were still correct.", wrongs:[
      {v:26, tol:0.5, why:"That’s the percentage who never conformed: 13 of 50. The question asks about the 37 who did at least once."},
      {v:37, tol:0.5, why:"37 is the number of people, not a percentage. Divide by 50, then multiply by 100."},
      {v:135, tol:1, why:"You divided 50 by 37. Put the part (37) on top and the whole (50) on the bottom."},
      {v:0.74, tol:0.005, why:"That’s the proportion. Multiply by 100 to turn it into a percentage."}
    ], hint2:"Percentage = part ÷ whole × 100."},
    {id:"e2u2-l5-x5", type:"match", q:"Match each example to the principle of McDonaldization it shows best.", pairs:[
      ["A clinic’s booking app lets patients skip phone calls and book in under a minute.","Efficiency","The fastest route from need to result is efficiency."],
      ["Lecturers are evaluated mainly on how many papers they publish per year.","Calculability","Judging by quantity rather than quality is calculability."],
      ["A hotel chain makes every room identical, from Nairobi to Nagoya.","Predictability","The same experience everywhere is predictability."],
      ["A delivery app tracks riders’ routes by GPS and sets their deadlines automatically.","Control","Replacing human judgement with rules and technology is control."]
    ]},
    {id:"e2u2-l5-x6", type:"spot", q:"Read these notes from a planning meeting. Tap each sign of **groupthink**.", ask:"is a sign of groupthink", parts:[
      {t:"The team leader opens by saying she is “certain this launch can’t fail”.", flag:true, why:"An illusion of invulnerability, especially stated by the leader first, is a classic symptom and discourages doubt."},
      " ",
      {t:"Members review last year’s sales figures together.", flag:false, why:"Looking at evidence together is good practice, not a symptom."},
      " ",
      {t:"Ana has doubts about the budget but keeps quiet so she won’t seem negative.", flag:true, why:"Self-censorship of doubts is a core sign of groupthink."},
      " ",
      {t:"When Kenji raises a risk, others say he’s “not a team player”.", flag:true, why:"Direct pressure on dissenters to fall into line is a groupthink symptom."},
      " ",
      {t:"The rival company is described as “too slow and stupid to react”.", flag:true, why:"Stereotyping outsiders as weak or foolish is one of Janis’s symptoms."},
      " ",
      {t:"The team agrees to ask an outside adviser to check the plan.", flag:false, why:"Bringing in outside views is one of Janis’s recommended remedies."}
    ], why:"Janis’s warning signs: illusions of invulnerability, self-censorship, pressure on dissenters, stereotyped outsiders and false unanimity."},
    {id:"e2u2-l5-x7", type:"mcq", q:"A flood hits a town and volunteers must evacuate an elderly care home within 30 minutes. Which leadership style is most likely to work best for that task?", options:[
      {t:"Authoritarian: a clear leader gives quick, direct instructions", ok:true, why:"In an emergency with little time, quick top-down decisions usually work best. The same style might alienate people in a slower, everyday project."},
      {t:"Laissez-faire: everyone decides for themselves what to do", why:"Without coordination, volunteers may duplicate work or miss residents. Hands-off leadership suits skilled groups with time, not emergencies."},
      {t:"Democratic: hold a discussion and vote on the plan", why:"Involving everyone builds commitment but takes time the volunteers don’t have."},
      {t:"No leader is needed in an emergency", why:"Emergencies are exactly when coordination matters most. Groups without leadership tend to stall or split."}
    ]},
    {id:"e2u2-l5-x8", type:"mcq", q:"Why are Milgram’s obedience studies a turning point in research ethics?", options:[
      {t:"Participants were deceived and many suffered real distress, which fuelled debate that helped shape today’s rules on informed consent and ethics review.", ok:true, why:"Right. The studies remain famous both for their findings and for the ethical questions they raised, which is why later replications such as Burger’s added strict safeguards."},
      {t:"The learners received real, dangerous electric shocks.", why:"No shocks were given. The learner was an actor. The ethical problem was deception and the stress on the real participants."},
      {t:"Milgram published his results without analysing them.", why:"His results were analysed and published. The controversy concerned his treatment of participants, not missing analysis."},
      {t:"The studies showed that nobody obeys authority.", why:"The opposite: in his best-known version about two-thirds of participants obeyed to the end. And that finding isn’t the ethics issue."}
    ]}
   ],
   apply:{intro:"Look at the groups and organizations in your own life. Keep observations general and don’t name or describe identifiable people.", tasks:[
     {t:"Map your groups.", how:["List every group you have taken part in this week (family, friends, work, classes, teams, online communities).","Label each as primary or secondary, and note whether its main function is expressive or instrumental.","Name one reference group you compare yourself with, and one out-group you notice yourself defining as “them”."], write:"Your groups (primary or secondary, expressive or instrumental), one reference group and one out-group…"},
     {t:"Spot McDonaldization in one everyday service.", how:["Pick a service you use: a supermarket, a bank app, a fast-food outlet, an online course, a government website.","Find one example each of efficiency, calculability, predictability and control.","Note one moment of “irrationality of rationality”, when the system was frustrating or dehumanising."], write:"The service, one example of each principle, and one irrational moment…"},
     {t:"Recall a decision where you went along with a group.", how:["Think of a time you agreed with a group decision even though you had doubts.","Which pressures were at work: wanting to belong, a strong leader, unanimity, time pressure?","Write what might have helped someone voice a doubt (an outside view, a devil’s advocate, private voting)."], write:"The situation (no names), the pressures, and what could have helped…"}
   ], proof:"Notes with your group map (including a reference group and an out-group), one service analysed with all four McDonaldization principles, and one reflection on conformity with a possible remedy."},
   read:[
     {book:"soc", where:"Chapter 6 “Groups and Organizations”, Sections 6.1 “Types of Groups”, 6.2 “Group Size and Structure” and 6.3 “Formal Organizations”"}
   ]
  }
  ],
  checkpoint:["e2u2-q02","e2u2-q06","e2u2-q09","e2u2-q12","e2u2-q16","e2u2-q20","e2u2-q23","e2u2-q27","e2u2-q31","e2u2-q35","e2u2-q39","e2u2-q43"],
  codex:[
   {id:"culture", title:"Culture", aka:["material culture","nonmaterial culture","cultural universals"], tags:["sociology","culture"],
    summary:"The learned, shared way of life of a group: its objects, values, beliefs, norms, symbols and language.",
    levels:{
     starter:[
      "Culture is everything a group of people learns and shares about how to live: what to eat and how, how to greet each other, what to believe, what to celebrate, what counts as polite or rude. Almost none of it is inborn. A baby born anywhere could grow up fluent in any culture.",
      "Culture has two sides. **Material culture** is the physical stuff people make and use: tools, clothes, buildings, phones. **Nonmaterial culture** is the ideas attached to them: values, beliefs, rules and meanings. A wedding ring is material; what it means is nonmaterial.",
      "A [[society]] is the people; culture is their way of life. Most people belong to several cultures at once, such as a national culture, a regional one, a religious one and a work culture.",
      {key:"You rarely notice your own culture until you meet a different one. That moment of surprise is where sociology starts."}
     ],
     builder:[
      "Sociologists break culture into elements that can be studied separately:",
      {table:[
        ["Element","What it is","Example"],
        ["Values","Standards of what is good or important","Hospitality, individual freedom, harmony"],
        ["Beliefs","Things held to be true","Education leads to a better life"],
        ["Norms","Expected behaviour","Queue for the bus; don’t interrupt elders"],
        ["Symbols","Things that stand for something by agreement","A flag, a gesture, a traffic light"],
        ["Language","A system of symbols for communication","Spoken, written and signed languages"]
      ]},
      "The anthropologist George Murdock (1949) identified **cultural universals**, features found in every known society, such as language, personal names, jokes, family arrangements and funeral rites. The categories are universal, but their content varies widely.",
      "Sociologists also contrast **ideal culture** (what a society says it values) with **real culture** (what people actually do). Gaps between them, such as a stated value of equality alongside persistent inequality, are a rich topic for research.",
      "See {{norms}}, {{values-beliefs}} and {{symbols-language}} for each element in depth.",
      "Four features describe culture well. It is **learned** (through {{socialization}}, not inherited), **shared** (by a group, though never perfectly evenly), **symbolic** (it works through meanings people attach to things) and **changing** (it is always being borrowed, adapted and contested). These features explain why two neighbours can have quite different habits: they learned in different families, generations, religions or communities.",
      {ex:"Every society marks death: that is a cultural universal. But a Ghanaian funeral may feature a custom-built coffin shaped to reflect the person’s life, a Japanese Buddhist funeral is usually quiet and formal, and Mexico’s Día de Muertos welcomes the dead home each year with altars and marigolds. Same universal, very different content.", label:"Worked example: one universal, many forms"}
     ],
     pro:[
      "Definitions of culture have a long and contested history. The anthropologist Edward Burnett Tylor (1871) called it a “complex whole” including knowledge, belief, art, morals, law and custom. UNESCO’s Universal Declaration on Cultural Diversity (2001) describes culture as the set of distinctive spiritual, material, intellectual and emotional features of a society or social group, including lifestyles, ways of living together, value systems, traditions and beliefs.",
      "Older approaches often treated each culture as a coherent, bounded whole shared equally by all members. Contemporary sociology is more cautious:",
      {list:[
        "**Internal diversity**: any society contains conflicting values and many subcultures; members differ by class, gender, age, region and religion.",
        "**Power**: some groups have more say over what counts as the “official” culture, for example through schools and media (a theme of {{conflict-theory}}).",
        "**Culture as a toolkit**: the sociologist Ann Swidler (1986) argued that people draw selectively on cultural resources to solve problems, rather than simply obeying a single set of values.",
        "**Change and mixing**: cultures borrow and adapt constantly (see {{cultural-change}})."
      ]},
      "A practical consequence: avoid statements like “culture X believes Y”. Better: “many people in X, especially in these groups, tend to…”, with evidence. This guards against stereotyping and the ecological fallacy of reading national averages as facts about individuals."
     ]
    },
    related:["norms","values-beliefs","symbols-language","ethnocentrism-relativism","cultural-change","sociology"],
    read:[{book:"soc", where:"Chapter 3, Section 3.1 “What Is Culture?”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.1 What Is Culture? (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/03%3A_Culture/3.02%3A_What_Is_Culture"},{t:"UNESCO Universal Declaration on Cultural Diversity (2001)", url:"https://en.unesco.org/about-us/legal-affairs/unesco-universal-declaration-cultural-diversity"}], checked:"2026-11"},

   {id:"norms", title:"Norms and sanctions", aka:["folkways","mores","laws","formal norms","informal norms","sanctions"], tags:["sociology","culture"],
    summary:"The shared rules of behaviour in a group, how they differ in weight and formality, and the rewards and punishments that keep them in place.",
    levels:{
     starter:[
      "A **norm** is a shared expectation about how to behave: wait your turn, don’t shout in a library, greet people when you arrive. Most norms are never written down. People learn them by watching, copying and being gently corrected.",
      "Some norms matter more than others. Sociologists use three words from William Graham Sumner (1906):",
      {list:[
        "**Folkways**: everyday customs with little moral weight, such as how to greet someone.",
        "**Mores**: norms about right and wrong, such as honesty or respect for the dead.",
        "**Laws**: formal norms written and enforced by the state."
      ]},
      "A **sanction** is a reaction that rewards following a norm or punishes breaking it: a smile, a thank-you, a frown, a fine. Most daily sanctions are tiny, but they keep social life running.",
      "Norms are local. Shaking hands, bowing and kissing on the cheek are each the polite greeting somewhere, and each would be odd somewhere else."
     ],
     builder:[
      "Norms vary along two separate dimensions. **Formality**: formal norms are written and enforced by an organisation (laws, school rules, a code of conduct); informal norms are unwritten (don’t stand too close to strangers). **Moral weight**: folkways carry little; mores carry a lot.",
      {table:[
        ["","Low moral weight","High moral weight"],
        ["Formal","Which side of the road to drive on; parking rules","Laws against theft, assault or fraud"],
        ["Informal","Greeting customs; shoes off indoors in many homes","Honesty with friends; keeping a friend’s secret"]
      ]},
      "Sanctions also have two dimensions:",
      {table:[
        ["","Positive","Negative"],
        ["Informal","Praise, smiles, invitations","Gossip, frowns, exclusion"],
        ["Formal","Awards, promotions, certificates","Fines, suspensions, prison"]
      ]},
      "Norms are always relative to a setting. Shouting is expected at a football match and forbidden in a hospital ward. The same act can follow one norm and break another.",
      {ex:"Mei eats a sandwich on a metro train where eating is banned by posted rules.\n• Norm type: formal (written rule), low moral weight (a folkway-like rule made official).\n• Likely sanctions: annoyed looks from passengers (negative, informal) and possibly a fine from staff (negative, formal).\n• The same sandwich on a long-distance train with a dining car breaks no norm at all.", label:"Worked example: classifying one norm and its sanctions"},
      "Most people follow most norms without thinking. Sociologists say norms are **internalised**: they become part of how we feel, so we feel embarrassment or guilt even when nobody is watching. That inner sanction is often stronger than any outside one."
     ],
     pro:[
      "OpenStax defines norms as behaviours that reflect compliance with what a culture has defined as good, right and important, and describes positive and negative sanctions as forms of [[social-control|social control]]. Many other textbooks add the formal/informal distinction for sanctions as well; both schemes are widely used.",
      "Points that matter in research:",
      {list:[
        "**Norms change.** Smoking indoors, attitudes to seat belts and expectations about fathers’ childcare have all shifted within living memory in many countries, often with laws and informal norms changing at different speeds.",
        "**Law and morality overlap but differ.** Some laws carry little moral weight, and some mores are not laws. When a law conflicts with strong mores, enforcement often weakens.",
        "**Hidden norms show up when broken.** The sociologist Harold Garfinkel’s “breaching experiments” deliberately broke small norms to reveal them. Today such exercises must be harmless, respectful and ethically reviewed, and are often done as thought experiments.",
        "**Who enforces matters.** Norms are not applied equally; the same behaviour can be sanctioned differently depending on who does it, which links to {{deviance}} and {{labeling-theory}}.",
        "**Norms can conflict.** Someone who belongs to several groups (a family, a workplace, a religious community) may face incompatible norms, and must choose which to follow in each setting."
      ]}
     ]
    },
    related:["culture","values-beliefs","social-control","deviance"],
    read:[{book:"soc", where:"Chapter 3, Section 3.2 “Elements of Culture”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.2 Elements of Culture (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/03%3A_Culture/3.03%3A_Elements_of_Culture"}], checked:"2026-11"},

   {id:"values-beliefs", title:"Values and beliefs", aka:["ideal culture","real culture"], tags:["sociology","culture"],
    summary:"What a culture holds to be good and important (values) and what it holds to be true (beliefs), and the gap between ideals and practice.",
    levels:{
     starter:[
      "**Values** are a culture’s ideas about what is good, right and worth aiming for: honesty, family loyalty, independence, harmony, hard work. **Beliefs** are ideas people hold to be true: that effort leads to success, that ancestors protect the living, that education opens doors.",
      "A simple way to remember: values answer “What matters?”, beliefs answer “How does the world work?”.",
      "Values and beliefs sit underneath norms. If a group values respect for elders and believes elders hold wisdom, then norms such as serving elders first or asking their advice will feel natural.",
      "Values and beliefs are shared, but never perfectly. Within any society people disagree about them, and they change as generations change.",
      {tip:"“Value” here doesn’t mean price. It means a shared standard of what is desirable."}
     ],
     builder:[
      "OpenStax defines values as the ideals, principles and standards that members of a culture hold in high regard, and beliefs as the tenets or convictions people hold to be true.",
      "**Ideal culture vs real culture.** Societies don’t always live up to their stated values. A country may value equal opportunity while children’s life chances still depend on their parents’ wealth; a community may value honesty while tolerating small everyday lies. Sociologists study these gaps because they reveal tension and change.",
      "**Value conflict.** Values often pull against each other:",
      {list:[
        "Individual achievement vs family obligation (taking a job abroad vs caring for parents).",
        "Freedom vs security (privacy vs surveillance for safety).",
        "Tradition vs change (keeping customs vs adopting new ones)."
      ]},
      "How people resolve these tensions differs between and within societies, and shifts over time.",
      {ex:"Fatima is offered a well-paid job in another city. Her culture values individual achievement (take the job) and family closeness (stay near her parents). Her beliefs matter too: if she believes the move will let her support her parents better, the two values may stop conflicting. Sociologists look for exactly these combinations of values and beliefs behind everyday decisions.", label:"Worked example: values and beliefs behind one decision"},
      "Values and beliefs also justify norms. Asking “why do we do it this way?” usually leads back to a value (“because family comes first”) or a belief (“because it brings good luck”)."
     ],
     pro:[
      "Values are measured cross-nationally by large surveys such as the **World Values Survey**, which has interviewed people in many countries in repeated waves since 1981. Such data show real differences in average attitudes between societies, and real change over time, often linked to economic development and generational replacement.",
      "Three cautions when using value data:",
      {list:[
        "**Averages aren’t individuals.** A national average says nothing certain about any one person (the ecological fallacy).",
        "**Within-country variation** is often larger than between-country differences, especially by age, education and urban or rural residence.",
        "**Words travel imperfectly.** Survey items such as “independence” or “obedience” can carry different meanings in different languages and settings, so good studies test whether questions are understood the same way."
      ]},
      "Theoretical lenses read values differently. A {{functionalism|functionalist}} view sees shared values as the glue of social order. A {{conflict-theory|conflict}} view asks whose values become dominant and whose interests they serve. A {{symbolic-interactionism|symbolic interactionist}} view looks at how people invoke and negotiate values in everyday talk.",
      "Values also change faster than people often assume. Survey research in many countries has recorded large shifts within a generation in attitudes towards, for example, women’s paid work and environmental protection, usually led by younger and more educated groups."
     ]
    },
    related:["culture","norms","functionalism","conflict-theory"],
    read:[{book:"soc", where:"Chapter 3, Section 3.2 “Elements of Culture”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.2 Elements of Culture (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/03%3A_Culture/3.03%3A_Elements_of_Culture"}], checked:"2026-11"},

   {id:"symbols-language", title:"Symbols, language and the Sapir–Whorf hypothesis", aka:["linguistic relativity","linguistic determinism","Whorfian hypothesis"], tags:["sociology","culture","language"],
    summary:"How shared symbols and language carry culture, and what the evidence really says about language shaping thought.",
    levels:{
     starter:[
      "A **symbol** is anything that stands for something else because people agree it does: a flag, a ring, a red light, a nod. The meaning isn’t in the object; it’s learned. That’s why the same colour or gesture can mean different things in different places.",
      "**Language** is the richest symbol system humans have. It lets us share knowledge, make plans, tell stories and pass culture from one generation to the next. Sign languages are full languages too.",
      "The **Sapir–Whorf hypothesis** asks whether language shapes how we think. The strong version (language *decides* what you can think) is not supported. A weaker version (language can *nudge* attention and memory in specific ways) has some experimental support.",
      {key:"Not having a single word for something doesn’t stop people from thinking or feeling it."},
      "Shared symbols are also what make a group feel like a group: a team’s colours, a national anthem or a community’s greeting tell members they belong."
     ],
     builder:[
      "The hypothesis is named after the linguist Edward Sapir and his student Benjamin Lee Whorf, who studied Indigenous languages of North America in the early 20th century. They never published a joint hypothesis; the label was attached later.",
      {table:[
        ["Version","Claim","Evidence"],
        ["Strong: linguistic determinism","Language determines thought","Not supported: people learn new concepts, translate, and think without words"],
        ["Weak: linguistic relativity","Language influences some perception, memory and categorisation","Supported for specific, usually modest effects"]
      ]},
      "Two often-cited findings:",
      {list:[
        "**Colour.** Russian has separate basic words for lighter and darker blue. In a 2007 study in *PNAS*, Russian speakers were slightly faster at distinguishing blues that crossed that boundary; English speakers showed no such advantage, and the effect vanished when Russian speakers did a verbal task at the same time.",
        "**Space.** Speakers of Guugu Yimithirr (north Queensland, Australia) describe locations with compass directions instead of left and right, and studies found they track direction exceptionally well."
      ]},
      "OpenStax presents Sapir–Whorf in general terms without separating the two versions, so this distinction is worth adding when you read the textbook.",
      "Symbols matter to sociologists beyond language. People fight over flags, statues and names because symbols carry identity and status. Changing the name of a street or the design of a flag is never just a practical decision."
     ],
     pro:[
      "Contemporary research treats linguistic relativity as a set of testable, specific questions rather than one grand thesis: *which* aspects of language affect *which* cognitive processes, *how much*, and *when*? Findings so far suggest effects are often task-dependent and online (they operate during processing and can be disrupted, as in the colour study), rather than permanent differences in how the world appears.",
      "Some popular examples are weak or contested:",
      {list:[
        "Claims that a language has “hundreds of words for snow” are frequently exaggerated, and in any case specialist vocabularies (skiers, sailors, doctors) exist in every language.",
        "Studies on grammatical gender (for example, whether speakers describe a “key” differently depending on its gender in their language) have had mixed replication results, so treat them with caution.",
        "Examples linking a country’s statistics (such as accident rates) to features of its language face many confounding factors."
      ]},
      "For sociology, the safer and more useful point is broader: language encodes a culture’s categories, and the words available in public debate shape how issues are framed (compare [[framing]] in the study of social movements). Debates about respectful terminology rest on this weaker, well-supported idea, not on strong determinism.",
      "Language is also a marker of status and identity. Which language is used in schools, courts and government, and which accents are treated as “proper”, affects people’s opportunities. UNESCO and linguists warn that many of the world’s languages are endangered as speakers shift to larger ones, taking distinctive knowledge and ways of expression with them."
     ]
    },
    related:["culture","norms","symbolic-interactionism"],
    read:[{book:"soc", where:"Chapter 3, Section 3.2 “Elements of Culture” (Symbols and Language)"}],
    sources:[{t:"Britannica: Whorfian hypothesis", url:"https://www.britannica.com/science/Whorfian-hypothesis"},{t:"Winawer et al. (2007), Russian blues reveal effects of language on color discrimination, PNAS (University of York record)", url:"https://pure.york.ac.uk/portal/en/publications/russian-blues-reveal-effects-of-language-on-color-discrimination/"},{t:"OpenStax Introduction to Sociology 3e, 3.2 Elements of Culture (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/03%3A_Culture/3.03%3A_Elements_of_Culture"}], checked:"2026-11"},

   {id:"ethnocentrism-relativism", title:"Ethnocentrism, cultural relativism and culture shock", aka:["xenocentrism","cultural imperialism","culture shock"], tags:["sociology","culture"],
    summary:"Judging other cultures by your own standards, understanding them on their own terms, and what happens when you are immersed in an unfamiliar culture.",
    levels:{
     starter:[
      "**Ethnocentrism** means judging other cultures by your own culture’s standards and assuming your way is normal or best. Calling another people’s food “weird” because it isn’t what you grew up with is a small everyday example.",
      "**Cultural relativism** is the opposite habit: trying to understand a practice in the context of the culture it belongs to before judging it.",
      "**Xenocentrism** is believing another culture is better than your own, such as assuming imported goods are always superior.",
      "**Culture shock** is the confusion and stress of living among unfamiliar norms, for example after moving abroad. It usually eases with time.",
      {tip:"Understanding a practice is not the same as approving of it. Relativism asks you to understand first."},
      "These ideas help anyone who studies, travels, works with people from other backgrounds or simply lives in a diverse neighbourhood."
     ],
     builder:[
      "William Graham Sumner popularized *ethnocentrism* in *Folkways* (1906). Mild ethnocentrism, such as pride in your own group, is common. Strong ethnocentrism produces stereotypes and conflict, and historically justified **cultural imperialism**: imposing one culture’s language, religion or values on others, as in colonial schooling policies.",
      "**Cultural relativism** is a research method as much as an attitude. An anthropologist or sociologist tries to see why a practice makes sense to the people who follow it: what needs it meets, what beliefs support it, what constraints people face.",
      "**Culture shock** was described by the anthropologist Kalervo Oberg in a 1960 article. It is often modelled in phases:",
      {ol:["Honeymoon: excitement and curiosity.","Frustration: irritation, homesickness, sometimes ethnocentric judgements.","Adjustment: routines and understanding grow.","Adaptation: functioning comfortably."]},
      "Many people also experience **reverse culture shock** when they return home and find their own culture unfamiliar.",
      {ex:"Tomás visits relatives in a country where people eat with their right hand from a shared dish.\n• Ethnocentric reaction: “That’s unhygienic; we use cutlery properly.”\n• Relativist approach: learn the norms (wash hands before the meal, use the right hand, take from the part of the dish in front of you) and the values behind them (sharing, hospitality).\n• Xenocentric reaction: “Our way is embarrassing; this is far more civilised.” Both ethnocentrism and xenocentrism rank cultures instead of understanding them.", label:"Worked example: three reactions to one meal"}
     ],
     pro:[
      "The relativism debate has two sides worth separating. **Methodological relativism** (suspend judgement while you seek understanding) is standard good practice. **Moral relativism** (no practice can ever be judged from outside) is a philosophical position that many scholars reject, because it would rule out criticising any harm. Debates about universal human rights versus cultural difference sit at this boundary, and careful work distinguishes the two.",
      "OpenStax notes that cultural relativists can still question practices such as female genital mutilation; the point is to understand practices before evaluating them, and to recognise that people within every culture also debate and contest their own practices.",
      "On culture shock, research has found that the neat “U-curve” of phases fits some people and not others. Language skill, social support, discrimination, the reason for moving (study, work, refuge) and previous experience all shape adjustment. Avoid presenting the stages as a fixed timetable.",
      "Xenocentrism can have material consequences, such as devaluing local languages, products or knowledge, and it is often connected to global inequalities in prestige (see {{global-stratification}}).",
      "Ethnocentrism also shapes research itself. Social scientists have noted that much published psychology and sociology draws on samples from a few wealthy, mostly Western countries, then generalises to all humans. Good practice is to say where findings come from and test them elsewhere, which is also why these lessons add examples from many regions to a US-centred textbook."
     ]
    },
    related:["culture","norms","cultural-change","global-stratification"],
    read:[{book:"soc", where:"Chapter 3, Section 3.1 “What Is Culture?”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.1 What Is Culture? (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/03%3A_Culture/3.02%3A_What_Is_Culture"}], checked:"2026-11"},

   {id:"subculture-counterculture", title:"High, popular, sub- and countercultures", aka:["high culture","popular culture","subculture","counterculture","cultural capital"], tags:["sociology","culture"],
    summary:"The many cultures inside one society: elite and mainstream culture, groups that add their own layer, and groups that reject mainstream values.",
    levels:{
     starter:[
      "No society has just one culture. Inside it you find:",
      {list:[
        "**High culture**: forms linked with elites and prestige, like opera or ballet.",
        "**Popular culture**: mainstream culture most people share, like football, pop music and popular TV.",
        "**Subcultures**: groups with their own style, slang or values who still take part in mainstream life, such as gamers, surfers or skateboarders.",
        "**Countercultures**: groups that reject major mainstream values and live by alternatives, such as the 1960s Western youth counterculture."
      ]},
      "The lines move. Something rebellious today can be sold in shops tomorrow, and yesterday’s popular entertainment can become today’s classical art.",
      "Most people move between several of these at once: a fan of popular music who also belongs to a hobby subculture and occasionally goes to the opera."
     ],
     builder:[
      "OpenStax links **high culture** to the elite and **popular culture** to the mainstream. Pierre Bourdieu’s *Distinction* (1979) argued that taste functions as **cultural capital**: familiarity with prestigious culture helps privileged groups signal status and pass advantages to their children.",
      "Examples of shifting boundaries: Shakespeare was popular theatre; kabuki began as popular entertainment in Edo-period Japan; jazz moved from dance halls to concert halls.",
      "**Subculture or counterculture?** Ask whether the group mainly adds to mainstream life or rejects key parts of it:",
      {table:[
        ["","Subculture","Counterculture"],
        ["Relationship to mainstream","Participates, adds a distinct layer","Rejects major values and norms"],
        ["Examples","Cosplayers, birdwatchers, motorcycle clubs, hip-hop scenes","1960s counterculture; communes rejecting money and property"]
      ]},
      "Hip-hop shows how a subculture can travel: it began in the Bronx, New York, in the 1970s and now has distinctive local scenes worldwide.",
      "Subcultures form around many things: age (youth scenes), occupation (the subculture of hospital night shifts), leisure (surfing, gaming), place (a neighbourhood) or shared experience. They give members identity, belonging and often their own vocabulary. Countercultures can be peaceful or confrontational, short-lived or long-lasting; many leave a mark on the mainstream, as the 1960s counterculture did on attitudes to the environment and personal freedom.",
      "Members may also belong to several subcultures at once and move between them over time."
     ],
     pro:[
      "Sociological work on subcultures took off at the Birmingham Centre for Contemporary Cultural Studies in the 1970s, which read youth styles such as punk as symbolic resistance by working-class young people. Dick Hebdige’s *Subculture: The Meaning of Style* (1979) is a classic of this approach. Later “post-subcultural” researchers argued that many young people move fluidly between scenes, so fixed, class-based subcultures describe today’s world less well.",
      "Three analytical cautions:",
      {list:[
        "**Labels are judgements.** Calling a group a counterculture describes its relationship to a particular mainstream at a particular time; the group may reject the label, and the mainstream itself shifts.",
        "**Commodification.** Markets absorb oppositional styles and sell them back, which can drain them of oppositional meaning.",
        "**Avoid stereotyping.** Religious minorities, Indigenous peoples and ethnic communities are not automatically “subcultures” or “countercultures”; they may be full cultures in their own right, and terms should follow how communities describe themselves."
      ]},
      "The high/popular distinction is also contested by scholars who argue that “omnivorous” taste (liking many genres) has become a newer marker of status in some societies.",
      "Digital platforms have changed how subcultures form and spread: niche scenes can now find members worldwide, and a local style can go global in weeks. That speeds up both the growth of subcultures and their absorption into the mainstream."
     ]
    },
    related:["culture","cultural-change","ethnocentrism-relativism"],
    read:[{book:"soc", where:"Chapter 3, Section 3.3 “High, Low, Pop, Sub, Counter-culture and Cultural Change”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.3 High, Low, Pop, Sub, Counter-culture and Cultural Change", url:"https://openstax.org/books/introduction-sociology-3e/pages/3-3-high-low-pop-sub-counter-culture-and-cultural-change"}], checked:"2026-11"},

   {id:"cultural-change", title:"Cultural change, cultural lag and globalization", aka:["innovation","invention","discovery","diffusion","cultural lag","glocalization","homogenization"], tags:["sociology","culture","globalization"],
    summary:"How cultures change through invention, discovery and diffusion, why rules lag behind technology, and what globalization does to cultures.",
    levels:{
     starter:[
      "Cultures change in three main ways:",
      {list:[
        "**Invention**: combining existing things or ideas into something new, like the smartphone.",
        "**Discovery**: finding something that already existed, like a new medicine in a plant.",
        "**Diffusion**: borrowing from other cultures, like chilli peppers travelling from the Americas into Asian and African cooking."
      ]},
      "**Cultural lag** is the gap when technology changes faster than the rules and norms that should govern it, such as phones with cameras arriving before clear norms about photographing strangers.",
      "**Globalization** connects the world’s cultures more closely. It can make some things more alike everywhere while also creating new mixtures.",
      "Borrowed things are rarely copied exactly. People adapt them to local tastes and needs, which is why the same global dish or song sounds and tastes different from place to place."
     ],
     builder:[
      "OpenStax groups invention and discovery as **innovation**. **Diffusion** is the spread of ideas, objects and practices between groups, and it is rarely exact copying: borrowed items are selected and reworked. Paper (invented in China) and the numerals 0–9 (developed in India, spread via Arabic-speaking scholars) are classic long-distance examples; mobile money, which took off in Kenya after 2007, is a recent one. Everett Rogers described how innovations spread from early adopters to the majority.",
      "William F. Ogburn coined **cultural lag** in 1922. Examples: laws on online privacy trailing social media; road rules trailing e-scooters; household norms about phones at meals still forming.",
      "Three views of **globalization and culture**:",
      {table:[
        ["View","Claim"],
        ["Homogenization","Cultures converge on a single, often Western and commercial, model"],
        ["Hybridity","Contact produces new mixtures, such as K-pop"],
        ["Glocalization","Global forms are adapted locally, and local forms go global"]
      ]},
      "The sociologist Roland Robertson popularized *glocalization*, a term he traced to Japanese business usage.",
      {ex:"Mobile money took off in Kenya after 2007 (an innovation spreading rapidly within one country), then spread to other countries (diffusion). Laws on digital payments, consumer protection and taxation often followed years later (cultural lag), and each country adapted the service to its own banks and rules (glocalization).", label:"Worked example: one service, four concepts"}
     ],
     pro:[
      "Cultural lag is useful but has limits. Ogburn assumed material culture usually leads; critics note that values and ideas often drive technology (environmental concern spurring renewable energy), and that “lag” can imply a single correct endpoint that norms should reach. Treat it as a descriptive pattern, not a law.",
      "The homogenization debate turns on evidence about flows and power. Supporters point to the global reach of a handful of media and consumer companies and to language shift, as speakers of smaller languages adopt larger ones. Critics point to vigorous non-Western cultural exports (Bollywood, Nollywood, K-pop, anime, telenovelas, Afrobeats), to local reinterpretation of global products, and to audiences’ active readings of media. Most researchers now see homogenization and heterogenization happening together, unevenly, with outcomes shaped by economic power.",
      "Related concepts: **cultural imperialism** (the deliberate imposition of one culture on another), **cultural appropriation** (debates over borrowing from marginalised cultures without acknowledgement or benefit to them), and George Ritzer’s {{mcdonaldization}} as a specific homogenizing process. For the economic side of globalization, see {{work-globalization}}.",
      "When you assess a claim about globalization, ask: which aspect of culture (products, media, values, language)? For whom (urban or rural, young or old, rich or poor)? And in which direction are things flowing? Answers usually differ by group, which is why sweeping claims are rarely right."
     ]
    },
    related:["culture","subculture-counterculture","mcdonaldization","work-globalization","social-change"],
    read:[{book:"soc", where:"Chapter 3, Section 3.3 “High, Low, Pop, Sub, Counter-culture and Cultural Change”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 3.3 High, Low, Pop, Sub, Counter-culture and Cultural Change", url:"https://openstax.org/books/introduction-sociology-3e/pages/3-3-high-low-pop-sub-counter-culture-and-cultural-change"},{t:"Britannica: Glocalization", url:"https://www.britannica.com/topic/glocalization"}], checked:"2026-11"},

   {id:"types-of-societies", title:"Types of societies", aka:["hunter-gatherer","pastoral","horticultural","agricultural","industrial","postindustrial","information society"], tags:["sociology","society"],
    summary:"Classifying societies by how they make a living, from hunter-gatherer to postindustrial, and what changes with each.",
    levels:{
     starter:[
      "One way sociologists compare societies is by how people make a living, because that shapes group size, settlement, family life and inequality.",
      {ol:[
        "**Hunter-gatherer**: hunting and foraging wild food, in small mobile groups.",
        "**Pastoral**: herding animals such as cattle, goats or reindeer.",
        "**Horticultural**: growing crops in small plots with hand tools.",
        "**Agricultural**: large-scale farming with ploughs and irrigation; cities and states appear.",
        "**Industrial**: machines and factories; people move to cities.",
        "**Postindustrial**: most work is in services and information."
      ]},
      {warn:"This is not a ranking of human worth. People in every type of society have the same abilities, and most countries today mix several types."},
      "Each change in how people make a living reshaped the rest of life: settled farming made cities possible, and factories pulled millions of people from villages into towns."
     ],
     builder:[
      "OpenStax follows the sociologist Gerhard Lenski, who classified societies by their level of technology. Key features:",
      {table:[
        ["Type","Surplus and inequality","Examples"],
        ["Hunter-gatherer","Little surplus; relatively equal","How all humans lived until about 10,000–12,000 years ago; today groups such as the Hadza (Tanzania)"],
        ["Pastoral","Herds create some surplus and trade","Maasai, Mongolian herders, Sámi reindeer herders"],
        ["Horticultural","Settled villages; modest surplus","Communities in highland Papua New Guinea and the Amazon"],
        ["Agricultural","Large surplus; cities, states, sharp class divisions; feudal systems","Ancient Egypt, Mesopotamia, the Indus valley, imperial China; medieval Europe and Japan"],
        ["Industrial","Mass production; urbanisation","Britain from the late 1700s, later much of the world"],
        ["Postindustrial","Services and knowledge; education key to position","Economies dominated by services"]
      ]},
      "Daniel Bell’s *The Coming of Post-Industrial Society* (1973) is a classic account of the last shift.",
      "A useful pattern runs through the table: as **surplus** grows (more food or goods than people need to survive), societies can support specialists such as priests, soldiers and officials, and inequality tends to grow. Industrial societies later reduced some extreme inequalities through mass education and welfare states, while creating new ones. In **information societies**, education and control of data become central sources of advantage, which links to debates about the [[digital-divide|digital divide]]."
     ],
     pro:[
      "Classifications like Lenski’s descend from 19th-century evolutionary schemes that ranked societies from “savage” to “civilised”, often to justify colonial rule. Modern sociology rejects that ranking while keeping the useful insight that subsistence technology constrains social organisation.",
      "Cautions:",
      {list:[
        "**Mixed economies.** Most contemporary societies combine farming, industry and services, and many households straddle them through migration and remittances.",
        "**Contemporary foragers are not living fossils.** Groups such as the Hadza or BaMbuti live in the present, trade with neighbours, deal with states and markets, and have histories of their own.",
        "**Unequal timing.** Industrialisation came to different regions at different times, often shaped by colonialism and global trade (see {{global-stratification}})."
      ]},
      "The classical thinkers tied these shifts to big theories: Durkheim’s move from mechanical to organic solidarity, Marx’s analysis of capitalism and alienation, and Weber’s rationalization. See {{emile-durkheim}}, {{karl-marx}} and {{max-weber}}.",
      "Some scholars also question the “postindustrial” label itself: manufacturing hasn’t disappeared, it has largely moved to other countries, so a service economy in one place often depends on factories in another.",
      "Societies also change in ways this scheme doesn’t capture, such as shifts in religion, politics or family life that don’t follow from technology alone. Lenski himself treated technology as a powerful influence, not the only one."
     ]
    },
    related:["emile-durkheim","karl-marx","max-weber","global-stratification"],
    read:[{book:"soc", where:"Chapter 4, Section 4.1 “Types of Societies” and Section 4.2 “Theoretical Perspectives on Society”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 4.1 Types of Societies (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/04%3A_Society_and_Social_Interaction/4.02%3A_Types_of_Societies"},{t:"OpenStax Introduction to Sociology 3e, 4.2 Theoretical Perspectives on Society (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/04%3A_Society_and_Social_Interaction/4.03%3A_Theoretical_Perspectives_on_Society"}], checked:"2026-11"},

   {id:"social-construction-of-reality", title:"The social construction of reality", aka:["Thomas theorem","self-fulfilling prophecy","habitualization","institutionalization"], tags:["sociology","society"],
    summary:"How shared habits and agreements create the social world we experience as natural, and why beliefs about situations have real effects.",
    levels:{
     starter:[
      "Some things exist because people collectively agree they do. A banknote is printed paper, yet it buys food because everyone treats it as money. Borders, weekends, exam grades and job titles work the same way.",
      "Sociologists call this the **social construction of reality**. It does **not** mean these things are fake. Money and borders have very real effects on lives. It means people made them, and people could make them differently.",
      "A related idea, the **Thomas theorem**, says: “If men define situations as real, they are real in their consequences.” If people believe a bank is failing and all rush to withdraw their money, the bank really can fail.",
      "Seeing that something is constructed helps you ask good questions: who created it, when, and could it work differently?"
     ],
     builder:[
      "Peter Berger and Thomas Luckmann’s *The Social Construction of Reality* (1966) described how this happens:",
      {ol:[
        "**Habitualization**: actions repeated often become patterns.",
        "**Institutionalization**: patterns become established conventions, such as a school or marriage.",
        "Later generations are born into these institutions and experience them as natural, objective facts."
      ]},
      "The **Thomas theorem** comes from W. I. Thomas and Dorothy Swaine Thomas (1928). People respond to their *definition* of a situation, not to the situation alone." ,
      "Not everyone gets an equal say in defining situations. Governments, media, experts and employers often have more power to make their definitions stick, which is why sociologists ask *whose* definition becomes accepted.",
      "Robert K. Merton (1948) described the **self-fulfilling prophecy**: a false definition of a situation that triggers behaviour making it come true. His example: a rumour that a sound bank is insolvent causes a run that makes it insolvent. Everyday versions include rumours of shortages causing shortages.",
      {ex:"The seven-day week, time zones and the school year feel like natural facts, but each was created by people and differs across history and places. Time zones, for example, were standardised only in the late 19th century, largely for railway timetables. Yet try ignoring them: you will miss trains and meetings. Constructed, and very real.", label:"Worked example: time is socially organised"}
     ],
     pro:[
      "Social constructionism is sometimes misread as saying anything can be changed by changing minds. Constructed institutions are hard to change: they are backed by laws, money, habits and other people’s expectations, and they constrain individuals as firmly as physical facts.",
      "Researchers distinguish questions such as: Which features of a category are socially defined (where boundaries are drawn, what meanings attach) and which are material? Who has the power to define a situation for others? This links to {{labeling-theory}} and to debates over how categories like race and gender are constructed (see {{race-ethnicity}} and {{sex-gender}}).",
      "Expectation effects have been studied experimentally. The best-known classroom study, Rosenthal and Jacobson’s *Pygmalion in the Classroom* (1968), reported that teachers’ raised expectations improved some pupils’ test results; later reviews found such effects are real but usually small and uneven. That is a good model for treating any famous finding: interesting, influential, and weaker than the headline.",
      "Goffman’s {{erving-goffman|dramaturgy}} applies a related idea to face-to-face interaction: people continually work to sustain shared definitions of what is going on.",
      "A good test of whether you understand the idea: pick any institution (marriage, a currency, a university degree) and describe both how it was constructed and the concrete ways it constrains people today. Both halves are needed."
     ]
    },
    related:["status-roles","erving-goffman","labeling-theory","symbolic-interactionism"],
    read:[{book:"soc", where:"Chapter 4, Section 4.3 “Social Constructions of Reality”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 4.3 Social Constructions of Reality (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/04%3A_Society_and_Social_Interaction/4.04%3A_Social_Constructions_of_Reality"}], checked:"2026-11"},

   {id:"status-roles", title:"Status and roles", aka:["ascribed status","achieved status","master status","role conflict","role strain","role set"], tags:["sociology","society"],
    summary:"The social positions people occupy, the behaviour expected in them, and the tensions that arise when expectations collide.",
    levels:{
     starter:[
      "A **status** is a social position: student, nurse, grandparent, neighbour, customer. A **role** is the behaviour expected of someone in that position. You *hold* a status and *play* a role.",
      {list:[
        "**Ascribed status**: not chosen, such as your age or the family you were born into.",
        "**Achieved status**: gained through what you do, such as graduate or electrician.",
        "**Master status**: the one that others notice first and that colours how they see everything else about you."
      ]},
      "Trouble comes when expectations clash. **Role conflict** is a clash between two statuses (worker vs parent). **Role strain** is tension inside one status (a teacher who must be both friendly and strict).",
      "Everyone holds many statuses at once, and the mix changes over a lifetime."
     ],
     builder:[
      "OpenStax defines status as the responsibilities and benefits a person experiences according to their rank and role in society, and roles as patterns of behaviour representative of a status.",
      "Every status carries a **role set**, several roles at once (Robert Merton, 1957). A doctor is a healer to patients, a colleague to nurses, an employee to a hospital and a teacher to students.",
      {table:[
        ["Concept","Where the tension lies","Example"],
        ["Role conflict","Between different statuses","A nurse on a night shift whose child is sick"],
        ["Role strain","Within one status","A manager who must support staff and cut their budget"]
      ]},
      "**Master status** comes from the sociologist Everett Hughes (1945). It is not in OpenStax but appears in most introductory textbooks. Illness, disability, fame, a criminal record or an occupation can become a master status, so that people see the label first and the person second.",
      {ex:"Sione is a father, a bus driver, a church choir member and a part-time student.\n• Role set: as a bus driver he is also a safety officer, a ticket checker and an informal guide for tourists.\n• Role conflict: an evening exam clashes with his daughter’s birthday.\n• Role strain: as a driver he must keep to a tight timetable and also wait for passengers who are running.", label:"Worked example: one person’s statuses and roles"},
      "OpenStax also uses **role performance**, the visible expression of a role. Two teachers in the same status can perform the role very differently."
     ],
     pro:[
      "Status in this sense is different from prestige, although the two are related. Sociologists studying inequality also use **status consistency** (whether a person’s different statuses rank similarly, such as education and income; see [[status-consistency]]).",
      "Master statuses link closely to stigma and labelling: once a status such as “ex-prisoner” or “mental patient” becomes dominant, it can shape how others treat the person in unrelated settings (see {{labeling-theory}}). Researchers and journalists increasingly use person-first or identity-first language as communities prefer, partly to resist this effect.",
      "**Role exit**, the process of disengaging from a central role (becoming an ex-nurse, ex-spouse or ex-athlete), was studied by the sociologist Helen Rose Fuchs Ebaugh in *Becoming an Ex* (1988), showing that former roles keep shaping identity.",
      "Role theory has been criticised for making behaviour seem like script-following. Interactionists such as Goffman stress that people interpret, negotiate and sometimes play with roles; see {{erving-goffman}}.",
      "Statuses are also unequally valued. Some ascribed statuses, such as gender, ethnicity, caste or disability, carry advantages or disadvantages that people did not choose, and much of the study of inequality in Unit 3 begins here.",
      "Statuses also differ across cultures. Being the eldest son, an elder, a widow or a first-generation university student carries different expectations, and sometimes different rights, from one society to another."
     ]
    },
    related:["social-construction-of-reality","erving-goffman","labeling-theory"],
    read:[{book:"soc", where:"Chapter 4, Section 4.3 “Social Constructions of Reality” (Roles and Status)"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 4.3 Social Constructions of Reality (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/04%3A_Society_and_Social_Interaction/4.04%3A_Social_Constructions_of_Reality"}], checked:"2026-11"},
   {id:"socialization", title:"Socialization and nature–nurture", aka:["nature versus nurture","twin studies","feral children","isolation studies"], tags:["sociology","socialization"],
    summary:"The lifelong process of learning a society’s culture, and what careful evidence says about the roles of genes and environment.",
    levels:{
     starter:[
      "**Socialization** is how people learn the language, norms, values and roles of their society, starting at birth and continuing all through life.",
      "It does two jobs. It lets a society pass its culture to new generations, and it lets each person develop a **self**, a sense of who they are.",
      "The **nature versus nurture** debate asks how much of who we are comes from our genes and how much from our surroundings. The modern answer is: both, working together. Genes shape tendencies; surroundings shape how those tendencies develop.",
      {tip:"Be wary of dramatic stories about “wild children” or uncanny twin coincidences. They are memorable but weak evidence on their own."},
      "Socialization is how culture gets from one generation to the next."
     ],
     builder:[
      "OpenStax defines socialization as the process through which people come to understand societal norms and expectations, accept society’s beliefs and be aware of societal values.",
      "Three kinds of evidence, from weakest to strongest:",
      {table:[
        ["Evidence","What it suggests","Limits"],
        ["Cases of extreme isolation (such as “Genie”, found in California in 1970 aged 13)","Early interaction is vital for language and social development","Very rare; abuse and malnutrition confound isolation; possible pre-existing conditions; serious ethical issues"],
        ["Twin studies (such as the Minnesota Study of Twins Reared Apart, 1990)","Genes contribute substantially to many traits","Small, unusual samples; separated twins often placed in similar homes; estimates apply to populations, not individuals"],
        ["Randomized trials (the Bucharest Early Intervention Project, from 2000)","Family care improves development compared with institutional care; earlier placement generally helps more","Specific setting, though random assignment makes causal claims much stronger"]
      ]},
      "Animal studies such as Harry Harlow’s experiments with rhesus monkeys (1950s–60s), which showed infant monkeys seeking comfort from a soft cloth “mother”, are often cited too, and are also widely criticised today for their cruelty.",
      "The overall lesson: human development needs responsive care and interaction, and the quality and timing of that care matter. That is exactly where social factors such as poverty, family policy and institutions come in."
     ],
     pro:[
      "Contemporary research emphasises **gene–environment interaction**: environments can amplify or dampen genetic tendencies, and genes influence which environments people seek out. Heritability estimates describe how much of the *variation* in a trait within a particular population, at a particular time, is associated with genetic differences. They change when environments change and say nothing about how fixed a trait is in an individual.",
      "Ethics shape what can be known. The separated-twin study that included the textbook’s Paula Bernstein and Elyse Schein placed identical twins in different adoptive families and told the families only that their child was in a development study, not that the child had a twin, which would not pass ethics review today. The “Genie” case raised concerns about research goals competing with care and about consent. In the Bucharest project, the ethics of randomly assigning vulnerable children to different kinds of care was debated openly in scientific journals; the researchers have argued it was justified because foster care was then scarce in Bucharest and its benefits were unproven.",
      "Sociologists focus on nurture without denying biology because their questions are about how social structures, such as class, gender, ethnicity and institutions, shape the conditions in which every person develops. See {{research-ethics}} for the principles that now govern studies like these.",
      "When reading claims about nature and nurture, ask three questions: Was there a comparison group? Could other factors explain the result? And does the claim describe a population (where heritability estimates apply) or an individual (where they don’t)?"
     ]
    },
    related:["agents-of-socialization","self-development","research-ethics"],
    read:[{book:"soc", where:"Chapter 5, Section 5.2 “Why Socialization Matters”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 5.2 Why Socialization Matters (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/05%3A_Socialization/5.03%3A_Why_Socialization_Matters"},{t:"Tulane University: Romania’s abandoned children (Bucharest Early Intervention Project)", url:"https://news.tulane.edu/pr/romanias-abandoned-children"},{t:"Georgetown University High School Bioethics: Genie case study", url:"https://highschoolbioethics.georgetown.edu/units/unit3_4.html"}], checked:"2026-11"},

   {id:"agents-of-socialization", title:"Agents of socialization and the life course", aka:["family","peer group","hidden curriculum","anticipatory socialization","resocialization","total institution","degradation ceremony"], tags:["sociology","socialization"],
    summary:"The people and institutions that teach us culture, and how socialization continues through life, including resocialization in total institutions.",
    levels:{
     starter:[
      "**Agents of socialization** are the people and institutions that teach us how to live in society:",
      {list:[
        "**Family**: language, first values and our starting place in society.",
        "**Peers**: friends of similar age who teach style, slang and independence.",
        "**School**: lessons plus a hidden curriculum of punctuality, obedience and competition.",
        "**Workplace**: job skills and how things really work there.",
        "**Religion**, **government** and **media**: moral codes, legal ages and rules, and images of how people live."
      ]},
      "Socialization doesn’t stop in childhood. Every new job, move or life stage teaches new roles.",
      "Different agents can teach different things, and how much each one matters changes as you grow older.",
      "Family usually matters most in early childhood, peers grow more important in adolescence, and the workplace takes a large role in adult life."
     ],
     builder:[
      "OpenStax groups agents into social groups (family, peers) and institutions (school, workplace, religion, government, mass media).",
      "Agents shape people differently by social position. Melvin Kohn (1977) found that working-class parents in his US studies emphasised obedience and conformity more, while middle-class parents emphasised self-direction, values that matched their own jobs. Annette Lareau’s *Unequal Childhoods* (2003) described middle-class “concerted cultivation” (organised activities, negotiating with adults) and working-class “accomplishment of natural growth” (more unstructured time, more deference to authority).",
      "Across the **life course**, key ideas are:",
      {table:[
        ["Concept","Meaning","Example"],
        ["Anticipatory socialization","Preparing for a future role","A trainee teacher on placement"],
        ["Resocialization","Replacing old norms with new ones","A migrant learning workplace norms in a new country"],
        ["Total institution","A place cutting people off from wider society under one authority","Prisons, military training camps, monasteries"],
        ["Degradation ceremony","Stripping an old identity on entry","Uniforms, haircuts, numbers instead of names"]
      ]},
      "The balance between agents varies by society. Where extended families live together, grandparents may be a major agent; where children spend long days in childcare or school, institutions take a bigger share; and where religious practice is central, religious communities may shape daily norms more than media do. Rites of passage, from a quinceañera to Japan’s Coming of Age Day, mark the moments when people move into new roles and are expected to learn new norms."
     ],
     pro:[
      "Goffman introduced **total institutions** in *Asylums* (1961), based on fieldwork in a large US psychiatric hospital. He identified common features: all of life conducted in one place under one authority, in the company of many others treated alike, on a tightly scheduled routine designed to meet the institution’s aims. The sociologist Harold Garfinkel (1956) coined **degradation ceremony** for rituals that publicly lower a person’s identity, such as a criminal trial; textbooks, including OpenStax, apply it to entry rituals in total institutions, which Goffman himself called the “mortification” of the self.",
      "Agents change with history and place:",
      {list:[
        "**Media** now include social platforms and games, which socialize through algorithms as well as content, raising questions about who designs those systems.",
        "**Government policy** shapes roles directly. Sweden’s 480 days of paid parental leave per child, shared between parents, is a well-known example of policy encouraging fathers’ involvement.",
        "**Schools** teach a [[hidden-curriculum|hidden curriculum]] that can reproduce inequality (see {{education}})."
      ]},
      "Socialization is not one-way. Children and adults interpret, resist and reshape what agents teach, and agents can conflict, which is one engine of social change. Life-course research also stresses that the timing of transitions (leaving school, marriage, retirement) is socially patterned and differs widely between countries and generations.",
      "Digital media add a new twist: young people are often more skilled with new technologies than their parents, so socialization can run “upwards”, with children teaching older relatives new norms of communication."
     ]
    },
    related:["socialization","self-development","family","education","media-technology"],
    read:[{book:"soc", where:"Chapter 5, Section 5.3 “Agents of Socialization” and Section 5.4 “Socialization Across the Life Course”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 5.3 Agents of Socialization (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/05%3A_Socialization/5.04%3A_Agents_of_Socialization"},{t:"OpenStax Introduction to Sociology 3e, 5.4 Socialization Across the Life Course (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/05%3A_Socialization/5.05%3A_Socialization_Across_the_Life_Course"}], checked:"2026-11"},

   {id:"self-development", title:"Theories of self-development", aka:["looking-glass self","I and me","generalized other","Piaget","Kohlberg","Gilligan"], tags:["sociology","socialization"],
    summary:"How a sense of self and moral reasoning develop through interaction: Cooley, Mead, Piaget, Kohlberg and Gilligan.",
    levels:{
     starter:[
      "Nobody is born with a self. We build it by interacting with others.",
      {list:[
        "**Charles Horton Cooley’s looking-glass self**: we see ourselves in the “mirror” of how we imagine others see us.",
        "**George Herbert Mead**: children learn to take other people’s points of view, first one person at a time, then the whole of society (the **generalized other**).",
        "**Jean Piaget**: children’s thinking develops in stages, from learning through the senses to abstract reasoning.",
        "**Lawrence Kohlberg**: moral reasoning grows from avoiding punishment, to following rules, to abstract principles.",
        "**Carol Gilligan**: argued Kohlberg overlooked a morality of care and relationships.",
        "Sociologists rely most on Cooley and Mead, because both explain the self as a product of social interaction rather than of individual biology."
      ]}
     ],
     builder:[
      "**Cooley (1902)**: the looking-glass self works in three steps: imagining how we appear to others, imagining their judgement, and feeling pride or shame as a result.",
      "**Mead**: the self has an **“I”** (spontaneous, acting) and a **“me”** (the internalised attitudes of others). Stages: preparatory (imitation), play (taking one role), game (many roles at once), and the generalized other. See {{george-herbert-mead}}.",
      {table:[
        ["Thinker","Stages or levels"],
        ["Piaget","Sensorimotor → preoperational → concrete operational → formal operational"],
        ["Kohlberg","Preconventional → conventional → postconventional"],
        ["Gilligan","Justice perspective and care perspective, neither superior"]
      ]},
      "OpenStax also mentions Sigmund Freud and Erik Erikson; Erikson described eight stages of psychosocial development across the whole life span.",
      {ex:"Kenji, aged 7, is told by teachers that he is “a natural leader”. Using Cooley, he imagines how he appears (confident), how they judge it (approvingly) and feels pride, so he volunteers more. Using Mead, he is moving from the play stage (pretending to be a teacher) to the game stage (understanding how captain, teammates, referee and rules fit together). Over years, the views of many others merge into a generalized other that he consults even when alone.", label:"Worked example: two theories, one child"},
      "Notice the difference in focus: Cooley explains how we feel about ourselves, Mead explains how we learn to see from others’ viewpoints at all."
     ],
     pro:[
      "Each theory has well-known critiques:",
      {list:[
        "**Piaget**: later research suggests children often show abilities earlier than he proposed, that development is less stage-like, and that schooling and culture shape performance on his tasks.",
        "**Kohlberg**: his original studies used only boys and young men, and his highest stage reflects a Western philosophical ideal of justice; cross-cultural studies find the higher stages rarely in many societies, which may reflect the measure more than the people.",
        "**Gilligan** (*In a Different Voice*, 1982): influential, but later reviews of many studies found only small average gender differences in moral orientation, and critics warn her framing can reinforce stereotypes. OpenStax notes her study’s small sample and attributes differences to gender socialization.",
        "**Cooley and Mead**: criticised for saying little about power, since some people’s views of us carry far more weight than others’, and for under-specifying the “I”."
      ]},
      "Sociologists value these theories less as fixed timetables than as tools for asking how social interaction, institutions and inequality shape the self. Mead’s ideas in particular became the foundation of {{symbolic-interactionism}}.",
      "Freud and Erikson also matter in the background: Freud stressed early childhood experiences and unconscious processes; Erikson extended development across the life course with eight psychosocial stages, an idea that fits sociology’s view that socialization never ends."
     ]
    },
    related:["george-herbert-mead","socialization","agents-of-socialization","symbolic-interactionism"],
    read:[{book:"soc", where:"Chapter 5, Section 5.1 “Theories of Self-Development”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 5.1 Theories of Self-Development (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/05%3A_Socialization/5.02%3A_Theories_of_Self-Development"}], checked:"2026-11"},

   {id:"groups", title:"Social groups", aka:["primary group","secondary group","in-group","out-group","reference group","dyad","triad","leadership styles"], tags:["sociology","groups"],
    summary:"What makes a group, the main types, how size changes interaction, and how leaders shape groups.",
    levels:{
     starter:[
      "A **group** is two or more people who interact regularly and feel they belong together. People who just happen to be in the same place (an **aggregate**) or who share a trait (a **category**) are not groups.",
      {list:[
        "**Primary groups** are small and close: family, best friends.",
        "**Secondary groups** are larger and task-focused: a class, a workplace team.",
        "**In-groups** are groups you belong to; **out-groups** are groups you see as “them”.",
        "**Reference groups** are groups you compare yourself with."
      ]},
      "Size matters: a pair (**dyad**) is intimate but ends if one person leaves; a trio (**triad**) is more stable but allows two-against-one.",
      "Groups matter because most of what we do happens in them: we learn, work, worship, play and make decisions in groups, and they shape what we think is normal."
     ],
     builder:[
      "Cooley (1909) distinguished primary groups, which serve **expressive** needs (emotional support), from secondary groups, which serve **instrumental** goals (getting tasks done). Groups can shift between the two.",
      "Sumner (1906) described in-groups and out-groups. Strong in-group loyalty builds solidarity but can fuel prejudice and discrimination (see {{prejudice-discrimination}}).",
      "Georg Simmel analysed **dyads** and **triads**. With each added member, possible pairs grow as *n*(*n* − 1)/2: 1 for two people, 3 for three, 6 for four, 15 for six, 45 for ten.",
      "That is why large groups develop subgroups, formal roles and rules.",
      {table:[
        ["Leadership style","Approach","Best suited to"],
        ["Democratic","Shares decisions","Commitment and creativity when time allows"],
        ["Laissez-faire","Hands-off","Skilled, self-motivated groups"],
        ["Authoritarian","Directs","Emergencies needing quick decisions"]
      ]},
      "OpenStax also distinguishes instrumental (task-focused) from expressive (morale-focused) leaders.",
      "Groups also have **boundaries**: rules and signals about who belongs. Uniforms, initiation rituals, shared jokes and membership fees all mark the line between insiders and outsiders, and much group conflict is about where that line is drawn.",
      {ex:"Mei’s choir began as a secondary group: forty people meeting weekly to rehearse. Within it, five altos who carpool became a primary group. Rival choirs at competitions are an out-group; a famous national choir is their reference group.", label:"Worked example: one choir, several group concepts"}
     ],
     pro:[
      "Social psychologists have shown how easily in-group bias appears. In Henri Tajfel’s “minimal group” experiments in the early 1970s, people assigned to groups on trivial grounds still favoured their own group when sharing rewards. Tajfel and John Turner’s social identity theory (1979) explains this through people’s need for positive group identity.",
      "Simmel’s insight about the triad (mediator, coalition, “divide and rule”) is used in family sociology, workplace studies and international relations. Large groups face coordination problems that push them toward formal structure, which leads to {{bureaucracy}}.",
      "The three leadership styles come from experiments led by Kurt Lewin in the late 1930s with children’s clubs. Later research favours contingency views: the best style depends on the task, time pressure and members’ skills. Reference group theory explains **relative deprivation**, feeling worse off by comparison with a reference group even when absolute conditions improve.",
      "Online communities blur older distinctions: groups of people who never meet can become primary groups, and platforms can create echo chambers that intensify in-group/out-group divisions.",
      "Group research also shows the value of diversity in decision-making: groups whose members bring different information and perspectives are less prone to the narrow consensus that produces groupthink, provided members feel safe to speak."
     ]
    },
    related:["conformity","bureaucracy","prejudice-discrimination","self-development"],
    read:[{book:"soc", where:"Chapter 6, Section 6.1 “Types of Groups” and Section 6.2 “Group Size and Structure”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 6.1 Types of Groups (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/06%3A_Groups_and_Organizations/6.02%3A_Types_of_Groups"},{t:"OpenStax Introduction to Sociology 3e, 6.2 Group Size and Structure (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/06%3A_Groups_and_Organizations/6.03%3A_Group_Size_and_Structure"}], checked:"2026-11"},

   {id:"conformity", title:"Conformity, obedience and groupthink", aka:["Asch experiment","Milgram experiment","obedience","groupthink"], tags:["sociology","groups","research ethics"],
    summary:"How groups and authorities pull people into line: the Asch and Milgram studies, their ethical controversy, and groupthink.",
    levels:{
     starter:[
      "**Conformity** means going along with what a group expects. It is often useful (it lets traffic flow and meetings run), but it can also lead people to ignore their own judgement.",
      {list:[
        "**Asch (1951)**: people sometimes gave obviously wrong answers about line lengths when everyone else in the room did.",
        "**Milgram (early 1960s)**: many people obeyed an experimenter’s instructions to give what they believed were painful electric shocks. No real shocks were given, but participants were deceived and distressed, which made the study famous in research ethics too.",
        "**Groupthink (Janis, 1972)**: close-knit groups can make bad decisions because nobody wants to break the agreement."
      ]},
      {tip:"One dissenting voice makes a big difference. In Asch’s studies, a single ally sharply reduced conformity."}
     ],
     builder:[
      "**Asch.** In the version OpenStax reports, 37 of 50 participants conformed to an obviously wrong group answer at least once, though most individual answers were still correct. Conformity fell when one other person dissented or when answers were written privately.",
      "**Milgram.** At Yale, participants acting as “teachers” were told to give increasing shocks to a “learner” (an actor) for wrong answers. In the best-known version, about two-thirds continued to the maximum of 450 volts. Obedience dropped in variations where the learner was closer or the experimenter less present.",
      "**Groupthink.** Irving Janis studied foreign-policy fiascos such as the 1961 Bay of Pigs invasion. Symptoms include:",
      {list:["An illusion of invulnerability","Collective rationalisation","Stereotyping of outsiders","Pressure on dissenters and self-censorship","An illusion of unanimity","“Mindguards” who shield the group from contrary information"]},
      "Remedies: invite outside views, appoint a devil’s advocate, encourage dissent, and have leaders hold back their own view at first.",
      "Obedience differs from conformity: conformity is going along with peers; obedience is following orders from someone with authority.",
      "Conformity is not always bad. Following shared norms lets strangers cooperate, and deferring to experts is often sensible. The research matters because it shows how situations, not just personalities, can push ordinary people towards harmful or foolish choices."
     ],
     pro:[
      "**Culture and era.** A 1996 meta-analysis by Rod Bond and Peter Smith of Asch-type studies across many countries found conformity tended to be higher in more collectivist societies and had declined in the United States since the 1950s. Conformity is a social variable, not a fixed human constant.",
      "**Milgram’s ethics and evidence.** Diana Baumrind’s 1964 critique argued participants were harmed and their trust abused; Milgram replied that follow-up surveys showed most participants were glad to have taken part. Archival research published by Gina Perry (2012) found experimenters sometimes departed from the script and that many participants doubted the shocks were real, complicating interpretation. Jerry Burger’s 2009 partial replication stopped at 150 volts, screened participants carefully, obtained ethics approval, and found that about 70% of participants were still willing to go beyond 150 volts when they were stopped. See {{research-ethics}}.",
      "**Groupthink’s limits.** Later scholars note that flawed processes don’t always cause failure, that not every bad decision is groupthink, and that historical case studies are open to interpretation. The concept remains valuable as a checklist of warning signs.",
      "For sociology, the key lesson across these studies is the power of the situation: group pressure, authority and cohesion can lead people to act against their own judgement. That helps explain institutional failures, but researchers are careful not to use it to excuse individual responsibility."
     ]
    },
    related:["groups","research-ethics","experiments-sociology"],
    read:[{book:"soc", where:"Chapter 6, Section 6.2 “Group Size and Structure” (Conformity)"}],
    sources:[{t:"APA Monitor on Psychology: Replicating Milgram (2009)", url:"https://www.apa.org/monitor/2009/03/milgram"},{t:"Swarthmore College: 1951 Psychologist Solomon Asch’s famous experiments", url:"https://www.swarthmore.edu/a-brief-history/1951-psychologist-solomon-aschs-famous-experiments"},{t:"Britannica: Groupthink", url:"https://www.britannica.com/topic/groupthink"}], checked:"2026-11"},

   {id:"bureaucracy", title:"Formal organizations and bureaucracy", aka:["normative organization","coercive organization","utilitarian organization","ideal type","iron rule of oligarchy","iron law of oligarchy"], tags:["sociology","organizations"],
    summary:"The three types of formal organization, Weber’s model of bureaucracy, its strengths and failings, and Michels’ iron rule of oligarchy.",
    levels:{
     starter:[
      "A **formal organization** is a large group set up on purpose to reach goals: a company, a hospital, a school, a charity, a government department.",
      "Amitai Etzioni sorted them by why people join:",
      {list:[
        "**Normative**: because they share its values (a choir, a charity).",
        "**Coercive**: because they are forced to (a prison).",
        "**Utilitarian**: for a material reward (a job, a degree)."
      ]},
      "Most large organizations run as a **bureaucracy**: a chain of command, specialised jobs, written rules and impersonal treatment. That makes huge tasks possible, and also produces red tape.",
      "Applying for a passport is a good example: forms, queues, numbered steps and officials who follow rules rather than personal judgement.",
      "**Bureaucracy** is not an insult in sociology. It is a description of a way of organising work."
     ],
     builder:[
      "Max Weber described bureaucracy as an **ideal type**, a model of its typical features rather than a claim that it’s ideal:",
      {table:[
        ["Feature","What it means"],
        ["Hierarchy of authority","A clear chain of command"],
        ["Division of labour","Specialised roles"],
        ["Explicit rules","Written procedures applied to every case"],
        ["Impersonality","Decisions by rules, not personal ties"]
      ]},
      "OpenStax adds that bureaucracies are often meritocracies, with hiring and promotion based on qualifications.",
      "Problems include red tape, slowness and what Robert Merton called **ritualism**: following rules even when they defeat the purpose. Robert Michels (1911), studying socialist parties committed to democracy, proposed the **iron rule of oligarchy** (often called the iron *law*): large organizations tend to be run by a few, who control information and communication.",
      {ex:"A national vaccination programme shows bureaucracy at its best: a hierarchy coordinates thousands of clinics, staff have specialised roles, written rules decide who is eligible, and everyone is treated by the same criteria. It also shows the risks: someone without the right document may be turned away by a rule written for a different situation.", label:"Worked example: bureaucracy’s strengths and costs"},
      "Weber thought bureaucracy would spread because it outperforms alternatives at large, repetitive tasks, and because modern law and markets demand predictable, rule-bound administration."
     ],
     pro:[
      "Weber saw bureaucracy as technically superior to older forms of administration based on personal loyalty or inheritance, because it is predictable and treats cases equally. He also feared it would trap people in an “iron cage” of rationality (see {{max-weber}} and {{mcdonaldization}}).",
      "Later research qualifies the model:",
      {list:[
        "Real organizations run on informal networks and norms as well as formal rules.",
        "Michael Lipsky’s *Street-Level Bureaucracy* (1980) showed that front-line workers such as teachers, police officers and caseworkers use discretion that effectively makes policy.",
        "Impersonality can protect against favouritism, but rigid rules can also produce unequal outcomes when they ignore people’s different circumstances."
      ]},
      "Etzioni’s categories blur in practice: military service is coercive where it is compulsory and closer to utilitarian where it is a paid career. Goffman called many coercive organizations **total institutions** (see {{agents-of-socialization}}). The iron rule of oligarchy remains debated; studies of cooperatives and social movements show that rotation of offices, transparency and strong member participation can slow, though rarely stop, the concentration of power.",
      "Digital technology is changing bureaucracy too: online forms and automated decisions can make services faster and more consistent, but can also make it harder to reach a human who can use judgement when a case doesn’t fit the rules."
     ]
    },
    related:["mcdonaldization","max-weber","groups","power-authority"],
    read:[{book:"soc", where:"Chapter 6, Section 6.3 “Formal Organizations”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 6.3 Formal Organizations (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/06%3A_Groups_and_Organizations/6.04%3A_Formal_Organizations"}], checked:"2026-11"},

   {id:"mcdonaldization", title:"McDonaldization", aka:["Ritzer","efficiency, calculability, predictability, control","irrationality of rationality"], tags:["sociology","organizations","globalization"],
    summary:"George Ritzer’s idea that fast-food principles of efficiency, calculability, predictability and control are spreading through society.",
    levels:{
     starter:[
      "The sociologist George Ritzer noticed that the way fast-food restaurants work is spreading to many other parts of life. He called it **McDonaldization**, after one famous chain, but the idea is about a *system*, not one company.",
      "It has four principles:",
      {list:[
        "**Efficiency**: the quickest way to get something done.",
        "**Calculability**: counting things; quantity over quality.",
        "**Predictability**: the same experience every time, everywhere.",
        "**Control**: rules, scripts and machines instead of human judgement."
      ]},
      "These bring convenience and low prices. Ritzer’s warning is that they can also make life feel mechanical and dehumanising.",
      "You can spot the principles in supermarkets, banks, airports, schools and apps on your phone.",
      "The name is a label for a pattern, not a criticism of one company or its customers."
     ],
     builder:[
      "Ritzer set out the idea in *The McDonaldization of Society* (1993), describing it as the spread of the fast-food model into social institutions. It updates Max Weber’s idea of **rationalization**.",
      {table:[
        ["Principle","Example outside fast food"],
        ["Efficiency","Self-checkout; online booking; drive-through services"],
        ["Calculability","Rankings, targets, “calls per hour”, word counts"],
        ["Predictability","Chain hotels and shops that look the same in every city"],
        ["Control","Scripted conversations; apps that set workers’ pace"]
      ]},
      "The **irrationality of rationality** is Ritzer’s term for when rational systems produce irrational results: long queues at “fast” food outlets, automated phone menus that waste hours, standardised tests that reward test practice rather than learning.",
      "Notice who does the work in McDonaldized systems. Customers increasingly do unpaid tasks (scanning their own shopping, clearing their own tables, filling in their own forms), while workers’ tasks are broken into small, controlled steps. Ritzer links this to Weber’s fear of an “iron cage” in which efficiency becomes an end in itself.",
      {ex:"Online grocery delivery: one-click ordering (efficiency), delivery-time targets and star ratings (calculability), the same app layout in every city (predictability), and algorithms that assign routes and time each delivery (control). Irrationality: the rider who is penalised for a delay caused by a broken lift.", label:"Worked example: an app through Ritzer’s lens"}
     ],
     pro:[
      "Ritzer’s thesis has been applied to universities (“McUniversity”), health care, tourism and religion, and more recently to digital platforms, where algorithms set the pace of gig workers and quantify everything from deliveries to likes.",
      "Critiques:",
      {list:[
        "**Consumers value it.** Predictability and speed are genuinely useful, especially for people with little time or money.",
        "**Local adaptation.** Global chains constantly modify products and practices to fit local cultures ({{cultural-change|glocalization}}), so outcomes are less uniform than the thesis implies.",
        "**Resistance and alternatives** such as slow-food movements, independent shops and craft production show that rationalization is contested.",
        "**Pessimism.** Like Weber’s “iron cage”, the thesis can underplay human agency."
      ]},
      "The concept is most useful as a lens: when you meet a service or institution, ask where efficiency, calculability, predictability and control are at work, who benefits from them, and who bears their costs (often workers whose tasks become tightly controlled).",
      "Ritzer has kept revising the book through many editions, extending it to new technologies, which itself shows how the concept is meant to be a living lens rather than a fixed description of one era.",
      "A balanced conclusion: McDonaldized systems deliver real benefits in speed, cost and reliability, and real costs in deskilled work, standardised experiences and frustration when the system fails."
     ]
    },
    related:["bureaucracy","max-weber","cultural-change","work-globalization"],
    read:[{book:"soc", where:"Chapter 6, Section 6.3 “Formal Organizations” (The McDonaldization of Society)"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e, 6.3 Formal Organizations (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/06%3A_Groups_and_Organizations/6.04%3A_Formal_Organizations"}], checked:"2026-11"},

   {id:"george-herbert-mead", title:"George Herbert Mead", aka:["Mead","Mind, Self, and Society"], tags:["sociology","thinkers","socialization"],
    summary:"American philosopher and social psychologist (1863–1931) who explained how the self arises through social interaction.",
    levels:{
     starter:[
      "George Herbert Mead (1863–1931) was an American philosopher who taught at the University of Chicago from 1894 until his death. His big idea: **we are not born with a self. We develop one by interacting with other people.**",
      "Babies first copy others. Children then pretend to be someone else (“I’m the teacher”), and later learn to juggle many people’s points of view at once, as in a team game. Eventually we can see ourselves through the eyes of society in general, which Mead called the **generalized other**.",
      "Mead never published a book in his lifetime. His most famous book, *Mind, Self, and Society* (1934), was put together after his death from his students’ notes of his lectures.",
      "Mead’s ideas explain why the same child can grow up with very different senses of self depending on who surrounds them and how they respond."
     ],
     builder:[
      "Key concepts:",
      {table:[
        ["Concept","Meaning"],
        ["Self","Develops only through social experience; it is not present at birth"],
        ["“I”","The spontaneous, creative, acting part of the self"],
        ["“Me”","The organised attitudes of others that we have taken into ourselves"],
        ["Significant others","Particular people who matter most early on, such as parents"],
        ["Generalized other","The shared expectations of the wider community"],
        ["Stages","Preparatory (imitation), play (one role), game (many roles)"]
      ]},
      "For Mead, language is central: by using shared symbols, we can take the role of others and anticipate how they will respond to us.",
      "The “I” and the “me” are in constant conversation: the “me” supplies society’s expectations, the “I” responds, sometimes creatively, which is how individuals can change society as well as be shaped by it.",
      "Sociologists use Mead to study how identities form and change in interaction: in classrooms, online, in workplaces and in families. His ideas are the foundation of {{symbolic-interactionism}}; his student Herbert Blumer later coined that name.",
      {ex:"A new nurse first copies experienced colleagues (like the preparatory stage), then imagines how a particular senior nurse would handle a case (taking the role of a significant other), and eventually acts by the shared standards of the profession even when no one is watching (a professional generalized other). Mead’s stages are about childhood, but the same process continues in adult socialization.", label:"Worked example: Mead’s ideas at work"}
     ],
     pro:[
      "Mead was a leading figure in American **pragmatism**, alongside John Dewey, and his social psychology grew out of that philosophy: mind and self emerge from activity and communication rather than existing before them. Because his ideas reached the world mainly through edited lecture notes and posthumous volumes, scholars debate how faithfully *Mind, Self, and Society* represents his thinking.",
      "Critiques:",
      {list:[
        "**Power and inequality.** Mead says little about how the views of some others (employers, officials, dominant groups) count more than others in shaping the self.",
        "**The “I”.** The concept of a spontaneous “I” is suggestive but vague, making it hard to test.",
        "**Universal stages.** His developmental stages are illustrative rather than empirically established across cultures."
      ]},
      "Legacy: Mead’s view of the self as social shaped symbolic interactionism, Goffman’s dramaturgy, labelling theory and identity research. Later scholars have built on this by asking how race, gender and power shape which expectations a person must answer to. W. E. B. Du Bois’s earlier idea of [[double-consciousness|double consciousness]] (1903), seeing yourself through the eyes of a society that looks down on your group, is often read alongside Mead (see {{w-e-b-du-bois}}).",
      "Mead also influenced education and psychology through his colleague John Dewey and their shared emphasis on learning through activity and interaction."
     ]
    },
    related:["self-development","symbolic-interactionism","erving-goffman","w-e-b-du-bois"],
    read:[{book:"soc", where:"Chapter 5, Section 5.1 “Theories of Self-Development”"}],
    sources:[{t:"Britannica: George Herbert Mead", url:"https://www.britannica.com/biography/George-Herbert-Mead"},{t:"OpenStax Introduction to Sociology 3e, 5.1 Theories of Self-Development (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/05%3A_Socialization/5.02%3A_Theories_of_Self-Development"}], checked:"2026-11"},

   {id:"erving-goffman", title:"Erving Goffman", aka:["Goffman","dramaturgy","front stage","back stage","impression management","total institutions"], tags:["sociology","thinkers","interaction"],
    summary:"Canadian-born sociologist (1922–1982) who analysed everyday interaction as performance and studied total institutions and stigma.",
    levels:{
     starter:[
      "Erving Goffman (1922–1982) was born in Mannville, Alberta, Canada, and studied sociology at the University of Chicago. He spent his career watching ordinary interaction very closely: how people greet, apologise, save face and manage embarrassment.",
      "His big idea, **dramaturgy**, compares social life to theatre. We perform on a **front stage** for audiences, relax and prepare on a **back stage**, and use costumes, props and scripts to manage the impression we make.",
      "Goffman wasn’t saying people are fake. He was showing how much skilled, cooperative work goes into making everyday life run smoothly.",
      "Think of a job interview: the clothes, the handshake, the careful answers, then the relief of talking freely to a friend afterwards. That is front stage and back stage."
     ],
     builder:[
      "Key works and concepts:",
      {table:[
        ["Work","Main ideas"],
        ["*The Presentation of Self in Everyday Life* (1956; revised 1959)","Dramaturgy, front and back stage, impression management, teams"],
        ["*Asylums* (1961)","Total institutions and how they strip and rebuild identity"],
        ["*Stigma* (1963)","How people manage “spoiled” identities"],
        ["*Interaction Ritual* (1967)","Face-work: how people protect their own and others’ dignity"],
        ["*Frame Analysis* (1974)","How people organise their experience of what is going on"]
      ]},
      "His PhD (Chicago, 1953) was based on fieldwork on Unst in the Shetland Islands, where he observed island social life, including a hotel’s front and back regions.",
      "Sociologists use Goffman to study service work, medicine, online self-presentation, stigma and the ritual side of everyday life.",
      "Other key ideas: **teams** (people who cooperate to sustain a performance, like restaurant staff), **face** (the positive image a person claims in an interaction) and **face-work** (the tact people use to save their own and others’ face, such as pretending not to notice a mistake).",
      "Goffman’s method was close observation: he watched and noted small details of conduct that most people never consciously notice, then built concepts that let others see them too.",
      "His writing is famously readable, full of examples from hotels, hospitals, shops and casinos."
     ],
     pro:[
      "Goffman’s *Asylums* drew on participant observation in a large US psychiatric hospital in the mid-1950s and became influential in debates about institutional care and deinstitutionalisation. *Stigma* shaped research on disability, mental illness and health (see [[stigma]]).",
      "He was elected president of the American Sociological Association but was too ill to deliver his presidential address, “The Interaction Order”, which was published in 1983, after his death in November 1982.",
      "Critiques:",
      {list:[
        "**Cynicism?** Some readers find the dramaturgical image too calculating; defenders note Goffman stressed sincere performances too.",
        "**Power and structure.** Critics argue he described interaction brilliantly but said little about class, the economy or the state.",
        "**Method.** His evidence mixed fieldwork, novels, etiquette books and anecdotes, making his claims hard to test systematically.",
        "**Gender.** *Gender Advertisements* (1979) is valued but debated for how far adverts reveal real gender relations."
      ]},
      "Legacy: one of the most cited sociologists, Goffman influenced conversation analysis, studies of self-presentation on social media, and research on total institutions and stigma.",
      "His concepts, such as front stage, stigma and total institution, have passed into everyday language and other fields, from nursing education to user-interface design, which is unusual for a sociologist and a measure of how much he made visible."
     ]
    },
    related:["status-roles","social-construction-of-reality","george-herbert-mead","agents-of-socialization","symbolic-interactionism"],
    read:[{book:"soc", where:"Chapter 4, Section 4.3 “Social Constructions of Reality” (Goffman and the presentation of self)"}],
    sources:[{t:"American Sociological Association: Erving Manual Goffman", url:"https://www.asanet.org/erving-manual-goffman/"},{t:"OpenStax Introduction to Sociology 3e, 4.3 Social Constructions of Reality (LibreTexts mirror)", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/04%3A_Society_and_Social_Interaction/4.04%3A_Social_Constructions_of_Reality"}], checked:"2026-11"}
  ],
  terms:[
   {id:"material-culture", term:"Material culture", def:"The physical objects a group makes and uses, such as tools, clothing, buildings and phones.", codex:"culture"},
   {id:"nonmaterial-culture", term:"Nonmaterial culture", def:"The ideas of a culture: its values, beliefs, norms, symbols, language and the meanings attached to objects.", codex:"culture"},
   {id:"cultural-universal", term:"Cultural universal", def:"A feature found in every known society, such as language, names, jokes or funeral rites, though its form varies from culture to culture.", codex:"culture"},
   {id:"norm", term:"Norm", def:"A shared expectation about how people should behave in a group or situation.", codex:"norms"},
   {id:"formal-norm", term:"Formal norm", def:"A written rule enforced by an organisation or the state, such as a law or a school regulation.", codex:"norms"},
   {id:"informal-norm", term:"Informal norm", def:"An unwritten rule that people widely follow, such as not standing too close to strangers.", codex:"norms"},
   {id:"folkway", term:"Folkway", def:"An everyday custom with little moral weight, such as how to greet someone. Breaking it brings mild disapproval.", codex:"norms"},
   {id:"more", term:"Mores", def:"Norms that express a group’s sense of right and wrong, such as honesty. Breaking them brings strong disapproval. Pronounced “mor-ays”; the singular is “mos”.", codex:"norms"},
   {id:"law", term:"Law (as a norm)", def:"A formal norm written and enforced by the state, with official penalties for breaking it.", codex:"norms"},
   {id:"sanction", term:"Sanction", def:"A reaction that rewards following a norm (positive) or punishes breaking it (negative). Sanctions can be informal, like a smile or frown, or formal, like an award or fine.", codex:"norms"},
   {id:"value", term:"Value", def:"A culture’s shared standard of what is good, right or important, such as honesty or family loyalty.", codex:"values-beliefs"},
   {id:"belief", term:"Belief", def:"Something people in a culture hold to be true, such as “education leads to a better life”.", codex:"values-beliefs"},
   {id:"symbol", term:"Symbol", def:"Anything that stands for something else by shared agreement, such as a flag, a ring or a gesture.", codex:"symbols-language"},
   {id:"language", term:"Language", def:"A system of symbols (spoken, written or signed) used to communicate and to pass culture on.", codex:"symbols-language"},
   {id:"sapir-whorf", term:"Sapir–Whorf hypothesis", def:"The idea that language shapes thought. The strong form (language determines thought) is rejected; a weak form (language influences some perception and memory) has some support.", codex:"symbols-language"},
   {id:"ethnocentrism", term:"Ethnocentrism", def:"Judging other cultures by the standards of your own and assuming your own way is normal or best.", codex:"ethnocentrism-relativism"},
   {id:"cultural-relativism", term:"Cultural relativism", def:"Trying to understand a cultural practice by the standards and circumstances of the culture it belongs to, before judging it.", codex:"ethnocentrism-relativism"},
   {id:"culture-shock", term:"Culture shock", def:"The disorientation and stress of being surrounded by unfamiliar cultural norms, for example after moving abroad.", codex:"ethnocentrism-relativism"},
   {id:"xenocentrism", term:"Xenocentrism", def:"Believing another culture is superior to your own; the reverse of ethnocentrism.", codex:"ethnocentrism-relativism"},
   {id:"cultural-imperialism", term:"Cultural imperialism", def:"The deliberate imposition of one culture’s values, language or practices on another, as in many colonial policies.", codex:"ethnocentrism-relativism"},
   {id:"high-culture", term:"High culture", def:"Cultural forms associated with a society’s elite, often costly and prestigious, such as opera or ballet.", codex:"subculture-counterculture"},
   {id:"popular-culture", term:"Popular culture", def:"The widely shared culture of the mainstream, spread through commercial and social media, such as pop music or football.", codex:"subculture-counterculture"},
   {id:"subculture", term:"Subculture", def:"A group within a society with its own distinctive norms, style or language that still takes part in mainstream life.", codex:"subculture-counterculture"},
   {id:"counterculture", term:"Counterculture", def:"A group that rejects some of the major values and norms of the wider culture and promotes alternatives.", codex:"subculture-counterculture"},
   {id:"diffusion", term:"Diffusion", def:"The spread of objects, ideas or practices from one culture or group to another.", codex:"cultural-change"},
   {id:"cultural-lag", term:"Cultural lag", def:"The gap when material culture (technology) changes faster than the norms and laws that govern it. Term coined by William F. Ogburn in 1922.", codex:"cultural-change"},
   {id:"globalization", term:"Globalization", def:"The growing interconnection of the world’s economies, governments and cultures through trade, migration, travel and media.", codex:"cultural-change"},
   {id:"glocalization", term:"Glocalization", def:"Adapting global products and ideas to local cultures, and local cultures reaching global audiences. Popularized by the sociologist Roland Robertson.", codex:"cultural-change"},
   {id:"social-construction", term:"Social construction", def:"The process by which people collectively create things such as money, borders or institutions through shared habits and agreements. Constructed does not mean unreal.", codex:"social-construction-of-reality"},
   {id:"thomas-theorem", term:"Thomas theorem", def:"“If men define situations as real, they are real in their consequences” (W. I. Thomas and Dorothy Swaine Thomas, 1928).", codex:"social-construction-of-reality"},
   {id:"self-fulfilling-prophecy", term:"Self-fulfilling prophecy", def:"A false belief that leads people to act in ways that make it come true, such as a rumour causing a run on a sound bank (Robert K. Merton).", codex:"social-construction-of-reality"},
   {id:"mechanical-solidarity", term:"Mechanical solidarity", def:"Durkheim’s term for social unity based on people being alike, sharing the same work, beliefs and values; typical of small traditional societies.", codex:"emile-durkheim"},
   {id:"organic-solidarity", term:"Organic solidarity", def:"Durkheim’s term for social unity based on people being different and depending on each other’s specialised work; typical of modern societies.", codex:"emile-durkheim"},
   {id:"alienation", term:"Alienation", def:"Marx’s term for workers being separated from the products of their work, from control over how they work, from each other and from their own potential.", codex:"karl-marx"},
   {id:"rationalization", term:"Rationalization", def:"Weber’s term for the growing organisation of social life around efficiency, rules and calculation rather than tradition or emotion.", codex:"max-weber"},
   {id:"status", term:"Status", def:"A recognised social position, such as student, parent or nurse, with the rights and responsibilities attached to it.", codex:"status-roles"},
   {id:"ascribed-status", term:"Ascribed status", def:"A status you don’t choose, such as your age or the family you were born into.", codex:"status-roles"},
   {id:"achieved-status", term:"Achieved status", def:"A status gained through your own actions or choices, such as graduate or electrician.", codex:"status-roles"},
   {id:"master-status", term:"Master status", def:"A status that overshadows a person’s others and shapes how people see them, such as fame or a serious illness (Everett Hughes, 1945).", codex:"status-roles"},
   {id:"role", term:"Role", def:"The behaviour expected of someone who holds a particular status.", codex:"status-roles"},
   {id:"role-conflict", term:"Role conflict", def:"Tension when the roles of two or more different statuses make incompatible demands, such as work and parenting.", codex:"status-roles"},
   {id:"role-strain", term:"Role strain", def:"Tension when a single status makes too many or contradictory demands, such as a teacher being both friendly and strict.", codex:"status-roles"},
   {id:"impression-management", term:"Impression management", def:"Goffman’s term for the ways people try to control how others see them, through appearance, props, words and behaviour.", codex:"erving-goffman"},
   {id:"socialization", term:"Socialization", def:"The lifelong process through which people learn the norms, values, beliefs and roles of their society.", codex:"socialization"},
   {id:"self", term:"Self", def:"A person’s distinct sense of identity, which develops through social interaction.", codex:"self-development"},
   {id:"nature-nurture", term:"Nature versus nurture", def:"The debate over how much of who we are comes from genes (nature) and how much from our social environment (nurture). Most researchers now stress that the two interact.", codex:"socialization"},
   {id:"looking-glass-self", term:"Looking-glass self", def:"Charles Horton Cooley’s idea (1902) that we form our self-image from how we imagine others see and judge us.", codex:"self-development"},
   {id:"generalized-other", term:"Generalized other", def:"George Herbert Mead’s term for the shared expectations of society as a whole, which we learn to take into account.", codex:"george-herbert-mead"},
   {id:"agent-of-socialization", term:"Agent of socialization", def:"A person, group or institution that teaches us culture, such as family, peers, school, the workplace, religion, government or media.", codex:"agents-of-socialization"},
   {id:"peer-group", term:"Peer group", def:"A group of people similar in age and social status who share interests, such as school friends.", codex:"agents-of-socialization"},
   {id:"anticipatory-socialization", term:"Anticipatory socialization", def:"Preparing for a role before you hold it, such as a student nurse on placement.", codex:"agents-of-socialization"},
   {id:"resocialization", term:"Resocialization", def:"Unlearning old norms and behaviours and learning new ones, for example after migrating or entering the military.", codex:"agents-of-socialization"},
   {id:"total-institution", term:"Total institution", def:"Goffman’s term (1961) for a place where people live cut off from wider society under one authority that controls daily life, such as a prison or a military training camp.", codex:"agents-of-socialization"},
   {id:"primary-group", term:"Primary group", def:"A small, close, long-lasting group based on personal and emotional ties, such as a family or close friends.", codex:"groups"},
   {id:"secondary-group", term:"Secondary group", def:"A larger, more impersonal group organised around a task or goal, such as a class or a workplace team.", codex:"groups"},
   {id:"in-group", term:"In-group", def:"A group you belong to and feel loyal to.", codex:"groups"},
   {id:"out-group", term:"Out-group", def:"A group you don’t belong to and may see as “them”, sometimes with rivalry or hostility.", codex:"groups"},
   {id:"reference-group", term:"Reference group", def:"A group you use as a standard to judge yourself, whether or not you belong to it.", codex:"groups"},
   {id:"dyad", term:"Dyad", def:"A two-person group: intimate, but it ends if either person leaves.", codex:"groups"},
   {id:"triad", term:"Triad", def:"A three-person group: more stable than a dyad, but open to mediation and two-against-one coalitions.", codex:"groups"},
   {id:"conformity", term:"Conformity", def:"The extent to which people go along with group norms and expectations.", codex:"conformity"},
   {id:"groupthink", term:"Groupthink", def:"Irving Janis’s term (1972) for poor decisions made by close-knit groups when the wish for agreement overrides realistic judgement.", codex:"conformity"},
   {id:"formal-organization", term:"Formal organization", def:"A large secondary group deliberately organised to achieve goals, such as a company, hospital or charity. Etzioni classified them as normative, coercive or utilitarian.", codex:"bureaucracy"},
   {id:"bureaucracy", term:"Bureaucracy", def:"A formal organization run through a hierarchy of authority, specialised jobs, written rules and impersonal treatment (Max Weber’s ideal type).", codex:"bureaucracy"},
   {id:"iron-rule-of-oligarchy", term:"Iron rule of oligarchy", def:"Robert Michels’ idea (1911) that large organizations tend to be controlled by a small group of leaders. Also called the iron law of oligarchy.", codex:"bureaucracy"},
   {id:"mcdonaldization", term:"McDonaldization", def:"George Ritzer’s term (1993) for the spread of fast-food principles (efficiency, calculability, predictability and control) through society.", codex:"mcdonaldization"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u2-q01", lesson:"e2u2-l1", level:1, q:"Which of these is an example of **nonmaterial** culture?", options:[
     {t:"The belief that guests should be offered food when they arrive", ok:true, why:"Beliefs and norms are ideas, so they are nonmaterial culture."},
     {t:"A cooking pot used for family meals", why:"A pot is a physical object: material culture."},
     {t:"A mobile phone", why:"A phone is a physical object: material culture. The norms about using it are nonmaterial."},
     {t:"A national flag made of cloth", why:"The cloth flag is material. What it symbolises is nonmaterial, but the object itself is material culture."}
   ]},
   {id:"e2u2-q02", lesson:"e2u2-l1", level:2, q:"Kenji forgets to bow when meeting a new colleague in Tokyo. People notice but say nothing, and he feels a bit awkward. What kind of norm did he break?", options:[
     {t:"A folkway", ok:true, why:"A greeting custom with little moral weight, enforced by mild, informal reactions, is a folkway."},
     {t:"A more", why:"Mores carry strong moral weight, and breaking them brings outrage or shame. A missed bow brings mild awkwardness."},
     {t:"A law", why:"No law requires bowing. Laws are written and enforced by the state."},
     {t:"A formal sanction", why:"A sanction is a reaction to behaviour, not a norm. And nothing official happened here."}
   ]},
   {id:"e2u2-q03", lesson:"e2u2-l1", level:1, q:"What is the difference between a value and a belief?", options:[
     {t:"A value is what a culture considers good or important; a belief is what it holds to be true", ok:true, why:"Values answer “what matters?”; beliefs answer “how does the world work?”."},
     {t:"A value is written down; a belief is unwritten", why:"That describes formal versus informal norms, not values versus beliefs."},
     {t:"Values are religious; beliefs are scientific", why:"Both values and beliefs can be religious or secular. The difference is about goodness versus truth."},
     {t:"There is no difference; sociologists use them interchangeably", why:"Sociologists distinguish them, because they play different roles in supporting norms."}
   ]},
   {id:"e2u2-q04", lesson:"e2u2-l1", level:1, q:"Which statement about the Sapir–Whorf hypothesis best matches current evidence?", options:[
     {t:"Language can influence some aspects of perception and memory, but it doesn’t determine what people are able to think.", ok:true, why:"This is the weak form (linguistic relativity), supported by studies such as the 2007 Russian blues experiment."},
     {t:"People cannot think about anything their language has no word for.", why:"That is the strong (determinist) form, which most researchers reject: people learn new concepts and translate ideas all the time."},
     {t:"Language has no connection at all with thought.", why:"Too strong in the other direction. Experiments show some specific, modest effects."},
     {t:"Sapir and Whorf proved it together in a joint experiment.", why:"They never published a joint hypothesis or experiment; the label was applied to their ideas later."}
   ]},
   {id:"e2u2-q05", lesson:"e2u2-l1", level:2, q:"Priya returns a library book late and must pay a fee set out in the library’s rules. What kind of sanction is this?", options:[
     {t:"Negative and formal", ok:true, why:"It is a penalty (negative) applied through written rules by an organisation (formal)."},
     {t:"Negative and informal", why:"Informal sanctions are unofficial reactions like frowns or gossip. This fee follows written rules."},
     {t:"Positive and formal", why:"Positive sanctions reward behaviour. A fee punishes it."},
     {t:"It isn’t a sanction because it’s only money", why:"Fines and fees are classic formal sanctions."}
   ]},
   {id:"e2u2-q06", lesson:"e2u2-l1", level:3, q:"Amara moves to a new country for study. After two exciting weeks, she starts feeling tired and irritable, and thinks local customs are “inefficient” compared with home. Which pair of concepts best describes what is happening?", options:[
     {t:"Culture shock, with some ethnocentric judgements", ok:true, why:"The frustration that follows the first excitement is culture shock, and judging local customs by home standards is ethnocentrism, a common sign of that phase."},
     {t:"Xenocentrism and cultural relativism", why:"Xenocentrism is preferring another culture to your own; she is doing the opposite. Cultural relativism would mean understanding local customs on their own terms."},
     {t:"Cultural lag and diffusion", why:"These describe how cultures change over time, not one person’s experience of adjusting to a new culture."},
     {t:"Role strain and role conflict", why:"These describe tensions between or within roles, not adjusting to an unfamiliar culture."}
   ]},
   {id:"e2u2-q07", lesson:"e2u2-l1", level:2, q:"Hana insists that only foreign universities give a “real” education and that degrees from her own country are worthless. Which concept fits?", options:[
     {t:"Xenocentrism", ok:true, why:"Believing another culture’s institutions are automatically superior to your own is xenocentrism."},
     {t:"Ethnocentrism", why:"Ethnocentrism is judging others by your own culture’s standards and favouring your own. Hana favours foreign culture instead."},
     {t:"Cultural relativism", why:"Relativism means understanding practices in their own context, not ranking one culture above another."},
     {t:"Culture shock", why:"Culture shock is disorientation in an unfamiliar culture, not a preference for foreign institutions."}
   ]},
   {id:"e2u2-q08", lesson:"e2u2-l1", level:3, q:"A researcher studying a farming village asks why families there want many children, and finds that adult children are the main support for parents in old age. She later also reports that girls in the village leave school early, which limits their options. Is she contradicting cultural relativism?", options:[
     {t:"No. Cultural relativism means understanding practices in context first; it doesn’t forbid evidence-based evaluation afterwards.", ok:true, why:"She explained the practice by its setting, then evaluated an outcome using evidence. That is good sociology, not a contradiction."},
     {t:"Yes. Relativism means she may only describe, never evaluate.", why:"That confuses methodological relativism with the claim that no practice can ever be judged. Sociologists routinely report harms."},
     {t:"Yes, because only people from the village may study it.", why:"Relativism is about how you interpret practices, not who is allowed to study them."},
     {t:"No, because she is being ethnocentric, which is required in research.", why:"Ethnocentrism is what relativism tries to avoid. It is never required."}
   ]},
   {id:"e2u2-q09", lesson:"e2u2-l1", level:2, q:"Driving on the left in Japan and on the right in Brazil are both enforced by law, yet neither choice is morally better. What does this show?", options:[
     {t:"A norm can be a formal law while carrying little moral weight.", ok:true, why:"Formality (written and enforced) and moral weight are separate dimensions. Traffic-side rules are formal but morally neutral conventions."},
     {t:"All laws are mores.", why:"Some laws express mores (against theft), but this example shows laws without moral content."},
     {t:"Laws are always folkways.", why:"Laws are formal norms; folkways are informal customs. They are different categories."},
     {t:"Norms are the same everywhere.", why:"The example shows the opposite: the same kind of rule differs between countries."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e2u2-q10", lesson:"e2u2-l2", level:1, q:"What distinguishes a counterculture from a subculture?", options:[
     {t:"A counterculture rejects major values and norms of the wider culture; a subculture adds its own layer while still taking part in mainstream life.", ok:true, why:"That is the key difference: rejection versus participation with a distinctive identity."},
     {t:"A counterculture is always violent; a subculture is peaceful.", why:"Many countercultures are peaceful. The defining feature is rejecting mainstream values, not violence."},
     {t:"A subculture is larger than a counterculture.", why:"Size doesn’t define either. Both can be large or small."},
     {t:"A subculture is high culture; a counterculture is popular culture.", why:"High and popular culture are a separate distinction, about prestige and mainstream reach."}
   ]},
   {id:"e2u2-q11", lesson:"e2u2-l2", level:1, q:"According to William F. Ogburn (1922), what is cultural lag?", options:[
     {t:"The gap when technology changes faster than the norms and laws that govern it", ok:true, why:"Ogburn noticed that material culture often outpaces the nonmaterial culture meant to regulate it."},
     {t:"The time it takes a traveller to recover from culture shock", why:"That is adjustment to culture shock, a different idea about individuals."},
     {t:"When a culture refuses to adopt any new technology", why:"Cultural lag is about norms trailing technology that has already arrived, not refusing technology."},
     {t:"When one culture copies another’s products", why:"Spreading from one culture to another is diffusion."}
   ]},
   {id:"e2u2-q12", lesson:"e2u2-l2", level:2, q:"Small delivery drones become cheap and common in a city, but there are no clear rules about flying them over homes. Neighbours argue about privacy and noise. What is this an example of?", options:[
     {t:"Cultural lag", ok:true, why:"The material culture (drones) has changed faster than the nonmaterial culture (rules and norms) needed to govern it."},
     {t:"Counterculture", why:"No group is rejecting mainstream values here. The problem is missing rules for new technology."},
     {t:"Cultural relativism", why:"Relativism is understanding another culture by its own standards. This is about rules lagging behind technology."},
     {t:"High culture", why:"High culture refers to elite cultural forms such as opera. It has nothing to do with this situation."}
   ]},
   {id:"e2u2-q13", lesson:"e2u2-l2", level:1, q:"Which is an example of **discovery** rather than invention?", options:[
     {t:"Scientists find that a plant long used in folk remedies contains a compound that lowers fever", ok:true, why:"The compound already existed; revealing it is discovery."},
     {t:"An engineer combines a bicycle and a battery to build an e-bike", why:"Combining existing things into something new is invention."},
     {t:"A designer creates a new app by combining maps and payments", why:"Combining existing tools into a new product is invention."},
     {t:"A recipe spreads from one country to another", why:"Spreading between cultures is diffusion, not discovery."}
   ]},
   {id:"e2u2-q14", lesson:"e2u2-l2", level:2, q:"Chilli peppers originated in the Americas but are now central to Thai, Korean, Indian and Ethiopian cooking. Which process explains this?", options:[
     {t:"Diffusion", ok:true, why:"A food spreading from one region and being adopted and adapted by other cultures is diffusion."},
     {t:"Invention", why:"Chillies weren’t invented in Asia or Africa. They arrived through trade and were adopted."},
     {t:"Cultural lag", why:"Cultural lag is norms trailing technology, not a food spreading between cultures."},
     {t:"Xenocentrism", why:"Xenocentrism is believing another culture is superior. Adopting an ingredient doesn’t require that belief."}
   ]},
   {id:"e2u2-q15", lesson:"e2u2-l2", level:3, q:"A columnist writes: “K-pop proves globalization is making every culture American.” Which response is most sociologically accurate?", options:[
     {t:"K-pop is better seen as hybridity: it blends Korean language and performance traditions with global styles, and it flows outward from Korea to the world.", ok:true, why:"K-pop is a standard example of hybridity and of non-Western culture reaching global audiences, which challenges simple homogenization claims."},
     {t:"The columnist is right: K-pop is identical to American pop music.", why:"K-pop draws on global pop, but it has distinctive Korean language, performance and industry features. Identical is an overstatement."},
     {t:"K-pop is a counterculture, so it has nothing to do with globalization.", why:"K-pop is mainstream popular culture, and it is very much a product of globalization."},
     {t:"Globalization only affects economies, not culture.", why:"Globalization clearly affects culture; the debate is about *how*, not whether."}
   ]},
   {id:"e2u2-q16", lesson:"e2u2-l2", level:2, q:"Shakespeare’s plays were cheap popular entertainment in his time, but today they are often treated as high culture. What does this show?", options:[
     {t:"The boundary between high and popular culture is socially defined and changes over time.", ok:true, why:"The plays didn’t change; how society regards them did. The label is a social judgement."},
     {t:"High culture is always older than popular culture.", why:"Age doesn’t determine the label: many old forms remain popular, and new forms can gain prestige."},
     {t:"Popular culture is always lower quality.", why:"If quality fixed the label, the same plays couldn’t move between categories."},
     {t:"Shakespeare is a counterculture.", why:"Counterculture means rejecting mainstream values. This is about prestige, not rejection."}
   ]},
   {id:"e2u2-q17", lesson:"e2u2-l2", level:1, q:"What does **glocalization** describe?", options:[
     {t:"Global products and ideas being adapted to local cultures, and local cultures reaching global audiences", ok:true, why:"The term, popularized by Roland Robertson, stresses that global and local shape each other."},
     {t:"The complete disappearance of local cultures", why:"That describes the strongest homogenization claim, which glocalization challenges."},
     {t:"A country closing its borders to foreign products", why:"That is protectionism or isolation, not glocalization."},
     {t:"The spread of high culture to the elite", why:"Glocalization concerns global–local adaptation, not class-based culture."}
   ]},
   {id:"e2u2-q18", lesson:"e2u2-l2", level:3, q:"Fatima notices that a punk-style jacket that once signalled rebellion is now sold in a chain store at the shopping mall. Which idea best explains this?", options:[
     {t:"The mainstream market has absorbed and commercialised a subcultural style, weakening its oppositional meaning.", ok:true, why:"Commodification of rebellious styles is a well-documented process in the study of subcultures."},
     {t:"The chain store has become a counterculture.", why:"Selling a style doesn’t mean rejecting mainstream values; the store is part of the mainstream."},
     {t:"Punk has become high culture.", why:"A mass-market store is popular culture, not elite high culture."},
     {t:"This is cultural lag.", why:"Cultural lag is norms trailing technology. This is about a style moving from subculture to mainstream market."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e2u2-q19", lesson:"e2u2-l3", level:1, q:"Which type of society relies mainly on herding domesticated animals?", options:[
     {t:"Pastoral", ok:true, why:"Pastoral societies, such as Maasai cattle herders or Sámi reindeer herders, live mainly from herds."},
     {t:"Horticultural", why:"Horticultural societies grow crops in small plots with hand tools."},
     {t:"Hunter-gatherer", why:"Hunter-gatherers rely on wild animals and plants, not domesticated herds."},
     {t:"Postindustrial", why:"Postindustrial societies are based on services and information."}
   ]},
   {id:"e2u2-q20", lesson:"e2u2-l3", level:2, q:"In a large city, Oluwaseun depends on farmers, truck drivers, software engineers and nurses he will never meet. Which concept from Durkheim describes how such a society holds together?", options:[
     {t:"Organic solidarity", ok:true, why:"Modern societies hold together through interdependence among people with specialised, different roles."},
     {t:"Mechanical solidarity", why:"Mechanical solidarity is unity based on people being alike, typical of small traditional societies."},
     {t:"Alienation", why:"Alienation is Marx’s concept about workers’ separation from their work, not what holds society together."},
     {t:"Master status", why:"Master status is about one status overshadowing others in how a person is seen."}
   ]},
   {id:"e2u2-q21", lesson:"e2u2-l3", level:1, q:"What does the Thomas theorem state?", options:[
     {t:"If people define situations as real, they are real in their consequences.", ok:true, why:"W. I. Thomas and Dorothy Swaine Thomas (1928): people act on their definitions of situations, and those actions have real effects."},
     {t:"Society is held together by shared values.", why:"That is closer to a functionalist idea about social order."},
     {t:"Workers are cut off from the products of their labour.", why:"That is Marx’s concept of alienation."},
     {t:"Large organizations are ruled by a few.", why:"That is Michels’ iron rule of oligarchy."}
   ]},
   {id:"e2u2-q22", lesson:"e2u2-l3", level:2, q:"Which is an **ascribed** status?", options:[
     {t:"Being someone’s younger sibling", ok:true, why:"Birth order isn’t chosen, so it is ascribed."},
     {t:"Being a licensed pilot", why:"Earned through training and tests: achieved."},
     {t:"Being an elected mayor", why:"Won through an election: achieved."},
     {t:"Being a university graduate", why:"Earned through study: achieved."}
   ]},
   {id:"e2u2-q23", lesson:"e2u2-l3", level:3, q:"Lucía is a head teacher. She must support her staff’s wellbeing while also enforcing strict new performance targets on them. Separately, her mother is in hospital on the day of a school inspection. Which is which?", options:[
     {t:"The staff dilemma is role strain; the hospital and inspection clash is role conflict.", ok:true, why:"Supporting and pressuring staff are both demands of one status (head teacher): role strain. Daughter and head teacher are two statuses with clashing demands: role conflict."},
     {t:"Both are role conflict.", why:"Only the second involves two different statuses. The first is tension inside one status."},
     {t:"Both are role strain.", why:"The hospital clash involves two statuses (daughter and head teacher), which makes it role conflict."},
     {t:"The staff dilemma is role conflict; the hospital clash is role strain.", why:"This reverses them. Conflict is between statuses; strain is within one."}
   ]},
   {id:"e2u2-q24", lesson:"e2u2-l3", level:2, q:"After winning an international award, a novelist finds that people introduce her only as “the famous writer”, whatever the setting. Which concept fits?", options:[
     {t:"Master status", ok:true, why:"Fame has become the status that overshadows all her others in how people see her."},
     {t:"Role strain", why:"Role strain is tension within one status’s demands, not how others perceive a person."},
     {t:"Ascribed status", why:"An award is earned, so the status is achieved. The point is that it dominates the others."},
     {t:"Mechanical solidarity", why:"Mechanical solidarity describes how traditional societies are unified, not an individual’s status."}
   ]},
   {id:"e2u2-q25", lesson:"e2u2-l3", level:2, q:"A call-centre worker follows a fixed script, has every call timed and has no say in how the work is organised. Which pair of concepts best describes this job?", options:[
     {t:"Weber’s rationalization and Marx’s alienation", ok:true, why:"The job is organised for efficiency and calculation (rationalization) and denies the worker control over the process (alienation)."},
     {t:"Mechanical solidarity and xenocentrism", why:"Mechanical solidarity is about likeness in traditional societies; xenocentrism is preferring other cultures. Neither describes the job."},
     {t:"Cultural lag and diffusion", why:"These concern cultural change, not the organisation of work."},
     {t:"Ascribed status and folkways", why:"Neither explains the scripted, timed, controlled nature of the work."}
   ]},
   {id:"e2u2-q26", lesson:"e2u2-l3", level:1, q:"In Goffman’s dramaturgy, what is the **back stage**?", options:[
     {t:"A place where people relax, prepare and drop the performance they give to audiences", ok:true, why:"Back stage is out of the audience’s sight, like a restaurant kitchen or a staff room."},
     {t:"The place where the main performance for an audience happens", why:"That is the front stage."},
     {t:"A total institution such as a prison", why:"Total institutions are a different Goffman concept, from *Asylums* (1961)."},
     {t:"The audience watching a performance", why:"The audience watches the front stage. Back stage is where performers are away from the audience."}
   ]},
   {id:"e2u2-q27", lesson:"e2u2-l3", level:3, q:"Someone says: “Money is socially constructed, so it isn’t real.” What is the best reply?", options:[
     {t:"Money exists because people collectively agree to treat it as valuable, and that agreement has very real consequences, so constructed does not mean unreal.", ok:true, why:"Berger and Luckmann’s point is that constructed institutions become objective realities that shape lives."},
     {t:"They’re right: anything socially constructed can be ignored.", why:"Try ignoring rent or prices. Constructed institutions constrain people as firmly as physical facts."},
     {t:"Money is not socially constructed; it is a natural object.", why:"Banknotes are paper and bank balances are data. Their value depends entirely on shared agreement."},
     {t:"Only physical objects can be real.", why:"Laws, languages and institutions are not physical objects but clearly have real effects."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e2u2-q28", lesson:"e2u2-l4", level:1, q:"What is socialization?", options:[
     {t:"The lifelong process of learning a society’s norms, values, beliefs and roles", ok:true, why:"Socialization starts at birth and continues through every life stage."},
     {t:"Making friends at school", why:"Peer friendships are one part of socialization, but the concept is much broader."},
     {t:"A political system based on shared ownership", why:"That describes socialism, an economic and political system."},
     {t:"Learning only in childhood", why:"Socialization continues throughout life, for example in new jobs or after migrating."}
   ]},
   {id:"e2u2-q29", lesson:"e2u2-l4", level:1, q:"In Mead’s theory, what is the **generalized other**?", options:[
     {t:"The shared expectations of society as a whole, which a person learns to take into account", ok:true, why:"It is the final step in Mead’s account: seeing yourself from the viewpoint of the wider community."},
     {t:"A person’s closest family member", why:"Particular important people are significant others, not the generalized other."},
     {t:"The spontaneous, creative part of the self", why:"That is Mead’s “I”."},
     {t:"A group you compare yourself with", why:"That is a reference group, a different concept."}
   ]},
   {id:"e2u2-q30", lesson:"e2u2-l4", level:2, q:"A four-year-old puts on a coat and announces, “I’m Mummy going to work,” copying her mother’s words and actions. Which of Mead’s stages is she in?", options:[
     {t:"The play stage", ok:true, why:"Taking the role of one particular other person in pretend play is Mead’s play stage."},
     {t:"The game stage", why:"The game stage involves understanding many roles at once and the rules connecting them, as in a team sport."},
     {t:"The preparatory stage", why:"The preparatory stage is imitation without understanding of roles. Announcing a role shows she is taking it on."},
     {t:"The generalized other", why:"Taking the viewpoint of society as a whole comes later."}
   ]},
   {id:"e2u2-q31", lesson:"e2u2-l4", level:3, q:"A website says: “Twins separated at birth both became firefighters, which proves careers are genetic.” What is the main problem with this claim?", options:[
     {t:"One coincidence in one pair can’t establish a general rule; you need large studies with comparison groups, and even those estimate contributions, not total causes.", ok:true, why:"Single cases are weak evidence, and twin studies describe variation in populations, not fixed destinies."},
     {t:"Twins can never be studied scientifically.", why:"Twin studies are a legitimate method. The problem is drawing a sweeping conclusion from one case."},
     {t:"Careers are entirely random.", why:"That is a different overclaim. Careers reflect many social and personal factors."},
     {t:"Firefighting is a folkway.", why:"Irrelevant: folkways are customs, and this question is about evidence."}
   ]},
   {id:"e2u2-q32", lesson:"e2u2-l4", level:2, q:"Why is the Bucharest Early Intervention Project stronger evidence about the effects of care than individual cases of isolated children?", options:[
     {t:"Children were randomly assigned to foster care or institutional care, so differences can be attributed to the type of care.", ok:true, why:"Random assignment rules out many alternative explanations that single cases can’t."},
     {t:"It studied only one child in great detail.", why:"It studied 136 children; studying one child would be a case study, which is weaker for causal claims."},
     {t:"It involved no children at all, only animals.", why:"It studied children in Romanian institutions. Harlow’s studies used monkeys."},
     {t:"It proved that genes don’t matter.", why:"It showed that care environments matter a lot; it didn’t claim genes are irrelevant."}
   ]},
   {id:"e2u2-q33", lesson:"e2u2-l4", level:2, q:"Teachers praise students for being punctual, quiet and obedient, though none of these is on the official syllabus. What is this called?", options:[
     {t:"The hidden curriculum", ok:true, why:"Schools teach norms and values informally alongside formal subjects."},
     {t:"Anticipatory socialization", why:"That is preparing for a future role. The hidden curriculum is the unofficial teaching of norms in school."},
     {t:"A total institution", why:"Ordinary day schools don’t cut students off from wider society under total control."},
     {t:"Cultural lag", why:"Cultural lag concerns norms trailing technology."}
   ]},
   {id:"e2u2-q34", lesson:"e2u2-l4", level:3, q:"Dmitri, a new military recruit, receives a uniform and haircut, loses his personal belongings and is called by a number. Which concepts fit best?", options:[
     {t:"Resocialization in a total institution, starting with a degradation ceremony", ok:true, why:"Stripping the old identity on entry (degradation ceremony) begins resocialization inside a total institution."},
     {t:"Anticipatory socialization in a primary group", why:"He is not preparing for a future role; he is being remade inside one. A training camp is not a primary group."},
     {t:"Cultural relativism and diffusion", why:"These concern understanding cultures and spreading practices, not institutional identity change."},
     {t:"The looking-glass self and the play stage", why:"These describe self-image and childhood development, not institutional resocialization."}
   ]},
   {id:"e2u2-q35", lesson:"e2u2-l4", level:2, q:"Ana, a student nurse, spends months on hospital placements observing and practising nursing tasks before she qualifies. What is this?", options:[
     {t:"Anticipatory socialization", ok:true, why:"Learning and rehearsing a role before you hold it is anticipatory socialization."},
     {t:"Resocialization", why:"Resocialization replaces old norms, often after a major change. Ana is preparing for a new role."},
     {t:"A degradation ceremony", why:"That strips old identities on entry to a total institution; it doesn’t fit a placement."},
     {t:"Role strain", why:"Role strain is tension within one status’s demands, not preparing for a role."}
   ]},
   {id:"e2u2-q36", lesson:"e2u2-l4", level:1, q:"What did Carol Gilligan argue in *In a Different Voice* (1982)?", options:[
     {t:"Kohlberg’s theory, based on male subjects, overlooked a care perspective focused on relationships and responsibility.", ok:true, why:"Gilligan argued for a care perspective alongside justice, and criticised Kohlberg’s all-male samples."},
     {t:"Moral reasoning is entirely genetic.", why:"Gilligan focused on socialization and perspectives, not genetics."},
     {t:"Children develop through four cognitive stages.", why:"That is Piaget’s theory."},
     {t:"The self has an “I” and a “me”.", why:"That is Mead’s theory."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e2u2-q37", lesson:"e2u2-l5", level:1, q:"Which is a **primary** group?", options:[
     {t:"A group of close friends who have supported each other for years", ok:true, why:"Small, long-lasting and emotionally close: a primary group."},
     {t:"Passengers waiting at the same bus stop", why:"They don’t interact or share identity: an aggregate, not a group."},
     {t:"A company’s accounts department", why:"Organised around tasks: a secondary group."},
     {t:"Everyone born in the same year", why:"Sharing a trait without connection makes a category, not a group."}
   ]},
   {id:"e2u2-q38", lesson:"e2u2-l5", level:2, q:"A young doctor judges her own success by comparing herself with senior consultants she admires. For her, the consultants are a…", options:[
     {t:"Reference group", ok:true, why:"A group you use as a standard to evaluate yourself is a reference group."},
     {t:"Out-group", why:"An out-group is one you don’t belong to and may feel rivalry towards. She admires them as a standard."},
     {t:"Primary group", why:"A primary group is a close emotional group like family. Admiration from a distance doesn’t make one."},
     {t:"Dyad", why:"A dyad is a two-person group."}
   ]},
   {id:"e2u2-q39", lesson:"e2u2-l5", level:2, q:"Two flatmates always disagree about cleaning. When a third person moves in, she starts settling their disputes. What did Simmel say about this kind of change?", options:[
     {t:"A triad allows a third person to mediate, though it also makes two-against-one coalitions possible.", ok:true, why:"Simmel noted that adding a third member creates new roles such as mediator, and new risks such as coalitions."},
     {t:"Adding a person makes the group a secondary group automatically.", why:"Primary or secondary depends on the type of bond, not on going from two to three people."},
     {t:"Triads are less stable than dyads.", why:"Simmel saw triads as more stable, since they survive one member withdrawing."},
     {t:"Group size has no effect on interaction.", why:"Simmel’s whole point was that size transforms interaction."}
   ]},
   {id:"e2u2-q40", lesson:"e2u2-l5", level:1, q:"In Asch’s conformity experiments, what most reduced conformity?", options:[
     {t:"Having just one other person in the group disagree with the majority", ok:true, why:"A single ally sharply reduced conformity, as did writing answers privately."},
     {t:"Making the lines harder to compare", why:"Asch made the correct answer obvious on purpose; harder tasks tend to increase conformity."},
     {t:"Adding more people who gave the wrong answer", why:"A larger unanimous majority does not reduce conformity."},
     {t:"Telling participants the study was about learning", why:"That was Milgram’s cover story, in a different study."}
   ]},
   {id:"e2u2-q41", lesson:"e2u2-l5", level:3, q:"Why is Milgram’s obedience research still discussed in research-ethics training?", options:[
     {t:"Participants were deceived and many experienced real distress, raising questions that helped shape informed consent and ethics review.", ok:true, why:"The studies are a landmark case for weighing knowledge gained against harm to participants."},
     {t:"Participants gave real electric shocks that injured learners.", why:"No shocks were delivered; the learner was an actor. The ethical issue was deception and participants’ distress."},
     {t:"Milgram used animals instead of humans.", why:"Milgram studied human participants. Harlow’s monkey studies are a different case."},
     {t:"The results were never published.", why:"They were widely published from 1963 onward."}
   ]},
   {id:"e2u2-q42", lesson:"e2u2-l5", level:3, q:"A project team’s leader opens by saying failure is impossible, doubters stay silent, and critics are called disloyal. Six months later the project collapses. Which concept best explains the decision process?", options:[
     {t:"Groupthink", ok:true, why:"Illusions of invulnerability, self-censorship and pressure on dissenters are Janis’s symptoms of groupthink."},
     {t:"Cultural lag", why:"Cultural lag is norms trailing technology, not a flawed group decision process."},
     {t:"The iron rule of oligarchy", why:"Michels’ concept describes power concentrating in large organizations, not the dynamics of one decision."},
     {t:"Organic solidarity", why:"Organic solidarity is how interdependent modern societies hold together."}
   ]},
   {id:"e2u2-q43", lesson:"e2u2-l5", level:2, q:"Kenji joins a hiking club because he loves the mountains; there is no pay. In Etzioni’s terms, what kind of organization is it?", options:[
     {t:"Normative", ok:true, why:"People join normative (voluntary) organizations for shared interests or values, with non-material rewards."},
     {t:"Utilitarian", why:"Utilitarian organizations are joined for material rewards such as wages or qualifications."},
     {t:"Coercive", why:"Coercive organizations are ones people are forced into, such as prisons."},
     {t:"Total institution", why:"A total institution controls all of life under one authority. A hiking club doesn’t."}
   ]},
   {id:"e2u2-q44", lesson:"e2u2-l5", level:1, q:"Which is **not** one of the features of Weber’s ideal-type bureaucracy?", options:[
     {t:"Decisions based on personal friendships and family ties", ok:true, why:"Weber’s bureaucracy is impersonal: decisions follow rules, not personal ties. This option describes the opposite."},
     {t:"A hierarchy of authority", why:"A clear chain of command is one of Weber’s core features."},
     {t:"Explicit written rules", why:"Standardised written rules are a core feature."},
     {t:"A clear division of labour", why:"Specialised roles are a core feature."}
   ]},
   {id:"e2u2-q45", lesson:"e2u2-l5", level:3, q:"A university starts judging lecturers mainly by the number of papers they publish each year, rather than their quality. Which principle of McDonaldization is this, and what risk does Ritzer warn about?", options:[
     {t:"Calculability; the irrationality of rationality, as counting replaces judgements of quality", ok:true, why:"Emphasising quantity over quality is calculability, and Ritzer warns such systems can produce irrational results, such as many weak papers."},
     {t:"Predictability; cultural lag", why:"Predictability means sameness everywhere, and cultural lag concerns technology outpacing norms. Neither fits counting papers."},
     {t:"Control; groupthink", why:"Control replaces human judgement with rules or machines; groupthink is a group decision problem. Counting outputs is calculability."},
     {t:"Efficiency; the iron rule of oligarchy", why:"Efficiency is the fastest route to a result, and oligarchy concerns power concentration. The key feature here is quantity over quality."}
   ]}
  ]
});
