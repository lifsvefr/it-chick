/* Academic Language · Academic Japanese Unit 6 (e1u6) · Reading academic Japanese */
ICA.addUnit({
  id:"e1u6", track:"e1", n:6, title:"Reading academic Japanese", icon:"📖",
  blurb:"The kinds of text Japanese students and researchers read and the free databases where you find them; how a Japanese research paper (論文) is built; connectives (接続詞) as signposts for following an argument and finding its claim (主張) and evidence (根拠); strategies and tools for kanji-heavy text; and writing a clear summary (要約) in である style.",
  goals:[
    "Tell apart the main kinds of Japanese academic text (論文, レポート, 新書, 白書, 学術雑誌, 紀要) and know which have been peer-reviewed (査読)",
    "Find Japanese research with CiNii Research, J-STAGE, IRDB and NDL Search, and know what each one is for",
    "Recognise the parts of a Japanese research paper (要旨, はじめに, 先行研究, 方法, 結果, 考察, おわりに, 参考文献) and read them in a useful order",
    "Use 接続詞 as signposts to predict what comes next, and pick out a writer’s 主張 and 根拠",
    "Work out the meaning of unfamiliar kanji compounds from their parts, read long noun phrases from the head noun, and use dictionaries and pop-up readers well",
    "Write a short, accurate 要約 in である style that keeps the author’s claim and reasons and leaves out your own opinion"
  ],
  read:[
    {book:"omu", where:"Section 2 “アカデミック･ライティングとは” and Section 4.3.1 “序論→本論→結論の構成”", note:"A short guide from a Japanese university’s learning support centre, in Japanese. It is written for students writing reports, but it shows what Japanese teachers expect an academic text to do, which makes the texts you read easier to follow."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u6-l1", title:"Kinds of academic text, and where to find them", minutes:50,
   hook:{q:"A first-year student wants a short, readable introduction to a new topic, written by an expert for general readers. Which kind of Japanese book is a common first step?", options:["[新書]{しんしょ}","[白書]{はくしょ}","[紀要]{きよう}","[博士論文]{はくしろんぶん}"], answer:0, reveal:"**新書 (shinsho).** 新書 are small paperback books published in series, usually written by specialists for general readers, so they are a common first step into a new topic. 白書 are government reports full of statistics, 紀要 are university bulletins with specialised papers, and a doctoral thesis (博士論文) is the most specialised of all. This lesson maps the kinds of text you will meet and the free databases where Japanese research lives."},
   goals:[
     "Describe 論文, レポート, 新書, 白書, 学術雑誌 and 紀要, and say what each is good for",
     "Explain 査読 (peer review) and why it matters for how much weight a text can carry",
     "Know what CiNii Research, J-STAGE, IRDB and NDL Search each search, and what is free",
     "Plan Japanese search words, including synonyms and different spellings"
   ],
   learn:[
    {h:"Academic Japanese is hard for everyone", body:[
      {lead:"If academic Japanese feels slow and heavy to read, you are in good company. Japanese first-year students find it hard too, and many universities run first-year courses on how to read and write it."},
      "In Unit 5 you met the styles and words of academic Japanese ({{academic-japanese}}): である style, written words (書き言葉, [[kakikotoba]]) and the many Sino-Japanese words ([[kango|漢語]]) that make texts look dense. This unit is about **reading**: knowing what kind of text you have in front of you, finding your way around it, following the argument and putting it in your own words.",
      "Much of what you already know about reading in other languages still works. Reading the abstract and conclusion first ([[skimming]]), searching for one fact ([[scanning]]) and reading slowly and closely ([[intensive-reading]]) are the same skills in Japanese. What changes is the vocabulary, the signposts and some habits of structure, and that is what this unit teaches.",
      {key:"You do not need to understand every word. You need to know what kind of text it is, where its main point is, and which words actually block your understanding."}
    ]},
    {h:"A map of the texts you will meet", body:[
      "Japanese academic life uses a handful of text types again and again. Learn their names: you will see them in reading lists, library catalogues and database results.",
      {table:[
        ["Name","What it is","Good for"],
        ["[論文]{ろんぶん} (*ronbun*)","A research paper: in a journal, a bulletin or a book, or a thesis (卒業論文, 修士論文, [博士論文]{はくしろんぶん})","Original findings and arguments; what you cite most"],
        ["レポート","A student’s written assignment, usually shorter than a 論文","Model answers; you will write them in Unit 7"],
        ["[新書]{しんしょ}","A small paperback in a publisher’s series, written by a specialist for general readers","A first, readable overview of a topic"],
        ["[白書]{はくしょ}","A government report on a policy area, often yearly, with statistics","Official data and the government’s view of an issue"],
        ["[学術雑誌]{がくじゅつざっし}","An academic journal, often published by an academic society ([学会]{がっかい}), so also called a 学会誌","Peer-reviewed research papers"],
        ["[紀要]{きよう}","A bulletin published by a university, faculty or research institute","Papers by that institution’s researchers; quality and review vary"]
      ]},
      "Two of these need a little more explanation. **[[hakusho|白書]]** (white papers) are published by government ministries and agencies. For example, the Ministry of Health, Labour and Welfare publishes the 厚生労働白書, and the Ministry of Internal Affairs and Communications publishes the 情報通信白書. They are excellent for official statistics, but remember they present the government’s own view of its policies.",
      "**[[kiyou|紀要]]** are a very Japanese kind of publication. Many universities and departments publish a bulletin of papers by their own staff and graduate students. Some 紀要 papers are excellent; others are early drafts of ideas. Many are free to read online through university repositories (see below).",
      {tip:"[[shinsho|新書]] series are published by several large publishers. They are cheap, short and written to be read, which makes them good practice for academic Japanese as well as good introductions. A teacher may still ask you to cite 論文 rather than 新書 in a report, so ask."}
    ]},
    {h:"Peer-reviewed or not: 査読", body:[
      "[査読]{さどく} (*sadoku*) means peer review: before a paper is published, other researchers in the field read it and recommend changes, acceptance or rejection (see [[peer-review]]). A paper that passed this check is called a 査読付き論文 (refereed paper; see [[sadoku]]). Below, [[ronbun|論文]] means any research paper. Journals published by academic societies usually use 査読.",
      "Peer review is one sign of how much weight a text can carry, not a guarantee of truth, and an unreviewed text is not automatically bad. It tells you what kind of checking the text has had:",
      {table:[
        ["Text","Usual checking","How to use it"],
        ["Journal 論文 (査読付き)","Reviewed by other researchers","Main evidence in your own writing"],
        ["紀要 paper","Varies: some bulletins review papers, many only edit them","Check the bulletin’s policy; read critically"],
        ["新書","Edited by the publisher, not peer-reviewed","Background and ideas; follow its sources"],
        ["白書","Official report, prepared by the government","Official data; note whose view it is"],
        ["Student レポート or 卒業論文","Marked by teachers, not peer-reviewed","Examples of how to write, rarely as evidence"]
      ]},
      "Reports from governments and institutions, and many bulletins, belong to what researchers call {{grey-literature|grey literature}}: material published outside the usual commercial and journal channels. It is often very useful, especially for data, but it needs a careful reader.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e1u6a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">From overview to specialised research</text><rect class="d-sage" x="20" y="32" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="54" text-anchor="middle">新書 (shinsho)</text><text class="s" x="170" y="74" text-anchor="middle">For general readers · no peer review</text><path class="d-ink" d="M170,88 L170,106" stroke-width="2" marker-end="url(#e1u6a1)"/><rect class="d-gold" x="20" y="108" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="130" text-anchor="middle">白書 (hakusho)</text><text class="s" x="170" y="150" text-anchor="middle">Official data and policy · no peer review</text><path class="d-ink" d="M170,164 L170,182" stroke-width="2" marker-end="url(#e1u6a1)"/><rect class="d-soft" x="20" y="184" width="300" height="56" rx="6" stroke-width="2" stroke-dasharray="5 4"/><text x="170" y="206" text-anchor="middle">紀要 (kiyō)</text><text class="s" x="170" y="226" text-anchor="middle">University bulletins · review varies</text><path class="d-ink" d="M170,240 L170,258" stroke-width="2" marker-end="url(#e1u6a1)"/><rect class="d-lup" x="20" y="260" width="300" height="56" rx="6" stroke-width="2"/><text x="170" y="282" text-anchor="middle">学術雑誌の論文</text><text class="s" x="170" y="302" text-anchor="middle">Journal papers · usually peer-reviewed</text><text class="s" x="170" y="340" text-anchor="middle">Read down the ladder as your topic narrows</text></svg>', alt:"A ladder of four boxes from top to bottom: 新書 (for general readers, no peer review), 白書 (official data and policy, no peer review), 紀要 (university bulletins, review varies, drawn with a dashed border) and journal papers (usually peer-reviewed). Arrows point down the ladder, with the note: read down the ladder as your topic narrows.", cap:"A common reading path: start broad with a 新書, use 白書 for official data, then move to bulletin and journal papers as your question becomes more specific."}
    ]},
    {h:"Where Japanese research lives", body:[
      "You find Japanese research the same way as research in any language: through databases and library catalogues (see {{academic-databases}} and {{search-strategy}} in Research Skills). Four free Japanese services do most of the work:",
      {table:[
        ["Service","Run by","What it finds"],
        ["CiNii Research","National Institute of Informatics (NII)","Papers, books, theses, research data and funded research projects from across Japan, in one search, plus which university libraries hold a book. Free; no account needed to search."],
        ["[[j-stage|J-STAGE]]","Japan Science and Technology Agency (JST)","Journals published by Japanese academic societies. Most articles are free to read; some are limited to members or subscribers."],
        ["[[irg-ndl|IRDB]]","National Institute of Informatics (NII)","Material in Japanese university [[institutional-repository|repositories]]: bulletin (紀要) papers, theses and more, usually free full text."],
        ["NDL Search (国立国会図書館サーチ)","National Diet Library (NDL)","Books, journals and digital material at the NDL and many other Japanese libraries."]
      ]},
      "[[cinii|CiNii Research]] is the best first stop for most topics. It absorbed the older article search service, CiNii Articles, in April 2022, and it links each record to the full text where one exists, often on J-STAGE or a university repository. It also shows which Japanese university libraries hold a book: the older CiNii Books service was merged into it in 2026, and CiNii Books itself is due to close around March 2027.",
      "[[ndl-search|NDL Search]] was renewed in January 2024, when it was combined with the library’s own catalogue, NDL Online. It is especially useful for books and older material. Many old books and journals have been digitised in the NDL Digital Collections (国立国会図書館デジタルコレクション). Some items there can be read by anyone online; some can be read through the NDL’s transmission service, either online by fully registered NDL users living in Japan or at a participating library; some can only be read inside the NDL itself. The search results tell you which.",
      {warn:"Services and their rules change. Before relying on one, check its own help or “about” pages, and ask your university library: it may give you access to paid Japanese databases as well."}
    ]},
    {h:"Searching in Japanese", body:[
      "Japanese search words need the same planning as English ones ({{boolean-search}}), plus a few extra checks:",
      {list:[
        "**Synonyms and related terms.** Writers use different words for the same idea: 留学生 and 外国人学生, 若者 and [若年層]{じゃくねんそう}, 就職 and 就労. Search for several.",
        "**Spelling variants.** Katakana words can be written with or without a final long-vowel mark: コンピューター and コンピュータ are both common. Some words appear in kanji or kana: 子ども, 子供 and こども.",
        "**Wider and narrower words.** If 就職活動 (job hunting) finds too little, try 就職 or キャリア支援; if it finds too much, add a group such as 留学生.",
        "**English too.** Many Japanese papers have an English title and abstract, so English words can find them as well."
      ]},
      {ex:"Topic: international students looking for jobs in Japan\n\nCore words:   留学生 / 外国人留学生\nTopic words:  就職 / 就職活動 / 就労 / キャリア支援\nFirst search: 留学生 就職\nThen:         外国人留学生 就職活動\n              留学生 キャリア支援", label:"Worked example: planning a CiNii Research search", mono:true},
      "In most Japanese databases a space between words means both words must appear (AND). How to write OR and NOT varies, so check each service’s search help."
    ]},
    {h:"What to read first", body:[
      "With a list of results, don’t start reading the first paper from page one. A good order:",
      {ol:[
        "A 新書 or a textbook chapter, for the big picture and the key terms.",
        "A review article ([総説]{そうせつ} or レビュー論文), if one exists: it summarises a whole area of research.",
        "The [要旨]{ようし} (abstract) of each paper that looks relevant. Most papers can be judged from their abstract and conclusion (lesson 2).",
        "The full text of the few papers that matter most."
      ]},
      "Keep a list of Japanese key terms as you go, with their readings and English meanings. The same twenty or thirty words will appear in almost every paper on your topic, and learning them early makes everything after easier.",
      {key:"Know the type of text, know how it was checked, and read broad before narrow."}
    ]}
   ],
   try:[
    {id:"e1u6-l1-x1", type:"match", q:"Match each kind of text to its description.", pairs:[
      ["新書","A short paperback by a specialist for general readers","新書 are published in series and written to be readable: a good first step into a topic."],
      ["白書","A government report on a policy area, with statistics","白書 are official reports from ministries and agencies, such as the 厚生労働白書."],
      ["紀要","A bulletin of papers published by a university or institute","紀要 collect papers by an institution’s researchers. Review practices vary."],
      ["学会誌","A journal published by an academic society","Society journals usually peer-review (査読) the papers they publish."],
      ["レポート","A student’s written assignment","レポート are coursework. You will learn to write them in Unit 7."]
    ]},
    {id:"e1u6-l1-x2", type:"mcq", q:"Amara is writing a report on Japan’s policies for older workers. She needs official national statistics and the government’s own account of its policy. Which kind of text should she look for first?", options:[
      {t:"A 白書 from the relevant ministry", ok:true, why:"白書 are government reports on a policy area with official data. They are the right place for statistics and the government’s view, which Amara should present as the government’s view."},
      {t:"A 新書 on ageing in Japan", why:"A 新書 is a good overview, but it is one author’s account. For official statistics she should go to the source, often a 白書."},
      {t:"A 紀要 paper by a graduate student", why:"A bulletin paper may discuss the policy, but it is not where official national statistics are published."},
      {t:"A model レポート from last year", why:"A student report is not a source of official data and is rarely cited as evidence."}
    ]},
    {id:"e1u6-l1-x3", type:"sort", q:"Sort these texts: are they **usually peer-reviewed (査読あり)** or **not peer-reviewed**?", buckets:["Usually peer-reviewed","Not peer-reviewed"], items:[
      {t:"A 査読付き論文 in a society journal", b:0, why:"査読付き literally means “with peer review”."},
      {t:"A 新書", b:1, why:"新書 are edited by the publisher but not peer-reviewed by other researchers."},
      {t:"A 白書", b:1, why:"白書 are prepared by the government. They are official, but not peer-reviewed."},
      {t:"A student’s 卒業論文", b:1, why:"A graduation thesis is marked by teachers, which is not the same as peer review before publication."},
      {t:"An original research paper (原著論文) in a journal that uses 査読", b:0, why:"Papers published in a refereed journal have passed peer review."},
      {t:"A newspaper article about a new study", b:1, why:"News articles are edited by the newspaper, not reviewed by researchers. Look for the study itself."}
    ]},
    {id:"e1u6-l1-x4", type:"match", q:"Match each service to the job it does best.", pairs:[
      ["CiNii Research","One search across Japanese papers, books, theses and research projects","CiNii Research, from NII, brings many kinds of research record together and links to full text where it exists."],
      ["J-STAGE","Reading journals published by Japanese academic societies","J-STAGE, run by JST, is the platform many Japanese societies use to publish their journals online."],
      ["IRDB","Finding material in Japanese university repositories, such as 紀要 papers","IRDB searches institutional repositories, where many bulletins and theses are free to read."],
      ["NDL Search","Finding books and digitised material at the National Diet Library and other libraries","NDL Search covers the NDL’s holdings and many other Japanese libraries."]
    ]},
    {id:"e1u6-l1-x5", type:"mcq", q:"Kenji searched CiNii Research for 留学生 就職活動 and found only a few results. What is the most useful next step?", options:[
      {t:"Try related and wider words, such as 外国人留学生, 就職, 就労 or キャリア支援", ok:true, why:"Japanese writers use different words for the same idea. Trying synonyms and wider terms is the usual way to find more."},
      {t:"Give up: there is no research on the topic", why:"A few results from one pair of words says little. Different wording usually finds much more."},
      {t:"Add more words, such as 留学生 就職活動 日本 大学 問題", why:"Each extra word joined by a space must also appear, so adding words usually finds fewer results, not more."},
      {t:"Search in English only", why:"English can find papers with English titles and abstracts, but many Japanese papers are only findable with Japanese words."}
    ]},
    {id:"e1u6-l1-x6", type:"mcq", q:"In NDL Search, a digitised book is marked 「送信サービスで閲覧可能」. What does this mean?", options:[
      {t:"It can be read through the NDL’s transmission service: online after logging in as a registered user, or at a participating library", ok:true, why:"The NDL’s transmission services (送信サービス) send digitised material to fully registered users (currently only those living in Japan) and to participating libraries. Items anyone can read are marked as readable without login (ログインなしで閲覧可能)."},
      {t:"Anyone can read it online without logging in", why:"Items anyone can read are marked ログインなしで閲覧可能 (readable without login). 送信サービス items need a login or a participating library."},
      {t:"It can only be read inside the National Diet Library", why:"Items limited to the NDL buildings are marked 国立国会図書館内限定."},
      {t:"It must be bought from a bookshop", why:"The marking is about the NDL’s digital services, not about buying the book."}
    ]}
   ],
   apply:{intro:"You need a phone or computer with internet access. Everything here is free.", tasks:[
    {t:"Map one topic in CiNii Research", how:["Choose a topic from your studies or one that interests you.","Write three to five Japanese search words, with synonyms and spelling variants.","Search CiNii Research with two or three combinations.","For five results, note the kind of text (journal paper, 紀要 paper, book, thesis) and whether full text is linked."], write:"Topic… Search words and variants… Five results: title (kind of text, full text yes/no)…"},
    {t:"Open one free article on J-STAGE", how:["Search J-STAGE for your topic, or open a J-STAGE link from CiNii Research.","Choose an article you can read for free.","Read only the title, the 要旨 (abstract) and the keywords. Look up at most five words.","Note whether the journal says it uses 査読."], write:"Article title… Journal… What the 要旨 says in one English sentence… Words I looked up… 査読?"},
    {t:"Find a first book", how:["Search NDL Search or CiNii Research for a 新書 on your topic (adding 新書 to the search can help).","Note the title, author, publisher series and year.","If your library has it, borrow it; otherwise note where it is held."], write:"Title, author, series, year… Where I can read it…"}
   ], proof:"A short list of Japanese search words for one topic, five sorted search results, one J-STAGE abstract summarised in a sentence, and one 新書 to read first."},
   read:[
     {book:"omu", where:"Section 4.2 “疑い深く調べる” (including 4.2.1 “図書館の書物の利用”)", note:"Background reading in Japanese on searching carefully and using library books before you write."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u6-l2", title:"Inside a Japanese research paper", minutes:50,
   hook:{q:"In a Japanese research paper, which section is where the author explains what the findings mean, compares them with earlier studies and admits their limits?", options:["[結果]{けっか}","[考察]{こうさつ}","[要旨]{ようし}","[参考文献]{さんこうぶんけん}"], answer:1, reveal:"**考察 (kōsatsu), the discussion.** 結果 (results) reports what was found; 考察 says what it means. Learners often mix them up, because both talk about the findings. The difference is between reporting and interpreting, and it matters: the writer’s main claims are usually in 考察 and the conclusion, not in 結果. This lesson walks through every part of a typical 論文 and shows a faster order for reading one."},
   goals:[
     "Name the usual parts of a Japanese research paper and say what each contains",
     "Relate the Japanese structure to IMRaD, and recognise the chapter-based shape common in the humanities",
     "Recognise the stock phrases that mark each section, including 本稿, 本研究 and 筆者",
     "Read a paper in an efficient order, starting from the 要旨"
   ],
   learn:[
    {h:"The parts of a 論文", body:[
      {lead:"Most Japanese research papers in the sciences and social sciences follow a shape you can learn once and use for years."},
      "Headings vary a little between fields and journals, but these are the usual parts, in order:",
      {table:[
        ["Part","Reading","What you find there"],
        ["要旨 (also 抄録, アブストラクト)","[要旨]{ようし} (*yōshi*)","A short summary of the whole paper: purpose, method, main results, conclusion"],
        ["キーワード","","Three to five key terms: useful search words"],
        ["はじめに or 序論","[序論]{じょろん} (*joron*)","Background, the gap in research, the purpose (目的) and the question"],
        ["先行研究","[先行研究]{せんこうけんきゅう}","What earlier studies found; sometimes inside はじめに"],
        ["方法 (研究方法)","[方法]{ほうほう}","Who or what was studied, and how"],
        ["結果","[結果]{けっか}","What was found, often with tables (表) and figures (図)"],
        ["考察","[考察]{こうさつ} (*kōsatsu*)","What the results mean, comparison with earlier studies, limits"],
        ["おわりに or 結論","[結論]{けつろん} (*ketsuron*)","The main conclusions and future tasks (今後の課題)"],
        ["注 and 参考文献 (or 引用文献)","[参考文献]{さんこうぶんけん}","Notes, and the list of works cited"]
      ]},
      "A paper can use either the plain headings (はじめに, おわりに) or the more formal ones ([[josetsu|序論]], [[ketsuron|結論]]); they do the same job. Two parts deserve special attention: the [[youshi|要旨]], which summarises everything, and the [[kousatsu|考察]], where the author says what the findings mean. [[senkou-kenkyuu|先行研究]] tells you whose work this paper builds on. Sections are usually numbered: 1., 2., 2.1, 2.2 and so on, and some papers number はじめに as section 1.",
      "Theses (卒業論文, 修士論文, 博士論文) add a contents page (目次) and often acknowledgements ([謝辞]{しゃじ}), and divide the body into chapters (第1章, 第2章…)."
    ]},
    {h:"IMRaD in Japanese", body:[
      "If you have read research in English, you may know the [[imrad]] pattern: Introduction, Methods, Results and Discussion (see {{paper-structure}}). The Japanese empirical paper follows the same logic: 序論 (I), 方法 (M), 結果 (R) and 考察 (D), often followed by a short conclusion.",
      {fig:'<svg viewBox="0 0 340 380"><text x="170" y="18" text-anchor="middle">The hourglass shape of a 論文</text><path class="d-lup" d="M20,34 L320,34 L260,104 L80,104 Z" stroke-width="2"/><text x="170" y="62" text-anchor="middle">はじめに・序論</text><text class="s" x="170" y="82" text-anchor="middle">broad background → the gap</text><text class="s" x="170" y="97" text-anchor="middle">→ 目的 (purpose)</text><rect class="d-soft" x="80" y="112" width="180" height="48" rx="4" stroke-width="2"/><text x="170" y="134" text-anchor="middle">方法</text><text class="s" x="170" y="151" text-anchor="middle">how it was studied</text><rect class="d-soft" x="80" y="168" width="180" height="48" rx="4" stroke-width="2"/><text x="170" y="190" text-anchor="middle">結果</text><text class="s" x="170" y="207" text-anchor="middle">what was found</text><path class="d-sage" d="M80,224 L260,224 L320,294 L20,294 Z" stroke-width="2"/><text x="170" y="250" text-anchor="middle">考察</text><text class="s" x="170" y="270" text-anchor="middle">what it means · earlier studies</text><text class="s" x="170" y="285" text-anchor="middle">· limits</text><rect class="d-gold" x="20" y="302" width="300" height="48" rx="4" stroke-width="2"/><text x="170" y="324" text-anchor="middle">おわりに・結論</text><text class="s" x="170" y="341" text-anchor="middle">main conclusions · 今後の課題</text></svg>', alt:"An hourglass diagram. At the top a wide shape narrowing downwards: はじめに・序論, from broad background to the gap to the purpose. In the narrow middle, two boxes: 方法 (how it was studied) and 結果 (what was found). Below, a shape widening downwards: 考察 (what it means, earlier studies, limits). At the bottom a wide box: おわりに・結論 (main conclusions and future tasks).", cap:"Like IMRaD in English: the paper narrows from a broad background to one precise study, then widens again to say what the findings mean."},
      "Not every field uses this shape. Papers in literature, history, philosophy and law are often built around an argument rather than an experiment. They have はじめに and おわりに, but the body is a series of numbered sections or chapters with titles about content, many notes (注), and no 方法 or 結果 headings. The skills in this lesson still work: find the purpose in はじめに and the conclusion in おわりに.",
      "Student reports use a simpler shape still: 序論・本論・結論. The middle part, [本論]{ほんろん} (*honron*, see [[honron]]), is the main body. Unit 7 teaches you to write it ({{japanese-report-structure}})."
    ]},
    {h:"Words that tell you where you are", body:[
      "Each section has its own stock phrases. Once you know them, you can tell which section you are reading from a single sentence:",
      {table:[
        ["Section","Typical phrases","Meaning"],
        ["はじめに","近年、～が注目されている。","Recently, ～ has attracted attention."],
        ["はじめに","しかし、～については十分に[検討]{けんとう}されていない。","However, ～ has not been fully examined."],
        ["はじめに","そこで[本稿]{ほんこう}では、～を明らかにすることを目的とする。","This paper therefore aims to clarify ～."],
        ["先行研究","山田（2018）は、～と[指摘]{してき}している。","Yamada (2018) points out that ～."],
        ["方法","～を[対象]{たいしょう}に、[質問紙]{しつもんし}調査を[実施]{じっし}した。","We carried out a questionnaire survey of ～."],
        ["結果","表1に示すように、～。","As Table 1 shows, ～."],
        ["考察","～と考えられる。この結果は、山田（2018）の指摘と一致する。","It can be thought that ～. This agrees with Yamada (2018)."],
        ["おわりに","今後の[課題]{かだい}としたい。","We leave this as a task for future work."]
      ]},
      "Three words appear in almost every paper:",
      {list:[
        "**本稿** ([本稿]{ほんこう}, *honkō*): “this paper”, the text you are reading. 本論文 means the same.",
        "**本研究** ([本研究]{ほんけんきゅう}): “this study”, the research the paper reports.",
        "**筆者** ([筆者]{ひっしゃ}, *hissha*): “the author”, the writer of the paper referring to themselves. Japanese papers rarely use 私."
      ]},
      {tip:"「はじめに」 has a typical three-step movement: background (近年…), a gap (しかし…されていない) and the purpose (そこで本稿では…). The purpose sentence is the single most useful sentence in the paper. Look for 目的."}
    ]},
    {h:"Reading the 要旨 first", body:[
      "The [[abstract-paper|abstract]], or 要旨, is the whole paper in miniature. Here is an invented example of the kind you will see:",
      {ex:"本研究の目的は、地方都市に住む外国人住民が生活に必要な情報をどのように入手しているかを明らかにすることである。A市の外国人住民120名を対象に質問紙調査を実施した。その結果、行政からの情報よりも、SNSや知人を通じて情報を得る人が多いことが明らかになった。以上から、多言語による情報発信に加え、地域のネットワークを活用した支援が必要であると考えられる。", label:"Example 要旨"},
      "Each sentence does one job. Their signals let you find each job quickly:",
      {table:[
        ["Signal","Job","In English"],
        ["本研究の目的は、～ことである。","Purpose","This study aims to find out how foreign residents get the information they need."],
        ["～を対象に…[実施]{じっし}した。","Method","A questionnaire survey of 120 residents of City A."],
        ["その結果、～ことが明らかになった。","Result","More people get information through social media and acquaintances than from the local government."],
        ["以上から、～と考えられる。","Conclusion","Support that uses local networks is needed, as well as multilingual information."]
      ]},
      "Notice that the conclusion is hedged: 「～と考えられる」 (“it can be thought that…”). Unit 5 explained these careful sentence endings ({{hedging-japanese}}). When you report a paper’s conclusion, keep its hedge."
    ]},
    {h:"Don’t start at page one", body:[
      "Few researchers read a paper from beginning to end the first time. A faster order:",
      {ol:[
        "**Title and 要旨**: is this paper relevant? If not, stop here.",
        "**The end of はじめに**: the purpose sentence (目的) and the research question.",
        "**おわりに or 結論**: what the author concludes.",
        "**Tables and figures (表・図)** in 結果: often easier to read than the text around them.",
        "**考察**: how the author interprets the results and what limits they admit.",
        "**方法**, in detail, only if you need to judge or use the study."
      ]},
      "This order is the Japanese version of [[skimming]] (see {{reading-strategies}} in Research Skills). It lets you decide quickly which papers deserve a slow, close reading.",
      {h:"Common misunderstandings"},
      {list:[
        "**“はじめに is just an introduction I can skip.”** It holds the purpose and the question: read at least its last paragraph.",
        "**“結果 and 結論 mean the same.”** 結果 is the results of one study; 結論 is what the author concludes from the whole paper.",
        "**“参考文献 is only for checking.”** It is also a list of further reading. Following references is one of the best ways to find more sources ({{citation-chasing}})."
      ]},
      {key:"Read 要旨 → 目的 → 結論 → 図表 → 考察, and slow down only for the papers that matter."}
    ]}
   ],
   try:[
    {id:"e1u6-l2-x1", type:"order", q:"Put the parts of a typical empirical social-science 論文 in order, from first to last.", items:[
      {t:"要旨 (abstract)", why:"The abstract comes first, before the main text, so readers can decide whether to read on."},
      {t:"はじめに (introduction)", why:"The main text opens with background, the gap and the purpose."},
      {t:"先行研究 (earlier studies)", why:"Earlier research is reviewed after the introduction, or inside it, before the new study is described."},
      {t:"方法 (method)", why:"The method explains how the study was done, before its results."},
      {t:"結果 (results)", why:"Results report what was found."},
      {t:"考察 (discussion)", why:"The discussion interprets the results, so it comes after them."},
      {t:"おわりに (conclusion)", why:"The conclusion closes the main text."},
      {t:"参考文献 (references)", why:"The list of works cited comes at the end."}
    ]},
    {id:"e1u6-l2-x2", type:"match", q:"Match each sentence to the section of a 論文 where you would most expect it.", pairs:[
      ["近年、オンライン授業が注目されている。","はじめに","“Recently, ～ has attracted attention” is a typical opening of the background."],
      ["大学生200名を対象に、質問紙調査を実施した。","方法","Who was studied (対象) and how (質問紙調査) belong to the method."],
      ["表2に示すように、回答者の約6割が～と答えた。","結果","Reporting figures from a table is the job of the results section."],
      ["この結果は、先行研究の指摘と一致すると考えられる。","考察","Comparing results with earlier studies and using a hedge (と考えられる) is interpretation: discussion."],
      ["今後の課題としたい。","おわりに","Leaving something for future work is a typical last line of the conclusion."]
    ]},
    {id:"e1u6-l2-x3", type:"spot", q:"This is an invented 要旨. Tap every sentence that reports **a result** (not the purpose, method or conclusion).", ask:"reports a result", parts:[
      {t:"本研究の目的は、大学生の睡眠時間と学業成績の関係を明らかにすることである。", flag:false, why:"本研究の目的は… states the purpose."},
      {t:"B大学の学生300名を対象に、オンラインで質問紙調査を行った。", flag:false, why:"…を対象に…調査を行った describes the method."},
      {t:"その結果、平日の睡眠時間が6時間未満の学生は、成績が低い傾向にあった。", flag:true, why:"その結果 introduces a finding: shorter sleep went with lower grades."},
      {t:"また、睡眠時間と授業の欠席回数には関連が見られた。", flag:true, why:"また adds a second finding (関連が見られた, a relationship was observed)."},
      {t:"以上から、学生の睡眠に関する支援が必要であると考えられる。", flag:false, why:"以上から…と考えられる draws a hedged conclusion from the results; it is not itself a result."}
    ]},
    {id:"e1u6-l2-x4", type:"mcq", q:"Which sentence belongs in 考察 (discussion) rather than 結果 (results)?", options:[
      {t:"この差は、調査時期が試験期間と重なったためだと考えられる。", ok:true, why:"It explains *why* a difference appeared and is hedged with だと考えられる. Explaining and interpreting is the job of 考察."},
      {t:"回答者の45%が「毎日利用する」と答えた。", why:"A percentage of respondents is a plain finding: 結果."},
      {t:"表3は、学年別の利用時間を示したものである。", why:"Describing what a table shows belongs with the results."},
      {t:"男女間で有意な差は見られなかった。", why:"Reporting that no significant difference was found is still reporting a result."}
    ]},
    {id:"e1u6-l2-x5", type:"mcq", q:"In a paper, you read 「本稿では、～について検討する」. What does 本稿 refer to?", options:[
      {t:"The paper you are reading", ok:true, why:"本稿 means “this paper”: the writer refers to their own text. 本論文 means the same."},
      {t:"The author of the paper", why:"The author is 筆者. 本稿 is the text, not the person."},
      {t:"A book the author is quoting", why:"Other people’s works are named with their author and year, not 本稿."},
      {t:"The main body, as opposed to the introduction", why:"The main body of a report is 本論. 本稿 is the whole paper."}
    ]},
    {id:"e1u6-l2-x6", type:"mcq", q:"Hana has 20 minutes to decide which of six papers to read closely for her report. What should she read in each paper?", options:[
      {t:"The title and 要旨, then the purpose at the end of はじめに and the conclusion", ok:true, why:"These parts show what each paper asks and concludes, which is exactly what she needs to choose. Detail can wait."},
      {t:"The first two pages of each paper", why:"The first pages are mostly background. She may never reach the purpose or the conclusion."},
      {t:"The 方法 section of each paper", why:"The method matters for judging a study she has already chosen, not for choosing which to read."},
      {t:"The 参考文献 of each paper", why:"References help her find more sources, but don’t show what each paper argues."}
    ]},
    {id:"e1u6-l2-x7", type:"sort", q:"Sort these sentences from an invented paper: **結果 (reporting a finding)** or **考察 (interpreting it)**?", buckets:["結果","考察"], items:[
      {t:"図1に示すように、利用者数は2年間で約2倍に増加した。", b:0, why:"A figure and a number: a plain report of what happened."},
      {t:"増加の背景には、手続きの簡素化があると考えられる。", b:1, why:"Suggesting a reason (背景には…がある) with a hedge is interpretation."},
      {t:"自由記述では、「使いやすい」という回答が最も多かった。", b:0, why:"Reporting what respondents wrote most often is a finding."},
      {t:"この点は、先行研究の結果とは異なっている。", b:1, why:"Comparing with earlier studies is a typical job of 考察."},
      {t:"ただし、本調査の対象は一つの大学に限られている。", b:1, why:"Admitting a limit of the study (限界) belongs in the discussion."},
      {t:"4年生の利用時間は、1年生の約半分であった。", b:0, why:"Comparing two groups’ figures, without explaining them, is reporting a result."}
    ]}
   ],
   apply:{intro:"Use the J-STAGE article you found in lesson 1, or any free Japanese research paper in your field.", tasks:[
    {t:"Label a paper’s parts", how:["Open the paper and list its headings in order.","Next to each heading, write which part it is (要旨, はじめに, 先行研究, 方法, 結果, 考察, おわりに, 参考文献) or “other”.","Note any part that is missing or combined with another."], write:"Heading → part (×6–10)… Missing or combined parts…"},
    {t:"Find the four sentences that matter most", how:["In the 要旨, mark the purpose, method, result and conclusion sentences.","At the end of はじめに, copy the purpose sentence (look for 目的).","In おわりに, copy the sentence that states the main conclusion.","Translate the purpose and conclusion into English in your own words."], write:"Purpose sentence… My English… Conclusion sentence… My English…"},
    {t:"Start a stock-phrase list", how:["Collect ten phrases from the paper that signal a section, such as 本研究の目的は or 今後の課題.","Write each with its reading, meaning and section."], write:"Phrase (reading) — meaning — section (×10)…"}
   ], proof:"One paper’s headings labelled by part, its purpose and conclusion sentences with your own English versions, and a list of ten section phrases."},
   read:[
     {book:"omu", where:"Section 4.3.1 “序論→本論→結論の構成”", note:"Background reading in Japanese: the guide explains the introduction–body–conclusion shape that student reports and many papers follow."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u6-l3", title:"Signposts, claims and evidence", minutes:55,
   hook:{q:"A paragraph in a Japanese paper begins: 「[確]{たし}かに、～。しかし、～。」 Where is the writer’s own view most likely to be?", options:["In the sentence after 確かに","In the sentence after しかし","Equally in both sentences","In neither: this pattern only summarises other people’s views"], answer:1, reveal:"**After しかし.** 確かに (also written たしかに, “certainly, it’s true that…”) admits a point the writer accepts but doesn’t rest on; しかし (“however”) turns to what the writer really wants to say. This concede-then-turn pattern is one of the most common in Japanese argument. Connectives like these are signposts: they tell you what the next sentence will do before you read it. This lesson sorts them by function and uses them to find a writer’s claim and evidence."},
   goals:[
     "Sort common 接続詞 by function: adding, contrast, cause and result, restating, example, comparison, change of topic",
     "Tell apart pairs learners often confuse, such as しかし and 一方, or そのため and ところが",
     "Find a writer’s 主張 (claim) using signposts, sentence endings and position",
     "Find the 根拠 (reasons and evidence) behind a claim, and tell them apart from examples"
   ],
   learn:[
    {h:"Connectives are road signs", body:[
      {lead:"A road sign doesn’t move the car, but it tells you what is coming. 接続詞 (connectives such as しかし and したがって) do the same for a reader."},
      "Unit 5 introduced [[setsuzokushi|接続詞]] and their written forms (しかし rather than でも, したがって rather than だから). Here we use them for reading. They are the Japanese version of [[signposting]]: each one tells you how the next sentence relates to the last.",
      "That makes them powerful for a learner. Even if you don’t understand every word in a sentence, the connective at its start tells you whether it adds to, contradicts, explains or concludes what came before. Strong readers glance at connectives first to see the shape of a paragraph.",
      {ex:"日本の人口は減少している。（　）、65歳以上の人口は増加している。\n\nBefore reading the second sentence, ask: what kind of word fits the gap? The two facts point in opposite directions, so a word of contrast or comparison (しかし or 一方) fits.", label:"Predicting from a gap"}
    ]},
    {h:"Signposts by function", body:[
      "Textbooks group connectives in slightly different ways and with different names, but these groups are common:",
      {table:[
        ["Function","Signposts","What comes next"],
        ["[添加]{てんか} adding","また、さらに、加えて、しかも","More in the same direction"],
        ["[逆接]{ぎゃくせつ} contrast","しかし、ところが、だが","Something against what you would expect, often the main point"],
        ["[因果]{いんが} cause → result","そのため、したがって、よって","A result or a conclusion"],
        ["[言い換え]{いいかえ} restating","つまり、すなわち、言い換えれば","The same idea, more clearly or more exactly"],
        ["[例示]{れいじ} example","たとえば（例えば）","A concrete case"],
        ["[対比]{たいひ} comparison","一方、それに対して、他方","A second thing set against the first"],
        ["[転換]{てんかん} change of topic","では、さて、ところで","A new question or topic"]
      ]},
      "Two more groups are very common in academic writing:",
      {list:[
        "**[補足]{ほそく} (adding a note):** なお (“note that…”) adds a side detail; ただし (“however, only…”) adds an exception or condition. 「なお、本稿では～を…と呼ぶ。」 is a typical use.",
        "**Summing up:** このように and 以上のように (“as shown above”) gather what came before, and are often followed by the writer’s conclusion."
      ]},
      "Some textbooks call the cause-and-result group [順接]{じゅんせつ} (a name that can also cover simple sequence), and restating may be called 同列 or 換言. Don’t worry about the names; learn what each signpost tells you to expect.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e1u6a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">Where each signpost sends you</text><rect class="d-panel" x="20" y="32" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="54" text-anchor="middle">A</text><path class="d-ink" d="M110,49 L220,49" stroke-width="2" marker-end="url(#e1u6a2)"/><text x="265" y="47" text-anchor="middle">また・さらに</text><text class="s" x="265" y="63" text-anchor="middle">more of A</text><rect class="d-panel" x="20" y="82" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="104" text-anchor="middle">A</text><path class="d-ink" d="M110,92 C160,80 160,120 120,108" stroke-width="2" marker-end="url(#e1u6a2)"/><text x="265" y="97" text-anchor="middle">しかし・ところが</text><text class="s" x="265" y="113" text-anchor="middle">against A</text><rect class="d-panel" x="20" y="132" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="154" text-anchor="middle">A</text><path class="d-ink" d="M110,149 L220,149" stroke-width="3" marker-end="url(#e1u6a2)"/><text x="265" y="147" text-anchor="middle">したがって</text><text class="s" x="265" y="163" text-anchor="middle">result of A</text><rect class="d-panel" x="20" y="182" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="204" text-anchor="middle">A</text><path class="d-ink" d="M110,199 L220,199" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#e1u6a2)"/><text x="265" y="197" text-anchor="middle">つまり</text><text class="s" x="265" y="213" text-anchor="middle">A again, clearer</text><rect class="d-panel" x="20" y="232" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="254" text-anchor="middle">A</text><path class="d-ink" d="M65,266 L65,286 L220,286" stroke-width="2" marker-end="url(#e1u6a2)"/><text x="265" y="268" text-anchor="middle">たとえば</text><text class="s" x="265" y="284" text-anchor="middle">a case of A</text><rect class="d-panel" x="20" y="302" width="90" height="34" rx="4" stroke-width="2"/><text x="65" y="324" text-anchor="middle">A</text><rect class="d-panel" x="220" y="302" width="90" height="34" rx="4" stroke-width="2"/><text x="265" y="324" text-anchor="middle">B</text><text x="165" y="314" text-anchor="middle">一方</text><text class="s" x="165" y="330" text-anchor="middle">A beside B</text></svg>', alt:"Six small diagrams. また・さらに: an arrow continues straight on from A (more of A). しかし・ところが: an arrow curls back against A. したがって: a thick arrow from A (the result of A). つまり: a dashed arrow (A again, clearer). たとえば: an arrow drops down from A (a case of A). 一方: box A beside box B (A compared with B).", cap:"Each connective tells you the direction of the next sentence before you read it."}
    ]},
    {h:"Pairs that learners mix up", body:[
      "**しかし or 一方?** しかし goes against an expectation or claim. 一方 sets two things side by side for comparison, without one cancelling the other.",
      {table:[
        ["Connective","Example","What it does"],
        ["一方","都市部では人口が増加している。一方、農村部では減少が続いている。","Compares two areas side by side"],
        ["しかし","支援制度は整えられた。しかし、利用者は増えていない。","Turns against the expectation that support would bring users"]
      ]},
      "**ところが.** ところが introduces a fact that turned out against expectation: 「予算は増えた。ところが、利用者は減少した。」 Because it reports what happened, it isn’t used to introduce the writer’s own intention or request. ✗「先行研究の多くは都市部を対象としてきた。ところが、本稿では農村部を対象としたい。」 Here しかし is the natural choice.",
      "**そのため or したがって?** Both lead to a result and often overlap. そのため (“for that reason”) leans towards a factual cause and effect; したがって (“therefore”) leans towards a logical conclusion, and often introduces the writer’s claim.",
      "**つまり or すなわち?** Both restate. すなわち is more formal and common in definitions: 「第二言語、すなわち母語の後に習得する言語」. つまり is common in papers too, especially to sum up a point in simpler words.",
      "**では in papers.** As a change of topic, では usually opens the next question: 「では、なぜ利用者は増えないのだろうか。」 This is the writer telling you a new step in the argument is starting. さて and ところで are rarer in papers, because a paper doesn’t usually change topic suddenly.",
      {warn:"A connective tells you what the writer intends the link to be. Careful reading also checks whether the link is justified: a したがって does not by itself make a conclusion follow."}
    ]},
    {h:"Finding the 主張 (claim)", body:[
      "The [主張]{しゅちょう} (*shuchō*) is the writer’s main point: what they want the reader to accept ([[shuchou]]). The [根拠]{こんきょ} (*konkyo*) are the reasons and evidence offered for it ([[konkyo]]). Research Skills calls this pattern claim, evidence and reasoning ([[claim-evidence-reasoning]]).",
      "Claims tend to appear in predictable places:",
      {list:[
        "**After a turn:** after しかし, especially following 確かに…, as in the warm-up.",
        "**After a conclusion signpost:** したがって, よって, このように, 以上のように.",
        "**With claim-like sentence endings** (Unit 5, [[bunmatsu-hyougen|文末表現]]): ～べきである, ～必要がある, ～といえる, ～と考えられる, ～のではないだろうか.",
        "**At the start or end of the paper:** the purpose in はじめに and the conclusion in おわりに."
      ]},
      "Note that ～のではないだろうか (“isn’t it the case that…?”) is not a real question: it is a softened claim. And ～と考えられる is a hedged claim, not a weak one: the writer is committing to it, with care ({{hedging-japanese}}).",
      "Where is the claim in a paragraph? Japanese school teaching names three patterns: [頭括型]{とうかつがた} (main point first), [尾括型]{びかつがた} (main point last) and [双括型]{そうかつがた} (first and again at the end). Writing guides usually advise putting the main point first, but many texts, especially 新書 and essays, build up to it at the end. So don’t assume the first sentence is the claim: check the last sentence too."
    ]},
    {h:"Finding the 根拠 (reasons and evidence)", body:[
      "根拠 also have their signals:",
      {list:[
        "**Reasons:** なぜなら～からである, というのも～, ～ためである (“this is because…”).",
        "**Data:** 表1によると, 調査の結果, 実際 (“in fact”), followed by numbers or findings.",
        "**Other researchers:** 山田（2018）によれば, ～と指摘されている."
      ]},
      "Keep 根拠 apart from **examples**. An example after たとえば illustrates a point, so the reader can picture it; a 根拠 gives a reason to believe it. Both are useful, but in a summary (lesson 5) you keep the 根拠 and usually drop the examples.",
      {ex:"近年、大学の授業でオンライン教材の利用が広がっている。たしかに、オンライン教材には、時間や場所を選ばずに学習できるという利点がある。しかし、教材を配布するだけでは、学習の継続につながらない可能性がある。なぜなら、オンライン学習では、学習者が一人で計画を立てて進めなければならないからである。実際、B大学の調査では、オンライン講座の修了率は対面講座より低かった。したがって、オンライン教材を導入する際には、学習の進み具合を確認する仕組みも併せて整える必要がある。", label:"Worked example (an invented paragraph)"},
      {table:[
        ["Sentence starts with","Job"],
        ["近年","Background"],
        ["たしかに","Concession ([譲歩]{じょうほ}): a point the writer accepts"],
        ["しかし","The problem the writer wants to raise"],
        ["なぜなら","根拠: a reason"],
        ["実際","根拠: evidence from data"],
        ["したがって","主張: ～必要がある"]
      ]},
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e1u6a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">The skeleton of the paragraph</text><rect class="d-rose" x="40" y="32" width="260" height="62" rx="6" stroke-width="2"/><text x="170" y="56" text-anchor="middle">主張 (したがって…)</text><text class="s" x="170" y="78" text-anchor="middle">a system to check progress is needed</text><rect class="d-sage" x="20" y="170" width="140" height="70" rx="6" stroke-width="2"/><text x="90" y="194" text-anchor="middle">根拠 1</text><text class="s" x="90" y="212" text-anchor="middle">なぜなら: learners</text><text class="s" x="90" y="228" text-anchor="middle">must plan alone</text><rect class="d-sage" x="180" y="170" width="140" height="70" rx="6" stroke-width="2"/><text x="250" y="194" text-anchor="middle">根拠 2</text><text class="s" x="250" y="212" text-anchor="middle">実際: lower</text><text class="s" x="250" y="228" text-anchor="middle">completion rate</text><path class="d-ink" d="M90,170 L130,98" stroke-width="2" marker-end="url(#e1u6a3)"/><path class="d-ink" d="M250,170 L210,98" stroke-width="2" marker-end="url(#e1u6a3)"/><rect class="d-soft" x="60" y="256" width="220" height="34" rx="6" stroke-width="2" stroke-dasharray="5 4"/><text x="170" y="278" text-anchor="middle">譲歩 (たしかに…): set aside</text></svg>', alt:"A claim box at the top: 主張 (したがって…), a system to check progress is needed. Two evidence boxes below send arrows up to it: 根拠 1 (なぜなら: learners must plan alone) and 根拠 2 (実際: lower completion rate). At the bottom, a dashed box: 譲歩 (たしかに…), set aside.", cap:"Two 根拠 hold up the 主張. The concession (譲歩) is acknowledged and set aside."},
      {key:"Read the connectives first: they show you which sentences are background, which are 根拠 and which is the 主張."}
    ]}
   ],
   try:[
    {id:"e1u6-l3-x1", type:"sort", q:"Sort each connective by what it signals.", buckets:["Adds more (添加)","Goes against (逆接)","Leads to a result (因果)"], items:[
      {t:"また", b:0, why:"また adds another point in the same direction."},
      {t:"さらに", b:0, why:"さらに (“furthermore”) adds a further point, often a stronger one."},
      {t:"加えて", b:0, why:"加えて (“in addition”) adds a point."},
      {t:"しかし", b:1, why:"しかし is the standard written “however”."},
      {t:"ところが", b:1, why:"ところが introduces a fact that turned out against expectation."},
      {t:"そのため", b:2, why:"そのため (“for that reason”) introduces a result."},
      {t:"したがって", b:2, why:"したがって (“therefore”) introduces a conclusion."},
      {t:"よって", b:2, why:"よって (“thus”) is a formal way to draw a conclusion."}
    ]},
    {id:"e1u6-l3-x2", type:"match", q:"Match each connective to what usually comes after it.", pairs:[
      ["たとえば","A concrete case","たとえば introduces an example (例示)."],
      ["つまり","The same idea, put more simply","つまり restates or sums up (言い換え)."],
      ["一方","A second thing compared with the first","一方 sets two things side by side (対比)."],
      ["では","The next question in the argument","In papers, では often opens a new question: 「では、なぜ…のだろうか。」"],
      ["なお","A side note or extra detail","なお adds a supplementary note (補足)."]
    ]},
    {id:"e1u6-l3-x3", type:"mcq", q:"Choose the best connective for the gap: 「都市部では人口が増加している。（　）、農村部では減少が続いている。」", options:[
      {t:"一方", ok:true, why:"The sentences compare two areas side by side, which is what 一方 (対比) does."},
      {t:"したがって", why:"したがって would mean the rural decline is a result of urban growth. The sentences only compare; they don’t claim one causes the other."},
      {t:"つまり", why:"つまり restates the same idea. A rural decline is a different fact, not the urban growth said again."},
      {t:"たとえば", why:"たとえば introduces an example of the previous point. Rural decline is not an example of urban growth."}
    ]},
    {id:"e1u6-l3-x4", type:"mcq", q:"In which sentence is ところが used naturally?", options:[
      {t:"予算は増えた。ところが、利用者は減少した。", ok:true, why:"ところが introduces a fact that went against expectation: more money, yet fewer users. This is its typical use."},
      {t:"先行研究の多くは都市部を対象としてきた。ところが、本稿では農村部を対象としたい。", why:"ところが reports a fact that turned out against expectation; it isn’t used to introduce the writer’s own intention (対象としたい). しかし would be natural."},
      {t:"大雨が降った。ところが、試合は中止になった。", why:"Cancelling a match after heavy rain is the expected result, so there is nothing surprising to mark. そのため fits."},
      {t:"調査の方法を説明した。ところが、次に結果を述べる。", why:"Moving on to the next section is not a surprise. 次に or では would be natural."}
    ]},
    {id:"e1u6-l3-x5", type:"spot", q:"An invented paragraph. Tap every sentence that gives **根拠** (a reason or evidence) for the writer’s claim.", ask:"gives 根拠", parts:[
      {t:"地方では、高齢者の移動手段の確保が課題となっている。", flag:false, why:"Background: it introduces the problem, but gives no reason for the claim."},
      " ",
      {t:"こうした地域では、路線バスだけでなく、予約制の乗り合いタクシーなどを組み合わせる必要がある。", flag:false, why:"This is the claim itself (～必要がある), not a reason for it."},
      " ",
      {t:"なぜなら、利用者の少ない地域では、決まった時刻に走る路線バスを維持する費用が大きいからである。", flag:true, why:"なぜなら～からである gives a reason: a 根拠."},
      " ",
      {t:"実際、C県の調査では、予約制の交通を導入した地域で高齢者の外出回数が増えたと報告されている。", flag:true, why:"実際 introduces evidence from a survey: a 根拠."},
      " ",
      {t:"したがって、地域の実情に合わせて交通手段を組み合わせるべきである。", flag:false, why:"したがって…べきである restates the claim as a conclusion."}
    ]},
    {id:"e1u6-l3-x6", type:"mcq", q:"「大学の授業で、学生の発言を成績に含める教員は多い。たしかに、発言を評価すれば、授業への参加を促すことができる。しかし、発言の回数だけで評価すると、考えてから話したい学生が不利になるおそれがある。したがって、発言を評価する場合には、回数ではなく内容を重視すべきである。」 Which sentence states the writer’s main claim?", options:[
      {t:"したがって、発言を評価する場合には、回数ではなく内容を重視すべきである。", ok:true, why:"したがって and ～べきである together mark the writer’s conclusion: what they want readers to accept."},
      {t:"たしかに、発言を評価すれば、授業への参加を促すことができる。", why:"たしかに marks a concession: a point the writer accepts and then sets aside."},
      {t:"大学の授業で、学生の発言を成績に含める教員は多い。", why:"This is background: it describes the situation, not the writer’s view."},
      {t:"しかし、発言の回数だけで評価すると、考えてから話したい学生が不利になるおそれがある。", why:"This raises the problem that supports the claim. The claim itself is the solution after したがって."}
    ]},
    {id:"e1u6-l3-x7", type:"order", q:"The connectives give this invented paragraph away. Put its sentences in order.", items:[
      {t:"近年、多くの大学でレポートの提出が電子化されている。", why:"近年 sets the background, so it opens the paragraph."},
      {t:"たしかに、電子提出には紙を節約できるという利点がある。", why:"たしかに concedes a point about the situation just described."},
      {t:"しかし、画面上だけで読み直すと、誤字を見落としやすいという指摘もある。", why:"しかし turns against the concession, so it must follow it."},
      {t:"したがって、提出前に一度は印刷して読み直すことが望ましい。", why:"したがって draws the conclusion from the problem, so it comes last."}
    ]}
   ],
   apply:{intro:"Use a Japanese paper or a chapter of a 新書. Any field works.", tasks:[
    {t:"Signpost hunt", how:["Choose two pages of your text.","Circle every connective at the start of a sentence.","Sort them by function: adding, contrast, cause and result, restating, example, comparison, change of topic, side note, summing up.","Note which functions the writer uses most."], write:"Connective → function (all you found)… Most common functions…"},
    {t:"Map one argument", how:["Choose one paragraph that argues something.","Write its 主張 in one Japanese sentence and in English.","List each 根拠 and the signal that marks it (なぜなら, 実際, 表1によると…).","Mark any concession (たしかに) and any example (たとえば)."], write:"主張… 根拠 1 (signal)… 根拠 2 (signal)… Concession… Examples…"},
    {t:"Read connectives first", how:["Take a new paragraph. Before reading it fully, read only the connectives.","Predict in one sentence what the paragraph argues.","Now read it properly and check your prediction."], write:"Connectives only… My prediction… What it actually said…"}
   ], proof:"A list of connectives sorted by function, one argument mapped as 主張 and 根拠 with their signals, and a prediction checked against the text."},
   read:[
     {book:"omu", where:"Section 4.4 “パラグラフ･ライティングで書く” (4.4.1 “パラグラフとトピック･センテンス”)", note:"Background reading in Japanese on paragraphs and topic sentences: knowing what writers aim for helps you find the main sentence when you read."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u6-l4", title:"Reading kanji-heavy text", minutes:55,
   hook:{q:"You meet the word [再資源化]{さいしげんか} for the first time. You know [再]{さい} means “again”, [資源]{しげん} means “resources” and [化]{か} means “becoming” or “making into”. What is the best guess?", options:["Turning used materials back into resources (recycling)","A shortage of resources","Resources owned by a city","Searching for new resources"], answer:0, reveal:"**Recycling: turning used materials back into resources.** 再資源化 appears in environmental writing, for example in figures for how much waste is recycled. You didn’t need a dictionary: the meaning was in the parts. Many academic words are built from a small set of kanji pieces like 再〜 and 〜化. This lesson teaches the most useful ones, shows how to read long noun phrases, and introduces free tools for the words the parts can’t explain."},
   goals:[
     "Guess the meaning of unfamiliar compounds from common prefixes and suffixes such as 〜化, 〜性, 〜的, 〜率, 〜者, 非〜, 未〜 and 再〜, and know the limits of guessing",
     "Recognise 漢語 + する verbs in both their noun and verb forms",
     "Read long noun phrases and titles by finding the head noun and the compound particles (に関する, における…)",
     "Use online dictionaries, pop-up readers and Word’s furigana tool, and check what they get wrong"
   ],
   learn:[
    {h:"Why academic Japanese looks so dense", body:[
      {lead:"Open a Japanese paper and you may see whole lines with hardly any hiragana. That density has a reason, and once you see it, it becomes manageable."},
      "Academic Japanese uses many Sino-Japanese words ([[kango|漢語]]; see {{kango-and-wago}} in Unit 5). Each kanji carries meaning, so a two- or three-kanji word packs in a lot. Writers also join words into long noun phrases, much as English academic writing uses [[nominalisation]].",
      {ex:"地方都市における外国人住民の情報入手に関する調査", label:"A typical paper title"},
      "That title has no verbs at all. Word by word it is: 地方都市 (regional cities) における (in) 外国人住民 (foreign residents) の 情報入手 (obtaining information) に関する (concerning) 調査 (survey): “A survey on how foreign residents in regional cities obtain information.” By the end of this lesson you will be able to take titles like this apart.",
      "Japanese university students learn much of this vocabulary by reading, not from lists, and they look words up too. Strategy matters more than knowing every kanji."
    ]},
    {h:"Build-a-word: pieces that repeat", body:[
      "A small set of prefixes and suffixes ([[kango-affix|kanji affixes]]) appears again and again. Learn them and many new words explain themselves:",
      {table:[
        ["Piece","Meaning","Examples"],
        ["〜[化]{か}","becoming, making into (-isation)","[都市化]{としか} urbanisation, [高齢化]{こうれいか} population ageing, [可視化]{かしか} visualisation"],
        ["〜[性]{せい}","quality, nature (-ity, -ness)","[可能性]{かのうせい} possibility, [重要性]{じゅうようせい} importance, [信頼性]{しんらいせい} reliability"],
        ["〜[的]{てき}","-ic, -al: relating to","[経済的]{けいざいてき} economic, [社会的]{しゃかいてき} social, [具体的]{ぐたいてき} concrete"],
        ["〜[率]{りつ}","rate, ratio","[失業率]{しつぎょうりつ} unemployment rate, [進学率]{しんがくりつ} rate of going on to higher education, [回答率]{かいとうりつ} response rate"],
        ["〜[者]{しゃ}","person who…","[研究者]{けんきゅうしゃ} researcher, [回答者]{かいとうしゃ} respondent, [高齢者]{こうれいしゃ} older person"],
        ["[非]{ひ}〜","non-","[非正規]{ひせいき} non-regular (employment), [非言語]{ひげんご} non-verbal, [非営利]{ひえいり} non-profit"],
        ["[未]{み}〜","not yet","[未解決]{みかいけつ} unsolved, [未発表]{みはっぴょう} unpublished, [未成年]{みせいねん} under age"],
        ["[再]{さい}〜","again, re-","[再検討]{さいけんとう} re-examination, [再評価]{さいひょうか} reassessment, [再分析]{さいぶんせき} reanalysis"]
      ]},
      "A few more are worth knowing: [不]{ふ}〜 (not: [不十分]{ふじゅうぶん} insufficient, [不安定]{ふあんてい} unstable), [無]{む}〜 (without: [無関係]{むかんけい} unrelated, [無作為]{むさくい} random, as in random sampling), 〜[論]{ろん} (theory of…), and 〜[観]{かん} (view of…, as in [価値観]{かちかん} values).",
      "The pieces also tell you how a word behaves in a sentence. 〜的 words work like な-adjectives: 経済的な影響 (an economic effect), 経済的に (economically). 〜性, 〜率 and 〜者 make nouns. Many 〜化 words can take する or 〜が進む: 高齢化が進む (ageing advances)."
    ]},
    {h:"The limits of guessing", body:[
      "Guessing from parts is a strong strategy for **understanding**, but a risky one for **writing**, for two reasons.",
      "First, which negative prefix a word takes is fixed by usage, not by logic. It is 不正確 (inaccurate) but 非公式 (unofficial), 無関係 (unrelated) and 未完成 (unfinished). You can’t swap them. When you write, use words you have seen, and check new ones in a dictionary.",
      "Second, a word is not always the sum of its parts. 非常勤 is 非 + 常勤 (“not full-time”: a part-time post, as in 非常勤講師). But 非常口 is 非常 (emergency) + 口 (exit): an emergency exit. And 非常に simply means “very”. Read the whole word, and if a guess doesn’t fit the sentence, look it up.",
      "Readings can surprise you too. 率 is read りつ when it means “rate” (失業率), but そつ in words such as 引率 (leading a group) and 軽率 (careless). A few words have two accepted readings: 出生率 (birth rate) is read both しゅっしょうりつ and しゅっせいりつ.",
      {warn:"Use part-by-part guessing to keep reading, then confirm the words that matter (those in the claim, the title, or repeated often) in a dictionary."}
    ]},
    {h:"漢語 + する: verbs hiding in nouns", body:[
      "Many 漢語 are nouns that become verbs by adding する. Grammars call them [漢語]{かんご}サ[変]{へん}[動詞]{どうし} (*kango sahen dōshi*, “Sino-Japanese suru verbs”). Academic writing switches freely between the noun and the verb ([[sahen-doushi]]), so learn both shapes:",
      {table:[
        ["Noun use","Verb use","Meaning"],
        ["調査を行う","[調査]{ちょうさ}する","investigate, survey"],
        ["分析を行う","[分析]{ぶんせき}する","analyse"],
        ["検討を加える","[検討]{けんとう}する","examine, consider"],
        ["～の増加が見られる","[増加]{ぞうか}する","increase"],
        ["～との指摘がある","[指摘]{してき}する","point out"],
        ["～という示唆が得られた","[示唆]{しさ}する","suggest, imply"]
      ]},
      "So 「調査を行った」 and 「調査した」 report the same action; the noun form simply sounds more formal. Watch for these verbs in the passive, which is very common in papers: 指摘されている (“it has been pointed out”), 示唆される (“it is suggested”), 実施された (“was carried out”).",
      "Not every 漢語 can take する. Nouns for things and people (問題, 研究者) and words ending in 〜性 or 〜的 can’t: you can say 増加する but not ✗可能性する or ✗経済的する."
    ]},
    {h:"Long noun phrases: find the head first", body:[
      "In Japanese, everything that describes a noun comes **before** it. So in a long phrase, the main noun (the head) is at the **end**. Find it first, then read the description backwards from it.",
      {ex:"地方の大学に進学した留学生が卒業後に直面する問題\n\nHead noun: 問題 (problems)\nWhich problems? → 卒業後に直面する (faced after graduating)\nFaced by whom? → 留学生 (international students)\nWhich students? → 地方の大学に進学した (who entered regional universities)\n\n“The problems that international students who entered regional universities face after graduating”", label:"Worked example", mono:true},
      "Titles add **compound particles** ([複合助詞]{ふくごうじょし}), which work like English prepositions ([[fukugou-joshi]]):",
      {table:[
        ["Particle","Meaning","Example"],
        ["に関する","about, concerning","敬語使用に関する研究 (a study on keigo use)"],
        ["における","in, at (a place, time or field)","日本語学習者における… (among learners of Japanese)"],
        ["による","by, through, caused by","SNSによる情報発信 (sending information via social media)"],
        ["に対する","towards, regarding","留学生に対する支援 (support for international students)"],
        ["としての","as","第二言語としての日本語 (Japanese as a second language)"],
        ["をめぐる","surrounding, over (a debate)","移民政策をめぐる議論 (debate over immigration policy)"]
      ]},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e1u6a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">Read a title from the end</text><rect class="d-rose" x="110" y="34" width="120" height="40" rx="6" stroke-width="2"/><text x="170" y="59" text-anchor="middle">研究 (head)</text><path class="d-ink" d="M170,100 L170,78" stroke-width="2" marker-end="url(#e1u6a4)"/><rect class="d-gold" x="70" y="102" width="200" height="40" rx="6" stroke-width="2"/><text x="170" y="127" text-anchor="middle">敬語使用に関する</text><path class="d-ink" d="M170,168 L170,146" stroke-width="2" marker-end="url(#e1u6a4)"/><rect class="d-sage" x="50" y="170" width="240" height="40" rx="6" stroke-width="2"/><text x="170" y="195" text-anchor="middle">日本語学習者における</text><text class="s" x="170" y="236" text-anchor="middle">Order in Japanese: bottom → top</text><text class="s" x="170" y="254" text-anchor="middle">Order in English: top → bottom</text><rect class="d-panel" x="20" y="268" width="300" height="50" rx="6" stroke-width="2"/><text x="170" y="289" text-anchor="middle">A study on the use of keigo</text><text x="170" y="307" text-anchor="middle">among learners of Japanese</text></svg>', alt:"The title 日本語学習者における敬語使用に関する研究 broken into three stacked boxes. Top: 研究 (the head noun). Middle: 敬語使用に関する, with an arrow pointing up to 研究. Bottom: 日本語学習者における, with an arrow pointing up to the middle box. Notes: the Japanese order runs bottom to top, the English order top to bottom. The translation: A study on the use of keigo among learners of Japanese.", cap:"日本語学習者における敬語使用に関する研究: start at the head noun, 研究, and work backwards."}
    ]},
    {h:"Tools that help (and their limits)", body:[
      "Free tools can take much of the pain out of kanji-heavy reading ({{japanese-reading-tools}}):",
      {list:[
        "**Online dictionaries.** [[jisho-tool|Jisho.org]] is a free Japanese–English dictionary; you can look up a kanji you can’t type by drawing it or by choosing its parts (radicals). Weblio is free with advertising and offers Japanese–Japanese (国語辞典) and Japanese–English dictionaries: a Japanese–Japanese definition is good practice once you are ready.",
        "**Pop-up dictionaries for the browser.** Extensions such as 10ten Japanese Reader (formerly Rikaichamp) and Yomitan (the successor to Yomichan) show the reading and meaning of a word when you point at it. Both are free and open source. 10ten is available for several browsers, including Firefox, Chrome, Edge and Safari; Yomitan works in Chrome, Firefox and Edge, and you add dictionaries to it after installing.",
        "**[[furigana|Furigana]] in Word.** Microsoft Word’s Phonetic Guide (ルビ in Japanese versions) adds readings above kanji: select the text, then **Home → Font group → Phonetic Guide** (menus can differ between versions). It needs Japanese language features turned on. For Japanese it usually fills in suggested readings, which you can edit.",
        "**Machine translation.** Useful for checking your understanding of a hard sentence, but it often loses hedges (と考えられる may come out as a flat statement), guesses missing subjects, and mistranslates technical terms. Use it as a second opinion, never instead of reading ({{ai-language-tools}})."
      ]},
      {warn:"Automatic readings can be wrong, especially for names of people and places and for technical terms. A pop-up or Word may give a common reading where the field uses another. Check important readings in a dictionary or in the paper itself: many papers give the author’s name in romaji or kana."},
      {h:"A routine for a dense page"},
      {ol:[
        "Read the title and headings; find each head noun.",
        "Read the page once without a dictionary, underlining words you don’t know.",
        "Look up only the words that block understanding: those in the main claim, in headings, or repeated several times.",
        "Add them to a word list with reading, meaning and an example sentence, and review it regularly ([[spaced-review]])."
      ]},
      {key:"Guess from parts to keep going, find the head noun to untangle long phrases, and use tools for the words that matter."}
    ]}
   ],
   try:[
    {id:"e1u6-l4-x1", type:"match", q:"Match each piece to its meaning.", pairs:[
      ["〜化 (都市化, 高齢化)","becoming, making into","化 turns a word into a process: 都市化 is “becoming urban”, urbanisation."],
      ["〜性 (可能性, 重要性)","quality, nature","性 makes an abstract noun of quality: possibility, importance."],
      ["〜率 (失業率, 回答率)","rate, ratio","率 (りつ) means rate: the unemployment rate, the response rate."],
      ["〜者 (研究者, 回答者)","person who…","者 (しゃ) marks a person: a researcher, a respondent."],
      ["未〜 (未解決, 未発表)","not yet","未 means something hasn’t happened yet: unsolved, unpublished."],
      ["再〜 (再検討, 再評価)","again","再 means doing something again: re-examining, reassessing."]
    ]},
    {id:"e1u6-l4-x2", type:"mcq", q:"In a method section you read: 「未回答の項目は分析から除外した。」 What were removed from the analysis?", options:[
      {t:"Questions the respondents left unanswered", ok:true, why:"未 (not yet) + 回答 (answer): items that were not answered. 除外した means they were left out of the analysis."},
      {t:"Questions with wrong answers", why:"未 means “not yet”, not “wrong”. Wrong answers would be something like 誤答."},
      {t:"Respondents who refused to take part", why:"項目 means items or questions, not people. People who answered are 回答者."},
      {t:"Answers that have not been analysed yet", why:"The sentence says the items were *excluded from* the analysis (分析から除外), not that analysis is still to come."}
    ]},
    {id:"e1u6-l4-x3", type:"mcq", q:"How is 回答率 (response rate) read?", options:[
      {t:"かいとうりつ", ok:true, why:"率 meaning “rate” is read りつ: 回答率, 失業率, 進学率."},
      {t:"かいとうそつ", why:"そつ is the reading of 率 in words about leading or haste, such as 引率 and 軽率, not in “rate” words."},
      {t:"かいとうりち", why:"りち is not a reading of 率."},
      {t:"かいとうらつ", why:"らつ is not a reading of 率."}
    ]},
    {id:"e1u6-l4-x4", type:"sort", q:"Which of these words can become a verb by adding **する** directly?", buckets:["Can take する","Cannot take する"], items:[
      {t:"調査", b:0, why:"調査する (investigate) is a 漢語 + する verb."},
      {t:"分析", b:0, why:"分析する (analyse) is a 漢語 + する verb."},
      {t:"比較", b:0, why:"比較する (compare) is a 漢語 + する verb."},
      {t:"減少", b:0, why:"減少する (decrease) is a 漢語 + する verb."},
      {t:"可能性", b:1, why:"〜性 words are nouns of quality. You say 可能性がある, not ✗可能性する."},
      {t:"経済的", b:1, why:"〜的 words work like な-adjectives: 経済的な, 経済的に. They don’t take する."},
      {t:"回答者", b:1, why:"〜者 words name people. A person can’t be turned into a verb with する; the action is 回答する."},
      {t:"失業率", b:1, why:"〜率 words name a rate, which is a quantity, not an action."}
    ]},
    {id:"e1u6-l4-x5", type:"mcq", q:"Which is the best English translation of the paper title 「日本語学習者における敬語使用に関する研究」?", options:[
      {t:"A study on the use of keigo among learners of Japanese", ok:true, why:"The head noun is 研究 (study). に関する (on, concerning) links 敬語使用 (keigo use), and における (among, in) links 日本語学習者 (learners of Japanese)."},
      {t:"Learners of Japanese study keigo", why:"The title has no verb: 研究 is a noun at the end, the head of the phrase. It names a study, not an action of learners."},
      {t:"Research on learners of Japanese as users of keigo", why:"における means “among, in” and attaches to 敬語使用, not “as users of”. The study is about keigo use."},
      {t:"Keigo research in Japanese language schools", why:"日本語学習者 means learners of Japanese, not schools, and the title doesn’t mention schools."}
    ]},
    {id:"e1u6-l4-x6", type:"mcq", q:"What is the head noun of 「地方の大学に進学した留学生が卒業後に直面する問題」?", options:[
      {t:"問題", ok:true, why:"In Japanese, describing words come before the noun, so the head is at the end: 問題 (problems). Everything before it says which problems."},
      {t:"留学生", why:"留学生 is the subject inside the description (the students who face the problems), not the head of the whole phrase."},
      {t:"大学", why:"大学 is part of the description of the students (who entered regional universities)."},
      {t:"卒業後", why:"卒業後 (after graduating) says when the problems are faced; it describes, it isn’t the head."}
    ]},
    {id:"e1u6-l4-x7", type:"mcq", q:"Mei uses a pop-up dictionary while reading. It shows しゅっせいりつ for 出生率, but her lecturer said しゅっしょうりつ. What should she conclude?", options:[
      {t:"Both readings are accepted; she can follow her lecturer and her field’s usage", ok:true, why:"Dictionaries list both readings for 出生率. When a word has two accepted readings, follow the usage of your teacher and field."},
      {t:"The pop-up dictionary is broken and shouldn’t be used", why:"The tool isn’t wrong here: it has shown one of two accepted readings. Tools are still very useful; just check readings that matter."},
      {t:"Her lecturer made a mistake", why:"しゅっしょうりつ is an accepted reading, and it is widely used in population statistics."},
      {t:"出生率 must mean two different things", why:"The two readings have the same meaning, the birth rate."}
    ]}
   ],
   apply:{intro:"You need a Japanese text in your field (a paper from lesson 1 works well) and a phone or computer.", tasks:[
    {t:"Collect ten 漢語 and take them apart", how:["From a 新書 or a J-STAGE article, collect ten 漢語 you didn’t know.","For each, write its reading and split it into parts.","Guess the meaning from the parts, then check it in Jisho.org or Weblio.","Mark which guesses were right and which parts misled you."], write:"漢語 (reading) — parts — my guess — dictionary meaning — right? (×10)…"},
    {t:"Take apart three titles", how:["Find three paper titles in CiNii Research or J-STAGE that use compound particles (に関する, における, による…).","For each, find the head noun first.","Write a natural English translation."], write:"Title → head noun → English (×3)…"},
    {t:"Set up a reading tool", how:["On a computer: open your browser’s extension store (Chrome Web Store, Firefox Add-ons or Edge Add-ons) and install 10ten Japanese Reader or Yomitan. Follow the extension’s own setup page (Yomitan asks you to add dictionaries).","On a phone: bookmark Jisho.org, or install a dictionary app you trust; copy and paste words into it as you read.","In Word (optional): paste a sentence, select it and use Home → Phonetic Guide to add furigana. Check every reading it suggests.","Use the tool on one page of your text and note anything it got wrong."], write:"Tool I set up… One reading or meaning it got wrong or couldn’t find…"}
   ], proof:"Ten 漢語 split into parts with guesses checked, three titles translated from the head noun, and one reading tool set up and tested."},
   read:[
     {book:"omu", where:"Section 4.5 “文章を読みやすくする” (4.5.1 “文の長さ”, 4.5.2 “語句と表記の統一”)", note:"Background reading in Japanese: advice to writers on sentence length and consistent wording, which explains why some texts are easier to read than others."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u6-l5", title:"Summarising in である style", minutes:55,
   hook:{q:"Your teacher asks for a 400-[字]{じ} [要約]{ようやく} (summary) of a 4,000-[字]{じ} article. Which of these belongs in it?", options:["Your own opinion of the article","The author’s main claim and key reasons","Every example the author gives","Long quotations from the article"], answer:1, reveal:"**The author’s main claim and key reasons.** A 要約 (yōyaku) restates the core of a text, shorter and in your own words. Your opinion belongs in a separate part, if the task asks for one; examples are usually cut; and long quotations use up the limit without showing you understood. This lesson shows what to keep and what to cut, how to write a summary in である style, and how to check it."},
   goals:[
     "Explain what a 要約 is and how it differs from 感想 (impressions) and 意見 (opinion)",
     "Decide what to keep (主張, main 根拠, conclusion) and what to cut (examples, repetition, detail)",
     "Write a summary in consistent である style with suitable reporting verbs",
     "Check a summary for accuracy, own wording, style and 字数"
   ],
   learn:[
    {h:"What a 要約 is, and what it isn’t", body:[
      {lead:"Summarising is one of the most common tasks in Japanese university classes, and one of the best ways to check that you have really understood a text."},
      "A [要約]{ようやく} (*yōyaku*) restates the main points of a text in fewer words and in your own words. It answers one question: **what does this text say?** It is the Japanese form of [[summary-writing]] ([[youyaku]]) (see {{quote-paraphrase-summary}} in Research Skills).",
      "A 要約 is not:",
      {list:[
        "**感想** ([感想]{かんそう}, impressions): what you felt while reading.",
        "**意見** (opinion) or **批評** ([批評]{ひひょう}, critique): whether you agree and why.",
        "**A list of quotations:** copied sentences joined together show the reader nothing about your understanding."
      ]},
      "Many tasks ask for both: 「本文を要約したうえで、あなたの意見を述べよ。」 (“Summarise the text, and then give your opinion.”) Then keep them in separate paragraphs, summary first, so your reader can always tell the author’s view from yours.",
      {tip:"Summarising in Japanese is hard because you must understand the argument and rephrase it in a second language at the same time. Japanese students find 要約 hard too. Short, regular practice helps more than one long attempt."}
    ]},
    {h:"What to keep and what to cut", body:[
      "Lesson 3 gave you the tools: find the 主張 and its 根拠, and use connectives to see what each sentence does.",
      {table:[
        ["Usually keep","Usually cut"],
        ["The 主張 (the author’s main point)","Examples after たとえば"],
        ["The main 根拠 (reasons and key evidence)","Repetitions and restatements after つまり, if the point is already clear"],
        ["The question or problem the text answers","Anecdotes and personal stories used to illustrate"],
        ["The conclusion (after したがって, このように…)","Detailed numbers, unless a figure is the point"],
        ["Important hedges and limits (～可能性がある)","Side notes after なお"]
      ]},
      "Keep the author’s level of certainty. If the text says 「～可能性がある」 (“may”), your summary must not turn it into a fact. If it says 「～という声もある」 (“some people say”), don’t make it sound like everyone says it. Changing a hedge is one of the most common summary errors, in any language ({{hedging-japanese}}).",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e1u6a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">From article to 要約</text><path class="d-soft" d="M20,32 L320,32 L250,122 L90,122 Z" stroke-width="2"/><text x="170" y="56" text-anchor="middle">Article · 4,000字</text><text class="s" x="170" y="76" text-anchor="middle">background · examples · data</text><text class="s" x="170" y="92" text-anchor="middle">· repetition · 主張 · 根拠</text><text class="s" x="170" y="108" text-anchor="middle">cut: 例・繰り返し・細部</text><path class="d-ink" d="M170,124 L170,146" stroke-width="2" marker-end="url(#e1u6a5)"/><rect class="d-gold" x="60" y="148" width="220" height="62" rx="6" stroke-width="2"/><text x="170" y="172" text-anchor="middle">Main points</text><text class="s" x="170" y="192" text-anchor="middle">one per paragraph or section</text><path class="d-ink" d="M170,210 L170,232" stroke-width="2" marker-end="url(#e1u6a5)"/><rect class="d-sage" x="90" y="234" width="160" height="62" rx="6" stroke-width="2"/><text x="170" y="258" text-anchor="middle">要約 · 400字</text><text class="s" x="170" y="278" text-anchor="middle">主張 + 根拠, である</text><text class="s" x="170" y="318" text-anchor="middle">Your own words, the author’s view</text></svg>', alt:"A funnel. At the top, a wide shape: the article, 4,000 characters, containing background, examples, data, repetition, claim and evidence; examples, repetition and detail are cut. An arrow leads to a box: main points, one per paragraph or section. Another arrow leads to a small box: the 要約, 400 characters, claim plus evidence, in である style. Note: your own words, the author’s view.", cap:"A 要約 keeps the author’s argument and drops what only illustrates or repeats it."}
    ]},
    {h:"Five steps to a summary", body:[
      {ol:[
        "**Read the whole text first.** Find the question it answers (問い) and its 主張. In a paper, start with the 要旨, はじめに and おわりに (lesson 2).",
        "**Mark the main sentence of each paragraph or section.** Look for the signposts from lesson 3.",
        "**Decide what to keep and what to cut,** using the table above.",
        "**Write without looking at the text.** Put each main point into your own words, in である style, and join the points with connectives (また, しかし, そのため, したがって).",
        "**Check** against the original: accuracy, hedges, style and length."
      ]},
      "Writing without looking (step 4) is the key to using your own words. If you write with the original open, it is very easy to copy its sentences with a few words changed, which Research Skills calls [[patchwriting]]. You may keep the author’s key technical terms; you can’t keep their sentences (see [[paraphrase]], and Unit 7 for quoting in Japanese, {{quoting-in-japanese}})."
    ]},
    {h:"Writing it in である style", body:[
      "Summaries in reports are written in [[dearu-tai|である style]] (Unit 5: {{desu-masu-and-dearu}}). Keep the whole summary in one style: never mix です・ます sentences in.",
      "These frames are common:",
      {table:[
        ["Frame","Use"],
        ["この論文は、～について論じたものである。","Opening: what the text is about"],
        ["筆者は、～と主張している。","The main claim"],
        ["筆者によれば、～。","Reporting the author’s view"],
        ["その根拠として、～が挙げられている。","Introducing the reasons"],
        ["さらに、～と指摘している。","Adding another point"],
        ["以上から、筆者は～と結論づけている。","The conclusion"]
      ]},
      "Choose the reporting verb that matches what the author does:",
      {table:[
        ["Verb","Meaning"],
        ["[述]{の}べている","states, says (neutral)"],
        ["[主張]{しゅちょう}している","argues, claims (the main point)"],
        ["[指摘]{してき}している","points out (a problem or fact)"],
        ["[論]{ろん}じている","discusses, argues at length"],
        ["[結論]{けつろん}づけている","concludes"]
      ]},
      "The ～ている form is normal for reporting what a text says, because the text goes on saying it. In a report that summarises a named source, name the author and year once at the start: 「田中（2021）は、～と述べている。」 After that, また and さらに are often enough; you don’t need the author’s name in every sentence. In a 要約 exercise, 筆者 means the author of the text you are summarising. In a longer report, where 筆者 can also mean you, the report’s writer (lesson 2), use the author’s name (田中は…) instead to avoid confusion. Likewise, don’t call the source 本稿: in your own writing 本稿 means your own report."
    ]},
    {h:"A worked example", body:[
      "Here is an invented source text of about 250 characters:",
      {ex:"近年、多くの大学図書館が、静かに本を読む場所から、学生が話し合いながら学ぶ場所へと変わりつつある。たとえば、可動式の机やホワイトボードを備えた「ラーニング・コモンズ」を設ける大学が増えている。こうした空間では、学生が互いに説明し合うことで理解が深まると期待されている。しかし、話し声が気になり、一人で集中したい学生が図書館を利用しにくくなったという声もある。つまり、一つの空間ですべての学び方に対応することは難しい。したがって、大学図書館は、話し合う場と静かに学ぶ場を明確に分けて設計する必要がある。", label:"Source text (invented)"},
      "And a summary of about 140 characters:",
      {ex:"筆者によれば、多くの大学図書館は、学生が話し合いながら学ぶ場へと変わりつつある。しかし、静かに集中したい学生が利用しにくくなったという声もあり、一つの空間ですべての学び方に対応することは難しい。そのため筆者は、話し合う場と静かに学ぶ場を分けて設計する必要があると主張している。", label:"要約 (about half the length)"},
      "What happened:",
      {list:[
        "**Cut:** the example (ラーニング・コモンズ, the movable desks), and the expected benefit, which only supports the background.",
        "**Kept:** the change (still “many” libraries, 多くの, not all of them), the problem, and the claim (～必要がある).",
        "**Kept the hedge:** 「という声もある」 stays, because the text reports some students’ views, not a proven fact.",
        "**Reworded:** sentences were combined and connectives chosen to show the logic (しかし, そのため)."
      ]},
      "Compare a weak attempt:",
      {ex:"✗ 大学図書館は変わりつつあります。たとえば、可動式の机やホワイトボードを備えた「ラーニング・コモンズ」を設ける大学が増えている。私も、静かに勉強できる場所は必要だと思う。", label:"A weak summary"},
      "It mixes です・ます (変わりつつあります) with である, keeps an example copied word for word, adds the writer’s own opinion (私も…と思う), and loses the author’s claim entirely."
    ]},
    {h:"Checking your summary", body:[
      {list:[
        "Is the author’s **主張** there, clearly?",
        "Are the main **根拠** there, and are examples and side notes gone?",
        "Are the author’s **hedges** kept (可能性がある, という声もある)?",
        "Is there **none of your own opinion**, and none of your own extra facts?",
        "Is it in **your own words**, apart from key terms?",
        "Is it all in **である style**, with written words rather than spoken ones ({{written-vs-spoken-japanese}})?",
        "Is it within the **字数** (character count)?"
      ]},
      "Japanese length limits are counted in characters (字). Punctuation marks such as 、 and 。 and brackets such as 「」 usually count as one character each. Word processors count characters for you; check which count your teacher means. Many teachers expect you to use most of the limit, so a 400字以内 summary of 150 characters may lose marks. If you are not sure, ask.",
      {warn:"AI summarising tools can drop hedges, add claims the text doesn’t make, and miss the main point of a long argument. Follow your course’s rules on AI, check any tool’s output against the original, and never hand in a machine-made summary as your own ({{japanese-plagiarism-ai}})."},
      {key:"A good 要約 is the author’s argument, shorter, in your own words and in である style, with the author’s hedges intact and your opinion left out."}
    ]}
   ],
   try:[
    {id:"e1u6-l5-x1", type:"sort", q:"You are summarising a paper. Sort each element: **usually keep** or **usually cut**?", buckets:["Usually keep","Usually cut"], items:[
      {t:"The author’s main claim", b:0, why:"The 主張 is the heart of any summary."},
      {t:"The main reasons given for the claim", b:0, why:"The 根拠 show why the author believes the claim. Keep the main ones."},
      {t:"The author’s conclusion", b:0, why:"The conclusion (often after したがって or 以上から) belongs in the summary."},
      {t:"An example introduced with たとえば", b:1, why:"Examples illustrate. They help the original reader, but a summary keeps the point, not the illustration."},
      {t:"A personal story used to illustrate a point", b:1, why:"An anecdote is a kind of example. Cut it unless it is the evidence itself."},
      {t:"A sentence that restates an earlier point", b:1, why:"Repetition adds nothing to a summary."},
      {t:"Your own view of the author’s argument", b:1, why:"A 要約 reports the author’s view. If the task asks for your opinion, write it separately."}
    ]},
    {id:"e1u6-l5-x2", type:"mcq", q:"The source says: 「この結果から、睡眠時間の短さが成績の低下につながっている可能性が考えられる。」 Which summary sentence is the most accurate?", options:[
      {t:"筆者は、睡眠時間の短さが成績の低下につながっている可能性を指摘している。", ok:true, why:"It keeps the hedge (可能性) and reports it with a suitable verb (指摘している), in である style."},
      {t:"筆者は、睡眠不足が成績低下の原因であることを証明した。", why:"The source only suggests a possibility. “Proved that sleep loss is the cause” is far stronger than what the author said."},
      {t:"睡眠時間が短いと成績が下がるので、学生はもっと寝るべきだと思う。", why:"It drops the hedge, adds advice the author didn’t give, and expresses the summariser’s own opinion (と思う)."},
      {t:"この結果から、睡眠時間の短さが成績の低下につながっている可能性が考えられます。", why:"It copies the sentence and switches to です・ます style. It shows no understanding and breaks the summary’s style."}
    ]},
    {id:"e1u6-l5-x3", type:"spot", q:"A student’s 要約 of the library text in this lesson. Tap every part that is a **problem** in a である-style summary.", ask:"is a problem", parts:[
      {t:"筆者によれば、多くの大学図書館は話し合いながら学ぶ場へと変わりつつあります。", flag:true, why:"変わりつつあります is です・ます style. A である-style summary needs 変わりつつある."},
      " ",
      {t:"たとえば、可動式の机やホワイトボードを備えた「ラーニング・コモンズ」を設ける大学が増えている。", flag:true, why:"This is an example, copied word for word. A summary cuts examples and doesn’t copy sentences."},
      " ",
      {t:"しかし、静かに集中したい学生が利用しにくくなったという声もある。", flag:false, why:"This is the problem the author raises, with its hedge (という声もある) kept. It belongs in the summary."},
      " ",
      {t:"私も、静かに勉強できる場所は必要だと思う。", flag:true, why:"This is the student’s own opinion. It has no place in the 要約 itself."},
      " ",
      {t:"そのため筆者は、話し合う場と静かに学ぶ場を分けて設計する必要があると主張している。", flag:false, why:"The author’s claim, reported with 主張している in である style: exactly what a summary needs."}
    ]},
    {id:"e1u6-l5-x4", type:"mcq", q:"Which is the correct である-style version of 「筆者は、制度の見直しが必要だと述べています。」?", options:[
      {t:"筆者は、制度の見直しが必要だと述べている。", ok:true, why:"述べています becomes 述べている: the plain form of ている, as である style requires."},
      {t:"筆者は、制度の見直しが必要だと述べてる。", why:"述べてる drops the い of ている. That is a spoken contraction (話し言葉) and doesn’t belong in written reports."},
      {t:"筆者は、制度の見直しが必要だと述べているである。", why:"である attaches to nouns and な-adjectives (or to の, as in ～のである), not directly to a verb. The plain verb form 述べている already ends the sentence."},
      {t:"筆者は、制度の見直しが必要だと述べております。", why:"述べております uses おる, a courteous form (丁重語, also called 謙譲語Ⅱ), plus ます. It is still です・ます style, suited to formal speech and letters, not to a である summary."}
    ]},
    {id:"e1u6-l5-x5", type:"order", q:"Put the steps for writing a 要約 in order.", items:[
      {t:"Read the whole text and find its question and 主張", why:"You can’t choose what to keep until you know the main point."},
      {t:"Mark the main sentence of each paragraph or section", why:"This turns a long text into a short list of points."},
      {t:"Decide what to keep (主張, 根拠) and what to cut (examples, repetition)", why:"Choosing comes before writing."},
      {t:"Write in your own words in である style, without looking at the text", why:"Writing from your notes, not the original, keeps the wording your own."},
      {t:"Check accuracy, hedges, style and 字数 against the original", why:"Checking comes last, when there is a full draft to compare."}
    ]},
    {id:"e1u6-l5-x6", type:"match", q:"Match each reporting verb to its meaning.", pairs:[
      ["述べている","states, says (neutral)","述べる is the neutral verb for what a text says."],
      ["主張している","argues, claims","主張する reports the author’s main point."],
      ["指摘している","points out","指摘する is used for drawing attention to a problem or fact."],
      ["論じている","discusses at length","論じる means to discuss or argue a topic in depth."],
      ["結論づけている","concludes","結論づける reports the conclusion the author reaches."]
    ]},
    {id:"e1u6-l5-x7", type:"number", q:"Your teacher asks for a summary of 400字以内 (400 characters or fewer) and says it must be at least 90% of the limit. What is the smallest number of characters your summary can have?", answer:360, tol:0, unit:"字", why:"90% of 400 = 0.9 × 400 = 360. So the summary must be between 360 and 400 characters, counting punctuation such as 、 and 。 as characters.", wrongs:[
      {v:40, tol:0, why:"40 is 10% of 400: the part you are allowed to leave unused, not the minimum length."},
      {v:400, tol:0, why:"400 is the maximum (以内 means “within”), not the minimum."},
      {v:440, tol:0, why:"440 is 110% of 400. 以内 means the summary must not go over 400."}
    ]}
   ],
   apply:{intro:"Use any Japanese text of 1,500–4,000 characters: a section of a paper, a chapter of a 新書, or an article from your course.", tasks:[
    {t:"Write a 400-字 summary", how:["Read the text and write its 主張 in one sentence.","List the main 根拠 and mark what you will cut.","Close the text and write a summary of 360–400 characters in である style.","Count the characters with a word processor."], write:"主張 in one sentence… 根拠… What I cut… My summary (360–400字)…"},
    {t:"Check it against the list", how:["Go through the checklist in this lesson, one point at a time.","Compare every hedge in the original with your summary.","Underline any phrase longer than a technical term that you copied, and reword it."], write:"Problems I found and how I fixed them…"},
    {t:"Summarise, then respond", how:["Take the same text. Write a second short paragraph with your own opinion, starting 「この主張に対して、私は…」 or 「筆者の主張には…」.","Make sure a reader can tell exactly where the summary ends and your opinion begins."], write:"My opinion paragraph…"}
   ], proof:"A 360–400-character summary in である style, checked against the checklist, and a separate paragraph giving your own view."},
   read:[
     {book:"omu", where:"Section 2 “アカデミック･ライティングとは” (2.1 “論理的にわかりやすい客観的な文章をめざす”, 2.2 “作文・感想文とは異なる”)", note:"In Japanese: why academic writing is not a 感想文 (a piece of impressions), which is the same line a 要約 must keep."}
   ]
  }
  ],
  checkpoint:["e1u6-q02","e1u6-q05","e1u6-q11","e1u6-q14","e1u6-q20","e1u6-q23","e1u6-q29","e1u6-q32","e1u6-q35","e1u6-q38","e1u6-q42","e1u6-q44"],
  codex:[
   {id:"reading-japanese-papers", title:"Japanese academic texts and how to read them", aka:["論文","新書","白書","紀要","学術雑誌","査読","reading academic Japanese"], tags:["academic Japanese","reading"],
    summary:"The main kinds of Japanese academic text (論文, レポート, 新書, 白書, 学術雑誌, 紀要), how each is checked, and a reading order that saves time.",
    levels:{
     starter:[
      "Japanese academic reading lists mix several kinds of text. Knowing which kind you hold tells you how to read it and how much weight it can carry, like knowing whether a map is a tourist leaflet or a survey map.",
      {list:[
        "**論文** (*ronbun*): a research paper, in a journal or bulletin, or a thesis.",
        "**新書** (*shinsho*): a short paperback by a specialist for general readers: a good first read.",
        "**白書** (*hakusho*): a government report on a policy area, with official statistics.",
        "**学術雑誌** and **学会誌**: academic journals, often published by academic societies.",
        "**紀要** (*kiyō*): a bulletin of papers from a university, faculty or institute.",
        "**レポート**: a student assignment."
      ]},
      "Academic Japanese is hard for everyone at first, including Japanese first-year students. Start broad (a 新書), then move to papers, and read each paper’s abstract (要旨) before deciding to read the whole thing.",
      {key:"Know the kind of text before you start reading it."}
     ],
     builder:[
      {h:"How each kind is checked"},
      "[[sadoku|査読]] (peer review) is the main dividing line. Papers in society journals are usually peer-reviewed (査読付き論文). 紀要 vary: some review papers, many only edit them, so check the bulletin’s policy. 新書 are edited by publishers but not peer-reviewed. 白書 are official government publications: authoritative for data, but they present the government’s own view. Student レポート and 卒業論文 are marked, not peer-reviewed.",
      {h:"Which to use for what"},
      {table:[
        ["Need","Go to"],
        ["A readable overview and key terms","新書, textbook chapters"],
        ["A map of a research area","A review article (総説, レビュー論文)"],
        ["Official statistics","白書 and government statistics"],
        ["Original findings to cite","Peer-reviewed journal papers"],
        ["Local or institutional studies","紀要, theses in repositories"]
      ]},
      {h:"A reading order"},
      "Overview first, then abstracts, then full texts for the few papers that matter. Within a paper: 要旨 → the purpose at the end of はじめに → おわりに → figures and tables → 考察 → 方法 if needed ({{japanese-paper-structure}}). Keep a growing list of key terms with readings."
     ],
     pro:[
      "**Peer review is a signal, not a verdict.** A peer-reviewed paper can be weak, and a well-argued 紀要 paper can be valuable. Judge the method and evidence ({{critical-appraisal}}), and note what kind of checking the text has had when you decide how much to rest on it.",
      "**Grey literature.** 白書, institutional reports and many 紀要 are {{grey-literature|grey literature}}. They are often the best source for local data and practice, and in some fields (education, social welfare, regional studies) much Japanese research appears first in 紀要. Many fields also publish in English; check whether key Japanese studies have English versions or English abstracts.",
      "**Theses.** 卒業論文 are rarely published. 修士論文 may be held only by the university; 博士論文 are now commonly made available online through university repositories, so search IRDB and CiNii Research for them.",
      "**新書 as sources.** Teachers differ on whether 新書 may be cited in reports. A common approach is to use them for orientation and follow their references back to the original studies. When you do cite one, treat it as one author’s interpretation.",
      "**Genre differences.** Humanities papers are built around an argument with many notes (注), while empirical papers follow 序論・方法・結果・考察. Reading strategy should follow the genre: in an argument-based paper, the claims are spread through the sections, not concentrated in 考察."
     ]
    },
    related:["japanese-paper-structure","finding-japanese-research","japanese-signposts","academic-japanese","peer-review","grey-literature"],
    read:[{book:"omu", where:"Section 4.2 “疑い深く調べる”"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方, section 2 and contents (PDF)", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"},{t:"J-STAGE Overview", url:"https://www.jstage.jst.go.jp/static/pages/JstageOverview/-char/en"}],
    checked:"2026-11"
   },
   {id:"japanese-paper-structure", title:"Structure of a Japanese research paper (論文の構成)", aka:["要旨","はじめに","序論","先行研究","方法","結果","考察","おわりに","結論","参考文献","IMRaD in Japanese"], tags:["academic Japanese","reading","research papers"],
    summary:"The usual parts of a Japanese 論文, the stock phrases that mark each part, how it maps to IMRaD, and the humanities variant.",
    levels:{
     starter:[
      "Most Japanese research papers in the sciences and social sciences follow one shape. Learn it once and you can find your way around almost any paper, like knowing where the kitchen and bathroom usually are in a house.",
      {ol:[
        "**要旨** (*yōshi*): the abstract.",
        "**はじめに / 序論**: background, the gap, the purpose (目的).",
        "**先行研究**: earlier studies.",
        "**方法**: how the study was done.",
        "**結果**: what was found.",
        "**考察** (*kōsatsu*): what the findings mean.",
        "**おわりに / 結論**: conclusions and future tasks.",
        "**参考文献**: works cited."
      ]},
      "The writer calls the paper 本稿 (“this paper”), the study 本研究 (“this study”) and themselves 筆者 (“the author”).",
      {key:"Read 要旨 → purpose → conclusion first; slow down only for papers that matter."}
     ],
     builder:[
      {h:"Phrases that mark each part"},
      {table:[
        ["Part","Typical phrase"],
        ["要旨","本研究の目的は、～ことである。"],
        ["はじめに","近年、～が注目されている。しかし、～は十分に検討されていない。そこで本稿では…"],
        ["先行研究","山田（2018）は、～と指摘している。"],
        ["方法","～を対象に、～調査を実施した。"],
        ["結果","表1に示すように、～。～ことが明らかになった。"],
        ["考察","～と考えられる。～と一致する。"],
        ["おわりに","本稿では、～を検討した。今後の課題としたい。"]
      ]},
      {h:"IMRaD in Japanese"},
      "序論 (Introduction), 方法 (Methods), 結果 (Results) and 考察 (Discussion) follow the same logic as [[imrad]] in English ({{paper-structure}}): broad background narrowing to one study, then widening to its meaning. Many papers end with a short おわりに or 結論 and list 注 (notes) and 参考文献 or 引用文献.",
      "結果 reports; 考察 interprets. Explanations (～ためだと考えられる), comparisons with earlier studies and admitted limits belong in 考察.",
      {h:"A reading order"},
      "Read the 要旨 first. If the paper is relevant, read the end of はじめに for the purpose (look for 目的 and そこで本稿では), then おわりに for the conclusions, then the figures and tables (図・表), then 考察. Read 方法 closely only when you need to judge or use the study. The author refers to the paper as 本稿 or 本論文, to the study as 本研究 and to themselves as 筆者; Japanese papers rarely use 私."
     ],
     pro:[
      "**Variation.** Headings vary by field and journal: 序論 or はじめに, 結論 or おわりに, 研究方法 or 調査の概要, 結果と考察 combined. Some papers put 先行研究 inside はじめに; others give it a full section. Numbering (1., 1.1, 1.2) is the norm, and some papers number はじめに as 1.",
      "**Humanities.** Papers in literature, history, philosophy and law are usually organised around an argument: はじめに, then numbered sections with content titles, おわりに, and extensive notes (注), often footnotes or endnotes holding sources and side arguments. There is no 方法 or 結果; the purpose is still stated in はじめに.",
      "**Theses.** 卒業論文, 修士論文 and 博士論文 add a title page, 目次 (contents), chapters (第1章…), 謝辞 (acknowledgements) and often appendices (付録).",
      "**Abstracts.** 要旨 may be called 抄録, 概要 or アブストラクト. Many Japanese journals also print an English abstract, which can help you check your understanding, though it is sometimes shorter or less precise than the Japanese one.",
      "**Using the references.** 参考文献 lists are usually in author–year form, often with Japanese works first in 50音順 and other-language works after, though practice varies ({{japanese-references}}). Follow them to find related work ({{citation-chasing}})."
     ]
    },
    related:["reading-japanese-papers","paper-structure","japanese-signposts","summarising-in-japanese","japanese-report-structure"],
    read:[{book:"omu", where:"Section 4.3.1 “序論→本論→結論の構成”"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方, section 2 and contents (PDF)", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"
   },
   {id:"japanese-signposts", title:"接続詞 as signposts: following a Japanese argument", aka:["接続詞","connectives","添加","逆接","因果","言い換え","例示","対比","転換","主張","根拠"], tags:["academic Japanese","reading","argument"],
    summary:"Japanese connectives grouped by function, pairs that are easy to confuse, and how to use them to find a writer’s 主張 (claim) and 根拠 (evidence).",
    levels:{
     starter:[
      "Connectives (接続詞) at the start of a sentence are road signs. They tell you what the next sentence will do before you read it:",
      {list:[
        "また, さらに: more of the same.",
        "しかし, ところが: something against expectation, often the main point.",
        "そのため, したがって: a result or conclusion.",
        "つまり, すなわち: the same idea said again.",
        "たとえば: an example.",
        "一方: a second thing compared with the first.",
        "では: a new question."
      ]},
      "Use them to find the argument. The writer’s **主張** (*shuchō*, claim) often comes after しかし or したがって; the **根拠** (*konkyo*, reasons and evidence) after なぜなら or 実際.",
      {key:"Read the connectives first to see the shape of a paragraph."}
     ],
     builder:[
      {h:"By function"},
      {table:[
        ["Function","Signposts"],
        ["添加 (adding)","また、さらに、加えて、しかも"],
        ["逆接 (contrast)","しかし、ところが、だが"],
        ["因果 / 順接 (result)","そのため、したがって、よって"],
        ["言い換え (restating)","つまり、すなわち、言い換えれば"],
        ["例示 (example)","たとえば"],
        ["対比 (comparison)","一方、それに対して、他方"],
        ["転換 (new topic)","では、さて、ところで"],
        ["補足 (note)","なお、ただし"],
        ["Summing up","このように、以上のように"]
      ]},
      {h:"Easily confused"},
      {list:[
        "**しかし vs 一方**: しかし goes against an expectation; 一方 compares two things side by side.",
        "**ところが**: a fact that turned out against expectation; not used before the writer’s own intention or request.",
        "**そのため vs したがって**: both lead to a result; したがって leans towards a logical conclusion and often introduces the claim.",
        "**つまり vs すなわち**: すなわち is more formal, common in definitions."
      ]},
      {h:"Claims and evidence"},
      "Claims: after しかし (especially after 確かに), after したがって or このように, and with endings such as ～べきである, ～必要がある, ～といえる, ～と考えられる, ～のではないだろうか ({{sentence-endings-japanese}}). Evidence: なぜなら～からである, ～ためである, 実際, 表1によると, citations. Examples (たとえば) illustrate; they are not 根拠.",
      {h:"Using them while reading"},
      "Before reading a hard paragraph closely, read only its connectives and predict its shape: background, concession, turn, reasons, conclusion. Then read it properly and check. Connectives also help with sentences you only partly understand: a sentence that starts with たとえば can be skimmed on a first reading without losing the argument, while one that starts with したがって deserves your full attention."
     ],
     pro:[
      "**Names vary.** Japanese grammars and textbooks group connectives differently: 順接 may include both cause–result and simple sequence; restating may be called 同列 or 換言; some lists separate 並列 (および, ならびに) and 選択 (または, あるいは, もしくは). The function matters more than the label.",
      "**Paragraph patterns.** Japanese school teaching distinguishes 頭括型 (main point first), 尾括型 (main point last) and 双括型 (both). Academic writing guides usually recommend putting the main point first, but 新書, essays and some humanities writing build towards it, so check the last sentence as well as the first.",
      "**Concession structures.** 確かに～。しかし、～。 and ～ものの、～ / ～とはいえ、～ grant a point before limiting it. The material after the turn usually carries the writer’s position.",
      "**Implicit links.** Not every link is marked. Japanese writing often leaves the connective out when the relation is clear, and sentence-final forms (～のである, ～からである, ～ためである) can do the work instead: ～のである often presents an explanation or the writer’s conclusion, and ～からである gives a reason.",
      "**Critical reading.** A connective states the link the writer intends. Check it: does the evidence before したがって really support what follows? Does 一方 hide a contrast that needs explaining?"
     ]
    },
    related:["japanese-paper-structure","summarising-in-japanese","sentence-endings-japanese","hedging-japanese","argument-structure"],
    read:[{book:"omu", where:"Section 4.4.1 “パラグラフとトピック･センテンス”"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方, section 2 and contents (PDF)", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"
   },
   {id:"reading-kanji-compounds", title:"Reading kanji compounds and long noun phrases", aka:["漢語","kanji compounds","〜化","〜性","〜的","〜率","非","未","再","漢語サ変動詞","複合助詞"], tags:["academic Japanese","reading","vocabulary"],
    summary:"Guessing the meaning of unfamiliar 漢語 from common prefixes and suffixes, recognising 漢語 + する verbs, and reading long noun phrases from the head noun.",
    levels:{
     starter:[
      "Academic Japanese is full of [[kanji-compound|kanji compounds]] ([[kango|漢語]]). Many are built from a small set of repeating pieces, like Lego bricks:",
      {list:[
        "〜化: becoming (都市化 urbanisation)",
        "〜性: quality (可能性 possibility)",
        "〜的: -ic, -al (経済的 economic)",
        "〜率: rate (失業率 unemployment rate)",
        "〜者: person (研究者 researcher)",
        "非〜: non- (非正規 non-regular)",
        "未〜: not yet (未解決 unsolved)",
        "再〜: again (再検討 re-examination)"
      ]},
      "Long noun phrases put all the description **before** the noun. Find the last noun (the head) and read backwards: 「日本語学習者における敬語使用に関する研究」 is a 研究 (study) on keigo use among learners of Japanese.",
      {key:"Guess from the parts to keep reading; check the words that matter."}
     ],
     builder:[
      {h:"How the pieces behave"},
      "〜的 words work like な-adjectives (経済的な影響, 経済的に). 〜性, 〜率 and 〜者 make nouns. Many 〜化 words take する or が進む (高齢化が進む).",
      {h:"漢語 + する"},
      "Many 漢語 nouns become verbs with する (漢語サ変動詞): 調査する, 分析する, 検討する, 増加する, 指摘する, 示唆する. Papers switch between noun and verb: 調査を行った = 調査した; ～の増加が見られる ≈ ～が増加している. Watch for passives: 指摘されている (“has been pointed out”), 示唆される (“is suggested”). Words for things and people, and 〜性 and 〜的 words, don’t take する.",
      {h:"Compound particles"},
      {table:[
        ["Particle","Meaning"],
        ["に関する","about, concerning"],
        ["における","in, at, among"],
        ["による","by, through, caused by"],
        ["に対する","towards, regarding"],
        ["としての","as"],
        ["をめぐる","surrounding, over"]
      ]},
      "In a title, find the head noun at the end, then attach each 〜に関する or 〜における phrase to what follows it.",
      {h:"Limits"},
      "Guess to keep reading, but confirm the words that matter (in the claim, the title, or repeated often) in a dictionary. Which negative prefix a word takes is fixed by usage (不正確, 非公式, 無関係, 未完成), and some words split differently from how they look: 非常口 is 非常 + 口, an emergency exit, not 非 + 常口."
     ],
     pro:[
      "**Lexical, not logical.** Which negative prefix a word takes is fixed: 不正確 but 非公式, 無関係, 未完成. Guessing is for comprehension; for writing, use attested words and check a dictionary or corpus.",
      "**False friends.** 非常勤 (part-time post) is 非 + 常勤, but 非常口 (emergency exit) is 非常 + 口, and 非常に means “very”. If a guess doesn’t fit the context, the split is probably wrong.",
      "**Readings.** Suffix readings are usually stable (率 = りつ for “rate”), but the same kanji may read differently in other words (引率 いんそつ, 軽率 けいそつ), and some words have two accepted readings (出生率: しゅっしょうりつ, しゅっせいりつ). Follow your field’s usage.",
      "**Nominal style.** Academic Japanese often turns verbs into nouns (～の増加, ～の検討) and chains them with の and compound particles. Long chains are harder to read; Japanese writing guides themselves advise keeping sentences short. When a phrase resists you, rewrite it as a sentence with a verb: 外国人住民の情報入手 → 外国人住民が情報を入手する.",
      "**Kanji density as a signal.** Sections dense with 漢語 (方法, 結果) often contain fixed technical terms; sections with more kana (はじめに, 考察) often carry the argument. Budget your dictionary time accordingly."
     ]
    },
    related:["japanese-reading-tools","kango-and-wago","reading-japanese-papers","noun-phrases-nominalisation"],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方 , section 2 and contents (PDF; section 4.5 on sentence length is in the full guide)", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"
   },
   {id:"japanese-reading-tools", title:"Tools for reading Japanese", aka:["Jisho.org","Weblio","10ten Japanese Reader","Yomitan","pop-up dictionary","Phonetic Guide","ルビ","furigana tools"], tags:["academic Japanese","reading","tools"],
    summary:"Free online dictionaries, browser pop-up readers, Word’s furigana tool and machine translation: what each does well and what to check.",
    levels:{
     starter:[
      "Nobody reads academic Japanese without looking words up, Japanese students included. A few free tools make it much faster:",
      {list:[
        "**[[jisho-tool|Jisho.org]]**: a free Japanese–English dictionary. You can find a kanji you can’t type by drawing it or picking its parts.",
        "**Weblio**: free online dictionaries (with advertising), including Japanese–Japanese and Japanese–English.",
        "**Pop-up dictionaries**: browser extensions such as 10ten Japanese Reader and Yomitan show a word’s reading and meaning when you point at it.",
        "**Furigana in Word**: the Phonetic Guide adds readings above kanji."
      ]},
      "Tools save time, but they make mistakes, especially with names and technical terms. Check the words that matter.",
      {key:"Look up the words that block your understanding, not every word."}
     ],
     builder:[
      {h:"Pop-up readers"},
      "**10ten Japanese Reader** (formerly Rikaichamp) is free and open source, for Firefox, Chrome, Edge and Safari, and switches between word, kanji and name dictionaries. **Yomitan**, the successor to Yomichan (which its developer stopped maintaining in 2023), is free and open source for Chrome, Firefox and Edge; you add dictionaries to it after installing, and it can also create flashcards. Install either from your browser’s official extension store.",
      {h:"Furigana in Microsoft Word"},
      "Select the text, then **Home → Font group → Phonetic Guide** (ルビ in Japanese versions; menus can differ by version). Japanese language features must be turned on. For Japanese, Word usually fills in suggested readings; check them.",
      {h:"Machine translation"},
      "Good as a second opinion on a hard sentence. Watch for lost hedges (と考えられる turned into a flat statement), invented subjects (Japanese often leaves them out) and wrong technical terms. Never use it instead of reading, and follow your course’s rules ({{ai-language-tools}}).",
      {h:"On phones"},
      "Browser extensions are mostly a computer feature. On a phone, Jisho.org in the browser or a trusted dictionary app works everywhere: copy a word and paste it in."
     ],
     pro:[
      "**Where the data comes from.** Many free Japanese–English tools draw on the JMdict/EDICT and KANJIDIC projects. That means they share strengths (broad, regularly updated coverage) and gaps (specialised academic terms, newer coinages). For technical vocabulary, check a subject glossary or how the term is used in papers in your field.",
      "**Japanese–Japanese dictionaries.** Moving to 国語辞典 definitions builds vocabulary faster, because definitions themselves use academic words, and they show usage notes that bilingual dictionaries skip.",
      "**Readings and names.** Automatic readings are guesses from dictionaries. Personal and place names are the most error-prone; papers often give authors’ names in romaji or kana as well.",
      "**Corpora.** To check whether a combination is natural (e.g. which verb goes with 調査), corpus tools help more than dictionaries; see {{dictionaries-corpora}} for the idea.",
      "**Privacy.** Pasting unpublished data or someone else’s draft into an online translator may send it to a third party. Check your institution’s guidance before using online tools on confidential text."
     ]
    },
    related:["reading-kanji-compounds","dictionaries-corpora","ai-language-tools","finding-japanese-research"],
    sources:[{t:"Microsoft Support: Add phonetic guides to East Asian text", url:"https://support.microsoft.com/office/add-phonetic-guides-to-east-asian-text-c03ad8e4-799b-499e-89a2-c749fc5397e8"},{t:"10ten Japanese Reader (GitHub)", url:"https://github.com/birchill/10ten-ja-reader"},{t:"Yomitan (GitHub)", url:"https://github.com/yomidevs/yomitan"}],
    checked:"2026-11"
   },
   {id:"finding-japanese-research", title:"Finding Japanese research: CiNii Research, J-STAGE, IRDB, NDL Search", aka:["CiNii Research","CiNii Books","J-STAGE","IRDB","NDL Search","国立国会図書館サーチ","国立国会図書館デジタルコレクション"], tags:["academic Japanese","research","databases"],
    summary:"The four main free services for finding Japanese research, what each covers and what is free, plus search tips for Japanese keywords.",
    levels:{
     starter:[
      "Japanese research is found through a few free services, the way English research is found through databases and library catalogues ({{academic-databases}}):",
      {list:[
        "**[[cinii|CiNii Research]]**: one search across Japanese papers, books, theses and research projects. The best first stop.",
        "**[[j-stage|J-STAGE]]**: where many Japanese academic societies publish their journals online; most articles are free.",
        "**[[irg-ndl|IRDB]]**: searches Japanese university repositories, where many bulletin papers (紀要) and theses are free to read.",
        "**[[ndl-search|NDL Search]]**: the National Diet Library’s search, covering its own collection and many other libraries."
      ]},
      "Plan Japanese search words like English ones: try synonyms (留学生, 外国人学生), spelling variants (コンピューター, コンピュータ) and wider or narrower terms.",
      {key:"Start in CiNii Research, then follow its links to the full text."}
     ],
     builder:[
      {h:"What each covers"},
      {table:[
        ["Service","Run by","Notes"],
        ["CiNii Research","NII","Papers, books, theses, research data, projects. Absorbed CiNii Articles in April 2022. Free search."],
        ["CiNii Books","NII","Which Japanese university libraries hold a book. Merged into CiNii Research in 2026; the old service is due to close around March 2027."],
        ["J-STAGE","JST","Society journals; operating since 1999. Most articles free; some limited to members or subscribers."],
        ["IRDB","NII","Institutional repositories: 紀要, theses, reports; usually free full text."],
        ["NDL Search","NDL","Renewed January 2024, combined with NDL Online. Searches NDL and many other libraries."]
      ]},
      {h:"NDL Digital Collections"},
      "Digitised items are labelled by access: readable online without login; readable through the NDL’s transmission service, online after logging in as a fully registered user living in Japan, or at a participating library; or readable only inside the NDL’s own buildings.",
      {h:"Search tips"},
      "A space between words usually means AND. Try English too: many papers have English titles and abstracts. Use the 要旨 and キーワード of a good paper to find better search words, and follow its 参考文献 ({{citation-chasing}}). See {{search-strategy}} for planning searches in any language."
     ],
     pro:[
      "**Linked records.** CiNii Research brings together records from many sources (including J-STAGE, institutional repositories and NDL data) and links them to citation information and research project records, so one search can lead from a paper to its author’s funded projects and related outputs.",
      "**Access is not always free.** Search is free everywhere, but full text depends on the publisher: some J-STAGE journals restrict recent issues to members or subscribers, and links from CiNii may go to paid platforms. Your university library may subscribe to Japanese commercial databases (for example newspaper archives and specialised article databases); ask it.",
      "**Registration rules.** The NDL’s personal transmission service (個人向けデジタル化資料送信サービス) is open to fully registered users (本登録) who live in Japan; at the time of writing the NDL has no plans to extend it to people living abroad. Rules change; check the NDL’s own help pages before you plan around a service.",
      "**Coverage gaps.** No single service covers everything. Older material, small society journals and some 紀要 may appear only in NDL Search or the NDL Digital Collections; and any index can take time to pick up new papers. Search more than one service for a thorough review, and record where and how you searched ({{search-strategy}}).",
      "**Google Scholar** also indexes many Japanese papers ({{google-scholar}}), and is useful for checking who cites a paper."
     ]
    },
    related:["academic-databases","search-strategy","reading-japanese-papers","google-scholar","full-text-access"],
    read:[{book:"omu", where:"Section 4.2 “疑い深く調べる”"}],
    sources:[{t:"NII Support: Integration of CiNii Articles into CiNii Research (2022)", url:"https://support.nii.ac.jp/en/news/cinii/20220418"},{t:"カレントアウェアネス・ポータル (NDL): 新しい国立国会図書館サーチの公開 (2024)", url:"https://current.ndl.go.jp/car/208422"},{t:"NII Support: Integration of CiNii Books into CiNii Research", url:"https://support.nii.ac.jp/en/cir/cib_integration"}],
    checked:"2026-11"
   },
   {id:"summarising-in-japanese", title:"Summarising in Japanese (要約)", aka:["要約","summary in Japanese","である style summary","字数"], tags:["academic Japanese","reading","writing"],
    summary:"What a 要約 keeps and cuts, five steps to write one, である-style frames and reporting verbs, and how to check accuracy, hedges and 字数.",
    levels:{
     starter:[
      "A **要約** (*yōyaku*) restates the main points of a text, shorter and in your own words. It answers “what does this text say?”, not “what do I think?”. It is like telling a friend the plot of a film without saying whether you liked it.",
      {list:[
        "**Keep:** the author’s 主張 (claim), the main 根拠 (reasons), the conclusion and important hedges.",
        "**Cut:** examples, repetitions, anecdotes, side notes and most detailed numbers.",
        "**Leave out:** your own opinion. If the task asks for it, write it in a separate paragraph."
      ]},
      "In reports, write the summary in である style, and never mix in です・ます sentences.",
      {key:"The author’s argument, shorter, in your own words."}
     ],
     builder:[
      {h:"Five steps"},
      {ol:[
        "Read the whole text; find its question and 主張.",
        "Mark the main sentence of each paragraph or section.",
        "Decide what to keep and cut.",
        "Close the text and write in your own words, in である style, joining points with connectives.",
        "Check accuracy, hedges, style and 字数 against the original."
      ]},
      {h:"Frames and verbs"},
      "この論文は、～について論じたものである。 / 筆者は、～と主張している。 / 筆者によれば、～。 / その根拠として、～が挙げられている。 / 以上から、筆者は～と結論づけている。 Reporting verbs: 述べている (states), 主張している (argues), 指摘している (points out), 論じている (discusses), 結論づけている (concludes). Name a source once at the start (田中（2021）は…); don’t repeat the author’s name in every sentence. In a longer report, prefer the author’s name to 筆者, which can also mean you, and never call the source 本稿 (that means your own report).",
      {h:"字数"},
      "Length is counted in characters; punctuation and brackets usually count as one each. 400字以内 means 400 or fewer. Many teachers expect most of the limit to be used; ask if unsure.",
      {h:"Common problems"},
      "Mixing です・ます sentences into a である summary; copying examples word for word; adding your own opinion (～と思う); turning hedges into facts; and losing the author’s claim among details. Check for each one before you hand a summary in."
     ],
     pro:[
      "**Hedges are content.** Changing ～可能性がある into a statement of fact, or ～という声もある into a general truth, misrepresents the author. Accurate summaries keep the author’s level of certainty ({{hedging-japanese}}).",
      "**Own words vs key terms.** You may keep technical terms and names; recombining the author’s sentences with small changes is [[patchwriting]]. Writing with the source closed is the most reliable fix. When exact wording matters, quote it with 「」 and cite ({{quoting-in-japanese}}).",
      "**Order.** A summary usually follows the logic of the original, but you may reorder to put the claim first, especially for a 尾括型 text whose main point comes last.",
      "**Summary plus opinion.** Tasks like 「要約したうえで、意見を述べよ」 are common in Japanese entrance exams and classes. Keep the parts separate, and make the boundary clear: 「以上が筆者の主張である。これに対して、私は…」.",
      "**AI summaries.** Automatic summaries may drop hedges, invent claims or miss the thread of a long argument. Follow your course’s rules; never submit one as your own ({{japanese-plagiarism-ai}})."
     ]
    },
    related:["japanese-signposts","quote-paraphrase-summary","desu-masu-and-dearu","hedging-japanese","quoting-in-japanese"],
    read:[{book:"omu", where:"Section 2 “アカデミック･ライティングとは”"}],
    sources:[{t:"Osaka Metropolitan University: アカデミック・ライティング入門 レポートの書き方, section 2 and contents (PDF)", url:"https://www.omu.ac.jp/las/tlc/assets/2whatisacademicwriting.pdf"}],
    checked:"2026-11"
   }
  ],
  terms:[
   {id:"ronbun", term:"Ronbun (論文)", def:"A research paper: an article in a journal or bulletin, or a thesis such as a 卒業論文 (graduation thesis) or 博士論文 (doctoral thesis).", codex:"reading-japanese-papers"},
   {id:"shinsho", term:"Shinsho (新書)", def:"A small paperback book in a publisher’s series, usually written by a specialist for general readers. A common first read on a new topic.", codex:"reading-japanese-papers"},
   {id:"hakusho", term:"Hakusho (白書)", def:"A white paper: a government report on a policy area, often yearly, with official statistics and the government’s account of its policy.", codex:"reading-japanese-papers"},
   {id:"kiyou", term:"Kiyō (紀要)", def:"A bulletin of papers published by a university, faculty or research institute. Whether papers are peer-reviewed varies between bulletins.", codex:"reading-japanese-papers"},
   {id:"sadoku", term:"Sadoku (査読)", def:"Peer review: checking of a paper by other researchers before publication. A paper that passed it is a 査読付き論文.", codex:"reading-japanese-papers"},
   {id:"youshi", term:"Yōshi (要旨)", def:"The abstract of a paper: a short summary of its purpose, method, main results and conclusion. Also called 抄録 or アブストラクト.", codex:"japanese-paper-structure"},
   {id:"josetsu", term:"Joron (序論) and はじめに", def:"The introduction of a paper or report: background, the gap in research, and the purpose (目的). はじめに is the plainer heading for the same part.", codex:"japanese-paper-structure"},
   {id:"senkou-kenkyuu", term:"Senkō kenkyū (先行研究)", def:"Earlier research on a topic, and the part of a paper that reviews it.", codex:"japanese-paper-structure"},
   {id:"kousatsu", term:"Kōsatsu (考察)", def:"The discussion section of a paper, where the author interprets the results, compares them with earlier studies and notes limits. Different from 結果 (results), which only reports findings.", codex:"japanese-paper-structure"},
   {id:"ketsuron", term:"Ketsuron (結論) and おわりに", def:"The conclusion of a paper or report: the main conclusions and often future tasks (今後の課題). おわりに is the plainer heading.", codex:"japanese-paper-structure"},
   {id:"honron", term:"Honron (本論)", def:"The main body of a report or paper, between the introduction (序論) and the conclusion (結論).", codex:"japanese-paper-structure"},
   {id:"shuchou", term:"Shuchō (主張)", def:"A writer’s claim: the main point they want readers to accept. Often found after しかし or したがって, or with endings like ～べきである.", codex:"japanese-signposts"},
   {id:"konkyo", term:"Konkyo (根拠)", def:"The reasons and evidence a writer gives for a claim, often marked by なぜなら～からである, 実際 or data and citations.", codex:"japanese-signposts"},
   {id:"kango-affix", term:"Kanji prefixes and suffixes", def:"Kanji that attach to many words with a stable meaning, such as 〜化 (becoming), 〜性 (quality), 〜的 (-ic, -al), 〜率 (rate), 〜者 (person), 非〜 (non-), 未〜 (not yet) and 再〜 (again).", codex:"reading-kanji-compounds"},
   {id:"sahen-doushi", term:"Kango + suru verb (漢語サ変動詞)", def:"A Sino-Japanese noun that becomes a verb with する, such as 調査する or 分析する. Papers use both the noun and the verb forms.", codex:"reading-kanji-compounds"},
   {id:"fukugou-joshi", term:"Compound particle (複合助詞)", def:"A particle made of several words that works like an English preposition, such as に関する (about), における (in, among) and に対する (towards).", codex:"reading-kanji-compounds"},
   {id:"jisho-tool", term:"Jisho.org", def:"A free online Japanese–English dictionary. You can search by typing, by drawing a kanji or by choosing its parts.", codex:"japanese-reading-tools"},
   {id:"youyaku", term:"Yōyaku (要約)", def:"A summary: the main points of a text restated more briefly in your own words, without your own opinion.", codex:"summarising-in-japanese"},
   {id:"cinii", term:"CiNii Research", def:"A free search service from Japan’s National Institute of Informatics (NII) covering Japanese papers, books, theses, research data and projects. It also shows which university libraries hold a book, a job it took over from CiNii Books in 2026.", codex:"finding-japanese-research"},
   {id:"j-stage", term:"J-STAGE", def:"The Japan Science and Technology Agency’s platform where many Japanese academic societies publish their journals online. Most articles are free to read.", codex:"finding-japanese-research"},
   {id:"irg-ndl", term:"IRDB", def:"A free database from the National Institute of Informatics (NII) that searches Japanese institutional repositories, where many bulletin papers and theses can be read in full.", codex:"finding-japanese-research"},
   {id:"ndl-search", term:"NDL Search", def:"国立国会図書館サーチ: the National Diet Library’s free search service, covering the NDL’s own collection and digital material and many other Japanese libraries.", codex:"finding-japanese-research"}
  ],
  bank:[
   /* ---------- Lesson 1 ---------- */
   {id:"e1u6-q01", lesson:"e1u6-l1", level:1, q:"What is a 紀要 (kiyō)?", options:[
     {t:"A bulletin of papers published by a university, faculty or institute", ok:true, why:"紀要 collect papers by an institution’s researchers. Review practices vary between bulletins."},
     {t:"A government report on a policy area", why:"That is a 白書 (white paper)."},
     {t:"A short paperback for general readers", why:"That is a 新書."},
     {t:"A student’s graduation thesis", why:"That is a 卒業論文."}
   ]},
   {id:"e1u6-q02", lesson:"e1u6-l1", level:2, q:"Sione is starting a report on a topic he knows nothing about. He wants a readable overview, written by an expert, before tackling papers. What should he look for?", options:[
     {t:"A 新書 on the topic", ok:true, why:"新書 are short books by specialists for general readers: a common and recommended first step."},
     {t:"A 博士論文 on the topic", why:"A doctoral thesis is the most specialised kind of text, hard going as a first read."},
     {t:"The 参考文献 list of a journal paper", why:"A reference list helps find more sources, but gives no overview."},
     {t:"A 白書, whatever the topic", why:"白書 are about government policy areas. They are useful for data, not a general overview of any topic."}
   ]},
   {id:"e1u6-q03", lesson:"e1u6-l1", level:1, q:"What does 査読 (sadoku) mean?", options:[
     {t:"Peer review: checking by other researchers before publication", ok:true, why:"A paper that has passed it is a 査読付き論文 (refereed paper)."},
     {t:"Reading a text quickly for its main points", why:"That is skimming. 査読 is a review process before publication."},
     {t:"Checking the reading of kanji", why:"Readings are 読み方. 査読 is peer review."},
     {t:"A teacher marking a student’s report", why:"Marking is assessment, not peer review before publication."}
   ]},
   {id:"e1u6-q04", lesson:"e1u6-l1", level:3, q:"Lucía finds two papers with different findings: one in a 紀要, one a 査読付き論文 in a society journal. What is the most sensible approach?", options:[
     {t:"Compare their methods and evidence, noting that only one was peer-reviewed", ok:true, why:"Peer review is a useful signal but not a verdict. Judging the methods and evidence, with the review status in mind, is how researchers weigh conflicting studies."},
     {t:"Ignore the 紀要 paper, because bulletins are never reliable", why:"Some 紀要 papers are excellent, and some bulletins do use review. Dismissing them all is too simple."},
     {t:"Trust whichever paper is newer", why:"A newer paper is not automatically better. The quality of the evidence matters."},
     {t:"Leave both out of her report", why:"Conflicting findings are worth discussing. Leaving them out hides something important."}
   ]},
   {id:"e1u6-q05", lesson:"e1u6-l1", level:2, q:"Which service is the best first stop for one search across Japanese papers, books and theses?", options:[
     {t:"CiNii Research", ok:true, why:"CiNii Research, from NII, brings many kinds of Japanese research record together and links to full text where it exists."},
     {t:"Jisho.org", why:"Jisho.org is a dictionary, not a research database."},
     {t:"Word’s Phonetic Guide", why:"That adds furigana in Word. It doesn’t search for research."},
     {t:"J-STAGE", why:"J-STAGE hosts journals published by academic societies. It doesn’t search books, or theses held in university repositories."}
   ]},
   {id:"e1u6-q06", lesson:"e1u6-l1", level:1, q:"What is J-STAGE?", options:[
     {t:"A platform, run by the Japan Science and Technology Agency, where many Japanese academic societies publish journals", ok:true, why:"J-STAGE hosts society journals online. Most articles are free to read."},
     {t:"The National Diet Library’s catalogue", why:"That is NDL Search."},
     {t:"A pop-up dictionary for reading Japanese web pages", why:"Pop-up dictionaries are tools such as 10ten Japanese Reader or Yomitan."},
     {t:"A list of approved textbooks", why:"J-STAGE publishes journals, not textbook lists."}
   ]},
   {id:"e1u6-q07", lesson:"e1u6-l1", level:2, q:"Dmitri needs the full text of a paper from a university’s 紀要. Where is he most likely to find it free?", options:[
     {t:"In that university’s institutional repository, findable through IRDB or CiNii Research", ok:true, why:"Many bulletin papers are deposited in university repositories, which IRDB searches and CiNii Research links to."},
     {t:"In a 白書", why:"白書 are government reports; they don’t reprint bulletin papers."},
     {t:"In a 新書 series", why:"新書 are books from commercial publishers, not bulletin archives."},
     {t:"Nowhere: bulletin papers are never online", why:"Many are online, often free, through repositories."}
   ]},
   {id:"e1u6-q08", lesson:"e1u6-l1", level:3, q:"Hana searches CiNii Research for 子育て支援 and gets fewer results than she expected. Which next step is most likely to help?", options:[
     {t:"Add searches with related words and variants, such as 育児支援, 子ども, 子供", ok:true, why:"Japanese writers use different words and spellings for the same idea. Searching for synonyms and variants is the standard fix."},
     {t:"Add more words to the same search, such as 子育て支援 日本 問題 研究", why:"Words separated by spaces usually must all appear, so more words usually means fewer results."},
     {t:"Conclude that the topic has not been studied", why:"One search term can miss much of the research. Try other wording first."},
     {t:"Switch to a dictionary site", why:"A dictionary may suggest synonyms, but it won’t find research."}
   ]},
   {id:"e1u6-q09", lesson:"e1u6-l1", level:2, q:"Kenji cites a 白書 in his report. What should he keep in mind?", options:[
     {t:"It is a good source of official data, but it presents the government’s own view of its policy", ok:true, why:"白書 are official and data-rich, so present their interpretations as the government’s view."},
     {t:"It has been peer-reviewed by independent researchers", why:"白書 are prepared by government bodies; they are not peer-reviewed."},
     {t:"It can’t be cited in academic writing", why:"白書 are widely cited, especially for statistics."},
     {t:"It is a student report and carries little weight", why:"白書 are government publications, not student work."}
   ]},
   /* ---------- Lesson 2 ---------- */
   {id:"e1u6-q10", lesson:"e1u6-l2", level:1, q:"Which section of a 論文 interprets the results and compares them with earlier studies?", options:[
     {t:"考察", ok:true, why:"考察 (discussion) says what the findings mean."},
     {t:"結果", why:"結果 reports the findings without interpreting them."},
     {t:"方法", why:"方法 explains how the study was done."},
     {t:"要旨", why:"要旨 summarises the whole paper briefly."}
   ]},
   {id:"e1u6-q11", lesson:"e1u6-l2", level:2, q:"In which section would you most expect 「大学院生15名を対象に、半構造化インタビューを実施した。」?", options:[
     {t:"方法", ok:true, why:"It says who was studied (対象) and how (an interview), which is the method."},
     {t:"考察", why:"考察 interprets results; this sentence describes data collection."},
     {t:"おわりに", why:"The conclusion sums up findings and future tasks, not data collection."},
     {t:"参考文献", why:"参考文献 is a list of sources, not sentences about the study."}
   ]},
   {id:"e1u6-q12", lesson:"e1u6-l2", level:1, q:"In a Japanese paper, who is 筆者?", options:[
     {t:"The author of the paper", ok:true, why:"筆者 is how authors usually refer to themselves in papers."},
     {t:"The editor of the journal", why:"Editors are 編集者. 筆者 is the writer."},
     {t:"An earlier researcher being cited", why:"Cited researchers are named with author and year."},
     {t:"The paper itself", why:"The paper is 本稿 or 本論文."}
   ]},
   {id:"e1u6-q13", lesson:"e1u6-l2", level:2, q:"Priya has ten minutes to decide whether a paper is relevant. What should she read first?", options:[
     {t:"The title and the 要旨", ok:true, why:"The abstract gives purpose, method, results and conclusion in a few sentences: the fastest way to judge relevance."},
     {t:"The 方法 section", why:"Method detail matters later, once she knows the paper is relevant."},
     {t:"The first page of はじめに", why:"The opening is usually broad background; the purpose comes at the end of はじめに."},
     {t:"The 注 (notes)", why:"Notes hold sources and side points, not the main point."}
   ]},
   {id:"e1u6-q14", lesson:"e1u6-l2", level:3, q:"Amara is reading a history paper with はじめに, four numbered sections with content titles, おわりに and many notes, but no 方法 or 結果. What is the best conclusion?", options:[
     {t:"This is normal for argument-based humanities papers; she should find the purpose in はじめに and the conclusion in おわりに", ok:true, why:"Many humanities papers are organised around an argument, not an experiment, so they have no 方法 or 結果 headings."},
     {t:"The paper is badly organised and shouldn’t be cited", why:"Its shape is standard for its field. Judge it by its argument and sources."},
     {t:"The 方法 and 結果 must be hidden in the notes", why:"Notes hold sources and side discussions; the paper simply follows a different structure."},
     {t:"It must be a 新書, not a paper", why:"新書 are books. A paper with numbered sections and notes is still a 論文."}
   ]},
   {id:"e1u6-q15", lesson:"e1u6-l2", level:1, q:"What does 先行研究 refer to?", options:[
     {t:"Earlier research on the topic", ok:true, why:"先行 means going before: 先行研究 are previous studies, reviewed early in the paper."},
     {t:"Research planned for the future", why:"Future work is 今後の課題."},
     {t:"The author’s pilot study", why:"A pilot study is 予備調査. 先行研究 is earlier published work on the topic, usually by other researchers."},
     {t:"The most advanced research in the world", why:"先行 here means “earlier”, not “leading”."}
   ]},
   {id:"e1u6-q16", lesson:"e1u6-l2", level:2, q:"A paper ends: 「この点については、今後の課題としたい。」 What is the author doing?", options:[
     {t:"Leaving the point as a task for future research", ok:true, why:"今後の課題 means future tasks: a typical closing in おわりに."},
     {t:"Admitting the study failed", why:"Naming a future task is normal and doesn’t mean the study failed."},
     {t:"Setting homework for readers", why:"課題 can mean homework in class, but here it means a research task."},
     {t:"Summarising the results", why:"The results are summarised earlier; this sentence looks ahead."}
   ]},
   {id:"e1u6-q17", lesson:"e1u6-l2", level:3, q:"Fatima’s notes say “結果 = 結論”. Which correction is accurate?", options:[
     {t:"結果 reports what one study found; 結論 states what the author concludes from the whole paper", ok:true, why:"The results are data; the conclusion is the author’s overall answer, built on results and discussion."},
     {t:"They are the same, but 結論 is the formal word", why:"They are different parts with different jobs, not formal and informal names."},
     {t:"結論 comes before 結果 in Japanese papers", why:"The conclusion comes last, after results and discussion."},
     {t:"結果 is only used in the sciences and 結論 only in the humanities", why:"Both words are used across fields."}
   ]},
   {id:"e1u6-q18", lesson:"e1u6-l2", level:2, q:"In IMRaD terms, which Japanese section is the D (Discussion)?", options:[
     {t:"考察", ok:true, why:"序論 (I), 方法 (M), 結果 (R), 考察 (D)."},
     {t:"結論", why:"結論 is a separate, usually short conclusion."},
     {t:"要旨", why:"要旨 is the abstract, which sits outside IMRaD."},
     {t:"先行研究", why:"先行研究 belongs to the introduction part (I)."}
   ]},
   /* ---------- Lesson 3 ---------- */
   {id:"e1u6-q19", lesson:"e1u6-l3", level:1, q:"Which function does しかし signal?", options:[
     {t:"逆接: something against what came before or what you would expect", ok:true, why:"しかし is the standard written “however”."},
     {t:"添加: adding more of the same", why:"Adding is また or さらに."},
     {t:"例示: giving an example", why:"Examples come after たとえば."},
     {t:"言い換え: restating", why:"Restating is つまり or すなわち."}
   ]},
   {id:"e1u6-q20", lesson:"e1u6-l3", level:2, q:"Choose the connective for the gap: 「この制度には多くの利点がある。（　）、費用が高いという問題もある。」", options:[
     {t:"しかし", ok:true, why:"The second sentence goes against the first (benefits, but a problem), which is 逆接."},
     {t:"したがって", why:"A high cost is not a result of the benefits."},
     {t:"たとえば", why:"The cost problem is not an example of the benefits."},
     {t:"つまり", why:"The cost problem is not a restatement of the benefits."}
   ]},
   {id:"e1u6-q21", lesson:"e1u6-l3", level:1, q:"What usually comes after たとえば?", options:[
     {t:"A concrete example", ok:true, why:"たとえば (例えば) introduces an example (例示)."},
     {t:"The writer’s conclusion", why:"Conclusions follow したがって or このように."},
     {t:"A change of topic", why:"Changes of topic follow では or さて."},
     {t:"An exception", why:"Exceptions follow ただし."}
   ]},
   {id:"e1u6-q22", lesson:"e1u6-l3", level:2, q:"Ana reads 「なぜなら、～からである。」 What is this sentence doing?", options:[
     {t:"Giving a reason: a 根拠 for the previous claim", ok:true, why:"なぜなら～からである is a standard way to give a reason."},
     {t:"Stating the main claim", why:"The claim usually comes before the reason here; this sentence supports it."},
     {t:"Giving an example", why:"Examples follow たとえば."},
     {t:"Asking a question", why:"なぜなら means “because”, not “why?”."}
   ]},
   {id:"e1u6-q23", lesson:"e1u6-l3", level:3, q:"「確かに、留学には費用がかかる。しかし、短期の留学でも、学生の進路に大きな影響を与えることがある。したがって、大学は短期留学への支援を広げるべきである。」 Which sentence is the writer’s main claim?", options:[
     {t:"したがって、大学は短期留学への支援を広げるべきである。", ok:true, why:"したがって and ～べきである mark the conclusion the writer wants readers to accept."},
     {t:"確かに、留学には費用がかかる。", why:"確かに marks a concession: a point admitted and set aside."},
     {t:"しかし、短期の留学でも、学生の進路に大きな影響を与えることがある。", why:"This is the reason the claim rests on, not the claim itself."},
     {t:"There is no claim: the paragraph only describes", why:"～べきである is a clear claim."}
   ]},
   {id:"e1u6-q24", lesson:"e1u6-l3", level:2, q:"A paper says 「この方法には改善の余地があるのではないだろうか。」 How should you read it?", options:[
     {t:"As a softened claim: the writer thinks the method can be improved", ok:true, why:"～のではないだろうか presents the writer’s view politely; it isn’t a real question."},
     {t:"As a genuine question to the reader", why:"In papers, this ending is a soft way of claiming, not asking."},
     {t:"As a sign the writer has no opinion", why:"The writer does have a view; they are presenting it cautiously."},
     {t:"As a quotation from another study", why:"Nothing marks it as a quotation."}
   ]},
   {id:"e1u6-q25", lesson:"e1u6-l3", level:3, q:"Which sentence uses its connective unnaturally?", options:[
     {t:"先行研究は少ない。ところが、本稿ではこの問題を取り上げたい。", ok:true, why:"ところが reports a fact that turned out against expectation; it isn’t used before the writer’s own intention (取り上げたい). そこで would be natural."},
     {t:"新制度に期待が集まった。ところが、利用者はほとんど増えなかった。", why:"A natural use: the result went against the expectation."},
     {t:"都市部では人口が増えている。一方、農村部では減っている。", why:"A natural use: 一方 compares two areas."},
     {t:"調査は二回行った。なお、二回目は対象者を変更した。", why:"A natural use: なお adds a side detail."}
   ]},
   {id:"e1u6-q26", lesson:"e1u6-l3", level:1, q:"What is a 主張 (shuchō)?", options:[
     {t:"The writer’s claim: the main point they want readers to accept", ok:true, why:"The 主張 is supported by 根拠 (reasons and evidence)."},
     {t:"A reason or piece of evidence", why:"That is a 根拠."},
     {t:"An example", why:"Examples illustrate; they are 例."},
     {t:"A section heading", why:"Headings name sections; 主張 is the content of the argument."}
   ]},
   {id:"e1u6-q27", lesson:"e1u6-l3", level:2, q:"How is 一方 usually different from しかし?", options:[
     {t:"一方 sets two things side by side; しかし goes against an expectation", ok:true, why:"一方 compares (対比), しかし contrasts against what came before (逆接)."},
     {t:"一方 is spoken and しかし is written", why:"Both are normal in written academic Japanese."},
     {t:"一方 introduces an example", why:"Examples come after たとえば."},
     {t:"They are always interchangeable", why:"They overlap sometimes, but 一方 doesn’t imply that one thing cancels the other."}
   ]},
   /* ---------- Lesson 4 ---------- */
   {id:"e1u6-q28", lesson:"e1u6-l4", level:1, q:"What does the suffix 〜化 usually mean, as in 都市化 and 高齢化?", options:[
     {t:"Becoming or making into", ok:true, why:"都市化 is urbanisation (becoming urban); 高齢化 is population ageing."},
     {t:"A person who does something", why:"That is 〜者, as in 研究者."},
     {t:"A rate or ratio", why:"That is 〜率, as in 失業率."},
     {t:"Not yet", why:"That is the prefix 未〜, as in 未解決."}
   ]},
   {id:"e1u6-q29", lesson:"e1u6-l4", level:2, q:"Using the parts, what does 非営利団体 most likely mean? (営利 = making profit, 団体 = organisation)", options:[
     {t:"A non-profit organisation", ok:true, why:"非 (non-) + 営利 (profit-making) + 団体 (organisation)."},
     {t:"An organisation that has not yet made a profit", why:"“Not yet” would be 未. 非 means “non-”."},
     {t:"An organisation that makes profit again", why:"“Again” would be 再."},
     {t:"A very profitable organisation", why:"非 is a negative prefix, not an intensifier."}
   ]},
   {id:"e1u6-q30", lesson:"e1u6-l4", level:2, q:"A paper says 「この理論は再検討する必要がある」. What does 再検討 mean?", options:[
     {t:"Re-examination: considering again", ok:true, why:"再 (again) + 検討 (examination, consideration)."},
     {t:"Rejection", why:"再 means again, not refusal."},
     {t:"First examination", why:"再 marks a repeat, not a first time."},
     {t:"Examination not yet done", why:"“Not yet” is 未."}
   ]},
   {id:"e1u6-q31", lesson:"e1u6-l4", level:1, q:"In a long Japanese noun phrase, where is the head noun?", options:[
     {t:"At the end", ok:true, why:"Everything describing a noun comes before it, so the head comes last."},
     {t:"At the start", why:"Japanese puts modifiers before the noun, so the start is description."},
     {t:"Right after the first の", why:"の links parts of the description; the head is the last noun."},
     {t:"Wherever there is a kanji compound", why:"Many compounds are in the description; the head is the final one."}
   ]},
   {id:"e1u6-q32", lesson:"e1u6-l4", level:2, q:"What does 「留学生に対する支援」 mean?", options:[
     {t:"Support for international students", ok:true, why:"に対する means “towards, for”, and the head noun is 支援 (support)."},
     {t:"Support from international students", why:"“From” would be 留学生による or 留学生からの."},
     {t:"International students opposed to support", why:"Here に対する marks the target of support, not opposition, and the head noun is 支援."},
     {t:"Research on international students", why:"支援 means support, not research."}
   ]},
   {id:"e1u6-q33", lesson:"e1u6-l4", level:3, q:"Tomás splits 非常口 into 非 (non-) + 常口 and guesses “an unusual exit”, but it doesn’t fit the sentence about a fire drill. What is the best lesson?", options:[
     {t:"The split was wrong: it is 非常 (emergency) + 口 (exit). When a guess doesn’t fit, check a dictionary", ok:true, why:"Words aren’t always split where a prefix seems to be. 非常口 means emergency exit."},
     {t:"Guessing from parts never works", why:"It works often; it just needs checking when the result doesn’t fit."},
     {t:"非 always means “emergency”", why:"非 usually means “non-”; 非常 as a whole word means emergency."},
     {t:"The sentence must contain a mistake", why:"The sentence is fine; the guess was wrong."}
   ]},
   {id:"e1u6-q34", lesson:"e1u6-l4", level:2, q:"Which word can become a verb by adding する?", options:[
     {t:"検討", ok:true, why:"検討する (to examine, consider) is a 漢語 + する verb."},
     {t:"重要性", why:"〜性 words are nouns of quality; you say 重要性が高い, not ✗重要性する."},
     {t:"社会的", why:"〜的 words work like な-adjectives (社会的な), not verbs."},
     {t:"高齢者", why:"〜者 words name people, not actions."}
   ]},
   {id:"e1u6-q35", lesson:"e1u6-l4", level:3, q:"Mei puts 「この方法は学習の継続につながらない可能性がある。」 into a machine translator and gets “This method does not lead to continued learning.” What has gone wrong?", options:[
     {t:"The hedge (可能性がある, “may”) has been lost, so the claim sounds certain", ok:true, why:"Machine translation often flattens hedges. The original says the method *may not* lead to continued learning."},
     {t:"Nothing: the translation is accurate", why:"可能性がある means “there is a possibility”. Dropping it changes the strength of the claim."},
     {t:"The subject is wrong", why:"この方法 (this method) is translated correctly."},
     {t:"継続 has been mistranslated", why:"継続 (continuation) is translated acceptably; the problem is the missing hedge."}
   ]},
   {id:"e1u6-q36", lesson:"e1u6-l4", level:1, q:"What do 10ten Japanese Reader and Yomitan do?", options:[
     {t:"Show the reading and meaning of a Japanese word when you point at it in a web browser", ok:true, why:"Both are free, open-source pop-up dictionary extensions for browsers."},
     {t:"Search for Japanese research papers", why:"That is CiNii Research or J-STAGE."},
     {t:"Translate whole documents automatically", why:"They are dictionaries for single words and phrases, not document translators."},
     {t:"Add furigana to Word documents", why:"That is Word’s Phonetic Guide."}
   ]},
   /* ---------- Lesson 5 ---------- */
   {id:"e1u6-q37", lesson:"e1u6-l5", level:1, q:"What is a 要約 (yōyaku)?", options:[
     {t:"The main points of a text restated more briefly in your own words", ok:true, why:"A summary reports what the text says, without your own opinion."},
     {t:"Your impressions of a text", why:"Impressions are 感想."},
     {t:"Your critique of a text", why:"Critique is 批評 or 意見, written separately if asked."},
     {t:"A collection of the best quotations", why:"A summary is in your own words, not a set of quotations."}
   ]},
   {id:"e1u6-q38", lesson:"e1u6-l5", level:2, q:"Which of these belongs in a 要約?", options:[
     {t:"The main reasons the author gives for the claim", ok:true, why:"The 根拠 show why the author holds the claim and belong in a summary."},
     {t:"An example introduced with たとえば", why:"Examples illustrate; summaries usually cut them."},
     {t:"Your opinion of the author’s argument", why:"Opinion goes in a separate part, if the task asks for it."},
     {t:"A side note introduced with なお", why:"Side notes are usually cut."}
   ]},
   {id:"e1u6-q39", lesson:"e1u6-l5", level:2, q:"What is the である-style form of 「～ことが明らかになりました。」?", options:[
     {t:"～ことが明らかになった。", ok:true, why:"なりました becomes the plain past なった."},
     {t:"～ことが明らかになったです。", why:"です after a plain past verb is not standard written Japanese, and it isn’t である style."},
     {t:"～ことが明らかになったである。", why:"である attaches to nouns and な-adjectives, not directly to a verb."},
     {t:"～ことが明らかになっちゃった。", why:"～ちゃった is a casual spoken contraction."}
   ]},
   {id:"e1u6-q40", lesson:"e1u6-l5", level:3, q:"The source says 「～が原因である可能性がある」. Fatima’s summary says 「筆者は、～が原因であることを示した」. What is the problem?", options:[
     {t:"She has turned a possibility into a fact, misrepresenting the author", ok:true, why:"可能性がある (“may be”) is a hedge. A summary must keep the author’s level of certainty."},
     {t:"示した is too informal", why:"示した is fine in である style. The problem is what it claims."},
     {t:"She should have used です・ます style", why:"である style is right for a report summary."},
     {t:"There is no problem", why:"The summary claims much more than the source does."}
   ]},
   {id:"e1u6-q41", lesson:"e1u6-l5", level:1, q:"Which English verb best matches 指摘している in a summary?", options:[
     {t:"points out", ok:true, why:"指摘する is used for drawing attention to a problem or fact."},
     {t:"concludes", why:"“Concludes” is 結論づけている."},
     {t:"denies", why:"“Denies” is 否定している."},
     {t:"quotes", why:"“Quotes” is 引用している."}
   ]},
   {id:"e1u6-q42", lesson:"e1u6-l5", level:3, q:"An exam task says 「本文を要約したうえで、あなたの意見を述べよ。」 How should Oluwaseun structure his answer?", options:[
     {t:"A summary first, then a separate paragraph with his opinion", ok:true, why:"したうえで means “after doing”: summarise first, then give your view, clearly separated."},
     {t:"Mix his opinion into each summary sentence", why:"Mixing them makes it impossible to tell the author’s view from his."},
     {t:"Only give his opinion; the summary is optional", why:"The task asks for both."},
     {t:"Copy the main sentences of the text, then add one opinion sentence", why:"A summary must be in his own words; copied sentences don’t show understanding."}
   ]},
   {id:"e1u6-q43", lesson:"e1u6-l5", level:2, q:"In a 400字以内 summary, how are 、 and 。 usually counted?", options:[
     {t:"As one character each", ok:true, why:"Japanese character counts usually include punctuation and brackets; check if your teacher says otherwise."},
     {t:"They are not counted", why:"They usually are counted, so leaving them out of your count can push you over the limit."},
     {t:"As half a character each", why:"Japanese punctuation normally counts as a full character."},
     {t:"As two characters each", why:"Each mark normally counts as one character."}
   ]},
   {id:"e1u6-q44", lesson:"e1u6-l5", level:2, q:"What is the most reliable way to keep a summary in your own words?", options:[
     {t:"Plan from notes, then write with the source closed", ok:true, why:"Writing without looking stops you copying sentences with small changes (patchwriting)."},
     {t:"Copy sentences and change a few words", why:"That is patchwriting, not your own words."},
     {t:"Replace every kanji word with a synonym", why:"Swapping words one by one keeps the original’s sentences, and key terms should usually stay."},
     {t:"Translate the text into English and back", why:"Back-translation often produces odd Japanese and is not your own writing."}
   ]},
   {id:"e1u6-q45", lesson:"e1u6-l5", level:3, q:"Ana is short of time and considers using an AI tool to summarise a Japanese article for her assignment. What is the best approach?", options:[
     {t:"Follow her course’s rules, check any output against the original, and hand in only a summary she wrote herself", ok:true, why:"AI summaries can drop hedges and invent claims, and submitting one as her own breaks academic integrity rules."},
     {t:"Submit the AI summary, since the content is the article’s anyway", why:"The wording would be the tool’s, not hers. Presenting it as her own is dishonest."},
     {t:"Use the AI summary without checking, because AI is reliable for Japanese", why:"AI tools make errors with hedges and long arguments, in any language."},
     {t:"Translate the AI summary into English and back to change the wording", why:"Disguising machine output doesn’t make it her own writing."}
   ]}
  ]
});
