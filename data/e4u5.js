/* International Studies · Unit 5 · Culture in a global age */
ICA.addUnit({
  id:"e4u5", track:"e4", n:5, title:"Culture in a global age", icon:"🎭",
  blurb:"What scholars mean by culture, how meaning and representation work, the big debates about cultural globalisation, Bourdieu on taste and capital, cosmopolitanism, and popular culture as a site of world politics. Rich cases from many regions, media you can go and look at, and a method for analysing a cultural text in a seminar paper.",
  goals:[
    "Explain the main meanings of “culture” (Williams, Tylor, Geertz), treat culture as practice rather than essence, and describe the cultural turn in IR",
    "Use Hall’s representation and encoding/decoding, Barthes’ myth and the idea of the stereotype, and discuss Orientalism, its critics and Occidentalism in depth",
    "Compare the homogenisation, glocalisation, scapes and hybridity accounts of cultural globalisation, using cultural flows from Asia, Africa and Latin America",
    "Apply Bourdieu’s capitals, habitus and field to cases at home and in world politics, and weigh the arguments for and against cosmopolitanism",
    "Analyse a film, game, song or fandom as part of world politics with the circuit of culture, and plan a seminar paper on a cultural text"
  ],
  read:[
    {book:"oanth", where:"Chapter 3, Sections 3.1 “The Homeyness of Culture” to 3.6 “The Paradoxes of Culture”, and Chapter 15, Sections 15.1 “Putting the Mass into Media” to 15.8 “Digital Media, New Socialities”", note:"A free anthropology textbook: the culture concept (including Geertz’s wink) and media, representation and national identity, with cases from many regions."},
    {book:"soc", where:"Chapter 3 “Culture” (Sections 3.1–3.4)", note:"Reread it for the basic vocabulary this unit builds on."},
    {book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys)", note:"The IR theory behind the cultural turn: ideas, norms and identities."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u5-l1", title:"What “culture” means, and why IR turned to it", minutes:60,
   hook:{q:"In 1952 two American anthropologists, Alfred Kroeber and Clyde Kluckhohn, collected definitions of “culture” from the scholarly literature and sorted them into types. Roughly how many did they collect?", options:["About a dozen","Just under fifty","164","More than a thousand"], answer:2, reveal:"**164.** Their book *Culture: A Critical Review of Concepts and Definitions* (1952) listed definitions ranging from “learned behaviour” to “a statistical fiction”. The number is a warning: when two people in a seminar say “culture”, they may mean different things. This lesson sorts out the main meanings, shows why many scholars now treat culture as practice rather than essence, and explains how culture came back into IR."},
   goals:[
     "Distinguish Raymond Williams’s three modern senses of “culture” and recognise each one in use",
     "Explain Geertz’s “webs of significance” and thick description, and the main critiques of his approach",
     "Contrast culture as essence with culture as practice, using the toolkit idea and the critique of essentialism",
     "Describe how culture entered IR through political culture, strategic culture and the cultural turn of the 1990s",
     "Analyse the Asian values debate as an example of culture used as an argument in world politics"
   ],
   learn:[
    {h:"A word with too many meanings", body:[
      {lead:"“Culture is one of the two or three most complicated words in the English language.”"},
      "So wrote the Welsh critic {{raymond-williams|Raymond Williams}} in *Keywords* (1976), a dictionary of words whose meanings carry social history. A one-line reminder from the sociology primer: there, [[culture]] meant a group’s shared, learned way of life ({{culture}}). That is one meaning among several, and graduate reading moves between them without warning.",
      "Williams traced three main modern senses:",
      {table:[
        ["Sense","What it means","Example in use"],
        ["Process","Intellectual, spiritual and aesthetic development","“A cultured person”"],
        ["Way of life","The shared practices of a people, period or group","“Office culture in Seoul”"],
        ["Works","Arts and intellectual activity","“The Ministry of Culture”"]
      ]},
      "International studies uses all three. A cultural diplomacy budget funds the third sense; a claim that a country’s “culture” makes it cautious uses the second; arguments about “civilised” and “uncivilised” peoples (the [[standard-of-civilisation|standard of civilisation]] from Unit 1) drew on the first."
    ]},
    {h:"From “the best” to “ordinary”", body:[
      "Two Victorian definitions still frame the argument. Matthew Arnold’s *Culture and Anarchy* (1869) defined culture as the pursuit of “the best which has been thought and said”: culture as a standard, owned by the educated. Two years later the anthropologist Edward Tylor’s *Primitive Culture* (1871) defined it as “that complex whole” of knowledge, belief, art, morals, law and custom acquired as a member of society: culture as something everyone has.",
      "Williams took Tylor’s side with a political edge. In his essay “Culture is Ordinary” (1958) he described a bus ride from Hereford over the border into South Wales, where he grew up as a railway worker’s son, and insisted that the culture of working people was as real as that of the universities. With Richard Hoggart and others he helped found **cultural studies**, the study of everyday meaning and power that Lesson 2 continues. His phrase [[structure-of-feeling|structure of feeling]] names the shared, lived sense of a period that is felt before it is put into words."
    ]},
    {h:"Geertz: webs of significance and thick description", body:[
      "{{clifford-geertz|Clifford Geertz}}, an American anthropologist who did fieldwork in Java, Bali and Morocco, gave the most quoted definition in *The Interpretation of Cultures* (1973): “Believing, with Max Weber, that man is an animal suspended in webs of significance he himself has spun, I take culture to be those webs, and the analysis of it to be therefore not an experimental science in search of law but an interpretive one in search of meaning.”",
      "To show what interpretation involves, he borrowed an example from the philosopher Gilbert Ryle:",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">One movement, four meanings</text><rect class="d-soft" x="20" y="32" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">Twitch</text><text class="s" x="170" y="75" text-anchor="middle">an involuntary eyelid movement</text><rect class="d-lup" x="20" y="98" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle">Wink</text><text class="s" x="170" y="141" text-anchor="middle">a signal to a friend, by a shared code</text><rect class="d-gold" x="20" y="164" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="188" text-anchor="middle">Parody of a wink</text><text class="s" x="170" y="207" text-anchor="middle">mocking someone’s clumsy wink</text><rect class="d-rose" x="20" y="230" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="254" text-anchor="middle">Rehearsing the parody</text><text class="s" x="170" y="273" text-anchor="middle">practising it alone, at a mirror</text><text class="s" x="170" y="306" text-anchor="middle">A camera records the same eyelid each time.</text><text class="s" x="170" y="322" text-anchor="middle">Only thick description tells them apart.</text></svg>', alt:"Four stacked boxes describing the same eyelid movement: a twitch, which is involuntary; a wink, a signal to a friend by a shared code; a parody of a wink, mocking someone’s clumsy wink; and rehearsing the parody alone at a mirror. A note says a camera records the same eyelid each time and only thick description tells them apart.", cap:"Ryle’s wink, as Geertz retold it in “Thick Description” (1973)."},
      "A **thin** description records the movement. A [[thick-description|thick description]] records what it means, to whom, by which codes. In “Deep Play: Notes on the Balinese Cockfight” (1972) Geertz read a cockfight as a story the Balinese tell themselves about themselves, about status, rivalry and risk.",
      "Critics pushed back. Talal Asad (1983) argued that Geertz’s symbols float free of power and history: who authorises a meaning, and who is punished for rejecting it? Others asked whose reading counts when the anthropologist, not the people studied, writes the story."
    ]},
    {h:"Culture as practice, not essence", body:[
      "In the 1980s anthropologists turned these doubts on their own discipline. *Writing Culture* (1986), edited by James Clifford and George Marcus, showed how ethnographies are composed, with authors choosing what to include. Lila Abu-Lughod’s “Writing against Culture” (1991) argued that talk of “a culture” freezes people into bounded, timeless, uniform groups, a habit she linked to the self/other divide of colonial knowledge. This is the problem of [[essentialism]]: treating a group as having a fixed inner nature.",
      "The alternative treats culture as something people **do**. Ann Swidler (1986) described culture as a [[cultural-toolkit|toolkit]] of habits, stories and skills from which people build strategies of action, picking different tools in different situations. Lisa Wedeen (2002) urged political scientists to study culture as **semiotic practices**: what people do with meanings, and with what effects.",
      {table:[
        ["Culture as essence","Culture as practice"],
        ["A thing a group has","Something people do and argue about"],
        ["Bounded and uniform","Overlapping, varied inside"],
        ["Fixed over time","Changing, borrowed, contested"],
        ["Explains behaviour directly","Used by actors, in context"]
      ]},
      {ex:"Geert Hofstede’s *Culture’s Consequences* (1980) scored countries on dimensions such as individualism and power distance, using surveys of employees of one multinational company, IBM, collected around 1967–73. The model is still widely used in business schools, and Hofstede himself warned that the scores describe national averages, not individuals. Brendan McSweeney (2002) argued that it still assumes each nation has one uniform, stable culture, and others question whether one company’s staff can stand for a whole country. In a seminar, the scores are useful as data about survey answers, and risky as explanations of what any one person or government will do.", label:"Worked example: the essence view in practice"}
    ]},
    {h:"How culture entered IR", body:[
      "Culture is not new to the study of world politics. During the Second World War, “national character” studies such as Ruth Benedict’s work on Japan ({{ruth-benedict}}) tried to read enemies through their culture, a style now widely criticised. Gabriel Almond and Sidney Verba’s *The Civic Culture* (1963) compared [[political-culture|political culture]], citizens’ attitudes to politics, in five countries.",
      "In security studies, Jack Snyder’s RAND report *The Soviet Strategic Culture* (1977) coined [[strategic-culture|strategic culture]]: shared ideas and habits about the use of force. Alastair Iain Johnston’s *Cultural Realism* (1995) tested the idea on Ming China. He found that Confucian texts praising restraint coexisted with a practical strategic culture that favoured force when China was strong, a “parabellum” culture close to realism. Colin Gray (1999) replied that culture is the context of all strategic behaviour, so it cannot be tested as a separate cause.",
      "The wider [[cultural-turn|cultural turn]] in IR came in the 1990s. Yosef Lapid and Friedrich Kratochwil edited *The Return of Culture and Identity in IR Theory* (1996), the same year as Katzenstein’s *The Culture of National Security*, which you met with constructivism in Unit 2 ({{cultural-turn-ir}}). Christian Reus-Smit’s *On Cultural Diversity* (2018) asks how international orders have managed diversity across history.",
      "In a seminar paper, say which of three roles culture plays in your argument:",
      {table:[
        ["Role","Claim","Example"],
        ["Cause","A shared idea pushes a choice","Antimilitarist norms restrain defence policy"],
        ["Context","It makes some options thinkable","Who counts as a “civilised” state in 1900"],
        ["Resource","Actors invoke it for ends","Leaders citing “our values” at the UN"]
      ]}
    ]},
    {h:"Culture as an argument: the Asian values debate", body:[
      "Culture is also something political actors **claim**. In the early 1990s some Asian leaders, notably Singapore’s Lee Kuan Yew and Malaysia’s Mahathir Mohamad, argued that [[asian-values|Asian values]] such as family, order and community suited a different path from Western liberal democracy. The Bangkok Declaration (1993), adopted by Asian governments before the Vienna World Conference on Human Rights, stressed sovereignty, non-interference and regional particularities.",
      "Lee set out his view in an interview with Fareed Zakaria, “Culture Is Destiny” (*Foreign Affairs*, March–April 1994). South Korea’s Kim Dae-jung, then out of office and later president (1998–2003), answered in the same journal with “Is Culture Destiny?” (November–December 1994), citing democratic ideas in Asian traditions. Amartya Sen (1997) argued that Asia’s traditions are too diverse to share one set of values. Interest in the thesis fell after the 1997–98 financial crisis.",
      {warn:"Teach this debate neutrally. Supporters saw a defence of diversity against Western universalism; critics saw a justification for limiting rights. The analyst’s question is who speaks for “a culture”, and which versions of it they leave out."},
      {key:"Culture is a set of meanings people make and use, not a fixed national essence. In IR it matters as context, as practice and as an argument actors make."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Culture means nation.”** Cultures cross borders (a diaspora, a religion, a fan community) and divide inside them (class, region, generation). A national culture is one claim among many.",
        "**“Culture explains everything, or nothing.”** Seminar arguments are stronger when they say **how** culture works: as a cause of a choice, as the context that makes some choices thinkable, or as a resource that actors use.",
        "**“Studying culture means accepting any practice.”** Interpretation is not approval. [[cultural-relativism|Cultural relativism]] in research means understanding first; scholars still argue about human rights and harm.",
        "**“Culture is the soft side of IR.”** Strategic culture, the standard of civilisation and the Asian values debate were all about war, sovereignty and rights."
      ]},
      {terms:["structure-of-feeling","thick-description","essentialism","cultural-toolkit","political-culture","strategic-culture","cultural-turn","asian-values"]}
    ]}
   ],
   try:[
    {id:"e4u5-l1-x1", type:"sort", q:"Which of Williams’s three senses of “culture” is each sentence using?", buckets:["Process of development","A way of life","Works and arts"], items:[
      {t:"“Reading widely made her a more cultured person.”", b:0, why:"Culture as personal intellectual and aesthetic development is Williams’s first sense."},
      {t:"“Start-up culture in Nairobi rewards fast decisions.”", b:1, why:"The shared practices of a group are the “way of life” sense."},
      {t:"“The city’s culture budget funds two museums and a theatre.”", b:2, why:"Museums and theatres are cultural works and institutions."},
      {t:"“Tea-drinking habits differ across the culture of rural Turkey.”", b:1, why:"Everyday customs of a people are the way-of-life sense."},
      {t:"“The festival showcases Pacific culture: film, dance and poetry.”", b:2, why:"Here “culture” means artistic works and performances."},
      {t:"“Colonial officials claimed to bring culture to ‘backward’ peoples.”", b:0, why:"This uses culture as a ladder of development, the first sense, in its imperial form."}
    ]},
    {id:"e4u5-l1-x2", type:"mcq", q:"Two researchers watch the same wedding in Accra. One writes: “Guests stood, clapped and pressed banknotes on the dancers’ foreheads for four minutes.” The other explains what the money-spraying means, who is honoured by it and what guests expect in return. What is the difference?", options:[
      {t:"The first is thin description; the second is thick description of the meanings involved", ok:true, why:"Right. Thick description adds the shared codes that make the action meaningful to the people involved."},
      {t:"The first is objective and the second is biased, so only the first is science", why:"Geertz argued that interpretation is not bias but the task: the meaning is part of what happened."},
      {t:"Both are thick, because both are detailed", why:"Detail about movements is still thin. Thickness comes from meanings and context, not length."},
      {t:"The second is a survey and the first is an ethnography", why:"Neither is a survey; both are observations. They differ in how much meaning they record."}
    ]},
    {id:"e4u5-l1-x3", type:"match", q:"Match each thinker to their idea about culture.", pairs:[
      ["Matthew Arnold (1869)","“The best which has been thought and said”","Arnold saw culture as a standard of excellence."],
      ["Edward Tylor (1871)","“That complex whole” acquired in society","Tylor’s anthropological definition: everyone has culture."],
      ["Raymond Williams (1958)","Culture is ordinary","Williams insisted on working people’s culture."],
      ["Clifford Geertz (1973)","Webs of significance, read by interpretation","Geertz’s semiotic, interpretive definition."],
      ["Ann Swidler (1986)","A toolkit for strategies of action","Swidler treats culture as resources people use."]
    ]},
    {id:"e4u5-l1-x4", type:"sort", q:"Does each statement treat culture as an essence or as a practice?", buckets:["Essence","Practice"], items:[
      {t:"“Being a Bedouin people, they will always value honour over profit.”", b:0, why:"A fixed, uniform nature that directly determines behaviour is the essence view."},
      {t:"“Young Filipinos mix church, K-pop and local slang in how they talk about dating.”", b:1, why:"People combine and borrow resources in context: culture as practice."},
      {t:"“Some Japanese firms invoke ‘harmony’ to resist unions, while union leaders invoke it too.”", b:1, why:"The same cultural idea is used by different actors for different ends."},
      {t:"“Latin Americans are naturally more emotional than Northern Europeans.”", b:0, why:"A sweeping national-character claim treats culture as essence."},
      {t:"“What counts as ‘traditional dress’ in Ghana has changed with trade and fashion.”", b:1, why:"Culture changes, borrows and is argued about over time."}
    ]},
    {id:"e4u5-l1-x5", type:"mcq", q:"What did Johnston’s *Cultural Realism* (1995) find about Ming China’s strategic culture?", options:[
      {t:"Confucian texts praising restraint coexisted with a practical culture that favoured force when China was strong", ok:true, why:"Right. Johnston found a “parabellum” strategic culture close to realism behind the idealised texts."},
      {t:"China always avoided force because Confucian culture forbade it", why:"That is the idealised picture Johnston tested and found incomplete."},
      {t:"Culture had no effect at all, so the concept should be dropped", why:"He argued culture did matter, but that its content was more realist than the classics suggest."},
      {t:"Ming policy copied European strategic thinking", why:"His case is about Chinese texts and decisions, with no European model."}
    ]},
    {id:"e4u5-l1-x6", type:"mcq", q:"In the Asian values debate, what was Kim Dae-jung’s main reply to Lee Kuan Yew (1994)?", options:[
      {t:"Asian traditions contain democratic ideas, so culture does not rule out democracy in Asia", ok:true, why:"Right. His article’s title asked “Is Culture Destiny?” and argued that the anti-democratic reading of Asia was a myth."},
      {t:"Asian cultures are uniform, so they should adopt one regional government", why:"He argued against treating Asia as culturally uniform in an anti-democratic way."},
      {t:"Culture is irrelevant to politics everywhere", why:"He drew on Asian traditions; his claim was about their content, not their irrelevance."},
      {t:"Only economic growth matters, so values debates are pointless", why:"His reply was about values and democracy, not growth alone."}
    ]},
    {id:"e4u5-l1-x7", type:"spot", q:"Tap the problems in this opinion column about “culture”.", ask:"essentialises culture", parts:[
      "“",{t:"Country Z’s 5,000-year-old culture",flag:true,why:"Treats a culture as one unchanging thing across millennia: the essence view."}," means ",{t:"its people will always accept strong leaders",flag:true,why:"A cultural claim used as a direct, permanent prediction of behaviour."},". ",{t:"A 2024 national survey found that 58% of respondents favoured stronger courts",flag:false,why:"A specific, dated piece of evidence is fine (and actually complicates the column’s claim)."},", but ",{t:"surveys cannot capture the true national soul",flag:true,why:"Dismissing evidence by appeal to a hidden essence makes the claim impossible to test."},". ",{t:"Of course, urban and rural voters differ on many issues",flag:false,why:"Recognising variation inside a society is the practice view, and is fine."},"”"
    ]}
   ],
   apply:{intro:"Practise using “culture” precisely. Use public sources; observe without recording anyone.", tasks:[
    {t:"Three meanings in one week’s news", how:["Over a week, collect five uses of the word “culture” from news, adverts or speeches in any language you read.","Label each with Williams’s sense: process, way of life or works.","Note one use that slides between senses, and what that slide does to the argument."], write:"Use 1 (source)… sense… Use 2… The slide I noticed… What it does…"},
    {t:"Thin and thick", how:["Choose a gesture or small ritual you know well: a bow, a toast, a handshake, a way of serving tea.","Write one thin description (only movements) in two lines.","Then write a thick description: what it means, to whom, when it would be wrong, and how it has changed."], write:"Thin… Thick: meaning… who it is for… when it goes wrong… change over time…"},
    {t:"Who speaks for a culture?", how:["Find one speech or official statement in which a leader appeals to national “values” or “culture” to justify a policy.","Note which version of the culture is offered and which groups or traditions are left out.","Find one person or group from the same country who describes it differently."], write:"Statement… Culture claimed… Left out… A different voice…"},
    {t:"Seminar questions", how:["Is “culture” still a useful analytical concept, or should we speak only of practices and meanings?","Can strategic culture explain a state’s behaviour, or only describe its context?","Was the Asian values debate about culture, about power, or both?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes with five labelled uses of “culture”, a thin and a thick description, one analysed appeal to national culture and a seminar paragraph."},
   read:[
    {book:"oanth", where:"Chapter 3, Sections 3.1 “The Homeyness of Culture”, 3.2 “The Winkiness of Culture”, 3.5 “Modes of Cultural Analysis” and 3.6 “The Paradoxes of Culture”", note:"Read it after this lesson for the anthropologist’s view of the culture concept, including the wink."},
    {book:"soc", where:"Chapter 3 “Culture”, Section 3.1 “What Is Culture?” and Section 3.4 “Theoretical Perspectives on Culture”"},
    {book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys)", note:"For the IR theory that brought culture and identity back into the field."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u5-l2", title:"Representation, meaning and the Orient", minutes:60,
   hook:{q:"In the 1950s the French critic Roland Barthes analysed a magazine cover he saw at a barber’s: an issue of *Paris Match* from 1955. What did the cover show?", options:["The Eiffel Tower at night","A young Black soldier in French uniform saluting, eyes raised to the French flag","A crowd celebrating the end of the Second World War","A film star at the Cannes festival"], answer:1, reveal:"**A young Black soldier saluting the tricolour.** Barthes argued that the photo, without saying so, told readers that France was a great empire whose subjects of every colour served it loyally, at a time when France was fighting to keep Algeria. He called this second layer of meaning **myth**. This lesson is about how images and words carry meanings like that, and about the most famous study of such meanings in world politics: Said’s *Orientalism*."},
   goals:[
     "Compare Hall’s reflective, intentional and constructionist approaches to representation",
     "Read an image at the levels of denotation, connotation and myth, using basic semiotics",
     "Apply Hall’s encoding/decoding model, with its three reading positions, to a global media case",
     "Explain how stereotypes work and how Said’s *Orientalism* links representation to power",
     "Weigh the main critiques of Said and the two meanings of Occidentalism"
   ],
   learn:[
    {h:"Meaning is made, not found", body:[
      {lead:"A photo of a flag means nothing to someone who has never learned the code. Meaning is produced, by people, with shared codes."},
      "{{stuart-hall|Stuart Hall}}, the Jamaican-born British cultural theorist, set out three ways of thinking about [[representation-hall|representation]], the use of language and images to make meaning, in *Representation: Cultural Representations and Signifying Practices* (1997):",
      {table:[
        ["Approach","Where meaning lives","Hall’s verdict"],
        ["Reflective","In the object; words mirror it","Ignores that codes differ"],
        ["Intentional","In the author’s intention","Ignores that meaning is shared"],
        ["Constructionist","In shared systems of signs","The view Hall adopts"]
      ]},
      "The constructionist view does not deny that the world exists. It says that what things **mean** depends on systems of signs that change and are fought over. That is why representation is political: whoever shapes the codes shapes what seems normal."
    ]},
    {h:"Signs and myths: semiotics in brief", body:[
      "[[semiotics|Semiotics]] is the study of signs. Ferdinand de Saussure’s *Course in General Linguistics* (1916, published from students’ notes after his death) split the sign into a [[signifier-signified|signifier]] (the sound or image) and a **signified** (the concept). The link is arbitrary: *tree*, *arbre* and 木 point to the same idea. Colours work the same way: red can mean luck on a Lunar New Year envelope and danger on a road sign.",
      "Roland Barthes’ *Mythologies* (1957) applied this to wrestling, wine, steak and chips and a new Citroën car. In the essay “Myth Today” he argued that a whole sign can become the signifier of a second meaning, a [[connotation]] that feels natural:",
      {fig:'<svg viewBox="0 0 340 300"><text class="s" x="170" y="16" text-anchor="middle">Level 1: language (denotation)</text><rect class="d-soft" x="6" y="26" width="160" height="56" rx="8" stroke-width="2"/><text x="86" y="50" text-anchor="middle">Signifier</text><text class="s" x="86" y="69" text-anchor="middle">shapes in the photo</text><rect class="d-soft" x="174" y="26" width="160" height="56" rx="8" stroke-width="2"/><text x="254" y="50" text-anchor="middle">Signified</text><text class="s" x="254" y="69" text-anchor="middle">a soldier salutes</text><rect class="d-lup" x="6" y="92" width="328" height="44" rx="8" stroke-width="2"/><text x="170" y="119" text-anchor="middle">Sign: “a soldier salutes the flag”</text><text class="s" x="170" y="160" text-anchor="middle">Level 2: myth (connotation)</text><rect class="d-gold" x="6" y="170" width="160" height="56" rx="8" stroke-width="2"/><text x="86" y="194" text-anchor="middle">Signifier</text><text class="s" x="86" y="213" text-anchor="middle">the whole level-1 sign</text><rect class="d-gold" x="174" y="170" width="160" height="56" rx="8" stroke-width="2"/><text x="254" y="194" text-anchor="middle">Signified</text><text class="s" x="254" y="213" text-anchor="middle">a loyal, just empire</text><rect class="d-rose" x="6" y="236" width="328" height="56" rx="8" stroke-width="2"/><text x="170" y="260" text-anchor="middle">Myth</text><text class="s" x="170" y="279" text-anchor="middle">“France is a great empire”, felt as natural</text></svg>', alt:"Two levels. Level 1, language or denotation: the signifier (shapes in the photo) and the signified (a soldier salutes) form a sign, a soldier salutes the flag. Level 2, myth or connotation: that whole sign becomes a new signifier, joined to a new signified, a loyal and just empire, producing the myth that France is a great empire, felt as natural.", cap:"Barthes’ two levels, using the *Paris Match* cover of 1955."},
      "A [[myth-barthes|myth]] in Barthes’ sense is not a lie. It is a meaning that hides its own history, so that it seems like common sense."
    ]},
    {h:"Encoding and decoding", body:[
      "Hall’s paper “Encoding and Decoding in the Television Discourse” (1973; revised as “Encoding/Decoding”, 1980) asked how audiences read media. Producers [[encoding-decoding|encode]] a message using professional and political codes, building in a [[preferred-reading|preferred reading]]; audiences decode it from their own social position.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e4u5-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="40" y="8" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">Encoding</text><text class="s" x="170" y="47" text-anchor="middle">makers’ codes, institutions, values</text><path class="d-ink" d="M170 60 L170 76" stroke-width="2" marker-end="url(#e4u5-l2-a)"/><rect class="d-gold" x="40" y="78" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="99" text-anchor="middle">The message</text><text class="s" x="170" y="117" text-anchor="middle">a text with a preferred reading</text><path class="d-ink" d="M170 130 L170 146" stroke-width="2" marker-end="url(#e4u5-l2-a)"/><rect class="d-soft" x="40" y="148" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="169" text-anchor="middle">Decoding</text><text class="s" x="170" y="187" text-anchor="middle">viewers’ codes and social position</text><path class="d-ink" d="M110 200 L58 216" stroke-width="2" marker-end="url(#e4u5-l2-a)"/><path class="d-ink" d="M170 200 L170 216" stroke-width="2" marker-end="url(#e4u5-l2-a)"/><path class="d-ink" d="M230 200 L282 216" stroke-width="2" marker-end="url(#e4u5-l2-a)"/><rect class="d-sage" x="4" y="218" width="106" height="52" rx="8" stroke-width="2"/><text x="57" y="240" text-anchor="middle">Dominant</text><text class="s" x="57" y="258" text-anchor="middle">accepts it</text><rect class="d-gold" x="117" y="218" width="106" height="52" rx="8" stroke-width="2"/><text x="170" y="240" text-anchor="middle">Negotiated</text><text class="s" x="170" y="258" text-anchor="middle">accepts, adapts</text><rect class="d-rose" x="230" y="218" width="106" height="52" rx="8" stroke-width="2"/><text x="283" y="240" text-anchor="middle">Oppositional</text><text class="s" x="283" y="258" text-anchor="middle">rejects frame</text><text class="s" x="170" y="292" text-anchor="middle">Decoding does not follow automatically from encoding.</text></svg>', alt:"A flow from encoding (makers’ codes, institutions and values) to the message (a text with a preferred reading) to decoding (viewers’ codes and social position), which branches into three readings: dominant, which accepts the message; negotiated, which accepts and adapts it; and oppositional, which rejects its frame. A note says decoding does not follow automatically from encoding.", cap:"Hall’s encoding/decoding model and its three reading positions."},
      "A **dominant-hegemonic** reading takes the preferred meaning; a [[negotiated-reading|negotiated reading]] accepts it in general but adapts it to local experience; an [[oppositional-reading|oppositional reading]] understands it and rejects its frame. David Morley’s *The ‘Nationwide’ Audience* (1980) tested the model with British viewers from different social groups.",
      {ex:"Tamar Liebes and Elihu Katz’s *The Export of Meaning* (1990) asked whether the American soap *Dallas* spread American values abroad. Small groups of viewers in Israel (Arab Israelis, Moroccan Jews, recent Russian immigrants, kibbutz members) and in Los Angeles retold and judged the episodes very differently: some read it as a moral lesson about family and money, some as capitalist propaganda, some as a formula made by an industry. A related study by Katz, Liebes and a Japanese colleague asked why the series did poorly in Japan. Audiences, they concluded, negotiate imported meanings.", label:"Worked example: one soap, many readings"},
      "Critics note that the three positions are neater than real viewing, which can be distracted, playful or mixed, and that texts can be encoded with several meanings at once."
    ]},
    {h:"Stereotypes and the single story", body:[
      "Walter Lippmann’s *Public Opinion* (1922) described “the pictures in our heads”. A [[stereotype]] (from the sociology primer) is one such picture applied to individuals. Hall’s chapter “The Spectacle of the ‘Other’” (1997) argued that stereotyping reduces people to a few traits, exaggerates and fixes them, and sets up a boundary between “normal” and “other”, usually where power is unequal.",
      "Two resources make this concrete. Jack Shaheen’s *Reel Bad Arabs* (2001; a documentary followed in 2006) surveyed more than 900 Hollywood films with Arab characters and found the great majority negative. In her TED talk “The danger of a single story” (2009; free, about 18 minutes, with a transcript) the Nigerian novelist Chimamanda Ngozi Adichie describes how a single story “creates stereotypes”, and that the problem is not that they are untrue “but that they are incomplete”. Unit 4 met a related idea, [[techno-orientalism]]: Japan pictured as futuristic but cold."
    ]},
    {h:"Orientalism revisited", body:[
      "A one-line reminder: [[orientalism|Orientalism]] is {{edward-said|Edward Said}}’s term, in his 1978 book, for a Western style of thought that built “the Orient” as exotic and backward, bound up with empire ({{postcolonialism-ir}}). In depth, Said used the word in three linked senses: an **academic field**; a **style of thought** based on a basic distinction between “Orient” and “Occident”; and a **corporate institution** for dealing with the Orient, by describing, teaching, settling and ruling it.",
      "Said spoke of **imaginative geography**: dividing the world into “our” space and “their” space, and filling the second with images before anyone has looked closely. He combined Michel Foucault’s idea of [[discourse]] (knowledge and power produce each other) with Antonio Gramsci’s [[hegemony]]. His archive ran from Napoleon’s expedition to Egypt (1798), whose scholars produced the vast *Description de l’Égypte*, to novels, travel writing and policy. In *Culture and Imperialism* (1993) he proposed **contrapuntal reading**: reading a classic such as Jane Austen’s *Mansfield Park* alongside the colonial plantation in Antigua that pays for the English house, a world the novel mentions but keeps offstage.",
      "Scholars soon found the same mechanism elsewhere. V. Y. Mudimbe’s *The Invention of Africa* (1988) traced how European missionaries, explorers and anthropologists built “Africa” as an object of knowledge. Larry Wolff’s *Inventing Eastern Europe* (1994) and Maria Todorova’s *Imagining the Balkans* (1997) showed Western Europeans picturing their own eastern neighbours as half-civilised; Todorova called this **Balkanism** and argued it differs from Orientalism because the Balkans were seen as an incomplete self rather than a distant other. Unit 4 showed Japan both as object and as maker of an Orient."
    ]},
    {h:"Said’s critics, and Occidentalism", body:[
      "*Orientalism* is among the most cited books in the humanities and among the most criticised ({{orientalism-debate}}):",
      {table:[
        ["Critic","Main objection"],
        ["Sadiq Jalal al-Azm (1981)","Said essentialises “the West”; some reverse the binary, an “Orientalism in reverse”"],
        ["Bernard Lewis (1982)","Said misrepresents scholars motivated by curiosity, not empire"],
        ["Aijaz Ahmad (1992)","Said neglects political economy and treats Marx unfairly"],
        ["John MacKenzie (1995)","Orientalist art and music were varied, often admiring"],
        ["Robert Irwin (2006)","Said ignores German and Hungarian scholars, whose states had no empire there"]
      ]},
      "In a 1995 Afterword Said replied that he never claimed there was a “real” Orient to set against false images, and that he opposed all essentialisms, including anti-Western ones.",
      "That leads to [[occidentalism|Occidentalism]], which has two meanings. James Carrier’s edited *Occidentalism: Images of the West* (1995), and Ian Buruma and Avishai Margalit’s *Occidentalism* (2004), describe stereotyped images of “the West”, sometimes hostile. Xiaomei Chen’s *Occidentalism* (1995) showed that in post-Mao China images of the West were used for domestic ends, by the state to warn of decadence and by its critics to argue for change. Fernando Coronil (1996) added that Orientalism itself rests on an Occidentalism: an idealised picture of “the West” as the measure of modernity. Images of the other often tell us most about the home politics of those who make them.",
      {key:"Representation makes meaning through shared codes; power shapes which codes seem natural. Orientalism and Occidentalism show the same mechanism running in both directions."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Orientalism means any Western writing about Asia or the Middle East.”** Said criticised a style of thought, not the act of studying other places. Careful, self-aware scholarship is the aim.",
        "**“A stereotype is harmless if it is positive.”** “Hard-working”, “spiritual” or “naturally musical” still reduce people to a type, and can be used to judge those who do not fit.",
        "**“Encoding/decoding means texts can mean anything.”** Hall insisted the preferred reading carries weight: readings are free, but not equally easy.",
        "**“Semiotics is only about adverts.”** Flags, maps, uniforms, summit photographs and the names of places are all signs that IR scholars read."
      ]},
      {terms:["representation-hall","semiotics","signifier-signified","connotation","myth-barthes","encoding-decoding","preferred-reading","negotiated-reading","oppositional-reading","techno-orientalism","occidentalism"]}
    ]}
   ],
   try:[
    {id:"e4u5-l2-x1", type:"match", q:"Match each statement to Hall’s approach to representation.", pairs:[
      ["“A photo of a mountain simply shows the mountain as it is.”","Reflective","Meaning is assumed to lie in the object and to be mirrored."],
      ["“The poem means whatever its author meant by it.”","Intentional","Meaning is located in the author’s intention."],
      ["“A white dress signals a wedding in some places and mourning in others.”","Constructionist","Meaning depends on shared, changeable codes."]
    ]},
    {id:"e4u5-l2-x2", type:"mcq", q:"An airline advert shows a smiling flight attendant in national dress bowing to a passenger. In Barthes’ terms, which is the connotation, or myth?", options:[
      {t:"That the airline, and the nation, offer timeless, gracious hospitality", ok:true, why:"Right. The second-order meaning, felt as natural, is about the nation’s character and the brand."},
      {t:"That a woman in a dress is bowing", why:"That is the denotation, the first-level meaning of the image."},
      {t:"That the photo is made of pixels or ink", why:"That is the material signifier, not a meaning at either level."},
      {t:"That the advert is false advertising", why:"A myth in Barthes’ sense is not a lie; it is a meaning that hides its history."}
    ]},
    {id:"e4u5-l2-x3", type:"sort", q:"A state broadcaster’s report presents a new dam as national progress. Which reading position does each viewer take?", buckets:["Dominant","Negotiated","Oppositional"], items:[
      {t:"Ana feels proud: the dam proves the country is modernising.", b:0, why:"She takes the preferred meaning as intended."},
      {t:"Kenji agrees it is progress but thinks his village should get more of the electricity.", b:1, why:"He accepts the frame but adapts it to his own situation."},
      {t:"Fatima sees the report as propaganda that hides the families displaced by the reservoir.", b:2, why:"She understands the frame and rejects it from another position."},
      {t:"Sione supports the dam but says the fishing villages downstream were not consulted and should be compensated.", b:1, why:"He accepts the frame of progress but adapts it to his community’s situation: a negotiated reading."},
      {t:"Mei, an environmental campaigner, calls the report spin and argues the country should never have built the dam.", b:2, why:"She rejects the frame of progress and reads the report within an alternative framework."}
    ]},
    {id:"e4u5-l2-x4", type:"mcq", q:"What did Liebes and Katz’s study of *Dallas* (1990) most directly challenge?", options:[
      {t:"The assumption that imported television automatically spreads the exporter’s values", ok:true, why:"Right. Viewers from different groups negotiated and reworked the show’s meanings."},
      {t:"The idea that people watch television at all", why:"Their groups watched closely; the issue was how they read it."},
      {t:"The claim that American shows were exported", why:"Export was the starting fact; the question was what it did."},
      {t:"Hall’s idea that audiences decode from social positions", why:"Their findings support Hall’s point that decoding depends on position."}
    ]},
    {id:"e4u5-l2-x5", type:"match", q:"Match each critic of *Orientalism* to their objection.", pairs:[
      ["Sadiq Jalal al-Azm","An “Orientalism in reverse” that essentialises the West","Al-Azm (1981) warned that Said’s critique can flip into a mirror-image binary."],
      ["Bernard Lewis","Scholars were driven by curiosity, not empire","Lewis (1982) defended the intentions and quality of Orientalist scholarship."],
      ["Aijaz Ahmad","Too little political economy, unfair to Marx","Ahmad (1992) criticised Said from a Marxist position."],
      ["Robert Irwin","German and Hungarian scholars are missing","Irwin (2006) noted that leading scholars came from states with no empire in the region."]
    ]},
    {id:"e4u5-l2-x6", type:"spot", q:"Tap the Orientalist moves in this travel-magazine paragraph about a market city.", ask:"Orientalist trope", parts:[
      "“",{t:"Time stands still",flag:true,why:"Presents the place as timeless and outside history, a classic Orientalist move."}," in the old souk, where ",{t:"the mysterious East",flag:true,why:"A vague, exotic “East” replaces a real city with a type."}," reveals itself to the traveller. ",{t:"The market is open daily from 8 a.m.",flag:false,why:"A practical, checkable fact is fine."},", and ",{t:"its veiled women seem to belong to another century",flag:true,why:"Treats local people as relics, exotic and unchanged, rather than as contemporaries."},". ",{t:"Traders now take mobile payments",flag:false,why:"A specific, current detail treats the city as part of the present."},".”"
    ]},
    {id:"e4u5-l2-x7", type:"mcq", q:"In Xiaomei Chen’s sense of Occidentalism (1995), what were images of “the West” used for in post-Mao China?", options:[
      {t:"Domestic political arguments, by the state and by its critics", ok:true, why:"Right. The official version warned of Western decadence; critics used the West as a model for change."},
      {t:"Accurate scientific descriptions of Western societies", why:"Her point is that these were images serving home politics, not neutral descriptions."},
      {t:"Only advertising foreign products", why:"Her study is about politics and literature, not mainly advertising."},
      {t:"Planning military campaigns", why:"The images worked in domestic cultural politics, not war planning."}
    ]}
   ],
   apply:{intro:"Read images and stories critically. Use public material; no one is observed or recorded.", tasks:[
    {t:"Decode an image at two levels", how:["Choose one public image: an advert, a tourism poster or a news front page from any country.","Describe its denotation: what is literally shown.","Describe its connotation or myth: what it suggests about a nation, a group or a way of life, and why that feels natural."], write:"The image… Denotation… Connotation… The myth… What it hides…"},
    {t:"Three readings of one clip", how:["Pick a short official video or news clip on an international story.","Write its preferred reading in one sentence.","Write a plausible dominant, negotiated and oppositional reading, naming who might hold each."], write:"Clip… Preferred reading… Dominant… Negotiated… Oppositional…"},
    {t:"A single story", how:["Watch Chimamanda Ngozi Adichie’s TED talk “The danger of a single story” (free on ted.com, about 18 minutes; a transcript is available).","List two single stories you have heard about a place or people, one about your own region and one about another.","For each, note one fact or voice that makes the story more complete."], write:"Single story 1… What completes it… Single story 2… What completes it…"},
    {t:"Seminar questions", how:["Does Said’s *Orientalism* explain how empires worked, or only how they were imagined?","Is Occidentalism the mirror image of Orientalism, or something different because power is unequal?","Can audiences resist any message, or do some encodings close down other readings?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes decoding one image at two levels, three readings of one clip, two single stories made more complete, and a seminar paragraph."},
   read:[
    {book:"oanth", where:"Chapter 15, Sections 15.2 “Putting Culture into Media Studies” and 15.4 “Photography, Representation, and Memory”", note:"How an anthropologist studies media in everyday life, and how photographs represent people and remember the past."},
    {book:"soc", where:"Chapter 3, Section 3.2 “Elements of Culture” (Symbols and Language)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u5-l3", title:"Cultural globalisation: one culture, many, or mixtures?", minutes:65,
   hook:{q:"Where is the term “Korean Wave” (Hallyu) usually said to have first appeared?", options:["A South Korean government campaign of 2008","A Beijing newspaper in November 1999, describing Chinese audiences’ zeal for Korean dramas and songs","A Japanese TV network’s 2004 advertising slogan","An American music magazine’s review of “Gangnam Style” in 2012"], answer:1, reveal:"**Chinese media, 1999.** The first known use usually cited is in the *Beijing Youth Daily* of 19 November 1999, alongside other phrases such as “Korean heat”. The name for one of the biggest cultural flows of our time seems to have been coined at the receiving end, not by the senders. That small fact unsettles the oldest story about cultural globalisation, that culture flows one way, from the West to the rest. This lesson compares that story with its rivals."},
   goals:[
     "Compare three accounts of cultural globalisation: lasting difference, convergence and hybridisation",
     "Explain the cultural and media imperialism thesis and Tomlinson’s critique, with evidence on audiences and localisation",
     "Use glocalisation, grobalisation and cultural proximity to analyse a global brand or format",
     "Apply Appadurai’s five scapes and explain disjuncture and its critics",
     "Discuss hybridity (Bhabha, García Canclini) and contra-flows from Asia, Africa and Latin America"
   ],
   learn:[
    {h:"Three stories about global culture", body:[
      {lead:"Will global media and trade make the world’s cultures more alike, keep them apart, or mix them? Each answer has a school behind it."},
      "The sociologist Jan Nederveen Pieterse (*Globalization and Culture: Global Mélange*, 2004) sorted the debate into three paradigms ({{cultural-globalization}}):",
      {fig:'<svg viewBox="0 0 340 318"><defs><marker id="e4u5-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-rose" x="8" y="8" width="324" height="94" rx="8" stroke-width="2"/><circle class="d-panel" cx="34" cy="55" r="14" stroke-width="2"/><circle class="d-panel" cx="72" cy="55" r="14" stroke-width="2"/><circle class="d-panel" cx="110" cy="55" r="14" stroke-width="2"/><text x="232" y="44" text-anchor="middle">Lasting difference</text><text class="s" x="232" y="64" text-anchor="middle">cultures stay apart, may clash</text><text class="s" x="232" y="82" text-anchor="middle">e.g. Huntington</text><rect class="d-gold" x="8" y="112" width="324" height="94" rx="8" stroke-width="2"/><circle class="d-panel" cx="26" cy="139" r="9" stroke-width="2"/><circle class="d-panel" cx="26" cy="179" r="9" stroke-width="2"/><circle class="d-panel" cx="88" cy="159" r="22" stroke-width="2"/><path class="d-ink" d="M36 143 L64 153" stroke-width="2" marker-end="url(#e4u5-l3-a)"/><path class="d-ink" d="M36 175 L64 165" stroke-width="2" marker-end="url(#e4u5-l3-a)"/><text x="232" y="148" text-anchor="middle">Convergence</text><text class="s" x="232" y="168" text-anchor="middle">cultures become alike</text><text class="s" x="232" y="186" text-anchor="middle">e.g. Ritzer, Schiller</text><rect class="d-sage" x="8" y="216" width="324" height="94" rx="8" stroke-width="2"/><circle class="d-panel" cx="56" cy="263" r="24" stroke-width="2"/><circle class="d-panel" cx="88" cy="263" r="24" stroke-width="2"/><text x="232" y="252" text-anchor="middle">Hybridisation</text><text class="s" x="232" y="272" text-anchor="middle">cultures mix into new forms</text><text class="s" x="232" y="290" text-anchor="middle">e.g. Bhabha, García Canclini</text></svg>', alt:"Three panels. Lasting difference: three separate circles; cultures stay apart and may clash, for example Huntington. Convergence: two small circles with arrows into one larger circle; cultures become alike, for example Ritzer and Schiller. Hybridisation: two overlapping circles; cultures mix into new forms, for example Bhabha and García Canclini.", cap:"Pieterse’s three paradigms of cultural globalisation (2004)."},
      "The first links to Huntington’s [[clash-of-civilizations|clash of civilisations]] (Unit 1; Unit 6 goes deeper). The second includes Ritzer’s [[mcdonaldization|McDonaldization]] from the sociology primer. This lesson weighs the second and third."
    ]},
    {h:"Homogenisation and media imperialism", body:[
      "The convergence story has a political version. Herbert Schiller’s *Mass Communications and American Empire* (1969) and *Communication and Cultural Domination* (1976) argued that US broadcasting, advertising and military communications spread a commercial culture serving American power. Ariel Dorfman and Armand Mattelart’s *Para leer al Pato Donald* (Chile, 1971; *How to Read Donald Duck*, 1975) read Disney comics as teaching Latin American children consumer and colonial values. Written under Salvador Allende’s socialist government, the book was banned and copies were destroyed after the 1973 military coup, and Dorfman went into exile. Jeremy Tunstall’s *The Media Are American* (1977) documented the flows.",
      "This is [[media-imperialism|media imperialism]], a version of the [[cultural-imperialism|cultural imperialism]] you met in the primer, but working through markets rather than colonial decrees, and it predicts [[cultural-homogenization|cultural homogenisation]]. It shaped diplomacy: many newly independent states pressed at UNESCO for a New World Information and Communication Order, and UNESCO’s MacBride Commission reported in 1980 (*Many Voices, One World*). Critics, led by the United States, defended the “free flow” of information, and the dispute was among the reasons the US left UNESCO at the end of 1984 and the UK at the end of 1985. (The UK rejoined in 1997. The US rejoined in 2003, left again at the end of 2018 and rejoined in 2023; as of November 2026 it has given notice, announced in July 2025, that it will leave again on 31 December 2026.)"
    ]},
    {h:"The critique: audiences, localisation and proximity", body:[
      "John Tomlinson’s *Cultural Imperialism* (1991) took the thesis apart. It assumed that audiences absorb what they watch (the *Dallas* study in Lesson 2 suggests otherwise); it assumed that each nation has an authentic culture to be lost; and it often blamed “America” for what is better described as the spread of capitalism and modernity. In *Globalization and Culture* (1999) he described [[deterritorialization|deterritorialisation]]: culture loosening its tie to place.",
      "Two research findings followed. Joseph Straubhaar (1991) found that audiences in Brazil and elsewhere tended to prefer national programmes first, then regional ones, a pattern he called [[cultural-proximity|cultural proximity]]. And James Watson’s *Golden Arches East* (1997) studied McDonald’s in Beijing, Hong Kong, Taipei, Seoul and Tokyo. In Hong Kong, teenagers turned branches into after-school clubs and older residents gathered for breakfast; in Beijing, parents treated a visit as a lesson in modern life. Watson argued that local customers changed McDonald’s as much as it changed them.",
      "George Ritzer answered with [[grobalization|grobalisation]] (*The Globalization of Nothing*, 2004): the push of large companies and states to impose themselves worldwide, which local adaptation can soften but not reverse.",
      "The debate has moved to platforms. Dal Yong Jin’s *Digital Platforms, Imperialism and Political Culture* (2015) argued that a few platform companies, most of them American and some Chinese, now control the channels through which everyone’s culture travels, a **platform imperialism** in which content may come from Seoul or Lagos but data, advertising revenue and rules flow to the platform. Others reply that the same platforms let small creators reach the world. Unit 7 looks at platform governance."
    ]},
    {h:"Glocalisation and the scapes", body:[
      "A reminder from the primer: [[glocalization|glocalisation]] means the global adapted to the local, and local culture reaching global audiences. Roland Robertson took the word from Japanese business talk of the 1980s, where *dochakuka*, a farming term for adapting methods to local soil, meant tailoring global products to local markets. For Robertson (1992, 1995) the global and the local are not opposites: universal and particular trends happen together, and the same company can be global and local at once. Fast-food chains add rice dishes in China and vegetarian menus in India, and television formats work the same way: one licensed quiz show or talent contest is remade with local hosts and jokes in dozens of countries.",
      "{{arjun-appadurai|Arjun Appadurai}}’s essay “Disjuncture and Difference in the Global Cultural Economy” (1990), expanded in *Modernity at Large* (1996), offered a vocabulary of five [[scapes]], landscapes of flow that look different from every vantage point:",
      {table:[
        ["Scape","What flows","Example"],
        ["Ethnoscapes","People","Nepali workers in Qatar; students in Melbourne"],
        ["Mediascapes","Images and stories","K-dramas streamed in Lima"],
        ["Technoscapes","Technology","Mobile networks reaching rural areas"],
        ["Financescapes","Money","Remittances; currency markets"],
        ["Ideoscapes","Political ideas","“Democracy”, “rights”, “sovereignty”"]
      ]},
      "His key word is **disjuncture**: the scapes move at different speeds and in different directions, so the result is neither one world culture nor fixed national ones. He also stressed the imagination as a social practice: people everywhere picture possible lives through media, and migrants, workers and refugees act on those pictures. Critics call the scapes metaphors that are hard to test, and Anna Tsing’s *Friction* (2005), on Indonesian forests, showed that global flows also get stuck, resisted and reshaped where they touch the ground."
    ]},
    {h:"Hybridity", body:[
      "[[hybridity|Hybridity]] means mixture that produces something new ({{hybridity-theory}}). Homi Bhabha’s *The Location of Culture* (1994) used it to show that colonial culture was never pure. In his essay on [[colonial-mimicry|mimicry]] (1984) the colonised subject trained to copy the coloniser is “almost the same, but not quite”, and that gap mocks colonial authority. Meaning is negotiated in a [[third-space|“Third Space”]] between cultures.",
      "Néstor García Canclini’s *Culturas híbridas* (1989; *Hybrid Cultures*, 1995) studied Mexico and Latin America, where indigenous crafts, Catholic ritual, mass media and art markets mix: border cities such as Tijuana are his laboratory. K-pop is a much-studied case: its sound draws on American R&B and hip-hop, its training system resembles Japan’s idol industry, and its lyrics mix Korean and English, yet it is marketed as distinctly Korean. Critics warn that “hybridity” assumes there were once pure cultures to mix, that it can sound like celebration while ignoring who profits, and that marketers now sell it (Marwan Kraidy, *Hybridity, or the Cultural Logic of Globalization*, 2005)."
    ]},
    {h:"Flows from many centres", body:[
      "Daya Thussu (*Media on the Move*, 2007) described [[contra-flow|contra-flows]]: media that travel from outside the old Western centres. Some cases you can go and look at:",
      {list:[
        "**Anime and games from Japan.** Iwabuchi Kōichi (Unit 4) noted that many exports sold because they seemed [[cultural-odour|culturally “odourless”]], not obviously Japanese.",
        "**The Korean Wave.** Korean dramas reached Chinese viewers in the late 1990s; *Winter Sonata* reached Japan in 2003–04; “Gangnam Style” became the first YouTube video with a billion views in December 2012. Unit 8 covers [[hallyu|Hallyu]] as policy ({{korean-wave}}).",
        "**Indian cinema.** [[bollywood|Bollywood]] is the Hindi-language industry of Mumbai. Raj Kapoor’s *Awaara* (1951) drew huge audiences in the Soviet Union, China and Turkey in the 1950s. Indian cinema is wider than Bollywood: the Telugu film *RRR* (2022) won an Oscar for its song “Naatu Naatu”.",
        "**[[nollywood|Nollywood]].** Nigeria’s industry grew from direct-to-video films such as *Living in Bondage* (1992) and now reaches audiences across Africa and the diaspora, increasingly on YouTube and streaming services.",
        "**[[telenovela|Telenovelas]].** Brazil’s *Escrava Isaura* (1976), a drama about slavery in 19th-century Brazil, was a hit in China and Poland in the mid-1980s; Mexico’s *Los ricos también lloran* (1979) was a sensation in Russia in the early 1990s."
      ]},
      {key:"Global culture is neither simply American nor simply local. Ask who produces a flow, who adapts it, who profits and who is left out."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Popularity abroad means influence abroad.”** Watching a country’s dramas does not mean adopting its politics; Unit 8 looks at how hard [[soft-power|soft power]] is to prove.",
        "**“Local versions are authentic, global ones fake.”** Most “local” traditions also mixed earlier borrowings: chillies reached Asian cooking from the Americas.",
        "**“Contra-flows end inequality.”** Hits from Seoul or Lagos still often travel through platforms and distributors owned elsewhere.",
        "**“Hybridity is always progressive.”** Mixing can be imposed, sold or used to hide unequal exchange."
      ]},
      {terms:["media-imperialism","cultural-homogenization","deterritorialization","cultural-proximity","grobalization","scapes","hybridity","colonial-mimicry","third-space","contra-flow","cultural-odour","bollywood","nollywood","telenovela"]}
    ]}
   ],
   try:[
    {id:"e4u5-l3-x1", type:"sort", q:"Which of Pieterse’s three paradigms does each claim belong to?", buckets:["Lasting difference","Convergence","Hybridisation"], items:[
      {t:"“Global brands and formats are making shopping streets look the same everywhere.”", b:1, why:"Growing sameness is the convergence story."},
      {t:"“Religious civilisations will remain distinct blocs, and their borders are where conflict happens.”", b:0, why:"Durable, separate civilisations is Huntington’s lasting-difference view."},
      {t:"“Afrobeats mixes West African rhythms, hip-hop and Caribbean dancehall into something new.”", b:2, why:"Mixing that produces a new form is hybridisation."},
      {t:"“Fast-food principles of efficiency and control are spreading into schools and hospitals.”", b:1, why:"Ritzer’s McDonaldization predicts convergence."},
      {t:"“Mexican border cities produce art that is neither simply Mexican nor American.”", b:2, why:"García Canclini’s hybrid cultures."}
    ]},
    {id:"e4u5-l3-x2", type:"mcq", q:"Which point is part of Tomlinson’s critique of the cultural imperialism thesis (1991)?", options:[
      {t:"It assumes audiences passively absorb what they watch and that nations have authentic cultures to lose", ok:true, why:"Right. Tomlinson questioned both the passive audience and the idea of a pure national culture."},
      {t:"It exaggerates how many American films are exported", why:"His critique was conceptual, about what the flows mean, not mainly about the size of exports."},
      {t:"It ignores the power of military alliances", why:"The thesis already stressed links to US power; Tomlinson’s concern was culture and audiences."},
      {t:"It proves that culture never travels", why:"Tomlinson accepted that culture travels; he questioned what that does."}
    ]},
    {id:"e4u5-l3-x3", type:"match", q:"Match each example to Appadurai’s scape.", pairs:[
      ["Filipino nurses working in hospitals in the Gulf","Ethnoscape","Flows of people."],
      ["A Turkish drama dubbed into Arabic and Spanish","Mediascape","Flows of images and stories."],
      ["Mobile-phone networks and apps reaching remote villages","Technoscape","Flows of technology."],
      ["Money sent home to families in Tajikistan","Financescape","Flows of money."],
      ["Protest movements borrowing the language of “human rights”","Ideoscape","Flows of political ideas."]
    ]},
    {id:"e4u5-l3-x4", type:"mcq", q:"A streaming service finds that viewers in Chile watch Chilean series most, then Argentine and Mexican series, and US series least. Which idea fits best?", options:[
      {t:"Cultural proximity (Straubhaar)", ok:true, why:"Right. Audiences tend to prefer national, then regional or same-language content."},
      {t:"Media imperialism (Schiller)", why:"Media imperialism would predict US content dominating viewing."},
      {t:"Colonial mimicry (Bhabha)", why:"Mimicry concerns the colonised copying the coloniser, not viewing preferences."},
      {t:"Grobalisation (Ritzer)", why:"Grobalisation stresses large organisations imposing themselves, not audience preference for nearby content."}
    ]},
    {id:"e4u5-l3-x5", type:"mcq", q:"Watson’s *Golden Arches East* (1997) found Hong Kong teenagers using McDonald’s as an after-school club. What did Watson conclude?", options:[
      {t:"Local customers reshaped McDonald’s as much as it reshaped them", ok:true, why:"Right. Watson stressed localisation, a two-way process."},
      {t:"McDonald’s had erased Hong Kong food culture", why:"That is the homogenisation claim his evidence complicated."},
      {t:"Fast food was rejected in East Asia", why:"The restaurants were popular; the point is how they were used."},
      {t:"Only the menu changed, never the use of space", why:"His key examples were about how people used the space, not only food."}
    ]},
    {id:"e4u5-l3-x6", type:"order", q:"Put these moments in the Korean Wave in chronological order.", items:[
      {t:"Korean TV dramas broadcast in China win large audiences", why:"Late 1990s: the wave starts in China."},
      {t:"Chinese newspapers use the term “Korean Wave”", why:"1999; the first known use usually cited is November 1999."},
      {t:"*Winter Sonata* airs in Japan", why:"2003–04."},
      {t:"“Gangnam Style” becomes the first YouTube video with a billion views", why:"December 2012."},
      {t:"*Parasite* wins the Oscar for Best Picture", why:"February 2020, the first non-English-language film to win it."}
    ]},
    {id:"e4u5-l3-x7", type:"spot", q:"Tap the weak claims in this student paragraph on global culture.", ask:"unsupported or one-sided", parts:[
      "“",{t:"Globalisation is simply Americanisation",flag:true,why:"Ignores contra-flows such as K-pop, Nollywood and telenovelas."},". ",{t:"Watson’s study (1997) found McDonald’s localised in five East Asian cities",flag:false,why:"A correctly cited finding is fine."},", but ",{t:"this proves that local cultures always win",flag:true,why:"Overgeneralises from one study and ignores Ritzer’s grobalisation reply."},". ",{t:"Appadurai (1990) describes five scapes that move at different speeds",flag:false,why:"An accurate summary."},", so ",{t:"in a few decades there will be no national cultures left",flag:true,why:"A confident prediction that Appadurai’s idea of disjuncture does not support."},".”"
    ]}
   ],
   apply:{intro:"Follow culture across borders, using free official sources and channels.", tasks:[
    {t:"Trace one product through the scapes", how:["Choose a cultural product you like: a song, a series, a game, a dish.","Trace it through as many of the five scapes as you can: who made it, which technologies carried it, what money flows around it, which ideas it carries, which people move with it.","Note one disjuncture: where two scapes pull in different directions."], write:"Product… Ethno… Media… Techno… Finance… Ideo… A disjuncture…"},
    {t:"Glocalisation check", how:["Pick one global brand or TV format and open its official sites or channels for two countries in different regions.","List what stays the same and what changes: names, menus, hosts, humour, holidays.","Decide whether the case looks more like glocalisation or grobalisation, and why."], write:"Brand or format… Country A… Country B… Same… Changed… My verdict…"},
    {t:"A contra-flow watchlist", how:["From an official channel or streaming service, watch one trailer or episode from an industry outside your own region: Nollywood, a Turkish drama, a telenovela, Indian cinema, a K-drama or anime.","Note what feels familiar and what feels unfamiliar, and why."], write:"What I watched (title, channel)… Familiar… Unfamiliar… Cultural proximity or distance?…"},
    {t:"Seminar questions", how:["Is the cultural imperialism thesis outdated in the age of K-pop, or has it just changed form (for example, through platforms)?","Does “hybridity” describe the world better than “homogenisation”, or does it hide inequality?","Are Appadurai’s scapes a theory, or a vocabulary?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes tracing one product through the scapes, a two-country glocalisation comparison, a contra-flow viewing note and a seminar paragraph."},
   read:[
    {book:"soc", where:"Chapter 3, Section 3.3 “High, Low, Pop, Sub, Counter-culture and Cultural Change”", note:"The primer’s vocabulary of diffusion and globalisation, which this lesson deepens."},
    {book:"oanth", where:"Chapter 15, Sections 15.7 “Broadcasting Modernity and National Identity” and 15.8 “Digital Media, New Socialities”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u5-l4", title:"Taste, capital and the citizens of the world", minutes:60,
   hook:{q:"At the end of the twentieth century the International Sociological Association asked its members to name the century’s most important sociology books. Where did Pierre Bourdieu’s *Distinction*, a study of French taste in music, food and furniture, come?", options:["First","Sixth","Twenty-fifth","It was not listed"], answer:1, reveal:"**Sixth.** A book about which paintings, dishes and radio stations people liked became one of the most influential works of social science, because Bourdieu showed that taste is not only personal: it sorts people into classes and helps keep them there. This lesson takes his tools (capital, habitus, field) into world politics, then asks whether being a “citizen of the world” is an ethical ideal, a class privilege, or both."},
   goals:[
     "Explain Bourdieu’s economic, cultural, social and symbolic capital, and the three states of cultural capital",
     "Use habitus, field and symbolic violence to analyse a case, including fields of diplomacy and security",
     "Assess the main critiques of Bourdieu, including the cultural omnivore and cross-national comparison",
     "Trace cosmopolitanism from the Stoics and Kant to Beck and Appiah",
     "Weigh the critics who call cosmopolitanism a view from above, and the “vernacular” cosmopolitanisms they propose"
   ],
   learn:[
    {h:"Why your playlist is sociology", body:[
      {lead:"Taste feels like the most personal thing about us. Bourdieu argued it is one of the most social."},
      "{{pierre-bourdieu|Pierre Bourdieu}} (1930–2002) grew up in a village in south-west France, did fieldwork in Algeria during its war of independence, and became one of the most cited social scientists in the world. *La Distinction* (1979; *Distinction: A Social Critique of the Judgement of Taste*, 1984) drew on surveys of French people in the 1960s about music, art, food, clothes and interiors.",
      "He found that preferences lined up with class and education. Those with long schooling favoured “difficult” music and abstract art and spoke about form; others valued what was useful, generous or fun. His famous line: “Taste classifies, and it classifies the classifier.” When you judge a dish or a song, you place yourself, and others place you."
    ]},
    {h:"Four kinds of capital", body:[
      "A reminder: [[cultural-capital|cultural capital]] (from the primer) is the knowledge, manners and tastes that schools and elites reward. In “The Forms of Capital” (1983 in German; English 1986) Bourdieu set out three main forms of capital that people invest and convert, economic, cultural and social, and elsewhere added a fourth, symbolic capital ({{forms-of-capital}}):",
      {table:[
        ["Capital","What it is","Example"],
        ["Economic","Money and property","Savings, land, a business"],
        ["Cultural","Knowledge, skills, tastes, diplomas","Fluent academic English"],
        ["Social","Useful networks and memberships","An alumni network"],
        ["Symbolic","Prestige when others recognise capital","A famous title or prize"]
      ]},
      "Cultural capital comes in three states: **embodied** (accent, manners, ease with ideas, built over years), **objectified** (books, instruments, paintings) and **institutionalised** (degrees and certificates). [[social-capital|Social capital]] matters everywhere; words such as *guanxi* in Chinese or *wasta* in Arabic name kinds of useful connection, and scholars debate how far they differ from the general concept. [[symbolic-capital|Symbolic capital]] is any capital once it is recognised as legitimate: honour, reputation, authority.",
      "Capitals **convert**. Money buys schooling (economic to cultural); a degree opens a job (cultural to economic); friends from school open doors (social to economic). Conversion takes time and is uneven, which is how advantage passes between generations."
    ]},
    {h:"Habitus, field and the feel for the game", body:[
      "[[habitus|Habitus]] is Bourdieu’s word for the lasting dispositions people absorb from their upbringing: ways of standing, speaking, judging and hoping that feel natural. Think of a skilled footballer who knows where the ball will go without thinking: a **feel for the game**.",
      "A [[field-bourdieu|field]] is a social arena with its own stakes and rules, such as art, academia, journalism, business or diplomacy. Players compete for the capital the field values, and newcomers whose habitus fits the field feel at ease while others feel out of place.",
      {fig:'<svg viewBox="0 0 340 310"><defs><marker id="e4u5-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="170" y="14" text-anchor="middle">Most total capital</text><path class="d-ink" d="M170 24 L170 284" stroke-width="2" marker-start="url(#e4u5-l4-a)" marker-end="url(#e4u5-l4-a)"/><path class="d-ink" d="M14 150 L326 150" stroke-width="2" marker-start="url(#e4u5-l4-a)" marker-end="url(#e4u5-l4-a)"/><rect class="d-lup" x="22" y="38" width="132" height="46" rx="8" stroke-width="2"/><text x="88" y="58" text-anchor="middle">Professors,</text><text class="s" x="88" y="75" text-anchor="middle">artists</text><rect class="d-gold" x="186" y="38" width="132" height="46" rx="8" stroke-width="2"/><text x="252" y="58" text-anchor="middle">Executives,</text><text class="s" x="252" y="75" text-anchor="middle">business owners</text><text class="s" x="18" y="170">more cultural</text><text class="s" x="322" y="170" text-anchor="end">more economic</text><rect class="d-lup" x="22" y="184" width="132" height="46" rx="8" stroke-width="2"/><text x="88" y="204" text-anchor="middle">Teachers,</text><text class="s" x="88" y="221" text-anchor="middle">librarians</text><rect class="d-gold" x="186" y="184" width="132" height="46" rx="8" stroke-width="2"/><text x="252" y="204" text-anchor="middle">Shopkeepers,</text><text class="s" x="252" y="221" text-anchor="middle">small traders</text><rect class="d-soft" x="100" y="242" width="140" height="40" rx="8" stroke-width="2"/><text x="170" y="267" text-anchor="middle">Manual workers</text><text class="s" x="170" y="302" text-anchor="middle">Least total capital</text></svg>', alt:"A social space with two axes. The vertical axis runs from least total capital at the bottom to most at the top. The horizontal axis runs from more cultural capital on the left to more economic capital on the right. Professors and artists are top left; executives and business owners top right; teachers and librarians lower left; shopkeepers and small traders lower right; manual workers at the bottom centre.", cap:"A simplified version of Bourdieu’s social space in *Distinction* (1979). Tastes cluster by position."},
      "When the dominated come to see their own position as natural or deserved, Bourdieu calls it [[symbolic-violence|symbolic violence]]: domination that works through accepted categories rather than force, as when a pupil with a regional accent concludes she is “not clever”."
    ]},
    {h:"Bourdieu in world politics", body:[
      "IR scholars took these tools abroad. Vincent Pouliot’s *International Security in Practice* (2010) studied NATO–Russia diplomacy after the Cold War and argued that diplomats’ habitus, their sense of their own country’s rank, shaped what cooperation seemed possible. Rebecca Adler-Nissen edited *Bourdieu in International Relations* (2013). The Paris School of security studies (Unit 2) treats border and police agencies as a transnational **field** of security professionals competing over who defines threats. This is the [[practice-turn|practice turn]] from Unit 3.",
      "Bourdieu’s ideas also explain global inequality in education. International schooling, academic English, study abroad and an ease with foreign cultures are forms of **transnational cultural capital** that families invest in, and that some employers and universities reward. Sociologists such as Hiroki Igarashi and Hiro Saito (2014) argue that “cosmopolitan” openness itself works as cultural capital.",
      {ex:"Lucía, from Lima, and Oluwaseun, from Ibadan, join the same international organisation. Both have master’s degrees (institutionalised capital). Lucía went to an international school and has the relaxed, joking style of meetings in Geneva (embodied capital); Oluwaseun learned it on the job. A colleague with family ties to senior staff gets the first informal briefings (social capital). In Bourdieu’s terms, the field rewards capitals that look like personal merit.", label:"Worked example: two newcomers in one field"}
    ]},
    {h:"The critics", body:[
      "Michèle Lamont’s *Money, Morals, and Manners* (1992) compared upper-middle-class men in France and the United States and found that Americans drew **moral** and **economic** boundaries more than cultural ones: Bourdieu’s France was not everywhere. Richard Peterson and Roger Kern (1996) found that high-status Americans had become [[cultural-omnivore|cultural omnivores]] who like opera **and** country music; distinction now lies in breadth. A British team (Tony Bennett and others, *Culture, Class, Distinction*, 2009) found omnivores too, alongside class differences.",
      "Others say habitus makes people too predictable and change too hard to explain, that the model was built on 1960s France, and that gender, race and migration need more room. Defenders reply that habitus is durable but not fixed, and that the tools travel best when re-tested in each society."
    ]},
    {h:"Cosmopolitanism: an old ideal", body:[
      "Asked where he came from, the Greek philosopher Diogenes is said to have replied that he was a *kosmopolitēs*, a “citizen of the world”. The Stoics taught that each person belongs to two communities, the local one of birth and the human one. Immanuel Kant’s *Perpetual Peace* (1795) proposed a **cosmopolitan right** to hospitality: a stranger arriving peacefully should not be treated as an enemy.",
      "Modern [[cosmopolitanism]] has several strands ({{cosmopolitanism-debate}}). **Moral**: every person has equal worth, wherever they live (Martha Nussbaum, “Patriotism and Cosmopolitanism”, 1994). **Political**: institutions beyond the state, such as David Held’s cosmopolitan democracy (1995). **Cultural**: openness to other ways of life, which Ulf Hannerz (1990) described as a willingness to engage with the other.",
      "The sociologist Ulrich Beck (*The Cosmopolitan Vision*, 2006; German 2004) distinguished cosmopolitanism as an ideal from **cosmopolitanisation** as a fact: risks such as climate change and flows of goods and people tie lives together whether we like it or not. Much of it is [[banal-cosmopolitanism|banal cosmopolitanism]], everyday mixing such as eating dishes from three continents in a week. He urged social scientists to drop [[methodological-nationalism|methodological nationalism]], the habit of treating the nation-state as the natural container of society.",
      "The philosopher Kwame Anthony Appiah, raised in Ghana and Britain, offered a [[rooted-cosmopolitanism|rooted cosmopolitanism]] in *The Ethics of Identity* (2005) and *Cosmopolitanism: Ethics in a World of Strangers* (2006): obligations to strangers alongside loyalty to one’s own people, and respect for legitimate difference. His model is conversation: people can live together without first agreeing on everything."
    ]},
    {h:"Cosmopolitan for whom?", body:[
      "Craig Calhoun’s essay “The Class Consciousness of Frequent Travelers” (2002) argued that much cosmopolitan theory reflects the outlook of mobile elites who can afford to feel at home everywhere, and undervalues the solidarity of nations and local communities, which matter most to people with fewer options. Some nationalist and communitarian thinkers make a similar case from different premises.",
      "Postcolonial and anthropological scholars widened the concept instead. James Clifford (1992) wrote of **discrepant cosmopolitanisms**, and Sheldon Pollock, Homi Bhabha, Carol Breckenridge and Dipesh Chakrabarty (2000) of plural cosmopolitanisms, including those of migrant workers, traders and refugees who live between languages from necessity, not choice. Seen through Bourdieu, the question is which forms of openness count as capital, and whose do not.",
      {list:[
        "**Misconception: “Bourdieu says the poor have no culture.”** He argued the opposite: every group has culture, but schools and elites reward some forms as “legitimate”.",
        "**Misconception: “Capital is just a metaphor for money.”** The point is that cultural and social resources can be accumulated, inherited and converted, like money, but by different rules.",
        "**Misconception: “Cosmopolitans have no roots.”** Appiah, Clifford and others describe people with strong local ties who are also open to the world."
      ]},
      {key:"Taste and openness are not only personal virtues. Bourdieu shows how they become capital; the cosmopolitanism debate asks who gets to be a citizen of the world, and on what terms."},
      {terms:["social-capital","symbolic-capital","habitus","field-bourdieu","symbolic-violence","cultural-omnivore","cosmopolitanism","banal-cosmopolitanism","rooted-cosmopolitanism"]}
    ]}
   ],
   try:[
    {id:"e4u5-l4-x1", type:"sort", q:"Which kind of capital is each resource, in Bourdieu’s terms?", buckets:["Economic","Cultural","Social","Symbolic"], items:[
      {t:"A family’s rental flats in Jakarta", b:0, why:"Property and income are economic capital."},
      {t:"Ease in discussing classical music and art", b:1, why:"Embodied knowledge and taste are cultural capital."},
      {t:"A doctorate from a well-known university", b:1, why:"Diplomas are institutionalised cultural capital."},
      {t:"Friends from school who now work in ministries", b:2, why:"Useful networks are social capital."},
      {t:"A national honour that makes people defer to you", b:3, why:"Recognised prestige is symbolic capital."},
      {t:"Membership of an exclusive club that hosts deal-making dinners", b:2, why:"Memberships that give access to others are social capital."}
    ]},
    {id:"e4u5-l4-x2", type:"sort", q:"In which state is each form of cultural capital?", buckets:["Embodied","Objectified","Institutionalised"], items:[
      {t:"A confident, “neutral” accent in meetings", b:0, why:"Built into the body over years: embodied."},
      {t:"A grand piano and a shelf of art books at home", b:1, why:"Cultural goods are objectified capital."},
      {t:"A certified language exam result", b:2, why:"Official certificates institutionalise capital."},
      {t:"A habit of reading long novels for pleasure", b:0, why:"A lasting disposition is embodied capital."},
      {t:"A university degree", b:2, why:"Degrees are the classic institutionalised form."}
    ]},
    {id:"e4u5-l4-x3", type:"mcq", q:"Tomás grew up on a farm and wins a scholarship to a city university. He gets top marks but feels awkward at seminars and dinners, and decides he is “not the academic type”. Which concepts fit best?", options:[
      {t:"Habitus and symbolic violence", ok:true, why:"Right. His dispositions fit the field poorly, and he accepts a judgement that turns social difference into personal inadequacy."},
      {t:"Economic capital and cultural omnivores", why:"His problem is not money or broad taste; it is the fit between habitus and field."},
      {t:"Cosmopolitan right and hospitality", why:"Kant’s idea concerns strangers arriving in foreign territory, not class in a university."},
      {t:"Methodological nationalism", why:"That is a research habit, not an experience of class in a field."}
    ]},
    {id:"e4u5-l4-x4", type:"mcq", q:"What did Peterson and Kern (1996) find about taste among high-status Americans?", options:[
      {t:"They had become omnivores, liking many genres, so distinction lay in breadth", ok:true, why:"Right. The cultural omnivore challenged the snob-versus-mass picture of taste."},
      {t:"They liked only opera and classical music", why:"That is the older “snob” picture their findings questioned."},
      {t:"Taste no longer had any link to status", why:"They found a new link: breadth, rather than exclusive highbrow taste."},
      {t:"Their tastes were identical to those of French elites in the 1960s", why:"Their point was that patterns had changed."}
    ]},
    {id:"e4u5-l4-x5", type:"mcq", q:"Pouliot (2010) used Bourdieu to study NATO–Russia relations. What did habitus help him explain?", options:[
      {t:"How diplomats’ taken-for-granted sense of rank and status shaped which kinds of cooperation seemed possible", ok:true, why:"Right. Practices and dispositions limited cooperation even when interests overlapped."},
      {t:"Why military budgets rose", why:"His focus was on diplomatic practice and dispositions, not budgets."},
      {t:"How taste in music divided the two sides", why:"Habitus is broader than taste; his case is about diplomatic practice."},
      {t:"Why Russia joined the European Union", why:"Russia has not joined the EU; the option is false."}
    ]},
    {id:"e4u5-l4-x6", type:"match", q:"Match each thinker to their idea about cosmopolitanism.", pairs:[
      ["Kant (1795)","A right to hospitality for peaceful strangers","Cosmopolitan right in *Perpetual Peace*."],
      ["Ulrich Beck","Cosmopolitanisation as a fact, and the critique of methodological nationalism","Beck’s sociological cosmopolitanism."],
      ["Kwame Anthony Appiah","Rooted cosmopolitanism and conversation across difference","Appiah combines universal concern with local loyalty."],
      ["Craig Calhoun","The class consciousness of frequent travellers","Calhoun’s critique of elite cosmopolitanism."],
      ["James Clifford","Discrepant cosmopolitanisms","Clifford stressed many, unequal forms of worldliness."]
    ]},
    {id:"e4u5-l4-x7", type:"spot", q:"Tap the weak points in this summary of a study of taste.", ask:"weak point", parts:[
      "“",{t:"A survey of 1,200 adults in one country",flag:false,why:"Stating the sample is good practice."}," found that classical music fans were more likely to hold university degrees. ",{t:"This proves that degrees cause people to love classical music",flag:true,why:"A correlation is read as causation; family background could shape both."},". ",{t:"The same pattern must hold in every country",flag:true,why:"Lamont’s comparison shows patterns of taste and boundaries differ between societies."},". ",{t:"The authors note that younger respondents liked a wider range of genres",flag:false,why:"Reporting a nuance from the data is fine, and fits the omnivore finding."},". ",{t:"Taste is clearly something people are born with",flag:true,why:"Contradicts the study itself, which links taste to education, not birth."},".”"
    ]}
   ],
   apply:{intro:"Use Bourdieu and the cosmopolitanism debate on cases you know. Keep anything personal in your private notes.", tasks:[
    {t:"Map a field", how:["Choose a field you know or can read about: a music scene, a sport, a university department, a diplomatic summit, an online gaming community.","Note its stakes (what players compete for), the capital that counts, the gatekeepers, and how a newcomer learns the feel for the game."], write:"Field… Stakes… Capital that counts… Gatekeepers… How newcomers learn…"},
    {t:"Convert the capitals", how:["Invent a character who wants a career in international affairs (any country).","Write how they might convert one kind of capital into another, at least three times, and where conversion fails for someone without that start."], write:"Character… Conversion 1… Conversion 2… Conversion 3… Where it fails for others…"},
    {t:"Banal cosmopolitanism diary", how:["For two days, list the things around you that come from or refer to other places: food, music, clothes, words, apps.","Mark which ones you chose and which simply arrived.","Note who in your area has the most and the least of these choices."], write:"Day 1… Day 2… Chosen or arrived… Who has these choices…"},
    {t:"Seminar questions", how:["Does Bourdieu’s France travel? Test one concept against a society you know.","Is cosmopolitanism an ethical ideal, a class privilege, or both?","Can a diplomat’s habitus explain a foreign policy outcome, or only its style?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes mapping one field, a capital-conversion sketch, a two-day cosmopolitanism diary and a seminar paragraph."},
   read:[
    {book:"soc", where:"Chapter 16 “Education”, Section 16.2 “Theoretical Perspectives on Education”", note:"Where the textbook uses cultural capital, as background for this lesson."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u5-l5", title:"Popular culture and world politics", minutes:65,
   hook:{q:"In 2020 a video game was added to an official national list of recommended school reading for the 2020–21 school year, a step the country’s government called a world first. Which game, and where?", options:["*This War of Mine*, a game about civilians in a besieged city, in Poland","*Call of Duty*, in the United States","*Minecraft*, in Sweden","*Pokémon Go*, in Japan"], answer:0, reveal:"***This War of Mine*, in Poland.** Made by the Polish studio 11 bit studios (2014), it puts players in the place of civilians trying to survive a siege, drawing on the siege of Sarajevo, rather than soldiers at the front. Treating a game as a text about war, worth teaching, is exactly the move this lesson makes: popular culture is not a break from world politics but one of the places where it happens."},
   goals:[
     "Explain why IR scholars study popular culture, using Weldes and the popular culture–world politics continuum",
     "Distinguish four ways popular culture relates to world politics, from teaching tool to site of resistance",
     "Analyse film, games and fandoms as parts of world politics, using cases from several regions",
     "Use the circuit of culture to plan the analysis of a cultural text",
     "Avoid common traps in a seminar paper on popular culture, such as over-reading and claiming effects without evidence"
   ],
   learn:[
    {h:"Why IR started watching films", body:[
      {lead:"Most people learn what war, diplomacy and “the enemy” look like from screens long before they read a treaty."},
      "For decades IR treated popular culture as entertainment, at most a handy teaching aid. That changed around 2000. Jutta Weldes’ article “Going Cultural: *Star Trek*, State Action, and Popular Culture” (1999) argued that television and film help build the common sense that makes foreign policy seem natural: when a series presents a powerful federation bringing order to lawless frontiers, it rehearses ideas about intervention that viewers then recognise in the news. She edited *To Seek Out New Worlds: Science Fiction and World Politics* (2003).",
      "Kyle Grayson, Matt Davies and Simon Philpott’s “Pop Goes IR?” (2009) proposed a [[pop-culture-continuum|popular culture–world politics continuum]]: rather than two separate worlds that sometimes touch, they are bound together, so that meanings, images and practices flow both ways ({{popular-culture-world-politics}}). A free open-access collection, *Popular Culture and World Politics: Theories, Methods, Pedagogies* (Federica Caso and Caitlin Hamilton, eds, E-International Relations, 2015), gathers short chapters on film, science fiction, games, music and teaching."
    ]},
    {h:"Four ways popular culture matters", body:[
      {table:[
        ["Role","What scholars do","Example"],
        ["Teaching mirror","Use stories to explain theory","Drezner’s zombie book (2011)"],
        ["Evidence of beliefs","Read texts as data on public views","Captain America comics"],
        ["Constitutive","Show how texts make common sense","Weldes on *Star Trek* (1999)"],
        ["Site of action","Study fans, protest and policy","The three-finger salute"]
      ]},
      "Daniel Drezner’s *Theories of International Politics and Zombies* (2011) shows realists, liberals and constructivists responding to an undead outbreak: a mirror. Daniel Nexon and Iver Neumann’s *Harry Potter and International Relations* (2006) uses fiction both as mirror and as evidence.",
      "[[popular-geopolitics|Popular geopolitics]] reads popular texts for how they map the world into friends, enemies and dangerous places. Jason Dittmer’s *Captain America and the Nationalist Superhero* (2013) traced how a comic hero’s enemies changed with US foreign policy, from Nazis to communists to terrorists. The constitutive view goes further: texts help **produce** identities, not only reflect them."
    ]},
    {h:"Film and war", body:[
      {ex:"Ishirō Honda’s *Godzilla* opened in Japan in November 1954, months after the fishing boat *Daigo Fukuryū Maru* (*Lucky Dragon No. 5*) was showered with fallout from a US hydrogen-bomb test at Bikini Atoll. Its opening scene of a ship destroyed at sea echoes the incident, and Honda said he gave the monster the characteristics of an atomic bomb. The 1956 American version, *Godzilla, King of the Monsters!*, added new scenes with the actor Raymond Burr and cut or trimmed many of the film’s political themes. Same monster, two texts, two politics.", label:"Worked example: one film, two versions"},
      "States also take part. The US Department of Defense has long offered film-makers equipment, locations and advice in return for reviewing scripts; productions such as *Top Gun* (1986) worked with the military. James Der Derian (*Virtuous War*, 2001) called the links between defence, media and entertainment the [[mime-net|military–industrial–media–entertainment network]] (MIME-NET).",
      "Other states use cinema too. China’s action film *Wolf Warrior 2* (2017), about a former special forces soldier rescuing civilians in Africa, was a huge domestic hit. Its title later gave journalists and analysts the label “wolf warrior diplomacy” for a more combative style of public statements by some Chinese diplomats from about 2019; Chinese officials have disputed the label. A seminar treats the film, the label and the rejection as three texts to analyse, not as proof of a policy."
    ]},
    {h:"Games and fandoms", body:[
      "Games let players **act** inside a story. The US Army released *America’s Army* (2002) as a free game to inform potential recruits about army life. *This War of Mine* (2014) turned the genre around by making players civilians who scavenge and make hard moral choices. Researchers ask what a game makes players do, what it rewards and whose view it adopts. In the E-IR collection Nick Robinson’s chapter “Videogames and IR: Playing at Method” discusses playing the game yourself as part of the research; remember that your play is one experience, not every player’s.",
      "[[fandom|Fandoms]], communities of committed fans, can become political actors. After Thailand’s 2014 coup, protesters adopted the three-finger salute from *The Hunger Games* films; the military government warned that displaying it could lead to arrest. It returned in the 2020–21 Thai protests and was used in Hong Kong and, after the 2021 coup, by opponents of Myanmar’s military. K-pop fan networks have run charity drives and hashtag campaigns across several countries, and researchers debate how lasting such mobilisation is. The meaning of a gesture changed as it moved from a fictional dystopia to real streets."
    ]},
    {h:"The sound of world politics", body:[
      "Music is studied too: one chapter of the E-IR collection, by Matt Davies and M. I. Franklin, asks “What does (the study of) world politics sound like?”. Three cases show the range:",
      {list:[
        "**Protest.** Fela Kuti’s Afrobeat song “Zombie” (1976) mocked soldiers who obey orders without thought; in 1977 soldiers raided and burned his compound in Lagos. Music can carry criticism that would be dangerous as a speech.",
        "**Nation-making.** “Nkosi Sikelel’ iAfrika”, a hymn first composed in 1897 and sung in the struggle against apartheid, became part of South Africa’s national anthem, combined with the former anthem in 1997: a liberation hymn that became an official anthem.",
        "**Contest on stage.** The Eurovision Song Contest is officially non-political, yet scholars study its voting patterns, its rules on political lyrics and the countries that join or leave as signs of how Europe imagines itself."
      ]},
      "In each case the questions are the ones from Lesson 2: who encodes, who decodes, and which meanings become common sense."
    ]},
    {h:"How to analyse a cultural text", body:[
      "The [[circuit-of-culture|circuit of culture]], from Paul du Gay, Stuart Hall and colleagues’ *Doing Cultural Studies: The Story of the Sony Walkman* (1997), reminds you that a text’s meaning is made at five linked moments ({{cultural-text-analysis}}):",
      {fig:'<svg viewBox="0 0 340 280"><path class="d-ink" d="M170 40 L272 110 L240 230 L100 230 L68 110 Z" fill="none" stroke-width="2" stroke-dasharray="5 4"/><path class="d-ink" d="M170 40 L240 230 M170 40 L100 230 M68 110 L272 110 M68 110 L240 230 M272 110 L100 230" fill="none" stroke-width="1"/><rect class="d-lup" x="100" y="14" width="140" height="44" rx="8" stroke-width="2"/><text x="170" y="41" text-anchor="middle">Representation</text><rect class="d-gold" x="212" y="88" width="120" height="44" rx="8" stroke-width="2"/><text x="272" y="115" text-anchor="middle">Identity</text><rect class="d-sage" x="182" y="208" width="120" height="44" rx="8" stroke-width="2"/><text x="242" y="235" text-anchor="middle">Production</text><rect class="d-rose" x="38" y="208" width="128" height="44" rx="8" stroke-width="2"/><text x="102" y="235" text-anchor="middle">Consumption</text><rect class="d-soft" x="8" y="88" width="120" height="44" rx="8" stroke-width="2"/><text x="68" y="115" text-anchor="middle">Regulation</text><text class="s" x="170" y="274" text-anchor="middle">Each moment shapes the others.</text></svg>', alt:"Five boxes arranged in a pentagon, all joined to each other by lines: representation at the top, identity at upper right, production at lower right, consumption at lower left and regulation at upper left. A note says each moment shapes the others.", cap:"The circuit of culture (du Gay, Hall and others, 1997)."},
      {ol:[
        "**Choose and justify.** Say what your text is a case of (Unit 3’s case selection, {{case-selection}}): a film, game, song, advert or fandom.",
        "**Production.** Who made it, with what money, under which censorship or ratings rules (regulation)?",
        "**Close reading.** [[textual-analysis|Textual analysis]]: story, heroes and enemies, who speaks and who is silent, settings, music, maps.",
        "**Intertextuality.** Which other texts, histories and genres does it borrow from ([[intertextuality]])?",
        "**Reception.** [[audience-research|Audience research]]: reviews, box office, fan forums, bans, remakes. Texts have [[polysemy|polysemy]]: many possible meanings, unevenly taken up.",
        "**Theory.** Connect to the lesson tools: representation, Orientalism, hybridity, capital, soft power."
      ]},
      {ex:"Production: a Polish studio, drawing on accounts of the siege of Sarajevo. Representation: war seen from a cellar, through hunger, cold and moral choices, not heroics. Identity: the player becomes a civilian, not a soldier. Consumption: what players say in reviews and forums about the choices it forces on them, and how teachers use it in class. Regulation: age ratings, and its inclusion on Poland’s school reading list for 2020–21. A paper might argue that the game challenges the soldier’s-eye view of most war games, and test the claim against reviews and the reading-list debate.", label:"Worked example: *This War of Mine* through the circuit"},
      {warn:"Avoid three traps: reading your own meaning into a text and calling it the meaning; claiming a film **caused** public opinion without evidence about audiences; and quoting fans’ public posts without thinking about their privacy (see {{fieldwork-ethics}}). Paraphrase rather than quote identifiable individuals."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Pop culture is too trivial for IR.”** Weldes and others show it is where many people form their picture of the world.",
        "**“A film’s message is what its makers intended.”** Recall Hall: encoding does not fix decoding.",
        "**“If a state funds a film, it is propaganda and nothing else.”** Funded texts can still be ambiguous, popular for other reasons, or read against the grain.",
        "**“Fan politics is always progressive.”** Fandoms can mobilise for many causes, including exclusionary ones."
      ]},
      {key:"Popular culture is part of world politics: it represents, constitutes and mobilises. Analyse it with the same care as a treaty: production, text, circulation and reception."},
      {terms:["pop-culture-continuum","popular-geopolitics","mime-net","fandom","circuit-of-culture","textual-analysis","audience-research","polysemy"]}
    ]}
   ],
   try:[
    {id:"e4u5-l5-x1", type:"sort", q:"Which role of popular culture does each study illustrate?", buckets:["Teaching mirror","Evidence of beliefs","Constitutive","Site of action"], items:[
      {t:"A lecturer uses a zombie outbreak story to explain how realists and liberals differ.", b:0, why:"The text is used to illustrate theory: a mirror."},
      {t:"A researcher codes 50 years of superhero comics to see how enemies change with foreign policy.", b:1, why:"Texts read as evidence of shifting public views: popular geopolitics."},
      {t:"A scholar argues that space-opera series make military intervention feel like common sense.", b:2, why:"Texts help produce the common sense of policy: the constitutive view."},
      {t:"A study follows fans who turn a film gesture into a protest symbol.", b:3, why:"Fans act politically with popular culture: a site of action."}
    ]},
    {id:"e4u5-l5-x2", type:"mcq", q:"What is the main claim of Grayson, Davies and Philpott’s “Pop Goes IR?” (2009)?", options:[
      {t:"Popular culture and world politics form a continuum, bound together rather than separate", ok:true, why:"Right. Meanings and practices flow both ways between them."},
      {t:"Popular culture has no political content", why:"The article argues the opposite."},
      {t:"Only state-funded films matter for IR", why:"The continuum includes all kinds of popular culture."},
      {t:"IR should replace theory with film criticism", why:"They propose studying the link, not abandoning IR theory."}
    ]},
    {id:"e4u5-l5-x3", type:"mcq", q:"The 1956 American version of *Godzilla* cut or trimmed many of the 1954 film’s political themes. In circuit-of-culture terms, what does this show?", options:[
      {t:"Production and regulation for a new market changed what the text represented", ok:true, why:"Right. A new production context reshaped the representation that audiences received."},
      {t:"Consumption has no effect on meaning", why:"The example is about production, but the circuit says every moment matters."},
      {t:"The two versions are the same text", why:"Cuts and new scenes made a different text with different politics."},
      {t:"Godzilla had no link to nuclear testing", why:"The 1954 film clearly echoed the Lucky Dragon incident and the bombings."}
    ]},
    {id:"e4u5-l5-x4", type:"match", q:"Match each moment of the circuit of culture to a question you might ask about a K-pop music video.", pairs:[
      ["Production","Which company made it, with what budget and training system?","Production asks who makes the text and how."],
      ["Representation","How are gender, nation and modernity shown on screen?","Representation asks what meanings the text offers."],
      ["Consumption","How do fans in Brazil and Indonesia use and remix it?","Consumption asks what audiences do with it."],
      ["Regulation","Was it censored, rated or restricted anywhere?","Regulation covers rules, censorship and platform policy."],
      ["Identity","Which identities does it invite viewers to adopt?","Identity asks who the text invites us to be."]
    ]},
    {id:"e4u5-l5-x5", type:"order", q:"Put the steps of a seminar analysis of a cultural text in the order this lesson recommends.", items:[
      {t:"Choose the text and say what it is a case of", why:"Start by justifying the choice."},
      {t:"Research its production and regulation", why:"Context comes before close reading so you know what shaped it."},
      {t:"Read it closely: story, characters, who speaks, settings", why:"Textual analysis is the core."},
      {t:"Trace its borrowings from other texts and histories", why:"Intertextuality widens the reading."},
      {t:"Gather evidence of reception: reviews, sales, fan responses", why:"Reception tests whether readings were taken up."},
      {t:"Link the findings to theory and state your argument", why:"Theory and argument come last, built on evidence."}
    ]},
    {id:"e4u5-l5-x6", type:"spot", q:"Tap the overclaims in this draft paragraph from a seminar paper.", ask:"overclaim", parts:[
      "“",{t:"The film was the highest-grossing domestic release of its year",flag:false,why:"A checkable fact about reception is fine, if sourced."},". ",{t:"It therefore caused a wave of nationalism",flag:true,why:"Box-office success is not evidence of effects on attitudes; you need audience research."},". ",{t:"Its villains are foreign mercenaries, and the hero rescues fellow citizens abroad",flag:false,why:"An accurate description from close reading is fine."},". ",{t:"Every viewer understood it as a message about the government’s foreign policy",flag:true,why:"Ignores polysemy and Hall’s reading positions."},". ",{t:"Clearly the director intended this, so the case is closed",flag:true,why:"Intention does not settle meaning, and the claim is not supported."},".”"
    ]},
    {id:"e4u5-l5-x7", type:"mcq", q:"After the 2014 coup in Thailand, protesters used the three-finger salute from *The Hunger Games*. What does the case best show?", options:[
      {t:"A sign from popular culture can be taken up and given new political meaning by its users", ok:true, why:"Right. Fans and protesters turned a fictional gesture into a real political symbol."},
      {t:"The film’s makers planned the Thai protests", why:"There is no evidence of that; meaning was made by the users."},
      {t:"Popular culture only matters in Western democracies", why:"The case is from Southeast Asia and spread across the region."},
      {t:"Governments ignore popular culture", why:"The military government warned that displaying the salute could lead to arrest."}
    ]}
   ],
   apply:{intro:"Analyse popular culture as world politics. Use official channels and public material; do not contact or name private individuals.", tasks:[
    {t:"Run the circuit on one text", how:["Choose a film or game trailer, a music video or an advert from an official channel, from any country.","Write one or two lines for each moment: production, representation, identity, consumption, regulation.","Say which moment seems most important for this text, and why."], write:"Text (title, channel)… Production… Representation… Identity… Consumption… Regulation… Most important…"},
    {t:"Two versions, two politics", how:["Find two versions of one story: an original and a remake, two countries’ posters for the same film, or two dubbed trailers.","List what changes: title, scenes, enemies, music, emphasis.","Suggest why, using production and regulation."], write:"Versions… What changes… Why…"},
    {t:"Fans in public", how:["Look at one public fan space (a hashtag, a forum thread, a fan wiki) about a text with an international following.","Note how fans discuss politics, nation or identity, without recording names or screenshots of individuals.","Summarise patterns in your own words."], write:"Fan space… Patterns… Political or national themes… Ethical care I took…"},
    {t:"Seminar questions and a paper plan", how:["Does popular culture reflect world politics, or help make it?","Can a state-funded film be soft power and art at the same time?","Draft a one-paragraph plan for a seminar paper on one text: question, text, method (circuit of culture), theory, sources."], write:"My question… Text… Method… Theory… Sources… Expected argument…"}
   ], proof:"A circuit-of-culture analysis of one text, a comparison of two versions, notes on a public fan space and a one-paragraph paper plan."},
   read:[
    {book:"oanth", where:"Chapter 15, Sections 15.3 “Visual Anthropology and Ethnographic Film”, 15.5 “News Media, the Public Sphere, and Nationalism” and 15.6 “Community, Development, and Broadcast Media”", note:"Read it for how media make and spread national and political identities."},
    {book:"oanth", where:"Chapter 16, Section 16.4 “Anthropology, Representation, and Performance”", note:"Art, music and sport as identity and resistance, including global hip-hop."}
   ]
  }
  ],
  checkpoint:["e4u5-q02","e4u5-q06","e4u5-q11","e4u5-q15","e4u5-q19","e4u5-q22","e4u5-q26","e4u5-q30","e4u5-q33","e4u5-q37","e4u5-q41","e4u5-q44"],
  codex:[
   {id:"cultural-turn-ir", title:"The cultural turn in IR", aka:["Culture in international relations","Return of culture and identity"], tags:["international relations","culture","theory"],
    summary:"How culture, identity and meaning moved from the margins of IR to the centre of many debates from the 1990s, and the three roles culture can play in an argument: cause, context and resource.",
    levels:{
     starter:[
      "For much of the Cold War, mainstream IR explained world politics with power, interests and institutions. Culture seemed too vague to measure. From the 1990s a growing number of scholars argued that this left out something essential: states, leaders and peoples act on meanings, identities and stories about who they are.",
      "Think of two neighbours who own the same tools but treat each other very differently because of a shared history. The tools are the same; the meanings differ.",
      {key:"The cultural turn: meanings and identities are part of how world politics works, not decoration on top of it."},
      "This shift came with constructivism, critical theories and postcolonial approaches, and it reached security studies through the idea of strategic culture."
     ],
     builder:[
      "**Earlier forms.** Wartime “national character” studies (for example Ruth Benedict on Japan) and Almond and Verba’s *The Civic Culture* (1963) on political culture already linked culture and politics, but often treated nations as uniform.",
      "**Strategic culture.** Jack Snyder’s RAND report on Soviet strategic culture (1977) introduced the term. Alastair Iain Johnston’s *Cultural Realism* (1995) tested it on Ming China and found a practical “parabellum” culture behind idealised Confucian texts. Colin Gray (1999) argued culture is the context of all strategy, so it cannot be separated out as a cause.",
      "**The 1990s turn.** Yosef Lapid and Friedrich Kratochwil’s edited volume *The Return of Culture and Identity in IR Theory* (1996) and Peter Katzenstein’s *The Culture of National Security* (1996) made culture and identity central research topics.",
      "**Three roles.** In an argument culture can be a **cause** (a norm pushes a choice), a **context** (it makes some choices thinkable) or a **resource** (actors invoke “our values” for their own ends)."
     ],
     pro:[
      "The turn raised hard questions. If culture is everywhere, how do we know when it explains anything? Positivist scholars try to separate cultural variables and test them; interpretivists argue that culture is constitutive, so the task is to interpret how meanings make actions possible (see Unit 3 on explaining and understanding, {{explaining-understanding}}).",
      "A second danger is essentialism: treating a nation’s culture as fixed and uniform, as some “Asian values” or “clash of civilisations” arguments were accused of doing. Anthropologists such as Lila Abu-Lughod (1991) urged writing “against culture” in that bounded sense, and political scientists such as Lisa Wedeen (2002) proposed studying culture as semiotic practices.",
      "More recent work, such as Christian Reus-Smit’s *On Cultural Diversity* (2018), asks how international orders have organised cultural difference, from empires to the society of sovereign states. The cultural turn is now less a single movement than a set of questions that most graduate seminars expect you to handle."
     ]
    },
    related:["constructivism","clifford-geertz","raymond-williams","postcolonialism-ir","norm-dynamics"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism”"}],
    sources:[{t:"Wikipedia: Strategic culture", url:"https://en.wikipedia.org/wiki/Strategic_culture"},{t:"Wikipedia: Asian values", url:"https://en.wikipedia.org/wiki/Asian_values"}], checked:"2026-11"},

   {id:"raymond-williams", title:"Raymond Williams", tags:["culture","thinker","cultural studies"],
    summary:"Welsh critic and novelist (1921–1988) who insisted that “culture is ordinary”, traced the meanings of key words in *Keywords* (1976) and helped found cultural studies.",
    levels:{
     starter:[
      "Raymond Williams was born in 1921 in Pandy, a village on the Welsh border, the son of a railway worker. He studied English at Trinity College, Cambridge, served as an anti-tank officer in the Second World War, and became one of the most influential writers on culture in English.",
      "In his essay “Culture is Ordinary” (1958) he described a bus ride into South Wales and insisted that the culture of working people, their songs, chapels, unions and ways of talking, was as real as the culture of universities.",
      {key:"Williams: culture is not only the arts of an elite; it is the ordinary, shared making of meaning."},
      "He taught adult education classes for the Oxford Delegacy for Extra-Mural Studies, then at Cambridge, where he was the university’s first Professor of Drama from 1974 to 1983. He died in 1988."
     ],
     builder:[
      "**Key works:** *Culture and Society* (1958), a history of how English writers since the Industrial Revolution used the idea of culture; *The Long Revolution* (1961); *The Country and the City* (1973); *Television: Technology and Cultural Form* (1974); *Keywords: A Vocabulary of Culture and Society* (1976; enlarged 1983); *Marxism and Literature* (1977).",
      "**Keywords** opens its entry on culture by calling it “one of the two or three most complicated words in the English language”, and distinguishes three modern senses: a process of intellectual and aesthetic development, a particular way of life, and the works of art and intellect.",
      "**Structure of feeling** names the lived sense of a period or generation, felt before it is clearly expressed. Williams first used the phrase in *Preface to Film* (1954, with Michael Orrom) and developed it in *The Long Revolution* (1961) and *Marxism and Literature* (1977).",
      "Students use Williams to ask which meaning of culture an argument uses, and who benefits from that choice."
     ],
     pro:[
      "Williams called his approach **cultural materialism**: culture is produced by people in real social conditions, not a separate realm of ideas. With Richard Hoggart, E. P. Thompson and Stuart Hall he is counted among the founders of British cultural studies, though he worked mainly in literature and drama.",
      "Critics note that his work centres on Britain and on class, with less on empire, race and gender; later scholars, including Hall and Edward Said, extended his questions to colonialism. Said admired Williams but asked why English culture’s dependence on empire appears so little in his histories.",
      "His method in *Keywords*, tracing the shifting history of words such as culture, democracy and nature, remains a model for concept analysis, and was updated by other authors in *New Keywords* (2005)."
     ]
    },
    related:["cultural-turn-ir","stuart-hall","culture"],
    sources:[{t:"Wikipedia: Raymond Williams", url:"https://en.wikipedia.org/wiki/Raymond_Williams"},{t:"Wikipedia: Keywords: A Vocabulary of Culture and Society", url:"https://en.wikipedia.org/wiki/Keywords:_A_Vocabulary_of_Culture_and_Society"},{t:"openDemocracy: Raymond Williams, “Culture is ordinary” (1958)", url:"https://www.opendemocracy.net/en/culture-is-ordinary/"}], checked:"2026-11"},

   {id:"clifford-geertz", title:"Clifford Geertz", tags:["culture","thinker","anthropology"],
    summary:"American anthropologist (1926–2006) who defined culture as “webs of significance” and made thick description the model of interpretive social science.",
    levels:{
     starter:[
      "Clifford Geertz was an American anthropologist who did long fieldwork in Java and Bali, in Indonesia, from the 1950s, and later in Morocco. He taught at the University of Chicago and, from 1970, at the Institute for Advanced Study in Princeton, where he founded the School of Social Science and wrote his best-known essays.",
      "His big idea was that culture is a set of meanings, like a language, that people use to make sense of their lives. The researcher’s job is to interpret those meanings, the way a reader interprets a text.",
      {key:"Geertz: culture is the webs of significance people spin; studying it means interpreting meanings, not finding laws."},
      "His example of the wink, borrowed from the philosopher Gilbert Ryle, is taught in almost every introduction to anthropology."
     ],
     builder:[
      "**Key works:** *The Religion of Java* (1960); *Agricultural Involution* (1963); *Islam Observed* (1968), comparing Islam in Indonesia and Morocco; *The Interpretation of Cultures* (1973), with the essays “Thick Description” and “Deep Play: Notes on the Balinese Cockfight” (first published 1972); *Negara* (1980) on the Balinese “theatre state”; *Local Knowledge* (1983); *Works and Lives* (1988), on anthropologists as authors.",
      "**Thick description.** A twitch and a wink look the same to a camera. A thick description records the codes that make one a signal and the other an accident, and even a parody or rehearsal of a wink.",
      "**Deep play.** Geertz read the cockfight as “a story they tell themselves about themselves”: a dramatisation of status and rivalry.",
      "IR and political science use Geertz when they treat state rituals, summits or symbols as texts to interpret."
     ],
     pro:[
      "Talal Asad (1983) argued that Geertz’s symbols float free of power and history: meanings are authorised by institutions and enforced by discipline. Others noted that the interpreter speaks for the people studied, a problem the *Writing Culture* debate (1986) generalised. Some critics found his Bali too harmonious and too timeless.",
      "Defenders reply that interpretation need not ignore power, and that Geertz showed how to take meanings seriously as evidence. Political scientists such as Lisa Wedeen have built on him while adding attention to power and practice.",
      "For a thesis, Geertz is a reminder that “what happened” includes what it meant to those involved, and that this meaning must be argued for with evidence, not assumed."
     ]
    },
    related:["cultural-turn-ir","raymond-williams","culture"],
    read:[{book:"oanth", where:"Chapter 3, Section 3.2 “The Winkiness of Culture”"}],
    sources:[{t:"OpenStax Introduction to Anthropology: 3.2 The Winkiness of Culture", url:"https://openstax.org/books/introduction-anthropology/pages/3-2-the-winkiness-of-culture"},{t:"Britannica: Culture: A Critical Review of Concepts and Definitions (Kroeber and Kluckhohn, 1952)", url:"https://www.britannica.com/topic/Culture-A-Critical-Review-of-Concepts-and-Definitions"}], checked:"2026-11"},

   {id:"stuart-hall", title:"Stuart Hall", tags:["culture","thinker","cultural studies","media"],
    summary:"Jamaican-born British cultural theorist (1932–2014) who directed the Centre for Contemporary Cultural Studies at the University of Birmingham and gave media studies the encoding/decoding model and a constructionist theory of representation.",
    levels:{
     starter:[
      "Stuart Hall was born in Kingston, Jamaica, in 1932 and came to England in 1951 as a Rhodes Scholar at Merton College, Oxford. He stayed in Britain, where he became one of its best-known public intellectuals.",
      "He was a founding editor of the *New Left Review* (1960), joined Richard Hoggart’s new Centre for Contemporary Cultural Studies at the University of Birmingham in 1964 and was its director from 1972 to 1979 (acting director from 1968), then professor of sociology at the Open University from 1979 until 1997. He died in London in 2014.",
      {key:"Hall: meaning is made in shared systems of signs, and audiences read media from their own social positions."},
      "His memoir with Bill Schwarz, *Familiar Stranger: A Life Between Two Islands*, appeared in 2017."
     ],
     builder:[
      "**Encoding/decoding** (1973; revised 1980): producers encode a preferred reading; audiences decode it as dominant-hegemonic, negotiated or oppositional readings.",
      "**Representation** (*Representation: Cultural Representations and Signifying Practices*, 1997): reflective, intentional and constructionist approaches; his chapter “The Spectacle of the ‘Other’” analyses stereotyping as reducing, essentialising and fixing difference.",
      "**Policing the Crisis** (1978, with Chas Critcher, Tony Jefferson, John Clarke and Brian Roberts) studied a British moral panic about street crime and race.",
      "**Identity and diaspora.** In “Cultural Identity and Diaspora” (1990) he argued that cultural identity is “not an essence but a positioning”, and in “New Ethnicities” he explored Black British identities."
     ],
     pro:[
      "Hall worked with Gramsci’s idea of hegemony: domination that rests on consent and common sense, always contested. He applied it to British politics: in “The Great Moving Right Show” (1979) he coined the term “Thatcherism”, which he analysed as “authoritarian populism”.",
      "Critics argue that the encoding/decoding model is too neat, that it overstates resistance, or that it was built on British television news and may not fit fragmented digital media. Hall himself treated it as a starting point.",
      "For international studies, Hall matters in three ways: representation and the “West and the Rest” (how ideas of the West were built against others), [[diaspora|diaspora]] identity (see the migration primer), and the circuit of culture, which he helped develop for analysing texts such as the Sony Walkman."
     ]
    },
    related:["encoding-decoding-model","cultural-text-analysis","raymond-williams","edward-said","diaspora"],
    sources:[{t:"Wikipedia: Stuart Hall (cultural theorist)", url:"https://en.wikipedia.org/wiki/Stuart_Hall_(cultural_theorist)"},{t:"Encyclopedia.com: Hall, Stuart", url:"https://www.encyclopedia.com/social-sciences/applied-and-social-sciences-magazines/hall-stuart"}], checked:"2026-11"},

   {id:"encoding-decoding-model", title:"Representation and encoding/decoding", aka:["Hall’s encoding/decoding model","Semiotics and myth"], tags:["culture","media","representation"],
    summary:"How meaning is made through signs (Saussure, Barthes), how producers encode and audiences decode messages (Hall), and what global audience studies such as *The Export of Meaning* show.",
    levels:{
     starter:[
      "A message is not a parcel delivered unchanged. The people who make a news report, advert or film build meanings into it, and the people who watch it bring their own experiences and may read it differently.",
      "Stuart Hall called these two moments **encoding** and **decoding**. Viewers may accept the intended meaning, accept it with local changes, or reject it.",
      {key:"Meaning is produced twice: once by makers, once by audiences, and the two need not match."},
      "Before that, the semiotician Roland Barthes showed that images carry hidden second meanings he called myths."
     ],
     builder:[
      "**Signs.** Saussure (*Course in General Linguistics*, 1916) split the sign into signifier and signified, joined by convention.",
      "**Myth.** Barthes’ *Mythologies* (1957) argued that a sign can become the signifier of a second, connotative meaning that feels natural, as in the 1955 *Paris Match* cover of a young Black soldier saluting the French flag.",
      "**Encoding/decoding.** Hall (1973/1980) described three reading positions: dominant-hegemonic, negotiated and oppositional. David Morley’s *The ‘Nationwide’ Audience* (1980) tested them.",
      {table:[["Reading","What the viewer does"],["Dominant","Takes the preferred meaning"],["Negotiated","Accepts in general, adapts locally"],["Oppositional","Rejects the frame"]]},
      "**Global audiences.** Liebes and Katz’s *The Export of Meaning* (1990) found that groups in Israel and the United States retold *Dallas* in very different ways."
     ],
     pro:[
      "Critics say the three positions are too tidy, that “oppositional” mixes rejecting an ideology with disliking a programme, and that the model assumes media encode one dominant ideology. Morley himself distinguished understanding a text from evaluating it. Later work on fans and digital audiences stresses play, remixing and distraction.",
      "Others warn against the opposite error: if audiences can read anything into anything, media power disappears. Hall’s answer was that the preferred reading weighs heavily, so readings are free but not equally easy.",
      "In IR the model helps analyse public diplomacy, international broadcasting and propaganda: a message designed in one capital is decoded by publics with different histories (Units 7 and 8). Pair it with framing research from media studies for a fuller method."
     ]
    },
    related:["stuart-hall","cultural-text-analysis","orientalism-debate","discourse-analysis"],
    read:[{book:"oanth", where:"Chapter 15, Section 15.2 “Putting Culture into Media Studies”"}],
    sources:[{t:"Wikipedia: Encoding/decoding model of communication", url:"https://en.wikipedia.org/wiki/Encoding/decoding_model_of_communication"},{t:"Wikipedia: Mythologies (book)", url:"https://en.wikipedia.org/wiki/Mythologies_(book)"}], checked:"2026-11"},

   {id:"edward-said", title:"Edward Said", aka:["Edward W. Said"], tags:["culture","thinker","postcolonialism"],
    summary:"Palestinian-American literary scholar (1935–2003) at Columbia University in New York, whose *Orientalism* (1978) founded much of postcolonial studies and changed how scholars think about knowledge and empire.",
    levels:{
     starter:[
      "Edward Said was born in Jerusalem in 1935, grew up partly in Cairo, and studied in the United States. He taught English and comparative literature at Columbia University in New York from 1963 until his death in 2003.",
      "In *Orientalism* (1978) he argued that Western scholarship, literature and art built an image of “the Orient” as exotic, backward and unchanging, and that this knowledge helped make empire seem natural.",
      {key:"Said: how a people is represented is bound up with power over them."},
      "He was also a music critic and pianist, and in 1999 co-founded the West-Eastern Divan Orchestra with the conductor Daniel Barenboim, bringing together young musicians from Israel and Arab countries."
     ],
     builder:[
      "**Key works:** *Orientalism* (1978); *The Question of Palestine* (1979); *Covering Islam* (1981), on Western media images of Islam; *Culture and Imperialism* (1993), on empire in the European novel and the culture of resistance; *Representations of the Intellectual* (1994, from his 1993 Reith Lectures); and the memoir *Out of Place* (1999).",
      "**Concepts:** Orientalism in three senses (an academic field, a style of thought dividing Orient from Occident, a corporate institution for dealing with the Orient); imaginative geography; contrapuntal reading of literature alongside the empire behind it.",
      "He drew on Foucault’s idea of discourse and Gramsci’s idea of hegemony, while keeping a humanist belief in the critic’s independent judgement."
     ],
     pro:[
      "Said was also a prominent public advocate for Palestinian rights, a role that made him both admired and attacked; a seminar should separate the scholarly argument of *Orientalism*, which can be assessed on evidence, from views about his politics.",
      "His scholarly critics include Sadiq Jalal al-Azm, Bernard Lewis, Aijaz Ahmad, John MacKenzie and Robert Irwin (see {{orientalism-debate}}). In “The Clash of Ignorance” (2001) he criticised Huntington’s clash-of-civilisations thesis for treating civilisations as unified blocs (Unit 6).",
      "His legacy in IR includes postcolonial IR, the study of representation in foreign policy, and debates over Eurocentrism in the discipline itself."
     ]
    },
    related:["orientalism-debate","postcolonialism-ir","stuart-hall","hybridity-theory"],
    read:[{book:"eirt", where:"Chapter 10 “Towards a Global IR?”", note:"For the wider debate about Eurocentrism in IR that Said helped start."}],
    sources:[{t:"Wikipedia: Edward Said", url:"https://en.wikipedia.org/wiki/Edward_Said"},{t:"Wikipedia: Culture and Imperialism", url:"https://en.wikipedia.org/wiki/Culture_and_Imperialism"}], checked:"2026-11"},

   {id:"orientalism-debate", title:"Orientalism and its critics", aka:["Orientalism debate","Occidentalism"], tags:["culture","postcolonialism","representation"],
    summary:"Said’s argument that Western knowledge of “the Orient” was bound up with empire, the main critiques of it, its extensions (Africanism, Balkanism, techno-Orientalism) and the two meanings of Occidentalism.",
    levels:{
     starter:[
      "Imagine learning about a place only from adventure novels, travel posters and old paintings. You might think it was mysterious, unchanging and very different from home. Edward Said argued that Western images of the Middle East and Asia worked like that, and that these images helped justify ruling those places.",
      "His book *Orientalism* (1978) started a huge debate. Some scholars said he was unfair to experts who studied other cultures with care; others extended his idea to Africa, Eastern Europe and Japan.",
      {key:"The Orientalism debate asks how knowledge about others is shaped by power, and whether the critique itself can become a new stereotype."}
     ],
     builder:[
      {table:[
        ["Critic","Objection"],
        ["Sadiq Jalal al-Azm (1981)","Said essentialises the West; beware “Orientalism in reverse”"],
        ["Bernard Lewis (1982)","Said misjudges scholars’ motives and quality"],
        ["Aijaz Ahmad (1992)","Neglects political economy; unfair to Marx"],
        ["John MacKenzie (1995)","Orientalist art was varied and often admiring"],
        ["Robert Irwin (2006)","Omits German and Hungarian scholarship"]
      ]},
      "Said replied in a 1995 Afterword that he did not claim a “real” Orient against false images and that he rejected all essentialisms.",
      "**Extensions:** V. Y. Mudimbe’s *The Invention of Africa* (1988); Larry Wolff’s *Inventing Eastern Europe* (1994); Maria Todorova’s *Imagining the Balkans* (1997), which calls Balkanism distinct because the Balkans were seen as an incomplete European self; and techno-Orientalism about Japan."
     ],
     pro:[
      "**Occidentalism** has two senses. One is stereotyped images of “the West”, often hostile (James Carrier, ed., 1995; Ian Buruma and Avishai Margalit, 2004). The other, in Xiaomei Chen’s *Occidentalism* (1995), is the use of images of the West for domestic politics in post-Mao China, by the state and by its critics. Fernando Coronil (1996) argued that Orientalism depends on an idealised Occidentalism that sets the West up as the norm.",
      "In IR the debate shapes postcolonial approaches and studies of foreign-policy discourse. Researchers ask how adversaries are represented in official speeches and media, and test claims against archives and audiences rather than assuming that images determine policy.",
      "A good seminar answer keeps both lessons: images of others are bound up with power, and critiques of those images can harden into new binaries."
     ]
    },
    related:["edward-said","postcolonialism-ir","encoding-decoding-model","nihonjinron"],
    sources:[{t:"Wikipedia: Orientalism (book)", url:"https://en.wikipedia.org/wiki/Orientalism_(book)"},{t:"Wikipedia: Edward Said", url:"https://en.wikipedia.org/wiki/Edward_Said"}], checked:"2026-11"},

   {id:"cultural-globalization", title:"Cultural globalisation debates", aka:["Cultural imperialism thesis","Glocalisation","Contra-flows"], tags:["culture","globalisation","media"],
    summary:"The rival accounts of what globalisation does to culture: lasting difference, convergence (cultural and media imperialism, McDonaldization, grobalisation) and mixing (glocalisation, hybridity), with the evidence on audiences and contra-flows.",
    levels:{
     starter:[
      "When the same songs, films and fast-food chains appear in many countries, do cultures become more alike? Some scholars said yes, and worried that powerful countries were spreading their culture at others’ expense. Others found that people adapt global products to local life, and that culture now flows from many centres, such as Seoul, Mumbai, Lagos and Mexico City.",
      {key:"Cultural globalisation is not one process: sameness, difference and mixture happen together."},
      "Jan Nederveen Pieterse (2004) sorted the debate into three paradigms: lasting difference, convergence and hybridisation."
     ],
     builder:[
      "**Convergence and imperialism.** Herbert Schiller (*Mass Communications and American Empire*, 1969); Dorfman and Mattelart (*How to Read Donald Duck*, Chile 1971); Tunstall (*The Media Are American*, 1977). Many newly independent states pressed at UNESCO for a New World Information and Communication Order; the MacBride report *Many Voices, One World* appeared in 1980.",
      "**The critique.** John Tomlinson (*Cultural Imperialism*, 1991) questioned passive audiences and pure national cultures. Straubhaar (1991) found **cultural proximity**: audiences prefer national, then regional content. Watson’s *Golden Arches East* (1997) found McDonald’s localised in five East Asian cities.",
      "**Glocalisation and grobalisation.** Roland Robertson (1992, 1995) borrowed glocalisation from Japanese business usage (*dochakuka*). George Ritzer (2004) answered with grobalisation, the drive of large organisations to impose themselves worldwide.",
      "**Contra-flows.** Daya Thussu (2007): anime, the Korean Wave, Indian cinema, Nollywood, telenovelas and Turkish drama."
     ],
     pro:[
      "Appadurai’s five scapes (1990, 1996) shifted the question from “whose culture wins?” to how disjunctive flows of people, media, technology, money and ideas interact. Critics call the scapes metaphors, and Anna Tsing’s *Friction* (2005) shows flows meeting resistance.",
      "The debate now turns on platforms. Dal Yong Jin (2015) argued that platform ownership, mostly American with some Chinese firms, creates a platform imperialism even when content comes from elsewhere. Others stress that platforms let small producers reach the world. Evidence differs by country, genre and medium, so a thesis should specify which flows it studies.",
      "A careful answer distinguishes production (who owns), content (what is shown), audiences (who watches and how) and policy (who regulates), because convergence in one can coexist with diversity in another."
     ]
    },
    related:["arjun-appadurai","hybridity-theory","mcdonaldization","korean-wave"],
    sources:[{t:"Wikipedia: Media imperialism", url:"https://en.wikipedia.org/wiki/Media_imperialism"},{t:"Wikipedia: Glocalization", url:"https://en.wikipedia.org/wiki/Glocalization"},{t:"Association for Asian Studies: EAA interview with James L. Watson on Golden Arches East", url:"https://www.asianstudies.org/wp-content/uploads/eaa-interview-with-james-l-watson-on-golden-arches-east-mcdonalds-in-east-asia.pdf"}], checked:"2026-11"},

   {id:"arjun-appadurai", title:"Arjun Appadurai", tags:["culture","thinker","globalisation","anthropology"],
    summary:"Indian-American anthropologist (born 1949, Bombay) whose five “scapes” and idea of disjuncture, in *Modernity at Large* (1996), became a standard vocabulary for cultural globalisation.",
    levels:{
     starter:[
      "Arjun Appadurai was born in Bombay (now Mumbai) in 1949 and has taught at several American universities.",
      "He argued that globalisation is not one wave washing over the world. People, images, technologies, money and ideas each flow along their own paths, at their own speeds, and the mix looks different from every place.",
      {key:"Appadurai: global culture is made of disjunctive flows, the scapes, and of people imagining possible lives."}
     ],
     builder:[
      "**Key works:** *Worship and Conflict under Colonial Rule* (1981), on a South Indian temple; *The Social Life of Things* (ed., 1986), on how objects gain and lose value as they move; “Disjuncture and Difference in the Global Cultural Economy” (1990); *Modernity at Large: Cultural Dimensions of Globalization* (1996); *Fear of Small Numbers* (2006), on violence against minorities; *The Future as Cultural Fact* (2013).",
      {table:[["Scape","Flow"],["Ethnoscape","People"],["Mediascape","Images, stories"],["Technoscape","Technology"],["Financescape","Money"],["Ideoscape","Political ideas"]]},
      "**Imagination as social practice:** through media, people everywhere picture other possible lives, and act on those pictures by migrating, organising or consuming."
     ],
     pro:[
      "Critics argue that the scapes are evocative metaphors rather than testable concepts, that they overlap, and that the 1990 essay predates platforms. Others say Appadurai underplays the states and corporations that steer flows. Anna Tsing’s idea of friction offers a corrective.",
      "Defenders reply that the scapes were meant as a vocabulary for describing disjuncture, not a predictive theory, and that they helped move debate beyond the choice between homogenisation and heterogeneity.",
      "In a thesis, use the scapes to organise description, then add a theory of power (who controls which flows) and method (how you will trace them)."
     ]
    },
    related:["cultural-globalization","hybridity-theory","transnationalism"],
    sources:[{t:"Wikipedia: Arjun Appadurai", url:"https://en.wikipedia.org/wiki/Arjun_Appadurai"},{t:"Wikipedia: Global cultural flows", url:"https://en.wikipedia.org/wiki/Global_cultural_flows"}], checked:"2026-11"},

   {id:"hybridity-theory", title:"Hybridity", aka:["Cultural hybridity","Third Space","Mimicry"], tags:["culture","postcolonialism","globalisation"],
    summary:"The idea that cultures mix into new forms rather than staying pure or merging into one, from Bhabha’s mimicry and Third Space to García Canclini’s hybrid cultures, with its critics.",
    levels:{
     starter:[
      "Think of a dish that blends ingredients from three continents, or a song that mixes a local rhythm with a global beat. It is neither one culture nor the other, but something new. Scholars call this **hybridity**.",
      "The idea challenges two pictures at once: that cultures are pure and separate, and that globalisation simply makes everything the same.",
      {key:"Hybridity: mixture that produces something new, and that shows no culture was ever pure."}
     ],
     builder:[
      "**Homi Bhabha**, a literary theorist born in Mumbai, argued in *The Location of Culture* (1994) that colonial culture was never pure. In “Of Mimicry and Man” (1984) the colonised subject trained to copy the coloniser is “almost the same, but not quite”, and that gap mocks colonial authority. Meanings are negotiated in a “Third Space”.",
      "**Néstor García Canclini**, an Argentine-born scholar based in Mexico, wrote *Culturas híbridas* (1989; *Hybrid Cultures: Strategies for Entering and Leaving Modernity*, 1995) on how crafts, ritual, mass media and art markets mix in Latin America, with border cities such as Tijuana as cases.",
      "**Jan Nederveen Pieterse** (1994; 2004) presented hybridisation as one of three paradigms of globalisation, alongside lasting difference and convergence."
     ],
     pro:[
      "Critics raise several points. Hybridity can assume that there were once pure cultures to mix. It can sound celebratory while ignoring power and profit: Marwan Kraidy (2005) called it the “cultural logic of globalization” and noted its use by marketers. Marxist critics such as Aijaz Ahmad and Benita Parry argue that Bhabha’s textual approach neglects material conditions of colonialism.",
      "Defenders reply that hybridity is a tool for showing how power works through mixture, not an endorsement of it. Case studies, from K-pop to Afrobeats to Latin American art, now ask who controls the mixing, who profits, and who is recognised as its author.",
      "Pair hybridity with Bourdieu (which mixtures count as cultural capital?) and with political economy (who owns the channels?)."
     ]
    },
    related:["cultural-globalization","edward-said","postcolonialism-ir","arjun-appadurai"],
    sources:[{t:"Wikipedia: Hybridity", url:"https://en.wikipedia.org/wiki/Hybridity"}], checked:"2026-11"},

   {id:"pierre-bourdieu", title:"Pierre Bourdieu", tags:["culture","thinker","sociology"],
    summary:"French sociologist (1930–2002) whose concepts of capital, habitus, field and symbolic violence explain how taste and education reproduce inequality; *Distinction* (1979) is one of the most influential sociology books.",
    levels:{
     starter:[
      "Pierre Bourdieu was born in 1930 in Denguin, a village in south-west France. Sent to Algeria for military service in 1955, he stayed on to teach and to research Kabyle and other Algerian communities during the war of independence (1954–62). From 1981 until his death in 2002 he held the chair of sociology at the Collège de France.",
      "His big idea is that the ways we talk, dress, eat and judge art are learned from our social position, and that schools and elites reward some ways and not others. Taste looks personal but works like a ranking system.",
      {key:"Bourdieu: “Taste classifies, and it classifies the classifier.”"}
     ],
     builder:[
      "**Key works:** *Outline of a Theory of Practice* (1972; English 1977); *Reproduction* (with Jean-Claude Passeron, 1970); *Distinction* (1979; English 1984); *The Logic of Practice* (1980; 1990); “The Forms of Capital” (1983; English 1986); *Homo Academicus* (1984); *An Invitation to Reflexive Sociology* (with Loïc Wacquant, 1992); *The Weight of the World* (ed., 1993); *On Television* (1996).",
      "**Concepts:** economic, cultural, social and symbolic capital; cultural capital in embodied, objectified and institutionalised states; habitus (durable dispositions); field (an arena with its own stakes); symbolic violence (domination through accepted categories).",
      "The International Sociological Association’s members ranked *Distinction* sixth among the century’s most important sociology books."
     ],
     pro:[
      "Critics include Michèle Lamont (1992), who found moral boundaries more important than cultural ones among American professionals; Richard Peterson and Roger Kern (1996), whose cultural omnivore suggests distinction by breadth; and others who find habitus too deterministic or the model too French. Defenders reply that he offered tools to be retested, not universal laws.",
      "In IR, Bourdieu underpins much of the practice turn: Vincent Pouliot on NATO–Russia diplomacy (2010), Rebecca Adler-Nissen’s edited *Bourdieu in International Relations* (2013), and Didier Bigo’s Paris School on fields of security professionals.",
      "He was also a public intellectual who criticised neoliberal reforms in the 1990s. His call for [[reflexivity]], turning the analysis on the researcher’s own position, links to Unit 3’s discussion of [[positionality]]."
     ]
    },
    related:["forms-of-capital","cosmopolitanism-debate","max-weber"],
    read:[{book:"soc", where:"Chapter 16, Section 16.2 “Theoretical Perspectives on Education”"}],
    sources:[{t:"Wikipedia: Pierre Bourdieu", url:"https://en.wikipedia.org/wiki/Pierre_Bourdieu"}], checked:"2026-11"},

   {id:"forms-of-capital", title:"Capital, habitus and field", aka:["Forms of capital","Bourdieu’s field theory"], tags:["culture","sociology","inequality"],
    summary:"Bourdieu’s toolkit: the forms of capital (economic, cultural, social and symbolic) and how they convert, habitus as a feel for the game, fields as arenas of competition, and their use in studies of taste, education and international practice.",
    levels:{
     starter:[
      "Picture a board game in which players hold different kinds of tokens: money, knowledge, friends and reputation. Some tokens can be swapped for others, and some players start with far more. Players who grew up playing the game feel at ease; newcomers must learn the rules.",
      "That is Bourdieu’s picture of social life: **capital** (the tokens), **habitus** (the feel for the game) and **field** (the game itself).",
      {key:"Advantage passes on when capital converts and when the field rewards the habitus of those who already have it."}
     ],
     builder:[
      {table:[["Capital","Example"],["Economic","Money, property"],["Cultural","Knowledge, taste, diplomas"],["Social","Networks, memberships"],["Symbolic","Recognised prestige"]]},
      "**Cultural capital** has three states: embodied (accent, manners), objectified (books, instruments) and institutionalised (degrees).",
      "**Habitus** is the system of lasting dispositions learned from one’s conditions of life.",
      "**Fields** (art, science, journalism, business, diplomacy) have their own stakes. **Symbolic violence** is domination accepted as natural.",
      "**Social space**: Bourdieu mapped positions by total capital and by the balance of cultural and economic capital, and showed tastes clustering by position."
     ],
     pro:[
      "Tests outside France: Lamont (1992) on France and the US; Peterson and Kern (1996) on omnivores; Bennett and others (2009) in Britain. Results show the tools travel, but the content of legitimate culture differs by society and is changing.",
      "Global uses: **transnational cultural capital** (international schooling, languages, study abroad) and cosmopolitanism as cultural capital (Igarashi and Saito, 2014). In IR, fields of diplomacy and security (Pouliot, Adler-Nissen, Bigo) and the “practice turn”.",
      "Method tips: define the field and its boundaries; say what counts as capital in it and how you know; use multiple sources (interviews, careers, texts) because habitus is seen in practice, not declared."
     ]
    },
    related:["pierre-bourdieu","cosmopolitanism-debate","social-stratification"],
    read:[{book:"soc", where:"Chapter 16, Section 16.2 “Theoretical Perspectives on Education”"}],
    sources:[{t:"Wikipedia: Pierre Bourdieu", url:"https://en.wikipedia.org/wiki/Pierre_Bourdieu"}], checked:"2026-11"},

   {id:"cosmopolitanism-debate", title:"Cosmopolitanism and its critics", aka:["Citizen of the world","Rooted cosmopolitanism"], tags:["culture","ethics","globalisation"],
    summary:"The ideal of world citizenship from Diogenes and Kant to Nussbaum, Held, Beck and Appiah, and the critics who call it a view from above or propose plural, vernacular cosmopolitanisms.",
    levels:{
     starter:[
      "When the Greek philosopher Diogenes was asked where he came from, he is said to have answered: “I am a citizen of the world.” That phrase, *kosmopolitēs*, gives us cosmopolitanism: the idea that all people belong to one human community.",
      "Today the word covers an ethical ideal (equal concern for everyone), political projects (institutions beyond the state) and a cultural attitude (openness to other ways of life).",
      {key:"Cosmopolitanism asks what we owe strangers, and critics ask who can afford to feel at home everywhere."}
     ],
     builder:[
      "**Stoics:** each person lives in two communities, the local and the human.",
      "**Kant**, *Perpetual Peace* (1795): a cosmopolitan right to hospitality for peaceful strangers.",
      "**Martha Nussbaum**, “Patriotism and Cosmopolitanism” (1994): moral cosmopolitanism. **David Held**, *Democracy and the Global Order* (1995): cosmopolitan democracy.",
      "**Ulrich Beck**, *The Cosmopolitan Vision* (2006): cosmopolitanisation as fact, banal cosmopolitanism, and the critique of methodological nationalism.",
      "**Kwame Anthony Appiah**, *The Ethics of Identity* (2005) and *Cosmopolitanism: Ethics in a World of Strangers* (2006): rooted cosmopolitanism and conversation across difference."
     ],
     pro:[
      "Critics: Craig Calhoun, “The Class Consciousness of Frequent Travelers” (2002), on elite bias; communitarian and nationalist thinkers who defend national solidarity; and Judith Butler (1996), who argued that what counts as “universal” is shaped by particular cultures and has to be contested and translated. Bourdieu-inspired research treats cosmopolitanism as cultural capital.",
      "Widening the concept: Ulf Hannerz (1990) on cosmopolitans and locals; James Clifford (1992) on discrepant cosmopolitanisms; Pollock, Bhabha, Breckenridge and Chakrabarty (2000) on plural cosmopolitanisms of migrants, traders and refugees.",
      "For IR the debate connects to human rights, global justice, migration and the English School’s solidarists. A strong essay distinguishes the moral, political and cultural strands, because one can accept one and reject another."
     ]
    },
    related:["forms-of-capital","pierre-bourdieu","transnationalism","english-school"],
    sources:[{t:"Wikipedia: Cosmopolitanism", url:"https://en.wikipedia.org/wiki/Cosmopolitanism"}], checked:"2026-11"},

   {id:"popular-culture-world-politics", title:"Popular culture and world politics", aka:["Pop culture and IR","Popular geopolitics"], tags:["culture","media","international relations"],
    summary:"Why IR studies films, games, music and fandoms: the popular culture–world politics continuum (Grayson, Davies and Philpott, 2009), Weldes on *Star Trek*, popular geopolitics, and cases from Godzilla to the three-finger salute.",
    levels:{
     starter:[
      "Many people form their picture of war, spies and foreign countries from films, games and songs. IR scholars now study those texts as part of world politics, not as a break from it.",
      "Some use stories to teach theory; others read them as evidence of public beliefs; others argue that they help create the “common sense” that makes policies seem natural; and some study fans who turn popular culture into protest.",
      {key:"Popular culture represents, constitutes and mobilises world politics."}
     ],
     builder:[
      "**Key works:** Jutta Weldes, “Going Cultural: *Star Trek*, State Action, and Popular Culture” (1999) and *To Seek Out New Worlds* (ed., 2003); James Der Derian, *Virtuous War* (2001), on MIME-NET; Nexon and Neumann, *Harry Potter and International Relations* (2006); Grayson, Davies and Philpott, “Pop Goes IR?” (*Politics*, 2009); Drezner, *Theories of International Politics and Zombies* (2011); Dittmer, *Captain America and the Nationalist Superhero* (2013); Caso and Hamilton (eds), *Popular Culture and World Politics* (E-IR, 2015, open access).",
      "**Cases:** *Godzilla* (1954) and the Lucky Dragon incident, and its 1956 US re-edit; *Wolf Warrior 2* (2017) and the later “wolf warrior diplomacy” label; *This War of Mine* (2014) on a Polish school reading list (2020); the *Hunger Games* three-finger salute in Thailand (2014, 2020–21), Hong Kong and Myanmar."
     ],
     pro:[
      "Methodological debates: How do we move from a text to claims about audiences? Close reading shows what a text makes available; reception evidence (reviews, sales, fan practices, surveys) is needed for claims about effects. Ethnographic and digital methods raise ethical questions about fans’ privacy.",
      "Critics within IR worry that the field picks texts that confirm its arguments, mostly American blockbusters, and neglects non-Western popular culture; recent work on K-pop, Nollywood, anime and Bollywood responds. Others ask whether studying popular culture can show causation at all, or mainly helps interpret meanings.",
      "Popular culture also links to soft power and nation branding (Unit 8) and to media systems and platforms (Unit 7)."
     ]
    },
    related:["cultural-text-analysis","encoding-decoding-model","soft-power-theory","stuart-hall"],
    sources:[{t:"Grayson, Davies & Philpott, “Pop Goes IR?”, Politics 29(3), 2009 (DOI)", url:"https://doi.org/10.1111/j.1467-9256.2009.01351.x"},{t:"White Rose eprints: N. Robinson, “Videogames and IR: Playing at Method” (E-IR, 2015)", url:"https://eprints.whiterose.ac.uk/id/eprint/97839/"},{t:"Goldsmiths Research Online: Franklin and Davies, “What does (the Study of) World Politics Sound Like?” (E-IR, 2015)", url:"https://research.gold.ac.uk/id/eprint/14313"},{t:"Wikipedia: Godzilla (1954 film)", url:"https://en.wikipedia.org/wiki/Godzilla_(1954_film)"},{t:"Wikipedia: Three-finger salute (pro-democracy)", url:"https://en.wikipedia.org/wiki/Three-finger_salute_(pro-democracy)"}], checked:"2026-11"},

   {id:"cultural-text-analysis", title:"Analysing a cultural text", aka:["Circuit of culture","Textual analysis"], tags:["culture","methods","media"],
    summary:"A practical method for a seminar paper on a film, game, song, advert or fandom: the circuit of culture (du Gay, Hall and others, 1997), close reading, intertextuality, reception and ethics.",
    levels:{
     starter:[
      "Analysing a film or game for a seminar is like analysing a treaty: you ask who made it, what it says, how it was received and what it did.",
      "The **circuit of culture** gives five checkpoints: production, representation, identity, consumption and regulation. Each one shapes the others.",
      {key:"A cultural text’s meaning is made across its whole circuit, not only on the screen."}
     ],
     builder:[
      {ol:[
        "Choose the text and say what it is a case of.",
        "Production and regulation: makers, money, censorship, ratings, platform rules.",
        "Close reading: story, heroes and enemies, voices, silences, settings, sound.",
        "Intertextuality: genres, earlier texts and histories it draws on.",
        "Reception: reviews, sales, bans, remakes, fan practice; remember polysemy.",
        "Theory and argument: link to representation, Orientalism, hybridity, capital or soft power."
      ]},
      "The circuit comes from *Doing Cultural Studies: The Story of the Sony Walkman* (1997) by Paul du Gay, Stuart Hall, Linda Janes, Hugh Mackay and Keith Negus."
     ],
     pro:[
      "Common traps: over-reading (treating your interpretation as the meaning), effects without evidence (claiming a text caused attitudes), cherry-picking texts, and ignoring production. Combine close reading with at least one source on reception.",
      "Ethics: fan forums and social media posts are public but their authors may not expect to be quoted. Paraphrase, avoid identifying individuals, and follow the guidance on online research ethics (Units 3 and 7).",
      "Mixed designs work well: a small set of texts chosen on purpose, a coding frame for content, and interviews or published audience data. Say clearly what your evidence can and cannot show."
     ]
    },
    related:["popular-culture-world-politics","encoding-decoding-model","discourse-analysis","fieldwork-ethics"],
    sources:[{t:"OpenStax Introduction to Anthropology: 15.2 Putting Culture into Media Studies", url:"https://openstax.org/books/introduction-anthropology/pages/15-2-putting-culture-into-media-studies"},{t:"Video Games Europe: Poland adds a video game to the official school reading list (2020)", url:"https://www.videogameseurope.eu/news/poland-is-first-government-worldwide-to-add-video-games-to-official-school-reading-list-as-educational-resource/"},{t:"Notes from Poland: Poland puts computer game This War of Mine on school reading list (2020)", url:"https://notesfrompoland.com/2020/06/18/poland-puts-computer-game-this-war-of-mine-on-school-reading-list/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"cultural-turn", term:"Cultural turn", def:"The shift, from the 1990s in IR, towards treating culture, identity and meaning as central to explaining and understanding world politics.", codex:"cultural-turn-ir"},
   {id:"structure-of-feeling", term:"Structure of feeling", def:"Raymond Williams’s phrase for the shared, lived sense of a period or generation, felt before it is clearly put into words.", codex:"raymond-williams"},
   {id:"cultural-toolkit", term:"Cultural toolkit", def:"Ann Swidler’s idea (1986) that culture is a repertoire of habits, stories and skills from which people build strategies of action in different situations.", codex:"cultural-turn-ir"},
   {id:"political-culture", term:"Political culture", def:"Citizens’ shared attitudes and beliefs about politics, as compared in Almond and Verba’s *The Civic Culture* (1963).", codex:"cultural-turn-ir"},
   {id:"strategic-culture", term:"Strategic culture", def:"Shared ideas, habits and assumptions about the use of force in a state or strategic community; coined by Jack Snyder (1977) and tested by Johnston on Ming China (1995).", codex:"cultural-turn-ir"},
   {id:"asian-values", term:"Asian values", def:"The claim, made by some Asian leaders in the 1990s, that values such as family, order and community suit a path different from Western liberal democracy; strongly contested by other Asian voices.", codex:"cultural-turn-ir"},
   {id:"representation-hall", term:"Representation (Hall)", def:"The production of meaning through language, images and other signs. In Hall’s constructionist view, meaning depends on shared, changeable codes rather than on the object itself.", codex:"encoding-decoding-model"},
   {id:"semiotics", term:"Semiotics", def:"The study of signs and how they make meaning, developed from Saussure’s linguistics and applied to culture by Barthes and others.", codex:"encoding-decoding-model"},
   {id:"signifier-signified", term:"Signifier and signified", def:"Saussure’s two parts of a sign: the signifier (a sound, word or image) and the signified (the concept it stands for), linked by convention.", codex:"encoding-decoding-model"},
   {id:"connotation", term:"Connotation", def:"The second, associated meaning a sign carries beyond its literal meaning (denotation), such as national pride suggested by a photo of a flag.", codex:"encoding-decoding-model"},
   {id:"myth-barthes", term:"Myth (Barthes)", def:"Roland Barthes’ term (1957) for a second-order meaning that makes a historical, political idea seem natural, such as an image suggesting an empire is just.", codex:"encoding-decoding-model"},
   {id:"encoding-decoding", term:"Encoding/decoding", def:"Stuart Hall’s model (1973/1980): producers build meanings into a message, and audiences read it from their own social positions, so decoding need not match encoding.", codex:"encoding-decoding-model"},
   {id:"preferred-reading", term:"Preferred reading", def:"The meaning a text’s makers build in and that the text invites; in a dominant-hegemonic reading, the viewer accepts it.", codex:"encoding-decoding-model"},
   {id:"negotiated-reading", term:"Negotiated reading", def:"Accepting a message’s preferred meaning in general while adapting or resisting parts of it in the light of one’s own situation.", codex:"encoding-decoding-model"},
   {id:"oppositional-reading", term:"Oppositional reading", def:"Understanding a message’s preferred meaning but rejecting it and reading it within an alternative framework.", codex:"encoding-decoding-model"},
   {id:"techno-orientalism", term:"Techno-Orientalism", def:"Images of East Asian societies, especially Japan, as hyper-technological but cold or inhuman; a term of David Morley and Kevin Robins.", codex:"orientalism-debate"},
   {id:"occidentalism", term:"Occidentalism", def:"Stereotyped images of “the West”, or the use of such images for domestic political purposes, as in Xiaomei Chen’s study of post-Mao China.", codex:"orientalism-debate"},
   {id:"cultural-homogenization", term:"Cultural homogenisation", def:"The claim or process that cultures become more alike through global media and markets, often seen as a loss of diversity.", codex:"cultural-globalization"},
   {id:"media-imperialism", term:"Media imperialism", def:"The thesis (Schiller, Tunstall, Boyd-Barrett) that media flows from powerful countries dominate others and spread their values, without equal influence in return.", codex:"cultural-globalization"},
   {id:"cultural-proximity", term:"Cultural proximity", def:"Joseph Straubhaar’s finding (1991) that audiences tend to prefer national media first, then media from culturally or linguistically close countries.", codex:"cultural-globalization"},
   {id:"contra-flow", term:"Contra-flow", def:"Daya Thussu’s term (2007) for media flows from outside the traditional Western centres, such as Indian cinema, Korean drama or Nollywood.", codex:"cultural-globalization"},
   {id:"grobalization", term:"Grobalisation", def:"George Ritzer’s term (2004) for the drive of large companies, organisations and states to grow by imposing themselves worldwide; his counterpart to glocalisation.", codex:"cultural-globalization"},
   {id:"scapes", term:"Scapes (Appadurai)", def:"Arjun Appadurai’s five dimensions of global cultural flow: ethnoscapes, mediascapes, technoscapes, financescapes and ideoscapes, moving out of step with one another.", codex:"arjun-appadurai"},
   {id:"deterritorialization", term:"Deterritorialisation", def:"The loosening of the tie between culture and place, as when people, media and ideas from many places mix in everyday life (Tomlinson, Appadurai, García Canclini).", codex:"cultural-globalization"},
   {id:"hybridity", term:"Hybridity", def:"Cultural mixing that produces new forms, and shows that no culture was ever pure; associated with Bhabha, García Canclini and Pieterse.", codex:"hybridity-theory"},
   {id:"third-space", term:"Third Space", def:"Homi Bhabha’s term for the in-between space where cultures meet and meanings are negotiated, unsettling claims to purity.", codex:"hybridity-theory"},
   {id:"colonial-mimicry", term:"Mimicry (Bhabha)", def:"Bhabha’s idea (1984) that colonised subjects trained to copy the coloniser are “almost the same, but not quite”, a gap that mocks colonial authority.", codex:"hybridity-theory"},
   {id:"cultural-odour", term:"Cultural odour", def:"Iwabuchi Kōichi’s idea that some cultural exports sell widely because they seem “odourless”, not obviously marked by their country of origin.", codex:"cultural-globalization"},
   {id:"bollywood", term:"Bollywood", def:"The Hindi-language film industry based in Mumbai (formerly Bombay); one part of India’s many film industries, alongside Telugu, Tamil, Bengali and others.", codex:"cultural-globalization"},
   {id:"nollywood", term:"Nollywood", def:"Nigeria’s film industry, which grew from direct-to-video films in the late 1980s and 1990s, such as *Living in Bondage* (1992), and now reaches audiences across Africa and the diaspora.", codex:"cultural-globalization"},
   {id:"telenovela", term:"Telenovela", def:"A Latin American television serial with a set end, usually melodrama; many, from Mexico and Brazil, have been exported worldwide.", codex:"cultural-globalization"},
   {id:"habitus", term:"Habitus", def:"Bourdieu’s term for the lasting dispositions (ways of perceiving, judging and acting) that people absorb from their conditions of life, felt as natural.", codex:"forms-of-capital"},
   {id:"field-bourdieu", term:"Field (Bourdieu)", def:"A social arena, such as art, academia or diplomacy, with its own stakes and rules, where people compete for the capital that the field values.", codex:"forms-of-capital"},
   {id:"social-capital", term:"Social capital", def:"In Bourdieu’s sense, the resources available through durable networks of relationships and group membership. (Robert Putnam uses the term more broadly for community trust.)", codex:"forms-of-capital"},
   {id:"symbolic-capital", term:"Symbolic capital", def:"Prestige, honour or authority: any form of capital once others recognise it as legitimate.", codex:"forms-of-capital"},
   {id:"symbolic-violence", term:"Symbolic violence", def:"Bourdieu’s term for domination that works through categories the dominated accept, so that unequal positions seem natural or deserved.", codex:"forms-of-capital"},
   {id:"cultural-omnivore", term:"Cultural omnivore", def:"Peterson and Kern’s term (1996) for high-status people who enjoy a wide range of genres, high and popular, so that distinction lies in breadth.", codex:"forms-of-capital"},
   {id:"cosmopolitanism", term:"Cosmopolitanism", def:"The idea that all people belong to one human community; it has moral, political and cultural strands, each with critics.", codex:"cosmopolitanism-debate"},
   {id:"rooted-cosmopolitanism", term:"Rooted cosmopolitanism", def:"Kwame Anthony Appiah’s view that concern for all humanity can coexist with loyalty to one’s own community, and with respect for legitimate difference.", codex:"cosmopolitanism-debate"},
   {id:"banal-cosmopolitanism", term:"Banal cosmopolitanism", def:"Ulrich Beck’s term for everyday mixing of the global into ordinary life, such as food, music and news from many places, often without choice or reflection.", codex:"cosmopolitanism-debate"},
   {id:"pop-culture-continuum", term:"Popular culture–world politics continuum", def:"Grayson, Davies and Philpott’s idea (2009) that popular culture and world politics are bound together, not separate realms, with meanings flowing both ways.", codex:"popular-culture-world-politics"},
   {id:"popular-geopolitics", term:"Popular geopolitics", def:"The study of how films, comics, games, news and other popular texts map the world into friends, enemies and dangerous places.", codex:"popular-culture-world-politics"},
   {id:"mime-net", term:"MIME-NET", def:"James Der Derian’s term (2001) for the military–industrial–media–entertainment network linking defence, media and entertainment industries.", codex:"popular-culture-world-politics"},
   {id:"fandom", term:"Fandom", def:"A community of committed fans of a text, artist or genre, which can organise, create and sometimes act politically.", codex:"popular-culture-world-politics"},
   {id:"circuit-of-culture", term:"Circuit of culture", def:"A model from du Gay, Hall and others (1997) in which a text’s meaning is made across five linked moments: production, representation, identity, consumption and regulation.", codex:"cultural-text-analysis"},
   {id:"textual-analysis", term:"Textual analysis", def:"Close reading of a text’s story, characters, images, sound and structure to show what meanings it makes available.", codex:"cultural-text-analysis"},
   {id:"audience-research", term:"Audience research", def:"Studying how real audiences receive, interpret and use media, through interviews, focus groups, surveys, reviews or fan practices.", codex:"cultural-text-analysis"},
   {id:"polysemy", term:"Polysemy", def:"The capacity of a sign or text to carry many possible meanings, which different audiences take up unevenly.", codex:"cultural-text-analysis"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u5-q01", lesson:"e4u5-l1", level:1, q:"Which book called “culture” “one of the two or three most complicated words in the English language”?", options:[
     {t:"Raymond Williams, *Keywords* (1976)", ok:true, why:"Correct. Williams traced the history of the word and its three modern senses."},
     {t:"Edward Tylor, *Primitive Culture* (1871)", why:"Tylor gave the anthropological “complex whole” definition, not this remark."},
     {t:"Clifford Geertz, *The Interpretation of Cultures* (1973)", why:"Geertz defined culture as webs of significance; the remark is Williams’s."},
     {t:"Matthew Arnold, *Culture and Anarchy* (1869)", why:"Arnold defined culture as “the best which has been thought and said”."}
   ]},
   {id:"e4u5-q02", lesson:"e4u5-l1", level:2, q:"A minister says: “Our culture means we will never accept foreign-style elections.” Which critique from this lesson applies most directly?", options:[
     {t:"It treats culture as a fixed essence and speaks for a whole people, leaving out internal debate", ok:true, why:"Correct. Abu-Lughod and the practice view warn against bounded, uniform, timeless cultures; the analyst asks who speaks for a culture."},
     {t:"It confuses culture with the arts sense of the word", why:"The minister uses the way-of-life sense; the problem is essentialism, not the wrong sense."},
     {t:"It is a thick description and therefore reliable", why:"It is a sweeping claim, not a description of meanings in context."},
     {t:"It proves that culture determines politics", why:"A political claim about culture is evidence of how culture is used, not proof of determination."}
   ]},
   {id:"e4u5-q03", lesson:"e4u5-l1", level:1, q:"Geertz borrowed the example of the twitch and the wink from which philosopher?", options:[
     {t:"Gilbert Ryle", ok:true, why:"Correct. Geertz took the example from Ryle to explain thick description."},
     {t:"Max Weber", why:"Geertz cited Weber for the “webs of significance” idea, not the wink."},
     {t:"Ferdinand de Saussure", why:"Saussure is the linguist of signifier and signified."},
     {t:"Michel Foucault", why:"Foucault is linked to discourse and power, not the wink example."}
   ]},
   {id:"e4u5-q04", lesson:"e4u5-l1", level:2, q:"Amara writes that people in her city use religious, national and global ideas differently at work, at home and online, depending on what they need. Which idea best fits?", options:[
     {t:"Swidler’s cultural toolkit", ok:true, why:"Correct. People draw different tools from a repertoire for different strategies of action."},
     {t:"Hofstede’s national dimensions", why:"Hofstede assigns one score per nation, the opposite of situational use."},
     {t:"Arnold’s “best which has been thought and said”", why:"That defines culture as a standard of excellence, not as tools in use."},
     {t:"Strategic culture", why:"Strategic culture concerns ideas about the use of force, not everyday repertoires."}
   ]},
   {id:"e4u5-q05", lesson:"e4u5-l1", level:1, q:"Who coined the term “strategic culture”, in a 1977 RAND report on the Soviet Union?", options:[
     {t:"Jack Snyder", ok:true, why:"Correct. Snyder’s report introduced the term."},
     {t:"Alastair Iain Johnston", why:"Johnston tested the concept on Ming China in 1995."},
     {t:"Colin Gray", why:"Gray debated Johnston about it in 1999."},
     {t:"Gabriel Almond", why:"Almond, with Verba, studied political culture in 1963."}
   ]},
   {id:"e4u5-q06", lesson:"e4u5-l1", level:3, q:"Kenji’s thesis argues that a country’s defence policy follows its “culture of restraint”. A reviewer asks whether culture is a cause, a context or a resource in his argument. Why does the question matter?", options:[
     {t:"Each role needs different evidence: a cause must be shown to push choices; a context to shape what is thinkable; a resource to be invoked by actors", ok:true, why:"Correct. Saying which role culture plays tells the reader what evidence will test the claim."},
     {t:"It does not matter, because culture explains everything", why:"An argument that explains everything cannot be tested."},
     {t:"Only causes count in IR, so the other roles are irrelevant", why:"Interpretive scholars stress context and constitution; all three roles appear in good research."},
     {t:"Because culture can only be a resource, never a cause", why:"Scholars disagree; the point is to say which claim you make."}
   ]},
   {id:"e4u5-q07", lesson:"e4u5-l1", level:2, q:"What did Johnston’s *Cultural Realism* (1995) conclude about Ming China?", options:[
     {t:"A practical “parabellum” strategic culture favouring force when strong lay behind texts praising restraint", ok:true, why:"Correct. Johnston found culture mattered, but its content was close to realism."},
     {t:"Confucian pacifism prevented any use of force", why:"Johnston found the opposite in practice."},
     {t:"Strategic culture does not exist", why:"He found a distinct strategic culture; its content surprised readers."},
     {t:"Ming China copied Mongol strategy unchanged", why:"That was not his finding."}
   ]},
   {id:"e4u5-q08", lesson:"e4u5-l1", level:2, q:"Which statement about the Asian values debate is accurate and neutral?", options:[
     {t:"Some Asian leaders promoted the idea in the 1990s, and other Asian voices, such as Kim Dae-jung, rejected it", ok:true, why:"Correct. The debate was internal to Asia as well as between Asia and the West."},
     {t:"All Asian governments agreed that democracy is foreign to Asia", why:"Asian governments and leaders disagreed sharply."},
     {t:"The debate proved that culture is destiny", why:"Whether culture is destiny was the very point in dispute."},
     {t:"It was only an argument among Western scholars", why:"Asian leaders and thinkers led both sides."}
   ]},
   {id:"e4u5-q09", lesson:"e4u5-l1", level:1, q:"What was the main point of Lila Abu-Lughod’s “Writing against Culture” (1991)?", options:[
     {t:"Talk of “a culture” can freeze people into bounded, uniform, timeless groups", ok:true, why:"Correct. She criticised the essentialising use of the culture concept."},
     {t:"Culture should be measured with national scores", why:"She criticised exactly that kind of bounded, uniform picture."},
     {t:"Anthropologists should stop doing fieldwork", why:"She argued for different ways of writing about people, not for ending fieldwork."},
     {t:"Only high culture deserves study", why:"Her argument had nothing to do with high culture."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e4u5-q10", lesson:"e4u5-l2", level:1, q:"In Hall’s constructionist approach, where does meaning come from?", options:[
     {t:"Shared, changeable systems of signs and codes", ok:true, why:"Correct. Meaning is produced through representation, not found in objects or authors alone."},
     {t:"The object itself, which words mirror", why:"That is the reflective approach Hall criticised."},
     {t:"Only the author’s intention", why:"That is the intentional approach."},
     {t:"Biology", why:"Hall’s point is that meaning is cultural, not biological."}
   ]},
   {id:"e4u5-q11", lesson:"e4u5-l2", level:2, q:"A tourism poster shows a smiling farmer in a rice field at sunrise, with the slogan “Timeless hospitality”. In Barthes’ terms, which is the myth?", options:[
     {t:"That the country is unchanging, gentle and welcoming by nature", ok:true, why:"Correct. The second-order meaning presents a historical image as natural and timeless."},
     {t:"That a farmer is standing in a field", why:"That is the denotation, the first-level meaning."},
     {t:"That the poster uses colour ink", why:"That is the material signifier."},
     {t:"That the poster is lying", why:"Barthes’ myth is not a lie but a naturalised meaning."}
   ]},
   {id:"e4u5-q12", lesson:"e4u5-l2", level:1, q:"Which are Hall’s three decoding positions?", options:[
     {t:"Dominant-hegemonic, negotiated and oppositional", ok:true, why:"Correct. These are the positions in Encoding/Decoding."},
     {t:"Reflective, intentional and constructionist", why:"These are Hall’s three approaches to representation, not decoding positions."},
     {t:"Denotation, connotation and myth", why:"These are Barthes’ levels of meaning."},
     {t:"Production, consumption and regulation", why:"These are moments in the circuit of culture."}
   ]},
   {id:"e4u5-q13", lesson:"e4u5-l2", level:3, q:"Priya studies how viewers in three countries discuss an international news channel’s coverage of a summit. Some accept its framing, some accept it but complain about their country’s portrayal, and some call it propaganda. What does this pattern most support?", options:[
     {t:"Hall’s point that decoding depends on viewers’ social and national positions", ok:true, why:"Correct. The three responses map onto dominant, negotiated and oppositional readings."},
     {t:"The media imperialism thesis that audiences absorb what they see", why:"The variety of readings challenges passive absorption."},
     {t:"Barthes’ claim that all images are lies", why:"Barthes did not say that, and the study is about reception."},
     {t:"That the channel encoded no preferred reading", why:"Viewers recognised a framing; they reacted to it differently."}
   ]},
   {id:"e4u5-q14", lesson:"e4u5-l2", level:2, q:"What did Liebes and Katz’s *The Export of Meaning* (1990) study?", options:[
     {t:"How groups in Israel and the United States retold and judged the soap *Dallas* differently", ok:true, why:"Correct. The study found active, negotiated readings of an exported show."},
     {t:"The share of US films in world box offices", why:"Their study was about audiences’ readings, not market share."},
     {t:"Hollywood images of Arabs", why:"That was Jack Shaheen’s *Reel Bad Arabs*."},
     {t:"Paris Match covers", why:"That was Barthes."}
   ]},
   {id:"e4u5-q15", lesson:"e4u5-l2", level:2, q:"Which is one of Said’s three senses of “Orientalism”?", options:[
     {t:"A corporate institution for dealing with the Orient: describing, teaching, settling and ruling it", ok:true, why:"Correct. Alongside an academic field and a style of thought."},
     {t:"Any Western interest in Asian art", why:"Said criticised a style of thought bound up with power, not interest as such."},
     {t:"A school of Asian philosophy", why:"Orientalism in Said’s sense is about Western representations."},
     {t:"An economic theory of trade with Asia", why:"Said’s concept is cultural and political, not a trade theory."}
   ]},
   {id:"e4u5-q16", lesson:"e4u5-l2", level:2, q:"Sadiq Jalal al-Azm (1981) warned of “Orientalism in reverse”. What did he mean?", options:[
     {t:"Critiques of Orientalism can essentialise “the West” and simply reverse the binary", ok:true, why:"Correct. Al-Azm feared a mirror-image essentialism."},
     {t:"Western scholars should stop studying Asia", why:"That was not his argument."},
     {t:"Orientalism was a German invention", why:"Irwin discussed German scholars; al-Azm’s point was about essentialism."},
     {t:"Said was right in every respect", why:"Al-Azm was a critic of parts of Said’s argument."}
   ]},
   {id:"e4u5-q17", lesson:"e4u5-l2", level:3, q:"Dmitri notices that a government’s media portray “the West” as morally decadent, while opposition writers in the same country portray it as a model of freedom. Which idea best describes this?", options:[
     {t:"Occidentalism in Xiaomei Chen’s sense: images of the West used for domestic political purposes", ok:true, why:"Correct. Both the state and its critics use images of the West to argue about home politics."},
     {t:"Orientalism in Said’s sense", why:"Said’s Orientalism concerns Western images of the Orient."},
     {t:"Techno-Orientalism", why:"That concerns images of East Asia as hyper-technological."},
     {t:"Cultural proximity", why:"That is about audience preferences for nearby content."}
   ]},
   {id:"e4u5-q18", lesson:"e4u5-l2", level:1, q:"According to Hall’s “The Spectacle of the ‘Other’” (1997), what does stereotyping do?", options:[
     {t:"Reduces people to a few traits, fixes them, and draws a boundary between “normal” and “other”", ok:true, why:"Correct. Hall linked stereotyping to power and boundary-making."},
     {t:"Gives an accurate average of a group", why:"Stereotypes simplify and fix; they are not accurate averages."},
     {t:"Only happens in advertising", why:"Hall found it across media, science and politics."},
     {t:"Is harmless when positive", why:"Positive stereotypes still reduce and fix people."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e4u5-q19", lesson:"e4u5-l3", level:1, q:"Which three paradigms of cultural globalisation did Pieterse (2004) distinguish?", options:[
     {t:"Lasting difference, convergence and hybridisation", ok:true, why:"Correct. Clash, McDonaldization and mixing."},
     {t:"Realism, liberalism and constructivism", why:"These are IR theories, not paradigms of cultural globalisation."},
     {t:"Ethnoscapes, mediascapes and ideoscapes", why:"These are three of Appadurai’s scapes."},
     {t:"Dominant, negotiated and oppositional", why:"These are Hall’s reading positions."}
   ]},
   {id:"e4u5-q20", lesson:"e4u5-l3", level:2, q:"Which work read Disney comics as teaching Latin American children consumer and colonial values?", options:[
     {t:"Dorfman and Mattelart, *Para leer al Pato Donald* (1971)", ok:true, why:"Correct. Written in Chile, translated as *How to Read Donald Duck* (1975)."},
     {t:"Tomlinson, *Cultural Imperialism* (1991)", why:"Tomlinson criticised the cultural imperialism thesis."},
     {t:"Watson, *Golden Arches East* (1997)", why:"Watson studied McDonald’s in East Asia."},
     {t:"Appadurai, *Modernity at Large* (1996)", why:"Appadurai proposed the scapes."}
   ]},
   {id:"e4u5-q21", lesson:"e4u5-l3", level:2, q:"Which is NOT one of Tomlinson’s criticisms of the cultural imperialism thesis?", options:[
     {t:"It overstates how much culture travels at all", ok:true, why:"Correct: this is not his criticism. Tomlinson accepted that culture travels widely; he questioned what that does."},
     {t:"It assumes passive audiences", why:"This is one of his criticisms."},
     {t:"It assumes authentic national cultures to be lost", why:"This is one of his criticisms."},
     {t:"It blames America for the spread of capitalism and modernity", why:"This is one of his criticisms."}
   ]},
   {id:"e4u5-q22", lesson:"e4u5-l3", level:3, q:"Ana compares a global coffee chain’s menus: in Japan it sells seasonal sakura drinks, in India it offers locally inspired snacks, but its logo, store design and loyalty app are identical everywhere. How would Robertson and Ritzer each read this?", options:[
     {t:"Robertson sees glocalisation (global and local together); Ritzer stresses grobalisation (the standard core imposed everywhere)", ok:true, why:"Correct. The same case supports both readings; the debate is about which matters more."},
     {t:"Both see pure homogenisation", why:"Robertson’s glocalisation stresses the local adaptations."},
     {t:"Both see hybridity in Bhabha’s colonial sense", why:"Bhabha’s concept concerns colonial culture, not menu adaptation."},
     {t:"Neither would discuss a company", why:"Both used companies as key examples."}
   ]},
   {id:"e4u5-q23", lesson:"e4u5-l3", level:2, q:"Remittances sent from Gulf states to families in Kerala are, in Appadurai’s terms, part of which scape?", options:[
     {t:"Financescape", ok:true, why:"Correct. Flows of money."},
     {t:"Mediascape", why:"Mediascapes are flows of images and stories."},
     {t:"Ideoscape", why:"Ideoscapes are flows of political ideas."},
     {t:"Technoscape", why:"Technoscapes are flows of technology."}
   ]},
   {id:"e4u5-q24", lesson:"e4u5-l3", level:1, q:"What did Watson’s *Golden Arches East* (1997) find?", options:[
     {t:"Customers in East Asian cities reshaped how McDonald’s was used, as much as it reshaped them", ok:true, why:"Correct. Watson stressed localisation."},
     {t:"McDonald’s failed in every East Asian city", why:"The restaurants were popular."},
     {t:"Fast food erased local food cultures entirely", why:"That is the homogenisation claim his study complicated."},
     {t:"Only prices differed between cities", why:"Uses of space and meaning differed widely."}
   ]},
   {id:"e4u5-q25", lesson:"e4u5-l3", level:2, q:"What did Bhabha mean by colonial mimicry being “almost the same, but not quite”?", options:[
     {t:"The colonised who copy the coloniser expose a gap that unsettles and mocks colonial authority", ok:true, why:"Correct. Mimicry produces ambivalence, not simple obedience."},
     {t:"Colonised people always failed to learn the coloniser’s language", why:"The point is the unsettling gap, not failure."},
     {t:"Copying is always a form of cultural imperialism", why:"Bhabha stressed the subversive ambivalence of mimicry."},
     {t:"Colonial cultures were pure", why:"Bhabha argued the opposite."}
   ]},
   {id:"e4u5-q26", lesson:"e4u5-l3", level:3, q:"Oluwaseun argues: “Nollywood and K-pop prove cultural imperialism is over.” Which response is strongest?", options:[
     {t:"Contra-flows are real, but distribution and platforms are often owned elsewhere, so ask who controls which part of the flow", ok:true, why:"Correct. Thussu’s contra-flows coexist with concentrated ownership (Jin’s platform argument)."},
     {t:"Nollywood and K-pop are not popular abroad", why:"Both have large international audiences."},
     {t:"Cultural imperialism was never discussed by scholars", why:"It was a major thesis (Schiller and others)."},
     {t:"Popularity proves political influence", why:"Popularity does not by itself show influence."}
   ]},
   {id:"e4u5-q27", lesson:"e4u5-l3", level:1, q:"Where is the term “Korean Wave” usually said to have first appeared?", options:[
     {t:"In Chinese newspapers in 1999", ok:true, why:"Correct. The first known use usually cited is in the *Beijing Youth Daily* of 19 November 1999."},
     {t:"In a Seoul government campaign in 2008", why:"The term predates that; it came from China."},
     {t:"On Japanese television in 2004", why:"*Winter Sonata* spread the wave in Japan, but the term began in China."},
     {t:"In an American magazine in 2012", why:"That was the “Gangnam Style” year, long after the term appeared."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e4u5-q28", lesson:"e4u5-l4", level:1, q:"Which line comes from Bourdieu’s *Distinction*?", options:[
     {t:"“Taste classifies, and it classifies the classifier.”", ok:true, why:"Correct. Judging taste places the judge in social space."},
     {t:"“Culture is ordinary.”", why:"That is Raymond Williams."},
     {t:"“The danger of a single story.”", why:"That is Chimamanda Ngozi Adichie."},
     {t:"“Almost the same, but not quite.”", why:"That is Homi Bhabha on mimicry."}
   ]},
   {id:"e4u5-q29", lesson:"e4u5-l4", level:2, q:"A diploma from a well-known university is which form of capital?", options:[
     {t:"Institutionalised cultural capital", ok:true, why:"Correct. Official certification of cultural capital."},
     {t:"Embodied cultural capital", why:"Embodied capital is in the person: accent, manners, ease."},
     {t:"Social capital", why:"Social capital is networks, though a degree may open them."},
     {t:"Objectified cultural capital", why:"Objectified capital is cultural goods such as books or art."}
   ]},
   {id:"e4u5-q30", lesson:"e4u5-l4", level:3, q:"Mei, a first-generation student from a rural area, joins a diplomacy training programme. She scores well on exams but struggles with the informal style of receptions, and colleagues describe her as “not a natural”. Which analysis is most Bourdieusian?", options:[
     {t:"The field rewards a habitus that others acquired at home, and calling it “natural” is symbolic violence", ok:true, why:"Correct. Learned dispositions are misrecognised as innate talent."},
     {t:"She lacks economic capital, so nothing else matters", why:"The case is about habitus and recognition, not money alone."},
     {t:"Receptions are irrelevant to diplomacy", why:"In this field they are where capital is displayed and judged."},
     {t:"She is a cultural omnivore", why:"Omnivorousness concerns broad taste, not fit with a field."}
   ]},
   {id:"e4u5-q31", lesson:"e4u5-l4", level:2, q:"How did Pouliot (2010) use Bourdieu in IR?", options:[
     {t:"To show how diplomats’ habitus and sense of rank shaped NATO–Russia cooperation", ok:true, why:"Correct. A key work of the practice turn."},
     {t:"To measure GDP growth in Russia", why:"His study is about diplomatic practice."},
     {t:"To study French taste in music", why:"That was Bourdieu’s own *Distinction*."},
     {t:"To prove that habitus does not exist in diplomacy", why:"He argued it mattered."}
   ]},
   {id:"e4u5-q32", lesson:"e4u5-l4", level:2, q:"What did Michèle Lamont’s *Money, Morals, and Manners* (1992) find?", options:[
     {t:"American upper-middle-class men drew moral and economic boundaries more than cultural ones, unlike their French counterparts", ok:true, why:"Correct. Bourdieu’s France was not everywhere."},
     {t:"Taste is identical in France and the US", why:"She found important differences."},
     {t:"Cultural capital does not exist", why:"She argued its weight varies between societies."},
     {t:"Only economic capital matters in France", why:"Cultural boundaries were stronger in her French sample."}
   ]},
   {id:"e4u5-q33", lesson:"e4u5-l4", level:3, q:"Fatima argues that “being a global citizen” is mostly available to those with passports, money and international schooling. Which thinker’s critique is closest?", options:[
     {t:"Craig Calhoun, on “the class consciousness of frequent travellers”", ok:true, why:"Correct. Calhoun argued much cosmopolitan theory reflects mobile elites."},
     {t:"Immanuel Kant, on hospitality", why:"Kant defended a cosmopolitan right; he is not this critic."},
     {t:"Martha Nussbaum, on moral cosmopolitanism", why:"Nussbaum defended cosmopolitanism."},
     {t:"Arjun Appadurai, on the scapes", why:"Appadurai described flows, not this class critique."}
   ]},
   {id:"e4u5-q34", lesson:"e4u5-l4", level:1, q:"What did Ulrich Beck mean by “methodological nationalism”?", options:[
     {t:"The habit of treating the nation-state as the natural container of society in research", ok:true, why:"Correct. Beck urged social science to look beyond it."},
     {t:"A method for building national identity", why:"It is a critique of research habits, not a nation-building method."},
     {t:"A nationalist political party programme", why:"It is not a political programme."},
     {t:"The study of national anthems", why:"It concerns how research frames society."}
   ]},
   {id:"e4u5-q35", lesson:"e4u5-l4", level:2, q:"Which best summarises Appiah’s rooted cosmopolitanism?", options:[
     {t:"Concern for all humanity alongside loyalty to one’s own people and respect for legitimate difference", ok:true, why:"Correct. Appiah combines universal concern with local attachment."},
     {t:"Rejecting all local loyalties", why:"Appiah explicitly keeps local loyalties."},
     {t:"A world government replacing states", why:"That is closer to strong political cosmopolitanism."},
     {t:"Keeping cultures separate to avoid contact", why:"Appiah stresses conversation across difference."}
   ]},
   {id:"e4u5-q36", lesson:"e4u5-l4", level:2, q:"Peterson and Kern’s “cultural omnivore” (1996) challenged which picture of taste?", options:[
     {t:"That high status means liking only exclusive highbrow forms", ok:true, why:"Correct. High-status Americans liked many genres; distinction lay in breadth."},
     {t:"That taste is linked to status at all", why:"They found a new link, not no link."},
     {t:"That people have any musical taste", why:"Their study measured taste in detail."},
     {t:"That habitus exists", why:"Their focus was the content of taste, not rejecting habitus."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e4u5-q37", lesson:"e4u5-l5", level:1, q:"Which article proposed a “popular culture–world politics continuum”?", options:[
     {t:"Grayson, Davies and Philpott, “Pop Goes IR?” (2009)", ok:true, why:"Correct. Published in *Politics* 29(3)."},
     {t:"Weldes, “Going Cultural” (1999)", why:"Weldes studied *Star Trek* and state action; the continuum is Grayson, Davies and Philpott."},
     {t:"Hall, “Encoding/Decoding” (1980)", why:"Hall’s model concerns media reception."},
     {t:"Said, “The Clash of Ignorance” (2001)", why:"Said’s essay criticised Huntington."}
   ]},
   {id:"e4u5-q38", lesson:"e4u5-l5", level:2, q:"Weldes argued that *Star Trek* matters for IR because:", options:[
     {t:"Popular texts help build the common sense that makes foreign policy seem natural", ok:true, why:"Correct. This is the constitutive view."},
     {t:"It accurately predicts future wars", why:"Her claim is about meaning and common sense, not prediction."},
     {t:"It was made by the State Department", why:"It was a commercial series."},
     {t:"Only science fiction is political", why:"She used science fiction as one case."}
   ]},
   {id:"e4u5-q39", lesson:"e4u5-l5", level:2, q:"Why do scholars compare the 1954 Japanese *Godzilla* with its 1956 US version?", options:[
     {t:"The re-edit added new scenes and trimmed political themes, showing how production for a new market changes a text", ok:true, why:"Correct. Same monster, two texts, two politics."},
     {t:"The two versions are identical", why:"They differ substantially."},
     {t:"The 1956 version added more criticism of nuclear testing", why:"Many political themes were trimmed, not added."},
     {t:"Neither version mentions nuclear weapons", why:"The 1954 film clearly echoed nuclear testing."}
   ]},
   {id:"e4u5-q40", lesson:"e4u5-l5", level:1, q:"What does James Der Derian’s MIME-NET (2001) refer to?", options:[
     {t:"The military–industrial–media–entertainment network", ok:true, why:"Correct. Links between defence, media and entertainment."},
     {t:"A UN media monitoring network", why:"It is an analytic term, not an organisation."},
     {t:"A video-game engine", why:"It is not software."},
     {t:"An encryption standard", why:"It has nothing to do with encryption."}
   ]},
   {id:"e4u5-q41", lesson:"e4u5-l5", level:3, q:"Sione’s draft says: “The film topped the box office, so it caused a rise in nationalism.” What is the best advice?", options:[
     {t:"Box office shows popularity, not effects; add audience evidence such as surveys, reviews or fan discussion before claiming influence", ok:true, why:"Correct. Claims about effects need reception evidence."},
     {t:"Box office is enough evidence of any effect", why:"Popularity does not show how people interpreted a film."},
     {t:"Remove the box-office figure", why:"It is useful evidence of reach; the problem is the causal leap."},
     {t:"Quote the director’s intention instead", why:"Intention does not settle meaning or effects."}
   ]},
   {id:"e4u5-q42", lesson:"e4u5-l5", level:2, q:"In the circuit of culture, censorship rules and age ratings belong to which moment?", options:[
     {t:"Regulation", ok:true, why:"Correct. Rules, censorship and platform policies."},
     {t:"Identity", why:"Identity concerns who the text invites us to be."},
     {t:"Consumption", why:"Consumption is what audiences do with the text."},
     {t:"Representation", why:"Representation is the meanings the text offers."}
   ]},
   {id:"e4u5-q43", lesson:"e4u5-l5", level:2, q:"After the 2014 coup, Thai protesters used the three-finger salute from *The Hunger Games*. What does the case illustrate?", options:[
     {t:"Fans and protesters can take up a sign from popular culture and give it new political meaning", ok:true, why:"Correct. Popular culture as a site of action."},
     {t:"The films were made to support Thai protesters", why:"The meaning was made by users, not the makers."},
     {t:"Popular culture has no political effects", why:"The authorities’ warnings show they took it seriously."},
     {t:"The salute was invented by the Thai military", why:"It came from the films."}
   ]},
   {id:"e4u5-q44", lesson:"e4u5-l5", level:3, q:"Hana wants to quote individual fans’ posts from a public forum in her seminar paper. What is the most ethical approach?", options:[
     {t:"Paraphrase patterns and avoid identifying individuals, following online research ethics guidance", ok:true, why:"Correct. Public posts may still carry an expectation of privacy."},
     {t:"Quote usernames and posts exactly, because everything public is fair to use", why:"Public is not the same as consenting to be quoted in research."},
     {t:"Contact fans pretending to be another fan to get more quotes", why:"Deception is unethical and not needed."},
     {t:"Screenshot profiles to prove the posts are real", why:"This increases identifiability and risk."}
   ]},
   {id:"e4u5-q45", lesson:"e4u5-l5", level:1, q:"Which book uses a zombie outbreak to explain IR theories?", options:[
     {t:"Daniel Drezner, *Theories of International Politics and Zombies* (2011)", ok:true, why:"Correct. A teaching mirror for realism, liberalism and more."},
     {t:"Jason Dittmer, *Captain America and the Nationalist Superhero* (2013)", why:"Dittmer studied a comic hero."},
     {t:"Nexon and Neumann, *Harry Potter and International Relations* (2006)", why:"That uses Harry Potter."},
     {t:"Der Derian, *Virtuous War* (2001)", why:"Der Derian studied the military–media network."}
   ]}
  ]
});
