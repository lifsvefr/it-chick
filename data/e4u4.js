/* International Studies · Pass A · Unit 4 (e4u4) · Introduction to Japan studies */
ICA.addUnit({
  id:"e4u4", track:"e4", n:4, title:"Introduction to Japan studies", icon:"🗾",
  blurb:"What it means to study one country seriously: where area studies came from and how scholars criticised it, modern Japan’s arc from the Meiji state to the 1947 Constitution, how Japan is governed, the economy and a society that is ageing, shrinking and growing more diverse, and Japan’s place in the world.",
  goals:[
    "Explain what area studies and Japan studies are, where they came from, and the critiques of Orientalism and of nihonjinron (theories of Japanese uniqueness)",
    "Tell modern Japan’s arc from the Meiji Restoration to the Occupation, and explain the 1947 Constitution and the debates about Article 9",
    "Describe how Japan is governed: the Emperor’s constitutional role, the Diet, the cabinet and prime minister, the bureaucracy, the LDP and the 1955 system, the 1994 electoral reform and local government",
    "Explain the rival explanations of the postwar economic “miracle”, the bubble and the “lost decades”, and read the latest official figures on population, gender and foreign residents with care",
    "Analyse Japan’s foreign policy (the Yoshida Doctrine, the US–Japan alliance, aid and the Fukuda Doctrine, soft power, relations with neighbours) through several IR lenses, neutrally"
  ],
  read:[
    {book:"sbj", where:"Chapter 2 “Population”, Chapter 3 “Economy”, Chapter 12 “Labour” and Chapter 17 “Government System”", note:"The government’s own compact English overview in numbers. Use it to check figures, not for interpretation."},
    {book:"dbb", where:"Chapter 2 “Japan’s Foreign Policy by Region” and Chapter 3 “Japan’s Foreign Policy to Promote National and Global Interests”", note:"A primary source: Japan’s official account of its foreign policy, to be read critically alongside other countries’ views."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"A short chapter on IR thinking from Asia, which helps you place Japan studies within Global IR."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u4-l1", title:"Area studies, Japan studies and their critics", minutes:55,
   hook:{q:"In 1946 an American anthropologist published one of the best-known books ever written about Japan, still read in seminars today. How long had she spent in Japan while researching it?", options:["No time at all","About six months","About two years","About ten years"], answer:0, reveal:"**No time at all.** Ruth Benedict wrote *The Chrysanthemum and the Sword* (1946) from wartime work for the US government. She could not travel to an enemy country, so she studied “culture at a distance”: interviews with Japanese Americans, films, novels and propaganda. The book shaped how a generation of outsiders saw Japan, and it is now read as much for what it shows about how the West studied Japan as for what it says about Japan. That is where this lesson begins."},
   goals:[
     "Explain what area studies is, how it differs from a discipline, and where Japan studies fits",
     "Describe how the Second World War and the Cold War shaped area studies, and why critics say this matters",
     "Apply the critique of Orientalism to images of Japan, and explain self-Orientalism",
     "Explain what nihonjinron claims and summarise the main scholarly critiques of it",
     "Discuss insider and outsider perspectives without falling into either “only natives understand” or “outsiders are objective”",
     "Name some key journals and associations of Japan studies and use them to start a literature search"
   ],
   learn:[
    {h:"Studying a place, not just a subject", body:[
      {lead:"Imagine two scholars studying the same election in Japan. One is a political scientist who studies elections in thirty countries. The other has spent ten years learning Japanese, reading local newspapers and talking to campaign volunteers in one prefecture. Both learn something real. They just learn different things."},
      "Most university subjects are **disciplines**: political science, economics, sociology, history. Each has its own questions and methods, and each tries to say something general that holds in many places.",
      "**Area studies** turns the map around. It takes one world region or country as its object and brings several disciplines to bear on it: language, history, literature, politics, economics, religion, society. Its promise is depth. Its scholars are expected to read sources in the local language and to know the place’s history well enough to avoid easy mistakes.",
      "[[japan-studies|Japan studies]] ([日本研究]{にほんけんきゅう}, *Nihon kenkyū*) is the branch of area studies that focuses on Japan. Older writing sometimes calls it “Japanology”, a word that now sounds old-fashioned because it suggests the study of an exotic object rather than of a society like any other.",
      {table:[["","A discipline","Area studies"],["Starting point","A kind of question (why do wars start?)","A place (what is going on in Japan?)"],["Main strength","Comparison and general theory","Depth, language and context"],["Typical risk","Thin, mistaken knowledge of cases","Treating the place as unique"]]},
      "Graduate programmes in international studies usually expect you to do both: use a discipline’s theories and methods, and know at least one region well enough to test them. That is why area studies sits alongside global governance and development in most curricula."
    ]},
    {h:"Born in war and Cold War", body:[
      "Area studies did not grow up only out of curiosity. It grew because governments needed to know their enemies and allies.",
      "During the Second World War, the United States and Britain ran crash courses in Japanese for military interpreters and analysts. Benedict’s *The Chrysanthemum and the Sword* came out of exactly this kind of work. After 1945, the need continued: the Occupation of Japan needed experts, and the Cold War made governments want knowledge of every region where the United States and the Soviet Union competed.",
      "In the United States, foundations and the government paid for area programmes on a large scale. The National Defense Education Act of 1958, passed after the Soviet Union launched Sputnik, funded language and area centres under its Title VI. Similar, smaller efforts followed in Western Europe, Australia and elsewhere.",
      "Japan held a special place in this story. Many American scholars of the 1950s and 1960s presented it as a model of non-communist modernisation: proof that an Asian country could industrialise and democratise without revolution. This fitted [[modernization-theory]], which you met in the sociology primer, and it fitted US foreign policy in Asia.",
      "From the late 1960s, younger scholars pushed back. Opposed to the Vietnam War, a group calling itself the Committee of Concerned Asian Scholars argued that much area expertise served state power and skipped over war, empire and inequality. The historian Bruce Cumings later traced these links in an essay, “Boundary Displacement: Area Studies and International Studies during and after the Cold War” (1997).",
      {key:"Area studies was partly built to serve the foreign policy of powerful states. Knowing this does not make its findings wrong, but it is a good reason to ask, of any study, who funded it, what questions it asked and which it left out."},
      {fig:'<svg viewBox="0 0 340 388"><defs><marker id="a41" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 0 L5 10 z"/></marker></defs><rect class="d-lup" x="10" y="8" width="320" height="64" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Before 1940s: “Japanology”</text><text class="s" x="170" y="52" text-anchor="middle">language, classics, religion, art</text><path class="d-ink" d="M170 74 L170 92" stroke-width="2" marker-end="url(#a41)"/><rect class="d-gold" x="10" y="100" width="320" height="64" rx="8" stroke-width="2"/><text x="170" y="124" text-anchor="middle">1940s–1960s: war and Cold War</text><text class="s" x="170" y="144" text-anchor="middle">state-funded area studies, modernisation</text><path class="d-ink" d="M170 166 L170 184" stroke-width="2" marker-end="url(#a41)"/><rect class="d-rose" x="10" y="192" width="320" height="64" rx="8" stroke-width="2"/><text x="170" y="216" text-anchor="middle">1970s–1990s: the critiques</text><text class="s" x="170" y="236" text-anchor="middle">Orientalism, nihonjinron, Japan’s empire</text><path class="d-ink" d="M170 258 L170 276" stroke-width="2" marker-end="url(#a41)"/><rect class="d-sage" x="10" y="284" width="320" height="64" rx="8" stroke-width="2"/><text x="170" y="308" text-anchor="middle">Today: Japan in Asia and the world</text><text class="s" x="170" y="328" text-anchor="middle">transnational, comparative, many voices</text><text class="s" x="170" y="376" text-anchor="middle">A simplified story: the phases overlap.</text></svg>', alt:"Four boxes stacked from top to bottom with arrows between them. Before the 1940s: Japanology, studying language, classics, religion and art. 1940s to 1960s: war and Cold War, state-funded area studies and modernisation theory. 1970s to 1990s: the critiques of Orientalism, nihonjinron and Japan’s empire. Today: Japan in Asia and the world, transnational, comparative and with many voices.", cap:"Four rough phases of Japan studies in English-language scholarship. Japan’s own scholarship has a separate history."}
    ]},
    {h:"Orientalism and Japan", body:[
      "A quick reminder from the IR primer: [[orientalism|Orientalism]] is Edward Said’s term (in his 1978 book of that name) for a Western way of thinking that pictured “the Orient” as exotic, timeless and the opposite of the West, a way of thinking bound up with imperial power ({{postcolonialism-ir}}). Said wrote mainly about the Middle East, but scholars soon applied his ideas to East Asia.",
      "Images of Japan show the pattern clearly. Travel posters, films and some journalism have long reduced Japan to geisha and samurai, or, from the 1980s, to robots and workaholic “salarymen”. The cultural theorists David Morley and Kevin Robins called the second image **techno-Orientalism**: Japan shown as futuristic but somehow inhuman. Both images make Japan a mirror for Western hopes and fears rather than a society of 120-odd million different people.",
      "Japan’s case adds two twists that seminars often discuss.",
      {list:[
        "**Japan had its own Orient.** As an imperial power, Japan produced its own scholarship about China, Korea and Taiwan, often in the service of empire. The historian Stefan Tanaka’s *Japan’s Orient* (1993) shows how Japanese historians built a picture of an Asian past from which modern Japan had risen.",
        "**Self-Orientalism.** Sometimes a society presents itself in the exotic terms outsiders use, for tourism, branding or national pride. Scholars call this [[self-orientalism]]. Government campaigns that sell “traditional Japan” abroad are often discussed in this light."
      ]},
      {warn:"The Orientalism critique does not say that outsiders can never write truthfully about Japan, or that every Western study is prejudiced. It asks you to notice when a description turns a whole society into a type, and whose interests that type serves."}
    ]},
    {h:"Nihonjinron: theories of Japanese uniqueness", body:[
      "[[nihonjinron|Nihonjinron]] ([日本人論]{にほんじんろん}, literally “discussions of the Japanese”) is the name for a large body of writing, much of it popular, that claims to explain what makes the Japanese unique. It boomed from the 1960s to the 1980s, when Japan’s economic success made many people, inside and outside Japan, ask what lay behind it.",
      "Typical claims include that Japanese society is unusually group-centred, built on vertical relationships, ethnically and culturally homogeneous, and shaped by a language or climate unlike any other. Two serious academic books are often read in this context. The social anthropologist Nakane Chie’s タテ[社会]{しゃかい}の[人間関係]{にんげんかんけい} (1967; in English *Japanese Society*, 1970) argued that Japanese groups are organised by vertical ties within a frame such as a company. The psychiatrist Doi Takeo’s [甘]{あま}えの[構造]{こうぞう} (1971; in English *The Anatomy of Dependence*, 1973) built a theory around [甘]{あま}え (*amae*), the wish to depend on another’s goodwill.",
      {tip:"This unit writes Japanese names family name first, as in Japanese (Nakane Chie, Yoshida Shigeru). English-language books often print them the other way round, so check both orders when you search a library catalogue."},
      "From the 1980s scholars took the genre apart. Their main criticisms:",
      {list:[
        "**It generalises from a narrow slice.** Ross Mouer and Sugimoto Yoshio (*Images of Japanese Society*, 1986) showed that many claims came from the lives of male employees of large firms and ignored women, small business, regional and class differences.",
        "**It works like ideology.** Peter Dale (*The Myth of Japanese Uniqueness*, 1986) called it a form of nationalist myth. Yoshino Kosaku (*Cultural Nationalism in Contemporary Japan*, 1992) studied how business people and educators actually used it, as a kind of cultural nationalism. Befu Harumi (*Hegemony of Homogeneity*, 2001) argued that the claim of homogeneity became a dominant, state-supported idea.",
        "**Homogeneity is a historical claim, not a fact of nature.** The sociologist Oguma Eiji showed in [単一民族神話]{たんいつみんぞくしんわ}の[起源]{きげん} (1995; in English *A Genealogy of “Japanese” Self-Images*, 2002) that imperial Japan often described itself as a mixed nation that could absorb Koreans and Taiwanese; the “single-ethnic-nation” story became dominant after 1945, when the empire was gone.",
        "**It hides real diversity.** Japan includes the Ainu, recognised in law as an indigenous people since 2019; Okinawans; Koreans who have lived in Japan for generations ([[zainichi-koreans|Zainichi Koreans]]); descendants of outcaste groups (the buraku people, whom you met in the sociology primer); and a growing number of foreign residents."
      ]},
      {key:"Nihonjinron is best studied as a source: evidence of how people in and outside Japan have imagined Japan, and of [[nationalism]] at work. It is not a reliable description of how 120 million people think and behave."}
    ]},
    {h:"Insiders, outsiders and where knowledge comes from", body:[
      "Who understands a society best? Seminars return to this question often, and two easy answers are both wrong.",
      "The first easy answer says only insiders can understand Japan. That claim is itself a nihonjinron idea, and it would make comparison and criticism impossible. The second says outsiders are objective because they are detached. But outsiders bring their own assumptions, as the Orientalism critique showed, and they often miss what any local reader would see.",
      "A better view, which this unit calls the [[insider-outsider-debate|insider–outsider debate]], treats position as something that shapes what you can see, not as a passport to truth. Insiders may notice nuance and know which sources matter; outsiders may notice what locals take for granted. Both need evidence, method and an honest note on where they stand.",
      "Two practical points follow for a graduate student:",
      {list:[
        "**Read Japanese-language scholarship.** A huge literature on Japan is written in Japanese and rarely translated. Even if your Japanese is still growing, learning to search it and read abstracts changes your work ({{finding-japanese-research}} in the Academic Japanese unit shows how).",
        "**Japan is not only an object of study.** Japanese scholars have their own traditions of IR, area studies ([地域研究]{ちいきけんきゅう}) and social theory. Citing them as thinkers, not just as sources of data, is part of the [[global-ir|Global IR]] agenda."
      ]},
      "A related, long-running debate asks whether area studies is still needed at all. In the 1990s some political scientists argued that general theories and statistical comparison should replace country expertise; Robert Bates’s essay “Area Studies and the Discipline: A Useful Controversy?” (1997) is a well-known statement of the tension. Defenders replied that theories built without local knowledge travel badly. Most programmes today want both."
    ]},
    {h:"The field today: journals, associations and how to start", body:[
      "When you begin a literature review on Japan, these are some of the main places scholars publish and meet. All are long-running and peer-reviewed or scholarly; check each one’s current scope on its own site.",
      {table:[["Name","What it is"],["*Journal of Japanese Studies* (from 1974)","Multidisciplinary journal on Japan: history, politics, society, culture"],["*Monumenta Nipponica* (from 1938)","Japan’s history, literature, religion and culture"],["*Japan Forum* (from 1989)","Journal of the British Association for Japanese Studies"],["*Social Science Japan Journal*","Politics, economics, sociology and law of Japan"],["*The Asia-Pacific Journal: Japan Focus*","Open-access articles on Japan and the region, often on contested history"],["Association for Asian Studies (from 1941)","A large international association for all of Asia; publishes the *Journal of Asian Studies*"],["European Association for Japanese Studies (from 1973)","Holds a large conference every three years, in Europe or Japan"],["British Association for Japanese Studies (from 1974)","National association; publishes *Japan Forum*"]]},
      "Today’s Japan studies is more transnational than its Cold War ancestor. Scholars study Japan in Asia (trade, migration, memory of empire), Japan as a case in global comparisons (ageing, energy, democracy), and flows across borders, such as Japanese popular culture abroad or migrants in Japan.",
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["Area studies is just description.","Good area studies tests and builds theory using deep local evidence."],["Japan is uniquely homogeneous.","The homogeneity claim has a history; Japan has always had minorities and migrants."],["Criticising nihonjinron means saying Japan has no distinctive institutions.","Japan has distinctive institutions, like every country. The critique targets sweeping claims about a national character."],["Only Japanese scholars can study Japan well, or only outsiders can be objective.","Position shapes what you see; evidence and method decide what you can claim."]]},
      {terms:["area-studies","japan-studies","nihonjinron","self-orientalism","insider-outsider-debate","zainichi-koreans"]}
    ]}
   ],
   try:[
    {id:"e4u4-l1-x1", type:"mcq", q:"Ana is choosing between two thesis plans. Plan A compares election turnout in thirty democracies using a dataset. Plan B studies one Japanese prefecture’s elections using local newspapers and interviews in Japanese. Which statement best describes the difference?", options:[
      {t:"Plan A follows a discipline’s comparative logic; Plan B follows area studies’ emphasis on depth, language and context. Both can be good research.", ok:true, why:"Right. Disciplines start from a general question and compare; area studies starts from a place and goes deep. Graduate programmes often want you to combine the two."},
      {t:"Plan A is real social science; Plan B is only description.", why:"Area studies can test and build theory. Depth is a method, not the absence of one."},
      {t:"Plan B is better because only local knowledge counts.", why:"Comparison across many cases answers questions one case cannot. Neither approach is better in general."},
      {t:"Both plans are area studies, because both are about elections.", why:"The topic is the same, but Plan A starts from a general question across thirty countries, which is a disciplinary design."}
    ]},
    {id:"e4u4-l1-x2", type:"mcq", q:"Why did area studies, including Japan studies, expand so fast in the United States after 1945?", options:[
      {t:"Governments and foundations wanted experts on regions that mattered in the war, the Occupation and the Cold War, and paid for programmes such as those funded under the 1958 National Defense Education Act.", ok:true, why:"Correct. Strategic need, backed by public and foundation money, drove the expansion. Critics later argued this shaped which questions were asked."},
      {t:"Because Edward Said’s *Orientalism* made universities want more Asian studies.", why:"*Orientalism* appeared in 1978, long after the expansion, and it criticised much of that scholarship."},
      {t:"Because Japan’s government paid for all the new programmes.", why:"Japanese funding (for example, from the Japan Foundation, founded in 1972) came later and was not the main driver of the early expansion."},
      {t:"Because universities stopped teaching disciplines such as economics.", why:"Disciplines kept growing too. Area programmes were added alongside them."}
    ]},
    {id:"e4u4-l1-x3", type:"match", q:"Match each work to its argument.", pairs:[
      ["Ruth Benedict, *The Chrysanthemum and the Sword* (1946)","A portrait of Japanese culture built “at a distance” for wartime purposes","Benedict never visited Japan; the book came out of US wartime research."],
      ["Edward Said, *Orientalism* (1978)","Western knowledge of “the Orient” was bound up with imperial power","Said’s critique, first about the Middle East, was later applied to East Asia."],
      ["Peter Dale, *The Myth of Japanese Uniqueness* (1986)","Uniqueness theories work as nationalist myth","Dale treated nihonjinron as ideology rather than description."],
      ["Oguma Eiji, *A Genealogy of “Japanese” Self-Images* (1995; English 2002)","The “single-ethnic nation” story became dominant only after the empire ended","Oguma showed imperial Japan often described itself as a mixed nation."],
      ["Stefan Tanaka, *Japan’s Orient* (1993)","Imperial Japan built its own scholarly picture of an Asian past","Japan was not only the object of Orientalism; it produced its own."]
    ]},
    {id:"e4u4-l1-x4", type:"sort", q:"Sort each statement: is it a nihonjinron-style claim, or a scholarly critique of such claims?", buckets:["Nihonjinron-style claim","Scholarly critique"], items:[
      {t:"The Japanese think as a group because of centuries of rice farming.", b:0, why:"A sweeping cultural explanation applied to a whole people: typical of the genre."},
      {t:"Claims about “the Japanese” often describe only men employed by large firms.", b:1, why:"This is Mouer and Sugimoto’s point about narrow evidence."},
      {t:"Japan is one of the few truly homogeneous nations on earth.", b:0, why:"The homogeneity claim is a core nihonjinron theme, which scholars show to be historically built and inaccurate."},
      {t:"The idea of a single-ethnic Japan became dominant after 1945, not before.", b:1, why:"Oguma’s historical finding, which undercuts the claim that homogeneity is timeless."},
      {t:"The Japanese language makes logical argument difficult.", b:0, why:"A uniqueness claim about language. Linguists find no evidence that any language prevents logical thought."},
      {t:"Uniqueness theories were used by business elites and educators as cultural nationalism.", b:1, why:"Yoshino’s study of how such ideas were actually used."}
    ]},
    {id:"e4u4-l1-x5", type:"order", q:"Put these moments in time order, earliest first.", items:[
      {t:"The Association for Asian Studies is founded (first publishing the *Far Eastern Quarterly*)", why:"1941, during the Second World War."},
      {t:"Benedict publishes *The Chrysanthemum and the Sword*", why:"1946, from wartime research."},
      {t:"The US National Defense Education Act funds language and area centres", why:"1958, after Sputnik."},
      {t:"Nakane Chie publishes タテ[社会]{しゃかい}の[人間関係]{にんげんかんけい}", why:"1967, in Japanese; the English *Japanese Society* followed in 1970."},
      {t:"Said publishes *Orientalism*", why:"1978."},
      {t:"Dale publishes *The Myth of Japanese Uniqueness*", why:"1986, the same year as Mouer and Sugimoto’s *Images of Japanese Society*."}
    ]},
    {id:"e4u4-l1-x6", type:"spot", q:"Kenji drafted this opening for a seminar paper. Tap each sentence that makes a **sweeping national-character claim or an inaccurate statement**.", ask:"sweeping or inaccurate", parts:[
      {t:"Japan’s workplace customs have been explained in several ways.", flag:false, why:"A fair, neutral opening: scholars offer institutional, historical and economic explanations."},
      " ",
      {t:"At root, the Japanese simply value harmony more than other peoples do.", flag:true, why:"A claim about the character of a whole people, with no evidence. Scholars look at institutions, incentives and history instead."},
      " ",
      {t:"Nakane Chie argued in 1967 that many Japanese groups are organised by vertical ties.", flag:false, why:"Accurate as a description of her argument. Reporting a claim is fine; the paper can then test or criticise it."},
      " ",
      {t:"Because Japan has no minorities, its institutions never had to deal with diversity.", flag:true, why:"Inaccurate. Japan has the Ainu, Okinawans, Zainichi Koreans, buraku communities and many foreign residents."},
      " ",
      {t:"Mouer and Sugimoto showed that such claims often rest on evidence from men in large firms.", flag:false, why:"Accurate: this is their best-known criticism of uniqueness theories."}
    ]},
    {id:"e4u4-l1-x7", type:"mcq", q:"In a seminar, Lucía says: “As an outsider I can see Japan objectively, because I have no stake in it.” Which reply best reflects the insider–outsider debate?", options:[
      {t:"Everyone sees from a position. Outsiders may notice what locals take for granted but also bring their own assumptions; evidence and method, not position, decide what we can claim.", ok:true, why:"Right. Position shapes what you notice; it does not guarantee truth for insiders or outsiders."},
      {t:"She is right: distance always makes a researcher more objective.", why:"The Orientalism critique shows outsiders carry their own frames. Distance is not neutrality."},
      {t:"Only Japanese scholars can understand Japan, so she should change her topic.", why:"That is itself a uniqueness claim, and it would make comparison and critique impossible."},
      {t:"Objectivity doesn’t matter in area studies, so the question is irrelevant.", why:"Area studies still needs evidence and careful method. The debate is about how position affects them."}
    ]}
   ],
   apply:{
    intro:"Practise reading Japan studies critically. Everything here uses free sources; keep your notes for your own use.",
    tasks:[
     {t:"Audit one image of Japan", how:[
       "Find one popular image of Japan: a travel advert, a film trailer, a news feature or a product advert.",
       "Note which Japan it shows (traditional, futuristic, cute, disciplined…) and who it leaves out (women, minorities, rural areas, migrants…).",
       "Decide whether the image is Orientalist, self-Orientalist (made in Japan for an outside audience), or neither, and why."
     ], write:"The image… What Japan it shows… Who is missing… Orientalist, self-Orientalist or neither, because…"},
     {t:"Start a Japan studies reading list", how:[
       "Open the website of one journal or association in the table (for example *The Asia-Pacific Journal: Japan Focus*, which is open access).",
       "Find two recent articles on a topic that interests you and note their authors, year and main argument.",
       "For each, write which discipline it draws on and whether it uses Japanese-language sources."
     ], write:"Article 1: author, year, argument, discipline, Japanese sources? Article 2: …"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (150–250 words) that states a position, gives evidence, and names someone who would disagree.",
       "1. Does it matter that area studies grew partly to serve the foreign policy of powerful states? Why or why not?",
       "2. Can a scholar use nihonjinron texts as evidence without repeating their claims? How?",
       "3. What can an outsider see in a society that an insider might miss, and the other way round?"
     ], write:"My question… My position… Evidence… Who would disagree, and why…"}
    ],
    proof:"Notes on one image of Japan and whether it is Orientalist, two journal articles with their arguments and sources, and a seminar paragraph that takes a position and names a counter-argument."
   },
   read:[
    {book:"eirt", where:"Chapter 9 “Postcolonialism” (Sheila Nair)", note:"Read it after this lesson to see how Said’s ideas entered IR theory."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"On theorising from Asia: useful background for the insider–outsider question."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u4-l2", title:"Modern Japan’s arc, from Meiji to the Occupation", minutes:50,
   hook:{q:"Japan’s Constitution came into force in 1947. How many times has it been amended since then?", options:["Never","Twice","Nine times","Twenty-seven times"], answer:0, reveal:"**Never.** As of November 2026, not one word of the 1947 Constitution has been changed, which makes it one of the oldest unamended national constitutions in the world. Amendment needs two-thirds of all members of both houses of the Diet and then a majority in a national referendum, and no amendment has yet passed that test. Its most debated clause, Article 9, renounces war. This lesson tells, briefly, how Japan got from the Meiji state of 1868 to that constitution."},
   goals:[
     "Use Japan’s era names and the main periods of modern Japanese history",
     "Summarise how the Meiji state was built and what the 1889 Constitution gave the Emperor",
     "Outline Japan’s empire and war from 1895 to 1945 in a few sentences, with the scholarly consensus on wartime atrocities",
     "Explain how the Occupation (1945–52) worked and which reforms it made",
     "Explain what the 1947 Constitution and Article 9 say, how Article 9 has been interpreted, and the main positions in the revision debate"
   ],
   learn:[
    {h:"A brief arc, and how to date it", body:[
      {lead:"Seminars on contemporary Japan assume you know the outline of its modern history: a fast-built modern state, an empire, a catastrophic war, defeat, occupation and a new constitution. This lesson gives that outline. The full global story, with the wars and the Cold War in Asia, is in Unit 1 of this track ({{asia-pacific-war}}); here we keep to what you need for Japan studies."},
      "Japanese dates often use **era names** ([元号]{げんごう}, *gengō*), which change with each emperor. You will meet them in Japanese sources, so it helps to know the modern ones:",
      {table:[["Era","Years","Often associated with"],["Meiji [明治]{めいじ}","1868–1912","Building a modern state; first wars of empire"],["Taishō [大正]{たいしょう}","1912–1926","Party politics, “Taishō democracy”"],["Shōwa [昭和]{しょうわ}","1926–1989","War, defeat, Occupation, high growth"],["Heisei [平成]{へいせい}","1989–2019","Bubble’s end, “lost decades”"],["Reiwa [令和]{れいわ}","2019–","The current era"]]},
      {tip:"To convert, find the era’s first year: Reiwa 1 is 2019, so Reiwa 8 is 2026. Government documents and statistics are dated this way, so the 2025 census is the census of Reiwa 7 ([令和]{れいわ}7[年]{ねん})."}
    ]},
    {h:"Building the Meiji state", body:[
      "In the 1850s Western powers forced Japan, like China before it, to sign [[unequal-treaty|unequal treaties]], which gave foreigners legal privileges and limited Japan’s control of its own tariffs. In 1868 a coalition of samurai from south-western domains overthrew the Tokugawa shogunate and ruled in the name of the young Emperor Meiji: the [[meiji-restoration|Meiji Restoration]].",
      "The new leaders rebuilt the state within a generation:",
      {list:[
        "**Centralisation.** In 1871 the old feudal domains were abolished and replaced with prefectures run from Tokyo.",
        "**Army, taxes and schools.** A conscription law (1873), a land-tax reform (1873) and a national school system gave the state soldiers, revenue and literate citizens.",
        "**Learning from abroad.** The Iwakura Mission (1871–73) toured the United States and Europe to study institutions, then borrowed selectively: a German-influenced constitution, a British-style navy, French and German legal codes.",
        "**A constitution.** The [[meiji-constitution|Meiji Constitution]], promulgated in 1889, created an elected lower house in the Imperial Diet, which first met in 1890. Sovereignty lay with the Emperor; ministers answered to him, not to the Diet; and the army and navy had direct access to the throne."
      ]},
      "By 1911 Japan had won full revision of the unequal treaties. The Meiji period is often told as a success story of modernisation. Historians also stress its costs: heavy rural taxation, the suppression of opposition, the absorption of Ainu lands in Hokkaido and of the Ryukyu Kingdom (annexed as Okinawa Prefecture in 1879), and the turn to empire."
    ]},
    {h:"Empire and war, 1895–1945", body:[
      "Japan joined the imperial powers it had feared. It took Taiwan after defeating Qing China (1894–95), won the war with Russia (1904–05) and annexed Korea in 1910. In the 1910s and 1920s party cabinets and mass politics grew (“Taishō democracy”); men gained the vote regardless of income in 1925, the same year a Peace Preservation Law gave the state new powers against the left.",
      "In the 1930s the military gained the upper hand. Japan’s army seized Manchuria in 1931, full-scale war with China began in 1937, and in December 1941 Japan attacked the United States and European colonies in Southeast Asia. The war ended with the atomic bombings of Hiroshima and Nagasaki, the Soviet entry into the war, and Japan’s surrender, announced on 15 August and signed on 2 September 1945.",
      {warn:"On wartime atrocities, historians agree on the core facts: Japanese forces committed mass killings of civilians and prisoners, including in Nanjing in 1937–38; forced labour; and a system of “comfort stations” in which women from Korea, China, the Philippines and elsewhere were made to provide sex to soldiers. Estimates of numbers vary and remain debated, and these histories are still politically sensitive in East Asia (Lesson 5). State the consensus, cite reputable historians for numbers, and treat denial of the core facts as outside scholarly debate."},
      "Unit 1 covers this period in depth, including the Pacific War and the [[atomic-bombings]]. For Japan studies, the key point is what came next: a defeat so complete that it opened the way to rebuilding the state."
    ]},
    {h:"Defeat and Occupation, 1945–1952", body:[
      "From 1945 to 1952 Japan was occupied by the Allies, in practice by the United States under General Douglas MacArthur, the [[scap|Supreme Commander for the Allied Powers (SCAP)]]. Unlike occupied Germany, Japan kept its own government: SCAP’s headquarters (often called GHQ) gave orders, and Japanese ministries carried them out. Scholars call this **indirect rule**.",
      "The early Occupation aimed at demilitarisation and democratisation:",
      {list:[
        "The armed forces were disbanded and leaders tried for war crimes at the International Military Tribunal for the Far East in Tokyo (1946–48; see [[war-crimes-tribunals]]). The Emperor was not put on trial, a decision historians still debate.",
        "Women gained the vote in December 1945 and voted for the first time in April 1946.",
        "A land reform transferred much tenanted land to the farmers who worked it; the big family-run business conglomerates, the [[zaibatsu]], were broken up; trade unions were legalised; education was reorganised."
      ]},
      "From about 1947–48, as the Cold War deepened, US priorities shifted from reform to recovery and anti-communism, a turn Japanese and Western historians call the **“reverse course”**. Some purged wartime figures returned to public life, and the left was purged in turn.",
      "The San Francisco Peace Treaty, signed on 8 September 1951 and in force from 28 April 1952, ended the Occupation. On the same day in 1951 Japan signed a security treaty with the United States. Together they formed the core of what Unit 1 calls the [[san-francisco-system|San Francisco system]]. Okinawa stayed under US administration until 15 May 1972. John Dower’s *Embracing Defeat* (1999) is the classic account of how Japanese people lived, resisted and reshaped the Occupation.",
      {fig:'<svg viewBox="0 0 340 452"><path class="d-ink" d="M60 20 L60 432" stroke-width="3"/><circle class="d-inkf" cx="60" cy="28" r="6"/><text x="76" y="25">1868 Meiji Restoration</text><text class="s" x="76" y="42">a new central state</text><circle class="d-inkf" cx="60" cy="84" r="6"/><text x="76" y="81">1889 Meiji Constitution</text><text class="s" x="76" y="98">sovereignty with the Emperor</text><circle class="d-inkf" cx="60" cy="140" r="6"/><text x="76" y="137">1895–1910 empire grows</text><text class="s" x="76" y="154">Taiwan 1895, Korea 1910</text><circle class="d-inkf" cx="60" cy="196" r="6"/><text x="76" y="193">1931–1945 war</text><text class="s" x="76" y="210">Manchuria, China, Pacific</text><rect class="d-rose" x="70" y="236" width="258" height="96" rx="8" stroke-width="2"/><circle class="d-inkf" cx="60" cy="252" r="6"/><text x="82" y="258">1945–1952 Occupation</text><text class="s" x="82" y="278">reforms, then “reverse course”</text><text x="82" y="302">1947 new Constitution</text><text class="s" x="82" y="320">popular sovereignty, Article 9</text><circle class="d-inkf" cx="60" cy="364" r="6"/><text x="76" y="361">1952 treaty in force</text><text class="s" x="76" y="378">Occupation ends; US alliance</text><circle class="d-inkf" cx="60" cy="420" r="6"/><text x="76" y="417">1972 Okinawa returned</text><text class="s" x="76" y="434">US bases remain</text></svg>', alt:"A vertical timeline. 1868 Meiji Restoration, a new central state. 1889 Meiji Constitution, sovereignty with the Emperor. 1895 to 1910 empire grows, Taiwan 1895, Korea 1910. 1931 to 1945 war in Manchuria, China and the Pacific. A highlighted box for 1945 to 1952, the Occupation: reforms then the reverse course, and the 1947 Constitution with popular sovereignty and Article 9. 1952 the peace treaty comes into force, the Occupation ends and the US alliance begins. 1972 Okinawa is returned, with US bases remaining.", cap:"Modern Japan’s arc in brief. Unit 1 of this track tells the global story around it."}
    ]},
    {h:"The 1947 Constitution and Article 9", body:[
      "In February 1946, after a Japanese government draft was judged too timid, SCAP’s staff wrote a model constitution in about a week. The Japanese government revised it, and the Imperial Diet, newly elected with women voting, debated and amended it as a formal revision of the Meiji Constitution. The [[constitution-of-japan|Constitution of Japan]] was promulgated on 3 November 1946 and came into force on 3 May 1947.",
      "Its key changes:",
      {list:[
        "**Popular sovereignty.** Sovereignty now “resides” with the people. The Emperor becomes “the symbol of the State and of the unity of the People” (Article 1), with no “powers related to government” (Article 4): the [[symbol-emperor|symbol emperor]] system of Lesson 3.",
        "**Rights.** Equality under the law (Article 14), equal rights of husband and wife (Article 24) and a right to “minimum standards of wholesome and cultured living” (Article 25), a clause added during the Diet debates.",
        "**Article 9.** Japan renounces war."
      ]},
      {ex:"Article 9, paragraph 1: “Aspiring sincerely to an international peace based on justice and order, the Japanese people forever renounce war as a sovereign right of the nation and the threat or use of force as means of settling international disputes.” Paragraph 2: “In order to accomplish the aim of the preceding paragraph, land, sea, and air forces, as well as other war potential, will never be maintained. The right of belligerency of the state will not be recognized.”", label:"The text (official English translation)"},
      "So how can Japan have the [[self-defense-forces|Self-Defense Forces]] (SDF), founded in 1954? Successive governments have held that Article 9 does not deny a state’s inherent right of self-defence, so forces limited to the minimum necessary for self-defence are not “war potential”. Many constitutional scholars have disagreed, and the courts have mostly avoided ruling on the SDF directly. In 2014 the cabinet reinterpreted the article to allow limited [[collective-self-defence|collective self-defence]], and security laws followed in 2015 (Lesson 5).",
      "**The revision debate**, told neutrally:",
      {table:[["Position","Main argument"],["Revise Article 9 (and more)","The text no longer matches reality (the SDF exist); a constitution written under occupation should be rewritten by Japanese; the security environment has changed."],["Keep it as it is","Article 9 has kept Japan out of war since 1945; reinterpretation already goes too far; changing it could weaken a key restraint."],["Something in between","Add a clause recognising the SDF while keeping the renunciation of war, as the LDP proposed in 2018; or keep the text and set clearer limits by law."]]},
      "Scholars also debate the “imposed constitution” story. The draft came from SCAP, but Japanese politicians amended it, Japanese ideas (including some from private drafts of 1945) fed into it, and the Japanese public has long been divided on revision, with poll results that depend heavily on the wording of the question and the year. Use dated polls from named pollsters, not general claims, when you write on this.",
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["The Occupation ruled Japan directly.","SCAP ruled through Japanese ministries (indirect rule)."],["Article 9 means Japan has no military.","Japan has the SDF; the government says they are constitutional as self-defence forces. This is debated."],["The Constitution was simply dictated.","SCAP drafted it, but Japanese officials and the Diet revised and amended it."],["The Constitution has been amended many times.","It has never been amended (as of November 2026)."]]},
      {terms:["meiji-constitution","scap","occupation-of-japan","zaibatsu","constitution-of-japan","article-9","symbol-emperor","self-defense-forces","san-francisco-peace-treaty"]}
    ]}
   ],
   try:[
    {id:"e4u4-l2-x1", type:"match", q:"Match each era name to its years.", pairs:[
      ["Meiji","1868–1912","The Restoration began the Meiji era."],
      ["Taishō","1912–1926","A short era known for party politics."],
      ["Shōwa","1926–1989","The longest modern era: war, defeat, Occupation and high growth."],
      ["Heisei","1989–2019","Began as the bubble peaked; ended with Emperor Akihito’s abdication."],
      ["Reiwa","2019–","The current era, from Emperor Naruhito’s accession."]
    ]},
    {id:"e4u4-l2-x2", type:"number", q:"A statistics table is labelled [令和]{れいわ}7[年]{ねん} (Reiwa 7). Reiwa 1 was 2019. Which Western calendar year is Reiwa 7?", answer:2025, tol:0, unit:"", why:"Reiwa 1 = 2019, so Reiwa N = 2018 + N. Reiwa 7 = 2018 + 7 = 2025. That is why the 2025 census is called the census of Reiwa 7.", wrongs:[{v:2026, tol:0, why:"You added 7 to 2019. But 2019 is already year 1, so add 6 (or add 7 to 2018)."},{v:2024, tol:0, why:"Too early: Reiwa 1 = 2019, Reiwa 2 = 2020, and so on up to Reiwa 7 = 2025."}]},
    {id:"e4u4-l2-x3", type:"sort", q:"Was each reform part of the Meiji state-building, or of the Occupation?", buckets:["Meiji state-building","Occupation (1945–52)"], items:[
      {t:"Feudal domains abolished and replaced by prefectures", b:0, why:"1871, one of the first big Meiji reforms."},
      {t:"Women vote in a national election for the first time", b:1, why:"April 1946, after a law passed in December 1945."},
      {t:"A national conscription army is created", b:0, why:"The conscription law of 1873."},
      {t:"The big family-run conglomerates (zaibatsu) are broken up", b:1, why:"An early Occupation economic reform."},
      {t:"Tenanted farmland is transferred to the farmers who worked it", b:1, why:"The Occupation land reform."},
      {t:"A constitution places sovereignty with the Emperor", b:0, why:"The Meiji Constitution of 1889. The 1947 Constitution placed sovereignty with the people."}
    ]},
    {id:"e4u4-l2-x4", type:"mcq", q:"How did the Occupation of Japan mainly govern?", options:[
      {t:"Indirectly: SCAP’s headquarters issued orders and the Japanese government and ministries carried them out.", ok:true, why:"Correct. This indirect rule is a key difference from occupied Germany, where Allied military governments ruled directly at first."},
      {t:"Directly: American officers replaced all Japanese ministries.", why:"Japanese ministries kept working. That continuity is one reason the bureaucracy stayed powerful after 1952."},
      {t:"Through the United Nations, which ran Japan as a trust territory.", why:"The UN did not run Japan. The Occupation was an Allied, in practice American, operation."},
      {t:"Through the Emperor, who kept his Meiji-era powers until 1952.", why:"The Emperor kept his throne, but the 1947 Constitution ended his sovereign powers."}
    ]},
    {id:"e4u4-l2-x5", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"The Meiji Constitution is promulgated", why:"1889."},
      {t:"Japan annexes Korea", why:"1910."},
      {t:"Japan’s surrender is signed", why:"2 September 1945."},
      {t:"The Constitution of Japan comes into force", why:"3 May 1947."},
      {t:"The San Francisco Peace Treaty comes into force and the Occupation ends", why:"28 April 1952."},
      {t:"Okinawa returns to Japanese administration", why:"15 May 1972."}
    ]},
    {id:"e4u4-l2-x6", type:"mcq", q:"What does the government’s long-standing interpretation of Article 9 say about the Self-Defense Forces?", options:[
      {t:"Article 9 does not deny Japan’s inherent right of self-defence, so forces limited to the minimum necessary for self-defence are not banned “war potential”.", ok:true, why:"That is the official view. Many constitutional scholars disagree, which is why the issue is debated."},
      {t:"Article 9 was amended in 1954 to allow the SDF.", why:"The Constitution has never been amended. The SDF rest on interpretation, not a text change."},
      {t:"The SDF are a police force, so Article 9 does not apply to them.", why:"The SDF are military forces in practice. The government’s argument is about self-defence, not about calling them police."},
      {t:"The Supreme Court has ruled the SDF clearly constitutional.", why:"The courts have mostly avoided a direct ruling on the SDF’s constitutionality."}
    ]},
    {id:"e4u4-l2-x7", type:"spot", q:"Tap each sentence in this study note that is **inaccurate or one-sided**.", ask:"inaccurate or one-sided", parts:[
      {t:"The Constitution of Japan came into force on 3 May 1947.", flag:false, why:"Accurate."},
      " ",
      {t:"Americans wrote it and Japanese politicians had no part in it.", flag:true, why:"Inaccurate. SCAP drafted it, but the Japanese government revised it and the Diet debated and amended it; Article 25’s right to minimum living standards was added in the Diet."},
      " ",
      {t:"Article 1 makes the Emperor the symbol of the State.", flag:false, why:"Accurate: “the symbol of the State and of the unity of the People”."},
      " ",
      {t:"Article 9 has been amended to allow collective self-defence.", flag:true, why:"Inaccurate. The text was never amended; the 2014 change was a cabinet reinterpretation."},
      " ",
      {t:"Supporters of revision say the text should match reality; opponents say Article 9 has helped keep Japan out of war.", flag:false, why:"A fair, balanced summary of two main positions."},
      " ",
      {t:"Everyone in Japan now agrees the Constitution must be rewritten.", flag:true, why:"One-sided and false. Views are divided and depend on the question asked and the year of the poll."}
    ]}
   ],
   apply:{
    intro:"Work with primary sources: the Constitution itself and a timeline you build.",
    tasks:[
     {t:"Read the Constitution’s first chapters", how:[
       "Open the official English translation of the Constitution of Japan on the Prime Minister’s Office website (search “Constitution of Japan kantei”).",
       "Read the Preamble, Chapter I (Articles 1–8) and Chapter II (Article 9).",
       "Note three phrases that show popular sovereignty, and the exact words Article 9 uses that the revision debate turns on."
     ], write:"Three phrases on popular sovereignty… The Article 9 words at the heart of the debate…"},
     {t:"Build your own timeline, 1853–1972", how:[
       "List ten events from this lesson in order, with dates.",
       "Next to each, write one consequence that a student of today’s Japan should know.",
       "Mark which events Unit 1 covers in more depth, so you can return to them."
     ], write:"Date – event – consequence for today…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words, taking a position and naming a counter-argument.",
       "1. Was the Occupation more a break with the Japanese past or a continuation of it (think of the bureaucracy and the Emperor)?",
       "2. Does it matter for the Constitution’s legitimacy that occupying forces wrote the first draft?",
       "3. Is Article 9 better understood as law, as a norm or as a political compromise?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes from the Constitution’s Preamble and Articles 1–9, a ten-event timeline with consequences, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sbj", where:"Chapter 17 “Government System”", note:"A short official summary of the Constitution and the institutions it created."},
    {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar)", note:"For the global context of empires and the international system that Meiji Japan joined."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u4-l3", title:"How Japan is governed", minutes:55,
   hook:{q:"Who chooses Japan’s prime minister?", options:["Voters, in a direct election","The Emperor, at his discretion","The Diet, by a vote of its members","The ruling party’s members, with no vote in parliament"], answer:2, reveal:"**The Diet.** Article 67 of the Constitution says the prime minister is “designated from among the members of the Diet by a resolution of the Diet”; if the two houses disagree, the House of Representatives prevails. The Emperor then formally appoints the person the Diet has chosen, with no choice of his own. In practice the leader of the largest party or coalition in the lower house usually wins, which is why a party leadership race can decide who becomes prime minister. This lesson explains how the pieces fit together."},
   goals:[
     "Explain the Emperor’s constitutional role as a symbol with no powers related to government",
     "Describe the two houses of the Diet, how they are elected and when the lower house prevails",
     "Explain how the prime minister and cabinet are chosen and held to account, and what “Kantei-led” politics means",
     "Weigh rival views of who really governs: bureaucrats or politicians",
     "Explain the LDP’s long dominance, the 1955 system and the effects of the 1994 electoral reform",
     "Describe the basics of local government in Japan"
   ],
   learn:[
    {h:"A parliamentary democracy with a symbolic monarch", body:[
      {lead:"If you know the British or Thai system, Japan will feel familiar in outline: a hereditary monarch at the top, an elected parliament, and a government formed by whoever commands a majority there. The details are what seminars argue about."},
      "Japan is a **parliamentary system**: the executive (the cabinet) comes out of and answers to the legislature (the Diet). Executive power is “vested in the Cabinet” (Article 65), which is led by the prime minister ([内閣総理大臣]{ないかくそうりだいじん}).",
      "The Emperor ([天皇]{てんのう}) is “the symbol of the State and of the unity of the People”, whose position derives “from the will of the people with whom resides sovereign power” (Article 1). He performs only the acts in matters of state listed in the Constitution, such as appointing the prime minister the Diet has designated, convening the Diet and promulgating laws, always with “the advice and approval of the Cabinet” (Article 3), and he “shall not have powers related to government” (Article 4). The current Emperor, Naruhito, acceded on 1 May 2019, after his father Akihito abdicated under a special law.",
      {tip:"Avoid calling the Emperor “head of state” without comment. The Constitution never uses the term, and Japanese constitutional scholars disagree on whether it fits. “Symbol emperor” ([象徴天皇]{しょうちょうてんのう}) is the precise phrase."}
    ]},
    {h:"The Diet: two houses", body:[
      "The [[national-diet|National Diet]] ([国会]{こっかい}) is “the highest organ of state power” and “the sole law-making organ of the State” (Article 41). It has two houses:",
      {table:[["","House of Representatives","House of Councillors"],["Japanese name","[衆議院]{しゅうぎいん}","[参議院]{さんぎいん}"],["Seats","465: 289 single-member districts + 176 proportional","248: 148 prefectural districts + 100 national proportional"],["Term","4 years, but can be dissolved early","6 years; half elected every 3 years; cannot be dissolved"],["Special powers","Prevails on the budget, treaties and choice of PM; can pass a non-confidence motion","A slower, longer-term chamber"]]},
      "The seat numbers are as of November 2026. Cutting the number of lower-house seats was being debated between the parties, so check the current figure before you quote it.",
      "The [[house-of-representatives-japan|House of Representatives]] is the stronger house. Its decision prevails if the houses disagree on the prime minister (Article 67), the budget (Article 60) or treaty approval (Article 61). For ordinary laws, it can override the [[house-of-councillors|House of Councillors]] only by passing the bill again with a two-thirds majority (Article 59), which ruling parties rarely have. So when different majorities control the two houses, Japanese politics speaks of a “twisted Diet” (ねじれ[国会]{こっかい}), and passing laws becomes hard."
    ]},
    {h:"Prime minister and cabinet", body:[
      "The prime minister must be a member of the Diet; in practice prime ministers come from the lower house. He or she appoints the other ministers, a majority of whom must be Diet members (Article 68), and all of whom must be civilians (Article 66). The cabinet is collectively responsible to the Diet. If the House of Representatives passes a non-confidence resolution, the cabinet must resign within ten days unless the house is dissolved (Article 69).",
      "For decades scholars described Japanese prime ministers as weak: they changed often, depended on party factions and relied on ministries for policy. Reforms changed that. The central government reorganisation of 2001 created a stronger Cabinet Office and cut the ministries to a smaller number. A Cabinet Bureau of Personnel Affairs, created in 2014, gave the prime minister’s office influence over senior civil-service appointments. Scholars speak of **Kantei-led** politics ([官邸主導]{かんていしゅどう}), after the Kantei, the prime minister’s official office, especially under Koizumi Jun’ichirō (2001–06) and Abe Shinzō (2012–20).",
      {ex:"As of November 2026, the prime minister is Takaichi Sanae of the Liberal Democratic Party (LDP), Japan’s first woman prime minister, in office since October 2025 and chosen again by the Diet after a general election in February 2026. The LDP governs in coalition with the Japan Innovation Party (Nippon Ishin no Kai), which took its first cabinet post in September 2026. Komeito, the LDP’s partner since 1999, left the coalition in October 2025. These facts change: check the Prime Minister’s Office website before you quote them.", label:"Changeable facts, as of November 2026"},
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="a43" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 0 L5 10 z"/></marker></defs><rect class="d-sage" x="70" y="8" width="200" height="44" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">Voters (18 and over)</text><path class="d-ink" d="M170 54 L170 74" stroke-width="2" marker-end="url(#a43)"/><rect class="d-lup" x="10" y="82" width="320" height="86" rx="8" stroke-width="2"/><text x="170" y="104" text-anchor="middle">National Diet</text><rect class="d-panel" x="22" y="114" width="140" height="44" rx="6" stroke-width="1.5"/><text x="92" y="134" text-anchor="middle">Representatives</text><text class="s" x="92" y="150" text-anchor="middle">465 · can be dissolved</text><rect class="d-panel" x="178" y="114" width="140" height="44" rx="6" stroke-width="1.5"/><text x="248" y="134" text-anchor="middle">Councillors</text><text class="s" x="248" y="150" text-anchor="middle">248 · fixed terms</text><path class="d-ink" d="M170 170 L170 190" stroke-width="2" marker-end="url(#a43)"/><text class="s" x="180" y="186">designates PM</text><rect class="d-gold" x="10" y="198" width="320" height="56" rx="8" stroke-width="2"/><text x="170" y="222" text-anchor="middle">Prime minister and cabinet</text><text class="s" x="170" y="242" text-anchor="middle">executive power; answers to the Diet</text><path class="d-ink" d="M170 256 L170 276" stroke-width="2" marker-end="url(#a43)"/><rect class="d-panel" x="10" y="284" width="320" height="50" rx="8" stroke-width="2"/><text x="170" y="306" text-anchor="middle">Ministries and agencies</text><text class="s" x="170" y="324" text-anchor="middle">career civil servants</text><rect class="d-rose" x="10" y="350" width="150" height="70" rx="8" stroke-width="2"/><text x="85" y="376" text-anchor="middle">Emperor</text><text class="s" x="85" y="396" text-anchor="middle">symbol; formal acts</text><text class="s" x="85" y="412" text-anchor="middle">on cabinet advice</text><rect class="d-sage" x="180" y="350" width="150" height="70" rx="8" stroke-width="2"/><text x="255" y="376" text-anchor="middle">Local government</text><text class="s" x="255" y="396" text-anchor="middle">47 prefectures and</text><text class="s" x="255" y="412" text-anchor="middle">~1,700 municipalities</text></svg>', alt:"A flow from top to bottom. Voters aged 18 and over elect the National Diet, which has two houses: the House of Representatives with 465 seats, which can be dissolved, and the House of Councillors with 248 seats and fixed terms. The Diet designates the prime minister, who leads the cabinet, which holds executive power and answers to the Diet. The cabinet directs the ministries and agencies staffed by career civil servants. At the bottom, two side boxes: the Emperor, a symbol who performs formal acts on cabinet advice, and local government, with 47 prefectures and about 1,700 municipalities.", cap:"How the main national institutions connect. Seat numbers as of November 2026."}
    ]},
    {h:"Who really governs? Bureaucrats and politicians", body:[
      "Japan’s central ministries ([省庁]{しょうちょう}) are staffed by career officials recruited through competitive exams. The Ministry of Finance and the former Ministry of International Trade and Industry ([[miti|MITI]], reorganised as the Ministry of Economy, Trade and Industry in 2001) were famous for their power.",
      "Scholars have argued for decades about who holds real power:",
      {list:[
        "**The bureaucracy-dominance view.** Chalmers Johnson (*MITI and the Japanese Miracle*, 1982) argued that “the politicians reign and the bureaucrats rule”: elite officials set economic strategy and politicians mostly protected them.",
        "**The politician-dominance view.** Mark Ramseyer and Frances Rosenbluth (*Japan’s Political Marketplace*, 1993) used principal–agent theory to argue the reverse: LDP politicians were the principals who delegated to bureaucrats, and could punish or reward them.",
        "**A middle view.** Many scholars describe an [[iron-triangle]] of ruling-party policy specialists (*zoku* giin, “tribe” members), ministries and industry groups, each needing the others."
      ]},
      "Two words appear in almost every seminar on this topic. [[amakudari|Amakudari]] ([天下]{あまくだ}り, “descent from heaven”) is the practice of senior officials retiring into well-paid posts in companies or public bodies they used to regulate; laws since 2007 have restricted it. And **administrative guidance** ([行政指導]{ぎょうせいしどう}) is informal direction by officials that firms usually follow even though it is not law.",
      {key:"The reforms since the 1990s shifted power from ministries towards the prime minister’s office. The old question “bureaucrats or politicians?” has become “which politicians, and how centralised?”"}
    ]},
    {h:"The LDP and the 1955 system", body:[
      "In 1955 Japan’s two main conservative parties merged to form the [[liberal-democratic-party|Liberal Democratic Party]] (LDP, [自由民主党]{じゆうみんしゅとう}), weeks after the left and right wings of the Japan Socialist Party reunited. The pattern that followed, with the LDP always in government and the Socialists the permanent main opposition, is called the [[1955-system|1955 system]] ([五五年体制]{ごじゅうごねんたいせい}), a name the political scientist Masumi Junnosuke made famous.",
      "The LDP governed without a break from 1955 to 1993. Scholars explain its dominance in several ways: rapid economic growth that it could take credit for; a rural electoral base that was over-represented; generous spending in members’ districts; personal support organisations ([後援会]{こうえんかい}, *kōenkai*); and a divided opposition.",
      "The electoral system mattered too. Until 1994 most lower-house members were elected in multi-member districts by the [[sntv|single non-transferable vote]] (SNTV): each voter had one vote, and the top three to five candidates won. A party seeking a majority had to run several candidates in the same district against each other. That rewarded personal networks, factions and money rather than party programmes, and it helped produce scandals such as the Lockheed (1976) and Recruit (1988–89) affairs.",
      "The LDP lost power in 1993 to a coalition of eight parties and groups, returned to government in 1994 (at first in a coalition led by a Socialist prime minister), lost again to the Democratic Party of Japan from 2009 to 2012, and has led governments since December 2012."
    ]},
    {h:"The 1994 electoral reform and local government", body:[
      "In 1994 the Diet replaced SNTV for the lower house with a [[parallel-electoral-system|parallel (mixed-member majoritarian) system]], first used in 1996: voters cast one vote for a district candidate and one for a party list. Unlike Germany’s system, the two parts are not linked, so the list seats do not correct for disproportional district results. Candidates may stand in both, so a district loser can still win a list seat. The same reforms introduced public subsidies for parties and tightened rules on political funds.",
      "What changed? Many scholars find that campaigns became more party-centred and party leaders stronger, which helped make Koizumi’s and Abe’s Kantei-led style possible. Others, such as Ellis Krauss and Robert Pekkanen (*The Rise and Fall of Japan’s LDP*, 2011), show that older institutions such as *kōenkai* and factions adapted and survived. After a political-funds scandal, most LDP factions announced in 2024 that they would dissolve.",
      "**Local government** rests on the principle of local autonomy (Article 92). Japan has 47 prefectures ([都道府県]{とどうふけん}) and about 1,700 municipalities ([市町村]{しちょうそん}), down from more than 3,200 in 1999 after a wave of mergers, plus Tokyo’s 23 special wards. Governors and mayors are directly elected, alongside elected assemblies, so each local government has two elected centres of power. Local governments deliver most public services, but they depend heavily on transfers from the national government. Disputes between Okinawa Prefecture and the national government over US bases show that local and national elected leaders can disagree sharply.",
      {h:"Common misconceptions"},
      {table:[["Misconception","Closer to the truth"],["The Emperor has reserve powers, like some presidents.","He has no powers related to government; all his state acts need cabinet advice and approval."],["Voters elect the prime minister.","The Diet designates the prime minister."],["Japan has been a one-party state.","Elections are competitive; the LDP lost power in 1993 and 2009."],["Bureaucrats run everything.","Their power was always debated, and reforms since the 1990s strengthened the prime minister’s office."]]},
      {terms:["symbol-emperor","national-diet","house-of-representatives-japan","house-of-councillors","japanese-cabinet","miti","iron-triangle","amakudari","liberal-democratic-party","1955-system","sntv","parallel-electoral-system","prefecture-japan"]}
    ]}
   ],
   try:[
    {id:"e4u4-l3-x1", type:"mcq", q:"After an election, Sione’s friend says the Emperor could refuse to appoint the prime minister if he disliked the result. What is the correct reply?", options:[
      {t:"No. He appoints the person the Diet designates, acting with the cabinet’s advice and approval, and has no powers related to government.", ok:true, why:"Correct (Articles 3, 4 and 6). His role in appointing the prime minister is formal."},
      {t:"Yes, the Emperor keeps a reserve power to refuse, like some presidents.", why:"The Constitution gives him no such power. This is a key difference from the Meiji Constitution."},
      {t:"Yes, but only if the House of Councillors agrees.", why:"Neither house can give the Emperor discretion over the appointment."},
      {t:"The Emperor plays no part at all in the appointment.", why:"He does perform the formal act of appointment (Article 6). He simply has no choice in it."}
    ]},
    {id:"e4u4-l3-x2", type:"sort", q:"For each matter, which rule applies?", buckets:["Lower house prevails if the houses disagree","Both houses needed (two-thirds each)","Only the lower house can do it"], items:[
      {t:"Choosing the prime minister", b:0, why:"Article 67: the House of Representatives’ choice becomes the Diet’s decision."},
      {t:"Passing the budget", b:0, why:"Article 60: the lower house prevails."},
      {t:"Approving a treaty", b:0, why:"Article 61 applies the budget rule to treaties."},
      {t:"Initiating a constitutional amendment", b:1, why:"Article 96: two-thirds of all members of each house, then a referendum."},
      {t:"Passing a non-confidence resolution that forces the cabinet to resign or dissolve", b:2, why:"Article 69 gives this only to the House of Representatives."},
      {t:"Being dissolved early for a snap election", b:2, why:"Only the House of Representatives can be dissolved; councillors serve fixed six-year terms."}
    ]},
    {id:"e4u4-l3-x3", type:"order", q:"Put the steps in order, from a general election to a new cabinet.", items:[
      {t:"A general election for the House of Representatives is held", why:"Within 40 days of a dissolution (Article 54)."},
      {t:"The new Diet is convened in a special session", why:"Within 30 days of the election (Article 54)."},
      {t:"The outgoing cabinet resigns en masse", why:"Article 70 requires this when a new Diet first convenes after a general election."},
      {t:"Both houses vote to designate a prime minister; the lower house prevails if they differ", why:"Article 67: designation comes before all other business."},
      {t:"The Emperor appoints the designated prime minister", why:"Article 6: a formal act."},
      {t:"The prime minister appoints the ministers", why:"Article 68: a majority must be Diet members."}
    ]},
    {id:"e4u4-l3-x4", type:"number", q:"The House of Representatives has 465 seats, 289 of them in single-member districts. What percentage of seats are single-member districts? Round to one decimal place.", answer:62.2, tol:0.1, unit:"%", why:"289 ÷ 465 = 0.6215…, so about 62.2%. The other 176 seats (about 37.8%) are elected by proportional representation.", wrongs:[{v:37.8, tol:0.1, why:"That is the proportional share (176 ÷ 465). The question asks about the single-member districts."},{v:0.6, tol:0.05, why:"That is the fraction (0.62). Multiply by 100 to get a percentage."},{v:164.1, tol:0.5, why:"You divided 465 by 289. Divide the part (289) by the whole (465)."}]},
    {id:"e4u4-l3-x5", type:"mcq", q:"Under the old SNTV system (before 1994), why did LDP candidates often compete against each other?", options:[
      {t:"Each district elected several members and each voter had one vote, so a party seeking a majority ran several candidates in the same district.", ok:true, why:"Right. Intra-party competition rewarded personal networks, factions and spending rather than party programmes."},
      {t:"Because the law banned parties from coordinating candidates.", why:"No such ban existed. The logic of multi-member districts with one vote per voter produced the competition."},
      {t:"Because every district elected exactly one member.", why:"That describes single-member districts, introduced after 1994. Under SNTV most districts elected three to five members."},
      {t:"Because voters ranked all the candidates in order.", why:"SNTV means a single, non-transferable vote: no ranking."}
    ]},
    {id:"e4u4-l3-x6", type:"match", q:"Match each argument to the scholars who made it.", pairs:[
      ["Elite bureaucrats steered economic policy: “the politicians reign and the bureaucrats rule”","Chalmers Johnson (1982)","His developmental-state study of MITI."],
      ["Politicians were the principals and bureaucrats their agents","Ramseyer and Rosenbluth (1993)","They applied principal–agent theory to the LDP and the ministries."],
      ["The LDP’s old institutions adapted after the 1994 reform","Krauss and Pekkanen (2011)","They traced how kōenkai and factions survived."],
      ["The name “1955 system” for LDP dominance with a Socialist opposition","Masumi Junnosuke","A Japanese political scientist who made the term famous."]
    ]},
    {id:"e4u4-l3-x7", type:"spot", q:"Tap each claim in this summary that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"Japan has a parliamentary system in which the cabinet answers to the Diet.", flag:false, why:"Accurate (Articles 65–69)."},
      " ",
      {t:"The House of Councillors can be dissolved at any time by the prime minister.", flag:true, why:"Inaccurate. Only the House of Representatives can be dissolved; councillors have fixed six-year terms."},
      " ",
      {t:"Since 1996 the lower house has been elected by a mix of districts and party lists.", flag:false, why:"Accurate: the parallel system introduced by the 1994 reform."},
      " ",
      {t:"The LDP has governed without interruption since 1955.", flag:true, why:"Inaccurate. It lost power in 1993–94 and 2009–12."},
      " ",
      {t:"Governors and mayors are elected directly by local voters.", flag:false, why:"Accurate: Japan’s local governments have directly elected executives and assemblies."}
    ]}
   ],
   apply:{
    intro:"Use official sources to see the system at work. All are free and in English as well as Japanese.",
    tasks:[
     {t:"Follow one bill through the Diet", how:[
       "Open the House of Representatives or House of Councillors website (English pages exist) and find the list of bills of the current or most recent session.",
       "Pick one bill and note who submitted it (the cabinet or members), which committee examined it and whether it passed both houses.",
       "Write which institutions from this lesson took part, and where the “twisted Diet” rule could have mattered."
     ], write:"The bill… Submitted by… Committee… Outcome in each house… Institutions involved…"},
     {t:"Check the changeable facts", how:[
       "On the Prime Minister’s Office website, find the current prime minister and the list of cabinet ministers.",
       "Note which party each minister belongs to, if the site or a reputable news source says so.",
       "Compare with this lesson’s “as of November 2026” box and note anything that has changed."
     ], write:"Prime minister today… Coalition parties… What has changed since November 2026…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Did the 1994 electoral reform change Japanese politics as much as its designers hoped?",
       "2. Is “bureaucrats or politicians?” still the right question about who governs Japan?",
       "3. Why might a party stay in power for decades in a competitive democracy, and is Japan unusual in this?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes tracing one bill through the Diet, an up-to-date check of the prime minister and coalition, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sbj", where:"Chapter 17 “Government System”", note:"The official short guide to the Diet, cabinet, courts and local government."},
    {book:"ospol", where:"Chapter 9 “Legislatures” and Chapter 10 “Executives, Cabinets, and Bureaucracies”", note:"General comparative chapters: read them to place Japan’s system among other parliamentary democracies."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u4-l4", title:"Economy and society: miracle, bubble, ageing and diversity", minutes:60,
   hook:{q:"In Japan’s 2025 census, roughly what share of the population was aged 65 or over?", options:["About 1 in 10","About 1 in 5","About 3 in 10","About half"], answer:2, reveal:"**About 3 in 10: 29.4%, a record high.** Children under 15 were only 10.9%, a record low. The census, taken on 1 October 2025, counted 122.97 million people, 2.5% fewer than in 2020. The same census counted 3.84 million foreign residents, almost 40% more than five years before. Ageing, shrinking and growing more diverse at once: this lesson looks at how Japan got here, starting with the economy."},
   goals:[
     "Compare the main explanations of Japan’s postwar economic “miracle”, including the developmental-state argument and its critics",
     "Explain the bubble of the late 1980s and the debate over the “lost decades”",
     "Read official figures on ageing and population decline correctly, with their dates and sources",
     "Describe changes and continuing gaps in gender equality using legal milestones and dated indicators",
     "Explain how Japan’s foreign-resident population and immigration rules have changed, and the main positions in the debate"
   ],
   learn:[
    {h:"The postwar “miracle” and its explanations", body:[
      {lead:"In 1945 Japan’s cities were in ruins. By the late 1960s it had one of the largest economies in the world, and by 1979 the sociologist Ezra Vogel could publish a bestseller titled *Japan as Number One*. How?"},
      "From the mid-1950s to the first oil shock of 1973, Japan’s real economic growth averaged roughly 9 per cent a year, a period Japanese writers call [高度経済成長]{こうどけいざいせいちょう} (high economic growth). Prime Minister Ikeda Hayato’s Income-Doubling Plan of 1960 became its symbol, and the 1964 Tokyo Olympics, with the first [新幹線]{しんかんせん} (Shinkansen) line, its showcase. The World Bank lent money for some of that infrastructure, which Japan finished repaying in 1990.",
      "Scholars have explained the “miracle” in rival ways:",
      {table:[["Explanation","The argument","Main critique"],["The developmental state","An elite bureaucracy, above all MITI, guided investment into chosen industries (Johnson, 1982)","Overstates the state; many successful firms ignored MITI"],["Market and catch-up","High saving, an educated workforce, imported technology and room to catch up with richer economies","Doesn’t explain why Japan caught up faster than others"],["Favourable world","Access to the US market, a cheap fixed yen (360 to the dollar until 1971), cheap oil, Korean War orders","Others had similar conditions and grew less"],["Institutions","Long-term ties between firms and banks, lifetime employment in large firms, cooperative unions","These were partly results of growth, and covered only part of the workforce"]]},
      "Chalmers Johnson’s *MITI and the Japanese Miracle* (1982) made the [[developmental-state|developmental state]] one of the most cited ideas in comparative politics and [[international-political-economy|international political economy]]: a state whose first goal is economic development and which steers the market with industrial policy rather than just setting rules. Critics replied with other pictures. Richard Samuels (*The Business of the Japanese State*, 1987) described “reciprocal consent” between state and business; David Friedman (*The Misunderstood Miracle*, 1988) stressed flexible small firms; and the World Bank’s *The East Asian Miracle* (1993) credited mostly market-friendly policies. Today most scholars combine several of these explanations.",
      {warn:"Avoid cultural explanations of the kind Lesson 1 criticised (“Japanese people work harder by nature”). Work habits and loyalty to firms were shaped by institutions such as lifetime employment and seniority pay, which can be studied and compared."}
    ]},
    {h:"Bubble and “lost decades”", body:[
      "In the 1970s and 1980s growth slowed but stayed strong. Then came a bubble. After the Plaza Accord of September 1985, in which the major economies agreed to push the dollar down, the yen rose sharply. To support exporters, the Bank of Japan kept interest rates low, and cheap money flowed into shares and land. The Nikkei 225 share index peaked at 38,915.87 on 29 December 1989.",
      "The [[bubble-economy|bubble]] burst from 1990. Share and land prices fell for years, banks were left with huge bad loans, and in 1997–98 several large financial firms failed. Growth stayed low, prices fell (deflation) for long stretches, and the Bank of Japan cut interest rates to zero by 1999. Japanese media called the 1990s the “lost decade”; as weak growth continued, people spoke of the [[lost-decades|lost decades]] ([失]{うしな}われた30[年]{ねん}, “the lost thirty years”).",
      "Policy responses included Koizumi’s structural reforms (2001–06), and from 2013 [[abenomics|Abenomics]]: very loose monetary policy, government spending and promised structural reform. The Nikkei finally passed its 1989 peak in February 2024, and in March 2024 the Bank of Japan ended the negative interest rates it had used since 2016.",
      "The “lost decades” label is itself debated. Japan stayed rich, with low unemployment and long life expectancy. Some economists argue that once you allow for the shrinking working-age population, growth per working-age person looks much less dismal. Others point to stagnant wages and a rise in insecure, non-regular jobs. Ask which measure a writer uses.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-sage" x="10" y="10" width="320" height="58" rx="8" stroke-width="2"/><text x="20" y="34">1955–1973 High growth</text><text class="s" x="20" y="54">about 9% a year; fixed yen; catch-up</text><rect class="d-lup" x="10" y="76" width="320" height="58" rx="8" stroke-width="2"/><text x="20" y="100">1973–1985 Stable growth</text><text class="s" x="20" y="120">oil shocks; exports; slower but steady</text><rect class="d-gold" x="10" y="142" width="320" height="58" rx="8" stroke-width="2"/><text x="20" y="166">1985–1990 Bubble</text><text class="s" x="20" y="186">Plaza Accord; cheap money; Nikkei peak</text><rect class="d-rose" x="10" y="208" width="320" height="58" rx="8" stroke-width="2"/><text x="20" y="232">1990s–2010s “Lost decades”</text><text class="s" x="20" y="252">bad loans; deflation; zero interest</text><rect class="d-panel" x="10" y="274" width="320" height="50" rx="8" stroke-width="2"/><text x="20" y="296">2013– Abenomics and after</text><text class="s" x="20" y="314">loose money; 2024 end of negative rates</text></svg>', alt:"Five stacked bands. 1955 to 1973, high growth, about 9 per cent a year, with a fixed yen and catch-up. 1973 to 1985, stable growth after the oil shocks, export-led. 1985 to 1990, the bubble after the Plaza Accord, with cheap money and the Nikkei peak. 1990s to 2010s, the lost decades of bad loans, deflation and zero interest rates. From 2013, Abenomics and after, with loose money and the end of negative interest rates in 2024.", cap:"Five rough phases of Japan’s postwar economy. Dates are approximate and economists draw the lines differently."}
    ]},
    {h:"An ageing, shrinking population", body:[
      "Japan’s population peaked around 2008–2010; the 2015 census was the first to record a fall. The 2025 census (taken on 1 October 2025, results published in September 2026 by the Statistics Bureau) counted:",
      {list:[
        "**122.97 million people**, 3.17 million (2.5%) fewer than in 2020, a faster fall than in the previous five years;",
        "**29.4% aged 65 or over**, a record high, and **10.9% under 15**, a record low;",
        "**57.18 million ordinary households**, more than in 2020, with an average of just 2.10 people each."
      ]},
      {fig:'<svg viewBox="0 0 340 214"><text x="10" y="22">Population by age, 2025 census</text><text class="s" x="10" y="58">Under 15</text><rect class="d-sage" x="90" y="42" width="33" height="26" rx="3" stroke-width="1.5"/><text x="130" y="60">10.9%</text><text class="s" x="10" y="104">15 to 64</text><rect class="d-lup" x="90" y="88" width="179" height="26" rx="3" stroke-width="1.5"/><text x="276" y="106">59.7%</text><text class="s" x="10" y="150">65 and over</text><rect class="d-gold" x="90" y="134" width="88" height="26" rx="3" stroke-width="1.5"/><text x="185" y="152">29.4%</text><text class="s" x="10" y="196">Source: Statistics Bureau of Japan, 2025 census.</text></svg>', alt:"A bar chart of Japan’s population by age in the 2025 census: under 15, 10.9 per cent; 15 to 64, 59.7 per cent; 65 and over, 29.4 per cent.", cap:"Bar lengths are drawn to scale. The middle figure is 100 minus the other two."},
      "Two forces drive this. People live very long lives, and far fewer children are born. In 2025, according to the Ministry of Health, Labour and Welfare’s final vital statistics (counting Japanese nationals in Japan), **671,270 babies** were born, the lowest on record, and the total [[fertility-rate|fertility rate]] fell to **1.14**. Deaths exceeded births by about 918,000. Scholars link low fertility to later marriage, the high costs of raising and educating children, long working hours, insecure jobs for young people and a gendered division of care work, rather than to any single cause.",
      "The National Institute of Population and Social Security Research projects (2023, medium variant) that the population will fall to about 87 million by 2070, with 38.7% aged 65 or over. Projections are not forecasts of fate: they depend on assumptions about births, deaths and migration.",
      "Policy has responded on many fronts: long-term care insurance (from 2000), pension reforms, raising the age at which people retire, a Children and Families Agency (from 2023), support for child-rearing, robots and digital tools for care, and more foreign workers. This is [[population-ageing]] and [[population-decline]] at a scale other countries are watching, which links to the [[demographic-transition]] you met in the sociology primer."
    ]},
    {h:"Gender: change and continuing gaps", body:[
      "Gender is a topic to handle with sources, not stereotypes. Start with the legal changes. The 1947 Constitution guarantees equality under the law (Article 14) and in marriage (Article 24). An Equal Employment Opportunity Act was passed in 1985, a Basic Act for a Gender-Equal Society in 1999, and a law requiring large employers to set targets for women’s advancement in 2015. In October 2025 Takaichi Sanae became Japan’s first woman prime minister.",
      "Then look at dated indicators. In the World Economic Forum’s *Global Gender Gap Report 2026*, Japan ranked 117th of 145 countries (up from 118th the year before), close to parity on education and health but low on economic participation (119th) and political empowerment (121st). Composite indexes like this have critics, so quote the year and look at the parts, not just the rank.",
      "How do scholars explain the gaps? Mary Brinton’s *Women and the Economic Miracle* (1993) traced how firms, schools and families channelled women into short careers. Others point to an employment system built around a male breadwinner with long hours and job rotation, the tax and pension treatment of second earners, and childcare shortages. Women’s employment has risen strongly since the 2000s, though much of the increase has been in non-regular jobs.",
      "Some debates are live and divided. One is whether married couples should be allowed to keep separate surnames: the Civil Code requires one shared surname, the Supreme Court upheld this in 2015 and 2021 while saying the matter is for the Diet, and political parties disagree. Describe such debates by who argues what."
    ]},
    {h:"Foreign residents and the immigration debate", body:[
      "Japan is often described as closed to immigration. The numbers tell a more complicated story. According to the Immigration Services Agency, Japan had **4,281,026 foreign residents at the end of June 2026**, a record, 3.8% more than at the end of 2025. The largest groups by nationality were from China, Vietnam, South Korea, the Philippines and Nepal. The largest residence statuses were permanent resident, “Engineer/Specialist in Humanities/International Services”, student, Technical Intern Training and Specified Skilled Worker.",
      {tip:"Two official counts exist. The census counted 3.84 million foreign residents on 1 October 2025; the Immigration Services Agency counts holders of residence statuses (4.28 million in June 2026). They measure slightly different things on different dates, so always say which one you use."},
      "Several layers built this population:",
      {list:[
        "**Long-settled communities.** Koreans and Taiwanese who came during the empire, and their descendants, lost Japanese nationality in 1952. Many hold [[special-permanent-resident|special permanent residence]], a status created in 1991.",
        "**People of Japanese descent.** A 1990 change to immigration law opened a “long-term resident” status that brought many [[nikkeijin|Nikkeijin]] from Brazil and Peru.",
        "**“Trainees” who work.** The [[technical-intern-training|Technical Intern Training Program]] (from 1993) officially transfers skills to developing countries, but in practice supplies labour. Labour-rights groups and UN human-rights bodies have criticised debts to brokers, limits on changing employers and abuses. A new [[ikusei-shuro|Employment for Skill Development]] system ([育成就労]{いくせいしゅうろう}), enacted in 2024, is due to replace it from 1 April 2027.",
        "**Open labour routes.** The [[specified-skilled-worker|Specified Skilled Worker]] status ([特定技能]{とくていぎのう}), from April 2019, admits workers in set sectors (16 as of April 2026; the cabinet approved three more in January 2026), and its second level allows family members and renewable stays."
      ]},
      "The debate, told neutrally: governments have said they are not adopting a so-called “immigration policy”, while widening work-based entry. Supporters of more openness point to labour shortages in care, farming, construction and services, and to an ageing society. Sceptics worry about wages, social cohesion and public services, and some favour automation and higher participation by women and older people instead. Scholars ask whether Japan is becoming a country of immigration in practice, whatever the label, and study local “multicultural coexistence” ([多文化共生]{たぶんかきょうせい}) policies. The Migration Studies primer gives the tools: [[labour-migration]], [[guest-worker]] programmes and models of [[integration]] ({{integration-models}}).",
      {terms:["developmental-state","keiretsu","bubble-economy","plaza-accord","lost-decades","abenomics","population-ageing","population-decline","special-permanent-resident","nikkeijin","technical-intern-training","ikusei-shuro","specified-skilled-worker"]}
    ]}
   ],
   try:[
    {id:"e4u4-l4-x1", type:"sort", q:"Which explanation of the postwar “miracle” does each piece of evidence mainly support?", buckets:["State-led (developmental state)","Markets and the world economy"], items:[
      {t:"MITI used licences and access to foreign currency to steer investment into steel and machinery.", b:0, why:"State steering of investment is the core of Johnson’s argument."},
      {t:"Households saved a large share of their income, giving banks money to lend.", b:1, why:"High saving is a market-and-catch-up explanation, not state direction."},
      {t:"The yen was fixed at 360 to the dollar until 1971, keeping exports cheap.", b:1, why:"A favourable international condition, set within the Bretton Woods system."},
      {t:"Officials used “administrative guidance” to coordinate firms in an industry.", b:0, why:"Informal direction by bureaucrats supports the developmental-state view."},
      {t:"The US market stayed open to Japanese goods during the Cold War.", b:1, why:"A feature of the world economy and US alliance policy, not Japanese state guidance."},
      {t:"Some successful firms, such as a motorcycle maker that entered the car market, grew against official advice.", b:1, why:"Evidence critics use: entrepreneurs and markets, not MITI, explain part of the success."}
    ]},
    {id:"e4u4-l4-x2", type:"order", q:"Put these economic moments in time order, earliest first.", items:[
      {t:"The Income-Doubling Plan is announced", why:"1960, under Prime Minister Ikeda."},
      {t:"The first oil shock ends the high-growth era", why:"1973."},
      {t:"The Plaza Accord pushes the dollar down and the yen up", why:"September 1985."},
      {t:"The Nikkei 225 reaches its bubble-era peak", why:"29 December 1989."},
      {t:"Several large financial firms fail in a banking crisis", why:"1997–98."},
      {t:"The Nikkei passes its 1989 peak for the first time", why:"February 2024."}
    ]},
    {id:"e4u4-l4-x3", type:"number", q:"The 2025 census counted 3.84 million foreign residents in a total population of 122.97 million. What percentage of the population were foreign residents? Round to one decimal place.", answer:3.1, tol:0.1, unit:"%", why:"3.84 ÷ 122.97 = 0.0312…, so about 3.1%. That is a small share by the standards of many rich countries, but it is growing fast.", wrongs:[{v:31.2, tol:0.3, why:"You moved the decimal point one place too far. 3.84 ÷ 122.97 is about 0.031, which is 3.1%."},{v:0.03, tol:0.01, why:"That is the fraction. Multiply by 100 to turn it into a percentage."},{v:3.5, tol:0.1, why:"That uses the Immigration Services Agency’s 4.28 million (June 2026) instead of the census figure. Use the two figures from the same source and date."}]},
    {id:"e4u4-l4-x4", type:"number", q:"The census counted 3.84 million foreign residents in 2025, an increase of 1.094 million since 2020. By what percentage did the number grow? Round to one decimal place.", answer:39.8, tol:0.2, unit:"%", why:"The 2020 figure was 3.84 − 1.094 = 2.746 million. Growth = 1.094 ÷ 2.746 = 0.398…, so about 39.8%. Percentage change is always measured against the starting value.", wrongs:[{v:28.5, tol:0.3, why:"You divided the increase by the 2025 figure (1.094 ÷ 3.84). Percentage change divides by the starting (2020) value."},{v:139.8, tol:0.3, why:"That is the 2025 figure as a percentage of the 2020 one. The increase is 139.8 − 100 = 39.8%."}]},
    {id:"e4u4-l4-x5", type:"mcq", q:"A headline says: “Japan’s fertility rate of 1.14 means each woman has 1.14 children.” What is the most accurate correction?", options:[
      {t:"The total fertility rate is the average number of children a woman would have over her life if she experienced this year’s age-specific birth rates. It is a summary of one year, not a count of actual families.", ok:true, why:"Right. It is a synthetic, period measure. Actual completed family sizes of older generations are higher."},
      {t:"It means 1.14% of women gave birth that year.", why:"The TFR is not a percentage of women. It is an average number of children per woman over a lifetime, under one year’s rates."},
      {t:"It counts births to all residents, including foreign nationals.", why:"The figure reported (1.14 for 2025) is from vital statistics on Japanese nationals in Japan. In any case, this does not fix the misreading in the headline."},
      {t:"The headline is exactly right; nothing needs correcting.", why:"The headline treats a one-year summary measure as a count of real families, which is misleading."}
    ]},
    {id:"e4u4-l4-x6", type:"match", q:"Match each residence route to its description.", pairs:[
      ["Special permanent resident","Mainly people from the former colonies and their descendants, a status created in 1991","These long-settled communities lost Japanese nationality in 1952."],
      ["Long-term resident (used by many Nikkeijin)","Opened in 1990 to people of Japanese descent, many from Brazil and Peru","A change to immigration law that took effect in 1990."],
      ["Technical Intern Training","Officially skills transfer; criticised as a labour route with weak protections","Due to be replaced by Employment for Skill Development from April 2027."],
      ["Specified Skilled Worker","A work status from April 2019 for set sectors with labour shortages","Its second level allows renewable stays and family members."]
    ]},
    {id:"e4u4-l4-x7", type:"spot", q:"Tap each sentence in this blog paragraph that is **inaccurate or unsupported**.", ask:"inaccurate or unsupported", parts:[
      {t:"The 2025 census counted about 123 million people.", flag:false, why:"Accurate: 122.97 million."},
      " ",
      {t:"Japan has almost no foreign residents.", flag:true, why:"Inaccurate. The Immigration Services Agency counted 4.28 million in June 2026, a record."},
      " ",
      {t:"Births in 2025 were the lowest on record.", flag:false, why:"Accurate: 671,270, the lowest on record."},
      " ",
      {t:"Women in Japan have fewer children because they don’t want families.", flag:true, why:"Unsupported. Research links low fertility to later marriage, costs, working hours, job insecurity and care burdens. Surveys do not show a general rejection of families."},
      " ",
      {t:"In the WEF’s 2026 Global Gender Gap Report, Japan ranked 117th of 145.", flag:false, why:"Accurate, with the year and source given."},
      " ",
      {t:"Japan’s government has officially adopted an immigration policy.", flag:true, why:"Inaccurate. Governments have said they are not adopting a so-called immigration policy, while widening work-based entry."}
    ]},
    {id:"e4u4-l4-x8", type:"mcq", q:"Which statement about the “lost decades” is the most defensible in a seminar?", options:[
      {t:"Growth was weak for years after 1990, but the label is debated: measures per working-age person look better, while wages and job security look worse.", ok:true, why:"Right. Good analysis says which measure it uses."},
      {t:"Japan became a poor country after 1990.", why:"Japan stayed a rich country with low unemployment and long life expectancy."},
      {t:"Nothing at all changed in the Japanese economy after 1990.", why:"There were major reforms, banking clean-ups, Abenomics and the end of negative interest rates in 2024."},
      {t:"The lost decades were caused by Japanese culture.", why:"A cultural explanation without evidence. Economists point to the bubble’s collapse, bad loans, deflation and demographics."}
    ]}
   ],
   apply:{
    intro:"Work with official numbers. Always note the source and the date next to every figure you copy.",
    tasks:[
     {t:"Build a mini fact sheet", how:[
       "Open the Statistical Handbook of Japan (Statistics Bureau, free in English).",
       "Copy four figures from Chapter 2 “Population” and two from Chapter 12 “Labour”, each with its year.",
       "Write one sentence for each that explains what it shows, without exaggerating."
     ], write:"Figure – year – source – what it shows…"},
     {t:"Compare two counts of foreign residents", how:[
       "Find the latest Immigration Services Agency press release on the number of foreign residents (search “在留外国人数” or “number of foreign residents Immigration Services Agency”).",
       "Compare it with the 2025 census figure of 3.84 million.",
       "Explain in two sentences why the two numbers differ."
     ], write:"ISA figure and date… Census figure and date… Why they differ…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the developmental-state model still useful for explaining Japan, or only for its past?",
       "2. Is Japan becoming a country of immigration, whatever its governments call their policy?",
       "3. Which matters more for Japan’s future: raising the birth rate, admitting more migrants, or raising productivity? What evidence would you need?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A short fact sheet with six dated, sourced figures, a comparison of the two foreign-resident counts, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"sbj", where:"Chapter 2 “Population”, Chapter 3 “Economy” and Chapter 12 “Labour”", note:"Official figures with short explanations. Check the edition year: numbers are updated every year."},
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"For the wider IPE debates (state and market) that the developmental-state argument belongs to."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u4-l5", title:"Japan in the world", minutes:55,
   hook:{q:"In 1989 one country overtook the United States as the world’s largest giver of official development assistance (aid). Which?", options:["Germany","Japan","France","Saudi Arabia"], answer:1, reveal:"**Japan.** In 1989 Japan’s net aid reached about US$9 billion, passing the United States, and it stayed the top donor by volume for most of the 1990s, according to Japan’s Ministry of Foreign Affairs. A country that had itself borrowed from the World Bank to build its first bullet-train line had become the world’s biggest donor in a generation. Aid, trade and an alliance, rather than military power, defined Japan’s postwar role. This lesson asks why, and how that is changing."},
   goals:[
     "Explain the Yoshida Doctrine and the debate over whether it was a grand strategy",
     "Describe how the US–Japan alliance works, its asymmetries and the main changes since 1990",
     "Trace Japan’s aid from war reparations to the Development Cooperation Charter, and explain the Fukuda Doctrine",
     "Explain how scholars discuss Japan’s soft power and public diplomacy, and their limits",
     "Describe Japan’s relations with its neighbours, including history issues and territorial disputes, neutrally",
     "Analyse a Japanese foreign-policy choice through realist, liberal and constructivist lenses"
   ],
   learn:[
    {h:"The Yoshida Doctrine", body:[
      {lead:"Picture a country that has just lost a war, is occupied, and has a constitution renouncing war. It needs security, food and jobs. What would you do?"},
      "Yoshida Shigeru, prime minister for most of 1946–54, gave an answer that shaped Japan for decades. Rely on the United States for security; keep Japan’s own forces light; put the nation’s energy into economic recovery. Later writers named this the [[yoshida-doctrine|Yoshida Doctrine]] ([吉田]{よしだ}ドクトリン); Yoshida himself never used the label.",
      {fig:'<svg viewBox="0 0 340 330"><polygon class="d-panel" points="170,30 30,250 310,250" stroke-width="2"/><rect class="d-lup" x="95" y="8" width="150" height="48" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">US alliance</text><text class="s" x="170" y="47" text-anchor="middle">security from 1951</text><rect class="d-gold" x="8" y="228" width="140" height="56" rx="8" stroke-width="2"/><text x="78" y="252" text-anchor="middle">Light arms</text><text class="s" x="78" y="270" text-anchor="middle">SDF; Article 9</text><rect class="d-sage" x="192" y="228" width="140" height="56" rx="8" stroke-width="2"/><text x="262" y="252" text-anchor="middle">Economy first</text><text class="s" x="262" y="270" text-anchor="middle">trade, growth, aid</text><text x="170" y="170" text-anchor="middle">Yoshida</text><text x="170" y="188" text-anchor="middle">Doctrine</text><text class="s" x="170" y="316" text-anchor="middle">Since the 1990s, the “light arms” corner has shifted most.</text></svg>', alt:"A triangle with the words Yoshida Doctrine in the middle. At the top corner, the US alliance, providing security from 1951. At the bottom left, light arms: the Self-Defense Forces and Article 9. At the bottom right, economy first: trade, growth and aid. A note says that since the 1990s the light-arms corner has shifted most.", cap:"The three corners of the Yoshida Doctrine. Scholars debate how deliberate the design was."},
      "Was it a clever grand strategy or a set of constraints made into a virtue? Kenneth Pyle (*Japan Rising*, 2007) and Richard Samuels (*Securing Japan*, 2007) read it as a pragmatic strategy: let the United States pay for much of Japan’s defence while Japan grew rich. Others stress the limits: Article 9, a public deeply opposed to rearmament after the war, and US pressure. Kent Calder (1988) went further and called Japan a “reactive state” whose foreign economic policy mostly responded to outside pressure ([外圧]{がいあつ}, *gaiatsu*). Hanns Maull (1990) described Japan and West Germany as new “civilian powers” that pursued influence through trade and institutions rather than force.",
      "This is a good place to use the IR theories from the primer: [[realism]] reads the doctrine as rational free-riding under a US security umbrella; [[liberalism-ir|liberalism]] stresses trade and institutions; [[constructivism]] points to antimilitarist norms. Peter Katzenstein (*Cultural Norms and National Security*, 1996) and Thomas Berger (*Cultures of Antimilitarism*, 1998) argued that such norms, built after defeat, shaped Japanese security policy as much as material power did."
    ]},
    {h:"The US–Japan alliance", body:[
      "The first [[us-japan-security-treaty|security treaty]] was signed on 8 September 1951, the same day as the peace treaty. It was replaced by the Treaty of Mutual Cooperation and Security, signed in January 1960 and ratified that summer amid the largest protests in postwar Japanese history. Two articles carry the deal:",
      {list:[
        "**Article 5:** each side will act to meet an armed attack against territories under Japan’s administration.",
        "**Article 6:** the United States may use bases in Japan for Japan’s security and for peace and security in the “Far East”."
      ]},
      "So the alliance is **asymmetric**: the United States promises to defend Japan, and Japan provides bases rather than a promise to defend the United States. Okinawa carries much of the burden: around 70% of the land used by facilities reserved for US forces in Japan is in Okinawa Prefecture, according to Japan’s Ministry of Defense, a long-running source of local opposition.",
      "Since the end of the Cold War the alliance has deepened:",
      {table:[["Year","Change"],["1992","A peacekeeping law lets the SDF join UN operations, first in Cambodia"],["1997","Revised defence cooperation guidelines (first set 1978; revised again 2015)"],["2014–15","Cabinet reinterpretation and security laws allow limited collective self-defence"],["2022","A new National Security Strategy plans “counterstrike capabilities” and much higher defence spending"]]},
      "Alliance scholars describe a double fear, following Glenn Snyder (1984): **abandonment** (the ally won’t help when needed) and **entrapment** (being dragged into the ally’s wars). Japanese debates swing between the two. Note the neutral vocabulary: supporters call recent changes “normalisation”; critics call them a hollowing-out of Article 9."
    ]},
    {h:"Aid, Asia and the Fukuda Doctrine", body:[
      "Japan’s aid began in the shadow of war. In 1954 it joined the Colombo Plan, a scheme for cooperation in Asia, and under agreements signed from 1954 to 1959 it paid war reparations to Burma, the Philippines, Indonesia and South Vietnam. Reparations and early [[official-development-assistance|official development assistance]] (ODA) often came as Japanese goods and services, which also opened markets for Japanese firms.",
      "In August 1977 Prime Minister Fukuda Takeo set out in Manila what became the [[fukuda-doctrine|Fukuda Doctrine]] for Southeast Asia, three principles:",
      {ol:[
        "Japan rejects the role of a military power.",
        "Japan will build relations of mutual confidence and trust, “heart-to-heart” understanding, with Southeast Asian countries.",
        "Japan will be an equal partner of [[asean|ASEAN]] and its members, and help build peace and prosperity across Southeast Asia."
      ]},
      "Aid then grew fast, with a strong Asian focus and many loans for roads, ports and power plants. Japan became the largest donor by volume in 1989 and stayed near the top through the 1990s. An ODA Charter (1992, revised 2003) set principles, adding [[human-security|human security]] in 2003; a [[development-cooperation-charter|Development Cooperation Charter]] replaced it in 2015 and was revised in 2023.",
      "Debates: critics in the 1980s said Japanese aid was too commercial and “tied” to Japanese contractors; defenders pointed to its focus on infrastructure and on the “self-help” of recipient countries. Some scholars see parallels with China’s later infrastructure lending, and others stress the differences."
    ]},
    {h:"Soft power and public diplomacy, in brief", body:[
      "A reminder from the IR primer: [[soft-power|soft power]] is Joseph Nye’s term (1990) for getting what you want through attraction rather than coercion or payment ({{joseph-nye}}). [[public-diplomacy|Public diplomacy]] is a government’s effort to communicate with foreign publics, not only with their governments.",
      "Japan is a frequent case. The Japan Foundation, set up in 1972, promotes language teaching, arts and exchanges. In 2002 the journalist Douglas McGray wrote of Japan’s “gross national cool”, and from about 2010 the government promoted creative industries abroad under the banner of [[cool-japan|Cool Japan]].",
      "Scholars are cautious. Iwabuchi Kōichi (*Recentering Globalization*, 2002) noted that many Japanese cultural exports succeeded partly because they seemed “culturally odourless”, not obviously Japanese, which complicates the idea that they spread a national image. Popularity of anime does not translate easily into political influence, and in neighbouring countries memories of the war limit Japan’s appeal. Pass B of this track goes deeper into culture, media and public diplomacy."
    ]},
    {h:"Neighbours, told neutrally", body:[
      "Japan restored relations with its neighbours step by step: a Joint Declaration with the Soviet Union in 1956 (still no peace treaty with Russia), a Treaty on Basic Relations with South Korea in 1965, and relations with the People’s Republic of China in 1972, followed by a Treaty of Peace and Friendship in 1978. Japan has no diplomatic relations with North Korea; a 2002 summit in Pyongyang led North Korea to admit abducting Japanese citizens, which remains a central issue for Japan.",
      "**History issues** ([歴史問題]{れきしもんだい}) are disputes over how the colonial and wartime past is remembered and acknowledged: textbooks, apologies, compensation and memorials. Japanese governments have issued statements of remorse and apology, notably the Kōno Statement (1993) on “comfort women” and the Murayama Statement (1995). In December 2015 Japan and South Korea announced an agreement on the comfort-women issue; the next South Korean government, under Moon Jae-in, judged it flawed in a 2017 review, while Japan’s government holds that it should be implemented. Visits by politicians to Yasukuni Shrine, which honours Japan’s war dead and since 1978 has also enshrined 14 men tried as Class A war criminals by the Tokyo tribunal (12 convicted, 2 who died before the verdict), draw protests from China and South Korea; supporters say the visits honour the dead and are a domestic matter. Your job in a seminar is to say who holds which view, and what historians have established.",
      {table:[["Islands","Who administers them","The disagreement"],["Northern Territories (Japan’s name) / Southern Kurils (Russia’s name)","The Soviet Union from 1945, then Russia","Japan claims four islands; Russia says they are its territory as a result of the Second World War"],["Takeshima (Japan) / Dokdo (South Korea)","South Korea","Japan claims them and has proposed taking the question to the International Court of Justice; South Korea says they are its territory and there is no dispute to adjudicate"],["Senkaku Islands (Japan) / Diaoyu (China) / Diaoyutai (Taiwan)","Japan","China and Taiwan claim them; Japan’s government says no territorial dispute exists"]]},
      {warn:"Use both or all names on first mention, say who administers the territory, and attribute every claim to the government that makes it. Don’t write as if one side’s position were simple fact."},
      "Japan also pursues regional and global strategies. Prime Minister Abe announced the idea of a [[free-and-open-indo-pacific|Free and Open Indo-Pacific]] in 2016; after the United States left the Trans-Pacific Partnership in 2017, Japan led the remaining members to sign the CPTPP in 2018. Realists read these as balancing a rising China; liberals stress rules and trade; constructivists stress Japan’s identity as a “maritime democracy”. A good seminar answer weighs all three.",
      {terms:["yoshida-doctrine","us-japan-security-treaty","collective-self-defence","fukuda-doctrine","development-cooperation-charter","public-diplomacy","cool-japan","history-problem","free-and-open-indo-pacific"]}
    ]}
   ],
   try:[
    {id:"e4u4-l5-x1", type:"mcq", q:"Which statement best describes the Yoshida Doctrine?", options:[
      {t:"Rely on the US alliance for security, keep Japan’s own forces light, and focus on economic recovery and growth.", ok:true, why:"Correct: the three corners of the doctrine. The label came later; Yoshida did not use it."},
      {t:"Build a large independent military so Japan never depends on any ally.", why:"That is the opposite of Yoshida’s approach, which accepted dependence on the United States."},
      {t:"Stay neutral between the United States and the Soviet Union.", why:"Neutrality was the Socialist Party’s position. Yoshida chose the US alliance."},
      {t:"Use aid to Southeast Asia as the main tool of security policy.", why:"That is closer to the later Fukuda Doctrine (1977). Yoshida’s focus was the alliance and domestic recovery."}
    ]},
    {id:"e4u4-l5-x2", type:"sort", q:"Which IR lens would most naturally make each argument about Japan?", buckets:["Realism","Liberalism","Constructivism"], items:[
      {t:"Japan free-rode on US protection while it grew rich.", b:0, why:"A realist reading: rational use of a stronger ally’s power."},
      {t:"Antimilitarist norms built after 1945 limited Japan’s security choices.", b:2, why:"Katzenstein and Berger’s constructivist argument about norms and identity."},
      {t:"Japan used trade agreements such as the CPTPP to lock in rules that reduce conflict.", b:1, why:"A liberal reading: institutions and interdependence."},
      {t:"Japan’s defence build-up since 2022 balances a rising China.", b:0, why:"Balancing against a stronger neighbour is classic realism."},
      {t:"Calling Japan a “maritime democracy” shapes which partners it chooses.", b:2, why:"Identity shaping interests is a constructivist argument."},
      {t:"Aid and investment create shared interests in peace across Southeast Asia.", b:1, why:"A liberal argument about interdependence."}
    ]},
    {id:"e4u4-l5-x3", type:"order", q:"Put these steps in Japan’s security relationship with the United States in time order.", items:[
      {t:"The first US–Japan security treaty is signed", why:"8 September 1951, the same day as the San Francisco Peace Treaty."},
      {t:"The revised Treaty of Mutual Cooperation and Security is signed", why:"January 1960, amid mass protests."},
      {t:"Okinawa returns to Japanese administration, with US bases remaining", why:"15 May 1972."},
      {t:"A peacekeeping law lets the SDF join UN operations", why:"1992, first in Cambodia."},
      {t:"Security laws allow limited collective self-defence", why:"2015, after a 2014 cabinet reinterpretation."},
      {t:"A National Security Strategy plans counterstrike capabilities", why:"December 2022."}
    ]},
    {id:"e4u4-l5-x4", type:"mcq", q:"Which was one of the three principles of the Fukuda Doctrine (1977)?", options:[
      {t:"Japan rejects the role of a military power.", ok:true, why:"Correct. The others were “heart-to-heart” trust with Southeast Asia and equal partnership with ASEAN."},
      {t:"Japan will station troops in Southeast Asia to keep the peace.", why:"The doctrine said the opposite: Japan rejects a military role."},
      {t:"Japan will give aid only to countries that adopt market reforms.", why:"Conditional market reforms are associated with the IMF and World Bank in the 1980s, not the Fukuda Doctrine."},
      {t:"Japan will leave ASEAN affairs to the United States.", why:"The doctrine promised Japan would be an equal partner of ASEAN."}
    ]},
    {id:"e4u4-l5-x5", type:"mcq", q:"Hana fears that if a crisis hits, the United States might not defend Japan. Her colleague fears that Japan might be pulled into a US war it does not want. Which pair of concepts names their fears?", options:[
      {t:"Abandonment (Hana) and entrapment (her colleague).", ok:true, why:"Right. Glenn Snyder’s alliance security dilemma: allies fear both being left alone and being dragged in."},
      {t:"Entrapment (Hana) and abandonment (her colleague).", why:"Reversed: abandonment is the fear of not being helped; entrapment is the fear of being dragged in."},
      {t:"Balancing (Hana) and bandwagoning (her colleague).", why:"Those describe how states respond to power, not fears inside an alliance."},
      {t:"Soft power (Hana) and hard power (her colleague).", why:"Those are kinds of power, not alliance fears."}
    ]},
    {id:"e4u4-l5-x6", type:"spot", q:"Tap each phrase in this draft paragraph that is **not neutral or not accurate**.", ask:"not neutral or not accurate", parts:[
      {t:"The islands Japan calls the Northern Territories and Russia calls the Southern Kurils have been administered by the Soviet Union and then Russia since 1945.", flag:false, why:"Neutral and accurate: both names, and who administers them."},
      " ",
      {t:"Takeshima is obviously Japanese, whatever South Korea claims.", flag:true, why:"Not neutral. It takes one government’s position as fact. Use both names and attribute each claim."},
      " ",
      {t:"China and Taiwan claim the Senkaku Islands, which Japan administers.", flag:false, why:"Neutral and accurate."},
      " ",
      {t:"Japan has never apologised for anything that happened in the war.", flag:true, why:"Inaccurate. Japanese governments issued statements of apology and remorse, including the Kōno (1993) and Murayama (1995) statements. Whether they were enough is a separate, debated question."},
      " ",
      {t:"Politicians’ visits to Yasukuni Shrine are criticised by China and South Korea and defended by supporters as honouring the dead.", flag:false, why:"Neutral: it attributes each view."}
    ]},
    {id:"e4u4-l5-x7", type:"match", q:"Match each idea to the scholar or writer associated with it.", pairs:[
      ["Japan as a “reactive state” responding to outside pressure","Kent Calder (1988)","His article on Japanese foreign economic policy."],
      ["Japan and West Germany as new “civilian powers”","Hanns Maull (1990)","A Foreign Affairs article on influence without military force."],
      ["Antimilitarist norms shaping security policy","Peter Katzenstein (1996)","A constructivist study of police and military in postwar Japan."],
      ["Japan’s “gross national cool”","Douglas McGray (2002)","A journalist’s phrase that fed the Cool Japan idea."],
      ["“Culturally odourless” exports","Iwabuchi Kōichi (2002)","A study of how Japanese popular culture travels in Asia."]
    ]}
   ],
   apply:{
    intro:"Read Japan’s foreign policy in primary sources and from more than one side.",
    tasks:[
     {t:"Read one chapter of the Diplomatic Bluebook", how:[
       "Open the Ministry of Foreign Affairs’ Diplomatic Bluebook (free in English) and choose one section in Chapter 2, on one region.",
       "Note three priorities Japan’s government states for that region.",
       "Find one news report or official statement from a country in that region about the same issue, and note where its framing differs."
     ], write:"Region… Japan’s three priorities… The other side’s framing… Where they differ…"},
     {t:"One choice, three lenses", how:[
       "Pick one recent Japanese foreign-policy decision (a defence budget, an aid project, a trade agreement, a summit).",
       "Write one sentence each explaining it through realism, liberalism and constructivism.",
       "Decide which explanation the evidence supports best, and what evidence would change your mind."
     ], write:"The decision… Realist reading… Liberal reading… Constructivist reading… Best supported, because…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is the Yoshida Doctrine over, or has it only been adjusted?",
       "2. Can soft power make up for unresolved history issues with neighbours?",
       "3. How should a researcher write about a territorial dispute so that readers in all the countries involved would find it fair?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes comparing Japan’s official priorities for one region with another country’s framing, a three-lens analysis of one decision, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"dbb", where:"Chapter 2 “Japan’s Foreign Policy by Region” (section 1 on the Free and Open Indo-Pacific, and the section on one region of your choice)", note:"Japan’s official view; read it as a primary source."},
    {book:"dbb", where:"Chapter 3, section 2 “Japan’s International Cooperation” (Development Cooperation)", note:"How the government presents its aid policy today."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong)", note:"Puts Japan’s choices in the wider context of IR thinking from Asia."}
   ]
  }
  ],
  checkpoint:["e4u4-q02","e4u4-q06","e4u4-q11","e4u4-q14","e4u4-q19","e4u4-q22","e4u4-q25","e4u4-q29","e4u4-q33","e4u4-q37","e4u4-q41","e4u4-q44"],
  codex:[
   {id:"area-studies", title:"Area studies and Japan studies", aka:["Japan studies","Japanese studies","Japanology","regional studies"], tags:["japan","area studies","research"],
    summary:"The interdisciplinary study of one world region or country, with deep knowledge of its language, history and society; Japan studies is one branch.",
    levels:{
     starter:[
      "**Area studies** is the study of one part of the world, such as East Asia, Latin America or one country, using many subjects at once: language, history, literature, politics, economics and society. Disciplines such as political science start from a kind of question and compare many places. Area studies starts from a place and goes deep.",
      "**Japan studies** ([日本研究]{にほんけんきゅう}) is the branch that focuses on Japan. Its scholars are expected to read Japanese sources and to know Japan’s history well. An older word, “Japanology”, now sounds dated because it suggests studying an exotic object rather than a society like any other.",
      {key:"Area studies trades breadth for depth. The best work combines both: a discipline’s questions with a region’s evidence."},
      "Why it matters for international studies: theories built in one part of the world may not fit another, and area knowledge lets you test them. If a theory predicts how a rich democracy or a US ally should behave, a Japan specialist can check whether Japan’s record fits, and explain why or why not."
     ],
     builder:[
      "Modern area studies grew out of the Second World War and the Cold War. Governments needed experts on enemies and allies: wartime language schools trained interpreters, Ruth Benedict wrote *The Chrysanthemum and the Sword* (1946) from US wartime research, and in the United States the National Defense Education Act of 1958 funded language and area centres under Title VI. Foundations paid for many more.",
      "In the 1950s and 1960s many Western scholars presented Japan as a model of non-communist modernisation. From the late 1960s critics, including the Committee of Concerned Asian Scholars, argued that area expertise often served state power. Bruce Cumings’s essay “Boundary Displacement” (1997) traced these links.",
      {table:[["Body","Founded","Note"],["Association for Asian Studies","1941","Began by publishing the *Far Eastern Quarterly*, now the *Journal of Asian Studies*"],["European Association for Japanese Studies","1973","Conference every three years, in Europe or Japan"],["British Association for Japanese Studies","1974","Its journal *Japan Forum* dates from 1989"]]},
      "Other key journals include the *Journal of Japanese Studies* (from 1974), *Monumenta Nipponica* (from 1938), the *Social Science Japan Journal* and the open-access *Asia-Pacific Journal: Japan Focus*.",
      "Area studies also grew outside the United States. Britain expanded university teaching of Asian languages after government reports during and after the war; Australia promoted “Asia literacy” in schools and universities from the 1970s and 1980s; and Japan built its own area studies ([地域研究]{ちいきけんきゅう}) of other regions. Inside Japan, research on Japan itself spans national literature ([国文学]{こくぶんがく}), Japanese history ([日本史]{にほんし}) and the social sciences, each with its own associations and journals."
     ],
     pro:[
      "Three debates run through the field. **Area versus discipline:** in the 1990s some political scientists argued that general theory and statistics should replace country expertise; Robert Bates’s “Area Studies and the Discipline: A Useful Controversy?” (1997) is a well-known statement. Defenders argue that theories built without local knowledge travel badly and that case knowledge is what tests theory.",
      "**Orientalism and essentialism:** after Said (1978), scholars asked how Western images of Japan served Western purposes, and how Japanese writers produced their own Orientalism about Asia (Stefan Tanaka, *Japan’s Orient*, 1993) and their own uniqueness theories ({{nihonjinron}}).",
      "**Position:** the insider–outsider debate rejects both “only natives understand” and “outsiders are objective”, and asks researchers to state their position and use Japanese-language scholarship. Today the field is more transnational: Japan in Asia, Japan in global comparison (ageing, energy, democracy), migration into Japan, and Japanese culture abroad. In international studies programmes, Japan is often both a region of expertise and a case for testing IR theory, a link to the {{global-ir}} agenda.",
      "Method: area specialists rely on language skills, archives, fieldwork and close reading, and increasingly on comparison, “Japan as a case of…” rather than “Japan as unique”. A good test for a thesis on Japan is to state what Japan is a case of (an ageing democracy, a US ally, an aid donor, a dominant-party system) and which wider literature the findings speak to."
     ]
    },
    related:["nihonjinron","ruth-benedict","postcolonialism-ir","global-ir","finding-japanese-research"],
    read:[{book:"eirt", where:"Chapter 16 “Asian Perspectives”"}],
    sources:[{t:"Association for Asian Studies: History", url:"https://www.asianstudies.org/catalog/history/"},{t:"European Association for Japanese Studies: About", url:"https://eajs.eu/about/"},{t:"British Association for Japanese Studies: BAJS History", url:"https://www.bajs.org.uk/?p=693"}],
    checked:"2026-11"},

   {id:"nihonjinron", title:"Nihonjinron (theories of Japanese uniqueness)", aka:["日本人論","theories of Japaneseness","Japanese uniqueness","myth of homogeneity"], tags:["japan","culture","nationalism"],
    summary:"A large, mostly popular body of writing claiming to explain what makes the Japanese unique, and the scholarly critique that treats it as ideology.",
    levels:{
     starter:[
      "[日本人論]{にほんじんろん} (*nihonjinron*, “discussions of the Japanese”) is the name for books and articles that claim to explain what makes Japanese people and society unique. Common claims: Japanese society is group-centred, built on vertical relationships, ethnically and culturally homogeneous, and shaped by a unique language or climate.",
      "The genre boomed from the 1960s to the 1980s, as people inside and outside Japan tried to explain its economic success. Scholars now treat these writings mostly as evidence of how Japan has been imagined, not as accurate descriptions.",
      {warn:"Every society has distinctive institutions. The problem is the leap from institutions to a fixed national character shared by everyone."},
      "Why study it at all? Because these ideas have been influential. They shaped management books in the 1980s, company and school training, and how Japan was presented abroad. Knowing the genre helps you recognise its claims when you meet them in news, business writing or even academic papers."
     ],
     builder:[
      "Two academic works are often read alongside the genre: Nakane Chie’s タテ[社会]{しゃかい}の[人間関係]{にんげんかんけい} (1967; English *Japanese Society*, 1970), on vertical ties within a frame such as a company, and Doi Takeo’s [甘]{あま}えの[構造]{こうぞう} (1971; English *The Anatomy of Dependence*, 1973), on *amae*, the wish to depend on another’s goodwill. Both are serious books; the problem lies in how they were generalised.",
      "Critiques from the 1980s on:",
      {list:[
        "Ross Mouer and Sugimoto Yoshio, *Images of Japanese Society* (1986): claims rested on a narrow slice of society, mainly male employees of large firms.",
        "Peter Dale, *The Myth of Japanese Uniqueness* (1986): the genre works as nationalist myth.",
        "Yoshino Kosaku, *Cultural Nationalism in Contemporary Japan* (1992): how business people and educators used the ideas.",
        "Befu Harumi, *Hegemony of Homogeneity* (2001): homogeneity as a dominant, state-supported ideology."
      ]},
      "The genre travelled beyond Japan. In the 1980s, when Japanese firms seemed unbeatable, Western business books borrowed its ideas to explain “Japanese management”, and Japanese companies and public bodies used them when presenting Japan abroad. Scholars therefore study nihonjinron as a transnational conversation, not only a Japanese one."
     ],
     pro:[
      "The strongest historical critique is Oguma Eiji’s [単一民族神話]{たんいつみんぞくしんわ}の[起源]{きげん} (1995; English *A Genealogy of “Japanese” Self-Images*, 2002). Oguma showed that imperial Japan often described itself as a mixed nation able to absorb colonised peoples; the myth of a “single-ethnic nation” became dominant only after 1945, when the empire was gone. Homogeneity is therefore a historical claim with a politics, not a natural fact.",
      "Diversity has always been present: the Ainu (recognised in law as an indigenous people in 2019), Okinawans, Zainichi Koreans, buraku communities and, increasingly, foreign residents (the 2025 census counted 3.84 million). Using nihonjinron as a source means asking who wrote it, for whom, and what it did: in management books, in education, in diplomacy.",
      "Scholars also note **self-Orientalism**: presenting Japan abroad in the exotic terms outsiders use. And they warn against the reverse error of denying any distinctiveness: Japan has particular institutions, such as its employment system, which can be compared without claims about a national character."
     ]
    },
    related:["area-studies","japan-population-change","japan-immigration-policy","postcolonialism-ir"],
    sources:[{t:"Statistics Bureau of Japan: 2025 Population Census basic results (in Japanese, 29 September 2026)", url:"https://www.stat.go.jp/info/mail/pdf/20260929_no1905.pdf"},{t:"Immigration Services Agency: foreign residents at end of June 2026 (in Japanese)", url:"https://www.moj.go.jp/isa/publications/press/13_00070.html"}],
    checked:"2026-11"},

   {id:"occupation-of-japan", title:"The Occupation of Japan (1945–1952)", aka:["Allied Occupation","SCAP","GHQ","reverse course"], tags:["japan","history"],
    summary:"The Allied, in practice American, occupation of Japan, which ruled indirectly through the Japanese government and carried out sweeping reforms before ending in 1952.",
    levels:{
     starter:[
      "After Japan surrendered in 1945, Allied forces occupied it until 28 April 1952. In practice the United States ran the Occupation under General Douglas MacArthur, the Supreme Commander for the Allied Powers (SCAP). His headquarters was often called GHQ.",
      "Unlike Germany, Japan kept its own government. GHQ gave orders and Japanese ministries carried them out. This is called **indirect rule**.",
      "The Occupation disarmed Japan, put wartime leaders on trial, gave women the vote, broke up big business groups, reformed land ownership and education, and oversaw a new constitution.",
      {key:"Defeat and Occupation remade Japan’s institutions, but through Japanese hands, so much of the old state, especially the bureaucracy, carried on."},
      "Much of today’s Japan dates from these years: the Constitution, the alliance with the United States, and many laws and institutions."
     ],
     builder:[
      {table:[["Reform","What changed"],["Demilitarisation","Armed forces disbanded; war-crimes trials in Tokyo, 1946–48"],["Political","Women vote (law of December 1945; first vote April 1946); new Constitution in force 3 May 1947"],["Economic","Land reform for tenant farmers; zaibatsu dissolved; unions legalised"],["Social","Education reorganised; civil code reformed"]]},
      "From about 1947–48, as the Cold War deepened, US priorities moved from reform to economic recovery and anti-communism: the **reverse course**. Some purged wartime figures returned, and the left was purged in turn. The Korean War (1950–53) brought US orders that boosted Japan’s economy.",
      "The San Francisco Peace Treaty (signed 8 September 1951, in force 28 April 1952) ended the Occupation; a US–Japan security treaty was signed the same day. Okinawa stayed under US administration until 15 May 1972.",
      "Key actors: SCAP and GHQ’s sections (its Government Section drafted the model constitution); the Far Eastern Commission in Washington and the Allied Council for Japan in Tokyo, which gave the other Allies a formal but limited voice; and Japanese governments under prime ministers such as Shidehara Kijūrō and Yoshida Shigeru, who negotiated, delayed or reshaped reforms."
     ],
     pro:[
      "Debates: Was the Occupation a break or a continuity? Reformers point to land reform and the Constitution; continuity scholars point to the bureaucracy, which survived almost intact and, in Chalmers Johnson’s account, steered postwar growth. The decision not to try the Emperor remains debated. John Dower’s *Embracing Defeat* (1999) shows how Japanese people adapted, resisted and reshaped reforms “from below”.",
      "The Occupation also shaped regional order: the peace treaty and security treaty were the core of the **San Francisco system** ([[san-francisco-system]]), and several neighbours (including the two Chinas and the two Koreas) were not parties to the treaty, which left questions of territory and history for later bilateral settlements ({{japan-and-neighbours}}).",
      "For research, the records of GHQ/SCAP are a rich archive; Japan’s National Diet Library holds many in copy, and its online exhibition “Birth of the Constitution of Japan” presents key documents.",
      "Comparison with Germany is a staple of seminars: both were occupied, demilitarised and given new constitutions, but Germany was divided and governed directly at first, while Japan was governed indirectly through a surviving state and kept its monarch. Scholars use the contrast to ask which outcomes came from the occupiers’ choices and which from each country’s existing institutions."
     ]
    },
    related:["constitution-of-japan","us-japan-alliance","japan-and-neighbours","asia-pacific-war"],
    sources:[{t:"National Diet Library: Birth of the Constitution of Japan", url:"https://www.ndl.go.jp/constitution/e/etc/c01.html"},{t:"Prime Minister’s Office of Japan: The Constitution of Japan", url:"https://japan.kantei.go.jp/constitution_and_government/the_constitution_of_japan.html"}],
    checked:"2026-11"},

   {id:"constitution-of-japan", title:"The Constitution of Japan and Article 9", aka:["1947 Constitution","Postwar Constitution","Peace Constitution","Article 9","日本国憲法"], tags:["japan","law","security"],
    summary:"Japan’s constitution since 3 May 1947: popular sovereignty, a symbolic emperor, guaranteed rights and Article 9’s renunciation of war; never amended as of November 2026.",
    levels:{
     starter:[
      "The [日本国憲法]{にほんこくけんぽう} (Constitution of Japan) was promulgated on 3 November 1946 and came into force on 3 May 1947. It replaced the Meiji Constitution of 1889.",
      "It says sovereignty belongs to the people. The Emperor becomes “the symbol of the State and of the unity of the People”, with no powers related to government. It guarantees rights such as equality under the law.",
      "Its most famous part is **Article 9**, in which “the Japanese people forever renounce war as a sovereign right of the nation” and say that armed forces “will never be maintained”. Yet Japan has the Self-Defense Forces. How the two fit together is one of the great debates of Japanese politics.",
      {tip:"As of November 2026 the Constitution has never been amended."},
      "It has 103 articles in 11 chapters, and it is short by international standards, which is one reason so much depends on interpretation."
     ],
     builder:[
      "**Drafting.** In February 1946 SCAP’s staff wrote a model draft after rejecting a cautious Japanese government draft. The government revised it and the Imperial Diet, elected with women voting, debated and amended it as a formal revision of the Meiji Constitution. Additions in the Diet include the right to “minimum standards of wholesome and cultured living” (Article 25).",
      "**Article 9 in practice.** Successive governments have held that Article 9 does not deny the right of self-defence, so the Self-Defense Forces (1954), limited to the minimum necessary, are not “war potential”. Many constitutional scholars disagree. Courts have mostly avoided direct rulings. In 2014 the cabinet reinterpreted the article to allow limited collective self-defence, followed by security laws in 2015.",
      "**Amendment** (Article 96) needs two-thirds of all members of each house to initiate, then a majority of votes cast in a national referendum. A National Referendum Act of 2007 set the procedure.",
      "Other features worth knowing: a long bill of rights (Chapter III, Articles 10–40), including freedom of religion and the separation of religion and state (Article 20), academic freedom (Article 23) and equality in marriage (Article 24); judicial review, with the Supreme Court as the final judge of constitutionality (Article 81); and local autonomy (Chapter VIII)."
     ],
     pro:[
      {table:[["Position","Argument"],["Revise","The text should match reality; a constitution drafted under occupation should be rewritten; the security environment has changed"],["Keep","Article 9 has helped keep Japan out of war; reinterpretation already stretches it"],["Middle","Add a clause recognising the SDF (as the LDP proposed in 2018) while keeping the renunciation of war; or set limits by law"]]},
      "Scholars dispute the “imposed constitution” story: SCAP drafted, but Japanese officials, Diet members and earlier private drafts shaped the result, and the Constitution has been sustained by Japanese voters and governments for decades. Public opinion is divided and sensitive to question wording, so cite dated polls by named pollsters.",
      "In IR terms, Article 9 is a classic case for constructivists (an antimilitarist norm), realists (a constraint that suited a protected ally) and liberal institutionalists (a commitment that reassured neighbours). It is also a case in comparative constitutional law of change by interpretation rather than amendment.",
      "Courts: the Supreme Court has rarely struck down laws. On security it has used a political-question approach: in the Sunakawa case (1959), about US bases, it declined to judge the security treaty’s constitutionality unless it was clearly unconstitutional. This judicial restraint is one reason interpretation has been left mainly to cabinets and their legal advisers."
     ]
    },
    related:["occupation-of-japan","japanese-political-system","yoshida-doctrine","us-japan-alliance"],
    sources:[{t:"Prime Minister’s Office of Japan: The Constitution of Japan (official translation)", url:"https://japan.kantei.go.jp/constitution_and_government/the_constitution_of_japan.html"},{t:"National Diet Library: Birth of the Constitution of Japan", url:"https://www.ndl.go.jp/constitution/e/etc/c01.html"}],
    checked:"2026-11"},

   {id:"japanese-political-system", title:"How Japan is governed", aka:["Japanese government","National Diet","Kantei","symbol emperor","local autonomy"], tags:["japan","politics"],
    summary:"A parliamentary democracy with a symbolic emperor: a two-house Diet, a cabinet led by a prime minister the Diet designates, a powerful bureaucracy and directly elected local governments.",
    levels:{
     starter:[
      "Japan is a **parliamentary democracy**. Voters aged 18 and over elect the National Diet ([国会]{こっかい}), which has two houses. The Diet chooses the prime minister, who forms a cabinet that runs the government and answers to the Diet.",
      "The Emperor is a symbol of the state and of the unity of the people. He performs formal acts, such as appointing the prime minister the Diet has chosen, only with the cabinet’s advice and approval, and has no powers related to government. The current Emperor, Naruhito, acceded in 2019.",
      "Local government has 47 prefectures and about 1,700 municipalities, each with an elected head and an elected assembly.",
      "The courts form the third branch, with a Supreme Court that can review whether laws are constitutional. Most laws that pass the Diet are bills submitted by the cabinet, drafted with the ministries, rather than bills from individual members."
     ],
     builder:[
      {table:[["House","Seats (as of November 2026)","Term"],["House of Representatives [衆議院]{しゅうぎいん}","465: 289 single-member districts, 176 proportional","4 years; can be dissolved"],["House of Councillors [参議院]{さんぎいん}","248: 148 prefectural districts, 100 proportional","6 years; half elected every 3 years"]]},
      "The lower house prevails on the choice of prime minister, the budget and treaties, and can override the upper house on ordinary laws with a two-thirds majority (Articles 59–61, 67). When the houses are controlled by different majorities, the result is a “twisted Diet”. A non-confidence vote in the lower house forces the cabinet to resign unless the house is dissolved within ten days (Article 69).",
      "Ministries are staffed by career officials. Debates about **amakudari** (officials retiring into firms they regulated) and **administrative guidance** are standard in seminars.",
      {ex:"As of November 2026: Prime Minister Takaichi Sanae (LDP), in office since October 2025; coalition of the LDP and the Japan Innovation Party. Proposals to cut the number of lower-house seats were under debate.", label:"Changeable facts"},
      "Elections: the House of Representatives is elected at least every four years, and often sooner after a dissolution; the House of Councillors has fixed elections every three years for half its seats. The voting age was lowered from 20 to 18 in 2016."
     ],
     pro:[
      "**Who governs?** Chalmers Johnson (1982) argued that bureaucrats ruled while politicians reigned; Ramseyer and Rosenbluth (1993) replied that LDP politicians were the principals; many describe an iron triangle of ruling-party specialists, ministries and industry.",
      "**Centralisation.** The 2001 reorganisation strengthened the Cabinet Office; the 2014 Cabinet Bureau of Personnel Affairs gave the prime minister’s office sway over senior appointments. Combined with the 1994 electoral reform, this enabled **Kantei-led** government under Koizumi and Abe; critics worried about politicised civil service appointments, defenders saw clearer accountability.",
      "**Local autonomy** (Articles 92–95) gives directly elected governors and mayors their own mandates, but local governments rely heavily on national transfers. Mergers cut municipalities from more than 3,200 in 1999 to about 1,700. Prefecture–national disputes, such as Okinawa’s over US bases, show the limits of local power on national security questions.",
      "Avoid calling the Emperor “head of state” without comment: the Constitution does not use the term and scholars disagree whether it fits.",
      "Comparative note: Japan’s system resembles the British Westminster model in fusing the executive and legislature, but its strong second chamber, frequent coalition government and powerful ministries make it a distinct case. Courts have rarely struck down laws, so constitutional questions are often settled by the Cabinet Legislation Bureau’s interpretations and by politics."
     ]
    },
    related:["ldp-dominance","constitution-of-japan","chalmers-johnson","bureaucracy"],
    read:[{book:"sbj", where:"Chapter 17 “Government System”"}],
    sources:[{t:"Prime Minister’s Office of Japan: The Constitution of Japan", url:"https://japan.kantei.go.jp/constitution_and_government/the_constitution_of_japan.html"},{t:"Kagawa Prefecture Election Commission: Diet constituencies and seat numbers (in Japanese)", url:"https://www.pref.kagawa.lg.jp/senkyoi/senkyoseido/senkyoku_teisu/kuni.html"},{t:"Statistics Bureau of Japan: Statistical Handbook of Japan", url:"https://www.stat.go.jp/english/data/handbook/index.html"}],
    checked:"2026-11"},

   {id:"ldp-dominance", title:"The LDP, the 1955 system and electoral reform", aka:["Liberal Democratic Party","1955 system","SNTV","1994 electoral reform","dominant party"], tags:["japan","politics","elections"],
    summary:"How the Liberal Democratic Party governed almost continuously from 1955, why the old electoral system mattered, and what the 1994 reform changed.",
    levels:{
     starter:[
      "The **Liberal Democratic Party** (LDP, [自由民主党]{じゆうみんしゅとう}) was formed in 1955 by merging two conservative parties. It governed without a break until 1993, with the Japan Socialist Party as the permanent main opposition. This pattern is called the **1955 system**.",
      "The LDP lost power in 1993–94 and again from 2009 to 2012, when the Democratic Party of Japan governed. It has led governments since December 2012, in coalition with Komeito from 1999 to October 2025 and with the Japan Innovation Party since October 2025, which supported the government from outside the cabinet until it took its first cabinet post in September 2026 (as of November 2026).",
      {key:"Japan has competitive elections. The puzzle scholars study is why one party won them for so long."},
      "Japan is one of several democracies where one party dominated for decades; comparing them is a classic topic in comparative politics."
     ],
     builder:[
      "Explanations of LDP dominance: credit for rapid growth; over-represented rural districts; spending directed to supporters’ districts; personal support groups ([後援会]{こうえんかい}, *kōenkai*); factions that worked like parties within the party; and a divided opposition.",
      "**The electoral system.** Until 1994 most lower-house members were elected in multi-member districts by the single non-transferable vote (SNTV): one vote per voter, three to five winners per district. To win a majority, the LDP had to run several candidates against each other, which rewarded personal networks and money, and fed scandals such as Lockheed (1976) and Recruit (1988–89).",
      "**The 1994 reform** introduced a parallel system (first used in 1996): single-member districts plus proportional lists, not linked to each other, with dual candidacy allowed. Public subsidies for parties and stricter funding rules came with it.",
      "Inside the party, the Policy Research Council ([政務調査会]{せいむちょうさかい}) and its divisions, where *zoku* specialists worked with ministries, were central to policy. The party president, chosen by Diet members and party members, becomes prime minister when the LDP leads the government, so leadership races can change the prime minister without a general election."
     ],
     pro:[
      "Effects are debated. Many scholars find more party-centred, leader-centred competition, a strengthened prime minister and, for a time, a more two-party pattern (the DPJ’s 2009 victory). Krauss and Pekkanen (*The Rise and Fall of Japan’s LDP*, 2011) show that kōenkai, factions and the party’s policy council adapted rather than vanished. Most LDP factions announced their dissolution in 2024 after a political-funds scandal.",
      "Comparative context: dominant-party democracies also include India under Congress (for decades after independence), Sweden under the Social Democrats and Mexico under the PRI (in a less competitive setting). Comparing them helps separate institutional from cultural explanations.",
      "Coalition partners and the opposition change often, so give any current line-up with a date and check it on official or reputable news sources.",
      "Komeito, backed by the lay Buddhist organisation Soka Gakkai, was the LDP’s partner in government from 1999 (in opposition with it in 2009–12) until it left the coalition in October 2025. Scholars argued that its organised vote helped LDP candidates in many single-member districts, which is one reason its departure was seen as significant."
     ]
    },
    related:["japanese-political-system","japan-economic-miracle"],
    read:[{book:"ospol", where:"Chapter 8 “Interest Groups, Political Parties, and Elections”"}],
    sources:[{t:"RTHK: Takaichi elected Japan’s 105th prime minister (18 February 2026)", url:"https://news.rthk.hk/rthk/en/component/k2/1844233-20260218.htm"},{t:"The Star (Bernama–Kyodo): Japan PM reshuffles cabinet as coalition ally gets post (18 September 2026)", url:"https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/18/japan-pm-reshuffles-cabinet-keeps-key-ministers-as-coalition-ally-gets-post"}],
    checked:"2026-11"},

   {id:"japan-economic-miracle", title:"Japan’s economic miracle, bubble and lost decades", aka:["high growth","高度経済成長","bubble economy","lost decade","Abenomics","developmental state (Japan)"], tags:["japan","economy","ipe"],
    summary:"Japan’s postwar high growth, the rival explanations of it (including the developmental state), the bubble of the late 1980s and the long slowdown after 1990.",
    levels:{
     starter:[
      "From the mid-1950s to 1973, Japan’s economy grew at roughly 9 per cent a year in real terms, a period called [高度経済成長]{こうどけいざいせいちょう} (high economic growth). By the late 1960s it was one of the largest economies in the world.",
      "In the late 1980s share and land prices soared in a **bubble**. When it burst after 1990, banks were left with bad loans and growth stayed weak for years: the “lost decade”, later the “lost decades”.",
      "Scholars still argue about what caused both the miracle and the slowdown.",
      "Economists and political scientists use Japan as a case for three big questions: how a country catches up with richer ones, why asset bubbles form, and what happens when growth stays low for a long time."
     ],
     builder:[
      {table:[["Explanation","Core idea"],["Developmental state","Elite ministries such as MITI guided investment (Chalmers Johnson, 1982)"],["Market and catch-up","High saving, education, imported technology, room to catch up"],["Favourable world","Open US market, fixed yen at 360 to the dollar until 1971, cheap oil"],["Institutions","Bank–firm groups (keiretsu), lifetime employment in large firms"]]},
      "Critics of the state-led story include Richard Samuels (“reciprocal consent” between state and business, 1987), David Friedman (flexible small firms, 1988) and the World Bank’s *The East Asian Miracle* (1993).",
      "Bubble timeline: Plaza Accord (September 1985), yen rises, low interest rates, Nikkei peak of 38,915.87 (29 December 1989), collapse from 1990, banking crisis 1997–98, zero interest rates by 1999, deflation. Abenomics from 2013; the Nikkei passed its 1989 peak in February 2024 and the Bank of Japan ended negative rates in March 2024.",
      "Two institutions often discussed: **keiretsu**, groups of firms linked by cross-shareholdings, long-term business ties and often a main bank; and the employment system of large firms (long-term employment, seniority-based pay, enterprise unions). Both have weakened since the 1990s but not disappeared, and they never covered the whole workforce."
     ],
     pro:[
      "The developmental-state idea travelled: scholars applied it to South Korea and Taiwan, and later debated its fit with China. Its critics question how far bureaucrats “picked winners” and stress firms’ and markets’ roles.",
      "On the lost decades, look at the measure. Total growth was weak; growth per working-age person looks better because the working-age population shrank; wages and job security look worse, with a rise in non-regular employment. Explanations include slow clean-up of bad loans, deflation and monetary policy, demographics, and weak productivity growth in services.",
      "In IPE seminars Japan is a key case for state–market debates, trade conflict with the United States in the 1980s (and the “revisionist” writers of that time) and the macroeconomics of ageing societies.",
      "Japan’s growth also mattered for IR. Its rise as an exporter in textiles, steel, cars and electronics led to trade disputes with the United States, voluntary export restraints and the US–Japan Structural Impediments Initiative talks (1989–90). These cases are standard material for studying how allies bargain over trade."
     ]
    },
    related:["chalmers-johnson","international-political-economy","japan-population-change","ldp-dominance"],
    read:[{book:"sbj", where:"Chapter 3 “Economy”"}],
    sources:[{t:"MOFA: Japan’s ODA White Paper 2014, Part I Chapter 1 (on World Bank loans to Japan)", url:"https://www.mofa.go.jp/policy/oda/white/2014/html/honbun/b1/s1_1.html"},{t:"Statistics Bureau of Japan: Statistical Handbook of Japan", url:"https://www.stat.go.jp/english/data/handbook/index.html"}],
    checked:"2026-11"},

   {id:"japan-population-change", title:"Japan’s ageing and shrinking population", aka:["少子高齢化","population decline","super-ageing","fertility in Japan"], tags:["japan","demography"],
    summary:"Japan’s population is falling and ageing fast: the 2025 census counted 122.97 million people, 29.4% aged 65 or over, with record-low births.",
    levels:{
     starter:[
      "Japan’s population peaked around 2008–2010 and is now falling. The 2025 census (1 October 2025) counted **122.97 million** people, 2.5% fewer than in 2020. **29.4%** were aged 65 or over (a record) and **10.9%** were under 15 (a record low).",
      "The Japanese phrase [少子高齢化]{しょうしこうれいか} (*shōshi kōreika*) names both trends: fewer children, more older people.",
      {key:"Two forces drive it: very long lives and very low fertility."},
      "In the 2025 census, people aged 65 and over outnumbered children under 15 by about 2.7 to one. Japan is not alone: South Korea, Italy, China and many other countries face similar trends, but Japan reached very high levels of ageing early, so other countries study its policies."
     ],
     builder:[
      "In 2025, the Ministry of Health, Labour and Welfare’s final vital statistics recorded **671,270 births** (a record low), a total fertility rate of **1.14** (a record low) and about 918,000 more deaths than births.",
      "The National Institute of Population and Social Security Research projects (2023, medium variant) a population of about 87 million in 2070, with 38.7% aged 65 or over. Projections depend on assumptions about births, deaths and migration.",
      "Research links low fertility to later and less marriage, the cost of children and education, long working hours, insecure jobs for young people and an unequal division of care work. Policy responses include long-term care insurance (2000), pension reforms, longer working lives, a Children and Families Agency (2023), child-rearing support, care technology and more foreign workers.",
      "Change is uneven. Rural areas and smaller cities age fastest, because many young people move to large cities, especially the Tokyo area, so national averages hide sharp regional differences."
     ],
     pro:[
      "Read figures carefully. The census counts everyone resident, Japanese and foreign; vital statistics on births usually count Japanese nationals; population estimates between censuses are revised after each census. Always give the source, the date and what is counted.",
      "Consequences debated in seminars: fiscal pressure on pensions and health care; labour shortages; rural depopulation and the merging of schools and municipalities; but also high labour participation of older people, automation and changing family forms. Some economists argue that per-person living standards can hold up despite shrinking numbers.",
      "Japan is a reference case for other fast-ageing societies, including South Korea, China, Italy and Thailand. It links to the {{demographic-transition}} and to migration debates ({{japan-immigration-policy}}).",
      "Policy debates are contested: some stress raising fertility (childcare, housing, working hours, support for young couples), others adapting to a smaller population (productivity, automation, compact cities, later retirement), and others immigration. Most governments have tried all three, and researchers evaluate each with dated evidence."
     ]
    },
    related:["demographic-transition","japan-immigration-policy","japan-economic-miracle"],
    read:[{book:"sbj", where:"Chapter 2 “Population”"}],
    sources:[{t:"Statistics Bureau of Japan: 2025 Population Census basic results (in Japanese, 29 September 2026)", url:"https://www.stat.go.jp/info/mail/pdf/20260929_no1905.pdf"},{t:"MHLW: 2025 Vital Statistics, final figures (in Japanese)", url:"https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/kakutei25/index.html"},{t:"MHLW pension council material on IPSS population projections (2023) (in Japanese)", url:"https://www.mhlw.go.jp/content/12601000/001093650.pdf"}],
    checked:"2026-11"},

   {id:"japan-immigration-policy", title:"Foreign residents and immigration policy in Japan", aka:["在留外国人","Specified Skilled Worker","Technical Intern Training","育成就労","Nikkeijin","special permanent residents"], tags:["japan","migration"],
    summary:"Japan had a record 4.28 million foreign residents in June 2026, admitted through layered routes; governments widen work-based entry while saying they are not adopting an “immigration policy”.",
    levels:{
     starter:[
      "Japan is often called closed to immigration, but its foreign-resident population is at a record high. The Immigration Services Agency counted **4,281,026** foreign residents at the end of June 2026. The 2025 census counted 3.84 million, about 3% of the population, up almost 40% from 2020.",
      "The largest groups by nationality: China, Vietnam, South Korea, the Philippines and Nepal (June 2026). The largest statuses: permanent resident, “Engineer/Specialist in Humanities/International Services”, student, Technical Intern Training and Specified Skilled Worker.",
      {tip:"Say which count you use: census (everyone resident on 1 October) or Immigration Services Agency (holders of residence statuses at a date)."},
      "Most foreign residents live in large urban areas and industrial regions, and some towns now have far higher shares than the national average, so the local picture can differ sharply from the national one."
     ],
     builder:[
      {table:[["Route","Since","Notes"],["Special permanent residents","1991","Mainly people from former colonies and their descendants, who lost Japanese nationality in 1952"],["Long-term residents (Nikkeijin)","1990","People of Japanese descent, many from Brazil and Peru"],["Technical Intern Training","1993","Officially skills transfer; criticised as a labour route"],["Specified Skilled Worker","April 2019","Work status for set sectors (16 as of April 2026)"],["Employment for Skill Development (育成就労)","1 April 2027","Enacted 2024 to replace Technical Intern Training"]]},
      "Technical Intern Training has been criticised by labour-rights groups and UN human-rights bodies for broker debts, limits on changing employers and abuses; a government expert panel recommended replacing it, leading to the 2024 law.",
      "Policy design matters as much as numbers: a points-based route for highly skilled professionals (since 2012), student routes that allow limited part-time work, and the rule that Specified Skilled Worker level 1 does not allow family members to join, while level 2 does. Ask, for any route, who may come, for how long, with whom, and whether it leads to permanent residence."
     ],
     pro:[
      "Positions in the debate: supporters of more openness cite labour shortages in care, farming, construction and services; sceptics cite wages, cohesion and public services and prefer automation and higher participation by women and older people. Governments have said they are not adopting a so-called immigration policy while widening work routes; many scholars argue Japan is becoming a country of immigration in practice.",
      "Integration is largely local: municipalities with many foreign residents developed “multicultural coexistence” ([多文化共生]{たぶんかきょうせい}) policies, supported by national plans since 2006. Naturalisation usually requires five years’ residence, and Japan expects people with two nationalities from birth to choose one ({{citizenship}}).",
      "Refugee recognition numbers are low by international standards; a 2023 revision of the immigration law changed deportation and repeated-application rules. Use dated official statistics for any figures. Theory links: guest-worker programmes, segmented labour markets and integration models from the Migration Studies primer ({{integration-models}})."
     ]
    },
    related:["japan-population-change","citizenship","integration-models","nihonjinron"],
    sources:[{t:"Immigration Services Agency: foreign residents at end of June 2026 (in Japanese)", url:"https://www.moj.go.jp/isa/publications/press/13_00070.html"},{t:"Kagawa Prefecture: foreign worker schemes, including 育成就労 and Specified Skilled Worker (in Japanese)", url:"https://www.pref.kagawa.lg.jp/rosei/koyo/taisaku/gaikokujin/gaikokujin_seido.html"},{t:"Statistics Bureau of Japan: 2025 Population Census basic results (in Japanese)", url:"https://www.stat.go.jp/info/mail/pdf/20260929_no1905.pdf"}],
    checked:"2026-11"},

   {id:"yoshida-doctrine", title:"The Yoshida Doctrine", aka:["吉田ドクトリン","Yoshida line","economics first","civilian power"], tags:["japan","foreign policy","security"],
    summary:"Japan’s postwar strategy of relying on the US alliance for security, keeping its own forces light and concentrating on economic growth.",
    levels:{
     starter:[
      "Yoshida Shigeru was Japan’s prime minister for most of 1946–54. His approach: let the United States guarantee Japan’s security, keep Japan’s own forces small, and focus on rebuilding the economy.",
      "Later writers called this the **Yoshida Doctrine**. Yoshida himself never used the name.",
      {key:"Alliance, light arms, economy first: three corners that defined Japan’s role for decades."},
      "Japan spent relatively little on defence for decades. A 1976 cabinet decision set a guideline of about 1% of GDP, which shaped budgets long after it was formally dropped in 1987.",
      "The doctrine is often credited with letting Japan grow rich, and blamed for leaving it dependent on the United States. Both views appear in seminars."
     ],
     builder:[
      "The doctrine rested on the San Francisco Peace Treaty and the US–Japan security treaty (both signed 8 September 1951), Article 9 of the Constitution and a public strongly opposed to rearmament after the war. The Self-Defense Forces, founded in 1954, stayed limited.",
      "Interpretations:",
      {list:[
        "**Grand strategy:** a deliberate, pragmatic choice to let the United States carry much of Japan’s defence (Kenneth Pyle, *Japan Rising*, 2007; Richard Samuels, *Securing Japan*, 2007).",
        "**Constraint:** a response to Article 9, domestic opinion and US pressure; Kent Calder (1988) called Japan a “reactive state”.",
        "**Identity:** antimilitarist norms built after defeat (Katzenstein, 1996; Berger, 1998); Hanns Maull (1990) called Japan a “civilian power”."
      ]},
      "Related principles: the Three Non-Nuclear Principles (not possessing, not producing and not permitting the introduction of nuclear weapons), stated by Prime Minister Satō Eisaku in 1967 and affirmed by a Diet resolution in 1971; and long-standing restrictions on arms exports, relaxed step by step since 2014."
     ],
     pro:[
      "Since the 1990s the “light arms” corner has shifted most: peacekeeping from 1992, the 2014 reinterpretation and 2015 security laws on limited collective self-defence, and the 2022 National Security Strategy with counterstrike capabilities and higher spending. Scholars disagree whether this ends the doctrine or adjusts it while keeping the alliance and economic priorities.",
      "For theory testing, the doctrine is a strong case: realists see buck-passing to a stronger ally; liberals see trade-based security; constructivists see norms changing slowly under new threats. A good analysis specifies what evidence would favour each reading.",
      "The doctrine also shaped domestic politics. Within the LDP, a mainstream “Yoshida school” favoured the alliance-plus-economy line, while revisionist conservatives, such as Kishi Nobusuke (prime minister 1957–60), wanted constitutional revision and more autonomy. Many scholars read later security debates as a continuation of that contest."
     ]
    },
    related:["us-japan-alliance","constitution-of-japan","japan-development-cooperation","realism","constructivism"],
    read:[{book:"dbb", where:"Chapter 3, section 1 “Efforts for Peace and Stability of Japan and the International Community”"}],
    sources:[{t:"MOFA: Diplomatic Bluebook 2025", url:"https://www.mofa.go.jp/policy/other/bluebook/2025/en_html/index.html"},{t:"Prime Minister’s Office of Japan: The Constitution of Japan", url:"https://japan.kantei.go.jp/constitution_and_government/the_constitution_of_japan.html"}],
    checked:"2026-11"},

   {id:"us-japan-alliance", title:"The US–Japan alliance", aka:["Japan–US Security Treaty","日米安保","Anpo","Treaty of Mutual Cooperation and Security"], tags:["japan","security","alliances"],
    summary:"The security alliance founded in 1951 and revised in 1960: the US commits to defend territory under Japan’s administration, and Japan provides bases.",
    levels:{
     starter:[
      "Japan and the United States signed a security treaty on 8 September 1951. A revised Treaty of Mutual Cooperation and Security was signed in January 1960 and ratified amid huge protests.",
      "Under **Article 5**, each side will act against an armed attack on territories under Japan’s administration. Under **Article 6**, US forces may use bases in Japan. So the deal is asymmetric: protection in return for bases.",
      "Okinawa hosts a large share of US facilities, around 70% of the land used by facilities reserved for US forces in Japan, according to Japan’s Ministry of Defense.",
      "The alliance has lasted more than seventy years, through the Cold War and after, making it one of the longest-lasting alliances between two major powers. Its form has changed far more than its text."
     ],
     builder:[
      {table:[["Year","Change"],["1978, 1997, 2015","Guidelines for defence cooperation, each widening Japan’s role"],["1992","SDF join UN peacekeeping (Cambodia first)"],["2014–15","Limited collective self-defence allowed"],["2022","National Security Strategy: counterstrike capabilities, higher spending"]]},
      "Glenn Snyder’s alliance security dilemma (1984) names two fears: **abandonment** (the ally won’t help) and **entrapment** (being dragged into its wars). Japanese debates swing between them depending on US policy and regional threats.",
      "Practical machinery: a Status of Forces Agreement (1960) governs US forces in Japan; Japan pays “host-nation support” towards their costs; and foreign and defence ministers of both countries meet in a “2+2” Security Consultative Committee. In Okinawa, the plan to relocate US Marine Corps Air Station Futenma within the prefecture, to Henoko, has been disputed between the national government and Okinawa’s elected leaders for decades."
     ],
     pro:[
      "Debates: Does the alliance deter or provoke? Realists see it as balancing China and deterring North Korea; critics in Japan argue it risks entrapment and places unequal burdens on Okinawa. Burden-sharing (host-nation support payments) is a recurring issue in US–Japan politics.",
      "Vocabulary is political: supporters speak of Japan becoming a “normal country”; critics speak of hollowing out Article 9. Describe positions by who holds them.",
      "The alliance sits in a wider network: trilateral cooperation with South Korea, the Quad with Australia and India, and security agreements with the Philippines, Australia and the UK. Membership and details change; check MOFA’s Diplomatic Bluebook for the year you write about.",
      "Theoretical lenses: realists see a classic alliance against shared threats and debate whether Japan balances China or hedges; liberals stress shared institutions and values; constructivists study how the alliance became part of Japanese and American identities, and how protest in Okinawa challenges that story."
     ]
    },
    related:["yoshida-doctrine","constitution-of-japan","japan-and-neighbours","occupation-of-japan"],
    read:[{book:"dbb", where:"Chapter 3, section 1 (Japan-U.S. Security Arrangements)"}],
    sources:[{t:"MOFA: Diplomatic Bluebook 2025", url:"https://www.mofa.go.jp/policy/other/bluebook/2025/en_html/index.html"}],
    checked:"2026-11"},

   {id:"japan-development-cooperation", title:"Japan’s aid and the Fukuda Doctrine", aka:["Japanese ODA","Fukuda Doctrine","Development Cooperation Charter","JICA"], tags:["japan","development","foreign policy"],
    summary:"From war reparations and the Colombo Plan (1954) to the world’s largest aid donor (1989), the Fukuda Doctrine for Southeast Asia (1977) and the Development Cooperation Charter (2015, revised 2023).",
    levels:{
     starter:[
      "Japan began giving aid in 1954, when it joined the Colombo Plan for cooperation in Asia. In the same years it agreed to pay war reparations to several Southeast Asian countries.",
      "By 1989 Japan was the world’s largest aid donor by volume, and it stayed near the top through the 1990s. Its aid focused on Asia and on infrastructure such as roads, ports and power plants, often through loans.",
      "Japan had itself borrowed from the World Bank in the 1950s and 1960s, including for the first bullet-train line.",
      "Japan’s aid agency is JICA, the Japan International Cooperation Agency, which carries out grants, loans and technical cooperation."
     ],
     builder:[
      "In August 1977 Prime Minister Fukuda Takeo set out the **Fukuda Doctrine** in Manila: Japan rejects the role of a military power; it will build “heart-to-heart” trust with Southeast Asia; and it will be an equal partner of ASEAN, working for peace and prosperity across the region.",
      {table:[["Document","Year","Key point"],["ODA Charter","1992","Principles: humanitarianism, interdependence, environment, self-help"],["Revised ODA Charter","2003","Adds human security; priorities include poverty and peacebuilding"],["Development Cooperation Charter","2015","Replaces the ODA Charter"],["Revised Charter","2023","Current framework"]]},
      "Japan’s style: an emphasis on economic infrastructure and on loans in yen, technical cooperation through experts and trainees, and the “request-based” principle that projects start from the recipient government’s request. The 2023 Charter added “offer-type” cooperation, in which Japan proposes packages built on its own strengths.",
      "Over time the geographic focus widened from Asia to Africa (through the Tokyo International Conference on African Development, TICAD, first held in 1993), the Middle East and Latin America, though Asia remains central."
     ],
     pro:[
      "Debates: in the 1980s critics called Japanese aid commercial and “tied” to Japanese firms; defenders cited the “request-based” principle and recipients’ self-help. Aid was also a tool of the Yoshida Doctrine: influence without arms. Scholars compare Japan’s infrastructure-heavy model with China’s later lending, noting both similarities and differences in terms, transparency and debt.",
      "For research, MOFA’s annual white papers on development cooperation and JICA’s project records are primary sources; OECD-DAC statistics allow comparison with other donors.",
      "Japan remains one of the larger donors among OECD members, but rankings change every year; check the latest OECD Development Assistance Committee figures before citing its position.",
      "Studying Japanese aid is also a way into wider debates in development studies: whether infrastructure loans or social spending do more for growth and poverty; how donors’ commercial and strategic interests shape aid; and how recipients negotiate between several donors."
     ]
    },
    related:["yoshida-doctrine","development-ir","japan-and-neighbours"],
    read:[{book:"dbb", where:"Chapter 3, section 2 “Japan’s International Cooperation”"}],
    sources:[{t:"MOFA: Japan’s ODA White Paper 2014, Part I Chapter 1", url:"https://www.mofa.go.jp/policy/oda/white/2014/html/honbun/b1/s1_1.html"},{t:"MOFA: Diplomatic Bluebook 2025", url:"https://www.mofa.go.jp/policy/other/bluebook/2025/en_html/index.html"}],
    checked:"2026-11"},

   {id:"japan-and-neighbours", title:"Japan and its neighbours", aka:["history issues","歴史問題","territorial disputes","Yasukuni","comfort women"], tags:["japan","east asia","foreign policy"],
    summary:"How Japan restored relations with its neighbours after 1945, and the history issues and territorial disputes that still divide them, told neutrally.",
    levels:{
     starter:[
      "After the war, Japan restored relations with its neighbours step by step: the Soviet Union (Joint Declaration, 1956; still no peace treaty with Russia), South Korea (Treaty on Basic Relations, 1965) and the People’s Republic of China (1972; Treaty of Peace and Friendship, 1978). Japan has no diplomatic relations with North Korea.",
      "Relations are close in trade, tourism and culture, but two kinds of dispute recur: **history issues** about the colonial and wartime past, and **territorial disputes** over islands.",
      {warn:"On these topics, attribute every claim to whoever makes it, and use all the names of a disputed place on first mention."},
      "People-to-people ties are strong: tourism, students, popular culture and business link the societies, even when governments disagree."
     ],
     builder:[
      "**History issues** ([歴史問題]{れきしもんだい}) include textbooks, apologies, compensation and memorials. Japanese governments issued statements of apology and remorse, notably the Kōno Statement (1993) on “comfort women” and the Murayama Statement (1995). In December 2015 Japan and South Korea announced an agreement on the comfort-women issue; Moon Jae-in’s government (2017–22) judged it flawed, while Japan holds that it should be implemented. Visits by politicians to Yasukuni Shrine, which since 1978 has also enshrined 14 men tried as Class A war criminals (12 of them convicted), draw protests from China and South Korea; supporters say they honour the war dead.",
      {table:[["Islands","Administered by","Claims"],["Northern Territories / Southern Kurils","The Soviet Union from 1945, then Russia","Japan claims four islands; Russia says they are its territory"],["Takeshima / Dokdo","South Korea","Japan claims them; South Korea says no dispute exists"],["Senkaku / Diaoyu / Diaoyutai","Japan","China and Taiwan claim them; Japan says no dispute exists"]]},
      "Economic ties are dense: China has long been one of Japan’s largest trading partners, and South Korea and Taiwan are major partners too. In periods of political tension commentators have described the pattern as “cold politics, hot economics” ([政冷経熱]{せいれいけいねつ})."
     ],
     pro:[
      "Scholars study these issues through memory politics, nationalism and domestic politics: leaders in all the countries involved can gain or lose votes over history, and civil-society groups (including survivors’ movements) shape agendas. Abduction of Japanese citizens by North Korea, admitted at a 2002 summit, is a central issue in Japanese policy.",
      "The historical consensus on core facts of wartime atrocities and the comfort-station system is firm; debates concern numbers, degrees of coercion in particular cases, responsibility, and how and whether settlements such as the 1965 treaty closed claims. Use reputable historians and primary documents, including governments’ own statements (MOFA publishes Japan’s positions, and other governments publish theirs).",
      "Regional order is also built through FOIP, ASEAN-centred forums and trade deals such as the CPTPP. Pass E of this track goes deeper into Japan and the region."
     ]
    },
    related:["us-japan-alliance","occupation-of-japan","japan-development-cooperation","asia-pacific-war"],
    read:[{book:"dbb", where:"Chapter 2, section 2 “Asia and Oceania”, and the References on the comfort-women issue"}],
    sources:[{t:"MOFA: Diplomatic Bluebook 2025 (Japan’s official positions)", url:"https://www.mofa.go.jp/policy/other/bluebook/2025/en_html/index.html"}],
    checked:"2026-11"},

   {id:"chalmers-johnson", title:"Chalmers Johnson", aka:["Johnson, Chalmers (1931–2010)"], tags:["thinker","japan","ipe"],
    summary:"American political scientist (1931–2010) whose MITI and the Japanese Miracle (1982) made the “developmental state” a central idea in political economy.",
    levels:{
     starter:[
      "Chalmers Johnson (1931–2010) was an American political scientist who studied China and Japan. His best-known book, *MITI and the Japanese Miracle: The Growth of Industrial Policy, 1925–1975* (1982), argued that Japan’s fast growth owed much to an elite bureaucracy, above all the Ministry of International Trade and Industry (MITI), that guided industry.",
      "He gave a name to that kind of state: the **developmental state**, whose top goal is economic development and which steers the market rather than only setting rules.",
      {key:"Johnson’s famous line: in Japan “the politicians reign and the bureaucrats rule”."},
      "He was trained as a scholar of China before turning to Japan, and he wrote on both for decades."
     ],
     builder:[
      "Johnson contrasted **plan-rational** developmental states (Japan) with **market-rational** regulatory states (the United States), and traced the roots of Japanese industrial policy back to the 1920s and the wartime economy, not just the Occupation.",
      "His work shaped comparative politics and IPE: scholars applied the model to South Korea and Taiwan, and debated it for China. In the 1980s he was one of the “revisionist” writers who argued that Japan’s economy worked differently from Western market models.",
      "His first book, *Peasant Nationalism and Communist Power* (1962), was on China. Late in life he wrote a trilogy on US empire, beginning with *Blowback* (2000).",
      "Johnson also argued that Japan’s economic success put pressure on the United States, and in the trade debates of the 1980s and 1990s he urged Washington to treat Japan’s economy as different in kind rather than as a version of its own."
     ],
     pro:[
      "Critiques: Richard Samuels (1987) argued that state and business negotiated (“reciprocal consent”); Ramseyer and Rosenbluth (1993) argued that politicians, not bureaucrats, were in charge; others pointed to successful firms that ignored MITI and to the World Bank’s market-friendly reading (1993). Johnson’s defenders reply that he described a historical pattern, not a permanent law.",
      "Legacy: the developmental-state idea remains one of the most cited in political economy and a standard starting point for seminars on East Asian growth and on industrial policy today.",
      "When reading him, separate the historical account of MITI, which remains widely used, from the policy arguments of his later work, which were more polemical and are debated on their own terms."
     ]
    },
    related:["japan-economic-miracle","japanese-political-system","international-political-economy"],
    sources:[{t:"Foreign Correspondents’ Club of Japan: “Blowback scholar” (on Chalmers Johnson)", url:"https://www.fccj.or.jp/number-1-shimbun-article/blowback-scholar"}],
    checked:"2026-11"},

   {id:"ruth-benedict", title:"Ruth Benedict", aka:["Benedict, Ruth (1887–1948)","The Chrysanthemum and the Sword"], tags:["thinker","anthropology","japan"],
    summary:"American anthropologist (1887–1948) whose wartime study The Chrysanthemum and the Sword (1946) shaped outside views of Japan and is now a key text in debates on area studies.",
    levels:{
     starter:[
      "Ruth Benedict (1887–1948) was an American anthropologist. Her *Patterns of Culture* (1934) argued that each culture forms a distinctive pattern of values.",
      "During the Second World War she worked as an adviser to the US Office of War Information (1943–45). Out of that work came *The Chrysanthemum and the Sword: Patterns of Japanese Culture* (1946). She could not visit an enemy country, so she studied Japan “at a distance”: interviews, films, books and documents.",
      {key:"A classic of area studies, and a classic example of its problems."},
      "Her book on Japan sold widely, was translated into Japanese and is still assigned in courses, often to be criticised."
     ],
     builder:[
      "The book contrasts the “chrysanthemum” and the “sword” as two sides of Japanese culture and famously describes Japan as a “shame culture” in contrast to a Western “guilt culture”. It was widely read in the United States and, in translation, in Japan, where it fed debates about national identity.",
      "Critics say it treats a whole nation as one personality, relies on sources far from everyday life, and reflects wartime aims. Defenders say it was an early serious attempt to understand Japan on its own terms.",
      "Benedict’s work belonged to the “culture and personality” school of American anthropology, which looked for characteristic patterns in whole cultures. Later anthropologists rejected the assumption that a nation shares one psychology, and stressed variation by class, region, gender and generation."
     ],
     pro:[
      "Seminars read Benedict on three levels: as an argument about Japan (now largely rejected in its sweeping form), as a source on how the United States prepared for occupation, and as a text that Japanese writers responded to, feeding later nihonjinron ({{nihonjinron}}). Her method, “culture at a distance”, raises lasting questions about evidence and position in area studies ({{area-studies}}).",
      "The “shame versus guilt” contrast in particular has been criticised by Japanese and Western scholars as oversimplified.",
      "The book was translated into Japanese in 1948, and Japanese scholars soon published critical responses. Its reception in Japan is itself a topic of research: it shows how an outsider’s account can become part of a society’s debate about itself.",
      "For a seminar, compare Benedict with later ethnographies based on long fieldwork in Japanese neighbourhoods, workplaces and villages: the difference in evidence is the lesson."
     ]
    },
    related:["area-studies","nihonjinron"],
    sources:[{t:"Encyclopaedia Britannica: Ruth Benedict", url:"https://www.britannica.com/print/article/60482"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"area-studies", term:"Area studies", def:"The interdisciplinary study of one world region or country, combining language, history, culture, politics and economics, with an emphasis on depth and local sources.", codex:"area-studies"},
   {id:"japan-studies", term:"Japan studies", def:"The branch of area studies that focuses on Japan (日本研究, Nihon kenkyū); an older name is “Japanology”.", codex:"area-studies"},
   {id:"nihonjinron", term:"Nihonjinron", def:"“Discussions of the Japanese” (日本人論): a body of mostly popular writing that claims to explain Japanese uniqueness, which scholars treat largely as cultural nationalism.", codex:"nihonjinron"},
   {id:"self-orientalism", term:"Self-Orientalism", def:"Presenting one’s own society in the exotic terms that outsiders use, for example for tourism, branding or national pride.", codex:"nihonjinron"},
   {id:"insider-outsider-debate", term:"Insider–outsider debate", def:"The debate about whether people from inside or outside a society understand it better. Most scholars now hold that position shapes what you notice, while evidence and method decide what you can claim.", codex:"area-studies"},
   {id:"meiji-constitution", term:"Meiji Constitution", def:"Japan’s first modern constitution, promulgated in 1889, which placed sovereignty with the Emperor and created the Imperial Diet (first met 1890).", codex:"constitution-of-japan"},
   {id:"occupation-of-japan", term:"Occupation of Japan", def:"The Allied, in practice American, occupation of Japan from 1945 to 28 April 1952, which ruled indirectly through Japanese ministries.", codex:"occupation-of-japan"},
   {id:"scap", term:"SCAP", def:"Supreme Commander for the Allied Powers: General Douglas MacArthur’s title during the Occupation of Japan, also used for his headquarters (often called GHQ).", codex:"occupation-of-japan"},
   {id:"san-francisco-peace-treaty", term:"San Francisco Peace Treaty", def:"The treaty between Japan and most of the Allied powers, signed on 8 September 1951 and in force from 28 April 1952, which ended the Occupation.", codex:"occupation-of-japan"},
   {id:"zaibatsu", term:"Zaibatsu", def:"The large family-controlled business conglomerates of prewar Japan (財閥), broken up during the Occupation.", codex:"occupation-of-japan"},
   {id:"constitution-of-japan", term:"Constitution of Japan", def:"Japan’s constitution, promulgated on 3 November 1946 and in force since 3 May 1947, based on popular sovereignty; never amended as of November 2026.", codex:"constitution-of-japan"},
   {id:"article-9", term:"Article 9", def:"The clause of Japan’s Constitution that renounces war as a sovereign right and says armed forces “will never be maintained”; how it allows the Self-Defense Forces is debated.", codex:"constitution-of-japan"},
   {id:"symbol-emperor", term:"Symbol emperor", def:"The Emperor’s role under the 1947 Constitution: “the symbol of the State and of the unity of the People”, with no powers related to government (象徴天皇).", codex:"japanese-political-system"},
   {id:"self-defense-forces", term:"Self-Defense Forces (SDF)", def:"Japan’s armed forces, founded in 1954, which governments say are constitutional because they are limited to self-defence.", codex:"constitution-of-japan"},
   {id:"collective-self-defence", term:"Collective self-defence", def:"A state’s right to use force to help defend an ally under attack. Japan’s government allowed it in limited cases from 2014–15, a contested change.", codex:"us-japan-alliance"},
   {id:"national-diet", term:"National Diet", def:"Japan’s parliament (国会), “the highest organ of state power” and its only law-making body, made up of two elected houses.", codex:"japanese-political-system"},
   {id:"house-of-representatives-japan", term:"House of Representatives (Japan)", def:"The lower and stronger house of the Diet (衆議院): 465 members as of November 2026, four-year terms, and it can be dissolved early.", codex:"japanese-political-system"},
   {id:"house-of-councillors", term:"House of Councillors", def:"The upper house of the Diet (参議院): 248 members with six-year terms, half elected every three years; it cannot be dissolved.", codex:"japanese-political-system"},
   {id:"japanese-cabinet", term:"Cabinet (Japan)", def:"The prime minister and ministers, who hold executive power and are collectively responsible to the Diet (内閣).", codex:"japanese-political-system"},
   {id:"miti", term:"MITI", def:"The Ministry of International Trade and Industry (1949–2001), famous for industrial policy; reorganised as the Ministry of Economy, Trade and Industry (METI) in 2001.", codex:"chalmers-johnson"},
   {id:"iron-triangle", term:"Iron triangle", def:"A close, mutually supporting relationship between ruling-party policy specialists, ministries and industry groups.", codex:"japanese-political-system"},
   {id:"amakudari", term:"Amakudari", def:"“Descent from heaven” (天下り): senior civil servants retiring into well-paid posts in companies or bodies they used to oversee.", codex:"japanese-political-system"},
   {id:"liberal-democratic-party", term:"Liberal Democratic Party (LDP)", def:"Japan’s main conservative party (自由民主党), formed in 1955, which has led most governments since then.", codex:"ldp-dominance"},
   {id:"1955-system", term:"1955 system", def:"The pattern from 1955 to 1993 in which the LDP always governed and the Japan Socialist Party was the permanent main opposition (五五年体制).", codex:"ldp-dominance"},
   {id:"sntv", term:"Single non-transferable vote (SNTV)", def:"An electoral system in which each voter has one vote in a district that elects several members; used for most of Japan’s lower house until 1994.", codex:"ldp-dominance"},
   {id:"parallel-electoral-system", term:"Parallel electoral system", def:"A mixed system in which some seats are won in single-member districts and others by party lists, with the two parts counted separately; used for Japan’s lower house since 1996.", codex:"ldp-dominance"},
   {id:"prefecture-japan", term:"Prefecture (Japan)", def:"One of Japan’s 47 top-level local governments (都道府県), each with a directly elected governor and assembly.", codex:"japanese-political-system"},
   {id:"keiretsu", term:"Keiretsu", def:"Groups of Japanese firms linked by cross-shareholdings, long-term business ties and often a main bank (系列).", codex:"japan-economic-miracle"},
   {id:"bubble-economy", term:"Bubble economy", def:"Japan’s asset boom of the late 1980s, when share and land prices soared far beyond their underlying value before collapsing from 1990.", codex:"japan-economic-miracle"},
   {id:"plaza-accord", term:"Plaza Accord", def:"A September 1985 agreement among five major economies to push the US dollar down, which made the yen rise sharply.", codex:"japan-economic-miracle"},
   {id:"lost-decades", term:"Lost decades", def:"The long period of weak growth and deflation in Japan after the bubble burst in the early 1990s; how “lost” it was is debated.", codex:"japan-economic-miracle"},
   {id:"abenomics", term:"Abenomics", def:"The economic policies of Prime Minister Abe Shinzō from 2013: very loose monetary policy, government spending and promised structural reforms.", codex:"japan-economic-miracle"},
   {id:"population-ageing", term:"Population ageing", def:"A rise in the share of older people in a population. In Japan’s 2025 census, 29.4% were aged 65 or over.", codex:"japan-population-change"},
   {id:"population-decline", term:"Population decline", def:"A fall in a population’s total size, as when deaths exceed births and migration does not make up the gap.", codex:"japan-population-change"},
   {id:"special-permanent-resident", term:"Special permanent resident", def:"A residence status created in 1991 for people from Japan’s former colonies who lost Japanese nationality in 1952, and their descendants.", codex:"japan-immigration-policy"},
   {id:"nikkeijin", term:"Nikkeijin", def:"People of Japanese descent living outside Japan or returning to it (日系人), many from Brazil and Peru after a 1990 change in immigration rules.", codex:"japan-immigration-policy"},
   {id:"technical-intern-training", term:"Technical Intern Training Program", def:"A scheme from 1993 that officially transfers skills to developing countries but in practice supplies labour; due to be replaced from April 2027.", codex:"japan-immigration-policy"},
   {id:"specified-skilled-worker", term:"Specified Skilled Worker", def:"A Japanese residence status for work in set sectors with labour shortages, introduced in April 2019 (特定技能).", codex:"japan-immigration-policy"},
   {id:"ikusei-shuro", term:"Employment for Skill Development", def:"The new scheme (育成就労, ikusei shūrō) enacted in 2024 to replace Technical Intern Training from 1 April 2027.", codex:"japan-immigration-policy"},
   {id:"zainichi-koreans", term:"Zainichi Koreans", def:"Koreans who came to Japan during the colonial period and their descendants, many of them special permanent residents (在日コリアン).", codex:"japan-immigration-policy"},
   {id:"yoshida-doctrine", term:"Yoshida Doctrine", def:"Japan’s postwar strategy of relying on the US alliance for security, keeping its own forces light and concentrating on economic growth.", codex:"yoshida-doctrine"},
   {id:"us-japan-security-treaty", term:"US–Japan Security Treaty", def:"The alliance treaty first signed in 1951 and revised in 1960, under which the US will act against attacks on territory under Japan’s administration and may use bases in Japan.", codex:"us-japan-alliance"},
   {id:"fukuda-doctrine", term:"Fukuda Doctrine", def:"Prime Minister Fukuda Takeo’s 1977 principles for Southeast Asia: no military role for Japan, “heart-to-heart” trust, and equal partnership with ASEAN.", codex:"japan-development-cooperation"},
   {id:"development-cooperation-charter", term:"Development Cooperation Charter", def:"Japan’s framework for its aid, adopted in 2015 to replace the ODA Charter and revised in 2023.", codex:"japan-development-cooperation"},
   {id:"public-diplomacy", term:"Public diplomacy", def:"A government’s efforts to communicate with and win over foreign publics, not only foreign governments, through culture, exchanges, media and information."},
   {id:"cool-japan", term:"Cool Japan", def:"The Japanese government’s promotion, from about 2010, of creative industries such as anime, design and food abroad."},
   {id:"history-problem", term:"History issues", def:"Disputes between Japan and its neighbours over how the colonial and wartime past is remembered and acknowledged (歴史問題), including textbooks, apologies and memorials.", codex:"japan-and-neighbours"},
   {id:"free-and-open-indo-pacific", term:"Free and Open Indo-Pacific (FOIP)", def:"A Japanese foreign-policy vision announced in 2016 that stresses the rule of law, freedom of navigation and connectivity across the Indian and Pacific Oceans.", codex:"japan-and-neighbours"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u4-q01", lesson:"e4u4-l1", level:1, q:"What best describes area studies?", options:[
     {t:"The interdisciplinary study of one region or country, drawing on its language, history, culture, politics and economics.", ok:true, why:"That is the core idea: depth on one place, using several disciplines."},
     {t:"A branch of geography that maps physical regions.", why:"Area studies is about societies, not only physical geography, and it draws on many disciplines."},
     {t:"The comparison of one variable across as many countries as possible.", why:"That describes a large-N disciplinary design, the opposite emphasis to area studies."},
     {t:"Training for diplomats in the etiquette of other countries.", why:"Area studies is an academic field, not protocol training."}]},
   {id:"e4u4-q02", lesson:"e4u4-l1", level:2, q:"Priya reads that US area studies grew fast after 1945 with government and foundation money. What is the most reasonable conclusion for her own research?", options:[
     {t:"Ask of any study who funded it and which questions it asked or left out, while judging its findings on their evidence.", ok:true, why:"Right. Knowing the origins prompts critical questions; it does not by itself prove findings wrong."},
     {t:"Ignore all area studies written before 1990, because it was propaganda.", why:"Much early work remains valuable. Origins call for critical reading, not wholesale rejection."},
     {t:"Funding sources never matter if the author is a respected scholar.", why:"Funding can shape agendas and questions, even for respected scholars."},
     {t:"Only Japanese-funded research on Japan can be trusted.", why:"Every funder has interests. The point is to read critically, whoever paid."}]},
   {id:"e4u4-q03", lesson:"e4u4-l1", level:1, q:"Why did Ruth Benedict write *The Chrysanthemum and the Sword* without visiting Japan?", options:[
     {t:"It grew out of wartime research for the US government, when Japan was an enemy country she could not visit.", ok:true, why:"Correct. She studied Japan “at a distance” through interviews, films and documents."},
     {t:"She believed fieldwork was unnecessary in anthropology.", why:"Benedict valued fieldwork; wartime conditions prevented it here."},
     {t:"Japan banned all foreign anthropologists after 1946.", why:"There was no such ban; the book was researched during the war."},
     {t:"She wrote it as a novel, so no research trip was needed.", why:"It is a work of anthropology, not a novel."}]},
   {id:"e4u4-q04", lesson:"e4u4-l1", level:2, q:"A tourism campaign made in Japan sells the country abroad only through temples, geisha and tea ceremonies. Which concept fits best?", options:[
     {t:"Self-Orientalism", ok:true, why:"Right. The country presents itself in the exotic terms outsiders use, for an outside audience."},
     {t:"Techno-Orientalism", why:"That names images of Japan as futuristic and machine-like, not traditional."},
     {t:"Nihonjinron", why:"Nihonjinron is writing that claims to explain Japanese uniqueness, not a tourism image as such."},
     {t:"Area studies", why:"Area studies is an academic field, not a style of self-presentation."}]},
   {id:"e4u4-q05", lesson:"e4u4-l1", level:1, q:"What does Oguma Eiji’s research show about the idea of Japan as a “single-ethnic nation”?", options:[
     {t:"It became dominant after 1945; imperial Japan had often described itself as a mixed nation.", ok:true, why:"Correct. Homogeneity is a historical claim with a politics, not a timeless fact."},
     {t:"It has been the official view since ancient times.", why:"Oguma shows the opposite: the idea’s dominance is recent."},
     {t:"It was invented by American Occupation officials.", why:"Oguma traces Japanese debates; he does not attribute the idea to the Occupation."},
     {t:"It is accurate because Japan has no minorities.", why:"Japan has the Ainu, Okinawans, Zainichi Koreans, buraku communities and many foreign residents."}]},
   {id:"e4u4-q06", lesson:"e4u4-l1", level:3, q:"Tomás wants to use a 1970s nihonjinron bestseller in his thesis. Which use is most defensible?", options:[
     {t:"As a primary source on how Japanese identity was imagined and promoted at the time, analysed critically.", ok:true, why:"Right. Scholars treat such books as evidence of ideas and cultural nationalism, not as accurate descriptions of society."},
     {t:"As a reliable description of how all Japanese people think today.", why:"That repeats the genre’s sweeping claims, which scholars have shown to rest on narrow evidence."},
     {t:"Not at all: a thesis may never cite popular books.", why:"Popular books can be valuable primary sources if used critically."},
     {t:"As proof that Japan is unique among nations.", why:"That takes the genre’s claim as its conclusion, which is circular."}]},
   {id:"e4u4-q07", lesson:"e4u4-l1", level:1, q:"Which critique of nihonjinron did Ross Mouer and Sugimoto Yoshio make in *Images of Japanese Society* (1986)?", options:[
     {t:"Its claims generalised from a narrow slice of society, mainly men employed by large firms.", ok:true, why:"Correct: their best-known point about evidence."},
     {t:"Its claims were correct but badly written.", why:"They challenged the claims themselves, not the style."},
     {t:"It ignored the influence of Chinese philosophy.", why:"That was not their central argument."},
     {t:"It was invented by foreign journalists.", why:"Much nihonjinron was written in Japan by Japanese authors; their critique was about evidence."}]},
   {id:"e4u4-q08", lesson:"e4u4-l1", level:2, q:"Mei says: “Only Japanese people can truly understand Japan.” Why do most scholars reject this?", options:[
     {t:"It is itself a uniqueness claim, and it would rule out comparison and criticism; position shapes what anyone sees, but evidence decides claims.", ok:true, why:"Right. The insider–outsider debate rejects both easy answers."},
     {t:"Because outsiders are always more objective.", why:"That is the opposite mistake: outsiders bring their own assumptions."},
     {t:"Because Japanese scholars rarely write about Japan.", why:"A vast literature on Japan is written by Japanese scholars."},
     {t:"Because the claim is illegal under academic rules.", why:"It is an argument to be assessed, not a rule violation."}]},
   {id:"e4u4-q09", lesson:"e4u4-l1", level:2, q:"Oluwaseun wants an open-access journal to start reading on contested modern history in Japan and the region. Which fits best?", options:[
     {t:"*The Asia-Pacific Journal: Japan Focus*", ok:true, why:"It is open access and often publishes on contested history in Japan and the region."},
     {t:"*Monumenta Nipponica*", why:"A respected journal, but mainly on history, literature, religion and culture, and not the open-access choice here."},
     {t:"The Association for Asian Studies conference programme", why:"A conference programme lists papers but is not a journal of articles."},
     {t:"A tourism board website", why:"Not a scholarly source."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u4-q10", lesson:"e4u4-l2", level:1, q:"Under the Meiji Constitution of 1889, where did sovereignty lie?", options:[
     {t:"With the Emperor", ok:true, why:"Correct. Ministers answered to the Emperor, not to the Diet."},
     {t:"With the people", why:"Popular sovereignty came with the 1947 Constitution."},
     {t:"With the elected House of Representatives", why:"The Imperial Diet had an elected lower house, but sovereignty lay with the Emperor."},
     {t:"With the army", why:"The military had direct access to the throne, but sovereignty formally lay with the Emperor."}]},
   {id:"e4u4-q11", lesson:"e4u4-l2", level:2, q:"Dmitri compares the occupations of Germany and Japan after 1945. What is the key difference in how Japan was governed?", options:[
     {t:"Japan was ruled indirectly: SCAP gave orders and Japanese ministries carried them out.", ok:true, why:"Right. Indirect rule kept the Japanese state, especially the bureaucracy, in place."},
     {t:"Japan was divided into four national zones.", why:"That describes Germany. Japan’s Occupation was in practice American and not zoned."},
     {t:"Japan was governed by the United Nations.", why:"The UN did not govern Japan."},
     {t:"Japan was never occupied; it only signed a treaty.", why:"Japan was occupied from 1945 to 1952."}]},
   {id:"e4u4-q12", lesson:"e4u4-l2", level:1, q:"When did the Constitution of Japan come into force?", options:[
     {t:"3 May 1947", ok:true, why:"Correct. It was promulgated on 3 November 1946 and took effect six months later."},
     {t:"15 August 1945", why:"That is the date the surrender was announced."},
     {t:"28 April 1952", why:"That is when the San Francisco Peace Treaty came into force."},
     {t:"11 February 1889", why:"That is when the Meiji Constitution was promulgated."}]},
   {id:"e4u4-q13", lesson:"e4u4-l2", level:1, q:"What does paragraph 2 of Article 9 say?", options:[
     {t:"Land, sea and air forces, as well as other war potential, will never be maintained, and the right of belligerency of the state will not be recognised.", ok:true, why:"That is the official translation’s wording."},
     {t:"Japan may keep forces only for UN missions.", why:"The text says nothing about UN missions."},
     {t:"Japan will maintain forces equal to its neighbours’.", why:"The text says the opposite."},
     {t:"The Emperor commands the Self-Defense Forces.", why:"The SDF did not exist in 1947, and the Emperor has no powers related to government."}]},
   {id:"e4u4-q14", lesson:"e4u4-l2", level:3, q:"A student writes: “The SDF exist, so Article 9 must have been amended.” What is the best correction?", options:[
     {t:"The text was never amended. Governments argue that forces limited to self-defence are not banned “war potential”; many scholars dispute this.", ok:true, why:"Right. The SDF rest on interpretation, not on a text change."},
     {t:"Article 9 was amended in 1954 when the SDF were founded.", why:"There has never been an amendment to the Constitution."},
     {t:"The SDF are illegal and the courts have ordered them disbanded.", why:"Courts have mostly avoided ruling directly on the SDF."},
     {t:"Article 9 only applies to the navy.", why:"It mentions land, sea and air forces."}]},
   {id:"e4u4-q15", lesson:"e4u4-l2", level:2, q:"What is the “reverse course” of the Occupation?", options:[
     {t:"The shift from about 1947–48 from reform towards economic recovery and anti-communism as the Cold War deepened.", ok:true, why:"Correct. Some purged wartime figures returned and the left was purged in turn."},
     {t:"The return of Okinawa to Japan in 1972.", why:"That is the Okinawa reversion, a different event."},
     {t:"Japan’s withdrawal from the League of Nations in 1933.", why:"That came long before the Occupation."},
     {t:"The Meiji leaders’ restoration of imperial rule in 1868.", why:"That is the Meiji Restoration."}]},
   {id:"e4u4-q16", lesson:"e4u4-l2", level:2, q:"Fatima says the 1947 Constitution was “simply dictated by Americans”. Which reply is most accurate?", options:[
     {t:"SCAP wrote the first draft, but the Japanese government revised it and the Diet debated and amended it, adding for example the right to minimum living standards.", ok:true, why:"Right. Scholars debate the “imposed constitution” story because Japanese actors shaped the result."},
     {t:"She is right: no Japanese person saw it before it took effect.", why:"The Imperial Diet debated and passed it, with amendments."},
     {t:"It was written entirely by Japanese scholars without SCAP involvement.", why:"SCAP’s staff wrote the model draft in February 1946."},
     {t:"It was written by the United Nations.", why:"The UN had no role in drafting it."}]},
   {id:"e4u4-q17", lesson:"e4u4-l2", level:1, q:"How is the Constitution of Japan amended?", options:[
     {t:"Two-thirds of all members of each house of the Diet initiate it, then a majority of votes cast in a national referendum approves it.", ok:true, why:"Correct (Article 96)."},
     {t:"A simple majority in the House of Representatives is enough.", why:"Amendment needs two-thirds in both houses and a referendum."},
     {t:"The Emperor may amend it on the cabinet’s advice.", why:"The Emperor has no such power."},
     {t:"The Supreme Court amends it by its rulings.", why:"Courts interpret the Constitution; they cannot amend its text."}]},
   {id:"e4u4-q18", lesson:"e4u4-l2", level:2, q:"Hana writes about wartime atrocities in her essay. Which approach follows scholarly practice?", options:[
     {t:"State the core facts on which historians agree, cite reputable historians for any numbers, and note where estimates differ.", ok:true, why:"Right. The consensus on core facts is firm; numbers vary and need sources."},
     {t:"Avoid the topic because all accounts are equally biased.", why:"Historians have established core facts; avoiding them would distort the history."},
     {t:"Use the highest number she can find to show seriousness.", why:"Choose numbers by the quality of the source, and note the range."},
     {t:"Present denial of the events as one equal side of a debate.", why:"Denial of core, well-documented facts is outside scholarly debate."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u4-q19", lesson:"e4u4-l3", level:2, q:"After an election the two houses of the Diet vote for different people as prime minister, and they cannot agree. What happens?", options:[
     {t:"The House of Representatives’ choice becomes the Diet’s decision.", ok:true, why:"Correct (Article 67)."},
     {t:"The Emperor chooses between the two candidates.", why:"The Emperor has no choice; he appoints whoever the Diet designates."},
     {t:"A national referendum decides.", why:"There is no referendum for choosing a prime minister."},
     {t:"The House of Councillors’ choice prevails.", why:"It is the lower house that prevails."}]},
   {id:"e4u4-q20", lesson:"e4u4-l3", level:1, q:"How many seats does the House of Representatives have, as of November 2026?", options:[
     {t:"465", ok:true, why:"Correct: 289 single-member districts and 176 proportional seats. Proposals to cut the number were under debate."},
     {t:"248", why:"That is the House of Councillors."},
     {t:"500", why:"That was the size after the 1994 reform (300 + 200), later reduced."},
     {t:"713", why:"That is roughly both houses combined (465 + 248)."}]},
   {id:"e4u4-q21", lesson:"e4u4-l3", level:2, q:"What is a “twisted Diet” (ねじれ国会)?", options:[
     {t:"A situation in which different majorities control the two houses, making it hard to pass laws.", ok:true, why:"Right. The lower house can override only with a two-thirds majority, which governments rarely have."},
     {t:"A Diet session that runs past its scheduled end.", why:"That is an extended session, not a twisted Diet."},
     {t:"A scandal involving bribery of Diet members.", why:"Scandals are separate from the meaning of the term."},
     {t:"A Diet in which the Emperor overrules the cabinet.", why:"The Emperor cannot overrule the cabinet."}]},
   {id:"e4u4-q22", lesson:"e4u4-l3", level:3, q:"Lucía’s essay argues that in Japan “bureaucrats rule while politicians reign”. Which scholars could she cite against this view?", options:[
     {t:"Ramseyer and Rosenbluth, who argued that LDP politicians were the principals and bureaucrats their agents.", ok:true, why:"Right. Their 1993 book is the classic counter to Johnson’s bureaucracy-dominance view."},
     {t:"Chalmers Johnson", why:"Johnson made the “reign and rule” argument; he supports her view."},
     {t:"Ruth Benedict", why:"Benedict wrote about culture in 1946, not about the bureaucracy debate."},
     {t:"Peter Dale", why:"Dale criticised nihonjinron, not the bureaucracy-dominance thesis."}]},
   {id:"e4u4-q23", lesson:"e4u4-l3", level:1, q:"What is amakudari?", options:[
     {t:"Senior civil servants retiring into well-paid posts in companies or bodies they used to regulate.", ok:true, why:"Correct: “descent from heaven”. Laws since 2007 have restricted it."},
     {t:"Informal guidance from officials to firms.", why:"That is administrative guidance (gyōsei shidō)."},
     {t:"The dissolution of the lower house.", why:"That is kaisan, a different term."},
     {t:"A politician’s personal support organisation.", why:"That is a kōenkai."}]},
   {id:"e4u4-q24", lesson:"e4u4-l3", level:2, q:"Why did the old SNTV electoral system encourage factions and money politics in the LDP?", options:[
     {t:"Several LDP candidates competed in the same multi-member district, so they relied on personal networks, factions and spending rather than the party label.", ok:true, why:"Right. Intra-party competition was the key mechanism."},
     {t:"It banned parties from campaigning, so candidates had to buy votes.", why:"Parties could campaign; the problem was competition between candidates of the same party."},
     {t:"It used only national party lists, so local ties didn’t matter.", why:"SNTV was a district system; local ties mattered a great deal."},
     {t:"It gave each voter several votes, which favoured big parties.", why:"Each voter had a single vote."}]},
   {id:"e4u4-q25", lesson:"e4u4-l3", level:3, q:"Kenji says: “The LDP has ruled since 1955, so Japan is not a real democracy.” What is the strongest reply?", options:[
     {t:"Elections are competitive and the LDP lost power in 1993 and 2009; long dominance is a puzzle scholars explain with institutions, growth and a divided opposition, and other democracies have had dominant parties.", ok:true, why:"Right. Dominance alone does not mean elections are not free."},
     {t:"He is right: Japan has had only one legal party since 1955.", why:"Many parties compete, and others have governed."},
     {t:"The LDP never wins elections; it is appointed by the Emperor.", why:"The LDP wins elections; the Emperor has no political role."},
     {t:"Democracy only exists where power changes every election.", why:"Alternation matters, but democracy is defined by free and fair competition, not a set rhythm of change."}]},
   {id:"e4u4-q26", lesson:"e4u4-l3", level:2, q:"What is a key feature of Japan’s parallel electoral system for the lower house since 1996?", options:[
     {t:"District seats and party-list seats are counted separately, so the list seats do not correct for disproportional district results.", ok:true, why:"Correct. That is what makes it parallel rather than compensatory like Germany’s."},
     {t:"All seats are allocated by proportional representation.", why:"289 seats are single-member districts."},
     {t:"Voters rank candidates in order of preference.", why:"Voters cast one district vote and one party vote; there is no ranking."},
     {t:"Candidates may not stand in both a district and a list.", why:"Dual candidacy is allowed, and district losers can win list seats."}]},
   {id:"e4u4-q27", lesson:"e4u4-l3", level:2, q:"A mayor and a city assembly in Japan disagree about a budget. Why is this possible?", options:[
     {t:"Mayors and assemblies are both directly elected, so each has its own mandate.", ok:true, why:"Right. Local government has two elected centres of power."},
     {t:"Because the mayor is appointed by the prime minister.", why:"Mayors are elected by local voters."},
     {t:"Because local assemblies are appointed by the Emperor.", why:"Assemblies are elected."},
     {t:"It is not possible: mayors must follow the assembly in everything.", why:"Disagreements happen precisely because both are elected."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u4-q28", lesson:"e4u4-l4", level:1, q:"Which book made the “developmental state” a central idea for explaining Japan’s growth?", options:[
     {t:"Chalmers Johnson, *MITI and the Japanese Miracle* (1982)", ok:true, why:"Correct. Johnson described an elite bureaucracy steering industrial development."},
     {t:"Ezra Vogel, *Japan as Number One* (1979)", why:"A bestseller about Japan’s success, but not the source of the developmental-state concept."},
     {t:"Ruth Benedict, *The Chrysanthemum and the Sword* (1946)", why:"A study of culture written before the high-growth era."},
     {t:"John Dower, *Embracing Defeat* (1999)", why:"A history of the Occupation, not an economic theory."}]},
   {id:"e4u4-q29", lesson:"e4u4-l4", level:3, q:"Amara finds that some of Japan’s most successful firms grew against official advice. Which debate does this evidence feed, and on which side?", options:[
     {t:"The debate over the developmental state: it supports critics who say the state-led story is overstated.", ok:true, why:"Right. Evidence of firms succeeding without, or against, MITI weakens the strong version of Johnson’s argument."},
     {t:"The nihonjinron debate: it proves Japanese uniqueness.", why:"Firm strategy is about markets and the state, not national character."},
     {t:"The Article 9 debate: it supports revision.", why:"It has nothing to do with Article 9."},
     {t:"The developmental state debate: it proves MITI controlled every firm.", why:"It shows the opposite."}]},
   {id:"e4u4-q30", lesson:"e4u4-l4", level:1, q:"What did the Plaza Accord of 1985 do?", options:[
     {t:"Major economies agreed to push the dollar down, which made the yen rise sharply.", ok:true, why:"Correct. It helped set off the conditions for Japan’s bubble."},
     {t:"It fixed the yen at 360 to the dollar.", why:"That rate applied from 1949 to 1971."},
     {t:"It created the World Trade Organization.", why:"The WTO was founded in 1995."},
     {t:"It ended negative interest rates in Japan.", why:"That happened in March 2024."}]},
   {id:"e4u4-q31", lesson:"e4u4-l4", level:1, q:"According to the 2025 census, what share of Japan’s population was aged 65 or over?", options:[
     {t:"29.4%", ok:true, why:"Correct, a record high (census of 1 October 2025)."},
     {t:"10.9%", why:"That is the share under 15."},
     {t:"38.7%", why:"That is the projected share for 2070 (IPSS 2023, medium variant)."},
     {t:"59.7%", why:"That is roughly the share aged 15 to 64."}]},
   {id:"e4u4-q32", lesson:"e4u4-l4", level:2, q:"Ana reads one source saying Japan had 3.84 million foreign residents and another saying 4.28 million. What is the most likely explanation?", options:[
     {t:"They are different counts: the 2025 census (1 October 2025) and the Immigration Services Agency’s count of residence-status holders (end of June 2026).", ok:true, why:"Right. Always say which count and date you use."},
     {t:"One of them must be a typing error.", why:"Both are official figures; they measure slightly different things at different dates."},
     {t:"The higher figure includes tourists.", why:"Neither figure counts short-term tourists."},
     {t:"The lower figure counts only children.", why:"The census figure counts foreign residents of all ages."}]},
   {id:"e4u4-q33", lesson:"e4u4-l4", level:3, q:"A columnist writes: “Japan’s birth rate is low because Japanese women don’t want families.” Which response best reflects the research?", options:[
     {t:"Research links low fertility to later marriage, costs of children, long working hours, insecure jobs and an unequal division of care work; the claim is unsupported.", ok:true, why:"Right. Scholars look at institutions and costs, not a single cultural cause."},
     {t:"The columnist is right; no other factors matter.", why:"That ignores well-documented economic and institutional factors."},
     {t:"Japan’s birth rate is actually among the highest in the world.", why:"Births and the fertility rate reached record lows in 2025."},
     {t:"Birth rates cannot be studied scientifically.", why:"Demographers study them with large datasets and surveys."}]},
   {id:"e4u4-q34", lesson:"e4u4-l4", level:2, q:"Which scheme is due to replace the Technical Intern Training Program, and when?", options:[
     {t:"Employment for Skill Development (育成就労), from 1 April 2027", ok:true, why:"Correct. It was enacted in 2024."},
     {t:"Specified Skilled Worker, from April 2019", why:"Specified Skilled Worker began in 2019 and continues alongside; it is not the replacement."},
     {t:"Special permanent residence, from 1991", why:"That status is for people from former colonies and their descendants."},
     {t:"Nikkeijin long-term residence, from 1990", why:"That route is for people of Japanese descent."}]},
   {id:"e4u4-q35", lesson:"e4u4-l4", level:2, q:"Sione wants to describe gender inequality in Japan accurately in a seminar. Which statement is best?", options:[
     {t:"In the WEF’s Global Gender Gap Report 2026 Japan ranked 117th of 145, close to parity on education and health but low on economic and political participation.", ok:true, why:"Right: a dated, sourced indicator with its parts."},
     {t:"Japanese women are naturally less interested in careers.", why:"A stereotype without evidence. Scholars examine the employment system, care work and policy."},
     {t:"Japan has no laws on gender equality.", why:"Japan has the Constitution’s Articles 14 and 24, the 1985 Equal Employment Opportunity Act and later laws."},
     {t:"Japan ranks last in the world on every measure of gender equality.", why:"Inaccurate: it ranks low overall, but its scores on education and health are close to parity."}]},
   {id:"e4u4-q36", lesson:"e4u4-l4", level:3, q:"A writer says the “lost decades” prove Japan’s economy failed completely. Which reply is most defensible?", options:[
     {t:"Growth was weak, but Japan stayed rich with low unemployment; measures per working-age person look better, while wages and job security look worse. The label depends on the measure.", ok:true, why:"Right. Good analysis specifies the measure."},
     {t:"Japan’s economy has grown faster than any other since 1990.", why:"That is false; growth was weak."},
     {t:"The lost decades never happened; it is a media invention.", why:"Weak growth, deflation and banking problems were real."},
     {t:"The lost decades were caused by the Japanese character.", why:"A cultural claim without evidence; economists point to bad loans, deflation and demographics."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u4-q37", lesson:"e4u4-l5", level:2, q:"A realist, a liberal and a constructivist each explain the Yoshida Doctrine. Which explanation is constructivist?", options:[
     {t:"Antimilitarist norms and identity built after defeat shaped Japan’s security choices.", ok:true, why:"Right: Katzenstein’s and Berger’s argument."},
     {t:"Japan rationally free-rode on a stronger ally’s protection.", why:"That is a realist reading."},
     {t:"Trade and institutions made economic growth the best route to security.", why:"That is closer to a liberal reading."},
     {t:"US pressure alone dictated every Japanese choice.", why:"That is a structural or “reactive state” claim, not constructivism."}]},
   {id:"e4u4-q38", lesson:"e4u4-l5", level:1, q:"Under Article 5 of the 1960 US–Japan treaty, what do the two countries commit to?", options:[
     {t:"Each will act to meet an armed attack against territories under Japan’s administration.", ok:true, why:"Correct. That is why the alliance is often described as asymmetric."},
     {t:"Japan will defend US territory anywhere in the world.", why:"The treaty does not commit Japan to defend US territory."},
     {t:"The US will withdraw all bases from Japan.", why:"Article 6 provides for US use of bases in Japan."},
     {t:"Japan will contribute troops to every US war.", why:"There is no such commitment."}]},
   {id:"e4u4-q39", lesson:"e4u4-l5", level:1, q:"In which year did Japan first become the world’s largest aid donor by volume?", options:[
     {t:"1989", ok:true, why:"Correct: Japan passed the United States with about US$9 billion in net ODA."},
     {t:"1954", why:"1954 is when Japan joined the Colombo Plan and its aid began."},
     {t:"1977", why:"1977 is the year of the Fukuda Doctrine."},
     {t:"2015", why:"2015 is when the Development Cooperation Charter was adopted."}]},
   {id:"e4u4-q40", lesson:"e4u4-l5", level:2, q:"Which is one of the three principles of the Fukuda Doctrine?", options:[
     {t:"Japan will be an equal partner of ASEAN and its members.", ok:true, why:"Correct. The others: no military-power role, and “heart-to-heart” trust."},
     {t:"Japan will lead a military alliance in Southeast Asia.", why:"The doctrine rejected a military role."},
     {t:"Japan will give aid only in exchange for bases.", why:"There is no such principle."},
     {t:"Japan will follow China’s lead in the region.", why:"Not part of the doctrine."}]},
   {id:"e4u4-q41", lesson:"e4u4-l5", level:3, q:"Priya’s draft says: “Dokdo is Korean territory, and Japan’s claim is absurd.” How should she revise it for a neutral seminar paper?", options:[
     {t:"Use both names (Takeshima / Dokdo), say South Korea administers the islands, and attribute each government’s claim to it.", ok:true, why:"Right. Neutral writing names, locates and attributes, without endorsing either side."},
     {t:"Replace it with “Takeshima is Japanese territory, and Korea’s claim is absurd.”", why:"That simply switches sides."},
     {t:"Leave it, because her view is widely shared.", why:"Popularity in one country doesn’t make a claim neutral."},
     {t:"Delete all mention of the islands.", why:"Avoiding the topic is not the same as treating it fairly; she may need it."}]},
   {id:"e4u4-q42", lesson:"e4u4-l5", level:2, q:"What does Iwabuchi Kōichi’s idea of “culturally odourless” exports suggest about Japan’s soft power?", options:[
     {t:"Some Japanese cultural products travelled well partly because they did not seem obviously Japanese, which complicates claims that they spread a national image.", ok:true, why:"Right. Popularity does not automatically become national influence."},
     {t:"Japanese products were unpopular abroad.", why:"Many were very popular; the question is what their popularity means."},
     {t:"Japan’s government designed all exports to hide their origin.", why:"Iwabuchi described how products travelled, not a government plan."},
     {t:"Soft power can be measured exactly by sales.", why:"Scholars stress that soft power is hard to measure."}]},
   {id:"e4u4-q43", lesson:"e4u4-l5", level:2, q:"Mei fears Japan could be dragged into a war that only its ally wants. Which alliance concept names this fear?", options:[
     {t:"Entrapment", ok:true, why:"Right: the fear of being pulled into an ally’s conflicts (Snyder 1984)."},
     {t:"Abandonment", why:"That is the opposite fear: that the ally will not help."},
     {t:"Bandwagoning", why:"Bandwagoning means joining a stronger side, not a fear within an alliance."},
     {t:"Soft power", why:"Soft power is about attraction, not alliance fears."}]},
   {id:"e4u4-q44", lesson:"e4u4-l5", level:3, q:"Since the 1990s, which corner of the Yoshida Doctrine has changed most, and how?", options:[
     {t:"“Light arms”: peacekeeping from 1992, limited collective self-defence from 2014–15 and the 2022 strategy with counterstrike capabilities.", ok:true, why:"Right. The alliance and economic priorities remain; the military role has grown."},
     {t:"The US alliance: Japan left it in 2015.", why:"Japan did not leave the alliance; it deepened."},
     {t:"Economy first: Japan stopped trading with Asia.", why:"Trade with Asia grew; Japan led the CPTPP in 2018."},
     {t:"None of them: Japan’s security policy has not changed since 1951.", why:"Several major changes are listed in this lesson."}]},
   {id:"e4u4-q45", lesson:"e4u4-l5", level:2, q:"Which statement about Japan’s statements on the wartime past is accurate?", options:[
     {t:"Japanese governments have issued statements of apology and remorse, including the Kōno Statement (1993) and the Murayama Statement (1995); whether they are sufficient is debated.", ok:true, why:"Accurate and neutral: it gives the facts and flags the debate."},
     {t:"Japan has never made any statement about the war.", why:"Several statements exist."},
     {t:"All of Japan’s neighbours have declared the history issues closed.", why:"The issues remain contested in the region."},
     {t:"The 2015 Japan–South Korea agreement ended all debate on the comfort-women issue.", why:"South Korea’s next government, under Moon Jae-in, judged the agreement flawed; debate continues."}]}
  ]
});
