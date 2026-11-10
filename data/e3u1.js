/* Japanese Foundations · Unit 1 (e3u1) · Kana and the sounds of Japanese (JLPT N5) */
ICA.addUnit({
  id:"e3u1", track:"e3", n:1, title:"Kana and the sounds of Japanese", icon:"🔤",
  blurb:"How Japanese writing works and why it uses three scripts; hiragana row by row with the gojūon (“fifty sounds”) table; the marks and small kana that make new sounds; long vowels; katakana and loanwords; and the rhythm and pitch that make Japanese sound like Japanese.",
  goals:[
    "Explain what kanji, hiragana, katakana and romaji each do, and why Japanese mixes them in one sentence",
    "Read and write all 46 basic hiragana, using the [五十音]{ごじゅうおん} table to organise them",
    "Read the voiced sounds (が, ざ, だ, ば, ぱ), the combined sounds (きゃ, しゅ, ちょ…), small っ and long vowels, and spell them correctly",
    "Read and write katakana, including the long-vowel bar ー and combinations such as ティ and ファ, and tell look-alikes such as シ and ツ apart",
    "Count morae, hear why rhythm changes meaning, and describe the basic pitch patterns of standard Tokyo Japanese",
    "Set up a daily kana routine with the Kanji Lab so that what you learn this week stays learned"
  ],
  read:[
    {book:"taekim", where:"Grammar Guide → The Writing System: “Chapter Overview”, “Hiragana” and “Katakana”"},
    {book:"irodori", where:"Starter ([入門]{にゅうもん}), Lessons 1 and 2: the kana pages, also collected in the free PDF “Hiragana Words and Katakana Words” (Other Resources)"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e3u1-l1", title:"How Japanese writing works", minutes:45,
   hook:{q:"A typical sentence in a Japanese newspaper or on a shop sign uses how many different scripts (kinds of writing)?", options:["One: Japanese has one alphabet","Two: Chinese characters and an alphabet","Three, often all in the same sentence","Five, one for each vowel"], answer:2, reveal:"**Three, often in one sentence.** Everyday Japanese mixes **kanji** (characters that carry meaning), **hiragana** (curvy kana for grammar and native words) and **katakana** (angular kana mostly for words from other languages). On top of that, you will see the Latin alphabet (romaji) on signs and keyboards. It sounds like a lot, but each script has its own job, and the two kana scripts share the same 46 basic sounds. This lesson shows how the pieces fit together."},
   goals:[
     "Name the three Japanese scripts and say what each one is mainly used for",
     "Explain why Japanese mixes scripts, and how that helps a reader without spaces between words",
     "Use Hepburn romaji as a bridge while you learn kana, and know its limits",
     "Pronounce the five Japanese vowels and read the layout of the [五十音]{ごじゅうおん} table",
     "Plan how you will learn kana: mnemonics, writing by hand and daily spaced review"
   ],
   learn:[
    {h:"One sentence, three scripts", body:[
      {lead:"Here is an ordinary Japanese sentence. It is short, but it already uses three different kinds of writing."},
      {ex:"ミンさんは[毎朝]{まいあさ}コーヒーを[飲]{の}みます。\nMin-san wa maiasa kōhī o nomimasu.\n“Min drinks coffee every morning.”", label:"Example"},
      "The small kana printed above some characters are [[furigana]]: reading help for the kanji underneath. You will see them on every kanji in this course at N5 level, so you never have to guess a reading.",
      {table:[["Piece","Script","Why this script?"],["ミン (*Min*)","Katakana","A name from another language"],["さん、は (*san, wa*)","Hiragana","A polite title and a grammar word"],["[毎朝]{まいあさ} (*maiasa*)","Kanji","A word with meaning: “every morning”"],["コーヒー (*kōhī*)","Katakana","A loanword: “coffee”"],["を (*o*)","Hiragana","A grammar word that marks the object"],["[飲]{の} + みます (*no + mimasu*)","Kanji + hiragana","The kanji carries the meaning “drink”; hiragana adds the polite ending"]]},
      "Notice that there are **no spaces** between words. Japanese doesn’t normally use them. The change from one script to another does much of the work that spaces do in English: your eye sees where the name ends, where the meaning words are and where the grammar is.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">One sentence, three scripts</text><rect class="d-lup" x="16" y="30" width="80" height="56" rx="8" stroke-width="2"/><text x="56" y="54" text-anchor="middle">ミン</text><text class="s" x="56" y="74" text-anchor="middle">Min</text><rect class="d-sage" x="104" y="30" width="100" height="56" rx="8" stroke-width="2"/><text x="154" y="54" text-anchor="middle">さんは</text><text class="s" x="154" y="74" text-anchor="middle">san wa</text><rect class="d-rose" x="212" y="30" width="112" height="56" rx="8" stroke-width="2"/><text x="268" y="54" text-anchor="middle">毎朝</text><text class="s" x="268" y="74" text-anchor="middle">maiasa</text><rect class="d-lup" x="16" y="98" width="96" height="56" rx="8" stroke-width="2"/><text x="64" y="122" text-anchor="middle">コーヒー</text><text class="s" x="64" y="142" text-anchor="middle">kōhī</text><rect class="d-sage" x="120" y="98" width="50" height="56" rx="8" stroke-width="2"/><text x="145" y="122" text-anchor="middle">を</text><text class="s" x="145" y="142" text-anchor="middle">o</text><rect class="d-rose" x="178" y="98" width="50" height="56" rx="8" stroke-width="2"/><text x="203" y="122" text-anchor="middle">飲</text><text class="s" x="203" y="142" text-anchor="middle">no</text><rect class="d-sage" x="236" y="98" width="88" height="56" rx="8" stroke-width="2"/><text x="280" y="122" text-anchor="middle">みます</text><text class="s" x="280" y="142" text-anchor="middle">mimasu</text><text x="170" y="178" text-anchor="middle">“Min drinks coffee every morning.”</text><rect class="d-rose" x="16" y="196" width="22" height="22" rx="4" stroke-width="2"/><text x="48" y="211">Kanji: words and stems with meaning</text><text class="s" x="48" y="228">毎朝 (every morning), 飲 (drink)</text><rect class="d-sage" x="16" y="240" width="22" height="22" rx="4" stroke-width="2"/><text x="48" y="255">Hiragana: grammar, endings, titles</text><text class="s" x="48" y="272">さん, は, を, みます</text><rect class="d-lup" x="16" y="284" width="22" height="22" rx="4" stroke-width="2"/><text x="48" y="299">Katakana: loanwords, foreign names</text><text class="s" x="48" y="316">ミン, コーヒー</text></svg>', alt:"The sentence ミンさんは毎朝コーヒーを飲みます split into coloured boxes: katakana ミン and コーヒー, hiragana さんは, を and みます, and kanji 毎朝 and 飲, with a key explaining each script’s job.", cap:"Each script has a job. Kanji carry meaning, hiragana carry grammar, katakana mark borrowed words and foreign names."}
    ]},
    {h:"Why three scripts?", body:[
      "Japanese borrowed **[[kanji-term|kanji]]** ([漢字]{かんじ}, *kanji*, “Han characters”) from China more than a thousand years ago. Each kanji stands for a meaning and has one or more readings. Kanji are good at meaning, but Japanese grammar is very different from Chinese: it adds endings to verbs and adjectives and uses small grammar words after nouns. Kanji alone could not show those parts clearly.",
      "So Japanese writers created two sets of sound symbols, together called **[[kana]]** ([仮名]{かな}). Each kana stands for a sound, not a meaning.",
      {list:[
        "**[[hiragana|Hiragana]]** (ひらがな) grew out of flowing, cursive ways of writing whole kanji. For example, あ (*a*) comes from a cursive form of [安]{あん}. Hiragana looks round and soft.",
        "**[[katakana|Katakana]]** (カタカナ) was made from **parts** of kanji. For example, カ (*ka*) is the left side of [加]{か}. Buddhist monks used these quick marks as reading notes. Katakana looks straight and angular."
      ]},
      "Today the three scripts share the work:",
      {table:[["Script","Main jobs today","Examples"],["Kanji","Nouns and the meaning part (stem) of verbs and adjectives","[山]{やま} mountain, [飲]{の}む drink"],["Hiragana","Grammar words (particles), word endings, native words without common kanji, furigana","は, を, ～ます, ありがとう"],["Katakana","Loanwords, names from other languages, many sound words, emphasis","コーヒー, アナ, ワンワン (woof)"]]},
      "The endings written in hiragana after a kanji, like the みます in [飲]{の}みます, are called [[okurigana]]. You will meet them properly in Unit 4.",
      "There are many kanji. The official list for general use ([常用漢字]{じょうようかんじ}, *jōyō kanji*) has 2,136 of them. That is why you start with kana: with hiragana (46 basic shapes, plus a few marks and small kana you will meet in Lesson 3) you can already write **any** Japanese word by its sound, even before you know its kanji. Children’s books and learner materials do exactly that.",
      {tip:"Writing a word in hiragana when you don’t know its kanji is normal and correct. Japanese children and adults do it too. As you learn kanji, you will switch common words over."}
    ]},
    {h:"Romaji: a bridge, not a destination", body:[
      "**[[romaji|Romaji]]** (ローマ[字]{じ}, *rōmaji*) means Japanese written in the Latin alphabet. You see it on station signs, maps, passports and product labels for visitors. You also use it every day for **typing**: on most keyboards you type *ka* and the computer shows か.",
      "This course uses **[[hepburn|Hepburn]]** romaji, the system most learners and most signs use. A few spellings follow English habits, so that English readers say them roughly right: し is *shi*, ち is *chi*, つ is *tsu*, ふ is *fu* and じ is *ji*. Long vowels get a line on top: *ō*, *ū*, *ā*. Where hiragana spells a long sound with い, as in いい or えい, this course writes *ii* and *ei* (*oniisan*, *sensei*).",
      "In 2025 Japan’s government issued a new official romaji standard (Cabinet Notice No. 4 of 2025). It replaced the 1954 rules, which preferred spellings such as *si* and *tu*, with spellings close to Hepburn. It allows long vowels either with a mark (*Ōno*) or doubled (*Oono*), and it writes ん as *n* everywhere. Older signs and books may still use other spellings, so don’t be surprised to see *Tokyo*, *Tōkyō* and *Toukyou*.",
      "Romaji is a useful bridge for this first unit, so you will see it next to the kana here. From Unit 2 on, examples drop it. There are good reasons to cross the bridge quickly:",
      {list:[
        "Real Japanese text (menus, messages, books) almost never uses romaji.",
        "Romaji hides details that kana show. *Ō* could be written おう or おお in kana, and you need to know which.",
        "Romaji pulls your pronunciation towards English. *Ri* is not the English “ree”, and *e* is not “ee”."
      ]},
      {warn:"Romaji for **typing** is not always the same as Hepburn spelling. To type とうきょう you key *toukyou*, letter for letter, even though Hepburn writes *Tōkyō*. Lesson 3 explains why."}
    ]},
    {h:"Five vowels and a simple pattern", body:[
      "Japanese has only **five vowels**, and they are always written in this order: あ い う え お (*a i u e o*). Each one has one steady sound. It doesn’t glide into another vowel the way English “no” or “day” do.",
      {table:[["Kana","Romaji","Roughly like…"],["あ","a","the “a” in “father”, but short"],["い","i","the “ee” in “meet”, but short"],["う","u","the “oo” in “food”, short, with relaxed lips (not pushed forward)"],["え","e","the “e” in “get”"],["お","o","the “o” in “port” (British) or “more”, short and pure"]]},
      "Almost every other kana is **a consonant plus one of these vowels**: か is *k* + *a*, に is *n* + *i*, も is *m* + *o*. Two special kana have no vowel of their own: ん (*n*) and a small っ (a pause). You will meet both soon.",
      "Each kana takes about the same amount of time to say. That gives Japanese its even, beat-like rhythm. The beat is called a [[mora]] (plural *morae*), and Lesson 5 is about it. For now, remember: **one kana, one beat** (with a few exceptions you will learn).",
      {key:"Japanese has five pure vowels, a i u e o, and most kana are a consonant plus one of them. Learn the vowels well and every row of kana follows."}
    ]},
    {h:"The gojūon table: a grid for all the kana", body:[
      "Kana are arranged in a grid called the [五十音]{ごじゅうおん} (**[[gojuuon|gojūon]]**, “fifty sounds”). Once you understand the grid, you aren’t learning 46 random shapes. You are learning 10 rows (the vowel row and nine consonant rows) crossed with 5 vowel columns, plus ん.",
      {list:[
        "The **columns** are the five vowels: *a, i, u, e, o*.",
        "The **rows** start with the vowel row (あ row), then a consonant each: **k, s, t, n, h, m, y, r, w**. Each row is named after its first kana: か[行]{ぎょう} (*ka-gyō*, the ka row), さ[行]{ぎょう} (*sa-gyō*) and so on.",
        "ん (*n*) stands alone at the end."
      ]},
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="18" text-anchor="middle">Rows × vowel columns = kana</text><text class="s" x="22" y="44" text-anchor="middle">row</text><text x="74" y="44" text-anchor="middle">a</text><text x="132" y="44" text-anchor="middle">i</text><text x="190" y="44" text-anchor="middle">u</text><text x="248" y="44" text-anchor="middle">e</text><text x="306" y="44" text-anchor="middle">o</text><text x="22" y="80" text-anchor="middle">–</text><rect class="d-panel" x="46" y="54" width="56" height="44" rx="6" stroke-width="1.5"/><text x="74" y="74" text-anchor="middle">あ</text><text class="s" x="74" y="91" text-anchor="middle">a</text><rect class="d-panel" x="104" y="54" width="56" height="44" rx="6" stroke-width="1.5"/><text x="132" y="74" text-anchor="middle">い</text><text class="s" x="132" y="91" text-anchor="middle">i</text><rect class="d-panel" x="162" y="54" width="56" height="44" rx="6" stroke-width="1.5"/><text x="190" y="74" text-anchor="middle">う</text><text class="s" x="190" y="91" text-anchor="middle">u</text><rect class="d-panel" x="220" y="54" width="56" height="44" rx="6" stroke-width="1.5"/><text x="248" y="74" text-anchor="middle">え</text><text class="s" x="248" y="91" text-anchor="middle">e</text><rect class="d-panel" x="278" y="54" width="56" height="44" rx="6" stroke-width="1.5"/><text x="306" y="74" text-anchor="middle">お</text><text class="s" x="306" y="91" text-anchor="middle">o</text><text x="22" y="126" text-anchor="middle">k</text><rect class="d-panel" x="46" y="100" width="56" height="44" rx="6" stroke-width="1.5"/><text x="74" y="120" text-anchor="middle">か</text><text class="s" x="74" y="137" text-anchor="middle">ka</text><rect class="d-panel" x="104" y="100" width="56" height="44" rx="6" stroke-width="1.5"/><text x="132" y="120" text-anchor="middle">き</text><text class="s" x="132" y="137" text-anchor="middle">ki</text><rect class="d-panel" x="162" y="100" width="56" height="44" rx="6" stroke-width="1.5"/><text x="190" y="120" text-anchor="middle">く</text><text class="s" x="190" y="137" text-anchor="middle">ku</text><rect class="d-panel" x="220" y="100" width="56" height="44" rx="6" stroke-width="1.5"/><text x="248" y="120" text-anchor="middle">け</text><text class="s" x="248" y="137" text-anchor="middle">ke</text><rect class="d-panel" x="278" y="100" width="56" height="44" rx="6" stroke-width="1.5"/><text x="306" y="120" text-anchor="middle">こ</text><text class="s" x="306" y="137" text-anchor="middle">ko</text><text x="22" y="172" text-anchor="middle">s</text><rect class="d-panel" x="46" y="146" width="56" height="44" rx="6" stroke-width="1.5"/><text x="74" y="166" text-anchor="middle">さ</text><text class="s" x="74" y="183" text-anchor="middle">sa</text><rect class="d-gold" x="104" y="146" width="56" height="44" rx="6" stroke-width="2"/><text x="132" y="166" text-anchor="middle">し</text><text class="s" x="132" y="183" text-anchor="middle">shi</text><rect class="d-panel" x="162" y="146" width="56" height="44" rx="6" stroke-width="1.5"/><text x="190" y="166" text-anchor="middle">す</text><text class="s" x="190" y="183" text-anchor="middle">su</text><rect class="d-panel" x="220" y="146" width="56" height="44" rx="6" stroke-width="1.5"/><text x="248" y="166" text-anchor="middle">せ</text><text class="s" x="248" y="183" text-anchor="middle">se</text><rect class="d-panel" x="278" y="146" width="56" height="44" rx="6" stroke-width="1.5"/><text x="306" y="166" text-anchor="middle">そ</text><text class="s" x="306" y="183" text-anchor="middle">so</text><text x="22" y="218" text-anchor="middle">t</text><rect class="d-panel" x="46" y="192" width="56" height="44" rx="6" stroke-width="1.5"/><text x="74" y="212" text-anchor="middle">た</text><text class="s" x="74" y="229" text-anchor="middle">ta</text><rect class="d-gold" x="104" y="192" width="56" height="44" rx="6" stroke-width="2"/><text x="132" y="212" text-anchor="middle">ち</text><text class="s" x="132" y="229" text-anchor="middle">chi</text><rect class="d-gold" x="162" y="192" width="56" height="44" rx="6" stroke-width="2"/><text x="190" y="212" text-anchor="middle">つ</text><text class="s" x="190" y="229" text-anchor="middle">tsu</text><rect class="d-panel" x="220" y="192" width="56" height="44" rx="6" stroke-width="1.5"/><text x="248" y="212" text-anchor="middle">て</text><text class="s" x="248" y="229" text-anchor="middle">te</text><rect class="d-panel" x="278" y="192" width="56" height="44" rx="6" stroke-width="1.5"/><text x="306" y="212" text-anchor="middle">と</text><text class="s" x="306" y="229" text-anchor="middle">to</text><text x="170" y="258" text-anchor="middle">…then n, h, m, y, r, w rows, and ん</text><text class="s" x="170" y="280" text-anchor="middle">Gold cells: spelled differently in Hepburn romaji</text></svg>', alt:"A grid with the vowels a, i, u, e, o across the top and the rows vowel, k, s, t down the side. Each cell shows a kana and its romaji: あいうえお, かきくけこ, さしすせそ, たちつてと. The cells し shi, ち chi and つ tsu are highlighted because their romaji is irregular.", cap:"Read across a row: the consonant stays, the vowel changes. Read down a column: the vowel stays, the consonant changes."},
      "The order matters. Japanese dictionaries, phone contacts and class lists are sorted in [五十音]{ごじゅうおん} order, the way English uses ABC. Many learners memorise the row order as a chant: **a, ka, sa, ta, na, ha, ma, ya, ra, wa**.",
      "Why “fifty” when only 46 are used? The grid has 50 places (10 rows × 5 columns), but a few places are empty or out of use. The や row has only や, ゆ, よ, and the わ row today has only わ and を. Two old kana, ゐ and ゑ, were dropped from everyday spelling after the Second World War. ん sits outside the grid. That leaves **46 basic hiragana**, and katakana has the same 46 sounds."
    ]},
    {h:"How to learn kana fast, and keep it", body:[
      "Learning kana is mostly a memory job, and memory research gives clear advice. These four habits work well together.",
      {ol:[
        "**Hiragana first, then katakana.** Hiragana appears in every sentence, so you practise it constantly. Katakana is easier once you know the sounds.",
        "**Use a picture story (a mnemonic).** Link each shape to an image and its sound. For example, い (*i*) looks like two **ee**ls side by side; ね (*ne*) has a loop like a cat’s curled tail, and *neko* (ねこ) means “cat”. Your own silly pictures work best. The Japan Foundation’s free apps **HIRAGANA Memory Hint** and **KATAKANA Memory Hint** (iPhone and Android) give a picture and sound for every kana.",
        "**Write by hand**, in the right stroke order, saying the sound aloud. Writing slows you down just enough to notice details such as the loop in ね.",
        "**Review a little every day.** Short daily practice beats one long session. Trying to recall an answer before you check it makes memory stronger. This is [[spaced-review]], and it is how the app’s **Kanji Lab** works: cards you know come back after longer and longer gaps (1, 3, 7, 14 and 30 days), and cards you miss come back tomorrow."
      ]},
      "Start reading real words as soon as you know a few rows. Being able to read ねこ (*neko*, cat) on day two is a much better reward than finishing a chart.",
      {tip:"Forgetting a kana you learned last week is completely normal. It doesn’t mean you are bad at this. It means it is time to review it. Spaced review is built around forgetting and relearning."},
      {lab:"kl-hiragana", t:"Practise: the hiragana deck, 10 new kana a day"}
    ]}
   ],
   try:[
    {id:"e3u1-l1-x1", type:"sort", q:"Which script is each piece written in?", buckets:["Kanji","Hiragana","Katakana"], items:[
      {t:"[山]{やま} (mountain)", b:0, why:"[山]{やま} is one kanji: a single character that carries the meaning “mountain”. The small やま above it is furigana showing the reading."},
      {t:"ねこ (cat)", b:1, why:"ね and こ are curvy hiragana. Native words are often written in hiragana while you are learning, and in children’s books."},
      {t:"テレビ (TV)", b:2, why:"テ, レ and ビ are angular katakana. テレビ is a loanword, short for “television”."},
      {t:"を (object marker)", b:1, why:"を is a hiragana grammar word. Particles are always written in hiragana."},
      {t:"サラ (Sara, a name)", b:2, why:"Names from other languages are written in katakana: サ and ラ are angular katakana shapes."},
      {t:"[本]{ほん} (book)", b:0, why:"[本]{ほん} is a single kanji meaning “book”, read ほん (*hon*)."}
    ]},
    {id:"e3u1-l1-x2", type:"mcq", q:"Why is コーヒー (*kōhī*, coffee) written in katakana?", options:[
      {t:"Because it is a loanword, a word Japanese took from another language", ok:true, why:"Right. Katakana’s main job today is writing loanwords and names from other languages. Japan took this word from Dutch or English."},
      {t:"Because katakana is used for all drinks", why:"Script choice doesn’t depend on the topic. The native word for tea, おちゃ (*ocha*), is written in hiragana or with kanji (お[茶]{ちゃ})."},
      {t:"Because it is more polite than hiragana", why:"Scripts don’t show politeness. Politeness is shown by word choice and endings such as ～です and ～ます."},
      {t:"Because katakana is used for words with long vowels", why:"Long vowels appear in all scripts: おかあさん (*okāsan*, mother) is hiragana. Katakana just marks them with a bar, ー."}
    ]},
    {id:"e3u1-l1-x3", type:"match", q:"Match each script to its main job.", pairs:[
      ["Kanji","Words and stems that carry meaning","Kanji stand for meanings, such as [山]{やま} (mountain) and the [飲]{の} (drink) in [飲]{の}みます."],
      ["Hiragana","Grammar words and word endings","Particles like は and を, and endings like the みます in [飲]{の}みます, are hiragana."],
      ["Katakana","Loanwords and names from other languages","コーヒー and names like アナ or ミン are written in katakana."],
      ["Romaji","Signs for visitors, passports and typing","Romaji is Japanese in Latin letters. Japanese people use it mainly for typing and for international signs."]
    ]},
    {id:"e3u1-l1-x4", type:"mcq", q:"Which spelling of ふじさん (Mount Fuji) follows Hepburn romaji, the system used in this course?", options:[
      {t:"Fujisan", ok:true, why:"Right. In Hepburn, ふ is *fu* and じ is *ji*."},
      {t:"Huzisan", why:"This follows the older Kunrei system (ふ = *hu*, じ = *zi*), which Japan’s 1954 rules preferred. The 2025 standard moved to Hepburn-style spellings."},
      {t:"Fuzisan", why:"Half and half: *fu* is Hepburn, but *zi* is Kunrei. In Hepburn, じ is *ji*."},
      {t:"Fujissan", why:"There is no doubled *s* in ふじさん. A double consonant in romaji shows a small っ, which this word doesn’t have."}
    ]},
    {id:"e3u1-l1-x5", type:"order", q:"Put these rows in [五十音]{ごじゅうおん} (dictionary) order, starting with the first.", items:[
      {t:"あ row (a i u e o)", why:"The vowel row always comes first."},
      {t:"か row (ka ki ku ke ko)", why:"Then k: a, **ka**, sa, ta, na…"},
      {t:"さ row (sa shi su se so)", why:"s comes third: a, ka, **sa**."},
      {t:"な row (na ni nu ne no)", why:"After た (ta) comes な (na): a, ka, sa, ta, **na**."},
      {t:"ま row (ma mi mu me mo)", why:"After は (ha) comes ま (ma): …na, ha, **ma**."},
      {t:"ら row (ra ri ru re ro)", why:"Near the end: …ma, ya, **ra**, wa."}
    ]},
    {id:"e3u1-l1-x6", type:"number", q:"There are 46 basic hiragana. Adding the two marks gives 20 voiced kana with ゛ (が, ざ, だ, ば rows) and 5 with ゜ (ぱ row). How many hiragana is that altogether, not counting combinations such as きゃ?", answer:71, tol:0, unit:"hiragana", why:"46 basic kana + 20 with ゛ + 5 with ゜ = 71. (Lesson 3 teaches the marks.)", wrongs:[
      {v:50, tol:0, why:"50 is the number of places in the [五十音]{ごじゅうおん} grid (“fifty sounds”), not the number of kana in use. Start from 46 and add the 25 marked kana."},
      {v:66, tol:0, why:"You added the 20 voiced kana but forgot the 5 with ゜ (ぱ ぴ ぷ ぺ ぽ)."},
      {v:51, tol:0, why:"You added only the 5 kana with ゜. Add the 20 with ゛ as well."}
    ]}
   ],
   apply:{intro:"Set up your tools, start your daily review, and build your own chart. These are for you; nobody else needs to see them.", tasks:[
     {t:"Add a Japanese keyboard to your device", how:{
       win:["Open **Start → Settings → Time & language → Language & region**.","Next to **Preferred languages**, select **Add a language**, search for **Japanese**, select it, choose **Next**, then **Install**.","Switch keyboards with [[kbd:Windows]] + [[kbd:Space]], or from the language indicator on the taskbar.","With Japanese on, the indicator shows **A** (Latin letters) or **あ** (hiragana). Select it to switch modes. Type *aiueo* in hiragana mode: you should see あいうえお."],
       mac:["Choose **Apple menu → System Settings**, then click **Keyboard** in the sidebar (you may need to scroll down).","Under **Text Input**, click **Edit**, then the **+** (Add) button.","Select **Japanese**, choose **Japanese – Romaji**, and click **Add**. (Romaji input turns the letters you type into hiragana.)","Switch input sources from the input menu in the menu bar, then type *aiueo*: you should see あいうえお."],
       chromeos:["Select the time in the bottom-right corner, then **Settings**.","Go to **Device → Keyboard → Change input settings**. (Names can differ a little on newer ChromeOS versions.)","Under **Input methods**, select **Add**, choose **Japanese**, and confirm.","Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Space]] to cycle through your keyboards. Type *aiueo* with Japanese on: you should see あいうえお."],
       phone:["**iPhone:** open **Settings → General → Keyboard → Keyboards → Add New Keyboard**, choose **Japanese**, then tick **Romaji** (a letter keyboard) and, if you like, **Kana** (a 12-key kana pad). Tap **Done**. Switch keyboards with the globe key.","**Android (Gboard):** in any app, tap a text box, open **Settings** at the top of the keyboard, then **Languages → Add keyboard**. Pick **Japanese**, choose a layout (QWERTY for romaji typing, or 12-key), and tap **Done**. Touch and hold the space bar to switch languages.","Other Android keyboards have similar settings, but the names vary by maker."]
     }},
     {t:"Start the hiragana deck in the Kanji Lab", how:["Open the Kanji Lab’s hiragana deck (the link at the end of the lesson).","Do today’s new cards (10 is a good start). Say each sound aloud before you answer.","Come back tomorrow for your reviews. Write down when in your day you will do it (for example, on the bus, after breakfast)."], write:"My daily kana time… How many new cards a day… Which kana felt hardest today…"},
     {t:"Draw your own [五十音]{ごじゅうおん} grid", how:["On paper, draw a grid with 5 columns (a i u e o) and 10 rows (vowels, k, s, t, n, h, m, y, r, w), plus one box for ん.","Write the romaji in each box now. Leave the boxes for the empty places (yi, ye, wu…) crossed out.","Fill in each kana by hand as you learn it in Lesson 2. Keep the sheet; it is your map."], write:"Rows I have filled in so far… Kana I keep mixing up…"}
   ], proof:"A Japanese keyboard that turns *aiueo* into あいうえお, your first Kanji Lab session with a daily time chosen, and a hand-drawn [五十音]{ごじゅうおん} grid ready to fill in."},
   read:[
    {book:"taekim", where:"Grammar Guide → The Writing System → “Chapter Overview” (sections “The Scripts” and “Intonation”)", note:"A short overview of hiragana, katakana and kanji and what each is used for; the next three pages of the guide cover each script."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e3u1-l2", title:"Hiragana, row by row", minutes:55,
   hook:{q:"The everyday greeting こんにちは (“hello”) ends with the kana は, which is normally read *ha*. How do people actually say the last sound?", options:["*ha*","*wa*","*ho*","It is silent"], answer:1, reveal:"**It is *wa*: *konnichiwa*.** The kana は is read *ha* in words such as はな (*hana*, flower), but when it works as the grammar word (particle) that marks a topic, it is read *wa*. こんにちは began as a phrase meaning “as for today…”, so it keeps that particle は. Two other kana have the same kind of habit: へ and を. This lesson teaches all 46 hiragana and those three special cases."},
   goals:[
     "Read and write the 46 basic hiragana, row by row",
     "Pronounce the sounds that are new for many learners: し, ち, つ, ふ, the ら row and ん",
     "Read the particles は, へ and を correctly as *wa*, *e* and *o*",
     "Tell common look-alikes apart (ぬ/め, わ/れ/ね, は/ほ, る/ろ, さ/ち, き/さ)",
     "Read your first real words written only in hiragana"
   ],
   learn:[
    {h:"The first five rows: あ to な", body:[
      {lead:"Hiragana is learned row by row. Each row keeps one consonant and runs through the five vowels, a i u e o. Learn one or two rows a day, and say each kana aloud as you write it."},
      {table:[["Row","Kana","Romaji","Watch out"],["あ[行]{ぎょう} (vowels)","あ い う え お","a i u e o","Short, pure vowels"],["か[行]{ぎょう} (k)","か き く け こ","ka ki ku ke ko","None: fully regular"],["さ[行]{ぎょう} (s)","さ し す せ そ","sa shi su se so","し is *shi*"],["た[行]{ぎょう} (t)","た ち つ て と","ta chi tsu te to","ち is *chi*, つ is *tsu*"],["な[行]{ぎょう} (n)","な に ぬ ね の","na ni nu ne no","ぬ and ね end in a loop"]]},
      "Three kana in these rows don’t follow the simple pattern in romaji, because their sound really is different: し (*shi*) is close to English “she”, ち (*chi*) to the start of “cheese”, and つ (*tsu*) is the “ts” at the end of “cats” followed by *u*. Try saying “cats” and then *u*: that is つ.",
      "Already you can read real words: いえ (*ie*, house), あさ (*asa*, morning), かさ (*kasa*, umbrella), いぬ (*inu*, dog), ねこ (*neko*, cat), くち (*kuchi*, mouth), すし (*sushi*), つくえ (*tsukue*, desk) and ちかてつ (*chikatetsu*, subway)."
    ]},
    {h:"The second half: は to ん", body:[
      {table:[["Row","Kana","Romaji","Watch out"],["は[行]{ぎょう} (h)","は ひ ふ へ ほ","ha hi fu he ho","ふ is *fu*; は and へ as particles"],["ま[行]{ぎょう} (m)","ま み む め も","ma mi mu me mo","め has no loop; ぬ does"],["や[行]{ぎょう} (y)","や ゆ よ","ya yu yo","Only three kana"],["ら[行]{ぎょう} (r)","ら り る れ ろ","ra ri ru re ro","A quick tap, not English r or l"],["わ[行]{ぎょう} + ん","わ を ん","wa o n","を is only a particle; ん is its own beat"]]},
      "The や row has only three kana, because Japanese has no *yi* or *ye* sounds in native words. The わ row today has only わ (*wa*) and を (*o*), and を is used only as a grammar word. ん (*n*) is the only basic kana with no vowel.",
      "With all ten rows, plus the marks and small kana in Lesson 3, you can write any Japanese word by its sound. Try these: はな (*hana*, flower or nose), ふゆ (*fuyu*, winter), へや (*heya*, room), みみ (*mimi*, ear), やま (*yama*, mountain), ゆき (*yuki*, snow), さくら (*sakura*, cherry blossom), ほし (*hoshi*, star), わたし (*watashi*, I) and ほん (*hon*, book).",
      {tip:"Most of these words also have kanji: [犬]{いぬ} for いぬ, [山]{やま} for やま, [本]{ほん} for ほん. Writing them in hiragana is correct while you learn. You will add the kanji in Unit 4."}
    ]},
    {h:"Sounds to listen for", body:[
      "Most hiragana sounds are close to sounds you know. A few need attention. There is no audio in this app, so the descriptions below say what your mouth does. Lesson 5 lists free sites where you can listen.",
      {list:[
        "**ふ (*fu*)**: blow gently through lips that almost touch, like blowing out a candle. Your top teeth don’t touch your lower lip, as they do for English “f”.",
        "**ひ (*hi*)**: a little breathier than English “he”, with the tongue close to the roof of the mouth.",
        "**The ら row (*ra ri ru re ro*)**: one quick tap of the tongue tip just behind the top teeth. It sits between English r, l and d. The “tt” in American English “better”, or the single r in Spanish “pero”, is close.",
        "**う (*u*)**: keep the lips relaxed, not pushed forward as in English “food”.",
        "**ん (*n*)**: it always takes a full beat of its own. Its exact sound changes with the next sound. Before m, b or p it sounds like *m*: さんぽ (*sanpo*, a walk). Before k or g it sounds like the “ng” in “sing”: ぎんこう (*ginkō*, bank). At the end of a word, as in ほん (*hon*), the mouth doesn’t fully close. This course, like Japan’s 2025 romaji rules, writes it *n* in every case, though older signs may show *m* before b, m and p (*Shimbashi*)."
      ]},
      "You will also notice that い and う are often **whispered** (said without voice) between or after sounds such as k, s, t, h and p. です (*desu*, “is”) often sounds like “dess”, and すき (*suki*, “like”) like “ski”. This is very common in standard Tokyo speech, though how much people do it varies by region and speaker. Don’t force it; it will come with listening.",
      {warn:"です, ぎんこう and the other examples with small marks (で, ぎ) use the dakuten you will learn in Lesson 3. For now, just notice the sounds."}
    ]},
    {h:"Three particles that break the rule: は, へ, を", body:[
      "Japanese grammar words that come after a noun are called [[particle|particles]]. Three of them are written with a kana whose normal sound is different. The spelling is old; the pronunciation changed long ago. Official spelling rules ([現代仮名遣]{げんだいかなづか}い, 1986) keep the old spelling for these particles.",
      {table:[["Written","Said","Example (spaces added to help you)"],["は","*wa*","これは ほんです。 *Kore wa hon desu.* This is a book."],["へ","*e*","えきへ いきます。 *Eki e ikimasu.* (I) go to the station."],["を","*o*","みずを のみます。 *Mizu o nomimasu.* (I) drink water."]]},
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="e3a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Written one way, said another</text><text class="s" x="20" y="44">written</text><text class="s" x="20" y="100">said</text><rect class="d-panel" x="80" y="30" width="110" height="34" rx="6" stroke-width="1.5"/><text x="135" y="52" text-anchor="middle">これ</text><rect class="d-gold" x="196" y="30" width="44" height="34" rx="6" stroke-width="2"/><text x="218" y="52" text-anchor="middle">は</text><path class="d-ink" d="M218 66L218 84" stroke-width="2" marker-end="url(#e3a1)"/><text x="135" y="104" text-anchor="middle">kore</text><text x="218" y="104" text-anchor="middle">wa</text><text class="s" x="270" y="104">not ha</text><rect class="d-panel" x="80" y="120" width="110" height="34" rx="6" stroke-width="1.5"/><text x="135" y="142" text-anchor="middle">えき</text><rect class="d-gold" x="196" y="120" width="44" height="34" rx="6" stroke-width="2"/><text x="218" y="142" text-anchor="middle">へ</text><path class="d-ink" d="M218 156L218 174" stroke-width="2" marker-end="url(#e3a1)"/><text x="135" y="194" text-anchor="middle">eki</text><text x="218" y="194" text-anchor="middle">e</text><text class="s" x="270" y="194">not he</text><text class="s" x="20" y="142">written</text><text class="s" x="20" y="194">said</text><text x="170" y="228" text-anchor="middle">Same for を: always said o</text><text class="s" x="170" y="244" text-anchor="middle">は and へ change only when they are particles</text></svg>', alt:"Two examples. これは: the kana は is written but said wa, not ha. えきへ: the kana へ is written but said e, not he. A note says を is always said o, and that は and へ change only when they are particles.", cap:"The spelling of these three particles is older than their pronunciation."},
      "The rule is only for particles. Inside ordinary words, は and へ keep their normal sounds: はな (*hana*), へや (*heya*). を is different: it is used **only** as a particle, so it is always read *o*. (Some people and some typing systems call it *wo*; the Kanji Lab accepts both answers.)",
      "Greetings such as こんにちは (*konnichiwa*, hello) and こんばんは (*konbanwa*, good evening) end in は because they started life as phrases with the particle.",
      {tip:"Real Japanese doesn’t put spaces between words. Learner materials and children’s books often do, as in the examples above, to make the particles easier to see."}
    ]},
    {h:"Look-alikes: what to look for", body:[
      "Some hiragana look similar at first. Each pair below has one feature that tells them apart. Look for it on purpose for a week, and the confusion usually disappears.",
      {table:[["Pair","How to tell them apart"],["ぬ (*nu*) · め (*me*)","Same crossed strokes; ぬ ends in a small loop, め doesn’t"],["わ (*wa*) · れ (*re*) · ね (*ne*)","Same left stroke; わ ends in a round curve, れ kicks out to the right, ね ends in a loop"],["は (*ha*) · ほ (*ho*)","In は the right-hand stroke pokes up above the cross stroke; ほ has an extra flat line on top"],["る (*ru*) · ろ (*ro*)","る ends in a loop, ろ doesn’t"],["さ (*sa*) · ち (*chi*)","Mirror images: the bottom of さ opens to the right, like c; the bottom of ち bulges to the right"],["き (*ki*) · さ (*sa*)","き has two cross strokes, さ has one"],["あ (*a*) · お (*o*)","お has a separate dot at the top right"],["い (*i*) · り (*ri*)","In り the right stroke is long and sweeps down"]]},
      "A mnemonic can carry the difference. For example: ぬ (*nu*) is a bowl of **noo**dles with a loop of noodle at the end; め (*me*) is the same bowl “**me**ssed up” with no loop. Make your own: the sillier, the better you remember it.",
      "Print and handwriting differ a little. In some fonts the bottom of き and さ joins the stroke above, while in handwriting it is usually written separately. り is often printed as one connected shape but handwritten in two strokes, and そ can be written in one stroke or with a separate top stroke. All of these are correct."
    ]},
    {h:"Writing hiragana by hand", body:[
      "Each kana has a fixed **[[stroke-order|stroke order]]**: the order and direction of the lines. It isn’t a rule for its own sake. The right order makes the shape come out balanced and helps you read other people’s handwriting later.",
      {list:[
        "Strokes generally go **top to bottom** and **left to right**.",
        "あ has three strokes: the short horizontal line, the vertical line that crosses it, then the big looping stroke.",
        "Stroke endings matter. A stroke can **stop** firmly (とめ, *tome*), end with a small **flick** (はね, *hane*), or **sweep** away and fade (はらい, *harai*). The flick at the bottom of the left stroke in い is a はね.",
        "Write on squared paper and keep each kana in its own square, the same size as its neighbours."
      ]},
      "Free charts with stroke-order arrows are easy to find. Tae Kim’s free online *Guide to Learning Japanese* has a hiragana page with a chart, stroke-order help and a sound for each kana, and the Memory Hint apps from Lesson 1 give a picture and a sound for each kana.",
      {key:"Learn by row, say each sound aloud, write it by hand in the right order, and read real words as soon as you can. Then let daily review do the rest."},
      {lab:"kl-hiragana", t:"Practise: the hiragana deck"}
    ]}
   ],
   try:[
    {id:"e3u1-l2-x1", type:"match", q:"Match each hiragana to its Hepburn romaji.", pairs:[
      ["し","shi","し is in the さ row, but Hepburn writes it *shi*, close to English “she”."],
      ["ち","chi","ち is in the た row and sounds like the start of “cheese”: *chi*."],
      ["つ","tsu","つ is “ts” as in “cats”, plus *u*: *tsu*."],
      ["ふ","fu","ふ is in the は row, said with lips almost touching: *fu*."],
      ["を","o","を is only used as a particle and is said *o* (some people call it *wo*)."],
      ["ん","n","ん is the consonant on its own, with a full beat. Romaji writes it *n*."]
    ]},
    {id:"e3u1-l2-x2", type:"sort", q:"Which row of the [五十音]{ごじゅうおん} table does each kana belong to?", buckets:["か[行]{ぎょう} (k)","さ[行]{ぎょう} (s)","た[行]{ぎょう} (t)"], items:[
      {t:"き (*ki*)", b:0, why:"き is the *i* column of the か row: ka **ki** ku ke ko."},
      {t:"く (*ku*)", b:0, why:"く is the *u* column of the か row."},
      {t:"し (*shi*)", b:1, why:"Its romaji starts with “sh”, but し sits in the さ row: sa **shi** su se so."},
      {t:"そ (*so*)", b:1, why:"そ ends the さ row."},
      {t:"ち (*chi*)", b:2, why:"ち looks like it belongs elsewhere in romaji, but it is in the た row: ta **chi** tsu te to."},
      {t:"つ (*tsu*)", b:2, why:"つ is the *u* column of the た row."},
      {t:"す (*su*)", b:1, why:"す is the *u* column of the さ row."},
      {t:"と (*to*)", b:2, why:"と ends the た row."}
    ]},
    {id:"e3u1-l2-x3", type:"mcq", q:"In これは ほんです (“This is a book”), how do you say the は that comes after これ?", options:[
      {t:"*wa*", ok:true, why:"Right. Here は is the particle that marks the topic, “as for this…”, so it is said *wa*: *kore wa hon desu*."},
      {t:"*ha*", why:"は is *ha* inside ordinary words, like はな (*hana*). As a particle it is always *wa*."},
      {t:"*ho*", why:"*Ho* is ほ, a different kana with an extra line on top."},
      {t:"*e*", why:"*E* is how the particle へ is said. The particle は is *wa*."}
    ]},
    {id:"e3u1-l2-x4", type:"mcq", q:"Which kana is *ne*, as in ねこ (*neko*, cat)?", options:[
      {t:"ね", ok:true, why:"Right. ね ends in a loop, like a cat’s curled tail."},
      {t:"れ", why:"れ (*re*) has the same left stroke, but it ends with a kick out to the right, not a loop."},
      {t:"わ", why:"わ (*wa*) has the same left stroke, but it ends in a round curve with no loop."},
      {t:"ぬ", why:"ぬ (*nu*) has a loop too, but its left part is a crossed stroke, not a straight vertical line."}
    ]},
    {id:"e3u1-l2-x5", type:"spot", q:"A classmate wrote the Hepburn romaji for each word. Tap the romaji spellings that are wrong.", ask:"is wrong", parts:[
      "すし = ",{t:"sushi", flag:false, why:"Correct: す is *su*, し is *shi*."},
      " · しお (salt) = ",{t:"sio", flag:true, why:"In Hepburn, し is *shi*, so しお is *shio*. *Sio* is the older Kunrei spelling."},
      " · ちかてつ = ",{t:"chikatetsu", flag:false, why:"Correct: ち *chi*, か *ka*, て *te*, つ *tsu*."},
      " · ふね (ship) = ",{t:"hune", flag:true, why:"ふ is *fu* in Hepburn, so ふね is *fune*. *Hune* is the Kunrei spelling."},
      " · はな = ",{t:"hana", flag:false, why:"Correct: inside a word, は keeps its normal sound *ha*."},
      " · つき (moon) = ",{t:"tuki", flag:true, why:"つ is *tsu* in Hepburn, so つき is *tsuki*. *Tuki* is the Kunrei spelling."},
      " · ひと (person) = ",{t:"hito", flag:false, why:"Correct: ひ is *hi*, と is *to*."}
    ]},
    {id:"e3u1-l2-x6", type:"order", q:"Put these words in [五十音]{ごじゅうおん} (dictionary) order, as a Japanese dictionary would list them.", items:[
      {t:"あさ (*asa*, morning)", why:"あ is the very first kana, so あさ comes first."},
      {t:"いぬ (*inu*, dog)", why:"い comes straight after あ in the vowel row."},
      {t:"かさ (*kasa*, umbrella)", why:"The か row comes after the vowel row."},
      {t:"ねこ (*neko*, cat)", why:"ね is in the な row, which comes after さ and た."},
      {t:"はな (*hana*, flower)", why:"The は row comes after the な row."},
      {t:"やま (*yama*, mountain)", why:"The や row comes after は and ま, near the end."}
    ]},
    {id:"e3u1-l2-x7", type:"mcq", q:"How do you read さかな (fish)?", options:[
      {t:"*sakana*", ok:true, why:"Right: さ *sa*, か *ka*, な *na*."},
      {t:"*sakama*", why:"The last kana is な (*na*), not ま (*ma*). ま has two cross strokes and a loop at the bottom."},
      {t:"*chikana*", why:"The first kana is さ (*sa*), not ち (*chi*). The bottom of さ opens to the right; ち bulges to the right."},
      {t:"*kisana*", why:"The first kana has one cross stroke, so it is さ (*sa*). き (*ki*) has two."}
    ]}
   ],
   apply:{intro:"Real practice with your hands, eyes and voice. Keep your notes and recordings private unless you choose to share them.", tasks:[
     {t:"Fill in your [五十音]{ごじゅうおん} grid by hand", how:["Each day, take one or two rows. Write each kana five times in its own square, in the right stroke order, saying the sound aloud.","Add the kana to the grid you drew in Lesson 1.","Next day, cover the kana and write each row from memory before you look."], write:"Rows done… Kana I wrote wrongly from memory… What helped…"},
     {t:"Read ten words aloud and record yourself", how:["Choose ten words from this lesson (for example いぬ, ねこ, さかな, つくえ, ちかてつ, ふゆ, へや, さくら, ほし, わたし).","Read each one slowly, one kana per beat, and record yourself on your phone or computer.","Listen back. Did ふ come out softly, made by your lips alone, without your teeth touching your lip? Did the ら row sound like a light tap? Try again."], write:"Words I read… Sounds I want to improve…"},
     {t:"Find hiragana in the wild", how:["Look at anything with Japanese on it: a food package, a picture of a street sign, a children’s picture book, a website for Japanese learners.","Copy five hiragana words or parts you can read, with their romaji. Don’t worry about kanji around them yet.","Look up the meaning of two of them in a free dictionary such as Jisho.org."], write:"Where I looked… Five things I could read… Two meanings I found…"},
     {t:"Keep your daily Kanji Lab review going", how:["Do today’s reviews in the hiragana deck before adding new cards.","When a look-alike pair catches you (ぬ/め, わ/れ/ね), write the pair and its difference in your notes."]}
   ], proof:"A filled-in part of your [五十音]{ごじゅうおん} grid written from memory, a private recording of ten words, five hiragana words found in real life, and a note of the look-alikes you are watching."},
   read:[
    {book:"taekim", where:"Grammar Guide → The Writing System → “Hiragana” (the chart at the top of the page)", note:"Click a kana in the chart to hear it. The page links to free practice sheets for stroke order."},
    {book:"irodori", where:"Starter ([入門]{にゅうもん}), Lesson 1 “Good morning!” (おはようございます), kana pages L1-14 to L1-16: “1 [聞]{き}いて[言]{い}いましょう。Listen and repeat.” (hiragana chart with audio) and “4 ひらがなのことばを[読]{よ}みましょう。” (hiragana words)", note:"The same pages are collected in the free PDF “Hiragana Words and Katakana Words” under Other Resources on the IRODORI site."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e3u1-l3", title:"New sounds: marks, small kana and long vowels", minutes:55,
   hook:{q:"びょういん and びよういん look almost the same: the only difference is the size of one kana, よ. What is the difference in meaning?", options:["None: they are two spellings of the same word","One means “hospital”, the other “beauty salon”","One is polite, the other casual","One is the old spelling, the other the modern one"], answer:1, reveal:"**びょういん (*byōin*) is a hospital; びよういん (*biyōin*) is a beauty salon.** A small ょ joins the kana before it into one sound (*byo*), while a full-size よ is a separate beat (*bi-yo*). So the sizes change both the rhythm and the word. This lesson covers the marks and small kana that make Japanese sounds beyond the basic 46, and how to spell long vowels."},
   goals:[
     "Read and write kana with ゛ (dakuten) and ゜ (handakuten), and know when ぢ and づ are used",
     "Read and write the combined sounds made with small ゃ, ゅ, ょ ([拗音]{ようおん}, *yōon*)",
     "Read small っ as a one-beat pause and spell words that contain it",
     "Spell long vowels in hiragana correctly, including the えい and おお patterns",
     "Write these sounds in Hepburn romaji and type them on a Japanese keyboard"
   ],
   learn:[
    {h:"Two small marks: ゛ and ゜", body:[
      {lead:"Two small marks at the top right of a kana change its consonant. They give you 25 more kana without any new shapes to learn."},
      "The **[[dakuten]]** ([濁点]{だくてん}), two short strokes ゛, is often called てんてん (*tenten*, “dot dot”). It makes the consonant **voiced**: your vocal cords buzz. *K* becomes *g*, *s* becomes *z*, *t* becomes *d*, and on the は row, *h* becomes *b*. Put your fingers on your throat and say *k* then *g*, or *s* then *z*: you can feel the buzz switch on. The **[[handakuten]]** ([半濁点]{はんだくてん}), a small circle ゜, is called まる (*maru*, “circle”). It is used only on the は row and turns *h* into *p*.",
      {table:[["Row","With ゛ (dakuten)","With ゜ (handakuten)"],["か[行]{ぎょう} → が[行]{ぎょう}","が ぎ ぐ げ ご · ga gi gu ge go","–"],["さ[行]{ぎょう} → ざ[行]{ぎょう}","ざ じ ず ぜ ぞ · za ji zu ze zo","–"],["た[行]{ぎょう} → だ[行]{ぎょう}","だ ぢ づ で ど · da ji zu de do","–"],["は[行]{ぎょう} → ば[行]{ぎょう} / ぱ[行]{ぎょう}","ば び ぶ べ ぼ · ba bi bu be bo","ぱ ぴ ぷ ぺ ぽ · pa pi pu pe po"]]},
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="e3a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Same shape, new consonant</text><text class="s" x="60" y="40" text-anchor="middle">plain</text><text class="s" x="170" y="40" text-anchor="middle">+ ゛ (voiced)</text><text class="s" x="282" y="40" text-anchor="middle">+ ゜</text><rect class="d-panel" x="30" y="50" width="60" height="38" rx="6" stroke-width="1.5"/><text x="60" y="74" text-anchor="middle">か ka</text><path class="d-ink" d="M94 69L134 69" stroke-width="2" marker-end="url(#e3a2)"/><rect class="d-sage" x="140" y="50" width="60" height="38" rx="6" stroke-width="2"/><text x="170" y="74" text-anchor="middle">が ga</text><rect class="d-panel" x="30" y="96" width="60" height="38" rx="6" stroke-width="1.5"/><text x="60" y="120" text-anchor="middle">さ sa</text><path class="d-ink" d="M94 115L134 115" stroke-width="2" marker-end="url(#e3a2)"/><rect class="d-sage" x="140" y="96" width="60" height="38" rx="6" stroke-width="2"/><text x="170" y="120" text-anchor="middle">ざ za</text><rect class="d-panel" x="30" y="142" width="60" height="38" rx="6" stroke-width="1.5"/><text x="60" y="166" text-anchor="middle">た ta</text><path class="d-ink" d="M94 161L134 161" stroke-width="2" marker-end="url(#e3a2)"/><rect class="d-sage" x="140" y="142" width="60" height="38" rx="6" stroke-width="2"/><text x="170" y="166" text-anchor="middle">だ da</text><rect class="d-panel" x="30" y="188" width="60" height="38" rx="6" stroke-width="1.5"/><text x="60" y="212" text-anchor="middle">は ha</text><path class="d-ink" d="M94 207L134 207" stroke-width="2" marker-end="url(#e3a2)"/><rect class="d-sage" x="140" y="188" width="60" height="38" rx="6" stroke-width="2"/><text x="170" y="212" text-anchor="middle">ば ba</text><path class="d-ink" d="M204 207L246 207" stroke-width="2" marker-end="url(#e3a2)"/><rect class="d-gold" x="252" y="188" width="60" height="38" rx="6" stroke-width="2"/><text x="282" y="212" text-anchor="middle">ぱ pa</text><text class="s" x="170" y="244" text-anchor="middle">゜ is used only on the は row</text></svg>', alt:"Arrows from plain kana to marked kana: か ka to が ga, さ sa to ざ za, た ta to だ da, and は ha to ば ba with dakuten or ぱ pa with handakuten. A note says the circle is used only on the ha row.", cap:"The shape stays the same; the mark changes the consonant."},
      "The marks change words, so they matter: かき (*kaki*, persimmon) and かぎ (*kagi*, key); てんき (*tenki*, weather) and でんき (*denki*, electricity); ふた (*futa*, lid) and ぶた (*buta*, pig)."
    ]},
    {h:"じ or ぢ? ず or づ?", body:[
      "Two pairs sound the same in standard Japanese: じ and ぢ are both *ji*, and ず and づ are both *zu*. Normally you write **じ** and **ず**. The official spelling rules ([現代仮名遣]{げんだいかなづか}い) use ぢ and づ mainly in two situations:",
      {list:[
        "**A repeated sound**, where ち or つ comes twice and the second one is voiced: ちぢむ (*chijimu*, to shrink), つづく (*tsuzuku*, to continue).",
        "**Two words joined**, where the second word starts with ち or つ and becomes voiced: はな (nose) + ち (blood) → はなぢ (*hanaji*, nosebleed); て (hand) + つくり (making) → てづくり (*tezukuri*, handmade)."
      ]},
      "In romaji, ぢ is *ji* and づ is *zu*, the same as じ and ず. On a keyboard you type *di* for ぢ and *du* for づ.",
      {tip:"If you aren’t sure, じ and ず are right almost every time. The ぢ and づ words are a short list you will learn one by one."}
    ]},
    {h:"Small ゃ, ゅ, ょ: two kana, one beat", body:[
      "Take a kana from the *i* column (き, し, ち, に, ひ, み, り and their marked forms) and add a **small** ゃ, ゅ or ょ. The two kana blend into **one sound and one beat**. These sounds are called [拗音]{ようおん} (**[[youon|yōon]]**).",
      {table:[["Base","With small ゃ ゅ ょ","Romaji"],["き","きゃ きゅ きょ","kya kyu kyo"],["し","しゃ しゅ しょ","sha shu sho"],["ち","ちゃ ちゅ ちょ","cha chu cho"],["に","にゃ にゅ にょ","nya nyu nyo"],["ひ","ひゃ ひゅ ひょ","hya hyu hyo"],["み","みゃ みゅ みょ","mya myu myo"],["り","りゃ りゅ りょ","rya ryu ryo"],["ぎ","ぎゃ ぎゅ ぎょ","gya gyu gyo"],["じ","じゃ じゅ じょ","ja ju jo"],["び","びゃ びゅ びょ","bya byu byo"],["ぴ","ぴゃ ぴゅ ぴょ","pya pyu pyo"]]},
      "Examples: おちゃ (*ocha*, tea), きゃく (*kyaku*, guest or customer), ひゃく (*hyaku*, hundred), じしょ (*jisho*, dictionary), でんしゃ (*densha*, train), しゃしん (*shashin*, photo), かいしゃ (*kaisha*, company).",
      "The size is the whole point. When you write by hand, make the small kana clearly smaller: in horizontal writing, put it low and to the left in its square; in vertical writing, high and to the right. A full-size や, ゆ or よ is a separate beat: いしゃ (*isha*, doctor) has two beats, *i-sha*, but a full-size いしや would be three, *i-shi-ya*.",
      {warn:"Note the romaji: し + ゃ is *sha*, not *shya*, and じ + ゃ is *ja*, not *jya*. Hepburn writes the sound, not the kana."}
    ]},
    {h:"Small っ: a one-beat pause", body:[
      "A **small っ** (called [促音]{そくおん}, **[[sokuon|sokuon]]**, and often ちいさい つ, “small tsu”) is not said as *tsu* at all. It is a **beat of silence** before the next consonant: your mouth gets ready for the next sound and holds it for one beat, then releases it.",
      {table:[["Without っ","With っ"],["おと (*oto*, sound): 2 beats","おっと (*otto*, husband): 3 beats"],["さか (*saka*, slope): 2 beats","さっか (*sakka*, writer): 3 beats"]]},
      "Romaji shows small っ by **doubling the next consonant**: きって (*kitte*, postage stamp), きっぷ (*kippu*, ticket), がっこう (*gakkō*, school), ちょっと (*chotto*, a little), いっしょ (*issho*, together). Before *ch*, traditional Hepburn writes *tch* (*matcha*), while Japan’s 2025 rules double the first letter, *cch*. You will see both.",
      "Before *s* or *sh*, you don’t hear silence but a longer hiss: ざっし (*zasshi*, magazine) has a long *ss* sound. At the end of an exclamation, small っ is a sudden stop: あっ！ (“Oh!”).",
      {tip:"When you type, double the consonant: *kitte* gives きって. To type a small っ on its own, most keyboards accept *xtu* or *ltu*."}
    ]},
    {h:"Long vowels in hiragana", body:[
      "Japanese has short and long vowels, and the length changes the meaning. A long vowel lasts **two beats**. It is a [長音]{ちょうおん} (**[[chouon|chōon]]**). Hiragana usually writes it by adding a vowel kana. Which kana you add follows set rules from [現代仮名遣]{げんだいかなづか}い.",
      {table:[["Long vowel","Usually written","Examples"],["ā","add あ","おかあさん (*okāsan*, mother), おばあさん (*obāsan*, grandmother)"],["ii","add い","おにいさん (*oniisan*, older brother), いいえ (*iie*, no)"],["ū","add う","くうき (*kūki*, air), すうがく (*sūgaku*, maths)"],["long e","add い in most words; え in a few","せんせい (*sensei*, teacher), えいが (*eiga*, film); おねえさん (*onēsan*, older sister), ええ (*ē*, yes)"],["ō","add う in most words; お in a short list","おとうさん (*otōsan*, father), ありがとう (*arigatō*); おおきい (*ōkii*, big), とおい (*tōi*, far)"]]},
      "Two patterns catch everyone:",
      {list:[
        "**えい.** Words like せんせい, えいが and とけい (*tokei*, watch) are spelled with い. In everyday speech most people say them with a long *e*, like *sensē*. In careful speech or singing you may hear *e-i*. Romaji keeps the spelling: *sensei*, *eiga*.",
        "**おお.** Most long *o* sounds are spelled おう. A short list of common words uses おお instead, because of their history: おおきい (*ōkii*, big), おおい (*ōi*, many), とおい (*tōi*, far), とおる (*tōru*, to pass through), こおり (*kōri*, ice), とお (*tō*, ten, as in counting things). Learn them as a group."
      ]},
      "One more note: when an *o* sound and a following う belong to different parts of a word, you say both. In おもう (*omou*, to think), the う is the verb ending, so it is *o-mo-u*, not *omō*.",
      "Length changes meaning. Each pair below differs only by one extra beat:",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="18" text-anchor="middle">Count the beats</text><text x="16" y="44">おばさん obasan</text><text class="s" x="16" y="60">aunt; a woman of middle age</text><rect class="d-panel" x="16" y="68" width="56" height="34" rx="6" stroke-width="1.5"/><text x="44" y="90" text-anchor="middle">お</text><rect class="d-panel" x="76" y="68" width="56" height="34" rx="6" stroke-width="1.5"/><text x="104" y="90" text-anchor="middle">ば</text><rect class="d-panel" x="136" y="68" width="56" height="34" rx="6" stroke-width="1.5"/><text x="164" y="90" text-anchor="middle">さ</text><rect class="d-panel" x="196" y="68" width="56" height="34" rx="6" stroke-width="1.5"/><text x="224" y="90" text-anchor="middle">ん</text><text class="s" x="300" y="90" text-anchor="middle">4 beats</text><text x="16" y="132">おばあさん obāsan</text><text class="s" x="16" y="148">grandmother; an elderly woman</text><rect class="d-panel" x="16" y="156" width="56" height="34" rx="6" stroke-width="1.5"/><text x="44" y="178" text-anchor="middle">お</text><rect class="d-panel" x="76" y="156" width="56" height="34" rx="6" stroke-width="1.5"/><text x="104" y="178" text-anchor="middle">ば</text><rect class="d-gold" x="136" y="156" width="56" height="34" rx="6" stroke-width="2"/><text x="164" y="178" text-anchor="middle">あ</text><rect class="d-panel" x="196" y="156" width="56" height="34" rx="6" stroke-width="1.5"/><text x="224" y="178" text-anchor="middle">さ</text><rect class="d-panel" x="256" y="156" width="56" height="34" rx="6" stroke-width="1.5"/><text x="284" y="178" text-anchor="middle">ん</text><text x="16" y="222">びょういん byōin  hospital</text><text x="16" y="246">びよういん biyōin  beauty salon</text><text class="s" x="16" y="270">びょ = one beat; び + よ = two beats</text><text class="s" x="16" y="286">So: 4 beats vs 5 beats</text></svg>', alt:"Boxes, one per beat. おばさん has four boxes: お, ば, さ, ん. おばあさん has five: お, ば, あ, さ, ん, with the extra あ highlighted. Below, びょういん (hospital, four beats) is compared with びよういん (beauty salon, five beats).", cap:"A long vowel or a full-size kana adds a whole beat, and a whole beat can change the word."},
      "More pairs: おじさん (*ojisan*, uncle) and おじいさん (*ojiisan*, grandfather); ゆき (*yuki*, snow) and ゆうき (*yūki*, courage); ここ (*koko*, here) and こうこう (*kōkō*, high school)."
    ]},
    {h:"Romaji and typing for the new sounds", body:[
      "Hepburn romaji writes what you **hear**. A keyboard needs what is **written** in kana. So for long vowels the two differ:",
      {table:[["Kana","Hepburn","Type on a keyboard"],["とうきょう","Tōkyō","toukyou"],["おおきい","ōkii","ookii"],["せんせい","sensei","sensei"],["きって","kitte","kitte"],["ちょっと","chotto","chotto"],["ぢ / づ","ji / zu","di / du"],["を","o","wo"],["ほん","hon","honn (nn is always safe for ん)"]]},
      "If you type *tokyo*, the keyboard gives ときょ, because you typed no う. Type every kana, and the keyboard will spell it correctly.",
      {key:"゛ and ゜ change the consonant. Small ゃゅょ blend into one beat. Small っ is one beat of pause. A long vowel is two beats, usually written with an extra vowel kana: えい for most long e, おう for most long o, and おお in a short list."},
      {lab:"kl-hiragana", t:"Practise: the hiragana deck, including marked kana and [拗音]{ようおん}"}
    ]}
   ],
   try:[
    {id:"e3u1-l3-x1", type:"match", q:"Add the mark and match the new kana.", pairs:[
      ["か + ゛","が (ga)","The dakuten makes *k* voiced: *g*."],
      ["し + ゛","じ (ji)","し (*shi*) with dakuten is じ (*ji*), not “zi” in Hepburn."],
      ["つ + ゛","づ (zu)","つ (*tsu*) with dakuten is づ, said *zu*, the same as ず."],
      ["ひ + ゛","び (bi)","On the は row, the dakuten gives *b*: ひ → び."],
      ["ひ + ゜","ぴ (pi)","The handakuten (small circle) turns *h* into *p*: ひ → ぴ."],
      ["ほ + ゜","ぽ (po)","ほ with the small circle is ぽ, *po*."]
    ]},
    {id:"e3u1-l3-x2", type:"mcq", q:"Which spelling is *kitte* (postage stamp)?", options:[
      {t:"きって", ok:true, why:"Right. The small っ makes a one-beat pause before *t*, which romaji shows as *tt*: *ki-(pause)-te*."},
      {t:"きつて", why:"With a full-size つ, this would be read *kitsute*, three full kana. The pause needs a small っ."},
      {t:"きいて", why:"This is *kiite*, with a long *i*. A long vowel is not the same as a pause before a consonant."},
      {t:"きて", why:"This is *kite*, with no pause at all. It has two beats; *kitte* has three."}
    ]},
    {id:"e3u1-l3-x3", type:"sort", q:"Each word has a long *ō*. Is it spelled with おう or with おお in hiragana?", buckets:["Spelled with おう","Spelled with おお"], items:[
      {t:"*otōsan* (father)", b:0, why:"おとうさん: like most long *o* sounds, it is spelled with う."},
      {t:"*ōkii* (big)", b:1, why:"おおきい is one of the short list of common words spelled with お."},
      {t:"*arigatō* (thank you)", b:0, why:"ありがとう: the usual おう spelling."},
      {t:"*kōri* (ice)", b:1, why:"こおり is on the おお list, with おおきい, おおい, とおい, とおる and とお."},
      {t:"*kōkō* (high school)", b:0, why:"こうこう: both long vowels use the usual う."},
      {t:"*tōi* (far)", b:1, why:"とおい is on the おお list."},
      {t:"*benkyō* (study)", b:0, why:"べんきょう: the long *o* after きょ is spelled with う."}
    ]},
    {id:"e3u1-l3-x4", type:"number", q:"How many beats (morae) does がっこう (*gakkō*, school) have?", answer:4, tol:0, unit:"beats", why:"が (1) + っ (1, the pause) + こ (1) + う (1, the second half of the long *ō*) = 4 beats.", wrongs:[
      {v:3, tol:0, why:"You probably left out the small っ. It is silent, but it still takes a full beat."},
      {v:2, tol:0, why:"That is the English way of counting syllables (*gak-kō*). Japanese counts beats: っ and the long vowel each get one."}
    ]},
    {id:"e3u1-l3-x5", type:"mcq", q:"Kai is talking about his grandmother. Which word does he need?", options:[
      {t:"おばあさん (*obāsan*)", ok:true, why:"Right. The long *ā*, written with an extra あ, makes it “grandmother” (or an elderly woman)."},
      {t:"おばさん (*obasan*)", why:"With a short *a*, this means “aunt” or a woman of middle age. One missing beat changes the person."},
      {t:"おぱあさん (*opāsan*)", why:"ぱ (*pa*) has the small circle, not the two strokes. Grandmother uses ば (*ba*)."},
      {t:"おばさあん (*obasaan*)", why:"The long vowel is in the wrong place. In *obāsan* it is the *ba* that is long: お・ば・あ・さ・ん."}
    ]},
    {id:"e3u1-l3-x6", type:"spot", q:"Ana wrote a list of words in hiragana. Tap the spellings that break the standard rules.", ask:"is misspelled", parts:[
      {t:"おかあさん", flag:false, why:"Correct: a long *ā* is written by adding あ."},
      " · ",{t:"せんせえ", flag:true, why:"*Sensei* is spelled せんせい. Most words with a long *e* sound are written with い."},
      " · ",{t:"ちょっと", flag:false, why:"Correct: small ょ for *cho*, small っ for the pause."},
      " · ",{t:"おうきい", flag:true, why:"*Ōkii* (big) is one of the words spelled with お: おおきい."},
      " · ",{t:"がっこう", flag:false, why:"Correct: small っ, then こう for the long *ō*."},
      " · ",{t:"ありがとお", flag:true, why:"*Arigatō* uses the usual おう spelling: ありがとう."},
      " · ",{t:"でんしゃ", flag:false, why:"Correct: で with dakuten, ん, and しゃ with a small ゃ."}
    ]},
    {id:"e3u1-l3-x7", type:"mcq", q:"With a romaji keyboard, what do you type to get とうきょう (Tokyo)?", options:[
      {t:"*toukyou*", ok:true, why:"Right. Type each kana: to-u-kyo-u. The keyboard spells what you type, kana by kana."},
      {t:"*tōkyō*", why:"That is the Hepburn spelling for reading. Keyboards don’t turn ō into おう; you type the う yourself."},
      {t:"*tokyo*", why:"This gives ときょ, with no long vowels. Each long *ō* needs its う typed."},
      {t:"*toukyo*", why:"This gives とうきょ: the second long vowel is missing its う."}
    ]},
    {id:"e3u1-l3-x8", type:"mcq", q:"Which is the standard spelling of *tsuzuku* (to continue)?", options:[
      {t:"つづく", ok:true, why:"Right. When つ repeats and the second one is voiced, the rules use づ: つづく."},
      {t:"つずく", why:"ず sounds the same, but this is a repeated つ sound, so the rules use づ."},
      {t:"づづく", why:"Only the second つ is voiced. The word starts with a plain つ (*tsu*)."},
      {t:"つすく", why:"す (*su*) has no dakuten, so this would be *tsusuku*. The sound is *zu*."}
    ]}
   ],
   apply:{intro:"Practise the new sounds with your voice, your eyes and your keyboard.", tasks:[
     {t:"Read pairs aloud and record yourself", how:["Read each pair slowly, tapping a finger for each beat: おと / おっと, さか / さっか, おばさん / おばあさん, ゆき / ゆうき, ここ / こうこう, びょういん / びよういん.","Record yourself (privately) and listen. Does each word in a pair have the right number of beats?","Repeat any pair where the beats sound the same."], write:"Pairs that were easy… Pairs I need to practise…"},
     {t:"Type twelve words", how:["Switch on the Japanese keyboard you added in Lesson 1.","Type these words in hiragana: がっこう, きって, ちょっと, でんしゃ, しゃしん, じしょ, おかあさん, おとうさん, せんせい, おおきい, とおい, つづく.","If a word comes out wrong, compare what you typed with the table in the lesson and try again. On a computer, press [[kbd:Enter]] to keep the hiragana without turning it into kanji; on a phone, tap the hiragana suggestion."], write:"Words that came out wrong first… What I typed instead…"},
     {t:"Make an おお card", how:["Write the おお words on one card or note: おおきい, おおい, とおい, とおる, こおり, とお.","Make up one sentence-picture that links them, for example: “a **big** (おおきい) block of **ice** (こおり) is **far** (とおい) away.”","Look at it once a day for a week."], write:"My おお picture…"}
   ], proof:"A private recording of six word pairs with the right number of beats, twelve words typed correctly in hiragana, and an おお memory card."},
   read:[
    {book:"taekim", where:"Grammar Guide → The Writing System → “Hiragana”, sections “The Muddied Sounds”, “The Small 「や」、「ゆ」、and 「よ」”, “The Small 「つ」” and “The Long Vowel Sound”", note:"The same topics as this lesson, with examples and sound."},
    {book:"irodori", where:"Starter ([入門]{にゅうもん}), Lesson 1 “Good morning!”, kana pages L1-14 to L1-16: “3 のばす[音]{おと}、つまる[音]{おと}に[注意]{ちゅうい}して[読]{よ}みましょう。” (long vowels and small っ), “ローマ[字]{じ}[入力]{にゅうりょく}のしかた” (romaji typing) and “5 [上]{うえ}のことばを、キーボードやスマートフォンで[入力]{にゅうりょく}しましょう。” (typing practice)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e3u1-l4", title:"Katakana and loanwords", minutes:55,
   hook:{q:"Japanese has borrowed thousands of words and writes them in katakana. Which one of these did Japanese **not** take from English?", options:["テレビ (*terebi*, TV)","パン (*pan*, bread)","バス (*basu*, bus)","テスト (*tesuto*, test)"], answer:1, reveal:"**パン (*pan*, bread) came from Portuguese *pão*,** brought by Portuguese traders in the 1500s, long before English words arrived. Katakana loanwords come from many languages: アルバイト (*arubaito*, a part-time job) is from German *Arbeit*, and ビール (*bīru*, beer) is from Dutch *bier*. This lesson teaches the katakana shapes, the extra spellings that loanwords need, and how a foreign word turns into Japanese sounds."},
   goals:[
     "Read and write the 46 basic katakana and their marked and combined forms",
     "Say what katakana is used for, beyond English loanwords",
     "Use the long-vowel bar ー and small ッ in katakana words",
     "Read the extra combinations for new sounds, such as ティ, ディ, ファ and ウェ",
     "Predict how a foreign word is adapted into katakana, and tell look-alikes such as シ/ツ and ソ/ン apart"
   ],
   learn:[
    {h:"Same sounds, sharper shapes", body:[
      {lead:"Good news first: katakana has exactly the same sounds as hiragana, in the same [五十音]{ごじゅうおん} order. You are learning new shapes, not new sounds."},
      {table:[["Row","Katakana","Romaji","Hiragana"],["ア[行]{ぎょう}","ア イ ウ エ オ","a i u e o","あ い う え お"],["カ[行]{ぎょう}","カ キ ク ケ コ","ka ki ku ke ko","か き く け こ"],["サ[行]{ぎょう}","サ シ ス セ ソ","sa shi su se so","さ し す せ そ"],["タ[行]{ぎょう}","タ チ ツ テ ト","ta chi tsu te to","た ち つ て と"],["ナ[行]{ぎょう}","ナ ニ ヌ ネ ノ","na ni nu ne no","な に ぬ ね の"],["ハ[行]{ぎょう}","ハ ヒ フ ヘ ホ","ha hi fu he ho","は ひ ふ へ ほ"],["マ[行]{ぎょう}","マ ミ ム メ モ","ma mi mu me mo","ま み む め も"],["ヤ[行]{ぎょう}","ヤ ユ ヨ","ya yu yo","や ゆ よ"],["ラ[行]{ぎょう}","ラ リ ル レ ロ","ra ri ru re ro","ら り る れ ろ"],["ワ[行]{ぎょう} + ン","ワ ヲ ン","wa o n","わ を ん"]]},
      "Everything from Lesson 3 works the same way: ゛ and ゜ (ガ, ザ, バ, パ), small ャ ュ ョ (キャ, シュ, チョ), and small ッ. ヲ exists but is rarely used, because the particle is written in hiragana, を.",
      "A few katakana look like their hiragana partners, which gives you a head start: カ/か, キ/き, セ/せ, ヤ/や, モ/も, リ/り, and ヘ/へ, which are almost identical. Most others are new, straight-lined shapes made from parts of kanji.",
      {tip:"Learn katakana by reading words, not by staring at a chart. Menus, product labels and signs are full of katakana, and most of the words will be ones you already know in another language."}
    ]},
    {h:"What katakana is for", body:[
      "Katakana’s biggest job is writing **[[loanword-katakana|loanwords]]**, words Japanese has taken from other languages. In Japanese these are called [外来語]{がいらいご} ([[gairaigo]], “words that came from outside”). But katakana does more than that:",
      {table:[["Use","Examples"],["Loanwords from many languages","パン (*pan*, bread, Portuguese), アルバイト (*arubaito*, part-time job, German), コーヒー (*kōhī*, coffee), テレビ (*terebi*, TV)"],["Names of people and places from outside Japan","アナ, サラ, ミン, ルイス; アメリカ (*Amerika*, USA), ブラジル (*Burajiru*, Brazil)"],["Many sound words","ワンワン (*wanwan*, woof)"],["Emphasis, like italics in English","A word normally in hiragana or kanji, written in katakana to make it stand out"],["Names of plant and animal species, especially in science; many company names","ヒト (*hito*, the human species) and サクラ (*sakura*, cherry tree) in a biology text"]]},
      "Loanwords don’t always keep their original meaning. マンション (*manshon*, from English “mansion”) means a flat in a block of flats, often a fairly ordinary one. Japanese also builds new words from English parts that English itself doesn’t use. These are called *wasei eigo* (“English made in Japan”): ガソリンスタンド (*gasorin sutando*, “gasoline stand”) is a petrol or gas station.",
      {warn:"Don’t assume a katakana word means the same as the English word it sounds like. Check new ones in a dictionary."}
    ]},
    {h:"The long-vowel bar ー and small ッ", body:[
      "Katakana usually writes a long vowel with a **bar, ー**, called the [[chouon|long-vowel]] mark ([長音符]{ちょうおんぷ}, *chōonpu*). It makes the vowel before it last one more beat.",
      {table:[["Word","Romaji","Meaning"],["ケーキ","kēki","cake"],["スーパー","sūpā","supermarket"],["ノート","nōto","notebook"],["メール","mēru","email"],["コーヒー","kōhī","coffee"]]},
      "In vertical writing the bar is drawn vertically. It is not the kanji [一]{いち} (one) or a hyphen, even though they look alike. When you type, the [[kbd:-]] key gives ー in Japanese mode.",
      "In romaji, a vowel followed by ー gets a macron: *kēki*, *nōto*, *kōhī*. Length changes meaning in katakana, just as in hiragana: ビル (*biru*) is a building, ビール (*bīru*) is beer.",
      "Many English words that end in -er, -or or -ar get a long *ā*: コンピューター (*konpyūtā*, computer), エレベーター (*erebētā*, lift or elevator). The government’s guide to writing loanwords ([外来語]{がいらいご}の[表記]{ひょうき}, 1991) prefers the ー, but allows it to be dropped where that is the custom, so コンピュータ and エレベータ are also correct and common in technical writing.",
      "Small ッ works exactly like small っ: カップ (*kappu*, cup), ベッド (*beddo*, bed), ネット (*netto*, the internet)."
    ]},
    {h:"New combinations for new sounds", body:[
      "Some sounds in other languages don’t exist in the basic [五十音]{ごじゅうおん}. Katakana creates them by adding a **small vowel kana** (ァ ィ ゥ ェ ォ) to another kana. The two blend into one beat, like キャ.",
      {table:[["Combination","Sound","Example"],["ティ / ディ","ti / di","パーティー (*pātī*, party), ディナー (*dinā*, dinner)"],["ファ フィ フェ フォ","fa fi fe fo","ファイル (*fairu*, file folder), フォーク (*fōku*, fork)"],["シェ ジェ チェ","she je che","シェア (*shea*, sharing), ジェット (*jetto*, jet), チェック (*chekku*, check)"],["ウィ ウェ ウォ","wi we wo","ウェブ (*webu*, the web), ウォーキング (*wōkingu*, walking)"],["ヴァ ヴィ ヴ ヴェ ヴォ","va vi vu ve vo","ヴァイオリン (*vaiorin*), more often バイオリン (*baiorin*), violin"]]},
      "The government guide lists two groups. The **first group** is used in ordinary writing: ティ, ディ, ファ, フィ, フェ, フォ, シェ, ジェ, チェ, デュ and a few more. The **second group** is for when a writer wants to stay closer to the original sound: ウィ, ウェ, ウォ, ヴァ, ヴィ, ヴ and others. That is why you will see both ウイスキー and ウィスキー (whisky), and both バイオリン and ヴァイオリン. Both spellings are correct.",
      {tip:"Typing: *thi* gives ティ, *dhi* gives ディ, *fa* gives ファ, *wi* gives ウィ, and *vu* gives ゔ or ヴ. On Windows, type the word in hiragana and press [[kbd:F7]] to turn it into katakana; on any device, the suggestions usually include the katakana form."}
    ]},
    {h:"How a foreign word becomes Japanese", body:[
      "Japanese beats are mostly a consonant plus a vowel, and words end in a vowel or ん. English words, with their clusters of consonants, have to be fitted into that pattern. The changes follow regular habits, so you can often guess the katakana form of a word you know.",
      {fig:'<svg viewBox="0 0 340 236"><text x="170" y="18" text-anchor="middle">Christmas → クリスマス</text><text class="s" x="170" y="38" text-anchor="middle">one English word, five Japanese beats</text><rect class="d-panel" x="12" y="50" width="58" height="40" rx="6" stroke-width="1.5"/><text x="41" y="75" text-anchor="middle">k + u</text><rect class="d-panel" x="76" y="50" width="58" height="40" rx="6" stroke-width="1.5"/><text x="105" y="75" text-anchor="middle">ri</text><rect class="d-panel" x="140" y="50" width="58" height="40" rx="6" stroke-width="1.5"/><text x="169" y="75" text-anchor="middle">s + u</text><rect class="d-panel" x="204" y="50" width="58" height="40" rx="6" stroke-width="1.5"/><text x="233" y="75" text-anchor="middle">ma</text><rect class="d-panel" x="268" y="50" width="58" height="40" rx="6" stroke-width="1.5"/><text x="297" y="75" text-anchor="middle">s + u</text><rect class="d-lup" x="12" y="98" width="58" height="40" rx="6" stroke-width="2"/><text x="41" y="123" text-anchor="middle">ク</text><rect class="d-lup" x="76" y="98" width="58" height="40" rx="6" stroke-width="2"/><text x="105" y="123" text-anchor="middle">リ</text><rect class="d-lup" x="140" y="98" width="58" height="40" rx="6" stroke-width="2"/><text x="169" y="123" text-anchor="middle">ス</text><rect class="d-lup" x="204" y="98" width="58" height="40" rx="6" stroke-width="2"/><text x="233" y="123" text-anchor="middle">マ</text><rect class="d-lup" x="268" y="98" width="58" height="40" rx="6" stroke-width="2"/><text x="297" y="123" text-anchor="middle">ス</text><text x="16" y="166">+ u: added after most consonants</text><text class="s" x="16" y="184">bus → バス, milk → ミルク, golf → ゴルフ</text><text x="16" y="210">+ o: added after t and d</text><text class="s" x="16" y="228">test → テスト, bed → ベッド, card → カード</text></svg>', alt:"The English word Christmas split into five Japanese beats: k plus u, ri, s plus u, ma, s plus u, written ク リ ス マ ス. Notes below say an u is added after most consonants (bus, milk, golf) and an o after t and d (test, bed, card).", cap:"Extra vowels turn consonant clusters into Japanese beats."},
      {list:[
        "**An extra vowel** goes after a consonant that has none. Usually it is *u*: バス (*basu*, bus), ミルク (*miruku*, milk), ゴルフ (*gorufu*, golf).",
        "**After t and d, the extra vowel is usually *o***, since Japanese has no plain *tu* or *du* among its basic sounds: テスト (*tesuto*, test), ベッド (*beddo*, bed), カード (*kādo*, card).",
        "**After “ch” and “j” sounds, it is usually *i***: ランチ (*ranchi*, lunch), オレンジ (*orenji*, orange).",
        "**L and r both become the ラ row.** So ライト (*raito*) can be “light” or “right”; context tells you which.",
        "**A short vowel before a final consonant often brings a small ッ**: ベッド, カップ, ネット.",
        "**“Th” usually becomes the サ or ザ row and “v” usually becomes the バ row**: サンキュー (*sankyū*, thank you), バイオリン (*baiorin*, violin)."
      ]},
      "These are habits, not laws: many words were borrowed long ago, or through other languages, and kept older forms."
    ]},
    {h:"Look-alikes: シ and ツ, ソ and ン", body:[
      "The most famous katakana trap is two pairs: **シ (*shi*) and ツ (*tsu*)**, and **ソ (*so*) and ン (*n*)**. In print they can look nearly the same. The secret is the **direction of the long stroke** and **where the short strokes sit**.",
      {fig:'<svg viewBox="0 0 340 316"><defs><marker id="e3a3" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Follow the long stroke</text><rect class="d-sage" x="10" y="30" width="155" height="134" rx="8" stroke-width="2"/><g transform="translate(45 38)"><path class="d-ink" d="M10 15L24 24" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M6 38L20 47" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M8 82Q40 72 76 24" stroke-width="5" stroke-linecap="round" marker-end="url(#e3a3)"/></g><text x="87" y="140" text-anchor="middle">シ shi</text><text class="s" x="87" y="157" text-anchor="middle">dots on the left; rises</text><rect class="d-rose" x="175" y="30" width="155" height="134" rx="8" stroke-width="2"/><g transform="translate(210 38)"><path class="d-ink" d="M10 14L16 34" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M32 10L38 30" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M80 12Q74 60 32 84" stroke-width="5" stroke-linecap="round" marker-end="url(#e3a3)"/></g><text x="252" y="140" text-anchor="middle">ツ tsu</text><text class="s" x="252" y="157" text-anchor="middle">dots along the top; falls</text><rect class="d-sage" x="10" y="174" width="155" height="134" rx="8" stroke-width="2"/><g transform="translate(45 182)"><path class="d-ink" d="M8 20L28 32" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M8 82Q44 72 78 30" stroke-width="5" stroke-linecap="round" marker-end="url(#e3a3)"/></g><text x="87" y="284" text-anchor="middle">ン n</text><text class="s" x="87" y="301" text-anchor="middle">long stroke rises</text><rect class="d-rose" x="175" y="174" width="155" height="134" rx="8" stroke-width="2"/><g transform="translate(210 182)"><path class="d-ink" d="M14 14L24 40" stroke-width="5" stroke-linecap="round"/><path class="d-ink" d="M80 10Q72 58 30 84" stroke-width="5" stroke-linecap="round" marker-end="url(#e3a3)"/></g><text x="252" y="284" text-anchor="middle">ソ so</text><text class="s" x="252" y="301" text-anchor="middle">long stroke falls</text></svg>', alt:"Four panels with stroke arrows. シ shi: two short strokes stacked on the left and a long stroke that rises from the bottom left to the top right. ツ tsu: two short strokes side by side along the top and a long stroke that falls from the top right to the bottom left. ン n: one short stroke and a long stroke that rises. ソ so: one short stroke and a long stroke that falls.", cap:"Left: シ and ン, whose long stroke rises from the bottom. Right: ツ and ソ, whose long stroke falls from the top."},
      "A memory trick: シ and ン are written like a smile that **rises**; ツ and ソ **fall** from the top like rain. In シ the short strokes are stacked on the left, almost facing the long stroke; in ツ they stand side by side along the top.",
      {table:[["Look-alikes","How to tell them apart"],["ク (*ku*) · ケ (*ke*) · タ (*ta*)","タ is ク with an extra short stroke inside; in ケ the long stroke hangs from the middle of a flat line"],["フ (*fu*) · ワ (*wa*) · ウ (*u*)","フ is a single stroke; ワ adds a short vertical on the left; ウ adds a short stroke on top as well"],["ナ (*na*) · メ (*me*)","ナ is a cross with a flat line; メ is two slanting strokes like an x"],["コ (*ko*) · ユ (*yu*)","In ユ the bottom line runs out past the vertical stroke"],["チ (*chi*) · テ (*te*)","In チ the long stroke crosses the flat line; in テ it hangs below two flat lines"],["ヌ (*nu*) · ス (*su*)","ヌ has an extra short stroke crossing it; ス doesn’t"]]},
      "A few katakana also look like kanji: エ and [工]{こう} (craft), カ and [力]{ちから} (power), ロ and [口]{くち} (mouth), ニ and [二]{に} (two), ハ and [八]{はち} (eight). In real text the words around them make it clear which is which.",
      {lab:"kl-katakana", t:"Practise: the katakana deck"}
    ]}
   ],
   try:[
    {id:"e3u1-l4-x1", type:"match", q:"Match each katakana to its romaji. Watch the look-alikes.", pairs:[
      ["シ","shi","シ: short strokes stacked on the left, long stroke rising from the bottom."],
      ["ツ","tsu","ツ: short strokes side by side on top, long stroke falling from the top."],
      ["ソ","so","ソ: one short stroke, long stroke falling from the top right."],
      ["ン","n","ン: one short stroke, long stroke rising from the bottom left."],
      ["ヌ","nu","ヌ is ス with an extra short stroke crossing it."],
      ["ス","su","ス has no extra stroke: just the two strokes."]
    ]},
    {id:"e3u1-l4-x2", type:"mcq", q:"Which is the standard katakana spelling of “coffee”?", options:[
      {t:"コーヒー", ok:true, why:"Right: *kōhī*, with the bar ー for both long vowels."},
      {t:"コオヒイ", why:"Katakana normally writes long vowels with the bar ー, not with an extra vowel kana as hiragana does."},
      {t:"コーヒ", why:"This drops the second long vowel: *kōhi*. The word is *kōhī*."},
      {t:"コーフィー", why:"フィ (*fi*) is a real combination, but this word was borrowed long ago with ヒ (*hi*): コーヒー."}
    ]},
    {id:"e3u1-l4-x3", type:"sort", q:"When these English words became katakana, which vowel was added after the final consonant?", buckets:["Added *o*","Added *u*"], items:[
      {t:"test → テスト", b:0, why:"After *t*, the extra vowel is *o*: テスト (*tesuto*). *Tu* would become *tsu*."},
      {t:"bed → ベッド", b:0, why:"After *d*, the extra vowel is *o*: ベッド (*beddo*)."},
      {t:"card → カード", b:0, why:"Again after *d*: カード (*kādo*)."},
      {t:"bus → バス", b:1, why:"After *s*, the usual extra vowel *u*: バス (*basu*)."},
      {t:"milk → ミルク", b:1, why:"After *k*, *u*: ミルク (*miruku*)."},
      {t:"golf → ゴルフ", b:1, why:"After *f*, *u*: ゴルフ (*gorufu*)."}
    ]},
    {id:"e3u1-l4-x4", type:"number", q:"How many beats (morae) does コンピューター (*konpyūtā*, computer) have?", answer:6, tol:0, unit:"beats", why:"コ (1) ン (1) ピュ (1) ー (1) タ (1) ー (1) = 6. The small ュ joins ピ into one beat, and each ー is a beat of its own.", wrongs:[
      {v:7, tol:0, why:"You counted the small ュ as a separate beat. ピュ is one beat, like きゃ."},
      {v:4, tol:0, why:"You left out the two ー bars. Each long-vowel bar adds a full beat."},
      {v:5, tol:0, why:"Close. Check that you counted ン and both ー bars: コ・ン・ピュ・ー・タ・ー."}
    ]},
    {id:"e3u1-l4-x5", type:"mcq", q:"Kenji is ordering a drink at a café and wants a beer. Which word should he say?", options:[
      {t:"ビール (*bīru*)", ok:true, why:"Right. The bar ー makes the *i* long: *bīru*, beer (from Dutch *bier*)."},
      {t:"ビル (*biru*)", why:"With a short *i*, this is “building”. One beat makes the difference."},
      {t:"ベル (*beru*)", why:"This is “bell”: ベ is *be*, not *bi*."},
      {t:"ビイル", why:"Katakana writes long vowels with ー, not an extra イ. ビイル isn’t the standard spelling."}
    ]},
    {id:"e3u1-l4-x6", type:"spot", q:"Here is a café menu with some katakana mistakes. Tap the items that are misspelled.", ask:"is misspelled", parts:[
      {t:"コーヒー", flag:false, why:"Correct: coffee, *kōhī*."},
      " · ",{t:"サンドイツチ", flag:true, why:"A full-size ツ would be read *tsu*: *sandoitsuchi*. Sandwich needs a small ッ: サンドイッチ."},
      " · ",{t:"ケーキ", flag:false, why:"Correct: cake, *kēki*."},
      " · ",{t:"ジユース", flag:true, why:"A full-size ユ makes two beats, *ji-yū*. Juice uses a small ュ: ジュース (*jūsu*)."},
      " · ",{t:"トースト", flag:false, why:"Correct: toast, *tōsuto*."},
      " · ",{t:"ンーダ", flag:true, why:"ン (*n*) was written instead of ソ (*so*). Soda is ソーダ: the long stroke of ソ falls from the top."},
      " · ",{t:"スープ", flag:false, why:"Correct: soup, *sūpu*."}
    ]},
    {id:"e3u1-l4-x7", type:"mcq", q:"Which description fits ツ (*tsu*)?", options:[
      {t:"Two short strokes side by side along the top, and a long stroke that falls from the top right", ok:true, why:"Right. That is ツ. Like ソ, its long stroke falls from the top."},
      {t:"Two short strokes stacked on the left, and a long stroke that rises from the bottom left", why:"That is シ (*shi*). Its long stroke rises, like ン."},
      {t:"One short stroke, and a long stroke that rises from the bottom left", why:"That is ン (*n*)."},
      {t:"One short stroke, and a long stroke that falls from the top right", why:"That is ソ (*so*). ツ has two short strokes."}
    ]},
    {id:"e3u1-l4-x8", type:"mcq", q:"Fatima wants to write her name, *Fatima*, in katakana. Which spelling gives the sounds *fa-ti-ma*?", options:[
      {t:"ファティマ", ok:true, why:"Right. ファ (small ァ) gives *fa* and ティ (small ィ) gives *ti*: three beats, *fa-ti-ma*."},
      {t:"フアテイマ", why:"With full-size ア and イ, every kana is its own beat: *fu-a-te-i-ma*."},
      {t:"ファチマ", why:"チ is *chi*, so this reads *fa-chi-ma*. For *ti* you need テ + small ィ."},
      {t:"ハティマ", why:"ハ is *ha*: this reads *ha-ti-ma*. For *fa* you need フ + small ァ."}
    ]}
   ],
   apply:{intro:"Katakana is all around you once you start looking. These tasks turn it into reading practice.", tasks:[
     {t:"Go on a katakana hunt", how:["Look at Japanese food packaging, a menu, a shop website or photos of street signs.","Copy ten katakana words you find. Read each one aloud, one beat at a time.","Guess the original word for each, then check in a dictionary. Note any whose meaning changed, like マンション."], write:"Ten words, my guess, the real meaning…"},
     {t:"Write your name and three places in katakana", how:["Say your name slowly and split it into Japanese beats, adding vowels after lone consonants (*u* in most places, *o* after t and d).","Choose katakana, using combinations such as ティ or ファ where they help. Many names have more than one accepted spelling; pick one and use it consistently.","Do the same for your town, your country and one place you would like to visit."], write:"My name in katakana… my town… my country… a place I want to visit…"},
     {t:"Label five things at home", how:["Pick five objects that have katakana names, such as テレビ, ベッド, カップ, ノート, ペン or テーブル.","Write each name on a sticky note and put it on the object.","Read the labels aloud each time you pass them this week."], write:"My five labels…"},
     {t:"Start the katakana deck", how:["Open the Kanji Lab’s katakana deck and do today’s new cards.","Keep your hiragana reviews going too: reviews first, then new cards."]}
   ], proof:"Ten katakana words found in real life with their meanings, your name and three places written in katakana, five labels at home, and your first katakana review session."},
   read:[
    {book:"taekim", where:"Grammar Guide → The Writing System → “Katakana”, including “The Long Vowel Sound” and “The Small 「ア、イ、ウ、エ、オ」”", note:"Its notes on telling シ, ン, ツ and ソ apart are worth reading with this lesson."},
    {book:"irodori", where:"Starter ([入門]{にゅうもん}), Lesson 2 “I’m sorry, I don’t really understand.” (すみません、よくわかりません), kana pages L2-15 to L2-17: “1 [聞]{き}いて[言]{い}いましょう。Listen and repeat.” (katakana chart), “2 [聞]{き}きましょう。Listen.” (extra katakana for loanwords) and “4 カタカナのことばを[読]{よ}みましょう。” (katakana words)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e3u1-l5", title:"Rhythm and pitch: morae and pitch accent", minutes:50,
   hook:{q:"An English speaker hears “Tokyo” as two or three syllables. How many beats does a Japanese speaker count in とうきょう?", options:["Two","Three","Four","Five"], answer:2, reveal:"**Four: と・う・きょ・う.** Japanese counts **morae**, beats of roughly equal length. Each long vowel is two beats, and きょ, though written with two kana, is one. Japanese poets count a haiku in beats, and getting the beats right does a lot to make you easy to understand. This lesson also covers pitch accent: the high and low notes that tell [雨]{あめ} (rain) from [飴]{あめ} (candy)."},
   goals:[
     "Count morae in any word, including ん, small っ, long vowels and [拗音]{ようおん}",
     "Explain how a missing or extra beat changes a word",
     "Describe pitch accent in standard Tokyo Japanese and name its four patterns",
     "Use the pitch of a following particle to tell words such as [箸]{はし}, [橋]{はし} and [端]{はし} apart",
     "Find free audio to practise listening, and keep your daily kana routine going"
   ],
   learn:[
    {h:"The beat of Japanese: morae", body:[
      {lead:"Japanese is spoken in beats of roughly equal length, like a steady drum. Each beat is a mora."},
      "A [[mora]] is a unit of timing. In kana it is easy to count: **each kana is one beat**, with one exception. Small ゃ, ゅ, ょ (and katakana’s small ァ, ィ, ゥ, ェ, ォ) join the kana before them, so きゃ or ティ is one beat. And three things that English speakers often rush still get a full beat each: **ん**, **small っ** and the **second half of a long vowel** (the extra vowel kana, or ー).",
      {table:[["Word","Beats","Count"],["ねこ (*neko*, cat)","ね・こ","2"],["にほん (*Nihon*, Japan)","に・ほ・ん","3"],["とうきょう (*Tōkyō*)","と・う・きょ・う","4"],["がっこう (*gakkō*, school)","が・っ・こ・う","4"],["コーヒー (*kōhī*, coffee)","コ・ー・ヒ・ー","4"],["しんかんせん (*shinkansen*, bullet train)","し・ん・か・ん・せ・ん","6"]]},
      "Syllables and morae are not the same. *Shinkansen* has three syllables in English ears (*shin-kan-sen*) but six morae. When a Japanese word sounds “too long” to you, it is usually because you are hearing morae.",
      "Poetry shows this clearly. A haiku has 5, 7 and 5 **morae**, not syllables. Matsuo Bashō’s famous frog poem counts like this:",
      {ex:"[古池]{ふるいけ}や　[蛙]{かわず}[飛]{と}び[込]{こ}む　[水]{みず}の[音]{おと}\nふ・る・い・け・や (5)\nか・わ・ず・と・び・こ・む (7)\nみ・ず・の・お・と (5)\n“An old pond / a frog jumps in / the sound of water”", label:"A haiku counted in morae"}
    ]},
    {h:"Why rhythm changes meaning", body:[
      "Because each beat matters, adding or dropping one can make a different word. You met these pairs in Lessons 3 and 4:",
      {table:[["Shorter","Longer"],["おばさん (*obasan*, aunt): 4","おばあさん (*obāsan*, grandmother): 5"],["ここ (*koko*, here): 2","こうこう (*kōkō*, high school): 4"],["おと (*oto*, sound): 2","おっと (*otto*, husband): 3"],["ビル (*biru*, building): 2","ビール (*bīru*, beer): 3"],["びょういん (*byōin*, hospital): 4","びよういん (*biyōin*, beauty salon): 5"]]},
      "Many learners make two rhythm mistakes: they **shorten** long vowels and ん, and they **skip** the pause of small っ. Both are easy to fix with a simple habit: tap a finger or clap once per mora as you say a new word. If your taps and the kana don’t match, slow down.",
      {tip:"Don’t make every beat the same pitch and volume like a robot. The beats are equal in **length**; the melody comes from pitch, which is the next topic."}
    ]},
    {h:"Bonus: pitch accent, high and low", body:[
      "**This part is optional.** Pitch accent isn’t tested in the JLPT, and most textbooks barely mention it. Read it for interest; the exercises on it are marked Bonus and don’t count towards finishing the lesson, and it never appears in Check, the Arcade or reviews.",
      "English marks the important part of a word with **stress**: a louder, longer, higher syllable, as in “**pho**tograph” versus “pho**to**graphy” (see [[word-stress]]). Japanese works differently. Each mora is either **high** or **low** in pitch, like two notes on a piano, and loudness hardly changes. This is called **[[pitch-accent-term|pitch accent]]** (アクセント in Japanese).",
      "What matters most is where the pitch **drops** from high to low. A word has **at most one drop**, and some words have none. The drop is the word’s accent. In standard Tokyo Japanese:",
      {list:[
        "If the **first** mora is accented, the word starts high and drops at the second mora.",
        "Otherwise the word starts low and goes up at the second mora. (Linguists describe this rise as part of how a phrase begins; it can be weak, for example after a long first syllable.)",
        "After the drop, the pitch stays low for the rest of the word and any particle after it."
      ]},
      "Here is the classic pair: [雨]{あめ} (*ame*, rain) and [飴]{あめ} (*ame*, sweets or candy). Same kana, different melody.",
      {fig:'<svg viewBox="0 0 340 214"><text x="170" y="18" text-anchor="middle">あめが: rain or candy?</text><rect class="d-rose" x="10" y="30" width="320" height="82" rx="8" stroke-width="2"/><text x="22" y="56">雨 ame</text><text class="s" x="22" y="74">rain</text><text class="s" x="22" y="92">high, then drop</text><path class="d-ink" d="M140 46L190 74L240 74" stroke-width="2.5"/><circle class="d-inkf" cx="140" cy="46" r="6"/><circle class="d-inkf" cx="190" cy="74" r="6"/><circle class="d-panel" cx="240" cy="74" r="6" stroke-width="2"/><text x="140" y="102" text-anchor="middle">あ</text><text x="190" y="102" text-anchor="middle">め</text><text class="s" x="240" y="102" text-anchor="middle">が</text><rect class="d-sage" x="10" y="122" width="320" height="82" rx="8" stroke-width="2"/><text x="22" y="148">飴 ame</text><text class="s" x="22" y="166">sweets, candy</text><text class="s" x="22" y="184">low, rise, no drop</text><path class="d-ink" d="M140 166L190 138L240 138" stroke-width="2.5"/><circle class="d-inkf" cx="140" cy="166" r="6"/><circle class="d-inkf" cx="190" cy="138" r="6"/><circle class="d-panel" cx="240" cy="138" r="6" stroke-width="2"/><text x="140" y="194" text-anchor="middle">あ</text><text x="190" y="194" text-anchor="middle">め</text><text class="s" x="240" y="194" text-anchor="middle">が</text></svg>', alt:"Pitch lines for あめが. For 雨, rain: あ is high, め drops low, and the particle が stays low. For 飴, candy: あ is low, め rises high, and が stays high.", cap:"Filled dots are the word; the open dot is the particle が after it. Standard Tokyo Japanese."}
    ]},
    {h:"Four patterns", body:[
      "Tokyo-type pitch accent has four patterns, named by where the high part sits. Dictionaries that show accent often use a number: the mora **after which** the pitch drops, with [0] for no drop.",
      {table:[["Pattern","What happens","Example"],["[平板]{へいばん} *heiban* (flat), [0]","Low, then high to the end; a following particle stays high","[飴]{あめ} *ame* (candy), [桜]{さくら} *sakura*, [東京]{とうきょう}"],["[頭高]{あたまだか} *atamadaka* (head-high), [1]","High on the first mora, then a drop","[雨]{あめ} *ame* (rain), [猫]{ねこ} *neko* (cat)"],["[中高]{なかだか} *nakadaka* (middle-high)","Low, up, then a drop inside the word","[日本]{にほん} *Nihon* [2], [先生]{せんせい} *sensei* [3]"],["[尾高]{おだか} *odaka* (tail-high)","Up to the last mora; the drop shows on the particle","[橋]{はし} *hashi* (bridge) [2], [花]{はな} *hana* (flower) [2]"]]},
      "Look at the [尾高]{おだか} (*odaka*) and [平板]{へいばん} (*heiban*) patterns. **Said alone, they sound the same**: both start low and end high. The difference only appears when a particle follows. After an *odaka* word, the particle drops low; after a *heiban* word, it stays high.",
      {key:"Japanese pitch accent is about where the pitch drops. Listen for the drop, and listen to the particle after the word."}
    ]},
    {h:"はし, はし, はし: hearing the particle", body:[
      "The three words [箸]{はし} (chopsticks), [橋]{はし} (bridge) and [端]{はし} (edge, end) are all written はし (*hashi*). In standard Tokyo Japanese they have three different melodies, and the particle が shows all three.",
      {fig:'<svg viewBox="0 0 340 296"><text x="170" y="18" text-anchor="middle">はしが in Tokyo Japanese</text><rect class="d-rose" x="10" y="30" width="320" height="80" rx="8" stroke-width="2"/><text x="22" y="56">箸 hashi</text><text class="s" x="22" y="74">chopsticks</text><text class="s" x="22" y="92">[1] head-high</text><path class="d-ink" d="M150 46L200 72L250 72" stroke-width="2.5"/><circle class="d-inkf" cx="150" cy="46" r="6"/><circle class="d-inkf" cx="200" cy="72" r="6"/><circle class="d-panel" cx="250" cy="72" r="6" stroke-width="2"/><text x="150" y="100" text-anchor="middle">は</text><text x="200" y="100" text-anchor="middle">し</text><text class="s" x="250" y="100" text-anchor="middle">が</text><rect class="d-gold" x="10" y="118" width="320" height="80" rx="8" stroke-width="2"/><text x="22" y="144">橋 hashi</text><text class="s" x="22" y="162">bridge</text><text class="s" x="22" y="180">[2] tail-high</text><path class="d-ink" d="M150 160L200 134L250 160" stroke-width="2.5"/><circle class="d-inkf" cx="150" cy="160" r="6"/><circle class="d-inkf" cx="200" cy="134" r="6"/><circle class="d-panel" cx="250" cy="160" r="6" stroke-width="2"/><text x="150" y="188" text-anchor="middle">は</text><text x="200" y="188" text-anchor="middle">し</text><text class="s" x="250" y="188" text-anchor="middle">が</text><rect class="d-sage" x="10" y="206" width="320" height="80" rx="8" stroke-width="2"/><text x="22" y="232">端 hashi</text><text class="s" x="22" y="250">edge, end</text><text class="s" x="22" y="268">[0] flat</text><path class="d-ink" d="M150 248L200 222L250 222" stroke-width="2.5"/><circle class="d-inkf" cx="150" cy="248" r="6"/><circle class="d-inkf" cx="200" cy="222" r="6"/><circle class="d-panel" cx="250" cy="222" r="6" stroke-width="2"/><text x="150" y="276" text-anchor="middle">は</text><text x="200" y="276" text-anchor="middle">し</text><text class="s" x="250" y="276" text-anchor="middle">が</text></svg>', alt:"Pitch lines for はしが. 箸, chopsticks: high, low, low. 橋, bridge: low, high, then the particle が drops low. 端, edge: low, high, and が stays high.", cap:"[橋]{はし} and [端]{はし} sound the same on their own. Only the particle tells them apart."},
      "More pairs you can practise (all standard Tokyo Japanese):",
      {table:[["Word","Pitch","Partner"],["[花]{はな} *hana*, flower","low–high, particle drops [2]","[鼻]{はな} *hana*, nose: low–high, particle stays high [0]"],["[牡蠣]{かき} *kaki*, oyster","high–low [1]","[柿]{かき} *kaki*, persimmon: low–high [0]"],["[鮭]{さけ} *sake*, salmon","high–low [1]","[酒]{さけ} *sake*, alcohol: low–high [0]"],["[切]{き}る *kiru*, to cut","high–low [1]","[着]{き}る *kiru*, to wear: low–high [0]"]]},
      "Accents in these lists were checked in two accent dictionaries’ data. Dictionaries sometimes list more than one accepted pattern for a word, and speakers vary, so treat any single list as a guide."
    ]},
    {h:"How much does pitch matter?", body:[
      "Less than you might fear, but more than nothing.",
      {list:[
        "**Context does most of the work.** In a restaurant, はし means chopsticks whatever the melody. Pairs that are told apart only by pitch are a small part of the vocabulary.",
        "**Rhythm is a good first priority.** A missing beat (おばさん for おばあさん) makes a different word, so many teachers work on beats first. For learners, being easy to understand is the goal, not sounding like a newsreader (see {{pronunciation-intelligibility}}).",
        "**Pitch makes speech natural and easier to follow.** Good pitch helps listeners find word boundaries and hear your Japanese as fluent. It is worth learning gradually, mainly by listening."
      ]},
      "**Dialects differ.** This lesson describes standard Japanese ([共通語]{きょうつうご}, *kyōtsūgo*), whose accent is based on Tokyo speech and is used by national broadcasters. Kansai Japanese (around Osaka) has a different accent system, so many words there have other patterns. Some dialects, for example in parts of southern Tōhoku and northeastern Kantō, don’t tell words apart by pitch at all. None of these is wrong; they are different systems.",
      {h:"Where to listen (free)"},
      {list:[
        "**OJAD (Online Japanese Accent Dictionary)**, hosted by the University of Tokyo: free on the web. It plays recordings of verbs and adjectives in many forms, and its **Suzuki-kun** tool draws the predicted pitch line for any sentence you type. (It also shows the accent of thousands of nouns, but without recordings.)",
        "**IRODORI**, the Japan Foundation’s course *Japanese for Life in Japan*: its textbooks and MP3 audio can be downloaded from its website at no cost, with natural conversations from beginner level. Lessons 1 and 2 of the Starter book have hiragana and katakana charts to listen to and repeat.",
        "**HIRAGANA / KATAKANA Memory Hint** apps (Japan Foundation) and the hiragana chart in **Tae Kim’s Guide** play the sound of each kana."
      ]},
      "A good habit is **shadowing**: play a short sentence, then say it straight after the speaker, copying the rhythm and melody. Record yourself privately and compare."
    ]},
    {h:"Your kana routine from here", body:[
      "You now know how Japanese is written and how it sounds: three scripts, 46 basic kana in each of the two kana scripts, the marks and small kana that extend them, long vowels, morae and pitch. That is the core of the Japanese sound system.",
      "What turns this knowledge into reading speed is **a little daily review**. Keep both Kanji Lab decks going: reviews first, then new cards. When a kana takes you more than a moment, that’s fine; it means the review is working on exactly the right card.",
      "From Unit 2, the examples use kana and kanji with furigana, without romaji. If a word slows you down, read it beat by beat, the way you learned here.",
      {lab:"kl-katakana", t:"Practise: the katakana deck"},
      {lab:"kl-hiragana", t:"Practise: the hiragana deck"}
    ]}
   ],
   try:[
    {id:"e3u1-l5-x1", type:"number", q:"How many morae does しんかんせん (*shinkansen*, bullet train) have?", answer:6, tol:0, unit:"morae", why:"し・ん・か・ん・せ・ん: six kana, and each ん is a full beat, so 6 morae.", wrongs:[
      {v:3, tol:0, why:"Three is the number of English syllables (*shin-kan-sen*). In morae, each ん counts as its own beat."},
      {v:4, tol:0, why:"Check that you counted all three ん. Each one gets a beat: し・ん・か・ん・せ・ん."}
    ]},
    {id:"e3u1-l5-x2", type:"mcq", q:"Which word has exactly four morae?", options:[
      {t:"とうきょう (*Tōkyō*)", ok:true, why:"Right: と・う・きょ・う. Each long vowel is two beats, and きょ is one."},
      {t:"にほん (*Nihon*)", why:"に・ほ・ん: three morae."},
      {t:"おばあさん (*obāsan*)", why:"お・ば・あ・さ・ん: five morae, because the long *ā* takes two beats."},
      {t:"しゃしん (*shashin*)", why:"しゃ・し・ん: three morae. The small ゃ joins し into one beat."}
    ]},
    {id:"e3u1-l5-x3", bonus:true, type:"match", q:"Match each pitch-accent pattern (standard Tokyo Japanese) to its description.", pairs:[
      ["[平板]{へいばん} heiban [0]","Low, then high with no drop; a particle after it stays high","Heiban means “flat”: after the first rise there is no drop, as in [飴]{あめ} (candy)."],
      ["[頭高]{あたまだか} atamadaka [1]","High on the first mora, then a drop","Atamadaka means “head-high”, as in [雨]{あめ} (rain): あ high, め low."],
      ["[中高]{なかだか} nakadaka","Low, up, then a drop inside the word","Nakadaka means “middle-high”, as in [日本]{にほん} (*Nihon*): に low, ほ high, ん low."],
      ["[尾高]{おだか} odaka","Low, then high up to the last mora; the drop falls on the particle","Odaka means “tail-high”, as in [橋]{はし} (bridge): the drop shows on が."]
    ]},
    {id:"e3u1-l5-x4", bonus:true, type:"mcq", q:"In standard Tokyo Japanese, someone says はしが with the melody high–low–low. Which word did they say?", options:[
      {t:"[箸]{はし} (chopsticks)", ok:true, why:"Right. [箸]{はし} is head-high (*atamadaka*): は high, し low, and the particle stays low."},
      {t:"[橋]{はし} (bridge)", why:"[橋]{はし} is low–high, then the particle drops: low–high–low."},
      {t:"[端]{はし} (edge)", why:"[端]{はし} is flat (*heiban*): low–high, and the particle stays high: low–high–high."},
      {t:"You can’t tell from pitch at all", why:"In Tokyo Japanese you can: each of the three has its own melody when a particle follows."}
    ]},
    {id:"e3u1-l5-x5", bonus:true, type:"sort", q:"Sort these words by their pitch pattern in standard Tokyo Japanese.", buckets:["Head-high [1]: high first, then a drop","Flat [0]: low first, then high, no drop"], items:[
      {t:"[雨]{あめ} (rain)", b:0, why:"[雨]{あめ} starts high and drops: あ high, め low."},
      {t:"[飴]{あめ} (candy)", b:1, why:"[飴]{あめ} is flat: あ low, め high, and a particle stays high."},
      {t:"[箸]{はし} (chopsticks)", b:0, why:"[箸]{はし} is head-high: は high, し low."},
      {t:"[端]{はし} (edge)", b:1, why:"[端]{はし} is flat: low–high, no drop."},
      {t:"[鮭]{さけ} (salmon)", b:0, why:"[鮭]{さけ} is head-high: さ high, け low."},
      {t:"[酒]{さけ} (alcohol)", b:1, why:"[酒]{さけ} is flat: さ low, け high."},
      {t:"[牡蠣]{かき} (oyster)", b:0, why:"[牡蠣]{かき} is head-high: か high, き low."},
      {t:"[柿]{かき} (persimmon)", b:1, why:"[柿]{かき} is flat: か low, き high."}
    ]},
    {id:"e3u1-l5-x6", bonus:true, type:"mcq", q:"Said on their own, without a particle, how do [橋]{はし} (bridge) and [端]{はし} (edge) sound in standard Tokyo Japanese?", options:[
      {t:"The same: both low–high. The difference appears on a following particle.", ok:true, why:"Right. [橋]{はし} is tail-high and [端]{はし} is flat; alone, both go low–high. After [橋]{はし} the particle drops; after [端]{はし} it stays high."},
      {t:"Different: [橋]{はし} is high–low and [端]{はし} is low–high", why:"High–low is [箸]{はし} (chopsticks), not [橋]{はし}. [橋]{はし} starts low."},
      {t:"Different: [橋]{はし} is louder", why:"Japanese pitch accent is about high and low pitch, not loudness."},
      {t:"The same, and no particle can tell them apart", why:"A particle can: が after [橋]{はし} drops low, but after [端]{はし} it stays high."}
    ]},
    {id:"e3u1-l5-x7", bonus:true, type:"spot", q:"Here are a learner’s notes on Japanese sounds. Tap the statements that are wrong.", ask:"is wrong", parts:[
      {t:"Japanese pitch accent is about high and low pitch, not loudness.", flag:false, why:"Correct: each mora is high or low; loudness hardly changes."},
      " ",{t:"Every Japanese dialect uses the same pitch patterns.", flag:true, why:"Wrong. Kansai Japanese has a different accent system, and some dialects don’t distinguish words by pitch at all."},
      " ",{t:"In Tokyo Japanese, [雨]{あめ} (rain) starts high.", flag:false, why:"Correct: [雨]{あめ} is head-high, あ high and め low."},
      " ",{t:"ん and small っ don’t count as beats.", flag:true, why:"Wrong. ん and small っ each take a full mora, as does the second half of a long vowel."},
      " ",{t:"After a tail-high word like [橋]{はし}, the drop shows on the particle.", flag:false, why:"Correct: はし rises, and が after it drops low."},
      " ",{t:"If your pitch is wrong, nobody can understand you.", flag:true, why:"Wrong. Context usually makes the meaning clear. Good pitch makes you sound more natural and easier to follow, but a wrong pitch rarely stops people understanding you."}
    ]}
   ],
   apply:{intro:"Train your ears and your rhythm. Keep your recordings private.", tasks:[
     {t:"Clap the beats of fifteen words", how:["Choose fifteen words from this unit, mixing ones with ん, small っ, long vowels and [拗音]{ようおん}.","For each, write the beats with dots between them (と・う・きょ・う) and the number.","Say each word while clapping once per beat. Your claps and your count should match."], write:"Word · beats · count…"},
     {t:"Listen to pitch on OJAD", how:["Open OJAD (Online Japanese Accent Dictionary) and use its word search.","Look up two verbs, for example たべる (to eat) and のむ (to drink), and play the recordings.","Draw the pitch line for the dictionary form of each (high and low dots), as in this lesson.","Then type a short sentence into the Suzuki-kun tool and compare its pitch line with how you say it."], write:"Verb 1 and its pitch line… Verb 2… What Suzuki-kun showed…"},
     {t:"Shadow a short recording", how:["Choose a short audio clip from a free course such as IRODORI.","Play one sentence, pause, and say it straight after the speaker. Repeat five times.","Record your fifth try privately and compare its rhythm with the original."], write:"Which sentence… what I changed after listening…"},
     {t:"Plan your next two weeks", how:["Write when you will do your Kanji Lab reviews each day (both kana decks).","Choose a small reward for 14 days in a row.","If you miss a day, just do your reviews the next day. Streaks are a tool, not a test."], write:"My review time… my reward…"}
   ], proof:"Fifteen words split into beats, two OJAD pitch lines and one Suzuki-kun comparison, a private shadowing recording, and a two-week review plan."},
   read:[
    {book:"irodori", where:"Starter ([入門]{にゅうもん}), Lesson 1 “Good morning!”: the lesson audio (free MP3 playback from the Starter page)", note:"Background listening: short, natural greetings to shadow. Copy the beats first, then the melody."},
    {book:"taekim", where:"Grammar Guide → The Writing System → “Chapter Overview”, section “Intonation”", note:"Background reading: a short note that pitch is best learned by listening to native speakers. This lesson goes further."}
   ]
  }
  ],
  checkpoint:["e3u1-q02","e3u1-q05","e3u1-q09","e3u1-q12","e3u1-q15","e3u1-q21","e3u1-q23","e3u1-q30","e3u1-q34","e3u1-q38","e3u1-q39","e3u1-q45"],
  codex:[
    {id:"japanese-writing-system", title:"The Japanese writing system", aka:["three scripts","kanji, hiragana and katakana","日本語の文字"], tags:["japanese","writing","foundations"],
     summary:"Japanese mixes three scripts in one text: kanji for meaning, hiragana for grammar and native words, katakana for loanwords and names, with romaji for typing and signs.",
     levels:{
      starter:[
        "Japanese is written with **three scripts at once**. **Kanji** are characters borrowed from Chinese; each carries a meaning, like [山]{やま} (mountain). **Hiragana** are curvy sound symbols used for grammar words and endings, such as は and ～ます. **Katakana** are angular sound symbols used mostly for words from other languages and foreign names, such as コーヒー (coffee) and アナ (Ana).",
        "Hiragana and katakana together are called **kana**. Each kana stands for a sound, not a meaning, and the two sets have the same 46 basic sounds.",
        "A fourth system, **romaji**, writes Japanese in Latin letters. You see it on signs for visitors and use it for typing, but ordinary Japanese texts don’t use it.",
        "Japanese has no spaces between words. Switching between scripts helps the reader see where words begin and end.",
        {key:"Kanji carry meaning, hiragana carry grammar, katakana mark borrowed words. Learn kana first: with them you can write any word by its sound."}
      ],
      builder:[
        "How the scripts share the work in one sentence:",
        {ex:"ミンさんは[毎朝]{まいあさ}コーヒーを[飲]{の}みます。\nkatakana name + hiragana title and particle + kanji word + katakana loanword + hiragana particle + kanji stem + hiragana ending", label:"Example"},
        {table:[["Script","Typical jobs","Examples"],["Kanji","Nouns; stems of verbs and adjectives","[山]{やま}, [飲]{の}む"],["Hiragana","Particles, endings (okurigana), native words without common kanji, furigana","は, を, ～ます, ありがとう"],["Katakana","Loanwords, foreign names, many sound words, emphasis","パン, サラ, ワンワン"],["Romaji","Signs, maps, passports, typing input","Tōkyō, *toukyou* on a keyboard"]]},
        "**Furigana** are small kana printed beside or above kanji to show the reading, common in learner and children’s materials. **Okurigana** are the hiragana endings written after a kanji stem, as in [飲]{の}**みます**.",
        "Japanese can be written **horizontally** (left to right, as in most websites and science texts) or **vertically** (top to bottom, with columns running right to left, as in many novels and newspapers). The characters are the same; a few marks, such as the long-vowel bar ー, turn to fit.",
        "A word may be written in different scripts in different places: ねこ in a children’s book, [猫]{ねこ} in a novel, ネコ in a biology text. All are correct; the choice depends on the reader and the purpose.",
        "For learners, the order of study is usually hiragana, then katakana, then kanji little by little. Kana let you read and write everything by sound from the first weeks; kanji then make reading faster, because the meaning jumps out before you have sounded the word."
      ],
      pro:[
        "**Origins.** Kanji came from China more than a thousand years ago. Hiragana developed from cursive ([草書]{そうしょ}) forms of whole characters used for their sounds (man’yōgana): あ from [安]{あん}. Katakana developed from parts of such characters, used as shorthand by Buddhist monks in the 9th century: カ from the left side of [加]{か}. Hiragana once had several variant shapes for many sounds ([変体仮名]{へんたいがな}, *hentaigana*). School regulations in 1900 fixed one standard shape per sound, and hentaigana now survive mainly on traditional shop signs, such as some soba restaurants.",
        "**Official guides today.** Kanji for general use are listed in the [常用漢字表]{じょうようかんじひょう} (2,136 characters since 2010). Kana spelling follows [現代仮名遣]{げんだいかなづか}い (Cabinet Notice, 1986), which keeps historical spellings for the particles は, へ, を and sets the rules for long vowels and ぢ/づ. Loanword spelling follows [外来語]{がいらいご}の[表記]{ひょうき} (1991).",
        "**Romaji in 2025.** A new 「ローマ[字]{じ}のつづり[方]{かた}」 (Cabinet Notice No. 4 of 2025) replaced the 1954 notice. Its main table follows Hepburn-like spellings (*shi, chi, tsu, fu, ji*); ん is always *n*; the particles are *wa, e, o*; long vowels take a macron (or a circumflex) or may be written by doubling the vowel (*Ōno* or *Oono*). The Agency for Cultural Affairs stresses that it is a guide, not legally binding, and that it is not a full switch to traditional Hepburn: existing spellings such as company names need not change at once.",
        "**Typing.** Most people type Japanese with romaji input and convert to kanji with the space bar. Romaji typing follows the kana spelling letter by letter (*toukyou*), not Hepburn (*Tōkyō*). Phones also offer a 12-key kana pad, popular in Japan, where you flick each key for the five vowels of a row."
      ]},
     related:["hiragana","katakana","japanese-sounds","learning-kana"],
     sources:[{t:"Agency for Cultural Affairs: Q&A on 「ローマ字のつづり方」 (Cabinet Notice No. 4 of 2025), February 2026 (PDF)", url:"https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/pdf/94340701_01.pdf"},{t:"Wikipedia: Katakana", url:"https://en.wikipedia.org/wiki/Katakana"},{t:"Wikipedia: Hiragana", url:"https://en.wikipedia.org/wiki/Hiragana"}], checked:"2026-11"},

    {id:"hiragana", title:"Hiragana (ひらがな)", aka:["ひらがな","平仮名","hiragana chart"], tags:["japanese","kana","writing"],
     summary:"The curvy kana script: 46 basic symbols for the sounds of Japanese, used for grammar, endings and native words.",
     levels:{
      starter:[
        "**Hiragana** is the first Japanese script most learners study. It has **46 basic symbols**, each for one sound, arranged in the **[五十音]{ごじゅうおん}** (*gojūon*) table: five vowel columns (a i u e o) crossed with rows for k, s, t, n, h, m, y, r and w, plus ん.",
        "You use hiragana for the grammar of every sentence: particles like は and を, verb endings like ～ます, and many native words, such as ありがとう. You can also write **any** word in hiragana if you don’t know its kanji.",
        "Hiragana looks round and flowing, because it grew out of handwritten, cursive kanji.",
        "Learn it row by row, saying each sound aloud as you write it, and start reading simple words such as いぬ (dog) and ねこ (cat) straight away.",
        {tip:"Daily short review is the fastest way to make hiragana automatic. The Kanji Lab’s hiragana deck does this for you."}
      ],
      builder:[
        {table:[["Row","Kana","Romaji"],["あ","あ い う え お","a i u e o"],["か","か き く け こ","ka ki ku ke ko"],["さ","さ し す せ そ","sa shi su se so"],["た","た ち つ て と","ta chi tsu te to"],["な","な に ぬ ね の","na ni nu ne no"],["は","は ひ ふ へ ほ","ha hi fu he ho"],["ま","ま み む め も","ma mi mu me mo"],["や","や ゆ よ","ya yu yo"],["ら","ら り る れ ろ","ra ri ru re ro"],["わ","わ を ん","wa o n"]]},
        "**Irregular romaji:** し *shi*, ち *chi*, つ *tsu*, ふ *fu*. The sounds really are different from *si, ti, tu, hu*.",
        "**Particles:** は is read *wa*, へ is read *e* and を is read *o* when they are particles. Inside other words, は and へ keep their normal sounds.",
        "**Extensions:** ゛ and ゜ add 25 voiced and *p* sounds (が, ざ, だ, ば, ぱ rows); small ゃ ゅ ょ make combined sounds (きゃ, しゅ, ちょ); small っ makes a pause. Long vowels are written with an extra vowel kana (おかあさん).",
        "**Look-alikes** to watch: ぬ/め, わ/れ/ね, は/ほ, る/ろ, さ/ち, き/さ, あ/お.",
        "**Writing.** Each kana has a fixed stroke order, generally top to bottom and left to right, and each stroke ends in a stop, a flick or a sweep. Writing in squared paper, one kana per square, keeps shapes the right size. Say the sound aloud as you write, so that the shape, the sound and the movement are learned together."
      ],
      pro:[
        "**History.** Hiragana developed from cursive forms of kanji used for their sound. At the Heian court it was especially associated with women’s writing (it was called [女手]{おんなで}, *onnade*), though men used it too, for poems and letters. Over the centuries it became the everyday script for everyone.",
        "**Obsolete kana.** ゐ (*wi*) and ゑ (*we*) were dropped from standard spelling in the post-war reforms and merged with い and え; today they survive only in some names and historical texts. を survives only as the object particle.",
        "**ぢ and づ.** In standard Japanese, じ/ぢ (*ji*) and ず/づ (*zu*) sound the same. [現代仮名遣]{げんだいかなづか}い writes じ and ず except in two cases: a repeated sound (ちぢむ, つづく) and compounds where a word starting with ち or つ becomes voiced (はなぢ, てづくり, こづつみ). Some dialects, such as Tosa (Kōchi), traditionally keep the sounds distinct, especially among older speakers.",
        "**Font versus hand.** Printed shapes vary by font. In some fonts the lower stroke of き and さ joins the stroke above; in handwriting it is usually separate. り is often printed as one shape but written in two strokes, and そ has one-stroke and two-stroke forms. Learners should accept both in reading.",
        "**Spacing.** Japanese normally uses no spaces. Spaced writing ([分]{わ}かち[書]{が}き, *wakachigaki*) appears in children’s books and some learner texts, and is a useful bridge while you learn.",
        "**Names of the marks.** The two strokes ゛ are [濁点]{だくてん} (*dakuten*) and the circle ゜ is [半濁点]{はんだくてん} (*handakuten*); in everyday speech people say てんてん and まる."
      ]},
     related:["japanese-writing-system","katakana","long-vowels-and-small-tsu","learning-kana"],
     sources:[{t:"Agency for Cultural Affairs: 現代仮名遣い, 本文 第2 (particles, ぢ/づ, オ列 + お)", url:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gendaikana/honbun_dai2.html"},{t:"Wikipedia: Hiragana", url:"https://en.wikipedia.org/wiki/Hiragana"},{t:"Tae Kim’s Guide to Learning Japanese: Hiragana", url:"https://guidetojapanese.org/learn/grammar/hiragana"}], checked:"2026-11"},

    {id:"katakana", title:"Katakana (カタカナ)", aka:["カタカナ","片仮名","katakana chart"], tags:["japanese","kana","writing","loanwords"],
     summary:"The angular kana script with the same sounds as hiragana, used for loanwords, foreign names, sound words and emphasis.",
     levels:{
      starter:[
        "**Katakana** has the same 46 basic sounds as hiragana, in the same order, but with sharper, straighter shapes: ア イ ウ エ オ, カ キ ク ケ コ, and so on.",
        "Its main job is writing **loanwords**, words borrowed from other languages: テレビ (TV), コーヒー (coffee), パン (bread, from Portuguese). It is also used for names of people and places from outside Japan (アナ, ブラジル), for many sound words (ワンワン, woof) and to make a word stand out.",
        "Long vowels in katakana usually take a **bar, ー**: ケーキ (*kēki*, cake). A small ッ makes a pause, as in hiragana: ベッド (*beddo*, bed).",
        "Many katakana words are easy to guess once you can read them, because you know the original word. That makes katakana a good confidence boost after hiragana.",
        {tip:"Watch the famous look-alikes: シ (*shi*) and ツ (*tsu*), ソ (*so*) and ン (*n*)."}
      ],
      builder:[
        "**Extra combinations** let katakana write sounds the basic table lacks. A small vowel kana joins the one before it into one beat:",
        {table:[["Combination","Sound","Example"],["ティ / ディ","ti / di","パーティー, ディナー"],["ファ フィ フェ フォ","fa fi fe fo","ファイル, フォーク"],["シェ ジェ チェ","she je che","シェア, ジェット, チェック"],["ウィ ウェ ウォ","wi we wo","ウェブ, ウォーキング"],["ヴァ ヴィ ヴ ヴェ ヴォ","va vi vu ve vo","ヴァイオリン (or バイオリン)"]]},
        "**How words are adapted:** an extra vowel is added after a lone consonant (*u* in most places, *o* after t and d, *i* after “ch” and “j”); l and r both become the ラ row; a short vowel before a final consonant often brings ッ (ベッド, カップ).",
        "**Meanings can shift.** マンション is a flat in a block, not a mansion. Some words were made in Japan from English parts (*wasei eigo*), such as ガソリンスタンド (petrol or gas station).",
        "**Look-alikes:** シ/ツ and ン/ソ differ in stroke direction (シ and ン rise from the bottom; ツ and ソ fall from the top). Also ク/ケ/タ, フ/ワ/ウ, ナ/メ, コ/ユ, チ/テ, ヌ/ス.",
        "**Typing.** Type the word in hiragana with romaji input and choose the katakana suggestion (on Windows, [[kbd:F7]] converts it). The [[kbd:-]] key gives the bar ー, *thi* gives ティ and *fa* gives ファ.",
        "**Reading strategy.** Read katakana beat by beat, then say it faster and listen for a word you know. If the meaning doesn’t fit, remember that meanings can shift, and check a dictionary."
      ],
      pro:[
        "**The official guide.** [外来語]{がいらいご}の[表記]{ひょうき} (Cabinet Notice, 1991) gives two tables of kana for loanwords and foreign names. The first lists the kana in general use, including シェ, チェ, ツァ, ツェ, ツォ, ティ, ファ, フィ, フェ, フォ, ジェ, ディ and デュ. The second, for writing closer to the original sound or spelling, includes イェ, ウィ, ウェ, ウォ, クァ, クィ, クェ, クォ, ツィ, トゥ, グァ, ドゥ, ヴァ, ヴィ, ヴ, ヴェ, ヴォ, テュ, フュ and ヴュ. So ウオーキング/ウォーキング and バイオリン/ヴァイオリン are both acceptable.",
        "**Long vowels.** The guide writes long vowels with ー in principle (エネルギー, パーティー), but accepts custom: バレエ and ミイラ use a vowel kana, and words such as エイト, ペイント, レイアウト and ボウリング are written with エイ/オウ. English -er, -or, -ar endings become a long *ā* with ー (エレベーター, コンピューター), but the ー may be dropped by custom (エレベータ, コンピュータ), which is common in technical writing.",
        "**Pauses and ン.** The guide writes ン and ッ normally, but follows custom where a word has dropped them: イニング (not インニング), アクセサリー (not アクセッサリー).",
        "**History and other uses.** Katakana began as monks’ reading marks in the 9th century. Official documents of pre-war Japan were written in kanji and katakana, and telegrams were sent in katakana until 1988. Today it also writes the names of plant and animal species in scientific writing (ヒト, サクラ), many company names, and words a writer wants to mark as special."
      ]},
     related:["hiragana","japanese-writing-system","long-vowels-and-small-tsu","learning-kana"],
     sources:[{t:"Agency for Cultural Affairs: 外来語の表記, Ⅲ 撥音、促音、長音その他 (rules and examples)", url:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gairai/honbun06.html"},{t:"Wikipedia (Japanese): 外来語の表記 (summary of the two kana tables)", url:"https://ja.wikipedia.org/wiki/%E5%A4%96%E6%9D%A5%E8%AA%9E%E3%81%AE%E8%A1%A8%E8%A8%98"},{t:"Wikipedia: Katakana", url:"https://en.wikipedia.org/wiki/Katakana"}], checked:"2026-11"},

    {id:"japanese-sounds", title:"The sounds of Japanese", aka:["Japanese pronunciation","Japanese vowels and consonants","日本語の発音"], tags:["japanese","pronunciation","sounds"],
     summary:"Five pure vowels, consonant-plus-vowel beats, a few sounds to practise (ふ, the ら row, ん), and whispered vowels in fast speech.",
     levels:{
      starter:[
        "Japanese has a small, regular sound system. There are only **five vowels**, a i u e o, each short and steady, without the glides of English “no” or “day”.",
        "Almost every kana is **a consonant plus a vowel**: か *ka*, み *mi*, ろ *ro*. Two special sounds have no vowel: **ん** (*n*) and the pause written with a **small っ**.",
        "A few sounds need practice. **ふ** (*fu*) is made by blowing gently through nearly closed lips, without touching the teeth to the lip. The **ら row** (*ra ri ru re ro*) is one light tap of the tongue, between English r, l and d. **つ** (*tsu*) is the “ts” of “cats”.",
        "Each kana takes about one beat, so Japanese has an even rhythm. Long vowels last two beats, and that length changes meaning: おばさん (aunt) and おばあさん (grandmother).",
        {key:"Keep vowels pure, give every beat its time, and practise ふ, つ, the ら row and ん."}
      ],
      builder:[
        {table:[["Sound","What to do","Example"],["う *u*","Lips relaxed, not pushed forward","くつ (*kutsu*, shoes)"],["ふ *fu*","Blow through nearly closed lips","ふね (*fune*, ship)"],["ら row","One quick tongue tap behind the top teeth","さくら (*sakura*)"],["ん before m, b, p","Sounds like *m*","さんぽ (*sanpo*, walk)"],["ん before k, g","Sounds like “ng”","ぎんこう (*ginkō*, bank)"],["Small っ","Hold the next consonant for one beat","きって (*kitte*, stamp)"]]},
        "**Whispered vowels.** In standard Tokyo speech, い and う are often whispered (devoiced) between or after voiceless sounds such as k, s, t, h and p: です sounds like “dess”, すき like “ski”. How much speakers do this varies by region and speed.",
        "**Voiced sounds.** The marks ゛ and ゜ turn k→g, s→z, t→d, h→b and h→p. じ/ぢ (*ji*) and ず/づ (*zu*) sound the same in standard Japanese.",
        "**No audio here.** For listening, use free sources such as OJAD (verbs and adjectives with recordings), the IRODORI course audio, or kana apps with sound. Copy rhythm first, then melody.",
        "**Particles with old spellings.** は, へ and を as particles are said *wa*, *e* and *o*. This is a spelling rule, not a sound rule: inside other words は and へ keep the sounds *ha* and *he*.",
        "**Rhythm.** Give ん, small っ and each half of a long vowel a full beat. Many learners shorten these; tapping a finger for each beat while speaking is a quick fix."
      ],
      pro:[
        "**Phonetic detail.** The ら row is most often an apical tap [ɾ]; a lateral [l] is a common variant, so an *l*-like sound is not an error. う is a close back-to-central vowel with unrounded or compressed lips. ふ is often described as a bilabial fricative [ɸ], but it is not always produced that way and can be close to [h] with weak lip friction.",
        "**The moraic nasal ん** takes the place of the following consonant: [m] before *p, b, m*, [ŋ] before *k, g*, and a nasal of variable quality (traditionally described as uvular [ɴ]) at the end of an utterance. Before vowels and *y* it is often a nasalised vowel, which is why romaji may add an apostrophe to separate it: *tan’i* ([単位]{たんい}, unit) versus *tani* ([谷]{たに}, valley). Japan’s 2025 rules allow this apostrophe where it prevents misreading.",
        "**Morae and time.** The mora is a unit of timing at the level of the sound system. Physical durations are not exactly equal: the length of a mora varies with the sounds in it, its position in the word and the speaking rate, while speakers still hear and count the beats as equal units.",
        "**ぢ/づ.** The distinction between *ji/di* and *zu/du* is lost in standard Japanese and most dialects; traditional Tosa (Kōchi) speech keeps both, some dialects keep only *zu/du*, and some, such as northern Tōhoku, merge all four.",
        "**Pitch** is the other half of Japanese pronunciation: see {{pitch-accent}}."
      ]},
     related:["pitch-accent","long-vowels-and-small-tsu","hiragana"],
     sources:[{t:"Wikipedia: Japanese phonology", url:"https://en.wikipedia.org/wiki/Japanese_phonology"},{t:"OJAD: Online Japanese Accent Dictionary (University of Tokyo)", url:"https://www.gavo.t.u-tokyo.ac.jp/ojad/"}], checked:"2026-11"},

    {id:"long-vowels-and-small-tsu", title:"Long vowels and small っ", aka:["長音","促音","chōon","sokuon","small tsu","long vowels in kana"], tags:["japanese","kana","spelling","pronunciation"],
     summary:"Two ways Japanese adds a beat: a long vowel (おかあさん, ケーキ) and the pause of small っ (きって). Both change meaning, and both have spelling rules.",
     levels:{
      starter:[
        "Japanese words are built from beats. Two things add a beat that English speakers often miss.",
        "A **long vowel** ([長音]{ちょうおん}, *chōon*) lasts two beats. Hiragana writes it with an extra vowel kana: おかあさん (*okāsan*, mother). Katakana usually uses a bar: ケーキ (*kēki*, cake).",
        "A **small っ** ([促音]{そくおん}, *sokuon*) is a beat of silence before the next consonant: きって (*kitte*, stamp). It is written smaller than a normal つ, and romaji doubles the consonant.",
        "Both change meaning: おばさん (aunt) and おばあさん (grandmother); おと (sound) and おっと (husband); ビル (building) and ビール (beer).",
        "Spelling has a few surprises. Most long *e* sounds are written with い (せんせい, *sensei*), and most long *o* sounds with う (おとうさん, *otōsan*), but a short list of words uses お (おおきい, *ōkii*, big). Learn that list as a group.",
        {tip:"Tap a finger for each beat as you say a new word. If your taps don’t match the kana, slow down."}
      ],
      builder:[
        {table:[["Long vowel","Hiragana rule","Examples"],["ā","add あ","おかあさん, おばあさん"],["ii","add い","おにいさん, いいえ"],["ū","add う","くうき, すうがく, ゆうき"],["long e","add い in most words; え in a few","せんせい, えいが, とけい; おねえさん, ええ"],["ō","add う in most words; お in a short list","おとうさん, ありがとう; おおきい, こおり"]]},
        "**The おお list.** Common words spelled with お: おおきい (big), おおい (many), とおい (far), とおる (to pass), こおり (ice), とお (ten). Others in the official list include おおかみ (wolf), ほのお (flame) and こおる (to freeze).",
        "**えい.** Words like せんせい are written with い but usually said with a long *e* in everyday speech.",
        "**Small っ** doubles the next consonant in romaji (*gakkō*, *zasshi*). Before *s* you hear a long hiss rather than silence. In katakana it is ッ: カップ, ベッド.",
        "**Typing:** type the kana, not the Hepburn: *toukyou*, *ookii*, *kitte*; *xtu* or *ltu* gives a small っ on its own.",
        "**Meaning pairs to practise:** ここ (here) / こうこう (high school); ゆき (snow) / ゆうき (courage); さか (slope) / さっか (writer); びょういん (hospital) / びよういん (beauty salon). Say each pair while tapping the beats: the longer word always has one or two more taps.",
        "**Romaji.** Hepburn marks long vowels with a macron (*ā, ū, ō*; *ē* for ええ), writes long *i* as *ii* in words spelled with い (*oniisan*) but as *ī* where katakana uses ー (*kōhī*), and keeps えい as *ei*. Japan’s 2025 rules also accept doubled vowels (*Oono*). They don’t set spellings for loanwords, which are rarely romanised, so writing katakana ー as a macron (*kōhī*) is this course’s convention. Before *ch*, traditional Hepburn writes a small っ as *t* (*matcha*), while the 2025 rules double the *c*. Signs often drop the marks entirely (*Tokyo*), which hides the length."
      ],
      pro:[
        "**Why おお?** In [現代仮名遣]{げんだいかなづか}い, words whose historical spelling had ほ or を after an お-column kana are written with お, whether they are pronounced as a long *ō* or as two separate vowels: おおかみ, こおり, とお, ほお, ほのお, とおる, とどこおる, もよおす, おおきい, おおい, とおい, おおむね, おおよそ. Everywhere else, a long *ō* is written with う (おとうさん, きょう, おはよう, はっぴょう).",
        "**Why えい?** The same rules state that words such as せい, れい, えいが, とけい and ていねい are written with い after an え-column kana, whether pronounced as a long *e* or as *ei*. Only a few words, such as ねえさん and the reply ええ, use え.",
        "**Vowel meetings that are not long vowels.** When two vowels belong to different parts of a word, both are said: おもう (*omo-u*, to think), いう (*iu*, to say, often pronounced *yū*). Learners should follow the spoken model for each word.",
        "**Katakana.** [外来語]{がいらいご}の[表記]{ひょうき} writes long vowels with ー in principle, with custom-based exceptions (バレエ, ミイラ; エイト, ボウリング). Small ッ is used as in hiragana, with a few words that dropped it by custom (アクセサリー).",
        "**Small kana rules.** The official rules ask that the つ of a pause and the や・ゆ・よ of combined sounds be written small “where possible”. Old texts and some signs written all in large kana can therefore be ambiguous."
      ]},
     related:["hiragana","katakana","japanese-sounds","pitch-accent"],
     sources:[{t:"Agency for Cultural Affairs: 現代仮名遣い, 本文 第1 (long vowels, small っ and ゃゅょ)", url:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gendaikana/honbun_dai1.html"},{t:"Agency for Cultural Affairs: 現代仮名遣い, 本文 第2 (オ列 + お and エ列 + い)", url:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gendaikana/honbun_dai2.html"},{t:"Agency for Cultural Affairs: 外来語の表記, Ⅲ 撥音、促音、長音その他", url:"https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gairai/honbun06.html"}], checked:"2026-11"},

    {id:"pitch-accent", title:"Pitch accent in Japanese", aka:["アクセント","Tokyo accent","高低アクセント","heiban","atamadaka","nakadaka","odaka"], tags:["japanese","pronunciation","pitch"],
     summary:"In standard Tokyo Japanese each mora is high or low, and words differ in where the pitch drops: あめ (rain) is high–low, あめ (candy) low–high.",
     levels:{
      starter:[
        "English marks words with **stress** (louder, longer syllables). Japanese uses **pitch**: each beat is either high or low, like two notes, and loudness barely changes.",
        "What matters is **where the pitch drops**. In standard Tokyo Japanese, [雨]{あめ} (*ame*, rain) is high–low, while [飴]{あめ} (*ame*, candy) is low–high. [箸]{はし} (*hashi*, chopsticks) is high–low, while [橋]{はし} (bridge) and [端]{はし} (edge) are both low–high on their own; a particle such as が tells those two apart.",
        "Pitch accent varies between dialects. The patterns taught to learners are those of standard Japanese, based on Tokyo speech.",
        "Context usually makes the meaning clear, so a wrong pitch rarely stops people understanding you. But good pitch makes speech sound natural and easier to follow. Learn it gradually, by listening and copying.",
        {tip:"Listen to the particle after a word. It often reveals the pattern."}
      ],
      builder:[
        {table:[["Pattern","Shape","Examples"],["[平板]{へいばん} *heiban* [0]","Low, then high; no drop, particle stays high","[飴]{あめ}, [端]{はし}, [柿]{かき}, [酒]{さけ}, [鼻]{はな}, [桜]{さくら}"],["[頭高]{あたまだか} *atamadaka* [1]","High first, then drop","[雨]{あめ}, [箸]{はし}, [牡蠣]{かき}, [鮭]{さけ}, [猫]{ねこ}"],["[中高]{なかだか} *nakadaka*","Rise, then drop inside the word","[日本]{にほん} [2], [先生]{せんせい} [3]"],["[尾高]{おだか} *odaka*","Rise, stay high to the end; particle drops","[橋]{はし} [2], [花]{はな} [2], [犬]{いぬ} [2]"]]},
        "The number is the mora **after which** the pitch drops; [0] means no drop. A two-mora word marked [2] is *odaka*: the drop comes after the last mora, so you hear it on the particle.",
        "In standard Tokyo Japanese a word said on its own usually starts low and rises at the second mora unless the first mora is accented; after the drop, everything stays low. A word has at most one drop.",
        "**Heiban and odaka words sound alike on their own.** はな ([花]{はな}, flower) and はな ([鼻]{はな}, nose) are both low–high; with が, [花]{はな}が drops on が and [鼻]{はな}が stays high.",
        "**Free tools:** OJAD (University of Tokyo) plays verbs and adjectives in many forms and draws predicted pitch for sentences with its Suzuki-kun tool. Many Japanese dictionaries show accent numbers.",
        "**How to practise.** Listen first, then shadow: say a sentence straight after a recording, copying its melody. Draw high and low dots over new words in your notes. Don’t worry about every word; patterns become familiar with listening."
      ],
      pro:[
        "**Analysis.** The Tokyo-type system is described by the position of the accent nucleus, the mora after which pitch falls (transcribed HꜜL). Atamadaka, nakadaka and odaka words are together called [起伏式]{きふくしき} (*kifukushiki*, rise-and-fall type); heiban words are [平板式]{へいばんしき}. Patterns of single words are often unpredictable and must be learned, though compounds and verb and adjective forms follow regular rules.",
        "**The initial rise.** The low-to-high rise at the start of an unaccented phrase is often treated as part of phrase intonation rather than of the word itself, and it can be weak, for example after a heavy first syllable. Across a sentence, highs also get gradually lower after each accent (downstep).",
        "**Dialects.** Accent placement differs between dialects: Kansai (Keihan) Japanese has a different system that also uses the pitch of the first syllable, and some dialects of southern Tōhoku and northeastern Kantō do not distinguish words by accent at all. Standard accent, essentially that of Tokyo’s Yamanote speech, is expected of broadcasters.",
        "**Data.** Dictionaries differ in places and many words have more than one accepted pattern ([寿司]{すし}, for example, is listed as [2] and [1]). Examples in this unit were checked in two accent datasets built from Japanese accent dictionaries.",
        "**Priorities for learners.** Research on second-language speech suggests that being understood matters more than sounding native (see {{pronunciation-intelligibility}}). Many Japanese teachers therefore work on mora length and clear sounds first and build pitch gradually through listening."
      ]},
     related:["japanese-sounds","long-vowels-and-small-tsu"],
     sources:[{t:"Wikipedia: Japanese pitch accent", url:"https://en.wikipedia.org/wiki/Japanese_pitch_accent"},{t:"Wikipedia (Japanese): アクセント (Tokyo examples 端/箸/橋, 鼻/花; accentless dialects)", url:"https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%82%BB%E3%83%B3%E3%83%88"},{t:"OJAD: Online Japanese Accent Dictionary (University of Tokyo)", url:"https://www.gavo.t.u-tokyo.ac.jp/ojad/"}], checked:"2026-11"},

    {id:"learning-kana", title:"How to learn kana", aka:["learning hiragana","learning katakana","kana study plan","kana mnemonics"], tags:["japanese","kana","study skills"],
     summary:"Hiragana first, then katakana: learn by row with picture mnemonics, write by hand, read real words early, and review a little every day.",
     levels:{
      starter:[
        "Kana is mostly a memory task, and four habits make it fast.",
        {ol:["**Hiragana first**, row by row, then katakana. The sounds are the same, so katakana goes faster.","**Picture stories.** Link each shape to an image and its sound (ね with its loop like a cat’s tail, *neko*). Your own silly pictures work best.","**Write by hand** in the correct stroke order, saying each sound aloud.","**Review a little every day.** Short daily sessions beat one long one."]},
        "Start reading real words as soon as you can, even after two or three rows: いぬ, ねこ, すし, さくら.",
        "Forgetting is normal. Each time you recall a kana you nearly forgot, your memory gets stronger. That is the idea behind spaced review, and the app’s Kanji Lab is built on it.",
        {tip:"Ten new kana a day is a comfortable pace for many adults, but go at your own speed. Steady beats fast."}
      ],
      builder:[
        "**A sample plan.** Days 1–5: two hiragana rows a day, plus reviews. Days 6–8: ゛ ゜, small ゃゅょ, っ and long vowels. Then katakana in the same way, reading menus and labels as you go. Keep daily reviews of both decks long after you “know” them.",
        "**Spaced review.** The Kanji Lab uses boxes: a card you answer correctly comes back after longer gaps (1, 3, 7, 14, 30 days); a card you miss comes back tomorrow. Try to recall the answer before you reveal it.",
        "**Free help, checked November 2026:**",
        {list:["**HIRAGANA Memory Hint** and **KATAKANA Memory Hint**: free apps from the Japan Foundation Kansai Japanese-Language Institute (iPhone and Android, in English, Thai and Indonesian) with a picture and sound for each kana and quizzes, including one on look-alikes.","**Tae Kim’s Guide to Learning Japanese**: a free website whose hiragana page has a chart with sound for each kana and stroke-order help.","**IRODORI: Japanese for Life in Japan** (Japan Foundation): a course with textbooks and audio you can download at no cost. Its Starter Lessons 1 and 2 have kana charts with audio; the rest of the course is for after kana."]},
        "**Common traps:** relying on romaji too long; skipping stroke order; learning only from a chart without reading words; cramming the night before and then stopping."
      ],
      pro:[
        "**Why spacing works.** A large review by Cepeda and colleagues (2006, *Psychological Bulletin*) found that spacing study sessions improves long-term recall compared with massed study, and that the best gap grows with how long you need to remember. Retrieval practice (recalling before checking) adds to the effect. Leitner-style boxes combine both.",
        "**Mnemonics with care.** Picture mnemonics speed up first learning, but the aim is automatic recognition. Once a kana is fast, let the story fade. Make mnemonics that encode the **distinguishing feature** of look-alikes (the loop of ぬ, the rising stroke of シ), not just the whole shape.",
        "**Production as well as recognition.** Reading cards train recognition. Add writing from memory (cover the chart, write a row) and typing (romaji input) so that you can produce kana too.",
        "**Reading early.** Reading real words builds the link from shape to sound to meaning, and katakana loanwords give quick wins. [[graded-reader|Graded readers]] and children’s books in hiragana are useful bridges.",
        "**After kana.** Kana open the door to the rest of Japanese: grammar in Unit 2, kanji in Unit 4. Keep kana reviews short and daily until reading them takes no effort at all.",
        "**Speed as the goal.** Knowing a kana is not the same as reading it fluently. A useful check is to read a line of hiragana aloud at speaking pace; any kana that makes you pause deserves extra review."
      ]},
     related:["hiragana","katakana","japanese-writing-system"],
     sources:[{t:"Japan Foundation Kansai: HIRAGANA/KATAKANA Memory Hint", url:"https://www.jpf.go.jp/j/kansai/clip/kanamemoryhint/"},{t:"Tae Kim’s Guide to Learning Japanese: Hiragana", url:"https://guidetojapanese.org/learn/grammar/hiragana"},{t:"Cepeda et al. (2006), “Distributed practice in verbal recall tasks”, Psychological Bulletin 132(3) (PubMed)", url:"https://pubmed.ncbi.nlm.nih.gov/16719566/"}], checked:"2026-11"}
  ],
  terms:[
    {id:"kana", term:"Kana (仮名)", def:"The two Japanese sound scripts, hiragana and katakana. Each kana stands for a sound (usually one beat), not a meaning.", codex:"japanese-writing-system"},
    {id:"hiragana", term:"Hiragana (ひらがな)", def:"The curvy kana script: 46 basic symbols used for grammar words, word endings and native words, and to write any word by its sound.", codex:"hiragana"},
    {id:"katakana", term:"Katakana (カタカナ)", def:"The angular kana script with the same sounds as hiragana, used mainly for loanwords, foreign names, many sound words and emphasis.", codex:"katakana"},
    {id:"kanji-term", term:"Kanji (漢字)", def:"Characters that Japanese took from Chinese. Each one carries a meaning and has one or more readings, such as [山]{やま} (mountain, read やま).", codex:"japanese-writing-system"},
    {id:"romaji", term:"Romaji (ローマ字)", def:"Japanese written in the Latin alphabet, used on signs for visitors, on passports and for typing. Ordinary Japanese texts don’t use it.", codex:"japanese-writing-system"},
    {id:"hepburn", term:"Hepburn romanisation", def:"The most widely used way of writing Japanese in Latin letters, with spellings such as *shi*, *chi*, *tsu*, *fu* and *ji*, and long vowels marked ō, ū. Japan’s 2025 official romaji rules are close to it, with a few differences (for example, ん is always *n*).", codex:"japanese-writing-system"},
    {id:"gojuuon", term:"Gojūon (五十音)", def:"The “fifty sounds” table that arranges kana in five vowel columns (a i u e o) and consonant rows (–, k, s, t, n, h, m, y, r, w). It is also the order of Japanese dictionaries.", codex:"hiragana"},
    {id:"dakuten", term:"Dakuten (濁点, ゛)", def:"The two short strokes added to a kana to make its consonant voiced: か→が, さ→ざ, た→だ, は→ば. Informally called てんてん.", codex:"hiragana"},
    {id:"handakuten", term:"Handakuten (半濁点, ゜)", def:"The small circle added to the は row to make a *p* sound: は→ぱ, ひ→ぴ. Informally called まる.", codex:"hiragana"},
    {id:"youon", term:"Yōon (拗音)", def:"A combined sound written with an *i*-column kana plus a small ゃ, ゅ or ょ, such as きゃ (*kya*) or しょ (*sho*). It counts as one beat.", codex:"hiragana"},
    {id:"sokuon", term:"Sokuon (促音, small っ)", def:"The small っ (katakana ッ): a one-beat pause before the next consonant, shown in romaji by doubling it, as in きって (*kitte*).", codex:"long-vowels-and-small-tsu"},
    {id:"chouon", term:"Chōon (長音)", def:"A long vowel, lasting two beats. Hiragana writes it with an extra vowel kana (おかあさん); katakana usually uses the bar ー (ケーキ).", codex:"long-vowels-and-small-tsu"},
    {id:"mora", term:"Mora (plural morae)", def:"A beat of Japanese timing. Each kana is one mora, except small ゃゅょ (and small ァィゥェォ), which join the kana before them. ん, small っ and the second half of a long vowel each count as one.", codex:"japanese-sounds"},
    {id:"pitch-accent-term", term:"Pitch accent", def:"The pattern of high and low pitch in a Japanese word, especially where the pitch drops. In standard Tokyo Japanese, [雨]{あめ} (rain) is high–low and [飴]{あめ} (candy) is low–high.", codex:"pitch-accent"},
    {id:"loanword-katakana", term:"Loanword (in katakana)", def:"A word Japanese has taken from another language, normally written in katakana, such as パン (bread, from Portuguese) or テレビ (TV). The Japanese term is [外来語]{がいらいご} (*gairaigo*).", codex:"katakana"}
  ],
  bank:[
    /* Lesson 1 */
    {id:"e3u1-q01", lesson:"e3u1-l1", level:1, q:"Which Japanese script mainly carries the **meaning** of nouns and of verb and adjective stems?", options:[
      {t:"Kanji", ok:true, why:"Kanji are characters that stand for meanings, such as [山]{やま} (mountain) and the [飲]{の} (drink) in [飲]{の}みます."},
      {t:"Hiragana", why:"Hiragana mostly carries grammar: particles such as は and endings such as ～ます."},
      {t:"Katakana", why:"Katakana mostly writes loanwords and foreign names, by sound."},
      {t:"Romaji", why:"Romaji is Japanese in Latin letters, used for signs and typing, not for ordinary texts."}]},
    {id:"e3u1-q02", lesson:"e3u1-l1", level:2, q:"In ミンさんは[毎朝]{まいあさ}コーヒーを[飲]{の}みます (“Min drinks coffee every morning”), which part is written in katakana and is a loanword?", options:[
      {t:"コーヒー", ok:true, why:"コーヒー (*kōhī*, coffee) is angular katakana and a borrowed word. (ミン is katakana too, but it is a name.)"},
      {t:"[毎朝]{まいあさ}", why:"[毎朝]{まいあさ} (*maiasa*, every morning) is two kanji."},
      {t:"を", why:"を is the hiragana particle that marks the object."},
      {t:"みます", why:"みます is the hiragana ending of the verb [飲]{の}みます."}]},
    {id:"e3u1-q03", lesson:"e3u1-l1", level:2, q:"Priya sees サラ on a classmate’s name badge in Japan. Why is the name written in katakana?", options:[
      {t:"It is a name from another language, and such names are usually written in katakana", ok:true, why:"Names of people and places from outside Japan are normally written in katakana."},
      {t:"Katakana shows that the person is a teacher", why:"Scripts don’t show someone’s job or status."},
      {t:"Katakana is the polite script for names", why:"Scripts don’t carry politeness. Japanese names are usually written in kanji."},
      {t:"Names always use katakana in Japanese", why:"Most Japanese names are written in kanji; katakana is typical for names from other languages."}]},
    {id:"e3u1-q04", lesson:"e3u1-l1", level:1, q:"In Hepburn romaji, how is the kana つ written?", options:[
      {t:"*tsu*", ok:true, why:"つ sounds like the “ts” of “cats” plus *u*, and Hepburn writes it *tsu*."},
      {t:"*tu*", why:"*Tu* is the older Kunrei spelling. Hepburn writes the actual sound, *tsu*."},
      {t:"*su*", why:"*Su* is す, a different kana in the さ row."},
      {t:"*zu*", why:"*Zu* is ず or づ, with the dakuten."}]},
    {id:"e3u1-q05", lesson:"e3u1-l1", level:1, q:"How many basic hiragana are used in modern Japanese, not counting kana with ゛ or ゜?", options:[
      {t:"46", ok:true, why:"The [五十音]{ごじゅうおん} grid has 50 places, but only 46 basic kana are in use today."},
      {t:"50", why:"50 is the number of places in the “fifty sounds” grid, some of which are empty or obsolete."},
      {t:"48", why:"48 includes ゐ and ゑ, which are no longer used in standard spelling."},
      {t:"71", why:"71 adds the 25 kana with ゛ and ゜. The question asks for the basic kana only."}]},
    {id:"e3u1-q06", lesson:"e3u1-l1", level:3, q:"Tomás notices that Japanese text has no spaces between words. What mainly helps Japanese readers see where words begin and end?", options:[
      {t:"The changes between kanji, hiragana and katakana", ok:true, why:"Meaning words in kanji, grammar in hiragana and loanwords in katakana make word boundaries visible."},
      {t:"Capital letters at the start of each word", why:"Japanese scripts have no capital letters."},
      {t:"A comma after every word", why:"Japanese uses commas (、) for pauses in a sentence, not between every word."},
      {t:"Romaji printed under every line", why:"Ordinary Japanese text has no romaji."}]},
    {id:"e3u1-q07", lesson:"e3u1-l1", level:1, q:"In [五十音]{ごじゅうおん} order, which row comes straight after the さ row?", options:[
      {t:"The た row", ok:true, why:"a, ka, sa, **ta**, na, ha, ma, ya, ra, wa."},
      {t:"The な row", why:"な comes after た: …sa, ta, **na**."},
      {t:"The は row", why:"は comes later: …ta, na, **ha**."},
      {t:"The か row", why:"か comes before さ: a, **ka**, sa."}]},
    {id:"e3u1-q08", lesson:"e3u1-l1", level:3, q:"Mei reads a Japanese children’s book written almost entirely in hiragana, with spaces between words. What is the best explanation?", options:[
      {t:"Any word can be written in hiragana, and books for young readers often avoid kanji and add spaces", ok:true, why:"Hiragana can spell any word by sound, so children’s books (and learner materials) often use it, with spaces to help."},
      {t:"The book is full of spelling mistakes", why:"Writing words in hiragana is not a mistake; it is normal for young readers."},
      {t:"It must be an old book from before kanji were used", why:"Kanji have been used in Japan for more than a thousand years; children’s books use hiragana by choice."},
      {t:"It is written in a dialect that has no kanji", why:"Dialects use the same scripts. The choice of hiragana is about the readers, not the dialect."}]},
    {id:"e3u1-q09", lesson:"e3u1-l1", level:2, q:"Why is it worth moving from romaji to kana early on?", options:[
      {t:"Romaji hides details that kana show, such as whether a long *ō* is spelled おう or おお, and real texts don’t use it", ok:true, why:"Kana show the spelling Japanese readers see; romaji loses some of it and is rare in real texts."},
      {t:"Romaji is not allowed in Japan", why:"Romaji is used on signs, passports and keyboards; it just isn’t used for ordinary text."},
      {t:"Keyboards can’t type Japanese with romaji", why:"Most people type Japanese with romaji input; it turns into kana as you type."},
      {t:"Romaji can only write katakana words", why:"Romaji can write any Japanese word. The issue is that it hides spelling details and is rare in real texts."}]},
    /* Lesson 2 */
    {id:"e3u1-q10", lesson:"e3u1-l2", level:1, q:"How is the hiragana ち read?", options:[
      {t:"*chi*", ok:true, why:"ち is in the た row and sounds like the start of “cheese”: *chi*."},
      {t:"*ti*", why:"The た row has no plain *ti* in basic kana; ち is *chi*."},
      {t:"*shi*", why:"*Shi* is し, in the さ row."},
      {t:"*tsu*", why:"*Tsu* is つ, the next kana in the た row."}]},
    {id:"e3u1-q11", lesson:"e3u1-l2", level:1, q:"How is を pronounced in みずを のみます (“I drink water”)?", options:[
      {t:"*o*, the same as お", ok:true, why:"を is only used as the object particle and is said *o*."},
      {t:"*wa*", why:"*Wa* is how the particle は is said."},
      {t:"*e*", why:"*E* is how the particle へ is said."},
      {t:"It is silent", why:"を is pronounced: *mizu o nomimasu*."}]},
    {id:"e3u1-q12", lesson:"e3u1-l2", level:2, q:"Oluwaseun writes えきえ いきます for “I go to the station”. Which particle should he write after えき?", options:[
      {t:"へ, which is said *e*", ok:true, why:"The direction particle is written へ but said *e*: えきへ いきます (*eki e ikimasu*)."},
      {t:"え, because that is how it sounds", why:"The sound is *e*, but the spelling rules keep the old spelling へ for this particle."},
      {t:"は", why:"は (said *wa*) marks the topic, not direction."},
      {t:"を", why:"を (said *o*) marks the object of a verb, not where you are going."}]},
    {id:"e3u1-q13", lesson:"e3u1-l2", level:1, q:"What is the clearest difference between ぬ (*nu*) and め (*me*)?", options:[
      {t:"ぬ ends in a small loop; め doesn’t", ok:true, why:"Both have crossed strokes; only ぬ has the loop at the end."},
      {t:"め has a dot on top", why:"Neither has a dot. Look at the end of the last stroke."},
      {t:"ぬ has two cross strokes", why:"The number of strokes isn’t the key difference; the loop is."},
      {t:"They are two ways of writing the same kana", why:"They are different kana with different sounds."}]},
    {id:"e3u1-q14", lesson:"e3u1-l2", level:1, q:"How do you make the sound ふ (*fu*)?", options:[
      {t:"Blow gently through lips that almost touch, without the top teeth touching the lower lip", ok:true, why:"That gives the soft Japanese *f* sound."},
      {t:"Press the top teeth onto the lower lip, as in English “food”", why:"That is the English *f*. Japanese ふ uses the lips only."},
      {t:"Say a strong English *h*, as in “who”", why:"ふ is close to a breathy sound through the lips, but it isn’t an English “who”."},
      {t:"Tap the tongue behind the teeth", why:"A tongue tap is how the ら row is made."}]},
    {id:"e3u1-q15", lesson:"e3u1-l2", level:3, q:"Hana keeps reading れ (*re*) as わ (*wa*). Which feature should she check?", options:[
      {t:"How the last stroke ends: れ kicks out to the right, わ curves round", ok:true, why:"The left strokes are the same; only the ending of the right-hand stroke differs."},
      {t:"Whether there is a dot on top", why:"Neither has a dot."},
      {t:"How many cross strokes there are", why:"Both have one vertical and one cross stroke on the left; the difference is at the end."},
      {t:"The size of the kana", why:"Size doesn’t tell them apart; the shape of the last stroke does."}]},
    {id:"e3u1-q16", lesson:"e3u1-l2", level:2, q:"Which is the word for “cat”, *neko*?", options:[
      {t:"ねこ", ok:true, why:"ね (*ne*), with its loop, plus こ (*ko*)."},
      {t:"れこ", why:"れ is *re*: this reads *reko*."},
      {t:"わこ", why:"わ is *wa*: this reads *wako*."},
      {t:"めこ", why:"め is *me*: this reads *meko*."}]},
    {id:"e3u1-q17", lesson:"e3u1-l2", level:1, q:"How is the last kana of こんにちは (“hello”) pronounced?", options:[
      {t:"*wa*", ok:true, why:"こんにちは began as a phrase with the topic particle は, which is said *wa*: *konnichiwa*."},
      {t:"*ha*", why:"は is *ha* inside ordinary words, but here it is the old particle, said *wa*."},
      {t:"*e*", why:"*E* is the sound of the particle へ."},
      {t:"*o*", why:"*O* is the sound of を."}]},
    {id:"e3u1-q18", lesson:"e3u1-l2", level:2, q:"In さんぽ (*sanpo*, a walk), what does ん sound like?", options:[
      {t:"Like *m*, because the next sound is *p*", ok:true, why:"Before m, b and p, ん is made with closed lips, like *m*. Romaji still writes *n*."},
      {t:"Like “ng” in “sing”", why:"ん sounds like “ng” before k and g, as in ぎんこう."},
      {t:"It is silent", why:"ん always takes a full beat of sound."},
      {t:"Like a short *nu*", why:"ん has no vowel: it is a nasal sound on its own."}]},
    /* Lesson 3 */
    {id:"e3u1-q19", lesson:"e3u1-l3", level:1, q:"What does the dakuten (゛) do to a kana?", options:[
      {t:"It makes the consonant voiced, for example か (*ka*) → が (*ga*)", ok:true, why:"The two strokes switch on the voice: k→g, s→z, t→d, h→b."},
      {t:"It makes the vowel long", why:"Long vowels are written with an extra vowel kana or ー."},
      {t:"It turns *h* into *p*", why:"That is the handakuten, the small circle ゜."},
      {t:"It makes the kana silent", why:"Silence (a pause) is shown by a small っ."}]},
    {id:"e3u1-q20", lesson:"e3u1-l3", level:1, q:"Which kana is *pi*?", options:[
      {t:"ぴ", ok:true, why:"ひ with the small circle ゜ is *pi*."},
      {t:"び", why:"ひ with the two strokes ゛ is *bi*."},
      {t:"ひ", why:"With no mark, ひ is *hi*."},
      {t:"ぴゃ", why:"ぴ plus small ゃ is *pya*."}]},
    {id:"e3u1-q21", lesson:"e3u1-l3", level:2, q:"Which spelling is *kyaku* (guest, customer)?", options:[
      {t:"きゃく", ok:true, why:"き + small ゃ blends into one beat, *kya*, then く: *kyaku*."},
      {t:"きやく", why:"With a full-size や, this reads *kiyaku*, three separate beats."},
      {t:"きゅく", why:"Small ゅ gives *kyu*: this reads *kyuku*."},
      {t:"きゃっく", why:"The small っ adds a pause: *kyakku*."}]},
    {id:"e3u1-q22", lesson:"e3u1-l3", level:1, q:"How is しゃ written in Hepburn romaji?", options:[
      {t:"*sha*", ok:true, why:"Hepburn writes the sound: し + small ゃ is *sha*."},
      {t:"*shya*", why:"Hepburn doesn’t keep the *y* after *sh*; the sound is *sha*."},
      {t:"*sya*", why:"*Sya* is the older Kunrei spelling."},
      {t:"*shiya*", why:"*Shiya* would be し plus a full-size や, two beats."}]},
    {id:"e3u1-q23", lesson:"e3u1-l3", level:3, q:"Dmitri writes せんせえ for *sensei* (teacher), because that is how it sounds to him. What is the standard spelling?", options:[
      {t:"せんせい: most words with a long *e* sound are written with い", ok:true, why:"The rules write these words with い, whether said as a long *e* or as *ei*."},
      {t:"せんせえ is standard, because it matches the sound", why:"Only a few words, such as おねえさん and ええ, use え. *Sensei* uses い."},
      {t:"せんせ", why:"This drops a whole beat: *sense*."},
      {t:"せいせい", why:"The first syllable is *sen*, with ん."}]},
    {id:"e3u1-q24", lesson:"e3u1-l3", level:2, q:"Which of these words spells its long *ō* with お rather than う?", options:[
      {t:"こおり (ice)", ok:true, why:"こおり is on the short おお list, with おおきい, おおい, とおい, とおる and とお."},
      {t:"こうこう (high school)", why:"こうこう uses the usual う."},
      {t:"おとうさん (father)", why:"おとうさん uses the usual う."},
      {t:"ありがとう (thank you)", why:"ありがとう uses the usual う."}]},
    {id:"e3u1-q25", lesson:"e3u1-l3", level:3, q:"Amara wants to say “my husband” but says *oto* (おと). What did she leave out?", options:[
      {t:"The small っ pause: “husband” is おっと (*otto*)", ok:true, why:"おと is “sound”. The one-beat pause before と makes おっと, “husband”."},
      {t:"A long vowel: “husband” is おおと", why:"There is no long vowel in this word; the missing beat is a pause."},
      {t:"A dakuten: “husband” is おど", why:"The consonant stays *t*; the difference is the pause before it."},
      {t:"Nothing: おと also means “husband”", why:"おと means “sound”. The beat count changes the word."}]},
    {id:"e3u1-q26", lesson:"e3u1-l3", level:1, q:"How many beats does a long vowel take?", options:[
      {t:"Two", ok:true, why:"A long vowel lasts two beats: おかあさん is お・か・あ・さ・ん."},
      {t:"One", why:"A short vowel takes one beat; a long one takes two."},
      {t:"Half a beat", why:"Long vowels are longer, not shorter."},
      {t:"It depends on the speaker", why:"Speakers vary a little in speed, but a long vowel always counts as two beats."}]},
    {id:"e3u1-q27", lesson:"e3u1-l3", level:2, q:"What do you type on a romaji keyboard to get ちょっと (*chotto*, a little)?", options:[
      {t:"*chotto*", ok:true, why:"*Cho* gives ちょ, and doubling the *t* gives っと."},
      {t:"*choto*", why:"This gives ちょと, with no pause."},
      {t:"*chotsuto*", why:"This gives ちょつと, with a full-size つ."},
      {t:"*chooto*", why:"This gives ちょおと, with an extra お."}]},
    /* Lesson 4 */
    {id:"e3u1-q28", lesson:"e3u1-l4", level:1, q:"What is katakana’s main job in modern Japanese?", options:[
      {t:"Writing loanwords and names from other languages", ok:true, why:"Katakana also writes sound words and emphasis, but loanwords and foreign names are its main use."},
      {t:"Writing grammar endings", why:"Grammar endings are written in hiragana."},
      {t:"Writing all nouns", why:"Most native nouns use kanji or hiragana."},
      {t:"Writing polite speech", why:"Scripts don’t mark politeness."}]},
    {id:"e3u1-q29", lesson:"e3u1-l4", level:1, q:"What does the bar ー do in ケーキ (*kēki*, cake)?", options:[
      {t:"It makes the vowel before it one beat longer", ok:true, why:"ケー is *kē*, two beats."},
      {t:"It is a hyphen between two words", why:"It is the long-vowel mark, not a hyphen."},
      {t:"It is the kanji for “one”", why:"It looks like [一]{いち}, but in katakana words it is the long-vowel mark."},
      {t:"It makes a pause", why:"A pause is shown by small ッ."}]},
    {id:"e3u1-q30", lesson:"e3u1-l4", level:2, q:"Sione sees ビル on a sign above a door. Is it a building or beer?", options:[
      {t:"A building: ビル (*biru*) has a short *i*", ok:true, why:"ビル is “building”; beer is ビール, with the long-vowel bar."},
      {t:"Beer: ビル is short for ビール", why:"ビル and ビール are different words."},
      {t:"A bell", why:"Bell is ベル, with ベ (*be*)."},
      {t:"You can’t tell from the spelling", why:"You can: the bar ー is the difference."}]},
    {id:"e3u1-q31", lesson:"e3u1-l4", level:1, q:"Which katakana is *n*?", options:[
      {t:"ン", ok:true, why:"ン’s long stroke rises from the bottom left."},
      {t:"ソ", why:"ソ (*so*) looks similar, but its long stroke falls from the top."},
      {t:"シ", why:"シ (*shi*) has two short strokes on the left."},
      {t:"ツ", why:"ツ (*tsu*) has two short strokes along the top."}]},
    {id:"e3u1-q32", lesson:"e3u1-l4", level:3, q:"Lucía wants to guess how “bed” is written in katakana. Using the usual patterns, which is right?", options:[
      {t:"ベッド", ok:true, why:"After *d* the extra vowel is *o*, and the short vowel before it brings a small ッ: *beddo*."},
      {t:"ベド", why:"The usual pattern adds a ッ after the short vowel: ベッド."},
      {t:"ベッズ", why:"After *d* the added vowel is *o*, giving ド, not ズ."},
      {t:"ベッドゥ", why:"ドゥ is a rare spelling for *du*; the standard word is ベッド."}]},
    {id:"e3u1-q33", lesson:"e3u1-l4", level:1, q:"What sound does ティ make, as in パーティー (party)?", options:[
      {t:"*ti*", ok:true, why:"テ + small ィ blends into one beat, *ti*."},
      {t:"*chi*", why:"*Chi* is written チ, a different kana."},
      {t:"*tei*", why:"*Tei* would be テイ with a full-size イ, two beats."},
      {t:"*te*", why:"*Te* is テ alone; the small ィ changes the vowel."}]},
    {id:"e3u1-q34", lesson:"e3u1-l4", level:3, q:"One sign says コンピューター and another says コンピュータ. Which is correct?", options:[
      {t:"Both: the official guide prefers the final ー, but allows it to be dropped where that is the custom", ok:true, why:"[外来語]{がいらいご}の[表記]{ひょうき} (1991) gives -er endings a long *ā* in principle but accepts dropping the ー, which is common in technical writing."},
      {t:"Only コンピューター: dropping the ー is a spelling mistake", why:"Dropping it is accepted by custom."},
      {t:"Only コンピュータ: the ー is old-fashioned", why:"Both spellings are in current use; the guide prefers the ー."},
      {t:"Neither: the word must be written in kanji", why:"This loanword is normally written in katakana."}]},
    {id:"e3u1-q35", lesson:"e3u1-l4", level:1, q:"From which language did Japanese take パン (*pan*, bread)?", options:[
      {t:"Portuguese", ok:true, why:"From Portuguese *pão*, brought by Portuguese traders in the 1500s."},
      {t:"English", why:"The English word is “bread”, not similar at all."},
      {t:"French", why:"French *pain* sounds similar, but the Japanese word came from Portuguese."},
      {t:"German", why:"German gave Japanese words such as アルバイト, but not パン."}]},
    {id:"e3u1-q36", lesson:"e3u1-l4", level:3, q:"Ana sees an advert for a マンション (*manshon*) at a price she can afford, and expects a huge house. What does マンション usually mean in Japanese?", options:[
      {t:"A flat (apartment) in a block, often an ordinary one", ok:true, why:"Loanword meanings can shift: マンション is a flat in a block of flats."},
      {t:"A large country house, as in English", why:"That is the English meaning, not the Japanese one."},
      {t:"A hotel", why:"Hotel is ホテル."},
      {t:"A shop", why:"A shop is usually みせ ([店]{みせ})."}]},
    /* Lesson 5 */
    {id:"e3u1-q37", lesson:"e3u1-l5", level:1, q:"What is a mora?", options:[
      {t:"A beat of Japanese timing: each kana is one, except small ゃゅょ, which join the kana before them", ok:true, why:"Morae are the beats Japanese speakers count, as in haiku."},
      {t:"A syllable, exactly as in English", why:"Syllables and morae differ: *shinkansen* has three syllables but six morae."},
      {t:"A stressed, louder part of a word", why:"Japanese doesn’t mark words with loud stress; that is English."},
      {t:"A kanji’s reading", why:"A reading can contain several morae."}]},
    {id:"e3u1-q38", lesson:"e3u1-l5", level:2, q:"How many morae are in にほん (*Nihon*, Japan)?", options:[
      {t:"3", ok:true, why:"に・ほ・ん: ん is a full beat."},
      {t:"2", why:"That counts syllables (*Ni-hon*). In morae, ん gets its own beat."},
      {t:"4", why:"There is no long vowel or pause in にほん."},
      {t:"5", why:"Each kana is one beat here: three in all."}]},
    {id:"e3u1-q39", lesson:"e3u1-l5", level:2, q:"How many morae are in ちょっと (*chotto*, a little)?", options:[
      {t:"3", ok:true, why:"ちょ (1) + っ (1) + と (1) = 3."},
      {t:"2", why:"You probably skipped the small っ, which takes a full beat."},
      {t:"4", why:"You probably counted the small ょ separately; ちょ is one beat."},
      {t:"5", why:"There are only four kana, and ちょ counts as one beat."}]},
    {id:"e3u1-q40", bonus:true, lesson:"e3u1-l5", level:1, q:"Japanese pitch accent is mainly about…", options:[
      {t:"high and low pitch, especially where it drops", ok:true, why:"Each mora is high or low; the accent is where the pitch falls."},
      {t:"how loudly a syllable is said", why:"Loudness is a big part of English stress, but not of Japanese pitch accent."},
      {t:"how long a vowel is", why:"Vowel length is a separate feature (long and short vowels)."},
      {t:"which vowel is used", why:"Vowel quality doesn’t change with the accent."}]},
    {id:"e3u1-q41", bonus:true, lesson:"e3u1-l5", level:2, q:"In standard Tokyo Japanese, what is the pitch of [雨]{あめ} (*ame*, rain)?", options:[
      {t:"High–low", ok:true, why:"[雨]{あめ} is head-high (*atamadaka*): あ high, め low."},
      {t:"Low–high, with a following particle staying high", why:"That is [飴]{あめ} (candy), which is flat (*heiban*)."},
      {t:"Low–high, with a following particle dropping", why:"That is the tail-high pattern, as in [橋]{はし} (bridge)."},
      {t:"Both morae equally high", why:"In Tokyo Japanese the first two morae of a word usually differ in pitch."}]},
    {id:"e3u1-q42", bonus:true, lesson:"e3u1-l5", level:3, q:"A speaker of standard Tokyo Japanese says はなが, and the が is lower than the な before it. Is she talking about a flower ([花]{はな}) or a nose ([鼻]{はな})?", options:[
      {t:"A flower: [花]{はな} is tail-high, so the particle after it drops", ok:true, why:"[花]{はな} is [2]: は low, な high, が low. After [鼻]{はな} [0], が stays high."},
      {t:"A nose: [鼻]{はな} always drops on the particle", why:"[鼻]{はな} is flat [0]: the particle after it stays high."},
      {t:"You can’t tell: they sound identical", why:"Alone they do; the particle tells them apart."},
      {t:"Neither: はな has no pitch accent", why:"Every Tokyo word has a pattern, including the flat one."}]},
    {id:"e3u1-q43", bonus:true, lesson:"e3u1-l5", level:3, q:"Fatima’s friend from Osaka says some words with a different melody from the Tokyo patterns in her textbook. What is the best explanation?", options:[
      {t:"Kansai Japanese has its own accent system; both are correct in their own dialect", ok:true, why:"Accent differs between dialects. Learner materials teach the standard, Tokyo-based accent."},
      {t:"Her friend is making mistakes", why:"Dialect accents are not mistakes; they are different systems."},
      {t:"The textbook must be wrong", why:"The textbook teaches standard Tokyo-based accent, which is correct for standard Japanese."},
      {t:"Pitch accent only exists in Tokyo", why:"Most dialects have pitch accent, with different patterns; some have none."}]},
    {id:"e3u1-q44", lesson:"e3u1-l5", level:1, q:"A haiku has a 5–7–5 pattern. What does it count?", options:[
      {t:"Morae (beats)", ok:true, why:"Japanese counts on morae: ふ・る・い・け・や is five."},
      {t:"English-style syllables", why:"Japanese poetry counts morae, so ん, っ and long vowels each count."},
      {t:"Kanji", why:"A haiku can use any mix of scripts; the count is in sound."},
      {t:"Words", why:"The count is of beats, not words."}]},
    {id:"e3u1-q45", lesson:"e3u1-l5", level:3, q:"Tomás has learned both kana and has two weeks before a trip to Japan. What is the best way to keep them?", options:[
      {t:"A short spaced review every day, and reading real words such as menus and signs", ok:true, why:"Daily spaced review plus real reading keeps kana fresh and fast."},
      {t:"One long session the night before he leaves", why:"Cramming fades quickly; spreading reviews out works much better."},
      {t:"Copy the kana chart once and keep it in his bag", why:"A chart is useful, but memory needs practice in recalling, not just a reference."},
      {t:"Switch to romaji so he doesn’t have to remember kana", why:"Menus and signs in Japan are mostly in kana and kanji, not romaji."}]}
  ]
});
