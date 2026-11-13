/* International Studies · Unit 22 · Other world regions: Africa, Latin America and the Middle East */
ICA.addUnit({
  id:"e4u22", track:"e4", n:22, title:"Other world regions: Africa, Latin America and the Middle East", icon:"🌍",
  blurb:"How to study a region you don’t know, then Africa, Latin America and the Caribbean, and the Middle East and North Africa at seminar level: the debates about their states, regional institutions, development, democracy, populism, oil, uprisings and peace, and their ties with Asia, told neutrally and dated as of November 2026. The last lesson draws the whole International Studies track together and points to free ways to keep learning.",
  goals:[
    "Define a world region for a research question, read its own scholars, and choose between intra-, inter- and cross-regional comparison",
    "Explain the main debates on the post-colonial African state, the African Peace and Security Architecture, Africa’s development outlook and Africa–Asia relations",
    "Use the concepts of bureaucratic authoritarianism, pacted transition, delegative democracy, populism and the pink tide to analyse Latin American politics neutrally",
    "Analyse the Middle East and North Africa with rentier state theory, the record of the Arab uprisings and the Gulf states’ rise, and describe the Israeli–Palestinian conflict and normalisation with attributed, dated positions",
    "Explain Asia’s economic and energy stakes in all three regions",
    "Connect the track’s foundations and four clusters through six cross-cutting debates, and plan continued learning with free, reliable resources"
  ],
  read:[
    {book:"eirt", where:"Chapter 17 “Global South Perspectives” and Chapter 9 “Postcolonialism”", note:"Theory from and about the regions in this unit."},
    {book:"owh2", where:"Chapter 12, section 12.4 “Old Empires and New Colonies”, and Chapter 14, sections 14.3 “The Non-Aligned Movement”, 14.4 “Global Tensions and Decolonization” and 14.5 “A New World Order”", note:"Free historical background on the mandates, decolonisation in Africa, the Cold War in Latin America and the Iranian revolution."},
    {book:"eirt", where:"Chapter 10 “Towards a Global IR?”", note:"For the final, synthesising lesson."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u22-l1", title:"How to study a region you don’t know", minutes:55,
   hook:{q:"On many world maps Africa looks about the size of Greenland. Which is actually larger in land area: Africa, or China, the United States and India put together?", options:["Africa, by a wide margin","They are about the same","China, the US and India together, by a wide margin","It depends on which map you use"], answer:0, reveal:"**Africa, by a wide margin.** Africa covers about 30.3 million km², roughly a fifth of the Earth’s land. China, the United States and India together come to roughly 23 million km². The common Mercator projection greatly enlarges lands far from the equator, such as Greenland, so Africa looks small beside them. A map is a choice about what to show; so is the name of a region, and so is the way we study one. That is where this lesson begins."},
   goals:[
     "Explain why “Africa”, “Latin America” and “the Middle East” are constructed regions, and what each name includes and leaves out",
     "Compare area studies, comparative politics and comparative area studies, and choose between intra-regional, inter-regional and cross-regional designs",
     "Name scholars and institutions in Africa, Latin America and the Middle East whose work you should read, not just read about",
     "Use regional opinion surveys and local-language sources critically",
     "Apply a checklist that avoids single stories, crisis-only framing and “parachute research”"
   ],
   learn:[
    {h:"Regions are made, not found", body:[
      {lead:"Imagine you are asked to write a seminar paper on “the Middle East”. Before you start, ask: whose middle, and east of what?"},
      "This last unit of the track turns to three large world regions: Africa, Latin America and the Caribbean, and the Middle East and North Africa. Unit 4 introduced [[area-studies|area studies]] through Japan ({{area-studies}}); Units 19–21 applied it to East, Southeast and South Asia. Here the first step is to notice that region names are themselves historical and political.",
      {table:[
        ["Name","Where it came from","What to watch for"],
        ["The Middle East","Possibly British India Office usage in the 1850s; spread after the US naval strategist Alfred Thayer Mahan used it in a September 1902 article on the Persian Gulf","It names the region from the viewpoint of Europe and British India. Some writers in the region, such as the Egyptian philosopher Hassan Hanafi, have called it Eurocentric."],
        ["Latin America","Usually credited to the Chilean writer Francisco Bilbao, in a Paris speech of 1856; used in 1857 by the Colombian José María Torres Caicedo","The idea of a “Latin race” was also promoted in France, and Napoleon III’s government used it in the 1860s to justify intervening in Mexico. Usually excludes the English- and Dutch-speaking Caribbean."],
        ["Sub-Saharan Africa","A grouping used by the World Bank and many statistical agencies","Treats the Sahara as a wall rather than a highway of trade, faith and migration, and splits North Africa from the rest of the continent."]
      ]},
      "None of this means the names are useless. It means you should say what you include, and why. The historian Michel Gobat has shown, for example, that Central and South Americans used “Latin America” in 1856 to protest against US expansion: the same label can carry anti-imperial and imperial meanings at once.",
      "Official bodies draw lines differently. The [[african-union|African Union]] treats the whole continent, north and south of the Sahara, as one; its 55 members include every one of Africa’s 54 UN member states. For reporting on the Sustainable Development Goals, the UN’s statisticians group Northern Africa with Western Asia. The UN’s regional commission for the Americas speaks of “Latin America and the Caribbean”. Many scholars use [[mena|MENA]] (the Middle East and North Africa), and some prefer [[west-asia|West Asia]] for the part east of Suez.",
      {key:"A region is a frame you choose for a question. State your frame, give your reason, and note what it hides."}
    ]},
    {h:"Area studies, comparative politics, and something in between", body:[
      "Unit 4 told the story of the 1990s quarrel between country specialists and general theorists (Robert Bates, “Area Studies and the Discipline”, 1997). The quarrel was sharpest in the study of exactly the regions in this unit. Theories of democratisation and development built mainly on Europe and North America were tested, often roughly, on Africa, Latin America and the Middle East, and country experts complained that the cases were misread.",
      "One answer is [[comparative-area-studies|comparative area studies]] (CAS). In *Comparative Area Studies* (Oxford University Press, 2018), Ariel Ahram, Patrick Köllner and Rudra Sil argue for combining deep knowledge of places with deliberate comparison across them ({{comparative-area-studies}}). Scholars working in this tradition distinguish three designs:",
      {list:[
        "**Intra-regional:** compare cases within one region, e.g. Kenya and Tanzania after independence.",
        "**Inter-regional:** compare regions as wholes, e.g. the African Union and ASEAN as institutions.",
        "**Cross-regional:** compare cases from different regions that share a feature, e.g. oil-funded monarchies in the Gulf and Brunei, or military-led governments in the Sahel and Myanmar."
      ]},
      "Cross-regional designs are especially useful for this track, because they break the habit of treating a region as unique. Populism in Latin America and in Southeast Asia, or peacebuilding in Africa and the Pacific, can be compared with the tools of Unit 3 ({{comparative-method}}, {{case-selection}}).",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e4u22-l1-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="20" y="10" width="300" height="56" rx="10" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Intra-regional</text><text class="s" x="170" y="54" text-anchor="middle">Kenya and Tanzania after 1961–63</text><rect class="d-gold" x="20" y="88" width="300" height="56" rx="10" stroke-width="2"/><text x="170" y="112" text-anchor="middle">Inter-regional</text><text class="s" x="170" y="132" text-anchor="middle">the African Union and ASEAN as wholes</text><rect class="d-sage" x="20" y="166" width="300" height="56" rx="10" stroke-width="3"/><text x="170" y="190" text-anchor="middle">Cross-regional</text><text class="s" x="170" y="210" text-anchor="middle">Gulf monarchies and Brunei; Sahel and Myanmar</text><path class="d-ink" d="M170 222 V250" stroke-width="2" marker-end="url(#e4u22-l1-ar)"/><rect class="d-panel" x="20" y="254" width="300" height="38" rx="8" stroke-width="1"/><text class="s" x="170" y="277" text-anchor="middle">Same tools: case selection, process tracing</text></svg>', alt:"Three stacked boxes. Intra-regional comparison: Kenya and Tanzania after independence. Inter-regional comparison: the African Union and ASEAN as wholes. Cross-regional comparison, highlighted: Gulf monarchies and Brunei; the Sahel and Myanmar. An arrow leads to a note: the same tools of case selection and process tracing apply.", cap:"Three designs in comparative area studies. Each needs deep knowledge of every case, not only of the theory."},
      {tip:"In a proposal, name your design in one sentence: “This is a cross-regional comparison of two most-similar cases…”. Examiners look for it."}
    ]},
    {h:"Whose knowledge? Reading the regions’ own scholars", body:[
      "A second lesson of Units 2 and 4 ([[global-ir|Global IR]]) is that these regions are not only places to be studied. They are places where influential theory was made.",
      {list:[
        "**Latin America** gave the world [[dependency-theory|dependency theory]] and structuralist economics through Raúl Prebisch and the UN Economic Commission for Latin America (see {{dependency-debates}}), Guillermo O’Donnell’s work on authoritarianism and democracy ({{guillermo-odonnell}}), and the regional social science council CLACSO, founded in 1967.",
        "**Africa** produced Pan-Africanist thought ([[pan-africanism]]), the Council for the Development of Social Science Research in Africa (CODESRIA, based in Dakar, founded in 1973), and scholars such as Thandika Mkandawire on developmental states (Unit 14) and Mahmood Mamdani on the colonial state ({{mahmood-mamdani}}).",
        "**The Middle East** produced Edward Said’s critique of [[orientalism|Orientalism]] (Unit 5), and large Arabic-, Persian-, Turkish- and Hebrew-language scholarships on the state, religion and political economy."
      ]},
      "Researchers who fly in, collect data and publish abroad without local partners are criticised for [[parachute-research|parachute research]], sometimes called extractive or “helicopter” research. Funders and journals increasingly ask for fair partnerships: local co-authors, shared data and results returned to the people studied. This links to the ethics of fieldwork in Unit 3 ({{fieldwork-ethics}}) and to [[positionality]].",
      {warn:"Citing a scholar from a region is not the same as letting them speak for the whole region. Africa’s, Latin America’s and the Middle East’s scholars disagree with one another as much as anyone else’s do."}
    ]},
    {h:"Sources, languages and surveys", body:[
      "Depth needs sources in the languages people actually use. Across these regions that means at least Arabic, Spanish, Portuguese and French, and for many topics Swahili, Hausa, Amharic, Persian, Turkish, Hebrew or Quechua. If you cannot yet read them, use translated primary sources, regional newspapers in English or French, and colleagues who can, and say so in your methods section.",
      "Three regional opinion surveys let you hear what ordinary people think, not only what governments and outside experts say. They belong to the network known as the [[global-barometer-surveys|Global Barometer Surveys]].",
      {table:[
        ["Survey","Coverage","Useful facts"],
        ["Afrobarometer","More than 30 African countries","Face-to-face interviews in the language of the respondent’s choice; samples of 1,200–2,400 adults per country; data free to download"],
        ["Latinobarómetro","18 Latin American countries","Annual since 1995: one of the longest series on attitudes to democracy"],
        ["Arab Barometer","Arab states of the Middle East and North Africa","Surveys since 2006; nine waves; publicly available data"]
      ]},
      "Use them with care. Questions about politics are harder to answer honestly under repression, wording loses nuance in translation, and some countries cannot be surveyed at all during conflict. Combine them with other evidence, as Unit 3 recommends for any dataset ({{ir-datasets}})."
    ]},
    {h:"Avoiding the single story", body:[
      "Unit 5 introduced Chimamanda Ngozi Adichie’s warning about the “single story” and V. Y. Mudimbe’s *The Invention of Africa*. A sharp companion piece is the Kenyan writer Binyavanga Wainaina’s satirical essay “How to Write About Africa” (*Granta* 92, 2005), which mocks the clichés of sunsets, starving children and heroic outsiders.",
      "Three framing traps recur in writing about all three regions:",
      {ol:[
        "**Crisis-only framing.** A region appears only when there is war, famine or a coup. Ask what else was happening that year: elections, art, trade, peaceful protest, scientific work.",
        "**Exceptionalism.** “The Middle East is uniquely resistant to democracy” or “Latin America is naturally populist” treat a pattern as an essence ([[essentialism]]). Test such claims comparatively instead.",
        "**Outsiders as the only actors.** Stories in which great powers, donors or peacekeepers act and local people merely suffer. Ask what local governments, movements and businesses decided, and why."
      ]},
      "None of this means hiding problems. Conflict, poverty and repression are real, and later lessons treat them directly. The point is to describe them accurately, alongside agency, variety and change."
    ]},
    {h:"A checklist for your first week on a new region", body:[
      "Before writing on a region you do not know, work through these steps. They draw on methods from Unit 3 and the cautions above.",
      {ol:[
        "Define the region for this question, and justify the frame.",
        "Read one overview by a scholar from the region and one by an outsider.",
        "Learn the basic chronology: independence or state formation, regime changes, major wars and peace agreements.",
        "Find one local-language or regional source per country you study.",
        "Check what the region’s people say in a survey such as Afrobarometer, Latinobarómetro or Arab Barometer.",
        "Choose a comparison (intra-, inter- or cross-regional) and say why.",
        "Reread your draft for single stories, exceptionalism and missing local actors."
      ]},
      {h:"Common misconceptions"},
      {table:[
        ["Misconception","Closer to the truth"],
        ["Region names are neutral geography.","They have histories: “Middle East” was coined from a European and British Indian viewpoint; “Latin America” carried both imperial and anti-imperial meanings."],
        ["Comparative politics replaced area studies.","Most programmes now want both; comparative area studies combines them deliberately."],
        ["Surveys tell you what a whole region thinks.","They sample countries and people under particular conditions; repression, translation and conflict all limit them."],
        ["Writing about strengths means ignoring problems.","Good scholarship describes problems accurately and in context, with local actors in view."]
      ]},
      {terms:["comparative-area-studies","mena","west-asia","sub-saharan-africa","latin-america","parachute-research","global-barometer-surveys"]}
    ]}
   ],
   try:[
    {id:"e4u22-l1-x1", type:"match", q:"Match each region name to the history behind it.", pairs:[
      ["The Middle East","Spread after Alfred Thayer Mahan’s 1902 article on the Persian Gulf","Mahan was a US naval strategist; the term named the region from a European and British Indian viewpoint."],
      ["Latin America","Used by Francisco Bilbao in a Paris speech in 1856","Bilbao and Torres Caicedo used it to call for unity against outside intervention."],
      ["Sub-Saharan Africa","A statistical grouping used by the World Bank and others","It separates North Africa and treats the Sahara as a divide."],
      ["MENA","Groups the Middle East with North Africa","A common analytic grouping, used by many scholars and international agencies."]
    ]},
    {id:"e4u22-l1-x2", type:"mcq", q:"A student writes: “Latin America is a natural region defined by geography.” What is the best correction?", options:[
      {t:"The term was coined in the 1850s and carries political meanings; whether it includes the English-speaking Caribbean depends on the definition", ok:true, why:"Right. The name has a history (Bilbao, Torres Caicedo, French pan-Latinism) and its borders vary with the definition."},
      {t:"Latin America is defined by the Andes mountains", why:"Geography alone does not define it: Mexico, Cuba and Brazil’s Amazon are all included."},
      {t:"The UN defined Latin America in its Charter in 1945", why:"The Charter does not define regions; the name is far older."},
      {t:"It means every country in the Americas south of Canada", why:"That would include the United States. Most definitions centre on Spanish- and Portuguese-speaking states."}
    ]},
    {id:"e4u22-l1-x3", type:"sort", q:"Which comparative area studies design does each project use?", buckets:["Intra-regional","Inter-regional","Cross-regional"], items:[
      {t:"Why did Ghana and Côte d’Ivoire follow different economic paths after independence?", b:0, why:"Two cases within one region, West Africa."},
      {t:"How do the African Union and the Organization of American States respond to coups?", b:1, why:"Two regional bodies compared as wholes."},
      {t:"Do oil-funded monarchies in the Gulf and Brunei manage dissent in similar ways?", b:2, why:"Cases from different regions sharing a feature: oil rents and monarchy."},
      {t:"Compare left-wing governments in Bolivia and Ecuador in the 2000s", b:0, why:"Two Andean cases within Latin America."},
      {t:"Compare populist leaders in Latin America and Southeast Asia", b:2, why:"Cases from two regions, chosen for a shared phenomenon."},
      {t:"How does Mercosur compare with ASEAN as a trade project?", b:1, why:"Regional organisations compared as wholes."}
    ]},
    {id:"e4u22-l1-x4", type:"mcq", q:"Which statement about regional scholarship is accurate?", options:[
      {t:"Dependency theory and structuralist economics were developed largely by Latin American economists linked to the UN’s regional commission", ok:true, why:"Right: Prebisch and the ECLA/CEPAL school, then Cardoso, Faletto and others."},
      {t:"African universities have produced no social theory of their own", why:"Wrong: CODESRIA, Mamdani, Mkandawire and many others are widely cited."},
      {t:"Area knowledge about the Middle East comes only from Western universities", why:"Large scholarships exist in Arabic, Persian, Turkish and Hebrew, among others."},
      {t:"Citing one scholar from a region means you know what the region thinks", why:"Scholars from the same region disagree; one voice is not a region."}
    ]},
    {id:"e4u22-l1-x5", type:"mcq", q:"A team flies into a country for two weeks, collects interviews, and publishes in a foreign journal with no local co-authors and no report back to participants. What is this usually called?", options:[
      {t:"Parachute (or extractive) research", ok:true, why:"Right: research that takes data from a place without fair partnership or return."},
      {t:"Comparative area studies", why:"CAS is a research design, not a description of unequal partnerships."},
      {t:"Process tracing", why:"Process tracing is a method of within-case causal analysis."},
      {t:"Self-orientalism", why:"That describes a society presenting itself in exotic terms."}
    ]},
    {id:"e4u22-l1-x6", type:"match", q:"Match each survey to its feature.", pairs:[
      ["Afrobarometer","Face-to-face interviews in the respondent’s chosen language in 30+ African countries","Its methods page describes nationally representative samples of 1,200–2,400 adults."],
      ["Latinobarómetro","An annual series since 1995 across 18 countries","One of the longest-running series on attitudes to democracy."],
      ["Arab Barometer","Surveys since 2006, in nine waves","Its data are publicly available."]
    ]},
    {id:"e4u22-l1-x7", type:"spot", q:"A draft introduction to a seminar paper. Tap each sentence that falls into a **framing trap**.", ask:"falls into a framing trap", parts:[
      {t:"This paper compares how Senegal and Kenya regulate mobile money.", flag:false, why:"A clear, specific comparison."},
      " ",
      {t:"Like the rest of Africa, both countries are defined by poverty and conflict.", flag:true, why:"A single story: it erases variety and treats a continent of 54 states as one."},
      " ",
      {t:"I draw on central bank reports, local newspapers and Afrobarometer data.", flag:false, why:"Good: several kinds of source, including local voices."},
      " ",
      {t:"The real decisions were made by foreign donors, so local regulators are not discussed.", flag:true, why:"Outsiders as the only actors: regulators’ choices are exactly what needs explaining."},
      " ",
      {t:"I note what my sources leave out and how my position shapes my reading.", flag:false, why:"Good reflexive practice."}
    ]}
   ],
   apply:{intro:"Practise defining a region and finding its own voices.", tasks:[
     {t:"Draw your own region", how:["Pick one of the three regions in this unit and write down which countries you would include for a question you care about.","Compare your list with one official grouping (the African Union, the UN’s regional commission, or the World Bank’s regions).","Write two sentences justifying your frame and one on what it hides."], write:"My question… My list… Official grouping… Differences… What my frame hides…"},
     {t:"Find three voices", how:["Find one scholar, one journalist and one survey from the region on a topic you choose.","Note the language each one works in and where it is published.","Note one point on which they disagree."], write:"Scholar… Journalist… Survey result… Languages… One disagreement…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Is “the Middle East” still a useful category for research, or should scholars replace it?","2. Can a researcher who does not speak a region’s languages do good area studies?","3. Does comparative area studies solve the area studies controversy, or just rename it?"], write:"My question… My position… Evidence… Counter-argument… My reply…"}
   ], proof:"A justified definition of one region, three voices from it with one disagreement noted, and a seminar paragraph."},
   read:[
     {book:"eirt", where:"Chapter 17 “Global South Perspectives”", note:"Read after this lesson: how scholars from the Global South have theorised world politics."},
     {book:"eirt", where:"Chapter 9 “Postcolonialism”", note:"Background for the single-story and Orientalism debates."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u22-l2", title:"Africa in global politics", minutes:60,
   hook:{q:"Africa is home to about 19 per cent of the world’s people. What share of the world’s people **under 25** live in Africa?", options:["About 8 per cent","About 18 per cent","About 28 per cent","About 48 per cent"], answer:2, reveal:"**About 28 per cent**, up from 10 per cent in 1950, according to the Pew Research Center’s 2026 analysis of the UN’s *World Population Prospects 2024*. Africa’s median age is about 19, and by 2100 the UN projects that 46 per cent of the world’s under-25s will be African. Whether this becomes a “demographic dividend” is one of the debates in this lesson, along with the nature of African states, the African Union’s peace and security system, and Africa’s ties with Asia."},
   goals:[
     "Explain the main scholarly debates on the post-colonial African state (juridical and empirical statehood, Herbst, Mamdani, neopatrimonialism) and their critics",
     "Describe the African Peace and Security Architecture, the role of regional economic communities and the 2023 UN financing decision",
     "Weigh the “Africa rising” narrative against its critics using evidence on growth, statistics and demography",
     "Compare China’s, Japan’s and India’s summit diplomacy with Africa, and the arguments about African agency in these relationships",
     "Discuss African politics without crisis-only framing, while treating conflict and coups accurately"
   ],
   learn:[
    {h:"The post-colonial state: four arguments", body:[
      {lead:"In 1964 the leaders of newly independent Africa made a striking choice: to keep the borders drawn by the colonial powers. Why, and what kind of states grew inside them?"},
      "Unit 1 told the story of the [[scramble-for-africa|scramble for Africa]] and of decolonisation ({{third-world-project}}). At its 1964 summit in Cairo the Organisation of African Unity resolved that members would respect the borders existing at independence, an African application of [[uti-possidetis|uti possidetis]]. Redrawing them, leaders feared, would set off endless wars. The borders held remarkably well; the states inside them became a central puzzle of comparative politics ({{african-statehood-debates}}).",
      {table:[
        ["Argument","Key work","Core claim"],
        ["Juridical vs empirical statehood","Robert Jackson and Carl Rosberg, *World Politics* (1982); Jackson, *Quasi-States* (1990)","Many states survived because international law recognised them ([[juridical-statehood|juridical statehood]]), even where they lacked full control on the ground ([[empirical-statehood|empirical statehood]])."],
        ["Power over distance","Jeffrey Herbst, *States and Power in Africa* (2000)","With low population densities, pre-colonial and colonial rulers rarely broadcast power far from the centre; fixed borders removed the war pressures that built states in Europe."],
        ["The bifurcated state","Mahmood Mamdani, *Citizen and Subject* (1996)","Colonial rule governed citizens in towns by civil law and rural “natives” through customary chiefs: a [[decentralised-despotism|decentralised despotism]] that outlived independence."],
        ["Neopatrimonialism","Michael Bratton and Nicolas van de Walle, *Democratic Experiments in Africa* (1997); Jean-François Bayart, *L’État en Afrique* (1989)","Formal bureaucracies coexist with personal networks of patronage ([[neopatrimonialism]]); Bayart called the scramble for state resources the [[politics-of-the-belly|politics of the belly]]."]
      ]},
      "Each argument has strong critics. Thandika Mkandawire (*World Politics*, 2015) argued that neopatrimonialism had become a catch-all label that could not explain why some African economies grew fast and others did not. Others note that Herbst’s Europe-based model of state-building through war may not be the right yardstick, and that Botswana, Mauritius and Cabo Verde built capable states inside inherited borders. Mamdani’s model has been criticised for flattening very different colonial experiences.",
      {warn:"These are theories about states and elites, not about “African culture”. Use them as hypotheses to test on specific countries, not as descriptions of a continent."}
    ]},
    {h:"Democracy, coups and the African Union’s rules", body:[
      "From 1990, a wave of multiparty elections swept the continent; Bratton and van de Walle studied it as a set of regime transitions with different outcomes. By the 2010s most African states held regular elections, though their quality varied widely, and debates over presidential term limits became a recurring flashpoint.",
      "The AU’s rules against coups date from the OAU’s Lomé Declaration (2000) and the African Charter on Democracy, Elections and Governance (2007). Members whose governments come to power through an [[unconstitutional-change-of-government|unconstitutional change of government]] are suspended. From 2020 a cluster of military takeovers, concentrated in the Sahel and West and Central Africa, tested those rules. Mali, Burkina Faso and Niger, suspended by the AU and pressed by ECOWAS, formed the [[alliance-of-sahel-states|Alliance of Sahel States]] (a confederation from July 2024) and left ECOWAS in January 2025 (Unit 9 has the details: {{comparative-regionalism}}).",
      "Interpretations differ. The military governments and their supporters present the takeovers as a response to insecurity and to French influence; ECOWAS, the AU and many civil society groups present them as a reversal of constitutional rule. A seminar paper should attribute each view and ask what explains the timing and location of the coups."
    ]},
    {h:"The African Peace and Security Architecture", body:[
      "Unit 9 explained the AU’s shift from non-interference to [[non-indifference]] and its Article 4(h) right to intervene. The machinery that puts these principles to work is the [[apsa|African Peace and Security Architecture]] (APSA). Its core is the [[peace-and-security-council|Peace and Security Council]], set up by a protocol adopted in Durban on 9 July 2002, in force from December 2003 and operational in early 2004. It has 15 members with equal votes and no permanent seats or vetoes ({{african-peace-security-architecture}}).",
      {fig:'<svg viewBox="0 0 340 372"><defs><marker id="e4u22-l2-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="70" y="8" width="200" height="40" rx="8" stroke-width="2"/><text x="170" y="33" text-anchor="middle">AU Assembly</text><path class="d-ink" d="M170 48 V70" stroke-width="2" marker-end="url(#e4u22-l2-ar)"/><rect class="d-rose" x="40" y="74" width="260" height="56" rx="10" stroke-width="3"/><text x="170" y="98" text-anchor="middle">Peace and Security Council</text><text class="s" x="170" y="118" text-anchor="middle">15 members, equal votes, no veto</text><rect class="d-gold" x="8" y="152" width="158" height="50" rx="8" stroke-width="2"/><text x="87" y="174" text-anchor="middle">Panel of</text><text x="87" y="191" text-anchor="middle">the Wise</text><rect class="d-gold" x="174" y="152" width="158" height="50" rx="8" stroke-width="2"/><text x="253" y="174" text-anchor="middle">Early Warning</text><text x="253" y="191" text-anchor="middle">System</text><rect class="d-gold" x="8" y="210" width="158" height="50" rx="8" stroke-width="2"/><text x="87" y="232" text-anchor="middle">African</text><text x="87" y="249" text-anchor="middle">Standby Force</text><rect class="d-gold" x="174" y="210" width="158" height="50" rx="8" stroke-width="2"/><text x="253" y="241" text-anchor="middle">Peace Fund</text><text class="s" x="170" y="280" text-anchor="middle">Four pillars that support the Council</text><path class="d-ink" d="M170 288 V306" stroke-width="2" marker-end="url(#e4u22-l2-ar)"/><rect class="d-sage" x="20" y="310" width="300" height="54" rx="10" stroke-width="2"/><text x="170" y="333" text-anchor="middle">8 regional economic communities</text><text class="s" x="170" y="352" text-anchor="middle">e.g. ECOWAS, SADC, EAC, IGAD</text></svg>', alt:"Diagram of the African Peace and Security Architecture. The AU Assembly sits at the top, with an arrow to the Peace and Security Council (15 members, equal votes, no veto). Below it are four pillars: the Panel of the Wise, the Continental Early Warning System, the African Standby Force and the Peace Fund. An arrow leads down to the eight regional economic communities, such as ECOWAS, SADC, EAC and IGAD.", cap:"APSA links the continent to its regions: the RECs are its building blocks, and often act first."},
      "Two debates run through the APSA literature:",
      {list:[
        "**Who acts first?** The AU recognises eight [[regional-economic-communities|regional economic communities]] (RECs), such as ECOWAS, SADC, the EAC and IGAD, as building blocks, and some regions run their own standby brigades. The principle of subsidiarity says the level closest to a crisis should act; in practice the AU and RECs sometimes disagree about who leads.",
        "**Who pays?** The slogan of [[african-solutions|“African solutions to African problems”]] sits uneasily with heavy reliance on outside funding. In December 2023 the UN Security Council’s Resolution 2719, adopted unanimously, agreed to consider AU requests case by case for UN assessed contributions to African-led peace support operations, capped at 75 per cent of each operation’s budget."
      ]},
      "The [[african-standby-force|African Standby Force]] has developed more slowly than planned, and many African-led operations, such as the AU’s succession of missions in Somalia since 2007, have relied on ad hoc coalitions and partner funding. Unit 12’s debates on whether peacekeeping works and on the liberal peace ({{liberal-peace-debate}}) apply here directly."
    ]},
    {h:"Conflict and peace, without the single story", body:[
      "Armed conflict remains a serious problem in parts of the continent: the war that broke out in Sudan in April 2023, violence in the eastern Democratic Republic of the Congo and insurgencies across the Sahel are examples. Unit 12’s tools ({{civil-war-onset}}, [[greed-and-grievance|greed and grievance]], [[resource-curse|the resource curse]]) and Séverine Autesserre’s work on the Congo all apply.",
      "So does the record of peace-making. Ethiopia and Eritrea made peace in 2018 after two decades of hostility; the African Union brokered an agreement between Ethiopia’s government and Tigrayan forces in Pretoria in November 2022; and most of Africa’s 54 states are not at war. Describing both patterns is not optimism or pessimism; it is accuracy."
    ]},
    {h:"Development debates: “Africa rising” and its critics", body:[
      "Unit 14 covered aid and developmental states, and Unit 15 debt, the [[afcfta|AfCFTA]] and Chinese lending. A narrative overlay frames those debates ({{africa-rising-debate}}). In May 2000 *The Economist* called Africa “the hopeless continent”; in December 2011 a famous cover announced [[africa-rising|“Africa rising”]], pointing to growth, mobile phones and a growing middle class. Commodity prices then fell, several economies ran into debt distress, and critics such as Ian Taylor (*Africa Rising? BRICS – Diversifying Dependency*, 2014) argued that growth had rested on exporting raw materials without transforming economies.",
      "The statistics themselves are contested. In *Poor Numbers* (2013), Morten Jerven showed how weak national statistical systems made African growth figures unreliable: when Ghana revised its national accounts in 2010, measured GDP rose by about 60 per cent overnight.",
      "Demography is now central. Using the UN’s *World Population Prospects 2024*, Pew Research Center (2026) reports that Africa has about 19 per cent of the world’s people and 28 per cent of its under-25s, with a median age of about 19 and a fertility rate of about 3.9 births per woman, projected to fall to 2.8 by 2050. A [[demographic-dividend|demographic dividend]], a growth boost when the working-age share rises, is possible but not automatic: it depends on jobs, education and health. The AU’s long-term plan, [[agenda-2063|Agenda 2063]], adopted in 2015, sets continental goals on industrialisation, integration and governance."
    ]},
    {h:"Africa and Asia", body:[
      "Asian powers court Africa through summit diplomacy ({{africa-asia-relations}}):",
      {table:[
        ["Forum","Since","Recent example"],
        ["[[ticad|TICAD]] (Japan)","1993; co-organised with the UN, UNDP, the World Bank and the AU Commission","TICAD 9 in Yokohama (2025) and its Yokohama Declaration"],
        ["[[focac|FOCAC]] (China)","2000","2024 Beijing summit: Xi Jinping pledged RMB 360 billion (about US$50.7 billion) over three years"],
        ["[[india-africa-forum-summit|India–Africa Forum Summit]]","2008","The third summit, in New Delhi in 2015, was the largest"]
      ]},
      "South Korea held its first Korea–Africa summit in 2024, and Türkiye and the Gulf states have also expanded their presence. Japan stresses African “ownership” and partnership; China stresses South–South solidarity and infrastructure; India stresses shared colonial history and capacity-building. Critics and defenders argue about debt (Unit 15’s [[debt-trap-diplomacy|“debt-trap” debate]]), labour and environmental standards, and whether summits produce what they promise.",
      "A growing literature insists on **African agency**: African governments set terms, play partners against each other and use the AU to negotiate collectively. Analyse each relationship from both ends.",
      {key:"Africa is not a stage on which outsiders act. It is 54 states, a continental union and eight regional communities with their own strategies, debates and scholars."},
      {terms:["juridical-statehood","empirical-statehood","decentralised-despotism","neopatrimonialism","politics-of-the-belly","unconstitutional-change-of-government","alliance-of-sahel-states","apsa","peace-and-security-council","regional-economic-communities","african-solutions","african-standby-force","africa-rising","demographic-dividend","agenda-2063","ticad","focac","india-africa-forum-summit"]}
    ]}
   ],
   try:[
    {id:"e4u22-l2-x1", type:"match", q:"Match each concept to the scholar or scholars most associated with it.", pairs:[
      ["Juridical versus empirical statehood","Robert Jackson and Carl Rosberg","*World Politics* (1982), developed in Jackson’s *Quasi-States* (1990)."],
      ["Decentralised despotism","Mahmood Mamdani","*Citizen and Subject* (1996)."],
      ["The politics of the belly","Jean-François Bayart","*L’État en Afrique* (1989), English translation 1993."],
      ["Power over distance and low population density","Jeffrey Herbst","*States and Power in Africa* (2000)."],
      ["Neopatrimonialism as a catch-all label","Thandika Mkandawire’s critique","*World Politics* (2015)."]
    ]},
    {id:"e4u22-l2-x2", type:"mcq", q:"Why, in Jeffrey Herbst’s account, did many African states struggle to project power across their territory?", options:[
      {t:"Low population densities made it costly to extend control, and fixed borders removed the pressure of interstate war that built states elsewhere", ok:true, why:"Right: his argument turns on geography, population and the international guarantee of borders."},
      {t:"African cultures reject central authority", why:"Herbst makes a structural argument, not a cultural one; cultural explanations of this kind are widely rejected."},
      {t:"The OAU redrew all colonial borders in 1964", why:"The opposite: the OAU resolved to keep the borders existing at independence."},
      {t:"Colonial powers left behind strong bureaucracies everywhere", why:"Herbst argues colonial states were mostly thin outside capitals."}
    ]},
    {id:"e4u22-l2-x3", type:"sort", q:"Is each body one of APSA’s four pillars, another part of the architecture, or outside APSA?", buckets:["One of the four pillars","Other part of APSA","Outside APSA"], items:[
      {t:"Panel of the Wise", b:0, why:"A pillar: eminent persons who support preventive diplomacy."},
      {t:"Continental Early Warning System", b:0, why:"A pillar: it monitors and analyses emerging crises."},
      {t:"African Standby Force", b:0, why:"A pillar: multinational standby units for peace support operations."},
      {t:"Peace Fund", b:0, why:"A pillar: the AU’s fund for peace and security activities."},
      {t:"Military Staff Committee", b:1, why:"A subsidiary body that advises the Peace and Security Council."},
      {t:"ECOWAS", b:1, why:"A regional economic community: one of APSA’s building blocks."},
      {t:"The UN Security Council", b:2, why:"A UN organ; it cooperates with the AU but is not part of APSA."}
    ]},
    {id:"e4u22-l2-x4", type:"mcq", q:"What did UN Security Council Resolution 2719 (December 2023) decide?", options:[
      {t:"To consider AU requests case by case for UN assessed contributions to African-led peace support operations, up to 75 per cent of each budget", ok:true, why:"Right. It opened a route to predictable funding, with a cap and case-by-case approval."},
      {t:"To fund all African peace operations in full from the UN budget", why:"Funding is neither automatic nor full; it is capped at 75 per cent."},
      {t:"To give the AU a permanent seat on the Security Council", why:"Council membership is set by the Charter; 2719 concerns financing."},
      {t:"To end all UN peacekeeping in Africa", why:"It says nothing of the kind; it is about AU-led operations."}
    ]},
    {id:"e4u22-l2-x5", type:"number", q:"At the 2024 FOCAC summit China pledged RMB 360 billion: RMB 210 billion in credit lines, RMB 80 billion in assistance and at least RMB 70 billion in investment by Chinese companies. What percentage of the total was credit lines? (Round to the nearest whole number.)", answer:58, tol:1, unit:"%", why:"210 ÷ 360 = 0.583, so about 58 per cent. Credit lines are loans, which is why the debt debate matters in reading the pledge.", wrongs:[
      {v:42, tol:1, why:"That is the share that is not credit lines (150 ÷ 360)."},
      {v:22, tol:1, why:"That is the assistance share (80 ÷ 360)."},
      {v:171, tol:2, why:"That is 360 ÷ 210 × 100: the fraction is upside down."}
    ]},
    {id:"e4u22-l2-x6", type:"sort", q:"Would each claim more likely come from a proponent of the “Africa rising” narrative or from one of its critics?", buckets:["Proponent","Critic"], items:[
      {t:"Mobile money and a growing consumer market show lasting change", b:0, why:"A typical argument behind the 2011 “Africa rising” story."},
      {t:"Growth rested on commodity exports and did not transform economies", b:1, why:"Ian Taylor and others made this point after commodity prices fell."},
      {t:"GDP figures are too unreliable to support big claims", b:1, why:"Morten Jerven’s *Poor Numbers* (2013)."},
      {t:"A young population can bring a demographic dividend", b:0, why:"An argument for optimism, though it depends on jobs and education."},
      {t:"The middle class is smaller than headline estimates suggest", b:1, why:"A common critique of broad middle-class definitions."}
    ]},
    {id:"e4u22-l2-x7", type:"spot", q:"A study note on Africa–Asia relations. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"Japan has led TICAD since 1993, co-organised with the UN, UNDP, the World Bank and the AU Commission.", flag:false, why:"Correct."},
      " ",
      {t:"FOCAC was founded by Japan in 2000.", flag:true, why:"Wrong: FOCAC is China’s Forum on China–Africa Cooperation, begun in 2000."},
      " ",
      {t:"At the 2024 Beijing summit China pledged RMB 360 billion over three years.", flag:false, why:"Correct."},
      " ",
      {t:"The first India–Africa Forum Summit met in 2008.", flag:false, why:"Correct, in New Delhi."},
      " ",
      {t:"African governments are passive recipients with no say in these forums.", flag:true, why:"Wrong: the literature on African agency shows governments and the AU negotiating, choosing and playing partners against each other."}
    ]}
   ],
   apply:{intro:"Look at Africa through its own institutions and voices.", tasks:[
     {t:"Read a Peace and Security Council communiqué", how:["Find a recent communiqué of the AU Peace and Security Council on the AU website.","Note the country or theme, what the Council decided and which regional community it mentions.","Write two neutral sentences summarising it, with the date."], write:"Date and topic… Decisions… REC mentioned… Neutral summary…"},
     {t:"One country, two stories", how:["Choose an African country. Find one recent international news story about it and one story from a newspaper published in that country.","Compare what each treats as important and whose voices each quotes."], write:"Country… International story… Local story… Differences in focus and voices…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Is “juridical statehood” still a useful idea for understanding African states today?","2. Can “African solutions to African problems” work while peace operations depend on outside money?","3. Do Asian summit forums give African states more leverage, or less?"], write:"My question… My position… Evidence… Counter-argument… My reply…"}
   ], proof:"A summary of one PSC communiqué, a comparison of international and local reporting, and a seminar paragraph."},
   read:[
     {book:"owh2", where:"Chapter 14, section 14.4 “Global Tensions and Decolonization” (subsection “Decolonization in Africa in the Shadow of the Cold War”)", note:"Background on independence, read before or after the first section."},
     {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"A short refresher on regional organisations for the APSA section."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u22-l3", title:"Latin America and the Caribbean: development, democracy and the pink tide", minutes:60,
   hook:{q:"Who is usually credited with first putting the words “Latin America” into print?", options:["A Chilean writer, in a speech in Paris","A Spanish king, in a royal decree","A US president, in a message to Congress","A Portuguese explorer, in a ship’s log"], answer:0, reveal:"**A Chilean writer in Paris.** Francisco Bilbao used “América latina” in a speech in 1856, and the Colombian José María Torres Caicedo used it in a poem the next year. Both wanted the region’s republics to unite against intervention, especially from the United States. The name later also served French ambitions. This lesson follows the region’s own debates: dependency, dictatorship and democracy, populism, the pink tide, and its place between the United States, Europe and Asia."},
   goals:[
     "Link Latin America’s development debates (structuralism, the debt crisis, reform and the commodity boom) to Units 14 and 15",
     "Explain bureaucratic authoritarianism, pacted transitions, the third wave and delegative democracy, with their authors",
     "Compare ideational, strategic and discursive definitions of populism and apply them neutrally",
     "Describe the pink tide, the turns that followed it and the competing explanations, dated as of November 2026",
     "Compare the region’s overlapping regional bodies and its growing ties with Asia"
   ],
   learn:[
    {h:"From structuralism to the commodity boom", body:[
      {lead:"Few regions have argued about development as long, or exported as many development ideas, as Latin America."},
      "Unit 14 told how Raúl Prebisch and the UN Economic Commission for Latin America argued that falling [[terms-of-trade|terms of trade]] trapped commodity exporters ([[prebisch-singer-thesis]]), and how Cardoso and Faletto described [[dependent-development|dependent development]] ({{dependency-debates}}). Many governments followed [[import-substitution|import-substituting industrialisation]] from the 1930s to the 1970s.",
      "Then came the debt crisis. In August 1982 Mexico announced it could not service its foreign debt, and crisis spread across the region. The 1980s became known in the region as the “lost decade”. Governments turned, often under [[imf|IMF]] programmes, to [[structural-adjustment|structural adjustment]] and the reforms summarised as the [[washington-consensus|Washington Consensus]] (Unit 14: {{washington-consensus-debate}}; Unit 15: {{financial-crises-ipe}}).",
      "From the early 2000s, Chinese demand fuelled a [[commodity-boom|commodity boom]] in soy, copper, iron ore and oil. Growth and social spending rose, and poverty fell in many countries. When prices fell after about 2013–14, budgets tightened again. The boom matters for politics: it paid for the programmes of the pink tide, and its end helped bring the turns that followed."
    ]},
    {h:"Dictatorship and democratisation", body:[
      "Mid-century [[modernization-theory|modernisation theory]] expected industrialisation to bring democracy. Guillermo O’Donnell’s *Modernization and Bureaucratic-Authoritarianism* (1973) argued the opposite for South America’s most industrialised countries: in Brazil after 1964 and Argentina after 1966, military rulers and civilian technocrats seized power to restrain popular demands and deepen industry. He called these regimes [[bureaucratic-authoritarianism|bureaucratic-authoritarian]] ({{guillermo-odonnell}}).",
      "When the military regimes fell, O’Donnell and Philippe Schmitter’s *Tentative Conclusions about Uncertain Democracies* (1986), the final volume of *Transitions from Authoritarian Rule*, emphasised uncertainty and elite choices: splits between regime “hardliners” and “softliners”, and bargains with moderate opponents. A negotiated exit is a [[pacted-transition|pacted transition]]; Brazil’s gradual opening and Chile’s 1988 plebiscite are often discussed in these terms.",
      "Samuel Huntington placed these changes in a global [[third-wave-democratisation|third wave of democratisation]] (*The Third Wave*, 1991), which he dated from Portugal’s revolution of April 1974 ({{latin-american-democratisation}}).",
      {fig:'<svg viewBox="0 0 340 400"><path class="d-ink" d="M40 20 V384" stroke-width="3"/><circle class="d-inkf" cx="40" cy="34" r="6"/><text x="58" y="30">1930s–1970s</text><text class="s" x="58" y="48">Import substitution; military rule</text><circle class="d-inkf" cx="40" cy="96" r="6"/><text x="58" y="92">1980s</text><text class="s" x="58" y="110">Debt crisis, the “lost decade”;</text><text class="s" x="58" y="126">transitions to democracy</text><circle class="d-inkf" cx="40" cy="170" r="6"/><text x="58" y="166">1990s</text><text class="s" x="58" y="184">Market reforms; neoliberal populism</text><circle class="d-rose" cx="40" cy="232" r="8" stroke-width="2"/><text x="58" y="228">1998–2015</text><text class="s" x="58" y="246">Commodity boom; first pink tide</text><circle class="d-inkf" cx="40" cy="294" r="6"/><text x="58" y="290">2015–2022</text><text class="s" x="58" y="308">Right turn, then a second pink tide</text><circle class="d-gold" cx="40" cy="356" r="8" stroke-width="2"/><text x="58" y="352">2023–2026</text><text class="s" x="58" y="370">Conservative wins; Lula re-elected</text></svg>', alt:"A vertical timeline. 1930s to 1970s: import substitution and military rule. 1980s: debt crisis, the lost decade, and transitions to democracy. 1990s: market reforms and neoliberal populism. 1998 to 2015, highlighted: commodity boom and the first pink tide. 2015 to 2022: a right turn, then a second pink tide. 2023 to 2026, highlighted: a run of conservative election wins, then Lula’s re-election in Brazil.", cap:"A simplified political-economic timeline. Countries moved at different times; use it as a map, not a law."},
      "Democracy survived but with recognised weaknesses. Juan Linz’s “The Perils of Presidentialism” (*Journal of Democracy*, 1990) argued that fixed terms and dual legitimacy between president and congress make crises harder to resolve; others replied that presidential systems work well with suitable parties and rules. O’Donnell’s “Delegative Democracy” (1994) described elected presidents who govern as they see fit between elections, with weak checks: a [[delegative-democracy|delegative democracy]]. Scott Mainwaring and Aníbal Pérez-Liñán (*Democracies and Dictatorships in Latin America*, 2013) stressed actors’ normative commitments to democracy and regional diffusion."
    ]},
    {h:"Populism: one word, three definitions", body:[
      "Few words are used as loosely. Seminar discussions usually distinguish three approaches ({{populism-debates}}):",
      {table:[
        ["Approach","Key author","Populism is…"],
        ["Ideational","Cas Mudde, “The Populist Zeitgeist” (2004)","A [[thin-centred-ideology|thin-centred ideology]] dividing society into “the pure people” and “the corrupt elite”, with politics as the people’s general will"],
        ["Strategic","Kurt Weyland, *Comparative Politics* (2001)","A way of winning and holding power: a personalist leader appeals directly to large, weakly organised followings"],
        ["Discursive","Ernesto Laclau, *On Populist Reason* (2005)","A logic that builds a “people” by linking unmet demands against a common opponent"]
      ]},
      "[[populism|Populism]] in Latin America is often told in waves. **Classical** populists such as Juan Perón in Argentina and Getúlio Vargas in Brazil mobilised urban workers from the 1930s–50s. In the 1990s, Kenneth Roberts (*World Politics*, 1995) and Weyland described [[neoliberal-populism|neoliberal populism]]: leaders such as Alberto Fujimori in Peru and Carlos Menem in Argentina combined personalist appeals with market reforms, showing that populism is not tied to one economic policy. From 1998 **radical-left** leaders such as Hugo Chávez, Evo Morales and Rafael Correa used populist appeals in the name of the poor and of new constitutions.",
      "More recent leaders on the right are classified differently by different scholars: some call them populist, others radical right, libertarian or “strongman”. In a paper, name your definition, apply it to the leader’s words and actions, and cite who disagrees.",
      {warn:"“Populist” is not a polite word for “a politician I dislike”. Under the ideational definition, leaders of the left and the right can both be populist, and many politicians of both are not."},
      "Is populism good or bad for democracy? Cas Mudde and Cristóbal Rovira Kaltwasser argue it can be both: a **corrective** that brings excluded groups into politics, and a **threat** when it attacks courts, media and oppositions as enemies of “the people”."
    ]},
    {h:"The pink tide and its turns", body:[
      "The [[pink-tide|pink tide]] (pink, as a softer shade of red) names the wave of left and centre-left election victories that began with Chávez in Venezuela in 1998 and spread through Brazil (Lula, 2002), Argentina, Uruguay, Bolivia, Ecuador, Chile and others ({{pink-tide}}).",
      "Scholars debate both its unity and its causes. Jorge Castañeda (*Foreign Affairs*, 2006) divided it into a “right” social-democratic left and a “wrong” populist left; critics, including contributors to Steven Levitsky and Kenneth Roberts’s *The Resurgence of the Latin American Left* (2011), preferred more careful typologies based on party organisation and the concentration of power. Explanations stress reaction against the inequality left by 1990s reforms, the consolidation of democracy, which let the left win elections, and the commodity boom, which paid for new social programmes.",
      "Then the tide turned, and turned again. Right-of-centre candidates won in Argentina (2015), Chile (2017), Brazil (2018) and elsewhere; a “second pink tide” followed, from Mexico (2018) to Colombia and Brazil (2022). In 2023 Javier Milei, a self-described libertarian, won Argentina’s presidency. When Lula won Brazil’s run-off on 25 October 2026 by 51.8 to 48.2 per cent against Flávio Bolsonaro, the Associated Press reported that it ended a run of seven straight conservative presidential victories in the region in 18 months, including José Antonio Kast in Chile, Keiko Fujimori in Peru and Abelardo de la Espriella in Colombia.",
      {key:"Many political scientists read these swings less as ideological waves than as voters punishing incumbents for inflation, slow growth, crime and corruption. Test that explanation against the “tide” metaphor in your own work."}
    ]},
    {h:"Many regional bodies, overlapping", body:[
      "The primer introduced [[mercosur|Mercosur]] and Unit 9 the OAS and its [[democracy-clause|democracy clause]]. Latin America’s regionalism is unusually crowded, and its bodies often reflect the political mood of the moment ({{latin-american-regionalism}}):",
      {table:[
        ["Body","Founded","Notes"],
        ["Mercosur","1991 (Treaty of Asunción)","Customs union; Bolivia a full member from 2024; trade agreement with the EU signed 17 January 2026, provisionally applied from 1 May 2026, with legal challenges by EU lawmakers pending at the EU’s Court of Justice"],
        ["[[alba|ALBA]]","2004","Begun by Venezuela and Cuba as a left-wing alternative to US-led trade plans"],
        ["[[unasur|UNASUR]]","2008","South American union; several members suspended participation in 2018 and many left; Brazil rejoined in 2023"],
        ["[[celac|CELAC]]","2011","All 33 states of Latin America and the Caribbean, without the US or Canada"],
        ["[[pacific-alliance|Pacific Alliance]]","2011","Chile, Colombia, Mexico and Peru: trade-oriented and Asia-facing"]
      ]},
      "Pía Riggirozzi and Diana Tussie called the bodies of the 2000s “post-hegemonic” regionalism (2012): projects that put social policy and autonomy from the United States ahead of trade. Critics reply that bodies built around like-minded governments decline when governments change, as UNASUR did."
    ]},
    {h:"Latin America and Asia; people on the move", body:[
      "Asia is now central to the region’s economy. China is the largest trading partner of several South American countries and a major lender and investor (Unit 15: {{china-overseas-lending}}); the port of Chancay in Peru, majority-owned by the Chinese company COSCO Shipping, opened in November 2024. A China–CELAC Forum has met at ministerial level since 2015. Chile, Mexico and Peru belong to APEC and the [[cptpp|CPTPP]].",
      "Japan’s ties are older and human. Japanese migration to Brazil began in 1908, and Brazil has the largest population of Japanese descent outside Japan. From 1990 Japan’s immigration rules eased entry for descendants of Japanese emigrants, and many Brazilian and Peruvian *Nikkei* moved to Japan to work: a reversed migration that the migration primer’s ideas of [[diaspora]] and return help explain.",
      "Migration is also a regional story. Millions of Venezuelans have left their country since the mid-2010s, most to other Latin American states; Colombia’s 2021 temporary protection status for them is a much-studied case (see the migration primer, {{refugees-and-displacement}}). [[remittances|Remittances]] from the United States sustain many households in Mexico and Central America.",
      {terms:["commodity-boom","bureaucratic-authoritarianism","pacted-transition","third-wave-democratisation","delegative-democracy","thin-centred-ideology","populism","neoliberal-populism","pink-tide","alba","unasur","celac","pacific-alliance"]}
    ]}
   ],
   try:[
    {id:"e4u22-l3-x1", type:"order", q:"Put these events in chronological order.", items:[
      {t:"Military coup in Brazil, the first of O’Donnell’s bureaucratic-authoritarian cases", why:"1964."},
      {t:"Portugal’s revolution, which Huntington took as the start of the third wave", why:"April 1974."},
      {t:"Mexico announces it cannot service its debt", why:"August 1982, the start of the regional debt crisis."},
      {t:"Hugo Chávez wins Venezuela’s presidential election", why:"1998: often taken as the start of the pink tide."},
      {t:"CELAC is founded", why:"2011."},
      {t:"Lula wins Brazil’s run-off against Flávio Bolsonaro", why:"25 October 2026."}
    ]},
    {id:"e4u22-l3-x2", type:"match", q:"Match each definition of populism to its main author.", pairs:[
      ["A thin-centred ideology opposing a pure people to a corrupt elite","Cas Mudde (2004)","The ideational approach, the most used in comparative research today."],
      ["A strategy by which a personalist leader seeks direct, unmediated support","Kurt Weyland (2001)","The strategic or political-institutional approach."],
      ["A logic that builds “the people” by linking unmet demands against an enemy","Ernesto Laclau (2005)","The discursive approach, influential in political theory."]
    ]},
    {id:"e4u22-l3-x3", type:"mcq", q:"An elected president governs by decree, treats congress and courts as obstacles, and says his election gives him a mandate to act as he sees fit until the next vote. Which concept fits best?", options:[
      {t:"Delegative democracy (O’Donnell, 1994)", ok:true, why:"Right: democratic elections with weak horizontal accountability between them."},
      {t:"Bureaucratic authoritarianism", why:"That describes military-technocratic regimes that took power by coups, not elected presidents."},
      {t:"A pacted transition", why:"That describes a negotiated exit from authoritarian rule."},
      {t:"Consociational democracy", why:"That describes power-sharing among groups, the opposite of one person’s mandate."}
    ]},
    {id:"e4u22-l3-x4", type:"sort", q:"Sort each leader into the wave of populism scholars usually place them in.", buckets:["Classical (1930s–50s)","Neoliberal (1990s)","Radical left (from 1998)"], items:[
      {t:"Juan Perón (Argentina)", b:0, why:"Mobilised urban workers from the 1940s."},
      {t:"Getúlio Vargas (Brazil)", b:0, why:"A classical populist of the 1930s–50s."},
      {t:"Alberto Fujimori (Peru)", b:1, why:"Combined personalist appeals with market reforms in the 1990s."},
      {t:"Carlos Menem (Argentina)", b:1, why:"A Peronist who carried out market reforms in the 1990s."},
      {t:"Hugo Chávez (Venezuela)", b:2, why:"Elected in 1998 on an anti-establishment, left-wing platform."},
      {t:"Rafael Correa (Ecuador)", b:2, why:"Elected in 2006; often grouped with Chávez and Morales."}
    ]},
    {id:"e4u22-l3-x5", type:"mcq", q:"Which explanation of the pink tide do most scholars treat as **one important factor among several**?", options:[
      {t:"The commodity boom, which paid for new social programmes", ok:true, why:"Right: widely cited alongside reaction against inequality and democratic consolidation."},
      {t:"A secret coordination plan among all left parties", why:"There is no evidence of this; the governments differed greatly."},
      {t:"The end of elections in the region", why:"The opposite: left parties won elections."},
      {t:"US encouragement of left-wing governments", why:"US policy did not promote these governments; several had tense relations with Washington."}
    ]},
    {id:"e4u22-l3-x6", type:"number", q:"In Brazil’s run-off of 25 October 2026, Lula won 51.8 per cent of the vote and Flávio Bolsonaro 48.2 per cent. What was the winning margin in percentage points?", answer:3.6, tol:0.05, unit:"points", why:"51.8 − 48.2 = 3.6 percentage points. A margin is the difference between the two shares.", wrongs:[
      {v:7.5, tol:0.2, why:"That is the margin divided by Bolsonaro’s share (3.6 ÷ 48.2 × 100): a relative difference, not percentage points."},
      {v:100, tol:0.5, why:"That is the sum of the two shares, not the difference."},
      {v:1.8, tol:0.05, why:"That is how far Lula was above 50 per cent, half of the margin."}
    ]},
    {id:"e4u22-l3-x7", type:"spot", q:"A study note on regional bodies. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"CELAC brings together all 33 states of Latin America and the Caribbean.", flag:false, why:"Correct."},
      " ",
      {t:"The United States and Canada are full members of CELAC.", flag:true, why:"Wrong: CELAC deliberately excludes them, unlike the OAS."},
      " ",
      {t:"The Pacific Alliance’s members are Chile, Colombia, Mexico and Peru.", flag:false, why:"Correct."},
      " ",
      {t:"The EU and Mercosur signed a trade agreement in January 2026.", flag:false, why:"Correct: signed on 17 January 2026."},
      " ",
      {t:"UNASUR has grown steadily stronger since 2008, with no withdrawals.", flag:true, why:"Wrong: several members suspended participation in 2018 and many left; Brazil rejoined only in 2023."}
    ]}
   ],
   apply:{intro:"Apply the concepts to real Latin American politics, neutrally.", tasks:[
     {t:"Code a speech for populism", how:["Find a translated campaign speech by a Latin American president or candidate (any side).","Mark passages that divide “the people” from “the elite”, and passages that do not.","Decide whether the ideational definition fits, and note what a strategic definition would look at instead."], write:"Speaker, date, source… Passages for… Passages against… My judgement… What a strategic approach adds…"},
     {t:"Check the opinion data", how:["Open a recent Latinobarómetro report.","Find the share of respondents in two countries who say democracy is preferable to any other form of government, with the year.","Suggest one reason for the difference and how you would test it."], write:"Country 1, figure, year… Country 2, figure, year… Possible reason… How to test it…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Was the pink tide a coherent political project or a label for unrelated victories?","2. Is populism a corrective or a threat to democracy in Latin America?","3. Should Latin American governments see China as a partner for diversification or a new source of dependency?"], write:"My question… My position… Evidence… Counter-argument… My reply…"}
   ], proof:"A coded speech with a judgement on the definition, two survey figures with a hypothesis, and a seminar paragraph."},
   read:[
     {book:"owh2", where:"Chapter 14, section 14.4 “Global Tensions and Decolonization” (subsection “Tensions in Latin America”)", note:"The Cold War background to military rule and US interventions."},
     {book:"eirt", where:"Chapter 17 “Global South Perspectives”", note:"How dependency and other Latin American ideas entered IR theory."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u22-l4", title:"The Middle East and North Africa: states, oil, uprisings and peace", minutes:65,
   hook:{q:"About a fifth of the world’s oil consumption passed through the Strait of Hormuz in 2024. Roughly what share of the crude oil and condensate moving through the strait went to Asian markets?", options:["About a quarter","About half","About two-thirds","About 84 per cent"], answer:3, reveal:"**About 84 per cent**, according to the US Energy Information Administration; China, India, Japan and South Korea alone took 69 per cent. The Gulf’s security is therefore an Asian question as much as a Western one, as the disruption of shipping through the strait during the 2026 war involving Iran showed. This lesson moves from how the region’s states were made to oil, the Arab uprisings, the Gulf states’ rise, the Israeli–Palestinian conflict and normalisation, and Asia’s stake in all of them."},
   goals:[
     "Explain how the post-Ottoman state system was formed and evaluate the “artificial borders” argument",
     "Use rentier state theory, its critics and the idea of late rentierism to analyse Gulf politics",
     "Compare the paths of the Arab uprisings since 2010–11 and the main explanations of authoritarian durability",
     "Describe the Gulf states’ growing regional and global role",
     "Present the Israeli–Palestinian conflict and Arab–Israeli normalisation neutrally, with attributed positions dated as of November 2026",
     "Explain Asia’s energy and economic stake in the region"
   ],
   learn:[
    {h:"States and borders after empire", body:[
      {lead:"In 2014 a militant group filmed itself bulldozing a sand berm on the Iraq–Syria border and declared “the end of Sykes–Picot”. Was that agreement really the origin of today’s borders?"},
      "The [[sykes-picot-agreement|Sykes–Picot Agreement]] of May 1916 was a secret Anglo-French plan to divide Ottoman Arab lands into zones of control. In November 1917 Britain’s Balfour Declaration supported “a national home for the Jewish people” in Palestine. After the war, the League’s [[mandate-system|mandate system]] (Unit 1) gave Britain Iraq and Palestine (from which Transjordan was soon administered separately), and France Syria and Lebanon, a division agreed at San Remo in 1920.",
      "Popular writing often says Sykes–Picot “drew the map” of the Middle East. Historians are more cautious: the actual borders came from later agreements, the Treaty of Lausanne (1923), boundary commissions and local politics, and differ from the 1916 lines. Some, such as the historian Sara Pursley (2015), add that the story of uniquely “artificial” borders is itself a legend: all borders are made, and these were shaped by negotiation and local politics as well as by imperial plans.",
      "The region’s states also differ widely in origin. Turkey and Iran were never formally colonised, though both faced foreign occupation or spheres of influence; Egypt and Morocco had long histories as political units; Saudi Arabia was proclaimed a unified kingdom in 1932 after three decades of conquest; Algeria won independence after a long war in 1962. Monarchies and republics, oil states and non-oil states, sit side by side."
    ]},
    {h:"Oil and the rentier state", body:[
      "Why do oil-rich states so often stay authoritarian? The Iranian economist Hossein Mahdavy (1970) coined the idea of the [[rentier-state|rentier state]]: one living on external rents, such as oil revenue paid by foreigners, rather than on taxing its citizens. Hazem Beblawi and Giacomo Luciani’s edited volume *The Rentier State* (1987) made it a theory ({{rentier-state-theory}}). Luciani contrasted the [[allocation-state|allocation state]], which distributes oil income, with the production state, which must tax a productive economy.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u22-l4-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-gold" x="60" y="8" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="28" text-anchor="middle">Oil and gas rents</text><text class="s" x="170" y="45" text-anchor="middle">paid by foreign buyers</text><path class="d-ink" d="M170 54 V76" stroke-width="2" marker-end="url(#e4u22-l4-ar)"/><rect class="d-rose" x="60" y="80" width="220" height="46" rx="8" stroke-width="3"/><text x="170" y="100" text-anchor="middle">The state</text><text class="s" x="170" y="117" text-anchor="middle">receives and allocates</text><path class="d-ink" d="M170 126 V148" stroke-width="2" marker-end="url(#e4u22-l4-ar)"/><rect class="d-soft" x="20" y="152" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="174" text-anchor="middle">Citizens</text><text class="s" x="170" y="192" text-anchor="middle">public jobs, subsidies, services;</text><text class="s" x="170" y="207" text-anchor="middle">low or no income tax</text><path class="d-ink" d="M170 214 V236" stroke-width="2" marker-end="url(#e4u22-l4-ar)"/><rect class="d-panel" x="20" y="240" width="300" height="80" rx="8" stroke-width="1"/><text x="170" y="262" text-anchor="middle">Predicted result</text><text class="s" x="170" y="282" text-anchor="middle">weaker demands for representation</text><text class="s" x="170" y="298" text-anchor="middle">(“no taxation, no representation”);</text><text class="s" x="170" y="314" text-anchor="middle">critics: opposition still emerges</text></svg>', alt:"A vertical flow diagram of the rentier state. Oil and gas rents, paid by foreign buyers, flow to the state, which receives and allocates them. The state passes them to citizens as public jobs, subsidies and services, with low or no income tax. The predicted result is weaker demands for representation, summed up as no taxation, no representation; critics note that opposition still emerges.", cap:"The core mechanism of rentier state theory, and the point its critics contest."},
      "Michael Ross tested the idea statistically in “Does Oil Hinder Democracy?” (*World Politics*, 2001) and *The Oil Curse* (2012), linking it to the [[resource-curse|resource curse]] of Unit 12. Critics reply that oil does not stop political demands: Gwenn Okruhlik (1999) showed opposition arising in Saudi Arabia from the unequal way rents were shared, and Michael Herb (*The Wages of Oil*, 2014) showed how much Gulf states differ from one another.",
      "Matthew Gray’s theory of [[late-rentierism|late rentierism]] (Center for International and Regional Studies, Georgetown University in Qatar, 2011) describes how Gulf states have adapted to globalisation: more responsive (though not democratic), more entrepreneurial, investing abroad and branding themselves. Diversification plans such as Saudi Arabia’s Vision 2030 (2016) and the energy transition (Unit 16: {{energy-transition-politics}}) test the model."
    ]},
    {h:"The Arab uprisings and after", body:[
      "On 17 December 2010 a Tunisian street vendor, Mohamed Bouazizi, set himself on fire after a confrontation with officials. Protests forced President Ben Ali to flee on 14 January 2011, and Egypt’s President Mubarak resigned on 11 February. Uprisings followed in Libya, Yemen, Bahrain, Syria and elsewhere ({{arab-uprisings}}). Outcomes diverged sharply:",
      {list:[
        "**Tunisia** adopted a democratic constitution in 2014; in July 2021 President Kais Saied suspended parliament and later governed by decree, which supporters called a correction and opponents a reversal.",
        "**Egypt’s** elected president, Mohamed Morsi, was removed by the military in 2013.",
        "**Libya, Yemen and Syria** fell into civil wars with heavy foreign involvement. Syria’s President Bashar al-Assad was overthrown in December 2024.",
        "**Most monarchies** survived; in Bahrain, troops from Gulf neighbours helped the government suppress protests in 2011."
      ]},
      "A second wave in 2019 removed long-serving rulers in Sudan and Algeria and shook Iraq and Lebanon. Explanations of who survived draw on Eva Bellin’s argument (2004, revisited 2012) that a coercive apparatus willing and able to repress decides outcomes; on the resources and alliances of monarchies (Sean Yom and Gregory Gause, 2012); and on Asef Bayat’s *Revolution without Revolutionaries* (2017), which argued that the movements lacked a programme for taking power. Unit 7 covers the role of social media."
    ]},
    {h:"The Gulf states’ rising role", body:[
      "The [[gcc|Gulf Cooperation Council]] (1981) links Saudi Arabia, Kuwait, Bahrain, Qatar, the UAE and Oman. A rift in which four states cut ties with Qatar (2017) ended with the Al-Ula Declaration in January 2021. Gulf states now act as financiers, mediators and brand-builders far beyond the region ({{gulf-states-rising}}): Qatar and Oman host talks between adversaries; Saudi Arabia and Iran restored relations in an agreement brokered in Beijing in March 2023; sovereign wealth funds invest worldwide; Qatar’s 2022 World Cup (Unit 8) showed the use of sport.",
      "Kristian Coates Ulrichsen (*The Gulf States in International Political Economy*, 2016) reads this as small and medium states converting wealth into influence. Critics point to human rights records and the treatment of migrant workers under the [[kafala]] sponsorship system (migration primer), which several governments say they have reformed."
    ]},
    {h:"The Israeli–Palestinian conflict and normalisation", body:[
      "This conflict is one of the most contested subjects in international studies. Seminars expect precise dates, attributed positions and neutral wording ({{israeli-palestinian-conflict}}).",
      {list:[
        "**1947–49.** In November 1947 the UN General Assembly recommended partitioning Palestine into Jewish and Arab states. Israel declared independence on 14 May 1948. In the war that followed, more than half of Palestine’s Arab population was permanently displaced, according to the UN: Palestinians call this the [[nakba|Nakba]] (“catastrophe”). The two events are remembered very differently, and both narratives are part of the history.",
        "**1967.** Israel took the West Bank, East Jerusalem, Gaza, the Golan Heights and Sinai. Security Council Resolution 242 set out the “land for peace” principle.",
        "**1993–95.** In the [[oslo-accords|Oslo Accords]] Israel and the PLO recognised each other and created the Palestinian Authority; final-status issues (borders, Jerusalem, refugees, settlements, security) were left for later and remain unresolved.",
        "**2023–26.** On 7 October 2023 a Hamas-led attack killed about 1,200 people in Israel and took 251 hostages. Israel’s military campaign in Gaza followed; by October 2026 Gaza’s Health Ministry reported more than 74,000 Palestinians killed. A ceasefire under a US-brokered 20-point plan began in October 2025, and Security Council Resolution 2803 (17 November 2025) endorsed the plan and authorised a temporary International Stabilization Force."
      ]},
      "**As of November 2026** the ceasefire had not been formally ended, but it was fragile. The Associated Press reported in October 2026 that all hostages had been released; that Israeli strikes had killed more than 1,400 Palestinians since the ceasefire began, according to Gaza’s Health Ministry; that Hamas had agreed in July to disarm gradually, while Israel’s government said it would not withdraw until Hamas was completely disarmed; that Israel controlled more than half of Gaza; and that the stabilisation force announced in February had not deployed. AP added that a return to fighting could not be ruled out.",
      "On the final outcome, positions differ. The [[two-state-solution|two-state solution]] is the stated aim of the UN and most governments; 156 of 193 UN member states recognised the State of Palestine by September 2025 (Council on Foreign Relations), with the United States, Germany, Italy and Japan among those that did not. Israel’s government under Benjamin Netanyahu, in a caretaker role after the October 2026 election while coalition talks continued, opposes a Palestinian state, citing security. The Palestinian Authority seeks a state on the 1967 lines with East Jerusalem as its capital.",
      "[[diplomatic-normalisation|Normalisation]] between Israel and Arab states began with Egypt (1979) and Jordan (1994). The [[abraham-accords|Abraham Accords]] of September 2020 added the UAE and Bahrain, followed by Morocco and Sudan (which signed but has not established full diplomatic relations); Kazakhstan announced in November 2025 that it would join, though its signing ceremony had not taken place by late September 2026 ({{arab-israeli-normalisation}}). Supporters present normalisation as a path to regional stability and prosperity; critics, including Palestinian leaders, argue that it sidelines Palestinian statehood.",
      {warn:"Use each side’s terms with attribution (“what Palestinians call the Nakba”; “what Israel calls its War of Independence”), give sources for figures, and avoid predicting outcomes."}
    ]},
    {h:"Asia’s stake", body:[
      "Asia is the region’s largest energy customer. In 2024 about 20 million barrels of oil a day, and around a fifth of global LNG trade, passed through the Strait of Hormuz, a [[chokepoint]] 39 km wide at its narrowest; most went to Asia (US EIA, 2025). In early 2026, during the war involving Iran, the UN reported that traffic fell from about 150 ships a day to four or five. From late 2023, attacks on shipping by Yemen’s Houthi movement also pushed many vessels away from the Red Sea route.",
      "Asian states’ responses differ: China’s 2023 role in Saudi–Iranian talks, the India–Middle East–Europe Economic Corridor, announced by India, Saudi Arabia, the UAE, the US, the EU and others at the G20 summit in New Delhi in 2023, and Japan and South Korea’s efforts to diversify supply. Millions of workers from South and Southeast Asia live in the Gulf, linking the regions through [[remittances]] too.",
      {terms:["sykes-picot-agreement","rentier-state","allocation-state","late-rentierism","arab-uprisings","gcc","nakba","oslo-accords","two-state-solution","diplomatic-normalisation","abraham-accords","chokepoint"]}
    ]}
   ],
   try:[
    {id:"e4u22-l4-x1", type:"mcq", q:"A classmate says: “The Sykes–Picot Agreement drew today’s borders of Iraq and Syria.” What is the best reply?", options:[
      {t:"It set out Anglo-French zones in 1916, but the actual borders came from later agreements such as San Remo (1920), Lausanne (1923) and boundary commissions", ok:true, why:"Right: historians separate the 1916 plan from the borders that emerged after the war."},
      {t:"It is correct: the borders follow the 1916 lines exactly", why:"The post-war borders differ substantially from the 1916 zones."},
      {t:"Sykes–Picot was signed by the Ottoman Empire", why:"It was a secret Anglo-French agreement; the Ottomans were not party to it."},
      {t:"The borders were drawn by the UN in 1945", why:"The mandates and borders predate the UN."}
    ]},
    {id:"e4u22-l4-x2", type:"match", q:"Match each idea to its author.", pairs:[
      ["The term “rentier state” (1970)","Hossein Mahdavy","Writing about Iran’s economy."],
      ["*The Rentier State* (1987), an edited volume","Hazem Beblawi and Giacomo Luciani","It turned the idea into a theory."],
      ["“Does Oil Hinder Democracy?” (2001)","Michael Ross","A statistical test across many countries."],
      ["Late rentierism (2011)","Matthew Gray","How Gulf states adapted rentierism to globalisation."],
      ["*Revolution without Revolutionaries* (2017)","Asef Bayat","On why the Arab uprisings did not take power."]
    ]},
    {id:"e4u22-l4-x3", type:"sort", q:"In 2011, did the ruler of each country leave office, or did the regime survive the uprisings of that year?", buckets:["Ruler left office in 2011","Regime survived 2011"], items:[
      {t:"Tunisia", b:0, why:"Ben Ali fled on 14 January 2011."},
      {t:"Egypt", b:0, why:"Mubarak resigned on 11 February 2011."},
      {t:"Bahrain", b:1, why:"The monarchy survived, helped by troops from Gulf neighbours."},
      {t:"Syria", b:1, why:"Assad survived 2011 and a long civil war; he was overthrown only in December 2024."},
      {t:"Libya", b:0, why:"Gaddafi was overthrown and killed in 2011."},
      {t:"Morocco", b:1, why:"The king announced constitutional reforms and the monarchy remained."}
    ]},
    {id:"e4u22-l4-x4", type:"order", q:"Put these events in chronological order.", items:[
      {t:"The Balfour Declaration", why:"November 1917."},
      {t:"The UN General Assembly recommends partition of Palestine", why:"November 1947."},
      {t:"The June war; Security Council Resolution 242", why:"1967."},
      {t:"Egypt–Israel peace treaty", why:"1979."},
      {t:"The Oslo Accords", why:"1993 (and a second agreement in 1995)."},
      {t:"The Abraham Accords", why:"September 2020."},
      {t:"A ceasefire in Gaza under a US-brokered plan", why:"October 2025."}
    ]},
    {id:"e4u22-l4-x5", type:"mcq", q:"Which sentence is written in the neutral, attributed style expected in a seminar paper?", options:[
      {t:"“Israel’s government opposes a Palestinian state, citing security, while the Palestinian Authority seeks a state on the 1967 lines with East Jerusalem as its capital.”", ok:true, why:"Right: each position is attributed to its holder and stated in their terms."},
      {t:"“Everyone knows the two-state solution is dead.”", why:"An unattributed opinion presented as fact."},
      {t:"“The Nakba is a myth.”", why:"Denies a documented history; the UN records the mass displacement of 1948."},
      {t:"“Israel’s independence was simply a colonial plot.”", why:"A one-sided claim presented as fact; it ignores the other narrative and the history."}
    ]},
    {id:"e4u22-l4-x6", type:"number", q:"UN News reported that before the 2026 war about 150 vessels a day passed through the Strait of Hormuz, falling to about five a day. By what percentage did daily traffic fall? (Round to the nearest whole number.)", answer:97, tol:1, unit:"%", why:"(150 − 5) ÷ 150 = 145 ÷ 150 ≈ 0.967, so about 97 per cent.", wrongs:[
      {v:3, tol:1, why:"That is the share of traffic that remained (5 ÷ 150), not the fall."},
      {v:145, tol:1, why:"That is the fall in ships per day, not a percentage."},
      {v:2900, tol:50, why:"That divides by the new figure (145 ÷ 5): the base for a fall is the starting value."}
    ]},
    {id:"e4u22-l4-x7", type:"spot", q:"A draft paragraph on the Gulf states. Tap each sentence that is **wrong**.", ask:"is wrong", parts:[
      {t:"The Gulf Cooperation Council was founded in 1981.", flag:false, why:"Correct."},
      " ",
      {t:"Iran is a founding member of the GCC.", flag:true, why:"Wrong: the six members are Saudi Arabia, Kuwait, Bahrain, Qatar, the UAE and Oman."},
      " ",
      {t:"The rift with Qatar that began in 2017 ended with the Al-Ula Declaration in January 2021.", flag:false, why:"Correct."},
      " ",
      {t:"Saudi Arabia and Iran restored relations in an agreement brokered in Beijing in 2023.", flag:false, why:"Correct: March 2023."},
      " ",
      {t:"Rentier state theory predicts that oil wealth makes citizens demand more representation.", flag:true, why:"Wrong: it predicts weaker demands, because the state does not need to tax citizens."}
    ]}
   ],
   apply:{intro:"Practise precise, neutral analysis of the region.", tasks:[
     {t:"Read a primary document", how:["Read Security Council Resolution 242 (1967) or 2803 (2025) on the UN’s website.","List what it asks each party to do.","Note one phrase whose interpretation is disputed, and how each side reads it."], write:"Resolution… Requests to each party… Disputed phrase… Readings…"},
     {t:"Test rentier theory on one country", how:["Choose a Gulf state and one non-oil Arab state.","Find, from an official or World Bank source, the share of government revenue from taxes in each, with the year.","Write three sentences on whether the pattern fits rentier theory."], write:"Countries… Tax shares and years… Does it fit?…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Does rentier state theory still explain the Gulf, or has late rentierism replaced it?","2. Why did the Arab uprisings produce such different outcomes?","3. Can Arab–Israeli normalisation advance regional peace without a resolution of the Palestinian question?"], write:"My question… My position… Evidence… Counter-argument… My reply…"}
   ], proof:"A summary of one UN resolution with a disputed phrase, a rentier-theory test on two countries, and a seminar paragraph."},
   read:[
     {book:"owh2", where:"Chapter 12, section 12.4 “Old Empires and New Colonies” (subsections “To the Victors Go the Spoils” and “A Jewish Homeland in Palestine”)", note:"The mandates and the early debate over Palestine, with primary sources."},
     {book:"owh2", where:"Chapter 14, section 14.5 “A New World Order”", note:"Includes Iran’s revolution and the Iran–Iraq war."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u22-l5", title:"Putting it together: the map of international studies, and how to keep learning", minutes:55,
   hook:{q:"The UN had 51 founding members in 1945 and has 193 today. From which region did the largest number of the new members come?", options:["Africa","Asia and the Pacific","Europe","Latin America and the Caribbean"], answer:0, reveal:"**Africa.** Only four African states (Egypt, Ethiopia, Liberia and South Africa) were among the founders; today all 54 African states are members. Decolonisation (Unit 1) remade the international system, changed who sits in global institutions (Units 9–13), and shaped the development debates (Units 14–17) and the regional studies (Units 18–22) of this track. This final lesson draws those threads together and points to free ways to keep learning."},
   goals:[
     "Describe how the track’s foundations and its four clusters fit together as a field",
     "Use six cross-cutting debates to connect topics from different units",
     "Trace one real issue across several clusters and regions",
     "Plan your own continued learning with free, reliable journals, datasets, trackers and documents"
   ],
   learn:[
    {h:"The shape of the field", body:[
      {lead:"Twenty-two units ago this track promised to take you to the level a graduate programme assumes on day one. What, looking back, is the field you have studied?"},
      "Graduate programmes in international studies usually rest on shared **foundations** and branch into **clusters**. This track followed that pattern ({{international-studies-map}}):",
      {table:[
        ["Part","Units","Core questions"],
        ["Foundations","1–4: history since 1900, IR theory, research methods, Japan studies","What happened, how do we explain it, and how do we know?"],
        ["Culture, society and media","5–8","How do meaning, identity, media and attraction shape world politics?"],
        ["Global governance","9–13: organisations, law, human rights, security, governance beyond the state","How is a world without a world government governed?"],
        ["Sustainable development","14–17: development, IPE, environment, the SDGs","Who gets what, how, and at what cost to the planet?"],
        ["Area studies","4 and 18–22: Japan, East, Southeast and South Asia, the Pacific, Africa, Latin America, the Middle East","How do these questions look from particular places, and what do those places teach the theories?"]
      ]},
      {fig:'<svg viewBox="0 0 340 360"><rect class="d-panel" x="70" y="140" width="200" height="80" rx="12" stroke-width="2"/><text x="170" y="166" text-anchor="middle">Foundations</text><text class="s" x="170" y="186" text-anchor="middle">history · theory · methods</text><text class="s" x="170" y="204" text-anchor="middle">Units 1–4</text><rect class="d-rose" x="8" y="10" width="156" height="104" rx="10" stroke-width="2"/><text x="86" y="40" text-anchor="middle">Culture,</text><text x="86" y="58" text-anchor="middle">society, media</text><text class="s" x="86" y="84" text-anchor="middle">Units 5–8</text><rect class="d-gold" x="176" y="10" width="156" height="104" rx="10" stroke-width="2"/><text x="254" y="40" text-anchor="middle">Global</text><text x="254" y="58" text-anchor="middle">governance</text><text class="s" x="254" y="84" text-anchor="middle">Units 9–13</text><rect class="d-sage" x="8" y="246" width="156" height="104" rx="10" stroke-width="2"/><text x="86" y="276" text-anchor="middle">Sustainable</text><text x="86" y="294" text-anchor="middle">development</text><text class="s" x="86" y="320" text-anchor="middle">Units 14–17</text><rect class="d-soft" x="176" y="246" width="156" height="104" rx="10" stroke-width="2"/><text x="254" y="276" text-anchor="middle">Area</text><text x="254" y="294" text-anchor="middle">studies</text><text class="s" x="254" y="320" text-anchor="middle">Units 4, 18–22</text><path class="d-ink" d="M110 114 L130 140 M230 114 L210 140 M110 246 L130 220 M230 246 L210 220" stroke-width="2"/><path class="d-ink" d="M164 62 H176 M164 298 H176 M30 114 V246 M310 114 V246" stroke-width="1" stroke-dasharray="4 4"/></svg>', alt:"A map of the field. In the centre, Foundations: history, theory and methods, Units 1 to 4. Around it, four clusters linked to the centre by solid lines: culture, society and media (Units 5 to 8); global governance (Units 9 to 13); sustainable development (Units 14 to 17); and area studies (Units 4 and 18 to 22). Dashed lines link each cluster to its neighbours.", cap:"The foundations feed every cluster, and the clusters constantly borrow from one another. Area studies tests all of them in real places."},
      "Notice the dashed lines. A seminar on climate finance (development) quickly becomes one on law (governance), on how media frame small island states (culture) and on Pacific diplomacy (area studies). Strong graduate work moves along these lines on purpose."
    ]},
    {h:"Six debates that run through everything", body:[
      "Topics change; the underlying arguments recur. If you can place a new reading in one of these debates, you can usually follow the seminar.",
      {table:[
        ["Debate","The question","Where you met it"],
        ["Order and change","Is the post-1945 order adapting, fragmenting or being replaced, and by whom?","Units 1, 13, 19; the Gulf states and BRICS here"],
        ["Material and ideational","Do interests and power drive outcomes, or ideas, norms and identities?","Units 2, 5, 8; rentier theory versus identity here"],
        ["Structure and agency","Do global structures set the limits, or do states and people make their own paths?","Units 14–15; African agency in Asian partnerships here"],
        ["Universal and particular","Do concepts such as rights, democracy and development travel across regions?","Units 4, 11; comparative area studies here"],
        ["State and beyond","Is the state still the main actor, or do networks, firms and movements govern?","Units 9, 13, 7; regional communities in Africa here"],
        ["Knowledge and power","Who produces knowledge about whom, and with what effects?","Units 3, 5; region names and parachute research here"]
      ]},
      "The debates also connect to one another. A claim that the order is “changing” (order and change) usually rests on a view about whether power or ideas matter more (material and ideational), and about whose voices count as evidence (knowledge and power). Spotting these links is what lets you ask the sharp question at the end of a seminar.",
      {tip:"Before each seminar, ask: which of these debates is this reading in, and which side is it on? Then look for one reading on the other side."}
    ]},
    {h:"Three regions side by side", body:[
      "The last unit’s three regions show how the same debates take different shapes in different places:",
      {table:[
        ["Theme","Africa","Latin America","Middle East and North Africa"],
        ["Debate about the state","Juridical vs empirical statehood; the bifurcated state","Bureaucratic authoritarianism; delegative democracy","Rentier and allocation states; authoritarian durability"],
        ["Main regional bodies","AU, eight RECs","OAS, Mercosur, CELAC, Pacific Alliance","Arab League, GCC"],
        ["Theory it exported","Pan-Africanism; critiques of the colonial state","Dependency and structuralism","Critiques of Orientalism; rentier theory"],
        ["Ties with Asia","FOCAC, TICAD, India–Africa summits","Trade with China; Japanese migration; CPTPP","Energy through Hormuz; workers and remittances"]
      ]},
      "Each row is a comparison you could turn into a seminar paper. For example: do Africa’s and Latin America’s regional bodies respond to coups in the same way, and why? Or: is “authoritarian durability” in the Gulf better explained by rents (material) or by monarchical legitimacy (ideational)?",
      {warn:"A table like this simplifies. Within each region, countries differ more than the regions differ from one another on many measures. Use it to start a comparison, never to end one."}
    ]},
    {h:"One issue across the map: lithium", body:[
      "Take a single commodity and follow it through the clusters. Lithium, used in batteries for electric vehicles and power storage, is found in large quantities in the salt flats where Argentina, Bolivia and Chile meet, among other places.",
      {list:[
        "**Development and IPE** (Units 14–15): can exporters move up the [[global-value-chain|value chain]] from raw material to refining and batteries, or does the old [[prebisch-singer-thesis|Prebisch–Singer]] trap return? See {{global-value-chains}}.",
        "**Environment** (Unit 16): the energy transition needs lithium, but extraction uses scarce water in arid regions. Is that a trade-off or an injustice? See {{energy-transition-politics}}.",
        "**Culture, identity and rights** (Units 6 and 11): Indigenous communities near the salt flats claim a say over extraction ({{minority-and-indigenous-rights}}).",
        "**Governance** (Units 9–10, 13): governments in the region have chosen different mixes of state control and private investment; buyers in China, Japan, South Korea, Europe and North America compete for supply, under rules of trade and [[critical-minerals|critical-minerals]] policy.",
        "**Area studies** (Lesson 3): the pink tide and its turns shaped these choices, and populist and technocratic arguments about who owns natural resources recur."
      ]},
      "A comparative area studies design would compare the three countries’ approaches (intra-regional), or compare them with Indonesia’s nickel policy (cross-regional). This is how a thesis question is born: a concrete puzzle at the crossing of two clusters, tested in real places with the methods of Unit 3 ({{research-puzzles}})."
    ]},
    {h:"What graduate seminars will expect", body:[
      "Across the track, the same habits have come up again and again. In a sentence each:",
      {ol:[
        "**Define before you argue.** State what you mean by “populism”, “region” or “development” and whose definition it is.",
        "**Attribute and date.** “As of November 2026, the government argues…” is stronger than an unsourced claim.",
        "**Compare.** One case is a story; two or more, chosen for a reason, can test an idea.",
        "**Read across.** Pair an author from the region with an outside author, and a theorist with a country expert.",
        "**Name the counter-argument.** Give the strongest version of the other side, then reply.",
        "**Write plainly.** Short sentences, defined terms, evidence close to each claim."
      ]},
      "For longer pieces, return to Unit 3’s guide to the thesis ({{ir-thesis}}) and Unit 8’s guide to the policy brief ({{writing-a-policy-brief}})."
    ]},
    {h:"How to keep learning, for free", body:[
      "The field moves quickly. These resources were checked in November 2026 and were free to read or use then:",
      {table:[
        ["Kind","Resource","What it gives you"],
        ["Open-access journals","*Global Studies Quarterly* (International Studies Association); *Africa Spectrum* and *Journal of Politics in Latin America* (published with the German Institute for Global and Area Studies, GIGA)","Peer-reviewed research, free to read"],
        ["Open textbooks","E-International Relations’ *International Relations* and *International Relations Theory*","Short chapters by many authors (see the readings)"],
        ["Conflict tracker","International Crisis Group’s *CrisisWatch*","A monthly update on more than 70 conflicts and crises, searchable back to 2003"],
        ["Datasets","UCDP and V-Dem (Unit 3: {{ir-datasets}}); Afrobarometer, Latinobarómetro, Arab Barometer","Conflict, democracy and public-opinion data to test claims"],
        ["Primary documents","UN resolutions and meeting coverage; the AU’s and regional bodies’ communiqués","What states actually agreed, in their own words"]
      ]},
      "Build a weekly habit: one journal article, one primary document and one news report from a region you know less well. Keep notes in a reference manager, as Track 4 showed, and write a paragraph on each: claim, evidence, debate, your view.",
      {key:"International studies is not a list of facts to memorise. It is a set of questions, debates and methods you can take to any place and any problem."}
    ]},
    {h:"Common misconceptions, and a send-off", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["Each cluster is a separate subject.","Real problems cross clusters; good research moves between them on purpose."],
        ["Theory belongs in the first chapter only.","Theories are tools you use and test throughout an argument."],
        ["Area studies is the “descriptive” part.","Places test and generate theory: dependency, bureaucratic authoritarianism and rentier theory all came from regional research."],
        ["Being neutral means having no view.","It means representing each position fairly and supporting your own view with evidence."]
      ]},
      "You now have the vocabulary, debates and methods that graduate seminars in international studies take for granted, and a habit of checking facts and attributing views. Keep asking whose story is being told, compare before you conclude, and read the people who live with the questions you study. Good luck with the next stage."
    ]}
   ],
   try:[
    {id:"e4u22-l5-x1", type:"sort", q:"Which part of the field does each unit belong to?", buckets:["Foundations","Culture, society and media","Global governance","Sustainable development"], items:[
      {t:"Research methods for international studies", b:0, why:"Unit 3, part of the foundations."},
      {t:"Soft power, public diplomacy and cultural diplomacy", b:1, why:"Unit 8."},
      {t:"International law in depth", b:2, why:"Unit 10."},
      {t:"Environment and climate governance", b:3, why:"Unit 16."},
      {t:"Identity, nation and race", b:1, why:"Unit 6."},
      {t:"Security, conflict and peacebuilding", b:2, why:"Unit 12."},
      {t:"International political economy", b:3, why:"Unit 15."}
    ]},
    {id:"e4u22-l5-x2", type:"match", q:"Match each seminar question to the cross-cutting debate it belongs to.", pairs:[
      ["Is the liberal international order ending?","Order and change","A question about how the post-1945 order is changing."],
      ["Did oil revenue or national identity shape Gulf foreign policy more?","Material and ideational","Interests and resources versus ideas and identity."],
      ["Do African governments shape their deals with Asian partners?","Structure and agency","Whether structures or actors drive outcomes."],
      ["Does “democracy” mean the same in every region?","Universal and particular","Whether concepts travel across contexts."],
      ["Who decides what counts as knowledge about the Middle East?","Knowledge and power","The politics of knowledge production."]
    ]},
    {id:"e4u22-l5-x3", type:"mcq", q:"In the lithium example, which question belongs mainly to **international political economy**?", options:[
      {t:"Can exporting countries move from mining into refining and battery-making?", ok:true, why:"Right: a value-chain upgrading question (Unit 15)."},
      {t:"Do Indigenous communities have a right to be consulted?", why:"Mainly a rights and identity question (Units 6 and 11)."},
      {t:"How do salt-flat ecosystems respond to water extraction?", why:"Mainly an environmental question (Unit 16)."},
      {t:"Which survey best measures attitudes to democracy?", why:"A methods and area studies question, unrelated to lithium’s political economy."}
    ]},
    {id:"e4u22-l5-x4", type:"order", q:"Put the steps of a strong seminar argument in a sensible order.", items:[
      {t:"State the question and define key terms", why:"Readers need to know what you mean before you argue."},
      {t:"Give your position in one sentence", why:"A clear claim guides the rest."},
      {t:"Present evidence from comparable cases", why:"Comparison tests the claim."},
      {t:"Present the strongest counter-argument", why:"Fairly, in its best form."},
      {t:"Reply, and say what your argument implies", why:"Ends with why it matters."}
    ]},
    {id:"e4u22-l5-x5", type:"mcq", q:"Which of these was confirmed in November 2026 to be a fully open-access journal?", options:[
      {t:"*Global Studies Quarterly*, published by the International Studies Association", ok:true, why:"Right: its site describes it as the ISA’s fully open-access journal."},
      {t:"Every journal on Google Scholar", why:"Many listed articles are behind paywalls."},
      {t:"Any journal that emails you an invitation to publish", why:"Unsolicited invitations are a warning sign of predatory journals (Track 4)."},
      {t:"No journal in international studies is free", why:"Several are, including those named in this lesson."}
    ]},
    {id:"e4u22-l5-x6", type:"mcq", q:"A student wants to compare lithium policy in Chile with nickel policy in Indonesia. What kind of design is this?", options:[
      {t:"Cross-regional comparative area studies", ok:true, why:"Right: two cases from different regions that share a feature, here resource policy for transition minerals."},
      {t:"Intra-regional comparison", why:"That would compare cases within one region, such as Chile and Bolivia."},
      {t:"Inter-regional comparison", why:"That compares regions as wholes, such as Mercosur and ASEAN."},
      {t:"A single-case study", why:"There are two cases."}
    ]},
    {id:"e4u22-l5-x7", type:"spot", q:"A learner’s plan for continuing study. Tap each step that is **weak**.", ask:"is weak", parts:[
      {t:"Each week I will read one open-access article and one UN or AU document.", flag:false, why:"A sound, free habit."},
      " ",
      {t:"I will follow only one news outlet, from one country, for all regions.", flag:true, why:"Weak: compare outlets from different countries and regions."},
      " ",
      {t:"I will check figures against the issuing body’s own data.", flag:false, why:"Good practice."},
      " ",
      {t:"I will read only scholars from outside the regions I study, because they are more objective.", flag:true, why:"Weak: position shapes every view; read scholars from the region too."},
      " ",
      {t:"I will write a short paragraph on each reading: claim, evidence, debate, my view.", flag:false, why:"Good: it builds seminar skills."}
    ]}
   ],
   apply:{intro:"Close the track by building your own map and plan.", tasks:[
     {t:"Draw your map of the field", how:["On one page, draw the foundations and four clusters.","Add the three units you found most useful and one link between clusters that you would like to research.","Note which of the six debates your link touches."], write:"My three units… My cross-cluster link… The debates it touches…"},
     {t:"Draft a thesis puzzle", how:["Write one research puzzle that crosses two clusters and involves at least one region from Units 18–22.","Name your design (intra-, inter- or cross-regional) and two free sources you would start with."], write:"Puzzle… Clusters… Region(s)… Design… Two sources…"},
     {t:"Seminar questions", how:["Choose one and write 150–250 words with a position and a counter-argument.","1. Should international studies be organised by clusters, by regions, or by problems?","2. Which of the six debates do you think matters most for the next decade, and why?","3. What would a truly “global” international studies curriculum include that this one does not?"], write:"My question… My position… Evidence… Counter-argument… My reply…"}
   ], proof:"A one-page map of the field, a thesis puzzle with a design and sources, and a final seminar paragraph."},
   read:[
     {book:"eirt", where:"Chapter 10 “Towards a Global IR?”", note:"A short reflection on where the discipline is going."},
     {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar)", note:"A useful re-read now: the history behind every cluster."}
   ]
  }
  ],
  checkpoint:["e4u22-q03","e4u22-q06","e4u22-q12","e4u22-q15","e4u22-q16","e4u22-q20","e4u22-q22","e4u22-q25","e4u22-q30","e4u22-q33","e4u22-q34","e4u22-q41"],
  codex:[
   {id:"comparative-area-studies", title:"Studying regions: area studies, comparison and comparative area studies", aka:["CAS","cross-regional comparison","regional surveys","Global Barometer Surveys"], tags:["methods","area studies","regions"],
    summary:"How to study a world region well: constructed region names, the area studies–discipline debate, comparative area studies designs, regional scholars, surveys and the ethics of research partnerships.",
    levels:{
     starter:[
      "A **region** such as “Africa”, “Latin America” or “the Middle East” is not simply a fact of geography. People drew its edges and gave it its name, often for political reasons. “Middle East” spread after a US naval strategist used it in 1902; “Latin America” is usually traced to a Chilean writer speaking in Paris in 1856.",
      "**Area studies** is the study of one region in depth: its languages, history, politics and culture. **Comparative politics** looks for patterns across many countries. For decades the two argued about which mattered more.",
      "**Comparative area studies** tries to combine them: know your places well, and compare them deliberately, including across regions.",
      {key:"Say how you define your region and why, read people from the region, and compare before you generalise."}
     ],
     builder:[
      "**Region names.** “Middle East” possibly began in British India Office usage and spread after Alfred Thayer Mahan’s 1902 article on the Persian Gulf; critics in the region call it Eurocentric and some prefer West Asia. “Latin America” was used by Francisco Bilbao (1856) and José María Torres Caicedo (1857) for unity against intervention, and later promoted by Napoleon III’s France. “Sub-Saharan Africa” is a statistical grouping; the African Union treats the continent as one.",
      "**The debate.** In the 1990s some political scientists argued that general theory and statistics should replace country expertise (Robert Bates, 1997); area specialists replied that theories travel badly without context (see {{area-studies}}).",
      "**Comparative area studies.** Ariel Ahram, Patrick Köllner and Rudra Sil (eds), *Comparative Area Studies* (Oxford University Press, 2018) argue for context-sensitive comparison. Designs are **intra-regional** (cases within one region), **inter-regional** (regions as wholes) and **cross-regional** (cases from different regions sharing a feature). The approach is associated with the German Institute for Global and Area Studies (GIGA).",
      "**Regional surveys.** Afrobarometer (more than 30 African countries; face-to-face interviews in the respondent’s chosen language), Latinobarómetro (18 countries, annually since 1995) and Arab Barometer (since 2006) belong to the Global Barometer Surveys network; their data are widely used and largely free."
     ],
     pro:[
      "**Knowledge and power.** Region-making has always been tied to power: area studies grew with Cold War funding (Unit 4), and categories such as “MENA” or “sub-Saharan Africa” follow donors’ and agencies’ needs as much as scholars’. Critics of “parachute” or extractive research ask for fair partnerships: local co-authors, shared data and results returned to participants.",
      "**Regional scholarship.** Treat regions as producers of theory: Latin American structuralism and dependency, CLACSO (founded 1967) and CODESRIA (founded 1973) as regional social science councils, and scholars such as Guillermo O’Donnell, Thandika Mkandawire and Mahmood Mamdani.",
      "**Survey caveats.** Opinion data from authoritarian or conflict settings carry risks of preference falsification and missing countries; question wording changes meaning across languages; regional barometers ask similar but not identical questions, so cross-regional comparisons need care.",
      "**Designing a study.** Name the design and the reason for case selection; check that your concept means the same thing in each case (“conceptual stretching”); pair a theory with deep case knowledge; and state your positionality.",
      {tip:"A good test of an area-studies claim is to ask whether it would surprise someone from the region. If not, it may be descriptive; if so, check whether you misread the context."}
     ]
    },
    related:["area-studies","comparative-method","case-selection","fieldwork-ethics","ir-datasets","global-ir"],
    read:[{book:"eirt", where:"Chapter 17 “Global South Perspectives”"}],
    sources:[{t:"GIGA: Ahram, Köllner & Sil (eds), Comparative Area Studies (Oxford University Press, 2018)", url:"https://www.giga-hamburg.de/en/publications/books/comparative-studies-methodological-rationales-cross-regional-applications"},{t:"Afrobarometer: surveys and methods", url:"https://www.afrobarometer.org/surveys-and-methods/"},{t:"Arab Barometer: about", url:"https://www.arabbarometer.org/about/"}],
    checked:"2026-11"},

   {id:"african-statehood-debates", title:"The post-colonial African state: debates", aka:["quasi-states","juridical and empirical statehood","neopatrimonialism","politics of the belly"], tags:["Africa","the state","comparative politics"],
    summary:"The main scholarly arguments about the states that emerged from decolonisation in Africa: juridical versus empirical statehood, Herbst’s power over distance, Mamdani’s bifurcated state, neopatrimonialism, and their critics.",
    levels:{
     starter:[
      "When African colonies became independent, mostly between 1956 and 1975, their leaders kept the borders the colonial powers had drawn. At a 1964 summit in Cairo, the Organisation of African Unity agreed to respect the borders existing at independence.",
      "Scholars then asked: what kind of states grew inside those borders? Some argued that many states survived because the world recognised them, even when they could not fully govern their territory. Others pointed to the colonial legacy, to geography, or to the way politicians used public office to reward supporters.",
      "Each idea is a theory to test on particular countries, not a description of a whole continent. Botswana and Mauritius, for example, built strong states inside inherited borders."
     ],
     builder:[
      "**Juridical vs empirical statehood.** Robert Jackson and Carl Rosberg, “Why Africa’s Weak States Persist” (*World Politics*, 1982), argued that international recognition (juridical statehood) kept states alive even where effective control (empirical statehood) was weak. Jackson’s *Quasi-States* (1990) extended the argument to the Third World.",
      "**Power over distance.** Jeffrey Herbst, *States and Power in Africa* (2000): low population densities made it costly to project power, and guaranteed borders removed the war pressures that built European states.",
      "**The bifurcated state.** Mahmood Mamdani, *Citizen and Subject* (1996): colonial rule split citizens governed by civil law from rural subjects governed through “customary” chiefs, a decentralised despotism that independence did not fully dismantle ({{mahmood-mamdani}}).",
      "**Neopatrimonialism.** Michael Bratton and Nicolas van de Walle, *Democratic Experiments in Africa* (1997), described formal institutions overlaid by personal rule and patronage; Jean-François Bayart’s *L’État en Afrique: la politique du ventre* (1989) described a politics of “the belly”."
     ],
     pro:[
      "**Critiques.** Thandika Mkandawire, “Neopatrimonialism and the Political Economy of Economic Performance in Africa” (*World Politics*, 2015), argued that the concept was used so broadly that it could not explain why economic performance varied so much across African states and over time. Others criticise Herbst’s implicit European yardstick of state-making through war, and Mamdani’s model for treating varied colonial experiences (British indirect rule, French assimilation, settler colonies) too uniformly.",
      "**Variation as the puzzle.** Comparative work increasingly explains differences: why Botswana, Mauritius and Cabo Verde developed capable institutions; why some states held together through crises; how taxation, ethnic coalitions and party organisation shape capacity.",
      "**Sovereignty’s politics.** The juridical argument links to IR debates on sovereignty and recognition (e2u5) and to *uti possidetis* (Unit 10). Some scholars read the persistence of borders as a success of African diplomacy, not only a sign of weakness.",
      {warn:"Avoid cultural explanations of “the African state”. These are institutional and historical theories; test them country by country."}
     ]
    },
    related:["mahmood-mamdani","third-world-project","decolonization","territory-and-boundaries","african-peace-security-architecture"],
    read:[{book:"owh2", where:"Chapter 14, section 14.4 “Global Tensions and Decolonization”"}],
    sources:[{t:"Jackson & Rosberg, “Why Africa’s Weak States Persist” (World Politics, 1982)", url:"https://www.cambridge.org/core/journals/world-politics/article/why-africas-weak-states-persist-the-empirical-and-the-juridical-in-statehood/8CABE92B762A7B6871E1FA7F400EE20F"},{t:"Mkandawire, “Neopatrimonialism and the Political Economy of Economic Performance in Africa” (World Politics, 2015)", url:"https://www.cambridge.org/core/journals/world-politics/article/neopatrimonialism-and-the-political-economy-of-economic-performance-in-africa-critical-reflections/13AFAADFA66DABF7380B2799D15A0E72"}],
    checked:"2026-11"},

   {id:"african-peace-security-architecture", title:"The African Peace and Security Architecture (APSA)", aka:["APSA","AU Peace and Security Council","African Standby Force","Resolution 2719"], tags:["Africa","security","regional organisations"],
    summary:"How the African Union’s peace and security system works: the Peace and Security Council and its four pillars, the regional economic communities, rules against coups, financing and the debates about each.",
    levels:{
     starter:[
      "The African Union (AU), which replaced the Organisation of African Unity in 2002, has its own system for preventing and managing conflicts. At its centre is the **Peace and Security Council**, a body of 15 African states that can send missions, impose sanctions and suspend governments that take power by force.",
      "The Council is supported by a panel of respected elders, an early warning system, standby forces and a fund. Regional groups such as ECOWAS in West Africa and SADC in Southern Africa form the building blocks and often act first.",
      {key:"APSA puts African institutions in the lead on African security, but it still depends heavily on outside money."}
     ],
     builder:[
      "**The Council.** Created by a protocol adopted in Durban on 9 July 2002, in force from December 2003 and operational in early 2004. It has 15 members with equal votes: five elected for three years and ten for two, with no permanent members or vetoes.",
      "**Four pillars.** The Panel of the Wise, the Continental Early Warning System, the African Standby Force and the Peace Fund; a Military Staff Committee advises the Council.",
      "**RECs.** The AU recognises eight regional economic communities (AMU, CEN-SAD, COMESA, EAC, ECCAS, ECOWAS, IGAD, SADC) as building blocks. Subsidiarity says the level closest to a crisis should act first, but leadership is sometimes contested.",
      "**Coups.** Under the Lomé Declaration (2000) and the African Charter on Democracy, Elections and Governance (2007), governments formed through unconstitutional change are suspended. A cluster of coups from 2020 tested these rules; Mali, Burkina Faso and Niger formed the Alliance of Sahel States and left ECOWAS in January 2025 (see {{comparative-regionalism}}).",
      "**Money.** In December 2023 UN Security Council Resolution 2719, adopted unanimously, agreed to consider AU requests case by case for UN assessed contributions to AU-led operations, up to 75 per cent of each budget."
     ],
     pro:[
      "**Debates.** Scholars debate whether “African solutions to African problems” is achievable while operations depend on the EU, the UN and bilateral donors; whether the Council acts consistently across cases (for example, against coups but less often against incumbents who extend term limits); and how far the Standby Force exists in practice rather than on paper.",
      "**Practice.** Many African-led missions, such as the AU’s missions in Somalia since 2007 (AMISOM and its successors), have been ad hoc coalitions with partner funding rather than standby deployments. No intervention has been launched under Article 4(h) against a government’s will (Unit 9).",
      "**Hybrid and partnership models.** UN–AU cooperation, joint missions and Resolution 2719 financing link APSA to Unit 12’s debates on peace operations ({{peace-operations}}) and the liberal peace.",
      {tip:"For current decisions, read the Council’s communiqués on the AU website, and compare them with ECOWAS or SADC statements on the same crisis."}
     ]
    },
    related:["comparative-regionalism","peace-operations","liberal-peace-debate","african-statehood-debates","un-security-council"],
    read:[{book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)"}],
    sources:[{t:"African Union: Peace and Security Council", url:"https://au.int/en/psc"},{t:"UN Security Council adopts resolution 2719 (2023), meeting coverage SC/15544", url:"https://press.un.org/en/2023/sc15544.doc.htm"}],
    checked:"2026-11"},

   {id:"africa-rising-debate", title:"“Africa rising”, statistics and demography", aka:["hopeless continent","demographic dividend","Agenda 2063","Poor Numbers"], tags:["Africa","development","demography"],
    summary:"The swings in narratives about African economies since 2000, the debate over growth statistics, and what UN population data imply for the continent’s future.",
    levels:{
     starter:[
      "In 2000 a famous magazine cover called Africa “the hopeless continent”. In 2011 the same magazine announced “Africa rising”. Neither single story was the whole truth.",
      "Growth was real in many countries after 2000, helped by high prices for oil and minerals, mobile phones and new businesses. But when prices fell, some economies slowed and ran into debt problems.",
      "Africa is also the world’s youngest region: about 28 per cent of the world’s people under 25 live there. A young population can boost growth if there are enough jobs and good schools.",
      {key:"Look at the evidence country by country, and ask how good the numbers are."}
     ],
     builder:[
      "**Narratives.** *The Economist*’s covers of May 2000 (“The hopeless continent”) and December 2011 (“Africa rising”) bracket a decade of fast growth. Critics such as Ian Taylor (*Africa Rising? BRICS – Diversifying Dependency*, 2014) and Patrick Bond argued that growth rested on commodity exports and did not transform economies.",
      "**Statistics.** Morten Jerven’s *Poor Numbers* (2013) showed how weak statistical offices and old base years made GDP estimates unreliable; Ghana’s 2010 revision of its national accounts raised measured GDP by about 60 per cent.",
      "**Demography.** Using the UN’s *World Population Prospects 2024*, Pew Research Center (2026) reports that Africa has about 19 per cent of the world’s population and 28 per cent of its under-25s; a median age of about 19; fertility of about 3.9 births per woman, projected to fall to 2.8 by 2050 and 2.0 by 2100; and a projected population of 3.8 billion by 2100 (medium variant).",
      "**Plans.** The AU’s Agenda 2063 (adopted 2015) and the AfCFTA (Unit 15) aim at industrialisation and integration."
     ],
     pro:[
      "**The demographic dividend** depends on the speed of fertility decline, education (especially of girls), health and job creation. Without jobs, a large youth cohort can mean unemployment and emigration pressure; with them, a growth boost. Avoid framing demography as a threat: it is a policy question.",
      "**Structural transformation.** Development economists debate whether African economies can industrialise in a world of automation and Asian competition, or whether services and agro-processing offer other paths (see Unit 14 on developmental states and Unit 15 on value chains).",
      "**Measurement politics.** Rebasing GDP changes debt ratios, aid eligibility and income classifications. Read growth claims alongside the statistical methods behind them.",
      {tip:"When using UN projections, state the variant (usually medium) and the edition, and remember that projections are scenarios, not forecasts of certainty."}
     ]
    },
    related:["global-inequality-debates","developmental-state-debate","global-value-chains","demography","africa-asia-relations"],
    sources:[{t:"Pew Research Center: 5 facts about Africa’s population growth (19 May 2026)", url:"https://www.pewresearch.org/short-reads/2026/05/19/5-facts-about-africas-population-growth/"}],
    checked:"2026-11"},

   {id:"africa-asia-relations", title:"Africa and Asia: FOCAC, TICAD and India–Africa summits", aka:["FOCAC","TICAD","India–Africa Forum Summit","African agency"], tags:["Africa","Asia","diplomacy"],
    summary:"How China, Japan, India and other Asian states engage Africa through summit diplomacy, finance and trade, and how scholars debate these relationships and African agency within them.",
    levels:{
     starter:[
      "Asian countries hold regular summits with African leaders. Japan began the Tokyo International Conference on African Development (TICAD) in 1993. China began the Forum on China–Africa Cooperation (FOCAC) in 2000. India held India–Africa Forum Summits in 2008, 2011 and 2015. South Korea, Türkiye and the Gulf states have similar meetings.",
      "These summits bring promises of loans, investment, training and trade. People argue about whether they mainly help African development or mainly serve the interests of the Asian partners.",
      {key:"Ask what each side wants, and remember that African governments negotiate too."}
     ],
     builder:[
      "**TICAD.** Led by Japan since 1993, co-organised with the UN, UNDP, the World Bank and the African Union Commission, and built on the principles of African ownership and international partnership. TICAD 9 met in Yokohama in 2025 and adopted the Yokohama Declaration (see Japan’s side in Units 4 and 18).",
      "**FOCAC.** Begun in 2000, meeting every three years. At the 2024 Beijing summit Xi Jinping pledged RMB 360 billion (about US$50.7 billion) over three years: RMB 210 billion in credit lines, RMB 80 billion in assistance and at least RMB 70 billion in investment by Chinese companies.",
      "**India.** India–Africa Forum Summits in 2008 (New Delhi), 2011 (Addis Ababa) and 2015 (New Delhi, the largest), with lines of credit, training and education links and an emphasis on shared anti-colonial history.",
      "**Others.** South Korea’s first Korea–Africa summit (2024); Türkiye’s and the Gulf states’ expanding embassies, investment and security roles."
     ],
     pro:[
      "**Debates.** On Chinese finance, see Unit 15’s “debt-trap” debate ({{china-overseas-lending}}): Deborah Brautigam and others found little evidence of deliberate asset seizure, while critics point to opaque contracts and debt distress. On Japan, debates concern whether “quality infrastructure” and private investment match rhetoric. On India, whether lines of credit are delivered on time.",
      "**African agency.** A growing literature argues that African governments set terms, bargain among partners and use the AU and regional bodies to negotiate collectively; others note large asymmetries of power. Analyse each relationship from both ends.",
      "**Comparison.** The three forums differ in institutional form (TICAD’s multilateral co-organisers; FOCAC’s bilateral-plus-continental format), in instruments and in rhetoric, which makes them a good inter-regional comparison.",
      {tip:"Use the declarations and action plans of each summit as primary sources, and check later implementation reports rather than headline pledges."}
     ]
    },
    related:["china-overseas-lending","japan-development-cooperation","africa-rising-debate","african-peace-security-architecture"],
    sources:[{t:"Ministry of Foreign Affairs of Japan: What is TICAD?", url:"https://www.mofa.go.jp/region/africa/ticad/what.html"},{t:"African Business: FOCAC ends with $50bn of Chinese pledges to Africa (September 2024)", url:"https://african.business/2024/09/politics/focac-ends-with-50bn-of-chinese-pledges-to-africa"}],
    checked:"2026-11"},

   {id:"mahmood-mamdani", title:"Mahmood Mamdani", aka:["Citizen and Subject","bifurcated state","decentralised despotism"], tags:["thinker","Africa","colonialism"],
    summary:"Ugandan scholar (b. 1946) whose work on the colonial state, citizenship, political violence and decolonisation is among the most cited in African studies.",
    levels:{
     starter:[
      "Mahmood Mamdani was born in 1946 in Bombay (now Mumbai) and grew up in Kampala, Uganda. In 1972 Idi Amin’s government expelled him, with most people of Asian descent, from Uganda. He later taught in Tanzania, Uganda, South Africa and the United States.",
      "His big idea is that colonial rule in Africa divided people into two kinds: **citizens**, mostly in towns and governed by civil law, and **subjects**, mostly in the countryside and governed by chiefs under “customary” law. He argues that this split did not disappear at independence.",
      "He has also written about political violence, such as the Rwandan genocide, and about how ideas of “native” and “settler” shape politics."
     ],
     builder:[
      "**Key works.** *Citizen and Subject: Contemporary Africa and the Legacy of Late Colonialism* (1996) on the bifurcated state and decentralised despotism; *When Victims Become Killers* (2001) on colonialism, nativism and the genocide in Rwanda; *Good Muslim, Bad Muslim* (2004) on US Cold War policy and political Islam; *Saviors and Survivors* (2009) on Darfur; *Define and Rule* (2012) on “native” as a political identity; *Neither Settler nor Native* (2020) on how nation-states make “permanent minorities”.",
      "**Positions.** He directed Columbia University’s Institute of African Studies (1999–2004) and the Makerere Institute of Social Research in Kampala (2010–2022), and was president of CODESRIA until 2002. Unit 11 discussed his critique of South Africa’s Truth and Reconciliation Commission.",
      "**Using him.** Scholars use his work to explain why ethnic and customary authority remains politically powerful, and why decolonisation must address institutions, not only who holds power."
     ],
     pro:[
      "**Critiques.** Historians argue that the bifurcated-state model is too uniform for very different colonial systems (British indirect rule, French direct administration, settler colonies) and underplays how Africans used and reshaped customary institutions.",
      "**The university debate.** In the late 1990s, at the University of Cape Town, a dispute over his proposed syllabus for a foundation course on Africa (often called the “Mamdani affair”) became a landmark case in debates on decolonising the curriculum; he left for Columbia in 1999. He returned to the theme in a 2017 lecture at the same university, “Decolonising the Post-Colonial University”.",
      "**Legacy.** His work links African studies to global debates on citizenship, minorities and the nation-state, a good example of theory exported from a region (see {{comparative-area-studies}})."
     ]
    },
    related:["african-statehood-debates","truth-commissions","comparative-area-studies","postcolonialism-ir"],
    sources:[{t:"Wikipedia: Mahmood Mamdani (biography and works, checked November 2026)", url:"https://en.wikipedia.org/wiki/Mahmood_Mamdani"}],
    checked:"2026-11"},

   {id:"latin-american-democratisation", title:"Authoritarianism and democratisation in Latin America", aka:["bureaucratic authoritarianism","transitions","third wave","presidentialism"], tags:["Latin America","democracy","comparative politics"],
    summary:"The scholarship on Latin America’s military regimes and transitions to democracy: bureaucratic authoritarianism, pacted transitions, the third wave, presidentialism and the quality of democracy.",
    levels:{
     starter:[
      "In the 1960s and 1970s military governments ruled much of Latin America, including Brazil, Argentina, Chile and Uruguay. From the late 1970s to 1990 almost all of them gave way to elected governments.",
      "Scholars from the region and elsewhere studied why the military took power, how dictatorships ended, and what kind of democracies followed. Their ideas are now used around the world.",
      {key:"Democracy arrived through bargaining as much as through revolution, and its quality varies after elections begin."}
     ],
     builder:[
      "**Bureaucratic authoritarianism.** Guillermo O’Donnell (1973) argued that in South America’s most industrialised countries, military rulers and technocrats seized power to exclude popular sectors and deepen industrialisation (Brazil 1964, Argentina 1966).",
      "**Transitions.** O’Donnell and Philippe Schmitter’s *Tentative Conclusions about Uncertain Democracies* (1986), the last volume of *Transitions from Authoritarian Rule* edited with Laurence Whitehead, stressed uncertainty, splits between hardliners and softliners, and pacts.",
      "**The third wave.** Samuel Huntington (*The Third Wave*, 1991) placed the region in a global wave from 1974.",
      "**Presidentialism.** Juan Linz, “The Perils of Presidentialism” (*Journal of Democracy*, 1990), argued that presidential systems handle crises poorly; critics replied that party systems and rules matter more.",
      "**Survival.** Scott Mainwaring and Aníbal Pérez-Liñán (2013) emphasised actors’ normative commitment to democracy and regional diffusion."
     ],
     pro:[
      "**Quality of democracy.** O’Donnell’s “delegative democracy” (1994) and his idea of uneven state reach (“brown areas”) shifted attention from whether countries were democratic to how well democracy worked across their territory.",
      "**Justice after dictatorship.** Argentina’s truth commission (1983–84) and later trials made the region a pioneer of transitional justice (Unit 11: {{truth-commissions}}).",
      "**Backsliding and resilience.** Debates as of 2026 concern executive aggrandisement, security-focused governments that restrict rights, and whether voters’ swings between left and right signal discontent with democracy or ordinary anti-incumbency. Use opinion data (Latinobarómetro) and indices (V-Dem) together, and attribute assessments.",
      {tip:"When applying transition models elsewhere, check the conditions they assumed: an existing state, military institutions that could withdraw, and elites able to bargain."}
     ]
    },
    related:["guillermo-odonnell","populism-debates","pink-tide","truth-commissions","comparative-area-studies"],
    sources:[{t:"Wikipedia: Guillermo O’Donnell (works and career, checked November 2026)", url:"https://en.wikipedia.org/wiki/Guillermo_O%27Donnell"}],
    checked:"2026-11"},

   {id:"guillermo-odonnell", title:"Guillermo O’Donnell", aka:["bureaucratic authoritarianism","delegative democracy","Transitions from Authoritarian Rule"], tags:["thinker","Latin America","democracy"],
    summary:"Argentine political scientist (1936–2011) whose concepts of bureaucratic authoritarianism, pacted transition and delegative democracy shaped comparative politics worldwide.",
    levels:{
     starter:[
      "Guillermo O’Donnell was born in Buenos Aires in 1936 and died there in 2011. He was one of the most influential political scientists from Latin America.",
      "He explained why some of South America’s most modern countries fell under military rule in the 1960s, how such regimes later gave way to democracy, and why some new democracies gave presidents too much unchecked power.",
      "He worked in Argentina, where he helped found the research centre CEDES, and at the University of Notre Dame in the United States."
     ],
     builder:[
      "**Key works.** *Modernization and Bureaucratic-Authoritarianism* (1973); *Transitions from Authoritarian Rule* (1986), with Philippe Schmitter and Laurence Whitehead, including the volume *Tentative Conclusions about Uncertain Democracies*; “Delegative Democracy” (*Journal of Democracy*, 1994).",
      "**Career.** A founding member of CEDES in Buenos Aires (worked there 1975–79); professor at the University of Notre Dame (1983–2009) and academic director of its Kellogg Institute (1983–97). He received the first IPSA Prize for Lifetime Achievement (2006).",
      "**Using him.** His concepts let you analyse military-technocratic regimes, negotiated exits from authoritarian rule and democracies with weak horizontal accountability, in Latin America and beyond."
     ],
     pro:[
      "**Against modernisation theory.** His 1973 work reversed the expectation that industrialisation brings democracy, arguing that the problems of deepening industry could produce coalitions for authoritarian rule. Critics questioned the economic mechanism, noting that coups had many causes.",
      "**Transitions and their critics.** The “transitology” of 1986 was criticised for focusing on elites and underplaying social movements and structural conditions, and for assuming transitions would end in democracy; Thomas Carothers’s “The End of the Transition Paradigm” (2002) is a well-known critique.",
      "**Legacy.** His later work on the state, citizenship and the quality of democracy, including uneven state reach across territory, shaped research on hybrid and weakly institutionalised democracies around the world."
     ]
    },
    related:["latin-american-democratisation","populism-debates","comparative-area-studies"],
    sources:[{t:"Wikipedia: Guillermo O’Donnell (checked November 2026)", url:"https://en.wikipedia.org/wiki/Guillermo_O%27Donnell"}],
    checked:"2026-11"},
   {id:"populism-debates", title:"Populism: definitions and debates", aka:["ideational approach","thin-centred ideology","neoliberal populism","Laclau"], tags:["Latin America","democracy","concepts"],
    summary:"The three main ways scholars define populism (ideational, strategic, discursive), its waves in Latin America, and the debate over whether it corrects or threatens democracy.",
    levels:{
     starter:[
      "“Populist” is one of the most used and misused words in politics. Scholars try to define it carefully so it can be applied fairly to leaders of the left and the right.",
      "The most common academic definition says populism divides society into two groups, **“the pure people”** and **“the corrupt elite”**, and claims politics should follow the people’s will. Other definitions focus on how leaders win support directly, without strong parties, or on how political speech builds a “people” against an enemy.",
      "Latin America has had several waves of populist leaders, from the 1930s to today, with very different economic policies.",
      {key:"Name your definition, then apply it to what a leader says and does. “Populist” is not a polite word for “bad”."}
     ],
     builder:[
      "**Ideational.** Cas Mudde, “The Populist Zeitgeist” (*Government and Opposition*, 2004): a thin-centred ideology that attaches to fuller ones (socialism, nationalism). Developed with Cristóbal Rovira Kaltwasser (*Populism: A Very Short Introduction*, 2017).",
      "**Strategic.** Kurt Weyland, “Clarifying a Contested Concept” (*Comparative Politics*, 2001): a personalist leader seeking direct, uninstitutionalised support from large followings.",
      "**Discursive.** Ernesto Laclau, *On Populist Reason* (2005): populism builds “the people” by linking unmet demands against a common opponent; for Laclau it is a logic of politics itself, not necessarily a pathology.",
      "**Waves in Latin America.** Classical (Perón, Vargas, 1930s–50s); neoliberal (Fujimori, Menem, 1990s; Kenneth Roberts, *World Politics*, 1995); radical left (Chávez, Morales, Correa, from 1998). Scholars disagree about how to classify more recent right-wing leaders."
     ],
     pro:[
      "**Corrective or threat?** Mudde and Rovira Kaltwasser’s edited volume *Populism in Europe and the Americas: Threat or Corrective for Democracy?* (2012) argues it can be both: it can include excluded groups and raise neglected issues, but it tends to attack institutions of horizontal accountability (courts, media, electoral bodies) as enemies of the people.",
      "**Measurement.** Text-based measures (coding speeches and manifestos) and expert surveys now allow comparison across regions; results depend heavily on the definition used.",
      "**Cross-regional comparison.** Populism in Latin America, Europe and Southeast Asia (for example the Philippines) is a classic cross-regional design ({{comparative-area-studies}}).",
      {warn:"Apply the same definition to all sides. Neutral analysis describes rhetoric and actions, attributes evaluations, and avoids labelling as a substitute for evidence."}
     ]
    },
    related:["latin-american-democratisation","pink-tide","guillermo-odonnell","comparative-area-studies"],
    sources:[{t:"Mudde, “The Populist Zeitgeist” (Government and Opposition, 2004)", url:"https://www.cambridge.org/core/journals/government-and-opposition/article/populist-zeitgeist/2CD34F8B25C4FFF4F322316833DB94B7"}],
    checked:"2026-11"},

   {id:"pink-tide", title:"The pink tide and its turns", aka:["Latin American left turn","second pink tide","commodity boom"], tags:["Latin America","elections","political economy"],
    summary:"The wave of left and centre-left governments in Latin America from 1998, the explanations for it, the right turn and “second pink tide” that followed, and the rightward shift of 2023–26, as of November 2026.",
    levels:{
     starter:[
      "Beginning with Hugo Chávez’s election in Venezuela in 1998, left-leaning presidents won elections across much of Latin America: Lula in Brazil (2002), and leaders in Argentina, Uruguay, Bolivia, Ecuador, Chile and elsewhere. Journalists called this the **pink tide**: pink as a softer shade of red.",
      "High prices for the region’s exports helped these governments pay for programmes against poverty. When prices fell, many lost power.",
      "Since then the region has swung back and forth between left and right. Many scholars think voters are mainly punishing governments for inflation, slow growth, crime and corruption."
     ],
     builder:[
      "**Varieties.** Jorge Castañeda (*Foreign Affairs*, 2006) divided the left into a social-democratic “right left” and a populist “wrong left”. Steven Levitsky and Kenneth Roberts’s *The Resurgence of the Latin American Left* (2011) offered typologies based on party organisation and concentration of power.",
      "**Causes.** Reaction against inequality and the 1990s reforms; democratic consolidation, which let the left win elections; and the commodity boom of the 2000s.",
      "**Turns.** Right-of-centre victories in Argentina (2015), Chile (2017) and Brazil (2018); a “second pink tide” from Mexico (2018) to Colombia and Brazil (2022); Javier Milei’s election in Argentina (2023).",
      "**As of November 2026.** Lula won Brazil’s run-off on 25 October 2026, 51.8 to 48.2 per cent against Flávio Bolsonaro. The Associated Press reported that this ended a run of seven straight conservative presidential victories in the region in 18 months, including José Antonio Kast (Chile), Keiko Fujimori (Peru) and Abelardo de la Espriella (Colombia)."
     ],
     pro:[
      "**Tide or anti-incumbency?** The “tide” metaphor suggests a shared ideological current. An alternative reading stresses anti-incumbent voting driven by economic cycles and, increasingly, by crime and security concerns. Test the two by asking whether incumbents of all colours lost under similar conditions.",
      "**Policy legacies.** Conditional cash transfers (Brazil’s Bolsa Família, Mexico’s Progresa/Oportunidades) spread under governments of different ideologies, a reminder that labels can hide policy convergence.",
      "**Regional effects.** Left governments built bodies such as UNASUR and CELAC; their decline after government changes is a case study in regionalism built on ideology ({{latin-american-regionalism}}).",
      {tip:"Date every claim about which governments are “left” or “right”, and cite the source of the classification."}
     ]
    },
    related:["populism-debates","latin-american-regionalism","latin-american-democratisation","dependency-debates"],
    sources:[{t:"AP via 6abc: Lula’s win in Brazil bucks a regional shift to the right (26 October 2026)", url:"https://6abc.com/story/lulas-win-brazil-bucks-regional-shift-denies-trump-powerful-ally/19980593/"}],
    checked:"2026-11"},

   {id:"latin-american-regionalism", title:"Latin American regionalism and ties with Asia", aka:["Mercosur","CELAC","Pacific Alliance","UNASUR","ALBA","post-hegemonic regionalism"], tags:["Latin America","regional organisations","Asia"],
    summary:"The crowded landscape of Latin American and Caribbean regional bodies, why they rise and fall with governments, and the region’s growing economic ties with Asia.",
    levels:{
     starter:[
      "Latin America and the Caribbean have many overlapping regional organisations. Some, like the Organization of American States (1948), include the United States. Others, like CELAC (2011), deliberately do not.",
      "Some focus on trade, such as Mercosur (Argentina, Brazil, Paraguay and Uruguay, with Bolivia joining as a full member in 2024) and the Pacific Alliance (Chile, Colombia, Mexico and Peru). Others were political projects of governments that shared an ideology, such as ALBA and UNASUR.",
      "Asia, especially China, has become a key trading partner and investor for many countries in the region."
     ],
     builder:[
      "**Mercosur.** Founded by the Treaty of Asunción (1991). Its trade agreement with the EU was signed on 17 January 2026 and applied provisionally from 1 May 2026, while legal challenges by EU lawmakers were pending at the EU’s Court of Justice (AP, May 2026).",
      "**ALBA** (2004), begun by Venezuela and Cuba; **UNASUR** (treaty 2008), which lost many members after 2018 before Brazil rejoined in 2023; **CELAC** (2011), all 33 states of the region without the US or Canada; the **Pacific Alliance** (2011), trade-focused and Asia-facing.",
      "**Post-hegemonic regionalism.** Pía Riggirozzi and Diana Tussie (2012) described the 2000s bodies as putting social policy and autonomy from the US ahead of trade.",
      "**Asia.** China is the largest trading partner of several South American states; COSCO Shipping’s majority-owned port of Chancay in Peru opened in November 2024; a China–CELAC Forum has met since 2015. Chile, Mexico and Peru are in APEC and the CPTPP. Brazil has the largest population of Japanese descent outside Japan, the result of migration that began in 1908."
     ],
     pro:[
      "**Why so many bodies?** Explanations include presidential diplomacy (bodies tied to leaders), overlapping sub-regional identities (Andean, Central American, Caribbean, Southern Cone), and hedging between the US, Europe and China. Critics speak of “regionalism without integration”.",
      "**Democracy clauses.** The OAS’s Inter-American Democratic Charter (2001) and Mercosur’s democracy clause have been used to suspend members (Unit 9); their use is contested as selective by some governments.",
      "**Asia debates.** Supporters see Chinese demand and investment as diversification away from the US; critics fear a new commodity dependence (link the Prebisch–Singer argument, Unit 14). Japanese and Korean firms compete in autos, mining and infrastructure.",
      {tip:"For a comparison with Asia, set the Pacific Alliance beside ASEAN’s economic community, or CELAC beside ASEAN+3."}
     ]
    },
    related:["comparative-regionalism","pink-tide","regional-organizations","china-overseas-lending","trade-agreements-regional"],
    sources:[{t:"AP via WTOP: EU–Mercosur trade deal takes provisional effect (May 2026)", url:"https://wtop.com/europe/2026/05/eu-mercosur-trade-deal-takes-provisional-effect-boosting-hopes-and-concerns-for-millions/"}],
    checked:"2026-11"},

   {id:"rentier-state-theory", title:"Rentier state theory and late rentierism", aka:["rentier state","allocation state","oil curse","no taxation without representation"], tags:["Middle East","political economy","energy"],
    summary:"Why oil-rich states may stay authoritarian: rentier state theory from Mahdavy to Beblawi and Luciani, the statistical oil-curse debate, its critics, and Gray’s late rentierism in the Gulf.",
    levels:{
     starter:[
      "Most governments pay for themselves by taxing their citizens. Some oil-rich states do not need to: foreign buyers of their oil pay them directly. Scholars call these **rentier states**.",
      "The theory says that a government that does not tax people can buy their support with jobs, subsidies and services, and so faces less pressure to let them vote or take part in decisions: “no taxation, no representation”.",
      {key:"Rentier theory is a powerful starting point, but oil states differ greatly, and people in them still make political demands."}
     ],
     builder:[
      "**Origins.** Hossein Mahdavy (1970), writing on Iran, introduced the rentier state. Hazem Beblawi and Giacomo Luciani’s edited volume *The Rentier State* (1987) built the theory; Luciani distinguished the **allocation state**, which distributes external income, from the **production state**, which taxes a domestic economy.",
      "**Testing.** Michael Ross, “Does Oil Hinder Democracy?” (*World Politics*, 2001) and *The Oil Curse* (2012), found statistical links between oil wealth and authoritarianism, linked to the wider resource curse (Unit 12).",
      "**Late rentierism.** Matthew Gray (CIRS Occasional Paper no. 7, Georgetown University in Qatar, 2011) argued that Gulf states have adapted to globalisation: still undemocratic but more responsive, entrepreneurial, globally invested and focused on long-term development and branding."
     ],
     pro:[
      "**Critiques.** Gwenn Okruhlik (*Comparative Politics*, 1999) showed that rents can fuel opposition when distributed unequally; Michael Herb (*The Wages of Oil*, 2014) showed large differences among Gulf states, from Kuwait’s strong parliament to the UAE; others argue that rentier theory neglects history, religion, tribal structures and external alliances.",
      "**Diversification and transition.** Saudi Arabia’s Vision 2030 (2016) and similar plans try to build non-oil economies; the energy transition (Unit 16: {{energy-transition-politics}}) raises the question of what happens to rentier bargains if demand falls.",
      "**Beyond the Middle East.** Rentier arguments are applied to Nigeria, Venezuela, Brunei and Timor-Leste, and to aid- or remittance-dependent states: good material for cross-regional comparison.",
      {tip:"Measure rentierism with the share of government revenue from resources versus taxes, not just with oil production."}
     ]
    },
    related:["gulf-states-rising","arab-uprisings","energy-transition-politics","comparative-area-studies"],
    sources:[{t:"CIRS, Georgetown University in Qatar: Gray, A Theory of “Late Rentierism” in the Arab States of the Gulf (Occasional Paper no. 7, 2011)", url:"https://cirs.qatar.georgetown.edu/publications/stub-21/"}],
    checked:"2026-11"},

   {id:"arab-uprisings", title:"The Arab uprisings (2010–11) and after", aka:["Arab Spring","authoritarian durability","second wave 2019"], tags:["Middle East","revolution","democracy"],
    summary:"The protest wave that began in Tunisia in December 2010, its divergent outcomes, the 2019 second wave, and the main explanations of why some regimes fell and others survived.",
    levels:{
     starter:[
      "In December 2010 a young street vendor in Tunisia, Mohamed Bouazizi, set himself on fire after a confrontation with officials. His act sparked protests that spread across the Arab world in 2011.",
      "Long-serving presidents fell in Tunisia, Egypt, Libya and Yemen. But the results were very different: Tunisia built a democracy that later came under strain; Egypt’s military returned to power; Libya, Yemen and Syria fell into civil wars.",
      "Most of the region’s monarchies survived. In 2019 a second wave of protests removed leaders in Sudan and Algeria."
     ],
     builder:[
      "**Timeline.** Bouazizi’s act on 17 December 2010; Ben Ali fled on 14 January 2011; Mubarak resigned on 11 February 2011; revolts in Libya, Yemen, Bahrain and Syria followed. Egypt’s elected president Mohamed Morsi was removed by the military in 2013. Tunisia adopted a new constitution in 2014; in July 2021 President Kais Saied suspended parliament. Syria’s Bashar al-Assad was overthrown in December 2024.",
      "**Explanations.** Eva Bellin (*Comparative Politics*, 2004; revisited 2012) argued that the will and capacity of the coercive apparatus to repress decided outcomes. Sean Yom and Gregory Gause (*Journal of Democracy*, 2012) explained monarchies’ survival by cross-cutting coalitions, rents and foreign backing. Asef Bayat (*Revolution without Revolutionaries*, 2017) argued that the movements lacked plans for taking power.",
      "**Media.** On social media’s role, see Unit 7 ({{digital-activism}})."
     ],
     pro:[
      "**Exceptionalism revisited.** Before 2011 some scholars spoke of “Arab exceptionalism” in democratisation; the uprisings challenged that, and their aftermath was then read by some as confirming it. Comparative scholars warn against both readings and look at specific institutions: armies, parties, unions and external patrons.",
      "**Internationalisation.** Gulf states, Iran, Türkiye, Russia, the US and European states backed different sides in Libya, Syria and Yemen, turning uprisings into regional proxy conflicts (Marc Lynch, *The New Arab Wars*, 2016).",
      "**Second wave.** Sudan (2019) and Algeria (2019) showed movements learning from 2011 (for example, refusing to leave the streets after a leader fell); Iraq and Lebanon saw large protests against sectarian power-sharing.",
      {tip:"Avoid treating “the Arab Spring” as one event. Compare two or three cases with a clear design."}
     ]
    },
    related:["rentier-state-theory","gulf-states-rising","digital-activism","comparative-area-studies"],
    sources:[{t:"Arab Barometer: about (survey data on the region since 2006)", url:"https://www.arabbarometer.org/about/"}],
    checked:"2026-11"},

   {id:"gulf-states-rising", title:"The Gulf states’ rising role and Asia’s energy stake", aka:["GCC","Gulf mediation","Strait of Hormuz","chokepoints"], tags:["Middle East","Asia","energy","diplomacy"],
    summary:"How the Gulf monarchies became financiers, mediators and brand-builders, and why Gulf security and the Strait of Hormuz matter especially for Asia, as of November 2026.",
    levels:{
     starter:[
      "The six Gulf monarchies (Saudi Arabia, Kuwait, Bahrain, Qatar, the United Arab Emirates and Oman) formed the Gulf Cooperation Council in 1981. Oil and gas made several of them very rich.",
      "Today they invest around the world, host peace talks, hold sporting mega-events and play larger roles in Africa and Asia.",
      "Most of the oil and gas they export goes to Asia, through a narrow sea passage, the Strait of Hormuz. When shipping there is disrupted, Asian economies feel it first."
     ],
     builder:[
      "**Diplomacy.** A rift in which four states cut ties with Qatar (2017) ended with the Al-Ula Declaration (January 2021). Saudi Arabia and Iran restored relations in an agreement brokered in Beijing (March 2023). Qatar and Oman are frequent mediators.",
      "**Economy.** Sovereign wealth funds invest globally; Saudi Arabia’s Vision 2030 (2016) seeks diversification (see {{rentier-state-theory}}). The UAE joined BRICS in 2024 (Unit 13).",
      "**Energy and Asia.** In 2024 about 20 million barrels of oil a day, about a fifth of global consumption, and about a fifth of global LNG trade passed through Hormuz; 84 per cent of the crude and condensate and 83 per cent of the LNG went to Asia, and China, India, Japan and South Korea took 69 per cent of the crude and condensate (US EIA, 2025).",
      "**2026.** During the war involving Iran that began at the end of February 2026, the UN reported that traffic through the strait fell from about 150 ships a day to four or five, with about 2,000 ships stranded in the Gulf (April 2026)."
     ],
     pro:[
      "**Interpretations.** Kristian Coates Ulrichsen (*The Gulf States in International Political Economy*, 2016) reads the Gulf’s rise as small and medium states converting wealth into influence. Others stress dependence on external security guarantees, and human rights critics focus on political rights and the kafala system for migrant workers, which several governments say they have reformed.",
      "**Asia’s strategies.** China has expanded trade and diplomatic roles; India promoted the India–Middle East–Europe Economic Corridor announced at the G20 in 2023; Japan and South Korea seek diversification and strategic reserves. Attacks on Red Sea shipping by Yemen’s Houthi movement from late 2023 added a second chokepoint risk at Bab el-Mandeb.",
      {tip:"For current shipping and energy data, use the issuing body (EIA, IEA, IMO) and date every figure; the situation changed rapidly in 2026."}
     ]
    },
    related:["rentier-state-theory","arab-uprisings","brics","sports-mega-events","energy-transition-politics"],
    sources:[{t:"US EIA: Amid regional conflict, the Strait of Hormuz remains critical oil chokepoint (16 June 2025)", url:"https://www.eia.gov/todayinenergy/detail.php?id=65504"},{t:"UN News: shipping through the Strait of Hormuz (8 April 2026)", url:"https://news.un.org/en/story/2026/04/1167270"}],
    checked:"2026-11"},

   {id:"israeli-palestinian-conflict", title:"The Israeli–Palestinian conflict: history and positions", aka:["Nakba","Oslo Accords","two-state solution","Gaza ceasefire","Sykes–Picot"], tags:["Middle East","conflict","peace processes"],
    summary:"A neutral, dated guide to the conflict’s history from the mandate era to the Gaza ceasefire, the main positions on a final settlement, and how to write about it, as of November 2026.",
    levels:{
     starter:[
      "The conflict between Israelis and Palestinians is about land, security, self-determination, refugees and Jerusalem. Both peoples have deep historical and religious ties to the same territory.",
      "In 1948 Israel declared independence. In the war that followed, most Palestinians from the areas that became Israel fled or were expelled; Palestinians call this the Nakba (“catastrophe”). Israelis remember 1948 as their War of Independence. Both memories are part of the history.",
      "Many peace efforts have been made. Most governments support a “two-state solution”: Israel and a Palestinian state side by side. The conflict remains unresolved.",
      {key:"Write about it with precise dates, attributed positions and each side’s own terms."}
     ],
     builder:[
      "**Mandate to 1949.** The Sykes–Picot Agreement (1916), the Balfour Declaration (1917) and the British Mandate for Palestine; the UN General Assembly’s partition recommendation (November 1947); Israel’s declaration of independence (14 May 1948); the 1948 war, in which more than half of the Palestinian population was permanently displaced (UN).",
      "**1967 and after.** Israel took the West Bank, East Jerusalem, Gaza, the Golan Heights and Sinai; Resolution 242 set out “land for peace”. Egypt–Israel peace (1979); the Oslo Accords (1993, 1995) created the Palestinian Authority, leaving final-status issues unresolved.",
      "**2023–26.** The Hamas-led attack of 7 October 2023 killed about 1,200 people in Israel and took 251 hostages; by October 2026 Gaza’s Health Ministry reported more than 74,000 Palestinians killed. A ceasefire under a US-brokered 20-point plan began in October 2025; Security Council Resolution 2803 (17 November 2025) endorsed the plan and authorised a temporary International Stabilization Force.",
      "**As of November 2026** the ceasefire had not been formally ended, but it was fragile: all hostages had been released; Israeli strikes had killed more than 1,400 Palestinians since it began (Gaza Health Ministry); Hamas had agreed to disarm gradually, while Israel said it would not withdraw before complete disarmament; Israel controlled more than half of Gaza; and the stabilisation force had not deployed (AP, October 2026)."
     ],
     pro:[
      "**Positions.** The UN and most governments support two states; 156 of 193 UN members recognised the State of Palestine by September 2025, including the UK, France, Canada, Australia and Belgium that month, while the US, Germany, Italy and Japan did not (CFR). Israel’s government under Benjamin Netanyahu (caretaker after the October 2026 election) opposes a Palestinian state, citing security. The Palestinian Authority seeks a state on the 1967 lines with East Jerusalem as its capital. Palestine has been a UN non-member observer state since 2012.",
      "**Law.** The ICJ’s advisory opinions of 2024 and 2025 and related cases are covered in Unit 10 ({{icj-in-practice}}); Israel’s government rejected the main findings of both opinions.",
      "**Scholarship.** Histories differ sharply in emphasis; dual-narrative projects such as the PRIME school textbook, published in English as *Side by Side: Parallel Histories of Israel–Palestine* (2012), set Israeli and Palestinian accounts on facing pages for students to compare.",
      {warn:"Casualty figures come from parties to the conflict and are contested; attribute them (for example, “Gaza’s Health Ministry reported…”, “according to Israeli authorities…”) and note how UN agencies assess them."}
     ]
    },
    related:["arab-israeli-normalisation","icj-in-practice","refugees-and-displacement","peace-operations"],
    sources:[{t:"UN: About the Nakba (Question of Palestine)", url:"https://www.un.org/unispal/about-the-nakba/"},{t:"UN meeting coverage: Security Council resolution 2803 (2025), SC/16231", url:"https://press.un.org/en/2025/sc16231.doc.htm"},{t:"AP via Philadelphia Inquirer: Gaza ceasefire anniversary (10 October 2026)", url:"https://www.inquirer.com/news/nation-world/gaza-ceasefire-anniversary-more-dead-israeli-strikes-continue-rebuilding-hamas-trump-netanyahu-20261010.html"}],
    checked:"2026-11"},

   {id:"arab-israeli-normalisation", title:"Arab–Israeli normalisation and the Abraham Accords", aka:["Abraham Accords","Arab Peace Initiative","normalisation"], tags:["Middle East","diplomacy"],
    summary:"How and why Israel normalised relations with Arab and other Muslim-majority states, from Egypt (1979) to the Abraham Accords (2020) and Kazakhstan’s announced accession (2025), and the arguments for and against.",
    levels:{
     starter:[
      "For decades most Arab states did not recognise Israel. Egypt made peace with Israel in 1979 and Jordan in 1994.",
      "In September 2020 the United Arab Emirates and Bahrain agreed to normalise relations with Israel in the US-brokered Abraham Accords; Morocco and Sudan followed. In November 2025 Kazakhstan, which already had diplomatic relations with Israel, announced it would join.",
      "Supporters say normalisation brings trade, travel and stability. Critics, including Palestinian leaders, say it ignores Palestinians’ demand for a state."
     ],
     builder:[
      "**Peace treaties.** Egypt’s treaty with Israel (1979) followed the 1973 war and the Camp David Accords and returned Sinai to Egypt; Jordan’s treaty (1994) followed the Oslo process. Both have held, though public relations between the peoples have often been described as a “cold peace”.",
      "**Earlier frameworks.** The Arab Peace Initiative (Beirut summit, 2002) offered normalisation in exchange for Israeli withdrawal to the 1967 lines and a just solution for refugees.",
      "**The Accords.** Signed in September 2020 (UAE and Bahrain); Morocco (December 2020), linked to US recognition of Moroccan sovereignty over Western Sahara, a disputed territory; Sudan (January 2021), which signed the Accords’ declaration but has not established full diplomatic relations with Israel.",
      "**Kazakhstan.** Announced on 6 November 2025 that it would join; as of late September 2026 the formal signing ceremony had not taken place (Times of Central Asia)."
     ],
     pro:[
      "**Saudi Arabia.** Talks on Saudi–Israeli normalisation were reported before October 2023. Saudi officials have since said that normalisation requires an “irreversible pathway” to a Palestinian state, a position a Saudi source restated in May 2026 (Al Arabiya); Israel’s government opposes a Palestinian state. No Saudi–Israeli normalisation agreement had been announced as of November 2026.",
      "**Interpretations.** Realists read normalisation as alignment against Iran; liberals stress trade, technology and tourism; critics see the sidelining of Palestinian self-determination and ask how much public support it has in Arab societies; regional surveys such as Arab Barometer let you check that question country by country.",
      {tip:"Distinguish peace treaties after wars (Egypt, Jordan) from normalisation between states never at war (UAE, Bahrain, Kazakhstan). The motives and domestic politics differ."}
     ]
    },
    related:["israeli-palestinian-conflict","gulf-states-rising"],
    sources:[{t:"NPR (via WRVO): Kazakhstan to join Abraham Accords (7 November 2025)", url:"https://www.wrvo.org/2025-11-07/kazakhstan-to-join-abraham-accords-with-israel-in-symbolic-boost-to-trump-initiative"},{t:"Times of Central Asia: Kazakhstan takes part in Abraham Accords meeting as signing awaits (28 September 2026)", url:"https://timesca.com/kazakhstan-takes-part-in-abraham-accords-meeting-as-trump-promised-signing-awaits/"},{t:"Al Arabiya English: Saudi position on Palestinian issue remains unchanged (25 May 2026)", url:"https://english.alarabiya.net/amp/News/saudi-arabia/2026/05/25/saudi-position-on-palestinian-issue-remains-unchanged-source"}],
    checked:"2026-11"},

   {id:"international-studies-map", title:"The map of international studies", aka:["clusters of international studies","cross-cutting debates","how to keep learning"], tags:["synthesis","study skills","field"],
    summary:"How the field’s foundations and four clusters fit together, six debates that cut across them, and free resources for continued learning, as checked in November 2026.",
    levels:{
     starter:[
      "International studies brings together history, theory and methods (the **foundations**) with four clusters: **culture, society and media**; **global governance**; **sustainable development**; and **area studies**.",
      "Real problems cross the clusters. A question about climate finance involves development, law, media and the politics of particular regions.",
      "Six big debates keep returning: how world order changes; whether power or ideas matter more; whether structures or actors drive outcomes; whether concepts travel across regions; whether the state is still central; and who produces knowledge about whom.",
      {key:"Place every new reading in a debate, and look for a reading on the other side."}
     ],
     builder:[
      "**In this track.** Foundations: Units 1–4. Culture, society and media: 5–8. Global governance: 9–13. Sustainable development: 14–17. Area studies: 4 and 18–22.",
      "**The six debates.** Order and change (Units 1, 13, 19); material and ideational (Units 2, 5, 8); structure and agency (Units 14–15, 22); universal and particular (Units 4, 11, 22); state and beyond (Units 7, 9, 13); knowledge and power (Units 3, 5, 22).",
      "**Free resources (checked November 2026).** *Global Studies Quarterly* (the International Studies Association’s fully open-access journal); *Africa Spectrum* and the *Journal of Politics in Latin America* (open access, GIGA); E-International Relations’ open textbooks; Crisis Group’s *CrisisWatch* (monthly, 70+ conflicts, back to 2003); V-Dem (version 16, March 2026, free) and UCDP; Afrobarometer, Latinobarómetro and Arab Barometer."
     ],
     pro:[
      "**Moving between clusters** is what makes a strong thesis: a concrete puzzle where two clusters meet, tested in places you know well, with a method you can defend (Unit 3: {{ir-thesis}}).",
      "**Staying current.** Build a weekly routine: one journal article, one primary document (a UN resolution, an AU communiqué, a court ruling), one report from a region you know less well. Track sources in a reference manager and date every changeable fact.",
      "**Critique of the map.** Cluster maps reflect how programmes are organised, not the world. Global IR scholars argue that curricula still centre Western theory and treat other regions as cases; a strong student notices whose questions the map puts at the centre ({{global-ir}}).",
      {tip:"Check access terms on each resource’s own site before relying on it: journals, datasets and newsletters change their policies."}
     ]
    },
    related:["global-ir","ir-thesis","comparative-area-studies","research-puzzles","ir-datasets"],
    read:[{book:"eirt", where:"Chapter 10 “Towards a Global IR?”"}],
    sources:[{t:"Global Studies Quarterly (International Studies Association, open access)", url:"https://academic.oup.com/isagsq"},{t:"Africa Spectrum (GIGA, open access)", url:"https://journals.sagepub.com/home/afr"},{t:"International Crisis Group: CrisisWatch", url:"https://www.crisisgroup.org/crisiswatch"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"comparative-area-studies", term:"Comparative area studies (CAS)", def:"An approach that combines deep, context-sensitive knowledge of places with deliberate comparison across them: within one region, between regions as wholes, or across regions (Ahram, Köllner & Sil, 2018).", codex:"comparative-area-studies"},
   {id:"mena", term:"MENA", def:"The Middle East and North Africa: a common analytic grouping of the Arab states, Iran, Israel and Türkiye (definitions vary), used by many scholars and agencies.", codex:"comparative-area-studies"},
   {id:"west-asia", term:"West Asia", def:"An alternative name for the part of the Middle East east of Suez, preferred by some writers because it names the region by its own continent rather than by its distance from Europe.", codex:"comparative-area-studies"},
   {id:"sub-saharan-africa", term:"Sub-Saharan Africa", def:"A statistical grouping of the African states south of the Sahara, used by the World Bank and others; critics say it treats the Sahara as a wall and splits the continent the African Union treats as one.", codex:"comparative-area-studies"},
   {id:"latin-america", term:"Latin America", def:"The Spanish- and Portuguese-speaking (and sometimes French-speaking) states of the Americas. The name is usually traced to 1856; whether it includes the English- and Dutch-speaking Caribbean depends on the definition.", codex:"comparative-area-studies"},
   {id:"parachute-research", term:"Parachute research", def:"Research in which outsiders fly in, collect data and publish elsewhere without fair partnership with, credit to or return of results to local researchers and participants. Also called extractive or “helicopter” research.", codex:"comparative-area-studies"},
   {id:"global-barometer-surveys", term:"Global Barometer Surveys", def:"A network of regional public-opinion surveys, including Afrobarometer, Latinobarómetro, Arab Barometer and Asian Barometer, that ask comparable questions about democracy, governance and society.", codex:"comparative-area-studies"},
   {id:"juridical-statehood", term:"Juridical statehood", def:"Statehood that rests on international legal recognition of sovereignty and borders, whatever the state’s actual control on the ground (Jackson & Rosberg, 1982).", codex:"african-statehood-debates"},
   {id:"empirical-statehood", term:"Empirical statehood", def:"Statehood as actual capacity: effective control of territory, a monopoly of force and the ability to govern and tax (Jackson & Rosberg, 1982).", codex:"african-statehood-debates"},
   {id:"neopatrimonialism", term:"Neopatrimonialism", def:"A system in which formal, legal-bureaucratic institutions coexist with personal rule and patronage networks, so that public office is used to reward followers. A widely used and widely criticised concept in African politics.", codex:"african-statehood-debates"},
   {id:"decentralised-despotism", term:"Decentralised despotism", def:"Mahmood Mamdani’s term (1996) for colonial rule through “customary” chiefs in rural areas, alongside civil law for citizens in towns; he argued the resulting bifurcated state outlived independence.", codex:"mahmood-mamdani"},
   {id:"politics-of-the-belly", term:"Politics of the belly", def:"Jean-François Bayart’s phrase (from a Cameroonian expression) for politics organised around access to state resources, in *L’État en Afrique* (1989).", codex:"african-statehood-debates"},
   {id:"unconstitutional-change-of-government", term:"Unconstitutional change of government", def:"In African Union rules, a coup, mercenary intervention, armed seizure of power or refusal to hand over power after free and fair elections, or the manipulation of constitutions to stay in office; it leads to suspension.", codex:"african-peace-security-architecture"},
   {id:"alliance-of-sahel-states", term:"Alliance of Sahel States (AES)", def:"An alliance formed in 2023 by the military governments of Mali, Burkina Faso and Niger, which became a confederation in July 2024; the three left ECOWAS in January 2025.", codex:"african-peace-security-architecture"},
   {id:"apsa", term:"African Peace and Security Architecture (APSA)", def:"The African Union’s system for preventing, managing and resolving conflicts: the Peace and Security Council supported by the Panel of the Wise, the Continental Early Warning System, the African Standby Force and the Peace Fund, with the regional economic communities as building blocks.", codex:"african-peace-security-architecture"},
   {id:"peace-and-security-council", term:"Peace and Security Council (AU)", def:"The African Union’s standing decision-making body on peace and security: 15 members with equal votes and no permanent seats, set up by a 2002 protocol and operational from 2004.", codex:"african-peace-security-architecture"},
   {id:"african-standby-force", term:"African Standby Force", def:"One of APSA’s four pillars: multinational military, police and civilian standby units, organised largely through regional brigades, for African peace support operations.", codex:"african-peace-security-architecture"},
   {id:"regional-economic-communities", term:"Regional economic communities (RECs)", def:"The eight sub-regional organisations the African Union recognises as building blocks of integration and of APSA: AMU, CEN-SAD, COMESA, EAC, ECCAS, ECOWAS, IGAD and SADC.", codex:"african-peace-security-architecture"},
   {id:"african-solutions", term:"“African solutions to African problems”", def:"A slogan for African leadership and ownership of peace and security responses; critics note the tension with heavy reliance on outside funding.", codex:"african-peace-security-architecture"},
   {id:"agenda-2063", term:"Agenda 2063", def:"The African Union’s long-term development framework, adopted in 2015, with continental goals on growth, integration, governance, peace and culture.", codex:"africa-rising-debate"},
   {id:"africa-rising", term:"“Africa rising”", def:"A narrative, popularised by a December 2011 *Economist* cover, of rapid growth and change across Africa after 2000; critics point to commodity dependence, weak statistics and limited structural change.", codex:"africa-rising-debate"},
   {id:"demographic-dividend", term:"Demographic dividend", def:"A boost to economic growth that can occur when falling fertility raises the share of working-age people in a population; it depends on jobs, education and health, so it is possible rather than automatic.", codex:"africa-rising-debate"},
   {id:"focac", term:"FOCAC", def:"The Forum on China–Africa Cooperation, begun in 2000, which holds ministerial meetings and summits (most recently in Beijing in 2024) every three years.", codex:"africa-asia-relations"},
   {id:"ticad", term:"TICAD", def:"The Tokyo International Conference on African Development, led by Japan since 1993 and co-organised with the UN, UNDP, the World Bank and the African Union Commission, stressing African ownership and international partnership.", codex:"africa-asia-relations"},
   {id:"india-africa-forum-summit", term:"India–Africa Forum Summit", def:"India’s summit process with African states, held in 2008, 2011 and 2015; the third, in New Delhi, was the largest.", codex:"africa-asia-relations"},
   {id:"commodity-boom", term:"Commodity boom (2000s)", def:"The rise in prices of oil, metals and farm products from the early 2000s to about 2013–14, driven largely by Chinese demand, which raised growth and public revenue in many commodity exporters.", codex:"pink-tide"},
   {id:"bureaucratic-authoritarianism", term:"Bureaucratic authoritarianism", def:"Guillermo O’Donnell’s term (1973) for military-technocratic regimes, such as Brazil’s after 1964 and Argentina’s after 1966, that excluded popular sectors to deepen industrialisation.", codex:"guillermo-odonnell"},
   {id:"pacted-transition", term:"Pacted transition", def:"A move from authoritarian rule to democracy negotiated between regime moderates and opposition moderates, often with guarantees for the outgoing elite (O’Donnell & Schmitter, 1986).", codex:"latin-american-democratisation"},
   {id:"third-wave-democratisation", term:"Third wave of democratisation", def:"Samuel Huntington’s term (1991) for the wave of transitions to democracy that began with Portugal’s revolution in April 1974 and spread to Southern Europe, Latin America, Asia, Eastern Europe and Africa.", codex:"latin-american-democratisation"},
   {id:"delegative-democracy", term:"Delegative democracy", def:"O’Donnell’s term (1994) for democracies in which elected presidents govern as they see fit between elections, with weak checks from congress, courts and other agencies.", codex:"guillermo-odonnell"},
   {id:"populism", term:"Populism", def:"A contested concept. In the widely used ideational definition, a thin-centred ideology that divides society into “the pure people” and “the corrupt elite” and claims politics should express the people’s general will (Mudde, 2004).", codex:"populism-debates"},
   {id:"thin-centred-ideology", term:"Thin-centred ideology", def:"An ideology with a small core of ideas that attaches itself to fuller ideologies such as socialism or nationalism; Mudde applies the term to populism.", codex:"populism-debates"},
   {id:"neoliberal-populism", term:"Neoliberal populism", def:"The combination of personalist, anti-elite appeals with market reforms, identified in 1990s Latin America (for example Fujimori and Menem) by Roberts and Weyland.", codex:"populism-debates"},
   {id:"pink-tide", term:"Pink tide", def:"The wave of left and centre-left election victories in Latin America that began with Hugo Chávez’s election in 1998; a “second pink tide” is often dated from 2018.", codex:"pink-tide"},
   {id:"celac", term:"CELAC", def:"The Community of Latin American and Caribbean States, founded in 2011, which includes all 33 states of the region and excludes the United States and Canada.", codex:"latin-american-regionalism"},
   {id:"pacific-alliance", term:"Pacific Alliance", def:"A trade-oriented grouping of Chile, Colombia, Mexico and Peru, launched in 2011, focused on economic integration and links with Asia-Pacific.", codex:"latin-american-regionalism"},
   {id:"unasur", term:"UNASUR", def:"The Union of South American Nations, created by a 2008 treaty; several members suspended participation in 2018 and many later left, and Brazil rejoined in 2023.", codex:"latin-american-regionalism"},
   {id:"alba", term:"ALBA", def:"The Bolivarian Alliance for the Peoples of Our America, begun by Venezuela and Cuba in 2004 as a left-wing alternative to US-led trade plans.", codex:"latin-american-regionalism"},
   {id:"rentier-state", term:"Rentier state", def:"A state that lives mainly on external rents, such as oil and gas revenue paid by foreign buyers, rather than on taxing its own citizens (Mahdavy, 1970; Beblawi & Luciani, 1987).", codex:"rentier-state-theory"},
   {id:"allocation-state", term:"Allocation state", def:"Giacomo Luciani’s term for a state whose revenue comes mostly from abroad and whose main economic role is to distribute it, in contrast to a production state that must tax a domestic economy.", codex:"rentier-state-theory"},
   {id:"late-rentierism", term:"Late rentierism", def:"Matthew Gray’s term (2011) for the adapted rentierism of today’s Gulf states: still undemocratic but more responsive, entrepreneurial, globalised and focused on long-term development and branding.", codex:"rentier-state-theory"},
   {id:"sykes-picot-agreement", term:"Sykes–Picot Agreement", def:"A secret Anglo-French agreement of May 1916 dividing Ottoman Arab lands into zones of control; the post-war borders came from later agreements and differ from its lines.", codex:"israeli-palestinian-conflict"},
   {id:"arab-uprisings", term:"Arab uprisings", def:"The wave of protests and revolts that began in Tunisia in December 2010 and spread across the Arab world in 2011 (often called the “Arab Spring”), with a second wave in 2019.", codex:"arab-uprisings"},
   {id:"gcc", term:"Gulf Cooperation Council (GCC)", def:"A regional organisation founded in 1981 by Saudi Arabia, Kuwait, Bahrain, Qatar, the United Arab Emirates and Oman.", codex:"gulf-states-rising"},
   {id:"nakba", term:"Nakba", def:"Arabic for “catastrophe”: the Palestinian name for the mass displacement and dispossession of Palestinians in the 1947–49 war; the UN says more than half of the Palestinian population was permanently displaced.", codex:"israeli-palestinian-conflict"},
   {id:"oslo-accords", term:"Oslo Accords", def:"Agreements between Israel and the PLO (1993 and 1995) that brought mutual recognition and created the Palestinian Authority, leaving final-status issues for later negotiation.", codex:"israeli-palestinian-conflict"},
   {id:"two-state-solution", term:"Two-state solution", def:"The proposal for an independent State of Palestine alongside Israel, the stated aim of the UN and most governments; Israel’s government (as of November 2026) opposes a Palestinian state.", codex:"israeli-palestinian-conflict"},
   {id:"diplomatic-normalisation", term:"Normalisation (diplomatic)", def:"Establishing full, regular diplomatic and economic relations between states that previously had none, as between Israel and several Arab states.", codex:"arab-israeli-normalisation"},
   {id:"abraham-accords", term:"Abraham Accords", def:"US-brokered agreements from September 2020 under which the UAE and Bahrain, then Morocco and Sudan, agreed to normalise relations with Israel; Kazakhstan announced in November 2025 that it would join.", codex:"arab-israeli-normalisation"},
   {id:"chokepoint", term:"Chokepoint", def:"A narrow passage on a major trade route, such as the Strait of Hormuz, Bab el-Mandeb or the Strait of Malacca, where disruption can affect a large share of world trade.", codex:"gulf-states-rising"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u22-q01", lesson:"e4u22-l1", level:1, q:"Which statement about the name “Middle East” is accurate?", options:[
     {t:"It spread after Alfred Thayer Mahan used it in a 1902 article, and some writers in the region call it Eurocentric", ok:true, why:"Right: it names the region from a European and British Indian viewpoint."},
     {t:"It is the region’s own ancient name for itself", why:"It is a modern term from outside the region."},
     {t:"The UN’s Charter defines it", why:"The Charter defines no regions."},
     {t:"It has always included Pakistan and Afghanistan in every definition", why:"Definitions vary; most do not include them."}]},
   {id:"e4u22-q02", lesson:"e4u22-l1", level:1, q:"Who is usually credited with first putting “Latin America” into print, and when?", options:[
     {t:"Francisco Bilbao, a Chilean writer, in Paris in 1856", ok:true, why:"Right; José María Torres Caicedo used it the following year."},
     {t:"Simón Bolívar in 1819", why:"Bolívar did not use the term; it dates from the 1850s."},
     {t:"The US Congress in 1898", why:"The term predates that by four decades and came from the region’s own writers."},
     {t:"The United Nations in 1948", why:"It was in use about a century earlier."}]},
   {id:"e4u22-q03", lesson:"e4u22-l1", level:2, q:"Amara wants to know whether oil-funded monarchies handle protest in similar ways, comparing Kuwait with Brunei. Which design is she using?", options:[
     {t:"Cross-regional comparative area studies", ok:true, why:"Right: cases from different regions chosen for a shared feature."},
     {t:"Intra-regional comparison", why:"Kuwait and Brunei are in different regions."},
     {t:"Inter-regional comparison", why:"That compares regions as wholes, not individual states."},
     {t:"A single-case study", why:"There are two cases."}]},
   {id:"e4u22-q04", lesson:"e4u22-l1", level:2, q:"Kenji is writing about public trust in courts in five Latin American countries and cannot read Spanish or Portuguese yet. What is the most defensible approach?", options:[
     {t:"Use Latinobarómetro data and translated sources, work with a colleague who reads the languages, and state the limitation in his methods section", ok:true, why:"Right: honest use of accessible sources and partners, with the limit made explicit."},
     {t:"Rely only on English-language news from outside the region and say nothing", why:"This hides a major limitation and misses local voices."},
     {t:"Assume all five countries are the same", why:"That is exactly the single-story trap."},
     {t:"Abandon the topic because only native speakers can study it", why:"Position shapes what you see, but careful outsiders can contribute."}]},
   {id:"e4u22-q05", lesson:"e4u22-l1", level:1, q:"Which survey interviews people face to face in the language of their choice in more than 30 African countries?", options:[
     {t:"Afrobarometer", ok:true, why:"Right: with nationally representative samples of 1,200–2,400 adults."},
     {t:"Latinobarómetro", why:"That covers 18 Latin American countries."},
     {t:"Arab Barometer", why:"That covers Arab states of the Middle East and North Africa."},
     {t:"The World Values Survey only", why:"That is a separate global survey, not the African regional barometer."}]},
   {id:"e4u22-q06", lesson:"e4u22-l1", level:3, q:"A paper argues: “The Middle East is uniquely resistant to democracy because of its culture.” Which critique applies most directly?", options:[
     {t:"It treats a pattern as an essence; the claim should be tested comparatively, with attention to institutions and history", ok:true, why:"Right: exceptionalist, essentialist claims need comparative testing."},
     {t:"It uses too many statistics", why:"The problem is an untested cultural generalisation, not statistics."},
     {t:"It should have said “Latin America” instead", why:"Swapping regions does not fix the reasoning."},
     {t:"It is correct because some countries in the region are not democracies", why:"Some cases do not establish a cultural cause."}]},
   {id:"e4u22-q07", lesson:"e4u22-l1", level:2, q:"A research team publishes interview data from a Kenyan town with no Kenyan co-authors and never shares results with participants. Which concern does this raise?", options:[
     {t:"Parachute or extractive research", ok:true, why:"Right: taking data without fair partnership or return."},
     {t:"Conceptual stretching", why:"That concerns applying concepts to cases they do not fit."},
     {t:"Selecting on the dependent variable", why:"That concerns case selection, not partnership."},
     {t:"Self-orientalism", why:"That concerns how a society presents itself."}]},
   {id:"e4u22-q08", lesson:"e4u22-l1", level:1, q:"How does the African Union define its membership area?", options:[
     {t:"The whole continent, north and south of the Sahara; its 55 members include all 54 of Africa’s UN member states", ok:true, why:"Right: unlike “sub-Saharan” statistical groupings."},
     {t:"Only sub-Saharan Africa", why:"North African states such as Egypt and Algeria are members."},
     {t:"Africa plus the Arab states of Western Asia", why:"Western Asian states are not AU members."},
     {t:"Only states that were never colonised", why:"Almost all members were colonised."}]},
   {id:"e4u22-q09", lesson:"e4u22-l1", level:3, q:"Priya’s draft on Senegal mentions only donors, foreign peacekeepers and international NGOs as actors. What is the best advice?", options:[
     {t:"Add what Senegalese governments, movements and businesses decided and why, using local sources", ok:true, why:"Right: it fixes the “outsiders as the only actors” trap."},
     {t:"Remove all mention of donors", why:"Donors matter; the problem is that local actors are missing."},
     {t:"Generalise the findings to all of West Africa", why:"That adds a single-story problem."},
     {t:"Switch to a purely statistical study to avoid the issue", why:"Methods do not remove the need to identify actors."}]},

   /* ---- Lesson 2 ---- */
   {id:"e4u22-q10", lesson:"e4u22-l2", level:1, q:"What did Jackson and Rosberg (1982) mean by “juridical statehood”?", options:[
     {t:"Statehood secured by international legal recognition, even where control on the ground is weak", ok:true, why:"Right: contrasted with empirical statehood (actual capacity)."},
     {t:"A state run by judges", why:"It concerns recognition, not who governs."},
     {t:"A state with a written constitution", why:"Constitutions are not the point of the distinction."},
     {t:"A state that has signed every human rights treaty", why:"Treaty ratification is a different matter."}]},
   {id:"e4u22-q11", lesson:"e4u22-l2", level:1, q:"Which book argued that colonial rule created a “bifurcated state” of citizens and subjects?", options:[
     {t:"Mahmood Mamdani, *Citizen and Subject* (1996)", ok:true, why:"Right: he called rural rule through chiefs “decentralised despotism”."},
     {t:"Jeffrey Herbst, *States and Power in Africa* (2000)", why:"Herbst focused on population density and power over distance."},
     {t:"Morten Jerven, *Poor Numbers* (2013)", why:"Jerven wrote about economic statistics."},
     {t:"Robert Jackson, *Quasi-States* (1990)", why:"Jackson wrote on juridical statehood."}]},
   {id:"e4u22-q12", lesson:"e4u22-l2", level:2, q:"Tomás says: “Neopatrimonialism explains all of Africa’s economic performance.” Which scholar’s critique would you cite in reply?", options:[
     {t:"Thandika Mkandawire (*World Politics*, 2015), who argued the concept cannot explain variation in performance across countries and time", ok:true, why:"Right: a catch-all label cannot explain differences."},
     {t:"Jean-François Bayart, who invented the term", why:"Bayart wrote of the “politics of the belly”; he did not make this critique."},
     {t:"Samuel Huntington", why:"Huntington wrote on democratisation waves, not this debate."},
     {t:"Hossein Mahdavy", why:"Mahdavy wrote on rentier states."}]},
   {id:"e4u22-q13", lesson:"e4u22-l2", level:1, q:"Which is **not** one of APSA’s four pillars?", options:[
     {t:"The Military Staff Committee", ok:true, why:"Right: it is a subsidiary advisory body of the Peace and Security Council, not a pillar."},
     {t:"The Panel of the Wise", why:"This is a pillar."},
     {t:"The African Standby Force", why:"This is a pillar."},
     {t:"The Peace Fund", why:"This is a pillar."}]},
   {id:"e4u22-q14", lesson:"e4u22-l2", level:1, q:"How is the AU Peace and Security Council composed?", options:[
     {t:"15 members with equal votes, five elected for three years and ten for two, with no permanent members", ok:true, why:"Right, according to the AU."},
     {t:"Five permanent members with vetoes and ten elected members", why:"That describes the UN Security Council."},
     {t:"All 55 AU members", why:"That is the Assembly."},
     {t:"The heads of the eight RECs", why:"The RECs are building blocks, not the Council’s members."}]},
   {id:"e4u22-q15", lesson:"e4u22-l2", level:2, q:"An AU-led peace support operation needs predictable funding. Under Resolution 2719 (2023), what can it hope for?", options:[
     {t:"Case-by-case access to UN assessed contributions, up to 75 per cent of its budget, with the rest raised jointly", ok:true, why:"Right: neither automatic nor full funding."},
     {t:"Full funding from the UN budget automatically", why:"It is case by case and capped."},
     {t:"Funding only from the AU’s own levy", why:"2719 opened a UN route."},
     {t:"Nothing: 2719 concerns sanctions on Sudan", why:"2719 is about financing AU-led operations."}]},
   {id:"e4u22-q16", lesson:"e4u22-l2", level:3, q:"A government comes to power in a military takeover. The AU suspends it; the regional community imposes sanctions; the new rulers then form an alliance with two neighbours under similar governments and leave the community. Which real case does this most resemble?", options:[
     {t:"Mali, Burkina Faso and Niger forming the Alliance of Sahel States and leaving ECOWAS in January 2025", ok:true, why:"Right: the sequence matches."},
     {t:"Egypt and Jordan making peace with Israel", why:"Unrelated to coups and regional communities."},
     {t:"The founding of the Pacific Alliance", why:"A trade grouping of elected governments in Latin America."},
     {t:"The founding of the GCC in 1981", why:"A Gulf organisation unrelated to coups and sanctions."}]},
   {id:"e4u22-q17", lesson:"e4u22-l2", level:2, q:"Why does Morten Jerven’s *Poor Numbers* (2013) matter for the “Africa rising” debate?", options:[
     {t:"It showed that weak statistical systems make GDP growth figures unreliable, so big claims need caution", ok:true, why:"Right: Ghana’s 2010 revision raised measured GDP by about 60 per cent."},
     {t:"It proved that African growth was invented", why:"He showed the figures were unreliable, not invented."},
     {t:"It was the 2011 magazine cover that coined “Africa rising”", why:"That was *The Economist*."},
     {t:"It is a study of population projections", why:"It concerns economic statistics."}]},
   {id:"e4u22-q18", lesson:"e4u22-l2", level:3, q:"Fatima reads that “Africa’s young population guarantees fast growth.” What is the most accurate response?", options:[
     {t:"A demographic dividend is possible but depends on fertility decline, education, health and jobs", ok:true, why:"Right: it is a policy question, not a guarantee."},
     {t:"Young populations always reduce growth", why:"Not always: with jobs and education, a rising working-age share can boost growth."},
     {t:"Africa’s median age is about 40", why:"It is about 19 (UN data via Pew, 2026)."},
     {t:"Demography has no link to growth", why:"The age structure affects labour supply and saving."}]},

   /* ---- Lesson 3 ---- */
   {id:"e4u22-q19", lesson:"e4u22-l3", level:1, q:"What did Guillermo O’Donnell call the military-technocratic regimes of Brazil after 1964 and Argentina after 1966?", options:[
     {t:"Bureaucratic-authoritarian", ok:true, why:"Right: from *Modernization and Bureaucratic-Authoritarianism* (1973)."},
     {t:"Delegative democracies", why:"That 1994 concept describes elected presidents with weak checks."},
     {t:"Rentier states", why:"That concept concerns states living on external rents."},
     {t:"Pink-tide governments", why:"That label applies to left governments from 1998."}]},
   {id:"e4u22-q20", lesson:"e4u22-l3", level:2, q:"A dictatorship ends after regime moderates and opposition moderates agree on elections, with guarantees for the outgoing military. What is this called?", options:[
     {t:"A pacted transition", ok:true, why:"Right: a negotiated exit (O’Donnell & Schmitter, 1986)."},
     {t:"A revolution", why:"A revolution overthrows a regime rather than negotiating its exit."},
     {t:"Delegative democracy", why:"That describes how some democracies work after transition."},
     {t:"Neoliberal populism", why:"That combines populist appeals with market reform."}]},
   {id:"e4u22-q21", lesson:"e4u22-l3", level:1, q:"When did Huntington date the start of the third wave of democratisation?", options:[
     {t:"Portugal’s revolution of April 1974", ok:true, why:"Right: *The Third Wave* (1991)."},
     {t:"The fall of the Berlin Wall in 1989", why:"That came well into the wave."},
     {t:"The end of the Second World War in 1945", why:"Huntington placed a second wave after 1945."},
     {t:"Chávez’s election in 1998", why:"That is the conventional start of the pink tide."}]},
   {id:"e4u22-q22", lesson:"e4u22-l3", level:2, q:"Under Cas Mudde’s ideational definition, which statement is most clearly populist?", options:[
     {t:"“The corrupt elite has stolen power from the pure people; only we express the people’s will.”", ok:true, why:"Right: it sets a pure people against a corrupt elite and claims the general will."},
     {t:"“We will cut fuel subsidies to balance the budget.”", why:"A policy statement, not a people-versus-elite claim."},
     {t:"“Our party will negotiate with the opposition on a new tax.”", why:"Pluralist bargaining, the opposite of populist logic."},
     {t:"“Independent courts should review this law.”", why:"Supports horizontal accountability rather than attacking it."}]},
   {id:"e4u22-q23", lesson:"e4u22-l3", level:1, q:"Which pair of leaders do scholars usually cite as examples of **neoliberal populism** in the 1990s?", options:[
     {t:"Alberto Fujimori and Carlos Menem", ok:true, why:"Right: personalist appeals combined with market reforms."},
     {t:"Juan Perón and Getúlio Vargas", why:"They are classical populists of the 1930s–50s."},
     {t:"Hugo Chávez and Evo Morales", why:"They are usually placed in the radical-left wave."},
     {t:"Guillermo O’Donnell and Philippe Schmitter", why:"They are political scientists, not leaders."}]},
   {id:"e4u22-q24", lesson:"e4u22-l3", level:2, q:"Which set of factors do scholars commonly use to explain the first pink tide?", options:[
     {t:"Reaction against inequality left by 1990s reforms, democratic consolidation, and the commodity boom", ok:true, why:"Right: usually combined rather than treated singly."},
     {t:"US promotion of left governments", why:"Several pink-tide governments had tense relations with Washington."},
     {t:"The end of elections in the region", why:"Left parties came to power through elections."},
     {t:"A fall in commodity prices in the 2000s", why:"Prices rose in the 2000s; their fall came later."}]},
   {id:"e4u22-q25", lesson:"e4u22-l3", level:3, q:"After Lula’s re-election on 25 October 2026, a commentator writes: “This proves Latin America has turned left again.” Which response is most careful?", options:[
     {t:"One result ended a run of seven conservative victories (AP); many scholars read such swings as anti-incumbent voting, so the claim needs more evidence", ok:true, why:"Right: dated, attributed and cautious about trends."},
     {t:"It is proven: Brazil decides the whole region", why:"One country’s election cannot show a regional trend."},
     {t:"Lula lost, so the claim is false", why:"Lula won the run-off, 51.8 to 48.2 per cent."},
     {t:"Elections tell us nothing about politics", why:"They tell us a lot; the issue is how far to generalise."}]},
   {id:"e4u22-q26", lesson:"e4u22-l3", level:1, q:"Which regional body includes all 33 states of Latin America and the Caribbean but excludes the United States and Canada?", options:[
     {t:"CELAC", ok:true, why:"Right: founded in 2011."},
     {t:"The OAS", why:"The OAS includes the United States and Canada."},
     {t:"Mercosur", why:"Mercosur is a smaller customs union."},
     {t:"The Pacific Alliance", why:"It has four members: Chile, Colombia, Mexico and Peru."}]},
   {id:"e4u22-q27", lesson:"e4u22-l3", level:2, q:"Which statement about the EU–Mercosur trade agreement is accurate as of November 2026?", options:[
     {t:"It was signed on 17 January 2026 and has applied provisionally since 1 May 2026, while legal challenges by EU lawmakers were pending at the EU’s Court of Justice", ok:true, why:"Right, according to AP and Euronews reports."},
     {t:"It was rejected and never signed", why:"It was signed in January 2026."},
     {t:"It has been fully ratified by every EU member state", why:"Provisional application is not full ratification."},
     {t:"It includes the United States", why:"It is between the EU and Mercosur only."}]},

   /* ---- Lesson 4 ---- */
   {id:"e4u22-q28", lesson:"e4u22-l4", level:1, q:"What was the Sykes–Picot Agreement?", options:[
     {t:"A secret Anglo-French plan of 1916 to divide Ottoman Arab lands into zones of control", ok:true, why:"Right; the later borders came from other agreements."},
     {t:"The 1923 treaty that founded the Turkish Republic", why:"That was the Treaty of Lausanne."},
     {t:"A 1947 UN plan to partition Palestine", why:"That was a General Assembly recommendation of November 1947."},
     {t:"The founding charter of the Arab League", why:"The Arab League was founded in 1945."}]},
   {id:"e4u22-q29", lesson:"e4u22-l4", level:1, q:"According to rentier state theory, why might an oil-rich state face weaker demands for democracy?", options:[
     {t:"It does not need to tax citizens and can distribute oil income as jobs and subsidies", ok:true, why:"Right: “no taxation, no representation”."},
     {t:"Oil makes citizens uninterested in politics by nature", why:"The theory is about fiscal bargains, not human nature."},
     {t:"Oil states always hold free elections", why:"The theory predicts the opposite tendency."},
     {t:"Foreign oil buyers vote in its elections", why:"Buyers pay the state; they do not vote."}]},
   {id:"e4u22-q30", lesson:"e4u22-l4", level:2, q:"A Gulf state invests abroad through a sovereign wealth fund, brands itself through sport and culture, and has become more responsive to citizens without democratising. Which concept fits best?", options:[
     {t:"Late rentierism (Gray, 2011)", ok:true, why:"Right: rentierism adapted to globalisation."},
     {t:"Bureaucratic authoritarianism", why:"That describes South American military regimes."},
     {t:"Juridical statehood", why:"That concerns recognition of weak states."},
     {t:"Delegative democracy", why:"That describes elected presidents with weak checks."}]},
   {id:"e4u22-q31", lesson:"e4u22-l4", level:2, q:"Hana compares Egypt’s and Tunisia’s paths after 2011 and focuses on whether each army was willing to repress protesters. Whose argument is she applying?", options:[
     {t:"Eva Bellin’s on the robustness of the coercive apparatus", ok:true, why:"Right: Bellin (2004, 2012)."},
     {t:"Hossein Mahdavy’s on rentier states", why:"Mahdavy wrote on oil revenue."},
     {t:"Cas Mudde’s on populism", why:"Mudde defined populism."},
     {t:"Jeffrey Herbst’s on African states", why:"Herbst wrote on power over distance in Africa."}]},
   {id:"e4u22-q32", lesson:"e4u22-l4", level:1, q:"Which states are members of the Gulf Cooperation Council?", options:[
     {t:"Saudi Arabia, Kuwait, Bahrain, Qatar, the UAE and Oman", ok:true, why:"Right: its six founding members (1981)."},
     {t:"Saudi Arabia, Iran, Iraq and Kuwait", why:"Iran and Iraq are not members."},
     {t:"All Arab League members", why:"The GCC has only six members."},
     {t:"Egypt, Jordan and Saudi Arabia", why:"Egypt and Jordan are not members."}]},
   {id:"e4u22-q33", lesson:"e4u22-l4", level:3, q:"Which sentence about 1948 is written in the neutral, attributed style a seminar paper needs?", options:[
     {t:"“Israel declared independence on 14 May 1948; in the war that followed, more than half of the Palestinian population was permanently displaced (UN), an event Palestinians call the Nakba.”", ok:true, why:"Right: dated, sourced, and naming each memory."},
     {t:"“1948 was simply a victory for one side.”", why:"One-sided and unsourced."},
     {t:"“Nothing important happened to Palestinians in 1948.”", why:"Denies documented displacement."},
     {t:"“Israel was created illegitimately, as everyone agrees.”", why:"Presents a contested view as universal fact."}]},
   {id:"e4u22-q34", lesson:"e4u22-l4", level:2, q:"Which statement about the Gaza ceasefire is accurate as of November 2026?", options:[
     {t:"It began in October 2025 under a US-brokered plan endorsed by Resolution 2803; it had not been formally ended, but Israeli strikes continued and the stabilisation force had not deployed", ok:true, why:"Right, as reported by the UN and AP."},
     {t:"It collapsed in November 2025 and full-scale war resumed", why:"AP reported in October 2026 that it was fragile but had not been formally ended."},
     {t:"It ended with a final peace treaty and a Palestinian state", why:"No final-status agreement has been reached."},
     {t:"The International Stabilization Force had fully deployed by mid-2026", why:"AP reported in October 2026 that it had not deployed."}]},
   {id:"e4u22-q35", lesson:"e4u22-l4", level:1, q:"Which states signed the Abraham Accords with Israel in September 2020?", options:[
     {t:"The United Arab Emirates and Bahrain", ok:true, why:"Right; Morocco and Sudan followed."},
     {t:"Egypt and Jordan", why:"They made peace with Israel in 1979 and 1994."},
     {t:"Saudi Arabia and Qatar", why:"Neither has normalised relations with Israel."},
     {t:"Iran and Iraq", why:"Neither has done so."}]},
   {id:"e4u22-q36", lesson:"e4u22-l4", level:2, q:"Why is Gulf security described as an Asian concern in energy terms?", options:[
     {t:"In 2024, 84 per cent of the crude oil and condensate through Hormuz went to Asian markets", ok:true, why:"Right (US EIA): China, India, Japan and South Korea alone took 69 per cent."},
     {t:"Asian navies own the Strait of Hormuz", why:"No outside state owns the strait."},
     {t:"Asia exports oil to the Gulf", why:"The flow runs the other way."},
     {t:"Hormuz carries little oil", why:"About 20 million barrels a day passed through in 2024."}]},

   /* ---- Lesson 5 ---- */
   {id:"e4u22-q37", lesson:"e4u22-l5", level:1, q:"Which of these is one of the four clusters of the track, alongside its foundations?", options:[
     {t:"Global governance", ok:true, why:"Right: Units 9–13."},
     {t:"Computer science", why:"Not part of this track."},
     {t:"Military history only", why:"History is part of the foundations, not a cluster on its own."},
     {t:"Accounting", why:"Not part of this track."}]},
   {id:"e4u22-q38", lesson:"e4u22-l5", level:2, q:"A reading asks whether oil wealth or national identity better explains a Gulf state’s foreign policy. Which cross-cutting debate is it in?", options:[
     {t:"Material and ideational", ok:true, why:"Right: resources and interests versus ideas and identity."},
     {t:"State and beyond", why:"That concerns whether non-state actors govern."},
     {t:"Order and change", why:"That concerns the international order’s transformation."},
     {t:"Knowledge and power", why:"That concerns who produces knowledge."}]},
   {id:"e4u22-q39", lesson:"e4u22-l5", level:2, q:"Oluwaseun asks whether Nigerian and Ghanaian governments shape their deals with Chinese lenders or are constrained by global finance. Which debate is this?", options:[
     {t:"Structure and agency", ok:true, why:"Right: actors’ choices versus structural limits."},
     {t:"Universal and particular", why:"That concerns whether concepts travel."},
     {t:"Material and ideational", why:"That concerns interests versus ideas."},
     {t:"State and beyond", why:"That concerns the centrality of the state."}]},
   {id:"e4u22-q40", lesson:"e4u22-l5", level:1, q:"Which resource was confirmed in November 2026 as fully open access?", options:[
     {t:"*Global Studies Quarterly*, the International Studies Association’s journal", ok:true, why:"Right: its site describes it as fully open access."},
     {t:"Every peer-reviewed IR journal", why:"Many are behind paywalls."},
     {t:"Any journal that invites you to publish for a fee by email", why:"Unsolicited invitations are a warning sign of predatory journals."},
     {t:"None: all IR journals charge readers", why:"Several are free, including *Africa Spectrum*."}]},
   {id:"e4u22-q41", lesson:"e4u22-l5", level:3, q:"Mei wants a thesis puzzle that crosses two clusters. Which is the strongest?", options:[
     {t:"Why did Chile and Bolivia choose different mixes of state and private control over lithium, and what did that mean for Indigenous communities’ consultation rights?", ok:true, why:"Right: a concrete comparative puzzle linking political economy and rights in real places."},
     {t:"Lithium in general", why:"A topic, not a puzzle."},
     {t:"Is the world getting better?", why:"Too broad to research."},
     {t:"List every regional body in Latin America", why:"A description task, not a puzzle."}]},
   {id:"e4u22-q42", lesson:"e4u22-l5", level:2, q:"Which theory was **developed largely from research in Latin America**?", options:[
     {t:"Dependency theory and structuralist economics", ok:true, why:"Right: Prebisch, ECLA/CEPAL, Cardoso and Faletto."},
     {t:"Rentier state theory", why:"That came mainly from research on Iran and the Arab Gulf."},
     {t:"Juridical statehood", why:"That came from research on African states."},
     {t:"Securitisation theory", why:"That came from the Copenhagen School in Europe."}]},
   {id:"e4u22-q43", lesson:"e4u22-l5", level:3, q:"A classmate says: “Neutral writing means I shouldn’t have any view.” What is the best reply?", options:[
     {t:"Neutrality means representing each position fairly and attributing it; you can still argue your own view with evidence", ok:true, why:"Right: seminar writing combines fair description with a supported argument."},
     {t:"Neutral writing means always splitting the difference", why:"Evidence may support one side more; neutrality is about fairness, not false balance."},
     {t:"Neutral writing means avoiding contested topics", why:"Contested topics can be written about neutrally."},
     {t:"Neutral writing means quoting only one source", why:"Fair representation needs several."}]},
   {id:"e4u22-q44", lesson:"e4u22-l5", level:1, q:"Which tool gives a monthly update on more than 70 conflicts and crises, searchable back to 2003?", options:[
     {t:"International Crisis Group’s *CrisisWatch*", ok:true, why:"Right: an early-warning tracker that is free to read."},
     {t:"Latinobarómetro", why:"An opinion survey, not a conflict tracker."},
     {t:"The CPTPP", why:"A trade agreement."},
     {t:"The Global Studies Quarterly", why:"A journal of research articles."}]},
   {id:"e4u22-q45", lesson:"e4u22-l5", level:2, q:"Why did the UN’s membership grow from 51 in 1945 to 193 today, with Africa supplying the most new members?", options:[
     {t:"Decolonisation created many new states, and only four African states were founding members", ok:true, why:"Right: Egypt, Ethiopia, Liberia and South Africa were founders; today all 54 African states are members."},
     {t:"African states were expelled in 1945 and readmitted later", why:"No such expulsion happened."},
     {t:"The UN merged with the African Union", why:"They are separate organisations."},
     {t:"Membership rules required every country to have a population over 50 million", why:"There is no such rule."}]}
  ]
});
