/* Academic Language · Academic Japanese Unit 1 (e1u5) · Styles and words of academic Japanese */
ICA.addUnit({
  id:"e1u5", track:"e1", n:5, title:"Styles and words of academic Japanese", icon:"📝",
  blurb:"What academic Japanese is and how this half of the elective works; the two sentence styles, です・ます and である, and when each is used; written words versus spoken words; 漢語 and 和語; and the sentence endings, pointing words and connectors that show how sure a writer is and hold a text together.",
  goals:[
    "Explain what academic Japanese (アカデミック・ジャパニーズ) covers and how Units 5–8 of this elective are organised",
    "Choose between です・ます体 and である体 for a task, convert sentences between them correctly, and keep one style throughout a text",
    "Recognise common 話し言葉 in your writing and replace it with suitable 書き言葉, including shortened forms, ら抜き言葉, 「とか」 and sentence-initial 「なので」",
    "Use 漢語 where they make writing precise and compact, while keeping the formal 和語 that academic Japanese relies on",
    "Match sentence endings (文末表現) to the strength of your evidence, and avoid personal endings such as 「～と思う」 in reports",
    "Use pointing words (指示語) such as この, その and こうした, and basic connectors (接続詞), clearly in written Japanese"
  ],
  read:[
    {book:"omu", where:"Section 2 “アカデミック・ライティングとは” (2.1 and 2.2, p. 4) and Section 4.5 “文章を読みやすくする”", note:"A short, free university guide in Japanese. Section 2.2 explains why reports use the 「だ・である」 style, unlike school essays."},
    {book:"koyobun", where:"“Ⅲ 伝わる公用文のために” → “1 文体の選択” (p. 30 of the version with commentary)", note:"Official guidance for government writing, not for reports, but its rule of one style per document is the same rule your teachers will apply."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u5-l1", title:"What academic Japanese is, and how this half works", minutes:45,
   hook:{q:"At many Japanese universities, who takes a first-year class or workshop on how to write a report (レポート)?", options:["Only international students","Only students who failed a writing test","Many students, including people who grew up speaking Japanese","Nobody: high school already teaches it"], answer:2, reveal:"**Many students, Japanese speakers included.** A university レポート is a new kind of text for almost everyone. Many universities run first-year ([初年次]{しょねんじ}) writing classes and publish free guides, because the style is so different from the [作文]{さくぶん} and [感想文]{かんそうぶん} (essays about your feelings) that students wrote at school. So if academic Japanese feels hard, you are in good company. This lesson explains what academic Japanese is and how this half of the elective works."},
   goals:[
     "Explain what academic Japanese is and how it differs from the Japanese of everyday conversation",
     "Name the three layers that change in academic Japanese: sentence style, choice of words and sentence endings",
     "Recognise 和語, 漢語 and 外来語 in a sentence",
     "Explain how Units 5–8 are organised and how furigana is used in them"
   ],
   learn:[
    {h:"A kind of Japanese for study", body:[
      {lead:"You already change how you speak for different people. You talk to a friend in casual Japanese and to a shop assistant in polite Japanese. Academic Japanese is one more of these varieties: the Japanese of university study and research."},
      "In Japanese language teaching it is often called [[academic-japanese-term|アカデミック・ジャパニーズ]] (*akademikku japanīzu*). It covers everything you need to study in Japanese: reading [論文]{ろんぶん} (research papers) and textbooks, writing レポート (reports for assignments) and a [卒業論文]{そつぎょうろんぶん} (graduation thesis), following [講義]{こうぎ} (lectures), speaking in a ゼミ (seminar) and giving a [発表]{はっぴょう} (presentation), and writing emails to teachers.",
      "Academic Japanese is not a separate language. It uses the same grammar you already know. What changes is the **register**: the level of formality and the kind of words and sentences that suit the situation. Research skills calls this [[academic-register]], and the idea is the same in every language.",
      "Compare two ways of reporting the same finding from a student survey. Both are invented for this lesson.",
      {table:[["Spoken (to a friend or classmate)","Written (in a report)"],["アンケートしてみたら、[朝]{あさ}ごはん[食]{た}べない[学生]{がくせい}がすごく[多]{おお}かったんです。","アンケート[調査]{ちょうさ}の[結果]{けっか}、[朝食]{ちょうしょく}を[食]{た}べない[学生]{がくせい}が[多]{おお}いことが[明]{あき}らかになった。"]]},
      "The written version is not just “harder”. It names the method (アンケート調査), uses a more formal word (朝食 for 朝ごはん), puts back the particle を that speech often drops, removes the vague すごく, and ends in the plain written style with ことが明らかになった (“it became clear that…”) instead of the chatty んです."
    ]},
    {h:"Three layers that change", body:[
      "When Japanese speakers say a text “sounds academic”, they usually mean changes on three layers. This unit teaches one or two layers per lesson.",
      {table:[["Layer","Everyday","Academic","Lesson"],["Sentence style (文体)","です・ます, or casual だよ","である style","2"],["Choice of words","でも、すごく、いっぱい","しかし、[非常]{ひじょう}に、[多]{おお}く","3 and 4"],["Sentence endings","～と[思]{おも}う","～と[考]{かんが}えられる","5"]]},
      "**Sentence style** ([文体]{ぶんたい}, *buntai*) is the choice between the polite です・ます style and the plain である style. Reports and theses are normally written in the plain である style. Lesson 2 shows you when each is used and how to convert between them.",
      "**Choice of words** has two parts. Spoken words such as でも and すごく have written partners such as しかし and 非常に (Lesson 3). And academic writing uses many [[kango|漢語]], words built from kanji with Chinese-origin readings, such as 調査 (*chōsa*, investigation) (Lesson 4).",
      "**Sentence endings** carry the writer’s certainty. Japanese puts the verb, and with it the verdict, at the end of the sentence. Whether a sentence ends in ～である, ～と考えられる or ～可能性がある tells the reader how sure you are (Lesson 5).",
      {fig:'<svg viewBox="0 0 340 486"><text x="170" y="18" text-anchor="middle">One finding, two registers</text><rect class="d-rose" x="8" y="28" width="324" height="100" rx="8" stroke-width="2"/><text x="20" y="48">話し言葉 (spoken)</text><text x="20" y="72">アンケートしてみたら、</text><text x="20" y="94">朝ごはん食べない学生が</text><text x="20" y="116">すごく多かったんです。</text><rect class="d-panel" x="8" y="136" width="324" height="48" rx="6" stroke-width="1.5"/><text x="20" y="157">してみたら → 調査の結果</text><text class="s" x="20" y="175">casual verb → name the method</text><rect class="d-panel" x="8" y="190" width="324" height="48" rx="6" stroke-width="1.5"/><text x="20" y="211">朝ごはん食べない → 朝食を食べない</text><text class="s" x="20" y="229">everyday word → 漢語; put を back</text><rect class="d-panel" x="8" y="244" width="324" height="48" rx="6" stroke-width="1.5"/><text x="20" y="265">すごく → (removed)</text><text class="s" x="20" y="283">vague intensifier → let the data speak</text><rect class="d-panel" x="8" y="298" width="324" height="66" rx="6" stroke-width="1.5"/><text x="20" y="319">多かったんです →</text><text x="20" y="339">多いことが明らかになった</text><text class="s" x="20" y="357">chatty ending → plain written ending</text><rect class="d-sage" x="8" y="376" width="324" height="100" rx="8" stroke-width="2"/><text x="20" y="396">書き言葉 (written)</text><text x="20" y="420">アンケート調査の結果、</text><text x="20" y="442">朝食を食べない学生が</text><text x="20" y="464">多いことが明らかになった。</text></svg>', alt:"A spoken sentence at the top, a written sentence at the bottom, and four changes between them: してみたら becomes 調査の結果, 朝ごはん食べない becomes 朝食を食べない, すごく is removed, and 多かったんです becomes 多いことが明らかになった.", cap:"The same invented finding, said to a friend and written in a report. Each change is one of the layers this unit teaches."},
      {key:"Academic Japanese uses the grammar you know. What changes is the sentence style, the choice of words and the sentence endings."}
    ]},
    {h:"Hard for everyone, and that is good news", body:[
      "Nobody grows up writing academic Japanese. Japanese school students mostly write 作文 and 感想文, short essays about their experiences and feelings. A university guide from Osaka Metropolitan University explains that these describe the writer’s own experiences and feelings and are often written in the です・ます style, while a report must be written in the 「だ・である」 style and follow set rules, with evidence instead of personal feelings.",
      "That is why many Japanese universities teach report writing in the first year and publish free guides for their own students. Japanese first-year students also learn that でも should be しかし and that ～と思う is weak in a report. You are learning the same things they are.",
      "You even have one advantage. People who learned Japanese as an additional language have usually studied grammar consciously, so you can often explain *why* a form is right. Many native speakers can only say that it “sounds wrong”.",
      {tip:"Search your university’s website (or any Japanese university’s) for 「レポートの書き方」. Many publish a free guide in Japanese. Reading one alongside this unit is excellent practice, and your own university’s guide tells you its local rules."},
      "Be patient with yourself. Writing in a new register is slow at first, for everyone. It becomes faster with each report you write."
    ]},
    {h:"How this half of the elective works", body:[
      "Units 1–4 of this elective taught academic English. Units 5–8 teach academic Japanese, in the same way: lessons in plain English, with the Japanese in the examples, tables and exercises.",
      {table:[["Unit","Focus"],["5 Styles and words (this unit)","です・ます and である, written and spoken words, 漢語 and 和語, sentence endings, pointing words and connectors"],["6 Reading academic Japanese","Kinds of text, the structure of a 論文, connectors as signposts, kanji-heavy text, summarising, finding Japanese research"],["7 Writing reports and theses","Report types, structure, paragraphs, quoting and references, 原稿用紙, punctuation, honest use of tools"],["8 Presentations, seminars and keigo","発表 and questions, ゼミ discussion, 敬語, emailing and visiting a professor"]]},
      "The units assume you already know everyday Japanese: hiragana, katakana, a few hundred kanji and polite です・ます speech (roughly JLPT N3–N2). If some words are new, that is expected. Each key term has a glossary pop-up, and the Codex has a longer reference entry for each topic.",
      "If you studied the English units, many ideas carry over: [[academic-register|register]], [[hedging]] (showing how sure you are) and [[nominalisation]] (packing actions into nouns) all have Japanese versions. If you are starting here, that is fine too: every idea is taught again from the start."
    ]},
    {h:"Three kinds of words: 和語, 漢語 and 外来語", body:[
      "Japanese words come from three main sources, and academic Japanese mixes all three. You will meet them again in Lesson 4.",
      {table:[["Kind","What it is","Examples"],["[[wago|和語]] (*wago*)","Native Japanese words, usually read with kun readings or written in kana","[調]{しら}べる、[増]{ふ}える、[述]{の}べる、ため"],["[[kango|漢語]] (*kango*)","Words of Chinese origin, usually two or more kanji read with on readings","[調査]{ちょうさ}、[増加]{ぞうか}、[分析]{ぶんせき}、[結果]{けっか}"],["[[gairaigo|外来語]] (*gairaigo*)","Loanwords from other languages, mostly written in katakana","データ、アンケート、インタビュー"]]},
      "Here is one sentence that uses all three:",
      {ex:"[本研究]{ほんけんきゅう}では、[留学生]{りゅうがくせい}の[食生活]{しょくせいかつ}を[明]{あき}らかにするため、アンケートのデータを[分析]{ぶんせき}した。\n\n漢語: 本研究、留学生、食生活、分析\n和語: 明らかにする、ため\n外来語: アンケート、データ", label:"One sentence, three kinds of words"},
      "Academic writing leans on 漢語, because they are compact and precise. But notice that the formal 和語 明らかにする sits naturally in the middle of this academic sentence. Lesson 4 explains why 和語 are not “wrong” in academic writing."
    ]},
    {h:"Reading kanji: furigana and yomigana", body:[
      "[[furigana|Furigana]] (振り仮名) are small kana printed next to kanji to show how to read them. In horizontal text they sit above the kanji, like this: [考察]{こうさつ}. [[yomigana|Yomigana]] (読み仮名) is the general word for a reading written in kana, wherever it appears, for example in brackets after a word or in a name field on a form: 氏名（よみがな）.",
      "In these units, furigana appear over kanji words above roughly N3 level the first time they appear in a lesson, and over every kanji in the warm-up questions. After that, the furigana disappear, so you practise reading the word on its own. If you forget a reading, the glossary and the Codex have it.",
      "Real academic texts for adults rarely have furigana. Textbooks, 論文 and reports assume the reader knows the kanji. Unit 6 shows free tools that add readings or look words up as you read ({{japanese-reading-tools}}).",
      {tip:"Learn new academic words as **whole compounds with their readings**: 考察 (こうさつ), not 考 + 察 separately. Many academic kanji have several readings, and the compound tells you which one is used."},
      {warn:"In your own reports, don’t add furigana unless your teacher asks for them. If a rare name or technical word needs a reading, ask your teacher how they want it shown."}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Academic Japanese means using as many kanji as possible.","It means a consistent written style, precise words and careful endings. Too many difficult 漢語 make a text hard to read."],["Polite です・ます Japanese is the most suitable for a report.","Polite is not the same as academic. Most reports and theses use the plain である style (Lesson 2)."],["和語 are informal, so I should replace them all.","Many 和語, such as 述べる, 示す and 明らかにする, are standard in academic writing (Lesson 4)."],["Japanese students already know how to write reports.","Most learn it at university. Many universities teach it in the first year."],["I need to know every kanji before I can read a 論文.","Reading with a dictionary tool is how most people build academic vocabulary. Start now."]]}
    ]},
    {h:"Why this matters", body:[
      "Teachers in Japan judge reports partly on style. A strong argument written in casual spoken Japanese can lose marks, and it can make your ideas look less careful than they are. Learning the register lets your ideas be taken seriously.",
      "It also makes reading easier. Once you know that しかし marks a contrast and ～と考えられる marks an interpretation, academic texts become more predictable.",
      "The big picture is in {{academic-japanese}}. The rest of this unit covers the two styles ({{desu-masu-and-dearu}}), written and spoken words ({{written-vs-spoken-japanese}}), 漢語 and 和語 ({{kango-and-wago}}), and sentence endings ({{sentence-endings-japanese}}, {{hedging-japanese}}).",
      {terms:["academic-japanese-term","wago","kango","gairaigo","furigana","yomigana"]}
    ]}
   ],
   try:[
    {id:"e1u5-l1-x1", type:"mcq", q:"Your teacher has asked for a report written in the plain である style. Which sentence fits best?", options:[
      {t:"アンケート[調査]{ちょうさ}の[結果]{けっか}、[朝食]{ちょうしょく}を[食]{た}べない[学生]{がくせい}が[多]{おお}いことが[明]{あき}らかになった。", ok:true, why:"Right. It names the method, uses written words (朝食, 結果), keeps the particles and ends in the plain written style."},
      {t:"アンケートしてみたら、[朝]{あさ}ごはん[食]{た}べない[学生]{がくせい}がすごく[多]{おお}かったんです。", why:"This is spoken Japanese: してみたら, the dropped を, すごく and the chatty んです all belong in conversation."},
      {t:"アンケート[調査]{ちょうさ}の[結果]{けっか}、[朝食]{ちょうしょく}を[食]{た}べない[学生]{がくせい}が[多]{おお}いことが[明]{あき}らかになりました。", why:"The words are fine, but ～ました is the polite です・ます style. The teacher asked for the である style."},
      {t:"アンケートの[結果]{けっか}、[朝食]{ちょうしょく}を[食]{た}べない[学生]{がくせい}がめっちゃ[多]{おお}いことが[判明]{はんめい}したのである！", why:"めっちゃ is very casual spoken Japanese, and academic writing doesn’t use exclamation marks. A long 漢語 (判明) can’t rescue a casual word."}
    ]},
    {id:"e1u5-l1-x2", type:"sort", q:"Sort these words by origin.", buckets:["和語 (native Japanese)","漢語 (Chinese-origin)","外来語 (loanword)"], items:[
      {t:"[調]{しら}べる", b:0, why:"A native Japanese verb with a kun reading (しらべる)."},
      {t:"[調査]{ちょうさ}", b:1, why:"Two kanji read with on readings (ちょう + さ): a 漢語."},
      {t:"データ", b:2, why:"From English “data”, written in katakana: a loanword."},
      {t:"[増]{ふ}える", b:0, why:"A native verb with a kun reading (ふえる)."},
      {t:"[増加]{ぞうか}", b:1, why:"Two kanji with on readings (ぞう + か): a 漢語."},
      {t:"アンケート", b:2, why:"From French “enquête” (survey), written in katakana: a loanword."},
      {t:"[分析]{ぶんせき}", b:1, why:"Two kanji with on readings (ぶん + せき): a 漢語."},
      {t:"[述]{の}べる", b:0, why:"A native verb (のべる). It is formal and very common in academic writing, which shows that 和語 are not always casual."}
    ]},
    {id:"e1u5-l1-x3", type:"match", q:"Match each Japanese word to its meaning in university life.", pairs:[
      ["[論文]{ろんぶん}","A research paper","論文 is a research paper; a student’s graduation thesis is a 卒業論文."],
      ["レポート","A written report for a course assignment","In Japanese universities, レポート usually means a written assignment for a course."],
      ["ゼミ","A small seminar class led by one teacher","ゼミ (from German “Seminar”) is a small discussion-based class, often in your later years."],
      ["[発表]{はっぴょう}","A presentation","発表 is a presentation, for example in a ゼミ or at a conference (Unit 8)."],
      ["[講義]{こうぎ}","A lecture","講義 is a lecture: a teacher speaking to a class."]
    ]},
    {id:"e1u5-l1-x4", type:"mcq", q:"Which statement about academic Japanese is accurate?", options:[
      {t:"Many Japanese universities teach report writing to first-year students, because reports differ from the essays students wrote at school.", ok:true, why:"Right. School 作文 and 感想文 are usually personal and often written in です・ます; reports use the である style and evidence."},
      {t:"Academic Japanese has its own grammar that everyday Japanese doesn’t use.", why:"It uses the same grammar. The register changes: sentence style, words and endings."},
      {t:"Polite です・ます Japanese is always the right choice for a report, because it shows respect to the teacher.", why:"Politeness and academic style are different things. Most reports use the plain である style."},
      {t:"Only international students find academic Japanese difficult.", why:"Japanese first-year students learn it too. It is a new register for everyone."}
    ]},
    {id:"e1u5-l1-x5", type:"spot", q:"Ana wrote down some beliefs before starting this unit. Tap each belief that is **a misconception**.", ask:"a misconception", parts:[
      {t:"Academic Japanese uses the same grammar as everyday Japanese.", flag:false, why:"True. The register changes, not the grammar."},
      " ",
      {t:"To sound academic, I should turn every 和語 into a 漢語.", flag:true, why:"A misconception. Formal 和語 such as 述べる, 示す and 明らかにする are standard in academic writing, and too many 漢語 make text heavy."},
      " ",
      {t:"The end of a Japanese sentence often shows how sure the writer is.", flag:false, why:"True. Endings such as ～である, ～と考えられる and ～可能性がある show different levels of certainty."},
      " ",
      {t:"Polite です・ます style is always the best style for a report.", flag:true, why:"A misconception. Reports are normally written in the plain である style, unless the teacher says otherwise."},
      " ",
      {t:"Many university writing guides in Japan are written for Japanese students, not only for international students.", flag:false, why:"True. Report writing is new for almost everyone."},
      " ",
      {t:"I can’t start reading 論文 until I know every kanji in them.", flag:true, why:"A misconception. Reading with a dictionary tool is how most people learn academic vocabulary."}
    ]},
    {id:"e1u5-l1-x6", type:"mcq", q:"What is the correct reading of 考察, a word you will meet in almost every 論文?", options:[
      {t:"こうさつ", ok:true, why:"Right. 考 (こう) + 察 (さつ). 考察 means careful analysis or discussion, and it is also the name of the Discussion section of a paper."},
      {t:"かんがえさつ", why:"In a 漢語 compound, the kanji are normally read with on readings. かんがえ is the kun reading of 考, used in 考える."},
      {t:"こうさい", why:"こうさい is a different word (交際, social relations). 察 is read さつ, as in 警察 (けいさつ)."},
      {t:"こうざつ", why:"There is no sound change here: 考察 is read こうさつ, with an unvoiced さ."}
    ]}
   ],
   apply:{
    intro:"Start from your own studies or interests. Keep these notes private unless you choose to share them.",
    tasks:[
     {t:"Find a university guide to writing reports", how:[
       "Search the web for 「レポートの書き方」 together with 「大学」. Many Japanese universities publish a free guide (often a PDF) for their own students.",
       "Open one guide and find what it says about sentence style (look for 「である」, 「です・ます」 or 「文体」).",
       "Write down three rules the guide gives, in Japanese, and explain each one in your own words in English or your first language."
     ], write:"Guide (university and title)… Rule 1… Rule 2… Rule 3… What surprised me…"},
     {t:"Notice the three layers in a real text", how:[
       "Find one short academic text in Japanese: an abstract on J-STAGE, a page of a 新書, or a section of a university guide.",
       "Copy two sentences. For each, note the sentence style (です・ます or である), two words that sound written rather than spoken, and the sentence ending.",
       "Mark each word as 和語, 漢語 or 外来語."
     ], write:"Sentence 1… style… written words… ending… Sentence 2…"},
     {t:"Set your goals for this half of the elective", how:[
       "Mark each statement ✔ (I can already), ~ (sometimes) or ✘ (not yet): I can write a paragraph in the である style. I can tell spoken words from written words. I can choose between a 漢語 and a 和語. I can make a claim sound careful without saying ～と思う. I can read a 論文 abstract with a dictionary.",
       "Choose the two you most want to improve.",
       "Come back at the end of Unit 8 and mark them again."
     ], write:"✔ / ~ / ✘ for each… The two I want to improve most…"}
    ],
    proof:"A university writing guide with three of its rules explained, two sentences analysed for style, words and endings, and your self-check with two goals."
   },
   read:[
    {book:"omu", where:"Section 2 “アカデミック・ライティングとは” (2.1 “論理的にわかりやすい客観的な文章をめざす” and 2.2 “作文・感想文とは異なる”, p. 4)", note:"Why a report is different from a school essay, in the words of a Japanese university guide."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u5-l2", title:"です・ます体 and である体: choosing and converting", minutes:50,
   hook:{q:"A student wants to rewrite 「この[割合]{わりあい}は[高]{たか}いです。」 (“This proportion is high.”) in the plain である style for a report. Which version is correct?", options:["この[割合]{わりあい}は[高]{たか}いである。","この[割合]{わりあい}は[高]{たか}い。","この[割合]{わりあい}は[高]{たか}いだ。","この[割合]{わりあい}は[高]{たか}くある。"], answer:1, reveal:"**この割合は高い。** An い-adjective is already a complete plain sentence ending, so you simply drop です. 「高いである」 and 「高いだ」 are mistakes that many learners make, because である and だ attach to nouns and な-adjectives, not to い-adjectives. This lesson shows when to use each style and how to convert every kind of sentence between them."},
   goals:[
     "Explain the difference between です・ます体 and である体, and what 常体 and 普通体 mean",
     "Choose the right style for reports, theses, emails, presentations and conversations with teachers",
     "Convert nouns, adjectives and verbs from です・ます to である style, including negatives, past forms and guesses",
     "Keep one style throughout a text, and know where quotations are an exception"
   ],
   learn:[
    {h:"Two styles, one grammar", body:[
      {lead:"Every Japanese sentence ends in one of two styles: polite or plain. You chose between them every time you spoke to a teacher or a friend. In writing the same choice exists, but the rules for choosing are different."},
      "[[desu-masu-tai|です・ます体]] (*desu-masu-tai*), also called [敬体]{けいたい} (*keitai*), is the polite style: sentences end in です or ます. It speaks politely to a reader or listener.",
      "The plain style is called [常体]{じょうたい} (*jōtai*) in style guides and [[futsuu-tai|普通体]] (*futsūtai*) in Japanese language teaching. In writing it has two versions: [[dearu-tai|である体]] (*dearu-tai*), where nouns and な-adjectives end in である, and だ体, where they end in だ. Verbs and い-adjectives end in their plain forms in both.",
      {table:[["Style","Noun ending","Verb ending"],["です・ます体 (polite)","[課題]{かだい}です","[増加]{ぞうか}します"],["である体 (plain, written)","課題である","増加する"],["だ体 (plain)","課題だ","増加する"]]},
      "In a report, the plain style is **not rude**. It doesn’t speak to anyone in particular. It presents ideas to any reader, in a neutral, impersonal voice. That is exactly why academic writing uses it.",
      {tip:"A useful question: **“Is this text speaking to a particular person?”** An email to a teacher speaks to a person, so it uses です・ます. A report presents ideas to any reader, so it normally uses である. The official 2022 guidance on government writing, 公用文作成の考え方, uses the same logic: laws, public notices (告示) and directives (訓令) in the plain style; notifications, requests, inquiries and replies to a particular reader in です・ます. (Explanations and publicity for the general public use です・ます too.)"}
    ]},
    {h:"Which style, when", body:[
      "Here are the usual choices in university life. They are the defaults; your teacher’s instructions always come first.",
      {table:[["Situation","Usual style"],["レポート (course reports)","である体"],["[卒業論文]{そつぎょうろんぶん} and 論文","である体"],["[要約]{ようやく} (a summary) and a 論文 abstract","である体"],["Emails and letters to teachers","です・ます体, with keigo (Unit 8)"],["Speaking in a presentation or ゼミ","です・ます体"],["Talking to teachers in person","です・ます体, with keigo"],["School essays (作文, 感想文)","Often です・ます体"]]},
      {fig:'<svg viewBox="0 0 340 386"><text x="170" y="18" text-anchor="middle">Is the text speaking to a person?</text><rect class="d-lup" x="8" y="30" width="324" height="132" rx="8" stroke-width="2"/><text x="20" y="54">Yes → です・ます体</text><text class="s" x="20" y="74">polite, to a particular reader or listener</text><text x="32" y="98">・先生へのメール</text><text x="32" y="120">・発表で話すとき</text><text x="32" y="142">・先生との会話</text><rect class="d-sage" x="8" y="174" width="324" height="132" rx="8" stroke-width="2"/><text x="20" y="198">No → である体</text><text class="s" x="20" y="218">plain, impersonal, for any reader</text><text x="32" y="242">・レポート</text><text x="32" y="264">・卒業論文、論文</text><text x="32" y="286">・要約</text><rect class="d-gold" x="8" y="318" width="324" height="58" rx="8" stroke-width="2"/><text x="20" y="342">The teacher decides; keep one</text><text x="20" y="364">style through the whole text.</text></svg>', alt:"A decision chart. If the text speaks to a particular person, use です・ます体: emails to teachers, speaking in presentations, talking with teachers. If not, use である体: reports, theses and papers, summaries. A note at the bottom says the teacher decides and one style must be kept throughout.", cap:"A rule of thumb for choosing a style. Assignment instructions override it."},
      {h:"When a report may use です・ます"},
      "Some teachers allow, or even ask for, です・ます in a report: for example a short reflection ([振]{ふ}り[返]{かえ}り) in a first-year class, a report in a Japanese language course, or a text written for the general public. Many 新書 (short books for general readers) and some textbooks are written in です・ます too.",
      "So there is no single rule for every course. **Read the assignment instructions, and ask the teacher if they don’t say.** If nothing is said, である is the safe default for a report.",
      {key:"Reports and theses: normally である. Emails, presentations and talking to teachers: です・ます. The teacher’s instructions decide."}
    ]},
    {h:"Converting: the full pattern", body:[
      "Converting from です・ます to である style follows a small set of patterns. The most important thing is to know the type of word before the ending.",
      {table:[["Type","です・ます体","である体"],["Noun","[原因]{げんいん}です","原因である (原因だ)"],["Noun, negative","原因ではありません","原因ではない"],["Noun, past","原因でした","原因であった (原因だった)"],["な-adjective","[重要]{じゅうよう}です","重要である (重要だ)"],["な-adjective, negative","重要ではありません","重要ではない"],["い-adjective","[高]{たか}いです","高い"],["い-adjective, negative","高くありません / 高くないです","高くない"],["い-adjective, past","高かったです","高かった"],["Verb","[減少]{げんしょう}します","減少する"],["Verb, negative","減少しません","減少しない"],["Verb, past","減少しました","減少した"],["Verb, ている","減少しています","減少している"]]},
      "Three patterns cause most mistakes:",
      {list:["**い-adjectives take nothing.** 高いです → 高い. Not ✗ 高いである, not ✗ 高いだ.","**Verbs take nothing.** 減少します → 減少する. Not ✗ 減少するである.","**である goes after nouns and な-adjectives only.** 重要です → 重要である. Not ✗ 重要だである (that doubles the ending)."]},
      {warn:"✗ 「この割合は高いである。」 ✗ 「人口は減少しているである。」 Both are common learner errors. If the word before です is an い-adjective or the word before ます is a verb, the plain form alone ends the sentence."}
    ]},
    {h:"Guesses, explanations and questions", body:[
      "A few more endings change in regular ways:",
      {table:[["Meaning","です・ます体","である体"],["Probably (guess)","[影響]{えいきょう}があるでしょう","影響があるであろう (影響があるだろう)"],["Probably, with a noun","原因でしょう","原因であろう (原因だろう)"],["Explanation","～のです / ～んです","～のである"],["Question","～でしょうか","～だろうか / ～であろうか"],["Wish, plan","～たいと思います","～たい, or simply ～する (～たいと思う is plain but sounds personal; Lesson 5)"]]},
      "**であろう** is the written form of だろう. It is common in academic writing and sounds more formal than だろう. Both are correct; Lesson 5 explains when a guess is the right ending.",
      "**のである** explains or emphasises: it presents a sentence as the explanation of what came before. It is useful at key moments, but don’t put it on every sentence: a page full of のである sounds heavy and over-insistent.",
      "**Questions** in a report are usually questions the writer then answers: 「では、なぜこのような[差]{さ}が[生]{しょう}じたのだろうか。」 (“Why, then, did this difference arise?”). Many academic texts end them with 。 rather than ？.",
      "Forms that speak directly to the reader, such as ～ましょう (“let’s…”) and ～てください (“please…”), don’t belong in a である report. Rewrite them: 「～について考えてみましょう」 becomes 「以下では、～について[検討]{けんとう}する」 (“Below, I examine…”)."
    ]},
    {h:"Keep one style", body:[
      "The most important rule is the simplest: **use one style throughout a text.** Mixing です・ます and である sentences is called 文体の[混在]{こんざい} (mixing styles), and teachers mark it as an error. 公用文作成の考え方 states the same rule for official writing: within one sentence or one document, use either the plain style or the polite style.",
      {ex:"✗ [若者]{わかもの}の[読書時間]{どくしょじかん}は減少している。その原因の一つとして、スマートフォンの[普及]{ふきゅう}が考えられます。\n\n✓ 若者の読書時間は減少している。その原因の一つとして、スマートフォンの普及が考えられる。", label:"Mixed styles, fixed"},
      "Mixing usually happens when you write quickly, or when you paste in a sentence from your notes. Before you submit, read only the **ends** of your sentences, one after another. A stray ～ます or ～です stands out.",
      {h:"The exception: quotations"},
      "A direct quotation keeps its original words and style. If a student wrote 「課題が多くて、寝る時間がありません」 in a survey, you quote it exactly, です・ます and all, inside 「」. Only your own sentences must keep one style. Unit 7 covers quoting in detail ({{quoting-in-japanese}}).",
      {h:"What about だ and である?"},
      "だ and である are both plain style, so using both in one report is not the です・ます/である mixing error. Even so, many guides recommend である for the ends of noun and な-adjective sentences in a report, because it sounds more formal and even. 公用文作成の考え方 also asks official plain-style writing to use the である forms (である・であろう・であった). Choosing である and keeping to it is a safe habit; follow your teacher if they prefer something else."
    ]},
    {h:"A worked conversion", body:[
      "Here is a short paragraph in です・ます style, and the same paragraph converted. Read the endings.",
      {ex:"です・ます体:\n[近年]{きんねん}、オンライン[授業]{じゅぎょう}を[行]{おこな}う大学が[増]{ふ}えています。オンライン授業には、[通学]{つうがく}の時間がかからないという[利点]{りてん}があります。しかし、学生[同士]{どうし}の[交流]{こうりゅう}が少なくなるという問題もあるでしょう。本レポートでは、この問題について考えます。\n\nである体:\n近年、オンライン授業を行う大学が増えている。オンライン授業には、通学の時間がかからないという利点がある。しかし、学生同士の交流が少なくなるという問題もあるであろう。本レポートでは、この問題について考える。", label:"Worked example"},
      "Each change follows the table: 増えています → 増えている (verb, ている), あります → ある (verb), あるでしょう → あるであろう (guess), 考えます → 考える (verb). Nothing else changed. Converting the style is only the first step; Lessons 3–5 make the words and endings more academic too.",
      {terms:["desu-masu-tai","dearu-tai","futsuu-tai"]}
    ]},
    {h:"Why this matters", body:[
      "Style is the first thing a Japanese teacher notices in a report, often before the content. A report in a steady である style signals that you know the genre; a report that drifts between です and である looks unfinished, even when the ideas are good. Getting the style right is also the easiest win in academic Japanese: the patterns are regular, and you can check them mechanically by reading the endings.",
      "The same skill works in reverse. When you write an email to a teacher or prepare what you will say in a presentation, you switch to です・ます on purpose. Knowing **why** each style is used (does the text speak to a person?) lets you choose correctly in new situations, such as a poster, a summary for a class website or a short reflection.",
      {table:[["Misconception","Closer to the truth"],["The plain style is rude, so reports should be polite.","In writing, である is neutral and impersonal. It addresses ideas to any reader."],["である goes at the end of every sentence.","Only after nouns and な-adjectives. Verbs and い-adjectives end in their plain forms."],["Quotations must be converted to the report’s style.","Direct quotations keep the original words."],["です・ます reports are always wrong.","Some teachers allow or ask for them. Follow the instructions."]]},
      "The Codex entry {{desu-masu-and-dearu}} has the full conversion table for quick reference."
    ]}
   ],
   try:[
    {id:"e1u5-l2-x1", type:"sort", q:"Sort these sentences by style.", buckets:["である体 (plain)","です・ます体 (polite)"], items:[
      {t:"本研究の[目的]{もくてき}は、留学生の[孤立]{こりつ}の[要因]{よういん}を明らかにすることである。", b:0, why:"It ends in である after a noun phrase: plain written style."},
      {t:"次に、調査の方法を説明します。", b:1, why:"～します is polite. In a presentation this would be right; in a である report it would not."},
      {t:"この差は[統計的]{とうけいてき}に[有意]{ゆうい}であった。", b:0, why:"であった is the plain past of である."},
      {t:"以上の点から、さらなる調査が[必要]{ひつよう}だと考えられます。", b:1, why:"考えられます is polite. In a report it would be 考えられる."},
      {t:"[回答者]{かいとうしゃ}の多くは、オンライン授業に[満足]{まんぞく}していた。", b:0, why:"していた is the plain past of a verb."},
      {t:"この結果は、[予想]{よそう}とは[異]{こと}なるものでした。", b:1, why:"でした is the polite past. The plain version is ものであった or ものだった."},
      {t:"なぜこのような[違]{ちが}いが[生]{しょう}じたのだろうか。", b:0, why:"のだろうか is a plain question, common in reports before the writer answers it."},
      {t:"[今後]{こんご}の[課題]{かだい}について[述]{の}べたいと思います。", b:1, why:"思います is polite. A report would say 今後の課題について述べる."}
    ]},
    {id:"e1u5-l2-x2", type:"mcq", q:"Convert 「この方法は[有効]{ゆうこう}ではありません。」 (“This method is not effective.”) to the である style of a report.", options:[
      {t:"この方法は有効ではない。", ok:true, why:"Right. 有効 is a な-adjective; the plain negative is ではない."},
      {t:"この方法は有効じゃない。", why:"じゃない is the spoken contraction of ではない. It is plain, but it is 話し言葉 (Lesson 3)."},
      {t:"この方法は有効ではないである。", why:"ではない is already a complete plain ending. Adding である doubles the ending."},
      {t:"この方法は有効ではありませんである。", why:"ありません is polite. You can’t add である to a polite form; replace ではありません with ではない."}
    ]},
    {id:"e1u5-l2-x3", type:"spot", q:"Kim wrote this paragraph for a report in the である style. Tap each sentence that **breaks the である style**.", ask:"breaks the style", parts:[
      {t:"本レポートでは、大学生の[睡眠時間]{すいみんじかん}について考察する。", flag:false, why:"Plain style: 考察する."},
      " ",
      {t:"調査は、〇〇大学の学生100名を[対象]{たいしょう}に行った。", flag:false, why:"Plain past: 行った."},
      " ",
      {t:"回答者の[半数]{はんすう}以上が、睡眠時間は6時間[未満]{みまん}だと答えました。", flag:true, why:"答えました is polite. It should be 答えた."},
      " ",
      {t:"ある学生は「課題が多くて、[寝]{ね}る時間がありません」と書いていた。", flag:false, why:"Fine. The quotation keeps the student’s original words; Kim’s own sentence ends in the plain 書いていた."},
      " ",
      {t:"この結果は、[先行研究]{せんこうけんきゅう}の結果と[一致]{いっち}している。", flag:false, why:"Plain style: 一致している."},
      " ",
      {t:"睡眠[不足]{ぶそく}は、学習に悪い影響を与えるでしょう。", flag:true, why:"でしょう is polite. The plain guess is 与えるであろう (or 与えるだろう)."},
      " ",
      {t:"今後は、より多くの大学で調査を行う必要がある。", flag:false, why:"Plain style: 必要がある."}
    ]},
    {id:"e1u5-l2-x4", type:"mcq", q:"Which is the correct である-style version of 「結果は[明確]{めいかく}ではありませんでした。」 (“The results were not clear.”)?", options:[
      {t:"結果は明確ではなかった。", ok:true, why:"Right. 明確 is a な-adjective: ではありませんでした → ではなかった."},
      {t:"結果は明確じゃなかった。", why:"Plain, but じゃ is the spoken contraction of では. Reports use ではなかった."},
      {t:"結果は明確ではなかったです。", why:"Adding です makes it polite again (and ～なかったです is a casual polite form). Drop です."},
      {t:"結果は明確ではないであった。", why:"This joins two endings. The past negative of ではない is ではなかった."}
    ]},
    {id:"e1u5-l2-x5", type:"match", q:"Match each です・ます ending to its である-style equivalent.", pairs:[
      ["～でしょう (after a verb)","～であろう","でしょう (a guess) becomes であろう, or だろう."],
      ["～のです","～のである","The explaining ending のです becomes のである."],
      ["～ではありません","～ではない","The polite negative ではありません becomes ではない."],
      ["～でした (after a noun)","～であった","The polite past でした becomes であった (or だった)."],
      ["～ています","～ている","The polite ている form loses ます: ～ている."]
    ]},
    {id:"e1u5-l2-x6", type:"mcq", q:"Leila’s assignment sheet asks for a 2,000-字 report but says nothing about style. What is the best plan?", options:[
      {t:"Write in the である style, the usual default for reports, and ask the teacher if she is unsure.", ok:true, why:"Right. である is the normal report style, and the teacher has the final say."},
      {t:"Write in です・ます, because it is more polite to the teacher who will read it.", why:"A report doesn’t speak to the teacher personally, so politeness isn’t the point. です・ます is only right if the teacher asks for it."},
      {t:"Use です・ます for her opinions and である for facts, to show the difference.", why:"Mixing styles is an error. Opinions and facts are shown by word choice and endings (Lesson 5), not by switching style."},
      {t:"Write in casual spoken Japanese, because reports are just homework.", why:"Reports are formal written texts. Casual speech style (～だよね, ～じゃん) has no place in them."}
    ]}
   ],
   apply:{
    intro:"Use texts from your own studies if you can. If you don’t have any yet, use the practice paragraph given in the first task.",
    tasks:[
     {t:"Convert a paragraph to the である style", how:[
       "Take a paragraph you wrote in です・ます style (an email, a class essay or a blog post), or use this one: 「私の町では、高齢者が増えています。バスの本数が少ないので、買い物が大変です。今後は、地域のボランティアが重要になるでしょう。」",
       "Convert every sentence ending using the tables in this lesson. Change only the endings for now.",
       "Check each ending: is the word before it a noun, a な-adjective, an い-adjective or a verb? Did you avoid ✗高いである and ✗するである?"
     ], write:"Original… Converted… Endings I had to think about…"},
     {t:"Read only the endings", how:[
       "Take something longer you have written in Japanese (or a page from a 論文).",
       "Read only the last few characters of each sentence, one after another, top to bottom.",
       "Note any sentence that switches style. In a published 論文, notice which endings the writer uses most."
     ], write:"Endings I found… Any switches… The most common endings…"},
     {t:"Check the rules where you study", how:[
       "Look at one real assignment sheet, syllabus or report guide from a Japanese course (yours or a public one from a university website).",
       "Find what it says about 文体, である or です・ます. If it says nothing, write the question you would ask the teacher, in polite Japanese."
     ], write:"What the instructions say… or my question: 「レポートは、である体で書けばよろしいでしょうか。」…"}
    ],
    proof:"One paragraph converted from です・ます to である style with the endings checked, notes on sentence endings in a longer text, and what your course says (or what you would ask) about style."
   },
   read:[
    {book:"koyobun", where:"“Ⅲ 伝わる公用文のために” → “1 文体の選択” (p. 30 of the version with commentary)", note:"Official guidance: the plain style for laws, public notices and directives, です・ます for texts to a particular reader, and one style within a document."},
    {book:"omu", where:"Section 2.2 “作文・感想文とは異なる” (p. 4)", note:"A university guide’s short explanation of why reports use the 「だ・である」 style."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u5-l3", title:"書き言葉 and 話し言葉: written words and spoken words", minutes:55,
   hook:{q:"Which of these potential forms (“can…”) is fine in a formal report?", options:["[見]{み}れる (can see)","[来]{こ}れる (can come)","[書]{か}ける (can write)","[食]{た}べれる (can eat)"], answer:2, reveal:"**書ける.** 見れる, 来れる and 食べれる are ら抜き言葉: the ら of 見られる, 来られる and 食べられる has been dropped. They are very common in conversation, but formal writing uses the full forms. 書ける is different: 書く belongs to the other verb group, whose normal potential form is ～える (書ける, 読める, 行ける), so nothing is missing. This lesson shows you how to tell them apart, and which other spoken words to change in a report."},
   goals:[
     "Explain the difference between 書き言葉 and 話し言葉, and why it is separate from politeness",
     "Replace common spoken words (でも, だから, すごく, ちょっと, いっぱい and others) with written equivalents",
     "Undo spoken contractions such as ～てる, ～じゃない and ～なきゃ",
     "Recognise ら抜き言葉 and avoid 「とか」 and sentence-initial 「なので」 in reports",
     "Use typical written patterns such as the 連用中止 form (～し、) and ～ず"
   ],
   learn:[
    {h:"Two vocabularies", body:[
      {lead:"Japanese has many pairs of words that mean nearly the same thing, but one belongs to speech and the other to writing. Choosing the written one is the second big step towards academic Japanese."},
      "[[kakikotoba|書き言葉]] (*kakikotoba*) means written language: the words and forms typical of formal writing. [[hanashikotoba|話し言葉]] (*hanashikotoba*) means spoken language: the words and forms typical of conversation. Neither is better in general. Each fits its situation, just as you wouldn’t write a lab report in text-message style or chat with friends in report style.",
      "Here is the surprise for many learners: **this choice is separate from politeness.** You can be polite and still use spoken words, as in 「でも、すごく大事なんです」. A report needs the plain style (Lesson 2) **and** written words (this lesson).",
      {fig:'<svg viewBox="0 0 340 332"><text x="170" y="18" text-anchor="middle">Two separate choices</text><rect class="d-rose" x="8" y="30" width="324" height="66" rx="8" stroke-width="2"/><text class="s" x="20" y="50">話し言葉 + です・ます: chatting politely</text><text x="20" y="80">でも、すごく大事なんです。</text><rect class="d-rose" x="8" y="104" width="324" height="66" rx="8" stroke-width="2"/><text class="s" x="20" y="124">話し言葉 + plain: talking to a friend</text><text x="20" y="154">でも、すごく大事なんだ。</text><rect class="d-lup" x="8" y="178" width="324" height="66" rx="8" stroke-width="2"/><text class="s" x="20" y="198">書き言葉 + です・ます: presentation, email</text><text x="20" y="228">しかし、非常に重要です。</text><rect class="d-sage" x="8" y="252" width="324" height="70" rx="8" stroke-width="3"/><text class="s" x="20" y="272">書き言葉 + である: report, thesis ✓</text><text x="20" y="302">しかし、非常に重要である。</text></svg>', alt:"Four versions of the same sentence. Spoken words with です・ます: でも、すごく大事なんです. Spoken words, plain: でも、すごく大事なんだ. Written words with です・ます: しかし、非常に重要です, for presentations and emails. Written words with である: しかし、非常に重要である, for reports and theses.", cap:"Style (polite or plain) and register (spoken or written) are two separate choices. A report needs both: plain style and written words."},
      "Notice that the written versions also change the word for “important”: 大事 is common in speech, while [重要]{じゅうよう} is the usual choice in writing. Many written words are 漢語, which Lesson 4 looks at closely."
    ]},
    {h:"Swapping spoken words for written ones", body:[
      "These swaps come up again and again in teachers’ comments on reports. Learn the right-hand column as your default for formal writing.",
      {table:[["話し言葉","書き言葉","Example in writing"],["でも","しかし","しかし、[問題]{もんだい}も[残]{のこ}る。"],["だから","したがって / そのため","そのため、[再調査]{さいちょうさ}を行った。"],["～けど / ～けれど","～が","[効果]{こうか}はあるが、[費用]{ひよう}が高い。"],["すごく / とても","[非常]{ひじょう}に / [極]{きわ}めて","非常に重要である。"],["ちょっと","やや / 少し","やや[低]{ひく}い[傾向]{けいこう}がある。"],["いっぱい","多く / [多数]{たすう}の","多くの[学生]{がくせい}が[回答]{かいとう}した。"],["やっぱり","やはり","やはり[差]{さ}は見られなかった。"],["全然～ない","まったく～ない","まったく[影響]{えいきょう}がない。"],["たぶん","おそらく","おそらく[誤差]{ごさ}であろう。"],["どうして / なんで","なぜ","なぜ差が[生]{しょう}じたのか。"],["一番","[最]{もっと}も","最も多い[回答]{かいとう}"],["だんだん","[次第]{しだい}に / [徐々]{じょじょ}に","次第に[増加]{ぞうか}した。"],["～みたいだ","～ようだ","[効果]{こうか}があるようだ。"],["～って","～という / ～とは","「[孤立]{こりつ}」という[概念]{がいねん}"],["あと","また","また、[年齢]{ねんれい}による差もある。"]]},
      "A note on とても: it is not slang, and you will see it in some careful writing. But in reports, 非常に or a precise description (“twice as high”, 2倍) is usually better. The best academic writing often replaces intensifiers with numbers or facts.",
      {tip:"Keep a two-column list of your own: every time a teacher corrects a spoken word in your writing, add the pair. Most people have a short list of favourite spoken words that slip in."}
    ]},
    {h:"Spoken contractions", body:[
      "Speech shortens many forms. In writing, use the full forms. Japanese calls these shortened forms [[shukuyakukei|縮約形]] ([縮約形]{しゅくやくけい}, *shukuyakukei*).",
      {table:[["Spoken form","Full written form","Example"],["～てる","～ている","[変化]{へんか}している"],["～てく","～ていく","増えていく"],["～ちゃう / ～じゃう","～てしまう / ～でしまう","[失]{うしな}われてしまう"],["～じゃない","～ではない","[十分]{じゅうぶん}ではない"],["～なきゃ / ～なくちゃ","～なければならない","[検討]{けんとう}しなければならない"],["～んだ / ～んです","～のだ / ～のである (or just the plain form)","～のである"]]},
      "～てる drops the い of ～ている; it is sometimes called い抜き言葉. It is so common in speech that many learners don’t notice they are writing it. Search your draft for てる and でる before you submit.",
      {warn:"Sentence-final particles such as ね, よ and よね, and exclamation marks (！), belong in conversation and personal messages. In a report, end sentences with 。 only."}
    ]},
    {h:"ら抜き言葉", body:[
      "To say “can do” with a る-verb (一段 verb) such as 見る, 食べる or 考える, and with 来る, standard Japanese adds ～られる: 見られる, 食べられる, 考えられる, 来られる. In speech, many people drop the ら: 見れる, 食べれる, 考えれる, 来れる. These are called [[ra-nuki-kotoba|ら抜き言葉]] (*ra-nuki kotoba*, “words with the ら removed”).",
      "ら抜き言葉 are very common in conversation, and many linguists describe them as a natural, ongoing change in the language. The Agency for Cultural Affairs’ national survey on Japanese, 国語に関する世論調査, has asked about them. But in formal writing, including reports, the full ～られる forms are still expected.",
      {h:"How to tell them apart"},
      "The other big verb group, う-verbs (五段 verbs) such as 書く, 読む and 行く, makes its potential form with ～える: 書ける, 読める, 行ける. These are standard. Nothing has been dropped, so they are **not** ら抜き.",
      "A quick test: make the “let’s…” form. If it ends in ～よう (見よう, 食べよう, 考えよう, [来]{こ}よう), the potential needs ら: 見られる, 食べられる, 考えられる, 来られる. If it ends in an お-sound (書こう, 読もう, 行こう), the potential is ～える: 書ける, 読める, 行ける. する is the exception: its “let’s” form is しよう, but its potential is できる.",
      {table:[["Verb","Let’s… form","Potential in writing"],["見る","見よう","見られる (✗ 見れる)"],["考える","考えよう","考えられる (✗ 考えれる)"],["[来]{く}る","[来]{こ}よう","[来]{こ}られる (✗ [来]{こ}れる)"],["書く","書こう","書ける ✓"],["行く","行こう","行ける ✓"]]}
    ]},
    {h:"「とか」 and 「なので」", body:[
      "Two small words appear in student reports so often that many guides mention them by name.",
      {h:"「とか」"},
      "In speech, ～とか lists examples (「SNSとかテレビとか」) or makes something vague (「調査とかをする」). In writing, list with ～や～など, and drop the vague とか.",
      {ex:"✗ SNSとかテレビとかの[影響]{えいきょう}が[大]{おお}きい。\n✓ SNSやテレビなどの影響が大きい。", label:"Listing in writing"},
      {h:"「なので」 at the start of a sentence"},
      "Starting a sentence with なので (“so…”) is spoken style. Most report guides advise そのため or したがって instead.",
      {ex:"✗ 回答者は20[代]{だい}に[限]{かぎ}られていた。なので、[結果]{けっか}を[一般化]{いっぱんか}することはできない。\n✓ 回答者は20代に限られていた。そのため、結果を一般化することはできない。", label:"Starting a sentence with a result"},
      "Inside a sentence, ～なので (“because…”) is grammatical and common in polite speech. In a report, many guides prefer ～ため or ～ことから, which sound more written: 「[対象者]{たいしょうしゃ}が少ないため、[結論]{けつろん}は[慎重]{しんちょう}に[述]{の}べる[必要]{ひつよう}がある。」"
    ]},
    {h:"Written patterns to use", body:[
      "Avoiding spoken forms is half the job. The other half is using patterns that are typical of writing.",
      {h:"The 連用中止 form: ～し、"},
      "To join two actions, speech uses the て-form: 「データを[集]{あつ}めて、分析した」. Writing often uses the verb’s ます-stem with a comma instead: 「データを[収集]{しゅうしゅう}し、[分析]{ぶんせき}した」. This is called the [[renyou-chuushi|連用中止]] form ([連用中止形]{れんようちゅうしけい}, *ren’yō chūshi*). Both are correct in writing; the 連用中止 form is the more typical written choice.",
      {table:[["て-form","連用中止 form"],["調査を行って、結果をまとめた","調査を行い、結果をまとめた"],["[原因]{げんいん}を[調]{しら}べて、[対策]{たいさく}を考えた","原因を調べ、対策を考えた"],["[値]{あたい}が高くて、[安定]{あんてい}している","値が高く、安定している"]]},
      {h:"～ず and ～せずに"},
      "～ないで (“without…”) becomes ～ず or ～ずに in writing: 「[辞書]{じしょ}を使わずに読んだ」, 「[確認]{かくにん}せずに[提出]{ていしゅつ}した」. Note that する becomes せず, not ✗しず.",
      {h:"Keep the particles"},
      "Speech drops particles: 「データ集めた」. Writing keeps them: 「データを集めた」. When you convert your notes into a report, check that every noun has its particle.",
      {key:"A report needs the plain style **and** written words: しかし not でも, ～ている not ～てる, 見られる not 見れる, ～や～など not とか, and そのため not なので at the start of a sentence."}
    ]},
    {h:"Why this matters", body:[
      "Spoken words are among the most common comments teachers write on student reports in Japan, for Japanese and international students alike. One でも or すごく won’t ruin a report, but a page full of them makes careful thinking sound casual, and teachers may read it as a sign that you haven’t revised.",
      "The swaps also make your writing more precise. しかし tells the reader exactly what kind of link you mean; そのため makes a cause-and-effect claim that you then have to support. Replacing すごく with a figure forces you to check your evidence. Written style is not decoration: it is part of thinking clearly on paper.",
      "Finally, knowing the spoken forms helps you **listen**. Lectures, seminars and office hours use plenty of 話し言葉, even from professors. Recognising ～てる, ～じゃない and ら抜き forms in speech, and knowing their written partners, lets you take notes in written style as you listen."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["If I use です・ます, my words are formal enough.","Politeness and register are separate. 「でも、すごく大事なんです」 is polite but spoken."],["書ける and 行ける are ら抜き言葉.","They are the standard potential forms of う-verbs. Only る-verbs and 来る need ～られる."],["Spoken words are wrong Japanese.","They are correct in conversation. They just don’t fit a formal report."],["Every とても must become 非常に.","Often a precise fact (2倍, 30%) is better than any intensifier."],["The て-form is wrong in writing.","It is correct. The 連用中止 form is simply more typical of formal writing."]]},
      "The Codex entry {{written-vs-spoken-japanese}} collects these swaps in one place, with more examples.",
      {terms:["kakikotoba","hanashikotoba","shukuyakukei","ra-nuki-kotoba","renyou-chuushi"]}
    ]}
   ],
   try:[
    {id:"e1u5-l3-x1", type:"sort", q:"Sort these words: which belongs in a formal report, and which in conversation?", buckets:["書き言葉 (report)","話し言葉 (conversation)"], items:[
      {t:"しかし", b:0, why:"The standard written word for “but” at the start of a sentence."},
      {t:"でも", b:1, why:"Spoken “but”. In a report, use しかし."},
      {t:"非常に", b:0, why:"A written intensifier, “extremely”."},
      {t:"すごく", b:1, why:"Spoken “really”. In a report, use 非常に, or better, a precise fact."},
      {t:"したがって", b:0, why:"A written connector for a result, “therefore”."},
      {t:"だから", b:1, why:"Spoken “so”. In a report, use したがって or そのため."},
      {t:"多くの", b:0, why:"Written “many”."},
      {t:"いっぱい", b:1, why:"Spoken “lots of”. In a report, use 多く or 多数."}
    ]},
    {id:"e1u5-l3-x2", type:"match", q:"Match each spoken form to its written equivalent.", pairs:[
      ["～てる","～ている","～てる drops the い of ～ている; writing uses the full form."],
      ["～じゃない","～ではない","じゃ is the spoken contraction of では."],
      ["～なきゃ","～なければならない","なきゃ is short for なければ (ならない); writing uses the full form."],
      ["ちょっと","やや","やや (somewhat, slightly) is the written choice; 少し also works."],
      ["～けど","～が","Joining two clauses with a contrast: ～が in writing."]
    ]},
    {id:"e1u5-l3-x3", type:"mcq", q:"Which is the best version of this sentence for a formal report? 「この方法はすごく[便利]{べんり}だけど、お[金]{かね}がいっぱいかかる。」", options:[
      {t:"この方法は非常に便利であるが、多くの[費用]{ひよう}がかかる。", ok:true, why:"Right. 非常に for すごく, であるが for だけど, 多くの費用 for お金がいっぱい, all in the plain style."},
      {t:"この方法はすごく便利ですが、費用がいっぱいかかります。", why:"It is polite, but すごく and いっぱい are still spoken words, and a report uses the plain style."},
      {t:"この方法は非常に便利だけど、多くの費用がかかる。", why:"Almost there, but だけど is spoken. Use であるが (or だが)."},
      {t:"この方法は非常に便利であるが、費用がいっぱいかかるのである。", why:"いっぱい is still spoken, and のである adds emphasis the sentence doesn’t need."}
    ]},
    {id:"e1u5-l3-x4", type:"sort", q:"Sort these potential forms (“can…”).", buckets:["ら抜き言葉 (avoid in a report)","Standard form (fine in a report)"], items:[
      {t:"見れる", b:0, why:"見る is a る-verb (let’s… form 見よう), so the standard potential is 見られる."},
      {t:"来れる", b:0, why:"来る takes ～られる in standard Japanese: 来られる."},
      {t:"考えれる", b:0, why:"考える is a る-verb (考えよう), so the standard form is 考えられる."},
      {t:"食べれる", b:0, why:"食べる is a る-verb (食べよう): 食べられる."},
      {t:"見られる", b:1, why:"The full, standard potential of 見る."},
      {t:"書ける", b:1, why:"書く is an う-verb (書こう). Its standard potential is 書ける; nothing is missing."},
      {t:"読める", b:1, why:"読む is an う-verb (読もう). 読める is standard."},
      {t:"行ける", b:1, why:"行く is an う-verb (行こう). 行ける is standard."}
    ]},
    {id:"e1u5-l3-x5", type:"mcq", q:"Most report guides advise against starting a sentence with なので. Which is the best replacement here? 「調査の[期間]{きかん}は2週間だった。______、[季節]{きせつ}による[変化]{へんか}は[確認]{かくにん}できていない。」", options:[
      {t:"そのため", ok:true, why:"Right. そのため (“for that reason”) is the standard written way to start a sentence giving a result."},
      {t:"なので", why:"This is the spoken choice the question asks you to avoid."},
      {t:"だから", why:"だから is also spoken. In writing, use そのため or したがって."},
      {t:"ので", why:"ので is a conjunction particle that joins clauses inside a sentence; it can’t start a sentence."}
    ]},
    {id:"e1u5-l3-x6", type:"mcq", q:"Which version of “I collected the data and analysed it” is the most typical of a report?", options:[
      {t:"データを収集し、分析した。", ok:true, why:"Right. The 連用中止 form 収集し、 joins the two actions in a typically written way, in the plain style."},
      {t:"データを収集して、分析しました。", why:"The て-form is acceptable, but ～ました is polite; a report uses the plain style."},
      {t:"データ集めて分析した。", why:"The particle を has been dropped, which is typical of speech."},
      {t:"データを収集してて、分析した。", why:"してて is a spoken contraction of していて, and it doesn’t fit the meaning here."}
    ]},
    {id:"e1u5-l3-x7", type:"spot", q:"Fatima wrote this paragraph for a report. Tap each word or phrase that is **話し言葉** and should be changed. Some highlighted parts are fine.", ask:"話し言葉", parts:[
      "近年、大学生の[読書時間]{どくしょじかん}は",
      {t:"減少している", flag:false, why:"Fine: a written 漢語 verb in the plain style."},
      "。その原因として、",
      {t:"スマホとか", flag:true, why:"Spoken twice over: スマホ is a casual abbreviation, and とか is spoken listing. Write スマートフォンや…など."},
      "SNSの利用時間の増加が",
      {t:"[挙]{あ}げられる", flag:false, why:"Fine: 挙げられる (“can be cited”) is a standard written expression."},
      "。",
      {t:"でも", flag:true, why:"Spoken. At the start of a sentence in a report, use しかし."},
      "、読書時間の減少が",
      {t:"[必]{かなら}ずしも", flag:false, why:"Fine: 必ずしも～とは限らない (“not necessarily”) is a careful written pattern."},
      "学力の低下を意味するとは限らない。先行研究には、読書の量を",
      {t:"調べた", flag:false, why:"Fine. 調べる is a 和語, but it is correct in a report; 調査した is also possible."},
      "ものが",
      {t:"いっぱい", flag:true, why:"Spoken. Use 多い or 多く: 調べたものが多いが…"},
      "ある",
      {t:"けど", flag:true, why:"Spoken. Join the clauses with が: 多いが、…"},
      "、内容に注目したものは少ない。",
      {t:"なので", flag:true, why:"Starting a sentence with なので is spoken style. Use そのため."},
      "、本レポートでは、学生が読む本の内容に注目する。"
    ]}
   ],
   apply:{
    intro:"These tasks use your own writing. If you haven’t written anything in Japanese yet, write a short paragraph first about something you know well, as if telling a friend.",
    tasks:[
     {t:"Rewrite a casual paragraph in report style", how:[
       "Take a casual paragraph you wrote (a social media post, a message, a diary entry), or write 5–6 sentences about a recent change in your town, school or workplace, as if talking to a friend.",
       "Rewrite it in the である style with 書き言葉. Use the swap table, undo every contraction and replace any とか and なので.",
       "Underline every word you changed, and note which rule each change follows."
     ], write:"Casual version… Report version… Changes and rules…"},
     {t:"Search your draft for spoken forms", how:[
       "Open any Japanese text you have written on a computer or phone.",
       "Use Find (Ctrl+F on Windows and ChromeOS, Command+F on a Mac; on phones, the search option in your notes or document app) to search for: でも, だから, けど, すごく, いっぱい, とか, なので, てる, じゃ, れる.",
       "For each match, decide whether it really is spoken. Searching for れる also finds standard words such as 入れる and 考えられる, so check each one: only forms like 見れる and 来れる are ら抜き."
     ], write:"Words I found… Which were really spoken… My corrected versions…"},
     {t:"Start your personal swap list", how:[
       "Make a two-column list: 話し言葉 on the left, 書き言葉 on the right.",
       "Add the five swaps you think you are most likely to forget, with one example sentence each.",
       "Keep the list next to you when you write your next report."
     ], write:"でも → しかし: … (five pairs with examples)"}
    ],
    proof:"A casual paragraph and its report-style rewrite with every change explained, a check of one of your own texts for spoken forms, and a personal swap list of five pairs."
   },
   read:[
    {book:"omu", where:"Section 4.5 “文章を読みやすくする”", note:"A university guide’s advice on readable sentences and on keeping words and spelling consistent."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u5-l4", title:"漢語 and 和語: choosing academic words", minutes:50,
   hook:{q:"Which statement about these two sentences is true? A: 「[人口]{じんこう}が[増加]{ぞうか}している。」 B: 「[人口]{じんこう}が[増]{ふ}えている。」 (Both mean “the population is increasing.”)", options:["Only A is correct Japanese","Only B is correct Japanese","Both are correct; A sounds more typical of a report","Both are wrong in a report"], answer:2, reveal:"**Both are correct.** 増える is a native Japanese word (和語) and 増加する is a word of Chinese origin (漢語). Reports often prefer the 漢語, because it sounds more formal and turns easily into a noun (人口の増加, “the increase in population”). But B is not a mistake, and many formal 和語 are essential in academic writing. This lesson shows when a 漢語 helps and when a 和語 is the better choice."},
   goals:[
     "Recognise 和語, 漢語, 外来語 and 混種語, and explain why academic Japanese uses many 漢語",
     "Replace everyday 和語 verbs with suitable 漢語 verbs (調べる → 調査する, 増える → 増加する, 考える → 考察する) where they fit",
     "Explain why 和語 and 漢語 are not one-to-one swaps, and keep the formal 和語 that academic writing needs",
     "Use 外来語 carefully and avoid piling up 漢語 into hard-to-read text"
   ],
   learn:[
    {h:"Three sources, one language", body:[
      {lead:"Lesson 1 introduced the three main kinds of Japanese words. Academic writing uses all three, but in different proportions from conversation, and that difference is a large part of what makes a text sound academic."},
      {table:[["Kind","How to recognise it (usually)","Examples"],["和語 (*wago*)","Native words; kun readings, or written in hiragana; many verbs end in kana (okurigana)","[調]{しら}べる、[考]{かんが}える、[述]{の}べる、ため、こと"],["漢語 (*kango*)","Chinese-origin words; two or more kanji read with on readings","[調査]{ちょうさ}、[考察]{こうさつ}、[増加]{ぞうか}、[影響]{えいきょう}"],["外来語 (*gairaigo*)","Loanwords, mostly from European languages; written in katakana","データ、サンプル、インタビュー"],["[[konshugo|混種語]] (*konshugo*)","Mixed words that combine two kinds","データ[分析]{ぶんせき} (外来語 + 漢語)、アルバイト[先]{さき} (外来語 + 和語)"]]},
      "These are tendencies, not strict rules. Some 和語 are written with kanji (考える), and a few 漢語 are usually written in kana. But the pattern “two kanji, on readings” will help you spot most 漢語.",
      "A [[kanji-compound|kanji compound]] (熟語, *jukugo*) is a word made of two or more kanji. Most 漢語 are kanji compounds, and academic Japanese is full of them: 研究, 方法, 結果, 考察, 分析, 傾向, 要因."
    ]},
    {h:"Why academic Japanese leans on 漢語", body:[
      "Three reasons explain why reports and 論文 use so many 漢語.",
      "**1. They are compact.** A 漢語 verb is a noun + する. Drop the する and you have a noun, ready to be packed into a longer phrase. This is how Japanese does [[nominalisation]]:",
      {fig:'<svg viewBox="0 0 340 424"><text x="170" y="18" text-anchor="middle">Inside a 漢語 verb</text><rect class="d-soft" x="8" y="30" width="324" height="56" rx="8" stroke-width="2"/><text x="20" y="54">和語: 増える (ふえる)</text><text class="s" x="20" y="74">one kanji, kun reading, kana ending</text><rect class="d-lup" x="40" y="100" width="100" height="70" rx="8" stroke-width="2"/><text x="90" y="132" text-anchor="middle">増</text><text class="s" x="90" y="156" text-anchor="middle">ぞう: increase</text><text x="170" y="140" text-anchor="middle">+</text><rect class="d-lup" x="200" y="100" width="100" height="70" rx="8" stroke-width="2"/><text x="250" y="132" text-anchor="middle">加</text><text class="s" x="250" y="156" text-anchor="middle">か: add</text><text x="170" y="198" text-anchor="middle">= 増加 (ぞうか), on + on</text><rect class="d-sage" x="8" y="214" width="324" height="200" rx="8" stroke-width="2"/><text class="s" x="20" y="236">from verb to compact noun</text><text x="20" y="264">人口が増える</text><text x="20" y="300">→ 人口が増加する</text><text class="s" x="40" y="318">(漢語 + する: a verb)</text><text x="20" y="350">→ 人口の増加</text><text class="s" x="40" y="368">(drop する: a noun)</text><text x="20" y="398">→ 人口増加 (a compound)</text></svg>', alt:"The 和語 verb 増える, read ふえる, compared with the 漢語 増加, made of 増 (ぞう, increase) and 加 (か, add), read with on readings. Below, a chain: 人口が増える, then 人口が増加する (漢語 plus する), then 人口の増加 (a noun), then the compound 人口増加.", cap:"Two kanji with on readings make a 漢語. Add する for a verb; drop it for a noun that packs neatly into longer phrases."},
      "**2. They are precise.** One everyday 和語 often covers several more precise 漢語. 調べる can mean any of these:",
      {table:[["Meaning","漢語","Example"],["Investigate systematically, survey","調査する","学生の[意識]{いしき}を調査する"],["Search (a database, the web)","[検索]{けんさく}する","[論文]{ろんぶん}を検索する"],["Check, confirm","[確認]{かくにん}する","[数値]{すうち}を確認する"],["Examine, consider (options)","[検討]{けんとう}する","[対策]{たいさく}を検討する"],["Analyse","分析する","データを分析する"]]},
      "**3. They sound formal and neutral.** 漢語 have long been the vocabulary of scholarship, law and government in Japan, so they carry a formal, impersonal tone that suits a report."
    ]},
    {h:"Common pairs to know", body:[
      "These pairs appear constantly in reports. The 漢語 on the right is usually the more typical report choice.",
      {table:[["和語","漢語","Example in a report"],["調べる","調査する","[実態]{じったい}を調査する"],["増える","増加する","[利用者]{りようしゃ}が増加している"],["減る","[減少]{げんしょう}する","[学生数]{がくせいすう}が減少している"],["考える","考察する","原因を考察する"],["比べる","[比較]{ひかく}する","二つの[地域]{ちいき}を比較する"],["集める","[収集]{しゅうしゅう}する","データを収集する"],["変わる","[変化]{へんか}する","[意識]{いしき}が変化した"],["使う","[使用]{しよう}する / [利用]{りよう}する","[質問紙]{しつもんし}を使用する"],["起こる","[発生]{はっせい}する","問題が発生する"],["答える","[回答]{かいとう}する","アンケートに回答する"]]},
      {tip:"Learn each 漢語 with the particles it takes. 人口**が**増加する, データ**を**収集する, アンケート**に**回答する. The particle is often where learners slip."}
    ]},
    {h:"Not a one-to-one swap", body:[
      "A 漢語 usually has a narrower, more technical meaning than the 和語 it replaces. So you can’t swap them blindly.",
      {list:["**考察する** means to analyse and discuss something carefully, usually results or a problem. 「原因を考察する」 is natural; ✗「週末の[予定]{よてい}を考察する」 is not (use 考える).","**調査する** means to investigate systematically. 「[住民]{じゅうみん}の意識を調査する」 is natural; ✗「[辞書]{じしょ}で[単語]{たんご}の[意味]{いみ}を調査する」 is not (use 調べる).","**～と考える** stays as a 和語 when you state your own view: 「本稿では、～と考える」. 考察する is for the process of analysis, not for “I think that”."]},
      "Watch the grammar too. 増加する, 減少する and 変化する are mostly used like 増える, 減る and 変わる: something increases on its own (人口**が**増加する). To say that someone increases something, 増やす or ～を増加させる (“cause to increase”) is the safest choice: 「[大学]{だいがく}は[奨学金]{しょうがくきん}の[枠]{わく}を増やした」.",
      {key:"A 漢語 is often more precise and compact, but check its exact meaning and its particles before you swap it in."}
    ]},
    {h:"和語 are not wrong", body:[
      "It is easy to conclude that 和語 are casual. They are not. Many 和語 are formal and appear in almost every academic text:",
      {table:[["和語","Meaning","Example"],["述べる","state, describe","[先行研究]{せんこうけんきゅう}の[成果]{せいか}を述べる"],["示す","show","表1は回答者の[年齢]{ねんれい}を示している"],["明らかにする","make clear, reveal","要因を明らかにする"],["[用]{もち}いる","use (formal)","[統計]{とうけい}[手法]{しゅほう}を用いる"],["[異]{こと}なる","differ","結果は地域によって異なる"],["[基]{もと}づく","be based on","調査に基づいて[論]{ろん}じる"],["[捉]{とら}える","grasp, view (as)","この[現象]{げんしょう}を[社会的]{しゃかいてき}な[問題]{もんだい}として捉える"],["[扱]{あつか}う","deal with, treat","この[論点]{ろんてん}は第3[章]{しょう}で扱う"],["[及]{およ}ぼす","exert (an influence)","[学習]{がくしゅう}に影響を及ぼす"]]},
      "And the everyday 和語 調べる, 考える and 増える are not errors in a report. They are simply more neutral, and a report full of them can feel a little plain. Use 漢語 where they add precision; keep 和語 where they are the natural word.",
      {h:"Too many 漢語"},
      "The opposite problem is real too. Piling 漢語 into one long compound, or linking them with の after の, makes text very hard to read:",
      {ex:"✗ [留学生]{りゅうがくせい}[日本語学習]{にほんごがくしゅう}[意欲]{いよく}[低下]{ていか}[要因]{よういん}を分析する。\n✗ 留学生の日本語の学習の意欲の低下の要因の分析を行う。\n✓ 留学生の日本語学習意欲が低下する要因を分析する。", label:"Readable academic Japanese"},
      "The good version still uses 漢語 (日本語学習, 意欲, 低下, 要因, 分析), but a verb (低下する) breaks up the chain. Clear writing guides, including the official 公用文作成の考え方, put being understood by the reader first.",
      {h:"When you speak"},
      "Many 漢語 sound the same: 科学 and 化学 are both かがく; 私立 and 市立 are both しりつ. In speech, including presentations, people often use another reading of the first kanji (its kun reading) to make the difference clear: 化学 as ばけがく, 私立 as わたくしりつ, 市立 as いちりつ. In writing, the kanji do that job."
    ]},
    {h:"外来語 in academic Japanese", body:[
      "Loanwords are common in many fields: データ, サンプル, インタビュー, プロセス, モデル, ジェンダー. Some fields have both a loanword and a 漢語 for the same idea, such as アンケート and 質問紙調査 (questionnaire survey). Use the terms that the 論文 in your field use.",
      {list:["**Check the meaning.** A katakana word may not mean what the English or French word means. アンケート (from French *enquête*) means a questionnaire survey.","**Define unfamiliar loanwords** the first time you use them, just as you would a technical term. 公用文作成の考え方 has sections on handling loanwords and on explaining technical terms (Ⅱ-3 and Ⅱ-4).","**Prefer the established term.** Many teachers prefer 利点・欠点 or 長所・短所 to the everyday メリット・デメリット in a formal report."]}
    ]},
    {h:"Homophones and reading 漢語", body:[
      "Because 漢語 use a limited set of on readings, many words sound alike. In writing, choose the kanji carefully, especially with your computer’s kana-to-kanji conversion, which may offer the wrong one.",
      {table:[["Reading","Words","Meanings"],["たいしょう","[対象]{たいしょう} / [対照]{たいしょう} / [対称]{たいしょう}","target or subject (of a study) / contrast, control (group) / symmetry"],["きかい","[機会]{きかい} / [機械]{きかい}","opportunity / machine"],["いし","[意志]{いし} / [意思]{いし}","will, determination / intention"]]},
      "Unit 6 shows how to guess the meaning of new compounds from their kanji, for example words ending in ～化, ～性 and ～的 ({{reading-japanese-papers}}).",
      {terms:["wago","kango","gairaigo","konshugo","kanji-compound"]}
    ]},
    {h:"Why this matters", body:[
      "漢語 are the backbone of academic vocabulary in Japanese. The key words of almost every 論文 title and abstract (研究, 分析, 影響, 要因, 比較, 考察) are 漢語, so learning them pays off in reading as much as in writing. Each new 漢語 you learn often unlocks a whole family: 増加, [増大]{ぞうだい}, [急増]{きゅうぞう}; 調査, [調査票]{ちょうさひょう}, [実態調査]{じったいちょうさ}.",
      "Choosing well between 漢語 and 和語 is also a mark of a mature writer. Beginners of academic Japanese, native speakers included, often swing from too casual to too stiff. The aim is the middle: precise 漢語 where they help, formal 和語 where they are the natural word, and sentences a reader can follow on the first reading."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["The more 漢語, the more academic.","Too many 漢語 make text hard to read. Use them where they add precision."],["Every 和語 has one 漢語 that means the same thing.","調べる alone maps to 調査, 検索, 確認, 検討 and more. Choose by meaning."],["和語 are informal.","述べる, 示す, 用いる and 明らかにする are formal and very common in academic writing."],["Katakana words mean the same as the English word.","Check: アンケート, for example, comes from French and means a questionnaire survey."]]},
      "The Codex entry {{kango-and-wago}} has more pairs and the full picture."
    ]}
   ],
   try:[
    {id:"e1u5-l4-x1", type:"match", q:"Match each 和語 verb to the 漢語 verb most often used for it in a report.", pairs:[
      ["調べる (investigate)","調査する","調査 (ちょうさ) is systematic investigation, such as a survey."],
      ["増える","増加する","増加 (ぞうか): 人口が増加する."],
      ["比べる","比較する","比較 (ひかく): 二つの地域を比較する."],
      ["集める (data)","収集する","収集 (しゅうしゅう): データを収集する."],
      ["減る","減少する","減少 (げんしょう): 学生数が減少する."]
    ]},
    {id:"e1u5-l4-x2", type:"mcq", q:"Which sentence uses its 漢語 naturally?", options:[
      {t:"この結果が[生]{しょう}じた原因を考察する。", ok:true, why:"Right. 考察する is for careful analysis of results or problems, and a cause is exactly what you analyse."},
      {t:"辞書で単語の意味を調査した。", why:"調査 is systematic investigation, such as a survey. Looking a word up is 調べる."},
      {t:"週末の予定を考察した。", why:"Planning your weekend isn’t academic analysis. Use 考える."},
      {t:"表1は回答者の年齢を[表示]{ひょうじ}している。", why:"表示 means displaying, for example on a screen or label. A table 示す (shows) data: 表1は…を示している."}
    ]},
    {id:"e1u5-l4-x3", type:"sort", q:"Sort these academic words by origin.", buckets:["和語","漢語","外来語"], items:[
      {t:"述べる", b:0, why:"A native verb (のべる), formal and common in academic writing."},
      {t:"示す", b:0, why:"A native verb (しめす), “show”: 表1は…を示している."},
      {t:"異なる", b:0, why:"A native verb (ことなる), “differ”."},
      {t:"[傾向]{けいこう}", b:1, why:"Two kanji with on readings (けい + こう), “tendency”."},
      {t:"影響", b:1, why:"Two kanji with on readings (えい + きょう), “influence”."},
      {t:"分析", b:1, why:"Two kanji with on readings (ぶん + せき), “analysis”."},
      {t:"サンプル", b:2, why:"From English “sample”, in katakana."},
      {t:"インタビュー", b:2, why:"From English “interview”, in katakana."}
    ]},
    {id:"e1u5-l4-x4", type:"mcq", q:"Which word fits the gap? 「この調査の______は、大学1年生である。」 (“The ______ of this survey is first-year university students.”)", options:[
      {t:"対象", ok:true, why:"Right. 対象 (たいしょう) is the target or subject of a study: 調査の対象."},
      {t:"対照", why:"Same reading, but 対照 means contrast or comparison, as in 対照群 (a control group)."},
      {t:"対称", why:"Same reading, but 対称 means symmetry, as in a symmetrical shape."},
      {t:"大将", why:"Same reading, but 大将 means a general or a leader. Check kana-to-kanji conversion carefully."}
    ]},
    {id:"e1u5-l4-x5", type:"mcq", q:"Which version is clear **and** academic?", options:[
      {t:"留学生の日本語学習意欲が低下する要因を分析する。", ok:true, why:"Right. It keeps the 漢語 but uses a verb (低下する) to break up the chain, so it reads easily."},
      {t:"留学生日本語学習意欲低下要因を分析する。", why:"Six 漢語 squeezed into one compound: correct kanji, but very hard to read."},
      {t:"留学生が日本語を勉強したくなくなるわけを調べてみる。", why:"Clear, but spoken: したくなくなるわけ and 調べてみる belong in conversation."},
      {t:"留学生の日本語の学習の意欲の低下の要因の分析を行う。", why:"Six の in a row make the reader work hard to see which noun belongs to which."}
    ]},
    {id:"e1u5-l4-x6", type:"mcq", q:"Tomás wants to make 「表1は、回答者の年齢を示している。」 sound more academic by replacing 示す with a 漢語. What is the best advice?", options:[
      {t:"Keep 示す: it is a formal 和語 and the standard verb for what a table shows.", ok:true, why:"Right. 和語 aren’t automatically casual. 示す is exactly what academic writers use here."},
      {t:"Use 表示する, which is the 漢語 for 示す.", why:"表示する means display, as on a screen or a label. It doesn’t fit a table in a report."},
      {t:"Use [示唆]{しさ}する, because it contains the same kanji.", why:"示唆する means suggest or imply (結果は…を示唆している). It is a different meaning, not a formal version of 示す."},
      {t:"Use [陳述]{ちんじゅつ}する, because 漢語 always sound more academic.", why:"陳述 is a statement, especially in law. It doesn’t mean what a table shows."}
    ]}
   ],
   apply:{
    intro:"These tasks build your own academic word list. Free Japanese articles are available on J-STAGE, and Unit 6 shows how to find more.",
    tasks:[
     {t:"Collect ten 漢語 from a real text", how:[
       "Choose a short academic text in Japanese on a topic you like: a J-STAGE article abstract, a page of a 新書, or a university report guide.",
       "Write down ten 漢語 (two or more kanji, on readings) with their readings and meanings.",
       "For each, note the particle or pattern it appears with (データ**を**収集する, 人口**が**増加する), and the 和語 it could replace, if there is one."
     ], write:"漢語 (reading) – meaning – pattern in the text – 和語 partner…"},
     {t:"Find the formal 和語", how:[
       "In the same text, find five 和語 that are formal enough for academic writing (look for verbs such as 述べる, 示す, 用いる, 異なる, 基づく).",
       "Copy the phrase each one appears in."
     ], write:"和語 – phrase from the text…"},
     {t:"Upgrade a paragraph, carefully", how:[
       "Take the report-style paragraph you wrote in Lesson 3 (or any short paragraph).",
       "Replace two or three everyday 和語 with suitable 漢語, checking the meaning and the particle each time.",
       "Then read it aloud. If any sentence has become a long chain of 漢語 or of の, rewrite it with a verb."
     ], write:"Before… After… Words I changed and why… A sentence I simplified…"}
    ],
    proof:"Ten 漢語 with readings, meanings and patterns from a real text, five formal 和語 in context, and a paragraph upgraded with 漢語 without losing readability."
   },
   read:[
    {book:"koyobun", where:"“Ⅱ 用語の使い方” → “2 専門用語の扱い”, “3 外来語への対応” and “4 専門用語や外来語の説明の仕方” (pp. 22–24 of the version with commentary)", note:"Official advice on technical terms and loanwords for readers who are not specialists."},
    {book:"omu", where:"Section 4.5 “文章を読みやすくする”, the part on keeping words and spelling consistent (語句と表記の統一)", note:"Why a report should use the same word and the same spelling for the same thing throughout."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u5-l5", title:"Sentence endings, hedging, pointing words and connectors", minutes:55,
   hook:{q:"A student ends a report with 「この[政策]{せいさく}は[失敗]{しっぱい}だったと[思]{おも}う。」 (“I think this policy was a failure.”). What would a teacher most likely suggest?", options:["Make it stronger: 「[本当]{ほんとう}に[失敗]{しっぱい}だったと[強]{つよ}く[思]{おも}う。」","Show the reasons, and end with something like 「～と[考]{かんが}えられる」","Make it polite: 「[失敗]{しっぱい}だったと[思]{おも}います。」","Remove every opinion from the report"], answer:1, reveal:"**Show the reasons and use a more careful ending.** ～と思う sounds like a personal feeling, so the reader asks “why?”. Reports are expected to argue from evidence, and endings such as ～と考えられる present a judgement that follows from reasons. Opinions are allowed; they just need support. This lesson shows how sentence endings signal how sure you are, and how pointing words and connectors hold a text together."},
   goals:[
     "Explain how sentence endings (文末表現) show how certain a writer is",
     "Distinguish 断定 (stating as fact) from 推量 and other softer endings, and match the ending to the evidence",
     "Replace personal endings such as ～と思う with suitable report endings, and avoid both over-claiming and over-hedging",
     "Use pointing words (この, その, こうした) clearly in writing, and choose basic connectors (しかし, また, そのため, つまり, たとえば, 一方) by function"
   ],
   learn:[
    {h:"The verdict comes last", body:[
      {lead:"In Japanese, the verb comes at the end of the sentence, and so does the writer’s verdict. You can read a whole sentence about a cause and find out only in the last few characters whether the writer is sure, fairly sure or just guessing."},
      "Compare these three sentences. The first part is identical; only the ending changes.",
      {table:[["Sentence","What the ending says"],["[睡眠不足]{すいみんぶそく}が[成績]{せいせき}に[影響]{えいきょう}している。","It is a fact."],["睡眠不足が成績に影響していると[考]{かんが}えられる。","It is a reasoned interpretation."],["睡眠不足が成績に影響している[可能性]{かのうせい}がある。","It is a possibility."]]},
      "These sentence-final expressions are called [[bunmatsu-hyougen|文末表現]] ([文末表現]{ぶんまつひょうげん}, *bunmatsu hyōgen*). Choosing them well is how academic Japanese does [[hedging]]: showing exactly how strongly you claim something. In English, the same job is done by words such as *may*, *suggest* and *it is likely that*, spread through the sentence ([[stance]]). In Japanese, it is concentrated at the end."
    ]},
    {h:"断定 and softer endings", body:[
      "Japanese grammar distinguishes [[dantei|断定]] ([断定]{だんてい}, *dantei*), stating something as a fact, from [[suiryou|推量]] ([推量]{すいりょう}, *suiryō*), presenting it as a guess or a likelihood. Academic writing also uses endings in between, which present a judgement that follows from evidence.",
      {table:[["Ending","Meaning","Typical use"],["～である / ～している","It is / it does","Established facts; what your own data show"],["～ことが明らかになった","It became clear that","Reporting a clear result"],["～といえる","It can be said that","A conclusion you have argued for"],["～と考えられる","It is thought / one can reason that","An interpretation with reasons"],["～と[思]{おも}われる","It seems that","A softer, more impressionistic judgement"],["～であろう / ～だろう","Probably","A guess (推量)"],["～と[推測]{すいそく}される","It is inferred that","A guess from indirect evidence"],["～可能性がある","There is a possibility that","A possibility worth noting"],["～ようである","It appears that","An impression from what is observed"]]},
      "The られる in ～と考えられる and ～と思われる makes the thinking impersonal: not “I think” but “it can be thought”. That is part of why these endings suit reports.",
      {fig:'<svg viewBox="0 0 340 404"><text x="170" y="18" text-anchor="middle">How sure? A rough scale</text><path class="d-ink" d="M22 44 V384" stroke-width="2" fill="none"/><text class="s" x="22" y="38" text-anchor="middle">sure</text><text class="s" x="22" y="398" text-anchor="middle">less sure</text><rect class="d-rose" x="40" y="44" width="292" height="58" rx="8" stroke-width="2"/><text x="52" y="66">～である / 明らかになった</text><text class="s" x="52" y="88">stated as fact: your data, known facts</text><rect class="d-gold" x="40" y="112" width="292" height="58" rx="8" stroke-width="2"/><text x="52" y="134">～といえる</text><text class="s" x="52" y="156">a conclusion you have argued</text><rect class="d-lup" x="40" y="180" width="292" height="58" rx="8" stroke-width="2"/><text x="52" y="202">～と考えられる</text><text class="s" x="52" y="224">an interpretation with reasons</text><rect class="d-soft" x="40" y="248" width="292" height="58" rx="8" stroke-width="2"/><text x="52" y="270">～と思われる / ～であろう</text><text class="s" x="52" y="292">a softer judgement, a guess</text><rect class="d-sage" x="40" y="316" width="292" height="58" rx="8" stroke-width="2"/><text x="52" y="338">～可能性がある</text><text class="s" x="52" y="360">a possibility</text></svg>', alt:"A vertical scale from sure at the top to less sure at the bottom: ～である and 明らかになった for facts and data; ～といえる for an argued conclusion; ～と考えられる for an interpretation with reasons; ～と思われる and ～であろう for a softer judgement or guess; ～可能性がある for a possibility.", cap:"A rough guide, not a strict ranking. Writers and fields use these endings in slightly different ways; read 論文 in your field to see their habits."},
      {key:"Match the ending to the evidence: state your data as fact, give interpretations with ～と考えられる or ～といえる, and mark guesses and possibilities clearly."}
    ]},
    {h:"Matching the ending to the evidence", body:[
      "Here is how one invented survey result might be written up, with an ending for each kind of statement.",
      {ex:"Result (your data, stated as fact):\n[回答者]{かいとうしゃ}の[約]{やく}7[割]{わり}が、[朝食]{ちょうしょく}をとらない日があると[答]{こた}えた。\n\nInterpretation (with reasons):\nこの結果から、朝食をとらない[習慣]{しゅうかん}は、[多]{おお}くの学生にとって[珍]{めずら}しくないといえる。\n\nPossible cause (not tested):\nその[背景]{はいけい}には、[深夜]{しんや}のアルバイトがある可能性がある。", label:"One result, three endings"},
      "Notice the logic. The survey directly measured the answers, so the result is stated as fact. The interpretation follows from the result, so といえる fits. The cause was not measured at all, so it is only a possibility.",
      {h:"Two ways to get it wrong"},
      {table:[["Problem","Example","Why it is a problem"],["Over-claiming","✗ すべての大学生が朝食をとっていないのである。","The data came from one group of students and showed “some days”, not “never”."],["Over-hedging","✗ 朝食をとらない習慣が広がっている可能性があるのではないかと考えられるかもしれない。","Four softeners in a row. The reader can’t tell what the writer actually claims."]]},
      "Watch for boosters as well: 必ず (always, certainly), [絶対]{ぜったい}に (absolutely), [間違]{まちが}いなく (without doubt), [誰]{だれ}もが (everyone). Use them only when your evidence truly supports them, which in research is rare."
    ]},
    {h:"～と思う, ～と考える and ～かもしれない", body:[
      "～と思う is natural in conversation and in personal essays. In a report, most guides advise against it, because it presents a claim as a personal feeling rather than a judgement based on evidence. 「私は～と思う」 is weaker still.",
      {table:[["Instead of","Use","When"],["～と思う","～と考える","You state your own position, after giving reasons: 「本稿では、～と考える。」"],["～と思う","～と考えられる","You present an interpretation in an impersonal way"],["～かもしれない","～可能性がある","You mark a possibility; many guides find かもしれない conversational in a report"]]},
      {ex:"✗ この政策は失敗だったと思う。\n✓ 以上の[結果]{けっか}から、この政策は[当初]{とうしょ}の[目的]{もくてき}を[十分]{じゅうぶん}に[達成]{たっせい}できなかったと考えられる。", label:"From feeling to reasoned judgement"},
      "The better version does three things: it points to the evidence (以上の結果から), it says precisely what “failure” means (didn’t fully achieve its original aims), and it uses a careful ending.",
      "A few more notes. ～と考える (without られる) is how a writer states their own argued view, and it is common in conclusions. ～と考えられる on every sentence can make it unclear whose view it is, so vary your endings. Questions such as 「～のではないだろうか」 present a soft claim. You will see them in published papers, especially in the humanities and social sciences, but some teachers find them evasive as a closing claim, so many guides advise using them sparingly.",
      {tip:"Some assignments ask for your opinion or reflections (感想, 意見). Even then, many teachers expect reasons for each opinion. If a reflective section may use ～と思う, the assignment usually says so."}
    ]},
    {h:"Pointing words in writing", body:[
      "[[shiji-shi|指示語]] ([指示語]{しじご}, *shijigo*) are the こ・そ・あ・ど words: この, その, あの, これ, それ, こうした and so on. In conversation they point at things around you. In a text, they point back (or forward) to other parts of the text.",
      {list:["**この and その** both point back to something already mentioned. その is the neutral choice for “that (just mentioned)”, as in その結果 and その原因. この often points to something the writer is focusing on: この問題, この点.","**あの and あれ** point to something both people know from shared experience outside the text. They are normally **not** used to point back within an academic text.","**こうした and このような** (“such, of this kind”) are written style. こういう and こんな are spoken."]},
      {ex:"[睡眠不足]{すいみんぶそく}は[集中力]{しゅうちゅうりょく}の[低下]{ていか}につながる。こうした問題は、[試験期間]{しけんきかん}に[特]{とく}に[深刻]{しんこく}になる。", label:"こうした pointing back"},
      "Make every pointing word clear. 「これ」 on its own can point to several earlier things; 「この傾向」 or 「この問題」 tells the reader exactly which. When two things have been mentioned, [前者]{ぜんしゃ} (the former) and [後者]{こうしゃ} (the latter) can help. For parts of your own text, use [上記]{じょうき} (above), [以下]{いか} (below) and [前述]{ぜんじゅつ}の (mentioned earlier)."
    ]},
    {h:"Connectors: the basics", body:[
      "[[setsuzokushi|接続詞]] ([接続詞]{せつぞくし}, *setsuzokushi*) are connectors such as しかし and そのため. They tell the reader how a sentence relates to the one before: adding, contrasting, giving a result. They are Japanese [[transition-signal|transition signals]]. Unit 6 covers them in depth ({{japanese-signposts}}); here are the essentials for writing.",
      {table:[["Function","Written connector","Avoid in a report"],["Adding (添加)","また、さらに","あと"],["Contrary (逆接)","しかし","でも"],["Result (因果)","そのため、したがって","だから、なので"],["Restating (言い換え)","つまり、すなわち","—"],["Example (例示)","たとえば","—"],["Contrast between two sides (対比)","[一方]{いっぽう}","—"]]},
      "A connector at the start of a sentence is usually followed by 、: 「しかし、～」. Choose by meaning, not for decoration: しかし means what follows goes against what came before; そのため means what follows is a result. Using a connector on every sentence makes text feel mechanical; often the order of the sentences already shows the link.",
      {ex:"[近年]{きんねん}、大学の[授業]{じゅぎょう}でオンライン[教材]{きょうざい}を使う[機会]{きかい}が[増]{ふ}えている。こうした教材は、学生が自分のペースで学習できるという[利点]{りてん}をもつ。しかし、自宅で一人で学習を[続]{つづ}けることは[容易]{ようい}ではない。そのため、[教員]{きょういん}による[定期的]{ていきてき}な[声]{こえ}かけが[重要]{じゅうよう}であると考えられる。", label:"Pointing words and connectors working together"},
      "Each link is visible: こうした points back to オンライン教材, しかし turns to a difficulty, そのため gives the result, and the final ending と考えられる marks the last sentence as an interpretation.",
      {terms:["bunmatsu-hyougen","dantei","suiryou","shiji-shi","setsuzokushi"]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Reports must never contain opinions.","They contain claims and judgements, supported by reasons and evidence and given careful endings."],["The more hedges, the more academic.","Over-hedging hides your claim. Use one clear ending that matches your evidence."],["～と考えられる is always better than ～である.","Your own data and established facts are stated as fact. Hedges are for interpretations and guesses."],["あの can point back to an earlier sentence.","In academic writing, use この or その to point back."],["Every sentence needs a connector.","Use connectors where the link needs signalling; too many feel mechanical."]]},
      "The Codex entries {{sentence-endings-japanese}} and {{hedging-japanese}} gather these endings for quick reference."
    ]}
   ],
   try:[
    {id:"e1u5-l5-x1", type:"sort", q:"Sort these endings: which state something as fact, and which soften it?", buckets:["断定 (stated as fact)","Softened (judgement, guess or possibility)"], items:[
      {t:"～である", b:0, why:"The plain assertive ending: stated as fact."},
      {t:"～ことが明らかになった", b:0, why:"Reports a result as clearly established."},
      {t:"～を示している", b:0, why:"States what the data or a table shows, as fact."},
      {t:"～であろう", b:1, why:"The written form of だろう: a guess (推量)."},
      {t:"～と推測される", b:1, why:"“It is inferred”: a guess from indirect evidence."},
      {t:"～可能性がある", b:1, why:"Marks a possibility, not a fact."},
      {t:"～と思われる", b:1, why:"“It seems”: a soft, impersonal judgement."},
      {t:"～ようである", b:1, why:"“It appears”: an impression from what is observed."}
    ]},
    {id:"e1u5-l5-x2", type:"mcq", q:"Sione’s survey found that students who work late-night part-time jobs tend to have lower grades. He did not study why. Which ending suits his report best? 「深夜のアルバイトが成績に影響を与えている______。」", options:[
      {t:"可能性がある", ok:true, why:"Right. A link was found, but the cause wasn’t studied, so a possibility is exactly what he can claim."},
      {t:"と思う", why:"Personal and vague. It doesn’t tell the reader what the claim rests on."},
      {t:"ことは間違いない", why:"“There is no doubt” is far too strong. A tendency in one survey doesn’t prove a cause."},
      {t:"可能性があるのではないかと考えられるかもしれない", why:"Over-hedged: four softeners hide the claim. One clear ending is enough."}
    ]},
    {id:"e1u5-l5-x3", type:"mcq", q:"Which is the best report version of 「この政策は失敗だったと思う。」?", options:[
      {t:"以上の結果から、この政策は当初の目的を十分に達成できなかったと考えられる。", ok:true, why:"Right. It points to the evidence, says precisely what “failure” means and uses a careful, impersonal ending."},
      {t:"この政策は絶対に失敗だった。", why:"It removes 思う but over-claims with 絶対に, and gives no evidence."},
      {t:"この政策は失敗だったと思います。", why:"Polite, but still a personal feeling, and です・ます doesn’t fit a である report."},
      {t:"この政策は失敗だったかもしれないと思われる可能性もある。", why:"Over-hedged. The reader can’t tell what the writer actually claims."}
    ]},
    {id:"e1u5-l5-x4", type:"spot", q:"Raúl wrote this paragraph for a report. Tap each phrase with a **sentence-ending problem**: an over-claim or a personal ending. Some highlighted phrases are fine.", ask:"an ending problem", parts:[
      "調査の結果、回答者の約6割が週に3日以上アルバイトを",
      {t:"していた", flag:false, why:"Fine. This is his own survey data, so it is stated as fact."},
      "。この結果から、アルバイトの時間が学習時間に影響を与えている",
      {t:"可能性がある", flag:false, why:"Fine. The data show a pattern, not a cause, so a possibility is the right strength."},
      "。",
      {t:"アルバイトは必ず成績を下げる", flag:true, why:"An over-claim. 必ず (always) goes far beyond one survey at one university."},
      "と",
      {t:"思う", flag:true, why:"A personal ending. Give the reason and use a careful ending such as ～と考えられる or ～可能性がある."},
      "。ただし、本調査の対象は一つの大学の学生に",
      {t:"限られている", flag:false, why:"Fine. A fact about the study’s limits, stated plainly."},
      "。今後は、ほかの大学でも調査を行う",
      {t:"必要がある", flag:false, why:"Fine. 必要がある is a standard way to state what further research is needed."},
      "。"
    ]},
    {id:"e1u5-l5-x5", type:"mcq", q:"Which word is the most typical choice for a formal report? 「______問題は、多くの大学で[報告]{ほうこく}されている。」 (“Problems of this kind have been reported at many universities.”)", options:[
      {t:"こうした", ok:true, why:"Right. こうした (“such, of this kind”) is the written choice; このような also works."},
      {t:"こういう", why:"Grammatical, but spoken. In a report, use こうした or このような."},
      {t:"ああいう", why:"あ-words point to things known from shared experience, not back into the text, and ああいう is spoken."},
      {t:"あんな", why:"Spoken, and あ-words don’t point back within an academic text."}
    ]},
    {id:"e1u5-l5-x6", type:"match", q:"Match each connector to its function.", pairs:[
      ["しかし","Contrary: what follows goes against what came before (逆接)","しかし introduces something that runs against the previous sentence."],
      ["したがって","Result: what follows is a consequence (因果)","したがって (like そのため) introduces a result or conclusion."],
      ["たとえば","Example (例示)","たとえば introduces an example."],
      ["つまり","Restating in other words (言い換え)","つまり restates or sums up what was just said."],
      ["また","Adding another point (添加)","また adds a further point of the same kind."]
    ]},
    {id:"e1u5-l5-x7", type:"mcq", q:"Which connector fits the gap? 「アンケートの[回答率]{かいとうりつ}は高かった。______、[自由記述欄]{じゆうきじゅつらん}への回答は少なかった。」 (“The response rate was high. ______, few people wrote in the free-answer box.”)", options:[
      {t:"しかし", ok:true, why:"Right. A high response rate would lead you to expect many free answers; there were few, which goes against that expectation."},
      {t:"したがって", why:"したがって signals a result. A high response rate doesn’t cause few free answers."},
      {t:"たとえば", why:"たとえば introduces an example, but the second sentence isn’t an example of the first."},
      {t:"つまり", why:"つまり restates the same point, but the second sentence says something different."}
    ]},
    {id:"e1u5-l5-x8", type:"order", q:"Put these sentences in order to make a coherent paragraph. Use the pointing words and connectors as clues.", items:[
      {t:"近年、大学の授業でオンライン教材を使う機会が増えている。", why:"It introduces the topic, オンライン教材, with no pointing word or connector, so it comes first."},
      {t:"こうした教材は、学生が自分のペースで学習できるという利点をもつ。", why:"こうした教材 points back to オンライン教材, so it must follow the first sentence."},
      {t:"しかし、自宅で一人で学習を続けることは容易ではない。", why:"しかし turns against the advantage just mentioned, so it follows the 利点 sentence."},
      {t:"そのため、教員による定期的な声かけが重要であると考えられる。", why:"そのため gives a result of the difficulty, and と考えられる marks a concluding interpretation."}
    ]}
   ],
   apply:{
    intro:"These tasks use real academic Japanese and your own claims. J-STAGE abstracts are a good free source of short texts.",
    tasks:[
     {t:"Collect the endings of a real 論文", how:[
       "Open a Japanese article abstract or the 考察 (discussion) section of a 論文 in your field.",
       "Copy the last few words of ten sentences.",
       "Mark each one: fact (断定), interpretation, guess or possibility. Which endings does this writer use most? Where are the facts, and where are the hedges?"
     ], write:"Ending – type – what the sentence claims… The writer’s favourite endings…"},
     {t:"Fix your own ～と思う", how:[
       "Search your own Japanese writing for と思う and と思います.",
       "For three of them, write down the evidence or reason behind the claim, then rewrite the sentence with an ending that matches that evidence.",
       "If you can’t find any evidence for a claim, note that too: it may need more research or a softer ending."
     ], write:"Original… My evidence… Rewritten…"},
     {t:"Build a paragraph with pointing words and connectors", how:[
       "Write a four-sentence paragraph in the である style about a change you have noticed in your field or community.",
       "Use at least one pointing word (この, その or こうした), two different connectors chosen by function, and one careful ending in the last sentence.",
       "Underline each pointing word and check that its reference is clear."
     ], write:"My paragraph… Pointing words and what they refer to… Connectors and their functions…"}
    ],
    proof:"Ten sentence endings from a real text classified by strength, three of your own ～と思う sentences rewritten with matching endings, and a four-sentence paragraph using pointing words and connectors."
   },
   read:[
    {book:"omu", where:"Section 2.1 “論理的にわかりやすい客観的な文章をめざす” (p. 4)", note:"A university guide on objective, logical writing."},
    {book:"koyobun", where:"“Ⅲ 伝わる公用文のために” → “3 文の書き方” (pp. 32–33 of the version with commentary)", note:"Background reading: official advice on writing clear sentences, written for government documents."}
   ]
  }
  ],
  checkpoint:["e1u5-q02","e1u5-q05","e1u5-q08","e1u5-q11","e1u5-q14","e1u5-q17","e1u5-q20","e1u5-q24","e1u5-q29","e1u5-q33","e1u5-q38","e1u5-q42"],
  codex:[
   {id:"academic-japanese", title:"Academic Japanese (アカデミック・ジャパニーズ)", aka:["アカデミック・ジャパニーズ","academic Japanese","Japanese for academic purposes"], tags:["academic japanese","foundations"],
    summary:"The Japanese of university study and research: the grammar you know, used in a consistent written style with precise words and careful sentence endings.",
    levels:{
     starter:[
      "**Academic Japanese** is the Japanese you need to study at a university in Japanese: reading research papers (論文) and textbooks, writing reports (レポート) and a graduation thesis (卒業論文), following lectures, speaking in seminars (ゼミ) and presentations, and writing to teachers.",
      "It isn’t a separate language. It uses everyday grammar, but in a different register, like the difference between a chat with a friend and a letter to an office.",
      "Three layers change most: the **sentence style** (reports use the plain である style, not polite です・ます), the **choice of words** (written words such as しかし instead of spoken でも, and many 漢語 such as 調査), and the **sentence endings**, which show how sure the writer is (～と考えられる rather than ～と思う).",
      "Academic Japanese is new for almost everyone, including students who grew up speaking Japanese. That is why many universities in Japan teach report writing in the first year.",
      {key:"Same grammar, different register: one written style, precise words and careful endings."}
     ],
     builder:[
      "A useful map of what changes between everyday and academic Japanese:",
      {table:[["Layer","Everyday","Academic"],["Sentence style (文体)","です・ます or casual speech","である style for reports and theses"],["Register (書き言葉 vs 話し言葉)","でも、すごく、～てる","しかし、非常に、～ている"],["Word origin","Many everyday 和語","More 漢語, plus formal 和語"],["Sentence endings (文末表現)","～と思う","～と考えられる, ～といえる, ～可能性がある"],["Text links","あと, だから, なので","また, そのため, したがって; この, その, こうした"]]},
      "The sentence style depends on whether the text speaks to a particular person. Reports, theses and summaries speak to no one in particular and use the plain である style. Emails to teachers, presentations and conversations speak to someone and use です・ます, often with keigo ({{keigo-system}}).",
      "Japanese school writing (作文, 感想文) is usually personal and often in です・ます. A university guide from Osaka Metropolitan University contrasts this with reports, which use the 「だ・である」 style, follow set rules and leave out personal feelings in favour of evidence.",
      "Furigana (small kana over kanji) are common in learner materials but rare in academic texts for adults. Learning academic words as whole compounds with their readings, and using a dictionary tool while reading, is how most people build the vocabulary ({{japanese-reading-tools}})."
     ],
     pro:[
      "The term アカデミック・ジャパニーズ is used mainly in Japanese-as-a-second-language teaching (日本語教育), for courses that prepare international students for university study. For students who grew up with Japanese, the same skills are taught under names such as 初年次教育 (first-year education), アカデミック・ライティング or レポートの書き方.",
      "Register choices interact. A presentation uses です・ます **and** written vocabulary (しかし、非常に重要です); a report uses the plain style **and** written vocabulary. Politeness and register are separate settings, and learners who speak polite Japanese well often still need to learn the written vocabulary.",
      "Official writing guidance offers a useful parallel. 公用文作成の考え方 (Council for Cultural Affairs, 2022) assigns the plain style (常体) to laws, public notices (告示) and directives (訓令), and the polite style (敬体) to notifications, requests and replies to a particular reader, and it requires one style within a sentence or document. It is not a guide to academic writing, but teachers apply the same logic.",
      "Conventions vary by field and by teacher. Some first-year courses accept です・ます reports; fields differ in how often they write 私 or 筆者, how heavily they hedge and which loanwords they accept. The safest habit is to read recent 論文 in your field and follow your course’s instructions.",
      "Units 5–8 of this elective cover style and words (Unit 5), reading ({{reading-japanese-papers}}), writing reports and theses ({{japanese-report-structure}}) and presentations, seminars and keigo ({{japanese-presentations}})."
     ]
    },
    related:["desu-masu-and-dearu","written-vs-spoken-japanese","kango-and-wago","sentence-endings-japanese"],
    read:[{book:"omu", where:"Section 2 “アカデミック・ライティングとは” (p. 4)"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方, Section 2 “アカデミック・ライティングとは”", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"},{t:"Agency for Cultural Affairs: 公用文作成の考え方（文化審議会建議）", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf"}],
    checked:"2026-11"},
   {id:"desu-masu-and-dearu", title:"です・ます体 and である体", aka:["敬体","常体","普通体","polite style","plain style","dearu style","desu-masu style"], tags:["academic japanese","style","grammar"],
    summary:"The two sentence styles of Japanese: polite です・ます for texts that speak to a person, plain である for reports and theses; how to convert between them and keep one style.",
    levels:{
     starter:[
      "Every Japanese sentence ends in a polite or a plain style. **です・ます体** (polite, also called 敬体) ends sentences in です or ます. **である体** (plain, a written form of 常体 or 普通体) ends noun sentences in である and verb sentences in the plain form.",
      "Use です・ます when the text speaks to a particular person: emails to teachers, speaking in a presentation, talking to a teacher. Use である for texts that present ideas to any reader: reports, theses, summaries.",
      "The plain style is not rude in writing. It is neutral and impersonal.",
      "The golden rule is to **keep one style in a text**. Mixing です・ます and である sentences is a common error in student reports.",
      {key:"Speaks to a person: です・ます. Presents ideas to any reader: である. Never mix them in one text."}
     ],
     builder:[
      "Converting from です・ます to である depends on the word before the ending:",
      {table:[["Word type","です・ます","である"],["Noun / な-adjective","重要です / 重要ではありません","重要である / 重要ではない"],["Noun, past","原因でした","原因であった"],["い-adjective","高いです / 高くありません","高い / 高くない"],["Verb","減少します / 減少しました","減少する / 減少した"],["Guess","あるでしょう","あるであろう (あるだろう)"],["Explanation","～のです","～のである"],["Question","～でしょうか","～だろうか / ～であろうか"]]},
      "The most common errors are ✗高いである and ✗減少するである: い-adjectives and verbs take nothing in the plain style. である attaches only to nouns and な-adjectives.",
      "Direct quotations keep their original style: 「時間がありません」と答えた is fine in a である report.",
      "Some teachers allow です・ます reports, especially short reflections or first-year assignments, and many books for general readers (新書) use です・ます. The assignment instructions decide; if they say nothing, use である and ask.",
      "Forms that speak to the reader, such as ～ましょう and ～てください, don’t belong in a である report. Rewrite them as plain statements of what the text does: 「以下では、～について検討する。」",
      {tip:"To proofread, read only the last few characters of each sentence, top to bottom. A stray ～ます or ～でした stands out at once."}
     ],
     pro:[
      "Terminology varies. Style guides and school grammar say 敬体 and 常体; Japanese-language teaching says 丁寧体 (or です・ます体) and 普通体. Within the plain style, writers distinguish だ体 and である体. Both are 常体, so using だ in a である report is not the です・ます/である mixing error, but many guides recommend である for noun and な-adjective endings in academic writing because it sounds more formal and even.",
      "公用文作成の考え方 (2022), section Ⅲ-1 文体の選択, gives the official version of the rule: laws, public notices (告示) and directives (訓令) use 常体（である体）; notifications, requests, inquiries and replies addressed to a particular reader use 敬体（です・ます体）; and within one sentence or document, use one or the other.",
      "Some details professionals watch:",
      {list:["**のである** explains or emphasises. Overused, it sounds heavy and insistent; save it for key points.","**であろう** is the written form of だろう and suits academic hedging; it attaches to verbs and adjectives too (増加するであろう, 高いであろう).","**Forms that address the reader** (～ましょう, ～てください) don’t fit a である report; rewrite them (以下では～について検討する).","**Polite past negatives**: ～ませんでした → ～なかった; ～ではありませんでした → ではなかった. ～なかったです is a casual polite form and not a report ending."]},
      "A quick proofreading method is to read only the sentence endings, top to bottom. Style switches stand out immediately."
     ]
    },
    related:["academic-japanese","written-vs-spoken-japanese","sentence-endings-japanese"],
    read:[{book:"koyobun", where:"“Ⅲ 伝わる公用文のために” → “1 文体の選択” (p. 30 of the version with commentary)"}],
    sources:[{t:"Agency for Cultural Affairs: 公用文作成の考え方（文化審議会建議）, Ⅲ-1 文体の選択", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf"},{t:"Osaka Metropolitan University: アカデミック・ライティング入門, 2.2 作文・感想文とは異なる", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"},
   {id:"written-vs-spoken-japanese", title:"書き言葉 and 話し言葉", aka:["written Japanese","spoken Japanese","kakikotoba","hanashikotoba","ら抜き言葉"], tags:["academic japanese","register","vocabulary"],
    summary:"Pairs of spoken and written words, spoken contractions, ら抜き言葉, 「とか」 and 「なので」, written patterns such as ～し、, and pointing words in writing.",
    levels:{
     starter:[
      "Japanese has many word pairs where one belongs to speech (**話し言葉**) and one to writing (**書き言葉**). In a report, use the written one: しかし, not でも; 非常に, not すごく; 多く, not いっぱい.",
      "This is separate from politeness. 「でも、すごく大事なんです」 is polite but spoken; 「しかし、非常に重要である」 is plain and written. A report needs the plain style and written words.",
      "Speech also shortens forms: ～てる for ～ている, ～じゃない for ～ではない, ～なきゃ for ～なければならない. Use the full forms in writing.",
      "And speech drops particles (データ集めた). Writing keeps them (データを集めた).",
      "Two small words need special care. ～とか (as in SNSとかテレビとか) is spoken listing; write ～や～など. And starting a sentence with なので is spoken; write そのため or したがって.",
      "None of the spoken forms are “wrong Japanese”. They are right in conversation, and you will hear them from professors in lectures. They just don’t fit a formal report.",
      {key:"In a report: plain style and written words, full forms and all the particles."}
     ],
     builder:[
      {table:[["話し言葉","書き言葉"],["でも","しかし"],["だから / なので (sentence start)","そのため / したがって"],["～けど","～が"],["すごく / とても","非常に / 極めて"],["ちょっと","やや / 少し"],["いっぱい","多く / 多数の"],["やっぱり","やはり"],["たぶん","おそらく"],["どうして / なんで","なぜ"],["一番","最も"],["～みたいだ","～ようだ"],["～とか～とか","～や～など"],["あと","また"]]},
      "**ら抜き言葉**: the potential of る-verbs and 来る is ～られる (見られる, 来られる). Dropping ら (見れる, 来れる) is very common in speech, but formal writing uses the full form. う-verbs make potentials with ～える (書ける, 行ける); these are standard. Test: if the “let’s” form ends in ～よう (見よう), the potential needs ら.",
      "**なので**: starting a sentence with なので is spoken; use そのため or したがって. Inside a sentence, ～なので is grammatical, but many guides prefer ～ため or ～ことから in reports.",
      "**Written patterns**: the 連用中止 form joins clauses without て (調査を行い、結果をまとめた); ～ずに replaces ～ないで (確認せずに); sentence-final ね, よ and ！ are left out.",
      "**Contractions**: ～てる → ～ている, ～ちゃう → ～てしまう, ～じゃない → ～ではない, ～なきゃ → ～なければならない. Searching a draft for てる, じゃ, けど and とか catches many of them quickly."
     ],
     pro:[
      "Register is a continuum, not two boxes. とても is acceptable in some careful writing, though 非常に is more typical of reports; ～が and ～けれども differ in formality more than in meaning. In practice, the strongest academic choice is often to replace an intensifier with a fact: 2倍, 約3割.",
      "ら抜き言葉 are a well-known change in progress in Japanese: they make the potential distinct from the passive and honorific ～られる. The Agency for Cultural Affairs’ national survey on Japanese (国語に関する世論調査) has asked about them, for example in its FY2015 survey. Their status in speech is debated; in formal writing the ～られる forms remain the expectation. する has the potential できる, so 検討できる is standard.",
      "Shortened forms are called 縮約形: ～ている → ～てる (sometimes called い抜き言葉), ～ていく → ～てく, ～てしまう → ～ちゃう, ～ではない → ～じゃない, ～なければ → ～なきゃ, ～のだ → ～んだ.",
      {h:"Pointing words in writing"},
      "In a text, 指示語 point to other parts of the text. この and その point back (その結果, この点); あの and あれ refer to shared experience outside the text and are normally not used to point back in academic writing. こうした and このような are written; こういう and こんな are spoken. Replace a vague これ with a noun (この傾向) when it could refer to more than one thing; 前者・後者, 上記, 以下 and 前述の help for longer references."
     ]
    },
    related:["desu-masu-and-dearu","kango-and-wago","academic-japanese"],
    read:[{book:"omu", where:"Section 4.5 “文章を読みやすくする”"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門, Section 2 “アカデミック・ライティングとは”", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"},{t:"NDL Current Awareness Portal: 文化庁、平成27年度「国語に関する世論調査」の結果を公表", url:"https://current.ndl.go.jp/car/32590"}],
    checked:"2026-11"},
   {id:"kango-and-wago", title:"漢語 and 和語", aka:["kango","wago","gairaigo","外来語","Sino-Japanese words","native Japanese words"], tags:["academic japanese","vocabulary"],
    summary:"The three main sources of Japanese words, why academic Japanese uses many 漢語, how to swap 和語 for 漢語 carefully, and why formal 和語 still matter.",
    levels:{
     starter:[
      "Japanese words come from three main sources. **和語** are native Japanese words (調べる, 増える, 述べる). **漢語** are words of Chinese origin, usually two kanji read with on readings (調査, 増加, 分析). **外来語** are loanwords, mostly in katakana (データ, アンケート).",
      "Academic Japanese uses many 漢語, because they are compact, precise and formal: 人口が増える becomes 人口が増加する, which turns easily into the noun 人口の増加.",
      "But 和語 are not wrong. 述べる (state), 示す (show), 用いる (use) and 明らかにする (make clear) are formal 和語 found in almost every academic text.",
      "Swapping needs care, because a 漢語 usually has a narrower meaning. 考察する means analysing a result or a problem, so 原因を考察する is natural but you would never 考察 your weekend plans. Learn each 漢語 with an example phrase and its particle.",
      "Too many 漢語 in a row are hard to read. The goal is precise, readable Japanese, not the largest possible number of kanji.",
      {key:"Use 漢語 where they add precision; keep the formal 和語 academic writing relies on."}
     ],
     builder:[
      {table:[["和語","漢語 (+する)","Example"],["調べる","調査する","実態を調査する"],["増える / 減る","増加する / 減少する","利用者が増加している"],["考える","考察する","原因を考察する"],["比べる","比較する","二つの地域を比較する"],["集める","収集する","データを収集する"],["変わる","変化する","意識が変化した"],["使う","使用する / 利用する","質問紙を使用する"],["答える","回答する","アンケートに回答する"]]},
      "The swaps are not one-to-one. 考察する is analytical discussion (原因を考察する), not everyday thinking (✗週末の予定を考察する). 調査する is systematic investigation, not looking up a word. 調べる alone can correspond to 調査, 検索 (search), 確認 (check), 検討 (examine) or 分析 (analyse).",
      "Learn the particles: 人口が増加する, データを収集する, アンケートに回答する. 増加する, 減少する and 変化する are mostly used intransitively; to increase something, 増やす or ～を増加させる is safest.",
      "Too many 漢語 in a row make text hard to read (✗留学生日本語学習意欲低下要因). Break chains with a verb: 留学生の日本語学習意欲が低下する要因.",
      "Formal 和語 to keep: 述べる (state), 示す (show), 明らかにする (reveal), 用いる (use), 異なる (differ), 基づく (be based on), 捉える (view as), 扱う (deal with), 及ぼす (exert). Loanwords (データ, サンプル, インタビュー) follow your field’s usage; define unfamiliar ones on first use."
     ],
     pro:[
      "Word-origin categories (語種) also include **混種語**, words that combine types: データ分析 (外来語 + 漢語), アルバイト先 (外来語 + 和語). The categories describe origin, not formality: 述べる and 及ぼす are 和語 but formal, while some 漢語 are everyday words (勉強, 大事).",
      "Because 漢語 draw on a limited set of on readings, homophones are common: 対象 (subject of a study), 対照 (contrast; 対照群, a control group) and 対称 (symmetry) are all たいしょう; 機会 and 機械 are both きかい. Kana-to-kanji conversion often offers the wrong one, so proofread for meaning. In speech, people disambiguate with alternative readings: 化学 as ばけがく, 私立 as わたくしりつ, 市立 as いちりつ.",
      "外来語 need care. Their meanings may differ from the source word (アンケート, from French *enquête*, is a questionnaire survey), and fields differ in whether they prefer a loanword or a 漢語. 公用文作成の考え方 (2022) has sections on handling loanwords and explaining technical terms (Ⅱ-3, Ⅱ-4); its general principle, writing so the reader understands, applies to reports too. Define any unfamiliar loanword on first use.",
      "For reading, knowing that most academic compounds are 漢語 with on readings, and that many end in productive suffixes (～化, ～性, ～的), lets you guess new words: see {{reading-japanese-papers}}."
     ]
    },
    related:["written-vs-spoken-japanese","academic-japanese","noun-phrases-nominalisation"],
    read:[{book:"koyobun", where:"“Ⅱ 用語の使い方” → 2–4 (pp. 22–24 of the version with commentary)"}],
    sources:[{t:"Agency for Cultural Affairs: 公用文作成の考え方（文化審議会建議）, Ⅱ 用語の使い方", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf"}],
    checked:"2026-11"},
   {id:"sentence-endings-japanese", title:"Sentence endings in academic Japanese (文末表現)", aka:["文末表現","bunmatsu hyogen","sentence-final expressions"], tags:["academic japanese","grammar","stance"],
    summary:"What the last few words of a Japanese sentence do in academic writing: style, certainty, explanation, questions, and replacing ～と思う.",
    levels:{
     starter:[
      "In Japanese, the verb comes last, so the end of the sentence carries the writer’s verdict. These endings are called **文末表現**.",
      "Compare: 睡眠不足が成績に影響している (a fact), 影響していると考えられる (a reasoned interpretation), 影響している可能性がある (a possibility). Same start, three different claims.",
      "In reports, the ending ～と思う (“I think”) is usually avoided, because it sounds like a personal feeling. Give your reasons and use ～と考える (your argued view) or ～と考えられる (an interpretation).",
      "The ending also shows the style: ～である and plain verbs for reports, ～です and ～ます for emails and presentations.",
      "When you read, look at the end of each sentence first. It tells you whether the writer is reporting a fact, interpreting it or only guessing, which is exactly what you need to know when you summarise or cite the text.",
      {key:"Read the end of every sentence: it tells you the style and how sure the writer is."}
     ],
     builder:[
      {table:[["Ending","Use"],["～である / plain verb","Facts, your own data"],["～ことが明らかになった","A clear result"],["～といえる","A conclusion you have argued"],["～と考えられる","An interpretation with reasons"],["～と思われる","A softer judgement"],["～であろう / ～と推測される","A guess"],["～可能性がある","A possibility"],["～のである","Explanation or emphasis (use sparingly)"],["～だろうか / ～のではないだろうか","A question to answer, or a soft claim"]]},
      "Replacing personal endings: ～と思う → ～と考える (own position) or ～と考えられる; ～かもしれない → ～可能性がある; ～と思います → never in a である report.",
      "Vary your endings. A paragraph where every sentence ends in ～と考えられる hides which claims are facts and whose view each is. State facts as facts; reserve hedged endings for interpretations.",
      "のである deserves a note: it presents a sentence as an explanation or a key conclusion (「つまり、問題は時間ではなく方法にあるのである。」). Used once at a turning point it is effective; used on every sentence it sounds heavy.",
      "Questions in reports usually end in 。 and are answered at once: 「では、なぜこのような差が生じたのだろうか。」 followed by the explanation."
     ],
     pro:[
      "The られる in ～と考えられる and ～と思われる is often described as 自発 (spontaneous): the thought “arises naturally” rather than being the writer’s personal act. That impersonal tone is why these endings are so common in academic Japanese, and also why overusing them can blur responsibility for a claim. Many writers use ～と考える or 本稿では～と主張する for their central claim, and ～と考えられる for interpretations along the way.",
      "Reporting other people’s claims uses different endings, with verbs that show your stance towards the source: ～と述べている, ～と指摘している, ～と主張している. These are covered in Unit 7 ({{quoting-in-japanese}}).",
      "Rhetorical questions such as 「では、なぜこのような差が生じたのだろうか。」 introduce the next step of an argument and are normally answered right away. 「～のではないだろうか」 as a closing claim is common in some humanities and social science writing, but some teachers find it evasive; use it sparingly.",
      "Fields vary in how strongly they claim. Experimental papers often state results flatly and hedge the discussion; humanities writing may hedge more throughout. Reading recent 論文 in your field is the best guide."
     ]
    },
    related:["hedging-japanese","desu-masu-and-dearu","academic-japanese"],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門, 2.1 論理的にわかりやすい客観的な文章をめざす", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"},
   {id:"hedging-japanese", title:"Hedging in academic Japanese (断定 and 推量)", aka:["断定","推量","hedging in Japanese","certainty"], tags:["academic japanese","stance","hedging"],
    summary:"How academic Japanese matches claims to evidence: 断定 for facts and data, careful endings for interpretations and guesses, and avoiding both over-claiming and over-hedging.",
    levels:{
     starter:[
      "**Hedging** means showing exactly how strongly you claim something. In Japanese it happens mostly at the end of the sentence.",
      "**断定** (*dantei*) states something as fact: ～である, ～している. Use it for established facts and for what your own data show: 回答者の約7割が…と答えた.",
      "**推量** (*suiryō*) presents a guess: ～であろう, ～と推測される. Between them sit judgements based on reasons: ～といえる, ～と考えられる. And ～可能性がある marks a possibility.",
      "Match the ending to the evidence. Data → fact. Interpretation → ～と考えられる or ～といえる. Untested cause → ～可能性がある.",
      "Hedging is not weakness. Careful endings show that you know the limits of your evidence, which is what readers trust. The aim is the right strength for each claim: not too strong, and not so soft that the reader can’t tell what you claim.",
      "In reports, the personal ending ～と思う is usually replaced: by ～と考える for your own argued view, or ～と考えられる for an interpretation.",
      {key:"The stronger the ending, the stronger the evidence it needs."}
     ],
     builder:[
      "Two opposite mistakes:",
      {list:["**Over-claiming**: ✗すべての大学生が朝食をとっていないのである, from a survey of one group. Watch boosters such as 必ず, 絶対に, 間違いなく and 誰もが.","**Over-hedging**: ✗～可能性があるのではないかと考えられるかもしれない. Four softeners hide the claim; one well-chosen ending is enough."]},
      "A worked example from one invented survey:",
      {ex:"Fact: 回答者の約7割が、朝食をとらない日があると答えた。\nInterpretation: この結果から、朝食をとらない習慣は、多くの学生にとって珍しくないといえる。\nPossibility: その背景には、深夜のアルバイトがある可能性がある。", label:"Matching endings to evidence"},
      "The same idea appears in English academic writing as hedges and boosters ({{hedging-and-boosting}}); in Japanese the work is concentrated at the sentence end.",
      "A practical routine: for each claim in your draft, ask “what exactly is my evidence?” If it is your own data, state it plainly. If it is your reasoning from the data, use ～といえる or ～と考えられる. If it is a possible explanation you didn’t test, use ～可能性がある, and consider saying how it could be tested."
     ],
     pro:[
      "The categories overlap. ～と考えられる is not 推量 in the strict grammatical sense; it presents a judgement as one that can reasonably be made. ～と思われる is softer and more impressionistic. ～といえる asserts a conclusion drawn from what has been shown. ～ようだ / ～ようである infers from observation; ～らしい (hearsay or inference) is rarer in academic prose. Any ranking of these endings is approximate, and writers and fields use them differently.",
      "Hedging also happens before the ending: 必ずしも～とは限らない (not necessarily), 一概に～とはいえない (cannot be said across the board), ～の一因 (one cause of), 一部の (some), 傾向がある (there is a tendency).",
      "Limitations sections use hedging constructively: 本調査の対象は一つの大学に限られている。そのため、結果を一般化するには慎重である必要がある。 Stating limits plainly (断定) and drawing cautious conclusions from them is a sign of strong academic writing, not weakness.",
      "In English-language research, a similar balance is described as matching the strength of a claim to the evidence ([[hedging]], [[booster]]). Translating between the two languages, expect differences: a Japanese ～と考えられる may correspond to English “this suggests” or simply a well-supported plain statement, depending on context."
     ]
    },
    related:["sentence-endings-japanese","hedging-and-boosting","academic-japanese"],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門, Section 2 “アカデミック・ライティングとは”", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"academic-japanese-term", term:"Academic Japanese (アカデミック・ジャパニーズ)", def:"The Japanese used for university study and research: reading papers, writing reports and theses, following lectures, and speaking in seminars and presentations. Same grammar as everyday Japanese, in a different register.", codex:"academic-japanese"},
   {id:"desu-masu-tai", term:"です・ます体 (desu-masu-tai)", def:"The polite sentence style, ending in です or ます; also called 敬体. Used for texts and speech that address a particular person, such as emails to teachers and presentations.", codex:"desu-masu-and-dearu"},
   {id:"dearu-tai", term:"である体 (dearu-tai)", def:"The plain written style in which noun and な-adjective sentences end in である and verbs end in their plain form. The usual style for reports, theses and summaries.", codex:"desu-masu-and-dearu"},
   {id:"futsuu-tai", term:"普通体 (futsūtai)", def:"The plain style of Japanese (also called 常体), without です or ます. In writing it appears as である体 or だ体.", codex:"desu-masu-and-dearu"},
   {id:"kakikotoba", term:"書き言葉 (kakikotoba)", def:"Written language: the words and forms typical of formal writing, such as しかし, 非常に and ～ている.", codex:"written-vs-spoken-japanese"},
   {id:"hanashikotoba", term:"話し言葉 (hanashikotoba)", def:"Spoken language: the words and forms typical of conversation, such as でも, すごく and ～てる. Correct in speech, but out of place in a formal report.", codex:"written-vs-spoken-japanese"},
   {id:"kango", term:"漢語 (kango)", def:"Words of Chinese origin, usually two or more kanji read with on readings, such as 調査, 増加 and 分析. Common in academic writing because they are compact and precise.", codex:"kango-and-wago"},
   {id:"wago", term:"和語 (wago)", def:"Native Japanese words, usually read with kun readings or written in kana, such as 調べる, 述べる and 示す. Many are formal and standard in academic writing.", codex:"kango-and-wago"},
   {id:"gairaigo", term:"外来語 (gairaigo)", def:"Loanwords from languages other than Chinese, mostly written in katakana, such as データ and アンケート.", codex:"kango-and-wago"},
   {id:"konshugo", term:"混種語 (konshugo)", def:"A word that combines different kinds of words, such as データ分析 (a loanword and a 漢語).", codex:"kango-and-wago"},
   {id:"kanji-compound", term:"Kanji compound (熟語)", def:"A word written with two or more kanji, such as 研究 or 考察. Most academic 漢語 are kanji compounds.", codex:"kango-and-wago"},
   {id:"bunmatsu-hyougen", term:"文末表現 (bunmatsu hyōgen)", def:"The expressions at the end of a Japanese sentence, such as ～である, ～と考えられる or ～可能性がある, which show the style and how sure the writer is.", codex:"sentence-endings-japanese"},
   {id:"dantei", term:"断定 (dantei)", def:"Stating something as a fact, with endings such as ～である or a plain verb. Used for established facts and what your own data show.", codex:"hedging-japanese"},
   {id:"suiryou", term:"推量 (suiryō)", def:"Presenting something as a guess or likelihood, with endings such as ～であろう or ～と推測される.", codex:"hedging-japanese"},
   {id:"setsuzokushi", term:"接続詞 (setsuzokushi)", def:"A connector such as しかし, また or そのため that shows how a sentence relates to the one before.", codex:"japanese-signposts"},
   {id:"shiji-shi", term:"指示語 (shijigo)", def:"Pointing words, the こ・そ・あ・ど words such as この, その and こうした. In academic writing they point back to earlier parts of the text, mostly with こ and そ.", codex:"written-vs-spoken-japanese"},
   {id:"ra-nuki-kotoba", term:"ら抜き言葉 (ra-nuki kotoba)", def:"Potential forms with the ら dropped, such as 見れる for 見られる or 来れる for 来られる. Very common in speech; formal writing uses the full ～られる forms.", codex:"written-vs-spoken-japanese"},
   {id:"shukuyakukei", term:"縮約形 (shukuyakukei)", def:"Shortened spoken forms, such as ～てる for ～ている, ～じゃない for ～ではない and ～なきゃ for ～なければ.", codex:"written-vs-spoken-japanese"},
   {id:"renyou-chuushi", term:"連用中止 (ren’yō chūshi)", def:"Joining two clauses with a verb’s ます-stem (or an い-adjective’s く form) and a comma instead of the て-form, as in 調査を行い、結果をまとめた. Typical of written style.", codex:"written-vs-spoken-japanese"},
   {id:"furigana", term:"Furigana (振り仮名)", def:"Small kana printed next to kanji (above them in horizontal text) to show their reading.", codex:"academic-japanese"},
   {id:"yomigana", term:"Yomigana (読み仮名)", def:"A reading of a word written in kana, wherever it is shown: as furigana, in brackets, or in a separate field on a form.", codex:"academic-japanese"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e1u5-q01", lesson:"e1u5-l1", level:1, q:"What is academic Japanese (アカデミック・ジャパニーズ)?", options:[
     {t:"The Japanese used for university study and research, with the same grammar as everyday Japanese but a different register", ok:true, why:"That is the idea: same grammar, but a written style, precise words and careful endings."},
     {t:"A separate variety of Japanese with its own grammar rules", why:"It uses the grammar you already know. The register changes, not the grammar."},
     {t:"Japanese written only in kanji, without hiragana", why:"Academic texts use plenty of hiragana; they just use more 漢語 than conversation."},
     {t:"The polite keigo used when speaking to professors", why:"Keigo is part of university life (Unit 8), but academic Japanese is much broader: reading, writing and speaking for study."}]},
   {id:"e1u5-q02", lesson:"e1u5-l1", level:2, q:"Which sentence would fit best in a report written in the である style?", options:[
     {t:"調査の結果、朝食を食べない学生が多いことが明らかになった。", ok:true, why:"Written words (調査, 結果, 朝食), all particles and a plain written ending."},
     {t:"アンケートしてみたら、朝ごはん食べない学生がすごく多かったんです。", why:"Spoken: してみたら, the dropped を, すごく and the chatty んです."},
     {t:"調査の結果、朝食を食べない学生が多いことが明らかになりました。", why:"The words are written style, but ～ました is polite; the report is in the である style."},
     {t:"調査したら、朝食食べない学生がいっぱいいたよ。", why:"Casual speech throughout: したら, a dropped particle, いっぱい and the particle よ."}]},
   {id:"e1u5-q03", lesson:"e1u5-l1", level:1, q:"Which word is a 漢語?", options:[
     {t:"分析", ok:true, why:"Two kanji read with on readings (ぶん + せき): a word of Chinese origin."},
     {t:"調べる", why:"A 和語: a native verb with a kun reading and a kana ending."},
     {t:"データ", why:"A 外来語: a loanword written in katakana."},
     {t:"明らかにする", why:"A 和語 expression (あきらか + にする), formal but native."}]},
   {id:"e1u5-q04", lesson:"e1u5-l1", level:1, q:"What are furigana?", options:[
     {t:"Small kana printed next to kanji to show how they are read", ok:true, why:"In horizontal text they sit above the kanji."},
     {t:"Kanji that are written in a simplified form", why:"That describes simplified characters, not furigana."},
     {t:"The katakana used for loanwords", why:"Katakana spell loanwords; furigana show readings of kanji."},
     {t:"Notes in the margin of a 論文", why:"Margin notes are not furigana. Furigana show readings."}]},
   {id:"e1u5-q05", lesson:"e1u5-l1", level:3, q:"Mei says: “Japanese students grow up speaking Japanese, so they never need to learn report writing.” What is the best response?", options:[
     {t:"Many Japanese universities teach report writing in the first year, because reports differ from school essays in style and in their use of evidence.", ok:true, why:"Report writing is new for almost everyone, which is why universities run first-year courses and publish guides."},
     {t:"She is right: only international students need to study academic Japanese.", why:"Japanese first-year students also learn the である style, written words and careful endings."},
     {t:"She is right, because academic Japanese is simply polite Japanese.", why:"Academic Japanese is mostly in the plain である style; politeness is a different setting."},
     {t:"She is right, because Japanese schools teach the same report style as universities.", why:"School writing (作文, 感想文) is usually personal and often in です・ます; reports are different."}]},
   {id:"e1u5-q06", lesson:"e1u5-l1", level:1, q:"What is the reading of 考察, the word for careful analysis that also names the Discussion section of a paper?", options:[
     {t:"こうさつ", ok:true, why:"考 (こう) + 察 (さつ), both on readings."},
     {t:"かんがえさつ", why:"かんがえ is the kun reading used in 考える. In a 漢語 compound, on readings are normal."},
     {t:"こうさい", why:"That is a different word (交際). 察 is read さつ."},
     {t:"こうざつ", why:"There is no voicing here: 考察 is こうさつ."}]},
   {id:"e1u5-q07", lesson:"e1u5-l1", level:2, q:"In this sentence, which word is a 外来語? 「本研究では、留学生の食生活を明らかにするため、アンケートのデータを分析した。」", options:[
     {t:"アンケート", ok:true, why:"A loanword (from French enquête), written in katakana. データ is the other one."},
     {t:"本研究", why:"A 漢語: kanji with on readings."},
     {t:"明らかにする", why:"A 和語 expression."},
     {t:"分析", why:"A 漢語: ぶん + せき."}]},
   {id:"e1u5-q08", lesson:"e1u5-l1", level:2, q:"Which three layers change most when everyday Japanese becomes academic Japanese?", options:[
     {t:"Sentence style, choice of words, and sentence endings", ok:true, why:"である instead of です・ます, written words and 漢語, and careful endings such as ～と考えられる."},
     {t:"Grammar, script and pronunciation", why:"The grammar and scripts are the same as everyday Japanese."},
     {t:"Keigo, katakana and furigana", why:"Keigo matters when speaking to teachers, but the three layers of academic writing are style, words and endings."},
     {t:"Sentence length, font and paper size", why:"Formatting matters (Unit 7), but it isn’t what makes the language academic."}]},
   {id:"e1u5-q09", lesson:"e1u5-l1", level:3, q:"Kenji’s draft report uses polite です・ます throughout, with words such as しかし and 調査. His teacher asks for the usual report style. What should he change first?", options:[
     {t:"The sentence style: convert the endings from です・ます to である.", ok:true, why:"His words are already written style; the style is the layer that doesn’t match a report."},
     {t:"Replace しかし with でも to sound more natural.", why:"でも is spoken. しかし is the right written choice."},
     {t:"Replace every 漢語 with a 和語.", why:"His 漢語 are fine; the problem is the polite style."},
     {t:"Add furigana over every kanji.", why:"Reports normally have no furigana, and the problem is the style."}]},
   /* ---- Lesson 2 ---- */
   {id:"e1u5-q10", lesson:"e1u5-l2", level:1, q:"Which style is normally used for a 卒業論文 (graduation thesis)?", options:[
     {t:"である体", ok:true, why:"Theses, 論文 and reports normally use the plain である style."},
     {t:"です・ます体", why:"です・ます is for texts addressed to a person, such as emails and presentations."},
     {t:"Casual speech style (だよ, だね)", why:"Casual speech never suits a thesis."},
     {t:"Keigo", why:"Keigo is for speaking or writing to people, not for a thesis."}]},
   {id:"e1u5-q11", lesson:"e1u5-l2", level:2, q:"Which is the correct である-style version of 「この割合は高いです。」?", options:[
     {t:"この割合は高い。", ok:true, why:"An い-adjective is already a complete plain ending. Just drop です."},
     {t:"この割合は高いである。", why:"である attaches to nouns and な-adjectives, not い-adjectives."},
     {t:"この割合は高いだ。", why:"だ, like である, doesn’t follow an い-adjective."},
     {t:"この割合は高くある。", why:"Not the plain form of 高いです; 高くある is an unusual, different construction."}]},
   {id:"e1u5-q12", lesson:"e1u5-l2", level:2, q:"Which is the correct である-style version of 「人口は減少しています。」?", options:[
     {t:"人口は減少している。", ok:true, why:"A verb in ～ています becomes ～ている."},
     {t:"人口は減少しているである。", why:"Verbs take nothing in the plain style; である is only for nouns and な-adjectives."},
     {t:"人口は減少してる。", why:"Plain, but ～てる is a spoken contraction of ～ている."},
     {t:"人口は減少であります。", why:"であります is a polite form, and it changes the grammar of the sentence."}]},
   {id:"e1u5-q13", lesson:"e1u5-l2", level:1, q:"What is the である-style equivalent of the guess ending ～でしょう after a verb (影響があるでしょう)?", options:[
     {t:"影響があるであろう", ok:true, why:"であろう (or だろう) is the plain guess; であろう sounds more written."},
     {t:"影響があるでしょうである", why:"でしょう is polite; you replace it rather than adding である."},
     {t:"影響があるです", why:"That is not correct Japanese in any style."},
     {t:"影響があるのである", why:"のである explains or emphasises; it doesn’t express a guess."}]},
   {id:"e1u5-q14", lesson:"e1u5-l2", level:3, q:"Amara’s report says 「調査は〇〇大学で行った。回答者は100名でした。結果は次のとおりである。」 What is the problem?", options:[
     {t:"The second sentence is in です・ます style, so the styles are mixed.", ok:true, why:"でした is polite. It should be 100名であった (or だった) to match the rest."},
     {t:"The first sentence should be 行いました.", why:"That would make the mixing worse. Reports use the plain style: 行った is right."},
     {t:"である can’t be used at the end of a sentence.", why:"It is the standard ending for noun sentences in reports."},
     {t:"Numbers can’t appear in a である report.", why:"Numbers are normal in reports."}]},
   {id:"e1u5-q15", lesson:"e1u5-l2", level:2, q:"Leila’s である report quotes a survey answer: 「授業が多くて、アルバイトの時間がありません」と答えた。 Is the です・ます inside the quotation a style error?", options:[
     {t:"No. A direct quotation keeps the original words; only her own sentences must keep one style.", ok:true, why:"Her own ending, 答えた, is plain, which is what matters."},
     {t:"Yes. She must change it to ありません → ない inside the quotation.", why:"Changing a direct quotation misrepresents the source."},
     {t:"Yes. Quotations are not allowed in reports.", why:"Quotations are normal in reports, with 「」 and a source (Unit 7)."},
     {t:"No, because です・ます is always allowed in reports.", why:"It isn’t always allowed; here it is fine only because it is a quotation."}]},
   {id:"e1u5-q16", lesson:"e1u5-l2", level:1, q:"Which text is normally written in です・ます style?", options:[
     {t:"An email to a teacher asking for an appointment", ok:true, why:"It speaks to a particular person, so it uses です・ます (with keigo)."},
     {t:"A course report", why:"Reports normally use である."},
     {t:"A summary (要約) of an article", why:"Summaries are normally in である."},
     {t:"A graduation thesis", why:"Theses use である."}]},
   {id:"e1u5-q17", lesson:"e1u5-l2", level:3, q:"Tomás’s first-year seminar teacher writes: 「振り返りレポートは、です・ます体で書いてください。」 What should he do?", options:[
     {t:"Write the reflection in です・ます, consistently, because the teacher has asked for it.", ok:true, why:"The teacher’s instructions decide. One style throughout still applies."},
     {t:"Write it in である, because reports must always be in である.", why:"である is the default, but the teacher’s instruction overrides it."},
     {t:"Mix both styles to be safe.", why:"Mixing styles is an error in either case."},
     {t:"Write in casual speech, because a reflection is personal.", why:"The teacher asked for です・ます, not casual speech."}]},
   {id:"e1u5-q18", lesson:"e1u5-l2", level:2, q:"How should 「次に、結果について考えてみましょう。」 be rewritten for a である report?", options:[
     {t:"次に、結果について検討する。", ok:true, why:"～ましょう speaks to the reader; a plain statement of what the report does fits the style."},
     {t:"次に、結果について考えてみましょうである。", why:"You can’t add である to a polite form."},
     {t:"次に、結果について考えてみようね。", why:"Plain, but ね and the “let’s” tone belong in conversation."},
     {t:"次に、結果について考えてください。", why:"～てください addresses the reader politely and doesn’t fit a である report."}]},
   /* ---- Lesson 3 ---- */
   {id:"e1u5-q19", lesson:"e1u5-l3", level:1, q:"What is the usual written equivalent of でも at the start of a sentence?", options:[
     {t:"しかし", ok:true, why:"しかし is the standard written “but/however”."},
     {t:"だから", why:"だから means “so”, and it is spoken too."},
     {t:"また", why:"また adds a point; it doesn’t contrast."},
     {t:"けど", why:"けど is spoken and joins clauses inside a sentence."}]},
   {id:"e1u5-q20", lesson:"e1u5-l3", level:2, q:"Which sentence is fully in written style?", options:[
     {t:"この方法は非常に便利であるが、多くの費用がかかる。", ok:true, why:"非常に, であるが and 多くの are all written choices."},
     {t:"この方法はすごく便利だけど、お金がいっぱいかかる。", why:"すごく, だけど and いっぱい are spoken."},
     {t:"この方法はすごく便利ですが、費用が多くかかります。", why:"Polite, but すごく is still spoken."},
     {t:"この方法は非常に便利じゃないが、多くの費用がかかる。", why:"じゃない is a spoken contraction (and the meaning changes)."}]},
   {id:"e1u5-q21", lesson:"e1u5-l3", level:1, q:"Which is a ら抜き言葉?", options:[
     {t:"来れる", ok:true, why:"The standard potential of 来る is 来られる; the ら has been dropped."},
     {t:"書ける", why:"書く is an う-verb; 書ける is its standard potential."},
     {t:"行ける", why:"行く is an う-verb; 行ける is standard."},
     {t:"考えられる", why:"This is the full, standard form, with ら."}]},
   {id:"e1u5-q22", lesson:"e1u5-l3", level:2, q:"Which potential form of 見る belongs in a formal report?", options:[
     {t:"見られる", ok:true, why:"見る is a る-verb (見よう), so the standard potential is 見られる."},
     {t:"見れる", why:"A ら抜き言葉: common in speech, but formal writing uses 見られる."},
     {t:"見える", why:"見える means “be visible”, a different verb, not the potential “can see”."},
     {t:"見せる", why:"見せる means “show”, not “can see”."}]},
   {id:"e1u5-q23", lesson:"e1u5-l3", level:1, q:"What is the full written form of ～てる (as in 変化してる)?", options:[
     {t:"～ている", ok:true, why:"～てる drops the い of ～ている: 変化している."},
     {t:"～てある", why:"～てある is a different form, for a state resulting from someone’s action."},
     {t:"～ておる", why:"～ておる is a humble or regional form, not the full form of ～てる."},
     {t:"～てしまう", why:"The contraction of ～てしまう is ～ちゃう."}]},
   {id:"e1u5-q24", lesson:"e1u5-l3", level:3, q:"Hana writes in a report: 「SNSとかテレビとかの影響が大きい。」 What is the best revision?", options:[
     {t:"SNSやテレビなどの影響が大きい。", ok:true, why:"～や～など is the written way to list examples."},
     {t:"SNSとかテレビとかの影響が非常に大きい。", why:"非常に is written, but とか is still spoken."},
     {t:"SNSとテレビとかの影響が大きいです。", why:"とか remains, and です makes it polite."},
     {t:"SNSとか、テレビとか、の影響が大きいのである。", why:"Commas and のである don’t fix the spoken とか."}]},
   {id:"e1u5-q25", lesson:"e1u5-l3", level:2, q:"Most report guides advise against starting a sentence with なので. Which sentence follows that advice?", options:[
     {t:"回答者は20代に限られていた。そのため、結果を一般化することはできない。", ok:true, why:"そのため is the standard written way to begin a result sentence."},
     {t:"回答者は20代に限られていた。なので、結果を一般化することはできない。", why:"This starts a sentence with なので."},
     {t:"回答者は20代に限られていた。だから、結果を一般化することはできない。", why:"だから is spoken as well."},
     {t:"回答者は20代に限られていた。ので、結果を一般化することはできない。", why:"ので joins clauses inside a sentence; it can’t start one."}]},
   {id:"e1u5-q26", lesson:"e1u5-l3", level:2, q:"Which joins two actions in the typical written way?", options:[
     {t:"調査を行い、結果をまとめた。", ok:true, why:"The 連用中止 form 行い、 is typical of written style."},
     {t:"調査を行って、結果をまとめました。", why:"The て-form is acceptable, but ～ました is polite."},
     {t:"調査行って、結果まとめた。", why:"Particles are dropped, as in speech."},
     {t:"調査を行ってて、結果をまとめた。", why:"行ってて is a spoken contraction of 行っていて."}]},
   {id:"e1u5-q27", lesson:"e1u5-l3", level:3, q:"Dmitri says: “My report is in polite です・ます, so it can’t contain any 話し言葉.” What is wrong with this idea?", options:[
     {t:"Politeness and register are separate: 「でも、すごく大事なんです」 is polite but spoken.", ok:true, why:"Style (polite/plain) and register (spoken/written) are two separate choices."},
     {t:"Nothing: polite Japanese is always written style.", why:"Polite sentences can be full of spoken words."},
     {t:"です・ます always counts as 話し言葉.", why:"Polite written style exists, for example in emails: しかし、非常に重要です."},
     {t:"Reports can’t contain any polite forms, even in quotations.", why:"Quotations keep their original style."}]},
   /* ---- Lesson 4 ---- */
   {id:"e1u5-q28", lesson:"e1u5-l4", level:1, q:"Which 漢語 verb is the usual report equivalent of 調べる in the sense of “investigate systematically”?", options:[
     {t:"調査する", ok:true, why:"調査 (ちょうさ) is systematic investigation, such as a survey."},
     {t:"考察する", why:"考察 is analytical discussion, the partner of 考える in some uses."},
     {t:"収集する", why:"収集 means collect (データを収集する)."},
     {t:"比較する", why:"比較 means compare."}]},
   {id:"e1u5-q29", lesson:"e1u5-l4", level:2, q:"Which sentence uses its 漢語 naturally?", options:[
     {t:"この結果が生じた原因を考察する。", ok:true, why:"考察する is for careful analysis, and a cause is something you analyse."},
     {t:"週末の予定を考察する。", why:"Everyday planning isn’t 考察. Use 考える."},
     {t:"辞書で単語の意味を調査した。", why:"Looking up a word is 調べる, not systematic 調査."},
     {t:"表1は回答者の年齢を表示している。", why:"表示 is displaying (on a screen or label). A table 示す data."}]},
   {id:"e1u5-q30", lesson:"e1u5-l4", level:1, q:"Which of these is a formal 和語 that is standard in academic writing?", options:[
     {t:"述べる", ok:true, why:"述べる (state) is a native word, formal and very common in academic Japanese."},
     {t:"しゃべる", why:"しゃべる (chat, talk) is casual."},
     {t:"いっぱい", why:"いっぱい is spoken; use 多く."},
     {t:"すごい", why:"すごい is spoken; academic writing uses precise descriptions."}]},
   {id:"e1u5-q31", lesson:"e1u5-l4", level:2, q:"Which kanji fits? 「この調査の（たいしょう）は大学1年生である。」", options:[
     {t:"対象", ok:true, why:"対象 is the subject or target of a study."},
     {t:"対照", why:"対照 means contrast (対照群 is a control group)."},
     {t:"対称", why:"対称 means symmetry."},
     {t:"大将", why:"大将 means a general or leader."}]},
   {id:"e1u5-q32", lesson:"e1u5-l4", level:2, q:"Which particle goes with 収集する in 「データ（　）収集する」?", options:[
     {t:"を", ok:true, why:"You collect something: データを収集する."},
     {t:"が", why:"が would make the data the collector."},
     {t:"に", why:"に marks a destination or target, not the thing collected."},
     {t:"で", why:"で marks a place or means, not the object."}]},
   {id:"e1u5-q33", lesson:"e1u5-l4", level:3, q:"Priya wants to sound more academic, so she replaced every 和語 in her report with a 漢語, including 示す → 表示する and 異なる → 相違する. What is the best feedback?", options:[
     {t:"Keep formal 和語 such as 示す and 異なる; swap only where a 漢語 adds precision and fits the meaning.", ok:true, why:"Formal 和語 are standard in academic writing, and 漢語 are not one-to-one swaps (表示 means display)."},
     {t:"Good: the more 漢語, the more academic the report.", why:"Too many 漢語 make text heavy, and some of her swaps change the meaning."},
     {t:"Replace them with 外来語 instead.", why:"Loanwords don’t solve the problem and may be less precise."},
     {t:"Use only 和語, because 漢語 are hard to read.", why:"漢語 are central to academic Japanese; the aim is balance, not avoidance."}]},
   {id:"e1u5-q34", lesson:"e1u5-l4", level:2, q:"Which version is clearest while still academic?", options:[
     {t:"留学生の日本語学習意欲が低下する要因を分析する。", ok:true, why:"It keeps the 漢語 but uses a verb (低下する) to break up the chain."},
     {t:"留学生日本語学習意欲低下要因を分析する。", why:"A long compound of 漢語 is very hard to read."},
     {t:"留学生の日本語の学習の意欲の低下の要因の分析を行う。", why:"A chain of の makes the structure hard to follow."},
     {t:"留学生が日本語を勉強したくなくなるわけを調べてみる。", why:"Clear, but spoken (わけ, ～てみる)."}]},
   {id:"e1u5-q35", lesson:"e1u5-l4", level:1, q:"What does the loanword アンケート mean in Japanese?", options:[
     {t:"A questionnaire survey", ok:true, why:"From French enquête; in Japanese it means a questionnaire survey."},
     {t:"An interview", why:"An interview is インタビュー."},
     {t:"A complaint", why:"That is 苦情 or クレーム, not アンケート."},
     {t:"A research paper", why:"A research paper is 論文."}]},
   {id:"e1u5-q36", lesson:"e1u5-l4", level:3, q:"In a presentation, Kenji needs to say 私立大学 and 市立大学 in the same sentence. Both are read しりつ. What do Japanese speakers often do?", options:[
     {t:"Say わたくしりつ for 私立 and いちりつ for 市立, to keep them apart", ok:true, why:"These alternative readings are a common way to avoid confusion in speech."},
     {t:"Spell out each kanji stroke by stroke", why:"Not practical, and not what speakers do."},
     {t:"Switch to English for those words", why:"Not necessary; Japanese has its own solution."},
     {t:"Nothing: listeners always know from context", why:"Here both words appear together, so context doesn’t help."}]},
   /* ---- Lesson 5 ---- */
   {id:"e1u5-q37", lesson:"e1u5-l5", level:1, q:"What does 文末表現 refer to?", options:[
     {t:"The expressions at the end of a sentence, which show its style and how sure the writer is", ok:true, why:"For example ～である, ～と考えられる and ～可能性がある."},
     {t:"The final paragraph of a report", why:"That is the conclusion (結論, おわりに)."},
     {t:"The list of references at the end of a paper", why:"That is 参考文献."},
     {t:"Punctuation marks such as 。", why:"Punctuation is part of notation, not 文末表現."}]},
   {id:"e1u5-q38", lesson:"e1u5-l5", level:2, q:"A survey found a link between late-night jobs and lower grades, but did not study the cause. Which claim fits the evidence?", options:[
     {t:"深夜のアルバイトが成績に影響を与えている可能性がある。", ok:true, why:"A link without a studied cause supports a possibility."},
     {t:"深夜のアルバイトは必ず成績を下げる。", why:"必ず over-claims far beyond one survey."},
     {t:"深夜のアルバイトが成績を下げると思う。", why:"A personal ending, with no link to the evidence."},
     {t:"深夜のアルバイトが成績に影響を与えている可能性があるのではないかと考えられるかもしれない。", why:"Over-hedged: the claim disappears under the softeners."}]},
   {id:"e1u5-q39", lesson:"e1u5-l5", level:1, q:"Which ending presents a statement as fact (断定)?", options:[
     {t:"～である", ok:true, why:"The plain assertive ending."},
     {t:"～であろう", why:"A guess (推量)."},
     {t:"～と思われる", why:"A soft judgement."},
     {t:"～可能性がある", why:"A possibility."}]},
   {id:"e1u5-q40", lesson:"e1u5-l5", level:2, q:"Many report guides suggest replacing ～かもしれない. Which ending do they usually suggest?", options:[
     {t:"～可能性がある", ok:true, why:"It marks a possibility in a more written way."},
     {t:"～に違いない", why:"That means “must be”, far stronger than かもしれない."},
     {t:"～と思います", why:"Polite and personal; neither fits a である report."},
     {t:"～のである", why:"のである explains or emphasises; it removes the uncertainty."}]},
   {id:"e1u5-q41", lesson:"e1u5-l5", level:3, q:"Oluwaseun reports his own survey result as 「回答者の約7割が、朝食をとらない日があると答えたと考えられる。」 What is the problem?", options:[
     {t:"His own data should be stated as fact; と考えられる makes a measured result sound like a guess.", ok:true, why:"Hedges belong on interpretations, not on what the survey directly recorded."},
     {t:"Nothing: every sentence in a report should end in と考えられる.", why:"Using it everywhere hides which statements are facts."},
     {t:"He should write と思う instead.", why:"That is personal and still hedges a fact."},
     {t:"He should add 必ず to make it stronger.", why:"The result needs no booster; it needs a plain ending: 答えた。"}]},
   {id:"e1u5-q42", lesson:"e1u5-l5", level:2, q:"Which pointing word is normally NOT used to refer back to an earlier sentence in an academic text?", options:[
     {t:"あの", ok:true, why:"あ-words refer to shared experience outside the text. Use この or その to point back."},
     {t:"その", why:"その is the neutral choice for pointing back: その結果, その原因."},
     {t:"この", why:"この points back, often to what the writer is focusing on: この問題."},
     {t:"こうした", why:"こうした (“such”) is a typical written way to point back."}]},
   {id:"e1u5-q43", lesson:"e1u5-l5", level:2, q:"Which connector fits? 「本調査の回答率は高かった。（　　）、自由記述の回答は少なかった。」", options:[
     {t:"しかし", ok:true, why:"The second sentence goes against what the first would lead you to expect."},
     {t:"そのため", why:"そのため signals a result, but a high response rate doesn’t cause few free answers."},
     {t:"たとえば", why:"The second sentence isn’t an example of the first."},
     {t:"つまり", why:"The second sentence doesn’t restate the first."}]},
   {id:"e1u5-q44", lesson:"e1u5-l5", level:1, q:"Which connector introduces an example?", options:[
     {t:"たとえば", ok:true, why:"たとえば (例示) introduces an example."},
     {t:"したがって", why:"したがって introduces a result."},
     {t:"しかし", why:"しかし introduces something contrary."},
     {t:"また", why:"また adds another point."}]},
   {id:"e1u5-q45", lesson:"e1u5-l5", level:3, q:"Ana’s report ends: 「この政策は失敗だったと思う。」 Her teacher writes 「根拠は？」 (“Your grounds?”). What is the best revision?", options:[
     {t:"以上の結果から、この政策は当初の目的を十分に達成できなかったと考えられる。", ok:true, why:"It points to the evidence, defines the claim precisely and uses a careful ending."},
     {t:"この政策は絶対に失敗だったと強く思う。", why:"Stronger feeling isn’t evidence, and 絶対に over-claims."},
     {t:"この政策は失敗だったと思います。", why:"Polite, but still a personal feeling without grounds."},
     {t:"この政策は失敗だったかもしれない。", why:"Softer, but still no grounds, and many guides find かもしれない conversational in a report."}]}
  ]
});
