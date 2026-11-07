/* Academic Language · Academic Japanese Unit 8 · Presentations, seminars and keigo with professors (the last unit of IT CHICK Academy) */
ICA.addUnit({
  id:"e1u8", track:"e1", n:8, title:"Presentations, seminars and keigo with professors", icon:"🎤",
  blurb:"Give a 発表 in a ゼミ or at a conference, answer questions calmly and take part in discussion; learn how keigo works through the five categories of 敬語の指針 (2007), avoid the common mistakes, and write to and visit professors with confidence. The unit, and IT CHICK Academy, ends with a send-off.",
  goals:[
    "Prepare a レジュメ and give a short 発表 in a ゼミ or at a conference, using the stock phrases for each stage and for describing figures",
    "Handle 質疑応答 politely: thank, check the question, buy time, say honestly when you don’t know and offer to follow up",
    "Take part in ゼミ discussion: give opinions, agree, disagree with クッション言葉, add points and ask questions",
    "Explain the five categories of keigo in 敬語の指針 (2007) and choose the right 尊敬語, 謙譲語Ⅰ, 謙譲語Ⅱ, 丁寧語 or 美化語 form",
    "Avoid common keigo mistakes, including 二重敬語 and using 謙譲語 for a professor’s actions, and apply ウチ・ソト",
    "Write a clear email to a professor, reply and thank well, and visit a 研究室 or オフィスアワー with confidence"
  ],
  read:[
    {book:"keigo", where:"第2章「敬語の仕組み」: the five categories of keigo, how each one works, and the notes on 二重敬語", note:"The official guidelines this unit follows. In Japanese, and written for the general public, so it is readable with a dictionary."},
    {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”", note:"General presentation skills (planning, delivery, nerves) that apply in any language."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u8-l1", title:"Giving a 発表 in a ゼミ or at a conference", minutes:55,
   hook:{q:"A Japanese classmate says: 「[来週]{らいしゅう}のゼミの[発表]{はっぴょう}、レジュメは[何]{なん}ページ？」 What is a レジュメ here?", options:["A CV (a [履歴書]{りれきしょ}) for a job application","A handout that summarises your presentation","The full text of your graduation thesis","The list of students in the seminar"], answer:1, reveal:"**A handout.** In English a “résumé” is a CV, but at Japanese universities a レジュメ (from the French *résumé*, “summary”) is the handout you give out with a presentation: headings, key points, quotations, figures and references on one or two pages. A CV is a [履歴書]{りれきしょ}. This lesson covers the kinds of [発表]{はっぴょう} you’ll give, how to build the レジュメ and the talk, and the stock phrases for each stage."},
   goals:[
     "Recognise the main kinds of 発表 at a Japanese university and conference",
     "Make a レジュメ in the usual written style, separate from the spoken talk",
     "Structure a talk and use the stock phrase for each stage",
     "Describe figures, trends and numbers accurately and with suitable caution",
     "Speak in a clear, polite です・ます style without over-using keigo"
   ],
   learn:[
    {h:"Where you’ll give a 発表", body:[
      {lead:"At a Japanese university, a [発表]{はっぴょう} (*happyō*, a presentation) is part of ordinary study, not a rare event."},
      "Much of it happens in a [[zemi|ゼミ]] (*zemi*, from the German *Seminar*): a small class led by one teacher, where students take turns presenting and then discuss. In many humanities and social science programmes, students join a ゼミ, often from the third year (sometimes earlier), and stay with it until they finish their graduation thesis. Science and engineering students usually join a [研究室]{けんきゅうしつ} (a lab), which holds similar meetings. Arrangements vary by university and field.",
      {table:[
        ["Kind of 発表","What you do"],
        ["[輪読]{りんどく}","Members take turns presenting a chapter of a book the ゼミ reads together"],
        ["[文献]{ぶんけん}紹介","You summarise and comment on one paper or book"],
        ["[進捗]{しんちょく}報告","You report how your own research is going"],
        ["[卒論]{そつろん}[中間]{ちゅうかん}発表","An interim presentation on your graduation thesis (卒業論文)"],
        ["[学会]{がっかい}発表","A conference talk: [口頭]{こうとう}発表 (oral) or ポスター発表 (poster)"]
      ]},
      "At a [学会]{がっかい} (an academic society’s conference), each session has a [座長]{ざちょう} (the chair), who introduces speakers, keeps time and runs the questions. In a ゼミ the teacher, or a student acting as [[shikai|[司会]{しかい}]] (the chair or host), does this job.",
      {tip:"If presenting in Japanese makes you nervous, you are in good company: many Japanese first-year students find their first ゼミ発表 hard too, because academic speaking is new for everyone. It is a skill you build with practice, not a test of your Japanese."}
    ]},
    {h:"The レジュメ: a handout, not a CV", body:[
      "The [[rejume|レジュメ]] (*rejume*, also written レジメ, or called ハンドアウト or [配布]{はいふ}資料) is the handout that goes with your talk. Listeners use it to follow you, take notes on it and come back to it in the discussion. Your teacher decides its size and length; one or two A4 pages is common.",
      {list:[
        "**Header**: the course name and session (〇〇演習　第5回), the presenter’s name and year (often with student number), and the title.",
        "**Body**: numbered headings with short bullet points, key quotations with page numbers, and any figure or table you’ll discuss.",
        "**論点** (points for discussion): one to three questions you want the ゼミ to discuss. Many ゼミ expect these.",
        "**参考文献**: the sources you used (see {{japanese-references}})."
      ]},
      "The written style matters. A レジュメ is written, so it uses [[dearu-tai|である体]] or short noun-ending lines (*体言止め*, ending on a noun, such as 「調査の目的」), with bullets (・). Your talk is spoken, in [[desu-masu-tai|です・ます体]]. Don’t write the レジュメ as a script in full です・ます sentences: listeners then try to read and listen at once.",
      {ex:"〇〇演習　第5回\n発表者：チェン・ウェイ（経済学部3年）\n\n大学生のアルバイトと学業の両立\n\n1. 背景と目的\n・多くの大学生がアルバイトをしている\n・目的：アルバイト時間と学業への影響を調べる\n2. 方法\n・本学の学生100名へのアンケート調査\n3. 結果\n・学年が上がるにつれて、アルバイト時間は減少\n4. 論点\n・なぜ減少するのか（就職活動か、卒業研究か）\n\n参考文献\n山本花子（2020）『大学生の生活時間』〇〇出版", mono:true, label:"Worked example: the top of a レジュメ (invented)"},
      {warn:"Habits differ between fields and ゼミ (some want B4 paper, a set font size or a slide deck instead). Ask your teacher or a [先輩]{せんぱい} (a senior student) for a past レジュメ and copy its format."}
    ]},
    {h:"The shape of a talk", body:[
      "A research 発表 follows the same order as a paper: background and aim, method, results, discussion, conclusion (see {{japanese-paper-structure}}). Japanese talks add a clear opening and closing ritual around it, and the audience expects to hear each stage named.",
      {fig:'<svg viewBox="0 0 340 520"><defs><marker id="e1u8a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">The stages of a 発表</text><rect class="d-lup" x="20" y="30" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="51" text-anchor="middle">1 挨拶・名乗り・テーマ</text><text class="s" x="170" y="70" text-anchor="middle">「本日は〜について発表いたします」</text><path class="d-ink" d="M170,82 L170,96" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-soft" x="20" y="98" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="119" text-anchor="middle">2 構成の説明</text><text class="s" x="170" y="138" text-anchor="middle">「本発表の構成は次のとおりです」</text><path class="d-ink" d="M170,150 L170,164" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-sage" x="20" y="166" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="187" text-anchor="middle">3 背景と目的</text><text class="s" x="170" y="206" text-anchor="middle">「まず、研究の背景について…」</text><path class="d-ink" d="M170,218 L170,232" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-sage" x="20" y="234" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="255" text-anchor="middle">4 方法と結果</text><text class="s" x="170" y="274" text-anchor="middle">「次に、調査の結果について…」</text><path class="d-ink" d="M170,286 L170,300" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-sage" x="20" y="302" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="323" text-anchor="middle">5 考察</text><text class="s" x="170" y="342" text-anchor="middle">「この結果から〜と考えられます」</text><path class="d-ink" d="M170,354 L170,368" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-soft" x="20" y="370" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="391" text-anchor="middle">6 まとめと今後の課題</text><text class="s" x="170" y="410" text-anchor="middle">「最後に、まとめと今後の課題…」</text><path class="d-ink" d="M170,422 L170,436" stroke-width="2" marker-end="url(#e1u8a1)"/><rect class="d-gold" x="20" y="438" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="459" text-anchor="middle">7 終わりの挨拶 → 質疑応答</text><text class="s" x="170" y="478" text-anchor="middle">「以上で発表を終わります」</text><text class="s" x="170" y="510" text-anchor="middle">Green: the research content. Other colours: framing.</text></svg>', alt:"A vertical flow of seven stages of a Japanese academic presentation, each with its stock phrase: 1 greeting, name and topic (本日は〜について発表いたします); 2 outline (本発表の構成は次のとおりです); 3 background and aim; 4 method and results; 5 discussion (この結果から〜と考えられます); 6 summary and future tasks; 7 closing (以上で発表を終わります), leading into questions. Stages 3 to 5 are the research content; the rest is framing.", cap:"The research content sits inside a clear frame. Naming each stage aloud helps listeners who are following on the レジュメ."},
      "Time is usually strict. A ゼミ might give 20–30 minutes plus discussion; a conference talk is often around 10–20 minutes plus a few minutes of questions, and some conferences ring a bell to warn you. Check the programme or ask, and plan about one minute per slide or レジュメ section."
    ]},
    {h:"Stock phrases, stage by stage", body:[
      {lead:"Japanese academic talks rely on set phrases. Learn them as chunks: they are expected, they sound right, and they give you a moment to think."},
      {table:[
        ["Stage","Phrase","Note"],
        ["Start","「それでは、発表を始めます。」","Wait until the room is quiet"],
        ["Name","「経済学部3年のチェン・ウェイです。」","Faculty and year in a ゼミ; university at a 学会"],
        ["Topic","「本日は、大学生のアルバイトについて発表いたします。よろしくお願いいたします。」","いたします is polite for your own action"],
        ["Outline","「本発表の構成は、次のとおりです。」","Then: まず…、次に…、最後に…"],
        ["Moving on","「次に、調査の方法について説明します。」","Also: 「では、結果に移ります。」"],
        ["Pointing","「レジュメの2ページをご覧ください。」","ご覧ください = please look"],
        ["Summing up","「ここまでの内容をまとめると、〜ということです。」","Before the conclusion"],
        ["Closing","「以上で発表を終わります。ご清聴ありがとうございました。」","[清聴]{せいちょう}: listening attentively"],
        ["To Q&A","「ご質問やご意見がありましたら、お願いいたします。」","Or the 司会 says it"]
      ]},
      "Notice the light touch of keigo: いたします for your own action, ご覧ください for the audience’s, ご説明します when you explain something to them. Lesson 3 explains why these work. You will also hear 「発表させていただきます」. It is very common and not wrong, but the plain 「発表いたします」 is enough, and stacking させていただきます on every verb sounds heavy (lesson 4).",
      {ex:"それでは、発表を始めます。経済学部3年のチェン・ウェイです。本日は、「大学生のアルバイトと学業の両立」について発表いたします。よろしくお願いいたします。\n本発表の構成は、次のとおりです。まず、研究の背景と目的を述べます。次に、調査の方法と結果を報告します。最後に、考察と今後の課題についてお話しします。", label:"Worked example: a 30-second opening"}
    ]},
    {h:"Describing figures, trends and numbers", body:[
      "When you show a figure, say what it is before you say what it means. Listeners need the axes before the story.",
      {table:[
        ["Japanese","Use"],
        ["「図1は、学年別のアルバイト時間を示したものです。」","Say what the figure shows"],
        ["「[横軸]{よこじく}は学年、[縦軸]{たてじく}は1週間の平均時間です。」","Explain the axes (横軸 = x-axis, 縦軸 = y-axis)"],
        ["増加する・減少する・[横]{よこ}ばいである","Rise, fall, stay flat"],
        ["約3[割]{わり}・[半数]{はんすう}・2[倍]{ばい}","About 30% (1割 = 10%), half, twice"],
        ["「ここから、〜ことがわかります。」","What the data clearly show"],
        ["「〜と考えられます。」「〜可能性があります。」","Your interpretation, with caution"]
      ]},
      "Keep the two kinds of statement apart. 「〜ことがわかります」 reports what the figure shows. 「〜と考えられます」 and 「〜可能性があります」 mark your interpretation, the spoken version of the [[hedging]] you met in {{hedging-japanese}}. Saying 「〜です」 about an interpretation sounds over-confident, and a sharp questioner will notice.",
      {ex:"こちらの図をご覧ください。図1は、学年別に1週間のアルバイト時間の平均を示したものです。横軸は学年、縦軸は時間です。ここから、学年が上がるにつれて、アルバイト時間が減少していることがわかります。これは、就職活動や卒業研究の影響によるものと考えられます。", label:"Worked example: one figure, described"},
      {tip:"Read numbers the way listeners expect: 15% is じゅうごパーセント, 0.5 is れいてんご, and 3割 is さんわり. For a large number, round it in speech (約1万2千人) and put the exact figure on the slide or レジュメ."}
    ]},
    {h:"Speaking style: polite, clear and unhurried", body:[
      "Speak in です・ます throughout, and keep to [[kakikotoba|書き言葉]]-like vocabulary for the content. The [[hanashikotoba|話し言葉]] habits that are fine with friends stand out in a 発表: 「えっと」, 「なんか」, 「めっちゃ」, 「〜じゃないですか」, 「で、」 at the start of a sentence. A short silent pause is better than a filler.",
      {table:[
        ["✗ Too casual for a 発表","✓ Better"],
        ["「えっと、じゃあ始めます。」","「それでは、発表を始めます。」"],
        ["「で、結果なんですけど、」","「次に、結果について説明します。」"],
        ["「めっちゃ増えてます。」","「大きく増加しています。」"],
        ["「これ、見てください。」","「こちらの図をご覧ください。」"]
      ]},
      "Don’t read the レジュメ aloud word for word: it is written in a different style, and listeners can read it themselves. Talk through it instead, and tell them where you are (「レジュメの3番をご覧ください」). Many teachers advise against reading a full script too. When you’re starting out, a script is a fine safety net: practise it until you can look up for most of each sentence, then move to keyword notes.",
      {list:[
        "**Rehearse aloud with a timer** at least once, ideally twice.",
        "**Mark hard words** in your notes with their readings, so you don’t freeze on a kanji compound.",
        "**Prepare for three likely questions** (lesson 2).",
        "**Bring enough copies** of the レジュメ, or check how it will be shared online."
      ]}
    ]},
    {h:"Myths that make 発表 harder than it needs to be", body:[
      {list:[
        "**“My Japanese has to be perfect.”** No. Listeners want clear content in a clear order. A few small grammar slips rarely matter; a missing structure does.",
        "**“I need lots of keigo.”** No. Polite です・ます with a few set phrases is the norm. Heavy keigo can make the talk harder to follow.",
        "**“An accent will stop people understanding me.”** Clear structure, pauses and key words on the レジュメ or slides help far more than an accent hurts. (The same idea as {{pronunciation-intelligibility}} in English.)",
        "**“Questions mean I did badly.”** No. Questions usually mean people listened and are interested (lesson 2)."
      ]},
      {key:"A good 発表 is a clear frame around clear content: name each stage, show each figure before interpreting it, and use the set phrases so your listeners always know where they are."}
    ]}
   ],
   try:[
    {id:"e1u8-l1-x1", type:"mcq", q:"In Alejandro’s ゼミ, each member presents one chapter of a book that everyone is reading together. What is this kind of ゼミ activity called?", options:[
      {t:"輪読（りんどく）", ok:true, why:"輪読 is reading a book together, with members taking turns to present its chapters."},
      {t:"学会発表", why:"A 学会発表 is a talk at an academic society’s conference, not a chapter in a class reading."},
      {t:"卒論中間発表", why:"That is an interim presentation of your own graduation thesis."},
      {t:"履歴書", why:"A 履歴書 is a CV, not a presentation at all."}
    ]},
    {id:"e1u8-l1-x2", type:"sort", q:"Following the usual convention, which lines belong on the written レジュメ and which would you say aloud in the talk?", buckets:["Written on the レジュメ","Said aloud in the talk"], items:[
      {t:"1. 研究の背景と目的", b:0, why:"A numbered heading that ends on a noun (体言止め): typical レジュメ style."},
      {t:"・学年が上がるにつれて、アルバイト時間は減少", b:0, why:"A short bullet with a noun ending: written summary style."},
      {t:"参考文献", b:0, why:"The reference list belongs on the written handout."},
      {t:"次に、調査の方法について説明します。", b:1, why:"A spoken signpost in です・ます: it guides listeners through the talk."},
      {t:"こちらの表をご覧ください。", b:1, why:"You say this aloud to direct attention to a table."},
      {t:"以上で発表を終わります。", b:1, why:"The spoken closing phrase."}
    ]},
    {id:"e1u8-l1-x3", type:"order", q:"Put the stages of a ゼミ research presentation in order.", items:[
      {t:"「経済学部3年の〇〇です。本日は〜について発表いたします。」", why:"First: name and topic."},
      {t:"「本発表の構成は、次のとおりです。」", why:"Second: the outline, so listeners know the route."},
      {t:"「まず、研究の背景と目的について述べます。」", why:"The content starts with background and aim."},
      {t:"「次に、調査の結果について説明します。」", why:"Then method and results."},
      {t:"「この結果から、〜と考えられます。」", why:"Then the discussion: your interpretation of the results."},
      {t:"「以上で発表を終わります。ご清聴ありがとうございました。」", why:"Last: the closing phrase, before questions."}
    ]},
    {id:"e1u8-l1-x4", type:"match", q:"Match each phrase to its job in a 発表.", pairs:[
      ["「本日は〜について発表いたします。」","Announce the topic","The opening line that states the topic, with polite いたします."],
      ["「本発表の構成は、次のとおりです。」","Give the outline","It introduces the list of parts: まず…、次に…、最後に…"],
      ["「レジュメの2ページをご覧ください。」","Point listeners to the handout","ご覧ください asks the audience to look, politely."],
      ["「ここから、〜ことがわかります。」","State what a figure clearly shows","わかる reports what the data show, before any interpretation."],
      ["「以上で発表を終わります。」","Close the talk","以上で marks the end of what you have to say."]
    ]},
    {id:"e1u8-l1-x5", type:"mcq", q:"Hana wants to introduce a graph in her ゼミ talk. Which sentence is the best first sentence?", options:[
      {t:"「図2は、学年別の平均睡眠時間を示したものです。」", ok:true, why:"It says what the figure shows before any interpretation, in a clear です・ます sentence."},
      {t:"「図2を見てください、めっちゃ減ってます。」", why:"めっちゃ is casual 話し言葉, and it jumps to a conclusion before saying what the graph shows."},
      {t:"「図2から、学生は睡眠不足であると断定できます。」", why:"An interpretation stated far too strongly, before the listeners know what the axes are."},
      {t:"「図2は、学年別の平均睡眠時間を示したものである。」", why:"Correct Japanese, but である体 is the written style; in a spoken 発表, です・ます is expected."}
    ]},
    {id:"e1u8-l1-x6", type:"spot", q:"Tap every phrase in this practice script that is **too casual** for a ゼミ 発表.", ask:"is too casual", parts:[
      {t:"えっと、じゃあ始めます。", flag:true, why:"Filler (えっと) and casual じゃあ. Use 「それでは、発表を始めます。」"},
      " ",
      {t:"本日は、留学生の住まい探しについて発表いたします。", flag:false, why:"The standard polite opening."},
      " ",
      {t:"まず、研究の背景について説明します。", flag:false, why:"A clear, polite signpost."},
      " ",
      {t:"で、結果なんですけど、", flag:true, why:"「で、」 and 「〜なんですけど」 are conversational. Use 「次に、結果について説明します。」"},
      " ",
      {t:"こちらのグラフをご覧ください。", flag:false, why:"Polite and standard."},
      " ",
      {t:"家賃がめっちゃ上がってます。", flag:true, why:"めっちゃ and the shortened 〜てます are casual. Use 「家賃が大きく上昇しています。」"},
      " ",
      {t:"以上で発表を終わります。", flag:false, why:"The standard closing."}
    ]},
    {id:"e1u8-l1-x7", type:"mcq", q:"How do you read ご清聴 in 「ご清聴ありがとうございました」?", options:[
      {t:"ごせいちょう", ok:true, why:"清 is せい and 聴 is ちょう here: ご清聴, “your attentive listening”."},
      {t:"ごせいとう", why:"聴 is read ちょう, not とう."},
      {t:"ごしんちょう", why:"清 is read せい here; しんちょう is a different word (慎重, careful)."},
      {t:"ごせいきょう", why:"聴 is not read きょう."}
    ]}
   ],
   apply:{intro:"These tasks need paper or a notes app; the last one needs a phone or computer that can record. Your recordings are for you only.", tasks:[
    {t:"Make a one-page レジュメ", how:["Choose a short Japanese article or book chapter in your field (for finding one, see {{finding-japanese-research}}).","Write the header: course (or 自主練習), your name, and a title.","Write three or four numbered headings with short bullets in noun-ending or である style.","Add one or two 論点 for discussion and a 参考文献 list."], write:"Header… Headings and bullets… 論点… 参考文献…"},
    {t:"Prepare a 3-minute ゼミ presentation outline", how:["Use the stages in this lesson: opening, outline, two or three points, summary, closing.","Write the exact stock phrase you’ll use at each stage.","Add one figure (real or simple) and write two sentences describing it: what it shows, then what it suggests (〜と考えられます)."], write:"Opening… Outline sentence… Point 1, 2, 3… Figure description… Closing…"},
    {t:"Record yourself privately and listen back", how:["Record your 3-minute outline as a talk.","Listen once for time and once for 話し言葉 slips (えっと, なんか, で、).","Note two things to change, and record again if you like. Delete the recordings whenever you want."], write:"Time taken… Slips I noticed… Two things to change…"}
   ], proof:"A one-page レジュメ, a 3-minute outline with stock phrases and a described figure, and notes from listening to your own recording."},
   read:[
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”", note:"General advice on planning and delivering a talk; use it alongside the Japanese phrases here."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u8-l2", title:"質疑応答 and ゼミ discussion", minutes:55,
   hook:{q:"At the end of your [発表]{はっぴょう}, someone asks about a study you haven’t read. Which reply is usually best?", options:["Stay silent and wait for the next question","Answer confidently as if you had read it","「[勉強]{べんきょう}[不足]{ぶそく}で[申]{もう}し[訳]{わけ}ありませんが、その[研究]{けんきゅう}はまだ[読]{よ}んでおりません。[確認]{かくにん}いたします。」","「その[質問]{しつもん}は[関係]{かんけい}ありません。」"], answer:2, reveal:"**Say so honestly, and offer to check.** Not knowing something is normal, even for professors, and Japanese has a set, polite way to say it. Inventing an answer is far riskier: someone in the room may know the study. This lesson covers how [質疑応答]{しつぎおうとう} works, answering in four moves, buying time, asking questions yourself, and taking part in ゼミ discussion with softening phrases."},
   goals:[
     "Answer questions in four moves: thank, check, answer, check again",
     "Buy time, admit what you don’t know and offer to follow up, politely and honestly",
     "Ask a clear, polite question after someone else’s talk",
     "Give opinions, agree, disagree, add points and build on others in a ゼミ",
     "Use クッション言葉 and the 「確かに〜が、〜ではないでしょうか」 pattern to soften"
   ],
   learn:[
    {h:"How 質疑応答 works", body:[
      {lead:"After almost every 発表 comes [[shitsugi-outou|[質疑応答]{しつぎおうとう}]] (*shitsugi ōtō*): questions and answers."},
      "The chair (the [司会]{しかい} in a ゼミ, the [座長]{ざちょう} at a conference) opens it with something like 「それでは、質疑応答に移ります。ご質問のある方は[挙手]{きょしゅ}をお願いします。」 (挙手 = raising your hand). At a conference, a questioner usually gives their affiliation and name first. In a ゼミ, the teacher may call on students by name ([指名]{しめい}) so that everyone takes part.",
      "You’ll hear three kinds of contribution: a 質問 (a question), a [指摘]{してき} (pointing out a problem or something missing), and a コメント or 意見 (a comment or opinion). All three are normal. One university guide to ゼミ presentations puts it plainly: criticism is something that helps you grow, and questions should broaden the presenter’s view, not attack them.",
      {tip:"A question is a sign that someone listened. Treat even a tough 指摘 as a gift of free advice on your research, and thank the person for it."}
    ]},
    {h:"Answering in four moves", body:[
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="e1u8a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="18" text-anchor="middle">Answering a question</text><rect class="d-lup" x="20" y="30" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="51" text-anchor="middle">1 お礼 (thank)</text><text class="s" x="170" y="70" text-anchor="middle">「ご質問ありがとうございます」</text><path class="d-ink" d="M170,82 L170,96" stroke-width="2" marker-end="url(#e1u8a2)"/><rect class="d-soft" x="20" y="98" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="119" text-anchor="middle">2 確認 (check the question)</text><text class="s" x="170" y="138" text-anchor="middle">「〜ということでしょうか」</text><path class="d-ink" d="M170,150 L90,180" stroke-width="2" marker-end="url(#e1u8a2)"/><path class="d-ink" d="M170,150 L250,180" stroke-width="2" marker-end="url(#e1u8a2)"/><text class="s" x="92" y="172" text-anchor="middle">I know</text><text class="s" x="250" y="168" text-anchor="middle">I don’t know</text><rect class="d-sage" x="10" y="184" width="155" height="120" rx="6" stroke-width="2"/><text x="87" y="206" text-anchor="middle">3 答える</text><text class="s" x="87" y="228" text-anchor="middle">Conclusion first:</text><text class="s" x="87" y="246" text-anchor="middle">「結論から</text><text class="s" x="87" y="262" text-anchor="middle">申し上げますと」</text><text class="s" x="87" y="284" text-anchor="middle">then the reason</text><rect class="d-gold" x="175" y="184" width="155" height="120" rx="6" stroke-width="2"/><text x="252" y="206" text-anchor="middle">3 正直に言う</text><text class="s" x="252" y="228" text-anchor="middle">「勉強不足で</text><text class="s" x="252" y="244" text-anchor="middle">申し訳ありませんが」</text><text class="s" x="252" y="266" text-anchor="middle">+ offer to check:</text><text class="s" x="252" y="284" text-anchor="middle">「確認いたします」</text><path class="d-ink" d="M87,304 L160,334" stroke-width="2" marker-end="url(#e1u8a2)"/><path class="d-ink" d="M252,304 L180,334" stroke-width="2" marker-end="url(#e1u8a2)"/><rect class="d-lup" x="20" y="338" width="300" height="52" rx="6" stroke-width="2"/><text x="170" y="359" text-anchor="middle">4 確認 (check you answered)</text><text class="s" x="170" y="378" text-anchor="middle">「以上ですが、よろしいでしょうか」</text><text class="s" x="170" y="418" text-anchor="middle">Thanking and checking cost a few seconds</text><text class="s" x="170" y="436" text-anchor="middle">and give you time to think.</text></svg>', alt:"A flow for answering a question: 1 thank (ご質問ありがとうございます); 2 check the question (〜ということでしょうか); then it branches. If you know, 3 answer with the conclusion first (結論から申し上げますと) and then the reason. If you don’t, 3 say so honestly (勉強不足で申し訳ありませんが) and offer to check (確認いたします). Both branches lead to 4, checking you answered (以上ですが、よろしいでしょうか).", cap:"The first two moves are polite, and they also buy you thinking time."},
      {table:[
        ["Move","Phrase"],
        ["1 Thank","「ご質問ありがとうございます。」 For a critical point: 「ご指摘ありがとうございます。」"],
        ["2 Check","「〜ということでしょうか。」 「〜というご質問と理解してよろしいでしょうか。」"],
        ["3 Answer","「結論から申し上げますと、〜です。というのは、〜からです。」"],
        ["4 Check again","「以上ですが、よろしいでしょうか。」"]
      ]},
      "Move 2 matters more than it looks. Questions in a second language are easy to mishear, and questioners sometimes ask two things at once. Repeating the question in your own words fixes both problems, and it shows the room you are taking it seriously.",
      "When a 指摘 is right, accept it: 「ご指摘のとおりです。今後、検討いたします。」 When you disagree, thank first, then explain your choice calmly: 「ご指摘ありがとうございます。ただ、本研究では〜という理由で、〜としました。」"
    ]},
    {h:"Buying time, not knowing and following up", body:[
      {table:[
        ["Situation","Phrase"],
        ["You need a moment","「少し考えさせてください。」"],
        ["You didn’t catch it","「恐れ入りますが、もう一度おっしゃっていただけますか。」"],
        ["You don’t know","「勉強不足で申し訳ありませんが、その点についてはまだ調べておりません。」"],
        ["You can only guess","「推測になりますが、〜ではないかと考えています。」"],
        ["You’ll check later","「確認して、後日ご報告いたします。」"],
        ["Outside your study","「その点は、今後の課題とさせていただきます。」"]
      ]},
      "勉強不足 (*benkyō busoku*, “not enough study”) is the set phrase for “I don’t know that yet”. It is humble without being self-punishing, and nobody will think less of you for using it. If you can give a reasoned guess, label it clearly as a guess with 推測になりますが.",
      "「今後の課題とさせていただきます」 (“I’ll treat that as a task for future work”) is very common at conferences. Use it for points that really are beyond your current study, not as a way to avoid every hard question: listeners notice.",
      {warn:"Never invent a source, a number or a result to fill a silence. An honest 「まだ調べておりません」 costs nothing. A made-up answer can damage your credibility for the rest of the course."}
    ]},
    {h:"Asking a question yourself", body:[
      "Asking good questions is part of taking part, and in many ゼミ it is expected of everyone. A clear question has four parts:",
      {ol:[
        "**Who you are**, at a conference: 「〇〇大学のアナ・シルバです。」 In a ゼミ you can skip this.",
        "**Thanks**: 「[貴重]{きちょう}なご発表、ありがとうございました。」 (貴重 = valuable)",
        "**How many questions**: 「一点、質問させてください。」 or 「二点お[伺]{うかが}いします。」 (伺う here means “to ask”; お伺いする is one of the few double forms accepted by custom, see lesson 4)",
        "**The question, tied to a place in the talk**: 「スライドの5枚目で、〜とおっしゃいましたが、〜という理解でよろしいでしょうか。」"
      ]},
      "Keep it to one or two points and make it specific. A question such as 「〜とは、具体的にはどういうことでしょうか」 (“What exactly do you mean by…?”) is often the most useful thing anyone asks, because others are wondering too.",
      {ex:"〇〇大学のアナ・シルバです。貴重なご発表、ありがとうございました。一点、質問させてください。レジュメの3ページで「地域の差が大きい」と述べられていますが、具体的にはどの地域を比較されたのでしょうか。", label:"Worked example: a question at a conference"}
    ]},
    {h:"Joining a ゼミ discussion", body:[
      "After the 質疑応答, many ゼミ move into open discussion of the presenter’s 論点. Each move has its typical phrases. In speech, 「〜と思います」 is fine for opinions, unlike in a formal report (see {{sentence-endings-japanese}}).",
      {table:[
        ["Move","Phrase"],
        ["Give an opinion","「私は、〜と考えます。」 「〜ではないかと思います。」"],
        ["Agree, with a reason","「〇〇さんの意見に[賛成]{さんせい}です。というのも、〜からです。」"],
        ["Disagree, softly","「確かに〜という点はあると思います。ただ、〜ではないでしょうか。」"],
        ["Add a point ([補足]{ほそく})","「今の点に一つ補足すると、〜」"],
        ["Build on someone","「先ほど〇〇さんが指摘されたように、〜」"],
        ["Ask for detail","「〜とは、具体的にはどういうことでしょうか。」"],
        ["Go back to a point","「少し話が戻りますが、〜」"]
      ]},
      "Among students, use 〇〇さん and です・ます. For the teacher, use 〇〇先生 (or just 先生). Linking your point to someone else’s (先ほど〇〇さんが…) is valued: it shows you listened and keeps the discussion connected. It is the same skill as building on others in {{seminar-discussion}}."
    ]},
    {h:"クッション言葉 and the 確かに〜が pattern", body:[
      "[[kushion-kotoba|クッション言葉]] (*kusshon kotoba*, “cushion words”) are short phrases placed before a request, a question or a disagreement to soften it, like a cushion that breaks a fall. They are the Japanese side of [[softening]].",
      {table:[
        ["クッション言葉","Typical use"],
        ["[恐]{おそ}れ[入]{い}りますが","Before asking a favour or a question of someone senior"],
        ["[差]{さ}し[支]{つか}えなければ","Asking for something they might prefer not to give"],
        ["お[手数]{てすう}をおかけしますが","Asking someone to do extra work for you"],
        ["申し訳ありませんが","Before an inconvenient request or bad news"],
        ["せっかくですが","Declining an offer kindly"]
      ]},
      "For disagreement, the most useful pattern is concession, then turn, then a soft claim:",
      {ex:"確かに、都市部ではそう言えると思います。（concede）\nただ、（turn）\n地方では状況が異なるのではないでしょうか。（soft claim）", label:"Worked example: 確かに〜。ただ、〜ではないでしょうか"},
      "Compare the blunt 「それは違います。」 The content is the same, but the soft version shows you heard the other person’s point and invites a reply instead of ending the exchange. 「〜ではないでしょうか」 is a question in form only: everyone understands it as your opinion, put politely.",
      {warn:"Softening is not hiding. After the cushion, still say your point clearly. A disagreement wrapped in so many cushions that nobody can find it doesn’t help the discussion."}
    ]},
    {h:"Listening, 相槌 and finding your way in", body:[
      "While others speak, Japanese listeners give frequent small signals called [[aizuchi|[相槌]{あいづち}]] (*aizuchi*): はい, ええ, そうですね, nods. They mean “I’m following”, not necessarily “I agree” (the same idea as a [[backchannel]] in English). With teachers, はい and そうなんですね are safe; some etiquette guides advise against a bare なるほど to a senior person, because it can sound like you are judging their point.",
      {list:[
        "**Prepare one contribution** before the ゼミ: a question or a comment on the reading.",
        "**Speak early.** A short clarifying question in the first minutes makes it easier to speak again later.",
        "**Watch first.** Every ゼミ has its own habits: some are lively debates, others wait for the teacher to call on people. Silence while people think is normal and doesn’t mean nobody is engaged.",
        "**Ask a 先輩** how discussion works in this ゼミ and what the teacher values."
      ]},
      {key:"In 質疑応答 and discussion, the polite move and the useful move are the same: thank, check you understood, say your point clearly with a cushion, and be honest about what you don’t know."}
    ]}
   ],
   try:[
    {id:"e1u8-l2-x1", type:"order", q:"Put the moves of a good answer in 質疑応答 in order.", items:[
      {t:"「ご質問ありがとうございます。」", why:"First, thank the questioner."},
      {t:"「〜ということでしょうか。」", why:"Then check you understood the question."},
      {t:"「結論から申し上げますと、〜です。」", why:"Answer with the conclusion first."},
      {t:"「というのは、〜からです。」", why:"Then give the reason."},
      {t:"「以上ですが、よろしいでしょうか。」", why:"Finally, check that you have answered what they asked."}
    ]},
    {id:"e1u8-l2-x2", type:"mcq", q:"In 質疑応答, a teacher asks Sione about a statistic he hasn’t checked. Which reply is best?", options:[
      {t:"「勉強不足で申し訳ありませんが、その数字はまだ確認しておりません。調べて、後日ご報告いたします。」", ok:true, why:"Honest, polite and helpful: it admits the gap with the set phrase and offers to follow up."},
      {t:"「たぶん30％ぐらいだと思います。」", why:"A guessed number presented as an answer. If it’s wrong, it misleads everyone, and たぶん…ぐらい is casual."},
      {t:"「それは今日の発表とは関係ありません。」", why:"Rude, and it closes down a fair question."},
      {t:"「わかりません。」", why:"Honest, but abrupt, and it offers nothing. Add the polite frame and an offer to check."}
    ]},
    {id:"e1u8-l2-x3", type:"sort", q:"Sort these ゼミ comments by what they do.", buckets:["賛成 (agree)","反対 (disagree)","補足 (add a point)"], items:[
      {t:"「ハサンさんの意見に賛成です。というのも、調査の結果とも一致するからです。」", b:0, why:"Agrees and gives a reason."},
      {t:"「私も同じ考えです。」", b:0, why:"A short statement of agreement."},
      {t:"「確かにその点はあると思います。ただ、別の見方もできるのではないでしょうか。」", b:1, why:"Concedes, then disagrees softly with ただ and 〜ではないでしょうか."},
      {t:"「おっしゃることはわかるのですが、データが少し古いのではないでしょうか。」", b:1, why:"A cushioned disagreement about the data."},
      {t:"「今の点に一つ補足すると、地方では状況が少し違います。」", b:2, why:"補足すると adds information to the point just made."},
      {t:"「付け加えると、留学生の場合も同じ傾向があります。」", b:2, why:"付け加えると (to add) introduces extra support."}
    ]},
    {id:"e1u8-l2-x4", type:"match", q:"Match each クッション言葉 to the situation it suits best.", pairs:[
      ["恐れ入りますが","Asking a professor a question or a favour","A polite cushion for troubling someone senior."],
      ["差し支えなければ","Asking for information they may prefer not to share","It means “if it’s no problem for you”, leaving room to say no."],
      ["お手数をおかけしますが","Asking someone to do extra work for you","It acknowledges the trouble (手数) you are causing."],
      ["せっかくですが","Declining a kind offer","It recognises the kindness before saying no."]
    ]},
    {id:"e1u8-l2-x5", type:"mcq", q:"In a ゼミ discussion, Mei disagrees with a classmate who said remote classes suit all students. Which is the best way to say it?", options:[
      {t:"「確かに、通学の時間が減るという利点はあると思います。ただ、通信環境が十分でない学生もいるのではないでしょうか。」", ok:true, why:"Concedes a real point, turns with ただ, and states the disagreement clearly but softly with 〜ではないでしょうか."},
      {t:"「それは違います。」", why:"Blunt: it rejects the point without acknowledging it or giving a reason."},
      {t:"「まあ、いろいろな考え方がありますよね。」", why:"So soft that no point is made; the discussion doesn’t move."},
      {t:"「通信環境が十分でない学生もいるので、その意見は間違っています。」", why:"Gives a reason, but 間違っています is a strong judgement on a classmate’s view; the concession pattern is expected."}
    ]},
    {id:"e1u8-l2-x6", type:"spot", q:"Tap every reply in this 質疑応答 transcript that is **inappropriate**.", ask:"is inappropriate", parts:[
      {t:"「ご質問ありがとうございます。」", flag:false, why:"The standard first move."},
      " ",
      {t:"「は？　どういう意味ですか。」", flag:true, why:"「は？」 sounds rude. Use 「恐れ入りますが、もう一度おっしゃっていただけますか。」"},
      " ",
      {t:"「サンプルの選び方について、ということでしょうか。」", flag:false, why:"A good check of the question."},
      " ",
      {t:"「それは先生の勘違いだと思います。」", flag:true, why:"Telling a teacher they are mistaken (勘違い) is face-threatening. Thank them, then explain your reasoning."},
      " ",
      {t:"「確認して、後日ご報告いたします。」", flag:false, why:"A polite, honest offer to follow up."},
      " ",
      {t:"「知らないけど、たぶん大丈夫です。」", flag:true, why:"Casual and dismissive. Say 勉強不足で申し訳ありませんが… and offer to check."}
    ]},
    {id:"e1u8-l2-x7", type:"mcq", q:"At a conference, Kofi wants to ask the speaker a question. How should he begin?", options:[
      {t:"「〇〇大学のコフィ・メンサです。貴重なご発表、ありがとうございました。一点、質問させてください。」", ok:true, why:"Affiliation and name, thanks, and how many questions: the standard opening at a 学会."},
      {t:"「質問です。サンプルが少なすぎませんか。」", why:"No name, no thanks, and a blunt challenge. The content may be fair, but the frame is missing."},
      {t:"「すみません、ちょっといいですか。」", why:"Casual, and it doesn’t say who he is or what he wants to ask."},
      {t:"「私は〇〇大学のコフィ・メンサと申します。私の研究について説明させてください。」", why:"The 質疑応答 is for questions to the speaker, not for presenting your own research."}
    ]}
   ],
   apply:{intro:"These tasks work best with a real ゼミ or study group, but you can do them on your own with a recorded talk.", tasks:[
    {t:"Predict and prepare answers", how:["Take your 3-minute outline from lesson 1 (or any topic you know).","Write three questions someone might ask.","For each, write a four-move answer. For one of them, write a 勉強不足で… answer with an offer to check."], write:"Question 1 and my answer… Question 2… Question 3 (the one I can’t fully answer)…"},
    {t:"Ask questions of a recorded talk", how:["Watch a short Japanese talk or lecture with subtitles or a transcript (many universities post public lectures online).","Write two questions you would ask, each with the four-part frame: name, thanks, number of points, question tied to a place in the talk."], write:"Talk and speaker… Question 1… Question 2…"},
    {t:"Practise a cushioned disagreement", how:["Pick an opinion you partly disagree with (from a newspaper column, a classmate or the reading).","Write one disagreement with the 確かに〜。ただ、〜ではないでしょうか pattern.","Write one agreement with a reason (〜に賛成です。というのも〜からです) and one 補足."], write:"The opinion… My disagreement… My agreement… My 補足…"}
   ], proof:"Three prepared answers (one of them honestly admitting a gap), two well-framed questions for a talk, and three discussion moves you wrote yourself."},
   read:[
     {book:"keigo", where:"第3章「敬語の具体的な使い方」: worked questions on choosing polite expressions in real situations", note:"Browse it alongside this lesson’s phrases; the keigo itself is explained in lessons 3 and 4."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u8-l3", title:"How keigo works: the five categories", minutes:60,
   hook:{q:"Japanese school grammar traditionally teaches three kinds of [敬語]{けいご}. How many categories does the official guide [敬語]{けいご}の[指針]{ししん} (2007) describe?", options:["Three","Four","Five","Seven"], answer:2, reveal:"**Five.** The traditional three were [尊敬語]{そんけいご}, [謙譲語]{けんじょうご} and [丁寧語]{ていねいご}. The 2007 guidelines split [謙譲語]{けんじょうご} into two kinds (Ⅰ and Ⅱ) and separated [美化語]{びかご} from [丁寧語]{ていねいご}, because each works differently. You don’t need the labels to speak well, but they explain why some forms fit a situation and others don’t. This lesson walks through all five with the forms you’ll need at university."},
   goals:[
     "Explain what keigo does and name the five categories in 敬語の指針 (2007)",
     "Use 尊敬語 for the actions and things of the person you respect",
     "Tell 謙譲語Ⅰ (raising the person your action is directed to) from 謙譲語Ⅱ (being polite to your listener)",
     "Recognise 丁寧語 and 美化語, and the three different jobs of お/ご",
     "Use the special keigo verbs for academic life"
   ],
   learn:[
    {h:"What keigo does, and why it’s hard for everyone", body:[
      {lead:"[[keigo|[敬語]{けいご}]] (*keigo*) is the set of ways Japanese shows respect and consideration through how you refer to people, their actions and your own."},
      "In English, politeness is mostly in the choice of phrases (“Could you possibly…”). Japanese has that too (lesson 2’s クッション言葉), but it also changes the verbs and nouns themselves: the professor 「おっしゃる」, while you 「申し上げる」. The same event, “saying”, takes a different verb depending on who does it and who you are talking to.",
      "At university you use keigo with teachers, office staff, guests and, to a lesser degree, [先輩]{せんぱい} (senior students). With classmates, polite です・ます is usually enough in class, and plain speech between friends.",
      "Keigo is hard for Japanese speakers too. Many Japanese students learn academic and business keigo at university or in their first job, and many companies run keigo training for new staff. So a learner who makes keigo mistakes is in good company. The guidelines themselves base keigo on 相互尊重 (*sōgo sonchō*, mutual respect) and describe using it as 自己表現 (*jiko hyōgen*, self-expression): each speaker chooses the forms that suit the relationship and the situation, rather than applying fixed rules mechanically. So keigo is not a test with one right answer for every case.",
      {tip:"People forgive keigo slips easily when your respect is clear. A friendly, correct です・ます with a few well-chosen keigo verbs is far better than tangled keigo you’re unsure of."}
    ]},
    {h:"From three kinds to five", body:[
      "In 2007 the 文化審議会 (Council for Cultural Affairs, an advisory body of Japan’s Agency for Cultural Affairs) published [[keigo-no-shishin|[敬語]{けいご}の[指針]{ししん}]], the official guidelines on keigo. They keep the familiar three kinds but split two of them, giving five categories.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="e1u8a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="60" y="20" text-anchor="middle">Three kinds</text><text x="250" y="20" text-anchor="middle">Five (2007)</text><rect class="d-lup" x="10" y="36" width="100" height="44" rx="6" stroke-width="2"/><text x="60" y="63" text-anchor="middle">尊敬語</text><path class="d-ink" d="M110,58 L156,58" stroke-width="2" marker-end="url(#e1u8a3)"/><rect class="d-lup" x="160" y="32" width="170" height="52" rx="6" stroke-width="2"/><text x="245" y="54" text-anchor="middle">尊敬語</text><text class="s" x="245" y="73" text-anchor="middle">raises the other’s action</text><rect class="d-sage" x="10" y="140" width="100" height="44" rx="6" stroke-width="2"/><text x="60" y="167" text-anchor="middle">謙譲語</text><path class="d-ink" d="M110,156 L156,128" stroke-width="2" marker-end="url(#e1u8a3)"/><path class="d-ink" d="M110,168 L156,196" stroke-width="2" marker-end="url(#e1u8a3)"/><rect class="d-sage" x="160" y="100" width="170" height="52" rx="6" stroke-width="2"/><text x="245" y="122" text-anchor="middle">謙譲語Ⅰ</text><text class="s" x="245" y="141" text-anchor="middle">raises who you act towards</text><rect class="d-sage" x="160" y="170" width="170" height="52" rx="6" stroke-width="2"/><text x="245" y="192" text-anchor="middle">謙譲語Ⅱ（丁重語）</text><text class="s" x="245" y="211" text-anchor="middle">polite to the listener</text><rect class="d-gold" x="10" y="274" width="100" height="44" rx="6" stroke-width="2"/><text x="60" y="301" text-anchor="middle">丁寧語</text><path class="d-ink" d="M110,290 L156,262" stroke-width="2" marker-end="url(#e1u8a3)"/><path class="d-ink" d="M110,302 L156,330" stroke-width="2" marker-end="url(#e1u8a3)"/><rect class="d-gold" x="160" y="236" width="170" height="52" rx="6" stroke-width="2"/><text x="245" y="258" text-anchor="middle">丁寧語</text><text class="s" x="245" y="277" text-anchor="middle">です・ます</text><rect class="d-gold" x="160" y="304" width="170" height="52" rx="6" stroke-width="2"/><text x="245" y="326" text-anchor="middle">美化語</text><text class="s" x="245" y="345" text-anchor="middle">お茶, ご飯: refined words</text><text class="s" x="170" y="374" text-anchor="middle">Two of the three were split.</text></svg>', alt:"On the left, the traditional three kinds of keigo; on the right, the five of 2007. 尊敬語 stays 尊敬語 (raises the other’s action). 謙譲語 splits into 謙譲語Ⅰ (raises who you act towards) and 謙譲語Ⅱ, also called 丁重語 (polite to the listener). 丁寧語 splits into 丁寧語 (です・ます) and 美化語 (refined words like お茶 and ご飯).", cap:"The guidelines keep the old three but split 謙譲語 and 丁寧語, because the parts work in different ways."},
      {table:[
        ["Category","What it does","Examples"],
        ["[[sonkeigo|[尊敬語]{そんけいご}]]","Raises the person who does the action or owns the thing","いらっしゃる、おっしゃる、お読みになる、先生のご研究"],
        ["[[kenjougo|[謙譲語]{けんじょうご}]]Ⅰ","Raises the person your action goes towards","[伺]{うかが}う、申し上げる、[拝見]{はいけん}する、お送りする"],
        ["[[teichougo|[謙譲語]{けんじょうご}Ⅱ（[丁重語]{ていちょうご}）]]","Speaks of your own action politely to the listener","[参]{まい}ります、申します、いたします、おります"],
        ["[[teineigo|[丁寧語]{ていねいご}]]","Polite to the listener","です、ます、（で）ございます"],
        ["[[bikago|[美化語]{びかご}]]","Makes the word itself more refined","お茶、お酒、ご飯"]
      ]},
      "The Japanese names are *sonkeigo*, *kenjōgo* Ⅰ and Ⅱ, *teichōgo*, *teineigo* and *bikago*. Many textbooks and teachers still use the three-way system, which is fine: the five categories are a finer description of the same language, not a new language."
    ]},
    {h:"尊敬語: raising the other person", body:[
      "尊敬語 is used for the actions, states and things of the person you respect (or a third person you respect). The professor is the subject of the sentence.",
      {table:[
        ["Way of forming it","Examples"],
        ["Special verbs","いらっしゃる (いる・行く・来る), おっしゃる (言う), なさる (する), ご覧になる (見る), くださる (くれる)"],
        ["お + verb stem + になる","お読みになる, お書きになる, お[帰]{かえ}りになる"],
        ["ご + 漢語 + になる","ご出席になる, ご[利用]{りよう}になる"],
        ["Verb + れる／られる","読まれる, 書かれる, 来られる"],
        ["お／ご + their things","先生のお考え, ご研究, お忙しい (of the professor)"],
        ["Asking: お／ご〜ください","お待ちください, ご確認ください"]
      ]},
      "The special verbs and お〜になる are the most respectful. 〜れる／られる is lighter and very common in academic speech, as in 「先生が述べられたように」. (In papers and reports, cited authors get no keigo at all: 「山田（2020）は〜と述べている」.) Its drawback is that it looks like the passive or potential form, so 「先生が来られる」 can be ambiguous; 「いらっしゃる」 is clearer.",
      {ex:"山田先生は、明日の学会にいらっしゃいますか。\n先生がおっしゃったとおり、もう一度データを確認しました。\nこちらの資料をご覧ください。", label:"Worked example: 尊敬語 for the professor"}
    ]},
    {h:"謙譲語Ⅰ: raising the person your action is for", body:[
      "謙譲語Ⅰ describes **your** action (or your side’s) that goes **towards someone you respect**, and raises that person. The guidelines define it as describing an action that goes from your side to the other side or a third person, raising the person it goes towards.",
      {table:[
        ["Way of forming it","Examples"],
        ["Special verbs","伺う (visit; ask; hear), 申し上げる (say to), 拝見する (look at their thing), いただく (receive), 差し上げる (give), お目にかかる (meet), 存じ上げる (know a person)"],
        ["お + verb stem + する","お送りする, お持ちする, お[届]{とど}けする"],
        ["ご + 漢語 + する","ご説明する, ご連絡する, ご相談する"],
        ["お／ご〜いただく","お教えいただく, ご指導いただく"]
      ]},
      "The test: **is there a person on the receiving end who deserves raising?** 「先生に資料をお送りします」 works because the professor receives the documents. 「先生の論文を拝見しました」 works because the paper belongs to the professor.",
      {warn:"Never use 謙譲語Ⅰ for the professor’s own actions. 「先生がご説明する」 or 「先生、拝見してください」 lowers the professor. For their action, switch to 尊敬語: 「先生がご説明になる」, 「ご覧ください」. Lesson 4 has more of these traps."}
    ]},
    {h:"謙譲語Ⅱ (丁重語): being polite to your listener", body:[
      "謙譲語Ⅱ, also called [[teichougo|[丁重語]{ていちょうご}]] (*teichōgo*), also describes your own action, but it doesn’t raise anyone in the sentence. It is a courtesy to the **person you are speaking or writing to**. It nearly always comes with ます.",
      {table:[
        ["Plain","謙譲語Ⅱ"],
        ["行く・来る","参ります"],
        ["言う","申します"],
        ["する","いたします (and 研究いたします, 発表いたします)"],
        ["いる","おります"],
        ["知っている・思う","存じております・存じます"]
      ]},
      "Why “nearly always with ます”? 謙譲語Ⅱ exists to be polite to the person you are addressing, so it naturally comes with the polite ending. In a plain-style sentence such as a diary entry, 「図書館に参る」 sounds odd, because there is no listener to be polite to.",
      "One pair often confuses learners: 存じ上げる and 存じる. 存じ上げる is 謙譲語Ⅰ: you use it when what you know is a respected person, or something of theirs, as in 「先生のお名前は存じ上げております」. 存じる is 謙譲語Ⅱ: it is “know” or “think” said politely to your listener, as in 「その件は存じております」 or 「ありがたく存じます」.",
      "The difference from 謙譲語Ⅰ shows clearly with 伺う (Ⅰ) and 参る (Ⅱ). Imagine you are telling your professor about your plans:",
      {table:[
        ["Sentence","Why"],
        ["✓ 「明日、先生の研究室に伺います。」","伺う raises the professor, who is the person you visit."],
        ["✗ 「明日、弟のところに伺います。」","伺う would raise your younger brother. Wrong direction."],
        ["✓ 「明日、弟のところに参ります。」","参る raises nobody: it is simply polite to the professor you are talking to."],
        ["✓ 「明日は図書館に参ります。」","Nobody to raise at the library; 参ります is polite to the listener."]
      ]},
      "Because 謙譲語Ⅱ is about the listener, it can even be used for things that aren’t people, as in the station announcement 「まもなく電車が参ります」. 「お／ご〜いたす」 (ご連絡いたします, ご案内いたします) combines both: it raises the person you act towards (Ⅰ) and is polite to your listener (Ⅱ)."
    ]},
    {h:"丁寧語, 美化語, and the three jobs of お／ご", body:[
      "[丁寧語]{ていねいご} is です and ます (and the more formal ございます, as in 「こちらでございます」). It is polite to the listener and is the base of almost everything else in this unit.",
      "[美化語]{びかご} adds お or ご to make a word sound more refined, without raising anyone: お茶, お[酒]{さけ}, ご飯, お[弁当]{べんとう}. It is about the speaker’s own polished speech.",
      "So the same prefix can do three different jobs. Ask whose thing it is, and who it is for:",
      {table:[
        ["Example","Job"],
        ["先生のお名前・先生からのお手紙","尊敬語: the professor’s own name or letter"],
        ["先生へのお手紙・ご連絡","謙譲語Ⅰ: your letter or message going to the professor"],
        ["お茶・ご飯","美化語: a refined word, nobody raised"]
      ]},
      "As a rule of thumb, お goes on native Japanese words (お名前, お考え) and ご on Sino-Japanese words (ご研究, ご意見), with common exceptions such as お電話 and お時間. お and ご are not usually added to katakana words."
    ]},
    {h:"Keigo verbs for academic life", body:[
      {lead:"These verbs cover most of what you’ll say to and about professors. A dash (—) means there is no special form; use the regular patterns instead."},
      {table:[
        ["Plain","尊敬語","謙譲語Ⅰ","謙譲語Ⅱ"],
        ["いる","いらっしゃる","—","おります"],
        ["行く","いらっしゃる","伺う (to their place)","参ります"],
        ["来る","いらっしゃる・お見えになる・お[越]{こ}しになる","—","参ります"],
        ["言う","おっしゃる","申し上げる","申します"],
        ["する","なさる","（ご〜する）","いたします"],
        ["見る","ご覧になる","拝見する","—"],
        ["聞く（ask・hear）","お聞きになる","伺う","—"],
        ["会う","お会いになる","お目にかかる","—"],
        ["知っている","ご[存]{ぞん}じだ","存じ上げている (a respected person)","存じております"],
        ["読む","お読みになる","[拝読]{はいどく}する","—"],
        ["もらう・くれる","くださる (くれる)","いただく (もらう)","—"]
      ]},
      {key:"Two questions choose the form. Whose action is it? (The professor’s: 尊敬語. Yours: 謙譲語.) If it’s yours, does it go towards someone you respect? (Yes: 謙譲語Ⅰ. No, you’re just being polite to your listener: 謙譲語Ⅱ.)"}
    ]}
   ],
   try:[
    {id:"e1u8-l3-x1", type:"sort", q:"Sort these verbs: which are 尊敬語 (for the professor’s actions) and which are 謙譲語 (for your own)?", buckets:["尊敬語","謙譲語 (Ⅰ or Ⅱ)"], items:[
      {t:"いらっしゃる", b:0, why:"The 尊敬語 of いる, 行く and 来る."},
      {t:"おっしゃる", b:0, why:"The 尊敬語 of 言う."},
      {t:"ご覧になる", b:0, why:"The 尊敬語 of 見る."},
      {t:"くださる", b:0, why:"The 尊敬語 of くれる: the professor gives to you."},
      {t:"伺う", b:1, why:"謙譲語Ⅰ: you visit or ask the person you respect."},
      {t:"拝見する", b:1, why:"謙譲語Ⅰ: you look at the respected person’s thing."},
      {t:"申す", b:1, why:"謙譲語Ⅱ: you say, politely to your listener."},
      {t:"参る", b:1, why:"謙譲語Ⅱ: you go or come, politely to your listener."}
    ]},
    {id:"e1u8-l3-x2", type:"match", q:"Match each plain verb to its 尊敬語 form.", pairs:[
      ["言う","おっしゃる","おっしゃる is the special 尊敬語 verb for saying."],
      ["見る","ご覧になる","ご覧になる is the special 尊敬語 verb for seeing."],
      ["する","なさる","なさる is the 尊敬語 of する."],
      ["くれる","くださる","くださる: someone respected gives to you."],
      ["知っている","ご存じだ","ご存じだ (ご存じです) is the 尊敬語 of 知っている."]
    ]},
    {id:"e1u8-l3-x3", type:"match", q:"Match each plain verb to its special 謙譲語Ⅰ form.", pairs:[
      ["見る (their paper)","拝見する","拝見する: you look at something belonging to the person you respect."],
      ["もらう","いただく","いただく: you receive from someone you respect."],
      ["会う","お目にかかる","お目にかかる: you meet the person you respect."],
      ["読む (their book)","拝読する","拝読する: you read the respected person’s writing."]
    ]},
    {id:"e1u8-l3-x4", type:"mcq", q:"You are telling your professor your plans. Choose the best verb: 「明日は、弟のところに（　）。」", options:[
      {t:"参ります", ok:true, why:"謙譲語Ⅱ: polite to the professor you are talking to, without raising your brother."},
      {t:"伺います", why:"伺う is 謙譲語Ⅰ: it would raise the person you visit, your own younger brother. Wrong direction."},
      {t:"いらっしゃいます", why:"いらっしゃる is 尊敬語: it would raise yourself."},
      {t:"お越しになります", why:"お越しになる is 尊敬語, for a respected person’s coming or going, not yours."}
    ]},
    {id:"e1u8-l3-x5", type:"sort", q:"Following 敬語の指針, sort these into 謙譲語Ⅰ, 謙譲語Ⅱ or 美化語.", buckets:["謙譲語Ⅰ","謙譲語Ⅱ (丁重語)","美化語"], items:[
      {t:"伺う", b:0, why:"Raises the person you visit or ask."},
      {t:"拝見する", b:0, why:"Raises the owner of what you look at."},
      {t:"（先生に）お届けする", b:0, why:"お〜する raises the person who receives."},
      {t:"参る", b:1, why:"Polite to the listener; raises nobody."},
      {t:"申す", b:1, why:"Polite to the listener about your own saying."},
      {t:"いたす", b:1, why:"Polite to the listener about your own doing."},
      {t:"お茶", b:2, why:"A refined word; nobody is raised."},
      {t:"ご飯", b:2, why:"A refined word; nobody is raised."}
    ]},
    {id:"e1u8-l3-x6", type:"mcq", q:"In 「先生のご研究について、お話を伺いたいと思っております」, what is the ご in ご研究?", options:[
      {t:"尊敬語: it is the professor’s own research", ok:true, why:"お／ご on the respected person’s own things raises them."},
      {t:"謙譲語Ⅰ: it is research going towards the professor", why:"The research belongs to the professor; it isn’t something you give them."},
      {t:"謙譲語Ⅱ: it is polite to the listener", why:"謙譲語Ⅱ is for your own actions, such as 参ります and いたします."},
      {t:"美化語: it just makes the word refined", why:"美化語 is for neutral things like お茶. Here the ご raises the professor as the owner."}
    ]},
    {id:"e1u8-l3-x7", type:"mcq", q:"How is 謙譲語 read?", options:[
      {t:"けんじょうご", ok:true, why:"謙 けん, 譲 じょう, 語 ご: けんじょうご (*kenjōgo*)."},
      {t:"けんそんご", why:"謙遜 (けんそん, modesty) is a different word. 譲 is read じょう."},
      {t:"けんじょご", why:"譲 has a long vowel: じょう, not じょ."},
      {t:"けんしょうご", why:"譲 is じょう (voiced), not しょう."}
    ]}
   ],
   apply:{intro:"These tasks need paper or a notes app.", tasks:[
    {t:"Make your own keigo verb cards", how:["Choose ten verbs you use with teachers (行く, 言う, 見る, 聞く, もらう, 会う…).","For each, write the 尊敬語, 謙譲語Ⅰ and 謙譲語Ⅱ forms where they exist (use the table in this lesson).","Write one sentence about a professor and one about yourself with each verb."], write:"Verb → 尊敬語 / 謙譲語Ⅰ / 謙譲語Ⅱ, with two sentences each…"},
    {t:"Collect keigo from real life", how:["For a week, notice keigo in announcements, shop talk, university emails or TV.","Write down five examples.","Label each with its category, and say whose action it is and who is raised."], write:"Example → category → whose action → who is raised (×5)…"},
    {t:"Explain the five categories in your own words", how:["Without looking, write one sentence explaining each of the five categories.","Add one example for each.","Then check against the lesson and the guidelines, and correct anything you got wrong."], write:"尊敬語… 謙譲語Ⅰ… 謙譲語Ⅱ… 丁寧語… 美化語…"}
   ], proof:"Ten keigo verb cards with example sentences, five real-life examples classified, and your own explanation of the five categories."},
   read:[
     {book:"keigo", where:"第2章「敬語の仕組み」: the sections on each of the five categories", note:"The definitions and examples behind this lesson. Read one category at a time."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u8-l4", title:"Using keigo well: common mistakes and ウチ・ソト", minutes:55,
   hook:{q:"Which of these is a [二重敬語]{にじゅうけいご} (double keigo) that most guides advise against?", options:["おっしゃる","おっしゃられる","いらっしゃる","ご[覧]{らん}になる"], answer:1, reveal:"**おっしゃられる.** おっしゃる is already [尊敬語]{そんけいご}; adding the [尊敬語]{そんけいご} ending 〜れる on top makes the same kind of keigo twice in one word. You hear it often, which is exactly why guides warn about it. This lesson covers the most common keigo mistakes, the few double forms that are accepted by custom, when 〜させていただく fits, set phrases that teachers notice, and ウチ・ソト."},
   goals:[
     "Spot and fix keigo used in the wrong direction",
     "Recognise 二重敬語, and the few double forms accepted by custom",
     "Use 〜させていただく where it fits and avoid over-using it",
     "Choose set phrases that most guides advise with teachers",
     "Apply ウチ・ソト when you talk about your own side to an outsider"
   ],
   learn:[
    {h:"Mistake 1: the right verb in the wrong direction", body:[
      {lead:"The most common keigo mistake isn’t a wrong form. It is a correct form pointed at the wrong person."},
      "Lesson 3’s rule: 尊敬語 for the professor’s actions, 謙譲語 for yours. Under pressure, people mix them up, especially with verbs that sound polite, such as 申す, 参る and 拝見する. Each of these sentences lowers the professor by mistake, or raises the speaker:",
      {table:[
        ["✗ Wrong direction","✓ Fixed","Why"],
        ["先生が申したように","先生がおっしゃったように","申す is 謙譲語: for your own saying"],
        ["先生、この資料を拝見してください。","先生、この資料をご覧ください。","拝見する is your looking, not theirs"],
        ["(to a visitor) 受付で伺ってください。","受付でお[尋]{たず}ねください。","伺う is 謙譲語Ⅰ: their asking needs 尊敬語"],
        ["先生は研究室におりますか。","先生は研究室にいらっしゃいますか。","おる is 謙譲語Ⅱ"],
        ["先生も[懇親会]{こんしんかい}に参られますか。","先生も懇親会にいらっしゃいますか。","参る + れる doesn’t raise; use いらっしゃる"],
        ["先ほど私がおっしゃったように","先ほど申し上げたように","おっしゃる raises yourself"]
      ]},
      "A quieter version of the same mistake: 「このデータベースは学外からもご利用できます」. ご〜できる is the potential of ご〜する, which is 謙譲語Ⅰ, so it describes your action. For the user’s action, use 尊敬語: 「ご利用になれます」 (or simply 「利用できます」). The guidelines’ rule is: make the 尊敬語 form first (ご利用になる), then make it potential (ご利用になれる). 「ご利用いただけます」 is also widely used and accepted.",
      {tip:"When unsure, ask: **whose action is this?** If it’s the professor’s, any form with 申, 参, 拝, 伺 or お〜する is a warning sign."}
    ]},
    {h:"Mistake 2: 二重敬語 (double keigo)", body:[
      "[[nijuu-keigo|[二重敬語]{にじゅうけいご}]] (*nijū keigo*) means using the same kind of keigo twice in one word. The guidelines say it is generally not considered appropriate.",
      {table:[
        ["✗ Double","✓ Single","What doubled"],
        ["おっしゃられる","おっしゃる","おっしゃる + 〜れる"],
        ["お読みになられる","お読みになる","お〜になる + 〜れる"],
        ["ご覧になられる","ご覧になる","ご覧になる + 〜れる"],
        ["お帰りになられました","お帰りになりました","お〜になる + 〜れる"]
      ]},
      "People produce double keigo because they want to be extra polite, and these forms are common in speech. Still, careful listeners notice them, and in writing they look like errors. One correct form is enough.",
      "The guidelines also note that some double forms have become **established by custom** and are fine: for 尊敬語, お召し上がりになる and お見えになる; for 謙譲語Ⅰ, お伺いする, お伺いいたす and お伺い申し上げる. Don’t “correct” these.",
      "Linking two keigo forms with て is a different thing, called 敬語連結: 「お読みになっていらっしゃる」. Each part is correct on its own, so it is generally acceptable, though it can sound heavy. 「お読みになっている」 is lighter.",
      {warn:"Don’t let fear of 二重敬語 freeze you. If you notice one in your own speech, just carry on. In emails, read once more before sending and delete the extra 〜れる."}
    ]},
    {h:"〜させていただく: when it fits", body:[
      "〜させていただく (literally, “I humbly receive your letting me do…”) has spread widely, and some people find it over-used. The guidelines say it is basically used when (a) you do something with the other person’s permission, and (b) you benefit from it, or feel that you do.",
      {table:[
        ["Sentence","Fits?"],
        ["「インタビューを録音させていただいてもよろしいでしょうか。」","✓ You ask permission, and you benefit"],
        ["「研究室のプリンターを使わせていただいてもよろしいでしょうか。」","✓ Again permission and benefit"],
        ["「本日は発表させていただきます。」","Common and accepted; 「発表いたします」 is simpler"],
        ["「経済学部に在籍させていただいております。」","✗ Nobody gave permission: 「在籍しております」"]
      ]},
      "Also watch for the extra さ in さ入れ言葉 (*sa-ire kotoba*): with godan verbs the form is 〜せていただく. 「読ませていただく」 and 「書かせていただく」 are standard; 「読まさせていただく」 is widely regarded as non-standard.",
      {tip:"A good habit: write いたします or the plain polite form first. Use させていただく only when you are really asking for, or thanking for, permission."}
    ]},
    {h:"Set phrases that teachers notice", body:[
      "Some phrases are not grammar errors at all, but many people (including many teachers) consider them unsuitable towards someone senior. Most business-etiquette and university guides advise the following. Treat them as widely held expectations, not as rules of grammar.",
      {table:[
        ["Often advised against","Usually advised instead","Why"],
        ["ご苦労さまです","お疲れさまです","ご苦労さま is felt to be said by seniors to juniors (a few guides question お疲れさま to seniors too)"],
        ["了解しました","承知しました・承知いたしました","了解 is felt to be casual or for equals; this view is recent and not universal"],
        ["参考になりました","勉強になりました","参考 can suggest you only partly used their advice"],
        ["すみません (to apologise)","申し訳ありません・申し訳ございません","More formal for a real apology"]
      ]},
      "In emails to teachers, the usual opening is 「お世話になっております」 rather than 「お疲れさまです」 (lesson 5). With your own ゼミ teacher, the ゼミ’s habits may be more relaxed; listen to how 先輩 speak.",
      {ex:"先生：「来週の発表、資料は前日までに送ってください。」\n学生：「承知いたしました。前日の正午までにお送りいたします。」", label:"Worked example: accepting an instruction"}
    ]},
    {h:"ウチ・ソト: whose side are you on?", body:[
      "Keigo depends not only on rank but on groups. [[uchi-soto|ウチ・ソト]] (*uchi/soto*, inside and outside) means that when you speak to someone **outside** your group, you treat members of **your own group** as part of “you”: no 尊敬語 for them, even if they are senior, and no さん or job titles after their names.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="e1u8a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="20" y="14" width="300" height="104" rx="18" stroke-width="2"/><text x="170" y="40" text-anchor="middle">ソト (outside): the listener</text><text class="s" x="170" y="62" text-anchor="middle">a professor · a client · a caller</text><text class="s" x="170" y="86" text-anchor="middle">→ their actions in 尊敬語</text><text class="s" x="170" y="104" text-anchor="middle">いらっしゃる・おっしゃる</text><path class="d-ink" d="M170,196 L170,124" stroke-width="2" marker-end="url(#e1u8a4)"/><text class="s" x="180" y="150">you speak</text><text class="s" x="180" y="168">to ソト</text><rect class="d-sage" x="20" y="200" width="300" height="150" rx="18" stroke-width="2"/><text x="170" y="226" text-anchor="middle">ウチ (inside): your side</text><text class="s" x="170" y="250" text-anchor="middle">you · your family · your workplace</text><text class="s" x="170" y="276" text-anchor="middle">→ their actions in 謙譲語</text><text class="s" x="170" y="296" text-anchor="middle">申しておりました・おります</text><text class="s" x="170" y="322" text-anchor="middle">→ no さん or titles:</text><text class="s" x="170" y="340" text-anchor="middle">母・田中</text><text class="s" x="170" y="384" text-anchor="middle">Even your boss counts as ウチ to an outsider.</text></svg>', alt:"Two rounded boxes. The upper one is ソト, the outside: the listener, such as a professor, a client or a caller; their actions take 尊敬語 (いらっしゃる, おっしゃる). The lower one is ウチ, the inside: you, your family and your workplace; when speaking to ソト, their actions take 謙譲語 (申しておりました, おります) and their names take no さん or titles (母, 田中). An arrow shows you speaking from ウチ to ソト. Note: even your boss counts as ウチ to an outsider.", cap:"Your own side is lowered together with you when you speak to an outsider."},
      {table:[
        ["Situation","✓ Natural","✗ Avoid"],
        ["Telling your professor what your mother said","「母が、先生によろしくと申しておりました。」","「お母さんがおっしゃっていました。」"],
        ["Your part-time office; a caller asks for your manager, 田中部長","「申し訳ございません。田中はただいま席を外しております。」","「田中部長はいらっしゃいません。」"]
      ]},
      "At university the lines are softer than in business. Many students still say 〇〇先生 about their own supervisor when talking to a professor from elsewhere, often as 「[指導教員]{しどうきょういん}の山田先生」, while avoiding heavy 尊敬語 for them. University office staff may follow business-style ウチ・ソト on the phone. If you’re unsure, ask a 先輩 in your 研究室 what is usual there."
    ]},
    {h:"Choosing the level: not too little, not too much", body:[
      {table:[
        ["Person","Usual level"],
        ["Classmates (in class or ゼミ)","です・ます with さん; plain speech among friends outside"],
        ["先輩","です・ます, some keigo; follow their lead"],
        ["Professors and office staff","です・ます plus keigo verbs and set phrases"],
        ["People from another university at a 学会","Keigo, as with professors"]
      ]},
      "More keigo is not always more polite. Heavy keigo in a friendly ゼミ can sound cold, and over-polite speech that hides a demand can sound sarcastic: Japanese has a word for this, [慇懃無礼]{いんぎんぶれい} (polite on the surface, rude underneath).",
      "Professors often speak plainly to students (「それ、来週までにやっておいて」). Keep your own です・ます and keigo anyway; the relationship isn’t symmetrical. If a professor tells you that you needn’t use keigo, polite です・ます is still the safe choice."
    ]},
    {h:"Learning keigo without fear", body:[
      {list:[
        "**Borrow phrases.** Emails from university offices and professors are full of correct keigo. Save good sentences and reuse them.",
        "**Learn whole chunks**, not rules: 「ご確認いただけますでしょうか」 is hard to build but easy to remember. (Some guides object that 〜ますでしょうか stacks two polite endings, ます and でしょう. It is very common in emails and speech, and 「ご確認いただけますか」 or 「ご確認いただけないでしょうか」 are also fine.)",
        "**Accept correction gracefully.** 「ご指摘ありがとうございます。気をつけます。」",
        "**Check the guidelines** when you want the reasoning behind a form, and remember that usage changes and that respected people sometimes disagree."
      ]},
      {key:"Two checks catch most keigo mistakes: whose action is it (尊敬語 for theirs, 謙譲語 for yours), and is one form enough (it is: no 二重敬語). Then let ウチ・ソト decide who counts as “yours”."}
    ]}
   ],
   try:[
    {id:"e1u8-l4-x1", type:"mcq", q:"Fill the gap in a message to your supervisor: 「昨日のゼミで先生が（　）とおり、もう一度データを確認しました。」", options:[
      {t:"おっしゃった", ok:true, why:"The professor’s saying takes the 尊敬語 おっしゃる, used once."},
      {t:"おっしゃられた", why:"二重敬語: おっしゃる is already 尊敬語, so 〜れる doubles it."},
      {t:"申された", why:"申す is 謙譲語Ⅱ, for your own saying; adding 〜れる doesn’t turn it into respect for the professor."},
      {t:"申した", why:"申す is for your own saying. Used for the professor, it lowers them."}
    ]},
    {id:"e1u8-l4-x2", type:"mcq", q:"According to 敬語の指針, which of these double forms is **accepted by custom**?", options:[
      {t:"お召し上がりになる", ok:true, why:"The guidelines list お召し上がりになる (with お見えになる) as an established 尊敬語 form, even though it technically doubles."},
      {t:"おっしゃられる", why:"A standard example of 二重敬語 that guides advise against."},
      {t:"お読みになられる", why:"お〜になる plus 〜れる: the guidelines’ own example of 二重敬語."},
      {t:"ご覧になられる", why:"ご覧になる plus 〜れる doubles 尊敬語; ご覧になる is enough."}
    ]},
    {id:"e1u8-l4-x3", type:"spot", q:"Tap every **keigo error** in Dmitri’s message to his professor.", ask:"is a keigo error", parts:[
      "山田先生　",
      {t:"お世話になっております。", flag:false, why:"The standard opening for a teacher you know."},
      " ",
      {t:"先日、先生が申したように、", flag:true, why:"申す is for your own saying. The professor’s saying is おっしゃる: 「先生がおっしゃったように」."},
      "調査の範囲を絞りました。",
      {t:"先生のご論文を拝見しました。", flag:false, why:"Correct: 拝見する raises the professor whose paper you read."},
      " 来週の研究会には",
      {t:"先生も参られますか。", flag:true, why:"参る is 謙譲語Ⅱ, for your own going. For the professor: 「いらっしゃいますか」."},
      " また、",
      {t:"資料はもうご覧になられましたか。", flag:true, why:"二重敬語: ご覧になる + 〜れる. Use 「ご覧になりましたか」."},
      " ",
      {t:"お忙しいところ恐れ入りますが、", flag:false, why:"A suitable cushion."},
      {t:"よろしくお願いいたします。", flag:false, why:"The standard closing."}
    ]},
    {id:"e1u8-l4-x4", type:"mcq", q:"Ana has a part-time job in an office. A caller from another company asks for her manager, 田中部長, who is out. What should she say?", options:[
      {t:"「申し訳ございません。田中はただいま席を外しております。」", ok:true, why:"ウチ・ソト: to an outsider, her own manager is ウチ, so no title and 謙譲語Ⅱ おります."},
      {t:"「田中部長はただいまいらっしゃいません。」", why:"Raises her own manager to an outsider, with a title and 尊敬語."},
      {t:"「田中さんは今いないです。」", why:"さん on an in-group member to an outsider, and casual いないです."},
      {t:"「田中様は席を外していらっしゃいます。」", why:"様 and 尊敬語 for her own side: the reverse of ウチ・ソト."}
    ]},
    {id:"e1u8-l4-x5", type:"mcq", q:"Fatima wants to pass on her mother’s greeting to her professor. Which is right?", options:[
      {t:"「母が、先生によろしくと申しておりました。」", ok:true, why:"母 (not お母さん) and the 謙譲語Ⅱ 申しておりました: her mother is ウチ."},
      {t:"「お母さんが、先生によろしくとおっしゃっていました。」", why:"お母さん and おっしゃる raise her own mother in front of an outsider."},
      {t:"「母が、先生によろしくとおっしゃっていました。」", why:"母 is right, but おっしゃる is 尊敬語 and raises her mother."},
      {t:"「お母様が、先生によろしくと申しておりました。」", why:"お母様 is for someone else’s mother, never your own."}
    ]},
    {id:"e1u8-l4-x6", type:"sort", q:"Business-etiquette and university guides commonly give advice on these phrases for speaking to a professor. Sort them the way most of those guides do.", buckets:["Usually advised","Usually advised against"], items:[
      {t:"申し訳ございません (to apologise)", b:0, why:"The formal apology guides recommend to a teacher, rather than a casual すみません."},
      {t:"承知いたしました", b:0, why:"The phrase most guides advise for accepting an instruction."},
      {t:"勉強になりました", b:0, why:"A safe way to thank a teacher for advice."},
      {t:"ご苦労さまです", b:1, why:"Felt to be said by seniors to juniors."},
      {t:"了解っす", b:1, why:"Casual slang; not for teachers in any guide."},
      {t:"参考になりました", b:1, why:"Many guides say it can sound as if you only partly used the advice."}
    ]},
    {id:"e1u8-l4-x7", type:"match", q:"Match each mistake to its fix.", pairs:[
      ["（先生に）「この資料を拝見してください。」","「この資料をご覧ください。」","The professor’s looking needs 尊敬語 ご覧, not your 拝見."],
      ["（訪問者に）「受付で伺ってください。」","「受付でお尋ねください。」","伺う is your asking; for the visitor’s asking, use お尋ねください."],
      ["「先生は研究室におりますか。」","「先生は研究室にいらっしゃいますか。」","おる is 謙譲語Ⅱ; the professor’s being there needs いらっしゃる."],
      ["「論文を読まさせていただきました。」","「論文を読ませていただきました。」","さ入れ言葉: with 読む, the form is 読ませる."]
    ]}
   ],
   apply:{intro:"These tasks need paper or a notes app, and some real Japanese you come across.", tasks:[
    {t:"Proofread for direction and doubling", how:["Take an email or message you wrote to a teacher in Japanese (or write a short one now).","Underline every verb about the teacher and every verb about you.","Check each: 尊敬語 for theirs, 謙譲語 for yours, and no 二重敬語."], write:"Verbs about the teacher… Verbs about me… What I corrected…"},
    {t:"Rewrite over-used させていただく", how:["Find five sentences with させていただく (in emails, shop signs, announcements or your own writing).","For each, decide whether permission and benefit are really involved.","Rewrite the ones that don’t fit with いたします or a plain polite form."], write:"Sentence → fits? → my rewrite (×5)…"},
    {t:"Practise ウチ・ソト", how:["Write three sentences you might say to a professor about a family member.","Write two sentences you might say on the phone to an outsider about a colleague or manager.","Check: 母・父・兄 (not お母さん…), no さん or titles for your side, 謙譲語 for their actions."], write:"Family sentences… Workplace sentences… What I checked…"}
   ], proof:"A proofread message with corrected keigo, five させていただく sentences judged and rewritten where needed, and five ウチ・ソト sentences you checked."},
   read:[
     {book:"keigo", where:"第2章「敬語の仕組み」: the notes on 二重敬語 and 敬語連結; 第3章 for questions on 〜させていただく", note:"The reasoning behind this lesson’s advice, with more examples."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u8-l5", title:"Emailing and visiting professors, and a send-off", minutes:60,
   hook:{q:"Ana needs to email a professor about a report deadline. Which [件名]{けんめい} (subject line) is best?", options:["「こんにちは」","「[質問]{しつもん}」","「【[環境]{かんきょう}[社会学]{しゃかいがく}】レポートの[提出]{ていしゅつ}[期限]{きげん}についてのご[相談]{そうだん}（[文学部]{ぶんがくぶ}2[年]{ねん}　アナ・シルバ）」","(no subject: the message explains everything)"], answer:2, reveal:"**The specific one.** Professors receive many emails, and a vague or empty subject line may be overlooked or even mistaken for spam. A good [件名]{けんめい} names the course, the topic and who you are, so the professor knows what the email is before opening it. This lesson builds a whole email to a professor, a reply and a thank-you, then a visit to the [研究室]{けんきゅうしつ}, and ends with a send-off for this course and for IT CHICK Academy."},
   goals:[
     "Write a clear, polite email to a professor, with a specific 件名, correct 宛名, 名乗り, 用件 and 署名",
     "Reply to a professor and send a short thank-you",
     "Follow up politely when there is no reply, and avoid common slips such as 「〇〇教授様」",
     "Book and make a visit to a 研究室 or オフィスアワー, with the right phrases at the door",
     "Look back on Academic Japanese and IT CHICK Academy, and plan how you’ll keep learning"
   ],
   learn:[
    {h:"Before you write", body:[
      {lead:"An email to a professor is short, polite and easy to act on. Most of the work happens before you start typing."},
      {list:[
        "**Is email the right channel?** Check the syllabus and course site first: the answer may be there, and some courses want questions through the course system or at オフィスアワー.",
        "**Use your university email account.** It shows you are a student and is less likely to be filtered as spam. University guides recommend it.",
        "**Give time.** Professors are busy, so don’t expect an immediate answer, and don’t email the night before a deadline about that deadline.",
        "**Know your one request.** If you can’t say what you want in one sentence, you aren’t ready to write."
      ]},
      "The style is です・ます with keigo for the professor’s actions and いたします for yours (lessons 3 and 4). The general shape is the same as in English (see {{academic-emails}}); this lesson covers what is specifically Japanese."
    ]},
    {h:"The parts of an email", body:[
      {fig:'<svg viewBox="0 0 340 470"><rect class="d-panel" x="10" y="8" width="320" height="454" rx="10" stroke-width="2"/><rect class="d-lup" x="22" y="20" width="296" height="44" rx="6" stroke-width="2"/><text x="34" y="38">件名</text><text class="s" x="34" y="56">course · topic · your name</text><rect class="d-soft" x="22" y="74" width="296" height="40" rx="6" stroke-width="2"/><text x="34" y="92">宛名</text><text class="s" x="34" y="108">山田先生</text><rect class="d-soft" x="22" y="124" width="296" height="40" rx="6" stroke-width="2"/><text x="34" y="142">挨拶</text><text class="s" x="34" y="158">お世話になっております。</text><rect class="d-soft" x="22" y="174" width="296" height="40" rx="6" stroke-width="2"/><text x="34" y="192">名乗り</text><text class="s" x="34" y="208">faculty · year · name</text><rect class="d-sage" x="22" y="224" width="296" height="40" rx="6" stroke-width="2"/><text x="34" y="242">用件</text><text class="s" x="34" y="258">why you are writing, first</text><rect class="d-sage" x="22" y="274" width="296" height="60" rx="6" stroke-width="2"/><text x="34" y="292">詳細・お願い</text><text class="s" x="34" y="310">short details, bullet options</text><text class="s" x="34" y="326">and a clear request</text><rect class="d-soft" x="22" y="344" width="296" height="40" rx="6" stroke-width="2"/><text x="34" y="362">結び</text><text class="s" x="34" y="378">よろしくお願いいたします。</text><rect class="d-gold" x="22" y="394" width="296" height="56" rx="6" stroke-width="2"/><text x="34" y="412">署名</text><text class="s" x="34" y="430">name · faculty · year</text><text class="s" x="34" y="446">student number · email</text></svg>', alt:"An email drawn as stacked boxes, top to bottom: 件名 (course, topic, your name); 宛名 (山田先生); 挨拶 (お世話になっております。); 名乗り (faculty, year, name); 用件 (why you are writing, first); 詳細・お願い (short details, bullet options and a clear request); 結び (よろしくお願いいたします。); 署名 (name, faculty, year, student number, email).", cap:"The order is fixed enough that professors read an email faster when it follows it."},
      {table:[
        ["Part","What to write"],
        ["[[kenmei|[件名]{けんめい}]] (subject)","Course, topic and your name: 「【環境社会学】レポートの提出期限についてのご相談（文学部2年　アナ・シルバ）」"],
        ["[宛名]{あてな} (addressee)","「山田先生」, or more formally 「文学部　山田太郎先生」"],
        ["挨拶 (greeting)","If they know you: 「お世話になっております。」 First contact: 「はじめてご連絡いたします。」"],
        ["[名乗]{なの}り (who you are)","「文学部2年のアナ・シルバです。」 Add the course: 「月曜2限の環境社会学を受講しております。」"],
        ["[用件]{ようけん} (purpose)","First, in one sentence: 「レポートの提出期限について、ご相談したくご連絡いたしました。」"],
        ["詳細・お願い","Short details and one clear request"],
        ["結び (closing)","「お忙しいところ恐れ入りますが、どうぞよろしくお願いいたします。」"],
        ["[署名]{しょめい} (signature)","Name, university, faculty and year, [学籍番号]{がくせきばんごう} (student number), email address"]
      ]},
      "Address professors as 〇〇先生. 「山田教授様」 is a common slip: 教授 is already a title, and 様 on top doubles it, like 「先生様」. Some formal letters use 「山田教授」, but in student emails 先生 is the usual choice.",
      {tip:"Put the important things where they are seen: the topic in the 件名, the purpose in the first lines. A professor should be able to tell from the first three lines what you need and by when."}
    ]},
    {h:"A model email", body:[
      "Leila is a third-year student who wants to discuss her graduation thesis topic with her supervisor ([[shidou-kyouin|[指導教員]{しどうきょういん}]]). Read it once for the parts, then once for the keigo.",
      {ex:"件名：卒業論文のテーマについてのご相談（経済学部3年　レイラ・ハサン）\n\n山田先生\n\nお世話になっております。\n経済学部経済学科3年のレイラ・ハサンです。\n\n卒業論文のテーマについてご相談したく、ご連絡いたしました。\n\n現在、「地方都市における外国人住民の就労」をテーマに考えておりますが、調査の対象をどこまで絞るべきか迷っております。\nつきましては、15分ほどお時間をいただけないでしょうか。\n\n来週は、以下の時間であれば伺うことができます。\n・月曜日　13時～17時\n・水曜日　10時～12時\n\nご都合のよい日時をお知らせいただけますと幸いです。なお、オフィスアワーに伺うことも可能です。\n\nお忙しいところ恐れ入りますが、どうぞよろしくお願いいたします。\n\n――――――――――\nレイラ・ハサン\n〇〇大学　経済学部経済学科3年\n学籍番号：E2304512\nメール：e2304512@〇〇.ac.jp", mono:true, label:"Model email: asking for a meeting"},
      {list:[
        "**ご相談したく、ご連絡いたしました**: ご相談する is ご〜する (謙譲語Ⅰ), because the consulting goes towards the professor. ご連絡いたしました is ご〜いたす, which is both 謙譲語Ⅰ (the message goes to the professor) and 謙譲語Ⅱ (polite to her reader), as in lesson 3. 〜したく is a written way of saying 〜したいと思って (“because I would like to…”).",
        "**お時間をいただけないでしょうか**: a soft request with いただく (謙譲語Ⅰ), shaped as a question.",
        "**伺うことができます**: 伺う, because she would be visiting the professor.",
        "**オフィスアワーに伺うことも可能です**: offers another option without telling the professor what to do. (Avoid 「〜でもかまいません」 here: “that’s fine with me” sounds as if the student is granting permission.)",
        "**お知らせいただけますと幸いです**: “I would be grateful if you could let me know”, a standard soft request.",
        "**Options as bullets**: the professor can answer in one line."
      ]}
    ]},
    {h:"Replying and thanking", body:[
      "Professors often reply briefly and plainly. That is normal and not a sign they are annoyed. Keep your own reply polite, and reply promptly, ideally the same day.",
      {ex:"件名：Re: 卒業論文のテーマについてのご相談（経済学部3年　レイラ・ハサン）\n\nハサンさん\n\n連絡ありがとう。水曜日の11時に研究室で話しましょう。\n関連する先行研究を2、3本読んで、簡単なメモを持ってきてください。\n\n山田", mono:true, label:"The professor’s reply"},
      {ex:"件名：Re: 卒業論文のテーマについてのご相談（経済学部3年　レイラ・ハサン）\n\n山田先生\n\nご返信いただき、ありがとうございます。\n承知いたしました。水曜日の11時に研究室へ伺います。\n先行研究のメモを準備して、持参いたします。\n\nどうぞよろしくお願いいたします。\n\nレイラ・ハサン（経済学部3年）", mono:true, label:"Leila’s reply"},
      "After the meeting, a short thank-you the same day is appreciated and gives you a written record of what was agreed:",
      {ex:"件名：本日のご指導のお礼（経済学部3年　レイラ・ハサン）\n\n山田先生\n\n本日はお忙しいところ、お時間をいただき、ありがとうございました。\nご助言いただいたとおり、対象を一つの市に絞り、先行研究をさらに読み進めます。\n次回は、修正したテーマ案をお持ちいたします。\n\n今後ともご指導のほど、よろしくお願いいたします。\n\nレイラ・ハサン（経済学部3年）", mono:true, label:"A thank-you after the meeting"},
      {tip:"Keep the 件名 when you reply (with Re:), so the conversation stays in one thread. Start a new email with a new 件名 for a new topic."}
    ]},
    {h:"No reply? And other common slips", body:[
      "If there is no reply after a few working days and the matter isn’t urgent, a polite reminder is fine. Reply in the same thread, so the professor sees the original message, and don’t sound as if you are blaming them:",
      {ex:"山田先生\n\nお世話になっております。経済学部3年のレイラ・ハサンです。\n先日お送りした、卒業論文のテーマについてのご相談の件で、再度ご連絡いたしました。\nお忙しいところ申し訳ありませんが、ご確認いただけますと幸いです。", mono:true, label:"A polite reminder"},
      {table:[
        ["✗ Common slip","✓ Instead"],
        ["「山田教授様」","「山田先生」"],
        ["No 件名, or just 「質問」","Course, topic and your name"],
        ["No 名乗り: the professor can’t tell who you are","Faculty, year and name in the first lines"],
        ["「至急返信ください。」","Explain the timing politely: 「〇日までにご返信いただけますと幸いです。」"],
        ["「了解です」 in a reply","「承知いたしました」"],
        ["A file attached without a word","「〜を添付いたしましたので、ご確認ください。」"]
      ]},
      "If something is truly urgent (you are ill on the day of an exam, say), check the university’s official procedure first: it may require the office, not only the professor."
    ]},
    {h:"Visiting a professor: アポ, オフィスアワー and the 研究室", body:[
      "A professor’s office is called their [[kenkyuushitsu|[研究室]{けんきゅうしつ}]] (*kenkyūshitsu*). The same word also means their research group or lab. Many professors hold [[office-hours|オフィスアワー]], set times when students can drop in; otherwise, make an appointment (アポ, short for アポイントメント) by email, as Leila did. [研究室訪問]{けんきゅうしつほうもん} also has a special meaning: visiting a professor’s lab before applying to their graduate programme, which is common in Japan.",
      {ol:[
        "**Arrive on time**, with your notes and questions ready.",
        "**Knock and wait** for 「どうぞ」.",
        "**Enter with** 「失礼します。」",
        "**Say who you are and thank them**: 「経済学部3年のハサンです。本日はお時間をいただき、ありがとうございます。」",
        "**State your purpose**: 「卒業論文のテーマについて、ご相談に伺いました。」",
        "**Talk, and take notes.** Check your understanding: 「〜ということでよろしいでしょうか。」",
        "**Close on time**: 「お忙しいところ、ありがとうございました。」",
        "**Leave with** 「失礼いたします。」 (or 「失礼しました。」)"
      ]},
      "If the door is open and the professor is clearly busy, ask first: 「今、少しよろしいでしょうか。」 If they say now isn’t good, ask when would suit them: 「では、いつ頃でしたらよろしいでしょうか。」",
      {tip:"失礼します on entering literally means “I’m being rude (by interrupting you)”. It is the set phrase for coming into a teacher’s room, an office or an interview, and is not an apology for anything you did."}
    ]},
    {h:"The end of Academic Japanese, and of IT CHICK Academy", body:[
      "You have reached the last lesson of **Academic Japanese**: the styles and words of academic Japanese, reading papers and kanji-heavy text, writing reports and theses, and now presenting, discussing and using keigo with professors. Academic Japanese is hard even for people who grew up speaking Japanese. If you have worked through these units, you have done something genuinely difficult. Thank you.",
      "This is also the last unit of **IT CHICK Academy** as a whole. Everything you have studied stays here for you to come back to:",
      {table:[
        ["Part","What it covers"],
        ["💻 Digital Foundations","How computers, files, the internet and everyday software work, and staying safe"],
        ["🧩 Making with Code","The web, HTML, CSS and JavaScript, the command line, Git and Python"],
        ["📊 Data Literacy","Reading numbers and charts critically, tidy data, statistics, R and SQL, open data and ethics"],
        ["🔎 Research Skills","Finding, reading and citing research, methods, ethics and academic writing"],
        ["✍️ Academic Language (elective)","Academic English and Academic Japanese for study and research"],
        ["🌏 Social Science Primers (elective)","Sociology, International Relations and Migration Studies"],
        ["🧪 The Labs","Formula, Web, Python, Citation and Data Labs: try things for real, safely"]
      ]},
      "The Codex keeps every reference entry in one place, and the Labs are always open for practice. Skills fade without use and grow with it, so come back, redo an exercise, try a new Lab challenge, or open a unit you skipped.",
      "Wherever you go next (a degree, a job, a research project, or simply your own curiosity), keep learning, keep asking questions, and be kind to yourself when something is hard. Hard things are how you grow.",
      {key:"最後まで学んでくださり、ありがとうございました。これからも、どうぞ学び続けてください。 Thank you for learning with us all the way to the end. Please keep learning."}
    ]}
   ],
   try:[
    {id:"e1u8-l5-x1", type:"mcq", q:"Kenji needs to ask his ゼミ teacher whether he can submit a report late because of a family matter. Which 件名 is best?", options:[
      {t:"「レポート提出期限についてのご相談（法学部3年　佐藤健司）」", ok:true, why:"Topic and sender in one line: the teacher knows what it is and who it’s from before opening it."},
      {t:"「お願い」", why:"Too vague: it could be anything, and may be overlooked."},
      {t:"「至急！！レポート」", why:"Demanding and unclear. Urgency is explained politely in the body."},
      {t:"「佐藤です」", why:"Says who, but not what the email is about."}
    ]},
    {id:"e1u8-l5-x2", type:"order", q:"Put the parts of an email to a professor in order.", items:[
      {t:"件名：〜についてのご相談（〇〇学部2年　〇〇）", why:"The subject line comes first; it is what the professor sees in the inbox."},
      {t:"山田先生", why:"The 宛名 opens the body."},
      {t:"お世話になっております。", why:"The greeting follows the addressee."},
      {t:"〇〇学部2年の〇〇です。", why:"Then 名乗り: who you are."},
      {t:"〜についてご相談したく、ご連絡いたしました。", why:"The 用件 comes early, before the details."},
      {t:"お忙しいところ恐れ入りますが、よろしくお願いいたします。", why:"The closing phrase."},
      {t:"Name, faculty and year, student number, email", why:"The 署名 comes last."}
    ]},
    {id:"e1u8-l5-x3", type:"spot", q:"Tap every **problem** in Tomás’s email to a professor.", ask:"is a problem", parts:[
      {t:"山田教授様", flag:true, why:"教授 is already a title; adding 様 doubles it. Write 「山田先生」."},
      " ",
      {t:"お世話になっております。", flag:false, why:"The usual opening."},
      " ",
      {t:"文学部2年のトマス・ロペスです。", flag:false, why:"A clear 名乗り."},
      " ",
      {t:"レポートの書き方についてご相談したく、ご連絡いたしました。", flag:false, why:"A clear 用件, early, with correct keigo."},
      " ",
      {t:"至急返信ください。", flag:true, why:"Demanding. Explain the timing politely: 「〇日までにご返信いただけますと幸いです。」"},
      " ",
      {t:"先生がおっしゃられた参考文献も読みました。", flag:true, why:"二重敬語: おっしゃる + 〜れる. Use 「先生がおっしゃった」."},
      " ",
      {t:"よろしくお願いいたします。", flag:false, why:"The standard closing."}
    ]},
    {id:"e1u8-l5-x4", type:"mcq", q:"Professor Yamada replies: 「木曜の15時に研究室に来てください。」 What is the best reply from Priya?", options:[
      {t:"「ご返信いただき、ありがとうございます。承知いたしました。木曜日の15時に研究室へ伺います。」", ok:true, why:"Thanks, accepts with 承知いたしました, and confirms the time and place with 伺う."},
      {t:"「了解です。行きます。」", why:"Casual for a teacher; 「承知いたしました」 and 伺います are expected."},
      {t:"「ありがとうございます。木曜日の15時に研究室へいらっしゃいます。」", why:"いらっしゃる is 尊敬語: it raises Priya’s own going. Use 伺います."},
      {t:"No reply: she will just go on Thursday.", why:"A short confirmation tells the professor the time works. Without it, they can’t be sure."}
    ]},
    {id:"e1u8-l5-x5", type:"mcq", q:"Oluwaseun emailed his supervisor a week ago about a non-urgent question and has had no reply. What is the best next step?", options:[
      {t:"Reply in the same thread: 「先日お送りした〜の件で、再度ご連絡いたしました。お忙しいところ申し訳ありませんが、ご確認いただけますと幸いです。」", ok:true, why:"Polite, keeps the original message visible, and doesn’t blame the professor."},
      {t:"Send a new email: 「なぜ返信がないのですか。」", why:"Blaming and abrupt. Professors miss emails for many ordinary reasons."},
      {t:"Send the same email again every day until there is a reply", why:"Repeated messages are irritating and don’t explain anything."},
      {t:"Give up: no reply means the answer is no", why:"Emails get missed. A polite reminder is normal."}
    ]},
    {id:"e1u8-l5-x6", type:"order", q:"Put the steps of a visit to a professor’s 研究室 in order.", items:[
      {t:"Knock and wait for 「どうぞ」", why:"First, knock and wait to be invited in."},
      {t:"「失礼します。」 as you enter", why:"The set phrase for entering."},
      {t:"「経済学部3年の〇〇です。本日はお時間をいただき、ありがとうございます。」", why:"Name and thanks."},
      {t:"「卒業論文のテーマについて、ご相談に伺いました。」", why:"State your purpose."},
      {t:"Discuss and take notes, checking your understanding", why:"The main part of the visit."},
      {t:"「お忙しいところ、ありがとうございました。失礼いたします。」", why:"Thank them, and leave with 失礼いたします."}
    ]},
    {id:"e1u8-l5-x7", type:"match", q:"Match each moment of a visit to the phrase that fits it.", pairs:[
      ["Entering the room","「失礼します。」","The set phrase for coming into a teacher’s room."],
      ["The door is open but the professor looks busy","「今、少しよろしいでしょうか。」","Checks whether this is a good moment before you start."],
      ["Checking you understood advice","「〜ということでよろしいでしょうか。」","Repeats the point and asks for confirmation."],
      ["Thanking for their time at the end","「お忙しいところ、ありがとうございました。」","Recognises that their time is valuable."]
    ]}
   ],
   apply:{intro:"These tasks bring the whole unit together. Write in Japanese; you don’t need to send anything unless you want to.", tasks:[
    {t:"Draft an email to a professor", how:["Choose a real or imagined purpose: asking for a meeting, a question about a report, or a request for a reference.","Write the full email: 件名, 宛名, 挨拶, 名乗り, 用件, details and request, 結び and 署名.","Check every verb with lesson 4’s two questions (whose action? one form only?)."], write:"件名… 本文… 署名… What I checked…"},
    {t:"Write the reply and the thank-you", how:["Imagine the professor’s short reply suggesting a time.","Write your reply accepting it.","Write a thank-you email for after the meeting, mentioning one piece of advice you’ll act on."], write:"My reply… My thank-you…"},
    {t:"Prepare a 研究室 visit", how:["Write what you’ll say at each step: entering, name and thanks, purpose, checking understanding, closing.","List two or three questions to ask.","If you can, make a real visit or go to オフィスアワー, and note afterwards what went well."], write:"My phrases for each step… My questions… How it went…"},
    {t:"Look back and look ahead", how:["List the three most useful things you learned in Academic Japanese, and in IT CHICK Academy as a whole.","Choose one skill to keep practising, and how often.","Pick one unit or Lab to come back to next, and put a time for it in your calendar."], write:"Three useful things… The skill I’ll keep practising… What I’ll come back to, and when…"}
   ], proof:"A complete email to a professor, a reply and a thank-you, your phrases and questions for a 研究室 visit, and a short reflection with your plan for what to learn next."},
   read:[
     {book:"keigo", where:"第3章「敬語の具体的な使い方」: worked questions on choosing polite expressions in real situations", note:"Browse for situations like your own; after this unit, the reasoning will make sense."}
   ]
  }
  ],
  checkpoint:["e1u8-q02","e1u8-q06","e1u8-q11","e1u8-q14","e1u8-q19","e1u8-q23","e1u8-q26","e1u8-q30","e1u8-q33","e1u8-q37","e1u8-q41","e1u8-q44"],
  codex:[
   {id:"japanese-presentations", title:"Presentations in Japanese (発表)", aka:["happyō","ゼミ発表","学会発表","レジュメ","presenting in Japanese"], tags:["academic Japanese","speaking"],
    summary:"How academic presentations work in Japanese: kinds of 発表, the レジュメ handout, the stages of a talk, stock phrases, describing figures and the right speaking style.",
    levels:{
     starter:[
      "A [[happyou|発表]] (*happyō*) is an academic presentation. At Japanese universities you give them in a [[zemi|ゼミ]] (a small seminar class) and, later, perhaps at a [学会]{がっかい} (an academic conference).",
      "You usually hand out a [[rejume|レジュメ]] with it. Careful: in English a résumé is a CV, but in Japanese university life a レジュメ is a one- or two-page summary of your talk, with headings, bullet points, figures and references.",
      "The talk itself follows a fixed frame. You open with your name and topic (「本日は〜について発表いたします」), say how the talk is organised, go through background, method, results and discussion, and close with 「以上で発表を終わります。ご清聴ありがとうございました。」 Then come questions.",
      {key:"Clear stages and set phrases matter more than perfect Japanese."}
     ],
     builder:[
      {h:"Kinds of 発表"},
      {list:["**輪読**: presenting a chapter of a book the ゼミ reads together","**文献紹介**: summarising and commenting on one paper","**進捗報告**: reporting progress on your own research","**卒論中間発表**: an interim talk on your graduation thesis","**学会発表**: a conference talk, oral (口頭発表) or poster (ポスター発表), chaired by a 座長"]},
      {h:"The レジュメ"},
      "Header (course and session, presenter and year, title), numbered headings with short bullets, key quotations with page numbers, one to three 論点 for discussion, and 参考文献. Written in noun-ending lines (体言止め) or である体, not in full です・ます sentences. Size and length follow your teacher: ask for a past example.",
      {h:"Stock phrases"},
      {table:[["Stage","Phrase"],["Topic","「本日は、〜について発表いたします。」"],["Outline","「本発表の構成は、次のとおりです。」"],["Moving on","「次に、〜について説明します。」"],["Pointing","「レジュメの2ページをご覧ください。」"],["Closing","「以上で発表を終わります。ご清聴ありがとうございました。」"]]},
      {h:"Figures"},
      "Say what a figure shows (「図1は、〜を示したものです」), explain the axes (横軸・縦軸), then what it shows clearly (「〜ことがわかります」), and only then your interpretation (「〜と考えられます」)."
     ],
     pro:[
      {h:"Register"},
      "The spoken talk is in です・ます with light keigo: いたします for your own acts, ご覧ください and ご説明します towards the audience. 「発表させていただきます」 is common and accepted; 「発表いたします」 is simpler, and stacking させていただく on every verb sounds heavy. Avoid 話し言葉 markers (えっと, なんか, めっちゃ, sentence-initial で、) and use pauses instead of fillers.",
      {h:"Delivery"},
      "Many teachers advise against reading the レジュメ or a full script aloud, since listeners can read the handout themselves and a read text loses contact with them. One university guide to ゼミ presentations also asks presenters to keep strictly to the time set (for example 30 minutes plus 10 for questions), to bring enough copies, and to tell listeners which part of the レジュメ they are on. Rehearse with a timer; conferences are stricter than ゼミ, and some ring a bell as a warning.",
      {h:"Field and institution differences"},
      "Some ゼミ use B4 paper, slide decks instead of handouts, or a fixed template; some expect 論点 on every レジュメ. Conference rules (slide formats, abstract 予稿 deadlines, timing) are in each conference’s call for papers. When in doubt, copy the local model and ask a 先輩.",
      {h:"Hedging in speech"},
      "Distinguish observation (〜ことがわかります) from interpretation (〜と考えられます, 〜可能性があります). Over-strong claims in the talk invite hard questions; see {{hedging-japanese}}."
     ]
    },
    related:["zemi-discussion","keigo-system","academic-presentations","research-presentations","japanese-paper-structure"],
    read:[{book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”"}],
    sources:[{t:"（ゼミ）発表の仕方：レジュメを作る (Sophia University faculty page, PDF)", url:"https://pweb.cc.sophia.ac.jp/s-yuga/gakubu/resume12.pdf"}],
    checked:"2026-11"},

   {id:"zemi-discussion", title:"Q&A and ゼミ discussion in Japanese", aka:["質疑応答","shitsugi ōtō","ゼミでの議論","クッション言葉","disagreeing politely in Japanese"], tags:["academic Japanese","speaking"],
    summary:"Answering and asking questions after a 発表, and taking part in ゼミ discussion: the four-move answer, saying you don’t know, クッション言葉 and the 確かに〜が pattern.",
    levels:{
     starter:[
      "After a 発表 comes [[shitsugi-outou|質疑応答]] (*shitsugi ōtō*), questions and answers. Questions usually mean people listened and are interested, not that you did badly.",
      "A good answer has four moves: thank (「ご質問ありがとうございます」), check the question (「〜ということでしょうか」), answer with the conclusion first, then check you answered (「以上ですが、よろしいでしょうか」).",
      "If you don’t know, say so politely: 「勉強不足で申し訳ありませんが、その点についてはまだ調べておりません。確認して、後日ご報告いたします。」 Never invent an answer.",
      "In discussion, soften disagreement with the pattern 「確かに〜。ただ、〜ではないでしょうか。」 and with [[kushion-kotoba|クッション言葉]] such as 恐れ入りますが.",
      {key:"Thank, check, answer clearly, and be honest about what you don’t know."}
     ],
     builder:[
      {h:"Answering"},
      {table:[["Need","Phrase"],["A moment to think","「少し考えさせてください。」"],["Didn’t catch it","「恐れ入りますが、もう一度おっしゃっていただけますか。」"],["A reasoned guess","「推測になりますが、〜ではないかと考えています。」"],["A point beyond your study","「今後の課題とさせていただきます。」"],["Accepting a 指摘","「ご指摘のとおりです。今後、検討いたします。」"]]},
      "The first two moves are not just politeness. Questions in a second language are easy to mishear, and questioners sometimes ask two things at once, so restating the question protects you from answering the wrong one. Thanking also gives you a few seconds to think. When a 指摘 (a point someone raises) is fair, accept it; when you disagree, thank first and then explain the choice you made.",
      {h:"Asking"},
      "At a conference: affiliation and name, thanks (「貴重なご発表、ありがとうございました」), the number of points (「一点、質問させてください」), then one specific question tied to a place in the talk.",
      {h:"Discussion moves"},
      {table:[["Move","Phrase"],["Agree","「〇〇さんの意見に賛成です。というのも、〜からです。」"],["Disagree","「確かに〜という点はあると思います。ただ、〜ではないでしょうか。」"],["Add","「今の点に一つ補足すると、〜」"],["Build on","「先ほど〇〇さんが指摘されたように、〜」"],["Clarify","「〜とは、具体的にはどういうことでしょうか。」"]]}
     ],
     pro:[
      {h:"Why the concession pattern works"},
      "確かに concedes something real, ただ or 〜が turns, and 〜ではないでしょうか states your view in question form. It keeps the other person’s face and leaves room for a reply, which suits discussion cultures that value harmony. But it is still a disagreement, and listeners hear it as one: don’t bury your point under so much softening that it disappears.",
      {h:"相槌 and silence"},
      "[[aizuchi|相槌]] (はい, ええ, そうですね, nods) show you are following, not necessarily agreeing. With teachers, some etiquette guides advise against a bare なるほど, which can sound evaluative. Silence while people think is normal; some ゼミ wait for the teacher to call on people (指名), others are lively debates.",
      {h:"Criticism as help"},
      "University guidance on ゼミ presentations frames criticism as something that helps the presenter develop, and questions as ways to widen the presenter’s view rather than attacks. Thank first even when you disagree, then explain your choice: 「ご指摘ありがとうございます。ただ、本研究では〜という理由で、〜としました。」",
      {h:"Honesty"},
      "「今後の課題とさせていただきます」 is a legitimate answer for points outside your study, not a way to dodge every hard question. Inventing a source or a figure is a research-integrity problem, not just a language one."
     ]
    },
    related:["japanese-presentations","keigo-system","seminar-discussion","academic-presentations"],
    sources:[{t:"（ゼミ）発表の仕方：レジュメを作る (Sophia University faculty page, PDF)", url:"https://pweb.cc.sophia.ac.jp/s-yuga/gakubu/resume12.pdf"}],
    checked:"2026-11"},

   {id:"keigo-system", title:"Keigo: the five categories (敬語の指針, 2007)", aka:["keigo","敬語","尊敬語","謙譲語","丁重語","丁寧語","美化語","honorific Japanese"], tags:["academic Japanese","keigo"],
    summary:"How Japanese honorific language works, following the five categories of the 2007 official guidelines: 尊敬語, 謙譲語Ⅰ, 謙譲語Ⅱ (丁重語), 丁寧語 and 美化語, with the key verbs.",
    levels:{
     starter:[
      "[[keigo|敬語]] (*keigo*) is the way Japanese shows respect by changing verbs and nouns, not only by choosing polite phrases. The professor 「おっしゃる」; you 「申し上げる」.",
      "Schools traditionally teach three kinds: [[sonkeigo|尊敬語]] (raising the other person’s actions), [[kenjougo|謙譲語]] (humbling your own) and [[teineigo|丁寧語]] (です・ます). The 2007 official guidelines, [[keigo-no-shishin|敬語の指針]], describe five, by splitting 謙譲語 into Ⅰ and Ⅱ and separating [[bikago|美化語]] from 丁寧語.",
      "The quick rule: **whose action is it?** The professor’s: 尊敬語 (いらっしゃる, おっしゃる, ご覧になる). Yours: 謙譲語 (伺う, 申す, 拝見する).",
      {key:"Keigo is hard for Japanese speakers too. Clear です・ます with a few correct keigo verbs is a fine place to start."}
     ],
     builder:[
      {h:"The five categories"},
      {table:[["Category","Function","Examples"],["尊敬語","Raises the person who acts or owns","いらっしゃる、おっしゃる、お読みになる、先生のご研究"],["謙譲語Ⅰ","Raises the person your action goes towards","伺う、申し上げる、拝見する、お送りする"],["謙譲語Ⅱ（丁重語）","Your action, said politely to the listener","参ります、申します、いたします、おります"],["丁寧語","Polite to the listener","です、ます、ございます"],["美化語","Refines the word itself","お茶、ご飯"]]},
      {h:"Patterns"},
      "尊敬語: special verbs, お〜になる / ご〜になる, 〜れる／られる, お／ご〜ください. 謙譲語Ⅰ: special verbs, お〜する / ご〜する, お／ご〜いただく. 謙譲語Ⅱ: 参る, 申す, いたす, おる, 存じる, nearly always with ます. お／ご〜いたす (ご連絡いたします) is both Ⅰ and Ⅱ.",
      {h:"Ⅰ or Ⅱ?"},
      "伺う (Ⅰ) needs a respected person on the receiving end: 「先生の研究室に伺います」. 参る (Ⅱ) only needs a listener to be polite to: 「弟のところに参ります」, 「図書館に参ります」, even 「電車が参ります」."
     ],
     pro:[
      {h:"The guidelines’ definitions"},
      "The guidelines define 謙譲語Ⅰ as describing an action or thing that goes from your side towards the other side or a third person, raising the person it goes towards; 謙譲語Ⅱ as describing your own side’s actions politely to the listener or reader; 丁寧語 as speaking politely to the listener; and 美化語 as describing things in a refined way. They present keigo as grounded in mutual respect and chosen by the speaker to suit the situation.",
      {h:"The three jobs of お／ご"},
      "先生のお名前 (尊敬語: theirs), 先生へのお手紙 (謙譲語Ⅰ: yours, going to them), お茶 (美化語: nobody raised). Usually お with native words and ご with Sino-Japanese words, with exceptions such as お電話 and お時間.",
      {h:"Choosing between 尊敬語 forms"},
      "Special verbs and お〜になる are the most respectful. 〜れる／られる is lighter and common in speech, but can be confused with passive or potential forms (来られる). Cited authors in papers get no keigo: 「山田（2020）は〜と述べている」.",
      {h:"Labels versus use"},
      "Many textbooks still teach three categories; the five are a finer description, not a different system. Usage changes, and the guidelines themselves treat many points as matters of judgement. Read them for the reasoning: they are written for the general public.",
      {h:"Key verbs"},
      {table:[["Plain","尊敬語","謙譲語"],["いる・行く・来る","いらっしゃる","おります・参ります; 伺う (visit)"],["言う","おっしゃる","申します・申し上げる"],["見る","ご覧になる","拝見する"],["もらう・くれる","くださる","いただく"],["知っている","ご存じだ","存じております・存じ上げる"]]}
     ]
    },
    related:["keigo-mistakes","emailing-japanese-professors","desu-masu-and-dearu","zemi-discussion"],
    read:[{book:"keigo", where:"第2章「敬語の仕組み」"}],
    sources:[
      {t:"文化審議会答申『敬語の指針』(2007, PDF, bunka.go.jp)", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/sokai/sokai_6/pdf/keigo_tousin.pdf"},
      {t:"川岸克己 (2009)「敬語体系における相似的階層構造」安田女子大学紀要 37 (quotes the guidelines’ definitions)", url:"https://yasuda-u.repo.nii.ac.jp/record/340/files/02896494037001.pdf"},
      {t:"野呂健一「敬語に関する規範意識の問題点」高田短期大学 (quotes the guidelines on 二重敬語 and させていただく)", url:"https://www.takada-jc.ac.jp/files/activity/career/kiyou3/4.pdf"}
    ],
    checked:"2026-11"},

   {id:"keigo-mistakes", title:"Common keigo mistakes", aka:["二重敬語","nijū keigo","double keigo","ウチ・ソト","させていただく","敬語の間違い"], tags:["academic Japanese","keigo"],
    summary:"The keigo mistakes students make most: forms in the wrong direction, 二重敬語, over-used させていただく, set phrases teachers notice, and ウチ・ソト.",
    levels:{
     starter:[
      "Most keigo mistakes are correct forms pointed at the wrong person. 「先生が申したように」 uses 申す, which is for your own saying; the professor needs 「おっしゃったように」. 「先生、拝見してください」 should be 「ご覧ください」.",
      "The second big one is [[nijuu-keigo|二重敬語]]: the same kind of keigo twice in one word, such as おっしゃられる (おっしゃる + 〜れる). One form is enough: おっしゃる.",
      "Third, [[uchi-soto|ウチ・ソト]]: when you talk to an outsider, people on your own side (family, colleagues, even your boss) don’t get 尊敬語 or titles: 「母が申しておりました」, 「田中は席を外しております」.",
      {key:"Ask two questions: whose action is it, and is one form enough?"}
     ],
     builder:[
      {h:"Wrong direction"},
      {table:[["✗","✓"],["先生が申したように","先生がおっしゃったように"],["（先生に）拝見してください","ご覧ください"],["（訪問者に）受付で伺ってください","受付でお尋ねください"],["先生は研究室におりますか","いらっしゃいますか"],["先生も参られますか","いらっしゃいますか"],["学外からもご利用できます","ご利用になれます"]]},
      "Each of these uses a real keigo form, but for the wrong person: 申す, 拝見する, 伺う, おる and 参る are all for your own side’s actions. ご利用できます is a quieter case: ご〜できる is the potential of ご〜する (謙譲語Ⅰ), so for someone else’s action the 尊敬語 ご利用になれます (or plain 利用できます) is used.",
      {h:"二重敬語, and accepted exceptions"},
      "Avoid: おっしゃられる, お読みになられる, ご覧になられる, お帰りになられる. Accepted by custom, according to the guidelines: お召し上がりになる, お見えになる; お伺いする, お伺いいたす, お伺い申し上げる. Linking two correct forms with て (お読みになっていらっしゃる, 敬語連結) is generally acceptable, if heavy.",
      {h:"させていただく"},
      "Fits when you act with the other person’s permission and benefit from it (「録音させていただいてもよろしいでしょうか」). Over-used elsewhere (「在籍させていただいております」 → 「在籍しております」). With godan verbs, the form is 読ませていただく, not 読まさせていただく (さ入れ言葉)."
     ],
     pro:[
      {h:"Set phrases: widely advised, not grammar"},
      {table:[["Often advised against","Usually advised"],["ご苦労さまです","お疲れさまです"],["了解しました","承知しました・承知いたしました"],["参考になりました","勉強になりました"],["すみません (apology)","申し訳ありません・申し訳ございません"]]},
      "These reflect widely held etiquette expectations, especially in business and university guides, not rules of grammar, and some (such as the view that 了解 is impolite) are fairly recent and disputed. Follow them with teachers because many people hold them, and don’t judge others harshly for using the alternatives.",
      {h:"ウチ・ソト at university"},
      "Business practice is strict: to an outsider, your own manager is 田中, with 謙譲語. Universities are looser: many students still say 〇〇先生 about their own supervisor to a professor from elsewhere, often as 「指導教員の山田先生」, without heavy 尊敬語. Office staff may follow business usage. Ask what is usual in your 研究室.",
      {h:"Too much keigo"},
      "Over-polite speech can create distance or sound sarcastic (慇懃無礼). In a friendly ゼミ, です・ます with さん is enough among students. With professors, keep keigo even if they speak plainly to you.",
      {h:"Recovering"},
      "If you notice a slip while speaking, carry on. In writing, proofread verbs once for direction and doubling. Accept corrections with 「ご指摘ありがとうございます。気をつけます。」"
     ]
    },
    related:["keigo-system","emailing-japanese-professors","visiting-a-professor"],
    read:[{book:"keigo", where:"第2章「敬語の仕組み」 (notes on 二重敬語 and 敬語連結) and 第3章「敬語の具体的な使い方」"}],
    sources:[{t:"文化審議会答申『敬語の指針』(2007, PDF, bunka.go.jp)", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/sokai/sokai_6/pdf/keigo_tousin.pdf"},
      {t:"野呂健一「敬語に関する規範意識の問題点」高田短期大学 (quotes the guidelines on 二重敬語 and させていただく)", url:"https://www.takada-jc.ac.jp/files/activity/career/kiyou3/4.pdf"}],
    checked:"2026-11"},

   {id:"emailing-japanese-professors", title:"Emailing a professor in Japanese", aka:["教員へのメール","先生へのメール","件名","メールの書き方"], tags:["academic Japanese","writing","email"],
    summary:"The parts of an email to a Japanese professor (件名, 宛名, 挨拶, 名乗り, 用件, お願い, 結び, 署名), a model email and reply, thank-yous, reminders and common slips.",
    levels:{
     starter:[
      "An email to a professor in Japanese follows a fixed order: a specific [[kenmei|件名]] (subject), the 宛名 「〇〇先生」, a greeting (「お世話になっております」), who you are (faculty, year, name), why you are writing, the details and your request, a closing (「よろしくお願いいたします」) and a signature with your student number.",
      "Write 「山田先生」, not 「山田教授様」: 教授 is already a title, and 様 on top doubles it.",
      "Say why you are writing in the first lines, keep it short, and make it easy to answer, for example by offering two or three times as bullets.",
      {key:"Specific 件名, clear 名乗り, purpose first, one clear request, full 署名."}
     ],
     builder:[
      {h:"Model phrases"},
      {table:[["Part","Phrase"],["件名","「【環境社会学】レポートの提出期限についてのご相談（文学部2年　アナ・シルバ）」"],["First contact","「はじめてご連絡いたします。」"],["名乗り","「文学部2年のアナ・シルバです。」"],["用件","「〜について、ご相談したくご連絡いたしました。」"],["Request","「ご都合のよい日時をお知らせいただけますと幸いです。」"],["結び","「お忙しいところ恐れ入りますが、どうぞよろしくお願いいたします。」"]]},
      "Keep the body short: a professor should be able to see from the first three lines who you are, what you need and by when. Offer choices as bullets, so the reply can be one line. Use 謙譲語 for your own actions (ご相談したく、ご連絡いたしました; 伺います), 尊敬語 for their things (ご都合), and お〜いただく when you ask them to do something (お知らせいただけますと幸いです), which presents their action as a kindness you receive.",
      {h:"Replies and thanks"},
      "Professors often answer briefly and plainly; that is normal. Reply promptly: 「ご返信いただき、ありがとうございます。承知いたしました。水曜日の11時に研究室へ伺います。」 After a meeting, a same-day thank-you (「本日はお忙しいところ、お時間をいただき、ありがとうございました」) also records what you agreed.",
      {h:"Reminders"},
      "After a few working days without a reply to a non-urgent email, write in the same thread: 「先日お送りした〜の件で、再度ご連絡いたしました。お忙しいところ申し訳ありませんが、ご確認いただけますと幸いです。」"
     ],
     pro:[
      {h:"What university guides stress"},
      "Japanese university guides for students agree on the core: always write a specific subject line (one guide warns that emails without a subject may go unread and be deleted, and gives 「〇〇工学第一のレポートについての質問」 as a model); use your university account; introduce yourself before your question; and sign with university, faculty, year, student number and email. Some suggest tags such as 【質問】 and putting your name and student number in the subject.",
      {h:"Slips that cost goodwill"},
      {list:["No 件名 or a vague one (「質問」, 「お願い」)","No 名乗り, so the professor can’t tell who you are","Demands (「至急返信ください」) instead of a polite deadline (「〇日までにご返信いただけますと幸いです」)","Casual acceptance (「了解です」) instead of 「承知いたしました」","Attachments with no mention: 「〜を添付いたしましたので、ご確認ください。」","二重敬語 such as 先生がおっしゃられた"]},
      {h:"Channel and procedure"},
      "Check whether the course wants questions through its learning system or at オフィスアワー. For absences, deadlines and exams, the university may have an official procedure through the office; an email to the professor may not be enough. For the English-language side of emails to lecturers, see {{academic-emails}}."
     ]
    },
    related:["visiting-a-professor","keigo-system","keigo-mistakes","academic-emails"],
    sources:[
      {t:"Tokyo Tech Study Tips vol. 6「東工大共通メールシステムの使い方・メールの書き方」(2021, PDF)", url:"https://www.titech.ac.jp/student-support/pdf/studytipsvol6-3.pdf"},
      {t:"Seirei Christopher University: email rules for students (PDF)", url:"https://www.seirei.ac.jp/media/20211116_email_rules.pdf"}
    ],
    checked:"2026-11"},

   {id:"visiting-a-professor", title:"Visiting a professor’s 研究室", aka:["研究室訪問","オフィスアワー","アポ","kenkyūshitsu","office visit in Japan"], tags:["academic Japanese","speaking"],
    summary:"Making an appointment, using オフィスアワー, and visiting a professor’s 研究室: the steps and phrases at the door, during the talk and when leaving.",
    levels:{
     starter:[
      "A professor’s office is their [[kenkyuushitsu|研究室]] (*kenkyūshitsu*), a word that also means their research group or lab. Some professors keep [[office-hours|オフィスアワー]] (set times for drop-in visits); otherwise you make an appointment (アポ) by email.",
      "At the door: knock, wait for 「どうぞ」, and enter with 「失礼します」. Say your name and thank them for their time, state your purpose, and finish on time with 「お忙しいところ、ありがとうございました。失礼いたします。」",
      {key:"Book, prepare, be on time, and use the set phrases at the door."}
     ],
     builder:[
      {h:"The visit, step by step"},
      {ol:["Arrive on time with notes and specific questions","Knock and wait for 「どうぞ」","「失礼します。」","「経済学部3年のハサンです。本日はお時間をいただき、ありがとうございます。」","「〜について、ご相談に伺いました。」","Talk, take notes, and check: 「〜ということでよろしいでしょうか。」","「お忙しいところ、ありがとうございました。」","「失礼いたします。」 as you leave"]},
      {h:"If the moment isn’t right"},
      "If the door is open but the professor looks busy: 「今、少しよろしいでしょうか。」 If now isn’t good: 「では、いつ頃でしたらよろしいでしょうか。」",
      "失礼します on entering is a set phrase (literally, “I’m intruding”), used for a teacher’s room, an office or an interview, not an apology."
     ],
     pro:[
      {h:"研究室訪問 before graduate school"},
      "In Japan, 研究室訪問 also means visiting a professor’s lab before applying to their graduate programme, to discuss your research plan and see whether the lab suits you. It is common and often expected; arrange it by a careful first-contact email (「はじめてご連絡いたします」) with your research interests and a short plan. For graduate study in general, see {{supervision}} and {{graduate-degrees}}.",
      {h:"Supervisors and labs"},
      "Your [[shidou-kyouin|指導教員]] (supervisor) is your main contact for thesis work. In science and engineering, daily life happens in the 研究室, where 先輩 can explain local customs: how to book the professor, how to address them, what to bring.",
      {h:"Follow-up"},
      "A short thank-you email on the same day (see {{emailing-japanese-professors}}) records what you agreed and what you’ll do next. If you promised to bring something next time, say so: 「次回は、修正したテーマ案をお持ちいたします。」",
      {h:"Variation"},
      "Office hours, booking systems and door habits vary by university and professor. Some prefer online meetings; some keep doors open. Follow the professor’s lead and what the 研究室 does."
     ]
    },
    related:["emailing-japanese-professors","keigo-system","office-hours","supervision"],
    sources:[{t:"Tokyo Tech Study Tips vol. 6「東工大共通メールシステムの使い方・メールの書き方」(2021, PDF)", url:"https://www.titech.ac.jp/student-support/pdf/studytipsvol6-3.pdf"}],
    checked:"2026-11"},

   {id:"academic-japanese-next-steps", title:"Academic Japanese: keeping going", aka:["after Academic Japanese","IT CHICK Academy send-off","keep learning"], tags:["academic Japanese","study skills"],
    summary:"A map of what Academic Japanese covered, how to keep practising, and where to go next in IT CHICK Academy.",
    levels:{
     starter:[
      "Academic Japanese covered four areas: the styles and words of academic Japanese ({{desu-masu-and-dearu}}, {{written-vs-spoken-japanese}}), reading papers ({{reading-japanese-papers}}), writing reports ({{japanese-report-structure}}), and speaking with professors and in ゼミ ({{japanese-presentations}}, {{keigo-system}}).",
      "Keep going little and often: read one short Japanese article a week, collect useful phrases, and use them in your next email, 発表 or report.",
      {key:"Academic Japanese is hard even for people who grew up with Japanese. Progress, not perfection."}
     ],
     builder:[
      {h:"A weekly practice plan"},
      {list:["**Read**: one article from J-STAGE or a 新書 chapter; write a three-line 要約 in である体","**Collect**: five 漢語 or 接続詞 in a phrase notebook","**Write**: one paragraph in である体, then check it for 話し言葉","**Speak**: a 2-minute summary aloud, recorded privately","**Keigo**: one real email or message, checked for direction and 二重敬語"]},
      {h:"Where else to go in IT CHICK Academy"},
      "Research Skills for finding, reading and citing research in any language; Academic English if you also study in English; Data Literacy for statistics and charts; and the Labs for hands-on practice."
     ],
     pro:[
      {h:"Use the real thing"},
      "Your best materials are your own: your teachers’ emails, your ゼミ’s past レジュメ, your field’s journals and theses. Copy their structures, not their sentences, and cite what you use (see {{japanese-plagiarism-ai}}).",
      {h:"Get feedback"},
      "Many universities have a writing centre or learning support office that reads drafts in Japanese. A 先輩 or a classmate can check keigo in an email. Teachers usually welcome a short, specific question more than a long, general one.",
      {h:"Be kind to yourself"},
      "Keigo and academic style are learned over years, by everyone. A clear message with one small slip is better than no message at all, and every 発表 you give makes the next one easier."
     ]
    },
    related:["keigo-system","japanese-presentations","emailing-japanese-professors","academic-japanese"],
    checked:"2026-11"}
  ],
  terms:[
   {id:"happyou", term:"発表 (happyō)", def:"An academic presentation, such as a talk in a ゼミ or at a conference (学会発表). Usually given with a レジュメ handout and followed by 質疑応答.", codex:"japanese-presentations"},
   {id:"rejume", term:"レジュメ (rejume)", def:"At Japanese universities, the one- or two-page handout that summarises a presentation: headings, bullet points, figures, discussion points and references. Not a CV, which is a 履歴書.", codex:"japanese-presentations"},
   {id:"zemi", term:"ゼミ (zemi)", def:"A small seminar class led by one teacher, where students present and discuss; in many programmes students stay in one ゼミ until their graduation thesis. From the German “Seminar”.", codex:"japanese-presentations"},
   {id:"shikai", term:"司会 (shikai)", def:"The person who chairs or hosts a session: introduces speakers, keeps time and runs the questions. At a conference this role is called 座長 (zachō).", codex:"zemi-discussion"},
   {id:"shitsugi-outou", term:"質疑応答 (shitsugi ōtō)", def:"Questions and answers: the part after a 発表 when the audience asks questions or makes comments and the presenter answers.", codex:"zemi-discussion"},
   {id:"kushion-kotoba", term:"クッション言葉 (kusshon kotoba)", def:"“Cushion words”: short phrases such as 恐れ入りますが or 差し支えなければ, placed before a request, question or disagreement to soften it.", codex:"zemi-discussion"},
   {id:"aizuchi", term:"相槌 (aizuchi)", def:"Small listener signals such as はい, ええ, そうですね and nods, showing that you are following. They don’t necessarily mean you agree.", codex:"zemi-discussion"},
   {id:"keigo", term:"Keigo (敬語)", def:"Japanese honorific language: ways of showing respect and consideration by changing verbs, nouns and set phrases depending on who acts and who you are speaking to.", codex:"keigo-system"},
   {id:"keigo-no-shishin", term:"敬語の指針 (Guidelines on Keigo)", def:"The official guidelines on keigo published in 2007 by Japan’s Council for Cultural Affairs (文化審議会). They describe five categories of keigo.", codex:"keigo-system"},
   {id:"sonkeigo", term:"尊敬語 (sonkeigo)", def:"Respectful language: forms that raise the person who does an action or owns a thing, such as いらっしゃる, おっしゃる, お読みになる and 先生のご研究.", codex:"keigo-system"},
   {id:"kenjougo", term:"謙譲語 (kenjōgo)", def:"Humble language for your own (or your side’s) actions. The 2007 guidelines divide it into 謙譲語Ⅰ, which raises the person your action goes towards (伺う, 拝見する, お送りする), and 謙譲語Ⅱ (丁重語).", codex:"keigo-system"},
   {id:"teichougo", term:"謙譲語Ⅱ / 丁重語 (teichōgo)", def:"Forms that describe your own actions politely to the person you are talking to, without raising anyone in the sentence: 参ります, 申します, いたします, おります.", codex:"keigo-system"},
   {id:"teineigo", term:"丁寧語 (teineigo)", def:"Polite language addressed to the listener: です, ます and the more formal ございます.", codex:"keigo-system"},
   {id:"bikago", term:"美化語 (bikago)", def:"Words made more refined with お or ご, such as お茶 and ご飯, without raising anyone. One of the five categories in the 2007 guidelines.", codex:"keigo-system"},
   {id:"nijuu-keigo", term:"二重敬語 (nijū keigo)", def:"Using the same kind of keigo twice in one word, such as おっしゃられる (おっしゃる + 〜れる). Generally considered inappropriate, though a few forms such as お召し上がりになる are accepted by custom.", codex:"keigo-mistakes"},
   {id:"uchi-soto", term:"ウチ・ソト (uchi/soto)", def:"Inside and outside groups. When speaking to an outsider, you treat people on your own side (family, colleagues, your boss) as part of “you”: no 尊敬語 or titles for them.", codex:"keigo-mistakes"},
   {id:"kenmei", term:"件名 (kenmei)", def:"The subject line of an email. To a professor, it should name the topic and usually the course and your name.", codex:"emailing-japanese-professors"},
   {id:"kenkyuushitsu", term:"研究室 (kenkyūshitsu)", def:"A professor’s office, and also their research group or lab. 研究室訪問 means visiting it, including visits before applying to a graduate programme.", codex:"visiting-a-professor"},
   {id:"shidou-kyouin", term:"指導教員 (shidō kyōin)", def:"Your academic supervisor: the teacher who guides your ゼミ work, graduation thesis or graduate research.", codex:"visiting-a-professor"}
  ],
  bank:[
   /* ---------- Lesson 1 ---------- */
   {id:"e1u8-q01", lesson:"e1u8-l1", level:1, q:"At a Japanese university, what is a レジュメ?", options:[
     {t:"A handout that summarises a presentation", ok:true, why:"In Japanese academic life, a レジュメ is the summary handout for a 発表."},
     {t:"A CV for job applications", why:"That is the English meaning of résumé; in Japanese a CV is a 履歴書."},
     {t:"The final version of a graduation thesis", why:"That is the 卒業論文 itself."},
     {t:"An attendance sheet", why:"A レジュメ is about the content of a talk, not attendance."}
   ]},
   {id:"e1u8-q02", lesson:"e1u8-l1", level:2, q:"Which line fits best on a written レジュメ, following the usual convention?", options:[
     {t:"・学年が上がるにつれて、アルバイト時間は減少", ok:true, why:"A short bullet ending on a noun (体言止め): typical written レジュメ style."},
     {t:"「次に、調査の方法について説明します。」", why:"A spoken signpost for the talk, not a line for the handout."},
     {t:"「こちらの図をご覧ください。」", why:"You say this aloud while presenting."},
     {t:"「えっと、結果なんですけど…」", why:"Casual speech; it belongs neither on the レジュメ nor in the talk."}
   ]},
   {id:"e1u8-q03", lesson:"e1u8-l1", level:1, q:"Which phrase is the standard way to close a 発表?", options:[
     {t:"「以上で発表を終わります。ご清聴ありがとうございました。」", ok:true, why:"The set closing phrase, thanking the audience for listening."},
     {t:"「じゃあ、これで終わりです。」", why:"Casual じゃあ is too informal for a 発表."},
     {t:"「本日は〜について発表いたします。」", why:"That is the opening, not the closing."},
     {t:"「本発表の構成は、次のとおりです。」", why:"That introduces the outline near the start."}
   ]},
   {id:"e1u8-q04", lesson:"e1u8-l1", level:2, q:"Lucía shows a graph and wants to give her interpretation, with suitable caution. Which sentence is best?", options:[
     {t:"「これは、就職活動の影響によるものと考えられます。」", ok:true, why:"〜と考えられます marks an interpretation with suitable caution."},
     {t:"「これは、就職活動の影響です。」", why:"States an interpretation as fact; a questioner may challenge it."},
     {t:"「これは、絶対に就職活動のせいです。」", why:"絶対に and せい are too strong and too casual for a 発表."},
     {t:"「図1は、学年別のアルバイト時間を示したものです。」", why:"A good sentence, but it describes the figure, not her interpretation."}
   ]},
   {id:"e1u8-q05", lesson:"e1u8-l1", level:1, q:"In describing a graph, what does 縦軸 mean?", options:[
     {t:"The vertical axis (y-axis)", ok:true, why:"縦 means vertical: 縦軸 (たてじく) is the y-axis."},
     {t:"The horizontal axis (x-axis)", why:"That is 横軸 (よこじく)."},
     {t:"The title of the graph", why:"A title is タイトル or 題."},
     {t:"The legend", why:"A legend is 凡例 (はんれい)."}
   ]},
   {id:"e1u8-q06", lesson:"e1u8-l1", level:3, q:"Mei’s practice talk starts: 「えっと、じゃあ始めます。で、テーマはバイトです。」 What is the best advice?", options:[
     {t:"Use the set opening: 「それでは、発表を始めます。〇〇学部〇年の〇〇です。本日は、大学生のアルバイトについて発表いたします。」", ok:true, why:"It replaces fillers and casual words with the expected opening: start, name, topic."},
     {t:"Add more keigo to every sentence", why:"The problem is casual speech and a missing frame, not too little keigo."},
     {t:"Switch to である体 to sound academic", why:"である is the written style; a spoken 発表 uses です・ます."},
     {t:"Keep it: a relaxed style makes the audience comfortable", why:"In a ゼミ or 学会, えっと, じゃあ, で and バイト sound unprepared."}
   ]},
   {id:"e1u8-q07", lesson:"e1u8-l1", level:1, q:"What is 輪読?", options:[
     {t:"Reading a book together, with members taking turns to present chapters", ok:true, why:"A common ゼミ format."},
     {t:"Reading your thesis aloud to the teacher", why:"That isn’t what 輪読 means."},
     {t:"A conference poster session", why:"That is ポスター発表."},
     {t:"Proofreading a classmate’s report", why:"That would be 添削 or peer review, not 輪読."}
   ]},
   {id:"e1u8-q08", lesson:"e1u8-l1", level:2, q:"Kofi’s slide says 「回答者の約3割」. How many respondents is that, roughly?", options:[
     {t:"About 30%", ok:true, why:"1割 is 10%, so 3割 is 30%."},
     {t:"About 3%", why:"That would be 3パーセント; 割 is tenths."},
     {t:"About 0.3%", why:"割 means tenths of the whole, so 3割 is 30%, not 0.3%."},
     {t:"Three people", why:"割 is a proportion, not a count."}
   ]},
   {id:"e1u8-q09", lesson:"e1u8-l1", level:3, q:"Dmitri plans to read his whole レジュメ aloud, word for word, to avoid mistakes. What is the main problem?", options:[
     {t:"Listeners can read it themselves, and its written style doesn’t suit speech; he should talk through it and point to sections", ok:true, why:"Many teachers advise against reading the handout aloud; talking through it keeps contact with listeners."},
     {t:"レジュメ must never contain full sentences", why:"Some do; the issue is reading the handout aloud, not its sentences."},
     {t:"It will make the talk too short", why:"Length isn’t the main issue; reading aloud loses the audience."},
     {t:"Reading aloud is against university rules", why:"There’s no such general rule; it’s advice about effective presenting."}
   ]},
   /* ---------- Lesson 2 ---------- */
   {id:"e1u8-q10", lesson:"e1u8-l2", level:1, q:"What is 質疑応答?", options:[
     {t:"The question-and-answer part after a presentation", ok:true, why:"質疑 (questions) + 応答 (answers)."},
     {t:"The handout for a presentation", why:"That is the レジュメ."},
     {t:"A written exam", why:"質疑応答 is spoken questions and answers after a talk."},
     {t:"The chair of a session", why:"That is the 司会 or 座長."}
   ]},
   {id:"e1u8-q11", lesson:"e1u8-l2", level:2, q:"Which is the best first move when answering a question?", options:[
     {t:"「ご質問ありがとうございます。」", ok:true, why:"Thanking first is polite and gives you a moment to think."},
     {t:"「それは違います。」", why:"Blunt, and it skips checking what was asked."},
     {t:"「わかりません。」", why:"Even if you don’t know, thank and check the question first."},
     {t:"Start answering immediately, before they finish", why:"You may misunderstand the question, and it is rude."}
   ]},
   {id:"e1u8-q12", lesson:"e1u8-l2", level:2, q:"You aren’t sure you understood a long question. What should you say?", options:[
     {t:"「〜ということでしょうか。」", ok:true, why:"Restating the question checks your understanding politely."},
     {t:"「は？」", why:"Sounds rude."},
     {t:"「今後の課題とさせていただきます。」", why:"That is for points beyond your study, not for checking a question."},
     {t:"Answer whatever you think they meant", why:"You risk answering the wrong question."}
   ]},
   {id:"e1u8-q13", lesson:"e1u8-l2", level:1, q:"What does the set phrase 勉強不足で申し訳ありませんが… signal in 質疑応答?", options:[
     {t:"That you don’t know the answer yet, said humbly", ok:true, why:"It politely admits a gap in your knowledge."},
     {t:"That the question was badly asked", why:"It blames yourself, not the questioner."},
     {t:"That you want to end the session", why:"It is about a gap in knowledge, not ending the session."},
     {t:"That you disagree strongly", why:"Disagreement uses different phrases, such as 確かに〜。ただ、〜."}
   ]},
   {id:"e1u8-q14", lesson:"e1u8-l2", level:3, q:"At a 学会, Amara is asked about data she doesn’t have. Which answer is best?", options:[
     {t:"「勉強不足で申し訳ありませんが、そのデータはまだ確認しておりません。確認して、後日ご報告いたします。」", ok:true, why:"Honest, humble and helpful, with a concrete offer."},
     {t:"Give an approximate number that sounds plausible", why:"Inventing data damages trust and may mislead."},
     {t:"「その質問は発表と関係ないと思います。」", why:"Dismissive of a fair question."},
     {t:"Stay silent until the 座長 moves on", why:"Silence leaves the questioner without any answer; a polite admission is better."}
   ]},
   {id:"e1u8-q15", lesson:"e1u8-l2", level:2, q:"Which is the best way to disagree with a classmate in a ゼミ?", options:[
     {t:"「確かにその点はあると思います。ただ、〜ではないでしょうか。」", ok:true, why:"Concede, turn, then a soft but clear claim."},
     {t:"「それは間違いです。」", why:"Blunt; it shuts down the exchange."},
     {t:"「まあ、人それぞれですね。」", why:"So soft that no point is made."},
     {t:"Say nothing and disagree privately", why:"The discussion loses your point; disagreement, politely made, is useful."}
   ]},
   {id:"e1u8-q16", lesson:"e1u8-l2", level:1, q:"Which of these is a クッション言葉?", options:[
     {t:"恐れ入りますが", ok:true, why:"A cushion placed before a request or question to someone senior."},
     {t:"したがって", why:"A connective meaning “therefore”, not a cushion."},
     {t:"以上で", why:"Marks the end of what you say."},
     {t:"ご清聴", why:"Part of the closing thanks for listening."}
   ]},
   {id:"e1u8-q17", lesson:"e1u8-l2", level:3, q:"Hana wants to ask a professor for some data they might prefer not to share. Which opening is most suitable?", options:[
     {t:"「差し支えなければ、そのデータを拝見してもよろしいでしょうか。」", ok:true, why:"差し支えなければ (“if it’s no problem”) leaves the professor room to say no; 拝見する is correct for looking at their data."},
     {t:"「データを見せてください。」", why:"A direct request with no cushion; too abrupt to a professor."},
     {t:"「せっかくですが、データを見せてください。」", why:"せっかくですが is for declining an offer, not for asking."},
     {t:"「データをご覧ください。」", why:"ご覧ください asks the professor to look; Hana wants to look herself."}
   ]},
   {id:"e1u8-q18", lesson:"e1u8-l2", level:2, q:"What does 相槌 (such as はい, ええ, nods) usually show?", options:[
     {t:"That the listener is following", ok:true, why:"相槌 signal attention, not necessarily agreement."},
     {t:"That the listener fully agrees", why:"A common misunderstanding: はい often just means “I’m listening”."},
     {t:"That the listener wants to speak now", why:"相槌 support the speaker’s turn rather than take it."},
     {t:"That the listener is bored", why:"Frequent 相槌 usually show engagement."}
   ]},
   /* ---------- Lesson 3 ---------- */
   {id:"e1u8-q19", lesson:"e1u8-l3", level:1, q:"How many categories of keigo does 敬語の指針 (2007) describe?", options:[
     {t:"Five", ok:true, why:"尊敬語, 謙譲語Ⅰ, 謙譲語Ⅱ (丁重語), 丁寧語 and 美化語."},
     {t:"Three", why:"Three is the traditional system; the 2007 guidelines split two of them."},
     {t:"Four", why:"There are five."},
     {t:"Seven", why:"There are five."}
   ]},
   {id:"e1u8-q20", lesson:"e1u8-l3", level:1, q:"What is the 尊敬語 of 言う?", options:[
     {t:"おっしゃる", ok:true, why:"The special 尊敬語 verb for saying."},
     {t:"申す", why:"申す is 謙譲語Ⅱ, for your own saying."},
     {t:"申し上げる", why:"申し上げる is 謙譲語Ⅰ, for your saying to a respected person."},
     {t:"伺う", why:"伺う is 謙譲語Ⅰ for asking, hearing or visiting."}
   ]},
   {id:"e1u8-q21", lesson:"e1u8-l3", level:2, q:"Which sentence uses 謙譲語Ⅰ correctly?", options:[
     {t:"「先生のご論文を拝見しました。」", ok:true, why:"Your looking at the professor’s paper: 拝見する raises the professor."},
     {t:"「先生がご説明します。」", why:"ご〜する is 謙譲語Ⅰ; for the professor’s action use ご説明になる."},
     {t:"「明日、弟のところに伺います。」", why:"伺う would raise your brother. Use 参ります."},
     {t:"「先生、資料を拝見してください。」", why:"拝見する can’t be used for the professor’s looking; use ご覧ください."}
   ]},
   {id:"e1u8-q22", lesson:"e1u8-l3", level:2, q:"What is the difference between 伺う and 参る?", options:[
     {t:"伺う raises the person you visit; 参る is polite to your listener and raises no one", ok:true, why:"謙譲語Ⅰ needs a respected person on the receiving end; 謙譲語Ⅱ needs only a listener."},
     {t:"伺う is casual and 参る is formal", why:"Both are keigo; they differ in whom they respect."},
     {t:"伺う is for the professor’s actions, 参る for yours", why:"Both are for your own actions."},
     {t:"There is no difference", why:"「弟のところに伺います」 is wrong, but 「弟のところに参ります」 is fine."}
   ]},
   {id:"e1u8-q23", lesson:"e1u8-l3", level:3, q:"Sione tells his professor: 「明日は図書館に（　）。」 Which fits best?", options:[
     {t:"参ります", ok:true, why:"No one at the library to raise; 謙譲語Ⅱ is polite to the professor he is talking to."},
     {t:"伺います", why:"伺う needs a respected person on the receiving end; there is none at the library."},
     {t:"いらっしゃいます", why:"尊敬語: it would raise Sione himself."},
     {t:"お越しになります", why:"尊敬語: for the professor’s going, not Sione’s."}
   ]},
   {id:"e1u8-q24", lesson:"e1u8-l3", level:1, q:"Which is an example of 美化語?", options:[
     {t:"お茶", ok:true, why:"A refined word that raises nobody."},
     {t:"いらっしゃる", why:"That is 尊敬語."},
     {t:"拝見する", why:"That is 謙譲語Ⅰ."},
     {t:"申します", why:"That is 謙譲語Ⅱ."}
   ]},
   {id:"e1u8-q25", lesson:"e1u8-l3", level:2, q:"What is the お in 先生へのお手紙 (your letter to the professor)?", options:[
     {t:"謙譲語Ⅰ: your letter, going towards the professor", ok:true, why:"お on your thing directed to a respected person raises them."},
     {t:"尊敬語: the professor’s letter", why:"The letter is yours, not the professor’s; 先生からのお手紙 would be 尊敬語."},
     {t:"美化語: just a refined word", why:"Here the お raises the professor as the receiver."},
     {t:"丁寧語", why:"丁寧語 is です・ます."}
   ]},
   {id:"e1u8-q26", lesson:"e1u8-l3", level:3, q:"Priya wants to say she will send the professor the documents. Which is correct?", options:[
     {t:"「資料をお送りします。」", ok:true, why:"お〜する (謙譲語Ⅰ): her action, going towards the professor."},
     {t:"「資料をお送りになります。」", why:"お〜になる is 尊敬語: it would raise Priya herself."},
     {t:"「資料を送られます。」", why:"〜れる here would be 尊敬語 (or passive): wrong for her own action."},
     {t:"「資料をお送りくださいます。」", why:"お〜くださる is 尊敬語: it would mean the professor does the sending."}
   ]},
   {id:"e1u8-q27", lesson:"e1u8-l3", level:1, q:"Which is the 尊敬語 of 見る?", options:[
     {t:"ご覧になる", ok:true, why:"The special 尊敬語 verb for seeing."},
     {t:"拝見する", why:"謙譲語Ⅰ, for your own looking."},
     {t:"見させていただく", why:"A humble form for your own action."},
     {t:"お見えになる", why:"お見えになる is a 尊敬語 of 来る (to come), not 見る."}
   ]},
   /* ---------- Lesson 4 ---------- */
   {id:"e1u8-q28", lesson:"e1u8-l4", level:1, q:"What is 二重敬語?", options:[
     {t:"The same kind of keigo used twice in one word, such as おっしゃられる", ok:true, why:"おっしゃる is already 尊敬語; 〜れる doubles it."},
     {t:"Using keigo for two people at once", why:"That isn’t what the term means."},
     {t:"Using 尊敬語 and 謙譲語 in the same sentence", why:"That is often correct: 「先生がおっしゃったので、拝見しました」."},
     {t:"Repeating 「よろしくお願いいたします」 twice", why:"Repetitive, but not 二重敬語."}
   ]},
   {id:"e1u8-q29", lesson:"e1u8-l4", level:2, q:"Which is correct for “Has the professor read it?”", options:[
     {t:"「先生はもうお読みになりましたか。」", ok:true, why:"お〜になる, once: correct 尊敬語."},
     {t:"「先生はもうお読みになられましたか。」", why:"二重敬語: お〜になる + 〜れる."},
     {t:"「先生はもう拝読しましたか。」", why:"拝読する is 謙譲語Ⅰ, for your own reading."},
     {t:"「先生はもうお読みしましたか。」", why:"お〜する is 謙譲語Ⅰ, for your own action."}
   ]},
   {id:"e1u8-q30", lesson:"e1u8-l4", level:3, q:"A visitor asks Kenji where to get a guest pass. Which is correct?", options:[
     {t:"「受付でお尋ねください。」", ok:true, why:"尊敬語 for the visitor’s asking."},
     {t:"「受付で伺ってください。」", why:"伺う is 謙譲語Ⅰ, for your own asking; it lowers the visitor."},
     {t:"「受付で申してください。」", why:"申す is 謙譲語Ⅱ, for your own saying."},
     {t:"「受付でお聞きしてください。」", why:"お〜する is 謙譲語Ⅰ, for your own action; it can’t describe the visitor’s asking."}
   ]},
   {id:"e1u8-q31", lesson:"e1u8-l4", level:2, q:"According to 敬語の指針, which form is accepted by custom even though it technically doubles?", options:[
     {t:"お伺いする", ok:true, why:"The guidelines list お伺いする (with お伺いいたす and お伺い申し上げる) as established."},
     {t:"おっしゃられる", why:"A standard example of 二重敬語 to avoid."},
     {t:"ご覧になられる", why:"Doubles 尊敬語; ご覧になる is enough."},
     {t:"お帰りになられる", why:"Doubles 尊敬語; お帰りになる is enough."}
   ]},
   {id:"e1u8-q32", lesson:"e1u8-l4", level:2, q:"When does 〜させていただく fit best, according to the guidelines?", options:[
     {t:"When you act with the other person’s permission and benefit from it", ok:true, why:"For example 「録音させていただいてもよろしいでしょうか」."},
     {t:"Whenever you want to be extra polite", why:"That leads to over-use, such as 在籍させていただいております."},
     {t:"Only for the professor’s actions", why:"It is about your own actions."},
     {t:"Never: it is always wrong", why:"It is correct where permission and benefit are involved."}
   ]},
   {id:"e1u8-q33", lesson:"e1u8-l4", level:3, q:"Ana’s professor asks her to send the slides by Friday. Which reply do most etiquette guides advise?", options:[
     {t:"「承知いたしました。金曜日までにお送りいたします。」", ok:true, why:"承知いたしました is the widely advised acceptance, and お送りいたします is correct for her action."},
     {t:"「了解っす。」", why:"Casual slang; not suitable for a teacher."},
     {t:"「ご苦労さまです。金曜日までに送ります。」", why:"ご苦労さま is felt to be said by seniors to juniors."},
     {t:"「承知いたしました。金曜日までにお送りになります。」", why:"お〜になる is 尊敬語: it would raise Ana’s own sending."}
   ]},
   {id:"e1u8-q34", lesson:"e1u8-l4", level:2, q:"What does ウチ・ソト mean for keigo?", options:[
     {t:"To an outsider, you don’t use 尊敬語 or titles for people on your own side", ok:true, why:"Your family and colleagues are treated as part of “you”: 「母が申しておりました」."},
     {t:"You use keigo only indoors", why:"ウチ・ソト is about groups, not places."},
     {t:"You use more keigo for your family than for strangers", why:"The reverse: to outsiders, your own side is humbled."},
     {t:"You always use 尊敬語 for anyone older than you", why:"Group membership can override age and rank."}
   ]},
   {id:"e1u8-q35", lesson:"e1u8-l4", level:3, q:"Tomás tells his professor about his older brother’s visit. Which is correct?", options:[
     {t:"「来週、兄が東京に参ります。」", ok:true, why:"兄 (not お兄さん) and 参ります: his brother is ウチ."},
     {t:"「来週、お兄さんが東京にいらっしゃいます。」", why:"お兄さん and いらっしゃる raise his own brother to an outsider."},
     {t:"「来週、兄が東京にいらっしゃいます。」", why:"兄 is right, but いらっしゃる is 尊敬語."},
     {t:"「来週、お兄様が東京に参ります。」", why:"お兄様 is for someone else’s brother."}
   ]},
   {id:"e1u8-q36", lesson:"e1u8-l4", level:1, q:"Which is the standard form of “I read (your paper)” with させていただく?", options:[
     {t:"読ませていただきました", ok:true, why:"読む is a godan verb: 読ませる + いただく."},
     {t:"読まさせていただきました", why:"さ入れ言葉: an extra さ, widely regarded as non-standard."},
     {t:"読みさせていただきました", why:"Not a correct form."},
     {t:"読めさせていただきました", why:"Not a correct form: the causative of 読む is 読ませる."}
   ]},
   /* ---------- Lesson 5 ---------- */
   {id:"e1u8-q37", lesson:"e1u8-l5", level:1, q:"How should a student usually address a professor at the start of an email?", options:[
     {t:"「山田先生」", ok:true, why:"先生 is the usual title for teachers in student emails."},
     {t:"「山田教授様」", why:"教授 is already a title; 様 on top doubles it."},
     {t:"「山田さん」", why:"Too casual for a professor."},
     {t:"「山田先生様」", why:"Doubles the title."}
   ]},
   {id:"e1u8-q38", lesson:"e1u8-l5", level:1, q:"Which opening greeting is usual in an email to a professor who knows you?", options:[
     {t:"「お世話になっております。」", ok:true, why:"The standard opening in university and business emails."},
     {t:"「やっほー。」", why:"Very casual."},
     {t:"「ご苦労さまです。」", why:"Felt to be said by seniors to juniors."},
     {t:"「はじめてご連絡いたします。」", why:"That is for a first contact, not someone who knows you."}
   ]},
   {id:"e1u8-q39", lesson:"e1u8-l5", level:2, q:"What should come straight after the 名乗り in an email to a professor?", options:[
     {t:"The 用件: why you are writing, in one sentence", ok:true, why:"Professors should know your purpose in the first lines."},
     {t:"A long explanation of your background", why:"Details come after the purpose, and briefly."},
     {t:"Your signature", why:"The 署名 goes at the end."},
     {t:"An apology for writing", why:"Not needed; state your purpose politely."}
   ]},
   {id:"e1u8-q40", lesson:"e1u8-l5", level:2, q:"Which request is the most suitable for asking a professor to choose a meeting time?", options:[
     {t:"「ご都合のよい日時をお知らせいただけますと幸いです。」", ok:true, why:"A standard soft request with いただく."},
     {t:"「都合のいい日を教えて。」", why:"Plain, casual form."},
     {t:"「至急、日時を決めてください。」", why:"Demanding: it gives orders to the professor."},
     {t:"「ご都合のよい日時をお知らせしてください。」", why:"お〜する is 謙譲語Ⅰ; it can’t describe the professor’s action."}
   ]},
   {id:"e1u8-q41", lesson:"e1u8-l5", level:3, q:"Leila’s professor replies: 「水曜日の11時に研究室で話しましょう。」 Which reply is best?", options:[
     {t:"「ご返信いただき、ありがとうございます。承知いたしました。水曜日の11時に研究室へ伺います。」", ok:true, why:"Thanks, accepts and confirms, with 伺う for her visit."},
     {t:"「了解です。」", why:"Too casual, and doesn’t confirm the details."},
     {t:"「水曜日の11時に研究室へいらっしゃいます。」", why:"いらっしゃる raises her own going."},
     {t:"「水曜日の11時に研究室へ参られます。」", why:"参る + れる is a confused form; use 伺います."}
   ]},
   {id:"e1u8-q42", lesson:"e1u8-l5", level:2, q:"What does 研究室 mean?", options:[
     {t:"A professor’s office, and also their research group or lab", ok:true, why:"Both meanings are common."},
     {t:"The university library", why:"That is 図書館."},
     {t:"A lecture hall", why:"That is 講義室 or 教室."},
     {t:"The student affairs office", why:"That is 学生課 or a similar office."}
   ]},
   {id:"e1u8-q43", lesson:"e1u8-l5", level:1, q:"What do you say as you enter a professor’s office?", options:[
     {t:"「失礼します。」", ok:true, why:"The set phrase for entering a teacher’s room."},
     {t:"「ただいま。」", why:"Said when coming home."},
     {t:"「いただきます。」", why:"Said before eating."},
     {t:"「お疲れさまでした。」", why:"Said at the end of work, not when entering."}
   ]},
   {id:"e1u8-q44", lesson:"e1u8-l5", level:3, q:"Fatima emailed her supervisor five working days ago about a non-urgent question and has no reply. What should she do?", options:[
     {t:"Send a polite reminder in the same thread: 「先日お送りした〜の件で、再度ご連絡いたしました。」", ok:true, why:"Polite, keeps the original visible, and doesn’t blame."},
     {t:"Write: 「なぜ返信しないのですか。」", why:"Accusing; emails are missed for ordinary reasons."},
     {t:"Assume the answer is no", why:"A missed email is more likely; a reminder is normal."},
     {t:"Go to the professor’s home", why:"Inappropriate; use the usual channels."}
   ]},
   {id:"e1u8-q45", lesson:"e1u8-l5", level:2, q:"The door to a professor’s room is open, but they are typing busily. What is best?", options:[
     {t:"Knock and ask: 「今、少しよろしいでしょうか。」", ok:true, why:"Checks whether it’s a good moment before taking their time."},
     {t:"Walk in and start talking", why:"Doesn’t give them the chance to say now isn’t good."},
     {t:"Wait silently in the doorway until they notice", why:"Awkward for both; a short polite question is better."},
     {t:"Leave a note on the door and never follow up", why:"A note may be fine, but follow up by email if you need a meeting."}
   ]}
  ]
});
