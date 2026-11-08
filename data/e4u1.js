/* International Studies · Unit 1 (e4u1) · Global political history since 1900 */
ICA.addUnit({
  id:"e4u1", track:"e4", n:1, title:"Global political history since 1900", icon:"🕰️",
  blurb:"The history every international studies seminar takes for granted, told from many regions: the ranked world of empires around 1900, two world wars and the failed peace between them, the Cold War in Europe and in Asia, decolonisation and the Third World project, and the debates about the world since 1991.",
  goals:[
    "Describe the world of empires around 1900, explain how unequal treaties and the “standard of civilisation” ranked states, and explain why the Anglo-Japanese Alliance and the Russo-Japanese War mattered",
    "Explain the Paris settlement of 1919, the League of Nations and its mandates, the interwar crisis, and the Second World War in both Europe and the Asia-Pacific",
    "Analyse the Cold War as a global conflict: blocs, nuclear deterrence and arms control, the Chinese revolution, Korea, Vietnam, the San Francisco system, détente and the end of the Cold War",
    "Compare paths to independence, explain the Bandung Conference, non-alignment and the New International Economic Order, and summarise the debate about East Asia’s development states",
    "Describe the main events and debates since 1991 (unipolarity, globalisation, 9/11, the 2008 crisis, rising powers, the liberal international order) without taking sides",
    "Name the key historians and works in each period, say what they argue and who disagrees, and use them in seminar discussion"
  ],
  read:[
    {book:"owh2", where:"Chapters 9 “Expansion in the Industrial Age”, 11 “The War to End All Wars”, 12 “The Interwar Period”, 13 “The Causes and Consequences of World War II”, 14 “Cold War Conflicts” and 15 “The Contemporary World and Ongoing Challenges”", note:"A clear, global textbook narrative. Read the matching chapter after each lesson for more detail and primary sources; the lessons add the scholarly debates."},
    {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar)", note:"A short IR-centred overview of how the European state system spread and changed. Read it as a reminder of the primer before you start."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u1-l1", title:"The world around 1900: empires, industry and a ranked world", minutes:60,
   hook:{q:"By 1914, how many African states were still free of European colonial rule?", options:["None","Two","About ten","About twenty"], answer:1, reveal:"**Two: Ethiopia and Liberia.** Ethiopia had defeated an Italian invasion at Adwa in 1896, and Liberia, settled from the 1820s by free and formerly enslaved Black Americans, had been independent since 1847. Almost everywhere else, European powers had claimed the land within about thirty years. This lesson looks at the world of empires that every 20th-century story starts from, and at the rules that ranked some peoples above others."},
   goals:[
     "Describe how power was distributed around 1900: empires, industrial powers, and the few states outside Europe treated as equals",
     "Compare economic, strategic and ideological explanations of the “new imperialism”, naming the key works",
     "Explain how unequal treaties and extraterritoriality worked in Qing China, and how Meiji Japan escaped them",
     "Explain why the Anglo-Japanese Alliance (1902) and the Russo-Japanese War (1904–05) mattered far beyond East Asia",
     "Use the idea of a “standard of civilisation” to analyse who counted as a full member of international society"
   ],
   learn:[
    {h:"A snapshot of the world in 1900", body:[
      {lead:"Imagine a world map coloured by who rules each place. In 1900 a handful of colours cover most of it."},
      "The British Empire, the largest, stretched from Canada to India, Australia, New Zealand and much of Africa. France held most of West and North Africa and Indochina. The Netherlands ruled the islands that are now Indonesia, Portugal held Angola and Mozambique, and King Leopold II of Belgium personally owned the Congo Free State. On land, the Russian, Austro-Hungarian, Ottoman and Qing empires each ruled many peoples.",
      "Newcomers had joined: Germany and Italy had colonies in Africa (and Germany in the Pacific), in 1898 the United States took the Philippines and Puerto Rico from Spain and annexed Hawaii, and Japan had taken Taiwan in 1895.",
      "Unit 5 of the primer defined [[empire]] and [[colonialism]] ({{modern-international-system}}). Historians also use a wider word, [[imperialism]]: extending a state’s power over other peoples, either by **formal** rule (colonies) or by **informal** control through loans, trade privileges, “advisers” and gunboats.",
      "Behind the map lay industry. A second industrial revolution of steel, chemicals and electricity made Britain, the United States and Germany the leading economies; telegraphs, steamships and the Suez Canal (1869) tied the world together. Daniel Headrick’s *The Tools of Empire* (1981) shows how steamboats, quinine against malaria, and breech-loading rifles and machine guns let small European forces conquer huge territories.",
      "Strategists drew lessons too. Alfred Thayer Mahan’s *The Influence of Sea Power upon History* (1890), studied closely in Tokyo, Berlin and Washington, stressed navies and bases; Halford Mackinder’s “The Geographical Pivot of History” (1904) stressed the Eurasian “heartland”.",
      {key:"In 1900 most of the world’s people lived under empires, and power was measured in steel, ships and colonies."}
    ]},
    {h:"The scramble for Africa, and why it happened", body:[
      "Between about 1880 and 1914, European powers claimed almost the whole of Africa, a rush known as the [[scramble-for-africa|scramble for Africa]]. The Berlin Conference of 1884–85, which you met in the primer, set the rules among the outsiders.",
      "Conquest met resistance everywhere, from Adwa (1896) to the Maji Maji rising against German rule in East Africa (1905–07). Rule was often brutal. In the Congo Free State, forced rubber collection brought mutilation and mass death until international campaigns pushed Belgium to take the territory over in 1908. In German South West Africa (today’s Namibia), German forces killed tens of thousands of Herero and Nama people in 1904–08; in 2021 the German government acknowledged these killings as genocide.",
      "Why did this “new imperialism”, the wave from about the 1870s to 1914, happen? Scholars give four kinds of answer, and most combine them:",
      {table:[["Explanation","Main idea","Key works"],["Economic","Industrial economies sought raw materials, markets and places to invest surplus capital","J. A. Hobson, *Imperialism: A Study* (1902); V. I. Lenin, *Imperialism, the Highest Stage of Capitalism* (1917)"],["Strategic","Officials took territory to protect routes and rivals’ moves, such as Britain’s route to India through Egypt","Ronald Robinson and John Gallagher, *Africa and the Victorians* (1961)"],["Ideological","Missionaries, racial theories and national prestige presented empire as a duty, a “civilising mission”","Many writers of the time; critiqued by postcolonial scholars"],["Local crises","Conflicts on the frontier and ambitious “men on the spot” pulled distant capitals in","Robinson and Gallagher again"]]},
      "In “The Imperialism of Free Trade” (1953), Gallagher and Robinson also argued that empire was a continuum: Britain preferred informal influence through trade and loans, and annexed territory only when that failed. The idea of **informal empire** is still used in seminars, including for later periods."
    ]},
    {h:"Qing China and the unequal treaties", body:[
      {lead:"Imagine a foreigner commits a crime in your city, but your courts may not try him. Only a court run by his own country’s consul can."},
      "That was [[extraterritoriality]], and it was one part of the [[unequal-treaty|unequal treaties]] imposed on Qing China. After Britain won the First Opium War (1839–42), the Treaty of Nanjing (1842) opened five “treaty ports” to foreign trade, ceded Hong Kong Island to Britain and fixed China’s tariffs. Later treaties added extraterritoriality and “most-favoured-nation” clauses, so a privilege won by one power went to all. A second war (1856–60) widened them.",
      "China also lost the neighbours that had long sent missions to its court: France took Vietnam in the 1880s, and in the Sino-Japanese War of 1894–95 Japan defeated China. The Treaty of Shimonoseki (1895) ceded Taiwan to Japan, recognised Korea’s independence from the Qing and imposed a heavy indemnity. Russia, France and Germany then forced Japan to hand back the Liaodong peninsula, and in 1898 the powers seized leased territories along China’s coast.",
      "In 1900 the Boxers, an anti-foreign and anti-Christian movement now backed by the Qing court, besieged the foreign legations in Beijing until an eight-nation force, including Japan and Russia, relieved them. The Boxer Protocol (1901) imposed a vast indemnity and allowed foreign troops in the capital. Reforms followed, but revolution broke out in 1911; the Republic of China was proclaimed on 1 January 1912, and the last emperor abdicated weeks later.",
      "Chinese political writing later called the period from 1839 to 1949 a **“century of humiliation”**. The political scientist Zheng Wang, in *Never Forget National Humiliation* (2012), shows how that memory is taught today and why it matters for China’s foreign policy."
    ]},
    {h:"Meiji Japan joins the club", body:[
      "Japan faced the same pressure. After the American commodore Matthew Perry’s visits in 1853–54, Japan signed treaties in 1858 that gave foreigners extraterritoriality and fixed low tariffs. In 1868 a group of young samurai leaders overthrew the Tokugawa shogunate in the name of the emperor: the [[meiji-restoration|Meiji Restoration]].",
      "The new leaders’ slogan was “rich country, strong army” ([富国強兵]{ふこくきょうへい}). They sent the Iwakura Mission to study the United States and Europe (1871–73), introduced conscription (1873), built railways and factories, wrote legal codes on European models and adopted a constitution (1889). One purpose was to prove Japan “civilised” in European eyes and so regain full sovereignty. It worked: extraterritoriality ended in 1899 and Japan regained full control of its tariffs in 1911.",
      "Japan also built an empire: Taiwan in 1895, a protectorate over Korea in 1905 and annexation of Korea in 1910. (Unit 4 looks at Meiji state-building from inside Japan.)",
      "On 30 January 1902 Britain and Japan signed the [[anglo-japanese-alliance|Anglo-Japanese Alliance]]. If either fought one other power over China or Korea, its partner would stay neutral; if a second power joined in, the partner would come to its aid. Both feared Russia: Britain wanted help in East Asia, and Japan backing in its rivalry with Russia over Korea. It is often described as the first alliance on equal terms between a European great power and an Asian state. It was renewed in 1905 and 1911 and replaced by the Four-Power Treaty of 1921, lapsing in 1923.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="u1m1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path class="d-inkf" d="M0,0L8,4L0,8z"/></marker></defs><text x="170" y="20" text-anchor="middle">International law’s ranks, c. 1900</text><rect class="d-sage" x="10" y="34" width="250" height="78" rx="8" stroke-width="2"/><text x="22" y="58">Full members (“civilised”)</text><text class="s" x="22" y="80">European powers, the US, Latin</text><text class="s" x="22" y="98">American republics; Japan from 1899</text><rect class="d-gold" x="10" y="128" width="250" height="96" rx="8" stroke-width="2"/><text x="22" y="152">Partly recognised</text><text class="s" x="22" y="174">Qing China, Ottoman Empire,</text><text class="s" x="22" y="192">Siam, Persia: unequal treaties,</text><text class="s" x="22" y="210">foreigners tried in own courts</text><rect class="d-rose" x="10" y="240" width="250" height="78" rx="8" stroke-width="2"/><text x="22" y="264">Not recognised as states</text><text class="s" x="22" y="286">Most of Africa, South and Southeast</text><text class="s" x="22" y="304">Asia, the Pacific: open to conquest</text><path class="d-ink" d="M300 196 L300 122" stroke-width="2" fill="none" marker-end="url(#u1m1)"/><text class="s" x="336" y="150" text-anchor="end">treaty</text><text class="s" x="336" y="166" text-anchor="end">revision</text><text class="s" x="170" y="338" text-anchor="middle">Japan moved up by treaty revision (1899, 1911);</text><text class="s" x="170" y="354" text-anchor="middle">China only in 1943. Labels from legal writers then.</text></svg>', alt:"Three stacked bands. Top band, full members called civilised: European powers, the United States, Latin American republics, and Japan from 1899. Middle band, partly recognised: Qing China, the Ottoman Empire, Siam and Persia, bound by unequal treaties under which foreigners were tried in their own courts. Bottom band, not recognised as states: most of Africa, South and Southeast Asia and the Pacific, treated as open to conquest. An arrow labelled treaty revision points from the middle band to the top band. A note says Japan moved up by treaty revision in 1899 and 1911, China only in 1943, and that the labels come from legal writers of the time.", cap:"How 19th-century international lawyers ranked the world. The labels describe their views, not facts about peoples."}
    ]},
    {h:"The Russo-Japanese War, 1904–05", body:[
      "Russia and Japan both wanted Manchuria and Korea. In February 1904 Japan’s navy attacked the Russian fleet at Port Arthur (Lüshun) two days before declaring war. Japan took Port Arthur after a long siege, won the huge land battle of Mukden in early 1905, and on 27–28 May 1905 destroyed Russia’s Baltic Fleet at Tsushima after it had sailed halfway round the world.",
      "With both sides exhausted, US president Theodore Roosevelt mediated the **Treaty of Portsmouth**, signed in New Hampshire on 5 September 1905, and won the 1906 Nobel Peace Prize for it. Japan gained Russia’s lease on the Liaodong peninsula, the southern Manchurian railway, the southern half of Sakhalin and a free hand in Korea, but no war indemnity. Angry crowds rioted in Tokyo.",
      "The war’s meaning depended on where you stood:",
      {list:[
        "**Across much of Asia and the Middle East**, nationalists read it as proof that a non-European state could defeat a European great power. Pankaj Mishra’s *From the Ruins of Empire* (2012) opens with reactions from Egypt to India and China.",
        "**In Russia**, defeat helped trigger the revolution of 1905.",
        "**In Korea**, it meant the loss of independence: a Japanese protectorate in 1905, then annexation in 1910.",
        "**For military observers**, trenches, machine guns and huge casualties at Port Arthur and Mukden foreshadowed 1914. Some historians call it “World War Zero”."
      ]},
      {key:"The same victory looked like liberation from one place and like a new empire from another. Asking “for whom?” is a core seminar habit."}
    ]},
    {h:"The “standard of civilisation”", body:[
      "International law around 1900 described itself as the law among “civilised nations”. The Scottish jurist James Lorimer, writing in the 1880s, divided humanity into “civilised”, “barbarous” and “savage” peoples, with full, partial or no political recognition (the diagram above).",
      "In *The Standard of “Civilization” in International Society* (1984), the political scientist Gerrit Gong reconstructed the test. To be treated as an equal, a state had to protect foreigners’ lives, liberty and property; run an organised government able to defend itself; have courts and published laws that Europeans trusted; keep regular diplomatic relations and follow international law, including the laws of war; and conform to European social norms, such as banning slavery.",
      "The [[standard-of-civilisation|standard of civilisation]] explains much of this lesson. Japan “passed” and won treaty revision. Siam (today’s Thailand) reformed its laws and renegotiated its treaties step by step. The Ottoman capitulations, old privileges for foreigners, were abolished by the Treaty of Lausanne in 1923. China’s unequal treaties ended only in 1943, when the United States and Britain gave up extraterritoriality during the Second World War. Colonised peoples weren’t candidates at all.",
      "Hedley Bull and Adam Watson’s edited volume *The Expansion of International Society* (1984), an English School classic ({{english-school}}), told how a European society of states spread worldwide. Shogo Suzuki’s *Civilization and Empire* (2009) adds that Japan learned both faces of that society: equality among members, and colonising those outside.",
      "Critics at the time saw the hierarchy clearly. At the first Pan-African Conference in London in 1900, W. E. B. Du Bois declared that “the problem of the twentieth century is the problem of the color-line”, words he repeated in *The Souls of Black Folk* (1903).",
      {warn:"Words such as “civilised” and “savage” appear here only to show how people thought then. They describe a hierarchy built by the powerful, not facts about anyone."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Asia and Africa were passive while Europe acted.","Qing reformers, Meiji leaders, Siam’s kings, Ethiopia’s armies and countless resisters made choices that shaped outcomes."],["Japan’s rise was simply “Westernisation”.","Its leaders adapted foreign models selectively, and Japan built an empire of its own."],["International law in 1900 was neutral.","It openly ranked peoples and justified unequal treaties and colonies."]]},
      {terms:["imperialism","scramble-for-africa","extraterritoriality","unequal-treaty","meiji-restoration","anglo-japanese-alliance","standard-of-civilisation"]}
    ]}
   ],
   try:[
    {id:"e4u1-l1-x1", type:"sort", q:"Each statement explains the late 19th-century “new imperialism”. Sort it by the **kind** of explanation it gives.", buckets:["Economic","Strategic","Ideological"], items:[
      {t:"Investors with surplus capital at home sought higher profits in railways and mines abroad.", b:0, why:"This is Hobson’s argument (1902): imperialism followed money looking for returns."},
      {t:"Britain occupied Egypt in 1882 to secure the Suez Canal route to India.", b:1, why:"Protecting a route and a rival-free zone is a strategic reason, the core of Robinson and Gallagher’s account."},
      {t:"Missionary societies and officials claimed a duty to bring “civilisation” to others.", b:2, why:"A belief that empire was a moral duty is an ideological explanation."},
      {t:"Factories needed rubber, cotton and palm oil from the tropics.", b:0, why:"Demand for raw materials is an economic reason."},
      {t:"Each power feared that if it didn’t claim a territory, a rival would.", b:1, why:"Pre-empting rivals is strategic competition, not profit or ideas."},
      {t:"Racial theories ranked peoples and presented rule over others as natural.", b:2, why:"Ideas about race and hierarchy are ideological justifications."}
    ]},
    {id:"e4u1-l1-x2", type:"mcq", q:"In 1880 a British sailor is accused of assault in Shanghai. Under the treaties then in force, which court tries him?", options:[
      {t:"A British consular court, not a Chinese one", ok:true, why:"Right. That is extraterritoriality: foreigners from treaty powers were tried by their own consuls’ courts, one of the main features of the unequal treaties."},
      {t:"A Chinese magistrate’s court, as for anyone in China", why:"That is what sovereignty would normally mean, but the unequal treaties removed treaty-power nationals from Chinese courts."},
      {t:"The International Court of Justice", why:"The ICJ dates from 1945 and hears cases between states, not criminal cases against individuals."},
      {t:"A mixed jury chosen by the League of Nations", why:"The League didn’t exist until 1920, and it never ran courts for individuals."}
    ]},
    {id:"e4u1-l1-x3", type:"order", q:"Put these East Asian events in time order, earliest first.", items:[
      {t:"The Treaty of Nanjing opens five treaty ports", why:"1842, after the First Opium War."},
      {t:"The Meiji Restoration", why:"1868."},
      {t:"The Treaty of Shimonoseki ends the Sino-Japanese War", why:"1895: China cedes Taiwan to Japan."},
      {t:"Extraterritoriality ends in Japan", why:"1899, when the revised treaties (the first signed with Britain in 1894) took effect."},
      {t:"The Anglo-Japanese Alliance is signed", why:"30 January 1902."},
      {t:"The Treaty of Portsmouth ends the Russo-Japanese War", why:"5 September 1905."},
      {t:"Japan annexes Korea", why:"1910."},
      {t:"The Republic of China is proclaimed", why:"1 January 1912, after the 1911 revolution."}
    ]},
    {id:"e4u1-l1-x4", type:"match", q:"Match each term to the example that fits it best.", pairs:[
      ["Unequal treaty","The Treaty of Nanjing (1842) fixing China’s tariffs and opening treaty ports","Imposed after defeat, it limited China’s control of its own trade."],
      ["Extraterritoriality","Foreigners tried only by their own consuls’ courts","Exemption from local courts was the clearest sign of unequal status."],
      ["Protectorate","Korea after 1905, its foreign affairs run by Japan","A protectorate keeps a local ruler but hands key powers to the protecting state."],
      ["Informal empire","Influence through loans, trade privileges and gunboats, without annexation","Gallagher and Robinson’s term for control short of formal rule."],
      ["Alliance","Britain and Japan’s 1902 pledge of neutrality or aid in war","An alliance is a formal promise of military support between states."]
    ]},
    {id:"e4u1-l1-x5", type:"mcq", q:"Why do historians say Japan’s victory over Russia in 1905 mattered **far beyond** East Asia?", options:[
      {t:"Many nationalists across Asia and the Middle East read it as proof that a non-European state could defeat a European great power.", ok:true, why:"Right. Reactions from Egypt to India and China celebrated it, even though it also made Japan an empire in Korea."},
      {t:"It ended imperialism in Asia.", why:"It didn’t: Japan itself took control of Korea, and European empires in Asia lasted decades longer."},
      {t:"It led directly to the founding of the League of Nations.", why:"The League came in 1920, after the First World War."},
      {t:"Russia lost all of Siberia to Japan.", why:"Japan gained the southern half of Sakhalin, a lease in Liaodong and a railway, not Siberia."}
    ]},
    {id:"e4u1-l1-x6", type:"spot", q:"Kenji drafted a paragraph for a seminar. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"Japan ended extraterritoriality in 1899 and regained tariff autonomy in 1911.", flag:false, why:"Correct: treaty revision came in two steps."},
      " ",
      {t:"The Anglo-Japanese Alliance of 1902 made Japan a British protectorate.", flag:true, why:"Wrong. It was an alliance between equals, often described as the first between a European great power and an Asian state."},
      " ",
      {t:"Theodore Roosevelt mediated the 1905 Treaty of Portsmouth.", flag:false, why:"Correct, and he won the 1906 Nobel Peace Prize for it."},
      " ",
      {t:"By 1914 most of Africa was still independent.", flag:true, why:"Wrong. By 1914 only Ethiopia and Liberia were free of European rule."},
      " ",
      {t:"The Boxer Protocol of 1901 required China to pay a large indemnity.", flag:false, why:"Correct."},
      " ",
      {t:"The “standard of civilisation” was applied in the same way to every people.", flag:true, why:"Wrong. It ranked peoples: some states could earn full membership by reforms, while colonised peoples weren’t considered at all."}
    ]},
    {id:"e4u1-l1-x7", type:"mcq", q:"In the early 20th century Siam’s government issued new legal codes and reformed its courts, and asked foreign powers to give up their special legal privileges. Which idea from this lesson best explains the strategy?", options:[
      {t:"Meeting the “standard of civilisation” to win recognition as a full, equal member of international society", ok:true, why:"Right. Like Japan before it, Siam reformed its laws so that the powers would accept ending extraterritoriality."},
      {t:"Informal empire", why:"Informal empire describes the powers’ control over Siam, not Siam’s strategy for escaping it."},
      {t:"The scramble for Africa", why:"That is about the partition of Africa, not about Siam’s treaty revision."},
      {t:"Collective security", why:"Collective security means states jointly resisting aggression; it isn’t about legal reforms to end unequal treaties."}
    ]}
   ],
   apply:{
    intro:"Work with primary sources and with the way history is told. Use free, reputable sources such as national archives, university collections and encyclopaedias, and note where each comes from.",
    tasks:[
     {t:"Read the Anglo-Japanese Alliance of 1902", how:[
       "Search for the text of the “Anglo-Japanese Agreement” of 30 January 1902 in a university or archive document collection. It is only six short articles.",
       "Note what each side promised, and what the agreement says about China and Korea.",
       "Write one sentence on what it tells you about how great powers saw East Asia in 1902."
     ], write:"Britain promised… Japan promised… What it says about China and Korea… What it shows…"},
     {t:"One war, two tellings", how:[
       "Find two short accounts of the Russo-Japanese War written from different countries or in different languages (for example, an encyclopaedia entry from two countries, or a museum page and a textbook).",
       "List what each emphasises: battles, diplomacy, Korea, the effect on Asia, the 1905 revolution in Russia.",
       "Don’t decide which is “right”. Note what each leaves out."
     ], write:"Account 1 (source, country)… emphasises… leaves out… Account 2… emphasises… leaves out…"},
     {t:"Draw your own ranked world", how:[
       "Pick one region you know: Southeast Asia, West Africa, the Pacific, South America or another.",
       "Sketch, on paper, which places around 1900 were independent, partly recognised under unequal treaties, or colonies, and who ruled them.",
       "Check two places you are unsure about in a reputable reference work."
     ], write:"Region… Independent… Partly recognised… Colonies, and who ruled them… What I had to check…"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (about 150 words) you could say in a seminar.",
       "1. Was the “new imperialism” driven more by economics or by strategy? Use one African and one Asian example.",
       "2. Why did Japan escape the unequal treaties while China did not until 1943?",
       "3. Is “standard of civilisation” a useful idea for understanding international politics today? What would its critics say?"
     ], write:"Question chosen… My argument… Evidence… What someone who disagrees would say…"}
    ],
    proof:"Notes on the 1902 alliance text, a comparison of two accounts of the Russo-Japanese War, a sketch of one region around 1900, and a seminar paragraph with an argument, evidence and a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 9 “Expansion in the Industrial Age”, sections 9.1 “The Second Industrial Revolution” (which includes Meiji Japan), 9.2 “Motives and Means of Imperialism”, 9.3 “Colonial Empires” and 9.4 “Exploitation and Resistance”", note:"Read it after this lesson for more detail on Africa, the Congo Free State and resistance, with primary sources."},
    {book:"eir", where:"Chapter 1 “The Making of the Modern World” (Erik Ringmar), section “The Europeans and the rest of the world”", note:"A short IR view of how the European state system spread through empire."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u1-l2", title:"1914–1945: world wars and the failed peace", minutes:65,
   hook:{q:"At the 1919 peace conference, Japan proposed adding a statement of racial equality to the founding document of the League of Nations. What happened?", options:["It was adopted unanimously","Most delegates on the commission voted for it, but the chair ruled that it needed unanimity, so it was left out","Japan withdrew it before any vote","It was adopted but never applied"], answer:1, reveal:"**A majority voted for it, and it was still left out.** On 11 April 1919, 11 of the 17 delegates present on the League of Nations Commission voted for Japan’s amendment. The chair, US president Woodrow Wilson, ruled that such an important change needed unanimity, because the British Empire delegation, pressed by Australia, strongly opposed it. This lesson follows the peace that came out of Paris, why it failed, and the second, even larger war that followed."},
   goals:[
     "Explain why the First World War is called both a total war and a global war",
     "Describe the Paris settlement and the main debates about it, including how it looked from Asia",
     "Explain how collective security, the League of Nations and the mandate system were meant to work, and where they succeeded and failed",
     "Explain the interwar crisis: the Great Depression, fascism and Japan’s expansion in Asia from 1931",
     "Outline the Second World War in Europe and in the Asia-Pacific, and the main debates historians still have about it"
   ],
   learn:[
    {h:"A total and global war, 1914–18", body:[
      "The primer explained why war broke out in 1914 ({{causes-of-war}}).",
      "The First World War became a [[total-war|total war]]: states mobilised whole societies, not just armies, running economies, rationing food, conscripting millions and using propaganda, and blurring the line between soldiers and civilians.",
      "It was also global, because empires mobilised their colonies. More than a million Indian soldiers served overseas, France recruited soldiers across West and North Africa, and Britain and France brought about 140,000 Chinese labourers to work behind the lines.",
      "Japan, as Britain’s ally, declared war on Germany in August 1914, took Germany’s leased territory at Qingdao in Shandong and its Pacific islands north of the equator, and in 1915 pressed “Twenty-One Demands” on China. The Ottoman Empire fought beside Germany; from 1915 Ottoman authorities deported and killed Armenians on a mass scale, which most genocide scholars call a genocide, a term the Turkish government rejects.",
      "In 1917 the United States entered the war and revolution swept Russia. Fighting ended with the [[armistice]] of 11 November 1918. According to Britannica, some 8.5 million soldiers died, and perhaps as many as 13 million civilians. Four empires fell: the German, Austro-Hungarian, Russian and Ottoman. Eric Hobsbawm ({{eric-hobsbawm}}) later called 1914–1991 the “short twentieth century”.",
    ]},
    {h:"The Paris settlement", body:[
      "The peace conference opened in Paris in January 1919, dominated by the United States, Britain, France and Italy, with Japan as the fifth main power. The defeated states weren’t allowed to negotiate.",
      "The **Treaty of Versailles** with Germany was signed on 28 June 1919. Germany lost about 13 percent of its European territory (and a tenth of its population) and all its colonies, and its army was capped at 100,000 men. Article 231 stated Germany’s responsibility for the war’s loss and damage, the legal basis for reparations, set in 1921 at 132 billion gold marks. Other treaties dealt with Austria, Bulgaria, Hungary and the Ottoman Empire, whose Treaty of Sèvres (1920) was replaced, after Turkey’s war of independence, by Lausanne (1923).",
      "Was the peace to blame for what came next? Seminars still argue:",
      {table:[["View","Who argues it","Main claim"],["Too harsh","John Maynard Keynes, *The Economic Consequences of the Peace* (1919)","Reparations would ruin Germany and Europe; he called it a “Carthaginian peace”"],["A hard task, later mishandled","Margaret MacMillan, *Peacemakers* (2001)","The peacemakers faced impossible choices; the road to 1939 ran through decisions made in the 1920s and 1930s"],["The missing hegemon","Adam Tooze, *The Deluge* (2014)","The war made the United States central to the world order, but it declined to underwrite the peace"]]},
      "A common verdict combines them: too harsh to accept, too weak to enforce."
    ]},
    {h:"The view from Asia: Shandong, May Fourth and racial equality", body:[
      "Many colonised peoples heard Wilson’s talk of self-determination as a promise (Erez Manela’s “Wilsonian moment”, from the primer). In Asia it soon broke.",
      "The peacemakers gave Germany’s rights in Shandong to Japan rather than back to China. On 4 May 1919 students in Beijing protested, starting the **May Fourth Movement**, a wave of nationalism and new thought that helped produce the Chinese Communist Party (1921). China refused to sign the treaty. In Korea, the March First Movement of 1919 declared independence from Japan and was suppressed.",
      "Japan, meanwhile, sought recognition as an equal great power. On 13 February 1919 it proposed adding racial equality to the League’s Covenant: the [[racial-equality-proposal|Racial Equality Proposal]]. On 11 April a softer version, on the “equality of nations and just treatment of their nationals”, won 11 of the 17 votes on the League of Nations Commission, but Wilson, in the chair, ruled that unanimity was needed. The main opposition came from the British Empire delegation, pressed by Australia’s prime minister Billy Hughes, who saw a threat to the White Australia policy.",
      "Naoko Shimazu (*Japan, Race and Equality*, 1998) shows that Japan sought great-power status and protection for its emigrants, not equality for its own colonial subjects in Korea and Taiwan; still, the rejection fed lasting resentment.",
      {key:"Paris spoke of self-determination and equality but applied them selectively. That gap shaped Asian and African nationalism for decades."}
    ]},
    {h:"The League, collective security and the mandates", body:[
      {lead:"Picture a neighbourhood where every household promises to come running if anyone breaks into any house, even if the burglar is one of the neighbours."},
      "That is [[collective-security|collective security]]: all members treat aggression against one as an attack on all, unlike an alliance, which faces a known outside threat. In the Covenant, members promised to respect each other’s territory and independence (Article 10) and to cut trade with any member that went to war in breach of the Covenant (Article 16).",
      "The League began work on 10 January 1920; the United States never joined. It settled smaller disputes, such as the Åland Islands between Sweden and Finland (1921), issued “Nansen passports” (1922) so stateless refugees could travel, and fought epidemics. But it relied on members to act, and great powers often wouldn’t.",
      "The League also ran the [[mandate-system|mandate system]] (Article 22). Germany’s colonies and the Ottoman Empire’s Arab provinces were handed to victors to administer as “a sacred trust of civilisation”: A mandates such as Iraq and Syria, meant for early independence; B mandates in Africa such as Tanganyika; and C mandates such as South West Africa and Pacific islands, including Japan’s “South Seas Mandate” in Micronesia.",
      "Susan Pedersen’s *The Guardians* (2015) argues that the mandates didn’t end empire but put it under international scrutiny, which colonised petitioners learned to use.",
      "Outside the League, the Washington Naval Conference (1921–22) capped battleship fleets at 5:5:3 for the United States, Britain and Japan, replaced the Anglo-Japanese Alliance and pledged respect for China’s sovereignty: the “Washington system”, in the phrase of historians such as Akira Iriye. In 1928 the Kellogg–Briand Pact renounced war “as an instrument of national policy”.",
    ]},
    {h:"The interwar crisis: Depression, fascism and expansion", body:[
      "The [[great-depression|Great Depression]] began with the Wall Street crash of October 1929. American lending dried up, banks failed across central Europe, and commodity prices collapsed, hitting colonies and exporters such as Japan (silk) and Brazil (coffee). The value of world trade fell by about two-thirds between 1929 and 1933 as states raised tariffs and retreated into blocs.",
      "In *The World in Depression, 1929–1939* (1973) the economic historian Charles Kindleberger argued that the slump was so deep because no country acted as a stabiliser: Britain could not, and the United States would not. That became one root of **hegemonic stability theory** in IR.",
      "[[fascism|Fascism]] took power in Italy under Benito Mussolini in 1922, and the Nazis in Germany when Adolf Hitler became chancellor in January 1933. Scholars define it differently: Roger Griffin (*The Nature of Fascism*, 1991) by a myth of national rebirth, Robert Paxton (*The Anatomy of Fascism*, 2004) by what fascist movements did. Whether imperial Japan was fascist is debated; many historians prefer “militarism”, since no mass fascist party took power there.",
      "On 18 September 1931 officers of Japan’s Kwantung Army staged an explosion on a Japanese-owned railway near Mukden (Shenyang), blamed Chinese troops, and occupied Manchuria. Japan set up Manchukuo in 1932 and left the League in 1933 after it adopted the critical Lytton Report. Full-scale war with China began after a clash at the Marco Polo Bridge on 7 July 1937. When Japanese forces took Nanjing in December 1937 they killed large numbers of prisoners and civilians and committed mass rape. Historians agree a mass atrocity took place; the death toll is disputed, with scholarly estimates from tens of thousands to over 200,000, and China’s official figure 300,000.",
      "In Europe, Italy invaded Ethiopia in 1935; the League’s sanctions excluded oil and failed. Germany rearmed and annexed Austria (1938), and at Munich in September 1938 Britain and France accepted its takeover of Czechoslovakia’s Sudetenland, the high point of [[appeasement]]. Once condemned outright, it is now often explained by how unready Britain and France felt.",
    ]},
    {h:"The Second World War in Europe and the Asia-Pacific", body:[
      {fig:'<svg viewBox="0 0 340 474"><text x="121" y="28" text-anchor="middle">Europe and Africa</text><text x="265" y="28" text-anchor="middle">Asia-Pacific</text><rect class="d-panel" x="52" y="40" width="138" height="404" rx="6"/><rect class="d-panel" x="196" y="40" width="138" height="404" rx="6"/><rect class="d-gold" x="56" y="326" width="130" height="36" rx="4"/><rect class="d-gold" x="200" y="246" width="130" height="36" rx="4"/><text x="26" y="64" text-anchor="middle">1914</text><text class="s" x="60" y="60">War in Europe,</text><text class="s" x="60" y="76">then worldwide</text><text class="s" x="204" y="60">Japan takes</text><text class="s" x="204" y="76">Qingdao</text><text x="26" y="104" text-anchor="middle">1919</text><text class="s" x="60" y="100">Versailles;</text><text class="s" x="60" y="116">League (1920)</text><text class="s" x="204" y="100">Shandong to</text><text class="s" x="204" y="116">Japan; May Fourth</text><text x="26" y="144" text-anchor="middle">1929</text><text class="s" x="60" y="140">Great Depression</text><text class="s" x="60" y="156">begins</text><text class="s" x="204" y="140">Silk, rice, rubber</text><text class="s" x="204" y="156">prices collapse</text><text x="26" y="184" text-anchor="middle">1931</text><text class="s" x="204" y="180">Japan seizes</text><text class="s" x="204" y="196">Manchuria</text><text x="26" y="224" text-anchor="middle">1935</text><text class="s" x="60" y="220">Italy invades</text><text class="s" x="60" y="236">Ethiopia</text><text x="26" y="264" text-anchor="middle">1937</text><text class="s" x="204" y="260">Full-scale war</text><text class="s" x="204" y="276">Japan–China</text><text x="26" y="304" text-anchor="middle">1938</text><text class="s" x="60" y="300">Munich</text><text class="s" x="60" y="316">agreement</text><text x="26" y="344" text-anchor="middle">1939</text><text class="s" x="60" y="340">Germany invades</text><text class="s" x="60" y="356">Poland</text><text x="26" y="384" text-anchor="middle">1941</text><text class="s" x="60" y="380">Germany invades</text><text class="s" x="60" y="396">the USSR</text><text class="s" x="204" y="380">Pearl Harbor,</text><text class="s" x="204" y="396">Malaya, Hong Kong</text><text x="26" y="424" text-anchor="middle">1945</text><text class="s" x="60" y="420">Germany</text><text class="s" x="60" y="436">surrenders, May</text><text class="s" x="204" y="420">Atomic bombs;</text><text class="s" x="204" y="436">surrender, Aug–Sep</text><text class="s" x="170" y="466" text-anchor="middle">Shaded: when “the war” began, by region.</text></svg>', alt:"A timeline from 1914 to 1945 in two columns, Europe and Africa on the left and the Asia-Pacific on the right. 1914: war in Europe, then worldwide; Japan takes Qingdao. 1919: Versailles and the League; Shandong given to Japan and the May Fourth protests. 1929: the Great Depression begins; silk, rice and rubber prices collapse. 1931: Japan seizes Manchuria. 1935: Italy invades Ethiopia. 1937, shaded: full-scale war between Japan and China. 1938: the Munich agreement. 1939, shaded: Germany invades Poland. 1941: Germany invades the USSR; Pearl Harbor, Malaya and Hong Kong are attacked. 1945: Germany surrenders in May; atomic bombs and Japan’s surrender in August and September. The shading shows that the war began at different times in different regions.", cap:"Two wars that merged in 1941. In China, the war began in 1937 (some date it from 1931); in Europe, in 1939."},
      "**In Europe**, Germany invaded Poland on 1 September 1939, nine days after a pact with the Soviet Union, and Britain and France declared war. On 22 June 1941 Germany invaded the Soviet Union, where most of the fighting and dying in Europe took place, and it surrendered in May 1945. The [[holocaust|Holocaust]] was “the systematic, state-sponsored persecution and murder of six million Jews” by Nazi Germany and its collaborators, in the US Holocaust Memorial Museum’s words; the regime also murdered Roma, disabled people, Soviet prisoners of war and many others.",
      "**In the Asia-Pacific**, Japan joined Germany and Italy in the Tripartite Pact (1940) and moved into French Indochina; the United States, Britain and the Netherlands cut off its oil. On 7–8 December 1941 Japan attacked Pearl Harbor, Malaya, Hong Kong and the Philippines, and proclaimed a “Greater East Asia Co-Prosperity Sphere”. Occupation brought forced labour (as on the Burma–Thailand railway), massacres, famine and military brothels whose victims are known as “comfort women”; in the 1993 Kōno Statement Japan’s government acknowledged the military’s involvement and apologised, while disputes over responsibility and redress continue.",
      "On 6 August 1945 the United States dropped an atomic bomb on Hiroshima; the city estimates about 140,000 people had died by the end of 1945. The Soviet Union declared war on Japan on 8 August, and on 9 August a second bomb hit Nagasaki, where 73,884 had died by the end of 1945, by the city’s count. Japan announced surrender on 15 August and signed on 2 September. Why it surrendered when it did is debated: Tsuyoshi Hasegawa’s *Racing the Enemy* (2005) argues that Soviet entry was at least as decisive as the [[atomic-bombings|atomic bombings]].",
      "Estimates of total deaths vary widely: Britannica gives 35 to 60 million, and others are higher; the US National WWII Museum estimates about 20 million deaths in China and 24 million in the Soviet Union.",
      "Victors held [[war-crimes-tribunals|war crimes tribunals]] at Nuremberg (1945–46) and Tokyo (1946–48), adding charges of crimes against peace and [[crimes-against-humanity|crimes against humanity]]; critics called them “victors’ justice”, and the Indian judge Radhabinod Pal dissented at Tokyo. To avoid the interwar failures, the victors built the Bretton Woods institutions (1944) and the United Nations (1945), with a veto to keep great powers inside ({{bretton-woods-institutions}}, {{united-nations}}).",
      {warn:"Names matter: “the Pacific War” can hide the war in China and Southeast Asia, so many scholars say “Asia-Pacific War”; some in Japan say “Fifteen Years’ War”, counting from 1931. Say which period you mean."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["The Second World War began everywhere in 1939.","In China full-scale war began in 1937, and Japan’s occupation of Manchuria in 1931."],["The atomic bombs alone ended the war, as all historians agree.","Many historians give Soviet entry into the war an equal or greater role; the debate continues."]]},
      {terms:["total-war","armistice","racial-equality-proposal","collective-security","mandate-system","great-depression","fascism","appeasement","holocaust","atomic-bombings","war-crimes-tribunals"]}
    ]}
   ],
   try:[
    {id:"e4u1-l2-x1", type:"mcq", q:"In 1916 a government rations bread, sends women to work in shell factories, censors newspapers and blockades its enemy’s ports to cut off food. Which concept do these measures illustrate?", options:[
      {t:"Total war", ok:true, why:"Right. Total war mobilises the whole society and economy, and blurs the line between soldiers and civilians."},
      {t:"Collective security", why:"Collective security is a promise by all members to resist aggression together, not a way of mobilising one society."},
      {t:"Appeasement", why:"Appeasement means making concessions to avoid war; these are measures for fighting one."},
      {t:"An armistice", why:"An armistice is an agreement to stop fighting."}
    ]},
    {id:"e4u1-l2-x2", type:"match", q:"Match each agreement to what it did.", pairs:[
      ["Treaty of Versailles (1919)","Capped Germany’s army, took its colonies and set the basis for reparations","Article 231 stated Germany’s responsibility for the war’s loss and damage."],
      ["Treaty of Lausanne (1923)","Replaced the Treaty of Sèvres after Turkey’s war of independence","Lausanne also abolished the old Ottoman capitulations."],
      ["Five-Power Treaty (1922)","Capped battleship fleets at 5:5:3 for the US, Britain and Japan","The centrepiece of the Washington Naval Conference."],
      ["Kellogg–Briand Pact (1928)","Renounced war “as an instrument of national policy”","It had no enforcement, but later shaped the charge of crimes against peace."],
      ["Covenant of the League, Article 22","Set up the mandate system for former German and Ottoman territories","Territories were divided into A, B and C classes."]
    ]},
    {id:"e4u1-l2-x3", type:"number", q:"The 1922 Five-Power Treaty allowed the United States 525,000 tons of capital ships and set the US : Japan ratio at 5 : 3. What was Japan’s limit, in tons?", answer:315000, tol:0, unit:"tons", why:"Japan gets 3/5 of the US figure: 525,000 × 3 ÷ 5 = 315,000 tons. (Britain also had 525,000; France and Italy each had 175,000, the 1.75 in the ratio.)", wrongs:[
      {v:875000, tol:0, why:"That multiplies by 5/3 instead of 3/5. Japan’s share was smaller than the US share, not larger."},
      {v:300000, tol:0, why:"That looks like a rounded guess. Work it out: 525,000 ÷ 5 = 105,000 per unit of the ratio, times 3."},
      {v:105000, tol:0, why:"That is one “unit” of the ratio (525,000 ÷ 5). Japan had three units."}
    ], hint2:"Divide the US figure by 5 to get one unit of the ratio, then multiply by 3."},
    {id:"e4u1-l2-x4", type:"sort", q:"Sort these episodes from the League of Nations’ record.", buckets:["Largely a success","Largely a failure"], items:[
      {t:"Settling the Åland Islands dispute between Sweden and Finland (1921)", b:0, why:"Both sides accepted the League’s decision, which gave Finland the islands with autonomy guarantees."},
      {t:"Issuing “Nansen passports” so stateless refugees could travel (1922)", b:0, why:"Dozens of states recognised them, and hundreds of thousands of refugees used them."},
      {t:"Fighting epidemics through its health organisation", b:0, why:"Its health work on disease reporting and prevention is widely judged a success and fed into the WHO."},
      {t:"Responding to Japan’s seizure of Manchuria (1931–33)", b:1, why:"The League refused to recognise Manchukuo, but it didn’t reverse the occupation, and Japan left."},
      {t:"Sanctions against Italy for invading Ethiopia (1935–36)", b:1, why:"The sanctions excluded oil, Italy conquered Ethiopia, and the sanctions were dropped in 1936."},
      {t:"Keeping Germany committed after 1933", b:1, why:"Germany left the League in 1933 and rearmed."}
    ]},
    {id:"e4u1-l2-x5", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"The Treaty of Versailles is signed", why:"28 June 1919."},
      {t:"The Washington Naval Conference ends", why:"1922."},
      {t:"The Wall Street crash", why:"October 1929."},
      {t:"The Mukden incident; Japan occupies Manchuria", why:"From 18 September 1931."},
      {t:"Italy invades Ethiopia", why:"October 1935."},
      {t:"Full-scale war between Japan and China begins", why:"July 1937."},
      {t:"The Munich agreement", why:"September 1938."},
      {t:"Germany invades Poland", why:"1 September 1939."},
      {t:"Japan attacks Pearl Harbor and Malaya", why:"7–8 December 1941."}
    ]},
    {id:"e4u1-l2-x6", type:"mcq", q:"A classmate writes: “Historians agree that the atomic bombs alone made Japan surrender.” What is the best correction?", options:[
      {t:"Historians disagree: some, such as Tsuyoshi Hasegawa, argue that the Soviet declaration of war on 8 August was at least as decisive.", ok:true, why:"Right. The question of why Japan surrendered when it did is a live debate, and a careful sentence reports it as one."},
      {t:"Historians agree that the bombs played no role at all.", why:"That replaces one false consensus with another. The bombs are part of every account; the debate is about their weight."},
      {t:"Japan surrendered before the bombs were dropped.", why:"The bombs fell on 6 and 9 August; surrender was announced on 15 August."},
      {t:"Japan never formally surrendered.", why:"Japan signed the instrument of surrender on 2 September 1945."}
    ]},
    {id:"e4u1-l2-x7", type:"spot", q:"Hana is checking a summary of the war in Asia. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"Officers of Japan’s Kwantung Army staged the Mukden railway explosion in 1931.", flag:false, why:"Correct. This is the historical consensus."},
      " ",
      {t:"The war between Japan and China only began in December 1941.", flag:true, why:"Wrong. Full-scale war began in July 1937; Japan had occupied Manchuria from 1931."},
      " ",
      {t:"Historians agree that a mass atrocity took place at Nanjing, while the death toll is disputed.", flag:false, why:"Correct. Estimates range widely, but the atrocity itself is established."},
      " ",
      {t:"The Racial Equality Proposal was rejected by a majority vote.", flag:true, why:"Wrong. A majority (11 of 17) voted for it; the chair ruled that unanimity was required."},
      " ",
      {t:"Japan signed the instrument of surrender on 2 September 1945.", flag:false, why:"Correct."},
      " ",
      {t:"The Tokyo tribunal tried individual Japanese leaders between 1946 and 1948.", flag:false, why:"Correct."}
    ]}
   ],
   apply:{
    intro:"Work with founding documents and with how the war is remembered. Use official or university sources, and note the date of each page you use.",
    tasks:[
     {t:"Compare two rulebooks for peace", how:[
       "Find the Covenant of the League of Nations (Articles 10 and 16) in a university document collection, and the UN Charter (Articles 2(4), 27 and 42) on un.org.",
       "For each, note what members promise and who decides when force or sanctions are used.",
       "Write two sentences on what the UN’s designers changed, and why."
     ], write:"League: members promise… who decides… UN: members promise… who decides… What changed and why…"},
     {t:"How the war is remembered", how:[
       "Choose two official museum or memorial websites about the Second World War, one in the Asia-Pacific and one elsewhere (for example a national war museum, a peace museum, or a memorial for a massacre or a battle).",
       "Note which dates each uses for the war, which events it puts first and which words it uses for them.",
       "Describe the differences without judging which memory is “correct”."
     ], write:"Site 1… dates used… events stressed… key words… Site 2… dates… events… words… Differences…"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (about 150 words) you could say in a seminar.",
       "1. Was the Treaty of Versailles to blame for the Second World War? Use Keynes and MacMillan.",
       "2. Was the League of Nations a failure, or did it change international politics in ways that lasted?",
       "3. Why does it matter whether we date the Second World War from 1931, 1937, 1939 or 1941?"
     ], write:"Question chosen… My argument… Evidence… What someone who disagrees would say…"}
    ],
    proof:"A comparison of League and UN rules on force, notes on how two memorial sites present the war, and a seminar paragraph with an argument, evidence and a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 11 “The War to End All Wars” (sections 11.3 “Total War” and 11.5 “The War Ends”), Chapter 12 “The Interwar Period” (sections 12.1 “Recovering from World War I”, 12.3 “The Great Depression” and 12.4 “Old Empires and New Colonies”) and Chapter 13 “The Causes and Consequences of World War II”", note:"Read it after this lesson. Section 12.1 has a part on Western views of Japan after 1919, and 13.1 “An Unstable Peace” covers Japan’s expansion from 1931."},
    {book:"eir", where:"Chapter 2 “Diplomacy” (Stephen McGlinchey)", note:"Optional: a short IR view of how diplomacy changed after 1919."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u1-l3", title:"The Cold War, 1945–1991: blocs, bombs and the war in Asia", minutes:65,
   hook:{q:"Did the Korean War ever formally end?", options:["Yes, with a peace treaty in 1953","Yes, with a UN agreement in 1991","No: the fighting stopped with an armistice in 1953, and no peace treaty has been signed","Yes, with a treaty signed in 2018"], answer:2, reveal:"**No.** The armistice signed at Panmunjom on 27 July 1953 stopped the fighting and created the Demilitarized Zone, but it is a military ceasefire, not a peace treaty. As of 2026 no peace treaty has been signed; the leaders of the two Koreas pledged in 2018 to work towards one. This lesson treats the Cold War as a global conflict in which Asia mattered as much as Europe."},
   goals:[
     "Explain how the wartime alliance split into rival blocs, and summarise the historians’ debate about why",
     "Explain nuclear deterrence and the main arms-control agreements, building on the primer",
     "Explain the Chinese revolution, the Korean War and the wars in Vietnam as both Cold War and local conflicts",
     "Describe the San Francisco system and explain why US alliances in Asia differ from NATO",
     "Explain détente and the end of the Cold War, and why the end looked different in Asia"
   ],
   learn:[
    {h:"From allies to rivals, 1945–49", body:[
      "The primer introduced the [[cold-war|Cold War]] as a [[bipolarity|bipolar]] rivalry between the United States and the Soviet Union ({{cold-war}}).",
      "The wartime allies split within a few years. They quarrelled over Poland and Germany, and between 1945 and 1948 Soviet-backed communist parties took power across Eastern Europe. On 5 March 1946, in Fulton, Missouri, Winston Churchill said an [[iron-curtain|“iron curtain”]] had descended across Europe “from Stettin in the Baltic to Trieste in the Adriatic”.",
      "The US diplomat George Kennan sent his “Long Telegram” from Moscow in 1946 and in 1947 published, as “X”, an article in *Foreign Affairs* calling for “long-term, patient but firm and vigilant containment of Russian expansive tendencies”. [[containment|Containment]] became US strategy: the Truman Doctrine of aid to Greece and Turkey (March 1947), the Marshall Plan for European recovery (from 1948), the Berlin airlift during the Soviet blockade (1948–49) and NATO (1949). The Soviet Union tested its first atomic bomb in August 1949 and formed the Warsaw Pact in 1955.",
      "The rivalry was also about ideas: Soviet-style [[communism|communism]], a one-party state guided by Marxism–Leninism that owned most of the economy in the name of a future classless society, against liberal capitalism and democracy, in a US-led camp that also had many authoritarian allies.",
      "Who started it? This is a classic case of [[historiography]], the study of how interpretations change:",
      {table:[["School","Main claim","Key work"],["Orthodox (1940s–50s)","Soviet expansion forced the West to respond","Many early Western accounts"],["Revisionist (1960s)","US pursuit of open markets and influence drove the conflict","William Appleman Williams, *The Tragedy of American Diplomacy* (1959)"],["Post-revisionist (1970s)","Both sides contributed through fear and misperception","John Lewis Gaddis, *The United States and the Origins of the Cold War, 1941–1947* (1972)"],["After the archives opened (1990s)","Debate continues: Stalin’s role (Gaddis, *We Now Know*, 1997) or US security fears (Melvyn Leffler, *A Preponderance of Power*, 1992)","Both"]]},
      {tip:"Name the school as well as the claim: “a revisionist reading would say…” shows you know the argument has a history."}
    ]},
    {h:"Bombs, deterrence and arms control", body:[
      "The primer explained [[deterrence]], [[mutually-assured-destruction|mutually assured destruction]] and the [[non-proliferation-treaty|NPT]] ({{nuclear-weapons}}).",
      "The nuclear club grew: the United States (1945), the Soviet Union (1949), Britain (1952), France (1960) and China (1964). In *The Absolute Weapon* (1946) the strategist Bernard Brodie wrote: “Thus far the chief purpose of our military establishment has been to win wars. From now on its chief purpose must be to avert them.”",
      "[[arms-control|Arms control]] means agreements between rivals to limit, test-ban or verify weapons, even while the rivalry continues. Thomas Schelling and Morton Halperin (*Strategy and Arms Control*, 1961) argued that enemies share an interest in avoiding war by accident or miscalculation.",
      {table:[["Year","Agreement"],["1963","Hotline between Washington and Moscow; Partial Test Ban Treaty"],["1968","NPT opened for signature (in force 1970)"],["1972","SALT I interim agreement and Anti-Ballistic Missile Treaty"],["1987","INF Treaty eliminates a class of ground-launched missiles"]]},
      "The Pacific lived the nuclear age directly. The United States tested weapons in the Marshall Islands from 1946 to 1958, and in 1954 fallout from a Bikini test sickened the crew of the Japanese fishing boat *Daigo Fukuryū Maru*; Britain and France also tested in the Pacific. In 1967 Japan’s government set out its Three Non-Nuclear Principles: not to possess, produce or permit the introduction of nuclear weapons."
    ]},
    {h:"The Cold War in Asia: China and Korea", body:[
      "In Asia the Cold War was hot. China’s civil war resumed after 1945, and Mao Zedong’s Communists won. Mao proclaimed the **People’s Republic of China** on 1 October 1949, and the Nationalist government of the Republic of China under Chiang Kai-shek moved to Taiwan. In February 1950 China and the Soviet Union signed a treaty of alliance.",
      "Korea, a Japanese colony since 1910, was divided at the 38th parallel in 1945 into Soviet and US zones; in 1948 separate states were founded in the South and the North. On 25 June 1950 North Korean forces invaded the South. With the Soviet delegate boycotting, the UN Security Council recommended that members help the South, and a US-led UN Command fought north to the Chinese border. In October 1950 Chinese “People’s Volunteers” entered the war. The front settled near the 38th parallel, and the armistice of 27 July 1953 stopped the fighting.",
      "Bruce Cumings’s *The Origins of the Korean War* (two volumes, 1981 and 1990) stressed its roots in a Korean civil conflict after colonial rule. Soviet documents released in the 1990s, studied by Kathryn Weathersby and others, show that Stalin approved Kim Il-sung’s invasion plan in 1950 and that Mao agreed. Most scholars now combine the two: a civil war that outside powers turned into an international one.",
      "The war reshaped the region: the United States rearmed and sent its navy into the Taiwan Strait, Japan’s economy boomed on US military orders, and China, by fighting the United States to a standstill, became a power neither superpower could ignore."
    ]},
    {h:"Vietnam and the idea of “proxy” wars", body:[
      "On 2 September 1945 Ho Chi Minh declared Vietnam’s independence from France. France fought to return, until its defeat at Dien Bien Phu in May 1954. The Geneva Accords (July 1954) divided Vietnam temporarily at the 17th parallel, pending elections in 1956 that were never held. In April 1954 President Eisenhower described a “falling domino” principle: if one country in Southeast Asia fell to communism, its neighbours would follow. This became the [[domino-theory|domino theory]].",
      "The United States backed the South, escalated after the Gulf of Tonkin incident (August 1964) and sent combat troops from 1965, more than half a million at the peak. US forces left after the Paris Peace Accords (January 1973), and Saigon fell to North Vietnamese forces on 30 April 1975. In neighbouring Cambodia, the Khmer Rouge regime (1975–79) killed huge numbers of its own people; a UN-backed court later convicted surviving leaders of genocide and crimes against humanity. Fredrik Logevall’s *Embers of War* (2012) traces how France’s colonial war became America’s.",
      "Wars like these are often called [[proxy-war|proxy wars]]: outside powers back local sides instead of fighting each other directly. The label is useful but partial. Odd Arne Westad ({{odd-arne-westad}}) argues in *The Global Cold War* (2005) that local actors had their own aims, such as independence, unification and revolution, and used the superpowers as much as they were used.",
      {key:"For most of the world, the Cold War meant decolonisation, revolution and civil war, shaped but not caused by two superpowers."}
    ]},
    {h:"The San Francisco system", body:[
      "Japan was occupied, under US leadership, from 1945 to 1952 (Unit 4 covers the Occupation’s reforms). The **Treaty of Peace with Japan** was signed in San Francisco on 8 September 1951 by Japan and 48 Allied nations and came into force on 28 April 1952. Neither Chinese government was invited, the two Koreas were not parties, the Soviet Union attended but refused to sign, and India and Burma stayed away. Japan accepted the judgments of the Tokyo tribunal and renounced its claims to Korea, Taiwan, the Kuril Islands and southern Sakhalin, without the treaty always saying to whom territories passed, one root of disputes that remain unresolved as of 2026. Okinawa stayed under US administration until 1972.",
      "The same day, Japan and the United States signed a security treaty (revised in 1960). By 1954 separate US alliances also linked the Philippines, Australia and New Zealand (ANZUS), South Korea and the Republic of China on Taiwan (until 1980), as the diagram shows, plus the Southeast Asia Treaty Organization (SEATO, 1954–77).",
      {fig:'<svg viewBox="0 0 340 362"><text x="170" y="20" text-anchor="middle">Europe: NATO (1949), multilateral</text><path class="d-ink" d="M170 46 L213 77 L196 127 L144 127 L127 77 Z M170 46 L196 127 M170 46 L144 127 M213 77 L144 127 M213 77 L127 77 M196 127 L127 77" stroke-width="1.5" fill="none"/><circle class="d-sage" cx="170" cy="46" r="11" stroke-width="2"/><circle class="d-sage" cx="213" cy="77" r="11" stroke-width="2"/><circle class="d-sage" cx="196" cy="127" r="11" stroke-width="2"/><circle class="d-sage" cx="144" cy="127" r="11" stroke-width="2"/><circle class="d-sage" cx="127" cy="77" r="11" stroke-width="2"/><text class="s" x="170" y="160" text-anchor="middle">Every member pledged to defend every other</text><text x="170" y="190" text-anchor="middle">Asia-Pacific: hub and spokes</text><path class="d-ink" d="M170 268 L102 219 M170 268 L102 273 M170 268 L102 327 M170 268 L238 219 M170 268 L238 273 M170 268 L238 327" stroke-width="2" fill="none"/><circle class="d-gold" cx="170" cy="268" r="24" stroke-width="2"/><text x="170" y="273" text-anchor="middle">US</text><rect class="d-lup" x="6" y="204" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="54" y="224" text-anchor="middle">Japan, 1951</text><rect class="d-lup" x="6" y="258" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="54" y="278" text-anchor="middle">Thailand, 1954</text><rect class="d-lup" x="6" y="312" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="54" y="332" text-anchor="middle">Australia, NZ</text><rect class="d-lup" x="238" y="204" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="286" y="224" text-anchor="middle">S. Korea, 1953</text><rect class="d-lup" x="238" y="258" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="286" y="278" text-anchor="middle">Taiwan, 1954–80</text><rect class="d-lup" x="238" y="312" width="96" height="30" rx="6" stroke-width="2"/><text class="s" x="286" y="332" text-anchor="middle">Philippines, 1951</text><text class="s" x="170" y="358" text-anchor="middle">Each ally tied to the US, rarely to each other</text></svg>', alt:"Two diagrams. Top: NATO, founded 1949, drawn as five circles all joined to each other, because every member pledged to defend every other. Bottom: the Asia-Pacific hub and spokes, drawn as a central circle for the United States with separate lines to six boxes: Japan 1951, Thailand 1954 through SEATO, Australia and New Zealand through ANZUS 1951, South Korea 1953, Taiwan 1954 to 1980, and the Philippines 1951. The caption says each ally was tied to the United States but rarely to each other.", cap:"Two alliance designs. Thailand’s link ran through SEATO (1954–77); Australia and New Zealand’s through ANZUS (1951)."},
      "Historians such as John Dower and the political scientist Kent Calder call this combination of a lenient peace treaty, bilateral alliances, US bases and access to the US market the [[san-francisco-system|San Francisco system]]. Why “hub and spokes” in Asia when Europe got a multilateral NATO? Victor Cha’s *Powerplay* (2016) argues that Washington chose separate alliances partly to control allies, restraining leaders who might drag it into wars. Others stress Asian reluctance: few of Japan’s former victims wanted to ally jointly with Japan so soon after its empire."
    ]},
    {h:"Détente and its limits", body:[
      "By the late 1950s China and the Soviet Union were quarrelling over ideology, leadership and national interests. Soviet advisers left China in 1960, and in March 1969 their armies clashed on the Ussuri River border. The [[sino-soviet-split|Sino-Soviet split]] turned a two-sided contest into a triangle.",
      "Washington used the opening. In October 1971 the UN General Assembly gave China’s seat to the People’s Republic, and in February 1972 President Nixon visited Beijing. Japan normalised relations with Beijing in September 1972, and the United States in January 1979.",
      "With the Soviet Union, the 1970s brought [[detente|détente]], a relaxation of tension: SALT I and the ABM Treaty (1972), and the Helsinki Final Act (1975), which accepted Europe’s borders and added human rights commitments that dissidents later used. Rivalry continued in Angola and the Horn of Africa, and after the Soviet invasion of Afghanistan in December 1979 tension rose again: some call it a “second Cold War”."
    ]},
    {h:"How the Cold War ended, and why Asia’s ending was different", body:[
      "Mikhail Gorbachev, Soviet leader from 1985, introduced [[glasnost-perestroika|glasnost and perestroika]] (openness and restructuring). He signed the INF Treaty (1987), withdrew Soviet troops from Afghanistan (by February 1989) and did not use force to save Eastern Europe’s communist governments. The Berlin Wall opened on 9 November 1989, Germany reunified on 3 October 1990 and the Soviet Union dissolved in December 1991.",
      "In Asia the ending looked different. On 4 June 1989, the day of Poland’s first partly free elections, troops crushed the protest movement in and around Beijing’s Tiananmen Square. The Chinese Communist Party kept power and deepened the market reforms Deng Xiaoping had begun in 1978. Vietnam’s Communist Party launched its own market reforms, Đổi Mới, in 1986. Korea stayed divided. Meanwhile popular movements brought democracy to the Philippines (1986), South Korea (1987) and Mongolia (1990), and Taiwan lifted martial law in 1987.",
      "Why did it end, and so peacefully? Each lens stresses something different:",
      {table:[["Emphasis","Argument","Example of the case"],["Power","Soviet economic decline and overstretch left no choice","Stephen Brooks and William Wohlforth (2000)"],["Institutions and norms","Interdependence and the Helsinki human rights norms empowered reformers","Daniel Thomas, *The Helsinki Effect* (2001)"],["Ideas","Gorbachev’s “new thinking” changed how Soviet leaders saw the West","Robert English, *Russia and the Idea of the West* (2000)"],["People","Leaders’ choices and mass protest in Eastern Europe","Many accounts combine these"]]},
      {key:"The Cold War ended in Europe with the fall of communist rule; in East Asia, communist parties stayed in power in China, Vietnam, Laos and North Korea, and Korea stayed divided."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["The Cold War was fought mainly in Europe.","Its deadliest wars were in Asia (Korea, Vietnam, Cambodia) and in Africa and Latin America."],["Proxy wars were simply puppet shows run by superpowers.","Local actors had their own goals and often manipulated their patrons."]]},
      {terms:["iron-curtain","containment","communism","historiography","arms-control","domino-theory","proxy-war","san-francisco-system","sino-soviet-split","detente","glasnost-perestroika"]}
    ]}
   ],
   try:[
    {id:"e4u1-l3-x1", type:"mcq", q:"“The main element of any United States policy toward the Soviet Union must be that of a long-term, patient but firm and vigilant containment of Russian expansive tendencies.” Who wrote this, and what policy did it name?", options:[
      {t:"George Kennan, in his 1947 “X” article; it named containment", ok:true, why:"Right. Kennan’s article in *Foreign Affairs* gave US Cold War strategy its name."},
      {t:"Winston Churchill, in his 1946 “iron curtain” speech; it named détente", why:"Churchill’s speech described Europe’s division; détente came in the 1970s and means easing tension, not containing it."},
      {t:"Mikhail Gorbachev in 1987; it named perestroika", why:"Perestroika was Gorbachev’s programme of Soviet reform, not a US policy towards the Soviet Union."},
      {t:"Dwight Eisenhower in 1954; it named the domino theory", why:"Eisenhower’s 1954 “falling domino” remark was about Southeast Asia; the quotation is Kennan’s."}
    ]},
    {id:"e4u1-l3-x2", type:"sort", q:"Sort each event by its effect on superpower tension at the time.", buckets:["Raised tension","Lowered tension or limited arms"], items:[
      {t:"The Soviet blockade of West Berlin (1948–49)", b:0, why:"It was the first major Cold War crisis in Europe, answered with an airlift."},
      {t:"North Korea’s invasion of the South (1950)", b:0, why:"It turned the Cold War into a hot war in Asia."},
      {t:"The Partial Test Ban Treaty (1963)", b:1, why:"It banned nuclear tests in the atmosphere, in space and under water."},
      {t:"SALT I and the ABM Treaty (1972)", b:1, why:"The centrepieces of détente in arms control."},
      {t:"The Soviet invasion of Afghanistan (1979)", b:0, why:"It ended détente and opened a period some call a second Cold War."},
      {t:"The INF Treaty (1987)", b:1, why:"It eliminated a whole class of missiles, under Gorbachev."}
    ]},
    {id:"e4u1-l3-x3", type:"order", q:"Put these events in Asia in time order, earliest first.", items:[
      {t:"The People’s Republic of China is proclaimed", why:"1 October 1949."},
      {t:"North Korean forces invade South Korea", why:"25 June 1950."},
      {t:"The San Francisco Peace Treaty is signed", why:"8 September 1951."},
      {t:"The Korean armistice is signed", why:"27 July 1953."},
      {t:"The Geneva Accords divide Vietnam temporarily", why:"July 1954."},
      {t:"Chinese and Soviet troops clash on the Ussuri River", why:"March 1969."},
      {t:"President Nixon visits Beijing", why:"February 1972."},
      {t:"Saigon falls to North Vietnamese forces", why:"30 April 1975."}
    ]},
    {id:"e4u1-l3-x4", type:"match", q:"Match each alliance to its description.", pairs:[
      ["NATO (1949)","A multilateral alliance in which an attack on one member counts as an attack on all","Article 5 of the North Atlantic Treaty."],
      ["Warsaw Pact (1955)","The Soviet-led alliance of Eastern European states","Formed after West Germany joined NATO."],
      ["US–Japan Security Treaty (1951)","Signed on the same day as the San Francisco Peace Treaty","Revised in 1960; the core of the US alliance with Japan."],
      ["ANZUS (1951)","Australia, New Zealand and the United States","One of the Pacific “spokes” of 1951."],
      ["SEATO (1954)","A Southeast Asian treaty organisation that was dissolved in 1977","Its members included Thailand and the Philippines."]
    ]},
    {id:"e4u1-l3-x5", type:"mcq", q:"A historian argues that the Cold War began mainly because the United States sought open markets and influence around the world. Which school does this argument belong to?", options:[
      {t:"Revisionist", ok:true, why:"Right. Revisionists such as William Appleman Williams (1959) stressed US economic expansion."},
      {t:"Orthodox", why:"Orthodox accounts blamed Soviet expansion, the opposite emphasis."},
      {t:"Post-revisionist", why:"Post-revisionists, such as Gaddis in 1972, spread responsibility across both sides and stressed misperception."},
      {t:"Constructivist", why:"Constructivism is an IR theory about ideas and identity, not a school in the debate on Cold War origins."}
    ]},
    {id:"e4u1-l3-x6", type:"mcq", q:"Why do US alliances in East Asia after 1951 look like a “hub and spokes” rather than one NATO-style alliance?", options:[
      {t:"The United States signed separate bilateral treaties with each ally, partly to keep control over them, and many Asian states were reluctant to ally jointly with Japan.", ok:true, why:"Right. Cha’s “powerplay” argument and regional memories of Japan’s empire both help explain the design."},
      {t:"Asian states were all non-aligned, so they signed no treaties.", why:"Japan, South Korea, the Philippines, Australia, New Zealand and Thailand all had treaties with the United States."},
      {t:"The UN Charter forbids multilateral alliances in Asia.", why:"The Charter forbids no such thing; Article 51 recognises collective self-defence everywhere."},
      {t:"NATO already covered East Asia.", why:"NATO’s treaty area is the North Atlantic, Europe and North America."}
    ]},
    {id:"e4u1-l3-x7", type:"spot", q:"Tomás drafted a paragraph on the end of the Cold War. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"The Berlin Wall opened on 9 November 1989.", flag:false, why:"Correct."},
      " ",
      {t:"China’s Communist Party also lost power in 1989.", flag:true, why:"Wrong. The protests were crushed on 4 June 1989 and the party kept power."},
      " ",
      {t:"Vietnam began its Đổi Mới market reforms in 1986.", flag:false, why:"Correct."},
      " ",
      {t:"The Korean War ended with a peace treaty in 1953.", flag:true, why:"Wrong. It ended with an armistice; there is still no peace treaty."},
      " ",
      {t:"The Soviet Union dissolved in December 1991.", flag:false, why:"Correct."},
      " ",
      {t:"Historians agree that one single cause ended the Cold War.", flag:true, why:"Wrong. Power, institutions, ideas and individual choices are all argued, and most accounts combine them."}
    ]}
   ],
   apply:{
    intro:"Read Cold War documents the way historians do: who wrote this, for whom, when, and what does it show? The Wilson Center’s Digital Archive (digitalarchive.wilsoncenter.org) offers free translated documents from many countries’ archives.",
    tasks:[
     {t:"Read one declassified document", how:[
       "In the Wilson Center Digital Archive, browse or search a topic such as “Korean War origins”, “Sino-Soviet split” or “Bandung”.",
       "Choose one short document. Note its author, recipient, date and the archive it comes from.",
       "Write what it reveals and what it can’t tell you on its own."
     ], write:"Document… Author → recipient, date… Archive… What it shows… What it can’t show…"},
     {t:"Two famous framings", how:[
       "Read the opening of Churchill’s 1946 “Sinews of Peace” speech and the opening of Kennan’s 1947 article “The Sources of Soviet Conduct” (both are free online from official or university sites).",
       "Note the key images and words each uses for the Soviet Union and for the West.",
       "Write how a revisionist historian might read each text."
     ], write:"Churchill’s key phrases… Kennan’s key phrases… A revisionist reading…"},
     {t:"The spokes today", how:[
       "Using official foreign ministry or government pages, check which of the 1951–54 Asia-Pacific treaties in this lesson are still in force today.",
       "Note any that ended, and when.",
       "Record the date you checked."
     ], write:"Still in force… Ended (when)… Checked on…"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (about 150 words) you could say in a seminar.",
       "1. Was the Korean War a civil war or an international war?",
       "2. Is “proxy war” a useful label for the Cold War in Asia and Africa?",
       "3. Why did the Cold War end so differently in Europe and in East Asia?"
     ], write:"Question chosen… My argument… Evidence… What someone who disagrees would say…"}
    ],
    proof:"Notes on one archival document with its provenance, a comparison of two founding Cold War texts, a dated check of today’s alliances, and a seminar paragraph with an argument, evidence and a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 14 “Cold War Conflicts”, sections 14.1 “The Cold War Begins”, 14.2 “The Spread of Communism”, 14.4 “Global Tensions and Decolonization” and 14.5 “A New World Order”", note:"Read it after this lesson: 14.2 covers China, Korea and Vietnam, and 14.4 the Sino-Soviet split and Cambodia."},
    {book:"ospol", where:"Chapter 14 “International Relations”, section 14.4 “Using Levels of Analysis to Understand Conflict”", note:"Optional: a worked Cold War example (the Cuban Missile Crisis) seen at three levels."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u1-l4", title:"Decolonisation and the Third World project", minutes:65,
   hook:{q:"Where does the term “Third World” come from?", options:["A UN report of 1945","A French demographer’s 1952 article comparing the world’s poorer countries to the “Third Estate” of the French Revolution","A speech by Mao Zedong in 1949","A World Bank classification of the 1970s"], answer:1, reveal:"**A French demographer, in 1952.** Alfred Sauvy wrote in the magazine *L’Observateur* that the “Third World”, ignored and exploited like the Third Estate of 1789, also wanted to become something. The term began as a hopeful, even defiant idea, not an insult; only later did it come to mean “poor”. This lesson follows how colonies became states, and how those states tried to change the world order together."},
   goals:[
     "Compare different paths to independence, using India and Pakistan, Indonesia and Africa as cases",
     "Explain partition in South Asia and why its numbers are given as ranges",
     "Explain what the Bandung Conference, the Non-Aligned Movement and the Group of 77 tried to achieve",
     "Describe the New International Economic Order and why it largely failed",
     "Summarise the debate about why East Asia’s “development states” grew so fast"
   ],
   learn:[
    {h:"One lifetime, a new map", body:[
      "The primer told the outline of [[decolonization|decolonisation]] ({{decolonization}}): waves of independence from the 1940s to the 1990s that took the UN from 51 members to well over 150. This lesson looks closely at how it happened and what the new states did with their independence.",
      "Paths differed sharply. Some colonies negotiated independence; others fought long wars; some were divided. In many places Japan’s wartime occupation had already broken European rule and armed or organised nationalist movements, so the old empires returned in 1945 to a changed world.",
      "Why did the empires end when they did? The primer’s Pro level lists the main explanations: strong nationalist movements, European exhaustion after 1945, Cold War pressures, and new norms at the UN. Historians argue about their weight case by case. One useful habit is to ask, for each case, who forced the pace: the colonised, the colonisers or outsiders such as the superpowers."
    ]},
    {h:"India and Pakistan, 1947", body:[
      "India’s independence movement was the largest anywhere. The Indian National Congress, led by figures such as Mohandas Gandhi and Jawaharlal Nehru, combined mass non-violent campaigns with negotiation. The All-India Muslim League, led by Muhammad Ali Jinnah, called in 1940 (the Lahore Resolution) for separate homelands for Muslim-majority areas. After the Second World War, Britain, exhausted, decided to leave quickly.",
      "Pakistan became independent on 14 August 1947 and India on 15 August. The new border, the Radcliffe Line, was announced only on 17 August. [[partition|Partition]], the division of a territory into separate states, here along religious lines, set off mass migration and violence between Hindus, Muslims and Sikhs, especially in Punjab and Bengal.",
      "How many died? Historians’ estimates range from about 200,000 to 2 million, and between 12 and 20 million people were displaced. Ian Talbot and Gurharpal Singh’s *The Partition of India* (2009) surveys the evidence, and Yasmin Khan’s *The Great Partition* (2007) shows how unprepared the process was. Hundreds of princely states had to join one side; the contest over Kashmir led to war in 1947–48 and remains unresolved as of 2026. In 1971 East Pakistan became independent as Bangladesh.",
      {warn:"When historians give a wide range, it’s because records are poor and sources disagree. Report the range and who gives it; don’t pick the number that suits an argument."}
    ]},
    {h:"Indonesia and Southeast Asia", body:[
      "Two days after Japan announced its surrender, on 17 August 1945, Sukarno and Mohammad Hatta proclaimed Indonesia’s independence. The Netherlands tried to return by force. Four years of war and diplomacy followed, including two large Dutch military offensives, UN Security Council involvement and US pressure on the Netherlands. The Dutch transferred sovereignty on 27 December 1949, keeping western New Guinea until the early 1960s.",
      "Across the region, paths varied: the Philippines became independent from the United States in 1946, Burma and Ceylon (Sri Lanka) from Britain in 1948, and Malaya in 1957 after a long counter-insurgency, the “Emergency” (1948–60). In Vietnam, as Lesson 3 showed, decolonisation merged with the Cold War."
    ]},
    {h:"Africa’s 1960, and after", body:[
      "Ghana, led by Kwame Nkrumah, became independent in 1957, one of the first colonies in sub-Saharan Africa to do so. Then came a flood: 17 African states became independent in 1960, the “Year of Africa”, including Nigeria, Senegal, Madagascar and the Congo. That December the UN General Assembly adopted resolution 1514, declaring that “all peoples have the right to self-determination”.",
      "Independence was often violent. The Congo collapsed into crisis within days in 1960; its first prime minister, Patrice Lumumba, was killed in January 1961, and a large UN operation followed. Algeria won independence in 1962 after an eight-year war against France. In Kenya, Britain fought the Mau Mau rising (1952–60) with mass detention camps; in 2013 the British government expressed regret for the torture of detainees and agreed compensation. Portugal’s colonies, among them Mozambique and Angola, won independence in 1974–75 after long wars and a revolution in Lisbon. White-minority rule lasted until 1980 in Zimbabwe and 1994 in South Africa, and Namibia became independent in 1990."
    ]},
    {h:"Bandung, non-alignment and the Group of 77", body:[
      {fig:'<svg viewBox="0 0 340 424"><text x="170" y="18" text-anchor="middle">Main waves of independence</text><rect class="d-lup" x="30" y="44" width="67" height="22" rx="4" stroke-width="2"/><text class="s" x="30" y="38">South and Southeast Asia</text><rect class="d-gold" x="92" y="92" width="190" height="22" rx="4" stroke-width="2"/><rect class="d-rose" x="111" y="92" width="7" height="22"/><text class="s" x="92" y="86">Africa (17 states in 1960 alone)</text><rect class="d-sage" x="125" y="140" width="118" height="22" rx="4" stroke-width="2"/><text class="s" x="125" y="134">Caribbean and Pacific</text><path class="d-ink" d="M30 176 L310 176 M30 172 L30 180 M114 172 L114 180 M198 172 L198 180 M282 172 L282 180" stroke-width="1.5" fill="none"/><text class="s" x="30" y="194" text-anchor="middle">1945</text><text class="s" x="114" y="194" text-anchor="middle">1960</text><text class="s" x="198" y="194" text-anchor="middle">1975</text><text class="s" x="282" y="194" text-anchor="middle">1990</text><rect class="d-panel" x="4" y="210" width="332" height="206" rx="8"/><text x="170" y="232" text-anchor="middle">Building a Third World voice</text><text x="14" y="262">1955</text><text class="s" x="56" y="262">Bandung: 29 Asian and African governments</text><text x="14" y="292">1960</text><text class="s" x="56" y="292">UN resolution 1514 on independence</text><text x="14" y="322">1961</text><text class="s" x="56" y="322">Non-Aligned Movement, Belgrade</text><text x="14" y="352">1964</text><text class="s" x="56" y="352">Group of 77 and UNCTAD</text><text x="14" y="382">1974</text><text class="s" x="56" y="382">Call for a New International Economic Order</text><text x="14" y="408">1982</text><text class="s" x="56" y="408">Debt crisis begins in Mexico</text></svg>', alt:"Top: a horizontal time axis from 1945 to 1990 with three bars for the main waves of independence: South and Southeast Asia from 1945 to the late 1950s; Africa from the mid-1950s to 1990, with a highlighted mark at 1960 when 17 African states became independent; and the Caribbean and the Pacific from the early 1960s to the early 1980s. Bottom: a list of milestones in building a Third World voice: 1955 Bandung, with 29 Asian and African governments; 1960 UN resolution 1514 on independence; 1961 the Non-Aligned Movement in Belgrade; 1964 the Group of 77 and UNCTAD; 1974 the call for a New International Economic Order; 1982 the debt crisis begins in Mexico.", cap:"Bars show the main waves only; there were earlier and later cases in every region."},
      "From 18 to 24 April 1955, leaders of 29 Asian and African governments met at Bandung, Indonesia (the primer covers the basics). The meeting was more varied than its legend. Communist China’s premier Zhou Enlai attended, but so did US allies such as Pakistan, the Philippines, Thailand, Turkey and Japan. The final communiqué set out ten principles, from respect for sovereignty and human rights to non-intervention and peaceful settlement. The American writer Richard Wright reported it in *The Color Curtain* (1956) as a meeting of the world’s colonised peoples.",
      "The [[non-aligned-movement|Non-Aligned Movement]] followed: 25 countries met in Belgrade on 1–6 September 1961. Non-alignment didn’t mean neutrality or passivity: members wanted freedom to choose their own course, to oppose colonialism and racism, and to push for disarmament. In 1964 developing countries formed the Group of 77 at the first UN Conference on Trade and Development (UNCTAD), whose first secretary-general was the Argentine economist Raúl Prebisch.",
      "[[third-world|“Third World”]] then named a political project as much as a group of countries. Vijay Prashad’s *The Darker Nations* (2007) calls it the **Third World project**: an attempt to build a fairer world order through the UN, solidarity and planned development ({{third-world-project}}). Adom Getachew’s *Worldmaking after Empire* (2019) argues that anticolonial leaders saw self-determination as more than flags: they wanted to end domination in the world economy too, through regional federations and, later, a new economic order."
    ]},
    {h:"The New International Economic Order", body:[
      "On 1 May 1974, at a special session held amid the oil crisis, the UN General Assembly adopted a Declaration on the Establishment of a [[new-international-economic-order|New International Economic Order]] (resolution 3201). Developing countries, newly confident after oil-producing states had quadrupled oil prices, demanded:",
      {list:[
        "**Fairer commodity prices**, so exporters of raw materials wouldn’t keep losing ground (the Prebisch–Singer argument you met in the primer).",
        "**Permanent sovereignty over natural resources**, including the right to nationalise foreign-owned mines and plantations, a principle the Assembly had endorsed in 1962.",
        "**Rules for multinational corporations** and transfer of technology.",
        "**A bigger say** in the IMF and World Bank, and more development finance."
      ]},
      "In December 1974 the Assembly added a Charter of Economic Rights and Duties of States. But General Assembly resolutions are recommendations, and the main industrial economies opposed most of the programme. When interest rates rose and commodity prices fell, Mexico’s announcement in August 1982 that it couldn’t pay its debts set off a debt crisis across Latin America and Africa. Indebted governments accepted IMF and World Bank loans with [[structural-adjustment|structural adjustment]] conditions, the opposite direction to the NIEO.",
      "Was the NIEO a failure? Most historians say it failed as a programme. Some, such as Getachew, argue it still matters as a different vision of international justice, and its demands about debt, technology and voice in global institutions recur today."
    ]},
    {h:"Development states in East Asia", body:[
      "While many developing countries struggled, several East Asian economies grew at record speed: Japan from the 1950s, then South Korea, Taiwan, Hong Kong and Singapore (the “four tigers”), and China after Deng Xiaoping’s reforms from 1978.",
      "Political scientists call the model a [[developmental-state|developmental state]]: a government with a capable, merit-based bureaucracy that sets growth as its top goal and guides investment into chosen industries, usually while pushing firms to export. Chalmers Johnson’s *MITI and the Japanese Miracle* (1982) coined the term for Japan (Unit 4 of this track looks at Japan’s case in depth). In South Korea under Park Chung-hee (1961–79), the state directed cheap credit to large business groups that met export targets. Many of these states were authoritarian during their fastest growth, and all had Cold War support and access to US markets.",
      "Why did it work? A famous debate:",
      {table:[["View","Who argues it","Main claim"],["Markets plus some intervention","World Bank, *The East Asian Miracle* (1993)","Sound fundamentals (stable prices, high savings, education, openness) did most of the work"],["The state led","Alice Amsden, *Asia’s Next Giant* (1989); Robert Wade, *Governing the Market* (1990)","States deliberately “got prices wrong” to build industries, and disciplined firms"],["Mostly more inputs","Paul Krugman, “The Myth of Asia’s Miracle” (1994)","Growth came mainly from more workers, capital and schooling, not rising efficiency"]]},
      "The contrast with Latin America’s [[import-substitution|import substitution]] is often drawn: both used state intervention, but East Asian states pushed firms to compete in world export markets. The 1997–98 Asian financial crisis (Lesson 5) then reopened the debate."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Independence was simply granted by the colonial powers.","It was won through mass movements, negotiation and often war, with varying outside pressure."],["“Third World” always meant “poor”.","It began as a political idea of a third way between the Cold War blocs."],["Non-aligned meant neutral and passive.","Non-aligned states campaigned actively against colonialism and racism and for a new economic order."],["East Asia grew by free markets alone.","Most scholars agree states played big roles; they disagree about how much and how."]]},
      {terms:["partition","third-world","non-aligned-movement","new-international-economic-order","developmental-state"]}
    ]}
   ],
   try:[
    {id:"e4u1-l4-x1", type:"mcq", q:"Alfred Sauvy coined “Third World” in 1952 by comparing poorer countries to France’s “Third Estate” of 1789. What did the comparison suggest?", options:[
      {t:"That these countries were ignored and exploited, yet wanted to count in world affairs, as the Third Estate had in the French Revolution", ok:true, why:"Right. The term began as a hopeful political idea, not a label for poverty."},
      {t:"That they were the third-richest group of countries in the world", why:"It wasn’t a ranking by wealth; it was a political comparison."},
      {t:"That they belonged to the Soviet bloc", why:"The Soviet bloc was sometimes called the “Second World”; the Third World stood apart from both blocs."},
      {t:"That they had been colonised three times", why:"The “third” refers to the Third Estate, not to rounds of colonisation."}
    ]},
    {id:"e4u1-l4-x2", type:"match", q:"Match each country to its path to independence.", pairs:[
      ["India and Pakistan","A negotiated transfer of power in 1947, with violent partition","Britain left quickly; the Radcliffe Line was announced after independence."],
      ["Indonesia","A 1945 proclamation, four years of war and diplomacy, Dutch transfer in 1949","UN and US pressure helped end the conflict."],
      ["Algeria","An eight-year war against France, ending in 1962","One of the bloodiest wars of decolonisation."],
      ["Ghana","An early, largely negotiated independence in 1957","One of the first in sub-Saharan Africa, under Nkrumah."],
      ["Mozambique","Independence in 1975 after a long war and a revolution in Portugal","Portugal’s 1974 revolution opened the way."]
    ]},
    {id:"e4u1-l4-x3", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"India and Pakistan become independent", why:"August 1947."},
      {t:"The Netherlands transfers sovereignty to Indonesia", why:"27 December 1949."},
      {t:"The Bandung Conference", why:"18–24 April 1955."},
      {t:"Ghana becomes independent", why:"1957."},
      {t:"Seventeen African states become independent", why:"1960, the “Year of Africa”."},
      {t:"The first Non-Aligned summit in Belgrade", why:"September 1961."},
      {t:"The Group of 77 forms", why:"1964, at the first UNCTAD."},
      {t:"The General Assembly calls for a New International Economic Order", why:"1 May 1974."}
    ]},
    {id:"e4u1-l4-x4", type:"sort", q:"Each claim explains East Asia’s fast growth. Sort it into the view it supports.", buckets:["The state led","Markets and fundamentals","Mostly more inputs"], items:[
      {t:"Ministries steered cheap credit to chosen industries and demanded export results in return.", b:0, why:"Directed credit with performance targets is the core of Amsden’s and Wade’s state-led account."},
      {t:"Governments kept inflation low, budgets stable and economies open to trade.", b:1, why:"Macroeconomic stability and openness are the “fundamentals” the World Bank’s 1993 report stressed."},
      {t:"Growth came from more people working, more machines and more schooling, with little rise in efficiency.", b:2, why:"That is Krugman’s 1994 argument: input accumulation, not a miracle of productivity."},
      {t:"States deliberately set some prices “wrong” to make new industries profitable.", b:0, why:"Amsden’s phrase “getting relative prices wrong” describes deliberate state distortion."},
      {t:"Competitive markets, once fundamentals were sound, allocated resources well.", b:1, why:"Trusting markets to allocate, once fundamentals are right, is the market-friendly view."},
      {t:"Like the Soviet economy, growth from inputs would slow once they ran out.", b:2, why:"Krugman drew exactly this comparison to argue that the growth would slow."}
    ]},
    {id:"e4u1-l4-x5", type:"mcq", q:"Which statement about the Bandung Conference (1955) is accurate?", options:[
      {t:"It brought together 29 Asian and African governments, including both communist China and US allies such as Pakistan, the Philippines and Japan.", ok:true, why:"Right. Bandung was more varied than its legend: it wasn’t a bloc of the non-aligned."},
      {t:"It founded the Non-Aligned Movement.", why:"The Non-Aligned Movement’s first summit was in Belgrade in 1961."},
      {t:"Only communist states attended.", why:"Most participants weren’t communist, and several were allied with the United States."},
      {t:"Latin American states led it.", why:"Bandung was an Asian-African conference; Latin American states were not participants."}
    ]},
    {id:"e4u1-l4-x6", type:"spot", q:"Priya is checking notes on the partition of 1947. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"Estimates of the deaths range from about 200,000 to 2 million.", flag:false, why:"Correct: the range reflects poor records and disagreement."},
      " ",
      {t:"The Radcliffe Line was announced two days after India’s independence.", flag:false, why:"Correct: on 17 August 1947, two days after India’s (15 August) and three after Pakistan’s (14 August)."},
      " ",
      {t:"Partition was peaceful, with very few people displaced.", flag:true, why:"Wrong. Between 12 and 20 million people were displaced, amid mass violence."},
      " ",
      {t:"The Kashmir dispute was settled for good in 1948.", flag:true, why:"Wrong. A war in 1947–48 ended in a ceasefire, and the dispute remains unresolved as of 2026."},
      " ",
      {t:"Bangladesh, formerly East Pakistan, became independent in 1971.", flag:false, why:"Correct."}
    ]},
    {id:"e4u1-l4-x7", type:"mcq", q:"In 1974 a minister from a copper-exporting country tells the UN: “We must own our mines, and the price of copper must stop falling against the price of the machines we import.” Which programme is she speaking for?", options:[
      {t:"The New International Economic Order", ok:true, why:"Right. Permanent sovereignty over natural resources and fairer commodity prices were central NIEO demands."},
      {t:"Structural adjustment", why:"Structural adjustment (1980s–90s) pushed privatisation and open markets, close to the opposite."},
      {t:"The Marshall Plan", why:"The Marshall Plan was US aid for European recovery after 1948."},
      {t:"Containment", why:"Containment was US strategy against Soviet expansion, not a development programme."}
    ]}
   ],
   apply:{
    intro:"Read the founding texts of the postcolonial world in their own words. They are short and free online.",
    tasks:[
     {t:"Bandung’s ten principles", how:[
       "Find the Final Communiqué of the Asian-African Conference (Bandung, 1955) in a university or archive collection, and read its ten principles.",
       "Compare them with Article 2 of the UN Charter (un.org).",
       "Note which principles repeat the Charter and which add something new."
     ], write:"Principles that repeat the Charter… Principles that add something… What the additions suggest…"},
     {t:"The NIEO in its own words", how:[
       "Find General Assembly resolution 3201 (S-VI) of 1 May 1974 in the UN Digital Library (digitallibrary.un.org).",
       "Pick three demands and copy one sentence for each.",
       "For each, note one place where a similar demand appears in global debates today."
     ], write:"Demand 1… today… Demand 2… today… Demand 3… today…"},
     {t:"An independence speech", how:[
       "Read one independence speech or proclamation: for example Nehru’s “Tryst with Destiny” (1947), Indonesia’s proclamation (1945), Nkrumah’s speech at Ghana’s independence (1957) or Lumumba’s speech of 30 June 1960.",
       "Note the vision of the future it offers and what it says about the old empire.",
       "Note one thing a historian would need other sources to check."
     ], write:"Speech… Vision… On the empire… What would need checking…"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (about 150 words) you could say in a seminar.",
       "1. Who drove decolonisation: the colonised, the colonisers or the superpowers? Use two cases.",
       "2. Was the Third World project a failure?",
       "3. Can the East Asian developmental state be copied elsewhere today?"
     ], write:"Question chosen… My argument… Evidence… What someone who disagrees would say…"}
    ],
    proof:"A comparison of Bandung’s principles with the UN Charter, three NIEO demands with present-day echoes, notes on one independence speech, and a seminar paragraph with an argument, evidence and a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 14 “Cold War Conflicts”, sections 14.3 “The Non-Aligned Movement” (Yugoslavia, Bandung and Indonesia, India, Egypt) and 14.4 “Global Tensions and Decolonization” (Africa in the shadow of the Cold War)", note:"Read it after this lesson for the political history of the founding non-aligned states."},
    {book:"eir", where:"Chapter 10 “Global Poverty and Wealth” (James Arvanitakis & David J. Hornsby)", note:"Optional: how today’s debates about global inequality grew out of this history."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u1-l5", title:"After 1991: one superpower, globalisation and the order debate", minutes:65,
   hook:{q:"In 2010 China’s economy became the world’s second largest, measured at market exchange rates. Which country did it overtake?", options:["Germany","Japan","The United Kingdom","India"], answer:1, reveal:"**Japan.** Japan had been the world’s second-largest economy since the late 1960s. China’s rise past it in 2010 became a symbol of power shifting towards Asia. (Measured by purchasing power, which adjusts for local prices, the ranking looks different again, which is why careful writers always say how GDP was measured.) This lesson covers the world since the Cold War and the debates about where its order is heading, described as they stand in 2026."},
   goals:[
     "Explain the “unipolar moment” and the debates about the 1990s, including NATO enlargement",
     "Compare Fukuyama’s “end of history” and Huntington’s “clash of civilizations”, and their critics",
     "Explain globalisation, the 1997–98 Asian financial crisis and the main critiques of globalisation",
     "Describe 9/11, the wars that followed and the 2008 financial crisis, and their effects on world politics",
     "Describe the rise of China and India and set out the main positions in the debate about the liberal international order as of 2026, without taking sides"
   ],
   learn:[
    {h:"The unipolar moment", body:[
      "When the Soviet Union dissolved, one superpower remained. The Gulf War of 1991 seemed to show what that meant: after Iraq invaded Kuwait, the UN Security Council authorised force (resolution 678), and a US-led coalition of about 35 states expelled Iraq’s army in weeks. The commentator Charles Krauthammer called this the [[unipolar-moment|“unipolar moment”]] in *Foreign Affairs* (1990/91), and the primer defined [[unipolarity]].",
      "Western institutions expanded east. NATO admitted the Czech Republic, Hungary and Poland in 1999 and seven more states in 2004; the European Union added ten members in 2004. Whether NATO enlargement was wise is one of the most argued questions of the period. Some realists, such as John Mearsheimer (“Why the Ukraine Crisis Is the West’s Fault”, *Foreign Affairs*, 2014), argue that it threatened Russia and provoked its later actions. Critics reply that Central European states chose to join and that Russia is responsible for its own decisions; Mary Sarotte’s archive-based *Not One Inch* (2021) shows how contested even the 1990 promises are.",
      "The 1990s were also a decade of wars inside states: in the former Yugoslavia, the genocide against the Tutsi in Rwanda (1994), and wars in Central and West Africa. They raised the question of humanitarian intervention that led to the responsibility to protect ({{responsibility-to-protect}})."
    ]},
    {h:"End of history, or clash of civilisations?", body:[
      "Two big ideas framed the new era; both are still quoted, often wrongly.",
      "Francis Fukuyama’s essay “The End of History?” (*The National Interest*, 1989), expanded into *The End of History and the Last Man* (1992), argued that liberal democracy had no serious ideological rival left as a form of government. That is the [[end-of-history|“end of history”]]: the end of the great contest of ideologies, not the end of events, wars or conflict.",
      "Samuel Huntington replied with “The Clash of Civilizations?” (*Foreign Affairs*, 1993) and a 1996 book: the main conflicts of the future would run along the boundaries between civilisations defined largely by religion and culture. The [[clash-of-civilizations|clash of civilizations]] thesis drew heavy criticism. Edward Said’s “The Clash of Ignorance” (2001) attacked its picture of civilisations as solid blocks, and quantitative studies, such as Bruce Russett, John Oneal and Michael Cox (2000), found little evidence that conflicts between civilisations had become more common.",
      {tip:"If someone in a seminar says “Fukuyama said history ended, and he was wrong because wars continued”, you can point out that his claim was about ideas, and then discuss whether rivals to liberal democracy have since returned."}
    ]},
    {h:"Globalisation and its critics", body:[
      "The 1990s and 2000s were the high point of [[globalization|globalisation]]. The World Trade Organization opened in 1995, China joined it in December 2001, container shipping and the internet tied supply chains across continents, and money moved across borders in vast amounts. Poverty fell sharply, above all in East and South Asia.",
      "The **Asian financial crisis** of 1997–98 showed the risks. It began when Thailand’s currency collapsed in July 1997 and spread to Indonesia, South Korea, Malaysia and beyond. The IMF lent with strict conditions; Indonesia’s president Suharto fell in May 1998 amid the turmoil. Joseph Stiglitz, a former World Bank chief economist, attacked the IMF’s approach in *Globalization and Its Discontents* (2002). Many Asian governments drew a lesson: build up large foreign currency reserves so they wouldn’t need the IMF again.",
      "Protesters at the WTO meeting in Seattle in 1999 were only the most visible critics. Branko Milanovic’s *Global Inequality* (2016) popularised the “elephant curve”: from 1988 to 2008 the global middle (much of it in Asia) and the very richest gained most, while many working-class people in rich countries gained little. Dani Rodrik’s *The Globalization Paradox* (2011) argued that countries face a trilemma:",
      {fig:'<svg viewBox="0 0 340 326"><text x="170" y="26" text-anchor="middle">Hyperglobalisation</text><path class="d-ink" d="M170 40 L40 236 L300 236 Z" stroke-width="2" fill="none"/><circle class="d-gold" cx="170" cy="40" r="9" stroke-width="2"/><circle class="d-sage" cx="40" cy="236" r="9" stroke-width="2"/><circle class="d-lup" cx="300" cy="236" r="9" stroke-width="2"/><text x="40" y="262" text-anchor="middle">Democratic</text><text x="40" y="278" text-anchor="middle">politics</text><text x="300" y="262" text-anchor="middle">National</text><text x="300" y="278" text-anchor="middle">sovereignty</text><text class="s" x="96" y="132" text-anchor="end">Global</text><text class="s" x="96" y="148" text-anchor="end">federalism</text><text class="s" x="244" y="132">“Golden</text><text class="s" x="244" y="148">straitjacket”</text><text class="s" x="170" y="262" text-anchor="middle">Bretton Woods</text><text class="s" x="170" y="278" text-anchor="middle">compromise</text><text class="s" x="170" y="304" text-anchor="middle">Rodrik (2011): you can have any two corners,</text><text class="s" x="170" y="320" text-anchor="middle">but not all three at once.</text></svg>', alt:"A triangle with three corners: hyperglobalisation at the top, democratic politics at bottom left and national sovereignty at bottom right. Each side is labelled with the combination you get by choosing its two corners: hyperglobalisation with democracy gives global federalism; hyperglobalisation with national sovereignty gives the golden straitjacket, where governments follow markets’ rules; democracy with national sovereignty gives the Bretton Woods compromise, with limited globalisation. A note says that, according to Rodrik in 2011, you can have any two corners but not all three at once.", cap:"Rodrik’s trilemma. The “golden straitjacket” is the journalist Thomas Friedman’s phrase for governments that follow markets’ rules."},
      "Supporters reply that trade and investment lifted hundreds of millions out of poverty, and that losers are better helped by domestic policies than by closing borders. The debate is about how to share the gains as much as whether there were any."
    ]},
    {h:"9/11 and the wars that followed", body:[
      "On 11 September 2001, al-Qaeda hijackers crashed airliners into the World Trade Center and the Pentagon, killing nearly 3,000 people. The next day NATO invoked Article 5, its mutual-defence clause, for the first time, and on 28 September the UN Security Council required all states to act against terrorist financing (resolution 1373). A US-led coalition attacked al-Qaeda and the Taliban government in Afghanistan from October 2001.",
      "In March 2003 the United States, Britain and others invaded Iraq without a new Security Council resolution explicitly authorising force, citing weapons of mass destruction that were never found. The war’s legality and wisdom were widely disputed, including among US allies. Long insurgencies followed in both countries; the self-proclaimed Islamic State seized much of Iraq and Syria in 2014; and the Taliban returned to power in Afghanistan in August 2021 as the last US forces left.",
      "The phrase [[war-on-terror|“war on terror”]] is itself debated: supporters used it to describe a global campaign; critics argued that you can’t wage war on a tactic, and that the frame justified torture, detention without trial and the erosion of rights. Asia was a front too, from the Bali bombings of 2002 to counter-terrorism cooperation in Southeast Asia. The primer covers why terrorism is so hard to define ({{terrorism-ir}})."
    ]},
    {h:"The 2008 financial crisis", body:[
      "The [[global-financial-crisis|global financial crisis]] began in the US housing market. When the investment bank Lehman Brothers collapsed on 15 September 2008, credit froze worldwide and the deepest recession since the 1930s followed. Leaders of the G20 economies held their first summit in Washington in November 2008, and in 2009 named the G20 the “premier forum” for international economic cooperation, giving China, India, Brazil, Indonesia and others a seat at the top table. China’s huge stimulus programme helped keep world demand up. A debt crisis in the euro area followed in 2010–12.",
      "Adam Tooze’s *Crashed* (2018) shows that the US Federal Reserve quietly acted as the world’s lender of last resort, lending dollars to foreign central banks. The crisis damaged the prestige of the Western economic model, and many scholars link it to the rise of populist politics in many countries in the 2010s."
    ]},
    {h:"Rising powers: China, India and others", body:[
      "China’s rise has been the period’s biggest shift in power. After joining the WTO it became the world’s largest exporter, overtook Japan as the second-largest economy in 2010, and in 2013 launched the Belt and Road Initiative of infrastructure lending. It co-founded the Asian Infrastructure Investment Bank, which began work in 2016. In 2016 an arbitral tribunal ruled on a case the Philippines had brought over the South China Sea; China rejected the ruling, and the disputes there remain active as of 2026.",
      "India liberalised its economy after a 1991 balance-of-payments crisis, openly tested nuclear weapons in 1998, after a first test in 1974 (Pakistan tested weeks later) and, by UN estimates, became the world’s most populous country in 2023. Its leaders describe its approach as **strategic autonomy**: working with many partners without joining blocs, an idea with roots in non-alignment (Lesson 4).",
      "Groupings multiplied. The BRICS group (Brazil, Russia, India, China, later South Africa) began holding summits in 2009 and expanded from 2024. Japan’s government promoted a “Free and Open Indo-Pacific” from 2016, and the Quad of Australia, India, Japan and the United States revived in 2017. Russia annexed Crimea in 2014 and launched a full-scale invasion of Ukraine in February 2022; in March 2022 the UN General Assembly demanded that Russia withdraw, by 141 votes to 5, while many states abstained."
    ]},
    {h:"Is the liberal international order ending? The debate as of 2026", body:[
      "The [[liberal-international-order|liberal international order]] usually means the set of rules and institutions built mainly under US leadership after 1945 and widened after 1991: open trade, multilateral organisations such as the UN, IMF and WTO, alliances, and liberal democratic values. Whether it is ending is a central debate of the field today. The main positions, described, not judged:",
      {table:[["Position","Who argues it","Main claim"],["Resilient and reformable","G. John Ikenberry, *After Victory* (2001), *Liberal Leviathan* (2011)","The order is easy to join and hard to overturn; rising powers gain from it and can be given more voice"],["Bound to fail","John Mearsheimer, “Bound to Fail” (*International Security*, 2019)","The post-1991 attempt to spread liberal rules everywhere was bound to provoke nationalism and great-power balancing"],["Never really liberal or orderly","Graham Allison, “The Myth of the Liberal Order” (*Foreign Affairs*, 2018), and many Global South scholars","Order came from power and the Cold War; many states experienced intervention and unequal rules, not liberal order"],["A “multiplex” world","Amitav Acharya, *The End of American World Order* (2014)","No single power or order will dominate; many actors and regions will share and shape order"]]},
      "Governments argue too. China’s leaders call for “democratisation of international relations” and have proposed a Global Development Initiative (2021) and a Global Security Initiative (2022); many Global South governments seek more voice in the IMF, World Bank and UN Security Council. Events in 2025–26 sharpened the debate: in April 2025 the United States announced sweeping new tariffs on imports from almost every country, and in January 2026 it completed its withdrawal from the World Health Organization and left the Paris climate agreement. Observers disagree about whether such moves show the order ending, changing shape or being renegotiated.",
      {warn:"This is a live debate, and the facts change monthly. In your own writing, date every claim (“as of November 2026”), attribute each position to its authors, and keep your own view clearly separate from what you report."},
      "Each lens from Unit 6 of the primer reads this period differently: realists see shifting [[polarity]] and balancing; liberals see institutions adapting, as the G20 did after 2008; critical scholars ask whose order it was. That is why the polarity debate in the primer ([[multipolarity]], [[bipolarity]]) is still open."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Fukuyama said nothing important would happen after 1989.","He argued that liberal democracy had won the contest of ideas, not that events would stop."],["Globalisation made everyone better off.","Many gained, especially in Asia, but gains were uneven, and many workers in rich countries gained little."],["The 2003 Iraq war was authorised by the UN Security Council.","There was no new resolution explicitly authorising force; its legality was widely disputed."],["Scholars agree that the liberal order is dead.","They disagree about whether it is ending, changing or was ever as liberal as claimed."]]},
      {terms:["unipolar-moment","end-of-history","clash-of-civilizations","war-on-terror","global-financial-crisis","liberal-international-order"]}
    ]}
   ],
   try:[
    {id:"e4u1-l5-x1", type:"mcq", q:"What did Francis Fukuyama mean by “the end of history”?", options:[
      {t:"That liberal democracy had no serious ideological rival left as a form of government", ok:true, why:"Right. His claim was about the contest of ideas, not about events."},
      {t:"That there would be no more wars after 1989", why:"He never claimed that; he expected conflicts to continue, especially where liberal democracy hadn’t taken hold."},
      {t:"That civilisations would clash along religious lines", why:"That is Huntington’s thesis, written partly as a reply to Fukuyama."},
      {t:"That historians would have nothing left to study", why:"“History” here means the historical struggle between ideologies, in a philosophical sense."}
    ]},
    {id:"e4u1-l5-x2", type:"match", q:"Match each author to their claim.", pairs:[
      ["Charles Krauthammer","The 1990s were a “unipolar moment” of US predominance","Foreign Affairs, 1990/91."],
      ["Samuel Huntington","Future conflicts would run along the boundaries of civilisations","Foreign Affairs, 1993; book 1996."],
      ["Dani Rodrik","Countries can’t have hyperglobalisation, democracy and national sovereignty all at once","The Globalization Paradox, 2011."],
      ["G. John Ikenberry","The liberal order is easy to join and hard to overturn","After Victory (2001) and Liberal Leviathan (2011)."],
      ["John Mearsheimer","The post-1991 liberal order was bound to fail","International Security, 2019."],
      ["Amitav Acharya","The world is becoming a “multiplex” of many actors and orders","The End of American World Order, 2014."]
    ]},
    {id:"e4u1-l5-x3", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"A US-led coalition expels Iraq from Kuwait", why:"January–February 1991."},
      {t:"The World Trade Organization opens", why:"1 January 1995."},
      {t:"Thailand’s currency collapses, starting the Asian financial crisis", why:"July 1997."},
      {t:"China joins the WTO", why:"December 2001, three months after 9/11."},
      {t:"The invasion of Iraq", why:"March 2003."},
      {t:"Lehman Brothers collapses", why:"15 September 2008."},
      {t:"China launches the Belt and Road Initiative", why:"2013."},
      {t:"India becomes the world’s most populous country, by UN estimates", why:"2023."}
    ]},
    {id:"e4u1-l5-x4", type:"sort", q:"Sort each reading of the post-1991 world by the lens it uses.", buckets:["Realist","Liberal","Critical"], items:[
      {t:"With no rival, the United States could act with few checks, and others would eventually balance against it.", b:0, why:"Unchecked power and balancing are realist themes."},
      {t:"China’s WTO entry tied it into shared rules that made cooperation more likely.", b:1, why:"Institutions shaping behaviour is the liberal institutionalist argument."},
      {t:"The 1997 IMF programmes showed who wrote the rules and who had to follow them.", b:2, why:"Asking whose interests the rules served is a critical reading."},
      {t:"A rising China will compete with the United States for regional dominance.", b:0, why:"Power transition and great-power competition are realist themes."},
      {t:"The G20 adapted after 2008 to give rising economies a voice.", b:1, why:"Institutions adapting to manage shared problems is a liberal reading."},
      {t:"For many in the Global South, the “liberal order” meant intervention and unequal rules.", b:2, why:"Questioning the order’s claims from the perspective of the less powerful is critical."}
    ]},
    {id:"e4u1-l5-x5", type:"number", q:"On 2 March 2022, 141 of the UN’s 193 member states voted for the General Assembly resolution demanding Russia’s withdrawal from Ukraine. What **percentage of all members** voted in favour? (Round to the nearest whole number.)", answer:73, tol:0.6, unit:"%", why:"141 ÷ 193 × 100 = 73.06…, so about 73% of all members. (5 voted against, 35 abstained and the rest didn’t vote, so “141 votes to 5” and “73% of members” describe the same vote differently.)", wrongs:[
      {v:78, tol:0.6, why:"That divides by 181, the number of states that voted yes, no or abstain. The question asks for the share of all 193 members."},
      {v:97, tol:0.6, why:"That compares only yes and no votes (141 ÷ 146). Abstentions and non-votes count among all members."},
      {v:141, tol:0.5, why:"141 is the number of votes, not a percentage. Divide by 193 and multiply by 100."}
    ], hint2:"Divide the yes votes by all 193 members, then multiply by 100."},
    {id:"e4u1-l5-x6", type:"spot", q:"Fatima is reviewing a paragraph on 2008 and after. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"The crisis spread worldwide after Lehman Brothers collapsed in September 2008.", flag:false, why:"Correct."},
      " ",
      {t:"G20 leaders held their first summit in November 2008.", flag:false, why:"Correct: in Washington."},
      " ",
      {t:"The crisis began in the Chinese housing market.", flag:true, why:"Wrong. It began in the US housing and mortgage market."},
      " ",
      {t:"The G20 then named itself the premier forum for international economic cooperation.", flag:false, why:"Correct: at the Pittsburgh summit in 2009."},
      " ",
      {t:"Scholars agree the crisis had no effect on politics.", flag:true, why:"Wrong. Many scholars link it to rising populism and to damage to the Western model’s prestige."}
    ]},
    {id:"e4u1-l5-x7", type:"mcq", q:"Mei must write a seminar paper on whether the liberal international order is ending. Which opening sentence best fits academic standards for a contested issue?", options:[
      {t:"“As of November 2026, scholars disagree: Ikenberry sees a resilient order that can be reformed, Mearsheimer one that was bound to fail, and Acharya a ‘multiplex’ world; this paper assesses their evidence.”", ok:true, why:"Right. It dates the claim, attributes each position and promises to weigh evidence rather than assert a verdict."},
      {t:"“The liberal order is obviously dead, as everyone can see.”", why:"It asserts a contested claim without evidence or attribution."},
      {t:"“The liberal order will certainly collapse by 2030.”", why:"It makes a prediction as if it were fact; academic writing on live debates avoids that."},
      {t:"“Only Western scholars have opinions on this question.”", why:"Untrue: scholars and governments across the world, including in Asia and the Global South, take part in the debate."}
    ]}
   ],
   apply:{
    intro:"Practise the habits this lesson asks for: data with dates and sources, positions with authors, and your own view kept separate.",
    tasks:[
     {t:"Four economies over time", how:[
       "Open the World Bank’s free World Development Indicators (data.worldbank.org) and find “GDP (current US$)”.",
       "Note the values for China, India, Japan and the United States in 1990, 2010 and the latest year shown.",
       "Write two sentences describing the change, saying the measure and the years. Don’t predict."
     ], write:"Measure… 1990… 2010… latest year… What changed…"},
     {t:"How the world voted", how:[
       "In the UN Digital Library (digitallibrary.un.org), find the voting record for General Assembly resolution ES-11/1 (2 March 2022).",
       "Pick five states from different regions and note how each voted.",
       "Note one reason a state might abstain, as stated in its own explanation of vote if you can find one."
     ], write:"State… vote… State… vote… One stated reason for abstaining…"},
     {t:"Two views of the order", how:[
       "Read a short piece by one author who sees the order as resilient and one who sees it as ending or as never fully liberal (for example Ikenberry and Mearsheimer, or Ikenberry and Acharya). Many have free summaries or interviews online.",
       "For each, write the claim, the main evidence and what counts as “order”.",
       "Then write one sentence of your own view, labelled as yours."
     ], write:"Author 1: claim… evidence… Author 2: claim… evidence… My view (labelled)…"},
     {t:"Seminar questions", how:[
       "Choose one question and write a paragraph (about 150 words) you could say in a seminar.",
       "1. Was the “unipolar moment” a moment, or a longer era?",
       "2. Did globalisation’s critics win the argument after 2008?",
       "3. Was the liberal international order ever as liberal, or as international, as its defenders say?"
     ], write:"Question chosen… My argument… Evidence… What someone who disagrees would say…"}
    ],
    proof:"A dated description of four economies, a record of how five states voted on one resolution, a summary of two positions on the liberal order with your labelled view, and a seminar paragraph with an argument, evidence and a counter-argument."
   },
   read:[
    {book:"owh2", where:"Chapter 15 “The Contemporary World and Ongoing Challenges”, sections 15.1 “A Global Economy” and 15.4 “Ongoing Problems and Solutions”", note:"Read it after this lesson: 15.1 covers trade blocs, multinationals and winners and losers, and 15.4 covers 9/11 and instability after the Cold War."},
    {book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"A short argument from a US realist about how security might be managed as US predominance fades. Read it as one position in the debate, not as the conclusion."}
   ]
  }
  ],
  checkpoint:["e4u1-q02","e4u1-q06","e4u1-q11","e4u1-q14","e4u1-q17","e4u1-q20","e4u1-q24","e4u1-q28","e4u1-q31","e4u1-q35","e4u1-q39","e4u1-q43"],
  codex:[
   {id:"world-in-1900", title:"The world around 1900", aka:["age of empire","new imperialism","standard of civilisation"], tags:["international studies","history"],
    summary:"A world ranked by empires and industrial power, in which a few states counted as full members of international society and most peoples lived under colonial or unequal rule.",
    levels:{
     starter:[
      "Around 1900 most of the world’s people lived under empires. Britain, France, the Netherlands, Portugal, Belgium, Germany, Italy, Russia, the United States and Japan ruled colonies; the Ottoman, Qing and Austro-Hungarian empires ruled many peoples on land.",
      "By 1914 only two African states, Ethiopia and Liberia, were free of European rule. In Asia, China kept its independence but was bound by **unequal treaties** that gave foreigners their own courts (extraterritoriality) and fixed its tariffs. Japan escaped those treaties by reforming its state and won full equality between 1899 and 1911.",
      "Industry was the key to power: steel, steamships, railways, telegraphs and modern weapons let small forces conquer large territories.",
      {key:"International politics in 1900 was openly hierarchical: power, race and “civilisation” decided who counted."}
     ],
     builder:[
      {table:[["Rank (in the language of the time)","Examples","Legal position"],["“Civilised” full members","European powers, the US, Latin American republics, Japan from 1899","Sovereign equals"],["Partly recognised","Qing China, Ottoman Empire, Siam, Persia","Unequal treaties, extraterritoriality"],["Not recognised as states","Most of Africa, South and Southeast Asia, the Pacific","Open to colonisation"]]},
      "Explanations of the “new imperialism” (about the 1870s to 1914) fall into four families: **economic** (J. A. Hobson, 1902; Lenin, 1917), **strategic** (Robinson and Gallagher, *Africa and the Victorians*, 1961), **ideological** (the “civilising mission”, racial theories) and **local crises** that pulled capitals in. Gallagher and Robinson’s “The Imperialism of Free Trade” (1953) added **informal empire**: control through trade, loans and gunboats without annexation.",
      "In East Asia the key turning points were the Sino-Japanese War (1894–95), the Boxer Protocol (1901), the Anglo-Japanese Alliance (1902), the Russo-Japanese War (1904–05, {{russo-japanese-war}}) and the end of the Qing dynasty (1911–12).",
      "Industry turned into power through what the historian Daniel Headrick called *The Tools of Empire* (1981): steamboats that could travel up rivers, quinine against malaria, the telegraph, and breech-loading rifles and machine guns. Strategists drew lessons from the same world: Alfred Thayer Mahan’s *The Influence of Sea Power upon History* (1890) stressed navies, bases and trade routes, and Halford Mackinder’s “The Geographical Pivot of History” (1904) the Eurasian “heartland”. Mahan in particular was studied closely in Tokyo, Berlin and Washington."
     ],
     pro:[
      "Gerrit Gong’s *The Standard of “Civilization” in International Society* (1984) reconstructed the test applied to non-European states: protecting foreigners’ life, liberty and property; an organised government able to defend itself; courts and published laws that Europeans trusted; regular diplomacy and observance of international law, including the laws of war; and conformity with European social norms. Legal writers such as James Lorimer (1880s) divided humanity into “civilised”, “barbarous” and “savage”.",
      "English School scholars told this as the expansion of a European international society (Hedley Bull and Adam Watson, eds., *The Expansion of International Society*, 1984; {{english-school}}). Critics, including postcolonial scholars ({{postcolonialism-ir}}), stress that expansion came through conquest and that the colonised were excluded, not gradually admitted. Shogo Suzuki (*Civilization and Empire*, 2009) shows Japan learning both faces of that society: equality among members and empire over others. Barry Buzan and George Lawson (*The Global Transformation*, 2015) argue that 19th-century industrialisation, rational states and ideologies of progress created the core–periphery world of 1900.",
      "Seminar uses: the period explains later grievances (China’s “century of humiliation” narrative; Zheng Wang, *Never Forget National Humiliation*, 2012), the borders of many states, and debates about whether later conditions for membership or aid echo the old standard, a comparison others reject because today’s rules are agreed by all states.",
      {warn:"Quote period labels such as “civilised” with care and attribution. They record a hierarchy, not facts about peoples."}
     ]
    },
    related:["russo-japanese-war","world-war-one","modern-international-system","decolonization","english-school","postcolonialism-ir"],
    read:[{book:"owh2", where:"Chapter 9 “Expansion in the Industrial Age”"},{book:"eir", where:"Chapter 1 “The Making of the Modern World”"}],
    sources:[{t:"Office of the Historian (US Department of State): The Treaty of Portsmouth and the Russo-Japanese War, 1904–1905", url:"https://history.state.gov/milestones/1899-1913/portsmouth-treaty"},{t:"United Nations: Decolonization (global issues)", url:"https://www.un.org/en/global-issues/decolonization"}],
    checked:"2026-11"},

   {id:"russo-japanese-war", title:"The Russo-Japanese War (1904–05)", aka:["Treaty of Portsmouth","Battle of Tsushima","Anglo-Japanese Alliance"], tags:["international studies","history","Asia-Pacific"],
    summary:"The war in which Japan defeated Russia over Manchuria and Korea, ended by the US-mediated Treaty of Portsmouth; a turning point for Japan, Korea, Russia and anticolonial nationalism.",
    levels:{
     starter:[
      "In 1904 Japan and Russia went to war over who would dominate Manchuria and Korea. Japan won major battles at Port Arthur and Mukden and destroyed Russia’s Baltic Fleet at Tsushima in May 1905.",
      "The US president Theodore Roosevelt mediated the **Treaty of Portsmouth** (5 September 1905) and won the 1906 Nobel Peace Prize. Japan gained Russia’s lease in southern Manchuria, the southern half of Sakhalin and a free hand in Korea, but no indemnity, which caused riots in Tokyo.",
      "It was the first time in the modern era that an Asian state defeated a European great power in a major war, and many people across Asia and the Middle East celebrated it.",
      {key:"One war, many meanings: a Japanese triumph, a Russian crisis, the end of Korea’s independence, and an inspiration to anticolonial nationalists."}
     ],
     builder:[
      {table:[["Date","Event"],["30 January 1902","Anglo-Japanese Alliance signed"],["February 1904","Japan attacks the Russian fleet at Port Arthur"],["Early 1905","Port Arthur falls; battle of Mukden"],["27–28 May 1905","Battle of Tsushima"],["5 September 1905","Treaty of Portsmouth"],["1905; 1910","Korea becomes a Japanese protectorate; then annexed"]]},
      "The Anglo-Japanese Alliance mattered: Britain would stay neutral if Japan fought one power, and help if a second joined in. That gave France, Russia’s ally, a strong reason to stay out of the war. The alliance, renewed in 1905 and 1911, lapsed in 1923 after the Four-Power Treaty.",
      "Consequences: defeat helped trigger Russia’s 1905 revolution; Japan became the leading power in Northeast Asia; Korea lost its independence; and military observers saw trench warfare, machine guns and mass casualties that foreshadowed 1914.",
      "For Korea the war was decisive. Japan made Korea a protectorate in 1905, taking over its foreign affairs, and annexed it in 1910. In Japan, crowds angry that the treaty brought no indemnity rioted in Tokyo in September 1905, a sign of how popular nationalism now shaped foreign policy."
     ],
     pro:[
      "Historians have reframed the war globally. The two-volume *The Russo-Japanese War in Global Perspective* (2005–07) calls it “World War Zero” for its scale, its alliances and its world-wide financing and reporting. Pankaj Mishra’s *From the Ruins of Empire* (2012) opens with the war’s reception among intellectuals across Asia and the Middle East.",
      "For IR, the case raises several questions. How did a rising non-European power win acceptance as a great power ({{world-in-1900}})? Was the alliance with Britain balancing against Russia (a realist reading, {{realism}}) or entry into a club of “civilised” powers (an English School reading)? And whose story is it: Korean historiography treats 1905 as the start of colonisation rather than as an Asian triumph.",
      "Neutral phrasing matters: “Japan’s victory inspired nationalists elsewhere” and “Japan’s victory led to Korea’s colonisation” are both true; good analysis keeps both in view.",
      "A careful formulation matters. Ethiopia had already defeated Italy at Adwa in 1896, so 1905 was not the first defeat of a European army by a non-European state. What was new was an Asian state defeating a European great power in a major modern war between industrial powers, which is why the victory echoed so widely."
     ]
    },
    related:["world-in-1900","world-war-one","asia-pacific-war","realism"],
    read:[{book:"owh2", where:"Chapter 9, section 9.3 “Colonial Empires”"}],
    sources:[{t:"Office of the Historian (US Department of State): The Treaty of Portsmouth and the Russo-Japanese War, 1904–1905", url:"https://history.state.gov/milestones/1899-1913/portsmouth-treaty"}],
    checked:"2026-11"},

   {id:"world-war-one", title:"The First World War (1914–18)", aka:["Great War","WWI","total war"], tags:["international studies","history"],
    summary:"The first total and global war, fought by empires that mobilised colonies; it destroyed four empires and led to the Paris peace and the League of Nations.",
    levels:{
     starter:[
      "The First World War began in July–August 1914 and ended with the armistice of 11 November 1918. It was a **total war**: governments mobilised whole economies and societies, not just armies.",
      "It was global because empires brought in their colonies: more than a million Indian soldiers served overseas, Africans fought and carried supplies, and Britain and France recruited about 140,000 Chinese labourers. Japan joined Britain’s side in 1914 and took Germany’s territories in China and the Pacific.",
      "According to Britannica, some 8.5 million soldiers died, and perhaps as many as 13 million civilians. The German, Austro-Hungarian, Russian and Ottoman empires all fell.",
      {key:"A war between European empires that became a world war, and remade the map of Europe and the Middle East."}
     ],
     builder:[
      "The primer analysed the war’s causes at three levels ({{causes-of-war}}, {{levels-of-analysis}}). For the history of world order, its consequences matter most:",
      {list:["**Revolution:** the Russian revolutions of 1917 created the first communist state.","**American power:** US entry (1917) and loans made the United States central to Europe’s fate.","**Self-determination:** Wilson’s language raised hopes across the colonised world (Erez Manela, *The Wilsonian Moment*, 2007).","**New institutions:** the League of Nations, the International Labour Organization and the mandate system.","**Atrocity:** from 1915 Ottoman authorities deported and killed Armenians on a mass scale; most genocide scholars call this a genocide, which the Turkish government rejects."]},
      "Japan used the war to expand: it took Qingdao and Germany’s Pacific islands north of the equator, and pressed the Twenty-One Demands on China (1915).",
      "Total war in practice meant conscription of millions, state control of industry and food, censorship and propaganda, women entering factories in large numbers, and blockades aimed at civilian supply. Fighting ended with the armistice of 11 November 1918; the peace treaties came afterwards, from June 1919."
     ],
     pro:[
      "Historiography of responsibility runs from Fritz Fischer’s argument that Germany sought war (1960s) to Christopher Clark’s *The Sleepwalkers* (2012), which spreads responsibility widely. Global historians shift the frame: the war was fought for and with empires, and its peace settlement left grievances in East Asia (Shandong) and the Middle East (the mandates) as well as Europe.",
      "For IR, the war produced the field itself (the first chair of international politics, the Woodrow Wilson Chair at Aberystwyth in Wales, founded in 1919; {{international-relations-field}}) and its first great debate, between hopes for law and institutions and realist warnings about power (E. H. Carr, *The Twenty Years’ Crisis*, 1939).",
      "Numbers: casualty figures vary by source and by whether disease and famine are counted; the influenza pandemic of 1918–19, spread partly by troop movements, killed tens of millions more. Always give the source of any figure.",
      "The war’s Asian effects are easy to miss. Japan’s wartime gains in Shandong and the Twenty-One Demands (1915) fuelled Chinese nationalism, which exploded in the May Fourth Movement of 1919. Indian leaders who had backed the war effort expected political reform in return; the repression of 1919, including the killing of unarmed protesters at Amritsar on 13 April, turned many towards mass non-cooperation."
     ]
    },
    related:["treaty-of-versailles","league-of-nations","causes-of-war","world-in-1900"],
    read:[{book:"owh2", where:"Chapter 11 “The War to End All Wars”"}],
    sources:[{t:"Britannica: How many people died during World War I?", url:"https://britannica.com/question/How-many-people-died-during-World-War-I"},{t:"Office of the Historian (US Department of State): The Paris Peace Conference and the Treaty of Versailles", url:"https://history.state.gov/milestones/1914-1920/paris-peace"}],
    checked:"2026-11"},

   {id:"treaty-of-versailles", title:"The Paris peace settlement (1919–23)", aka:["Treaty of Versailles","Paris Peace Conference","Racial Equality Proposal","Article 231"], tags:["international studies","history"],
    summary:"The treaties that ended the First World War, led by Versailles (1919): new borders, reparations, the League and the mandates, and promises of self-determination applied selectively.",
    levels:{
     starter:[
      "The Paris Peace Conference opened in January 1919. The **Treaty of Versailles** with Germany was signed on 28 June 1919. Germany lost about 13 percent of its European territory and all its colonies, its army was capped at 100,000 men, and Article 231 stated its responsibility for the war’s loss and damage, the basis for reparations (set in 1921 at 132 billion gold marks).",
      "Other treaties covered Austria (Saint-Germain), Bulgaria (Neuilly), Hungary (Trianon) and the Ottoman Empire (Sèvres, replaced by Lausanne in 1923). The settlement created the League of Nations.",
      "The US Senate never ratified Versailles, and the United States never joined the League.",
      {key:"A peace written by the victors that redrew Europe and the Middle East and left many peoples disappointed."}
     ],
     builder:[
      "**From Asia:** Germany’s rights in Shandong went to Japan, which triggered China’s May Fourth Movement (4 May 1919); China refused to sign. Korea’s March First Movement for independence was suppressed.",
      "**The Racial Equality Proposal:** Japan proposed on 13 February 1919 to add racial equality to the League Covenant. On 11 April a softer version won 11 of 17 votes on the League of Nations Commission, but Wilson, as chair, ruled that unanimity was needed, given strong opposition from the British Empire delegation, pressed by Australia. Naoko Shimazu’s *Japan, Race and Equality* (1998) shows Japan’s motives were mixed: great-power status and the treatment of Japanese emigrants.",
      {table:[["Interpretation","Who argues it"],["Too harsh: a “Carthaginian peace”","John Maynard Keynes, 1919"],["A hard task; later policy failed","Margaret MacMillan, *Peacemakers*, 2001"],["The US declined to underwrite it","Adam Tooze, *The Deluge*, 2014"]]},
      "The map changed most in central and eastern Europe, where Poland, Czechoslovakia, the Kingdom of Serbs, Croats and Slovenes and the Baltic states emerged, and in the Middle East, where Ottoman Arab lands became League mandates under Britain and France ({{league-of-nations}}). The defeated states were not allowed to negotiate, and Soviet Russia was absent."
     ],
     pro:[
      "Historians now usually say the treaty was too harsh for Germans to accept and too weak to enforce, and stress that the road to 1939 ran through choices made in the 1920s and 1930s, including the Depression. Research on reparations has questioned whether they were as crippling as Keynes claimed, while acknowledging their political poison in Germany.",
      "Global historians stress the gap between the language of self-determination and its application: Erez Manela (*The Wilsonian Moment*, 2007) shows how Egyptian, Indian, Chinese and Korean nationalists turned to anticolonial politics after 1919. The Racial Equality Proposal is a standard case for IR debates on race in world order, from the {{postcolonialism-ir|postcolonial}} critique to {{constructivism|constructivist}} work on status and recognition.",
      "Careful wording: the proposal was not “voted down”; a majority supported it and it was excluded by a ruling on unanimity.",
      "For IR theory, Paris is the founding moment of liberal internationalism (Wilson’s Fourteen Points and the League) and of the realist critique that followed. It is also a standard case for the “security dilemma” of peace settlements: terms strict enough to reassure the victors may be resented enough to inspire revision."
     ]
    },
    related:["world-war-one","league-of-nations","interwar-crisis","postcolonialism-ir"],
    read:[{book:"owh2", where:"Chapter 12, section 12.1 “Recovering from World War I”"}],
    sources:[{t:"Office of the Historian (US Department of State): The Paris Peace Conference and the Treaty of Versailles", url:"https://history.state.gov/milestones/1914-1920/paris-peace"},{t:"Wikipedia: Racial Equality Proposal (with references to Shimazu 1998)", url:"https://en.wikipedia.org/wiki/Racial_Equality_Proposal"}],
    checked:"2026-11"},

   {id:"league-of-nations", title:"The League of Nations (1920–46)", aka:["League","Covenant","collective security","mandate system"], tags:["international studies","history","international organisations"],
    summary:"The first world organisation for keeping peace, built on collective security; it had real successes on smaller issues but failed against great-power aggression in the 1930s.",
    levels:{
     starter:[
      "The League of Nations began work on 10 January 1920 in Geneva. Its founding document, the **Covenant**, was part of the peace treaties.",
      "It was built on **collective security**: members promised to respect each other’s territory and independence (Article 10) and to cut trade with any member that went to war in breach of the Covenant (Article 16).",
      "The United States never joined. Germany belonged from 1926 to 1933 and the Soviet Union from 1934 to 1939; Japan left after 1933. The League was formally dissolved in 1946, after the UN was founded.",
      {key:"A bold idea that depended on great powers that were absent, unwilling or themselves the aggressors."}
     ],
     builder:[
      {table:[["Successes","Failures"],["Åland Islands dispute settled (1921)","No reversal of Japan’s seizure of Manchuria (1931–33)"],["“Nansen passports” for stateless refugees (1922)","Weak sanctions on Italy over Ethiopia (1935–36)"],["Health work against epidemics","No answer to German rearmament after 1933"]]},
      "The **mandate system** (Article 22) put former German colonies and Ottoman Arab provinces under victor states as “a sacred trust of civilisation”, in A, B and C classes. Iraq became the first mandate to win independence and League membership (1932). Japan received the South Seas Mandate in Micronesia.",
      "Japan was one of the League’s permanent Council members until it left in 1933 after the League adopted the Lytton Report on Manchuria.",
      "Most important decisions of the Assembly and Council required unanimity, so any member, including the state accused, could slow action. Sanctions depended on members choosing to apply them, and the absence of the United States weakened any economic pressure. Outside the League, the Washington Naval Conference (1921–22) and the Kellogg–Briand Pact (1928), which renounced war “as an instrument of national policy”, tried other routes to peace."
     ],
     pro:[
      "Revisionist histories rescue the League from simple failure. Susan Pedersen’s *The Guardians* (2015) argues that the Permanent Mandates Commission internationalised imperial rule, exposing it to scrutiny and petitions; Mark Mazower’s *No Enchanted Palace* (2009) traces the imperial thinking behind both League and UN. Much League technical work (health, labour, statistics, refugees) carried over into the UN system.",
      "IR theory reads the League through its debates: “idealists” were later accused of naivety (E. H. Carr, 1939), though historians of the field question whether a coherent “idealist” school ever existed. Realists stress that collective security fails when the strong won’t act; liberals reply that the UN fixed design flaws, giving the great powers permanent seats and a veto ({{united-nations}}).",
      "Membership counts: the League had 42 founding members; give a source and date for any other figure, since membership changed often."
     ]
    },
    related:["treaty-of-versailles","interwar-crisis","united-nations","world-war-one"],
    read:[{book:"owh2", where:"Chapter 12, sections 12.1 “Recovering from World War I” and 12.4 “Old Empires and New Colonies”"}],
    sources:[{t:"Office of the Historian (US Department of State): The Paris Peace Conference and the Treaty of Versailles", url:"https://history.state.gov/milestones/1914-1920/paris-peace"},{t:"Office of the Historian (US Department of State): The Mukden Incident of 1931 and the Stimson Doctrine", url:"https://history.state.gov/milestones/1921-1936/mukden-incident"}],
    checked:"2026-11"},

   {id:"interwar-crisis", title:"The interwar crisis (1929–39)", aka:["Great Depression","fascism","appeasement","Manchurian Incident","Munich"], tags:["international studies","history"],
    summary:"How the Great Depression, fascism and militarism, and aggression in Asia, Africa and Europe destroyed the 1920s order and led to the Second World War.",
    levels:{
     starter:[
      "The 1920s ended with the Wall Street crash of October 1929. In the **Great Depression** that followed, banks failed, unemployment soared, commodity prices collapsed and world trade fell by about two-thirds in value by 1933.",
      "Extreme movements gained ground. Fascists ruled Italy from 1922 and the Nazis Germany from 1933. In Japan the army grew more powerful; in 1931 officers staged the Mukden incident and occupied Manchuria.",
      "Aggression went unchecked: Manchuria (1931), Ethiopia (1935), full-scale war in China (1937), Austria and Czechoslovakia (1938–39). Britain and France’s policy of **appeasement** peaked at Munich in September 1938.",
      {key:"Economic collapse, extreme nationalism and a weak League turned a fragile peace into a second world war."}
     ],
     builder:[
      {table:[["Year","Event"],["1929","Wall Street crash"],["1931","Mukden incident; Japan occupies Manchuria"],["1933","Hitler becomes chancellor; Japan and Germany leave the League"],["1935","Italy invades Ethiopia"],["1937","Full-scale war between Japan and China; Nanjing Massacre"],["1938","Munich agreement"],["1939","Nazi–Soviet pact; Germany invades Poland"]]},
      "Charles Kindleberger’s *The World in Depression, 1929–1939* (1973) argued that no power stabilised the world economy: Britain could not, the United States would not. This became a root of hegemonic stability theory.",
      "Definitions of **fascism** differ: Roger Griffin (1991) stresses a myth of national rebirth; Robert Paxton (2004) what fascist movements did. Whether imperial Japan was fascist is debated; many historians prefer “militarism”.",
      "In Asia the sequence ran: the Mukden incident (September 1931), staged by officers of Japan’s Kwantung Army; Manchukuo (1932); Japan’s exit from the League after the Lytton Report (1933); full-scale war with China after the Marco Polo Bridge clash (July 1937); and the capture of Nanjing (December 1937). In Europe: Italy’s conquest of Ethiopia (1935–36), German rearmament, the Rhineland (1936), Austria and Munich (1938) and the invasion of Poland (1939)."
     ],
     pro:[
      "Nanjing, December 1937: historians agree that Japanese troops killed large numbers of prisoners and civilians and committed mass rape. The death toll is disputed, with scholarly estimates ranging from tens of thousands to over 200,000, and China’s official figure 300,000. In seminars, state the consensus on the event and the range on the numbers, with sources.",
      "Appeasement historiography moved from condemnation (the 1940 polemic *Guilty Men*) to explanations stressing military unreadiness, economic limits, imperial commitments and public opinion; A. J. P. Taylor’s *The Origins of the Second World War* (1961) provoked fierce debate by treating Hitler as an opportunist. For IR, appeasement remains a contested analogy in debates about how to respond to rising or revisionist powers.",
      "E. H. Carr’s *The Twenty Years’ Crisis* (1939) used this period to attack hopes for peace through law alone, founding modern realism ({{realism}}).",
      "Kindleberger’s argument became a root of hegemonic stability theory, the idea that an open world economy needs a leading power willing to stabilise it. Its critics, notably Robert Keohane in *After Hegemony* (1984), argued that institutions can sustain cooperation even when a hegemon declines."
     ]
    },
    related:["league-of-nations","world-war-two","asia-pacific-war","realism"],
    read:[{book:"owh2", where:"Chapter 12, section 12.3 “The Great Depression”, and Chapter 13, section 13.1 “An Unstable Peace”"}],
    sources:[{t:"Office of the Historian (US Department of State): The Mukden Incident of 1931 and the Stimson Doctrine", url:"https://history.state.gov/milestones/1921-1936/mukden-incident"},{t:"US-China Institute: review of The Nanking Atrocity, 1937–38 (estimates and historiography)", url:"https://china.usc.edu/node/21689"}],
    checked:"2026-11"},

   {id:"world-war-two", title:"The Second World War (1937/1939–45)", aka:["WWII","Second World War","Holocaust","Nuremberg"], tags:["international studies","history"],
    summary:"The deadliest war in history, fought in Europe, Africa and the Asia-Pacific; it included the Holocaust, ended with the atomic bombings, and produced the UN and the postwar order.",
    levels:{
     starter:[
      "In Europe the war began when Germany invaded Poland on 1 September 1939; in China, full-scale war with Japan had begun in 1937. The two merged in December 1941 when Japan attacked Pearl Harbor and European colonies in Asia.",
      "The **Holocaust** was the systematic, state-sponsored persecution and murder of six million Jews by Nazi Germany and its collaborators; the regime also murdered Roma, disabled people and many others.",
      "Germany surrendered in May 1945, Japan in August–September 1945 after the atomic bombings of Hiroshima and Nagasaki and the Soviet entry into the war.",
      {key:"Two regional wars that became one world war, and the source of almost every institution of the postwar order."}
     ],
     builder:[
      {table:[["Measure","Estimate (source)"],["All deaths","35 to 60 million (Britannica); other estimates are higher"],["China","About 20 million (US National WWII Museum)"],["Soviet Union","About 24 million (US National WWII Museum)"],["Hiroshima","About 140,000 by end of 1945 (City of Hiroshima)"],["Nagasaki","73,884 by end of 1945 (Nagasaki)"]]},
      "Most of the fighting and dying in Europe took place on the Eastern Front after Germany invaded the Soviet Union on 22 June 1941.",
      "**Tribunals:** Nuremberg (1945–46) and Tokyo (1946–48) tried leaders for crimes against peace, war crimes and crimes against humanity. Critics called them victors’ justice; India’s Justice Radhabinod Pal dissented at Tokyo.",
      "**New order:** the Bretton Woods institutions (1944) and the UN (1945) were designed to avoid interwar failures ({{bretton-woods-institutions}}, {{united-nations}}).",
      "The Nazi regime’s war in the East was also a war of racial annihilation. Besides the murder of six million Jews, it killed millions of Soviet prisoners of war and civilians, Poles, Roma, disabled people and others. In the Asia-Pacific, Japan’s war brought massacres, forced labour and famine across occupied China and Southeast Asia ({{asia-pacific-war}})."
     ],
     pro:[
      "Numbers are uncertain because records were destroyed or never kept, borders moved, and famine and disease deaths are hard to separate from violence. Give ranges, sources and what is counted.",
      "Dating the war is itself an argument: 1939 centres Europe; 1937 or 1931 centres China; 1941 centres the United States. Rana Mitter’s *Forgotten Ally* (2013) argues that China’s war was long neglected in Western accounts.",
      "Debates seminars often meet: why Japan surrendered (Tsuyoshi Hasegawa, *Racing the Enemy*, 2005, stresses Soviet entry); the morality and necessity of the atomic bombings; how far the war, by weakening European empires, accelerated decolonisation ({{decolonization}}); and how memory politics in Europe and East Asia still shape relations between states.",
      "The tribunals’ legal legacy is large: the charges of crimes against humanity and aggression (“crimes against peace”) feed directly into today’s international criminal law and the International Criminal Court ({{international-courts}}). So does the critique: that only the defeated were tried, and that some Allied actions, such as area bombing, were never judged."
     ]
    },
    related:["interwar-crisis","asia-pacific-war","united-nations","bretton-woods-institutions","decolonization"],
    read:[{book:"owh2", where:"Chapter 13 “The Causes and Consequences of World War II”"}],
    sources:[{t:"Britannica: World War II, costs of the war", url:"https://britannica.com/event/World-War-II/Costs-of-the-war"},{t:"The National WWII Museum: Research Starters, worldwide deaths in World War II", url:"https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war"},{t:"United States Holocaust Memorial Museum: Learn about the Holocaust", url:"https://www.ushmm.org/learn/holocaust"}],
    checked:"2026-11"},

   {id:"asia-pacific-war", title:"The Asia-Pacific War (1931/1937–45)", aka:["Pacific War","Second Sino-Japanese War","Fifteen Years’ War","Greater East Asia War"], tags:["international studies","history","Asia-Pacific"],
    summary:"Japan’s wars in China, Southeast Asia and the Pacific, from Manchuria (1931) and full-scale war with China (1937) to surrender in 1945, and their contested memory.",
    levels:{
     starter:[
      "Japan occupied Manchuria in 1931 and began full-scale war with China in July 1937. In December 1941 it attacked Pearl Harbor, Malaya, Hong Kong and the Philippines, and soon ruled most of Southeast Asia.",
      "Occupation brought great suffering: massacres such as at Nanjing (1937), forced labour, famine and the system of military brothels whose victims are known as “comfort women”.",
      "After the atomic bombings of Hiroshima (6 August 1945) and Nagasaki (9 August) and the Soviet declaration of war (8 August), Japan announced surrender on 15 August and signed on 2 September 1945.",
      {key:"For much of Asia, the Second World War began years before 1939 and was a war against Japan’s empire."}
     ],
     builder:[
      {table:[["Name","What it emphasises"],["Pacific War","The US–Japan war, from 1941"],["Second Sino-Japanese War / War of Resistance","China’s war, from 1937"],["Asia-Pacific War","The whole region, often from 1931 or 1937"],["Fifteen Years’ War","Used by some in Japan, counting from 1931"]]},
      "Japan described its empire as a “Greater East Asia Co-Prosperity Sphere”. In some colonies, such as Indonesia and Burma, occupation authorities armed and organised nationalist groups, which later fought for independence against returning European powers ({{decolonization}}).",
      "In the 1993 Kōno Statement, Japan’s government acknowledged that the wartime military was “directly or indirectly” involved in the comfort stations and apologised; disputes over responsibility and redress continue, especially between Japan and South Korea.",
      {table:[["Date","Event"],["18 September 1931","Mukden incident; occupation of Manchuria"],["7 July 1937","Marco Polo Bridge clash; full-scale war with China"],["December 1937","Fall of Nanjing and the Nanjing Massacre"],["7–8 December 1941","Attacks on Pearl Harbor, Malaya, Hong Kong and the Philippines"],["February 1942","Fall of Singapore"],["June 1942","Battle of Midway"],["6 and 9 August 1945","Atomic bombings of Hiroshima and Nagasaki"],["8 August 1945","Soviet declaration of war"],["2 September 1945","Formal surrender"]]}
     ],
     pro:[
      "Contested memory is a core topic in East Asian IR. Seminars meet the Tokyo tribunal and its critics (including Justice Pal’s dissent), Japan’s acceptance of the tribunal’s judgments in the 1951 San Francisco Peace Treaty ({{cold-war-in-asia}}), textbook controversies, and visits by politicians to the Yasukuni Shrine, which honours Japan’s war dead including convicted war criminals.",
      "The scholarly approach: separate established facts (that atrocities such as Nanjing occurred) from disputed details (death tolls), report ranges with sources, and describe positions (“the Chinese government says…”, “some Japanese historians argue…”) without adopting one.",
      "Key works: John Dower, *Embracing Defeat* (1999), on Japan under occupation; Rana Mitter, *Forgotten Ally* (2013), on China’s war; Tsuyoshi Hasegawa, *Racing the Enemy* (2005), on the surrender.",
      "A long-running debate asks how far Japan’s occupation of Southeast Asia accelerated decolonisation. Occupation destroyed the myth of European invincibility and in places armed nationalist movements, but it was also brutal and exploitative; historians stress that nationalists in Indonesia, Burma, Vietnam and elsewhere had their own aims and turned against Japan as well as against the returning colonial powers."
     ]
    },
    related:["interwar-crisis","world-war-two","cold-war-in-asia","decolonization"],
    read:[{book:"owh2", where:"Chapter 13, sections 13.1 “An Unstable Peace”, 13.2 “Theaters of War” and 13.4 “Out of the Ashes”"}],
    sources:[{t:"City of Hiroshima: the atomic bombing and its death toll", url:"https://www.city.hiroshima.lg.jp/site/english/9803.html"},{t:"Nagasaki Peace site: damage caused by the atomic bombing", url:"https://nagasakipeace.jp/en/reference/materials/kids/higai.html"},{t:"US-China Institute: review of The Nanking Atrocity, 1937–38", url:"https://china.usc.edu/node/21689"}],
    checked:"2026-11"},

   {id:"cold-war-in-asia", title:"The Cold War in Asia", aka:["Korean War","Vietnam War","San Francisco system","hub and spokes","Sino-Soviet split"], tags:["international studies","history","Asia-Pacific"],
    summary:"How the Cold War became hot in Asia: the Chinese revolution, the Korean and Vietnam wars, the San Francisco system of US alliances, the Sino-Soviet split and an ending unlike Europe’s.",
    levels:{
     starter:[
      "In Asia the Cold War involved real wars. The Communists won China’s civil war and founded the People’s Republic on 1 October 1949. North Korea invaded the South in June 1950; China entered the war in October 1950; an armistice stopped the fighting in July 1953, but there is still no peace treaty.",
      "In Vietnam, France’s colonial war (1946–54) was followed by a US war that ended with the fall of Saigon on 30 April 1975.",
      "Japan, occupied from 1945 to 1952, signed the San Francisco Peace Treaty and a security treaty with the United States in 1951.",
      {key:"The Cold War in Asia mixed superpower rivalry with civil war, revolution and decolonisation."}
     ],
     builder:[
      "**The San Francisco system:** the Peace Treaty (signed 8 September 1951 by Japan and 48 Allied nations; in force 28 April 1952), plus bilateral US alliances with Japan (1951), the Philippines (1951), Australia and New Zealand (ANZUS, 1951), South Korea (1953) and the Republic of China (1954–80), and SEATO (1954–77). Neither Chinese government was invited to San Francisco; the Soviet Union refused to sign.",
      "**Hub and spokes:** unlike NATO, these alliances linked each ally to the United States rather than to each other. Victor Cha (*Powerplay*, 2016) argues the United States wanted to restrain its allies; others stress regional reluctance to ally with Japan.",
      "**Triangle:** the Sino-Soviet split (from the late 1950s; border clashes in 1969) let the United States open to China (Nixon’s visit, 1972). Japan normalised relations with Beijing in 1972, the United States in 1979.",
      "Vietnam in brief: Ho Chi Minh declared independence on 2 September 1945; France was defeated at Dien Bien Phu in May 1954; the Geneva Accords divided Vietnam temporarily; US combat troops arrived from 1965; the Paris Peace Accords were signed in January 1973; and Saigon fell on 30 April 1975."
     ],
     pro:[
      "Debates: Korea’s war as civil war or international war (Bruce Cumings versus documents from Soviet archives showing Stalin’s approval of the invasion); whether “proxy war” hides local agency (Odd Arne Westad, {{odd-arne-westad}}); and why US alliance design in Asia differed from Europe.",
      "The San Francisco treaty’s territorial clauses renounced Japanese claims without always naming who gained sovereignty. That ambiguity is one root of disputes that remain unresolved as of 2026. Describe them neutrally, using each side’s name for contested places where relevant.",
      "The Cold War’s end in Asia differed: communist parties kept power in China, Vietnam, Laos and North Korea; Korea stayed divided; democratisation came through popular movements in the Philippines (1986), South Korea (1987), Taiwan (from 1987) and Mongolia (1990). Some scholars argue the Cold War never fully ended in East Asia."
     ]
    },
    related:["cold-war","asia-pacific-war","end-of-the-cold-war","odd-arne-westad","nuclear-weapons"],
    read:[{book:"owh2", where:"Chapter 14, sections 14.2 “The Spread of Communism” and 14.4 “Global Tensions and Decolonization”"}],
    sources:[{t:"National Diet Library (Japan): The San Francisco Peace Treaty and the US–Japan Security Treaty", url:"https://www.ndl.go.jp/modern/e/cha5/description14.html"},{t:"EBSCO Research Starters: Treaty of Peace with Japan is signed in San Francisco", url:"https://www.ebsco.com/research-starters/history/treaty-peace-japan-signed-san-francisco"},{t:"Office of the Historian (US Department of State): Kennan and containment, 1947", url:"https://history.state.gov/departmenthistory/short-history/kennan"}],
    checked:"2026-11"},

   {id:"end-of-the-cold-war", title:"The end of the Cold War (1985–91)", aka:["fall of the Berlin Wall","glasnost","perestroika","1989 revolutions","collapse of the Soviet Union"], tags:["international studies","history"],
    summary:"How the Cold War ended, from Gorbachev’s reforms to the 1989 revolutions and the Soviet Union’s dissolution in 1991, and why scholars still argue about why.",
    levels:{
     starter:[
      "Mikhail Gorbachev became Soviet leader in 1985 and launched **glasnost** (openness) and **perestroika** (restructuring). He signed the INF Treaty (1987) and withdrew from Afghanistan (1989).",
      "In 1989 communist governments in Eastern Europe fell, mostly peacefully. The Berlin Wall opened on 9 November 1989, Germany reunified on 3 October 1990, and the Soviet Union dissolved in December 1991 into 15 states.",
      "In China, protests were crushed on 4 June 1989 and the Communist Party stayed in power.",
      {key:"The Cold War ended with surprisingly little violence in Europe, and with no clean ending in East Asia."}
     ],
     builder:[
      {table:[["Explanation","Emphasis"],["Realist","Soviet economic decline and overstretch (Brooks and Wohlforth, 2000)"],["Liberal","Interdependence and Helsinki human rights norms (Daniel Thomas, *The Helsinki Effect*, 2001)"],["Constructivist","Gorbachev’s “new thinking” (Robert English, 2000)"],["Individuals and people","Leaders’ choices and mass protest"]]},
      "None of the main IR theories predicted a peaceful end, a point John Lewis Gaddis made in 1992. That failure fuelled the rise of constructivism ({{constructivism}}).",
      {table:[["Date", "Event"], ["1985", "Gorbachev becomes Soviet leader"], ["1986", "Vietnam launches Đổi Mới market reforms"], ["December 1987", "INF Treaty"], ["February 1989", "Soviet withdrawal from Afghanistan completed"], ["4 June 1989", "Poland’s partly free elections; crackdown in Beijing"], ["9 November 1989", "Berlin Wall opens"], ["3 October 1990", "Germany reunified"], ["December 1991", "Soviet Union dissolves"]]},
      "In East Asia the same years brought democratisation through popular movements in the Philippines (1986) and South Korea (1987), the lifting of martial law in Taiwan (1987) and multi-party politics in Mongolia (1990), while China’s Communist Party kept power and deepened market reforms."
     ],
     pro:[
      "Dating varies: 1989 (the Wall), 1990 (German unity and the Charter of Paris) or December 1991 (Soviet dissolution). Each choice implies a view of what the Cold War was: a division of Europe, a superpower rivalry, or an ideological contest.",
      "Post-Cold War arguments begin here. Whether Western leaders promised in 1990 that NATO would not expand eastward is disputed; Mary Sarotte’s *Not One Inch* (2021) is the most cited archival study. Present the evidence and the positions without adopting one.",
      "For Asia, the end meant normalisation (China–South Korea relations in 1992), the Cambodian peace agreements (1991) and continued division in Korea ({{cold-war-in-asia}}).",
      "For IR theory, the end of the Cold War was a test that the main theories were judged to have failed: realism expected a declining superpower to fight rather than let its alliance dissolve. Constructivists answered that ideas and identities had changed in Moscow; realists replied that material decline forced the choices. The debate shaped the field for a generation and fed the optimism of Fukuyama’s “end of history” ({{post-cold-war-order}})."
     ]
    },
    related:["cold-war","cold-war-in-asia","post-cold-war-order","constructivism"],
    read:[{book:"owh2", where:"Chapter 14, section 14.5 “A New World Order”"}],
    sources:[{t:"Britannica: Cold War", url:"https://www.britannica.com/event/Cold-War"},{t:"United Nations: Growth in United Nations membership", url:"https://www.un.org/en/about-us/growth-in-un-membership"}],
    checked:"2026-11"},

   {id:"third-world-project", title:"The Third World project", aka:["Bandung","Non-Aligned Movement","Group of 77","New International Economic Order","NIEO","Third World"], tags:["international studies","history","Global South"],
    summary:"The attempt by newly independent states, from Bandung (1955) to the New International Economic Order (1974), to build a fairer world order through solidarity, non-alignment and the UN.",
    levels:{
     starter:[
      "**Third World** was coined in 1952 by the French demographer Alfred Sauvy, comparing poorer countries to the “Third Estate” of the French Revolution: ignored, but wanting to count.",
      "Newly independent states built a common voice: the Bandung Conference of 29 Asian and African governments (1955), the Non-Aligned Movement (Belgrade, 1961, 25 countries), the Group of 77 at the UN (1964) and the call for a New International Economic Order (1974).",
      "They wanted an end to colonialism and racism, freedom from Cold War blocs, fairer trade and more voice in world institutions.",
      {key:"Decolonisation wasn’t only about flags: new states tried to change the rules of the world order."}
     ],
     builder:[
      {table:[["Year","Milestone"],["1955","Bandung: ten principles"],["1960","UN resolution 1514 on independence"],["1961","First Non-Aligned summit, Belgrade"],["1962","Assembly endorses permanent sovereignty over natural resources"],["1964","G77 and UNCTAD (Raúl Prebisch)"],["1974","NIEO Declaration (resolution 3201); Charter of Economic Rights and Duties of States"]]},
      "The NIEO asked for fairer commodity prices, the right to nationalise natural resources, rules for multinational corporations, technology transfer and more say in the IMF and World Bank. Major industrial economies opposed most of it; the 1982 debt crisis and structural adjustment reversed its direction ({{development-ir}}).",
      "Bandung (18–24 April 1955) was sponsored by Burma, Ceylon (Sri Lanka), India, Indonesia and Pakistan. Its final communiqué set out ten principles, including respect for human rights and the UN Charter, sovereignty and territorial integrity, the equality of races and nations, non-intervention and peaceful settlement of disputes. The Non-Aligned Movement’s founding leaders included Tito (Yugoslavia), Nehru (India), Nasser (Egypt), Sukarno (Indonesia) and Nkrumah (Ghana)."
     ],
     pro:[
      "Vijay Prashad’s *The Darker Nations* (2007) calls it the “Third World project” and traces its rise and its defeat by debt, authoritarianism and division. Adom Getachew’s *Worldmaking after Empire* (2019) reads anticolonial thinkers as world-makers who saw self-determination as freedom from domination in the world economy, not just independence.",
      "Critics note the movement’s diversity and contradictions: members fought wars with each other, many were authoritarian, and some aligned closely with one bloc while claiming non-alignment. Bandung itself included US allies such as Pakistan, the Philippines, Thailand, Turkey and Japan alongside China.",
      "Legacy: today’s “Global South” language ({{global-ir}}), demands for UN Security Council and IMF reform, and India’s “strategic autonomy” all draw on this history.",
      "IR theory meets this history in several places: dependency and world-systems theory ([[dependency-theory]], [[world-systems-theory]]), the Prebisch–Singer thesis on falling commodity prices, Global IR’s call to take non-Western ideas seriously, and postcolonial critiques of a world order designed before most of today’s states existed."
     ]
    },
    related:["decolonization","development-ir","global-ir","theories-global-inequality"],
    read:[{book:"owh2", where:"Chapter 14, section 14.3 “The Non-Aligned Movement”"}],
    sources:[{t:"Office of the Historian (US Department of State): Bandung Conference (Asian-African Conference), 1955", url:"https://history.state.gov/milestones/1953-1960/bandung-conf"},{t:"Archives of Yugoslavia: the first conference of non-aligned countries, Belgrade 1961", url:"https://arhivyu.rs/en/izlozbe/izlozbe-arhiva/2021_prva_konferentsija_shefova_drzhava_ili_vlada_nesvrstanikh_zemalja_beograd_1961"},{t:"United Nations: Decolonization (global issues)", url:"https://www.un.org/en/global-issues/decolonization"}],
    checked:"2026-11"},

   {id:"post-cold-war-order", title:"The world since 1991", aka:["unipolar moment","liberal international order","globalisation","rise of China","multipolarity"], tags:["international studies","history","current debates"],
    summary:"From US predominance and globalisation to 9/11, the 2008 crisis and the rise of China and India, and the debate as of 2026 about whether the liberal international order is ending.",
    levels:{
     starter:[
      "After 1991 the United States was the only superpower, a “unipolar moment”. Trade and finance globalised; the WTO opened in 1995 and China joined in 2001.",
      "Big shocks followed: the Asian financial crisis (1997–98), the attacks of 11 September 2001 and the wars in Afghanistan and Iraq, and the global financial crisis of 2008.",
      "China became the second-largest economy in 2010, and India the most populous country in 2023 (by UN estimates). Russia invaded Ukraine in February 2022.",
      {key:"The big question of the field today: is the US-led liberal order ending, changing, or being renegotiated?"}
     ],
     builder:[
      {table:[["Idea","Author","Date"],["Unipolar moment","Charles Krauthammer","1990/91"],["End of history","Francis Fukuyama","1989; book 1992"],["Clash of civilizations","Samuel Huntington","1993; book 1996"],["Globalisation trilemma","Dani Rodrik","2011"],["Resilient liberal order","G. John Ikenberry","2001, 2011"],["Order “bound to fail”","John Mearsheimer","2019"],["Multiplex world","Amitav Acharya","2014"]]},
      "Groupings multiplied: the G20 leaders’ summits (from 2008), BRICS (summits from 2009, expanded from 2024), the Quad (revived 2017) and Japan’s “Free and Open Indo-Pacific” (from 2016). On 2 March 2022 the UN General Assembly demanded Russia’s withdrawal from Ukraine by 141 votes to 5, with many abstentions.",
      "Key events, with dates: the Gulf War (1991); the WTO’s opening (1995); the Asian financial crisis (1997–98); NATO enlargement (1999, 2004); China’s WTO entry (December 2001); the 9/11 attacks (2001) and the wars in Afghanistan (from 2001) and Iraq (from 2003); the collapse of Lehman Brothers (September 2008) and the first G20 leaders’ summit (November 2008); China passing Japan as the second-largest economy (2010); the Belt and Road Initiative (2013); and Russia’s annexation of Crimea (2014) and full-scale invasion of Ukraine (2022)."
     ],
     pro:[
      "Write about this period with dates and attribution. Facts change monthly: as of November 2026, the United States had announced sweeping tariffs (2025) and completed withdrawals from the WHO and the Paris Agreement (January 2026); observers disagree about what these show.",
      "Contested questions to present neutrally: NATO enlargement and Russia (Mearsheimer 2014 versus his critics; Sarotte 2021 on the 1990 assurances); the legality of the 2003 Iraq war; whether the liberal order was ever liberal or international (Allison 2018; many Global South scholars); and how to describe today’s polarity ({{realism}}, {{liberalism-ir}}, {{global-ir}}).",
      "Avoid predictions in academic writing on live debates. Report positions, evidence and what each author counts as power or order, then argue your own view clearly labelled.",
      "Globalisation’s critics and defenders also need careful handling. Joseph Stiglitz (*Globalization and Its Discontents*, 2002) attacked IMF policy in the Asian crisis; Branko Milanovic (*Global Inequality*, 2016) showed who gained from 1988 to 2008; Dani Rodrik (*The Globalization Paradox*, 2011) set out the trilemma of hyperglobalisation, democracy and national sovereignty. Supporters stress the fall in extreme poverty, especially in East and South Asia."
     ]
    },
    related:["end-of-the-cold-war","global-ir","realism","liberalism-ir","bretton-woods-institutions","global-trade"],
    read:[{book:"owh2", where:"Chapter 15 “The Contemporary World and Ongoing Challenges”"},{book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’”"}],
    sources:[{t:"UN DESA Population Division: India overtakes China as the world’s most populous country", url:"https://www.un.org/development/desa/pd/node/4293"},{t:"Permanent Mission of Germany to the UN: General Assembly resolution on aggression against Ukraine (2 March 2022)", url:"https://new-york-un.diplo.de/un-en/2515114-2515114"}],
    checked:"2026-11"},

   {id:"eric-hobsbawm", title:"Eric Hobsbawm", aka:["Hobsbawm","The Age of Extremes","short twentieth century"], tags:["international studies","thinkers","history"],
    summary:"British Marxist historian (1917–2012) whose four “Age of…” books, ending with The Age of Extremes (1994) on the “short twentieth century” of 1914–1991, framed how many people periodise modern history.",
    levels:{
     starter:[
      "Eric Hobsbawm was a British historian, born in Alexandria, Egypt, in 1917, who grew up in Vienna and Berlin and spent his teaching career in London. He died in 2012.",
      "He wrote four famous surveys of world history: *The Age of Revolution* (1962), *The Age of Capital* (1975), *The Age of Empire* (1987) and *The Age of Extremes* (1994).",
      "*The Age of Extremes* called 1914–1991 the **“short twentieth century”**: an era that began with the First World War and ended with the collapse of the Soviet Union.",
      {key:"When a seminar talks about the “short twentieth century”, it is borrowing Hobsbawm’s frame."}
     ],
     builder:[
      "Hobsbawm divided the short century into an “Age of Catastrophe” (1914 to the late 1940s), a “Golden Age” of postwar growth, and a “Landslide” of crisis from the 1970s. *The Age of Empire* covers 1875–1914, the world of Lesson 1 of this unit.",
      "Two other books are widely used in IR and nationalism studies: *The Invention of Tradition* (1983, edited with Terence Ranger), on how “ancient” national traditions were often recent creations, and *Nations and Nationalism since 1780* (1990).",
      "Use him in seminars for periodisation (why 1914 and 1991?), for the link between economics and politics, and for nationalism as a modern construction ([[nationalism]]).",
      "In seminars, *The Age of Extremes* is useful for its big claims: that the world wars and the Depression were one connected catastrophe, that the postwar “Golden Age” of growth was historically unusual, and that the century’s central conflict was between capitalism and the communist alternative born in 1917. Each of these can be tested against Asian, African or Latin American evidence."
     ],
     pro:[
      "Hobsbawm joined the British Communist Party in 1936 and stayed a member for decades, though he publicly opposed the Soviet interventions in Hungary (1956) and Czechoslovakia (1968). Critics argued that this made him too forgiving of the Soviet experiment; admirers point to the range and clarity of his synthesis.",
      "Edward Said, reviewing *The Age of Extremes* in the *London Review of Books* (1995), criticised its preference for Western authorities on non-Western matters. Global historians since then have written world histories less centred on Europe.",
      "His periodisation is itself debatable: from Asia, 1945 (empire’s end), 1949 (China) or 1978 (China’s reforms) can look like bigger turning points than 1991.",
      "Hobsbawm’s Marxism shaped his questions more than his conclusions: he stressed economic change, class and the material roots of politics, while writing narrative history for general readers. His work on nationalism remains central to the “modernist” view that nations are recent creations, a view challenged by scholars such as Anthony D. Smith, who stressed older ethnic roots."
     ]
    },
    related:["world-war-one","end-of-the-cold-war","odd-arne-westad","world-in-1900"],
    sources:[{t:"The Scotsman: Obituary, Eric Hobsbawm, historian", url:"https://www.scotsman.com/news/obituaries/obituary-eric-hobsbawm-historian-1605856"},{t:"London Review of Books: Edward Said, “Contra Mundum” (review of Age of Extremes, 1995)", url:"https://www.lrb.co.uk/v17/n05/edward-said/contra-mundum"}],
    checked:"2026-11"},

   {id:"odd-arne-westad", title:"Odd Arne Westad", aka:["Westad","The Global Cold War"], tags:["international studies","thinkers","history"],
    summary:"Norwegian historian (born 1960) whose The Global Cold War (2005) moved the Cold War’s centre from Europe to Asia, Africa and Latin America.",
    levels:{
     starter:[
      "Odd Arne Westad is a Norwegian historian of the Cold War and of China, born in 1960. He has held professorships in Britain and the United States.",
      "His best-known book, *The Global Cold War* (2005), won the Bancroft Prize. It argues that the Cold War’s most important and deadliest effects were in the Third World, where the superpowers intervened in revolutions and civil wars.",
      {key:"Westad’s question: what did the Cold War look like from Angola, Vietnam or Afghanistan rather than from Washington or Moscow?"}
     ],
     builder:[
      "Key works: *Decisive Encounters* (2003), on the Chinese civil war; *The Global Cold War* (2005); *Restless Empire: China and the World since 1750* (2012); *The Cold War: A World History* (2017). He co-edited the three-volume *Cambridge History of the Cold War*.",
      "His argument: both superpowers saw themselves as carrying universal ideologies, and both intervened in the Third World to prove them, while local actors used superpower aid for their own aims. That is why “proxy war” is only part of the story ([[proxy-war]]).",
      "Use him in seminars to decentre the Cold War, and to connect it with decolonisation ({{third-world-project}}).",
      "*The Global Cold War* covers US and Soviet interventions from Vietnam to Angola, Ethiopia, Iran, Afghanistan and Central America. Its subtitle, *Third World Interventions and the Making of Our Times*, signals its claim that many of today’s conflicts and regimes have roots in those interventions."
     ],
     pro:[
      "Westad belongs to the “global” or “international history” turn, which uses archives from many countries (including Soviet, Chinese and Eastern European records opened after 1991) and asks how local actors shaped great-power policy.",
      "Debates: some historians think ideology-centred accounts like his underplay security and economic interests; others argue that even “global” Cold War histories still organise the story around the superpowers. His later work on China and on China–Korea relations brings the same long view to East Asia.",
      "For IR students, his work is a model of combining structure (bipolarity) with agency (local revolutionaries and governments).",
      "Seminar uses: pair Westad with Gaddis to compare superpower-centred and global accounts; with Prashad or Getachew to compare the Cold War and the Third World project; and with Cumings or Logevall for case studies in Korea and Vietnam ({{cold-war-in-asia}})."
     ]
    },
    related:["cold-war","cold-war-in-asia","third-world-project","eric-hobsbawm"],
    sources:[{t:"Faculty profile: Odd Arne Westad", url:"https://fas.yale.edu/news-announcements/new-faculty-announcements/new-ladder-faculty-and-professors-2019-20/odd-arne-westad"},{t:"Wikipedia: Odd Arne Westad", url:"https://en.wikipedia.org/wiki/Odd_Arne_Westad"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"imperialism", term:"Imperialism", def:"Extending a state’s power over other peoples, either by formal rule (colonies) or by informal control through loans, trade privileges, “advisers” and threats of force.", codex:"world-in-1900"},
   {id:"scramble-for-africa", term:"Scramble for Africa", def:"The rush by European powers, from about 1880 to 1914, to claim almost all of Africa; by 1914 only Ethiopia and Liberia remained independent.", codex:"world-in-1900"},
   {id:"extraterritoriality", term:"Extraterritoriality", def:"An arrangement under which foreigners are exempt from local courts and tried by courts of their own country, as in the unequal treaties imposed on China and Japan.", codex:"world-in-1900"},
   {id:"unequal-treaty", term:"Unequal treaty", def:"A treaty imposed by stronger powers that limits a weaker state’s sovereignty, for example by fixing its tariffs or granting foreigners extraterritoriality; the term was used especially for 19th-century treaties with China, Japan and Siam.", codex:"world-in-1900"},
   {id:"meiji-restoration", term:"Meiji Restoration (1868)", def:"The overthrow of Japan’s Tokugawa shogunate in the name of the emperor, followed by rapid state-building, industrialisation and military reform.", codex:"russo-japanese-war"},
   {id:"anglo-japanese-alliance", term:"Anglo-Japanese Alliance (1902)", def:"A treaty of 30 January 1902 in which Britain and Japan promised neutrality if the other fought one power over China or Korea, and help if a second power joined; it lapsed in 1923.", codex:"russo-japanese-war"},
   {id:"standard-of-civilisation", term:"Standard of civilisation", def:"The test 19th- and early 20th-century European powers used to decide which non-European states counted as full, equal members of international society; Gerrit Gong (1984) reconstructed it.", codex:"world-in-1900"},
   {id:"total-war", term:"Total war", def:"War in which states mobilise their whole society and economy, not just armies, and the line between soldiers and civilians blurs, as in the two world wars.", codex:"world-war-one"},
   {id:"armistice", term:"Armistice", def:"An agreement between warring sides to stop fighting. It is not a peace treaty: the Korean armistice of 1953 has never been replaced by one.", codex:"world-war-one"},
   {id:"racial-equality-proposal", term:"Racial Equality Proposal (1919)", def:"Japan’s proposal to add a statement of racial equality to the League of Nations Covenant; a majority on the drafting commission supported it, but it was excluded when the chair ruled that unanimity was needed.", codex:"treaty-of-versailles"},
   {id:"collective-security", term:"Collective security", def:"An arrangement in which all members treat aggression against any one of them as an attack on all; unlike an alliance, it is aimed at any aggressor, including a member.", codex:"league-of-nations"},
   {id:"mandate-system", term:"Mandate system", def:"The League of Nations arrangement (Article 22) under which victor states administered former German colonies and Ottoman Arab provinces, in A, B and C classes, under League supervision.", codex:"league-of-nations"},
   {id:"great-depression", term:"Great Depression", def:"The worldwide economic collapse that began with the Wall Street crash of October 1929, bringing bank failures, mass unemployment, falling prices and a collapse in world trade.", codex:"interwar-crisis"},
   {id:"fascism", term:"Fascism", def:"A form of extreme nationalist politics, first in Italy (1922) and Nazi Germany (1933), marked by a cult of the leader, glorified violence and hostility to liberalism and communism; scholars define it in different ways.", codex:"interwar-crisis"},
   {id:"appeasement", term:"Appeasement", def:"A policy of making concessions to a threatening power to avoid war, especially Britain and France’s policy towards Nazi Germany up to the Munich agreement of 1938.", codex:"interwar-crisis"},
   {id:"holocaust", term:"Holocaust", def:"The systematic, state-sponsored persecution and murder of six million Jews by Nazi Germany and its collaborators during the Second World War.", codex:"world-war-two"},
   {id:"atomic-bombings", term:"Atomic bombings of Hiroshima and Nagasaki", def:"The US nuclear attacks on Hiroshima (6 August 1945) and Nagasaki (9 August 1945), the only uses of nuclear weapons in war; each city counts its dead by the end of 1945 at about 140,000 and 73,884.", codex:"asia-pacific-war"},
   {id:"war-crimes-tribunals", term:"War crimes tribunals (Nuremberg and Tokyo)", def:"The international military tribunals at Nuremberg (1945–46) and Tokyo (1946–48) that tried German and Japanese leaders, including for the new charges of crimes against peace and crimes against humanity.", codex:"world-war-two"},
   {id:"iron-curtain", term:"Iron curtain", def:"Winston Churchill’s 1946 image for the division of Europe between the Soviet-dominated East and the West.", codex:"cold-war"},
   {id:"containment", term:"Containment", def:"The US Cold War strategy of stopping the spread of Soviet power and communism, named by George Kennan in 1947.", codex:"cold-war"},
   {id:"communism", term:"Communism", def:"A political ideology aiming at a classless society; in its 20th-century Soviet form, a one-party state guided by Marxism–Leninism that owned most of the economy.", codex:"cold-war"},
   {id:"historiography", term:"Historiography", def:"The study of how historians have interpreted a subject and how those interpretations have changed, for example the orthodox, revisionist and post-revisionist schools on the Cold War’s origins.", codex:"cold-war"},
   {id:"arms-control", term:"Arms control", def:"Agreements between rivals to limit, test or verify weapons while their rivalry continues, such as the Partial Test Ban Treaty (1963) or SALT I (1972); disarmament aims to reduce or remove weapons altogether.", codex:"nuclear-weapons"},
   {id:"domino-theory", term:"Domino theory", def:"The Cold War belief, voiced by President Eisenhower in 1954, that if one country fell to communism its neighbours would follow, used to justify US intervention in Southeast Asia.", codex:"cold-war-in-asia"},
   {id:"proxy-war", term:"Proxy war", def:"A war in which outside powers back opposing local sides instead of fighting each other directly; historians warn that the label can hide local actors’ own aims.", codex:"cold-war-in-asia"},
   {id:"san-francisco-system", term:"San Francisco system", def:"The postwar order in the Asia-Pacific built on the 1951 peace treaty with Japan and a set of separate US alliances (“hub and spokes”) with Japan, South Korea, the Philippines, Australia, New Zealand and others.", codex:"cold-war-in-asia"},
   {id:"sino-soviet-split", term:"Sino-Soviet split", def:"The breakdown of the alliance between China and the Soviet Union from the late 1950s, leading to border clashes in 1969 and opening the way for US–China rapprochement.", codex:"cold-war-in-asia"},
   {id:"detente", term:"Détente", def:"The relaxation of Cold War tension in the 1970s, marked by arms control (SALT I, 1972) and the Helsinki Final Act (1975).", codex:"cold-war"},
   {id:"glasnost-perestroika", term:"Glasnost and perestroika", def:"Mikhail Gorbachev’s reforms from the mid-1980s: glasnost (openness, more freedom of speech) and perestroika (restructuring of the economy and politics).", codex:"end-of-the-cold-war"},
   {id:"partition", term:"Partition", def:"The division of a territory into separate states, especially the 1947 division of British India into India and Pakistan, which displaced millions and caused mass violence.", codex:"decolonization"},
   {id:"third-world", term:"Third World", def:"A term coined by Alfred Sauvy in 1952 for countries outside the Western and Soviet blocs; it began as a political idea of a third way and later came to mean poorer countries. Many writers now prefer “Global South”.", codex:"third-world-project"},
   {id:"developmental-state", term:"Developmental state", def:"A state whose capable bureaucracy makes economic growth its top goal and guides investment into chosen industries, as in Japan, South Korea and Taiwan; the term comes from Chalmers Johnson (1982).", codex:"third-world-project"},
   {id:"unipolar-moment", term:"Unipolar moment", def:"Charles Krauthammer’s phrase (1990/91) for the period after the Cold War when the United States was the only superpower.", codex:"post-cold-war-order"},
   {id:"end-of-history", term:"End of history", def:"Francis Fukuyama’s argument (1989; book 1992) that liberal democracy had no serious ideological rival left; a claim about ideas, not that events would stop.", codex:"post-cold-war-order"},
   {id:"clash-of-civilizations", term:"Clash of civilizations", def:"Samuel Huntington’s thesis (1993; book 1996) that future conflicts would run along the boundaries between civilisations defined largely by religion and culture; widely criticised.", codex:"post-cold-war-order"},
   {id:"war-on-terror", term:"War on terror", def:"The name the US government gave to its global campaign against terrorist groups after 11 September 2001, including the wars in Afghanistan and Iraq; the label itself is debated.", codex:"post-cold-war-order"},
   {id:"global-financial-crisis", term:"Global financial crisis (2008)", def:"The financial crisis that began in the US housing market and became global after Lehman Brothers collapsed in September 2008, causing the deepest recession since the 1930s.", codex:"post-cold-war-order"},
   {id:"liberal-international-order", term:"Liberal international order", def:"The rules and institutions built mainly under US leadership after 1945 and widened after 1991: open trade, multilateral organisations, alliances and liberal democratic values. Whether it is ending is debated.", codex:"post-cold-war-order"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u1-q01", lesson:"e4u1-l1", level:1, q:"What did extraterritoriality mean in the unequal treaties?", options:[
     {t:"Foreigners from treaty powers were tried by their own consuls’ courts, not by local courts", ok:true, why:"Right. Exemption from local law was the clearest sign of unequal status."},
     {t:"Foreign states could annex any territory they occupied", why:"Annexation is formal colonial rule; extraterritoriality left the territory under local sovereignty but exempted foreigners from local courts."},
     {t:"Local people could sue foreign governments in international courts", why:"No such courts existed for this, and the arrangement protected foreigners, not local people."},
     {t:"Foreign goods entered with no tariffs at all", why:"The treaties fixed low tariffs, a separate privilege; extraterritoriality is about courts."}]},
   {id:"e4u1-q02", lesson:"e4u1-l1", level:2, q:"Lucía reads that in 1898 Germany obtained a long lease on Jiaozhou Bay in China, with rights to railways and mines, without annexing China. Which concept best describes this kind of control?", options:[
     {t:"Informal empire", ok:true, why:"Right. Control through leases, concessions and pressure, short of ruling the whole country, is what Gallagher and Robinson called informal empire."},
     {t:"Collective security", why:"Collective security is a joint promise to resist aggression, not one power’s control over another."},
     {t:"Decolonisation", why:"Decolonisation is the end of colonial rule; this is an extension of foreign control."},
     {t:"The mandate system", why:"Mandates were created by the League of Nations after 1919, not in 1898."}]},
   {id:"e4u1-q03", lesson:"e4u1-l1", level:1, q:"What did the Anglo-Japanese Alliance of 1902 commit each partner to do?", options:[
     {t:"Stay neutral if its partner fought one other power over China or Korea, and come to its aid if a second power joined in", ok:true, why:"Right. Those were the treaty’s core terms."},
     {t:"Merge their navies under British command", why:"The alliance kept two separate navies and governments."},
     {t:"Divide China between them", why:"The treaty spoke of protecting each side’s interests in China, not of partitioning it."},
     {t:"Join the League of Nations together", why:"The League didn’t exist until 1920."}]},
   {id:"e4u1-q04", lesson:"e4u1-l1", level:2, q:"Which explanation of the “new imperialism” is J. A. Hobson’s (1902)?", options:[
     {t:"Capital that couldn’t find profitable uses at home pushed investors to seek returns abroad", ok:true, why:"Right. Hobson’s *Imperialism: A Study* is the classic economic explanation."},
     {t:"Officials took territory mainly to protect sea routes to India", why:"That strategic argument is Robinson and Gallagher’s (1961)."},
     {t:"Empire grew from a sense of religious duty alone", why:"That is an ideological explanation, and Hobson stressed economics."},
     {t:"Empires were forced on Europe by African rulers", why:"No major scholar argues this; the “local crises” view says frontier events pulled capitals in, not that Africans imposed empire."}]},
   {id:"e4u1-q05", lesson:"e4u1-l1", level:3, q:"In a seminar, Amara says: “Japan’s victory in 1905 was a victory for all Asian peoples.” Which response best reflects the historical evidence?", options:[
     {t:"It inspired many nationalists across Asia and beyond, but for Koreans it led to a Japanese protectorate and then annexation, so its meaning depended on where you stood.", ok:true, why:"Right. Good analysis keeps both effects in view and asks “for whom?”."},
     {t:"Agreed: it ended colonial rule throughout Asia.", why:"It didn’t: European empires in Asia lasted decades, and Japan itself expanded its empire."},
     {t:"Wrong: no one outside Japan noticed the war.", why:"The war was reported worldwide and celebrated by many nationalists."},
     {t:"Wrong: Russia won the war.", why:"Japan won the main battles, and the Treaty of Portsmouth gave it Russia’s rights in southern Manchuria."}]},
   {id:"e4u1-q06", lesson:"e4u1-l1", level:2, q:"Why did Meiji Japan adopt legal codes, courts and a constitution partly modelled on European examples?", options:[
     {t:"Partly to meet the “standard of civilisation” so that the powers would end the unequal treaties", ok:true, why:"Right. Treaty revision followed: extraterritoriality ended in 1899 and tariff autonomy came in 1911."},
     {t:"Because the League of Nations required it", why:"The League didn’t exist until 1920; Japan’s reforms began in the 1870s–80s."},
     {t:"Because Britain had colonised Japan", why:"Japan was never a colony; it was bound by unequal treaties."},
     {t:"To join the Warsaw Pact", why:"The Warsaw Pact was founded in 1955 by the Soviet Union and its allies."}]},
   {id:"e4u1-q07", lesson:"e4u1-l1", level:1, q:"By 1914, which two African states remained free of European colonial rule?", options:[
     {t:"Ethiopia and Liberia", ok:true, why:"Right. Ethiopia defeated Italy at Adwa in 1896; Liberia had been independent since 1847."},
     {t:"Egypt and Morocco", why:"Egypt was under British occupation from 1882, and Morocco became a French and Spanish protectorate in 1912."},
     {t:"Ghana and Nigeria", why:"Both were British colonies until 1957 and 1960."},
     {t:"South Africa and Kenya", why:"Both were within the British Empire."}]},
   {id:"e4u1-q08", lesson:"e4u1-l1", level:3, q:"A student writes: “In 1900 international law treated every state as equal.” What is the best correction?", options:[
     {t:"International law then openly ranked peoples as “civilised”, “barbarous” or “savage”; states like China were bound by unequal treaties and colonised peoples weren’t recognised as states.", ok:true, why:"Right. The hierarchy was written into the law of the time."},
     {t:"International law didn’t exist in 1900.", why:"It did: there were treaties, conferences such as The Hague (1899) and legal writers. It just wasn’t equal."},
     {t:"The claim is correct; inequality began only with the Cold War.", why:"Inequality was explicit in 1900, through the standard of civilisation and colonial rule."},
     {t:"Only the United States was treated as a full member.", why:"European powers, Latin American republics and later Japan were also full members."}]},
   {id:"e4u1-q09", lesson:"e4u1-l1", level:1, q:"Who mediated the Treaty of Portsmouth (1905) that ended the Russo-Japanese War?", options:[
     {t:"US president Theodore Roosevelt", ok:true, why:"Right, and he received the 1906 Nobel Peace Prize for it."},
     {t:"The League of Nations", why:"The League was founded in 1920."},
     {t:"Woodrow Wilson", why:"Wilson was president from 1913; he chaired the League commission in 1919."},
     {t:"Queen Victoria", why:"Victoria died in 1901, and Britain wasn’t the mediator."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u1-q10", lesson:"e4u1-l2", level:1, q:"What was the armistice of 11 November 1918?", options:[
     {t:"An agreement to stop the fighting, before any peace treaty", ok:true, why:"Right. The peace treaties came later, starting with Versailles in June 1919."},
     {t:"The Treaty of Versailles", why:"Versailles was signed on 28 June 1919, months later."},
     {t:"Germany’s unconditional surrender in 1945", why:"That ended the Second World War in Europe."},
     {t:"The founding of the League of Nations", why:"The League began work in January 1920."}]},
   {id:"e4u1-q11", lesson:"e4u1-l2", level:2, q:"What happened to Japan’s Racial Equality Proposal at the League of Nations Commission on 11 April 1919?", options:[
     {t:"11 of the 17 delegates present voted for it, but the chair, Woodrow Wilson, ruled that unanimity was needed, so it was left out", ok:true, why:"Right. It was supported by a majority and excluded by a ruling."},
     {t:"It was rejected by a large majority", why:"A majority voted for it."},
     {t:"It was adopted and written into the Covenant", why:"It wasn’t included in the Covenant."},
     {t:"Japan withdrew it before the vote", why:"Japan pressed it to a vote on 11 April."}]},
   {id:"e4u1-q12", lesson:"e4u1-l2", level:1, q:"How does collective security differ from an ordinary alliance?", options:[
     {t:"Collective security commits all members against any aggressor, even another member; an alliance is aimed at a known outside threat", ok:true, why:"Right. That universal promise was the League’s central idea."},
     {t:"Collective security means each state defends only itself", why:"That is self-help, the opposite."},
     {t:"An alliance always includes every state in the world", why:"Alliances are limited groups facing a particular threat."},
     {t:"There is no difference", why:"The difference in who the promise is aimed at is fundamental."}]},
   {id:"e4u1-q13", lesson:"e4u1-l2", level:2, q:"What was Japan’s “South Seas Mandate”?", options:[
     {t:"Former German islands in Micronesia, north of the equator, administered by Japan under League of Nations supervision", ok:true, why:"Right. It was a C-class mandate, one of the territories Japan took from Germany in 1914."},
     {t:"Japan’s colony in Taiwan, won in 1895", why:"Taiwan was ceded by China in 1895, long before the mandate system."},
     {t:"A trade agreement with Australia", why:"Mandates were territories, not trade deals."},
     {t:"A UN trust territory created in 1945", why:"After 1945 the islands became a US-administered UN trust territory; the mandate was a League arrangement."}]},
   {id:"e4u1-q14", lesson:"e4u1-l2", level:3, q:"Dmitri says: “The League of Nations failed completely, so it teaches us nothing.” Which reply is best supported by the lesson?", options:[
     {t:"It failed against great-power aggression, but it settled smaller disputes, helped refugees and fought disease, and scholars such as Pedersen show the mandates exposed empire to scrutiny; the UN’s designers also learned from its flaws.", ok:true, why:"Right. A balanced verdict separates its failures from its lasting effects."},
     {t:"Agreed: it never did anything.", why:"It had real successes, such as the Åland Islands settlement and Nansen passports."},
     {t:"It was a success: it prevented the Second World War.", why:"It didn’t prevent the war; it failed over Manchuria and Ethiopia."},
     {t:"The United States led it successfully until 1946.", why:"The United States never joined the League."}]},
   {id:"e4u1-q15", lesson:"e4u1-l2", level:2, q:"What did Charles Kindleberger argue in *The World in Depression, 1929–1939* (1973)?", options:[
     {t:"The slump was so deep because no country acted as a stabiliser: Britain could not and the United States would not", ok:true, why:"Right. His argument became a root of hegemonic stability theory."},
     {t:"The Depression was caused only by the Treaty of Versailles", why:"Kindleberger focused on the lack of international economic leadership, not on one treaty."},
     {t:"Tariffs had no effect on world trade", why:"Rising tariffs and blocs were part of the collapse in world trade."},
     {t:"The Soviet Union caused the crash of 1929", why:"The crash began on Wall Street; the Soviet economy was largely cut off from world markets."}]},
   {id:"e4u1-q16", lesson:"e4u1-l2", level:2, q:"What happened in the Mukden incident of 18 September 1931?", options:[
     {t:"Officers of Japan’s Kwantung Army staged an explosion on a Japanese-owned railway, blamed Chinese troops and used it to occupy Manchuria", ok:true, why:"Right. This is the historical consensus; Japan then set up Manchukuo."},
     {t:"Chinese forces invaded Japan", why:"The incident took place in Manchuria, in China, and led to Japanese occupation."},
     {t:"The League of Nations sent troops to Manchuria", why:"The League sent a commission of inquiry (Lytton), not troops."},
     {t:"Japan and China signed a peace treaty", why:"It began a period of Japanese expansion, not peace."}]},
   {id:"e4u1-q17", lesson:"e4u1-l2", level:3, q:"Kenji is writing a seminar paper that mentions the Nanjing Massacre of 1937. Which approach meets academic standards?", options:[
     {t:"State that historians agree a mass atrocity took place, and give the range of death-toll estimates with their sources, noting that the number is disputed", ok:true, why:"Right. Separate the established event from the disputed figure and attribute each number."},
     {t:"Choose the highest number found online and present it as certain", why:"Picking one number without sources or acknowledging the range misrepresents the evidence."},
     {t:"Leave the event out because it is contested", why:"The event itself is established; only the numbers are disputed."},
     {t:"Say that nothing can be known about it", why:"There is extensive evidence that the atrocity occurred; uncertainty concerns the scale."}]},
   {id:"e4u1-q18", lesson:"e4u1-l2", level:1, q:"What does Tsuyoshi Hasegawa argue in *Racing the Enemy* (2005)?", options:[
     {t:"The Soviet declaration of war on Japan was at least as decisive for Japan’s surrender as the atomic bombs", ok:true, why:"Right. His work is central to the debate on why Japan surrendered when it did."},
     {t:"Japan never surrendered", why:"Japan signed the instrument of surrender on 2 September 1945."},
     {t:"The atomic bombs were never used", why:"Hiroshima and Nagasaki were bombed on 6 and 9 August 1945."},
     {t:"The Cold War began in 1919", why:"His book is about the end of the war with Japan in 1945."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u1-q19", lesson:"e4u1-l3", level:1, q:"Who gave the US Cold War strategy of “containment” its name?", options:[
     {t:"George Kennan, in his 1947 “X” article", ok:true, why:"Right. He called for “long-term, patient but firm and vigilant containment”."},
     {t:"Mikhail Gorbachev", why:"Gorbachev was the Soviet leader in the late 1980s."},
     {t:"Mao Zedong", why:"Mao led China; containment was a US strategy against Soviet expansion."},
     {t:"Charles Krauthammer", why:"Krauthammer coined “unipolar moment” in 1990/91."}]},
   {id:"e4u1-q20", lesson:"e4u1-l3", level:2, q:"What does “hub and spokes” describe in the Asia-Pacific after 1951?", options:[
     {t:"Separate bilateral alliances linking each ally to the United States, rather than one alliance in which all members defend each other", ok:true, why:"Right. NATO in Europe was multilateral; the Asia-Pacific system was a set of spokes."},
     {t:"A Soviet railway network in Siberia", why:"It is an image for alliance design, not transport."},
     {t:"An alliance of all Asian states against the United States", why:"The spokes were US allies."},
     {t:"The trade routes of the Belt and Road Initiative", why:"That initiative dates from 2013, not from the 1950s."}]},
   {id:"e4u1-q21", lesson:"e4u1-l3", level:1, q:"How did the Korean War end?", options:[
     {t:"With an armistice in July 1953; no peace treaty has been signed", ok:true, why:"Right. The armistice stopped the fighting and created the Demilitarized Zone."},
     {t:"With a peace treaty signed in San Francisco in 1951", why:"The San Francisco treaty was Japan’s peace treaty; the Korean War was still being fought."},
     {t:"With the reunification of Korea in 1991", why:"Korea remains divided."},
     {t:"With a UN Security Council resolution in 1950", why:"Resolutions in 1950 concerned helping South Korea; the fighting continued until 1953."}]},
   {id:"e4u1-q22", lesson:"e4u1-l3", level:2, q:"Which statement about the San Francisco Peace Treaty (1951) is accurate?", options:[
     {t:"Neither Chinese government was invited, and the Soviet Union attended but refused to sign", ok:true, why:"Right. Japan and 48 Allied nations signed."},
     {t:"Every country that had fought Japan signed it", why:"China, the Soviet Union and others did not sign."},
     {t:"It created NATO", why:"NATO was founded in 1949 by the North Atlantic Treaty."},
     {t:"It ended the US occupation of Okinawa immediately", why:"Okinawa stayed under US administration until 1972."}]},
   {id:"e4u1-q23", lesson:"e4u1-l3", level:3, q:"Sione reads that the Vietnam War was “simply a proxy war between Moscow and Washington”. How would Odd Arne Westad’s work complicate this?", options:[
     {t:"Vietnamese communists and their opponents had their own aims, such as independence and unification, and used superpower support as much as they were used by it", ok:true, why:"Right. Westad stresses local agency in the “global Cold War”."},
     {t:"Westad argues the superpowers had no involvement in Vietnam", why:"He documents heavy superpower involvement; his point is that it wasn’t the whole story."},
     {t:"Westad argues it was a war between Britain and France", why:"France fought the first Indochina War, but that isn’t Westad’s argument here."},
     {t:"Westad argues the war took place in Europe", why:"The war was fought in Vietnam and neighbouring countries."}]},
   {id:"e4u1-q24", lesson:"e4u1-l3", level:2, q:"How did the Sino-Soviet split change Cold War diplomacy?", options:[
     {t:"It turned a two-sided contest into a triangle, allowing the United States to open relations with China (Nixon’s 1972 visit)", ok:true, why:"Right. The split created room for US–China rapprochement."},
     {t:"It ended the Cold War in 1960", why:"The Cold War continued for three more decades."},
     {t:"It united China and the Soviet Union more closely", why:"The split was a breakdown of their alliance."},
     {t:"It led China to join NATO", why:"China never joined NATO."}]},
   {id:"e4u1-q25", lesson:"e4u1-l3", level:1, q:"Which pair belongs to the era of détente in the 1970s?", options:[
     {t:"The SALT I and ABM agreements (1972) and the Helsinki Final Act (1975)", ok:true, why:"Right. Arms control and a European settlement with human rights commitments."},
     {t:"The Berlin blockade (1948) and the Korean War (1950)", why:"These were early Cold War crises, not détente."},
     {t:"The Treaty of Versailles (1919) and the Kellogg–Briand Pact (1928)", why:"These belong to the interwar period."},
     {t:"The Cuban Missile Crisis (1962) and the Soviet invasion of Afghanistan (1979)", why:"The 1962 crisis came before détente, and the 1979 invasion ended it."}]},
   {id:"e4u1-q26", lesson:"e4u1-l3", level:3, q:"Hana claims that “the Cold War ended in the same way everywhere in 1989–91.” Which evidence best challenges her?", options:[
     {t:"In East Asia, communist parties kept power in China, Vietnam and North Korea, Korea stayed divided, and China’s party crushed protests in June 1989", ok:true, why:"Right. The European pattern of communist collapse didn’t happen in East Asia."},
     {t:"The Berlin Wall opened on 9 November 1989", why:"That supports the European story; it doesn’t challenge it."},
     {t:"The Soviet Union dissolved in December 1991", why:"That is part of the European ending, not evidence of a different ending."},
     {t:"Germany reunified in 1990", why:"Also part of the European pattern."}]},
   {id:"e4u1-q27", lesson:"e4u1-l3", level:2, q:"John Lewis Gaddis’s 1972 book argued that both sides contributed to the Cold War through fear and misperception. Which school does this represent?", options:[
     {t:"Post-revisionist", ok:true, why:"Right. Post-revisionists spread responsibility across both sides."},
     {t:"Orthodox", why:"Orthodox accounts blamed Soviet expansion."},
     {t:"Revisionist", why:"Revisionists stressed US economic expansion."},
     {t:"Fascist", why:"Fascism is a political ideology, not a school of Cold War history."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u1-q28", lesson:"e4u1-l4", level:2, q:"How should you report the number of people killed in the partition of India in 1947?", options:[
     {t:"As a range, about 200,000 to 2 million, with the historians who give it, because records are poor and sources disagree", ok:true, why:"Right. Reporting the range and its source is the honest way to handle uncertain figures."},
     {t:"As exactly 1 million, since that is the middle", why:"A single precise figure suggests a certainty the evidence doesn’t support."},
     {t:"As “very few”, since partition was peaceful", why:"Partition involved mass violence and displaced 12 to 20 million people."},
     {t:"As unknowable, so it shouldn’t be mentioned", why:"Scale matters to the history; a sourced range is the right way to show it."}]},
   {id:"e4u1-q29", lesson:"e4u1-l4", level:1, q:"What was the Bandung Conference?", options:[
     {t:"A 1955 meeting in Indonesia of 29 Asian and African governments", ok:true, why:"Right. It called for cooperation, self-determination and an end to racial discrimination."},
     {t:"The first summit of the Non-Aligned Movement in 1961", why:"That was in Belgrade."},
     {t:"A 1919 peace conference", why:"The 1919 conference was in Paris."},
     {t:"The founding of the G20 in 2008", why:"The G20 leaders’ summits began in Washington in 2008."}]},
   {id:"e4u1-q30", lesson:"e4u1-l4", level:1, q:"Where and when did the first summit of the Non-Aligned Movement take place?", options:[
     {t:"Belgrade, September 1961", ok:true, why:"Right. Leaders of 25 countries attended."},
     {t:"Bandung, April 1955", why:"Bandung was an Asian-African conference that preceded the movement."},
     {t:"San Francisco, 1945", why:"That was the conference that wrote the UN Charter, not a Non-Aligned summit."},
     {t:"Geneva, 1954", why:"The 1954 Geneva conference dealt with Korea and Indochina."}]},
   {id:"e4u1-q31", lesson:"e4u1-l4", level:3, q:"Oluwaseun argues: “Non-aligned states were passive bystanders in the Cold War.” Which response is best supported?", options:[
     {t:"They campaigned actively against colonialism and racism, for disarmament and for a new economic order through the UN, the G77 and UNCTAD", ok:true, why:"Right. Non-alignment meant choosing one’s own course, not passivity."},
     {t:"Agreed: they didn’t take part in the UN at all", why:"They used the UN General Assembly heavily, for example resolution 1514 and the NIEO."},
     {t:"They were all secretly members of NATO", why:"Non-aligned states weren’t NATO members."},
     {t:"They only existed after 1991", why:"The movement began in 1961."}]},
   {id:"e4u1-q32", lesson:"e4u1-l4", level:2, q:"Which demand was central to the New International Economic Order (1974)?", options:[
     {t:"Permanent sovereignty over natural resources, including the right to nationalise foreign-owned mines and plantations", ok:true, why:"Right, along with fairer commodity prices, rules for multinationals and more voice in the IMF and World Bank."},
     {t:"Privatising all state companies", why:"That was a feature of later structural adjustment, the opposite direction."},
     {t:"Joining the Warsaw Pact", why:"The NIEO was an economic programme, not a military alignment."},
     {t:"Ending the United Nations", why:"Developing countries pursued the NIEO through the UN General Assembly."}]},
   {id:"e4u1-q33", lesson:"e4u1-l4", level:2, q:"Why did the New International Economic Order largely fail as a programme?", options:[
     {t:"General Assembly resolutions are recommendations, major industrial economies opposed most of it, and the 1982 debt crisis pushed indebted states towards structural adjustment", ok:true, why:"Right. Power, legal form and economic crisis all worked against it."},
     {t:"Developing countries voted against their own resolution", why:"Developing countries led and supported it."},
     {t:"It was fully implemented by 1975", why:"Most of its demands were never implemented."},
     {t:"The UN Security Council vetoed it", why:"It was a General Assembly declaration; the Security Council didn’t vote on it."}]},
   {id:"e4u1-q34", lesson:"e4u1-l4", level:1, q:"Who coined the term “developmental state”, and for which country?", options:[
     {t:"Chalmers Johnson, for Japan, in *MITI and the Japanese Miracle* (1982)", ok:true, why:"Right. The term was then applied to South Korea, Taiwan and others."},
     {t:"Raúl Prebisch, for Argentina", why:"Prebisch is associated with structuralism and UNCTAD, not this term."},
     {t:"Paul Krugman, for the Soviet Union", why:"Krugman’s 1994 essay criticised the idea of an Asian “miracle”."},
     {t:"Alfred Sauvy, for France", why:"Sauvy coined “Third World”."}]},
   {id:"e4u1-q35", lesson:"e4u1-l4", level:3, q:"A government wants to copy what Alice Amsden and Robert Wade saw as the key to South Korea’s and Taiwan’s growth. Which policy fits their account best?", options:[
     {t:"Directing cheap credit to chosen industries and demanding export performance in return", ok:true, why:"Right. State guidance plus discipline through export targets is central to their argument."},
     {t:"Removing all state involvement in the economy at once", why:"That is closer to a pure free-market view, which they rejected."},
     {t:"Closing the economy to all exports", why:"East Asian states pushed firms into export markets."},
     {t:"Relying only on more workers and machines", why:"That is Krugman’s description of what happened, not a policy Amsden and Wade recommended."}]},
   {id:"e4u1-q36", lesson:"e4u1-l4", level:2, q:"Which describes Indonesia’s path to independence?", options:[
     {t:"Independence was proclaimed on 17 August 1945; after four years of fighting and diplomacy, the Netherlands transferred sovereignty in December 1949", ok:true, why:"Right. UN and US pressure helped end the conflict."},
     {t:"The Netherlands granted independence peacefully in 1945", why:"The Netherlands fought to return and launched two large military offensives."},
     {t:"Indonesia became independent in 1960, the Year of Africa", why:"1960 was the Year of Africa; Indonesia’s independence came earlier."},
     {t:"Indonesia was partitioned along religious lines in 1947", why:"That describes British India."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u1-q37", lesson:"e4u1-l5", level:1, q:"What did Charles Krauthammer mean by the “unipolar moment”?", options:[
     {t:"The period after the Cold War when the United States was the only superpower", ok:true, why:"Right. He used the phrase in *Foreign Affairs* in 1990/91."},
     {t:"A moment when all states agreed on one ideology", why:"That is closer to Fukuyama’s argument about ideas."},
     {t:"The founding of the United Nations", why:"The UN was founded in 1945, in a very different distribution of power."},
     {t:"A brief nuclear crisis in 1962", why:"The Cuban Missile Crisis happened in a bipolar world."}]},
   {id:"e4u1-q38", lesson:"e4u1-l5", level:2, q:"Which statement about Huntington’s “clash of civilizations” is accurate?", options:[
     {t:"It predicted conflict along civilisational lines; critics such as Edward Said attacked its picture of civilisations as solid blocks, and quantitative studies found little support", ok:true, why:"Right. It remains influential and heavily criticised."},
     {t:"It argued that liberal democracy had no rivals left", why:"That was Fukuyama’s argument."},
     {t:"It was a UN resolution", why:"It was an article (1993) and a book (1996) by a scholar."},
     {t:"Scholars almost all accept it", why:"It is one of the most criticised theses of the period."}]},
   {id:"e4u1-q39", lesson:"e4u1-l5", level:3, q:"Ana writes: “Fukuyama was wrong, because wars continued after 1989.” What is the best feedback?", options:[
     {t:"Fukuyama’s claim was about ideas: that liberal democracy had no serious ideological rival. To test it, ask whether credible rival models of government have since emerged.", ok:true, why:"Right. Criticise the argument he actually made."},
     {t:"Correct: Fukuyama predicted that wars would stop.", why:"He didn’t predict an end to wars; that misreads him."},
     {t:"Fukuyama wrote about the clash of civilizations.", why:"That was Huntington."},
     {t:"Fukuyama’s argument was about trade tariffs.", why:"His argument was about political ideology."}]},
   {id:"e4u1-q40", lesson:"e4u1-l5", level:2, q:"In Rodrik’s trilemma, what does the “golden straitjacket” combine, and what does it sacrifice?", options:[
     {t:"Hyperglobalisation and national sovereignty, at the cost of democratic politics", ok:true, why:"Right. Governments follow markets’ rules, narrowing what voters can choose."},
     {t:"Democratic politics and national sovereignty, at the cost of hyperglobalisation", why:"That is the “Bretton Woods compromise”."},
     {t:"Hyperglobalisation and democratic politics, at the cost of national sovereignty", why:"That is “global federalism”."},
     {t:"All three corners at once", why:"The point of the trilemma is that you can’t have all three."}]},
   {id:"e4u1-q41", lesson:"e4u1-l5", level:1, q:"Where and when did the Asian financial crisis begin?", options:[
     {t:"Thailand, July 1997, when its currency collapsed", ok:true, why:"Right. It spread to Indonesia, South Korea, Malaysia and beyond."},
     {t:"The United States, September 2008", why:"That was the global financial crisis."},
     {t:"Mexico, August 1982", why:"That began the Latin American debt crisis."},
     {t:"Japan, October 1929", why:"The 1929 crash began on Wall Street in New York."}]},
   {id:"e4u1-q42", lesson:"e4u1-l5", level:2, q:"How did the 2008 financial crisis change global economic governance?", options:[
     {t:"G20 leaders began meeting, and in 2009 named the G20 the premier forum for international economic cooperation, giving rising economies a seat at the top table", ok:true, why:"Right. That shift is often cited as institutions adapting."},
     {t:"The IMF was abolished", why:"The IMF continued and lent heavily during the crisis."},
     {t:"The WTO was founded", why:"The WTO opened in 1995."},
     {t:"The Bretton Woods conference was held", why:"Bretton Woods met in 1944."}]},
   {id:"e4u1-q43", lesson:"e4u1-l5", level:3, q:"Priya is asked in a seminar whether the liberal international order is ending. Which answer best meets academic standards on a contested issue?", options:[
     {t:"“As of November 2026, scholars disagree. Ikenberry sees a resilient, reformable order; Mearsheimer one that was bound to fail; Acharya a ‘multiplex’ world. Here is the evidence each uses, and my own view, labelled as mine.”", ok:true, why:"Right. It dates the claim, attributes positions and separates analysis from opinion."},
     {t:"“It collapsed on a specific date, and anyone who disagrees is wrong.”", why:"That asserts a contested claim without evidence and dismisses other views."},
     {t:"“It will certainly end by 2030.”", why:"A confident prediction isn’t evidence; academic writing on live debates avoids that."},
     {t:"“I can’t say anything because it is political.”", why:"Contested issues can be analysed fairly by reporting positions and evidence."}]},
   {id:"e4u1-q44", lesson:"e4u1-l5", level:2, q:"What happened to NATO’s Article 5 after the attacks of 11 September 2001?", options:[
     {t:"NATO invoked it for the first time in its history", ok:true, why:"Right. Allies treated the attack on the United States as an attack on all."},
     {t:"NATO abolished it", why:"Article 5 remains the core of the North Atlantic Treaty."},
     {t:"The UN Security Council vetoed it", why:"Article 5 is part of NATO’s treaty, not a UN decision."},
     {t:"It was used to admit China to NATO", why:"China isn’t a NATO member, and Article 5 concerns collective defence."}]},
   {id:"e4u1-q45", lesson:"e4u1-l5", level:3, q:"A headline says: “China is now the world’s biggest economy.” Another says the United States is. Before deciding, what should Tomás check first?", options:[
     {t:"How GDP was measured (market exchange rates or purchasing power parity), which source and which year", ok:true, why:"Right. The two measures rank countries differently, so both headlines can be accurate for their own measure."},
     {t:"Which headline is longer", why:"Length says nothing about accuracy."},
     {t:"Which country the journalist comes from", why:"Nationality isn’t evidence; the measure and source are."},
     {t:"Which answer he would prefer", why:"Preference isn’t evidence."}]}
  ]
});
