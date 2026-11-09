/* International Studies · Unit 6 · Identity, nation and race */
ICA.addUnit({
  id:"e4u6", track:"e4", n:6, title:"Identity, nation and race", icon:"🧬",
  blurb:"How identities are made and why they matter in world politics: self and other, recognition and intersectionality; the great theories of nations and nationalism, with cases from Asia and beyond; race in the making of the international order and the UN’s fight against racial discrimination; ethnicity, conflict, minority and indigenous rights and language politics; and religion, secularism and the “clash of civilizations” debate. Neutral throughout: who argues what, and what the evidence shows.",
  goals:[
    "Explain how identities are socially constructed through difference, and use self/other, ontological security, recognition and intersectionality to analyse a real case",
    "Compare modernist, ethno-symbolist and perennialist theories of the nation (Gellner, Anderson, Hobsbawm and Ranger, Smith, Billig) and apply them to anti-colonial, developmental and online nationalism in Asia and elsewhere",
    "Trace how race shaped the international order and the study of IR, from Du Bois’s colour line and the 1919 Racial Equality Proposal to ICERD, CERD and the Durban process",
    "Weigh primordialist, instrumentalist and constructivist accounts of ethnicity against the evidence on ethnic conflict, and explain minority rights, UNDRIP and language politics",
    "Discuss secularisation and its critics, the “return of religion” in IR, religion as soft power, and Huntington’s clash thesis with its critics and empirical tests"
  ],
  read:[
    {book:"eirt", where:"Chapter 8 “Feminism”, Chapter 9 “Postcolonialism” and Chapter 18 “Indigenous Perspectives”", note:"Short chapters that connect this unit’s themes to IR theory."},
    {book:"eir", where:"Chapter 9 “Religion and Culture”", note:"A gentle overview of religion and culture in world politics, including the clash debate."},
    {book:"soc", where:"Chapter 11 “Race and Ethnicity” and Chapter 15 “Religion”", note:"The sociology background, mostly with US examples; the lessons add others."},
    {book:"ospol", where:"Chapter 3, section 3.4 “Nationalism, Communism, Fascism, and Authoritarianism”, and Chapter 7, section 7.2 “Political Culture and Majority-Minority Relations”", note:"A political science view of nationalism and minorities."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u6-l1", title:"Identity and difference", minutes:60,
   hook:{q:"In 1976 a US court rejected a discrimination case brought by five Black women against the carmaker General Motors. What was the court’s main reasoning?", options:["They had brought the case too late","The company hired Black workers (mostly men) and women (mostly white), so there was no race or sex discrimination to remedy","They were not employees of the company","The law did not cover private companies"], answer:1, reveal:"**The court looked at race and sex separately, and refused to combine them.** It said Black women could not be treated as a special class or create a new “super-remedy”. As Crenshaw later explained the case, the company had hired women before 1964 (but they were white, in office jobs) and Black workers (but they were men, on the factory floor), so neither claim succeeded on its own, and the women’s particular situation fell through the gap. In 1989 the legal scholar Kimberlé Crenshaw used this case, *DeGraffenreid v. General Motors*, to coin “intersectionality”. This lesson asks how identities are made, how they combine, and why they matter in world politics."},
   goals:[
     "Explain identity as relational and socially constructed, without treating it as fake",
     "Use self/other, social identity theory, ontological security and recognition to analyse states and groups",
     "Show how censuses, laws and documents create and harden group categories, with cases from several regions",
     "Explain intersectionality accurately, where it came from, how international bodies use it, and the main critiques"
   ],
   learn:[
    {h:"Who are “we”? Identity as a relation", body:[
      {lead:"Ask Hana who she is, and the answer depends on who is asking and where."},
      "At a family wedding she is a daughter and a cousin. At a conference abroad she is “from” her country. Online, in a fan community, she is known by a username and a taste in music. None of these answers is false. Each one marks her off from someone else: other families, other countries, other fans. That is the first idea of this lesson: an **identity** is an understanding of who one is, and it is always formed in relation to others, through **difference**.",
      "The sociology primer showed how the self develops through interaction ({{self-development}}) and how groups draw [[in-group]] and [[out-group]] lines. The IR primer introduced [[identity-ir|identity]] as a core idea of {{constructivism}}: who a state thinks it is shapes what it wants. This lesson goes deeper, into the debates you will meet in a seminar.",
      "Two positions frame them. [[essentialism|Essentialism]] holds that a group has a fixed inner nature that all members share: “the Japanese are…”, “Africans are…”. Constructivists reply that identities are [[social-construction|socially constructed]]: made and remade through history, institutions and everyday practice. The cultural theorist Stuart Hall (“Who Needs Identity?”, 1996) described identities as positions people take up within stories and discourses, never finished.",
      {key:"Constructed does not mean fake. Money, borders and nations are constructed too, and they shape lives. The useful question is how an identity was made, by whom, and with what effects."}
    ]},
    {h:"Self and Other in world politics", body:[
      "Why do groups favour their own so readily? In experiments in the early 1970s, the social psychologist Henri Tajfel divided strangers into groups on trivial grounds, such as which painter they preferred, and found they still tended to favour their own group when sharing rewards. With John Turner he developed [[social-identity-theory|social identity theory]] (1979): people gain self-esteem from group membership, so they compare their group favourably with others.",
      "IR scholars scaled the idea up. Iver Neumann’s *Uses of the Other* (1999) traced how “Europe” defined itself over centuries against images of “the Turk” and of Russia. David Campbell’s *Writing Security* (1992) argued that US foreign policy helped produce American identity by naming dangers outside it. In both, the [[self-other|Other]] is not simply found; it is needed, and partly invented, to say who “we” are. You met the everyday version in the migration primer as [[othering]].",
      "Asia offers a clear case of identity politics between states. In the 1990s some leaders, including Singapore’s Lee Kuan Yew and Malaysia’s Mahathir Mohamad, argued for “Asian values”, such as community and order, as distinct from Western individualism, partly in debates about human rights. Critics such as the economist Amartya Sen (1997) replied that Asian traditions are too varied to sum up, and include strong defences of freedom. A seminar does not need to choose a side to see the point: “Asia” and “the West” were being defined against each other.",
      {tip:"When a text says “we” or “they” about whole countries or regions, ask who drew the line, and what the line lets the speaker argue."}
    ]},
    {h:"Why states care who they are: security of the self and recognition", body:[
      "Jennifer Mitzen’s article “Ontological Security in World Politics” (*European Journal of International Relations*, 2006) borrowed a sociologist’s idea (Anthony Giddens): people need a stable sense of who they are and what to expect. [[ontological-security|Ontological security]] is that security of the self, as distinct from physical security. Mitzen argued that states, too, become attached to routines, even routines of rivalry, because they make the world predictable. That can help explain why some long conflicts are hard to leave, even when ending them would make people physically safer.",
      "A second idea is **recognition**. The philosopher Charles Taylor’s essay “The Politics of Recognition” (1992) argued that being misrecognised, seen in a demeaning way, can do real harm, so groups seek recognition of their identity. In IR, the [[politics-of-recognition|politics of recognition]] helps explain struggles for status and respect between states.",
      "You have met one case already. In 1919 Japan proposed adding racial equality to the League of Nations Covenant ([[racial-equality-proposal|the Racial Equality Proposal]], Unit 1). Historians read it partly as a demand to be recognised as an equal great power; Lesson 3 returns to it."
    ]},
    {h:"Categories that make groups", body:[
      "States do not only respond to identities; they help make them, by counting and classifying.",
      {table:[
        ["Case","Category system","Effect"],
        ["Singapore","“CMIO”: Chinese, Malay, Indian, Others, used in policy since independence","Shapes housing quotas, school language choices and official statistics"],
        ["Malaysia","*Bumiputera* (Malays and other indigenous peoples) vs others","Basis for preferential policies since the New Economic Policy of 1971"],
        ["Rwanda","Belgian colonial identity cards from the early 1930s stated Hutu, Tutsi or Twa","Fixed fluid categories on paper; the cards were later used to target Tutsi in the 1994 genocide"],
        ["Brazil, UK, US","Census questions on colour, race or ethnic group (see the primer)","Categories change between censuses and countries"]
      ]},
      "The sociologist Rogers Brubaker, writing with Frederick Cooper (“Beyond ‘Identity’”, *Theory and Society*, 2000), warned that “identity” has become too loose a word: it is used both for a deep, fixed sameness and for something fluid and multiple. They suggested more precise terms, such as **identification** (by oneself or by a state) and **groupness**, the degree to which people actually act as a group. Brubaker later criticised “groupism”: treating ethnic groups as solid actors rather than as categories that become groups only at certain moments.",
      "Amartya Sen’s *Identity and Violence* (2006) made a related point. Every person has many identities (nationality, religion, language, profession, politics, taste). Violence is easier when people are reduced to a single one, a “solitarist” view, and told it decides everything else."
    ]},
    {h:"Intersectionality: where the roads cross", body:[
      "Back to the hook. In “Demarginalizing the Intersection of Race and Sex” (*University of Chicago Legal Forum*, 1989), Kimberlé Crenshaw ({{kimberle-crenshaw}}) argued that anti-discrimination law looked down one road at a time. Black women could be harmed where the roads of race and sex discrimination cross, and fall through both.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-softf" x="140" y="10" width="60" height="250" stroke-width="0"/><rect class="d-softf" x="10" y="110" width="320" height="60" stroke-width="0"/><text x="170" y="30" text-anchor="middle">Race</text><text class="s" x="170" y="48" text-anchor="middle">discrimination</text><text x="52" y="136" text-anchor="middle">Sex</text><text class="s" x="52" y="154" text-anchor="middle">discrimination</text><circle class="d-rose" cx="170" cy="140" r="22" stroke-width="2"/><text class="s" x="170" y="145" text-anchor="middle">harm</text><rect class="d-panel" x="210" y="186" width="124" height="66" rx="8" stroke-width="1.5"/><text class="s" x="272" y="206" text-anchor="middle">Court checks</text><text class="s" x="272" y="222" text-anchor="middle">each road alone:</text><text class="s" x="272" y="238" text-anchor="middle">“no case”</text><rect class="d-lup" x="10" y="272" width="320" height="50" rx="8" stroke-width="2"/><text x="170" y="294" text-anchor="middle">Intersectional view: look at</text><text x="170" y="312" text-anchor="middle">where the roads meet</text></svg>', alt:"Two roads cross. The vertical road is labelled race discrimination and the horizontal road sex discrimination. At the crossing a circle is labelled harm. A note says a court that checks each road alone finds no case. Below, a box says the intersectional view looks at where the roads meet.", cap:"Crenshaw’s traffic metaphor (1989). Harm can come from several directions at once."},
      "Her 1991 article “Mapping the Margins” (*Stanford Law Review*) applied the idea to violence against women of colour, including immigrant women whose legal status depended on an abusive spouse. The idea had roots: the Combahee River Collective, a Black feminist group in Boston, wrote in 1977 of “interlocking” oppressions, and the sociologist Patricia Hill Collins (*Black Feminist Thought*, 1990) described a [[matrix-of-domination|matrix of domination]] in which race, class, gender and sexuality are organised together. The sociology primer introduced the term [[intersectionality]]; {{intersectionality-ir}} follows it into world politics."
    ]},
    {h:"Intersectionality in international studies, and its critics", body:[
      "The idea travelled fast. The UN’s 2001 World Conference against Racism in Durban spoke of “multiple or aggravated forms of discrimination”. The CEDAW Committee, the treaty body for women’s rights, wrote in 2010 (General Recommendation No. 28) that intersectionality is “a basic concept” for understanding states’ obligations. Feminist IR ({{feminism-ir}}) uses it to study, for example, migrant domestic workers, whose experience depends on gender, nationality, class and immigration status at once (see the [[global-care-chain|global care chain]] in the migration primer).",
      "It also has critics, from several directions, and seminars expect you to know them:",
      {list:[
        "**Dilution:** some scholars of Black feminism worry that, as the term travels, it loses its roots in Black women’s struggles and becomes a general word for “diversity”.",
        "**The list problem:** done badly, it becomes an ever-longer list of identities added together, rather than an analysis of how particular systems of power interact.",
        "**Method:** it can be hard to operationalise; how many categories, and which ones, should a study include?",
        "**Political critiques:** some on the left argue it can sideline class; some conservatives see it as divisive identity politics. These are political disagreements; describe them, and the evidence each side cites, without taking sides."
      ]},
      "A related idea is [[strategic-essentialism|strategic essentialism]], associated with the literary theorist Gayatri Chakravorty Spivak in the 1980s: a group may knowingly present itself as united, for a political goal, while recognising its inner differences."
    ]},
    {h:"Common misconceptions", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["If identity is constructed, it isn’t real.","Constructed identities have real effects: on laws, wars and life chances."],
        ["Each person has one true identity.","People hold many identifications; which one matters depends on context."],
        ["Identity only matters for groups, not states.","States have identities too, and may defend them even at a material cost."],
        ["Intersectionality means adding up disadvantages.","It asks how systems of power interact to produce specific experiences."]
      ]},
      {key:"Identities are relational, plural and made, and they matter. Good analysis asks who draws the lines, how they harden, and what they let people do."}
    ]}
   ],
   try:[
    {id:"e4u6-l1-x1", type:"mcq", q:"Kenji says: “National identity is socially constructed, so it’s basically an illusion and has no real effects.” What is the best reply?", options:[
      {t:"Constructed things can be very real in their effects, like money or borders; the question is how the identity was made and what it does", ok:true, why:"Right. Constructivists stress that social facts shape behaviour, laws and life chances even though people made them."},
      {t:"He is right: once you see it is constructed, it disappears", why:"Seeing how something was made does not make it vanish; borders stay in force when we know who drew them."},
      {t:"National identity is biological, so it is not constructed at all", why:"There is no biological basis for national identity; that is the essentialist view the lesson challenges."},
      {t:"Only individual identities are constructed; national ones are natural", why:"Constructivists argue national identities are among the most clearly constructed, through schools, media and states."}
    ]},
    {id:"e4u6-l1-x2", type:"match", q:"Match each scholar to the argument.", pairs:[
      ["Henri Tajfel and John Turner (1979)","People favour their own group even when groups are formed on trivial grounds","Social identity theory grew from these “minimal group” experiments."],
      ["Iver Neumann (1999)","Europe defined itself against images of “the Turk” and of Russia","*Uses of the Other* traces Europe’s Others over centuries."],
      ["Jennifer Mitzen (2006)","States may cling to familiar routines, even rivalry, for a stable sense of self","Her article brought ontological security into IR."],
      ["Rogers Brubaker and Frederick Cooper (2000)","“Identity” is too loose; use identification and groupness instead","“Beyond ‘Identity’” asked for more precise terms."],
      ["Amartya Sen (2006)","Reducing people to one identity makes violence easier","*Identity and Violence* criticises the “solitarist” view."]
    ]},
    {id:"e4u6-l1-x3", type:"mcq", q:"Two states have been rivals for decades. A peace deal would make both physically safer, yet leaders on both sides resist it, saying it would betray “who we are”. Which concept best explains this?", options:[
      {t:"Ontological security", ok:true, why:"Right. Mitzen argues states can become attached to routines of rivalry because they give a stable sense of self, even at a cost to physical security."},
      {t:"Comparative advantage", why:"That is an idea from trade theory, about specialising in production."},
      {t:"Strategic essentialism", why:"That is a group knowingly presenting itself as united for a goal; it does not explain attachment to a rivalry."},
      {t:"Free riding", why:"Free riding is about benefiting from a public good without paying for it."}
    ]},
    {id:"e4u6-l1-x4", type:"sort", q:"Is each statement closer to an essentialist or a constructivist view of identity?", buckets:["Essentialist","Constructivist"], items:[
      {t:"Every member of this nation shares the same inner character, passed down unchanged.", b:0, why:"A fixed, shared inner nature is the essentialist claim."},
      {t:"The colonial census created categories that later hardened into political identities.", b:1, why:"It shows a category being made by an institution and changing over time."},
      {t:"Which identity matters most to Amara depends on whether she is at work, at home or abroad.", b:1, why:"Context-dependent, plural identification is a constructivist idea."},
      {t:"This people has always been warlike by nature.", b:0, why:"A timeless group trait is essentialist, and a national-character claim scholars reject."},
      {t:"School textbooks and national holidays help teach children who “we” are.", b:1, why:"It shows identity being produced through institutions and practice."}
    ]},
    {id:"e4u6-l1-x5", type:"mcq", q:"Which example best shows a state creating or hardening a group category?", options:[
      {t:"Colonial identity cards in Rwanda that recorded each person as Hutu, Tutsi or Twa", ok:true, why:"Right. The cards fixed categories on paper that had been more fluid, and they were later used to target Tutsi in 1994."},
      {t:"A football fan choosing to support a club from another city", why:"That is personal choice, not a state classifying people."},
      {t:"Two friends discovering they like the same music", why:"Shared taste is not a state category."},
      {t:"A scientist measuring rainfall", why:"Measuring nature does not classify people into groups."}
    ]},
    {id:"e4u6-l1-x6", type:"order", q:"Put these steps in the development of intersectionality in order, earliest first.", items:[
      {t:"The Combahee River Collective writes of “interlocking” oppressions", why:"Its statement dates from 1977."},
      {t:"Crenshaw coins “intersectionality” using the *DeGraffenreid* case", why:"Her article “Demarginalizing the Intersection of Race and Sex” appeared in 1989."},
      {t:"Patricia Hill Collins describes a matrix of domination", why:"*Black Feminist Thought* appeared in 1990."},
      {t:"Crenshaw’s “Mapping the Margins” applies the idea to violence against women of colour", why:"It appeared in 1991."},
      {t:"The CEDAW Committee calls intersectionality “a basic concept”", why:"General Recommendation No. 28 dates from 2010."}
    ]},
    {id:"e4u6-l1-x7", type:"spot", q:"A student’s seminar notes on intersectionality. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"Crenshaw introduced the term in a 1989 legal article.", flag:false, why:"Correct."},
      " ",
      {t:"Intersectionality simply means adding up a person’s disadvantages into a score.", flag:true, why:"That is the “list problem” critics warn about; the idea is about how systems of power interact."},
      " ",
      {t:"UN treaty bodies have used the concept in their guidance.", flag:false, why:"Correct: for example the CEDAW Committee in 2010."},
      " ",
      {t:"Critics of intersectionality all come from one political camp.", flag:true, why:"Critiques come from several directions: some Black feminist scholars, some on the left, some conservatives, and methodologists."},
      " ",
      {t:"Feminist IR uses it to study migrant domestic workers.", flag:false, why:"Correct: gender, nationality, class and status combine in their experience."}
    ]}
   ],
   apply:{intro:"Look at how identities are named, counted and combined, using public sources and your own reflection.", tasks:[
     {t:"Your many identifications", how:["List five or more identities you could name for yourself (nationality, language, work, faith or none, generation, place, interests).","Note which one comes first in three settings: at home, at work or study, and when travelling.","Note one setting where someone else named your identity for you."], write:"My identifications… Which comes first at home / at work / abroad… A time someone else named me…"},
     {t:"How a census counts people", how:["Find the official census or population survey questionnaire of any country (national statistics offices publish them).","Copy the wording of any question on ethnicity, race, colour, language, religion or nationality.","Note what the categories are, whether people can tick more than one, and whether the categories have changed over time."], write:"Country and year… The question… Categories… One answer or many… What the categories assume…"},
     {t:"Listen to the originator", how:["Watch Kimberlé Crenshaw’s talk “The urgency of intersectionality” (TED, 2016), free on the TED website.","Note how she explains the *DeGraffenreid* case and the traffic metaphor.","Note one place in international politics where the idea could help, and one limit."], write:"How she explains it… One international use… One limit…"},
     {t:"Seminar questions", how:["Do states have identities in the same sense as people, or is this a metaphor?","Is “identity” too loose a concept to be useful, as Brubaker and Cooper argue?","Can intersectionality travel from US anti-discrimination law to world politics without losing its meaning?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on your own identifications in three settings, one census question analysed, notes on Crenshaw’s talk and a seminar paragraph."},
   read:[
     {book:"eirt", where:"Chapter 8 “Feminism” and Chapter 4 “Constructivism”", note:"Read them for gender as a lens in IR and for how constructivists treat identity."},
     {book:"ospol", where:"Chapter 3, section 3.6 “Contemporary Ideologies Further to the Political Left” (the part on critical race and gender theory)", note:"A short account of Crenshaw and intersectionality from political science."},
     {book:"soc", where:"Chapter 11, Section 11.2 “Theoretical Perspectives on Race and Ethnicity”", note:"For intersection theory in sociology."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u6-l2", title:"Nations and nationalism", minutes:65,
   hook:{q:"In 1928 young nationalists in the Dutch East Indies pledged themselves to one homeland and one nation, and to uphold a language of unity: Indonesian. Which language did they build the national language on?", options:["Javanese, the language of the largest ethnic group","Malay, long used as a trading language across the archipelago","Dutch, the colonial language","Sundanese, spoken in western Java"], answer:1, reveal:"**Malay.** The Youth Pledge (*Sumpah Pemuda*) of 28 October 1928 chose a form of Malay, widely used for trade and administration, rather than Javanese, the language of the largest group. A language that belonged to no single dominant group could be shared by all. Benedict Anderson, a specialist on Indonesia, drew on cases like this for his theory of nations as “imagined communities”, one of the theories this lesson compares."},
   goals:[
     "Compare modernist, ethno-symbolist and perennialist answers to the question “when is a nation?”",
     "Explain Gellner, Anderson, Hobsbawm and Ranger, and Smith accurately, with the main critique of each",
     "Spot banal and everyday nationalism in ordinary life, and assess the civic/ethnic distinction",
     "Analyse anti-colonial, developmental and online nationalism with cases from Asia and elsewhere"
   ],
   learn:[
    {h:"The nation puzzle", body:[
      {lead:"Nations feel ancient. Most nation-states are young. Which is right?"},
      "A one-line reminder from the IR primer: a [[nation]] is a large group that sees itself as one community and usually wants to govern itself; [[nationalism]] is the belief that it should, or strong loyalty to it; and the [[nation-state]] is the ideal of one nation, one state. The primer also quoted Benedict Anderson’s phrase “imagined communities”. Here we open the debate behind that phrase.",
      "The French historian Ernest Renan asked “What is a nation?” in a famous lecture of 1882. Not race, language, religion or geography alone, he answered, but shared memories (and shared forgetting) and a present will to live together: “a daily plebiscite”. Scholars since have divided over a simpler-sounding question: **when** is a nation? Their answers fall into three families.",
      {fig:'<svg viewBox="0 0 340 340"><text x="170" y="20" text-anchor="middle">How old are nations?</text><path class="d-ink" d="M30 50 L30 300" stroke-width="2" fill="none"/><text class="s" x="30" y="44" text-anchor="middle">ancient</text><text class="s" x="30" y="318" text-anchor="middle">modern</text><rect class="d-gold" x="50" y="50" width="284" height="74" rx="8" stroke-width="2"/><text x="192" y="74" text-anchor="middle">Primordialist / perennialist</text><text class="s" x="192" y="94" text-anchor="middle">nations are natural or very old;</text><text class="s" x="192" y="110" text-anchor="middle">nationalism awakens them</text><rect class="d-sage" x="50" y="138" width="284" height="74" rx="8" stroke-width="2"/><text x="192" y="162" text-anchor="middle">Ethno-symbolist (Smith)</text><text class="s" x="192" y="182" text-anchor="middle">modern nations are built on older</text><text class="s" x="192" y="198" text-anchor="middle">myths, memories and symbols</text><rect class="d-lup" x="50" y="226" width="284" height="74" rx="8" stroke-width="2"/><text x="192" y="250" text-anchor="middle">Modernist</text><text class="s" x="192" y="270" text-anchor="middle">Gellner, Anderson, Hobsbawm:</text><text class="s" x="192" y="286" text-anchor="middle">nationalism makes nations</text></svg>', alt:"A vertical scale runs from ancient at the top to modern at the bottom. Top box: primordialist or perennialist, nations are natural or very old and nationalism awakens them. Middle box: ethno-symbolist (Smith), modern nations are built on older myths, memories and symbols. Bottom box: modernist (Gellner, Anderson, Hobsbawm), nationalism makes nations.", cap:"Three families of answers. Most scholars today sit somewhere between the bottom two."},
      "**Primordialists** see nations or ethnic groups as natural, given by birth and kinship; **perennialists** say nations, or something close to them, are very old, though not natural. [[modernism-nationalism|Modernists]] argue that nations are products of the last few centuries. [[ethno-symbolism|Ethno-symbolists]] take a middle road. Most of the debate since the 1980s has been between the last two, so we start with the modernists."
    ]},
    {h:"Gellner: nations for an industrial age", body:[
      "Ernest Gellner ({{ernest-gellner}}) opened *Nations and Nationalism* (1983) with a definition seminars still quote: nationalism “is primarily a political principle, which holds that the political and the national unit should be congruent.”",
      "His explanation was structural. In **agrarian** societies a small literate elite ruled over peasants who spoke many dialects; culture did not need to match the state. **Industrial** society changed that. A mobile workforce must read instructions, switch jobs and talk to strangers, so it needs a shared, standardised, literate “high culture”, taught in mass schools paid for by the state. Culture and state had to fit together, and nationalism was the demand that they do. Hence Gellner’s provocative claim: “It is nationalism which engenders nations, and not the other way round.”",
      "**Critiques.** Nationalism appeared in places with little industry, such as the independence movements of Latin America in the early 1800s and much anti-colonial nationalism later. The theory is functionalist: it explains why industry needs nationalism, not how real movements arose. And it says little about the passion people feel; few die for a school curriculum."
    ]},
    {h:"Anderson: imagined communities", body:[
      "Benedict Anderson ({{benedict-anderson}}) published *Imagined Communities* in the same year, 1983. He defined the nation as “an imagined political community – and imagined as both inherently limited and sovereign.” It is **imagined** because members will never meet most of the others, yet each carries an image of their communion; **limited** because it has borders, with other nations beyond; **sovereign** because it seeks freedom, ideally in its own state.",
      "His key mechanism was [[print-capitalism]]. From the 1500s, printers selling books and later newspapers in vernacular languages created reading publics. Reading the same newspaper on the same morning, strangers could imagine themselves moving together through time: an [[imagined-community|imagined community]].",
      "Anderson insisted the story was not only European. He argued that the first nationalisms were those of **creole** elites in the Americas, people of European descent born in the colonies, frustrated by careers capped by the empire. He described [[official-nationalism|official nationalism]], a term borrowed from the historian Hugh Seton-Watson, in which old dynasties adopted nationalism from above to keep power: tsarist Russia, Siam and Meiji Japan. The 1991 edition added two chapters; one, “Census, Map, Museum”, showed how colonial states in Southeast Asia classified peoples, drew borders and displayed the past, shaping the nations that later replaced them.",
      "**The sharpest critique** came from the Indian political theorist Partha Chatterjee (*The Nation and Its Fragments*, 1993), in a chapter titled “Whose Imagined Community?”. If Asian and African nationalists only copied models already invented in Europe and the Americas, what was left for them to imagine? Chatterjee argued that anti-colonial nationalism first claimed an inner, spiritual domain (language, religion, family, culture) as its own, long before it fought the colonial state in the outer, material domain of politics and economy."
    ]},
    {h:"Invented traditions, and the reply of ethno-symbolism", body:[
      "*The Invention of Tradition* (1983), edited by Eric Hobsbawm ({{eric-hobsbawm}}) and Terence Ranger, showed that many “ancient” traditions were recent. Hugh Trevor-Roper’s chapter argued that much of the Scottish Highland tradition, including the clan tartans, took shape in the 18th and 19th centuries. Bernard Cohn showed the British Raj staging imperial assemblages in India; Ranger showed colonial officials in Africa inventing “customary” tribal traditions. An [[invented-tradition|invented tradition]] is a practice that claims continuity with the past but was largely created to build loyalty in the present. Invented does not mean powerless: such traditions work.",
      "Anthony D. Smith ({{anthony-d-smith}}) replied with [[ethno-symbolism]]. In *The Ethnic Origins of Nations* (1986) he argued that modern nations rarely appear from nothing. They are built on an older [[ethnie]]: a named community with myths of common ancestry, shared memories, elements of shared culture, a link to a homeland and some solidarity. Nationalists select and reinterpret these materials, but they cannot invent freely; what resonates is what already means something.",
      "In a well-known 1995 debate with Smith, Gellner asked whether nations have “navels”, a real link to an older past. His answer: some do and some do not, and it matters little to how nationalism works. [[perennialism|Perennialists]] go further: the historian Adrian Hastings (*The Construction of Nationhood*, 1997) argued that England was a nation by the late Middle Ages.",
      {table:[
        ["","Modernists","Ethno-symbolists"],
        ["When do nations appear?","With modernity: industry, print, mass schooling, the modern state","Modern nations, but built on older ethnic cores"],
        ["What drives nationalism?","Elites, states, economic change","Myths, memories and symbols that already resonate"],
        ["Main critique","Can’t explain the passion, or nations before industry","Risks reading the nation back into the past"]
      ]}
    ]},
    {h:"Banal and everyday nationalism", body:[
      "Michael Billig’s *Banal Nationalism* (1995) moved attention from dramatic nationalism (wars, independence movements) to the everyday kind in settled states. His image is the **unwaved flag**: not one waved with passion, but one hanging unnoticed on a public building. Nations are “flagged” all day: on coins and banknotes, in the national weather map, in sports pages, and in small words, such as a newspaper’s “the prime minister” and “our economy”, which assume a national “we”. [[banal-nationalism|Banal nationalism]] keeps the nation in mind so that it can be mobilised when needed.",
      "Jon Fox and Cynthia Miller-Idriss (“Everyday Nationhood”, *Ethnicities*, 2008) shifted the focus from what media and states do to what ordinary people do. [[everyday-nationalism|Everyday nationalism]] appears when people talk about the nation, choose national products or schools, perform rituals and consume national foods and symbols, and also when they ignore the nation entirely.",
      {tip:"Billig’s test for any text: who is “we”, and who is assumed not to be included?"}
    ]},
    {h:"Civic and ethnic nationalism, and doubts about the divide", body:[
      "Hans Kohn’s *The Idea of Nationalism* (1944) contrasted a “Western” nationalism based on citizenship and political loyalty with an “Eastern” nationalism based on descent and culture. The distinction lives on as [[civic-nationalism|civic]] versus [[ethnic-nationalism|ethnic nationalism]]: membership by shared institutions and values versus membership by ancestry, language or religion.",
      "Many scholars now doubt the neat divide. Bernard Yack (“The Myth of the Civic Nation”, 1996) and Rogers Brubaker argued that every civic nation has cultural content, such as a dominant language, holidays and historical memory, and that the labels were often used to praise “us” and blame “them”. Most real nationalisms mix both, and the mix changes over time. Use the terms as ends of a spectrum, not as two boxes."
    ]},
    {h:"Nationalism in Asia: anti-colonial, developmental, online", body:[
      "**[[anti-colonial-nationalism|Anti-colonial]].** The Indian National Congress was founded in 1885, and the Swadeshi movement after the 1905 partition of Bengal urged Indians to buy Indian goods. Indonesia’s 1928 Youth Pledge (the hook) chose a shared language. On 2 September 1945 Ho Chi Minh declared Vietnam’s independence, opening with words from the US Declaration of Independence. Similar movements reshaped Africa, the Caribbean and the Middle East ({{decolonization}}). These are the cases Chatterjee had in mind.",
      "**Developmental.** Nationalism can be harnessed to catch up economically. Meiji Japan’s slogan *fukoku kyōhei*, “rich country, strong army”, linked national survival to industry; Richard Samuels’ *Rich Nation, Strong Army* (1994) traced this “technonationalism” into postwar Japan. South Korea’s export drive from the 1960s was also framed as national mission. This links to the [[developmental-state|developmental state]] of Unit 1.",
      "**Online.** Social media let ordinary people produce nationalist content and campaigns at speed, in every region. Scholars study it carefully rather than assuming it drives policy. Jessica Chen Weiss (*Powerful Patriots*, 2014) argued that China’s government has sometimes allowed, and sometimes restrained, nationalist street protests against Japan and the United States, partly to signal resolve or flexibility in diplomacy. [[online-nationalism|Online nationalism]] can pressure governments, but governments can also shape and use it.",
      {key:"Nations are modern in their political form, built from materials of varying age, reproduced every day, and put to many uses: liberation, development, exclusion, war."}
    ]}
   ],
   try:[
    {id:"e4u6-l2-x1", type:"sort", q:"Which family of theories does each claim belong to?", buckets:["Modernist","Ethno-symbolist","Primordialist or perennialist"], items:[
      {t:"Nations appeared when industrial economies needed a shared literate culture.", b:0, why:"That is Gellner’s modernist argument."},
      {t:"Modern nations draw on older myths of ancestry, memories and symbols.", b:1, why:"That is Smith’s ethno-symbolism."},
      {t:"Our nation has existed, essentially unchanged, since ancient times.", b:2, why:"A claim of ancient, continuous nationhood is perennialist (or primordialist if presented as natural)."},
      {t:"Newspapers read by strangers on the same day helped people imagine a nation.", b:0, why:"That is Anderson’s print-capitalism, a modernist mechanism."},
      {t:"Nationalists cannot invent freely: only symbols that already resonate will work.", b:1, why:"This is Smith’s reply to the “invention” argument."}
    ]},
    {id:"e4u6-l2-x2", type:"mcq", q:"Which statement accurately summarises Anderson’s definition of the nation?", options:[
      {t:"An imagined political community, imagined as limited and sovereign", ok:true, why:"Right: imagined because members never meet most others, limited by borders, sovereign because it seeks self-rule."},
      {t:"A group sharing the same race and blood", why:"Anderson rejected definitions based on biology."},
      {t:"A fake community invented by governments to fool people", why:"“Imagined” does not mean false; Anderson stressed that people die for nations."},
      {t:"Any group of people who live under one government", why:"That describes a state’s population, not Anderson’s nation."}
    ]},
    {id:"e4u6-l2-x3", type:"mcq", q:"Priya reads Chatterjee’s “Whose Imagined Community?”. Which point is she most likely to bring to the seminar?", options:[
      {t:"Anti-colonial nationalism first claimed an inner, spiritual domain of culture before fighting the colonial state", ok:true, why:"Right. Chatterjee argued colonised nationalists did more than copy European models."},
      {t:"Asian nationalisms were exact copies of European nationalism", why:"That is the view Chatterjee criticised in Anderson."},
      {t:"Nations are natural units that existed before colonialism", why:"Chatterjee was not a primordialist."},
      {t:"Print-capitalism was unimportant everywhere", why:"Chatterjee did not deny print’s role; he questioned the idea that nationalism elsewhere was only imitation."}
    ]},
    {id:"e4u6-l2-x4", type:"match", q:"Match each work to its central idea.", pairs:[
      ["Gellner, *Nations and Nationalism* (1983)","The political and the national unit should be congruent","His definition of nationalism as a political principle."],
      ["Hobsbawm and Ranger (eds.), *The Invention of Tradition* (1983)","Many “ancient” traditions were created recently to build loyalty","The Highland tartan and colonial “custom” are classic examples."],
      ["Smith, *The Ethnic Origins of Nations* (1986)","Modern nations are built on older ethnic communities","The ethnie and its myths, memories and symbols."],
      ["Billig, *Banal Nationalism* (1995)","The unwaved flag: nations are reproduced in unnoticed daily routines","Weather maps, coins, “our” economy."],
      ["Kohn, *The Idea of Nationalism* (1944)","A contrast between civic and ethnic forms of nationalism","His “Western” and “Eastern” types."]
    ]},
    {id:"e4u6-l2-x5", type:"spot", q:"Tap the examples of banal nationalism in this description of an ordinary morning.", ask:"banal nationalism", parts:[
      "Tomás makes coffee while the radio news says ",
      {t:"“our team”", flag:true, why:"The national “we” assumed by the broadcaster is Billig’s classic sign."},
      " won abroad. He checks ",
      {t:"the national weather map", flag:true, why:"The map shows the nation as the natural unit of weather, a quiet flag."},
      ", pays for bread with ",
      {t:"coins showing a national hero", flag:true, why:"Money routinely flags the nation."},
      ", and chats with ",
      {t:"a neighbour about her garden", flag:false, why:"Nothing national here."},
      ". On the bus he reads ",
      {t:"a novel set on another planet", flag:false, why:"No national flagging in this choice."},
      "."
    ]},
    {id:"e4u6-l2-x6", type:"mcq", q:"A critic says: “Gellner can’t explain why nationalism appeared among creole elites in Latin America in the early 1800s.” What is the critic pointing to?", options:[
      {t:"Nationalism arose in places with little industrial development, which Gellner’s industrial explanation struggles with", ok:true, why:"Right. This is one of the standard critiques of Gellner."},
      {t:"Latin America had no nationalism at all", why:"Latin American independence movements are classic cases; Anderson put them first."},
      {t:"Gellner wrote only about Latin America", why:"Gellner wrote mainly about Europe and general theory."},
      {t:"Creoles were all industrial workers", why:"Creole elites were landowners, merchants and officials, not industrial workers."}
    ]},
    {id:"e4u6-l2-x7", type:"sort", q:"Is each case mainly an example of anti-colonial, developmental or official nationalism?", buckets:["Anti-colonial","Developmental","Official (from above)"], items:[
      {t:"Ho Chi Minh’s 1945 declaration of Vietnam’s independence", b:0, why:"A claim to independence from colonial rule."},
      {t:"A government campaign urging citizens to build national industries so the country can catch up with richer rivals", b:1, why:"Nationalism linked to industrial catch-up."},
      {t:"A ruling dynasty adopting national symbols to secure its throne", b:2, why:"Anderson’s official nationalism: dynasties nationalising from above."},
      {t:"The Swadeshi call to buy Indian goods after 1905", b:0, why:"An anti-colonial economic campaign."},
      {t:"A government framing its export drive as a national mission", b:1, why:"Developmental nationalism."}
    ]}
   ],
   apply:{intro:"Find nationalism in theory, history and daily life, using free public sources.", tasks:[
     {t:"An unwaved-flag walk", how:["During one ordinary day, note every quiet sign of the nation: on money, stamps, buildings, packaging, weather maps, news headlines, sports pages.","Do not photograph people; note objects and words only.","Count the uses of “we”, “our” and “the” nation in one news article."], write:"Signs I noticed… The “we” count… Who the “we” seemed to include and exclude…"},
     {t:"Read a founding text", how:["Find the text of a national founding document online, for example Indonesia’s 1928 Youth Pledge (in translation) or Vietnam’s 1945 Declaration of Independence.","Note what it says the nation is based on: land, language, history, will, rights or descent.","Decide which theory in this lesson it fits best, and why."], write:"The document… What it says the nation is based on… Best-fitting theory… Why…"},
     {t:"Invented or inherited?", how:["Choose a national tradition you know (a holiday, costume, dish, sport or ceremony).","Use reputable sources (a museum, an encyclopedia, a history society) to find when it took its current form.","Decide whether Hobsbawm and Ranger or Smith describes it better."], write:"The tradition… When it took its current form… Invented, inherited or both… Evidence…"},
     {t:"Seminar questions", how:["Is Anderson’s “imagined community” still useful in an age of social media and online communities?","Is the civic/ethnic distinction an analytical tool or a way of praising some nations and blaming others?","Can developmental nationalism be separated from exclusionary nationalism?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"A list of banal-nationalism signs from one day, a founding text analysed against the theories, one tradition traced, and a seminar paragraph."},
   read:[
     {book:"ospol", where:"Chapter 3, section 3.4 “Nationalism, Communism, Fascism, and Authoritarianism” (the opening part on nationalism)", note:"Notice that its short definition stresses “blood, history, and soil”: that is close to the ethnic view, one of several you met here."},
     {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar)", note:"Background on how the nation-state spread from Europe through empire and decolonisation."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u6-l3", title:"Race and international relations", minutes:65,
   hook:{q:"W. E. B. Du Bois’s line “the problem of the twentieth century is the problem of the color-line” is famous from his 1903 book *The Souls of Black Folk*. Where had he first used it?", options:["In a US court case about segregated schools","In an address to the first Pan-African Conference in London in 1900","At the Paris Peace Conference in 1919","In a speech at the founding of the United Nations in 1945"], answer:1, reveal:"**At the Pan-African Conference in London, in July 1900.** His address “To the Nations of the World” spoke of the colour line across the globe: in Africa, Asia, the Americas and the islands of the sea. From the start, Du Bois framed race as a question of world politics, not only of one country. This lesson follows that thread: race in the making of IR, racial hierarchy in the international order, and the international fight against racial discrimination."},
   goals:[
     "Explain race and racialisation as social processes with international effects",
     "Describe how scholars argue race shaped the international order and the discipline of IR",
     "Trace the international anti-racism regime from the UN Charter to ICERD, CERD and the Durban process",
     "Summarise the debates inside the field about how central race is, without taking sides"
   ],
   learn:[
    {h:"The colour line goes global", body:[
      {lead:"Race is a social construction with real effects. This lesson asks what it has done in world politics."},
      "From the sociology primer: [[race]] refers to categories societies create, usually from visible features, and give meaning to; the categories are not biological boxes, but [[racism]] built on them has shaped lives and institutions. Scholars use [[racialisation]] for the **process** of attaching racial meaning to people, practices or places, such as when a nationality or religion is treated as if it were a race. The idea is linked to sociologists such as Michael Omi and Howard Winant (*Racial Formation in the United States*, 1986) and Robert Miles (*Racism*, 1989).",
      "The theory unit (e4u2) introduced Du Bois’s [[global-colour-line|global colour line]] and Robert Vitalis’s history of race in early US IR. Here we widen the lens. In 1900, at the first Pan-African Conference in London, an early milestone of [[pan-africanism]], organised by the Trinidadian lawyer Henry Sylvester Williams, Du Bois addressed “the nations of the world” about the colour line across empires. That same year he prepared hand-drawn charts on the lives of Black Americans for the Paris Exposition. They are now digitised and widely reproduced, and they are worth seeking out: an early use of data to argue about race.",
      {key:"For Du Bois the colour line was global: it ran between empires and colonies, not only between neighbourhoods."}
    ]},
    {h:"Race in the making of the international order", body:[
      "Around 1900 many educated Europeans and Americans accepted [[scientific-racism|scientific racism]]: the false claim, dressed in the language of science, that humanity divides into biological races ranked by ability. Arthur de Gobineau’s *Essay on the Inequality of the Human Races* (1853–55) was an early example. Such ideas justified empire and the [[standard-of-civilisation|“standard of civilisation”]] that decided which peoples counted as full members of international society (Unit 1).",
      "Marilyn Lake and Henry Reynolds (*Drawing the Global Colour Line*, 2008) showed that the self-described “white men’s countries”, among them the United States, Canada, Australia, New Zealand and South Africa, copied each other’s laws to keep out Asian and other migrants. Natal’s language test of 1897 was a model for Australia’s Immigration Restriction Act of 1901, the core of the “White Australia” policy, which was dismantled in stages, mainly between 1966 and 1973. Fear of a “yellow peril”, given a famous image in a drawing that Germany’s Kaiser Wilhelm II commissioned in 1895, shaped policy across the Pacific.",
      "Race thinking was not only Western. Frank Dikötter (*The Discourse of Race in Modern China*, 1992) traced racial ideas among Chinese reformers from the late 1800s, and historians of Japan describe how its empire built racial hierarchies of its own over Koreans, Taiwanese and others. Shogo Suzuki (*Civilization and Empire*, 2009) argued that Japan learned from European international society that empire was a mark of civilised status."
    ]},
    {h:"1919 and the hierarchy of the League", body:[
      "A one-line reminder from Unit 1: in 1919 Japan’s [[racial-equality-proposal|Racial Equality Proposal]] won a majority on the League of Nations Commission, but Woodrow Wilson, in the chair, ruled that unanimity was needed, with the British Empire delegation, pressed by Australia, opposed.",
      "Read through this lesson’s lens, 1919 shows two hierarchies at once. Article 22 of the Covenant created the [[mandate-system|mandate system]] for former German and Ottoman territories, describing their peoples as “not yet able to stand by themselves” and their care as “a sacred trust of civilisation”: a ranking of peoples written into international law. And Japan’s demand was, as Naoko Shimazu showed, a demand for equal status for Japan and its emigrants, not for its own colonial subjects. Ayşe Zarakol (*After Defeat*, 2011) argues that states placed low in such hierarchies, such as Turkey, Japan and Russia, long carried a sense of **stigma** that shaped their foreign policies.",
      {tip:"In a seminar, keep two questions apart: how racial hierarchy shaped the order, and how each state also built hierarchies of its own."}
    ]},
    {h:"Building an anti-racism regime", body:[
      "After 1945 the language changed. The UN Charter (Article 1) made respect for human rights “without distinction as to race, sex, language, or religion” one of the UN’s purposes, and the Universal Declaration of 1948 repeated it. UNESCO’s 1950 statement *The Race Question* drew on scientists to reject the idea of biologically ranked races. The 1955 Bandung Conference condemned racial segregation and discrimination, and decolonisation brought many new African and Asian members into the General Assembly ({{decolonization}}).",
      {fig:'<svg viewBox="0 0 340 420"><path class="d-ink" d="M60 20 L60 404" stroke-width="2" fill="none"/><circle class="d-inkf" cx="60" cy="30" r="5"/><text x="74" y="35">1900 Pan-African Conference</text><circle class="d-inkf" cx="60" cy="72" r="5"/><text x="74" y="77">1919 equality clause rejected</text><circle class="d-inkf" cx="60" cy="114" r="5"/><text x="74" y="119">1945 UN Charter, Article 1</text><circle class="d-inkf" cx="60" cy="156" r="5"/><text x="74" y="161">1955 Bandung Conference</text><circle class="d-inkf" cx="60" cy="198" r="5"/><text x="74" y="203">1960 Sharpeville killings</text><rect class="d-lup" x="70" y="222" width="262" height="44" rx="8" stroke-width="2"/><text x="80" y="241">1965 ICERD adopted</text><text class="s" x="80" y="258">in force 1969; CERD monitors it</text><circle class="d-inkf" cx="60" cy="244" r="5"/><circle class="d-inkf" cx="60" cy="290" r="5"/><text x="74" y="295">1973 Apartheid Convention</text><circle class="d-inkf" cx="60" cy="332" r="5"/><text x="74" y="337">2001 Durban World Conference</text><circle class="d-inkf" cx="60" cy="374" r="5"/><text x="74" y="379">2015–24, 2025–34 Decades</text><text class="s" x="74" y="396">for People of African Descent</text><text class="s" x="22" y="30" text-anchor="middle">old</text><text class="s" x="22" y="404" text-anchor="middle">new</text></svg>', alt:"A vertical timeline: 1900 Pan-African Conference; 1919 racial equality clause rejected; 1945 UN Charter Article 1; 1955 Bandung Conference; 1960 Sharpeville killings; 1965 ICERD adopted, highlighted, in force 1969 and monitored by CERD; 1973 Apartheid Convention; 2001 Durban World Conference; 2015–2024 and 2025–2034 International Decades for People of African Descent.", cap:"From the colour line to an international anti-racism regime."},
      "On 21 March 1960 South African police killed 69 people protesting against pass laws at Sharpeville; the UN later made 21 March the International Day for the Elimination of Racial Discrimination. On 21 December 1965 the General Assembly adopted the [[icerd|International Convention on the Elimination of All Forms of Racial Discrimination]] (ICERD), the first of the core UN human rights treaties. It entered into force on 4 January 1969 and has more than 180 states parties.",
      {list:[
        "**Article 1** defines racial discrimination broadly: based on “race, colour, descent, or national or ethnic origin”, in purpose or in effect.",
        "**Article 4** requires states to outlaw incitement to racial hatred. Several states, including the United States, entered reservations, citing freedom of expression.",
        "The [[cerd-committee|Committee on the Elimination of Racial Discrimination]] (CERD), 18 independent experts, reviews states’ reports, issues concluding observations and general recommendations, runs an early-warning procedure and, for states that accept it under Article 14, hears individual complaints."
      ]},
      "The 1973 Apartheid Convention declared [[apartheid]] a crime against humanity; the Rome Statute of the International Criminal Court (1998) lists it among crimes against humanity too."
    ]},
    {h:"Durban and after: disagreements inside the regime", body:[
      "The 2001 World Conference against Racism in Durban, South Africa, adopted the [[durban-declaration|Durban Declaration and Programme of Action]], which recognised slavery and the slave trade as crimes against humanity and called for action on many forms of discrimination. It was also bitterly divided. The United States and Israel withdrew their delegations during the conference over draft language on the Middle East, and states argued about whether, and how, to address reparations for slavery and colonialism.",
      "Other disputes concern scope. CERD’s General Recommendation No. 29 (2002) treats discrimination based on **descent** as covering caste and similar systems. Some states, India among them, have argued that caste is not race and falls outside the Convention, while many Dalit organisations and human rights groups support CERD’s reading. Describe both positions; this remains contested.",
      "The General Assembly proclaimed an International Decade for People of African Descent (2015–2024) and, in December 2024, a second Decade for 2025–2034, with the theme “recognition, justice and development”. A Permanent Forum on People of African Descent first met in 2022."
    ]},
    {h:"How central is race? A live debate", body:[
      "Since the 2010s, race has moved from the margins of IR towards the centre of debate. Alexander Anievas, Nivi Manchanda and Robbie Shilliam’s edited book *Race and Racism in International Relations: Confronting the Global Colour Line* (2015) argued that race is **constitutive** of the modern international order, not an occasional topic. A review by Bianca Freeman, D. G. Kim and David Lake (*Annual Review of Political Science*, 2022) took its title from the field’s “[[norm-against-noticing|norm against noticing]]” race, and surveyed work on racial hierarchy, international law and foreign policy.",
      {table:[
        ["Position","Claim","Typical evidence"],
        ["Race as constitutive","The order was built on racial hierarchy, and its legacies persist","Empire, immigration laws, the mandates, who sits on top of institutions"],
        ["Race as one hierarchy among several","Race interacts with class, status, religion and civilisation","Japan’s and Turkey’s status struggles; class in colonial rule"],
        ["Race as a measurable variable","Racial attitudes and identities can be tested for their effects","Surveys of public opinion on foreign policy, aid or migration"]
      ]},
      "Critics of the first position argue that geopolitics, capitalism or state power explain more, and that race is sometimes stretched to cover too much; defenders reply that the field long ignored it. Many scholars combine positions. A good seminar paper states which claim it makes and what evidence would count against it.",
      {key:"Race helped build the international order, and the order later outlawed racial discrimination. Both facts shape world politics today."}
    ]}
   ],
   try:[
    {id:"e4u6-l3-x1", type:"mcq", q:"A newspaper describes people of one religion as if they shared fixed physical and moral traits. Which concept describes this?", options:[
      {t:"Racialisation", ok:true, why:"Right. Treating a religious group as if it were a biological race is a classic case of attaching racial meaning."},
      {t:"Secularisation", why:"Secularisation is about the changing place of religion in society, not about racial meanings."},
      {t:"Banal nationalism", why:"Banal nationalism is the quiet flagging of the nation."},
      {t:"Consociationalism", why:"That is a model of power-sharing between groups."}
    ]},
    {id:"e4u6-l3-x2", type:"match", q:"Match each work to its argument.", pairs:[
      ["Lake and Reynolds (2008)","Settler states copied each other’s laws to keep out Asian migrants","*Drawing the Global Colour Line* follows the “white men’s countries”."],
      ["Dikötter (1992)","Racial ideas also developed among Chinese reformers","*The Discourse of Race in Modern China* shows race thinking was not only Western."],
      ["Zarakol (2011)","States ranked low in the order carried a stigma that shaped their policies","*After Defeat* compares Turkey, Japan and Russia."],
      ["Anievas, Manchanda and Shilliam (eds., 2015)","Race is constitutive of the modern international order","*Race and Racism in International Relations*."],
      ["Suzuki (2009)","Japan learned that empire marked “civilised” status","*Civilization and Empire* on China, Japan and European international society."]
    ]},
    {id:"e4u6-l3-x3", type:"mcq", q:"Which feature of the League of Nations Covenant most clearly wrote a ranking of peoples into international law?", options:[
      {t:"Article 22’s mandate system, describing some peoples as “not yet able to stand by themselves”", ok:true, why:"Right. The mandates placed territories under “advanced nations” as “a sacred trust of civilisation”."},
      {t:"The rule that the Assembly met in Geneva", why:"The meeting place says nothing about ranking peoples."},
      {t:"The adoption of Japan’s Racial Equality Proposal", why:"The proposal was not adopted."},
      {t:"A ban on all immigration restrictions", why:"There was no such ban; settler states kept their restrictions."}
    ]},
    {id:"e4u6-l3-x4", type:"order", q:"Put these events in order, earliest first.", items:[
      {t:"Du Bois addresses the Pan-African Conference in London", why:"July 1900."},
      {t:"The UN Charter names human rights without distinction as to race among the UN’s purposes", why:"Signed in 1945."},
      {t:"Police kill protesters at Sharpeville", why:"21 March 1960."},
      {t:"The General Assembly adopts ICERD", why:"21 December 1965; in force in 1969."},
      {t:"The Durban World Conference against Racism", why:"2001."}
    ]},
    {id:"e4u6-l3-x5", type:"spot", q:"Notes on ICERD. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"ICERD was adopted in 1965 and entered into force in 1969.", flag:false, why:"Correct: 21 December 1965 and 4 January 1969."},
      " ",
      {t:"Its definition covers only skin colour.", flag:true, why:"Article 1 covers race, colour, descent, or national or ethnic origin."},
      " ",
      {t:"CERD is a committee of independent experts.", flag:false, why:"Correct: 18 experts."},
      " ",
      {t:"Every state party must accept individual complaints.", flag:true, why:"Individual complaints apply only to states that make a declaration under Article 14."},
      " ",
      {t:"Some states entered reservations to Article 4 citing free speech.", flag:false, why:"Correct, for example the United States."}
    ]},
    {id:"e4u6-l3-x6", type:"mcq", q:"Fatima is writing about whether caste falls under ICERD. Which statement describes the situation neutrally?", options:[
      {t:"CERD has treated descent-based discrimination as covering caste, while some states, India among them, argue caste is outside the Convention", ok:true, why:"Right. This states both positions and who holds them, without taking a side."},
      {t:"Everyone agrees caste is a form of race", why:"There is no such agreement; that is the point of the dispute."},
      {t:"The Convention says nothing about descent", why:"Article 1 explicitly lists descent."},
      {t:"CERD has never commented on caste", why:"General Recommendation No. 29 (2002) addresses discrimination based on descent, including caste."}
    ]},
    {id:"e4u6-l3-x7", type:"sort", q:"Which position on race in IR does each claim best express?", buckets:["Race as constitutive","Race as one hierarchy among several","Race as a measurable variable"], items:[
      {t:"The modern order was built on racial hierarchy from the start.", b:0, why:"That is the constitutive claim."},
      {t:"Japan’s quest for status shows race interacting with ideas of civilisation and great-power rank.", b:1, why:"It places race alongside other hierarchies."},
      {t:"A survey experiment tests whether describing refugees’ origins changes support for admitting them.", b:2, why:"It treats race or origin as a variable whose effect can be measured."},
      {t:"Immigration laws, mandates and empire all rested on the same racial logic.", b:0, why:"A claim that race structured the whole order."}
    ]}
   ],
   apply:{intro:"Use primary sources from the UN and history to see race in international politics.", tasks:[
     {t:"Look at Du Bois’s charts", how:["Search for Du Bois’s data portraits for the 1900 Paris Exposition; the US Library of Congress holds the originals and many sites reproduce them.","Choose two charts and describe what each shows and what argument it makes.","Note what makes them persuasive as visual evidence."], write:"Chart 1 shows… Chart 2 shows… The argument… What makes them persuasive…"},
     {t:"Read a CERD review", how:["On the OHCHR website, find the CERD page and open the latest concluding observations for any country.","Note two concerns the Committee raised and two positive aspects it noted.","Note how the country responded, if a reply is available."], write:"Country and year… Concerns… Positive aspects… The state’s response…"},
     {t:"Two readings of 1919", how:["Reread the Unit 1 section on the Racial Equality Proposal.","Write one paragraph reading it as a story of racial hierarchy in the international order, and one reading it as a story of great-power status.","Note which evidence each reading relies on."], write:"Reading 1… Reading 2… Evidence each uses…"},
     {t:"Seminar questions", how:["Is race constitutive of the international order, or one hierarchy among several?","Did the anti-racism regime after 1945 change the order, or mainly its language?","Should caste be treated under the Convention on racial discrimination? Set out both sides before giving your view."], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on two Du Bois charts, one CERD review summarised, two readings of 1919, and a seminar paragraph."},
   read:[
     {book:"eirt", where:"Chapter 9 “Postcolonialism” (Sheila Nair)", note:"Read it for how postcolonial IR treats race and empire."},
     {book:"soc", where:"Chapter 11, Section 11.1 “Racial, Ethnic, and Minority Groups” and Section 11.3 “Prejudice, Discrimination, and Racism”", note:"Refresh the sociology of race before the seminar."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u6-l4", title:"Ethnicity, conflict and minorities", minutes:65,
   hook:{q:"A famous study of civil wars from 1945 to 1999 asked whether more ethnically or religiously diverse countries were more likely to have civil war, once income per person was taken into account. What did it find?", options:["Much more likely: diversity was the strongest predictor","No significant link: poverty, weak states and rough terrain mattered more","Less likely: diverse countries were the most peaceful","A link only in Europe"], answer:1, reveal:"**No significant link.** James Fearon and David Laitin (“Ethnicity, Insurgency, and Civil War”, 2003) found that, once income was controlled for, diversity itself did not predict civil war onset; conditions that favour insurgency, such as poverty, weak states, rough terrain and large populations, did. Later work found that *how* groups are treated, especially exclusion from power, matters a great deal. This lesson weighs theories of ethnicity against such evidence, then turns to minority rights, indigenous peoples and language."},
   goals:[
     "Compare primordialist, instrumentalist and constructivist accounts of ethnicity",
     "Use the evidence on ethnic diversity, exclusion, horizontal inequality and civic ties to assess claims about ethnic conflict",
     "Explain mechanisms such as the ethnic security dilemma and ethnic outbidding, and the power-sharing debate",
     "Describe international minority rights, UNDRIP and the politics of language, with cases from several regions"
   ],
   learn:[
    {h:"Three ways to explain ethnic attachment", body:[
      {lead:"Why do ethnic ties feel so strong, and why do they matter more at some times than others?"},
      "From the sociology primer: [[ethnicity]] is identity based on shared culture, such as language, religion, customs, ancestry and history. Scholars explain its power in three main ways.",
      {table:[
        ["Approach","Core claim","Classic work"],
        ["[[primordialism|Primordialism]]","Ethnic ties feel given, like kinship, and carry deep emotional force","Edward Shils (1957); Clifford Geertz, “The Integrative Revolution” (1963)"],
        ["[[instrumentalism-ethnicity|Instrumentalism]]","Elites and groups mobilise ethnicity to win power or resources","Studies of ethnic politics from the 1970s onwards"],
        ["[[constructivism-ethnicity|Constructivism]]","Ethnic categories and boundaries are made, kept and changed","Fredrik Barth, *Ethnic Groups and Boundaries* (1969); Rogers Brubaker, *Ethnicity without Groups* (2004)"]
      ]},
      "Read Geertz carefully: he described **attachments that people experience as given**, in the new states of Asia and Africa, not a claim that the groups are biologically fixed. Barth’s insight was that the [[ethnic-boundary|ethnic boundary]] matters more than the “cultural stuff” inside it: people and practices cross it, but the boundary is maintained. Most scholars today combine the approaches: identities are constructed, can be mobilised instrumentally, and are often *felt* as primordial."
    ]},
    {h:"Is diversity the problem? What the evidence says", body:[
      "In the 1990s, journalists and politicians often explained wars in the former Yugoslavia, Rwanda and elsewhere as “ancient hatreds” finally released. Research has largely rejected that picture.",
      {list:[
        "**Diversity alone doesn’t predict war.** Fearon and Laitin (2003), the hook.",
        "**Exclusion does.** Lars-Erik Cederman, Andreas Wimmer and Brian Min (“Why Do Ethnic Groups Rebel?”, *World Politics*, 2010), using the Ethnic Power Relations dataset, found that groups excluded from state power, especially recently, are much more likely to be involved in armed conflict.",
        "**Inequality between groups matters.** Frances Stewart’s research (*Horizontal Inequalities and Conflict*, 2008) showed that [[horizontal-inequality|horizontal inequalities]], gaps between culturally defined groups in wealth, jobs, education or political power, raise the risk of conflict more than inequality between individuals.",
        "**Civic ties can protect.** Ashutosh Varshney (*Ethnic Conflict and Civic Life: Hindus and Muslims in India*, 2002) compared Indian cities and found that those with strong associations linking members of both communities, such as business groups and trade unions, saw far less riot violence."
      ]},
      {fig:'<svg viewBox="0 0 340 400"><rect class="d-panel" x="20" y="8" width="300" height="50" rx="8" stroke-width="1.5"/><text x="170" y="30" text-anchor="middle">Ethnic diversity</text><text class="s" x="170" y="47" text-anchor="middle">common, and usually peaceful</text><path class="d-ink" d="M170 58 L170 80" stroke-width="2" marker-end="url(#ar6)"/><rect class="d-gold" x="20" y="84" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="106" text-anchor="middle">Grievance</text><text class="s" x="170" y="126" text-anchor="middle">exclusion, horizontal inequality</text><path class="d-ink" d="M170 140 L170 162" stroke-width="2" marker-end="url(#ar6)"/><rect class="d-gold" x="20" y="166" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="188" text-anchor="middle">Mobilisation</text><text class="s" x="170" y="208" text-anchor="middle">elites, outbidding, fear</text><path class="d-ink" d="M170 222 L170 244" stroke-width="2" marker-end="url(#ar6)"/><rect class="d-gold" x="20" y="248" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="270" text-anchor="middle">Opportunity</text><text class="s" x="170" y="290" text-anchor="middle">weak state, collapse, terrain</text><path class="d-ink" d="M170 304 L170 326" stroke-width="2" marker-end="url(#ar6)"/><rect class="d-rose" x="20" y="330" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="352" text-anchor="middle">Violence</text><text class="s" x="170" y="372" text-anchor="middle">civic ties can break the chain</text><defs><marker id="ar6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"A vertical chain of boxes linked by arrows. Ethnic diversity, common and usually peaceful, leads to grievance (exclusion, horizontal inequality), then mobilisation (elites, outbidding, fear), then opportunity (weak state, collapse, terrain), then violence. A note says civic ties can break the chain.", cap:"Diversity is not a cause on its own. Researchers look for the links that turn difference into violence."},
      {key:"Difference is everywhere; violence is not. The useful question is what turns one into the other."}
    ]},
    {h:"Mechanisms: fear, outbidding and elites", body:[
      "Barry Posen (“The Security Dilemma and Ethnic Conflict”, *Survival*, 1993) applied realism’s [[security-dilemma|security dilemma]] inside collapsing states. When the state that protected everyone weakens, as in Yugoslavia, each group arms for defence, others read that as a threat, and fear spirals: an [[ethnic-security-dilemma|ethnic security dilemma]].",
      "Alvin Rabushka and Kenneth Shepsle (*Politics in Plural Societies*, 1972) described [[ethnic-outbidding|ethnic outbidding]]: when parties compete for votes within one group, each tries to look more loyal than its rival, so moderate positions lose. **Sri Lanka** is a frequently cited case. In 1956 a new government passed the Official Language Act, often called “Sinhala Only”, making Sinhala the sole official language. Scholars such as Neil DeVotta (*Blowback*, 2004) trace how competition for Sinhalese votes and Tamil resistance hardened positions over decades before the civil war (1983–2009). Tamil was made an official language in 1987.",
      "**Rwanda** shows the role of organisers. The genocide against the Tutsi in 1994, in which at least half a million people, most of them Tutsi, were killed in about a hundred days (estimates range up to around a million), followed years of hate propaganda, including on radio, and the training of militias, as investigators such as Alison Des Forges documented (*Leave None to Tell the Story*, Human Rights Watch, 1999). The colonial identity cards of Lesson 1 made the categories easy to check at roadblocks. The scholarly consensus is that it was organised, not a spontaneous outburst of old hatreds ([[genocide]] in the primer)."
    ]},
    {h:"Managing diversity: power-sharing and its critics", body:[
      "Arend Lijphart (*Democracy in Plural Societies*, 1977) proposed [[consociationalism]]: a grand coalition of group leaders, a mutual veto on vital issues, proportional shares of offices and money, and autonomy for each group in its own affairs. Belgium, Switzerland and Lebanon (its 1943 National Pact divided top offices by religious community) are often cited, and Northern Ireland’s 1998 Good Friday Agreement used consociational ideas.",
      "Donald Horowitz (*Ethnic Groups in Conflict*, 1985) argued that such arrangements can freeze identities. He favoured **centripetal** rules that reward politicians for winning votes across groups, such as Nigeria’s requirement that a presidential winner gain at least a quarter of the votes in at least two-thirds of its states. **Federalism** is another tool: India redrew many state borders along linguistic lines in 1956. Every design has trade-offs; seminars compare them case by case."
    ]},
    {h:"Minority rights in international law", body:[
      "After 1919 the League of Nations oversaw “minority treaties” with several new or enlarged states in Central and Eastern Europe. The UN system took a different route, starting from individual rights. Article 27 of the International Covenant on Civil and Political Rights (1966) protects persons belonging to ethnic, religious or linguistic minorities in enjoying their culture, religion and language “in community with the other members of their group”.",
      "The UN’s 1992 Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities added detail, and in Europe the Council of Europe’s Framework Convention for the Protection of National Minorities (opened 1995, in force 1998) and the OSCE High Commissioner on National Minorities (created 1992) work on prevention. There is still no agreed legal definition of “minority”: states disagree over whether migrants, for example, count. [[minority-rights|Minority rights]] usually mean protection of identity and equal participation, not separate statehood."
    ]},
    {h:"Indigenous peoples and UNDRIP", body:[
      "[[indigenous-peoples|Indigenous peoples]] are distinct from minorities in international practice: the UN uses no single definition but stresses self-identification, historical continuity with societies before colonisation or settlement, strong links to territories and resources, and distinct institutions. The International Labour Organization’s Convention No. 169 (1989), which revised an earlier ILO convention of 1957, is the main binding treaty; a UN Permanent Forum on Indigenous Issues was established in 2000.",
      "On 13 September 2007 the General Assembly adopted the [[undrip|UN Declaration on the Rights of Indigenous Peoples]] (UNDRIP) by 144 votes to 4, with 11 abstentions. The four against, Australia, Canada, New Zealand and the United States, later reversed their positions and endorsed it. Its 46 articles include the right to self-determination (Article 3) and, in several articles, [[free-prior-informed-consent|free, prior and informed consent]] before relocation or projects affecting indigenous lands. As a declaration it is not a treaty, but some states have built it into law.",
      "In Japan, both houses of the Diet passed a resolution in June 2008 urging recognition of the Ainu as an indigenous people, and a 2019 Act was the first law to name them as such (see Unit 4). Norway’s Sámi Parliament opened in 1989. Indigenous scholars also press for [[indigenous-data-sovereignty|indigenous data sovereignty]], met in the data unit."
    ]},
    {h:"Language politics", body:[
      "Language is often where identity becomes policy. In East Pakistan, on 21 February 1952, police fired on students in Dhaka demanding recognition of Bengali as a state language; several were killed. The movement fed later Bangladeshi nationalism, and in 1999 UNESCO proclaimed 21 February International Mother Language Day, observed since 2000.",
      {list:[
        "**Shared languages:** Tanzania promoted Swahili after independence as a national language belonging to no single ethnic group, like Indonesian (Lesson 2).",
        "**Revival:** New Zealand’s Māori Language Act 1987 made te reo Māori an official language.",
        "**Colonial languages:** the Kenyan writer Ngũgĩ wa Thiong’o (*Decolonising the Mind*, 1986) argued that writing in English kept African minds colonised, and turned to writing in Gĩkũyũ. Others defend English or French as neutral bridges between many groups.",
        "**Global action:** the UN declared 2022–2032 the International Decade of Indigenous Languages."
      ]},
      "[[language-policy|Language policy]], the choice of official, school and administrative languages, distributes jobs, status and belonging, which is why it is so often contested."
    ]},
    {h:"Common misconceptions", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["Ethnic wars come from ancient hatreds.","Research points to exclusion, inequality, elite strategies and weak states."],
        ["More diversity means more war.","Diversity alone does not predict civil war once income is controlled."],
        ["Minorities have a legal right to their own state.","Minority rights protect identity and participation, not secession."],
        ["UNDRIP is a binding treaty.","It is a declaration; some states have written it into law."]
      ]},
      {key:"Ethnic difference becomes dangerous through politics: who is excluded, who mobilises, and whether institutions protect everyone."}
    ]}
   ],
   try:[
    {id:"e4u6-l4-x1", type:"sort", q:"Which approach to ethnicity does each claim reflect?", buckets:["Primordialist","Instrumentalist","Constructivist"], items:[
      {t:"People feel ethnic ties as deep and given, like family bonds.", b:0, why:"The emphasis on felt, given attachment is primordialist (in Geertz’s sense)."},
      {t:"A politician stresses ethnic identity to win votes and control jobs.", b:1, why:"Mobilising identity for power or resources is instrumentalist."},
      {t:"The boundary between two groups is kept up even as people and customs cross it.", b:2, why:"That is Barth’s boundary argument."},
      {t:"A colonial census created a category that later became a political identity.", b:2, why:"Categories being made and changed is constructivist."},
      {t:"Rival groups compete for state contracts by organising along ethnic lines.", b:1, why:"Ethnicity as a tool for resources is instrumentalist."}
    ]},
    {id:"e4u6-l4-x2", type:"mcq", q:"A commentator writes: “This country has dozens of ethnic groups, so civil war is inevitable.” Which finding most directly challenges this?", options:[
      {t:"Fearon and Laitin found diversity did not predict civil war once income was controlled for", ok:true, why:"Right. Their study of 1945–1999 is the standard reply to “diversity causes war”."},
      {t:"Anderson found nations are imagined communities", why:"True, but it does not test whether diversity causes war."},
      {t:"UNDRIP was adopted in 2007", why:"A declaration on indigenous rights is not evidence about the causes of civil war."},
      {t:"Billig found flags hang unwaved", why:"Banal nationalism is not about civil war risk."}
    ]},
    {id:"e4u6-l4-x3", type:"mcq", q:"After a federation collapses, each group forms militias “for protection”. Each side reads the other’s militias as preparation for attack, and fear spirals. Which concept fits best?", options:[
      {t:"The ethnic security dilemma", ok:true, why:"Right. Posen applied the security dilemma to groups inside collapsing states."},
      {t:"Ethnic outbidding", why:"Outbidding is about parties competing for one group’s votes."},
      {t:"Banal nationalism", why:"That is everyday flagging of the nation, not an arms spiral."},
      {t:"Free, prior and informed consent", why:"That is a principle of indigenous rights."}
    ]},
    {id:"e4u6-l4-x4", type:"match", q:"Match each scholar to the finding or proposal.", pairs:[
      ["Cederman, Wimmer and Min (2010)","Groups excluded from state power are more likely to rebel","They used the Ethnic Power Relations dataset."],
      ["Frances Stewart (2008)","Inequality between culturally defined groups raises conflict risk","Horizontal inequalities."],
      ["Ashutosh Varshney (2002)","Cities with strong inter-community associations saw less riot violence","His study compared Indian cities."],
      ["Arend Lijphart (1977)","Grand coalitions, mutual vetoes, proportionality and group autonomy","Consociational democracy."],
      ["Donald Horowitz (1985)","Electoral rules should reward winning votes across groups","Centripetal power-sharing."]
    ]},
    {id:"e4u6-l4-x5", type:"spot", q:"A student’s summary of UNDRIP. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"The General Assembly adopted it on 13 September 2007.", flag:false, why:"Correct."},
      " ",
      {t:"It passed unanimously.", flag:true, why:"The vote was 144 to 4, with 11 abstentions."},
      " ",
      {t:"The four states that voted against later endorsed it.", flag:false, why:"Correct: Australia, Canada, New Zealand and the United States."},
      " ",
      {t:"It is a binding treaty that every UN member has ratified.", flag:true, why:"It is a declaration, not a treaty, so it is not ratified, though some states have built it into law."},
      " ",
      {t:"It includes free, prior and informed consent.", flag:false, why:"Correct: in several articles, for example on relocation."}
    ]},
    {id:"e4u6-l4-x6", type:"mcq", q:"Which statement about international minority rights is accurate?", options:[
      {t:"Article 27 of the ICCPR protects members of minorities in enjoying their culture, religion and language with others of their group", ok:true, why:"Right. It is the main global treaty provision."},
      {t:"International law gives every minority the right to its own independent state", why:"Minority rights protect identity and participation, not a right to secession."},
      {t:"There is an agreed legal definition of “minority” that all states accept", why:"No such agreed definition exists."},
      {t:"Minority rights began only in 2007 with UNDRIP", why:"UNDRIP concerns indigenous peoples; minority protection goes back to the League’s minority treaties and the ICCPR."}
    ]},
    {id:"e4u6-l4-x7", type:"order", q:"Put these language-politics events in order, earliest first.", items:[
      {t:"Police fire on language protesters in Dhaka", why:"21 February 1952."},
      {t:"Sri Lanka passes the Official Language Act", why:"1956."},
      {t:"Ngũgĩ wa Thiong’o publishes *Decolonising the Mind*", why:"1986."},
      {t:"The Māori Language Act makes te reo Māori official", why:"1987."},
      {t:"UNESCO proclaims International Mother Language Day", why:"1999, observed from 2000."}
    ]}
   ],
   apply:{intro:"Look at ethnicity, minorities and language through data and primary sources.", tasks:[
     {t:"Explore a conflict dataset", how:["Open the free UCDP conflict encyclopedia or the Ethnic Power Relations data online (see the datasets in Unit 3, {{ir-datasets}}; no account is needed to browse).","Choose one country and note the conflicts recorded, the actors and whether groups are described as excluded from power.","Note what the data cannot tell you."], write:"Country… Conflicts and actors… Power access of groups… What the data cannot tell me…"},
     {t:"Read UNDRIP", how:["Open the text of UNDRIP on the UN website.","Read Articles 3, 10, 19 and 32, and note what each says about self-determination and consent.","Find one news report about an indigenous people asserting these rights, in any region."], write:"Article 3… Article 10… Article 19… Article 32… The case I found…"},
     {t:"A language map of your life", how:["List every language you hear, read or use in a week, and where (home, work, signs, media, government forms).","Note which are official where you live, which are taught in schools, and which have no official status.","Write two sentences on who gains and who loses from the current language policy."], write:"Languages and settings… Official, taught, unofficial… Who gains and who loses…"},
     {t:"Seminar questions", how:["Is “ethnic conflict” a useful category, or does the label itself mislead?","Does consociational power-sharing end conflict at the cost of freezing identities?","Should indigenous peoples’ rights differ from minority rights, and why?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes from one conflict dataset entry, four UNDRIP articles and a case, a personal language map, and a seminar paragraph."},
   read:[
     {book:"eirt", where:"Chapter 18 “Indigenous Perspectives”", note:"Read it for how indigenous scholars challenge IR’s assumptions about sovereignty and the state."},
     {book:"soc", where:"Chapter 11, Section 11.4 “Intergroup Relationships”", note:"Pluralism, assimilation, segregation and genocide as patterns of group relations."},
     {book:"ospol", where:"Chapter 7, section 7.2 “Political Culture and Majority-Minority Relations”", note:"A political science view of majorities, minorities and rights."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u6-l5", title:"Religion and world politics", minutes:65,
   hook:{q:"A major 2025 study of more than 2,700 censuses and surveys compared the world’s religious landscape in 2010 and 2020. Which major religious group was the only one with fewer people in 2020 than in 2010?", options:["Christians","Hindus","Buddhists","Jews"], answer:2, reveal:"**Buddhists.** The Pew Research Center found the number of Buddhists fell by about 19 million, to around 324 million, while Muslims grew fastest and the religiously unaffiliated also rose as a share of the world’s population. About three-quarters of people still had a religious affiliation in 2020. Religion is neither vanishing nor simply “returning”: it is changing in different ways in different places. This lesson asks what that means for world politics, and tests the most famous claim about it, the “clash of civilizations”."},
   goals:[
     "Explain the secularisation thesis and its main critics, using current data with care",
     "Describe the “return of religion” in IR and the debate about whether religion ever left",
     "Compare models of secularism, and analyse religion as an actor and as a source of soft power",
     "Present Huntington’s clash thesis accurately and assess it against its critics and empirical tests"
   ],
   learn:[
    {h:"Did religion ever leave?", body:[
      {lead:"For much of the 20th century, many social scientists expected religion to fade as societies modernised."},
      "That expectation is the [[secularization|secularisation]] thesis, which the sociology primer introduced in its three senses: decline in belief and practice, differentiation of institutions from religion, and privatisation of faith ({{secularization}}). The primer also noted Peter Berger’s change of mind, from *The Sacred Canopy* (1967) to “The Desecularization of the World” (1999).",
      "Current data support neither a simple decline nor a simple revival. The Pew Research Center’s 2025 report, covering 2010–2020 in 201 countries and territories, found that Christians fell from about 30.6% to 28.8% of the world’s population, Muslims rose from about 23.8% to 25.6%, the unaffiliated rose to 24.2%, Hindus held steady near 14.9%, and Buddhists fell in number. Pew found that people leaving religion, mostly Christianity, drove the rise of the unaffiliated, while Muslim growth came mainly from a young age structure and high fertility.",
      "Three influential responses to these patterns:",
      {list:[
        "**[[existential-security|Existential security]]:** Pippa Norris and Ronald Inglehart (*Sacred and Secular*, 2004) argued that religiosity declines where life is safer and more predictable, so the world as a whole is not becoming less religious, because poorer, less secure societies are growing faster.",
        "**[[deprivatization|Deprivatisation]]:** José Casanova (*Public Religions in the Modern World*, 1994) showed religions re-entering public life, from Catholic support for democratisation in Poland and Latin America to evangelical activism in the US, and separated the parts of the thesis: differentiation may hold even where decline does not.",
        "**[[multiple-modernities|Multiple modernities]]:** S. N. Eisenstadt (*Daedalus*, 2000) argued that modernity takes many cultural forms, not one Western path, so modernising societies need not secularise in the same way."
      ]},
      "Jürgen Habermas later spoke of a [[post-secular]] society (for example in “Notes on Post-Secular Society”, 2008), in which secular citizens must accept that religion will persist and engage with religious voices in public debate."
    ]},
    {h:"The “return of religion” in IR", body:[
      "IR long assumed a secular world. Its founding story starts from the Peace of Westphalia (1648), read as ending the wars of religion by making faith a domestic matter; it echoed the Peace of Augsburg (1555) and its principle that the ruler’s religion would be the region’s (*cuius regio, eius religio*). The primer showed that this “Westphalian” story is itself contested ({{sovereignty}}).",
      "Events kept breaking the assumption: Iran’s 1979 revolution, the role of the Catholic Church in Poland in the 1980s, religious dimensions of wars from the Balkans to Sudan, and the attacks of 11 September 2001. A wave of books followed: Fabio Petito and Pavlos Hatzopoulos (eds.), *Religion in International Relations: The Return from Exile* (2003); Jonathan Fox and Shmuel Sandler, *Bringing Religion into International Relations* (2004); Scott Thomas, *The Global Resurgence of Religion and the Transformation of International Relations* (2005); and Monica Duffy Toft, Daniel Philpott and Timothy Shah, *God’s Century* (2011). Together they made the [[return-of-religion|“return of religion”]] a research field.",
      "Critics question the frame itself. Elizabeth Shakman Hurd (*The Politics of Secularism in International Relations*, 2008) argued that **secularism** is not neutral absence of religion but a political settlement with its own history, varying between countries. The anthropologist Talal Asad (*Formations of the Secular*, 2003) argued that the categories “religion” and “the secular” were themselves shaped in modern Western history. And William Cavanaugh (*The Myth of Religious Violence*, 2009) challenged the idea that religion is uniquely prone to violence, compared with nationalism or secular ideologies. On this view religion never left; IR just stopped looking."
    ]},
    {h:"Secularisms, in the plural", body:[
      "[[secularism|Secularism]], as a principle for how the state relates to religion, takes different forms. This table shows some well-known models; each is debated inside its own country.",
      {table:[
        ["Model","Example","Core idea"],
        ["Strict separation ([[laicite|laïcité]])","France, law of 1905","The state recognises no religion and keeps religion out of public institutions"],
        ["Separation with free exercise","United States, First Amendment","No established church; strong protection for religious practice"],
        ["“Principled distance”","India (the word “secular” added to the Constitution in 1976)","The state may engage with all religions but favour none, as the political theorist Rajeev Bhargava describes it"],
        ["State-managed religion","Turkey’s Presidency of Religious Affairs (Diyanet), founded 1924","A secular state that also organises and funds religious services"],
        ["Belief in God, plural recognition","Indonesia’s Pancasila (1945)","Belief in one God as a national principle, with several religions officially recognised"]
      ]},
      {tip:"When a text says a country is “secular”, ask: separation of what from what, and who decides?"}
    ]},
    {h:"Religion as actor and as soft power", body:[
      "Religion enters world politics through **actors**: the Holy See, a permanent observer at the UN since 1964; the Organisation of Islamic Cooperation, founded in 1969, with 57 member states; and faith-based NGOs such as Caritas, Islamic Relief and World Vision. The Catholic Community of Sant’Egidio helped mediate the 1992 Rome General Peace Accords that ended Mozambique’s civil war.",
      "States also use religion as a source of [[soft-power|soft power]] (Joseph Nye’s idea, {{joseph-nye}}; Unit 8 goes deeper). [[religious-soft-power|Religious soft power]] includes training clergy for other countries, funding mosques, temples or schools abroad, hosting pilgrims, and promoting religious heritage. India led the UN resolution (2014) that made 21 June the International Day of Yoga; China has hosted World Buddhist Forums since 2006; Saudi Arabia, Iran, Turkey and Morocco all run religious outreach abroad. Peter Mandaville and Shadi Hamid (*Islam as Statecraft*, 2018) studied how governments use religion in foreign policy.",
      "Scholars warn of two risks: treating religion merely as a tool states can switch on, and governments defining “good” and “bad” religion for others, a concern Hurd raised about international programmes to promote religious freedom (*Beyond Religious Freedom*, 2015)."
    ]},
    {h:"Huntington’s clash: the argument in full", body:[
      "A one-line reminder from Unit 1: Samuel Huntington ({{samuel-huntington}}) argued in “The Clash of Civilizations?” (*Foreign Affairs*, 1993) and a 1996 book that the main conflicts after the Cold War would run between civilisations ([[clash-of-civilizations]]). In a seminar you will need the argument in full.",
      {list:[
        "**Civilisations** are the broadest cultural groupings, defined above all by religion. The 1993 article listed Western, Confucian, Japanese, Islamic, Hindu, Slavic-Orthodox, Latin American and “possibly” African; the 1996 book renamed Confucian as **Sinic**.",
        "**[[fault-line-conflict|Fault-line conflicts]]** occur between neighbouring groups from different civilisations; **kin-country rallying** draws in states from the same civilisation.",
        "**Torn countries**, such as Turkey, Mexico and Russia in his account, have leaders who want to join another civilisation while much of the public does not.",
        "His central policy advice was that the West should strengthen its own unity and avoid intervening in other civilisations, not wage a crusade; he called Western universalism “false”, “immoral” and “dangerous”."
      ]},
      "The thesis gained new attention after 11 September 2001, and the phrase entered everyday politics, often in simplified form."
    ]},
    {h:"Testing and contesting the clash", body:[
      "**Conceptual critiques.** Edward Said’s “The Clash of Ignorance” (*The Nation*, 2001) argued that civilisations are not sealed blocks with single identities; they are internally diverse, argue among themselves and borrow from each other. Amartya Sen (2006, Lesson 1) added that sorting people by civilisation alone is a “solitarist” reduction.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-gold" x="20" y="8" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Hypothesis</text><text class="s" x="170" y="52" text-anchor="middle">pairs of states from different civilisations fight more</text><path class="d-ink" d="M170 70 L170 96" stroke-width="2" marker-end="url(#ar7)"/><rect class="d-panel" x="20" y="100" width="300" height="78" rx="8" stroke-width="1.5"/><text x="170" y="124" text-anchor="middle">Test</text><text class="s" x="170" y="144" text-anchor="middle">conflict data on pairs of states,</text><text class="s" x="170" y="162" text-anchor="middle">controlling for power, distance, democracy</text><path class="d-ink" d="M170 178 L170 204" stroke-width="2" marker-end="url(#ar7)"/><rect class="d-sage" x="20" y="208" width="300" height="110" rx="8" stroke-width="2"/><text x="170" y="232" text-anchor="middle">Findings</text><text class="s" x="170" y="254" text-anchor="middle">Russett, Oneal and Cox (2000): no</text><text class="s" x="170" y="272" text-anchor="middle">Henderson and Tucker (2001): no</text><text class="s" x="170" y="290" text-anchor="middle">Chiozza (2002): no</text><text class="s" x="170" y="308" text-anchor="middle">realist and liberal factors explain more</text><defs><marker id="ar7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"A flow from hypothesis to test to findings. Hypothesis: pairs of states from different civilisations fight more. Test: conflict data on pairs of states, controlling for power, distance and democracy. Findings: Russett, Oneal and Cox (2000), no; Henderson and Tucker (2001), no; Chiozza (2002), no; realist and liberal factors explain more.", cap:"How quantitative researchers tested the clash thesis between states."},
      "**Empirical tests.** Bruce Russett, John Oneal and Michaelene Cox (*Journal of Peace Research*, 2000) found that conflicts between states from different civilisations were not more likely once realist and liberal factors were included. Errol Henderson and Richard Tucker (*International Studies Quarterly*, 2001) and Giacomo Chiozza (*Journal of Peace Research*, 2002) also found no consistent sign that pairs of states from different civilisations fought more. Pippa Norris and Ronald Inglehart (2002), using World Values Survey data, found that publics in Muslim-majority and Western countries differed little in support for democracy, but much more on gender equality and sexual liberalisation.",
      "**What defenders say.** Supporters reply that Huntington was writing about the growing **salience** of cultural identity, not predicting that every war would follow civilisational lines, and they point to leaders who now describe their countries as “civilisational states”. Tests of state-to-state wars may also miss conflicts inside states and between non-state groups.",
      "**International responses.** The UN declared 2001 the Year of Dialogue among Civilizations, an idea proposed by Iran’s President Mohammad Khatami, and in 2005 launched the [[alliance-of-civilizations|Alliance of Civilizations]], initiated by Spain and Turkey. Both reject the idea of inevitable clash ([[dialogue-among-civilizations|dialogue among civilisations]]); both also accept civilisations as units, which some critics find a problem in itself.",
      {key:"Religion shapes world politics through identities, actors, ideas and states’ strategies. Big claims about it, from secularisation to clash, need precise definitions and careful evidence."}
    ]}
   ],
   try:[
    {id:"e4u6-l5-x1", type:"mcq", q:"Which statement best fits the Pew 2025 findings on 2010–2020?", options:[
      {t:"Christians and Buddhists fell as a share of the world, while Muslims and the unaffiliated rose", ok:true, why:"Right. Christians fell from about 30.6% to 28.8% and Muslims rose from about 23.8% to 25.6%; the unaffiliated rose to 24.2%; Buddhists fell in number."},
      {t:"Religion is disappearing worldwide; most people now have no religion", why:"About three-quarters of people still had a religious affiliation in 2020."},
      {t:"Every religious group grew at exactly the same rate", why:"Growth rates differed sharply, which is the main story of the report."},
      {t:"The unaffiliated fell as a share of the world", why:"They rose, to 24.2%."}
    ]},
    {id:"e4u6-l5-x2", type:"match", q:"Match each scholar to the argument.", pairs:[
      ["José Casanova (1994)","Religions re-entered public life: deprivatisation","*Public Religions in the Modern World*."],
      ["Pippa Norris and Ronald Inglehart (2004)","Religiosity falls where life is more secure","*Sacred and Secular* and existential security."],
      ["S. N. Eisenstadt (2000)","Modernity takes many cultural forms","Multiple modernities."],
      ["Elizabeth Shakman Hurd (2008)","Secularism is a political settlement, not neutral absence","*The Politics of Secularism in International Relations*."],
      ["William Cavanaugh (2009)","Religion is not uniquely prone to violence","*The Myth of Religious Violence*."]
    ]},
    {id:"e4u6-l5-x3", type:"sort", q:"Which model of secularism does each description fit best?", buckets:["Strict separation","Principled distance","State-managed religion"], items:[
      {t:"The state recognises no religion and keeps religious symbols out of public schools.", b:0, why:"That is laïcité-style strict separation."},
      {t:"The state may support festivals or schools of every religion, as long as it favours none.", b:1, why:"Bhargava’s principled distance."},
      {t:"A government directorate appoints and pays imams and writes sermons.", b:2, why:"State-managed religion, as with Turkey’s Diyanet."},
      {t:"A 1905 law separating churches and the state.", b:0, why:"France’s law of 1905 is the classic case."}
    ]},
    {id:"e4u6-l5-x4", type:"mcq", q:"A government funds the training of clergy from other countries and hosts international religious forums to improve its image. Which concept fits best?", options:[
      {t:"Religious soft power", ok:true, why:"Right. Using religion to attract and influence abroad is a form of soft power."},
      {t:"Deprivatisation", why:"That is about religion entering public life, not a state strategy abroad."},
      {t:"Fault-line conflict", why:"That is Huntington’s term for wars between neighbouring civilisations."},
      {t:"Ethnic outbidding", why:"That is about parties competing for one group’s votes."}
    ]},
    {id:"e4u6-l5-x5", type:"spot", q:"A blog post summarises Huntington. Tap the claims that misrepresent him.", ask:"misrepresent", parts:[
      {t:"He defined civilisations largely by religion.", flag:false, why:"Accurate."},
      " ",
      {t:"He urged the West to convert other civilisations to Western values.", flag:true, why:"The reverse: he called Western universalism false, immoral and dangerous, and advised against intervening in other civilisations."},
      " ",
      {t:"He listed a Japanese civilisation separate from the Confucian or Sinic one.", flag:false, why:"Accurate, in both the article and the book."},
      " ",
      {t:"He said all future wars would be between Islam and the West.", flag:true, why:"He described many fault lines and several civilisations, not one single war."},
      " ",
      {t:"He described Turkey, Mexico and Russia as “torn countries”.", flag:false, why:"Accurate."}
    ]},
    {id:"e4u6-l5-x6", type:"mcq", q:"Which finding is the strongest evidence against the claim that states from different civilisations fight each other more?", options:[
      {t:"Studies of pairs of states found no consistent increase in conflict across civilisational lines once other factors were controlled", ok:true, why:"Right. Russett, Oneal and Cox (2000), Henderson and Tucker (2001) and Chiozza (2002) all tested this directly."},
      {t:"Said said civilisations are internally diverse", why:"That is a conceptual critique, important but not an empirical test of conflict rates."},
      {t:"The UN declared 2001 the Year of Dialogue among Civilizations", why:"A UN initiative is a response, not evidence about conflict patterns."},
      {t:"Huntington’s article was published in *Foreign Affairs*", why:"Where it was published says nothing about whether it is correct."}
    ]},
    {id:"e4u6-l5-x7", type:"order", q:"Put these in order, earliest first.", items:[
      {t:"The Peace of Augsburg: the ruler’s religion is the region’s", why:"1555."},
      {t:"France separates churches and the state by law", why:"1905."},
      {t:"Iran’s revolution", why:"1979."},
      {t:"Huntington’s article in *Foreign Affairs*", why:"1993."},
      {t:"The UN launches the Alliance of Civilizations", why:"2005."}
    ]}
   ],
   apply:{intro:"Look at religion in world politics through data, primary texts and the news.", tasks:[
     {t:"Read the data yourself", how:["Open the Pew Research Center report “How the Global Religious Landscape Changed From 2010 to 2020” (2025), free online.","Note the figures for one region and one country you know.","Write two sentences on what the data show and one on what they cannot show (for example, how intensely people believe)."], write:"Region… Country… What the data show… What they cannot show…"},
     {t:"Read Huntington and Said side by side", how:["Read the opening pages of Huntington’s 1993 article and of Said’s 2001 reply (libraries and many course sites provide both).","List two claims each makes about what a civilisation is.","Note one point where you think each is strongest."], write:"Huntington’s claims… Said’s claims… Strongest point of each…"},
     {t:"Spot religion in foreign policy", how:["Find one recent official statement or news report about a state using religion abroad: funding, training, pilgrimage, heritage or mediation.","Note the actor, the audience and the goal.","Decide whether “soft power” describes it well, and why."], write:"The case… Actor, audience, goal… Is soft power the right label?…"},
     {t:"Seminar questions", how:["Did religion “return” to world politics, or did IR simply stop ignoring it?","Is secularism a neutral framework or one tradition among others?","Did the empirical tests refute Huntington, or did they test a different claim from the one he made?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on Pew data for one region and country, a comparison of Huntington and Said, one case of religion in foreign policy, and a seminar paragraph."},
   read:[
     {book:"eir", where:"Chapter 9 “Religion and Culture”", note:"Read it for an accessible overview, including the clash debate and whether people can “all live together”."},
     {book:"soc", where:"Chapter 15, Section 15.1 “The Sociological Approach to Religion”", note:"Functionalist, conflict and interactionist views of religion."}
   ]
  }
  ],
  checkpoint:["e4u6-q02","e4u6-q06","e4u6-q11","e4u6-q15","e4u6-q20","e4u6-q24","e4u6-q29","e4u6-q32","e4u6-q35","e4u6-q38","e4u6-q42","e4u6-q45"],
  codex:[
   {id:"identity-and-difference", title:"Identity and difference in world politics", aka:["Self and Other","Identity in IR"], tags:["international relations","identity","constructivism"], summary:"How identities of groups and states are made through difference, and why they shape what actors want and fear.",
    levels:{
     starter:[
      "An identity is an answer to the question “who are we?”. You can only answer it by contrast: a family is not the neighbours, a nation is not the country next door. So identities are always formed through **difference**, in relation to an **Other**.",
      "Picture a school sports day. Children who barely knew each other in the morning cheer for “their” team by the afternoon. The team colours were assigned at random, but the loyalty is real. Scholars say identities like this are **socially constructed**: made by people and institutions, yet with real effects.",
      "In world politics, identity helps explain why some states see each other as friends and others as threats, why groups demand recognition, and why some conflicts last even when ending them would make everyone safer.",
      {key:"Constructed does not mean fake: identities are made, and they matter."}
     ],
     builder:[
      "**Core vocabulary.** *Essentialism* treats a group as having a fixed inner nature; *constructivism* treats identities as made and remade. *Self/Other* describes how a group defines itself by contrast. *Social identity theory* (Henri Tajfel and John Turner, 1979) explains in-group favouritism through self-esteem gained from membership.",
      "**In IR.** Iver Neumann’s *Uses of the Other* (1999) traced how Europe defined itself against “the Turk” and Russia. David Campbell’s *Writing Security* (1992) argued that US foreign policy helped produce national identity by naming external dangers. Constructivists ({{constructivism}}) argue that identity shapes interests: who a state thinks it is affects what it wants.",
      "**Security of the self.** Jennifer Mitzen (2006) introduced *ontological security*: states, like people, need a stable sense of self and predictable routines, and may cling even to rivalry to keep them.",
      "**Recognition.** Charles Taylor’s “The Politics of Recognition” (1992) argued that misrecognition harms. In IR, struggles for status and respect, such as Japan’s 1919 Racial Equality Proposal, can be read this way.",
      "**Categories.** States make groups by counting and classifying: Singapore’s CMIO categories, Malaysia’s *bumiputera* policy, colonial Rwanda’s identity cards."
     ],
     pro:[
      "**Too loose a concept?** Rogers Brubaker and Frederick Cooper (“Beyond ‘Identity’”, 2000) argued that “identity” is asked to mean both deep sameness and fluid multiplicity, and so means little. They proposed *identification*, *self-understanding* and *groupness*. Brubaker’s critique of “groupism” warns against treating ethnic or national groups as solid actors.",
      "**Plural selves.** Amartya Sen (*Identity and Violence*, 2006) argued that reducing people to a single identity, a “solitarist” view, makes violence easier. Stuart Hall (1996) described identity as a position taken within discourse, never finished.",
      "**Debates in seminars.** Is state identity a real property or a metaphor? Do identities cause behaviour, or are they used to justify interests decided on other grounds (the instrumentalist reply)? How can a researcher observe identity without simply reading it off behaviour, which would make arguments circular? Discourse analysis (Unit 3, {{discourse-analysis}}), surveys of national identity, and comparison of official texts over time are common methods.",
      "**Cautions.** Identity claims about whole peoples easily slide into national-character stereotypes. Good work names who speaks for “us”, which audience they address, and who is left out."
     ]},
    related:["constructivism","intersectionality-ir","theories-of-nationalism","ethnic-conflict"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism”"}],
    sources:[{t:"Mitzen, “Ontological Security in World Politics”, European Journal of International Relations 12(3), 2006 (DOI)", url:"https://doi.org/10.1177/1354066106067346"},{t:"Brubaker and Cooper, “Beyond ‘Identity’”, Theory and Society 29(1), 2000 (DOI)", url:"https://doi.org/10.1023/A:1007068714468"}],
    checked:"2026-11"},

   {id:"intersectionality-ir", title:"Intersectionality in international studies", aka:["Intersectional analysis"], tags:["international relations","identity","feminism","race"], summary:"Kimberlé Crenshaw’s idea (1989) that systems such as racism and sexism combine to produce specific harms, and how international bodies and scholars use it.",
    levels:{
     starter:[
      "Picture a crossroads. Traffic comes from two directions. If you are hit at the crossing, it makes little sense to ask which single road the car came from.",
      "That is the image the US legal scholar Kimberlé Crenshaw used in 1989 when she coined **intersectionality**. In one court case, Black women at a car company were told they had no case: the company hired Black people (mostly men) and women (mostly white). The court looked at race and at sex separately, so the women’s particular situation fell through the gap.",
      "Intersectionality asks how different systems of power, such as racism, sexism, class and immigration status, combine in people’s lives. It is now used far beyond US law, including at the UN.",
      {key:"Look at where the roads meet, not only at each road alone."}
     ],
     builder:[
      "**Origins.** Crenshaw, “Demarginalizing the Intersection of Race and Sex” (1989), used *DeGraffenreid v. General Motors* (1976). “Mapping the Margins” (1991) applied the idea to violence against women of colour, including immigrant women whose legal status depended on an abusive spouse. Earlier roots include the Combahee River Collective Statement (1977) on “interlocking” oppressions; Patricia Hill Collins (*Black Feminist Thought*, 1990) described a *matrix of domination*.",
      "**International uses.** The Durban Declaration (2001) recognised “multiple or aggravated forms of discrimination”; Crenshaw herself worked on including gender in the conference’s work. The CEDAW Committee’s General Recommendation No. 28 (2010) called intersectionality “a basic concept” for understanding states’ obligations.",
      "**In research.** Feminist IR ({{feminism-ir}}) uses it for migrant domestic workers, peacebuilding and conflict-related violence, where gender, ethnicity, class and status interact. The migration primer’s global care chain is one example."
     ],
     pro:[
      "**Critiques.** (1) *Dilution*: as the concept travels it may be detached from Black feminist thought and used as a synonym for diversity. (2) *Additive misuse*: listing identities rather than analysing how specific systems interact. (3) *Method*: which categories to include and how to measure interaction; quantitative scholars use interaction terms, qualitative scholars use life histories and comparison, and each loses something. (4) *Political*: some on the left argue it can obscure class; some conservatives call it divisive identity politics. Present these as debates, with the evidence each side gives.",
      "**Related ideas.** Strategic essentialism (Spivak, 1980s): presenting a group as unified for a political goal while knowing it is diverse. Standpoint theory: knowledge differs by social position.",
      "**In a thesis.** State which systems you analyse and why, show how they interact in your case (not just that they co-exist), and avoid treating any group as having one shared experience. Crenshaw herself stresses intersectionality as a tool for seeing structures, not a theory of identity alone."
     ]},
    related:["kimberle-crenshaw","identity-and-difference","feminism-ir","race-and-ir"],
    read:[{book:"eirt", where:"Chapter 8 “Feminism”"}],
    sources:[{t:"TED: Kimberlé Crenshaw, “The urgency of intersectionality” (TEDWomen 2016)", url:"https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality"},{t:"TED speaker page: Kimberlé Crenshaw", url:"https://www.ted.com/speakers/kimberle_crenshaw"}],
    checked:"2026-11"},

   {id:"kimberle-crenshaw", title:"Kimberlé Crenshaw", aka:["Kimberle Crenshaw"], tags:["thinker","law","race","feminism"], summary:"US legal scholar (born 1959) who coined “intersectionality” in 1989 and helped found critical race theory.",
    levels:{
     starter:[
      "Kimberlé Williams Crenshaw is a US law professor, born in 1959. In 1989 she gave a name to something many people had experienced but law did not see: **intersectionality**, the way racism and sexism (and other systems) can combine to harm people in specific ways.",
      "She used a simple picture, a traffic crossroads, and a real court case in which Black women were told they had no claim because the court looked at race and sex separately.",
      "She is also one of the founders of **critical race theory**, a body of legal scholarship on how law can reproduce racial inequality even when it is written in neutral language.",
      {key:"Crenshaw’s question: who falls through the gaps when we look at one kind of discrimination at a time?"}
     ],
     builder:[
      "**Key works.** “Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics” (*University of Chicago Legal Forum*, 1989); “Mapping the Margins: Intersectionality, Identity Politics, and Violence against Women of Color” (*Stanford Law Review*, 1991); co-editor of *Critical Race Theory: The Key Writings That Formed the Movement* (1995).",
      "**Organisations and campaigns.** She co-founded the African American Policy Forum (1996), a think tank, and led campaigns such as #SayHerName on police violence against Black women.",
      "**International work.** She worked with NGOs to bring gender into the 2001 UN World Conference against Racism in Durban, and served as rapporteur for an expert group on gender and race discrimination for that conference.",
      "**Her talk.** “The urgency of intersectionality” (TEDWomen, 2016) is a free, clear introduction in her own words."
     ],
     pro:[
      "**How IR uses her.** Feminist and postcolonial IR scholars apply intersectionality to migration regimes, peace operations and humanitarian policy. UN treaty bodies, especially the CEDAW Committee, use the concept in their guidance.",
      "**Debates.** Crenshaw has said intersectionality was meant as an analytic tool for seeing structural inequality, and has criticised both its dilution into a general word for diversity and its caricature in political debate. Critics question how to operationalise it, and some argue it underplays class. In the United States, critical race theory has also become the subject of political controversy since around 2020; describe positions and sources rather than taking sides.",
      "**Legacy.** Few legal concepts have travelled so far: the term is now used in sociology, public health, development, human rights law and IR, and in many languages."
     ]},
    related:["intersectionality-ir","race-and-ir"],
    sources:[{t:"TED speaker page: Kimberlé Crenshaw", url:"https://www.ted.com/speakers/kimberle_crenshaw"},{t:"TED: “The urgency of intersectionality” (2016)", url:"https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality"}],
    checked:"2026-11"},

   {id:"theories-of-nationalism", title:"Theories of nations and nationalism", aka:["Modernism and ethno-symbolism","Nationalism studies"], tags:["international relations","nationalism","identity"], summary:"The main answers to “when is a nation?”: primordialist and perennialist, modernist (Gellner, Anderson, Hobsbawm) and ethno-symbolist (Smith), plus banal nationalism.",
    levels:{
     starter:[
      "Most people feel their nation is very old. Yet most of today’s nation-states were created in the last two centuries. Scholars of nationalism try to explain this gap.",
      "Think of a national dish. It may feel timeless, but often its “classic” recipe was fixed quite recently, with ingredients that arrived from elsewhere, and was then taught as tradition. Nations can be like that: built from older materials, but in a modern shape.",
      "There are three families of theory. **Primordialists and perennialists** say nations are natural or very old. **Modernists** say nationalism created nations in the modern era, through industry, print and schools. **Ethno-symbolists** say modern nations grew from older ethnic communities with myths and memories.",
      {key:"The main debate is not whether nations are real, but when and how they were made."}
     ],
     builder:[
      "**Modernists.** Ernest Gellner (*Nations and Nationalism*, 1983): nationalism is the principle that the political and national unit should be congruent; industrial society needs a shared literate culture taught by the state. Benedict Anderson (*Imagined Communities*, 1983): the nation is “an imagined political community”, made thinkable by print-capitalism. Eric Hobsbawm and Terence Ranger (eds., *The Invention of Tradition*, 1983): many traditions are recent inventions that build loyalty.",
      "**Ethno-symbolism.** Anthony D. Smith (*The Ethnic Origins of Nations*, 1986): nations draw on older *ethnies*, with myths, memories, symbols and a homeland; nationalists cannot invent freely.",
      "**Perennialism.** Adrian Hastings (*The Construction of Nationhood*, 1997) argued that some nations, such as England, existed in the Middle Ages.",
      "**Everyday approaches.** Michael Billig (*Banal Nationalism*, 1995): nations are reproduced through unnoticed “flagging”. Jon Fox and Cynthia Miller-Idriss (2008): everyday nationhood in talk, choices, performances and consumption.",
      "**Types.** Hans Kohn’s civic/ethnic distinction (1944), now widely questioned; Anderson’s official nationalism; anti-colonial nationalism."
     ],
     pro:[
      "**Critiques of modernism.** Nationalism appeared in non-industrial settings (Latin America in the early 1800s, many anti-colonial movements); functionalist reasoning; neglect of emotion and of pre-modern solidarities. Partha Chatterjee (*The Nation and Its Fragments*, 1993) argued that anti-colonial nationalists first claimed an inner, spiritual domain of culture rather than copying European “modules”.",
      "**Critiques of ethno-symbolism.** It risks reading nations back into the past; it struggles with nations built with little ethnic core (many postcolonial states, immigrant societies).",
      "**The 1995 debate.** Gellner asked whether nations have “navels” and answered that some do and some do not, which matters little to how nationalism works; Smith held that the past constrains what nationalists can do.",
      "**Using the theories.** For a case study, specify which mechanism you are testing: state schooling and literacy (Gellner), print and media markets (Anderson), elite invention (Hobsbawm), resonance of older symbols (Smith), daily reproduction (Billig). Then look for evidence that would distinguish them, such as whether a symbol was new or revived, and who promoted it.",
      "**Beyond Europe.** Asia offers many tests: official nationalism in Meiji Japan and Siam, anti-colonial nationalism in India, Indonesia and Vietnam, and developmental and online nationalism today (see {{nationalism-in-asia}})."
     ]},
    related:["ernest-gellner","benedict-anderson","anthony-d-smith","eric-hobsbawm","nationalism-in-asia"],
    read:[{book:"ospol", where:"Chapter 3, section 3.4 “Nationalism, Communism, Fascism, and Authoritarianism”"}],
    sources:[{t:"Royal Anthropological Institute: Ernest Gellner obituary", url:"https://therai.org.uk//archives-and-manuscripts/obituaries/ernest-gellner"},{t:"ASEN: In memoriam Anthony Smith (1939–2016)", url:"https://asen.ac.uk/about-asen/press-statements/in-memoriam-anthony-smith-1939-2016/"}],
    checked:"2026-11"},

   {id:"ernest-gellner", title:"Ernest Gellner", tags:["thinker","nationalism","anthropology","philosophy"], summary:"Philosopher and social anthropologist (1925–1995) whose *Nations and Nationalism* (1983) became the classic modernist theory of nationalism.",
    levels:{
     starter:[
      "Ernest Gellner was born in Paris in 1925 and grew up in Prague. His family left for England in 1939, after the German occupation of Czechoslovakia. He became a philosopher and social anthropologist, and he died in Prague in 1995.",
      "His big idea about nationalism was simple and bold: nations did not create nationalism; **nationalism created nations**. Modern industrial societies need people who can read, move between jobs and talk to strangers in one shared language, so states built mass schools and standard languages. Nationalism is the demand that culture and state fit together.",
      {key:"Gellner: nationalism “is primarily a political principle, which holds that the political and the national unit should be congruent.”"}
     ],
     builder:[
      "**Key works.** *Words and Things* (1959), an attack on linguistic philosophy; *Thought and Change* (1964), where his theory of nationalism first appeared; *Saints of the Atlas* (1969) and *Muslim Society* (1981), from fieldwork in Morocco; *Nations and Nationalism* (1983); *Plough, Sword and Book* (1988); *Conditions of Liberty* (1994).",
      "**The theory.** Agrarian societies had a thin literate elite above many local cultures; industrial societies need a mobile, literate workforce and a shared “high culture” spread by state education. Where a population’s culture did not match the state, nationalism demanded new borders or assimilation.",
      "**How scholars use him today.** As the reference point for modernist theory, and for questions about language standardisation, schooling and the state, for example in newly independent states choosing national languages."
     ],
     pro:[
      "**Critiques.** Nationalism arose in places with little industry; the theory is functionalist, explaining needs rather than causes; it neglects emotion and the role of earlier ethnic ties (Smith’s critique); and it says little about violent or exclusionary nationalism’s variety.",
      "**The 1995 debate with Smith.** Gellner’s question, whether nations have “navels”, captures his view: some nations have real pre-modern roots, some invent them, and the difference does not change how nationalism works in the modern world.",
      "**Legacy.** Gellner’s theory remains one of the most cited in the field. Readers should note his wide range, from philosophy to the anthropology of Islam, and his robust liberal rationalism, which shaped how he wrote about relativism and religion."
     ]},
    related:["theories-of-nationalism","benedict-anderson","anthony-d-smith"],
    sources:[{t:"Royal Anthropological Institute: Ernest Gellner obituary", url:"https://therai.org.uk//archives-and-manuscripts/obituaries/ernest-gellner"}],
    checked:"2026-11"},

   {id:"benedict-anderson", title:"Benedict Anderson", aka:["Benedict R. O’G. Anderson"], tags:["thinker","nationalism","Southeast Asia"], summary:"Scholar of Indonesia and Southeast Asia (1936–2015) whose *Imagined Communities* (1983) redefined how the world studies nationalism.",
    levels:{
     starter:[
      "Benedict Anderson was born in Kunming, China, in 1936, to an Irish father and an English mother, and grew up partly in Ireland and the United States. He became a specialist on Indonesia and Southeast Asia, and died in Indonesia in December 2015.",
      "His most famous book, *Imagined Communities* (1983), asked why people feel such loyalty to nations, enough to die for them. His answer: a nation is a community people **imagine**, because they will never meet most of its members. Newspapers and novels, sold in local languages, let strangers picture themselves as one people moving through time together.",
      {key:"Anderson: the nation is “an imagined political community – and imagined as both inherently limited and sovereign.”"}
     ],
     builder:[
      "**Key concepts.** *Print-capitalism*: the market for printed books and newspapers in vernacular languages created reading publics. *Creole pioneers*: he argued the first nationalisms were in the Americas, among colonial-born elites. *Official nationalism* (a term from Hugh Seton-Watson): dynasties adopting nationalism from above, as in tsarist Russia, Siam and Meiji Japan. The 1991 edition added two chapters, including “Census, Map, Museum”, on how colonial states in Southeast Asia classified peoples and shaped later nations.",
      "**Other works.** *Java in a Time of Revolution* (1972); *The Spectre of Comparisons* (1998); *Under Three Flags* (2005), on anarchism and anti-colonialism in the Philippines; and a memoir, *A Life Beyond Boundaries* (2016).",
      "**Indonesia.** After co-writing an early analysis that challenged the official account of the 1965 coup attempt, he was barred from Indonesia until 1998."
     ],
     pro:[
      "**Critiques.** Partha Chatterjee’s “Whose Imagined Community?” (1993) argued that Anderson left colonised nationalists only “modular” forms to copy, missing the inner cultural domain they claimed first. Others note that imagined communities need not be national (religious and class communities are imagined too), and that print matters less where literacy was low and oral or visual media dominated.",
      "**Why it lasts.** The book’s comparative range (the Americas, Europe, Southeast Asia, Japan) and its attention to media make it easy to apply to radio, television and the internet, though Anderson himself was cautious about such extensions.",
      "**Using him well.** Quote the full definition, not only “imagined”; and remember that imagined does not mean false: Anderson took seriously that people sacrifice for nations."
     ]},
    related:["theories-of-nationalism","ernest-gellner","nationalism-in-asia"],
    sources:[{t:"Jacobin: “Benedict Anderson (1936–2015)”", url:"https://jacobin.com/2015/12/benedict-anderson-obituary-imagined-communities-nationalism-indonesia"}],
    checked:"2026-11"},

   {id:"anthony-d-smith", title:"Anthony D. Smith", tags:["thinker","nationalism","ethnicity"], summary:"Historical sociologist (1939–2016) who founded the ethno-symbolist approach: modern nations are built on older ethnic communities.",
    levels:{
     starter:[
      "Anthony D. Smith (1939–2016) was a British historical sociologist and one of the founders of nationalism studies as a field. He studied under Ernest Gellner and became his most famous critic.",
      "Gellner said nationalism created nations in modern times. Smith agreed nations are modern in form, but argued they rarely come from nothing. Most grow out of older **ethnic communities** (he used the French word *ethnie*) with shared myths of ancestry, memories, symbols and a homeland. Nationalists choose and reinterpret this inheritance; they cannot just invent whatever they like.",
      {key:"Smith: to understand a nation, look for the myths, memories and symbols it draws on."}
     ],
     builder:[
      "**Key works.** *Theories of Nationalism* (1971); *The Ethnic Revival* (1981); *The Ethnic Origins of Nations* (1986); *National Identity* (1991); *Nationalism and Modernism* (1998), a survey of the debate; *Chosen Peoples* (2003), on religious ideas in nationalism; *The Cultural Foundations of Nations* (2008).",
      "**Institutions.** He was a founder and president of the Association for the Study of Ethnicity and Nationalism (ASEN) and the founding editor of its journal *Nations and Nationalism* (1995).",
      "**Concepts.** *Ethnie*; ethno-symbolism; the role of “golden ages”, sacred territories and chosen-people myths; the distinction between “lateral” aristocratic and “vertical” popular ethnic communities."
     ],
     pro:[
      "**Critiques.** Modernists reply that he reads the nation back into the past, and that many nations, including immigrant and postcolonial ones, have weak ethnic cores. Others argue ethno-symbolism describes resonance well but explains less about why nationalism succeeds at a particular moment.",
      "**Strength in seminars.** Smith is useful wherever a nationalist movement revives old symbols: a medieval kingdom, a sacred site, an ancient script. Ask, with him, why those symbols resonated; and ask, with the modernists, who revived them and why then.",
      "**Legacy.** Through ASEN and its journal, Smith helped create a cross-disciplinary field. His *Nationalism and Modernism* remains a standard guide to the whole debate."
     ]},
    related:["theories-of-nationalism","ernest-gellner","benedict-anderson"],
    sources:[{t:"ASEN: In memoriam Anthony Smith (1939–2016)", url:"https://asen.ac.uk/about-asen/press-statements/in-memoriam-anthony-smith-1939-2016/"}],
    checked:"2026-11"},

   {id:"nationalism-in-asia", title:"Nationalism in Asia", tags:["international relations","nationalism","Asia"], summary:"Anti-colonial, official, developmental and online nationalism in Asia, and how scholars study them without national-character stereotypes.",
    levels:{
     starter:[
      "Asia offers some of the richest cases for theories of nationalism. Young nationalists in the Dutch East Indies pledged in 1928 to one homeland and one nation, and to uphold a language of unity, Indonesian. Indian nationalists organised boycotts of British goods. Vietnam declared independence in 1945.",
      "Nationalism in Asia has also been used to build economies, to support governments and, sometimes, to fuel quarrels between neighbours, increasingly online.",
      "Scholars study these cases to test the big theories and to show that nationalism is not one thing: it can liberate, unite, develop, exclude or provoke, depending on who uses it and how.",
      {key:"Ask what a nationalism is for, and who is mobilising it."}
     ],
     builder:[
      "**Anti-colonial.** The Indian National Congress (1885) and the Swadeshi movement after the 1905 partition of Bengal; Indonesia’s Youth Pledge (1928) and independence (1945); Ho Chi Minh’s declaration of 2 September 1945. Partha Chatterjee (1993) argued such movements first claimed an inner cultural domain.",
      "**Official.** Anderson’s examples include Meiji Japan and Siam, where monarchies adopted national symbols and schooling from above.",
      "**Developmental.** *Fukoku kyōhei* (“rich country, strong army”) in Meiji Japan; Richard Samuels (*Rich Nation, Strong Army*, 1994) on technonationalism; South Korea’s export drive framed as national mission; links to the developmental state (Unit 1).",
      "**Online and popular.** Jessica Chen Weiss (*Powerful Patriots*, 2014) studied anti-foreign protests in China between 1985 and 2012, arguing that the government’s decision to tolerate or restrain them can signal resolve or flexibility to other states."
     ],
     pro:[
      "**Methods and cautions.** Online nationalism is easy to see and hard to measure: loud posts may not reflect majority views, and platforms, bots and state campaigns shape what is visible. Good studies compare surveys, protest data and content analysis, and avoid claiming that a whole people is “nationalistic”.",
      "**Memory and history education.** Disputes over wartime history and textbooks are an important part of nationalism between neighbours in Northeast Asia; Unit 4 treats Japan’s relations with its neighbours neutrally, and later units go deeper.",
      "**Comparisons.** Asian cases sit well beside others: Latin America’s creole nationalisms, African anti-colonial movements and pan-Africanism, Arab nationalism, and European banal nationalism. A good seminar paper compares mechanisms, not national characters.",
      "**Neutrality.** Present each government’s and each movement’s stated aims, the evidence for their effects, and scholars’ disagreements, without endorsing any side in current disputes."
     ]},
    related:["theories-of-nationalism","benedict-anderson","decolonization","japan-and-neighbours"],
    sources:[{t:"Jessica Chen Weiss: Powerful Patriots (book page)", url:"https://www.jessicachenweiss.com/powerful-patriots.html"},{t:"Jacobin: “Benedict Anderson (1936–2015)”", url:"https://jacobin.com/2015/12/benedict-anderson-obituary-imagined-communities-nationalism-indonesia"}],
    checked:"2026-11"},

   {id:"race-and-ir", title:"Race and international relations", aka:["Race in IR","The global colour line"], tags:["international relations","race","postcolonialism"], summary:"How racial hierarchy shaped the international order and the study of IR, and the debate about how central race is.",
    levels:{
     starter:[
      "In 1900 W. E. B. Du Bois told a Pan-African Conference in London that “the problem of the twentieth century is the problem of the color line”. He meant a line running across the whole world, between empires and the peoples they ruled.",
      "Race is a social construction: categories made by societies, not biological boxes. But ideas of race shaped who could vote, migrate, rule or be ruled, and so they shaped international politics.",
      "Today scholars ask how race helped build the international order, how the order later outlawed racial discrimination, and how much race still matters.",
      {key:"Race helped make the international order; the order later condemned racism. Both are part of the story."}
     ],
     builder:[
      "**History.** Scientific racism and the “standard of civilisation” justified empire around 1900. Settler states coordinated immigration restrictions (Lake and Reynolds, *Drawing the Global Colour Line*, 2008). The 1919 Racial Equality Proposal was blocked; the League’s mandate system ranked peoples as “not yet able to stand by themselves”.",
      "**The discipline.** Robert Vitalis (*White World Order, Black Power Politics*, 2015) showed that early US IR studied “race development”. Alexander Anievas, Nivi Manchanda and Robbie Shilliam (eds., *Race and Racism in International Relations*, 2015) argued race is central to the discipline’s origins yet given little explanatory weight.",
      "**Beyond the West.** Frank Dikötter (1992) on race ideas in modern China; Shogo Suzuki (2009) on Japan learning that empire marked civilised status; Ayşe Zarakol (2011) on stigma among states ranked low.",
      "**Review.** Bianca Freeman, D. G. Kim and David Lake (2022) surveyed research on race and hierarchy, international law and foreign policy, under the title “Beyond the ‘Norm Against Noticing’”."
     ],
     pro:[
      "**Three positions.** Race as constitutive of the order; race as one hierarchy among several (with class, status, religion, civilisation); race as a measurable variable (for example racial attitudes in foreign-policy opinion). Each implies different evidence.",
      "**Critiques and replies.** Some argue that geopolitics, capitalism or state power explain more, and that “race” can be stretched; defenders reply that the field’s long silence is itself evidence of a blind spot. Precision helps: say whether you mean racial ideas, racialised institutions, or racial identities of actors.",
      "**Methods.** Archival work on immigration and colonial policy; discourse analysis of official texts; survey experiments; historical sociology. Use the categories actors themselves used, and current respectful terms in your own writing.",
      "**Links.** {{postcolonialism-ir}}, {{w-e-b-du-bois}}, and the UN anti-racism regime ({{icerd-and-anti-racism}})."
     ]},
    related:["icerd-and-anti-racism","postcolonialism-ir","w-e-b-du-bois","intersectionality-ir"],
    read:[{book:"eirt", where:"Chapter 9 “Postcolonialism”"}],
    sources:[{t:"Routledge: Race and Racism in International Relations (Anievas, Manchanda and Shilliam, eds.)", url:"https://www.routledge.com/Race-and-Racism-in-International-Relations-Confronting-the-Global-Colour-Line/Anievas-Manchanda-Shilliam/p/book/9780415724357"},{t:"BlackPast: W. E. B. Du Bois, “To the Nations of the World” (1900)", url:"https://new.blackpast.org/?p=62533"}],
    checked:"2026-11"},

   {id:"icerd-and-anti-racism", title:"ICERD and the UN anti-racism regime", aka:["CERD","International Convention on the Elimination of All Forms of Racial Discrimination"], tags:["international relations","human rights","race","international law"], summary:"The 1965 convention against racial discrimination, its expert committee, and the Durban process and Decades that followed.",
    levels:{
     starter:[
      "After the Second World War, states began to treat racial discrimination as an international problem, not just a domestic one. The UN Charter (1945) said human rights belong to all “without distinction as to race, sex, language, or religion”.",
      "In 1965 the UN General Assembly adopted the **International Convention on the Elimination of All Forms of Racial Discrimination** (ICERD). It came into force in 1969 and more than 180 states have joined it. States promise to outlaw racial discrimination and report on what they do.",
      "A committee of 18 independent experts, **CERD**, reviews those reports and tells each government what it should improve.",
      {key:"ICERD was the first of the UN’s core human rights treaties."}
     ],
     builder:[
      "**Drafting.** The General Assembly asked for a convention in 1963; its Third Committee worked through the text article by article in late 1965, and the Assembly adopted it on 21 December 1965 (resolution 2106 (XX)). It entered into force on 4 January 1969.",
      "**Content.** Article 1 defines racial discrimination by “race, colour, descent, or national or ethnic origin”, in purpose or effect; Article 2 sets state obligations; Article 4 requires outlawing incitement (several states made reservations on free-speech grounds); Article 5 lists rights to be enjoyed equally.",
      "**CERD.** Reviews periodic reports in dialogue with government delegations, using NGO information too, and adopts concluding observations; issues general recommendations; runs early-warning and urgent-action procedures; and hears individual complaints from states that accept Article 14.",
      "**Related.** International Day for the Elimination of Racial Discrimination (21 March, after Sharpeville 1960); Apartheid Convention (1973); apartheid as a crime against humanity in the Rome Statute (1998)."
     ],
     pro:[
      "**Durban.** The 2001 World Conference against Racism, Racial Discrimination, Xenophobia and Related Intolerance adopted the Durban Declaration and Programme of Action. It was divided: the United States and Israel withdrew their delegations over draft Middle East language, and reparations for slavery and colonialism were disputed. A 2009 Review Conference in Geneva was also boycotted by several states.",
      "**Scope disputes.** CERD’s General Recommendation No. 29 (2002) covers discrimination based on descent, including caste; India and some other states argue caste is outside the Convention. Present both positions.",
      "**People of African descent.** International Decade 2015–2024; a second Decade, 1 January 2025 to 31 December 2034, proclaimed by resolution 79/193 of 17 December 2024 under the theme “People of African descent: recognition, justice and development”; a Permanent Forum on People of African Descent.",
      "**Assessments.** Supporters credit the regime with norms that delegitimised apartheid and colonial racism; critics point to weak enforcement, late or missing reports, and politicisation. Check the treaty status page for the current number of parties."
     ]},
    related:["race-and-ir","human-rights-regime","minority-and-indigenous-rights"],
    sources:[{t:"UN General Assembly, Third Committee report on the draft Convention, A/6181 (13 December 1965)", url:"https://digitallibrary.un.org/record/712630/files/A_6181-EN.pdf"},{t:"UN General Assembly resolution 79/193: Second International Decade for People of African Descent", url:"https://digitallibrary.un.org/record/4070482/files/A_RES_79_193-EN.pdf"}],
    checked:"2026-11"},

   {id:"ethnic-conflict", title:"Ethnicity and conflict", aka:["Ethnic conflict","Theories of ethnicity"], tags:["international relations","ethnicity","conflict"], summary:"Primordialist, instrumentalist and constructivist accounts of ethnicity, what the evidence says about diversity and war, and how power-sharing tries to manage conflict.",
    levels:{
     starter:[
      "News reports often call wars “ethnic”, as if differences of language or ancestry were enough to cause fighting. But most countries contain many ethnic groups, and most of them live in peace most of the time.",
      "Researchers therefore ask a sharper question: **what turns difference into violence?** Their answers point to things people do and decide: excluding groups from power, large gaps in wealth between groups, politicians competing to look toughest, and states too weak to protect everyone.",
      "Picture a shared apartment where the landlord disappears. Nobody knows who will pay the bills or guard the door, so each person starts locking their own room and eyeing the others. Fear, not old dislike, can drive the spiral.",
      {key:"Difference is common; violence is not. Look for the mechanisms in between."}
     ],
     builder:[
      "**Three approaches.** *Primordialism* (Edward Shils, 1957; Clifford Geertz, 1963): ethnic ties are felt as given. *Instrumentalism*: elites and groups mobilise ethnicity for power and resources. *Constructivism* (Fredrik Barth, 1969; Rogers Brubaker, 2004): boundaries and categories are made and maintained.",
      "**Evidence.** James Fearon and David Laitin (2003): diversity did not predict civil war onset in 1945–1999 once income was controlled; poverty, weak states, rough terrain and large populations did. Lars-Erik Cederman, Andreas Wimmer and Brian Min (2010), using the Ethnic Power Relations data for 1946–2005: groups excluded from state power, especially after recently losing it, are more likely to fight the government. Frances Stewart (2008): horizontal inequalities raise risk. Ashutosh Varshney (2002): inter-communal civic associations reduced riot violence in Indian cities.",
      "**Mechanisms.** Barry Posen (1993): the ethnic security dilemma in collapsing states. Alvin Rabushka and Kenneth Shepsle (1972): ethnic outbidding."
     ],
     pro:[
      "**Managing diversity.** Arend Lijphart’s consociationalism (1977): grand coalition, mutual veto, proportionality, segmental autonomy (Belgium, Switzerland, Lebanon, Northern Ireland’s 1998 agreement). Donald Horowitz (1985): centripetal incentives that reward cross-group vote-seeking. Federalism along linguistic or regional lines (India, 1956). Each risks something: consociationalism may freeze identities; centripetalism may fail where groups are concentrated.",
      "**Cases often taught.** Yugoslavia (security dilemma), Sri Lanka (outbidding and language policy from 1956), Rwanda (colonial categories, propaganda and organised genocide in 1994), Indian cities (civic ties).",
      "**Data cautions.** Coding “ethnic groups” requires decisions about which identities are politically relevant, and those decisions can shape results. Conflict datasets (see {{ir-datasets}}) record events, not meanings. Combine large-N findings with case knowledge, and avoid explanations that treat any group as inherently violent."
     ]},
    related:["identity-and-difference","minority-and-indigenous-rights","security-dilemma","war-and-conflict"],
    read:[{book:"soc", where:"Chapter 11, Section 11.4 “Intergroup Relationships”"}],
    sources:[{t:"Cederman, Wimmer and Min, “Why Do Ethnic Groups Rebel? New Data and Analysis”, World Politics 62(1), 2010 (DOI)", url:"https://doi.org/10.1017/S0043887109990219"}],
    checked:"2026-11"},

   {id:"minority-and-indigenous-rights", title:"Minority and indigenous rights", aka:["UNDRIP","Minority rights"], tags:["international relations","human rights","indigenous peoples","language"], summary:"How international law protects minorities (ICCPR Article 27, the 1992 Declaration) and indigenous peoples (ILO 169, UNDRIP 2007), and why language is so often contested.",
    levels:{
     starter:[
      "Most countries contain groups with their own language, religion or culture. International law protects their members’ right to keep that identity: to speak their language, practise their faith and enjoy their culture together.",
      "Indigenous peoples, descended from the societies that lived in a territory before colonisation or settlement, have a separate set of rights, centred on their lands, cultures and self-government. In 2007 the UN adopted a Declaration on the Rights of Indigenous Peoples (UNDRIP).",
      "Language is often where these questions become most concrete: which languages are used in school, in court and on official forms decides who can take part easily and who cannot.",
      {key:"Minority rights protect identity and participation; indigenous rights add land, consent and self-determination."}
     ],
     builder:[
      "**Minorities.** The League of Nations oversaw minority treaties after 1919. ICCPR Article 27 (1966) protects persons belonging to ethnic, religious or linguistic minorities. The UN Minorities Declaration was adopted by General Assembly resolution 47/135 on 18 December 1992. In Europe: the Framework Convention for the Protection of National Minorities (1995; in force 1998) and the OSCE High Commissioner on National Minorities (1992). No agreed definition of “minority” exists.",
      "**Indigenous peoples.** ILO Convention No. 169 (1989). The UN Permanent Forum on Indigenous Issues (established 2000). UNDRIP, adopted 13 September 2007 by 144 votes to 4, with 11 abstentions; the four against (Australia, Canada, New Zealand, the United States) later endorsed it. It affirms self-determination (Article 3) and free, prior and informed consent in several articles.",
      "**Japan.** A unanimous Diet resolution (6 June 2008) urged recognition of the Ainu as an indigenous people; the 2019 Ainu Policy Promotion Act, in force on 24 May 2019, was the first law to do so."
     ],
     pro:[
      "**Language politics.** The Dhaka language movement (21 February 1952), now marked as International Mother Language Day (proclaimed by UNESCO in 1999); Sri Lanka’s Official Language Act (1956), with Tamil made official in 1987; India’s linguistic states (1956); Swahili in Tanzania; the Māori Language Act 1987; Ngũgĩ wa Thiong’o’s *Decolonising the Mind* (1986); the UN International Decade of Indigenous Languages (2022–2032).",
      "**Debates.** Group rights versus individual rights (liberal theorists such as Will Kymlicka defend some group-differentiated rights; critics worry about pressure on individuals inside groups). Self-determination for indigenous peoples is usually understood as internal (autonomy, consent) rather than secession, but states and indigenous organisations interpret it differently. FPIC is contested in practice: is it a right to be consulted or a right to say no?",
      "**Research.** Indigenous scholars stress research ethics and data sovereignty (see [[indigenous-data-sovereignty]]); work with communities, not only about them."
     ]},
    related:["ethnic-conflict","icerd-and-anti-racism","human-rights-regime"],
    read:[{book:"eirt", where:"Chapter 18 “Indigenous Perspectives”"}],
    sources:[{t:"UN General Assembly resolution 47/135 (1992): Minorities Declaration", url:"https://un-documents.net/a47r135.htm"},{t:"UN DESA: Adoption of the UN Declaration on the Rights of Indigenous Peoples, 13 years later", url:"https://www.un.org/development/desa/indigenouspeoples/news/2020/09/undrip13/"},{t:"Foreign Press Center Japan: Overview of the Ainu Policy Promotion Act of 2019", url:"https://fpcj.jp/wp/wp-content/uploads/2019/11/b8102b519c7b7c4a4e129763f23ed690.pdf"}],
    checked:"2026-11"},

   {id:"religion-in-world-politics", title:"Religion in world politics", aka:["Return of religion","Secularism in IR"], tags:["international relations","religion","secularism"], summary:"Secularisation and its critics, the “return of religion” in IR, models of secularism, and religion as actor and soft power.",
    levels:{
     starter:[
      "Many 20th-century thinkers expected religion to fade as countries grew richer and more modern. It has faded in some places and grown in others. About three-quarters of the world’s people still had a religious affiliation in 2020, according to a large 2025 study by the Pew Research Center.",
      "IR long treated religion as a private matter, outside foreign policy. Events such as Iran’s 1979 revolution, the role of churches in the end of communism in Poland, and the attacks of 11 September 2001 persuaded many scholars to look again.",
      "Religion enters world politics through identities, through organisations that cross borders, through ideas about war, peace and rights, and through governments that use religion to win friends abroad.",
      {key:"Religion has not simply disappeared or returned; it is changing differently in different places."}
     ],
     builder:[
      "**Data.** Pew (2025), 2010–2020: Christians about 30.6% → 28.8%; Muslims about 23.8% → 25.6%; unaffiliated 23.3% → 24.2%; Hindus steady near 14.9%; Buddhists fell in number (to about 324 million). Disaffiliation, mostly from Christianity, drove the rise of the unaffiliated; Muslim growth came mainly from a young age structure and high fertility.",
      "**Debating secularisation.** Casanova (1994), deprivatisation; Norris and Inglehart (2004), existential security; Eisenstadt (2000), multiple modernities; Berger’s reversal (1999); Habermas’s post-secular society (for example 2008).",
      "**IR’s turn.** Petito and Hatzopoulos (2003), *The Return from Exile*; Fox and Sandler (2004); Thomas (2005); Toft, Philpott and Shah, *God’s Century* (2011).",
      "**Secularisms.** French *laïcité* (1905); US separation with free exercise; India’s principled distance (Bhargava); Turkey’s Diyanet (1924); Indonesia’s Pancasila."
     ],
     pro:[
      "**Critiques of the frame.** Hurd (2008): secularism is a political settlement, not a neutral baseline. Asad (2003): “religion” and “the secular” are modern categories. Cavanaugh (2009): the idea that religion is uniquely violent does not survive comparison with secular ideologies and nationalism.",
      "**Actors.** The Holy See (UN observer since 1964), the Organisation of Islamic Cooperation (1969; 57 members), faith-based NGOs, mediators such as Sant’Egidio (Mozambique, 1992).",
      "**Soft power.** States train clergy abroad, fund religious institutions, host forums and promote heritage (India’s International Day of Yoga, from 2014; China’s World Buddhist Forums, from 2006; Gulf, Iranian, Turkish and Moroccan outreach). Mandaville and Hamid (2018) study religion as statecraft. Hurd (2015) warns that promoting “religious freedom” can mean governments defining acceptable religion for others.",
      "**Using data well.** Affiliation counts say little about belief intensity, practice or political views; compare surveys, and note how categories differ across countries."
     ]},
    related:["secularization","clash-of-civilizations-debate","joseph-nye"],
    read:[{book:"eir", where:"Chapter 9 “Religion and Culture”"}],
    sources:[{t:"Pew Research Center: How the Global Religious Landscape Changed From 2010 to 2020 (2025)", url:"https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/"},{t:"LibreTexts mirror of E-IR International Relations, Chapter 9 “Religion and Culture”", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/International_Sociology/Book%3A_International_Relations_(McGlinchey)/09%3A_Religion_and_Culture/9.05%3A_Conclusion"}],
    checked:"2026-11"},

   {id:"clash-of-civilizations-debate", title:"The clash of civilizations debate", aka:["Huntington’s thesis"], tags:["international relations","religion","culture","post-Cold War"], summary:"Huntington’s thesis (1993/1996) in full, the conceptual critiques (Said, Sen) and the empirical tests, plus the UN’s “dialogue” responses.",
    levels:{
     starter:[
      "In 1993 the political scientist Samuel Huntington predicted that, after the Cold War, the biggest conflicts would no longer be between ideologies but between **civilisations**: large cultural groupings defined mostly by religion, such as the Western, Islamic, Sinic (Chinese) and Hindu civilisations.",
      "The idea became famous, especially after 11 September 2001. It was also heavily criticised. Critics said civilisations are not solid blocks: they are internally diverse and borrow from each other. Researchers also tested whether states from different civilisations really fight each other more, and mostly found that they do not.",
      "The debate is a good training ground for any big claim in IR: define the terms, then test them.",
      {key:"Know what Huntington actually argued before criticising it, and know what the tests actually tested."}
     ],
     builder:[
      "**The argument.** “The Clash of Civilizations?” (*Foreign Affairs*, 1993) listed Western, Confucian, Japanese, Islamic, Hindu, Slavic-Orthodox, Latin American and “possibly” African civilisations; the 1996 book renamed Confucian as Sinic. Key ideas: fault-line conflicts between neighbouring groups of different civilisations; kin-country rallying; core states; torn countries (Turkey, Mexico, Russia); “the West versus the Rest”. Policy advice: Western unity and restraint, since Western universalism is “false”, “immoral” and “dangerous”.",
      "**Critiques.** Edward Said, “The Clash of Ignorance” (*The Nation*, 2001): civilisations are not monoliths. Amartya Sen, *Identity and Violence* (2006): civilisational classification reduces people to one identity.",
      "**Tests.** Russett, Oneal and Cox (2000); Henderson and Tucker (2001); Chiozza (2002): pairs of states from different civilisations were not consistently more conflict-prone once realist and liberal factors were considered. Norris and Inglehart (2002): Muslim-majority and Western publics differed little on support for democracy, more on gender equality and sexual liberalisation."
     ],
     pro:[
      "**What the tests leave open.** Most tests looked at interstate disputes; Huntington also wrote about conflicts inside states and between communities. Defenders argue he predicted rising salience of cultural identity, not that every war would be civilisational, and point to leaders’ use of civilisational language. Critics answer that this makes the thesis hard to falsify.",
      "**Responses.** The UN Year of Dialogue among Civilizations (2001), proposed by Iran’s President Khatami; the UN Alliance of Civilizations, proposed by Spain’s prime minister in 2004, co-sponsored by Turkey and launched by Secretary-General Kofi Annan on 14 July 2005. Some critics note that “dialogue” still treats civilisations as units.",
      "**In a seminar.** Separate three questions: is “civilisation” a coherent unit? Did civilisational conflict increase after 1990? Does civilisational rhetoric itself shape policy? The evidence differs for each.",
      "**Links.** {{samuel-huntington}}, {{post-cold-war-order}} (Unit 1), {{religion-in-world-politics}}."
     ]},
    related:["samuel-huntington","religion-in-world-politics","post-cold-war-order","identity-and-difference"],
    read:[{book:"eir", where:"Chapter 9 “Religion and Culture”"}],
    sources:[{t:"UN Alliance of Civilizations: History", url:"https://unaoc.org/who-we-are/history"},{t:"LibreTexts mirror of E-IR International Relations, Chapter 9 “Religion and Culture”", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/International_Sociology/Book%3A_International_Relations_(McGlinchey)/09%3A_Religion_and_Culture/9.05%3A_Conclusion"}],
    checked:"2026-11"},

   {id:"samuel-huntington", title:"Samuel P. Huntington", aka:["Samuel Huntington"], tags:["thinker","political science","international relations"], summary:"US political scientist (1927–2008), author of *The Clash of Civilizations* and of influential works on civil–military relations, political order and democratisation.",
    levels:{
     starter:[
      "Samuel P. Huntington (1927–2008) was one of the most influential US political scientists of the late 20th century. He is best known worldwide for “The Clash of Civilizations?” (1993), which predicted that culture and religion would shape the main conflicts after the Cold War.",
      "But his career was much broader. He wrote about how armies should relate to civilian governments, why newly independent states often became unstable, and why many countries became democracies from the 1970s onwards.",
      "Many readers know only one slogan from him. Reading his arguments in full makes for much better seminar discussion, whether you agree or not.",
      {key:"Huntington’s recurring theme: order and identity, and what happens when they break down."}
     ],
     builder:[
      "**Key works.** *The Soldier and the State* (1957), on civil–military relations; *Political Order in Changing Societies* (1968), arguing that rapid social mobilisation without strong institutions brings instability; *The Third Wave* (1991), on democratisation since 1974; “The Clash of Civilizations?” (*Foreign Affairs*, 1993) and *The Clash of Civilizations and the Remaking of World Order* (1996); *Who Are We?* (2004), on US national identity.",
      "**The clash thesis in brief.** Civilisations defined largely by religion; fault-line and kin-country conflicts; torn countries; advice for Western restraint rather than universalism.",
      "**He also worked in government**, including on the US National Security Council staff in the late 1970s."
     ],
     pro:[
      "**Critiques.** Of the clash thesis: essentialising civilisations (Said), reducing identity (Sen), weak empirical support at the interstate level (Russett, Oneal and Cox; Henderson and Tucker; Chiozza). Of *Who Are We?*: critics argued it portrayed Hispanic immigration to the US as a threat to national identity; defenders saw it as a study of assimilation. Describe both readings.",
      "**Strengths often acknowledged.** *Political Order* remains a classic on institutions and development; *The Third Wave* shaped democratisation studies; even critics credit the clash thesis with pushing culture and religion back into IR debate.",
      "**Reading him.** Distinguish the 1993 article (a question mark in the title) from the 1996 book, which is longer and more qualified. Quote his definitions before testing them."
     ]},
    related:["clash-of-civilizations-debate","post-cold-war-order"],
    sources:[{t:"Foreign Policy Blogs: In memory of Samuel Huntington (2009)", url:"https://foreignpolicyblogs.com/2009/01/08/in-memory-of-samuel-huntington/"},{t:"UN Alliance of Civilizations: History", url:"https://unaoc.org/who-we-are/history"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"essentialism", term:"Essentialism", def:"The view that a group has a fixed inner nature shared by all its members. Most social scientists reject it for nations, races and ethnic groups.", codex:"identity-and-difference"},
   {id:"strategic-essentialism", term:"Strategic essentialism", def:"Presenting a group as united for a political goal while knowing it is internally diverse; associated with Gayatri Chakravorty Spivak in the 1980s.", codex:"intersectionality-ir"},
   {id:"self-other", term:"Self/Other", def:"The idea that a group or state defines who it is by contrast with an “Other”, which is partly found and partly invented.", codex:"identity-and-difference"},
   {id:"ontological-security", term:"Ontological security", def:"Security of the self: a stable sense of identity and predictable routines. Jennifer Mitzen (2006) argued states may cling even to rivalries to keep it.", codex:"identity-and-difference"},
   {id:"politics-of-recognition", term:"Politics of recognition", def:"Struggles by groups or states to have their identity or status acknowledged as equal and worthy; from Charles Taylor’s 1992 essay.", codex:"identity-and-difference"},
   {id:"social-identity-theory", term:"Social identity theory", def:"Henri Tajfel and John Turner’s theory (1979) that people gain self-esteem from group membership and so favour their own group.", codex:"identity-and-difference"},
   {id:"matrix-of-domination", term:"Matrix of domination", def:"Patricia Hill Collins’s term (1990) for the way race, class, gender and sexuality are organised together as interlocking systems of power.", codex:"intersectionality-ir"},
   {id:"modernism-nationalism", term:"Modernism (nationalism studies)", def:"The view that nations are products of modernity (industry, print, mass schooling, the modern state) and that nationalism creates nations.", codex:"theories-of-nationalism"},
   {id:"perennialism", term:"Perennialism", def:"The view that nations, or something close to them, are very old and recur through history, though not necessarily natural.", codex:"theories-of-nationalism"},
   {id:"ethno-symbolism", term:"Ethno-symbolism", def:"Anthony D. Smith’s approach: modern nations are built on older ethnic communities, their myths, memories and symbols.", codex:"anthony-d-smith"},
   {id:"ethnie", term:"Ethnie", def:"Smith’s term for a named community with myths of common ancestry, shared memories, links to a homeland and some solidarity.", codex:"anthony-d-smith"},
   {id:"imagined-community", term:"Imagined community", def:"Benedict Anderson’s definition of the nation (1983): a political community imagined as limited and sovereign, because members never meet most others.", codex:"benedict-anderson"},
   {id:"print-capitalism", term:"Print-capitalism", def:"Anderson’s term for the market in printed books and newspapers in vernacular languages, which created reading publics that could imagine a nation.", codex:"benedict-anderson"},
   {id:"invented-tradition", term:"Invented tradition", def:"A practice that claims continuity with the past but was largely created recently to build loyalty; from Hobsbawm and Ranger (eds., 1983).", codex:"theories-of-nationalism"},
   {id:"banal-nationalism", term:"Banal nationalism", def:"Michael Billig’s term (1995) for the everyday, unnoticed reminders of the nation, such as flags, coins, weather maps and the national “we” in the news.", codex:"theories-of-nationalism"},
   {id:"civic-nationalism", term:"Civic nationalism", def:"Nationalism in which membership rests on citizenship, shared institutions and political values; one end of a contested spectrum.", codex:"theories-of-nationalism"},
   {id:"ethnic-nationalism", term:"Ethnic nationalism", def:"Nationalism in which membership rests on ancestry, language or religion; the other end of the contested civic–ethnic spectrum.", codex:"theories-of-nationalism"},
   {id:"official-nationalism", term:"Official nationalism", def:"Nationalism adopted from above by ruling dynasties or states to secure their power, as Anderson described for tsarist Russia, Siam and Meiji Japan.", codex:"benedict-anderson"},
   {id:"anti-colonial-nationalism", term:"Anti-colonial nationalism", def:"Nationalism that claims self-rule for a colonised people against an empire, as in India, Indonesia, Vietnam and much of Africa.", codex:"nationalism-in-asia"},
   {id:"online-nationalism", term:"Online nationalism", def:"Nationalist content and campaigns produced and spread on the internet and social media, by citizens, groups or states.", codex:"nationalism-in-asia"},
   {id:"everyday-nationalism", term:"Everyday nationalism", def:"How ordinary people talk about, choose, perform and consume the nation, or ignore it (Fox and Miller-Idriss, 2008).", codex:"theories-of-nationalism"},
   {id:"scientific-racism", term:"Scientific racism", def:"The false claim, presented as science, that humanity divides into biological races ranked by ability; widely used to justify empire and exclusion.", codex:"race-and-ir"},
   {id:"racialisation", term:"Racialisation", def:"The process of attaching racial meaning to people, practices or places, for example treating a nationality or religion as if it were a race.", codex:"race-and-ir"},
   {id:"pan-africanism", term:"Pan-Africanism", def:"Movements and ideas seeking the unity, freedom and solidarity of Africans and people of African descent worldwide, from the 1900 conference onwards.", codex:"race-and-ir"},
   {id:"norm-against-noticing", term:"Norm against noticing", def:"A phrase used in the title of a 2022 review by Freeman, Kim and Lake for the IR field’s long habit of not discussing race.", codex:"race-and-ir"},
   {id:"icerd", term:"ICERD", def:"The International Convention on the Elimination of All Forms of Racial Discrimination, adopted 21 December 1965, in force 4 January 1969.", codex:"icerd-and-anti-racism"},
   {id:"cerd-committee", term:"CERD (Committee)", def:"The Committee on the Elimination of Racial Discrimination: 18 independent experts who monitor how states apply ICERD.", codex:"icerd-and-anti-racism"},
   {id:"apartheid", term:"Apartheid", def:"South Africa’s system of legalised racial segregation and domination (1948–1994); declared a crime against humanity by the 1973 Apartheid Convention.", codex:"icerd-and-anti-racism"},
   {id:"durban-declaration", term:"Durban Declaration and Programme of Action", def:"The outcome of the 2001 UN World Conference against Racism in Durban, South Africa; a reference text that remains disputed by some states.", codex:"icerd-and-anti-racism"},
   {id:"primordialism", term:"Primordialism", def:"The view that ethnic or national ties are given, like kinship, and carry deep emotional force; in Geertz’s version, ties that people experience as given.", codex:"ethnic-conflict"},
   {id:"instrumentalism-ethnicity", term:"Instrumentalism (ethnicity)", def:"The view that ethnicity matters politically because elites and groups mobilise it to gain power or resources.", codex:"ethnic-conflict"},
   {id:"constructivism-ethnicity", term:"Constructivism (ethnicity)", def:"The view that ethnic categories and boundaries are made, maintained and changed through history, institutions and practice.", codex:"ethnic-conflict"},
   {id:"ethnic-boundary", term:"Ethnic boundary", def:"Fredrik Barth’s idea (1969) that what defines an ethnic group is the boundary kept between “us” and “them”, more than the culture inside it.", codex:"ethnic-conflict"},
   {id:"ethnic-security-dilemma", term:"Ethnic security dilemma", def:"Barry Posen’s application (1993) of the security dilemma to groups inside a collapsing state: defensive arming by each looks threatening to others.", codex:"ethnic-conflict"},
   {id:"ethnic-outbidding", term:"Ethnic outbidding", def:"Competition among parties for one group’s votes, in which each tries to look more loyal, pushing politics towards extremes (Rabushka and Shepsle, 1972).", codex:"ethnic-conflict"},
   {id:"horizontal-inequality", term:"Horizontal inequality", def:"Inequality between culturally defined groups, in wealth, jobs, education or power; Frances Stewart’s research links it to conflict risk.", codex:"ethnic-conflict"},
   {id:"consociationalism", term:"Consociationalism", def:"Arend Lijphart’s model of power-sharing in divided societies: grand coalition, mutual veto, proportionality and group autonomy.", codex:"ethnic-conflict"},
   {id:"minority-rights", term:"Minority rights", def:"International protections for members of ethnic, religious or linguistic minorities to enjoy their identity and participate equally, as in ICCPR Article 27.", codex:"minority-and-indigenous-rights"},
   {id:"indigenous-peoples", term:"Indigenous peoples", def:"Peoples with historical continuity with societies before colonisation or settlement, distinct cultures and ties to land; the UN stresses self-identification.", codex:"minority-and-indigenous-rights"},
   {id:"undrip", term:"UNDRIP", def:"The UN Declaration on the Rights of Indigenous Peoples, adopted 13 September 2007 by 144 votes to 4, with 11 abstentions.", codex:"minority-and-indigenous-rights"},
   {id:"free-prior-informed-consent", term:"Free, prior and informed consent (FPIC)", def:"The principle in UNDRIP that indigenous peoples must be consulted, and their consent sought, before relocation or projects affecting their lands.", codex:"minority-and-indigenous-rights"},
   {id:"language-policy", term:"Language policy", def:"A state’s choices about official, school and administrative languages, which distribute jobs, status and belonging.", codex:"minority-and-indigenous-rights"},
   {id:"return-of-religion", term:"Return of religion", def:"The label for IR’s renewed attention to religion since the 1990s and 2000s; critics say religion never left, only the field’s attention did.", codex:"religion-in-world-politics"},
   {id:"deprivatization", term:"Deprivatisation (of religion)", def:"José Casanova’s term (1994) for religions re-entering public and political life rather than staying private.", codex:"religion-in-world-politics"},
   {id:"multiple-modernities", term:"Multiple modernities", def:"S. N. Eisenstadt’s argument (2000) that modernity takes many cultural forms, so modernising societies need not secularise in one way.", codex:"religion-in-world-politics"},
   {id:"post-secular", term:"Post-secular", def:"A term Jürgen Habermas used from the early 2000s (for example in 2008) for societies in which secular citizens accept that religion will persist and engage with religious voices.", codex:"religion-in-world-politics"},
   {id:"secularism", term:"Secularism", def:"A principle for how the state relates to religion, from strict separation to state management of religion; it takes different forms in different countries.", codex:"religion-in-world-politics"},
   {id:"laicite", term:"Laïcité", def:"France’s model of strict separation of state and religion, based on a law of 1905.", codex:"religion-in-world-politics"},
   {id:"religious-soft-power", term:"Religious soft power", def:"A state’s use of religion abroad, such as training clergy, funding institutions or promoting heritage, to attract and influence.", codex:"religion-in-world-politics"},
   {id:"fault-line-conflict", term:"Fault-line conflict", def:"Huntington’s term for conflict between neighbouring groups or states from different civilisations.", codex:"clash-of-civilizations-debate"},
   {id:"dialogue-among-civilizations", term:"Dialogue among civilisations", def:"The idea, promoted by Iran’s President Khatami and adopted by the UN for the year 2001, that civilisations should engage rather than clash.", codex:"clash-of-civilizations-debate"},
   {id:"alliance-of-civilizations", term:"Alliance of Civilizations", def:"A UN initiative proposed by Spain in 2004, co-sponsored by Turkey and launched in 2005, to improve relations across cultures and religions.", codex:"clash-of-civilizations-debate"},
   {id:"existential-security", term:"Existential security", def:"Norris and Inglehart’s idea (2004) that religiosity tends to decline where life is safer and more predictable.", codex:"religion-in-world-politics"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"e4u6-q01", lesson:"e4u6-l1", level:1, q:"What does it mean to say an identity is “relational”?", options:[
     {t:"It is formed in relation to others, through difference from them", ok:true, why:"Correct. A “we” is always defined against some “they”."},
     {t:"It is inherited only from one’s relatives", why:"Family matters, but “relational” means defined through contrast with others."},
     {t:"It never changes once formed", why:"Relational identities change as relations change."},
     {t:"It exists only in personal relationships, not politics", why:"States and nations have relational identities too."}]},
   {id:"e4u6-q02", lesson:"e4u6-l1", level:2, q:"Lucía argues that because national identities are constructed, they cannot explain real policy. Which reply is strongest?", options:[
     {t:"Constructed social facts, like money and borders, still shape behaviour, so identity can explain policy", ok:true, why:"Correct. Constructed does not mean ineffective."},
     {t:"She is right; only material power explains policy", why:"Constructivists and many others show identity affects interests and policy."},
     {t:"National identities are biological, so her premise is wrong", why:"There is no biological basis for national identity."},
     {t:"Identities explain policy only in democracies", why:"Identity shapes policy in all kinds of regime."}]},
   {id:"e4u6-q03", lesson:"e4u6-l1", level:1, q:"Which work traced how “Europe” defined itself against images of “the Turk” and of Russia?", options:[
     {t:"Iver Neumann, *Uses of the Other* (1999)", ok:true, why:"Correct. Neumann traced Europe’s Others over centuries."},
     {t:"Benedict Anderson, *Imagined Communities* (1983)", why:"Anderson explains nations through print-capitalism, not Europe’s Others."},
     {t:"Arend Lijphart, *Democracy in Plural Societies* (1977)", why:"That book is about power-sharing."},
     {t:"Samuel Huntington, *The Third Wave* (1991)", why:"That book is about democratisation."}]},
   {id:"e4u6-q04", lesson:"e4u6-l1", level:3, q:"Two neighbouring states could both gain security from a settlement, yet each government says compromise would betray the nation’s “sense of who we are”. Which concept, and which scholar, fit best?", options:[
     {t:"Ontological security, Jennifer Mitzen", ok:true, why:"Correct. She argued states can cling to rivalry because it gives a stable identity."},
     {t:"Banal nationalism, Michael Billig", why:"Billig’s concept is about everyday flagging, not attachment to rivalry."},
     {t:"Horizontal inequality, Frances Stewart", why:"That is about gaps between groups within a state."},
     {t:"Print-capitalism, Benedict Anderson", why:"That explains how nations were imagined, not why rivalries persist."}]},
   {id:"e4u6-q05", lesson:"e4u6-l1", level:1, q:"In which case did Crenshaw find the court looking at race and sex discrimination separately?", options:[
     {t:"*DeGraffenreid v. General Motors* (1976)", ok:true, why:"Correct. She used it in her 1989 article."},
     {t:"*Brown v. Board of Education* (1954)", why:"That case was about school segregation."},
     {t:"The Nuremberg trials", why:"Those were war crimes trials."},
     {t:"A League of Nations arbitration", why:"Her case was a US employment discrimination case."}]},
   {id:"e4u6-q06", lesson:"e4u6-l1", level:3, q:"A study of migrant domestic workers finds that their treatment depends on gender, nationality, class and visa status acting together. Which approach is the study using?", options:[
     {t:"Intersectionality", ok:true, why:"Correct. It examines how several systems of power interact in one experience."},
     {t:"Primordialism", why:"Primordialism is about ethnic ties felt as given."},
     {t:"Consociationalism", why:"That is a model of power-sharing between groups."},
     {t:"Perennialism", why:"That is a view about the age of nations."}]},
   {id:"e4u6-q07", lesson:"e4u6-l1", level:2, q:"Which example best shows a state making or hardening group categories?", options:[
     {t:"Singapore’s CMIO categories used in housing and education policy", ok:true, why:"Correct. Official categories shape life chances and self-identification."},
     {t:"Friends forming a book club", why:"Voluntary clubs are not state classification."},
     {t:"A company choosing a logo colour", why:"That classifies no people."},
     {t:"A scientist naming a new beetle", why:"Classifying insects does not create human groups."}]},
   {id:"e4u6-q08", lesson:"e4u6-l1", level:2, q:"What did Brubaker and Cooper (2000) recommend?", options:[
     {t:"Replacing loose talk of “identity” with more precise terms such as identification and groupness", ok:true, why:"Correct. They argued the word had become too vague."},
     {t:"Treating ethnic groups as solid actors in all analysis", why:"Brubaker criticised exactly this “groupism”."},
     {t:"Abandoning the study of nationalism", why:"They wanted better concepts, not to abandon the field."},
     {t:"Measuring identity only through DNA tests", why:"They argued no such thing; identity is social."}]},
   {id:"e4u6-q09", lesson:"e4u6-l1", level:3, q:"A columnist says intersectionality “just means adding up how many disadvantaged groups someone belongs to”. What is the most accurate response?", options:[
     {t:"That is the additive misuse critics warn against; the idea is about how systems of power interact to produce specific experiences", ok:true, why:"Correct. Interaction, not addition, is the core idea."},
     {t:"The columnist is right; that is Crenshaw’s definition", why:"Crenshaw stressed interaction, not addition."},
     {t:"Intersectionality is about traffic law", why:"The crossroads is a metaphor."},
     {t:"Intersectionality only concerns class", why:"It concerns how several systems, including race and gender, interact."}]},
   /* Lesson 2 */
   {id:"e4u6-q10", lesson:"e4u6-l2", level:1, q:"How did Gellner define nationalism?", options:[
     {t:"A political principle that the political and the national unit should be congruent", ok:true, why:"Correct; it opens *Nations and Nationalism* (1983)."},
     {t:"Love of one’s family and village", why:"That is local loyalty, not Gellner’s definition."},
     {t:"An imagined political community", why:"That is Anderson’s definition of the nation."},
     {t:"A daily plebiscite", why:"That is Renan’s 1882 phrase."}]},
   {id:"e4u6-q11", lesson:"e4u6-l2", level:2, q:"Why, for Gellner, did industrial society need nationalism?", options:[
     {t:"A mobile workforce needs a shared, standardised literate culture taught by the state", ok:true, why:"Correct. Culture and state had to fit together."},
     {t:"Factories required workers of one race", why:"Gellner’s argument was about culture and literacy, not race."},
     {t:"Industry made religion stronger", why:"That was not his mechanism."},
     {t:"Industrial states needed fewer schools", why:"The opposite: mass schooling was central."}]},
   {id:"e4u6-q12", lesson:"e4u6-l2", level:1, q:"What mechanism did Anderson call print-capitalism?", options:[
     {t:"The market for printed books and newspapers in vernacular languages, creating reading publics", ok:true, why:"Correct. Vernacular print created publics who could imagine a nation."},
     {t:"Governments printing money to fund wars", why:"That is not Anderson’s concept."},
     {t:"Banks lending to printing companies", why:"The point was reading publics, not finance."},
     {t:"Printing national flags in factories", why:"Flags matter for Billig, not for this concept."}]},
   {id:"e4u6-q13", lesson:"e4u6-l2", level:2, q:"Which example fits Hobsbawm and Ranger’s idea of invented tradition?", options:[
     {t:"A “centuries-old” ceremony that historians show was largely created in the 19th century to build loyalty", ok:true, why:"Correct. That is the classic pattern."},
     {t:"A family recipe passed down unchanged for generations", why:"An unchanged inheritance is not an invented tradition."},
     {t:"A new sports league that claims no history", why:"Invented traditions claim continuity with the past."},
     {t:"A scientific discovery", why:"That is not a tradition."}]},
   {id:"e4u6-q14", lesson:"e4u6-l2", level:3, q:"A nationalist movement revives an ancient kingdom’s flag and script, and they resonate widely. A modernist and an ethno-symbolist discuss it. Which pairing of their emphases is right?", options:[
     {t:"Modernist: who revived the symbols and why now; ethno-symbolist: why these symbols already meant something", ok:true, why:"Correct. Both questions are worth asking."},
     {t:"Modernist: the nation is natural; ethno-symbolist: it was invented last year", why:"That reverses and exaggerates the positions."},
     {t:"Both: symbols never matter", why:"Both schools take symbols seriously, for different reasons."},
     {t:"Modernist: the kingdom proves nations are ancient", why:"Modernists would stress the modern revival."}]},
   {id:"e4u6-q15", lesson:"e4u6-l2", level:2, q:"Which is the best example of banal nationalism?", options:[
     {t:"A weather forecast showing only the national map, with neighbouring countries left blank", ok:true, why:"Correct. It quietly presents the nation as the natural unit."},
     {t:"A mass rally for independence", why:"That is “hot”, not banal, nationalism."},
     {t:"A treaty signed between two states", why:"A treaty is formal diplomacy, not everyday flagging."},
     {t:"A private diary about gardening", why:"Nothing national is flagged."}]},
   {id:"e4u6-q16", lesson:"e4u6-l2", level:1, q:"Which of these did Anderson treat as examples of official nationalism?", options:[
     {t:"Tsarist Russia, Siam and Meiji Japan", ok:true, why:"Correct. Dynasties adopted nationalism from above."},
     {t:"The creole independence movements of the Americas", why:"Those were his “creole pioneers”."},
     {t:"Indonesia’s 1928 Youth Pledge", why:"That was a popular anti-colonial initiative."},
     {t:"Billig’s weather maps", why:"That is banal nationalism."}]},
   {id:"e4u6-q17", lesson:"e4u6-l2", level:3, q:"Chen writes: “Civic nations are inclusive and ethnic nations are exclusive, so we can sort every country into one box.” Which critique applies?", options:[
     {t:"Scholars such as Yack argue every civic nation has cultural content, so the two are ends of a spectrum and the labels can be self-serving", ok:true, why:"Correct. Yack and Brubaker questioned the neat divide."},
     {t:"Kohn never proposed the distinction", why:"Kohn did propose it, in 1944."},
     {t:"All nations are purely civic", why:"Most mix civic and ethnic elements."},
     {t:"Ethnic nationalism does not exist", why:"It does; the critique is about the neat divide."}]},
   {id:"e4u6-q18", lesson:"e4u6-l2", level:3, q:"According to Jessica Chen Weiss (2014), why might a government allow nationalist street protests against another state?", options:[
     {t:"To signal resolve in a dispute, showing it faces domestic pressure not to concede", ok:true, why:"Correct. Restraining protests can signal flexibility instead."},
     {t:"Because it can never control protests", why:"Her argument is that it chooses to tolerate or restrain them."},
     {t:"Because protests always end disputes quickly", why:"She makes no such claim."},
     {t:"To prove the protesters are foreign agents", why:"That is not her argument."}]},
   /* Lesson 3 */
   {id:"e4u6-q19", lesson:"e4u6-l3", level:1, q:"In which year and city did Du Bois address the Pan-African Conference about the colour line?", options:[
     {t:"1900, London", ok:true, why:"Correct: July 1900."},
     {t:"1903, Atlanta", why:"1903 is the year of *The Souls of Black Folk*."},
     {t:"1919, Paris", why:"That was the peace conference."},
     {t:"1955, Bandung", why:"That was the Asian–African Conference."}]},
   {id:"e4u6-q20", lesson:"e4u6-l3", level:2, q:"What did Lake and Reynolds show in *Drawing the Global Colour Line* (2008)?", options:[
     {t:"Self-described “white men’s countries” copied each other’s laws to keep out Asian and other migrants", ok:true, why:"Correct; Natal’s 1897 test influenced Australia’s 1901 Act, for example."},
     {t:"Race played no role in immigration law", why:"They showed the reverse."},
     {t:"Only European states restricted migration", why:"Settler states in several continents did."},
     {t:"Japan wrote the White Australia policy", why:"Australia did; Japan opposed such restrictions."}]},
   {id:"e4u6-q21", lesson:"e4u6-l3", level:2, q:"How does Article 22 of the League Covenant illustrate racial hierarchy in the order?", options:[
     {t:"It placed peoples deemed “not yet able to stand by themselves” under advanced nations as a “sacred trust of civilisation”", ok:true, why:"Correct. The mandate system ranked peoples."},
     {t:"It gave all colonies immediate independence", why:"It kept mandated peoples under outside tutelage."},
     {t:"It adopted Japan’s racial equality clause", why:"The clause was not adopted."},
     {t:"It abolished the standard of civilisation", why:"It built on that idea."}]},
   {id:"e4u6-q22", lesson:"e4u6-l3", level:1, q:"When was ICERD adopted, and when did it enter into force?", options:[
     {t:"Adopted 21 December 1965; in force 4 January 1969", ok:true, why:"Correct. These are the adoption and entry-into-force dates."},
     {t:"Adopted 1948; in force 1950", why:"1948 is the Universal Declaration."},
     {t:"Adopted 1973; in force 1976", why:"Those are the Apartheid Convention’s dates."},
     {t:"Adopted 2001; in force 2002", why:"2001 is the Durban conference."}]},
   {id:"e4u6-q23", lesson:"e4u6-l3", level:2, q:"Which grounds does ICERD’s Article 1 list?", options:[
     {t:"Race, colour, descent, or national or ethnic origin", ok:true, why:"Correct. Article 1 lists all five grounds."},
     {t:"Race only", why:"The definition is broader."},
     {t:"Religion and political opinion only", why:"Those are not in Article 1’s list."},
     {t:"Citizenship status only", why:"The Convention largely allows distinctions between citizens and non-citizens; it is not its definition."}]},
   {id:"e4u6-q24", lesson:"e4u6-l3", level:3, q:"Ana is writing a neutral paragraph on caste and ICERD. Which sentence fits?", options:[
     {t:"CERD treats descent-based discrimination as including caste; India and some other states argue caste falls outside the Convention", ok:true, why:"Correct. It reports both positions and who holds them."},
     {t:"Caste is obviously race, and anyone who disagrees is wrong", why:"That takes a side in a contested debate."},
     {t:"ICERD does not mention descent", why:"Article 1 does."},
     {t:"No UN body has addressed caste", why:"CERD’s General Recommendation No. 29 (2002) did."}]},
   {id:"e4u6-q25", lesson:"e4u6-l3", level:2, q:"What happened at the 2001 Durban World Conference against Racism?", options:[
     {t:"It adopted a Declaration and Programme of Action, amid disputes in which the US and Israel withdrew their delegations", ok:true, why:"Correct. The outcome documents were adopted, but the conference was divided."},
     {t:"It drafted ICERD", why:"ICERD dates from 1965."},
     {t:"It was cancelled", why:"It took place and adopted outcome documents."},
     {t:"All states agreed on reparations", why:"Reparations were disputed."}]},
   {id:"e4u6-q26", lesson:"e4u6-l3", level:3, q:"A researcher argues that Japan’s 1919 proposal and Turkey’s Westernising reforms show states struggling with low rank in a hierarchy of “civilisation”, where race was one element. Which position on race in IR is this?", options:[
     {t:"Race as one hierarchy among several", ok:true, why:"Correct. It places race alongside status and civilisation (compare Zarakol and Suzuki)."},
     {t:"Race as irrelevant", why:"The argument includes race."},
     {t:"Race as a biological fact", why:"No IR position treats race as biological ranking."},
     {t:"Race as a measurable survey variable", why:"The argument is historical, not a survey measurement."}]},
   {id:"e4u6-q27", lesson:"e4u6-l3", level:1, q:"What is racialisation?", options:[
     {t:"The process of attaching racial meaning to people, practices or places", ok:true, why:"Correct. It names a process, not a fixed category."},
     {t:"Measuring biological races scientifically", why:"Races are not biological boxes; this is not what the term means."},
     {t:"A treaty against racism", why:"That would be ICERD."},
     {t:"Mixing populations through migration", why:"That is not the definition."}]},
   /* Lesson 4 */
   {id:"e4u6-q28", lesson:"e4u6-l4", level:1, q:"Which approach says ethnic boundaries matter more than the cultural content inside them?", options:[
     {t:"Fredrik Barth’s constructivist approach (1969)", ok:true, why:"Correct. Barth stressed the boundary, not the “cultural stuff”."},
     {t:"Primordialism", why:"Primordialism stresses felt, given ties."},
     {t:"Consociationalism", why:"That is a power-sharing model."},
     {t:"Existential security", why:"That concerns religiosity."}]},
   {id:"e4u6-q29", lesson:"e4u6-l4", level:2, q:"What did Fearon and Laitin (2003) find about ethnic diversity and civil war onset, 1945–1999?", options:[
     {t:"Diversity was not a significant predictor once income was controlled; conditions favouring insurgency mattered more", ok:true, why:"Correct. Poverty, weak states and rough terrain mattered more."},
     {t:"Diversity was the strongest predictor", why:"They found the opposite."},
     {t:"Only religious diversity mattered", why:"Neither ethnic nor religious diversity was significant in their main models."},
     {t:"Rich countries had the most civil wars", why:"Poverty was associated with higher risk."}]},
   {id:"e4u6-q30", lesson:"e4u6-l4", level:2, q:"What did the Ethnic Power Relations research of Cederman, Wimmer and Min (2010) find?", options:[
     {t:"Groups excluded from state power, especially recently, are more likely to fight the government", ok:true, why:"Correct. Exclusion from power, not diversity itself, raised the risk."},
     {t:"Excluded groups never rebel", why:"They found the opposite."},
     {t:"Power-sharing always causes war", why:"Their finding was about exclusion."},
     {t:"Ethnicity is irrelevant to conflict", why:"How groups relate to the state mattered a great deal."}]},
   {id:"e4u6-q31", lesson:"e4u6-l4", level:3, q:"In a country with two large communities, rival parties each compete for votes in one community by promising tougher stands against the other, and moderates lose. Which concept fits best?", options:[
     {t:"Ethnic outbidding", ok:true, why:"Correct (Rabushka and Shepsle, 1972); Sri Lanka after 1956 is often cited."},
     {t:"Banal nationalism", why:"That is quiet everyday flagging."},
     {t:"Multiple modernities", why:"That concerns forms of modernity."},
     {t:"Deprivatisation", why:"That concerns religion in public life."}]},
   {id:"e4u6-q32", lesson:"e4u6-l4", level:3, q:"Varshney compared Indian cities. Which finding should Mei cite?", options:[
     {t:"Cities with strong associations linking Hindus and Muslims, such as business groups and unions, saw much less riot violence", ok:true, why:"Correct. Inter-community civic ties made the difference."},
     {t:"More diverse cities always had more riots", why:"His point was that civic ties, not diversity, made the difference."},
     {t:"Riots were caused by weather", why:"Not his finding."},
     {t:"Only national policy mattered, never local life", why:"He stressed local civic life."}]},
   {id:"e4u6-q33", lesson:"e4u6-l4", level:1, q:"Which features belong to Lijphart’s consociational democracy?", options:[
     {t:"Grand coalition, mutual veto, proportionality and segmental autonomy", ok:true, why:"Correct. These are Lijphart’s four features."},
     {t:"One-party rule and a single official culture", why:"That is the opposite of power-sharing."},
     {t:"Winner-takes-all elections only", why:"Consociationalism avoids winner-takes-all."},
     {t:"Rewarding only cross-group vote-seeking", why:"That is closer to Horowitz’s centripetal approach."}]},
   {id:"e4u6-q34", lesson:"e4u6-l4", level:2, q:"Which statement about UNDRIP is accurate?", options:[
     {t:"It was adopted in 2007 by 144 votes to 4, and the four states against later endorsed it", ok:true, why:"Correct: Australia, Canada, New Zealand and the United States."},
     {t:"It is a treaty ratified by every state", why:"It is a declaration, not a treaty."},
     {t:"It was adopted in 1948", why:"1948 is the Universal Declaration of Human Rights."},
     {t:"It excludes self-determination", why:"Article 3 affirms self-determination."}]},
   {id:"e4u6-q35", lesson:"e4u6-l4", level:3, q:"A mining company plans a project on land used by an indigenous community. Which UNDRIP principle is most directly at stake?", options:[
     {t:"Free, prior and informed consent", ok:true, why:"Correct. UNDRIP calls for consultation to obtain consent before such projects."},
     {t:"Most-favoured-nation treatment", why:"That is a trade principle."},
     {t:"Non-refoulement", why:"That protects refugees from return to danger."},
     {t:"Collective self-defence", why:"That concerns the use of force between states."}]},
   {id:"e4u6-q36", lesson:"e4u6-l4", level:2, q:"What is the origin of International Mother Language Day on 21 February?", options:[
     {t:"The 1952 Dhaka protests for Bengali as a state language, in which several protesters were killed", ok:true, why:"Correct. UNESCO proclaimed the day in 1999."},
     {t:"Sri Lanka’s 1956 Official Language Act", why:"That is a different case."},
     {t:"The founding of the UN", why:"The UN was founded in October 1945."},
     {t:"New Zealand’s Māori Language Act", why:"That was 1987, a different case."}]},
   /* Lesson 5 */
   {id:"e4u6-q37", lesson:"e4u6-l5", level:1, q:"According to Pew’s 2025 report, roughly what share of the world’s population had a religious affiliation in 2020?", options:[
     {t:"About three-quarters", ok:true, why:"Correct: about 75.8%."},
     {t:"About a quarter", why:"That is roughly the share of the unaffiliated."},
     {t:"Almost everyone", why:"The unaffiliated were about 24%."},
     {t:"About half", why:"The share was considerably higher."}]},
   {id:"e4u6-q38", lesson:"e4u6-l5", level:2, q:"What does Norris and Inglehart’s “existential security” argument predict?", options:[
     {t:"Religiosity declines where life is safer and more predictable", ok:true, why:"Correct. Safer lives, less religiosity, on their argument."},
     {t:"Religion grows fastest in the richest, safest societies", why:"Their argument predicts the opposite."},
     {t:"Religion and security are unrelated", why:"They argue they are closely related."},
     {t:"All societies will be equally religious", why:"They expect differences by level of security."}]},
   {id:"e4u6-q39", lesson:"e4u6-l5", level:2, q:"What is Hurd’s main critique in *The Politics of Secularism in International Relations* (2008)?", options:[
     {t:"Secularism is a political settlement with its own history, not a neutral absence of religion", ok:true, why:"Correct. Secularism has varied histories and forms."},
     {t:"Religion should replace the state", why:"She makes no such argument."},
     {t:"Secularism is the same everywhere", why:"She stresses variety."},
     {t:"IR has always studied religion closely", why:"Her work responds to IR’s neglect."}]},
   {id:"e4u6-q40", lesson:"e4u6-l5", level:3, q:"A state funds training for imams from neighbouring countries and hosts an international religious forum to improve its reputation. Which analysis fits best?", options:[
     {t:"Religious soft power, with a risk of governments defining acceptable religion for others", ok:true, why:"Correct. It uses attraction and carries the concerns scholars raise."},
     {t:"Fault-line conflict", why:"No conflict between civilisations is described."},
     {t:"Ethnic outbidding", why:"That is about electoral competition."},
     {t:"Banal nationalism", why:"This is a foreign-policy strategy, not everyday flagging."}]},
   {id:"e4u6-q41", lesson:"e4u6-l5", level:1, q:"Which civilisation did Huntington’s 1996 book call “Sinic”?", options:[
     {t:"The one his 1993 article had called Confucian", ok:true, why:"Correct. The book renamed Confucian as Sinic."},
     {t:"The Japanese civilisation", why:"He treated Japan as a separate civilisation."},
     {t:"The Hindu civilisation", why:"Hindu kept its name."},
     {t:"The Slavic-Orthodox civilisation", why:"That is a different grouping."}]},
   {id:"e4u6-q42", lesson:"e4u6-l5", level:2, q:"What policy advice did Huntington give the West in the 1996 book?", options:[
     {t:"Strengthen Western unity and avoid intervening in other civilisations, since Western universalism is false, immoral and dangerous", ok:true, why:"Correct. He advised restraint and Western cohesion."},
     {t:"Spread Western values worldwide by force", why:"He warned against this."},
     {t:"Merge all civilisations into one", why:"He thought civilisations would persist."},
     {t:"Abandon all alliances", why:"He urged Western cohesion."}]},
   {id:"e4u6-q43", lesson:"e4u6-l5", level:2, q:"What did Russett, Oneal and Cox (2000) find when they tested the clash thesis?", options:[
     {t:"Conflicts between states of different civilisations were not more likely once realist and liberal factors were included", ok:true, why:"Correct. Realist and liberal factors explained more."},
     {t:"Civilisational difference was the main cause of all wars", why:"They found the opposite."},
     {t:"They found no data to test it", why:"They used conflict data on pairs of states."},
     {t:"Only religious states went to war", why:"Not their finding."}]},
   {id:"e4u6-q44", lesson:"e4u6-l5", level:3, q:"A defender of Huntington says: “The tests only looked at wars between states; he wrote about rising cultural identity.” What is the fair response?", options:[
     {t:"That is a real limit of the tests, but critics reply it makes the thesis harder to falsify", ok:true, why:"Correct. Both points belong in a balanced answer."},
     {t:"The tests prove Huntington right", why:"They mostly did not support the interstate claim."},
     {t:"Huntington never mentioned conflict", why:"Conflict was central to his thesis."},
     {t:"Cultural identity cannot be studied", why:"It can, with surveys, discourse analysis and other methods."}]},
   {id:"e4u6-q45", lesson:"e4u6-l5", level:3, q:"Kwame is writing a seminar paper on the clash debate. Which plan is strongest?", options:[
     {t:"Define “civilisation”, separate the interstate claim from the claim about identity, and weigh tests and critiques for each", ok:true, why:"Correct. Precise claims make for a fair test."},
     {t:"Quote the title and declare it wrong", why:"That skips the argument and the evidence."},
     {t:"Use only sources that agree with him", why:"A seminar paper should engage the strongest counter-arguments."},
     {t:"Treat each civilisation as having one national character", why:"That repeats the essentialism critics warn about."}]}
  ]
});
